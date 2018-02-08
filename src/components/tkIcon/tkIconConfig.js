import Vue from 'vue'

const curlApi = 'http://api.mokekeji.com/curl'
const iconfont = 'http://iconfont.cn'
const iconfontPublicApi = 'http://iconfont.cn/api/collection/detail.json'
const iconfontProjectApi = 'http://iconfont.cn/api/project/detail.json'

const svgRegStart = /^\<svg[^\>]*\>/
const svgRegEnd = /\<\/svg\>$/

const Rxports = {
  mode: 'common',
  configs: {},
  icons: {},
  ctoken: '',
  EGG_SESS: '',
  setMode: function (mode) {
    if (mode === 'common' || mode === 'material' || mode === 'ios') {
      this.mode = mode
    }
  },
  setCtoken: function (ctoken, sess) {
    this.ctoken = ctoken
    this.EGG_SESS = sess || ''
  },
  set: function (configs) {
    this.configs = configs
    this.init()
  },
  reset: function () {
    this.configs = this.icons = {}
    this.ctoken = this.EGG_SESS = ''
  },
  logError: function (error) {
    console.error(error)
  },
  init: function () {
    let self = this
    for (let i in this.configs) {
      let config = this.configs[i]
      let state = config.data ? 'success' : 'waiting'
      let data = config.data ? config.data : null
      let code = config.code ? config.code : null
      Vue.set(this.icons, i, {
        state: state,
        data: data,
        code: code,
        type: config.type
      })
    }

    this.getCtoken().then(function () {
      self.download()
    }, self.logError)
  },
  download: function () {
    let self = this
    for (let name in this.icons) {
      let icon = this.icons[name]
      if (icon.state === 'waiting') {
        this.getData(name, icon.code, icon.type).then(function () {
          Vue.set(icon, 'state', 'success')
          self.download()
        }, function (error) {
          Vue.set(icon, 'state', 'failed')
          self.logError(error)
        })
        return
      }
    }
  },
  getData: function (name, code, type) {
    const tkAjax = require('../../utils/tkAjax').default
    let self = this
    let url, cookie
    if (type === 'public') {
      url = iconfontPublicApi + '?id=' + code + '&ctoken=' + this.ctoken
      cookie = 'ctoken=' + this.ctoken
    } else {
      if (this.EGG_SESS === '') {
        return Promise.reject('使用私人项目库，必须设置EGG_SESS')
      }
      url = iconfontProjectApi + '?pid=' + code + '&ctoken=' + this.ctoken
      cookie = 'ctoken=' + this.ctoken + ';EGG_SESS=' + this.EGG_SESS
    }
    let body = {
      url: url,
      headers: {
        Cookie: cookie
      }
    }
    return new Promise((resolve, reject) => {
      tkAjax.post(curlApi, body).then(function (res) {
        let body = res.data
        if (res.status === 200) {
          let indexName = self.configs[name].useClassAsName ? 'font_class' : 'name'
          let data = body.data
          if (data.code === 200 && data.data.icons) {
            let icons = {}

            for (let i = 0; i < data.data.icons.length; i++) {
              let icon = data.data.icons[i]
              icons[icon[indexName]] = icon.show_svg.replace(svgRegStart, '')
                .replace(svgRegEnd, '')
            }
            self.icons[name].data = icons
            self.icons[name].name = data.data.project ? data.data.project.name : data.data.collection.name
            self.icons[name].id = data.data.project ? data.data.project.id : data.data.collection.id
            resolve()
            return
          }
        }
        reject(name + '图标组未能下载')
      })
    })
  },
  getCtoken: function () {
    if (this.ctoken) {
      return Promise.resolve()
    }
    let needDownload = false
    for (let i in this.icons) {
      if (this.icons[i].state === 'waiting') {
        needDownload = true
        break
      }
    }
    if (!needDownload) {
      return Promise.resolve()
    }
    const tkAjax = require('../../utils/tkAjax').default
    let self = this

    let body = {
      url: iconfont,
      type: 'text'
    }
    return new Promise((resolve, reject) => {
      tkAjax.post(curlApi, body)
        .then(function (res) {
          let body = res.data
          if (res.status === 200) {
            let tokenReg = new RegExp('ctoken\=(\\w+icon-font)\;')
            let cookie = body.headers['set-cookie'].join()
            let match = cookie.match(tokenReg)
            if (match) {
              self.ctoken = match[1]
              resolve()
              return
            }
          }
          reject('ctoken获取失败')
        })
    })
  }
}

module.exports = Rxports
