<template>
  <page-content page-title="方法 - ua">
    <docs-component>
      <div slot="description">
        <p>获取当前设备信息</p>
      </div>

      <div slot="api">
        <api-table name="单独引用">
          <code-block lang="javascript">
            // 单独引用
            import Vue from 'vue'
            import tkUa from 'vue-tk/dist/utils/tkUa'
            Vue.use(tkUa)
          </code-block>
        </api-table>

        <api-table name="使用方法">
          <code-block lang="javascript" :tidy="false">
            // 组件中使用
            this.$tkUa.isServer

            // 不在组件中使用:
            import {tkUa} from 'vue-tk'
            tkUa.isServer

            // 在服务器端使用需要设置ua参数
            tkUa.ua = req.headers['user-agent']   //以nuxt示例

            // 或者
            import VueTk from 'vue-tk'
            VueTk.tkUa.ua = req.headers['user-agent']
          </code-block>
        </api-table>
      </div>
      <div slot="example">
        <example-box card-title="当前设备信息">
          <div slot="demo">
            <md-table>
              <md-table-header>
                <md-table-row>
                  <md-table-head>name</md-table-head>
                  <md-table-head>value</md-table-head>
                  <md-table-head>说明</md-table-head>
                </md-table-row>
              </md-table-header>

              <md-table-body>
                <md-table-row>
                  <md-table-cell>isServer</md-table-cell>
                  <md-table-cell><b>{{$tkUa.isServer}}</b></md-table-cell>
                  <md-table-cell>是否运行在服务器端</md-table-cell>
                </md-table-row>
                <md-table-row>
                  <md-table-cell>isClient</md-table-cell>
                  <md-table-cell><b>{{$tkUa.isClient}}</b></md-table-cell>
                  <md-table-cell>是否运行在浏览器端</md-table-cell>
                </md-table-row>
                <md-table-row>
                  <md-table-cell>isPlus</md-table-cell>
                  <md-table-cell><b>{{$tkUa.isPlus}}</b></md-table-cell>
                  <md-table-cell>是否运行于 html5 plus环境</md-table-cell>
                </md-table-row>
                <md-table-row>
                  <md-table-cell>isAndorid</md-table-cell>
                  <md-table-cell><b>{{$tkUa.isAndorid}}</b></md-table-cell>
                  <md-table-cell>是否运行于安卓设备</md-table-cell>
                </md-table-row>
                <md-table-row>
                  <md-table-cell>isIos</md-table-cell>
                  <md-table-cell><b>{{$tkUa.isIos}}</b></md-table-cell>
                  <md-table-cell>是否运行于苹果设备</md-table-cell>
                </md-table-row>
                <md-table-row>
                  <md-table-cell>isWechat</md-table-cell>
                  <md-table-cell><b>{{$tkUa.isWechat}}</b></md-table-cell>
                  <md-table-cell>是否运行于微信内置浏览器</md-table-cell>
                </md-table-row>
                <md-table-row>
                  <md-table-cell>isMobile</md-table-cell>
                  <md-table-cell><b>{{$tkUa.isMobile}}</b></md-table-cell>
                  <md-table-cell>是否运行于移动端</md-table-cell>
                </md-table-row>
                <md-table-row>
                  <md-table-cell>isDeskTop</md-table-cell>
                  <md-table-cell><b>{{$tkUa.isDeskTop}}</b></md-table-cell>
                  <md-table-cell>是否运行于桌面端</md-table-cell>
                </md-table-row>
              </md-table-body>
            </md-table>
          </div>
        </example-box>
      </div>
    </docs-component>
  </page-content>
</template>

<script>
  export default {}
</script>

<style scoped>
  .field-group{
    display:flex;
    align-items: center;
  }
  .field-group>*{
    margin:0 16px;
  }
</style>
