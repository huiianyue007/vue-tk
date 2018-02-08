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
/******/ 	return __webpack_require__(__webpack_require__.s = 303);
/******/ })
/************************************************************************/
/******/ ({

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

/***/ 303:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(304);


/***/ }),

/***/ 304:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.install = exports.default = undefined;

var _tkSticky = __webpack_require__(305);

var _tkSticky2 = _interopRequireDefault(_tkSticky);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var install = function install(Vue) {
  Vue.component('tk-sticky', Vue.extend(_tkSticky2.default));
};
_tkSticky2.default.install = install;
exports.default = _tkSticky2.default;
exports.install = install;

/***/ }),

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_tkSticky_vue__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_tkSticky_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_tkSticky_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_48c0c318_hasScoped_true_node_modules_vue_loader_lib_selector_type_template_index_0_tkSticky_vue__ = __webpack_require__(309);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(306)
}
var normalizeComponent = __webpack_require__(3)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-48c0c318"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_tkSticky_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_48c0c318_hasScoped_true_node_modules_vue_loader_lib_selector_type_template_index_0_tkSticky_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\tkSticky\\tkSticky.vue"
if (Component.esModule && Object.keys(Component.esModule).some((function (key) {return key !== "default" && key.substr(0, 2) !== "__"}))) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] tkSticky.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-48c0c318", Component.options)
  } else {
    hotAPI.reload("data-v-48c0c318", Component.options)
  }
  module.hot.dispose((function (data) {
    disposed = true
  }))
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 306:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 307:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mixin = __webpack_require__(308);

var _mixin2 = _interopRequireDefault(_mixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  props: {
    top: {
      type: Number,
      default: 0
    },
    force: Boolean
  },
  data: function data() {
    return {
      stickSupport: this.stickSupportCheck(),
      replaceBlock: null,
      onSticky: false,
      onScrollToDisappear: false,
      scrollTarget: null,
      style: this.defaultStyle()
    };
  },

  methods: {
    defaultStyle: function defaultStyle() {
      var style = {};
      style.top = this.top + 'px';
      return style;
    },
    build: function build() {
      if (this.stickSupport) {
        this.style = this.defaultStyle();
      } else {
        var style = {
          position: 'absolute',
          width: this.replaceBlock.offsetWidth + 'px'
        };
        if (!this.onSticky) {
          style.top = this.replaceBlock.offsetTop + 'px';
          this.style = style;
          this.$nextTick((function () {
            this.updateReplaceBlock();
          }));
          return;
        }
        if (!this.onScrollToDisappear) {
          var rect = this.$el.getBoundingClientRect();
          style.left = rect.left + 'px';
          style.position = 'fixed';
          if (this.scrollTarget === window) {
            style.top = this.top + 'px';
          } else {
            var scrollRect = this.scrollTarget.getBoundingClientRect();
            style.top = scrollRect.top + this.top + 'px';
          }
        } else {
          style.top = this.$el.parentNode.offsetTop + this.$el.parentNode.offsetHeight - this.$el.offsetHeight + 'px';
        }
        this.style = style;
        this.$nextTick((function () {
          this.updateReplaceBlock();
        }));
      }
    },
    resizeHandle: function resizeHandle() {
      if (!this.replaceBlock) {
        return;
      }
      if (!this.isElementInViewport(this.$el.parentNode)) {
        this.onSticky = false;
        this.onScrollToDisappear = false;
        this.build();
        return;
      }
      var el = this.getRelatedScrollElement(this.$el.parentNode);
      if (el === null) {
        this.onSticky = false;
        this.onScrollToDisappear = false;
        this.build();
        return;
      }
      this.scrollTarget = el;
      var baseDome = this.replaceBlock;
      var parent = this.$el.parentNode;
      var scrollRectTop = el === window ? 0 : el.getBoundingClientRect().top;
      var baseRect = baseDome.getBoundingClientRect();
      var parentRect = parent.getBoundingClientRect();
      if (baseRect.top + this.top <= scrollRectTop && parentRect.bottom - this.$el.offsetHeight > scrollRectTop) {
        this.onSticky = true;
        this.onScrollToDisappear = false;
      } else if (parentRect.bottom - this.$el.offsetHeight <= scrollRectTop) {
        this.onSticky = true;
        this.onScrollToDisappear = true;
      } else {
        this.onSticky = false;
        this.onScrollToDisappear = false;
      }
      this.build();
    },
    getRelatedScrollElement: function getRelatedScrollElement(el) {
      if (isServer) return;
      if (!el.tagName) {
        return window;
      }
      var style = window.getComputedStyle(el);
      if (style.overflowY === 'hidden') {
        return null;
      }
      if (style.overflowY === 'auto' || style.overflowY === 'scroll') {
        return el;
      }
      return this.getRelatedScrollElement(el.parentNode);
    },
    stickSupportCheck: function stickSupportCheck() {
      if (isServer) return;
      if (this.force) {
        return false;
      }
      if (typeof this.getGlobalData('stickSupport') !== 'undefined') {
        return this.getGlobalData('stickSupport');
      }

      var prefixes = ['', '-webkit-', '-moz-', '-ms-'];
      var block = document.createElement('div');
      var stickSupport = false;

      for (var i = prefixes.length - 1; i >= 0; i--) {
        try {
          block.style.position = prefixes[i] + 'sticky';
        } catch (e) {}
        if (block.style.position !== '') {
          stickSupport = true;
          break;
        }
      }

      this.setGlobalData('stickSupport', stickSupport);
      return stickSupport;
    },

    setReplaceBlock: function setReplaceBlock() {
      if (isServer) return;
      if (!this.replaceBlock && this.$el) {
        var dom = this.$el.previousSibling;
        if (dom !== null && dom.getAttribute('class') === 'sticky-replace-block') {
          this.replaceBlock = dom;
        } else {
          var block = document.createElement('div');
          block.setAttribute('class', 'sticky-replace-block');
          this.$el.parentNode.insertBefore(block, this.$el);
          this.replaceBlock = block;
        }
      }
    },
    updateReplaceBlock: function updateReplaceBlock() {
      this.replaceBlock.style.height = this.$el.offsetHeight + 'px';
    },
    removeReplaceBlock: function removeReplaceBlock() {
      if (this.replaceBlock) {
        this.replaceBlock.parentNode.removeChild(this.replaceBlock);
        this.replaceBlock = null;
      }
    },
    isElementInViewport: function isElementInViewport(el) {
      if (isServer) return;
      var rect = el.getBoundingClientRect();
      var isOut = rect.left > window.innerWidth || rect.right - rect.width < 0 || rect.top > window.innerHeight || rect.bottom < 0;
      return !isOut;
    },
    bindEvent: function bindEvent() {
      if (isServer) return;
      if (!this.getGlobalData('registerMutationObserver')) {
        var event = new window.CustomEvent('documentChange');
        var MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
        var observer = new MutationObserver(function () {
          window.dispatchEvent(event);
        });
        var config = { attributes: true, childList: true, characterData: true, subtree: true };
        observer.observe(document, config);
        this.setGlobalData('registerMutationObserver', true);
      }
      window.addEventListener('scroll', this.resizeHandle, true);
      window.addEventListener('resize', this.resizeHandle, true);
      window.addEventListener('documentChange', this.resizeHandle, true);
    },
    removeEvent: function removeEvent() {
      if (isServer) return;
      window.removeEventListener('scroll', this.resizeHandle, true);
      window.removeEventListener('resize', this.resizeHandle, true);
      window.removeEventListener('documentChange', this.resizeHandle, true);
    }
  },
  mounted: function mounted() {
    if (!this.stickSupport) {
      this.setReplaceBlock();
      this.build();
      this.bindEvent();
    }
  },
  updated: function updated() {
    if (!this.stickSupport && this.replaceBlock) {
      this.setReplaceBlock();
      this.build();
    }
  },
  activated: function activated() {
    if (!this.stickSupport) {
      this.setReplaceBlock();
      this.build();
      this.bindEvent();
    }
  },
  deactivated: function deactivated() {
    if (!this.stickSupport) {
      this.removeReplaceBlock();
      this.removeEvent();
      this.style = {};
    }
  },
  beforeDestroy: function beforeDestroy() {
    if (!this.stickSupport) {
      this.removeReplaceBlock();
      this.removeEvent();
      this.style = {};
    }
  },

  mixins: [_mixin2.default]
}; //
//
//
//
//

module.exports = exports['default'];

/***/ }),

/***/ 308:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var dataBus = {};

exports.default = {
  beforeCreate: function beforeCreate() {
    var name = this.$options.name;
    if (!dataBus[name]) {
      dataBus[name] = {};
    }
  },
  methods: {
    getGlobalData: function getGlobalData(name) {
      return dataBus[this.$options.name][name];
    },
    setGlobalData: function setGlobalData(name, value) {
      dataBus[this.$options.name][name] = value;
    }
  }
};
module.exports = exports["default"];

/***/ }),

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "tk-sticky", style: _vm.style },
    [_vm._t("default")],
    2
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-48c0c318", esExports)
  }
}

/***/ })

/******/ });
}));