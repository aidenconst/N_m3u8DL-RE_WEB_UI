var o=(t,c,i)=>new Promise((g,s)=>{var d=n=>{try{a(i.next(n))}catch(r){s(r)}},f=n=>{try{a(i.throw(n))}catch(r){s(r)}},a=n=>n.done?g(n.value):Promise.resolve(n.value).then(d,f);a((i=i.apply(t,c)).next())});import{r as e}from"./bootstrap-B5PCiQup.js";function l(){return o(this,null,function*(){return e.get("/downloaddone")})}function w(){return o(this,null,function*(){return e.get("/downloadfail")})}function y(t){return o(this,null,function*(){return e.post("/download",t)})}function A(){return o(this,null,function*(){return e.get("/getconfig")})}function D(t){return o(this,null,function*(){return e.post("/editconfig",t)})}export{y as a,l as b,w as c,D as e,A as g};
