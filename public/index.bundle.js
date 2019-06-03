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
/******/ 	__webpack_require__.p = "./public/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/Actor.js":
/*!*************************!*\
  !*** ./src/js/Actor.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Actor; });\n/* harmony import */ var _CanvasElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CanvasElement.js */ \"./src/js/CanvasElement.js\");\n\n\nclass Actor {\n  constructor(args) {\n    this.animations = [];\n    this.element = new _CanvasElement_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](args);\n    this.draw = args.draw;\n    return this;\n  }\n\n  addAnimation(animation) {\n    this.animations.push(animation);\n  }\n\n  applyAnimations() {\n    const result = this.animations\n      .map(animation => animation.apply(this.element))\n      .reduce((acc, current) => acc.plus(current),\n        new _CanvasElement_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]()\n      );\n\n    this.animations = this.animations.filter(animation => !animation.isFinished());\n\n    this.element = result.divide(this.animations.length);\n  }\n\n};\n\n\n//# sourceURL=webpack:///./src/js/Actor.js?");

/***/ }),

/***/ "./src/js/Animation.js":
/*!*****************************!*\
  !*** ./src/js/Animation.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Animation; });\nclass Animation {\n  constructor(func, duration = Infinity) {\n    this.duration = duration;\n    this.func = func;\n  }\n\n  apply(element) {\n    if (this.duration > 0) {\n      --this.duration;\n      return this.func(element);\n    }\n\n    return null;\n  }\n\n  isFinished() {\n    return this.duration <= 0;\n  }\n}\n\n\n//# sourceURL=webpack:///./src/js/Animation.js?");

/***/ }),

/***/ "./src/js/CanvasElement.js":
/*!*********************************!*\
  !*** ./src/js/CanvasElement.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return CanvasElement; });\nclass CanvasElement {\n  constructor({\n    x = 0,\n    y = 0,\n    size = 0,\n  } = {}) {\n    this.x = x;\n    this.y = y;\n    this.size = size;\n    return this;\n  }\n\n  setPosition(x, y) {\n    this.x = x;\n    this.y = y;\n    return this;\n  }\n\n  setSize(size) {\n    this.size = size;\n    return this;\n  }\n\n  plus(element) {\n    this.x += element.x;\n    this.y += element.y;\n    this.size += element.size;\n    return this;\n  }\n\n  divide(value) {\n    this.x /= value;\n    this.y /= value;\n    this.size /= value;\n    return this;\n  }\n}\n\n\n//# sourceURL=webpack:///./src/js/CanvasElement.js?");

/***/ }),

/***/ "./src/js/Introduction.js":
/*!********************************!*\
  !*** ./src/js/Introduction.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Actor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Actor.js */ \"./src/js/Actor.js\");\n/* harmony import */ var _CanvasElement_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CanvasElement.js */ \"./src/js/CanvasElement.js\");\n/* harmony import */ var _Animation_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Animation.js */ \"./src/js/Animation.js\");\n\n\n\n\nconst canvas = document.getElementById('introduction');\nconst ctx = canvas.getContext('2d');\nconst CENTER = {\n  x: canvas.width / 2,\n  y: canvas.height / 2,\n};\n\nconst MAX_ACTORS = 1000;\n\nfunction createStarMovingFromCenter() {\n    const getRandomCoordinate = () => (Math.random() * 2) - 1;\n    const getRandomVector = () => ({\n        x: getRandomCoordinate(),\n        y: getRandomCoordinate(),\n    });\n\n    function drawElement() {\n        ctx.fillStyle = '#FFFFFF';\n        ctx.beginPath();\n        ctx.arc(\n            this.element.x,\n            this.element.y,\n            this.element.size,\n            0,\n            2 * Math.PI\n        );\n        ctx.fill();\n    }\n\n    const star = new _Actor_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n        x: CENTER.x,\n        y: CENTER.y,\n        size: 1,\n        draw: drawElement,\n    });\n\n    const vector = getRandomVector();\n    star.addAnimation(\n        new _Animation_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]((element) => new _CanvasElement_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n            x: element.x + vector.x,\n            y: element.y + vector.y,\n            size: element.size,\n        }))\n    );\n\n    return star;\n}\n\nlet actors = [createStarMovingFromCenter()];\n\nfunction draw() {\n    ctx.clearRect(0, 0, canvas.width, canvas.height);\n    ctx.fillStyle = '#000000';\n    ctx.fillRect(0, 0, canvas.width, canvas.height);\n\n    for (let i = 0; i < actors.length; ++i) {\n        const actor = actors[i];\n        actor.applyAnimations();\n        actor.draw();\n    }\n\n    actors = actors.filter((actor) => {\n        if (actor.element.x < 0)\n            return false;\n\n        if (actor.element.y < 0)\n            return false;\n\n        if (actor.element.x > canvas.width)\n            return false;\n\n        if (actor.element.y > canvas.height)\n            return false;\n\n        return true;\n    });\n\n    if (Math.random() * 100 < 10) {\n        const addActorsNum = Math.random() * 10;\n        if (actors.length < MAX_ACTORS) {\n            for (let i = 0; i < addActorsNum; ++i) {\n                actors.push(createStarMovingFromCenter());\n            }\n        }\n    }\n\n    window.requestAnimationFrame(draw);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (draw);\n\n\n//# sourceURL=webpack:///./src/js/Introduction.js?");

/***/ }),

/***/ "./src/js/Logger.js":
/*!**************************!*\
  !*** ./src/js/Logger.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return createLogger; });\nconst info = (message) => {\n  console.log('info: ', message);\n};\n\nconst error = (message) => {\n  console.log('error: ', message);\n};\n\nconst nop = () => {};\n\nclass Logger {\n\n  constructor() {}\n  \n  enable(isEnabled) {\n    if (isEnabled) {\n      this.info = info;\n      this.error = error;\n      return;\n    }\n\n    this.info = nop;\n    this.error = nop;\n  }\n  \n  info(message) {\n    console.log('info: ', message);\n  }\n  \n  error(message) {\n    console.log('error: ', message);\n  }\n};\n\nlet entity;\n\nfunction createLogger() {\n  if (!entity) {\n    entity = new Logger();\n  }\n\n  return entity;\n}\n\n\n//# sourceURL=webpack:///./src/js/Logger.js?");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Logger.js */ \"./src/js/Logger.js\");\n/* harmony import */ var _Introduction_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Introduction.js */ \"./src/js/Introduction.js\");\n\n\n\nconst log = Object(_Logger_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\nlog.enable(true);\n\t\nlog.info('start');\n\nwindow.onload = _Introduction_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\n\n\n//# sourceURL=webpack:///./src/js/main.js?");

/***/ })

/******/ });