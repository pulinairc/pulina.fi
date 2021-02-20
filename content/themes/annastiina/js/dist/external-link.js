!function(e){var n={};function r(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=n,r.d=function(e,n,t){r.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,n){if(1&n&&(e=r(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(r.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)r.d(t,a,function(n){return e[n]}.bind(null,a));return t},r.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(n,"a",n),n},r.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},r.p="",r(r.s=4)}({"./content/themes/annastiina/js/src/modules/external-link.js":function(module,__webpack_exports__,__webpack_require__){"use strict";eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return styleExternalLinks; });\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ \"./content/themes/annastiina/node_modules/@babel/runtime/helpers/toConsumableArray.js\");\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _localization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./localization */ \"./content/themes/annastiina/js/src/modules/localization.js\");\n\n\n/**\n * Style external links\n */\n\n\nfunction isLinkExternal(link, localDomains) {\n  // Empty links are not external\n  if (!link.length) {\n    return false;\n  }\n\n  var exceptions = ['#', 'tel:', 'mailto:', '/']; // Check if the url starts with some of the exceptions\n\n  var isException = exceptions.some(function (exception) {\n    var compare = new RegExp(\"^\".concat(exception), 'g');\n    return compare.test(link);\n  });\n\n  if (isException) {\n    return false;\n  }\n\n  var linkUrl;\n\n  try {\n    linkUrl = new URL(link);\n  } catch (error) {\n    // eslint-disable-next-line no-console\n    console.log(\"Invalid URL: \".concat(link));\n    return false;\n  } // Check if host is one of the local domains\n\n\n  return !localDomains.some(function (domain) {\n    return linkUrl.host === domain;\n  });\n}\n\nfunction styleExternalLinks() {\n  var localDomains = [window.location.host];\n\n  if (typeof window.annastiina_externalLinkDomains !== 'undefined') {\n    localDomains = localDomains.concat(window.annastiina_externalLinkDomains);\n  }\n\n  var links = document.querySelectorAll('a');\n\n  var externalLinks = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(links).filter(function (link) {\n    return isLinkExternal(link.href, localDomains);\n  });\n\n  externalLinks.forEach(function (externalLink) {\n    var ariaLabel = externalLink.target === '_blank' ? \"\".concat(Object(_localization__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('external_link'), \" \").concat(externalLink.textContent, \", \").concat(Object(_localization__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('target_blank')) : \"\".concat(Object(_localization__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('external_link'), \" \").concat(externalLink.textContent);\n    externalLink.setAttribute('aria-label', ariaLabel);\n    externalLink.classList.add('is-external-link');\n  });\n}\n\n//# sourceURL=webpack:///./content/themes/annastiina/js/src/modules/external-link.js?")},"./content/themes/annastiina/js/src/modules/localization.js":function(module,__webpack_exports__,__webpack_require__){"use strict";eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return getLocalization; });\nfunction getLocalization(stringKey) {\n  if (typeof window.annastiina_screenReaderText === 'undefined' || typeof window.annastiina_screenReaderText[stringKey] === 'undefined') {\n    // eslint-disable-next-line no-console\n    console.error(\"Missing translation for \".concat(stringKey));\n    return '';\n  }\n\n  return window.annastiina_screenReaderText[stringKey];\n}\n\n//# sourceURL=webpack:///./content/themes/annastiina/js/src/modules/localization.js?")},"./content/themes/annastiina/node_modules/@babel/runtime/helpers/arrayLikeToArray.js":function(module,exports){eval("function _arrayLikeToArray(arr, len) {\n  if (len == null || len > arr.length) len = arr.length;\n\n  for (var i = 0, arr2 = new Array(len); i < len; i++) {\n    arr2[i] = arr[i];\n  }\n\n  return arr2;\n}\n\nmodule.exports = _arrayLikeToArray;\n\n//# sourceURL=webpack:///./content/themes/annastiina/node_modules/@babel/runtime/helpers/arrayLikeToArray.js?")},"./content/themes/annastiina/node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":function(module,exports,__webpack_require__){eval('var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray */ "./content/themes/annastiina/node_modules/@babel/runtime/helpers/arrayLikeToArray.js");\n\nfunction _arrayWithoutHoles(arr) {\n  if (Array.isArray(arr)) return arrayLikeToArray(arr);\n}\n\nmodule.exports = _arrayWithoutHoles;\n\n//# sourceURL=webpack:///./content/themes/annastiina/node_modules/@babel/runtime/helpers/arrayWithoutHoles.js?')},"./content/themes/annastiina/node_modules/@babel/runtime/helpers/iterableToArray.js":function(module,exports){eval('function _iterableToArray(iter) {\n  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);\n}\n\nmodule.exports = _iterableToArray;\n\n//# sourceURL=webpack:///./content/themes/annastiina/node_modules/@babel/runtime/helpers/iterableToArray.js?')},"./content/themes/annastiina/node_modules/@babel/runtime/helpers/nonIterableSpread.js":function(module,exports){eval('function _nonIterableSpread() {\n  throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");\n}\n\nmodule.exports = _nonIterableSpread;\n\n//# sourceURL=webpack:///./content/themes/annastiina/node_modules/@babel/runtime/helpers/nonIterableSpread.js?')},"./content/themes/annastiina/node_modules/@babel/runtime/helpers/toConsumableArray.js":function(module,exports,__webpack_require__){eval('var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles */ "./content/themes/annastiina/node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");\n\nvar iterableToArray = __webpack_require__(/*! ./iterableToArray */ "./content/themes/annastiina/node_modules/@babel/runtime/helpers/iterableToArray.js");\n\nvar unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray */ "./content/themes/annastiina/node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");\n\nvar nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread */ "./content/themes/annastiina/node_modules/@babel/runtime/helpers/nonIterableSpread.js");\n\nfunction _toConsumableArray(arr) {\n  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();\n}\n\nmodule.exports = _toConsumableArray;\n\n//# sourceURL=webpack:///./content/themes/annastiina/node_modules/@babel/runtime/helpers/toConsumableArray.js?')},"./content/themes/annastiina/node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":function(module,exports,__webpack_require__){eval('var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray */ "./content/themes/annastiina/node_modules/@babel/runtime/helpers/arrayLikeToArray.js");\n\nfunction _unsupportedIterableToArray(o, minLen) {\n  if (!o) return;\n  if (typeof o === "string") return arrayLikeToArray(o, minLen);\n  var n = Object.prototype.toString.call(o).slice(8, -1);\n  if (n === "Object" && o.constructor) n = o.constructor.name;\n  if (n === "Map" || n === "Set") return Array.from(o);\n  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);\n}\n\nmodule.exports = _unsupportedIterableToArray;\n\n//# sourceURL=webpack:///./content/themes/annastiina/node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js?')},4:function(module,exports,__webpack_require__){eval('module.exports = __webpack_require__(/*! /Users/rolle/Projects/pulina/content/themes/annastiina/js/src/modules/external-link.js */"./content/themes/annastiina/js/src/modules/external-link.js");\n\n\n//# sourceURL=webpack:///multi_./content/themes/annastiina/js/src/modules/external-link.js?')}});