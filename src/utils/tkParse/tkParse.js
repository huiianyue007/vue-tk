import tkAjax from '../tkAjax'

function findClass (className, model) {
  let cls = model.find((item) => {
    return item.className === className
  })
  return cls ? cls.fields : null
}

function formatValue (value, field) {
  if (value['__type'] || !field) return value
  if (field.type === 'Date') {
    value = {
      '__type': 'Date',
      iso: value
    }
  } else if (field.type === 'Pointer') {
    value = {
      '__type': 'Pointer',
      'className': field.targetClass,
      'objectId': value
    }
  } else if (field.type === 'GeoPoint') {
    value = {
      '__type': 'GeoPoint',
      latitude: value.latitude,
      longitude: value.longitude
    }
  }
  return value
}
function clearValue (value) {
  if (!value) return value
  if (!value['__type']) return value
  if (value['__type'] === 'Date') {
    value = value.iso
  } else if (value['__type'] === 'Pointer') {
    value = value.objectId
  } else if (value['__type'] === 'Object') {
    value = clearObject(value)
  }
  return value
}

function clearObject (object) {
  for (let i in object) {
    object[i] = clearValue(object[i])
  }
  return object
}

function formatField (config, next) {
  if (tkParse.model === null || !/\/classes\//.test(config.url)) { next(config) }
  let skipQuery = [
    '$exists',
    '$select',
    '$dontSelect',
    '$all',
    '$regex',
    '$text'
  ]
  let match = config.url.match(/\/classes\/([^/?]+)/)
  if (match === null) next(config)
  let className = match[1]
  let fields = findClass(className, tkParse.model)
  if (fields === null) next(config)
  if (config.data) {
    for (let i in config.data) {
      config.data[i] = formatValue(config.data[i], fields[i])
    }
  }
  if (config.params && config.params.where) {
    let where = config.params.where
    for (let i in where) {
      if (typeof where[i] === 'object' && /^\$/.test(Object.keys(where[i])[0])) {
        for (let j in where[i]) {
          if (skipQuery.indexOf(j) === -1) {
            where[i][j] = formatValue(where[i][j], fields[i])
          }
        }
      } else {
        where[i] = formatValue(where[i], fields[i])
      }
    }
  }
  next(config)
}

function formatResult (res, next) {
  if (tkParse.model === null || !/\/classes\//.test(res.config.url) || res.status !== 200) { next(res) }
  let match = res.config.url.match(/\/classes\/([^/?]+)/)
  if (match === null) next(res)
  let className = match[1]
  let fields = findClass(className, tkParse.model)
  if (fields === null) next(res)
  let data = res.data
  if (data.results) {
    for (let i in data.results) {
      let result = data.results[i]
      for (let j in result) {
        result[j] = clearValue(result[j])
      }
    }
  } else {
    for (let j in data) {
      data[j] = clearValue(data[j])
    }
  }
  next(res)
}

const tkParse = {
  isParse: true,
  intance: null,
  model: null,
  options: {
    headers: {},
    preMidware: formatField,
    midware: formatResult
  },
  init (options = {}) {
    if (!options.model || !options.baseURL) {
      throw new Error('缺少model或baseUrl')
    }
    this.model = options.model
    this.options.headers = {
      'X-Parse-Application-Id': options.appId,
      'X-Parse-REST-API-Key': options.restKey,
      'X-Parse-Master-Key': options.masterKey,
      'X-Parse-Session-Token': options.sessionToken
    }
    Object.keys(this.options.headers).forEach(key => this.options.headers[key] === undefined && delete this.options.headers[key])
    this.options.baseURL = options.baseURL
    this.intance = tkAjax.create(this.options)
  },
  setSessionToken: function (sessionToken) {
    this.options.headers['X-Parse-Session-Token'] = sessionToken
    this.intance = tkAjax.create(this.options)
  },
  formatField: function (config, next) {
    if (this.model === null || !/\/classes\//.test(config.url)) { next(config) }

    let match = config.url.match(/\/classes\/([^/?])+/)
    if (match === null) next(config)
    let className = match[1]
    let fields = findClass(className, this.model)
    if (fields === null) next(config)
    if (config.data) {
      for (let i in config.data) {
        config.data[i] = formatValue(config.data[i], fields[i])
      }
    }
    if (config.params && config.params.where) {
      let where = config.params.where
      for (let i in where) {
        if (typeof where[i] === 'object' && /^\$/.test(Object.keys(where[i])[0])) {
          for (let j in where[i]) {
            where[i][j] = formatValue(where[i][j], fields[i])
          }
        } else {
          where[i] = formatValue(where[i], fields[i])
        }
      }
    }
    next(config)
  },
  get (url, options) {
    return this.intance.get(url, options)
  },
  post (url, data, options) {
    return this.intance.post(url, data, options)
  },
  put (url, data, options) {
    return this.intance.put(url, data, options)
  },
  delete (url, options) {
    return this.intance.delete(url, options)
  },
  request (url, options) {
    return this.intance.request(url, options)
  }
}

export default tkParse
