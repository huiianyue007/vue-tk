import tkHelper from '../tkHelper'

export default {
  parse: function (cookieString) {
    return cookieString.split(/[;] */).reduce(function (result, pairStr) {
      let arr = pairStr.split('=')
      if (arr.length === 2) { result[arr[0]] = decodeURIComponent(arr[1]) }
      return result
    }, {})
  },
  get: function (sKey) {
    if (tkHelper.isServer) return null
    return decodeURIComponent(document.cookie.replace(new RegExp('(?:(?:^|.*;)\\s*' + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, '\\$&') + '\\s*\\=\\s*([^;]*).*$)|^.*$'), '$1')) || null
  },
  set: function (sKey, sValue, vEnd, sPath, sDomain, bSecure) {
    if (tkHelper.isServer) return false
    if (!sKey || /^(?:expires|max\-age|path|domain|secure)$/i.test(sKey)) { return false }
    let sExpires = ''
    if (vEnd) {
      switch (vEnd.constructor) {
        case Number:
          sExpires = vEnd === Infinity ? '; expires=Fri, 31 Dec 9999 23:59:59 GMT' : '; max-age=' + vEnd
          break
        case String:
          sExpires = '; expires=' + vEnd
          break
        case Date:
          sExpires = '; expires=' + vEnd.toUTCString()
          break
      }
    }
    document.cookie = encodeURIComponent(sKey) + '=' + encodeURIComponent(sValue) + sExpires + (sDomain ? '; domain=' + sDomain : '') + (sPath ? '; path=' + sPath : '') + (bSecure ? '; secure' : '')
    return true
  },
  delete: function (sKey, sPath, sDomain) {
    if (tkHelper.isServer) return false
    if (!sKey) {
      let keys = this.keys()
      let self = this
      keys.forEach(function (key) {
        if (key) {
          self.delete(key)
        }
      })
      return
    }
    if (!this.has(sKey)) { return false }
    document.cookie = encodeURIComponent(sKey) + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT' + (sDomain ? '; domain=' + sDomain : '') + (sPath ? '; path=' + sPath : '')
    return true
  },
  has: function (sKey) {
    if (tkHelper.isServer) return false
    return (new RegExp('(?:^|;\\s*)' + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, '\\$&') + '\\s*\\=')).test(document.cookie)
  },
  keys: function () {
    if (tkHelper.isServer) return false
    let aKeys = document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g, '').split(/\s*(?:\=[^;]*)?;\s*/)
    for (let nIdx = 0; nIdx < aKeys.length; nIdx++) { aKeys[nIdx] = decodeURIComponent(aKeys[nIdx]) }
    return aKeys
  },
  list: function () {
    if (tkHelper.isServer) return null
    return this.parse(document.cookie)
  }
}
