<template>
  <component :is="name" :to="String(_uid)">
    <div class="cover-wrap">
      <transition :name="transitionName">
        <div class="tk-cover"  @click="autoHide" :style="style" ref="cover" v-if="this.isShow">
          <slot></slot>
        </div>
      </transition>
      <transition :name="backdropTransitionName">
        <span class="backdrop" :style="backdropStyle" v-if="this.isShow"></span>
      </transition>
    </div>
  </component>
</template>
<script>
  import empty from './empty.vue'
  export default {
    name: 'tk-cover',
    data: function () {
      return {
        name: 'empty',
        inContainer: false,
        isShow: this.show,
        container: null
      }
    },
    mounted: function () {
      if (this.containerHandler) return
      let container = this.findContainer(this)
      if (container) {
        this.name = 'portal'
        this.container = container
        this.container.addPortal(String(this._uid))
      }
    },
    computed: {
      transitionName () {
        if (!this.transition) return null
        let name = 'scale'
        if (this.top) {
          name = 'top'
        } else if (this.bottom) {
          name = 'bottom'
        } else if (this.left) {
          name = 'left'
        } else if (this.right) {
          name = 'right'
        }
        return name
      },
      backdropTransitionName () {
        return this.transition ? 'fade' : null
      },
      backdropStyle () {
        return {
          'background-color': this.color,
          'pointer-events': 'none'
        }
      },
      style () {
        let justifyContent = 'center'
        if (this.left) {
          justifyContent = 'flex-start'
        } else if (this.center) {
          justifyContent = 'center'
        } else if (this.right) {
          justifyContent = 'flex-end'
        }

        let alignItems = 'center'
        if (this.top) {
          alignItems = 'flex-start'
        } else if (this.middle) {
          alignItems = 'center'
        } else if (this.bottom) {
          alignItems = 'flex-end'
        }
        return {
          'justify-content': justifyContent,
          'align-items': alignItems,
          'pointer-events': this.through ? 'none' : 'auto'
        }
      }
    },
    props: {
      through: Boolean,
      top: Boolean,
      middle: Boolean,
      bottom: Boolean,
      left: Boolean,
      center: Boolean,
      right: Boolean,
      show: Boolean,
      transition: Boolean,
      color: String,
      hideOnClick: {
        type: Boolean,
        default: true
      },
      containerHandler: Boolean
    },
    watch: {
      show: function () {
        this.isShow = this.show
      }
    },
    methods: {
      autoHide: function (e) {
        if (e.target !== this.$refs.cover) return
        if (this.hideOnClick) {
          this.isShow = false
          this.$emit('change', false)
          this.$emit('update:show', false)
        }
      },
      findContainer: function (vm) {
        if (!vm.$parent) {
          return null
        }
        if (vm.$parent.$options.name === 'TkContainer') {
          let container = vm.$parent
          if (container.$refs.body.contains(this.$el)) {
            return container
          } else {
            return null
          }
        } else {
          return this.findContainer(vm.$parent)
        }
      }
    },
    components: {
      empty
    }
  }
</script>
<style scoped>
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
  .tk-cover{
    position: fixed;
    display:flex;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 99999;
    background-color: transparent;
    -webkit-perspective: 1000;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }
  .fade-enter, .fade-leave-active {
    opacity: 0;
  }
  .scale-leave-active, .scale-enter-active, .left-leave-active, .left-enter-active, .right-leave-active, .right-enter-active, .top-leave-active, .top-enter-active, .bottom-leave-active, .bottom-enter-active{
    transition: all .5s;
  }
  .scale-enter, .scale-leave-active {
    transform:  scale(0.1, 0.1);
  }
  .left-enter, .left-leave-active {
    transform: translate3d(-100%, 0, 0);
  }
  .right-enter, .right-leave-active {
    transform: translate3d(100%, 0, 0);
  }
  .top-enter, .top-leave-active {
    transform: translate3d(0, -100%, 0);
  }
  .bottom-enter, .bottom-leave-active {
    transform: translate3d(0, 100%, 0);
  }
</style>

<style>
  .tk-cover *{
    pointer-events: auto;
  }
</style>
