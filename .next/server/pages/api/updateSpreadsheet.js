"use strict";(()=>{var e={};e.id=58,e.ids=[58],e.modules={145:e=>{e.exports=require("next/dist/compiled/next-server/pages-api.runtime.prod.js")},249:(e,t)=>{Object.defineProperty(t,"l",{enumerable:!0,get:function(){return function e(t,r){return r in t?t[r]:"then"in t&&"function"==typeof t.then?t.then(t=>e(t,r)):"function"==typeof t&&"default"===r?t:void 0}}})},723:(e,t,r)=>{r.r(t),r.d(t,{config:()=>m,default:()=>v,routeModule:()=>E});var n={};r.r(n),r.d(n,{default:()=>A});var s=r(802),a=r(153),o=r(249);let i=require("googleapis"),l=require("path");var u=r.n(l);let d=require("fs/promises");var c=r.n(d);let p=["https://www.googleapis.com/auth/spreadsheets"],g=u().join(process.cwd(),"token.json"),f=u().join(process.cwd(),"credentials.json");async function h(){try{let e=await c().readFile(g),t=JSON.parse(e);return i.google.auth.fromJSON(t)}catch(e){return console.error("Error loading saved credentials:",e),null}}async function P(e){let t=JSON.parse(await c().readFile(f)),r=t.installed||t.web,n=JSON.stringify({type:"authorized_user",client_id:r.client_id,client_secret:r.client_secret,refresh_token:e.credentials.refresh_token});await c().writeFile(g,n)}async function w(){let e=await h();return e||(e=await authenticate({scopes:p,keyfilePath:f})).credentials&&await P(e),e}async function A(e,t){if("POST"!==e.method){t.status(405).send({message:"Only POST requests allowed"});return}let{name:r,groupName:n,email:s,date:a,signature:o,title:l,division:u,noticeAddress:d,supervisorSignature:c}=e.body;try{console.log("Authorizing...");let e=await w();console.log("Authorization successful");let r=i.google.sheets({version:"v4",auth:e}),p="1NPmsn4jPyfXrNqQ5Q3gWwkaR8YJeord6-pc4D_mUQ1U";if(!p)throw Error("Missing spreadsheetId environment variable");console.log("Getting existing IDs...");let g=await r.spreadsheets.values.get({spreadsheetId:p,range:"Waiver Info!A2:A"});console.log("Existing IDs response:",g.data);let f=(g.data.values||[]).length+1,h=`=IMAGE("${o}")`,P=`=IMAGE("${c}")`,A=[f.toString(),n,s,a,h,l,u,d,P];console.log("Appending new row:",A),await r.spreadsheets.values.append({spreadsheetId:p,range:"Waiver Info!A:I",valueInputOption:"USER_ENTERED",resource:{values:[A]}}),console.log("Row added successfully"),t.status(200).json({message:"Row added successfully"})}catch(e){console.error("Error adding row:",e),t.status(500).json({message:"Failed to add row",error:e.message})}}let v=(0,o.l)(n,"default"),m=(0,o.l)(n,"config"),E=new s.PagesAPIRouteModule({definition:{kind:a.x.PAGES_API,page:"/api/updateSpreadsheet",pathname:"/api/updateSpreadsheet",bundlePath:"",filename:""},userland:n})},153:(e,t)=>{var r;Object.defineProperty(t,"x",{enumerable:!0,get:function(){return r}}),function(e){e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE"}(r||(r={}))},802:(e,t,r)=>{e.exports=r(145)}};var t=require("../../webpack-api-runtime.js");t.C(e);var r=t(t.s=723);module.exports=r})();