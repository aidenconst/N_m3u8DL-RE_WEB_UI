var g=(f,u,t)=>new Promise((d,l)=>{var c=e=>{try{n(t.next(e))}catch(s){l(s)}},h=e=>{try{n(t.throw(e))}catch(s){l(s)}},n=e=>e.done?d(e.value):Promise.resolve(e.value).then(c,h);n((t=t.apply(f,u)).next())});import{V as y,X as p,b4 as v,J as $,ac as b,ak as o,aq as a,an as r,az as m,ap as i,at as k,b0 as C,av as H,q as R}from"../jse/index-index-D8HUbXK_.js";const B={class:"relative"},S={key:0,class:"mb-2 flex text-lg font-semibold"},z={key:0,class:"text-muted-foreground"},T={key:0,class:"absolute bottom-4 right-4"},N=y({name:"Page",__name:"page",props:{title:{default:""},description:{default:""},contentClass:{default:""},autoContentHeight:{type:Boolean,default:!1}},setup(f){const u=p(0),t=p(0),d=p(!1),l=v("headerRef"),c=v("footerRef"),h=$(()=>f.autoContentHeight?{height:d.value?`calc(var(--vben-content-height) - ${u.value}px - ${t.value}px)`:"0"}:{});function n(){return g(this,null,function*(){var e,s;f.autoContentHeight&&(yield R(),u.value=((e=l.value)==null?void 0:e.offsetHeight)||0,t.value=((s=c.value)==null?void 0:s.offsetHeight)||0,setTimeout(()=>{d.value=!0},30))})}return b(()=>{n()}),(e,s)=>(o(),a("div",B,[e.description||e.$slots.description||e.title||e.$slots.title||e.$slots.extra?(o(),a("div",{key:0,ref_key:"headerRef",ref:l,class:"bg-card relative px-6 py-4"},[r(e.$slots,"title",{},()=>[e.title?(o(),a("div",S,m(e.title),1)):i("",!0)]),r(e.$slots,"description",{},()=>[e.description?(o(),a("p",z,m(e.description),1)):i("",!0)]),e.$slots.extra?(o(),a("div",T,[r(e.$slots,"extra")])):i("",!0)],512)):i("",!0),k("div",{class:C([e.contentClass,"h-full p-4"]),style:H(h.value)},[r(e.$slots,"default")],6),e.$slots.footer?(o(),a("div",{key:1,ref_key:"footerRef",ref:c,class:"bg-card align-center absolute bottom-0 left-0 right-0 flex px-6 py-4"},[r(e.$slots,"footer")],512)):i("",!0)]))}});export{N as _};
