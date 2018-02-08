<template>
  <page-content page-title="组件 - Container">
    <docs-component>
      <div slot="description">
        <p>页面布局工具</p>
        <p><b>组件内使用 display:fixed ，必须写于cover或body-cover的slot中，否则会在Android或chrome下出现定位失效问题, 但tk-cover不受影响。</b></p>
      </div>
      <div slot="api">
        <api-table name="TkContainer">
          <code-block lang="javascript">
            // 单独引用
            import Vue from 'vue'
            import TkContainer from 'vue-tk/dist/components/tkContainer'
            Vue.use(TkContainer)
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
                <md-table-cell>hideStatusBar</md-table-cell>
                <md-table-cell><code>Boolean</code></md-table-cell>
                <md-table-cell>隐藏当前页面的状态栏</md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>statusBar</md-table-cell>
                <md-table-cell><code>Object</code></md-table-cell>
                <md-table-cell>设置当前页面的状态栏参数，可以使用的键值有 color, show, height, immersion</md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>disableScroll</md-table-cell>
                <md-table-cell><code>Boolean</code></md-table-cell>
                <md-table-cell>禁止页面滚动，超出部分会被隐藏，主要用于单屏页面</md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>center</md-table-cell>
                <md-table-cell><code>Boolean</code></md-table-cell>
                <md-table-cell>设置页面内的元素在横向和纵向上居中</md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>status</md-table-cell>
                <md-table-cell><code>String</code>, <code>Bool</code></md-table-cell>
                <md-table-cell>当前页面的状态，会显示对应的状态组件</md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>infiniteScroll</md-table-cell>
                <md-table-cell><code>Boolean</code>, <code>Bool</code></md-table-cell>
                <md-table-cell>使用无限加载</md-table-cell>
              </md-table-row>
            </md-table-body>
          </md-table>
          <md-table slot="events">
            <md-table-header>
              <md-table-row>
                <md-table-head>事件名称</md-table-head>
                <md-table-head>返回参数</md-table-head>
                <md-table-head>说明</md-table-head>
              </md-table-row>
            </md-table-header>

            <md-table-body>
              <md-table-row>
                <md-table-cell>scroll</md-table-cell>
                <md-table-cell><code>scrollTop</code>: 滚动高度</md-table-cell>
                <md-table-cell>主内容区滚动时触发</md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>loadingMore</md-table-cell>
                <md-table-cell>
                  <code>page</code>: 加载的页数，从1开始<br/>
                  <code>next</code>: 回调函数，运行后才会触发下一次loadingMore，可以以下参数：<br/>
                  '+1':  页数加一，等待下一次加载;<br/>
                  num: 设置页数，等待下一次加载;<br/>
                  'complete': 没有需要加载的数据了，停止监听
                </md-table-cell>
                <md-table-cell>无限加载事件</md-table-cell>
              </md-table-row>
            </md-table-body>
          </md-table>
          <md-table slot="methods">

            <md-table-header>
              <md-table-row>
                <md-table-head>方法名称</md-table-head>
                <md-table-head>传入参数</md-table-head>
                <md-table-head>返回</md-table-head>
                <md-table-head>说明</md-table-head>
              </md-table-row>
            </md-table-header>

            <md-table-body>
              <md-table-row>
                <md-table-cell>scrollTo</md-table-cell>
                <md-table-cell><code>scrollTop</code>: (int,必填) 滚动位置</md-table-cell>
                <md-table-cell></md-table-cell>
                <md-table-cell>设置内容区滚动位置</md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>getScrollTop</md-table-cell>
                <md-table-cell></md-table-cell>
                <md-table-cell><code>scrollTop</code>: (int)滚动位置</md-table-cell>
                <md-table-cell>获取内容区滚动位置</md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>setPosition</md-table-cell>
                <md-table-cell><code>scrollTop</code>: (int,必填) 滚动位置</md-table-cell>
                <md-table-cell></md-table-cell>
                <md-table-cell>滚动到特定高度，与scrollTo的区别是没有滚动动画</md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>scrollIntoView</md-table-cell>
                <md-table-cell><code>query</code>: (string,必填) 元素选择器</md-table-cell>
                <md-table-cell></md-table-cell>
                <md-table-cell>滚动到特定元素位置</md-table-cell>
              </md-table-row>
            </md-table-body>
          </md-table>
        </api-table>

        <api-table name="$tkContainer">
          <code-block lang="javascript">
            // 单独引用
            import $tkContainer from 'vue-tk'

            //组件中直接使用
            this.$tkContainer

            // 设置loading props
            $tkContainer.loadingOptions = {
              type: ''
              color: ''
            }
            // 定义页面状态组件
            $tkContainer.status.loading = myLoading
            $tkContainer.status.error = myError
            $tkContainer.status.empty = myEmpty

            // 定义手机响应式显示
            $tkContainer.mobileView = true
          </code-block>
        </api-table>
      </div>

      <div slot="example">
        <example-box card-title="默认">
          <div slot="demo">
            <tk-flex center>
              <div class="block-container">
                <tk-container class="container-wrap" hideStatusBar>
                  <div class="header">
                    标题
                  </div>
                  <p v-for="i in 20">文字段落</p>
                </tk-container>
              </div>
            </tk-flex>
          </div>
          <div slot="code">
            <code-block lang="xml" class="demo">
              &lt;tk-container class=&quot;container-wrap&quot; hideStatusBar&gt;
              &lt;div class=&quot;header&quot;&gt;
              标题
              &lt;/div&gt;
              &lt;p v-for=&quot;i in 20&quot;&gt;文字段落&lt;/p&gt;
              &lt;/tk-container&gt;
            </code-block>
          </div>
        </example-box>
        <example-box card-title="固定头尾">
          <div slot="demo">
            <tk-flex center>
              <div class="block-container">
                <tk-container class="container-wrap" hideStatusBar>
                  <div class="header" slot="header">
                    标题
                  </div>
                  <p v-for="i in 20">文字段落</p>
                  <tk-flex middle class="footer" slot="footer">
                    <div class="fill">footer</div>
                    <tk-icon @click.native="add">star_border</tk-icon>
                  </tk-flex>
                </tk-container>
              </div>
            </tk-flex>
          </div>
          <div slot="code">
            <code-block lang="xml" class="demo">
              &lt;tk-container class=&quot;container-wrap&quot; hideStatusBar&gt;
              &lt;div class=&quot;header&quot; slot=&quot;header&quot;&gt;
              标题
              &lt;/div&gt;
              &lt;p v-for=&quot;i in 20&quot;&gt;文字段落&lt;/p&gt;
              &lt;tk-flex middle class=&quot;footer&quot; slot=&quot;footer&quot;&gt;
              &lt;div class=&quot;fill&quot;&gt;footer&lt;/div&gt;
              &lt;tk-icon&gt;star_border&lt;/tk-icon&gt;
              &lt;/tk-flex&gt;
              &lt;/tk-container&gt;
            </code-block>
          </div>
        </example-box>
        <example-box card-title="页面状态">
          <div slot="demo">
            <tk-flex center>
              <div class="block-container">
                <tk-container class="container-wrap" hideStatusBar :status="status" @refresh="refresh">
                  <div class="header" slot="header">
                    error,loading,empty的默认组件演示
                  </div>
                  <p v-for="i in 20">文字段落</p>
                  <tk-flex middle class="footer" slot="footer">
                    <div class="fill">footer</div>
                    <tk-icon>star_border</tk-icon>
                  </tk-flex>
                </tk-container>
              </div>
            </tk-flex>
          </div>
          <div slot="code">
            <code-block lang="javascript" class="demo">
              // 监听refresh事件
              methods: {
              refresh: function () {
              this.status = 'loading'
              setTimeout(() => {
              this.status = 'empty'
              }, 1000)
              },
              //
            </code-block>
            <code-block lang="xml" class="demo">
              &lt;tk-container class=&quot;container-wrap&quot; hideStatusBar error @refresh=&quot;refresh&quot; :status=&quot;status&quot;&gt;
              &lt;div class=&quot;header&quot; slot=&quot;header&quot;&gt;
              可以自定义所有状态组件
              &lt;/div&gt;
              &lt;p v-for=&quot;i in 20&quot;&gt;文字段落&lt;/p&gt;
              &lt;tk-flex middle class=&quot;footer&quot; slot=&quot;footer&quot;&gt;
              &lt;div class=&quot;fill&quot;&gt;footer&lt;/div&gt;
              &lt;tk-icon&gt;star_border&lt;/tk-icon&gt;
              &lt;/tk-flex&gt;
              &lt;/tk-container&gt;
            </code-block>
          </div>
        </example-box>

        <example-box card-title="无限加载">
          <div slot="demo">
            <tk-flex center>
              <div class="block-container">
                <tk-container class="container-wrap" hideStatusBar infiniteScroll @loadingMore="loadingMore">
                  <div class="header" slot="header">
                    一共会加载五页
                  </div>
                  <p v-for="i in num">文字段落</p>
                </tk-container>
              </div>
            </tk-flex>
          </div>
          <div slot="code">
            <code-block lang="xml" class="demo">
              &lt;tk-container class=&quot;container-wrap&quot; hideStatusBar infiniteScroll @loadingMore=&quot;loadingMore&quot;&gt;
              &lt;div class=&quot;header&quot; slot=&quot;header&quot;&gt;
              一共会加载五页
              &lt;/div&gt;
              &lt;p v-for=&quot;i in num&quot;&gt;文字段落&lt;/p&gt;
              &lt;/tk-container&gt;
            </code-block>
            <code-block lang="javascript" class="demo">
              {
                data: () => {
                  return {
                    num: 0,
                    perPage: 20
                  }
                },
                methods: {
                  loadingMore: function (page, next) {
                    setTimeout(() => {
                      this.num = (page + 1) * this.perPage
                      if (page >= 5) {
                        next('complete')
                      } else {
                        next('+1')
                      }
                    }, 1000)
                  }
                }
            </code-block>
          </div>
        </example-box>

        <example-box card-title="单屏和居中">
          <div slot="demo">
            <tk-flex center>
              <div class="block-container">
                <tk-container class="container-wrap"  disableScroll center hideStatusBar>
                  <tk-flex column center>
                    <h4 class="title">登录</h4>
                    <div class="input-wrap">
                      <md-input-container>
                        <label>账号</label>
                        <md-input></md-input>
                      </md-input-container>
                      <md-input-container>
                        <label>密码</label>
                        <md-input type="password"></md-input>
                      </md-input-container>
                    </div>
                    <div>
                      <md-button class="md-raised">确定</md-button>
                    </div>
                  </tk-flex>
                </tk-container>
              </div>
            </tk-flex>
          </div>
          <div slot="code">
            <code-block lang="xml" class="demo">
              &lt;tk-container class=&quot;container-wrap&quot;  disableScroll center hideStatusBar&gt;
              &lt;tk-flex column center&gt;
              &lt;h4 class=&quot;title&quot;&gt;登录&lt;/h4&gt;
              &lt;div class=&quot;input-wrap&quot;&gt;
              &lt;md-input-container&gt;
              &lt;label&gt;账号&lt;/label&gt;
              &lt;md-input&gt;&lt;/md-input&gt;
              &lt;/md-input-container&gt;
              &lt;md-input-container&gt;
              &lt;label&gt;密码&lt;/label&gt;
              &lt;md-input type=&quot;password&quot;&gt;&lt;/md-input&gt;
              &lt;/md-input-container&gt;
              &lt;/div&gt;
              &lt;div&gt;
              &lt;md-button class=&quot;md-raised&quot;&gt;确定&lt;/md-button&gt;
              &lt;/div&gt;
              &lt;/tk-flex&gt;
              &lt;/tk-container&gt;
            </code-block>
          </div>
        </example-box>
        <example-box card-title="cover">
          <div slot="demo">
            <tk-flex center>
              <div class="block-container">
                <tk-container class="container-wrap" hideStatusBar>
                  <div class="header" slot="header">
                    标题
                  </div>
                  <p v-for="i in 20">文字段落</p>
                  <tk-flex middle class="footer" slot="footer">
                    <div class="fill">footer</div>
                    <tk-icon>star_border</tk-icon>
                  </tk-flex>
                  <div slot="cover" class="cover">cover</div>
                  <div slot="body-cover" class="body-cover">body-cover</div>
                </tk-container>
              </div>
            </tk-flex>
          </div>
          <div slot="code">
            <code-block lang="xml" class="demo">
              &lt;tk-container class=&quot;container-wrap&quot; hideStatusBar&gt;
              &lt;div class=&quot;header&quot; slot=&quot;header&quot;&gt;
              标题
              &lt;/div&gt;
              &lt;p v-for=&quot;i in 20&quot;&gt;文字段落&lt;/p&gt;
              &lt;tk-flex middle class=&quot;footer&quot; slot=&quot;footer&quot;&gt;
              &lt;div class=&quot;fill&quot;&gt;footer&lt;/div&gt;
              &lt;tk-icon&gt;star_border&lt;/tk-icon&gt;
              &lt;/tk-flex&gt;
              &lt;div slot=&quot;cover&quot; class=&quot;cover&quot;&gt;cover&lt;/div&gt;
              &lt;div slot=&quot;body-cover&quot; class=&quot;body-cover&quot;&gt;body-cover&lt;/div&gt;
              &lt;/tk-container&gt;
            </code-block>
          </div>
        </example-box>
        <example-box card-title="设置状态栏">
          <div slot="demo">
            <tk-flex center>
              <div class="block-container">
                <tk-container class="container-wrap" :statusBar="statusBar">
                  <div class="header" slot="header">
                    标题
                  </div>
                  <p>可以单独设置当前页面的状态栏</p>
                  <p>这不会影响全局的状态栏效果</p>
                  <p v-for="i in 20">文字段落</p>
                </tk-container>
              </div>
            </tk-flex>
          </div>
          <div slot="code">
            <code-block lang="xml" class="demo">
              &lt;tk-container class=&quot;container-wrap&quot; :statusBar=&quot;statusBar&quot;&gt;
              &lt;div class=&quot;header&quot; slot=&quot;header&quot;&gt;
              标题
              &lt;/div&gt;
              &lt;p&gt;可以单独设置当前页面的状态栏&lt;/p&gt;
              &lt;p&gt;这不会影响全局的状态栏效果&lt;/p&gt;
              &lt;p v-for=&quot;i in 20&quot;&gt;文字段落&lt;/p&gt;
              &lt;/tk-container&gt;
            </code-block>
          </div>
        </example-box>

        <example-box card-title="滚动事件">
          <div slot="demo">
            <tk-flex middle>
              <md-input-container class="fill">
                <label>滚动高度</label>
                <md-input v-model="scrollTop"></md-input>
              </md-input-container>
              <md-button class="md-raised" @click.native="setScrollTop">设置高度</md-button>
            </tk-flex>
            <tk-flex center>
              <div class="block-container">
                <tk-container class="container-wrap" hideStatusBar @scroll="scrollHandler" ref="scrollContainer">
                  <div class="header">
                    标题
                  </div>
                  <p v-for="i in 20">文字段落</p>
                </tk-container>
              </div>
            </tk-flex>
          </div>
          <div slot="code">
            <code-block lang="xml" class="demo">
              &lt;tk-flex middle&gt;
              &lt;md-input-container class=&quot;fill&quot;&gt;
              &lt;label&gt;滚动高度&lt;/label&gt;
              &lt;md-input v-model=&quot;scrollTop&quot;&gt;&lt;/md-input&gt;
              &lt;/md-input-container&gt;
              &lt;md-button class=&quot;md-raised&quot; @click.native=&quot;setScrollTop&quot;&gt;设置高度&lt;/md-button&gt;
              &lt;/tk-flex&gt;
              &lt;tk-flex center&gt;
              &lt;div class=&quot;block-container&quot;&gt;
              &lt;tk-container class=&quot;container-wrap&quot; hideStatusBar @scroll=&quot;scrollHandler&quot; ref=&quot;scrollContainer&quot;&gt;
              &lt;div class=&quot;header&quot;&gt;
              标题
              &lt;/div&gt;
              &lt;p v-for=&quot;i in 20&quot;&gt;文字段落&lt;/p&gt;
              &lt;/tk-container&gt;
              &lt;/div&gt;
              &lt;/tk-flex&gt;
            </code-block>
          </div>
        </example-box>

        <example-box card-title="滚动到特定元素">
          <div slot="demo">
            <tk-flex center>
              <div class="block-container">
                <tk-container class="container-wrap" hideStatusBar ref="scrollViewContainer">
                  <div class="header">
                    标题
                  </div>
                  <h3 id="p1">第一段</h3>
                  <a @click="scrollIntoView('#p2')">跳到第二段</a>
                  <p v-for="i in 20">文字段落</p>
                  <h3 id="p2">第二段</h3>
                  <a @click="scrollIntoView('#p1')">跳到第一段</a>
                  <p v-for="i in 20">文字段落</p>
                </tk-container>
              </div>
            </tk-flex>
          </div>
          <div slot="code">
            <code-block lang="xml" class="demo">
              &lt;tk-container class=&quot;container-wrap&quot; hideStatusBar ref=&quot;scrollViewContainer&quot;&gt;
              &lt;div class=&quot;header&quot;&gt;
              标题
              &lt;/div&gt;
              &lt;h3 id=&quot;p1&quot;&gt;第一段&lt;/h3&gt;
              &lt;a @click=&quot;scrollIntoView(&#39;#p2&#39;)&quot;&gt;跳到第二段&lt;/a&gt;
              &lt;p v-for=&quot;i in 20&quot;&gt;文字段落&lt;/p&gt;
              &lt;h3 id=&quot;p2&quot;&gt;第二段&lt;/h3&gt;
              &lt;a @click=&quot;scrollIntoView(&#39;#p1&#39;)&quot;&gt;跳到第一段&lt;/a&gt;
              &lt;p v-for=&quot;i in 20&quot;&gt;文字段落&lt;/p&gt;
              &lt;/tk-container&gt;
            </code-block>

            <code-block lang="javascript" class="demo">
              {
                methods: {
                  scrollIntoView: (query) => {
                    this.$refs.scrollViewContainer.scrollIntoView(query)
                  }
                }
              }
            </code-block>
          </div>
        </example-box>
      </div>
    </docs-component>
  </page-content>
</template>

<script>
  import TkContainer from '../../../../src/components/tkContainer/tkContainer'
  export default {
    data: function () {
      return {
        statusBar: {
          immersion: false,
          height: 16,
          show: true,
          color: '#607D8B'
        },
        status: 'error',
        scrollTop: 0,
        num: 0,
        perPage: 20
      }
    },
    methods: {
      loadingMore: function (page, next) {
        setTimeout(() => {
          this.num = (page + 1) * this.perPage
          if (page >= 5) {
            next('complete')
          } else {
            next('+1')
          }
        }, 1000)
      },
      refresh: function () {
        this.status = 'loading'
        setTimeout(() => {
          this.status = 'empty'
        }, 1000)
      },
      scrollIntoView: function (query) {
        this.$refs.scrollViewContainer.scrollIntoView(query)
      },
      scrollHandler: function (scrollTop) {
        this.scrollTop = scrollTop
      },
      setScrollTop: function () {
        this.$refs.scrollContainer.scrollTo(this.scrollTop)
      }
    },
    components: {TkContainer}
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
  .block-container{
    height: 500px;
    width: 320px;
    border: 1px solid rgba(0,0,0,.12)
  }
  .container-wrap{
    background-color: rgba(0,0,0,.02)
  }
  .header{
    background-color: #00BCD4;
    color: white;
    height: 56px;
    line-height: 56px;
    padding-left: 16px;
    font-size: 18px;
  }
  .footer{
    height: 48px;
    border-top: 1px solid rgba(0,0,0,.12);
    padding-left: 16px;
    padding-right: 16px;
    background-color: white;
  }
  .input-wrap{
    width: 300px;
    max-width: 75%;
    margin-bottom: 32px;
  }
  .title{
    color: rgba(0,0,0,.54);
    font-size: 20px;
    margin: 16px;
  }
  .cover,.body-cover{
    position: absolute;
    width: 100%;
    height:100%;
    color: white;
    font-size: 20px;
  }
  .cover{
    background-color:rgb(186, 137, 14);
    text-align:center;
    padding-top: 16px;
  }
  .body-cover{
    background-color: rgb(14, 100, 186);
    display:flex;
    align-items: center;
    justify-content: center;
  }
</style>
