import TkToast from './tkToast.vue'

const install = function (Vue) {
  Vue.component('tk-toast', Vue.extend(TkToast))
}
TkToast.install = install
export {TkToast as default, install}
