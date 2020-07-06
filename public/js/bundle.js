/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/entry.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/dependency/glider.min.js":
/*!**************************************!*\
  !*** ./src/dependency/glider.min.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/* @preserve\n    _____ __ _     __                _\n   / ___// /(_)___/ /___  ____      (_)___\n  / (_ // // // _  // -_)/ __/_    / /(_-<\n  \\___//_//_/ \\_,_/ \\__//_/  (_)__/ //___/\n                              |___/\n\n  Version: 1.7.3\n  Author: Nick Piscitelli (pickykneee)\n  Website: https://nickpiscitelli.com\n  Documentation: http://nickpiscitelli.github.io/Glider.js\n  License: MIT License\n  Release Date: October 25th, 2018\n\n*/\n!function(e){ true?!(__WEBPACK_AMD_DEFINE_FACTORY__ = (e),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :\n\t\t\t\t__WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):undefined}(function(){var a=\"undefined\"!=typeof window?window:this,e=a.Glider=function(e,t){var o=this;if(e._glider)return e._glider;if(o.ele=e,o.ele.classList.add(\"glider\"),(o.ele._glider=o).opt=Object.assign({},{slidesToScroll:1,slidesToShow:1,resizeLock:!0,duration:.5,easing:function(e,t,o,i,r){return i*(t/=r)*t+o}},t),o.animate_id=o.page=o.slide=0,o.arrows={},o._opt=o.opt,o.opt.skipTrack)o.track=o.ele.children[0];else for(o.track=document.createElement(\"div\"),o.ele.appendChild(o.track);1!==o.ele.children.length;)o.track.appendChild(o.ele.children[0]);o.track.classList.add(\"glider-track\"),o.init(),o.resize=o.init.bind(o,!0),o.event(o.ele,\"add\",{scroll:o.updateControls.bind(o)}),o.event(a,\"add\",{resize:o.resize})},t=e.prototype;return t.init=function(e,t){var o=this,i=0,r=0;o.slides=o.track.children,[].forEach.call(o.slides,function(e){e.classList.add(\"glider-slide\")}),o.containerWidth=o.ele.clientWidth;var s=o.settingsBreakpoint();if(t=t||s,\"auto\"===o.opt.slidesToShow||void 0!==o.opt._autoSlide){var l=o.containerWidth/o.opt.itemWidth;o.opt._autoSlide=o.opt.slidesToShow=o.opt.exactWidth?l:Math.floor(l)}\"auto\"===o.opt.slidesToScroll&&(o.opt.slidesToScroll=Math.floor(o.opt.slidesToShow)),o.itemWidth=o.opt.exactWidth?o.opt.itemWidth:o.containerWidth/o.opt.slidesToShow,[].forEach.call(o.slides,function(e){e.style.height=\"auto\",e.style.width=o.itemWidth+\"px\",i+=o.itemWidth,r=Math.max(e.offsetHeight,r)}),o.track.style.width=i+\"px\",o.trackWidth=i,o.isDrag=!1,o.preventClick=!1,o.opt.resizeLock&&o.scrollTo(o.slide*o.itemWidth,0),(s||t)&&(o.bindArrows(),o.buildDots(),o.bindDrag()),o.updateControls(),o.emit(e?\"refresh\":\"loaded\")},t.bindDrag=function(){var t=this;t.mouse=t.mouse||t.handleMouse.bind(t);function e(){t.mouseDown=void 0,t.ele.classList.remove(\"drag\"),t.isDrag&&(t.preventClick=!0),t.isDrag=!1}var o={mouseup:e,mouseleave:e,mousedown:function(e){e.preventDefault(),e.stopPropagation(),t.mouseDown=e.clientX,t.ele.classList.add(\"drag\")},mousemove:t.mouse,click:function(e){t.preventClick&&(e.preventDefault(),e.stopPropagation()),t.preventClick=!1}};t.ele.classList.toggle(\"draggable\",!0===t.opt.draggable),t.event(t.ele,\"remove\",o),t.opt.draggable&&t.event(t.ele,\"add\",o)},t.buildDots=function(){var e=this;if(e.opt.dots){if(\"string\"==typeof e.opt.dots?e.dots=document.querySelector(e.opt.dots):e.dots=e.opt.dots,e.dots){e.dots.innerHTML=\"\",e.dots.classList.add(\"glider-dots\");for(var t=0;t<Math.ceil(e.slides.length/e.opt.slidesToShow);++t){var o=document.createElement(\"button\");o.dataset.index=t,o.setAttribute(\"aria-label\",\"Page \"+(t+1)),o.className=\"glider-dot \"+(t?\"\":\"active\"),e.event(o,\"add\",{click:e.scrollItem.bind(e,t,!0)}),e.dots.appendChild(o)}}}else e.dots&&(e.dots.innerHTML=\"\")},t.bindArrows=function(){var o=this;o.opt.arrows?[\"prev\",\"next\"].forEach(function(e){var t=o.opt.arrows[e];t&&(\"string\"==typeof t&&(t=document.querySelector(t)),t._func=t._func||o.scrollItem.bind(o,e),o.event(t,\"remove\",{click:t._func}),o.event(t,\"add\",{click:t._func}),o.arrows[e]=t)}):Object.keys(o.arrows).forEach(function(e){var t=o.arrows[e];o.event(t,\"remove\",{click:t._func})})},t.updateControls=function(e){var d=this;e&&!d.opt.scrollPropagate&&e.stopPropagation();var t=d.containerWidth>=d.trackWidth;d.opt.rewind||(d.arrows.prev&&d.arrows.prev.classList.toggle(\"disabled\",d.ele.scrollLeft<=0||t),d.arrows.next&&d.arrows.next.classList.toggle(\"disabled\",Math.ceil(d.ele.scrollLeft+d.containerWidth)>=Math.floor(d.trackWidth)||t)),d.slide=Math.round(d.ele.scrollLeft/d.itemWidth),d.page=Math.round(d.ele.scrollLeft/d.containerWidth);var c=d.slide+Math.floor(Math.floor(d.opt.slidesToShow)/2),h=Math.floor(d.opt.slidesToShow)%2?0:c+1;1===Math.floor(d.opt.slidesToShow)&&(h=0),d.ele.scrollLeft+d.containerWidth>=Math.floor(d.trackWidth)&&(d.page=d.dots?d.dots.children.length-1:0),[].forEach.call(d.slides,function(e,t){var o=e.classList,i=o.contains(\"visible\"),r=d.ele.scrollLeft,s=d.ele.scrollLeft+d.containerWidth,l=d.itemWidth*t,n=l+d.itemWidth;[].forEach.call(o,function(e){/^left|right/.test(e)&&o.remove(e)}),o.toggle(\"active\",d.slide===t),c===t||h&&h===t?o.add(\"center\"):(o.remove(\"center\"),o.add([t<c?\"left\":\"right\",Math.abs(t-(t<c?c:h||c))].join(\"-\")));var a=Math.ceil(l)>=r&&Math.floor(n)<=s;o.toggle(\"visible\",a),a!==i&&d.emit(\"slide-\"+(a?\"visible\":\"hidden\"),{slide:t})}),d.dots&&[].forEach.call(d.dots.children,function(e,t){e.classList.toggle(\"active\",d.page===t)}),e&&d.opt.scrollLock&&(clearTimeout(d.scrollLock),d.scrollLock=setTimeout(function(){clearTimeout(d.scrollLock),.02<Math.abs(d.ele.scrollLeft/d.itemWidth-d.slide)&&(d.mouseDown||d.scrollItem(d.round(d.ele.scrollLeft/d.itemWidth)))},d.opt.scrollLockDelay||250))},t.scrollItem=function(e,t,o){o&&o.preventDefault();var i=this,r=e;if(++i.animate_id,!0===t)e*=i.containerWidth,e=Math.round(e/i.itemWidth)*i.itemWidth;else{if(\"string\"==typeof e){var s=\"prev\"===e;if(e=i.opt.slidesToScroll%1||i.opt.slidesToShow%1?i.round(i.ele.scrollLeft/i.itemWidth):i.slide,s?e-=i.opt.slidesToScroll:e+=i.opt.slidesToScroll,i.opt.rewind){var l=i.ele.scrollLeft;e=s&&!l?i.slides.length:!s&&l+i.containerWidth>=Math.floor(i.trackWidth)?0:e}}e=Math.max(Math.min(e,i.slides.length),0),i.slide=e,e=i.itemWidth*e}return i.scrollTo(e,i.opt.duration*Math.abs(i.ele.scrollLeft-e),function(){i.updateControls(),i.emit(\"animated\",{value:r,type:\"string\"==typeof r?\"arrow\":t?\"dot\":\"slide\"})}),!1},t.settingsBreakpoint=function(){var e=this,t=e._opt.responsive;if(t){t.sort(function(e,t){return t.breakpoint-e.breakpoint});for(var o=0;o<t.length;++o){var i=t[o];if(a.innerWidth>=i.breakpoint)return e.breakpoint!==i.breakpoint&&(e.opt=Object.assign({},e._opt,i.settings),e.breakpoint=i.breakpoint,!0)}}var r=0!==e.breakpoint;return e.opt=Object.assign({},e._opt),e.breakpoint=0,r},t.scrollTo=function(t,o,i){var r=this,s=(new Date).getTime(),l=r.animate_id,n=function(){var e=(new Date).getTime()-s;r.ele.scrollLeft=r.ele.scrollLeft+(t-r.ele.scrollLeft)*r.opt.easing(0,e,0,1,o),e<o&&l===r.animate_id?a.requestAnimationFrame(n):(r.ele.scrollLeft=t,i&&i.call(r))};a.requestAnimationFrame(n)},t.removeItem=function(e){var t=this;t.slides.length&&(t.track.removeChild(t.slides[e]),t.refresh(!0),t.emit(\"remove\"))},t.addItem=function(e){this.track.appendChild(e),this.refresh(!0),this.emit(\"add\")},t.handleMouse=function(e){var t=this;t.mouseDown&&(t.isDrag=!0,t.ele.scrollLeft+=(t.mouseDown-e.clientX)*(t.opt.dragVelocity||3.3),t.mouseDown=e.clientX)},t.round=function(e){var t=1/(this.opt.slidesToScroll%1||1);return Math.round(e*t)/t},t.refresh=function(e){this.init(!0,e)},t.setOption=function(t,e){var o=this;o.breakpoint&&!e?o._opt.responsive.forEach(function(e){e.breakpoint===o.breakpoint&&(e.settings=Object.assign({},e.settings,t))}):o._opt=Object.assign({},o._opt,t),o.breakpoint=0,o.settingsBreakpoint()},t.destroy=function(){function e(t){t.removeAttribute(\"style\"),[].forEach.call(t.classList,function(e){/^glider/.test(e)&&t.classList.remove(e)})}var t=this,o=t.ele.cloneNode(!0);o.children[0].outerHTML=o.children[0].innerHTML,e(o),[].forEach.call(o.getElementsByTagName(\"*\"),e),t.ele.parentNode.replaceChild(o,t.ele),t.event(a,\"remove\",{resize:t.resize}),t.emit(\"destroy\")},t.emit=function(e,t){var o=new a.CustomEvent(\"glider-\"+e,{bubbles:!this.opt.eventPropagate,detail:t});this.ele.dispatchEvent(o)},t.event=function(e,t,o){var i=e[t+\"EventListener\"].bind(e);Object.keys(o).forEach(function(e){i(e,o[e])})},e});\n\n//# sourceURL=webpack:///./src/dependency/glider.min.js?");

/***/ }),

/***/ "./src/entry.js":
/*!**********************!*\
  !*** ./src/entry.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dependency_glider_min_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dependency/glider.min.js */ \"./src/dependency/glider.min.js\");\n/* harmony import */ var _dependency_glider_min_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_dependency_glider_min_js__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction pageHome() {\n    new Glider(document.querySelector('.glider'), {\n        slidesToShow: 1,\n        slidesToScroll: 1,\n        draggable: true,\n        dots: '.dots',\n        arrows: {\n            prev: '.glider-prev',\n            next: '.glider-next'\n        }\n    });\n    new Glider(document.querySelector('.glider-feed'), {\n        slidesToShow: 1,\n        slidesToScroll: 1,\n        draggable: true,\n        arrows: {\n            prev: '.glider-prev-feed',\n            next: '.glider-next-feed'\n        }\n    });\n}\n\nif (info.page === \"home\") {\n    pageHome();\n}\nif (info.page === \"gallery\") {\n\n    new Glider(document.querySelector('.glider-video'), {\n        slidesToShow: 3,\n        slidesToScroll: 3,\n        draggable: true,\n        dots: '.dots',\n        arrows: {\n            prev: '.glider-prev',\n            next: '.glider-next'\n        }\n    });\n\n    new Glider(document.querySelector('.glider-photo'), {\n        slidesToShow: 1,\n        slidesToScroll: 1,\n        draggable: true,\n        dots: '.dots',\n        arrows: {\n            prev: '.glider-prev',\n            next: '.glider-next'\n        }\n    });\n    \n}\n    \n\n//# sourceURL=webpack:///./src/entry.js?");

/***/ })

/******/ });