<template xmlns="http://www.w3.org/1999/html" xmlns="http://www.w3.org/1999/html">
  <page-content page-title="获取城市信息">
    <docs-component>
      <div slot="description">
        <h2>获取城市信息</h2>
        <p>根据传入的id获取城市的信息</p>
      </div>
      <div slot="api">
        <api-table name="methods">
          <code-block lang="js">
            // 根据区域id获取区域名
            this.$tkRegions.getName()
            //根据区域id获取区域全名
            this.$tkRegions.getFullName()
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
                <md-table-cell>getName</md-table-cell>
                <md-table-cell>区域id</md-table-cell>
                <md-table-cell>根据区域id获取区域名</md-table-cell>
              </md-table-row>
              <md-table-row>
                <md-table-cell>getFullName</md-table-cell>
                <md-table-cell>区域id</md-table-cell>
                <md-table-cell>根据区域id获取区域全名</md-table-cell>
              </md-table-row>
            </md-table-body>
          </md-table>
        </api-table>
      </div>
      <div slot="example">
        <example-box card-title="获取城市信息">
          <div slot="demo">
            <div class="container">
              <form novalidate>
                <md-input-container>
                  <label>获取信息</label>
                  <md-input placeholder="输入id" v-model="areaId" ></md-input>
                </md-input-container>
              </form>
              <div class="desc">
                <p>{{name ? name : '当前区域名为'}}</p>
                <p>{{fullName ? fullName : '当前区域全名为'}}</p>
              </div>
              <div class="area">
                <div class="area_list" v-for = 'item in son'>
                  {{item.name}}
                </div>
              </div>
            </div>
          </div>
          <div slot="code">
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
        areaId: '',
        name: '',
        fullName: '',
        son: {}
      }
    },
    watch: {
      areaId: function () {
        this.name = this.$tkRegions.getName(this.areaId)
        this.fullName = this.$tkRegions.getFullName(this.areaId)
        this.son = this.$tkRegions.getSon(this.areaId)
      }
    }
  }
</script>

<style scoped rel="stylesheet/scss" lang="scss">
  .container {
    width: 100%;
    padding: 0 0 50px 0;

    .header {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      margin: 0 auto;
    }

    .btns {
      display: flex;
      justify-content: center;
      margin-top: 20px;

      .btn {
        width:150px;
        height:40px;
        text-align:center;
        line-height:40px;
        margin-right: 10px;
      }
    }
  }
</style>
