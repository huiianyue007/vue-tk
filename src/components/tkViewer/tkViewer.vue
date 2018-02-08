<template>
  <div class="tk-viewer" :style="viewerStyle">
    <div :class="{wrapper: isShow}" :style="wrapperStyle" ref="wrapper" class="tk-viewer-wrapper">
      <slot></slot>
    </div>
    <span class="backdrop" v-if="isShow" :style="backdropStyle"  @click="autoHide"></span>
  </div>
</template>
<script>
  export default {
    name: 'tk-viewer',
    data: function () {
      return {
        isShow: this.show,
        replaceWidth: null,
        replaceHeight: null,
        wrapperOffset: null,
        wrapperOffsetStore: null,
        onClose: false,
        ready: false
      }
    },
    computed: {
      backdropStyle () {
        return {
          'background-color': this.color
        }
      },
      wrapperStyle () {
        if (this.isShow) {
          if (this.wrapperOffset) {
            if (!this.onClose) {
              let self = this
              setTimeout(function () {
                self.wrapperOffset = null
              }, 100)
              setTimeout(function () {
                self.ready = true
                self.$emit('ready')
              }, 400)
            }
            return Object.assign({
              position: 'fixed'
            }, this.wrapperOffset)
          } else {
            return {
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0
            }
          }
        } else {
          return {}
        }
      },
      viewerStyle () {
        return this.isShow ? {
          width: this.replaceWidth + 'px',
          height: this.replaceHeight + 'px'
        } : {}
      },
      style () {
        return {}
      }
    },
    props: {
      color: String,
      show: Boolean,
      hideOnClick: {
        type: Boolean,
        default: true
      }
    },
    watch: {
      show: function () {
        if (this.show) {
          this.replaceWidth = this.$el.offsetWidth
          this.replaceHeight = this.$el.offsetHeight
          let parentScrollTop = this.$refs.wrapper.offsetParent ? this.$refs.wrapper.offsetParent.scrollTop : 0
          this.wrapperOffsetStore = {
            width: this.$refs.wrapper.offsetWidth + 'px',
            height: this.$refs.wrapper.offsetHeight + 'px',
            left: this.$refs.wrapper.offsetLeft + 'px',
            top: this.$refs.wrapper.offsetTop + parentScrollTop + 'px'
          }
          this.wrapperOffset = Object.assign({}, this.wrapperOffsetStore)
          this.isShow = this.show
        } else {
          this.close()
        }
      }
    },
    methods: {
      change (show) {
        if (this.isShow && !show) {
          this.wrapperOffset = Object.assign({}, this.wrapperOffsetStore)
          this.onClose = true
          this.ready = false
        }
        let self = this
        setTimeout(function () {
          self.isShow = show
          self.onClose = false
          self.$emit('change', show)
        }, 400)
      },
      close () {
        this.change(false)
      },
      autoHide () {
        if (this.hideOnClick) {
          this.close()
        }
      }
    }
  }
</script>
<style scoped>
  .tk-viewer-wrapper {
    display:inline-block;
    z-index: 99999;
    pointer-events: none;
  }
  .tk-viewer-wrapper * {
    pointer-events: auto;
  }
  .wrapper{
    display: flex;
    align-items: center;
    justify-content: center;
    position:fixed;
    width: 100%;
    height:100%;
    top:0;
    left:0;
    transition: all 0.4s;
  }
  .backdrop{
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 99998;
    background-color: rgba(0,0,0,.54);
    display:block;
  }
</style>
