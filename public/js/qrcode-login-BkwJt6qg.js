var yt=(e,t,i)=>new Promise((o,n)=>{var r=u=>{try{a(i.next(u))}catch(c){n(c)}},s=u=>{try{a(i.throw(u))}catch(c){n(c)}},a=u=>u.done?o(u.value):Promise.resolve(u.value).then(r,s);a((i=i.apply(e,t)).next())});import{u as Kt,$,T as $t,e as Jt,L as Ot}from"./bootstrap-39ys62ep.js";import{bp as Yt,X as Tt,P as qt,bq as jt,V as At,ak as Nt,aq as Gt,n as Ct,am as et,at as J,an as nt,aw as O,az as Y,S as R,al as Qt}from"../jse/index-index-D-SN0b-B.js";var H={},Wt=function(){return typeof Promise=="function"&&Promise.prototype&&Promise.prototype.then},It={},N={};let dt;const Xt=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];N.getSymbolSize=function(t){if(!t)throw new Error('"version" cannot be null or undefined');if(t<1||t>40)throw new Error('"version" should be in range from 1 to 40');return t*4+17};N.getSymbolTotalCodewords=function(t){return Xt[t]};N.getBCHDigit=function(e){let t=0;for(;e!==0;)t++,e>>>=1;return t};N.setToSJISFunction=function(t){if(typeof t!="function")throw new Error('"toSJISFunc" is not a valid function.');dt=t};N.isKanjiModeEnabled=function(){return typeof dt!="undefined"};N.toSJIS=function(t){return dt(t)};var W={};(function(e){e.L={bit:1},e.M={bit:0},e.Q={bit:3},e.H={bit:2};function t(i){if(typeof i!="string")throw new Error("Param is not a string");switch(i.toLowerCase()){case"l":case"low":return e.L;case"m":case"medium":return e.M;case"q":case"quartile":return e.Q;case"h":case"high":return e.H;default:throw new Error("Unknown EC Level: "+i)}}e.isValid=function(o){return o&&typeof o.bit!="undefined"&&o.bit>=0&&o.bit<4},e.from=function(o,n){if(e.isValid(o))return o;try{return t(o)}catch(r){return n}}})(W);function bt(){this.buffer=[],this.length=0}bt.prototype={get:function(e){const t=Math.floor(e/8);return(this.buffer[t]>>>7-e%8&1)===1},put:function(e,t){for(let i=0;i<t;i++)this.putBit((e>>>t-i-1&1)===1)},getLengthInBits:function(){return this.length},putBit:function(e){const t=Math.floor(this.length/8);this.buffer.length<=t&&this.buffer.push(0),e&&(this.buffer[t]|=128>>>this.length%8),this.length++}};var Zt=bt;function K(e){if(!e||e<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=e,this.data=new Uint8Array(e*e),this.reservedBit=new Uint8Array(e*e)}K.prototype.set=function(e,t,i,o){const n=e*this.size+t;this.data[n]=i,o&&(this.reservedBit[n]=!0)};K.prototype.get=function(e,t){return this.data[e*this.size+t]};K.prototype.xor=function(e,t,i){this.data[e*this.size+t]^=i};K.prototype.isReserved=function(e,t){return this.reservedBit[e*this.size+t]};var xt=K,Pt={};(function(e){const t=N.getSymbolSize;e.getRowColCoords=function(o){if(o===1)return[];const n=Math.floor(o/7)+2,r=t(o),s=r===145?26:Math.ceil((r-13)/(2*n-2))*2,a=[r-7];for(let u=1;u<n-1;u++)a[u]=a[u-1]-s;return a.push(6),a.reverse()},e.getPositions=function(o){const n=[],r=e.getRowColCoords(o),s=r.length;for(let a=0;a<s;a++)for(let u=0;u<s;u++)a===0&&u===0||a===0&&u===s-1||a===s-1&&u===0||n.push([r[a],r[u]]);return n}})(Pt);var Mt={};const te=N.getSymbolSize,Et=7;Mt.getPositions=function(t){const i=te(t);return[[0,0],[i-Et,0],[0,i-Et]]};var St={};(function(e){e.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};const t={N1:3,N2:3,N3:40,N4:10};e.isValid=function(n){return n!=null&&n!==""&&!isNaN(n)&&n>=0&&n<=7},e.from=function(n){return e.isValid(n)?parseInt(n,10):void 0},e.getPenaltyN1=function(n){const r=n.size;let s=0,a=0,u=0,c=null,l=null;for(let p=0;p<r;p++){a=u=0,c=l=null;for(let m=0;m<r;m++){let f=n.get(p,m);f===c?a++:(a>=5&&(s+=t.N1+(a-5)),c=f,a=1),f=n.get(m,p),f===l?u++:(u>=5&&(s+=t.N1+(u-5)),l=f,u=1)}a>=5&&(s+=t.N1+(a-5)),u>=5&&(s+=t.N1+(u-5))}return s},e.getPenaltyN2=function(n){const r=n.size;let s=0;for(let a=0;a<r-1;a++)for(let u=0;u<r-1;u++){const c=n.get(a,u)+n.get(a,u+1)+n.get(a+1,u)+n.get(a+1,u+1);(c===4||c===0)&&s++}return s*t.N2},e.getPenaltyN3=function(n){const r=n.size;let s=0,a=0,u=0;for(let c=0;c<r;c++){a=u=0;for(let l=0;l<r;l++)a=a<<1&2047|n.get(c,l),l>=10&&(a===1488||a===93)&&s++,u=u<<1&2047|n.get(l,c),l>=10&&(u===1488||u===93)&&s++}return s*t.N3},e.getPenaltyN4=function(n){let r=0;const s=n.data.length;for(let u=0;u<s;u++)r+=n.data[u];return Math.abs(Math.ceil(r*100/s/5)-10)*t.N4};function i(o,n,r){switch(o){case e.Patterns.PATTERN000:return(n+r)%2===0;case e.Patterns.PATTERN001:return n%2===0;case e.Patterns.PATTERN010:return r%3===0;case e.Patterns.PATTERN011:return(n+r)%3===0;case e.Patterns.PATTERN100:return(Math.floor(n/2)+Math.floor(r/3))%2===0;case e.Patterns.PATTERN101:return n*r%2+n*r%3===0;case e.Patterns.PATTERN110:return(n*r%2+n*r%3)%2===0;case e.Patterns.PATTERN111:return(n*r%3+(n+r)%2)%2===0;default:throw new Error("bad maskPattern:"+o)}}e.applyMask=function(n,r){const s=r.size;for(let a=0;a<s;a++)for(let u=0;u<s;u++)r.isReserved(u,a)||r.xor(u,a,i(n,u,a))},e.getBestMask=function(n,r){const s=Object.keys(e.Patterns).length;let a=0,u=1/0;for(let c=0;c<s;c++){r(c),e.applyMask(c,n);const l=e.getPenaltyN1(n)+e.getPenaltyN2(n)+e.getPenaltyN3(n)+e.getPenaltyN4(n);e.applyMask(c,n),l<u&&(u=l,a=c)}return a}})(St);var X={};const L=W,q=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],j=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];X.getBlocksCount=function(t,i){switch(i){case L.L:return q[(t-1)*4+0];case L.M:return q[(t-1)*4+1];case L.Q:return q[(t-1)*4+2];case L.H:return q[(t-1)*4+3];default:return}};X.getTotalCodewordsCount=function(t,i){switch(i){case L.L:return j[(t-1)*4+0];case L.M:return j[(t-1)*4+1];case L.Q:return j[(t-1)*4+2];case L.H:return j[(t-1)*4+3];default:return}};var Rt={},Z={};const z=new Uint8Array(512),G=new Uint8Array(256);(function(){let t=1;for(let i=0;i<255;i++)z[i]=t,G[t]=i,t<<=1,t&256&&(t^=285);for(let i=255;i<512;i++)z[i]=z[i-255]})();Z.log=function(t){if(t<1)throw new Error("log("+t+")");return G[t]};Z.exp=function(t){return z[t]};Z.mul=function(t,i){return t===0||i===0?0:z[G[t]+G[i]]};(function(e){const t=Z;e.mul=function(o,n){const r=new Uint8Array(o.length+n.length-1);for(let s=0;s<o.length;s++)for(let a=0;a<n.length;a++)r[s+a]^=t.mul(o[s],n[a]);return r},e.mod=function(o,n){let r=new Uint8Array(o);for(;r.length-n.length>=0;){const s=r[0];for(let u=0;u<n.length;u++)r[u]^=t.mul(n[u],s);let a=0;for(;a<r.length&&r[a]===0;)a++;r=r.slice(a)}return r},e.generateECPolynomial=function(o){let n=new Uint8Array([1]);for(let r=0;r<o;r++)n=e.mul(n,new Uint8Array([1,t.exp(r)]));return n}})(Rt);const Lt=Rt;function gt(e){this.genPoly=void 0,this.degree=e,this.degree&&this.initialize(this.degree)}gt.prototype.initialize=function(t){this.degree=t,this.genPoly=Lt.generateECPolynomial(this.degree)};gt.prototype.encode=function(t){if(!this.genPoly)throw new Error("Encoder not initialized");const i=new Uint8Array(t.length+this.degree);i.set(t);const o=Lt.mod(i,this.genPoly),n=this.degree-o.length;if(n>0){const r=new Uint8Array(this.degree);return r.set(o,n),r}return o};var ee=gt,_t={},_={},ht={};ht.isValid=function(t){return!isNaN(t)&&t>=1&&t<=40};var P={};const Dt="[0-9]+",ne="[A-Z $%*+\\-./:]+";let V="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";V=V.replace(/u/g,"\\u");const oe="(?:(?![A-Z0-9 $%*+\\-./:]|"+V+`)(?:.|[\r
]))+`;P.KANJI=new RegExp(V,"g");P.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g");P.BYTE=new RegExp(oe,"g");P.NUMERIC=new RegExp(Dt,"g");P.ALPHANUMERIC=new RegExp(ne,"g");const re=new RegExp("^"+V+"$"),ie=new RegExp("^"+Dt+"$"),se=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");P.testKanji=function(t){return re.test(t)};P.testNumeric=function(t){return ie.test(t)};P.testAlphanumeric=function(t){return se.test(t)};(function(e){const t=ht,i=P;e.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},e.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},e.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},e.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},e.MIXED={bit:-1},e.getCharCountIndicator=function(r,s){if(!r.ccBits)throw new Error("Invalid mode: "+r);if(!t.isValid(s))throw new Error("Invalid version: "+s);return s>=1&&s<10?r.ccBits[0]:s<27?r.ccBits[1]:r.ccBits[2]},e.getBestModeForData=function(r){return i.testNumeric(r)?e.NUMERIC:i.testAlphanumeric(r)?e.ALPHANUMERIC:i.testKanji(r)?e.KANJI:e.BYTE},e.toString=function(r){if(r&&r.id)return r.id;throw new Error("Invalid mode")},e.isValid=function(r){return r&&r.bit&&r.ccBits};function o(n){if(typeof n!="string")throw new Error("Param is not a string");switch(n.toLowerCase()){case"numeric":return e.NUMERIC;case"alphanumeric":return e.ALPHANUMERIC;case"kanji":return e.KANJI;case"byte":return e.BYTE;default:throw new Error("Unknown mode: "+n)}}e.from=function(r,s){if(e.isValid(r))return r;try{return o(r)}catch(a){return s}}})(_);(function(e){const t=N,i=X,o=W,n=_,r=ht,s=7973,a=t.getBCHDigit(s);function u(m,f,w){for(let y=1;y<=40;y++)if(f<=e.getCapacity(y,w,m))return y}function c(m,f){return n.getCharCountIndicator(m,f)+4}function l(m,f){let w=0;return m.forEach(function(y){const A=c(y.mode,f);w+=A+y.getBitsLength()}),w}function p(m,f){for(let w=1;w<=40;w++)if(l(m,w)<=e.getCapacity(w,f,n.MIXED))return w}e.from=function(f,w){return r.isValid(f)?parseInt(f,10):w},e.getCapacity=function(f,w,y){if(!r.isValid(f))throw new Error("Invalid QR Code version");typeof y=="undefined"&&(y=n.BYTE);const A=t.getSymbolTotalCodewords(f),h=i.getTotalCodewordsCount(f,w),C=(A-h)*8;if(y===n.MIXED)return C;const g=C-c(y,f);switch(y){case n.NUMERIC:return Math.floor(g/10*3);case n.ALPHANUMERIC:return Math.floor(g/11*2);case n.KANJI:return Math.floor(g/13);case n.BYTE:default:return Math.floor(g/8)}},e.getBestVersionForData=function(f,w){let y;const A=o.from(w,o.M);if(Array.isArray(f)){if(f.length>1)return p(f,A);if(f.length===0)return 1;y=f[0]}else y=f;return u(y.mode,y.getLength(),A)},e.getEncodedBits=function(f){if(!r.isValid(f)||f<7)throw new Error("Invalid QR Code version");let w=f<<12;for(;t.getBCHDigit(w)-a>=0;)w^=s<<t.getBCHDigit(w)-a;return f<<12|w}})(_t);var Ut={};const at=N,kt=1335,ue=21522,pt=at.getBCHDigit(kt);Ut.getEncodedBits=function(t,i){const o=t.bit<<3|i;let n=o<<10;for(;at.getBCHDigit(n)-pt>=0;)n^=kt<<at.getBCHDigit(n)-pt;return(o<<10|n)^ue};var Ft={};const ae=_;function D(e){this.mode=ae.NUMERIC,this.data=e.toString()}D.getBitsLength=function(t){return 10*Math.floor(t/3)+(t%3?t%3*3+1:0)};D.prototype.getLength=function(){return this.data.length};D.prototype.getBitsLength=function(){return D.getBitsLength(this.data.length)};D.prototype.write=function(t){let i,o,n;for(i=0;i+3<=this.data.length;i+=3)o=this.data.substr(i,3),n=parseInt(o,10),t.put(n,10);const r=this.data.length-i;r>0&&(o=this.data.substr(i),n=parseInt(o,10),t.put(n,r*3+1))};var ce=D;const le=_,ot=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function U(e){this.mode=le.ALPHANUMERIC,this.data=e}U.getBitsLength=function(t){return 11*Math.floor(t/2)+6*(t%2)};U.prototype.getLength=function(){return this.data.length};U.prototype.getBitsLength=function(){return U.getBitsLength(this.data.length)};U.prototype.write=function(t){let i;for(i=0;i+2<=this.data.length;i+=2){let o=ot.indexOf(this.data[i])*45;o+=ot.indexOf(this.data[i+1]),t.put(o,11)}this.data.length%2&&t.put(ot.indexOf(this.data[i]),6)};var fe=U;const de=_;function k(e){this.mode=de.BYTE,typeof e=="string"?this.data=new TextEncoder().encode(e):this.data=new Uint8Array(e)}k.getBitsLength=function(t){return t*8};k.prototype.getLength=function(){return this.data.length};k.prototype.getBitsLength=function(){return k.getBitsLength(this.data.length)};k.prototype.write=function(e){for(let t=0,i=this.data.length;t<i;t++)e.put(this.data[t],8)};var ge=k;const he=_,me=N;function F(e){this.mode=he.KANJI,this.data=e}F.getBitsLength=function(t){return t*13};F.prototype.getLength=function(){return this.data.length};F.prototype.getBitsLength=function(){return F.getBitsLength(this.data.length)};F.prototype.write=function(e){let t;for(t=0;t<this.data.length;t++){let i=me.toSJIS(this.data[t]);if(i>=33088&&i<=40956)i-=33088;else if(i>=57408&&i<=60351)i-=49472;else throw new Error("Invalid SJIS character: "+this.data[t]+`
Make sure your charset is UTF-8`);i=(i>>>8&255)*192+(i&255),e.put(i,13)}};var we=F,vt={exports:{}};(function(e){var t={single_source_shortest_paths:function(i,o,n){var r={},s={};s[o]=0;var a=t.PriorityQueue.make();a.push(o,0);for(var u,c,l,p,m,f,w,y,A;!a.empty();){u=a.pop(),c=u.value,p=u.cost,m=i[c]||{};for(l in m)m.hasOwnProperty(l)&&(f=m[l],w=p+f,y=s[l],A=typeof s[l]=="undefined",(A||y>w)&&(s[l]=w,a.push(l,w),r[l]=c))}if(typeof n!="undefined"&&typeof s[n]=="undefined"){var h=["Could not find a path from ",o," to ",n,"."].join("");throw new Error(h)}return r},extract_shortest_path_from_predecessor_list:function(i,o){for(var n=[],r=o;r;)n.push(r),i[r],r=i[r];return n.reverse(),n},find_path:function(i,o,n){var r=t.single_source_shortest_paths(i,o,n);return t.extract_shortest_path_from_predecessor_list(r,n)},PriorityQueue:{make:function(i){var o=t.PriorityQueue,n={},r;i=i||{};for(r in o)o.hasOwnProperty(r)&&(n[r]=o[r]);return n.queue=[],n.sorter=i.sorter||o.default_sorter,n},default_sorter:function(i,o){return i.cost-o.cost},push:function(i,o){var n={value:i,cost:o};this.queue.push(n),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return this.queue.length===0}}};e.exports=t})(vt);var ye=vt.exports;(function(e){const t=_,i=ce,o=fe,n=ge,r=we,s=P,a=N,u=ye;function c(h){return unescape(encodeURIComponent(h)).length}function l(h,C,g){const d=[];let E;for(;(E=h.exec(g))!==null;)d.push({data:E[0],index:E.index,mode:C,length:E[0].length});return d}function p(h){const C=l(s.NUMERIC,t.NUMERIC,h),g=l(s.ALPHANUMERIC,t.ALPHANUMERIC,h);let d,E;return a.isKanjiModeEnabled()?(d=l(s.BYTE,t.BYTE,h),E=l(s.KANJI,t.KANJI,h)):(d=l(s.BYTE_KANJI,t.BYTE,h),E=[]),C.concat(g,d,E).sort(function(T,I){return T.index-I.index}).map(function(T){return{data:T.data,mode:T.mode,length:T.length}})}function m(h,C){switch(C){case t.NUMERIC:return i.getBitsLength(h);case t.ALPHANUMERIC:return o.getBitsLength(h);case t.KANJI:return r.getBitsLength(h);case t.BYTE:return n.getBitsLength(h)}}function f(h){return h.reduce(function(C,g){const d=C.length-1>=0?C[C.length-1]:null;return d&&d.mode===g.mode?(C[C.length-1].data+=g.data,C):(C.push(g),C)},[])}function w(h){const C=[];for(let g=0;g<h.length;g++){const d=h[g];switch(d.mode){case t.NUMERIC:C.push([d,{data:d.data,mode:t.ALPHANUMERIC,length:d.length},{data:d.data,mode:t.BYTE,length:d.length}]);break;case t.ALPHANUMERIC:C.push([d,{data:d.data,mode:t.BYTE,length:d.length}]);break;case t.KANJI:C.push([d,{data:d.data,mode:t.BYTE,length:c(d.data)}]);break;case t.BYTE:C.push([{data:d.data,mode:t.BYTE,length:c(d.data)}])}}return C}function y(h,C){const g={},d={start:{}};let E=["start"];for(let B=0;B<h.length;B++){const T=h[B],I=[];for(let S=0;S<T.length;S++){const b=T[S],v=""+B+S;I.push(v),g[v]={node:b,lastCount:0},d[v]={};for(let tt=0;tt<E.length;tt++){const M=E[tt];g[M]&&g[M].node.mode===b.mode?(d[M][v]=m(g[M].lastCount+b.length,b.mode)-m(g[M].lastCount,b.mode),g[M].lastCount+=b.length):(g[M]&&(g[M].lastCount=b.length),d[M][v]=m(b.length,b.mode)+4+t.getCharCountIndicator(b.mode,C))}}E=I}for(let B=0;B<E.length;B++)d[E[B]].end=0;return{map:d,table:g}}function A(h,C){let g;const d=t.getBestModeForData(h);if(g=t.from(C,d),g!==t.BYTE&&g.bit<d.bit)throw new Error('"'+h+'" cannot be encoded with mode '+t.toString(g)+`.
 Suggested mode is: `+t.toString(d));switch(g===t.KANJI&&!a.isKanjiModeEnabled()&&(g=t.BYTE),g){case t.NUMERIC:return new i(h);case t.ALPHANUMERIC:return new o(h);case t.KANJI:return new r(h);case t.BYTE:return new n(h)}}e.fromArray=function(C){return C.reduce(function(g,d){return typeof d=="string"?g.push(A(d,null)):d.data&&g.push(A(d.data,d.mode)),g},[])},e.fromString=function(C,g){const d=p(C,a.isKanjiModeEnabled()),E=w(d),B=y(E,g),T=u.find_path(B.map,"start","end"),I=[];for(let S=1;S<T.length-1;S++)I.push(B.table[T[S]].node);return e.fromArray(f(I))},e.rawSplit=function(C){return e.fromArray(p(C,a.isKanjiModeEnabled()))}})(Ft);const x=N,rt=W,Ce=Zt,Ee=xt,pe=Pt,Be=Mt,ct=St,lt=X,Te=ee,Q=_t,Ae=Ut,Ne=_,it=Ft;function Ie(e,t){const i=e.size,o=Be.getPositions(t);for(let n=0;n<o.length;n++){const r=o[n][0],s=o[n][1];for(let a=-1;a<=7;a++)if(!(r+a<=-1||i<=r+a))for(let u=-1;u<=7;u++)s+u<=-1||i<=s+u||(a>=0&&a<=6&&(u===0||u===6)||u>=0&&u<=6&&(a===0||a===6)||a>=2&&a<=4&&u>=2&&u<=4?e.set(r+a,s+u,!0,!0):e.set(r+a,s+u,!1,!0))}}function be(e){const t=e.size;for(let i=8;i<t-8;i++){const o=i%2===0;e.set(i,6,o,!0),e.set(6,i,o,!0)}}function Pe(e,t){const i=pe.getPositions(t);for(let o=0;o<i.length;o++){const n=i[o][0],r=i[o][1];for(let s=-2;s<=2;s++)for(let a=-2;a<=2;a++)s===-2||s===2||a===-2||a===2||s===0&&a===0?e.set(n+s,r+a,!0,!0):e.set(n+s,r+a,!1,!0)}}function Me(e,t){const i=e.size,o=Q.getEncodedBits(t);let n,r,s;for(let a=0;a<18;a++)n=Math.floor(a/3),r=a%3+i-8-3,s=(o>>a&1)===1,e.set(n,r,s,!0),e.set(r,n,s,!0)}function st(e,t,i){const o=e.size,n=Ae.getEncodedBits(t,i);let r,s;for(r=0;r<15;r++)s=(n>>r&1)===1,r<6?e.set(r,8,s,!0):r<8?e.set(r+1,8,s,!0):e.set(o-15+r,8,s,!0),r<8?e.set(8,o-r-1,s,!0):r<9?e.set(8,15-r-1+1,s,!0):e.set(8,15-r-1,s,!0);e.set(o-8,8,1,!0)}function Se(e,t){const i=e.size;let o=-1,n=i-1,r=7,s=0;for(let a=i-1;a>0;a-=2)for(a===6&&a--;;){for(let u=0;u<2;u++)if(!e.isReserved(n,a-u)){let c=!1;s<t.length&&(c=(t[s]>>>r&1)===1),e.set(n,a-u,c),r--,r===-1&&(s++,r=7)}if(n+=o,n<0||i<=n){n-=o,o=-o;break}}}function Re(e,t,i){const o=new Ce;i.forEach(function(u){o.put(u.mode.bit,4),o.put(u.getLength(),Ne.getCharCountIndicator(u.mode,e)),u.write(o)});const n=x.getSymbolTotalCodewords(e),r=lt.getTotalCodewordsCount(e,t),s=(n-r)*8;for(o.getLengthInBits()+4<=s&&o.put(0,4);o.getLengthInBits()%8!==0;)o.putBit(0);const a=(s-o.getLengthInBits())/8;for(let u=0;u<a;u++)o.put(u%2?17:236,8);return Le(o,e,t)}function Le(e,t,i){const o=x.getSymbolTotalCodewords(t),n=lt.getTotalCodewordsCount(t,i),r=o-n,s=lt.getBlocksCount(t,i),a=o%s,u=s-a,c=Math.floor(o/s),l=Math.floor(r/s),p=l+1,m=c-l,f=new Te(m);let w=0;const y=new Array(s),A=new Array(s);let h=0;const C=new Uint8Array(e.buffer);for(let T=0;T<s;T++){const I=T<u?l:p;y[T]=C.slice(w,w+I),A[T]=f.encode(y[T]),w+=I,h=Math.max(h,I)}const g=new Uint8Array(o);let d=0,E,B;for(E=0;E<h;E++)for(B=0;B<s;B++)E<y[B].length&&(g[d++]=y[B][E]);for(E=0;E<m;E++)for(B=0;B<s;B++)g[d++]=A[B][E];return g}function _e(e,t,i,o){let n;if(Array.isArray(e))n=it.fromArray(e);else if(typeof e=="string"){let c=t;if(!c){const l=it.rawSplit(e);c=Q.getBestVersionForData(l,i)}n=it.fromString(e,c||40)}else throw new Error("Invalid data");const r=Q.getBestVersionForData(n,i);if(!r)throw new Error("The amount of data is too big to be stored in a QR Code");if(!t)t=r;else if(t<r)throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+r+`.
`);const s=Re(t,i,n),a=x.getSymbolSize(t),u=new Ee(a);return Ie(u,t),be(u),Pe(u,t),st(u,i,0),t>=7&&Me(u,t),Se(u,s),isNaN(o)&&(o=ct.getBestMask(u,st.bind(null,u,i))),ct.applyMask(o,u),st(u,i,o),{modules:u,version:t,errorCorrectionLevel:i,maskPattern:o,segments:n}}It.create=function(t,i){if(typeof t=="undefined"||t==="")throw new Error("No input text");let o=rt.M,n,r;return typeof i!="undefined"&&(o=rt.from(i.errorCorrectionLevel,rt.M),n=Q.from(i.version),r=ct.from(i.maskPattern),i.toSJISFunc&&x.setToSJISFunction(i.toSJISFunc)),_e(t,n,o,r)};var zt={},mt={};(function(e){function t(i){if(typeof i=="number"&&(i=i.toString()),typeof i!="string")throw new Error("Color should be defined as hex string");let o=i.slice().replace("#","").split("");if(o.length<3||o.length===5||o.length>8)throw new Error("Invalid hex color: "+i);(o.length===3||o.length===4)&&(o=Array.prototype.concat.apply([],o.map(function(r){return[r,r]}))),o.length===6&&o.push("F","F");const n=parseInt(o.join(""),16);return{r:n>>24&255,g:n>>16&255,b:n>>8&255,a:n&255,hex:"#"+o.slice(0,6).join("")}}e.getOptions=function(o){o||(o={}),o.color||(o.color={});const n=typeof o.margin=="undefined"||o.margin===null||o.margin<0?4:o.margin,r=o.width&&o.width>=21?o.width:void 0,s=o.scale||4;return{width:r,scale:r?4:s,margin:n,color:{dark:t(o.color.dark||"#000000ff"),light:t(o.color.light||"#ffffffff")},type:o.type,rendererOpts:o.rendererOpts||{}}},e.getScale=function(o,n){return n.width&&n.width>=o+n.margin*2?n.width/(o+n.margin*2):n.scale},e.getImageWidth=function(o,n){const r=e.getScale(o,n);return Math.floor((o+n.margin*2)*r)},e.qrToImageData=function(o,n,r){const s=n.modules.size,a=n.modules.data,u=e.getScale(s,r),c=Math.floor((s+r.margin*2)*u),l=r.margin*u,p=[r.color.light,r.color.dark];for(let m=0;m<c;m++)for(let f=0;f<c;f++){let w=(m*c+f)*4,y=r.color.light;if(m>=l&&f>=l&&m<c-l&&f<c-l){const A=Math.floor((m-l)/u),h=Math.floor((f-l)/u);y=p[a[A*s+h]?1:0]}o[w++]=y.r,o[w++]=y.g,o[w++]=y.b,o[w]=y.a}}})(mt);(function(e){const t=mt;function i(n,r,s){n.clearRect(0,0,r.width,r.height),r.style||(r.style={}),r.height=s,r.width=s,r.style.height=s+"px",r.style.width=s+"px"}function o(){try{return document.createElement("canvas")}catch(n){throw new Error("You need to specify a canvas element")}}e.render=function(r,s,a){let u=a,c=s;typeof u=="undefined"&&(!s||!s.getContext)&&(u=s,s=void 0),s||(c=o()),u=t.getOptions(u);const l=t.getImageWidth(r.modules.size,u),p=c.getContext("2d"),m=p.createImageData(l,l);return t.qrToImageData(m.data,r,u),i(p,c,l),p.putImageData(m,0,0),c},e.renderToDataURL=function(r,s,a){let u=a;typeof u=="undefined"&&(!s||!s.getContext)&&(u=s,s=void 0),u||(u={});const c=e.render(r,s,u),l=u.type||"image/png",p=u.rendererOpts||{};return c.toDataURL(l,p.quality)}})(zt);var Vt={};const De=mt;function Bt(e,t){const i=e.a/255,o=t+'="'+e.hex+'"';return i<1?o+" "+t+'-opacity="'+i.toFixed(2).slice(1)+'"':o}function ut(e,t,i){let o=e+t;return typeof i!="undefined"&&(o+=" "+i),o}function Ue(e,t,i){let o="",n=0,r=!1,s=0;for(let a=0;a<e.length;a++){const u=Math.floor(a%t),c=Math.floor(a/t);!u&&!r&&(r=!0),e[a]?(s++,a>0&&u>0&&e[a-1]||(o+=r?ut("M",u+i,.5+c+i):ut("m",n,0),n=0,r=!1),u+1<t&&e[a+1]||(o+=ut("h",s),s=0)):n++}return o}Vt.render=function(t,i,o){const n=De.getOptions(i),r=t.modules.size,s=t.modules.data,a=r+n.margin*2,u=n.color.light.a?"<path "+Bt(n.color.light,"fill")+' d="M0 0h'+a+"v"+a+'H0z"/>':"",c="<path "+Bt(n.color.dark,"stroke")+' d="'+Ue(s,r,n.margin)+'"/>',l='viewBox="0 0 '+a+" "+a+'"',m='<svg xmlns="http://www.w3.org/2000/svg" '+(n.width?'width="'+n.width+'" height="'+n.width+'" ':"")+l+' shape-rendering="crispEdges">'+u+c+`</svg>
`;return typeof o=="function"&&o(null,m),m};const ke=Wt,ft=It,Ht=zt,Fe=Vt;function wt(e,t,i,o,n){const r=[].slice.call(arguments,1),s=r.length,a=typeof r[s-1]=="function";if(!a&&!ke())throw new Error("Callback required as last argument");if(a){if(s<2)throw new Error("Too few arguments provided");s===2?(n=i,i=t,t=o=void 0):s===3&&(t.getContext&&typeof n=="undefined"?(n=o,o=void 0):(n=o,o=i,i=t,t=void 0))}else{if(s<1)throw new Error("Too few arguments provided");return s===1?(i=t,t=o=void 0):s===2&&!t.getContext&&(o=i,i=t,t=void 0),new Promise(function(u,c){try{const l=ft.create(i,o);u(e(l,t,o))}catch(l){c(l)}})}try{const u=ft.create(i,o);n(null,e(u,t,o))}catch(u){n(u)}}H.create=ft.create;H.toCanvas=wt.bind(null,Ht.render);H.toDataURL=wt.bind(null,Ht.renderToDataURL);H.toString=wt.bind(null,function(e,t,i){return Fe.render(e,i)});function ve(e,t){const i=Yt(e),o=Tt("");return qt(i,n=>yt(this,null,function*(){i.value&&jt&&(o.value=yield H.toDataURL(n,t))}),{immediate:!0}),o}const ze={class:"text-muted-foreground"},Ve={class:"flex-col-center mt-6"},He=["src"],Ke={class:"text-muted-foreground mt-4 text-sm"},$e=At({name:"AuthenticationQrCodeLogin",__name:"qrcode-login",props:{loading:{type:Boolean,default:!1},loginPath:{default:"/auth/login"},title:{default:""},subTitle:{default:""},submitButtonText:{default:""},description:{default:""}},setup(e){const t=e,i=Kt(),o=Tt("https://vben.vvbin.cn"),n=ve(o,{errorCorrectionLevel:"H",margin:4});function r(){i.push(t.loginPath)}return(s,a)=>(Nt(),Gt("div",null,[Ct($t,null,{desc:et(()=>[J("span",ze,[nt(s.$slots,"subTitle",{},()=>[O(Y(s.subTitle||R($)("authentication.qrcodeSubtitle")),1)])])]),default:et(()=>[nt(s.$slots,"title",{},()=>[O(Y(s.title||R($)("authentication.welcomeBack"))+" 📱 ",1)])]),_:3}),J("div",Ve,[J("img",{src:R(n),alt:"qrcode",class:"w-1/2"},null,8,He),J("p",Ke,[nt(s.$slots,"description",{},()=>[O(Y(s.description||R($)("authentication.qrcodePrompt")),1)])])]),Ct(R(Jt),{class:"mt-4 w-full",variant:"outline",onClick:a[0]||(a[0]=u=>r())},{default:et(()=>[O(Y(R($)("common.back")),1)]),_:1})]))}}),qe=At({name:"QrCodeLogin",__name:"qrcode-login",setup(e){return(t,i)=>(Nt(),Qt(R($e),{"login-path":R(Ot)},null,8,["login-path"]))}});export{qe as default};
