(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"), require("axios"));
	else if(typeof define === 'function' && define.amd)
		define(["vue", "axios"], factory);
	else if(typeof exports === 'object')
		exports["vue-tk"] = factory(require("vue"), require("axios"));
	else
		root["vue-tk"] = factory(root["Vue"], root["axios"]);
})(this, (function(__WEBPACK_EXTERNAL_MODULE_46__, __WEBPACK_EXTERNAL_MODULE_179__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 291);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ ((function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ })),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(10)((function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
}));


/***/ }),
/* 2 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.1' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 3 */
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
/* 4 */
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
/* 5 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(5);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(28)('wks');
var uid = __webpack_require__(24);
var Symbol = __webpack_require__(0).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 8 */
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
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(4);
var createDesc = __webpack_require__(15);
module.exports = __webpack_require__(1) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 11 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(32);
var defined = __webpack_require__(23);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 13 */
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
/* 14 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 15 */
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
/* 16 */
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
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(5);
var document = __webpack_require__(0).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 18 */
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
/* 19 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(1) && !__webpack_require__(10)((function () {
  return Object.defineProperty(__webpack_require__(17)('div'), 'a', { get: function () { return 7; } }).a != 7;
}));


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(37);
var enumBugKeys = __webpack_require__(27);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 22 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 23 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 24 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(28)('keys');
var uid = __webpack_require__(24);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 27 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
module.exports = function (key) {
  return store[key] || (store[key] = {});
};


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(30), __esModule: true };

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(31);
var $Object = __webpack_require__(2).Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(8);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(1), 'Object', { defineProperty: __webpack_require__(4).f });


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(19);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 33 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(4).f;
var has = __webpack_require__(11);
var TAG = __webpack_require__(7)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(22);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 37 */
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
/* 38 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(23);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 40 */
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
/* 41 */
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
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(22);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__(14);

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(68)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(49)(String, 'String', (function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}), (function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
}));


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(71);
var global = __webpack_require__(0);
var hide = __webpack_require__(9);
var Iterators = __webpack_require__(25);
var TO_STRING_TAG = __webpack_require__(7)('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_46__;

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(6);
var dPs = __webpack_require__(40);
var enumBugKeys = __webpack_require__(27);
var IE_PROTO = __webpack_require__(26)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(17)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(48).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(0).document;
module.exports = document && document.documentElement;


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(36);
var $export = __webpack_require__(8);
var redefine = __webpack_require__(52);
var hide = __webpack_require__(9);
var has = __webpack_require__(11);
var Iterators = __webpack_require__(25);
var $iterCreate = __webpack_require__(69);
var setToStringTag = __webpack_require__(34);
var getPrototypeOf = __webpack_require__(70);
var ITERATOR = __webpack_require__(7)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(7);


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var core = __webpack_require__(2);
var LIBRARY = __webpack_require__(36);
var wksExt = __webpack_require__(50);
var defineProperty = __webpack_require__(4).f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(9);


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(61), __esModule: true };

/***/ }),
/* 54 */
/***/ (function(module, exports) {



/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(19);
var TAG = __webpack_require__(7)('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(6);
var aFunction = __webpack_require__(14);
var SPECIES = __webpack_require__(7)('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(13);
var invoke = __webpack_require__(84);
var html = __webpack_require__(48);
var cel = __webpack_require__(17);
var global = __webpack_require__(0);
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (__webpack_require__(19)(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};


/***/ }),
/* 58 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(6);
var isObject = __webpack_require__(5);
var newPromiseCapability = __webpack_require__(43);

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(55);
var ITERATOR = __webpack_require__(7)('iterator');
var Iterators = __webpack_require__(25);
module.exports = __webpack_require__(2).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(62);
module.exports = __webpack_require__(2).Object.assign;


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(8);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(63) });


/***/ }),
/* 63 */
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
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(78), __esModule: true };

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(94);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(96);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(37);
var hiddenKeys = __webpack_require__(27).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),
/* 67 */,
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(22);
var defined = __webpack_require__(23);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(47);
var descriptor = __webpack_require__(15);
var setToStringTag = __webpack_require__(34);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(9)(IteratorPrototype, __webpack_require__(7)('iterator'), (function () { return this; }));

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(11);
var toObject = __webpack_require__(39);
var IE_PROTO = __webpack_require__(26)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(72);
var step = __webpack_require__(73);
var Iterators = __webpack_require__(25);
var toIObject = __webpack_require__(12);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(49)(Array, 'Array', (function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}), (function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}), 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 72 */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),
/* 73 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(54);
__webpack_require__(44);
__webpack_require__(45);
__webpack_require__(79);
__webpack_require__(89);
__webpack_require__(90);
module.exports = __webpack_require__(2).Promise;


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(36);
var global = __webpack_require__(0);
var ctx = __webpack_require__(13);
var classof = __webpack_require__(55);
var $export = __webpack_require__(8);
var isObject = __webpack_require__(5);
var aFunction = __webpack_require__(14);
var anInstance = __webpack_require__(80);
var forOf = __webpack_require__(81);
var speciesConstructor = __webpack_require__(56);
var task = __webpack_require__(57).set;
var microtask = __webpack_require__(85)();
var newPromiseCapabilityModule = __webpack_require__(43);
var perform = __webpack_require__(58);
var promiseResolve = __webpack_require__(59);
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!(function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[__webpack_require__(7)('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
  } catch (e) { /* empty */ }
})();

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask((function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value);
            if (domain) domain.exit();
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  }));
};
var onUnhandled = function (promise) {
  task.call(global, (function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform((function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      }));
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  }));
};
var isUnhandled = function (promise) {
  if (promise._h == 1) return false;
  var chain = promise._a || promise._c;
  var i = 0;
  var reaction;
  while (chain.length > i) {
    reaction = chain[i++];
    if (reaction.fail || !isUnhandled(reaction.promise)) return false;
  } return true;
};
var onHandleUnhandled = function (promise) {
  task.call(global, (function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  }));
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask((function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      }));
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__(86)($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
__webpack_require__(34)($Promise, PROMISE);
__webpack_require__(87)(PROMISE);
Wrapper = __webpack_require__(2)[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(88)((function (iter) {
  $Promise.all(iter)['catch'](empty);
}))), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform((function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, (function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then((function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }), reject);
      }));
      --remaining || resolve(values);
    }));
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform((function () {
      forOf(iterable, false, (function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      }));
    }));
    if (result.e) reject(result.v);
    return capability.promise;
  }
});


/***/ }),
/* 80 */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(13);
var call = __webpack_require__(82);
var isArrayIter = __webpack_require__(83);
var anObject = __webpack_require__(6);
var toLength = __webpack_require__(35);
var getIterFn = __webpack_require__(60);
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(6);
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(25);
var ITERATOR = __webpack_require__(7)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),
/* 84 */
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var macrotask = __webpack_require__(57).set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__(19)(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver
  } else if (Observer) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    var promise = Promise.resolve();
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

var hide = __webpack_require__(9);
module.exports = function (target, src, safe) {
  for (var key in src) {
    if (safe && target[key]) target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(0);
var core = __webpack_require__(2);
var dP = __webpack_require__(4);
var DESCRIPTORS = __webpack_require__(1);
var SPECIES = __webpack_require__(7)('species');

module.exports = function (KEY) {
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(7)('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, (function () { throw 2; }));
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://github.com/tc39/proposal-promise-finally

var $export = __webpack_require__(8);
var core = __webpack_require__(2);
var global = __webpack_require__(0);
var speciesConstructor = __webpack_require__(56);
var promiseResolve = __webpack_require__(59);

$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {
  var C = speciesConstructor(this, core.Promise || global.Promise);
  var isFunction = typeof onFinally == 'function';
  return this.then(
    isFunction ? function (x) {
      return promiseResolve(C, onFinally()).then((function () { return x; }));
    } : onFinally,
    isFunction ? function (e) {
      return promiseResolve(C, onFinally()).then((function () { throw e; }));
    } : onFinally
  );
} });


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-promise-try
var $export = __webpack_require__(8);
var newPromiseCapability = __webpack_require__(43);
var perform = __webpack_require__(58);

$export($export.S, 'Promise', { 'try': function (callbackfn) {
  var promiseCapability = newPromiseCapability.f(this);
  var result = perform(callbackfn);
  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
  return promiseCapability.promise;
} });


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.$tkAjaxGlobal = exports.default = undefined;

var _tkAjax = __webpack_require__(178);

var _utils = __webpack_require__(16);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var install = function install(Vue) {
  _utils2.default.defineProperty('$tkAjax', _tkAjax.tkAjax, Vue);
  _utils2.default.defineProperty('$tkAjaxGlobal', _tkAjax.tkAjaxGlobal, Vue);
};
_tkAjax.tkAjax.install = install;
exports.default = _tkAjax.tkAjax;
exports.$tkAjaxGlobal = _tkAjax.tkAjaxGlobal;

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(106), __esModule: true };

/***/ }),
/* 93 */,
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(95), __esModule: true };

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(44);
__webpack_require__(45);
module.exports = __webpack_require__(50).f('iterator');


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(97), __esModule: true };

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(98);
__webpack_require__(54);
__webpack_require__(104);
__webpack_require__(105);
module.exports = __webpack_require__(2).Symbol;


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(0);
var has = __webpack_require__(11);
var DESCRIPTORS = __webpack_require__(1);
var $export = __webpack_require__(8);
var redefine = __webpack_require__(52);
var META = __webpack_require__(99).KEY;
var $fails = __webpack_require__(10);
var shared = __webpack_require__(28);
var setToStringTag = __webpack_require__(34);
var uid = __webpack_require__(24);
var wks = __webpack_require__(7);
var wksExt = __webpack_require__(50);
var wksDefine = __webpack_require__(51);
var enumKeys = __webpack_require__(100);
var isArray = __webpack_require__(101);
var anObject = __webpack_require__(6);
var toIObject = __webpack_require__(12);
var toPrimitive = __webpack_require__(18);
var createDesc = __webpack_require__(15);
var _create = __webpack_require__(47);
var gOPNExt = __webpack_require__(102);
var $GOPD = __webpack_require__(103);
var $DP = __webpack_require__(4);
var $keys = __webpack_require__(21);
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails((function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
})) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', (function toString() {
    return this._k;
  }));

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(66).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(33).f = $propertyIsEnumerable;
  __webpack_require__(38).f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(36)) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails((function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
}))), 'JSON', {
  stringify: function stringify(it) {
    if (it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    replacer = args[1];
    if (typeof replacer == 'function') $replacer = replacer;
    if ($replacer || !isArray(replacer)) replacer = function (key, value) {
      if ($replacer) value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(9)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(24)('meta');
var isObject = __webpack_require__(5);
var has = __webpack_require__(11);
var setDesc = __webpack_require__(4).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(10)((function () {
  return isExtensible(Object.preventExtensions({}));
}));
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(21);
var gOPS = __webpack_require__(38);
var pIE = __webpack_require__(33);
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(19);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(12);
var gOPN = __webpack_require__(66).f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(33);
var createDesc = __webpack_require__(15);
var toIObject = __webpack_require__(12);
var toPrimitive = __webpack_require__(18);
var has = __webpack_require__(11);
var IE8_DOM_DEFINE = __webpack_require__(20);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(1) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(51)('asyncIterator');


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(51)('observable');


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(45);
__webpack_require__(44);
module.exports = __webpack_require__(107);


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(6);
var get = __webpack_require__(60);
module.exports = __webpack_require__(2).getIterator = function (it) {
  var iterFn = get(it);
  if (typeof iterFn != 'function') throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};


/***/ }),
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tkAjaxGlobal = exports.tkAjax = undefined;

var _typeof2 = __webpack_require__(65);

var _typeof3 = _interopRequireDefault(_typeof2);

var _assign = __webpack_require__(53);

var _assign2 = _interopRequireDefault(_assign);

var _promise = __webpack_require__(64);

var _promise2 = _interopRequireDefault(_promise);

var _getIterator2 = __webpack_require__(92);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _axios = __webpack_require__(179);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_axios2.default.defaults.errorHandler = {};
_axios2.default.defaults.midwares = [];
_axios2.default.defaults.preMidwares = [];
function runMidware(response, midware) {
  var _midware = [];
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = (0, _getIterator3.default)(_axios2.default.defaults.midwares), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var i = _step.value;

      _midware.push(i);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  if (midware) {
    _midware.push(midware);
  }
  if (_midware.length === 0 || midware === false) {
    return responseHandler(response);
  }
  return midwareHandler(response, _midware, 0).then((function (response) {
    return responseHandler(response);
  }));
}
function midwareHandler(response, midwareArr, index) {
  var midware = midwareArr[index];
  return new _promise2.default(function (resolve, reject) {
    midware(response, resolve);
  }).then((function (response) {
    if (index === midwareArr.length - 1) {
      return _promise2.default.resolve(response);
    } else {
      index++;
      return midwareHandler(response, midwareArr, index);
    }
  }));
}
function responseHandler(response) {
  if (response.status >= 200 && response.status < 400) {
    return _promise2.default.resolve(response);
  } else {
    return _promise2.default.reject(response);
  }
}
function errFormat(err) {
  var response = {
    message: err.message,
    status: 0,
    data: null,
    config: err.config,
    request: err.request
  };
  if (err.response) {
    return (0, _assign2.default)(response, err.response);
  } else {
    return response;
  }
}

function runErrHandler(err, errorHandler, resolve, reject) {
  var status = err.status;
  if ((typeof errorHandler === 'undefined' ? 'undefined' : (0, _typeof3.default)(errorHandler)) !== 'object') {
    errorHandler = {};
  }
  var handler = errorHandler[status] || _axios2.default.defaults.errorHandler[status] || errorHandler['all'] || _axios2.default.defaults.errorHandler['all'];
  if (handler) {
    handler(err, tkAjax).then((function (response) {
      resolve(response);
    })).catch((function (err) {
      reject(err);
    }));
  } else {
    reject(err);
  }
}

function ajaxHandler(response, config, resolve, reject) {
  runMidware(response, config.midware).then((function (response) {
    resolve(response);
  })).catch((function (response) {
    if (config.errorHandler === false) {
      reject(response);
    } else {
      var errorHandler = config.errorHandler;
      runErrHandler(response, errorHandler, resolve, reject);
    }
  }));
}

function runPreMidware(config) {
  var _preMidware = [];
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = (0, _getIterator3.default)(_axios2.default.defaults.preMidwares), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var i = _step2.value;

      _preMidware.push(i);
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2.return) {
        _iterator2.return();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }

  if (config.preMidware) {
    _preMidware.push(config.preMidware);
  }
  if (_preMidware.length === 0 || config.preMidware === false) {
    return _promise2.default.resolve(config);
  }
  return midwareHandler(config, _preMidware, 0).then((function (config) {
    return config;
  }));
}

function TkAjax() {
  var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  this.config = config;
  this.create = function () {
    var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    return new TkAjax(config);
  };
  this.request = function (config) {
    config = (0, _assign2.default)(config, this.config);
    return new _promise2.default(function (resolve, reject) {
      runPreMidware(config).then((function (config) {
        _axios2.default.request(config).then((function (response) {
          ajaxHandler(response, config, resolve, reject);
        })).catch((function (err) {
          var response = errFormat(err);
          ajaxHandler(response, config, resolve, reject);
        }));
      }));
    });
  };
  this.get = function (url) {
    var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    config.url = url;
    config.method = 'get';
    return this.request(config);
  };
  this.post = function (url, data) {
    var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    config.url = url;
    config.method = 'post';
    config.data = data;
    return this.request(config);
  };
  this.put = function (url, data) {
    var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    config.url = url;
    config.method = 'put';
    config.data = data;
    return this.request(config);
  };
  this.delete = function (url) {
    var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    config.url = url;
    config.method = 'delete';
    return this.request(config);
  };
}
var tkAjaxGlobal = _axios2.default.defaults;
var tkAjax = new TkAjax();
exports.tkAjax = tkAjax;
exports.tkAjaxGlobal = tkAjaxGlobal;

/***/ }),
/* 179 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_179__;

/***/ }),
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _promise = __webpack_require__(64);

var _promise2 = _interopRequireDefault(_promise);

var _typeof2 = __webpack_require__(65);

var _typeof3 = _interopRequireDefault(_typeof2);

var _vue = __webpack_require__(46);

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var curlApi = 'http://api.mokekeji.com/curl';
var iconfont = 'http://iconfont.cn';
var iconfontPublicApi = 'http://iconfont.cn/api/collection/detail.json';
var iconfontProjectApi = 'http://iconfont.cn/api/project/detail.json';

var svgRegStart = /^\<svg[^\>]*\>/;
var svgRegEnd = /\<\/svg\>$/;

var Rxports = {
  mode: 'common',
  configs: {},
  icons: {},
  ctoken: '',
  EGG_SESS: '',
  setMode: function setMode(mode) {
    if (mode === 'common' || mode === 'material' || mode === 'ios') {
      this.mode = mode;
    }
  },
  setCtoken: function setCtoken(ctoken, sess) {
    this.ctoken = ctoken;
    this.EGG_SESS = sess || '';
  },
  set: function set(configs) {
    this.configs = configs;
    this.init();
  },
  reset: function reset() {
    this.configs = this.icons = {};
    this.ctoken = this.EGG_SESS = '';
  },
  logError: function logError(error) {
    console.error(error);
  },
  init: function init() {
    var self = this;
    for (var i in this.configs) {
      var config = this.configs[i];
      var state = config.data ? 'success' : 'waiting';
      var data = config.data ? config.data : null;
      var code = config.code ? config.code : null;
      _vue2.default.set(this.icons, i, {
        state: state,
        data: data,
        code: code,
        type: config.type
      });
    }

    this.getCtoken().then((function () {
      self.download();
    }), self.logError);
  },
  download: function download() {
    var _this = this;

    var self = this;

    var _loop = function _loop(name) {
      var icon = _this.icons[name];
      if (icon.state === 'waiting') {
        _this.getData(name, icon.code, icon.type).then((function () {
          _vue2.default.set(icon, 'state', 'success');
          self.download();
        }), (function (error) {
          _vue2.default.set(icon, 'state', 'failed');
          self.logError(error);
        }));
        return {
          v: void 0
        };
      }
    };

    for (var name in this.icons) {
      var _ret = _loop(name);

      if ((typeof _ret === 'undefined' ? 'undefined' : (0, _typeof3.default)(_ret)) === "object") return _ret.v;
    }
  },
  getData: function getData(name, code, type) {
    var tkAjax = __webpack_require__(91).default;
    var self = this;
    var url = void 0,
        cookie = void 0;
    if (type === 'public') {
      url = iconfontPublicApi + '?id=' + code + '&ctoken=' + this.ctoken;
      cookie = 'ctoken=' + this.ctoken;
    } else {
      if (this.EGG_SESS === '') {
        return _promise2.default.reject('使用私人项目库，必须设置EGG_SESS');
      }
      url = iconfontProjectApi + '?pid=' + code + '&ctoken=' + this.ctoken;
      cookie = 'ctoken=' + this.ctoken + ';EGG_SESS=' + this.EGG_SESS;
    }
    var body = {
      url: url,
      headers: {
        Cookie: cookie
      }
    };
    return new _promise2.default(function (resolve, reject) {
      tkAjax.post(curlApi, body).then((function (res) {
        var body = res.data;
        if (res.status === 200) {
          var indexName = self.configs[name].useClassAsName ? 'font_class' : 'name';
          var data = body.data;
          if (data.code === 200 && data.data.icons) {
            var icons = {};

            for (var i = 0; i < data.data.icons.length; i++) {
              var _icon = data.data.icons[i];
              icons[_icon[indexName]] = _icon.show_svg.replace(svgRegStart, '').replace(svgRegEnd, '');
            }
            self.icons[name].data = icons;
            self.icons[name].name = data.data.project ? data.data.project.name : data.data.collection.name;
            self.icons[name].id = data.data.project ? data.data.project.id : data.data.collection.id;
            resolve();
            return;
          }
        }
        reject(name + '图标组未能下载');
      }));
    });
  },
  getCtoken: function getCtoken() {
    if (this.ctoken) {
      return _promise2.default.resolve();
    }
    var needDownload = false;
    for (var i in this.icons) {
      if (this.icons[i].state === 'waiting') {
        needDownload = true;
        break;
      }
    }
    if (!needDownload) {
      return _promise2.default.resolve();
    }
    var tkAjax = __webpack_require__(91).default;
    var self = this;

    var body = {
      url: iconfont,
      type: 'text'
    };
    return new _promise2.default(function (resolve, reject) {
      tkAjax.post(curlApi, body).then((function (res) {
        var body = res.data;
        if (res.status === 200) {
          var tokenReg = new RegExp('ctoken\=(\\w+icon-font)\;');
          var cookie = body.headers['set-cookie'].join();
          var match = cookie.match(tokenReg);
          if (match) {
            self.ctoken = match[1];
            resolve();
            return;
          }
        }
        reject('ctoken获取失败');
      }));
    });
  }
};

module.exports = Rxports;

/***/ }),
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tkIconConfig = exports.default = undefined;

__webpack_require__(212);

var _tkIcon = __webpack_require__(213);

var _tkIcon2 = _interopRequireDefault(_tkIcon);

var _tkIconConfig = __webpack_require__(198);

var _tkIconConfig2 = _interopRequireDefault(_tkIconConfig);

var _utils = __webpack_require__(16);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 解决低版本浏览器svg innerHtml无效的问题
var install = function install(Vue) {
  Vue.component('tk-icon', Vue.extend(_tkIcon2.default));
  _utils2.default.defineProperty('$tkIcon', _tkIconConfig2.default, Vue);
};
_tkIcon2.default.install = install;
exports.default = _tkIcon2.default;
exports.tkIconConfig = _tkIconConfig2.default;

/***/ }),
/* 212 */
/***/ (function(module, exports) {

/**
 * innerHTML property for SVGElement
 * Copyright(c) 2010, Jeff Schiller
 *
 * Licensed under the Apache License, Version 2
 *
 * Minor modifications by Chris Price to only polyfill when required.
 */
(function(SVGElement) {
  if (!SVGElement || 'innerHTML' in SVGElement.prototype) {
    return;
  }
  var serializeXML = function(node, output) {
    var nodeType = node.nodeType;
    if (nodeType == 3) { // TEXT nodes.
      // Replace special XML characters with their entities.
      output.push(node.textContent.replace(/&/, '&amp;').replace(/</, '&lt;').replace('>', '&gt;'));
    } else if (nodeType == 1) { // ELEMENT nodes.
      // Serialize Element nodes.
      output.push('<', node.tagName);
      if (node.hasAttributes()) {
        var attrMap = node.attributes;
        for (var i = 0, len = attrMap.length; i < len; ++i) {
          var attrNode = attrMap.item(i);
          output.push(' ', attrNode.name, '=\'', attrNode.value, '\'');
        }
      }
      if (node.hasChildNodes()) {
        output.push('>');
        var childNodes = node.childNodes;
        for (var i = 0, len = childNodes.length; i < len; ++i) {
          serializeXML(childNodes.item(i), output);
        }
        output.push('</', node.tagName, '>');
      } else {
        output.push('/>');
      }
    } else if (nodeType == 8) {
      // TODO(codedread): Replace special characters with XML entities?
      output.push('<!--', node.nodeValue, '-->');
    } else {
      // TODO: Handle CDATA nodes.
      // TODO: Handle ENTITY nodes.
      // TODO: Handle DOCUMENT nodes.
      throw 'Error serializing XML. Unhandled node of type: ' + nodeType;
    }
  }
  // The innerHTML DOM property for SVGElement.
  Object.defineProperty(SVGElement.prototype, 'innerHTML', {
    get: function() {
      var output = [];
      var childNode = this.firstChild;
      while (childNode) {
        serializeXML(childNode, output);
        childNode = childNode.nextSibling;
      }
      return output.join('');
    },
    set: function(markupText) {
      // Wipe out the current contents of the element.
      while (this.firstChild) {
        this.removeChild(this.firstChild);
      }

      try {
        // Parse the markup into valid nodes.
        var dXML = new DOMParser();
        dXML.async = false;
        // Wrap the markup into a SVG node to ensure parsing works.
        sXML = '<svg xmlns=\'http://www.w3.org/2000/svg\'>' + markupText + '</svg>';
        var svgDocElement = dXML.parseFromString(sXML, 'text/xml').documentElement;

        // Now take each node, import it and append to this element.
        var childNode = svgDocElement.firstChild;
        while(childNode) {
          this.appendChild(this.ownerDocument.importNode(childNode, true));
          childNode = childNode.nextSibling;
        }
      } catch(e) {
        throw new Error('Error parsing XML string');
      };
    }
  });
})((1, eval)('this').SVGElement);


/***/ }),
/* 213 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_tkIcon_vue__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_tkIcon_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_tkIcon_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_006e12b4_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_tkIcon_vue__ = __webpack_require__(218);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(214)
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_tkIcon_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_006e12b4_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_tkIcon_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\tkIcon\\tkIcon.vue"
if (Component.esModule && Object.keys(Component.esModule).some((function (key) {return key !== "default" && key.substr(0, 2) !== "__"}))) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] tkIcon.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-006e12b4", Component.options)
  } else {
    hotAPI.reload("data-v-006e12b4", Component.options)
  }
  module.hot.dispose((function (data) {
    disposed = true
  }))
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 214 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 215 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _material = __webpack_require__(216);

var _material2 = _interopRequireDefault(_material);

var _common = __webpack_require__(217);

var _common2 = _interopRequireDefault(_common);

var _tkIconConfig = __webpack_require__(198);

var _tkIconConfig2 = _interopRequireDefault(_tkIconConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'TkIcon',
  data: function data() {
    return {
      config: _tkIconConfig2.default,
      iconText: ''
    };
  },
  mounted: function mounted() {
    this.setIconText();
  },
  beforeUpdate: function beforeUpdate() {
    this.setIconText();
  },
  computed: {
    _Mode: function _Mode() {
      return this.mode ? this.mode : _tkIconConfig2.default.mode;
    },
    isIconfont: function isIconfont() {
      return this.type !== 'default' || _tkIconConfig2.default.configs.default;
    },
    viewBox: function viewBox() {
      return this.isIconfont || this._Mode !== 'material' ? '0 0 1024 1024' : '0 0 48 48';
    },
    icon: function icon() {
      if (this.iconText === '') {
        return '';
      }
      if (this.isIconfont) {
        if (_tkIconConfig2.default.icons[this.type].state !== 'waiting') {
          var data = _tkIconConfig2.default.icons[this.type]['data'];
          if (data[this.iconText]) {
            return data[this.iconText];
          } else {
            return '';
          }
        } else {
          return '';
        }
      } else {
        if (this._Mode === 'common') {
          return _common2.default[this.iconText];
        } else if (this._Mode === 'material') {
          return _material2.default[this.iconText];
        } else {
          return '';
        }
      }
    }
  },
  methods: {
    setIconText: function setIconText() {
      this.iconText = this.$slots.default ? this.$slots.default[0].text : '';
    }
  },
  props: {
    type: {
      type: String,
      default: 'default'
    },
    mode: String,
    spin: Boolean
  }
};
// import ios from './ios.json'
//
//
//
//

module.exports = exports['default'];

/***/ }),
/* 216 */
/***/ (function(module, exports) {

module.exports = {"3d_rotation":"<path d=\"M15.03 42.97C8.5 39.87 3.81 33.52 3.1 26h-3C1.12 38.32 11.42 48 24 48c.45 0 .88-.04 1.32-.07L17.7 40.3l-2.67 2.67zm1.78-13.05c-.38 0-.73-.05-1.05-.17-.31-.11-.58-.27-.8-.47-.22-.2-.39-.45-.51-.73-.12-.29-.18-.6-.18-.94h-2.6c0 .72.14 1.35.42 1.9.28.55.65 1.01 1.12 1.37.47.37 1.01.64 1.63.83.62.2 1.26.29 1.94.29.74 0 1.43-.1 2.07-.3.64-.2 1.19-.5 1.66-.89s.83-.87 1.1-1.44c.26-.57.4-1.22.4-1.95 0-.39-.05-.76-.14-1.12-.1-.36-.25-.7-.45-1.02-.21-.32-.48-.6-.81-.86-.33-.25-.74-.46-1.21-.63.4-.18.75-.4 1.05-.66.3-.26.55-.54.75-.83.2-.3.35-.6.45-.92.1-.32.15-.64.15-.95 0-.73-.12-1.37-.36-1.92-.24-.55-.58-1.01-1.02-1.38-.44-.37-.96-.65-1.58-.84-.64-.2-1.32-.29-2.06-.29-.72 0-1.39.11-2 .32-.61.21-1.13.51-1.57.89-.44.38-.78.83-1.03 1.35-.25.52-.37 1.09-.37 1.7h2.6c0-.34.06-.64.18-.9.12-.27.29-.5.5-.68.21-.19.47-.34.76-.44.29-.1.61-.16.95-.16.8 0 1.39.21 1.78.62.39.41.58.99.58 1.73 0 .36-.05.68-.16.97-.11.29-.27.54-.49.75-.22.21-.5.37-.82.49-.33.12-.72.18-1.16.18h-1.54v2.05h1.54c.44 0 .84.05 1.19.15.35.1.65.25.9.47.25.21.44.48.58.8.13.32.2.7.2 1.14 0 .81-.23 1.43-.7 1.86-.45.42-1.08.63-1.89.63zm17.12-11.85c-.63-.66-1.39-1.17-2.27-1.53-.89-.36-1.86-.54-2.93-.54H24v16h4.59c1.11 0 2.11-.18 3.02-.54.91-.36 1.68-.87 2.32-1.53.64-.66 1.14-1.46 1.48-2.39.35-.93.52-1.98.52-3.14v-.79c0-1.16-.18-2.2-.53-3.14-.35-.94-.84-1.74-1.47-2.4zm-.79 6.34c0 .83-.09 1.59-.29 2.25-.19.67-.47 1.23-.85 1.69-.38.46-.85.81-1.42 1.06-.57.24-1.23.37-1.99.37h-1.81V18.24h1.95c1.44 0 2.53.46 3.29 1.37.75.92 1.13 2.24 1.13 3.98v.82zM24 0c-.45 0-.88.04-1.32.07L30.3 7.7l2.66-2.66C39.5 8.13 44.19 14.48 44.9 22h3C46.88 9.68 36.58 0 24 0z\"/>","accessibility":"<path d=\"M24 4c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4zm18 14H30v26h-4V32h-4v12h-4V18H6v-4h36v4z\"/>","accessible":"<circle cx=\"24\" cy=\"8\" r=\"4\"/><path d=\"M38 26v-4c-3.07.04-6.18-1.5-8.14-3.67l-2.59-2.86c-.35-.38-.77-.68-1.22-.91-.02-.01-.03-.02-.04-.03h-.02c-.69-.4-1.51-.6-2.38-.51-2.08.2-3.61 2.07-3.61 4.16V30c0 2.21 1.79 4 4 4h10v10h4V33c0-2.21-1.79-4-4-4h-6v-6.9c2.58 2.13 6.49 3.89 10 3.9zM25.65 36c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6 0-2.61 1.67-4.83 4-5.65V24.2c-4.56.93-8 4.96-8 9.8 0 5.52 4.48 10 10 10 4.84 0 8.87-3.44 9.8-8h-4.15z\"/>","account_balance":"<path d=\"M8 20v14h6V20H8zm12 0v14h6V20h-6zM4 44h38v-6H4v6zm28-24v14h6V20h-6zM23 2L4 12v4h38v-4L23 2z\"/>","account_balance_wallet":"<path d=\"M42 36v2c0 2.21-1.79 4-4 4H10c-2.21 0-4-1.79-4-4V10c0-2.21 1.79-4 4-4h28c2.21 0 4 1.79 4 4v2H24c-2.21 0-4 1.79-4 4v16c0 2.21 1.79 4 4 4h18zm-18-4h20V16H24v16zm8-5c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z\"/>","account_box":"<path d=\"M6 10v28c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4V10c0-2.21-1.79-4-4-4H10c-2.21 0-4 1.79-4 4zm24 8c0 3.32-2.69 6-6 6s-6-2.68-6-6c0-3.31 2.69-6 6-6s6 2.69 6 6zM12 34c0-4 8-6.2 12-6.2S36 30 36 34v2H12v-2z\"/>","account_circle":"<path d=\"M24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm0 6c3.31 0 6 2.69 6 6 0 3.32-2.69 6-6 6s-6-2.68-6-6c0-3.31 2.69-6 6-6zm0 28.4c-5.01 0-9.41-2.56-12-6.44.05-3.97 8.01-6.16 12-6.16s11.94 2.19 12 6.16c-2.59 3.88-6.99 6.44-12 6.44z\"/>","add_shopping_cart":"<path d=\"M22 18h4v-6h6V8h-6V2h-4v6h-6v4h6v6zm-8 18c-2.21 0-3.98 1.79-3.98 4s1.77 4 3.98 4 4-1.79 4-4-1.79-4-4-4zm20 0c-2.21 0-3.98 1.79-3.98 4s1.77 4 3.98 4 4-1.79 4-4-1.79-4-4-4zm-19.65-6.5c0-.09.02-.17.06-.24l1.8-3.26h14.9c1.5 0 2.81-.83 3.5-2.06l7.72-14.02L38.83 8h-.01l-2.21 4-5.51 10H17.07l-.26-.54L12.32 12l-1.9-4-1.89-4H2v4h4l7.2 15.17-2.71 4.9c-.31.58-.49 1.23-.49 1.93 0 2.21 1.79 4 4 4h24v-4H14.85c-.28 0-.5-.22-.5-.5z\"/>","alarm":"<path d=\"M44 11.44l-9.19-7.71-2.57 3.06 9.19 7.71L44 11.44zM15.76 6.78l-2.57-3.06L4 11.43l2.57 3.06 9.19-7.71zM25 16h-3v12l9.49 5.71L33 31.24l-8-4.74V16zm-1.01-8C14.04 8 6 16.06 6 26s8.04 18 17.99 18S42 35.94 42 26 33.94 8 23.99 8zM24 40c-7.73 0-14-6.27-14-14s6.27-14 14-14 14 6.27 14 14-6.26 14-14 14z\"/>","alarm_add":"<path d=\"M15.76 6.78l-2.57-3.06L4 11.43l2.57 3.06 9.19-7.71zM44 11.44l-9.19-7.71-2.57 3.06 9.19 7.71L44 11.44zM23.99 8C14.04 8 6 16.06 6 26s8.04 18 17.99 18S42 35.94 42 26 33.94 8 23.99 8zM24 40c-7.73 0-14-6.27-14-14s6.27-14 14-14 14 6.27 14 14-6.26 14-14 14zm2-22h-4v6h-6v4h6v6h4v-6h6v-4h-6v-6z\"/>","alarm_off":"<path d=\"M24 12c7.73 0 14 6.27 14 14 0 1.69-.31 3.3-.86 4.8l3.04 3.04C41.34 31.47 42 28.81 42 26c0-9.94-8.06-18-18.01-18-2.81 0-5.46.66-7.84 1.81l3.05 3.05c1.5-.55 3.11-.86 4.8-.86zm20-.56l-9.19-7.71-2.57 3.06 9.19 7.71L44 11.44zM5.84 4.59L3.29 7.13l2.66 2.66-2.22 1.86 2.84 2.84 2.22-1.86 1.6 1.6C7.66 17.39 6 21.5 6 26c0 9.94 8.04 18 17.99 18 4.51 0 8.62-1.67 11.77-4.4l4.4 4.4 2.54-2.55L7.79 6.54 5.84 4.59zm27.1 32.19C30.51 38.79 27.4 40 24 40c-7.73 0-14-6.27-14-14 0-3.4 1.21-6.51 3.22-8.94l19.72 19.72zM16.03 6.55l-2.84-2.84-1.7 1.43 2.84 2.84 1.7-1.43z\"/>","alarm_on":"<path d=\"M44 11.44l-9.19-7.71-2.57 3.06 9.19 7.71L44 11.44zM15.76 6.78l-2.57-3.06L4 11.43l2.57 3.06 9.19-7.71zM23.99 8C14.04 8 6 16.06 6 26s8.04 18 17.99 18S42 35.94 42 26 33.94 8 23.99 8zM24 40c-7.73 0-14-6.27-14-14s6.27-14 14-14 14 6.27 14 14-6.26 14-14 14zm-2.93-10.95l-4.24-4.24-2.12 2.12 6.36 6.36 12.01-12.01-2.12-2.12-9.89 9.89z\"/>","all_out":"<path d=\"M32 8l8 8V8zm8 24l-8 8h8zm-24 8l-8-8v8zM8 16l8-8H8zm25.9-1.9c-5.47-5.47-14.33-5.47-19.8 0s-5.47 14.33 0 19.8 14.33 5.47 19.8 0 5.47-14.33 0-19.8zm-2.2 17.6c-4.25 4.25-11.15 4.25-15.4 0s-4.25-11.15 0-15.4 11.15-4.25 15.4 0 4.25 11.15 0 15.4z\" fill=\"#010101\"/>","android":"<path d=\"M12 36c0 1.1.9 2 2 2h2v7c0 1.66 1.34 3 3 3s3-1.34 3-3v-7h4v7c0 1.66 1.34 3 3 3s3-1.34 3-3v-7h2c1.1 0 2-.9 2-2V16H12v20zM7 16c-1.66 0-3 1.34-3 3v14c0 1.66 1.34 3 3 3s3-1.34 3-3V19c0-1.66-1.34-3-3-3zm34 0c-1.66 0-3 1.34-3 3v14c0 1.66 1.34 3 3 3s3-1.34 3-3V19c0-1.66-1.34-3-3-3zM31.06 4.32l2.61-2.61c.39-.39.39-1.02 0-1.41-.39-.39-1.02-.39-1.41 0L29.3 3.25C27.7 2.46 25.91 2 24 2c-1.92 0-3.72.46-5.33 1.26L15.7.29c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41l2.62 2.62C13.94 6.51 12 10.03 12 14h24c0-3.98-1.95-7.5-4.94-9.68zM20 10h-2V8h2v2zm10 0h-2V8h2v2z\"/>","announcement":"<path d=\"M40 4H8C5.79 4 4.02 5.79 4.02 8L4 44l8-8h28c2.21 0 4-1.79 4-4V8c0-2.21-1.79-4-4-4zM26 22h-4V10h4v12zm0 8h-4v-4h4v4z\"/>","aspect_ratio":"<path d=\"M38 24h-4v6h-6v4h10V24zm-24-6h6v-4H10v10h4v-6zM42 6H6c-2.21 0-4 1.79-4 4v28c0 2.21 1.79 4 4 4h36c2.21 0 4-1.79 4-4V10c0-2.21-1.79-4-4-4zm0 32.03H6V9.97h36v28.06z\"/>","assessment":"<path d=\"M38 6H10c-2.21 0-4 1.79-4 4v28c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4V10c0-2.21-1.79-4-4-4zM18 34h-4V20h4v14zm8 0h-4V14h4v20zm8 0h-4v-8h4v8z\"/>","assignment":"<path d=\"M38 6h-8.37c-.82-2.32-3.02-4-5.63-4s-4.81 1.68-5.63 4H10c-2.21 0-4 1.79-4 4v28c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4V10c0-2.21-1.79-4-4-4zM24 6c1.1 0 2 .89 2 2s-.9 2-2 2-2-.89-2-2 .9-2 2-2zm4 28H14v-4h14v4zm6-8H14v-4h20v4zm0-8H14v-4h20v4z\"/>","assignment_ind":"<path d=\"M38 6h-8.37c-.82-2.32-3.02-4-5.63-4s-4.81 1.68-5.63 4H10c-2.21 0-4 1.79-4 4v28c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4V10c0-2.21-1.79-4-4-4zM24 6c1.1 0 2 .89 2 2s-.9 2-2 2-2-.89-2-2 .9-2 2-2zm0 8c3.31 0 6 2.69 6 6 0 3.32-2.69 6-6 6s-6-2.68-6-6c0-3.31 2.69-6 6-6zm12 24H12v-2.8c0-4 8-6.2 12-6.2s12 2.2 12 6.2V38z\"/>","assignment_late":"<path d=\"M38 6h-8.37c-.82-2.32-3.02-4-5.63-4s-4.81 1.68-5.63 4H10c-2.21 0-4 1.79-4 4v28c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4V10c0-2.21-1.79-4-4-4zM26 36h-4v-4h4v4zm0-8h-4V16h4v12zm-2-18c-1.1 0-2-.89-2-2s.9-2 2-2 2 .89 2 2-.9 2-2 2z\"/>","assignment_returned":"<path d=\"M38 6h-8.37c-.82-2.32-3.02-4-5.63-4s-4.81 1.68-5.63 4H10c-2.21 0-4 1.79-4 4v28c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4V10c0-2.21-1.79-4-4-4zM24 6c1.1 0 2 .89 2 2s-.9 2-2 2-2-.89-2-2 .9-2 2-2zm0 30L14 26h6v-8h8v8h6L24 36z\"/>","assignment_return":"<path d=\"M38 6h-8.37c-.82-2.32-3.02-4-5.63-4s-4.81 1.68-5.63 4H10c-2.21 0-4 1.79-4 4v28c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4V10c0-2.21-1.79-4-4-4zM24 6c1.1 0 2 .89 2 2s-.9 2-2 2-2-.89-2-2 .9-2 2-2zm8 24h-8v6L14 26l10-10v6h8v8z\"/>","assignment_turned_in":"<path d=\"M38 6h-8.37c-.82-2.32-3.02-4-5.63-4s-4.81 1.68-5.63 4H10c-2.21 0-4 1.79-4 4v28c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4V10c0-2.21-1.79-4-4-4zM24 6c1.1 0 2 .89 2 2s-.9 2-2 2-2-.89-2-2 .9-2 2-2zm-4 28l-8-8 2.83-2.83L20 28.34l13.17-13.17L36 18 20 34z\"/>","autorenew":"<path d=\"M24 12v6l8-8-8-8v6C15.16 8 8 15.16 8 24c0 3.14.92 6.05 2.48 8.52l2.92-2.92c-.89-1.67-1.4-3.57-1.4-5.6 0-6.63 5.37-12 12-12zm13.52 3.48L34.6 18.4c.89 1.67 1.4 3.57 1.4 5.6 0 6.63-5.37 12-12 12v-6l-8 8 8 8v-6c8.84 0 16-7.16 16-16 0-3.14-.92-6.05-2.48-8.52z\"/>","backup":"<path d=\"M38.71 20.07C37.35 13.19 31.28 8 24 8c-5.78 0-10.79 3.28-13.3 8.07C4.69 16.72 0 21.81 0 28c0 6.63 5.37 12 12 12h26c5.52 0 10-4.48 10-10 0-5.28-4.11-9.56-9.29-9.93zM28 26v8h-8v-8h-6l10-10 10 10h-6z\"/>","bookmark":"<path d=\"M34 6H14c-2.21 0-3.98 1.79-3.98 4L10 42l14-6 14 6V10c0-2.21-1.79-4-4-4z\"/>","bookmark_border":"<path d=\"M34 6H14c-2.21 0-3.98 1.79-3.98 4L10 42l14-6 14 6V10c0-2.21-1.79-4-4-4zm0 30l-10-4.35L14 36V10h20v26z\"/>","book":"<path d=\"M36 4H12C9.79 4 8 5.79 8 8v32c0 2.21 1.79 4 4 4h24c2.21 0 4-1.79 4-4V8c0-2.21-1.79-4-4-4zM12 8h10v16l-5-3-5 3V8z\"/>","bug_report":"<path d=\"M40 16h-5.62c-.9-1.56-2.14-2.91-3.63-3.92L34 8.83 31.17 6l-4.35 4.35c-.9-.22-1.85-.35-2.82-.35-.97 0-1.92.13-2.82.35L16.83 6 14 8.83l3.25 3.25c-1.49 1.01-2.73 2.36-3.63 3.92H8v4h4.18c-.11.65-.18 1.32-.18 2v2H8v4h4v2c0 .68.07 1.35.18 2H8v4h5.62c2.07 3.58 5.94 6 10.38 6s8.31-2.42 10.38-6H40v-4h-4.18c.11-.65.18-1.32.18-2v-2h4v-4h-4v-2c0-.68-.07-1.35-.18-2H40v-4zM28 32h-8v-4h8v4zm0-8h-8v-4h8v4z\"/>","build":"<path d=\"M45.4 37.9L27.1 19.6c1.8-4.6.8-10.1-2.9-13.8-4-4-10-4.8-14.8-2.5l8.7 8.7-6.1 6.1-8.7-8.7C1 14.2 1.8 20.2 5.8 24.2c3.7 3.7 9.2 4.7 13.8 2.9l18.3 18.3c.8.8 2.1.8 2.8 0l4.7-4.7c.8-.7.8-2 0-2.8z\"/>","cached":"<path d=\"M38 16l-8 8h6c0 6.63-5.37 12-12 12-2.03 0-3.93-.51-5.61-1.39l-2.92 2.92C17.95 39.08 20.86 40 24 40c8.84 0 16-7.16 16-16h6l-8-8zm-26 8c0-6.63 5.37-12 12-12 2.03 0 3.93.51 5.61 1.39l2.92-2.92C30.05 8.92 27.14 8 24 8 15.16 8 8 15.16 8 24H2l8 8 8-8h-6z\"/>","card_giftcard":"<path d=\"M40 12h-4.37c.22-.63.37-1.3.37-2 0-3.31-2.69-6-6-6-2.09 0-3.93 1.07-5 2.69l-1 1.36-1-1.36C21.93 5.07 20.09 4 18 4c-3.31 0-6 2.69-6 6 0 .7.14 1.37.37 2H8c-2.21 0-3.98 1.79-3.98 4L4 38c0 2.21 1.79 4 4 4h32c2.21 0 4-1.79 4-4V16c0-2.21-1.79-4-4-4zM30 8c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zM18 8c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm22 30H8v-4h32v4zm0-10H8V16h10.16L14 21.67 17.25 24 22 17.53l2-2.72 2 2.72L30.75 24 34 21.67 29.84 16H40v12z\"/>","card_membership":"<path d=\"M40 4H8C5.79 4 4 5.79 4 8v22c0 2.21 1.79 4 4 4h8v10l8-4 8 4V34h8c2.21 0 4-1.79 4-4V8c0-2.21-1.79-4-4-4zm0 26H8v-4h32v4zm0-10H8V8h32v12z\"/>","card_travel":"<path d=\"M40 12h-6V8c0-2.21-1.79-4-4-4H18c-2.21 0-4 1.79-4 4v4H8c-2.21 0-4 1.79-4 4v22c0 2.21 1.79 4 4 4h32c2.21 0 4-1.79 4-4V16c0-2.21-1.79-4-4-4zM18 8h12v4H18V8zm22 30H8v-4h32v4zm0-10H8V16h6v4h4v-4h12v4h4v-4h6v12z\"/>","change_history":"<path d=\"M24 15.55L36.78 36H11.22L24 15.55M24 8L4 40h40L24 8z\"/>","check_circle":"<path d=\"M24 4C12.95 4 4 12.95 4 24c0 11.04 8.95 20 20 20 11.04 0 20-8.96 20-20 0-11.05-8.96-20-20-20zm-4 30L10 24l2.83-2.83L20 28.34l15.17-15.17L38 16 20 34z\"/>","chrome_reader_mode":"<path d=\"M26 24h14v3H26zm0-5h14v3H26zm0 10h14v3H26zM42 8H6c-2.2 0-4 1.8-4 4v26c0 2.2 1.8 4 4 4h36c2.2 0 4-1.8 4-4V12c0-2.2-1.8-4-4-4zm0 30H24V12h18v26z\"/>","class":"<path d=\"M36 4H12C9.79 4 8 5.79 8 8v32c0 2.21 1.79 4 4 4h24c2.21 0 4-1.79 4-4V8c0-2.21-1.79-4-4-4zM12 8h10v16l-5-3-5 3V8z\"/>","code":"<path d=\"M18.8 33.2L9.7 24l9.2-9.2L16 12 4 24l12 12 2.8-2.8zm10.4 0l9.2-9.2-9.2-9.2L32 12l12 12-12 12-2.8-2.8z\"/>","compare_arrows":"<path d=\"M18.02 28H4v4h14.02v6L26 30l-7.98-8v6zm11.96-2v-6H44v-4H29.98v-6L22 18l7.98 8z\"/>","copyright":"<path d=\"M24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm0 36c-8.82 0-16-7.18-16-16S15.18 8 24 8s16 7.18 16 16-7.18 16-16 16zm-3.84-18.27c.11-.65.31-1.23.6-1.74s.69-.92 1.18-1.23c.47-.29 1.06-.45 1.79-.46.48.01.92.09 1.3.26.41.18.75.42 1.04.72s.51.66.67 1.06.25.83.27 1.28h3.58c-.03-.94-.22-1.8-.55-2.58s-.81-1.45-1.41-2.02-1.32-1-2.16-1.31-1.77-.47-2.79-.47c-1.3 0-2.43.22-3.39.67s-1.76 1.06-2.4 1.84-1.12 1.68-1.43 2.71-.46 2.12-.46 3.27v.55c0 1.16.16 2.25.47 3.28s.79 1.93 1.43 2.7 1.44 1.38 2.41 1.83 2.1.67 3.4.67c.94 0 1.82-.15 2.64-.46s1.54-.73 2.16-1.27 1.12-1.16 1.48-1.88.57-1.48.6-2.3h-3.58c-.02.42-.12.8-.3 1.16s-.42.66-.72.91-.65.45-1.05.59c-.38.13-.78.2-1.21.2-.72-.02-1.31-.17-1.79-.47-.5-.32-.9-.73-1.19-1.24s-.49-1.09-.6-1.75-.15-1.3-.15-1.97v-.55c0-.68.05-1.35.16-2z\"/>","credit_card":"<path d=\"M40 8H8c-2.21 0-3.98 1.79-3.98 4L4 36c0 2.21 1.79 4 4 4h32c2.21 0 4-1.79 4-4V12c0-2.21-1.79-4-4-4zm0 28H8V24h32v12zm0-20H8v-4h32v4z\"/>","dashboard":"<path d=\"M6 26h16V6H6v20zm0 16h16V30H6v12zm20 0h16V22H26v20zm0-36v12h16V6H26z\"/>","date_range":"<path d=\"M18 22h-4v4h4v-4zm8 0h-4v4h4v-4zm8 0h-4v4h4v-4zm4-14h-2V4h-4v4H16V4h-4v4h-2c-2.22 0-3.98 1.8-3.98 4L6 40c0 2.2 1.78 4 4 4h28c2.2 0 4-1.8 4-4V12c0-2.2-1.8-4-4-4zm0 32H10V18h28v22z\"/>","delete":"<path d=\"M12 38c0 2.21 1.79 4 4 4h16c2.21 0 4-1.79 4-4V14H12v24zM38 8h-7l-2-2H19l-2 2h-7v4h28V8z\"/>","delete_forever":"<path d=\"M12 38c0 2.2 1.8 4 4 4h16c2.2 0 4-1.8 4-4V14H12v24zm4.93-14.24l2.83-2.83L24 25.17l4.24-4.24 2.83 2.83L26.83 28l4.24 4.24-2.83 2.83L24 30.83l-4.24 4.24-2.83-2.83L21.17 28l-4.24-4.24zM31 8l-2-2H19l-2 2h-7v4h28V8z\"/>","description":"<path d=\"M28 4H12C9.79 4 8.02 5.79 8.02 8L8 40c0 2.21 1.77 4 3.98 4H36c2.21 0 4-1.79 4-4V16L28 4zm4 32H16v-4h16v4zm0-8H16v-4h16v4zm-6-10V7l11 11H26z\"/>","dns":"<path d=\"M40 26H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h32c1.1 0 2-.9 2-2V28c0-1.1-.9-2-2-2zM14 38c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zM40 6H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h32c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zM14 18c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z\"/>","done":"<path d=\"M18 32.34L9.66 24l-2.83 2.83L18 38l24-24-2.83-2.83z\"/>","done_all":"<path d=\"M36 14l-2.83-2.83-12.68 12.69 2.83 2.83L36 14zm8.49-2.83L23.31 32.34 14.97 24l-2.83 2.83L23.31 38l24-24-2.82-2.83zM.83 26.83L12 38l2.83-2.83L3.66 24 .83 26.83z\"/>","donut_large":"<path d=\"M22 10.16V4C12 5 4 13.62 4 24s8 19 18 20v-6.16c-6-.96-12-6.8-12-13.84s6-12.88 12-13.84zM37.94 22H44c-.94-10-8-17.06-18-18v6.16C32 11.02 37.08 16 37.94 22zM26 37.84V44c10-.94 17.06-8 18-18h-6.06C37.08 32 32 36.98 26 37.84z\"/>","donut_small":"<path d=\"M22 18.32V4C12 5 4 13.58 4 24s8 19 18 20V29.68c-2-.82-4-3.04-4-5.68s2-4.86 4-5.68zM29.72 22H44c-.96-9.5-8-17.06-18-18v14.32c2 .6 3.04 1.96 3.72 3.68zM26 29.68V44c10-.94 17.04-8.5 18-18H29.72c-.68 1.72-1.72 3.08-3.72 3.68z\"/>","euro_symbol":"<path d=\"M30 37c-5.01 0-9.36-2.84-11.53-7H30v-4H17.17c-.1-.65-.17-1.32-.17-2s.07-1.35.17-2H30v-4H18.47c2.17-4.16 6.51-7 11.53-7 3.23 0 6.18 1.18 8.45 3.13L42 10.6C38.82 7.75 34.61 6 30 6c-7.83 0-14.48 5.01-16.95 12H6v4h6.12c-.08.66-.12 1.32-.12 2 0 .68.04 1.34.12 2H6v4h7.05c2.47 6.99 9.12 12 16.95 12 4.61 0 8.82-1.75 12-4.6l-3.55-3.54C36.18 35.81 33.23 37 30 37z\"/>","event":"<path d=\"M34 24H24v10h10V24zM32 2v4H16V2h-4v4h-2c-2.21 0-3.98 1.79-3.98 4L6 38c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4V10c0-2.21-1.79-4-4-4h-2V2h-4zm6 36H10V16h28v22z\"/>","event_seat":"<path d=\"M8 36v6h6v-6h20v6h6V30H8zm30-16h6v6h-6zM4 20h6v6H4zm30 6H14V10c0-2.21 1.79-4 4-4h12c2.21 0 4 1.79 4 4v16z\"/>","exit_to_app":"<path d=\"M20.17 31.17L23 34l10-10-10-10-2.83 2.83L25.34 22H6v4h19.34l-5.17 5.17zM38 6H10c-2.21 0-4 1.79-4 4v8h4v-8h28v28H10v-8H6v8c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4V10c0-2.21-1.79-4-4-4z\"/>","explore":"<path d=\"M24 21.8c-1.21 0-2.2.99-2.2 2.2s.99 2.2 2.2 2.2c1.22 0 2.2-.99 2.2-2.2s-.98-2.2-2.2-2.2zM24 4C12.95 4 4 12.95 4 24c0 11.04 8.95 20 20 20s20-8.96 20-20c0-11.05-8.95-20-20-20zm4.38 24.38L12 36l7.62-16.38L36 12l-7.62 16.38z\"/>","extension":"<path d=\"M41 22h-3v-8c0-2.21-1.79-4-4-4h-8V7c0-2.76-2.24-5-5-5s-5 2.24-5 5v3H8c-2.21 0-3.98 1.79-3.98 4l-.01 7.6H7c2.98 0 5.4 2.42 5.4 5.4S9.98 32.4 7 32.4H4.01L4 40c0 2.21 1.79 4 4 4h7.6v-3c0-2.98 2.42-5.4 5.4-5.4 2.98 0 5.4 2.42 5.4 5.4v3H34c2.21 0 4-1.79 4-4v-8h3c2.76 0 5-2.24 5-5s-2.24-5-5-5z\"/>","face":"<path d=\"M18 23.5c-1.38 0-2.5 1.12-2.5 2.5s1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.5-1.12-2.5-2.5-2.5zm12 0c-1.38 0-2.5 1.12-2.5 2.5s1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.5-1.12-2.5-2.5-2.5zM24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm0 36c-8.82 0-16-7.18-16-16 0-.58.04-1.15.1-1.71 4.71-2.09 8.47-5.95 10.42-10.74 3.62 5.1 9.57 8.45 16.31 8.45 1.55 0 3.06-.19 4.5-.53.43 1.44.67 2.96.67 4.53 0 8.82-7.18 16-16 16z\"/>","favorite":"<path d=\"M24 42.7l-2.9-2.63C10.8 30.72 4 24.55 4 17 4 10.83 8.83 6 15 6c3.48 0 6.82 1.62 9 4.17C26.18 7.62 29.52 6 33 6c6.17 0 11 4.83 11 11 0 7.55-6.8 13.72-17.1 23.07L24 42.7z\"/>","favorite_border":"<path d=\"M33 6c-3.48 0-6.82 1.62-9 4.17C21.82 7.62 18.48 6 15 6 8.83 6 4 10.83 4 17c0 7.55 6.8 13.72 17.1 23.07L24 42.7l2.9-2.63C37.2 30.72 44 24.55 44 17c0-6.17-4.83-11-11-11zm-8.79 31.11l-.21.19-.21-.19C14.28 28.48 8 22.78 8 17c0-3.99 3.01-7 7-7 3.08 0 6.08 1.99 7.13 4.72h3.73C26.92 11.99 29.92 10 33 10c3.99 0 7 3.01 7 7 0 5.78-6.28 11.48-15.79 20.11z\"/>","feedback":"<path d=\"M40 4H8C5.79 4 4.02 5.79 4.02 8L4 44l8-8h28c2.21 0 4-1.79 4-4V8c0-2.21-1.79-4-4-4zM26 28h-4v-4h4v4zm0-8h-4v-8h4v8z\"/>","find_in_page":"<path d=\"M40 39.17V16L28 4H12C9.79 4 8.02 5.79 8.02 8L8 40c0 2.21 1.77 4 3.98 4H36c.89 0 1.71-.3 2.37-.8l-8.87-8.87C27.93 35.38 26.04 36 24 36c-5.52 0-10-4.48-10-10s4.48-10 10-10 10 4.48 10 10c0 2.04-.62 3.93-1.66 5.51L40 39.17zM18 26c0 3.31 2.69 6 6 6s6-2.69 6-6-2.69-6-6-6-6 2.69-6 6z\"/>","find_replace":"<path d=\"M22 12c2.76 0 5.26 1.12 7.07 2.93L24 20h12V8l-4.1 4.1C29.37 9.57 25.87 8 22 8 14.95 8 9.13 13.22 8.16 20h4.04c.93-4.56 4.96-8 9.8-8zm11.28 18.27c1.33-1.81 2.23-3.95 2.56-6.27H31.8c-.93 4.56-4.96 8-9.8 8-2.76 0-5.26-1.12-7.07-2.93L20 24H8v12l4.1-4.1c2.53 2.53 6.03 4.1 9.9 4.1 3.1 0 5.96-1.02 8.28-2.73L40 42.98 42.98 40l-9.7-9.73z\"/>","fingerprint":"<path d=\"M35.62 8.94c-.16 0-.31-.04-.46-.11C31.33 6.85 28 6 24.02 6c-3.97 0-7.71.95-11.14 2.82-.49.26-1.09.09-1.36-.4-.26-.49-.09-1.09.4-1.36C15.65 5.03 19.72 4 24.02 4c4.26 0 7.98.94 12.06 3.05.49.25.68.86.43 1.35-.18.34-.53.54-.89.54zM7 19.44c-.2 0-.4-.06-.58-.18-.45-.32-.56-.94-.24-1.39 1.98-2.8 4.51-5 7.51-6.55 6.29-3.25 14.33-3.26 20.63-.02 2.99 1.54 5.51 3.72 7.5 6.5.32.45.22 1.07-.23 1.39-.45.32-1.08.22-1.4-.23-1.8-2.52-4.08-4.5-6.78-5.88-5.74-2.95-13.07-2.94-18.8.02-2.71 1.4-5 3.39-6.79 5.93-.2.27-.51.41-.82.41zm12.51 24.13c-.26 0-.51-.1-.71-.3-1.73-1.75-2.67-2.86-4.02-5.27-1.38-2.46-2.11-5.47-2.11-8.69 0-5.94 5.08-10.78 11.33-10.78s11.33 4.83 11.33 10.78c0 .55-.45 1-1 1s-1-.45-1-1c0-4.84-4.18-8.78-9.33-8.78-5.14 0-9.33 3.94-9.33 8.78 0 2.88.64 5.54 1.85 7.71 1.29 2.3 2.15 3.29 3.69 4.84.39.39.39 1.03-.01 1.41-.18.21-.44.3-.69.3zm14.33-3.7c-2.38 0-4.47-.6-6.2-1.77-2.97-2.02-4.75-5.3-4.75-8.78 0-.55.45-1 1-1s1 .45 1 1c0 2.81 1.45 5.47 3.88 7.12 1.41.96 3.07 1.43 5.07 1.43.48 0 1.29-.05 2.09-.19.54-.1 1.06.27 1.16.81.1.54-.27 1.06-.81 1.16-1.17.21-2.16.22-2.44.22zM29.81 44c-.09 0-.18-.01-.26-.04-3.19-.87-5.27-2.05-7.43-4.2-2.79-2.78-4.33-6.49-4.33-10.44 0-3.25 2.76-5.89 6.16-5.89 3.4 0 6.16 2.64 6.16 5.89 0 2.14 1.87 3.89 4.16 3.89s4.16-1.74 4.16-3.89c0-7.54-6.5-13.67-14.49-13.67-5.69 0-10.88 3.16-13.22 8.06-.78 1.62-1.17 3.51-1.17 5.61 0 1.56.14 4.02 1.33 7.21.19.52-.07 1.09-.59 1.29-.52.19-1.09-.07-1.29-.59-.98-2.63-1.46-5.21-1.46-7.91 0-2.4.46-4.58 1.37-6.47 2.67-5.58 8.57-9.19 15.02-9.19 9.09 0 16.49 7.03 16.49 15.67 0 3.25-2.77 5.89-6.16 5.89s-6.16-2.64-6.16-5.89c0-2.14-1.87-3.89-4.16-3.89s-4.16 1.74-4.16 3.89c0 3.41 1.33 6.62 3.74 9.02 1.89 1.88 3.73 2.92 6.55 3.69.53.15.85.7.7 1.23-.12.44-.52.73-.96.73z\"/>","flight_land":"<path d=\"M5 38h38v4H5zm14.37-11.46l8.69 2.33 10.63 2.85c1.6.43 3.24-.52 3.67-2.12.43-1.6-.52-3.24-2.12-3.67l-10.63-2.85L24.1 5.04 20.23 4v16.56L10.3 17.9l-1.86-4.64-2.9-.78v10.35l3.21.86 10.62 2.85z\"/>","flight_takeoff":"<path d=\"M5 38h38v4H5zm39.14-18.73c-.43-1.6-2.07-2.55-3.67-2.12L29.84 20 16.04 7.13l-3.86 1.04 8.28 14.35-9.94 2.66-3.93-3.09-2.9.78 3.64 6.31 1.53 2.65 3.21-.86 10.63-2.85 8.69-2.33 10.63-2.85c1.6-.43 2.55-2.07 2.12-3.67z\"/>","flip_to_back":"<path d=\"M18 14h-4v4h4v-4zm0 8h-4v4h4v-4zm0-16c-2.21 0-4 1.79-4 4h4V6zm8 24h-4v4h4v-4zM38 6v4h4c0-2.21-1.79-4-4-4zM26 6h-4v4h4V6zm-8 28v-4h-4c0 2.21 1.79 4 4 4zm20-8h4v-4h-4v4zm0-8h4v-4h-4v4zm0 16c2.21 0 4-1.79 4-4h-4v4zM10 14H6v24c0 2.21 1.79 4 4 4h24v-4H10V14zm20-4h4V6h-4v4zm0 24h4v-4h-4v4z\"/>","flip_to_front":"<path d=\"M6 26h4v-4H6v4zm0 8h4v-4H6v4zm4 8v-4H6c0 2.21 1.79 4 4 4zM6 18h4v-4H6v4zm24 24h4v-4h-4v4zm8-36H18c-2.21 0-4 1.79-4 4v20c0 2.21 1.79 4 4 4h20c2.21 0 4-1.79 4-4V10c0-2.21-1.79-4-4-4zm0 24H18V10h20v20zM22 42h4v-4h-4v4zm-8 0h4v-4h-4v4z\"/>","gavel":"<path d=\"M2 42h24v4H2zm8.49-25.858l5.658-5.657L44.432 38.77l-5.657 5.656zM24.627 2.006L35.94 13.32l-5.656 5.656L18.97 7.663zm-16.97 16.97L18.97 30.29l-5.656 5.657L2 24.633z\"/>","get_app":"<path d=\"M38 18h-8V6H18v12h-8l14 14 14-14zM10 36v4h28v-4H10z\"/>","grade":"<path d=\"M24 34.54L36.36 42l-3.27-14.06L44 18.49l-14.38-1.24L24 4l-5.62 13.25L4 18.49l10.91 9.45L11.64 42z\"/>","group_work":"<path d=\"M24 4C12.95 4 4 12.95 4 24c0 11.04 8.95 20 20 20s20-8.96 20-20c0-11.05-8.95-20-20-20zm-8 31c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm3-19c0-2.76 2.24-5 5-5s5 2.24 5 5-2.24 5-5 5-5-2.24-5-5zm13 19c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z\"/>","g_translate":"<path d=\"M40 10H21.76L20 4H8C5.8 4 4 5.8 4 8v26c0 2.2 1.8 4 4 4h14l2 6h16c2.2 0 4-1.8 4-4V14c0-2.2-1.8-4-4-4zM14.33 29.17c-4.51 0-8.17-3.67-8.17-8.17s3.67-8.17 8.17-8.17c2.08 0 3.97.74 5.47 2.13l.13.13-2.44 2.36-.12-.11c-.57-.54-1.56-1.17-3.04-1.17-2.62 0-4.75 2.17-4.75 4.84s2.13 4.84 4.75 4.84c2.74 0 3.93-1.75 4.25-2.92h-4.42v-3.1h7.9l.03.14c.08.42.11.79.11 1.21-.01 4.71-3.24 7.99-7.87 7.99zm12.07-3.4c.67 1.2 1.48 2.35 2.38 3.4l-1.07 1.06-1.31-4.46zm1.54-1.54h-1.98l-.61-2.08h7.99s-.68 2.63-3.12 5.47c-1.07-1.23-1.81-2.43-2.28-3.39zM42 40c0 1.1-.9 2-2 2H26l4-4-1.63-5.53 1.84-1.84L35.58 36l1.46-1.46-5.41-5.37c1.8-2.07 3.2-4.5 3.83-7.01H38v-2.08h-7.27V18h-2.08v2.08h-3.92L22.35 12H40c1.1 0 2 .9 2 2v26z\"/>","help":"<path d=\"M24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm2 34h-4v-4h4v4zm4.13-15.49l-1.79 1.84C26.9 25.79 26 27 26 30h-4v-1c0-2.21.9-4.21 2.34-5.66l2.49-2.52C27.55 20.1 28 19.1 28 18c0-2.21-1.79-4-4-4s-4 1.79-4 4h-4c0-4.42 3.58-8 8-8s8 3.58 8 8c0 1.76-.71 3.35-1.87 4.51z\"/>","highlight_off":"<path d=\"M29.17 16L24 21.17 18.83 16 16 18.83 21.17 24 16 29.17 18.83 32 24 26.83 29.17 32 32 29.17 26.83 24 32 18.83 29.17 16zM24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm0 36c-8.82 0-16-7.18-16-16S15.18 8 24 8s16 7.18 16 16-7.18 16-16 16z\"/>","history":"<path d=\"M25.99 6C16.04 6 8 14.06 8 24H2l7.79 7.79.14.29L18 24h-6c0-7.73 6.27-14 14-14s14 6.27 14 14-6.27 14-14 14c-3.87 0-7.36-1.58-9.89-4.11l-2.83 2.83C16.53 39.98 21.02 42 25.99 42 35.94 42 44 33.94 44 24S35.94 6 25.99 6zM24 16v10l8.56 5.08L34 28.65l-7-4.15V16h-3z\"/>","home":"<path d=\"M20 40V28h8v12h10V24h6L24 6 4 24h6v16z\"/>","hourglass_empty":"<path d=\"M12 5v10l9 9-9 9v10h24V33l-9-9 9-9V5H12zm20 29v5H16v-5l8-8 8 8zm-8-12l-8-8V9h16v5l-8 8z\"/>","hourglass_full":"<path d=\"M32 4H12v11h.02l-.02.02L20.98 24 12 32.98l.02.02H12v11h24V33h-.02l.02-.02L27.02 24 36 15.02l-.02-.02H36V4h-4z\"/>","https":"<path d=\"M36 16h-2v-4c0-5.52-4.48-10-10-10S14 6.48 14 12v4h-2c-2.21 0-4 1.79-4 4v20c0 2.21 1.79 4 4 4h24c2.21 0 4-1.79 4-4V20c0-2.21-1.79-4-4-4zM24 34c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm6.2-18H17.8v-4c0-3.42 2.78-6.2 6.2-6.2 3.42 0 6.2 2.78 6.2 6.2v4z\"/>","http":"<path d=\"M9 22H5v-4H2v12h3v-5h4v5h3V18H9v4zm5-1h3v9h3v-9h3v-3h-9v3zm11 0h3v9h3v-9h3v-3h-9v3zm18-3h-7v12h3v-4h4c1.7 0 3-1.3 3-3v-2c0-1.7-1.3-3-3-3zm0 5h-4v-2h4v2z\"/>","important_devices":"<path d=\"M30 18h-6.06L22 12l-1.94 6H14l4.94 3.52-1.88 5.82 4.94-3.6 4.94 3.6-1.88-5.82zm0 0h-6.06L22 12l-1.94 6H14l4.94 3.52-1.88 5.82 4.94-3.6 4.94 3.6-1.88-5.82zm16 4.01L36 22c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V24c0-1.1-.9-1.99-2-1.99zM46 40H36V26h10v14zM40 4H4C1.78 4 0 5.78 0 8v24c0 2.2 1.78 4 4 4h14v4h-4v4h16v-4h-4v-4h4v-4H4V8h36v10h4V8c0-2.22-1.8-4-4-4zM23.94 18L22 12l-1.94 6H14l4.94 3.52-1.88 5.82 4.94-3.6 4.94 3.6-1.88-5.82L30 18h-6.06z\"/>","info":"<path d=\"M24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm2 30h-4V22h4v12zm0-16h-4v-4h4v4z\"/>","info_outline":"<path d=\"M22 34h4V22h-4v12zm2-30C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm0 36c-8.82 0-16-7.18-16-16S15.18 8 24 8s16 7.18 16 16-7.18 16-16 16zm-2-22h4v-4h-4v4z\"/>","input":"<path d=\"M42 6.02H6c-2.21 0-4 1.79-4 4V18h4V9.98h36v28.06H6V30H2v8.02c0 2.21 1.79 3.96 4 3.96h36c2.21 0 4-1.76 4-3.96v-28c0-2.21-1.79-4-4-4zM22 32l8-8-8-8v6H2v4h20v6z\"/>","invert_colors":"<path d=\"M35.31 15.86L24 4.54 12.69 15.86c-6.25 6.25-6.25 16.38 0 22.63 3.12 3.12 7.22 4.69 11.31 4.69s8.19-1.56 11.31-4.69c6.25-6.25 6.25-16.38 0-22.63zM24 39.17c-3.21 0-6.22-1.25-8.48-3.52-2.27-2.26-3.52-5.27-3.52-8.48s1.25-6.22 3.52-8.49L24 10.2v28.97z\"/>","label":"<path d=\"M35.27 11.69C34.54 10.67 33.35 10 32 10l-22 .02c-2.21 0-4 1.77-4 3.98v20c0 2.21 1.79 3.98 4 3.98L32 38c1.35 0 2.54-.67 3.27-1.69L44 24l-8.73-12.31z\"/>","label_outline":"<path d=\"M35.27 11.69C34.54 10.67 33.35 10 32 10l-22 .02c-2.21 0-4 1.77-4 3.98v20c0 2.21 1.79 3.98 4 3.98L32 38c1.35 0 2.54-.67 3.27-1.69L44 24l-8.73-12.31zM32 34H10V14h22l7.09 10L32 34z\"/>","language":"<path d=\"M23.99 4C12.94 4 4 12.95 4 24s8.94 20 19.99 20C35.04 44 44 35.05 44 24S35.04 4 23.99 4zm13.85 12h-5.9c-.65-2.5-1.56-4.9-2.76-7.12 3.68 1.26 6.74 3.81 8.66 7.12zM24 8.07c1.67 2.4 2.97 5.07 3.82 7.93h-7.64c.85-2.86 2.15-5.53 3.82-7.93zM8.52 28C8.19 26.72 8 25.38 8 24s.19-2.72.52-4h6.75c-.16 1.31-.27 2.64-.27 4 0 1.36.11 2.69.28 4H8.52zm1.63 4h5.9c.65 2.5 1.56 4.9 2.76 7.13-3.68-1.26-6.74-3.82-8.66-7.13zm5.9-16h-5.9c1.92-3.31 4.98-5.87 8.66-7.13-1.2 2.23-2.11 4.63-2.76 7.13zM24 39.93c-1.66-2.4-2.96-5.07-3.82-7.93h7.64c-.86 2.86-2.16 5.53-3.82 7.93zM28.68 28h-9.36c-.19-1.31-.32-2.64-.32-4 0-1.36.13-2.69.32-4h9.36c.19 1.31.32 2.64.32 4 0 1.36-.13 2.69-.32 4zm.51 11.12c1.2-2.23 2.11-4.62 2.76-7.12h5.9c-1.93 3.31-4.99 5.86-8.66 7.12zM32.72 28c.16-1.31.28-2.64.28-4 0-1.36-.11-2.69-.28-4h6.75c.33 1.28.53 2.62.53 4s-.19 2.72-.53 4h-6.75z\"/>","launch":"<path d=\"M38 38H10V10h14V6H10c-2.21 0-4 1.79-4 4v28c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4V24h-4v14zM28 6v4h7.17L15.51 29.66l2.83 2.83L38 12.83V20h4V6H28z\"/>","lightbulb_outline":"<path fill=\"#010101\" d=\"M18 42c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2v-2H18v2zm6-38c-7.73 0-14 6.27-14 14 0 4.76 2.38 8.95 6 11.48V34c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-4.52c3.62-2.53 6-6.72 6-11.48 0-7.73-6.27-14-14-14zm5.71 22.2L28 27.39V32h-8v-4.6l-1.71-1.19C15.6 24.33 14 21.27 14 18.01c0-5.51 4.49-10 10-10s10 4.49 10 10c0 3.25-1.6 6.31-4.29 8.19z\"/>","line_style":"<path d=\"M6 32h10v-4H6v4zm13 0h10v-4H19v4zm13 0h10v-4H32v4zM6 40h4v-4H6v4zm8 0h4v-4h-4v4zm8 0h4v-4h-4v4zm8 0h4v-4h-4v4zm8 0h4v-4h-4v4zM6 24h16v-4H6v4zm20 0h16v-4H26v4zM6 8v8h36V8H6z\"/>","line_weight":"<path d=\"M6 34h36v-4H6v4zm0 6h36v-2H6v2zm0-14h36v-6H6v6zM6 8v8h36V8H6z\"/>","list":"<path d=\"M6 26h4v-4H6v4zm0 8h4v-4H6v4zm0-16h4v-4H6v4zm8 8h28v-4H14v4zm0 8h28v-4H14v4zm0-20v4h28v-4H14z\"/>","lock":"<path d=\"M36 16h-2v-4c0-5.52-4.48-10-10-10S14 6.48 14 12v4h-2c-2.21 0-4 1.79-4 4v20c0 2.21 1.79 4 4 4h24c2.21 0 4-1.79 4-4V20c0-2.21-1.79-4-4-4zM24 34c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm6.2-18H17.8v-4c0-3.42 2.78-6.2 6.2-6.2 3.42 0 6.2 2.78 6.2 6.2v4z\"/>","lock_open":"<path d=\"M24 34c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm12-18h-2v-4c0-5.52-4.48-10-10-10S14 6.48 14 12h3.8c0-3.42 2.78-6.2 6.2-6.2 3.42 0 6.2 2.78 6.2 6.2v4H12c-2.21 0-4 1.79-4 4v20c0 2.21 1.79 4 4 4h24c2.21 0 4-1.79 4-4V20c0-2.21-1.79-4-4-4zm0 24H12V20h24v20z\"/>","lock_outline":"<path d=\"M24 34c2.2 0 4-1.8 4-4s-1.8-4-4-4-4 1.8-4 4 1.8 4 4 4zm12-18h-2v-4c0-5.52-4.48-10-10-10S14 6.48 14 12v4h-2c-2.2 0-4 1.8-4 4v20c0 2.2 1.8 4 4 4h24c2.2 0 4-1.8 4-4V20c0-2.2-1.8-4-4-4zm-18.2-4c0-3.42 2.78-6.2 6.2-6.2s6.2 2.78 6.2 6.2v4H17.8v-4zM36 40H12V20h24v20z\"/>","loyalty":"<path d=\"M42.82 23.16L24.83 5.17C24.11 4.45 23.11 4 22 4H8C5.79 4 4 5.79 4 8v14c0 1.11.45 2.11 1.18 2.83l18 18C23.9 43.55 24.9 44 26 44c1.11 0 2.11-.45 2.83-1.17l14-14C43.55 28.1 44 27.1 44 26c0-1.11-.45-2.11-1.18-2.84zM11 14c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm23.54 16.54L26 39.08l-8.54-8.54C16.56 29.63 16 28.38 16 27c0-2.76 2.24-5 5-5 1.38 0 2.64.56 3.54 1.47L26 24.93l1.46-1.46C28.37 22.56 29.62 22 31 22c2.76 0 5 2.24 5 5 0 1.38-.56 2.63-1.46 3.54z\"/>","markunread_mailbox":"<path d=\"M40 12H20v12h-4V8h12V0H12v12H8c-2.2 0-4 1.8-4 4v24c0 2.2 1.8 4 4 4h32c2.2 0 4-1.8 4-4V16c0-2.2-1.8-4-4-4z\"/>","motorcycle":"<path d=\"M38.88 18.06L30.82 10H22v4h7.18l4 4H10C4.4 18 0 22.4 0 28s4.4 10 10 10c4.92 0 8.9-3.38 9.8-8h3.3l5.54-5.54C28.22 25.54 28 26.74 28 28c0 5.6 4.4 10 10 10s10-4.4 10-10c0-5.3-3.94-9.54-9.12-9.94zM15.64 30c-.84 2.3-3.08 4-5.64 4-3.26 0-6-2.74-6-6s2.74-6 6-6c2.56 0 4.8 1.7 5.64 4H10v4h5.64zM38 34c-3.32 0-6-2.68-6-6s2.68-6 6-6 6 2.68 6 6-2.68 6-6 6z\"/>","note_add":"<path d=\"M28 4H12C9.79 4 8.02 5.79 8.02 8L8 40c0 2.21 1.77 4 3.98 4H36c2.21 0 4-1.79 4-4V16L28 4zm4 28h-6v6h-4v-6h-6v-4h6v-6h4v6h6v4zm-6-14V7l11 11H26z\"/>","opacity":"<path d=\"M35.32 15.99L24 4.69l-11.32 11.3C9.56 19.11 8 23.27 8 27.27s1.56 8.22 4.68 11.34 7.22 4.7 11.32 4.7 8.2-1.58 11.32-4.7S40 31.27 40 27.27s-1.56-8.16-4.68-11.28zM12 28c.02-4 1.24-6.55 3.52-8.81L24 10.53l8.48 8.75C34.76 21.55 35.98 24 36 28H12z\"/>","open_in_browser":"<path d=\"M38 8H10c-2.21 0-4 1.79-4 4v24c0 2.21 1.79 4 4 4h8v-4h-8V16h28v20h-8v4h8c2.21 0 4-1.79 4-4V12c0-2.21-1.79-4-4-4zM24 20l-8 8h6v12h4V28h6l-8-8z\"/>","open_in_new":"<path d=\"M38 38H10V10h14V6H10c-2.21 0-4 1.79-4 4v28c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4V24h-4v14zM28 6v4h7.17L15.51 29.66l2.83 2.83L38 12.83V20h4V6H28z\"/>","open_with":"<path d=\"M20 18h8v-6h6L24 2 14 12h6v6zm-2 2h-6v-6L2 24l10 10v-6h6v-8zm28 4L36 14v6h-6v8h6v6l10-10zm-18 6h-8v6h-6l10 10 10-10h-6v-6z\"/>","pageview":"<path d=\"M23 18c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM40 8H8c-2.21 0-4 1.79-4 4v24c0 2.21 1.79 4 4 4h32c2.21 0 4-1.79 4-4V12c0-2.21-1.79-4-4-4zm-6.41 28.41l-5.81-5.81c-1.39.88-3.02 1.4-4.78 1.4-4.97 0-9-4.03-9-9s4.03-9 9-9 9 4.03 9 9c0 1.76-.52 3.39-1.4 4.77l5.82 5.8-2.83 2.84z\"/>","pan_tool":"<path d=\"M46 11v29c0 4.4-3.6 8-8 8H23.4c-2.16 0-4.2-.86-5.7-2.38L2 29.66s2.52-2.46 2.6-2.5c.44-.38.98-.58 1.58-.58.44 0 .84.12 1.2.32.08.02 8.62 4.92 8.62 4.92V8c0-1.66 1.34-3 3-3s3 1.34 3 3v14h2V3c0-1.66 1.34-3 3-3s3 1.34 3 3v19h2V5c0-1.66 1.34-3 3-3s3 1.34 3 3v17h2V11c0-1.66 1.34-3 3-3s3 1.34 3 3z\"/>","payment":"<path d=\"M40 8H8c-2.21 0-3.98 1.79-3.98 4L4 36c0 2.21 1.79 4 4 4h32c2.21 0 4-1.79 4-4V12c0-2.21-1.79-4-4-4zm0 28H8V24h32v12zm0-20H8v-4h32v4z\"/>","perm_camera_mic":"<path d=\"M40 10h-6.34L30 6H18l-3.66 4H8c-2.21 0-4 1.79-4 4v24c0 2.21 1.79 4 4 4h14v-4.18c-5.67-.96-10-5.89-10-11.82h4c0 4.41 3.59 8 8 8s8-3.59 8-8h4c0 5.93-4.33 10.86-10 11.82V42h14c2.21 0 4-1.79 4-4V14c0-2.21-1.79-4-4-4zM28 26c0 2.21-1.79 4-4 4s-4-1.79-4-4v-8c0-2.21 1.79-4 4-4s4 1.79 4 4v8z\"/>","perm_contact_calendar":"<path d=\"M38 6h-2V2h-4v4H16V2h-4v4h-2c-2.21 0-4 1.79-4 4v28c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4V10c0-2.21-1.79-4-4-4zm-14 6c3.31 0 6 2.69 6 6 0 3.32-2.69 6-6 6s-6-2.68-6-6c0-3.31 2.69-6 6-6zm12 24H12v-2c0-4 8-6.2 12-6.2S36 30 36 34v2z\"/>","perm_data_setting":"<path d=\"M37.98 23c.68 0 1.36.06 2.02.15V0L0 40h23.13c-.09-.66-.15-1.32-.15-2 0-8.28 6.72-15 15-15zm7.43 15.98c.04-.32.07-.64.07-.98 0-.33-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.37-2.65c-.04-.24-.25-.42-.5-.42h-4c-.25 0-.46.18-.49.42l-.37 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98 0 .33.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.13.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.37 2.65c.04.24.25.42.49.42h4c.25 0 .45-.18.49-.42l.37-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.13-.22.07-.49-.12-.64l-2.1-1.65zM37.98 41c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z\"/>","perm_device_information":"<path d=\"M26 14h-4v4h4v-4zm0 8h-4v12h4V22zm8-19.98L14 2c-2.21 0-4 1.79-4 4v36c0 2.21 1.79 4 4 4h20c2.21 0 4-1.79 4-4V6c0-2.21-1.79-3.98-4-3.98zM34 38H14V10h20v28z\"/>","perm_identity":"<path d=\"M24 11.8c2.32 0 4.2 1.88 4.2 4.2s-1.88 4.2-4.2 4.2-4.2-1.88-4.2-4.2 1.88-4.2 4.2-4.2m0 18c5.95 0 12.2 2.91 12.2 4.2v2.2H11.8V34c0-1.29 6.25-4.2 12.2-4.2M24 8c-4.42 0-8 3.58-8 8 0 4.41 3.58 8 8 8s8-3.59 8-8c0-4.42-3.58-8-8-8zm0 18c-5.33 0-16 2.67-16 8v6h32v-6c0-5.33-10.67-8-16-8z\"/>","perm_media":"<path d=\"M4 12H0v10h.02L0 40c0 2.21 1.79 4 4 4h36v-4H4V12zm40-4H28l-4-4H12C9.79 4 8.02 5.79 8.02 8L8 32c0 2.21 1.79 4 4 4h32c2.21 0 4-1.79 4-4V12c0-2.21-1.79-4-4-4zM14 30l9-12 7 9.01L35 21l7 9H14z\"/>","perm_phone_msg":"<path d=\"M40 31c-2.49 0-4.9-.4-7.14-1.14-.69-.22-1.48-.06-2.03.49l-4.4 4.41c-5.67-2.88-10.29-7.51-13.18-13.17l4.4-4.42c.55-.55.71-1.34.49-2.03C17.4 12.9 17 10.49 17 8c0-1.11-.89-2-2-2H8c-1.1 0-2 .89-2 2 0 18.78 15.22 34 34 34 1.11 0 2-.89 2-2v-7c0-1.11-.89-2-2-2zM24 6v20l6-6h12V6H24z\"/>","perm_scan_wifi":"<path d=\"M24 6C13.91 6 6.29 9.7 0 14.47L24 44l24-29.5C41.71 9.74 34.09 6 24 6zm2 26h-4V20h4v12zm-4-16v-4h4v4h-4z\"/>","pets":"<circle cx=\"9\" cy=\"19\" r=\"5\"/><circle cx=\"18\" cy=\"11\" r=\"5\"/><circle cx=\"30\" cy=\"11\" r=\"5\"/><circle cx=\"39\" cy=\"19\" r=\"5\"/><path d=\"M34.68 29.72c-1.75-2.03-3.21-3.78-4.96-5.81-.93-1.08-2.1-2.17-3.49-2.64-.21-.07-.43-.13-.66-.17-.51-.1-1.05-.1-1.57-.1s-1.06 0-1.57.1c-.22.04-.44.1-.66.17-1.39.47-2.56 1.56-3.49 2.64-1.75 2.03-3.21 3.78-4.96 5.81-2.62 2.61-5.83 5.52-5.25 9.59.58 2.03 2.04 4.07 4.67 4.65 1.46.29 6.12-.87 11.08-.87.06 0 .12.01.18.01s.12-.01.18-.01c4.96 0 9.62 1.16 11.08.87 2.62-.58 4.08-2.61 4.67-4.65.58-4.07-2.62-6.98-5.25-9.59z\"/>","picture_in_picture":"<path d=\"M38 14H22v12h16V14zm4-8H6c-2.21 0-4 1.79-4 4v28c0 2.21 1.79 3.96 4 3.96h36c2.21 0 4-1.76 4-3.96V10c0-2.21-1.79-4-4-4zm0 32.03H6V9.97h36v28.06z\"/>","picture_in_picture_alt":"<path d=\"M38 22H22v11.99h16V22zm8 16V9.96C46 7.76 44.2 6 42 6H6C3.8 6 2 7.76 2 9.96V38c0 2.2 1.8 4 4 4h36c2.2 0 4-1.8 4-4zm-4 .04H6V9.94h36v28.1z\"/>","play_for_work":"<path d=\"M22 10v11.17h-7l9 9 9-9h-7V10h-4zM12 28c0 6.62 5.38 12 12 12s12-5.38 12-12h-4c0 4.42-3.58 8-8 8s-8-3.58-8-8h-4z\"/>","polymer":"<path d=\"M38 8h-8L14.21 33.26 9 24l9-16h-8L1 24l9 16h8l15.79-25.26L39 24l-9 16h8l9-16z\"/>","power_settings_new":"<path d=\"M26 6h-4v20h4V6zm9.67 4.33l-2.83 2.83C35.98 15.73 38 19.62 38 24c0 7.73-6.27 14-14 14s-14-6.27-14-14c0-4.38 2.02-8.27 5.16-10.84l-2.83-2.83C8.47 13.63 6 18.52 6 24c0 9.94 8.06 18 18 18s18-8.06 18-18c0-5.48-2.47-10.37-6.33-13.67z\"/>","pregnant_woman":"<path d=\"M18 8c0-2.22 1.78-4 4-4s4 1.78 4 4-1.78 4-4 4-4-1.78-4-4zm14 18c-.02-2.69-1.66-5.02-4-6 0-3.31-2.69-6-6-6s-6 2.69-6 6v14h4v10h6V34h6v-8z\"/>","print":"<path d=\"M38 16H10c-3.31 0-6 2.69-6 6v12h8v8h24v-8h8V22c0-3.31-2.69-6-6-6zm-6 22H16V28h16v10zm6-14c-1.11 0-2-.89-2-2s.89-2 2-2c1.11 0 2 .89 2 2s-.89 2-2 2zM36 6H12v8h24V6z\"/>","query_builder":"<path d=\"M23.99 4C12.94 4 4 12.95 4 24s8.94 20 19.99 20C35.04 44 44 35.05 44 24S35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16zm1-26h-3v12l10.49 6.3L34 29.84l-9-5.34z\"/>","question_answer":"<path d=\"M42 12h-4v18H12v4c0 1.1.9 2 2 2h22l8 8V14c0-1.1-.9-2-2-2zm-8 12V6c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v28l8-8h20c1.1 0 2-.9 2-2z\"/>","receipt":"<path d=\"M36 34H12v-4h24v4zm0-8H12v-4h24v4zm0-8H12v-4h24v4zM6 44l3-3 3 3 3-3 3 3 3-3 3 3 3-3 3 3 3-3 3 3 3-3 3 3V4l-3 3-3-3-3 3-3-3-3 3-3-3-3 3-3-3-3 3-3-3-3 3-3-3v40z\"/>","record_voice_over":"<circle cx=\"18\" cy=\"18\" r=\"8\"/><path d=\"M18 30c-5.34 0-16 2.68-16 8v4h32v-4c0-5.32-10.66-8-16-8zm15.52-19.27l-3.37 3.38c1.68 2.37 1.68 5.41 0 7.78l3.37 3.38c4.04-4.06 4.04-10.15 0-14.54zM40.15 4l-3.26 3.26c5.54 6.05 5.54 15.11-.01 21.47L40.15 32c7.8-7.77 7.8-19.91 0-28z\"/>","redeem":"<path d=\"M40 12h-4.37c.22-.63.37-1.29.37-2 0-3.31-2.69-6-6-6-2.09 0-3.93 1.07-5 2.69l-1 1.36-1-1.36C21.93 5.07 20.09 4 18 4c-3.31 0-6 2.69-6 6 0 .71.14 1.37.37 2H8c-2.21 0-3.98 1.79-3.98 4L4 38c0 2.21 1.79 4 4 4h32c2.21 0 4-1.79 4-4V16c0-2.21-1.79-4-4-4zM30 8c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zM18 8c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm22 30H8v-4h32v4zm0-10H8V16h10.16L14 21.67 17.25 24 22 17.53l2-2.72 2 2.72L30.75 24 34 21.67 29.84 16H40v12z\"/>","remove_shopping_cart":"<path d=\"M45.46 45.46L5.54 5.54 4 4 2.54 2.54 0 5.08l8.78 8.78 4.42 9.32-2.7 4.9c-.32.56-.5 1.22-.5 1.92 0 2.2 1.8 4 4 4h14.92l2.76 2.76c-1 .73-1.66 1.91-1.66 3.24 0 2.2 1.78 4 3.98 4 1.33 0 2.51-.67 3.24-1.68L42.92 48l2.54-2.54zM14.84 30c-.28 0-.5-.22-.5-.5l.06-.24L16.2 26h4.72l4 4H14.84zm16.26-4c1.5 0 2.82-.82 3.5-2.06l7.16-12.98c.16-.28.24-.62.24-.96 0-1.1-.9-2-2-2H13.08l18 18h.02zM14 36c-2.2 0-3.98 1.8-3.98 4s1.78 4 3.98 4 4-1.8 4-4-1.8-4-4-4z\"/>","report_problem":"<path d=\"M2 42h44L24 4 2 42zm24-6h-4v-4h4v4zm0-8h-4v-8h4v8z\"/>","restore":"<path d=\"M25.99 6C16.04 6 8 14.06 8 24H2l7.79 7.79.14.29L18 24h-6c0-7.73 6.27-14 14-14s14 6.27 14 14-6.27 14-14 14c-3.87 0-7.36-1.58-9.89-4.11l-2.83 2.83C16.53 39.98 21.02 42 25.99 42 35.94 42 44 33.94 44 24S35.94 6 25.99 6zM24 16v10l8.56 5.08L34 28.65l-7-4.15V16h-3z\"/>","restore_page":"<path d=\"M28 4H12C9.8 4 8.02 5.8 8.02 8L8 40c0 2.2 1.78 4 3.98 4H36c2.2 0 4-1.8 4-4V16L28 4zm-4 32c-4.1 0-7.61-2.47-9.16-6h3.42c1.27 1.81 3.36 3 5.73 3 3.87 0 7-3.13 7-7s-3.13-7-7-7c-2.71 0-5.03 1.55-6.19 3.81L21 26h-8v-8l2.6 2.6c1.78-2.76 4.87-4.6 8.4-4.6 5.52 0 10 4.48 10 10s-4.48 10-10 10z\"/>","room":"<path d=\"M24 4c-7.73 0-14 6.27-14 14 0 10.5 14 26 14 26s14-15.5 14-26c0-7.73-6.27-14-14-14zm0 19c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z\"/>","rounded_corner":"<path d=\"M38 38h4v4h-4v-4zm0-4h4v-4h-4v4zM6 26h4v-4H6v4zm0 8h4v-4H6v4zm0-16h4v-4H6v4zm0-8h4V6H6v4zm8 0h4V6h-4v4zm16 32h4v-4h-4v4zm-8 0h4v-4h-4v4zm8 0h4v-4h-4v4zm-16 0h4v-4h-4v4zm-8 0h4v-4H6v4zm36-26c0-5.51-4.49-10-10-10H22v4h10c3.31 0 6 2.69 6 6v10h4V16z\"/>","rowing":"<path d=\"M17 29l-9 9 3 3 7-7h4l-5-5zM30 2c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4zm12 40.02L36 48l-5.98-6.02V39l-14.2-14.18c-.62.1-1.22.14-1.82.14v-4.32c3.32.06 7.22-1.74 9.34-4.08l2.8-3.1c.38-.42.86-.76 1.38-1 .58-.28 1.24-.46 1.92-.46h.06c2.48.02 4.5 2.04 4.5 4.52v11.5c0 1.68-.7 3.22-1.84 4.32L25 25.18v-4.54c-1.26 1.04-2.86 2.04-4.58 2.78L33 36h3l6 6.02z\"/>","schedule":"<path d=\"M23.99 4C12.94 4 4 12.95 4 24s8.94 20 19.99 20C35.04 44 44 35.05 44 24S35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16zm1-26h-3v12l10.49 6.3L34 29.84l-9-5.34z\"/>","search":"<path d=\"M31 28h-1.59l-.55-.55C30.82 25.18 32 22.23 32 19c0-7.18-5.82-13-13-13S6 11.82 6 19s5.82 13 13 13c3.23 0 6.18-1.18 8.45-3.13l.55.55V31l10 9.98L40.98 38 31 28zm-12 0c-4.97 0-9-4.03-9-9s4.03-9 9-9 9 4.03 9 9-4.03 9-9 9z\"/>","settings":"<path d=\"M38.86 25.95c.08-.64.14-1.29.14-1.95s-.06-1.31-.14-1.95l4.23-3.31c.38-.3.49-.84.24-1.28l-4-6.93c-.25-.43-.77-.61-1.22-.43l-4.98 2.01c-1.03-.79-2.16-1.46-3.38-1.97L29 4.84c-.09-.47-.5-.84-1-.84h-8c-.5 0-.91.37-.99.84l-.75 5.3c-1.22.51-2.35 1.17-3.38 1.97L9.9 10.1c-.45-.17-.97 0-1.22.43l-4 6.93c-.25.43-.14.97.24 1.28l4.22 3.31C9.06 22.69 9 23.34 9 24s.06 1.31.14 1.95l-4.22 3.31c-.38.3-.49.84-.24 1.28l4 6.93c.25.43.77.61 1.22.43l4.98-2.01c1.03.79 2.16 1.46 3.38 1.97l.75 5.3c.08.47.49.84.99.84h8c.5 0 .91-.37.99-.84l.75-5.3c1.22-.51 2.35-1.17 3.38-1.97l4.98 2.01c.45.17.97 0 1.22-.43l4-6.93c.25-.43.14-.97-.24-1.28l-4.22-3.31zM24 31c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z\"/>","settings_applications":"<path d=\"M24 20c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zM38 6H10c-2.21 0-4 1.79-4 4v28c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4V10c0-2.21-1.79-4-4-4zm-3.5 18c0 .46-.04.92-.1 1.37l2.96 2.32c.26.21.34.59.16.89l-2.8 4.85c-.17.3-.54.42-.86.3l-3.49-1.41c-.72.56-1.51 1.02-2.37 1.38l-.52 3.71c-.04.33-.33.59-.68.59h-5.6c-.35 0-.64-.26-.69-.59l-.52-3.71c-.85-.35-1.64-.82-2.37-1.38l-3.48 1.4c-.32.12-.68 0-.86-.3l-2.8-4.85c-.18-.3-.1-.68.16-.89l2.96-2.31c-.06-.45-.1-.9-.1-1.37 0-.46.04-.92.1-1.37l-2.96-2.31c-.26-.21-.34-.59-.16-.89l2.8-4.85c.18-.3.54-.42.86-.3l3.48 1.4c.72-.55 1.51-1.02 2.37-1.38l.52-3.71c.05-.33.34-.59.69-.59h5.6c.35 0 .64.26.69.59l.52 3.71c.85.35 1.64.82 2.37 1.38l3.48-1.4c.32-.12.68 0 .86.3l2.8 4.85c.18.3.1.68-.16.89l-2.96 2.32c.06.44.1.9.1 1.36z\"/>","settings_backup_restore":"<path d=\"M28 24c0-2.21-1.79-4-4-4s-4 1.79-4 4 1.79 4 4 4 4-1.79 4-4zM24 6C14.06 6 6 14.06 6 24H0l8 8 8-8h-6c0-7.73 6.27-14 14-14s14 6.27 14 14-6.27 14-14 14c-3.03 0-5.82-.97-8.12-2.61l-2.83 2.87C16.09 40.6 19.88 42 24 42c9.94 0 18-8.06 18-18S33.94 6 24 6z\"/>","settings_bluetooth":"<path d=\"M22 48h4v-4h-4v4zm-8 0h4v-4h-4v4zm16 0h4v-4h-4v4zm5.41-36.59L24 0h-2v15.17L12.83 6 10 8.83 21.17 20 10 31.17 12.83 34 22 24.83V40h2l11.41-11.41L26.83 20l8.58-8.59zM26 7.66l3.76 3.76L26 15.17V7.66zm3.76 20.93L26 32.34v-7.51l3.76 3.76z\"/>","settings_brightness":"<path d=\"M42 6H6c-2.21 0-4 1.79-4 4v28c0 2.21 1.79 4 4 4h36c2.21 0 4-1.79 4-4V10c0-2.21-1.79-4-4-4zm0 32.03H6V9.97h36v28.06zM16 32h5l3 3 3-3h5v-5l3-3-3-3v-5h-5l-3-3-3 3h-5v5l-3 3 3 3v5zm8-14c3.31 0 6 2.69 6 6s-2.69 6-6 6V18z\"/>","settings_cell":"<path d=\"M14 48h4v-4h-4v4zm8 0h4v-4h-4v4zm8 0h4v-4h-4v4zM32 .02L16 0c-2.21 0-4 1.79-4 4v32c0 2.21 1.79 4 4 4h16c2.21 0 4-1.79 4-4V4c0-2.21-1.79-3.98-4-3.98zM32 32H16V8h16v24z\"/>","settings_ethernet":"<path d=\"M15.54 13.52l-3.08-2.55L1.64 24l10.82 13.04 3.08-2.55L6.84 24l8.7-10.48zM14 26h4v-4h-4v4zm20-4h-4v4h4v-4zm-12 4h4v-4h-4v4zm13.54-15.04l-3.08 2.55L41.16 24l-8.7 10.48 3.08 2.55L46.36 24 35.54 10.96z\"/>","settings_input_antenna":"<path d=\"M24 10c-7.73 0-14 6.27-14 14h4c0-5.52 4.48-10 10-10s10 4.48 10 10h4c0-7.73-6.27-14-14-14zm2 18.58c1.76-.77 3-2.53 3-4.58 0-2.76-2.24-5-5-5s-5 2.24-5 5c0 2.05 1.24 3.81 3 4.58v6.59L15.17 42 18 44.83l6-6 6 6L32.83 42 26 35.17v-6.59zM24 2C11.85 2 2 11.85 2 24h4c0-9.94 8.06-18 18-18s18 8.06 18 18h4c0-12.15-9.85-22-22-22z\"/>","settings_input_component":"<path d=\"M10 4c0-1.1-.89-2-2-2s-2 .9-2 2v8H2v12h12V12h-4V4zm8 28c0 2.61 1.68 4.81 4 5.63V46h4v-8.37c2.32-.83 4-3.02 4-5.63v-4H18v4zM2 32c0 2.61 1.68 4.81 4 5.63V46h4v-8.37c2.32-.83 4-3.02 4-5.63v-4H2v4zm40-20V4c0-1.1-.89-2-2-2s-2 .9-2 2v8h-4v12h12V12h-4zM26 4c0-1.1-.89-2-2-2s-2 .9-2 2v8h-4v12h12V12h-4V4zm8 28c0 2.61 1.68 4.81 4 5.63V46h4v-8.37c2.32-.83 4-3.02 4-5.63v-4H34v4z\"/>","settings_input_composite":"<path d=\"M10 4c0-1.1-.89-2-2-2s-2 .9-2 2v8H2v12h12V12h-4V4zm8 28c0 2.61 1.68 4.81 4 5.63V46h4v-8.37c2.32-.83 4-3.02 4-5.63v-4H18v4zM2 32c0 2.61 1.68 4.81 4 5.63V46h4v-8.37c2.32-.83 4-3.02 4-5.63v-4H2v4zm40-20V4c0-1.1-.89-2-2-2s-2 .9-2 2v8h-4v12h12V12h-4zM26 4c0-1.1-.89-2-2-2s-2 .9-2 2v8h-4v12h12V12h-4V4zm8 28c0 2.61 1.68 4.81 4 5.63V46h4v-8.37c2.32-.83 4-3.02 4-5.63v-4H34v4z\"/>","settings_input_hdmi":"<path d=\"M36 14V8c0-2.21-1.79-4-4-4H16c-2.21 0-4 1.79-4 4v6h-2v12l6 12v6h16v-6l6-12V14h-2zM16 8h16v6h-4v-4h-2v4h-4v-4h-2v4h-4V8z\"/>","settings_input_svideo":"<path d=\"M16 23c0-1.66-1.34-3-3-3s-3 1.34-3 3 1.34 3 3 3 3-1.34 3-3zm14-10c0-1.66-1.34-3-3-3h-6c-1.66 0-3 1.34-3 3s1.34 3 3 3h6c1.66 0 3-1.34 3-3zM17 30c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm7-28C11.87 2 2 11.87 2 24s9.87 22 22 22 22-9.87 22-22S36.13 2 24 2zm0 40c-9.93 0-18-8.08-18-18S14.07 6 24 6s18 8.08 18 18-8.07 18-18 18zm11-22c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm-4 10c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z\"/>","settings_overscan":"<path d=\"M24.01 11L20 16h8l-3.99-5zM36 20v8l5-3.99L36 20zm-24 0l-5 4.01L12 28v-8zm16 12h-8l4.01 5L28 32zM42 6H6c-2.21 0-4 1.79-4 4v28c0 2.21 1.79 4 4 4h36c2.21 0 4-1.79 4-4V10c0-2.21-1.79-4-4-4zm0 32.03H6V9.97h36v28.06z\"/>","settings_phone":"<path d=\"M26 18h-4v4h4v-4zm8 0h-4v4h4v-4zm6 13c-2.49 0-4.89-.4-7.14-1.14-.69-.22-1.48-.06-2.03.49l-4.4 4.41c-5.67-2.88-10.29-7.51-13.18-13.17l4.4-4.41c.55-.55.71-1.34.49-2.03C17.4 12.9 17 10.49 17 8c0-1.11-.89-2-2-2H8c-1.11 0-2 .89-2 2 0 18.78 15.22 34 34 34 1.11 0 2-.89 2-2v-7c0-1.11-.89-2-2-2zm-2-13v4h4v-4h-4z\"/>","settings_power":"<path d=\"M14 48h4v-4h-4v4zm8 0h4v-4h-4v4zm4-44h-4v20h4V4zm7.13 4.87l-2.89 2.89C33.69 13.87 36 17.66 36 22c0 6.63-5.37 12-12 12s-12-5.37-12-12c0-4.34 2.31-8.13 5.76-10.24l-2.89-2.89C10.72 11.76 8 16.56 8 22c0 8.84 7.16 16 16 16s16-7.16 16-16c0-5.44-2.72-10.24-6.87-13.13zM30 48h4v-4h-4v4z\"/>","settings_remote":"<path d=\"M30 18H18c-1.11 0-2 .9-2 2v24c0 1.1.89 2 2 2h12c1.11 0 2-.9 2-2V20c0-1.1-.89-2-2-2zm-6 12c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm-9.9-17.9l2.83 2.83C18.74 13.12 21.24 12 24 12s5.26 1.12 7.07 2.93l2.83-2.83C31.37 9.57 27.87 8 24 8s-7.37 1.57-9.9 4.1zM24 0C17.93 0 12.43 2.46 8.44 6.44l2.83 2.83C14.53 6.01 19.03 4 24 4s9.47 2.01 12.73 5.27l2.83-2.83C35.57 2.46 30.07 0 24 0z\"/>","settings_voice":"<path d=\"M14 48h4v-4h-4v4zm10-22c3.31 0 5.98-2.69 5.98-6L30 8c0-3.32-2.68-6-6-6-3.31 0-6 2.68-6 6v12c0 3.31 2.69 6 6 6zm-2 22h4v-4h-4v4zm8 0h4v-4h-4v4zm8-28h-3.4c0 6-5.07 10.2-10.6 10.2-5.52 0-10.6-4.2-10.6-10.2H10c0 6.83 5.44 12.47 12 13.44V40h4v-6.56c6.56-.97 12-6.61 12-13.44z\"/>","shopping_basket":"<path d=\"M34.42 18L25.66 4.89c-.38-.58-1.02-.85-1.66-.85-.64 0-1.28.28-1.66.85L13.58 18H4c-1.1 0-2 .9-2 2 0 .19.03.37.07.54l5.07 18.54C7.61 40.76 9.16 42 11 42h26c1.84 0 3.39-1.24 3.85-2.93l5.07-18.54c.05-.16.08-.34.08-.53 0-1.1-.9-2-2-2h-9.58zM18 18l6-8.8 6 8.8H18zm6 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z\"/>","shopping_cart":"<path d=\"M14 36c-2.21 0-3.98 1.79-3.98 4s1.77 4 3.98 4 4-1.79 4-4-1.79-4-4-4zM2 4v4h4l7.19 15.17-2.7 4.9c-.31.58-.49 1.23-.49 1.93 0 2.21 1.79 4 4 4h24v-4H14.85c-.28 0-.5-.22-.5-.5 0-.09.02-.17.06-.24L16.2 26h14.9c1.5 0 2.81-.83 3.5-2.06l7.15-12.98c.16-.28.25-.61.25-.96 0-1.11-.9-2-2-2H10.43l-1.9-4H2zm32 32c-2.21 0-3.98 1.79-3.98 4s1.77 4 3.98 4 4-1.79 4-4-1.79-4-4-4z\"/>","shop":"<path d=\"M32 12V8c0-2.21-1.79-4-4-4h-8c-2.21 0-4 1.79-4 4v4H4v26c0 2.21 1.79 4 4 4h32c2.21 0 4-1.79 4-4V12H32zM20 8h8v4h-8V8zm-2 28V18l15 8-15 10z\"/>","shop_two":"<path d=\"M36 10V6c0-2.21-1.79-4-4-4h-8c-2.21 0-4 1.79-4 4v4H10v22c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4V10H36zM24 6h8v4h-8V6zm0 24V16l11 6-11 8zM6 18H2v22c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4H6V18z\"/>","speaker_notes":"<path d=\"M40 4H8C5.79 4 4.02 5.79 4.02 8L4 44l8-8h28c2.21 0 4-1.79 4-4V8c0-2.21-1.79-4-4-4zM16 28h-4v-4h4v4zm0-6h-4v-4h4v4zm0-6h-4v-4h4v4zm14 12H20v-4h10v4zm6-6H20v-4h16v4zm0-6H20v-4h16v4z\"/>","speaker_notes_off":"<path d=\"M21.08 22L20 20.92 15.08 16 12 12.92 4.77 5.69 2.54 3.46 0 6l4.02 4.02L4 44l8-8h18l11.46 11.46L44 44.92 35.08 36l-14-14zM16 28h-4v-4h4v4zm-4-6v-4l4 4h-4zM40 4H8.16L20 15.84V12h16v4H20.16l2 2H36v4h-9.84l13.99 13.99C42.28 35.91 44 34.15 44 32V8c0-2.2-1.8-4-4-4z\"/>","spellcheck":"<path d=\"M24.89 32h4.18L18.86 6h-3.71L4.93 32h4.18l2.25-6h11.29l2.24 6zM12.86 22L17 10.95 21.14 22h-8.28zm30.31 1.17L27 39.34 19.66 32l-2.83 2.83L27 45l19-19-2.83-2.83z\"/>","stars":"<path d=\"M23.99 4C12.94 4 4 12.95 4 24s8.94 20 19.99 20C35.04 44 44 35.05 44 24S35.04 4 23.99 4zm8.47 32L24 30.9 15.54 36l2.24-9.62-7.46-6.47 9.84-.84L24 10l3.84 9.07 9.84.84-7.46 6.47L32.46 36z\"/>","store":"<path d=\"M40 8H8v4h32V8zm2 20v-4l-2-10H8L6 24v4h2v12h20V28h8v12h4V28h2zm-18 8H12v-8h12v8z\"/>","subject":"<path d=\"M28 34H8v4h20v-4zm12-16H8v4h32v-4zM8 30h32v-4H8v4zm0-20v4h32v-4H8z\"/>","supervisor_account":"<path d=\"M33 24c2.76 0 4.98-2.24 4.98-5s-2.22-5-4.98-5c-2.76 0-5 2.24-5 5s2.24 5 5 5zm-15-2c3.31 0 5.98-2.69 5.98-6s-2.67-6-5.98-6c-3.31 0-6 2.69-6 6s2.69 6 6 6zm15 6c-3.67 0-11 1.84-11 5.5V38h22v-4.5c0-3.66-7.33-5.5-11-5.5zm-15-2c-4.67 0-14 2.34-14 7v5h14v-4.5c0-1.7.67-4.67 4.74-6.94C21 26.19 19.31 26 18 26z\"/>","swap_horiz":"<path d=\"M13.98 22L6 30l7.98 8v-6H28v-4H13.98v-6zM42 18l-7.98-8v6H20v4h14.02v6L42 18z\"/>","swap_vertical_circle":"<path d=\"M24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zM13 18l7-7 7 7h-5v8h-4v-8h-5zm22 12l-7 7-7-7h5v-8h4v8h5z\"/>","swap_vert":"<path d=\"M32 34.02V20h-4v14.02h-6L30 42l8-7.98h-6zM18 6l-8 7.98h6V28h4V13.98h6L18 6z\"/>","system_update_alt":"<path d=\"M24 32.5l8-8h-6v-18h-4v18h-6l8 8zm18-26H30v3.97h12v28.06H6V10.47h12V6.5H6c-2.21 0-4 1.79-4 4v28c0 2.21 1.79 4 4 4h36c2.21 0 4-1.79 4-4v-28c0-2.21-1.79-4-4-4z\"/>","tab":"<path d=\"M42 6H6c-2.21 0-4 1.79-4 4v28c0 2.21 1.79 4 4 4h36c2.21 0 4-1.79 4-4V10c0-2.21-1.79-4-4-4zm0 32H6V10h20v8h16v20z\"/>","tab_unselected":"<path d=\"M2 18h4v-4H2v4zm0 8h4v-4H2v4zm0-16h4V6c-2.21 0-4 1.79-4 4zm16 32h4v-4h-4v4zM2 34h4v-4H2v4zm4 8v-4H2c0 2.21 1.79 4 4 4zM42 6H26v12h20v-8c0-2.21-1.79-4-4-4zm0 28h4v-4h-4v4zM18 10h4V6h-4v4zm-8 32h4v-4h-4v4zm0-32h4V6h-4v4zm32 32c2.21 0 4-1.79 4-4h-4v4zm0-16h4v-4h-4v4zM26 42h4v-4h-4v4zm8 0h4v-4h-4v4z\"/>","theaters":"<path d=\"M36 6v4h-4V6H16v4h-4V6H8v36h4v-4h4v4h16v-4h4v4h4V6h-4zM16 34h-4v-4h4v4zm0-8h-4v-4h4v4zm0-8h-4v-4h4v4zm20 16h-4v-4h4v4zm0-8h-4v-4h4v4zm0-8h-4v-4h4v4z\"/>","thumbs_up_down":"<path d=\"M24 12c0-1.1-.9-2-2-2H11.63l1.33-6.35c.03-.15.05-.31.05-.47 0-.62-.25-1.18-.66-1.59L10.76 0 .88 9.88C.34 10.42 0 11.17 0 12v13c0 1.66 1.34 3 3 3h13.5c1.24 0 2.31-.75 2.76-1.83l4.53-10.58c.13-.34.21-.7.21-1.09V12zm21 8H31.5c-1.24 0-2.31.75-2.76 1.83l-4.53 10.58c-.13.34-.21.7-.21 1.09V36c0 1.1.9 2 2 2h10.37l-1.33 6.35c-.03.15-.05.31-.05.47 0 .62.25 1.18.66 1.59L37.24 48l9.88-9.88c.54-.54.88-1.29.88-2.12V23c0-1.66-1.34-3-3-3z\"/>","thumb_down":"<path d=\"M30 6H12c-1.66 0-3.08 1.01-3.68 2.44l-6.03 14.1C2.11 23 2 23.49 2 24v3.83l.02.02L2 28c0 2.21 1.79 4 4 4h12.63l-1.91 9.14c-.04.2-.07.41-.07.63 0 .83.34 1.58.88 2.12L19.66 46l13.17-13.17C33.55 32.1 34 31.1 34 30V10c0-2.21-1.79-4-4-4zm8 0v24h8V6h-8z\"/>","thumb_up":"<path d=\"M2 42h8V18H2v24zm44-22c0-2.21-1.79-4-4-4H29.37l1.91-9.14c.04-.2.07-.41.07-.63 0-.83-.34-1.58-.88-2.12L28.34 2 15.17 15.17C14.45 15.9 14 16.9 14 18v20c0 2.21 1.79 4 4 4h18c1.66 0 3.08-1.01 3.68-2.44l6.03-14.1c.18-.46.29-.95.29-1.46v-3.83l-.02-.02L46 20z\"/>","timeline":"<path d=\"M46 16c0 2.2-1.8 4-4 4-.36 0-.7-.04-1.02-.14l-7.12 7.1c.1.32.14.68.14 1.04 0 2.2-1.8 4-4 4s-4-1.8-4-4c0-.36.04-.72.14-1.04l-5.1-5.1c-.32.1-.68.14-1.04.14s-.72-.04-1.04-.14l-9.1 9.12c.1.32.14.66.14 1.02 0 2.2-1.8 4-4 4s-4-1.8-4-4 1.8-4 4-4c.36 0 .7.04 1.02.14l9.12-9.1c-.1-.32-.14-.68-.14-1.04 0-2.2 1.8-4 4-4s4 1.8 4 4c0 .36-.04.72-.14 1.04l5.1 5.1c.32-.1.68-.14 1.04-.14s.72.04 1.04.14l7.1-7.12c-.1-.32-.14-.66-.14-1.02 0-2.2 1.8-4 4-4s4 1.8 4 4z\"/>","toc":"<path d=\"M6 18h28v-4H6v4zm0 8h28v-4H6v4zm0 8h28v-4H6v4zm32 0h4v-4h-4v4zm0-20v4h4v-4h-4zm0 12h4v-4h-4v4z\"/>","today":"<path d=\"M38 6h-2V2h-4v4H16V2h-4v4h-2c-2.21 0-3.98 1.79-3.98 4L6 38c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4V10c0-2.21-1.79-4-4-4zm0 32H10V16h28v22zM14 20h10v10H14z\"/>","toll":"<path d=\"M6 24c0-5.22 3.34-9.65 8-11.3V8.52C7.1 10.3 2 16.55 2 24s5.1 13.7 12 15.48V35.3C9.34 33.65 6 29.22 6 24zM30 8c-8.84 0-16 7.16-16 16s7.16 16 16 16 16-7.16 16-16S38.84 8 30 8zm0 28c-6.63 0-12-5.37-12-12s5.37-12 12-12 12 5.37 12 12-5.37 12-12 12z\"/>","touch_app":"<path d=\"M18 22.48V15c0-2.76 2.24-5 5-5s5 2.24 5 5v7.48c2.41-1.61 4-4.36 4-7.48 0-4.97-4.03-9-9-9s-9 4.03-9 9c0 3.12 1.59 5.87 4 7.48zm19.67 9.26l-9.08-4.52c-.34-.14-.7-.22-1.09-.22H26V15c0-1.66-1.34-3-3-3s-3 1.34-3 3v21.47l-6.85-1.43c-.15-.03-.31-.05-.47-.05-.62 0-1.18.26-1.59.66l-1.58 1.6 9.88 9.88c.55.54 1.3.88 2.12.88H35.1c1.51 0 2.66-1.11 2.87-2.56l1.51-10.54c.02-.14.03-.27.03-.41-.01-1.24-.77-2.31-1.84-2.76z\"/>","track_changes":"<path d=\"M38.14 9.86l-2.82 2.82C38.2 15.58 40 19.58 40 24c0 8.84-7.16 16-16 16S8 32.84 8 24c0-8.16 6.1-14.88 14-15.86v4.04c-5.68.96-10 5.88-10 11.82 0 6.62 5.38 12 12 12s12-5.38 12-12c0-3.32-1.34-6.32-3.52-8.48l-2.82 2.82C31.1 19.8 32 21.8 32 24c0 4.42-3.58 8-8 8s-8-3.58-8-8c0-3.72 2.56-6.82 6-7.72v4.28c-1.2.7-2 1.96-2 3.44 0 2.2 1.8 4 4 4s4-1.8 4-4c0-1.48-.8-2.76-2-3.44V4h-2C12.96 4 4 12.96 4 24s8.96 20 20 20 20-8.96 20-20c0-5.52-2.24-10.52-5.86-14.14z\"/>","translate":"<path d=\"M25.74 30.15l-5.08-5.02.06-.06c3.48-3.88 5.96-8.34 7.42-13.06H34V8H20V4h-4v4H2v3.98h22.34C22.99 15.84 20.88 19.5 18 22.7c-1.86-2.07-3.4-4.32-4.62-6.7h-4c1.46 3.26 3.46 6.34 5.96 9.12L5.17 35.17 8 38l10-10 6.22 6.22 1.52-4.07zM37 20h-4l-9 24h4l2.25-6h9.5L42 44h4l-9-24zm-5.25 14L35 25.33 38.25 34h-6.5z\"/>","trending_down":"<path d=\"M32 36l4.59-4.59-9.76-9.75-8 8L4 14.83 6.83 12l12 12 8-8 12.58 12.59L44 24v12z\"/>","trending_flat":"<path d=\"M44 24l-8-8v6H6v4h30v6z\"/>","trending_up":"<path d=\"M32 12l4.59 4.59-9.76 9.75-8-8L4 33.17 6.83 36l12-12 8 8 12.58-12.59L44 24V12z\"/>","turned_in":"<path d=\"M34 6H14c-2.21 0-3.98 1.79-3.98 4L10 42l14-6 14 6V10c0-2.21-1.79-4-4-4z\"/>","turned_in_not":"<path d=\"M34 6H14c-2.21 0-3.98 1.79-3.98 4L10 42l14-6 14 6V10c0-2.21-1.79-4-4-4zm0 30l-10-4.35L14 36V10h20v26z\"/>","update":"<path d=\"M42 20.25H28.43l5.49-5.64c-5.46-5.41-14.3-5.61-19.76-.2-5.46 5.41-5.46 14.17 0 19.58 5.46 5.41 14.3 5.41 19.76 0 2.72-2.7 4.08-5.83 4.07-9.79H42c0 3.96-1.76 9.1-5.28 12.59-7.02 6.95-18.42 6.95-25.44 0s-7.07-18.22-.05-25.17c7.01-6.95 18.29-6.95 25.3 0L42 6v14.25zM25 16v8.5l7 4.16-1.44 2.42L22 26V16h3z\"/>","verified_user":"<path d=\"M24 2L6 10v12c0 11.11 7.67 21.47 18 24 10.33-2.53 18-12.89 18-24V10L24 2zm-4 32l-8-8 2.83-2.83L20 28.34l13.17-13.17L36 18 20 34z\"/>","view_agenda":"<path d=\"M40 26H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h34c1.1 0 2-.9 2-2V28c0-1.1-.9-2-2-2zm0-20H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h34c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2z\"/>","view_array":"<path d=\"M8 36h6V10H8v26zm28-26v26h6V10h-6zM16 36h18V10H16v26z\"/>","view_carousel":"<path d=\"M14 38h20V8H14v30zM4 34h8V12H4v22zm32-22v22h8V12h-8z\"/>","view_column":"<path d=\"M20 36h10V10H20v26zM8 36h10V10H8v26zm24-26v26h10V10H32z\"/>","view_day":"<path d=\"M4 42h38v-6H4v6zm36-26H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h34c1.1 0 2-.9 2-2V18c0-1.1-.9-2-2-2zM4 6v6h38V6H4z\"/>","view_headline":"<path d=\"M8 30h34v-4H8v4zm0 8h34v-4H8v4zm0-16h34v-4H8v4zm0-12v4h34v-4H8z\"/>","view_list":"<path d=\"M8 28h8v-8H8v8zm0 10h8v-8H8v8zm0-20h8v-8H8v8zm10 10h24v-8H18v8zm0 10h24v-8H18v8zm0-28v8h24v-8H18z\"/>","view_module":"<path d=\"M8 22h10V10H8v12zm0 14h10V24H8v12zm12 0h10V24H20v12zm12 0h10V24H32v12zM20 22h10V10H20v12zm12-12v12h10V10H32z\"/>","view_quilt":"<path d=\"M20 36h10V24H20v12zM8 36h10V10H8v26zm24 0h10V24H32v12zM20 10v12h22V10H20z\"/>","view_stream":"<path d=\"M8 36h34V24H8v12zm0-26v12h34V10H8z\"/>","view_week":"<path d=\"M12 10H6c-1.1 0-2 .9-2 2v24c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2V12c0-1.1-.9-2-2-2zm28 0h-6c-1.1 0-2 .9-2 2v24c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2V12c0-1.1-.9-2-2-2zm-14 0h-6c-1.1 0-2 .9-2 2v24c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2V12c0-1.1-.9-2-2-2z\"/>","visibility":"<path d=\"M24 9C14 9 5.46 15.22 2 24c3.46 8.78 12 15 22 15 10.01 0 18.54-6.22 22-15-3.46-8.78-11.99-15-22-15zm0 25c-5.52 0-10-4.48-10-10s4.48-10 10-10 10 4.48 10 10-4.48 10-10 10zm0-16c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6z\"/>","visibility_off":"<path d=\"M24 14c5.52 0 10 4.48 10 10 0 1.29-.26 2.52-.71 3.65l5.85 5.85c3.02-2.52 5.4-5.78 6.87-9.5-3.47-8.78-12-15-22.01-15-2.8 0-5.48.5-7.97 1.4l4.32 4.31c1.13-.44 2.36-.71 3.65-.71zM4 8.55l4.56 4.56.91.91C6.17 16.6 3.56 20.03 2 24c3.46 8.78 12 15 22 15 3.1 0 6.06-.6 8.77-1.69l.85.85L39.45 44 42 41.46 6.55 6 4 8.55zM15.06 19.6l3.09 3.09c-.09.43-.15.86-.15 1.31 0 3.31 2.69 6 6 6 .45 0 .88-.06 1.3-.15l3.09 3.09C27.06 33.6 25.58 34 24 34c-5.52 0-10-4.48-10-10 0-1.58.4-3.06 1.06-4.4zm8.61-1.57l6.3 6.3L30 24c0-3.31-2.69-6-6-6l-.33.03z\"/>","watch_later":"<path d=\"M23.98 4C12.94 4 4 12.96 4 24s8.94 20 19.98 20C35.04 44 44 35.04 44 24S35.04 4 23.98 4zm8.52 28.3L22 26V14h3v10.5l9 5.34-1.5 2.46z\"/>","work":"<path d=\"M40 12h-8V8c0-2.21-1.79-4-4-4h-8c-2.21 0-4 1.79-4 4v4H8c-2.21 0-3.98 1.79-3.98 4L4 38c0 2.21 1.79 4 4 4h32c2.21 0 4-1.79 4-4V16c0-2.21-1.79-4-4-4zm-12 0h-8V8h8v4z\"/>","youtube_searched_for":"<path d=\"M34.02 28h-1.59l-.55-.55c1.96-2.27 3.14-5.22 3.14-8.45 0-7.18-5.82-12.99-13-12.99S9.03 12 9.02 19H4l7.68 8L20 19h-6.98c.01-5 4.03-8.99 9-8.99s9 4.03 9 9-4.03 9-9 9c-1.29 0-2.52-.28-3.63-.77l-2.96 2.96c1.93 1.14 4.18 1.81 6.59 1.81 3.23 0 6.17-1.18 8.44-3.13l.54.54V31l10.01 9.98L43.99 38l-9.97-10z\"/>","add_alert":"<path d=\"M20.02 41.02c0 2.2 1.78 3.98 3.98 3.98s3.98-1.78 3.98-3.98h-7.96zm17.74-8.38V21c0-6.5-4.5-11.94-10.58-13.38V6.18C27.18 4.42 25.76 3 24 3s-3.18 1.42-3.18 3.18v1.44C14.74 9.06 10.24 14.5 10.24 21v11.64L6 36.88V39h36v-2.12l-4.24-4.24zM32 25.01h-6v6h-4v-6h-6V21h6v-6h4v6h6v4.01z\"/>","error":"<path d=\"M24 4C12.96 4 4 12.95 4 24s8.96 20 20 20 20-8.95 20-20S35.04 4 24 4zm2 30h-4v-4h4v4zm0-8h-4V14h4v12z\"/>","error_outline":"<path d=\"M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z\"/>","warning":"<path d=\"M2 42h44L24 4 2 42zm24-6h-4v-4h4v4zm0-8h-4v-8h4v8z\"/>","add_to_queue":"<path d=\"M42 6H6c-2.21 0-4 1.79-4 4v24c0 2.21 1.79 4 4 4h10v4h16v-4h10c2.21 0 3.98-1.79 3.98-4L46 10c0-2.21-1.79-4-4-4zm0 28H6V10h36v24zM32 20v4h-6v6h-4v-6h-6v-4h6v-6h4v6h6z\"/>","airplay":"<path d=\"M42 6H6c-2.2 0-4 1.8-4 4v24c0 2.2 1.8 4 4 4h8v-4H6V10h36v24h-8v4h8c2.2 0 4-1.8 4-4V10c0-2.2-1.8-4-4-4zM12 44h24L24 32z\"/>","album":"<path d=\"M24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm0 29c-4.97 0-9-4.03-9-9s4.03-9 9-9 9 4.03 9 9-4.03 9-9 9zm0-11c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z\"/>","art_track":"<path fill=\"#010101\" d=\"M44 26H28v-4h16v4zm0-12H28v4h16v-4zM28 34h16v-4H28v4zm-4-16v12c0 2.2-1.8 4-4 4H8c-2.2 0-4-1.8-4-4V18c0-2.2 1.8-4 4-4h12c2.2 0 4 1.8 4 4zm-3 12l-4.5-6-3.5 4.51-2.5-3.01L7 30h14z\"/>","av_timer":"<path d=\"M22 34c0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2-2 .9-2 2zm0-28v8h4v-3.84c6.78.97 12 6.79 12 13.84 0 7.73-6.27 14-14 14s-14-6.27-14-14c0-3.36 1.18-6.43 3.15-8.85L24 26l2.83-2.83-13.6-13.6-.02.04C8.84 12.89 6 18.11 6 24c0 9.94 8.04 18 17.99 18S42 33.94 42 24 33.94 6 23.99 6H22zm14 18c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2zm-24 0c0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2-2 .9-2 2z\"/>","branding_watermark":"<path d=\"M42 6H6c-2.2 0-4 1.8-4 4v28c0 2.2 1.8 4 4 4h36c2.2 0 4-1.8 4-4V10c0-2.2-1.8-4-4-4zm0 32H24V26h18v12z\"/>","call_to_action":"<path d=\"M42 6H6c-2.2 0-4 1.8-4 4v28c0 2.2 1.8 4 4 4h36c2.2 0 4-1.8 4-4V10c0-2.2-1.8-4-4-4zm0 32H6v-6h36v6z\"/>","closed_caption":"<path d=\"M38 8H10c-2.21 0-4 1.79-4 4v24c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4V12c0-2.21-1.79-4-4-4zM22 22h-3v-1h-4v6h4v-1h3v2c0 1.1-.89 2-2 2h-6c-1.11 0-2-.9-2-2v-8c0-1.1.89-2 2-2h6c1.11 0 2 .9 2 2v2zm14 0h-3v-1h-4v6h4v-1h3v2c0 1.1-.89 2-2 2h-6c-1.11 0-2-.9-2-2v-8c0-1.1.89-2 2-2h6c1.11 0 2 .9 2 2v2z\"/>","equalizer":"<path d=\"M20 40h8V8h-8v32zM8 40h8V24H8v16zm24-22v22h8V18h-8z\"/>","explicit":"<path d=\"M38 6H10c-2.21 0-4 1.79-4 4v28c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4V10c0-2.21-1.79-4-4-4zm-8 12h-8v4h8v4h-8v4h8v4H18V14h12v4z\"/>","fast_forward":"<path d=\"M8 36l17-12L8 12v24zm18-24v24l17-12-17-12z\"/>","fast_rewind":"<path d=\"M22 36V12L5 24l17 12zm1-12l17 12V12L23 24z\"/>","featured_play_list":"<path d=\"M42 6H6c-2.2 0-4 1.8-4 4v28c0 2.2 1.8 4 4 4h36c2.2 0 4-1.8 4-4V10c0-2.2-1.8-4-4-4zM24 22H6v-4h18v4zm0-8H6v-4h18v4z\"/>","featured_video":"<path d=\"M42 6H6c-2.2 0-4 1.8-4 4v28c0 2.2 1.8 4 4 4h36c2.2 0 4-1.8 4-4V10c0-2.2-1.8-4-4-4zM24 24H6V10h18v14z\"/>","fiber_dvr":"<path d=\"M35 21h4v2h-4zM9 21h4v6H9zM42 6H6c-2.21 0-4 1.79-4 4v28c0 2.21 1.79 4 4 4h36c2.21 0 4-1.79 4-4V10c0-2.21-1.79-4-4-4zM16 27c0 1.7-1.3 3-3 3H6V18h7c1.7 0 3 1.3 3 3v6zm9.24 3h-3l-3.5-12h3l2 6.86 2-6.86h3l-3.5 12zM42 23c0 1.2-.8 2.3-1.8 2.8L42 30h-3l-1.7-4H35v4h-3V18h7c1.7 0 3 1.3 3 3v2z\"/>","fiber_manual_record":"<circle cx=\"40\" cy=\"12\" r=\"16\"/>","fiber_new":"<path d=\"M40 8H8c-2.21 0-3.98 1.79-3.98 4L4 36c0 2.21 1.79 4 4 4h32c2.21 0 4-1.79 4-4V12c0-2.21-1.79-4-4-4zM17 30h-2.4l-5.1-7v7H7V18h2.5l5 7v-7H17v12zm10-9.49h-5v2.24h5v2.51h-5v2.23h5V30h-8V18h8v2.51zM41 28c0 1.1-.9 2-2 2h-8c-1.1 0-2-.9-2-2V18h2.5v9.01h2.25v-7.02h2.5v7.02h2.25V18H41v10z\"/>","fiber_pin":"<path d=\"M11 21h4v2h-4zM40 8H8c-2.22 0-3.98 1.78-3.98 4L4 36c0 2.22 1.78 4 4 4h32c2.22 0 4-1.78 4-4V12c0-2.22-1.78-4-4-4zM18 23c0 1.7-1.3 3-3 3h-4v4H8V18h7c1.7 0 3 1.3 3 3v2zm7 7h-3V18h3v12zm15 0h-2.4l-5.1-7v7H30V18h2.5l5 7v-7H40v12z\"/>","fiber_smart_record":"<circle cx=\"34\" cy=\"12\" r=\"16\"/><path d=\"M50-3.48V.7c4.66 1.64 8 6.08 8 11.3s-3.34 9.66-8 11.3v4.18C56.9 25.7 62 19.46 62 12S56.9-1.7 50-3.48z\"/>","forward_10":"<path d=\"M8 26c0 8.8 7.2 16 16 16s16-7.2 16-16h-4c0 6.6-5.4 12-12 12s-12-5.4-12-12 5.4-12 12-12v8l10-10L24 2v8c-8.8 0-16 7.2-16 16zm13.7 6H20v-6.5l-2 .6v-1.4l3.5-1.3h.2V32zm8.5-3.5c0 .6-.1 1.2-.2 1.6s-.3.8-.6 1.1-.6.5-.9.7-.7.2-1.2.2-.8-.1-1.2-.2-.7-.4-.9-.7-.5-.7-.6-1.1-.2-1-.2-1.6V27c0-.6.1-1.2.2-1.6s.3-.8.6-1.1.6-.5.9-.7.7-.2 1.2-.2.8.1 1.2.2.7.4.9.7.5.7.6 1.1.2 1 .2 1.6v1.5zm-1.7-1.7c0-.4 0-.7-.1-1s-.1-.5-.2-.6-.2-.3-.4-.3-.3-.1-.5-.1-.4 0-.5.1-.3.2-.4.3-.2.4-.2.6-.1.6-.1 1v1.9c0 .4 0 .7.1 1s.1.5.2.6.2.3.4.3.3.1.5.1.4 0 .5-.1.3-.2.4-.3.2-.4.2-.6.1-.6.1-1v-1.9z\"/>","forward_30":"<path d=\"M19.1 27h.9c.4 0 .7-.1 1-.3s.3-.5.3-.9c0-.2 0-.3-.1-.4s-.1-.3-.2-.4-.2-.2-.4-.2-.3-.1-.5-.1-.3 0-.4.1-.3.1-.4.2-.2.2-.2.3-.1.2-.1.4h-1.7c0-.4.1-.7.2-1s.3-.5.6-.7.5-.4.9-.5.7-.2 1.1-.2c.4 0 .8.1 1.2.2s.7.3.9.5.5.5.6.8.2.7.2 1.1c0 .2 0 .4-.1.5s-.1.3-.3.5-.2.3-.4.4-.3.2-.6.3c.5.2.8.4 1.1.8s.4.8.4 1.2c0 .4-.1.8-.2 1.1s-.4.6-.6.8-.6.4-1 .5-.8.2-1.2.2c-.4 0-.7 0-1.1-.1s-.7-.2-.9-.5-.5-.5-.7-.8-.2-.7-.2-1.1h1.7c0 .2 0 .3.1.4s.1.2.3.3.2.2.4.2.3.1.5.1.4 0 .5-.1.3-.1.4-.2.2-.2.3-.4.1-.3.1-.5 0-.4-.1-.6-.2-.3-.3-.4-.3-.2-.4-.2-.4-.1-.6-.1h-.9V27zm11.5 1.5c0 .6-.1 1.2-.2 1.6s-.4.9-.6 1.2-.6.5-.9.7-.7.2-1.2.2-.8-.1-1.2-.2-.7-.4-.9-.7-.5-.7-.6-1.1-.2-1-.2-1.6V27c0-.6.1-1.2.2-1.6s.3-.8.6-1.1.6-.5.9-.7.7-.2 1.2-.2.8.1 1.2.2.7.4.9.7.5.7.6 1.1.2 1 .2 1.6v1.5zm-1.7-1.7c0-.4 0-.7-.1-1s-.1-.5-.2-.6-.2-.3-.4-.3-.3-.1-.5-.1-.4 0-.5.1-.3.2-.4.3-.2.4-.2.6-.1.6-.1 1v1.9c0 .4 0 .7.1 1s.1.5.2.6.2.3.4.3.3.1.5.1.4 0 .5-.1.3-.2.4-.3.2-.4.2-.6.1-.6.1-1v-1.9zM8 26c0 8.8 7.2 16 16 16s16-7.2 16-16h-4c0 6.6-5.4 12-12 12s-12-5.4-12-12 5.4-12 12-12v8l10-10L24 2v8c-8.8 0-16 7.2-16 16z\"/>","forward_5":"<path d=\"M8 26c0 8.8 7.2 16 16 16s16-7.2 16-16h-4c0 6.6-5.4 12-12 12s-12-5.4-12-12 5.4-12 12-12v8l10-10L24 2v8c-8.8 0-16 7.2-16 16zm13.4 1.8l.5-4.3h4.8v1.4h-3.4l-.2 1.8c.1 0 .1-.1.2-.1s.2-.1.3-.1.2-.1.4-.1h.4c.4 0 .8.1 1.1.2s.6.3.8.6.4.5.5.9.2.8.2 1.2c0 .4-.1.7-.2 1.1s-.3.6-.5.9-.5.5-.9.6-.8.2-1.3.2c-.4 0-.7-.1-1.1-.2s-.6-.3-.9-.5-.5-.5-.6-.8-.3-.7-.3-1.1h1.7c0 .4.2.6.4.8s.5.3.8.3c.2 0 .4 0 .5-.1s.3-.2.4-.3.2-.3.2-.5.1-.4.1-.6 0-.4-.1-.6-.1-.3-.3-.5-.3-.2-.4-.3-.4-.1-.6-.1h-.4s-.2.1-.3.1-.2.2-.3.3l-.2.2-1.3-.4z\"/>","games":"<path d=\"M30 15V4H18v11l6 6 6-6zm-15 3H4v12h11l6-6-6-6zm3 15v11h12V33l-6-6-6 6zm15-15l-6 6 6 6h11V18H33z\"/>","hearing":"<path d=\"M34 40c-.57 0-1.13-.12-1.53-.3-1.41-.75-2.43-1.77-3.42-4.77-1.03-3.11-2.94-4.58-4.79-6.01-1.58-1.22-3.22-2.48-4.63-5.05C18.58 21.95 18 19.86 18 18c0-5.61 4.39-10 10-10s10 4.39 10 10h4c0-7.85-6.15-14-14-14s-14 6.15-14 14c0 2.53.76 5.3 2.13 7.8 1.82 3.31 3.97 4.96 5.7 6.3 1.62 1.25 2.79 2.15 3.43 4.09 1.2 3.63 2.75 5.68 5.45 7.1 1.04.47 2.14.71 3.29.71 4.41 0 8-3.59 8-8h-4c0 2.21-1.79 4-4 4zM15.27 5.27l-2.83-2.83C8.46 6.42 6 11.92 6 18s2.46 11.58 6.44 15.56l2.83-2.83C12.01 27.47 10 22.97 10 18s2.01-9.47 5.27-12.73zM23 18c0 2.76 2.24 5 5 5s5-2.24 5-5-2.24-5-5-5-5 2.24-5 5z\"/>","high_quality":"<path d=\"M38 8H10c-2.21 0-4 1.79-4 4v24c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4V12c0-2.21-1.79-4-4-4zM22 30h-3v-4h-4v4h-3V18h3v5h4v-5h3v12zm14-2c0 1.1-.89 2-2 2h-1.5v3h-3v-3H28c-1.11 0-2-.9-2-2v-8c0-1.1.89-2 2-2h6c1.11 0 2 .9 2 2v8zm-7-1h4v-6h-4v6z\"/>","library_add":"<path d=\"M8 12H4v28c0 2.21 1.79 4 4 4h28v-4H8V12zm32-8H16c-2.21 0-4 1.79-4 4v24c0 2.21 1.79 4 4 4h24c2.21 0 4-1.79 4-4V8c0-2.21-1.79-4-4-4zm-2 18h-8v8h-4v-8h-8v-4h8v-8h4v8h8v4z\"/>","library_books":"<path d=\"M8 12H4v28c0 2.21 1.79 4 4 4h28v-4H8V12zm32-8H16c-2.21 0-4 1.79-4 4v24c0 2.21 1.79 4 4 4h24c2.21 0 4-1.79 4-4V8c0-2.21-1.79-4-4-4zm-2 18H18v-4h20v4zm-8 8H18v-4h12v4zm8-16H18v-4h20v4z\"/>","library_music":"<path d=\"M40 4H16c-2.21 0-4 1.79-4 4v24c0 2.21 1.79 4 4 4h24c2.21 0 4-1.79 4-4V8c0-2.21-1.79-4-4-4zm-4 10h-6v11c0 2.76-2.24 5-5 5s-5-2.24-5-5 2.24-5 5-5c1.13 0 2.16.39 3 1.02V10h8v4zM8 12H4v28c0 2.21 1.79 4 4 4h28v-4H8V12z\"/>","loop":"<path d=\"M24 8V2l-8 8 8 8v-6c6.63 0 12 5.37 12 12 0 2.03-.51 3.93-1.39 5.61l2.92 2.92C39.08 30.05 40 27.14 40 24c0-8.84-7.16-16-16-16zm0 28c-6.63 0-12-5.37-12-12 0-2.03.51-3.93 1.39-5.61l-2.92-2.92C8.92 17.95 8 20.86 8 24c0 8.84 7.16 16 16 16v6l8-8-8-8v6z\"/>","mic":"<path d=\"M24 28c3.31 0 5.98-2.69 5.98-6L30 10c0-3.32-2.68-6-6-6-3.31 0-6 2.68-6 6v12c0 3.31 2.69 6 6 6zm10.6-6c0 6-5.07 10.2-10.6 10.2-5.52 0-10.6-4.2-10.6-10.2H10c0 6.83 5.44 12.47 12 13.44V42h4v-6.56c6.56-.97 12-6.61 12-13.44h-3.4z\"/>","mic_none":"<path d=\"M24 28c3.31 0 5.98-2.69 5.98-6L30 10c0-3.32-2.68-6-6-6-3.31 0-6 2.68-6 6v12c0 3.31 2.69 6 6 6zM21.6 9.8c0-1.32 1.08-2.4 2.4-2.4 1.32 0 2.4 1.08 2.4 2.4l-.02 12.4c0 1.32-1.07 2.4-2.38 2.4-1.32 0-2.4-1.08-2.4-2.4V9.8zm13 12.2c0 6-5.07 10.2-10.6 10.2-5.52 0-10.6-4.2-10.6-10.2H10c0 6.83 5.44 12.47 12 13.44V42h4v-6.56c6.56-.97 12-6.61 12-13.44h-3.4z\"/>","mic_off":"<path d=\"M38 22h-3.4c0 1.49-.31 2.87-.87 4.1l2.46 2.46C37.33 26.61 38 24.38 38 22zm-8.03.33c0-.11.03-.22.03-.33V10c0-3.32-2.69-6-6-6s-6 2.68-6 6v.37l11.97 11.96zM8.55 6L6 8.55l12.02 12.02v1.44c0 3.31 2.67 6 5.98 6 .45 0 .88-.06 1.3-.15l3.32 3.32c-1.43.66-3 1.03-4.62 1.03-5.52 0-10.6-4.2-10.6-10.2H10c0 6.83 5.44 12.47 12 13.44V42h4v-6.56c1.81-.27 3.53-.9 5.08-1.81L39.45 42 42 39.46 8.55 6z\"/>","movie":"<path d=\"M36 8l4 8h-6l-4-8h-4l4 8h-6l-4-8h-4l4 8h-6l-4-8H8c-2.21 0-3.98 1.79-3.98 4L4 36c0 2.21 1.79 4 4 4h32c2.21 0 4-1.79 4-4V8h-8z\"/>","music_video":"<path d=\"M46 10c0-2.21-1.79-4-4-4H6c-2.21 0-4 1.79-4 4v28c0 2.21 1.79 4 4 4h36c2.21 0 4-1.79 4-4V10zm-4 28H6V10h36v28zm-26-8c0-3.31 2.69-6 6-6 .71 0 1 .14 2 .37V12h10v4h-6l-.01 14.05C27.96 33.34 25.3 36 22 36c-3.31 0-6-2.69-6-6z\"/>","new_releases":"<path d=\"M46 24l-4.88-5.56.68-7.37-7.22-1.63-3.78-6.36L24 6l-6.8-2.92-3.78 6.36-7.22 1.63.68 7.37L2 24l4.88 5.56-.68 7.37 7.22 1.63 3.78 6.36L24 42l6.8 2.92 3.78-6.36 7.22-1.63-.68-7.37L46 24zM26 34h-4v-4h4v4zm0-8h-4V14h4v12z\"/>","note":"<path d=\"M44 20L32 8H8c-2.2 0-4 1.8-4 4v24.02C4 38.22 5.8 40 8 40l32-.02c2.2 0 4-1.78 4-3.98V20zm-14-9l11 11H30V11z\"/>","not_interested":"<path d=\"M24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm0 36c-8.84 0-16-7.16-16-16 0-3.7 1.27-7.09 3.37-9.8L33.8 36.63C31.09 38.73 27.7 40 24 40zm12.63-6.2L14.2 11.37C16.91 9.27 20.3 8 24 8c8.84 0 16 7.16 16 16 0 3.7-1.27 7.09-3.37 9.8z\"/>","pause":"<path d=\"M12 38h8V10h-8v28zm16-28v28h8V10h-8z\"/>","pause_circle_filled":"<path d=\"M24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm-2 28h-4V16h4v16zm8 0h-4V16h4v16z\"/>","pause_circle_outline":"<path d=\"M18 32h4V16h-4v16zm6-28C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm0 36c-8.82 0-16-7.18-16-16S15.18 8 24 8s16 7.18 16 16-7.18 16-16 16zm2-8h4V16h-4v16z\"/>","playlist_add":"<path d=\"M28 20H4v4h24v-4zm0-8H4v4h24v-4zm8 16v-8h-4v8h-8v4h8v8h4v-8h8v-4h-8zM4 32h16v-4H4v4z\"/>","playlist_add_check":"<path d=\"M28 20H4v4h24v-4zm0-8H4v4h24v-4zM4 32h16v-4H4v4zm39-9l3 3-13.99 14L23 31l3-3 6.01 6L43 23z\"/>","playlist_play":"<path d=\"M26 6H-8v4h34V6zm0-8H-8v4h34v-4zM-8 18h26v-4H-8v4zm30-4v12l10-6-10-6z\"/>","play_arrow":"<path d=\"M16 10v28l22-14z\"/>","play_circle_filled":"<path d=\"M24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm-4 29V15l12 9-12 9z\"/>","play_circle_filled_white":"<path d=\"M24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm-4 29V15l12 9-12 9z\"/>","play_circle_outline":"<path d=\"M20 33l12-9-12-9v18zm4-29C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm0 36c-8.82 0-16-7.18-16-16S15.18 8 24 8s16 7.18 16 16-7.18 16-16 16z\"/>","queue":"<path d=\"M8 12H4v28c0 2.21 1.79 4 4 4h28v-4H8V12zm32-8H16c-2.21 0-4 1.79-4 4v24c0 2.21 1.79 4 4 4h24c2.21 0 4-1.79 4-4V8c0-2.21-1.79-4-4-4zm-2 18h-8v8h-4v-8h-8v-4h8v-8h4v8h8v4z\"/>","queue_music":"<path d=\"M30 12H6v4h24v-4zm0 8H6v4h24v-4zM6 32h16v-4H6v4zm28-20v16.37c-.63-.23-1.29-.37-2-.37-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6V16h6v-4H34z\"/>","queue_play_next":"<path d=\"M42 6H6c-2.22 0-4 1.78-4 4v24c0 2.2 1.78 4 4 4h10v4h16v-4h4v-4H6V10h36v16h4V10c0-2.22-1.8-4-4-4zM26 20v-6h-4v6h-6v4h6v6h4v-6h6v-4h-6zm22 16l-9 9-3-3 6-6-6-6 3-3 9 9z\"/>","radio":"<path d=\"M6.47 12.3C5.02 12.87 4 14.33 4 16v24c0 2.21 1.79 4 4 4h32c2.21 0 4-1.79 4-4V16c0-2.21-1.79-4-4-4H16.61l16.53-6.67L31.76 2 6.47 12.3zM14 40c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm26-16h-4v-4h-4v4H8v-8h32v8z\"/>","recent_actors":"<path d=\"M42 10v28h4V10h-4zm-8 28h4V10h-4v28zm-6-28H4c-1.1 0-2 .9-2 2v24c0 1.1.9 2 2 2h24c1.1 0 2-.9 2-2V12c0-1.1-.9-2-2-2zm-12 5.5c2.48 0 4.5 2.02 4.5 4.5 0 2.49-2.02 4.5-4.5 4.5s-4.5-2.01-4.5-4.5c0-2.48 2.02-4.5 4.5-4.5zM25 34H7v-1.5c0-3 6-4.5 9-4.5s9 1.5 9 4.5V34z\"/>","remove_from_queue":"<path d=\"M42 6H6c-2.21 0-4 1.79-4 4v24c0 2.21 1.79 4 4 4h10v4h16v-4h10c2.21 0 3.98-1.79 3.98-4L46 10c0-2.21-1.79-4-4-4zm0 28H6V10h36v24zM32 20v4H16v-4h16z\"/>","repeat":"<path d=\"M14 14h20v6l8-8-8-8v6H10v12h4v-8zm20 20H14v-6l-8 8 8 8v-6h24V26h-4v8z\"/>","repeat_one":"<path d=\"M14 14h20v6l8-8-8-8v6H10v12h4v-8zm20 20H14v-6l-8 8 8 8v-6h24V26h-4v8zm-8-4V18h-2l-4 2v2h3v8h3z\"/>","replay_10":"<path d=\"M24 10V2L14 12l10 10v-8c6.6 0 12 5.4 12 12s-5.4 12-12 12-12-5.4-12-12H8c0 8.8 7.2 16 16 16s16-7.2 16-16-7.2-16-16-16zm-2.2 22h-1.7v-6.5l-2 .6v-1.4l3.5-1.3h.2V32zm8.5-3.5c0 .6-.1 1.2-.2 1.6s-.3.8-.6 1.1-.6.5-.9.7-.7.2-1.2.2-.8-.1-1.2-.2-.7-.4-.9-.7-.5-.7-.6-1.1-.2-1-.2-1.6V27c0-.6.1-1.2.2-1.6s.3-.8.6-1.1.6-.5.9-.7.7-.2 1.2-.2.8.1 1.2.2.7.4.9.7.5.7.6 1.1.2 1 .2 1.6v1.5zm-1.6-1.7c0-.4 0-.7-.1-1s-.1-.5-.2-.6-.2-.3-.4-.3-.3-.1-.5-.1-.4 0-.5.1-.3.2-.4.3-.2.4-.2.6-.1.6-.1 1v1.9c0 .4 0 .7.1 1s.1.5.2.6.2.3.4.3.3.1.5.1.4 0 .5-.1.3-.2.4-.3.2-.4.2-.6.1-.6.1-1v-1.9z\"/>","replay_30":"<path d=\"M24 10V2L14 12l10 10v-8c6.6 0 12 5.4 12 12s-5.4 12-12 12-12-5.4-12-12H8c0 8.8 7.2 16 16 16s16-7.2 16-16-7.2-16-16-16zm-4.9 17h.9c.4 0 .7-.1 1-.3s.3-.5.3-.9c0-.2 0-.3-.1-.4s-.1-.3-.2-.4-.2-.2-.4-.2-.3-.1-.5-.1-.3 0-.4.1-.3.1-.4.2-.2.2-.2.3-.1.2-.1.4h-1.7c0-.4.1-.7.2-1s.3-.5.6-.7.5-.4.9-.5.7-.2 1.1-.2c.4 0 .8.1 1.2.2s.7.3.9.5.5.5.6.8.2.7.2 1.1c0 .2 0 .4-.1.5s-.1.3-.3.5-.2.3-.4.4-.3.2-.6.3c.5.2.8.4 1.1.8s.4.8.4 1.2c0 .4-.1.8-.2 1.1s-.4.6-.6.8-.6.4-1 .5-.8.2-1.2.2c-.4 0-.7 0-1.1-.1s-.7-.2-.9-.5-.5-.5-.7-.8-.2-.7-.2-1.1h1.7c0 .2 0 .3.1.4s.1.2.3.3.2.2.4.2.3.1.5.1.4 0 .5-.1.3-.1.4-.2.2-.2.3-.4.1-.3.1-.5 0-.4-.1-.6-.2-.3-.3-.4-.3-.2-.4-.2-.4-.1-.6-.1h-.9V27zm11.5 1.5c0 .6-.1 1.2-.2 1.6s-.3.8-.6 1.1-.6.5-.9.7-.7.2-1.2.2-.8-.1-1.2-.2-.7-.4-.9-.7-.5-.7-.6-1.1-.2-1-.2-1.6V27c0-.6.1-1.2.2-1.6s.3-.8.6-1.1.6-.5.9-.7.7-.2 1.2-.2.8.1 1.2.2.7.4.9.7.5.7.6 1.1.2 1 .2 1.6v1.5zm-1.7-1.7c0-.4 0-.7-.1-1s-.1-.5-.2-.6-.2-.3-.4-.3-.3-.1-.5-.1-.4 0-.5.1-.3.2-.4.3-.2.4-.2.6-.1.6-.1 1v1.9c0 .4 0 .7.1 1s.1.5.2.6.2.3.4.3.3.1.5.1.4 0 .5-.1.3-.2.4-.3.2-.4.2-.6.1-.6.1-1v-1.9z\"/>","replay":"<path d=\"M24 10V2L14 12l10 10v-8c6.63 0 12 5.37 12 12s-5.37 12-12 12-12-5.37-12-12H8c0 8.84 7.16 16 16 16s16-7.16 16-16-7.16-16-16-16z\"/>","replay_5":"<path d=\"M24 10V2L14 12l10 10v-8c6.6 0 12 5.4 12 12s-5.4 12-12 12-12-5.4-12-12H8c0 8.8 7.2 16 16 16s16-7.2 16-16-7.2-16-16-16zm-2.6 17.8l.5-4.3h4.8v1.4h-3.4l-.2 1.8c.1 0 .1-.1.2-.1s.2-.1.3-.1.2-.1.4-.1h.4c.4 0 .8.1 1.1.2s.6.3.8.6.4.5.5.9.2.8.2 1.2c0 .4-.1.7-.2 1.1s-.3.6-.5.9-.5.5-.9.6-.8.2-1.3.2c-.4 0-.7-.1-1.1-.2s-.6-.3-.9-.5-.5-.5-.6-.8-.3-.7-.3-1.1h1.7c0 .4.2.6.4.8s.5.3.8.3c.2 0 .4 0 .5-.1s.3-.2.4-.3.2-.3.2-.5.1-.4.1-.6 0-.4-.1-.6-.1-.3-.3-.5-.3-.2-.4-.3-.4-.1-.6-.1h-.4s-.2.1-.3.1-.2.2-.3.3l-.2.2-1.3-.4z\"/>","shuffle":"<path d=\"M21.17 18.34L10.83 8 8 10.83l10.34 10.34 2.83-2.83zM29 8l4.09 4.09L8 37.17 10.83 40l25.09-25.09L40 19V8H29zm.66 18.83l-2.83 2.83 6.26 6.26L29 40h11V29l-4.09 4.09-6.25-6.26z\"/>","skip_next":"<path d=\"M12 36l17-12-17-12v24zm20-24v24h4V12h-4z\"/>","skip_previous":"<path d=\"M12 12h4v24h-4zm7 12l17 12V12z\"/>","slow_motion_video":"<path fill=\"#010101\" d=\"M26.1 19.58L20 15v18l6.1-4.58L32 24zm0 0L20 15v18l6.1-4.58L32 24zm0 0L20 15v18l6.1-4.58L32 24zM22 8.14V4.1c-4.02.4-7.68 2-10.64 4.42l2.84 2.86c2.22-1.72 4.88-2.88 7.8-3.24zM11.38 14.2l-2.86-2.84C6.1 14.32 4.5 17.98 4.1 22h4.04c.36-2.92 1.52-5.58 3.24-7.8zM8.14 26H4.1c.4 4.02 2 7.68 4.42 10.64l2.86-2.86C9.66 31.58 8.5 28.92 8.14 26zm3.22 13.48C14.32 41.9 18 43.5 22 43.9v-4.04c-2.92-.36-5.58-1.52-7.8-3.24l-2.84 2.86zM44 24c0 10.32-7.84 18.84-17.9 19.9v-4.04C33.94 38.82 40 32.1 40 24S33.94 9.18 26.1 8.14V4.1C36.16 5.16 44 13.68 44 24z\"/>","snooze":"<path d=\"M15.76 6.78l-2.57-3.06L4 11.43l2.57 3.06 9.19-7.71zM44 11.44l-9.19-7.71-2.57 3.06 9.19 7.71L44 11.44zM23.99 8C14.04 8 6 16.06 6 26s8.04 18 17.99 18S42 35.94 42 26 33.94 8 23.99 8zM24 40c-7.73 0-14-6.27-14-14s6.27-14 14-14 14 6.27 14 14-6.26 14-14 14zm-6-18h7.25L18 30.4V34h12v-4h-7.25L30 21.6V18H18v4z\"/>","stop":"<path d=\"M12 12h24v24H12z\"/>","subscriptions":"<path d=\"M40 16H8v-4h32v4zM36 4H12v4h24V4zm8 20v16c0 2.21-1.79 4-4 4H8c-2.21 0-4-1.79-4-4V24c0-2.21 1.79-4 4-4h32c2.21 0 4 1.79 4 4zm-12 8l-12-6.53v13.06L32 32z\"/>","subtitles":"<path d=\"M40 8H8c-2.21 0-4 1.79-4 4v24c0 2.21 1.79 4 4 4h32c2.21 0 4-1.79 4-4V12c0-2.21-1.79-4-4-4zM8 24h8v4H8v-4zm20 12H8v-4h20v4zm12 0h-8v-4h8v4zm0-8H20v-4h20v4z\"/>","surround_sound":"<path d=\"M40 8H8c-2.21 0-4 1.79-4 4v24c0 2.21 1.79 4 4 4h32c2.21 0 4-1.79 4-4V12c0-2.21-1.79-4-4-4zM15.51 32.49l-2.83 2.83C9.57 32.19 8 28.1 8 24c0-4.1 1.57-8.19 4.69-11.31l2.83 2.83C13.18 17.85 12 20.93 12 24c0 3.07 1.17 6.15 3.51 8.49zM24 32c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm11.31 3.31l-2.83-2.83C34.83 30.15 36 27.07 36 24c0-3.07-1.18-6.15-3.51-8.49l2.83-2.83C38.43 15.81 40 19.9 40 24c0 4.1-1.57 8.19-4.69 11.31zM24 20c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z\"/>","videocam":"<path d=\"M34 21v-7c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v20c0 1.1.9 2 2 2h24c1.1 0 2-.9 2-2v-7l8 8V13l-8 8z\"/>","videocam_off":"<path d=\"M42 13l-8 8v-7c0-1.1-.9-2-2-2H19.64L42 34.36V13zM6.55 4L4 6.55 9.45 12H8c-1.1 0-2 .9-2 2v20c0 1.1.9 2 2 2h24c.41 0 .77-.15 1.09-.37L39.46 42 42 39.45 6.55 4z\"/>","video_call":"<path d=\"M34 21v-7c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v20c0 1.1.9 2 2 2h24c1.1 0 2-.9 2-2v-7l8 8V13l-8 8zm-6 5h-6v6h-4v-6h-6v-4h6v-6h4v6h6v4z\"/>","video_label":"<path d=\"M42 6H6c-2.2 0-4 1.8-4 4v28c0 2.2 1.8 4 4 4h36c2.2 0 4-1.8 4-4V10c0-2.2-1.8-4-4-4zm0 26H6V10h36v22z\"/>","video_library":"<path d=\"M8 12H4v28c0 2.21 1.79 4 4 4h28v-4H8V12zm32-8H16c-2.21 0-4 1.79-4 4v24c0 2.21 1.79 4 4 4h24c2.21 0 4-1.79 4-4V8c0-2.21-1.79-4-4-4zM24 29V11l12 9-12 9z\"/>","volume_down":"<path d=\"M37 24c0-3.53-2.04-6.58-5-8.05v16.11c2.96-1.48 5-4.53 5-8.06zm-27-6v12h8l10 10V8L18 18h-8z\"/>","volume_mute":"<path d=\"M14 18v12h8l10 10V8L22 18h-8z\"/>","volume_off":"<path d=\"M33 24c0-3.53-2.04-6.58-5-8.05v4.42l4.91 4.91c.06-.42.09-.85.09-1.28zm5 0c0 1.88-.41 3.65-1.08 5.28l3.03 3.03C41.25 29.82 42 27 42 24c0-8.56-5.99-15.72-14-17.54v4.13c5.78 1.72 10 7.07 10 13.41zM8.55 6L6 8.55 15.45 18H6v12h8l10 10V26.55l8.51 8.51c-1.34 1.03-2.85 1.86-4.51 2.36v4.13c2.75-.63 5.26-1.89 7.37-3.62L39.45 42 42 39.45l-18-18L8.55 6zM24 8l-4.18 4.18L24 16.36V8z\"/>","volume_up":"<path d=\"M6 18v12h8l10 10V8L14 18H6zm27 6c0-3.53-2.04-6.58-5-8.05v16.11c2.96-1.48 5-4.53 5-8.06zM28 6.46v4.13c5.78 1.72 10 7.07 10 13.41s-4.22 11.69-10 13.41v4.13c8.01-1.82 14-8.97 14-17.54S36.01 8.28 28 6.46z\"/>","web":"<path d=\"M40 8H8c-2.21 0-3.98 1.79-3.98 4L4 36c0 2.21 1.79 4 4 4h32c2.21 0 4-1.79 4-4V12c0-2.21-1.79-4-4-4zM30 36H8v-8h22v8zm0-10H8v-8h22v8zm10 10h-8V18h8v18z\"/>","web_asset":"<path fill=\"#010101\" d=\"M38 8H10c-2.22 0-4 1.8-4 4v24c0 2.2 1.78 4 4 4h28c2.2 0 4-1.8 4-4V12c0-2.2-1.78-4-4-4zm0 28H10V16h28v20z\"/>","business":"<path d=\"M24 14V6H4v36h40V14H24zM12 38H8v-4h4v4zm0-8H8v-4h4v4zm0-8H8v-4h4v4zm0-8H8v-4h4v4zm8 24h-4v-4h4v4zm0-8h-4v-4h4v4zm0-8h-4v-4h4v4zm0-8h-4v-4h4v4zm20 24H24v-4h4v-4h-4v-4h4v-4h-4v-4h16v20zm-4-16h-4v4h4v-4zm0 8h-4v4h4v-4z\"/>","call":"<path d=\"M13.25 21.59c2.88 5.66 7.51 10.29 13.18 13.17l4.4-4.41c.55-.55 1.34-.71 2.03-.49C35.1 30.6 37.51 31 40 31c1.11 0 2 .89 2 2v7c0 1.11-.89 2-2 2C21.22 42 6 26.78 6 8c0-1.11.9-2 2-2h7c1.11 0 2 .89 2 2 0 2.49.4 4.9 1.14 7.14.22.69.06 1.48-.49 2.03l-4.4 4.42z\"/>","call_end":"<path d=\"M24 18c-3.21 0-6.3.5-9.2 1.44v6.21c0 .79-.46 1.47-1.12 1.8-1.95.98-3.74 2.23-5.33 3.7-.36.35-.85.57-1.4.57-.55 0-1.05-.22-1.41-.59L.59 26.18c-.37-.37-.59-.87-.59-1.42 0-.55.22-1.05.59-1.42C6.68 17.55 14.93 14 24 14s17.32 3.55 23.41 9.34c.37.36.59.87.59 1.42 0 .55-.22 1.05-.59 1.41l-4.95 4.95c-.36.36-.86.59-1.41.59-.54 0-1.04-.22-1.4-.57-1.59-1.47-3.38-2.72-5.33-3.7-.66-.33-1.12-1.01-1.12-1.8v-6.21C30.3 18.5 27.21 18 24 18z\"/>","call_made":"<path d=\"M18 10v4h13.17L8 37.17 10.83 40 34 16.83V30h4V10z\"/>","call_merge":"<path d=\"M34 40.83L36.83 38 30 31.17 27.17 34 34 40.83zM15 16h7v11.17L11.17 38 14 40.83l12-12V16h7l-9-9-9 9z\"/>","call_missed":"<path d=\"M39.17 14L24 29.17 12.83 18H22v-4H6v16h4v-9.17l14 14 18-18z\"/>","call_missed_outgoing":"<path d=\"M6 16.82l18 18 14-14V30h4V14H26v4h9.18L24 29.18 8.82 14 6 16.82z\"/>","call_received":"<path d=\"M40 10.83L37.17 8 14 31.17V18h-4v20h20v-4H16.83z\"/>","call_split":"<path d=\"M28 8l4.59 4.59-5.76 5.75 2.83 2.83 5.75-5.76L40 20V8zm-8 0H8v12l4.59-4.59L22 24.83V40h4V23.17L15.41 12.59z\"/>","chat":"<path d=\"M40 4H8C5.79 4 4.02 5.79 4.02 8L4 44l8-8h28c2.21 0 4-1.79 4-4V8c0-2.21-1.79-4-4-4zM12 18h24v4H12v-4zm16 10H12v-4h16v4zm8-12H12v-4h24v4z\"/>","chat_bubble":"<path d=\"M40 4H8C5.79 4 4 5.79 4 8v36l8-8h28c2.21 0 4-1.79 4-4V8c0-2.21-1.79-4-4-4z\"/>","chat_bubble_outline":"<path d=\"M40 4H8C5.79 4 4 5.79 4 8v36l8-8h28c2.21 0 4-1.79 4-4V8c0-2.21-1.79-4-4-4zm0 28H12l-4 4V8h32v24z\"/>","clear_all":"<path d=\"M10 26h28v-4H10v4zm-4 8h28v-4H6v4zm8-20v4h28v-4H14z\"/>","comment":"<path d=\"M43.98 8c0-2.21-1.77-4-3.98-4H8C5.79 4 4 5.79 4 8v24c0 2.21 1.79 4 4 4h28l8 8-.02-36zM36 28H12v-4h24v4zm0-6H12v-4h24v4zm0-6H12v-4h24v4z\"/>","contacts":"<path d=\"M40 0H8v4h32V0zM8 48h32v-4H8v4zM40 8H8c-2.21 0-4 1.79-4 4v24c0 2.21 1.79 4 4 4h32c2.21 0 4-1.79 4-4V12c0-2.21-1.79-4-4-4zm-16 5.5c2.48 0 4.5 2.02 4.5 4.5 0 2.49-2.02 4.5-4.5 4.5s-4.5-2.01-4.5-4.5c0-2.48 2.02-4.5 4.5-4.5zM34 34H14v-3c0-3.33 6.67-5 10-5s10 1.67 10 5v3z\"/>","contact_mail":"<path d=\"M42 16v-2l-6 4-6-4v2l6 4 6-4zm2-10H4c-2.21 0-4 1.79-4 4v28c0 2.21 1.79 4 4 4h40c2.21 0 3.98-1.79 3.98-4L48 10c0-2.21-1.79-4-4-4zm-28 6c3.31 0 6 2.69 6 6 0 3.32-2.69 6-6 6s-6-2.68-6-6c0-3.31 2.69-6 6-6zm12 24H4v-2c0-4 8-6.2 12-6.2S28 30 28 34v2zm16-12H28V12h16v12z\"/>","contact_phone":"<path d=\"M44 6H4c-2.21 0-4 1.79-4 4v28c0 2.21 1.79 4 4 4h40c2.21 0 3.98-1.79 3.98-4L48 10c0-2.21-1.79-4-4-4zm-28 6c3.31 0 6 2.69 6 6 0 3.32-2.69 6-6 6s-6-2.68-6-6c0-3.31 2.69-6 6-6zm12 24H4v-2c0-4 8-6.2 12-6.2S28 30 28 34v2zm7.7-8h3.28L42 32l-3.99 3.99c-2.61-1.96-4.56-4.75-5.46-7.99-.35-1.28-.55-2.61-.55-4s.2-2.72.56-4c.89-3.24 2.84-6.03 5.46-7.99L42 16l-3.02 4H35.7c-.44 1.25-.7 2.6-.7 4s.25 2.75.7 4z\"/>","dialer_sip":"<path d=\"M34 6h-2v10h2V6zm-4 4h-4V8h4V6h-6v6h4v2h-4v2h6v-6zm6-4v10h2v-4h4V6h-6zm4 4h-2V8h2v2zm0 21c-2.49 0-4.89-.4-7.14-1.14-.69-.22-1.48-.06-2.03.49l-4.4 4.41c-5.66-2.88-10.29-7.51-13.18-13.17l4.4-4.41c.55-.55.71-1.34.49-2.03C17.4 12.9 17 10.49 17 8c0-1.11-.89-2-2-2H8c-1.11 0-2 .89-2 2 0 18.78 15.22 34 34 34 1.11 0 2-.89 2-2v-7c0-1.11-.89-2-2-2z\"/>","dialpad":"<path d=\"M24 38c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zM12 2C9.79 2 8 3.79 8 6s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 12c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 12c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm24-16c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zM24 26c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm12 0c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0-12c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm-12 0c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0-12c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z\"/>","email":"<path d=\"M40 8H8c-2.21 0-3.98 1.79-3.98 4L4 36c0 2.21 1.79 4 4 4h32c2.21 0 4-1.79 4-4V12c0-2.21-1.79-4-4-4zm0 8L24 26 8 16v-4l16 10 16-10v4z\"/>","forum":"<path d=\"M42 12h-4v18H12v4c0 1.1.9 2 2 2h22l8 8V14c0-1.1-.9-2-2-2zm-8 12V6c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v28l8-8h20c1.1 0 2-.9 2-2z\"/>","import_contacts":"<path d=\"M42 10c-2.21-.7-4.66-1-7-1-3.9 0-8.1.8-11 3-2.9-2.2-7.1-3-11-3s-8.1.8-11 3v29.3c0 .5.5 1 1 1 .2 0 .3-.1.5-.1C6.2 40.9 10.1 40 13 40c3.9 0 8.1.8 11 3 2.7-1.7 7.6-3 11-3 3.3 0 6.7.6 9.5 2.1.2.1.3.1.5.1.5 0 1-.5 1-1V12c-1.2-.9-2.5-1.5-4-2zm0 27c-2.2-.7-4.6-1-7-1-3.4 0-8.3 1.3-11 3V16c2.7-1.7 7.6-3 11-3 2.4 0 4.8.3 7 1v23z\"/>","import_export":"<path d=\"M18 6l-8 7.98h6V28h4V13.98h6L18 6zm14 28.02V20h-4v14.02h-6L30 42l8-7.98h-6z\"/>","invert_colors_off":"<path d=\"M41.29 41.75l-4.71-4.71L24 24.46l-7.13-7.13-2.83-2.83L8.54 9 6 11.55l5.56 5.56c-5.1 6.28-4.72 15.53 1.12 21.38 3.12 3.12 7.22 4.69 11.31 4.69 3.57 0 7.14-1.19 10.06-3.56l5.4 5.38L42 42.45l-.71-.7zM24 39.17c-3.21 0-6.22-1.25-8.48-3.51-2.27-2.27-3.52-5.28-3.52-8.49 0-2.64.86-5.14 2.42-7.21L24 29.55v9.62zm0-28.97v9.16l14.51 14.51c2.73-5.91 1.68-13.14-3.2-18.02L24 4.54l-7.41 7.41 2.83 2.83L24 10.2z\"/>","live_help":"<path d=\"M38 4H10C7.79 4 6 5.79 6 8v28c0 2.21 1.79 4 4 4h8l6 6 6-6h8c2.21 0 4-1.79 4-4V8c0-2.21-1.79-4-4-4zM26 36h-4v-4h4v4zm4.13-15.49l-1.79 1.84C26.9 23.79 26 25 26 28h-4v-1c0-2.21.9-4.21 2.34-5.66l2.49-2.52C27.55 18.1 28 17.1 28 16c0-2.21-1.79-4-4-4s-4 1.79-4 4h-4c0-4.42 3.58-8 8-8s8 3.58 8 8c0 1.76-.71 3.35-1.87 4.51z\"/>","location_off":"<path d=\"M24 13c2.76 0 5 2.24 5 5 0 1.47-.65 2.78-1.66 3.7l7.26 7.26C36.55 25.24 38 21.37 38 18c0-7.73-6.27-14-14-14-3.96 0-7.53 1.65-10.07 4.29l6.37 6.37C21.21 13.65 22.53 13 24 13zm8.75 19.2l-9.25-9.25-.22-.22L6.54 6 4 8.55l6.36 6.36c-.23.99-.36 2.02-.36 3.09 0 10.5 14 26 14 26s3.34-3.7 6.75-8.7l6.7 6.7L40 39.45l-7.25-7.25z\"/>","location_on":"<path d=\"M24 4c-7.73 0-14 6.27-14 14 0 10.5 14 26 14 26s14-15.5 14-26c0-7.73-6.27-14-14-14zm0 19c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z\"/>","mail_outline":"<path d=\"M40 8H8c-2.21 0-3.98 1.79-3.98 4L4 36c0 2.21 1.79 4 4 4h32c2.21 0 4-1.79 4-4V12c0-2.21-1.79-4-4-4zm0 28H8V16l16 10 16-10v20zM24 22L8 12h32L24 22z\"/>","message":"<path d=\"M40 4H8C5.79 4 4.02 5.79 4.02 8L4 44l8-8h28c2.21 0 4-1.79 4-4V8c0-2.21-1.79-4-4-4zm-4 24H12v-4h24v4zm0-6H12v-4h24v4zm0-6H12v-4h24v4z\"/>","no_sim":"<path d=\"M37.98 10c0-2.21-1.77-4-3.98-4H20l-4.68 4.68L38 33.36 37.98 10zM7.3 7.76L4.76 10.3 10 15.55V38c0 2.21 1.79 4 4 4h20.02c.7 0 1.35-.2 1.92-.51l3.76 3.76 2.54-2.55L7.3 7.76z\"/>","phone":"<path d=\"M13.25 21.59c2.88 5.66 7.51 10.29 13.18 13.17l4.4-4.41c.55-.55 1.34-.71 2.03-.49C35.1 30.6 37.51 31 40 31c1.11 0 2 .89 2 2v7c0 1.11-.89 2-2 2C21.22 42 6 26.78 6 8c0-1.11.9-2 2-2h7c1.11 0 2 .89 2 2 0 2.49.4 4.9 1.14 7.14.22.69.06 1.48-.49 2.03l-4.4 4.42z\"/>","portable_wifi_off":"<path d=\"M35.12 28.48c.56-1.38.88-2.89.88-4.48 0-6.63-5.37-12-12-12-1.59 0-3.1.32-4.49.88l3.25 3.25c.41-.07.82-.13 1.24-.13 4.42 0 8 3.58 8 8 0 .43-.04.85-.11 1.25l3.23 3.23zM24 8c8.84 0 16 7.16 16 16 0 2.71-.7 5.24-1.89 7.47l2.94 2.94C42.91 31.38 44 27.82 44 24c0-11.05-8.96-20-20-20-3.82 0-7.38 1.09-10.41 2.95l2.92 2.92C18.74 8.68 21.29 8 24 8zM6.54 5L4 7.55l4.21 4.21C5.58 15.14 4 19.38 4 24c0 7.39 4.02 13.83 9.99 17.29l2-3.46C11.22 35.07 8 29.91 8 24c0-3.51 1.14-6.75 3.06-9.39l2.87 2.87C12.71 19.36 12 21.59 12 24c0 4.44 2.41 8.3 5.99 10.38l2.02-3.48C17.62 29.51 16 26.96 16 24c0-1.29.34-2.49.88-3.57l3.16 3.16L20 24c0 2.21 1.79 4 4 4l.41-.04.02.02L39.45 43 42 40.45 8.54 7l-2-2z\"/>","present_to_all":"<path d=\"M42 6H6c-2.21 0-4 1.79-4 4v28c0 2.21 1.79 4 4 4h36c2.21 0 4-1.79 4-4V10c0-2.21-1.79-4-4-4zm0 32.03H6V9.97h36v28.06zM20 24h-4l8-8 8 8h-4v8h-8v-8z\"/>","ring_volume":"<path d=\"M47.41 33.34C41.32 27.55 33.07 24 24 24S6.68 27.55.59 33.34c-.37.36-.59.87-.59 1.42 0 .55.22 1.05.59 1.41l4.95 4.95c.36.36.86.59 1.41.59.54 0 1.04-.22 1.4-.57 1.59-1.47 3.38-2.72 5.33-3.7.66-.33 1.12-1.01 1.12-1.8v-6.21C17.7 28.5 20.79 28 24 28s6.3.5 9.2 1.44v6.21c0 .79.46 1.47 1.12 1.8 1.95.98 3.75 2.23 5.33 3.7.36.35.85.57 1.4.57.55 0 1.05-.22 1.42-.59l4.95-4.95c.36-.36.59-.86.59-1.41-.01-.56-.23-1.07-.6-1.43zm-5.09-20.83l-2.83-2.83-7.12 7.12 2.83 2.83s6.9-7.04 7.12-7.12zM26 4h-4v10h4V4zM12.8 19.63l2.83-2.83-7.12-7.12-2.83 2.83c.22.08 7.12 7.12 7.12 7.12z\"/>","rss_feed":"<circle cx=\"12.36\" cy=\"35.64\" r=\"4.36\"/><path d=\"M8 8.89v5.66c14.06 0 25.46 11.4 25.46 25.46h5.66C39.11 22.82 25.18 8.89 8 8.89zM8 20.2v5.66c7.81 0 14.14 6.34 14.14 14.14h5.66c0-10.93-8.87-19.8-19.8-19.8z\"/>","screen_share":"<path d=\"M40 36c2.2 0 3.98-1.8 3.98-4L44 12c0-2.22-1.8-4-4-4H8c-2.22 0-4 1.78-4 4v20c0 2.2 1.78 4 4 4H0v4h48v-4h-8zm-14-7.06v-4.38c-5.56 0-9.22 1.7-12 5.44 1.12-5.34 4.22-10.66 12-11.74V14l8 7.46-8 7.48z\"/>","speaker_phone":"<path d=\"M14 15.14L16.86 18c1.83-1.83 4.35-2.96 7.14-2.96s5.31 1.13 7.14 2.96L34 15.14C31.44 12.59 27.91 11 24 11s-7.44 1.59-10 4.14zM24 3C17.95 3 12.47 5.45 8.5 9.42l2.82 2.82C14.57 8.99 19.05 6.99 24 6.99s9.43 2 12.68 5.25l2.82-2.82C35.53 5.45 30.05 3 24 3zm5.71 17.01L18.29 20C17.03 20 16 21.03 16 22.29v19.43c0 1.26 1.03 2.29 2.29 2.29h11.43c1.26 0 2.29-1.03 2.29-2.29V22.29c-.01-1.26-1.04-2.28-2.3-2.28zM30 40H18V24h12v16z\"/>","stay_current_landscape":"<path d=\"M2.02 14L2 34c0 2.21 1.79 4 4 4h36c2.21 0 4-1.79 4-4V14c0-2.21-1.79-4-4-4H6c-2.21 0-3.98 1.79-3.98 4zM38 14v20H10V14h28z\"/>","stay_current_portrait":"<path d=\"M34 2.02L14 2c-2.21 0-3.98 1.79-3.98 4v36c0 2.21 1.77 4 3.98 4h20c2.21 0 4-1.79 4-4V6c0-2.21-1.79-3.98-4-3.98zM34 38H14V10h20v28z\"/>","stay_primary_landscape":"<path d=\"M2.02 14L2 34c0 2.21 1.79 4 4 4h36c2.21 0 4-1.79 4-4V14c0-2.21-1.79-4-4-4H6c-2.21 0-3.98 1.79-3.98 4zM38 14v20H10V14h28z\"/>","stay_primary_portrait":"<path d=\"M34 2.02L14 2c-2.21 0-3.98 1.79-3.98 4v36c0 2.21 1.77 4 3.98 4h20c2.21 0 4-1.79 4-4V6c0-2.21-1.79-3.98-4-3.98zM34 38H14V10h20v28z\"/>","stop_screen_share":"<path d=\"M42.44 36.04l4 4H48v-4h-5.56zm1.54-4l.02-20c0-2.22-1.8-4-4-4H14.44L24.9 18.5c.36-.08.72-.14 1.1-.2v-4.26l8 7.46-3.16 2.94 11.08 11.08c1.22-.66 2.06-1.98 2.06-3.48zM4.78 3.46L2.22 6 5.3 9.08C4.5 9.8 4 10.86 4 12.04v20c0 2.2 1.78 4 4 4H0v4h36.26l5.42 5.42 2.54-2.54L4.78 3.46zM14 30.04c.62-2.96 1.84-5.9 4.14-8.12l3.18 3.18c-3.08.76-5.4 2.36-7.32 4.94z\"/>","swap_calls":"<path d=\"M36 8l-8 8h6v14c0 2.21-1.79 4-4 4s-4-1.79-4-4V16c0-4.41-3.59-8-8-8s-8 3.59-8 8v14H4l8 8 8-8h-6V16c0-2.21 1.79-4 4-4s4 1.79 4 4v14c0 4.41 3.59 8 8 8s8-3.59 8-8V16h6l-8-8z\"/>","textsms":"<path d=\"M40 4H8C5.79 4 4.02 5.79 4.02 8L4 44l8-8h28c2.21 0 4-1.79 4-4V8c0-2.21-1.79-4-4-4zM18 22h-4v-4h4v4zm8 0h-4v-4h4v4zm8 0h-4v-4h4v4z\"/>","voicemail":"<path d=\"M37 12c-6.08 0-11 4.92-11 11 0 2.66.94 5.1 2.51 7h-9.03c1.57-1.9 2.51-4.34 2.51-7 0-6.08-4.92-11-11-11S0 16.92 0 23s4.92 11 11 11h26c6.08 0 11-4.92 11-11s-4.92-11-11-11zM11 30c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7zm26 0c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z\"/>","vpn_key":"<path d=\"M25.3 20c-1.65-4.66-6.08-8-11.3-8-6.63 0-12 5.37-12 12s5.37 12 12 12c5.22 0 9.65-3.34 11.3-8H34v8h8v-8h4v-8H25.3zM14 28c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z\"/>","add":"<path d=\"M38 26H26v12h-4V26H10v-4h12V10h4v12h12v4z\"/>","add_box":"<path d=\"M38 6H10c-2.21 0-4 1.79-4 4v28c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4V10c0-2.21-1.79-4-4-4zm-4 20h-8v8h-4v-8h-8v-4h8v-8h4v8h8v4z\"/>","add_circle":"<path d=\"M24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm10 22h-8v8h-4v-8h-8v-4h8v-8h4v8h8v4z\"/>","add_circle_outline":"<path d=\"M26 14h-4v8h-8v4h8v8h4v-8h8v-4h-8v-8zM24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm0 36c-8.82 0-16-7.18-16-16S15.18 8 24 8s16 7.18 16 16-7.18 16-16 16z\"/>","archive":"<path d=\"M41.09 10.45l-2.77-3.36C37.76 6.43 36.93 6 36 6H12c-.93 0-1.76.43-2.31 1.09l-2.77 3.36C6.34 11.15 6 12.03 6 13v25c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4V13c0-.97-.34-1.85-.91-2.55zM24 35L13 24h7v-4h8v4h7L24 35zM10.25 10l1.63-2h24l1.87 2h-27.5z\"/>","backspace":"<path d=\"M44 6H14c-1.38 0-2.47.7-3.19 1.76L0 23.99l10.81 16.23C11.53 41.28 12.62 42 14 42h30c2.21 0 4-1.79 4-4V10c0-2.21-1.79-4-4-4zm-6 25.17L35.17 34 28 26.83 20.83 34 18 31.17 25.17 24 18 16.83 20.83 14 28 21.17 35.17 14 38 16.83 30.83 24 38 31.17z\"/>","block":"<path d=\"M24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zM8 24c0-8.84 7.16-16 16-16 3.7 0 7.09 1.27 9.8 3.37L11.37 33.8C9.27 31.09 8 27.7 8 24zm16 16c-3.7 0-7.09-1.27-9.8-3.37L36.63 14.2C38.73 16.91 40 20.3 40 24c0 8.84-7.16 16-16 16z\"/>","clear":"<path d=\"M38 12.83L35.17 10 24 21.17 12.83 10 10 12.83 21.17 24 10 35.17 12.83 38 24 26.83 35.17 38 38 35.17 26.83 24z\"/>","content_copy":"<path d=\"M32 2H8C5.79 2 4 3.79 4 6v28h4V6h24V2zm6 8H16c-2.21 0-4 1.79-4 4v28c0 2.21 1.79 4 4 4h22c2.21 0 4-1.79 4-4V14c0-2.21-1.79-4-4-4zm0 32H16V14h22v28z\"/>","content_cut":"<path d=\"M19.28 15.28c.45-1 .72-2.11.72-3.28 0-4.42-3.58-8-8-8s-8 3.58-8 8 3.58 8 8 8c1.17 0 2.28-.27 3.28-.72L20 24l-4.72 4.72c-1-.45-2.11-.72-3.28-.72-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8c0-1.17-.27-2.28-.72-3.28L24 28l14 14h6v-2L19.28 15.28zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm0 24c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm12-15c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zM38 6L26 18l4 4L44 8V6z\"/>","content_paste":"<path d=\"M38 4h-8.37c-.82-2.32-3.02-4-5.63-4s-4.81 1.68-5.63 4H10C7.79 4 6 5.79 6 8v32c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4V8c0-2.21-1.79-4-4-4zM24 4c1.1 0 2 .89 2 2s-.9 2-2 2-2-.89-2-2 .9-2 2-2zm14 36H10V8h4v6h20V8h4v32z\"/>","create":"<path d=\"M6 34.5V42h7.5l22.13-22.13-7.5-7.5L6 34.5zm35.41-20.41c.78-.78.78-2.05 0-2.83l-4.67-4.67c-.78-.78-2.05-.78-2.83 0l-3.66 3.66 7.5 7.5 3.66-3.66z\"/>","delete_sweep":"<path d=\"M30 32h8v4h-8zm0-16h14v4H30zm0 8h12v4H30zM6 36c0 2.2 1.8 4 4 4h12c2.2 0 4-1.8 4-4V16H6v20zm22-26h-6l-2-2h-8l-2 2H4v4h24z\"/>","drafts":"<path d=\"M43.98 16c0-1.44-.75-2.69-1.88-3.4L24 2 5.9 12.6C4.77 13.31 4 14.56 4 16v20c0 2.21 1.79 4 4 4h32c2.21 0 4-1.79 4-4l-.02-20zM24 26L7.48 15.67 24 6l16.52 9.67L24 26z\"/>","filter_list":"<path d=\"M20 36h8v-4h-8v4zM6 12v4h36v-4H6zm6 14h24v-4H12v4z\"/>","flag":"<path d=\"M28.8 12L28 8H10v34h4V28h11.2l.8 4h14V12z\"/>","forward":"<path d=\"M24 16V8l16 16-16 16v-8H8V16z\"/>","gesture":"<path d=\"M9.19 13.77c1.4-1.43 2.8-2.71 3.43-2.45.99.41-.02 2.08-.6 3.05-.5.84-5.72 7.77-5.72 12.62 0 2.56.95 4.68 2.69 5.96 1.5 1.11 3.47 1.45 5.28.92 2.14-.63 3.9-2.79 6.12-5.53 2.42-2.98 5.66-6.88 8.16-6.88 3.26 0 3.3 2.02 3.52 3.59-7.58 1.3-10.77 7.35-10.77 10.76S24.18 42 27.71 42c3.25 0 8.59-2.66 9.38-12.2H42v-5h-4.94c-.3-3.3-2.18-8.39-8.06-8.39-4.5 0-8.37 3.82-9.87 5.69-1.16 1.45-4.11 4.95-4.57 5.45-.51.59-1.35 1.68-2.23 1.68-.89 0-1.43-1.67-.73-3.85.7-2.19 2.8-5.72 3.7-7.03 1.57-2.28 2.59-3.85 2.59-6.56 0-4.4-3.28-5.78-5.02-5.78-2.64 0-4.94 2-5.45 2.51-.71.72-1.31 1.31-1.75 1.85l3.52 3.4zm18.58 23.34c-.62 0-1.47-.52-1.47-1.45 0-1.2 1.45-4.4 5.75-5.53-.62 5.39-2.88 6.98-4.28 6.98z\"/>","inbox":"<path d=\"M38 6H9.98c-2.21 0-3.96 1.79-3.96 4L6 38c0 2.21 1.77 4 3.98 4H38c2.21 0 4-1.79 4-4V10c0-2.21-1.79-4-4-4zm0 24h-8c0 3.31-2.69 6-6 6s-6-2.69-6-6H9.98V10H38v20z\"/>","link":"<path d=\"M7.8 24c0-3.42 2.78-6.2 6.2-6.2h8V14h-8C8.48 14 4 18.48 4 24s4.48 10 10 10h8v-3.8h-8c-3.42 0-6.2-2.78-6.2-6.2zm8.2 2h16v-4H16v4zm18-12h-8v3.8h8c3.42 0 6.2 2.78 6.2 6.2s-2.78 6.2-6.2 6.2h-8V34h8c5.52 0 10-4.48 10-10s-4.48-10-10-10z\"/>","low_priority":"<path d=\"M28 10h16v4H28zm0 11h16v4H28zm0 11h16v4H28zM4 23c0 7.17 5.83 13 13 13h1v4l6-6-6-6v4h-1c-4.96 0-9-4.04-9-9s4.04-9 9-9h7v-4h-7C9.83 10 4 15.83 4 23z\"/>","mail":"<path d=\"M40 8H8c-2.21 0-3.98 1.79-3.98 4L4 36c0 2.21 1.79 4 4 4h32c2.21 0 4-1.79 4-4V12c0-2.21-1.79-4-4-4zm0 8L24 26 8 16v-4l16 10 16-10v4z\"/>","markunread":"<path d=\"M40 8H8c-2.21 0-3.98 1.79-3.98 4L4 36c0 2.21 1.79 4 4 4h32c2.21 0 4-1.79 4-4V12c0-2.21-1.79-4-4-4zm0 8L24 26 8 16v-4l16 10 16-10v4z\"/>","move_to_inbox":"<path d=\"M38 6H9.98c-2.21 0-3.96 1.79-3.96 4L6 38c0 2.21 1.77 4 3.98 4H38c2.21 0 4-1.79 4-4V10c0-2.21-1.79-4-4-4zm0 24h-8c0 3.31-2.69 6-6 6s-6-2.69-6-6H9.98V10H38v20zm-6-10h-4v-6h-8v6h-4l8 8 8-8z\"/>","next_week":"<path fill=\"#010101\" d=\"M40 14h-8v-4c0-1.1-.44-2.1-1.18-2.82C30.1 6.44 29.1 6 28 6h-8c-2.2 0-4 1.8-4 4v4H8c-2.2 0-4 1.8-4 4v22c0 2.2 1.8 4 4 4h32c2.2 0 4-1.8 4-4V18c0-2.2-1.8-4-4-4zm-20-4h8v4h-8v-4zm2 27l-2-2 6-6-6-6 2-2 8 8-8 8z\"/>","redo":"<path d=\"M36.79 21.2C33.11 17.97 28.29 16 23 16c-9.3 0-17.17 6.06-19.92 14.44L7.81 32c2.1-6.39 8.1-11 15.19-11 3.91 0 7.46 1.44 10.23 3.77L26 32h18V14l-7.21 7.2z\"/>","remove":"<path d=\"M38 26H10v-4h28v4z\"/>","remove_circle":"<path d=\"M24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm10 22H14v-4h20v4z\"/>","remove_circle_outline":"<path d=\"M14 22v4h20v-4H14zM24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm0 36c-8.82 0-16-7.18-16-16S15.18 8 24 8s16 7.18 16 16-7.18 16-16 16z\"/>","reply":"<path d=\"M20 18v-8L6 24l14 14v-8.2c10 0 17 3.2 22 10.2-2-10-8-20-22-22z\"/>","reply_all":"<path d=\"M14 16v-6L0 24l14 14v-6l-8-8 8-8zm12 2v-8L12 24l14 14v-8.2c10 0 17 3.2 22 10.2-2-10-8-20-22-22z\"/>","report":"<path d=\"M31.46 6H16.54L6 16.54v14.91L16.54 42h14.91L42 31.46V16.54L31.46 6zM24 34.6c-1.43 0-2.6-1.16-2.6-2.6 0-1.43 1.17-2.6 2.6-2.6 1.43 0 2.6 1.16 2.6 2.6 0 1.44-1.17 2.6-2.6 2.6zm2-8.6h-4V14h4v12z\"/>","save":"<path d=\"M34 6H10c-2.21 0-4 1.79-4 4v28c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4V14l-8-8zM24 38c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm6-20H10v-8h20v8z\"/>","select_all":"<path d=\"M6 10h4V6c-2.21 0-4 1.79-4 4zm0 16h4v-4H6v4zm8 16h4v-4h-4v4zM6 18h4v-4H6v4zM26 6h-4v4h4V6zm12 0v4h4c0-2.21-1.79-4-4-4zM10 42v-4H6c0 2.21 1.79 4 4 4zm-4-8h4v-4H6v4zM18 6h-4v4h4V6zm4 36h4v-4h-4v4zm16-16h4v-4h-4v4zm0 16c2.21 0 4-1.79 4-4h-4v4zm0-24h4v-4h-4v4zm0 16h4v-4h-4v4zm-8 8h4v-4h-4v4zm0-32h4V6h-4v4zM14 34h20V14H14v20zm4-16h12v12H18V18z\"/>","send":"<path d=\"M4.02 42L46 24 4.02 6 4 20l30 4-30 4z\"/>","sort":"<path d=\"M6 36h12v-4H6v4zm0-24v4h36v-4H6zm0 14h24v-4H6v4z\"/>","text_format":"<path d=\"M10 34v4h28v-4H10zm9-8.4h10l1.8 4.4H35L25.5 8h-3L13 30h4.2l1.8-4.4zm5-13.64L27.74 22h-7.48L24 11.96z\"/>","unarchive":"<path d=\"M41.09 10.45l-2.77-3.36C37.76 6.43 36.93 6 36 6H12c-.93 0-1.76.43-2.31 1.09l-2.77 3.36C6.34 11.15 6 12.03 6 13v25c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4V13c0-.97-.34-1.85-.91-2.55zM24 19l11 11h-7v4h-8v-4h-7l11-11zm-13.75-9l1.63-2h24l1.87 2h-27.5z\"/>","undo":"<path d=\"M25 16c-5.29 0-10.11 1.97-13.8 5.2L4 14v18h18l-7.23-7.23C17.54 22.44 21.09 21 25 21c7.09 0 13.09 4.61 15.19 11l4.73-1.56C42.17 22.06 34.3 16 25 16z\"/>","weekend":"<path d=\"M42 20c-2.21 0-4 1.79-4 4v6H10v-6c0-2.21-1.79-4-4-4s-4 1.79-4 4v10c0 2.2 1.8 4 4 4h36c2.2 0 4-1.8 4-4V24c0-2.21-1.79-4-4-4zm-6-10H12c-2.2 0-4 1.8-4 4v4.31c2.32.83 4 3.03 4 5.63V28h24v-4.06c0-2.6 1.68-4.8 4-5.63V14c0-2.2-1.8-4-4-4z\" fill=\"#010101\"/>","access_alarms":"<path d=\"M44 11.5l-9.2-7.7-2.6 3.1 9.2 7.7 2.6-3.1zM15.7 6.8l-2.6-3.1L4 11.5l2.6 3.1 9.1-7.8zM25 16h-3v12l9.5 5.7 1.5-2.5-8-4.7V16zm-1-8C14 8 6 16.1 6 26s8 18 18 18c9.9 0 18-8.1 18-18S33.9 8 24 8zm0 32c-7.7 0-14-6.3-14-14s6.3-14 14-14 14 6.3 14 14c0 7.8-6.3 14-14 14z\"/>","access_alarm":"<path d=\"M44 11.44l-9.19-7.71-2.57 3.06 9.19 7.71L44 11.44zM15.76 6.78l-2.57-3.06L4 11.43l2.57 3.06 9.19-7.71zM25 16h-3v12l9.49 5.71L33 31.24l-8-4.74V16zm-1.01-8C14.04 8 6 16.06 6 26s8.04 18 17.99 18S42 35.94 42 26 33.94 8 23.99 8zM24 40c-7.73 0-14-6.27-14-14s6.27-14 14-14 14 6.27 14 14-6.26 14-14 14z\"/>","access_time":"<path d=\"M23.99 4C12.94 4 4 12.95 4 24s8.94 20 19.99 20C35.04 44 44 35.05 44 24S35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16zm1-26h-3v12l10.49 6.3L34 29.84l-9-5.34z\"/>","add_alarm":"<path d=\"M15.76 6.78l-2.57-3.06L4 11.43l2.57 3.06 9.19-7.71zM44 11.44l-9.19-7.71-2.57 3.06 9.19 7.71L44 11.44zM23.99 8C14.04 8 6 16.06 6 26s8.04 18 17.99 18S42 35.94 42 26 33.94 8 23.99 8zM24 40c-7.73 0-14-6.27-14-14s6.27-14 14-14 14 6.27 14 14-6.26 14-14 14zm2-22h-4v6h-6v4h6v6h4v-6h6v-4h-6v-6z\"/>","airplanemode_active":"<path d=\"M20.36 18\"/><path d=\"M42 32v-4L26 18V7c0-1.66-1.34-3-3-3s-3 1.34-3 3v11L4 28v4l16-5v11l-4 3v3l7-2 7 2v-3l-4-3V27l16 5z\"/>","airplanemode_inactive":"<path d=\"M26 18V7c0-1.66-1.34-3-3-3s-3 1.34-3 3v7.36l15.65 15.65L42 32v-4L26 18zM6 10.55l9.97 9.97L4 28v4l16-5v11l-4 3v3l7-2 7 2v-3l-4-3v-7.45L37.45 42 40 39.45 8.55 8 6 10.55z\"/>","battery_20":"<path d=\"M14 34v7.33C14 42.8 15.19 44 16.67 44h14.67c1.47 0 2.67-1.19 2.67-2.67V34H14z\"/><path fill-opacity=\".3\" d=\"M34 10.67C34 9.19 32.81 8 31.33 8H28V4h-8v4h-3.33C15.19 8 14 9.19 14 10.67V34h20V10.67z\"/>","battery_30":"<path fill-opacity=\".3\" d=\"M34 10.67C34 9.19 32.81 8 31.33 8H28V4h-8v4h-3.33C15.19 8 14 9.19 14 10.67V30h20V10.67z\"/><path d=\"M14 30v11.33C14 42.8 15.19 44 16.67 44h14.67c1.47 0 2.67-1.19 2.67-2.67V30H14z\"/>","battery_50":"<path fill-opacity=\".3\" d=\"M34 10.67C34 9.19 32.81 8 31.33 8H28V4h-8v4h-3.33C15.19 8 14 9.19 14 10.67V26h20V10.67z\"/><path d=\"M14 26v15.33C14 42.8 15.19 44 16.67 44h14.67c1.47 0 2.67-1.19 2.67-2.67V26H14z\"/>","battery_60":"<path fill-opacity=\".3\" d=\"M34 10.67C34 9.19 32.81 8 31.33 8H28V4h-8v4h-3.33C15.19 8 14 9.19 14 10.67V22h20V10.67z\"/><path d=\"M14 22v19.33C14 42.8 15.19 44 16.67 44h14.67c1.47 0 2.67-1.19 2.67-2.67V22H14z\"/>","battery_80":"<path fill-opacity=\".3\" d=\"M34 10.67C34 9.19 32.81 8 31.33 8H28V4h-8v4h-3.33C15.19 8 14 9.19 14 10.67V18h20v-7.33z\"/><path d=\"M14 18v23.33C14 42.8 15.19 44 16.67 44h14.67c1.47 0 2.67-1.19 2.67-2.67V18H14z\"/>","battery_90":"<path fill-opacity=\".3\" d=\"M34 10.67C34 9.19 32.81 8 31.33 8H28V4h-8v4h-3.33C15.19 8 14 9.19 14 10.67V16h20v-5.33z\"/><path d=\"M14 16v25.33C14 42.8 15.19 44 16.67 44h14.67c1.47 0 2.67-1.19 2.67-2.67V16H14z\"/>","battery_alert":"<path d=\"M31.33 8H28V4h-8v4h-3.33C15.19 8 14 9.19 14 10.67v30.67c0 1.47 1.19 2.67 2.67 2.67h14.67c1.47 0 2.67-1.19 2.67-2.67V10.67C34 9.19 32.81 8 31.33 8zM26 36h-4v-4h4v4zm0-8h-4V18h4v10z\"/>","battery_charging_20":"<path d=\"M22 40v-6h-8v7.33C14 42.8 15.19 44 16.67 44h14.67c1.47 0 2.67-1.19 2.67-2.67V34h-8.8L22 40z\"/><path fill-opacity=\".3\" d=\"M31.33 8H28V4h-8v4h-3.33C15.19 8 14 9.19 14 10.67V34h8v-5h-4l8-15v11h4l-4.8 9H34V10.67C34 9.19 32.81 8 31.33 8z\"/>","battery_charging_30":"<path fill-opacity=\".3\" d=\"M31.33 8H28V4h-8v4h-3.33C15.19 8 14 9.19 14 10.67V29h4l8-15v11h4l-2.13 4H34V10.67C34 9.19 32.81 8 31.33 8z\"/><path d=\"M22 40V29h-8v12.33C14 42.8 15.19 44 16.67 44h14.67c1.47 0 2.67-1.19 2.67-2.67V29h-6.13L22 40z\"/>","battery_charging_50":"<path d=\"M28.93 27L22 40V29h-4l1.07-2H14v14.33C14 42.8 15.19 44 16.67 44h14.67c1.47 0 2.67-1.19 2.67-2.67V27h-5.08z\"/><path fill-opacity=\".3\" d=\"M31.33 8H28V4h-8v4h-3.33C15.19 8 14 9.19 14 10.67V27h5.07L26 14v11h4l-1.07 2H34V10.67C34 9.19 32.81 8 31.33 8z\"/>","battery_charging_60":"<path fill-opacity=\".3\" d=\"M31.33 8H28V4h-8v4h-3.33C15.19 8 14 9.19 14 10.67V22h7.73L26 14v8h8V10.67C34 9.19 32.81 8 31.33 8z\"/><path d=\"M26 25h4l-8 15V29h-4l3.73-7H14v19.33C14 42.8 15.19 44 16.67 44h14.67c1.47 0 2.67-1.19 2.67-2.67V22h-8v3z\"/>","battery_charging_80":"<path fill-opacity=\".3\" d=\"M31.33 8H28V4h-8v4h-3.33C15.19 8 14 9.19 14 10.67V18h9.87L26 14v4h8v-7.33C34 9.19 32.81 8 31.33 8z\"/><path d=\"M26 25h4l-8 15V29h-4l5.87-11H14v23.33C14 42.8 15.19 44 16.67 44h14.67c1.47 0 2.67-1.19 2.67-2.67V18h-8v7z\"/>","battery_charging_90":"<path fill-opacity=\".3\" d=\"M31.33 8H28V4h-8v4h-3.33C15.19 8 14 9.19 14 10.67V16h10.93L26 14v2h8v-5.33C34 9.19 32.81 8 31.33 8z\"/><path d=\"M26 25h4l-8 15V29h-4l6.93-13H14v25.33C14 42.8 15.19 44 16.67 44h14.67c1.47 0 2.67-1.19 2.67-2.67V16h-8v9z\"/>","battery_charging_full":"<path d=\"M31.33 8H28V4h-8v4h-3.33C15.19 8 14 9.19 14 10.67v30.67c0 1.47 1.19 2.67 2.67 2.67h14.67c1.47 0 2.67-1.19 2.67-2.67V10.67C34 9.19 32.81 8 31.33 8zM22 40V29h-4l8-15v11h4l-8 15z\"/>","battery_full":"<path d=\"M31.33 8H28V4h-8v4h-3.33C15.19 8 14 9.19 14 10.67v30.67c0 1.47 1.19 2.67 2.67 2.67h14.67c1.47 0 2.67-1.19 2.67-2.67V10.67C34 9.19 32.81 8 31.33 8z\"/>","battery_std":"<path d=\"M31.33 8H28V4h-8v4h-3.33C15.19 8 14 9.19 14 10.67v30.67c0 1.47 1.19 2.67 2.67 2.67h14.67c1.47 0 2.67-1.19 2.67-2.67V10.67C34 9.19 32.81 8 31.33 8z\"/>","battery_unknown":"<path d=\"M31.33 8H28V4h-8v4h-3.33C15.19 8 14 9.19 14 10.67v30.67c0 1.47 1.19 2.67 2.67 2.67h14.67c1.47 0 2.67-1.19 2.67-2.67V10.67C34 9.19 32.81 8 31.33 8zM25.9 35.9h-3.8v-3.8h3.8v3.8zm2.7-10.52s-.76.84-1.34 1.42c-.97.97-1.66 2.29-1.66 3.2h-3.2c0-1.66.92-3.05 1.86-3.99l1.86-1.89c.54-.54.88-1.29.88-2.12 0-1.66-1.34-3-3-3s-3 1.34-3 3h-3c0-3.31 2.69-6 6-6s6 2.69 6 6c0 1.32-.53 2.52-1.4 3.38z\"/>","bluetooth":"<path d=\"M35.41 15.41L24 4h-2v15.17L12.83 10 10 12.83 21.17 24 10 35.17 12.83 38 22 28.83V44h2l11.41-11.41L26.83 24l8.58-8.59zM26 11.66l3.76 3.76L26 19.17v-7.51zm3.76 20.93L26 36.34v-7.52l3.76 3.77z\"/>","bluetooth_connected":"<path d=\"M14 24l-4-4-4 4 4 4 4-4zm21.41-8.59L24 4h-2v15.17L12.83 10 10 12.83 21.17 24 10 35.17 12.83 38 22 28.83V44h2l11.41-11.41L26.83 24l8.58-8.59zM26 11.66l3.76 3.76L26 19.17v-7.51zm3.76 20.93L26 36.34v-7.52l3.76 3.77zM38 20l-4 4 4 4 4-4-4-4z\"/>","bluetooth_disabled":"<path d=\"M26 11.83l3.76 3.76-3.2 3.2 2.83 2.83 6.03-6.03L24 4.17h-2v10.06l4 4v-6.4zM10.83 8.17L8 11l13.17 13.17L10 35.34l2.83 2.83L22 29v15.17h2l8.59-8.59 4.59 4.59L40 37.34 10.83 8.17zM26 36.51V29l3.76 3.76L26 36.51z\"/>","bluetooth_searching":"<path d=\"M28.48 24.02l4.64 4.64c.56-1.45.88-3.02.88-4.66 0-1.63-.31-3.19-.86-4.63l-4.66 4.65zm10.58-10.59l-2.53 2.53c1.25 2.41 1.97 5.14 1.97 8.05s-.72 5.63-1.97 8.05l2.4 2.4c1.93-3.1 3.07-6.73 3.07-10.63 0-3.82-1.09-7.37-2.94-10.4zm-7.65 1.98L20 4h-2v15.17L8.83 10 6 12.83 17.17 24 6 35.17 8.83 38 18 28.83V44h2l11.41-11.41L22.83 24l8.58-8.59zM22 11.66l3.76 3.76L22 19.17v-7.51zm3.76 20.93L22 36.34v-7.52l3.76 3.77z\"/>","brightness_auto":"<path d=\"M21.7 25.3h4.6L24 18l-2.3 7.3zM40 17.37V8h-9.37L24 1.37 17.37 8H8v9.37L1.37 24 8 30.63V40h9.37L24 46.63 30.63 40H40v-9.37L46.63 24 40 17.37zM28.6 32l-1.4-4h-6.4l-1.4 4h-3.8L22 14h4l6.4 18h-3.8z\"/>","brightness_high":"<path d=\"M40 17.37V8h-9.37L24 1.37 17.37 8H8v9.37L1.37 24 8 30.63V40h9.37L24 46.63 30.63 40H40v-9.37L46.63 24 40 17.37zM24 36c-6.63 0-12-5.37-12-12s5.37-12 12-12 12 5.37 12 12-5.37 12-12 12zm0-20c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8z\"/>","brightness_low":"<path d=\"M40 30.63L46.63 24 40 17.37V8h-9.37L24 1.37 17.37 8H8v9.37L1.37 24 8 30.63V40h9.37L24 46.63 30.63 40H40v-9.37zM24 36c-6.63 0-12-5.37-12-12s5.37-12 12-12 12 5.37 12 12-5.37 12-12 12z\"/>","brightness_medium":"<path d=\"M40 30.63L46.63 24 40 17.37V8h-9.37L24 1.37 17.37 8H8v9.37L1.37 24 8 30.63V40h9.37L24 46.63 30.63 40H40v-9.37zM24 36V12c6.63 0 12 5.37 12 12s-5.37 12-12 12z\"/>","data_usage":"<path d=\"M26 4.1v6.06c6.78.97 12 6.79 12 13.84 0 1.79-.35 3.5-.96 5.07l5.2 3.07C43.35 29.65 44 26.91 44 24c0-10.37-7.89-18.89-18-19.9zM24 38c-7.73 0-14-6.27-14-14 0-7.05 5.22-12.87 12-13.84V4.1C11.88 5.1 4 13.63 4 24c0 11.05 8.94 20 19.99 20 6.62 0 12.47-3.23 16.11-8.18l-5.19-3.06C32.35 35.95 28.42 38 24 38z\"/>","developer_mode":"<path d=\"M14 10.17h20v4h4v-8c0-2.21-1.79-3.98-4-3.98l-20-.02c-2.21 0-4 1.79-4 4v8h4v-4zm16.83 23.17L40 24.17 30.83 15 28 17.83l6.34 6.34L28 30.52l2.83 2.82zM20 30.52l-6.34-6.34L20 17.83 17.17 15 8 24.17l9.17 9.17L20 30.52zm14 7.65H14v-4h-4v8c0 2.21 1.79 4 4 4h20c2.21 0 4-1.79 4-4v-8h-4v4z\"/>","devices":"<path d=\"M8 12h36V8H8c-2.21 0-4 1.79-4 4v22H0v6h28v-6H8V12zm38 4H34c-1.1 0-2 .9-2 2v20c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V18c0-1.1-.9-2-2-2zm-2 18h-8V20h8v14z\"/>","dvr":"<path d=\"M42 6H6c-2.21 0-4 1.79-4 4v24c0 2.21 1.79 4 4 4h10v4h16v-4h10c2.21 0 3.98-1.79 3.98-4L46 10c0-2.21-1.79-4-4-4zm0 28H6V10h36v24zm-4-18H16v4h22v-4zm0 8H16v4h22v-4zm-24-8h-4v4h4v-4zm0 8h-4v4h4v-4z\"/>","gps_fixed":"<path d=\"M24 16c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm17.88 6C40.96 13.66 34.34 7.04 26 6.12V2h-4v4.12C13.66 7.04 7.04 13.66 6.12 22H2v4h4.12c.92 8.34 7.54 14.96 15.88 15.88V46h4v-4.12c8.34-.92 14.96-7.54 15.88-15.88H46v-4h-4.12zM24 38c-7.73 0-14-6.27-14-14s6.27-14 14-14 14 6.27 14 14-6.27 14-14 14z\"/>","gps_not_fixed":"<path d=\"M41.88 22C40.96 13.66 34.34 7.04 26 6.12V2h-4v4.12C13.66 7.04 7.04 13.66 6.12 22H2v4h4.12c.92 8.34 7.54 14.96 15.88 15.88V46h4v-4.12c8.34-.92 14.96-7.54 15.88-15.88H46v-4h-4.12zM24 38c-7.73 0-14-6.27-14-14s6.27-14 14-14 14 6.27 14 14-6.27 14-14 14z\"/>","gps_off":"<path d=\"M41.88 22C40.96 13.66 34.34 7.04 26 6.12V2h-4v4.12c-2.26.25-4.38.93-6.31 1.94l3 3C20.33 10.38 22.12 10 24 10c7.73 0 14 6.27 14 14 0 1.88-.38 3.67-1.05 5.31l3 3c1.01-1.93 1.68-4.05 1.93-6.31H46v-4h-4.12zM6 8.55l4.07 4.07C7.93 15.24 6.51 18.46 6.12 22H2v4h4.12c.92 8.34 7.54 14.96 15.88 15.88V46h4v-4.12c3.54-.39 6.76-1.82 9.38-3.96L39.45 42 42 39.46 8.55 6 6 8.55zm26.53 26.53C30.17 36.9 27.22 38 24 38c-7.73 0-14-6.27-14-14 0-3.22 1.1-6.17 2.92-8.53l19.61 19.61z\"/>","graphic_eq":"<path d=\"M14 36h4V12h-4v24zm8 8h4V4h-4v40zM6 28h4v-8H6v8zm24 8h4V12h-4v24zm8-16v8h4v-8h-4z\"/>","location_disabled":"<path d=\"M41.88 22.17C40.96 13.83 34.34 7.21 26 6.29V2.17h-4v4.12c-2.26.25-4.38.93-6.31 1.94l3 3c1.64-.67 3.43-1.05 5.31-1.05 7.73 0 14 6.27 14 14 0 1.88-.38 3.67-1.05 5.31l3 3c1.01-1.93 1.68-4.05 1.93-6.31H46v-4h-4.12zM6 8.72l4.07 4.07c-2.14 2.62-3.57 5.84-3.96 9.38H2v4h4.12c.92 8.34 7.54 14.96 15.88 15.88v4.12h4v-4.12c3.54-.39 6.76-1.82 9.38-3.96l4.08 4.08L42 39.63 8.55 6.17 6 8.72zm26.53 26.53c-2.36 1.82-5.32 2.92-8.53 2.92-7.73 0-14-6.27-14-14 0-3.22 1.1-6.17 2.92-8.53l19.61 19.61z\"/>","location_searching":"<path d=\"M41.88 22.17C40.96 13.83 34.34 7.21 26 6.29V2.17h-4v4.12c-8.34.92-14.96 7.54-15.88 15.88H2v4h4.12c.92 8.34 7.54 14.96 15.88 15.88v4.12h4v-4.12c8.34-.92 14.96-7.54 15.88-15.88H46v-4h-4.12zM24 38.17c-7.73 0-14-6.27-14-14s6.27-14 14-14 14 6.27 14 14-6.27 14-14 14z\"/>","network_cell":"<path fill-opacity=\".3\" d=\"M4 44h40V4z\"/><path d=\"M34 14L4 44h30z\"/>","network_wifi":"<path fill-opacity=\".3\" d=\"M24.02 42.98L47.28 14c-.9-.68-9.85-8-23.28-8S1.62 13.32.72 14l23.26 28.98.02.02.02-.02z\"/><path d=\"M7.07 21.91l16.92 21.07.01.02.02-.02 16.92-21.07C40.08 21.25 33.62 16 24 16c-9.63 0-16.08 5.25-16.93 5.91z\"/>","nfc":"<path d=\"M40 4.17H8c-2.21 0-4 1.79-4 4v32c0 2.21 1.79 4 4 4h32c2.21 0 4-1.79 4-4v-32c0-2.21-1.79-4-4-4zm0 36H8v-32h32v32zm-4-28H26c-2.21 0-4 1.79-4 4v4.55c-1.19.69-2 1.97-2 3.45 0 2.21 1.79 4 4 4s4-1.79 4-4c0-1.48-.81-2.75-2-3.45v-4.55h6v16H16v-16h4v-4h-8v24h24v-24z\"/>","screen_lock_landscape":"<path d=\"M42 10H6c-2.21 0-4 1.79-4 4v20c0 2.21 1.79 4 4 4h36c2.21 0 4-1.79 4-4V14c0-2.21-1.79-4-4-4zm-4 24H10V14h28v20zm-18-2h8c1.11 0 2-.9 2-2v-6c0-1.1-.89-2-2-2v-2c0-2.21-1.79-4-4-4s-4 1.79-4 4v2c-1.11 0-2 .9-2 2v6c0 1.1.89 2 2 2zm1.6-12c0-1.33 1.07-2.4 2.4-2.4 1.33 0 2.4 1.08 2.4 2.4v2h-4.8v-2z\"/>","screen_lock_portrait":"<path d=\"M20 32h8c1.11 0 2-.9 2-2v-6c0-1.1-.89-2-2-2v-2c0-2.21-1.79-4-4-4s-4 1.79-4 4v2c-1.11 0-2 .9-2 2v6c0 1.1.89 2 2 2zm1.6-12c0-1.33 1.07-2.4 2.4-2.4 1.33 0 2.4 1.08 2.4 2.4v2h-4.8v-2zM34 2H14c-2.21 0-4 1.79-4 4v36c0 2.21 1.79 4 4 4h20c2.21 0 4-1.79 4-4V6c0-2.21-1.79-4-4-4zm0 36H14V10h20v28z\"/>","screen_lock_rotation":"<path d=\"M46.51 25.54l-5.14-5.14-2.83 2.83 4.43 4.43-11.31 11.31L9.03 16.34 20.34 5.03l4.19 4.19 2.83-2.83-4.9-4.9c-1.17-1.17-3.07-1.17-4.24 0L5.49 14.22c-1.17 1.17-1.17 3.07 0 4.24L29.53 42.5c1.17 1.17 3.07 1.17 4.24 0L46.5 29.77c1.18-1.16 1.18-3.06.01-4.23zM16.93 40.97C10.4 37.87 5.71 31.52 5 24H2c1.02 12.32 11.32 22 23.9 22 .45 0 .88-.04 1.33-.07L19.6 38.3l-2.67 2.67zM32 18h10c1.11 0 2-.9 2-2V8c0-1.1-.89-2-2-2V5c0-2.76-2.24-5-5-5s-5 2.24-5 5v1c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2zm1.6-13c0-1.88 1.52-3.4 3.4-3.4s3.4 1.52 3.4 3.4v1h-6.8V5z\"/>","screen_rotation":"<path d=\"M32.97 5.03C39.5 8.13 44.19 14.48 44.9 22h3C46.88 9.68 36.58 0 24 0c-.45 0-.88.04-1.33.07L30.3 7.7l2.67-2.67zM20.46 3.49c-1.17-1.17-3.07-1.17-4.24 0L3.49 16.22c-1.17 1.17-1.17 3.07 0 4.24L27.53 44.5c1.17 1.17 3.07 1.17 4.24 0L44.5 31.77c1.17-1.17 1.17-3.07 0-4.24L20.46 3.49zm9.2 38.89L5.61 18.34 18.34 5.61l24.04 24.04-12.72 12.73zm-14.63.59C8.5 39.87 3.81 33.52 3.1 26h-3C1.12 38.32 11.42 48 24 48c.45 0 .88-.04 1.33-.07L17.7 40.3l-2.67 2.67z\"/>","sd_storage":"<path d=\"M36 4H20L8.04 16 8 40c0 2.2 1.8 4 4 4h24c2.2 0 4-1.8 4-4V8c0-2.2-1.8-4-4-4zM24 16h-4V8h4v8zm6 0h-4V8h4v8zm6 0h-4V8h4v8z\"/>","settings_system_daydream":"<path d=\"M18 32h13c2.76 0 5-2.24 5-5s-2.24-5-5-5h-.1c-.49-3.39-3.38-6-6.9-6-2.8 0-5.2 1.66-6.32 4.04h-.33C14.34 20.36 12 22.91 12 26c0 3.31 2.69 6 6 6zM42 6H6c-2.21 0-4 1.79-4 4v28c0 2.21 1.79 4 4 4h36c2.21 0 4-1.79 4-4V10c0-2.21-1.79-4-4-4zm0 32.03H6V9.97h36v28.06z\"/>","signal_cellular_0_bar":"<path fill-opacity=\".3\" d=\"M4 44h40V4z\"/>","signal_cellular_1_bar":"<path fill-opacity=\".3\" d=\"M4 44h40V4z\"/><path d=\"M24 24L4 44h20z\"/>","signal_cellular_2_bar":"<path fill-opacity=\".3\" d=\"M4 44h40V4z\"/><path d=\"M28 20L4 44h24z\"/>","signal_cellular_3_bar":"<path fill-opacity=\".3\" d=\"M4 44h40V4z\"/><path d=\"M34 14L4 44h30z\"/>","signal_cellular_4_bar":"<path d=\"M4 44h40V4z\"/>","signal_cellular_connected_no_internet_0_bar":"<path fill-opacity=\".3\" d=\"M44 16V4L4 44h32V16z\"/><path d=\"M40 44h4v-4h-4v4zm0-24v16h4V20h-4z\"/>","signal_cellular_connected_no_internet_1_bar":"<path fill-opacity=\".3\" d=\"M44 16V4L4 44h32V16z\"/><path d=\"M40 20v16h4V20h-4zM24 44V24L4 44h20zm16 0h4v-4h-4v4z\"/>","signal_cellular_connected_no_internet_2_bar":"<path fill-opacity=\".3\" d=\"M44 16V4L4 44h32V16z\"/><path d=\"M28 44V20L4 44h24zm12-24v16h4V20h-4zm0 24h4v-4h-4v4z\"/>","signal_cellular_connected_no_internet_3_bar":"<path fill-opacity=\".3\" d=\"M44 16V4L4 44h32V16z\"/><path d=\"M34 44V14L4 44h30zm6-24v16h4V20h-4zm0 24h4v-4h-4v4z\"/>","signal_cellular_connected_no_internet_4_bar":"<path d=\"M40 36h4V20h-4v16zm0 8h4v-4h-4v4zM4 44h32V16h8V4L4 44z\"/>","signal_cellular_no_sim":"<path d=\"M37.98 10c0-2.21-1.77-4-3.98-4H20l-4.68 4.68L38 33.36 37.98 10zM7.3 7.76L4.76 10.3 10 15.55V38c0 2.21 1.79 4 4 4h20.02c.7 0 1.35-.2 1.92-.51l3.76 3.76 2.54-2.55L7.3 7.76z\"/>","signal_cellular_null":"<path d=\"M40 13.66V40H13.66L40 13.66M44 4L4 44h40V4z\"/>","signal_cellular_off":"<path d=\"M42 2L24.82 19.18 42 36.36V2zM9.55 9L7 11.54l12.73 12.73L2 42h35.45l4 4L44 43.45 9.55 9z\"/>","signal_wifi_0_bar":"<path fill-opacity=\".3\" d=\"M24.02 42.98L47.28 14c-.9-.68-9.85-8-23.28-8C10.57 6 1.62 13.32.72 14l23.26 28.98.02.02.02-.02z\"/>","signal_wifi_1_bar":"<path fill-opacity=\".3\" d=\"M24.02 42.98L47.28 14c-.9-.68-9.85-8-23.28-8S1.62 13.32.72 14l23.26 28.98.02.02.02-.02z\"/><path d=\"M13.34 29.72l10.65 13.27.01.01.01-.01 10.65-13.27C34.13 29.31 30.06 26 24 26s-10.13 3.31-10.66 3.72z\"/>","signal_wifi_1_bar_lock":"<path d=\"M41 19c.7 0 1.4.1 2.1.2l4.2-5.2c-.9-.7-9.8-8-23.3-8S1.6 13.3.7 14L24 43l7-8.7V29c0-5.5 4.5-10 10-10z\" opacity=\".3\"/><path d=\"M46 32v-3c0-2.8-2.2-5-5-5s-5 2.2-5 5v3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2v-8c0-1.1-.9-2-2-2zm-2 0h-6v-3c0-1.7 1.3-3 3-3s3 1.3 3 3v3zm-30.7-2.3l9 11.2L24 43l7-8.8V29c0-.5 0-1 .1-1.4-1.8-.8-4.2-1.6-7.1-1.6-6.1 0-10.1 3.3-10.7 3.7z\"/>","signal_wifi_2_bar":"<path fill-opacity=\".3\" d=\"M24.02 42.98L47.28 14c-.9-.68-9.85-8-23.28-8S1.62 13.32.72 14l23.26 28.98.02.02.02-.02z\"/><path d=\"M9.58 25.03l14.41 17.95.01.02.01-.02 14.41-17.95C37.7 24.47 32.2 20 24 20s-13.7 4.47-14.42 5.03z\"/>","signal_wifi_2_bar_lock":"<path opacity=\".3\" d=\"M41 19c.7 0 1.4.1 2.1.2l4.2-5.2c-.9-.7-9.9-8-23.3-8S1.6 13.3.7 14L24 43l7-8.7V29c0-5.5 4.5-10 10-10z\"/><path d=\"M46 32v-3c0-2.8-2.2-5-5-5s-5 2.2-5 5v3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2v-8c0-1.1-.9-2-2-2zm-2 0h-6v-3c0-1.7 1.3-3 3-3s3 1.3 3 3v3zM9.6 25L24 43l7-8.7V29c0-2.6 1-5 2.7-6.8C31.2 21 27.9 20 24 20c-8.2 0-13.7 4.5-14.4 5z\"/>","signal_wifi_3_bar":"<path fill-opacity=\".3\" d=\"M24.02 42.98L47.28 14c-.9-.68-9.85-8-23.28-8S1.62 13.32.72 14l23.26 28.98.02.02.02-.02z\"/><path d=\"M7.07 21.91l16.92 21.07.01.02.02-.02 16.92-21.07C40.08 21.25 33.62 16 24 16c-9.63 0-16.08 5.25-16.93 5.91z\"/>","signal_wifi_3_bar_lock":"<path opacity=\".3\" enable-background=\"new\" d=\"M41 19c.7 0 1.4.1 2.1.2l4.2-5.2c-.9-.7-9.8-8-23.3-8S1.6 13.3.7 14L24 43l7-8.7V29c0-5.5 4.5-10 10-10z\"/><path d=\"M46 32v-3c0-2.8-2.2-5-5-5s-5 2.2-5 5v3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2v-8c0-1.1-.9-2-2-2zm-2 0h-6v-3c0-1.7 1.3-3 3-3s3 1.3 3 3v3zM7.1 21.9L24 43l7-8.7V29c0-4.3 2.7-8 6.5-9.4C34.6 18 29.9 16 24 16c-9.6 0-16.1 5.2-16.9 5.9z\"/>","signal_wifi_4_bar":"<path d=\"M24.02 42.98L47.28 14c-.9-.68-9.85-8-23.28-8S1.62 13.32.72 14l23.26 28.98.02.02.02-.02z\"/>","signal_wifi_4_bar_lock":"<path d=\"M41 19c.72 0 1.41.08 2.09.22L47.28 14c-.9-.68-9.85-8-23.28-8S1.62 13.32.72 14l23.26 28.98.02.02.02-.02 6.98-8.7V29c0-5.52 4.48-10 10-10zm5 13v-3c0-2.76-2.24-5-5-5s-5 2.24-5 5v3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2v-8c0-1.1-.9-2-2-2zm-2 0h-6v-3c0-1.66 1.34-3 3-3s3 1.34 3 3v3z\"/>","signal_wifi_off":"<path d=\"M47.28 14c-.9-.68-9.85-8-23.28-8-3.01 0-5.78.38-8.3.96L36.36 27.6 47.28 14zM6.55 2.89L4 5.44l4.11 4.11c-4.28 1.97-6.92 4.1-7.39 4.46l23.26 28.98.02.01.02-.02 7.8-9.72 6.63 6.63L41 37.34 6.55 2.89z\"/>","storage":"<path d=\"M4 40h40v-8H4v8zm4-6h4v4H8v-4zM4 8v8h40V8H4zm8 6H8v-4h4v4zM4 28h40v-8H4v8zm4-6h4v4H8v-4z\"/>","usb":"<path d=\"M30 14v8h2v4h-6V10h4l-6-8-6 8h4v16h-6v-4.14c1.41-.73 2.4-2.16 2.4-3.86 0-2.43-1.97-4.4-4.4-4.4-2.43 0-4.4 1.97-4.4 4.4 0 1.7.99 3.13 2.4 3.86V26c0 2.21 1.79 4 4 4h6v6.1c-1.42.73-2.4 2.19-2.4 3.9 0 2.43 1.97 4.4 4.4 4.4 2.43 0 4.4-1.97 4.4-4.4 0-1.71-.98-3.17-2.4-3.9V30h6c2.21 0 4-1.79 4-4v-4h2v-8h-8z\"/>","wallpaper":"<path d=\"M8 8h14V4H8C5.79 4 4 5.79 4 8v14h4V8zm12 18l-8 10h24l-6-8-4.06 5.42L20 26zm14-9c0-1.66-1.34-3-3-3s-3 1.34-3 3 1.34 3 3 3 3-1.34 3-3zm6-13H26v4h14v14h4V8c0-2.21-1.79-4-4-4zm0 36H26v4h14c2.21 0 4-1.79 4-4V26h-4v14zM8 26H4v14c0 2.21 1.79 4 4 4h14v-4H8V26z\"/>","widgets":"<path d=\"M26 26v16h16V26H26zM6 42h16V26H6v16zM6 6v16h16V6H6zm27.31-2.63L22 14.69 33.31 26l11.31-11.31L33.31 3.37z\"/>","wifi_lock":"<path d=\"M41 19c.56 0 1.09.08 1.63.16L48 12c-6.69-5.02-15-8-24-8S6.69 6.98 0 12l24 32 7-9.33V29c0-5.52 4.48-10 10-10zm5 13v-3c0-2.76-2.24-5-5-5s-5 2.24-5 5v3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2v-8c0-1.1-.9-2-2-2zm-2 0h-6v-3c0-1.66 1.34-3 3-3s3 1.34 3 3v3z\"/>","wifi_tethering":"<path d=\"M24 22c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm12 4c0-6.63-5.37-12-12-12s-12 5.37-12 12c0 4.44 2.41 8.3 5.99 10.38l2.02-3.48C17.62 31.51 16 28.96 16 26c0-4.42 3.58-8 8-8s8 3.58 8 8c0 2.96-1.62 5.51-4.01 6.89l2.02 3.48C33.59 34.3 36 30.44 36 26zM24 6C12.95 6 4 14.95 4 26c0 7.39 4.02 13.83 9.99 17.29l2-3.46C11.22 37.07 8 31.91 8 26c0-8.84 7.16-16 16-16s16 7.16 16 16c0 5.91-3.22 11.07-7.99 13.84l2 3.46C39.98 39.83 44 33.39 44 26c0-11.05-8.96-20-20-20z\"/>","attach_file":"<path d=\"M33 12v23c0 4.42-3.58 8-8 8s-8-3.58-8-8V10c0-2.76 2.24-5 5-5s5 2.24 5 5v21c0 1.1-.89 2-2 2-1.11 0-2-.9-2-2V12h-3v19c0 2.76 2.24 5 5 5s5-2.24 5-5V10c0-4.42-3.58-8-8-8s-8 3.58-8 8v25c0 6.08 4.93 11 11 11s11-4.92 11-11V12h-3z\"/>","attach_money":"<path d=\"M23.6 21.8c-4.54-1.18-6-2.39-6-4.29 0-2.18 2.01-3.71 5.4-3.71 3.56 0 4.88 1.7 5 4.2h4.42c-.13-3.45-2.24-6.59-6.42-7.62V6h-6v4.32c-3.88.85-7 3.35-7 7.22 0 4.62 3.83 6.92 9.4 8.26 5.01 1.2 6 2.95 6 4.83 0 1.37-.97 3.57-5.4 3.57-4.12 0-5.75-1.85-5.96-4.2h-4.41c.25 4.38 3.52 6.83 7.37 7.66V42h6v-4.3c3.89-.75 7-3 7-7.11 0-5.66-4.86-7.6-9.4-8.79z\"/>","border_all":"<path d=\"M6 6v36h36V6H6zm16 32H10V26h12v12zm0-16H10V10h12v12zm16 16H26V26h12v12zm0-16H26V10h12v12z\"/>","border_bottom":"<path d=\"M18 22h-4v4h4v-4zm8 8h-4v4h4v-4zM18 6h-4v4h4V6zm8 16h-4v4h4v-4zM10 6H6v4h4V6zm16 8h-4v4h4v-4zm8 8h-4v4h4v-4zM26 6h-4v4h4V6zm8 0h-4v4h4V6zm4 20h4v-4h-4v4zm0 8h4v-4h-4v4zM10 14H6v4h4v-4zm28-8v4h4V6h-4zm0 12h4v-4h-4v4zm-28 4H6v4h4v-4zM6 42h36v-4H6v4zm4-12H6v4h4v-4z\"/>","border_clear":"<path d=\"M14 10h4V6h-4v4zm0 16h4v-4h-4v4zm0 16h4v-4h-4v4zm8-8h4v-4h-4v4zm0 8h4v-4h-4v4zM6 42h4v-4H6v4zm0-8h4v-4H6v4zm0-8h4v-4H6v4zm0-8h4v-4H6v4zm0-8h4V6H6v4zm16 16h4v-4h-4v4zm16 8h4v-4h-4v4zm0-8h4v-4h-4v4zm0 16h4v-4h-4v4zm0-24h4v-4h-4v4zm-16 0h4v-4h-4v4zM38 6v4h4V6h-4zm-16 4h4V6h-4v4zm8 32h4v-4h-4v4zm0-16h4v-4h-4v4zm0-16h4V6h-4v4z\"/>","border_color":"<path d=\"M35.5 14L28 6.5l-20 20V34h7.5l20-20zm5.91-5.91c.78-.78.78-2.05 0-2.83L36.74.59c-.78-.78-2.05-.78-2.83 0L30 4.5l7.5 7.5 3.91-3.91z\"/><path fill-opacity=\".36\" d=\"M0 40h48v8H0z\"/>","border_horizontal":"<path d=\"M6 42h4v-4H6v4zm4-28H6v4h4v-4zM6 34h4v-4H6v4zm8 8h4v-4h-4v4zM10 6H6v4h4V6zm8 0h-4v4h4V6zm16 0h-4v4h4V6zm-8 8h-4v4h4v-4zm0-8h-4v4h4V6zm12 28h4v-4h-4v4zm-16 8h4v-4h-4v4zM6 26h36v-4H6v4zM38 6v4h4V6h-4zm0 12h4v-4h-4v4zM22 34h4v-4h-4v4zm8 8h4v-4h-4v4zm8 0h4v-4h-4v4z\"/>","border_inner":"<path d=\"M6 42h4v-4H6v4zm8 0h4v-4h-4v4zm-4-28H6v4h4v-4zM6 34h4v-4H6v4zM18 6h-4v4h4V6zm-8 0H6v4h4V6zm24 0h-4v4h4V6zm4 12h4v-4h-4v4zm0-12v4h4V6h-4zm-8 36h4v-4h-4v4zM26 6h-4v16H6v4h16v16h4V26h16v-4H26V6zm12 36h4v-4h-4v4zm0-8h4v-4h-4v4z\"/>","border_left":"<path d=\"M22 42h4v-4h-4v4zm0-8h4v-4h-4v4zm0-24h4V6h-4v4zm0 8h4v-4h-4v4zm0 8h4v-4h-4v4zm-8 16h4v-4h-4v4zm0-32h4V6h-4v4zm0 16h4v-4h-4v4zM6 42h4V6H6v36zm32-24h4v-4h-4v4zm-8 24h4v-4h-4v4zm8-8h4v-4h-4v4zm0-28v4h4V6h-4zm0 20h4v-4h-4v4zm0 16h4v-4h-4v4zm-8-16h4v-4h-4v4zm0-16h4V6h-4v4z\"/>","border_outer":"<path d=\"M26 14h-4v4h4v-4zm0 8h-4v4h4v-4zm8 0h-4v4h4v-4zM6 6v36h36V6H6zm32 32H10V10h28v28zm-12-8h-4v4h4v-4zm-8-8h-4v4h4v-4z\"/>","border_right":"<path d=\"M14 42h4v-4h-4v4zM6 10h4V6H6v4zm8 0h4V6h-4v4zm0 16h4v-4h-4v4zM6 42h4v-4H6v4zm16 0h4v-4h-4v4zM6 26h4v-4H6v4zm0 8h4v-4H6v4zm0-16h4v-4H6v4zm16 16h4v-4h-4v4zm8-8h4v-4h-4v4zm8-20v36h4V6h-4zm-8 36h4v-4h-4v4zm0-32h4V6h-4v4zm-8 16h4v-4h-4v4zm0-16h4V6h-4v4zm0 8h4v-4h-4v4z\"/>","border_style":"<path d=\"M30 42h4v-4h-4v4zm8 0h4v-4h-4v4zm-24 0h4v-4h-4v4zm8 0h4v-4h-4v4zm16-8h4v-4h-4v4zm0-8h4v-4h-4v4zM6 6v36h4V10h32V6H6zm32 12h4v-4h-4v4z\"/>","border_top":"<path d=\"M14 42h4v-4h-4v4zm0-16h4v-4h-4v4zm8 0h4v-4h-4v4zm0 16h4v-4h-4v4zM6 34h4v-4H6v4zm0 8h4v-4H6v4zm0-16h4v-4H6v4zm0-8h4v-4H6v4zm16 16h4v-4h-4v4zm16-16h4v-4h-4v4zm0 8h4v-4h-4v4zM6 6v4h36V6H6zm32 28h4v-4h-4v4zm-8 8h4v-4h-4v4zm-8-24h4v-4h-4v4zm16 24h4v-4h-4v4zm-8-16h4v-4h-4v4z\"/>","border_vertical":"<path d=\"M6 18h4v-4H6v4zm0-8h4V6H6v4zm8 32h4v-4h-4v4zm0-16h4v-4h-4v4zm-8 0h4v-4H6v4zm0 16h4v-4H6v4zm0-8h4v-4H6v4zm8-24h4V6h-4v4zm24 24h4v-4h-4v4zm-16 8h4V6h-4v36zm16 0h4v-4h-4v4zm0-16h4v-4h-4v4zm0-20v4h4V6h-4zm0 12h4v-4h-4v4zm-8-8h4V6h-4v4zm0 32h4v-4h-4v4zm0-16h4v-4h-4v4z\"/>","bubble_chart":"<circle cx=\"14.4\" cy=\"28.8\" r=\"6.4\"/><circle cx=\"29.6\" cy=\"36\" r=\"4\"/><circle cx=\"30.4\" cy=\"17.6\" r=\"9.6\"/>","drag_handle":"<path d=\"M40 18H8v4h32v-4zM8 30h32v-4H8v4z\"/>","format_align_center":"<path d=\"M14 30v4h20v-4H14zM6 42h36v-4H6v4zm0-16h36v-4H6v4zm8-12v4h20v-4H14zM6 6v4h36V6H6z\"/>","format_align_justify":"<path d=\"M6 42h36v-4H6v4zm0-8h36v-4H6v4zm0-8h36v-4H6v4zm0-8h36v-4H6v4zM6 6v4h36V6H6z\"/>","format_align_left":"<path d=\"M30 30H6v4h24v-4zm0-16H6v4h24v-4zM6 26h36v-4H6v4zm0 16h36v-4H6v4zM6 6v4h36V6H6z\"/>","format_align_right":"<path d=\"M6 42h36v-4H6v4zm12-8h24v-4H18v4zM6 26h36v-4H6v4zm12-8h24v-4H18v4zM6 6v4h36V6H6z\"/>","format_bold":"<path d=\"M31.2 21.58c1.93-1.35 3.3-3.53 3.3-5.58 0-4.51-3.49-8-8-8H14v28h14.08c4.19 0 7.42-3.4 7.42-7.58 0-3.04-1.73-5.63-4.3-6.84zM20 13h6c1.66 0 3 1.34 3 3s-1.34 3-3 3h-6v-6zm7 18h-7v-6h7c1.66 0 3 1.34 3 3s-1.34 3-3 3z\"/>","format_clear":"<path d=\"M6.54 10L4 12.55l13.94 13.94L13 38h6l3.14-7.32L33.46 42 36 39.45 7.09 10.55 6.54 10zM12 10v.36L17.64 16h4.79l-1.44 3.35 4.2 4.2L28.43 16H40v-6H12z\"/>","format_color_fill":"<path d=\"M33.12 17.88L15.24 0l-2.83 2.83 4.76 4.76L6.88 17.88c-1.17 1.17-1.17 3.07 0 4.24l11 11c.58.59 1.35.88 2.12.88s1.54-.29 2.12-.88l11-11c1.17-1.17 1.17-3.07 0-4.24zM10.41 20L20 10.42 29.59 20H10.41zM38 23s-4 4.33-4 7c0 2.21 1.79 4 4 4s4-1.79 4-4c0-2.67-4-7-4-7z\"/><path fill-opacity=\".36\" d=\"M0 40h48v8H0z\"/>","format_color_reset":"<path d=\"M36 28c0-8-12-21.6-12-21.6s-2.66 3.02-5.47 7.04L35.7 30.61c.19-.84.3-1.71.3-2.61zm-1.76 6.24L25 25 10.54 10.54 8 13.09l6.64 6.64C13.11 22.65 12 25.58 12 28c0 6.63 5.37 12 12 12 3.04 0 5.8-1.14 7.91-3l5.27 5.27 2.54-2.55-5.48-5.48z\"/>","format_color_text":"<path fill-opacity=\".36\" d=\"M0 40h48v8H0z\"/><path d=\"M22 6L11 34h4.5l2.25-6h12.5l2.25 6H37L26 6h-4zm-2.75 18L24 11.33 28.75 24h-9.5z\"/>","format_indent_decrease":"<path d=\"M22 34h20v-4H22v4zM6 24l8 8V16l-8 8zm0 18h36v-4H6v4zM6 6v4h36V6H6zm16 12h20v-4H22v4zm0 8h20v-4H22v4z\"/>","format_indent_increase":"<path d=\"M6 42h36v-4H6v4zm0-26v16l8-8-8-8zm16 18h20v-4H22v4zM6 6v4h36V6H6zm16 12h20v-4H22v4zm0 8h20v-4H22v4z\"/>","format_italic":"<path d=\"M20 8v6h4.43l-6.86 16H12v6h16v-6h-4.43l6.86-16H36V8z\"/>","format_line_spacing":"<path d=\"M12 14h5l-7-7-7 7h5v20H3l7 7 7-7h-5V14zm8-4v4h24v-4H20zm0 28h24v-4H20v4zm0-12h24v-4H20v4z\"/>","format_list_bulleted":"<path d=\"M8 21c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zM8 9c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm0 24c-1.67 0-3 1.35-3 3s1.35 3 3 3 3-1.35 3-3-1.33-3-3-3zm6 5h28v-4H14v4zm0-12h28v-4H14v4zm0-16v4h28v-4H14z\"/>","format_list_numbered":"<path d=\"M4 34h4v1H6v2h2v1H4v2h6v-8H4v2zm2-18h2V8H4v2h2v6zm-2 6h3.6L4 26.2V28h6v-2H6.4l3.6-4.2V20H4v2zm10-12v4h28v-4H14zm0 28h28v-4H14v4zm0-12h28v-4H14v4z\"/>","format_paint":"<path d=\"M36 8V6c0-1.1-.9-2-2-2H10c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h24c1.1 0 2-.9 2-2v-2h2v8H18v22c0 1.1.9 2 2 2h4c1.1 0 2-.9 2-2V24h16V8h-6z\"/>","format_quote":"<path d=\"M12 34h6l4-8V14H10v12h6zm16 0h6l4-8V14H26v12h6z\"/>","format_shapes":"<path d=\"M46 14V2H34v4H14V2H2v12h4v20H2v12h12v-4h20v4h12V34h-4V14h4zM6 6h4v4H6V6zm4 36H6v-4h4v4zm24-4H14v-4h-4V14h4v-4h20v4h4v20h-4v4zm8 4h-4v-4h4v4zm-4-32V6h4v4h-4zM27.47 28H20.5l-1.46 4h-3.25l6.8-18h2.81l6.81 18h-3.26l-1.48-4zm-6.1-2.52h5.22l-2.61-7.66-2.61 7.66z\"/>","format_size":"<path d=\"M18 8v6h10v24h6V14h10V8H18zM6 24h6v14h6V24h6v-6H6v6z\"/>","format_strikethrough":"<path d=\"M20 38h8v-6h-8v6zM10 8v6h10v6h8v-6h10V8H10zM6 28h36v-4H6v4z\"/>","format_textdirection_l_to_r":"<path d=\"M18 20v10h4V8h4v22h4V8h4V4H18c-4.42 0-8 3.58-8 8s3.58 8 8 8zm24 16l-8-8v6H10v4h24v6l8-8z\"/>","format_textdirection_r_to_l":"<path d=\"M20 20v10h4V8h4v22h4V8h4V4H20c-4.42 0-8 3.58-8 8s3.58 8 8 8zm-4 14v-6l-8 8 8 8v-6h24v-4H16z\"/>","format_underlined":"<path d=\"M24 34c6.63 0 12-5.37 12-12V6h-5v16c0 3.87-3.13 7-7 7s-7-3.13-7-7V6h-5v16c0 6.63 5.37 12 12 12zm-14 4v4h28v-4H10z\"/>","functions":"<path d=\"M36 8H12v4l13 12-13 12v4h24v-6H22l10-10-10-10h14z\"/>","highlight":"<path d=\"M12 28l6 6v10h12V34l6-6V18H12zM22 4h4v6h-4zM7 11.75l2.828-2.828 4.243 4.243-2.82 2.828zm26.923 1.422l4.242-4.242 2.83 2.828L36.75 16z\"/>","insert_chart":"<path d=\"M38 6H10c-2.21 0-4 1.79-4 4v28c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4V10c0-2.21-1.79-4-4-4zM18 34h-4V20h4v14zm8 0h-4V14h4v20zm8 0h-4v-8h4v8z\"/>","insert_comment":"<path d=\"M40 4H8C5.79 4 4 5.79 4 8v24c0 2.21 1.79 4 4 4h28l8 8V8c0-2.21-1.79-4-4-4zm-4 24H12v-4h24v4zm0-6H12v-4h24v4zm0-6H12v-4h24v4z\"/>","insert_drive_file":"<path d=\"M12 4C9.79 4 8.02 5.79 8.02 8L8 40c0 2.21 1.77 4 3.98 4H36c2.21 0 4-1.79 4-4V16L28 4H12zm14 14V7l11 11H26z\"/>","insert_emoticon":"<path d=\"M23.99 4C12.94 4 4 12.95 4 24s8.94 20 19.99 20C35.04 44 44 35.05 44 24S35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16zm7-18c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3zm-14 0c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3zm7 13c4.66 0 8.61-2.91 10.21-7H13.79c1.6 4.09 5.55 7 10.21 7z\"/>","insert_invitation":"<path d=\"M34 24H24v10h10V24zM32 2v4H16V2h-4v4h-2c-2.21 0-3.98 1.79-3.98 4L6 38c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4V10c0-2.21-1.79-4-4-4h-2V2h-4zm6 36H10V16h28v22z\"/>","insert_link":"<path d=\"M7.8 24c0-3.42 2.78-6.2 6.2-6.2h8V14h-8C8.48 14 4 18.48 4 24s4.48 10 10 10h8v-3.8h-8c-3.42 0-6.2-2.78-6.2-6.2zm8.2 2h16v-4H16v4zm18-12h-8v3.8h8c3.42 0 6.2 2.78 6.2 6.2s-2.78 6.2-6.2 6.2h-8V34h8c5.52 0 10-4.48 10-10s-4.48-10-10-10z\"/>","insert_photo":"<path d=\"M42 38V10c0-2.21-1.79-4-4-4H10c-2.21 0-4 1.79-4 4v28c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4zM17 27l5 6.01L29 24l9 12H10l7-9z\"/>","linear_scale":"<path d=\"M39 19c-2.05 0-3.81 1.23-4.58 3h-5.84c-.77-1.77-2.53-3-4.58-3s-3.81 1.23-4.58 3h-5.84c-.77-1.77-2.53-3-4.58-3-2.77 0-5 2.23-5 5s2.23 5 5 5c2.05 0 3.81-1.23 4.58-3h5.84c.77 1.77 2.53 3 4.58 3s3.81-1.23 4.58-3h5.84c.77 1.77 2.53 3 4.58 3 2.77 0 5-2.23 5-5s-2.23-5-5-5z\"/>","merge_type":"<path d=\"M34 40.83L36.83 38 30 31.17 27.17 34 34 40.83zM15 16h7v11.17L11.17 38 14 40.83l12-12V16h7l-9-9-9 9z\"/>","mode_comment":"<path d=\"M43.98 8c0-2.21-1.77-4-3.98-4H8C5.79 4 4 5.79 4 8v24c0 2.21 1.79 4 4 4h28l8 8-.02-36z\"/>","mode_edit":"<path d=\"M6 34.5V42h7.5l22.13-22.13-7.5-7.5L6 34.5zm35.41-20.41c.78-.78.78-2.05 0-2.83l-4.67-4.67c-.78-.78-2.05-.78-2.83 0l-3.66 3.66 7.5 7.5 3.66-3.66z\"/>","monetization_on":"<path d=\"M24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm2.83 32.18V40H21.5v-3.86c-3.41-.73-6.33-2.92-6.54-6.81h3.91c.2 2.1 1.64 3.73 5.3 3.73 3.93 0 4.8-1.96 4.8-3.18 0-1.65-.89-3.22-5.33-4.28-4.96-1.19-8.36-3.24-8.36-7.34 0-3.43 2.77-5.67 6.22-6.42V8h5.33v3.89c3.72.91 5.58 3.72 5.71 6.77H28.6c-.11-2.22-1.28-3.73-4.44-3.73-3 0-4.8 1.35-4.8 3.29 0 1.69 1.3 2.77 5.33 3.82 4.04 1.05 8.36 2.77 8.36 7.82 0 3.65-2.76 5.66-6.22 6.32z\"/>","multiline_chart":"<path d=\"M44 13.84l-2.82-2.82-5.71 6.41C31.36 12.81 25.66 10 19.22 10 13.44 10 8.14 12.32 4 16l2.84 2.84c3.4-2.98 7.7-4.84 12.38-4.84 5.48 0 10.18 2.51 13.54 6.49L27 26.96l-8-8L4 33.98l3 3 12-12.02 8 8 8.09-9.1c1.5 2.7 2.5 5.79 2.89 9.1H42c-.44-4.61-1.89-8.78-4.09-12.27L44 13.84z\"/>","pie_chart":"<path d=\"M22 4v40C11.86 42.99 4 34.42 4 24S11.86 5 22 4zm4.06 0v17.99H44C43.06 12.49 35.53 4.94 26.06 4zm0 22.01V44c9.47-.94 17-8.49 17.94-17.99H26.06z\"/>","pie_chart_outlined":"<path d=\"M24 4C13 4 4 13 4 24s9 20 20 20 20-9 20-20S35 4 24 4zm2 4.13c7.21.9 12.97 6.66 13.87 13.87H26V8.13zM8 24c0-8.12 6.13-14.88 14-15.87v31.74C14.13 38.88 8 32.12 8 24zm18 15.87V26h13.87c-.9 7.21-6.66 12.97-13.87 13.87z\"/>","publish":"<path d=\"M10 8v4h28V8H10zm0 20h8v12h12V28h8L24 14 10 28z\"/>","short_text":"<path d=\"M8 18h32v4H8zm0 8h20v4H8z\"/>","show_chart":"<path d=\"M7 36.99l12-12.03 8 8 17-19.12-2.82-2.83L27 26.96l-8-8L4 33.99z\"/>","space_bar":"<path d=\"M36 18v8H12v-8H8v12h32V18z\"/>","strikethrough_s":"<path fill=\"#010101\" d=\"M14.47 17.49c-.51-.95-.77-2.06-.77-3.33 0-1.22.26-2.33.79-3.34.53-1.01 1.27-1.87 2.23-2.58s2.09-1.26 3.41-1.65C21.45 6.2 22.89 6 24.47 6c1.62 0 3.09.22 4.41.67 1.32.45 2.45 1.07 3.39 1.88.94.8 1.66 1.75 2.17 2.86.51 1.1.76 2.31.76 3.62h-6.02c0-.61-.1-1.18-.29-1.7-.19-.53-.49-.98-.89-1.35-.4-.37-.9-.67-1.5-.87-.6-.21-1.31-.31-2.13-.31-.79 0-1.47.09-2.06.26-.58.17-1.06.41-1.44.72-.38.31-.67.67-.86 1.08-.19.41-.29.86-.29 1.32 0 .96.49 1.77 1.47 2.42.75.49 1.53.96 2.81 1.4h-9.22c-.1-.17-.21-.33-.31-.51zM42 24v-4H6v4h19.25c.36.14.8.28 1.1.41.74.33 1.32.68 1.74 1.02.42.35.7.73.85 1.13.15.41.22.87.22 1.37 0 .47-.09.91-.27 1.31-.18.41-.46.76-.83 1.05-.37.29-.85.52-1.42.69-.58.17-1.25.25-2.03.25-.87 0-1.66-.09-2.37-.26-.71-.17-1.31-.45-1.81-.83-.5-.38-.89-.88-1.17-1.49-.28-.61-.51-1.53-.51-2.41H12.8c0 1.1.16 2.26.47 3.16.31.9.75 1.71 1.3 2.42s1.21 1.32 1.96 1.84 1.56.96 2.44 1.3c.88.35 1.79.61 2.76.77.96.17 1.93.25 2.89.25 1.6 0 3.06-.18 4.36-.55s2.42-.9 3.34-1.58c.92-.69 1.63-1.53 2.14-2.54s.75-2.15.75-3.43c0-1.2-.21-2.28-.62-3.23-.1-.23-.21-.45-.34-.67H42z\"/>","text_fields":"<path d=\"M5 8v6h10v24h6V14h10V8H5zm38 10H25v6h6v14h6V24h6v-6z\"/>","title":"<path d=\"M10 8v6h11v24h6V14h11V8z\"/>","vertical_align_bottom":"<path d=\"M32 26h-6V6h-4v20h-6l8 8 8-8zM8 38v4h32v-4H8z\"/>","vertical_align_center":"<path d=\"M16 38h6v8h4v-8h6l-8-8-8 8zm16-28h-6V2h-4v8h-6l8 8 8-8zM8 22v4h32v-4H8z\"/>","vertical_align_top":"<path d=\"M16 22h6v20h4V22h6l-8-8-8 8zM8 6v4h32V6H8z\"/>","wrap_text":"<path d=\"M8 38h12v-4H8v4zm32-28H8v4h32v-4zm-6 12H8v4h26.5c2.21 0 4 1.79 4 4s-1.79 4-4 4H30v-4l-6 6 6 6v-4h4c4.41 0 8-3.59 8-8s-3.59-8-8-8z\"/>","attachment":"<path d=\"M15 36C8.92 36 4 31.07 4 25s4.92-11 11-11h21c4.42 0 8 3.58 8 8s-3.58 8-8 8H19c-2.76 0-5-2.24-5-5s2.24-5 5-5h15v3H19c-1.1 0-2 .89-2 2s.9 2 2 2h17c2.76 0 5-2.24 5-5s-2.24-5-5-5H15c-4.42 0-8 3.58-8 8s3.58 8 8 8h19v3H15z\"/>","cloud":"<path d=\"M38.71 20.07C37.35 13.19 31.28 8 24 8c-5.78 0-10.79 3.28-13.3 8.07C4.69 16.72 0 21.81 0 28c0 6.63 5.37 12 12 12h26c5.52 0 10-4.48 10-10 0-5.28-4.11-9.56-9.29-9.93z\"/>","cloud_circle":"<path d=\"M24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm9 28H16c-3.31 0-6-2.69-6-6s2.69-6 6-6l.27.03c.89-3.46 4-6.03 7.73-6.03 4.42 0 8 3.58 8 8h1c2.76 0 5 2.24 5 5s-2.24 5-5 5z\"/>","cloud_done":"<path d=\"M38.71 20.07C37.35 13.19 31.28 8 24 8c-5.78 0-10.79 3.28-13.3 8.07C4.69 16.72 0 21.81 0 28c0 6.63 5.37 12 12 12h26c5.52 0 10-4.48 10-10 0-5.28-4.11-9.56-9.29-9.93zM20 34l-7-7 2.83-2.83L20 28.34l10.35-10.35 2.83 2.83L20 34z\"/>","cloud_download":"<path d=\"M38.71 20.07C37.35 13.19 31.28 8 24 8c-5.78 0-10.79 3.28-13.3 8.07C4.69 16.72 0 21.81 0 28c0 6.63 5.37 12 12 12h26c5.52 0 10-4.48 10-10 0-5.28-4.11-9.56-9.29-9.93zM34 26L24 36 14 26h6v-8h8v8h6z\"/>","cloud_off":"<path d=\"M38.71 20.07C37.35 13.19 31.28 8 24 8c-2.95 0-5.7.87-8.02 2.34l2.92 2.92C20.43 12.47 22.16 12 24 12c6.08 0 11 4.92 11 11v1h3c3.31 0 6 2.69 6 6 0 2.27-1.27 4.22-3.13 5.24l2.9 2.9C46.32 36.33 48 33.37 48 30c0-5.28-4.11-9.56-9.29-9.93zM6 10.55l5.5 5.48C5.12 16.3 0 21.55 0 28c0 6.63 5.37 12 12 12h23.45l4 4L42 41.46 8.55 8 6 10.55zM15.45 20l16 16H12c-4.42 0-8-3.58-8-8s3.58-8 8-8h3.45z\"/>","cloud_queue":"<path d=\"M38.71 20.07C37.35 13.19 31.28 8 24 8c-5.78 0-10.79 3.28-13.3 8.07C4.69 16.72 0 21.81 0 28c0 6.63 5.37 12 12 12h26c5.52 0 10-4.48 10-10 0-5.28-4.11-9.56-9.29-9.93zM38 36H12c-4.42 0-8-3.58-8-8s3.58-8 8-8h1.42c1.31-4.61 5.54-8 10.58-8 6.08 0 11 4.92 11 11v1h3c3.31 0 6 2.69 6 6s-2.69 6-6 6z\"/>","cloud_upload":"<path d=\"M38.71 20.07C37.35 13.19 31.28 8 24 8c-5.78 0-10.79 3.28-13.3 8.07C4.69 16.72 0 21.81 0 28c0 6.63 5.37 12 12 12h26c5.52 0 10-4.48 10-10 0-5.28-4.11-9.56-9.29-9.93zM28 26v8h-8v-8h-6l10-10 10 10h-6z\"/>","create_new_folder":"<path d=\"M40 12H24l-4-4H8c-2.21 0-3.98 1.79-3.98 4L4 36c0 2.21 1.79 4 4 4h32c2.21 0 4-1.79 4-4V16c0-2.21-1.79-4-4-4zm-2 16h-6v6h-4v-6h-6v-4h6v-6h4v6h6v4z\"/>","file_download":"<path d=\"M38 18h-8V6H18v12h-8l14 14 14-14zM10 36v4h28v-4H10z\"/>","file_upload":"<path d=\"M18 32h12V20h8L24 6 10 20h8zm-8 4h28v4H10z\"/>","folder":"<path d=\"M20 8H8c-2.21 0-3.98 1.79-3.98 4L4 36c0 2.21 1.79 4 4 4h32c2.21 0 4-1.79 4-4V16c0-2.21-1.79-4-4-4H24l-4-4z\"/>","folder_open":"<path d=\"M40 12H24l-4-4H8c-2.21 0-3.98 1.79-3.98 4L4 36c0 2.21 1.79 4 4 4h32c2.21 0 4-1.79 4-4V16c0-2.21-1.79-4-4-4zm0 24H8V16h32v20z\"/>","folder_shared":"<path d=\"M40 12H24l-4-4H8c-2.21 0-3.98 1.79-3.98 4L4 36c0 2.21 1.79 4 4 4h32c2.21 0 4-1.79 4-4V16c0-2.21-1.79-4-4-4zm-10 6c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4zm8 16H22v-2c0-2.67 5.33-4 8-4s8 1.33 8 4v2z\"/>","cast":"<path d=\"M42 6H6c-2.21 0-4 1.79-4 4v6h4v-6h36v28H28v4h14c2.21 0 4-1.79 4-4V10c0-2.21-1.79-4-4-4zM2 36v6h6c0-3.31-2.69-6-6-6zm0-8v4c5.52 0 10 4.48 10 10h4c0-7.73-6.27-14-14-14zm0-8v4c9.94 0 18 8.06 18 18h4c0-12.15-9.85-22-22-22z\"/>","cast_connected":"<path d=\"M2 36v6h6c0-3.31-2.69-6-6-6zm0-8v4c5.52 0 10 4.48 10 10h4c0-7.73-6.27-14-14-14zm36-14H10v3.27c7.92 2.56 14.17 8.81 16.73 16.73H38V14zM2 20v4c9.94 0 18 8.06 18 18h4c0-12.15-9.85-22-22-22zM42 6H6c-2.21 0-4 1.79-4 4v6h4v-6h36v28H28v4h14c2.21 0 4-1.79 4-4V10c0-2.21-1.79-4-4-4z\"/>","computer":"<path d=\"M40 36c2.21 0 3.98-1.79 3.98-4L44 12c0-2.21-1.79-4-4-4H8c-2.21 0-4 1.79-4 4v20c0 2.21 1.79 4 4 4H0v4h48v-4h-8zM8 12h32v20H8V12z\"/>","desktop_mac":"<path d=\"M42 4H6C3.79 4 2 5.79 2 8v24c0 2.21 1.79 4 4 4h14l-4 6v2h16v-2l-4-6h14c2.21 0 4-1.79 4-4V8c0-2.21-1.79-4-4-4zm0 24H6V8h36v20z\"/>","desktop_windows":"<path d=\"M42 4H6C3.79 4 2 5.79 2 8v24c0 2.21 1.79 4 4 4h14v4h-4v4h16v-4h-4v-4h14c2.21 0 4-1.79 4-4V8c0-2.21-1.79-4-4-4zm0 28H6V8h36v24z\"/>","developer_board":"<path d=\"M44 18v-4h-4v-4c0-2.2-1.8-4-4-4H8c-2.2 0-4 1.8-4 4v28c0 2.2 1.8 4 4 4h28c2.2 0 4-1.8 4-4v-4h4v-4h-4v-4h4v-4h-4v-4h4zm-8 20H8V10h28v28zM12 26h10v8H12zm12-12h8v6h-8zm-12 0h10v10H12zm12 8h8v12h-8z\"/>","devices_other":"<path d=\"M6 12h36V8H6c-2.2 0-4 1.8-4 4v24c0 2.2 1.8 4 4 4h8v-4H6V12zm20 12h-8v3.56c-1.22 1.1-2 2.67-2 4.44s.78 3.34 2 4.44V40h8v-3.56c1.22-1.1 2-2.67 2-4.44s-.78-3.34-2-4.44V24zm-4 11c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm22-19H32c-1 0-2 1-2 2v20c0 1 1 2 2 2h12c1 0 2-1 2-2V18c0-1-1-2-2-2zm-2 20h-8V20h8v16z\"/>","dock":"<path d=\"M16 46h16v-4H16v4zM32 2.02L16 2c-2.21 0-4 1.79-4 4v28c0 2.21 1.79 4 4 4h16c2.21 0 4-1.79 4-4V6c0-2.21-1.79-3.98-4-3.98zM32 30H16V10h16v20z\"/>","gamepad":"<path d=\"M30 15V4H18v11l6 6 6-6zm-15 3H4v12h11l6-6-6-6zm3 15v11h12V33l-6-6-6 6zm15-15l-6 6 6 6h11V18H33z\"/>","headset":"<path d=\"M24 2C14.06 2 6 10.06 6 20v14c0 3.31 2.69 6 6 6h6V24h-8v-4c0-7.73 6.27-14 14-14s14 6.27 14 14v4h-8v16h6c3.31 0 6-2.69 6-6V20c0-9.94-8.06-18-18-18z\"/>","headset_mic":"<path d=\"M24 2C14.06 2 6 10.06 6 20v14c0 3.31 2.69 6 6 6h6V24h-8v-4c0-7.73 6.27-14 14-14s14 6.27 14 14v4h-8v16h8v2H24v4h12c3.31 0 6-2.69 6-6V20c0-9.94-8.06-18-18-18z\"/>","keyboard":"<path d=\"M40 10H8c-2.21 0-3.98 1.79-3.98 4L4 34c0 2.21 1.79 4 4 4h32c2.21 0 4-1.79 4-4V14c0-2.21-1.79-4-4-4zm-18 6h4v4h-4v-4zm0 6h4v4h-4v-4zm-6-6h4v4h-4v-4zm0 6h4v4h-4v-4zm-2 4h-4v-4h4v4zm0-6h-4v-4h4v4zm18 14H16v-4h16v4zm0-8h-4v-4h4v4zm0-6h-4v-4h4v4zm6 6h-4v-4h4v4zm0-6h-4v-4h4v4z\"/>","keyboard_arrow_down":"<path d=\"M14.83 16.42L24 25.59l9.17-9.17L36 19.25l-12 12-12-12z\"/>","keyboard_arrow_left":"<path d=\"M30.83 32.67l-9.17-9.17 9.17-9.17L28 11.5l-12 12 12 12z\"/>","keyboard_arrow_right":"<path d=\"M17.17 32.92l9.17-9.17-9.17-9.17L20 11.75l12 12-12 12z\"/>","keyboard_arrow_up":"<path d=\"M14.83 30.83L24 21.66l9.17 9.17L36 28 24 16 12 28z\"/>","keyboard_backspace":"<path d=\"M42 22H13.66l7.17-7.17L18 12 6 24l12 12 2.83-2.83L13.66 26H42z\"/>","keyboard_capslock":"<path d=\"M24 16.83L33.17 26 36 23.17l-12-12-12 12L14.83 26 24 16.83zM12 36h24v-4H12v4z\"/>","keyboard_hide":"<path d=\"M40 6H8c-2.21 0-3.98 1.79-3.98 4L4 30c0 2.21 1.79 4 4 4h32c2.21 0 4-1.79 4-4V10c0-2.21-1.79-4-4-4zm-18 6h4v4h-4v-4zm0 6h4v4h-4v-4zm-6-6h4v4h-4v-4zm0 6h4v4h-4v-4zm-2 4h-4v-4h4v4zm0-6h-4v-4h4v4zm18 14H16v-4h16v4zm0-8h-4v-4h4v4zm0-6h-4v-4h4v4zm6 6h-4v-4h4v4zm0-6h-4v-4h4v4zM24 46l8-8H16l8 8z\"/>","keyboard_return":"<path d=\"M38 14v8H11.66l7.17-7.17L16 12 4 24l12 12 2.83-2.83L11.66 26H42V14z\"/>","keyboard_tab":"<path d=\"M23.17 14.83L30.34 22H2v4h28.34l-7.17 7.17L26 36l12-12-12-12-2.83 2.83zM40 12v24h4V12h-4z\"/>","keyboard_voice":"<path d=\"M24 30c3.31 0 5.98-2.69 5.98-6L30 12c0-3.32-2.68-6-6-6-3.31 0-6 2.68-6 6v12c0 3.31 2.69 6 6 6zm10.6-6c0 6-5.07 10.2-10.6 10.2-5.52 0-10.6-4.2-10.6-10.2H10c0 6.83 5.44 12.47 12 13.44V44h4v-6.56c6.56-.97 12-6.61 12-13.44h-3.4z\"/>","laptop":"<path d=\"M40 36c2.2 0 4-1.8 4-4V12c0-2.2-1.8-4-4-4H8c-2.2 0-4 1.8-4 4v20c0 2.2 1.8 4 4 4H0v4h48v-4h-8zM8 12h32v20H8V12z\"/>","laptop_chromebook":"<path d=\"M44 36V6H4v30H0v4h48v-4h-4zm-16 0h-8v-2h8v2zm12-6H8V10h32v20z\"/>","laptop_mac":"<path d=\"M40 36c2.21 0 3.98-1.79 3.98-4L44 10c0-2.21-1.79-4-4-4H8c-2.21 0-4 1.79-4 4v22c0 2.21 1.79 4 4 4H0c0 2.21 1.79 4 4 4h40c2.21 0 4-1.79 4-4h-8zM8 10h32v22H8V10zm16 28c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z\"/>","laptop_windows":"<path d=\"M40 36v-2c2.21 0 3.98-1.79 3.98-4L44 10c0-2.21-1.79-4-4-4H8c-2.21 0-4 1.79-4 4v20c0 2.21 1.79 4 4 4v2H0v4h48v-4h-8zM8 10h32v20H8V10z\"/>","memory":"<path d=\"M30 18H18v12h12V18zm-4 8h-4v-4h4v4zm16-4v-4h-4v-4c0-2.21-1.79-4-4-4h-4V6h-4v4h-4V6h-4v4h-4c-2.21 0-4 1.79-4 4v4H6v4h4v4H6v4h4v4c0 2.21 1.79 4 4 4h4v4h4v-4h4v4h4v-4h4c2.21 0 4-1.79 4-4v-4h4v-4h-4v-4h4zm-8 12H14V14h20v20z\"/>","mouse":"<path d=\"M26 2.14V18h14c0-8.16-6.11-14.88-14-15.86zM8 30c0 8.84 7.16 16 16 16s16-7.16 16-16v-8H8v8zM22 2.14C14.11 3.12 8 9.84 8 18h14V2.14z\"/>","phonelink":"<path d=\"M8 12h36V8H8c-2.21 0-4 1.79-4 4v22H0v6h28v-6H8V12zm38 4H34c-1.1 0-2 .9-2 2v20c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V18c0-1.1-.9-2-2-2zm-2 18h-8V20h8v14z\"/>","phonelink_off":"<path d=\"M44 12V8H13.64l4 4H44zM3.84 3.29L1.29 5.84l3.63 3.63C4.36 10.16 4 11.04 4 12v22H0v6h35.46l4.71 4.71 2.54-2.55L7.79 7.24 3.84 3.29zM8 12.55L29.46 34H8V12.55zM46 16H34c-1.1 0-2 .9-2 2v8.36l4 4V20h8v14h-4.36l6 6H46c1.1 0 2-.9 2-2V18c0-1.1-.9-2-2-2z\"/>","phone_android":"<path d=\"M32 2H16c-3.31 0-6 2.69-6 6v32c0 3.31 2.69 6 6 6h16c3.31 0 6-2.69 6-6V8c0-3.31-2.69-6-6-6zm-4 40h-8v-2h8v2zm6.5-6h-21V8h21v28z\"/>","phone_iphone":"<path d=\"M31 2H15c-2.76 0-5 2.24-5 5v34c0 2.76 2.24 5 5 5h16c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5zm-8 42c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm9-8H14V8h18v28z\"/>","power_input":"<path d=\"M5 18v4h38v-4H5zm0 12h10v-4H5v4zm14 0h10v-4H19v4zm14 0h10v-4H33v4z\"/>","router":"<path d=\"M40.33 11.81L42 10.13C39.24 7.38 35.62 6 32 6s-7.24 1.39-10 4.13l1.66 1.66C25.97 9.5 28.98 8.35 32 8.35s6.03 1.16 8.33 3.46zm-1.66 1.52c-1.84-1.84-4.25-2.76-6.67-2.76s-4.83.92-6.67 2.76l1.66 1.66c1.39-1.37 3.19-2.06 5.01-2.06 1.81 0 3.62.69 4.99 2.07l1.68-1.67zM38 26h-4v-8h-4v8H10c-2.21 0-4 1.79-4 4v8c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4v-8c0-2.21-1.79-4-4-4zM16 36h-4v-4h4v4zm7 0h-4v-4h4v4zm7 0h-4v-4h4v4z\"/>","scanner":"<path fill=\"#fff\" d=\"M16 34h22v4H16z\"/><path d=\"M39.52 20.3L8.37 9 7 12.76 35.26 23H10c-2.21 0-4 1.79-4 4v8c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4V24c0-1.67-1.03-3.1-2.48-3.7zM14 33h-4v-4h4v4zm24 0H18v-4h20v4z\"/>","security":"<path d=\"M24 2L6 10v12c0 11.11 7.67 21.47 18 24 10.33-2.53 18-12.89 18-24V10L24 2zm0 21.98h14c-1.06 8.24-6.55 15.58-14 17.87V24H10V12.6l14-6.22v17.6z\"/>","sim_card":"<path d=\"M39.98 8c0-2.21-1.77-4-3.98-4H20L8 16v24c0 2.21 1.79 4 4 4h24.02c2.21 0 3.98-1.79 3.98-4l-.02-32zM18 38h-4v-4h4v4zm16 0h-4v-4h4v4zm-16-8h-4v-8h4v8zm8 8h-4v-8h4v8zm0-12h-4v-4h4v4zm8 4h-4v-8h4v8z\"/>","smartphone":"<path d=\"M34 2.02L14 2c-2.21 0-4 1.79-4 4v36c0 2.21 1.79 4 4 4h20c2.21 0 4-1.79 4-4V6c0-2.21-1.79-3.98-4-3.98zM34 38H14V10h20v28z\"/>","speaker":"<path d=\"M34 4H14c-2.21 0-4 1.79-4 4v32c0 2.21 1.79 3.98 4 3.98L34 44c2.21 0 4-1.79 4-4V8c0-2.21-1.79-4-4-4zM24 8c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4zm0 32c-5.52 0-10-4.48-10-10s4.48-10 10-10 10 4.48 10 10-4.48 10-10 10zm0-16c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6z\"/>","speaker_group":"<path d=\"M36.4 2H19.6C17.61 2 16 3.61 16 5.6v28.8c0 1.99 1.61 3.58 3.6 3.58l16.8.02c1.99 0 3.6-1.61 3.6-3.6V5.6C40 3.61 38.39 2 36.4 2zM28 6c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4zm0 27c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm0-13c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM12 10H8v32c0 2.21 1.79 4 4 4h20v-4H12V10z\"/>","tablet":"<path d=\"M42 8H6c-2.21 0-4 1.79-4 4v24c0 2.21 1.79 4 4 4h36c2.21 0 3.98-1.79 3.98-4L46 12c0-2.21-1.79-4-4-4zm-4 28H10V12h28v24z\"/>","tablet_android":"<path d=\"M36 0H12C8.68 0 6 2.68 6 6v36c0 3.32 2.68 6 6 6h24c3.32 0 6-2.68 6-6V6c0-3.32-2.68-6-6-6zm-8 44h-8v-2h8v2zm10.5-6h-29V6h29v32z\"/>","tablet_mac":"<path d=\"M37 0H9C6.24 0 4 2.24 4 5v38c0 2.76 2.24 5 5 5h28c2.76 0 5-2.24 5-5V5c0-2.76-2.24-5-5-5zM23 46c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm15-8H8V6h30v32z\"/>","toys":"<path d=\"M24 24c0-6.1 4.9-11 11-11s11 4.9 11 11H24zm0 0c0 6.1-4.9 11-11 11S2 30.1 2 24h22zm0 0c-6.1 0-11-4.9-11-11S17.9 2 24 2v22zm0 0c6.1 0 11 4.9 11 11s-4.9 11-11 11V24z\"/>","tv":"<path d=\"M42 6H6c-2.21 0-4 1.79-4 4v24c0 2.21 1.79 4 4 4h10v4h16v-4h10c2.21 0 3.98-1.79 3.98-4L46 10c0-2.21-1.79-4-4-4zm0 28H6V10h36v24z\"/>","videogame_asset":"<path d=\"M42 12H6c-2.21 0-4 1.79-4 4v16c0 2.21 1.79 4 4 4h36c2.21 0 4-1.79 4-4V16c0-2.21-1.79-4-4-4zM22 26h-6v6h-4v-6H6v-4h6v-6h4v6h6v4zm9 4c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm8-6c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z\"/>","watch":"<path d=\"M40 24c0-5.09-2.38-9.62-6.09-12.55L32 0H16l-1.91 11.45C10.38 14.38 8 18.91 8 24s2.38 9.62 6.09 12.55L16 48h16l1.91-11.45C37.62 33.62 40 29.09 40 24zm-28 0c0-6.63 5.37-12 12-12s12 5.37 12 12-5.37 12-12 12-12-5.37-12-12z\"/>","add_a_photo":"<path d=\"M6 8V2h4v6h6v4h-6v6H6v-6H0V8h6zm6 12v-6h6V8h14l3.66 4H42c2.2 0 4 1.8 4 4v24c0 2.2-1.8 4-4 4H10c-2.2 0-4-1.8-4-4V20h6zm14 18c5.52 0 10-4.48 10-10s-4.48-10-10-10-10 4.48-10 10 4.48 10 10 10zm-6.4-10c0 3.54 2.86 6.4 6.4 6.4s6.4-2.86 6.4-6.4-2.86-6.4-6.4-6.4-6.4 2.86-6.4 6.4z\"/>","add_to_photos":"<path d=\"M8 12H4v28c0 2.21 1.79 4 4 4h28v-4H8V12zm32-8H16c-2.21 0-4 1.79-4 4v24c0 2.21 1.79 4 4 4h24c2.21 0 4-1.79 4-4V8c0-2.21-1.79-4-4-4zm-2 18h-8v8h-4v-8h-8v-4h8v-8h4v8h8v4z\"/>","adjust":"<path d=\"M24 4C12.97 4 4 12.97 4 24s8.97 20 20 20 20-8.97 20-20S35.03 4 24 4zm0 36c-8.82 0-16-7.18-16-16S15.18 8 24 8s16 7.18 16 16-7.18 16-16 16zm6-16c0 3.31-2.69 6-6 6s-6-2.69-6-6 2.69-6 6-6 6 2.69 6 6z\"/>","assistant":"<path d=\"M38 4H10C7.79 4 6 5.79 6 8v28c0 2.21 1.79 4 4 4h8l6 6 6-6h8c2.21 0 4-1.79 4-4V8c0-2.21-1.79-4-4-4zM27.75 25.75L24 34l-3.75-8.25L12 22l8.25-3.75L24 10l3.75 8.25L36 22l-8.25 3.75z\"/>","assistant_photo":"<path d=\"M28.8 12L28 8H10v34h4V28h11.2l.8 4h14V12z\"/>","audiotrack":"<path d=\"M24 6v18.55c-.94-.33-1.94-.55-3-.55-4.97 0-9 4.03-9 9s4.03 9 9 9c4.63 0 8.4-3.51 8.9-8h.1V12h8V6H24z\"/>","blur_circular":"<path d=\"M20 18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6-7c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm6 14c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm-6-6c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm6-12c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm8 3c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-3c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm6 12c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm0-8c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zM24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm0 36c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16zm4-7c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm0-7c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z\"/>","blur_linear":"<path d=\"M10 35c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3zm8-9c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0-8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM6 42h36v-4H6v4zm4-23c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3zm0 8c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3zm8 7c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm16-1c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zM6 6v4h36V6H6zm28 11c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm0 8c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm-8-7c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z\"/>","blur_off":"<path d=\"M28 14c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-.4 8.96c.13.02.26.04.4.04 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .14.02.27.04.41.18 1.32 1.23 2.37 2.56 2.55zM28 7c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm-8 0c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm22 14c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm-22-7c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm16 16c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0-8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0-8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-8 27c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zM5 10.55l7.57 7.57c-.19-.06-.37-.12-.57-.12-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2c0-.2-.06-.38-.11-.57l5.62 5.62C18.08 25.29 17 26.51 17 28c0 1.66 1.34 3 3 3 1.49 0 2.71-1.08 2.95-2.5l5.62 5.62c-.18-.06-.37-.12-.57-.12-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2c0-.2-.06-.38-.11-.57L37.45 43 40 40.45 7.55 8 5 10.55zM20 34c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm22-7c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm-30-1c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6-7c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm14 22c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm-8-7c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6-7c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1z\"/>","blur_on":"<path d=\"M12 26c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-16c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 1c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm6-9c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm30 11c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm-14-7c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0-7c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zM6 27c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm14 14c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm0-34c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm0 7c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 11c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm16 1c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-16c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 17c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm-14 7c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 7c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm-8-24c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm0 17c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm8-9c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z\"/>","brightness_1":"<circle cx=\"24\" cy=\"24\" r=\"20\"/>","brightness_2":"<path d=\"M20 4c-3.65 0-7.06.99-10 2.7 5.97 3.46 10 9.9 10 17.3s-4.03 13.84-10 17.3c2.94 1.71 6.35 2.7 10 2.7 11.05 0 20-8.95 20-20S31.05 4 20 4z\"/>","brightness_3":"<path d=\"M18 4c-2.09 0-4.11.32-6 .92C20.11 7.47 26 15.05 26 24c0 8.95-5.89 16.53-14 19.08 1.89.59 3.91.92 6 .92 11.05 0 20-8.95 20-20S29.05 4 18 4z\"/>","brightness_4":"<path d=\"M40 17.37V8h-9.37L24 1.37 17.37 8H8v9.37L1.37 24 8 30.63V40h9.37L24 46.63 30.63 40H40v-9.37L46.63 24 40 17.37zM24 36c-1.79 0-3.48-.4-5-1.1 4.13-1.9 7-6.06 7-10.9s-2.87-9-7-10.9c1.52-.7 3.21-1.1 5-1.1 6.63 0 12 5.37 12 12s-5.37 12-12 12z\"/>","brightness_5":"<path d=\"M40 30.63L46.63 24 40 17.37V8h-9.37L24 1.37 17.37 8H8v9.37L1.37 24 8 30.63V40h9.37L24 46.63 30.63 40H40v-9.37zM24 36c-6.63 0-12-5.37-12-12s5.37-12 12-12 12 5.37 12 12-5.37 12-12 12z\"/>","brightness_6":"<path d=\"M40 30.63L46.63 24 40 17.37V8h-9.37L24 1.37 17.37 8H8v9.37L1.37 24 8 30.63V40h9.37L24 46.63 30.63 40H40v-9.37zM24 36V12c6.63 0 12 5.37 12 12s-5.37 12-12 12z\"/>","brightness_7":"<path d=\"M40 17.37V8h-9.37L24 1.37 17.37 8H8v9.37L1.37 24 8 30.63V40h9.37L24 46.63 30.63 40H40v-9.37L46.63 24 40 17.37zM24 36c-6.63 0-12-5.37-12-12s5.37-12 12-12 12 5.37 12 12-5.37 12-12 12zm0-20c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8z\"/>","broken_image":"<path d=\"M42 10v13.2l-6-6-8 8-8-8-8 8-6-6V10c0-2.2 1.8-4 4-4h28c2.2 0 4 1.8 4 4zm-6 12.8l6 6V38c0 2.2-1.8 4-4 4H10c-2.2 0-4-1.8-4-4V24.8l6 6 8-8 8 8 8-8z\"/>","brush":"<path d=\"M14 28c-3.31 0-6 2.69-6 6 0 2.62-2.31 4-4 4 1.84 2.44 4.99 4 8 4 4.42 0 8-3.58 8-8 0-3.31-2.69-6-6-6zM41.41 9.26l-2.67-2.67c-.78-.78-2.05-.78-2.83 0L18 24.5l5.5 5.5 17.91-17.91c.79-.79.79-2.05 0-2.83z\"/>","burst_mode":"<path d=\"M2 10h4v28H2zm8 0h4v28h-4zm34 0H20c-1.1 0-2 .9-2 2v24c0 1.1.9 2 2 2h24c1.1 0 2-.9 2-2V12c0-1.1-.9-2-2-2zM22 34l5-6.3 3.57 4.3 5-6.44L42 34H22z\"/>","camera":"<path d=\"M18.8 21l9.53-16.51C26.94 4.18 25.49 4 24 4c-4.8 0-9.19 1.69-12.64 4.51l7.33 12.69.11-.2zm24.28-3c-1.84-5.85-6.3-10.52-11.99-12.68L23.77 18h19.31zm.52 2H28.62l.58 1 9.53 16.5C41.99 33.94 44 29.21 44 24c0-1.37-.14-2.71-.4-4zm-26.53 4l-7.8-13.5C6.01 14.06 4 18.79 4 24c0 1.37.14 2.71.4 4h14.98l-2.31-4zM4.92 30c1.84 5.85 6.3 10.52 11.99 12.68L24.23 30H4.92zm22.54 0l-7.8 13.51c1.4.31 2.85.49 4.34.49 4.8 0 9.19-1.69 12.64-4.51L29.31 26.8 27.46 30z\"/>","camera_alt":"<circle cx=\"24\" cy=\"24\" r=\"6.4\"/><path d=\"M18 4l-3.66 4H8c-2.21 0-4 1.79-4 4v24c0 2.21 1.79 4 4 4h32c2.21 0 4-1.79 4-4V12c0-2.21-1.79-4-4-4h-6.34L30 4H18zm6 30c-5.52 0-10-4.48-10-10s4.48-10 10-10 10 4.48 10 10-4.48 10-10 10z\"/>","camera_front":"<path d=\"M20 40H10v4h10v4l6-6-6-6v4zm8 0v4h10v-4H28zm-4-24c2.21 0 4-1.79 4-4s-1.79-4-4-4-3.99 1.79-3.99 4c.01 2.21 1.78 4 3.99 4zM34 0H14c-2.21 0-4 1.79-4 4v28c0 2.21 1.79 4 4 4h20c2.21 0 4-1.79 4-4V4c0-2.21-1.79-4-4-4zM14 4h20v21c0-3.33-6.67-5-10-5s-10 1.67-10 5V4z\"/>","camera_rear":"<path d=\"M20 40H10v4h10v4l6-6-6-6v4zm8 0v4h10v-4H28zm6-40H14c-2.21 0-4 1.79-4 4v28c0 2.21 1.79 4 4 4h20c2.21 0 4-1.79 4-4V4c0-2.21-1.79-4-4-4zM23.99 12C21.78 12 20 10.21 20 8s1.78-4 3.99-4 4 1.79 4 4-1.79 4-4 4z\"/>","camera_roll":"<path d=\"M28 10c0-2.21-1.79-4-4-4h-2V4c0-1.1-.9-2-2-2h-8c-1.1 0-2 .9-2 2v2H8c-2.21 0-4 1.79-4 4v30c0 2.21 1.79 4 4 4h16c2.21 0 4-1.79 4-4h16V10H28zm-4 26h-4v-4h4v4zm0-18h-4v-4h4v4zm8 18h-4v-4h4v4zm0-18h-4v-4h4v4zm8 18h-4v-4h4v4zm0-18h-4v-4h4v4z\"/>","center_focus_strong":"<path d=\"M24 16c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zM10 30H6v8c0 2.21 1.79 4 4 4h8v-4h-8v-8zm0-20h8V6h-8c-2.21 0-4 1.79-4 4v8h4v-8zm28-4h-8v4h8v8h4v-8c0-2.21-1.79-4-4-4zm0 32h-8v4h8c2.21 0 4-1.79 4-4v-8h-4v8z\"/>","center_focus_weak":"<path d=\"M10 30H6v8c0 2.21 1.79 4 4 4h8v-4h-8v-8zm0-20h8V6h-8c-2.21 0-4 1.79-4 4v8h4v-8zm28-4h-8v4h8v8h4v-8c0-2.21-1.79-4-4-4zm0 32h-8v4h8c2.21 0 4-1.79 4-4v-8h-4v8zM24 16c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 12c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z\"/>","collections":"<path d=\"M44 32V8c0-2.21-1.79-4-4-4H16c-2.21 0-4 1.79-4 4v24c0 2.21 1.79 4 4 4h24c2.21 0 4-1.79 4-4zm-22-8l4.06 5.42L32 22l8 10H16l6-8zM4 12v28c0 2.21 1.79 4 4 4h28v-4H8V12H4z\"/>","colorize":"<path d=\"M41.41 11.26l-4.67-4.67c-.78-.78-2.05-.78-2.83 0l-6.25 6.25L23.83 9 21 11.83l2.84 2.84L6 32.5V42h9.5l17.84-17.84L36.17 27 39 24.17l-3.84-3.84 6.25-6.25c.79-.78.79-2.04 0-2.82zM13.84 38L10 34.16l16.13-16.13 3.84 3.84L13.84 38z\"/>","color_lens":"<path d=\"M24 6C14.06 6 6 14.06 6 24s8.06 18 18 18c1.66 0 3-1.34 3-3 0-.78-.29-1.48-.78-2.01-.47-.53-.75-1.22-.75-1.99 0-1.66 1.34-3 3-3H32c5.52 0 10-4.48 10-10 0-8.84-8.06-16-18-16zM13 24c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm6-8c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm10 0c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm6 8c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z\"/>","compare":"<path d=\"M20 6H10c-2.21 0-4 1.79-4 4v28c0 2.21 1.79 4 4 4h10v4h4V2h-4v4zm0 30H10l10-12v12zM38 6H28v4h10v26L28 24v18h10c2.21 0 4-1.79 4-4V10c0-2.21-1.79-4-4-4z\"/>","control_point":"<path d=\"M26 14h-4v8h-8v4h8v8h4v-8h8v-4h-8v-8zM24 4C12.97 4 4 12.97 4 24s8.97 20 20 20 20-8.97 20-20S35.03 4 24 4zm0 36c-8.82 0-16-7.18-16-16S15.18 8 24 8s16 7.18 16 16-7.18 16-16 16z\"/>","control_point_duplicate":"<path d=\"M32 16h-4v6h-6v4h6v6h4v-6h6v-4h-6zM4 24c0-5.58 3.29-10.39 8.02-12.64V7.05C5.03 9.51 0 16.17 0 24s5.03 14.49 12.02 16.95v-4.31C7.29 34.39 4 29.58 4 24zM30 6c-9.93 0-18 8.07-18 18s8.07 18 18 18 18-8.07 18-18S39.93 6 30 6zm0 32c-7.72 0-14-6.28-14-14s6.28-14 14-14 14 6.28 14 14-6.28 14-14 14z\"/>","crop_16_9":"<path d=\"M38 12H10c-2.21 0-4 1.79-4 4v16c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4V16c0-2.21-1.79-4-4-4zm0 20H10V16h28v16z\"/>","crop_3_2":"<path d=\"M38 8H10c-2.21 0-4 1.79-4 4v24c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4V12c0-2.21-1.79-4-4-4zm0 28H10V12h28v24z\"/>","crop":"<path d=\"M34 30h4V14c0-2.21-1.79-4-4-4H18v4h16v16zm-20 4V2h-4v8H2v4h8v20c0 2.21 1.79 4 4 4h20v8h4v-8h8v-4H14z\"/>","crop_5_4":"<path d=\"M38 10H10c-2.21 0-4 1.79-4 4v20c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4V14c0-2.21-1.79-4-4-4zm0 24H10V14h28v20z\"/>","crop_7_5":"<path d=\"M38 14H10c-2.21 0-4 1.79-4 4v12c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4V18c0-2.21-1.79-4-4-4zm0 16H10V18h28v12z\"/>","crop_din":"<path d=\"M38 6H10c-2.21 0-4 1.79-4 4v28c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4V10c0-2.21-1.79-4-4-4zm0 32H10V10h28v28z\"/>","crop_free":"<path d=\"M6 10v8h4v-8h8V6h-8c-2.21 0-4 1.79-4 4zm4 20H6v8c0 2.21 1.79 4 4 4h8v-4h-8v-8zm28 8h-8v4h8c2.21 0 4-1.79 4-4v-8h-4v8zm0-32h-8v4h8v8h4v-8c0-2.21-1.79-4-4-4z\"/>","crop_landscape":"<path d=\"M38 10H10c-2.21 0-4 1.79-4 4v20c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4V14c0-2.21-1.79-4-4-4zm0 24H10V14h28v20z\"/>","crop_original":"<path d=\"M38 6H10c-2.21 0-4 1.79-4 4v28c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4V10c0-2.21-1.79-4-4-4zm0 32H10V10h28v28zM27.93 24.57l-5.5 7.08-3.93-4.72L13 34h22l-7.07-9.43z\"/>","crop_portrait":"<path d=\"M34 6H14c-2.21 0-4 1.79-4 4v28c0 2.21 1.79 4 4 4h20c2.21 0 4-1.79 4-4V10c0-2.21-1.79-4-4-4zm0 32H14V10h20v28z\"/>","crop_rotate":"<path d=\"M14.93 42.97C8.4 39.87 3.71 33.52 3 26H0c1.02 12.32 11.32 22 23.9 22 .45 0 .88-.04 1.32-.07L17.6 40.3l-2.67 2.67zM24.1 0c-.45 0-.88.04-1.32.07L30.4 7.7l2.66-2.66C39.6 8.13 44.29 14.48 45 22h3C46.98 9.68 36.68 0 24.1 0zM32 28h4V16c0-2.21-1.79-4-4-4H20v4h12v12zm-16 4V8h-4v4H8v4h4v16c0 2.21 1.79 4 4 4h16v4h4v-4h4v-4H16z\"/>","crop_square":"<path d=\"M36 8H12c-2.21 0-4 1.79-4 4v24c0 2.21 1.79 4 4 4h24c2.21 0 4-1.79 4-4V12c0-2.21-1.79-4-4-4zm0 28H12V12h24v24z\"/>","dehaze":"<path d=\"M4 31v4h40v-4H4zm0-10v4h40v-4H4zm0-10v4h40v-4H4z\"/>","details":"<path d=\"M6 8l18 32L42 8H6zm6.75 4h22.5L24 32 12.75 12z\"/>","edit":"<path d=\"M6 34.5V42h7.5l22.13-22.13-7.5-7.5L6 34.5zm35.41-20.41c.78-.78.78-2.05 0-2.83l-4.67-4.67c-.78-.78-2.05-.78-2.83 0l-3.66 3.66 7.5 7.5 3.66-3.66z\"/>","exposure":"<path d=\"M30 34v4h4v-4h4v-4h-4v-4h-4v4h-4v4h4zM40 4H8C5.79 4 4 5.79 4 8v32c0 2.21 1.79 4 4 4h32c2.21 0 4-1.79 4-4V8c0-2.21-1.79-4-4-4zm-30 6h12v4H10v-4zm30 30H8L40 8v32z\"/>","exposure_neg_1":"<path d=\"M8 22v4h16v-4H8zm30 14h-4V14.75l-6 2.05v-3.4l9.4-3.4h.6v26z\"/>","exposure_neg_2":"<path d=\"M30.09 32.58l5.73-6.13c.75-.79 1.44-1.57 2.08-2.35.63-.78 1.18-1.56 1.64-2.33.46-.78.82-1.55 1.07-2.33.26-.78.39-1.57.39-2.37 0-1.07-.18-2.04-.54-2.92-.36-.87-.88-1.62-1.57-2.23-.69-.61-1.53-1.08-2.53-1.42-1-.33-2.14-.5-3.42-.5-1.38 0-2.62.21-3.7.64-1.08.43-1.99 1.01-2.73 1.75s-1.3 1.61-1.68 2.6c-.36.94-.54 1.95-.56 3.01h4.28c.01-.62.09-1.21.26-1.74.18-.58.45-1.08.81-1.5.36-.42.81-.74 1.35-.98.55-.23 1.19-.35 1.93-.35.61 0 1.15.1 1.62.31.47.21.87.49 1.19.85.32.36.57.8.74 1.29.17.5.25 1.04.25 1.63 0 .43-.06.87-.17 1.3-.11.43-.3.9-.58 1.4-.28.5-.65 1.05-1.11 1.66-.46.6-1.05 1.29-1.75 2.07l-8.35 9.11V36H42v-3.42H30.09zM4 22v4h16v-4H4z\"/>","exposure_plus_1":"<path d=\"M20 14h-4v8H8v4h8v8h4v-8h8v-4h-8v-8zm20 22h-4V14.75l-6 2.05v-3.4l9.4-3.4h.6v26z\"/>","exposure_plus_2":"<path d=\"M32.09 32.58l5.73-6.13c.75-.79 1.44-1.57 2.08-2.35.63-.78 1.18-1.56 1.64-2.33.46-.78.82-1.55 1.07-2.33.26-.78.39-1.57.39-2.37 0-1.07-.18-2.04-.54-2.92-.36-.87-.88-1.62-1.57-2.23-.69-.61-1.53-1.08-2.53-1.42-1-.33-2.14-.5-3.42-.5-1.38 0-2.62.21-3.7.64-1.08.43-1.99 1.01-2.73 1.75s-1.3 1.61-1.68 2.6c-.36.94-.54 1.95-.56 3.01h4.28c.01-.62.09-1.21.26-1.74.18-.58.45-1.08.81-1.5.36-.42.81-.74 1.35-.98.55-.23 1.19-.35 1.93-.35.61 0 1.15.1 1.62.31.47.21.87.49 1.19.85.32.36.57.8.74 1.29.17.5.25 1.04.25 1.63 0 .43-.06.87-.17 1.3-.11.43-.3.9-.58 1.4-.28.5-.65 1.05-1.11 1.66-.46.6-1.05 1.29-1.75 2.07l-8.35 9.11V36H44v-3.42H32.09zM16 14h-4v8H4v4h8v8h4v-8h8v-4h-8v-8z\"/>","exposure_zero":"<path d=\"M32.28 25c0 2-.2 3.7-.59 5.1-.39 1.4-.95 2.53-1.67 3.41-.72.87-1.59 1.51-2.6 1.9-1.01.39-2.14.59-3.39.59-1.24 0-2.37-.2-3.39-.59-1.02-.39-1.89-1.03-2.62-1.9-.73-.87-1.3-2.01-1.69-3.41-.4-1.4-.6-3.1-.6-5.1v-4.08c0-2 .2-3.7.59-5.09.39-1.39.95-2.52 1.68-3.38.72-.86 1.59-1.49 2.61-1.87 1.02-.38 2.15-.57 3.39-.57 1.25 0 2.39.19 3.41.57 1.02.38 1.89 1.01 2.62 1.87.72.86 1.28 1.99 1.68 3.38.39 1.39.59 3.09.59 5.09V25zm-4.22-4.73c0-1.29-.09-2.37-.27-3.24-.18-.87-.44-1.58-.79-2.12-.35-.54-.77-.93-1.28-1.16-.5-.24-1.08-.36-1.73-.36-.65 0-1.23.12-1.73.36-.51.24-.93.63-1.28 1.16-.35.54-.61 1.25-.79 2.12-.18.87-.27 1.96-.27 3.24v5.34c0 1.27.09 2.36.28 3.25.19.89.45 1.62.8 2.17.35.56.78.96 1.29 1.22.51.25 1.09.38 1.74.38.66 0 1.24-.13 1.74-.38s.92-.66 1.26-1.22c.34-.56.6-1.28.77-2.17.17-.89.26-1.98.26-3.25v-5.34z\"/>","filter_1":"<path d=\"M6 10H2v32c0 2.21 1.79 4 4 4h32v-4H6V10zm22 20h4V10h-8v4h4v16zM42 2H14c-2.21 0-4 1.79-4 4v28c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4V6c0-2.21-1.79-4-4-4zm0 32H14V6h28v28z\"/>","filter_2":"<path d=\"M6 10H2v32c0 2.21 1.79 4 4 4h32v-4H6V10zm36-8H14c-2.21 0-4 1.79-4 4v28c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4V6c0-2.21-1.79-4-4-4zm0 32H14V6h28v28zm-8-8h-8v-4h4c2.21 0 4-1.79 4-4v-4c0-2.21-1.79-4-4-4h-8v4h8v4h-4c-2.21 0-4 1.79-4 4v8h12v-4z\"/>","filter_3":"<path d=\"M42 2H14c-2.21 0-4 1.79-4 4v28c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4V6c0-2.21-1.79-4-4-4zm0 32H14V6h28v28zM6 10H2v32c0 2.21 1.79 4 4 4h32v-4H6V10zm28 16v-3c0-1.66-1.34-3-3-3 1.66 0 3-1.34 3-3v-3c0-2.21-1.79-4-4-4h-8v4h8v4h-4v4h4v4h-8v4h8c2.21 0 4-1.79 4-4z\"/>","filter":"<path d=\"M31.93 20.57l-5.5 7.08-3.93-4.72L17 30h22l-7.07-9.43zM6 10H2v32c0 2.21 1.79 4 4 4h32v-4H6V10zm36-8H14c-2.21 0-4 1.79-4 4v28c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4V6c0-2.21-1.79-4-4-4zm0 32H14V6h28v28z\"/>","filter_4":"<path d=\"M6 10H2v32c0 2.21 1.79 4 4 4h32v-4H6V10zm24 20h4V10h-4v8h-4v-8h-4v12h8v8zM42 2H14c-2.21 0-4 1.79-4 4v28c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4V6c0-2.21-1.79-4-4-4zm0 32H14V6h28v28z\"/>","filter_5":"<path d=\"M42 2H14c-2.21 0-4 1.79-4 4v28c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4V6c0-2.21-1.79-4-4-4zm0 32H14V6h28v28zM6 10H2v32c0 2.21 1.79 4 4 4h32v-4H6V10zm28 16v-4c0-2.21-1.79-4-4-4h-4v-4h8v-4H22v12h8v4h-8v4h8c2.21 0 4-1.79 4-4z\"/>","filter_6":"<path d=\"M6 10H2v32c0 2.21 1.79 4 4 4h32v-4H6V10zm36-8H14c-2.21 0-4 1.79-4 4v28c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4V6c0-2.21-1.79-4-4-4zm0 32H14V6h28v28zm-16-4h4c2.21 0 4-1.79 4-4v-4c0-2.21-1.79-4-4-4h-4v-4h8v-4h-8c-2.21 0-4 1.79-4 4v12c0 2.21 1.79 4 4 4zm0-8h4v4h-4v-4z\"/>","filter_7":"<path d=\"M6 10H2v32c0 2.21 1.79 4 4 4h32v-4H6V10zm36-8H14c-2.21 0-4 1.79-4 4v28c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4V6c0-2.21-1.79-4-4-4zm0 32H14V6h28v28zm-16-4l8-16v-4H22v4h8l-8 16h4z\"/>","filter_8":"<path d=\"M6 10H2v32c0 2.21 1.79 4 4 4h32v-4H6V10zm36-8H14c-2.21 0-4 1.79-4 4v28c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4V6c0-2.21-1.79-4-4-4zm0 32H14V6h28v28zm-16-4h4c2.21 0 4-1.79 4-4v-3c0-1.66-1.34-3-3-3 1.66 0 3-1.34 3-3v-3c0-2.21-1.79-4-4-4h-4c-2.21 0-4 1.79-4 4v3c0 1.66 1.34 3 3 3-1.66 0-3 1.34-3 3v3c0 2.21 1.79 4 4 4zm0-16h4v4h-4v-4zm0 8h4v4h-4v-4z\"/>","filter_9":"<path d=\"M6 10H2v32c0 2.21 1.79 4 4 4h32v-4H6V10zm36-8H14c-2.21 0-4 1.79-4 4v28c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4V6c0-2.21-1.79-4-4-4zm0 32H14V6h28v28zM30 10h-4c-2.21 0-4 1.79-4 4v4c0 2.21 1.79 4 4 4h4v4h-8v4h8c2.21 0 4-1.79 4-4V14c0-2.21-1.79-4-4-4zm0 8h-4v-4h4v4z\"/>","filter_9_plus":"<path d=\"M6 10H2v32c0 2.21 1.79 4 4 4h32v-4H6V10zm22 14v-8c0-2.21-1.79-4-4-4h-2c-2.21 0-4 1.79-4 4v2c0 2.21 1.79 4 4 4h2v2h-6v4h6c2.21 0 4-1.79 4-4zm-6-6v-2h2v2h-2zM42 2H14c-2.21 0-4 1.79-4 4v28c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4V6c0-2.21-1.79-4-4-4zm0 16h-4v-4h-4v4h-4v4h4v4h4v-4h4v12H14V6h28v12z\"/>","filter_b_and_w":"<path d=\"M38 6H10c-2.21 0-4 1.79-4 4v28c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4V10c0-2.21-1.79-4-4-4zm0 32L24 22v16H10l14-16V10h14v28z\"/>","filter_center_focus":"<path d=\"M10 30H6v8c0 2.21 1.79 4 4 4h8v-4h-8v-8zm0-20h8V6h-8c-2.21 0-4 1.79-4 4v8h4v-8zm28-4h-8v4h8v8h4v-8c0-2.21-1.79-4-4-4zm0 32h-8v4h8c2.21 0 4-1.79 4-4v-8h-4v8zM24 18c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6z\"/>","filter_drama":"<path d=\"M38.71 20.07C37.35 13.19 31.28 8 24 8c-5.78 0-10.78 3.28-13.29 8.07C4.69 16.71 0 21.81 0 28c0 6.63 5.37 12 12 12h26c5.52 0 10-4.48 10-10 0-5.28-4.1-9.56-9.29-9.93zM38 36H12c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8h4c0-5.52-3.73-10.15-8.8-11.55C17.21 13.76 20.4 12 24 12c6.07 0 11 4.93 11 11v1h3c3.31 0 6 2.69 6 6s-2.69 6-6 6z\"/>","filter_frames":"<path d=\"M40 8h-8l-8-8-8 8H8c-2.21 0-4 1.79-4 4v28c0 2.21 1.79 4 4 4h32c2.21 0 4-1.79 4-4V12c0-2.21-1.79-4-4-4zm0 32H8V12h9.03l7.04-7 6.96 7H40v28zm-4-24H12v20h24\"/>","filter_hdr":"<path d=\"M28 12l-7.5 10 5.7 7.6L23 32c-3.38-4.5-9-12-9-12L2 36h44L28 12z\"/>","filter_none":"<path d=\"M6 10H2v32c0 2.21 1.79 4 4 4h32v-4H6V10zm36-8H14c-2.21 0-4 1.79-4 4v28c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4V6c0-2.21-1.79-4-4-4zm0 32H14V6h28v28z\"/>","filter_tilt_shift":"<path d=\"M22 8.14V4.1c-4.02.4-7.68 2-10.65 4.42l2.85 2.85c2.22-1.71 4.88-2.87 7.8-3.23zm14.65.38C33.69 6.1 30.02 4.5 26 4.1v4.04c2.92.37 5.58 1.52 7.8 3.24l2.85-2.86zM39.86 22h4.04c-.4-4.02-2-7.68-4.42-10.65l-2.85 2.85c1.71 2.22 2.87 4.88 3.23 7.8zm-28.48-7.8l-2.85-2.85C6.1 14.32 4.5 17.98 4.1 22h4.04c.37-2.92 1.52-5.58 3.24-7.8zM8.14 26H4.1c.4 4.02 2 7.68 4.42 10.65l2.85-2.85c-1.71-2.22-2.86-4.89-3.23-7.8zM30 24c0-3.31-2.69-6-6-6s-6 2.69-6 6 2.69 6 6 6 6-2.69 6-6zm6.62 9.79l2.85 2.85C41.9 33.68 43.5 30.02 43.9 26h-4.04c-.36 2.91-1.52 5.58-3.24 7.79zM26 39.86v4.04c4.02-.4 7.68-2 10.65-4.42l-2.85-2.85c-2.22 1.71-4.88 2.86-7.8 3.23zm-14.65-.38C14.32 41.9 17.98 43.5 22 43.9v-4.04c-2.92-.37-5.58-1.52-7.8-3.24l-2.85 2.86z\"/>","filter_vintage":"<path d=\"M37.39 24.8c-.56-.32-1.14-.58-1.72-.8.58-.22 1.16-.48 1.72-.8 3.84-2.22 5.98-6.25 5.99-10.39-3.59-2.06-8.15-2.22-11.99 0-.56.32-1.07.69-1.56 1.09.1-.63.17-1.25.17-1.9 0-4.44-2.42-8.31-6-10.38-3.58 2.07-6 5.94-6 10.38 0 .65.06 1.27.16 1.89-.49-.39-1-.76-1.56-1.09-3.84-2.22-8.4-2.06-11.99 0 .01 4.14 2.15 8.17 5.99 10.39.56.32 1.14.58 1.72.8-.58.22-1.16.48-1.72.8-3.84 2.22-5.98 6.25-5.99 10.39 3.59 2.06 8.15 2.22 11.99 0 .56-.32 1.07-.69 1.56-1.09-.09.64-.16 1.26-.16 1.91 0 4.44 2.42 8.31 6 10.38 3.58-2.08 6-5.94 6-10.38 0-.65-.07-1.27-.16-1.89.49.39 1 .76 1.56 1.09 3.84 2.22 8.4 2.06 11.99 0-.01-4.15-2.15-8.18-6-10.4zM24 32c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z\"/>","flare":"<path d=\"M14 22H2v4h12v-4zm4.34-6.49l-4.24-4.24-2.83 2.83 4.24 4.24 2.83-2.83zM26 2h-4v12h4V2zm10.73 12.1l-2.83-2.83-4.24 4.24 2.83 2.83 4.24-4.24zM34 22v4h12v-4H34zm-10-4c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm5.66 14.49l4.24 4.24 2.83-2.83-4.24-4.24-2.83 2.83zM11.27 33.9l2.83 2.83 4.24-4.24-2.83-2.83-4.24 4.24zM22 46h4V34h-4v12z\"/>","flash_auto":"<path d=\"M6 4v24h6v18l14-24h-8l8-18H6zm32 0h-4l-6.4 18h3.8l1.4-4h6.4l1.4 4h3.8L38 4zm-4.3 11.3L36 8l2.3 7.3h-4.6z\"/>","flash_off":"<path d=\"M6.55 6L4 8.55l10 10V26h6v18l7.17-12.29L35.45 40 38 37.46 6.55 6zM34 20h-8l8-16H14v4.36l16.92 16.92L34 20z\"/>","flash_on":"<path d=\"M14 4v22h6v18l14-24h-8l8-16z\"/>","flip":"<path d=\"M30 42h4v-4h-4v4zm8-24h4v-4h-4v4zM6 10v28c0 2.21 1.79 4 4 4h8v-4h-8V10h8V6h-8c-2.21 0-4 1.79-4 4zm32-4v4h4c0-2.21-1.79-4-4-4zM22 46h4V2h-4v44zm16-12h4v-4h-4v4zm-8-24h4V6h-4v4zm8 16h4v-4h-4v4zm0 16c2.21 0 4-1.79 4-4h-4v4z\"/>","gradient":"<path d=\"M22 18h4v4h-4zm-4 4h4v4h-4zm8 0h4v4h-4zm4-4h4v4h-4zm-16 0h4v4h-4zM38 6H10c-2.2 0-4 1.8-4 4v28c0 2.2 1.8 4 4 4h28c2.2 0 4-1.8 4-4V10c0-2.2-1.8-4-4-4zM18 36h-4v-4h4v4zm8 0h-4v-4h4v4zm8 0h-4v-4h4v4zm4-14h-4v4h4v4h-4v-4h-4v4h-4v-4h-4v4h-4v-4h-4v4h-4v-4h4v-4h-4V10h28v12z\"/>","grain":"<path d=\"M20 24c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm-8-8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 16c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm24-16c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm-8 16c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm8-8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm-8-8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm-8-8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z\"/>","grid_off":"<path d=\"M16 8v2.91l4 4V8h8v8h-6.91l4 4H28v2.91l4 4V20h8v8h-6.91l4 4H40v2.91l4 4V8c0-2.21-1.79-4-4-4H9.09l4 4H16zm16 0h8v8h-8V8zM2.55 2.55L0 5.09l4 4V40c0 2.21 1.79 4 4 4h30.91l4 4 2.54-2.55-42.9-42.9zM20 25.09L22.91 28H20v-2.91zm-12-12L10.91 16H8v-2.91zM16 40H8v-8h8v8zm0-12H8v-8h6.91L16 21.09V28zm12 12h-8v-8h6.91L28 33.09V40zm4 0v-2.91L34.91 40H32z\"/>","grid_on":"<path d=\"M40 4H8C5.79 4 4 5.79 4 8v32c0 2.21 1.79 4 4 4h32c2.21 0 4-1.79 4-4V8c0-2.21-1.79-4-4-4zM16 40H8v-8h8v8zm0-12H8v-8h8v8zm0-12H8V8h8v8zm12 24h-8v-8h8v8zm0-12h-8v-8h8v8zm0-12h-8V8h8v8zm12 24h-8v-8h8v8zm0-12h-8v-8h8v8zm0-12h-8V8h8v8z\"/>","hdr_off":"<path d=\"M35 30v-4h2.3l1.7 4h3l-1.8-4.2c1.1-.5 1.8-1.5 1.8-2.8v-2c0-1.7-1.3-3-3-3h-7v9.8l2.2 2.2h.8zm0-9h4v2h-4v-2zm-9 0v.8l3 3V21c0-1.7-1.3-3-3-3h-3.8l3 3h.8zm-7-2L4.9 4.9 2.8 7l11 11H13v4H9v-4H6v12h3v-5h4v5h3v-9.8l3 3V30h6.8L41 45.2l2.1-2.1L19 19z\"/>","hdr_on":"<path d=\"M42 23v-2c0-1.7-1.3-3-3-3h-7v12h3v-4h2.3l1.7 4h3l-1.8-4.2c1-.5 1.8-1.6 1.8-2.8zm-3 0h-4v-2h4v2zm-26-1H9v-4H6v12h3v-5h4v5h3V18h-3v4zm13-4h-7v12h7c1.7 0 3-1.3 3-3v-6c0-1.7-1.3-3-3-3zm0 9h-4v-6h4v6z\"/>","hdr_strong":"<path d=\"M34 12c-6.63 0-12 5.37-12 12s5.37 12 12 12 12-5.37 12-12-5.37-12-12-12zm-24 4c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 12c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z\"/>","hdr_weak":"<path d=\"M10 16c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm24-4c-6.63 0-12 5.37-12 12s5.37 12 12 12 12-5.37 12-12-5.37-12-12-12zm0 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z\"/>","healing":"<path d=\"M35.46 24.04l7.96-7.96c.78-.78.78-2.05 0-2.83l-8.67-8.67c-.78-.78-2.05-.78-2.83 0l-7.96 7.96L16 4.59c-.39-.39-.9-.59-1.41-.59-.51 0-1.02.2-1.41.59L4.5 13.26c-.78.78-.78 2.05 0 2.83l7.96 7.96L4.5 32c-.78.78-.78 2.05 0 2.83l8.67 8.67c.78.78 2.05.78 2.83 0l7.96-7.96 7.96 7.96c.39.39.9.59 1.41.59.51 0 1.02-.2 1.41-.59l8.67-8.67c.78-.78.78-2.05 0-2.83l-7.95-7.96zM24 18c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm-9.42 3.92l-7.25-7.25 7.26-7.26 7.25 7.25-7.26 7.26zM20 26c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm4 4c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm4-8c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm5.33 18.67l-7.25-7.25 7.26-7.26 7.25 7.25-7.26 7.26z\"/>","image":"<path d=\"M42 38V10c0-2.21-1.79-4-4-4H10c-2.21 0-4 1.79-4 4v28c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4zM17 27l5 6.01L29 24l9 12H10l7-9z\"/>","image_aspect_ratio":"<path d=\"M32 20h-4v4h4v-4zm0 8h-4v4h4v-4zm-16-8h-4v4h4v-4zm8 0h-4v4h4v-4zM40 8H8c-2.21 0-4 1.79-4 4v24c0 2.21 1.79 4 4 4h32c2.21 0 4-1.79 4-4V12c0-2.21-1.79-4-4-4zm0 28H8V12h32v24z\"/>","iso":"<path d=\"M38 6H10c-2.21 0-4 1.79-4 4v28c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4V10c0-2.21-1.79-4-4-4zm-27 9h4v-4h3v4h4v3h-4v4h-3v-4h-4v-3zm27 23H10l28-28v28zm-4-4v-3H24v3h10z\"/>","landscape":"<path d=\"M28 12l-7.5 10 5.7 7.6L23 32c-3.38-4.5-9-12-9-12L2 36h44L28 12z\"/>","leak_add":"<path d=\"M12 6H6v6c3.31 0 6-2.69 6-6zm16 0h-4c0 9.94-8.06 18-18 18v4c12.15 0 22-9.85 22-22zm-8 0h-4c0 5.52-4.48 10-10 10v4c7.73 0 14-6.27 14-14zm0 36h4c0-9.94 8.06-18 18-18v-4c-12.15 0-22 9.85-22 22zm16 0h6v-6c-3.31 0-6 2.69-6 6zm-8 0h4c0-5.52 4.48-10 10-10v-4c-7.73 0-14 6.27-14 14z\"/>","leak_remove":"<path d=\"M20 6h-4c0 .73-.09 1.44-.24 2.13l3.19 3.19C19.62 9.67 20 7.88 20 6zM6 8.55l5.68 5.68C10.06 15.34 8.11 16 6 16v4c3.22 0 6.17-1.1 8.53-2.92l2.85 2.85C14.29 22.47 10.32 24 6 24v4c5.43 0 10.39-1.97 14.22-5.23l5.01 5.01C21.97 31.61 20 36.57 20 42h4c0-4.32 1.53-8.29 4.07-11.39l2.85 2.85C29.1 35.83 28 38.78 28 42h4c0-2.11.66-4.06 1.78-5.68L39.46 42 42 39.45 8.55 6 6 8.55zM28 6h-4c0 3-.75 5.83-2.05 8.32l2.93 2.93C26.85 13.95 28 10.12 28 6zm11.87 26.24c.69-.15 1.4-.24 2.13-.24v-4c-1.88 0-3.67.38-5.31 1.05l3.18 3.19zm-9.12-9.12l2.93 2.93C36.17 24.75 39 24 42 24v-4c-4.12 0-7.95 1.15-11.25 3.12z\"/>","lens":"<path d=\"M24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4z\"/>","linked_camera":"<circle cx=\"24\" cy=\"28\" r=\"6.4\"/><path d=\"M32 6.66c5.16 0 9.34 4.18 9.34 9.34H44c0-6.62-5.38-12-12-12v2.66M32 12c2.22 0 4 1.78 4 4h2.66c0-3.68-2.98-6.66-6.66-6.66V12\"/><path d=\"M34 18c0-2.22-1.78-4-4-4V8H18l-3.66 4H8c-2.2 0-4 1.8-4 4v24c0 2.2 1.8 4 4 4h32c2.2 0 4-1.8 4-4V18H34zM24 38c-5.52 0-10-4.48-10-10s4.48-10 10-10 10 4.48 10 10-4.48 10-10 10z\"/>","looks_3":"<path d=\"M38.01 6h-28c-2.21 0-4 1.79-4 4v28c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4V10c0-2.21-1.79-4-4-4zm-8 15c0 1.66-1.34 3-3 3 1.66 0 3 1.34 3 3v3c0 2.21-1.79 4-4 4h-8v-4h8v-4h-4v-4h4v-4h-8v-4h8c2.21 0 4 1.79 4 4v3z\"/>","looks":"<path d=\"M24 20c-7.72 0-14 6.28-14 14h4c0-5.51 4.49-10 10-10s10 4.49 10 10h4c0-7.72-6.28-14-14-14zm0-8C11.87 12 2 21.87 2 34h4c0-9.92 8.08-18 18-18s18 8.08 18 18h4c0-12.13-9.87-22-22-22z\"/>","looks_4":"<path d=\"M38 6H10c-2.21 0-4 1.79-4 4v28c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4V10c0-2.21-1.79-4-4-4zm-8 28h-4v-8h-8V14h4v8h4v-8h4v20z\"/>","looks_5":"<path d=\"M38 6H10c-2.21 0-4 1.79-4 4v28c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4V10c0-2.21-1.79-4-4-4zm-8 12h-8v4h4c2.21 0 4 1.79 4 4v4c0 2.21-1.79 4-4 4h-8v-4h8v-4h-8V14h12v4z\"/>","looks_6":"<path d=\"M22 30h4v-4h-4v4zM38 6H10c-2.21 0-4 1.79-4 4v28c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4V10c0-2.21-1.79-4-4-4zm-8 12h-8v4h4c2.21 0 4 1.79 4 4v4c0 2.21-1.79 4-4 4h-4c-2.21 0-4-1.79-4-4V18c0-2.21 1.79-4 4-4h8v4z\"/>","looks_one":"<path d=\"M38 6H10c-2.21 0-4 1.79-4 4v28c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4V10c0-2.21-1.79-4-4-4zM28 34h-4V18h-4v-4h8v20z\"/>","looks_two":"<path d=\"M38 6H10c-2.21 0-4 1.79-4 4v28c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4V10c0-2.21-1.79-4-4-4zm-8 16c0 2.21-1.79 4-4 4h-4v4h8v4H18v-8c0-2.21 1.79-4 4-4h4v-4h-8v-4h8c2.21 0 4 1.79 4 4v4z\"/>","loupe":"<path d=\"M26 14h-4v8h-8v4h8v8h4v-8h8v-4h-8v-8zM24 4C12.97 4 4 12.97 4 24s8.97 20 20 20h16c2.21 0 4-1.79 4-4V24c0-11.03-8.97-20-20-20zm0 36c-8.82 0-16-7.18-16-16S15.18 8 24 8s16 7.18 16 16-7.18 16-16 16z\"/>","monochrome_photos":"<path d=\"M24 16v3.6c3.5 0 6.4 2.9 6.4 6.4s-2.9 6.4-6.4 6.4V36c5.5 0 10-4.5 10-10s-4.5-10-10-10zm-6.4 10c0 3.5 2.9 6.4 6.4 6.4V19.6c-3.5 0-6.4 2.9-6.4 6.4zM24 16v3.6c3.5 0 6.4 2.9 6.4 6.4s-2.9 6.4-6.4 6.4V36c5.5 0 10-4.5 10-10s-4.5-10-10-10zm-6.4 10c0 3.5 2.9 6.4 6.4 6.4V19.6c-3.5 0-6.4 2.9-6.4 6.4zM40 10h-6.3L30 6H18l-3.7 4H8c-2.2 0-4 1.8-4 4v24c0 2.2 1.8 4 4 4h32c2.2 0 4-1.8 4-4V14c0-2.2-1.8-4-4-4zm0 28H24v-2c-5.5 0-10-4.5-10-10s4.5-10 10-10v-2h16v24zm-6-12c0-5.5-4.5-10-10-10v3.6c3.5 0 6.4 2.9 6.4 6.4s-2.9 6.4-6.4 6.4V36c5.5 0 10-4.5 10-10zm-16.4 0c0 3.5 2.9 6.4 6.4 6.4V19.6c-3.5 0-6.4 2.9-6.4 6.4zm0 0c0 3.5 2.9 6.4 6.4 6.4V19.6c-3.5 0-6.4 2.9-6.4 6.4z\"/>","movie_creation":"<path d=\"M36 8l4 8h-6l-4-8h-4l4 8h-6l-4-8h-4l4 8h-6l-4-8H8c-2.21 0-3.98 1.79-3.98 4L4 36c0 2.21 1.79 4 4 4h32c2.21 0 4-1.79 4-4V8h-8z\"/>","movie_filter":"<path d=\"M36 8l4 6h-6l-4-6h-4l4 6h-6l-4-6h-4l4 6h-6l-4-6H8c-2.2 0-3.98 1.8-3.98 4L4 36c0 2.2 1.8 4 4 4h32c2.2 0 4-1.8 4-4V8h-8zM22.5 30.5L20 36l-2.5-5.5L12 28l5.5-2.5L20 20l2.5 5.5L28 28l-5.5 2.5zm11.38-6.62L32 28l-1.88-4.12L26 22l4.12-1.88L32 16l1.88 4.12L38 22l-4.12 1.88z\"/>","music_note":"<path d=\"M24 6v21.11c-1.18-.69-2.54-1.11-4-1.11-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8V14h8V6H24z\"/>","nature":"<path d=\"M26 32.24c6.95-.82 12.34-6.72 12.34-13.89 0-7.73-6.27-14-14-14s-14 6.27-14 14c0 6.93 5.04 12.67 11.66 13.79V40H10v4h28v-4H26v-7.76z\"/>","nature_people":"<path d=\"M44.34 18.34c0-7.73-6.27-14-14-14s-14 6.27-14 14c0 6.93 5.04 12.67 11.66 13.79V40H12v-6h2v-8c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v8h2v10h32v-4h-6v-7.76c6.95-.82 12.34-6.73 12.34-13.9zM9 22c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3z\"/>","navigate_before":"<path d=\"M30.83 14.83L28 12 16 24l12 12 2.83-2.83L21.66 24z\"/>","navigate_next":"<path d=\"M20 12l-2.83 2.83L26.34 24l-9.17 9.17L20 36l12-12z\"/>","palette":"<path d=\"M24 6C14.06 6 6 14.06 6 24s8.06 18 18 18c1.66 0 3-1.34 3-3 0-.78-.29-1.48-.78-2.01-.47-.53-.75-1.22-.75-1.99 0-1.66 1.34-3 3-3H32c5.52 0 10-4.48 10-10 0-8.84-8.06-16-18-16zM13 24c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm6-8c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm10 0c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm6 8c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z\"/>","panorama":"<path d=\"M46 36V12c0-2.21-1.79-4-4-4H6c-2.21 0-4 1.79-4 4v24c0 2.21 1.79 4 4 4h36c2.21 0 4-1.79 4-4zM17 25l5 6.01L29 22l9 12H10l7-9z\"/>","panorama_fish_eye":"<path d=\"M24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm0 36c-8.82 0-16-7.18-16-16S15.18 8 24 8s16 7.18 16 16-7.18 16-16 16z\"/>","panorama_horizontal":"<path d=\"M40 13.09v21.82c-5.19-1.54-10.56-2.32-16-2.32-5.44 0-10.8.78-16 2.32V13.09c5.19 1.54 10.56 2.32 16 2.32 5.44 0 10.8-.78 16-2.32M42.86 8c-.19 0-.4.04-.62.12-5.88 2.19-12.06 3.29-18.24 3.29-6.18 0-12.36-1.1-18.24-3.29-.22-.08-.43-.12-.63-.12C4.47 8 4 8.47 4 9.25v29.5c.01.78.47 1.25 1.13 1.25.19 0 .4-.04.62-.12 5.88-2.19 12.06-3.29 18.24-3.29 6.18 0 12.36 1.1 18.24 3.29.22.08.43.12.62.12.66 0 1.14-.47 1.13-1.25V9.25C44 8.47 43.52 8 42.86 8z\"/>","panorama_vertical":"<path d=\"M39.88 42.24c-2.19-5.88-3.29-12.06-3.29-18.24 0-6.18 1.1-12.36 3.29-18.24.08-.22.12-.43.12-.63C40 4.47 39.53 4 38.75 4H9.25C8.47 4.01 8 4.47 8 5.13c0 .19.04.4.12.62 2.19 5.88 3.29 12.06 3.29 18.24 0 6.18-1.1 12.36-3.29 18.24-.08.23-.12.44-.12.64 0 .66.47 1.13 1.25 1.13h29.5c.78 0 1.25-.48 1.25-1.14 0-.19-.04-.4-.12-.62zM13.09 40c1.54-5.19 2.32-10.56 2.32-16 0-5.44-.78-10.8-2.32-16h21.82c-1.54 5.19-2.32 10.56-2.32 16 0 5.44.78 10.8 2.32 16H13.09z\"/>","panorama_wide_angle":"<path d=\"M24 12c4.9 0 9.42.39 14.58 1.27C39.52 16.84 40 20.45 40 24c0 3.55-.48 7.16-1.42 10.73C33.42 35.61 28.9 36 24 36s-9.42-.39-14.58-1.27C8.48 31.16 8 27.55 8 24c0-3.55.48-7.16 1.42-10.73C14.58 12.39 19.1 12 24 12m0-4c-5.46 0-10.45.48-15.91 1.44l-1.85.33-.5 1.79C4.58 15.7 4 19.85 4 24s.58 8.3 1.74 12.44l.5 1.79 1.85.33C13.55 39.52 18.54 40 24 40s10.45-.48 15.91-1.44l1.85-.33.5-1.79C43.42 32.3 44 28.15 44 24s-.58-8.3-1.74-12.44l-.5-1.79-1.85-.33C34.45 8.48 29.46 8 24 8z\"/>","photo":"<path d=\"M42 38V10c0-2.21-1.79-4-4-4H10c-2.21 0-4 1.79-4 4v28c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4zM17 27l5 6.01L29 24l9 12H10l7-9z\"/>","photo_album":"<path d=\"M36 4H12C9.79 4 8 5.79 8 8v32c0 2.21 1.79 4 4 4h24c2.21 0 4-1.79 4-4V8c0-2.21-1.79-4-4-4zM12 8h10v16l-5-3-5 3V8zm0 30l6-7.71 4.29 5.15 6-7.73L36 38H12z\"/>","photo_camera":"<circle cx=\"24\" cy=\"24\" r=\"6.4\"/><path d=\"M18 4l-3.66 4H8c-2.21 0-4 1.79-4 4v24c0 2.21 1.79 4 4 4h32c2.21 0 4-1.79 4-4V12c0-2.21-1.79-4-4-4h-6.34L30 4H18zm6 30c-5.52 0-10-4.48-10-10s4.48-10 10-10 10 4.48 10 10-4.48 10-10 10z\"/>","photo_filter":"<path d=\"M38.04 20v18H10V10h18V6H10.04c-2.2 0-4 1.8-4 4v28c0 2.2 1.8 4 4 4h28c2.2 0 4-1.8 4-4V20h-4zM34 20l1.88-4.12L40 14l-4.12-1.88L34 8l-1.88 4.12L28 14l4.12 1.88zm-7.5 1.5L24 16l-2.5 5.5L16 24l5.5 2.5L24 32l2.5-5.5L32 24z\"/>","photo_library":"<path d=\"M44 32V8c0-2.21-1.79-4-4-4H16c-2.21 0-4 1.79-4 4v24c0 2.21 1.79 4 4 4h24c2.21 0 4-1.79 4-4zm-22-8l4.06 5.42L32 22l8 10H16l6-8zM4 12v28c0 2.21 1.79 4 4 4h28v-4H8V12H4z\"/>","picture_as_pdf":"<path d=\"M40 4H16c-2.21 0-4 1.79-4 4v24c0 2.21 1.79 4 4 4h24c2.21 0 4-1.79 4-4V8c0-2.21-1.79-4-4-4zM23 19c0 1.66-1.34 3-3 3h-2v4h-3V14h5c1.66 0 3 1.34 3 3v2zm10 4c0 1.66-1.34 3-3 3h-5V14h5c1.66 0 3 1.34 3 3v6zm8-6h-3v2h3v3h-3v4h-3V14h6v3zm-23 2h2v-2h-2v2zM8 12H4v28c0 2.21 1.79 4 4 4h28v-4H8V12zm20 11h2v-6h-2v6z\"/>","portrait":"<path d=\"M24 24.5c2.48 0 4.5-2.01 4.5-4.5 0-2.48-2.02-4.5-4.5-4.5s-4.5 2.02-4.5 4.5c0 2.49 2.02 4.5 4.5 4.5zm9 8c0-3-6-4.5-9-4.5s-9 1.5-9 4.5V34h18v-1.5zM38 6H10c-2.21 0-4 1.79-4 4v28c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4V10c0-2.21-1.79-4-4-4zm0 32H10V10h28v28z\"/>","remove_red_eye":"<path d=\"M24 9C14 9 5.46 15.22 2 24c3.46 8.78 12 15 22 15s18.54-6.22 22-15C42.54 15.22 34.01 9 24 9zm0 25c-5.52 0-10-4.48-10-10s4.48-10 10-10 10 4.48 10 10-4.48 10-10 10zm0-16c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6z\"/>","rotate_90_degrees_ccw":"<path d=\"M14.69 12.83L1.72 25.8l12.97 12.97L27.66 25.8 14.69 12.83zM7.37 25.8l7.31-7.31L22 25.8l-7.31 7.31-7.32-7.31zm31.36-12.53C35.21 9.76 30.61 8 26 8V1.51L17.51 10 26 18.48V12c3.58 0 7.17 1.37 9.9 4.1 5.47 5.47 5.47 14.33 0 19.8-2.73 2.73-6.32 4.1-9.9 4.1-1.94 0-3.87-.41-5.67-1.21l-2.98 2.98C20.03 43.25 23.01 44 26 44c4.61 0 9.21-1.76 12.73-5.27 7.03-7.03 7.03-18.43 0-25.46z\"/>","rotate_left":"<path d=\"M14.22 17.05l-2.83-2.83c-1.8 2.32-2.91 5-3.25 7.78h4.04c.29-1.75.97-3.44 2.04-4.95zM12.18 26H8.14c.34 2.78 1.45 5.46 3.25 7.78l2.83-2.83c-1.07-1.51-1.75-3.2-2.04-4.95zm2.02 10.63c2.32 1.81 5.02 2.88 7.8 3.22v-4.04c-1.75-.29-3.43-.98-4.93-2.05l-2.87 2.87zM26 8.14V2l-9.1 9.1L26 20v-7.82c5.67.95 10 5.88 10 11.82s-4.33 10.87-10 11.82v4.04c7.89-.99 14-7.7 14-15.86S33.89 9.13 26 8.14z\"/>","rotate_right":"<path d=\"M31.1 11.1L22 2v6.14C14.11 9.12 8 15.84 8 24s6.11 14.88 14 15.86v-4.04c-5.67-.95-10-5.88-10-11.82s4.33-10.87 10-11.82V20l9.1-8.9zM39.86 22c-.34-2.78-1.45-5.46-3.25-7.78l-2.83 2.83c1.07 1.51 1.75 3.2 2.04 4.95h4.04zM26 35.81v4.05c2.78-.34 5.48-1.42 7.8-3.22l-2.87-2.87c-1.5 1.06-3.18 1.74-4.93 2.04zm7.78-4.86l2.83 2.83c1.8-2.32 2.91-5 3.25-7.78h-4.04c-.29 1.75-.97 3.44-2.04 4.95z\"/>","slideshow":"<path d=\"M20 16v16l10-8-10-8zM38 6H10c-2.21 0-4 1.79-4 4v28c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4V10c0-2.21-1.79-4-4-4zm0 32H10V10h28v28z\"/>","straighten":"<path d=\"M42 12H6c-2.21 0-4 1.79-4 4v16c0 2.21 1.79 4 4 4h36c2.21 0 4-1.79 4-4V16c0-2.21-1.79-4-4-4zm0 20H6V16h4v8h4v-8h4v8h4v-8h4v8h4v-8h4v8h4v-8h4v16z\"/>","style":"<path d=\"M5.06 39.31l2.69 1.11V22.37L2.9 34.08c-.84 2.03.13 4.38 2.16 5.23zm39-7.42L34.14 7.96c-.62-1.5-2.08-2.43-3.61-2.46-.53-.01-1.07.09-1.6.3L14.2 11.9c-1.5.62-2.42 2.07-2.46 3.6-.01.54.08 1.08.3 1.61l9.91 23.93c.63 1.52 2.1 2.44 3.66 2.46.52 0 1.04-.09 1.55-.3l14.73-6.1c2.03-.84 3.01-3.18 2.17-5.21zM15.75 17.5c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm-4 22c0 2.2 1.8 4 4 4h2.91l-6.91-16.68V39.5z\"/>","switch_camera":"<path d=\"M40 8h-6.34L30 4H18l-3.66 4H8c-2.21 0-4 1.79-4 4v24c0 2.21 1.79 4 4 4h32c2.21 0 4-1.79 4-4V12c0-2.21-1.79-4-4-4zM30 31v-5H18v5l-7-7 7-7v5h12v-5l7 7-7 7z\"/>","switch_video":"<path d=\"M36 19v-7c0-1.1-.89-2-2-2H6c-1.11 0-2 .9-2 2v24c0 1.1.89 2 2 2h28c1.11 0 2-.9 2-2v-7l8 8V11l-8 8zM26 31v-5H14v5l-7-7 7-7v5h12v-5l7 7-7 7z\"/>","tag_faces":"<path d=\"M23.99 4C12.94 4 4 12.95 4 24s8.94 20 19.99 20C35.04 44 44 35.05 44 24S35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16zm7-18c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3zm-14 0c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3zm7 13c4.66 0 8.61-2.91 10.21-7H13.79c1.6 4.09 5.55 7 10.21 7z\"/>","texture":"<path d=\"M39.02 6.15L6.15 39.02c.18.69.53 1.31 1.02 1.8l.01.01c.49.49 1.11.84 1.8 1.02L41.85 8.98c-.37-1.38-1.45-2.46-2.83-2.83zM23.76 6L6 23.76v5.66L29.42 6h-5.66zM10 6c-2.2 0-4 1.8-4 4v4.01L14.01 6H10zm28 36c1.1 0 2.1-.45 2.82-1.17C41.55 40.1 42 39.1 42 38v-4.01L33.99 42H38zm-19.42 0h5.66L42 24.24v-5.66L18.58 42z\"/>","timelapse":"<path d=\"M32.49 15.51C30.14 13.17 27.07 12 24 12v12l-8.49 8.49c4.69 4.69 12.28 4.69 16.97 0 4.69-4.69 4.69-12.29.01-16.98zM24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.96 20-20c0-11.05-8.95-20-20-20zm0 36c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z\"/>","timer_10":"<path d=\"M0 15.43v3.37l6-2V36h4V12h-.51L0 15.43zm47.57 13.3c-.29-.57-.71-1.06-1.26-1.48-.55-.42-1.23-.77-2.02-1.06-.8-.29-1.7-.54-2.7-.75-.7-.15-1.27-.3-1.73-.46-.46-.15-.83-.32-1.1-.5-.27-.18-.46-.39-.57-.61-.11-.22-.16-.48-.16-.77 0-.29.06-.56.18-.83.12-.26.3-.49.54-.69.24-.2.54-.36.91-.48.36-.12.79-.18 1.28-.18.5 0 .94.07 1.32.22.38.14.7.34.95.59.26.25.45.53.58.84.13.32.19.64.19.97h3.9c0-.78-.16-1.51-.47-2.18-.31-.67-.77-1.26-1.37-1.76-.6-.5-1.33-.89-2.19-1.17-.87-.29-1.84-.43-2.92-.43-1.03 0-1.96.14-2.78.42-.83.28-1.53.67-2.12 1.15-.58.48-1.03 1.04-1.34 1.68-.31.64-.47 1.31-.47 2.01 0 .73.15 1.37.46 1.93.3.56.73 1.04 1.28 1.45.55.41 1.2.76 1.97 1.05.76.29 1.61.53 2.54.72.78.16 1.41.33 1.9.51s.86.38 1.13.59c.27.21.45.43.54.67.09.24.14.5.14.78 0 .63-.27 1.14-.8 1.53-.54.39-1.32.59-2.34.59-.44 0-.87-.05-1.28-.15-.42-.1-.79-.26-1.12-.49-.33-.22-.6-.52-.82-.88-.21-.36-.34-.81-.37-1.35h-3.79c0 .72.16 1.42.47 2.11.31.69.78 1.31 1.4 1.85.62.55 1.39.99 2.3 1.32.91.34 1.97.51 3.15.51 1.06 0 2.02-.13 2.89-.38.87-.26 1.61-.62 2.22-1.08.62-.47 1.09-1.02 1.42-1.66.33-.64.5-1.35.5-2.12-.01-.79-.15-1.46-.44-2.03zM27.64 14.09c-.68-.81-1.5-1.39-2.45-1.75-.96-.36-2.02-.54-3.2-.54-1.16 0-2.22.18-3.18.54-.96.36-1.78.94-2.45 1.75-.68.81-1.2 1.87-1.57 3.17-.37 1.31-.55 2.9-.55 4.78v3.83c0 1.88.19 3.48.56 4.79.38 1.31.91 2.38 1.59 3.2.69.82 1.51 1.42 2.46 1.79.96.37 2.02.55 3.18.55 1.17 0 2.24-.19 3.19-.55.95-.37 1.76-.96 2.44-1.79.67-.82 1.2-1.89 1.57-3.2.37-1.31.55-2.91.55-4.79v-3.83c0-1.88-.19-3.47-.55-4.78-.38-1.3-.91-2.36-1.59-3.17zm-1.83 12.36c0 1.2-.08 2.21-.24 3.05-.16.84-.41 1.52-.73 2.04s-.72.9-1.18 1.14c-.47.24-1.01.36-1.63.36-.61 0-1.15-.12-1.63-.36s-.88-.62-1.21-1.14c-.33-.52-.58-1.2-.75-2.04-.17-.84-.26-1.85-.26-3.05v-5.01c0-1.21.08-2.22.25-3.04.17-.82.42-1.48.74-1.99.33-.51.73-.87 1.2-1.09.47-.22 1.01-.33 1.62-.33.61 0 1.15.11 1.62.33.47.22.87.59 1.2 1.09.33.51.57 1.17.74 1.99.17.82.25 1.84.25 3.04v5.01z\"/>","timer_3":"<path d=\"M23.22 25.95c-.32-.48-.73-.92-1.23-1.31-.51-.39-1.12-.7-1.85-.95.61-.27 1.14-.61 1.6-1 .46-.4.84-.82 1.14-1.27.3-.45.53-.92.69-1.41.15-.49.23-.97.23-1.45 0-1.11-.19-2.08-.55-2.93-.37-.84-.89-1.55-1.56-2.11-.67-.56-1.47-.99-2.41-1.28-.94-.29-1.97-.43-3.1-.43-1.1 0-2.11.16-3.04.49-.93.33-1.73.78-2.4 1.36-.67.58-1.19 1.27-1.57 2.06-.38.79-.56 1.66-.56 2.59h3.96c0-.51.09-.97.28-1.38.19-.41.44-.76.77-1.04.33-.29.71-.51 1.16-.67.45-.16.93-.24 1.45-.24 1.22 0 2.12.31 2.72.94.59.63.89 1.5.89 2.63 0 .54-.08 1.04-.24 1.48-.16.45-.41.83-.75 1.14-.34.32-.76.56-1.26.74-.5.18-1.09.27-1.78.27h-2.35v3.13h2.35c.67 0 1.28.08 1.82.23.54.15 1 .39 1.38.71.38.32.67.73.88 1.22.21.49.31 1.07.31 1.75 0 1.24-.35 2.19-1.06 2.84-.71.65-1.67.98-2.9.98-.59 0-1.12-.08-1.6-.25-.48-.17-.89-.41-1.22-.72-.34-.31-.6-.68-.78-1.12-.19-.43-.28-.91-.28-1.44H8.37c0 1.1.21 2.07.64 2.9.42.84.99 1.54 1.71 2.1s1.55.98 2.49 1.26c.94.28 1.93.42 2.96.42 1.13 0 2.18-.16 3.16-.46.97-.31 1.82-.76 2.53-1.35.71-.59 1.27-1.32 1.67-2.19.4-.87.6-1.86.6-2.97 0-.59-.07-1.16-.22-1.71-.15-.56-.38-1.08-.69-1.56zm18.53 2.78c-.29-.57-.71-1.06-1.26-1.48-.55-.42-1.23-.77-2.02-1.06-.8-.29-1.7-.54-2.7-.75-.7-.15-1.27-.3-1.73-.46-.46-.15-.83-.32-1.1-.5-.27-.18-.46-.39-.57-.61-.11-.22-.16-.48-.16-.77 0-.29.06-.56.18-.83.12-.26.3-.49.54-.69.24-.2.54-.36.91-.48.36-.12.79-.18 1.28-.18.5 0 .94.07 1.32.22.38.14.7.34.95.59.26.25.45.53.58.84.13.32.19.64.19.97h3.9c0-.78-.16-1.51-.47-2.18-.32-.67-.77-1.26-1.37-1.76-.6-.5-1.33-.89-2.19-1.17-.87-.29-1.84-.43-2.93-.43-1.03 0-1.96.14-2.78.42-.83.28-1.53.67-2.12 1.15-.58.48-1.03 1.04-1.34 1.68-.31.64-.47 1.31-.47 2.01 0 .73.15 1.37.46 1.93.3.56.73 1.04 1.28 1.45.55.41 1.2.76 1.97 1.05.76.29 1.61.53 2.54.72.78.16 1.41.33 1.9.51s.86.38 1.13.59c.27.21.45.43.54.67.09.24.14.5.14.78 0 .63-.27 1.14-.8 1.53-.54.39-1.32.59-2.34.59-.44 0-.87-.05-1.28-.15-.42-.1-.79-.26-1.12-.49-.33-.22-.6-.52-.82-.88-.21-.36-.34-.81-.37-1.35h-3.79c0 .72.16 1.42.47 2.11.31.69.78 1.31 1.4 1.85.62.55 1.39.99 2.3 1.32.91.34 1.97.51 3.15.51 1.06 0 2.02-.13 2.89-.38.87-.26 1.61-.62 2.22-1.08.62-.47 1.09-1.02 1.42-1.66.33-.64.5-1.35.5-2.12 0-.79-.15-1.46-.43-2.03z\"/>","timer":"<path d=\"M30 2H18v4h12V2zm-8 26h4V16h-4v12zm16.05-13.23l2.85-2.85c-.86-1.03-1.8-1.97-2.83-2.83l-2.85 2.85C32.15 9.48 28.24 8 23.99 8 14.04 8 6 16.06 6 26s8.04 18 17.99 18S42 35.94 42 26c0-4.25-1.48-8.15-3.95-11.23zM24 40c-7.73 0-14-6.27-14-14s6.27-14 14-14 14 6.27 14 14-6.27 14-14 14z\"/>","timer_off":"<path d=\"M38.07 9.1l-2.85 2.85C32.15 9.48 28.24 8 23.99 8c-3.66 0-7.05 1.1-9.89 2.97l2.91 2.91C19.07 12.69 21.45 12 24 12c7.73 0 14 6.27 14 14 0 2.55-.69 4.93-1.88 6.99l2.91 2.91C40.9 33.06 42 29.66 42 26c0-4.25-1.48-8.15-3.95-11.23l2.85-2.85-2.83-2.82zM30 2H18v4h12V2zm-8 16.87l4 4V16h-4v2.87zM6.04 8l-2.55 2.54L9 16.05C7.11 18.9 6 22.32 6 26c0 9.94 8.04 18 17.99 18 3.68 0 7.1-1.11 9.95-3l5 5 2.54-2.55-15.4-15.41L6.04 8zM24 40c-7.73 0-14-6.27-14-14 0-2.57.7-4.97 1.91-7.04l19.13 19.13C28.97 39.3 26.57 40 24 40z\"/>","tonality":"<path d=\"M24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm-2 35.86C14.11 38.88 8 32.16 8 24S14.11 9.12 22 8.14v31.72zm4-31.72c2.06.26 4 .9 5.74 1.86H26V8.14zM26 14h10.48c.5.63.96 1.3 1.36 2H26v-2zm0 6h13.48c.17.65.3 1.32.39 2H26v-2zm0 19.86V38h5.74c-1.74.96-3.68 1.6-5.74 1.86zM36.48 34H26v-2h11.84c-.4.7-.86 1.37-1.36 2zm3-6H26v-2h13.86c-.08.68-.22 1.35-.38 2z\"/>","transform":"<path d=\"M44 36v-4H16V8h4l-6-6-6 6h4v4H4v4h8v16c0 2.21 1.79 4 4 4h16v4h-4l6 6 6-6h-4v-4h8zM20 16h12v12h4V16c0-2.21-1.79-4-4-4H20v4z\"/>","tune":"<path d=\"M6 34v4h12v-4H6zm0-24v4h20v-4H6zm20 32v-4h16v-4H26v-4h-4v12h4zM14 18v4H6v4h8v4h4V18h-4zm28 8v-4H22v4h20zm-12-8h4v-4h8v-4h-8V6h-4v12z\"/>","view_comfy":"<path d=\"M6 18h8v-8H6v8zm0 10h8v-8H6v8zm10 0h8v-8h-8v8zm10 0h8v-8h-8v8zM16 18h8v-8h-8v8zm10-8v8h8v-8h-8zm10 18h8v-8h-8v8zM6 38h8v-8H6v8zm10 0h8v-8h-8v8zm10 0h8v-8h-8v8zm10 0h8v-8h-8v8zm0-28v8h8v-8h-8z\"/>","view_compact":"<path d=\"M6 38h12V24H6v14zm14 0h24V24H20v14zM6 10v12h38V10H6z\"/>","wb_auto":"<path d=\"M13.7 25.3h4.6L16 18l-2.3 7.3zM44 14l-2.41 12.58L38.6 14h-3.2l-2.98 12.58L30 14h-1.52C25.55 10.35 21.05 8 16 8 7.16 8 0 15.16 0 24s7.16 16 16 16c6.27 0 11.68-3.61 14.31-8.86l.19.86H34l3-12.2L40 32h3.5l4.1-18H44zM20.6 32l-1.4-4h-6.4l-1.4 4H7.6L14 14h4l6.4 18h-3.8z\"/>","wb_cloudy":"<path d=\"M38.71 20.07C37.35 13.19 31.28 8 24 8c-5.78 0-10.79 3.28-13.3 8.07C4.69 16.72 0 21.81 0 28c0 6.63 5.37 12 12 12h26c5.52 0 10-4.48 10-10 0-5.28-4.11-9.56-9.29-9.93z\"/>","wb_incandescent":"<path d=\"M7.1 37.07l2.83 2.83 3.59-3.59-2.83-2.83-3.59 3.59zM22 44.9h4V39h-4v5.9zM8 21H2v4h6v-4zm22-8.38V3H18v9.62c-3.58 2.08-6 5.94-6 10.38 0 6.63 5.37 12 12 12s12-5.37 12-12c0-4.44-2.42-8.31-6-10.38zM40 21v4h6v-4h-6zm-5.51 15.31l3.59 3.59 2.83-2.83-3.59-3.59-2.83 2.83z\"/>","wb_iridescent":"<path d=\"M10 29h28V17H10v12zM22 1.1V7h4V1.1h-4zm16.07 5l-3.59 3.59 2.83 2.83 3.59-3.59-2.83-2.83zM26 44.9V39h-4v5.9h4zm14.9-7.83l-3.59-3.59-2.83 2.83 3.59 3.59 2.83-2.83zM7.1 8.93l3.59 3.59 2.83-2.83L9.93 6.1 7.1 8.93zM9.93 39.9l3.59-3.59-2.83-2.83-3.59 3.59 2.83 2.83z\"/>","wb_sunny":"<path d=\"M13.51 9.69L9.93 6.1 7.1 8.93l3.59 3.59 2.82-2.83zM8 21H2v4h6v-4zM26 1.1h-4V7h4V1.1zm14.9 7.83L38.07 6.1l-3.59 3.59 2.83 2.83 3.59-3.59zm-6.41 27.38l3.59 3.59 2.83-2.83-3.59-3.59-2.83 2.83zM40 21v4h6v-4h-6zM24 11c-6.63 0-12 5.37-12 12s5.37 12 12 12 12-5.37 12-12-5.37-12-12-12zm-2 33.9h4V39h-4v5.9zM7.1 37.07l2.83 2.83 3.59-3.59-2.83-2.83-3.59 3.59z\"/>","add_location":"<path d=\"M24 4c-7.72 0-14 6.28-14 14 0 10.5 14 26 14 26s14-15.5 14-26c0-7.72-6.28-14-14-14zm8 16h-6v6h-4v-6h-6v-4h6v-6h4v6h6v4z\"/>","beenhere":"<path d=\"M38 2H10C7.79 2 6.02 3.79 6.02 6L6 31.87c0 1.38.7 2.6 1.76 3.32L23.99 46l16.23-10.81c1.06-.72 1.76-1.94 1.76-3.32L42 6c0-2.21-1.79-4-4-4zM20 32L10 22l2.83-2.83L20 26.34l15.17-15.17L38 14 20 32z\"/>","directions":"<path d=\"M43.41 22.59l-18-18c-.78-.78-2.05-.78-2.82 0l-18 18c-.78.78-.78 2.05 0 2.83l18 17.99v.01c.78.78 2.05.78 2.83 0l18-18c.78-.79.78-2.05-.01-2.83zM28 29v-5h-8v6h-4v-8c0-1.11.89-2 2-2h10v-5l7 7-7 7z\"/>","directions_bike":"<path d=\"M31 11c2.2 0 4-1.8 4-4s-1.8-4-4-4-4 1.8-4 4 1.8 4 4 4zM10 24C4.5 24 0 28.5 0 34s4.5 10 10 10 10-4.5 10-10-4.5-10-10-10zm0 17c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7zm11.6-19.9l4.7-4.8 1.5 1.5c2.5 2.6 6 4.1 10.1 4.1v-4c-3 0-5.5-1.1-7.3-2.9l-3.9-3.8c-.6-.7-1.6-1.2-2.7-1.2s-2.1.4-2.8 1.2l-5.5 5.5c-.7.7-1.2 1.7-1.2 2.8 0 1.1.5 2.1 1.2 2.9L22 28v10h4V25.5l-4.4-4.4zM38 24c-5.5 0-10 4.5-10 10s4.5 10 10 10 10-4.5 10-10-4.5-10-10-10zm0 17c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7z\"/>","directions_boat":"<path d=\"M40 42c-2.78 0-5.56-.94-8-2.65-4.88 3.42-11.12 3.42-16 0C13.56 41.06 10.78 42 8 42H4v4h4c2.75 0 5.48-.69 8-1.99 5.04 2.59 10.96 2.59 16 0C34.52 45.3 37.25 46 40 46h4v-4h-4zM7.89 38H8c3.2 0 6.05-1.76 8-4 1.95 2.24 4.8 4 8 4s6.05-1.76 8-4c1.96 2.24 4.79 4 8 4h.11l3.79-13.37c.17-.51.12-1.07-.12-1.55-.25-.48-.68-.84-1.2-.99L40 21.24V12c0-2.21-1.79-4-4-4h-6V2H18v6h-6c-2.21 0-4 1.79-4 4v9.24l-2.57.84c-.52.16-.95.51-1.2.99s-.29 1.04-.12 1.55L7.89 38zM12 12h24v7.93L24 16l-12 3.93V12z\"/>","directions_bus":"<path d=\"M8 32c0 1.77.78 3.34 2 4.44V40c0 1.1.9 2 2 2h2c1.11 0 2-.9 2-2v-2h16v2c0 1.1.89 2 2 2h2c1.1 0 2-.9 2-2v-3.56c1.22-1.1 2-2.67 2-4.44V12c0-7-7.16-8-16-8S8 5 8 12v20zm7 2c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm18 0c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-12H12V12h24v10z\"/>","directions_car":"<path d=\"M37.84 12.02C37.43 10.84 36.31 10 35 10H13c-1.31 0-2.43.84-2.84 2.02L6 24v16c0 1.1.9 2 2 2h2c1.11 0 2-.9 2-2v-2h24v2c0 1.1.9 2 2 2h2c1.11 0 2-.9 2-2V24l-4.16-11.98zM13 32c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm22 0c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zM10 22l3-9h22l3 9H10z\"/>","directions_railway":"<path d=\"M8 31c0 3.87 3.14 7 7 7l-3 3v1h24v-1l-3-3c3.87 0 7-3.13 7-7V10c0-7-7.16-8-16-8S8 3 8 10v21zm16 3c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm12-14H12V10h24v10z\"/>","directions_run":"<path d=\"M27 9c2.2 0 4-1.8 4-4s-1.8-4-4-4-4 1.8-4 4 1.8 4 4 4zm-7.2 27.8l1.9-8.8 4.3 4v12h4V28.9l-4.1-4.1 1.2-6C29.7 22 33.6 24 38 24v-4c-3.7 0-6.9-2-8.7-4.9l-1.9-3.2c-.7-1.2-2-1.9-3.4-1.9-.5 0-1 .1-1.5.3L12 14.6V24h4v-6.7l3.5-1.4L16.4 32l-9.8-1.9-.8 3.9s14 2.7 14 2.8z\"/>","directions_subway":"<path d=\"M24 4C15.16 4 8 5 8 12v19c0 3.87 3.14 7 7 7l-3 3v1h24v-1l-3-3c3.87 0 7-3.13 7-7V12c0-7-7.16-8-16-8zm-9 30c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm7-12H12V12h10v10zm11 12c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-12H26V12h10v10z\"/>","directions_transit":"<path d=\"M24 4C15.16 4 8 5 8 12v19c0 3.87 3.14 7 7 7l-3 3v1h24v-1l-3-3c3.87 0 7-3.13 7-7V12c0-7-7.16-8-16-8zm-9 30c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm7-12H12V12h10v10zm11 12c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-12H26V12h10v10z\"/>","directions_walk":"<path d=\"M27 9c2.2 0 4-1.8 4-4s-1.8-4-4-4-4 1.8-4 4 1.8 4 4 4zm-7.5 6.8L14 44h4.2l3.5-16 4.3 4v12h4V28.9l-4.1-4.1 1.2-6C29.7 22 33.6 24 38 24v-4c-3.7 0-6.9-2-8.7-4.9l-1.9-3.2c-.7-1.2-2-1.9-3.4-1.9-.5 0-1 .1-1.5.3L12 14.6V24h4v-6.7l3.5-1.5\"/>","edit_location":"<path d=\"M24 4c-7.72 0-14 6.28-14 14 0 10.5 14 26 14 26s14-15.5 14-26c0-7.72-6.28-14-14-14zm-3.12 20H18v-2.88l6.7-6.68 2.86 2.86-6.68 6.7zm8.9-8.9l-1.4 1.4-2.88-2.88 1.4-1.4c.3-.3.78-.3 1.08 0l1.8 1.8c.3.3.3.78 0 1.08z\"/>","ev_station":"<path d=\"M39.54 14.46l.03-.03L32.12 7 30 9.12l4.22 4.22C32.34 14.06 31 15.87 31 18c0 2.76 2.24 5 5 5 .71 0 1.39-.15 2-.42V37c0 1.1-.9 2-2 2s-2-.9-2-2v-9c0-2.21-1.79-4-4-4h-2V10c0-2.21-1.79-4-4-4H12c-2.21 0-4 1.79-4 4v32h20V27h3v10c0 2.76 2.24 5 5 5s5-2.24 5-5V18c0-1.38-.56-2.63-1.46-3.54zM16 36v-9h-4l8-15v10h4l-8 14zm20-16c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z\"/>","flight":"<path d=\"M20.36 18\"/><path d=\"M42 32v-4L26 18V7c0-1.66-1.34-3-3-3s-3 1.34-3 3v11L4 28v4l16-5v11l-4 3v3l7-2 7 2v-3l-4-3V27l16 5z\"/>","hotel":"<path d=\"M14 26c3.31 0 6-2.69 6-6s-2.69-6-6-6-6 2.69-6 6 2.69 6 6 6zm24-12H22v14H6V10H2v30h4v-6h36v6h4V22c0-4.42-3.58-8-8-8z\"/>","layers":"<path d=\"M23.99 37.08L9.24 25.61 6 28.13l18 14 18-14-3.26-2.53-14.75 11.48zM24 32l14.73-11.45L42 18 24 4 6 18l3.26 2.53L24 32z\"/>","layers_clear":"<path d=\"M39.62 29.98L42 28.13l-2.85-2.85-2.38 1.85 2.85 2.85zm-.89-9.43L42 18 24 4l-5.83 4.53 15.75 15.75 4.81-3.73zM6.55 2L4 4.55l8.44 8.44L6 18l3.26 2.53L24 32l4.19-3.26 2.85 2.85-7.06 5.49L9.24 25.61 6 28.13l18 14 9.89-7.7L41.46 42 44 39.45 6.55 2z\"/>","local_activity":"<path d=\"M40 24c0-2.21 1.79-4 4-4v-8c0-2.21-1.79-4-4-4H8c-2.21 0-3.98 1.79-3.98 4l-.01 8C6.22 20.01 8 21.8 8 24c0 2.21-1.79 4-3.99 4L4 36c0 2.21 1.79 4 4 4h32c2.21 0 4-1.79 4-4v-8c-2.21 0-4-1.79-4-4zm-8.84 9.6L24 29l-7.16 4.6L19 25.37l-6.58-5.38 8.49-.5L24 11.6l3.09 7.89 8.49.5L29 25.37l2.16 8.23z\"/>","local_airport":"<path d=\"M42 32v-4L26 18V7c0-1.66-1.34-3-3-3s-3 1.34-3 3v11L4 28v4l16-5v11l-4 3v3l7-2 7 2v-3l-4-3V27l16 5z\"/>","local_atm":"<path d=\"M22 34h4v-2h2c1.1 0 2-.9 2-2v-6c0-1.1-.9-2-2-2h-6v-2h8v-4h-4v-2h-4v2h-2c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h6v2h-8v4h4v2zM40 8H8c-2.21 0-3.98 1.79-3.98 4L4 36c0 2.21 1.79 4 4 4h32c2.21 0 4-1.79 4-4V12c0-2.21-1.79-4-4-4zm0 28H8V12h32v24z\"/>","local_bar":"<path d=\"M42 10V6H6v4l16 18v10H12v4h24v-4H26V28l16-18zm-27.13 4l-3.56-4h25.38l-3.56 4H14.87z\"/>","local_cafe":"<path d=\"M40 6H8v20c0 4.42 3.58 8 8 8h12c4.42 0 8-3.58 8-8v-6h4c2.21 0 4-1.79 4-4v-6c0-2.21-1.79-4-4-4zm0 10h-4v-6h4v6zM4 42h36v-4H4v4z\"/>","local_car_wash":"<path d=\"M34 10c1.66 0 3-1.34 3-3 0-2-3-5.4-3-5.4S31 5 31 7c0 1.66 1.34 3 3 3zm-10 0c1.66 0 3-1.34 3-3 0-2-3-5.4-3-5.4S21 5 21 7c0 1.66 1.34 3 3 3zm-10 0c1.66 0 3-1.34 3-3 0-2-3-5.4-3-5.4S11 5 11 7c0 1.66 1.34 3 3 3zm23.84 6.02C37.43 14.84 36.31 14 35 14H13c-1.31 0-2.43.84-2.84 2.02L6 28v16c0 1.1.9 2 2 2h2c1.11 0 2-.9 2-2v-2h24v2c0 1.1.9 2 2 2h2c1.11 0 2-.9 2-2V28l-4.16-11.98zM13 36c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm22 0c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zM10 26l3-9h22l3 9H10z\"/>","local_convenience_store":"<path d=\"M38 14V8H10v6H4v26h16v-8h8v8h16V14h-6zm-16 6h-4v2h4v2h-6v-6h4v-2h-4v-2h6v6zm10 4h-2v-4h-4v-6h2v4h2v-4h2v10z\"/>","local_dining":"<path d=\"M16.2 26.69l5.66-5.66L7.83 7c-3.12 3.12-3.12 8.19 0 11.31l8.37 8.38zm13.57-3.63c3.05 1.43 7.36.42 10.54-2.76 3.83-3.83 4.56-9.3 1.63-12.23C39 5.14 33.52 5.87 29.7 9.7c-3.18 3.18-4.18 7.49-2.76 10.54-4.45 4.44-19.53 19.52-19.53 19.52l2.83 2.83L24 28.83l13.76 13.76 2.83-2.83L26.83 26l2.94-2.94z\"/>","local_drink":"<path d=\"M6 4l4.03 36.47C10.26 42.46 11.95 44 14 44h20c2.05 0 3.74-1.54 3.97-3.53L42 4H6zm18 34c-3.31 0-6-2.69-6-6 0-4 6-10.8 6-10.8S30 28 30 32c0 3.31-2.69 6-6 6zm12.65-22h-25.3l-.88-8h27.07l-.89 8z\"/>","local_florist":"<path d=\"M24 44c9.94 0 18-8.06 18-18-9.94 0-18 8.06-18 18zM11.21 20.5c0 2.76 2.24 5 5 5 1.05 0 2.03-.33 2.83-.88L19 25c0 2.76 2.24 5 5 5s5-2.24 5-5l-.04-.38c.81.56 1.78.88 2.83.88 2.76 0 5-2.24 5-5 0-1.99-1.17-3.7-2.86-4.5 1.68-.8 2.86-2.51 2.86-4.5 0-2.76-2.24-5-5-5-1.05 0-2.03.33-2.83.88L29 7c0-2.76-2.24-5-5-5s-5 2.24-5 5l.04.38c-.81-.56-1.78-.88-2.83-.88-2.76 0-5 2.24-5 5 0 1.99 1.17 3.7 2.86 4.5-1.69.8-2.86 2.51-2.86 4.5zM24 11c2.76 0 5 2.24 5 5s-2.24 5-5 5-5-2.24-5-5 2.24-5 5-5zM6 26c0 9.94 8.06 18 18 18 0-9.94-8.06-18-18-18z\"/>","local_gas_station":"<path d=\"M39.54 14.46l.03-.03L32.12 7 30 9.12l4.22 4.22C32.34 14.06 31 15.87 31 18c0 2.76 2.24 5 5 5 .71 0 1.39-.15 2-.42V37c0 1.1-.9 2-2 2s-2-.9-2-2v-9c0-2.21-1.79-4-4-4h-2V10c0-2.21-1.79-4-4-4H12c-2.21 0-4 1.79-4 4v32h20V27h3v10c0 2.76 2.24 5 5 5s5-2.24 5-5V18c0-1.38-.56-2.63-1.46-3.54zM24 20H12V10h12v10zm12 0c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z\"/>","local_grocery_store":"<path d=\"M14 36c-2.21 0-3.98 1.79-3.98 4s1.77 4 3.98 4 4-1.79 4-4-1.79-4-4-4zM2 4v4h4l7.19 15.17-2.7 4.9c-.31.58-.49 1.23-.49 1.93 0 2.21 1.79 4 4 4h24v-4H14.85c-.28 0-.5-.22-.5-.5 0-.09.02-.17.06-.24L16.2 26h14.9c1.5 0 2.81-.83 3.5-2.06l7.15-12.98c.16-.28.25-.61.25-.96 0-1.11-.9-2-2-2H10.43l-1.9-4H2zm32 32c-2.21 0-3.98 1.79-3.98 4s1.77 4 3.98 4 4-1.79 4-4-1.79-4-4-4z\"/>","local_hospital":"<path d=\"M38 6H10c-2.21 0-3.98 1.79-3.98 4L6 38c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4V10c0-2.21-1.79-4-4-4zm-2 22h-8v8h-8v-8h-8v-8h8v-8h8v8h8v8z\"/>","local_hotel":"<path d=\"M14 26c3.31 0 6-2.69 6-6s-2.69-6-6-6-6 2.69-6 6 2.69 6 6 6zm24-12H22v14H6V10H2v30h4v-6h36v6h4V22c0-4.42-3.58-8-8-8z\"/>","local_laundry_service":"<path d=\"M18.34 33.66c3.12 3.12 8.19 3.12 11.31 0 3.12-3.12 3.12-8.19 0-11.31L18.34 33.66zM36 4.02L12 4C9.79 4 8 5.79 8 8v32c0 2.21 1.79 4 4 4h24c2.21 0 4-1.79 4-4V8c0-2.21-1.79-3.98-4-3.98zM20 8c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm-6 0c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm10 32c-6.63 0-12-5.37-12-12s5.37-12 12-12 12 5.37 12 12-5.37 12-12 12z\"/>","local_library":"<path d=\"M24 23.09C19.27 18.7 12.96 16 6 16v22c6.96 0 13.27 2.7 18 7.09C28.73 40.7 35.04 38 42 38V16c-6.96 0-13.27 2.7-18 7.09zM24 16c3.31 0 6-2.69 6-6s-2.69-6-6-6-6 2.69-6 6 2.69 6 6 6z\"/>","local_mall":"<path d=\"M38 12h-4c0-5.52-4.48-10-10-10S14 6.48 14 12h-4c-2.21 0-3.98 1.79-3.98 4L6 40c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4V16c0-2.21-1.79-4-4-4zM24 6c3.31 0 6 2.69 6 6H18c0-3.31 2.69-6 6-6zm0 20c-5.52 0-10-4.48-10-10h4c0 3.31 2.69 6 6 6s6-2.69 6-6h4c0 5.52-4.48 10-10 10z\"/>","local_movies":"<path d=\"M36 6v4h-4V6H16v4h-4V6H8v36h4v-4h4v4h16v-4h4v4h4V6h-4zM16 34h-4v-4h4v4zm0-8h-4v-4h4v4zm0-8h-4v-4h4v4zm20 16h-4v-4h4v4zm0-8h-4v-4h4v4zm0-8h-4v-4h4v4z\"/>","local_offer":"<path d=\"M42.82 23.16L24.83 5.17C24.1 4.45 23.1 4 22 4H8C5.79 4 4 5.79 4 8v14c0 1.11.45 2.11 1.18 2.83l18 18C23.9 43.55 24.9 44 26 44c1.1 0 2.11-.45 2.83-1.17l14-14C43.55 28.1 44 27.1 44 26c0-1.11-.45-2.11-1.18-2.84zM11 14c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z\"/>","local_parking":"<path d=\"M26 6H12v36h8V30h6c6.63 0 12-5.37 12-12S32.63 6 26 6zm.4 16H20v-8h6.4c2.21 0 4 1.79 4 4s-1.79 4-4 4z\"/>","local_pharmacy":"<path d=\"M42 10h-5.29L39 3.71 34.3 2l-2.91 8H6v4l4 12-4 12v4h36v-4l-4-12 4-12v-4zM32 28h-6v6h-4v-6h-6v-4h6v-6h4v6h6v4z\"/>","local_phone":"<path d=\"M13.25 21.59c2.88 5.66 7.51 10.29 13.18 13.17l4.4-4.41c.55-.55 1.34-.71 2.03-.49C35.1 30.6 37.51 31 40 31c1.11 0 2 .89 2 2v7c0 1.11-.89 2-2 2C21.22 42 6 26.78 6 8c0-1.11.9-2 2-2h7c1.11 0 2 .89 2 2 0 2.49.4 4.9 1.14 7.14.22.69.06 1.48-.49 2.03l-4.4 4.42z\"/>","local_pizza":"<path d=\"M24 4c-7.13 0-13.55 3.09-17.98 8L24 44l17.99-31.99C37.56 7.09 31.14 4 24 4zM14 14c0-2.21 1.79-4 4-4s4 1.79 4 4-1.79 4-4 4-4-1.79-4-4zm10 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z\"/>","local_play":"<path d=\"M40 24c0-2.21 1.79-4 4-4v-8c0-2.21-1.79-4-4-4H8c-2.21 0-3.98 1.79-3.98 4l-.01 8C6.22 20.01 8 21.8 8 24c0 2.21-1.79 4-3.99 4L4 36c0 2.21 1.79 4 4 4h32c2.21 0 4-1.79 4-4v-8c-2.21 0-4-1.79-4-4zm-8.84 9.6L24 29l-7.16 4.6L19 25.37l-6.58-5.38 8.49-.5L24 11.6l3.09 7.89 8.49.5L29 25.37l2.16 8.23z\"/>","local_post_office":"<path d=\"M40 8H8c-2.21 0-3.98 1.79-3.98 4L4 36c0 2.21 1.79 4 4 4h32c2.21 0 4-1.79 4-4V12c0-2.21-1.79-4-4-4zm0 8L24 26 8 16v-4l16 10 16-10v4z\"/>","local_printshop":"<path d=\"M38 16H10c-3.31 0-6 2.69-6 6v12h8v8h24v-8h8V22c0-3.31-2.69-6-6-6zm-6 22H16V28h16v10zm6-14c-1.11 0-2-.89-2-2s.89-2 2-2c1.11 0 2 .89 2 2s-.89 2-2 2zM36 6H12v8h24V6z\"/>","local_see":"<circle cx=\"24\" cy=\"24\" r=\"6.4\"/><path d=\"M18 4l-3.66 4H8c-2.21 0-4 1.79-4 4v24c0 2.21 1.79 4 4 4h32c2.21 0 4-1.79 4-4V12c0-2.21-1.79-4-4-4h-6.34L30 4H18zm6 30c-5.52 0-10-4.48-10-10s4.48-10 10-10 10 4.48 10 10-4.48 10-10 10z\"/>","local_shipping":"<path d=\"M40 16h-6V8H6c-2.21 0-4 1.79-4 4v22h4c0 3.31 2.69 6 6 6s6-2.69 6-6h12c0 3.31 2.69 6 6 6s6-2.69 6-6h4V24l-6-8zM12 37c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm27-18l3.93 5H34v-5h5zm-3 18c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z\"/>","local_taxi":"<path d=\"M37.84 12.02C37.43 10.84 36.31 10 35 10h-5V6H18v4h-5c-1.31 0-2.43.84-2.84 2.02L6 24v16c0 1.1.9 2 2 2h2c1.11 0 2-.9 2-2v-2h24v2c0 1.1.9 2 2 2h2c1.11 0 2-.9 2-2V24l-4.16-11.98zM13 32c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm22 0c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zM10 22l3-9h22l3 9H10z\"/>","map":"<path d=\"M41 6c-.11 0-.21.01-.31.05L30 10.2 18 6 6.73 9.8c-.42.14-.73.5-.73.96V41c0 .55.45 1 1 1 .11 0 .21-.01.31-.05L18 37.8 30 42l11.28-3.79c.42-.15.72-.51.72-.97V7c0-.55-.45-1-1-1zM30 38l-12-4.21V10l12 4.21V38z\"/>","my_location":"<path d=\"M24 16c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm17.88 6C40.96 13.66 34.34 7.04 26 6.12V2h-4v4.12C13.66 7.04 7.04 13.66 6.12 22H2v4h4.12c.92 8.34 7.54 14.96 15.88 15.88V46h4v-4.12c8.34-.92 14.96-7.54 15.88-15.88H46v-4h-4.12zM24 38c-7.73 0-14-6.27-14-14s6.27-14 14-14 14 6.27 14 14-6.27 14-14 14z\"/>","navigation":"<path d=\"M24 4L9 40.59 10.41 42 24 36l13.59 6L39 40.59z\"/>","near_me":"<path d=\"M42 6L6 21.07v1.97l13.67 5.3L24.97 42h1.97L42 6z\"/>","person_pin":"<path d=\"M38 4H10C7.79 4 6 5.79 6 8v28c0 2.21 1.79 4 4 4h8l6 6 6-6h8c2.21 0 4-1.79 4-4V8c0-2.21-1.79-4-4-4zm-14 6.6c2.98 0 5.4 2.42 5.4 5.4 0 2.98-2.42 5.4-5.4 5.4-2.98 0-5.4-2.42-5.4-5.4 0-2.98 2.42-5.4 5.4-5.4zM36 32H12v-1.8c0-4 8-6.2 12-6.2s12 2.2 12 6.2V32z\"/>","person_pin_circle":"<path d=\"M24 4c-7.73 0-14 6.27-14 14 0 10.5 14 26 14 26s14-15.5 14-26c0-7.73-6.27-14-14-14zm0 4c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4zm0 20c-3.34 0-6.27-1.71-8-4.29.03-2.65 5.34-4.11 8-4.11s7.96 1.46 8 4.11C30.27 26.29 27.34 28 24 28z\"/>","pin_drop":"<path d=\"M36 16c0-6.63-5.37-12-12-12S12 9.37 12 16c0 9 12 22 12 22s12-13 12-22zm-16 0c0-2.21 1.79-4 4-4s4 1.79 4 4-1.79 4-4 4-4-1.79-4-4zM10 40v4h28v-4H10z\"/>","place":"<path d=\"M24 4c-7.73 0-14 6.27-14 14 0 10.5 14 26 14 26s14-15.5 14-26c0-7.73-6.27-14-14-14zm0 19c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z\"/>","rate_review":"<path d=\"M40 4H8C5.79 4 4.02 5.79 4.02 8L4 44l8-8h28c2.21 0 4-1.79 4-4V8c0-2.21-1.79-4-4-4zM12 28v-4.95L25.76 9.29c.39-.39 1.02-.39 1.41 0l3.54 3.54c.39.39.39 1.02 0 1.41L16.95 28H12zm24 0H21l4-4h11v4z\"/>","restaurant":"<path d=\"M22 18h-4V4h-4v14h-4V4H6v14c0 4.25 3.32 7.69 7.5 7.95V44h5V25.95c4.18-.26 7.5-3.7 7.5-7.95V4h-4v14zm10-6v16h5v16h5V4c-5.52 0-10 4.48-10 8z\"/>","restaurant_menu":"<path d=\"M16.2 26.69l5.66-5.66L7.83 7c-3.12 3.12-3.12 8.19 0 11.31l8.37 8.38zm13.57-3.63c3.05 1.43 7.36.42 10.54-2.76 3.83-3.83 4.56-9.3 1.63-12.23C39 5.14 33.52 5.87 29.7 9.7c-3.18 3.18-4.18 7.49-2.76 10.54-4.45 4.44-19.53 19.52-19.53 19.52l2.83 2.83L24 28.83l13.76 13.76 2.83-2.83L26.83 26l2.94-2.94z\"/>","satellite":"<path d=\"M38 6H10c-2.21 0-4 1.79-4 4v28c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4V10c0-2.21-1.79-4-4-4zM10 9.98h6c0 3.31-2.69 6.02-6 6.02V9.98zM10 24v-4c5.52 0 10-4.5 10-10.02h4C24 17.71 17.73 24 10 24zm0 12l7-9 5 6.01L29 24l9 12H10z\"/>","store_mall_directory":"<path d=\"M40 8H8v4h32V8zm2 20v-4l-2-10H8L6 24v4h2v12h20V28h8v12h4V28h2zm-18 8H12v-8h12v8z\"/>","streetview":"<path d=\"M25.12 28.66C24.44 29.21 24 30.05 24 31v11h14c2.2 0 4-1.8 4-4V26.05c-1.89-.67-3.91-1.05-6-1.05-4.05 0-7.87 1.4-10.88 3.66z\"/><circle cx=\"36\" cy=\"12\" r=\"10\"/><path d=\"M23 12c0-2.17.54-4.2 1.47-6H10c-2.2 0-4 1.8-4 4v28c0 1.1.45 2.1 1.18 2.83L26.81 21.2C24.46 18.84 23 15.59 23 12z\"/>","subway":"<circle cx=\"31\" cy=\"32\" r=\"2\"/><circle cx=\"17\" cy=\"32\" r=\"2\"/><path d=\"M14.02 18h20v10h-20zM35.6 5.59C32 4.19 27.72 4 24 4c-3.72 0-8 .19-11.6 1.59C7.06 7.68 4 12.1 4 17.73V44h40V17.73c0-5.63-3.06-10.05-8.4-12.14zm.4 26.16c0 2.9-2.35 5.25-5.25 5.25L33 39.25V40h-3l-3-3h-5.66l-3 3H15v-.75L17.25 37c-2.9 0-5.25-2.35-5.25-5.25V18c0-5.25 6-6 12-6 6.63 0 12 .75 12 6v13.75z\"/>","terrain":"<path d=\"M28 12l-7.5 10 5.7 7.6L23 32c-3.38-4.5-9-12-9-12L2 36h44L28 12z\"/>","traffic":"<path d=\"M40 20h-6v-2.28c3.45-.89 6-3.99 6-7.72h-6V8c0-1.1-.89-2-2-2H16c-1.1 0-2 .9-2 2v2H8c0 3.72 2.56 6.83 6 7.72V20H8c0 3.72 2.56 6.83 6 7.72V30H8c0 3.72 2.56 6.83 6 7.72V40c0 1.1.9 2 2 2h16c1.11 0 2-.9 2-2v-2.28c3.45-.89 6-3.99 6-7.72h-6v-2.28c3.45-.89 6-4 6-7.72zM24 38c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm0-10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm0-10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z\"/>","train":"<path d=\"M24 4C16 4 8 5 8 12v19c0 3.86 3.14 7 7 7l-3 3v1h4.46l4-4H28l4 4h4v-1l-3-3c3.86 0 7-3.14 7-7V12c0-7-7.16-8-16-8zm-9 30c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm7-14H12v-8h10v8zm4 0v-8h10v8H26zm7 14c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z\"/>","tram":"<path d=\"M38 33.88V17c0-5.59-5.22-6.8-12.01-6.97L27.5 7H34V4H14v3h9.5l-1.52 3.03C15.72 10.22 10 11.47 10 17v16.88c0 2.89 2.37 5.31 5.18 5.95L12 43v1h4.46l4-4H28l4 4h4v-1l-3-3h-.16c3.38 0 5.16-2.75 5.16-6.12zM24 37c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm10-9H14V18h20v10z\"/>","transfer_within_a_station":"<path d=\"M32.99 31v-3.5l-4.99 5 4.99 5V34H44v-3zm6.02 8.5H28v3h11.01V46L44 41l-4.99-5zM19 11c2.2 0 4-1.8 4-4s-1.8-4-4-4-4 1.8-4 4 1.8 4 4 4zm-7.5 6.8L6 46h4.2l3.5-16 4.3 4v12h4V30.9l-4.1-4.1 1.2-6C21.7 24 25.6 26 30 26v-4c-3.7 0-6.9-2-8.7-4.9l-1.9-3.2c-.7-1.2-2-1.9-3.4-1.9-.5 0-1 .1-1.5.3L4 16.6V26h4v-6.7l3.5-1.5\"/>","zoom_out_map":"<path d=\"M30 6l4.59 4.59-5.76 5.75 2.83 2.83 5.75-5.76L42 18V6zM6 18l4.59-4.59 5.75 5.76 2.83-2.83-5.76-5.75L18 6H6zm12 24l-4.59-4.59 5.76-5.75-2.83-2.83-5.75 5.76L6 30v12zm24-12l-4.59 4.59-5.75-5.76-2.83 2.83 5.76 5.75L30 42h12z\"/>","apps":"<path d=\"M8 16h8V8H8v8zm12 24h8v-8h-8v8zM8 40h8v-8H8v8zm0-12h8v-8H8v8zm12 0h8v-8h-8v8zM32 8v8h8V8h-8zm-12 8h8V8h-8v8zm12 12h8v-8h-8v8zm0 12h8v-8h-8v8z\"/>","arrow_back":"<path d=\"M40 22H15.66l11.17-11.17L24 8 8 24l16 16 2.83-2.83L15.66 26H40v-4z\"/>","arrow_downward":"<path fill=\"#010101\" d=\"M40 24l-2.82-2.82L26 32.34V8h-4v24.34L10.84 21.16 8 24l16 16 16-16z\"/>","arrow_drop_down":"<path d=\"M14 20l10 10 10-10z\"/>","arrow_drop_down_circle":"<path d=\"M24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm0 24l-8-8h16l-8 8z\"/>","arrow_drop_up":"<path d=\"M14 28l10-10 10 10z\"/>","arrow_forward":"<path d=\"M24 8l-2.83 2.83L32.34 22H8v4h24.34L21.17 37.17 24 40l16-16z\"/>","arrow_upward":"<path d=\"M8 24l2.83 2.83L22 15.66V40h4V15.66l11.17 11.17L40 24 24 8 8 24z\"/>","cancel":"<path d=\"M24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm10 27.17L31.17 34 24 26.83 16.83 34 14 31.17 21.17 24 14 16.83 16.83 14 24 21.17 31.17 14 34 16.83 26.83 24 34 31.17z\"/>","check":"<path d=\"M18 32.34L9.66 24l-2.83 2.83L18 38l24-24-2.83-2.83z\"/>","chevron_left":"<path d=\"M30.83 14.83L28 12 16 24l12 12 2.83-2.83L21.66 24z\"/>","chevron_right":"<path d=\"M20 12l-2.83 2.83L26.34 24l-9.17 9.17L20 36l12-12z\"/>","close":"<path d=\"M38 12.83L35.17 10 24 21.17 12.83 10 10 12.83 21.17 24 10 35.17 12.83 38 24 26.83 35.17 38 38 35.17 26.83 24z\"/>","expand_less":"<path d=\"M24 16L12 28l2.83 2.83L24 21.66l9.17 9.17L36 28z\"/>","expand_more":"<path d=\"M33.17 17.17L24 26.34l-9.17-9.17L12 20l12 12 12-12z\"/>","first_page":"<path d=\"M36.82 33.18L27.64 24l9.18-9.18L34 12 22 24l12 12zM12 12h4v24h-4z\"/>","fullscreen":"<path d=\"M14 28h-4v10h10v-4h-6v-6zm-4-8h4v-6h6v-4H10v10zm24 14h-6v4h10V28h-4v6zm-6-24v4h6v6h4V10H28z\"/>","fullscreen_exit":"<path d=\"M10 32h6v6h4V28H10v4zm6-16h-6v4h10V10h-4v6zm12 22h4v-6h6v-4H28v10zm4-22v-6h-4v10h10v-4h-6z\"/>","last_page":"<path d=\"M11.18 14.82L20.36 24l-9.18 9.18L14 36l12-12-12-12zM32 12h4v24h-4z\"/>","menu":"<path d=\"M6 36h36v-4H6v4zm0-10h36v-4H6v4zm0-14v4h36v-4H6z\"/>","more_horiz":"<path d=\"M12 20c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm24 0c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm-12 0c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z\"/>","more_vert":"<path d=\"M24 16c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 4c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 12c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z\"/>","refresh":"<path d=\"M35.3 12.7C32.41 9.8 28.42 8 24 8 15.16 8 8.02 15.16 8.02 24S15.16 40 24 40c7.45 0 13.69-5.1 15.46-12H35.3c-1.65 4.66-6.07 8-11.3 8-6.63 0-12-5.37-12-12s5.37-12 12-12c3.31 0 6.28 1.38 8.45 3.55L26 22h14V8l-4.7 4.7z\"/>","subdirectory_arrow_left":"<path d=\"M20 18l2.83 2.83L15.66 28H36V6h4v26H15.66l7.17 7.17L20 42 8 30l12-12z\"/>","subdirectory_arrow_right":"<path d=\"M-31 29l-12 12-2.83-2.83 7.17-7.17H-61V7h4v20h18.34l-7.17-7.17L-43 17l12 12zm71 1L28 42l-2.83-2.83L32.34 32H8V6h4v22h20.34l-7.17-7.17L28 18l12 12z\"/>","unfold_less":"<path d=\"M14.83 37.17L17.66 40 24 33.66 30.34 40l2.83-2.83L24 28l-9.17 9.17zm18.34-26.34L30.34 8 24 14.34 17.66 8l-2.83 2.83L24 20l9.17-9.17z\"/>","unfold_more":"<path d=\"M24 11.66L30.34 18l2.83-2.83L24 6l-9.17 9.17L17.66 18 24 11.66zm0 24.68L17.66 30l-2.83 2.83L24 42l9.17-9.17L30.34 30 24 36.34z\"/>","adb":"<path d=\"M10 32c0 7.73 6.27 14 14 14s14-6.27 14-14v-8H10v8zM32.25 8.74l4.2-4.2-1.65-1.65-4.61 4.61C28.31 6.57 26.23 6 24 6c-2.23 0-4.31.57-6.19 1.5L13.2 2.89l-1.65 1.65 4.2 4.2C12.28 11.28 10 15.36 10 20v2h28v-2c0-4.64-2.28-8.72-5.75-11.26zM18 18c-1.11 0-2-.9-2-2s.89-2 2-2c1.11 0 2 .9 2 2s-.89 2-2 2zm12 0c-1.11 0-2-.9-2-2s.89-2 2-2c1.11 0 2 .9 2 2s-.89 2-2 2z\"/>","airline_seat_flat":"<path d=\"M44 22v4H18V14h18c4.42 0 8 3.58 8 8zM4 28v4h12v4h16v-4h12v-4H4zm10.29-3.8c2.32-2.37 2.28-6.17-.09-8.48-2.37-2.32-6.17-2.28-8.48.09-2.32 2.37-2.28 6.17.09 8.48 2.36 2.32 6.16 2.28 8.48-.09z\"/>","airline_seat_flat_angled":"<path d=\"M44.51 28.57l-1.38 3.77-24.73-8.92 4.15-11.31 17.12 6.18c4.2 1.51 6.37 6.12 4.84 10.28zM3 24.27l13 4.69V38h16v-3.26L41.05 38l1.38-3.77L4.38 20.5 3 24.27zm11.59-3.86c2.99-1.43 4.25-5.01 2.82-8-1.43-2.99-5.01-4.25-8-2.82-2.99 1.43-4.25 5.01-2.82 8 1.43 2.99 5.01 4.25 8 2.82z\"/>","airline_seat_individual_suite":"<path d=\"M14 26c3.31 0 6-2.69 6-6s-2.69-6-6-6-6 2.69-6 6 2.69 6 6 6zm24-12H22v14H6V14H2v20h44V22c0-4.42-3.58-8-8-8z\"/>","airline_seat_legroom_extra":"<path d=\"M8 24V6H4v18c0 5.52 4.48 10 10 10h12v-4H14c-3.31 0-6-2.69-6-6zm37.66 10.47c-.75-1.44-2.58-1.94-4.06-1.26l-2.19 1-6.83-13.95c-.67-1.37-2.06-2.24-3.58-2.24L22 18V6H10v16c0 3.31 2.69 6 6 6h14l6.82 14 7.43-3.41c1.55-.71 2.21-2.58 1.41-4.12z\"/>","airline_seat_legroom_normal":"<path d=\"M10 24V6H6v18c0 5.52 4.48 10 10 10h12v-4H16c-3.31 0-6-2.69-6-6zm31 12h-3V22c0-2.21-1.79-4-4-4H24V6H12v16c0 3.3 2.7 6 6 6h14v14h9c1.66 0 3-1.34 3-3s-1.34-3-3-3z\"/>","airline_seat_legroom_reduced":"<path d=\"M39.94 38.41C40.31 40.32 38.85 42 37 42h-9v-6l2-8H18c-3.3 0-6-2.7-6-6V6h12v12h10c2.21 0 4 1.79 4 4l-4 14h2.89c1.45 0 2.78.98 3.05 2.41zM10 24V6H6v18c0 5.52 4.48 10 10 10h8v-4h-8c-3.31 0-6-2.69-6-6z\"/>","airline_seat_recline_extra":"<path d=\"M10.71 11.28c-1.81-1.27-2.25-3.76-.99-5.57 1.27-1.81 3.76-2.25 5.57-.98 1.81 1.27 2.25 3.76.98 5.57-1.26 1.8-3.75 2.24-5.56.98zM32 38H17.86c-2.96 0-5.48-2.16-5.93-5.08L8 14H4l3.99 19.51c.74 4.88 4.94 8.49 9.88 8.49H32v-4zm.46-8H22.7l-2.05-8.2c3.15 1.78 6.56 3.09 10.3 2.44v-4.25c-3.26.61-6.88-.55-9.38-2.49l-3.29-2.56c-.45-.35-.98-.6-1.53-.76-.63-.18-1.31-.23-1.98-.12l-.05.01c-2.45.43-4.09 2.76-3.66 5.21l2.71 11.84c.54 2.83 3.01 4.88 5.89 4.88h13.7L41 42l3-3-11.54-9z\"/>","airline_seat_recline_normal":"<path d=\"M15.17 10.83c-1.56-1.56-1.56-4.09 0-5.66 1.56-1.56 4.09-1.56 5.66 0 1.56 1.56 1.56 4.09 0 5.66-1.56 1.56-4.1 1.56-5.66 0zM12 32V14H8v18c0 5.52 4.48 10 10 10h12v-4H18c-3.31 0-6-2.69-6-6zm28 8.13L29.87 30H23v-7.36c2.79 2.3 7.21 4.31 11 4.32v-4.32c-3.32.04-7.22-1.74-9.34-4.08l-2.8-3.1c-.39-.43-.86-.76-1.37-1.01-.59-.29-1.25-.46-1.93-.46h-.05C16.02 14 14 16.01 14 18.5V30c0 3.31 2.69 6 6 6h10.13l7 7L40 40.13z\"/>","bluetooth_audio":"<path d=\"M28.48 24.02l4.64 4.64c.56-1.45.88-3.02.88-4.66 0-1.63-.31-3.19-.86-4.63l-4.66 4.65zm10.58-10.59l-2.53 2.53c1.25 2.41 1.97 5.14 1.97 8.05s-.72 5.63-1.97 8.05l2.4 2.4c1.93-3.1 3.07-6.73 3.07-10.63 0-3.82-1.09-7.37-2.94-10.4zm-7.65 1.98L20 4h-2v15.17L8.83 10 6 12.83 17.17 24 6 35.17 8.83 38 18 28.83V44h2l11.41-11.41L22.83 24l8.58-8.59zM22 11.66l3.76 3.76L22 19.17v-7.51zm3.76 20.93L22 36.34v-7.52l3.76 3.77z\"/>","confirmation_number":"<path d=\"M44 20v-8c0-2.21-1.79-4-4-4H8c-2.21 0-3.98 1.79-3.98 4v8c2.2.01 3.98 1.8 3.98 4 0 2.21-1.79 4-3.99 4L4 36c0 2.21 1.79 4 4 4h32c2.21 0 4-1.79 4-4v-8c-2.21 0-4-1.79-4-4s1.79-4 4-4zM26 35h-4v-4h4v4zm0-9h-4v-4h4v4zm0-9h-4v-4h4v4z\"/>","disc_full":"<path d=\"M40 32h4v-4h-4v4zm0-18v10h4V14h-4zM20 8C11.16 8 4 15.16 4 24s7.16 16 16 16 16-7.16 16-16S28.84 8 20 8zm0 20c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z\"/>","do_not_disturb":"<path d=\"M24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm0 36c-8.84 0-16-7.16-16-16 0-3.7 1.27-7.09 3.37-9.8L33.8 36.63C31.09 38.73 27.7 40 24 40zm12.63-6.2L14.2 11.37C16.91 9.27 20.3 8 24 8c8.84 0 16 7.16 16 16 0 3.7-1.27 7.09-3.37 9.8z\"/>","do_not_disturb_alt":"<path d=\"M24 4C13 4 4 13 4 24s9 20 20 20 20-9 20-20S35 4 24 4zM8 24c0-8.8 7.2-16 16-16 3.7 0 7.1 1.3 9.8 3.4L11.4 33.8C9.3 31.1 8 27.7 8 24zm16 16c-3.7 0-7.1-1.3-9.8-3.4l22.4-22.4c2.1 2.7 3.4 6.1 3.4 9.8 0 8.8-7.2 16-16 16z\"/>","do_not_disturb_off":"<path d=\"M34 22v4h-2.92l9.36 9.36C42.68 32.14 44 28.22 44 24c0-11.04-8.96-20-20-20-4.22 0-8.14 1.32-11.36 3.56L27.08 22H34zM4.54 4.54L2 7.08l5.56 5.56C5.32 15.86 4 19.78 4 24c0 11.04 8.96 20 20 20 4.22 0 8.14-1.32 11.36-3.56L40.92 46l2.54-2.54L22 22 4.54 4.54zM14 26v-4h2.92l4 4H14z\"/>","do_not_disturb_on":"<path d=\"M24 4C12.96 4 4 12.96 4 24s8.96 20 20 20 20-8.96 20-20S35.04 4 24 4zm10 22H14v-4h20v4z\"/>","drive_eta":"<path d=\"M37.84 10.02C37.43 8.84 36.31 8 35 8H13c-1.31 0-2.43.84-2.84 2.02L6 22v16c0 1.1.9 2 2 2h2c1.11 0 2-.9 2-2v-2h24v2c0 1.1.9 2 2 2h2c1.11 0 2-.9 2-2V22l-4.16-11.98zM13 30c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm22 0c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zM10 20l3-9h22l3 9H10z\"/>","enhanced_encryption":"<path d=\"M36 16h-2v-4c0-5.52-4.48-10-10-10S14 6.48 14 12v4h-2c-2.2 0-4 1.8-4 4v20c0 2.2 1.8 4 4 4h24c2.2 0 4-1.8 4-4V20c0-2.2-1.8-4-4-4zm-18.2-4c0-3.42 2.78-6.2 6.2-6.2s6.2 2.78 6.2 6.2v4H17.8v-4zM32 32h-6v6h-4v-6h-6v-4h6v-6h4v6h6v4z\"/>","event_available":"<path d=\"M33.06 22.12L30.94 20l-9.76 9.76-4.24-4.24-2.12 2.12L21.18 34l11.88-11.88zM38 6h-2V2h-4v4H16V2h-4v4h-2c-2.21 0-3.98 1.79-3.98 4L6 38c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4V10c0-2.21-1.79-4-4-4zm0 32H10V16h28v22z\"/>","event_busy":"<path d=\"M18.62 34l4.88-4.88L28.38 34l2.12-2.12L25.62 27l4.88-4.88L28.38 20l-4.88 4.88L18.62 20l-2.12 2.12L21.38 27l-4.88 4.88L18.62 34zM38 6h-2V2h-4v4H16V2h-4v4h-2c-2.21 0-3.98 1.79-3.98 4L6 38c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4V10c0-2.21-1.79-4-4-4zm0 32H10V16h28v22z\"/>","event_note":"<path d=\"M34 20H14v4h20v-4zm4-14h-2V2h-4v4H16V2h-4v4h-2c-2.21 0-3.98 1.79-3.98 4L6 38c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4V10c0-2.21-1.79-4-4-4zm0 32H10V16h28v22zM28 28H14v4h14v-4z\"/>","folder_special":"<path d=\"M40 12H24l-4-4H8c-2.2 0-4 1.8-4 4v24c0 2.2 1.8 4 4 4h32c2.2 0 4-1.8 4-4V16c0-2.2-1.8-4-4-4zm-4.13 22L30 30.56 24.13 34l1.56-6.66-5.18-4.48 6.83-.59L30 16l2.67 6.28 6.83.59-5.18 4.48L35.87 34z\"/>","live_tv":"<path d=\"M42 12H26.83l6.59-6.59L32 4l-8 8-8-8-1.41 1.41L21.17 12H6c-2.21 0-4 1.79-4 4v24c0 2.21 1.79 4 4 4h36c2.21 0 4-1.79 4-4V16c0-2.21-1.79-4-4-4zm0 28H6V16h36v24zM18 20v16l14-8z\"/>","mms":"<path d=\"M40 4H8C5.79 4 4.02 5.79 4.02 8L4 44l8-8h28c2.21 0 4-1.79 4-4V8c0-2.21-1.79-4-4-4zM10 28l7-9 5 6.01L29 16l9 12H10z\"/>","more":"<path d=\"M44 6H14c-1.38 0-2.47.7-3.19 1.76L0 23.99l10.81 16.23c.72 1.06 1.94 1.78 3.32 1.78H44c2.21 0 4-1.79 4-4V10c0-2.21-1.79-4-4-4zM18 27c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm10 0c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm10 0c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z\"/>","network_check":"<path d=\"M25.8-20c-.35 0-.64.19-.82.46l-.13.29L14.48 4.06c-.32.57-.51 1.22-.51 1.93 0 2.21 1.8 4.01 4.01 4.01 1.93 0 3.53-1.36 3.92-3.17l.01-.07L26.8-19c0-.55-.45-1-1-1zM-4-12l4 4c5.75-5.75 13.57-8.15 21.07-7.25l2.38-5.36C13.79-22.32 3.47-19.46-4-12zm40 4l4-4c-3.27-3.27-7.1-5.63-11.17-7.14l-1.07 5.63c2.99 1.24 5.8 3.07 8.24 5.51zm-8 8l4-4c-1.6-1.6-3.41-2.84-5.33-3.78l-1.11 5.84C26.43-1.39 27.25-.75 28 0zM4-4l4 4c2.27-2.27 5.11-3.59 8.06-3.99l2.57-5.77C13.35-9.92 8.03-8.02 4-4z\"/>","network_locked":"<path d=\"M39 20c.34 0 .67.06 1 .1V2L2 40h26v-6c0-1.77.77-3.37 2-4.47V29c0-4.96 4.04-9 9-9zm5 12v-3c0-2.76-2.24-5-5-5s-5 2.24-5 5v3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2v-8c0-1.1-.9-2-2-2zm-2 0h-6v-3c0-1.66 1.34-3 3-3s3 1.34 3 3v3z\"/>","no_encryption":"<path d=\"M42 43.56L8.44 10 6 12.44l4.08 4.08C8.85 17.2 8 18.5 8 20v20c0 2.2 1.8 4 4 4h24c.47 0 .91-.09 1.32-.24L39.56 46 42 43.56zM17.8 12c0-3.42 2.78-6.2 6.2-6.2s6.2 2.78 6.2 6.2v4H19.31L40 36.69V20c0-2.2-1.8-4-4-4h-2v-4c0-5.52-4.48-10-10-10-5.11 0-9.28 3.86-9.88 8.81l3.68 3.68V12z\"/>","ondemand_video":"<path d=\"M42 6H6c-2.21 0-4 1.79-4 4v24c0 2.21 1.79 4 4 4h10v4h16v-4h10c2.21 0 3.98-1.79 3.98-4L46 10c0-2.21-1.79-4-4-4zm0 28H6V10h36v24zM32 22l-14 8V14z\"/>","personal_video":"<path d=\"M42 6H6c-2.21 0-4 1.79-4 4v24c0 2.21 1.79 4 4 4h10v4h16v-4h10c2.21 0 3.98-1.79 3.98-4L46 10c0-2.21-1.79-4-4-4zm0 28H6V10h36v24z\"/>","phone_bluetooth_speaker":"<path d=\"M29.41 19L34 14.41V22h1l5.71-5.71-4.3-4.29 4.29-4.29L35 2h-1v7.59L29.41 5 28 6.41 33.59 12 28 17.59 29.41 19zM36 5.83l1.88 1.88L36 9.59V5.83zm0 8.58l1.88 1.88L36 18.17v-3.76zM40 31c-2.49 0-4.89-.4-7.14-1.14-.69-.22-1.48-.06-2.03.49l-4.4 4.41c-5.67-2.88-10.29-7.51-13.18-13.17l4.4-4.41c.55-.55.71-1.34.49-2.03C17.4 12.9 17 10.49 17 8c0-1.11-.89-2-2-2H8c-1.11 0-2 .89-2 2 0 18.78 15.22 34 34 34 1.11 0 2-.89 2-2v-7c0-1.11-.89-2-2-2z\"/>","phone_forwarded":"<path d=\"M36 22l10-10L36 2v6h-8v8h8v6zm4 9c-2.49 0-4.89-.4-7.14-1.14-.69-.22-1.48-.06-2.03.49l-4.4 4.41c-5.67-2.88-10.29-7.51-13.18-13.17l4.4-4.41c.55-.55.71-1.34.49-2.03C17.4 12.89 17 10.49 17 8c0-1.11-.89-2-2-2H8c-1.11 0-2 .89-2 2 0 18.78 15.22 34 34 34 1.11 0 2-.89 2-2v-7c0-1.11-.89-2-2-2z\"/>","phone_in_talk":"<path d=\"M40 31c-2.49 0-4.89-.4-7.14-1.14-.69-.22-1.48-.06-2.03.49l-4.4 4.41c-5.67-2.88-10.29-7.51-13.18-13.17l4.4-4.41c.55-.55.71-1.34.49-2.03C17.4 12.9 17 10.49 17 8c0-1.11-.89-2-2-2H8c-1.11 0-2 .89-2 2 0 18.78 15.22 34 34 34 1.11 0 2-.89 2-2v-7c0-1.11-.89-2-2-2zm-2-7h4c0-9.94-8.06-18-18-18v4c7.73 0 14 6.27 14 14zm-8 0h4c0-5.52-4.48-10-10-10v4c3.31 0 6 2.69 6 6z\"/>","phone_locked":"<path d=\"M40 31c-2.49 0-4.9-.4-7.14-1.14-.69-.22-1.48-.06-2.03.49l-4.4 4.41c-5.67-2.88-10.29-7.51-13.18-13.17l4.4-4.41c.55-.55.71-1.34.49-2.03C17.4 12.9 17 10.49 17 8c0-1.11-.89-2-2-2H8c-1.1 0-2 .89-2 2 0 18.78 15.22 34 34 34 1.11 0 2-.89 2-2v-7c0-1.11-.89-2-2-2zm0-23V7c0-2.76-2.24-5-5-5s-5 2.24-5 5v1c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2h10c1.11 0 2-.9 2-2v-8c0-1.1-.89-2-2-2zm-1.6 0h-6.8V7c0-1.88 1.52-3.4 3.4-3.4s3.4 1.52 3.4 3.4v1z\"/>","phone_missed":"<path d=\"M13 11l11 11L38 8l-2-2-12 12-9-9h7V6H10v12h3v-7zm34.41 22.34C41.32 27.55 33.07 24 24 24S6.68 27.55.59 33.34c-.37.37-.59.87-.59 1.42s.22 1.05.59 1.41l4.95 4.96c.36.36.86.59 1.42.59.54 0 1.04-.22 1.4-.57 1.58-1.47 3.38-2.72 5.33-3.71.66-.33 1.12-1.01 1.12-1.8v-6.21C17.7 28.5 20.79 28 24 28s6.3.5 9.2 1.44v6.21c0 .79.46 1.47 1.12 1.8 1.95.98 3.75 2.23 5.33 3.71.36.35.85.57 1.4.57.55 0 1.05-.22 1.42-.59l4.95-4.96c.36-.36.59-.86.59-1.41s-.23-1.06-.6-1.43z\"/>","phone_paused":"<path d=\"M34 6h-4v14h4V6zm6 25c-2.49 0-4.89-.4-7.14-1.14-.69-.22-1.48-.06-2.03.49l-4.4 4.41c-5.67-2.88-10.29-7.51-13.18-13.17l4.4-4.41c.55-.55.71-1.34.49-2.03C17.4 12.9 17 10.49 17 8c0-1.11-.89-2-2-2H8c-1.11 0-2 .89-2 2 0 18.78 15.22 34 34 34 1.11 0 2-.89 2-2v-7c0-1.11-.89-2-2-2zM38 6v14h4V6h-4z\"/>","power":"<path d=\"M32.02 14H32V6h-4v8h-8V6h-4v8h-.02C14 13.99 12 15.99 12 17.99v10.99L19 36v6h10v-6l7-7.03V17.98c0-1.99-2-3.99-3.98-3.98z\"/>","priority_high":"<circle cx=\"24\" cy=\"38\" r=\"4\"/><path d=\"M20 6h8v24h-8z\"/>","rv_hookup":"<path d=\"M40 34V22c0-2.21-1.79-4-4-4H14v-4l-6 6 6 6v-4h8v6H8v6c0 2.21 1.79 4 4 4h4c0 3.32 2.68 6 6 6s6-2.68 6-6h16v-4h-4zm-18 6c-1.11 0-2-.89-2-2 0-1.11.89-2 2-2s2 .89 2 2c0 1.11-.89 2-2 2zm14-12h-8v-6h8v6zM34 4v4H18v4h16v4l6-6z\"/>","sd_card":"<path d=\"M36 4H20L8.04 16 8 40c0 2.2 1.8 4 4 4h24c2.2 0 4-1.8 4-4V8c0-2.2-1.8-4-4-4zM24 16h-4V8h4v8zm6 0h-4V8h4v8zm6 0h-4V8h4v8z\"/>","sim_card_alert":"<path d=\"M36 4H20L8.05 16 8 40c0 2.2 1.8 4 4 4h24c2.2 0 4-1.8 4-4V8c0-2.2-1.8-4-4-4zM26 34h-4v-4h4v4zm0-8h-4V16h4v10z\"/>","sms":"<path d=\"M40 4H8C5.79 4 4.02 5.79 4.02 8L4 44l8-8h28c2.21 0 4-1.79 4-4V8c0-2.21-1.79-4-4-4zM18 22h-4v-4h4v4zm8 0h-4v-4h4v4zm8 0h-4v-4h4v4z\"/>","sms_failed":"<path d=\"M40 4H8C5.79 4 4.02 5.79 4.02 8L4 44l8-8h28c2.21 0 4-1.79 4-4V8c0-2.21-1.79-4-4-4zM26 28h-4v-4h4v4zm0-8h-4v-8h4v8z\"/>","sync":"<path d=\"M24 8V2l-8 8 8 8v-6c6.63 0 12 5.37 12 12 0 2.03-.51 3.93-1.39 5.61l2.92 2.92C39.08 30.05 40 27.14 40 24c0-8.84-7.16-16-16-16zm0 28c-6.63 0-12-5.37-12-12 0-2.03.51-3.93 1.39-5.61l-2.92-2.92C8.92 17.95 8 20.86 8 24c0 8.84 7.16 16 16 16v6l8-8-8-8v6z\"/>","sync_disabled":"<path d=\"M20 12.7V8.52c-1.6.41-3.09 1.07-4.46 1.92l2.93 2.93c.49-.25 1-.49 1.53-.67zM5.73 10.82l4.71 4.71C8.9 17.99 8 20.88 8 24c0 4.42 1.81 8.4 4.71 11.29L8 40h12V28l-4.47 4.47C13.35 30.3 12 27.31 12 24c0-2 .5-3.88 1.37-5.54l16.17 16.17c-.49.26-1 .49-1.53.68v4.17c1.6-.41 3.09-1.07 4.46-1.92l4.72 4.72 2.55-2.55L8.27 8.27l-2.54 2.55zM40 8H28v12l4.47-4.47C34.65 17.7 36 20.69 36 24c0 2-.5 3.88-1.37 5.54l2.93 2.93C39.1 30.01 40 27.12 40 24c0-4.42-1.81-8.4-4.71-11.29L40 8z\"/>","sync_problem":"<path d=\"M6 24c0 4.42 1.82 8.4 4.71 11.29L6 40h12V28l-4.47 4.47C11.35 30.3 10 27.31 10 24c0-5.22 3.34-9.65 8-11.3V8.52C11.1 10.3 6 16.55 6 24zm16 10h4v-4h-4v4zM42 8H30v12l4.47-4.47C36.65 17.7 38 20.69 38 24c0 5.22-3.34 9.65-8 11.3v4.17C36.9 37.7 42 31.45 42 24c0-4.42-1.82-8.4-4.71-11.29L42 8zM22 26h4V14h-4v12z\"/>","system_update":"<path d=\"M34 2.02L14 2c-2.21 0-4 1.79-4 4v36c0 2.21 1.79 4 4 4h20c2.21 0 4-1.79 4-4V6c0-2.21-1.79-3.98-4-3.98zM34 38H14V10h20v28zm-2-12h-6V16h-4v10h-6l8 8 8-8z\"/>","tap_and_play":"<path d=\"M4 32v4c5.52 0 10 4.48 10 10h4c0-7.73-6.27-14-14-14zm0 8v6h6c0-3.31-2.69-6-6-6zm0-16v4c9.94 0 18 8.06 18 18h4c0-12.15-9.85-22-22-22zM34 2.02L14 2c-2.21 0-4 1.79-4 4v14.74c1.38.33 2.72.74 4 1.28V10h20v26h-6.06c1.04 2.49 1.68 5.19 1.9 8H34c2.21 0 4-1.79 4-4V6c0-2.21-1.79-3.98-4-3.98z\"/>","time_to_leave":"<path d=\"M37.84 10.02C37.43 8.84 36.31 8 35 8H13c-1.31 0-2.43.84-2.84 2.02L6 22v16c0 1.1.9 2 2 2h2c1.11 0 2-.9 2-2v-2h24v2c0 1.1.9 2 2 2h2c1.11 0 2-.9 2-2V22l-4.16-11.98zM13 30c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm22 0c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zM10 20l3-9h22l3 9H10z\"/>","vibration":"<path d=\"M0 30h4V18H0v12zm6 4h4V14H6v20zm38-16v12h4V18h-4zm-6 16h4V14h-4v20zM33 6H15c-1.66 0-3 1.34-3 3v30c0 1.66 1.34 3 3 3h18c1.66 0 3-1.34 3-3V9c0-1.66-1.34-3-3-3zm-1 32H16V10h16v28z\"/>","voice_chat":"<path d=\"M40 4H8C5.79 4 4.02 5.79 4.02 8L4 44l8-8h28c2.21 0 4-1.79 4-4V8c0-2.21-1.79-4-4-4zm-4 24l-8-6.4V28H12V12h16v6.4l8-6.4v16z\"/>","vpn_lock":"<path d=\"M44 8V7c0-2.76-2.24-5-5-5s-5 2.24-5 5v1c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2h10c1.11 0 2-.9 2-2v-8c0-1.1-.89-2-2-2zm-1.6 0h-6.8V7c0-1.88 1.52-3.4 3.4-3.4s3.4 1.52 3.4 3.4v1zm-4.55 16c.08.66.15 1.32.15 2 0 4.16-1.6 7.94-4.21 10.79C33.28 35.17 31.78 34 30 34h-2v-6c0-1.1-.9-2-2-2H14v-4h4c1.1 0 2-.9 2-2v-4h4c2.21 0 4-1.79 4-4V6.92c-1.89-.6-3.91-.92-6-.92C10.95 6 2 14.95 2 26s8.95 20 20 20 20-8.95 20-20c0-.68-.04-1.34-.1-2h-4.05zM20 41.86C12.11 40.88 6 34.16 6 26c0-1.23.15-2.43.42-3.58L16 32v2c0 2.21 1.79 4 4 4v3.86z\"/>","wc":"<path d=\"M11 44V29H8V18c0-2.2 1.8-4 4-4h6c2.2 0 4 1.8 4 4v11h-3v15h-8zm25 0V32h6l-5.09-15.26C36.37 15.1 34.84 14 33.12 14h-.23c-1.72 0-3.25 1.1-3.79 2.74L24 32h6v12h6zM15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm18 0c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z\"/>","wifi":"<path d=\"M2 18l4 4c9.94-9.94 26.06-9.94 36 0l4-4C33.85 5.85 14.15 5.85 2 18zm16 16l6 6 6-6c-3.31-3.31-8.69-3.31-12 0zm-8-8l4 4c5.52-5.52 14.48-5.52 20 0l4-4c-7.73-7.73-20.27-7.73-28 0z\"/>","ac_unit":"<path d=\"M44 22h-8.34l6.48-6.49-2.83-2.82L30 22h-4v-4l9.31-9.31-2.82-2.83L26 12.34V4h-4v8.34l-6.49-6.48-2.82 2.83L22 18v4h-4l-9.31-9.31-2.83 2.82L12.34 22H4v4h8.34l-6.48 6.49 2.83 2.82L18 26h4v4l-9.31 9.31 2.82 2.83L22 35.66V44h4v-8.34l6.49 6.48 2.82-2.83L26 30v-4h4l9.31 9.31 2.83-2.82L35.66 26H44z\"/>","airport_shuttle":"<path d=\"M34 10H6c-2.21 0-4 1.79-4 4v18h4c0 3.31 2.69 6 6 6s6-2.69 6-6h11c0 3.31 2.69 6 6 6s6-2.69 6-6h5V22L34 10zM6 22v-8h8v8H6zm6 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm14-13h-8v-8h8v8zm9 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm-5-13v-8h2l8 8H30z\"/>","all_inclusive":"<path d=\"M37.2 13.25c-2.88 0-5.6 1.12-7.55 3.07l-5.65 5-.01-.01-3.03 2.67.02.02-5.39 4.78c-1.28 1.27-2.98 1.97-4.79 1.97-3.74 0-6.78-3.03-6.78-6.75s3.04-6.75 6.78-6.75c1.81 0 3.51.7 4.88 2.06l2.27 2.01 3.02-2.67-2.53-2.24c-2.04-2.03-4.75-3.15-7.64-3.15C4.84 13.25 0 18.07 0 24s4.84 10.75 10.8 10.75c2.88 0 5.59-1.12 7.55-3.06L24 26.68l.01.01 3.02-2.68-.01-.01 5.39-4.77c1.28-1.28 2.98-1.98 4.79-1.98 3.74 0 6.78 3.03 6.78 6.75s-3.04 6.75-6.78 6.75c-1.81 0-3.51-.7-4.88-2.05l-2.27-2.01-3.02 2.68 2.53 2.24c2.04 2.03 4.75 3.14 7.63 3.14C43.16 34.75 48 29.93 48 24s-4.84-10.75-10.8-10.75z\"/>","beach_access":"<path d=\"M26.248 29.11l2.863-2.862 12.9 12.89-2.86 2.864zm8.592-11.45l5.73-5.73c-7.9-7.9-20.7-7.91-28.61-.02 7.87-2.61 16.62-.52 22.88 5.75zm-22.93-5.71c-7.88 7.91-7.88 20.71.02 28.61l5.73-5.73c-6.27-6.25-8.36-15-5.75-22.88zm.04-.03c-.01.01-.01.01-.02.01-.01.01-.01.01-.01.02-.75 6.02 2.34 13.77 8.61 20.03l11.46-11.46c-6.28-6.26-14.02-9.36-20.04-8.6z\"/>","business_center":"<path d=\"M20 32v-2H6.02L6 38c0 2.22 1.78 4 4 4h28c2.22 0 4-1.78 4-4v-8H28v2h-8zm20-18h-8.02v-4l-4-4h-8L16 10v4H8.01c-2.21 0-4 1.79-4 4v6c0 2.21 1.79 4 4 4h12v-4h8v4h12c2.21 0 4-1.79 4-4v-6c-.01-2.21-1.8-4-4.01-4zm-12.01 0h-8v-4h8v4z\"/>","casino":"<path d=\"M38 6H10c-2.21 0-4 1.79-4 4v28c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4V10c0-2.21-1.79-4-4-4zM15 36c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm0-18c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm9 9c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm9 9c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm0-18c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z\"/>","child_care":"<circle cx=\"29\" cy=\"21\" r=\"2.5\"/><circle cx=\"19\" cy=\"21\" r=\"2.5\"/><path d=\"M45.89 25.33c.07-.43.11-.88.11-1.33s-.04-.9-.11-1.33c-.51-3.02-2.72-5.47-5.61-6.34-1.05-2.23-2.56-4.21-4.39-5.82C32.72 7.71 28.56 6 24 6s-8.72 1.71-11.89 4.51c-1.83 1.62-3.33 3.59-4.39 5.82-2.89.86-5.1 3.31-5.61 6.34-.07.43-.11.88-.11 1.33s.04.9.11 1.33c.51 3.02 2.72 5.47 5.61 6.34 1.04 2.21 2.53 4.17 4.34 5.78C15.24 40.27 19.41 42 24 42s8.76-1.73 11.94-4.55c1.81-1.61 3.3-3.57 4.34-5.78 2.89-.87 5.1-3.32 5.61-6.34zM38 28c-.2 0-.39-.03-.57-.06-.39 1.33-.98 2.58-1.72 3.72C33.2 35.47 28.89 38 24 38s-9.2-2.53-11.7-6.34c-.75-1.14-1.33-2.39-1.72-3.72-.19.03-.38.06-.58.06-2.2 0-4-1.8-4-4s1.8-4 4-4c.2 0 .39.03.57.06.39-1.33.98-2.58 1.72-3.72C14.8 12.53 19.11 10 24 10s9.2 2.53 11.7 6.34c.75 1.14 1.33 2.39 1.72 3.72.19-.03.38-.06.58-.06 2.2 0 4 1.8 4 4s-1.8 4-4 4zm-23 0c1.52 3.53 4.97 6 9 6s7.48-2.47 9-6H15z\"/>","child_friendly":"<path d=\"M26 4v16h16c0-8.84-7.16-16-16-16zm12.65 27.78C40.74 29.07 42 25.69 42 22H12.88l-1.9-4H4v4h4.45s3.78 8.14 4.24 8.83C10.49 32.02 9 34.33 9 37c0 3.87 3.13 7 7 7 3.53 0 6.43-2.61 6.92-6h4.16c.49 3.39 3.39 6 6.92 6 3.87 0 7-3.13 7-7 0-2.08-.91-3.94-2.35-5.22zM16 40c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm18 0c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z\"/>","fitness_center":"<path d=\"M41.14 29.71L44 26.86 41.14 24 34 31.14 16.86 14 24 6.86 21.14 4l-2.85 2.86L15.43 4l-4.29 4.29-2.85-2.86-2.86 2.86 2.86 2.85L4 15.43l2.86 2.86L4 21.14 6.86 24 14 16.86 31.14 34 24 41.14 26.86 44l2.85-2.86L32.57 44l4.29-4.29 2.85 2.86 2.86-2.86-2.86-2.85L44 32.57z\"/>","free_breakfast":"<path d=\"M40 6H8v20c0 4.42 3.58 8 8 8h12c4.42 0 8-3.58 8-8v-6h4c2.21 0 4-1.79 4-4v-6c0-2.21-1.79-4-4-4zm0 10h-4v-6h4v6zM8 38h32v4H8z\"/>","golf_course":"<path d=\"M39 36c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm-5-24.15L18 4v36h-4v-3.46c-3.58.69-6 1.98-6 3.46 0 2.21 5.37 4 12 4s12-1.79 12-4c0-1.98-4.33-3.62-10-3.94v-18.1l12-6.11z\"/>","hot_tub":"<circle cx=\"14\" cy=\"12\" r=\"4\"/><path d=\"M22.3 24c-.61-.45-1.17-.93-1.64-1.44l-2.8-3.1c-.38-.42-.86-.76-1.38-1-.58-.28-1.24-.46-1.92-.46h-.06c-2.48 0-4.5 2.02-4.5 4.5V24H4v16c0 2.21 1.79 4 4 4h32c2.21 0 4-1.79 4-4V24H22.3zM14 40h-4V28h4v12zm8 0h-4V28h4v12zm8 0h-4V28h4v12zm8 0h-4V28h4v12zm-.69-28.29l-.14-.13c-1.15-1.23-1.63-2.82-1.34-4.39L36 6h-3.78l-.13.85c-.41 2.72.54 5.43 2.6 7.43l.13.12c1.15 1.23 1.64 2.83 1.35 4.4l-.22 1.2h3.83l.13-.85c.4-2.72-.54-5.43-2.6-7.44zm-8 0l-.14-.13c-1.15-1.23-1.63-2.82-1.34-4.39L28 6h-3.78l-.13.85c-.41 2.72.54 5.43 2.6 7.43l.13.12c1.15 1.23 1.64 2.83 1.35 4.4l-.22 1.2h3.83l.13-.85c.4-2.72-.54-5.43-2.6-7.44z\"/>","kitchen":"<path d=\"M36 4.02L12 4C9.79 4 8 5.79 8 8v32c0 2.21 1.79 4 4 4h24c2.21 0 4-1.79 4-4V8c0-2.21-1.79-3.98-4-3.98zM36 40H12V21.95h24V40zm0-22H12V8h24v10zm-20-8h4v6h-4zm0 14h4v10h-4z\"/>","pool":"<path d=\"M44 42c-2.22 0-3.46-.74-4.36-1.29-.74-.44-1.19-.71-2.3-.71-1.11 0-1.56.27-2.3.71-.9.54-2.14 1.29-4.36 1.29s-3.46-.74-4.36-1.29c-.74-.45-1.19-.71-2.3-.71-1.11 0-1.56.27-2.3.71-.92.55-2.16 1.29-4.38 1.29-2.22 0-3.46-.74-4.36-1.28-.74-.45-1.19-.72-2.31-.72s-1.56.27-2.31.72C7.46 41.26 6.22 42 4 42v-4c1.11 0 1.56-.27 2.31-.72.9-.54 2.14-1.28 4.36-1.28s3.46.74 4.36 1.28c.74.45 1.19.72 2.31.72 1.11 0 1.56-.27 2.3-.71.9-.54 2.14-1.29 4.36-1.29s3.46.74 4.36 1.29c.74.45 1.19.71 2.3.71s1.56-.27 2.3-.71c.9-.54 2.14-1.29 4.36-1.29s3.46.74 4.36 1.29c.76.44 1.21.71 2.32.71v4zm0-9c-2.22 0-3.46-.74-4.36-1.29-.74-.44-1.19-.71-2.3-.71-1.11 0-1.56.27-2.3.71-.9.54-2.14 1.29-4.36 1.29s-3.46-.74-4.36-1.29c-.74-.45-1.19-.71-2.3-.71-1.11 0-1.56.27-2.3.71-.92.55-2.16 1.29-4.38 1.29-2.22 0-3.46-.74-4.36-1.28-.74-.45-1.19-.72-2.31-.72s-1.56.27-2.31.72C7.46 32.26 6.22 33 4 33v-4c1.11 0 1.56-.27 2.31-.72.9-.54 2.14-1.28 4.36-1.28s3.46.74 4.36 1.28c.74.45 1.19.72 2.31.72 1.11 0 1.56-.27 2.3-.71.9-.54 2.14-1.29 4.36-1.29s3.46.74 4.36 1.29c.74.45 1.19.71 2.3.71s1.56-.27 2.3-.71c.9-.54 2.14-1.29 4.36-1.29s3.46.74 4.36 1.29c.76.44 1.21.71 2.32.71v4zm-26.66-9c1.11 0 1.56-.27 2.3-.71.9-.54 2.14-1.29 4.36-1.29s3.46.74 4.36 1.29c.74.45 1.19.71 2.3.71s1.56-.27 2.3-.71c.24-.15.51-.3.81-.46L20.96 10C17.85 6.89 15 5.98 10 6v5c3.64-.02 5.77.78 8 3l2 2-6.5 6.5c.62.24 1.12.53 1.54.78.74.45 1.19.72 2.3.72z\"/><circle cx=\"33\" cy=\"11\" r=\"5\"/>","room_service":"<path d=\"M4 34h40v4H4zm23.67-18.42c.21-.48.33-1.02.33-1.58 0-2.21-1.79-4-4-4s-4 1.79-4 4c0 .56.12 1.1.33 1.58C12.5 17.2 6.54 23.86 6 32h36c-.54-8.14-6.5-14.8-14.33-16.42z\"/>","smoke_free":"<path d=\"M4 12l13.99 14H4v6h19.99l13.99 14 2.52-2.5-34-34zm37 14h3v6h-3zm-5 0h3v6h-3zm1.7-16.24c1.23-1.21 2-2.9 2-4.76h-3c0 2.04-1.66 3.7-3.7 3.7v3c4.49 0 8 3.65 8 8.14V24h3v-4.17c0-4.45-2.56-8.29-6.3-10.07zM29 17.39h3.06c2.09 0 3.94 1.48 3.94 4.11V24h3v-3.18c0-3.61-3.2-6.32-6.94-6.32H29c-2.04 0-3.7-1.96-3.7-4S26.96 7 29 7V4c-3.69 0-6.7 3-6.7 6.7s3.01 6.69 6.7 6.69zm5 14.46V26h-5.85z\"/>","smoking_rooms":"<path d=\"M4 32h30v6H4zm37 0h3v6h-3zm-5 0h3v6h-3zm1.7-16.54c1.23-1.21 2-2.9 2-4.76C39.7 7 36.69 4 33 4v3c2.04 0 3.7 1.66 3.7 3.7s-1.66 3.7-3.7 3.7v3c4.49 0 8 3.65 8 8.14V30h3v-4.47c0-4.45-2.56-8.29-6.3-10.07zm-5.64 4.93H29v.01c-2.04 0-3.7-1.96-3.7-4s1.66-3.5 3.7-3.5v-3c-3.69 0-6.7 3-6.7 6.7s3 6.7 6.7 6.7v-.01h3.06c2.09 0 3.94 1.48 3.94 4.11V30h3v-3.29c0-3.6-3.2-6.32-6.94-6.32z\"/>","spa":"<path fill=\"#607D8B\" d=\"M17.09 24c-2.14-1.43-4.5-2.55-7.05-3.22 2.55.67 4.91 1.79 7.05 3.22zm20.87-3.22c-2.58.68-4.97 1.82-7.14 3.27 2.16-1.45 4.55-2.59 7.14-3.27z\"/><path d=\"M30.99 19.27C30.62 13.69 28.36 8.24 24.12 4c-4.28 4.28-6.64 9.72-7.1 15.27 2.56 1.37 4.93 3.12 6.98 5.25 2.05-2.13 4.42-3.89 6.99-5.25zm-13 5.3c-.28-.21-.6-.38-.89-.57.29.19.6.36.89.57zm12.83-.52c-.26.18-.55.33-.8.51.25-.18.53-.33.8-.51zM24 30.91C19.7 24.34 12.35 20 4 20c0 10.63 6.72 19.65 16.07 22.97 1.27.45 2.58.79 3.93 1.03 1.35-.23 2.66-.57 3.93-1.03C37.28 39.65 44 30.63 44 20c-8.35 0-15.7 4.34-20 10.91z\"/>","cake":"<path d=\"M24 12c2.21 0 4-1.79 4-4 0-.75-.21-1.46-.57-2.06L24 0l-3.43 5.94C20.21 6.54 20 7.25 20 8c0 2.21 1.79 4 4 4zm9.19 19.97l-2.15-2.15-2.16 2.15c-2.61 2.61-7.17 2.61-9.78 0l-2.15-2.15-2.16 2.15C13.5 33.28 11.77 34 9.92 34c-1.45 0-2.8-.46-3.92-1.23V42c0 1.1.9 2 2 2h32c1.1 0 2-.9 2-2v-9.23c-1.12.77-2.46 1.23-3.92 1.23-1.85 0-3.58-.72-4.89-2.03zM36 18H26v-4h-4v4H12c-3.31 0-6 2.69-6 6v3.08C6 29.24 7.76 31 9.92 31c1.05 0 2.03-.41 2.77-1.15l4.28-4.27 4.27 4.26c1.48 1.48 4.06 1.48 5.54 0l4.28-4.26 4.27 4.26c.74.74 1.72 1.15 2.77 1.15 2.16 0 3.92-1.76 3.92-3.92V24c-.02-3.31-2.71-6-6.02-6z\"/>","domain":"<path d=\"M24 14V6H4v36h40V14H24zM12 38H8v-4h4v4zm0-8H8v-4h4v4zm0-8H8v-4h4v4zm0-8H8v-4h4v4zm8 24h-4v-4h4v4zm0-8h-4v-4h4v4zm0-8h-4v-4h4v4zm0-8h-4v-4h4v4zm20 24H24v-4h4v-4h-4v-4h4v-4h-4v-4h16v20zm-4-16h-4v4h4v-4zm0 8h-4v4h4v-4z\"/>","group":"<path d=\"M32 22c3.31 0 5.98-2.69 5.98-6s-2.67-6-5.98-6c-3.31 0-6 2.69-6 6s2.69 6 6 6zm-16 0c3.31 0 5.98-2.69 5.98-6s-2.67-6-5.98-6c-3.31 0-6 2.69-6 6s2.69 6 6 6zm0 4c-4.67 0-14 2.34-14 7v5h28v-5c0-4.66-9.33-7-14-7zm16 0c-.58 0-1.23.04-1.93.11C32.39 27.78 34 30.03 34 33v5h12v-5c0-4.66-9.33-7-14-7z\"/>","group_add":"<path d=\"M16 20h-6v-6H6v6H0v4h6v6h4v-6h6v-4zm20 2c3.31 0 5.98-2.69 5.98-6s-2.67-6-5.98-6c-.64 0-1.25.1-1.83.29 1.13 1.62 1.81 3.59 1.81 5.71s-.68 4.09-1.81 5.71c.58.19 1.19.29 1.83.29zm-10 0c3.31 0 5.98-2.69 5.98-6s-2.67-6-5.98-6c-3.31 0-6 2.69-6 6s2.69 6 6 6zm13.24 4.32C40.9 27.77 42 29.64 42 32v4h6v-4c0-3.08-4.75-4.97-8.76-5.68zM26 26c-4 0-12 2-12 6v4h24v-4c0-4-8-6-12-6z\"/>","location_city":"<path d=\"M30 22V10l-6-6-6 6v4H6v28h36V22H30zM14 38h-4v-4h4v4zm0-8h-4v-4h4v4zm0-8h-4v-4h4v4zm12 16h-4v-4h4v4zm0-8h-4v-4h4v4zm0-8h-4v-4h4v4zm0-8h-4v-4h4v4zm12 24h-4v-4h4v4zm0-8h-4v-4h4v4z\"/>","mood":"<path d=\"M23.99 4C12.94 4 4 12.95 4 24s8.94 20 19.99 20C35.04 44 44 35.05 44 24S35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16zm7-18c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3zm-14 0c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3zm7 13c4.66 0 8.61-2.91 10.21-7H13.79c1.6 4.09 5.55 7 10.21 7z\"/>","mood_bad":"<path d=\"M23.99 4C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16zm7-18c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3zm-14 0c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3zm17.21 13c-1.6-4.09-5.55-7-10.21-7s-8.61 2.91-10.21 7\"/>","notifications":"<path fill=\"#010101\" d=\"M24 44c2.21 0 4-1.79 4-4h-8c0 2.21 1.79 4 4 4zm12-12V22c0-6.15-3.27-11.28-9-12.64V8c0-1.66-1.34-3-3-3s-3 1.34-3 3v1.36c-5.73 1.36-9 6.49-9 12.64v10l-4 4v2h32v-2l-4-4z\"/>","notifications_active":"<path fill=\"#010101\" d=\"M15.16 8.16L12.3 5.3C7.51 8.95 4.35 14.59 4.05 21h4c.31-5.3 3.04-9.94 7.11-12.84zM39.95 21h4c-.3-6.41-3.46-12.05-8.25-15.7l-2.85 2.85c4.06 2.91 6.79 7.55 7.1 12.85zM36 22c0-6.15-3.27-11.28-9-12.64V8c0-1.66-1.34-3-3-3s-3 1.34-3 3v1.36c-5.73 1.36-9 6.49-9 12.64v10l-4 4v2h32v-2l-4-4V22zM24 44c.28 0 .55-.03.81-.08 1.3-.27 2.37-1.17 2.88-2.36.2-.48.31-1 .31-1.56h-8c0 2.21 1.79 4 4 4z\"/>","notifications_none":"<path fill=\"#010101\" d=\"M24 44c2.21 0 4-1.79 4-4h-8c0 2.21 1.79 4 4 4zm12-12V22c0-6.15-3.27-11.28-9-12.64V8c0-1.66-1.34-3-3-3s-3 1.34-3 3v1.36c-5.73 1.36-9 6.49-9 12.64v10l-4 4v2h32v-2l-4-4zm-4 2H16V22c0-4.97 3.03-9 8-9s8 4.03 8 9v12z\"/>","notifications_off":"<path fill=\"#010101\" d=\"M40 37.39L15.68 12.3l-5.13-5.29L8 9.55l5.6 5.6.01.01C12.56 17.14 12 19.48 12 22v10l-4 4v2h27.46l4 4L42 39.45l-2-2.06zM24 44c2.21 0 4-1.79 4-4h-8c0 2.21 1.79 4 4 4zm12-14.64V22c0-6.15-3.27-11.28-9-12.64V8c0-1.66-1.34-3-3-3s-3 1.34-3 3v1.36c-.29.07-.57.15-.85.24-.21.07-.41.14-.61.22 0 0-.01 0-.01.01-.01 0-.02.01-.03.01-.46.18-.91.39-1.35.62-.01 0-.02.01-.03.01L36 29.36z\"/>","notifications_paused":"<path fill=\"#010101\" d=\"M24 44c2.21 0 4-1.79 4-4h-8c0 2.21 1.79 4 4 4zm12-12V22c0-6.15-3.27-11.28-9-12.64V8c0-1.66-1.34-3-3-3s-3 1.34-3 3v1.36c-5.73 1.36-9 6.49-9 12.64v10l-4 4v2h32v-2l-4-4zm-7-12.4l-5.6 6.8H29V30H19v-3.6l5.6-6.8H19V16h10v3.6z\"/>","pages":"<path d=\"M6 10v12h10l-2-8 8 2V6H10c-2.21 0-4 1.79-4 4zm10 16H6v12c0 2.21 1.79 4 4 4h12V32l-8 2 2-8zm18 8l-8-2v10h12c2.21 0 4-1.79 4-4V26H32l2 8zm4-28H26v10l8-2-2 8h10V10c0-2.21-1.79-4-4-4z\"/>","party_mode":"<path d=\"M40 8h-6.34L30 4H18l-3.66 4H8c-2.21 0-4 1.79-4 4v24c0 2.21 1.79 4 4 4h32c2.21 0 4-1.79 4-4V12c0-2.21-1.79-4-4-4zm-16 6c3.26 0 6.13 1.59 7.96 4H24c-3.31 0-6 2.69-6 6 0 .71.14 1.37.37 2H14.2c-.13-.65-.2-1.31-.2-2 0-5.52 4.48-10 10-10zm0 20c-3.26 0-6.13-1.58-7.95-4H24c3.31 0 6-2.69 6-6 0-.7-.14-1.37-.37-2h4.17c.13.65.2 1.31.2 2 0 5.52-4.48 10-10 10z\"/>","people":"<path d=\"M32 22c3.31 0 5.98-2.69 5.98-6s-2.67-6-5.98-6c-3.31 0-6 2.69-6 6s2.69 6 6 6zm-16 0c3.31 0 5.98-2.69 5.98-6s-2.67-6-5.98-6c-3.31 0-6 2.69-6 6s2.69 6 6 6zm0 4c-4.67 0-14 2.34-14 7v5h28v-5c0-4.66-9.33-7-14-7zm16 0c-.58 0-1.23.04-1.93.11C32.39 27.78 34 30.03 34 33v5h12v-5c0-4.66-9.33-7-14-7z\"/>","people_outline":"<path d=\"M33 26c-2.41 0-6.15.67-9 2.01-2.85-1.34-6.59-2.01-9-2.01-4.33 0-13 2.17-13 6.5V38h44v-5.5c0-4.33-8.67-6.5-13-6.5zm-8 9H5v-2.5c0-1.07 5.12-3.5 10-3.5s10 2.43 10 3.5V35zm18 0H28v-2.5c0-.91-.4-1.72-1.04-2.44C28.73 29.46 30.89 29 33 29c4.88 0 10 2.43 10 3.5V35zM15 24c3.87 0 7-3.14 7-7s-3.13-7-7-7c-3.86 0-7 3.14-7 7s3.14 7 7 7zm0-11c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4zm18 11c3.87 0 7-3.14 7-7s-3.13-7-7-7c-3.86 0-7 3.14-7 7s3.14 7 7 7zm0-11c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4z\"/>","person":"<path d=\"M24 24c4.42 0 8-3.59 8-8 0-4.42-3.58-8-8-8s-8 3.58-8 8c0 4.41 3.58 8 8 8zm0 4c-5.33 0-16 2.67-16 8v4h32v-4c0-5.33-10.67-8-16-8z\"/>","person_add":"<path d=\"M30 24c4.42 0 8-3.59 8-8 0-4.42-3.58-8-8-8s-8 3.58-8 8c0 4.41 3.58 8 8 8zm-18-4v-6H8v6H2v4h6v6h4v-6h6v-4h-6zm18 8c-5.33 0-16 2.67-16 8v4h32v-4c0-5.33-10.67-8-16-8z\"/>","person_outline":"<path d=\"M24 11.8c2.32 0 4.2 1.88 4.2 4.2s-1.88 4.2-4.2 4.2-4.2-1.88-4.2-4.2 1.88-4.2 4.2-4.2m0 18c5.95 0 12.2 2.91 12.2 4.2v2.2H11.8V34c0-1.29 6.25-4.2 12.2-4.2M24 8c-4.42 0-8 3.58-8 8 0 4.41 3.58 8 8 8s8-3.59 8-8c0-4.42-3.58-8-8-8zm0 18c-5.33 0-16 2.67-16 8v6h32v-6c0-5.33-10.67-8-16-8z\"/>","plus_one":"<path d=\"M20 16h-4v8H8v4h8v8h4v-8h8v-4h-8zm9-3.84v3.64l5-1V36h4V10z\"/>","poll":"<path d=\"M38 6H10c-2.21 0-4 1.79-4 4v28c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4V10c0-2.21-1.79-4-4-4zM18 34h-4V20h4v14zm8 0h-4V14h4v20zm8 0h-4v-8h4v8z\"/>","public":"<path d=\"M24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm-2 35.86C14.11 38.88 8 32.16 8 24c0-1.23.15-2.43.42-3.58L18 30v2c0 2.21 1.79 4 4 4v3.86zm13.79-5.07C35.28 33.17 33.78 32 32 32h-2v-6c0-1.1-.9-2-2-2H16v-4h4c1.1 0 2-.9 2-2v-4h4c2.21 0 4-1.79 4-4v-.83c5.86 2.37 10 8.11 10 14.83 0 4.16-1.6 7.94-4.21 10.79z\"/>","school":"<path d=\"M10 26.36v8L24 42l14-7.64v-8L24 34l-14-7.64zM24 6L2 18l22 12 18-9.82V34h4V18L24 6z\"/>","sentiment_dissatisfied":"<path d=\"M31 22c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3zm-14 0c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3zm6.98-18C12.94 4 4 12.96 4 24s8.94 20 19.98 20C35.04 44 44 35.04 44 24S35.04 4 23.98 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16zm0-12c-4.66 0-8.64 2.91-10.24 7h3.35c1.39-2.38 3.94-4 6.89-4s5.5 1.62 6.89 4h3.35c-1.6-4.09-5.58-7-10.24-7z\"/>","sentiment_neutral":"<path d=\"M18 28h12v3H18zm13-12c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm-11 3c0-1.66-1.34-3-3-3s-3 1.34-3 3 1.34 3 3 3 3-1.34 3-3zm3.98-15C12.94 4 4 12.96 4 24s8.94 20 19.98 20C35.04 44 44 35.04 44 24S35.04 4 23.98 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z\"/>","sentiment_satisfied":"<path d=\"M31 22c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3zm-14 0c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3zm6.98-18C12.94 4 4 12.96 4 24s8.94 20 19.98 20C35.04 44 44 35.04 44 24S35.04 4 23.98 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16zm0-8c-2.95 0-5.5-1.62-6.89-4h-3.35c1.6 4.09 5.58 7 10.24 7s8.64-2.91 10.24-7h-3.35c-1.39 2.38-3.94 4-6.89 4z\"/>","sentiment_very_dissatisfied":"<path d=\"M23.99 4C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16zm8.36-24.49l-2.12 2.13-2.12-2.13L26 17.64l2.12 2.12L26 21.88 28.12 24l2.12-2.12L32.36 24l2.13-2.12-2.13-2.12 2.13-2.12zM15.64 24l2.12-2.12L19.88 24 22 21.88l-2.12-2.12L22 17.64l-2.12-2.13-2.12 2.13-2.12-2.13-2.13 2.13 2.13 2.12-2.13 2.12zM24 28c-4.66 0-8.62 2.92-10.22 7h20.44c-1.6-4.08-5.56-7-10.22-7z\"/>","sentiment_very_satisfied":"<path d=\"M23.99 4C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16zm2-20.12L28.12 22l2.12-2.12L32.36 22l2.13-2.12-4.25-4.24zm-8.24 0L19.88 22 22 19.88l-4.24-4.24-4.25 4.24L15.64 22zM24 35c4.66 0 8.62-2.92 10.22-7H13.78c1.6 4.08 5.56 7 10.22 7z\"/>","share":"<path d=\"M36 32.17c-1.52 0-2.89.59-3.93 1.54L17.82 25.4c.11-.45.18-.92.18-1.4s-.07-.95-.18-1.4l14.1-8.23c1.07 1 2.5 1.62 4.08 1.62 3.31 0 6-2.69 6-6s-2.69-6-6-6-6 2.69-6 6c0 .48.07.95.18 1.4l-14.1 8.23c-1.07-1-2.5-1.62-4.08-1.62-3.31 0-6 2.69-6 6s2.69 6 6 6c1.58 0 3.01-.62 4.08-1.62l14.25 8.31c-.1.42-.16.86-.16 1.31 0 3.22 2.61 5.83 5.83 5.83s5.83-2.61 5.83-5.83-2.61-5.83-5.83-5.83z\"/>","whatshot":"<path d=\"M27 1.34s1.48 5.3 1.48 9.6c0 4.12-2.7 7.47-6.83 7.47s-7.25-3.34-7.25-7.47l.05-.72C10.43 15.03 8 21.23 8 28c0 8.84 7.16 16 16 16s16-7.16 16-16c0-10.79-5.19-20.41-13-26.66zM23.42 38c-3.56 0-6.45-2.81-6.45-6.28 0-3.25 2.09-5.53 5.63-6.24s7.2-2.41 9.23-5.15c.78 2.58 1.19 5.3 1.19 8.07 0 5.29-4.3 9.6-9.6 9.6z\"/>","check_box":"<path d=\"M38 6H10c-2.21 0-4 1.79-4 4v28c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4V10c0-2.21-1.79-4-4-4zM20 34L10 24l2.83-2.83L20 28.34l15.17-15.17L38 16 20 34z\"/>","check_box_outline_blank":"<path d=\"M38 10v28H10V10h28m0-4H10c-2.21 0-4 1.79-4 4v28c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4V10c0-2.21-1.79-4-4-4z\"/>","radio_button_checked":"<path d=\"M24 14c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10zm0-10C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm0 36c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z\"/>","radio_button_unchecked":"<path d=\"M24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm0 36c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z\"/>","star_half":"<path fill=\"#010101\" d=\"M44 18.48l-14.38-1.24L24 4l-5.62 13.26L4 18.48l10.92 9.46L11.64 42 24 34.54 36.36 42 33.1 27.94 44 18.48zM24 30.8V12.2l3.42 8.08 8.76.76-6.64 5.76 2 8.56L24 30.8z\"/>"}

/***/ }),
/* 217 */
/***/ (function(module, exports) {

module.exports = {"bottom_arrow":"<path d=\"M486.562 24.33c0-13.435 10.895-24.33 24.33-24.33v0c13.436 0 24.33 10.895 24.33 24.33v968.55c0 13.435-10.893 24.329-24.33 24.33v0c-13.435 0-24.33-10.895-24.33-24.33v-968.55z\"  /><path d=\"M975.318 497.261c9.501-9.503 24.908-9.503 34.411 0v0c9.501 9.499 9.501 24.906 0 34.406l-478.417 478.417c-9.501 9.501-24.908 9.501-34.409 0.002v0c-9.501-9.503-9.501-24.91 0-34.411l478.415-478.415z\"  /><path d=\"M13.269 531.667c-9.501-9.499-9.501-24.906 0-34.411v0c9.501-9.499 24.908-9.499 34.408 0.004l478.419 478.415c9.501 9.501 9.501 24.908 0.002 34.409v0c-9.503 9.501-24.91 9.501-34.411 0l-478.419-478.417z\"  />","bottom":"<path d=\"M1017.723 271.105l-505.003 519.41-505.003-519.41 39.212-40.355 465.791 479.119 465.729-479.055 39.273 40.291zM1017.723 271.105z\" />","top_arrow":"<path d=\"M537.438208 999.66976c0 13.43488-10.89536 24.33024-24.33024 24.33024l0 0c-13.436928 0-24.33024-10.89536-24.33024-24.33024L488.777728 31.11936c0-13.43488 10.893312-24.33024 24.33024-24.33024l0 0c13.43488 0 24.33024 10.89536 24.33024 24.33024L537.438208 999.66976z\"  /><path d=\"M48.683008 526.739456c-9.500672 9.50272-24.907776 9.50272-34.410496 0l0 0c-9.500672-9.498624-9.500672-24.905728 0-34.4064L492.689408 13.91616c9.500672-9.500672 24.907776-9.500672 34.408448-0.002048l0 0c9.500672 9.50272 9.500672 24.909824 0 34.410496L48.683008 526.739456z\"  /><path d=\"M1010.731008 492.333056c9.500672 9.498624 9.500672 24.905728 0 34.410496l0 0c-9.500672 9.498624-24.907776 9.498624-34.408448-0.004096L497.903616 48.324608c-9.500672-9.500672-9.500672-24.907776-0.002048-34.408448l0 0c9.50272-9.500672 24.909824-9.500672 34.410496 0L1010.731008 492.333056z\"  />","top":"<path d=\"M6.277472 752.895489l505.002632-519.408737 505.002632 519.408737-39.21207 40.35408L511.280104 314.131467 45.55094 793.186124 6.277472 752.895489 6.277472 752.895489zM6.277472 752.895489\" />","next":"<path d=\"M290.816 956.416c-9.216 9.216-9.216 24.064 0 32.768 9.216 9.216 24.064 9.216 32.768 0l437.248-437.248c9.216-9.216 9.216-24.064 0-32.768L323.584 81.408c-9.216-9.216-24.064-9.216-32.768 0-9.216 9.216-9.216 24.064 0 32.768l420.864 420.864-420.864 421.376z\" />","return":"<path d=\"M340.154 535.273l421.05-421.05c9.077-9.077 9.077-23.832 0-32.908-9.076-9.076-23.83-9.076-32.907 0l-437.481 437.48c-9.076 9.077-9.076 23.832 0 32.908l437.48 437.481c9.077 9.076 23.832 9.076 32.908 0 9.077-9.076 9.077-23.831 0-32.908l-421.05-421.003z\" />","verification":"<path d=\"M916.67 268.512c-36.046-2.506-72.222-9.261-103.277-19.2-10.048-3.006-20.115-6.363-30.25-9.981-21.336-6.276-50.365-18.742-83.316-36.504-0.348-0.151-0.697-0.37-1.045-0.544a761.951 761.951 0 0 1-23.754-13.382c-10.854-6.233-21.62-12.879-32.385-19.787-0.413-0.305-0.829-0.545-1.22-0.83a662.23 662.23 0 0 1-23.057-15.473c-4.97-3.4-9.938-7.016-14.906-10.635-3.748-2.745-7.498-5.317-11.224-8.15-27.351-20.42-54.374-43.348-79.676-68.04-25.302 24.692-52.303 47.62-79.675 68.04-3.727 2.833-7.475 5.405-11.224 8.15-4.968 3.619-9.937 7.236-14.907 10.635a666.123 666.123 0 0 1-23.057 15.474c-0.393 0.283-0.807 0.524-1.22 0.829-10.766 6.908-21.51 13.555-32.384 19.787a765.257 765.257 0 0 1-23.755 13.382c-0.349 0.173-0.698 0.392-1.045 0.544-32.951 17.762-61.98 30.228-83.337 36.504-10.112 3.618-20.159 6.975-30.206 9.981-31.077 9.939-67.254 16.694-103.277 19.2h-0.087c1.046 16.15 2.114 37.55 3.379 60.738 0.218 0 0.435 0 0.674-0.044 6.082 86.518 23.429 209.564 49.58 281.874 1.177 3.137 2.18 6.45 3.357 9.567 0.544 1.46 1.176 2.834 1.744 4.293C229.753 786.558 338.5 904.176 469.216 947.283v0.458c17.304 5.689 31.862 9.218 43.346 11.418 11.487-2.222 26.042-5.73 43.347-11.418v-0.458c130.715-43.107 239.463-160.725 302.098-322.343 0.566-1.481 1.197-2.833 1.764-4.293 1.155-3.117 2.158-6.429 3.335-9.567 26.152-72.31 43.5-195.355 49.58-281.874 0.239 0.044 0.478 0.044 0.676 0.044 1.262-23.188 2.33-44.59 3.398-60.738h-0.09z m-47.27 41.779l-0.5 9.479a39.184 39.184 0 0 0-1.024 6.603c-5.645 80.525-21.554 199.887-47.182 270.65-0.698 1.92-1.35 3.88-2.004 5.84-0.437 1.2-0.83 2.442-1.438 4.031a59.64 59.64 0 0 0-1.395 3.4c-58.232 150.241-158.35 258.446-274.726 296.823a46.101 46.101 0 0 0-5.447 2.18 300.243 300.243 0 0 1-23.144 6.298c-7.432-1.722-15.126-3.815-23.014-6.253a45.843 45.843 0 0 0-5.536-2.225c-116.377-38.377-216.495-146.58-274.618-296.56-0.457-1.2-0.937-2.354-1.678-4.142-0.436-1.175-0.83-2.396-1.265-3.595-0.654-1.961-1.307-3.922-1.918-5.558-25.694-71.002-41.602-190.385-47.247-270.889a42.54 42.54 0 0 0-1.046-6.625l-0.48-9.284c-0.086-1.482-0.173-2.965-0.26-4.424 24.582-3.792 48.293-9.284 69.825-16.171 10.112-3.03 20.354-6.429 31.339-10.33 25.15-7.562 56.313-21.161 90.267-39.423 0.61-0.305 1.177-0.61 1.657-0.895a802.048 802.048 0 0 0 24.757-13.926c10.68-6.123 21.924-12.989 34.39-21.008 0.348-0.24 0.96-0.61 1.307-0.85 8.195-5.295 16.345-10.744 24.06-16.17 4.533-3.117 9.066-6.386 13.621-9.676l2.44-1.766 4.033-2.899c2.571-1.853 5.143-3.683 7.518-5.492a845.048 845.048 0 0 0 51.868-41.995c16.672 14.601 33.955 28.635 51.671 41.864 2.573 1.94 5.143 3.771 7.694 5.602l4.272 3.073 1.547 1.11c4.751 3.466 9.546 6.931 13.905 9.916 8.106 5.689 16.28 11.137 23.69 15.93l2.047 1.331c12.356 7.954 23.625 14.841 33.998 20.77a810.252 810.252 0 0 0 24.954 14.077c0.413 0.217 0.958 0.523 1.547 0.807 34.086 18.372 65.379 32.035 90.593 39.62 11.007 3.9 21.226 7.3 30.533 10.068 22.077 7.06 45.963 12.618 70.632 16.432-0.09 1.417-0.177 2.813-0.243 4.252zM710.288 412.108L476.47 651.703 356.781 529.029c-8.303-8.477-21.728-8.477-30.01 0-8.302 8.522-8.302 22.272 0 30.77l134.682 138.018c4.162 4.271 9.59 6.384 15.016 6.384s10.874-2.113 15.014-6.384L740.297 442.88c8.303-8.5 8.303-22.274 0-30.772-8.303-8.5-21.726-8.5-30.01 0z\" />","setup":"<path d=\"M411.153 1024c-24.38 0-43.886-17.067-46.324-41.448l-17.066-117.028c-21.943-9.753-43.886-21.943-65.829-36.572l-112.152 43.886c-21.943 7.314-48.762 0-60.953-21.943L8.867 682.667c-12.19-21.943-7.314-48.762 12.191-63.39l95.086-73.144a366.629 366.629 0 0 1 0-73.143l-95.086-73.142C1.553 385.219-3.323 358.4 8.868 336.458l99.961-165.791c12.19-21.943 36.572-29.257 60.953-21.943l109.714 46.324c19.505-14.629 41.448-26.82 65.829-36.572l17.066-114.59c4.876-24.381 24.381-41.448 48.762-41.448h199.924c24.381 0 43.886 17.067 48.762 41.448l17.067 117.028c21.942 9.753 43.885 21.943 65.828 36.572L854.887 153.6c21.942-7.314 48.761 0 60.952 21.943L1015.8 343.77c12.19 21.943 7.314 48.762-12.19 63.39l-95.086 73.144a366.629 366.629 0 0 1 0 73.143l95.085 73.142c19.505 14.629 24.381 41.448 12.19 63.391L913.4 853.333c-12.19 21.943-36.57 29.257-60.952 21.943l-112.152-46.324c-19.505 14.629-41.448 26.82-65.829 36.572L659.84 982.552c-4.876 24.381-24.381 41.448-48.762 41.448H411.153z m-126.78-246.248c4.875 0 9.752 2.438 14.628 4.877 24.38 17.066 51.2 34.133 78.019 43.885 7.314 2.438 14.628 9.753 14.628 19.505l19.505 129.22h199.924l19.505-129.22c2.438-7.314 7.314-14.629 14.628-19.505 29.257-12.19 53.638-26.819 78.02-43.885 7.314-4.877 14.628-7.315 24.38-2.439l124.343 48.762 99.962-168.228-104.838-80.457c-7.314-4.877-9.752-14.629-9.752-21.943 4.876-29.257 4.876-58.514 0-87.772-2.438-9.752 2.438-17.066 9.752-21.942l104.838-80.458-99.962-173.104L747.61 243.81c-7.314 2.438-17.066 2.438-24.38-2.439-24.382-19.504-51.2-34.133-78.02-43.885-7.314-2.438-14.628-9.753-14.628-19.505l-19.505-129.22H411.153l-19.505 129.22c-2.438 7.314-7.314 14.629-14.628 19.505-29.257 12.19-53.638 26.819-78.02 43.885-7.313 4.877-14.628 7.315-24.38 2.439l-124.343-48.762-99.962 170.666 104.838 80.457c7.314 4.877 9.753 14.629 9.753 21.943-4.877 29.257-4.877 58.515 0 87.772 2.438 9.752-2.439 17.066-9.753 21.943L50.315 660.724l99.962 168.228L274.62 780.19c2.438-2.438 4.876-2.438 9.752-2.438z m229.18-70.704c-2.438 0-2.438 0 0 0-109.714-2.438-195.047-92.648-192.61-199.924 2.439-107.276 92.648-192.61 199.924-190.172C625.706 319.39 711.04 407.162 711.04 512c-2.438 107.276-90.21 195.048-197.486 195.048z m-2.438-48.762c82.895 0 148.724-65.829 148.724-146.286 0-78.019-63.39-143.848-143.848-146.286-80.457-2.438-148.724 63.39-148.724 143.848 0 80.457 63.39 146.286 143.848 148.724z\" />","password":"<path d=\"M757.024 894.685H266.975c-54.737 0-99.113-44.374-99.113-99.114V552.058c0-54.737 44.376-99.113 99.113-99.113v-82.286c0-136.846 108.178-241.345 245.025-241.345S757.025 233.812 757.025 370.66v82.286c54.737 0 99.113 44.376 99.113 99.113v243.513c0 54.741-44.376 99.114-99.114 99.114z m-42.526-524.026c0-109.476-93.02-198.818-202.498-198.818s-202.498 89.343-202.498 198.818v82.286h404.997v-82.286z m99.113 181.4c0-27.368-29.217-56.588-56.587-56.588H266.975c-27.37 0-56.587 29.219-56.587 56.587v243.513c0 27.37 29.217 59.348 56.587 59.348h490.049c27.37 0 56.587-31.977 56.587-59.348V552.058zM524.39 797.692h-24.778c-6.841 0-12.39-5.549-12.39-12.39v-204.62c0-6.844 5.549-12.389 12.39-12.389h24.778c6.841 0 12.39 5.545 12.39 12.39v204.62c0 6.841-5.549 12.389-12.39 12.389z\" />","mobile_phone":"<path d=\"M687.843 965.896h-351.69c-50.411 0-91.425-41.943-91.425-93.5V151.603c0-51.556 41.014-93.5 91.425-93.5h351.688c50.416 0 91.432 41.944 91.432 93.5v720.793c0.001 51.557-41.014 93.5-91.43 93.5zM284.248 779.375l0.026 92.484c0 15.326 5.905 29.221 16.628 39.123 10.544 9.738 24.984 15.102 40.657 15.102h340.869c15.68 0 30.121-5.359 40.668-15.102 10.723-9.902 16.629-23.795 16.629-39.121l0.025-92.486H284.248z m228.212 106.08c-21.346 0-38.709-17.672-38.709-39.395s17.363-39.396 38.709-39.396 38.709 17.674 38.709 39.396-17.363 39.395-38.709 39.395zM283.329 737.619h457.342l-0.029-579.33c0-32.275-25.814-58.532-57.545-58.532H340.893c-31.725 0-57.534 26.257-57.534 58.531l-0.03 579.331z\" />","scan_code":"<path d=\"M954.484 554.804H70.2c-19.021 0-34.454-15.452-34.454-34.479 0-19.026 15.435-34.466 34.454-34.466h884.284c19.014 0 34.454 15.44 34.454 34.466 0 19.027-15.44 34.479-34.454 34.479m-45.933-201.892c-19.014 0-34.454-15.427-34.454-34.479V169.062H724.8c-19.013 0-34.453-15.445-34.453-34.473 0-19.027 15.441-34.473 34.453-34.473h183.75c19.014 0 34.454 15.445 34.454 34.473v183.843c0 19.053-15.44 34.479-34.454 34.479m-608.665-183.85H150.588v149.371c0 19.052-15.435 34.479-34.454 34.479-19.013 0-34.453-15.427-34.453-34.479V134.59c0-19.027 15.44-34.473 34.453-34.473h183.75c19.014 0 34.454 15.445 34.454 34.473 0 19.026-15.44 34.471-34.454 34.471m-183.75 523.621c19.021 0 34.454 15.453 34.454 34.479v149.371h149.296c19.014 0 34.454 15.441 34.454 34.479 0 19.026-15.44 34.466-34.454 34.466H116.135c-19.013 0-34.453-15.441-34.453-34.466V727.16c0-19.026 15.44-34.479 34.453-34.479M724.8 876.531h149.296V727.16c0-19.026 15.441-34.479 34.454-34.479s34.454 15.453 34.454 34.479v183.851c0 19.026-15.441 34.466-34.454 34.466H724.801c-19.013 0-34.453-15.441-34.453-34.466-0.001-19.04 15.44-34.479 34.453-34.479z\" />","star_border":"<path d=\"M772.9 939.7c-4.2 0-8.4-1-12.2-3L512 806 263.3 936.7c-8.8 4.6-19.5 3.9-27.6-2-8.1-5.9-12.1-15.8-10.4-25.7l47.5-276.9L71.6 436c-7.2-7-9.7-17.4-6.6-26.9 3.1-9.5 11.3-16.4 21.2-17.9l278-40.4L488.4 98.9c4.4-9 13.5-14.6 23.5-14.6S531 90 535.4 98.9l124.3 251.9 278 40.4c9.9 1.4 18.1 8.4 21.2 17.9 3.1 9.5 0.5 19.9-6.6 26.9l-201 196.1L798.7 909c1.7 9.8-2.4 19.8-10.4 25.7-4.6 3.3-10 5-15.4 5zM512 750c4.2 0 8.4 1 12.2 3L738 865.5l-40.8-238.1c-1.4-8.5 1.4-17.2 7.5-23.2l173-168.6-239-34.7c-8.6-1.2-15.9-6.6-19.8-14.4L512 169.9 405.1 386.5c-3.8 7.7-11.2 13.1-19.8 14.4l-239 34.7 173 168.6c6.2 6 9 14.7 7.5 23.2L286 865.5l213.8-112.4c3.8-2.1 8-3.1 12.2-3.1z\" />","close":"<path d=\"M557.312 513.248l265.28-263.904c12.544-12.48 12.608-32.704 0.128-45.248-12.512-12.576-32.704-12.608-45.248-0.128L512.128 467.904l-263.04-263.84c-12.448-12.48-32.704-12.544-45.248-0.064-12.512 12.48-12.544 32.736-0.064 45.28l262.976 263.776L201.6 776.8c-12.544 12.48-12.608 32.704-0.128 45.248a31.937 31.937 0 0 0 22.688 9.44c8.16 0 16.32-3.104 22.56-9.312l265.216-263.808 265.44 266.24c6.24 6.272 14.432 9.408 22.656 9.408a31.94 31.94 0 0 0 22.592-9.344c12.512-12.48 12.544-32.704 0.064-45.248L557.312 513.248z\" />","add":"<path d=\"M863.328 482.56l-317.344-1.12V162.816c0-17.664-14.336-32-32-32s-32 14.336-32 32v318.4l-322.368-1.152h-0.096c-17.632 0-31.936 14.24-32 31.904-0.096 17.664 14.208 32.032 31.872 32.096l322.592 1.152v319.168c0 17.696 14.336 32 32 32s32-14.304 32-32V545.44l317.088 1.12h0.128c17.632 0 31.936-14.24 32-31.904 0.064-17.664-14.24-32.032-31.872-32.096z\" />","thumb_up":"<path d=\"M776.27 896H167.94a64.07 64.07 0 0 1-64-64V464a64.07 64.07 0 0 1 64-64h176c41 0 62.55-48.39 90.7-122.21 12.83-33.65 26.1-68.44 44-95.48 23.86-36 53.91-54.31 89.29-54.31 32.82 0 76.83 8.55 100.12 49.27 13 22.74 17.26 52.31 12.65 87.91-3.27 25.3-11.06 54.23-23.14 86-6.76 17.82-14.12 34.48-20.92 48.82H856a64 64 0 0 1 62.49 77.81l-79.71 367.91v0.16A64 64 0 0 1 776.27 896zM167.94 464v368h608.33L856 464.16V464H583.94a32 32 0 0 1-27.58-48.22 657.55 657.55 0 0 0 41.7-88.15c29.59-78.13 20-109 14.45-118.59-2.41-4.21-9.75-17-44.56-17-29.85 0-48.49 43-73.5 108.6-13.95 36.57-28.37 74.38-49.08 104.47-26.92 39.11-61 58.94-101.42 58.94z m688.19 0z m-592.19-32h64v432h-64z\" />","share":"<path d=\"M576.02 114.32L973.701 512l-397.68 397.68V694.478a730.099 730.099 0 0 0-43.121-1.26c-115.61 0-306.586 26.696-482.601 173.804 0 0 60.825-423.301 525.721-510.157V114.319M576 65.096a49.248 49.248 0 0 0-18.821 3.748c-18.391 7.618-30.392 25.569-30.392 45.475v202.67c-232.192 55.184-361.37 192.666-429.65 301.333C19.169 742.42 2.263 855.255 1.577 860.017c-2.898 20.183 6.943 40.059 24.75 49.981a49.138 49.138 0 0 0 23.962 6.236 49.119 49.119 0 0 0 31.57-11.458c157.788-131.86 327.915-161.342 444.928-162.304V909.67c0 19.917 12 37.858 30.392 45.476A49.236 49.236 0 0 0 576 958.884a49.208 49.208 0 0 0 34.826-14.418l397.68-397.68a49.192 49.192 0 0 0 14.419-34.796 49.233 49.233 0 0 0-14.418-34.806l-397.68-397.67A49.208 49.208 0 0 0 576 65.096z\" />","remove":"<path d=\"M863.744 544h-700.32c-17.664 0-32-14.336-32-32s14.336-32 32-32h700.32c17.696 0 32 14.336 32 32s-14.304 32-32 32z\" />","location_border":"<path d=\"M512 960.1c-11.7 0-23.4-3.9-32.9-11.7-71.7-58.8-338.5-336.7-338.5-513.1 0-204.8 166.6-371.4 371.4-371.4s371.4 166.6 371.4 371.4c0 176.4-266.9 454.3-338.5 513.1-9.6 7.8-21.2 11.7-32.9 11.7z m0-840.2c-173.9 0-315.4 141.5-315.4 315.4 0 144.2 235.9 401 315.4 467.6 79.5-66.7 315.4-323.4 315.4-467.6 0-173.9-141.5-315.4-315.4-315.4z m2.9 132.3c-82.2 0-148.8 66.6-148.8 148.8 0 82.2 66.6 148.8 148.8 148.8S663.7 483.2 663.7 401c0-82.1-66.6-148.8-148.8-148.8z m0 251.9c-56.9 0-103-46.1-103-103s46.1-103 103-103 103 46.1 103 103c0 56.8-46.1 103-103 103z\" />","qq":"<path d=\"M933.446 643.862c-18.784-108.945-97.673-180.323-97.673-180.323 11.268-98.92-30.056-116.461-30.056-116.461-8.701-306.05-272.335-300.692-277.87-300.546-5.542-0.146-269.211-5.505-277.872 300.548 0 0-41.325 17.54-30.055 116.461 0 0-78.895 71.378-97.676 180.323 0 0-10.034 184.083 90.16 22.544 0 0 22.544 61.344 63.867 116.455 0 0-73.897 25.062-67.621 90.165 0 0-2.518 72.618 157.784 67.625 0 0 112.702-8.757 146.516-56.35h29.795c33.809 47.595 146.514 56.35 146.514 56.35 160.262 4.993 157.781-67.625 157.781-67.625 6.238-65.103-67.62-90.165-67.62-90.165 41.324-55.11 63.862-116.455 63.862-116.455 100.156 161.537 90.164-22.546 90.164-22.546z\" fill=\"\" />","zhifubao":"<path d=\"M933.875 679.769V264.371c0-89.578-72.64-162.247-162.247-162.247H252.371c-89.578 0-162.247 72.64-162.247 162.247v519.257c0 89.578 72.64 162.247 162.247 162.247h519.257c79.833 0 146.234-57.694 159.739-133.674-43.01-18.503-229.54-99.03-326.659-145.483-73.909 89.539-151.342 143.264-268.058 143.264-116.716 0-194.602-71.798-185.212-159.831 6.163-57.78 45.78-152.112 217.775-135.887 90.651 8.552 132.162 25.462 206.163 49.822 19.016-35.045 34.979-73.643 46.962-114.726H294.577v-32.452H456.72v-58.413H258.901v-35.697H456.72v-84.151s1.864-13.205 16.339-13.205h81.13v97.356h210.937v35.697H554.188v58.413h171.995c-15.769 64.437-39.718 123.547-69.793 175.278 50.03 18.048 277.485 87.583 277.485 87.583z m-610.096 74.638c-123.318 0-142.788-77.885-136.298-110.337s42.188-74.64 110.743-74.64c78.833 0 149.316 20.114 234.033 61.377-59.424 77.44-132.575 123.6-208.477 123.6z\" fill=\"\" />","weixin":"<path d=\"M669.103 367.838c10.238 0 20.366 0.75 30.413 1.87-27.328-127.25-163.368-221.792-318.656-221.792-173.605 0-315.816 118.336-315.816 268.6 0 86.735 47.312 157.962 126.375 213.206l-31.587 95.004 110.404-55.364c39.504 7.82 71.2 15.861 110.623 15.861 9.91 0 19.74-0.491 29.485-1.257-6.17-21.116-9.746-43.231-9.746-66.175 0.001-137.978 118.486-249.953 268.505-249.953z m-169.81-85.63c23.778 0 39.53 15.644 39.53 39.41 0 23.669-15.752 39.531-39.53 39.531-23.672 0-47.423-15.86-47.423-39.531 0-23.765 23.751-39.41 47.422-39.41zM278.263 361.15c-23.67 0-47.558-15.86-47.558-39.531 0-23.766 23.887-39.41 47.558-39.41 23.67 0 39.422 15.644 39.422 39.41 0 23.67-15.753 39.531-39.422 39.531z\" fill=\"\" /><path d=\"M957.344 613.996c0-126.267-126.347-229.19-268.257-229.19-150.265 0-268.612 102.924-268.612 229.19 0 126.485 118.347 229.19 268.612 229.19 31.451 0 63.174-7.93 94.762-15.847l86.624 47.434-23.752-78.925c63.393-47.56 110.623-110.625 110.623-181.852z m-355.348-39.518c-15.725 0-31.586-15.643-31.586-31.602 0-15.737 15.861-31.586 31.586-31.586 23.891 0 39.534 15.849 39.534 31.586 0 15.959-15.643 31.602-39.534 31.602z m173.717 0c-15.617 0-31.369-15.643-31.369-31.602 0-15.737 15.753-31.586 31.369-31.586 23.669 0 39.531 15.849 39.531 31.586 0 15.959-15.862 31.602-39.531 31.602z\" fill=\"\" />","weibo":"<path d=\"M2.778359 0zM763.377135 502.533926q-15.744776-3.155041-20.445007-9.433743t-1.57752-11.548515l3.15504-5.237482q1.04027-1.04027 2.114772-3.155041t4.197212-8.929773 4.733512-13.630005 2.61779-16.785046-0.5363-18.900768-6.311983-19.404738-13.126986-18.900768q-14.703556-14.703556-38.305506-18.900768t-47.202949-0.5363-44.582307 9.433744-34.612263 11.012215l-13.630005 6.311983q-10.507294 3.155041-17.323247 4.197213t-10.507294-0.5363-5.774733-3.155041-1.57752-7.352253 1.040269-9.970044 2.61779-13.126986 3.155041-14.167256q0-12.588784-1.57752-23.600048t-6.815003-24.641269-15.208476-22.023478-25.17947-13.630005-39.346727-3.155041-54.554251 12.588784q-36.727034 12.588784-74.494339 37.231004t-65.564564 51.397309-50.89429 51.935511-35.686765 40.924246l-11.548515 16.785046q-34.612263 45.120508-51.397309 90.240066t-15.744776 68.185207v22.023479q6.311984 50.357039 30.952302 90.240065t58.750513 64.524295 80.269071 41.964516 88.662545 25.179471 89.703765 11.012215q77.651281 6.311984 161.042112-12.052485t155.269281-63.484025T849.383855 693.395834q17.826266-36.727034 18.364468-69.258758t-11.012215-52.97578-29.912032-36.190734-34.612263-23.09703-28.83753-9.433743zM443.405781 828.816314q-113.303814 5.237482-192.500285-44.079288t-79.19457-124.852328q0-74.494338 78.691551-128.51229t193.036585-59.287764 193.036585 37.767304 78.69155 117.500075q0 75.53651-80.269071 135.864543t-191.459064 65.564565zM412.99073 538.186459q-30.415051 3.155041-54.554252 14.167256t-37.767304 25.17947-23.097029 30.415051-13.126986 31.993522-4.733512 28.837531-1.04027 20.445007l1.04027 8.393474v4.197212q0 3.155041 2.114771 12.588784t5.774733 17.323248 12.052484 17.323247 19.941989 15.744777q69.258758 33.571993 129.04859 20.445007t96.517817-60.327083q14.703556-17.826266 19.404737-44.079287t-2.114771-52.975781-23.600048-48.779518-49.820739-34.109245-76.073761-6.815002z m-37.769206 198.308299q-6.311984 1.04027-12.052484 0.5363t-10.507294-2.114771-9.433744-3.65806-7.855272-5.774733-5.774733-7.352253-4.197212-8.393474-1.577521-9.970043q0-11.548515 6.311984-22.559779t17.323248-18.900768 24.641268-8.929774q9.433743-1.04027 18.364468 0.5363t15.208477 5.237482 11.012215 8.393474 6.815002 11.012215 2.114771 13.630005q0 11.548515-6.815002 22.023479t-18.364468 17.826266-25.179471 8.393474z m89.166515-75.53651q-7.352253 5.237482-15.208476 4.733513t-11.012215-6.815003l-2.114771-4.197212q-1.04027-2.114771-1.04027-4.197213v-4.197212q0-3.155041 1.04027-5.237482l2.114771-4.197212q1.04027-2.114771 3.155041-3.155041l3.155041-4.197213q8.393474-6.311984 16.248746-5.237482t11.012214 8.393474q3.155041 4.197212 2.617791 9.433744t-3.155041 9.970043-6.815003 8.929774z m372.443165-219.289606q6.311984 0 11.548515-3.155041t8.393474-7.855272 4.197212-9.970043q1.04027-1.04027 1.04027-3.155041 12.588784-119.615797-83.929984-136.400843-28.334511-5.237482-52.471811-1.04027-7.352253 0-12.588784 3.65806t-8.929774 9.433743-3.658059 12.052485q0 10.507294 7.352253 17.826266t17.826266 7.352253q81.847542-18.900768 88.125294 52.471811 2.114771 17.826266-2.114771 33.571993 0 10.507294 7.352253 17.826267t17.826267 7.352253z m-17.826266-295.833104q-46.160778-10.507294-123.812059 4.197212-1.04027 0-2.114771 1.04027l-1.04027 2.114771-1.04027 1.040269q-11.548515 3.155041-18.900768 13.126986t-7.352253 21.518559q0 15.744776 10.507294 26.21974t25.179471 10.507294h3.155041q1.04027 0 4.733512-1.04027t7.855272-1.57752 8.929774-2.114771 8.393474-3.155041 14.167255-1.577521 25.715771 1.577521 33.571993 7.855272 36.727034 15.744776 36.727035 26.21974 31.993522 38.808525q27.294242 61.906505 10.507294 119.615797 0 1.04027-0.5363 2.114771t-1.57752 5.237482-2.114772 7.855272-2.114771 9.433744-1.04027 9.970043q0 9.433743 5.237482 15.744776t13.126987 8.929774 18.364468 2.61779q29.375732 0 34.612263-35.686765 12.588784-40.924247 14.167255-78.15525t-5.237482-65.564565-20.445007-52.97578-31.489552-41.964517-39.883026-31.489552-42.501768-22.559778-42.501767-13.630005z\" fill=\"\" />","qqweibo":"<path d=\"M627.402324 326.900085q0 45.707732-32.543809 77.958543t-77.666545 32.250811q-34.298799 0-63.404629-19.964883-35.395793 38.248776-65.672615 83.443511Q246.969553 712.525825 272.711402 991.377191q0.584997 12.578926-7.166958 22.012871T245.79956 1023.994h-2.851984q-11.408933 0-19.964883-7.678955t-9.726943-19.159888q-7.970953-71.962578-1.973988-141.438171t16.819901-123.959274 30.86182-106.259377 39.417769-88.855479 42.269752-71.449582q34.884796-51.412699 75.399558-94.267447-9.140946-19.965883-9.140946-44.025742 0-45.707732 32.250811-77.959544t77.959543-32.249811 77.957543 32.249811 32.251811 77.959544z m217.713724 6.289963q0 90.244471-44.537739 166.813022t-121.399289 121.107291-167.10602 44.536739q-36.565786 0-74.813562-7.970954-11.99393-2.851983-18.575891-13.456921t-3.729978-22.597867q2.851983-11.407933 13.163922-17.989895t22.30587-4.314975q29.105829 7.459956 61.722638 7.459957 55.434675 0 106.261378-21.719873t87.392487-58.286659 58.285659-87.392487 21.719873-106.261378-21.719873-106.260377-58.285659-87.392488-87.392487-58.286659-106.261378-21.719872-106.260377 21.719872-87.392488 58.286659-58.286659 87.392488-21.719872 106.260377q0 65.160618 29.691826 124.54427 5.703967 11.407933 1.973988 22.816867t-14.552915 17.112899T233.001635 499.272075t-17.405898-14.845913q-36.565786-70.279588-36.565786-151.383113 0-68.012601 26.546844-129.663241T276.734379 97.119431t106.260377-70.864585T512.145999 0q90.245471 0 167.107021 44.537739t121.399289 121.399289 44.536739 167.106021z\" fill=\"\" />","taobao":"<path d=\"M129.307 360.729l-53.662 82.848 99.451 61.857s66.156 33.941 34.733 97.375C180.007 662.987 35.355 794.612 35.355 794.612l129.817 80.938c89.543-194.575 83.882-168.57 106.487-238.569 23.117-71.425 28.014-125.873-11.169-165.162-50.56-50.736-56.031-55.392-131.182-111.091zM462.95 255.771c20.519-35.675 30.433-58.906 30.433-58.906l-119.742-33.587S325.347 320.832 239.218 394.34c0 0 83.302 48.066 82.34 46.667 23.98-23.868 45.315-48.143 64.08-71.73 19.033-8.321 37.519-16.182 55.481-23.509-22.085 39.87-57.949 99.588-93.734 137.247l50.442 44.123s34.348-32.978 71.922-72.851h42.837v73.484H345.513v58.804h167.072v140.988c-2.103-0.103-4.215-0.103-6.286-0.23-18.463-0.94-47.178-4.019-58.383-21.65-13.679-21.58-3.676-61.245-2.98-85.47h-115.07l-4.251 2.112s-42.022 189.054 121.867 184.829c153.457 4.147 241.418-42.673 283.607-75.139l16.788 62.569 94.659-39.26-63.932-156.921-76.945 23.921 14.43 53.788c-19.833 14.655-42.633 25.699-66.961 33.814V586.573h162.926v-58.804H649.127v-73.484h163.585v-58.829H522.033c20.914-25.418 37.406-48.775 41.756-63.687l-50.546-13.714c217.207-77.759 338.308-64.4 337.151 63.051v336.099S863.4 832.773 731.036 824.352l-71.402-15.37-16.794 67.889s308.77 88.214 333.999-149.21c25.229-237.371-6.295-388.614-6.295-388.614s-27.899-219.102-507.594-83.278z m-262.661 74.016c47.173 0 85.441-37.962 85.441-84.806 0-46.791-38.269-84.807-85.441-84.807-47.177 0-85.434 38.016-85.434 84.807 0 46.845 38.256 84.806 85.434 84.806z\" fill=\"\" />","ie":"<path d=\"M981.333 533.333c0 17.067 0 36.267-2.133 53.334H373.333c0 104.533 91.734 181.333 192 181.333 68.267 0 134.4-34.133 168.534-93.867h221.866c-59.733 168.534-217.6 281.6-396.8 281.6-64 0-128-14.933-185.6-44.8C313.6 940.8 232.533 972.8 166.4 972.8c-89.6 0-123.733-53.333-123.733-138.667 0-49.066 10.666-96 25.6-142.933 6.4-29.867 42.666-91.733 57.6-121.6 64-115.2 147.2-230.4 249.6-317.867-78.934 34.134-168.534 121.6-224 185.6 42.666-189.866 213.333-326.4 407.466-326.4h25.6c64-29.866 155.734-61.866 228.267-61.866 83.2 0 157.867 32 157.867 128 0 49.066-19.2 104.533-40.534 151.466 34.134 61.867 51.2 134.4 51.2 204.8zM945.067 198.4c0-59.733-42.667-93.867-98.134-93.867-44.8 0-93.866 17.067-134.4 36.267C800 174.933 870.4 234.667 917.333 311.467c14.934-34.134 27.734-76.8 27.734-113.067zM108.8 844.8c0 61.867 36.267 93.867 96 93.867 46.933 0 98.133-19.2 138.667-44.8C256 842.667 192 763.733 160 669.867c-23.467 51.2-51.2 119.466-51.2 174.933z m264.533-373.333h379.734c-2.134-100.267-93.867-172.8-189.867-172.8-98.133 0-187.733 72.533-189.867 172.8z\" fill=\"\" />","find":"<path d=\"M870.057 358.26c-19.628-46.406-47.727-88.084-83.516-123.873-35.787-35.787-77.462-63.886-123.871-83.515-48.049-20.322-99.086-30.626-151.693-30.626-52.608 0-103.646 10.304-151.694 30.626C312.876 170.5 271.2 198.6 235.412 234.387c-35.79 35.79-63.888 77.466-83.515 123.873-20.322 48.048-30.627 99.084-30.627 151.693s10.305 103.647 30.627 151.695c19.628 46.406 47.725 88.082 83.515 123.873 35.789 35.789 77.465 63.887 123.87 83.514 48.05 20.322 99.087 30.627 151.695 30.627 52.609 0 103.646-10.304 151.694-30.627 46.407-19.628 88.082-47.726 123.872-83.514 35.789-35.79 63.887-77.466 83.514-123.873 20.323-48.048 30.627-99.085 30.627-151.695S890.38 406.307 870.057 358.26z m-136.13-43.04L591.66 582.042a20.773 20.773 0 0 1-8.593 8.592l-266.823 142.27a20.925 20.925 0 0 1-9.808 2.451 20.725 20.725 0 0 1-14.754-6.108c-6.536-6.537-8.005-16.408-3.655-24.564L430.29 437.858a20.782 20.782 0 0 1 8.592-8.592l266.823-142.264a20.93 20.93 0 0 1 9.808-2.453c5.572 0 10.812 2.17 14.754 6.107 6.535 6.536 8.006 16.407 3.66 24.563z\" fill=\"\" /><path d=\"M510.977 547.58c-9.904 0-19.6-4.016-26.606-11.02-7.005-7.006-11.021-16.704-11.021-26.607s4.016-19.6 11.02-26.606c7.005-7.004 16.703-11.02 26.607-11.02 9.905 0 19.602 4.016 26.606 11.02 7.004 7.004 11.02 16.702 11.02 26.606s-4.016 19.603-11.02 26.606c-7.004 7.005-16.702 11.021-26.606 11.021z\" fill=\"\" />","phone":"<path d=\"M744.427 959.265h-0.019l-4.619-0.104c-107.473-5.497-252.61-106.652-388.285-270.596l-50.116-60.531C165.713 464.078 94.631 303.949 111.254 199.68 122.986 126.119 232.352 64.04 294.844 64.04c30.78 0 41.931 15.317 45.83 24.464 35.376 62.868 79.148 172.199 79.35 211.412l0.012 2.79-1 2.606c-7.802 20.612-25.26 30.487-40.661 39.197-20.29 11.466-31.821 18.995-33.23 40.67-0.418 6.578 5.256 36.502 94.766 146.842l38.269 46.21c89.758 105.928 117.998 117.33 124.61 118.273 21.645 3.01 31.837-6.48 47.404-23.544 11.851-12.994 25.296-27.74 47.479-30.989l2.809-0.4 2.762 0.586c39.088 8.243 139.142 72.725 195.942 120.597 8.201 5.443 22.513 21.602 11.18 57.299-17.778 56.063-95.281 139.212-165.94 139.212z\" fill=\"\" />","android":"<path d=\"M963.615 347.084q23.342 0 39.58 14.716t16.238 36.028v299.385q0 20.297-16.238 35.013t-39.58 14.716h-18.267q-23.342 0-39.58-14.716t-16.238-35.013V397.828q0-21.313 16.238-36.028t39.58-14.716h18.267z m-823.056 0q23.342 0 38.565 14.716t15.223 36.028v299.385q0 20.297-15.223 35.013t-38.565 14.716h-18.268q-23.342 0-39.58-14.716t-16.237-35.013V397.828q0-21.313 16.238-36.028t39.58-14.716h18.267z m560.206-235.449q18.268 8.12 38.058 22.327t38.057 33.49 31.968 42.118 19.79 48.206H252.194q16.238-53.788 51.251-88.293t70.533-54.803L322.22 33.49q-2.03-2.03-0.507-7.61t10.656-11.672q8.119-7.104 15.223-6.597t9.133 2.538L409.5 93.368q28.416-13.194 59.877-20.298t64.951-7.104q69.011 0 128.888 28.417l53.788-84.234q2.03-2.03 7.611-2.03t16.746 6.09q10.148 5.073 11.67 9.133t-0.507 6.09z m-283.148 87.279q13.194 0 22.327-9.134t9.134-22.327-9.134-22.327-22.327-9.134-22.327 9.134-9.133 22.327 9.133 22.327 22.327 9.134z m249.658-4.06q13.193 0 22.327-9.133t9.133-22.328-9.133-22.327-22.327-9.133-22.328 9.133-9.133 22.327 9.133 22.328 22.328 9.133z m161.363 126.859l1.015 456.69q0 22.326-14.715 37.55t-36.028 15.222h-14.208v142.082q0 20.297-14.716 35.52T713.958 1024h-29.43q-20.298 0-35.014-15.223t-14.715-35.52V831.175H448.063v142.082q0 20.297-14.715 35.52T397.32 1024H367.89q-20.297 0-35.013-15.223t-14.715-35.52V831.175h-11.164q-21.312 0-36.028-15.223t-14.715-37.55v-456.69h572.384z\" fill=\"\" />","location":"<path d=\"M511.999 959.753S176.185 585.513 176.185 400.06c0-185.448 150.362-335.815 335.814-335.815 185.456 0 335.816 150.368 335.816 335.815C847.815 585.512 512 959.753 512 959.753z m0-686.495c-70.027 0-126.805 56.779-126.805 126.805 0 70.03 56.778 126.807 126.805 126.807 70.029 0 126.806-56.777 126.806-126.807 0-70.026-56.777-126.805-126.806-126.805z\" fill=\"\" />","ios":"<path d=\"M615.913 183.762c31.803-40.968 55.898-98.81 47.218-157.832-52.08 3.61-112.838 36.802-148.25 79.991-32.36 39.164-58.954 97.353-48.607 153.876 56.94 1.805 115.545-32.15 149.639-76.035zM896.859 739.2c-22.776 50.481-33.677 73.117-62.98 117.835-40.97 62.496-98.603 140.266-170.055 140.822-63.467 0.694-79.854-41.386-165.957-40.9s-104.156 41.733-167.693 41.107c-71.451-0.695-126.03-70.827-166.929-133.32-114.364-174.568-126.376-379.48-55.897-488.498 50.203-77.354 129.294-122.558 203.661-122.558 75.688 0 123.253 41.593 185.956 41.593 60.758 0 97.768-41.663 185.26-41.663 66.245 0 136.447 36.109 186.441 98.603-163.805 89.922-137.278 324.275 28.192 387.047v-0.068h0.001z\" fill=\"\" />"}

/***/ }),
/* 218 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("svg", {
    staticClass: "tk-icon tk-svg",
    class: { spin: _vm.spin },
    attrs: { viewBox: _vm.viewBox, xmlns: "http://www.w3.org/2000/svg" },
    domProps: { innerHTML: _vm._s(_vm.icon) }
  })
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-006e12b4", esExports)
  }
}

/***/ }),
/* 219 */,
/* 220 */,
/* 221 */,
/* 222 */,
/* 223 */,
/* 224 */,
/* 225 */,
/* 226 */,
/* 227 */,
/* 228 */,
/* 229 */,
/* 230 */,
/* 231 */,
/* 232 */,
/* 233 */,
/* 234 */,
/* 235 */,
/* 236 */,
/* 237 */,
/* 238 */,
/* 239 */,
/* 240 */,
/* 241 */,
/* 242 */,
/* 243 */,
/* 244 */,
/* 245 */,
/* 246 */,
/* 247 */,
/* 248 */,
/* 249 */,
/* 250 */,
/* 251 */,
/* 252 */,
/* 253 */,
/* 254 */,
/* 255 */,
/* 256 */,
/* 257 */,
/* 258 */,
/* 259 */,
/* 260 */,
/* 261 */,
/* 262 */,
/* 263 */,
/* 264 */,
/* 265 */,
/* 266 */,
/* 267 */,
/* 268 */,
/* 269 */,
/* 270 */,
/* 271 */,
/* 272 */,
/* 273 */,
/* 274 */,
/* 275 */,
/* 276 */,
/* 277 */,
/* 278 */,
/* 279 */,
/* 280 */,
/* 281 */,
/* 282 */,
/* 283 */,
/* 284 */,
/* 285 */,
/* 286 */,
/* 287 */,
/* 288 */,
/* 289 */,
/* 290 */,
/* 291 */
/***/ ((function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(211);


/***/ }))
/******/ ]);
}));