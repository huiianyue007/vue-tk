import TkStatusBar from './tkStatusBar.vue'
import tkStatusBarState from './state.js'
import utils from '../../core/utils'

const install = function (Vue) {
  Vue.component('tk-status-bar', Vue.extend(TkStatusBar))
  utils.defineProperty('$tkStatusBar', tkStatusBarState, Vue)
}
TkStatusBar.install = install
export {TkStatusBar as default, tkStatusBarState as $tkStatusBar}
