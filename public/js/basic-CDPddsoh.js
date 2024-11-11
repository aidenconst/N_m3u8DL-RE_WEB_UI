var C=Object.defineProperty;var x=Object.getOwnPropertySymbols;var E=Object.prototype.hasOwnProperty,V=Object.prototype.propertyIsEnumerable;var B=(o,a,e)=>a in o?C(o,a,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[a]=e,v=(o,a)=>{for(var e in a||(a={}))E.call(a,e)&&B(o,e,a[e]);if(x)for(var e of x(a))V.call(a,e)&&B(o,e,a[e]);return o};var m=(o,a,e)=>new Promise((s,t)=>{var d=l=>{try{h(e.next(l))}catch(p){t(p)}},g=l=>{try{h(e.throw(l))}catch(p){t(p)}},h=l=>l.done?s(l.value):Promise.resolve(l.value).then(d,g);h((e=e.apply(o,a)).next())});import{aX as N,i as R,aY as I,aZ as O,f as U,a_ as q,a$ as G,$ as H,V as $}from"./bootstrap-HQD1Fffr.js";import{X as k,ae as X,q as D,a5 as Q,V as S,b2 as z,b3 as F,P as A,ak as M,aq as J,n as c,am as u,S as n,an as Y,J as b,al as Z,Q as L,at as j,bu as P}from"../jse/index-index-lUs0GHEt.js";import{u as K,_ as ee,N as ae,a as te,b as oe}from"./layout.vue_vue_type_script_setup_true_lang--ajLTD5m.js";import{_ as se}from"./icon.vue_vue_type_script_setup_true_lang-k8cTFRMA.js";import"./theme-toggle.vue_vue_type_script_setup_true_lang-DFWn12oi.js";import"./LinkOutlined-CjMVHB__.js";import"./rotate-cw-lHWmzw_I.js";const f=k(),w=k({advancedStyle:{colorStops:[{color:"gray",offset:0},{color:"gray",offset:1}],type:"linear"},content:"",contentType:"multi-line-text",globalAlpha:.25,gridLayoutOptions:{cols:2,gap:[20,20],matrix:[[1,0],[0,1]],rows:2},height:200,layout:"grid",rotate:30,width:160});function ne(){function o(s){return m(this,null,function*(){var d;const{Watermark:t}=yield Q(()=>m(this,null,function*(){const{Watermark:g}=yield import("./index.esm-onHbvng2.js");return{Watermark:g}}),[]);w.value=v(v({},w.value),s),f.value=new t(w.value),yield(d=f.value)==null?void 0:d.create()})}function a(s){return m(this,null,function*(){var t;f.value?(yield D(),yield(t=f.value)==null?void 0:t.changeOptions(v(v({},w.value),s))):yield o(s)})}function e(){var s;(s=f.value)==null||s.destroy()}return X(()=>{e()}),{destroyWatermark:e,updateWatermark:a,watermark:f}}const re=S({name:"LoginExpiredModal",__name:"login-expired-modal",props:z({avatar:{default:""},codeLoginPath:{},forgetPasswordPath:{},loading:{type:Boolean},qrCodeLoginPath:{},registerPath:{},showCodeLogin:{type:Boolean},showForgetPassword:{type:Boolean},showQrcodeLogin:{type:Boolean},showRegister:{type:Boolean},showRememberMe:{type:Boolean},showThirdPartyLogin:{type:Boolean},subTitle:{},title:{},submitButtonText:{}},{open:{type:Boolean},openModifiers:{}}),emits:["update:open"],setup(o){const a=F(o,"open"),[e,s]=K();return A(()=>a.value,t=>{s.setState({isOpen:t})}),(t,d)=>(M(),J("div",null,[c(n(e),{closable:!1,"close-on-click-modal":!1,"close-on-press-escape":!1,footer:!1,"fullscreen-button":!1,header:!1,class:"border-none px-10 py-6 text-center shadow-xl sm:w-[600px] sm:rounded-2xl md:h-[unset]"},{default:u(()=>[c(n(se),{src:t.avatar,class:"mx-auto mb-6 size-20"},null,8,["src"]),c(n(N),{"show-forget-password":!1,"show-register":!1,"show-remember-me":!1,"sub-title":t.$t("authentication.loginAgainSubTitle"),title:t.$t("authentication.loginAgainTitle")},{default:u(()=>[Y(t.$slots,"default")]),_:3},8,["sub-title","title"])]),_:3})]))}}),ge=S({__name:"basic",setup(o){const a=k([{avatar:"https://avatar.vercel.sh/vercel.svg?text=VB",date:"10秒前",isRead:!0,message:"描述信息描述信息描述信息",title:"下载完成"}]),e=R(),s=I(),t=O(),{destroyWatermark:d,updateWatermark:g}=ne(),h=b(()=>a.value.some(i=>!i.isRead)),l=b(()=>[{handler:()=>{P($,{target:"_blank"})},icon:q,text:"GitHub"},{handler:()=>{P(`${$}/issues`,{target:"_blank"})},icon:G,text:H("ui.widgets.qa")}]),p=b(()=>{var i,r;return(r=(i=e.userInfo)==null?void 0:i.avatar)!=null?r:L.app.defaultAvatar});function y(){return m(this,null,function*(){yield s.logout(!1)})}function T(){a.value=[]}function W(){a.value.forEach(i=>i.isRead=!0)}return A(()=>L.app.watermark,i=>m(this,null,function*(){var r;i?yield g({content:`${(r=e.userInfo)==null?void 0:r.username}`}):d()}),{immediate:!0}),(i,r)=>(M(),Z(n(oe),{onClearPreferencesAndLogout:y},{"user-dropdown":u(()=>{var _;return[c(n(ee),{avatar:p.value,menus:l.value,text:(_=n(e).userInfo)==null?void 0:_.realName,description:"https://github.com/aidenconst","tag-text":"Pro",onLogout:y},null,8,["avatar","menus","text"])]}),notification:u(()=>[c(n(ae),{dot:h.value,notifications:a.value,onClear:T,onMakeAll:W},null,8,["dot","notifications"])]),extra:u(()=>[c(n(re),{open:n(t).loginExpired,"onUpdate:open":r[0]||(r[0]=_=>n(t).loginExpired=_),avatar:p.value},{default:u(()=>[c(U)]),_:1},8,["open","avatar"])]),"lock-screen":u(()=>[c(n(te),{avatar:p.value,onToLogin:y},null,8,["avatar"])]),default:u(()=>[r[1]||(r[1]=j("template",null,null,-1))]),_:1}))}});export{ge as default};