function match (match, path) {
  if (match === '*' || match === path) {
    return true
  }
  if (Array.isArray(match)) {
    return match.indexOf(path) > -1
  }
  if (match instanceof RegExp) {
    return match.test(path)
  }
  return false
}
const routerAuth = {
  auth: [],
  init: function (auth, router) {
    this.auth = auth
    router.beforeEach((to, from, next) => {
      this.beforeEach(to, from, next)
    })
  },
  beforeEach: function (to, from, next) {
    let matchAuth = []
    for (let auth of this.auth) {
      if (auth.except) {
        if (match(auth.except, to.path)) continue
      }
      if (match(auth.match, to.path)) {
        matchAuth.push(auth)
      }
    }
    this.validate(matchAuth, to).then(function () {
      next()
    }).catch((fallback) => {
      if (fallback.rt === false && fallback.auth.fallbackUrl) {
        next(fallback.auth.fallbackUrl)
      } else if (typeof fallback.rt === 'string') {
        next(fallback.rt)
      } else {
        next(false)
        if (window) {
          window.alert('没有访问权限')
        }
      }
    })
  },
  validate: function (auth, route, index = 0) {
    let self = this
    if (auth.length === index) return Promise.resolve(true)
    return new Promise(function (resolve) {
      auth[index].handler(route, resolve)
    }).then(function (type) {
      if (type === true) {
        return self.validate(auth, route, index + 1)
      } else {
        return Promise.reject({
          auth: auth[index],
          rt: type
        })
      }
    })
  }
}

export default routerAuth
