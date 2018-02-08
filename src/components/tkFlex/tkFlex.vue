<template>
  <div class="tk-flex" :class="classes"><slot></slot></div>
</template>

<script>
  import {isServer} from './../../core/utils/index'
  export default {
    name: 'TkFlex',
    data: function () {
      return {
        gutterList: [1, 2, 4, 8, 16, 24, 32, 40]
      }
    },
    computed: {
      classes: function () {
        let classes = {
          'tk-flex-row': !this.column,
          'tk-flex-column': this.column,
          'tk-flex-wrap': this.wrap,
          'tk-flex-top': this.top,
          'tk-flex-middle': this.middle,
          'tk-flex-bottom': this.bottom,
          'tk-flex-left': this.left,
          'tk-flex-center': this.center,
          'tk-flex-right': this.right,
          'tk-flex-between': this.between,
          'tk-flex-around': this.around,
          'tk-flex-stretch': this.stretch,
          'tk-flex-average': this.average,
          'wrap-gutter': this.wrapGutter
        }
        if (this.gutter) {
          let gutter
          if (typeof this.gutter === 'string') {
            gutter = parseInt(this.gutter.replace('px', ''))
          } else {
            gutter = this.gutter
          }
          if (this.inArray(this.gutterList, gutter) === -1) {
            this.addGutterStyle(gutter)
          }
          classes['gutter-' + gutter] = true
        }
        return classes
      }
    },
    methods: {
      addGutterStyle: function (gutter) {
        if (isServer) return
        let isExits = document.getElementById('tk-flex-gutter-' + gutter)
        if (isExits === null) {
          let gutterStyle = '.tk-flex.gutter-' + gutter + ':not(.wrap-gutter){' +
              'margin-top: -' + gutter + 'px;' +
              'margin-left: -' + gutter + 'px;' +
            '}' +
            '.tk-flex.gutter-' + gutter + '.wrap-gutter{' +
              'padding-right: ' + gutter + 'px;' +
              'padding-bottom: ' + gutter + 'px;' +
            '}' +
            '.tk-flex.gutter-' + gutter + '>*{' +
              'padding-left: ' + gutter + 'px;' +
              'padding-top: ' + gutter + 'px;' +
            '}'
          let styledom = document.createElement('style')
          styledom.setAttribute('id', 'tk-flex-gutter-' + gutter)
          styledom.innerHTML = gutterStyle
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
      column: Boolean,
      wrap: Boolean,
      top: Boolean,
      middle: Boolean,
      bottom: Boolean,
      left: Boolean,
      right: Boolean,
      center: Boolean,
      average: Boolean,
      gutter: [String, Number],
      wrapGutter: Boolean,
      between: Boolean,
      around: Boolean,
      stretch: Boolean
    }
  }
</script>
<style lang="scss" src="./tkFlex.scss"></style>
