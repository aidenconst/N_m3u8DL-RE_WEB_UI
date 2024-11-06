import{a as j,_ as b}from"./icon.vue_vue_type_script_setup_true_lang-DEQGaKYy.js";import{V as u,ab as r,ah as o,ae as f,a_ as _,S as t,aY as m,n,ag as x,bs as N,ac as h,ad as c,ap as g,aw as p,aq as v,al as i,F as $}from"../jse/index-index-j8hGa-Ht.js";const k=u({__name:"Card",props:{class:{}},setup(l){const s=l;return(a,e)=>(r(),o("div",{class:_(t(m)("bg-card text-card-foreground border-border rounded-xl border",s.class))},[f(a.$slots,"default")],2))}}),y=u({__name:"CardContent",props:{class:{}},setup(l){const s=l;return(a,e)=>(r(),o("div",{class:_(t(m)("p-6 pt-0",s.class))},[f(a.$slots,"default")],2))}}),w=u({__name:"CardHeader",props:{class:{}},setup(l){const s=l;return(a,e)=>(r(),o("div",{class:_(t(m)("flex flex-col gap-y-1.5 p-5",s.class))},[f(a.$slots,"default")],2))}}),C=u({__name:"CardTitle",props:{class:{}},setup(l){const s=l;return(a,e)=>(r(),o("h3",{class:_(t(m)("font-semibold leading-none tracking-tight",s.class))},[f(a.$slots,"default")],2))}}),V={class:"card-box p-4 py-6 lg:flex"},z={key:0,class:"flex flex-col justify-center md:ml-6 md:mt-0"},B={key:0,class:"text-md font-semibold md:text-xl"},S={key:1,class:"text-foreground/80 mt-1"},L=u({name:"WorkbenchHeader",__name:"workbench-header",props:{avatar:{default:""}},setup(l){return(s,a)=>(r(),o("div",V,[n(t(j),{src:s.avatar,class:"size-20"},null,8,["src"]),s.$slots.title||s.$slots.description?(r(),o("div",z,[s.$slots.title?(r(),o("h1",B,[f(s.$slots,"title")])):x("",!0),s.$slots.description?(r(),o("span",S,[f(s.$slots,"description")])):x("",!0)])):x("",!0),a[0]||(a[0]=N('<div class="mt-4 flex flex-1 justify-end md:mt-0"><div class="flex flex-col justify-center text-right"><span class="text-foreground/80"> 待办 </span><span class="text-2xl">2/10</span></div><div class="mx-12 flex flex-col justify-center text-right md:mx-16"><span class="text-foreground/80"> 项目 </span><span class="text-2xl">8</span></div><div class="mr-4 flex flex-col justify-center text-right md:mr-10"><span class="text-foreground/80"> 团队 </span><span class="text-2xl">300</span></div></div>',1))]))}}),W={class:"flex items-center"},q={class:"ml-4 text-lg font-medium"},F={class:"text-foreground/80 mt-4 flex h-10"},H={class:"text-foreground/80 flex justify-between"},P=u({name:"WorkbenchProject",__name:"workbench-project",props:{items:{default:()=>[]},title:{}},setup(l){return(s,a)=>(r(),h(t(k),null,{default:c(()=>[n(t(w),{class:"py-4"},{default:c(()=>[n(t(C),{class:"text-lg"},{default:c(()=>[g(p(s.title),1)]),_:1})]),_:1}),n(t(y),{class:"flex flex-wrap p-0"},{default:c(()=>[(r(!0),o($,null,v(s.items,(e,d)=>(r(),o("div",{key:e.title,class:_([{"border-r-0":d%3===2,"border-b-0":d<3,"pb-4":d>2},"border-border group w-full cursor-pointer border-b border-r border-t p-4 transition-all hover:shadow-xl md:w-1/2 lg:w-1/3"])},[i("div",W,[n(t(b),{color:e.color,icon:e.icon,class:"size-8 transition-all duration-300 group-hover:scale-110"},null,8,["color","icon"]),i("span",q,p(e.title),1)]),i("div",F,p(e.content),1),i("div",H,[i("span",null,p(e.group),1),i("span",null,p(e.date),1)])],2))),128))]),_:1})]),_:1}))}}),T={class:"text-md mt-2 truncate"},Q=u({name:"WorkbenchQuickNav",__name:"workbench-quick-nav",props:{items:{default:()=>[]},title:{}},setup(l){return(s,a)=>(r(),h(t(k),null,{default:c(()=>[n(t(w),{class:"py-4"},{default:c(()=>[n(t(C),{class:"text-lg"},{default:c(()=>[g(p(s.title),1)]),_:1})]),_:1}),n(t(y),{class:"flex flex-wrap p-0"},{default:c(()=>[(r(!0),o($,null,v(s.items,(e,d)=>(r(),o("div",{key:e.title,class:_([{"border-r-0":d%3===2,"pb-4":d>2,"border-b-0":d<3},"flex-col-center border-border group w-1/3 cursor-pointer border-b border-r border-t py-8 hover:shadow-xl"])},[n(t(b),{color:e.color,icon:e.icon,class:"size-7 transition-all duration-300 group-hover:scale-125"},null,8,["color","icon"]),i("span",T,p(e.title),1)],2))),128))]),_:1})]),_:1}))}});export{w as _,C as a,y as b,k as c,L as d,P as e,Q as f};