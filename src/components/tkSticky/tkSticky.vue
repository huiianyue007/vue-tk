<template>
  <div class="tk-sticky" :style="style">
    <slot></slot>
  </div>
</template>
<script>
  import Mixin from '../../core/utils/mixin'

  export default {
    props: {
      top: {
        type: Number,
        default: 0
      },
      force: Boolean
    },
    data () {
      return {
        stickSupport: this.stickSupportCheck(),
        replaceBlock: null,
        onSticky: false,
        onScrollToDisappear: false,
        scrollTarget: null,
        style: this.defaultStyle()
      }
    },
    methods: {
      defaultStyle () {
        let style = {}
        style.top = this.top + 'px'
        return style
      },
      build () {
        if (this.stickSupport) {
          this.style = this.defaultStyle()
        } else {
          let style = {
            position: 'absolute',
            width: this.replaceBlock.offsetWidth + 'px'
          }
          if (!this.onSticky) {
            style.top = this.replaceBlock.offsetTop + 'px'
            this.style = style
            this.$nextTick(function () {
              this.updateReplaceBlock()
            })
            return
          }
          if (!this.onScrollToDisappear) {
            let rect = this.$el.getBoundingClientRect()
            style.left = rect.left + 'px'
            style.position = 'fixed'
            if (this.scrollTarget === window) {
              style.top = this.top + 'px'
            } else {
              let scrollRect = this.scrollTarget.getBoundingClientRect()
              style.top = scrollRect.top + this.top + 'px'
            }
          } else {
            style.top = this.$el.parentNode.offsetTop + this.$el.parentNode.offsetHeight - this.$el.offsetHeight + 'px'
          }
          this.style = style
          this.$nextTick(function () {
            this.updateReplaceBlock()
          })
        }
      },
      resizeHandle () {
        if (!this.replaceBlock) {
          return
        }
        if (!this.isElementInViewport(this.$el.parentNode)) {
          this.onSticky = false
          this.onScrollToDisappear = false
          this.build()
          return
        }
        let el = this.getRelatedScrollElement(this.$el.parentNode)
        if (el === null) {
          this.onSticky = false
          this.onScrollToDisappear = false
          this.build()
          return
        }
        this.scrollTarget = el
        let baseDome = this.replaceBlock
        let parent = this.$el.parentNode
        let scrollRectTop = el === window ? 0 : el.getBoundingClientRect().top
        let baseRect = baseDome.getBoundingClientRect()
        let parentRect = parent.getBoundingClientRect()
        if (baseRect.top + this.top <= scrollRectTop && parentRect.bottom - this.$el.offsetHeight > scrollRectTop) {
          this.onSticky = true
          this.onScrollToDisappear = false
        } else if (parentRect.bottom - this.$el.offsetHeight <= scrollRectTop) {
          this.onSticky = true
          this.onScrollToDisappear = true
        } else {
          this.onSticky = false
          this.onScrollToDisappear = false
        }
        this.build()
      },
      getRelatedScrollElement (el) {
        if (isServer) return
        if (!el.tagName) {
          return window
        }
        let style = window.getComputedStyle(el)
        if (style.overflowY === 'hidden') {
          return null
        }
        if (style.overflowY === 'auto' || style.overflowY === 'scroll') {
          return el
        }
        return this.getRelatedScrollElement(el.parentNode)
      },
      stickSupportCheck () {
        if (isServer) return
        if (this.force) {
          return false
        }
        if (typeof this.getGlobalData('stickSupport') !== 'undefined') {
          return this.getGlobalData('stickSupport')
        }

        let prefixes = ['', '-webkit-', '-moz-', '-ms-']
        let block = document.createElement('div')
        let stickSupport = false

        for (let i = prefixes.length - 1; i >= 0; i--) {
          try {
            block.style.position = prefixes[i] + 'sticky'
          } catch (e) {}
          if (block.style.position !== '') {
            stickSupport = true
            break
          }
        }

        this.setGlobalData('stickSupport', stickSupport)
        return stickSupport
      },
      setReplaceBlock: function () {
        if (isServer) return
        if (!this.replaceBlock && this.$el) {
          let dom = this.$el.previousSibling
          if (dom !== null && dom.getAttribute('class') === 'sticky-replace-block') {
            this.replaceBlock = dom
          } else {
            let block = document.createElement('div')
            block.setAttribute('class', 'sticky-replace-block')
            this.$el.parentNode.insertBefore(block, this.$el)
            this.replaceBlock = block
          }
        }
      },
      updateReplaceBlock: function () {
        this.replaceBlock.style.height = this.$el.offsetHeight + 'px'
      },
      removeReplaceBlock: function () {
        if (this.replaceBlock) {
          this.replaceBlock.parentNode.removeChild(this.replaceBlock)
          this.replaceBlock = null
        }
      },
      isElementInViewport: function (el) {
        if (isServer) return
        let rect = el.getBoundingClientRect()
        let isOut = (
          rect.left > window.innerWidth ||
          rect.right - rect.width < 0 ||
          rect.top > window.innerHeight ||
          rect.bottom < 0
        )
        return !isOut
      },
      bindEvent: function () {
        if (isServer) return
        if (!this.getGlobalData('registerMutationObserver')) {
          let event = new window.CustomEvent('documentChange')
          let MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver
          let observer = new MutationObserver(function () {
            window.dispatchEvent(event)
          })
          let config = { attributes: true, childList: true, characterData: true, subtree: true }
          observer.observe(document, config)
          this.setGlobalData('registerMutationObserver', true)
        }
        window.addEventListener('scroll', this.resizeHandle, true)
        window.addEventListener('resize', this.resizeHandle, true)
        window.addEventListener('documentChange', this.resizeHandle, true)
      },
      removeEvent: function () {
        if (isServer) return
        window.removeEventListener('scroll', this.resizeHandle, true)
        window.removeEventListener('resize', this.resizeHandle, true)
        window.removeEventListener('documentChange', this.resizeHandle, true)
      }
    },
    mounted () {
      if (!this.stickSupport) {
        this.setReplaceBlock()
        this.build()
        this.bindEvent()
      }
    },
    updated () {
      if (!this.stickSupport && this.replaceBlock) {
        this.setReplaceBlock()
        this.build()
      }
    },
    activated () {
      if (!this.stickSupport) {
        this.setReplaceBlock()
        this.build()
        this.bindEvent()
      }
    },
    deactivated () {
      if (!this.stickSupport) {
        this.removeReplaceBlock()
        this.removeEvent()
        this.style = {}
      }
    },
    beforeDestroy () {
      if (!this.stickSupport) {
        this.removeReplaceBlock()
        this.removeEvent()
        this.style = {}
      }
    },
    mixins: [Mixin]
  }
</script>
<style scoped>
  .tk-sticky{
    position: -webkit-sticky;
    position: sticky;
    z-index: 10;
  }
</style>
