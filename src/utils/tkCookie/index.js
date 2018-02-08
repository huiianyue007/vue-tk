import tkCookie from './tkCookie'
import utils from '../../core/utils'

const install = function (Vue) {
  utils.defineProperty('$tkCookie', tkCookie, Vue)
}
tkCookie.install = install
export {tkCookie as default, install}
