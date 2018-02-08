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
/******/ 	return __webpack_require__(__webpack_require__.s = 287);
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

/***/ 219:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.install = exports.default = undefined;

var _tkFlex = __webpack_require__(220);

var _tkFlex2 = _interopRequireDefault(_tkFlex);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var install = function install(Vue) {
  Vue.component('tk-flex', Vue.extend(_tkFlex2.default));
};
_tkFlex2.default.install = install;
exports.default = _tkFlex2.default;
exports.install = install;

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_tkFlex_vue__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_tkFlex_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_tkFlex_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_736b22b4_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_tkFlex_vue__ = __webpack_require__(223);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(221)
}
var normalizeComponent = __webpack_require__(3)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_tkFlex_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_736b22b4_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_tkFlex_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\tkFlex\\tkFlex.vue"
if (Component.esModule && Object.keys(Component.esModule).some((function (key) {return key !== "default" && key.substr(0, 2) !== "__"}))) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] tkFlex.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-736b22b4", Component.options)
  } else {
    hotAPI.reload("data-v-736b22b4", Component.options)
  }
  module.hot.dispose((function (data) {
    disposed = true
  }))
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 221:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 222:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(16);

exports.default = {
  name: 'TkFlex',
  data: function data() {
    return {
      gutterList: [1, 2, 4, 8, 16, 24, 32, 40]
    };
  },
  computed: {
    classes: function classes() {
      var classes = {
        'tk-flex-row': !this.column,
        'tk-flex-column': this.column,
        'tk-flex-wrap': this.wrap,
        'tk-flex-top': this.top,
        'tk-flex-middle': this.middle,
        'tk-flex-bottom': this.bottom,
        'tk-flex-left': this.left,
        'tk-flex-center': this.center,
        'tk-flex-right': this.right,
        'tk-flex-between': this.between,
        'tk-flex-around': this.around,
        'tk-flex-stretch': this.stretch,
        'tk-flex-average': this.average,
        'wrap-gutter': this.wrapGutter
      };
      if (this.gutter) {
        var gutter = void 0;
        if (typeof this.gutter === 'string') {
          gutter = parseInt(this.gutter.replace('px', ''));
        } else {
          gutter = this.gutter;
        }
        if (this.inArray(this.gutterList, gutter) === -1) {
          this.addGutterStyle(gutter);
        }
        classes['gutter-' + gutter] = true;
      }
      return classes;
    }
  },
  methods: {
    addGutterStyle: function addGutterStyle(gutter) {
      if (_index.isServer) return;
      var isExits = document.getElementById('tk-flex-gutter-' + gutter);
      if (isExits === null) {
        var gutterStyle = '.tk-flex.gutter-' + gutter + ':not(.wrap-gutter){' + 'margin-top: -' + gutter + 'px;' + 'margin-left: -' + gutter + 'px;' + '}' + '.tk-flex.gutter-' + gutter + '.wrap-gutter{' + 'padding-right: ' + gutter + 'px;' + 'padding-bottom: ' + gutter + 'px;' + '}' + '.tk-flex.gutter-' + gutter + '>*{' + 'padding-left: ' + gutter + 'px;' + 'padding-top: ' + gutter + 'px;' + '}';
        var styledom = document.createElement('style');
        styledom.setAttribute('id', 'tk-flex-gutter-' + gutter);
        styledom.innerHTML = gutterStyle;
        document.body.appendChild(styledom);
      }
    },
    inArray: function inArray(array, search) {
      for (var i = 0; i < array.length; i++) {
        if (search === array[i]) {
          return i;
        }
      }
      return -1;
    }
  },
  props: {
    column: Boolean,
    wrap: Boolean,
    top: Boolean,
    middle: Boolean,
    bottom: Boolean,
    left: Boolean,
    right: Boolean,
    center: Boolean,
    average: Boolean,
    gutter: [String, Number],
    wrapGutter: Boolean,
    between: Boolean,
    around: Boolean,
    stretch: Boolean
  }
}; //
//
//
//

module.exports = exports['default'];

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "tk-flex", class: _vm.classes },
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
     require("vue-hot-reload-api").rerender("data-v-736b22b4", esExports)
  }
}

/***/ }),

/***/ 287:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(219);


/***/ }),

/***/ 29:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(30), __esModule: true };

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