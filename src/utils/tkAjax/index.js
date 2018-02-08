import {tkAjax, tkAjaxGlobal} from './tkAjax'
import utils from '../../core/utils'

const install = function (Vue) {
  utils.defineProperty('$tkAjax', tkAjax, Vue)
  utils.defineProperty('$tkAjaxGlobal', tkAjaxGlobal, Vue)
}
tkAjax.install = install
export {tkAjax as default, tkAjaxGlobal as $tkAjaxGlobal}
