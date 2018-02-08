<template>
  <page-content page-title="组件 - Box">
    <docs-component>
      <div slot="description">
        <p>固定比例的布局工具</p>
      </div>

      <div slot="api">
        <api-table name="TkBox">
          <code-block lang="javascript">
            // 单独引用
            import Vue from 'vue'
            import TkBox from 'vue-tk/dist/components/tkBox'
            Vue.use(TkBox)
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
                <md-table-cell>ratio</md-table-cell>
                <md-table-cell><code>String</code></md-table-cell>
                <md-table-cell>box长宽比例，例如 16:9</md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>zIndex</md-table-cell>
                <md-table-cell><code>Number</code></md-table-cell>
                <md-table-cell>tkBox之间重叠时，数字越大层级越高，默认1</md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>background</md-table-cell>
                <md-table-cell><code>String</code></md-table-cell>
                <md-table-cell>背景图片url</md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>left</md-table-cell>
                <md-table-cell></md-table-cell>
                <md-table-cell>水平居左，只在tk-box嵌套时生效</md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>right</md-table-cell>
                <md-table-cell></md-table-cell>
                <md-table-cell>水平居右，只在tk-box嵌套时生效</md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>center</md-table-cell>
                <md-table-cell></md-table-cell>
                <md-table-cell>水平居中，只在tk-box嵌套时生效</md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>top</md-table-cell>
                <md-table-cell></md-table-cell>
                <md-table-cell>垂直居上，只在tk-box嵌套时生效</md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>bottom</md-table-cell>
                <md-table-cell></md-table-cell>
                <md-table-cell>垂直居下，只在tk-box嵌套时生效</md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>middle</md-table-cell>
                <md-table-cell></md-table-cell>
                <md-table-cell>垂直居中，只在tk-box嵌套时生效</md-table-cell>
              </md-table-row>
            </md-table-body>
          </md-table>
        </api-table>
      </div>

      <div slot="example">
        <example-box card-title="常用比例">
          <div slot="demo">
            <div class="block-container" ref="container">
              <tk-flex wrap gutter="8">
                <div style="width:20%">
                  <tk-box ratio="1:1" class="grey-light">
                    <div class="ratio-msg">1:1</div>
                  </tk-box>
                </div>
                <div style="width:20%">
                  <tk-box ratio="16:9" class="red">
                    <div class="ratio-msg">16:9</div>
                  </tk-box>
                </div>
                <div style="width:20%">
                  <tk-box ratio="4:3" class="cyan">
                    <div class="ratio-msg">4:3</div>
                  </tk-box>
                </div>
                <div style="width:20%">
                  <tk-box ratio="9:16" class="blue-grey">
                    <div class="ratio-msg">9:16</div>
                  </tk-box>
                </div>
                <div style="width:20%">
                  <tk-box ratio="3:4" class="amber">
                    <div class="ratio-msg">3:4</div>
                  </tk-box>
                </div>
              </tk-flex>
            </div>
          </div>
          <div slot="code">
            <code-block lang="xml" class="demo">
              &lt;tk-flex wrap gutter=&quot;8&quot;&gt;
              &lt;div style=&quot;width:20%&quot;&gt;
              &lt;tk-box ratio=&quot;1:1&quot; class=&quot;grey-light&quot;&gt;
              &lt;div class=&quot;ratio-msg&quot;&gt;1:1&lt;/div&gt;
              &lt;/tk-box&gt;
              &lt;/div&gt;
              &lt;div style=&quot;width:20%&quot;&gt;
              &lt;tk-box ratio=&quot;16:9&quot; class=&quot;red&quot;&gt;
              &lt;div class=&quot;ratio-msg&quot;&gt;16:9&lt;/div&gt;
              &lt;/tk-box&gt;
              &lt;/div&gt;
              &lt;div style=&quot;width:20%&quot;&gt;
              &lt;tk-box ratio=&quot;4:3&quot; class=&quot;cyan&quot;&gt;
              &lt;div class=&quot;ratio-msg&quot;&gt;4:3&lt;/div&gt;
              &lt;/tk-box&gt;
              &lt;/div&gt;
              &lt;div style=&quot;width:20%&quot;&gt;
              &lt;tk-box ratio=&quot;9:16&quot; class=&quot;blue-grey&quot;&gt;
              &lt;div class=&quot;ratio-msg&quot;&gt;9:16&lt;/div&gt;
              &lt;/tk-box&gt;
              &lt;/div&gt;
              &lt;div style=&quot;width:20%&quot;&gt;
              &lt;tk-box ratio=&quot;3:4&quot; class=&quot;amber&quot;&gt;
              &lt;div class=&quot;ratio-msg&quot;&gt;3:4&lt;/div&gt;
              &lt;/tk-box&gt;
              &lt;/div&gt;
              &lt;/tk-flex&gt;
            </code-block>
          </div>
        </example-box>
        <example-box card-title="嵌套和定位">
          <div slot="demo">
            <div class="block-container" ref="container">
              <tk-flex center>
                <tk-box style="max-width: 300px;width: 100%" ratio="1:1">
                  <tk-box ratio="2:1" class="red" left top style="width: 66.67%">
                    <div class="ratio-msg">left top</div>
                  </tk-box>
                  <tk-box ratio="1:2" class="cyan" right top style="width: 33.34%">
                    <div class="ratio-msg">right top</div>
                  </tk-box>
                  <tk-box ratio="1:2" class="blue-grey" left bottom style="width: 33.34%">
                    <div class="ratio-msg">left bottom</div>
                  </tk-box>
                  <tk-box ratio="2:1" class="amber" right bottom style="width: 66.67%" >
                    <div class="ratio-msg">right bottom</div>
                  </tk-box>
                  <tk-box ratio="1:1" class="grey-light" middle center style="width: 33.34%">
                    <div class="ratio-msg">middle<br/>center</div>
                  </tk-box>
                </tk-box>
              </tk-flex>
            </div>
          </div>
          <div slot="code">
            <code-block lang="xml" class="demo">
              &lt;tk-box style=&quot;max-width: 300px;width: 100%&quot; ratio=&quot;1:1&quot;&gt;
              &lt;tk-box ratio=&quot;2:1&quot; class=&quot;red&quot; left top style=&quot;width: 66.67%&quot;&gt;
              &lt;div class=&quot;ratio-msg&quot;&gt;left top&lt;/div&gt;
              &lt;/tk-box&gt;
              &lt;tk-box ratio=&quot;1:2&quot; class=&quot;cyan&quot; right top style=&quot;width: 33.34%&quot;&gt;
              &lt;div class=&quot;ratio-msg&quot;&gt;right top&lt;/div&gt;
              &lt;/tk-box&gt;
              &lt;tk-box ratio=&quot;1:2&quot; class=&quot;blue-grey&quot; left bottom style=&quot;width: 33.34%&quot;&gt;
              &lt;div class=&quot;ratio-msg&quot;&gt;left bottom&lt;/div&gt;
              &lt;/tk-box&gt;
              &lt;tk-box ratio=&quot;2:1&quot; class=&quot;amber&quot; right bottom style=&quot;width: 66.67%&quot;&gt;
              &lt;div class=&quot;ratio-msg&quot;&gt;right bottom&lt;/div&gt;
              &lt;/tk-box&gt;
              &lt;tk-box ratio=&quot;1:1&quot; class=&quot;grey-light&quot; middle center style=&quot;width: 33.34%&quot;&gt;
              &lt;div class=&quot;ratio-msg&quot;&gt;middle&lt;br/&gt;center&lt;/div&gt;
              &lt;/tk-box&gt;
              &lt;/tk-box&gt;
            </code-block>
          </div>
        </example-box>
        <example-box card-title="九宫格">
          <div slot="demo">
            <div class="block-container" ref="container">
              <tk-flex center>
                <tk-box style="max-width: 300px;width: 100%" ratio="1:1">
                  <tk-flex wrap gutter="8">
                    <div class="tk-grid-4" v-for="i in 9">
                      <tk-box class="cyan" ratio="1:1"></tk-box>
                    </div>
                  </tk-flex>
                </tk-box>
              </tk-flex>
            </div>
          </div>
          <div slot="code">
            <code-block lang="xml" class="demo">
              &lt;tk-box style=&quot;max-width: 300px;width: 100%&quot; ratio=&quot;1:1&quot;&gt;
              &lt;tk-flex wrap gutter=&quot;8&quot;&gt;
              &lt;div class=&quot;tk-grid-4&quot; v-for=&quot;i in 9&quot;&gt;
              &lt;tk-box class=&quot;cyan&quot; ratio=&quot;1:1&quot;&gt;&lt;/tk-box&gt;
              &lt;/div&gt;
              &lt;/tk-flex&gt;
              &lt;/tk-box&gt;
            </code-block>
          </div>
        </example-box>
      </div>
    </docs-component>
  </page-content>
</template>

<script>
  export default {
  }
</script>

<style scoped>
  .red{
    background-color: #F44336;
  }
  .cyan{
    background-color: #00BCD4;
  }
  .blue-grey{
    background-color: #607D8B;
  }
  .amber{
    background-color: #FFC107;
  }
  .lime{
    background-color: #CDDC39;
  }
  .ratio-msg{
    height: 100%;
    line-height: 100%;
    font-size:18px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .grey-light{
    background-color: rgba(0,0,0,.12);
  }
</style>
