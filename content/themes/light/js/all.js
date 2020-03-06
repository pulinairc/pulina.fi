/*! pulina 06-03-2020 08:02 - Roni Laukkarinen */
/*! jQuery v1.10.2 | (c) 2005, 2013 jQuery Foundation, Inc. | jquery.org/license
//@ sourceMappingURL=jquery-latest.min.map
*/
(function(e,t){var n,r,i=typeof t,o=e.location,a=e.document,s=a.documentElement,l=e.jQuery,u=e.$,c={},p=[],f="1.10.2",d=p.concat,h=p.push,g=p.slice,m=p.indexOf,y=c.toString,v=c.hasOwnProperty,b=f.trim,x=function(e,t){return new x.fn.init(e,t,r)},w=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=/\S+/g,C=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,N=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,k=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,E=/^[\],:{}\s]*$/,S=/(?:^|:|,)(?:\s*\[)+/g,A=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,j=/"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,D=/^-ms-/,L=/-([\da-z])/gi,H=function(e,t){return t.toUpperCase()},q=function(e){(a.addEventListener||"load"===e.type||"complete"===a.readyState)&&(_(),x.ready())},_=function(){a.addEventListener?(a.removeEventListener("DOMContentLoaded",q,!1),e.removeEventListener("load",q,!1)):(a.detachEvent("onreadystatechange",q),e.detachEvent("onload",q))};x.fn=x.prototype={jquery:f,constructor:x,init:function(e,n,r){var i,o;if(!e)return this;if("string"==typeof e){if(i="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:N.exec(e),!i||!i[1]&&n)return!n||n.jquery?(n||r).find(e):this.constructor(n).find(e);if(i[1]){if(n=n instanceof x?n[0]:n,x.merge(this,x.parseHTML(i[1],n&&n.nodeType?n.ownerDocument||n:a,!0)),k.test(i[1])&&x.isPlainObject(n))for(i in n)x.isFunction(this[i])?this[i](n[i]):this.attr(i,n[i]);return this}if(o=a.getElementById(i[2]),o&&o.parentNode){if(o.id!==i[2])return r.find(e);this.length=1,this[0]=o}return this.context=a,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):x.isFunction(e)?r.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),x.makeArray(e,this))},selector:"",length:0,toArray:function(){return g.call(this)},get:function(e){return null==e?this.toArray():0>e?this[this.length+e]:this[e]},pushStack:function(e){var t=x.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return x.each(this,e,t)},ready:function(e){return x.ready.promise().done(e),this},slice:function(){return this.pushStack(g.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},map:function(e){return this.pushStack(x.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:h,sort:[].sort,splice:[].splice},x.fn.init.prototype=x.fn,x.extend=x.fn.extend=function(){var e,n,r,i,o,a,s=arguments[0]||{},l=1,u=arguments.length,c=!1;for("boolean"==typeof s&&(c=s,s=arguments[1]||{},l=2),"object"==typeof s||x.isFunction(s)||(s={}),u===l&&(s=this,--l);u>l;l++)if(null!=(o=arguments[l]))for(i in o)e=s[i],r=o[i],s!==r&&(c&&r&&(x.isPlainObject(r)||(n=x.isArray(r)))?(n?(n=!1,a=e&&x.isArray(e)?e:[]):a=e&&x.isPlainObject(e)?e:{},s[i]=x.extend(c,a,r)):r!==t&&(s[i]=r));return s},x.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),noConflict:function(t){return e.$===x&&(e.$=u),t&&e.jQuery===x&&(e.jQuery=l),x},isReady:!1,readyWait:1,holdReady:function(e){e?x.readyWait++:x.ready(!0)},ready:function(e){if(e===!0?!--x.readyWait:!x.isReady){if(!a.body)return setTimeout(x.ready);x.isReady=!0,e!==!0&&--x.readyWait>0||(n.resolveWith(a,[x]),x.fn.trigger&&x(a).trigger("ready").off("ready"))}},isFunction:function(e){return"function"===x.type(e)},isArray:Array.isArray||function(e){return"array"===x.type(e)},isWindow:function(e){return null!=e&&e==e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?c[y.call(e)]||"object":typeof e},isPlainObject:function(e){var n;if(!e||"object"!==x.type(e)||e.nodeType||x.isWindow(e))return!1;try{if(e.constructor&&!v.call(e,"constructor")&&!v.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(r){return!1}if(x.support.ownLast)for(n in e)return v.call(e,n);for(n in e);return n===t||v.call(e,n)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw Error(e)},parseHTML:function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||a;var r=k.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=x.buildFragment([e],t,i),i&&x(i).remove(),x.merge([],r.childNodes))},parseJSON:function(n){return e.JSON&&e.JSON.parse?e.JSON.parse(n):null===n?n:"string"==typeof n&&(n=x.trim(n),n&&E.test(n.replace(A,"@").replace(j,"]").replace(S,"")))?Function("return "+n)():(x.error("Invalid JSON: "+n),t)},parseXML:function(n){var r,i;if(!n||"string"!=typeof n)return null;try{e.DOMParser?(i=new DOMParser,r=i.parseFromString(n,"text/xml")):(r=new ActiveXObject("Microsoft.XMLDOM"),r.async="false",r.loadXML(n))}catch(o){r=t}return r&&r.documentElement&&!r.getElementsByTagName("parsererror").length||x.error("Invalid XML: "+n),r},noop:function(){},globalEval:function(t){t&&x.trim(t)&&(e.execScript||function(t){e.eval.call(e,t)})(t)},camelCase:function(e){return e.replace(D,"ms-").replace(L,H)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var r,i=0,o=e.length,a=M(e);if(n){if(a){for(;o>i;i++)if(r=t.apply(e[i],n),r===!1)break}else for(i in e)if(r=t.apply(e[i],n),r===!1)break}else if(a){for(;o>i;i++)if(r=t.call(e[i],i,e[i]),r===!1)break}else for(i in e)if(r=t.call(e[i],i,e[i]),r===!1)break;return e},trim:b&&!b.call("\ufeff\u00a0")?function(e){return null==e?"":b.call(e)}:function(e){return null==e?"":(e+"").replace(C,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(M(Object(e))?x.merge(n,"string"==typeof e?[e]:e):h.call(n,e)),n},inArray:function(e,t,n){var r;if(t){if(m)return m.call(t,e,n);for(r=t.length,n=n?0>n?Math.max(0,r+n):n:0;r>n;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,n){var r=n.length,i=e.length,o=0;if("number"==typeof r)for(;r>o;o++)e[i++]=n[o];else while(n[o]!==t)e[i++]=n[o++];return e.length=i,e},grep:function(e,t,n){var r,i=[],o=0,a=e.length;for(n=!!n;a>o;o++)r=!!t(e[o],o),n!==r&&i.push(e[o]);return i},map:function(e,t,n){var r,i=0,o=e.length,a=M(e),s=[];if(a)for(;o>i;i++)r=t(e[i],i,n),null!=r&&(s[s.length]=r);else for(i in e)r=t(e[i],i,n),null!=r&&(s[s.length]=r);return d.apply([],s)},guid:1,proxy:function(e,n){var r,i,o;return"string"==typeof n&&(o=e[n],n=e,e=o),x.isFunction(e)?(r=g.call(arguments,2),i=function(){return e.apply(n||this,r.concat(g.call(arguments)))},i.guid=e.guid=e.guid||x.guid++,i):t},access:function(e,n,r,i,o,a,s){var l=0,u=e.length,c=null==r;if("object"===x.type(r)){o=!0;for(l in r)x.access(e,n,l,r[l],!0,a,s)}else if(i!==t&&(o=!0,x.isFunction(i)||(s=!0),c&&(s?(n.call(e,i),n=null):(c=n,n=function(e,t,n){return c.call(x(e),n)})),n))for(;u>l;l++)n(e[l],r,s?i:i.call(e[l],l,n(e[l],r)));return o?e:c?n.call(e):u?n(e[0],r):a},now:function(){return(new Date).getTime()},swap:function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i}}),x.ready.promise=function(t){if(!n)if(n=x.Deferred(),"complete"===a.readyState)setTimeout(x.ready);else if(a.addEventListener)a.addEventListener("DOMContentLoaded",q,!1),e.addEventListener("load",q,!1);else{a.attachEvent("onreadystatechange",q),e.attachEvent("onload",q);var r=!1;try{r=null==e.frameElement&&a.documentElement}catch(i){}r&&r.doScroll&&function o(){if(!x.isReady){try{r.doScroll("left")}catch(e){return setTimeout(o,50)}_(),x.ready()}}()}return n.promise(t)},x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){c["[object "+t+"]"]=t.toLowerCase()});function M(e){var t=e.length,n=x.type(e);return x.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||"function"!==n&&(0===t||"number"==typeof t&&t>0&&t-1 in e)}r=x(a),function(e,t){var n,r,i,o,a,s,l,u,c,p,f,d,h,g,m,y,v,b="sizzle"+-new Date,w=e.document,T=0,C=0,N=st(),k=st(),E=st(),S=!1,A=function(e,t){return e===t?(S=!0,0):0},j=typeof t,D=1<<31,L={}.hasOwnProperty,H=[],q=H.pop,_=H.push,M=H.push,O=H.slice,F=H.indexOf||function(e){var t=0,n=this.length;for(;n>t;t++)if(this[t]===e)return t;return-1},B="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",P="[\\x20\\t\\r\\n\\f]",R="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",W=R.replace("w","w#"),$="\\["+P+"*("+R+")"+P+"*(?:([*^$|!~]?=)"+P+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+W+")|)|)"+P+"*\\]",I=":("+R+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+$.replace(3,8)+")*)|.*)\\)|)",z=RegExp("^"+P+"+|((?:^|[^\\\\])(?:\\\\.)*)"+P+"+$","g"),X=RegExp("^"+P+"*,"+P+"*"),U=RegExp("^"+P+"*([>+~]|"+P+")"+P+"*"),V=RegExp(P+"*[+~]"),Y=RegExp("="+P+"*([^\\]'\"]*)"+P+"*\\]","g"),J=RegExp(I),G=RegExp("^"+W+"$"),Q={ID:RegExp("^#("+R+")"),CLASS:RegExp("^\\.("+R+")"),TAG:RegExp("^("+R.replace("w","w*")+")"),ATTR:RegExp("^"+$),PSEUDO:RegExp("^"+I),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+P+"*(even|odd|(([+-]|)(\\d*)n|)"+P+"*(?:([+-]|)"+P+"*(\\d+)|))"+P+"*\\)|)","i"),bool:RegExp("^(?:"+B+")$","i"),needsContext:RegExp("^"+P+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+P+"*((?:-\\d)?\\d*)"+P+"*\\)|)(?=[^-]|$)","i")},K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,et=/^(?:input|select|textarea|button)$/i,tt=/^h\d$/i,nt=/'|\\/g,rt=RegExp("\\\\([\\da-f]{1,6}"+P+"?|("+P+")|.)","ig"),it=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:0>r?String.fromCharCode(r+65536):String.fromCharCode(55296|r>>10,56320|1023&r)};try{M.apply(H=O.call(w.childNodes),w.childNodes),H[w.childNodes.length].nodeType}catch(ot){M={apply:H.length?function(e,t){_.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function at(e,t,n,i){var o,a,s,l,u,c,d,m,y,x;if((t?t.ownerDocument||t:w)!==f&&p(t),t=t||f,n=n||[],!e||"string"!=typeof e)return n;if(1!==(l=t.nodeType)&&9!==l)return[];if(h&&!i){if(o=Z.exec(e))if(s=o[1]){if(9===l){if(a=t.getElementById(s),!a||!a.parentNode)return n;if(a.id===s)return n.push(a),n}else if(t.ownerDocument&&(a=t.ownerDocument.getElementById(s))&&v(t,a)&&a.id===s)return n.push(a),n}else{if(o[2])return M.apply(n,t.getElementsByTagName(e)),n;if((s=o[3])&&r.getElementsByClassName&&t.getElementsByClassName)return M.apply(n,t.getElementsByClassName(s)),n}if(r.qsa&&(!g||!g.test(e))){if(m=d=b,y=t,x=9===l&&e,1===l&&"object"!==t.nodeName.toLowerCase()){c=mt(e),(d=t.getAttribute("id"))?m=d.replace(nt,"\\$&"):t.setAttribute("id",m),m="[id='"+m+"'] ",u=c.length;while(u--)c[u]=m+yt(c[u]);y=V.test(e)&&t.parentNode||t,x=c.join(",")}if(x)try{return M.apply(n,y.querySelectorAll(x)),n}catch(T){}finally{d||t.removeAttribute("id")}}}return kt(e.replace(z,"$1"),t,n,i)}function st(){var e=[];function t(n,r){return e.push(n+=" ")>o.cacheLength&&delete t[e.shift()],t[n]=r}return t}function lt(e){return e[b]=!0,e}function ut(e){var t=f.createElement("div");try{return!!e(t)}catch(n){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function ct(e,t){var n=e.split("|"),r=e.length;while(r--)o.attrHandle[n[r]]=t}function pt(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||D)-(~e.sourceIndex||D);if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function ft(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function dt(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function ht(e){return lt(function(t){return t=+t,lt(function(n,r){var i,o=e([],n.length,t),a=o.length;while(a--)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}s=at.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},r=at.support={},p=at.setDocument=function(e){var n=e?e.ownerDocument||e:w,i=n.defaultView;return n!==f&&9===n.nodeType&&n.documentElement?(f=n,d=n.documentElement,h=!s(n),i&&i.attachEvent&&i!==i.top&&i.attachEvent("onbeforeunload",function(){p()}),r.attributes=ut(function(e){return e.className="i",!e.getAttribute("className")}),r.getElementsByTagName=ut(function(e){return e.appendChild(n.createComment("")),!e.getElementsByTagName("*").length}),r.getElementsByClassName=ut(function(e){return e.innerHTML="<div class='a'></div><div class='a i'></div>",e.firstChild.className="i",2===e.getElementsByClassName("i").length}),r.getById=ut(function(e){return d.appendChild(e).id=b,!n.getElementsByName||!n.getElementsByName(b).length}),r.getById?(o.find.ID=function(e,t){if(typeof t.getElementById!==j&&h){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},o.filter.ID=function(e){var t=e.replace(rt,it);return function(e){return e.getAttribute("id")===t}}):(delete o.find.ID,o.filter.ID=function(e){var t=e.replace(rt,it);return function(e){var n=typeof e.getAttributeNode!==j&&e.getAttributeNode("id");return n&&n.value===t}}),o.find.TAG=r.getElementsByTagName?function(e,n){return typeof n.getElementsByTagName!==j?n.getElementsByTagName(e):t}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},o.find.CLASS=r.getElementsByClassName&&function(e,n){return typeof n.getElementsByClassName!==j&&h?n.getElementsByClassName(e):t},m=[],g=[],(r.qsa=K.test(n.querySelectorAll))&&(ut(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||g.push("\\["+P+"*(?:value|"+B+")"),e.querySelectorAll(":checked").length||g.push(":checked")}),ut(function(e){var t=n.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("t",""),e.querySelectorAll("[t^='']").length&&g.push("[*^$]="+P+"*(?:''|\"\")"),e.querySelectorAll(":enabled").length||g.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),g.push(",.*:")})),(r.matchesSelector=K.test(y=d.webkitMatchesSelector||d.mozMatchesSelector||d.oMatchesSelector||d.msMatchesSelector))&&ut(function(e){r.disconnectedMatch=y.call(e,"div"),y.call(e,"[s!='']:x"),m.push("!=",I)}),g=g.length&&RegExp(g.join("|")),m=m.length&&RegExp(m.join("|")),v=K.test(d.contains)||d.compareDocumentPosition?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},A=d.compareDocumentPosition?function(e,t){if(e===t)return S=!0,0;var i=t.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(t);return i?1&i||!r.sortDetached&&t.compareDocumentPosition(e)===i?e===n||v(w,e)?-1:t===n||v(w,t)?1:c?F.call(c,e)-F.call(c,t):0:4&i?-1:1:e.compareDocumentPosition?-1:1}:function(e,t){var r,i=0,o=e.parentNode,a=t.parentNode,s=[e],l=[t];if(e===t)return S=!0,0;if(!o||!a)return e===n?-1:t===n?1:o?-1:a?1:c?F.call(c,e)-F.call(c,t):0;if(o===a)return pt(e,t);r=e;while(r=r.parentNode)s.unshift(r);r=t;while(r=r.parentNode)l.unshift(r);while(s[i]===l[i])i++;return i?pt(s[i],l[i]):s[i]===w?-1:l[i]===w?1:0},n):f},at.matches=function(e,t){return at(e,null,null,t)},at.matchesSelector=function(e,t){if((e.ownerDocument||e)!==f&&p(e),t=t.replace(Y,"='$1']"),!(!r.matchesSelector||!h||m&&m.test(t)||g&&g.test(t)))try{var n=y.call(e,t);if(n||r.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(i){}return at(t,f,null,[e]).length>0},at.contains=function(e,t){return(e.ownerDocument||e)!==f&&p(e),v(e,t)},at.attr=function(e,n){(e.ownerDocument||e)!==f&&p(e);var i=o.attrHandle[n.toLowerCase()],a=i&&L.call(o.attrHandle,n.toLowerCase())?i(e,n,!h):t;return a===t?r.attributes||!h?e.getAttribute(n):(a=e.getAttributeNode(n))&&a.specified?a.value:null:a},at.error=function(e){throw Error("Syntax error, unrecognized expression: "+e)},at.uniqueSort=function(e){var t,n=[],i=0,o=0;if(S=!r.detectDuplicates,c=!r.sortStable&&e.slice(0),e.sort(A),S){while(t=e[o++])t===e[o]&&(i=n.push(o));while(i--)e.splice(n[i],1)}return e},a=at.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=a(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r];r++)n+=a(t);return n},o=at.selectors={cacheLength:50,createPseudo:lt,match:Q,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(rt,it),e[3]=(e[4]||e[5]||"").replace(rt,it),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||at.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&at.error(e[0]),e},PSEUDO:function(e){var n,r=!e[5]&&e[2];return Q.CHILD.test(e[0])?null:(e[3]&&e[4]!==t?e[2]=e[4]:r&&J.test(r)&&(n=mt(r,!0))&&(n=r.indexOf(")",r.length-n)-r.length)&&(e[0]=e[0].slice(0,n),e[2]=r.slice(0,n)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(rt,it).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=N[e+" "];return t||(t=RegExp("(^|"+P+")"+e+"("+P+"|$)"))&&N(e,function(e){return t.test("string"==typeof e.className&&e.className||typeof e.getAttribute!==j&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=at.attr(r,e);return null==i?"!="===t:t?(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i+" ").indexOf(n)>-1:"|="===t?i===n||i.slice(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,l){var u,c,p,f,d,h,g=o!==a?"nextSibling":"previousSibling",m=t.parentNode,y=s&&t.nodeName.toLowerCase(),v=!l&&!s;if(m){if(o){while(g){p=t;while(p=p[g])if(s?p.nodeName.toLowerCase()===y:1===p.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?m.firstChild:m.lastChild],a&&v){c=m[b]||(m[b]={}),u=c[e]||[],d=u[0]===T&&u[1],f=u[0]===T&&u[2],p=d&&m.childNodes[d];while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if(1===p.nodeType&&++f&&p===t){c[e]=[T,d,f];break}}else if(v&&(u=(t[b]||(t[b]={}))[e])&&u[0]===T)f=u[1];else while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if((s?p.nodeName.toLowerCase()===y:1===p.nodeType)&&++f&&(v&&((p[b]||(p[b]={}))[e]=[T,f]),p===t))break;return f-=i,f===r||0===f%r&&f/r>=0}}},PSEUDO:function(e,t){var n,r=o.pseudos[e]||o.setFilters[e.toLowerCase()]||at.error("unsupported pseudo: "+e);return r[b]?r(t):r.length>1?(n=[e,e,"",t],o.setFilters.hasOwnProperty(e.toLowerCase())?lt(function(e,n){var i,o=r(e,t),a=o.length;while(a--)i=F.call(e,o[a]),e[i]=!(n[i]=o[a])}):function(e){return r(e,0,n)}):r}},pseudos:{not:lt(function(e){var t=[],n=[],r=l(e.replace(z,"$1"));return r[b]?lt(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;while(s--)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),!n.pop()}}),has:lt(function(e){return function(t){return at(e,t).length>0}}),contains:lt(function(e){return function(t){return(t.textContent||t.innerText||a(t)).indexOf(e)>-1}}),lang:lt(function(e){return G.test(e||"")||at.error("unsupported lang: "+e),e=e.replace(rt,it).toLowerCase(),function(t){var n;do if(n=h?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===d},focus:function(e){return e===f.activeElement&&(!f.hasFocus||f.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeName>"@"||3===e.nodeType||4===e.nodeType)return!1;return!0},parent:function(e){return!o.pseudos.empty(e)},header:function(e){return tt.test(e.nodeName)},input:function(e){return et.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||t.toLowerCase()===e.type)},first:ht(function(){return[0]}),last:ht(function(e,t){return[t-1]}),eq:ht(function(e,t,n){return[0>n?n+t:n]}),even:ht(function(e,t){var n=0;for(;t>n;n+=2)e.push(n);return e}),odd:ht(function(e,t){var n=1;for(;t>n;n+=2)e.push(n);return e}),lt:ht(function(e,t,n){var r=0>n?n+t:n;for(;--r>=0;)e.push(r);return e}),gt:ht(function(e,t,n){var r=0>n?n+t:n;for(;t>++r;)e.push(r);return e})}},o.pseudos.nth=o.pseudos.eq;for(n in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})o.pseudos[n]=ft(n);for(n in{submit:!0,reset:!0})o.pseudos[n]=dt(n);function gt(){}gt.prototype=o.filters=o.pseudos,o.setFilters=new gt;function mt(e,t){var n,r,i,a,s,l,u,c=k[e+" "];if(c)return t?0:c.slice(0);s=e,l=[],u=o.preFilter;while(s){(!n||(r=X.exec(s)))&&(r&&(s=s.slice(r[0].length)||s),l.push(i=[])),n=!1,(r=U.exec(s))&&(n=r.shift(),i.push({value:n,type:r[0].replace(z," ")}),s=s.slice(n.length));for(a in o.filter)!(r=Q[a].exec(s))||u[a]&&!(r=u[a](r))||(n=r.shift(),i.push({value:n,type:a,matches:r}),s=s.slice(n.length));if(!n)break}return t?s.length:s?at.error(e):k(e,l).slice(0)}function yt(e){var t=0,n=e.length,r="";for(;n>t;t++)r+=e[t].value;return r}function vt(e,t,n){var r=t.dir,o=n&&"parentNode"===r,a=C++;return t.first?function(t,n,i){while(t=t[r])if(1===t.nodeType||o)return e(t,n,i)}:function(t,n,s){var l,u,c,p=T+" "+a;if(s){while(t=t[r])if((1===t.nodeType||o)&&e(t,n,s))return!0}else while(t=t[r])if(1===t.nodeType||o)if(c=t[b]||(t[b]={}),(u=c[r])&&u[0]===p){if((l=u[1])===!0||l===i)return l===!0}else if(u=c[r]=[p],u[1]=e(t,n,s)||i,u[1]===!0)return!0}}function bt(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function xt(e,t,n,r,i){var o,a=[],s=0,l=e.length,u=null!=t;for(;l>s;s++)(o=e[s])&&(!n||n(o,r,i))&&(a.push(o),u&&t.push(s));return a}function wt(e,t,n,r,i,o){return r&&!r[b]&&(r=wt(r)),i&&!i[b]&&(i=wt(i,o)),lt(function(o,a,s,l){var u,c,p,f=[],d=[],h=a.length,g=o||Nt(t||"*",s.nodeType?[s]:s,[]),m=!e||!o&&t?g:xt(g,f,e,s,l),y=n?i||(o?e:h||r)?[]:a:m;if(n&&n(m,y,s,l),r){u=xt(y,d),r(u,[],s,l),c=u.length;while(c--)(p=u[c])&&(y[d[c]]=!(m[d[c]]=p))}if(o){if(i||e){if(i){u=[],c=y.length;while(c--)(p=y[c])&&u.push(m[c]=p);i(null,y=[],u,l)}c=y.length;while(c--)(p=y[c])&&(u=i?F.call(o,p):f[c])>-1&&(o[u]=!(a[u]=p))}}else y=xt(y===a?y.splice(h,y.length):y),i?i(null,a,y,l):M.apply(a,y)})}function Tt(e){var t,n,r,i=e.length,a=o.relative[e[0].type],s=a||o.relative[" "],l=a?1:0,c=vt(function(e){return e===t},s,!0),p=vt(function(e){return F.call(t,e)>-1},s,!0),f=[function(e,n,r){return!a&&(r||n!==u)||((t=n).nodeType?c(e,n,r):p(e,n,r))}];for(;i>l;l++)if(n=o.relative[e[l].type])f=[vt(bt(f),n)];else{if(n=o.filter[e[l].type].apply(null,e[l].matches),n[b]){for(r=++l;i>r;r++)if(o.relative[e[r].type])break;return wt(l>1&&bt(f),l>1&&yt(e.slice(0,l-1).concat({value:" "===e[l-2].type?"*":""})).replace(z,"$1"),n,r>l&&Tt(e.slice(l,r)),i>r&&Tt(e=e.slice(r)),i>r&&yt(e))}f.push(n)}return bt(f)}function Ct(e,t){var n=0,r=t.length>0,a=e.length>0,s=function(s,l,c,p,d){var h,g,m,y=[],v=0,b="0",x=s&&[],w=null!=d,C=u,N=s||a&&o.find.TAG("*",d&&l.parentNode||l),k=T+=null==C?1:Math.random()||.1;for(w&&(u=l!==f&&l,i=n);null!=(h=N[b]);b++){if(a&&h){g=0;while(m=e[g++])if(m(h,l,c)){p.push(h);break}w&&(T=k,i=++n)}r&&((h=!m&&h)&&v--,s&&x.push(h))}if(v+=b,r&&b!==v){g=0;while(m=t[g++])m(x,y,l,c);if(s){if(v>0)while(b--)x[b]||y[b]||(y[b]=q.call(p));y=xt(y)}M.apply(p,y),w&&!s&&y.length>0&&v+t.length>1&&at.uniqueSort(p)}return w&&(T=k,u=C),x};return r?lt(s):s}l=at.compile=function(e,t){var n,r=[],i=[],o=E[e+" "];if(!o){t||(t=mt(e)),n=t.length;while(n--)o=Tt(t[n]),o[b]?r.push(o):i.push(o);o=E(e,Ct(i,r))}return o};function Nt(e,t,n){var r=0,i=t.length;for(;i>r;r++)at(e,t[r],n);return n}function kt(e,t,n,i){var a,s,u,c,p,f=mt(e);if(!i&&1===f.length){if(s=f[0]=f[0].slice(0),s.length>2&&"ID"===(u=s[0]).type&&r.getById&&9===t.nodeType&&h&&o.relative[s[1].type]){if(t=(o.find.ID(u.matches[0].replace(rt,it),t)||[])[0],!t)return n;e=e.slice(s.shift().value.length)}a=Q.needsContext.test(e)?0:s.length;while(a--){if(u=s[a],o.relative[c=u.type])break;if((p=o.find[c])&&(i=p(u.matches[0].replace(rt,it),V.test(s[0].type)&&t.parentNode||t))){if(s.splice(a,1),e=i.length&&yt(s),!e)return M.apply(n,i),n;break}}}return l(e,f)(i,t,!h,n,V.test(e)),n}r.sortStable=b.split("").sort(A).join("")===b,r.detectDuplicates=S,p(),r.sortDetached=ut(function(e){return 1&e.compareDocumentPosition(f.createElement("div"))}),ut(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||ct("type|href|height|width",function(e,n,r){return r?t:e.getAttribute(n,"type"===n.toLowerCase()?1:2)}),r.attributes&&ut(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||ct("value",function(e,n,r){return r||"input"!==e.nodeName.toLowerCase()?t:e.defaultValue}),ut(function(e){return null==e.getAttribute("disabled")})||ct(B,function(e,n,r){var i;return r?t:(i=e.getAttributeNode(n))&&i.specified?i.value:e[n]===!0?n.toLowerCase():null}),x.find=at,x.expr=at.selectors,x.expr[":"]=x.expr.pseudos,x.unique=at.uniqueSort,x.text=at.getText,x.isXMLDoc=at.isXML,x.contains=at.contains}(e);var O={};function F(e){var t=O[e]={};return x.each(e.match(T)||[],function(e,n){t[n]=!0}),t}x.Callbacks=function(e){e="string"==typeof e?O[e]||F(e):x.extend({},e);var n,r,i,o,a,s,l=[],u=!e.once&&[],c=function(t){for(r=e.memory&&t,i=!0,a=s||0,s=0,o=l.length,n=!0;l&&o>a;a++)if(l[a].apply(t[0],t[1])===!1&&e.stopOnFalse){r=!1;break}n=!1,l&&(u?u.length&&c(u.shift()):r?l=[]:p.disable())},p={add:function(){if(l){var t=l.length;(function i(t){x.each(t,function(t,n){var r=x.type(n);"function"===r?e.unique&&p.has(n)||l.push(n):n&&n.length&&"string"!==r&&i(n)})})(arguments),n?o=l.length:r&&(s=t,c(r))}return this},remove:function(){return l&&x.each(arguments,function(e,t){var r;while((r=x.inArray(t,l,r))>-1)l.splice(r,1),n&&(o>=r&&o--,a>=r&&a--)}),this},has:function(e){return e?x.inArray(e,l)>-1:!(!l||!l.length)},empty:function(){return l=[],o=0,this},disable:function(){return l=u=r=t,this},disabled:function(){return!l},lock:function(){return u=t,r||p.disable(),this},locked:function(){return!u},fireWith:function(e,t){return!l||i&&!u||(t=t||[],t=[e,t.slice?t.slice():t],n?u.push(t):c(t)),this},fire:function(){return p.fireWith(this,arguments),this},fired:function(){return!!i}};return p},x.extend({Deferred:function(e){var t=[["resolve","done",x.Callbacks("once memory"),"resolved"],["reject","fail",x.Callbacks("once memory"),"rejected"],["notify","progress",x.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return x.Deferred(function(n){x.each(t,function(t,o){var a=o[0],s=x.isFunction(e[t])&&e[t];i[o[1]](function(){var e=s&&s.apply(this,arguments);e&&x.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[a+"With"](this===r?n.promise():this,s?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?x.extend(e,r):r}},i={};return r.pipe=r.then,x.each(t,function(e,o){var a=o[2],s=o[3];r[o[1]]=a.add,s&&a.add(function(){n=s},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=a.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=g.call(arguments),r=n.length,i=1!==r||e&&x.isFunction(e.promise)?r:0,o=1===i?e:x.Deferred(),a=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?g.call(arguments):r,n===s?o.notifyWith(t,n):--i||o.resolveWith(t,n)}},s,l,u;if(r>1)for(s=Array(r),l=Array(r),u=Array(r);r>t;t++)n[t]&&x.isFunction(n[t].promise)?n[t].promise().done(a(t,u,n)).fail(o.reject).progress(a(t,l,s)):--i;return i||o.resolveWith(u,n),o.promise()}}),x.support=function(t){var n,r,o,s,l,u,c,p,f,d=a.createElement("div");if(d.setAttribute("className","t"),d.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",n=d.getElementsByTagName("*")||[],r=d.getElementsByTagName("a")[0],!r||!r.style||!n.length)return t;s=a.createElement("select"),u=s.appendChild(a.createElement("option")),o=d.getElementsByTagName("input")[0],r.style.cssText="top:1px;float:left;opacity:.5",t.getSetAttribute="t"!==d.className,t.leadingWhitespace=3===d.firstChild.nodeType,t.tbody=!d.getElementsByTagName("tbody").length,t.htmlSerialize=!!d.getElementsByTagName("link").length,t.style=/top/.test(r.getAttribute("style")),t.hrefNormalized="/a"===r.getAttribute("href"),t.opacity=/^0.5/.test(r.style.opacity),t.cssFloat=!!r.style.cssFloat,t.checkOn=!!o.value,t.optSelected=u.selected,t.enctype=!!a.createElement("form").enctype,t.html5Clone="<:nav></:nav>"!==a.createElement("nav").cloneNode(!0).outerHTML,t.inlineBlockNeedsLayout=!1,t.shrinkWrapBlocks=!1,t.pixelPosition=!1,t.deleteExpando=!0,t.noCloneEvent=!0,t.reliableMarginRight=!0,t.boxSizingReliable=!0,o.checked=!0,t.noCloneChecked=o.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!u.disabled;try{delete d.test}catch(h){t.deleteExpando=!1}o=a.createElement("input"),o.setAttribute("value",""),t.input=""===o.getAttribute("value"),o.value="t",o.setAttribute("type","radio"),t.radioValue="t"===o.value,o.setAttribute("checked","t"),o.setAttribute("name","t"),l=a.createDocumentFragment(),l.appendChild(o),t.appendChecked=o.checked,t.checkClone=l.cloneNode(!0).cloneNode(!0).lastChild.checked,d.attachEvent&&(d.attachEvent("onclick",function(){t.noCloneEvent=!1}),d.cloneNode(!0).click());for(f in{submit:!0,change:!0,focusin:!0})d.setAttribute(c="on"+f,"t"),t[f+"Bubbles"]=c in e||d.attributes[c].expando===!1;d.style.backgroundClip="content-box",d.cloneNode(!0).style.backgroundClip="",t.clearCloneStyle="content-box"===d.style.backgroundClip;for(f in x(t))break;return t.ownLast="0"!==f,x(function(){var n,r,o,s="padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",l=a.getElementsByTagName("body")[0];l&&(n=a.createElement("div"),n.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",l.appendChild(n).appendChild(d),d.innerHTML="<table><tr><td></td><td>t</td></tr></table>",o=d.getElementsByTagName("td"),o[0].style.cssText="padding:0;margin:0;border:0;display:none",p=0===o[0].offsetHeight,o[0].style.display="",o[1].style.display="none",t.reliableHiddenOffsets=p&&0===o[0].offsetHeight,d.innerHTML="",d.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",x.swap(l,null!=l.style.zoom?{zoom:1}:{},function(){t.boxSizing=4===d.offsetWidth}),e.getComputedStyle&&(t.pixelPosition="1%"!==(e.getComputedStyle(d,null)||{}).top,t.boxSizingReliable="4px"===(e.getComputedStyle(d,null)||{width:"4px"}).width,r=d.appendChild(a.createElement("div")),r.style.cssText=d.style.cssText=s,r.style.marginRight=r.style.width="0",d.style.width="1px",t.reliableMarginRight=!parseFloat((e.getComputedStyle(r,null)||{}).marginRight)),typeof d.style.zoom!==i&&(d.innerHTML="",d.style.cssText=s+"width:1px;padding:1px;display:inline;zoom:1",t.inlineBlockNeedsLayout=3===d.offsetWidth,d.style.display="block",d.innerHTML="<div></div>",d.firstChild.style.width="5px",t.shrinkWrapBlocks=3!==d.offsetWidth,t.inlineBlockNeedsLayout&&(l.style.zoom=1)),l.removeChild(n),n=d=o=r=null)}),n=s=l=u=r=o=null,t
}({});var B=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,P=/([A-Z])/g;function R(e,n,r,i){if(x.acceptData(e)){var o,a,s=x.expando,l=e.nodeType,u=l?x.cache:e,c=l?e[s]:e[s]&&s;if(c&&u[c]&&(i||u[c].data)||r!==t||"string"!=typeof n)return c||(c=l?e[s]=p.pop()||x.guid++:s),u[c]||(u[c]=l?{}:{toJSON:x.noop}),("object"==typeof n||"function"==typeof n)&&(i?u[c]=x.extend(u[c],n):u[c].data=x.extend(u[c].data,n)),a=u[c],i||(a.data||(a.data={}),a=a.data),r!==t&&(a[x.camelCase(n)]=r),"string"==typeof n?(o=a[n],null==o&&(o=a[x.camelCase(n)])):o=a,o}}function W(e,t,n){if(x.acceptData(e)){var r,i,o=e.nodeType,a=o?x.cache:e,s=o?e[x.expando]:x.expando;if(a[s]){if(t&&(r=n?a[s]:a[s].data)){x.isArray(t)?t=t.concat(x.map(t,x.camelCase)):t in r?t=[t]:(t=x.camelCase(t),t=t in r?[t]:t.split(" ")),i=t.length;while(i--)delete r[t[i]];if(n?!I(r):!x.isEmptyObject(r))return}(n||(delete a[s].data,I(a[s])))&&(o?x.cleanData([e],!0):x.support.deleteExpando||a!=a.window?delete a[s]:a[s]=null)}}}x.extend({cache:{},noData:{applet:!0,embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(e){return e=e.nodeType?x.cache[e[x.expando]]:e[x.expando],!!e&&!I(e)},data:function(e,t,n){return R(e,t,n)},removeData:function(e,t){return W(e,t)},_data:function(e,t,n){return R(e,t,n,!0)},_removeData:function(e,t){return W(e,t,!0)},acceptData:function(e){if(e.nodeType&&1!==e.nodeType&&9!==e.nodeType)return!1;var t=e.nodeName&&x.noData[e.nodeName.toLowerCase()];return!t||t!==!0&&e.getAttribute("classid")===t}}),x.fn.extend({data:function(e,n){var r,i,o=null,a=0,s=this[0];if(e===t){if(this.length&&(o=x.data(s),1===s.nodeType&&!x._data(s,"parsedAttrs"))){for(r=s.attributes;r.length>a;a++)i=r[a].name,0===i.indexOf("data-")&&(i=x.camelCase(i.slice(5)),$(s,i,o[i]));x._data(s,"parsedAttrs",!0)}return o}return"object"==typeof e?this.each(function(){x.data(this,e)}):arguments.length>1?this.each(function(){x.data(this,e,n)}):s?$(s,e,x.data(s,e)):null},removeData:function(e){return this.each(function(){x.removeData(this,e)})}});function $(e,n,r){if(r===t&&1===e.nodeType){var i="data-"+n.replace(P,"-$1").toLowerCase();if(r=e.getAttribute(i),"string"==typeof r){try{r="true"===r?!0:"false"===r?!1:"null"===r?null:+r+""===r?+r:B.test(r)?x.parseJSON(r):r}catch(o){}x.data(e,n,r)}else r=t}return r}function I(e){var t;for(t in e)if(("data"!==t||!x.isEmptyObject(e[t]))&&"toJSON"!==t)return!1;return!0}x.extend({queue:function(e,n,r){var i;return e?(n=(n||"fx")+"queue",i=x._data(e,n),r&&(!i||x.isArray(r)?i=x._data(e,n,x.makeArray(r)):i.push(r)),i||[]):t},dequeue:function(e,t){t=t||"fx";var n=x.queue(e,t),r=n.length,i=n.shift(),o=x._queueHooks(e,t),a=function(){x.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return x._data(e,n)||x._data(e,n,{empty:x.Callbacks("once memory").add(function(){x._removeData(e,t+"queue"),x._removeData(e,n)})})}}),x.fn.extend({queue:function(e,n){var r=2;return"string"!=typeof e&&(n=e,e="fx",r--),r>arguments.length?x.queue(this[0],e):n===t?this:this.each(function(){var t=x.queue(this,e,n);x._queueHooks(this,e),"fx"===e&&"inprogress"!==t[0]&&x.dequeue(this,e)})},dequeue:function(e){return this.each(function(){x.dequeue(this,e)})},delay:function(e,t){return e=x.fx?x.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,n){var r,i=1,o=x.Deferred(),a=this,s=this.length,l=function(){--i||o.resolveWith(a,[a])};"string"!=typeof e&&(n=e,e=t),e=e||"fx";while(s--)r=x._data(a[s],e+"queueHooks"),r&&r.empty&&(i++,r.empty.add(l));return l(),o.promise(n)}});var z,X,U=/[\t\r\n\f]/g,V=/\r/g,Y=/^(?:input|select|textarea|button|object)$/i,J=/^(?:a|area)$/i,G=/^(?:checked|selected)$/i,Q=x.support.getSetAttribute,K=x.support.input;x.fn.extend({attr:function(e,t){return x.access(this,x.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){x.removeAttr(this,e)})},prop:function(e,t){return x.access(this,x.prop,e,t,arguments.length>1)},removeProp:function(e){return e=x.propFix[e]||e,this.each(function(){try{this[e]=t,delete this[e]}catch(n){}})},addClass:function(e){var t,n,r,i,o,a=0,s=this.length,l="string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).addClass(e.call(this,t,this.className))});if(l)for(t=(e||"").match(T)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(U," "):" ")){o=0;while(i=t[o++])0>r.indexOf(" "+i+" ")&&(r+=i+" ");n.className=x.trim(r)}return this},removeClass:function(e){var t,n,r,i,o,a=0,s=this.length,l=0===arguments.length||"string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).removeClass(e.call(this,t,this.className))});if(l)for(t=(e||"").match(T)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(U," "):"")){o=0;while(i=t[o++])while(r.indexOf(" "+i+" ")>=0)r=r.replace(" "+i+" "," ");n.className=e?x.trim(r):""}return this},toggleClass:function(e,t){var n=typeof e;return"boolean"==typeof t&&"string"===n?t?this.addClass(e):this.removeClass(e):x.isFunction(e)?this.each(function(n){x(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if("string"===n){var t,r=0,o=x(this),a=e.match(T)||[];while(t=a[r++])o.hasClass(t)?o.removeClass(t):o.addClass(t)}else(n===i||"boolean"===n)&&(this.className&&x._data(this,"__className__",this.className),this.className=this.className||e===!1?"":x._data(this,"__className__")||"")})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(U," ").indexOf(t)>=0)return!0;return!1},val:function(e){var n,r,i,o=this[0];{if(arguments.length)return i=x.isFunction(e),this.each(function(n){var o;1===this.nodeType&&(o=i?e.call(this,n,x(this).val()):e,null==o?o="":"number"==typeof o?o+="":x.isArray(o)&&(o=x.map(o,function(e){return null==e?"":e+""})),r=x.valHooks[this.type]||x.valHooks[this.nodeName.toLowerCase()],r&&"set"in r&&r.set(this,o,"value")!==t||(this.value=o))});if(o)return r=x.valHooks[o.type]||x.valHooks[o.nodeName.toLowerCase()],r&&"get"in r&&(n=r.get(o,"value"))!==t?n:(n=o.value,"string"==typeof n?n.replace(V,""):null==n?"":n)}}}),x.extend({valHooks:{option:{get:function(e){var t=x.find.attr(e,"value");return null!=t?t:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,a=o?null:[],s=o?i+1:r.length,l=0>i?s:o?i:0;for(;s>l;l++)if(n=r[l],!(!n.selected&&l!==i||(x.support.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&x.nodeName(n.parentNode,"optgroup"))){if(t=x(n).val(),o)return t;a.push(t)}return a},set:function(e,t){var n,r,i=e.options,o=x.makeArray(t),a=i.length;while(a--)r=i[a],(r.selected=x.inArray(x(r).val(),o)>=0)&&(n=!0);return n||(e.selectedIndex=-1),o}}},attr:function(e,n,r){var o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return typeof e.getAttribute===i?x.prop(e,n,r):(1===s&&x.isXMLDoc(e)||(n=n.toLowerCase(),o=x.attrHooks[n]||(x.expr.match.bool.test(n)?X:z)),r===t?o&&"get"in o&&null!==(a=o.get(e,n))?a:(a=x.find.attr(e,n),null==a?t:a):null!==r?o&&"set"in o&&(a=o.set(e,r,n))!==t?a:(e.setAttribute(n,r+""),r):(x.removeAttr(e,n),t))},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(T);if(o&&1===e.nodeType)while(n=o[i++])r=x.propFix[n]||n,x.expr.match.bool.test(n)?K&&Q||!G.test(n)?e[r]=!1:e[x.camelCase("default-"+n)]=e[r]=!1:x.attr(e,n,""),e.removeAttribute(Q?n:r)},attrHooks:{type:{set:function(e,t){if(!x.support.radioValue&&"radio"===t&&x.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},propFix:{"for":"htmlFor","class":"className"},prop:function(e,n,r){var i,o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return a=1!==s||!x.isXMLDoc(e),a&&(n=x.propFix[n]||n,o=x.propHooks[n]),r!==t?o&&"set"in o&&(i=o.set(e,r,n))!==t?i:e[n]=r:o&&"get"in o&&null!==(i=o.get(e,n))?i:e[n]},propHooks:{tabIndex:{get:function(e){var t=x.find.attr(e,"tabindex");return t?parseInt(t,10):Y.test(e.nodeName)||J.test(e.nodeName)&&e.href?0:-1}}}}),X={set:function(e,t,n){return t===!1?x.removeAttr(e,n):K&&Q||!G.test(n)?e.setAttribute(!Q&&x.propFix[n]||n,n):e[x.camelCase("default-"+n)]=e[n]=!0,n}},x.each(x.expr.match.bool.source.match(/\w+/g),function(e,n){var r=x.expr.attrHandle[n]||x.find.attr;x.expr.attrHandle[n]=K&&Q||!G.test(n)?function(e,n,i){var o=x.expr.attrHandle[n],a=i?t:(x.expr.attrHandle[n]=t)!=r(e,n,i)?n.toLowerCase():null;return x.expr.attrHandle[n]=o,a}:function(e,n,r){return r?t:e[x.camelCase("default-"+n)]?n.toLowerCase():null}}),K&&Q||(x.attrHooks.value={set:function(e,n,r){return x.nodeName(e,"input")?(e.defaultValue=n,t):z&&z.set(e,n,r)}}),Q||(z={set:function(e,n,r){var i=e.getAttributeNode(r);return i||e.setAttributeNode(i=e.ownerDocument.createAttribute(r)),i.value=n+="","value"===r||n===e.getAttribute(r)?n:t}},x.expr.attrHandle.id=x.expr.attrHandle.name=x.expr.attrHandle.coords=function(e,n,r){var i;return r?t:(i=e.getAttributeNode(n))&&""!==i.value?i.value:null},x.valHooks.button={get:function(e,n){var r=e.getAttributeNode(n);return r&&r.specified?r.value:t},set:z.set},x.attrHooks.contenteditable={set:function(e,t,n){z.set(e,""===t?!1:t,n)}},x.each(["width","height"],function(e,n){x.attrHooks[n]={set:function(e,r){return""===r?(e.setAttribute(n,"auto"),r):t}}})),x.support.hrefNormalized||x.each(["href","src"],function(e,t){x.propHooks[t]={get:function(e){return e.getAttribute(t,4)}}}),x.support.style||(x.attrHooks.style={get:function(e){return e.style.cssText||t},set:function(e,t){return e.style.cssText=t+""}}),x.support.optSelected||(x.propHooks.selected={get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}}),x.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){x.propFix[this.toLowerCase()]=this}),x.support.enctype||(x.propFix.enctype="encoding"),x.each(["radio","checkbox"],function(){x.valHooks[this]={set:function(e,n){return x.isArray(n)?e.checked=x.inArray(x(e).val(),n)>=0:t}},x.support.checkOn||(x.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})});var Z=/^(?:input|select|textarea)$/i,et=/^key/,tt=/^(?:mouse|contextmenu)|click/,nt=/^(?:focusinfocus|focusoutblur)$/,rt=/^([^.]*)(?:\.(.+)|)$/;function it(){return!0}function ot(){return!1}function at(){try{return a.activeElement}catch(e){}}x.event={global:{},add:function(e,n,r,o,a){var s,l,u,c,p,f,d,h,g,m,y,v=x._data(e);if(v){r.handler&&(c=r,r=c.handler,a=c.selector),r.guid||(r.guid=x.guid++),(l=v.events)||(l=v.events={}),(f=v.handle)||(f=v.handle=function(e){return typeof x===i||e&&x.event.triggered===e.type?t:x.event.dispatch.apply(f.elem,arguments)},f.elem=e),n=(n||"").match(T)||[""],u=n.length;while(u--)s=rt.exec(n[u])||[],g=y=s[1],m=(s[2]||"").split(".").sort(),g&&(p=x.event.special[g]||{},g=(a?p.delegateType:p.bindType)||g,p=x.event.special[g]||{},d=x.extend({type:g,origType:y,data:o,handler:r,guid:r.guid,selector:a,needsContext:a&&x.expr.match.needsContext.test(a),namespace:m.join(".")},c),(h=l[g])||(h=l[g]=[],h.delegateCount=0,p.setup&&p.setup.call(e,o,m,f)!==!1||(e.addEventListener?e.addEventListener(g,f,!1):e.attachEvent&&e.attachEvent("on"+g,f))),p.add&&(p.add.call(e,d),d.handler.guid||(d.handler.guid=r.guid)),a?h.splice(h.delegateCount++,0,d):h.push(d),x.event.global[g]=!0);e=null}},remove:function(e,t,n,r,i){var o,a,s,l,u,c,p,f,d,h,g,m=x.hasData(e)&&x._data(e);if(m&&(c=m.events)){t=(t||"").match(T)||[""],u=t.length;while(u--)if(s=rt.exec(t[u])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){p=x.event.special[d]||{},d=(r?p.delegateType:p.bindType)||d,f=c[d]||[],s=s[2]&&RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),l=o=f.length;while(o--)a=f[o],!i&&g!==a.origType||n&&n.guid!==a.guid||s&&!s.test(a.namespace)||r&&r!==a.selector&&("**"!==r||!a.selector)||(f.splice(o,1),a.selector&&f.delegateCount--,p.remove&&p.remove.call(e,a));l&&!f.length&&(p.teardown&&p.teardown.call(e,h,m.handle)!==!1||x.removeEvent(e,d,m.handle),delete c[d])}else for(d in c)x.event.remove(e,d+t[u],n,r,!0);x.isEmptyObject(c)&&(delete m.handle,x._removeData(e,"events"))}},trigger:function(n,r,i,o){var s,l,u,c,p,f,d,h=[i||a],g=v.call(n,"type")?n.type:n,m=v.call(n,"namespace")?n.namespace.split("."):[];if(u=f=i=i||a,3!==i.nodeType&&8!==i.nodeType&&!nt.test(g+x.event.triggered)&&(g.indexOf(".")>=0&&(m=g.split("."),g=m.shift(),m.sort()),l=0>g.indexOf(":")&&"on"+g,n=n[x.expando]?n:new x.Event(g,"object"==typeof n&&n),n.isTrigger=o?2:3,n.namespace=m.join("."),n.namespace_re=n.namespace?RegExp("(^|\\.)"+m.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,n.result=t,n.target||(n.target=i),r=null==r?[n]:x.makeArray(r,[n]),p=x.event.special[g]||{},o||!p.trigger||p.trigger.apply(i,r)!==!1)){if(!o&&!p.noBubble&&!x.isWindow(i)){for(c=p.delegateType||g,nt.test(c+g)||(u=u.parentNode);u;u=u.parentNode)h.push(u),f=u;f===(i.ownerDocument||a)&&h.push(f.defaultView||f.parentWindow||e)}d=0;while((u=h[d++])&&!n.isPropagationStopped())n.type=d>1?c:p.bindType||g,s=(x._data(u,"events")||{})[n.type]&&x._data(u,"handle"),s&&s.apply(u,r),s=l&&u[l],s&&x.acceptData(u)&&s.apply&&s.apply(u,r)===!1&&n.preventDefault();if(n.type=g,!o&&!n.isDefaultPrevented()&&(!p._default||p._default.apply(h.pop(),r)===!1)&&x.acceptData(i)&&l&&i[g]&&!x.isWindow(i)){f=i[l],f&&(i[l]=null),x.event.triggered=g;try{i[g]()}catch(y){}x.event.triggered=t,f&&(i[l]=f)}return n.result}},dispatch:function(e){e=x.event.fix(e);var n,r,i,o,a,s=[],l=g.call(arguments),u=(x._data(this,"events")||{})[e.type]||[],c=x.event.special[e.type]||{};if(l[0]=e,e.delegateTarget=this,!c.preDispatch||c.preDispatch.call(this,e)!==!1){s=x.event.handlers.call(this,e,u),n=0;while((o=s[n++])&&!e.isPropagationStopped()){e.currentTarget=o.elem,a=0;while((i=o.handlers[a++])&&!e.isImmediatePropagationStopped())(!e.namespace_re||e.namespace_re.test(i.namespace))&&(e.handleObj=i,e.data=i.data,r=((x.event.special[i.origType]||{}).handle||i.handler).apply(o.elem,l),r!==t&&(e.result=r)===!1&&(e.preventDefault(),e.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,e),e.result}},handlers:function(e,n){var r,i,o,a,s=[],l=n.delegateCount,u=e.target;if(l&&u.nodeType&&(!e.button||"click"!==e.type))for(;u!=this;u=u.parentNode||this)if(1===u.nodeType&&(u.disabled!==!0||"click"!==e.type)){for(o=[],a=0;l>a;a++)i=n[a],r=i.selector+" ",o[r]===t&&(o[r]=i.needsContext?x(r,this).index(u)>=0:x.find(r,this,null,[u]).length),o[r]&&o.push(i);o.length&&s.push({elem:u,handlers:o})}return n.length>l&&s.push({elem:this,handlers:n.slice(l)}),s},fix:function(e){if(e[x.expando])return e;var t,n,r,i=e.type,o=e,s=this.fixHooks[i];s||(this.fixHooks[i]=s=tt.test(i)?this.mouseHooks:et.test(i)?this.keyHooks:{}),r=s.props?this.props.concat(s.props):this.props,e=new x.Event(o),t=r.length;while(t--)n=r[t],e[n]=o[n];return e.target||(e.target=o.srcElement||a),3===e.target.nodeType&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,s.filter?s.filter(e,o):e},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,n){var r,i,o,s=n.button,l=n.fromElement;return null==e.pageX&&null!=n.clientX&&(i=e.target.ownerDocument||a,o=i.documentElement,r=i.body,e.pageX=n.clientX+(o&&o.scrollLeft||r&&r.scrollLeft||0)-(o&&o.clientLeft||r&&r.clientLeft||0),e.pageY=n.clientY+(o&&o.scrollTop||r&&r.scrollTop||0)-(o&&o.clientTop||r&&r.clientTop||0)),!e.relatedTarget&&l&&(e.relatedTarget=l===e.target?n.toElement:l),e.which||s===t||(e.which=1&s?1:2&s?3:4&s?2:0),e}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==at()&&this.focus)try{return this.focus(),!1}catch(e){}},delegateType:"focusin"},blur:{trigger:function(){return this===at()&&this.blur?(this.blur(),!1):t},delegateType:"focusout"},click:{trigger:function(){return x.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):t},_default:function(e){return x.nodeName(e.target,"a")}},beforeunload:{postDispatch:function(e){e.result!==t&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=x.extend(new x.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?x.event.trigger(i,null,t):x.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},x.removeEvent=a.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,t,n){var r="on"+t;e.detachEvent&&(typeof e[r]===i&&(e[r]=null),e.detachEvent(r,n))},x.Event=function(e,n){return this instanceof x.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.returnValue===!1||e.getPreventDefault&&e.getPreventDefault()?it:ot):this.type=e,n&&x.extend(this,n),this.timeStamp=e&&e.timeStamp||x.now(),this[x.expando]=!0,t):new x.Event(e,n)},x.Event.prototype={isDefaultPrevented:ot,isPropagationStopped:ot,isImmediatePropagationStopped:ot,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=it,e&&(e.preventDefault?e.preventDefault():e.returnValue=!1)},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=it,e&&(e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=it,this.stopPropagation()}},x.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){x.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return(!i||i!==r&&!x.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),x.support.submitBubbles||(x.event.special.submit={setup:function(){return x.nodeName(this,"form")?!1:(x.event.add(this,"click._submit keypress._submit",function(e){var n=e.target,r=x.nodeName(n,"input")||x.nodeName(n,"button")?n.form:t;r&&!x._data(r,"submitBubbles")&&(x.event.add(r,"submit._submit",function(e){e._submit_bubble=!0}),x._data(r,"submitBubbles",!0))}),t)},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&x.event.simulate("submit",this.parentNode,e,!0))},teardown:function(){return x.nodeName(this,"form")?!1:(x.event.remove(this,"._submit"),t)}}),x.support.changeBubbles||(x.event.special.change={setup:function(){return Z.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(x.event.add(this,"propertychange._change",function(e){"checked"===e.originalEvent.propertyName&&(this._just_changed=!0)}),x.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),x.event.simulate("change",this,e,!0)})),!1):(x.event.add(this,"beforeactivate._change",function(e){var t=e.target;Z.test(t.nodeName)&&!x._data(t,"changeBubbles")&&(x.event.add(t,"change._change",function(e){!this.parentNode||e.isSimulated||e.isTrigger||x.event.simulate("change",this.parentNode,e,!0)}),x._data(t,"changeBubbles",!0))}),t)},handle:function(e){var n=e.target;return this!==n||e.isSimulated||e.isTrigger||"radio"!==n.type&&"checkbox"!==n.type?e.handleObj.handler.apply(this,arguments):t},teardown:function(){return x.event.remove(this,"._change"),!Z.test(this.nodeName)}}),x.support.focusinBubbles||x.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){x.event.simulate(t,e.target,x.event.fix(e),!0)};x.event.special[t]={setup:function(){0===n++&&a.addEventListener(e,r,!0)},teardown:function(){0===--n&&a.removeEventListener(e,r,!0)}}}),x.fn.extend({on:function(e,n,r,i,o){var a,s;if("object"==typeof e){"string"!=typeof n&&(r=r||n,n=t);for(a in e)this.on(a,n,r,e[a],o);return this}if(null==r&&null==i?(i=n,r=n=t):null==i&&("string"==typeof n?(i=r,r=t):(i=r,r=n,n=t)),i===!1)i=ot;else if(!i)return this;return 1===o&&(s=i,i=function(e){return x().off(e),s.apply(this,arguments)},i.guid=s.guid||(s.guid=x.guid++)),this.each(function(){x.event.add(this,e,i,r,n)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,n,r){var i,o;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,x(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if("object"==typeof e){for(o in e)this.off(o,n,e[o]);return this}return(n===!1||"function"==typeof n)&&(r=n,n=t),r===!1&&(r=ot),this.each(function(){x.event.remove(this,e,r,n)})},trigger:function(e,t){return this.each(function(){x.event.trigger(e,t,this)})},triggerHandler:function(e,n){var r=this[0];return r?x.event.trigger(e,n,r,!0):t}});var st=/^.[^:#\[\.,]*$/,lt=/^(?:parents|prev(?:Until|All))/,ut=x.expr.match.needsContext,ct={children:!0,contents:!0,next:!0,prev:!0};x.fn.extend({find:function(e){var t,n=[],r=this,i=r.length;if("string"!=typeof e)return this.pushStack(x(e).filter(function(){for(t=0;i>t;t++)if(x.contains(r[t],this))return!0}));for(t=0;i>t;t++)x.find(e,r[t],n);return n=this.pushStack(i>1?x.unique(n):n),n.selector=this.selector?this.selector+" "+e:e,n},has:function(e){var t,n=x(e,this),r=n.length;return this.filter(function(){for(t=0;r>t;t++)if(x.contains(this,n[t]))return!0})},not:function(e){return this.pushStack(ft(this,e||[],!0))},filter:function(e){return this.pushStack(ft(this,e||[],!1))},is:function(e){return!!ft(this,"string"==typeof e&&ut.test(e)?x(e):e||[],!1).length},closest:function(e,t){var n,r=0,i=this.length,o=[],a=ut.test(e)||"string"!=typeof e?x(e,t||this.context):0;for(;i>r;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(11>n.nodeType&&(a?a.index(n)>-1:1===n.nodeType&&x.find.matchesSelector(n,e))){n=o.push(n);break}return this.pushStack(o.length>1?x.unique(o):o)},index:function(e){return e?"string"==typeof e?x.inArray(this[0],x(e)):x.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){var n="string"==typeof e?x(e,t):x.makeArray(e&&e.nodeType?[e]:e),r=x.merge(this.get(),n);return this.pushStack(x.unique(r))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}});function pt(e,t){do e=e[t];while(e&&1!==e.nodeType);return e}x.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return x.dir(e,"parentNode")},parentsUntil:function(e,t,n){return x.dir(e,"parentNode",n)},next:function(e){return pt(e,"nextSibling")},prev:function(e){return pt(e,"previousSibling")},nextAll:function(e){return x.dir(e,"nextSibling")},prevAll:function(e){return x.dir(e,"previousSibling")},nextUntil:function(e,t,n){return x.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return x.dir(e,"previousSibling",n)},siblings:function(e){return x.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return x.sibling(e.firstChild)},contents:function(e){return x.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:x.merge([],e.childNodes)}},function(e,t){x.fn[e]=function(n,r){var i=x.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=x.filter(r,i)),this.length>1&&(ct[e]||(i=x.unique(i)),lt.test(e)&&(i=i.reverse())),this.pushStack(i)}}),x.extend({filter:function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?x.find.matchesSelector(r,e)?[r]:[]:x.find.matches(e,x.grep(t,function(e){return 1===e.nodeType}))},dir:function(e,n,r){var i=[],o=e[n];while(o&&9!==o.nodeType&&(r===t||1!==o.nodeType||!x(o).is(r)))1===o.nodeType&&i.push(o),o=o[n];return i},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}});function ft(e,t,n){if(x.isFunction(t))return x.grep(e,function(e,r){return!!t.call(e,r,e)!==n});if(t.nodeType)return x.grep(e,function(e){return e===t!==n});if("string"==typeof t){if(st.test(t))return x.filter(t,e,n);t=x.filter(t,e)}return x.grep(e,function(e){return x.inArray(e,t)>=0!==n})}function dt(e){var t=ht.split("|"),n=e.createDocumentFragment();if(n.createElement)while(t.length)n.createElement(t.pop());return n}var ht="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",gt=/ jQuery\d+="(?:null|\d+)"/g,mt=RegExp("<(?:"+ht+")[\\s/>]","i"),yt=/^\s+/,vt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bt=/<([\w:]+)/,xt=/<tbody/i,wt=/<|&#?\w+;/,Tt=/<(?:script|style|link)/i,Ct=/^(?:checkbox|radio)$/i,Nt=/checked\s*(?:[^=]|=\s*.checked.)/i,kt=/^$|\/(?:java|ecma)script/i,Et=/^true\/(.*)/,St=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,At={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:x.support.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},jt=dt(a),Dt=jt.appendChild(a.createElement("div"));At.optgroup=At.option,At.tbody=At.tfoot=At.colgroup=At.caption=At.thead,At.th=At.td,x.fn.extend({text:function(e){return x.access(this,function(e){return e===t?x.text(this):this.empty().append((this[0]&&this[0].ownerDocument||a).createTextNode(e))},null,e,arguments.length)},append:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Lt(this,e);t.appendChild(e)}})},prepend:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Lt(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){var n,r=e?x.filter(e,this):this,i=0;for(;null!=(n=r[i]);i++)t||1!==n.nodeType||x.cleanData(Ft(n)),n.parentNode&&(t&&x.contains(n.ownerDocument,n)&&_t(Ft(n,"script")),n.parentNode.removeChild(n));return this},empty:function(){var e,t=0;for(;null!=(e=this[t]);t++){1===e.nodeType&&x.cleanData(Ft(e,!1));while(e.firstChild)e.removeChild(e.firstChild);e.options&&x.nodeName(e,"select")&&(e.options.length=0)}return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return x.clone(this,e,t)})},html:function(e){return x.access(this,function(e){var n=this[0]||{},r=0,i=this.length;if(e===t)return 1===n.nodeType?n.innerHTML.replace(gt,""):t;if(!("string"!=typeof e||Tt.test(e)||!x.support.htmlSerialize&&mt.test(e)||!x.support.leadingWhitespace&&yt.test(e)||At[(bt.exec(e)||["",""])[1].toLowerCase()])){e=e.replace(vt,"<$1></$2>");try{for(;i>r;r++)n=this[r]||{},1===n.nodeType&&(x.cleanData(Ft(n,!1)),n.innerHTML=e);n=0}catch(o){}}n&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=x.map(this,function(e){return[e.nextSibling,e.parentNode]}),t=0;return this.domManip(arguments,function(n){var r=e[t++],i=e[t++];i&&(r&&r.parentNode!==i&&(r=this.nextSibling),x(this).remove(),i.insertBefore(n,r))},!0),t?this:this.remove()},detach:function(e){return this.remove(e,!0)},domManip:function(e,t,n){e=d.apply([],e);var r,i,o,a,s,l,u=0,c=this.length,p=this,f=c-1,h=e[0],g=x.isFunction(h);if(g||!(1>=c||"string"!=typeof h||x.support.checkClone)&&Nt.test(h))return this.each(function(r){var i=p.eq(r);g&&(e[0]=h.call(this,r,i.html())),i.domManip(e,t,n)});if(c&&(l=x.buildFragment(e,this[0].ownerDocument,!1,!n&&this),r=l.firstChild,1===l.childNodes.length&&(l=r),r)){for(a=x.map(Ft(l,"script"),Ht),o=a.length;c>u;u++)i=l,u!==f&&(i=x.clone(i,!0,!0),o&&x.merge(a,Ft(i,"script"))),t.call(this[u],i,u);if(o)for(s=a[a.length-1].ownerDocument,x.map(a,qt),u=0;o>u;u++)i=a[u],kt.test(i.type||"")&&!x._data(i,"globalEval")&&x.contains(s,i)&&(i.src?x._evalUrl(i.src):x.globalEval((i.text||i.textContent||i.innerHTML||"").replace(St,"")));l=r=null}return this}});function Lt(e,t){return x.nodeName(e,"table")&&x.nodeName(1===t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e}function Ht(e){return e.type=(null!==x.find.attr(e,"type"))+"/"+e.type,e}function qt(e){var t=Et.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function _t(e,t){var n,r=0;for(;null!=(n=e[r]);r++)x._data(n,"globalEval",!t||x._data(t[r],"globalEval"))}function Mt(e,t){if(1===t.nodeType&&x.hasData(e)){var n,r,i,o=x._data(e),a=x._data(t,o),s=o.events;if(s){delete a.handle,a.events={};for(n in s)for(r=0,i=s[n].length;i>r;r++)x.event.add(t,n,s[n][r])}a.data&&(a.data=x.extend({},a.data))}}function Ot(e,t){var n,r,i;if(1===t.nodeType){if(n=t.nodeName.toLowerCase(),!x.support.noCloneEvent&&t[x.expando]){i=x._data(t);for(r in i.events)x.removeEvent(t,r,i.handle);t.removeAttribute(x.expando)}"script"===n&&t.text!==e.text?(Ht(t).text=e.text,qt(t)):"object"===n?(t.parentNode&&(t.outerHTML=e.outerHTML),x.support.html5Clone&&e.innerHTML&&!x.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):"input"===n&&Ct.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):"option"===n?t.defaultSelected=t.selected=e.defaultSelected:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}}x.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){x.fn[e]=function(e){var n,r=0,i=[],o=x(e),a=o.length-1;for(;a>=r;r++)n=r===a?this:this.clone(!0),x(o[r])[t](n),h.apply(i,n.get());return this.pushStack(i)}});function Ft(e,n){var r,o,a=0,s=typeof e.getElementsByTagName!==i?e.getElementsByTagName(n||"*"):typeof e.querySelectorAll!==i?e.querySelectorAll(n||"*"):t;if(!s)for(s=[],r=e.childNodes||e;null!=(o=r[a]);a++)!n||x.nodeName(o,n)?s.push(o):x.merge(s,Ft(o,n));return n===t||n&&x.nodeName(e,n)?x.merge([e],s):s}function Bt(e){Ct.test(e.type)&&(e.defaultChecked=e.checked)}x.extend({clone:function(e,t,n){var r,i,o,a,s,l=x.contains(e.ownerDocument,e);if(x.support.html5Clone||x.isXMLDoc(e)||!mt.test("<"+e.nodeName+">")?o=e.cloneNode(!0):(Dt.innerHTML=e.outerHTML,Dt.removeChild(o=Dt.firstChild)),!(x.support.noCloneEvent&&x.support.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||x.isXMLDoc(e)))for(r=Ft(o),s=Ft(e),a=0;null!=(i=s[a]);++a)r[a]&&Ot(i,r[a]);if(t)if(n)for(s=s||Ft(e),r=r||Ft(o),a=0;null!=(i=s[a]);a++)Mt(i,r[a]);else Mt(e,o);return r=Ft(o,"script"),r.length>0&&_t(r,!l&&Ft(e,"script")),r=s=i=null,o},buildFragment:function(e,t,n,r){var i,o,a,s,l,u,c,p=e.length,f=dt(t),d=[],h=0;for(;p>h;h++)if(o=e[h],o||0===o)if("object"===x.type(o))x.merge(d,o.nodeType?[o]:o);else if(wt.test(o)){s=s||f.appendChild(t.createElement("div")),l=(bt.exec(o)||["",""])[1].toLowerCase(),c=At[l]||At._default,s.innerHTML=c[1]+o.replace(vt,"<$1></$2>")+c[2],i=c[0];while(i--)s=s.lastChild;if(!x.support.leadingWhitespace&&yt.test(o)&&d.push(t.createTextNode(yt.exec(o)[0])),!x.support.tbody){o="table"!==l||xt.test(o)?"<table>"!==c[1]||xt.test(o)?0:s:s.firstChild,i=o&&o.childNodes.length;while(i--)x.nodeName(u=o.childNodes[i],"tbody")&&!u.childNodes.length&&o.removeChild(u)}x.merge(d,s.childNodes),s.textContent="";while(s.firstChild)s.removeChild(s.firstChild);s=f.lastChild}else d.push(t.createTextNode(o));s&&f.removeChild(s),x.support.appendChecked||x.grep(Ft(d,"input"),Bt),h=0;while(o=d[h++])if((!r||-1===x.inArray(o,r))&&(a=x.contains(o.ownerDocument,o),s=Ft(f.appendChild(o),"script"),a&&_t(s),n)){i=0;while(o=s[i++])kt.test(o.type||"")&&n.push(o)}return s=null,f},cleanData:function(e,t){var n,r,o,a,s=0,l=x.expando,u=x.cache,c=x.support.deleteExpando,f=x.event.special;for(;null!=(n=e[s]);s++)if((t||x.acceptData(n))&&(o=n[l],a=o&&u[o])){if(a.events)for(r in a.events)f[r]?x.event.remove(n,r):x.removeEvent(n,r,a.handle);
u[o]&&(delete u[o],c?delete n[l]:typeof n.removeAttribute!==i?n.removeAttribute(l):n[l]=null,p.push(o))}},_evalUrl:function(e){return x.ajax({url:e,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})}}),x.fn.extend({wrapAll:function(e){if(x.isFunction(e))return this.each(function(t){x(this).wrapAll(e.call(this,t))});if(this[0]){var t=x(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstChild&&1===e.firstChild.nodeType)e=e.firstChild;return e}).append(this)}return this},wrapInner:function(e){return x.isFunction(e)?this.each(function(t){x(this).wrapInner(e.call(this,t))}):this.each(function(){var t=x(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=x.isFunction(e);return this.each(function(n){x(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){x.nodeName(this,"body")||x(this).replaceWith(this.childNodes)}).end()}});var Pt,Rt,Wt,$t=/alpha\([^)]*\)/i,It=/opacity\s*=\s*([^)]*)/,zt=/^(top|right|bottom|left)$/,Xt=/^(none|table(?!-c[ea]).+)/,Ut=/^margin/,Vt=RegExp("^("+w+")(.*)$","i"),Yt=RegExp("^("+w+")(?!px)[a-z%]+$","i"),Jt=RegExp("^([+-])=("+w+")","i"),Gt={BODY:"block"},Qt={position:"absolute",visibility:"hidden",display:"block"},Kt={letterSpacing:0,fontWeight:400},Zt=["Top","Right","Bottom","Left"],en=["Webkit","O","Moz","ms"];function tn(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=en.length;while(i--)if(t=en[i]+n,t in e)return t;return r}function nn(e,t){return e=t||e,"none"===x.css(e,"display")||!x.contains(e.ownerDocument,e)}function rn(e,t){var n,r,i,o=[],a=0,s=e.length;for(;s>a;a++)r=e[a],r.style&&(o[a]=x._data(r,"olddisplay"),n=r.style.display,t?(o[a]||"none"!==n||(r.style.display=""),""===r.style.display&&nn(r)&&(o[a]=x._data(r,"olddisplay",ln(r.nodeName)))):o[a]||(i=nn(r),(n&&"none"!==n||!i)&&x._data(r,"olddisplay",i?n:x.css(r,"display"))));for(a=0;s>a;a++)r=e[a],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[a]||"":"none"));return e}x.fn.extend({css:function(e,n){return x.access(this,function(e,n,r){var i,o,a={},s=0;if(x.isArray(n)){for(o=Rt(e),i=n.length;i>s;s++)a[n[s]]=x.css(e,n[s],!1,o);return a}return r!==t?x.style(e,n,r):x.css(e,n)},e,n,arguments.length>1)},show:function(){return rn(this,!0)},hide:function(){return rn(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){nn(this)?x(this).show():x(this).hide()})}}),x.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Wt(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":x.support.cssFloat?"cssFloat":"styleFloat"},style:function(e,n,r,i){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var o,a,s,l=x.camelCase(n),u=e.style;if(n=x.cssProps[l]||(x.cssProps[l]=tn(u,l)),s=x.cssHooks[n]||x.cssHooks[l],r===t)return s&&"get"in s&&(o=s.get(e,!1,i))!==t?o:u[n];if(a=typeof r,"string"===a&&(o=Jt.exec(r))&&(r=(o[1]+1)*o[2]+parseFloat(x.css(e,n)),a="number"),!(null==r||"number"===a&&isNaN(r)||("number"!==a||x.cssNumber[l]||(r+="px"),x.support.clearCloneStyle||""!==r||0!==n.indexOf("background")||(u[n]="inherit"),s&&"set"in s&&(r=s.set(e,r,i))===t)))try{u[n]=r}catch(c){}}},css:function(e,n,r,i){var o,a,s,l=x.camelCase(n);return n=x.cssProps[l]||(x.cssProps[l]=tn(e.style,l)),s=x.cssHooks[n]||x.cssHooks[l],s&&"get"in s&&(a=s.get(e,!0,r)),a===t&&(a=Wt(e,n,i)),"normal"===a&&n in Kt&&(a=Kt[n]),""===r||r?(o=parseFloat(a),r===!0||x.isNumeric(o)?o||0:a):a}}),e.getComputedStyle?(Rt=function(t){return e.getComputedStyle(t,null)},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),l=s?s.getPropertyValue(n)||s[n]:t,u=e.style;return s&&(""!==l||x.contains(e.ownerDocument,e)||(l=x.style(e,n)),Yt.test(l)&&Ut.test(n)&&(i=u.width,o=u.minWidth,a=u.maxWidth,u.minWidth=u.maxWidth=u.width=l,l=s.width,u.width=i,u.minWidth=o,u.maxWidth=a)),l}):a.documentElement.currentStyle&&(Rt=function(e){return e.currentStyle},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),l=s?s[n]:t,u=e.style;return null==l&&u&&u[n]&&(l=u[n]),Yt.test(l)&&!zt.test(n)&&(i=u.left,o=e.runtimeStyle,a=o&&o.left,a&&(o.left=e.currentStyle.left),u.left="fontSize"===n?"1em":l,l=u.pixelLeft+"px",u.left=i,a&&(o.left=a)),""===l?"auto":l});function on(e,t,n){var r=Vt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function an(e,t,n,r,i){var o=n===(r?"border":"content")?4:"width"===t?1:0,a=0;for(;4>o;o+=2)"margin"===n&&(a+=x.css(e,n+Zt[o],!0,i)),r?("content"===n&&(a-=x.css(e,"padding"+Zt[o],!0,i)),"margin"!==n&&(a-=x.css(e,"border"+Zt[o]+"Width",!0,i))):(a+=x.css(e,"padding"+Zt[o],!0,i),"padding"!==n&&(a+=x.css(e,"border"+Zt[o]+"Width",!0,i)));return a}function sn(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=Rt(e),a=x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,o);if(0>=i||null==i){if(i=Wt(e,t,o),(0>i||null==i)&&(i=e.style[t]),Yt.test(i))return i;r=a&&(x.support.boxSizingReliable||i===e.style[t]),i=parseFloat(i)||0}return i+an(e,t,n||(a?"border":"content"),r,o)+"px"}function ln(e){var t=a,n=Gt[e];return n||(n=un(e,t),"none"!==n&&n||(Pt=(Pt||x("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(t.documentElement),t=(Pt[0].contentWindow||Pt[0].contentDocument).document,t.write("<!doctype html><html><body>"),t.close(),n=un(e,t),Pt.detach()),Gt[e]=n),n}function un(e,t){var n=x(t.createElement(e)).appendTo(t.body),r=x.css(n[0],"display");return n.remove(),r}x.each(["height","width"],function(e,n){x.cssHooks[n]={get:function(e,r,i){return r?0===e.offsetWidth&&Xt.test(x.css(e,"display"))?x.swap(e,Qt,function(){return sn(e,n,i)}):sn(e,n,i):t},set:function(e,t,r){var i=r&&Rt(e);return on(e,t,r?an(e,n,r,x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,i),i):0)}}}),x.support.opacity||(x.cssHooks.opacity={get:function(e,t){return It.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,i=x.isNumeric(t)?"alpha(opacity="+100*t+")":"",o=r&&r.filter||n.filter||"";n.zoom=1,(t>=1||""===t)&&""===x.trim(o.replace($t,""))&&n.removeAttribute&&(n.removeAttribute("filter"),""===t||r&&!r.filter)||(n.filter=$t.test(o)?o.replace($t,i):o+" "+i)}}),x(function(){x.support.reliableMarginRight||(x.cssHooks.marginRight={get:function(e,n){return n?x.swap(e,{display:"inline-block"},Wt,[e,"marginRight"]):t}}),!x.support.pixelPosition&&x.fn.position&&x.each(["top","left"],function(e,n){x.cssHooks[n]={get:function(e,r){return r?(r=Wt(e,n),Yt.test(r)?x(e).position()[n]+"px":r):t}}})}),x.expr&&x.expr.filters&&(x.expr.filters.hidden=function(e){return 0>=e.offsetWidth&&0>=e.offsetHeight||!x.support.reliableHiddenOffsets&&"none"===(e.style&&e.style.display||x.css(e,"display"))},x.expr.filters.visible=function(e){return!x.expr.filters.hidden(e)}),x.each({margin:"",padding:"",border:"Width"},function(e,t){x.cssHooks[e+t]={expand:function(n){var r=0,i={},o="string"==typeof n?n.split(" "):[n];for(;4>r;r++)i[e+Zt[r]+t]=o[r]||o[r-2]||o[0];return i}},Ut.test(e)||(x.cssHooks[e+t].set=on)});var cn=/%20/g,pn=/\[\]$/,fn=/\r?\n/g,dn=/^(?:submit|button|image|reset|file)$/i,hn=/^(?:input|select|textarea|keygen)/i;x.fn.extend({serialize:function(){return x.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=x.prop(this,"elements");return e?x.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!x(this).is(":disabled")&&hn.test(this.nodeName)&&!dn.test(e)&&(this.checked||!Ct.test(e))}).map(function(e,t){var n=x(this).val();return null==n?null:x.isArray(n)?x.map(n,function(e){return{name:t.name,value:e.replace(fn,"\r\n")}}):{name:t.name,value:n.replace(fn,"\r\n")}}).get()}}),x.param=function(e,n){var r,i=[],o=function(e,t){t=x.isFunction(t)?t():null==t?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(n===t&&(n=x.ajaxSettings&&x.ajaxSettings.traditional),x.isArray(e)||e.jquery&&!x.isPlainObject(e))x.each(e,function(){o(this.name,this.value)});else for(r in e)gn(r,e[r],n,o);return i.join("&").replace(cn,"+")};function gn(e,t,n,r){var i;if(x.isArray(t))x.each(t,function(t,i){n||pn.test(e)?r(e,i):gn(e+"["+("object"==typeof i?t:"")+"]",i,n,r)});else if(n||"object"!==x.type(t))r(e,t);else for(i in t)gn(e+"["+i+"]",t[i],n,r)}x.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){x.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),x.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}});var mn,yn,vn=x.now(),bn=/\?/,xn=/#.*$/,wn=/([?&])_=[^&]*/,Tn=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Cn=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Nn=/^(?:GET|HEAD)$/,kn=/^\/\//,En=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,Sn=x.fn.load,An={},jn={},Dn="*/".concat("*");try{yn=o.href}catch(Ln){yn=a.createElement("a"),yn.href="",yn=yn.href}mn=En.exec(yn.toLowerCase())||[];function Hn(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(T)||[];if(x.isFunction(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function qn(e,n,r,i){var o={},a=e===jn;function s(l){var u;return o[l]=!0,x.each(e[l]||[],function(e,l){var c=l(n,r,i);return"string"!=typeof c||a||o[c]?a?!(u=c):t:(n.dataTypes.unshift(c),s(c),!1)}),u}return s(n.dataTypes[0])||!o["*"]&&s("*")}function _n(e,n){var r,i,o=x.ajaxSettings.flatOptions||{};for(i in n)n[i]!==t&&((o[i]?e:r||(r={}))[i]=n[i]);return r&&x.extend(!0,e,r),e}x.fn.load=function(e,n,r){if("string"!=typeof e&&Sn)return Sn.apply(this,arguments);var i,o,a,s=this,l=e.indexOf(" ");return l>=0&&(i=e.slice(l,e.length),e=e.slice(0,l)),x.isFunction(n)?(r=n,n=t):n&&"object"==typeof n&&(a="POST"),s.length>0&&x.ajax({url:e,type:a,dataType:"html",data:n}).done(function(e){o=arguments,s.html(i?x("<div>").append(x.parseHTML(e)).find(i):e)}).complete(r&&function(e,t){s.each(r,o||[e.responseText,t,e])}),this},x.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){x.fn[t]=function(e){return this.on(t,e)}}),x.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:yn,type:"GET",isLocal:Cn.test(mn[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Dn,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":x.parseJSON,"text xml":x.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?_n(_n(e,x.ajaxSettings),t):_n(x.ajaxSettings,e)},ajaxPrefilter:Hn(An),ajaxTransport:Hn(jn),ajax:function(e,n){"object"==typeof e&&(n=e,e=t),n=n||{};var r,i,o,a,s,l,u,c,p=x.ajaxSetup({},n),f=p.context||p,d=p.context&&(f.nodeType||f.jquery)?x(f):x.event,h=x.Deferred(),g=x.Callbacks("once memory"),m=p.statusCode||{},y={},v={},b=0,w="canceled",C={readyState:0,getResponseHeader:function(e){var t;if(2===b){if(!c){c={};while(t=Tn.exec(a))c[t[1].toLowerCase()]=t[2]}t=c[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===b?a:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return b||(e=v[n]=v[n]||e,y[e]=t),this},overrideMimeType:function(e){return b||(p.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>b)for(t in e)m[t]=[m[t],e[t]];else C.always(e[C.status]);return this},abort:function(e){var t=e||w;return u&&u.abort(t),k(0,t),this}};if(h.promise(C).complete=g.add,C.success=C.done,C.error=C.fail,p.url=((e||p.url||yn)+"").replace(xn,"").replace(kn,mn[1]+"//"),p.type=n.method||n.type||p.method||p.type,p.dataTypes=x.trim(p.dataType||"*").toLowerCase().match(T)||[""],null==p.crossDomain&&(r=En.exec(p.url.toLowerCase()),p.crossDomain=!(!r||r[1]===mn[1]&&r[2]===mn[2]&&(r[3]||("http:"===r[1]?"80":"443"))===(mn[3]||("http:"===mn[1]?"80":"443")))),p.data&&p.processData&&"string"!=typeof p.data&&(p.data=x.param(p.data,p.traditional)),qn(An,p,n,C),2===b)return C;l=p.global,l&&0===x.active++&&x.event.trigger("ajaxStart"),p.type=p.type.toUpperCase(),p.hasContent=!Nn.test(p.type),o=p.url,p.hasContent||(p.data&&(o=p.url+=(bn.test(o)?"&":"?")+p.data,delete p.data),p.cache===!1&&(p.url=wn.test(o)?o.replace(wn,"$1_="+vn++):o+(bn.test(o)?"&":"?")+"_="+vn++)),p.ifModified&&(x.lastModified[o]&&C.setRequestHeader("If-Modified-Since",x.lastModified[o]),x.etag[o]&&C.setRequestHeader("If-None-Match",x.etag[o])),(p.data&&p.hasContent&&p.contentType!==!1||n.contentType)&&C.setRequestHeader("Content-Type",p.contentType),C.setRequestHeader("Accept",p.dataTypes[0]&&p.accepts[p.dataTypes[0]]?p.accepts[p.dataTypes[0]]+("*"!==p.dataTypes[0]?", "+Dn+"; q=0.01":""):p.accepts["*"]);for(i in p.headers)C.setRequestHeader(i,p.headers[i]);if(p.beforeSend&&(p.beforeSend.call(f,C,p)===!1||2===b))return C.abort();w="abort";for(i in{success:1,error:1,complete:1})C[i](p[i]);if(u=qn(jn,p,n,C)){C.readyState=1,l&&d.trigger("ajaxSend",[C,p]),p.async&&p.timeout>0&&(s=setTimeout(function(){C.abort("timeout")},p.timeout));try{b=1,u.send(y,k)}catch(N){if(!(2>b))throw N;k(-1,N)}}else k(-1,"No Transport");function k(e,n,r,i){var c,y,v,w,T,N=n;2!==b&&(b=2,s&&clearTimeout(s),u=t,a=i||"",C.readyState=e>0?4:0,c=e>=200&&300>e||304===e,r&&(w=Mn(p,C,r)),w=On(p,w,C,c),c?(p.ifModified&&(T=C.getResponseHeader("Last-Modified"),T&&(x.lastModified[o]=T),T=C.getResponseHeader("etag"),T&&(x.etag[o]=T)),204===e||"HEAD"===p.type?N="nocontent":304===e?N="notmodified":(N=w.state,y=w.data,v=w.error,c=!v)):(v=N,(e||!N)&&(N="error",0>e&&(e=0))),C.status=e,C.statusText=(n||N)+"",c?h.resolveWith(f,[y,N,C]):h.rejectWith(f,[C,N,v]),C.statusCode(m),m=t,l&&d.trigger(c?"ajaxSuccess":"ajaxError",[C,p,c?y:v]),g.fireWith(f,[C,N]),l&&(d.trigger("ajaxComplete",[C,p]),--x.active||x.event.trigger("ajaxStop")))}return C},getJSON:function(e,t,n){return x.get(e,t,n,"json")},getScript:function(e,n){return x.get(e,t,n,"script")}}),x.each(["get","post"],function(e,n){x[n]=function(e,r,i,o){return x.isFunction(r)&&(o=o||i,i=r,r=t),x.ajax({url:e,type:n,dataType:o,data:r,success:i})}});function Mn(e,n,r){var i,o,a,s,l=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),o===t&&(o=e.mimeType||n.getResponseHeader("Content-Type"));if(o)for(s in l)if(l[s]&&l[s].test(o)){u.unshift(s);break}if(u[0]in r)a=u[0];else{for(s in r){if(!u[0]||e.converters[s+" "+u[0]]){a=s;break}i||(i=s)}a=a||i}return a?(a!==u[0]&&u.unshift(a),r[a]):t}function On(e,t,n,r){var i,o,a,s,l,u={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)u[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!l&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),l=o,o=c.shift())if("*"===o)o=l;else if("*"!==l&&l!==o){if(a=u[l+" "+o]||u["* "+o],!a)for(i in u)if(s=i.split(" "),s[1]===o&&(a=u[l+" "+s[0]]||u["* "+s[0]])){a===!0?a=u[i]:u[i]!==!0&&(o=s[0],c.unshift(s[1]));break}if(a!==!0)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(p){return{state:"parsererror",error:a?p:"No conversion from "+l+" to "+o}}}return{state:"success",data:t}}x.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return x.globalEval(e),e}}}),x.ajaxPrefilter("script",function(e){e.cache===t&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),x.ajaxTransport("script",function(e){if(e.crossDomain){var n,r=a.head||x("head")[0]||a.documentElement;return{send:function(t,i){n=a.createElement("script"),n.async=!0,e.scriptCharset&&(n.charset=e.scriptCharset),n.src=e.url,n.onload=n.onreadystatechange=function(e,t){(t||!n.readyState||/loaded|complete/.test(n.readyState))&&(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),n=null,t||i(200,"success"))},r.insertBefore(n,r.firstChild)},abort:function(){n&&n.onload(t,!0)}}}});var Fn=[],Bn=/(=)\?(?=&|$)|\?\?/;x.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Fn.pop()||x.expando+"_"+vn++;return this[e]=!0,e}}),x.ajaxPrefilter("json jsonp",function(n,r,i){var o,a,s,l=n.jsonp!==!1&&(Bn.test(n.url)?"url":"string"==typeof n.data&&!(n.contentType||"").indexOf("application/x-www-form-urlencoded")&&Bn.test(n.data)&&"data");return l||"jsonp"===n.dataTypes[0]?(o=n.jsonpCallback=x.isFunction(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback,l?n[l]=n[l].replace(Bn,"$1"+o):n.jsonp!==!1&&(n.url+=(bn.test(n.url)?"&":"?")+n.jsonp+"="+o),n.converters["script json"]=function(){return s||x.error(o+" was not called"),s[0]},n.dataTypes[0]="json",a=e[o],e[o]=function(){s=arguments},i.always(function(){e[o]=a,n[o]&&(n.jsonpCallback=r.jsonpCallback,Fn.push(o)),s&&x.isFunction(a)&&a(s[0]),s=a=t}),"script"):t});var Pn,Rn,Wn=0,$n=e.ActiveXObject&&function(){var e;for(e in Pn)Pn[e](t,!0)};function In(){try{return new e.XMLHttpRequest}catch(t){}}function zn(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(t){}}x.ajaxSettings.xhr=e.ActiveXObject?function(){return!this.isLocal&&In()||zn()}:In,Rn=x.ajaxSettings.xhr(),x.support.cors=!!Rn&&"withCredentials"in Rn,Rn=x.support.ajax=!!Rn,Rn&&x.ajaxTransport(function(n){if(!n.crossDomain||x.support.cors){var r;return{send:function(i,o){var a,s,l=n.xhr();if(n.username?l.open(n.type,n.url,n.async,n.username,n.password):l.open(n.type,n.url,n.async),n.xhrFields)for(s in n.xhrFields)l[s]=n.xhrFields[s];n.mimeType&&l.overrideMimeType&&l.overrideMimeType(n.mimeType),n.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");try{for(s in i)l.setRequestHeader(s,i[s])}catch(u){}l.send(n.hasContent&&n.data||null),r=function(e,i){var s,u,c,p;try{if(r&&(i||4===l.readyState))if(r=t,a&&(l.onreadystatechange=x.noop,$n&&delete Pn[a]),i)4!==l.readyState&&l.abort();else{p={},s=l.status,u=l.getAllResponseHeaders(),"string"==typeof l.responseText&&(p.text=l.responseText);try{c=l.statusText}catch(f){c=""}s||!n.isLocal||n.crossDomain?1223===s&&(s=204):s=p.text?200:404}}catch(d){i||o(-1,d)}p&&o(s,c,p,u)},n.async?4===l.readyState?setTimeout(r):(a=++Wn,$n&&(Pn||(Pn={},x(e).unload($n)),Pn[a]=r),l.onreadystatechange=r):r()},abort:function(){r&&r(t,!0)}}}});var Xn,Un,Vn=/^(?:toggle|show|hide)$/,Yn=RegExp("^(?:([+-])=|)("+w+")([a-z%]*)$","i"),Jn=/queueHooks$/,Gn=[nr],Qn={"*":[function(e,t){var n=this.createTween(e,t),r=n.cur(),i=Yn.exec(t),o=i&&i[3]||(x.cssNumber[e]?"":"px"),a=(x.cssNumber[e]||"px"!==o&&+r)&&Yn.exec(x.css(n.elem,e)),s=1,l=20;if(a&&a[3]!==o){o=o||a[3],i=i||[],a=+r||1;do s=s||".5",a/=s,x.style(n.elem,e,a+o);while(s!==(s=n.cur()/r)&&1!==s&&--l)}return i&&(a=n.start=+a||+r||0,n.unit=o,n.end=i[1]?a+(i[1]+1)*i[2]:+i[2]),n}]};function Kn(){return setTimeout(function(){Xn=t}),Xn=x.now()}function Zn(e,t,n){var r,i=(Qn[t]||[]).concat(Qn["*"]),o=0,a=i.length;for(;a>o;o++)if(r=i[o].call(n,t,e))return r}function er(e,t,n){var r,i,o=0,a=Gn.length,s=x.Deferred().always(function(){delete l.elem}),l=function(){if(i)return!1;var t=Xn||Kn(),n=Math.max(0,u.startTime+u.duration-t),r=n/u.duration||0,o=1-r,a=0,l=u.tweens.length;for(;l>a;a++)u.tweens[a].run(o);return s.notifyWith(e,[u,o,n]),1>o&&l?n:(s.resolveWith(e,[u]),!1)},u=s.promise({elem:e,props:x.extend({},t),opts:x.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:Xn||Kn(),duration:n.duration,tweens:[],createTween:function(t,n){var r=x.Tween(e,u.opts,t,n,u.opts.specialEasing[t]||u.opts.easing);return u.tweens.push(r),r},stop:function(t){var n=0,r=t?u.tweens.length:0;if(i)return this;for(i=!0;r>n;n++)u.tweens[n].run(1);return t?s.resolveWith(e,[u,t]):s.rejectWith(e,[u,t]),this}}),c=u.props;for(tr(c,u.opts.specialEasing);a>o;o++)if(r=Gn[o].call(u,e,c,u.opts))return r;return x.map(c,Zn,u),x.isFunction(u.opts.start)&&u.opts.start.call(e,u),x.fx.timer(x.extend(l,{elem:e,anim:u,queue:u.opts.queue})),u.progress(u.opts.progress).done(u.opts.done,u.opts.complete).fail(u.opts.fail).always(u.opts.always)}function tr(e,t){var n,r,i,o,a;for(n in e)if(r=x.camelCase(n),i=t[r],o=e[n],x.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),a=x.cssHooks[r],a&&"expand"in a){o=a.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}x.Animation=x.extend(er,{tweener:function(e,t){x.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");var n,r=0,i=e.length;for(;i>r;r++)n=e[r],Qn[n]=Qn[n]||[],Qn[n].unshift(t)},prefilter:function(e,t){t?Gn.unshift(e):Gn.push(e)}});function nr(e,t,n){var r,i,o,a,s,l,u=this,c={},p=e.style,f=e.nodeType&&nn(e),d=x._data(e,"fxshow");n.queue||(s=x._queueHooks(e,"fx"),null==s.unqueued&&(s.unqueued=0,l=s.empty.fire,s.empty.fire=function(){s.unqueued||l()}),s.unqueued++,u.always(function(){u.always(function(){s.unqueued--,x.queue(e,"fx").length||s.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[p.overflow,p.overflowX,p.overflowY],"inline"===x.css(e,"display")&&"none"===x.css(e,"float")&&(x.support.inlineBlockNeedsLayout&&"inline"!==ln(e.nodeName)?p.zoom=1:p.display="inline-block")),n.overflow&&(p.overflow="hidden",x.support.shrinkWrapBlocks||u.always(function(){p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]}));for(r in t)if(i=t[r],Vn.exec(i)){if(delete t[r],o=o||"toggle"===i,i===(f?"hide":"show"))continue;c[r]=d&&d[r]||x.style(e,r)}if(!x.isEmptyObject(c)){d?"hidden"in d&&(f=d.hidden):d=x._data(e,"fxshow",{}),o&&(d.hidden=!f),f?x(e).show():u.done(function(){x(e).hide()}),u.done(function(){var t;x._removeData(e,"fxshow");for(t in c)x.style(e,t,c[t])});for(r in c)a=Zn(f?d[r]:0,r,u),r in d||(d[r]=a.start,f&&(a.end=a.start,a.start="width"===r||"height"===r?1:0))}}function rr(e,t,n,r,i){return new rr.prototype.init(e,t,n,r,i)}x.Tween=rr,rr.prototype={constructor:rr,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(x.cssNumber[n]?"":"px")},cur:function(){var e=rr.propHooks[this.prop];return e&&e.get?e.get(this):rr.propHooks._default.get(this)},run:function(e){var t,n=rr.propHooks[this.prop];return this.pos=t=this.options.duration?x.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):rr.propHooks._default.set(this),this}},rr.prototype.init.prototype=rr.prototype,rr.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=x.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){x.fx.step[e.prop]?x.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[x.cssProps[e.prop]]||x.cssHooks[e.prop])?x.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},rr.propHooks.scrollTop=rr.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},x.each(["toggle","show","hide"],function(e,t){var n=x.fn[t];x.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ir(t,!0),e,r,i)}}),x.fn.extend({fadeTo:function(e,t,n,r){return this.filter(nn).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=x.isEmptyObject(e),o=x.speed(t,n,r),a=function(){var t=er(this,x.extend({},e),o);(i||x._data(this,"finish"))&&t.stop(!0)};return a.finish=a,i||o.queue===!1?this.each(a):this.queue(o.queue,a)},stop:function(e,n,r){var i=function(e){var t=e.stop;delete e.stop,t(r)};return"string"!=typeof e&&(r=n,n=e,e=t),n&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,n=null!=e&&e+"queueHooks",o=x.timers,a=x._data(this);if(n)a[n]&&a[n].stop&&i(a[n]);else for(n in a)a[n]&&a[n].stop&&Jn.test(n)&&i(a[n]);for(n=o.length;n--;)o[n].elem!==this||null!=e&&o[n].queue!==e||(o[n].anim.stop(r),t=!1,o.splice(n,1));(t||!r)&&x.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=x._data(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=x.timers,a=r?r.length:0;for(n.finish=!0,x.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;a>t;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}});function ir(e,t){var n,r={height:e},i=0;for(t=t?1:0;4>i;i+=2-t)n=Zt[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}x.each({slideDown:ir("show"),slideUp:ir("hide"),slideToggle:ir("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){x.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),x.speed=function(e,t,n){var r=e&&"object"==typeof e?x.extend({},e):{complete:n||!n&&t||x.isFunction(e)&&e,duration:e,easing:n&&t||t&&!x.isFunction(t)&&t};return r.duration=x.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in x.fx.speeds?x.fx.speeds[r.duration]:x.fx.speeds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){x.isFunction(r.old)&&r.old.call(this),r.queue&&x.dequeue(this,r.queue)},r},x.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},x.timers=[],x.fx=rr.prototype.init,x.fx.tick=function(){var e,n=x.timers,r=0;for(Xn=x.now();n.length>r;r++)e=n[r],e()||n[r]!==e||n.splice(r--,1);n.length||x.fx.stop(),Xn=t},x.fx.timer=function(e){e()&&x.timers.push(e)&&x.fx.start()},x.fx.interval=13,x.fx.start=function(){Un||(Un=setInterval(x.fx.tick,x.fx.interval))},x.fx.stop=function(){clearInterval(Un),Un=null},x.fx.speeds={slow:600,fast:200,_default:400},x.fx.step={},x.expr&&x.expr.filters&&(x.expr.filters.animated=function(e){return x.grep(x.timers,function(t){return e===t.elem}).length}),x.fn.offset=function(e){if(arguments.length)return e===t?this:this.each(function(t){x.offset.setOffset(this,e,t)});var n,r,o={top:0,left:0},a=this[0],s=a&&a.ownerDocument;if(s)return n=s.documentElement,x.contains(n,a)?(typeof a.getBoundingClientRect!==i&&(o=a.getBoundingClientRect()),r=or(s),{top:o.top+(r.pageYOffset||n.scrollTop)-(n.clientTop||0),left:o.left+(r.pageXOffset||n.scrollLeft)-(n.clientLeft||0)}):o},x.offset={setOffset:function(e,t,n){var r=x.css(e,"position");"static"===r&&(e.style.position="relative");var i=x(e),o=i.offset(),a=x.css(e,"top"),s=x.css(e,"left"),l=("absolute"===r||"fixed"===r)&&x.inArray("auto",[a,s])>-1,u={},c={},p,f;l?(c=i.position(),p=c.top,f=c.left):(p=parseFloat(a)||0,f=parseFloat(s)||0),x.isFunction(t)&&(t=t.call(e,n,o)),null!=t.top&&(u.top=t.top-o.top+p),null!=t.left&&(u.left=t.left-o.left+f),"using"in t?t.using.call(e,u):i.css(u)}},x.fn.extend({position:function(){if(this[0]){var e,t,n={top:0,left:0},r=this[0];return"fixed"===x.css(r,"position")?t=r.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),x.nodeName(e[0],"html")||(n=e.offset()),n.top+=x.css(e[0],"borderTopWidth",!0),n.left+=x.css(e[0],"borderLeftWidth",!0)),{top:t.top-n.top-x.css(r,"marginTop",!0),left:t.left-n.left-x.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||s;while(e&&!x.nodeName(e,"html")&&"static"===x.css(e,"position"))e=e.offsetParent;return e||s})}}),x.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,n){var r=/Y/.test(n);x.fn[e]=function(i){return x.access(this,function(e,i,o){var a=or(e);return o===t?a?n in a?a[n]:a.document.documentElement[i]:e[i]:(a?a.scrollTo(r?x(a).scrollLeft():o,r?o:x(a).scrollTop()):e[i]=o,t)},e,i,arguments.length,null)}});function or(e){return x.isWindow(e)?e:9===e.nodeType?e.defaultView||e.parentWindow:!1}x.each({Height:"height",Width:"width"},function(e,n){x.each({padding:"inner"+e,content:n,"":"outer"+e},function(r,i){x.fn[i]=function(i,o){var a=arguments.length&&(r||"boolean"!=typeof i),s=r||(i===!0||o===!0?"margin":"border");return x.access(this,function(n,r,i){var o;return x.isWindow(n)?n.document.documentElement["client"+e]:9===n.nodeType?(o=n.documentElement,Math.max(n.body["scroll"+e],o["scroll"+e],n.body["offset"+e],o["offset"+e],o["client"+e])):i===t?x.css(n,r,s):x.style(n,r,i,s)},n,a?i:t,a,null)}})}),x.fn.size=function(){return this.length},x.fn.andSelf=x.fn.addBack,"object"==typeof module&&module&&"object"==typeof module.exports?module.exports=x:(e.jQuery=e.$=x,"function"==typeof define&&define.amd&&define("jquery",[],function(){return x}))})(window);

/* http://prismjs.com/download.html?themes=prism-okaidia&languages=markup+css+css-extras+clike+javascript+php+php-extras+coffeescript+scss+bash+python+sql+http+ruby+ini+apacheconf+git */
self = (typeof window !== 'undefined')
	? window   // if in browser
	: (
		(typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope)
		? self // if in worker
		: {}   // if in node js
	);

/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 * MIT license http://www.opensource.org/licenses/mit-license.php/
 * @author Lea Verou http://lea.verou.me
 */

var Prism = (function(){

// Private helper vars
var lang = /\blang(?:uage)?-(?!\*)(\w+)\b/i;

var _ = self.Prism = {
	util: {
		encode: function (tokens) {
			if (tokens instanceof Token) {
				return new Token(tokens.type, _.util.encode(tokens.content), tokens.alias);
			} else if (_.util.type(tokens) === 'Array') {
				return tokens.map(_.util.encode);
			} else {
				return tokens.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/\u00a0/g, ' ');
			}
		},

		type: function (o) {
			return Object.prototype.toString.call(o).match(/\[object (\w+)\]/)[1];
		},

		// Deep clone a language definition (e.g. to extend it)
		clone: function (o) {
			var type = _.util.type(o);

			switch (type) {
				case 'Object':
					var clone = {};

					for (var key in o) {
						if (o.hasOwnProperty(key)) {
							clone[key] = _.util.clone(o[key]);
						}
					}

					return clone;

				case 'Array':
					return o.slice();
			}

			return o;
		}
	},

	languages: {
		extend: function (id, redef) {
			var lang = _.util.clone(_.languages[id]);

			for (var key in redef) {
				lang[key] = redef[key];
			}

			return lang;
		},

		// Insert a token before another token in a language literal
		insertBefore: function (inside, before, insert, root) {
			root = root || _.languages;
			var grammar = root[inside];
			var ret = {};

			for (var token in grammar) {

				if (grammar.hasOwnProperty(token)) {

					if (token == before) {

						for (var newToken in insert) {

							if (insert.hasOwnProperty(newToken)) {
								ret[newToken] = insert[newToken];
							}
						}
					}

					ret[token] = grammar[token];
				}
			}

			return root[inside] = ret;
		},

		// Traverse a language definition with Depth First Search
		DFS: function(o, callback) {
			for (var i in o) {
				callback.call(o, i, o[i]);

				if (_.util.type(o) === 'Object') {
					_.languages.DFS(o[i], callback);
				}
			}
		}
	},

	highlightAll: function(async, callback) {
		var elements = document.querySelectorAll('code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code');

		for (var i=0, element; element = elements[i++];) {
			_.highlightElement(element, async === true, callback);
		}
	},

	highlightElement: function(element, async, callback) {
		// Find language
		var language, grammar, parent = element;

		while (parent && !lang.test(parent.className)) {
			parent = parent.parentNode;
		}

		if (parent) {
			language = (parent.className.match(lang) || [,''])[1];
			grammar = _.languages[language];
		}

		if (!grammar) {
			return;
		}

		// Set language on the element, if not present
		element.className = element.className.replace(lang, '').replace(/\s+/g, ' ') + ' language-' + language;

		// Set language on the parent, for styling
		parent = element.parentNode;

		if (/pre/i.test(parent.nodeName)) {
			parent.className = parent.className.replace(lang, '').replace(/\s+/g, ' ') + ' language-' + language;
		}

		var code = element.textContent;

		if(!code) {
			return;
		}

		var env = {
			element: element,
			language: language,
			grammar: grammar,
			code: code
		};

		_.hooks.run('before-highlight', env);

		if (async && self.Worker) {
			var worker = new Worker(_.filename);

			worker.onmessage = function(evt) {
				env.highlightedCode = Token.stringify(JSON.parse(evt.data), language);

				_.hooks.run('before-insert', env);

				env.element.innerHTML = env.highlightedCode;

				callback && callback.call(env.element);
				_.hooks.run('after-highlight', env);
			};

			worker.postMessage(JSON.stringify({
				language: env.language,
				code: env.code
			}));
		}
		else {
			env.highlightedCode = _.highlight(env.code, env.grammar, env.language)

			_.hooks.run('before-insert', env);

			env.element.innerHTML = env.highlightedCode;

			callback && callback.call(element);

			_.hooks.run('after-highlight', env);
		}
	},

	highlight: function (text, grammar, language) {
		var tokens = _.tokenize(text, grammar);
		return Token.stringify(_.util.encode(tokens), language);
	},

	tokenize: function(text, grammar, language) {
		var Token = _.Token;

		var strarr = [text];

		var rest = grammar.rest;

		if (rest) {
			for (var token in rest) {
				grammar[token] = rest[token];
			}

			delete grammar.rest;
		}

		tokenloop: for (var token in grammar) {
			if(!grammar.hasOwnProperty(token) || !grammar[token]) {
				continue;
			}

			var patterns = grammar[token];
			patterns = (_.util.type(patterns) === "Array") ? patterns : [patterns];

			for (var j = 0; j < patterns.length; ++j) {
				var pattern = patterns[j],
					inside = pattern.inside,
					lookbehind = !!pattern.lookbehind,
					lookbehindLength = 0,
					alias = pattern.alias;

				pattern = pattern.pattern || pattern;

				for (var i=0; i<strarr.length; i++) { // Don’t cache length as it changes during the loop

					var str = strarr[i];

					if (strarr.length > text.length) {
						// Something went terribly wrong, ABORT, ABORT!
						break tokenloop;
					}

					if (str instanceof Token) {
						continue;
					}

					pattern.lastIndex = 0;

					var match = pattern.exec(str);

					if (match) {
						if(lookbehind) {
							lookbehindLength = match[1].length;
						}

						var from = match.index - 1 + lookbehindLength,
							match = match[0].slice(lookbehindLength),
							len = match.length,
							to = from + len,
							before = str.slice(0, from + 1),
							after = str.slice(to + 1);

						var args = [i, 1];

						if (before) {
							args.push(before);
						}

						var wrapped = new Token(token, inside? _.tokenize(match, inside) : match, alias);

						args.push(wrapped);

						if (after) {
							args.push(after);
						}

						Array.prototype.splice.apply(strarr, args);
					}
				}
			}
		}

		return strarr;
	},

	hooks: {
		all: {},

		add: function (name, callback) {
			var hooks = _.hooks.all;

			hooks[name] = hooks[name] || [];

			hooks[name].push(callback);
		},

		run: function (name, env) {
			var callbacks = _.hooks.all[name];

			if (!callbacks || !callbacks.length) {
				return;
			}

			for (var i=0, callback; callback = callbacks[i++];) {
				callback(env);
			}
		}
	}
};

var Token = _.Token = function(type, content, alias) {
	this.type = type;
	this.content = content;
	this.alias = alias;
};

Token.stringify = function(o, language, parent) {
	if (typeof o == 'string') {
		return o;
	}

	if (Object.prototype.toString.call(o) == '[object Array]') {
		return o.map(function(element) {
			return Token.stringify(element, language, o);
		}).join('');
	}

	var env = {
		type: o.type,
		content: Token.stringify(o.content, language, parent),
		tag: 'span',
		classes: ['token', o.type],
		attributes: {},
		language: language,
		parent: parent
	};

	if (env.type == 'comment') {
		env.attributes['spellcheck'] = 'true';
	}

	if (o.alias) {
		var aliases = _.util.type(o.alias) === 'Array' ? o.alias : [o.alias];
		Array.prototype.push.apply(env.classes, aliases);
	}

	_.hooks.run('wrap', env);

	var attributes = '';

	for (var name in env.attributes) {
		attributes += name + '="' + (env.attributes[name] || '') + '"';
	}

	return '<' + env.tag + ' class="' + env.classes.join(' ') + '" ' + attributes + '>' + env.content + '</' + env.tag + '>';

};

if (!self.document) {
	if (!self.addEventListener) {
		// in Node.js
		return self.Prism;
	}
 	// In worker
	self.addEventListener('message', function(evt) {
		var message = JSON.parse(evt.data),
		    lang = message.language,
		    code = message.code;

		self.postMessage(JSON.stringify(_.util.encode(_.tokenize(code, _.languages[lang]))));
		self.close();
	}, false);

	return self.Prism;
}

// Get current script and highlight
var script = document.getElementsByTagName('script');

script = script[script.length - 1];

if (script) {
	_.filename = script.src;

	if (document.addEventListener && !script.hasAttribute('data-manual')) {
		document.addEventListener('DOMContentLoaded', _.highlightAll);
	}
}

return self.Prism;

})();

if (typeof module !== 'undefined' && module.exports) {
	module.exports = Prism;
}
;
Prism.languages.markup = {
	'comment': /<!--[\w\W]*?-->/g,
	'prolog': /<\?.+?\?>/,
	'doctype': /<!DOCTYPE.+?>/,
	'cdata': /<!\[CDATA\[[\w\W]*?]]>/i,
	'tag': {
		pattern: /<\/?[\w:-]+\s*(?:\s+[\w:-]+(?:=(?:("|')(\\?[\w\W])*?\1|[^\s'">=]+))?\s*)*\/?>/gi,
		inside: {
			'tag': {
				pattern: /^<\/?[\w:-]+/i,
				inside: {
					'punctuation': /^<\/?/,
					'namespace': /^[\w-]+?:/
				}
			},
			'attr-value': {
				pattern: /=(?:('|")[\w\W]*?(\1)|[^\s>]+)/gi,
				inside: {
					'punctuation': /=|>|"/g
				}
			},
			'punctuation': /\/?>/g,
			'attr-name': {
				pattern: /[\w:-]+/g,
				inside: {
					'namespace': /^[\w-]+?:/
				}
			}

		}
	},
	'entity': /\&#?[\da-z]{1,8};/gi
};

// Plugin to make entity title show the real entity, idea by Roman Komarov
Prism.hooks.add('wrap', function(env) {

	if (env.type === 'entity') {
		env.attributes['title'] = env.content.replace(/&amp;/, '&');
	}
});
;
Prism.languages.css = {
	'comment': /\/\*[\w\W]*?\*\//g,
	'atrule': {
		pattern: /@[\w-]+?.*?(;|(?=\s*{))/gi,
		inside: {
			'punctuation': /[;:]/g
		}
	},
	'url': /url\((["']?).*?\1\)/gi,
	'selector': /[^\{\}\s][^\{\};]*(?=\s*\{)/g,
	'property': /(\b|\B)[\w-]+(?=\s*:)/ig,
	'string': /("|')(\\?.)*?\1/g,
	'important': /\B!important\b/gi,
	'punctuation': /[\{\};:]/g,
	'function': /[-a-z0-9]+(?=\()/ig
};

if (Prism.languages.markup) {
	Prism.languages.insertBefore('markup', 'tag', {
		'style': {
			pattern: /<style[\w\W]*?>[\w\W]*?<\/style>/ig,
			inside: {
				'tag': {
					pattern: /<style[\w\W]*?>|<\/style>/ig,
					inside: Prism.languages.markup.tag.inside
				},
				rest: Prism.languages.css
			}
		}
	});
};
Prism.languages.css.selector = {
	pattern: /[^\{\}\s][^\{\}]*(?=\s*\{)/g,
	inside: {
		'pseudo-element': /:(?:after|before|first-letter|first-line|selection)|::[-\w]+/g,
		'pseudo-class': /:[-\w]+(?:\(.*\))?/g,
		'class': /\.[-:\.\w]+/g,
		'id': /#[-:\.\w]+/g
	}
};

Prism.languages.insertBefore('css', 'ignore', {
	'hexcode': /#[\da-f]{3,6}/gi,
	'entity': /\\[\da-f]{1,8}/gi,
	'number': /[\d%\.]+/g
});;
Prism.languages.clike = {
	'comment': [
		{
			pattern: /(^|[^\\])\/\*[\w\W]*?\*\//g,
			lookbehind: true
		},
		{
			pattern: /(^|[^\\:])\/\/.*?(\r?\n|$)/g,
			lookbehind: true
		}
	],
	'string': /("|')(\\?.)*?\1/g,
	'class-name': {
		pattern: /((?:(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[a-z0-9_\.\\]+/ig,
		lookbehind: true,
		inside: {
			punctuation: /(\.|\\)/
		}
	},
	'keyword': /\b(if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/g,
	'boolean': /\b(true|false)\b/g,
	'function': {
		pattern: /[a-z0-9_]+\(/ig,
		inside: {
			punctuation: /\(/
		}
	},
	'number': /\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee]-?\d+)?)\b/g,
	'operator': /[-+]{1,2}|!|<=?|>=?|={1,3}|&{1,2}|\|?\||\?|\*|\/|\~|\^|\%/g,
	'ignore': /&(lt|gt|amp);/gi,
	'punctuation': /[{}[\];(),.:]/g
};
;
Prism.languages.javascript = Prism.languages.extend('clike', {
	'keyword': /\b(break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|false|finally|for|function|get|if|implements|import|in|instanceof|interface|let|new|null|package|private|protected|public|return|set|static|super|switch|this|throw|true|try|typeof|var|void|while|with|yield)\b/g,
	'number': /\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee]-?\d+)?|NaN|-?Infinity)\b/g
});

Prism.languages.insertBefore('javascript', 'keyword', {
	'regex': {
		pattern: /(^|[^/])\/(?!\/)(\[.+?]|\\.|[^/\r\n])+\/[gim]{0,3}(?=\s*($|[\r\n,.;})]))/g,
		lookbehind: true
	}
});

if (Prism.languages.markup) {
	Prism.languages.insertBefore('markup', 'tag', {
		'script': {
			pattern: /<script[\w\W]*?>[\w\W]*?<\/script>/ig,
			inside: {
				'tag': {
					pattern: /<script[\w\W]*?>|<\/script>/ig,
					inside: Prism.languages.markup.tag.inside
				},
				rest: Prism.languages.javascript
			}
		}
	});
}
;
/**
 * Original by Aaron Harun: http://aahacreative.com/2012/07/31/php-syntax-highlighting-prism/
 * Modified by Miles Johnson: http://milesj.me
 *
 * Supports the following:
 * 		- Extends clike syntax
 * 		- Support for PHP 5.3+ (namespaces, traits, generators, etc)
 * 		- Smarter constant and function matching
 *
 * Adds the following new token classes:
 * 		constant, delimiter, variable, function, package
 */

Prism.languages.php = Prism.languages.extend('clike', {
	'keyword': /\b(and|or|xor|array|as|break|case|cfunction|class|const|continue|declare|default|die|do|else|elseif|enddeclare|endfor|endforeach|endif|endswitch|endwhile|extends|for|foreach|function|include|include_once|global|if|new|return|static|switch|use|require|require_once|var|while|abstract|interface|public|implements|private|protected|parent|throw|null|echo|print|trait|namespace|final|yield|goto|instanceof|finally|try|catch)\b/ig,
	'constant': /\b[A-Z0-9_]{2,}\b/g,
	'comment': {
		pattern: /(^|[^\\])(\/\*[\w\W]*?\*\/|(^|[^:])(\/\/|#).*?(\r?\n|$))/g,
		lookbehind: true
	}
});

Prism.languages.insertBefore('php', 'keyword', {
	'delimiter': /(\?>|<\?php|<\?)/ig,
	'variable': /(\$\w+)\b/ig,
	'package': {
		pattern: /(\\|namespace\s+|use\s+)[\w\\]+/g,
		lookbehind: true,
		inside: {
			punctuation: /\\/
		}
	}
});

// Must be defined after the function pattern
Prism.languages.insertBefore('php', 'operator', {
	'property': {
		pattern: /(->)[\w]+/g,
		lookbehind: true
	}
});

// Add HTML support of the markup language exists
if (Prism.languages.markup) {

	// Tokenize all inline PHP blocks that are wrapped in <?php ?>
	// This allows for easy PHP + markup highlighting
	Prism.hooks.add('before-highlight', function(env) {
		if (env.language !== 'php') {
			return;
		}

		env.tokenStack = [];

		env.backupCode = env.code;
		env.code = env.code.replace(/(?:<\?php|<\?)[\w\W]*?(?:\?>)/ig, function(match) {
			env.tokenStack.push(match);

			return '{{{PHP' + env.tokenStack.length + '}}}';
		});
	});

	// Restore env.code for other plugins (e.g. line-numbers)
	Prism.hooks.add('before-insert', function(env) {
		if (env.language === 'php') {
			env.code = env.backupCode;
			delete env.backupCode;
		}
	});

	// Re-insert the tokens after highlighting
	Prism.hooks.add('after-highlight', function(env) {
		if (env.language !== 'php') {
			return;
		}

		for (var i = 0, t; t = env.tokenStack[i]; i++) {
			env.highlightedCode = env.highlightedCode.replace('{{{PHP' + (i + 1) + '}}}', Prism.highlight(t, env.grammar, 'php'));
		}

		env.element.innerHTML = env.highlightedCode;
	});

	// Wrap tokens in classes that are missing them
	Prism.hooks.add('wrap', function(env) {
		if (env.language === 'php' && env.type === 'markup') {
			env.content = env.content.replace(/(\{\{\{PHP[0-9]+\}\}\})/g, "<span class=\"token php\">$1</span>");
		}
	});

	// Add the rules before all others
	Prism.languages.insertBefore('php', 'comment', {
		'markup': {
			pattern: /<[^?]\/?(.*?)>/g,
			inside: Prism.languages.markup
		},
		'php': /\{\{\{PHP[0-9]+\}\}\}/g
	});
}
;
Prism.languages.insertBefore('php', 'variable', {
	'this': /\$this/g,
	'global': /\$_?(GLOBALS|SERVER|GET|POST|FILES|REQUEST|SESSION|ENV|COOKIE|HTTP_RAW_POST_DATA|argc|argv|php_errormsg|http_response_header)/g,
	'scope': {
		pattern: /\b[\w\\]+::/g,
		inside: {
			keyword: /(static|self|parent)/,
			punctuation: /(::|\\)/
		}
	}
});;
Prism.languages.coffeescript = Prism.languages.extend('javascript', {
	'comment': [
		/([#]{3}\s*\r?\n(.*\s*\r*\n*)\s*?\r?\n[#]{3})/g,
		/(\s|^)([#]{1}[^#^\r^\n]{2,}?(\r?\n|$))/g
	],
	'keyword': /\b(this|window|delete|class|extends|namespace|extend|ar|let|if|else|while|do|for|each|of|return|in|instanceof|new|with|typeof|try|catch|finally|null|undefined|break|continue)\b/g
});

Prism.languages.insertBefore('coffeescript', 'keyword', {
	'function': {
		pattern: /[a-z|A-z]+\s*[:|=]\s*(\([.|a-z\s|,|:|{|}|\"|\'|=]*\))?\s*-&gt;/gi,
		inside: {
			'function-name': /[_?a-z-|A-Z-]+(\s*[:|=])| @[_?$?a-z-|A-Z-]+(\s*)| /g,
			'operator': /[-+]{1,2}|!|=?&lt;|=?&gt;|={1,2}|(&amp;){1,2}|\|?\||\?|\*|\//g
		}
	},
	'attr-name': /[_?a-z-|A-Z-]+(\s*:)| @[_?$?a-z-|A-Z-]+(\s*)| /g
});
;
Prism.languages.scss = Prism.languages.extend('css', {
	'comment': {
		pattern: /(^|[^\\])(\/\*[\w\W]*?\*\/|\/\/.*?(\r?\n|$))/g,
		lookbehind: true
	},
	// aturle is just the @***, not the entire rule (to highlight var & stuffs)
	// + add ability to highlight number & unit for media queries
	'atrule': /@[\w-]+(?=\s+(\(|\{|;))/gi,
	// url, compassified
	'url': /([-a-z]+-)*url(?=\()/gi,
	// CSS selector regex is not appropriate for Sass
	// since there can be lot more things (var, @ directive, nesting..)
	// a selector must start at the end of a property or after a brace (end of other rules or nesting)
	// it can contain some caracters that aren't used for defining rules or end of selector, & (parent selector), or interpolated variable
	// the end of a selector is found when there is no rules in it ( {} or {\s}) or if there is a property (because an interpolated var
	// can "pass" as a selector- e.g: proper#{$erty})
	// this one was ard to do, so please be careful if you edit this one :)
	'selector': /([^@;\{\}\(\)]?([^@;\{\}\(\)]|&|\#\{\$[-_\w]+\})+)(?=\s*\{(\}|\s|[^\}]+(:|\{)[^\}]+))/gm
});

Prism.languages.insertBefore('scss', 'atrule', {
	'keyword': /@(if|else if|else|for|each|while|import|extend|debug|warn|mixin|include|function|return|content)|(?=@for\s+\$[-_\w]+\s)+from/i
});

Prism.languages.insertBefore('scss', 'property', {
	// var and interpolated vars
	'variable': /((\$[-_\w]+)|(#\{\$[-_\w]+\}))/i
});

Prism.languages.insertBefore('scss', 'ignore', {
	'placeholder': /%[-_\w]+/i,
	'statement': /\B!(default|optional)\b/gi,
	'boolean': /\b(true|false)\b/g,
	'null': /\b(null)\b/g,
	'operator': /\s+([-+]{1,2}|={1,2}|!=|\|?\||\?|\*|\/|\%)\s+/g
});
;
Prism.languages.bash = Prism.languages.extend('clike', {
	'comment': {
		pattern: /(^|[^"{\\])(#.*?(\r?\n|$))/g,
		lookbehind: true
	},
	'string': {
		//allow multiline string
		pattern: /("|')(\\?[\s\S])*?\1/g,
		inside: {
			//'property' class reused for bash variables
			'property': /\$([a-zA-Z0-9_#\?\-\*!@]+|\{[^\}]+\})/g
		}
	},
	'keyword': /\b(if|then|else|elif|fi|for|break|continue|while|in|case|function|select|do|done|until|echo|exit|return|set|declare)\b/g
});

Prism.languages.insertBefore('bash', 'keyword', {
	//'property' class reused for bash variables
	'property': /\$([a-zA-Z0-9_#\?\-\*!@]+|\{[^}]+\})/g
});
Prism.languages.insertBefore('bash', 'comment', {
	//shebang must be before comment, 'important' class from css reused
	'important': /(^#!\s*\/bin\/bash)|(^#!\s*\/bin\/sh)/g
});
;
Prism.languages.python= { 
	'comment': {
		pattern: /(^|[^\\])#.*?(\r?\n|$)/g,
		lookbehind: true
	},
	'string': /"""[\s\S]+?"""|("|')(\\?.)*?\1/g,
	'keyword' : /\b(as|assert|break|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|pass|print|raise|return|try|while|with|yield)\b/g,
	'boolean' : /\b(True|False)\b/g,
	'number' : /\b-?(0x)?\d*\.?[\da-f]+\b/g,
	'operator' : /[-+]{1,2}|=?&lt;|=?&gt;|!|={1,2}|(&){1,2}|(&amp;){1,2}|\|?\||\?|\*|\/|~|\^|%|\b(or|and|not)\b/g,
	'ignore' : /&(lt|gt|amp);/gi,
	'punctuation' : /[{}[\];(),.:]/g
};

;
Prism.languages.sql= { 
	'comment': {
		pattern: /(^|[^\\])(\/\*[\w\W]*?\*\/|((--)|(\/\/)|#).*?(\r?\n|$))/g,
		lookbehind: true
	},
	'string' : /("|')(\\?[\s\S])*?\1/g,
	'keyword' : /\b(ACTION|ADD|AFTER|ALGORITHM|ALTER|ANALYZE|APPLY|AS|ASC|AUTHORIZATION|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADE|CASCADED|CASE|CHAIN|CHAR VARYING|CHARACTER VARYING|CHECK|CHECKPOINT|CLOSE|CLUSTERED|COALESCE|COLUMN|COLUMNS|COMMENT|COMMIT|COMMITTED|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS|CONTAINSTABLE|CONTINUE|CONVERT|CREATE|CROSS|CURRENT|CURRENT_DATE|CURRENT_TIME|CURRENT_TIMESTAMP|CURRENT_USER|CURSOR|DATA|DATABASE|DATABASES|DATETIME|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE|DOUBLE PRECISION|DROP|DUMMY|DUMP|DUMPFILE|DUPLICATE KEY|ELSE|ENABLE|ENCLOSED BY|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPE|ESCAPED BY|EXCEPT|EXEC|EXECUTE|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR|FOR EACH ROW|FORCE|FOREIGN|FREETEXT|FREETEXTTABLE|FROM|FULL|FUNCTION|GEOMETRY|GEOMETRYCOLLECTION|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|IDENTITY|IDENTITY_INSERT|IDENTITYCOL|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTO|INVOKER|ISOLATION LEVEL|JOIN|KEY|KEYS|KILL|LANGUAGE SQL|LAST|LEFT|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONGBLOB|LONGTEXT|MATCH|MATCHED|MEDIUMBLOB|MEDIUMINT|MEDIUMTEXT|MERGE|MIDDLEINT|MODIFIES SQL DATA|MODIFY|MULTILINESTRING|MULTIPOINT|MULTIPOLYGON|NATIONAL|NATIONAL CHAR VARYING|NATIONAL CHARACTER|NATIONAL CHARACTER VARYING|NATIONAL VARCHAR|NATURAL|NCHAR|NCHAR VARCHAR|NEXT|NO|NO SQL|NOCHECK|NOCYCLE|NONCLUSTERED|NULLIF|NUMERIC|OF|OFF|OFFSETS|ON|OPEN|OPENDATASOURCE|OPENQUERY|OPENROWSET|OPTIMIZE|OPTION|OPTIONALLY|ORDER|OUT|OUTER|OUTFILE|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREV|PRIMARY|PRINT|PRIVILEGES|PROC|PROCEDURE|PUBLIC|PURGE|QUICK|RAISERROR|READ|READS SQL DATA|READTEXT|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEATABLE|REPLICATION|REQUIRE|RESTORE|RESTRICT|RETURN|RETURNS|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROWCOUNT|ROWGUIDCOL|ROWS?|RTREE|RULE|SAVE|SAVEPOINT|SCHEMA|SELECT|SERIAL|SERIALIZABLE|SESSION|SESSION_USER|SET|SETUSER|SHARE MODE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|START|STARTING BY|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLE|TABLES|TABLESPACE|TEMPORARY|TEMPTABLE|TERMINATED BY|TEXT|TEXTSIZE|THEN|TIMESTAMP|TINYBLOB|TINYINT|TINYTEXT|TO|TOP|TRAN|TRANSACTION|TRANSACTIONS|TRIGGER|TRUNCATE|TSEQUAL|TYPE|TYPES|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNPIVOT|UPDATE|UPDATETEXT|USAGE|USE|USER|USING|VALUE|VALUES|VARBINARY|VARCHAR|VARCHARACTER|VARYING|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH|WITH ROLLUP|WITHIN|WORK|WRITE|WRITETEXT)\b/gi,
	'boolean' : /\b(TRUE|FALSE|NULL)\b/gi,
	'number' : /\b-?(0x)?\d*\.?[\da-f]+\b/g,
	'operator' : /\b(ALL|AND|ANY|BETWEEN|EXISTS|IN|LIKE|NOT|OR|IS|UNIQUE|CHARACTER SET|COLLATE|DIV|OFFSET|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b|[-+]{1}|!|=?&lt;|=?&gt;|={1}|(&amp;){1,2}|\|?\||\?|\*|\//gi,
	'ignore' : /&(lt|gt|amp);/gi,
	'punctuation' : /[;[\]()`,.]/g
};
;
Prism.languages.http = {
    'request-line': {
        pattern: /^(POST|GET|PUT|DELETE|OPTIONS|PATCH|TRACE|CONNECT)\b\shttps?:\/\/\S+\sHTTP\/[0-9.]+/g,
        inside: {
            // HTTP Verb
            property: /^\b(POST|GET|PUT|DELETE|OPTIONS|PATCH|TRACE|CONNECT)\b/g,
            // Path or query argument
            'attr-name': /:\w+/g
        }
    },
    'response-status': {
        pattern: /^HTTP\/1.[01] [0-9]+.*/g,
        inside: {
            // Status, e.g. 200 OK
            property: /[0-9]+[A-Z\s-]+$/g
        }
    },
    // HTTP header name
    keyword: /^[\w-]+:(?=.+)/gm
};

// Create a mapping of Content-Type headers to language definitions
var httpLanguages = {
    'application/json': Prism.languages.javascript,
    'application/xml': Prism.languages.markup,
    'text/xml': Prism.languages.markup,
    'text/html': Prism.languages.markup
};

// Insert each content type parser that has its associated language
// currently loaded.
for (var contentType in httpLanguages) {
    if (httpLanguages[contentType]) {
        var options = {};
        options[contentType] = {
            pattern: new RegExp('(content-type:\\s*' + contentType + '[\\w\\W]*?)\\n\\n[\\w\\W]*', 'gi'),
            lookbehind: true,
            inside: {
                rest: httpLanguages[contentType]
            }
        };
        Prism.languages.insertBefore('http', 'keyword', options);
    }
}
;
/**
 * Original by Samuel Flores
 *
 * Adds the following new token classes:
 * 		constant, builtin, variable, symbol, regex
 */
Prism.languages.ruby = Prism.languages.extend('clike', {
	'comment': /#[^\r\n]*(\r?\n|$)/g,
	'keyword': /\b(alias|and|BEGIN|begin|break|case|class|def|define_method|defined|do|each|else|elsif|END|end|ensure|false|for|if|in|module|new|next|nil|not|or|raise|redo|require|rescue|retry|return|self|super|then|throw|true|undef|unless|until|when|while|yield)\b/g,
	'builtin': /\b(Array|Bignum|Binding|Class|Continuation|Dir|Exception|FalseClass|File|Stat|File|Fixnum|Fload|Hash|Integer|IO|MatchData|Method|Module|NilClass|Numeric|Object|Proc|Range|Regexp|String|Struct|TMS|Symbol|ThreadGroup|Thread|Time|TrueClass)\b/,
	'constant': /\b[A-Z][a-zA-Z_0-9]*[?!]?\b/g
});

Prism.languages.insertBefore('ruby', 'keyword', {
	'regex': {
		pattern: /(^|[^/])\/(?!\/)(\[.+?]|\\.|[^/\r\n])+\/[gim]{0,3}(?=\s*($|[\r\n,.;})]))/g,
		lookbehind: true
	},
	'variable': /[@$]+\b[a-zA-Z_][a-zA-Z_0-9]*[?!]?\b/g,
	'symbol': /:\b[a-zA-Z_][a-zA-Z_0-9]*[?!]?\b/g
});
;
Prism.languages.ini= {
	'comment': /^\s*;.*$/gm,
	'important': /\[.*?\]/gm,
	'constant': /^\s*[^\s\=]+?(?=[ \t]*\=)/gm,
	'attr-value': {
		pattern: /\=.*/gm, 
		inside: {
			'punctuation': /^[\=]/g
		}
	}
};;
Prism.languages.apacheconf = {
	'comment': /\#.*/g,
	'directive-inline': {
		pattern: /^\s*\b(AcceptFilter|AcceptPathInfo|AccessFileName|Action|AddAlt|AddAltByEncoding|AddAltByType|AddCharset|AddDefaultCharset|AddDescription|AddEncoding|AddHandler|AddIcon|AddIconByEncoding|AddIconByType|AddInputFilter|AddLanguage|AddModuleInfo|AddOutputFilter|AddOutputFilterByType|AddType|Alias|AliasMatch|Allow|AllowCONNECT|AllowEncodedSlashes|AllowMethods|AllowOverride|AllowOverrideList|Anonymous|Anonymous_LogEmail|Anonymous_MustGiveEmail|Anonymous_NoUserID|Anonymous_VerifyEmail|AsyncRequestWorkerFactor|AuthBasicAuthoritative|AuthBasicFake|AuthBasicProvider|AuthBasicUseDigestAlgorithm|AuthDBDUserPWQuery|AuthDBDUserRealmQuery|AuthDBMGroupFile|AuthDBMType|AuthDBMUserFile|AuthDigestAlgorithm|AuthDigestDomain|AuthDigestNonceLifetime|AuthDigestProvider|AuthDigestQop|AuthDigestShmemSize|AuthFormAuthoritative|AuthFormBody|AuthFormDisableNoStore|AuthFormFakeBasicAuth|AuthFormLocation|AuthFormLoginRequiredLocation|AuthFormLoginSuccessLocation|AuthFormLogoutLocation|AuthFormMethod|AuthFormMimetype|AuthFormPassword|AuthFormProvider|AuthFormSitePassphrase|AuthFormSize|AuthFormUsername|AuthGroupFile|AuthLDAPAuthorizePrefix|AuthLDAPBindAuthoritative|AuthLDAPBindDN|AuthLDAPBindPassword|AuthLDAPCharsetConfig|AuthLDAPCompareAsUser|AuthLDAPCompareDNOnServer|AuthLDAPDereferenceAliases|AuthLDAPGroupAttribute|AuthLDAPGroupAttributeIsDN|AuthLDAPInitialBindAsUser|AuthLDAPInitialBindPattern|AuthLDAPMaxSubGroupDepth|AuthLDAPRemoteUserAttribute|AuthLDAPRemoteUserIsDN|AuthLDAPSearchAsUser|AuthLDAPSubGroupAttribute|AuthLDAPSubGroupClass|AuthLDAPUrl|AuthMerging|AuthName|AuthnCacheContext|AuthnCacheEnable|AuthnCacheProvideFor|AuthnCacheSOCache|AuthnCacheTimeout|AuthnzFcgiCheckAuthnProvider|AuthnzFcgiDefineProvider|AuthType|AuthUserFile|AuthzDBDLoginToReferer|AuthzDBDQuery|AuthzDBDRedirectQuery|AuthzDBMType|AuthzSendForbiddenOnFailure|BalancerGrowth|BalancerInherit|BalancerMember|BalancerPersist|BrowserMatch|BrowserMatchNoCase|BufferedLogs|BufferSize|CacheDefaultExpire|CacheDetailHeader|CacheDirLength|CacheDirLevels|CacheDisable|CacheEnable|CacheFile|CacheHeader|CacheIgnoreCacheControl|CacheIgnoreHeaders|CacheIgnoreNoLastMod|CacheIgnoreQueryString|CacheIgnoreURLSessionIdentifiers|CacheKeyBaseURL|CacheLastModifiedFactor|CacheLock|CacheLockMaxAge|CacheLockPath|CacheMaxExpire|CacheMaxFileSize|CacheMinExpire|CacheMinFileSize|CacheNegotiatedDocs|CacheQuickHandler|CacheReadSize|CacheReadTime|CacheRoot|CacheSocache|CacheSocacheMaxSize|CacheSocacheMaxTime|CacheSocacheMinTime|CacheSocacheReadSize|CacheSocacheReadTime|CacheStaleOnError|CacheStoreExpired|CacheStoreNoStore|CacheStorePrivate|CGIDScriptTimeout|CGIMapExtension|CharsetDefault|CharsetOptions|CharsetSourceEnc|CheckCaseOnly|CheckSpelling|ChrootDir|ContentDigest|CookieDomain|CookieExpires|CookieName|CookieStyle|CookieTracking|CoreDumpDirectory|CustomLog|Dav|DavDepthInfinity|DavGenericLockDB|DavLockDB|DavMinTimeout|DBDExptime|DBDInitSQL|DBDKeep|DBDMax|DBDMin|DBDParams|DBDPersist|DBDPrepareSQL|DBDriver|DefaultIcon|DefaultLanguage|DefaultRuntimeDir|DefaultType|Define|DeflateBufferSize|DeflateCompressionLevel|DeflateFilterNote|DeflateInflateLimitRequestBody|DeflateInflateRatioBurst|DeflateInflateRatioLimit|DeflateMemLevel|DeflateWindowSize|Deny|DirectoryCheckHandler|DirectoryIndex|DirectoryIndexRedirect|DirectorySlash|DocumentRoot|DTracePrivileges|DumpIOInput|DumpIOOutput|EnableExceptionHook|EnableMMAP|EnableSendfile|Error|ErrorDocument|ErrorLog|ErrorLogFormat|Example|ExpiresActive|ExpiresByType|ExpiresDefault|ExtendedStatus|ExtFilterDefine|ExtFilterOptions|FallbackResource|FileETag|FilterChain|FilterDeclare|FilterProtocol|FilterProvider|FilterTrace|ForceLanguagePriority|ForceType|ForensicLog|GprofDir|GracefulShutdownTimeout|Group|Header|HeaderName|HeartbeatAddress|HeartbeatListen|HeartbeatMaxServers|HeartbeatStorage|HeartbeatStorage|HostnameLookups|IdentityCheck|IdentityCheckTimeout|ImapBase|ImapDefault|ImapMenu|Include|IncludeOptional|IndexHeadInsert|IndexIgnore|IndexIgnoreReset|IndexOptions|IndexOrderDefault|IndexStyleSheet|InputSed|ISAPIAppendLogToErrors|ISAPIAppendLogToQuery|ISAPICacheFile|ISAPIFakeAsync|ISAPILogNotSupported|ISAPIReadAheadBuffer|KeepAlive|KeepAliveTimeout|KeptBodySize|LanguagePriority|LDAPCacheEntries|LDAPCacheTTL|LDAPConnectionPoolTTL|LDAPConnectionTimeout|LDAPLibraryDebug|LDAPOpCacheEntries|LDAPOpCacheTTL|LDAPReferralHopLimit|LDAPReferrals|LDAPRetries|LDAPRetryDelay|LDAPSharedCacheFile|LDAPSharedCacheSize|LDAPTimeout|LDAPTrustedClientCert|LDAPTrustedGlobalCert|LDAPTrustedMode|LDAPVerifyServerCert|LimitInternalRecursion|LimitRequestBody|LimitRequestFields|LimitRequestFieldSize|LimitRequestLine|LimitXMLRequestBody|Listen|ListenBackLog|LoadFile|LoadModule|LogFormat|LogLevel|LogMessage|LuaAuthzProvider|LuaCodeCache|LuaHookAccessChecker|LuaHookAuthChecker|LuaHookCheckUserID|LuaHookFixups|LuaHookInsertFilter|LuaHookLog|LuaHookMapToStorage|LuaHookTranslateName|LuaHookTypeChecker|LuaInherit|LuaInputFilter|LuaMapHandler|LuaOutputFilter|LuaPackageCPath|LuaPackagePath|LuaQuickHandler|LuaRoot|LuaScope|MaxConnectionsPerChild|MaxKeepAliveRequests|MaxMemFree|MaxRangeOverlaps|MaxRangeReversals|MaxRanges|MaxRequestWorkers|MaxSpareServers|MaxSpareThreads|MaxThreads|MergeTrailers|MetaDir|MetaFiles|MetaSuffix|MimeMagicFile|MinSpareServers|MinSpareThreads|MMapFile|ModemStandard|ModMimeUsePathInfo|MultiviewsMatch|Mutex|NameVirtualHost|NoProxy|NWSSLTrustedCerts|NWSSLUpgradeable|Options|Order|OutputSed|PassEnv|PidFile|PrivilegesMode|Protocol|ProtocolEcho|ProxyAddHeaders|ProxyBadHeader|ProxyBlock|ProxyDomain|ProxyErrorOverride|ProxyExpressDBMFile|ProxyExpressDBMType|ProxyExpressEnable|ProxyFtpDirCharset|ProxyFtpEscapeWildcards|ProxyFtpListOnWildcard|ProxyHTMLBufSize|ProxyHTMLCharsetOut|ProxyHTMLDocType|ProxyHTMLEnable|ProxyHTMLEvents|ProxyHTMLExtended|ProxyHTMLFixups|ProxyHTMLInterp|ProxyHTMLLinks|ProxyHTMLMeta|ProxyHTMLStripComments|ProxyHTMLURLMap|ProxyIOBufferSize|ProxyMaxForwards|ProxyPass|ProxyPassInherit|ProxyPassInterpolateEnv|ProxyPassMatch|ProxyPassReverse|ProxyPassReverseCookieDomain|ProxyPassReverseCookiePath|ProxyPreserveHost|ProxyReceiveBufferSize|ProxyRemote|ProxyRemoteMatch|ProxyRequests|ProxySCGIInternalRedirect|ProxySCGISendfile|ProxySet|ProxySourceAddress|ProxyStatus|ProxyTimeout|ProxyVia|ReadmeName|ReceiveBufferSize|Redirect|RedirectMatch|RedirectPermanent|RedirectTemp|ReflectorHeader|RemoteIPHeader|RemoteIPInternalProxy|RemoteIPInternalProxyList|RemoteIPProxiesHeader|RemoteIPTrustedProxy|RemoteIPTrustedProxyList|RemoveCharset|RemoveEncoding|RemoveHandler|RemoveInputFilter|RemoveLanguage|RemoveOutputFilter|RemoveType|RequestHeader|RequestReadTimeout|Require|RewriteBase|RewriteCond|RewriteEngine|RewriteMap|RewriteOptions|RewriteRule|RLimitCPU|RLimitMEM|RLimitNPROC|Satisfy|ScoreBoardFile|Script|ScriptAlias|ScriptAliasMatch|ScriptInterpreterSource|ScriptLog|ScriptLogBuffer|ScriptLogLength|ScriptSock|SecureListen|SeeRequestTail|SendBufferSize|ServerAdmin|ServerAlias|ServerLimit|ServerName|ServerPath|ServerRoot|ServerSignature|ServerTokens|Session|SessionCookieName|SessionCookieName2|SessionCookieRemove|SessionCryptoCipher|SessionCryptoDriver|SessionCryptoPassphrase|SessionCryptoPassphraseFile|SessionDBDCookieName|SessionDBDCookieName2|SessionDBDCookieRemove|SessionDBDDeleteLabel|SessionDBDInsertLabel|SessionDBDPerUser|SessionDBDSelectLabel|SessionDBDUpdateLabel|SessionEnv|SessionExclude|SessionHeader|SessionInclude|SessionMaxAge|SetEnv|SetEnvIf|SetEnvIfExpr|SetEnvIfNoCase|SetHandler|SetInputFilter|SetOutputFilter|SSIEndTag|SSIErrorMsg|SSIETag|SSILastModified|SSILegacyExprParser|SSIStartTag|SSITimeFormat|SSIUndefinedEcho|SSLCACertificateFile|SSLCACertificatePath|SSLCADNRequestFile|SSLCADNRequestPath|SSLCARevocationCheck|SSLCARevocationFile|SSLCARevocationPath|SSLCertificateChainFile|SSLCertificateFile|SSLCertificateKeyFile|SSLCipherSuite|SSLCompression|SSLCryptoDevice|SSLEngine|SSLFIPS|SSLHonorCipherOrder|SSLInsecureRenegotiation|SSLOCSPDefaultResponder|SSLOCSPEnable|SSLOCSPOverrideResponder|SSLOCSPResponderTimeout|SSLOCSPResponseMaxAge|SSLOCSPResponseTimeSkew|SSLOCSPUseRequestNonce|SSLOpenSSLConfCmd|SSLOptions|SSLPassPhraseDialog|SSLProtocol|SSLProxyCACertificateFile|SSLProxyCACertificatePath|SSLProxyCARevocationCheck|SSLProxyCARevocationFile|SSLProxyCARevocationPath|SSLProxyCheckPeerCN|SSLProxyCheckPeerExpire|SSLProxyCheckPeerName|SSLProxyCipherSuite|SSLProxyEngine|SSLProxyMachineCertificateChainFile|SSLProxyMachineCertificateFile|SSLProxyMachineCertificatePath|SSLProxyProtocol|SSLProxyVerify|SSLProxyVerifyDepth|SSLRandomSeed|SSLRenegBufferSize|SSLRequire|SSLRequireSSL|SSLSessionCache|SSLSessionCacheTimeout|SSLSessionTicketKeyFile|SSLSRPUnknownUserSeed|SSLSRPVerifierFile|SSLStaplingCache|SSLStaplingErrorCacheTimeout|SSLStaplingFakeTryLater|SSLStaplingForceURL|SSLStaplingResponderTimeout|SSLStaplingResponseMaxAge|SSLStaplingResponseTimeSkew|SSLStaplingReturnResponderErrors|SSLStaplingStandardCacheTimeout|SSLStrictSNIVHostCheck|SSLUserName|SSLUseStapling|SSLVerifyClient|SSLVerifyDepth|StartServers|StartThreads|Substitute|Suexec|SuexecUserGroup|ThreadLimit|ThreadsPerChild|ThreadStackSize|TimeOut|TraceEnable|TransferLog|TypesConfig|UnDefine|UndefMacro|UnsetEnv|Use|UseCanonicalName|UseCanonicalPhysicalPort|User|UserDir|VHostCGIMode|VHostCGIPrivs|VHostGroup|VHostPrivs|VHostSecure|VHostUser|VirtualDocumentRoot|VirtualDocumentRootIP|VirtualScriptAlias|VirtualScriptAliasIP|WatchdogInterval|XBitHack|xml2EncAlias|xml2EncDefault|xml2StartParse)\b/gmi,
		alias: 'property'
	},
	'directive-block': {
		pattern: /<\/?\b(AuthnProviderAlias|AuthzProviderAlias|Directory|DirectoryMatch|Else|ElseIf|Files|FilesMatch|If|IfDefine|IfModule|IfVersion|Limit|LimitExcept|Location|LocationMatch|Macro|Proxy|RequireAll|RequireAny|RequireNone|VirtualHost)\b *.*>/gi,
		inside: {
			'directive-block': {
				pattern: /^<\/?\w+/,
				inside: {
					'punctuation': /^<\/?/
				},
				alias: 'tag'
			},
			'directive-block-parameter': {
				pattern: /.*[^>]/,
				inside: {
					'punctuation': /:/,
					'string': {
						pattern: /("|').*\1/g,
						inside: {
							'variable': /(\$|%)\{?(\w\.?(\+|\-|:)?)+\}?/g
						}
					}
				},
				alias: 'attr-value'
			},
			'punctuation': />/
		},
		alias: 'tag'
	},
	'directive-flags': {
		pattern: /\[(\w,?)+\]/g,
		alias: 'keyword'
	},
	'string': {
		pattern: /("|').*\1/g,
		inside: {
			'variable': /(\$|%)\{?(\w\.?(\+|\-|:)?)+\}?/g
		}
	},
	'variable': /(\$|%)\{?(\w\.?(\+|\-|:)?)+\}?/g,
	'regex': /\^?.*\$|\^.*\$?/g
};
;
Prism.languages.git = {
	/*
	 * A simple one line comment like in a git status command
	 * For instance:
	 * $ git status
	 * # On branch infinite-scroll
	 * # Your branch and 'origin/sharedBranches/frontendTeam/infinite-scroll' have diverged,
	 * # and have 1 and 2 different commits each, respectively.
	 * nothing to commit (working directory clean)
	 */
	'comment': /^#.*$/m,

	/*
	 * a string (double and simple quote)
	 */
	'string': /("|')(\\?.)*?\1/gm,

	/*
	 * a git command. It starts with a random prompt finishing by a $, then "git" then some other parameters
	 * For instance:
	 * $ git add file.txt
	 */
	'command': {
		pattern: /^.*\$ git .*$/m,
		inside: {
			/*
			 * A git command can contain a parameter starting by a single or a double dash followed by a string
			 * For instance:
			 * $ git diff --cached
			 * $ git log -p
			 */
			'parameter': /\s(--|-)\w+/m
		}
	},

	/*
	 * Coordinates displayed in a git diff command
	 * For instance:
	 * $ git diff
	 * diff --git file.txt file.txt
	 * index 6214953..1d54a52 100644
	 * --- file.txt
	 * +++ file.txt
	 * @@ -1 +1,2 @@
	 * -Here's my tetx file
	 * +Here's my text file
	 * +And this is the second line
	 */
	'coord': /^@@.*@@$/m,

	/*
	 * Regexp to match the changed lines in a git diff output. Check the example above.
	 */
	'deleted': /^-(?!-).+$/m,
	'inserted': /^\+(?!\+).+$/m,

	/*
	 * Match a "commit [SHA1]" line in a git log output.
	 * For instance:
	 * $ git log
	 * commit a11a14ef7e26f2ca62d4b35eac455ce636d0dc09
	 * Author: lgiraudel
	 * Date:   Mon Feb 17 11:18:34 2014 +0100
	 *
	 *     Add of a new line
	 */
	'commit_sha1': /^commit \w{40}$/m
};
;

/*!
 * skrollr core
 *
 * Alexander Prinzhorn - https://github.com/Prinzhorn/skrollr
 *
 * Free to use under terms of MIT license
 */
(function(window, document, undefined) {
	'use strict';

	/*
	 * Global api.
	 */
	var skrollr = {
		get: function() {
			return _instance;
		},
		//Main entry point.
		init: function(options) {
			return _instance || new Skrollr(options);
		},
		VERSION: '0.6.26'
	};

	//Minify optimization.
	var hasProp = Object.prototype.hasOwnProperty;
	var Math = window.Math;
	var getStyle = window.getComputedStyle;

	//They will be filled when skrollr gets initialized.
	var documentElement;
	var body;

	var EVENT_TOUCHSTART = 'touchstart';
	var EVENT_TOUCHMOVE = 'touchmove';
	var EVENT_TOUCHCANCEL = 'touchcancel';
	var EVENT_TOUCHEND = 'touchend';

	var SKROLLABLE_CLASS = 'skrollable';
	var SKROLLABLE_BEFORE_CLASS = SKROLLABLE_CLASS + '-before';
	var SKROLLABLE_BETWEEN_CLASS = SKROLLABLE_CLASS + '-between';
	var SKROLLABLE_AFTER_CLASS = SKROLLABLE_CLASS + '-after';

	var SKROLLR_CLASS = 'skrollr';
	var NO_SKROLLR_CLASS = 'no-' + SKROLLR_CLASS;
	var SKROLLR_DESKTOP_CLASS = SKROLLR_CLASS + '-desktop';
	var SKROLLR_MOBILE_CLASS = SKROLLR_CLASS + '-mobile';

	var DEFAULT_EASING = 'linear';
	var DEFAULT_DURATION = 1000;//ms
	var DEFAULT_MOBILE_DECELERATION = 0.004;//pixel/ms²

	var DEFAULT_SMOOTH_SCROLLING_DURATION = 200;//ms

	var ANCHOR_START = 'start';
	var ANCHOR_END = 'end';
	var ANCHOR_CENTER = 'center';
	var ANCHOR_BOTTOM = 'bottom';

	//The property which will be added to the DOM element to hold the ID of the skrollable.
	var SKROLLABLE_ID_DOM_PROPERTY = '___skrollable_id';

	var rxTouchIgnoreTags = /^(?:input|textarea|button|select)$/i;

	var rxTrim = /^\s+|\s+$/g;

	//Find all data-attributes. data-[_constant]-[offset]-[anchor]-[anchor].
	var rxKeyframeAttribute = /^data(?:-(_\w+))?(?:-?(-?\d*\.?\d+p?))?(?:-?(start|end|top|center|bottom))?(?:-?(top|center|bottom))?$/;

	var rxPropValue = /\s*(@?[\w\-\[\]]+)\s*:\s*(.+?)\s*(?:;|$)/gi;

	//Easing function names follow the property in square brackets.
	var rxPropEasing = /^(@?[a-z\-]+)\[(\w+)\]$/;

	var rxCamelCase = /-([a-z0-9_])/g;
	var rxCamelCaseFn = function(str, letter) {
		return letter.toUpperCase();
	};

	//Numeric values with optional sign.
	var rxNumericValue = /[\-+]?[\d]*\.?[\d]+/g;

	//Used to replace occurences of {?} with a number.
	var rxInterpolateString = /\{\?\}/g;

	//Finds rgb(a) colors, which don't use the percentage notation.
	var rxRGBAIntegerColor = /rgba?\(\s*-?\d+\s*,\s*-?\d+\s*,\s*-?\d+/g;

	//Finds all gradients.
	var rxGradient = /[a-z\-]+-gradient/g;

	//Vendor prefix. Will be set once skrollr gets initialized.
	var theCSSPrefix = '';
	var theDashedCSSPrefix = '';

	//Will be called once (when skrollr gets initialized).
	var detectCSSPrefix = function() {
		//Only relevant prefixes. May be extended.
		//Could be dangerous if there will ever be a CSS property which actually starts with "ms". Don't hope so.
		var rxPrefixes = /^(?:O|Moz|webkit|ms)|(?:-(?:o|moz|webkit|ms)-)/;

		//Detect prefix for current browser by finding the first property using a prefix.
		if(!getStyle) {
			return;
		}

		var style = getStyle(body, null);

		for(var k in style) {
			//We check the key and if the key is a number, we check the value as well, because safari's getComputedStyle returns some weird array-like thingy.
			theCSSPrefix = (k.match(rxPrefixes) || (+k == k && style[k].match(rxPrefixes)));

			if(theCSSPrefix) {
				break;
			}
		}

		//Did we even detect a prefix?
		if(!theCSSPrefix) {
			theCSSPrefix = theDashedCSSPrefix = '';

			return;
		}

		theCSSPrefix = theCSSPrefix[0];

		//We could have detected either a dashed prefix or this camelCaseish-inconsistent stuff.
		if(theCSSPrefix.slice(0,1) === '-') {
			theDashedCSSPrefix = theCSSPrefix;

			//There's no logic behind these. Need a look up.
			theCSSPrefix = ({
				'-webkit-': 'webkit',
				'-moz-': 'Moz',
				'-ms-': 'ms',
				'-o-': 'O'
			})[theCSSPrefix];
		} else {
			theDashedCSSPrefix = '-' + theCSSPrefix.toLowerCase() + '-';
		}
	};

	var polyfillRAF = function() {
		var requestAnimFrame = window.requestAnimationFrame || window[theCSSPrefix.toLowerCase() + 'RequestAnimationFrame'];

		var lastTime = _now();

		if(_isMobile || !requestAnimFrame) {
			requestAnimFrame = function(callback) {
				//How long did it take to render?
				var deltaTime = _now() - lastTime;
				var delay = Math.max(0, 1000 / 60 - deltaTime);

				return window.setTimeout(function() {
					lastTime = _now();
					callback();
				}, delay);
			};
		}

		return requestAnimFrame;
	};

	var polyfillCAF = function() {
		var cancelAnimFrame = window.cancelAnimationFrame || window[theCSSPrefix.toLowerCase() + 'CancelAnimationFrame'];

		if(_isMobile || !cancelAnimFrame) {
			cancelAnimFrame = function(timeout) {
				return window.clearTimeout(timeout);
			};
		}

		return cancelAnimFrame;
	};

	//Built-in easing functions.
	var easings = {
		begin: function() {
			return 0;
		},
		end: function() {
			return 1;
		},
		linear: function(p) {
			return p;
		},
		quadratic: function(p) {
			return p * p;
		},
		cubic: function(p) {
			return p * p * p;
		},
		swing: function(p) {
			return (-Math.cos(p * Math.PI) / 2) + 0.5;
		},
		sqrt: function(p) {
			return Math.sqrt(p);
		},
		outCubic: function(p) {
			return (Math.pow((p - 1), 3) + 1);
		},
		//see https://www.desmos.com/calculator/tbr20s8vd2 for how I did this
		bounce: function(p) {
			var a;

			if(p <= 0.5083) {
				a = 3;
			} else if(p <= 0.8489) {
				a = 9;
			} else if(p <= 0.96208) {
				a = 27;
			} else if(p <= 0.99981) {
				a = 91;
			} else {
				return 1;
			}

			return 1 - Math.abs(3 * Math.cos(p * a * 1.028) / a);
		}
	};

	/**
	 * Constructor.
	 */
	function Skrollr(options) {
		documentElement = document.documentElement;
		body = document.body;

		detectCSSPrefix();

		_instance = this;

		options = options || {};

		_constants = options.constants || {};

		//We allow defining custom easings or overwrite existing.
		if(options.easing) {
			for(var e in options.easing) {
				easings[e] = options.easing[e];
			}
		}

		_edgeStrategy = options.edgeStrategy || 'set';

		_listeners = {
			//Function to be called right before rendering.
			beforerender: options.beforerender,

			//Function to be called right after finishing rendering.
			render: options.render,

			//Function to be called whenever an element with the `data-emit-events` attribute passes a keyframe.
			keyframe: options.keyframe
		};

		//forceHeight is true by default
		_forceHeight = options.forceHeight !== false;

		if(_forceHeight) {
			_scale = options.scale || 1;
		}

		_mobileDeceleration = options.mobileDeceleration || DEFAULT_MOBILE_DECELERATION;

		_smoothScrollingEnabled = options.smoothScrolling !== false;
		_smoothScrollingDuration = options.smoothScrollingDuration || DEFAULT_SMOOTH_SCROLLING_DURATION;

		//Dummy object. Will be overwritten in the _render method when smooth scrolling is calculated.
		_smoothScrolling = {
			targetTop: _instance.getScrollTop()
		};

		//A custom check function may be passed.
		_isMobile = ((options.mobileCheck || function() {
			return (/Android|iPhone|iPad|iPod|BlackBerry/i).test(navigator.userAgent || navigator.vendor || window.opera);
		})());

		if(_isMobile) {
			_skrollrBody = document.getElementById('skrollr-body');

			//Detect 3d transform if there's a skrollr-body (only needed for #skrollr-body).
			if(_skrollrBody) {
				_detect3DTransforms();
			}

			_initMobile();
			_updateClass(documentElement, [SKROLLR_CLASS, SKROLLR_MOBILE_CLASS], [NO_SKROLLR_CLASS]);
		} else {
			_updateClass(documentElement, [SKROLLR_CLASS, SKROLLR_DESKTOP_CLASS], [NO_SKROLLR_CLASS]);
		}

		//Triggers parsing of elements and a first reflow.
		_instance.refresh();

		_addEvent(window, 'resize orientationchange', function() {
			var width = documentElement.clientWidth;
			var height = documentElement.clientHeight;

			//Only reflow if the size actually changed (#271).
			if(height !== _lastViewportHeight || width !== _lastViewportWidth) {
				_lastViewportHeight = height;
				_lastViewportWidth = width;

				_requestReflow = true;
			}
		});

		var requestAnimFrame = polyfillRAF();

		//Let's go.
		(function animloop(){
			_render();
			_animFrame = requestAnimFrame(animloop);
		}());

		return _instance;
	}

	/**
	 * (Re)parses some or all elements.
	 */
	Skrollr.prototype.refresh = function(elements) {
		var elementIndex;
		var elementsLength;
		var ignoreID = false;

		//Completely reparse anything without argument.
		if(elements === undefined) {
			//Ignore that some elements may already have a skrollable ID.
			ignoreID = true;

			_skrollables = [];
			_skrollableIdCounter = 0;

			elements = document.getElementsByTagName('*');
		} else if(elements.length === undefined) {
			//We also accept a single element as parameter.
			elements = [elements];
		}

		elementIndex = 0;
		elementsLength = elements.length;

		for(; elementIndex < elementsLength; elementIndex++) {
			var el = elements[elementIndex];
			var anchorTarget = el;
			var keyFrames = [];

			//If this particular element should be smooth scrolled.
			var smoothScrollThis = _smoothScrollingEnabled;

			//The edge strategy for this particular element.
			var edgeStrategy = _edgeStrategy;

			//If this particular element should emit keyframe events.
			var emitEvents = false;

			//If we're reseting the counter, remove any old element ids that may be hanging around.
			if(ignoreID && SKROLLABLE_ID_DOM_PROPERTY in el) {
				delete el[SKROLLABLE_ID_DOM_PROPERTY];
			}

			if(!el.attributes) {
				continue;
			}

			//Iterate over all attributes and search for key frame attributes.
			var attributeIndex = 0;
			var attributesLength = el.attributes.length;

			for (; attributeIndex < attributesLength; attributeIndex++) {
				var attr = el.attributes[attributeIndex];

				if(attr.name === 'data-anchor-target') {
					anchorTarget = document.querySelector(attr.value);

					if(anchorTarget === null) {
						throw 'Unable to find anchor target "' + attr.value + '"';
					}

					continue;
				}

				//Global smooth scrolling can be overridden by the element attribute.
				if(attr.name === 'data-smooth-scrolling') {
					smoothScrollThis = attr.value !== 'off';

					continue;
				}

				//Global edge strategy can be overridden by the element attribute.
				if(attr.name === 'data-edge-strategy') {
					edgeStrategy = attr.value;

					continue;
				}

				//Is this element tagged with the `data-emit-events` attribute?
				if(attr.name === 'data-emit-events') {
					emitEvents = true;

					continue;
				}

				var match = attr.name.match(rxKeyframeAttribute);

				if(match === null) {
					continue;
				}

				var kf = {
					props: attr.value,
					//Point back to the element as well.
					element: el,
					//The name of the event which this keyframe will fire, if emitEvents is
					eventType: attr.name.replace(rxCamelCase, rxCamelCaseFn)
				};

				keyFrames.push(kf);

				var constant = match[1];

				if(constant) {
					//Strip the underscore prefix.
					kf.constant = constant.substr(1);
				}

				//Get the key frame offset.
				var offset = match[2];

				//Is it a percentage offset?
				if(/p$/.test(offset)) {
					kf.isPercentage = true;
					kf.offset = (offset.slice(0, -1) | 0) / 100;
				} else {
					kf.offset = (offset | 0);
				}

				var anchor1 = match[3];

				//If second anchor is not set, the first will be taken for both.
				var anchor2 = match[4] || anchor1;

				//"absolute" (or "classic") mode, where numbers mean absolute scroll offset.
				if(!anchor1 || anchor1 === ANCHOR_START || anchor1 === ANCHOR_END) {
					kf.mode = 'absolute';

					//data-end needs to be calculated after all key frames are known.
					if(anchor1 === ANCHOR_END) {
						kf.isEnd = true;
					} else if(!kf.isPercentage) {
						//For data-start we can already set the key frame w/o calculations.
						//#59: "scale" options should only affect absolute mode.
						kf.offset = kf.offset * _scale;
					}
				}
				//"relative" mode, where numbers are relative to anchors.
				else {
					kf.mode = 'relative';
					kf.anchors = [anchor1, anchor2];
				}
			}

			//Does this element have key frames?
			if(!keyFrames.length) {
				continue;
			}

			//Will hold the original style and class attributes before we controlled the element (see #80).
			var styleAttr, classAttr;

			var id;

			if(!ignoreID && SKROLLABLE_ID_DOM_PROPERTY in el) {
				//We already have this element under control. Grab the corresponding skrollable id.
				id = el[SKROLLABLE_ID_DOM_PROPERTY];
				styleAttr = _skrollables[id].styleAttr;
				classAttr = _skrollables[id].classAttr;
			} else {
				//It's an unknown element. Asign it a new skrollable id.
				id = (el[SKROLLABLE_ID_DOM_PROPERTY] = _skrollableIdCounter++);
				styleAttr = el.style.cssText;
				classAttr = _getClass(el);
			}

			_skrollables[id] = {
				element: el,
				styleAttr: styleAttr,
				classAttr: classAttr,
				anchorTarget: anchorTarget,
				keyFrames: keyFrames,
				smoothScrolling: smoothScrollThis,
				edgeStrategy: edgeStrategy,
				emitEvents: emitEvents,
				lastFrameIndex: -1
			};

			_updateClass(el, [SKROLLABLE_CLASS], []);
		}

		//Reflow for the first time.
		_reflow();

		//Now that we got all key frame numbers right, actually parse the properties.
		elementIndex = 0;
		elementsLength = elements.length;

		for(; elementIndex < elementsLength; elementIndex++) {
			var sk = _skrollables[elements[elementIndex][SKROLLABLE_ID_DOM_PROPERTY]];

			if(sk === undefined) {
				continue;
			}

			//Parse the property string to objects
			_parseProps(sk);

			//Fill key frames with missing properties from left and right
			_fillProps(sk);
		}

		return _instance;
	};

	/**
	 * Transform "relative" mode to "absolute" mode.
	 * That is, calculate anchor position and offset of element.
	 */
	Skrollr.prototype.relativeToAbsolute = function(element, viewportAnchor, elementAnchor) {
		var viewportHeight = documentElement.clientHeight;
		var box = element.getBoundingClientRect();
		var absolute = box.top;

		//#100: IE doesn't supply "height" with getBoundingClientRect.
		var boxHeight = box.bottom - box.top;

		if(viewportAnchor === ANCHOR_BOTTOM) {
			absolute -= viewportHeight;
		} else if(viewportAnchor === ANCHOR_CENTER) {
			absolute -= viewportHeight / 2;
		}

		if(elementAnchor === ANCHOR_BOTTOM) {
			absolute += boxHeight;
		} else if(elementAnchor === ANCHOR_CENTER) {
			absolute += boxHeight / 2;
		}

		//Compensate scrolling since getBoundingClientRect is relative to viewport.
		absolute += _instance.getScrollTop();

		return (absolute + 0.5) | 0;
	};

	/**
	 * Animates scroll top to new position.
	 */
	Skrollr.prototype.animateTo = function(top, options) {
		options = options || {};

		var now = _now();
		var scrollTop = _instance.getScrollTop();

		//Setting this to a new value will automatically cause the current animation to stop, if any.
		_scrollAnimation = {
			startTop: scrollTop,
			topDiff: top - scrollTop,
			targetTop: top,
			duration: options.duration || DEFAULT_DURATION,
			startTime: now,
			endTime: now + (options.duration || DEFAULT_DURATION),
			easing: easings[options.easing || DEFAULT_EASING],
			done: options.done
		};

		//Don't queue the animation if there's nothing to animate.
		if(!_scrollAnimation.topDiff) {
			if(_scrollAnimation.done) {
				_scrollAnimation.done.call(_instance, false);
			}

			_scrollAnimation = undefined;
		}

		return _instance;
	};

	/**
	 * Stops animateTo animation.
	 */
	Skrollr.prototype.stopAnimateTo = function() {
		if(_scrollAnimation && _scrollAnimation.done) {
			_scrollAnimation.done.call(_instance, true);
		}

		_scrollAnimation = undefined;
	};

	/**
	 * Returns if an animation caused by animateTo is currently running.
	 */
	Skrollr.prototype.isAnimatingTo = function() {
		return !!_scrollAnimation;
	};

	Skrollr.prototype.isMobile = function() {
		return _isMobile;
	};

	Skrollr.prototype.setScrollTop = function(top, force) {
		_forceRender = (force === true);

		if(_isMobile) {
			_mobileOffset = Math.min(Math.max(top, 0), _maxKeyFrame);
		} else {
			window.scrollTo(0, top);
		}

		return _instance;
	};

	Skrollr.prototype.getScrollTop = function() {
		if(_isMobile) {
			return _mobileOffset;
		} else {
			return window.pageYOffset || documentElement.scrollTop || body.scrollTop || 0;
		}
	};

	Skrollr.prototype.getMaxScrollTop = function() {
		return _maxKeyFrame;
	};

	Skrollr.prototype.on = function(name, fn) {
		_listeners[name] = fn;

		return _instance;
	};

	Skrollr.prototype.off = function(name) {
		delete _listeners[name];

		return _instance;
	};

	Skrollr.prototype.destroy = function() {
		var cancelAnimFrame = polyfillCAF();
		cancelAnimFrame(_animFrame);
		_removeAllEvents();

		_updateClass(documentElement, [NO_SKROLLR_CLASS], [SKROLLR_CLASS, SKROLLR_DESKTOP_CLASS, SKROLLR_MOBILE_CLASS]);

		var skrollableIndex = 0;
		var skrollablesLength = _skrollables.length;

		for(; skrollableIndex < skrollablesLength; skrollableIndex++) {
			_reset(_skrollables[skrollableIndex].element);
		}

		documentElement.style.overflow = body.style.overflow = '';
		documentElement.style.height = body.style.height = '';

		if(_skrollrBody) {
			skrollr.setStyle(_skrollrBody, 'transform', 'none');
		}

		_instance = undefined;
		_skrollrBody = undefined;
		_listeners = undefined;
		_forceHeight = undefined;
		_maxKeyFrame = 0;
		_scale = 1;
		_constants = undefined;
		_mobileDeceleration = undefined;
		_direction = 'down';
		_lastTop = -1;
		_lastViewportWidth = 0;
		_lastViewportHeight = 0;
		_requestReflow = false;
		_scrollAnimation = undefined;
		_smoothScrollingEnabled = undefined;
		_smoothScrollingDuration = undefined;
		_smoothScrolling = undefined;
		_forceRender = undefined;
		_skrollableIdCounter = 0;
		_edgeStrategy = undefined;
		_isMobile = false;
		_mobileOffset = 0;
		_translateZ = undefined;
	};

	/*
		Private methods.
	*/

	var _initMobile = function() {
		var initialElement;
		var initialTouchY;
		var initialTouchX;
		var currentElement;
		var currentTouchY;
		var currentTouchX;
		var lastTouchY;
		var deltaY;

		var initialTouchTime;
		var currentTouchTime;
		var lastTouchTime;
		var deltaTime;

		_addEvent(documentElement, [EVENT_TOUCHSTART, EVENT_TOUCHMOVE, EVENT_TOUCHCANCEL, EVENT_TOUCHEND].join(' '), function(e) {
			var touch = e.changedTouches[0];

			currentElement = e.target;

			//We don't want text nodes.
			while(currentElement.nodeType === 3) {
				currentElement = currentElement.parentNode;
			}

			currentTouchY = touch.clientY;
			currentTouchX = touch.clientX;
			currentTouchTime = e.timeStamp;

			if(!rxTouchIgnoreTags.test(currentElement.tagName)) {
				e.preventDefault();
			}

			switch(e.type) {
				case EVENT_TOUCHSTART:
					//The last element we tapped on.
					if(initialElement) {
						initialElement.blur();
					}

					_instance.stopAnimateTo();

					initialElement = currentElement;

					initialTouchY = lastTouchY = currentTouchY;
					initialTouchX = currentTouchX;
					initialTouchTime = currentTouchTime;

					break;
				case EVENT_TOUCHMOVE:
					//Prevent default event on touchIgnore elements in case they don't have focus yet.
					if(rxTouchIgnoreTags.test(currentElement.tagName) && document.activeElement !== currentElement) {
						e.preventDefault();
					}

					deltaY = currentTouchY - lastTouchY;
					deltaTime = currentTouchTime - lastTouchTime;

					_instance.setScrollTop(_mobileOffset - deltaY, true);

					lastTouchY = currentTouchY;
					lastTouchTime = currentTouchTime;
					break;
				default:
				case EVENT_TOUCHCANCEL:
				case EVENT_TOUCHEND:
					var distanceY = initialTouchY - currentTouchY;
					var distanceX = initialTouchX - currentTouchX;
					var distance2 = distanceX * distanceX + distanceY * distanceY;

					//Check if it was more like a tap (moved less than 7px).
					if(distance2 < 49) {
						if(!rxTouchIgnoreTags.test(initialElement.tagName)) {
							initialElement.focus();

							//It was a tap, click the element.
							var clickEvent = document.createEvent('MouseEvents');
							clickEvent.initMouseEvent('click', true, true, e.view, 1, touch.screenX, touch.screenY, touch.clientX, touch.clientY, e.ctrlKey, e.altKey, e.shiftKey, e.metaKey, 0, null);
							initialElement.dispatchEvent(clickEvent);
						}

						return;
					}

					initialElement = undefined;

					var speed = deltaY / deltaTime;

					//Cap speed at 3 pixel/ms.
					speed = Math.max(Math.min(speed, 3), -3);

					var duration = Math.abs(speed / _mobileDeceleration);
					var targetOffset = speed * duration + 0.5 * _mobileDeceleration * duration * duration;
					var targetTop = _instance.getScrollTop() - targetOffset;

					//Relative duration change for when scrolling above bounds.
					var targetRatio = 0;

					//Change duration proportionally when scrolling would leave bounds.
					if(targetTop > _maxKeyFrame) {
						targetRatio = (_maxKeyFrame - targetTop) / targetOffset;

						targetTop = _maxKeyFrame;
					} else if(targetTop < 0) {
						targetRatio = -targetTop / targetOffset;

						targetTop = 0;
					}

					duration = duration * (1 - targetRatio);

					_instance.animateTo((targetTop + 0.5) | 0, {easing: 'outCubic', duration: duration});
					break;
			}
		});

		//Just in case there has already been some native scrolling, reset it.
		window.scrollTo(0, 0);
		documentElement.style.overflow = body.style.overflow = 'hidden';
	};

	/**
	 * Updates key frames which depend on others / need to be updated on resize.
	 * That is "end" in "absolute" mode and all key frames in "relative" mode.
	 * Also handles constants, because they may change on resize.
	 */
	var _updateDependentKeyFrames = function() {
		var viewportHeight = documentElement.clientHeight;
		var processedConstants = _processConstants();
		var skrollable;
		var element;
		var anchorTarget;
		var keyFrames;
		var keyFrameIndex;
		var keyFramesLength;
		var kf;
		var skrollableIndex;
		var skrollablesLength;
		var offset;
		var constantValue;

		//First process all relative-mode elements and find the max key frame.
		skrollableIndex = 0;
		skrollablesLength = _skrollables.length;

		for(; skrollableIndex < skrollablesLength; skrollableIndex++) {
			skrollable = _skrollables[skrollableIndex];
			element = skrollable.element;
			anchorTarget = skrollable.anchorTarget;
			keyFrames = skrollable.keyFrames;

			keyFrameIndex = 0;
			keyFramesLength = keyFrames.length;

			for(; keyFrameIndex < keyFramesLength; keyFrameIndex++) {
				kf = keyFrames[keyFrameIndex];

				offset = kf.offset;
				constantValue = processedConstants[kf.constant] || 0;

				kf.frame = offset;

				if(kf.isPercentage) {
					//Convert the offset to percentage of the viewport height.
					offset = offset * viewportHeight;

					//Absolute + percentage mode.
					kf.frame = offset;
				}

				if(kf.mode === 'relative') {
					_reset(element);

					kf.frame = _instance.relativeToAbsolute(anchorTarget, kf.anchors[0], kf.anchors[1]) - offset;

					_reset(element, true);
				}

				kf.frame += constantValue;

				//Only search for max key frame when forceHeight is enabled.
				if(_forceHeight) {
					//Find the max key frame, but don't use one of the data-end ones for comparison.
					if(!kf.isEnd && kf.frame > _maxKeyFrame) {
						_maxKeyFrame = kf.frame;
					}
				}
			}
		}

		//#133: The document can be larger than the maxKeyFrame we found.
		_maxKeyFrame = Math.max(_maxKeyFrame, _getDocumentHeight());

		//Now process all data-end keyframes.
		skrollableIndex = 0;
		skrollablesLength = _skrollables.length;

		for(; skrollableIndex < skrollablesLength; skrollableIndex++) {
			skrollable = _skrollables[skrollableIndex];
			keyFrames = skrollable.keyFrames;

			keyFrameIndex = 0;
			keyFramesLength = keyFrames.length;

			for(; keyFrameIndex < keyFramesLength; keyFrameIndex++) {
				kf = keyFrames[keyFrameIndex];

				constantValue = processedConstants[kf.constant] || 0;

				if(kf.isEnd) {
					kf.frame = _maxKeyFrame - kf.offset + constantValue;
				}
			}

			skrollable.keyFrames.sort(_keyFrameComparator);
		}
	};

	/**
	 * Calculates and sets the style properties for the element at the given frame.
	 * @param fakeFrame The frame to render at when smooth scrolling is enabled.
	 * @param actualFrame The actual frame we are at.
	 */
	var _calcSteps = function(fakeFrame, actualFrame) {
		//Iterate over all skrollables.
		var skrollableIndex = 0;
		var skrollablesLength = _skrollables.length;

		for(; skrollableIndex < skrollablesLength; skrollableIndex++) {
			var skrollable = _skrollables[skrollableIndex];
			var element = skrollable.element;
			var frame = skrollable.smoothScrolling ? fakeFrame : actualFrame;
			var frames = skrollable.keyFrames;
			var framesLength = frames.length;
			var firstFrame = frames[0];
			var lastFrame = frames[frames.length - 1];
			var beforeFirst = frame < firstFrame.frame;
			var afterLast = frame > lastFrame.frame;
			var firstOrLastFrame = beforeFirst ? firstFrame : lastFrame;
			var emitEvents = skrollable.emitEvents;
			var lastFrameIndex = skrollable.lastFrameIndex;
			var key;
			var value;

			//If we are before/after the first/last frame, set the styles according to the given edge strategy.
			if(beforeFirst || afterLast) {
				//Check if we already handled this edge case last time.
				//Note: using setScrollTop it's possible that we jumped from one edge to the other.
				if(beforeFirst && skrollable.edge === -1 || afterLast && skrollable.edge === 1) {
					continue;
				}

				//Add the skrollr-before or -after class.
				if(beforeFirst) {
					_updateClass(element, [SKROLLABLE_BEFORE_CLASS], [SKROLLABLE_AFTER_CLASS, SKROLLABLE_BETWEEN_CLASS]);

					//This handles the special case where we exit the first keyframe.
					if(emitEvents && lastFrameIndex > -1) {
						_emitEvent(element, firstFrame.eventType, _direction);
						skrollable.lastFrameIndex = -1;
					}
				} else {
					_updateClass(element, [SKROLLABLE_AFTER_CLASS], [SKROLLABLE_BEFORE_CLASS, SKROLLABLE_BETWEEN_CLASS]);

					//This handles the special case where we exit the last keyframe.
					if(emitEvents && lastFrameIndex < framesLength) {
						_emitEvent(element, lastFrame.eventType, _direction);
						skrollable.lastFrameIndex = framesLength;
					}
				}

				//Remember that we handled the edge case (before/after the first/last keyframe).
				skrollable.edge = beforeFirst ? -1 : 1;

				switch(skrollable.edgeStrategy) {
					case 'reset':
						_reset(element);
						continue;
					case 'ease':
						//Handle this case like it would be exactly at first/last keyframe and just pass it on.
						frame = firstOrLastFrame.frame;
						break;
					default:
					case 'set':
						var props = firstOrLastFrame.props;

						for(key in props) {
							if(hasProp.call(props, key)) {
								value = _interpolateString(props[key].value);

								//Set style or attribute.
								if(key.indexOf('@') === 0) {
									element.setAttribute(key.substr(1), value);
								} else {
									skrollr.setStyle(element, key, value);
								}
							}
						}

						continue;
				}
			} else {
				//Did we handle an edge last time?
				if(skrollable.edge !== 0) {
					_updateClass(element, [SKROLLABLE_CLASS, SKROLLABLE_BETWEEN_CLASS], [SKROLLABLE_BEFORE_CLASS, SKROLLABLE_AFTER_CLASS]);
					skrollable.edge = 0;
				}
			}

			//Find out between which two key frames we are right now.
			var keyFrameIndex = 0;

			for(; keyFrameIndex < framesLength - 1; keyFrameIndex++) {
				if(frame >= frames[keyFrameIndex].frame && frame <= frames[keyFrameIndex + 1].frame) {
					var left = frames[keyFrameIndex];
					var right = frames[keyFrameIndex + 1];

					for(key in left.props) {
						if(hasProp.call(left.props, key)) {
							var progress = (frame - left.frame) / (right.frame - left.frame);

							//Transform the current progress using the given easing function.
							progress = left.props[key].easing(progress);

							//Interpolate between the two values
							value = _calcInterpolation(left.props[key].value, right.props[key].value, progress);

							value = _interpolateString(value);

							//Set style or attribute.
							if(key.indexOf('@') === 0) {
								element.setAttribute(key.substr(1), value);
							} else {
								skrollr.setStyle(element, key, value);
							}
						}
					}

					//Are events enabled on this element?
					//This code handles the usual cases of scrolling through different keyframes.
					//The special cases of before first and after last keyframe are handled above.
					if(emitEvents) {
						//Did we pass a new keyframe?
						if(lastFrameIndex !== keyFrameIndex) {
							if(_direction === 'down') {
								_emitEvent(element, left.eventType, _direction);
							} else {
								_emitEvent(element, right.eventType, _direction);
							}

							skrollable.lastFrameIndex = keyFrameIndex;
						}
					}

					break;
				}
			}
		}
	};

	/**
	 * Renders all elements.
	 */
	var _render = function() {
		if(_requestReflow) {
			_requestReflow = false;
			_reflow();
		}

		//We may render something else than the actual scrollbar position.
		var renderTop = _instance.getScrollTop();

		//If there's an animation, which ends in current render call, call the callback after rendering.
		var afterAnimationCallback;
		var now = _now();
		var progress;

		//Before actually rendering handle the scroll animation, if any.
		if(_scrollAnimation) {
			//It's over
			if(now >= _scrollAnimation.endTime) {
				renderTop = _scrollAnimation.targetTop;
				afterAnimationCallback = _scrollAnimation.done;
				_scrollAnimation = undefined;
			} else {
				//Map the current progress to the new progress using given easing function.
				progress = _scrollAnimation.easing((now - _scrollAnimation.startTime) / _scrollAnimation.duration);

				renderTop = (_scrollAnimation.startTop + progress * _scrollAnimation.topDiff) | 0;
			}

			_instance.setScrollTop(renderTop, true);
		}
		//Smooth scrolling only if there's no animation running and if we're not forcing the rendering.
		else if(!_forceRender) {
			var smoothScrollingDiff = _smoothScrolling.targetTop - renderTop;

			//The user scrolled, start new smooth scrolling.
			if(smoothScrollingDiff) {
				_smoothScrolling = {
					startTop: _lastTop,
					topDiff: renderTop - _lastTop,
					targetTop: renderTop,
					startTime: _lastRenderCall,
					endTime: _lastRenderCall + _smoothScrollingDuration
				};
			}

			//Interpolate the internal scroll position (not the actual scrollbar).
			if(now <= _smoothScrolling.endTime) {
				//Map the current progress to the new progress using easing function.
				progress = easings.sqrt((now - _smoothScrolling.startTime) / _smoothScrollingDuration);

				renderTop = (_smoothScrolling.startTop + progress * _smoothScrolling.topDiff) | 0;
			}
		}

		//That's were we actually "scroll" on mobile.
		if(_isMobile && _skrollrBody) {
			//Set the transform ("scroll it").
			skrollr.setStyle(_skrollrBody, 'transform', 'translate(0, ' + -(_mobileOffset) + 'px) ' + _translateZ);
		}

		//Did the scroll position even change?
		if(_forceRender || _lastTop !== renderTop) {
			//Remember in which direction are we scrolling?
			_direction = (renderTop > _lastTop) ? 'down' : (renderTop < _lastTop ? 'up' : _direction);

			_forceRender = false;

			var listenerParams = {
				curTop: renderTop,
				lastTop: _lastTop,
				maxTop: _maxKeyFrame,
				direction: _direction
			};

			//Tell the listener we are about to render.
			var continueRendering = _listeners.beforerender && _listeners.beforerender.call(_instance, listenerParams);

			//The beforerender listener function is able the cancel rendering.
			if(continueRendering !== false) {
				//Now actually interpolate all the styles.
				_calcSteps(renderTop, _instance.getScrollTop());

				//Remember when we last rendered.
				_lastTop = renderTop;

				if(_listeners.render) {
					_listeners.render.call(_instance, listenerParams);
				}
			}

			if(afterAnimationCallback) {
				afterAnimationCallback.call(_instance, false);
			}
		}

		_lastRenderCall = now;
	};

	/**
	 * Parses the properties for each key frame of the given skrollable.
	 */
	var _parseProps = function(skrollable) {
		//Iterate over all key frames
		var keyFrameIndex = 0;
		var keyFramesLength = skrollable.keyFrames.length;

		for(; keyFrameIndex < keyFramesLength; keyFrameIndex++) {
			var frame = skrollable.keyFrames[keyFrameIndex];
			var easing;
			var value;
			var prop;
			var props = {};

			var match;

			while((match = rxPropValue.exec(frame.props)) !== null) {
				prop = match[1];
				value = match[2];

				easing = prop.match(rxPropEasing);

				//Is there an easing specified for this prop?
				if(easing !== null) {
					prop = easing[1];
					easing = easing[2];
				} else {
					easing = DEFAULT_EASING;
				}

				//Exclamation point at first position forces the value to be taken literal.
				value = value.indexOf('!') ? _parseProp(value) : [value.slice(1)];

				//Save the prop for this key frame with his value and easing function
				props[prop] = {
					value: value,
					easing: easings[easing]
				};
			}

			frame.props = props;
		}
	};

	/**
	 * Parses a value extracting numeric values and generating a format string
	 * for later interpolation of the new values in old string.
	 *
	 * @param val The CSS value to be parsed.
	 * @return Something like ["rgba(?%,?%, ?%,?)", 100, 50, 0, .7]
	 * where the first element is the format string later used
	 * and all following elements are the numeric value.
	 */
	var _parseProp = function(val) {
		var numbers = [];

		//One special case, where floats don't work.
		//We replace all occurences of rgba colors
		//which don't use percentage notation with the percentage notation.
		rxRGBAIntegerColor.lastIndex = 0;
		val = val.replace(rxRGBAIntegerColor, function(rgba) {
			return rgba.replace(rxNumericValue, function(n) {
				return n / 255 * 100 + '%';
			});
		});

		//Handle prefixing of "gradient" values.
		//For now only the prefixed value will be set. Unprefixed isn't supported anyway.
		if(theDashedCSSPrefix) {
			rxGradient.lastIndex = 0;
			val = val.replace(rxGradient, function(s) {
				return theDashedCSSPrefix + s;
			});
		}

		//Now parse ANY number inside this string and create a format string.
		val = val.replace(rxNumericValue, function(n) {
			numbers.push(+n);
			return '{?}';
		});

		//Add the formatstring as first value.
		numbers.unshift(val);

		return numbers;
	};

	/**
	 * Fills the key frames with missing left and right hand properties.
	 * If key frame 1 has property X and key frame 2 is missing X,
	 * but key frame 3 has X again, then we need to assign X to key frame 2 too.
	 *
	 * @param sk A skrollable.
	 */
	var _fillProps = function(sk) {
		//Will collect the properties key frame by key frame
		var propList = {};
		var keyFrameIndex;
		var keyFramesLength;

		//Iterate over all key frames from left to right
		keyFrameIndex = 0;
		keyFramesLength = sk.keyFrames.length;

		for(; keyFrameIndex < keyFramesLength; keyFrameIndex++) {
			_fillPropForFrame(sk.keyFrames[keyFrameIndex], propList);
		}

		//Now do the same from right to fill the last gaps

		propList = {};

		//Iterate over all key frames from right to left
		keyFrameIndex = sk.keyFrames.length - 1;

		for(; keyFrameIndex >= 0; keyFrameIndex--) {
			_fillPropForFrame(sk.keyFrames[keyFrameIndex], propList);
		}
	};

	var _fillPropForFrame = function(frame, propList) {
		var key;

		//For each key frame iterate over all right hand properties and assign them,
		//but only if the current key frame doesn't have the property by itself
		for(key in propList) {
			//The current frame misses this property, so assign it.
			if(!hasProp.call(frame.props, key)) {
				frame.props[key] = propList[key];
			}
		}

		//Iterate over all props of the current frame and collect them
		for(key in frame.props) {
			propList[key] = frame.props[key];
		}
	};

	/**
	 * Calculates the new values for two given values array.
	 */
	var _calcInterpolation = function(val1, val2, progress) {
		var valueIndex;
		var val1Length = val1.length;

		//They both need to have the same length
		if(val1Length !== val2.length) {
			throw 'Can\'t interpolate between "' + val1[0] + '" and "' + val2[0] + '"';
		}

		//Add the format string as first element.
		var interpolated = [val1[0]];

		valueIndex = 1;

		for(; valueIndex < val1Length; valueIndex++) {
			//That's the line where the two numbers are actually interpolated.
			interpolated[valueIndex] = val1[valueIndex] + ((val2[valueIndex] - val1[valueIndex]) * progress);
		}

		return interpolated;
	};

	/**
	 * Interpolates the numeric values into the format string.
	 */
	var _interpolateString = function(val) {
		var valueIndex = 1;

		rxInterpolateString.lastIndex = 0;

		return val[0].replace(rxInterpolateString, function() {
			return val[valueIndex++];
		});
	};

	/**
	 * Resets the class and style attribute to what it was before skrollr manipulated the element.
	 * Also remembers the values it had before reseting, in order to undo the reset.
	 */
	var _reset = function(elements, undo) {
		//We accept a single element or an array of elements.
		elements = [].concat(elements);

		var skrollable;
		var element;
		var elementsIndex = 0;
		var elementsLength = elements.length;

		for(; elementsIndex < elementsLength; elementsIndex++) {
			element = elements[elementsIndex];
			skrollable = _skrollables[element[SKROLLABLE_ID_DOM_PROPERTY]];

			//Couldn't find the skrollable for this DOM element.
			if(!skrollable) {
				continue;
			}

			if(undo) {
				//Reset class and style to the "dirty" (set by skrollr) values.
				element.style.cssText = skrollable.dirtyStyleAttr;
				_updateClass(element, skrollable.dirtyClassAttr);
			} else {
				//Remember the "dirty" (set by skrollr) class and style.
				skrollable.dirtyStyleAttr = element.style.cssText;
				skrollable.dirtyClassAttr = _getClass(element);

				//Reset class and style to what it originally was.
				element.style.cssText = skrollable.styleAttr;
				_updateClass(element, skrollable.classAttr);
			}
		}
	};

	/**
	 * Detects support for 3d transforms by applying it to the skrollr-body.
	 */
	var _detect3DTransforms = function() {
		_translateZ = 'translateZ(0)';
		skrollr.setStyle(_skrollrBody, 'transform', _translateZ);

		var computedStyle = getStyle(_skrollrBody);
		var computedTransform = computedStyle.getPropertyValue('transform');
		var computedTransformWithPrefix = computedStyle.getPropertyValue(theDashedCSSPrefix + 'transform');
		var has3D = (computedTransform && computedTransform !== 'none') || (computedTransformWithPrefix && computedTransformWithPrefix !== 'none');

		if(!has3D) {
			_translateZ = '';
		}
	};

	/**
	 * Set the CSS property on the given element. Sets prefixed properties as well.
	 */
	skrollr.setStyle = function(el, prop, val) {
		var style = el.style;

		//Camel case.
		prop = prop.replace(rxCamelCase, rxCamelCaseFn).replace('-', '');

		//Make sure z-index gets a <integer>.
		//This is the only <integer> case we need to handle.
		if(prop === 'zIndex') {
			if(isNaN(val)) {
				//If it's not a number, don't touch it.
				//It could for example be "auto" (#351).
				style[prop] = val;
			} else {
				//Floor the number.
				style[prop] = '' + (val | 0);
			}
		}
		//#64: "float" can't be set across browsers. Needs to use "cssFloat" for all except IE.
		else if(prop === 'float') {
			style.styleFloat = style.cssFloat = val;
		}
		else {
			//Need try-catch for old IE.
			try {
				//Set prefixed property if there's a prefix.
				if(theCSSPrefix) {
					style[theCSSPrefix + prop.slice(0,1).toUpperCase() + prop.slice(1)] = val;
				}

				//Set unprefixed.
				style[prop] = val;
			} catch(ignore) {}
		}
	};

	/**
	 * Cross browser event handling.
	 */
	var _addEvent = skrollr.addEvent = function(element, names, callback) {
		var intermediate = function(e) {
			//Normalize IE event stuff.
			e = e || window.event;

			if(!e.target) {
				e.target = e.srcElement;
			}

			if(!e.preventDefault) {
				e.preventDefault = function() {
					e.returnValue = false;
					e.defaultPrevented = true;
				};
			}

			return callback.call(this, e);
		};

		names = names.split(' ');

		var name;
		var nameCounter = 0;
		var namesLength = names.length;

		for(; nameCounter < namesLength; nameCounter++) {
			name = names[nameCounter];

			if(element.addEventListener) {
				element.addEventListener(name, callback, false);
			} else {
				element.attachEvent('on' + name, intermediate);
			}

			//Remember the events to be able to flush them later.
			_registeredEvents.push({
				element: element,
				name: name,
				listener: callback
			});
		}
	};

	var _removeEvent = skrollr.removeEvent = function(element, names, callback) {
		names = names.split(' ');

		var nameCounter = 0;
		var namesLength = names.length;

		for(; nameCounter < namesLength; nameCounter++) {
			if(element.removeEventListener) {
				element.removeEventListener(names[nameCounter], callback, false);
			} else {
				element.detachEvent('on' + names[nameCounter], callback);
			}
		}
	};

	var _removeAllEvents = function() {
		var eventData;
		var eventCounter = 0;
		var eventsLength = _registeredEvents.length;

		for(; eventCounter < eventsLength; eventCounter++) {
			eventData = _registeredEvents[eventCounter];

			_removeEvent(eventData.element, eventData.name, eventData.listener);
		}

		_registeredEvents = [];
	};

	var _emitEvent = function(element, name, direction) {
		if(_listeners.keyframe) {
			_listeners.keyframe.call(_instance, element, name, direction);
		}
	};

	var _reflow = function() {
		var pos = _instance.getScrollTop();

		//Will be recalculated by _updateDependentKeyFrames.
		_maxKeyFrame = 0;

		if(_forceHeight && !_isMobile) {
			//un-"force" the height to not mess with the calculations in _updateDependentKeyFrames (#216).
			body.style.height = '';
		}

		_updateDependentKeyFrames();

		if(_forceHeight && !_isMobile) {
			//"force" the height.
			body.style.height = (_maxKeyFrame + documentElement.clientHeight) + 'px';
		}

		//The scroll offset may now be larger than needed (on desktop the browser/os prevents scrolling farther than the bottom).
		if(_isMobile) {
			_instance.setScrollTop(Math.min(_instance.getScrollTop(), _maxKeyFrame));
		} else {
			//Remember and reset the scroll pos (#217).
			_instance.setScrollTop(pos, true);
		}

		_forceRender = true;
	};

	/*
	 * Returns a copy of the constants object where all functions and strings have been evaluated.
	 */
	var _processConstants = function() {
		var viewportHeight = documentElement.clientHeight;
		var copy = {};
		var prop;
		var value;

		for(prop in _constants) {
			value = _constants[prop];

			if(typeof value === 'function') {
				value = value.call(_instance);
			}
			//Percentage offset.
			else if((/p$/).test(value)) {
				value = (value.slice(0, -1) / 100) * viewportHeight;
			}

			copy[prop] = value;
		}

		return copy;
	};

	/*
	 * Returns the height of the document.
	 */
	var _getDocumentHeight = function() {
		var skrollrBodyHeight = (_skrollrBody && _skrollrBody.offsetHeight || 0);
		var bodyHeight = Math.max(skrollrBodyHeight, body.scrollHeight, body.offsetHeight, documentElement.scrollHeight, documentElement.offsetHeight, documentElement.clientHeight);

		return bodyHeight - documentElement.clientHeight;
	};

	/**
	 * Returns a string of space separated classnames for the current element.
	 * Works with SVG as well.
	 */
	var _getClass = function(element) {
		var prop = 'className';

		//SVG support by using className.baseVal instead of just className.
		if(window.SVGElement && element instanceof window.SVGElement) {
			element = element[prop];
			prop = 'baseVal';
		}

		return element[prop];
	};

	/**
	 * Adds and removes a CSS classes.
	 * Works with SVG as well.
	 * add and remove are arrays of strings,
	 * or if remove is ommited add is a string and overwrites all classes.
	 */
	var _updateClass = function(element, add, remove) {
		var prop = 'className';

		//SVG support by using className.baseVal instead of just className.
		if(window.SVGElement && element instanceof window.SVGElement) {
			element = element[prop];
			prop = 'baseVal';
		}

		//When remove is ommited, we want to overwrite/set the classes.
		if(remove === undefined) {
			element[prop] = add;
			return;
		}

		//Cache current classes. We will work on a string before passing back to DOM.
		var val = element[prop];

		//All classes to be removed.
		var classRemoveIndex = 0;
		var removeLength = remove.length;

		for(; classRemoveIndex < removeLength; classRemoveIndex++) {
			val = _untrim(val).replace(_untrim(remove[classRemoveIndex]), ' ');
		}

		val = _trim(val);

		//All classes to be added.
		var classAddIndex = 0;
		var addLength = add.length;

		for(; classAddIndex < addLength; classAddIndex++) {
			//Only add if el not already has class.
			if(_untrim(val).indexOf(_untrim(add[classAddIndex])) === -1) {
				val += ' ' + add[classAddIndex];
			}
		}

		element[prop] = _trim(val);
	};

	var _trim = function(a) {
		return a.replace(rxTrim, '');
	};

	/**
	 * Adds a space before and after the string.
	 */
	var _untrim = function(a) {
		return ' ' + a + ' ';
	};

	var _now = Date.now || function() {
		return +new Date();
	};

	var _keyFrameComparator = function(a, b) {
		return a.frame - b.frame;
	};

	/*
	 * Private variables.
	 */

	//Singleton
	var _instance;

	/*
		A list of all elements which should be animated associated with their the metadata.
		Exmaple skrollable with two key frames animating from 100px width to 20px:

		skrollable = {
			element: <the DOM element>,
			styleAttr: <style attribute of the element before skrollr>,
			classAttr: <class attribute of the element before skrollr>,
			keyFrames: [
				{
					frame: 100,
					props: {
						width: {
							value: ['{?}px', 100],
							easing: <reference to easing function>
						}
					},
					mode: "absolute"
				},
				{
					frame: 200,
					props: {
						width: {
							value: ['{?}px', 20],
							easing: <reference to easing function>
						}
					},
					mode: "absolute"
				}
			]
		};
	*/
	var _skrollables;

	var _skrollrBody;

	var _listeners;
	var _forceHeight;
	var _maxKeyFrame = 0;

	var _scale = 1;
	var _constants;

	var _mobileDeceleration;

	//Current direction (up/down).
	var _direction = 'down';

	//The last top offset value. Needed to determine direction.
	var _lastTop = -1;

	//The last time we called the render method (doesn't mean we rendered!).
	var _lastRenderCall = _now();

	//For detecting if it actually resized (#271).
	var _lastViewportWidth = 0;
	var _lastViewportHeight = 0;

	var _requestReflow = false;

	//Will contain data about a running scrollbar animation, if any.
	var _scrollAnimation;

	var _smoothScrollingEnabled;

	var _smoothScrollingDuration;

	//Will contain settins for smooth scrolling if enabled.
	var _smoothScrolling;

	//Can be set by any operation/event to force rendering even if the scrollbar didn't move.
	var _forceRender;

	//Each skrollable gets an unique ID incremented for each skrollable.
	//The ID is the index in the _skrollables array.
	var _skrollableIdCounter = 0;

	var _edgeStrategy;


	//Mobile specific vars. Will be stripped by UglifyJS when not in use.
	var _isMobile = false;

	//The virtual scroll offset when using mobile scrolling.
	var _mobileOffset = 0;

	//If the browser supports 3d transforms, this will be filled with 'translateZ(0)' (empty string otherwise).
	var _translateZ;

	//Will contain data about registered events by skrollr.
	var _registeredEvents = [];

	//Animation frame id returned by RequestAnimationFrame (or timeout when RAF is not supported).
	var _animFrame;

	//Expose skrollr as either a global variable or a require.js module
	if(typeof define === 'function' && define.amd) {
		define('skrollr', function () {
			return skrollr;
		});
	} else if (typeof module !== 'undefined' && module.exports) {
		module.exports = skrollr;
	} else {
		window.skrollr = skrollr;
	}

}(window, document));

( function( $ ) {

  $(window).load(function() {

    // Navigation:
    var body, page, mainNav, menuButton, menuToggle;

    // Accessibility
    var screenReaderText = {"expand":"Close side navigation","collapse":"Open side navigation"};

    // Set up vars.
    page       = $( 'body' );
    mainNav    = page.find( '#sidenav' );
    menuButton = page.find( '#nav-toggle' );
    menuToggle = page.find( '.nav-trigger' );

    /**
     * Set up the off canvas navigation toggle. This sets
     * up a toggle for off canvas sidebar navigation.
     */
     ( function() {
      var menuToggleAccessible = page.find( '.nav-trigger #nav-toggle-label' );

      // Return early if menuToggle is missing.
      if ( ! menuToggle.length ) {
        return;
      }

      // Add an initial values for the attribute.
      menuToggle.attr( 'aria-expanded', 'false' );
      mainNav.attr( 'aria-expanded', 'false' );
      menuToggle.on( 'click', function( event ) {

        $( '.nav-trigger .burger' ).toggleClass('opened');
        $( '.nav-trigger' ).toggleClass('is-active');

        var findInsiders = function(elem) {

          var tabbable = elem.find('select, input, textarea, button, a').filter(':visible');

          var firstTabbable = tabbable.first();
          var lastTabbable = tabbable.last();
          firstTabbable.focus();

          lastTabbable.on('keydown', function (e) {
           if ((e.which === 9 && !e.shiftKey)) {
             e.preventDefault();
             firstTabbable.focus();
           }
         });

          firstTabbable.on('keydown', function (e) {
            if ((e.which === 9 && e.shiftKey)) {
              e.preventDefault();
              lastTabbable.focus();
            }
          });

          elem.on('keyup', function(e){
            if (e.keyCode === 27 ) {
              elem.hide();
            };
          });
        };
        findInsiders($('#sidenav'));

        // Toggle classes.
        $( 'html' ).toggleClass( 'disable-scroll' );
        $( 'body' ).toggleClass( 'main-navigation-open' );
        $( 'body' ).addClass( 'main-navigation-touched' );
        mainNav.toggleClass( 'open' );

        // Hide or show element after animation.
        if ( mainNav.hasClass( 'open' ) ) {

          // Enable focus.
          mainNav.attr( 'tabindex', -1 );
          mainNav.focus();

        } else {

          // Remove tabindex.
          mainNav.removeAttr( 'tabindex' );

          // Enable focus on toggle button.
          menuButton.focus();

        }

        // Change button text when opening and closing the sidebar.
        menuToggleAccessible.html( menuToggleAccessible.html() === screenReaderText.expand ? screenReaderText.collapse : screenReaderText.expand );

        // If aria-expanded is false, set it to true. And vica versa.
        $( menuToggle ).attr( 'aria-expanded', $( menuToggle ).attr( 'aria-expanded' ) === 'false' ? 'true' : 'false' );
        $( mainNav ).attr( 'aria-expanded', $( mainNav ).attr( 'aria-expanded' ) === 'false' ? 'true' : 'false' );

      });

    } )();

    /**
     * Closes the off canvas sidebar navigation when
     * the esc key is pressed.
     */
     $( document ).keyup( function( event ) {
      var menuToggleAccessible = page.find( '.nav-trigger .screen-reader-text' );

      if ( event.keyCode == 27 ) {

        if ( $( 'body' ).hasClass( 'main-navigation-open' ) ) {

          $( 'html' ).removeClass( 'disable-scroll' );
          $( 'body' ).removeClass( 'main-navigation-open' );
          mainNav.removeClass( 'open' );

          // Remove tabindex.
          mainNav.removeAttr( 'tabindex' );

          // Enable focus on toggle button.
          menuButton.focus();

          // Change button text when opening and closing the sidebar.
          menuToggleAccessible.html( menuToggleAccessible.html() === screenReaderText.expand ? screenReaderText.collapse : screenReaderText.expand );

          // If aria-expanded is false, set it to true. And vica versa.
          $( menuToggle ).attr( 'aria-expanded', $( menuToggle ).attr( 'aria-expanded' ) === 'false' ? 'true' : 'false' );
          $( mainNav ).attr( 'aria-expanded', $( mainNav ).attr( 'aria-expanded' ) === 'false' ? 'true' : 'false' );

        }

      }

    });

    // Add the logic for tab and shift+tab inside Sidebar.
    function onResizeFocus() {

      var focusable, firstFocusable, lastFocusable;

      // Get all, first and last focusable elements from the Sidebar.
      focusable      = mainNav.find( 'select, input, textarea, button, a' ).filter( ':visible' );
      firstFocusable = focusable.first();
      lastFocusable  = focusable.last();

      // Redirect last tab to first input or to menu button.
      lastFocusable.on( 'keydown', function ( e ) {
        if ( ( e.keyCode === 9 && !e.shiftKey ) ) {
          e.preventDefault();

          if ( window.innerWidth < 960 ) {
            firstFocusable.focus(); // Set focus on first element - that's actually close menu button.
          } else {
            menuButton.focus(); // Set focus on menu button.
          }

        }
      });

      // Redirect first shift+tab to last input or to menu button.
      firstFocusable.on( 'keydown', function ( e ) {
        if ( ( e.keyCode === 9 && e.shiftKey ) ) {
          e.preventDefault();

          if ( window.innerWidth < 960 ) {
            lastFocusable.focus(); // Set focus on last element.
          } else {
            menuButton.focus(); // Set focus on menu button.
          }

        }
      });

    }

    // Call for onResizeFocus function.
    $( document ).ready( function() {
      $( window )
      .on( 'load', onResizeFocus )
      .on( 'resize', function() {
        onResizeFocus();
      } );
    } );

  });

} )( jQuery );

// Generated by CoffeeScript 1.6.2
/*!
jQuery Waypoints - v2.0.5
Copyright (c) 2011-2014 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/jquery-waypoints/blob/master/licenses.txt
*/


(function() {
  var __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; },
    __slice = [].slice;

  (function(root, factory) {
    if (typeof define === 'function' && define.amd) {
      return define('waypoints', ['jquery'], function($) {
        return factory($, root);
      });
    } else {
      return factory(root.jQuery, root);
    }
  })(window, function($, window) {
    var $w, Context, Waypoint, allWaypoints, contextCounter, contextKey, contexts, isTouch, jQMethods, methods, resizeEvent, scrollEvent, waypointCounter, waypointKey, wp, wps;

    $w = $(window);
    isTouch = __indexOf.call(window, 'ontouchstart') >= 0;
    allWaypoints = {
      horizontal: {},
      vertical: {}
    };
    contextCounter = 1;
    contexts = {};
    contextKey = 'waypoints-context-id';
    resizeEvent = 'resize.waypoints';
    scrollEvent = 'scroll.waypoints';
    waypointCounter = 1;
    waypointKey = 'waypoints-waypoint-ids';
    wp = 'waypoint';
    wps = 'waypoints';
    Context = (function() {
      function Context($element) {
        var _this = this;

        this.$element = $element;
        this.element = $element[0];
        this.didResize = false;
        this.didScroll = false;
        this.id = 'context' + contextCounter++;
        this.oldScroll = {
          x: $element.scrollLeft(),
          y: $element.scrollTop()
        };
        this.waypoints = {
          horizontal: {},
          vertical: {}
        };
        this.element[contextKey] = this.id;
        contexts[this.id] = this;
        $element.bind(scrollEvent, function() {
          var scrollHandler;

          if (!(_this.didScroll || isTouch)) {
            _this.didScroll = true;
            scrollHandler = function() {
              _this.doScroll();
              return _this.didScroll = false;
            };
            return window.setTimeout(scrollHandler, $[wps].settings.scrollThrottle);
          }
        });
        $element.bind(resizeEvent, function() {
          var resizeHandler;

          if (!_this.didResize) {
            _this.didResize = true;
            resizeHandler = function() {
              $[wps]('refresh');
              return _this.didResize = false;
            };
            return window.setTimeout(resizeHandler, $[wps].settings.resizeThrottle);
          }
        });
      }

      Context.prototype.doScroll = function() {
        var axes,
          _this = this;

        axes = {
          horizontal: {
            newScroll: this.$element.scrollLeft(),
            oldScroll: this.oldScroll.x,
            forward: 'right',
            backward: 'left'
          },
          vertical: {
            newScroll: this.$element.scrollTop(),
            oldScroll: this.oldScroll.y,
            forward: 'down',
            backward: 'up'
          }
        };
        if (isTouch && (!axes.vertical.oldScroll || !axes.vertical.newScroll)) {
          $[wps]('refresh');
        }
        $.each(axes, function(aKey, axis) {
          var direction, isForward, triggered;

          triggered = [];
          isForward = axis.newScroll > axis.oldScroll;
          direction = isForward ? axis.forward : axis.backward;
          $.each(_this.waypoints[aKey], function(wKey, waypoint) {
            var _ref, _ref1;

            if ((axis.oldScroll < (_ref = waypoint.offset) && _ref <= axis.newScroll)) {
              return triggered.push(waypoint);
            } else if ((axis.newScroll < (_ref1 = waypoint.offset) && _ref1 <= axis.oldScroll)) {
              return triggered.push(waypoint);
            }
          });
          triggered.sort(function(a, b) {
            return a.offset - b.offset;
          });
          if (!isForward) {
            triggered.reverse();
          }
          return $.each(triggered, function(i, waypoint) {
            if (waypoint.options.continuous || i === triggered.length - 1) {
              return waypoint.trigger([direction]);
            }
          });
        });
        return this.oldScroll = {
          x: axes.horizontal.newScroll,
          y: axes.vertical.newScroll
        };
      };

      Context.prototype.refresh = function() {
        var axes, cOffset, isWin,
          _this = this;

        isWin = $.isWindow(this.element);
        cOffset = this.$element.offset();
        this.doScroll();
        axes = {
          horizontal: {
            contextOffset: isWin ? 0 : cOffset.left,
            contextScroll: isWin ? 0 : this.oldScroll.x,
            contextDimension: this.$element.width(),
            oldScroll: this.oldScroll.x,
            forward: 'right',
            backward: 'left',
            offsetProp: 'left'
          },
          vertical: {
            contextOffset: isWin ? 0 : cOffset.top,
            contextScroll: isWin ? 0 : this.oldScroll.y,
            contextDimension: isWin ? $[wps]('viewportHeight') : this.$element.height(),
            oldScroll: this.oldScroll.y,
            forward: 'down',
            backward: 'up',
            offsetProp: 'top'
          }
        };
        return $.each(axes, function(aKey, axis) {
          return $.each(_this.waypoints[aKey], function(i, waypoint) {
            var adjustment, elementOffset, oldOffset, _ref, _ref1;

            adjustment = waypoint.options.offset;
            oldOffset = waypoint.offset;
            elementOffset = $.isWindow(waypoint.element) ? 0 : waypoint.$element.offset()[axis.offsetProp];
            if ($.isFunction(adjustment)) {
              adjustment = adjustment.apply(waypoint.element);
            } else if (typeof adjustment === 'string') {
              adjustment = parseFloat(adjustment);
              if (waypoint.options.offset.indexOf('%') > -1) {
                adjustment = Math.ceil(axis.contextDimension * adjustment / 100);
              }
            }
            waypoint.offset = elementOffset - axis.contextOffset + axis.contextScroll - adjustment;
            if ((waypoint.options.onlyOnScroll && (oldOffset != null)) || !waypoint.enabled) {
              return;
            }
            if (oldOffset !== null && (oldOffset < (_ref = axis.oldScroll) && _ref <= waypoint.offset)) {
              return waypoint.trigger([axis.backward]);
            } else if (oldOffset !== null && (oldOffset > (_ref1 = axis.oldScroll) && _ref1 >= waypoint.offset)) {
              return waypoint.trigger([axis.forward]);
            } else if (oldOffset === null && axis.oldScroll >= waypoint.offset) {
              return waypoint.trigger([axis.forward]);
            }
          });
        });
      };

      Context.prototype.checkEmpty = function() {
        if ($.isEmptyObject(this.waypoints.horizontal) && $.isEmptyObject(this.waypoints.vertical)) {
          this.$element.unbind([resizeEvent, scrollEvent].join(' '));
          return delete contexts[this.id];
        }
      };

      return Context;

    })();
    Waypoint = (function() {
      function Waypoint($element, context, options) {
        var idList, _ref;

        if (options.offset === 'bottom-in-view') {
          options.offset = function() {
            var contextHeight;

            contextHeight = $[wps]('viewportHeight');
            if (!$.isWindow(context.element)) {
              contextHeight = context.$element.height();
            }
            return contextHeight - $(this).outerHeight();
          };
        }
        this.$element = $element;
        this.element = $element[0];
        this.axis = options.horizontal ? 'horizontal' : 'vertical';
        this.callback = options.handler;
        this.context = context;
        this.enabled = options.enabled;
        this.id = 'waypoints' + waypointCounter++;
        this.offset = null;
        this.options = options;
        context.waypoints[this.axis][this.id] = this;
        allWaypoints[this.axis][this.id] = this;
        idList = (_ref = this.element[waypointKey]) != null ? _ref : [];
        idList.push(this.id);
        this.element[waypointKey] = idList;
      }

      Waypoint.prototype.trigger = function(args) {
        if (!this.enabled) {
          return;
        }
        if (this.callback != null) {
          this.callback.apply(this.element, args);
        }
        if (this.options.triggerOnce) {
          return this.destroy();
        }
      };

      Waypoint.prototype.disable = function() {
        return this.enabled = false;
      };

      Waypoint.prototype.enable = function() {
        this.context.refresh();
        return this.enabled = true;
      };

      Waypoint.prototype.destroy = function() {
        delete allWaypoints[this.axis][this.id];
        delete this.context.waypoints[this.axis][this.id];
        return this.context.checkEmpty();
      };

      Waypoint.getWaypointsByElement = function(element) {
        var all, ids;

        ids = element[waypointKey];
        if (!ids) {
          return [];
        }
        all = $.extend({}, allWaypoints.horizontal, allWaypoints.vertical);
        return $.map(ids, function(id) {
          return all[id];
        });
      };

      return Waypoint;

    })();
    methods = {
      init: function(f, options) {
        var _ref;

        options = $.extend({}, $.fn[wp].defaults, options);
        if ((_ref = options.handler) == null) {
          options.handler = f;
        }
        this.each(function() {
          var $this, context, contextElement, _ref1;

          $this = $(this);
          contextElement = (_ref1 = options.context) != null ? _ref1 : $.fn[wp].defaults.context;
          if (!$.isWindow(contextElement)) {
            contextElement = $this.closest(contextElement);
          }
          contextElement = $(contextElement);
          context = contexts[contextElement[0][contextKey]];
          if (!context) {
            context = new Context(contextElement);
          }
          return new Waypoint($this, context, options);
        });
        $[wps]('refresh');
        return this;
      },
      disable: function() {
        return methods._invoke.call(this, 'disable');
      },
      enable: function() {
        return methods._invoke.call(this, 'enable');
      },
      destroy: function() {
        return methods._invoke.call(this, 'destroy');
      },
      prev: function(axis, selector) {
        return methods._traverse.call(this, axis, selector, function(stack, index, waypoints) {
          if (index > 0) {
            return stack.push(waypoints[index - 1]);
          }
        });
      },
      next: function(axis, selector) {
        return methods._traverse.call(this, axis, selector, function(stack, index, waypoints) {
          if (index < waypoints.length - 1) {
            return stack.push(waypoints[index + 1]);
          }
        });
      },
      _traverse: function(axis, selector, push) {
        var stack, waypoints;

        if (axis == null) {
          axis = 'vertical';
        }
        if (selector == null) {
          selector = window;
        }
        waypoints = jQMethods.aggregate(selector);
        stack = [];
        this.each(function() {
          var index;

          index = $.inArray(this, waypoints[axis]);
          return push(stack, index, waypoints[axis]);
        });
        return this.pushStack(stack);
      },
      _invoke: function(method) {
        this.each(function() {
          var waypoints;

          waypoints = Waypoint.getWaypointsByElement(this);
          return $.each(waypoints, function(i, waypoint) {
            waypoint[method]();
            return true;
          });
        });
        return this;
      }
    };
    $.fn[wp] = function() {
      var args, method;

      method = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      if (methods[method]) {
        return methods[method].apply(this, args);
      } else if ($.isFunction(method)) {
        return methods.init.apply(this, arguments);
      } else if ($.isPlainObject(method)) {
        return methods.init.apply(this, [null, method]);
      } else if (!method) {
        return $.error("jQuery Waypoints needs a callback function or handler option.");
      } else {
        return $.error("The " + method + " method does not exist in jQuery Waypoints.");
      }
    };
    $.fn[wp].defaults = {
      context: window,
      continuous: true,
      enabled: true,
      horizontal: false,
      offset: 0,
      triggerOnce: false
    };
    jQMethods = {
      refresh: function() {
        return $.each(contexts, function(i, context) {
          return context.refresh();
        });
      },
      viewportHeight: function() {
        var _ref;

        return (_ref = window.innerHeight) != null ? _ref : $w.height();
      },
      aggregate: function(contextSelector) {
        var collection, waypoints, _ref;

        collection = allWaypoints;
        if (contextSelector) {
          collection = (_ref = contexts[$(contextSelector)[0][contextKey]]) != null ? _ref.waypoints : void 0;
        }
        if (!collection) {
          return [];
        }
        waypoints = {
          horizontal: [],
          vertical: []
        };
        $.each(waypoints, function(axis, arr) {
          $.each(collection[axis], function(key, waypoint) {
            return arr.push(waypoint);
          });
          arr.sort(function(a, b) {
            return a.offset - b.offset;
          });
          waypoints[axis] = $.map(arr, function(waypoint) {
            return waypoint.element;
          });
          return waypoints[axis] = $.unique(waypoints[axis]);
        });
        return waypoints;
      },
      above: function(contextSelector) {
        if (contextSelector == null) {
          contextSelector = window;
        }
        return jQMethods._filter(contextSelector, 'vertical', function(context, waypoint) {
          return waypoint.offset <= context.oldScroll.y;
        });
      },
      below: function(contextSelector) {
        if (contextSelector == null) {
          contextSelector = window;
        }
        return jQMethods._filter(contextSelector, 'vertical', function(context, waypoint) {
          return waypoint.offset > context.oldScroll.y;
        });
      },
      left: function(contextSelector) {
        if (contextSelector == null) {
          contextSelector = window;
        }
        return jQMethods._filter(contextSelector, 'horizontal', function(context, waypoint) {
          return waypoint.offset <= context.oldScroll.x;
        });
      },
      right: function(contextSelector) {
        if (contextSelector == null) {
          contextSelector = window;
        }
        return jQMethods._filter(contextSelector, 'horizontal', function(context, waypoint) {
          return waypoint.offset > context.oldScroll.x;
        });
      },
      enable: function() {
        return jQMethods._invoke('enable');
      },
      disable: function() {
        return jQMethods._invoke('disable');
      },
      destroy: function() {
        return jQMethods._invoke('destroy');
      },
      extendFn: function(methodName, f) {
        return methods[methodName] = f;
      },
      _invoke: function(method) {
        var waypoints;

        waypoints = $.extend({}, allWaypoints.vertical, allWaypoints.horizontal);
        return $.each(waypoints, function(key, waypoint) {
          waypoint[method]();
          return true;
        });
      },
      _filter: function(selector, axis, test) {
        var context, waypoints;

        context = contexts[$(selector)[0][contextKey]];
        if (!context) {
          return [];
        }
        waypoints = [];
        $.each(context.waypoints[axis], function(i, waypoint) {
          if (test(context, waypoint)) {
            return waypoints.push(waypoint);
          }
        });
        waypoints.sort(function(a, b) {
          return a.offset - b.offset;
        });
        return $.map(waypoints, function(waypoint) {
          return waypoint.element;
        });
      }
    };
    $[wps] = function() {
      var args, method;

      method = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      if (jQMethods[method]) {
        return jQMethods[method].apply(null, args);
      } else {
        return jQMethods.aggregate.call(null, method);
      }
    };
    $[wps].settings = {
      resizeThrottle: 100,
      scrollThrottle: 30
    };
    return $w.on('load.waypoints', function() {
      return $[wps]('refresh');
    });
  });

}).call(this);

/*::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
 jquery.mb.components
 
 file: jquery.mb.YTPlayer.src.js
 last modified: 11/2/18 7:23 PM
 Version:  3.3.1
 Build:  7469
 
 Open Lab s.r.l., Florence - Italy
 email:  matteo@open-lab.com
 blog:  http://pupunzi.open-lab.com
 site:  http://pupunzi.com
  http://open-lab.com
 
 Licences: MIT, GPL
 https://www.opensource.org/licenses/mit-license.php
 https://www.gnu.org/licenses/gpl.html
 
 Copyright (c) 2001-2018. Matteo Bicocchi (Pupunzi)
 :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/



var ytp = ytp || {}

function onYouTubeIframeAPIReady() {
  if (ytp.YTAPIReady)
    return
  ytp.YTAPIReady = true
  jQuery(document).trigger('YTAPIReady')
}

let getYTPVideoID = function (url) {
  let videoID, playlistID
  if (url.indexOf('youtu.be') > 0 || url.indexOf('youtube.com/embed') > 0) {
    videoID = url.substr(url.lastIndexOf('/') + 1, url.length)
    playlistID = videoID.indexOf('?list=') > 0 ? videoID.substr(videoID.lastIndexOf('='), videoID.length) : null
    videoID = playlistID ? videoID.substr(0, videoID.lastIndexOf('?')) : videoID
  } else if (url.indexOf('http') > -1) {
    //videoID = url.match( /([\/&]v\/([^&#]*))|([\\?&]v=([^&#]*))/ )[ 1 ];
    videoID = url.match(/[\\?&]v=([^&#]*)/)[1]
    playlistID = url.indexOf('list=') > 0 ? url.match(/[\\?&]list=([^&#]*)/)[1] : null
  } else {
    videoID = url.length > 15 ? null : url
    playlistID = videoID ? null : url
  }
  return {
    videoID   : videoID,
    playlistID: playlistID
  }
};

function iOSversion() {
  if (/iP(hone|od|ad)/.test(navigator.platform)) {
    let v = (navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/)
    return [parseInt(v[1], 10), parseInt(v[2], 10), parseInt(v[3] || 0, 10)]
  }
}

(function (jQuery, ytp) {

  jQuery.mbYTPlayer = {
    name   : 'jquery.mb.YTPlayer',
    version: '3.3.1',
    build  : '7469',
    author : 'Matteo Bicocchi (pupunzi)',
    apiKey : '',

    /*
     * Default options for the player
     */
    defaults        : {
      /**
       videoURL (string)
       the complete Youtube video URL or the short url or the videoID
       */
      videoURL: null,

      /**
       containment (string)
       default containment for the player
       */
      containment: 'body',

      /**
       ratio (string or number)
       "auto", "16/9", "4/3" or number: 4/3, 16/9
       */
      ratio: 'auto',

      /**
       fadeOnStartTime (int)
       fade in timing at video start
       */
      fadeOnStartTime: 1000,

      /**
       startAt (int)
       start second
       */
      startAt: 0,

      /**
       stopAt (int)
       stop second
       */
      stopAt: 0,

      /**
       autoPlay (bool)
       on page load video should start or pause
       */
      autoPlay: true,

      /**
       coverImage (string)
       The path to the image to be used as cover if the autoPlay option is set to false
       */
      coverImage: false,

      /**
       loop (bool or int)
       video should loop or not; if number it will loop for the specified times
       */
      loop: true,

      /**
       addRaster (bool)
       shows a raster image over the video (added via CSS)
       You can change the raster image via CSS:
       .YTPOverlay.raster { background: url(images/raster.png)}
       */
      addRaster: false,

      /**
       mask (bool or object) the key is the second and the value is the path to the image
       Ex: mask:{ 0:'assets/mask-1.png', 5:'assets/mask-2.png', 30: false, 50:'assets/mask-3.png'}
       */
      mask: false,

      /**
       opacity (int)
       0 to 1
       */
      opacity: 1,

      /**
       quality (string)
       “small”, “medium”, “large”, “hd720”, “hd1080”, “highres”, "default"
       */
      quality: 'default',

      /**
       vol (int)
       0 to 100
       */
      vol: 50,

      /**
       mute (bool)
       mute the video at start
       */
      mute: false,

      /**
       showControls (bool)
       shows the control bar at the bottom of the containment
       */
      showControls: true,

      /**
       anchor (string)
       center,top,bottom,left,right combined in pair
       */
      anchor: 'center,center',

      /**
       showAnnotations (bool)
       display the annotations on video
       */
      showAnnotations: false,

      /**
       cc_load_policy (bool)
       display the subtitles
       */
      cc_load_policy: false,

      /**
       showYTLogo (bool)
       display the Youtube logotype inside the button bar
       */
      showYTLogo: true,

      /**
       useOnMobile (bool)
       activate the player also on mobile
       */
      useOnMobile: true,

      /**
       playOnlyIfVisible (bool)
       play the video only if the containment is on screen
       */
      playOnlyIfVisible: false,

      /**
       onScreenPercentage (bool)
       percentage of the player height the video should stop or start when visible
       */
      onScreenPercentage: 30,

      /**
       stopMovieOnBlur (bool)
       stop the video if the window loose the focus
       */
      stopMovieOnBlur: true,

      /**
       realfullscreen (bool)
       the video when in full screen covers all the display
       */
      realFullscreen: true,

      /**
       optimizeDisplay (bool)
       The video always fit the containment without displaying the black strips
       */
      optimizeDisplay: true,

      /**
       abundance (bool)
       the abudance of the video size
       */
      abundance: 0.3,

      /**
       gaTrack (bool)
       track the video plays on GA
       */
      gaTrack: true,

      /**
       remember_last_time (bool)
       when the page is reloaded the video will start from the last position
       */
      remember_last_time: false,

      /**
       addFilters (bool or string)
       add one or more CSS filters as object to the video
       Ex: {sepia: 50, hue_rotate : 220}
       */
      addFilters: false,

      /**
       onReady (function)
       a callback function fired once the player is ready
       */
      onReady: function (player) {
      },

      /**
       onReady (function)
       a callback function fired if there's an error
       */
      onError: function (player, err) {
      }
    },
    /**
     *  @fontface icons
     *  */
    controls        : {
      play    : 'P',
      pause   : 'p',
      mute    : 'M',
      unmute  : 'A',
      onlyYT  : 'O',
      showSite: 'R',
      ytLogo  : 'Y'
    },
    controlBar      : null,
    locationProtocol: 'https:',

    /**
     * Applicable filters
     */
    defaultFilters: {
      grayscale : {value: 0, unit: '%'},
      hue_rotate: {value: 0, unit: 'deg'},
      invert    : {value: 0, unit: '%'},
      opacity   : {value: 0, unit: '%'},
      saturate  : {value: 0, unit: '%'},
      sepia     : {value: 0, unit: '%'},
      brightness: {value: 0, unit: '%'},
      contrast  : {value: 0, unit: '%'},
      blur      : {value: 0, unit: 'px'}
    },

    /**
     * build the player
     * @param options
     * @returns [players]
     */
    buildPlayer: function (options) {

      if (!ytp.YTAPIReady && typeof window.YT === 'undefined') {
        jQuery('#YTAPI').remove()
        let tag = jQuery('<script>').attr({
          'src': 'https://www.youtube.com/iframe_api?v=' + jQuery.mbYTPlayer.version,
          'id' : 'YTAPI'
        })
        jQuery('head').prepend(tag)
      } else {
        setTimeout(function () {
          jQuery(document).trigger('YTAPIReady')
          ytp.YTAPIReady = true
        }, 100)
      }

      function isIframe() {
        let isIfr = false
        try {
          if (self.location.href != top.location.href) isIfr = true
        } catch (e) {
          isIfr = true
        }
        return isIfr
      }

      console.time('YTPlayerInit')
      console.time('YTPlayerStartPlay')

      return this.each(function () {
        let YTPlayer = this
        let $YTPlayer = jQuery(YTPlayer)
        $YTPlayer.hide()
        YTPlayer.loop = 0
        YTPlayer.state = 0
        YTPlayer.filters = jQuery.extend(true, {}, jQuery.mbYTPlayer.defaultFilters)
        YTPlayer.filtersEnabled = true
        YTPlayer.id = YTPlayer.id || 'YTP_' + new Date().getTime()
        $YTPlayer.addClass('mb_YTPlayer')

        /**
         Set properties
         */
        let property = $YTPlayer.data('property') && typeof $YTPlayer.data('property') == 'string' ?
            eval('(' + $YTPlayer.data('property') + ')') :
            $YTPlayer.data('property')

        if (typeof property !== 'object')
          property = {}

        YTPlayer.opt = jQuery.extend(true, {}, jQuery.mbYTPlayer.defaults, YTPlayer.opt, options, property)

        YTPlayer.opt.elementId = YTPlayer.id

        if (YTPlayer.opt.vol === 0) {
          YTPlayer.opt.vol = 1
          YTPlayer.opt.mute = true
        }

        /**
         * If autoPlay is set to true and  mute is set to false
         * Webkit browser will not auto-play
         * Start playing after the first click
         */
        if (YTPlayer.opt.autoPlay && YTPlayer.opt.mute == false && jQuery.mbBrowser.chrome) {
          //YTPlayer.opt.mute = true;
          jQuery(document).one('mousedown.YTPstart', function () {
            $YTPlayer.YTPPlay()
          })
          console.info('YTPlayer info: On Webkit browsers you can not autoplay the video if the audio is on.')
        }

        if (YTPlayer.opt.loop && typeof YTPlayer.opt.loop === 'boolean') {
          YTPlayer.opt.loop = 9999
        }

        /**
         Disable fullScreen if is in an iframe or full-screen API is not available
         */
        let fullScreenAvailable = document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled
        YTPlayer.opt.realFullscreen = isIframe() || !fullScreenAvailable ? false : YTPlayer.opt.realFullscreen

        /**
         Manage annotations
         */
        YTPlayer.opt.showAnnotations = YTPlayer.opt.showAnnotations ? '1' : '3'

        /**
         Manage show subtitle and caption
         */
        YTPlayer.opt.cc_load_policy = YTPlayer.opt.cc_load_policy ? '1' : '0'

        /**
         Manage cover image
         */
        YTPlayer.opt.coverImage = YTPlayer.opt.coverImage || YTPlayer.opt.backgroundImage

        /**
         * todo: remove
         Manage Opacity for IE < 10
         */
        if (jQuery.mbBrowser.msie && jQuery.mbBrowser.version < 9)
          YTPlayer.opt.opacity = 1

        YTPlayer.opt.containment = YTPlayer.opt.containment === 'self' ? $YTPlayer : jQuery(YTPlayer.opt.containment)
        YTPlayer.isRetina = (window.retina || window.devicePixelRatio > 1)

        YTPlayer.opt.ratio = YTPlayer.opt.ratio === 'auto' ? 16 / 9 : YTPlayer.opt.ratio
        YTPlayer.opt.ratio = eval(YTPlayer.opt.ratio)

        let origContainmentBackground = YTPlayer.opt.containment.css('background-image')
        origContainmentBackground = (origContainmentBackground == 'none') ? null : origContainmentBackground
        YTPlayer.orig_containment_background = origContainmentBackground

        if (!$YTPlayer.attr('id'))
          $YTPlayer.attr('id', 'ytp_' + new Date().getTime())

        YTPlayer.playerID = 'iframe_' + YTPlayer.id

        YTPlayer.isAlone = false
        YTPlayer.hasFocus = true
        YTPlayer.videoID = YTPlayer.opt.videoURL ?
            getYTPVideoID(YTPlayer.opt.videoURL).videoID : $YTPlayer.attr('href') ?
                getYTPVideoID($YTPlayer.attr('href')).videoID :
                false

        /**
         Check if it is a video list
         */
        YTPlayer.playlistID = YTPlayer.opt.videoURL ?
            getYTPVideoID(YTPlayer.opt.videoURL).playlistID : $YTPlayer.attr('href') ?
                getYTPVideoID($YTPlayer.attr('href')).playlistID :
                false

        let start_from_last = 0
        if (jQuery.mbCookie.get('YTPlayer_start_from' + YTPlayer.videoID))
          start_from_last = parseFloat(jQuery.mbCookie.get('YTPlayer_start_from' + YTPlayer.videoID))
        if (YTPlayer.opt.remember_last_time && start_from_last) {
          YTPlayer.start_from_last = start_from_last
          jQuery.mbCookie.remove('YTPlayer_start_from' + YTPlayer.videoID)
        }

        YTPlayer.isPlayer = $YTPlayer.is(YTPlayer.opt.containment)
        YTPlayer.isBackground = YTPlayer.opt.containment.is('body')

        if (YTPlayer.isBackground && ytp.backgroundIsInited)
          return

        /**
         Hide the placeholder if it's not the target of the player
         */
        if (YTPlayer.isPlayer)
          $YTPlayer.show()

        /**
         create the overlay
         */
        YTPlayer.overlay = jQuery('<div/>').css({
          position: 'absolute',
          top     : 0,
          left    : 0,
          width   : '100%',
          height  : '100%'
        }).addClass('YTPOverlay')

        if (YTPlayer.opt.coverImage || YTPlayer.orig_containment_background) {
          let bgndURL = YTPlayer.opt.coverImage ? 'url(' + YTPlayer.opt.coverImage + ') center center' : YTPlayer.orig_containment_background
          if (bgndURL)
            YTPlayer.opt.containment.css({
              background      : bgndURL,
              backgroundSize  : 'cover',
              backgroundRepeat: 'no-repeat'
            })
        }

        /**
         create the wrapper
         */
        YTPlayer.wrapper = jQuery('<div/>').attr('id', 'wrapper_' + YTPlayer.id).css({
          position : 'absolute',
          zIndex   : 0,
          minWidth : '100%',
          minHeight: '100%',
          left     : 0,
          top      : 0,
          overflow : 'hidden',
          opacity  : 0
        }).addClass('mbYTP_wrapper')

        /**
         If is an inline player toggle play if the overlay is clicked
         */
        if (YTPlayer.isPlayer) {
          YTPlayer.inlinePlayButton = jQuery('<div/>').addClass('inlinePlayButton').html(jQuery.mbYTPlayer.controls.play)
          $YTPlayer.append(YTPlayer.inlinePlayButton)
          YTPlayer.inlinePlayButton.on('click', function (e) {
            $YTPlayer.YTPPlay()
            e.stopPropagation()
          })

          if (YTPlayer.opt.autoPlay)
            YTPlayer.inlinePlayButton.hide()

          YTPlayer.overlay.on('click', function () {
            $YTPlayer.YTPTogglePlay()
          }).css({cursor: 'pointer'})
        }

        /**
         create the playerBox where the YT iframe will be placed
         */
        let playerBox = jQuery('<div/>').attr('id', YTPlayer.playerID).addClass('playerBox')
        playerBox.css({
          position: 'absolute',
          zIndex  : 0,
          width   : '100%',
          height  : '100%',
          top     : 0,
          left    : 0,
          overflow: 'hidden',
          opacity : 1
        })

        YTPlayer.wrapper.append(playerBox)
        playerBox.after(YTPlayer.overlay)

        if (YTPlayer.isPlayer) {
          YTPlayer.inlineWrapper = jQuery('<div/>').addClass('inline-YTPlayer')

          YTPlayer.inlineWrapper.css({
            position: 'relative',
            maxWidth: YTPlayer.opt.containment.css('width')
          })

          YTPlayer.opt.containment.css({
            position     : 'relative',
            paddingBottom: '56.25%',
            overflow     : 'hidden',
            height       : 0
          })
          YTPlayer.opt.containment.wrap(YTPlayer.inlineWrapper)
        }

        /**
         Loop all the elements inside the container and check if their position is not "static"
         */
        YTPlayer.opt.containment.children().not('script, style').each(function () {
          if (jQuery(this).css('position') == 'static')
            jQuery(this).css('position', 'relative')
        })

        if (YTPlayer.isBackground) {
          jQuery('body').css({
            boxSizing: 'border-box'
          })

          YTPlayer.wrapper.css({
            position: 'fixed',
            top     : 0,
            left    : 0,
            zIndex  : 0
          })

        } else if (YTPlayer.opt.containment.css('position') == 'static') {

          YTPlayer.opt.containment.css({
            position: 'relative'
          })
          $YTPlayer.show()
        }
        YTPlayer.opt.containment.prepend(YTPlayer.wrapper)

        if (!YTPlayer.isBackground) {
          YTPlayer.overlay.on('mouseenter', function () {
            if (YTPlayer.controlBar && YTPlayer.controlBar.length)
              YTPlayer.controlBar.addClass('visible')
          }).on('mouseleave', function () {
            if (YTPlayer.controlBar && YTPlayer.controlBar.length)
              YTPlayer.controlBar.removeClass('visible')
          })
        }

        if (jQuery.mbBrowser.mobile && !YTPlayer.opt.useOnMobile) {
          if (YTPlayer.opt.coverImage) {
            YTPlayer.wrapper.css({
              backgroundImage   : 'url(' + YTPlayer.opt.coverImage + ')',
              backgroundPosition: 'center center',
              backgroundSize    : 'cover',
              backgroundRepeat  : 'no-repeat',
              opacity           : 1
            })
            YTPlayer.wrapper.css({opacity: 1})
          }
          return $YTPlayer
        }

        /**
         If is on device start playing on first touch
         */
        if (jQuery.mbBrowser.mobile && YTPlayer.opt.autoPlay && YTPlayer.opt.useOnMobile)
          jQuery('body').one('touchstart', function () {
            YTPlayer.player.playVideo()
          })

        jQuery(document).one('YTAPIReady', function () {
          $YTPlayer.trigger('YTAPIReady_' + YTPlayer.id)
          ytp.YTAPIReady = true
        })

        YTPlayer.isOnScreen = jQuery.mbYTPlayer.isOnScreen(YTPlayer, YTPlayer.opt.onScreenPercentage)

        $YTPlayer.one('YTAPIReady_' + YTPlayer.id, function () {

          let YTPlayer = this
          let $YTPlayer = jQuery(YTPlayer)

          if ((YTPlayer.isBackground && ytp.backgroundIsInited) || YTPlayer.isInit)
            return

          if (YTPlayer.isBackground)
            ytp.backgroundIsInited = true

          YTPlayer.opt.autoPlay = typeof YTPlayer.opt.autoPlay == 'undefined' ? (YTPlayer.isBackground ? true : false) : YTPlayer.opt.autoPlay
          YTPlayer.opt.vol = YTPlayer.opt.vol ? YTPlayer.opt.vol : 100

          jQuery.mbYTPlayer.getDataFromAPI(YTPlayer)

          jQuery(YTPlayer).on('YTPChanged', function (e) {

            if (YTPlayer.isInit)
              return

            YTPlayer.isInit = true

            /** Initialize the YT player ------------------------------------
             * Youtube player variables
             * @type {{modestbranding: number, autoplay: number, controls: number, showinfo: number, rel: number, enablejsapi: number, version: number, playerapiid: string, origin: string, allowfullscreen: boolean, iv_load_policy: (string|*|jQuery.mbYTPlayer.opt.showAnnotations), playsinline: number}}
             */
            let playerVars = {
              'modestbranding' : 1,
              'autoplay'       : 0,
              'controls'       : 0,
              'showinfo'       : 0,
              'rel'            : 0,
              'enablejsapi'    : 1,
              'version'        : 3,
              'playerapiid'    : YTPlayer.playerID,
              'origin'         : '*',
              'allowfullscreen': true,
              'wmode'          : 'transparent',
              'iv_load_policy' : YTPlayer.opt.showAnnotations,
              'cc_load_policy' : YTPlayer.opt.cc_load_policy,
              'playsinline'    : jQuery.mbBrowser.mobile ? 1 : 0,

              /**
               Check if the browser can play HTML5 videos
               */
              'html5': document.createElement('video').canPlayType ? 1 : 0
            }

            new YT.Player(YTPlayer.playerID, {
              //videoId: YTPlayer.videoID.toString(),
              playerVars: playerVars,
              events    : {
                'onReady'                : function (event) {

                  YTPlayer.player = event.target

                  //todo: make playlist works
                  /* if (YTPlayer.playlistID && YTPlayer.apiKey) {
                    YTPlayer.isList = true;
                    YTPlayer.videos = [];
                    YTPlayer.player.cuePlaylist({
                      listType: 'playlist',
                      list: YTPlayer.playlistID.toString(),
                      startSeconds: YTPlayer.opt.startAt,
                      endSeconds: YTPlayer.opt.stopAt,
                      suggestedQuality: YTPlayer.opt.quality
                    });
                    }
                     else { */

                  YTPlayer.player.loadVideoById({
                    videoId         : YTPlayer.videoID.toString(),
                    // startSeconds: YTPlayer.start_from_last || YTPlayer.opt.startAt,
                    // endSeconds: YTPlayer.opt.stopAt,
                    suggestedQuality: YTPlayer.opt.quality
                  })

                  /*}*/

                  $YTPlayer.trigger('YTPlayerIsReady_' + YTPlayer.id)
                },
                /**
                 * on State Change
                 * @param event
                 *
                 * -1 (unstarted)
                 * 0 (ended)
                 * 1 (playing)
                 * 2 (paused)
                 * 3 (buffering)
                 * 5 (video cued)
                 */
                'onStateChange'          : function (event) {

                  if (typeof event.target.getPlayerState != 'function')
                    return

                  let state = event.target.getPlayerState()

                  if (YTPlayer.preventTrigger || YTPlayer.isStarting) {
                    YTPlayer.preventTrigger = false
                    return
                  }

                  YTPlayer.state = state
                  // console.debug(YTPlayer.state);

                  if (event.data == YT.PlayerState.PLAYING) {
                    // console.debug('YTPlayer.opt.quality', YTPlayer.opt.quality)
                    event.target.setPlaybackQuality(YTPlayer.opt.quality)
                  }

                  // console.debug('YTPGetVideoQuality', jQuery(YTPlayer).YTPGetVideoQuality());

                  let eventType
                  switch (state) {

                      /** unstarted */
                    case -1:
                      eventType = 'YTPUnstarted'
                      break

                      /** unstarted */
                    case 0:
                      eventType = 'YTPRealEnd'
                      break

                      /** play */
                    case 1:
                      eventType = 'YTPPlay'
                      if (YTPlayer.controlBar.length)
                        YTPlayer.controlBar.find('.mb_YTPPlayPause').html(jQuery.mbYTPlayer.controls.pause)

                      if (YTPlayer.isPlayer)
                        YTPlayer.inlinePlayButton.hide()

                      jQuery(document).off('mousedown.YTPstart')
                      break

                      /** pause */
                    case 2:
                      eventType = 'YTPPause'
                      if (YTPlayer.controlBar.length)
                        YTPlayer.controlBar.find('.mb_YTPPlayPause').html(jQuery.mbYTPlayer.controls.play)

                      if (YTPlayer.isPlayer)
                        YTPlayer.inlinePlayButton.show()
                      break

                      /** buffer */
                    case 3:
                      YTPlayer.player.setPlaybackQuality(YTPlayer.opt.quality)
                      eventType = 'YTPBuffering'
                      if (YTPlayer.controlBar.length)
                        YTPlayer.controlBar.find('.mb_YTPPlayPause').html(jQuery.mbYTPlayer.controls.play)
                      break

                      /** cued */
                    case 5:
                      eventType = 'YTPCued'
                      break

                    default:
                      break
                  }

                  /**
                   Trigger state events
                   */
                  let YTPEvent = jQuery.Event(eventType)
                  YTPEvent.time = YTPlayer.currentTime
                  jQuery(YTPlayer).trigger(YTPEvent)
                },
                /**
                 * onPlaybackQualityChange
                 * @param e
                 */
                'onPlaybackQualityChange': function (e) {
                  let quality = e.target.getPlaybackQuality()
                  let YTPQualityChange = jQuery.Event('YTPQualityChange')
                  YTPQualityChange.quality = quality
                  jQuery(YTPlayer).trigger(YTPQualityChange)
                },
                /**
                 * onError
                 * @param err
                 *
                 2 – The request contains an invalid parameter value. For example, this error occurs if you specify a video ID that does not have 11 characters, or if the video ID contains invalid characters, such as exclamation points or asterisks.
                 5 – The requested content cannot be played in an HTML5 player or another error related to the HTML5 player has occurred.
                 100 – The video requested was not found. This error occurs when a video has been removed (for any reason) or has been marked as private.
                 101 – The owner of the requested video does not allow it to be played in embedded players.
                 150 – This error is the same as 101. It's just a 101 error in disguise!
                 */
                'onError'                : function (err) {

                  if (typeof YTPlayer.opt.onError == 'function')
                    YTPlayer.opt.onError($YTPlayer, err)

                  console.debug("error:", err)

                  switch (err.data) {
                    case 2:
                      console.error('video ID:: ' + YTPlayer.videoID + ': The request contains an invalid parameter value. For example, this error occurs if you specify a video ID that does not have 11 characters, or if the video ID contains invalid characters, such as exclamation points or asterisks.')
                      break
                    case 5:
                      console.error('video ID:: ' + YTPlayer.videoID + ': The requested content cannot be played in an HTML5 player or another error related to the HTML5 player has occurred.')
                      break
                    case 100:
                      console.error('video ID:: ' + YTPlayer.videoID + ': The video requested was not found. This error occurs when a video has been removed (for any reason) or has been marked as private.')
                      break
                    case 101:
                    case 150:
                      console.error('video ID:: ' + YTPlayer.videoID + ': The video doesn\'t exist or The owner does not allow it to be played in embedded players.')
                      break
                  }

                  if (YTPlayer.isList)
                    jQuery(YTPlayer).YTPPlayNext()

                }
              }
            })

            $YTPlayer.on('YTPlayerIsReady_' + YTPlayer.id, function () {

              if (YTPlayer.isReady)
                return this

              YTPlayer.playerEl = YTPlayer.player.getIframe()
              jQuery(YTPlayer.playerEl).unselectable()
              $YTPlayer.optimizeDisplay()

              /**
               * Optimize display on resize
               */
              jQuery(window).off('resize.YTP_' + YTPlayer.id).on('resize.YTP_' + YTPlayer.id, function () {
                $YTPlayer.optimizeDisplay()
              })

              /**
               * Set the time of the last visit progress
               */
              if (YTPlayer.opt.remember_last_time) {
                jQuery(window).on('unload.YTP_' + YTPlayer.id, function () {
                  let current_time = YTPlayer.player.getCurrentTime()
                  jQuery.mbCookie.set('YTPlayer_start_from' + YTPlayer.videoID, current_time, 0)
                })
              }

              $YTPlayer.YTPCheckForState()

            })
          })
        })

        $YTPlayer.off('YTPTime.mask')
        jQuery.mbYTPlayer.applyMask(YTPlayer)

        console.timeEnd('YTPlayerInit')
      })
    },

    /**
     * isOnScreen
     * Check if the YTPlayer is on screen
     * @param YTPlayer
     * @returns {boolean}
     */
    isOnScreen: function (YTPlayer, perc) {
      perc = perc || 10
      let playerBox = YTPlayer.wrapper
      let winTop = jQuery(window).scrollTop()
      let winBottom = winTop + jQuery(window).height()

      let margin = (playerBox.height() * perc) / 100
      let elTop = playerBox.offset().top + margin
      let elBottom = playerBox.offset().top + (playerBox.height() - margin)

      return ((elBottom <= winBottom) && (elTop >= winTop))
    },

    /**
     * getDataFromAPI
     * @param YTPlayer
     */
    getDataFromAPI: function (YTPlayer) {

      YTPlayer.videoData = jQuery.mbStorage.get('YTPlayer_data_' + YTPlayer.videoID)
      if (YTPlayer.videoData) {
        setTimeout(function () {
          YTPlayer.dataReceived = true

          let YTPChanged = jQuery.Event('YTPChanged')
          YTPChanged.time = YTPlayer.currentTime
          YTPChanged.videoId = YTPlayer.videoID
          YTPChanged.opt = YTPlayer.opt

          //console.debug("videoData:",YTPlayer.videoData)

          jQuery(YTPlayer).trigger(YTPChanged)

          let YTPData = jQuery.Event('YTPData')
          YTPData.prop = {}
          for (let x in YTPlayer.videoData)
            YTPData.prop[x] = YTPlayer.videoData[x]
          jQuery(YTPlayer).trigger(YTPData)

        }, YTPlayer.opt.fadeOnStartTime)

        YTPlayer.hasData = true

      } else if (jQuery.mbYTPlayer.apiKey) {

        /**
         * Get video info from API3 (needs api key)
         * snippet,player,contentDetails,statistics,status
         */
        jQuery.getJSON('https://www.googleapis.com/youtube/v3/videos?id=' + YTPlayer.videoID + '&key=' + jQuery.mbYTPlayer.apiKey + '&part=snippet', function (data) {
          YTPlayer.dataReceived = true

          let YTPChanged = jQuery.Event('YTPChanged')
          YTPChanged.time = YTPlayer.currentTime
          YTPChanged.videoId = YTPlayer.videoID
          jQuery(YTPlayer).trigger(YTPChanged)

          function parseYTPlayer_data(data) {
            YTPlayer.videoData = {}
            YTPlayer.videoData.id = YTPlayer.videoID
            YTPlayer.videoData.channelTitle = data.channelTitle
            YTPlayer.videoData.title = data.title
            YTPlayer.videoData.description = data.description.length < 400 ? data.description : data.description.substring(0, 400) + ' ...'
            YTPlayer.videoData.thumb_max = data.thumbnails.maxres ? data.thumbnails.maxres.url : null
            YTPlayer.videoData.thumb_high = data.thumbnails.high ? data.thumbnails.high.url : null
            YTPlayer.videoData.thumb_medium = data.thumbnails.medium ? data.thumbnails.medium.url : null
            jQuery.mbStorage.set('YTPlayer_data_' + YTPlayer.videoID, YTPlayer.videoData)
          }

          if (!data.items[0]) {
            YTPlayer.videoData = {}
            YTPlayer.hasData = false
          } else {
            parseYTPlayer_data(data.items[0].snippet)
            YTPlayer.hasData = true
          }

          let YTPData = jQuery.Event('YTPData')
          YTPData.prop = {}
          for (let x in YTPlayer.videoData) YTPData.prop[x] = YTPlayer.videoData[x]
          jQuery(YTPlayer).trigger(YTPData)
        })

      } else {

        setTimeout(function () {
          let YTPChanged = jQuery.Event('YTPChanged')
          YTPChanged.time = YTPlayer.currentTime
          YTPChanged.videoId = YTPlayer.videoID
          jQuery(YTPlayer).trigger(YTPChanged)
        }, 10)
        YTPlayer.videoData = null

      }

      YTPlayer.opt.ratio = YTPlayer.opt.ratio == 'auto' ? 16 / 9 : YTPlayer.opt.ratio

      if (YTPlayer.isPlayer && !YTPlayer.opt.autoPlay) { //&& ( !jQuery.mbBrowser.mobile && !jQuery.isTablet )
        YTPlayer.loading = jQuery('<div/>').addClass('loading').html('Loading').hide()
        jQuery(YTPlayer).append(YTPlayer.loading)
        YTPlayer.loading.fadeIn()
      }
    },

    /**
     * removeStoredData
     */
    removeStoredData: function () {
      jQuery.mbStorage.remove()
    },

    /**
     * getVideoData
     * @returns {*|YTPlayer.videoData}
     */
    getVideoData: function () {
      let YTPlayer = this.get(0)
      return YTPlayer.videoData
    },

    /**
     * getVideoID
     * @returns {*|YTPlayer.videoID|boolean}
     */
    getVideoID: function () {
      let YTPlayer = this.get(0)
      return YTPlayer.videoID || false
    },

    /**
     * getPlaylistID
     * @returns {*|YTPlayer.videoID|boolean}
     */
    getPlaylistID  : function () {
      let YTPlayer = this.get(0)
      return YTPlayer.playlistID || false
    },
    /**
     * setVideoQuality
     * @param quality
     * @returns {jQuery.mbYTPlayer}
     */
    setVideoQuality: function (quality) {
      let YTPlayer = this.get(0)
      jQuery(YTPlayer).YTPPause()
      YTPlayer.opt.quality = quality
      YTPlayer.player.setPlaybackQuality(quality)
      jQuery(YTPlayer).YTPPlay()
      return this
    },

    /**
     * getVideoQuality
     * @returns {jQuery.mbYTPlayer}
     */
    getVideoQuality: function () {
      let YTPlayer = this.get(0)
      let quality = YTPlayer.player.getPlaybackQuality()
      return quality
    },

    /**
     * playlist
     * @param videos -> Array or String (videoList ID)
     * @param shuffle
     * @param callback
     * @returns {jQuery.mbYTPlayer}
     *
     * To retrieve a Youtube playlist the Youtube API key is required:
     * https://console.developers.google.com/
     * jQuery.mbYTPlayer.apiKey
     */
    playlist: function (videos, shuffle, callback) {

      let $YTPlayer = this
      let YTPlayer = $YTPlayer.get(0)

      /*
      if (typeof videos == "String" && jQuery.mbYTPlayer.apiKey != "") {
        function getVideoListFromYoutube(playListID, page) {
        page = page || '';
        let youtubeAPI = "https://www.googleapis.com/youtube/v3/playlistItems";
        jQuery.getJSON(youtubeAPI, {
          part      : "snippet,contentDetails",
          playlistId: playListID, //You have to enter the PlaylistID
          maxResults: 50,
          pageToken : page,
          key       : jQuery.mbYTPlayer.apiKey //You have to enter your own YoutubeAPIKey
        }).done(function (response) {
          CreateVideosArray(response);
          if (response.nextPageToken) {
          page = response.nextPageToken;
          getVideoListFromYoutube(plID, page, videos);
          } else {
          $YTPlayer.YTPlaylist(YTPlayer.videos, shuffle, callback)
          }
          ;
        });
        };

        function CreateVideosArray(response) {
        let k = response.items.length;
        for (let i = 0; i < k; i++) {
          YTPlayer.videos.push({
          "videoURL": response.items[i].contentDetails.videoId
          });
        }
        ;
        };

        getVideoListFromYoutube(videos);
        return this;
      }
      */

      YTPlayer.isList = true

      if (shuffle)
        videos = jQuery.shuffle(videos)

      if (!YTPlayer.videoID) {
        YTPlayer.videos = videos
        YTPlayer.videoCounter = 1
        YTPlayer.videoLength = videos.length
        jQuery(YTPlayer).data('property', videos[0])
        jQuery(YTPlayer).YTPlayer()
      }

      if (typeof callback == 'function')
        jQuery(YTPlayer).on('YTPChanged', function () {
          callback(YTPlayer)
        })

      jQuery(YTPlayer).on('YTPEnd', function () {
        jQuery(YTPlayer).YTPPlayNext()
      })
      return this
    },

    /**
     * playNext
     * @returns {jQuery.mbYTPlayer}
     */
    playNext: function () {
      let YTPlayer = this.get(0)
      YTPlayer.videoCounter++
      if (YTPlayer.videoCounter > YTPlayer.videoLength)
        YTPlayer.videoCounter = 1
      jQuery(YTPlayer).YTPPlayIndex(YTPlayer.videoCounter)
      return this
    },

    /**
     * playPrev
     * @returns {jQuery.mbYTPlayer}
     */
    playPrev: function () {
      let YTPlayer = this.get(0)
      YTPlayer.videoCounter--
      if (YTPlayer.videoCounter <= 0)
        YTPlayer.videoCounter = YTPlayer.videoLength
      jQuery(YTPlayer).YTPPlayIndex(YTPlayer.videoCounter)
      return this
    },

    /**
     * playIndex
     * @param idx
     * @returns {jQuery.mbYTPlayer}
     */
    playIndex: function (idx) {
      let YTPlayer = this.get(0)
      if (YTPlayer.checkForStartAt) {
        clearInterval(YTPlayer.checkForStartAt)
        clearInterval(YTPlayer.getState)
      }
      YTPlayer.videoCounter = idx

      if (YTPlayer.videoCounter >= YTPlayer.videoLength)
        YTPlayer.videoCounter = YTPlayer.videoLength

      let video = YTPlayer.videos[YTPlayer.videoCounter - 1]

      jQuery(YTPlayer).YTPChangeVideo(video)
      return this
    },

    /**
     * changeVideo
     * @param opt
     * @returns {jQuery.mbYTPlayer}
     */
    changeVideo: function (opt) {
      let $YTPlayer = this
      let YTPlayer = $YTPlayer.get(0)

      YTPlayer.opt.startAt = 0
      YTPlayer.opt.stopAt = 0
      YTPlayer.opt.mask = false
      YTPlayer.opt.mute = true
      YTPlayer.opt.autoPlay = true
      YTPlayer.opt.addFilters = false
      YTPlayer.opt.coverImage = false

      YTPlayer.hasData = false
      YTPlayer.hasChanged = true

      YTPlayer.player.loopTime = undefined

      if (opt)
        jQuery.extend(YTPlayer.opt, opt)

      YTPlayer.videoID = getYTPVideoID(YTPlayer.opt.videoURL).videoID

      if (YTPlayer.opt.loop && typeof YTPlayer.opt.loop == 'boolean')
        YTPlayer.opt.loop = 9999

      YTPlayer.wrapper.css({
        background: 'none'
      })

      jQuery(YTPlayer.playerEl).CSSAnimate({
        opacity: 0
      }, YTPlayer.opt.fadeOnStartTime, function () {

        jQuery.mbYTPlayer.getDataFromAPI(YTPlayer)

        $YTPlayer.YTPGetPlayer().loadVideoById({
          videoId         : YTPlayer.videoID,
          // startSeconds: YTPlayer.opt.startAt,
          // endSeconds: YTPlayer.opt.stopAt,
          suggestedQuality: YTPlayer.opt.quality
        })

        $YTPlayer.YTPPause()
        $YTPlayer.optimizeDisplay()

        if (YTPlayer.checkForStartAt) {
          clearInterval(YTPlayer.checkForStartAt)
          clearInterval(YTPlayer.getState)
        }
        $YTPlayer.YTPCheckForState()
      })

      let YTPChangeVideo = jQuery.Event('YTPChangeVideo')
      YTPChangeVideo.time = YTPlayer.currentTime
      jQuery(YTPlayer).trigger(YTPChangeVideo)

      jQuery.mbYTPlayer.applyMask(YTPlayer)

      return this
    },

    /**
     * getPlayer
     * @returns {player}
     */
    getPlayer: function () {
      let YTPlayer = this.get(0)

      if (!YTPlayer.isReady)
        return null

      return YTPlayer.player || null
    },

    /**
     * playerDestroy
     * @returns {jQuery.mbYTPlayer}
     */
    playerDestroy: function () {
      let YTPlayer = this.get(0)

      if (!YTPlayer.isReady)
        return this

      ytp.YTAPIReady = true
      ytp.backgroundIsInited = false
      YTPlayer.isInit = false
      YTPlayer.videoID = null
      YTPlayer.isReady = false
      YTPlayer.wrapper.remove()
      jQuery('#controlBar_' + YTPlayer.id).remove()
      clearInterval(YTPlayer.checkForStartAt)
      clearInterval(YTPlayer.getState)
      return this
    },

    /**
     * fullscreen
     * @param real
     * @returns {jQuery.mbYTPlayer}
     */
    fullscreen: function (real) {
      let YTPlayer = this.get(0)

      if (typeof real == 'undefined')
        real = eval(YTPlayer.opt.realFullscreen)

      let controls = jQuery('#controlBar_' + YTPlayer.id)
      let fullScreenBtn = controls.find('.mb_OnlyYT')
      let videoWrapper = YTPlayer.isPlayer ? YTPlayer.opt.containment : YTPlayer.wrapper

      if (real) {
        let fullscreenchange = jQuery.mbBrowser.mozilla ? 'mozfullscreenchange' : jQuery.mbBrowser.webkit ? 'webkitfullscreenchange' : 'fullscreenchange'
        jQuery(document).off(fullscreenchange).on(fullscreenchange, function () {
          let isFullScreen = RunPrefixMethod(document, 'IsFullScreen') || RunPrefixMethod(document, 'FullScreen')
          if (!isFullScreen) {
            YTPlayer.isAlone = false
            fullScreenBtn.html(jQuery.mbYTPlayer.controls.onlyYT)
            jQuery(YTPlayer).YTPSetVideoQuality(YTPlayer.opt.quality)
            videoWrapper.removeClass('YTPFullscreen')
            videoWrapper.CSSAnimate({
              opacity: YTPlayer.opt.opacity
            }, YTPlayer.opt.fadeOnStartTime)

            videoWrapper.css({
              zIndex: 0
            })

            if (YTPlayer.isBackground) {
              jQuery('body').after(controls)
            } else {
              YTPlayer.wrapper.before(controls)
            }
            jQuery(window).resize()
            jQuery(YTPlayer).trigger('YTPFullScreenEnd')

          } else {

            jQuery(YTPlayer).YTPSetVideoQuality('default')
            jQuery(YTPlayer).trigger('YTPFullScreenStart')

          }
        })
      }
      if (!YTPlayer.isAlone) {
        function hideMouse() {
          YTPlayer.overlay.css({
            cursor: 'none'
          })
        }

        jQuery(document).on('mousemove.YTPlayer', function (e) {
          YTPlayer.overlay.css({
            cursor: 'auto'
          })
          clearTimeout(YTPlayer.hideCursor)
          if (!jQuery(e.target).parents().is('.mb_YTPBar'))
            YTPlayer.hideCursor = setTimeout(hideMouse, 3000)
        })

        hideMouse()

        if (real) {
          videoWrapper.css({
            opacity: 0
          })
          videoWrapper.addClass('YTPFullscreen')
          launchFullscreen(videoWrapper.get(0))

          setTimeout(function () {
            videoWrapper.CSSAnimate({
              opacity: 1
            }, YTPlayer.opt.fadeOnStartTime * 2)

            videoWrapper.append(controls)
            jQuery(YTPlayer).optimizeDisplay()
            YTPlayer.player.seekTo(YTPlayer.player.getCurrentTime() + .1, true)

          }, YTPlayer.opt.fadeOnStartTime)
        } else
          videoWrapper.css({
            zIndex: 10000
          }).CSSAnimate({
            opacity: 1
          }, YTPlayer.opt.fadeOnStartTime * 2)
        fullScreenBtn.html(jQuery.mbYTPlayer.controls.showSite)
        YTPlayer.isAlone = true
      } else {
        jQuery(document).off('mousemove.YTPlayer')
        clearTimeout(YTPlayer.hideCursor)
        YTPlayer.overlay.css({
          cursor: 'auto'
        })
        if (real) {
          cancelFullscreen()
        } else {
          videoWrapper.CSSAnimate({
            opacity: YTPlayer.opt.opacity
          }, YTPlayer.opt.fadeOnStartTime)
          videoWrapper.css({
            zIndex: 0
          })
        }
        fullScreenBtn.html(jQuery.mbYTPlayer.controls.onlyYT)
        YTPlayer.isAlone = false
      }

      function RunPrefixMethod(obj, method) {
        let pfx = ['webkit', 'moz', 'ms', 'o', '']
        let p = 0,
            m, t
        while (p < pfx.length && !obj[m]) {
          m = method
          if (pfx[p] == '') {
            m = m.substr(0, 1).toLowerCase() + m.substr(1)
          }
          m = pfx[p] + m
          t = typeof obj[m]
          if (t != 'undefined') {
            pfx = [pfx[p]]
            return (t == 'function' ? obj[m]() : obj[m])
          }
          p++
        }
      }

      function launchFullscreen(element) {
        RunPrefixMethod(element, 'RequestFullScreen')
      }

      function cancelFullscreen() {
        if (RunPrefixMethod(document, 'FullScreen') || RunPrefixMethod(document, 'IsFullScreen')) {
          RunPrefixMethod(document, 'CancelFullScreen')
        }
      }

      return this
    },

    /**
     * toggleLoops
     * @returns {jQuery.mbYTPlayer}
     */
    toggleLoops: function () {
      let YTPlayer = this.get(0)
      let data = YTPlayer.opt
      if (data.loop == 1) {
        data.loop = 0
      } else {
        if (data.startAt) {
          YTPlayer.player.seekTo(data.startAt)
        } else {
          YTPlayer.player.playVideo()
        }
        data.loop = 1
      }
      return this
    },

    /**
     * play
     * @returns {jQuery.mbYTPlayer}
     */
    play: function () {
      let YTPlayer = this.get(0)
      let $YTPlayer = jQuery(YTPlayer)

      if (!YTPlayer.isReady)
        return this

      setTimeout(function () {
        $YTPlayer.YTPSetAbundance(YTPlayer.opt.abundance)
      }, 300)

      YTPlayer.player.playVideo()

      jQuery(YTPlayer.playerEl).css({
        opacity: 1
      })

      YTPlayer.wrapper.css({
        backgroundImage: 'none'
      })

      YTPlayer.wrapper.CSSAnimate({
        opacity: YTPlayer.isAlone ? 1 : YTPlayer.opt.opacity
      }, YTPlayer.opt.fadeOnStartTime)

      let controls = jQuery('#controlBar_' + YTPlayer.id)
      let playBtn = controls.find('.mb_YTPPlayPause')
      playBtn.html(jQuery.mbYTPlayer.controls.pause)
      YTPlayer.state = 1

      return this
    },

    /**
     * togglePlay
     * @param callback
     * @returns {jQuery.mbYTPlayer}
     */
    togglePlay: function (callback) {
      let YTPlayer = this.get(0)

      if (!YTPlayer.isReady)
        return this

      if (YTPlayer.state == 1)
        this.YTPPause()
      else
        this.YTPPlay()

      if (typeof callback == 'function')
        callback(YTPlayer.state)

      return this
    },

    /**
     * stop
     * @returns {jQuery.mbYTPlayer}
     */
    stop: function () {
      let YTPlayer = this.get(0)

      if (!YTPlayer.isReady)
        return this

      let controls = jQuery('#controlBar_' + YTPlayer.id)
      let playBtn = controls.find('.mb_YTPPlayPause')
      playBtn.html(jQuery.mbYTPlayer.controls.play)
      YTPlayer.player.stopVideo()
      return this
    },

    /**
     * pause
     * @returns {jQuery.mbYTPlayer}
     */
    pause: function () {
      let YTPlayer = this.get(0)

      if (!YTPlayer.isReady)
        return this

      if (YTPlayer.opt.abundance < .2)
        this.YTPSetAbundance(.2)

      YTPlayer.player.pauseVideo()
      YTPlayer.state = 2
      return this
    },

    /**
     * seekTo
     * @param sec
     * @returns {jQuery.mbYTPlayer}
     */
    seekTo: function (sec) {
      let YTPlayer = this.get(0)

      if (!YTPlayer.isReady)
        return this

      YTPlayer.player.seekTo(sec, true)
      return this
    },

    /**
     * getPlaybackRate
     * @returns {PlaybackRate(}
     */
    getPlaybackRate: function () {
      let YTPlayer = this.get(0)

      if (!YTPlayer.isReady)
        return this

      return YTPlayer.player.getPlaybackRate()
    },

    /**
     * setPlaybackRate
     * @param suggestedRate:Number
     * 0.25, 0.5, 1, 1.5, 2
     * @returns {jQuery.mbYTPlayer}
     */
    setPlaybackRate: function (val) {
      let YTPlayer = this.get(0)

      if (!YTPlayer.isReady)
        return this

      YTPlayer.player.setPlaybackRate(val)
      return this
    },

    /**
     * setVolume
     * @param val
     * @returns {jQuery.mbYTPlayer}
     */
    setVolume: function (val) {
      let YTPlayer = this.get(0)

      if (!YTPlayer.isReady)
        return this

      YTPlayer.opt.vol = val
      this.YTPUnmute()
      YTPlayer.player.setVolume(YTPlayer.opt.vol)

      if (YTPlayer.volumeBar && YTPlayer.volumeBar.length)
        YTPlayer.volumeBar.updateSliderVal(val)

      return this
    },
    /**
     * getVolume
     * @returns {*}
     */
    getVolume: function () {
      let YTPlayer = this.get(0)

      if (!YTPlayer.isReady)
        return this

      return YTPlayer.player.getVolume()
    },

    /**
     * toggleVolume
     * @returns {jQuery.mbYTPlayer}
     */
    toggleVolume: function () {

      let YTPlayer = this.get(0)

      if (!YTPlayer.isReady)
        return this

      if (YTPlayer.isMute) {
        if (!jQuery.mbBrowser.mobile)
          this.YTPSetVolume(YTPlayer.opt.vol)
        this.YTPUnmute()
      } else {
        this.YTPMute()
      }
      return this
    },

    /**
     * mute
     * @returns {jQuery.mbYTPlayer}
     */
    mute: function () {
      let YTPlayer = this.get(0)

      if (!YTPlayer.isReady)
        return this

      if (YTPlayer.isMute)
        return this
      YTPlayer.player.mute()
      YTPlayer.isMute = true
      YTPlayer.player.setVolume(0)
      if (YTPlayer.volumeBar && YTPlayer.volumeBar.length && YTPlayer.volumeBar.width() > 10) {
        YTPlayer.volumeBar.updateSliderVal(0)
      }
      let controls = jQuery('#controlBar_' + YTPlayer.id)
      let muteBtn = controls.find('.mb_YTPMuteUnmute')
      muteBtn.html(jQuery.mbYTPlayer.controls.unmute)
      jQuery(YTPlayer).addClass('isMuted')
      if (YTPlayer.volumeBar && YTPlayer.volumeBar.length) YTPlayer.volumeBar.addClass('muted')
      let YTPEvent = jQuery.Event('YTPMuted')
      YTPEvent.time = YTPlayer.currentTime

      if (!YTPlayer.preventTrigger)
        jQuery(YTPlayer).trigger(YTPEvent)

      return this
    },

    /**
     * unmute
     * @returns {jQuery.mbYTPlayer}
     */
    unmute: function () {
      let YTPlayer = this.get(0)

      if (!YTPlayer.isReady)
        return this

      // console.debug("unmute::", YTPlayer.isMute,"Vol::", YTPlayer.opt.vol)

      if (!YTPlayer.isMute)
        return this

      YTPlayer.player.unMute()
      YTPlayer.isMute = false
      jQuery(YTPlayer).YTPSetVolume(YTPlayer.opt.vol)
      if (YTPlayer.volumeBar && YTPlayer.volumeBar.length)
        YTPlayer.volumeBar.updateSliderVal(YTPlayer.opt.vol > 10 ? YTPlayer.opt.vol : 10)
      let controls = jQuery('#controlBar_' + YTPlayer.id)
      let muteBtn = controls.find('.mb_YTPMuteUnmute')
      muteBtn.html(jQuery.mbYTPlayer.controls.mute)
      jQuery(YTPlayer).removeClass('isMuted')
      if (YTPlayer.volumeBar && YTPlayer.volumeBar.length)
        YTPlayer.volumeBar.removeClass('muted')
      let YTPEvent = jQuery.Event('YTPUnmuted')
      YTPEvent.time = YTPlayer.currentTime

      if (!YTPlayer.preventTrigger)
        jQuery(YTPlayer).trigger(YTPEvent)

      return this
    },

    /* FILTERS ---------------------------------------------------------------------------------------------------------*/

    /**
     * applyFilter
     * @param filter
     * @param value
     * @returns {jQuery.mbYTPlayer}
     */
    applyFilter: function (filter, value) {
      let $YTPlayer = this
      let YTPlayer = $YTPlayer.get(0)

      if (!YTPlayer.isReady)
        return this

      YTPlayer.filters[filter].value = value
      if (YTPlayer.filtersEnabled)
        $YTPlayer.YTPEnableFilters()
    },

    /**
     * applyFilters
     * @param filters
     * @returns {jQuery.mbYTPlayer}
     */
    applyFilters: function (filters) {
      let $YTPlayer = this
      let YTPlayer = $YTPlayer.get(0)

      if (!YTPlayer.isReady) {
        jQuery(YTPlayer).on('YTPReady', function () {
          $YTPlayer.YTPApplyFilters(filters)
        })
        return this
      }

      for (let key in filters) {
        $YTPlayer.YTPApplyFilter(key, filters[key])
      }

      $YTPlayer.trigger('YTPFiltersApplied')
    },

    /**
     * toggleFilter
     * @param filter
     * @param value
     * @returns {jQuery.mbYTPlayer}
     */
    toggleFilter: function (filter, value) {
      let $YTPlayer = this
      let YTPlayer = $YTPlayer.get(0)

      if (!YTPlayer.isReady)
        return this

      if (!YTPlayer.filters[filter].value)
        YTPlayer.filters[filter].value = value
      else
        YTPlayer.filters[filter].value = 0

      if (YTPlayer.filtersEnabled)
        jQuery(YTPlayer).YTPEnableFilters()

      return this
    },

    /**
     * toggleFilters
     * @param callback
     * @returns {jQuery.mbYTPlayer}
     */
    toggleFilters: function (callback) {
      let $YTPlayer = this
      let YTPlayer = $YTPlayer.get(0)

      if (!YTPlayer.isReady)
        return this

      if (YTPlayer.filtersEnabled) {
        jQuery(YTPlayer).trigger('YTPDisableFilters')
        jQuery(YTPlayer).YTPDisableFilters()
      } else {
        jQuery(YTPlayer).YTPEnableFilters()
        jQuery(YTPlayer).trigger('YTPEnableFilters')
      }
      if (typeof callback == 'function')
        callback(YTPlayer.filtersEnabled)

      return this
    },

    /**
     * disableFilters
     * @returns {jQuery.mbYTPlayer}
     */
    disableFilters: function () {
      let $YTPlayer = this
      let YTPlayer = $YTPlayer.get(0)

      if (!YTPlayer.isReady)
        return this

      let iframe = jQuery(YTPlayer.playerEl)
      iframe.css('-webkit-filter', '')
      iframe.css('filter', '')
      YTPlayer.filtersEnabled = false

      return this
    },

    /**
     * enableFilters
     * @returns {jQuery.mbYTPlayer}
     */
    enableFilters: function () {
      let $YTPlayer = this
      let YTPlayer = $YTPlayer.get(0)

      if (!YTPlayer.isReady)
        return this

      let iframe = jQuery(YTPlayer.playerEl)
      let filterStyle = ''
      for (let key in YTPlayer.filters) {
        if (YTPlayer.filters[key].value)
          filterStyle += key.replace('_', '-') + '(' + YTPlayer.filters[key].value + YTPlayer.filters[key].unit + ') '
      }
      iframe.css('-webkit-filter', filterStyle)
      iframe.css('filter', filterStyle)
      YTPlayer.filtersEnabled = true

      return this
    },

    /**
     * removeFilter
     * @param filter
     * @param callback
     * @returns {jQuery.mbYTPlayer}
     */
    removeFilter: function (filter, callback) {
      let $YTPlayer = this
      let YTPlayer = $YTPlayer.get(0)

      if (!YTPlayer.isReady)
        return this

      if (typeof filter == 'function') {
        callback = filter
        filter = null
      }

      if (!filter) {
        for (let key in YTPlayer.filters) {
          $YTPlayer.YTPApplyFilter(key, 0)
        }

        if (typeof callback == 'function')
          callback(key)

        YTPlayer.filters = jQuery.extend(true, {}, jQuery.mbYTPlayer.defaultFilters)

      } else {
        $YTPlayer.YTPApplyFilter(filter, 0)
        if (typeof callback == 'function') callback(filter)
      }

      let YTPEvent = jQuery.Event('YTPFiltersApplied')
      $YTPlayer.trigger(YTPEvent)

      return this
    },

    /**
     * getFilters
     * @returns {filters}
     */
    getFilters: function () {
      let YTPlayer = this.get(0)

      if (!YTPlayer.isReady)
        return this

      return YTPlayer.filters
    },

    /* MASK ---------------------------------------------------------------------------------------------------------*/

    /**
     * addMask
     * @param mask
     * @returns {jQuery.mbYTPlayer}
     */
    addMask: function (mask) {
      let YTPlayer = this.get(0)

      /*
          if (!YTPlayer.isReady)
          return this;
      */

      if (!mask)
        mask = YTPlayer.actualMask

      let tempImg = jQuery('<img/>').attr('src', mask).on('load', function () {
        YTPlayer.overlay.CSSAnimate({
          opacity: 0
        }, YTPlayer.opt.fadeOnStartTime, function () {
          YTPlayer.hasMask = true
          tempImg.remove()
          YTPlayer.overlay.css({
            backgroundImage   : 'url(' + mask + ')',
            backgroundRepeat  : 'no-repeat',
            backgroundPosition: 'center center',
            backgroundSize    : 'cover'
          })
          YTPlayer.overlay.CSSAnimate({
            opacity: 1
          }, YTPlayer.opt.fadeOnStartTime)
        })
      })

      return this
    },

    /**
     * removeMask
     * @returns {jQuery.mbYTPlayer}
     */
    removeMask: function () {
      let YTPlayer = this.get(0)

      /*
          if (!YTPlayer.isReady)
          return this;
      */

      YTPlayer.overlay.CSSAnimate({
        opacity: 0
      }, YTPlayer.opt.fadeOnStartTime, function () {
        YTPlayer.hasMask = false
        YTPlayer.overlay.css({
          backgroundImage   : '',
          backgroundRepeat  : '',
          backgroundPosition: '',
          backgroundSize    : ''
        })
        YTPlayer.overlay.CSSAnimate({
          opacity: 1
        }, YTPlayer.opt.fadeOnStartTime)
      })

      return this
    },

    /**
     * Apply mask
     * @param YTPlayer
     */
    applyMask: function (YTPlayer) {
      let $YTPlayer = jQuery(YTPlayer)

      /*
          if (!YTPlayer.isReady)
          return this;
      */

      $YTPlayer.off('YTPTime.mask')

      if (YTPlayer.opt.mask) {
        if (typeof YTPlayer.opt.mask == 'string') {

          $YTPlayer.YTPAddMask(YTPlayer.opt.mask)
          YTPlayer.actualMask = YTPlayer.opt.mask

        } else if (typeof YTPlayer.opt.mask == 'object') {

          //console.debug(YTPlayer.opt.mask)

          for (let time in YTPlayer.opt.mask) {

            if (YTPlayer.opt.mask[time])
              img = jQuery('<img/>').attr('src', YTPlayer.opt.mask[time])

          }

          if (YTPlayer.opt.mask[0])
            $YTPlayer.YTPAddMask(YTPlayer.opt.mask[0])

          $YTPlayer.on('YTPTime.mask', function (e) {

            for (let time in YTPlayer.opt.mask) {
              if (e.time == time)
                if (!YTPlayer.opt.mask[time]) {
                  $YTPlayer.YTPRemoveMask()
                } else {
                  $YTPlayer.YTPAddMask(YTPlayer.opt.mask[time])
                  YTPlayer.actualMask = YTPlayer.opt.mask[time]
                }
            }
          })
        }
      }
    },

    /**
     * toggleMask
     * @returns {jQuery.mbYTPlayer}
     */
    toggleMask: function () {
      let YTPlayer = this.get(0)

      /*
          if (!YTPlayer.isReady)
          return this;
      */

      let $YTPlayer = jQuery(YTPlayer)
      if (YTPlayer.hasMask)
        $YTPlayer.YTPRemoveMask()
      else
        $YTPlayer.YTPAddMask()
      return this
    },

    /* CONTROLS --------------------------------------------------------------------------------------------------------*/

    /**
     * manageProgress
     * @returns {{totalTime: number, currentTime: number}}
     */
    manageProgress: function () {
      let YTPlayer = this.get(0)
      let controls = jQuery('#controlBar_' + YTPlayer.id)
      let progressBar = controls.find('.mb_YTPProgress')
      let loadedBar = controls.find('.mb_YTPLoaded')
      let timeBar = controls.find('.mb_YTPseekbar')
      let totW = progressBar.outerWidth()
      let currentTime = Math.floor(YTPlayer.player.getCurrentTime())
      let totalTime = Math.floor(YTPlayer.player.getDuration())
      let timeW = (currentTime * totW) / totalTime
      let startLeft = 0
      let loadedW = YTPlayer.player.getVideoLoadedFraction() * 100
      loadedBar.css({
        left : startLeft,
        width: loadedW + '%'
      })
      timeBar.css({
        left : 0,
        width: timeW
      })
      return {
        totalTime  : totalTime,
        currentTime: currentTime
      }
    },

    /**
     * buildControls
     * @param YTPlayer
     */
    buildControls: function (YTPlayer) {

      jQuery('#controlBar_' + YTPlayer.id).remove()
      if (!YTPlayer.opt.showControls) {
        YTPlayer.controlBar = false
        return
      }

      // @YTPlayer.opt.printUrl: is deprecated; use YTPlayer.opt.showYTLogo
      YTPlayer.opt.showYTLogo = YTPlayer.opt.showYTLogo || YTPlayer.opt.printUrl
      if (jQuery('#controlBar_' + YTPlayer.id).length)
        return
      YTPlayer.controlBar = jQuery('<div/>').attr('id', 'controlBar_' + YTPlayer.id).addClass('mb_YTPBar').css({
        whiteSpace: 'noWrap',
        position  : YTPlayer.isBackground ? 'fixed' : 'absolute',
        zIndex    : YTPlayer.isBackground ? 10000 : 1000
      }).hide().on('click', function (e) {
        e.stopPropagation()
      })
      let buttonBar = jQuery('<div/>').addClass('buttonBar')
      /**
       *  play/pause button
       * */
      let playpause = jQuery('<span>' + jQuery.mbYTPlayer.controls.play + '</span>').addClass('mb_YTPPlayPause ytpicon').on('click', function (e) {
        e.stopPropagation()
        jQuery(YTPlayer).YTPTogglePlay()
      })
      /**
       *  mute/unmute button
       * */
      let MuteUnmute = jQuery('<span>' + jQuery.mbYTPlayer.controls.mute + '</span>').addClass('mb_YTPMuteUnmute ytpicon').on('click', function (e) {
        e.stopPropagation()
        jQuery(YTPlayer).YTPToggleVolume()
      })
      /**
       *  volume bar
       * */
      let volumeBar = jQuery('<div/>').addClass('mb_YTPVolumeBar').css({
        display: 'inline-block'
      })
      YTPlayer.volumeBar = volumeBar

      /**
       * time elapsed
       * */
      let idx = jQuery('<span/>').addClass('mb_YTPTime')
      let vURL = YTPlayer.opt.videoURL ? YTPlayer.opt.videoURL : ''
      if (vURL.indexOf('http') < 0) vURL = 'https://www.youtube.com/watch?v=' + YTPlayer.opt.videoURL
      let movieUrl = jQuery('<span/>').html(jQuery.mbYTPlayer.controls.ytLogo).addClass('mb_YTPUrl ytpicon').attr('title', 'view on YouTube').on('click', function () {
        window.open(vURL, 'viewOnYT')
      })
      let onlyVideo = jQuery('<span/>').html(jQuery.mbYTPlayer.controls.onlyYT).addClass('mb_OnlyYT ytpicon').on('click', function (e) {
        e.stopPropagation()
        jQuery(YTPlayer).YTPFullscreen(YTPlayer.opt.realFullscreen)
      })
      let progressBar = jQuery('<div/>').addClass('mb_YTPProgress').css('position', 'absolute').on('click', function (e) {
        e.stopPropagation()
        timeBar.css({
          width: (e.clientX - timeBar.offset().left)
        })
        YTPlayer.timeW = e.clientX - timeBar.offset().left
        YTPlayer.controlBar.find('.mb_YTPLoaded').css({
          width: 0
        })
        let totalTime = Math.floor(YTPlayer.player.getDuration())
        YTPlayer.goto = (timeBar.outerWidth() * totalTime) / progressBar.outerWidth()
        YTPlayer.player.seekTo(parseFloat(YTPlayer.goto), true)
        YTPlayer.controlBar.find('.mb_YTPLoaded').css({
          width: 0
        })
      })
      let loadedBar = jQuery('<div/>').addClass('mb_YTPLoaded').css('position', 'absolute')
      let timeBar = jQuery('<div/>').addClass('mb_YTPseekbar').css('position', 'absolute')
      progressBar.append(loadedBar).append(timeBar)
      buttonBar.append(playpause).append(MuteUnmute).append(volumeBar).append(idx)

      if (YTPlayer.opt.showYTLogo) {
        buttonBar.append(movieUrl)
      }

      /**
       * Full screen button
       */
      if (YTPlayer.isBackground || (eval(YTPlayer.opt.realFullscreen) && !YTPlayer.isBackground))
        buttonBar.append(onlyVideo)

      YTPlayer.controlBar.append(buttonBar).append(progressBar)

      if (!YTPlayer.isBackground) {
        YTPlayer.controlBar.addClass('inlinePlayer')
        YTPlayer.wrapper.before(YTPlayer.controlBar)
      } else {
        jQuery('body').after(YTPlayer.controlBar)
      }

      /**
       * Volume slider
       */
      volumeBar.simpleSlider({
        initialval : YTPlayer.opt.vol,
        scale      : 100,
        orientation: 'h',
        callback   : function (el) {

          if (el.value == 0) {
            jQuery(YTPlayer).YTPMute()
          } else {
            jQuery(YTPlayer).YTPUnmute()
          }
          YTPlayer.player.setVolume(el.value)
          if (!YTPlayer.isMute)
            YTPlayer.opt.vol = el.value

          // console.debug(jQuery(YTPlayer).YTPGetVolume())
        }

      })
    },

    /* MANAGE PLAYER STATE ------------------------------------------------------------------------------------------*/

    /**
     * checkForState
     */
    checkForState: function () {
      let YTPlayer = this.get(0)
      let $YTPlayer = jQuery(YTPlayer)

      clearInterval(YTPlayer.getState)
      let interval = 100
      //Checking if player has been removed from the scene
      if (!jQuery.contains(document, YTPlayer)) {
        $YTPlayer.YTPPlayerDestroy()
        clearInterval(YTPlayer.getState)
        clearInterval(YTPlayer.checkForStartAt)
        return
      }

      jQuery.mbYTPlayer.checkForStart(YTPlayer)

      YTPlayer.getState = setInterval(function () {
        let $YTPlayer = jQuery(YTPlayer)

        if (!YTPlayer.isReady)
          return

        let prog = jQuery(YTPlayer).YTPManageProgress()

        let stopAt = YTPlayer.opt.stopAt > YTPlayer.opt.startAt ? YTPlayer.opt.stopAt : 0
        stopAt = stopAt < YTPlayer.player.getDuration() ? stopAt : 0

        if (YTPlayer.currentTime != prog.currentTime) {
          let YTPEvent = jQuery.Event('YTPTime')
          YTPEvent.time = YTPlayer.currentTime
          jQuery(YTPlayer).trigger(YTPEvent)
        }

        YTPlayer.currentTime = prog.currentTime
        YTPlayer.totalTime = YTPlayer.player.getDuration()
        if (YTPlayer.player.getVolume() == 0) $YTPlayer.addClass('isMuted')
        else $YTPlayer.removeClass('isMuted')

        if (YTPlayer.opt.showControls)
          if (prog.totalTime) {
            YTPlayer.controlBar.find('.mb_YTPTime').html(jQuery.mbYTPlayer.formatTime(prog.currentTime) + ' / ' + jQuery.mbYTPlayer.formatTime(prog.totalTime))
          } else {
            YTPlayer.controlBar.find('.mb_YTPTime').html('-- : -- / -- : --')
          }

        /**
         * Manage video pause on window blur
         */
        if (eval(YTPlayer.opt.stopMovieOnBlur)) {
          if (!document.hasFocus()) {
            if (YTPlayer.state == 1) {
              YTPlayer.hasFocus = false
              YTPlayer.preventTrigger = true
              $YTPlayer.YTPPause()
            }
          } else if (document.hasFocus() && !YTPlayer.hasFocus && !(YTPlayer.state == -1 || YTPlayer.state == 0)) {
            YTPlayer.hasFocus = true
            YTPlayer.preventTrigger = true
            $YTPlayer.YTPPlay()
          }
        }

        /**
         * Manage video pause if not on screen
         */
        if (YTPlayer.opt.playOnlyIfVisible) {
          let isOnScreen = jQuery.mbYTPlayer.isOnScreen(YTPlayer, YTPlayer.opt.onScreenPercentage)
          if (!isOnScreen && YTPlayer.state == 1) {
            YTPlayer.isOnScreen = false
            $YTPlayer.YTPPause()
          } else if (isOnScreen && !YTPlayer.isOnScreen) {
            YTPlayer.isOnScreen = true
            YTPlayer.player.playVideo()
          }
        }

        if (YTPlayer.controlBar.length && YTPlayer.controlBar.outerWidth() <= 400 && !YTPlayer.isCompact) {
          YTPlayer.controlBar.addClass('compact')
          YTPlayer.isCompact = true
          if (!YTPlayer.isMute && YTPlayer.volumeBar) YTPlayer.volumeBar.updateSliderVal(YTPlayer.opt.vol)
        } else if (YTPlayer.controlBar.length && YTPlayer.controlBar.outerWidth() > 400 && YTPlayer.isCompact) {
          YTPlayer.controlBar.removeClass('compact')
          YTPlayer.isCompact = false

          if (!YTPlayer.isMute && YTPlayer.volumeBar)
            YTPlayer.volumeBar.updateSliderVal(YTPlayer.opt.vol)
        }
        // the video is ended
        if (YTPlayer.player.getPlayerState() > 0 && ((parseFloat(YTPlayer.player.getDuration() - (YTPlayer.opt.fadeOnStartTime / 1000)) < YTPlayer.player.getCurrentTime()) || (stopAt > 0 && parseFloat(YTPlayer.player.getCurrentTime()) >= stopAt))) {

          if (YTPlayer.isEnded)
            return

          YTPlayer.isEnded = true

          setTimeout(function () {
            YTPlayer.isEnded = false
          }, 1000)

          if (YTPlayer.isList) {
            if (!YTPlayer.opt.loop || (YTPlayer.opt.loop > 0 && YTPlayer.player.loopTime === YTPlayer.opt.loop - 1)) {
              YTPlayer.player.loopTime = undefined
              clearInterval(YTPlayer.getState)
              let YTPEnd = jQuery.Event('YTPEnd')
              YTPEnd.time = YTPlayer.currentTime
              jQuery(YTPlayer).trigger(YTPEnd)
              return
            }
          } else if (!YTPlayer.opt.loop || (YTPlayer.opt.loop > 0 && YTPlayer.player.loopTime === YTPlayer.opt.loop - 1)) {
            YTPlayer.player.loopTime = undefined

            YTPlayer.state = 2

            if (YTPlayer.opt.coverImage || YTPlayer.orig_containment_background) {
              let bgndURL = YTPlayer.opt.coverImage ? 'url(' + YTPlayer.opt.coverImage + ') center center' : YTPlayer.orig_containment_background
              if (bgndURL)
                YTPlayer.opt.containment.css({
                  background      : bgndURL,
                  backgroundSize  : 'cover',
                  backgroundRepeat: 'no-repeat'
                })
            }

            jQuery(YTPlayer).YTPPause()
            YTPlayer.wrapper.CSSAnimate({
              opacity: 0
            }, YTPlayer.opt.fadeOnStartTime, function () {

              if (YTPlayer.controlBar.length)
                YTPlayer.controlBar.find('.mb_YTPPlayPause').html(jQuery.mbYTPlayer.controls.play)

              let YTPEnd = jQuery.Event('YTPEnd')
              YTPEnd.time = YTPlayer.currentTime
              jQuery(YTPlayer).trigger(YTPEnd)
              YTPlayer.player.seekTo(YTPlayer.opt.startAt, true)

              if (YTPlayer.opt.coverImage || YTPlayer.orig_containment_background) {
                let bgndURL = YTPlayer.opt.coverImage ? 'url(' + YTPlayer.opt.coverImage + ') center center' : YTPlayer.orig_containment_background
                if (bgndURL)
                  YTPlayer.opt.containment.css({
                    background      : bgndURL,
                    backgroundSize  : 'cover',
                    backgroundRepeat: 'no-repeat'
                  })
              }

            })
            return
          }

          YTPlayer.player.loopTime = YTPlayer.player.loopTime ? ++YTPlayer.player.loopTime : 1
          YTPlayer.opt.startAt = YTPlayer.opt.startAt || 1
          YTPlayer.preventTrigger = true
          YTPlayer.state = 2
          //YTPlayer.player.pauseVideo();
          YTPlayer.player.seekTo(YTPlayer.opt.startAt, true)
          //YTPlayer.player.playVideo();
        }
      }, interval)
    },

    /**
     * checkForStart
     * @param YTPlayer
     */
    checkForStart: function (YTPlayer) {
      let $YTPlayer = jQuery(YTPlayer)

      /* If the player has been removed from scene destroy it */
      if (!jQuery.contains(document, YTPlayer)) {
        $YTPlayer.YTPPlayerDestroy()
        return
      }

      /* CREATE CONTROL BAR */
      jQuery.mbYTPlayer.buildControls(YTPlayer)

      if (YTPlayer.overlay)
        if (YTPlayer.opt.addRaster) {
          let classN = YTPlayer.opt.addRaster == 'dot' ? 'raster-dot' : 'raster'
          YTPlayer.overlay.addClass(YTPlayer.isRetina ? classN + ' retina' : classN)
        } else {
          YTPlayer.overlay.removeClass(function (index, classNames) {
            // change the list into an array
            let current_classes = classNames.split(' '),
                // array of classes which are to be removed
                classes_to_remove = []
            jQuery.each(current_classes, function (index, class_name) {
              // if the classname begins with bg add it to the classes_to_remove array
              if (/raster.*/.test(class_name)) {
                classes_to_remove.push(class_name)
              }
            })
            classes_to_remove.push('retina')
            // turn the array back into a string
            return classes_to_remove.join(' ')
          })
        }

      YTPlayer.preventTrigger = true
      YTPlayer.state = 2
      YTPlayer.preventTrigger = true

      YTPlayer.player.mute()
      YTPlayer.player.playVideo()
      YTPlayer.isStarting = true

      let startAt = YTPlayer.start_from_last ? YTPlayer.start_from_last : YTPlayer.opt.startAt ? YTPlayer.opt.startAt : 1

      YTPlayer.preventTrigger = true
      YTPlayer.checkForStartAt = setInterval(function () {

        YTPlayer.player.mute()
        YTPlayer.player.seekTo(startAt, true)

        let canPlayVideo = YTPlayer.player.getVideoLoadedFraction() >= startAt / YTPlayer.player.getDuration()
        if (YTPlayer.player.getDuration() > 0 && YTPlayer.player.getCurrentTime() >= startAt && canPlayVideo) {
          YTPlayer.start_from_last = null

          YTPlayer.preventTrigger = true
          $YTPlayer.YTPPause()

          clearInterval(YTPlayer.checkForStartAt)

          if (typeof YTPlayer.opt.onReady == 'function')
            YTPlayer.opt.onReady(YTPlayer)

          YTPlayer.isReady = true

          $YTPlayer.YTPRemoveFilter()

          if (YTPlayer.opt.addFilters) {
            $YTPlayer.YTPApplyFilters(YTPlayer.opt.addFilters)
          } else {
            $YTPlayer.YTPApplyFilters()
          }
          $YTPlayer.YTPEnableFilters()
          let YTPready = jQuery.Event('YTPReady')
          YTPready.time = YTPlayer.currentTime
          $YTPlayer.trigger(YTPready)

          YTPlayer.state = 2

          if (!YTPlayer.opt.mute) {

            if (YTPlayer.opt.autoPlay) {
              console.debug('To make the video \'auto-play\' you must mute the audio according with the latest vendor policy')
              YTPlayer.player.mute()
            }

            YTPlayer.player.unMute()

          } else {
            $YTPlayer.YTPMute()
          }

          if (typeof _gaq != 'undefined' && eval(YTPlayer.opt.gaTrack))
            _gaq.push(['_trackEvent', 'YTPlayer', 'Play', (YTPlayer.hasData ? YTPlayer.videoData.title : YTPlayer.videoID.toString())])
          else if (typeof ga != 'undefined' && eval(YTPlayer.opt.gaTrack))
            ga('send', 'event', 'YTPlayer', 'play', (YTPlayer.hasData ? YTPlayer.videoData.title : YTPlayer.videoID.toString()))

          if (YTPlayer.opt.autoPlay) {

            let YTPStart = jQuery.Event('YTPStart')
            YTPStart.time = YTPlayer.currentTime
            jQuery(YTPlayer).trigger(YTPStart)

            YTPlayer.isStarting = false

            /* Fix for Safari freeze */
            if (jQuery.mbBrowser.os.name == 'mac' && jQuery.mbBrowser.safari) {
              jQuery('body').one('mousedown.YTPstart', function () {
                $YTPlayer.YTPPlay()
              })
            }
            $YTPlayer.YTPPlay()
            console.timeEnd('YTPlayerStartPlay')

          } else {

            YTPlayer.preventTrigger = true
            $YTPlayer.YTPPause()

            if (YTPlayer.start_from_last)
              YTPlayer.player.seekTo(startAt, true)

            setTimeout(function () {
              YTPlayer.preventTrigger = true
              $YTPlayer.YTPPause()

              if (!YTPlayer.isPlayer) {
                if (!YTPlayer.opt.coverImage) {
                  jQuery(YTPlayer.playerEl).CSSAnimate({
                    opacity: 1
                  }, YTPlayer.opt.fadeOnStartTime)
                  YTPlayer.wrapper.CSSAnimate({
                    opacity: YTPlayer.isAlone ? 1 : YTPlayer.opt.opacity
                  }, YTPlayer.opt.fadeOnStartTime)
                } else {
                  YTPlayer.wrapper.css({opacity: 0})
                  setTimeout(function () {
                    if (YTPlayer.opt.coverImage || YTPlayer.orig_containment_background) {
                      let bgndURL = YTPlayer.opt.coverImage ? 'url(' + YTPlayer.opt.coverImage + ') center center' : YTPlayer.orig_containment_background
                      if (bgndURL)
                        YTPlayer.wrapper.css({
                          background      : bgndURL,
                          backgroundSize  : 'cover',
                          backgroundRepeat: 'no-repeat'
                        })
                    }
                  }, YTPlayer.opt.fadeOnStartTime)
                }
              }
              YTPlayer.isStarting = false
            }, 500)

            if (YTPlayer.controlBar.length)
              YTPlayer.controlBar.find('.mb_YTPPlayPause').html(jQuery.mbYTPlayer.controls.play)
          }

          if (YTPlayer.isPlayer && !YTPlayer.opt.autoPlay && (YTPlayer.loading && YTPlayer.loading.length)) {
            YTPlayer.loading.html('Ready')
            setTimeout(function () {
              YTPlayer.loading.fadeOut()
            }, 100)
          }

          if (YTPlayer.controlBar && YTPlayer.controlBar.length)
            YTPlayer.controlBar.slideDown(1000)
        }

        if (jQuery.mbBrowser.os.name == 'mac' && jQuery.mbBrowser.safari) {
          YTPlayer.player.playVideo()
          if (startAt >= 0)
            YTPlayer.player.seekTo(startAt, true)
        }

      }, 100)

      return $YTPlayer
    },

    /* TIME METHODS -------------------------------------------------------------------------------------------*/

    /**
     * getTime
     * @returns {string} time
     */
    getTime: function () {
      let YTPlayer = this.get(0)
      return jQuery.mbYTPlayer.formatTime(YTPlayer.currentTime)
    },

    /**
     * getTotalTime
     * @returns {string} total time
     */
    getTotalTime: function (format) {
      let YTPlayer = this.get(0)
      return jQuery.mbYTPlayer.formatTime(YTPlayer.totalTime)
    },

    /**
     * formatTime
     * @param s
     * @returns {string}
     */
    formatTime: function (s) {
      let min = Math.floor(s / 60)
      let sec = Math.floor(s - (60 * min))
      return (min <= 9 ? '0' + min : min) + ' : ' + (sec <= 9 ? '0' + sec : sec)
    },

    /* PLAYER POSITION AND SIZE OPTIMIZATION-------------------------------------------------------------------------------------------*/

    /**
     * setAnchor
     * @param anchor
     */
    setAnchor: function (anchor) {
      let $YTplayer = this
      $YTplayer.optimizeDisplay(anchor)
    },

    /**
     * getAnchor
     * @param anchor
     */
    getAnchor: function () {
      let YTPlayer = this.get(0)
      return YTPlayer.opt.anchor
    },

    /**
     * setAbundance
     * @param val
     * @returns {jQuery.mbYTPlayer}
     */
    setAbundance: function (val, updateOptions) {
      let YTPlayer = this.get(0)
      let $YTPlayer = this
      if (updateOptions)
        YTPlayer.opt.abundance = val
      $YTPlayer.optimizeDisplay(YTPlayer.opt.anchor, val)
      return $YTPlayer
    },

    /**
     * getAbundance
     * @returns {*}
     */
    getAbundance: function () {
      let YTPlayer = this.get(0)
      return YTPlayer.opt.abundance
    },

    /**
     *
     * @param opt
     * @param val
     * @returns {jQuery.mbYTPlayer}
     */
    setOption: function (opt, val) {
      let YTPlayer = this.get(0)
      let $YTPlayer = this
      YTPlayer.opt[opt] = val
      return $YTPlayer
    }
  }


  /**
   * optimizeDisplay
   * @param anchor
   * can be center, top, bottom, right, left; (default is center,center)
   */
  jQuery.fn.optimizeDisplay = function (anchor, abundanceX) {
    let YTPlayer = this.get(0)
    let vid = {}
    let el = YTPlayer.wrapper
    let iframe = jQuery(YTPlayer.playerEl)

    YTPlayer.opt.anchor = anchor || YTPlayer.opt.anchor

    // console.debug(YTPlayer.opt.anchor);

    YTPlayer.opt.anchor = typeof YTPlayer.opt.anchor != 'undefined ' ? YTPlayer.opt.anchor : 'center,center'
    let YTPAlign = YTPlayer.opt.anchor.split(',')
    let ab = abundanceX ? abundanceX : YTPlayer.opt.abundance

    if (YTPlayer.opt.optimizeDisplay) {
      let abundance = el.height() * ab
      let win = {}
      win.width = el.outerWidth()
      win.height = el.outerHeight() + abundance

      YTPlayer.opt.ratio = YTPlayer.opt.ratio === 'auto' ? 16 / 9 : YTPlayer.opt.ratio
      YTPlayer.opt.ratio = eval(YTPlayer.opt.ratio)

      vid.width = win.width + abundance
      vid.height = Math.ceil(vid.width / YTPlayer.opt.ratio)
      vid.marginTop = Math.ceil(-((vid.height - win.height + abundance) / 2))
      vid.marginLeft = -(abundance / 2)
      let lowest = vid.height < win.height

      if (lowest) {
        vid.height = win.height + abundance
        vid.width = Math.ceil(vid.height * YTPlayer.opt.ratio)
        vid.marginTop = -(abundance / 2)
        vid.marginLeft = Math.ceil(-((vid.width - win.width) / 2))
      }

      for (let a in YTPAlign) {
        if (YTPAlign.hasOwnProperty(a)) {
          let al = YTPAlign[a].replace(/ /g, '')

          switch (al) {
            case 'top':
              vid.marginTop = -abundance
              break
            case 'bottom':
              vid.marginTop = Math.ceil(-(vid.height - win.height) - (abundance / 2))
              break
            case 'left':
              vid.marginLeft = -(abundance)
              break
            case 'right':
              vid.marginLeft = Math.ceil(-(vid.width - win.width) + (abundance / 2))
              break
          }

        }
      }

    } else {
      vid.width = '100%'
      vid.height = '100%'
      vid.marginTop = 0
      vid.marginLeft = 0
    }

    iframe.css({
      width     : vid.width,
      height    : vid.height,
      marginTop : vid.marginTop,
      marginLeft: vid.marginLeft,
      maxWidth  : 'initial'
    })


  }


  /* UTILITIES -----------------------------------------------------------------------------------------------------------------------*/

  /**
   * shuffle
   * @param arr
   * @returns {Array|string|Blob|*}
   *
   */
  jQuery.shuffle = function (arr) {
    let newArray = arr.slice()
    let len = newArray.length
    let i = len
    while (i--) {
      let p = parseInt(Math.random() * len)
      let t = newArray[i]
      newArray[i] = newArray[p]
      newArray[p] = t
    }
    return newArray
  }

  /**
   * Unselectable
   * @returns {*}
   */
  jQuery.fn.unselectable = function () {
    return this.each(function () {
      jQuery(this).css({
        '-moz-user-select'   : 'none',
        '-webkit-user-select': 'none',
        'user-select'        : 'none'
      }).attr('unselectable', 'on')
    })
  }

  /* EXTERNAL METHODS -----------------------------------------------------------------------------------------------------------------------*/

  jQuery.fn.YTPlayer = jQuery.mbYTPlayer.buildPlayer
  jQuery.fn.mb_YTPlayer = jQuery.mbYTPlayer.buildPlayer

  jQuery.fn.YTPCheckForState = jQuery.mbYTPlayer.checkForState

  jQuery.fn.YTPGetPlayer = jQuery.mbYTPlayer.getPlayer
  jQuery.fn.YTPGetVideoID = jQuery.mbYTPlayer.getVideoID
  jQuery.fn.YTPGetPlaylistID = jQuery.mbYTPlayer.getPlaylistID
  jQuery.fn.YTPChangeVideo = jQuery.fn.YTPChangeMovie = jQuery.mbYTPlayer.changeVideo
  jQuery.fn.YTPPlayerDestroy = jQuery.mbYTPlayer.playerDestroy

  jQuery.fn.YTPPlay = jQuery.mbYTPlayer.play
  jQuery.fn.YTPTogglePlay = jQuery.mbYTPlayer.togglePlay
  jQuery.fn.YTPStop = jQuery.mbYTPlayer.stop
  jQuery.fn.YTPPause = jQuery.mbYTPlayer.pause
  jQuery.fn.YTPSeekTo = jQuery.mbYTPlayer.seekTo

  jQuery.fn.YTPGetPlaybackRate = jQuery.mbYTPlayer.getPlaybackRate
  jQuery.fn.YTPSetPlaybackRate = jQuery.mbYTPlayer.setPlaybackRate

  jQuery.fn.YTPlaylist = jQuery.mbYTPlayer.playlist
  jQuery.fn.YTPPlayNext = jQuery.mbYTPlayer.playNext
  jQuery.fn.YTPPlayPrev = jQuery.mbYTPlayer.playPrev
  jQuery.fn.YTPPlayIndex = jQuery.mbYTPlayer.playIndex

  jQuery.fn.YTPMute = jQuery.mbYTPlayer.mute
  jQuery.fn.YTPUnmute = jQuery.mbYTPlayer.unmute
  jQuery.fn.YTPToggleVolume = jQuery.mbYTPlayer.toggleVolume
  jQuery.fn.YTPSetVolume = jQuery.mbYTPlayer.setVolume
  jQuery.fn.YTPGetVolume = jQuery.mbYTPlayer.getVolume

  jQuery.fn.YTPGetVideoData = jQuery.mbYTPlayer.getVideoData
  jQuery.fn.YTPFullscreen = jQuery.mbYTPlayer.fullscreen
  jQuery.fn.YTPToggleLoops = jQuery.mbYTPlayer.toggleLoops
  jQuery.fn.YTPManageProgress = jQuery.mbYTPlayer.manageProgress

  jQuery.fn.YTPSetVideoQuality = jQuery.mbYTPlayer.setVideoQuality
  jQuery.fn.YTPGetVideoQuality = jQuery.mbYTPlayer.getVideoQuality

  jQuery.fn.YTPApplyFilter = jQuery.mbYTPlayer.applyFilter
  jQuery.fn.YTPApplyFilters = jQuery.mbYTPlayer.applyFilters
  jQuery.fn.YTPToggleFilter = jQuery.mbYTPlayer.toggleFilter
  jQuery.fn.YTPToggleFilters = jQuery.mbYTPlayer.toggleFilters
  jQuery.fn.YTPRemoveFilter = jQuery.mbYTPlayer.removeFilter
  jQuery.fn.YTPDisableFilters = jQuery.mbYTPlayer.disableFilters
  jQuery.fn.YTPEnableFilters = jQuery.mbYTPlayer.enableFilters
  jQuery.fn.YTPGetFilters = jQuery.mbYTPlayer.getFilters

  jQuery.fn.YTPGetTime = jQuery.mbYTPlayer.getTime
  jQuery.fn.YTPGetTotalTime = jQuery.mbYTPlayer.getTotalTime

  jQuery.fn.YTPAddMask = jQuery.mbYTPlayer.addMask
  jQuery.fn.YTPRemoveMask = jQuery.mbYTPlayer.removeMask
  jQuery.fn.YTPToggleMask = jQuery.mbYTPlayer.toggleMask

  jQuery.fn.YTPGetAbundance = jQuery.mbYTPlayer.getAbundance
  jQuery.fn.YTPSetAbundance = jQuery.mbYTPlayer.setAbundance

  jQuery.fn.YTPSetAnchor = jQuery.mbYTPlayer.setAnchor
  jQuery.fn.YTPGetAnchor = jQuery.mbYTPlayer.getAnchor

  jQuery.fn.YTPSetOption = jQuery.mbYTPlayer.setOption

})(jQuery, ytp)
;/*___________________________________________________________________________________________________________________________________________________
 _ jquery.mb.components                                                                                                                             _
 _                                                                                                                                                  _
 _ file: jquery.mb.browser.min.js                                                                                                                   _
 _ last modified: 24/05/17 19.56                                                                                                                    _
 _                                                                                                                                                  _
 _ Open Lab s.r.l., Florence - Italy                                                                                                                _
 _                                                                                                                                                  _
 _ email: matbicoc@gmail.com                                                                                                                       _
 _ site: http://pupunzi.com                                                                                                                         _
 _       http://open-lab.com                                                                                                                        _
 _ blog: http://pupunzi.open-lab.com                                                                                                                _
 _ Q&A:  http://jquery.pupunzi.com                                                                                                                  _
 _                                                                                                                                                  _
 _ Licences: MIT, GPL                                                                                                                               _
 _    http://www.opensource.org/licenses/mit-license.php                                                                                            _
 _    http://www.gnu.org/licenses/gpl.html                                                                                                          _
 _                                                                                                                                                  _
 _ Copyright (c) 2001-2017. Matteo Bicocchi (Pupunzi);                                                                                              _
 ___________________________________________________________________________________________________________________________________________________*/

var nAgt=navigator.userAgent;jQuery.browser=jQuery.browser||{};jQuery.browser.mozilla=!1;jQuery.browser.webkit=!1;jQuery.browser.opera=!1;jQuery.browser.safari=!1;jQuery.browser.chrome=!1;jQuery.browser.androidStock=!1;jQuery.browser.msie=!1;jQuery.browser.edge=!1;jQuery.browser.ua=nAgt;function isTouchSupported(){var a=nAgt.msMaxTouchPoints,e="ontouchstart"in document.createElement("div");return a||e?!0:!1}
var getOS=function(){var a={version:"Unknown version",name:"Unknown OS"};-1!=navigator.appVersion.indexOf("Win")&&(a.name="Windows");-1!=navigator.appVersion.indexOf("Mac")&&0>navigator.appVersion.indexOf("Mobile")&&(a.name="Mac");-1!=navigator.appVersion.indexOf("Linux")&&(a.name="Linux");/Mac OS X/.test(nAgt)&&!/Mobile/.test(nAgt)&&(a.version=/Mac OS X (10[\.\_\d]+)/.exec(nAgt)[1],a.version=a.version.replace(/_/g,".").substring(0,5));/Windows/.test(nAgt)&&(a.version="Unknown.Unknown");/Windows NT 5.1/.test(nAgt)&&
(a.version="5.1");/Windows NT 6.0/.test(nAgt)&&(a.version="6.0");/Windows NT 6.1/.test(nAgt)&&(a.version="6.1");/Windows NT 6.2/.test(nAgt)&&(a.version="6.2");/Windows NT 10.0/.test(nAgt)&&(a.version="10.0");/Linux/.test(nAgt)&&/Linux/.test(nAgt)&&(a.version="Unknown.Unknown");a.name=a.name.toLowerCase();a.major_version="Unknown";a.minor_version="Unknown";"Unknown.Unknown"!=a.version&&(a.major_version=parseFloat(a.version.split(".")[0]),a.minor_version=parseFloat(a.version.split(".")[1]));return a};
jQuery.browser.os=getOS();jQuery.browser.hasTouch=isTouchSupported();jQuery.browser.name=navigator.appName;jQuery.browser.fullVersion=""+parseFloat(navigator.appVersion);jQuery.browser.majorVersion=parseInt(navigator.appVersion,10);var nameOffset,verOffset,ix;
if(-1!=(verOffset=nAgt.indexOf("Opera")))jQuery.browser.opera=!0,jQuery.browser.name="Opera",jQuery.browser.fullVersion=nAgt.substring(verOffset+6),-1!=(verOffset=nAgt.indexOf("Version"))&&(jQuery.browser.fullVersion=nAgt.substring(verOffset+8));else if(-1!=(verOffset=nAgt.indexOf("OPR")))jQuery.browser.opera=!0,jQuery.browser.name="Opera",jQuery.browser.fullVersion=nAgt.substring(verOffset+4);else if(-1!=(verOffset=nAgt.indexOf("MSIE")))jQuery.browser.msie=!0,jQuery.browser.name="Microsoft Internet Explorer",
    jQuery.browser.fullVersion=nAgt.substring(verOffset+5);else if(-1!=nAgt.indexOf("Trident")){jQuery.browser.msie=!0;jQuery.browser.name="Microsoft Internet Explorer";var start=nAgt.indexOf("rv:")+3,end=start+4;jQuery.browser.fullVersion=nAgt.substring(start,end)}else-1!=(verOffset=nAgt.indexOf("Edge"))?(jQuery.browser.edge=!0,jQuery.browser.name="Microsoft Edge",jQuery.browser.fullVersion=nAgt.substring(verOffset+5)):-1!=(verOffset=nAgt.indexOf("Chrome"))?(jQuery.browser.webkit=!0,jQuery.browser.chrome=
    !0,jQuery.browser.name="Chrome",jQuery.browser.fullVersion=nAgt.substring(verOffset+7)):-1<nAgt.indexOf("mozilla/5.0")&&-1<nAgt.indexOf("android ")&&-1<nAgt.indexOf("applewebkit")&&!(-1<nAgt.indexOf("chrome"))?(verOffset=nAgt.indexOf("Chrome"),jQuery.browser.webkit=!0,jQuery.browser.androidStock=!0,jQuery.browser.name="androidStock",jQuery.browser.fullVersion=nAgt.substring(verOffset+7)):-1!=(verOffset=nAgt.indexOf("Safari"))?(jQuery.browser.webkit=!0,jQuery.browser.safari=!0,jQuery.browser.name=
    "Safari",jQuery.browser.fullVersion=nAgt.substring(verOffset+7),-1!=(verOffset=nAgt.indexOf("Version"))&&(jQuery.browser.fullVersion=nAgt.substring(verOffset+8))):-1!=(verOffset=nAgt.indexOf("AppleWebkit"))?(jQuery.browser.webkit=!0,jQuery.browser.safari=!0,jQuery.browser.name="Safari",jQuery.browser.fullVersion=nAgt.substring(verOffset+7),-1!=(verOffset=nAgt.indexOf("Version"))&&(jQuery.browser.fullVersion=nAgt.substring(verOffset+8))):-1!=(verOffset=nAgt.indexOf("Firefox"))?(jQuery.browser.mozilla=
    !0,jQuery.browser.name="Firefox",jQuery.browser.fullVersion=nAgt.substring(verOffset+8)):(nameOffset=nAgt.lastIndexOf(" ")+1)<(verOffset=nAgt.lastIndexOf("/"))&&(jQuery.browser.name=nAgt.substring(nameOffset,verOffset),jQuery.browser.fullVersion=nAgt.substring(verOffset+1),jQuery.browser.name.toLowerCase()==jQuery.browser.name.toUpperCase()&&(jQuery.browser.name=navigator.appName));
-1!=(ix=jQuery.browser.fullVersion.indexOf(";"))&&(jQuery.browser.fullVersion=jQuery.browser.fullVersion.substring(0,ix));-1!=(ix=jQuery.browser.fullVersion.indexOf(" "))&&(jQuery.browser.fullVersion=jQuery.browser.fullVersion.substring(0,ix));jQuery.browser.majorVersion=parseInt(""+jQuery.browser.fullVersion,10);isNaN(jQuery.browser.majorVersion)&&(jQuery.browser.fullVersion=""+parseFloat(navigator.appVersion),jQuery.browser.majorVersion=parseInt(navigator.appVersion,10));
jQuery.browser.version=jQuery.browser.majorVersion;jQuery.browser.android=/Android/i.test(nAgt);jQuery.browser.blackberry=/BlackBerry|BB|PlayBook/i.test(nAgt);jQuery.browser.ios=/iPhone|iPad|iPod|webOS/i.test(nAgt);jQuery.browser.operaMobile=/Opera Mini/i.test(nAgt);jQuery.browser.windowsMobile=/IEMobile|Windows Phone/i.test(nAgt);jQuery.browser.kindle=/Kindle|Silk/i.test(nAgt);
jQuery.browser.mobile=jQuery.browser.android||jQuery.browser.blackberry||jQuery.browser.ios||jQuery.browser.windowsMobile||jQuery.browser.operaMobile||jQuery.browser.kindle;jQuery.isMobile=jQuery.browser.mobile;jQuery.isTablet=jQuery.browser.mobile&&765<jQuery(window).width();jQuery.isAndroidDefault=jQuery.browser.android&&!/chrome/i.test(nAgt);jQuery.mbBrowser=jQuery.browser;
jQuery.browser.versionCompare=function(a,e){if("stringstring"!=typeof a+typeof e)return!1;for(var c=a.split("."),d=e.split("."),b=0,f=Math.max(c.length,d.length);b<f;b++){if(c[b]&&!d[b]&&0<parseInt(c[b])||parseInt(c[b])>parseInt(d[b]))return 1;if(d[b]&&!c[b]&&0<parseInt(d[b])||parseInt(c[b])<parseInt(d[b]))return-1}return 0};
;
/*
 * ******************************************************************************
 *  jquery.mb.components
 *  file: jquery.mb.CSSAnimate.min.js
 *
 *  Copyright (c) 2001-2014. Matteo Bicocchi (Pupunzi);
 *  Open lab srl, Firenze - Italy
 *  email: matbicoc@gmail.com
 *  site:   http://pupunzi.com
 *  blog: http://pupunzi.open-lab.com
 *  http://open-lab.com
 *
 *  Licences: MIT, GPL
 *  http://www.opensource.org/licenses/mit-license.php
 *  http://www.gnu.org/licenses/gpl.html
 *
 *  last modified: 26/03/14 21.40
 *  *****************************************************************************
 */

jQuery.support.CSStransition=function(){var d=(document.body||document.documentElement).style;return void 0!==d.transition||void 0!==d.WebkitTransition||void 0!==d.MozTransition||void 0!==d.MsTransition||void 0!==d.OTransition}();function uncamel(d){return d.replace(/([A-Z])/g,function(a){return"-"+a.toLowerCase()})}function setUnit(d,a){return"string"!==typeof d||d.match(/^[\-0-9\.]+jQuery/)?""+d+a:d}
function setFilter(d,a,b){var c=uncamel(a),g=jQuery.browser.mozilla?"":jQuery.CSS.sfx;d[g+"filter"]=d[g+"filter"]||"";b=setUnit(b>jQuery.CSS.filters[a].max?jQuery.CSS.filters[a].max:b,jQuery.CSS.filters[a].unit);d[g+"filter"]+=c+"("+b+") ";delete d[a]}
jQuery.CSS={name:"mb.CSSAnimate",author:"Matteo Bicocchi",version:"2.0.0",transitionEnd:"transitionEnd",sfx:"",filters:{blur:{min:0,max:100,unit:"px"},brightness:{min:0,max:400,unit:"%"},contrast:{min:0,max:400,unit:"%"},grayscale:{min:0,max:100,unit:"%"},hueRotate:{min:0,max:360,unit:"deg"},invert:{min:0,max:100,unit:"%"},saturate:{min:0,max:400,unit:"%"},sepia:{min:0,max:100,unit:"%"}},normalizeCss:function(d){var a=jQuery.extend(!0,{},d);jQuery.browser.webkit||jQuery.browser.opera?jQuery.CSS.sfx=
    "-webkit-":jQuery.browser.mozilla?jQuery.CSS.sfx="-moz-":jQuery.browser.msie&&(jQuery.CSS.sfx="-ms-");jQuery.CSS.sfx="";for(var b in a){"transform"===b&&(a[jQuery.CSS.sfx+"transform"]=a[b],delete a[b]);"transform-origin"===b&&(a[jQuery.CSS.sfx+"transform-origin"]=d[b],delete a[b]);"filter"!==b||jQuery.browser.mozilla||(a[jQuery.CSS.sfx+"filter"]=d[b],delete a[b]);"blur"===b&&setFilter(a,"blur",d[b]);"brightness"===b&&setFilter(a,"brightness",d[b]);"contrast"===b&&setFilter(a,"contrast",d[b]);"grayscale"===
b&&setFilter(a,"grayscale",d[b]);"hueRotate"===b&&setFilter(a,"hueRotate",d[b]);"invert"===b&&setFilter(a,"invert",d[b]);"saturate"===b&&setFilter(a,"saturate",d[b]);"sepia"===b&&setFilter(a,"sepia",d[b]);if("x"===b){var c=jQuery.CSS.sfx+"transform";a[c]=a[c]||"";a[c]+=" translateX("+setUnit(d[b],"px")+")";delete a[b]}"y"===b&&(c=jQuery.CSS.sfx+"transform",a[c]=a[c]||"",a[c]+=" translateY("+setUnit(d[b],"px")+")",delete a[b]);"z"===b&&(c=jQuery.CSS.sfx+"transform",a[c]=a[c]||"",a[c]+=" translateZ("+
    setUnit(d[b],"px")+")",delete a[b]);"rotate"===b&&(c=jQuery.CSS.sfx+"transform",a[c]=a[c]||"",a[c]+=" rotate("+setUnit(d[b],"deg")+")",delete a[b]);"rotateX"===b&&(c=jQuery.CSS.sfx+"transform",a[c]=a[c]||"",a[c]+=" rotateX("+setUnit(d[b],"deg")+")",delete a[b]);"rotateY"===b&&(c=jQuery.CSS.sfx+"transform",a[c]=a[c]||"",a[c]+=" rotateY("+setUnit(d[b],"deg")+")",delete a[b]);"rotateZ"===b&&(c=jQuery.CSS.sfx+"transform",a[c]=a[c]||"",a[c]+=" rotateZ("+setUnit(d[b],"deg")+")",delete a[b]);"scale"===b&&
(c=jQuery.CSS.sfx+"transform",a[c]=a[c]||"",a[c]+=" scale("+setUnit(d[b],"")+")",delete a[b]);"scaleX"===b&&(c=jQuery.CSS.sfx+"transform",a[c]=a[c]||"",a[c]+=" scaleX("+setUnit(d[b],"")+")",delete a[b]);"scaleY"===b&&(c=jQuery.CSS.sfx+"transform",a[c]=a[c]||"",a[c]+=" scaleY("+setUnit(d[b],"")+")",delete a[b]);"scaleZ"===b&&(c=jQuery.CSS.sfx+"transform",a[c]=a[c]||"",a[c]+=" scaleZ("+setUnit(d[b],"")+")",delete a[b]);"skew"===b&&(c=jQuery.CSS.sfx+"transform",a[c]=a[c]||"",a[c]+=" skew("+setUnit(d[b],
    "deg")+")",delete a[b]);"skewX"===b&&(c=jQuery.CSS.sfx+"transform",a[c]=a[c]||"",a[c]+=" skewX("+setUnit(d[b],"deg")+")",delete a[b]);"skewY"===b&&(c=jQuery.CSS.sfx+"transform",a[c]=a[c]||"",a[c]+=" skewY("+setUnit(d[b],"deg")+")",delete a[b]);"perspective"===b&&(c=jQuery.CSS.sfx+"transform",a[c]=a[c]||"",a[c]+=" perspective("+setUnit(d[b],"px")+")",delete a[b])}return a},getProp:function(d){var a=[],b;for(b in d)0>a.indexOf(b)&&a.push(uncamel(b));return a.join(",")},animate:function(d,a,b,c,g){return this.each(function(){function n(){e.called=
    !0;e.CSSAIsRunning=!1;h.off(jQuery.CSS.transitionEnd+"."+e.id);clearTimeout(e.timeout);h.css(jQuery.CSS.sfx+"transition","");"function"==typeof g&&g.apply(e);"function"==typeof e.CSSqueue&&(e.CSSqueue(),e.CSSqueue=null)}var e=this,h=jQuery(this);e.id=e.id||"CSSA_"+(new Date).getTime();var k=k||{type:"noEvent"};if(e.CSSAIsRunning&&e.eventType==k.type&&!jQuery.browser.msie&&9>=jQuery.browser.version)e.CSSqueue=function(){h.CSSAnimate(d,a,b,c,g)};else if(e.CSSqueue=null,e.eventType=k.type,0!==h.length&&
    d){d=jQuery.normalizeCss(d);e.CSSAIsRunning=!0;"function"==typeof a&&(g=a,a=jQuery.fx.speeds._default);"function"==typeof b&&(c=b,b=0);"string"==typeof b&&(g=b,b=0);"function"==typeof c&&(g=c,c="cubic-bezier(0.65,0.03,0.36,0.72)");if("string"==typeof a)for(var l in jQuery.fx.speeds)if(a==l){a=jQuery.fx.speeds[l];break}else a=jQuery.fx.speeds._default;a||(a=jQuery.fx.speeds._default);"string"===typeof g&&(c=g,g=null);if(jQuery.support.CSStransition){var f={"default":"ease","in":"ease-in",out:"ease-out",
  "in-out":"ease-in-out",snap:"cubic-bezier(0,1,.5,1)",easeOutCubic:"cubic-bezier(.215,.61,.355,1)",easeInOutCubic:"cubic-bezier(.645,.045,.355,1)",easeInCirc:"cubic-bezier(.6,.04,.98,.335)",easeOutCirc:"cubic-bezier(.075,.82,.165,1)",easeInOutCirc:"cubic-bezier(.785,.135,.15,.86)",easeInExpo:"cubic-bezier(.95,.05,.795,.035)",easeOutExpo:"cubic-bezier(.19,1,.22,1)",easeInOutExpo:"cubic-bezier(1,0,0,1)",easeInQuad:"cubic-bezier(.55,.085,.68,.53)",easeOutQuad:"cubic-bezier(.25,.46,.45,.94)",easeInOutQuad:"cubic-bezier(.455,.03,.515,.955)",
  easeInQuart:"cubic-bezier(.895,.03,.685,.22)",easeOutQuart:"cubic-bezier(.165,.84,.44,1)",easeInOutQuart:"cubic-bezier(.77,0,.175,1)",easeInQuint:"cubic-bezier(.755,.05,.855,.06)",easeOutQuint:"cubic-bezier(.23,1,.32,1)",easeInOutQuint:"cubic-bezier(.86,0,.07,1)",easeInSine:"cubic-bezier(.47,0,.745,.715)",easeOutSine:"cubic-bezier(.39,.575,.565,1)",easeInOutSine:"cubic-bezier(.445,.05,.55,.95)",easeInBack:"cubic-bezier(.6,-.28,.735,.045)",easeOutBack:"cubic-bezier(.175, .885,.32,1.275)",easeInOutBack:"cubic-bezier(.68,-.55,.265,1.55)"};
  f[c]&&(c=f[c]);h.off(jQuery.CSS.transitionEnd+"."+e.id);f=jQuery.CSS.getProp(d);var m={};jQuery.extend(m,d);m[jQuery.CSS.sfx+"transition-property"]=f;m[jQuery.CSS.sfx+"transition-duration"]=a+"ms";m[jQuery.CSS.sfx+"transition-delay"]=b+"ms";m[jQuery.CSS.sfx+"transition-timing-function"]=c;setTimeout(function(){h.one(jQuery.CSS.transitionEnd+"."+e.id,n);h.css(m)},1);e.timeout=setTimeout(function(){e.called||!g?(e.called=!1,e.CSSAIsRunning=!1):(h.css(jQuery.CSS.sfx+"transition",""),g.apply(e),e.CSSAIsRunning=
      !1,"function"==typeof e.CSSqueue&&(e.CSSqueue(),e.CSSqueue=null))},a+b+10)}else{for(f in d)"transform"===f&&delete d[f],"filter"===f&&delete d[f],"transform-origin"===f&&delete d[f],"auto"===d[f]&&delete d[f],"x"===f&&(k=d[f],l="left",d[l]=k,delete d[f]),"y"===f&&(k=d[f],l="top",d[l]=k,delete d[f]),"-ms-transform"!==f&&"-ms-filter"!==f||delete d[f];h.delay(b).animate(d,a,g)}}})}};jQuery.fn.CSSAnimate=jQuery.CSS.animate;jQuery.normalizeCss=jQuery.CSS.normalizeCss;
jQuery.fn.css3=function(d){return this.each(function(){var a=jQuery(this),b=jQuery.normalizeCss(d);a.css(b)})};
;/*___________________________________________________________________________________________________________________________________________________
 _ jquery.mb.components                                                                                                                             _
 _                                                                                                                                                  _
 _ file: jquery.mb.simpleSlider.min.js                                                                                                              _
 _ last modified: 09/05/17 19.31                                                                                                                    _
 _                                                                                                                                                  _
 _ Open Lab s.r.l., Florence - Italy                                                                                                                _
 _                                                                                                                                                  _
 _ email: matteo@open-lab.com                                                                                                                       _
 _ site: http://pupunzi.com                                                                                                                         _
 _       http://open-lab.com                                                                                                                        _
 _ blog: http://pupunzi.open-lab.com                                                                                                                _
 _ Q&A:  http://jquery.pupunzi.com                                                                                                                  _
 _                                                                                                                                                  _
 _ Licences: MIT, GPL                                                                                                                               _
 _    http://www.opensource.org/licenses/mit-license.php                                                                                            _
 _    http://www.gnu.org/licenses/gpl.html                                                                                                          _
 _                                                                                                                                                  _
 _ Copyright (c) 2001-2017. Matteo Bicocchi (Pupunzi);                                                                                              _
 ___________________________________________________________________________________________________________________________________________________*/


var nAgt=navigator.userAgent;jQuery.browser=jQuery.browser||{};jQuery.browser.mozilla=!1;jQuery.browser.webkit=!1;jQuery.browser.opera=!1;jQuery.browser.safari=!1;jQuery.browser.chrome=!1;jQuery.browser.androidStock=!1;jQuery.browser.msie=!1;jQuery.browser.edge=!1;jQuery.browser.ua=nAgt;function isTouchSupported(){var a=nAgt.msMaxTouchPoints,e="ontouchstart"in document.createElement("div");return a||e?!0:!1}
var getOS=function(){var a={version:"Unknown version",name:"Unknown OS"};-1!=navigator.appVersion.indexOf("Win")&&(a.name="Windows");-1!=navigator.appVersion.indexOf("Mac")&&0>navigator.appVersion.indexOf("Mobile")&&(a.name="Mac");-1!=navigator.appVersion.indexOf("Linux")&&(a.name="Linux");/Mac OS X/.test(nAgt)&&!/Mobile/.test(nAgt)&&(a.version=/Mac OS X (10[\.\_\d]+)/.exec(nAgt)[1],a.version=a.version.replace(/_/g,".").substring(0,5));/Windows/.test(nAgt)&&(a.version="Unknown.Unknown");/Windows NT 5.1/.test(nAgt)&&
(a.version="5.1");/Windows NT 6.0/.test(nAgt)&&(a.version="6.0");/Windows NT 6.1/.test(nAgt)&&(a.version="6.1");/Windows NT 6.2/.test(nAgt)&&(a.version="6.2");/Windows NT 10.0/.test(nAgt)&&(a.version="10.0");/Linux/.test(nAgt)&&/Linux/.test(nAgt)&&(a.version="Unknown.Unknown");a.name=a.name.toLowerCase();a.major_version="Unknown";a.minor_version="Unknown";"Unknown.Unknown"!=a.version&&(a.major_version=parseFloat(a.version.split(".")[0]),a.minor_version=parseFloat(a.version.split(".")[1]));return a};
jQuery.browser.os=getOS();jQuery.browser.hasTouch=isTouchSupported();jQuery.browser.name=navigator.appName;jQuery.browser.fullVersion=""+parseFloat(navigator.appVersion);jQuery.browser.majorVersion=parseInt(navigator.appVersion,10);var nameOffset,verOffset,ix;
if(-1!=(verOffset=nAgt.indexOf("Opera")))jQuery.browser.opera=!0,jQuery.browser.name="Opera",jQuery.browser.fullVersion=nAgt.substring(verOffset+6),-1!=(verOffset=nAgt.indexOf("Version"))&&(jQuery.browser.fullVersion=nAgt.substring(verOffset+8));else if(-1!=(verOffset=nAgt.indexOf("OPR")))jQuery.browser.opera=!0,jQuery.browser.name="Opera",jQuery.browser.fullVersion=nAgt.substring(verOffset+4);else if(-1!=(verOffset=nAgt.indexOf("MSIE")))jQuery.browser.msie=!0,jQuery.browser.name="Microsoft Internet Explorer",
    jQuery.browser.fullVersion=nAgt.substring(verOffset+5);else if(-1!=nAgt.indexOf("Trident")){jQuery.browser.msie=!0;jQuery.browser.name="Microsoft Internet Explorer";var start=nAgt.indexOf("rv:")+3,end=start+4;jQuery.browser.fullVersion=nAgt.substring(start,end)}else-1!=(verOffset=nAgt.indexOf("Edge"))?(jQuery.browser.edge=!0,jQuery.browser.name="Microsoft Edge",jQuery.browser.fullVersion=nAgt.substring(verOffset+5)):-1!=(verOffset=nAgt.indexOf("Chrome"))?(jQuery.browser.webkit=!0,jQuery.browser.chrome=
    !0,jQuery.browser.name="Chrome",jQuery.browser.fullVersion=nAgt.substring(verOffset+7)):-1<nAgt.indexOf("mozilla/5.0")&&-1<nAgt.indexOf("android ")&&-1<nAgt.indexOf("applewebkit")&&!(-1<nAgt.indexOf("chrome"))?(verOffset=nAgt.indexOf("Chrome"),jQuery.browser.webkit=!0,jQuery.browser.androidStock=!0,jQuery.browser.name="androidStock",jQuery.browser.fullVersion=nAgt.substring(verOffset+7)):-1!=(verOffset=nAgt.indexOf("Safari"))?(jQuery.browser.webkit=!0,jQuery.browser.safari=!0,jQuery.browser.name=
    "Safari",jQuery.browser.fullVersion=nAgt.substring(verOffset+7),-1!=(verOffset=nAgt.indexOf("Version"))&&(jQuery.browser.fullVersion=nAgt.substring(verOffset+8))):-1!=(verOffset=nAgt.indexOf("AppleWebkit"))?(jQuery.browser.webkit=!0,jQuery.browser.safari=!0,jQuery.browser.name="Safari",jQuery.browser.fullVersion=nAgt.substring(verOffset+7),-1!=(verOffset=nAgt.indexOf("Version"))&&(jQuery.browser.fullVersion=nAgt.substring(verOffset+8))):-1!=(verOffset=nAgt.indexOf("Firefox"))?(jQuery.browser.mozilla=
    !0,jQuery.browser.name="Firefox",jQuery.browser.fullVersion=nAgt.substring(verOffset+8)):(nameOffset=nAgt.lastIndexOf(" ")+1)<(verOffset=nAgt.lastIndexOf("/"))&&(jQuery.browser.name=nAgt.substring(nameOffset,verOffset),jQuery.browser.fullVersion=nAgt.substring(verOffset+1),jQuery.browser.name.toLowerCase()==jQuery.browser.name.toUpperCase()&&(jQuery.browser.name=navigator.appName));
-1!=(ix=jQuery.browser.fullVersion.indexOf(";"))&&(jQuery.browser.fullVersion=jQuery.browser.fullVersion.substring(0,ix));-1!=(ix=jQuery.browser.fullVersion.indexOf(" "))&&(jQuery.browser.fullVersion=jQuery.browser.fullVersion.substring(0,ix));jQuery.browser.majorVersion=parseInt(""+jQuery.browser.fullVersion,10);isNaN(jQuery.browser.majorVersion)&&(jQuery.browser.fullVersion=""+parseFloat(navigator.appVersion),jQuery.browser.majorVersion=parseInt(navigator.appVersion,10));
jQuery.browser.version=jQuery.browser.majorVersion;jQuery.browser.android=/Android/i.test(nAgt);jQuery.browser.blackberry=/BlackBerry|BB|PlayBook/i.test(nAgt);jQuery.browser.ios=/iPhone|iPad|iPod|webOS/i.test(nAgt);jQuery.browser.operaMobile=/Opera Mini/i.test(nAgt);jQuery.browser.windowsMobile=/IEMobile|Windows Phone/i.test(nAgt);jQuery.browser.kindle=/Kindle|Silk/i.test(nAgt);
jQuery.browser.mobile=jQuery.browser.android||jQuery.browser.blackberry||jQuery.browser.ios||jQuery.browser.windowsMobile||jQuery.browser.operaMobile||jQuery.browser.kindle;jQuery.isMobile=jQuery.browser.mobile;jQuery.isTablet=jQuery.browser.mobile&&765<jQuery(window).width();jQuery.isAndroidDefault=jQuery.browser.android&&!/chrome/i.test(nAgt);jQuery.mbBrowser=jQuery.browser;
jQuery.browser.versionCompare=function(a,e){if("stringstring"!=typeof a+typeof e)return!1;for(var c=a.split("."),d=e.split("."),b=0,f=Math.max(c.length,d.length);b<f;b++){if(c[b]&&!d[b]&&0<parseInt(c[b])||parseInt(c[b])>parseInt(d[b]))return 1;if(d[b]&&!c[b]&&0<parseInt(d[b])||parseInt(c[b])<parseInt(d[b]))return-1}return 0};

(function(b){b.simpleSlider={defaults:{initialval:0,scale:100,orientation:"h",readonly:!1,callback:!1},events:{start:b.browser.mobile?"touchstart":"mousedown",end:b.browser.mobile?"touchend":"mouseup",move:b.browser.mobile?"touchmove":"mousemove"},init:function(c){return this.each(function(){var a=this,d=b(a);d.addClass("simpleSlider");a.opt={};b.extend(a.opt,b.simpleSlider.defaults,c);b.extend(a.opt,d.data());var e="h"==a.opt.orientation?"horizontal":"vertical";e=b("<div/>").addClass("level").addClass(e);
  d.prepend(e);a.level=e;d.css({cursor:"default"});"auto"==a.opt.scale&&(a.opt.scale=b(a).outerWidth());d.updateSliderVal();a.opt.readonly||(d.on(b.simpleSlider.events.start,function(c){b.browser.mobile&&(c=c.changedTouches[0]);a.canSlide=!0;d.updateSliderVal(c);"h"==a.opt.orientation?d.css({cursor:"col-resize"}):d.css({cursor:"row-resize"});b.browser.mobile||(c.preventDefault(),c.stopPropagation())}),b(document).on(b.simpleSlider.events.move,function(c){b.browser.mobile&&(c=c.changedTouches[0]);a.canSlide&&
  (b(document).css({cursor:"default"}),d.updateSliderVal(c),b.browser.mobile||(c.preventDefault(),c.stopPropagation()))}).on(b.simpleSlider.events.end,function(){b(document).css({cursor:"auto"});a.canSlide=!1;d.css({cursor:"auto"})}))})},updateSliderVal:function(c){var a=this.get(0);if(a.opt){a.opt.initialval="number"==typeof a.opt.initialval?a.opt.initialval:a.opt.initialval(a);var d=b(a).outerWidth(),e=b(a).outerHeight();a.x="object"==typeof c?c.clientX+document.body.scrollLeft-this.offset().left:
        "number"==typeof c?c*d/a.opt.scale:a.opt.initialval*d/a.opt.scale;a.y="object"==typeof c?c.clientY+document.body.scrollTop-this.offset().top:"number"==typeof c?(a.opt.scale-a.opt.initialval-c)*e/a.opt.scale:a.opt.initialval*e/a.opt.scale;a.y=this.outerHeight()-a.y;a.scaleX=a.x*a.opt.scale/d;a.scaleY=a.y*a.opt.scale/e;a.outOfRangeX=a.scaleX>a.opt.scale?a.scaleX-a.opt.scale:0>a.scaleX?a.scaleX:0;a.outOfRangeY=a.scaleY>a.opt.scale?a.scaleY-a.opt.scale:0>a.scaleY?a.scaleY:0;a.outOfRange="h"==a.opt.orientation?
    a.outOfRangeX:a.outOfRangeY;a.value="undefined"!=typeof c?"h"==a.opt.orientation?a.x>=this.outerWidth()?a.opt.scale:0>=a.x?0:a.scaleX:a.y>=this.outerHeight()?a.opt.scale:0>=a.y?0:a.scaleY:"h"==a.opt.orientation?a.scaleX:a.scaleY;"h"==a.opt.orientation?a.level.width(Math.floor(100*a.x/d)+"%"):a.level.height(Math.floor(100*a.y/e));"function"==typeof a.opt.callback&&a.opt.callback(a)}}};b.fn.simpleSlider=b.simpleSlider.init;b.fn.updateSliderVal=b.simpleSlider.updateSliderVal})(jQuery);
;/*___________________________________________________________________________________________________________________________________________________
 _ jquery.mb.components                                                                                                                             _
 _                                                                                                                                                  _
 _ file: jquery.mb.storage.min.js                                                                                                                   _
 _ last modified: 24/05/15 16.08                                                                                                                    _
 _                                                                                                                                                  _
 _ Open Lab s.r.l., Florence - Italy                                                                                                                _
 _                                                                                                                                                  _
 _ email: matteo@open-lab.com                                                                                                                       _
 _ site: http://pupunzi.com                                                                                                                         _
 _       http://open-lab.com                                                                                                                        _
 _ blog: http://pupunzi.open-lab.com                                                                                                                _
 _ Q&A:  http://jquery.pupunzi.com                                                                                                                  _
 _                                                                                                                                                  _
 _ Licences: MIT, GPL                                                                                                                               _
 _    http://www.opensource.org/licenses/mit-license.php                                                                                            _
 _    http://www.gnu.org/licenses/gpl.html                                                                                                          _
 _                                                                                                                                                  _
 _ Copyright (c) 2001-2015. Matteo Bicocchi (Pupunzi);                                                                                              _
 ___________________________________________________________________________________________________________________________________________________*/

(function(d){d.mbCookie={set:function(a,c,f,b){"object"==typeof c&&(c=JSON.stringify(c));b=b?"; domain="+b:"";var e=new Date,d="";0<f&&(e.setTime(e.getTime()+864E5*f),d="; expires="+e.toGMTString());document.cookie=a+"="+c+d+"; path=/"+b},get:function(a){a+="=";for(var c=document.cookie.split(";"),d=0;d<c.length;d++){for(var b=c[d];" "==b.charAt(0);)b=b.substring(1,b.length);if(0==b.indexOf(a))try{return JSON.parse(b.substring(a.length,b.length))}catch(e){return b.substring(a.length,b.length)}}return null},
  remove:function(a){d.mbCookie.set(a,"",-1)}};d.mbStorage={set:function(a,c){"object"==typeof c&&(c=JSON.stringify(c));localStorage.setItem(a,c)},get:function(a){if(localStorage[a])try{return JSON.parse(localStorage[a])}catch(c){return localStorage[a]}else return null},remove:function(a){a?localStorage.removeItem(a):localStorage.clear()}}})(jQuery);
/**
 * what-input - A global utility for tracking the current input method (mouse, keyboard or touch).
 * @version v5.2.7
 * @link https://github.com/ten1seven/what-input
 * @license MIT
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("whatInput", [], factory);
	else if(typeof exports === 'object')
		exports["whatInput"] = factory();
	else
		root["whatInput"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

	'use strict';

	module.exports = function () {
	  /*
	   * bail out if there is no document or window
	   * (i.e. in a node/non-DOM environment)
	   *
	   * Return a stubbed API instead
	   */
	  if (typeof document === 'undefined' || typeof window === 'undefined') {
	    return {
	      // always return "initial" because no interaction will ever be detected
	      ask: function ask() {
	        return 'initial';
	      },

	      // always return null
	      element: function element() {
	        return null;
	      },

	      // no-op
	      ignoreKeys: function ignoreKeys() {},

	      // no-op
	      specificKeys: function specificKeys() {},

	      // no-op
	      registerOnChange: function registerOnChange() {},

	      // no-op
	      unRegisterOnChange: function unRegisterOnChange() {}
	    };
	  }

	  /*
	   * variables
	   */

	  // cache document.documentElement
	  var docElem = document.documentElement;

	  // currently focused dom element
	  var currentElement = null;

	  // last used input type
	  var currentInput = 'initial';

	  // last used input intent
	  var currentIntent = currentInput;

	  // UNIX timestamp of current event
	  var currentTimestamp = Date.now();

	  // check for a `data-whatpersist` attribute on either the `html` or `body` elements, defaults to `true`
	  var shouldPersist = 'false';

	  // form input types
	  var formInputs = ['button', 'input', 'select', 'textarea'];

	  // empty array for holding callback functions
	  var functionList = [];

	  // list of modifier keys commonly used with the mouse and
	  // can be safely ignored to prevent false keyboard detection
	  var ignoreMap = [16, // shift
	  17, // control
	  18, // alt
	  91, // Windows key / left Apple cmd
	  93 // Windows menu / right Apple cmd
	  ];

	  var specificMap = [];

	  // mapping of events to input types
	  var inputMap = {
	    keydown: 'keyboard',
	    keyup: 'keyboard',
	    mousedown: 'mouse',
	    mousemove: 'mouse',
	    MSPointerDown: 'pointer',
	    MSPointerMove: 'pointer',
	    pointerdown: 'pointer',
	    pointermove: 'pointer',
	    touchstart: 'touch',
	    touchend: 'touch'

	    // boolean: true if the page is being scrolled
	  };var isScrolling = false;

	  // store current mouse position
	  var mousePos = {
	    x: null,
	    y: null

	    // map of IE 10 pointer events
	  };var pointerMap = {
	    2: 'touch',
	    3: 'touch', // treat pen like touch
	    4: 'mouse'

	    // check support for passive event listeners
	  };var supportsPassive = false;

	  try {
	    var opts = Object.defineProperty({}, 'passive', {
	      get: function get() {
	        supportsPassive = true;
	      }
	    });

	    window.addEventListener('test', null, opts);
	  } catch (e) {}
	  // fail silently


	  /*
	   * set up
	   */

	  var setUp = function setUp() {
	    // add correct mouse wheel event mapping to `inputMap`
	    inputMap[detectWheel()] = 'mouse';

	    addListeners();
	  };

	  /*
	   * events
	   */

	  var addListeners = function addListeners() {
	    // `pointermove`, `MSPointerMove`, `mousemove` and mouse wheel event binding
	    // can only demonstrate potential, but not actual, interaction
	    // and are treated separately
	    var options = supportsPassive ? { passive: true } : false;

	    document.addEventListener('DOMContentLoaded', setPersist);

	    // pointer events (mouse, pen, touch)
	    if (window.PointerEvent) {
	      window.addEventListener('pointerdown', setInput);
	      window.addEventListener('pointermove', setIntent);
	    } else if (window.MSPointerEvent) {
	      window.addEventListener('MSPointerDown', setInput);
	      window.addEventListener('MSPointerMove', setIntent);
	    } else {
	      // mouse events
	      window.addEventListener('mousedown', setInput);
	      window.addEventListener('mousemove', setIntent);

	      // touch events
	      if ('ontouchstart' in window) {
	        window.addEventListener('touchstart', setInput, options);
	        window.addEventListener('touchend', setInput);
	      }
	    }

	    // mouse wheel
	    window.addEventListener(detectWheel(), setIntent, options);

	    // keyboard events
	    window.addEventListener('keydown', setInput);
	    window.addEventListener('keyup', setInput);

	    // focus events
	    window.addEventListener('focusin', setElement);
	    window.addEventListener('focusout', clearElement);
	  };

	  // checks if input persistence should happen and
	  // get saved state from session storage if true (defaults to `false`)
	  var setPersist = function setPersist() {
	    shouldPersist = !(docElem.getAttribute('data-whatpersist') || document.body.getAttribute('data-whatpersist') === 'false');

	    if (shouldPersist) {
	      // check for session variables and use if available
	      try {
	        if (window.sessionStorage.getItem('what-input')) {
	          currentInput = window.sessionStorage.getItem('what-input');
	        }

	        if (window.sessionStorage.getItem('what-intent')) {
	          currentIntent = window.sessionStorage.getItem('what-intent');
	        }
	      } catch (e) {
	        // fail silently
	      }
	    }

	    // always run these so at least `initial` state is set
	    doUpdate('input');
	    doUpdate('intent');
	  };

	  // checks conditions before updating new input
	  var setInput = function setInput(event) {
	    var eventKey = event.which;
	    var value = inputMap[event.type];

	    if (value === 'pointer') {
	      value = pointerType(event);
	    }

	    var ignoreMatch = !specificMap.length && ignoreMap.indexOf(eventKey) === -1;

	    var specificMatch = specificMap.length && specificMap.indexOf(eventKey) !== -1;

	    var shouldUpdate = value === 'keyboard' && eventKey && (ignoreMatch || specificMatch) || value === 'mouse' || value === 'touch';

	    // prevent touch detection from being overridden by event execution order
	    if (validateTouch(value)) {
	      shouldUpdate = false;
	    }

	    if (shouldUpdate && currentInput !== value) {
	      currentInput = value;

	      persistInput('input', currentInput);
	      doUpdate('input');
	    }

	    if (shouldUpdate && currentIntent !== value) {
	      // preserve intent for keyboard interaction with form fields
	      var activeElem = document.activeElement;
	      var notFormInput = activeElem && activeElem.nodeName && (formInputs.indexOf(activeElem.nodeName.toLowerCase()) === -1 || activeElem.nodeName.toLowerCase() === 'button' && !checkClosest(activeElem, 'form'));

	      if (notFormInput) {
	        currentIntent = value;

	        persistInput('intent', currentIntent);
	        doUpdate('intent');
	      }
	    }
	  };

	  // updates the doc and `inputTypes` array with new input
	  var doUpdate = function doUpdate(which) {
	    docElem.setAttribute('data-what' + which, which === 'input' ? currentInput : currentIntent);

	    fireFunctions(which);
	  };

	  // updates input intent for `mousemove` and `pointermove`
	  var setIntent = function setIntent(event) {
	    var value = inputMap[event.type];

	    if (value === 'pointer') {
	      value = pointerType(event);
	    }

	    // test to see if `mousemove` happened relative to the screen to detect scrolling versus mousemove
	    detectScrolling(event);

	    // only execute if scrolling isn't happening
	    if ((!isScrolling && !validateTouch(value) || isScrolling && event.type === 'wheel' || event.type === 'mousewheel' || event.type === 'DOMMouseScroll') && currentIntent !== value) {
	      currentIntent = value;

	      persistInput('intent', currentIntent);
	      doUpdate('intent');
	    }
	  };

	  var setElement = function setElement(event) {
	    if (!event.target.nodeName) {
	      // If nodeName is undefined, clear the element
	      // This can happen if click inside an <svg> element.
	      clearElement();
	      return;
	    }

	    currentElement = event.target.nodeName.toLowerCase();
	    docElem.setAttribute('data-whatelement', currentElement);

	    if (event.target.classList && event.target.classList.length) {
	      docElem.setAttribute('data-whatclasses', event.target.classList.toString().replace(' ', ','));
	    }
	  };

	  var clearElement = function clearElement() {
	    currentElement = null;

	    docElem.removeAttribute('data-whatelement');
	    docElem.removeAttribute('data-whatclasses');
	  };

	  var persistInput = function persistInput(which, value) {
	    if (shouldPersist) {
	      try {
	        window.sessionStorage.setItem('what-' + which, value);
	      } catch (e) {
	        // fail silently
	      }
	    }
	  };

	  /*
	   * utilities
	   */

	  var pointerType = function pointerType(event) {
	    if (typeof event.pointerType === 'number') {
	      return pointerMap[event.pointerType];
	    } else {
	      // treat pen like touch
	      return event.pointerType === 'pen' ? 'touch' : event.pointerType;
	    }
	  };

	  // prevent touch detection from being overridden by event execution order
	  var validateTouch = function validateTouch(value) {
	    var timestamp = Date.now();

	    var touchIsValid = value === 'mouse' && currentInput === 'touch' && timestamp - currentTimestamp < 200;

	    currentTimestamp = timestamp;

	    return touchIsValid;
	  };

	  // detect version of mouse wheel event to use
	  // via https://developer.mozilla.org/en-US/docs/Web/API/Element/wheel_event
	  var detectWheel = function detectWheel() {
	    var wheelType = null;

	    // Modern browsers support "wheel"
	    if ('onwheel' in document.createElement('div')) {
	      wheelType = 'wheel';
	    } else {
	      // Webkit and IE support at least "mousewheel"
	      // or assume that remaining browsers are older Firefox
	      wheelType = document.onmousewheel !== undefined ? 'mousewheel' : 'DOMMouseScroll';
	    }

	    return wheelType;
	  };

	  // runs callback functions
	  var fireFunctions = function fireFunctions(type) {
	    for (var i = 0, len = functionList.length; i < len; i++) {
	      if (functionList[i].type === type) {
	        functionList[i].fn.call(undefined, type === 'input' ? currentInput : currentIntent);
	      }
	    }
	  };

	  // finds matching element in an object
	  var objPos = function objPos(match) {
	    for (var i = 0, len = functionList.length; i < len; i++) {
	      if (functionList[i].fn === match) {
	        return i;
	      }
	    }
	  };

	  var detectScrolling = function detectScrolling(event) {
	    if (mousePos.x !== event.screenX || mousePos.y !== event.screenY) {
	      isScrolling = false;

	      mousePos.x = event.screenX;
	      mousePos.y = event.screenY;
	    } else {
	      isScrolling = true;
	    }
	  };

	  // manual version of `closest()`
	  var checkClosest = function checkClosest(elem, tag) {
	    var ElementPrototype = window.Element.prototype;

	    if (!ElementPrototype.matches) {
	      ElementPrototype.matches = ElementPrototype.msMatchesSelector || ElementPrototype.webkitMatchesSelector;
	    }

	    if (!ElementPrototype.closest) {
	      do {
	        if (elem.matches(tag)) {
	          return elem;
	        }

	        elem = elem.parentElement || elem.parentNode;
	      } while (elem !== null && elem.nodeType === 1);

	      return null;
	    } else {
	      return elem.closest(tag);
	    }
	  };

	  /*
	   * init
	   */

	  // don't start script unless browser cuts the mustard
	  // (also passes if polyfills are used)
	  if ('addEventListener' in window && Array.prototype.indexOf) {
	    setUp();
	  }

	  /*
	   * api
	   */

	  return {
	    // returns string: the current input type
	    // opt: 'intent'|'input'
	    // 'input' (default): returns the same value as the `data-whatinput` attribute
	    // 'intent': includes `data-whatintent` value if it's different than `data-whatinput`
	    ask: function ask(opt) {
	      return opt === 'intent' ? currentIntent : currentInput;
	    },

	    // returns string: the currently focused element or null
	    element: function element() {
	      return currentElement;
	    },

	    // overwrites ignored keys with provided array
	    ignoreKeys: function ignoreKeys(arr) {
	      ignoreMap = arr;
	    },

	    // overwrites specific char keys to update on
	    specificKeys: function specificKeys(arr) {
	      specificMap = arr;
	    },

	    // attach functions to input and intent "events"
	    // funct: function to fire on change
	    // eventType: 'input'|'intent'
	    registerOnChange: function registerOnChange(fn, eventType) {
	      functionList.push({
	        fn: fn,
	        type: eventType || 'input'
	      });
	    },

	    unRegisterOnChange: function unRegisterOnChange(fn) {
	      var position = objPos(fn);

	      if (position || position === 0) {
	        functionList.splice(position, 1);
	      }
	    },

	    clearStorage: function clearStorage() {
	      window.sessionStorage.clear();
	    }
	  };
	}();

/***/ })
/******/ ])
});
;
// YouTube Player API for BG video
// Insert the <script> tag targeting the iframe API
const tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
const firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// Get the video ID passed to the data-video attribute
const bgVideoID = document.querySelector('.js-background-video').getAttribute('data-video');

// Set the player options
const playerOptions = {
  // Autoplay + mute has to be activated (value = 1) if you want to autoplay it everywhere 
  // Chrome/Safari/Mobile
  autoplay: 1,
  mute: 1,
  autohide: 1, 
  modestbranding: 1, 
  rel: 0, 
  showinfo: 0, 
  controls: 0, 
  disablekb: 1, 
  enablejsapi: 1, 
  iv_load_policy: 3,
  startAt: 260,
  // For looping video you have to have loop to 1
  // And playlist value equal to your currently playing video
  loop: 1,
  playlist: bgVideoID,
}

// Get the video overlay, to mask it when the video is loaded
const videoOverlay = document.querySelector('.js-video-overlay');

// This function creates an <iframe> (and YouTube player)
// after the API code downloads.
function onYouTubeIframeAPIReady() {
  ytPlayer = new YT.Player('yt-player', {
    width: '1280',
    height: '720',
    videoId: bgVideoID,
    playerVars: playerOptions,
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });

  ytPlayer = new YT.Player('yt-player-xonotic', {
    width: '1280',
    height: '720',
    videoId: 'DKvh_IwG7o4',
    playerVars: {
      // Autoplay + mute has to be activated (value = 1) if you want to autoplay it everywhere 
      // Chrome/Safari/Mobile
      autoplay: 1,
      mute: 1,
      autohide: 1, 
      modestbranding: 1, 
      rel: 0, 
      showinfo: 0, 
      controls: 0, 
      disablekb: 1, 
      enablejsapi: 1, 
      iv_load_policy: 3,
      startAt: 260,
      // For looping video you have to have loop to 1
      // And playlist value equal to your currently playing video
      loop: 1,
      playlist: 'DKvh_IwG7o4',
      events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
      }
    }
  });

  ytPlayer = new YT.Player('yt-player-skribbl', {
    width: '1280',
    height: '720',
    videoId: '_SQmdP-Dvag',
    playerVars: {
      // Autoplay + mute has to be activated (value = 1) if you want to autoplay it everywhere 
      // Chrome/Safari/Mobile
      autoplay: 1,
      mute: 1,
      autohide: 1, 
      modestbranding: 1, 
      rel: 0, 
      showinfo: 0, 
      controls: 0, 
      disablekb: 1, 
      enablejsapi: 1, 
      iv_load_policy: 3,
      startAt: 0,
      // For looping video you have to have loop to 1
      // And playlist value equal to your currently playing video
      loop: 1,
      playlist: '_SQmdP-Dvag',
      events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
      }
    }
  });
}

// The API will call this function when the video player is ready.
function onPlayerReady(event) {
  event.target.playVideo();

  // Get the duration of the currently playing video
  const videoDuration = event.target.getDuration();
  
  // When the video is playing, compare the total duration
  // To the current passed time if it's below 2 and above 0,
  // Return to the first frame (0) of the video
  // This is needed to avoid the buffering at the end of the video
  // Which displays a black screen + the YouTube loader
  setInterval(function (){
    const videoCurrentTime = event.target.getCurrentTime();
    const timeDifference = videoDuration - videoCurrentTime;
    
    if (2 > timeDifference > 0) {
      event.target.seekTo(0);
    }
  }, 1000);
}

// When the player is ready and when the video starts playing
// The state changes to PLAYING and we can remove our overlay
// This is needed to mask the preloading
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING) {
    videoOverlay.classList.add('video-overlay--fadeOut');
  }
}

( function( $ ) {

  $(document).ready(function(){

    if($('.screenshot').length) {
    $(window).scroll(function(){
      // This is then function used to detect if the element is scrolled into view
      function elementScrolled(elem) {
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();
        var elemTop = $(elem).offset().top;
        return ((elemTop <= docViewBottom) && (elemTop >= docViewTop));
      }
    
      if(elementScrolled('.screenshot')) {
        $('.screenshot').addClass('animate');
      }
    });
    }

    if($('a[href^="#"]').length) {
    // Smooth scroll to ID on any anchor link
    $('a[href^="#"]').on('click',function (e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 500, 'swing', function () {
            window.location.hash = target;
        });
    });
    }

    // IRC-scroller
    $('.slide-irclog, .irclog, .slide-placeholder').css('height', window.innerHeight);
        $(window).resize(function(){
            $('.slide-irclog, .irclog, .slide-placeholder').css('height', window.innerHeight);
    });

    // Fade/blur effect
    $(".irclog").hover(function () {
        $(".slide-irclog h2, .slide-irclog p, .slide-irclog span").addClass("blur");
        $(".slide-irclog .button").addClass("blur-button");
        $(".slide-irclog .shade").addClass("hovered");
      }, function () {
        $(".slide-irclog h2, .slide-irclog p, .slide-irclog span").removeClass("blur");
        $(".slide-irclog .button").removeClass("blur-button");
        $(".slide-irclog .shade").removeClass("hovered");
      });

      $(".slide-irclog .container").hover(function () {
        $(".slide-irclog h2, .slide-irclog p, .slide-irclog span").removeClass("blur");
        $(".slide-irclog .button").removeClass("blur-button");
        $(".slide-irclog .shade").removeClass("hovered");
      }, function () {
        $(".slide-irclog h2, .slide-irclog p, .slide-irclog span").addClass("blur");
        $(".slide-irclog .button").addClass("blur-button");
        $(".slide-irclog .shade").addClass("hovered");
      });          

    // Fixed navigation waypoint
    $('.firstcontainer').waypoint(function(){
        $('.hamburger-box').toggleClass('invert');
    }, { offset: '0' } );

    // Ticker animation effect
    var dataName, inserChar, inserClass, jAnimConsole, separator;

    inserChar = '<span class="cursor"></span>';
    separator = ';';
    dataName = "list";
    inserClass = "inserChar";

    jAnimConsole = function() {
      // var blinkAnim, currentChar, currentWord, htmlInser, list, out, printWord, timeBwtLetters, timeBwtWords;
      var currentChar, currentWord, htmlInser, list, out, printWord, timeBwtLetters, timeBwtWords;
        out = $(this);
      list = $(this).data(dataName).split(separator);
      htmlInser = "<span class=" + inserClass + ">" + inserChar + "</span>";
      out.html(htmlInser);
      // blinkAnim = function() {
      //   $("." + inserClass).delay(1000).hide(100).delay(1000).show(100);
      //   $("." + inserClass).queue(function(next) {
      //     next();
      //     blinkAnim();
      //   });
      // };
      currentWord = 0;
      currentChar = 1;
      timeBwtLetters = 60;
      timeBwtWords = 4000;
      printWord = function() {
        var substr;
        substr = list[currentWord].substr(0, currentChar++);
        out.html("" + substr + htmlInser);
        if (currentChar <= list[currentWord].length) {
          return setTimeout(printWord, timeBwtLetters);
        } else {
          // setTimeout(blinkAnim, timeBwtLetters);
          currentWord = (currentWord + 1) % list.length;
          currentChar = 1;
          return setTimeout(printWord, timeBwtWords);
        }
      };
      setTimeout(printWord, 0);
    };

    $(".type p").each(jAnimConsole);

  });

} )( jQuery );
