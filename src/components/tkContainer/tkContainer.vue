<template>
  <div class="tk-container" :class="{'mobile-view': isFullScreen}">
    <div class="tk-container-content">
      <status-bar v-if="!inContainer && !hideStatusBar" :options="statusBar"></status-bar>
      <div class="tk-container-cover">
        <slot name="cover"></slot>
        <portal-target :name="id"  v-for="id in portals" :key="id"></portal-target>
      </div>
      <div class="tk-container-header">
        <slot name="header"></slot>
      </div>
      <div class="tk-container-main-warp">
        <div class="tk-container-body-warp">
          <div class="tk-container-body" @scroll="scrollHandler" ref="body">
            <transition name="fade">
              <div  v-show="showBody" class="scroll-content" :class="{'disable-scroll': disableScroll, 'container-center': center}">
                <slot></slot>
                <div class="infinite-scroll" v-if="infiniteScroll">
                  <slot  name="infiniteScroll">
                    <div class="no-more-data" v-if="infiniteScrollStatus === 'complete'" >没有更多数据</div>
                    <div class="loading-more" v-else >
                      <tk-loading backgroundColor="transparent" size="12px"></tk-loading>
                    </div>
                  </slot>
                </div>
              </div>
            </transition>
            <div class="scrollbar-track scrollbar-track-x" v-show="intance">
              <div class="scrollbar-thumb scrollbar-thumb-x"></div>
            </div>
            <div class="scrollbar-track scrollbar-track-y" v-show="intance">
              <div class="scrollbar-thumb scrollbar-thumb-y"></div>
            </div>
            <canvas class="overscroll-glow" v-show="intance"></canvas>
          </div>
          <div class="tk-container-body-cover">
            <slot name="body-cover"></slot>
          </div>
        </div>
        <div class="tk-container-footer">
          <slot name="footer"></slot>
        </div>
        <div class="tk-container-main-cover">
          <slot name="main-cover"></slot>
          <component v-if="_status" :is="_status" v-bind="statusOptions" @refresh="emitRefresh"></component>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  // import {history} from '../tkHistory/history'
  import tkSmoothScrollbar from 'tk-smooth-scrollbar'
  import 'tk-smooth-scrollbar/dist/smooth-scrollbar.css'
  import statusBar from '../tkStatusBar/tkStatusBar.vue'
  import tkCover from '../tkCover/tkCover.vue'
  import manager from './manager'
  import ua from '../../utils/tkUa'
  import loading from '../tkLoading/tkLoading.vue'
  import empty from './empty.vue'
  import error from './error.vue'

  export default {
    name: 'TkContainer',
    data: function () {
      return {
        intance: null,
        portals: [],
        isFullScreen: false,
        isListenResize: false,
        infiniteScrollStatus: 'ready',
        page: 0,
        inContainer: false,
        showBody: true
      }
    },
    computed: {
      _mobileView: function () {
        return this.mobileView === null ? manager.mobileView : this.mobileView
      },
      _status: function () {
        if (typeof this.status !== 'string') return false
        return this.$options.components[this.status] ? this.status : 'loading'
      },
      statusOptions: function () {
        if (this.status === 'loading') {
          return manager.loadingOptions
        }
        return {}
      },
      defaultOverscrollEffect () {
        if (ua.isAndorid) {
          return 'glow'
        } else if (ua.isIos) {
          return 'bounce'
        } else {
          return false
        }
      },
      options () {
        return {
          overscrollEffect: this.overscrollEffect ? this.overscrollEffect : this.defaultOverscrollEffect,
          noWrapHtml: true
        }
      },
      hasLoading () {
        return this.$options.components.loading && this.loading
      },
      hasError () {
        return this.$options.components.error && this.error
      }
    },
    created () {
      for (let i in manager.status) {
        this.$options.components[i] = manager.status[i]
      }
      let container = this.findContainer(this)
      if (container) {
        this.inContainer = true
      }
    },
    mounted () {
      this.init()
    },
    activated () {
      this.init()
    },
    beforeDestroy () {
      this.destroy()
    },
    methods: {
      infiniteScrollHandler: function () {
        if (!this.infiniteScroll) return
        if (this.infiniteScrollStatus === 'ready') {
          this.infiniteScrollStatus = 'onLoading'
          this.$emit('loadingMore', this.page, this.loadingMoreCallback)
        }
      },
      loadingMoreCallback: function (next) {
        if (next === 'complete') {
          this.infiniteScrollStatus = 'complete'
          this.page++
          return
        }
        if (typeof next === 'number') {
          this.page = next
        } else if (next === '+1') {
          this.page++
        }
        this.infiniteScrollStatus = 'ready'
      },
      handleResize: function () {
        if (ua.isClient) {
          if (window.innerWidth === this.$el.clientWidth && window.innerHeight === this.$el.clientHeight) {
            this.isFullScreen = true
          }
        }
      },
      emitRefresh: function (value) {
        this.$emit('refresh', value)
      },
      init: function () {
        this.showBody = true
        if (!this.disableScroll && !this.intance) {
          this.intance = tkSmoothScrollbar.init(this.$refs.body, this.options)
          this.intance.addListener((status) => this.scrollHandler(status))
          if (this.infiniteScroll) {
            this.infiniteScrollHandler()
            this.intance.infiniteScroll(this.infiniteScrollHandler, 100)
          }
        }
        if (this._mobileView && ua.isClient && !this.isListenResize) {
          this.handleResize()
          window.addEventListener('resize', this.handleResize)
          this.isListenResize = true
        }
      },
      destroy: function () {
        if (this.intance) {
          this.intance.destroy()
          this.intance = null
        }
        window.removeEventListener('resize', this.handleResize)
        this.isListenResize = false
      },
      scrollHandler (status) {
        if (status) {
          this.$emit('scroll', status.offset.y)
        }
      },
      getScrollTop () {
        return this.intance ? this.intance.scrollTop : this.$refs.body.scrollTop
      },
      scrollTo (top) {
        if (this.intance) {
          this.intance.scrollTo(0, parseInt(top), 280)
        } else {
          this.$refs.body.scrollTop = top
        }
      },
      setPosition (top) {
        if (this.intance) {
          this.intance.setPosition(1024, parseInt(top))
        } else {
          this.$refs.body.scrollTop = top
        }
      },
      scrollIntoView (dom) {
        if (typeof dom === 'string') {
          dom = this.$el.querySelector(dom)
        }
        if (this.intance) {
          this.intance.scrollIntoView(dom)
        }
      },
      findContainer: function (vm) {
        if (!vm.$parent) {
          return null
        }
        if (vm.$parent.$options.name === 'TkContainer') {
          return vm.$parent
        } else {
          return this.findContainer(vm.$parent)
        }
      },
      containerHandler: function (options) {
        options.containerHandler = true
        return options
      },
      addPortal: function (id) {
        this.portals.push(id)
      }
    },
    props: {
      hideStatusBar: Boolean,
      statusBar: Object,
      disableScroll: Boolean,
      center: Boolean,
      overscrollEffect: [String, Boolean],
      status: [String, Boolean],
      infiniteScroll: Boolean,
      mobileView: {
        type: Boolean,
        default: null
      }
    },
    components: {
      'tk-cover': tkCover,
      'status-bar': statusBar,
      empty,
      loading,
      'tk-loading': loading,
      error
    }
  }
</script>
<style lang="scss" src="./tkContainer.scss"></style>
