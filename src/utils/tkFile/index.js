import tkFile from './tkFile'
import utils from '../../core/utils'

const install = function (Vue) {
  utils.defineProperty('$tkFile', tkFile, Vue)
}
tkFile.install = install
export {tkFile as default, install}
