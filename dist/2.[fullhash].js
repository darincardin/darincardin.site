(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{40:function(e,t,r){"use strict";(function(e){var n=r(0),o=r.n(n);r(41),r(42);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(o=n.key,a=void 0,a=function(e,t){if("object"!==i(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==i(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(o,"string"),"symbol"===i(a)?a:String(a)),n)}var o,a}function c(e,t){return(c=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function l(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=u(e);if(t){var o=u(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return s(this,r)}}function s(e,t){if(t&&("object"===i(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var f=function(t){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&c(e,t)}(u,t);var r,n,i,s=l(u);function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=s.call(this,e)).elem=o.a.createRef(),t}return r=u,(n=[{key:"componentDidMount",value:function(){e(this.elem.current).loadimage(this.props.style)}},{key:"render",value:function(){return o.a.createElement("div",{ref:this.elem,name:this.props.name,src:this.props.src,title:this.props.title,newtab:this.props.newTab?"1":"",desc:this.props.desc,href:this.props.href})}}])&&a(r.prototype,n),i&&a(r,i),Object.defineProperty(r,"prototype",{writable:!1}),u}(o.a.Component);t.a=f}).call(this,r(14))},41:function(e,t,r){"use strict";(function(e){function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */r=function(){return e};var e={},n=Object.prototype,o=n.hasOwnProperty,i=Object.defineProperty||function(e,t,r){e[t]=r.value},a="function"==typeof Symbol?Symbol:{},c=a.iterator||"@@iterator",l=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,r){return e[t]=r}}function f(e,t,r,n){var o=t&&t.prototype instanceof d?t:d,a=Object.create(o.prototype),c=new j(n||[]);return i(a,"_invoke",{value:k(e,r,c)}),a}function p(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=f;var h={};function d(){}function m(){}function y(){}var v={};u(v,c,(function(){return this}));var g=Object.getPrototypeOf,b=g&&g(g(P([])));b&&b!==n&&o.call(b,c)&&(v=b);var w=y.prototype=d.prototype=Object.create(v);function x(e){["next","throw","return"].forEach((function(t){u(e,t,(function(e){return this._invoke(t,e)}))}))}function E(e,r){var n;i(this,"_invoke",{value:function(i,a){function c(){return new r((function(n,c){!function n(i,a,c,l){var s=p(e[i],e,a);if("throw"!==s.type){var u=s.arg,f=u.value;return f&&"object"==t(f)&&o.call(f,"__await")?r.resolve(f.__await).then((function(e){n("next",e,c,l)}),(function(e){n("throw",e,c,l)})):r.resolve(f).then((function(e){u.value=e,c(u)}),(function(e){return n("throw",e,c,l)}))}l(s.arg)}(i,a,n,c)}))}return n=n?n.then(c,c):c()}})}function k(e,t,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return _()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=S(a,r);if(c){if(c===h)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=p(e,t,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===h)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}function S(e,t){var r=t.method,n=e.iterator[r];if(void 0===n)return t.delegate=null,"throw"===r&&e.iterator.return&&(t.method="return",t.arg=void 0,S(e,t),"throw"===t.method)||"return"!==r&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+r+"' method")),h;var o=p(n,e.iterator,t.arg);if("throw"===o.type)return t.method="throw",t.arg=o.arg,t.delegate=null,h;var i=o.arg;return i?i.done?(t[e.resultName]=i.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,h):i:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,h)}function L(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function O(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function j(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(L,this),this.reset(!0)}function P(e){if(e){var t=e[c];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,n=function t(){for(;++r<e.length;)if(o.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return n.next=n}}return{next:_}}function _(){return{value:void 0,done:!0}}return m.prototype=y,i(w,"constructor",{value:y,configurable:!0}),i(y,"constructor",{value:m,configurable:!0}),m.displayName=u(y,s,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,u(e,s,"GeneratorFunction")),e.prototype=Object.create(w),e},e.awrap=function(e){return{__await:e}},x(E.prototype),u(E.prototype,l,(function(){return this})),e.AsyncIterator=E,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new E(f(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},x(w),u(w,s,"Generator"),u(w,c,(function(){return this})),u(w,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=P,j.prototype={constructor:j,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!e)for(var t in this)"t"===t.charAt(0)&&o.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(r,n){return a.type="throw",a.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var c=o.call(i,"catchLoc"),l=o.call(i,"finallyLoc");if(c&&l){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),h},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),O(r),h}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;O(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:P(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},e}function n(e,t,r,n,o,i,a){try{var c=e[i](a),l=c.value}catch(e){return void r(e)}c.done?t(l):Promise.resolve(l).then(n,o)}function o(e){return function(){var t=this,r=arguments;return new Promise((function(o,i){var a=e.apply(t,r);function c(e){n(a,o,i,c,l,"next",e)}function l(e){n(a,o,i,c,l,"throw",e)}c(void 0)}))}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,s(n.key),n)}}function c(e,t,r){return t&&a(e.prototype,t),r&&a(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function l(e,t,r){return(t=s(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e){var r=function(e,r){if("object"!==t(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,r||"default");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(e)}(e,"string");return"symbol"===t(r)?r:String(r)}var u={processLimit:4},f=function(){function e(){i(this,e)}var t,n;return c(e,null,[{key:"add",value:(n=o(r().mark((function t(n,o){return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.queue.push(new p(n,o)),e.workers<e.processLimit&&(e.workers++,setTimeout(e.initWorker));case 2:case"end":return t.stop()}}),t)}))),function(e,t){return n.apply(this,arguments)})},{key:"initWorker",value:(t=o(r().mark((function t(){return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(e.queue.length>0)){t.next=5;break}return t.next=3,e.process();case 3:t.next=0;break;case 5:e.workers--;case 6:case"end":return t.stop()}}),t)}))),function(){return t.apply(this,arguments)})},{key:"process",value:function(){return new Promise((function(t,r){e.queue.shift().process(t)}))}}]),e}();l(f,"queue",[]),l(f,"workers",0),l(f,"processLimit",4),e.fn.loadimageConfig=function(t){var r=e.extend(!0,{},u,t);f.processLimit=r.processLimit},e.fn.loadimage=function(t){this.each((function(r,n){f.add(e(n),t)}))};var p=c((function t(r,n){var o=this;i(this,t),l(this,"elem",null),l(this,"setStyles",(function(e){for(var t in e)o.elem.find("img").css(t,e[t])})),l(this,"process",(function(e){var t=new Image;t.src=o.elem.attr("src"),t.onload=function(){e(),o.elem.find("img").attr("src",t.src),console.log(o.elem.attr("newTab")),o.elem.attr("newTab")?(o.elem.addClass("pointer"),o.elem.click((function(){var e=o.elem.attr("href");window.open(e)}))):o.elem.attr("href")&&o.initFullScreenMode(),setTimeout((function(){o.elem.addClass("complete").removeClass("load-spinner")}))},t.onerror=function(){e(),o.elem.removeClass("load-spinner").addClass("load-error")}})),l(this,"initFullScreenMode",(function(){o.elem.addClass("pointer"),o.elem.click((function(){var t=e('<div class="fullscreen load-spinner" />');e("body").append(t);var r=new Image;r.src=o.elem.attr("href"),r.onload=function(){var e=o.elem.attr("title")||"",n=o.elem.attr("desc")||"";console.log(e),t.html('<div class="desc"><div class="title">'+e+'</div>  <div class="sub">'+n+"</div></div>"),t.removeClass("load-spinner").css({"background-image":"url('".concat(r.src,"')")}).click((function(){return t.remove()}))},r.onerror=function(){t.removeClass("load-spinner").addClass("load-error").click((function(){return t.remove()}))}}))})),this.elem=r,this.elem.addClass("loadimage load-spinner").append("<img />"),this.setStyles(n)}))}).call(this,r(14))},42:function(e,t,r){var n=r(10),o=r(43);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var i={insert:"head",singleton:!1};n(o,i);e.exports=o.locals||{}},43:function(e,t,r){(t=r(11)(!1)).push([e.i,'.load-error:after{position:absolute;top:calc(50% - 34px);left:calc(50% - 22px);height:68px;width:44px;content:"⮿";font-size:50px;color:#838383;text-align:center;box-sizing:border-box;font-family:sans-serif;line-height:74px}.fullscreen{z-index:10000;position:fixed;top:0;bottom:0;left:0;right:0;background:rgba(0,0,0,.8);background-repeat:no-repeat;background-position:center center;background-size:contain}.fullscreen.load-spinner:after{border-color:#fff rgba(0,0,0,0) #fff rgba(0,0,0,0) !important}.fullscreen.load-error:after{color:#fff}.fullscreen .desc{min-height:55px;padding:0px 5px 10px 5px;text-align:center;bottom:0;right:0;left:0;position:absolute;color:#fff;background:rgba(1,1,1,.85)}.fullscreen .title{font-size:15px}.fullscreen .sub{font-size:12px}.loadimage{display:inline-block;position:relative;border:1px solid #cbcbcb;overflow:hidden;font-size:0}.loadimage.href{cursor:pointer}.loadimage.href:hover{opacity:1}.loadimage.complete img{opacity:1}.loadimage img{min-width:50px;min-height:50px;transition:opacity 1s;display:inline-block;height:inherit;width:inherit;opacity:0}.load-spinner:after{content:" ";position:absolute;display:block;top:calc(50% - 13px);left:calc(50% - 13px);height:26px;width:26px;border-radius:50%;border:6px solid #fff;border-color:#515151 #777 #515151 #777;animation:spin 2s linear infinite;box-sizing:border-box}@keyframes spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}',""]),e.exports=t},60:function(e,t,r){var n=r(10),o=r(61);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var i={insert:"head",singleton:!1};n(o,i);e.exports=o.locals||{}},61:function(e,t,r){(t=r(11)(!1)).push([e.i,"[name=casestudy] [name=img]{float:right}@media only screen and (max-width: 767px){[name=casestudy] h1{font-size:20px !important}[name=casestudy] [name=img]{display:none}}",""]),e.exports=t},80:function(e,t,r){"use strict";r.r(t);var n=r(0),o=r.n(n),i=(r(60),r(40));t.default=function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{name:"casestudy",className:"animated fadeIn"},o.a.createElement("div",{className:"container-fluid g-0"},o.a.createElement("div",{name:"card-center"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-12"},o.a.createElement("center",null,o.a.createElement("h1",null,"Case Study "),o.a.createElement("h1",null,o.a.createElement("b",null,"Saint Paul's Church Fundraiser")))),o.a.createElement("div",{className:"col-12"},o.a.createElement("h3",null,"The Problem"),o.a.createElement(i.a,{name:"img",style:{width:"300px",height:"225px"},className:"photo",src:"assets/photos/x-church.jpg"}),"Saint Paul's Church runs a yearly fundraiser in which customers preorder lobster rolls. All the orders had to be taken over the phone. The church wished to have this process automated.",o.a.createElement("h3",null,"The Solution"),"My solution was to create a website for customers to place their orders. A form validates the data and passes it to a server/database. A super user could then log in and view/update the current orders. The site had the following results:",o.a.createElement("ul",null,o.a.createElement("li",null,"Automatically processed $3,000 worth of orders"),o.a.createElement("li",null,"Staff no longer needed to wait on phone calls "),o.a.createElement("li",null,"Staff now has a central place to store orders"))),o.a.createElement("div",{className:"col-12   col-sm-6"},o.a.createElement("h3",null,"Technical Details"),o.a.createElement("ul",null,o.a.createElement("li",null,"Client: React"),o.a.createElement("li",null,"Server: PHP"),o.a.createElement("li",null,"Database: MySQL "),o.a.createElement("li",null,"Build Tools: NodeJS + Webpack"),o.a.createElement("li",null,"Host: GoDaddy "))),o.a.createElement("div",{className:"col-12   col-sm-6"},o.a.createElement("h3",null,"Demo Links"),o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement("a",{target:"_blank",href:"https://demo.darincardin.site"},"Order Form ")," "),o.a.createElement("li",null,o.a.createElement("a",{target:"_blank",href:"https://demo.darincardin.site/login.html"},"Admin Panel")))))))))}}}]);