!function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=262)}({262:function(e,t,n){e.exports=n(263)},263:function(e,t){var n,r;n=jQuery,(r=n("body").find("#nav-toggle")).length&&r.on("click",(function(){n(this).attr("aria-expanded","false"===n(this).attr("aria-expanded")?"true":"false"),n("#nav-toggle-label").text(n("#nav-toggle-label").text()===annastiina_screenReaderText.expand_toggle?annastiina_screenReaderText.collapse_toggle:annastiina_screenReaderText.expand_toggle),n(this).attr("aria-label",n(this).attr("aria-label")===annastiina_screenReaderText.expand_toggle?annastiina_screenReaderText.collapse_toggle:annastiina_screenReaderText.expand_toggle)}))}});