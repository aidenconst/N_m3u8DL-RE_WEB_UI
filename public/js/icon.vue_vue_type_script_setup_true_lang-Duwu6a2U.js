import{h as v,k as b,R as g,O as C,A as z,I as $}from"./bootstrap-CVS98kDF.js";import{V as i,ak as r,al as l,am as p,an as _,b0 as u,S as t,a_ as w,ar as f,as as x,ai as c,J as m,aq as y,n as d,aw as B,az as A,ap as k,au as I,a as h,bt as M,g as S,i as V}from"../jse/index-index-KP0sPiL_.js";const j=v("MenuIcon",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]),R=b("inline-flex items-center justify-center font-normal text-foreground select-none shrink-0 bg-secondary overflow-hidden",{variants:{shape:{circle:"rounded-full",square:"rounded-md"},size:{base:"h-16 w-16 text-2xl",lg:"h-32 w-32 text-5xl",sm:"h-10 w-10 text-xs"}}}),F=i({__name:"Avatar",props:{class:{},shape:{default:"circle"},size:{default:"sm"}},setup(n){const a=n;return(s,o)=>(r(),l(t(g),{class:u(t(w)(t(R)({size:s.size,shape:s.shape}),a.class))},{default:p(()=>[_(s.$slots,"default")]),_:3},8,["class"]))}}),N=i({__name:"AvatarFallback",props:{delayMs:{},asChild:{type:Boolean},as:{}},setup(n){const a=n;return(s,o)=>(r(),l(t(C),f(x(a)),{default:p(()=>[_(s.$slots,"default")]),_:3},16))}}),O=i({__name:"AvatarImage",props:{src:{},asChild:{type:Boolean},as:{}},setup(n){const a=n;return(s,o)=>(r(),l(t(z),c(a,{class:"h-full w-full object-cover"}),null,16))}}),E=i({inheritAttrs:!1,__name:"avatar",props:{alt:{default:"avatar"},class:{},dot:{type:Boolean,default:!1},dotClass:{default:"bg-green-500"},asChild:{type:Boolean},as:{default:"button"},delayMs:{},src:{}},setup(n){const a=n,s=m(()=>a.alt.slice(-2).toUpperCase());return(o,e)=>(r(),y("div",{class:u([a.class,"relative flex flex-shrink-0 items-center"])},[d(t(F),{class:u([a.class,"size-full"])},{default:p(()=>[d(t(O),{alt:o.alt,src:o.src},null,8,["alt","src"]),d(t(N),null,{default:p(()=>[B(A(s.value),1)]),_:1})]),_:1},8,["class"]),o.dot?(r(),y("span",{key:0,class:u([o.dotClass,"border-background absolute bottom-0 right-0 size-3 rounded-full border-2"])},null,2)):k("",!0)],2))}}),P=["src"],H=i({__name:"icon",props:{fallback:{type:Boolean},icon:{type:[Function,String]}},setup(n){const a=n,s=m(()=>h(a.icon)&&M(a.icon)),o=m(()=>{const{icon:e}=a;return!h(e)&&(S(e)||V(e))});return(e,q)=>o.value?(r(),l(I(e.icon),f(c({key:0},e.$attrs)),null,16)):s.value?(r(),y("img",c({key:1,src:e.icon},e.$attrs),null,16,P)):e.icon?(r(),l(t($),c({key:2},e.$attrs,{icon:e.icon}),null,16,["icon"])):e.fallback?(r(),l(t(j),f(c({key:3},e.$attrs)),null,16)):k("",!0)}});export{j as M,E as _,H as a};
