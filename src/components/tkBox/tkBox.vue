<template>
  <div class="tk-box" :class="classes" :style="style"><div class="tk-box-padding"></div><div class="tk-box-inner"><slot></slot></div></div>
</template>

<script>
  import {isServer} from './../../core/utils/index'
  export default {
    name: 'TkBox',
    data: function () {
      return {
        ratioList: [
          '4:3',
          '16:9',
          '1:1',
          '3:4',
          '9:16'
        ]
      }
    },
    computed: {
      style: function () {
        let style = {}
        if (this.zIndex) style['z-index'] = this.zIndex
        if (this.background) style['background-image'] = 'url(' + this.background + ')'
        return style
      },
      _ratio: function () {
        const ratioReg = /^\d+\:\d+$/
        if (!this.ratio || !ratioReg.test(this.ratio)) {
          return null
        }
        let arr = this.ratio.split(':')
        return {
          x: parseInt(arr[0]),
          y: parseInt(arr[1])
        }
      },
      classes: function () {
        let classes = {
          'tk-box-left': this.left,
          'tk-box-right': this.right,
          'tk-box-top': this.top,
          'tk-box-bottom': this.bottom,
          'tk-box-middle': this.middle,
          'tk-box-center': this.center
        }
        if (this._ratio) {
          if (this.inArray(this.ratioList, this.ratio) === -1) {
            this.addRatioStyle()
          }
          classes['ratio-' + this._ratio.x + '-' + this._ratio.y] = true
        }
        return classes
      }
    },
    methods: {
      addRatioStyle: function () {
        if (isServer) return
        let isExits = document.getElementById('tk-box-ratio-' + this._ratio.x + '-' + this._ratio.y)
        if (isExits === null) {
          let percent = this._ratio.y / this._ratio.x * 100
          let boxStyle = '.tk-box.ratio-' + this._ratio.x + '-' + this._ratio.y + ' .tk-box-padding{' +
              'padding-bottom: ' + percent.toFixed(2) + '%;' + '}'
          let styledom = document.createElement('style')
          styledom.setAttribute('id', 'tk-box-ratio-' + this._ratio.x + '-' + this._ratio.y)
          styledom.innerHTML = boxStyle
          document.body.appendChild(styledom)
        }
      },
      inArray: function (array, search) {
        for (let i = 0; i < array.length; i++) {
          if (search === array[i]) {
            return i
          }
        }
        return -1
      }
    },
    props: {
      left: Boolean,
      right: Boolean,
      top: Boolean,
      bottom: Boolean,
      middle: Boolean,
      center: Boolean,
      ratio: String,
      zIndex: Number,
      background: String
    }
  }
</script>
<style lang="scss" src="./tkBox.scss"></style>
