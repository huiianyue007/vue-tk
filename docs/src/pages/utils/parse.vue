<template>
  <page-content page-title="方法 - parse">
    <docs-component>
      <div slot="description">
        <p>parse工具类，简化parse server api的用法</p>
        <p><b>目标功能</b></p>
        <ol>
          <li>自动转换数据类型（已完成）</li>
          <li>用户登录后自动添加sessionToken</li>
          <li>自动处理sessionToken</li>
          <li>自动设置ACL</li>
          <li>自动验证表单数据</li>
        </ol>
      </div>

      <div slot="api">
        <api-table name="单独引用">
          <code-block lang="javascript">
            // 单独引用
            import Vue from 'vue'
            import tkParse from 'vue-tk/dist/utils/tkParse'
            Vue.use(tkParse)
          </code-block>
        </api-table>

        <api-table name="使用方法">
          <code-block lang="javascript" :tidy="false">
            //初始化
            this.$tkParse.init({
              appId: appId,
              restKey: restKey,           // 可选
              masterKey: masterKey,       // 可选
              sessionToken: sessionToken, // 可选
              baseURL: baseURL,
              model: model
            })

            // 单独设置 sessionToken
            this.$tkParse.setSessionToken(sessionToken)
          </code-block>
        </api-table>
      </div>
      <!--<div slot="example">-->
        <!--<example-box card-title="配置">-->
          <!--<div slot="demo">-->
            <!--<md-input-container>-->
              <!--<label for="applicationId">applicationId</label>-->
              <!--<md-input v-model="applicationId"></md-input>-->
            <!--</md-input-container>-->
            <!--<md-input-container>-->
              <!--<label for="restKey">restKey</label>-->
              <!--<md-input v-model="restKey"></md-input>-->
            <!--</md-input-container>-->

            <!--<md-input-container>-->
              <!--<label for="masterKey">masterKey</label>-->
              <!--<md-input v-model="masterKey"></md-input>-->
            <!--</md-input-container>-->
          <!--</div>-->
        <!--</example-box>-->

        <!--<example-box card-title="bmob">-->
          <!--<div slot="demo">-->
            <!--<tk-flex class="method-wrap">-->
              <!--<md-input-container class="tk-grid-3">-->
                <!--<label for="method">请求方法</label>-->
                <!--<md-select name="method" id="method" v-model="method">-->
                  <!--<md-option :value="item" v-for="item,index in methods" :key="index">{{item}}</md-option>-->
                <!--</md-select>-->
              <!--</md-input-container>-->
              <!--<md-input-container class="fill">-->
                <!--<label>链接</label>-->
                <!--<md-input v-model="url"></md-input>-->
              <!--</md-input-container>-->
              <!--<div>-->
                <!--<md-button class="md-raised md-primary" @click.native="send">执行</md-button>-->
              <!--</div>-->
            <!--</tk-flex>-->
            <!--<md-tabs class="md-transparent example-tabs">-->
              <!--<md-tab id="data" md-label="DATA">-->
                <!--<div class="field-group" v-for="(item, index) in data">-->
                  <!--<md-input-container>-->
                    <!--<label>name</label>-->
                    <!--<md-input v-model="item.name"></md-input>-->
                  <!--</md-input-container>-->
                  <!--<md-input-container>-->
                    <!--<label>value</label>-->
                    <!--<md-input v-model="item.value"></md-input>-->
                  <!--</md-input-container>-->
                  <!--<md-button class="md-icon-button md-dense" @click.native="deleteData(index)">-->
                    <!--<tk-icon>close</tk-icon>-->
                  <!--</md-button>-->
                <!--</div>-->
              <!--</md-tab>-->
              <!--<md-tab id="where" md-label="WHERE">-->
                <!--<div class="field-group" v-for="(item, index) in where">-->
                  <!--<md-input-container>-->
                    <!--<label>name</label>-->
                    <!--<md-input v-model="item.name"></md-input>-->
                  <!--</md-input-container>-->
                  <!--<md-input-container>-->
                    <!--<label>value</label>-->
                    <!--<md-input v-model="item.value"></md-input>-->
                  <!--</md-input-container>-->
                  <!--<md-button class="md-icon-button md-dense" @click.native="deleteWhere(index)">-->
                    <!--<tk-icon>close</tk-icon>-->
                  <!--</md-button>-->
                <!--</div>-->
              <!--</md-tab>-->
              <!--<md-tab id="headers" md-label="HEADERS">-->
                <!--<div class="field-group" v-for="(item, index) in headers">-->
                  <!--<md-input-container>-->
                    <!--<label>name</label>-->
                    <!--<md-input v-model="item.name"></md-input>-->
                  <!--</md-input-container>-->
                  <!--<md-input-container>-->
                    <!--<label>value</label>-->
                    <!--<md-input v-model="item.value"></md-input>-->
                  <!--</md-input-container>-->
                  <!--<md-button class="md-icon-button md-dense" @click.native="deleteHeader(index)">-->
                    <!--<tk-icon>close</tk-icon>-->
                  <!--</md-button>-->
                <!--</div>-->
              <!--</md-tab>-->
            <!--</md-tabs>-->
          <!--</div>-->
        <!--</example-box>-->

        <!--<api-table name="实时代码">-->
          <!--<code-block lang="javascript">-->
            <!--this.$tkBmob.{{method | toLowerCase}}('{{urlCode}}'{{dataCode}}{{configCode}}).then(function (response) {-->
            <!--//处理ajax获取的数据-->
            <!--})-->
            <!--.catch(function (error) {-->
            <!--//ajax失败，进行错误处理-->
            <!--})-->
          <!--</code-block>-->
        <!--</api-table>-->

        <!--<api-table :name="'ajax请求结果参数说明：' + resultType" v-if="resultType">-->
          <!--<code-block lang="javascript" v-if="resultType === 'success'">-->
            <!--// success 返回参数说明-->
            <!--{-->
            <!--data: object|string, //ajax请求获取到的数据,-->
            <!--status: int, //ajax请求响应状态码，为0代表未能发出请求，通常为网络问题-->
            <!--statusText: string, //ajax响应状态信息，可能为undefined-->
              <!--headers: {}, //ajax响应头-->
              <!--config: {}, //本次请求的配置参数-->
              <!--request: {} //本次ajax的实际请求对象，nodejs环境下为 ClientRequest 实例，浏览器环境下为 XMLHttpRequest 实例-->
            <!--}-->
          <!--</code-block>-->
          <!--<code-block lang="javascript" v-else>-->
            <!--// error 返回参数说明-->
            <!--{-->
              <!--message: string, //请求错误信息-->
              <!--data: object|string, //ajax请求获取到的数据,-->
              <!--status: int, //ajax请求响应状态码，为0代表未能发出请求，通常为网络问题-->
              <!--statusText: string, //ajax响应状态信息，可能为undefined-->
              <!--headers: {}, //ajax响应头，可能为undefined-->
              <!--config: {}, //本次请求的配置参数-->
              <!--request: {} //本次ajax的实际请求对象，nodejs环境下为 ClientRequest 实例，浏览器环境下为 XMLHttpRequest 实例，可能为undefined-->
            <!--}-->
          <!--</code-block>-->
          <!--<code-block lang="javascript">-->
            <!--{{result | json}}-->
          <!--</code-block>-->
        <!--</api-table>-->
      <!--</div>-->
    </docs-component>
  </page-content>
</template>

<script>
  export default {
//    created () {
//      this.$tkParse.init({
//        appId: 'F332P5ZgwJr7cmS5PD3zcf45wKzZpPNbjYqKm2D2',
//        restKey: '5FWxukEAf74jT9EHgtss8HVQP7AY8acx7HAh6w8w',
//        baseURL: 'http://api.honghongche.com',
//        model: []
//      })
//      this.$tkParse.get('/classes/userTask', {
//        params: {
//          include: 'message, user',
//          where: {
//            user: '1F80QLHxHf',
//            message: '5vr4TAuOvA'
//          }
//        }
//      }).then((rs) => {
//        console.log(rs)
//      }).catch(e => {
//        console.log(e)
//      })
//    },
    data: function () {
      return {
        applicationId: '',
        restKey: '',
        masterKey: '',
        url: '',
        method: 'GET',
        methods: [
          'GET',
          'POST',
          'PUT',
          'DELETE'
        ],
        name: '',
        value: '',
        data: [
          {
            name: '',
            value: ''
          }
        ],
        where: [
          {
            name: '',
            value: ''
          }
        ],
        headers: [
          {
            name: '',
            value: ''
          }
        ],
        result: {},
        resultType: ''
      }
    },
    watch: {
      data: {
        handler: function () {
          this.autoAdd('data')
        },
        deep: true
      },
      headers: {
        handler: function () {
          this.autoAdd('headers')
        },
        deep: true
      },
      where: {
        handler: function () {
          this.autoAdd('where')
        },
        deep: true
      }
    },
    filters: {
      toLowerCase (val) {
        return val.toLowerCase()
      },
      json (val) {
        return JSON.stringify(val)
      }
    },
    computed: {
      needData: function () {
        return true
      },
      urlCode: function () {
        return this.url || 'url'
      },
      dataCode: function () {
        if (!this.needData) {
          return ''
        } else {
          let data = this.transData(this.data)
          let where = this.transData(this.where)
          data.where = where
          return ', ' + JSON.stringify(data)
        }
      },
      configCode: function () {
        let headers = this.transData(this.headers)
        return Object.keys(headers).length > 0 ? ', ' + JSON.stringify({headers: headers}) : ''
      }
    },
    methods: {
      transData (data) {
        let rs = {}
        for (let item of data) {
          if (item.name) {
            rs[item.name] = item.value
          }
        }
        return rs
      },
      autoAdd (name) {
        let length = this[name].length
        if (length > 0) {
          let lastItem = this[name][length - 1]
          if (lastItem.name || lastItem.value) {
            this[name].push({
              name: '',
              value: ''
            })
          }
        } else {
          this[name].push({
            name: '',
            value: ''
          })
        }
      },
      deleteHeader (index) {
        this.headers.splice(index, 1)
      },
      deleteData (index) {
        this.data.splice(index, 1)
      },
      deleteWhere (index) {
        this.where.splice(index, 1)
      },
      send () {
        let self = this
        this.$tkParse.init({
          appId: this.applicationId,
          restKey: this.restKey,
          masterKey: this.masterKey,
          models: {
            car: {
              user: 'pointer'
            }
          }
        })
        let data = this.transData(this.data)
        let where = this.transData(this.where)
        data.where = where
        this.$tkParse.request({
          url: this.url,
          method: this.method.toLowerCase(),
          data: data,
          headers: this.transData(this.headers)
        }).then(function (res) {
          self.result = res
          self.resultType = 'success'
        }).catch(function (err) {
          self.result = err
          self.resultType = 'error'
        })
      }
    }
  }
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
