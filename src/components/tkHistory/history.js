import ua from '../../utils/tkUa'
let transtionType = ''
const history = {
  router: null,
  transtion: '',
  transtionMode: 'auto',
  redirect: {
    type: null,
    fullPath: null,
    route: null
  },
  historyRecord: [],
  init: function (router, options = {}) {
    this.router = router
    router.beforeEach((to, from, next) => { this.beforeEach(to, from, next) })
    router.afterEach((to, from) => { this.afterEach(to, from) })
    this.transtionMode = options.transtionMode ? options.transtionMode : 'auto'
  },
  beforeEach: function (to, from, next) {
    if (this.redirect.type === null) {
      let index = this.historyRecord.indexOf(decodeURIComponent(to.fullPath))
      // 上一页
      if (index !== -1 && index + 2 === this.historyRecord.length) {
        this.redirect.type = 'back'
        this.redirect.fullPath = decodeURIComponent(to.fullPath)
      } else {
        this.redirect.type = 'push'
        this.redirect.fullPath = decodeURIComponent(to.fullPath)
      }
    } else {
      // 未能后退到目标url
      if (this.redirect.type === 'back' && this.redirect.route && decodeURIComponent(to.fullPath) !== this.redirect.fullPath) {
        let i = this.historyRecord.indexOf(decodeURIComponent(this.redirect.fullPath))
        this.historyRecord.splice(i + 1)
        this.redirect.type = 'replace'
        next(this.redirect.route)
        return
      }
      this.redirect.fullPath = decodeURIComponent(to.fullPath)
    }
    if (this.transtionMode === 'always' || (this.transtionMode === 'auto' && ua.isMobile)) {
      if (this.historyRecord.length === 0) {
        transtionType = this.transtion = ''
      } else {
        transtionType = this.transtion = this.redirect.type === 'back' ? 'back' : 'forward'
      }
    }
    next()
  },
  afterEach: function (to, from) {
    if (this.redirect.type !== null) {
      if (this.redirect.type === 'push') {
        this.historyRecord.push(this.redirect.fullPath)
      } else if (this.redirect.type === 'replace') {
        this.historyRecord.pop()
        this.historyRecord.push(this.redirect.fullPath)
      } else if (this.redirect.type === 'back') {
        let i = this.historyRecord.lastIndexOf(decodeURIComponent(this.redirect.fullPath))
        if (i !== -1) {
          this.historyRecord.splice(i + 1)
        }
      }
      this.redirect = {
        type: null,
        fullPath: null,
        route: null
      }
    }
  },
  push: function (route) {
    this.redirect.type = 'push'
    this.router.push(route)
  },
  replace: function (route) {
    this.redirect.type = 'replace'
    this.router.replace(route)
  },
  back: function (route) {
    if (route) {
      let fullPath = this.router.resolve(route, this.router.currentRoute).route.fullPath
      let index = this.historyRecord.indexOf(decodeURIComponent(fullPath))
      if (index === -1) {
        this.replace(route)
      } else {
        this.redirect.type = 'back'
        this.redirect.fullPath = fullPath
        this.router.go(index + 1 - this.historyRecord.length)
      }
    } else if (this.historyRecord.length > 1) {
      this.redirect.type = 'back'
      this.router.go(-1)
    } else {
      this.replace('/')
    }
  },
  beforeEnter (el) {
    if (transtionType === '') return
    el.style.position = 'absolute'
    el.style.left = 0
    el.style.right = 0
    el.style.top = 0
    if (transtionType === 'back') {
      el.style.zIndex = 0
    } else {
      el.style.zIndex = 2
    }
  },
  beforeLeave (el) {
    if (transtionType === '') return
    el.style.position = 'absolute'
    el.style.zIndex = 1
    el.style.left = 0
    el.style.right = 0
    el.style.top = 0
  },
  enter (el, done) {
    if (transtionType === '') {
      done()
      return
    }
    const velocity = require('velocity-animate')
    if (transtionType === 'back') {
      velocity(el, {translateX: [0, '-20%']}, {duration: 500, complete: done, easing: 'ease'})
    } else {
      velocity(el, {translateX: [0, '100%']}, {duration: 500, complete: done, easing: 'ease'})
    }
  },
  leave (el, done) {
    if (transtionType === '') {
      done()
      return
    }
    const velocity = require('velocity-animate')
    if (transtionType === 'back') {
      velocity(el, {translateX: ['100%', 0]}, {duration: 500, complete: done, easing: 'ease'})
    } else {
      velocity(el, {translateX: ['-20%', 0]}, {duration: 500, complete: done, easing: 'ease'})
    }
  }
}

const mixin = {
  methods: {
    $push: function (route) {
      history.push(route)
    },
    $replace: function (route) {
      history.replace(route)
    },
    $back: function (route) {
      if (route && route.target) {
        route = null
      }
      history.back(route)
    }
  }
}

export {history, mixin}
