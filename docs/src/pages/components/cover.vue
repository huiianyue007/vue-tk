<template>
  <page-content page-title="组件 - cover">
    <docs-component>
      <div slot="description">
        <p>在页面中显示一个全局遮罩</p>
        <p>如果希望只遮罩部分页面，需要在外层div中加上transform: translate3d(0, 0, 0)样式</p>
      </div>
      <div slot="api">
        <api-table name="TkCover">
          <code-block lang="javascript">
            // 单独引用
            import Vue from 'vue'
            import TkCover from 'vue-tk/dist/components/tkCover'
            Vue.use(TkCover)
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
                <md-table-cell>show</md-table-cell>
                <md-table-cell><code>Bool</code></md-table-cell>
                <md-table-cell>是否显示</md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>color</md-table-cell>
                <md-table-cell><code>String</code></md-table-cell>
                <md-table-cell>颜色，默认值<code>rgba(0,0,0,.54)</code></md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>hideOnClick</md-table-cell>
                <md-table-cell><code>Bool</code></md-table-cell>
                <md-table-cell>点击遮罩是否自动关闭，默认值<code>true</code></md-table-cell>
              </md-table-row>
              <md-table-row>
                <md-table-cell>transition</md-table-cell>
                <md-table-cell><code>Bool</code></md-table-cell>
                <md-table-cell>是否使用动画，默认<code>false</code></md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>through</md-table-cell>
                <md-table-cell><code>Bool</code></md-table-cell>
                <md-table-cell>点击是否可以穿透遮罩层,默认值<code>false</code></md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>center</md-table-cell>
                <md-table-cell><code>Bool</code></md-table-cell>
                <md-table-cell>水平居中,默认值<code>true</code></md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>left</md-table-cell>
                <md-table-cell><code>Bool</code></md-table-cell>
                <md-table-cell>水平居左,默认值<code>false</code></md-table-cell>
              </md-table-row>
              <md-table-row>
                <md-table-cell>right</md-table-cell>
                <md-table-cell><code>Bool</code></md-table-cell>
                <md-table-cell>水平居右,默认值<code>false</code></md-table-cell>
              </md-table-row>
              <md-table-row>
                <md-table-cell>middle</md-table-cell>
                <md-table-cell><code>Bool</code></md-table-cell>
                <md-table-cell>垂直居中,默认值<code>true</code></md-table-cell>
              </md-table-row>
              <md-table-row>
                <md-table-cell>top</md-table-cell>
                <md-table-cell><code>Bool</code></md-table-cell>
                <md-table-cell>垂直居上,默认值<code>false</code></md-table-cell>
              </md-table-row>
              <md-table-row>
                <md-table-cell>bottom</md-table-cell>
                <md-table-cell><code>Bool</code></md-table-cell>
                <md-table-cell>垂直居下,默认值<code>false</code></md-table-cell>
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
            </md-table-header>
          </md-table>
        </api-table>
      </div>

      <div slot="example">
        <example-box card-title="遮罩">
          <div slot="demo">
            <div class="block-container" ref="container">
              <tk-cover :through="through" :show="show" :hideOnClick="hideOnClick" @change="changeCover" :transition = 'transition' :middle="middle" :top="top" :bottom="bottom" :left="left" :center="center" :right="right">
                <md-button @click.native="changeCover(false)" class="md-raised">close</md-button>
              </tk-cover>
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
              <md-checkbox name="hideOnClick" v-model="hideOnClick">hideOnClick</md-checkbox>
              <md-checkbox name="through" v-model="through">through</md-checkbox>
              <md-checkbox name="transition" v-model="transition">transition</md-checkbox>
              <md-button @click.native="changeCover(true)" class="md-raised">show</md-button>
            </div>
          </div>
          <div slot="code">
            <code-block lang="xml" class="demo">
              &lt;tk-cover :through=&quot;through&quot; :show=&quot;show&quot; :hideOnClick=&quot;hideOnClick&quot; :transition = &quot;transition&quot; @change=&quot;changeCover&quot; :middle=&quot;middle&quot; :top=&quot;top&quot; :bottom=&quot;bottom&quot; :left=&quot;left&quot; :center=&quot;center&quot; :right=&quot;right&quot;&gt;
                &lt;md-button @click.native=&quot;changeCover(false)&quot; class=&quot;md-raised&quot;&gt;close&lt;/md-button&gt;
              &lt;/tk-cover&gt;
            </code-block>
          </div>
        </example-box>
      </div>
    </docs-component>
  </page-content>
</template>

<script>
  import TkContainer from '../../../../src/components/tkContainer/tkContainer.vue'

  export default {
    components: {TkContainer},
    data: function () {
      return {
        through: false,
        show: false,
        hideOnClick: true,
        left: false,
        center: true,
        right: false,
        top: false,
        middle: true,
        bottom: false,
        transition: false,
        v: 'middle',
        r: 'center'
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
    methods: {
      changeCover: function (change) {
        this.show = change
      }
    }
  }
</script>

<style scoped>
  .block-container{
    height: 200px;
    overflow: auto;
    transform: translate3d(0, 0, 0);
  }
</style>
