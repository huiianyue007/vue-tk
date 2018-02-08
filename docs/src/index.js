/* Third Party */
import Vue from 'vue'
import 'babel-polyfill'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

/* Configs */
import router from './routes.js'
import './config.js'
import App from './App'

import PageContent from './components/PageContent'
import DocsComponent from './components/DocsComponent'
import ExampleBox from './components/ExampleBox'
import ApiTable from './components/ApiTable'
import CodeBlock from './components/CodeBlock'
import UtilsComponent from './components/UtilsComponent'

Vue.component('page-content', PageContent)
Vue.component('docs-component', DocsComponent)
Vue.component('example-box', ExampleBox)
Vue.component('api-table', ApiTable)
Vue.component('code-block', CodeBlock)
Vue.component('utils-component', UtilsComponent)

Vue.use(VueMaterial)

Vue.material.registerTheme({
  default: {
    primary: 'blue',
    accent: 'pink'
  },
  blue: {
    primary: 'blue',
    accent: 'pink'
  },
  indigo: {
    primary: 'indigo',
    accent: 'pink'
  },
  brown: {
    primary: 'brown',
    accent: 'green'
  },
  purple: {
    primary: 'purple',
    accent: 'blue'
  },
  orange: {
    primary: 'orange',
    accent: 'purple'
  },
  green: {
    primary: 'green',
    accent: 'pink'
  },
  'light-blue': {
    primary: 'light-blue',
    accent: 'yellow'
  },
  teal: {
    primary: 'teal',
    accent: 'orange'
  },
  'blue-grey': {
    primary: 'blue-grey',
    accent: 'blue'
  },
  cyan: {
    primary: 'cyan',
    accent: 'pink'
  },
  red: {
    primary: 'red',
    accent: 'pink'
  },
  white: {
    primary: 'white',
    accent: 'blue'
  },
  grey: {
    primary: {
      color: 'grey',
      hue: 300
    },
    accent: 'indigo'
  }
})
Vue.material.setCurrentTheme('teal')

let Docs = Vue.component('app', App)

Docs = new Docs({
  el: '#app',
  router
})

router.beforeEach((to, from, next) => {
  Vue.nextTick(() => {
    let mainContent = document.querySelector('.main-content')

    if (mainContent) {
      mainContent.scrollTop = 0
    }

    Docs.closeSidenav()

    next()
  })
})
