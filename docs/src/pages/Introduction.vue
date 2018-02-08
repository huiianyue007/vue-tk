<template>
  <page-content page-title="说明">
    <div class="main-content">
      <article>
        <section>
          <h2 class="md-headline">使用方法</h2>
          <code-block lang="javascript">
            // 引入组件css文件
            import 'vue-tk/dist/vue-tk.css'
            //全局引入所有组件
            import Vue from 'vue'
            import VueTk from 'vue-tk'
            Vue.use(VueTk)
            //单独引用组件参考目标组件文档，css文件必须全部引入
          </code-block>
        </section>
      </article>
      <section>
        <h2 class="md-headline">
          v0.7.14 - 更新说明
        </h2>
        <h3 class="md-title">组件调整:</h3>
        <ul>
          <li>修正tk-parse的where条件格式化问题</li>
        </ul>
      </section>
      <section>
        <h2 class="md-headline">
          v0.7.13 - 更新说明
        </h2>
        <h3 class="md-title">组件调整:</h3>
        <ul>
          <li>修正一个tk-parse问题</li>
        </ul>
      </section>
      <section>
        <h2 class="md-headline">
          v0.7.12 - 更新说明
        </h2>
        <h3 class="md-title">组件调整:</h3>
        <ul>
          <li>tk-parse不再使用proxy，可以在低版本浏览器运行</li>
          <li>tk-global设置global方式调整，解决vue依赖不同的问题</li>
        </ul>
      </section>
      <section>
        <h2 class="md-headline">
          v0.7.11 - 更新说明
        </h2>
        <h3 class="md-title">组件调整:</h3>
        <ul>
          <li>tk-history在第一页加载时去除翻页效果</li>
        </ul>
      </section>
      <section>
        <h2 class="md-headline">
          v0.7.10 - 更新说明
        </h2>
        <h3 class="md-title">组件调整:</h3>
        <ul>
          <li>调整了tk-history的切换速度</li>
          <li>调整了tk-flex的均分实现</li>
        </ul>
      </section>
      <section>
        <h2 class="md-headline">
          v0.7.9 - 更新说明
        </h2>
        <h3 class="md-title">组件调整:</h3>
        <ul>
          <li>调整了tk-toast的样式</li>
        </ul>
      </section>
      <section>
        <h2 class="md-headline">
          v0.7.8 - 更新说明
        </h2>
        <h3 class="md-title">组件调整:</h3>
        <ul>
          <li>调整了tk-toast的样式</li>
          <li>tkRouterAuth可以自定义url</li>
        </ul>
      </section>
      <section>
        <h2 class="md-headline">
          v0.7.6 - 更新说明
        </h2>
        <h3 class="md-title">组件调整:</h3>
        <ul>
          <li>修正tk-cover在tk-container中的表现</li>
          <li>tk-flex增加了full class</li>
        </ul>
      </section>
      <section>
        <h2 class="md-headline">
          v0.7.5 - 更新说明
        </h2>
        <h3 class="md-title">方法调整:</h3>
        <ul>
          <li>tk-parse不再强制传入appId</li>
        </ul>
      </section>
      <section>
        <h2 class="md-headline">
          v0.7.4 - 更新说明
        </h2>
        <h3 class="md-title">方法调整:</h3>
        <ul>
          <li>tk-parse现在可以正确解析where参数和include的返回值</li>
        </ul>
      </section>
      <section>
        <h2 class="md-headline">
          v0.7.3 - 更新说明
        </h2>
        <h3 class="md-title">方法调整:</h3>
        <ul>
          <li>添加tk-parse</li>
        </ul>
      </section>
      <section>
        <h2 class="md-headline">
          v0.7.2 - 更新说明
        </h2>
        <h3 class="md-title">方法调整:</h3>
        <ul>
          <li>去除tk-bmob</li>
        </ul>
      </section>
      <section>
        <h2 class="md-headline">
          v0.7.1 - 更新说明
        </h2>
        <h3 class="md-title">全局调整:</h3>
        <ul>
          <li>tk-ajax添加create方法</li>
          <li>tk-cover现在可以正确使用动画</li>
        </ul>
      </section>
      <section>
        <h2 class="md-headline">
          v0.7.0 - 更新说明
        </h2>
        <h3 class="md-title">全局调整:</h3>
        <ul>
          <li>vue-tk现在可以在服务器端运行</li>
          <li>去除了大量无用依赖和低版本兼容性扩展</li>
          <li>去除了tkDetect</li>
          <li>去除了tkViewer</li>
          <li>去除了tkSticky</li>
        </ul>
      </section>
      <section>
        <h2 class="md-headline">
          v0.6.9 - 更新说明
        </h2>
        <h3 class="md-title">方法调整:</h3>
        <ul>
          <li>tkFile可以直接返回文件的arrayBuffer</li>
        </ul>
      </section>
      <section>
        <h2 class="md-headline">
          v0.6.8 - 更新说明
        </h2>
        <h3 class="md-title">组件调整:</h3>
        <ul>
          <li>tkHistory更改页面切换动画实现方式</li>
        </ul>
      </section>
      <section>
        <h2 class="md-headline">
          v0.6.7 - 更新说明
        </h2>
        <h3 class="md-title">组件调整:</h3>
        <ul>
          <li>添加tkToast</li>
          <li>添加tkGlobal</li>
          <li>添加tkContainer的切换延时效果</li>
        </ul>
      </section>
      <section>
        <h2 class="md-headline">
          v0.6.6 - 更新说明
        </h2>
        <h3 class="md-title">方法调整:</h3>
        <ul>
          <li>添加tkFile</li>
        </ul>
      </section>
      <section>
        <h2 class="md-headline">
          v0.6.4 - 更新说明
        </h2>
        <h3 class="md-title">组件调整:</h3>
        <ul>
          <li>为了页面切换动效流畅，tkContainer将延迟250ms显示内容</li>
        </ul>
      </section>
      <section>
        <h2 class="md-headline">
          v0.6.2 - 更新说明
        </h2>
        <h3 class="md-title">组件调整:</h3>
        <ul>
          <li>tkContainer延后scrollbar加载时间</li>
          <li>修正tkHistory动画效果</li>
          <li>修正tkHistory back错误</li>
        </ul>
      </section>
      <section>
        <h2 class="md-headline">
          v0.6.1 - 更新说明
        </h2>
        <h3 class="md-title">方法调整:</h3>
        <ul>
          <li>添加tkRouterAuth方法</li>
        </ul>
      </section>
      <section>
        <h2 class="md-headline">
          v0.6.0 - 更新说明
        </h2>
        <h3 class="md-title">组件调整:</h3>
        <ul>
          <li>添加tkHistory组件</li>
        </ul>
      </section>
      <section>
        <h2 class="md-headline">
          v0.5.15 - 更新说明
        </h2>
        <h3 class="md-title">方法调整:</h3>
        <ul>
          <li>tkBmob增加配置项notClasses</li>
          <li>tkBmob可以正确使用bmob短信api</li>
        </ul>
      </section>
      <section>
        <h2 class="md-headline">
          v0.5.14 - 更新说明
        </h2>
        <h3 class="md-title">方法调整:</h3>
        <ul>
          <li>不再去除tkBmob结果中的resultes层</li>
        </ul>
      </section>
      <section>
        <h2 class="md-headline">
          v0.5.13 - 更新说明
        </h2>
        <h3 class="md-title">结构调整:</h3>
        <ul>
          <li>所有组件和方法都可以在vue-tk中直接导出</li>
        </ul>
      </section>
      <section>
        <h2 class="md-headline">
          v0.5.12 - 更新说明
        </h2>
        <h3 class="md-title">方法调整:</h3>
        <ul>
          <li>tkBmob可以正确处理incloud</li>
          <li>tkBmob会自动去除结果中最外层的results</li>
        </ul>
      </section>
      <section>
        <h2 class="md-headline">
          v0.5.11 - 更新说明
        </h2>
        <h3 class="md-title">组件调整:</h3>
        <ul>
          <li>tkContaniner无限加载，创建时会自动加载一次，page从0开始</li>
          <li>tkBox添加背景图片api</li>
        </ul>
      </section>
      <section>
        <h2 class="md-headline">
          v0.5.10 - 更新说明
        </h2>
        <h3 class="md-title">组件调整:</h3>
        <ul>
          <li>tkContaniner嵌套时只显示最外层的状态栏</li>
        </ul>
      </section>
      <section>
        <h2 class="md-headline">
          v0.5.8 - 更新说明
        </h2>
        <h3 class="md-title">组件调整:</h3>
        <ul>
          <li>tkContaniner样式调整，允许嵌套</li>
          <li>tkContaniner增加mobileView props</li>
        </ul>
      </section>
      <section>
        <h2 class="md-headline">
          v0.5.7 - 更新说明
        </h2>
        <h3 class="md-title">组件调整:</h3>
        <ul>
          <li>优化tkContaniner滚动高度计算问题</li>
          <li>重写了无限加载的api，更加易用</li>
          <li>调整了小屏幕时的滚动条样式</li>
        </ul>
      </section>
      <section>
        <h2 class="md-headline">
          v0.5.6 - 更新说明
        </h2>
        <h3 class="md-title">组件调整:</h3>
        <ul>
          <li>优化tkContaniner重新加载机制</li>
          <li>tkContaniner添加无限加载功能</li>
        </ul>
      </section>
      <section>
        <h2 class="md-headline">
          v0.5.5 - 更新说明
        </h2>
        <h3 class="md-title">组件调整:</h3>
        <ul>
          <li>tkCover修正autoHide</li>
          <li>tkRegions优化</li>
          <li>tkSticky弃用</li>
        </ul>
      </section>
      <section>
        <h2 class="md-headline">
          v0.5.4 - 更新说明
        </h2>
        <h3 class="md-title">组件调整:</h3>
        <ul>
          <li>tkContainer添加默认error与empty页面</li>
          <li>tkContainer可以支持任意状态</li>
          <li>tkContainer状态属性status可以设置为bool类型</li>
        </ul>
      </section>
      <section>
        <h2 class="md-headline">
          v0.5.3 - 更新说明
        </h2>
        <h3 class="md-title">组件调整:</h3>
        <ul>
          <li>tkContainer原error与loading状态整合为status</li>
        </ul>
      </section>
      <section>
        <h2 class="md-headline">
          v0.5.2 - 更新说明
        </h2>
        <h3 class="md-title">组件调整:</h3>
        <ul>
          <li>tkContainer可以正确支持keep alive</li>
          <li>tkContainer添加了setPosition方法</li>
          <li>tkContainer添加了scrollIntoView方法</li>
        </ul>
      </section>
      <section>
        <h2 class="md-headline">
          v0.5.1 - 更新说明
        </h2>
        <h3 class="md-title">组件调整:</h3>
        <ul>
          <li>tkContainer可以支持动态滚动内容</li>
          <li>tkContainer添加了mobileView响应式显示</li>
        </ul>
      </section>
      <section>
        <h2 class="md-headline">
          v0.5.0 - 更新说明
        </h2>
        <h3 class="md-title">组件调整:</h3>
        <ul>
          <li>tkContainer更换了滚动引擎</li>
          <li>tkContainer中任何位置均可以使用tk-cover</li>
          <li>tkContainer添加了loading状态</li>
          <li>tkContainer添加了error状态</li>
        </ul>
        <h3 class="md-title">方法调整:</h3>
        <ul>
          <li>新增tkUa类，用来探测运行环境</li>
        </ul>
      </section>
      <section>
        <h2 class="md-headline">
          v0.4.12 - 更新说明
        </h2>
        <h3 class="md-title">方法调整:</h3>
        <ul>
          <li>vuexStorage去除了方法中的无用参数</li>
        </ul>
      </section>
      <section>
        <h2 class="md-headline">
          v0.4.11 - 更新说明
        </h2>
        <h3 class="md-title">方法调整:</h3>
        <ul>
          <li>tkAjaxGlobal.midware更名为midwares</li>
          <li>preMidware同上</li>
          <li>tkVuexStorage不再自动设置vuex</li>
        </ul>
      </section>
      <section>
        <h2 class="md-headline">
          v0.4.10 - 更新说明
        </h2>
        <h3 class="md-title">方法调整:</h3>
        <ul>
          <li>调整midware api</li>
        </ul>
      </section>
      <section>
        <h2 class="md-headline">
          v0.4.8 - 更新说明
        </h2>
        <h3 class="md-title">方法调整:</h3>
        <ul>
          <li>tkBmob支持自动include和自动改写objectId</li>
        </ul>
      </section>
      <section>
        <h2 class="md-headline">
          v0.4.7 - 更新说明
        </h2>
        <h3 class="md-title">方法调整:</h3>
        <ul>
          <li>修正tkBmob的一个语法错误</li>
        </ul>
      </section>
      <section>
        <h2 class="md-headline">
          v0.4.6 - 更新说明
        </h2>
        <h3 class="md-title">方法调整:</h3>
        <ul>
          <li>tkBmob增加用户和云逻辑相关方法</li>
        </ul>
      </section>
      <section>
        <h2 class="md-headline">
          v0.4.5 - 更新说明
        </h2>
        <h3 class="md-title">方法调整:</h3>
        <ul>
          <li>添加tkBmob方法</li>
        </ul>
      </section>
      <section>
        <h2 class="md-headline">
          v0.4.4 - 更新说明
        </h2>
        <h3 class="md-title">方法调整:</h3>
        <ul>
          <li>tkAjax添加前置中间件（perMidware)</li>
        </ul>
      </section>
      <section>
        <h2 class="md-headline">
          v0.4.3 - 更新说明
        </h2>
        <h3 class="md-title">方法调整:</h3>
        <ul>
          <li>tkAjaxGlobal.midware更名为tkAjaxGlobal.addMidware</li>
        </ul>
      </section>
      <section>
        <h2 class="md-headline">
          v0.4.2 - 更新说明
        </h2>
        <h3 class="md-title">方法调整:</h3>
        <ul>
          <li>修正tkAjax错误处理中间件</li>
        </ul>
      </section>
      <section>
        <h2 class="md-headline">
          v0.4.1 - 更新说明
        </h2>
        <h3 class="md-title">方法调整:</h3>
        <ul>
          <li>tkAjax可以设置不使用中间件</li>
          <li>tkAjax判断错误逻辑为>=200且<400</li>
        </ul>
      </section>
      <section>
        <h2 class="md-headline">
          v0.4.0 - 更新说明
        </h2>
        <h3 class="md-title">方法调整:</h3>
        <ul>
          <li>tkAjax添加中间件方法</li>
          <li>tkAjax返回的成功或错误格式都保持一致</li>
        </ul>
      </section>
      <section>
        <h2 class="md-headline">
          v0.3.40 - 更新说明
        </h2>
        <h3 class="md-title">方法调整:</h3>
        <ul>
          <li>tkVuexStorage设置cookie为永久</li>
        </ul>
      </section>
      <section>
        <h2 class="md-headline">
          v0.3.39 - 更新说明
        </h2>
        <h3 class="md-title">组件调整:</h3>
        <ul>
          <li>tk-container添加cover和body-cover</li>
        </ul>
      </section>
      <section>
        <h2 class="md-headline">
          v0.3.38 - 更新说明
        </h2>
        <h3 class="md-title">组件调整:</h3>
        <ul>
          <li>tk-loading添加height属性</li>
        </ul>
      </section>
      <section>
        <h2 class="md-headline">
          v0.3.36 - 更新说明
        </h2>
        <h3 class="md-title">组件调整:</h3>
        <ul>
          <li>tk-container在safari可以兼容body高度100%样式</li>
        </ul>
      </section>
      <section>
        <h2 class="md-headline">
          v0.3.35 - 更新说明
        </h2>
        <h3 class="md-title">组件调整:</h3>
        <ul>
          <li>tk-container添加disableBodyOverScroll方法</li>
        </ul>
      </section>
      <section>
        <h2 class="md-headline">
          v0.3.33 - 更新说明
        </h2>
        <h3 class="md-title">组件调整:</h3>
        <ul>
          <li>tk-ajax修正catch不能获取错误的问题</li>
        </ul>
      </section>
      <section>
        <h2 class="md-headline">
          v0.3.32 - 更新说明
        </h2>
        <h3 class="md-title">组件调整:</h3>
        <ul>
          <li>tk-cover使用scale动画时不再影响内部scale样式</li>
        </ul>
      </section>
      <section>
        <h2 class="md-headline">
          v0.3.31 - 更新说明
        </h2>
        <h3 class="md-title">组件调整:</h3>
        <ul>
          <li>tk-icon修正api,不再必需获取ctoken</li>
        </ul>
      </section>
      <section>
        <h2 class="md-headline">
          v0.3.30 - 更新说明
        </h2>
        <h3 class="md-title">组件调整:</h3>
        <ul>
          <li>tk-statusBar在plus环境下响应式设置高度</li>
        </ul>
      </section>
      <section>
        <h2 class="md-headline">
          v0.3.28 - 更新说明
        </h2>
        <h3 class="md-title">组件调整:</h3>
        <ul>
          <li>tk-statusBar组件增加了placeholder参数</li>
        </ul>
      </section>
      <section>
        <h2 class="md-headline">
          v0.3.27 - 更新说明
        </h2>
        <h3 class="md-title">组件调整:</h3>
        <ul>
          <li>tk-statusBar组件增加了option api</li>
        </ul>
      </section>
      <section>
        <h2 class="md-headline">
          v0.3.26 - 更新说明
        </h2>
        <h3 class="md-title">组件调整:</h3>
        <ul>
          <li>添加tk-container组件</li>
        </ul>
      </section>
      <section>
        <h2 class="md-headline">
          v0.3.25 - 更新说明
        </h2>
        <h3 class="md-title">组件调整:</h3>
        <ul>
          <li>tk-cover修正定位无效的问题</li>
        </ul>
      </section>
      <section>
        <h2 class="md-headline">
          v0.3.24 - 更新说明
        </h2>
        <h3 class="md-title">组件调整:</h3>
        <ul>
          <li>tk-box支持任意比例，嵌套，定位</li>
        </ul>
      </section>
      <section>
        <h2 class="md-headline">
          v0.3.23 - 更新说明
        </h2>
        <h3 class="md-title">组件调整:</h3>
        <ul>
          <li>tk-flex样式类名调整</li>
          <li>新增tk-box组件</li>
        </ul>
      </section>
      <section>
        <h2 class="md-headline">
          v0.3.22 - 更新说明
        </h2>
        <h3 class="md-title">组件调整:</h3>
        <ul>
          <li>tk-loading增加backgroundColor配置项</li>
        </ul>
      </section>
      <section>
        <h2 class="md-headline">
          v0.3.21 - 更新说明
        </h2>
        <h3 class="md-title">组件调整:</h3>
        <ul>
          <li>tk-flex增加between,around,stretch三个api</li>
        </ul>
      </section>
      <section>
        <h2 class="md-headline">
          v0.3.18 - v0.3.20 - 更新说明
        </h2>
        <h3 class="md-title">组件调整:</h3>
        <ul>
          <li>tk-status-bar临时解决plusready错误问题</li>
        </ul>
      </section>
      <section>
        <h2 class="md-headline">
          v0.3.17 - 更新说明
        </h2>
        <h3 class="md-title">组件调整:</h3>
        <ul>
          <li>tk-icon中默认风格更改为common</li>
          <li>修正了icon文档中的检索和历史重复的问题</li>
        </ul>
      </section>
      <section>
        <h2 class="md-headline">
          v0.3.16 - 更新说明
        </h2>
        <h3 class="md-title">组件调整:</h3>
        <ul>
          <li>tk-icon修正了iconfont中的两层svg标签</li>
        </ul>
        <h3 class="md-title">方法调整:</h3>
        <ul>
          <li>tk-ajax在错误处理中间件中加入了all来处理所有错误</li>
        </ul>
      </section>
      <section>
        <h2 class="md-headline">
          v0.3.15 - 更新说明
        </h2>
        <h3 class="md-title">组件调整:</h3>
        <ul>
          <li>tk-icon中的style props 更名为 mode</li>
        </ul>
      </section>
      <section>
        <h2 class="md-headline">
          v0.3.14 - 更新说明
        </h2>
        <h3 class="md-title">全局调整:</h3>
        <ul>
          <li>大幅减少了编译包的体积</li>
        </ul>
        <h3 class="md-title">组件调整:</h3>
        <ul>
          <li>暂时去除tkUpload</li>
          <li>暂时去除tkShare</li>
          <li>去除tkIcon中的ios图标库</li>
          <li>重构tkRegion</li>
        </ul>
      </section>
      <section>
        <h2 class="md-headline">
          v0.3.13 - 更新说明
        </h2>
        <h3 class="md-title">方法调整:</h3>
        <ul>
          <li>解决cookie同步的路径问题</li>
        </ul>
      </section>
      <section>
        <h2 class="md-headline">
          v0.3.10 - 更新说明
        </h2>
        <h3 class="md-title">方法调整:</h3>
        <ul>
          <li>tkAjax添加了中间件错误处理</li>
        </ul>
      </section>
      <section>
        <h2 class="md-headline">
          v0.3.9 - 更新说明
        </h2>
        <h3 class="md-title">其他调整:</h3>
        <ul>
          <li>解决了css打包错误问题</li>
        </ul>
      </section>
      <section>
        <h2 class="md-headline">
          v0.3.8 - 更新说明
        </h2>
        <h3 class="md-title">其他调整:</h3>
        <ul>
          <li>更改了tkAjax的打包方式，解决了ssr下使用报错问题</li>
        </ul>
      </section>
      <section>
        <h2 class="md-headline">
          v0.3.7 - 更新说明
        </h2>
        <h3 class="md-title">其他调整:</h3>
        <ul>
          <li>tkIcon的远程图标获取使用tkAjax</li>
        </ul>
      </section>
      <section>
        <h2 class="md-headline">
          v0.3.5 - 更新说明
        </h2>
        <h3 class="md-title">组件调整:</h3>
        <ul>
          <li>增加了tkCookie方法</li>
          <li>增加了tkVuexStorage方法</li>
        </ul>
        <h3 class="md-title">其他调整:</h3>
        <ul>
          <li>调整了所有组件的引入方式</li>
        </ul>
      </section>
      <section>
        <h2 class="md-headline">
          v0.3.4 - 更新说明
        </h2>
        <h3 class="md-title">组件调整:</h3>
        <ul>
          <li>去除了tkFlex组件的低版本兼容功能</li>
          <li>优化了tkAjax的结构</li>
        </ul>
        <h3 class="md-title">其他调整:</h3>
        <ul>
          <li>去除了大量无用依赖</li>
        </ul>
      </section>
      <section>
        <h2 class="md-headline">
          v0.3.3 - 更新说明
        </h2>
        <h3 class="md-title">组件调整:</h3>
        <ul>
          <li>添加了tkAjax方法</li>
        </ul>
      </section>
      <section>
        <h2 class="md-headline">
          v0.3.2 - 更新说明
        </h2>
        <h3 class="md-title">组件调整:</h3>
        <ul>
          <li>tk-cover组件重构</li>
          <li>tk-viewer组件重构</li>
          <li>删除了日历组件</li>
        </ul>
      </section>
      <section>
        <h2 class="md-headline">
          v0.3.1 - 更新说明
        </h2>
        <h3 class="md-title">组件调整:</h3>
        <ul>
          <li>tk-cover增加pass属性</li>
          <li>tk-shell修正ssr环境下报错</li>
        </ul>
      </section>
      <section>
        <h2 class="md-headline">
          v0.3.0 - 更新说明
        </h2>
        <h3 class="md-title">新增组件:</h3>
        <ul>
          <li>新增页面遮罩组件tk-cover</li>
        </ul>
        <h3 class="md-title">新增方法:</h3>
        <ul>
          <li>新增国内地区数据对象，用来检索显示地区数据，$tkRegions</li>
          <li>新增浏览器检测对象，$tkDetect</li>
        </ul>
      </section>
      <section>
        <h2 class="md-headline">
          v0.2.13 - 更新说明
        </h2>
        <h3 class="md-title">ssr兼容调整:</h3>
        <ul>
          <li>修正了变量重复赋值的问题</li>
        </ul>
      </section>
      <section>
        <h2 class="md-headline">
          v0.2.12 - 更新说明
        </h2>
        <h3 class="md-title">组件调整:</h3>
        <ul>
          <li>改善了icon展示页的ios风格展示效果</li>
          <li>tk-status-bar改用tk-sticky进行定位，去除了其中的setSpace方法</li>
        </ul>
      </section>
      <section>
        <h2 class="md-headline">
          v0.2.11 - 更新说明
        </h2>
        <h3 class="md-title">新增组件:</h3>
        <ul>
          <li>tk-sticky,粘性定位组件</li>
        </ul>
      </section>
      <section>
        <h2 class="md-headline">
          v0.2.9 -- 0.2.10 - 更新说明
        </h2>
        <h3 class="md-title">API调整:</h3>
        <p>许多组件都具有全局控制方法，为了更方便调用，更改了所有组件的单独引用方式，但依然兼容旧版用法。</p>
        <p>例如，全局状态栏管理，可以直接在组件内访问 <code>this.$tkStatusBar</code> 进行访问</p>
        <h3 class="md-title">组件调整:</h3>
        <ul>
          <li>tk-flex现在可以初步兼容支持安卓4.4以下，以及ie8到ie10。在部分情况下仍有样式不一致的情况，待测试调整。</li>
          <li>tk-icon默认增加了ios图标库</li>
        </ul>
      </section>
      <section>
        <h2 class="md-headline">
          v0.2.8 - 更新说明
        </h2>
        <h3 class="md-title">组件调整:</h3>
        <ul>
          <li>tk-icon去除了value传值方式，slots传值方式已支持动态改变</li>
        </ul>
      </section>
      <section>
        <h2 class="md-headline">
          v0.2.7 - 更新说明
        </h2>
        <h3 class="md-title">组件调整:</h3>
        <ul>
          <li>tk-icon现在可以在安卓4.4以下的手机上显示，所有图标的默认的大小都是24px</li>
          <li>tk-icon默认图标库改用svg显示，不再需要引入material-design-icons-iconfont的css文件</li>
          <li>tk-flex现在可以支持任意边距</li>
        </ul>

        <p>优化了文档在小屏幕上的宽度显示，方便浏览</p>
      </section>
    </div>
  </page-content>
</template>

<style lang="scss" scoped>
  .introduction {
    max-width: 960px;
    margin: 0 auto;
  }
  section{
    margin-top:32px;
  }
  .column {
    margin: 0 10px;
    flex: 1 1 30%;

    @media (max-width: 640px) {
      flex: 1 1 100%;
    }
  }
</style>
