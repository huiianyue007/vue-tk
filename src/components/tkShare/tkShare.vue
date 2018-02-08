<template>
  <div class='share' @click = 'cancel' v-show = 'wrap'>
    <tk-popup :class = '["share_con", position]' :position = 'position' v-model="popupVisible">
      <tk-flex middle wrap class = 'share_ul' :column = 'position == "left" || position == "right"'>
        <div :class= "[position == 'left' || position == 'right' ? 'tk-grid-12':'tk-grid-2' ,'share_list' ,item.icon]" v-for = 'item in shareBts' @click = 'shareAction(item)'>
          <tk-icon :type = 'item.iconType ? item.iconType : "tmallPrivate"' class = 'icon' v-if = 'item.icon'>{{item.icon}}</tk-icon>
          <p class = 'share_title' v-if = 'item.icon'>{{item.title}}</p>
          <slot :name = 'item.html' v-else></slot>
        </div>
      </tk-flex>
      <slot name = 'cancel'><div class="share_cancel" @click.stop = 'cancel'>取消</div></slot>
    </tk-popup>
  </div>
</template>
<script>
import {isServer} from './../../core/utils/index'
import svgPrivate from './iconfont.json'
if (!isServer) {
  require('./tkShare.scss')
}
export default {
  data () {
    return {
      popupVisible: false,
      shareBts: [],
      wrap: false
    }
  },
  created () {
    this.$tkIcon.setCtoken('eLkKa0rDXXPcLJKSKD9orX_BDeri6fQoyQCovDC6TNu8EH4tx-WAH02HRhAyokNNIOWvUVprT1KQ10wQir2ycMucl0IbKzlMKOsSaHAlfq4Vtpn0ShjkDqpPelcEnJC296tVVMpMF5erj42oZWu37ZRiiZf4zUhp7W-Gt2DzlgdLKSczIY4u_NSzamoxUMp2fCJBlOhhIscQpxa6S81XA_ebDIw9tDCPLinHdSFCNQRGRMY_96J2qPcJB6g6GyXH6uAdnPqF68TMf98PS8zL81dFFTdSF8wVFU5boyXwLHXJeS__d8KYhOjL52zltz1zGFePUIfY079K29pV_3rCGSpHYPf-DmqAReiyZxOaTFNyZt5Y0-KbdAa-QEHd0DGGXrP3bf-YTyY2KtY-qKTjqsVBK15o4bVuEmxqWgYHZsRSFewW3FTJmKCO4-tdMai_TCp4UH0eiF1gN6sdojNAkAzIXf8sw00f8B46V9p-XuNpWu1kKj66c8RYyFA7rLA1N_gyZdduprryLZr13JSAktTvYvKqLpkvg9AbXKwN0kOyqx98u-INAe-DfWC7ogmD51Bx690GBTEVh1O0BKSE7b07_b7Y7LL7TI3DnxU1phHiw_IG6fuIrr57urd0aLdUhnuj34IKHvA9QMwN_DH4p4zEv7jvcwRF_xUpffqxHEapi4oMMa8hFaEqTjDef0T2kKlkj3j0EvbFJ3R0O7DRT1K1eiYWsyTV813NG8Q-mZRC0VptmdxpRCfIpwgRMAlWAXdH4O-G1Reh-_nVxrvrXK43yn66TQ4uqYPXKynsXVknoKSsaM43W0McNzVO9wBMJOEPs9hr4aYcqFpSiV0qy6Vpy2lLtVUokuHIwppsCwS6g-lwkU9Hmt48M5SLFUZiC-15m4BaiCmaf-MSRMtWKpNKuYThb2D3vUNQvsBQZAhG0IHKbHiVgVlWFinhLxngvTKALClLcMwK_jIUpkv1vFThVGRnhmtlh_JwXFQsZIN3j8ppHaJFOKEdOxveWEU4Fd_kV15gmp63YoQZK2WYBdzM7TXyWKZW0R8QjJEE0SwI-Yc2XrMbiev-IZAHcJ67jna1AYnHZnCwgvHCk2dGUUCaR2LFaWFV9_ihMJRozo0JrWxu2UT-ul78wt2DA0tKP-JplXS9HiL3a7P3lhGVPNGpQfP38RyeHniBjXFufNsvbiHpjzyPwSujYsN9OR0qrq72Nk7chOnKJbqrJnNNXfqh-T9hfUTnifUKhKUtNqnA_8qsIbmV_oXUlS1VVjXY3dBK9CGHQXwpUCirUz1v3a5Ro02N6g-ig96-famykXNc_Usp1DDFCmB5e4-ReKYQK4kLIOkDM-m0aSXlfTFT3aHTC84_CD_Mq1ReN1Nsdlhzi--M17oye7qoaKvtLIjk')
    this.$tkIcon.set({
      tmallPrivate: {
        code: 225021,
        data: svgPrivate,
        type: 'private'
      }
    })
    this.init()
  },
  mounted () {
    if (isServer) return
    var script = document.createElement('script')
    script.id = '-mob-share'
    script.src = 'http://f1.webshare.mob.com/code/mob-share.js'
    document.head.appendChild(script)
    this.$on('show', this.show)
    this.$on('hidden', this.hidden)
  },
  watch: {
    wrap (val) {
      this.popupVisible = val
    }
  },
  methods: {
    show () {
      this.wrap = true
    },
    hidden () {
      this.wrap = false
    },
    cancel () {
      this.wrap = false
      this.$emit('cancel')
    },
    init () {
      if (this.$tkDetect.isPlus) {
        var shares = {}
        this.getServices().then((data) => {
          data.forEach((item) => {
            this.shareOption.forEach((value) => {
              if (value.id === 'weibo') {
                value.id = 'sinaweibo'
              }
              if (value.id === item.id) {
                shares[value.id] = item
                for (var key in value) {
                  shares[item.id][key] = value[key]
                }
              } else if (value.id === 'pengyou') {
                shares['pengyou'] = {}
                for (var index in value) {
                  shares['pengyou'][index] = value[index]
                }
              }
            })
          })
          this.shareShow(shares)
        })
      } else {
        this.shareBts = this.shareOption
      }
    },
    shareShow (data) {
      if (isServer) return
      var ss = data['weixin']
      if (window.navigator.userAgent.indexOf('StreamApp') < 0 && window.navigator.userAgent.indexOf('qihoo') < 0 && ss && ss.nativeClient) {
        // 在360流应用中微信不支持分享图片
        ss.s = ss
        ss.x = 'WXSceneSession'
        this.shareBts.push(ss)
        if (data['pengyou']) {
          ss = data['pengyou']
          ss.s = data['weixin']
          ss.x = 'WXSceneTimeline'
          this.shareBts.push(ss)
        }
      }
      ss = data['sinaweibo']
      if (ss) {
        ss.s = ss
        this.shareBts.push(ss)
      }
      ss = data['qq']
      if (ss && ss.nativeClient) {
        ss.s = ss
        this.shareBts.push(ss)
      }
      if (!this.shareBts.length) {
        window.plus.nativeUI.toast('未获取相应平台授权')
        this.popupVisible = false
        this.$emit('cancel')
      }
    },
    shareAction (opt) {
      if (isServer) return
      if (!this.message) {
        window.plus.nativeUI.alert('发送内容不能为空')
        this.popupVisible = false
        return
      }
      if (this.$tkDetect.isPlus) {
        this.sharePlus(opt)
      } else {
        this.shareWeb(opt)
      }
    },
    shareWeb (opt) {
      if (isServer) return
      window.mobShare.config({
        debug: true, // 开启调试，将在浏览器的控制台输出调试信息
        appkey: this.appkey, // appkey
        params: {
          url: this.message.href, // 分享链接
          title: this.message.title, // 分享标题
          description: this.message.content, // 分享内容
          pic: this.message.image, // 分享图片，使用逗号,隔开
          reason: this.message.reason // 自定义评论内容，只应用与QQ,QZone与朋友网
        }
      })
      var alert = typeof opt.callback === 'function' ? opt.callback : window.alert
      var req = window.mobShare(opt.id)
      if (opt.id === 'weixin' && !this.message.title) {
        req.send()
      } else if (!this.message.title) {
        if (opt.id === 'weibo') {
          req.send()
        } else {
          alert('请填写标题')
        }
      } else if (!this.message.href) {
        alert('请填写分享链接')
      } else {
        req.send()
      }
    },
    sharePlus (opt) {
      if (isServer) return
      var msg = {content: this.message.content, extra: {scene: opt.x}}
      if (this.message.href) {
        msg.href = this.message.href
        if (this.msg.title) {
          msg.title = this.message.title
        }
        if (this.message.content) {
          msg.content = this.message.content
        }
      }
      if (this.message.image) {
        msg.pictures = this.message.image
      }
      if (opt.s.authenticated) {
        this.shareMessage(msg, opt.s)
      } else {
        opt.s.authorize(() => {
          this.shareMessage(msg, opt.s)
        }, (e) => {
          window.plus.nativeUI.toast('认证授权失败：' + e.code)
        })
      }
    },
    shareMessage (msg, opt) {
      if (isServer) return
      opt.send(msg, () => {
        window.plus.nativeUI.toast('分享到\"' + opt.description + '\"成功！ ')
      }, (e) => {
        window.plus.nativeUI.toast('分享到\"' + opt.description + '\"失败')
      })
    },
    getServices () {
      if (isServer) return
      return new window.Promise((success, error) => {
        window.plus.share.getServices((data) => {
          success(data)
        }, (er) => {
          error(er)
        })
      })
    }
  },
  props: {
    shareOption: {
      type: Array,
      default: [{
        title: '微信',
        icon: '微信',
        id: 'weixin'
      }, {
        title: '朋友圈',
        icon: '朋友圈',
        id: 'pengyou'
      }, {
        title: 'qq好友',
        icon: 'qq',
        id: 'qq'
      }, {
        title: '微博',
        icon: '微博',
        id: 'weibo'
      }]
    },
    message: {
      type: Object,
      default: {
        url: '', // 分享链接
        title: '', // 分享标题
        description: '', // 分享内容
        pic: '', // 分享图片，使用逗号,隔开
        reason: ''
      }
    },
    appkey: String,
    position: String
  }
}
</script>
<style lang='scss' scoped>
  .share{
    position:fixed;
    top:0;
    left:0;
    z-index:100;
    width:100%;
    height:100%;
    background:rgba(0, 0, 0, .5);
    .top,.bottom{width:100%;}
    .left,.right{height:100%;
      width:30%;
      .share_list{
        margin-top:10px;
      }
      .share_cancel{
        position: absolute;
        width: 100%;
        left: 0;
        bottom: 0;
      }
    }
    .share_con{
      text-align:center;
      .share_ul{
        padding: 16px;
        .share_list{
          background-repeat: no-repeat;
          background-position: top center;
          background-size: 30px 30px;
          height:30px;
          font-size:12px;
          padding-bottom:4em;
          box-sizing: border-box;
          position:relative;
          .icon{
            width:30px;
            height:30px;
          }
          .share_title{
            position:absolute;
            left:0;
            bottom:0;
            margin:0;
            width:100%;
            text-align:center;
            line-height:1em;
            white-space: nowrap;
          }
        }
      }
      .share_cancel{
        height: 3em;
        line-height: 3em;
        background: #efefef;
        font-size: 14px;
      }
    }
  }
</style>
