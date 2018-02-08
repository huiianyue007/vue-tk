<template>
  <svg class="tk-icon tk-svg" :class="{spin: spin}" :viewBox="viewBox" xmlns="http://www.w3.org/2000/svg" v-html="icon"></svg>
</template>

<script>
  import material from './material.json'
  import common from './common.json'
  // import ios from './ios.json'
  import config from './tkIconConfig'

  export default {
    name: 'TkIcon',
    data: function () {
      return {
        config: config,
        iconText: ''
      }
    },
    mounted: function () {
      this.setIconText()
    },
    beforeUpdate: function () {
      this.setIconText()
    },
    computed: {
      _Mode: function () {
        return this.mode ? this.mode : config.mode
      },
      isIconfont: function () {
        return this.type !== 'default' || config.configs.default
      },
      viewBox: function () {
        return this.isIconfont || this._Mode !== 'material' ? '0 0 1024 1024' : '0 0 48 48'
      },
      icon: function () {
        if (this.iconText === '') {
          return ''
        }
        if (this.isIconfont) {
          if (config.icons[this.type].state !== 'waiting') {
            let data = config.icons[this.type]['data']
            if (data[this.iconText]) {
              return data[this.iconText]
            } else {
              return ''
            }
          } else {
            return ''
          }
        } else {
          if (this._Mode === 'common') {
            return common[this.iconText]
          } else if (this._Mode === 'material') {
            return material[this.iconText]
          } else {
            return ''
          }
        }
      }
    },
    methods: {
      setIconText: function () {
        this.iconText = this.$slots.default ? this.$slots.default[0].text : ''
      }
    },
    props: {
      type: {
        type: String,
        default: 'default'
      },
      mode: String,
      spin: Boolean
    }
  }
</script>
<style>
  .tk-svg{
    vertical-align: middle;
    fill: currentColor;
    overflow: hidden;
  }
  svg.tk-svg{
    width: 24px;
    height: 24px;
  }
  .tk-icon.spin{
    -webkit-animation: tk-spin 2s infinite linear;
    animation: tk-spin 2s infinite linear;
  }
  @-webkit-keyframes tk-spin {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(359deg);
      transform: rotate(359deg);
    }
  }
  @keyframes tk-spin {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(359deg);
      transform: rotate(359deg);
    }
  }

</style>

