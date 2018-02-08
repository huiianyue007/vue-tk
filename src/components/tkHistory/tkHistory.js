import {history} from './history'
function isDef (v) {
  return v !== undefined && v !== null
}

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (let i = 0; i < children.length; i++) {
      const c = children[i]
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}
function pruneCacheEntry (vnode) {
  if (vnode) {
    vnode.componentInstance.$destroy()
  }
}

export default {
  name: 'tk-history',
  abstract: true,
  data () {
    return {
      historyRecord: []
    }
  },
  created () {
    this.cache = Object.create(null)
    this.historyRecord = history.historyRecord
  },

  destroyed () {
    for (const key in this.cache) {
      pruneCacheEntry(this.cache[key])
    }
  },

  watch: {
    historyRecord () {
      for (const key in this.cache) {
        const cachedNode = this.cache[key]
        if (cachedNode) {
          if (this.historyRecord.indexOf(key) === -1) {
            this.cache[key] = null
          }
        }
      }
    }
  },

  render () {
    const vnode = getFirstComponentChild(this.$slots.default)
    const componentOptions = vnode && vnode.componentOptions
    if (componentOptions) {
      const key = history.router.currentRoute.fullPath
      if (this.cache[key]) {
        vnode.componentInstance = this.cache[key].componentInstance
      } else {
        this.cache[key] = vnode
      }
      vnode.data.keepAlive = true
    }
    return vnode
  }
}
