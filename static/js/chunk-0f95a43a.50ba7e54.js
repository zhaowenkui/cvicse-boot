(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-0f95a43a"],{"0f6c":function(t,e){t.exports=function(n){var s={};function r(t){if(s[t])return s[t].exports;var e=s[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,r),e.l=!0,e.exports}return r.m=n,r.c=s,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:n})},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/dist/",r(r.s=282)}({282:function(t,e,n){"use strict";e.__esModule=!0;var s,r=n(283),o=(s=r)&&s.__esModule?s:{default:s};o.default.install=function(t){t.component(o.default.name,o.default)},e.default=o.default},283:function(t,e,n){"use strict";e.__esModule=!0,e.default={name:"ElRow",componentName:"ElRow",props:{tag:{type:String,default:"div"},gutter:Number,type:String,justify:{type:String,default:"start"},align:{type:String,default:"top"}},computed:{style:function(){var t={};return this.gutter&&(t.marginLeft="-"+this.gutter/2+"px",t.marginRight=t.marginLeft),t}},render:function(t){return t(this.tag,{class:["el-row","start"!==this.justify?"is-justify-"+this.justify:"","top"!==this.align?"is-align-"+this.align:"",{"el-row--flex":"flex"===this.type}],style:this.style},this.$slots.default)}}}})},1951:function(t,e,n){},"7a0f":function(t,e,n){},eb2e:function(t,e,n){"use strict";n.r(e);n("7a0f"),n("450d");var s=n("0f6c"),r=n.n(s),o=(n("1951"),n("eedf")),a={name:"page1",components:{Button:n.n(o).a,Row:r.a}},i=n("2877"),u=Object(i.a)(a,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("d2-container",[n("h1",{staticClass:"d2-mt-0"},[t._v("权限测试")]),t.checkPermission("/demo/test1")?n("Row",{staticClass:"d2-mb"},[n("Button",[t._v("默认按钮")]),n("Button",{attrs:{type:"primary"}},[t._v("主要按钮")]),n("Button",{attrs:{type:"success"}},[t._v("成功按钮")]),n("Button",{attrs:{type:"info"}},[t._v("信息按钮")]),t.checkPermission("/demo/test2")?n("Button",{attrs:{type:"warning"}},[t._v("警告按钮")]):t._e(),t.checkPermission("/demo/test3")?n("Button",{attrs:{type:"danger"}},[t._v("危险按钮")]):t._e()],1):t._e(),t.checkPermission("/demo/test2")?n("Row",{staticClass:"d2-mb"},[n("Button",{attrs:{plain:""}},[t._v("朴素按钮")]),n("Button",{attrs:{type:"primary",plain:""}},[t._v("主要按钮")]),n("Button",{attrs:{type:"success",plain:""}},[t._v("成功按钮")]),n("Button",{attrs:{type:"info",plain:""}},[t._v("信息按钮")]),n("Button",{attrs:{type:"warning",plain:""}},[t._v("警告按钮")]),t.checkPermission("/demo/test3")?n("Button",{attrs:{type:"danger",plain:""}},[t._v("危险按钮")]):t._e()],1):t._e(),t.checkPermission("/demo/test3")?n("Row",{staticClass:"d2-mb"},[n("Button",{attrs:{round:""}},[t._v("圆角按钮")]),n("Button",{attrs:{type:"primary",round:""}},[t._v("主要按钮")]),n("Button",{attrs:{type:"success",round:""}},[t._v("成功按钮")]),n("Button",{attrs:{type:"info",round:""}},[t._v("信息按钮")]),n("Button",{attrs:{type:"warning",round:""}},[t._v("警告按钮")]),n("Button",{attrs:{type:"danger",round:""}},[t._v("危险按钮")])],1):t._e()],1)},[],!1,null,null,null);u.options.__file="index.vue";e.default=u.exports}}]);