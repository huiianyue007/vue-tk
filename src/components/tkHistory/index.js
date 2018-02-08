import TkHistory from './tkHistory'
import {history, mixin} from './history'
import utils from '../../core/utils'
import './routerTransition.scss'

const install = function (Vue) {
  Vue.component('tk-history', Vue.extend(TkHistory))
  Vue.mixin(mixin)
  utils.defineProperty('$tkHistory', history, Vue)
}
TkHistory.install = install
export {TkHistory as default, install, history}
