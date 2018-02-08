import TkLoading from './tkLoading.vue'

const install = function (Vue) {
  Vue.component('tk-loading', Vue.extend(TkLoading))
}
TkLoading.install = install
export {TkLoading as default, install}
