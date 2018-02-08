import tkParse from './tkParse'
import utils from '../../core/utils'

const install = function (Vue) {
  utils.defineProperty('$tkParse', tkParse, Vue)
}
tkParse.install = install
export {tkParse as default, install}
