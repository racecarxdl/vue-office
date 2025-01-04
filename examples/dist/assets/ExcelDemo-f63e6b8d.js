import{S as I,r as S,g as E,a as B,t as $,c as R}from"./media-e013723d.js";import{l as q}from"./lodash-700e46b8.js";import{d as F}from"./url-065d6777.js";import{d as L,_ as V,r as b,o as W,n as j,h as N,w as A,a as O,c as H,b as M,i as P,e as U,f as z,j as G,g as J,u as K}from"./index-d9ffc391.js";import{P as Q,u as y}from"./PreviewWrapper-7c2e5c79.js";import"./_commonjs-dynamic-modules-302442b1.js";const C={xls:!1,minColLength:20},X=L({name:"VueOfficeExcel",props:{src:[String,ArrayBuffer,Blob],requestOptions:{type:Object,default:()=>({})},options:{type:Object,default:()=>({...C})}},emits:["rendered","error","switchSheet","cellSelected","cellsSelected"],setup(t,{emit:a}){const d=b(null),x=b(null);let c={_worksheets:[]},r=[],h=0,_=null,e=null,u=null,o=null;function i(n){o=n,B(n,t.options.xls).then(l=>{if(!l._worksheets||l._worksheets.length===0)throw new Error("未获取到数据，可能文件格式不正确或文件已损坏");t.options.beforeTransformData&&typeof t.options.beforeTransformData=="function"&&(l=t.options.beforeTransformData(l));let{workbookData:m,medias:g,workbookSource:v}=$(l,{...C,...t.options});t.options.transformData&&typeof t.options.transformData=="function"&&(m=t.options.transformData(m)),r=g,c=v,u=null,h=0,R(),e.loadData(m),S(_,r,c._worksheets[h],u,t.options),a("rendered"),a("switchSheet",0)}).catch(l=>{console.warn(l),r=[],c={_worksheets:[]},R(),e&&e.loadData({}),a("error",l),a("switchSheet",0)})}W(()=>{j(()=>{e=new I(x.value,{mode:"read",showToolbar:!1,showContextmenu:t.options.showContextmenu||!1,view:{height:()=>d.value&&d.value.clientHeight||300,width:()=>d.value&&d.value.clientWidth||1200},row:{height:24,len:100},col:{len:26,width:80,indexWidth:60,minWidth:60},autoFocus:!1}).loadData({}),e.on("cell-selected",(s,D,p)=>{a("cellSelected",{cell:s,rowIndex:D,columnIndex:p})}),e.on("cells-selected",(s,{sri:D,sci:p,eri:T,eci:k})=>{a("cellsSelected",{cell:s,startRowIndex:D,startColumnIndex:p,endRowIndex:T,endColumnIndex:k})});let n=e.bottombar.swapFunc;e.bottombar.swapFunc=function(s){n.call(e.bottombar,s),h=s,u=e.sheet.data.getSelectedRect(),setTimeout(()=>{e.reRender(),S(_,r,c._worksheets[h],u,t.options),a("switchSheet",s)})};let l=q.debounce(S,200,{leading:!0}),m=e.sheet.table.render;e.sheet.table.render=function(...s){e&&e.sheet&&m.apply(e.sheet.table,s),l(_,r,c._worksheets[h],u,t.options)};let g=e.sheet.editor.setOffset;e.sheet.editor.setOffset=function(...s){g.apply(e.sheet.editor,s),u=s[0]},_=x.value.querySelector("canvas").getContext("2d"),t.src&&E(t.src,t.requestOptions).then(i).catch(s=>{r=[],c={_worksheets:[]},e.loadData({}),a("error",s)})})}),N(()=>{e=null}),A(()=>t.src,()=>{t.src?E(t.src,t.requestOptions).then(i).catch(n=>{r=[],c={_worksheets:[]},e.loadData({}),a("error",n)}):(r=[],c={_worksheets:[]},e.loadData({}),a("error",new Error("src属性不能为空")))});function f(n){F(n||`vue-office-excel-${new Date().getTime()}.xlsx`,o)}return{wrapperRef:d,rootRef:x,save:f}}}),Y={class:"vue-office-excel",ref:"wrapperRef"},Z={class:"vue-office-excel-main",ref:"rootRef"};function ee(t,a,d,x,c,r){return O(),H("div",Y,[M("div",Z,null,512)],512)}const w=V(X,[["render",ee]]);w.install=function(t){t.component(w.name,w)};const re={__name:"ExcelDemo",setup(t){function a(){y.hideLoading()}function d(o){console.log("出差",o),y.hideLoading()}function x(o){return console.log("transformData",o),o}const c=location.origin+(location.pathname+"/").replace("//","/")+"static/test-files/test.xlsx",r=b();function h(o){return console.log("beforeTransformData",o,r),o._worksheets.forEach(i=>{let f=0;if(i._rows[f]&&i._rows[f]._cells)for(let n=0;n<i._rows[f]._cells.length;n++){let l=i._rows[f]._cells[n];l?l.style={bgcolor:"#00ff00"}:i._rows[f]._cells[n]={text:"",value:"",style:{bgcolor:"#00ff00"}}}}),o}function _(o){console.log("当前sheet",o)}function e(o){console.log("点击了单元格",o)}function u(o){console.log("选择了单元格",o)}return(o,i)=>{const f=P("loading");return O(),U(Q,{accept:".xlsx,.xls",placeholder:"请输入xlsx文件地址","default-src":c},{default:z(n=>[G(J(K(w),{ref_key:"docxRef",ref:r,src:n.src,options:{beforeTransformData:h,transformData:x,xls:n.xls},style:{flex:"1",height:"0"},onRendered:a,onError:d,onSwitchSheet:_,onCellSelected:e,onCellsSelected:u},null,8,["src","options"]),[[f,!0]])]),_:1})}}};export{re as default};
