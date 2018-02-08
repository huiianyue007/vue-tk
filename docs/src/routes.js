/* main */
import VueRouter from 'vue-router'
import Vue from 'vue'

import Introduction from './pages/Introduction'
import Error404 from './pages/Error'

/* Components */
import StatusBar from './pages/components/StatusBar.vue'
import GradientsBar from './pages/components/GradientsBar.vue'
import Loading from './pages/components/Loading.vue'
import Icon from './pages/components/icon.vue'
import Flex from './pages/components/flex.vue'
import Container from './pages/components/container.vue'
//import Share from './pages/components/share.vue'
// import Sticky from './pages/components/sticky.vue'
//import Upload from './pages/components/upload.vue'
import Cover from './pages/components/cover.vue'
// import Viewer from './pages/components/viewer.vue'
import Box from './pages/components/box.vue'
import History from './pages/components/History.vue'
import Toast from './pages/components/Toast.vue'
import Global from './pages/components/Global.vue'

/* history page */
import HistoryIndex from './pages/history/index.vue'
import HistoryPage1 from './pages/history/page1.vue'
import HistoryPage2 from './pages/history/page2.vue'
import HistoryPage3 from './pages/history/page3.vue'
/* utils */
import regions from './pages/utils/regions.vue'
import ajax from './pages/utils/ajax.vue'
import parse from './pages/utils/parse.vue'
import cookie from './pages/utils/cookie.vue'
import ua from './pages/utils/ua.vue'
import routerAuth from './pages/utils/routerAuth.vue'
import file from './pages/utils/file.vue'

Vue.use(VueRouter)

const main = [
  {
    path: '/',
    name: 'introduction',
    component: Introduction
  }
]

const components = [
  {
    path: '/components/status-bar',
    name: 'statusBar',
    component: StatusBar
  },
  {
    path: '/components/gradients-bar',
    name: 'gradientsBar',
    component: GradientsBar
  },
  {
    path: '/components/loading',
    name: 'loading',
    component: Loading
  },
  {
    path: '/components/icon',
    name: 'icon',
    component: Icon
  },
  {
    path: '/components/flex',
    name: 'flex',
    component: Flex
  },
  {
    path: '/components/box',
    name: 'box',
    component: Box
  },
  {
    path: '/components/container',
    name: 'container',
    component: Container
  },
  {
    path: '/components/history',
    component: History,
    children: [
      {
        path: '',
        name: 'index',
        component: HistoryIndex
      },
      {
        path: 'page1',
        name: 'page1',
        component: HistoryPage1
      },
      {
        path: 'page2',
        name: 'page2',
        component: HistoryPage2
      },
      {
        path: 'page3',
        name: 'page3',
        component: HistoryPage3
      }
    ]
  },
  /* {
    path: '/components/share',
    name: 'share',
    component: Share
  }, */
  // {
  //   path: '/components/sticky',
  //   name: 'sticky',
  //   component: Sticky
  // },
  /*{
    path: '/components/upload',
    name: 'upload',
    component: Upload
  },*/
  {
    path: '/components/cover',
    name: 'cover',
    component: Cover
  },
  // {
  //   path: '/components/viewer',
  //   name: 'viewer',
  //   component: Viewer
  // },
  {
    path: '/components/toast',
    name: 'toast',
    component: Toast
  },
  {
    path: '/components/global',
    name: 'global',
    component: Global
  }, {
    path: '/utils/regions',
    name: 'regions',
    component: regions
  },
  {
    path: '/utils/ajax',
    name: 'ajax',
    component: ajax
  },
  {
    path: '/utils/parse',
    name: 'parse',
    component: parse
  },
  {
    path: '/utils/cookie',
    name: 'cookie',
    component: cookie
  },
  {
    path: '/utils/ua',
    name: 'ua',
    component: ua
  },
  {
    path: '/utils/routerAuth',
    name: 'routerAuth',
    component: routerAuth
  },
  {
    path: '/utils/file',
    name: 'file',
    component: file
  }
]

const theme = [
]

const error = [
  {
    path: '*',
    name: 'error',
    component: Error404
  }
]

const routes = [].concat(main, components, theme, error)

let router = new VueRouter({
  base: window.location.pathname,
  routes
})

export default router
