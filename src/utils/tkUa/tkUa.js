import Vue from 'vue'
const isServer = Vue.prototype.$isServer

const Ua = {
  userAgent: null,
  isServer: isServer,
  isClient: !isServer
}

Object.defineProperties(Ua, {
  ua: {
    get: () => isServer ? Ua.userAgent : navigator.userAgent
  },
  isPlus: {
    get: () => /Html5Plus/i.test(Ua.ua)
  },
  isAndorid: {
    get: () => /(Android);?[\s\/]+([\d.]+)?/.test(Ua.ua)
  },
  isIos: {
    get: () => /(iPhone\sOS)\s([\d_]+)/.test(Ua.ua)
  },
  isWechat: {
    get: () => /(MicroMessenger)\/([\d\.]+)/i.test(Ua.ua)
  },
  isMobile: {
    get: () => /MicroMessenger|iPhone|Android|iPad/i.test(Ua.ua)
  },
  isDeskTop: {
    get: () => !Ua.isMobile
  }
})

export default Ua
