(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-2d0b9d29"],{"351b":function(e,t,n){"use strict";n.r(t);var i=n("722f0"),o={name:"demo-graph-editor",mounted:function(){if(i.a.mxClient.isBrowserSupported()){i.a.mxEvent.disableContextMenu(this.$refs.container);var e=new i.a.mxGraph(this.$refs.container);e.resizeContainer=!0,e.setEnabled(!0),new i.a.mxRubberband(e);var t=e.getDefaultParent();e.getModel().beginUpdate();try{var n=e.insertVertex(t,null,"Hello,",20,20,80,30),o=e.insertVertex(t,null,"World!",200,150,80,30);e.insertEdge(t,null,"",n,o)}finally{e.getModel().endUpdate()}}else i.a.mxUtils.error("Browser is not supported!",200,!1)}},l=n("2877"),s=Object(l.a)(o,function(){var e=this.$createElement,t=this._self._c||e;return t("d2-container",[t("div",{ref:"container",staticStyle:{position:"absolute",top:"0",left:"0",border:"1px solid blue"}})])},[],!1,null,null,null);s.options.__file="editor.vue";t.default=s.exports}}]);