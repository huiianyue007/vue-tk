import tkHelper from './tkHelper'
import utils from '../../core/utils'

const install = function (Vue) {
  utils.defineProperty('$tkHelper', tkHelper, Vue)
}
tkHelper.install = install
export {tkHelper as default, install}
