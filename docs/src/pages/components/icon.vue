<template xmlns="http://www.w3.org/1999/html">
  <page-content page-title="组件 - 字体图标">
    <docs-component>
      <div slot="description">
        <p>material design icon 字体图标，也可以使用iconfont中的任意图标</p>
        <p>图标使用svg显示，兼容移动端的所有浏览器，桌面端ie9以上的所有浏览器，</p>
        <p>图标默认尺寸为width:24px;height:24px;</p>
      </div>

      <div slot="api">
        <api-table name="TkIcon">
          <code-block lang="javascript">
            // 单独引用
            import Vue from 'vue'
            import TkIcon from 'vue-tk/dist/components/tkIcon'
            Vue.use(TkIcon)
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
                <md-table-cell>type</md-table-cell>
                <md-table-cell><code>String</code></md-table-cell>
                <md-table-cell>使用的图标组类型，默认为<code>default</code></md-table-cell>
              </md-table-row>
              <md-table-row>
                <md-table-cell>mode</md-table-cell>
                <md-table-cell><code>String</code></md-table-cell>
                <md-table-cell>默认图标风格，可选<code>material</code>,<code>ios</code></md-table-cell>
              </md-table-row>
            </md-table-body>
          </md-table>
        </api-table>
      </div>

      <div slot="api">
        <api-table name="$tkIcon">
          <code-block lang="javascript">
            // $tkIcon用来设置使用到的iconfont图标库
            // 在引入TkIcon后就可以在全局访问 Vue.$tkIcon
            // 在组件中可以直接使用 this.$tkIcon 访问

            Vue.$tkIcon.set({
              default: {
                //开发时code与data必须设置其中一项，发布时必须设置data
                code: 3540, //iconfont 图标库id
                data: json数据,//本页面浏览图标库，点击"获取json"按钮获取
                type: 'public' //可选值public,private
              },
              custom: {
                code: 450,
                type: 'private', //代表私有项目,
                useClassAsName: true  //使用图标的类名来代替自身的名称，私有图标库的名称往往很难统一，class可以更改为统一的名称方便使用
              }
            })
            // 设置全局默认图标风格，可选 common,material,ios
            Vue.$tkIcon.setMode('material')
          </code-block>
          <code-block lang="html">
            &lt;!-- 使用图标,default类的图标可以不传type --&gt;
            &lt;tk-icon type=&quot;default&quot;&gt;...&lt;/tk-icon&gt;
            &lt;tk-icon type=&quot;custom&quot;&gt;...&lt;/tk-icon&gt;
          </code-block>
          <h3 class="md-title">使用私有图标的方法</h3>
          <p>私有类型的图标必须设置ctoken和EGG_SESS才能使用，获取方法如下</p>
          <p>打开iconfont官网，并登录</p>
          <p>使用例如<b>edit this cookie</b>一类的工具查看cookie，并复制下ctoken和EGG_SESS的值</p>
          <p>在<b>设置图标库之前</b>,设置ctoken和EGG_SESS</p>
          <code-block lang="javascript">
            Vue.$tkIcon.setCtoken(ctoken, EGG_SESS)
          </code-block>
        </api-table>
      </div>

      <div slot="example">
        <example-box card-title="字体图标">
          <div slot="demo">
            <div class="example-wrap" ref="container">
              <tk-icon>return</tk-icon>
              <tk-icon>next</tk-icon>
              <tk-icon>up</tk-icon>
              <tk-icon>down</tk-icon>
            </div>
          </div>
          <div slot="code">
            <code-block lang="xml" class="demo">
              &lt;tk-icon&gt;return&lt;/tk-icon&gt;
              &lt;tk-icon&gt;next&lt;/tk-icon&gt;
              &lt;tk-icon&gt;up&lt;/tk-icon&gt;
              &lt;tk-icon&gt;down&lt;/tk-icon&gt;
            </code-block>
          </div>
        </example-box>
      </div>

      <div slot="example">
        <example-box card-title="设置iconfont">
          <div slot="demo">
            <div class="example-wrap" ref="container">
              <div class="history-box" v-if="history.length > 0">
                <div class="history-title">历史记录</div>
                <md-chip class="history-item" md-deletable v-for="(i, index) in history" @delete="deleteHistory(index)" :key="index"><span @click="setHistory(i)">{{i.name}}</span></md-chip>
              </div>
              <md-tabs @change="tapChange">
                <md-tab id="public" md-label="开放图标库" :md-active="tap === 'public'">
                  <md-input-container>
                    <label>id</label>
                    <md-input v-model="iconfontId"></md-input>
                  </md-input-container>
                  <div class="actions">
                    <md-button class="md-raised md-primary" @click.native="publicIconInit">确定</md-button>
                  </div>
                </md-tab>

                <md-tab id="private" md-label="私有项目" :md-active="tap === 'private'">
                  <md-checkbox name="my-test1" value="true" disabled>使用class作为图标名</md-checkbox>
                  <md-input-container>
                    <label>id</label>
                    <md-input v-model="iconfontId"></md-input>
                  </md-input-container>
                  <md-input-container>
                    <label>ctoken</label>
                    <md-input v-model="ctoken"></md-input>
                  </md-input-container>
                  <md-input-container>
                    <label>EGG_SESS</label>
                    <md-input v-model="EGG_SESS"></md-input>
                  </md-input-container>
                  <div class="actions">
                    <md-button class="md-raised md-primary" @click.native="privateIconInit">确定</md-button>
                  </div>
                </md-tab>
              </md-tabs>
            </div>
          </div>
        </example-box>
      </div>
      <div slot="example">
        <md-card class="icon-search" :style="searchStyle">
          <div v-if="showIconfont" >
            <tk-loading v-if="onDownload"></tk-loading>
            <div v-else-if="failed">
              <h2>图标下载失败</h2>
            </div>
            <div v-else>
              <tk-sticky :top="0" class="sticky-search-bar">
                <tk-flex middle>
                  <div class="md-title fill">{{iconfontName}}</div>
                  <md-button class="md-raised" @click.native="reset">还原默认图标库</md-button>
                  <md-button id="get-json" class="md-raised md-primary" @click.native="getJson">获取json数据</md-button>

                  <md-dialog md-open-from="#get-json" md-close-to="#get-json" ref="json">
                    <md-dialog-title>复制下面的数据</md-dialog-title>

                    <md-dialog-content>
                      <textarea rows="10" class="json-text">{{json}}</textarea>
                    </md-dialog-content>

                    <md-dialog-actions>
                      <md-button class="md-primary" @click.native="closeDialog('json')">关闭</md-button>
                    </md-dialog-actions>
                  </md-dialog>

                </tk-flex>
                <md-input-container>
                  <label>输入名称搜索</label>
                  <md-input v-model="keyword"></md-input>
                </md-input-container>
              </tk-sticky>
              <div class="icon-list">
                <div class="group-body">
                  <div class="icon-item" v-for="icon,name in icons">
                    <tk-icon type="icon">{{name}}</tk-icon>
                    <div class="icon-name">{{name}}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div v-else>
            <tk-sticky class="sticky-search-bar">
              <md-layout md-gutter>
                <md-layout>
                  <md-button-toggle md-single class="md-primary">
                    <md-button class="md-toggle" @click.native="setStyle('common')">COMMON</md-button>
                    <md-button  @click.native="setStyle('material')">MATERIAL</md-button>
                    <md-button  @click.native="setStyle('ios')">IOS</md-button>
                  </md-button-toggle>
                </md-layout>
                <md-layout md-align="end" v-if="style === 'ios'">
                  <md-button class="md-icon-button md-raised md-accent" @click.native="refreshIos" :disabled="iosOnDownload"><tk-icon :spin="iosOnDownload" mode="material">autorenew</tk-icon></md-button>
                </md-layout>
              </md-layout>
              <md-input-container>
                <label>输入名称搜索</label>
                <md-input v-model="keyword"></md-input>
              </md-input-container>
            </tk-sticky>
            <div class="icon-list" v-if="style === 'common'">
              <div class="group-body">
                <div class="icon-item" v-for="icon in common">
                  <tk-icon>{{icon}}</tk-icon>
                  <div class="icon-name">{{icon}}</div>
                </div>
              </div>
            </div>
            <div class="icon-list" v-else>
              <div class="icon-group" v-for="(group, name) in groups">
                <div class="group-name">{{name}}</div>
                <div class="group-body">
                  <div class="icon-item" v-for="icon in group">
                    <tk-icon v-if="style === 'material'" mode="material">{{icon}}</tk-icon>
                    <tk-icon v-else-if="iosOnDownload"></tk-icon>
                    <tk-icon v-else-if="isIosIconExist(icon)" type="customIos">{{icon}}</tk-icon>
                    <tk-icon v-else class="none" mode="material">{{icon}}</tk-icon>
                    <div class="icon-name">{{icon}}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </md-card>
      </div>
    </docs-component>
  </page-content>
</template>

<script>
  import common from '../../../../src/components/tkIcon/common.json'
  import groups from '../../../../src/components/tkIcon/groups.json'
  let iosCtoken = 'iUNx1xnUMOsDSUIVo7rpicon-font'
  let iosEgg = 'eLkKa0rDXXPcLJKSKD9orX_BDeri6fQoyQCovDC6TNu8EH4tx-WAH02HRhAyokNNIOWvUVprT1KQ10wQir2ycMucl0IbKzlMKOsSaHAlfq4Vtpn0ShjkDqpPelcEnJC296tVVMpMF5erj42oZWu37ZRiiZf4zUhp7W-Gt2DzlgdLKSczIY4u_NSzamoxUMp2fCJBlOhhIscQpxa6S81XA_ebDIw9tDCPLinHdSFCNQRGRMY_96J2qPcJB6g6GyXH6uAdnPqF68TMf98PS8zL81dFFTdSF8wVFU5boyXwLHXJeS__d8KYhOjL52zltz1zGFePUIfY079K29pV_3rCGSpHYPf-DmqAReiyZxOaTFNyZt5Y0-KbdAa-QEHd0DGGXrP3bf-YTyY2KtY-qKTjqsVBK15o4bVuEmxqWgYHZsRSFewW3FTJmKCO4-tdMai_TCp4UH0eiF1gN6sdojNAkAzIXf8sw00f8B46V9p-XuNpWu1kKj66c8RYyFA7rLA1N_gyZdduprryLZr13JSAktTvYvKqLpkvg9AbXKwN0kOyqx98u-INAe-DfWC7ogmD51Bx690GBTEVh1O0BKSE7b07_b7Y7LL7TI3DnxU1phHiw_IG6fuIrr57urd0aLdUhnuj34IKHvA9QMwN_DH4p4zEv7jvcwRF_xUpffqxHEapi4oMMa8hFaEqTjDef0T2kKlkj3j0EvbFJ3R0O7DRT1K1eiYWsyTV813NG8Q-mZRC0VptmdxpRCfIpwgRMAlWAXdH4O-G1Reh-_nVxrvrXK43yn66TQ4uqYPXKynsXVknoKSsaM43W0McNzVO9wBMJOEPs9hr4aYcqFpSiV0qy6Vpy2lLtVUokuHIwppsCwS6g-lwkU9Hmt48M5SLFUZiC-15m4BaiCmaf-MSRMtWKpNKuYThb2D3vUNQvsBQZAhG0IHKbHiVgVlWFinhLxngvTKALClLcMwK_jIUpkv1vFThVGRnhmtlh_JwXFQsZIN3j8ppHaJFOKEdOxveWEU4Fd_kV15gmp63YoQZK2WYBdzM7TXyWKZW0R8QjJEE0SwI-Yc2XrMbiev-IZAHcJ67jna1AYnHZnCwgvHCk2dGUUCaR2LFaWFV9_ihMJRozo0JrWxu2UT-ul78wt2DA0tKP-JplXS9HiL3a7P3lhGVPNGpQfP38RyeHniBjXFufNsvbiHpjzyPwSujYsN9OR0qrq72Nk7chOnKJbqrJnNNXfqh-T9hfUTnifUKhKUtNqnA_8qsIbmV_oXUlS1VVjXY3dBK9CGHQXwpUCirUz1v3a5Ro02N6g-ig96-famykXNc_Usp1DDFCmB5e4-ReKYQK4kLIOkDM-m0aSXlfTFT3aHTC84_CD_Mq1ReN1Nsdlhzi--M17oye7qoaKvtLIjk'

  export default {
    data: function () {
      return {
        keyword: '',
        iconfontId: '',
        ctoken: '',
        EGG_SESS: '',
        showIconfont: false,
        history: [],
        tap: 'public',
        style: 'common'
      }
    },
    watch: {
      history: function () {
        window.localStorage.setItem('iconHistory', JSON.stringify(this.history))
      }
    },
    computed: {
      common: function () {
        if (this.keyword !== '') {
          let c = []
          for (let name in common) {
            if (name.indexOf(this.keyword) >= 0) {
              c.push(name)
            }
          }
          return c
        } else {
          return Object.keys(common)
        }
      },
      searchStyle: function () {
        return this.showIconfont && this.onDownload ? {position: 'relative'} : {position: 'static'}
      },
      iosOnDownload: function () {
        return this.$tkIcon.icons.customIos.state === 'waiting'
      },
      onDownload: function () {
        return !this.$tkIcon.icons.icon || this.$tkIcon.icons.icon.state === 'waiting'
      },
      failed: function () {
        return this.$tkIcon.icons.icon && this.$tkIcon.icons.icon.state === 'failed'
      },
      iconfontName: function () {
        return this.$tkIcon.icons.icon.name
      },
      json: function () {
        if (this.$tkIcon.icons.icon.data) {
          return JSON.stringify(this.$tkIcon.icons.icon.data)
        } else {
          return '没有可用的数据'
        }
      },
      icons: function () {
        let icons = this.$tkIcon.icons.icon.data
        if (this.keyword !== '') {
          let r = {}
          for (let name in icons) {
            if (name.indexOf(this.keyword) >= 0) {
              r[name] = icons[name]
            }
          }
          return r
        }
        return icons
      },
      groups: function () {
        if (this.keyword !== '') {
          let g = {}
          for (let groupName in groups) {
            let group = groups[groupName]
            for (let index in group) {
              let name = group[index]
              if (name.indexOf(this.keyword) >= 0) {
                if (!g[groupName]) {
                  g[groupName] = []
                }
                g[groupName].push(name)
              }
            }
          }
          return g
        } else {
          return groups
        }
      }
    },
    mounted: function () {
      if (this.history.length === 0) {
        let store = window.localStorage.getItem('iconHistory')
        if (store) {
          this.history = JSON.parse(store)
        }
      }
      this.$watch('$tkIcon.icons', this.handle, {
        deep: true
      })
      this.setIosFont()
    },
    methods: {
      handle: function () {
        if (this.$tkIcon.icons.icon && this.$tkIcon.icons.icon.state === 'success') {
          let icon = this.$tkIcon.icons.icon
          let newHistory = {
            id: icon.id,
            type: this.$tkIcon.icons.icon.type,
            ctoken: this.$tkIcon.ctoken,
            EGG_SESS: this.$tkIcon.EGG_SESS,
            name: icon.name
          }
          for (let i = 0; i < this.history.length; i++) {
            if (parseInt(this.history[i].id) === parseInt(this.iconfontId) && this.history[i].type === this.$tkIcon.icons.icon.type) {
              this.history.splice(i, 1)
              break
            }
          }
          this.history.splice(0, 0, newHistory)
        }
      },
      isIosIconExist: function (icon) {
        return this.$tkIcon.icons.customIos.data[icon]
      },
      refreshIos: function () {
        this.$tkIcon.icons['customIos'].state = 'waiting'
        this.$tkIcon.download()
      },
      setStyle: function (style) {
        this.style = style
        // this.$tkIcon.setStyle(style)
      },
      deleteHistory: function (index) {
        this.history.splice(index, 1)
      },
      getJson: function () {
        this.$refs['json'].open()
      },
      closeDialog: function (ref) {
        this.$refs[ref].close()
      },
      setHistory: function (history) {
        this.iconfontId = history.id
        this.ctoken = history.ctoken
        this.EGG_SESS = history.EGG_SESS
        this.tap = history.type
        history.type === 'public' ? this.publicIconInit() : this.privateIconInit()
      },
      tapChange: function (index) {
        this.tap = index === 0 ? 'public' : 'private'
      },
      reset: function () {
        this.keyword = this.iconfontId = this.ctoken = this.EGG_SESS = ''
        this.showIconfont = false
        this.setIosFont()
      },
      publicIconInit: function () {
        this.$tkIcon.set({
          'icon': {
            code: this.iconfontId,
            type: 'public'
          }
        })
        this.keyword = ''
        this.showIconfont = true
      },
      privateIconInit: function () {
        this.$tkIcon.setCtoken(this.ctoken, this.EGG_SESS)
        this.$tkIcon.set({
          'icon': {
            code: this.iconfontId,
            type: 'private',
            useClassAsName: true
          }
        })
        this.keyword = ''
        this.showIconfont = true
      },
      setIosFont: function () {
        this.$tkIcon.setCtoken(iosCtoken, iosEgg)
        this.$tkIcon.set({
          'customIos': {
            code: 230393,
            type: 'private',
            useClassAsName: true
          }
        })
      }
    }
  }
</script>

<style scoped>
  .item >div{
    height:120px;
    width:200px;
    display:flex;
    align-items:center;
    justify-content:center;
  }
  .item{
    display:flex;
    flex-direction: column;
    align-items:center;
    justify-content:center;
  }
  .group-name{
    color:rgba(0,0,0,.54);
    font-weight:500;
    margin:32px 0;
    font-size:18px;
  }
  .group-body{
    display:flex;
    flex-wrap: wrap;
  }
  .icon-item{
    width:140px;
    text-align:center;
    margin:0 8px 16px 8px;
  }
  .icon-item .tk-icon{
    width:40px;
    height:40px;
    font-size:40px;
    color:rgba(0,0,0,.78);
    margin:16px 0;
  }
  .icon-name{
    color:rgba(0,0,0,.54);
    text-overflow:ellipsis;
    width:150px;
    font-size:12px;
    padding:0 8px;
    white-space:nowrap;
    overflow:hidden;
  }
  .actions{
    text-align: right;
  }
  .icon-search{
    padding:15px;
    overflow: visible;
    min-height:500px;
  }
  .history-box{
    padding:32px 0;
  }
  .history-box>*{
    margin-right:16px;
  }
  .history-title{
    color:rgba(0,0,0,.54);
    font-weight:500;
    margin-bottom:16px;
    font-size:18px;
  }
  .json-text{
    width: 320px;
  }
  .history-item span{
    cursor:pointer;
  }
  .sticky-search-bar{
    background-color:white;
    padding-top:15px;
  }
  .sticky-search-bar > .md-input-container {
    margin-bottom: 0;
  }
  .icon-item .tk-icon.none{
    color: #FFAB91;
  }
</style>
