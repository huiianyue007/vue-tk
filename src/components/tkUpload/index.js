import TkUpload from './tkUpload.vue'

const install = function (Vue) {
  Vue.component('tk-upload', Vue.extend(TkUpload))
}
TkUpload.install = install
export {TkUpload as default, install}
