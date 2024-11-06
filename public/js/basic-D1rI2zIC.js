var C=Object.defineProperty;var k=Object.getOwnPropertySymbols;var E=Object.prototype.hasOwnProperty,V=Object.prototype.propertyIsEnumerable;var B=(o,a,e)=>a in o?C(o,a,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[a]=e,v=(o,a)=>{for(var e in a||(a={}))E.call(a,e)&&B(o,e,a[e]);if(k)for(var e of k(a))V.call(a,e)&&B(o,e,a[e]);return o};var m=(o,a,e)=>new Promise((s,t)=>{var d=l=>{try{h(e.next(l))}catch(p){t(p)}},g=l=>{try{h(e.throw(l))}catch(p){t(p)}},h=l=>l.done?s(l.value):Promise.resolve(l.value).then(d,g);h((e=e.apply(o,a)).next())});import{a$ as N,l as R,b0 as I,a_ as O,f as U,b1 as q,b2 as G,$ as H,V as $}from"./bootstrap-lHTY6Y-e.js";import{X as x,am as D,q as Q,a5 as X,V as S,b0 as z,b1 as F,P as A,ab as M,ah as J,n as c,ad as u,S as n,ae as j,J as y,ac as K,al as Y,bu as L,Q as P}from"../jse/index-index-j8hGa-Ht.js";import{u as Z,_ as ee,N as ae,a as te,b as oe}from"./layout.vue_vue_type_script_setup_true_lang-Cmk4wjCH.js";import{a as se}from"./icon.vue_vue_type_script_setup_true_lang-DEQGaKYy.js";import"./theme-toggle.vue_vue_type_script_setup_true_lang-DYhCraGF.js";import"./LinkOutlined-D-d86PAR.js";import"./rotate-cw-CtO-og4-.js";import"./ws-DEdyEeh-.js";const f=x(),_=x({advancedStyle:{colorStops:[{color:"gray",offset:0},{color:"gray",offset:1}],type:"linear"},content:"",contentType:"multi-line-text",globalAlpha:.25,gridLayoutOptions:{cols:2,gap:[20,20],matrix:[[1,0],[0,1]],rows:2},height:200,layout:"grid",rotate:30,width:160});function ne(){function o(s){return m(this,null,function*(){var d;const{Watermark:t}=yield X(()=>m(this,null,function*(){const{Watermark:g}=yield import("./index.esm-onHbvng2.js");return{Watermark:g}}),[]);_.value=v(v({},_.value),s),f.value=new t(_.value),yield(d=f.value)==null?void 0:d.create()})}function a(s){return m(this,null,function*(){var t;f.value?(yield Q(),yield(t=f.value)==null?void 0:t.changeOptions(v(v({},_.value),s))):yield o(s)})}function e(){var s;(s=f.value)==null||s.destroy()}return D(()=>{e()}),{destroyWatermark:e,updateWatermark:a,watermark:f}}const re=S({name:"LoginExpiredModal",__name:"login-expired-modal",props:z({avatar:{default:""},codeLoginPath:{},forgetPasswordPath:{},loading:{type:Boolean},qrCodeLoginPath:{},registerPath:{},showCodeLogin:{type:Boolean},showForgetPassword:{type:Boolean},showQrcodeLogin:{type:Boolean},showRegister:{type:Boolean},showRememberMe:{type:Boolean},showThirdPartyLogin:{type:Boolean},subTitle:{},title:{},submitButtonText:{}},{open:{type:Boolean},openModifiers:{}}),emits:["update:open"],setup(o){const a=F(o,"open"),[e,s]=Z();return A(()=>a.value,t=>{s.setState({isOpen:t})}),(t,d)=>(M(),J("div",null,[c(n(e),{closable:!1,"close-on-click-modal":!1,"close-on-press-escape":!1,footer:!1,"fullscreen-button":!1,header:!1,class:"border-none px-10 py-6 text-center shadow-xl sm:w-[600px] sm:rounded-2xl md:h-[unset]"},{default:u(()=>[c(n(se),{src:t.avatar,class:"mx-auto mb-6 size-20"},null,8,["src"]),c(n(N),{"show-forget-password":!1,"show-register":!1,"show-remember-me":!1,"sub-title":t.$t("authentication.loginAgainSubTitle"),title:t.$t("authentication.loginAgainTitle")},{default:u(()=>[j(t.$slots,"default")]),_:3},8,["sub-title","title"])]),_:3})]))}}),he=S({__name:"basic",setup(o){const a=x([{avatar:"https://avatar.vercel.sh/vercel.svg?text=VB",date:"10秒前",isRead:!0,message:"描述信息描述信息描述信息",title:"下载完成"}]),e=R(),s=I(),t=O(),{destroyWatermark:d,updateWatermark:g}=ne(),h=y(()=>a.value.some(i=>!i.isRead)),l=y(()=>[{handler:()=>{L($,{target:"_blank"})},icon:q,text:"GitHub"},{handler:()=>{L(`${$}/issues`,{target:"_blank"})},icon:G,text:H("ui.widgets.qa")}]),p=y(()=>{var i,r;return(r=(i=e.userInfo)==null?void 0:i.avatar)!=null?r:P.app.defaultAvatar});function b(){return m(this,null,function*(){yield s.logout(!1)})}function T(){a.value=[]}function W(){a.value.forEach(i=>i.isRead=!0)}return A(()=>P.app.watermark,i=>m(this,null,function*(){var r;i?yield g({content:`${(r=e.userInfo)==null?void 0:r.username}`}):d()}),{immediate:!0}),(i,r)=>(M(),K(n(oe),{onClearPreferencesAndLogout:b},{"user-dropdown":u(()=>{var w;return[c(n(ee),{avatar:p.value,menus:l.value,text:(w=n(e).userInfo)==null?void 0:w.realName,description:"https://github.com/aidenconst","tag-text":"Pro",onLogout:b},null,8,["avatar","menus","text"])]}),notification:u(()=>[c(n(ae),{dot:h.value,notifications:a.value,onClear:T,onMakeAll:W},null,8,["dot","notifications"])]),extra:u(()=>[c(n(re),{open:n(t).loginExpired,"onUpdate:open":r[0]||(r[0]=w=>n(t).loginExpired=w),avatar:p.value},{default:u(()=>[c(U)]),_:1},8,["open","avatar"])]),"lock-screen":u(()=>[c(n(te),{avatar:p.value,onToLogin:b},null,8,["avatar"])]),default:u(()=>[r[1]||(r[1]=Y("template",null,null,-1))]),_:1}))}});export{he as default};