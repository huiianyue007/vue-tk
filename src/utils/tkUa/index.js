import tkUa from './tkUa'
import utils from '../../core/utils'

const install = function (Vue) {
  utils.defineProperty('$tkUa', tkUa, Vue)
}
tkUa.install = install
export {tkUa as default, install}
