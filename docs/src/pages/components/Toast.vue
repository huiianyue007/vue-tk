<template>
  <page-content page-title="组件 - Toast">
    <docs-component>
      <div slot="description">
        <p>移动端常用的短消息提示</p>
      </div>
      <div slot="api">
        <api-table name="TkBox">
          <code-block lang="javascript">
            // 单独引用
            import Vue from 'vue'
            import TkToast from 'vue-tk/dist/components/tkToast'
            Vue.use(TkToast)
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
                <md-table-cell>add</md-table-cell>
                <md-table-cell>message<code>string</code></md-table-cell>
                <md-table-cell>添加一条toast</md-table-cell>
              </md-table-row>
            </md-table-body>
          </md-table>
        </api-table>
      </div>

      <div slot="example">
        <example-box card-title="常用比例">
          <div slot="demo">
            <div class="toast-container">
              <tk-toast ref="toast"></tk-toast>
              <md-button @click="add">添加一条toast</md-button>
            </div>
          </div>
          <div slot="code">
            <code-block lang="xml" class="demo">
              &lt;tk-toast ref=&quot;toast&quot;&gt;&lt;/tk-toast&gt;
              &lt;md-button @click=&quot;add&quot;&gt;添加一条toast&lt;/md-button&gt;
            </code-block>
            <code-block lang="javascript">
              add () {
              this.$refs.toast.add('这是一条toast')
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
    methods: {
      add () {
        this.$refs.toast.add('这是一条toast')
      }
    }
  }
</script>

<style scoped>
  .toast-container{
    position: relative;
    height: 260px;
  }
</style>
