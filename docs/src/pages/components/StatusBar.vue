<template>
  <page-content page-title="组件 - 状态栏">
    <docs-component>
      <div slot="description">
        <p>沉浸式效果下，虚拟的状态栏效果</p>
        <p>组件实际生成了两个状态栏，一个使用fixed固定在顶部，一个用来占位。可以通过引入组件目录下的state文件，来修改状态栏的显示效果。</p>
        <p>状态栏的高度会自动设置，在非app环境下不会显示。</p>
        <p><b>注意：</b></p>
        <p><b>1. 因为共用state的关系，该组件全局只能插入一次，即使使用多次，状态也是完全一致的</b></p>
        <p><b>2. 如果一个页面的状态栏效果与其他页面不一致，在离开该页面时，必须将状态栏还原</b></p>
      </div>

      <div slot="api">
        <api-table name="StatusBar">
          <code-block lang="javascript">
            // 单独引用
            import Vue from 'vue'
            import TkStatusBar from 'vue-tk/dist/components/tkStatusBar'
            Vue.use(TkStatusBar)
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
                <md-table-cell>状态栏的颜色，默认为黑色，优先级最高</md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>options</md-table-cell>
                <md-table-cell><code>Object</code></md-table-cell>
                <md-table-cell>设置状态栏参数，可以使用的键值有 color, show, height, immersion</md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>placeholder</md-table-cell>
                <md-table-cell><code>Boolean</code></md-table-cell>
                <md-table-cell>不显示状态栏，仅显示状态栏占位用元素，在沉浸式页面很有用</md-table-cell>
              </md-table-row>
            </md-table-body>
          </md-table>
        </api-table>
      </div>

      <div slot="api">
        <api-table name="$tkStatusBar">
          <p>状态栏状态控制文件</p>

          <code-block lang="javascript">
            // 在引入TkStatusBar后就可以在全局访问 Vue.$tkStatusBar
            // 在组件中可以直接使用 this.$tkStatusBar 访问

            this.$tkStatusBar.setColor('#FFFFFF')
          </code-block>

          <md-table slot="methods">
            <md-table-header>
              <md-table-row>
                <md-table-head>名称</md-table-head>
                <md-table-head>参数</md-table-head>
                <md-table-head>说明</md-table-head>
              </md-table-row>
            </md-table-header>

            <md-table-body>
              <md-table-row>
                <md-table-cell>setClass()</md-table-cell>
                <md-table-cell>className <code>String</code> 类名</md-table-cell>
                <md-table-cell>设置状态栏的class</md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>setColor()</md-table-cell>
                <md-table-cell>color <code>String</code> 颜色</md-table-cell>
                <md-table-cell>设置状态栏的颜色</md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>show()</md-table-cell>
                <md-table-cell></md-table-cell>
                <md-table-cell>显示状态栏，在非app环境下无效</md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>hide()</md-table-cell>
                <md-table-cell></md-table-cell>
                <md-table-cell>隐藏状态栏，即沉浸式效果</md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>toggle()</md-table-cell>
                <md-table-cell></md-table-cell>
                <md-table-cell>切换状态栏显示效果</md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>height()</md-table-cell>
                <md-table-cell></md-table-cell>
                <md-table-cell>获取状态栏高度</md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>isShow()</md-table-cell>
                <md-table-cell></md-table-cell>
                <md-table-cell>判断状态栏当前是否显示</md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>setImmersion()</md-table-cell>
                <md-table-cell>isImmersion <code>Bool</code> 是否开启沉浸式</md-table-cell>
                <md-table-cell>设置沉浸式状态栏</md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>reset()</md-table-cell>
                <md-table-cell></md-table-cell>
                <md-table-cell>还原所有状态变更</md-table-cell>
              </md-table-row>

            </md-table-body>
          </md-table>
        </api-table>
      </div>

      <div slot="example">
        <example-box card-title="设置状态栏">
          <div slot="demo" class="demo">
            <tk-status-bar></tk-status-bar>
            <md-button @click.native="show">显示</md-button>
            <md-button @click.native="hide">隐藏</md-button>
            <md-button @click.native="toggle">切换</md-button>
            <md-button @click.native="color('black')">黑色</md-button>
            <md-button @click.native="color('gray')">灰色</md-button>
            <md-button @click.native="color('red')">红色</md-button>
            <md-button @click.native="color('blue')">蓝色</md-button>
            <md-button @click.native="setImmersion">沉浸式</md-button>
            <md-button @click.native="reset">还原</md-button>
          </div>

          <div slot="code">
            <code-block lang="xml" class="demo">
              &lt;tk-status-bar&gt;&lt;/tk-status-bar&gt;
              &lt;md-button @click.native=&quot;show&quot;&gt;显示&lt;/md-button&gt;
              &lt;md-button @click.native=&quot;hide&quot;&gt;隐藏&lt;/md-button&gt;
              &lt;md-button @click.native=&quot;toggle&quot;&gt;切换&lt;/md-button&gt;
              &lt;md-button @click.native=&quot;color(&#39;black&#39;)&quot;&gt;黑色&lt;/md-button&gt;
              &lt;md-button @click.native=&quot;color(&#39;gray&#39;)&quot;&gt;灰色&lt;/md-button&gt;
              &lt;md-button @click.native=&quot;color(&#39;red&#39;)&quot;&gt;红色&lt;/md-button&gt;
              &lt;md-button @click.native=&quot;color(&#39;blue&#39;)&quot;&gt;蓝色&lt;/md-button&gt;
              &lt;md-button @click.native=&quot;setImmersion&quot;&gt;沉浸式&lt;/md-button&gt;
              &lt;md-button @click.native=&quot;reset&quot;&gt;还原&lt;/md-button&gt;
            </code-block>
          </div>
        </example-box>

        <example-box card-title="沉浸式">
          <div slot="demo" class="demo">
            <div class="container">
              <tk-status-bar :options="immersionState"></tk-status-bar>
              <div class="page">
                <tk-status-bar placeholder></tk-status-bar>
                <div class="header">header占位, 顶部为状态栏占位</div>
              </div>
            </div>
          </div>
          <div slot="code">
            <code-block lang="xml" class="demo">
              &lt;div class=&quot;container&quot;&gt;
              &lt;tk-status-bar :options=&quot;immersionState&quot;&gt;&lt;/tk-status-bar&gt;
              &lt;div class=&quot;page&quot;&gt;
              &lt;tk-status-bar placeholder&gt;&lt;/tk-status-bar&gt;
              &lt;div class=&quot;header&quot;&gt;header占位, 顶部为状态栏占位&lt;/div&gt;
              &lt;/div&gt;
              &lt;/div&gt;
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
        immersionState: {
          show: true,
          immersion: true,
          color: 'transparent'
        }
      }
    },
    created: function () {
      this.$tkStatusBar._height = 35
    },
    methods: {
      show () {
        this.$tkStatusBar.show()
      },
      hide () {
        this.$tkStatusBar.hide()
      },
      toggle () {
        this.$tkStatusBar.toggle()
      },
      color (c) {
        this.$tkStatusBar.setColor(c)
      },
      setImmersion () {
        this.$tkStatusBar.setImmersion(!this.$tkStatusBar._immersion)
      },
      reset () {
        this.$tkStatusBar.reset()
        this.$tkStatusBar.setImmersion(false)
      }
    }
  }
</script>

<style scoped>
  .container{
    height: 300px;
    transform: translate3d(0, 0, 0);
    padding-left: 0;
  }
  .page{
    background-color: #00BCD4;
    height: 100%;
  }
  .header{
    height: 56px;
    padding: 0 16px;
    line-height: 56px;
    font-size: 20px;
    color: white;
    font-weight: 600;
    border-top: 1px solid rgba(255,255,255,.32);
    border-bottom: 1px solid rgba(255,255,255,.32);
  }
</style>
