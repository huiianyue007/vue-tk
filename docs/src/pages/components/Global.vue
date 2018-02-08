<template>
  <page-content page-title="组件 - Global">
    <docs-component>
      <div slot="description">
        <p>全局组件容器</p>
        <p>将其他组件放在这个组件中，会自动注册到全局，目标使用方式是将global组件放到项目根组件中，然后把需要全局使用的组件，注入到global组件中，就可以在全局的任何地方调用。</p>
      </div>
      <div slot="api">
        <api-table name="TkBox">
          <code-block lang="javascript">
            // 单独引用
            import Vue from 'vue'
            import tkGlobal from 'vue-tk/dist/components/tkGlobal'
            Vue.use(tkGlobal)
          </code-block>

          <code-block lang="javascript">
            // 组件列表示例
            import A from '...'

            components: [
              {
                name: 'a',    // 调用时的名字，默认情况下 $tkGlobal.a 会指向该组件对象
                component: A, // 组件对象
                props: {}     // 组件props对象，默认情况下使用 $tkGlobalProps.a 来访问
              },
              {
                name: 'toast',
                component: 'tk-toast' // 已经全局注册的组件，可以直接传组件名
              }
            ]

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
                <md-table-cell>components</md-table-cell>
                <md-table-cell><code>Array</code></md-table-cell>
                <md-table-cell>组件列表，参考上方代码示例</md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>name</md-table-cell>
                <md-table-cell><code>String</code></md-table-cell>
                <md-table-cell>注册到全局的名字，默认为$tkGlobal</md-table-cell>
              </md-table-row>
            </md-table-body>
          </md-table>
        </api-table>
      </div>

      <div slot="example">
        <example-box card-title="全局组件">
          <div slot="demo">
            <div class="toast-container">
              <tk-global :components="components"></tk-global>
              <md-button @click="add">添加一条toast</md-button>
            </div>
          </div>
          <div slot="code">
            <code-block lang="xml" class="demo">
              &lt;tk-global :components=&quot;components&quot;&gt;&lt;/tk-global&gt;
              &lt;md-button @click=&quot;add&quot;&gt;添加一条toast&lt;/md-button&gt;
            </code-block>
            <code-block lang="javascript">
              data () {
                return {
                  components: [
                    {
                      name: 'toast',
                      component: 'tk-toast'
                    }
                  ]
                }
              },
              methods: {
                add () {
                  this.$tkGlobal.toast.add('这是一条toast')
                }
              }
            </code-block>
          </div>
        </example-box>

        <example-box card-title="控制props">
          <div slot="demo">
            <div class="block-container">
              <md-input-container>
                <label for="type">类型</label>
                <md-select id="type" v-model="type">
                  <md-option value="moon">moon</md-option>
                  <md-option value="beat">beat</md-option>
                  <md-option value="square">square</md-option>
                  <md-option value="ring">ring</md-option>
                </md-select>
              </md-input-container>
              <md-switch v-model="checked">loading状态</md-switch>
              <div class="loading-wrap">
                <tk-global :components="components2" name="$tkGlobal2"></tk-global>
              </div>
            </div>
          </div>
          <div slot="code">
            <code-block lang="xml" class="demo">
              &lt;md-input-container&gt;
              &lt;label for=&quot;type&quot;&gt;类型&lt;/label&gt;
              &lt;md-select id=&quot;type&quot; v-model=&quot;type&quot;&gt;
              &lt;md-option value=&quot;moon&quot;&gt;moon&lt;/md-option&gt;
              &lt;md-option value=&quot;beat&quot;&gt;beat&lt;/md-option&gt;
              &lt;md-option value=&quot;square&quot;&gt;square&lt;/md-option&gt;
              &lt;md-option value=&quot;ring&quot;&gt;ring&lt;/md-option&gt;
              &lt;/md-select&gt;
              &lt;/md-input-container&gt;
              &lt;md-switch v-model=&quot;checked&quot;&gt;loading状态&lt;/md-switch&gt;
              &lt;div class=&quot;loading-wrap&quot;&gt;
              &lt;tk-global :components=&quot;components2&quot; name=&quot;$tkGlobal2&quot;&gt;&lt;/tk-global&gt;
              &lt;/div&gt;
            </code-block>
            <code-block lang="javascript">
              data () {
                return {
                  checked: true,
                  type: 'moon',
                  components: [
                    {
                      name: 'loading',
                      component: 'tk-loading',
                      props: {
                        type: 'moon',
                        complete: false
                      }
                    }
                  ]
                }
              },
              watch: {
                checked () {
                  this.$tkGlobal2Props.loading.complete = !this.checked
                },
                type () {
                  this.$tkGlobal2Props.loading.type = this.type
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
  export default {
    data () {
      return {
        checked: true,
        type: 'moon',
        components: [
          {
            name: 'toast',
            component: 'tk-toast'
          }
        ],
        components2: [
          {
            name: 'loading',
            component: 'tk-loading',
            props: {
              type: 'moon',
              complete: false
            }
          }
        ]
      }
    },
    watch: {
      checked () {
        this.$tkGlobal2Props.loading.complete = !this.checked
      },
      type () {
        this.$tkGlobal2Props.loading.type = this.type
      }
    },
    methods: {
      add () {
        this.$tkGlobal.toast.add('这是一条toast')
      }
    }
  }
</script>

<style scoped>
  .toast-container, .loading-wrap{
    position: relative;
    height: 260px;
  }
</style>
