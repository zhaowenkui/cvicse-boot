(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-2d0b9d29"],{"351b":function(e,t,n){"use strict";n.r(t);var l=n("722f0"),i={name:"demo-graph-editor",mounted(){if(l.a.mxClient.isBrowserSupported()){l.a.mxEvent.disableContextMenu(this.$refs.container);var e=new l.a.mxGraph(this.$refs.container);e.setPanning(!0),e.setCellsResizable(!1),e.setResizeContainer(!0),e.setEnabled(!0),new l.a.mxRubberband(e);var t=e.getDefaultParent();e.getModel().beginUpdate();try{var n=e.insertVertex(t,null,"Hello,",20,20,80,30),i=e.insertVertex(t,null,"World!",200,150,80,30);e.insertEdge(t,null,"",n,i)}finally{e.getModel().endUpdate()}}else l.a.mxUtils.error("Browser is not supported!",200,!1)}},s=n("2877"),o=Object(s.a)(i,function(){var e=this.$createElement,t=this._self._c||e;return t("d2-container",[t("div",{ref:"container",staticStyle:{position:"absolute",top:"0",left:"0",right:"0",bottom:"0",border:"1px solid blue"}})])},[],!1,null,null,null);t.default=o.exports}}]);