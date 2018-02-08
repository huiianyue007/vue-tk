import * as tkStatusBar from './components/tkStatusBar'
import * as tkGradientsBar from './components/tkGradientsBar'
import * as tkLoading from './components/tkLoading'
import * as tkIcon from './components/tkIcon'
import * as tkFlex from './components/tkFlex'
import * as tkBox from './components/tkBox'
// import * as tkSticky from './components/tkSticky'
import * as tkSpinner from './components/tkSpinner'
import * as tkCover from './components/tkCover'
import * as tkContainer from './components/tkContainer'
import * as tkHistory from './components/tkHistory'
// import * as Upload from './components/tkUpload'
// import tkUpload from './core/utils/tkUpload'
// import * as tkViewer from './components/tkViewer'
import * as tkToast from './components/tkToast'
import * as tkGlobal from './components/tkGlobal'

import * as tkAjax from './utils/tkAjax'
import * as tkParse from './utils/tkParse'
import * as tkCookie from './utils/tkCookie'
import * as tkHelper from './utils/tkHelper'
import * as tkVuexStorage from './utils/tkVuexStorage'
import * as tkUa from './utils/tkUa'
import * as tkRegions from './utils/tkRegions'
import * as tkRouterAuth from './utils/tkRouterAuth'
import * as tkFile from './utils/tkFile'

const options = {
  // Core,
  // tkViewer,
  // tkShare,
  // Upload,
  tkStatusBar,
  tkGradientsBar,
  tkLoading,
  tkIcon,
  tkFlex,
  tkBox,
  tkContainer,
  tkHistory,
  // tkSticky,
  tkToast,
  tkGlobal,
  tkSpinner,
  tkCover,
  tkAjax,
  tkParse,
  tkCookie,
  tkHelper,
  tkVuexStorage,
  tkUa,
  tkRegions,
  tkRouterAuth,
  tkFile
}

const components = {

}

const install = function (Vue) {
  for (let component in options) {
    for (let item in options[component]) {
      if (item === 'default') {
        const componentInstaller = options[component].default.install
        components[component] = options[component].default
        if (componentInstaller) {
          Vue.use(componentInstaller)
        }
      } else {
        if (item !== 'install') {
          components[item] = options[component][item]
        }
      }
    }
  }
}

for (let component in options) {
  for (let item in options[component]) {
    if (item === 'default') {
      components[component] = options[component].default
    } else {
      if (item !== 'install') {
        components[item] = options[component][item]
      }
    }
  }
}

components.install = install
if (typeof window !== 'undefined') {
  window.VueTk = components
}

export {components as default}
