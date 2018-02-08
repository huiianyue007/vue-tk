<template xmlns="http://www.w3.org/1999/html" xmlns="http://www.w3.org/1999/html">
  <page-content page-title="上传方法">
    <docs-component>
      <div slot="description">
        <h2>图片上传方法。</h2>
        <p>组件上传依赖 leancloud 的 jssdk 使用前配置好</p>
        <p>原生上传依赖 dcloud jssdk</p>
        <p>函数整体返回一个 Promise 对象，返回值为提交图片的 URL</p>
      </div>
      <div slot="api">
        <api-table name="tkLoad">
          <code-block lang="js">
            // 使用方法
            this.$tkUpload({
              event: e,
              isUpload: true,
              imgRename: 'upload name',
              imgMaxSize： 1000，
              imgMaxSizeCallback() {
                // 当图片尺寸超过最大尺寸，需要。。。
              },
              getImgBase64(value) {
                // 获取 base64 后的文件
                let baser64 = value
              },
              getImgDetail(detail) {
                // 获取文件的基本信息
                let imageName = detail.name
                let imageSize = detail.size
              },
              uploadBeforeCallback() {
                // 上传前的 hook
              }
            }).then((url) => {
              // 图片上传返回 url, 如果没有设置上传，则不需要
            }).catch((error) => {
              // 上传失败，返回错误信息
            })
          </code-block>
          <md-table slot="properties">
            <md-table-header>
              <md-table-row>
                <md-table-head>名称</md-table-head>
                <md-table-head>类型</md-table-head>
                <md-table-head>说明</md-table-head>
                <md-table-head>必须</md-table-head>
                <md-table-head>默认值</md-table-head>
              </md-table-row>
            </md-table-header>

            <md-table-body>
              <md-table-row>
                <md-table-cell>isUpload</md-table-cell>
                <md-table-cell><code>boolean</code></md-table-cell>
                <md-table-cell>是否需要上传</md-table-cell>
                <md-table-cell>null</md-table-cell>
                <md-table-cell>false</md-table-cell>
              </md-table-row>
              <md-table-row>
                <md-table-cell>event</md-table-cell>
                <md-table-cell><code>object</code></md-table-cell>
                <md-table-cell>点击事件对象</md-table-cell>
                <md-table-cell><code>required</code></md-table-cell>
                <md-table-cell>null</md-table-cell>
              </md-table-row>
              <md-table-row>
                <md-table-cell>imgRename</md-table-cell>
                <md-table-cell><code>string</code></md-table-cell>
                <md-table-cell>上传图片重命名</md-table-cell>
                <md-table-cell>null</md-table-cell>
                <md-table-cell>图片原名称</md-table-cell>
              </md-table-row>
              <md-table-row>
                <md-table-cell>imgMaxSize</md-table-cell>
                <md-table-cell><code>number</code></md-table-cell>
                <md-table-cell>限制图片最大尺寸，单位 kb</md-table-cell>
                <md-table-cell>null</md-table-cell>
                <md-table-cell>null</md-table-cell>
              </md-table-row>
              <md-table-row>
                <md-table-cell>imgMaxSizeCallback</md-table-cell>
                <md-table-cell><code>function</code></md-table-cell>
                <md-table-cell>判断图片超过尺寸 hook</md-table-cell>
                <md-table-cell>null</md-table-cell>
                <md-table-cell>null</md-table-cell>
              </md-table-row>
              <md-table-row>
                <md-table-cell>getImgBase64</md-table-cell>
                <md-table-cell><code>function</code></md-table-cell>
                <md-table-cell>获取图片Base64值</md-table-cell>
                <md-table-cell>null</md-table-cell>
                <md-table-cell>null</md-table-cell>
              </md-table-row>
              <md-table-row>
                <md-table-cell>getImgDetail</md-table-cell>
                <md-table-cell><code>function</code></md-table-cell>
                <md-table-cell>获取上传信息 name/size</md-table-cell>
                <md-table-cell>null</md-table-cell>
                <md-table-cell>null</md-table-cell>
              </md-table-row>
              <md-table-row>
                <md-table-cell>uploadBeforeCallback</md-table-cell>
                <md-table-cell><code>function</code></md-table-cell>
                <md-table-cell>上传前 hook</md-table-cell>
                <md-table-cell>null</md-table-cell>
                <md-table-cell>null</md-table-cell>
              </md-table-row>
            </md-table-body>
          </md-table>
        </api-table>
      </div>
      <div slot="example">
        <example-box card-title="上传">
          <div slot="demo">
            <md-toolbar class="md-transparent md-dense">
              <h2 class="md-title" style="flex: 1">图片上传</h2>
            </md-toolbar>
            <div class="container">
              <md-avatar class="header">
                <img :src="src" alt="People">
              </md-avatar>
              <p v-if="detail" style="text-align: center; margin: 10px 0 0 0">图像名称：{{detail.name}} 图像大小：{{detail.size}}</p>
              <div class="btns">
                <tk-upload title="获取 base64" class="btn" @click.native="click1($event)"></tk-upload>
                <tk-upload title="限制上传大小" class="btn" @click.native="click2($event)"></tk-upload>
                <tk-upload title="获取图像基本信息" class="btn" @click.native="click3($event)"></tk-upload>
              </div>
              <div class = 'btns'>
                <md-whiteframe class="btn" md-elevation="5" @click.native="save">保存</md-whiteframe>
              </div>
            </div>
          </div>
          <div slot="code">
            <code-block lang="html" class="demo">
              &lt;tk-upload title="获取 base64" class="btn" @click.native="click1($event)"&gt;&lt;/tk-upload&gt;
              &lt;tk-upload title="限制上传大小" class="btn" @click.native="click2($event)"&gt;&lt;/tk-upload&gt;
              &lt;tk-upload title="获取图像基本信息" class="btn" @click.native="click3($event)"&gt;&lt;/tk-upload&gt;
            </code-block>
            <code-block lang="js" class="demo">
              methods: {
                click1 (e) {
                  let self = this
                  this.$tkUpload({
                    event: e,
                    getImgBase64 (value) {
                      self.src = value
                    }
                  })
                },
                click2 (e) {
                  let self = this
                  this.$tkUpload({
                    event: e,
                    getImgBase64 (value) {
                      self.src = value
                    },
                    imgMaxSize: 100,
                    imgMaxSizeCallback () {
                      window.alert('图片太大')
                    }
                  })
                },
                click3 (e) {
                  let self = this
                    this.$tkUpload({
                    event: e,
                    getImgDetail (detail) {
                      self.detail = detail
                    }
                  })
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
        src: '//placeimg.com/40/40/people/1',
        detail: null,
        file: null
      }
    },
    methods: {
      click1 (e) {
        let self = this
        this.$tkUpload({
          event: e,
          isUpload: true,
          getImgBase64 (value) {
            self.src = value
          },
          getFile (file) {
            self.file = file
          }
        })
      },
      click2 (e) {
        let self = this
        this.$tkUpload({
          event: e,
          getImgBase64 (value) {
            self.src = value
          },
          imgMaxSize: 100,
          imgMaxSizeCallback () {
            window.alert('图片太大')
          }
        })
      },
      click3 (e) {
        let self = this
        this.$tkUpload({
          event: e,
          getImgDetail (detail) {
            self.detail = detail
          }
        })
      },
      save () {
        var TodoFolder = AV.Object.extend('TodoFolder')
        var todos = new TodoFolder()
        todos.set('title', '你好')
        todos.set('protitle', this.file)
        todos.save().then(() => {
          window.alert('保存成功')
        }).catch(() => {
          window.alert('保存失败')
        })
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
