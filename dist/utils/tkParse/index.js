/*!
* Vue Tk
*/   
!(function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("axios")):"function"==typeof define&&define.amd?define(["axios"],e):"object"==typeof exports?exports["vue-tk"]=e(require("axios")):t["vue-tk"]=e(t.axios)})(this,(function(t){return (function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/",e(e.s=327)})([(function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)}),(function(t,e,n){t.exports=!n(10)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))}),(function(t,e){var n=t.exports={version:"2.5.1"};"number"==typeof __e&&(__e=n)}),,(function(t,e,n){var r=n(6),o=n(20),i=n(18),u=Object.defineProperty;e.f=n(1)?Object.defineProperty:function(t,e,n){if(r(t),e=i(e,!0),r(n),o)try{return u(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}}),(function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}}),(function(t,e,n){var r=n(5);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}}),(function(t,e,n){var r=n(28)("wks"),o=n(24),i=n(0).Symbol,u="function"==typeof i;(t.exports=function(t){return r[t]||(r[t]=u&&i[t]||(u?i:o)("Symbol."+t))}).store=r}),(function(t,e,n){var r=n(0),o=n(2),i=n(13),u=n(9),c=function(t,e,n){var f,a,s,l=t&c.F,p=t&c.G,d=t&c.S,v=t&c.P,h=t&c.B,y=t&c.W,m=p?o:o[e]||(o[e]={}),_=m.prototype,x=p?r:d?r[e]:(r[e]||{}).prototype;p&&(n=e);for(f in n)(a=!l&&x&&void 0!==x[f])&&f in m||(s=a?x[f]:n[f],m[f]=p&&"function"!=typeof x[f]?n[f]:h&&a?i(s,r):y&&x[f]==s?(function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e.prototype=t.prototype,e})(s):v&&"function"==typeof s?i(Function.call,s):s,v&&((m.virtual||(m.virtual={}))[f]=s,t&c.R&&_&&!_[f]&&u(_,f,s)))};c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,t.exports=c}),(function(t,e,n){var r=n(4),o=n(15);t.exports=n(1)?function(t,e,n){return r.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}}),(function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}}),(function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}}),(function(t,e,n){var r=n(32),o=n(23);t.exports=function(t){return r(o(t))}}),(function(t,e,n){var r=n(14);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}}),(function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}}),(function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}}),(function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(29),o=(function(t){return t&&t.__esModule?t:{default:t}})(r);e.default={defineProperty:function(t,e,n){n.prototype[t]||(0,o.default)(n.prototype,t,{configurable:!0,get:function(){return e}})}},t.exports=e.default}),(function(t,e,n){var r=n(5),o=n(0).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}}),(function(t,e,n){var r=n(5);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}}),(function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}}),(function(t,e,n){t.exports=!n(1)&&!n(10)((function(){return 7!=Object.defineProperty(n(17)("div"),"a",{get:function(){return 7}}).a}))}),(function(t,e,n){var r=n(37),o=n(27);t.exports=Object.keys||function(t){return r(t,o)}}),(function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}}),(function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}}),(function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}}),(function(t,e){t.exports={}}),(function(t,e,n){var r=n(28)("keys"),o=n(24);t.exports=function(t){return r[t]||(r[t]=o(t))}}),(function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")}),(function(t,e,n){var r=n(0),o=r["__core-js_shared__"]||(r["__core-js_shared__"]={});t.exports=function(t){return o[t]||(o[t]={})}}),(function(t,e,n){t.exports={default:n(30),__esModule:!0}}),(function(t,e,n){n(31);var r=n(2).Object;t.exports=function(t,e,n){return r.defineProperty(t,e,n)}}),(function(t,e,n){var r=n(8);r(r.S+r.F*!n(1),"Object",{defineProperty:n(4).f})}),(function(t,e,n){var r=n(19);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}}),(function(t,e){e.f={}.propertyIsEnumerable}),(function(t,e,n){var r=n(4).f,o=n(11),i=n(7)("toStringTag");t.exports=function(t,e,n){t&&!o(t=n?t:t.prototype,i)&&r(t,i,{configurable:!0,value:e})}}),(function(t,e,n){var r=n(22),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}}),(function(t,e){t.exports=!0}),(function(t,e,n){var r=n(11),o=n(12),i=n(41)(!1),u=n(26)("IE_PROTO");t.exports=function(t,e){var n,c=o(t),f=0,a=[];for(n in c)n!=u&&r(c,n)&&a.push(n);for(;e.length>f;)r(c,n=e[f++])&&(~i(a,n)||a.push(n));return a}}),(function(t,e){e.f=Object.getOwnPropertySymbols}),(function(t,e,n){var r=n(23);t.exports=function(t){return Object(r(t))}}),(function(t,e,n){var r=n(4),o=n(6),i=n(21);t.exports=n(1)?Object.defineProperties:function(t,e){o(t);for(var n,u=i(e),c=u.length,f=0;c>f;)r.f(t,n=u[f++],e[n]);return t}}),(function(t,e,n){var r=n(12),o=n(35),i=n(42);t.exports=function(t){return function(e,n,u){var c,f=r(e),a=o(f.length),s=i(u,a);if(t&&n!=n){for(;a>s;)if((c=f[s++])!=c)return!0}else for(;a>s;s++)if((t||s in f)&&f[s]===n)return t||s||0;return!t&&-1}}}),(function(t,e,n){var r=n(22),o=Math.max,i=Math.min;t.exports=function(t,e){return t=r(t),t<0?o(t+e,0):i(t,e)}}),(function(t,e,n){"use strict";function r(t){var e,n;this.promise=new t(function(t,r){if(void 0!==e||void 0!==n)throw TypeError("Bad Promise constructor");e=t,n=r}),this.resolve=o(e),this.reject=o(n)}var o=n(14);t.exports.f=function(t){return new r(t)}}),(function(t,e,n){"use strict";var r=n(68)(!0);n(49)(String,"String",(function(t){this._t=String(t),this._i=0}),(function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=r(e,n),this._i+=t.length,{value:t,done:!1})}))}),(function(t,e,n){n(71);for(var r=n(0),o=n(9),i=n(25),u=n(7)("toStringTag"),c="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),f=0;f<c.length;f++){var a=c[f],s=r[a],l=s&&s.prototype;l&&!l[u]&&o(l,u,a),i[a]=i.Array}}),,(function(t,e,n){var r=n(6),o=n(40),i=n(27),u=n(26)("IE_PROTO"),c=function(){},f=function(){var t,e=n(17)("iframe"),r=i.length;for(e.style.display="none",n(48).appendChild(e),e.src="javascript:",t=e.contentWindow.document,t.open(),t.write("<script>document.F=Object<\/script>"),t.close(),f=t.F;r--;)delete f.prototype[i[r]];return f()};t.exports=Object.create||function(t,e){var n;return null!==t?(c.prototype=r(t),n=new c,c.prototype=null,n[u]=t):n=f(),void 0===e?n:o(n,e)}}),(function(t,e,n){var r=n(0).document;t.exports=r&&r.documentElement}),(function(t,e,n){"use strict";var r=n(36),o=n(8),i=n(52),u=n(9),c=n(11),f=n(25),a=n(69),s=n(34),l=n(70),p=n(7)("iterator"),d=!([].keys&&"next"in[].keys()),v=function(){return this};t.exports=function(t,e,n,h,y,m,_){a(n,e,h);var x,b,g,w=function(t){if(!d&&t in S)return S[t];switch(t){case"keys":case"values":return function(){return new n(this,t)}}return function(){return new n(this,t)}},j=e+" Iterator",O="values"==y,P=!1,S=t.prototype,M=S[p]||S["@@iterator"]||y&&S[y],k=M||w(y),E=y?O?w("entries"):k:void 0,T="Array"==e?S.entries||M:M;if(T&&(g=l(T.call(new t)))!==Object.prototype&&g.next&&(s(g,j,!0),r||c(g,p)||u(g,p,v)),O&&M&&"values"!==M.name&&(P=!0,k=function(){return M.call(this)}),r&&!_||!d&&!P&&S[p]||u(S,p,k),f[e]=k,f[j]=v,y)if(x={values:O?k:w("values"),keys:m?k:w("keys"),entries:E},_)for(b in x)b in S||i(S,b,x[b]);else o(o.P+o.F*(d||P),e,x);return x}}),(function(t,e,n){e.f=n(7)}),(function(t,e,n){var r=n(0),o=n(2),i=n(36),u=n(50),c=n(4).f;t.exports=function(t){var e=o.Symbol||(o.Symbol=i?{}:r.Symbol||{});"_"==t.charAt(0)||t in e||c(e,t,{value:u.f(t)})}}),(function(t,e,n){t.exports=n(9)}),(function(t,e,n){t.exports={default:n(61),__esModule:!0}}),(function(t,e){}),(function(t,e,n){var r=n(19),o=n(7)("toStringTag"),i="Arguments"==r(function(){return arguments}()),u=function(t,e){try{return t[e]}catch(t){}};t.exports=function(t){var e,n,c;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=u(e=Object(t),o))?n:i?r(e):"Object"==(c=r(e))&&"function"==typeof e.callee?"Arguments":c}}),(function(t,e,n){var r=n(6),o=n(14),i=n(7)("species");t.exports=function(t,e){var n,u=r(t).constructor;return void 0===u||void 0==(n=r(u)[i])?e:o(n)}}),(function(t,e,n){var r,o,i,u=n(13),c=n(84),f=n(48),a=n(17),s=n(0),l=s.process,p=s.setImmediate,d=s.clearImmediate,v=s.MessageChannel,h=s.Dispatch,y=0,m={},_=function(){var t=+this;if(m.hasOwnProperty(t)){var e=m[t];delete m[t],e()}},x=function(t){_.call(t.data)};p&&d||(p=function(t){for(var e=[],n=1;arguments.length>n;)e.push(arguments[n++]);return m[++y]=function(){c("function"==typeof t?t:Function(t),e)},r(y),y},d=function(t){delete m[t]},"process"==n(19)(l)?r=function(t){l.nextTick(u(_,t,1))}:h&&h.now?r=function(t){h.now(u(_,t,1))}:v?(o=new v,i=o.port2,o.port1.onmessage=x,r=u(i.postMessage,i,1)):s.addEventListener&&"function"==typeof postMessage&&!s.importScripts?(r=function(t){s.postMessage(t+"","*")},s.addEventListener("message",x,!1)):r="onreadystatechange"in a("script")?function(t){f.appendChild(a("script")).onreadystatechange=function(){f.removeChild(this),_.call(t)}}:function(t){setTimeout(u(_,t,1),0)}),t.exports={set:p,clear:d}}),(function(t,e){t.exports=function(t){try{return{e:!1,v:t()}}catch(t){return{e:!0,v:t}}}}),(function(t,e,n){var r=n(6),o=n(5),i=n(43);t.exports=function(t,e){if(r(t),o(e)&&e.constructor===t)return e;var n=i.f(t);return(0,n.resolve)(e),n.promise}}),(function(t,e,n){var r=n(55),o=n(7)("iterator"),i=n(25);t.exports=n(2).getIteratorMethod=function(t){if(void 0!=t)return t[o]||t["@@iterator"]||i[r(t)]}}),(function(t,e,n){n(62),t.exports=n(2).Object.assign}),(function(t,e,n){var r=n(8);r(r.S+r.F,"Object",{assign:n(63)})}),(function(t,e,n){"use strict";var r=n(21),o=n(38),i=n(33),u=n(39),c=n(32),f=Object.assign;t.exports=!f||n(10)((function(){var t={},e={},n=Symbol(),r="abcdefghijklmnopqrst";return t[n]=7,r.split("").forEach((function(t){e[t]=t})),7!=f({},t)[n]||Object.keys(f({},e)).join("")!=r}))?function(t,e){for(var n=u(t),f=arguments.length,a=1,s=o.f,l=i.f;f>a;)for(var p,d=c(arguments[a++]),v=s?r(d).concat(s(d)):r(d),h=v.length,y=0;h>y;)l.call(d,p=v[y++])&&(n[p]=d[p]);return n}:f}),(function(t,e,n){t.exports={default:n(78),__esModule:!0}}),(function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var o=n(94),i=r(o),u=n(96),c=r(u),f="function"==typeof c.default&&"symbol"==typeof i.default?function(t){return typeof t}:function(t){return t&&"function"==typeof c.default&&t.constructor===c.default&&t!==c.default.prototype?"symbol":typeof t};e.default="function"==typeof c.default&&"symbol"===f(i.default)?function(t){return void 0===t?"undefined":f(t)}:function(t){return t&&"function"==typeof c.default&&t.constructor===c.default&&t!==c.default.prototype?"symbol":void 0===t?"undefined":f(t)}}),(function(t,e,n){var r=n(37),o=n(27).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}}),,(function(t,e,n){var r=n(22),o=n(23);t.exports=function(t){return function(e,n){var i,u,c=String(o(e)),f=r(n),a=c.length;return f<0||f>=a?t?"":void 0:(i=c.charCodeAt(f),i<55296||i>56319||f+1===a||(u=c.charCodeAt(f+1))<56320||u>57343?t?c.charAt(f):i:t?c.slice(f,f+2):u-56320+(i-55296<<10)+65536)}}}),(function(t,e,n){"use strict";var r=n(47),o=n(15),i=n(34),u={};n(9)(u,n(7)("iterator"),(function(){return this})),t.exports=function(t,e,n){t.prototype=r(u,{next:o(1,n)}),i(t,e+" Iterator")}}),(function(t,e,n){var r=n(11),o=n(39),i=n(26)("IE_PROTO"),u=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?u:null}}),(function(t,e,n){"use strict";var r=n(72),o=n(73),i=n(25),u=n(12);t.exports=n(49)(Array,"Array",(function(t,e){this._t=u(t),this._i=0,this._k=e}),(function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,o(1)):"keys"==e?o(0,n):"values"==e?o(0,t[n]):o(0,[n,t[n]])}),"values"),i.Arguments=i.Array,r("keys"),r("values"),r("entries")}),(function(t,e){t.exports=function(){}}),(function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}}),,,,,(function(t,e,n){n(54),n(44),n(45),n(79),n(89),n(90),t.exports=n(2).Promise}),(function(t,e,n){"use strict";var r,o,i,u,c=n(36),f=n(0),a=n(13),s=n(55),l=n(8),p=n(5),d=n(14),v=n(80),h=n(81),y=n(56),m=n(57).set,_=n(85)(),x=n(43),b=n(58),g=n(59),w=f.TypeError,j=f.process,O=f.Promise,P="process"==s(j),S=function(){},M=o=x.f,k=!!(function(){try{var t=O.resolve(1),e=(t.constructor={})[n(7)("species")]=function(t){t(S,S)};return(P||"function"==typeof PromiseRejectionEvent)&&t.then(S)instanceof e}catch(t){}})(),E=function(t){var e;return!(!p(t)||"function"!=typeof(e=t.then))&&e},T=function(t,e){if(!t._n){t._n=!0;var n=t._c;_((function(){for(var r=t._v,o=1==t._s,i=0;n.length>i;)!(function(e){var n,i,u=o?e.ok:e.fail,c=e.resolve,f=e.reject,a=e.domain;try{u?(o||(2==t._h&&F(t),t._h=1),!0===u?n=r:(a&&a.enter(),n=u(r),a&&a.exit()),n===e.promise?f(w("Promise-chain cycle")):(i=E(n))?i.call(n,c,f):c(n)):f(r)}catch(t){f(t)}})(n[i++]);t._c=[],t._n=!1,e&&!t._h&&A(t)}))}},A=function(t){m.call(f,(function(){var e,n,r,o=t._v,i=L(t);if(i&&(e=b((function(){P?j.emit("unhandledRejection",o,t):(n=f.onunhandledrejection)?n({promise:t,reason:o}):(r=f.console)&&r.error&&r.error("Unhandled promise rejection",o)})),t._h=P||L(t)?2:1),t._a=void 0,i&&e.e)throw e.v}))},L=function(t){if(1==t._h)return!1;for(var e,n=t._a||t._c,r=0;n.length>r;)if(e=n[r++],e.fail||!L(e.promise))return!1;return!0},F=function(t){m.call(f,(function(){var e;P?j.emit("rejectionHandled",t):(e=f.onrejectionhandled)&&e({promise:t,reason:t._v})}))},I=function(t){var e=this;e._d||(e._d=!0,e=e._w||e,e._v=t,e._s=2,e._a||(e._a=e._c.slice()),T(e,!0))},N=function(t){var e,n=this;if(!n._d){n._d=!0,n=n._w||n;try{if(n===t)throw w("Promise can't be resolved itself");(e=E(t))?_((function(){var r={_w:n,_d:!1};try{e.call(t,a(N,r,1),a(I,r,1))}catch(t){I.call(r,t)}})):(n._v=t,n._s=1,T(n,!1))}catch(t){I.call({_w:n,_d:!1},t)}}};k||(O=function(t){v(this,O,"Promise","_h"),d(t),r.call(this);try{t(a(N,this,1),a(I,this,1))}catch(t){I.call(this,t)}},r=function(t){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1},r.prototype=n(86)(O.prototype,{then:function(t,e){var n=M(y(this,O));return n.ok="function"!=typeof t||t,n.fail="function"==typeof e&&e,n.domain=P?j.domain:void 0,this._c.push(n),this._a&&this._a.push(n),this._s&&T(this,!1),n.promise},catch:function(t){return this.then(void 0,t)}}),i=function(){var t=new r;this.promise=t,this.resolve=a(N,t,1),this.reject=a(I,t,1)},x.f=M=function(t){return t===O||t===u?new i(t):o(t)}),l(l.G+l.W+l.F*!k,{Promise:O}),n(34)(O,"Promise"),n(87)("Promise"),u=n(2).Promise,l(l.S+l.F*!k,"Promise",{reject:function(t){var e=M(this);return(0,e.reject)(t),e.promise}}),l(l.S+l.F*(c||!k),"Promise",{resolve:function(t){return g(c&&this===u?O:this,t)}}),l(l.S+l.F*!(k&&n(88)((function(t){O.all(t).catch(S)}))),"Promise",{all:function(t){var e=this,n=M(e),r=n.resolve,o=n.reject,i=b((function(){var n=[],i=0,u=1;h(t,!1,(function(t){var c=i++,f=!1;n.push(void 0),u++,e.resolve(t).then((function(t){f||(f=!0,n[c]=t,--u||r(n))}),o)})),--u||r(n)}));return i.e&&o(i.v),n.promise},race:function(t){var e=this,n=M(e),r=n.reject,o=b((function(){h(t,!1,(function(t){e.resolve(t).then(n.resolve,r)}))}));return o.e&&r(o.v),n.promise}})}),(function(t,e){t.exports=function(t,e,n,r){if(!(t instanceof e)||void 0!==r&&r in t)throw TypeError(n+": incorrect invocation!");return t}}),(function(t,e,n){var r=n(13),o=n(82),i=n(83),u=n(6),c=n(35),f=n(60),a={},s={},e=t.exports=function(t,e,n,l,p){var d,v,h,y,m=p?function(){return t}:f(t),_=r(n,l,e?2:1),x=0;if("function"!=typeof m)throw TypeError(t+" is not iterable!");if(i(m)){for(d=c(t.length);d>x;x++)if((y=e?_(u(v=t[x])[0],v[1]):_(t[x]))===a||y===s)return y}else for(h=m.call(t);!(v=h.next()).done;)if((y=o(h,_,v.value,e))===a||y===s)return y};e.BREAK=a,e.RETURN=s}),(function(t,e,n){var r=n(6);t.exports=function(t,e,n,o){try{return o?e(r(n)[0],n[1]):e(n)}catch(e){var i=t.return;throw void 0!==i&&r(i.call(t)),e}}}),(function(t,e,n){var r=n(25),o=n(7)("iterator"),i=Array.prototype;t.exports=function(t){return void 0!==t&&(r.Array===t||i[o]===t)}}),(function(t,e){t.exports=function(t,e,n){var r=void 0===n;switch(e.length){case 0:return r?t():t.call(n);case 1:return r?t(e[0]):t.call(n,e[0]);case 2:return r?t(e[0],e[1]):t.call(n,e[0],e[1]);case 3:return r?t(e[0],e[1],e[2]):t.call(n,e[0],e[1],e[2]);case 4:return r?t(e[0],e[1],e[2],e[3]):t.call(n,e[0],e[1],e[2],e[3])}return t.apply(n,e)}}),(function(t,e,n){var r=n(0),o=n(57).set,i=r.MutationObserver||r.WebKitMutationObserver,u=r.process,c=r.Promise,f="process"==n(19)(u);t.exports=function(){var t,e,n,a=function(){var r,o;for(f&&(r=u.domain)&&r.exit();t;){o=t.fn,t=t.next;try{o()}catch(r){throw t?n():e=void 0,r}}e=void 0,r&&r.enter()};if(f)n=function(){u.nextTick(a)};else if(i){var s=!0,l=document.createTextNode("");new i(a).observe(l,{characterData:!0}),n=function(){l.data=s=!s}}else if(c&&c.resolve){var p=c.resolve();n=function(){p.then(a)}}else n=function(){o.call(r,a)};return function(r){var o={fn:r,next:void 0};e&&(e.next=o),t||(t=o,n()),e=o}}}),(function(t,e,n){var r=n(9);t.exports=function(t,e,n){for(var o in e)n&&t[o]?t[o]=e[o]:r(t,o,e[o]);return t}}),(function(t,e,n){"use strict";var r=n(0),o=n(2),i=n(4),u=n(1),c=n(7)("species");t.exports=function(t){var e="function"==typeof o[t]?o[t]:r[t];u&&e&&!e[c]&&i.f(e,c,{configurable:!0,get:function(){return this}})}}),(function(t,e,n){var r=n(7)("iterator"),o=!1;try{var i=[7][r]();i.return=function(){o=!0},Array.from(i,(function(){throw 2}))}catch(t){}t.exports=function(t,e){if(!e&&!o)return!1;var n=!1;try{var i=[7],u=i[r]();u.next=function(){return{done:n=!0}},i[r]=function(){return u},t(i)}catch(t){}return n}}),(function(t,e,n){"use strict";var r=n(8),o=n(2),i=n(0),u=n(56),c=n(59);r(r.P+r.R,"Promise",{finally:function(t){var e=u(this,o.Promise||i.Promise),n="function"==typeof t;return this.then(n?function(n){return c(e,t()).then((function(){return n}))}:t,n?function(n){return c(e,t()).then((function(){throw n}))}:t)}})}),(function(t,e,n){"use strict";var r=n(8),o=n(43),i=n(58);r(r.S,"Promise",{try:function(t){var e=o.f(this),n=i(t);return(n.e?e.reject:e.resolve)(n.v),e.promise}})}),(function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.$tkAjaxGlobal=e.default=void 0;var r=n(178),o=n(16),i=(function(t){return t&&t.__esModule?t:{default:t}})(o),u=function(t){i.default.defineProperty("$tkAjax",r.tkAjax,t),i.default.defineProperty("$tkAjaxGlobal",r.tkAjaxGlobal,t)};r.tkAjax.install=u,e.default=r.tkAjax,e.$tkAjaxGlobal=r.tkAjaxGlobal}),(function(t,e,n){t.exports={default:n(106),__esModule:!0}}),,(function(t,e,n){t.exports={default:n(95),__esModule:!0}}),(function(t,e,n){n(44),n(45),t.exports=n(50).f("iterator")}),(function(t,e,n){t.exports={default:n(97),__esModule:!0}}),(function(t,e,n){n(98),n(54),n(104),n(105),t.exports=n(2).Symbol}),(function(t,e,n){"use strict";var r=n(0),o=n(11),i=n(1),u=n(8),c=n(52),f=n(99).KEY,a=n(10),s=n(28),l=n(34),p=n(24),d=n(7),v=n(50),h=n(51),y=n(100),m=n(101),_=n(6),x=n(12),b=n(18),g=n(15),w=n(47),j=n(102),O=n(103),P=n(4),S=n(21),M=O.f,k=P.f,E=j.f,T=r.Symbol,A=r.JSON,L=A&&A.stringify,F=d("_hidden"),I=d("toPrimitive"),N={}.propertyIsEnumerable,G=s("symbol-registry"),R=s("symbols"),C=s("op-symbols"),q=Object.prototype,D="function"==typeof T,$=r.QObject,H=!$||!$.prototype||!$.prototype.findChild,K=i&&a((function(){return 7!=w(k({},"a",{get:function(){return k(this,"a",{value:7}).a}})).a}))?function(t,e,n){var r=M(q,e);r&&delete q[e],k(t,e,n),r&&t!==q&&k(q,e,r)}:k,U=function(t){var e=R[t]=w(T.prototype);return e._k=t,e},W=D&&"symbol"==typeof T.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof T},V=function(t,e,n){return t===q&&V(C,e,n),_(t),e=b(e,!0),_(n),o(R,e)?(n.enumerable?(o(t,F)&&t[F][e]&&(t[F][e]=!1),n=w(n,{enumerable:g(0,!1)})):(o(t,F)||k(t,F,g(1,{})),t[F][e]=!0),K(t,e,n)):k(t,e,n)},B=function(t,e){_(t);for(var n,r=y(e=x(e)),o=0,i=r.length;i>o;)V(t,n=r[o++],e[n]);return t},X=function(t,e){return void 0===e?w(t):B(w(t),e)},J=function(t){var e=N.call(this,t=b(t,!0));return!(this===q&&o(R,t)&&!o(C,t))&&(!(e||!o(this,t)||!o(R,t)||o(this,F)&&this[F][t])||e)},z=function(t,e){if(t=x(t),e=b(e,!0),t!==q||!o(R,e)||o(C,e)){var n=M(t,e);return!n||!o(R,e)||o(t,F)&&t[F][e]||(n.enumerable=!0),n}},Y=function(t){for(var e,n=E(x(t)),r=[],i=0;n.length>i;)o(R,e=n[i++])||e==F||e==f||r.push(e);return r},Q=function(t){for(var e,n=t===q,r=E(n?C:x(t)),i=[],u=0;r.length>u;)!o(R,e=r[u++])||n&&!o(q,e)||i.push(R[e]);return i};D||(T=function(){if(this instanceof T)throw TypeError("Symbol is not a constructor!");var t=p(arguments.length>0?arguments[0]:void 0),e=function(n){this===q&&e.call(C,n),o(this,F)&&o(this[F],t)&&(this[F][t]=!1),K(this,t,g(1,n))};return i&&H&&K(q,t,{configurable:!0,set:e}),U(t)},c(T.prototype,"toString",(function(){return this._k})),O.f=z,P.f=V,n(66).f=j.f=Y,n(33).f=J,n(38).f=Q,i&&!n(36)&&c(q,"propertyIsEnumerable",J,!0),v.f=function(t){return U(d(t))}),u(u.G+u.W+u.F*!D,{Symbol:T});for(var Z="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),tt=0;Z.length>tt;)d(Z[tt++]);for(var et=S(d.store),nt=0;et.length>nt;)h(et[nt++]);u(u.S+u.F*!D,"Symbol",{for:function(t){return o(G,t+="")?G[t]:G[t]=T(t)},keyFor:function(t){if(!W(t))throw TypeError(t+" is not a symbol!");for(var e in G)if(G[e]===t)return e},useSetter:function(){H=!0},useSimple:function(){H=!1}}),u(u.S+u.F*!D,"Object",{create:X,defineProperty:V,defineProperties:B,getOwnPropertyDescriptor:z,getOwnPropertyNames:Y,getOwnPropertySymbols:Q}),A&&u(u.S+u.F*(!D||a((function(){var t=T();return"[null]"!=L([t])||"{}"!=L({a:t})||"{}"!=L(Object(t))}))),"JSON",{stringify:function(t){if(void 0!==t&&!W(t)){for(var e,n,r=[t],o=1;arguments.length>o;)r.push(arguments[o++]);return e=r[1],"function"==typeof e&&(n=e),!n&&m(e)||(e=function(t,e){if(n&&(e=n.call(this,t,e)),!W(e))return e}),r[1]=e,L.apply(A,r)}}}),T.prototype[I]||n(9)(T.prototype,I,T.prototype.valueOf),l(T,"Symbol"),l(Math,"Math",!0),l(r.JSON,"JSON",!0)}),(function(t,e,n){var r=n(24)("meta"),o=n(5),i=n(11),u=n(4).f,c=0,f=Object.isExtensible||function(){return!0},a=!n(10)((function(){return f(Object.preventExtensions({}))})),s=function(t){u(t,r,{value:{i:"O"+ ++c,w:{}}})},l=function(t,e){if(!o(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!i(t,r)){if(!f(t))return"F";if(!e)return"E";s(t)}return t[r].i},p=function(t,e){if(!i(t,r)){if(!f(t))return!0;if(!e)return!1;s(t)}return t[r].w},d=function(t){return a&&v.NEED&&f(t)&&!i(t,r)&&s(t),t},v=t.exports={KEY:r,NEED:!1,fastKey:l,getWeak:p,onFreeze:d}}),(function(t,e,n){var r=n(21),o=n(38),i=n(33);t.exports=function(t){var e=r(t),n=o.f;if(n)for(var u,c=n(t),f=i.f,a=0;c.length>a;)f.call(t,u=c[a++])&&e.push(u);return e}}),(function(t,e,n){var r=n(19);t.exports=Array.isArray||function(t){return"Array"==r(t)}}),(function(t,e,n){var r=n(12),o=n(66).f,i={}.toString,u="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],c=function(t){try{return o(t)}catch(t){return u.slice()}};t.exports.f=function(t){return u&&"[object Window]"==i.call(t)?c(t):o(r(t))}}),(function(t,e,n){var r=n(33),o=n(15),i=n(12),u=n(18),c=n(11),f=n(20),a=Object.getOwnPropertyDescriptor;e.f=n(1)?a:function(t,e){if(t=i(t),e=u(e,!0),f)try{return a(t,e)}catch(t){}if(c(t,e))return o(!r.f.call(t,e),t[e])}}),(function(t,e,n){n(51)("asyncIterator")}),(function(t,e,n){n(51)("observable")}),(function(t,e,n){n(45),n(44),t.exports=n(107)}),(function(t,e,n){var r=n(6),o=n(60);t.exports=n(2).getIterator=function(t){var e=o(t);if("function"!=typeof e)throw TypeError(t+" is not iterable!");return r(e.call(t))}}),,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,(function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e){var n=[],r=!0,o=!1,c=void 0;try{for(var f,a=(0,x.default)(g.default.defaults.midwares);!(r=(f=a.next()).done);r=!0){var s=f.value;n.push(s)}}catch(t){o=!0,c=t}finally{try{!r&&a.return&&a.return()}finally{if(o)throw c}}return e&&n.push(e),0===n.length||!1===e?u(t):i(t,n,0).then((function(t){return u(t)}))}function i(t,e,n){var r=e[n];return new m.default(function(e,n){r(t,e)}).then((function(t){return n===e.length-1?m.default.resolve(t):(n++,i(t,e,n))}))}function u(t){return t.status>=200&&t.status<400?m.default.resolve(t):m.default.reject(t)}function c(t){var e={message:t.message,status:0,data:null,config:t.config,request:t.request};return t.response?(0,h.default)(e,t.response):e}function f(t,e,n,r){var o=t.status;"object"!==(void 0===e?"undefined":(0,d.default)(e))&&(e={});var i=e[o]||g.default.defaults.errorHandler[o]||e.all||g.default.defaults.errorHandler.all;i?i(t,j).then((function(t){n(t)})).catch((function(t){r(t)})):r(t)}function a(t,e,n,r){o(t,e.midware).then((function(t){n(t)})).catch((function(t){if(!1===e.errorHandler)r(t);else{f(t,e.errorHandler,n,r)}}))}function s(t){var e=[],n=!0,r=!1,o=void 0;try{for(var u,c=(0,x.default)(g.default.defaults.preMidwares);!(n=(u=c.next()).done);n=!0){var f=u.value;e.push(f)}}catch(t){r=!0,o=t}finally{try{!n&&c.return&&c.return()}finally{if(r)throw o}}return t.preMidware&&e.push(t.preMidware),0===e.length||!1===t.preMidware?m.default.resolve(t):i(t,e,0).then((function(t){return t}))}function l(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.config=t,this.create=function(){return new l(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{})},this.request=function(t){return t=(0,h.default)(t,this.config),new m.default(function(e,n){s(t).then((function(t){g.default.request(t).then((function(r){a(r,t,e,n)})).catch((function(r){a(c(r),t,e,n)}))}))})},this.get=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return e.url=t,e.method="get",this.request(e)},this.post=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return n.url=t,n.method="post",n.data=e,this.request(n)},this.put=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return n.url=t,n.method="put",n.data=e,this.request(n)},this.delete=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return e.url=t,e.method="delete",this.request(e)}}Object.defineProperty(e,"__esModule",{value:!0}),e.tkAjaxGlobal=e.tkAjax=void 0;var p=n(65),d=r(p),v=n(53),h=r(v),y=n(64),m=r(y),_=n(92),x=r(_),b=n(179),g=r(b);g.default.defaults.errorHandler={},g.default.defaults.midwares=[],g.default.defaults.preMidwares=[];var w=g.default.defaults,j=new l;e.tkAjax=j,e.tkAjaxGlobal=w}),(function(e,n){e.exports=t}),,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,(function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.install=e.default=void 0;var o=n(261),i=r(o),u=n(16),c=r(u),f=function(t){c.default.defineProperty("$tkParse",i.default,t)};i.default.install=f,e.default=i.default,e.install=f}),(function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e){var n=e.find((function(e){return e.className===t}));return n?n.fields:null}function i(t,e){return t.__type||!e?t:("Date"===e.type?t={__type:"Date",iso:t}:"Pointer"===e.type?t={__type:"Pointer",className:e.targetClass,objectId:t}:"GeoPoint"===e.type&&(t={__type:"GeoPoint",latitude:t.latitude,longitude:t.longitude}),t)}function u(t){return t&&t.__type?("Date"===t.__type?t=t.iso:"Pointer"===t.__type?t=t.objectId:"Object"===t.__type&&(t=c(t)),t):t}function c(t){for(var e in t)t[e]=u(t[e]);return t}function f(t,e){null!==y.model&&/\/classes\//.test(t.url)||e(t);var n=["$exists","$select","$dontSelect","$all","$regex","$text"],r=t.url.match(/\/classes\/([^\/?]+)/);null===r&&e(t);var u=r[1],c=o(u,y.model);if(null===c&&e(t),t.data)for(var f in t.data)t.data[f]=i(t.data[f],c[f]);if(t.params&&t.params.where){var a=t.params.where;for(var s in a)if("object"===(0,d.default)(a[s])&&/^\$/.test((0,l.default)(a[s])[0]))for(var p in a[s])-1===n.indexOf(p)&&(a[s][p]=i(a[s][p],c[s]));else a[s]=i(a[s],c[s])}e(t)}function a(t,e){null!==y.model&&/\/classes\//.test(t.config.url)&&200===t.status||e(t);var n=t.config.url.match(/\/classes\/([^\/?]+)/);null===n&&e(t),null===o(n[1],y.model)&&e(t);var r=t.data;if(r.results)for(var i in r.results){var c=r.results[i];for(var f in c)c[f]=u(c[f])}else for(var a in r)r[a]=u(r[a]);e(t)}Object.defineProperty(e,"__esModule",{value:!0});var s=n(262),l=r(s),p=n(65),d=r(p),v=n(91),h=r(v),y={isParse:!0,intance:null,model:null,options:{headers:{},preMidware:f,midware:a},init:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!e.model||!e.baseURL)throw new Error("缺少model或baseUrl");this.model=e.model,this.options.headers={"X-Parse-Application-Id":e.appId,"X-Parse-REST-API-Key":e.restKey,"X-Parse-Master-Key":e.masterKey,"X-Parse-Session-Token":e.sessionToken},(0,l.default)(this.options.headers).forEach((function(e){return void 0===t.options.headers[e]&&delete t.options.headers[e]})),this.options.baseURL=e.baseURL,this.intance=h.default.create(this.options)},setSessionToken:function(t){this.options.headers["X-Parse-Session-Token"]=t,this.intance=h.default.create(this.options)},formatField:function(t,e){null!==this.model&&/\/classes\//.test(t.url)||e(t);var n=t.url.match(/\/classes\/([^\/?])+/);null===n&&e(t);var r=n[1],u=o(r,this.model);if(null===u&&e(t),t.data)for(var c in t.data)t.data[c]=i(t.data[c],u[c]);if(t.params&&t.params.where){var f=t.params.where;for(var a in f)if("object"===(0,d.default)(f[a])&&/^\$/.test((0,l.default)(f[a])[0]))for(var s in f[a])f[a][s]=i(f[a][s],u[a]);else f[a]=i(f[a],u[a])}e(t)},get:function(t,e){return this.intance.get(t,e)},post:function(t,e,n){return this.intance.post(t,e,n)},put:function(t,e,n){return this.intance.put(t,e,n)},delete:function(t,e){return this.intance.delete(t,e)},request:function(t,e){return this.intance.request(t,e)}};e.default=y,t.exports=e.default}),(function(t,e,n){t.exports={default:n(263),__esModule:!0}}),(function(t,e,n){n(264),t.exports=n(2).Object.keys}),(function(t,e,n){var r=n(39),o=n(21);n(265)("keys",(function(){return function(t){return o(r(t))}}))}),(function(t,e,n){var r=n(8),o=n(2),i=n(10);t.exports=function(t,e){var n=(o.Object||{})[t]||Object[t],u={};u[t]=e(n),r(r.S+r.F*i((function(){n(1)})),"Object",u)}}),,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,(function(t,e,n){t.exports=n(260)})])}));