import TkGradientsBar from './tkGradientsBar.vue'
import tkGradients from './utils.js'

const install = function (Vue) {
  Vue.component('tk-gradients-bar', Vue.extend(TkGradientsBar))
}
TkGradientsBar.install = install
export {TkGradientsBar as default, tkGradients}
