<template>
  <div class="status-bar-wrapper" v-show="isShow">
    <div class="status-bar fixed" :class="_class" :style="_style" v-if="!placeholder"></div>
    <div class="status-bar-replace" :class="_class" :style="_replaceStyle" ></div>
  </div>
</template>

<script>
import state from './state.js'

export default {
  name: 'StatusBar',
  data () {
    return {
      ready: false,
      state: state
    }
  },
  created: function () {
    state.init()
  },
  computed: {
    _options: function () {
      let colorOption = this.color ? {color: this.color} : {}
      let options = this.options ? this.options : {}
      let stateOptions = {
        color: state._color,
        height: state.height(),
        show: state._show,
        immersion: state._immersion
      }
      return Object.assign(stateOptions, options, colorOption)
    },
    _class: function () {
      return state.class
    },
    _replaceStyle: function () {
      return {
        height: this._options.height + 'px',
        display: this._options.immersion && !this.placeholder ? 'none' : 'block'
      }
    },
    _style: function () {
      return {
        height: this._options.height + 'px',
        'background-color': this._options.color
      }
    },
    isShow: function () {
      return this._options.show && this._options.height !== 0
    }
  },
  props: {
    color: String,
    options: Object,
    placeholder: Boolean
  }
}
</script>
<style scoped>
  div{
    display:block;
    width:100%;
  }
  .status-bar.fixed{
    position:fixed;
    top:0;
    left:0;
    width:100%;
    z-index:100000;
    background-color:black;
  }
</style>
