(function(e){function t(t){for(var r,o,u=t[0],i=t[1],l=t[2],s=0,b=[];s<u.length;s++)o=u[s],Object.prototype.hasOwnProperty.call(c,o)&&c[o]&&b.push(c[o][0]),c[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);d&&d(t);while(b.length)b.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,o=1;o<n.length;o++){var u=n[o];0!==c[u]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},c={app:0},a=[];function u(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-58805fe6":"510a13a3","chunk-130b3a65":"26a84ed5","chunk-3b996093":"a9eb011e","chunk-4b1076c8":"639dcb74"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-130b3a65":1,"chunk-3b996093":1,"chunk-4b1076c8":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-58805fe6":"31d6cfe0","chunk-130b3a65":"8aa0a249","chunk-3b996093":"0bd66a4b","chunk-4b1076c8":"00dd9680"}[e]+".css",c=i.p+r,a=document.getElementsByTagName("link"),u=0;u<a.length;u++){var l=a[u],s=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(s===r||s===c))return t()}var b=document.getElementsByTagName("style");for(u=0;u<b.length;u++){l=b[u],s=l.getAttribute("data-href");if(s===r||s===c)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||c,a=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=r,delete o[e],d.parentNode.removeChild(d),n(a)},d.href=c;var f=document.getElementsByTagName("head")[0];f.appendChild(d)})).then((function(){o[e]=0})));var r=c[e];if(0!==r)if(r)t.push(r[2]);else{var a=new Promise((function(t,n){r=c[e]=[t,n]}));t.push(r[2]=a);var l,s=document.createElement("script");s.charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.src=u(e);var b=new Error;l=function(t){s.onerror=s.onload=null,clearTimeout(d);var n=c[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;b.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",b.name="ChunkLoadError",b.type=r,b.request=o,n[1](b)}c[e]=void 0}};var d=setTimeout((function(){l({type:"timeout",target:s})}),12e4);s.onerror=s.onload=l,document.head.appendChild(s)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/lets-bike/dist/",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var b=0;b<l.length;b++)t(l[b]);var d=s;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),o=n("cf05"),c=n.n(o),a=n("5f12"),u=n.n(a),i=n("c93e"),l=n.n(i),s=n("cb7a"),b=n.n(s),d={class:"row position-relative"},f={class:"col-12 col-md-1 position-relative"},p={class:"nav align-items-center position-fixed"},h=Object(r["e"])("img",{alt:"logo",class:"logo",src:c.a},null,-1),m=Object(r["e"])("img",{class:"all-center",alt:"map",src:u.a},null,-1),v=Object(r["e"])("img",{class:"all-center",alt:"bike",src:l.a},null,-1),g=Object(r["e"])("img",{class:"all-center",alt:"route",src:b.a},null,-1),O={class:"col-12 col-md-11"};function j(e,t,n,o,c,a){var u=Object(r["w"])("router-link"),i=Object(r["w"])("router-view");return Object(r["r"])(),Object(r["d"])("div",{class:Object(r["n"])(a.look?"banner":"")},[Object(r["e"])("div",d,[Object(r["e"])("div",f,[Object(r["e"])("div",p,[Object(r["h"])(u,{to:"/",class:"text-center"},{default:Object(r["C"])((function(){return[h]})),_:1}),Object(r["h"])(u,{to:"/where-to-go",class:"box rounded-1"},{default:Object(r["C"])((function(){return[m]})),_:1}),Object(r["h"])(u,{to:"/station",class:"box rounded-1"},{default:Object(r["C"])((function(){return[v]})),_:1}),Object(r["h"])(u,{to:"/route",class:"box rounded-1"},{default:Object(r["C"])((function(){return[g]})),_:1})])]),Object(r["e"])("div",O,[Object(r["h"])(i)])])],2)}var k={computed:{look:function(){return"/"===this.$route.path}}},y=(n("daf1"),n("d959")),w=n.n(y);const x=w()(k,[["render",j]]);var _=x,P=n("bc3a"),C=n.n(P),S=n("130e"),E=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),T={class:"container"},A={class:"content row text-white align-items-end"},L={class:"col-12 col-md-5 pb-5"},M=Object(r["e"])("h1",null,"Let's Bike, Your Road",-1),N=Object(r["e"])("p",{class:"py-2"},"近年來因應健康、環保等開啟了騎自行車風潮， 我們整理了各縣市的自行車路線，結合 Youbike 讓您快速規劃您的活動。",-1),B=Object(r["e"])("button",{class:"btn btn-primary mb-4",style:{width:"300px"}},"規劃路線",-1);function q(e,t){var n=Object(r["w"])("router-link");return Object(r["r"])(),Object(r["d"])("div",T,[Object(r["e"])("div",A,[Object(r["e"])("div",L,[M,N,Object(r["h"])(n,{to:"/route"},{default:Object(r["C"])((function(){return[B]})),_:1})])])])}n("aa0b");const D={},H=w()(D,[["render",q]]);var J=H,R=[{path:"/",name:"Home",component:J},{path:"/where-to-go",name:"Map",component:function(){return Promise.all([n.e("chunk-58805fe6"),n.e("chunk-3b996093")]).then(n.bind(null,"4bb4"))}},{path:"/station",name:"Station",component:function(){return Promise.all([n.e("chunk-58805fe6"),n.e("chunk-4b1076c8")]).then(n.bind(null,"14c5"))}},{path:"/route",name:"Route",component:function(){return Promise.all([n.e("chunk-58805fe6"),n.e("chunk-130b3a65")]).then(n.bind(null,"b59c"))}}],Y=Object(E["a"])({history:Object(E["b"])(),routes:R}),F=Y,I=Object(r["c"])(_);I.use(S["a"],C.a),I.use(F),I.mount("#app")},"5f12":function(e,t,n){e.exports=n.p+"img/icon_map.8b611536.svg"},"710d":function(e,t,n){},a33f:function(e,t,n){},aa0b:function(e,t,n){"use strict";n("710d")},c93e:function(e,t,n){e.exports=n.p+"img/icon_bike.4b85d50b.svg"},cb7a:function(e,t,n){e.exports=n.p+"img/icon_route.18928614.svg"},cf05:function(e,t,n){e.exports=n.p+"img/logo.6d3164c4.png"},daf1:function(e,t,n){"use strict";n("a33f")}});
//# sourceMappingURL=app.f879bbc0.js.map