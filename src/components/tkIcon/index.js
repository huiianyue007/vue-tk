// 解决低版本浏览器svg innerHtml无效的问题
import 'svg-innerhtml/svg-innerhtml'
import TkIcon from './tkIcon.vue'
import tkIconConfig from './tkIconConfig'
import utils from '../../core/utils'

const install = function (Vue) {
  Vue.component('tk-icon', Vue.extend(TkIcon))
  utils.defineProperty('$tkIcon', tkIconConfig, Vue)
}
TkIcon.install = install
export {TkIcon as default, tkIconConfig}
