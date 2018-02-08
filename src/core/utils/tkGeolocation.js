import Vue from 'vue'
const Geolocation = function (key, referer) {
  if (!Vue.prototype.$isServer) {
    this.init(key, referer)
  }
}
var getCallback = null
var getErrCallback = null
var timeStart = null
var geoIframeId = '_geoIframe_' + Math.ceil(Math.random() * 10000000)
var timeEnd = null
var timeout = null
var _timer = null
Geolocation.prototype.init = function (key, referer) {
  if (!key) {
    window.alert('请输入key！')
    return
  }
  if (!referer) {
    window.alert('请输入referer！')
    return
  }
  let geoIframe = document.createElement('iframe')
  geoIframe.setAttribute('id', geoIframeId)
  geoIframe.setAttribute('src', 'http://apis.map.qq.com/tools/geolocation?key=' + key + '&referer=' + referer + '_js')
  geoIframe.setAttribute('style', 'display: none; width: 100%; height: 30%')
  document.body.appendChild(geoIframe)
  window.addEventListener('message', function (event) {
    var loc = event.data
    if (loc && loc.module === 'geolocation') {
      // 获取定位信息成功
      clearTimeout(_timer)
      getCallback && getCallback(loc)
      getCallback = null
      getErrCallback = null
    } else {
      timeEnd = new Date().getTime()
      var timeCost = timeEnd - timeStart
      if (timeCost >= timeout) { // 获取定位信息超时
        getErrCallback && getErrCallback()
        getErrCallback = null
        getCallback = null
        clearTimeout(_timer)
      } else {
        // 继续等待
      }
    }
  }, false)
}
/**
 获取位置信息
 @method getLocation
 @param (sucCallback, [errCallback], [options: {timeout: number, failTipFlag: boolean}])
 @return null
 **/
Geolocation.prototype.getLocation = function (options) {
  return new Promise((resolve, reject) => {
    getCallback = resolve
    getErrCallback = reject
    timeStart = new Date().getTime()
    timeout = (options && options.timeout) ? +options.timeout : 10000 // 超时时间，10s为推荐值，可根据需求更改，不建议太短
    clearTimeout(_timer)
    _timer = setTimeout(function () {
      getErrCallback && getErrCallback()
      getErrCallback = null
    }, timeout)
    // 为防止定位组件在message事件监听前已经触发定位成功事件，在此处显示请求一次位置信息
    document.getElementById(geoIframeId).contentWindow.postMessage('getLocation', '*')
  })
}
Geolocation.prototype.isChinese = function () {
  return new Promise((resolve, reject) => {
    this.getLocation().then(position => {
      resolve(position.nation === '中国')
    }).catch(() => {
      reject()
    })
  })
}
export default Geolocation
