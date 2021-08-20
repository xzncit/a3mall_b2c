
  !function(){try{var a=Function("return this")();a&&!a.Math&&(Object.assign(a,{isFinite:isFinite,Array:Array,Date:Date,Error:Error,Function:Function,Math:Math,Object:Object,RegExp:RegExp,String:String,TypeError:TypeError,setTimeout:setTimeout,clearTimeout:clearTimeout,setInterval:setInterval,clearInterval:clearInterval}),"undefined"!=typeof Reflect&&(a.Reflect=Reflect))}catch(a){}}();
  /******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded CSS chunks
/******/ 	var installedCssChunks = {
/******/ 		"common/runtime": 0
/******/ 	}
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"common/runtime": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + chunkId + ".js"
/******/ 	}
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// mini-css-extract-plugin CSS loading
/******/ 		var cssChunks = {"uni_modules/mescroll-uni/components/mescroll-body/mescroll-body":1,"components/empty-box/empty-box":1,"components/tool/loading":1,"components/navbar/navbar":1,"components/share/index":1,"components/count-down/count-down":1,"components/goods-action/goods-action":1,"components/goods-action/goods-action-button":1,"components/goods-action/goods-action-icon":1,"components/sku-action/sku-action":1,"components/uni-number-box/uni-number-box":1,"components/address-list/address-list":1,"components/coupon-list/coupon-list":1,"components/tool/info":1,"components/uni-steps/uni-steps":1,"components/sx-rate/index":1,"components/lb-picker/index":1,"uni_modules/mescroll-uni/components/mescroll-empty/mescroll-empty":1,"uni_modules/mescroll-uni/components/mescroll-uni/components/mescroll-top":1,"components/custom/mall-archives":1,"components/custom/mall-archives-category":1,"components/custom/mall-blank":1,"components/custom/mall-bonus":1,"components/custom/mall-goods":1,"components/custom/mall-group":1,"components/custom/mall-header":1,"components/custom/mall-image":1,"components/custom/mall-image-group":1,"components/custom/mall-navbar":1,"components/custom/mall-notice":1,"components/custom/mall-regiment":1,"components/custom/mall-search":1,"components/custom/mall-second":1,"components/custom/mall-slider":1,"components/custom/mall-textarea":1,"components/custom/mall-textbar":1,"components/custom/mall-video":1,"components/popup/popup":1,"components/uni-icons/uni-icons":1,"components/lb-picker/pickers/multi-selector-picker":1,"components/lb-picker/pickers/selector-picker":1,"components/lb-picker/pickers/unlinked-selector-picker":1};
/******/ 		if(installedCssChunks[chunkId]) promises.push(installedCssChunks[chunkId]);
/******/ 		else if(installedCssChunks[chunkId] !== 0 && cssChunks[chunkId]) {
/******/ 			promises.push(installedCssChunks[chunkId] = new Promise(function(resolve, reject) {
/******/ 				var href = "" + ({"uni_modules/mescroll-uni/components/mescroll-body/mescroll-body":"uni_modules/mescroll-uni/components/mescroll-body/mescroll-body","components/custom/mall":"components/custom/mall","components/empty-box/empty-box":"components/empty-box/empty-box","components/tool/loading":"components/tool/loading","components/navbar/navbar":"components/navbar/navbar","components/share/index":"components/share/index","components/count-down/count-down":"components/count-down/count-down","components/goods-action/goods-action":"components/goods-action/goods-action","components/goods-action/goods-action-button":"components/goods-action/goods-action-button","components/goods-action/goods-action-icon":"components/goods-action/goods-action-icon","components/sku-action/sku-action":"components/sku-action/sku-action","components/uni-number-box/uni-number-box":"components/uni-number-box/uni-number-box","components/address-list/address-list":"components/address-list/address-list","components/coupon-list/coupon-list":"components/coupon-list/coupon-list","components/tool/info":"components/tool/info","components/uni-steps/uni-steps":"components/uni-steps/uni-steps","components/sx-rate/index":"components/sx-rate/index","components/lb-picker/index":"components/lb-picker/index","uni_modules/mescroll-uni/components/mescroll-empty/mescroll-empty":"uni_modules/mescroll-uni/components/mescroll-empty/mescroll-empty","uni_modules/mescroll-uni/components/mescroll-uni/components/mescroll-top":"uni_modules/mescroll-uni/components/mescroll-uni/components/mescroll-top","components/custom/mall-archives":"components/custom/mall-archives","components/custom/mall-archives-category":"components/custom/mall-archives-category","components/custom/mall-blank":"components/custom/mall-blank","components/custom/mall-bonus":"components/custom/mall-bonus","components/custom/mall-goods":"components/custom/mall-goods","components/custom/mall-group":"components/custom/mall-group","components/custom/mall-header":"components/custom/mall-header","components/custom/mall-image":"components/custom/mall-image","components/custom/mall-image-group":"components/custom/mall-image-group","components/custom/mall-navbar":"components/custom/mall-navbar","components/custom/mall-notice":"components/custom/mall-notice","components/custom/mall-regiment":"components/custom/mall-regiment","components/custom/mall-search":"components/custom/mall-search","components/custom/mall-second":"components/custom/mall-second","components/custom/mall-slider":"components/custom/mall-slider","components/custom/mall-textarea":"components/custom/mall-textarea","components/custom/mall-textbar":"components/custom/mall-textbar","components/custom/mall-video":"components/custom/mall-video","components/popup/popup":"components/popup/popup","components/uni-icons/uni-icons":"components/uni-icons/uni-icons","components/lb-picker/pickers/multi-selector-picker":"components/lb-picker/pickers/multi-selector-picker","components/lb-picker/pickers/selector-picker":"components/lb-picker/pickers/selector-picker","components/lb-picker/pickers/unlinked-selector-picker":"components/lb-picker/pickers/unlinked-selector-picker"}[chunkId]||chunkId) + ".ttss";
/******/ 				var fullhref = __webpack_require__.p + href;
/******/ 				var existingLinkTags = document.getElementsByTagName("link");
/******/ 				for(var i = 0; i < existingLinkTags.length; i++) {
/******/ 					var tag = existingLinkTags[i];
/******/ 					var dataHref = tag.getAttribute("data-href") || tag.getAttribute("href");
/******/ 					if(tag.rel === "stylesheet" && (dataHref === href || dataHref === fullhref)) return resolve();
/******/ 				}
/******/ 				var existingStyleTags = document.getElementsByTagName("style");
/******/ 				for(var i = 0; i < existingStyleTags.length; i++) {
/******/ 					var tag = existingStyleTags[i];
/******/ 					var dataHref = tag.getAttribute("data-href");
/******/ 					if(dataHref === href || dataHref === fullhref) return resolve();
/******/ 				}
/******/ 				var linkTag = document.createElement("link");
/******/ 				linkTag.rel = "stylesheet";
/******/ 				linkTag.type = "text/css";
/******/ 				linkTag.onload = resolve;
/******/ 				linkTag.onerror = function(event) {
/******/ 					var request = event && event.target && event.target.src || fullhref;
/******/ 					var err = new Error("Loading CSS chunk " + chunkId + " failed.\n(" + request + ")");
/******/ 					err.code = "CSS_CHUNK_LOAD_FAILED";
/******/ 					err.request = request;
/******/ 					delete installedCssChunks[chunkId]
/******/ 					linkTag.parentNode.removeChild(linkTag)
/******/ 					reject(err);
/******/ 				};
/******/ 				linkTag.href = fullhref;
/******/
/******/ 				var head = document.getElementsByTagName("head")[0];
/******/ 				head.appendChild(linkTag);
/******/ 			}).then(function() {
/******/ 				installedCssChunks[chunkId] = 0;
/******/ 			}));
/******/ 		}
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = global["webpackJsonp"] = global["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// run deferred modules from other chunks
/******/ 	checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ([]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLFFBQVEsb0JBQW9CO1FBQzVCO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsaUJBQWlCLDRCQUE0QjtRQUM3QztRQUNBO1FBQ0Esa0JBQWtCLDJCQUEyQjtRQUM3QztRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBOzs7UUFHQTtRQUNBLG9CQUFvQjtRQUNwQjtRQUNBO1FBQ0E7UUFDQSx1QkFBdUIsNGxHQUE0bEc7UUFDbm5HO1FBQ0E7UUFDQSxtQkFBbUIsNkJBQTZCO1FBQ2hEO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxtQkFBbUIsOEJBQThCO1FBQ2pEO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0EsS0FBSztRQUNMO1FBQ0EsS0FBSztRQUNMOztRQUVBOztRQUVBO1FBQ0EsaUNBQWlDOztRQUVqQztRQUNBO1FBQ0E7UUFDQSxLQUFLO1FBQ0w7UUFDQTtRQUNBO1FBQ0EsTUFBTTtRQUNOOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0Esd0JBQXdCLGtDQUFrQztRQUMxRCxNQUFNO1FBQ047UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOztRQUVBO1FBQ0EsMENBQTBDLG9CQUFvQixXQUFXOztRQUV6RTtRQUNBO1FBQ0E7UUFDQTtRQUNBLGdCQUFnQix1QkFBdUI7UUFDdkM7OztRQUdBO1FBQ0EiLCJmaWxlIjoiY29tbW9uL3J1bnRpbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBDU1MgY2h1bmtzXG4gXHR2YXIgaW5zdGFsbGVkQ3NzQ2h1bmtzID0ge1xuIFx0XHRcImNvbW1vbi9ydW50aW1lXCI6IDBcbiBcdH1cblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwiY29tbW9uL3J1bnRpbWVcIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBzY3JpcHQgcGF0aCBmdW5jdGlvblxuIFx0ZnVuY3Rpb24ganNvbnBTY3JpcHRTcmMoY2h1bmtJZCkge1xuIFx0XHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5wICsgXCJcIiArIGNodW5rSWQgKyBcIi5qc1wiXG4gXHR9XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuIFx0Ly8gVGhpcyBmaWxlIGNvbnRhaW5zIG9ubHkgdGhlIGVudHJ5IGNodW5rLlxuIFx0Ly8gVGhlIGNodW5rIGxvYWRpbmcgZnVuY3Rpb24gZm9yIGFkZGl0aW9uYWwgY2h1bmtzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmUgPSBmdW5jdGlvbiByZXF1aXJlRW5zdXJlKGNodW5rSWQpIHtcbiBcdFx0dmFyIHByb21pc2VzID0gW107XG5cblxuIFx0XHQvLyBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiBDU1MgbG9hZGluZ1xuIFx0XHR2YXIgY3NzQ2h1bmtzID0ge1widW5pX21vZHVsZXMvbWVzY3JvbGwtdW5pL2NvbXBvbmVudHMvbWVzY3JvbGwtYm9keS9tZXNjcm9sbC1ib2R5XCI6MSxcImNvbXBvbmVudHMvZW1wdHktYm94L2VtcHR5LWJveFwiOjEsXCJjb21wb25lbnRzL3Rvb2wvbG9hZGluZ1wiOjEsXCJjb21wb25lbnRzL25hdmJhci9uYXZiYXJcIjoxLFwiY29tcG9uZW50cy9zaGFyZS9pbmRleFwiOjEsXCJjb21wb25lbnRzL2NvdW50LWRvd24vY291bnQtZG93blwiOjEsXCJjb21wb25lbnRzL2dvb2RzLWFjdGlvbi9nb29kcy1hY3Rpb25cIjoxLFwiY29tcG9uZW50cy9nb29kcy1hY3Rpb24vZ29vZHMtYWN0aW9uLWJ1dHRvblwiOjEsXCJjb21wb25lbnRzL2dvb2RzLWFjdGlvbi9nb29kcy1hY3Rpb24taWNvblwiOjEsXCJjb21wb25lbnRzL3NrdS1hY3Rpb24vc2t1LWFjdGlvblwiOjEsXCJjb21wb25lbnRzL3VuaS1udW1iZXItYm94L3VuaS1udW1iZXItYm94XCI6MSxcImNvbXBvbmVudHMvYWRkcmVzcy1saXN0L2FkZHJlc3MtbGlzdFwiOjEsXCJjb21wb25lbnRzL2NvdXBvbi1saXN0L2NvdXBvbi1saXN0XCI6MSxcImNvbXBvbmVudHMvdG9vbC9pbmZvXCI6MSxcImNvbXBvbmVudHMvdW5pLXN0ZXBzL3VuaS1zdGVwc1wiOjEsXCJjb21wb25lbnRzL3N4LXJhdGUvaW5kZXhcIjoxLFwiY29tcG9uZW50cy9sYi1waWNrZXIvaW5kZXhcIjoxLFwidW5pX21vZHVsZXMvbWVzY3JvbGwtdW5pL2NvbXBvbmVudHMvbWVzY3JvbGwtZW1wdHkvbWVzY3JvbGwtZW1wdHlcIjoxLFwidW5pX21vZHVsZXMvbWVzY3JvbGwtdW5pL2NvbXBvbmVudHMvbWVzY3JvbGwtdW5pL2NvbXBvbmVudHMvbWVzY3JvbGwtdG9wXCI6MSxcImNvbXBvbmVudHMvY3VzdG9tL21hbGwtYXJjaGl2ZXNcIjoxLFwiY29tcG9uZW50cy9jdXN0b20vbWFsbC1hcmNoaXZlcy1jYXRlZ29yeVwiOjEsXCJjb21wb25lbnRzL2N1c3RvbS9tYWxsLWJsYW5rXCI6MSxcImNvbXBvbmVudHMvY3VzdG9tL21hbGwtYm9udXNcIjoxLFwiY29tcG9uZW50cy9jdXN0b20vbWFsbC1nb29kc1wiOjEsXCJjb21wb25lbnRzL2N1c3RvbS9tYWxsLWdyb3VwXCI6MSxcImNvbXBvbmVudHMvY3VzdG9tL21hbGwtaGVhZGVyXCI6MSxcImNvbXBvbmVudHMvY3VzdG9tL21hbGwtaW1hZ2VcIjoxLFwiY29tcG9uZW50cy9jdXN0b20vbWFsbC1pbWFnZS1ncm91cFwiOjEsXCJjb21wb25lbnRzL2N1c3RvbS9tYWxsLW5hdmJhclwiOjEsXCJjb21wb25lbnRzL2N1c3RvbS9tYWxsLW5vdGljZVwiOjEsXCJjb21wb25lbnRzL2N1c3RvbS9tYWxsLXJlZ2ltZW50XCI6MSxcImNvbXBvbmVudHMvY3VzdG9tL21hbGwtc2VhcmNoXCI6MSxcImNvbXBvbmVudHMvY3VzdG9tL21hbGwtc2Vjb25kXCI6MSxcImNvbXBvbmVudHMvY3VzdG9tL21hbGwtc2xpZGVyXCI6MSxcImNvbXBvbmVudHMvY3VzdG9tL21hbGwtdGV4dGFyZWFcIjoxLFwiY29tcG9uZW50cy9jdXN0b20vbWFsbC10ZXh0YmFyXCI6MSxcImNvbXBvbmVudHMvY3VzdG9tL21hbGwtdmlkZW9cIjoxLFwiY29tcG9uZW50cy9wb3B1cC9wb3B1cFwiOjEsXCJjb21wb25lbnRzL3VuaS1pY29ucy91bmktaWNvbnNcIjoxLFwiY29tcG9uZW50cy9sYi1waWNrZXIvcGlja2Vycy9tdWx0aS1zZWxlY3Rvci1waWNrZXJcIjoxLFwiY29tcG9uZW50cy9sYi1waWNrZXIvcGlja2Vycy9zZWxlY3Rvci1waWNrZXJcIjoxLFwiY29tcG9uZW50cy9sYi1waWNrZXIvcGlja2Vycy91bmxpbmtlZC1zZWxlY3Rvci1waWNrZXJcIjoxfTtcbiBcdFx0aWYoaW5zdGFsbGVkQ3NzQ2h1bmtzW2NodW5rSWRdKSBwcm9taXNlcy5wdXNoKGluc3RhbGxlZENzc0NodW5rc1tjaHVua0lkXSk7XG4gXHRcdGVsc2UgaWYoaW5zdGFsbGVkQ3NzQ2h1bmtzW2NodW5rSWRdICE9PSAwICYmIGNzc0NodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdHByb21pc2VzLnB1c2goaW5zdGFsbGVkQ3NzQ2h1bmtzW2NodW5rSWRdID0gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gXHRcdFx0XHR2YXIgaHJlZiA9IFwiXCIgKyAoe1widW5pX21vZHVsZXMvbWVzY3JvbGwtdW5pL2NvbXBvbmVudHMvbWVzY3JvbGwtYm9keS9tZXNjcm9sbC1ib2R5XCI6XCJ1bmlfbW9kdWxlcy9tZXNjcm9sbC11bmkvY29tcG9uZW50cy9tZXNjcm9sbC1ib2R5L21lc2Nyb2xsLWJvZHlcIixcImNvbXBvbmVudHMvY3VzdG9tL21hbGxcIjpcImNvbXBvbmVudHMvY3VzdG9tL21hbGxcIixcImNvbXBvbmVudHMvZW1wdHktYm94L2VtcHR5LWJveFwiOlwiY29tcG9uZW50cy9lbXB0eS1ib3gvZW1wdHktYm94XCIsXCJjb21wb25lbnRzL3Rvb2wvbG9hZGluZ1wiOlwiY29tcG9uZW50cy90b29sL2xvYWRpbmdcIixcImNvbXBvbmVudHMvbmF2YmFyL25hdmJhclwiOlwiY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyXCIsXCJjb21wb25lbnRzL3NoYXJlL2luZGV4XCI6XCJjb21wb25lbnRzL3NoYXJlL2luZGV4XCIsXCJjb21wb25lbnRzL2NvdW50LWRvd24vY291bnQtZG93blwiOlwiY29tcG9uZW50cy9jb3VudC1kb3duL2NvdW50LWRvd25cIixcImNvbXBvbmVudHMvZ29vZHMtYWN0aW9uL2dvb2RzLWFjdGlvblwiOlwiY29tcG9uZW50cy9nb29kcy1hY3Rpb24vZ29vZHMtYWN0aW9uXCIsXCJjb21wb25lbnRzL2dvb2RzLWFjdGlvbi9nb29kcy1hY3Rpb24tYnV0dG9uXCI6XCJjb21wb25lbnRzL2dvb2RzLWFjdGlvbi9nb29kcy1hY3Rpb24tYnV0dG9uXCIsXCJjb21wb25lbnRzL2dvb2RzLWFjdGlvbi9nb29kcy1hY3Rpb24taWNvblwiOlwiY29tcG9uZW50cy9nb29kcy1hY3Rpb24vZ29vZHMtYWN0aW9uLWljb25cIixcImNvbXBvbmVudHMvc2t1LWFjdGlvbi9za3UtYWN0aW9uXCI6XCJjb21wb25lbnRzL3NrdS1hY3Rpb24vc2t1LWFjdGlvblwiLFwiY29tcG9uZW50cy91bmktbnVtYmVyLWJveC91bmktbnVtYmVyLWJveFwiOlwiY29tcG9uZW50cy91bmktbnVtYmVyLWJveC91bmktbnVtYmVyLWJveFwiLFwiY29tcG9uZW50cy9hZGRyZXNzLWxpc3QvYWRkcmVzcy1saXN0XCI6XCJjb21wb25lbnRzL2FkZHJlc3MtbGlzdC9hZGRyZXNzLWxpc3RcIixcImNvbXBvbmVudHMvY291cG9uLWxpc3QvY291cG9uLWxpc3RcIjpcImNvbXBvbmVudHMvY291cG9uLWxpc3QvY291cG9uLWxpc3RcIixcImNvbXBvbmVudHMvdG9vbC9pbmZvXCI6XCJjb21wb25lbnRzL3Rvb2wvaW5mb1wiLFwiY29tcG9uZW50cy91bmktc3RlcHMvdW5pLXN0ZXBzXCI6XCJjb21wb25lbnRzL3VuaS1zdGVwcy91bmktc3RlcHNcIixcImNvbXBvbmVudHMvc3gtcmF0ZS9pbmRleFwiOlwiY29tcG9uZW50cy9zeC1yYXRlL2luZGV4XCIsXCJjb21wb25lbnRzL2xiLXBpY2tlci9pbmRleFwiOlwiY29tcG9uZW50cy9sYi1waWNrZXIvaW5kZXhcIixcInVuaV9tb2R1bGVzL21lc2Nyb2xsLXVuaS9jb21wb25lbnRzL21lc2Nyb2xsLWVtcHR5L21lc2Nyb2xsLWVtcHR5XCI6XCJ1bmlfbW9kdWxlcy9tZXNjcm9sbC11bmkvY29tcG9uZW50cy9tZXNjcm9sbC1lbXB0eS9tZXNjcm9sbC1lbXB0eVwiLFwidW5pX21vZHVsZXMvbWVzY3JvbGwtdW5pL2NvbXBvbmVudHMvbWVzY3JvbGwtdW5pL2NvbXBvbmVudHMvbWVzY3JvbGwtdG9wXCI6XCJ1bmlfbW9kdWxlcy9tZXNjcm9sbC11bmkvY29tcG9uZW50cy9tZXNjcm9sbC11bmkvY29tcG9uZW50cy9tZXNjcm9sbC10b3BcIixcImNvbXBvbmVudHMvY3VzdG9tL21hbGwtYXJjaGl2ZXNcIjpcImNvbXBvbmVudHMvY3VzdG9tL21hbGwtYXJjaGl2ZXNcIixcImNvbXBvbmVudHMvY3VzdG9tL21hbGwtYXJjaGl2ZXMtY2F0ZWdvcnlcIjpcImNvbXBvbmVudHMvY3VzdG9tL21hbGwtYXJjaGl2ZXMtY2F0ZWdvcnlcIixcImNvbXBvbmVudHMvY3VzdG9tL21hbGwtYmxhbmtcIjpcImNvbXBvbmVudHMvY3VzdG9tL21hbGwtYmxhbmtcIixcImNvbXBvbmVudHMvY3VzdG9tL21hbGwtYm9udXNcIjpcImNvbXBvbmVudHMvY3VzdG9tL21hbGwtYm9udXNcIixcImNvbXBvbmVudHMvY3VzdG9tL21hbGwtZ29vZHNcIjpcImNvbXBvbmVudHMvY3VzdG9tL21hbGwtZ29vZHNcIixcImNvbXBvbmVudHMvY3VzdG9tL21hbGwtZ3JvdXBcIjpcImNvbXBvbmVudHMvY3VzdG9tL21hbGwtZ3JvdXBcIixcImNvbXBvbmVudHMvY3VzdG9tL21hbGwtaGVhZGVyXCI6XCJjb21wb25lbnRzL2N1c3RvbS9tYWxsLWhlYWRlclwiLFwiY29tcG9uZW50cy9jdXN0b20vbWFsbC1pbWFnZVwiOlwiY29tcG9uZW50cy9jdXN0b20vbWFsbC1pbWFnZVwiLFwiY29tcG9uZW50cy9jdXN0b20vbWFsbC1pbWFnZS1ncm91cFwiOlwiY29tcG9uZW50cy9jdXN0b20vbWFsbC1pbWFnZS1ncm91cFwiLFwiY29tcG9uZW50cy9jdXN0b20vbWFsbC1uYXZiYXJcIjpcImNvbXBvbmVudHMvY3VzdG9tL21hbGwtbmF2YmFyXCIsXCJjb21wb25lbnRzL2N1c3RvbS9tYWxsLW5vdGljZVwiOlwiY29tcG9uZW50cy9jdXN0b20vbWFsbC1ub3RpY2VcIixcImNvbXBvbmVudHMvY3VzdG9tL21hbGwtcmVnaW1lbnRcIjpcImNvbXBvbmVudHMvY3VzdG9tL21hbGwtcmVnaW1lbnRcIixcImNvbXBvbmVudHMvY3VzdG9tL21hbGwtc2VhcmNoXCI6XCJjb21wb25lbnRzL2N1c3RvbS9tYWxsLXNlYXJjaFwiLFwiY29tcG9uZW50cy9jdXN0b20vbWFsbC1zZWNvbmRcIjpcImNvbXBvbmVudHMvY3VzdG9tL21hbGwtc2Vjb25kXCIsXCJjb21wb25lbnRzL2N1c3RvbS9tYWxsLXNsaWRlclwiOlwiY29tcG9uZW50cy9jdXN0b20vbWFsbC1zbGlkZXJcIixcImNvbXBvbmVudHMvY3VzdG9tL21hbGwtdGV4dGFyZWFcIjpcImNvbXBvbmVudHMvY3VzdG9tL21hbGwtdGV4dGFyZWFcIixcImNvbXBvbmVudHMvY3VzdG9tL21hbGwtdGV4dGJhclwiOlwiY29tcG9uZW50cy9jdXN0b20vbWFsbC10ZXh0YmFyXCIsXCJjb21wb25lbnRzL2N1c3RvbS9tYWxsLXZpZGVvXCI6XCJjb21wb25lbnRzL2N1c3RvbS9tYWxsLXZpZGVvXCIsXCJjb21wb25lbnRzL3BvcHVwL3BvcHVwXCI6XCJjb21wb25lbnRzL3BvcHVwL3BvcHVwXCIsXCJjb21wb25lbnRzL3VuaS1pY29ucy91bmktaWNvbnNcIjpcImNvbXBvbmVudHMvdW5pLWljb25zL3VuaS1pY29uc1wiLFwiY29tcG9uZW50cy9sYi1waWNrZXIvcGlja2Vycy9tdWx0aS1zZWxlY3Rvci1waWNrZXJcIjpcImNvbXBvbmVudHMvbGItcGlja2VyL3BpY2tlcnMvbXVsdGktc2VsZWN0b3ItcGlja2VyXCIsXCJjb21wb25lbnRzL2xiLXBpY2tlci9waWNrZXJzL3NlbGVjdG9yLXBpY2tlclwiOlwiY29tcG9uZW50cy9sYi1waWNrZXIvcGlja2Vycy9zZWxlY3Rvci1waWNrZXJcIixcImNvbXBvbmVudHMvbGItcGlja2VyL3BpY2tlcnMvdW5saW5rZWQtc2VsZWN0b3ItcGlja2VyXCI6XCJjb21wb25lbnRzL2xiLXBpY2tlci9waWNrZXJzL3VubGlua2VkLXNlbGVjdG9yLXBpY2tlclwifVtjaHVua0lkXXx8Y2h1bmtJZCkgKyBcIi50dHNzXCI7XG4gXHRcdFx0XHR2YXIgZnVsbGhyZWYgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBocmVmO1xuIFx0XHRcdFx0dmFyIGV4aXN0aW5nTGlua1RhZ3MgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImxpbmtcIik7XG4gXHRcdFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZXhpc3RpbmdMaW5rVGFncy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdFx0XHR2YXIgdGFnID0gZXhpc3RpbmdMaW5rVGFnc1tpXTtcbiBcdFx0XHRcdFx0dmFyIGRhdGFIcmVmID0gdGFnLmdldEF0dHJpYnV0ZShcImRhdGEtaHJlZlwiKSB8fCB0YWcuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKTtcbiBcdFx0XHRcdFx0aWYodGFnLnJlbCA9PT0gXCJzdHlsZXNoZWV0XCIgJiYgKGRhdGFIcmVmID09PSBocmVmIHx8IGRhdGFIcmVmID09PSBmdWxsaHJlZikpIHJldHVybiByZXNvbHZlKCk7XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHR2YXIgZXhpc3RpbmdTdHlsZVRhZ3MgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInN0eWxlXCIpO1xuIFx0XHRcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGV4aXN0aW5nU3R5bGVUYWdzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0XHRcdHZhciB0YWcgPSBleGlzdGluZ1N0eWxlVGFnc1tpXTtcbiBcdFx0XHRcdFx0dmFyIGRhdGFIcmVmID0gdGFnLmdldEF0dHJpYnV0ZShcImRhdGEtaHJlZlwiKTtcbiBcdFx0XHRcdFx0aWYoZGF0YUhyZWYgPT09IGhyZWYgfHwgZGF0YUhyZWYgPT09IGZ1bGxocmVmKSByZXR1cm4gcmVzb2x2ZSgpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0dmFyIGxpbmtUYWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcbiBcdFx0XHRcdGxpbmtUYWcucmVsID0gXCJzdHlsZXNoZWV0XCI7XG4gXHRcdFx0XHRsaW5rVGFnLnR5cGUgPSBcInRleHQvY3NzXCI7XG4gXHRcdFx0XHRsaW5rVGFnLm9ubG9hZCA9IHJlc29sdmU7XG4gXHRcdFx0XHRsaW5rVGFnLm9uZXJyb3IgPSBmdW5jdGlvbihldmVudCkge1xuIFx0XHRcdFx0XHR2YXIgcmVxdWVzdCA9IGV2ZW50ICYmIGV2ZW50LnRhcmdldCAmJiBldmVudC50YXJnZXQuc3JjIHx8IGZ1bGxocmVmO1xuIFx0XHRcdFx0XHR2YXIgZXJyID0gbmV3IEVycm9yKFwiTG9hZGluZyBDU1MgY2h1bmsgXCIgKyBjaHVua0lkICsgXCIgZmFpbGVkLlxcbihcIiArIHJlcXVlc3QgKyBcIilcIik7XG4gXHRcdFx0XHRcdGVyci5jb2RlID0gXCJDU1NfQ0hVTktfTE9BRF9GQUlMRURcIjtcbiBcdFx0XHRcdFx0ZXJyLnJlcXVlc3QgPSByZXF1ZXN0O1xuIFx0XHRcdFx0XHRkZWxldGUgaW5zdGFsbGVkQ3NzQ2h1bmtzW2NodW5rSWRdXG4gXHRcdFx0XHRcdGxpbmtUYWcucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChsaW5rVGFnKVxuIFx0XHRcdFx0XHRyZWplY3QoZXJyKTtcbiBcdFx0XHRcdH07XG4gXHRcdFx0XHRsaW5rVGFnLmhyZWYgPSBmdWxsaHJlZjtcblxuIFx0XHRcdFx0dmFyIGhlYWQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImhlYWRcIilbMF07XG4gXHRcdFx0XHRoZWFkLmFwcGVuZENoaWxkKGxpbmtUYWcpO1xuIFx0XHRcdH0pLnRoZW4oZnVuY3Rpb24oKSB7XG4gXHRcdFx0XHRpbnN0YWxsZWRDc3NDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHRcdH0pKTtcbiBcdFx0fVxuXG4gXHRcdC8vIEpTT05QIGNodW5rIGxvYWRpbmcgZm9yIGphdmFzY3JpcHRcblxuIFx0XHR2YXIgaW5zdGFsbGVkQ2h1bmtEYXRhID0gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdO1xuIFx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEgIT09IDApIHsgLy8gMCBtZWFucyBcImFscmVhZHkgaW5zdGFsbGVkXCIuXG5cbiBcdFx0XHQvLyBhIFByb21pc2UgbWVhbnMgXCJjdXJyZW50bHkgbG9hZGluZ1wiLlxuIFx0XHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSkge1xuIFx0XHRcdFx0cHJvbWlzZXMucHVzaChpbnN0YWxsZWRDaHVua0RhdGFbMl0pO1xuIFx0XHRcdH0gZWxzZSB7XG4gXHRcdFx0XHQvLyBzZXR1cCBQcm9taXNlIGluIGNodW5rIGNhY2hlXG4gXHRcdFx0XHR2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuIFx0XHRcdFx0XHRpbnN0YWxsZWRDaHVua0RhdGEgPSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSBbcmVzb2x2ZSwgcmVqZWN0XTtcbiBcdFx0XHRcdH0pO1xuIFx0XHRcdFx0cHJvbWlzZXMucHVzaChpbnN0YWxsZWRDaHVua0RhdGFbMl0gPSBwcm9taXNlKTtcblxuIFx0XHRcdFx0Ly8gc3RhcnQgY2h1bmsgbG9hZGluZ1xuIFx0XHRcdFx0dmFyIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuIFx0XHRcdFx0dmFyIG9uU2NyaXB0Q29tcGxldGU7XG5cbiBcdFx0XHRcdHNjcmlwdC5jaGFyc2V0ID0gJ3V0Zi04JztcbiBcdFx0XHRcdHNjcmlwdC50aW1lb3V0ID0gMTIwO1xuIFx0XHRcdFx0aWYgKF9fd2VicGFja19yZXF1aXJlX18ubmMpIHtcbiBcdFx0XHRcdFx0c2NyaXB0LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIF9fd2VicGFja19yZXF1aXJlX18ubmMpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0c2NyaXB0LnNyYyA9IGpzb25wU2NyaXB0U3JjKGNodW5rSWQpO1xuXG4gXHRcdFx0XHQvLyBjcmVhdGUgZXJyb3IgYmVmb3JlIHN0YWNrIHVud291bmQgdG8gZ2V0IHVzZWZ1bCBzdGFja3RyYWNlIGxhdGVyXG4gXHRcdFx0XHR2YXIgZXJyb3IgPSBuZXcgRXJyb3IoKTtcbiBcdFx0XHRcdG9uU2NyaXB0Q29tcGxldGUgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiBcdFx0XHRcdFx0Ly8gYXZvaWQgbWVtIGxlYWtzIGluIElFLlxuIFx0XHRcdFx0XHRzY3JpcHQub25lcnJvciA9IHNjcmlwdC5vbmxvYWQgPSBudWxsO1xuIFx0XHRcdFx0XHRjbGVhclRpbWVvdXQodGltZW91dCk7XG4gXHRcdFx0XHRcdHZhciBjaHVuayA9IGluc3RhbGxlZENodW5rc1tjaHVua0lkXTtcbiBcdFx0XHRcdFx0aWYoY2h1bmsgIT09IDApIHtcbiBcdFx0XHRcdFx0XHRpZihjaHVuaykge1xuIFx0XHRcdFx0XHRcdFx0dmFyIGVycm9yVHlwZSA9IGV2ZW50ICYmIChldmVudC50eXBlID09PSAnbG9hZCcgPyAnbWlzc2luZycgOiBldmVudC50eXBlKTtcbiBcdFx0XHRcdFx0XHRcdHZhciByZWFsU3JjID0gZXZlbnQgJiYgZXZlbnQudGFyZ2V0ICYmIGV2ZW50LnRhcmdldC5zcmM7XG4gXHRcdFx0XHRcdFx0XHRlcnJvci5tZXNzYWdlID0gJ0xvYWRpbmcgY2h1bmsgJyArIGNodW5rSWQgKyAnIGZhaWxlZC5cXG4oJyArIGVycm9yVHlwZSArICc6ICcgKyByZWFsU3JjICsgJyknO1xuIFx0XHRcdFx0XHRcdFx0ZXJyb3IubmFtZSA9ICdDaHVua0xvYWRFcnJvcic7XG4gXHRcdFx0XHRcdFx0XHRlcnJvci50eXBlID0gZXJyb3JUeXBlO1xuIFx0XHRcdFx0XHRcdFx0ZXJyb3IucmVxdWVzdCA9IHJlYWxTcmM7XG4gXHRcdFx0XHRcdFx0XHRjaHVua1sxXShlcnJvcik7XG4gXHRcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IHVuZGVmaW5lZDtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0fTtcbiBcdFx0XHRcdHZhciB0aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbigpe1xuIFx0XHRcdFx0XHRvblNjcmlwdENvbXBsZXRlKHsgdHlwZTogJ3RpbWVvdXQnLCB0YXJnZXQ6IHNjcmlwdCB9KTtcbiBcdFx0XHRcdH0sIDEyMDAwMCk7XG4gXHRcdFx0XHRzY3JpcHQub25lcnJvciA9IHNjcmlwdC5vbmxvYWQgPSBvblNjcmlwdENvbXBsZXRlO1xuIFx0XHRcdFx0ZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRyZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xuIFx0fTtcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuIFx0Ly8gb24gZXJyb3IgZnVuY3Rpb24gZm9yIGFzeW5jIGxvYWRpbmdcbiBcdF9fd2VicGFja19yZXF1aXJlX18ub2UgPSBmdW5jdGlvbihlcnIpIHsgY29uc29sZS5lcnJvcihlcnIpOyB0aHJvdyBlcnI7IH07XG5cbiBcdHZhciBqc29ucEFycmF5ID0gZ2xvYmFsW1wid2VicGFja0pzb25wXCJdID0gZ2xvYmFsW1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyBmcm9tIG90aGVyIGNodW5rc1xuIFx0Y2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=
  