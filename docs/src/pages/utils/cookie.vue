<template>
  <page-content page-title="方法 - cookie">
    <docs-component>
      <div slot="description">
        <p>浏览器端cookie管理工具</p>
      </div>

      <div slot="api">
        <api-table name="单独引用">
          <code-block lang="javascript">
            // 单独引用
            import Vue from 'vue'
            import tkCookie from 'vue-tk/dist/utils/tkCookie'
            Vue.use(tkCookie)
          </code-block>
        </api-table>

        <api-table name="使用方法">
          <code-block lang="javascript" :tidy="false">
            //组件中使用
            this.$tkCookie

            //不在组件中使用:
            import {tkCookie} from 'vue-tk'

            //使用方法
            this.$tkCookie.list()           //获取所有cookie
            this.$tkCookie.get(name)        //获取一个名为name的cookie
            this.$tkCookie.set(name, value) //设置一个名为name的cookie的值
            this.$tkCookie.delete(name)     //删除一个名为name的cookie
            this.$tkCookie.keys()           //获取所有cookie的name
          </code-block>
        </api-table>
      </div>
      <div slot="example">
        <example-box card-title="当前页面的cookie">
          <div slot="demo">
            <div class="field-group" v-for="(item, index) in cookie">
              <md-input-container>
                <label>name</label>
                <md-input v-model="item.name"></md-input>
              </md-input-container>
              <md-input-container>
                <label>value</label>
                <md-input v-model="item.value"></md-input>
              </md-input-container>
              <md-button class="md-icon-button md-dense" @click.native="remove(index)">
                <tk-icon>close</tk-icon>
              </md-button>
            </div>
          </div>
        </example-box>
      </div>
    </docs-component>
  </page-content>
</template>

<script>
  export default {
    data: function () {
      let cookies = this.$tkCookie.list()
      let cookieData = []
      if (cookies) {
        for (let name in cookies) {
          cookieData.push({
            name: name,
            value: cookies[name]
          })
        }
      }
      cookieData.push({
        name: '',
        value: ''
      })
      return {
        cookie: cookieData
      }
    },
    watch: {
      cookie: {
        handler: function () {
          this.asyc()
          this.autoAdd()
        },
        deep: true
      }
    },
    computed: {
    },
    methods: {
      remove (index) {
        this.cookie.splice(index, 1)
      },
      autoAdd () {
        let length = this.cookie.length
        if (length > 0) {
          let lastItem = this.cookie[length - 1]
          if (lastItem.name || lastItem.value) {
            this.cookie.push({
              name: '',
              value: ''
            })
          }
        } else {
          this.cookie.push({
            name: '',
            value: ''
          })
        }
      },
      asyc () {
        this.$tkCookie.delete()
        let self = this
        this.cookie.forEach(function (item) {
          if (item.name) {
            self.$tkCookie.set(item.name, item.value)
          }
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
