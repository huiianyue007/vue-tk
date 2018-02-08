(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["vue-tk"] = factory();
	else
		root["vue-tk"] = factory();
})(this, (function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 293);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(10)((function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
}));


/***/ }),

/***/ 10:
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ 13:
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(14);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ 14:
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ 15:
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ 16:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty = __webpack_require__(29);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  defineProperty: function defineProperty(name, js, Vue) {
    if (!Vue.prototype[name]) {
      (0, _defineProperty2.default)(Vue.prototype, name, {
        configurable: true,
        get: function get() {
          return js;
        }
      });
    }
  }
};
module.exports = exports["default"];

/***/ }),

/***/ 17:
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(5);
var document = __webpack_require__(0).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ 18:
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(5);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ 2:
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.1' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ 20:
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(1) && !__webpack_require__(10)((function () {
  return Object.defineProperty(__webpack_require__(17)('div'), 'a', { get: function () { return 7; } }).a != 7;
}));


/***/ }),

/***/ 29:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(30), __esModule: true };

/***/ }),

/***/ 293:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(294);


/***/ }),

/***/ 294:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.install = exports.default = undefined;

var _tkShare = __webpack_require__(295);

var _tkShare2 = _interopRequireDefault(_tkShare);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var install = function install(Vue) {
  Vue.component('tk-share', Vue.extend(_tkShare2.default));
};
_tkShare2.default.install = install;
exports.default = _tkShare2.default;
exports.install = install;

/***/ }),

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_tkShare_vue__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_tkShare_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_tkShare_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5b8e7fc6_hasScoped_true_node_modules_vue_loader_lib_selector_type_template_index_0_tkShare_vue__ = __webpack_require__(300);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(296)
}
var normalizeComponent = __webpack_require__(3)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-5b8e7fc6"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_tkShare_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5b8e7fc6_hasScoped_true_node_modules_vue_loader_lib_selector_type_template_index_0_tkShare_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\tkShare\\tkShare.vue"
if (Component.esModule && Object.keys(Component.esModule).some((function (key) {return key !== "default" && key.substr(0, 2) !== "__"}))) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] tkShare.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5b8e7fc6", Component.options)
  } else {
    hotAPI.reload("data-v-5b8e7fc6", Component.options)
  }
  module.hot.dispose((function (data) {
    disposed = true
  }))
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 296:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 297:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(16);

var _iconfont = __webpack_require__(298);

var _iconfont2 = _interopRequireDefault(_iconfont);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//

if (!_index.isServer) {
  __webpack_require__(299);
}
exports.default = {
  data: function data() {
    return {
      popupVisible: false,
      shareBts: [],
      wrap: false
    };
  },
  created: function created() {
    this.$tkIcon.setCtoken('eLkKa0rDXXPcLJKSKD9orX_BDeri6fQoyQCovDC6TNu8EH4tx-WAH02HRhAyokNNIOWvUVprT1KQ10wQir2ycMucl0IbKzlMKOsSaHAlfq4Vtpn0ShjkDqpPelcEnJC296tVVMpMF5erj42oZWu37ZRiiZf4zUhp7W-Gt2DzlgdLKSczIY4u_NSzamoxUMp2fCJBlOhhIscQpxa6S81XA_ebDIw9tDCPLinHdSFCNQRGRMY_96J2qPcJB6g6GyXH6uAdnPqF68TMf98PS8zL81dFFTdSF8wVFU5boyXwLHXJeS__d8KYhOjL52zltz1zGFePUIfY079K29pV_3rCGSpHYPf-DmqAReiyZxOaTFNyZt5Y0-KbdAa-QEHd0DGGXrP3bf-YTyY2KtY-qKTjqsVBK15o4bVuEmxqWgYHZsRSFewW3FTJmKCO4-tdMai_TCp4UH0eiF1gN6sdojNAkAzIXf8sw00f8B46V9p-XuNpWu1kKj66c8RYyFA7rLA1N_gyZdduprryLZr13JSAktTvYvKqLpkvg9AbXKwN0kOyqx98u-INAe-DfWC7ogmD51Bx690GBTEVh1O0BKSE7b07_b7Y7LL7TI3DnxU1phHiw_IG6fuIrr57urd0aLdUhnuj34IKHvA9QMwN_DH4p4zEv7jvcwRF_xUpffqxHEapi4oMMa8hFaEqTjDef0T2kKlkj3j0EvbFJ3R0O7DRT1K1eiYWsyTV813NG8Q-mZRC0VptmdxpRCfIpwgRMAlWAXdH4O-G1Reh-_nVxrvrXK43yn66TQ4uqYPXKynsXVknoKSsaM43W0McNzVO9wBMJOEPs9hr4aYcqFpSiV0qy6Vpy2lLtVUokuHIwppsCwS6g-lwkU9Hmt48M5SLFUZiC-15m4BaiCmaf-MSRMtWKpNKuYThb2D3vUNQvsBQZAhG0IHKbHiVgVlWFinhLxngvTKALClLcMwK_jIUpkv1vFThVGRnhmtlh_JwXFQsZIN3j8ppHaJFOKEdOxveWEU4Fd_kV15gmp63YoQZK2WYBdzM7TXyWKZW0R8QjJEE0SwI-Yc2XrMbiev-IZAHcJ67jna1AYnHZnCwgvHCk2dGUUCaR2LFaWFV9_ihMJRozo0JrWxu2UT-ul78wt2DA0tKP-JplXS9HiL3a7P3lhGVPNGpQfP38RyeHniBjXFufNsvbiHpjzyPwSujYsN9OR0qrq72Nk7chOnKJbqrJnNNXfqh-T9hfUTnifUKhKUtNqnA_8qsIbmV_oXUlS1VVjXY3dBK9CGHQXwpUCirUz1v3a5Ro02N6g-ig96-famykXNc_Usp1DDFCmB5e4-ReKYQK4kLIOkDM-m0aSXlfTFT3aHTC84_CD_Mq1ReN1Nsdlhzi--M17oye7qoaKvtLIjk');
    this.$tkIcon.set({
      tmallPrivate: {
        code: 225021,
        data: _iconfont2.default,
        type: 'private'
      }
    });
    this.init();
  },
  mounted: function mounted() {
    if (_index.isServer) return;
    var script = document.createElement('script');
    script.id = '-mob-share';
    script.src = 'http://f1.webshare.mob.com/code/mob-share.js';
    document.head.appendChild(script);
    this.$on('show', this.show);
    this.$on('hidden', this.hidden);
  },

  watch: {
    wrap: function wrap(val) {
      this.popupVisible = val;
    }
  },
  methods: {
    show: function show() {
      this.wrap = true;
    },
    hidden: function hidden() {
      this.wrap = false;
    },
    cancel: function cancel() {
      this.wrap = false;
      this.$emit('cancel');
    },
    init: function init() {
      var _this = this;

      if (this.$tkDetect.isPlus) {
        var shares = {};
        this.getServices().then((function (data) {
          data.forEach((function (item) {
            _this.shareOption.forEach((function (value) {
              if (value.id === 'weibo') {
                value.id = 'sinaweibo';
              }
              if (value.id === item.id) {
                shares[value.id] = item;
                for (var key in value) {
                  shares[item.id][key] = value[key];
                }
              } else if (value.id === 'pengyou') {
                shares['pengyou'] = {};
                for (var index in value) {
                  shares['pengyou'][index] = value[index];
                }
              }
            }));
          }));
          _this.shareShow(shares);
        }));
      } else {
        this.shareBts = this.shareOption;
      }
    },
    shareShow: function shareShow(data) {
      if (_index.isServer) return;
      var ss = data['weixin'];
      if (window.navigator.userAgent.indexOf('StreamApp') < 0 && window.navigator.userAgent.indexOf('qihoo') < 0 && ss && ss.nativeClient) {
        // 在360流应用中微信不支持分享图片
        ss.s = ss;
        ss.x = 'WXSceneSession';
        this.shareBts.push(ss);
        if (data['pengyou']) {
          ss = data['pengyou'];
          ss.s = data['weixin'];
          ss.x = 'WXSceneTimeline';
          this.shareBts.push(ss);
        }
      }
      ss = data['sinaweibo'];
      if (ss) {
        ss.s = ss;
        this.shareBts.push(ss);
      }
      ss = data['qq'];
      if (ss && ss.nativeClient) {
        ss.s = ss;
        this.shareBts.push(ss);
      }
      if (!this.shareBts.length) {
        window.plus.nativeUI.toast('未获取相应平台授权');
        this.popupVisible = false;
        this.$emit('cancel');
      }
    },
    shareAction: function shareAction(opt) {
      if (_index.isServer) return;
      if (!this.message) {
        window.plus.nativeUI.alert('发送内容不能为空');
        this.popupVisible = false;
        return;
      }
      if (this.$tkDetect.isPlus) {
        this.sharePlus(opt);
      } else {
        this.shareWeb(opt);
      }
    },
    shareWeb: function shareWeb(opt) {
      if (_index.isServer) return;
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
      });
      var alert = typeof opt.callback === 'function' ? opt.callback : window.alert;
      var req = window.mobShare(opt.id);
      if (opt.id === 'weixin' && !this.message.title) {
        req.send();
      } else if (!this.message.title) {
        if (opt.id === 'weibo') {
          req.send();
        } else {
          alert('请填写标题');
        }
      } else if (!this.message.href) {
        alert('请填写分享链接');
      } else {
        req.send();
      }
    },
    sharePlus: function sharePlus(opt) {
      var _this2 = this;

      if (_index.isServer) return;
      var msg = { content: this.message.content, extra: { scene: opt.x } };
      if (this.message.href) {
        msg.href = this.message.href;
        if (this.msg.title) {
          msg.title = this.message.title;
        }
        if (this.message.content) {
          msg.content = this.message.content;
        }
      }
      if (this.message.image) {
        msg.pictures = this.message.image;
      }
      if (opt.s.authenticated) {
        this.shareMessage(msg, opt.s);
      } else {
        opt.s.authorize((function () {
          _this2.shareMessage(msg, opt.s);
        }), (function (e) {
          window.plus.nativeUI.toast('认证授权失败：' + e.code);
        }));
      }
    },
    shareMessage: function shareMessage(msg, opt) {
      if (_index.isServer) return;
      opt.send(msg, (function () {
        window.plus.nativeUI.toast('分享到\"' + opt.description + '\"成功！ ');
      }), (function (e) {
        window.plus.nativeUI.toast('分享到\"' + opt.description + '\"失败');
      }));
    },
    getServices: function getServices() {
      if (_index.isServer) return;
      return new window.Promise(function (success, error) {
        window.plus.share.getServices((function (data) {
          success(data);
        }), (function (er) {
          error(er);
        }));
      });
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
};
module.exports = exports['default'];

/***/ }),

/***/ 298:
/***/ (function(module, exports) {


/***/ }),

/***/ 299:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate
    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 30:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(31);
var $Object = __webpack_require__(2).Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      directives: [
        { name: "show", rawName: "v-show", value: _vm.wrap, expression: "wrap" }
      ],
      staticClass: "share",
      on: { click: _vm.cancel }
    },
    [
      _c(
        "tk-popup",
        {
          class: ["share_con", _vm.position],
          attrs: { position: _vm.position },
          model: {
            value: _vm.popupVisible,
            callback: function($$v) {
              _vm.popupVisible = $$v
            },
            expression: "popupVisible"
          }
        },
        [
          _c(
            "tk-flex",
            {
              staticClass: "share_ul",
              attrs: {
                middle: "",
                wrap: "",
                column: _vm.position == "left" || _vm.position == "right"
              }
            },
            _vm._l(_vm.shareBts, (function(item) {
              return _c(
                "div",
                {
                  class: [
                    _vm.position == "left" || _vm.position == "right"
                      ? "tk-grid-12"
                      : "tk-grid-2",
                    "share_list",
                    item.icon
                  ],
                  on: {
                    click: function($event) {
                      _vm.shareAction(item)
                    }
                  }
                },
                [
                  item.icon
                    ? _c(
                        "tk-icon",
                        {
                          staticClass: "icon",
                          attrs: {
                            type: item.iconType ? item.iconType : "tmallPrivate"
                          }
                        },
                        [_vm._v(_vm._s(item.icon))]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  item.icon
                    ? _c("p", { staticClass: "share_title" }, [
                        _vm._v(_vm._s(item.title))
                      ])
                    : _vm._t(item.html)
                ],
                2
              )
            }))
          ),
          _vm._v(" "),
          _vm._t("cancel", [
            _c(
              "div",
              {
                staticClass: "share_cancel",
                on: {
                  click: function($event) {
                    $event.stopPropagation()
                    _vm.cancel($event)
                  }
                }
              },
              [_vm._v("取消")]
            )
          ])
        ],
        2
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-5b8e7fc6", esExports)
  }
}

/***/ }),

/***/ 31:
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(8);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(1), 'Object', { defineProperty: __webpack_require__(4).f });


/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(6);
var IE8_DOM_DEFINE = __webpack_require__(20);
var toPrimitive = __webpack_require__(18);
var dP = Object.defineProperty;

exports.f = __webpack_require__(1) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ 5:
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(5);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var core = __webpack_require__(2);
var ctx = __webpack_require__(13);
var hide = __webpack_require__(9);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && key in exports) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ 9:
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(4);
var createDesc = __webpack_require__(15);
module.exports = __webpack_require__(1) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ })

/******/ });
}));