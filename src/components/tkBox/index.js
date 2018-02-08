import TkBox from './tkBox.vue'

const install = function (Vue) {
  Vue.component('tk-box', Vue.extend(TkBox))
}
TkBox.install = install
export {TkBox as default, install}
