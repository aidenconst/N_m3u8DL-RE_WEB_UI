const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["js/icon-403-FMpSkKmT.js","js/bootstrap-CCGv-ICO.js","jse/index-index-BBRB-Z2M.js","css/bootstrap-DXmkntjg.css","js/icon-404-Dh53dnd-.js","js/icon-500-g9OVkhMR.js","js/icon-coming-soon-DB-FQCBs.js","js/icon-offline-CCJ-OBgo.js"])))=>i.map(i=>d[i]);
import{V as A,J as r,ab as a,ah as l,ac as f,an as C,ag as i,al as L,ae as d,aw as u,ad as p,n as h,S as o,ap as g,br as n,a5 as c}from"../jse/index-index-BBRB-Z2M.js";import{h as P,u as z,$ as t,e as b}from"./bootstrap-CCGv-ICO.js";import{R as N}from"./rotate-cw-ummmL1qe.js";const O=P("ArrowLeftIcon",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]),B={class:"flex size-full flex-col items-center justify-center duration-300"},S=["src"],F={class:"flex-col-center"},H={key:1,class:"text-foreground mt-8 text-2xl md:text-3xl lg:text-4xl"},j={key:3,class:"text-muted-foreground md:text-md my-4 lg:text-lg"},K=A({name:"Fallback",__name:"fallback",props:{description:{default:""},homePath:{default:"/"},image:{default:""},status:{default:"coming-soon"},title:{default:""}},setup(v){const e=v,y=n(()=>c(()=>import("./icon-403-FMpSkKmT.js"),__vite__mapDeps([0,1,2,3]))),E=n(()=>c(()=>import("./icon-404-Dh53dnd-.js"),__vite__mapDeps([4,1,2,3]))),w=n(()=>c(()=>import("./icon-500-g9OVkhMR.js"),__vite__mapDeps([5,1,2,3]))),x=n(()=>c(()=>import("./icon-coming-soon-DB-FQCBs.js"),__vite__mapDeps([6,1,2,3]))),I=n(()=>c(()=>import("./icon-offline-CCJ-OBgo.js"),__vite__mapDeps([7,1,2,3]))),m=r(()=>{if(e.title)return e.title;switch(e.status){case"403":return t("ui.fallback.forbidden");case"404":return t("ui.fallback.pageNotFound");case"500":return t("ui.fallback.internalError");case"coming-soon":return t("ui.fallback.comingSoon");case"offline":return t("ui.fallback.offlineError");default:return""}}),_=r(()=>{if(e.description)return e.description;switch(e.status){case"403":return t("ui.fallback.forbiddenDesc");case"404":return t("ui.fallback.pageNotFoundDesc");case"500":return t("ui.fallback.internalErrorDesc");case"offline":return t("ui.fallback.offlineErrorDesc");default:return""}}),k=r(()=>{switch(e.status){case"403":return y;case"404":return E;case"500":return w;case"coming-soon":return x;case"offline":return I;default:return null}}),D=r(()=>e.status==="403"||e.status==="404"),V=r(()=>e.status==="500"||e.status==="offline"),{push:R}=z();function T(){R(e.homePath)}function $(){location.reload()}return(s,J)=>(a(),l("div",B,[s.image?(a(),l("img",{key:0,src:s.image,class:"md:1/3 w-1/2 lg:w-1/4"},null,8,S)):k.value?(a(),f(C(k.value),{key:1,class:"md:1/3 h-1/3 w-1/2 lg:w-1/4"})):i("",!0),L("div",F,[s.$slots.title?d(s.$slots,"title",{key:0}):m.value?(a(),l("p",H,u(m.value),1)):i("",!0),s.$slots.describe?d(s.$slots,"describe",{key:2}):_.value?(a(),l("p",j,u(_.value),1)):i("",!0),s.$slots.action?d(s.$slots,"action",{key:4}):D.value?(a(),f(o(b),{key:5,size:"lg",onClick:T},{default:p(()=>[h(o(O),{class:"mr-2 size-4"}),g(" "+u(o(t)("common.backToHome")),1)]),_:1})):V.value?(a(),f(o(b),{key:6,size:"lg",onClick:$},{default:p(()=>[h(o(N),{class:"mr-2 size-4"}),g(" "+u(o(t)("common.refresh")),1)]),_:1})):i("",!0)])]))}});export{K as _};