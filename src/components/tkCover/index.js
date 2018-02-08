import TkCover from './tkCover.vue'
import PortalVue from 'portal-vue'

const install = function (Vue) {
  Vue.use(PortalVue)
  Vue.component('tk-cover', Vue.extend(TkCover))
}
TkCover.install = install
export {TkCover as default, install}
