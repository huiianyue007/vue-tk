import tkRegions from './tkRegions'
import utils from '../../core/utils'

const install = function (Vue) {
  utils.defineProperty('$tkRegions', tkRegions, Vue)
}
tkRegions.install = install
export {tkRegions as default, install}
