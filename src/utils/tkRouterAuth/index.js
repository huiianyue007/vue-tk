import tkRouterAuth from './tkRouterAuth'
import utils from '../../core/utils'

const install = function (Vue) {
  utils.defineProperty('$tkRouterAuth', tkRouterAuth, Vue)
}
tkRouterAuth.install = install
export {tkRouterAuth as default, install}
