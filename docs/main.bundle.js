(()=>{"use strict";var e,n={141:(e,n,r)=>{var t=r(540),a=r(338),o=r(715),i=function(e,n){return Object.defineProperty?Object.defineProperty(e,"raw",{value:n}):e.raw=n,e},c=function(){return c=Object.assign||function(e){for(var n,r=1,t=arguments.length;r<t;r++)for(var a in n=arguments[r])Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a]);return e},c.apply(this,arguments)},l=[10,20],p=o.Ay.div(s||(s=i(["\n  display: inline-block;\n  border: 1px solid black;\n  margin: 1px;\n  padding: 1px 3px;\n"],["\n  display: inline-block;\n  border: 1px solid black;\n  margin: 1px;\n  padding: 1px 3px;\n"])));const u=(0,o.Ay)((function(e){var n,r=e.keys,a=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]])}return r}(e,["keys"]);return t.createElement("div",c({},a),(n=Object.entries(r).map((function(e){var n=e[0],r=e[1];return t.createElement(p,{key:n,className:"keyboard-display__key"},r)})),l.forEach((function(e){return n.splice(e,0,t.createElement("br",{key:"break_"+e}))})),n))}))(f||(f=i(["\n  margin: 20px auto;\n  text-align: center;\n"],["\n  margin: 20px auto;\n  text-align: center;\n"])));var s,f,v=function(){return v=Object.assign||function(e){for(var n,r=1,t=arguments.length;r<t;r++)for(var a in n=arguments[r])Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a]);return e},v.apply(this,arguments)};const g=(0,o.Ay)((function(e){var n=e.value,r=e.onChange,a=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]])}return r}(e,["value","onChange"]);return t.createElement("div",v({},a),t.createElement("input",{autoFocus:!0,value:n,onChange:r}))}))(m||(y=["\n  margin: 20px auto;\n  text-align: center;\n"],h=["\n  margin: 20px auto;\n  text-align: center;\n"],Object.defineProperty?Object.defineProperty(y,"raw",{value:h}):y.raw=h,m=y));var y,h,m,b=function(){return b=Object.assign||function(e){for(var n,r=1,t=arguments.length;r<t;r++)for(var a in n=arguments[r])Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a]);return e},b.apply(this,arguments)},d="qwertyuiopasdfghjklzxcvbnm".split("").reduce((function(e,n){var r;return b(b({},e),((r={})[n]=n,r))}),{});function O(e){return Object.keys(e).reduce((function(n,r){var t;return b(b({},n),((t={})[r]=e[r],t))}),{})}const j=r.p+"main.jpg";var w=(0,o.DU)(x||(x=function(e,n){return Object.defineProperty?Object.defineProperty(e,"raw",{value:n}):e.raw=n,e}(["\n  html, body {\n    height: 100%;\n    margin: 0;\n  }\n\n  #app-root, .app, .map, .ol-map {\n    height: 100%;\n  }\n\n  .main-image {\n    display: block;\n    margin: 0 auto;\n    height: 75vh;\n  }\n"],["\n  html, body {\n    height: 100%;\n    margin: 0;\n  }\n\n  #app-root, .app, .map, .ol-map {\n    height: 100%;\n  }\n\n  .main-image {\n    display: block;\n    margin: 0 auto;\n    height: 75vh;\n  }\n"])));var x;(0,a.H)(document.getElementById("app-root")).render(t.createElement((function(){var e=(0,t.useState)(d),n=e[0],r=e[1],a=(0,t.useState)(""),o=a[0],i=a[1];return t.createElement(t.Fragment,null,t.createElement(w,null),t.createElement("div",{className:"app"},t.createElement(g,{value:o,onChange:function(e){var t=e.target.value,a=n;if(t.length>o.length){var c=t[t.length-1];c=c.toLowerCase(),void 0!==n[c]&&(c=n[c],t=t.slice(0,-1)+c,a=function(e){var n=O(e),r=Object.keys(O(e));return r.forEach((function(e){return t=n,a=e,o=r[(c=r.length,void 0===l&&(l=0),l+Math.floor(Math.random()*(c-l)))],i=t[a],t[a]=t[o],void(t[o]=i);var t,a,o,i,c,l})),n}(n))}i(t),r(a)}}),t.createElement(u,{keys:n}),t.createElement("img",{className:"main-image",src:j})))}),null))}},r={};function t(e){var a=r[e];if(void 0!==a)return a.exports;var o=r[e]={exports:{}};return n[e](o,o.exports,t),o.exports}t.m=n,e=[],t.O=(n,r,a,o)=>{if(!r){var i=1/0;for(u=0;u<e.length;u++){for(var[r,a,o]=e[u],c=!0,l=0;l<r.length;l++)(!1&o||i>=o)&&Object.keys(t.O).every((e=>t.O[e](r[l])))?r.splice(l--,1):(c=!1,o<i&&(i=o));if(c){e.splice(u--,1);var p=a();void 0!==p&&(n=p)}}return n}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[r,a,o]},t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");if(r.length)for(var a=r.length-1;a>-1&&(!e||!/^http(s?):/.test(e));)e=r[a--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),(()=>{var e={792:0};t.O.j=n=>0===e[n];var n=(n,r)=>{var a,o,[i,c,l]=r,p=0;if(i.some((n=>0!==e[n]))){for(a in c)t.o(c,a)&&(t.m[a]=c[a]);if(l)var u=l(t)}for(n&&n(r);p<i.length;p++)o=i[p],t.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return t.O(u)},r=self.webpackChunkrandom_keyboard=self.webpackChunkrandom_keyboard||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))})(),t.nc=void 0;var a=t.O(void 0,[121],(()=>t(141)));a=t.O(a)})();