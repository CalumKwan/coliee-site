(()=>{var e={};e.id=820,e.ids=[820,660,888],e.modules={1323:(e,t)=>{"use strict";Object.defineProperty(t,"l",{enumerable:!0,get:function(){return function e(t,r){return r in t?t[r]:"then"in t&&"function"==typeof t.then?t.then(t=>e(t,r)):"function"==typeof t&&"default"===r?t:void 0}}})},9957:(e,t,r)=>{"use strict";r.a(e,async(e,s)=>{try{r.r(t),r.d(t,{config:()=>g,default:()=>c,getServerSideProps:()=>x,getStaticPaths:()=>m,getStaticProps:()=>p,reportWebVitals:()=>k,routeModule:()=>M,unstable_getServerProps:()=>v,unstable_getServerSideProps:()=>b,unstable_getStaticParams:()=>P,unstable_getStaticPaths:()=>f,unstable_getStaticProps:()=>h});var a=r(7093),i=r(5244),o=r(1323),n=r(7645),u=r(9613),l=r(6971),d=e([u]);u=(d.then?(await d)():d)[0];let c=(0,o.l)(l,"default"),p=(0,o.l)(l,"getStaticProps"),m=(0,o.l)(l,"getStaticPaths"),x=(0,o.l)(l,"getServerSideProps"),g=(0,o.l)(l,"config"),k=(0,o.l)(l,"reportWebVitals"),h=(0,o.l)(l,"unstable_getStaticProps"),f=(0,o.l)(l,"unstable_getStaticPaths"),P=(0,o.l)(l,"unstable_getStaticParams"),v=(0,o.l)(l,"unstable_getServerProps"),b=(0,o.l)(l,"unstable_getServerSideProps"),M=new a.PagesRouteModule({definition:{kind:i.x.PAGES,page:"/_error",pathname:"/_error",bundlePath:"",filename:""},components:{App:u.default,Document:n.default},userland:l});s()}catch(e){s(e)}})},9613:(e,t,r)=>{"use strict";r.a(e,async(e,s)=>{try{r.r(t),r.d(t,{__toc:()=>c,default:()=>p});var a=r(997),i=r(6171),o=r(9770);r(452),r(4118),r(1025),r(600);var n=r(7834),u=e([n,i]);[n,i]=u.then?(await u)():u;let d=function({Component:e,pageProps:t}){return a.jsx(n.MDXProvider,{children:a.jsx(e,{...t})})},c=[];function l(e){return a.jsx(a.Fragment,{})}let p=function(e={}){return a.jsx(d,{...e,children:a.jsx(l,{...e})})},m=globalThis[Symbol.for("__nextra_internal__")]||=Object.create(null);m.Layout=i.ZP,m.pageMap=[{kind:"Folder",name:"application",route:"/application",children:[{kind:"MdxPage",name:"applicationForm",route:"/application/applicationForm",frontMatter:{layout:"default"}},{kind:"MdxPage",name:"caseMemorandumWaiver",route:"/application/caseMemorandumWaiver"},{kind:"MdxPage",name:"statuteENMemorandumWaiver",route:"/application/statuteENMemorandumWaiver"},{kind:"MdxPage",name:"statuteJAMemorandumWaiver",route:"/application/statuteJAMemorandumWaiver"},{kind:"Meta",data:{applicationForm:"Application Form",caseMemorandumWaiver:"Case Memorandum Waiver",statuteENMemorandumWaiver:"Statute EN Memorandum Waiver",statuteJAMemorandumWaiver:"Statute JA Memorandum Waiver"}}]},{kind:"MdxPage",name:"application",route:"/application"},{kind:"MdxPage",name:"contact",route:"/contact"},{kind:"Folder",name:"corpus",route:"/corpus",children:[{kind:"MdxPage",name:"task1",route:"/corpus/task1"},{kind:"MdxPage",name:"task2",route:"/corpus/task2"},{kind:"MdxPage",name:"task3and4",route:"/corpus/task3and4"},{kind:"Meta",data:{task1:"Task 1",task2:"Task 2",task3and4:"Tasks 3 and 4"}}]},{kind:"MdxPage",name:"corpus",route:"/corpus"},{kind:"MdxPage",name:"evaluation",route:"/evaluation"},{kind:"MdxPage",name:"overview",route:"/overview"},{kind:"MdxPage",name:"resources",route:"/resources"},{kind:"Folder",name:"results",route:"/results",children:[{kind:"MdxPage",name:"task1",route:"/results/task1"},{kind:"MdxPage",name:"task2",route:"/results/task2"},{kind:"Meta",data:{task1:"Task 1",task2:"Task 2"}}]},{kind:"MdxPage",name:"results",route:"/results"},{kind:"MdxPage",name:"schedule",route:"/schedule"},{kind:"MdxPage",name:"submission",route:"/submission"},{kind:"Folder",name:"tasks",route:"/tasks",children:[{kind:"MdxPage",name:"task1",route:"/tasks/task1"},{kind:"MdxPage",name:"task2",route:"/tasks/task2"},{kind:"MdxPage",name:"task3",route:"/tasks/task3"},{kind:"MdxPage",name:"task4",route:"/tasks/task4"},{kind:"Meta",data:{task1:"Task 1",task2:"Task 2",task3:"Task 3",task4:"Task 4"}}]},{kind:"MdxPage",name:"tasks",route:"/tasks"},{kind:"Meta",data:{overview:{title:"Overview"},schedule:{title:"Schedule"},tasks:{title:"Tasks"},corpus:{title:"Corpus"},evaluation:{title:"Evaluation"},submission:{title:"Submission"},results:{title:"Results"},application:{title:"Application"},resources:{title:"Resources"},contact:{title:"Contact"}}}],m.flexsearch={codeblocks:!0},m.themeConfig=o.Z,s()}catch(e){s(e)}})},6971:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return d}});let s=r(167),a=r(997),i=s._(r(6689)),o=s._(r(7828)),n={400:"Bad Request",404:"This page could not be found",405:"Method Not Allowed",500:"Internal Server Error"};function u(e){let{res:t,err:r}=e;return{statusCode:t&&t.statusCode?t.statusCode:r?r.statusCode:404}}let l={error:{fontFamily:'system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',height:"100vh",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},desc:{lineHeight:"48px"},h1:{display:"inline-block",margin:"0 20px 0 0",paddingRight:23,fontSize:24,fontWeight:500,verticalAlign:"top"},h2:{fontSize:14,fontWeight:400,lineHeight:"28px"},wrap:{display:"inline-block"}};class d extends i.default.Component{render(){let{statusCode:e,withDarkMode:t=!0}=this.props,r=this.props.title||n[e]||"An unexpected error has occurred";return(0,a.jsxs)("div",{style:l.error,children:[(0,a.jsx)(o.default,{children:(0,a.jsx)("title",{children:e?e+": "+r:"Application error: a client-side exception has occurred"})}),(0,a.jsxs)("div",{style:l.desc,children:[(0,a.jsx)("style",{dangerouslySetInnerHTML:{__html:"body{color:#000;background:#fff;margin:0}.next-error-h1{border-right:1px solid rgba(0,0,0,.3)}"+(t?"@media (prefers-color-scheme:dark){body{color:#fff;background:#000}.next-error-h1{border-right:1px solid rgba(255,255,255,.3)}}":"")}}),e?(0,a.jsx)("h1",{className:"next-error-h1",style:l.h1,children:e}):null,(0,a.jsx)("div",{style:l.wrap,children:(0,a.jsxs)("h2",{style:l.h2,children:[this.props.title||e?r:(0,a.jsx)(a.Fragment,{children:"Application error: a client-side exception has occurred (see the browser console for more information)"}),"."]})})]})]})}}d.displayName="ErrorPage",d.getInitialProps=u,d.origGetInitialProps=u,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7645:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n});var s=r(997),a=r(6859),i=r.n(a);class o extends i(){static async getInitialProps(e){return{...await i().getInitialProps(e)}}render(){return(0,s.jsxs)(a.Html,{children:[s.jsx(a.Head,{children:s.jsx("link",{rel:"icon",href:"/favicon.ico"})}),(0,s.jsxs)("body",{children:[s.jsx(a.Main,{}),s.jsx(a.NextScript,{})]})]})}}let n=o},9770:(e,t,r)=>{"use strict";r.d(t,{Z:()=>a});var s=r(997);let a={logo:(0,s.jsxs)("span",{style:{display:"flex",alignItems:"center"},children:[s.jsx("img",{src:"/icon.png",alt:"COLIEE Logo",style:{height:"50px",marginRight:"10px"}}),s.jsx("span",{children:"COLIEE"})]}),project:{},docsRepositoryBase:"https://github.com/CalumKwan/coliee-site/blob/main",footer:{text:"COLIEE \xa9 2024"},feedback:{content:()=>null},editLink:{component:()=>null},search:{}}},1025:()=>{},4118:()=>{},5244:(e,t)=>{"use strict";var r;Object.defineProperty(t,"x",{enumerable:!0,get:function(){return r}}),function(e){e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE"}(r||(r={}))},3841:e=>{"use strict";e.exports=require("@popperjs/core")},1238:e=>{"use strict";e.exports=require("base64-js")},8395:e=>{"use strict";e.exports=require("flexsearch")},2235:e=>{"use strict";e.exports=require("focus-visible")},9164:e=>{"use strict";e.exports=require("git-url-parse")},5665:e=>{"use strict";e.exports=require("ieee754")},4916:e=>{"use strict";e.exports=require("intersection-observer")},5875:e=>{"use strict";e.exports=require("match-sorter")},6641:e=>{"use strict";e.exports=require("next-seo")},1162:e=>{"use strict";e.exports=require("next-themes")},2785:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},968:e=>{"use strict";e.exports=require("next/head")},6689:e=>{"use strict";e.exports=require("react")},6405:e=>{"use strict";e.exports=require("react-dom")},997:e=>{"use strict";e.exports=require("react/jsx-runtime")},8311:e=>{"use strict";e.exports=require("stream")},1185:e=>{"use strict";e.exports=import("@headlessui/react")},7834:e=>{"use strict";e.exports=import("@mdx-js/react")},372:e=>{"use strict";e.exports=import("@theguild/remark-mermaid/mermaid")},6593:e=>{"use strict";e.exports=import("clsx")},8751:e=>{"use strict";e.exports=import("scroll-into-view-if-needed")},9926:e=>{"use strict";e.exports=import("zod")},7147:e=>{"use strict";e.exports=require("fs")},1017:e=>{"use strict";e.exports=require("path")},9796:e=>{"use strict";e.exports=require("zlib")}};var t=require("../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[567,182,859],()=>r(9957));module.exports=s})();