import TkSticky from './tkSticky.vue'

const install = function (Vue) {
  Vue.component('tk-sticky', Vue.extend(TkSticky))
}
TkSticky.install = install
export {TkSticky as default, install}
