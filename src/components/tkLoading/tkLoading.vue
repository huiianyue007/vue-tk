<template>
    <div :class="{'tk-loading-wrap': needWrap}" :style="wrapStyle">
      <transition name="fade">
        <div :class="{'tk-loading-center':center}" :style="style" v-if="!complete">
          <tk-spinner :type="type" :color="color" :size="size"></tk-spinner>
        </div>
      </transition>
      <slot v-if="complete"></slot>
    </div>
</template>

<script>
import TkSpinner from '../tkSpinner/tkSpinner.vue'
export default {
  name: 'TkLoading',
  data () {
    return {}
  },
  computed: {
    needWrap: function () {
      return !this.complete && this.center && !this.height
    },
    style: function () {
      if (this.center) {
        return {
          backgroundColor: this.backgroundColor
        }
      }
      return {}
    },
    wrapStyle: function () {
      if (this.height) {
        return {
          'min-height': this.height,
          position: 'relative'
        }
      }
    }
  },
  components: {
    TkSpinner
  },
  props: {
    type: {
      type: String,
      default: 'pulse'
    },
    color: {
      type: String,
      default: '#5dc596'
    },
    backgroundColor: {
      type: String,
      default: 'white'
    },
    size: {
      type: String
    },
    center: {
      type: Boolean,
      default: true
    },
    complete: {
      type: Boolean,
      default: false
    },
    height: String
  }
}
</script>
<style scoped>
  .tk-loading-wrap{
    position: absolute;
    width:100%;
    top:0;
    bottom:0;
    left:0;
  }
  .tk-loading-center{
    position: absolute;
    width:100%;
    top:0;
    bottom:0;
    left:0;
    display:flex;
    align-items:center;
    justify-content:center;
    z-index:100000;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }
  .fade-enter, .fade-leave-to{
    opacity: 0
  }

</style>
