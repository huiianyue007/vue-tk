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
/******/ 	return __webpack_require__(__webpack_require__.s = 310);
/******/ })
/************************************************************************/
/******/ ({

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_tkCover_vue__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_tkCover_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_tkCover_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_539dd776_hasScoped_true_node_modules_vue_loader_lib_selector_type_template_index_0_tkCover_vue__ = __webpack_require__(185);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(180)
  __webpack_require__(181)
}
var normalizeComponent = __webpack_require__(3)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-539dd776"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_tkCover_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_539dd776_hasScoped_true_node_modules_vue_loader_lib_selector_type_template_index_0_tkCover_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\tkCover\\tkCover.vue"
if (Component.esModule && Object.keys(Component.esModule).some((function (key) {return key !== "default" && key.substr(0, 2) !== "__"}))) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] tkCover.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-539dd776", Component.options)
  } else {
    hotAPI.reload("data-v-539dd776", Component.options)
  }
  module.hot.dispose((function (data) {
    disposed = true
  }))
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 180:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 181:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 182:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _empty = __webpack_require__(183);

var _empty2 = _interopRequireDefault(_empty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'tk-cover',
  data: function data() {
    return {
      name: 'empty',
      inContainer: false,
      isShow: this.show,
      container: null
    };
  },
  mounted: function mounted() {
    if (this.containerHandler) return;
    var container = this.findContainer(this);
    if (container) {
      this.name = 'portal';
      this.container = container;
      this.container.addPortal(String(this._uid));
    }
  },
  computed: {
    transitionName: function transitionName() {
      if (!this.transition) return null;
      var name = 'scale';
      if (this.top) {
        name = 'top';
      } else if (this.bottom) {
        name = 'bottom';
      } else if (this.left) {
        name = 'left';
      } else if (this.right) {
        name = 'right';
      }
      return name;
    },
    backdropTransitionName: function backdropTransitionName() {
      return this.transition ? 'fade' : null;
    },
    backdropStyle: function backdropStyle() {
      return {
        'background-color': this.color,
        'pointer-events': 'none'
      };
    },
    style: function style() {
      var justifyContent = 'center';
      if (this.left) {
        justifyContent = 'flex-start';
      } else if (this.center) {
        justifyContent = 'center';
      } else if (this.right) {
        justifyContent = 'flex-end';
      }

      var alignItems = 'center';
      if (this.top) {
        alignItems = 'flex-start';
      } else if (this.middle) {
        alignItems = 'center';
      } else if (this.bottom) {
        alignItems = 'flex-end';
      }
      return {
        'justify-content': justifyContent,
        'align-items': alignItems,
        'pointer-events': this.through ? 'none' : 'auto'
      };
    }
  },
  props: {
    through: Boolean,
    top: Boolean,
    middle: Boolean,
    bottom: Boolean,
    left: Boolean,
    center: Boolean,
    right: Boolean,
    show: Boolean,
    transition: Boolean,
    color: String,
    hideOnClick: {
      type: Boolean,
      default: true
    },
    containerHandler: Boolean
  },
  watch: {
    show: function show() {
      this.isShow = this.show;
    }
  },
  methods: {
    autoHide: function autoHide(e) {
      if (e.target !== this.$refs.cover) return;
      if (this.hideOnClick) {
        this.isShow = false;
        this.$emit('change', false);
        this.$emit('update:show', false);
      }
    },
    findContainer: function findContainer(vm) {
      if (!vm.$parent) {
        return null;
      }
      if (vm.$parent.$options.name === 'TkContainer') {
        var container = vm.$parent;
        if (container.$refs.body.contains(this.$el)) {
          return container;
        } else {
          return null;
        }
      } else {
        return this.findContainer(vm.$parent);
      }
    }
  },
  components: {
    empty: _empty2.default
  }
}; //
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

module.exports = exports['default'];

/***/ }),

/***/ 183:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_empty_vue__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_empty_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_empty_vue__);
var disposed = false
var normalizeComponent = __webpack_require__(3)
/* script */

/* template */
var __vue_template__ = null
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_empty_vue___default.a,
  __vue_template__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\tkCover\\empty.vue"
if (Component.esModule && Object.keys(Component.esModule).some((function (key) {return key !== "default" && key.substr(0, 2) !== "__"}))) {console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-920eb37a", Component.options)
  } else {
    hotAPI.reload("data-v-920eb37a", Component.options)
  }
  module.hot.dispose((function (data) {
    disposed = true
  }))
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 184:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  render: function render(h) {
    return this.$slots.default[0];
  }
};
module.exports = exports["default"];

/***/ }),

/***/ 185:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(_vm.name, { tag: "component", attrs: { to: String(_vm._uid) } }, [
    _c(
      "div",
      { staticClass: "cover-wrap" },
      [
        _c("transition", { attrs: { name: _vm.transitionName } }, [
          this.isShow
            ? _c(
                "div",
                {
                  ref: "cover",
                  staticClass: "tk-cover",
                  style: _vm.style,
                  on: { click: _vm.autoHide }
                },
                [_vm._t("default")],
                2
              )
            : _vm._e()
        ]),
        _vm._v(" "),
        _c("transition", { attrs: { name: _vm.backdropTransitionName } }, [
          this.isShow
            ? _c("span", { staticClass: "backdrop", style: _vm.backdropStyle })
            : _vm._e()
        ])
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-539dd776", esExports)
  }
}

/***/ }),

/***/ 251:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.install = exports.default = undefined;

var _tkToast = __webpack_require__(252);

var _tkToast2 = _interopRequireDefault(_tkToast);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var install = function install(Vue) {
  Vue.component('tk-toast', Vue.extend(_tkToast2.default));
};
_tkToast2.default.install = install;
exports.default = _tkToast2.default;
exports.install = install;

/***/ }),

/***/ 252:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_tkToast_vue__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_tkToast_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_tkToast_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_20b57c56_hasScoped_true_node_modules_vue_loader_lib_selector_type_template_index_0_tkToast_vue__ = __webpack_require__(255);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(253)
}
var normalizeComponent = __webpack_require__(3)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-20b57c56"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_tkToast_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_20b57c56_hasScoped_true_node_modules_vue_loader_lib_selector_type_template_index_0_tkToast_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\tkToast\\tkToast.vue"
if (Component.esModule && Object.keys(Component.esModule).some((function (key) {return key !== "default" && key.substr(0, 2) !== "__"}))) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] tkToast.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-20b57c56", Component.options)
  } else {
    hotAPI.reload("data-v-20b57c56", Component.options)
  }
  module.hot.dispose((function (data) {
    disposed = true
  }))
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 253:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 254:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _tkCover = __webpack_require__(108);

var _tkCover2 = _interopRequireDefault(_tkCover);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'TkToast',
  data: function data() {
    return {
      cover: {
        through: true,
        color: 'transparent',
        show: true,
        bottom: true
      },
      list: [],
      hiddenTimeId: null
    };
  },
  methods: {
    add: function add(message) {
      var _this = this;

      var id = Date.now();
      this.list.push({
        message: message,
        id: id
      });
      setTimeout((function () {
        var index = _this.list.findIndex((function (element) {
          return element.id === id;
        }));
        if (index >= 0) {
          _this.list.splice(index, 1);
        }
      }), 2000);
    }
  },
  components: {
    tkCover: _tkCover2.default
  }
}; //
//
//
//
//
//
//
//

module.exports = exports['default'];

/***/ }),

/***/ 255:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "tk-cover",
    _vm._b({}, "tk-cover", _vm.cover, false),
    [
      _c(
        "transition-group",
        { staticClass: "toast-wrap", attrs: { name: "toast-complete" } },
        _vm._l(_vm.list, (function(item) {
          return _c("div", { key: item.id, staticClass: "tk-toast" }, [
            _vm._v(_vm._s(item.message))
          ])
        }))
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
     require("vue-hot-reload-api").rerender("data-v-20b57c56", esExports)
  }
}

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

/***/ 310:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(251);


/***/ })

/******/ });
}));