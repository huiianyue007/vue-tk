import TkShare from './tkShare.vue'

const install = function (Vue) {
  Vue.component('tk-share', Vue.extend(TkShare))
}
TkShare.install = install
export {TkShare as default, install}
