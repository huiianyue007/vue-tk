import TkViewer from './tkViewer.vue'

const install = function (Vue) {
  Vue.component('tk-viewer', Vue.extend(TkViewer))
}
TkViewer.install = install
export {TkViewer as default, install}
