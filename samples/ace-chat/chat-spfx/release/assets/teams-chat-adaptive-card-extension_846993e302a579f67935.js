/*! For license information please see teams-chat-adaptive-card-extension_846993e302a579f67935.js.LICENSE.txt */
define("a2a912c5-526d-41d4-933f-d12c56aa45d1_0.0.1",["TeamsChatAdaptiveCardExtensionStrings","@microsoft/sp-loader","@microsoft/sp-adaptive-card-extension-base"],function(n,a,i){return function(e){function t(t){for(var n,i,r=t[0],o=t[1],s=0,c=[];s<r.length;s++)i=r[s],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&c.push(a[i][0]),a[i]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n]);for(d&&d(t);c.length;)c.shift()()}var n={},a={1:0};function i(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.e=function(t){for(var n=[],o=function(e){return{0:[{i:"f9e737b7-f0df-4597-ba8c-3060f82380db",v:"1.13.0",m:"26ea"}]}[e]||[]}(t),s=0;s<o.length;s++)e[o[s].m]||function(t){n.push(r.SPComponentLoader.loadComponentById(t.i,t.v).then(function(n){e[t.m]=function(e){e.exports=n}}))}(o[s]);var c=a[t];if(0!==c)if(c)n.push(c[2]);else{var d=new Promise(function(e,n){c=a[t]=[e,n]});n.push(c[2]=d);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,i.nc&&u.setAttribute("nonce",i.nc),u.src=function(e){return i.p+"chunk."+({0:"TeamsChat-property-pane"}[e]||e)+"_"+{0:"ed35255fb2226e11e86f"}[e]+".js"}(t),0!==u.src.indexOf(window.location.origin+"/")&&(u.crossOrigin="anonymous");var f=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(p);var n=a[t];if(0!==n){if(n){var i=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+i+": "+r+")",f.name="ChunkLoadError",f.type=i,f.request=r,n[1](f)}a[t]=void 0}};var p=setTimeout(function(){l({type:"timeout",target:u})},12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(n)},i.m=e,i.c=n,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var r=i("I6O9");i.oe=function(e){throw console.error(e),e};var o=window.webpackJsonpa2a912c5_526d_41d4_933f_d12c56aa45d1_0_0_1=window.webpackJsonpa2a912c5_526d_41d4_933f_d12c56aa45d1_0_0_1||[],s=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var d=s;return function(){var e,t=document.getElementsByTagName("script"),n=/teams-chat-adaptive-card-extension_846993e302a579f67935\.js/i;if(t&&t.length)for(var a=0;a<t.length;a++)if(t[a]){var r=t[a].getAttribute("src");if(r&&r.match(n)){e=r.substring(0,r.lastIndexOf("/")+1);break}}if(!e)for(var o in window.__setWebpackPublicPathLoaderSrcRegistry__)if(o&&o.match(n)){e=o.substring(0,o.lastIndexOf("/")+1);break}i.p=e}(),i(i.s="0Cgz")}({"08ZC":function(e,t,n){"use strict";(function(e){n.d(t,"e",function(){return a});var a=void 0===e?window:e}).call(this,n("yLpj"))},"0Cgz":function(e,t,n){"use strict";n.r(t),n.d(t,"MESSAGE_LIST_REGISTRY_ID",function(){return G}),n.d(t,"MESSAGE_REGISTRY_ID",function(){return K});var a=n("lz/E"),i=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function a(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(a.prototype=n.prototype,new a)}}(),r=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return i(t,e),Object.defineProperty(t.prototype,"data",{get:function(){return{primaryText:this.state.messages.length+" new messages",description:"description",iconProperty:"data:image/svg+xml,%0A%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2048 2048'%3E%3Cpath d='M1914 1539q6 30 6 61t-6 61l124 51-49 119-124-52q-35 51-86 86l52 124-119 49-51-124q-30 6-61 6t-61-6l-51 124-119-49 52-124q-51-35-86-86l-124 52-49-119 124-51q-6-30-6-61t6-61l-124-51 49-119 124 52q35-51 86-86l-52-124 119-49 51 124q30-6 61-6t61 6l51-124 119 49-52 124q51 35 86 86l124-52 49 119-124 51zm-314 253q40 0 75-15t61-41 41-61 15-75q0-40-15-75t-41-61-61-41-75-15q-40 0-75 15t-61 41-41 61-15 75q0 40 15 75t41 61 61 41 75 15zm-576-192q0 65 14 128t42 120 67 108 91 92H354q-40 0-75-15t-61-41-42-61-15-75q0-27 7-51t21-48l569-990q10-18 10-35V128H640V0h768v128h-128v604q0 19 9 34l160 278q-63 18-120 48l-150-261q-13-23-20-48t-7-51V128H896v604q0 52-28 100l-330 576h519q-33 93-33 192z' fill='%23333333'%3E%3C/path%3E%3C/svg%3E",title:"title"}},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"onCardSelection",{get:function(){return{type:"QuickView",parameters:{view:G}}},enumerable:!0,configurable:!0}),t}(a.BasePrimaryTextCardView),o=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function a(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(a.prototype=n.prototype,new a)}}(),s=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return o(t,e),Object.defineProperty(t.prototype,"data",{get:function(){return{primaryText:"Setup Required",description:"You must set a channel link to connect to the channel"}},enumerable:!0,configurable:!0}),t}(a.BasePrimaryTextCardView),c=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function a(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(a.prototype=n.prototype,new a)}}(),d=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return c(t,e),Object.defineProperty(t.prototype,"data",{get:function(){return{primaryText:"Error",description:"Could not parse the channel link in settings"}},enumerable:!0,configurable:!0}),t}(a.BasePrimaryTextCardView),l=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function a(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(a.prototype=n.prototype,new a)}}(),u=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return l(t,e),Object.defineProperty(t.prototype,"data",{get:function(){return{messages:this.state.messages}},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"template",{get:function(){return n("AHM1")},enumerable:!0,configurable:!0}),t.prototype.onAction=function(e){this.setState({selectedMessage:e.data.index}),this.quickViewNavigator.push(K)},t}(a.BaseAdaptiveCardView);function f(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return e.filter(function(e){return!m(e)}).map(function(e){return e.replace(/^[\\|/]/,"").replace(/[\\|/]$/,"")}).join("/").replace(/\\/g,"/")}function p(e){return null!=e}function m(e){return null==e||e.length<1}var _="function"==typeof Object.entries?Object.entries:function(e){return Object.keys(e).map(function(t){return[t,e[t]]})},h=function(e,t){return(h=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)};function b(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}h(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}function g(e,t,n,a){return new(n||(n=Promise))(function(i,r){function o(e){try{c(a.next(e))}catch(e){r(e)}}function s(e){try{c(a.throw(e))}catch(e){r(e)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n(function(e){e(t)})).then(o,s)}c((a=a.apply(e,t||[])).next())})}function v(e,t){var n,a,i,r,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return r={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function s(r){return function(s){return function(r){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,a&&(i=2&r[0]?a.return:r[0]?a.throw||((i=a.return)&&i.call(a),0):a.next)&&!(i=i.call(a,r[1])).done)return i;switch(a=0,i&&(r=[2&r[0],i.value]),r[0]){case 0:case 1:i=r;break;case 4:return o.label++,{value:r[1],done:!1};case 5:o.label++,a=r[1],r=[0];continue;case 7:r=o.ops.pop(),o.trys.pop();continue;default:if(!((i=(i=o.trys).length>0&&i[i.length-1])||6!==r[0]&&2!==r[0])){o=0;continue}if(3===r[0]&&(!i||r[1]>i[0]&&r[1]<i[3])){o.label=r[1];break}if(6===r[0]&&o.label<i[1]){o.label=i[1],i=r;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(r);break}i[2]&&o.ops.pop(),o.trys.pop();continue}r=t.call(e,o)}catch(e){r=[6,e],a=0}finally{n=i=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}([r,s])}}}function y(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var a,i,r=n.call(e),o=[];try{for(;(void 0===t||t-- >0)&&!(a=r.next()).done;)o.push(a.value)}catch(e){i={error:e}}finally{try{a&&!a.done&&(n=r.return)&&n.call(r)}finally{if(i)throw i.error}}return o}Object.create,Object.create;var S=["defaultCachingStore","defaultCachingTimeoutSeconds","globalCacheDisable","enableCacheExpiration","cacheExpirationIntervalMilliseconds","spfxContext","ie11"],D=[],I=new(function(){function e(e){var t=this;void 0===e&&(e=new Map),this._v=e;var n=function(e,n){t._v.has(e)||t._v.set(e,n)};n(S[0],"session"),n(S[1],60),n(S[2],!1),n(S[3],!1),n(S[4],750),n(S[5],null),n(S[6],!1),D.forEach(function(e){return e(t)})}return e.prototype.assign=function(e){var t;this._v=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];for(var a=0;a<t.length;a++)t[a].forEach(function(t,n){"string"==typeof n&&"spfxContext"!==n&&"[object Object]"===Object.prototype.toString.call(t)?e.set(n,Object.assign({},e.get(n)||{},t)):e.set(n,t)});return e}(this._v,p(t=e)?new Map(_(t)):new Map)},e.prototype.get=function(e){return this._v.get(e)},e.prototype.export=function(){var e,t,n=new Map;try{for(var a=function(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],a=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&a>=e.length&&(e=void 0),{value:e&&e[a++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}(this._v),i=a.next();!i.done;i=a.next()){var r=y(i.value,2),o=r[0],s=r[1];"__isDefault__"!==o&&n.set(o,s)}}catch(t){e={error:t}}finally{try{i&&!i.done&&(t=a.return)&&t.call(a)}finally{if(e)throw e.error}}return n},e}())(new Map([["__isDefault__",!0]])),x=n("08ZC");!function(e){function t(t){var n=e.call(this,function(e){return g(n,void 0,void 0,function(){return v(this,function(n){switch(n.label){case 0:return[4,t.aadTokenProviderFactory.getTokenProvider()];case 1:return[2,n.sent().getToken((a=e.url,i=new URL(a),i.protocol+"//"+i.hostname))]}var a,i})})})||this;return n.context=t,n}b(t,e),t.prototype.getToken=function(e){return g(this,void 0,void 0,function(){return v(this,function(t){switch(t.label){case 0:return[4,this.context.aadTokenProviderFactory.getTokenProvider()];case 1:return[2,t.sent().getToken(e)]}})})}}(function(e){function t(t){var n=e.call(this,null)||this;return n.tokenFactory=t,n}return b(t,e),t.prototype.fetch=function(t,n){return g(this,void 0,void 0,function(){var a;return v(this,function(i){switch(i.label){case 0:return a=this,[4,this.tokenFactory({url:t,options:n})];case 1:return a.token=i.sent(),[2,e.prototype.fetch.call(this,t,n)]}})})},t}(function(e){function t(t){var n=e.call(this)||this;return n.token=t,n}return b(t,e),t.prototype.fetch=function(t,n){void 0===n&&(n={});var a,i,r=new Headers;return a=r,p(i=n.headers)&&new Request("",{headers:i}).headers.forEach(function(e,t){a.append(t,e)}),r.set("Authorization","Bearer "+this.token),n.headers=r,e.prototype.fetch.call(this,t,n)},t}(function(){function e(){}return e.prototype.fetch=function(e,t){return x.e.fetch(e,t)},e}())));var C,O,w=function(){function e(e,t){void 0===t&&(t=-1),this.store=e,this.defaultTimeoutMinutes=t,this.enabled=this.test(),I.get("enableCacheExpiration")&&this.cacheExpirationHandler()}return e.bind=function(t){return new e(void 0===t?new E:t)},e.prototype.get=function(e){if(!this.enabled)return null;var t=this.store.getItem(e);if(!p(t))return null;var n=JSON.parse(t);return new Date(n.expiration)<=new Date?(this.delete(e),null):n.value},e.prototype.put=function(e,t,n){this.enabled&&this.store.setItem(e,this.createPersistable(t,n))},e.prototype.delete=function(e){this.enabled&&this.store.removeItem(e)},e.prototype.getOrPut=function(e,t,n){return g(this,void 0,void 0,function(){var a;return v(this,function(i){switch(i.label){case 0:return this.enabled?null!==(a=this.get(e))?[3,2]:[4,t()]:[2,t()];case 1:a=i.sent(),this.put(e,a,n),i.label=2;case 2:return[2,a]}})})},e.prototype.deleteExpired=function(){return g(this,void 0,void 0,function(){var e,t;return v(this,function(n){switch(n.label){case 0:if(!this.enabled)return[2];e=0,n.label=1;case 1:return e<this.store.length?null===(t=this.store.key(e))?[3,3]:/["|']?pnp["|']? ?: ?1/i.test(this.store.getItem(t))?[4,this.get(t)]:[3,3]:[3,4];case 2:n.sent(),n.label=3;case 3:return e++,[3,1];case 4:return[2]}})})},e.prototype.test=function(){try{return this.store.setItem("t","t"),this.store.removeItem("t"),!0}catch(e){return!1}},e.prototype.createPersistable=function(e,t){if(void 0===t){var n=I.get("defaultCachingTimeoutSeconds");this.defaultTimeoutMinutes>0&&(n=60*this.defaultTimeoutMinutes),t=function(e,t,n){var a=new Date(e.toString());switch("second".toLowerCase()){case"year":a.setFullYear(a.getFullYear()+n);break;case"quarter":a.setMonth(a.getMonth()+3*n);break;case"month":a.setMonth(a.getMonth()+n);break;case"week":a.setDate(a.getDate()+7*n);break;case"day":a.setDate(a.getDate()+n);break;case"hour":a.setTime(a.getTime()+36e5*n);break;case"minute":a.setTime(a.getTime()+6e4*n);break;case"second":a.setTime(a.getTime()+1e3*n);break;default:a=void 0}return a}(new Date,0,n)}return function(e){return JSON.stringify(e)}({pnp:1,expiration:t,value:e})},e.prototype.cacheExpirationHandler=function(){var e=this;this.enabled&&this.deleteExpired().then(function(){setTimeout(function(e,t){for(var n=[],a=2;a<arguments.length;a++)n[a-2]=arguments[a];return function(){t.apply(e,n)}}(e,e.cacheExpirationHandler),I.get("cacheExpirationIntervalMilliseconds"))}).catch(console.error)},e}(),E=function(){function e(e){void 0===e&&(e=new Map),this._store=e}return Object.defineProperty(e.prototype,"length",{get:function(){return this._store.size},enumerable:!1,configurable:!0}),e.prototype.clear=function(){this._store.clear()},e.prototype.getItem=function(e){return this._store.get(e)},e.prototype.key=function(e){return Array.from(this._store)[e][0]},e.prototype.removeItem=function(e){this._store.delete(e)},e.prototype.setItem=function(e,t){this._store.set(e,t)},e}(),A=(function(){function e(e,t){void 0===e&&(e=null),void 0===t&&(t=null),this._local=e,this._session=t}Object.defineProperty(e.prototype,"local",{get:function(){return null===this._local&&(this._local=new w("undefined"==typeof localStorage?new E:localStorage)),this._local},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"session",{get:function(){return null===this._session&&(this._session=new w("undefined"==typeof sessionStorage?new E:sessionStorage)),this._session},enumerable:!1,configurable:!0})}(),function(e,t,n,a){return new(n||(n=Promise))(function(i,r){function o(e){try{c(a.next(e))}catch(e){r(e)}}function s(e){try{c(a.throw(e))}catch(e){r(e)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n(function(e){e(t)})).then(o,s)}c((a=a.apply(e,t||[])).next())})}),L=function(e,t){var n,a,i,r,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return r={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function s(r){return function(s){return function(r){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,a&&(i=2&r[0]?a.return:r[0]?a.throw||((i=a.return)&&i.call(a),0):a.next)&&!(i=i.call(a,r[1])).done)return i;switch(a=0,i&&(r=[2&r[0],i.value]),r[0]){case 0:case 1:i=r;break;case 4:return o.label++,{value:r[1],done:!1};case 5:o.label++,a=r[1],r=[0];continue;case 7:r=o.ops.pop(),o.trys.pop();continue;default:if(!((i=(i=o.trys).length>0&&i[i.length-1])||6!==r[0]&&2!==r[0])){o=0;continue}if(3===r[0]&&(!i||r[1]>i[0]&&r[1]<i[3])){o.label=r[1];break}if(6===r[0]&&o.label<i[1]){o.label=i[1],i=r;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(r);break}i[2]&&o.ops.pop(),o.trys.pop();continue}r=t.call(e,o)}catch(e){r=[6,e],a=0}finally{n=i=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}([r,s])}}},k=function(e){return this instanceof k?(this.v=e,this):new k(e)},M=function(e,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var a,i=n.apply(e,t||[]),r=[];return a={},o("next"),o("throw"),o("return"),a[Symbol.asyncIterator]=function(){return this},a;function o(e){i[e]&&(a[e]=function(t){return new Promise(function(n,a){r.push([e,t,n,a])>1||s(e,t)})})}function s(e,t){try{(n=i[e](t)).value instanceof k?Promise.resolve(n.value.v).then(c,d):l(r[0][2],n)}catch(e){l(r[0][3],e)}var n}function c(e){s("next",e)}function d(e){s("throw",e)}function l(e,t){e(t),r.shift(),r.length&&s(r[0][0],r[0][1])}},P=Symbol.for("done"),T=void 0;function U(){T&&(clearTimeout(T),T=void 0)}function F(e){return t=e.value,(Array.isArray?Array.isArray(t):t&&"number"==typeof t.length&&t.constructor===Array)?e.value.map(H):[];var t}function H(e){return{body:e.body,from:e.from,id:e.id,subject:e.subject||e.summary||e.body.content.substr(0,15)+(e.body.content.length>16?"...":"")}}var R=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function a(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(a.prototype=n.prototype,new a)}}(),N=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._pollingStarted=!1,t}return R(t,e),Object.defineProperty(t.prototype,"data",{get:function(){var e=this;if(this.state.selectedMessage<0||this.state.selectedMessage>this.state.messages.length)return{subject:"Invalid card selection ("+this.state.selectedMessage+")"};var t=this.state.messages,n=t[this.state.selectedMessage];return this._pollingStarted||(this._pollingStarted=!0,this._pollingCancel=function(e,t,n){var a,i=this;void 0===n&&(n=1e4);var r=function(){return A(i,void 0,void 0,function(){var i;return L(this,function(o){switch(o.label){case 0:return[4,new Promise(function(t,n){C.api(f(O,"/messages/"+e+"/replies")).top(5).get(function(e,a){if(e)return n(e);var i=F(a);t(i.reverse())})})];case 1:return i=o.sent(),t(i),a=setTimeout(r,n),[2]}})})};return r(),function(){return clearTimeout(a)}}(n.id,function(a){n.replies=a,t[e.state.selectedMessage]=n,e.setState({messages:t})},3e4)),n},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"template",{get:function(){return n("C7ul")},enumerable:!0,configurable:!0}),t.prototype.onAction=function(e){var t=this;"close"===e.id?(this._pollingStarted=!1,this._pollingCancel(),this.setState({selectedMessage:-1}),this.quickViewNavigator.pop()):"reply"===e.id&&setTimeout(function(){return n=t,void 0,i=function(){var t,n,a;return function(e,t){var n,a,i,r,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return r={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function s(r){return function(s){return function(r){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,a&&(i=2&r[0]?a.return:r[0]?a.throw||((i=a.return)&&i.call(a),0):a.next)&&!(i=i.call(a,r[1])).done)return i;switch(a=0,i&&(r=[2&r[0],i.value]),r[0]){case 0:case 1:i=r;break;case 4:return o.label++,{value:r[1],done:!1};case 5:o.label++,a=r[1],r=[0];continue;case 7:r=o.ops.pop(),o.trys.pop();continue;default:if(!((i=(i=o.trys).length>0&&i[i.length-1])||6!==r[0]&&2!==r[0])){o=0;continue}if(3===r[0]&&(!i||r[1]>i[0]&&r[1]<i[3])){o.label=r[1];break}if(6===r[0]&&o.label<i[1]){o.label=i[1],i=r;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(r);break}i[2]&&o.ops.pop(),o.trys.pop();continue}r=t.call(e,o)}catch(e){r=[6,e],a=0}finally{n=i=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}([r,s])}}}(this,function(i){switch(i.label){case 0:return t=this.state.messages,n=t[this.state.selectedMessage],[4,(r=n.id,o=e.data.replyText,m(o)?null:new Promise(function(e,t){var n={body:{content:o}};C.api(f(O,"/messages/"+r+"/replies")).post(n,function(n,a){n&&t(n),e(H(a))})}))];case 1:return null!==(a=i.sent())&&(n.replies=function(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var a=Array(e),i=0;for(t=0;t<n;t++)for(var r=arguments[t],o=0,s=r.length;o<s;o++,i++)a[i]=r[o];return a}(n.replies,[a]),t[this.state.selectedMessage]=n,this.setState({messages:t})),[2]}var r,o})},new((a=void 0)||(a=Promise))(function(e,t){function r(e){try{s(i.next(e))}catch(e){t(e)}}function o(e){try{s(i.throw(e))}catch(e){t(e)}}function s(t){var n;t.done?e(t.value):(n=t.value,n instanceof a?n:new a(function(e){e(n)})).then(r,o)}s((i=i.apply(n,[])).next())});var n,a,i},0)},t}(a.BaseAdaptiveCardView),B=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function a(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(a.prototype=n.prototype,new a)}}(),j=function(e,t,n,a){return new(n||(n=Promise))(function(i,r){function o(e){try{c(a.next(e))}catch(e){r(e)}}function s(e){try{c(a.throw(e))}catch(e){r(e)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n(function(e){e(t)})).then(o,s)}c((a=a.apply(e,t||[])).next())})},V=function(e,t){var n,a,i,r,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return r={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function s(r){return function(s){return function(r){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,a&&(i=2&r[0]?a.return:r[0]?a.throw||((i=a.return)&&i.call(a),0):a.next)&&!(i=i.call(a,r[1])).done)return i;switch(a=0,i&&(r=[2&r[0],i.value]),r[0]){case 0:case 1:i=r;break;case 4:return o.label++,{value:r[1],done:!1};case 5:o.label++,a=r[1],r=[0];continue;case 7:r=o.ops.pop(),o.trys.pop();continue;default:if(!((i=(i=o.trys).length>0&&i[i.length-1])||6!==r[0]&&2!==r[0])){o=0;continue}if(3===r[0]&&(!i||r[1]>i[0]&&r[1]<i[3])){o.label=r[1];break}if(6===r[0]&&o.label<i[1]){o.label=i[1],i=r;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(r);break}i[2]&&o.ops.pop(),o.trys.pop();continue}r=t.call(e,o)}catch(e){r=[6,e],a=0}finally{n=i=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}([r,s])}}},z=function(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var a=Array(e),i=0;for(t=0;t<n;t++)for(var r=arguments[t],o=0,s=r.length;o<s;o++,i++)a[i]=r[o];return a},G="TeamsChat_MESSAGE_LIST_VIEW",K="TeamsChat_MESSAGE_VIEW",W=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return B(t,e),t.prototype.onInit=function(){return j(this,void 0,void 0,function(){return V(this,function(e){return this.cardNavigator.register("TeamsChat_CARD_VIEW",function(){return new r}),this.cardNavigator.register("MustSetChannelLink_CARD_VIEW",function(){return new s}),this.cardNavigator.register("ChannelLinkError_CARD_VIEW",function(){return new d}),this.quickViewNavigator.register(G,function(){return new u}),this.quickViewNavigator.register(K,function(){return new N}),this.state={cardViewToRender:"TeamsChat_CARD_VIEW",channelBaseUrl:null,messages:null,selectedMessage:-1},this.setupViews(),[2]})})},Object.defineProperty(t.prototype,"title",{get:function(){return this.properties.title},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"iconProperty",{get:function(){return this.properties.iconProperty||n("6rkt")},enumerable:!0,configurable:!0}),t.prototype.loadPropertyPaneResources=function(){return j(this,void 0,void 0,function(){var e;return V(this,function(t){switch(t.label){case 0:return[4,n.e(0).then(n.bind(null,"/vt1"))];case 1:return e=t.sent(),this._deferredPropertyPane=new e.TeamsChatPropertyPane,[2]}})})},t.prototype.onPropertyPaneFieldChanged=function(e,t,n){"channelLink"===e&&t!==n&&this.setupViews()},t.prototype.renderCard=function(){return this.state.cardViewToRender},t.prototype.getPropertyPaneConfiguration=function(){return this._deferredPropertyPane.getPropertyPaneConfiguration()},t.prototype.setupViews=function(){return j(this,void 0,void 0,function(){var e,t=this;return V(this,function(n){switch(n.label){case 0:return m(this.properties.channelLink)?(this.setState({cardViewToRender:"MustSetChannelLink_CARD_VIEW"}),this.cardNavigator.replace(this.state.cardViewToRender),[2]):null===(e=/^https:\/\/.*?\/channel\/(.*?)\/.*?groupId=([a-f0-9]{8}(?:-[a-f0-9]{4}){3}-[a-f0-9-]{12})/i.exec(this.properties.channelLink))||3!==e.length?(this.setState({cardViewToRender:"ChannelLinkError_CARD_VIEW"}),this.cardNavigator.replace(this.state.cardViewToRender),[2]):(this.setState({channelBaseUrl:"/teams/"+e[2]+"/channels/"+e[1],messages:[],selectedMessage:-1,cardViewToRender:"TeamsChat_CARD_VIEW"}),this.cardNavigator.replace(this.state.cardViewToRender),[4,this.context.msGraphClientFactory.getClient()]);case 1:return a=n.sent(),i=this.state.channelBaseUrl,U(),C=a,O=i,function(e,t){var n=this;void 0===e&&(e=5),void 0===t&&(t=1e4);var a=f(O,"messages/delta"),i=100,r=[];function o(){return M(this,arguments,function(){return L(this,function(n){switch(n.label){case 0:return m(a)?[3,2]:[4,k(new Promise(function(n,r){C.api(a).top(e).get(function(e,o){if(e)return r(e);o["@odata.nextLink"]?(a=o["@odata.nextLink"],i=100):o["@odata.deltaLink"]?(a=o["@odata.deltaLink"],i=t):n(P),localStorage.setItem("ab51eb5c-5a82-48de-a20c-f225f0f6cc1e",a),n(F(o))})}))];case 1:r=n.sent(),n.label=2;case 2:return r!==P?[3,4]:[4,k(void 0)];case 3:return[2,n.sent()];case 4:return[4,k({messages:r,timeout:i})];case 5:return[4,n.sent()];case 6:return n.sent(),[2]}})})}return U(),function(e){var t=function(){return A(n,void 0,void 0,function(){var n,a,i;return L(this,function(r){switch(r.label){case 0:return[4,o().next()];case 1:return n=r.sent(),(null===(i=n)||void 0===i?void 0:i.done)||((a=n.value).messages.length>0&&e(a.messages),T=setTimeout(t,a.timeout)),[2]}})})};t()}}(4,15e3)(function(e){t.setState({messages:z(t.state.messages,e)})}),[2]}var a,i})})},t}(a.BaseAdaptiveCardExtension);t.default=W},"6rkt":function(e,t,n){e.exports=n.p+"SharePointLogo_080ce1f0d32aa6185206d1b09cf37de9.svg"},"9kw4":function(e,t){e.exports=n},AHM1:function(e){e.exports=JSON.parse('{"schema":"http://adaptivecards.io/schemas/adaptive-card.json","type":"AdaptiveCard","version":"1.2","body":[{"type":"ColumnSet","$data":"${messages}","separator":true,"columns":[{"type":"Column","items":[{"type":"TextBlock","weight":"Bolder","size":"large","color":"accent","text":"${subject}","wrap":true,"maxLines":2},{"type":"TextBlock","text":"From: ${from.user.displayName}","size":"small","isSubtle":true}]},{"type":"Column","items":[{"type":"ActionSet","actions":[{"type":"Action.Submit","iconUrl":"data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 2048 2048\'%3E%3Cpath d=\'M1280 512q16 0 29 7l739 369v136q-26 0-45 19t-19 45v128q0 93-35 174t-96 142-142 96-175 36q-93 0-174-35t-142-96-96-142-36-175q0-26-19-45t-45-19q-26 0-45 19t-19 45q0 93-35 174t-96 142-142 96-175 36q-93 0-174-35t-142-96-96-142-36-175v-128q0-26-19-45t-45-19V888l739-369q13-7 29-7 26 0 45 19 10 10 24 22t28 27 22 29 9 31q0 26-19 45t-45 19q-25 0-42-16t-35-34L271 896h497q38 0 65 9t49 24 39 31 32 31 33 23 38 10q21 0 38-9t32-24 33-31 38-31 49-23 66-10h497l-484-242q-17 17-34 33t-43 17q-26 0-45-19t-19-45q0-16 9-31t22-29 27-26 25-23q19-19 45-19zm-448 640q0-26-10-49t-27-41-41-28-50-10H256q-26 0-45 19t-19 45v128q0 66 25 124t68 102 102 69 125 25q66 0 124-25t101-68 69-102 26-125v-64zm704 384q66 0 124-25t101-68 69-102 26-125q0-22-1-47t-1-50 2-49 11-46h-523q-26 0-49 10t-41 27-28 41-10 50v64q0 66 25 124t68 102 102 69 125 25z\' fill=\'%23333333\'%3E%3C/path%3E%3C/svg%3E","data":{"index":"${$index}","action":"view"}}]}]}]}]}')},C7ul:function(e){e.exports=JSON.parse('{"schema":"http://adaptivecards.io/schemas/adaptive-card.json","type":"AdaptiveCard","version":"1.2","body":[{"type":"Container","bleed":true,"items":[{"type":"TextBlock","weight":"Bolder","size":"large","color":"accent","text":"${subject}","wrap":true,"maxLines":2},{"type":"TextBlock","text":"From: ${from.user.displayName}","size":"small","isSubtle":true},{"type":"TextBlock","text":"${body.content}"}]},{"type":"Container","$data":"${replies}","separator":true,"bleed":true,"height":"250px","items":[{"separator":true,"type":"TextBlock","text":"${from.user.displayName}:","isSubtle":true},{"type":"TextBlock","text":"${body.content}"}]},{"type":"Input.Text","id":"replyText","placeholder":"enter reply","separator":true,"maxLength":1024,"isRequired":false,"isMultiline":true,"label":"Reply","errorMessage":"Please enter a reply","inlineAction":{"type":"Action.Submit","iconUrl":"data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 2048 2048\'%3E%3Cpath d=\'M1792 1152H475l466 467-90 90-621-621 621-621 90 90-466 467h1189V384h128v768z\' fill=\'%23333333\'%3E%3C/path%3E%3C/svg%3E","id":"reply","title":"Reply"}}],"actions":[{"type":"Action.Submit","id":"close","title":"Close","associatedInputs":"none"}]}')},I6O9:function(e,t){e.exports=a},"lz/E":function(e,t){e.exports=i},yLpj:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n}})});