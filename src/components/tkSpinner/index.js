import TkSpinner from './tkSpinner.vue'
const install = function (Vue) {
  Vue.component('tk-spinner', Vue.extend(TkSpinner))
}
TkSpinner.install = install
export {TkSpinner as default, install}
