import TkGlobal from './tkGlobal.vue'
import manager from './manager'

const install = function (Vue) {
  Vue.component('tk-global', Vue.extend(TkGlobal))
  manager.vue = Vue
}
TkGlobal.install = install
export {TkGlobal as default, install}
