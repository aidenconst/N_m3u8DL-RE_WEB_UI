import{h as k,as as b,at as g,au as C,av as $,aw as w}from"./bootstrap-CCGv-ICO.js";import{V as i,ab as r,ac as l,ad as p,ae as v,a_ as u,S as t,aY as z,ai as f,aj as x,a9 as c,J as m,ah as y,n as d,ap as B,aw as j,ag as _,an as A,a as h,bt as I,g as M,i as S}from"../jse/index-index-BBRB-Z2M.js";const V=k("MenuIcon",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]),F=b("inline-flex items-center justify-center font-normal text-foreground select-none shrink-0 bg-secondary overflow-hidden",{variants:{shape:{circle:"rounded-full",square:"rounded-md"},size:{base:"h-16 w-16 text-2xl",lg:"h-32 w-32 text-5xl",sm:"h-10 w-10 text-xs"}}}),N=i({__name:"Avatar",props:{class:{},shape:{default:"circle"},size:{default:"sm"}},setup(n){const e=n;return(s,o)=>(r(),l(t(g),{class:u(t(z)(t(F)({size:s.size,shape:s.shape}),e.class))},{default:p(()=>[v(s.$slots,"default")]),_:3},8,["class"]))}}),P=i({__name:"AvatarFallback",props:{delayMs:{},asChild:{type:Boolean},as:{}},setup(n){const e=n;return(s,o)=>(r(),l(t(C),f(x(e)),{default:p(()=>[v(s.$slots,"default")]),_:3},16))}}),R=i({__name:"AvatarImage",props:{src:{},asChild:{type:Boolean},as:{}},setup(n){const e=n;return(s,o)=>(r(),l(t($),c(e,{class:"h-full w-full object-cover"}),null,16))}}),E=i({inheritAttrs:!1,__name:"avatar",props:{alt:{default:"avatar"},class:{},dot:{type:Boolean,default:!1},dotClass:{default:"bg-green-500"},asChild:{type:Boolean},as:{default:"button"},delayMs:{},src:{}},setup(n){const e=n,s=m(()=>e.alt.slice(-2).toUpperCase());return(o,a)=>(r(),y("div",{class:u([e.class,"relative flex flex-shrink-0 items-center"])},[d(t(N),{class:u([e.class,"size-full"])},{default:p(()=>[d(t(R),{alt:o.alt,src:o.src},null,8,["alt","src"]),d(t(P),null,{default:p(()=>[B(j(s.value),1)]),_:1})]),_:1},8,["class"]),o.dot?(r(),y("span",{key:0,class:u([o.dotClass,"border-background absolute bottom-0 right-0 size-3 rounded-full border-2"])},null,2)):_("",!0)],2))}}),D=["src"],H=i({__name:"icon",props:{fallback:{type:Boolean},icon:{type:[Function,String]}},setup(n){const e=n,s=m(()=>h(e.icon)&&I(e.icon)),o=m(()=>{const{icon:a}=e;return!h(a)&&(M(a)||S(a))});return(a,O)=>o.value?(r(),l(A(a.icon),f(c({key:0},a.$attrs)),null,16)):s.value?(r(),y("img",c({key:1,src:a.icon},a.$attrs),null,16,D)):a.icon?(r(),l(t(w),c({key:2},a.$attrs,{icon:a.icon}),null,16,["icon"])):a.fallback?(r(),l(t(V),f(c({key:3},a.$attrs)),null,16)):_("",!0)}});export{V as M,H as _,E as a};
