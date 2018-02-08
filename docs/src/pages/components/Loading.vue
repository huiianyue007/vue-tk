<template>
  <page-content page-title="组件 - Loading">
    <docs-component>
      <div slot="description">
        <p>在父组件中居中显示一个loadding动画</p>
        <p>组件有两种使用方式，参考代码示例，其中complete切换方式带有一个渐隐效果</p>
        <p>loading组件默认会占满整个页面，如果要限制组件的显示范围，需要在组件外包裹position:relative的元素。</p>
        <p>另一种做法是设置组件的height参数，组件将会显示固定的高度。</p>
      </div>

      <div slot="api">
        <api-table name="TkLoading">
          <code-block lang="javascript">
            // 单独引用
            import Vue from 'vue'
            import TkLoading from 'vue-tk/dist/components/tkLoading'
            Vue.use(TkLoading)
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
                <md-table-cell>type</md-table-cell>
                <md-table-cell><code>String</code></md-table-cell>
                <md-table-cell>动画类型</md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>color</md-table-cell>
                <md-table-cell><code>String</code></md-table-cell>
                <md-table-cell>颜色</md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>backgroundColor</md-table-cell>
                <md-table-cell><code>String</code></md-table-cell>
                <md-table-cell>背景颜色</md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>size</md-table-cell>
                <md-table-cell><code>String</code></md-table-cell>
                <md-table-cell>loading动画尺寸 如16px</md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>center</md-table-cell>
                <md-table-cell><code>Bool</code></md-table-cell>
                <md-table-cell>是否在父组件中居中，默认true</md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>height</md-table-cell>
                <md-table-cell><code>String</code></md-table-cell>
                <md-table-cell>设置高度，例如：150px</md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>complete</md-table-cell>
                <md-table-cell><code>Bool</code></md-table-cell>
                <md-table-cell>设置为true时，隐藏加载动画，显示组件内的内容</md-table-cell>
              </md-table-row>
            </md-table-body>
          </md-table>
        </api-table>
      </div>

      <div slot="example">
        <example-box card-title="v-if切换显示">
          <div slot="demo">
            <div class="block-container" ref="container">
              <md-button class="md-raised" @click.native="changeReady">切换</md-button>
              <div class="loadding-wrap">
                <tk-loading v-if="!ready"></tk-loading>
                <b v-else>这里是组件内容</b>
              </div>
            </div>
          </div>
          <div slot="code">
            <code-block lang="xml" class="demo">
              &lt;tk-loading v-if=&quot;!ready&quot;&gt;&lt;/tk-loading&gt;
              &lt;b v-else&gt;这里是组件内容&lt;/b&gt;
            </code-block>
          </div>
        </example-box>
      </div>

      <div slot="example">
        <example-box card-title="complete切换显示">
          <div slot="demo">
            <div class="block-container" ref="container">
              <md-button class="md-raised" @click.native="changeComplete">切换</md-button>
              <div class="loadding-wrap">
                <tk-loading :complete="complete">
                  <b>这里是组件内容</b>
                </tk-loading>
              </div>
            </div>
          </div>
          <div slot="code">
            <code-block lang="xml" class="demo">
              &lt;tk-loading :complete=&quot;complete&quot;&gt;
                &lt;b&gt;这里是组件内容&lt;/b&gt;
              &lt;/tk-loading&gt;
            </code-block>
          </div>
        </example-box>
      </div>

      <div slot="example">
        <example-box card-title="色彩">
          <div slot="demo">
            <div class="block-container" ref="container">
              <div class="loadding-wrap">
                <tk-loading :complete="complete" color="#E040FB" backgroundColor="#CDDC39" type="pacman">
                  <b>这里是组件内容</b>
                </tk-loading>
              </div>
            </div>
          </div>
          <div slot="code">
            <code-block lang="xml" class="demo">
              &lt;tk-loading :complete=&quot;complete&quot; color=&quot;#E040FB&quot; backgroundColor=&quot;#CDDC39&quot; type=&quot;pacman&quot;&gt;
              &lt;b&gt;这里是组件内容&lt;/b&gt;
              &lt;/tk-loading&gt;
            </code-block>
          </div>
        </example-box>
      </div>

      <div slot="example">
        <example-box card-title="高度">
          <div slot="demo">
            <div class="block-container" ref="container">
              <tk-loading :complete="complete" height="150px" type="scale">
                <b>这里是组件内容</b>
              </tk-loading>
            </div>
          </div>
          <div slot="code">
            <code-block lang="xml" class="demo">
              &lt;tk-loading :complete=&quot;complete&quot; height=&quot;150px&quot; type=&quot;scale&quot;&gt;
              &lt;b&gt;这里是组件内容&lt;/b&gt;
              &lt;/tk-loading&gt;
            </code-block>
          </div>
        </example-box>
      </div>

      <div slot="example">
        <example-box card-title="所有loadding样式">
          <div slot="demo">
            <div class="block-container item-wrap" ref="container">
              <div class="item"><tk-loading type="pulse" :center="notCenter"></tk-loading> pulse</div>
              <div class="item"><tk-loading type="grid" :center="notCenter"></tk-loading> grid</div>
              <div class="item"><tk-loading type="clip" :center="notCenter"></tk-loading> clip</div>
              <div class="item"><tk-loading type="rise" :center="notCenter"></tk-loading> rise</div>
              <div class="item"><tk-loading type="beat" :center="notCenter"></tk-loading> beat</div>
              <div class="item"><tk-loading type="sync" :center="notCenter"></tk-loading> sync</div>
              <div class="item"><tk-loading type="rotate" :center="notCenter"></tk-loading> rotate</div>
              <div class="item"><tk-loading type="fade" :center="notCenter"></tk-loading> fade</div>
              <div class="item"><tk-loading type="pacman" :center="notCenter"></tk-loading> pacman</div>
              <div class="item"><tk-loading type="square" :center="notCenter"></tk-loading> square</div>
              <div class="item"><tk-loading type="scale" :center="notCenter"></tk-loading> scale</div>
              <div class="item"><tk-loading type="skew" :center="notCenter"></tk-loading> skew</div>
              <div class="item"><tk-loading type="moon" :center="notCenter"></tk-loading> moon</div>
              <div class="item"><tk-loading type="ring" :center="notCenter"></tk-loading> ring</div>
              <div class="item"><tk-loading type="bounce" :center="notCenter"></tk-loading> bounce</div>
              <div class="item"><tk-loading type="dot" :center="notCenter"></tk-loading> dot</div>
            </div>
          </div>
          <div slot="code">
            <code-block lang="xml" class="demo">
              &lt;div class=&quot;item&quot;&gt;&lt;tk-loading type=&quot;pulse&quot; :center=&quot;notCenter&quot;&gt;&lt;/tk-loading&gt; pulse&lt;/div&gt;
              &lt;div class=&quot;item&quot;&gt;&lt;tk-loading type=&quot;grid&quot; :center=&quot;notCenter&quot;&gt;&lt;/tk-loading&gt; grid&lt;/div&gt;
              &lt;div class=&quot;item&quot;&gt;&lt;tk-loading type=&quot;clip&quot; :center=&quot;notCenter&quot;&gt;&lt;/tk-loading&gt; clip&lt;/div&gt;
              &lt;div class=&quot;item&quot;&gt;&lt;tk-loading type=&quot;rise&quot; :center=&quot;notCenter&quot;&gt;&lt;/tk-loading&gt; rise&lt;/div&gt;
              &lt;div class=&quot;item&quot;&gt;&lt;tk-loading type=&quot;beat&quot; :center=&quot;notCenter&quot;&gt;&lt;/tk-loading&gt; beat&lt;/div&gt;
              &lt;div class=&quot;item&quot;&gt;&lt;tk-loading type=&quot;sync&quot; :center=&quot;notCenter&quot;&gt;&lt;/tk-loading&gt; sync&lt;/div&gt;
              &lt;div class=&quot;item&quot;&gt;&lt;tk-loading type=&quot;rotate&quot; :center=&quot;notCenter&quot;&gt;&lt;/tk-loading&gt; rotate&lt;/div&gt;
              &lt;div class=&quot;item&quot;&gt;&lt;tk-loading type=&quot;fade&quot; :center=&quot;notCenter&quot;&gt;&lt;/tk-loading&gt; fade&lt;/div&gt;
              &lt;div class=&quot;item&quot;&gt;&lt;tk-loading type=&quot;pacman&quot; :center=&quot;notCenter&quot;&gt;&lt;/tk-loading&gt; pacman&lt;/div&gt;
              &lt;div class=&quot;item&quot;&gt;&lt;tk-loading type=&quot;square&quot; :center=&quot;notCenter&quot;&gt;&lt;/tk-loading&gt; square&lt;/div&gt;
              &lt;div class=&quot;item&quot;&gt;&lt;tk-loading type=&quot;scale&quot; :center=&quot;notCenter&quot;&gt;&lt;/tk-loading&gt; scale&lt;/div&gt;
              &lt;div class=&quot;item&quot;&gt;&lt;tk-loading type=&quot;skew&quot; :center=&quot;notCenter&quot;&gt;&lt;/tk-loading&gt; skew&lt;/div&gt;
              &lt;div class=&quot;item&quot;&gt;&lt;tk-loading type=&quot;moon&quot; :center=&quot;notCenter&quot;&gt;&lt;/tk-loading&gt; moon&lt;/div&gt;
              &lt;div class=&quot;item&quot;&gt;&lt;tk-loading type=&quot;ring&quot; :center=&quot;notCenter&quot;&gt;&lt;/tk-loading&gt; ring&lt;/div&gt;
              &lt;div class=&quot;item&quot;&gt;&lt;tk-loading type=&quot;bounce&quot; :center=&quot;notCenter&quot;&gt;&lt;/tk-loading&gt; bounce&lt;/div&gt;
              &lt;div class=&quot;item&quot;&gt;&lt;tk-loading type=&quot;dot&quot; :center=&quot;notCenter&quot;&gt;&lt;/tk-loading&gt; dot&lt;/div&gt;
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
        notCenter: false,
        ready: false,
        complete: false
      }
    },
    mounted: function () {
      this.container = this.$refs.container
    },
    methods: {
      changeReady: function () {
        this.ready = !this.ready
      },
      changeComplete: function () {
        this.complete = !this.complete
      }
    }
  }
</script>

<style scoped>
  .block-container{
  }
  .loadding-wrap{
    min-height:350px;
    position:relative;
    width:100%;
  }
  .item-wrap{
    display:flex;
    flex-direction: row;
    flex-wrap:wrap;
    align-items:center;
    justify-content:center;
  }
  .item >div{
    height:120px;
    width:200px;
    display:flex;
    align-items:center;
    justify-content:center;
  }
  .item{
    display:flex;
    flex-direction: column;
    align-items:center;
    justify-content:center;
    margin-bottom:100px;
  }
</style>
