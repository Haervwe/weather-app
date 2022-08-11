/*! For license information please see bundle.js.LICENSE.txt */
(()=>{"use strict";var e={192:(e,t,r)=>{r.d(t,{Z:()=>m});var n=r(81),a=r.n(n),i=r(645),o=r.n(i),c=r(667),d=r.n(c),s=new URL(r(739),r.b),p=o()(a()),l=d()(s);p.push([e.id,'@font-face{font-family:"font";src:url('+l+');font-weight:1500;font-style:bold}*{user-select:none;font-family:"font";box-sizing:border-box}body{margin:0%;padding:0px;text-shadow:0px 0px 3px rgba(255,255,255,0.493)}#main{display:grid;background-repeat:no-repeat;background-size:cover;width:100%;margin:0%;padding:0px;grid-template-rows:minmax(900px, 95vh) minmax(25px, 5vh)}#main #weatherWrapper{display:grid;height:100%;width:100%;max-width:100%;grid-template-rows:1fr 10fr 2fr 13fr;grid-template-columns:1fr;justify-items:center;align-content:center}#main #weatherWrapper h1{margin:5px}#main #weatherWrapper #currentWeather .weatherCard{display:grid;gap:10px;justify-items:center;align-items:center;background-color:rgba(0,0,0,0.2);border-radius:15px;grid-template-columns:minmax(400px, 30vw);box-shadow:0px 0px 5px black;margin:10px;padding:10px;opacity:0;transition:opacity 500ms ease-in-out}#main #weatherWrapper #currentWeather .weatherCard #titleWrapper{display:grid;justify-items:center;align-items:center;background-color:rgba(247,244,244,0.2);box-shadow:0px 0px 2px black;border-radius:15px;width:100%;padding:8px}#main #weatherWrapper #currentWeather .weatherCard #currentWeatherWrapper{display:grid;width:100%;justify-items:center;align-content:center;grid-template-columns:1fr 1fr;grid-template-rows:1fr 1fr 1fr;align-items:center;background-color:rgba(247,244,244,0.2);box-shadow:0px 0px 2px black;border-radius:15px;padding:8px;gap:8px}#main #weatherWrapper #currentWeather .weatherCard h3{margin-top:2px;margin-bottom:2px}#main #weatherWrapper #currentWeather .weatherCard p{margin-top:2px;margin-bottom:2px}#main #weatherWrapper #currentWeather .after{opacity:1}#main #weatherWrapper #selectCity{display:grid;grid-template-columns:repeat(2, minmax(150px, 20vw));grid-template-rows:3fr 1fr;gap:4px;padding:4px;justify-items:center;align-items:center}#main #weatherWrapper #selectCity #cityContainer{display:grid;grid-column:1/3;grid-template-rows:1fr 2fr;justify-items:center;align-items:center;width:100%}#main #weatherWrapper #selectCity #cityContainer #cityInt{width:100%;height:70%;background-color:rgba(0,0,0,0.05);border-radius:15px;border:none;box-shadow:0px 0px 3px black;text-align:center}#main #weatherWrapper #selectCity #cityContainer #cityInt.error{box-shadow:0px 0px 3px red}#main #weatherWrapper #selectCity .formBtn{width:minmax(110px, 50%);background-color:rgba(0,0,0,0.2);transition:all 200ms ease-in-out;box-shadow:0px 0px 5px black;border-radius:5px;border:none}#main #weatherWrapper #selectCity .formBtn.after{background-color:rgba(247,244,244,0.05);box-shadow:0px 0px 10px black}#main #weatherWrapper #forecastWrapper{display:grid;grid-template-columns:minmax(0, 1fr);grid-template-rows:minmax(0, 1fr);align-items:center;width:100%;overflow-x:auto;padding-top:15px;padding-bottom:15px}#main #weatherWrapper #forecastWrapper #loadingForecast{margin:auto}#main #weatherWrapper #forecastWrapper #forecast{display:grid;margin-left:auto;margin-right:auto;padding:5px;overflow-y:visible;min-width:1410px;grid-template-columns:repeat(auto-fit, minmax(220px, 1fr));grid-template-rows:1fr;justify-items:center;align-items:center;gap:15px}#main #weatherWrapper #forecastWrapper #forecast .weatherForecastCard{display:grid;align-items:center;justify-items:center;width:220px;grid-template-columns:2fr 3fr;grid-template-rows:1fr 3fr 1fr 6fr;padding:10px;opacity:0;background-color:rgba(0,0,0,0.2);border-radius:15px;box-shadow:0px 0px 5px black;transition:opacity 500ms ease-in-out}#main #weatherWrapper #forecastWrapper #forecast .weatherForecastCard .day{display:grid;grid-column:1/3;grid-row:1/2;margin:0px;justify-content:center;align-content:center;background-color:rgba(247,244,244,0.2);box-shadow:0px 0px 2px black;border-radius:5px;padding:5px;width:50%;justify-items:center}#main #weatherWrapper #forecastWrapper #forecast .weatherForecastCard .weatherIcon{grid-column:1/3;grid-row:2/3}#main #weatherWrapper #forecastWrapper #forecast .weatherForecastCard .maxMin{grid-column:1/3;grid-row:3/4;display:grid;grid-template-columns:minmax(0, 1fr) minmax(0, 1fr);margin:0px;gap:5px}#main #weatherWrapper #forecastWrapper #forecast .weatherForecastCard .maxMin p{margin:2px}#main #weatherWrapper #forecastWrapper #forecast .weatherForecastCard .forecastContainer{display:grid;grid-template-columns:minmax(0, 1fr);grid-template-rows:repeat(8, minmax(0, 1fr));min-height:180px;padding-left:5px;padding-right:5px;align-items:center;width:100%}#main #weatherWrapper #forecastWrapper #forecast .weatherForecastCard .forecastContainer .hourContainer{display:grid;transition:background-color, box-shadow 400ms ease-in-out;justify-items:center;border-radius:5px}#main #weatherWrapper #forecastWrapper #forecast .weatherForecastCard .forecastContainer .hourContainer p{margin:2px}#main #weatherWrapper #forecastWrapper #forecast .weatherForecastCard .forecastContainer .hourContainer:hover{background-color:rgba(247,244,244,0.05);box-shadow:0px 0px 1px black}#main #weatherWrapper #forecastWrapper #forecast .weatherForecastCard .forecastContainer .active{background-color:rgba(247,244,244,0.2);box-shadow:0px 0px 2px black}#main #weatherWrapper #forecastWrapper #forecast .weatherForecastCard .forecastContainer .active:hover{background-color:rgba(247,244,244,0.2);box-shadow:0px 0px 2px black}#main #weatherWrapper #forecastWrapper #forecast .weatherForecastCard .data{display:grid;grid-template-columns:minmax(0, 1fr);grid-template-rows:minmax(0, 1fr);height:100%;width:100%;justify-content:center;align-items:center}#main #weatherWrapper #forecastWrapper #forecast .weatherForecastCard .data .dataWrap{display:grid;grid-row:1/2;grid-column:1/2;justify-content:center;align-items:center;padding:5px;height:180px;width:100%;grid-template-rows:repeat(3, minmax(0, 1fr));transition:opacity 600ms ease-in-out;opacity:0;border-radius:5px;background-color:rgba(247,244,244,0.2);box-shadow:0px 0px 2px black}#main #weatherWrapper #forecastWrapper #forecast .weatherForecastCard .data .dataWrap p{text-align:center;margin:2px}#main #weatherWrapper #forecastWrapper #forecast .weatherForecastCard .data .active{display:grid;grid-row:1/2;grid-column:1/2;width:100%;background-color:rgba(247,244,244,0.2);opacity:1}#main #weatherWrapper #forecastWrapper #forecast .after{opacity:1}#main #footer{display:flex;align-items:center;justify-content:center;background:linear-gradient(0deg, rgba(0,0,0,0.5) 0%, rgba(168,168,168,0.3) 50%, rgba(255,255,255,0) 100%)}\n',""]);const m=p},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r="",n=void 0!==t[5];return t[4]&&(r+="@supports (".concat(t[4],") {")),t[2]&&(r+="@media ".concat(t[2]," {")),n&&(r+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),r+=e(t),n&&(r+="}"),t[2]&&(r+="}"),t[4]&&(r+="}"),r})).join("")},t.i=function(e,r,n,a,i){"string"==typeof e&&(e=[[null,e,void 0]]);var o={};if(n)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(o[d]=!0)}for(var s=0;s<e.length;s++){var p=[].concat(e[s]);n&&o[p[0]]||(void 0!==i&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=i),r&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=r):p[2]=r),a&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=a):p[4]="".concat(a)),t.push(p))}},t}},667:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function r(e){for(var r=-1,n=0;n<t.length;n++)if(t[n].identifier===e){r=n;break}return r}function n(e,n){for(var i={},o=[],c=0;c<e.length;c++){var d=e[c],s=n.base?d[0]+n.base:d[0],p=i[s]||0,l="".concat(s," ").concat(p);i[s]=p+1;var m=r(l),u={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==m)t[m].references++,t[m].updater(u);else{var h=a(u,n);n.byIndex=c,t.splice(c,0,{identifier:l,updater:h,references:1})}o.push(l)}return o}function a(e,t){var r=t.domAPI(t);return r.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;r.update(e=t)}else r.remove()}}e.exports=function(e,a){var i=n(e=e||[],a=a||{});return function(e){e=e||[];for(var o=0;o<i.length;o++){var c=r(i[o]);t[c].references--}for(var d=n(e,a),s=0;s<i.length;s++){var p=r(i[s]);0===t[p].references&&(t[p].updater(),t.splice(p,1))}i=d}}},569:e=>{var t={};e.exports=function(e,r){var n=function(e){if(void 0===t[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}(e);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(r)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,r)=>{e.exports=function(e){var t=r.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(r){!function(e,t,r){var n="";r.supports&&(n+="@supports (".concat(r.supports,") {")),r.media&&(n+="@media ".concat(r.media," {"));var a=void 0!==r.layer;a&&(n+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),n+=r.css,a&&(n+="}"),r.media&&(n+="}"),r.supports&&(n+="}");var i=r.sourceMap;i&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(n,e,t.options)}(t,e,r)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},739:(e,t,r)=>{e.exports=r.p+"ff02e04d38211142db60.ttf"}},t={};function r(n){var a=t[n];if(void 0!==a)return a.exports;var i=t[n]={id:n,exports:{}};return e[n](i,i.exports,r),i.exports}r.m=e,r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;r.g.importScripts&&(e=r.g.location+"");var t=r.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=e})(),r.b=document.baseURI||self.location.href,r.nc=void 0,(()=>{var e=r(379),t=r.n(e),n=r(795),a=r.n(n),i=r(569),o=r.n(i),c=r(565),d=r.n(c),s=r(216),p=r.n(s),l=r(589),m=r.n(l),u=r(192),h={};h.styleTagTransform=m(),h.setAttributes=d(),h.insert=o().bind(null,"head"),h.domAPI=a(),h.insertStyleElement=p(),t()(u.Z,h),u.Z&&u.Z.locals&&u.Z.locals;var f,g,x={},w={},y="en",v={MMMM:["January","February","March","April","May","June","July","August","September","October","November","December"],MMM:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dddd:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],ddd:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dd:["Su","Mo","Tu","We","Th","Fr","Sa"],A:["AM","PM"]},b={YYYY:function(e){return("000"+e.getFullYear()).slice(-4)},YY:function(e){return("0"+e.getFullYear()).slice(-2)},Y:function(e){return""+e.getFullYear()},MMMM:function(e){return this.res.MMMM[e.getMonth()]},MMM:function(e){return this.res.MMM[e.getMonth()]},MM:function(e){return("0"+(e.getMonth()+1)).slice(-2)},M:function(e){return""+(e.getMonth()+1)},DD:function(e){return("0"+e.getDate()).slice(-2)},D:function(e){return""+e.getDate()},HH:function(e){return("0"+e.getHours()).slice(-2)},H:function(e){return""+e.getHours()},A:function(e){return this.res.A[e.getHours()>11|0]},hh:function(e){return("0"+(e.getHours()%12||12)).slice(-2)},h:function(e){return""+(e.getHours()%12||12)},mm:function(e){return("0"+e.getMinutes()).slice(-2)},m:function(e){return""+e.getMinutes()},ss:function(e){return("0"+e.getSeconds()).slice(-2)},s:function(e){return""+e.getSeconds()},SSS:function(e){return("00"+e.getMilliseconds()).slice(-3)},SS:function(e){return("0"+(e.getMilliseconds()/10|0)).slice(-2)},S:function(e){return""+(e.getMilliseconds()/100|0)},dddd:function(e){return this.res.dddd[e.getDay()]},ddd:function(e){return this.res.ddd[e.getDay()]},dd:function(e){return this.res.dd[e.getDay()]},Z:function(e){var t=e.getTimezoneOffset()/.6|0;return(t>0?"-":"+")+("000"+Math.abs(t-(t%100*.4|0))).slice(-4)},ZZ:function(e){var t=e.getTimezoneOffset(),r=Math.abs(t);return(t>0?"-":"+")+("0"+(r/60|0)).slice(-2)+":"+("0"+r%60).slice(-2)},post:function(e){return e},res:v},C={YYYY:function(e){return this.exec(/^\d{4}/,e)},Y:function(e){return this.exec(/^\d{1,4}/,e)},MMMM:function(e){var t=this.find(this.res.MMMM,e);return t.value++,t},MMM:function(e){var t=this.find(this.res.MMM,e);return t.value++,t},MM:function(e){return this.exec(/^\d\d/,e)},M:function(e){return this.exec(/^\d\d?/,e)},DD:function(e){return this.exec(/^\d\d/,e)},D:function(e){return this.exec(/^\d\d?/,e)},HH:function(e){return this.exec(/^\d\d/,e)},H:function(e){return this.exec(/^\d\d?/,e)},A:function(e){return this.find(this.res.A,e)},hh:function(e){return this.exec(/^\d\d/,e)},h:function(e){return this.exec(/^\d\d?/,e)},mm:function(e){return this.exec(/^\d\d/,e)},m:function(e){return this.exec(/^\d\d?/,e)},ss:function(e){return this.exec(/^\d\d/,e)},s:function(e){return this.exec(/^\d\d?/,e)},SSS:function(e){return this.exec(/^\d{1,3}/,e)},SS:function(e){var t=this.exec(/^\d\d?/,e);return t.value*=10,t},S:function(e){var t=this.exec(/^\d/,e);return t.value*=100,t},Z:function(e){var t=this.exec(/^[\+-]\d{2}[0-5]\d/,e);return t.value=-60*(t.value/100|0)-t.value%100,t},ZZ:function(e){var t=/^([\+-])(\d{2}):([0-5]\d)/.exec(e)||["","","",""];return{value:0-(60*(t[1]+t[2]|0)+(t[1]+t[3]|0)),length:t[0].length}},h12:function(e,t){return(12===e?0:e)+12*t},exec:function(e,t){var r=(e.exec(t)||[""])[0];return{value:0|r,length:r.length}},find:function(e,t){for(var r,n=-1,a=0,i=0,o=e.length;i<o;i++)r=e[i],!t.indexOf(r)&&r.length>a&&(n=i,a=r.length);return{value:n,length:a}},pre:function(e){return e},res:v},M=function(e,t,r,n){var a,i={};for(a in e)i[a]=e[a];for(a in t||{})!!r^!!i[a]||(i[a]=t[a]);return n&&(i.res=n),i},W={_formatter:b,_parser:C,compile:function(e){for(var t,r=/\[([^\[\]]|\[[^\[\]]*])*]|([A-Za-z])\2+|\.{3}|./g,n=[e];t=r.exec(e);)n[n.length]=t[0];return n},format:function(e,t,r){var n=this||g,a="string"==typeof t?n.compile(t):t,i=e.getTimezoneOffset(),o=n.addMinutes(e,r?i:0),c=n._formatter,d="";o.getTimezoneOffset=function(){return r?0:i};for(var s,p=1,l=a.length;p<l;p++)d+=c[s=a[p]]?c.post(c[s](o,a[0])):s.replace(/\[(.*)]/,"$1");return d},preparse:function(e,t){var r=this||g,n="string"==typeof t?r.compile(t):t,a={Y:1970,M:1,D:1,H:0,A:0,h:0,m:0,s:0,S:0,Z:0,_index:0,_length:0,_match:0},i=/\[(.*)]/,o=r._parser,c=0;e=o.pre(e);for(var d,s,p=1,l=n.length;p<l;p++)if(o[d=n[p]]){if(!(s=o[d](e.slice(c),n[0])).length)break;c+=s.length,a[s.token||d.charAt(0)]=s.value,a._match++}else if(d===e.charAt(c)||" "===d)c++;else{if(!i.test(d)||e.slice(c).indexOf(i.exec(d)[1])){if("..."===d){c=e.length;break}break}c+=d.length-2}return a.H=a.H||o.h12(a.h,a.A),a._index=c,a._length=e.length,a},parse:function(e,t,r){var n=this||g,a="string"==typeof t?n.compile(t):t,i=n.preparse(e,a);return n.isValid(i)?(i.M-=i.Y<100?22801:1,r||~n._parser.find(a,"ZZ").value?new Date(Date.UTC(i.Y,i.M,i.D,i.H,i.m+i.Z,i.s,i.S)):new Date(i.Y,i.M,i.D,i.H,i.m,i.s,i.S)):new Date(NaN)},isValid:function(e,t){var r=this||g,n="string"==typeof e?r.preparse(e,t):e,a=[31,28+r.isLeapYear(n.Y)|0,31,30,31,30,31,31,30,31,30,31][n.M-1];return!(n._index<1||n._length<1||n._index-n._length||n._match<1||n.Y<1||n.Y>9999||n.M<1||n.M>12||n.D<1||n.D>a||n.H<0||n.H>23||n.m<0||n.m>59||n.s<0||n.s>59||n.S<0||n.S>999||n.Z<-840||n.Z>720)},transform:function(e,t,r,n){const a=this||g;return a.format(a.parse(e,t),r,n)},addYears:function(e,t){return(this||g).addMonths(e,12*t)},addMonths:function(e,t){var r=new Date(e.getTime());return r.setMonth(r.getMonth()+t),r},addDays:function(e,t){var r=new Date(e.getTime());return r.setDate(r.getDate()+t),r},addHours:function(e,t){return(this||g).addMinutes(e,60*t)},addMinutes:function(e,t){return(this||g).addSeconds(e,60*t)},addSeconds:function(e,t){return(this||g).addMilliseconds(e,1e3*t)},addMilliseconds:function(e,t){return new Date(e.getTime()+t)},subtract:function(e,t){var r=e.getTime()-t.getTime();return{toMilliseconds:function(){return r},toSeconds:function(){return r/1e3},toMinutes:function(){return r/6e4},toHours:function(){return r/36e5},toDays:function(){return r/864e5}}},isLeapYear:function(e){return!((e%4||!(e%100))&&e%400)},isSameDay:function(e,t){return e.toDateString()===t.toDateString()},locale:function(e,t){x[e]||(x[e]=t)},plugin:function(e,t){w[e]||(w[e]=t)}};f=M(W),(g=M(W)).locale=function(e){var t="function"==typeof e?e:g.locale[e];if(!t)return y;y=t(W);var r=x[y]||{},n=M(v,r.res,!0),a=M(b,r.formatter,!0,n),i=M(C,r.parser,!0,n);for(var o in g._formatter=f._formatter=a,g._parser=f._parser=i,w)g.extend(w[o]);return y},g.extend=function(e){var t=M(g._parser.res,e.res),r=e.extender||{};for(var n in g._formatter=M(g._formatter,e.formatter,!1,t),g._parser=M(g._parser,e.parser,!1,t),r)g[n]||(g[n]=r[n])},g.plugin=function(e){var t="function"==typeof e?e:g.plugin[e];t&&g.extend(w[t(W,f)]||{})};var E=g;const $=r.p+"9c1957e1c1fe8f785257.gif",T=r.p+"739701bd0e01255da1cb.jpg",N="d11947c85c8c62e4c1cdf9c292dc17d0",S=document.getElementById("main");S.style.backgroundImage=`url(${T})`;const k={enableHighAccuracy:!0,timeout:5e3,maximumAge:0};async function _(){return await new Promise(((e,t)=>{navigator.geolocation.getCurrentPosition(e,t,k)}))}function D(){let e=document.getElementById("cityInt");e.className="error",e.placeholder="There`s been an error fetching your data.",e.addEventListener("click",(function t(){e.className="",e.placeholder="Mendoza",e.removeEventListener("click",t)}))}async function H(e){let t=document.getElementById("currentWeather");const r=document.getElementById("weatherCardLocal");null!=r&&(r.parentNode.appendChild(F("loadingWeather")),r.parentNode.removeChild(r));const n=document.createElement("div");n.className="weatherCard",n.id="weatherCardLocal";try{let r;r=0==e?await async function(){let e;try{const t=await _();let r=Math.floor(1e3*t.coords.latitude)/1e3,n=Math.floor(1e3*t.coords.longitude)/1e3;e=await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${r}&lon=${n}&appid=${N}&units=metric`)}catch(t){e=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=London&appid=${N}&units=metric`),D()}let t=await e.json();return console.log(t),t}():await async function(e){let t;try{t=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${e}&appid=${N}&units=metric`)}catch(e){t=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=London&appid=${N}&units=metric`),D()}let r=await t.json();return console.log(r),r}(e),L("loadingWeather");let a=document.createElement("p");a.innerText=`Weather: ${r.weather[0].description}`;let i=document.createElement("h3");i.innerText=`${r.name}`;let o=document.createElement("p");o.className="date";let c=new Date;const d=E.compile("dddd, MMMM DD YYYY, HH:mm");o.innerText=E.format(c,d);let s=document.createElement("p");s.className="temp",s.innerText=`Temp: ${r.main.temp}°C`;let p=document.createElement("p");p.className="tempMin",p.innerText=`Min: ${r.main.temp_min}°C`;let l=document.createElement("p");l.className="tempMax",l.innerText=`Max: ${r.main.temp_max}°C`;let m=document.createElement("p");m.className="tempMax",m.innerText=`Pressure: ${r.main.pressure} hPa`;let u=document.createElement("p");u.className="humidity",u.innerText=`Humidity: ${r.main.humidity}%`;let h=document.createElement("img");h.src=`http://openweathermap.org/img/wn/${r.weather[0].icon}@2x.png`;let f=document.createElement("div");f.id="titleWrapper",f.appendChild(i),f.appendChild(o),n.appendChild(f),n.appendChild(h);let g=document.createElement("div");g.id="currentWeatherWrapper",g.appendChild(a),g.appendChild(s),g.appendChild(u),g.appendChild(l),g.appendChild(m),g.appendChild(p),n.appendChild(g),t.appendChild(n),setTimeout((function(){n.className="weatherCard after"}),50)}catch(e){console.log(e)}}function F(e){let t=document.createElement("img");return t.className="loading",t.src=$,t.id=e,t}function L(e){let t=document.getElementById(`${e}`);null!=t&&t.parentNode.removeChild(t)}async function Y(e){let t=document.getElementById("forecastWrapper");const r=document.getElementById("forecast");null!=r&&(r.parentNode.appendChild(F("loadingForecast")),r.parentNode.removeChild(r));const n=document.createElement("div");n.id="forecast";try{let r,a,i,o;r=0==e?await async function(){let e;try{const t=await _();let r=Math.floor(1e3*t.coords.latitude)/1e3,n=Math.floor(1e3*t.coords.longitude)/1e3;e=await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${r}&lon=${n}&appid=${N}&units=metric`)}catch(t){e=await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=London&appid=${N}&units=metric`),D()}let t=await e.json();return console.log(t),t}():await async function(e){let t;try{t=await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${e}&appid=${N}&units=metric`)}catch(e){t=await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=London&appid=${N}&units=metric`),D()}let r=await t.json();return console.log(r),r}(e),L("loadingForecast"),t.appendChild(n);let c=r.list[0].main.min_temp,d=r.list[0].main.max_temp;for(let e=0;e<r.list.length;e++){let t=document.createElement("p"),s=document.createElement("p");s.className="day";let p=new Date(1e3*r.list[e].dt+1e3*r.city.timezone);const l=E.compile("HH:mm");t.innerText=`${E.format(p,l)} hs.`;const m=E.compile("dddd");let u=E.format(p,m);if(s.innerText=u,a==u){c>r.list[e].main.temp_min&&(document.querySelector(`.min${u}`).innerText=`Min: ${r.list[e].main.temp_min}° C`,c=r.list[e].main.temp_min),d<r.list[e].main.temp_max&&(document.querySelector(`.max${u}`).innerText=`Max: ${r.list[e].main.temp_max}° C`,d=r.list[e].main.temp_max);let n=document.createElement("div");n.className="hourContainer";let a=document.createElement("p");a.innerHTML=`Weather:<br> ${r.list[e].weather[0].description}`;let s=document.createElement("p");s.innerHTML=`Temp: <br>${r.list[e].main.temp}°C`;let p=document.createElement("p");p.innerText=`Humidity: ${r.list[e].main.humidity}%`;let l,m=document.createElement("div");m.className=`dataWrap ${u}`,m.style.display="none",n.appendChild(t),m.appendChild(a),m.appendChild(s),m.appendChild(p),o.appendChild(m),i.appendChild(n),n.addEventListener("mouseenter",(()=>{let t=document.getElementById(`img${u}`);l=t.src,t.src=`http://openweathermap.org/img/wn/${r.list[e].weather[0].icon}@2x.png`})),n.addEventListener("mouseleave",(()=>{document.getElementById(`img${u}`).src=l})),n.addEventListener("click",(()=>{let t=document.getElementById(`img${u}`);t.src=`http://openweathermap.org/img/wn/${r.list[e].weather[0].icon}@2x.png`,l=t.src,document.querySelectorAll(`.${u}`).forEach((e=>{let t=e;m!==e&&(t.className=`dataWrap ${u}`,setTimeout((function(){t.style.display="none"}),600))})),document.querySelectorAll(`.hourContainer${u}`).forEach((e=>{n!==e&&(e.className=`hourContainer hourContainer${u}`)})),setTimeout((function(){m.style.display="grid",m.className=`dataWrap ${u} active`,n.className=`hourContainer hourContainer${u} active`}),150)}))}else{let p=document.createElement("div");p.className=`maxMin maxMin${u}`;let l=document.createElement("P");l.className=`max max${u}`;let m=document.createElement("P");m.className=`min min${u}`,l.innerText=`Max: ${r.list[e].main.temp_max}° C`,c=r.list[e].main.temp_min,d=r.list[e].main.temp_max,m.innerText=`Min: ${r.list[e].main.temp_min}° C`,p.appendChild(l),p.appendChild(m);let h=document.createElement("div");h.className="data",o=h,a=u;let f=document.createElement("div");f.className="weatherForecastCard";let g=document.createElement("div");g.className="forecastContainer",i=g;let x=document.createElement("div");x.className=`hourContainer hourContainer${u} active`;let w=document.createElement("p");w.innerHTML=`Weather: <br>${r.list[e].weather[0].description}`;let y=document.createElement("p");y.innerHTML=`Temp: <br>${r.list[e].main.temp}°C`;let v=document.createElement("p");v.innerText=`Humidity: ${r.list[e].main.humidity}%`;let b=document.createElement("img");b.src=`http://openweathermap.org/img/wn/${r.list[e].weather[0].icon}@2x.png`,b.id=`img${u}`,b.className="weatherIcon";let C,M=document.createElement("div");M.className=`dataWrap ${u} active`,M.style.display="grid",f.appendChild(s),f.appendChild(b),f.appendChild(p),x.appendChild(t),M.appendChild(w),M.appendChild(y),M.appendChild(v),h.appendChild(M),g.appendChild(x),f.appendChild(g),f.appendChild(h),x.addEventListener("mouseenter",(()=>{let t=document.getElementById(`img${u}`);C=t.src,t.src=`http://openweathermap.org/img/wn/${r.list[e].weather[0].icon}@2x.png`})),x.addEventListener("mouseleave",(()=>{document.getElementById(`img${u}`).src=C})),x.addEventListener("click",(()=>{let t=document.getElementById(`img${u}`);t.src=`http://openweathermap.org/img/wn/${r.list[e].weather[0].icon}@2x.png`,C=t.src,document.querySelectorAll(`.${u}`).forEach((e=>{let t=e;M!==e&&(t.className=`dataWrap ${u}`,setTimeout((function(){t.style.display="none"}),600))})),document.querySelectorAll(`.hourContainer${u}`).forEach((e=>{x!==e&&(e.className=`hourContainer hourContainer${u}`)})),setTimeout((function(){M.style.display="grid",M.className=`dataWrap ${u} active`,x.className=`hourContainer hourContainer${u} active`}),150)})),n.appendChild(f),setTimeout((function(){f.className="weatherForecastCard after"}),10*e)}}}catch(e){console.log(e)}}function I(){try{H(!1),Y(!1)}catch(e){console.log(e)}}!function(){let e=document.createElement("div");e.id="weatherWrapper";let t=document.createElement("form");t.id="selectCity",t.method="get",t.action="";let r=document.createElement("h1");r.innerText="Weather Forecast";let n=document.createElement("div");n.id="cityContainer";let a=document.createElement("label");a.for="city",a.innerText="Search a City:";let i=document.createElement("input");i.id="cityInt",i.type="text",i.placeholder="Mendoza",i.autocomplete="off",i.name="city",n.appendChild(a),n.appendChild(i),t.appendChild(n);let o=document.createElement("button");o.id="submitBtn",o.className="formBtn",o.innerText="Search City",o.type="button",o.addEventListener("click",(()=>{!function(e){try{H(e),Y(e)}catch(e){console.log(e)}}(document.getElementById("selectCity").city.value)})),o.addEventListener("click",(()=>{o.className="formBtn after",setTimeout((function(){o.className="formBtn"}),200)})),t.appendChild(o),t.appendChild(function(){let e=document.createElement("button");return e.id="userLocationBtn",e.className="formBtn",e.innerText="Local Weather",e.type="button",e.addEventListener("click",I),e.addEventListener("click",(()=>{e.className="formBtn after",setTimeout((function(){e.className="formBtn"}),300)})),e}());let c=document.createElement("div");c.id="currentWeather",c.appendChild(F("loadingWeather"));let d=document.createElement("div");d.appendChild(F("loadingForecast")),d.id="forecastWrapper",e.appendChild(r),e.appendChild(c),e.appendChild(t),e.appendChild(d);let s=document.createElement("div");s.id="footer";let p=document.createElement("h5");p.id="footText",p.innerText="Crafted by Haervwe",s.appendChild(p),S.appendChild(e),S.appendChild(s)}(),I()})()})();