webpackJsonp([1],[,,,function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var u=n(1),i=r(u),s=n(17),o=r(s),c=n(14),a=r(c);i.default.use(o.default),t.default=new o.default({routes:[{path:"/",name:"index",component:a.default}]})},function(e,t,n){function r(e){n(9)}var u=n(2)(n(5),n(15),r,null,null);e.exports=u.exports},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"app"}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"index",mounted:function(){var e=this.$refs.img;this.fresh(e)},methods:{fresh:function(e){var t=setInterval(function(){var n=this,r=document.createElement("img");r.src="https://lorempixel.com/400/200/",r.onload=function(){e.src="https://lorempixel.com/400/200/"},r.onerror=function(){clearInterval(t),setTimeout(n.fresh,18e4)}},3e4)}}}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var u=n(1),i=r(u),s=n(4),o=r(s),c=n(3),a=r(c);i.default.config.productionTip=!1,new i.default({el:"#app",router:a.default,template:"<App/>",components:{App:o.default}})},,function(e,t){},function(e,t){},,,,function(e,t,n){function r(e){n(10)}var u=n(2)(n(6),n(16),r,null,null);e.exports=u.exports},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"title"},[e._v("welcome to this demo")]),e._v(" "),n("div",{staticClass:"img"},[n("img",{ref:"img",attrs:{src:"https://lorempixel.com/400/200/"}})]),e._v(" "),e._m(0),e._v(" "),e._m(1)])},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("button",[e._v("订阅图片")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"message"},[n("p",[e._v("\n            you can subscribe, then we will message you picture change. dont you want see new picture?\n            its beatiful.\n        ")])])}]}}],[7]);
//# sourceMappingURL=app.e1b803d93f00f8e0172a.js.map