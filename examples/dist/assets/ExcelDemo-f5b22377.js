import{l as C,r as R,S as B,a as _,g,b as $,t as L,c as k}from"./hack-127211d3.js";import{d as q}from"./url-de9b02cf.js";import{d as F,_ as V,r as x,o as W,n as j,h as I,w as M,a as T,c as N,b as P,i as A,e as H,f as U,j as z,g as G,u as J}from"./index-6ec80216.js";import{P as K,u as O}from"./PreviewWrapper-b40c1f1a.js";import"./_commonjs-dynamic-modules-302442b1.js";const E={minColLength:20},Q=F({name:"VueOfficeExcel",props:{src:[String,ArrayBuffer,Blob],requestOptions:{type:Object,default:()=>({})},options:{type:Object,default:()=>({...E})}},emits:["rendered","error"],setup(e,{emit:l}){const i=x(null),c=x(null);let a={_worksheets:[]},r=[],f=0,o=null,t=null,u=null,m=null;function p(d){m=d,$(d).then(s=>{if(!s._worksheets||s._worksheets.length===0)throw new Error("未获取到数据，可能文件格式不正确或文件已损坏");e.options.beforeTransformData&&typeof e.options.beforeTransformData=="function"&&(s=e.options.beforeTransformData(s));let{workbookData:h,medias:b,workbookSource:n}=L(s,{...E,...e.options});e.options.transformData&&typeof e.options.transformData=="function"&&(h=e.options.transformData(h)),r=b,a=n,u=null,f=0,k(),t.loadData(h),_(o,r,a._worksheets[f],u,e.options),l("rendered")}).catch(s=>{console.warn(s),r=[],a={_worksheets:[]},k(),t&&t.loadData({}),l("error",s)})}const v=C.debounce(R,200).bind(this,c.value),D=new MutationObserver(v),y={attributes:!0,childList:!0,subtree:!0};W(()=>{j(()=>{D.observe(c.value,y),v(c),t=new B(c.value,{mode:"read",showToolbar:!1,showContextmenu:e.options.showContextmenu||!1,view:{height:()=>i.value&&i.value.clientHeight||300,width:()=>i.value&&i.value.clientWidth||1200},row:{height:24,len:100},col:{len:26,width:80,indexWidth:60,minWidth:60},autoFocus:!1}).loadData({});let d=t.bottombar.swapFunc;t.bottombar.swapFunc=function(n){d.call(t.bottombar,n),f=n,setTimeout(()=>{t.reRender(),_(o,r,a._worksheets[f],u,e.options)})};let s=t.sheet.editor.clear;t.sheet.editor.clear=function(...n){s.apply(t.sheet.editor,n),setTimeout(()=>{_(o,r,a._worksheets[f],u,e.options)})};let h=t.sheet.editor.setOffset;t.sheet.editor.setOffset=function(...n){h.apply(t.sheet.editor,n),u=n[0],_(o,r,a._worksheets[f],u,e.options)},o=c.value.querySelector("canvas").getContext("2d"),e.src&&g(e.src,e.requestOptions).then(p).catch(n=>{r=[],a={_worksheets:[]},t.loadData({}),l("error",n)})})}),I(()=>{D.disconnect(),t=null}),M(()=>e.src,()=>{e.src?g(e.src,e.requestOptions).then(p).catch(d=>{r=[],a={_worksheets:[]},t.loadData({}),l("error",d)}):(r=[],a={_worksheets:[]},t.loadData({}),l("error",new Error("src属性不能为空")))});function S(d){q(d||`vue-office-excel-${new Date().getTime()}.xlsx`,m)}return{wrapperRef:i,rootRef:c,save:S}}}),X={class:"vue-office-excel",ref:"wrapperRef"},Y={class:"vue-office-excel-main",ref:"rootRef"};function Z(e,l,i,c,a,r){return T(),N("div",X,[P("div",Y,null,512)],512)}const w=V(Q,[["render",Z]]);w.install=function(e){e.component(w.name,w)};const ne={__name:"ExcelDemo",setup(e){function l(){O.hideLoading()}function i(o){console.log("出差",o),O.hideLoading()}function c(o){return console.log("beforeTransformData",o),o}function a(o){return console.log("transformData",o),o}const r=location.origin+(location.pathname+"/").replace("//","/")+"static/test-files/test.xlsx",f=x();return(o,t)=>{const u=A("loading");return T(),H(K,{accept:".xlsx",placeholder:"请输入xlsx文件地址","default-src":r},{default:U(m=>[z(G(J(w),{ref_key:"docxRef",ref:f,src:m.src,options:{beforeTransformData:c,transformData:a},style:{flex:"1",height:"0"},onRendered:l,onError:i},null,8,["src","options"]),[[u,!0]])]),_:1})}}};export{ne as default};
