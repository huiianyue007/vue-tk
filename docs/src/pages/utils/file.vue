<template>
  <page-content page-title="方法 - file">
    <docs-component>
      <div slot="description">
        <p>选择文件，或者拍摄照片</p>
      </div>

      <div slot="api">
        <api-table name="单独引用">
          <code-block lang="javascript">
            // 单独引用
            import Vue from 'vue'
            import tkFile from 'vue-tk/dist/utils/tkFile'
            Vue.use(tkFile)
          </code-block>
        </api-table>

        <api-table name="使用方法">
          <code-block lang="javascript" :tidy="false">
            // 选择一张照片
            this.$tkFile.pick().then(file => {
              // file:
              //  url:  预览地址
              //  file:  原生file对象
              //  options: 获取图片时的options参数
              //  name: 文件名
              //  ext: 文件后缀名
              //  fullPath: 文件路径地址
              //  buffer: arrayBuffer格式的file对象
            }).catch(e => {
              // 展示错误信息
              alert(e.message)
            })

            // 设置选择图片的参数
            this.$tkFile.pick({
              type: 'image',
              from: 'file'
            })
            // options:
            //  type: 选择的文件类型
            //  from: 文件来源，file代表文件选择器，camera代表照相机

            // 生成用于上传的data
            let data = this.$tkFile.createFormData({
              name1: file1,
              name2: file2,
              ...
            })
          </code-block>
        </api-table>
      </div>
      <div slot="example">
        <example-box card-title="选择文件">
          <div slot="demo">
            <div class="field-group">
              <md-input-container>
                <label for="type">类型</label>
                <md-select name="type" id="type" v-model="type">
                  <md-option value="image">image</md-option>
                  <md-option value="*">*</md-option>
                </md-select>
              </md-input-container>
              <md-input-container>
                <label for="from">来源</label>
                <md-select name="from" id="from" v-model="from">
                  <md-option value="file">file</md-option>
                  <md-option value="camera">camera</md-option>
                </md-select>
              </md-input-container>
            </div>
            <md-whiteframe md-elevation="2" class="white-frame">
              <tk-flex class="img-wrap" middle center @click.native="pick">
                <div class="md-subheading" v-if="!file">选择一个文件</div>
                <img :src="file.url" v-else-if="isImage"/>
                <div class="md-subheading" v-else>{{file.name}}</div>
              </tk-flex>
            </md-whiteframe>
          </div>
          <div slot="code">
            <code-block lang="xml" class="demo">
              &lt;tk-flex class=&quot;img-wrap&quot; middle center @click.native=&quot;pick&quot;&gt;
              &lt;div class=&quot;md-subheading&quot; v-if=&quot;!file&quot;&gt;选择一个文件&lt;/div&gt;
              &lt;img :src=&quot;file.url&quot; v-else-if=&quot;isImage&quot;/&gt;
              &lt;div class=&quot;md-subheading&quot; v-else&gt;{{file.name}}&lt;/div&gt;
              &lt;/tk-flex&gt;
            </code-block>
            <code-block lang="javascript" class="demo">
              {
                data: function () {
                  return {
                    type: 'image',
                    from: 'file',
                    file: null
                  }
                },
                computed: {
                  isImage () {
                    return this.file && /image/.test(this.file.file.type)
                  }
                },
                methods: {
                  pick () {
                    this.$tkFile.pick({
                      type: this.type,
                      from: this.from
                    }).then(file => {
                      this.file = file
                    }).catch(e => {
                      window.alert(e.message)
                    })
                  }
                }
              }
            </code-block>
          </div>
        </example-box>

        <example-box card-title="上传文件">
          <div slot="demo">
            <md-button class="md-raised md-primary" @click.native="pickAndUpload">选择一个文件上传</md-button>
            <md-input-container>
              <label>下载地址</label>
              <md-input v-model="downloadUrl"></md-input>
            </md-input-container>
          </div>
          <div slot="code">
            <code-block lang="xml" class="demo">
              &lt;md-button class=&quot;md-raised md-primary&quot; @click.native=&quot;pickAndUpload&quot;&gt;选择一个文件上传&lt;/md-button&gt;
              &lt;md-input-container&gt;
              &lt;label&gt;下载地址&lt;/label&gt;
              &lt;md-input v-model=&quot;downloadUrl&quot;&gt;&lt;/md-input&gt;
              &lt;/md-input-container&gt;
            </code-block>
            <code-block lang="javascript" class="demo">
              {
                data: function () {
                  return {
                    downloadUrl: ''
                  }
                },
                methods: {
                  pickAndUpload () {
                    this.$tkFile.pick().then(file => {
                    let data = this.$tkFile.createFormData({
                    file: file
                    })
                    this.$tkAjax.post('http://api.mokekeji.com/upload/file', data).then((rs) => {
                    this.downloadUrl = rs.data.url
                    }).catch(e => {
                    window.alert('上传失败')
                    })
                    }).catch(e => {
                    window.alert(e.message)
                    })
                  }
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
  import MdButton from '../../../../node_modules/vue-material/src/components/mdButton/mdButton.vue'

  export default {
    components: {MdButton},
    data () {
      return {
        type: 'image',
        from: 'file',
        file: '',
        downloadUrl: ''
      }
    },
    computed: {
      isImage () {
        return this.file && /image/.test(this.file.file.type)
      }
    },
    methods: {
      pick () {
        this.$tkFile.pick({
          type: this.type,
          from: this.from
        }).then(file => {
          this.file = file
        }).catch(e => {
          window.alert(e.message)
        })
      },
      pickAndUpload () {
        this.$tkFile.pick().then(file => {
          let data = this.$tkFile.createFormData({
            file: file
          })
          this.$tkAjax.post('http://oldapi.mokekeji.com/upload/file', data).then((rs) => {
            this.downloadUrl = rs.data.url
          }).catch(e => {
            window.alert('上传失败')
          })
        }).catch(e => {
          window.alert(e.message)
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
  .img-wrap{
    width: 100%;
    min-height:240px;
  }
  .img-wrap img{
    max-width: 100%;
  }
  .white-frame{
    margin-top: 20px;
  }
</style>
