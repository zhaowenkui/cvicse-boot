(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-2d0e8fd4"],{"8c2e":function(e,t,a){"use strict";a.r(t);a("1951"),a("450d");var r=a("eedf"),l=a.n(r),o=(a("10cb"),a("f3ad")),n=a.n(o),i=(a("425f"),a("4105")),s=a.n(i),m=(a("eca7"),a("3787")),u=a.n(m),d=(a("cadf"),a("551c"),a("097d"),{extends:u.a,computed:{validateMessageDisplay:function(){return this.validateMessage}}}),c=a("2877"),b=Object(c.a)(d,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"el-form-item",class:[{"el-form-item--feedback":e.elForm&&e.elForm.statusIcon,"is-error":"error"===e.validateState,"is-validating":"validating"===e.validateState,"is-success":"success"===e.validateState,"is-required":e.isRequired||e.required,"is-no-asterisk":e.elForm&&e.elForm.hideRequiredAsterisk},e.sizeClass?"el-form-item--"+e.sizeClass:""]},[e.label||e.$slots.label?a("label",{staticClass:"el-form-item__label",style:e.labelStyle,attrs:{for:e.labelFor}},[e._t("label",[e._v(e._s(e.label+e.form.labelSuffix))])],2):e._e(),a("div",{staticClass:"el-form-item__content",style:e.contentStyle},[e._t("default"),a("transition",{attrs:{name:"el-zoom-in-top"}},["error"===e.validateState&&e.showMessage&&e.form.showMessage?e._t("error",[a("div",{staticClass:"el-form-item__error",class:{"el-form-item__error--inline":"boolean"==typeof e.inlineMessage?e.inlineMessage:e.elForm&&e.elForm.inlineMessage||!1}},[e._v("\n          "+e._s(e.validateMessageDisplay)+"\n        ")])],{error:e.validateMessageDisplay}):e._e()],2)],2)])},[],!1,null,null,null).exports,f={name:"demo-validator",components:{Form:s.a,FormItem:b,Input:n.a,Button:l.a},data:function(){return{numberValidateForm:{age:"",money:0,testChina:"",testNoChina:"",idCardNo:"",mobilePhone:""}}},methods:{submitForm:function(e){this.$refs[e].validate(function(e){if(!e)return!1;alert("submit!")})},resetForm:function(e){this.$refs[e].resetFields()},valid_number:function(e,t){return{type:"number",message:"年龄范围错误（".concat(e,"~").concat(t,"）"),min:e,max:t}}}},p=Object(c.a)(f,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("d2-container",[a("template",{slot:"header"},[e._v("输入校验")]),a("Form",{ref:"numberValidateForm",staticClass:"demo-ruleForm",attrs:{model:e.numberValidateForm,"label-width":"100px"}},[a("FormItem",{attrs:{label:"年龄",prop:"age",rules:e.validNumber(1,100)}},[a("Input",{attrs:{type:"age",autocomplete:"off"},model:{value:e.numberValidateForm.age,callback:function(t){e.$set(e.numberValidateForm,"age",e._n(t))},expression:"numberValidateForm.age"}})],1),a("FormItem",{attrs:{label:"金额",prop:"money",rules:e.validDecimal()}},[a("Input",{attrs:{autocomplete:"off"},model:{value:e.numberValidateForm.money,callback:function(t){e.$set(e.numberValidateForm,"money",t)},expression:"numberValidateForm.money"}})],1),a("FormItem",{attrs:{label:"包含中文",prop:"testChina",rules:e.validMustIncludeChinese()}},[a("Input",{attrs:{autocomplete:"off"},model:{value:e.numberValidateForm.testChina,callback:function(t){e.$set(e.numberValidateForm,"testChina",t)},expression:"numberValidateForm.testChina"}})],1),a("FormItem",{attrs:{label:"不包含中文",prop:"testNoChina",rules:e.validCannotIncludeChinese()}},[a("Input",{attrs:{autocomplete:"off"},model:{value:e.numberValidateForm.testNoChina,callback:function(t){e.$set(e.numberValidateForm,"testNoChina",t)},expression:"numberValidateForm.testNoChina"}})],1),a("FormItem",{attrs:{label:"身份证号",prop:"idCardNo",rules:e.validIdCardNo()}},[a("Input",{attrs:{autocomplete:"off"},model:{value:e.numberValidateForm.idCardNo,callback:function(t){e.$set(e.numberValidateForm,"idCardNo",t)},expression:"numberValidateForm.idCardNo"}})],1),a("FormItem",{attrs:{label:"手机号码",prop:"mobilePhone",rules:e.validMobilePhone()}},[a("Input",{attrs:{autocomplete:"off"},model:{value:e.numberValidateForm.mobilePhone,callback:function(t){e.$set(e.numberValidateForm,"mobilePhone",t)},expression:"numberValidateForm.mobilePhone"}})],1),a("FormItem",[a("Button",{attrs:{type:"primary"},on:{click:function(t){e.submitForm("numberValidateForm")}}},[e._v("提交")]),a("Button",{on:{click:function(t){e.resetForm("numberValidateForm")}}},[e._v("重置")])],1)],1)],2)},[],!1,null,null,null);t.default=p.exports}}]);