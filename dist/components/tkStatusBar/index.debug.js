(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define(["vue"], factory);
	else if(typeof exports === 'object')
		exports["vue-tk"] = factory(require("vue"));
	else
		root["vue-tk"] = factory(root["Vue"]);
})(this, (function(__WEBPACK_EXTERNAL_MODULE_46__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 302);
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

/***/ 11:
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ 110:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _index = __webpack_require__(67);

var _index2 = _interopRequireDefault(_index);

var _vue = __webpack_require__(46);

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by AKer on 2016/12/20.
 */
var Rxports = {
  _class: null,
  _color: null,
  _show: true,
  _height: null,
  _immersion: false,
  setImmersion: function setImmersion(isImmersion) {
    this._immersion = isImmersion;
  },
  setClass: function setClass(cls) {
    this._class = cls;
  },
  setColor: function setColor(color) {
    this._color = color;
  },
  show: function show() {
    this._show = true;
  },
  hide: function hide() {
    this._show = false;
  },
  reset: function reset() {
    this._color = this._class = null;
    this._show = this._space = true;
    this._immersion = false;
  },
  init: function init() {
    if (this._height !== null) return;
    this._height = 0;
    var self = this;
    if (!_index2.default.isServer && _index2.default.isPlus) {
      if (window.plus) {
        if (window.plus.navigator.isImmersedStatusbar()) {
          _vue2.default.nextTick((function () {
            self._height = window.plus.navigator.getStatusbarHeight();
          }));
        }
      } else {
        document.addEventListener('plusready', (function () {
          if (window.plus.navigator.isImmersedStatusbar()) {
            self._height = window.plus.navigator.getStatusbarHeight();
          }
        }));
      }
    }
  },
  height: function height() {
    return this._height;
  },
  toggle: function toggle() {
    this._show = !this._show;
  },
  isShow: function isShow() {
    return this._show;
  }
};

module.exports = Rxports;

/***/ }),

/***/ 12:
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(32);
var defined = __webpack_require__(23);
module.exports = function (it) {
  return IObject(defined(it));
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

/***/ 187:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_tkStatusBar_vue__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_tkStatusBar_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_tkStatusBar_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_538afe0a_hasScoped_true_node_modules_vue_loader_lib_selector_type_template_index_0_tkStatusBar_vue__ = __webpack_require__(193);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(191)
}
var normalizeComponent = __webpack_require__(3)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-538afe0a"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_tkStatusBar_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_538afe0a_hasScoped_true_node_modules_vue_loader_lib_selector_type_template_index_0_tkStatusBar_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\tkStatusBar\\tkStatusBar.vue"
if (Component.esModule && Object.keys(Component.esModule).some((function (key) {return key !== "default" && key.substr(0, 2) !== "__"}))) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] tkStatusBar.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-538afe0a", Component.options)
  } else {
    hotAPI.reload("data-v-538afe0a", Component.options)
  }
  module.hot.dispose((function (data) {
    disposed = true
  }))
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 19:
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ 191:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 192:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__(53);

var _assign2 = _interopRequireDefault(_assign);

var _state = __webpack_require__(110);

var _state2 = _interopRequireDefault(_state);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'StatusBar',
  data: function data() {
    return {
      ready: false,
      state: _state2.default
    };
  },

  created: function created() {
    _state2.default.init();
  },
  computed: {
    _options: function _options() {
      var colorOption = this.color ? { color: this.color } : {};
      var options = this.options ? this.options : {};
      var stateOptions = {
        color: _state2.default._color,
        height: _state2.default.height(),
        show: _state2.default._show,
        immersion: _state2.default._immersion
      };
      return (0, _assign2.default)(stateOptions, options, colorOption);
    },
    _class: function _class() {
      return _state2.default.class;
    },
    _replaceStyle: function _replaceStyle() {
      return {
        height: this._options.height + 'px',
        display: this._options.immersion && !this.placeholder ? 'none' : 'block'
      };
    },
    _style: function _style() {
      return {
        height: this._options.height + 'px',
        'background-color': this._options.color
      };
    },
    isShow: function isShow() {
      return this._options.show && this._options.height !== 0;
    }
  },
  props: {
    color: String,
    options: Object,
    placeholder: Boolean
  }
}; //
//
//
//
//
//
//

module.exports = exports['default'];

/***/ }),

/***/ 193:
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
        {
          name: "show",
          rawName: "v-show",
          value: _vm.isShow,
          expression: "isShow"
        }
      ],
      staticClass: "status-bar-wrapper"
    },
    [
      !_vm.placeholder
        ? _c("div", {
            staticClass: "status-bar fixed",
            class: _vm._class,
            style: _vm._style
          })
        : _vm._e(),
      _vm._v(" "),
      _c("div", {
        staticClass: "status-bar-replace",
        class: _vm._class,
        style: _vm._replaceStyle
      })
    ]
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-538afe0a", esExports)
  }
}

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

/***/ 204:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.$tkStatusBar = exports.default = undefined;

var _tkStatusBar = __webpack_require__(187);

var _tkStatusBar2 = _interopRequireDefault(_tkStatusBar);

var _state = __webpack_require__(110);

var _state2 = _interopRequireDefault(_state);

var _utils = __webpack_require__(16);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var install = function install(Vue) {
  Vue.component('tk-status-bar', Vue.extend(_tkStatusBar2.default));
  _utils2.default.defineProperty('$tkStatusBar', _state2.default, Vue);
};
_tkStatusBar2.default.install = install;
exports.default = _tkStatusBar2.default;
exports.$tkStatusBar = _state2.default;

/***/ }),

/***/ 21:
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(37);
var enumBugKeys = __webpack_require__(27);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ 22:
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ 23:
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ 24:
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ 26:
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(28)('keys');
var uid = __webpack_require__(24);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ 27:
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ 28:
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
module.exports = function (key) {
  return store[key] || (store[key] = {});
};


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

/***/ 302:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(204);


/***/ }),

/***/ 31:
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(8);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(1), 'Object', { defineProperty: __webpack_require__(4).f });


/***/ }),

/***/ 32:
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(19);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ 33:
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ 35:
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(22);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ 37:
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(11);
var toIObject = __webpack_require__(12);
var arrayIndexOf = __webpack_require__(41)(false);
var IE_PROTO = __webpack_require__(26)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ 38:
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ 39:
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(23);
module.exports = function (it) {
  return Object(defined(it));
};


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

/***/ 40:
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(4);
var anObject = __webpack_require__(6);
var getKeys = __webpack_require__(21);

module.exports = __webpack_require__(1) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ 41:
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(12);
var toLength = __webpack_require__(35);
var toAbsoluteIndex = __webpack_require__(42);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ 42:
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(22);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ 46:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_46__;

/***/ }),

/***/ 5:
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ 53:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(61), __esModule: true };

/***/ }),

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(5);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ 61:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(62);
module.exports = __webpack_require__(2).Object.assign;


/***/ }),

/***/ 62:
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(8);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(63) });


/***/ }),

/***/ 63:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(21);
var gOPS = __webpack_require__(38);
var pIE = __webpack_require__(33);
var toObject = __webpack_require__(39);
var IObject = __webpack_require__(32);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(10)((function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach((function (k) { B[k] = k; }));
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
})) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),

/***/ 67:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.install = exports.default = undefined;

var _tkUa = __webpack_require__(74);

var _tkUa2 = _interopRequireDefault(_tkUa);

var _utils = __webpack_require__(16);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var install = function install(Vue) {
  _utils2.default.defineProperty('$tkUa', _tkUa2.default, Vue);
};
_tkUa2.default.install = install;
exports.default = _tkUa2.default;
exports.install = install;

/***/ }),

/***/ 74:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperties = __webpack_require__(75);

var _defineProperties2 = _interopRequireDefault(_defineProperties);

var _vue = __webpack_require__(46);

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isServer = _vue2.default.prototype.$isServer;

var Ua = {
  userAgent: null,
  isServer: isServer,
  isClient: !isServer
};

(0, _defineProperties2.default)(Ua, {
  ua: {
    get: function get() {
      return isServer ? Ua.userAgent : navigator.userAgent;
    }
  },
  isPlus: {
    get: function get() {
      return (/Html5Plus/i.test(Ua.ua)
      );
    }
  },
  isAndorid: {
    get: function get() {
      return (/(Android);?[\s\/]+([\d.]+)?/.test(Ua.ua)
      );
    }
  },
  isIos: {
    get: function get() {
      return (/(iPhone\sOS)\s([\d_]+)/.test(Ua.ua)
      );
    }
  },
  isWechat: {
    get: function get() {
      return (/(MicroMessenger)\/([\d\.]+)/i.test(Ua.ua)
      );
    }
  },
  isMobile: {
    get: function get() {
      return (/MicroMessenger|iPhone|Android|iPad/i.test(Ua.ua)
      );
    }
  },
  isDeskTop: {
    get: function get() {
      return !Ua.isMobile;
    }
  }
});

exports.default = Ua;
module.exports = exports['default'];

/***/ }),

/***/ 75:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(76), __esModule: true };

/***/ }),

/***/ 76:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(77);
var $Object = __webpack_require__(2).Object;
module.exports = function defineProperties(T, D) {
  return $Object.defineProperties(T, D);
};


/***/ }),

/***/ 77:
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(8);
// 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
$export($export.S + $export.F * !__webpack_require__(1), 'Object', { defineProperties: __webpack_require__(40) });


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