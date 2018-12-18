(function(e){function t(t){for(var o,a,u=t[0],c=t[1],s=t[2],l=0,p=[];l<u.length;l++)a=u[l],r[a]&&p.push(r[a][0]),r[a]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);f&&f(t);while(p.length)p.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,a=1;a<n.length;a++){var c=n[a];0!==r[c]&&(o=!1)}o&&(i.splice(t--,1),e=u(u.s=n[0]))}return e}var o={},r={app:0},i=[];function a(e){return u.p+"js/"+({about:"about"}[e]||e)+"."+{about:"6a95e25f"}[e]+".js"}function u(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise(function(t,o){n=r[e]=[t,o]});t.push(n[2]=o);var i,c=document.getElementsByTagName("head")[0],s=document.createElement("script");s.charset="utf-8",s.timeout=120,u.nc&&s.setAttribute("nonce",u.nc),s.src=a(e),i=function(t){s.onerror=s.onload=null,clearTimeout(l);var n=r[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src,a=new Error("Loading chunk "+e+" failed.\n("+o+": "+i+")");a.type=o,a.request=i,n[1](a)}r[e]=void 0}};var l=setTimeout(function(){i({type:"timeout",target:s})},12e4);s.onerror=s.onload=i,c.appendChild(s)}return Promise.all(t)},u.m=e,u.c=o,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)u.d(n,o,function(t){return e[t]}.bind(null,o));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var f=s;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"35ab":function(e,t,n){"use strict";var o=n("b765"),r=n.n(o);r.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var o=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},i=[],a=(n("5c0b"),n("2877")),u={},c=Object(a["a"])(u,r,i,!1,null,null,null);c.options.__file="App.vue";var s=c.exports,l=n("8c4f"),f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},e._l(e.movies,function(t,o){return n("movie-item",{key:o,attrs:{movie:t},on:{jump:e.onJump}})}),1)},p=[],d=(n("f386"),n("ac6a"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container",on:{click:e.handleClick}},[n("img",{attrs:{src:e.movie.imageUrl,alt:""}}),n("p",[e._v(e._s(e.movie.title))])])}),v=[],m={name:"MovieItem",props:{movie:{type:Object}},methods:{handleClick:function(){this.$emit("jump",this.movie.id)}}},h=m,b=(n("35ab"),Object(a["a"])(h,d,v,!1,null,"0acec078",null));b.options.__file="MovieItem.vue";var g=b.exports,y=n("a91b"),w=n.n(y),_={name:"home",data:function(){return{movies:[]}},components:{MovieItem:g},mounted:function(){var e=this,t="https://douban.uieee.com/v2/movie/top250";w.a.jsonp(t).then(function(t){e.handleData(t)})},methods:{onJump:function(e){this.$router.push("/about/"+e)},handleData:function(e){var t=e.subjects,n=[];t.forEach(function(e){var t={id:e.id,imageUrl:e.images.small,title:e.title};n.push(t)}),this.movies=n}}},j=_,O=(n("cf62"),Object(a["a"])(j,f,p,!1,null,"05d5eb1a",null));O.options.__file="Home.vue";var k=O.exports;o["a"].use(l["a"]);var x=new l["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:k},{path:"/about/:id",name:"about",component:function(){return n.e("about").then(n.bind(null,"a1d1"))}}]}),E=n("2f62");o["a"].use(E["a"]);var P=new E["a"].Store({state:{},mutations:{},actions:{}}),M=n("9483");Object(M["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),o["a"].config.productionTip=!1,new o["a"]({router:x,store:P,render:function(e){return e(s)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var o=n("5e27"),r=n.n(o);r.a},"5e27":function(e,t,n){},8925:function(e,t,n){},b765:function(e,t,n){},cf62:function(e,t,n){"use strict";var o=n("8925"),r=n.n(o);r.a}});
//# sourceMappingURL=app.da299bcb.js.map