import TkContainer from './tkContainer.vue'
import manager from './manager'
import utils from '../../core/utils'
import PortalVue from 'portal-vue'

const install = function (Vue) {
  Vue.use(PortalVue)
  Vue.component('tk-container', Vue.extend(TkContainer))
  utils.defineProperty('$tkContainer', manager, Vue)
}
TkContainer.install = install
export {TkContainer as default, manager as $tkContainer}
