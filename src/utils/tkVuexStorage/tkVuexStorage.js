/**
 * Created by 71773 on 2017/5/23.
 */
import helper from '../tkHelper'
import Cookie from '../tkCookie'

const Export = {
  storageKeys: [],
  cookieKeys: [],
  init: function (store, storageKeys, cookieKeys) {
    this.storageKeys = storageKeys
    this.cookieKeys = cookieKeys
    const self = this
    store.subscribe(function (mutation, state) {
      if (helper.isServer) return
      self.asycStorage(mutation, state)
      self.asycCookie(mutation, state)
    })
  },
  restoreStorage () {
    if (helper.isServer) return
    let storage = window.localStorage.getItem('storeAsyc')
    if (storage) {
      let store = JSON.parse(storage)
      for (let i in store) {
        if (this.storageKeys.indexOf(i) === -1) {
          delete store[i]
        }
      }
      return store
    }
    return null
  },
  restoreCookie (cookie) {
    if (helper.isServer && !cookie) return
    if (!cookie) {
      cookie = document.cookie
    }
    cookie = Cookie.parse(cookie)
    if (cookie.storeAsyc) {
      let store = JSON.parse(decodeURIComponent(cookie.storeAsyc))
      for (let i in store) {
        if (this.cookieKeys.indexOf(i) === -1) {
          delete store[i]
        }
      }
      return store
    }
    return null
  },
  asycStorage: function (mutation, state) {
    if (!this.storageKeys || this.storageKeys.length === 0) return
    let storeSave = {}
    this.storageKeys.forEach(function (val) {
      if (state[val]) {
        storeSave[val] = state[val]
      }
    })
    window.localStorage.setItem('storeAsyc', JSON.stringify(storeSave))
  },
  asycCookie: function (mutation, state) {
    if (!this.cookieKeys || this.cookieKeys.length === 0) return
    let storeSave = {}
    this.cookieKeys.forEach(function (val) {
      if (state[val]) {
        storeSave[val] = state[val]
      }
    })
    Cookie.set('storeAsyc', JSON.stringify(storeSave), Infinity, '/')
  }
}

export default Export
