var S=Object.getOwnPropertySymbols;var F=Object.prototype.hasOwnProperty,R=Object.prototype.propertyIsEnumerable;var x=(s,o)=>{var e={};for(var t in s)F.call(s,t)&&o.indexOf(t)<0&&(e[t]=s[t]);if(s!=null&&S)for(var t of S(s))o.indexOf(t)<0&&R.call(s,t)&&(e[t]=s[t]);return e};var M=(s,o,e)=>new Promise((t,r)=>{var n=d=>{try{u(e.next(d))}catch(h){r(h)}},l=d=>{try{u(e.throw(d))}catch(h){r(h)}},u=d=>d.done?t(d.value):Promise.resolve(d.value).then(n,l);u((e=e.apply(s,o)).next())});import{V as f,ak as c,al as m,am as i,an as y,ar as j,as as I,S as a,J as v,n as g,ai as k,a_ as b,W as H,U as W,b2 as L,b3 as O,aq as _,ax as E,b0 as D,au as G,ap as $,aw as U,az as z,F as q,Q as N,aV as V,at as p,q as Q}from"../jse/index-index-CDKH9__3.js";import{h as w,b4 as P,ci as J,cj as K,ck as X,cl as Y,bb as C,cm as Z,cn as ee,k as ae,co as te,cp as oe,bM as se,c7 as ne,c9 as le,bE as re,e as de,bF as ie,b0 as ce,$ as B,c1 as ue}from"./bootstrap-B5PCiQup.js";const pe=w("LanguagesIcon",[["path",{d:"m5 8 6 6",key:"1wu5hv"}],["path",{d:"m4 14 6-6 2-3",key:"1k1g8d"}],["path",{d:"M2 5h12",key:"or177f"}],["path",{d:"M7 2h1",key:"1t2jsx"}],["path",{d:"m22 22-5-10-5 10",key:"don7ne"}],["path",{d:"M14 18h6",key:"1m8k6r"}]]);const me=w("MoonStarIcon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9",key:"4ay0iu"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}]]);const fe=w("SunMoonIcon",[["path",{d:"M12 8a2.83 2.83 0 0 0 4 4 4 4 0 1 1-4-4",key:"1fu5g2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.9 4.9 1.4 1.4",key:"b9915j"}],["path",{d:"m17.7 17.7 1.4 1.4",key:"qc3ed3"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.3 17.7-1.4 1.4",key:"5gca6"}],["path",{d:"m19.1 4.9-1.4 1.4",key:"wpu9u6"}]]);const he=w("SunIcon",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]),ge=f({__name:"DropdownMenu",props:{defaultOpen:{type:Boolean},open:{type:Boolean},dir:{},modal:{type:Boolean,default:!1}},emits:["update:open"],setup(s,{emit:o}){const r=P(s,o);return(n,l)=>(c(),m(a(J),j(I(a(r))),{default:i(()=>[y(n.$slots,"default")]),_:3},16))}}),ye=f({__name:"DropdownMenuContent",props:{class:{},forceMount:{type:Boolean},loop:{type:Boolean},side:{},sideOffset:{default:4},align:{},alignOffset:{},avoidCollisions:{type:Boolean},collisionBoundary:{},collisionPadding:{},arrowPadding:{},sticky:{},hideWhenDetached:{type:Boolean},updatePositionStrategy:{},prioritizePosition:{type:Boolean},asChild:{type:Boolean},as:{}},emits:["escapeKeyDown","pointerDownOutside","focusOutside","interactOutside","closeAutoFocus"],setup(s,{emit:o}){const e=s,t=o,r=v(()=>{const d=e,{class:l}=d;return x(d,["class"])}),n=P(r,t);return(l,u)=>(c(),m(a(X),null,{default:i(()=>[g(a(K),k(a(n),{class:a(b)("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 border-border z-[1000] min-w-32 overflow-hidden rounded-md border p-1 shadow-md",e.class)}),{default:i(()=>[y(l.$slots,"default")]),_:3},16,["class"])]),_:3}))}}),_e=f({__name:"DropdownMenuGroup",props:{asChild:{type:Boolean},as:{}},setup(s){const o=s;return(e,t)=>(c(),m(a(Y),j(I(o)),{default:i(()=>[y(e.$slots,"default")]),_:3},16))}}),ve=f({__name:"DropdownMenuItem",props:{class:{},inset:{type:Boolean},disabled:{type:Boolean},textValue:{},asChild:{type:Boolean},as:{}},setup(s){const o=s,e=v(()=>{const l=o,{class:r}=l;return x(l,["class"])}),t=C(e);return(r,n)=>(c(),m(a(Z),k(a(t),{class:a(b)("focus:bg-accent focus:text-accent-foreground relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50",r.inset&&"pl-8",o.class)}),{default:i(()=>[y(r.$slots,"default")]),_:3},16,["class"]))}}),ke=f({__name:"DropdownMenuTrigger",props:{disabled:{type:Boolean},asChild:{type:Boolean},as:{}},setup(s){const e=C(s);return(t,r)=>(c(),m(a(ee),k({class:"outline-none"},a(e)),{default:i(()=>[y(t.$slots,"default")]),_:3},16))}}),xe=ae("inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground",{defaultVariants:{size:"default",variant:"default"},variants:{size:{default:"h-9 px-3",lg:"h-10 px-3",sm:"h-8 px-2"},variant:{default:"bg-transparent",outline:"border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground"}}}),be=f({__name:"ToggleGroup",props:{class:{},size:{},variant:{},rovingFocus:{type:Boolean},disabled:{type:Boolean},orientation:{},dir:{},loop:{type:Boolean},asChild:{type:Boolean},as:{},type:{},modelValue:{},defaultValue:{}},emits:["update:modelValue"],setup(s,{emit:o}){const e=s,t=o;H("toggleGroup",{size:e.size,variant:e.variant});const r=v(()=>{const d=e,{class:l}=d;return x(d,["class"])}),n=P(r,t);return(l,u)=>(c(),m(a(te),k(a(n),{class:a(b)("flex items-center justify-center gap-1",e.class)}),{default:i(()=>[y(l.$slots,"default")]),_:3},16,["class"]))}}),we=f({__name:"ToggleGroupItem",props:{class:{},size:{},variant:{},value:{},defaultValue:{type:Boolean},pressed:{type:Boolean},disabled:{type:Boolean},asChild:{type:Boolean},as:{}},setup(s){const o=s,e=W("toggleGroup"),t=v(()=>{const h=o,{class:n,size:l,variant:u}=h;return x(h,["class","size","variant"])}),r=C(t);return(n,l)=>{var u,d;return c(),m(a(oe),k(a(r),{class:a(b)(a(xe)({variant:((u=a(e))==null?void 0:u.variant)||n.variant,size:((d=a(e))==null?void 0:d.size)||n.size}),o.class)}),{default:i(()=>[y(n.$slots,"default")]),_:3},16,["class"])}}}),Me=f({name:"DropdownRadioMenu",__name:"dropdown-radio-menu",props:L({menus:{}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(s){const o=O(s,"modelValue");function e(t){o.value=t}return(t,r)=>(c(),m(a(ge),null,{default:i(()=>[g(a(ke),{"as-child":"",class:"flex items-center gap-1"},{default:i(()=>[y(t.$slots,"default")]),_:3}),g(a(ye),{align:"start"},{default:i(()=>[g(a(_e),null,{default:i(()=>[(c(!0),_(q,null,E(t.menus,n=>(c(),m(a(ve),{key:n.key,class:D([n.value===o.value?"bg-accent text-accent-foreground":"","data-[state=checked]:bg-accent data-[state=checked]:text-accent-foreground text-foreground/80 mb-1 cursor-pointer"]),onClick:l=>e(n.value)},{default:i(()=>[n.icon?(c(),m(G(n.icon),{key:0,class:"mr-2 size-4"})):$("",!0),n.icon?$("",!0):(c(),_("span",{key:1,class:D([n.value===o.value?"bg-foreground":"","mr-2 size-1.5 rounded-full"])},null,2)),U(" "+z(n.label),1)]),_:2},1032,["class","onClick"]))),128))]),_:1})]),_:1})]),_:3}))}}),Be={class:"text-md flex-center"},$e=["href"],De=f({name:"Copyright",__name:"copyright",props:{companyName:{default:"aidenconsole"},companySiteLink:{default:""},date:{default:"2024"},icp:{default:""},icpLink:{default:""}},setup(s){return(o,e)=>(c(),_("div",Be,[o.icp?(c(),_("a",{key:0,href:o.icpLink||"javascript:void(0)",class:"hover:text-primary-hover mx-1",target:"_blank"},z(o.icp),9,$e)):$("",!0),U(" Copyright © "+z(o.date),1)]))}}),je=f({name:"LanguageToggle",__name:"language-toggle",setup(s){function o(e){return M(this,null,function*(){const t=e;V({app:{locale:t}}),yield le(t)})}return(e,t)=>(c(),_("div",null,[g(a(Me),{menus:a(ne),"model-value":a(N).app.locale,"onUpdate:modelValue":o},{default:i(()=>[g(a(se),null,{default:i(()=>[g(a(pe),{class:"text-foreground size-4"})]),_:1})]),_:1},8,["menus","model-value"])]))}}),ze=f({name:"ThemeToggleButton",__name:"theme-button",props:L({type:{default:"normal"}},{modelValue:{type:Boolean},modelModifiers:{}}),emits:["update:modelValue"],setup(s){const o=s,e=O(s,"modelValue"),t=v(()=>e.value?"light":"dark"),r=v(()=>o.type==="normal"?{variant:"heavy"}:{class:"rounded-full",size:"icon",style:{padding:"7px"},variant:"icon"});function n(l){if(!(document.startViewTransition&&!window.matchMedia("(prefers-reduced-motion: reduce)").matches)||!l){e.value=!e.value;return}const d=l.clientX,h=l.clientY,A=Math.hypot(Math.max(d,innerWidth-d),Math.max(h,innerHeight-h));document.startViewTransition(()=>M(this,null,function*(){e.value=!e.value,yield Q()})).ready.then(()=>{const T=[`circle(0px at ${d}px ${h}px)`,`circle(${A}px at ${d}px ${h}px)`];document.documentElement.animate({clipPath:e.value?[...T].reverse():T},{duration:450,easing:"ease-in",pseudoElement:e.value?"::view-transition-old(root)":"::view-transition-new(root)"})})}return(l,u)=>(c(),m(a(de),k({"aria-label":t.value,class:[[`is-${t.value}`],"theme-toggle cursor-pointer border-none bg-none"],"aria-live":"polite"},r.value,{onClick:re(n,["stop"])}),{default:i(()=>u[0]||(u[0]=[p("svg",{"aria-hidden":"true",height:"24",viewBox:"0 0 24 24",width:"24"},[p("mask",{id:"theme-toggle-moon",class:"theme-toggle__moon",fill:"hsl(var(--foreground)/80%)",stroke:"none"},[p("rect",{fill:"white",height:"100%",width:"100%",x:"0",y:"0"}),p("circle",{cx:"40",cy:"8",fill:"black",r:"11"})]),p("circle",{id:"sun",class:"theme-toggle__sun",cx:"12",cy:"12",mask:"url(#theme-toggle-moon)",r:"11"}),p("g",{class:"theme-toggle__sun-beams"},[p("line",{x1:"12",x2:"12",y1:"1",y2:"3"}),p("line",{x1:"12",x2:"12",y1:"21",y2:"23"}),p("line",{x1:"4.22",x2:"5.64",y1:"4.22",y2:"5.64"}),p("line",{x1:"18.36",x2:"19.78",y1:"18.36",y2:"19.78"}),p("line",{x1:"1",x2:"3",y1:"12",y2:"12"}),p("line",{x1:"21",x2:"23",y1:"12",y2:"12"}),p("line",{x1:"4.22",x2:"5.64",y1:"19.78",y2:"18.36"}),p("line",{x1:"18.36",x2:"19.78",y1:"5.64",y2:"4.22"})])],-1)])),_:1},16,["aria-label","class"]))}}),Ve=ie(ze,[["__scopeId","data-v-8e18cb5a"]]),Ie=f({name:"ThemeToggle",__name:"theme-toggle",props:{shouldOnHover:{type:Boolean,default:!1}},setup(s){function o(r){V({theme:{mode:r?"dark":"light"}})}const{isDark:e}=ce(),t=[{icon:he,name:"light",title:B("preferences.theme.light")},{icon:me,name:"dark",title:B("preferences.theme.dark")},{icon:fe,name:"auto",title:B("preferences.followSystem")}];return(r,n)=>(c(),_("div",null,[g(a(ue),{disabled:!r.shouldOnHover,side:"bottom"},{trigger:i(()=>[g(Ve,{"model-value":a(e),type:"icon","onUpdate:modelValue":o},null,8,["model-value"])]),default:i(()=>[g(a(be),{"model-value":a(N).theme.mode,class:"gap-2",type:"single",variant:"outline","onUpdate:modelValue":n[0]||(n[0]=l=>a(V)({theme:{mode:l}}))},{default:i(()=>[(c(),_(q,null,E(t,l=>g(a(we),{key:l.name,value:l.name},{default:i(()=>[(c(),m(G(l.icon),{class:"size-5"}))]),_:2},1032,["value"])),64))]),_:1},8,["model-value"])]),_:1},8,["disabled"])]))}});export{me as M,he as S,ge as _,ke as a,ye as b,ve as c,_e as d,we as e,be as f,fe as g,Ie as h,je as i,De as j,Me as k};
