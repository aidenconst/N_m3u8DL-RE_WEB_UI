var o=(n,c,i)=>new Promise((d,r)=>{var u=t=>{try{a(i.next(t))}catch(s){r(s)}},f=t=>{try{a(i.throw(t))}catch(s){r(s)}},a=t=>t.done?d(t.value):Promise.resolve(t.value).then(u,f);a((i=i.apply(n,c)).next())});import{r as e}from"./bootstrap-HQD1Fffr.js";function l(){return o(this,null,function*(){return e.get("/downloaddone")})}function w(){return o(this,null,function*(){return e.get("/downloadfail")})}function y(n){return o(this,null,function*(){return e.post("/download",n)})}function A(){return o(this,null,function*(){return e.get("/getconfig")})}function m(n){return o(this,null,function*(){return e.post("/editconfig",n)})}function D(n){return o(this,null,function*(){return e.post("/delJsonItem",n)})}export{y as a,l as b,w as c,D as d,m as e,A as g};
