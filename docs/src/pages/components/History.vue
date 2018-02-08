<template>
  <page-content page-title="组件 - history">
    <docs-component>
      <div slot="description">
        <p>封装了keep-alive与vue-router，在页面后退时，清除对应的页面缓存，模拟原生app页面逻辑</p>
      </div>

      <div slot="api">
        <api-table name="TkHistory">
          <code-block lang="javascript">
            import VueTk from 'vue-tk'
            import router from '路由目录'

            // 必须执行初始化方法
            VueTk.history.init(router, options[可选])

            // options示例
            {
              // 页面动画模式， auto（默认) pc不使用动画，手机使用动画
              //                none 不使用动画
              //                always 总是使用动画
              transtionMode: 'auto'
            }
          </code-block>

          <code-block lang="javascript">
            // 单独引用
            import Vue from 'vue'
            import TkHistory from 'vue-tk/dist/components/tkHistory'
            Vue.use(TkHistory)
          </code-block>

          <code-block lang="javascript">
            // 路由跳转
            this.$push()      // 等同vue-router push方法
            this.$replace()   // 等同vue-router push方法
            this.$back()      // 后退操作，可以传递参数代表后退到特定历史纪录中
          </code-block>
        </api-table>
      </div>

      <div slot="example">
        <example-box card-title="路由示例">
          <div slot="demo">
            <div class="block-container" ref="container">
              <tk-flex center>
                <div class="block-container">
                  <transition
                    v-on:before-enter="$tkHistory.beforeEnter"
                    v-on:before-leave="$tkHistory.beforeLeave"
                    v-on:enter="$tkHistory.enter"
                    v-on:leave="$tkHistory.leave"
                    v-bind:css="false"
                  >
                    <tk-history>
                      <router-view></router-view>
                    </tk-history>
                  </transition>
                </div>
              </tk-flex>
            </div>
          </div>
          <div slot="code">
            <code-block lang="xml" class="demo">
              &lt;transition
              v-on:before-enter=&quot;$tkHistory.beforeEnter&quot;
              v-on:before-leave=&quot;$tkHistory.beforeLeave&quot;
              v-on:enter=&quot;$tkHistory.enter&quot;
              v-on:leave=&quot;$tkHistory.leave&quot;
              v-bind:css=&quot;false&quot;
              &gt;
              &lt;tk-history&gt;
              &lt;router-view&gt;&lt;/router-view&gt;
              &lt;/tk-history&gt;
              &lt;/transition&gt;
            </code-block>
          </div>
        </example-box>
      </div>
    </docs-component>
  </page-content>
</template>

<script>
  export default {
    created () {
      this.$tkHistory.init(this.$router, {
        transtionMode: 'always'
      })
      this.$tkHistory.historyRecord.unshift(this.$route.fullPath)
    }
  }
</script>

<style scoped>
  .block-container{
    height: 500px;
    width: 320px;
    border: 1px solid rgba(0,0,0,.12);
    margin-left: auto;
    margin-right: auto;
    overflow: hidden;
    position: relative;
  }
  .block-container>*{
    background-color: rgba(0,0,0,.02)
  }
  .test {
    width: 100px;
    height: 100px;
    background-color: red;
  }
</style>
