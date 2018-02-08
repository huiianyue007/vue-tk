/**
 * Created by AKer on 2016/12/20.
 */
import tkUa from '../../utils/tkUa/index'
import vue from 'vue'

const Rxports = {
  _class: null,
  _color: null,
  _show: true,
  _height: null,
  _immersion: false,
  setImmersion: function (isImmersion) {
    this._immersion = isImmersion
  },
  setClass: function (cls) {
    this._class = cls
  },
  setColor: function (color) {
    this._color = color
  },
  show: function () {
    this._show = true
  },
  hide: function () {
    this._show = false
  },
  reset: function () {
    this._color = this._class = null
    this._show = this._space = true
    this._immersion = false
  },
  init: function () {
    if (this._height !== null) return
    this._height = 0
    let self = this
    if (!tkUa.isServer && tkUa.isPlus) {
      if (window.plus) {
        if (window.plus.navigator.isImmersedStatusbar()) {
          vue.nextTick(function () {
            self._height = window.plus.navigator.getStatusbarHeight()
          })
        }
      } else {
        document.addEventListener('plusready', function () {
          if (window.plus.navigator.isImmersedStatusbar()) {
            self._height = window.plus.navigator.getStatusbarHeight()
          }
        })
      }
    }
  },
  height: function () {
    return this._height
  },
  toggle: function () {
    this._show = !this._show
  },
  isShow: function () {
    return this._show
  }
}

module.exports = Rxports

