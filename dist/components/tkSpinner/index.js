/*!
* Vue Tk
*/   
!(function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["vue-tk"]=t():e["vue-tk"]=t()})(this,(function(){return (function(e){function t(i){if(n[i])return n[i].exports;var a=n[i]={i:i,l:!1,exports:{}};return e[i].call(a.exports,a,a.exports,t),a.l=!0,a.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:i})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s=301)})([,,,(function(e,t){e.exports=function(e,t,n,i,a){var s,r=e=e||{},o=typeof e.default;"object"!==o&&"function"!==o||(s=e,r=e.default);var l="function"==typeof r?r.options:r;t&&(l.render=t.render,l.staticRenderFns=t.staticRenderFns),i&&(l._scopeId=i);var u;if(a?(u=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(a)},l._ssrRegister=u):n&&(u=n),u){var d=l.functional,c=d?l.render:l.beforeCreate;d?l.render=function(e,t){return u.call(t),c(e,t)}:l.beforeCreate=c?[].concat(c,u):[u]}return{esModule:s,exports:r,options:l}}}),,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,(function(e,t,n){"use strict";function i(e){n(111)}Object.defineProperty(t,"__esModule",{value:!0});var a=n(112),s=n.n(a),r=n(177),o=n(3),l=i,u=o(s.a,r.a,l,null,null);t.default=u.exports}),,(function(e,t){}),(function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(113),s=i(a),r=n(117),o=i(r),l=n(121),u=i(l),d=n(125),c=i(d),p=n(129),f=i(p),y=n(133),v=i(y),h=n(137),m=i(h),g=n(141),S=i(g),_=n(145),x=i(_),b=n(149),C=i(b),w=n(153),D=i(w),z=n(157),R=i(z),M=n(161),j=i(M),P=n(165),O=i(P),L=n(169),F=i(L),B=n(173),k=i(B);t.default={name:"tk-spinner",data:function(){return{}},props:{type:{type:String,default:"pulse"},color:{type:String,default:"#5dc596"},size:{type:String}},computed:{loader:function(){return this.capitalizeFirstLetter(this.type)+"Loader"}},methods:{capitalizeFirstLetter:function(e){return e.charAt(0).toUpperCase()+e.slice(1)}},components:{BeatLoader:s.default,BounceLoader:o.default,ClipLoader:u.default,DotLoader:c.default,FadeLoader:f.default,GridLoader:v.default,MoonLoader:m.default,PacmanLoader:S.default,PulseLoader:x.default,RingLoader:C.default,RiseLoader:D.default,RotateLoader:R.default,ScaleLoader:j.default,SkewLoader:O.default,SquareLoader:F.default,SyncLoader:k.default}},e.exports=t.default}),(function(e,t,n){"use strict";function i(e){n(114)}Object.defineProperty(t,"__esModule",{value:!0});var a=n(115),s=n.n(a),r=n(116),o=n(3),l=i,u=o(s.a,r.a,l,null,null);t.default=u.exports}),(function(e,t){}),(function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"BeatLoader",props:{loading:{type:Boolean,default:!0},color:{type:String,default:"#5dc596"},size:{type:String,default:"15px"},margin:{type:String,default:"2px"},radius:{type:String,default:"100%"}},data:function(){return{spinnerStyle:{backgroundColor:this.color,height:this.size,width:this.size,margin:this.margin,borderRadius:this.radius}}}},e.exports=t.default}),(function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"show",rawName:"v-show",value:e.loading,expression:"loading"}],staticClass:"v-spinner"},[n("div",{staticClass:"v-beat v-beat-odd",style:e.spinnerStyle}),e._v(" "),n("div",{staticClass:"v-beat v-beat-even",style:e.spinnerStyle}),e._v(" "),n("div",{staticClass:"v-beat v-beat-odd",style:e.spinnerStyle})])},a=[],s={render:i,staticRenderFns:a};t.a=s}),(function(e,t,n){"use strict";function i(e){n(118)}Object.defineProperty(t,"__esModule",{value:!0});var a=n(119),s=n.n(a),r=n(120),o=n(3),l=i,u=o(s.a,r.a,l,null,null);t.default=u.exports}),(function(e,t){}),(function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"BounceLoader",props:{loading:{type:Boolean,default:!0},color:{type:String,default:"#5dc596"},size:{type:String,default:"60px"},margin:{type:String,default:"2px"},radius:{type:String,default:"100%"}},data:function(){return{spinnerStyle:{backgroundColor:this.color,height:this.size,width:this.size,borderRadius:this.radius,opacity:.6,position:"absolute",top:0,left:0}}},computed:{spinnerBasicStyle:function(){return{height:this.size,width:this.size,position:"relative"}}}},e.exports=t.default}),(function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"show",rawName:"v-show",value:e.loading,expression:"loading"}],staticClass:"v-spinner"},[n("div",{staticClass:"v-bounce v-bounce1",style:e.spinnerBasicStyle},[n("div",{staticClass:"v-bounce v-bounce2",style:e.spinnerStyle}),e._v(" "),n("div",{staticClass:"v-bounce v-bounce3",style:e.spinnerStyle})])])},a=[],s={render:i,staticRenderFns:a};t.a=s}),(function(e,t,n){"use strict";function i(e){n(122)}Object.defineProperty(t,"__esModule",{value:!0});var a=n(123),s=n.n(a),r=n(124),o=n(3),l=i,u=o(s.a,r.a,l,null,null);t.default=u.exports}),(function(e,t){}),(function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"ClipLoader",props:{loading:{type:Boolean,default:!0},color:{type:String,default:"#5dc596"},size:{type:String,default:"35px"},radius:{type:String,default:"100%"}},computed:{spinnerStyle:function(){return{height:this.size,width:this.size,borderWidth:"2px",borderStyle:"solid",borderColor:this.color+" "+this.color+" transparent",borderRadius:this.radius,background:"transparent !important"}}}},e.exports=t.default}),(function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"show",rawName:"v-show",value:e.loading,expression:"loading"}],staticClass:"v-spinner"},[n("div",{staticClass:"v-clip",style:e.spinnerStyle})])},a=[],s={render:i,staticRenderFns:a};t.a=s}),(function(e,t,n){"use strict";function i(e){n(126)}Object.defineProperty(t,"__esModule",{value:!0});var a=n(127),s=n.n(a),r=n(128),o=n(3),l=i,u=o(s.a,r.a,l,null,null);t.default=u.exports}),(function(e,t){}),(function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"DotLoader",props:{loading:{type:Boolean,default:!0},color:{type:String,default:"#5dc596"},size:{type:String,default:"60px"},margin:{type:String,default:"2px"},radius:{type:String,default:"100%"}},computed:{spinnerStyle:function(){return{backgroundColor:this.color,height:parseFloat(this.size)/2+"px",width:parseFloat(this.size)/2+"px",borderRadius:this.radius}},spinnerBasicStyle:function(){return{height:this.size,width:this.size,position:"relative"}}}},e.exports=t.default}),(function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"show",rawName:"v-show",value:e.loading,expression:"loading"}],staticClass:"v-spinner"},[n("div",{staticClass:"v-dot v-dot1",style:e.spinnerBasicStyle},[n("div",{staticClass:"v-dot v-dot2",style:e.spinnerStyle}),e._v(" "),n("div",{staticClass:"v-dot v-dot3",style:e.spinnerStyle})])])},a=[],s={render:i,staticRenderFns:a};t.a=s}),(function(e,t,n){"use strict";function i(e){n(130)}Object.defineProperty(t,"__esModule",{value:!0});var a=n(131),s=n.n(a),r=n(132),o=n(3),l=i,u=o(s.a,r.a,l,null,null);t.default=u.exports}),(function(e,t){}),(function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"FadeLoader",props:{loading:{type:Boolean,default:!0},color:{type:String,default:"#5dc596"},height:{type:String,default:"15px"},width:{type:String,default:"5px"},margin:{type:String,default:"2px"},radius:{type:String,default:"2px"}},data:function(){return{spinnerStyle:{backgroundColor:this.color,height:this.height,width:this.width,margin:this.margin,borderRadius:this.radius}}},computed:{ngRadius:function(){return"-"+this.radius},quarter:function(){return parseFloat(this.radius)/2+parseFloat(this.radius)/5.5+"px"},ngQuarter:function(){return"-"+this.quarter},animationStyle1:function(){return{top:this.radius,left:0,animationDelay:"0.12s"}},animationStyle2:function(){return{top:this.quarter,left:this.quarter,animationDelay:"0.24s",transform:"rotate(-45deg)"}},animationStyle3:function(){return{top:0,left:this.radius,animationDelay:"0.36s",transform:"rotate(90deg)"}},animationStyle4:function(){return{top:this.ngQuarter,left:this.quarter,animationDelay:"0.48s",transform:"rotate(45deg)"}},animationStyle5:function(){return{top:this.ngRadius,left:0,animationDelay:"0.60s"}},animationStyle6:function(){return{top:this.ngQuarter,left:this.ngQuarter,animationDelay:"0.72s",transform:"rotate(-45deg)"}},animationStyle7:function(){return{top:0,left:this.ngRadius,animationDelay:"0.84s",transform:"rotate(90deg)"}},animationStyle8:function(){return{top:this.quarter,left:this.ngQuarter,animationDelay:"0.96s",transform:"rotate(45deg)"}}}},e.exports=t.default}),(function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"show",rawName:"v-show",value:e.loading,expression:"loading"}],staticClass:"v-spinner",style:{position:"relative",fontSize:0}},[n("div",{staticClass:"v-fade v-fade1",style:[e.spinnerStyle,e.animationStyle1]}),e._v(" "),n("div",{staticClass:"v-fade v-fade2",style:[e.spinnerStyle,e.animationStyle2]}),e._v(" "),n("div",{staticClass:"v-fade v-fade3",style:[e.spinnerStyle,e.animationStyle3]}),e._v(" "),n("div",{staticClass:"v-fade v-fade4",style:[e.spinnerStyle,e.animationStyle4]}),e._v(" "),n("div",{staticClass:"v-fade v-fade5",style:[e.spinnerStyle,e.animationStyle5]}),e._v(" "),n("div",{staticClass:"v-fade v-fade6",style:[e.spinnerStyle,e.animationStyle6]}),e._v(" "),n("div",{staticClass:"v-fade v-fade7",style:[e.spinnerStyle,e.animationStyle7]}),e._v(" "),n("div",{staticClass:"v-fade v-fade8",style:[e.spinnerStyle,e.animationStyle8]})])},a=[],s={render:i,staticRenderFns:a};t.a=s}),(function(e,t,n){"use strict";function i(e){n(134)}Object.defineProperty(t,"__esModule",{value:!0});var a=n(135),s=n.n(a),r=n(136),o=n(3),l=i,u=o(s.a,r.a,l,null,null);t.default=u.exports}),(function(e,t){}),(function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"GridLoader",props:{loading:{type:Boolean,default:!0},color:{type:String,default:"#5dc596"},size:{type:String,default:"15px"},margin:{type:String,default:"2px"},radius:{type:String,default:"100%"}},data:function(){return{spinnerStyle:{backgroundColor:this.color,width:this.size,height:this.size,margin:this.margin,borderRadius:this.radius}}},computed:{animationStyle:function(){return{}},animationStyle1:function(){return{animationDelay:this.delay(),animationDuration:this.duration()}},animationStyle2:function(){return{animationDelay:this.delay(),animationDuration:this.duration()}},animationStyle3:function(){return{animationDelay:this.delay(),animationDuration:this.duration()}},animationStyle4:function(){return{animationDelay:this.delay(),animationDuration:this.duration()}},animationStyle5:function(){return{animationDelay:this.delay(),animationDuration:this.duration()}},animationStyle6:function(){return{animationDelay:this.delay(),animationDuration:this.duration()}},animationStyle7:function(){return{animationDelay:this.delay(),animationDuration:this.duration()}},animationStyle8:function(){return{animationDelay:this.delay(),animationDuration:this.duration()}},animationStyle9:function(){return{animationDelay:this.delay(),animationDuration:this.duration()}},containerStyle:function(){return{width:3*parseFloat(this.size)+6*parseFloat(this.margin)+"px",fontSize:0}}},methods:{random:function(e){return Math.random()*e},delay:function(){return this.random(100)/100-.2+"s"},duration:function(){return this.random(100)/100+.6+"s"}}},e.exports=t.default}),(function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"show",rawName:"v-show",value:e.loading,expression:"loading"}],staticClass:"v-spinner",style:e.containerStyle},[n("div",{staticClass:"v-grid v-grid1",style:[e.spinnerStyle,e.animationStyle,e.animationStyle1]}),e._v(" "),n("div",{staticClass:"v-grid v-grid2",style:[e.spinnerStyle,e.animationStyle,e.animationStyle2]}),e._v(" "),n("div",{staticClass:"v-grid v-grid3",style:[e.spinnerStyle,e.animationStyle,e.animationStyle3]}),e._v(" "),n("div",{staticClass:"v-grid v-grid4",style:[e.spinnerStyle,e.animationStyle,e.animationStyle4]}),e._v(" "),n("div",{staticClass:"v-grid v-grid5",style:[e.spinnerStyle,e.animationStyle,e.animationStyle5]}),e._v(" "),n("div",{staticClass:"v-grid v-grid6",style:[e.spinnerStyle,e.animationStyle,e.animationStyle6]}),e._v(" "),n("div",{staticClass:"v-grid v-grid7",style:[e.spinnerStyle,e.animationStyle,e.animationStyle7]}),e._v(" "),n("div",{staticClass:"v-grid v-grid8",style:[e.spinnerStyle,e.animationStyle,e.animationStyle8]}),e._v(" "),n("div",{staticClass:"v-grid v-grid9",style:[e.spinnerStyle,e.animationStyle,e.animationStyle9]})])},a=[],s={render:i,staticRenderFns:a};t.a=s}),(function(e,t,n){"use strict";function i(e){n(138)}Object.defineProperty(t,"__esModule",{value:!0});var a=n(139),s=n.n(a),r=n(140),o=n(3),l=i,u=o(s.a,r.a,l,null,null);t.default=u.exports}),(function(e,t){}),(function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"MoonLoader",props:{loading:{type:Boolean,default:!0},color:{type:String,default:"#5dc596"},size:{type:String,default:"60px"},margin:{type:String,default:"2px"},radius:{type:String,default:"100%"}},data:function(){return{spinnerStyle:{height:this.size,width:this.size,borderRadius:this.radius}}},computed:{moonSize:function(){return parseFloat(this.size)/7},spinnerMoonStyle:function(){return{height:this.moonSize+"px",width:this.moonSize+"px",borderRadius:this.radius}},animationStyle2:function(){return{top:parseFloat(this.size)/2-this.moonSize/2+"px",backgroundColor:this.color}},animationStyle3:function(){return{border:this.moonSize+"px solid "+this.color}}}},e.exports=t.default}),(function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"show",rawName:"v-show",value:e.loading,expression:"loading"}],staticClass:"v-spinner"},[n("div",{staticClass:"v-moon v-moon1",style:e.spinnerStyle},[n("div",{staticClass:"v-moon v-moon2",style:[e.spinnerMoonStyle,e.animationStyle2]}),e._v(" "),n("div",{staticClass:"v-moon v-moon3",style:[e.spinnerStyle,e.animationStyle3]})])])},a=[],s={render:i,staticRenderFns:a};t.a=s}),(function(e,t,n){"use strict";function i(e){n(142)}Object.defineProperty(t,"__esModule",{value:!0});var a=n(143),s=n.n(a),r=n(144),o=n(3),l=i,u=o(s.a,r.a,l,null,null);t.default=u.exports}),(function(e,t){}),(function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"PacmanLoader",props:{loading:{type:Boolean,default:!0},color:{type:String,default:"#5dc596"},size:{type:String,default:"25px"},margin:{type:String,default:"2px"},radius:{type:String,default:"100%"}},data:function(){return{spinnerDelay2:{animationDelay:"0.25s"},spinnerDelay3:{animationDelay:"0.50s"},spinnerDelay4:{animationDelay:"0.75s"},spinnerDelay5:{animationDelay:"1s"}}},computed:{spinnerStyle:function(){return{backgroundColor:this.color,width:this.size,height:this.size,margin:this.margin,borderRadius:this.radius}},border1:function(){return this.size+" solid transparent"},border2:function(){return this.size+" solid "+this.color},spinnerStyle1:function(){return{width:0,height:0,borderTop:this.border2,borderRight:this.border1,borderBottom:this.border2,borderLeft:this.border2,borderRadius:this.size}},animationStyle:function(){return{width:"10px",height:"10px",transform:"translate(0, "+-parseFloat(this.size)/4+"px)",position:"absolute",top:"25px",left:"100px"}}}},e.exports=t.default}),(function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"show",rawName:"v-show",value:e.loading,expression:"loading"}],staticClass:"v-spinner",style:{position:"relative",fontSize:0}},[n("div",{staticClass:"v-pacman v-pacman1",style:e.spinnerStyle1}),e._v(" "),n("div",{staticClass:"v-pacman v-pacman2",style:[e.spinnerStyle,e.animationStyle,e.spinnerDelay2]}),e._v(" "),n("div",{staticClass:"v-pacman v-pacman3",style:[e.spinnerStyle,e.animationStyle,e.spinnerDelay3]}),e._v(" "),n("div",{staticClass:"v-pacman v-pacman4",style:[e.spinnerStyle,e.animationStyle,e.spinnerDelay4]}),e._v(" "),n("div",{staticClass:"v-pacman v-pacman5",style:[e.spinnerStyle,e.animationStyle,e.spinnerDelay5]})])},a=[],s={render:i,staticRenderFns:a};t.a=s}),(function(e,t,n){"use strict";function i(e){n(146)}Object.defineProperty(t,"__esModule",{value:!0});var a=n(147),s=n.n(a),r=n(148),o=n(3),l=i,u=o(s.a,r.a,l,null,null);t.default=u.exports}),(function(e,t){}),(function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"PulseLoader",props:{loading:{type:Boolean,default:!0},color:{type:String,default:"#5dc596"},size:{type:String,default:"15px"},margin:{type:String,default:"2px"},radius:{type:String,default:"100%"}},data:function(){return{spinnerStyle:{backgroundColor:this.color,width:this.size,height:this.size,margin:this.margin,borderRadius:this.radius},spinnerDelay1:{animationDelay:"0.12s"},spinnerDelay2:{animationDelay:"0.24s"},spinnerDelay3:{animationDelay:"0.36s"}}}},e.exports=t.default}),(function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"show",rawName:"v-show",value:e.loading,expression:"loading"}],staticClass:"v-spinner"},[n("div",{staticClass:"v-pulse v-pulse1",style:[e.spinnerStyle,e.spinnerDelay1]}),e._v(" "),n("div",{staticClass:"v-pulse v-pulse2",style:[e.spinnerStyle,e.spinnerDelay2]}),e._v(" "),n("div",{staticClass:"v-pulse v-pulse3",style:[e.spinnerStyle,e.spinnerDelay3]})])},a=[],s={render:i,staticRenderFns:a};t.a=s}),(function(e,t,n){"use strict";function i(e){n(150)}Object.defineProperty(t,"__esModule",{value:!0});var a=n(151),s=n.n(a),r=n(152),o=n(3),l=i,u=o(s.a,r.a,l,null,null);t.default=u.exports}),(function(e,t){}),(function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"RingLoader",props:{loading:{type:Boolean,default:!0},color:{type:String,default:"#5dc596"},size:{type:String,default:"60px"},margin:{type:String,default:"2px"},radius:{type:String,default:"100%"}},computed:{spinnerStyle:function(){return{height:this.size,width:this.size,border:parseFloat(this.size)/10+"px solid"+this.color,opacity:.4,borderRadius:this.radius}},spinnerBasicStyle:function(){return{height:this.size,width:this.size,position:"relative"}}}},e.exports=t.default}),(function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"show",rawName:"v-show",value:e.loading,expression:"loading"}],staticClass:"v-spinner"},[n("div",{staticClass:"v-ring v-ring1",style:e.spinnerBasicStyle},[n("div",{staticClass:"v-ring v-ring2",style:e.spinnerStyle}),e._v(" "),n("div",{staticClass:"v-ring v-ring3",style:e.spinnerStyle})])])},a=[],s={render:i,staticRenderFns:a};t.a=s}),(function(e,t,n){"use strict";function i(e){n(154)}Object.defineProperty(t,"__esModule",{value:!0});var a=n(155),s=n.n(a),r=n(156),o=n(3),l=i,u=o(s.a,r.a,l,null,null);t.default=u.exports}),(function(e,t){}),(function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"RiseLoader",props:{loading:{type:Boolean,default:!0},color:{type:String,default:"#5dc596"},size:{type:String,default:"15px"},margin:{type:String,default:"2px"},radius:{type:String,default:"100%"}},data:function(){return{spinnerStyle:{backgroundColor:this.color,height:this.size,width:this.size,margin:this.margin,borderRadius:this.radius}}}},e.exports=t.default}),(function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"show",rawName:"v-show",value:e.loading,expression:"loading"}],staticClass:"v-spinner"},[n("div",{staticClass:"v-rise v-rise-odd",style:e.spinnerStyle}),e._v(" "),n("div",{staticClass:"v-rise v-rise-even",style:e.spinnerStyle}),e._v(" "),n("div",{staticClass:"v-rise v-rise-odd",style:e.spinnerStyle}),e._v(" "),n("div",{staticClass:"v-rise v-rise-even",style:e.spinnerStyle}),e._v(" "),n("div",{staticClass:"v-rise v-rise-odd",style:e.spinnerStyle})])},a=[],s={render:i,staticRenderFns:a};t.a=s}),(function(e,t,n){"use strict";function i(e){n(158)}Object.defineProperty(t,"__esModule",{value:!0});var a=n(159),s=n.n(a),r=n(160),o=n(3),l=i,u=o(s.a,r.a,l,null,null);t.default=u.exports}),(function(e,t){}),(function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"RotateLoader",props:{loading:{type:Boolean,default:!0},color:{type:String,default:"#5dc596"},size:{type:String,default:"15px"},margin:{type:String,default:"2px"},radius:{type:String,default:"100%"}},data:function(){return{spinnerStyle:{backgroundColor:this.color,height:this.size,width:this.size,margin:this.margin,borderRadius:this.radius}}}},e.exports=t.default}),(function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"show",rawName:"v-show",value:e.loading,expression:"loading"}],staticClass:"v-spinner"},[n("div",{staticClass:"v-rotate v-rotate1",style:e.spinnerStyle},[n("div",{staticClass:"v-rotate v-rotate2",style:e.spinnerStyle}),e._v(" "),n("div",{staticClass:"v-rotate v-rotate3",style:e.spinnerStyle})])])},a=[],s={render:i,staticRenderFns:a};t.a=s}),(function(e,t,n){"use strict";function i(e){n(162)}Object.defineProperty(t,"__esModule",{value:!0});var a=n(163),s=n.n(a),r=n(164),o=n(3),l=i,u=o(s.a,r.a,l,null,null);t.default=u.exports}),(function(e,t){}),(function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"ScaleLoader",props:{loading:{type:Boolean,default:!0},color:{type:String,default:"#5dc596"},height:{type:String,default:"35px"},width:{type:String,default:"4px"},margin:{type:String,default:"2px"},radius:{type:String,default:"2px"}},data:function(){return{spinnerStyle:{backgroundColor:this.color,height:this.height,width:this.width,margin:this.margin,borderRadius:this.radius},spinnerDelay1:{animationDelay:"0.1s"},spinnerDelay2:{animationDelay:"0.2s"},spinnerDelay3:{animationDelay:"0.3s"},spinnerDelay4:{animationDelay:"0.4s"},spinnerDelay5:{animationDelay:"0.5s"}}}},e.exports=t.default}),(function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"show",rawName:"v-show",value:e.loading,expression:"loading"}],staticClass:"v-spinner"},[n("div",{staticClass:"v-scale v-scale1",style:[e.spinnerStyle,e.spinnerDelay1]}),e._v(" "),n("div",{staticClass:"v-scale v-scale2",style:[e.spinnerStyle,e.spinnerDelay2]}),e._v(" "),n("div",{staticClass:"v-scale v-scale3",style:[e.spinnerStyle,e.spinnerDelay3]}),e._v(" "),n("div",{staticClass:"v-scale v-scale4",style:[e.spinnerStyle,e.spinnerDelay4]}),e._v(" "),n("div",{staticClass:"v-scale v-scale5",style:[e.spinnerStyle,e.spinnerDelay5]})])},a=[],s={render:i,staticRenderFns:a};t.a=s}),(function(e,t,n){"use strict";function i(e){n(166)}Object.defineProperty(t,"__esModule",{value:!0});var a=n(167),s=n.n(a),r=n(168),o=n(3),l=i,u=o(s.a,r.a,l,null,null);t.default=u.exports}),(function(e,t){}),(function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"SkewLoader",props:{loading:{type:Boolean,default:!0},color:{type:String,default:"#5dc596"},size:{type:String,default:"20px"}},data:function(){return{spinnerStyle:{height:0,width:0,borderLeft:this.size+" solid transparent",borderRight:this.size+" solid transparent",borderBottom:this.size+" solid "+this.color}}}},e.exports=t.default}),(function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"show",rawName:"v-show",value:e.loading,expression:"loading"}],staticClass:"v-spinner"},[n("div",{staticClass:"v-skew",style:e.spinnerStyle})])},a=[],s={render:i,staticRenderFns:a};t.a=s}),(function(e,t,n){"use strict";function i(e){n(170)}Object.defineProperty(t,"__esModule",{value:!0});var a=n(171),s=n.n(a),r=n(172),o=n(3),l=i,u=o(s.a,r.a,l,null,null);t.default=u.exports}),(function(e,t){}),(function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"SquareLoader",props:{loading:{type:Boolean,default:!0},color:{type:String,default:"#5dc596"},size:{type:String,default:"50px"}},data:function(){return{spinnerStyle:{backgroundColor:this.color,height:this.size,width:this.size}}}},e.exports=t.default}),(function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"show",rawName:"v-show",value:e.loading,expression:"loading"}],staticClass:"v-spinner"},[n("div",{staticClass:"v-square",style:e.spinnerStyle})])},a=[],s={render:i,staticRenderFns:a};t.a=s}),(function(e,t,n){"use strict";function i(e){n(174)}Object.defineProperty(t,"__esModule",{value:!0});var a=n(175),s=n.n(a),r=n(176),o=n(3),l=i,u=o(s.a,r.a,l,null,null);t.default=u.exports}),(function(e,t){}),(function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"SyncLoader",props:{loading:{type:Boolean,default:!0},color:{type:String,default:"#5dc596"},size:{type:String,default:"15px"},margin:{type:String,default:"2px"},radius:{type:String,default:"100%"}},data:function(){return{spinnerStyle:{backgroundColor:this.color,height:this.size,width:this.size,margin:this.margin,borderRadius:this.radius},spinnerDelay1:{animationDelay:"0.07s"},spinnerDelay2:{animationDelay:"0.14s"},spinnerDelay3:{animationDelay:"0.21s"}}}},e.exports=t.default}),(function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"show",rawName:"v-show",value:e.loading,expression:"loading"}],staticClass:"v-spinner"},[n("div",{staticClass:"v-sync v-sync1",style:[e.spinnerStyle,e.spinnerDelay1]}),e._v(" "),n("div",{staticClass:"v-sync v-sync2",style:[e.spinnerStyle,e.spinnerDelay2]}),e._v(" "),n("div",{staticClass:"v-sync v-sync3",style:[e.spinnerStyle,e.spinnerDelay3]})])},a=[],s={render:i,staticRenderFns:a};t.a=s}),(function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement;return(e._self._c||t)(e.loader,{tag:"component",attrs:{color:e.color,size:e.size}})},a=[],s={render:i,staticRenderFns:a};t.a=s}),,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,(function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.install=t.default=void 0;var i=n(109),a=(function(e){return e&&e.__esModule?e:{default:e}})(i),s=function(e){e.component("tk-spinner",e.extend(a.default))};a.default.install=s,t.default=a.default,t.install=s}),,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,(function(e,t,n){e.exports=n(229)})])}));