<template xmlns="http://www.w3.org/1999/html" xmlns="http://www.w3.org/1999/html">
  <page-content page-title="组件 - 粘性定位" class="page">
    <docs-component>
      <div slot="description">
        <p>模拟原生 <code>position: sticky;</code> 的效果</p>
        <p>目前仅支持top定位方式，之后将增加bottom定位</p>
        <p>目前支持原生sticky的浏览器有： 火狐 32+， chrome 56+，safari 6.1+</p>
        <p><b>在以上浏览器中将直接使用原生样式，在其他浏览器中使用js模拟</b></p>
        <p><b>ps: 如果粘性定位的元素父级中有样式display:hidden;将无法生效</b></p>
      </div>
      <div slot="api">
        <api-table name="TkLoading">
          <code-block lang="javascript">
            // 单独引用
            import Vue from 'vue'
            import TkSticky from 'vue-tk/dist/components/tkSticky'
            Vue.use(TkSticky)
          </code-block>
          <code-block lang="html">
            // 使用方法
            &lt;tk-sticky&gt;
              ...
            &lt;/tk-sticky&gt;
          </code-block>
          <md-table slot="properties">
            <md-table-header>
              <md-table-row>
                <md-table-head>名称</md-table-head>
                <md-table-head>类型</md-table-head>
                <md-table-head>说明</md-table-head>
              </md-table-row>
            </md-table-header>

            <md-table-body>
              <md-table-row>
                <md-table-cell>top</md-table-cell>
                <md-table-cell><code>Number</code></md-table-cell>
                <md-table-cell>固定状态时距父级容器的顶部距离，默认<code>0</code></md-table-cell>
              </md-table-row>
              <md-table-row>
                <md-table-cell>force</md-table-cell>
                <md-table-cell><code>Boolean</code></md-table-cell>
                <md-table-cell>即使浏览器支持原生定位，也强制使用js模拟，默认<code>false</code></md-table-cell>
              </md-table-row>
            </md-table-body>
          </md-table>
        </api-table>
      </div>
      <div class="fill"></div>
      <div slot="example">
        <h4 class="md-title">滚动页面查看效果</h4>
        <p v-if="!stickySupport"><b style="color:red">你当前的使用的浏览器不支持原生粘性定位。</b></p>
        <md-card class="example-card">
          <md-layout md-gutter="8">
            <md-layout md-flex="50">
              <div class="sticky-wraper">
                <div class="or-sticky">
                  <md-button class="md-raised">原生sticky</md-button>
                </div>
              </div>
            </md-layout>
            <md-layout>
              <div class="sticky-wraper">
                <tk-sticky force>
                  <md-button class="md-raised">模拟sticky</md-button>
                </tk-sticky>
              </div>
            </md-layout>
          </md-layout>
        </md-card>
      </div>
    </docs-component>
  </page-content>
</template>

<script>
  export default {
    data: function () {
      let stickySupport = this.stickSupportCheck()
      return {
        stickySupport: stickySupport
      }
    },
    methods: {
      stickSupportCheck () {
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
        return stickSupport
      }
    }
  }
</script>

<style scoped>
  .sticky-wraper{
    height:500px;
    background: rgba(0,0,0,.07);
    width:100%;
  }
  .or-sticky{
    position:sticky;
    top:0;
  }
  .example-card{
    padding:8px;
    overflow: visible;
  }
  .fill{
    height:100vh;
  }
</style>
