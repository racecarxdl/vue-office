var f=Object.defineProperty;var w=(o,e,t)=>e in o?f(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t;var s=(o,e,t)=>w(o,typeof e!="symbol"?e+"":e,t);import{S as m,r as l,a as x,t as S,c as p,g as b}from"./media-iC3Fekwg.js";import{l as v}from"./lodash-Rk2CGsbc.js";import{d as D}from"./url-Br1dDInx.js";/* empty css              */import{r as k,o as _,c as y,a as E}from"./index-DW896H28.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";function g(o){if(o){let e=o.querySelectorAll("input");for(let t of e)t&&!t.readOnly&&(t.readOnly=!0);document.activeElement&&document.activeElement.blur()}}const I={xls:!1,minColLength:20};class O{constructor(e,t={},i={}){s(this,"container",null);s(this,"wrapper",null);s(this,"wrapperMain",null);s(this,"options",{});s(this,"requestOptions",{});s(this,"mediasSource",[]);s(this,"workbookDataSource",{_worksheets:[]});s(this,"sheetIndex",1);s(this,"ctx",null);s(this,"xs",null);s(this,"offset",null);s(this,"observer",null);s(this,"fileData",null);this.container=e,this.options={...I,...t},this.requestOptions=i,this.createWrapper(),this.initSpreadsheet(),this.hack()}createWrapper(){this.wrapper=document.createElement("div"),this.wrapper.className="vue-office-excel",this.wrapperMain=document.createElement("div"),this.wrapperMain.className="vue-office-excel-main",this.wrapper.appendChild(this.wrapperMain),this.container.appendChild(this.wrapper)}initSpreadsheet(){this.xs=new m(this.wrapperMain,{mode:"read",showToolbar:!1,showContextmenu:this.options.showContextmenu||!1,view:{height:()=>this.wrapper&&this.wrapper.clientHeight||300,width:()=>this.wrapper&&this.wrapper.clientWidth||1200},row:{height:24,len:100},col:{len:26,width:80,indexWidth:60,minWidth:60},autoFocus:!1}).loadData({}),this.options.cellSelected&&typeof this.options.cellSelected=="function"&&this.xs.on("cell-selected",(r,h,c)=>{this.options.cellSelected({cell:r,rowIndex:h,columnIndex:c})}),this.options.cellsSelected&&typeof this.options.cellsSelected=="function"&&this.xs.on("cells-selected",(r,{sri:h,sci:c,eri:u,eci:d})=>{this.options.cellsSelected({cell:r,startRowIndex:h,startColumnIndex:c,endRowIndex:u,endColumnIndex:d})});let e=this,t=this.xs.bottombar.swapFunc;this.xs.bottombar.swapFunc=function(r){t.call(e.xs.bottombar,r),e.sheetIndex=r,setTimeout(()=>{e.xs.reRender(),l(e.ctx,e.mediasSource,e.workbookDataSource._worksheets[e.sheetIndex],e.offset)})};let i=this.xs.sheet.editor.clear;this.xs.sheet.editor.clear=function(...r){i.apply(e.xs.sheet.editor,r),setTimeout(()=>{l(e.ctx,e.mediasSource,e.workbookDataSource._worksheets[e.sheetIndex],e.offset)})};let a=this.xs.sheet.editor.setOffset;this.xs.sheet.editor.setOffset=function(...r){a.apply(e.xs.sheet.editor,r),e.offset=r[0],l(e.ctx,e.mediasSource,e.workbookDataSource._worksheets[e.sheetIndex],e.offset)};const n=this.wrapperMain.querySelector("canvas");this.ctx=n.getContext("2d")}renderExcel(e){return this.fileData=e,x(e,this.options.xls).then(t=>{if(!t._worksheets||t._worksheets.length===0)throw new Error("未获取到数据，可能文件格式不正确或文件已损坏");this.options.beforeTransformData&&typeof this.options.beforeTransformData=="function"&&(t=this.options.beforeTransformData(t));let{workbookData:i,medias:a,workbookSource:n}=S(t,this.options);this.options.transformData&&typeof this.options.transformData=="function"&&(i=this.options.transformData(i)),this.mediasSource=a,this.workbookDataSource=n,this.offset=null,this.sheetIndex=0,p(),this.xs.loadData(i),l(this.ctx,this.mediasSource,this.workbookDataSource._worksheets[this.sheetIndex],this.offset)}).catch(t=>(this.mediasSource=[],this.workbookDataSource={_worksheets:[]},p(),this.xs.loadData({}),Promise.reject(t)))}hack(){const e=v.debounce(g,200).bind(this,this.wrapperMain);this.observer=new MutationObserver(e);const t={attributes:!0,childList:!0,subtree:!0};this.observer.observe(this.wrapperMain,t),e(this.wrapperMain)}setOptions(e){this.options=e}setRequestOptions(e){this.requestOptions=e}preview(e){return new Promise((t,i)=>{b(e,this.requestOptions).then(a=>{this.renderExcel(a).then(t).catch(n=>{this.mediasSource=[],this.workbookDataSource={_worksheets:[]},this.xs.loadData({}),i(n)})}).catch(a=>{this.mediasSource=[],this.workbookDataSource={_worksheets:[]},this.xs.loadData({}),i(a)})})}save(e){D(e||`js-preview-excel-${new Date().getTime()}.xlsx`,this.fileData)}destroy(){this.observer.disconnect(),this.container.removeChild(this.wrapper),this.container=null,this.wrapper=null,this.wrapperMain=null,this.ctx=null,this.xs=null,this.observer=null,this.options=null,this.requestOptions=null,this.mediasSource=null,this.workbookDataSource=null}}function C(o,e,t){return new O(o,e,t)}const M={init:C},J={__name:"JsExcelDemo",setup(o){const e=k(null);return _(()=>{window.myExcelPreview=M.init(e.value,{transformData:function(t){return console.log("transformData",t),t},cellSelected(t){console.log(t)}}),window.myExcelPreview.preview("/vue-office/examples/dist/static/test-files/test.xlsx").then(t=>{console.log("excel preview done",window.myExcelPreview)}).catch(t=>{console.log("err",t)})}),(t,i)=>(E(),y("div",{ref_key:"dom",ref:e,style:{height:"calc(100vh - 50px)"}},null,512))}};export{J as default};
