(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{40:function(t,e,r){"use strict";(function(t){var n=r(0),o=r.n(n);r(41),r(42);function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function a(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(o=n.key,a=void 0,a=function(t,e){if("object"!==i(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!==i(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(o,"string"),"symbol"===i(a)?a:String(a)),n)}var o,a}function c(t,e){return(c=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t})(t,e)}function u(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=s(t);if(e){var o=s(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return l(this,r)}}function l(t,e){if(e&&("object"===i(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function s(t){return(s=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var f=function(e){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&c(t,e)}(s,e);var r,n,i,l=u(s);function s(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,s),(e=l.call(this,t)).elem=o.a.createRef(),e}return r=s,(n=[{key:"componentDidMount",value:function(){t(this.elem.current).loadimage(this.props.style)}},{key:"render",value:function(){return o.a.createElement("div",{ref:this.elem,name:this.props.name,src:this.props.src,title:this.props.title,newtab:this.props.newTab?"1":"",desc:this.props.desc,href:this.props.href})}}])&&a(r.prototype,n),i&&a(r,i),Object.defineProperty(r,"prototype",{writable:!1}),s}(o.a.Component);e.a=f}).call(this,r(14))},41:function(t,e,r){"use strict";(function(t){function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */r=function(){return t};var t={},n=Object.prototype,o=n.hasOwnProperty,i=Object.defineProperty||function(t,e,r){t[e]=r.value},a="function"==typeof Symbol?Symbol:{},c=a.iterator||"@@iterator",u=a.asyncIterator||"@@asyncIterator",l=a.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,r){return t[e]=r}}function f(t,e,r,n){var o=e&&e.prototype instanceof d?e:d,a=Object.create(o.prototype),c=new S(n||[]);return i(a,"_invoke",{value:E(t,r,c)}),a}function p(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=f;var h={};function d(){}function y(){}function m(){}var v={};s(v,c,(function(){return this}));var b=Object.getPrototypeOf,g=b&&b(b(_([])));g&&g!==n&&o.call(g,c)&&(v=g);var w=m.prototype=d.prototype=Object.create(v);function x(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function k(t,r){var n;i(this,"_invoke",{value:function(i,a){function c(){return new r((function(n,c){!function n(i,a,c,u){var l=p(t[i],t,a);if("throw"!==l.type){var s=l.arg,f=s.value;return f&&"object"==e(f)&&o.call(f,"__await")?r.resolve(f.__await).then((function(t){n("next",t,c,u)}),(function(t){n("throw",t,c,u)})):r.resolve(f).then((function(t){s.value=t,c(s)}),(function(t){return n("throw",t,c,u)}))}u(l.arg)}(i,a,n,c)}))}return n=n?n.then(c,c):c()}})}function E(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return L()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=j(a,r);if(c){if(c===h)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=p(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===h)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function j(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,j(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),h;var o=p(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,h;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function _(t){if(t){var e=t[c];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,n=function e(){for(;++r<t.length;)if(o.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return n.next=n}}return{next:L}}function L(){return{value:void 0,done:!0}}return y.prototype=m,i(w,"constructor",{value:m,configurable:!0}),i(m,"constructor",{value:y,configurable:!0}),y.displayName=s(m,l,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,s(t,l,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},x(k.prototype),s(k.prototype,u,(function(){return this})),t.AsyncIterator=k,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new k(f(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},x(w),s(w,l,"Generator"),s(w,c,(function(){return this})),s(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=_,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(P),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var c=o.call(i,"catchLoc"),u=o.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),P(r),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;P(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:_(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},t}function n(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,i){var a=t.apply(e,r);function c(t){n(a,o,i,c,u,"next",t)}function u(t){n(a,o,i,c,u,"throw",t)}c(void 0)}))}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,l(n.key),n)}}function c(t,e,r){return e&&a(t.prototype,e),r&&a(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function u(t,e,r){return(e=l(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t){var r=function(t,r){if("object"!==e(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,r||"default");if("object"!==e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"===e(r)?r:String(r)}var s={processLimit:4},f=function(){function t(){i(this,t)}var e,n;return c(t,null,[{key:"add",value:(n=o(r().mark((function e(n,o){return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.queue.push(new p(n,o)),t.workers<t.processLimit&&(t.workers++,setTimeout(t.initWorker));case 2:case"end":return e.stop()}}),e)}))),function(t,e){return n.apply(this,arguments)})},{key:"initWorker",value:(e=o(r().mark((function e(){return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t.queue.length>0)){e.next=5;break}return e.next=3,t.process();case 3:e.next=0;break;case 5:t.workers--;case 6:case"end":return e.stop()}}),e)}))),function(){return e.apply(this,arguments)})},{key:"process",value:function(){return new Promise((function(e,r){t.queue.shift().process(e)}))}}]),t}();u(f,"queue",[]),u(f,"workers",0),u(f,"processLimit",4),t.fn.loadimageConfig=function(e){var r=t.extend(!0,{},s,e);f.processLimit=r.processLimit},t.fn.loadimage=function(e){this.each((function(r,n){f.add(t(n),e)}))};var p=c((function e(r,n){var o=this;i(this,e),u(this,"elem",null),u(this,"setStyles",(function(t){for(var e in t)o.elem.find("img").css(e,t[e])})),u(this,"process",(function(t){var e=new Image;e.src=o.elem.attr("src"),e.onload=function(){t(),o.elem.find("img").attr("src",e.src),console.log(o.elem.attr("newTab")),o.elem.attr("newTab")?(o.elem.addClass("pointer"),o.elem.click((function(){var t=o.elem.attr("href");window.open(t)}))):o.elem.attr("href")&&o.initFullScreenMode(),setTimeout((function(){o.elem.addClass("complete").removeClass("load-spinner")}))},e.onerror=function(){t(),o.elem.removeClass("load-spinner").addClass("load-error")}})),u(this,"initFullScreenMode",(function(){o.elem.addClass("pointer"),o.elem.click((function(){var e=t('<div class="fullscreen load-spinner" />');t("body").append(e);var r=new Image;r.src=o.elem.attr("href"),r.onload=function(){var t=o.elem.attr("title")||"",n=o.elem.attr("desc")||"";console.log(t),e.html('<div class="desc"><div class="title">'+t+'</div>  <div class="sub">'+n+"</div></div>"),e.removeClass("load-spinner").css({"background-image":"url('".concat(r.src,"')")}).click((function(){return e.remove()}))},r.onerror=function(){e.removeClass("load-spinner").addClass("load-error").click((function(){return e.remove()}))}}))})),this.elem=r,this.elem.addClass("loadimage load-spinner").append("<img />"),this.setStyles(n)}))}).call(this,r(14))},42:function(t,e,r){var n=r(10),o=r(43);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[t.i,o,""]]);var i={insert:"head",singleton:!1};n(o,i);t.exports=o.locals||{}},43:function(t,e,r){(e=r(11)(!1)).push([t.i,'.load-error:after{position:absolute;top:calc(50% - 34px);left:calc(50% - 22px);height:68px;width:44px;content:"⮿";font-size:50px;color:#838383;text-align:center;box-sizing:border-box;font-family:sans-serif;line-height:74px}.fullscreen{z-index:10000;position:fixed;top:0;bottom:0;left:0;right:0;background:rgba(0,0,0,.8);background-repeat:no-repeat;background-position:center center;background-size:contain}.fullscreen.load-spinner:after{border-color:#fff rgba(0,0,0,0) #fff rgba(0,0,0,0) !important}.fullscreen.load-error:after{color:#fff}.fullscreen .desc{min-height:55px;padding:0px 5px 10px 5px;text-align:center;bottom:0;right:0;left:0;position:absolute;color:#fff;background:rgba(1,1,1,.85)}.fullscreen .title{font-size:15px}.fullscreen .sub{font-size:12px}.loadimage{display:inline-block;position:relative;border:1px solid #cbcbcb;overflow:hidden;font-size:0}.loadimage.href{cursor:pointer}.loadimage.href:hover{opacity:1}.loadimage.complete img{opacity:1}.loadimage img{min-width:50px;min-height:50px;transition:opacity 1s;display:inline-block;height:inherit;width:inherit;opacity:0}.load-spinner:after{content:" ";position:absolute;display:block;top:calc(50% - 13px);left:calc(50% - 13px);height:26px;width:26px;border-radius:50%;border:6px solid #fff;border-color:#515151 #777 #515151 #777;animation:spin 2s linear infinite;box-sizing:border-box}@keyframes spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}',""]),t.exports=e},85:function(t,e,r){"use strict";r.r(e);var n=r(0),o=r.n(n),i=r(40),a=function(t){var e={height:"66px",width:"100px",transition:"opacity 1s"};return o.a.createElement("div",null,["bird","birds","birds2","cat","clouds","duck","gator","hawk","lily1","lily2","lily3","lizard","moon","pink1","pink3","rabbit","red1","rocks","sea","stork","street","suncactus","sunset","yucca"].map((function(t,r){return o.a.createElement(i.a,{key:r,name:"gallery-image",style:e,src:"/assets/photos/small/".concat(t,".jpg"),href:"/assets/photos/normal/".concat(t,".jpg")})})))};function c(t){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function u(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function l(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,d(n.key),n)}}function s(t,e){return(s=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t})(t,e)}function f(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=h(t);if(e){var o=h(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return p(this,r)}}function p(t,e){if(e&&("object"===c(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function h(t){return(h=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function d(t){var e=function(t,e){if("object"!==c(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!==c(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"===c(e)?e:String(e)}var y,m,v,b=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&s(t,e)}(p,t);var e,r,n,c=f(p);function p(){return u(this,p),c.apply(this,arguments)}return e=p,(r=[{key:"componentDidMount",value:function(){p.loaded=!0}},{key:"render",value:function(){var t={height:"auto",width:"auto",transition:"opacity ".concat(p.loaded?0:4,"s")};return o.a.createElement("div",{name:"other",className:"animated fadeIn"},o.a.createElement(i.a,{name:"background-image",style:t,src:"assets/photos/lizard.jpg"}),o.a.createElement("div",{className:"container-fluid g-0"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-12 col-sm-8 offset-sm-4 "},o.a.createElement("div",{name:"card1"},o.a.createElement("h1",null,"Photography"),o.a.createElement("hr",{className:"short"}),o.a.createElement("p",null,"I started doing photography in 2019. I sell my photos on ",o.a.createElement("a",{target:"_blank",className:"lnk",href:"https://www.shutterstock.com/g/Darin+Jay+Cardin"}," Shutter Stock"),". Here are some samples of my work."),o.a.createElement("div",null,o.a.createElement(a,null)))))))}}])&&l(e.prototype,r),n&&l(e,n),Object.defineProperty(e,"prototype",{writable:!1}),p}(o.a.Component);y=b,v=!1,(m=d(m="loaded"))in y?Object.defineProperty(y,m,{value:v,enumerable:!0,configurable:!0,writable:!0}):y[m]=v;e.default=b}}]);