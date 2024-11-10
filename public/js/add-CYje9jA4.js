var p=(m,n,t)=>new Promise((r,a)=>{var e=o=>{try{s(t.next(o))}catch(i){a(i)}},l=o=>{try{s(t.throw(o))}catch(i){a(i)}},s=o=>o.done?r(o.value):Promise.resolve(o.value).then(e,l);s((t=t.apply(m,n)).next())});import{u as h}from"./form-3jnFRDkN.js";import{s as g,j as d}from"./bootstrap-B5PCiQup.js";import{a as b,g as F}from"./index-DtfeGUaF.js";import{C as V}from"./index-DgwhPlrx.js";import{_ as w}from"./page.vue_vue_type_script_setup_true_lang-Dp08S_JZ.js";import{V as y,ac as P,al as _,am as u,S as c,ak as N,n as f}from"../jse/index-index-CDKH9__3.js";const A=y({__name:"add",setup(m){const[n,t]=h({commonConfig:{componentProps:{class:"w-full"}},handleSubmit:r,layout:"horizontal",schema:[{component:"Input",componentProps:{placeholder:"请输入下载链接"},fieldName:"url",label:"下载链接",rules:"required"},{component:"Input",componentProps:{placeholder:"请输入保存文件名"},fieldName:"title",label:"文件名",rules:"required"},{component:"Input",componentProps:{placeholder:"请输入"},fieldName:"saveFilePaths",defaultValue:"/download",label:"保存目录",rules:g().default("默认值").optional()},{component:"Switch",defaultValue:!1,fieldName:"setmore",componentProps:{class:"w-auto"},help:"打开可以配置更多下载信息",label:"设置更多"},{component:"Input",dependencies:{if(e){return!!e.setmore},triggerFields:["setmore"]},componentProps:{placeholder:"请输入token"},help:"默认获取预设token",fieldName:"token",label:"token"},{component:"InputNumber",componentProps:{placeholder:"请输入下载并发线程数量"},dependencies:{if(e){return!!e.setmore},triggerFields:["setmore"]},help:"下载并发线程数量,默认运行主机CPU线程数",defaultValue:12,fieldName:"threadCountss",label:"下载线程"},{component:"InputNumber",componentProps:{placeholder:"请输入下载出错时重试次数"},dependencies:{if(e){return!!e.setmore},triggerFields:["setmore"]},help:"下载错误时重试次数,默认5次",fieldName:"retrycounts",defaultValue:5,label:"出错重试"},{component:"Switch",defaultValue:!0,fieldName:"setbinaryMeMrges",componentProps:{class:"w-auto"},dependencies:{if(e){return!!e.setmore},triggerFields:["setmore"]},label:"二进制合并"},{component:"Switch",defaultValue:!0,fieldName:"setdecryptions",dependencies:{if(e){return!!e.setmore},triggerFields:["setmore"]},componentProps:{class:"w-auto"},label:"实时解密分片"}],wrapperClass:"grid-cols-1"});function r(e){return p(this,null,function*(){(yield b(e))?d.success({content:"已加入下载队列"}):d.error({content:"添加错误"})})}function a(){return p(this,null,function*(){const e=yield F();t.setFieldValue("token",e.apiToken),t.setFieldValue("saveFilePaths",e.saveFile),t.setFieldValue("threadCountss",e.threadCount),t.setFieldValue("retrycounts",e.retrycount),t.setFieldValue("setbinaryMeMrges",e.binaryMeMrge),t.setFieldValue("setdecryptions",e.mp4RealTimeDecryption)})}return P(()=>{a()}),(e,l)=>(N(),_(c(w),null,{default:u(()=>[f(c(V),{title:"新建下载任务"},{default:u(()=>[f(c(n))]),_:1})]),_:1}))}});export{A as default};
