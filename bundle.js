/*! For license information please see bundle.js.LICENSE.txt */
(()=>{"use strict";var e={192:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(81),a=n.n(r),i=n(645),o=n.n(i)()(a());o.push([e.id,"*{user-select:none;box-sizing:border-box}body{margin:0%;padding:0px;height:100vh;width:100vw}#main{display:grid;height:100%;grid-template-rows:92vh 8vh}#main #weatherWrapper{display:grid;height:92vh;width:100%;max-width:100%;grid-template-rows:2fr 9fr 1fr 12fr;grid-template-columns:1fr;justify-items:center;align-content:center}#main #weatherWrapper #forecastWrapper{display:flex;align-items:center;width:100vw;overflow-x:auto;overflow-y:hidden}#main #weatherWrapper #forecastWrapper #loadingForecast{margin:auto}#main #weatherWrapper #forecastWrapper #forecast{display:grid;height:46vh;margin-left:5%;margin-right:5%;min-width:960px;grid-template-columns:repeat(auto-fit, minmax(150px, 1fr));grid-template-rows:1fr;justify-items:center;align-items:center;gap:10px}#main #weatherWrapper #forecastWrapper #forecast .weatherForecastCard{display:grid;align-items:center;height:90%;justify-items:center;grid-template-columns:1fr 1fr;grid-template-rows:1fr 3fr 8fr}#main #weatherWrapper #forecastWrapper #forecast .weatherForecastCard .day{grid-column:1/3;grid-row:1/2;margin:0px;justify-content:center;align-content:center}#main #weatherWrapper #forecastWrapper #forecast .weatherForecastCard .weatherIcon{grid-column:1/3;grid-row:2/3}#main #weatherWrapper #forecastWrapper #forecast .weatherForecastCard .forecastContainer .hourContainer p{margin:2px}#main #weatherWrapper #forecastWrapper #forecast .weatherForecastCard .data .dataWrap p{margin:2px}\n",""]);const c=o},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,a,i){"string"==typeof e&&(e=[[null,e,void 0]]);var o={};if(r)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(o[d]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);r&&o[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),t.push(l))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var i={},o=[],c=0;c<e.length;c++){var d=e[c],s=r.base?d[0]+r.base:d[0],l=i[s]||0,u="".concat(s," ").concat(l);i[s]=l+1;var p=n(u),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==p)t[p].references++,t[p].updater(m);else{var h=a(m,r);r.byIndex=c,t.splice(c,0,{identifier:u,updater:h,references:1})}o.push(u)}return o}function a(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,a){var i=r(e=e||[],a=a||{});return function(e){e=e||[];for(var o=0;o<i.length;o++){var c=n(i[o]);t[c].references--}for(var d=r(e,a),s=0;s<i.length;s++){var l=n(i[s]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}i=d}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,a&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var i=t[r]={id:r,exports:{}};return e[r](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.nc=void 0,(()=>{var e=n(379),t=n.n(e),r=n(795),a=n.n(r),i=n(569),o=n.n(i),c=n(565),d=n.n(c),s=n(216),l=n.n(s),u=n(589),p=n.n(u),m=n(192),h={};h.styleTagTransform=p(),h.setAttributes=d(),h.insert=o().bind(null,"head"),h.domAPI=a(),h.insertStyleElement=l(),t()(m.Z,h),m.Z&&m.Z.locals&&m.Z.locals;var f,g,v={},y={},w="en",M={MMMM:["January","February","March","April","May","June","July","August","September","October","November","December"],MMM:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dddd:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],ddd:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dd:["Su","Mo","Tu","We","Th","Fr","Sa"],A:["AM","PM"]},x={YYYY:function(e){return("000"+e.getFullYear()).slice(-4)},YY:function(e){return("0"+e.getFullYear()).slice(-2)},Y:function(e){return""+e.getFullYear()},MMMM:function(e){return this.res.MMMM[e.getMonth()]},MMM:function(e){return this.res.MMM[e.getMonth()]},MM:function(e){return("0"+(e.getMonth()+1)).slice(-2)},M:function(e){return""+(e.getMonth()+1)},DD:function(e){return("0"+e.getDate()).slice(-2)},D:function(e){return""+e.getDate()},HH:function(e){return("0"+e.getHours()).slice(-2)},H:function(e){return""+e.getHours()},A:function(e){return this.res.A[e.getHours()>11|0]},hh:function(e){return("0"+(e.getHours()%12||12)).slice(-2)},h:function(e){return""+(e.getHours()%12||12)},mm:function(e){return("0"+e.getMinutes()).slice(-2)},m:function(e){return""+e.getMinutes()},ss:function(e){return("0"+e.getSeconds()).slice(-2)},s:function(e){return""+e.getSeconds()},SSS:function(e){return("00"+e.getMilliseconds()).slice(-3)},SS:function(e){return("0"+(e.getMilliseconds()/10|0)).slice(-2)},S:function(e){return""+(e.getMilliseconds()/100|0)},dddd:function(e){return this.res.dddd[e.getDay()]},ddd:function(e){return this.res.ddd[e.getDay()]},dd:function(e){return this.res.dd[e.getDay()]},Z:function(e){var t=e.getTimezoneOffset()/.6|0;return(t>0?"-":"+")+("000"+Math.abs(t-(t%100*.4|0))).slice(-4)},ZZ:function(e){var t=e.getTimezoneOffset(),n=Math.abs(t);return(t>0?"-":"+")+("0"+(n/60|0)).slice(-2)+":"+("0"+n%60).slice(-2)},post:function(e){return e},res:M},C={YYYY:function(e){return this.exec(/^\d{4}/,e)},Y:function(e){return this.exec(/^\d{1,4}/,e)},MMMM:function(e){var t=this.find(this.res.MMMM,e);return t.value++,t},MMM:function(e){var t=this.find(this.res.MMM,e);return t.value++,t},MM:function(e){return this.exec(/^\d\d/,e)},M:function(e){return this.exec(/^\d\d?/,e)},DD:function(e){return this.exec(/^\d\d/,e)},D:function(e){return this.exec(/^\d\d?/,e)},HH:function(e){return this.exec(/^\d\d/,e)},H:function(e){return this.exec(/^\d\d?/,e)},A:function(e){return this.find(this.res.A,e)},hh:function(e){return this.exec(/^\d\d/,e)},h:function(e){return this.exec(/^\d\d?/,e)},mm:function(e){return this.exec(/^\d\d/,e)},m:function(e){return this.exec(/^\d\d?/,e)},ss:function(e){return this.exec(/^\d\d/,e)},s:function(e){return this.exec(/^\d\d?/,e)},SSS:function(e){return this.exec(/^\d{1,3}/,e)},SS:function(e){var t=this.exec(/^\d\d?/,e);return t.value*=10,t},S:function(e){var t=this.exec(/^\d/,e);return t.value*=100,t},Z:function(e){var t=this.exec(/^[\+-]\d{2}[0-5]\d/,e);return t.value=-60*(t.value/100|0)-t.value%100,t},ZZ:function(e){var t=/^([\+-])(\d{2}):([0-5]\d)/.exec(e)||["","","",""];return{value:0-(60*(t[1]+t[2]|0)+(t[1]+t[3]|0)),length:t[0].length}},h12:function(e,t){return(12===e?0:e)+12*t},exec:function(e,t){var n=(e.exec(t)||[""])[0];return{value:0|n,length:n.length}},find:function(e,t){for(var n,r=-1,a=0,i=0,o=e.length;i<o;i++)n=e[i],!t.indexOf(n)&&n.length>a&&(r=i,a=n.length);return{value:r,length:a}},pre:function(e){return e},res:M},E=function(e,t,n,r){var a,i={};for(a in e)i[a]=e[a];for(a in t||{})!!n^!!i[a]||(i[a]=t[a]);return r&&(i.res=r),i},T={_formatter:x,_parser:C,compile:function(e){for(var t,n=/\[([^\[\]]|\[[^\[\]]*])*]|([A-Za-z])\2+|\.{3}|./g,r=[e];t=n.exec(e);)r[r.length]=t[0];return r},format:function(e,t,n){var r=this||g,a="string"==typeof t?r.compile(t):t,i=e.getTimezoneOffset(),o=r.addMinutes(e,n?i:0),c=r._formatter,d="";o.getTimezoneOffset=function(){return n?0:i};for(var s,l=1,u=a.length;l<u;l++)d+=c[s=a[l]]?c.post(c[s](o,a[0])):s.replace(/\[(.*)]/,"$1");return d},preparse:function(e,t){var n=this||g,r="string"==typeof t?n.compile(t):t,a={Y:1970,M:1,D:1,H:0,A:0,h:0,m:0,s:0,S:0,Z:0,_index:0,_length:0,_match:0},i=/\[(.*)]/,o=n._parser,c=0;e=o.pre(e);for(var d,s,l=1,u=r.length;l<u;l++)if(o[d=r[l]]){if(!(s=o[d](e.slice(c),r[0])).length)break;c+=s.length,a[s.token||d.charAt(0)]=s.value,a._match++}else if(d===e.charAt(c)||" "===d)c++;else{if(!i.test(d)||e.slice(c).indexOf(i.exec(d)[1])){if("..."===d){c=e.length;break}break}c+=d.length-2}return a.H=a.H||o.h12(a.h,a.A),a._index=c,a._length=e.length,a},parse:function(e,t,n){var r=this||g,a="string"==typeof t?r.compile(t):t,i=r.preparse(e,a);return r.isValid(i)?(i.M-=i.Y<100?22801:1,n||~r._parser.find(a,"ZZ").value?new Date(Date.UTC(i.Y,i.M,i.D,i.H,i.m+i.Z,i.s,i.S)):new Date(i.Y,i.M,i.D,i.H,i.m,i.s,i.S)):new Date(NaN)},isValid:function(e,t){var n=this||g,r="string"==typeof e?n.preparse(e,t):e,a=[31,28+n.isLeapYear(r.Y)|0,31,30,31,30,31,31,30,31,30,31][r.M-1];return!(r._index<1||r._length<1||r._index-r._length||r._match<1||r.Y<1||r.Y>9999||r.M<1||r.M>12||r.D<1||r.D>a||r.H<0||r.H>23||r.m<0||r.m>59||r.s<0||r.s>59||r.S<0||r.S>999||r.Z<-840||r.Z>720)},transform:function(e,t,n,r){const a=this||g;return a.format(a.parse(e,t),n,r)},addYears:function(e,t){return(this||g).addMonths(e,12*t)},addMonths:function(e,t){var n=new Date(e.getTime());return n.setMonth(n.getMonth()+t),n},addDays:function(e,t){var n=new Date(e.getTime());return n.setDate(n.getDate()+t),n},addHours:function(e,t){return(this||g).addMinutes(e,60*t)},addMinutes:function(e,t){return(this||g).addSeconds(e,60*t)},addSeconds:function(e,t){return(this||g).addMilliseconds(e,1e3*t)},addMilliseconds:function(e,t){return new Date(e.getTime()+t)},subtract:function(e,t){var n=e.getTime()-t.getTime();return{toMilliseconds:function(){return n},toSeconds:function(){return n/1e3},toMinutes:function(){return n/6e4},toHours:function(){return n/36e5},toDays:function(){return n/864e5}}},isLeapYear:function(e){return!((e%4||!(e%100))&&e%400)},isSameDay:function(e,t){return e.toDateString()===t.toDateString()},locale:function(e,t){v[e]||(v[e]=t)},plugin:function(e,t){y[e]||(y[e]=t)}};f=E(T),(g=E(T)).locale=function(e){var t="function"==typeof e?e:g.locale[e];if(!t)return w;w=t(T);var n=v[w]||{},r=E(M,n.res,!0),a=E(x,n.formatter,!0,r),i=E(C,n.parser,!0,r);for(var o in g._formatter=f._formatter=a,g._parser=f._parser=i,y)g.extend(y[o]);return w},g.extend=function(e){var t=E(g._parser.res,e.res),n=e.extender||{};for(var r in g._formatter=E(g._formatter,e.formatter,!1,t),g._parser=E(g._parser,e.parser,!1,t),n)g[r]||(g[r]=n[r])},g.plugin=function(e){var t="function"==typeof e?e:g.plugin[e];t&&g.extend(y[t(T,f)]||{})};var b=g;const $=n.p+"824c3104b89c788fffc7.gif",S="d11947c85c8c62e4c1cdf9c292dc17d0",D=document.getElementById("main"),W={enableHighAccuracy:!0,timeout:5e3,maximumAge:0};async function Y(){return await new Promise(((e,t)=>{navigator.geolocation.getCurrentPosition(e,t,W)}))}function H(){let e=document.getElementById("error");null!=e&&e.parentNode.removeChild(e);let t=document.createElement("div");t.id="error",t.innerText="Your search yielded no result.";let n=document.createElement("button");n.innerText="X",n.style.backgroundColor="red",n.addEventListener("click",(()=>{t.parentNode.removeChild(t)})),t.appendChild(n),D.appendChild(t)}async function N(e){const t=document.getElementById("weatherCard");null!=t&&(t.parentNode.appendChild(_("loadingWeather")),t.parentNode.removeChild(t));const n=document.createElement("div");n.id="weatherCard";try{let t;t=0==e?await async function(){let e;try{const t=await Y();let n=Math.floor(1e3*t.coords.latitude)/1e3,r=Math.floor(1e3*t.coords.longitude)/1e3;e=await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${n}&lon=${r}&appid=${S}&units=metric`)}catch(t){e=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=London&appid=${S}&units=metric`),H()}let t=await e.json();return console.log(t),t}():await async function(e){let t;try{t=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${e}&appid=${S}&units=metric`)}catch(e){t=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=London&appid=${S}&units=metric`),H()}let n=await t.json();return console.log(n),n}(e),A("loadingWeather");let r=document.createElement("p");r.innerText=`Local Weather: ${t.weather[0].main}, ${t.weather[0].description}`;let a=document.createElement("p");a.innerText=`City: ${t.name}`;let i=document.createElement("p"),o=new Date;const c=b.compile("dddd, MMMM DD YYYY, HH:mm");i.innerText=b.format(o,c);let d=document.createElement("p");d.innerText=`Temperature: ${t.main.temp}°C`;let s=document.createElement("p");s.innerText=`Humidity: ${t.main.humidity}%`;let l=document.createElement("img");return l.src=`http://openweathermap.org/img/wn/${t.weather[0].icon}@2x.png`,n.appendChild(i),n.appendChild(l),n.appendChild(a),n.appendChild(r),n.appendChild(d),n.appendChild(s),n}catch(e){console.log(e)}}function _(e){let t=document.createElement("img");return t.className="loading",t.src=$,t.id=e,t}function A(e){let t=document.getElementById(`${e}`);null!=t&&t.parentNode.removeChild(t)}async function I(e){const t=document.getElementById("forecast");null!=t&&(t.parentNode.appendChild(_("loadingForecast")),t.parentNode.removeChild(t));const n=document.createElement("div");n.id="forecast";try{let t,r,a,i;t=0==e?await async function(){let e;try{const t=await Y();let n=Math.floor(1e3*t.coords.latitude)/1e3,r=Math.floor(1e3*t.coords.longitude)/1e3;e=await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${n}&lon=${r}&appid=${S}&units=metric`)}catch(t){e=await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=London&appid=${S}&units=metric`),H()}let t=await e.json();return console.log(t),t}():await async function(e){let t;try{t=await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${e}&appid=${S}&units=metric`)}catch(e){t=await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=London&appid=${S}&units=metric`),H()}let n=await t.json();return console.log(n),n}(e),A("loadingForecast");for(let e=0;e<t.list.length;e++){let o=document.createElement("p"),c=document.createElement("p");c.className="day";let d=b.parse(`${t.list[e].dt_txt}`,"YYYY-MM-DD hh:mm:ss");const s=b.compile("HH:mm");o.innerText=`${b.format(d,s)} hs.`;const l=b.compile("dddd");let u=b.format(d,l);if(c.innerText=u,r==u){let n=document.createElement("div");n.className="hourContainer";let r=document.createElement("p");r.innerText=`Weather: ${t.list[e].weather[0].description}`;let c=document.createElement("p");c.innerText=`Temp: ${t.list[e].main.temp}°C`;let d=document.createElement("p");d.innerText=`Humidity: ${t.list[e].main.humidity}%`;let s,l=document.createElement("div");l.className=`dataWrap ${u}`,l.style.display="none",n.appendChild(o),l.appendChild(r),l.appendChild(c),l.appendChild(d),i.appendChild(l),a.appendChild(n),n.addEventListener("mouseenter",(()=>{let n=document.getElementById(`img${u}`);s=n.src,n.src=`http://openweathermap.org/img/wn/${t.list[e].weather[0].icon}@2x.png`})),n.addEventListener("mouseleave",(()=>{document.getElementById(`img${u}`).src=s})),n.addEventListener("click",(()=>{let n=document.getElementById(`img${u}`);n.src=`http://openweathermap.org/img/wn/${t.list[e].weather[0].icon}@2x.png`,s=n.src,document.querySelectorAll(`.${u}`).forEach((e=>e.style.display="none")),l.style.display="grid"}))}else{let d=document.createElement("div");d.className="data",i=d,r=u;let s=document.createElement("div");s.className="weatherForecastCard";let l=document.createElement("div");l.className="forecastContainer",a=l;let p=document.createElement("div");p.className="hourContainer";let m=document.createElement("p");m.innerText=`Weather: ${t.list[e].weather[0].description}`;let h=document.createElement("p");h.innerText=`Temp: ${t.list[e].main.temp}°C`;let f=document.createElement("p");f.innerText=`Humidity: ${t.list[e].main.humidity}%`;let g=document.createElement("img");g.src=`http://openweathermap.org/img/wn/${t.list[e].weather[0].icon}@2x.png`,g.id=`img${u}`,g.className="weatherIcon";let v,y=document.createElement("div");y.className=`dataWrap ${u}`,y.style.display="grid",s.appendChild(c),s.appendChild(g),p.appendChild(o),y.appendChild(m),y.appendChild(h),y.appendChild(f),d.appendChild(y),l.appendChild(p),s.appendChild(l),s.appendChild(d),p.addEventListener("mouseenter",(()=>{let n=document.getElementById(`img${u}`);v=n.src,n.src=`http://openweathermap.org/img/wn/${t.list[e].weather[0].icon}@2x.png`})),p.addEventListener("mouseleave",(()=>{document.getElementById(`img${u}`).src=v})),p.addEventListener("click",(()=>{let n=document.getElementById(`img${u}`);n.src=`http://openweathermap.org/img/wn/${t.list[e].weather[0].icon}@2x.png`,v=n.src,document.querySelectorAll(`.${u}`).forEach((e=>e.style.display="none")),y.style.display="grid"})),n.appendChild(s)}}return n}catch(e){console.log(e)}}async function F(){try{let e=document.getElementById("currentWeather"),t=document.getElementById("forecastWrapper");e.appendChild(await N(!1)),t.appendChild(await I(!1))}catch(e){console.log(e)}}!function(){let e=document.createElement("div");e.id="weatherWrapper";let t=document.createElement("form");t.id="selectCity",t.method="get",t.action="";let n=document.createElement("h1");n.innerText="Weather Forecast";let r=document.createElement("div");r.id="cityContainer";let a=document.createElement("label");a.for="city",a.innerText="Search a City:";let i=document.createElement("input");i.id="cityInt",i.type="text",i.placeholder="Mendoza",i.name="city",r.appendChild(a),r.appendChild(i),t.appendChild(r);let o=document.createElement("button");o.className="submit",o.innerText="Search City",o.type="button",o.addEventListener("click",(()=>{!async function(e){try{let t=document.getElementById("currentWeather"),n=document.getElementById("forecastWrapper");t.appendChild(await N(e)),n.appendChild(await I(e))}catch(e){console.log(e)}}(document.getElementById("selectCity").city.value)})),t.appendChild(o),t.appendChild(function(){let e=document.createElement("button");return e.className="userLocationBtn",e.innerText="Local Weather",e.type="button",e.addEventListener("click",F),e}());let c=document.createElement("div");c.id="currentWeather",c.appendChild(_("loadingWeather"));let d=document.createElement("div");d.appendChild(_("loadingForecast")),d.id="forecastWrapper",e.appendChild(n),e.appendChild(c),e.appendChild(t),e.appendChild(d);let s=document.createElement("div");s.id="footer";let l=document.createElement("h5");l.id="footText",l.innerText="Crafted by Haervwe",s.appendChild(l),D.appendChild(e),D.appendChild(s)}(),F()})()})();