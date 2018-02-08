<template>
  <page-content page-title="组件 - viewer">
    <docs-component>
      <div slot="description">
        <p>将内容移动到窗口中央显示,而不影响原始布局，适用于图片浏览等多种场景</p>
        <p>当viewer显示时，元素的可占用空间会扩大到全屏幕，元素的宽高可能会产生变化。</p>
      </div>
      <div slot="api">
        <api-table name="TkViewer">
          <code-block lang="javascript">
            // 单独引用
            import Vue from 'vue'
            import TkViewer from 'vue-tk/dist/components/TkViewer'
            Vue.use(TkViewer)
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
                <md-table-cell>color</md-table-cell>
                <md-table-cell><code>String</code></md-table-cell>
                <md-table-cell>颜色，默认值<code>rgba(0,0,0,.54)</code></md-table-cell>
              </md-table-row>
              <md-table-row>
                <md-table-cell>hideOnClick</md-table-cell>
                <md-table-cell><code>Bool</code></md-table-cell>
                <md-table-cell>点击遮罩是否自动关闭，默认值<code>false</code></md-table-cell>
              </md-table-row>
            </md-table-body>
          </md-table>
          <md-table slot="events">
            <md-table-header>
              <md-table-row>
                <md-table-head>名称</md-table-head>
                <md-table-head>参数</md-table-head>
                <md-table-head>说明</md-table-head>
              </md-table-row>
              <md-table-row>
                <md-table-cell>change</md-table-cell>
                <md-table-cell>
                  state <code>Bool</code>
                </md-table-cell>
                <md-table-cell>显示状态切换时触发</md-table-cell>
              </md-table-row>
              <md-table-row>
                <md-table-cell>ready</md-table-cell>
                <md-table-cell>
                </md-table-cell>
                <md-table-cell>在viewer显示时，当动画效果结束时触发</md-table-cell>
              </md-table-row>
            </md-table-header>
          </md-table>
        </api-table>
      </div>

      <div slot="example">
        <example-box card-title="viewer">
          <div slot="demo">
            <div>
              <md-checkbox name="hideOnClick" v-model="hideOnClick">hideOnClick</md-checkbox>
            </div>
            <div class="block-container" ref="container">
              <div class="container-body">
                <tk-viewer :show="show" @change="change" :hideOnClick = 'hideOnClick'>
                  <md-button @click.native="toggle" class="md-raised"  style = 'background:#fff'>show</md-button>
                </tk-viewer>
                <p>参照物文本</p>
              </div>
            </div>
          </div>
          <div slot="code">
            <code-block lang="xml" class="demo">
              &lt;tk-viewer :show = 'show' @change="change" :hideOnClick = 'hideOnClick'&gt;
              &lt;md-button @click.native="toggle" class="md-raised"  style = 'background:#fff'&gt;show&lt;/md-button&gt;
              &lt;/tk-viewer&gt;
            </code-block>
          </div>
        </example-box>
      </div>
    </docs-component>
  </page-content>
</template>

<script>
  export default {
    data: function () {
      return {
        fullScreen: false,
        show: false,
        speed: 200,
        hideOnClick: true
      }
    },
    methods: {
      change: function (show) {
        this.show = show
      },
      toggle () {
        this.show = !this.show
      }
    }
  }
</script>

<style scoped>
  .block-container{
    height: 200px;
    overflow: auto;
    transform: translateZ(0);
  }
</style>
