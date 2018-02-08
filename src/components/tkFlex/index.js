import TkFlex from './tkFlex.vue'

const install = function (Vue) {
  Vue.component('tk-flex', Vue.extend(TkFlex))
}
TkFlex.install = install
export {TkFlex as default, install}
