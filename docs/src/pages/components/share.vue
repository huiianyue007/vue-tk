<template xmlns="http://www.w3.org/1999/html">
  <page-content page-title="组件 - 分享组件">
    <docs-component>
      <div slot="description">
        <p>分享组件</p>
        <p>该组件不能在pc项目中使用，因为ie浏览器不支持flex布局</p>
      </div>

      <div slot="api">
        <api-table name="TkShare">
          <md-table slot="properties">
            <md-table-header>
              <md-table-row>
                <md-table-head>名称</md-table-head>
                <md-table-head>类型</md-table-head>
                <md-table-head>默认值</md-table-head>
                <md-table-head>说明</md-table-head>
              </md-table-row>
            </md-table-header>

            <md-table-body>
              <md-table-row>
                <md-table-cell>shareOption</md-table-cell>
                <md-table-cell>Array</md-table-cell>
                <md-table-cell>
                  [{ title: '微信', icon: '微信', id: 'weixin' }, { title: '朋友圈', icon: '朋友圈', id: 'pengyou' }, { title: 'qq好友', icon: 'qq', id: 'qq' }, { title: '微博', icon: '微博', id: 'weibo' }]
                </md-table-cell>
                <md-table-cell>分享按钮控制 shareOption属性说明:
                  <br /> icon:分享按钮图标设置
                  <br /> iconType:分享按钮图标库设置,默认为tmallPrivate
                  <br /> title: 分享标题设置<br />
                  html: 内容自定义<br />
                  id: 分享id可选值参照shareSDk 平台id列表
                </md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>Message</md-table-cell>
                <md-table-cell>Object</md-table-cell>
                <md-table-cell></md-table-cell>
                <md-table-cell>
                  发送信息设置(不能为空)<br /> href: '', // 分享链接<br /> title: '', // 分享标题<br /> content: '', // 分享内容<br /> image: '', // 分享图片，使用逗号,隔开<br /> reason:'',//自定义评论内容，只应用与QQ,QZone与朋友网
                  <br />
                </md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>position</md-table-cell>
                <md-table-cell>String</md-table-cell>
                <md-table-cell>bottom</md-table-cell>
                <md-table-cell>
                  显示位置设置<br /> 可选值为'top','left','right','bottom'
                </md-table-cell>
              </md-table-row>
              <md-table-row>
                <md-table-cell>appkey</md-table-cell>
                <md-table-cell>String</md-table-cell>
                <md-table-cell></md-table-cell>
                <md-table-cell>shareSDK申请的appkey(必填)</md-table-cell>
              </md-table-row>
            </md-table-body>
          </md-table>
        </api-table>
      </div>

      <div slot="api">
        <api-table name="methods">
          <md-table slot="methods">
            <md-table-header>
              <md-table-row>
                <md-table-head>名称</md-table-head>
                <md-table-head>说明</md-table-head>
              </md-table-row>
            </md-table-header>

            <md-table-body>
              <md-table-row>
                <md-table-cell>cancel</md-table-cell>
                <md-table-cell>关闭share组件的方法</md-table-cell>
              </md-table-row>
              <md-table-row>
                <md-table-cell>refs[...].$emit('show')</md-table-cell>
                <md-table-cell>
                  显示
                </md-table-cell>
              </md-table-row>
              <md-table-row>
                <md-table-cell>refs[...].$emit('hidden')</md-table-cell>
                <md-table-cell>
                  隐藏
                </md-table-cell>
              </md-table-row>
             </md-table-body>
          </md-table>
        </api-table>
      </div>
      <div slot="api">
        <api-table name="slot">
          <md-table slot="properties">
            <md-table-header>
              <md-table-row>
                <md-table-head>name</md-table-head>
                <md-table-head>说明</md-table-head>
              </md-table-row>
            </md-table-header>

            <md-table-body>
              <md-table-row>
                <md-table-cell>ShareOption数组元素的html名称</md-table-cell>
                <md-table-cell>
                  建议shareOption数组元素中 html与 icon不要同时使用
                </md-table-cell>
              </md-table-row>
              <md-table-row>
                <md-table-cell>cancel</md-table-cell>
                <md-table-cell>
                  取消按钮自定义
                </md-table-cell>
              </md-table-row>
            </md-table-body>
          </md-table>
        </api-table>
      </div>
      <div slot="api">
        <api-table name="shareSDK平台id列表">
          <md-table slot="properties">
            <md-table-header>
              <md-table-row>
                <md-table-head>平台名称</md-table-head>
                <md-table-head>id</md-table-head>
              </md-table-row>
            </md-table-header>

            <md-table-body>
              <md-table-row v-for='item in shareSDK'>
                <md-table-cell>{{item.title}}</md-table-cell>
                <md-table-cell>
                  {{item.id}}
                </md-table-cell>
              </md-table-row>
            </md-table-body>
          </md-table>
        </api-table>
      </div>

      <div slot="example">
        <example-box card-title="分享组件">
          <div slot="demo">
            <div class="example-wrap" ref="container">
              <div>
                <md-checkbox v-model="wrap">显示</md-checkbox>
              </div>
              <div>
                <md-radio v-model="v" name="v" md-value="top">top</md-radio>
                <md-radio v-model="v" name="v" md-value="left">left</md-radio>
                <md-radio v-model="v" name="v" md-value="right">right</md-radio>
                <md-radio v-model="v" name="v" md-value="bottom">bottom</md-radio>
              </div>
              <div>
                <form novalidate @submit.stop.prevent="submit">
                  <md-input-container>
                    <label>分享信息标题</label>
                    <md-input placeholder="分享信息标题" v-model="msg.title"></md-input>
                  </md-input-container>
                  <md-input-container>
                    <label>分享信息链接</label>
                    <md-input placeholder="分享信息链接" v-model="msg.href"></md-input>
                  </md-input-container>
                  <md-input-container>
                    <label>分享信息内容</label>
                    <md-input placeholder="分享信息内容" v-model="msg.content"></md-input>
                  </md-input-container>
                  <md-input-container>
                    <label>自定义评论内容</label>
                    <md-input placeholder="自定义评论内容" v-model="msg.reason"></md-input>
                  </md-input-container>
                  <md-input-container>
                    <label>分享内容图片</label>
                    <md-input placeholder="分享图片地址(app端为本地图片,web端为网络图片)" v-model="msg.image"></md-input>
                  </md-input-container>
                </form>
              </div>
              <div class='share'>
                <tk-share @cancel='cancel' :message='msg' :shareOption='shareOption' ref = 'share' :position='position' appkey='123'>
                  <div class="share_list" :slot='item.html' v-for='item in shareOption'>
                    <img src="assets/logo.png" class='icon' />
                    <div>{{item.title}}</div>
                  </div>
                </tk-share>
              </div>
            </div>
          </div>
          <div slot="code">
            <code-block lang="xml" class="demo">
              &lt;tk-share @cancel = &quot;cancel&quot; :message = &quot;msg&quot; :ref = &quot;share&quot; :position = &quot;position&quot; appkey = &quot;123&quot;&gt;&lt;/tk-share&gt;
            </code-block>
            <code-block lang="js" class="demo">
              export default {
                data: function () {
                  return {
                    column: false,
                    wrap: false,
                    left: false,
                    center: false,
                    right: false,
                    top: false,
                    msg: {},
                    shareOption: [{
                      title: '微信',
                      id: 'weixin',
                      icon: '微信'
                    }, {
                      title: 'qq',
                      id: 'qq',
                      html: 'qq'
                    }, {
                      title: '朋友圈',
                      id: 'pengyou',
                      icon: '朋友圈'
                    }, {
                      title: '微博',
                      id: 'weibo',
                      icon: '微博',
                      callback (opt) {
                        console.log(opt)
                      }
                    }],
                    bottom: false,
                    position: 'top',
                    v: 'top',
                    r: 'left',
                    shareSDK: [{
                      title: '新浪微博',
                      id: 'weibo'
                    }, {
                      title: '腾讯微博',
                      id: 'tencentweibo'
                    }, {
                      title: '微信 ',
                      id: ' weixin'
                    }, {
                      title: 'QQ空间',
                      id: '  qzone'
                    }, {
                      title: 'QQ好友',
                      id: '  qq'
                    }, {
                      title: '人人网',
                      id: ' renren'
                    }, {
                      title: '开心网 ',
                      id: 'kaixin'
                    }, {
                      title: '豆瓣网',
                      id: ' douban'
                    }, {
                      title: 'Facebook',
                      id: '  facebook'
                    }, {
                      title: 'Twitter ',
                      id: 'twitter'
                    }, {
                      title: 'Pocket',
                      id: '  pocket'
                    }, {
                      title: 'Google+ ',
                      id: 'google'
                    }, {
                      title: '有道云笔记',
                      id: ' youdao'
                    }, {
                      title: '明道 ',
                      id: ' mingdao'
                    }, {
                      title: '朋友网',
                      id: ' pengyou'
                    }, {
                      title: 'Tumblr ',
                      id: ' tumblr'
                    }, {
                      title: 'Instapaper ',
                      id: ' instapaper'
                    }, {
                      title: 'Linkedin ',
                      id: ' linkedin'
                    }]
                  }
                },
                watch: {
                  wrap (val) {
                    if (val) {
                      this.$refs.share.$emit('show')
                    } else {
                      this.$refs.share.$emit('hidden')
                    }
                  },
                  v (val) {
                    this.position = val
                  },
                  r () {
                    this.left = this.center = this.right = false
                    this[this.r] = true
                  }
                },
                methods: {
                  cancel () {
                    this.wrap = false
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
  export default {
    data: function () {
      return {
        column: false,
        wrap: false,
        left: false,
        center: false,
        right: false,
        top: false,
        msg: {},
        shareOption: [{
          title: '微信',
          id: 'weixin',
          icon: '微信'
        }, {
          title: 'qq',
          id: 'qq',
          html: 'qq'
        }, {
          title: '朋友圈',
          id: 'pengyou',
          icon: '朋友圈'
        }, {
          title: '微博',
          id: 'weibo',
          icon: '微博',
          callback (opt) {
            console.log(opt)
          }
        }],
        bottom: false,
        position: 'top',
        v: 'top',
        r: 'left',
        shareSDK: [{
          title: '新浪微博',
          id: 'weibo'
        }, {
          title: '腾讯微博',
          id: 'tencentweibo'
        }, {
          title: '微信 ',
          id: ' weixin'
        }, {
          title: 'QQ空间',
          id: '  qzone'
        }, {
          title: 'QQ好友',
          id: '  qq'
        }, {
          title: '人人网',
          id: ' renren'
        }, {
          title: '开心网 ',
          id: 'kaixin'
        }, {
          title: '豆瓣网',
          id: ' douban'
        }, {
          title: 'Facebook',
          id: '  facebook'
        }, {
          title: 'Twitter ',
          id: 'twitter'
        }, {
          title: 'Pocket',
          id: '  pocket'
        }, {
          title: 'Google+ ',
          id: 'google'
        }, {
          title: '有道云笔记',
          id: ' youdao'
        }, {
          title: '明道 ',
          id: ' mingdao'
        }, {
          title: '朋友网',
          id: ' pengyou'
        }, {
          title: 'Tumblr ',
          id: ' tumblr'
        }, {
          title: 'Instapaper ',
          id: ' instapaper'
        }, {
          title: 'Linkedin ',
          id: ' linkedin'
        }]
      }
    },
    watch: {
      wrap (val) {
        if (val) {
          this.$refs.share.$emit('show')
        } else {
          this.$refs.share.$emit('hidden')
        }
      },
      v (val) {
        this.position = val
      },
      r () {
        this.left = this.center = this.right = false
        this[this.r] = true
      }
    },
    methods: {
      cancel () {
        this.wrap = false
      }
    }
  }
</script>

<style scoped>
  .flex-wraper {
    border: 2px solid #FFC107;
  }

  .item {
    width: 100px;
    height: 100px;
  }

  .item.big {
    height: 200px;
  }

  .inner {
    width: 100%;
    height: 100%;
    background-color: #3F51B5;
    color: white;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .share_con{
    background:red;
  }
  .share {
    position: relative;
    width: 100%;
    height: 600px;
    overflow:hidden;
  }
  .share_cancel{
    height:3em;
    line-height:3em;
    background:#eee;
    color:#666;
    position:absolute;
    bottom:0;
    left:0;
    width:100%;
  }
  .icon {
    width: 30px;
    height: 30px;
  }
</style>
