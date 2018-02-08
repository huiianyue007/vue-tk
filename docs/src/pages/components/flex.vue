<template xmlns="http://www.w3.org/1999/html">
  <page-content page-title="组件 - flex布局">
    <docs-component>
      <div slot="description">
        <p>flex布局组件</p>
        <p>该组件不能在pc项目中使用，因为ie浏览器不支持flex布局</p>
      </div>

      <div slot="api">
        <api-table name="TkLoading">
          <code-block lang="javascript">
            // 单独引用
            import Vue from 'vue'
            import TkFlex from 'vue-tk/dist/components/tkFlex'
            Vue.use(TkFlex)
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
                <md-table-cell>wrap</md-table-cell>
                <md-table-cell></md-table-cell>
                <md-table-cell>允许换行</md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>average</md-table-cell>
                <md-table-cell></md-table-cell>
                <md-table-cell>等宽</md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>column</md-table-cell>
                <md-table-cell></md-table-cell>
                <md-table-cell>竖向排列</md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>between</md-table-cell>
                <md-table-cell></md-table-cell>
                <md-table-cell>两端对齐</md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>around</md-table-cell>
                <md-table-cell></md-table-cell>
                <md-table-cell>两端等边距对齐</md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>stretch</md-table-cell>
                <md-table-cell></md-table-cell>
                <md-table-cell>交叉轴满高</md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>top</md-table-cell>
                <md-table-cell></md-table-cell>
                <md-table-cell>顶部对齐</md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>middle</md-table-cell>
                <md-table-cell></md-table-cell>
                <md-table-cell>中部对齐（竖向）</md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>bottom</md-table-cell>
                <md-table-cell></md-table-cell>
                <md-table-cell>底部对齐</md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>left</md-table-cell>
                <md-table-cell></md-table-cell>
                <md-table-cell>左对齐</md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>center</md-table-cell>
                <md-table-cell></md-table-cell>
                <md-table-cell>中部对齐（横行）</md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>right</md-table-cell>
                <md-table-cell></md-table-cell>
                <md-table-cell>右对齐</md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>wrapGutter</md-table-cell>
                <md-table-cell></md-table-cell>
                <md-table-cell>外层边距</md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>gutter</md-table-cell>
                <md-table-cell><code>String</code><code>Number</code></md-table-cell>
                <md-table-cell>边距，例如"8"或"8px"</md-table-cell>
              </md-table-row>
            </md-table-body>
          </md-table>
        </api-table>
      </div>

      <div slot="api">
        <api-table name="classes">

          <code-block lang="javascript">
            // 这些class大多只能使用在flex组件内的元素上
          </code-block>

          <md-table slot="classes">
            <md-table-header>
              <md-table-row>
                <md-table-head>名称</md-table-head>
                <md-table-head>说明</md-table-head>
              </md-table-row>
            </md-table-header>

            <md-table-body>
              <md-table-row>
                <md-table-cell>full</md-table-cell>
                <md-table-cell>100%宽度</md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>fill</md-table-cell>
                <md-table-cell>填满剩余空间</md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>tk-grid-n</md-table-cell>
                <md-table-cell>宽度为n栅格，总栅格数为12</md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>tk-grid-offset-n</md-table-cell>
                <md-table-cell>偏移n个栅格，目前只支持左偏移</md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>self-top</md-table-cell>
                <md-table-cell>顶部对齐（忽略组件对齐）</md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>self-middle</md-table-cell>
                <md-table-cell>中部对齐（忽略组件对齐）</md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>self-bottom</md-table-cell>
                <md-table-cell>底部对齐（忽略组件对齐）</md-table-cell>
              </md-table-row>
            </md-table-body>
          </md-table>
        </api-table>
      </div>

      <div slot="example">
        <example-box card-title="flex布局">
          <div slot="demo">
            <div class="example-wrap" ref="container">
              <div>
                <md-checkbox v-model="wrap">wrap</md-checkbox>
                <md-checkbox v-model="average">average</md-checkbox>
                <md-checkbox v-model="column">column</md-checkbox>
              </div>
              <div>
                <md-checkbox v-model="between">between</md-checkbox>
                <md-checkbox v-model="around">around</md-checkbox>
                <md-checkbox v-model="stretch">stretch</md-checkbox>
              </div>
              <div>
                <md-radio v-model="v" name="v" md-value="top">top</md-radio>
                <md-radio v-model="v" name="v" md-value="middle">middle</md-radio>
                <md-radio v-model="v" name="v" md-value="bottom">bottom</md-radio>
              </div>
              <div>
                <md-radio v-model="r" name="r" md-value="left">left</md-radio>
                <md-radio v-model="r" name="r" md-value="center">center</md-radio>
                <md-radio v-model="r" name="r" md-value="right">right</md-radio>
              </div>
              <tk-flex middle gutter="16">
                <md-checkbox v-model="wrapGutter">wrapGutter</md-checkbox>
                <div>
                  <md-input-container style="">
                    <label>gutter (px)</label>
                    <md-input v-model="gutter"></md-input>
                  </md-input-container>
                </div>
              </tk-flex>


              <div class="flex-wraper">
                <tk-flex :wrap="wrap" :column="column" :middle="middle" :top="top" :bottom="bottom" :left="left" :center="center" :right="right" :average="average" :wrapGutter="wrapGutter" :gutter="gutter" :between="between" :around="around" :stretch="stretch">
                  <div class="item big"><div class="inner"></div></div>
                  <div class="item fill"><div class="inner">fill</div></div>
                  <div class="item self-middle"><div class="inner">self-middle</div></div>
                  <div class="item self-bottom"><div class="inner">self-bottom</div></div>
                  <div class="item"><div class="inner"></div></div>
                  <div class="item"><div class="inner"></div></div>
                  <div class="item"><div class="inner"></div></div>
                  <div class="item"><div class="inner"></div></div>
                  <div class="item"><div class="inner"></div></div>
                  <div class="item"><div class="inner"></div></div>
                  <div class="item"><div class="inner"></div></div>
                </tk-flex>
              </div>
            </div>
          </div>
          <div slot="code">
            <code-block lang="xml" class="demo">
              &lt;tk-flex :wrap=&quot;wrap&quot; :column=&quot;column&quot; :middle=&quot;middle&quot; :top=&quot;top&quot; :bottom=&quot;bottom&quot; :left=&quot;left&quot; :center=&quot;center&quot; :right=&quot;right&quot; :average=&quot;average&quot; :wrapGutter=&quot;wrapGutter&quot; :gutter=&quot;gutter&quot;&gt;
              &lt;div class=&quot;item big&quot;&gt;&lt;div class=&quot;inner&quot;&gt;&lt;/div&gt;&lt;/div&gt;
              &lt;div class=&quot;item fill&quot;&gt;&lt;div class=&quot;inner&quot;&gt;fill&lt;/div&gt;&lt;/div&gt;
              &lt;div class=&quot;item self-middle&quot;&gt;&lt;div class=&quot;inner&quot;&gt;self-middle&lt;/div&gt;&lt;/div&gt;
              &lt;div class=&quot;item self-bottom&quot;&gt;&lt;div class=&quot;inner&quot;&gt;self-bottom&lt;/div&gt;&lt;/div&gt;
              &lt;div class=&quot;item&quot;&gt;&lt;div class=&quot;inner&quot;&gt;&lt;/div&gt;&lt;/div&gt;
              &lt;div class=&quot;item&quot;&gt;&lt;div class=&quot;inner&quot;&gt;&lt;/div&gt;&lt;/div&gt;
              &lt;div class=&quot;item&quot;&gt;&lt;div class=&quot;inner&quot;&gt;&lt;/div&gt;&lt;/div&gt;
              &lt;div class=&quot;item&quot;&gt;&lt;div class=&quot;inner&quot;&gt;&lt;/div&gt;&lt;/div&gt;
              &lt;div class=&quot;item&quot;&gt;&lt;div class=&quot;inner&quot;&gt;&lt;/div&gt;&lt;/div&gt;
              &lt;/tk-flex&gt;
            </code-block>
          </div>
        </example-box>
      </div>
      <div slot="example">
        <example-box card-title="栅格">
          <div slot="demo">
            <div class="example-wrap" ref="container">
              <div class="flex-wraper">
                <tk-flex wrap gutter="8px">
                  <div class="item tk-grid-4"><div class="inner">tk-grid-4</div></div>
                  <div class="item tk-grid-4"><div class="inner">tk-grid-4</div></div>
                  <div class="item tk-grid-4"><div class="inner">tk-grid-4</div></div>
                  <div class="item tk-grid-8"><div class="inner">tk-grid-8</div></div>
                  <div class="item tk-grid-4"><div class="inner">tk-grid-4</div></div>
                  <div class="item tk-grid-6 tk-grid-offset-6"><div class="inner">tk-grid-6<br/>tk-grid-offset-6</div></div>
                </tk-flex>
              </div>
            </div>
          </div>
          <div slot="code">
            <code-block lang="xml" class="demo">
              &lt;tk-flex wrap gutter=&quot;8px&quot;&gt;
              &lt;div class=&quot;item tk-grid-4&quot;&gt;&lt;div class=&quot;inner&quot;&gt;tk-grid-4&lt;/div&gt;&lt;/div&gt;
              &lt;div class=&quot;item tk-grid-4&quot;&gt;&lt;div class=&quot;inner&quot;&gt;tk-grid-4&lt;/div&gt;&lt;/div&gt;
              &lt;div class=&quot;item tk-grid-4&quot;&gt;&lt;div class=&quot;inner&quot;&gt;tk-grid-4&lt;/div&gt;&lt;/div&gt;
              &lt;div class=&quot;item tk-grid-8&quot;&gt;&lt;div class=&quot;inner&quot;&gt;tk-grid-8&lt;/div&gt;&lt;/div&gt;
              &lt;div class=&quot;item tk-grid-4&quot;&gt;&lt;div class=&quot;inner&quot;&gt;tk-grid-4&lt;/div&gt;&lt;/div&gt;
              &lt;div class=&quot;item tk-grid-6 tk-grid-offset-6&quot;&gt;&lt;div class=&quot;inner&quot;&gt;tk-grid-6&lt;br/&gt;tk-grid-offset-6&lt;/div&gt;&lt;/div&gt;
              &lt;/tk-flex&gt;
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
        column: false,
        wrap: true,
        left: false,
        center: false,
        right: false,
        top: false,
        middle: false,
        bottom: false,
        average: false,
        wrapGutter: false,
        between: false,
        around: false,
        stretch: false,
        gutter: '8',
        v: 'top',
        r: 'left'
      }
    },
    watch: {
      v: function () {
        this.top = this.middle = this.bottom = false
        this[this.v] = true
      },
      r: function () {
        this.left = this.center = this.right = false
        this[this.r] = true
      }
    },
    mounted: function () {
    },
    methods: {
    }
  }
</script>

<style scoped>
  .flex-wraper{
    border:2px solid #FFC107;
  }
  .item{
    width:100px;
    height:100px;
  }
  .item.big{
    height:200px;
  }
  .inner{
    width:100%;
    height:100%;
    background-color:#3F51B5;
    color:white;
    text-align: center;
    display:flex;
    flex-direction: column;
    justify-content: center;
  }
  .tk-flex.tk-flex-stretch.tk-flex-row .item{
    height: auto;
    min-height: 100px;
  }
  .tk-flex.tk-flex-stretch.tk-flex-column .item{
    width: auto;
    min-width:100px;
  }
</style>
