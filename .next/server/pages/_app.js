module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Navbar */ "./components/Navbar.js");
/* harmony import */ var _css_variables_colors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../css-variables/colors */ "./css-variables/colors.js");


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




const Layout = props => __jsx("div", {
  className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4090035595", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary]]])
}, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, null, __jsx("title", {
  className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4090035595", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary]]])
}, "CodeTunes"), __jsx("link", {
  href: "https://fonts.googleapis.com/css2?family=Baloo+Thambi+2&display=swap",
  rel: "stylesheet",
  className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4090035595", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary]]])
}), __jsx("link", {
  rel: "stylesheet",
  href: "https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css",
  className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4090035595", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary]]])
})), __jsx(_Navbar__WEBPACK_IMPORTED_MODULE_3__["default"], null), props.children, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "4090035595",
  dynamic: [_css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary]
}, `*{box-sizing:border-box;margin:0;padding:0;}body{font-family:'Baloo Thambi 2',sans-serif;font-size:16px;font-weight:400;line-height:1.8em;background-color:black;height:100vh;}.container{max-width:1100px;margin:auto;overflow:hidden;}a{-webkit-text-decoration:none;text-decoration:none;color:black;}button{color:white;padding:0.5rem 1rem;border-radius:5px;font-size:1rem;background-color:${_css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary};border:none;cursor:pointer;-webkit-transition:background-color 0.2s ease-in-out;transition:background-color 0.2s ease-in-out;-webkit-transition:-webkit-transform 80ms ease-in;-webkit-transition:transform 80ms ease-in;transition:transform 80ms ease-in;}button:active{-webkit-transform:scale(0.95);-ms-transform:scale(0.95);transform:scale(0.95);}button:focus{outline:none;}button:hover{background-color:#e5305a;}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxDb2RpbmdcXE15UHJvamVjdHNcXGNvZGVycy1qdWtlYm94XFxjb21wb25lbnRzXFxMYXlvdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0J1QixBQUkrQixBQU1tQixBQWF4QixBQU1JLEFBS1QsQUFZVSxBQUlULEFBSVksWUFuQkosQ0FnQnZCLElBM0JjLEtBbkJILEdBa0RYLElBOUJrQixFQW5CTixDQThCUSxRQXpCSCxDQUpqQixJQW1CQSxLQUljLEFBT0csS0F6QkMsT0FtQmxCLEdBT2dELE1BekI1QixPQWtDcEIsV0E5QnlCLHNCQXNCWCxDQXJCQyxXQXNCRSxFQXBCakIsYUFxQitDLGtHQUNYLDhIQUNsQyIsImZpbGUiOiJDOlxcQ29kaW5nXFxNeVByb2plY3RzXFxjb2RlcnMtanVrZWJveFxcY29tcG9uZW50c1xcTGF5b3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IE5hdmJhciBmcm9tICcuL05hdmJhcic7XHJcbmltcG9ydCBjb2xvcnMgZnJvbSAnLi4vY3NzLXZhcmlhYmxlcy9jb2xvcnMnO1xyXG5cclxuXHJcbmNvbnN0IExheW91dCA9IChwcm9wcykgPT4gKFxyXG4gIDxkaXY+XHJcbiAgICA8SGVhZD5cclxuICAgICAgPHRpdGxlPkNvZGVUdW5lczwvdGl0bGU+XHJcbiAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUJhbG9vK1RoYW1iaSsyJmRpc3BsYXk9c3dhcFwiIHJlbD1cInN0eWxlc2hlZXRcIj48L2xpbms+XHJcbiAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9zdGFja3BhdGguYm9vdHN0cmFwY2RuLmNvbS9mb250LWF3ZXNvbWUvNC43LjAvY3NzL2ZvbnQtYXdlc29tZS5taW4uY3NzXCIvPlxyXG4gICAgPC9IZWFkPlxyXG4gICAgPE5hdmJhci8+XHJcbiAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgICBcclxuXHJcbiAgICA8c3R5bGUgZ2xvYmFsIGpzeD57YFxyXG4gICAgXHJcbiAgICAgICoge1xyXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGJvZHkge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnQmFsb28gVGhhbWJpIDInLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjhlbTtcclxuICAgICAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBwdXJwbGU7ICovXHJcbiAgICAgICAgLyogYmFja2dyb3VuZC1jb2xvcjogI2RkMDBmZjsgKi9cclxuICAgICAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOyAqL1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICAgICAgLyogd2lkdGg6IDEwMHZ3OyAqL1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuY29udGFpbmVyIHtcclxuICAgICAgICBtYXgtd2lkdGg6IDExMDBweDtcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgfVxyXG5cclxuICAgICAgYSB7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgfVxyXG5cclxuICAgICAgYnV0dG9uIHtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgcGFkZGluZzogMC41cmVtIDFyZW0gO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtjb2xvcnMucHJpbWFyeX07XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDgwbXMgZWFzZS1pbjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICBidXR0b246YWN0aXZlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBidXR0b246Zm9jdXMge1xyXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIGJ1dHRvbjpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U1MzA1YTtcclxuICAgICAgfVxyXG4gICAgXHJcbiAgICBgfSBcclxuICAgIDwvc3R5bGU+IFxyXG4gIDwvZGl2PlxyXG4pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XHJcbiJdfQ== */
/*@ sourceURL=C:\\Coding\\MyProjects\\coders-jukebox\\components\\Layout.js */`));

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/Logo.js":
/*!****************************!*\
  !*** ./components/Logo.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _css_variables_colors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css-variables/colors */ "./css-variables/colors.js");


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const Logo = () => {
  return __jsx("svg", {
    id: "Layer_1",
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "50 50 240 230",
    x: "0",
    y: "0",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2253611366", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_2__["default"].primary]]])
  }, __jsx("path", {
    d: "M147.1,14.2c-35,0-63.6,27.9-63.6,62.1v1.3c0,7.5,0,16,2.7,23l-0.7,0.7c-2,1.7-2.4,5.1-1.1,8.1L97.5,141\r c1.1,2.9,3.7,4.8,6.1,4.8c0.1,0,0.3,0,0.4,0l17.7-1.6c1.6-0.1,2.8-1,3.7-2.3c1.1-1.9,1.1-4.5,0.1-6.9l-17.5-42.3\r c-1-2.5-2.8-4.2-4.9-4.6c-1.6-0.4-3.1,0-4.2,1l-0.6,0.6c-2.3-5.8-3.4-11.3-3.4-16.6c0-27.3,23.4-49.5,52.3-49.5\r s52.3,22.2,52.3,49.5c0,5.5-1.1,11-3.4,16.6l-0.6-0.6c-1.1-1-2.7-1.4-4.2-1c-2.1,0.4-4,2.2-4.9,4.6l-17.5,42.3\r c-1,2.5-1,5.1,0.1,6.9c0.8,1.4,2.1,2.3,3.7,2.3l17.8,1.4c0.1,0,0.3,0,0.4,0c2.4,0,4.9-1.9,6.1-4.8l13.1-31.6c1.3-3,0.7-6.4-1.1-8.1\r l-0.7-0.7c2.5-6.8,2.5-15.3,2.5-22.8v-1.3C210.6,42,182.1,14.2,147.1,14.2z M199.3,56.6l4.5-1.3c1.6,4,2.7,8.2,3.2,12.6l-5.2,1.4\r C201.7,64.8,200.8,60.7,199.3,56.6z M92.1,69.3l-5.2-1.4c0.6-4.3,1.7-8.5,3.2-12.6l4.5,1.3C93.4,60.7,92.4,64.8,92.1,69.3z\r M103.6,142.7c-1.3,0.1-3-1.2-3.7-3l-13.1-31.5c-0.7-1.9-0.6-3.9,0.4-4.8l9.7-8.8l19.1,47.2L103.6,142.7z M101.9,90.7\r c0.1,0,0.3,0,0.6,0c1.3,0.3,2.4,1.4,3,2.9l17.5,42.2c0.7,1.6,0.6,3.2,0,4.2c-0.4,0.6-0.8,1-1.6,1l-2.4,0.1l-19.8-49l1.4-1.3\r C101,90.8,101.5,90.7,101.9,90.7z M95.9,91.7l-7.5,6.8c-2.1-6.4-2.1-14-2.1-20.9v-1.3c0-1.9,0.1-3.6,0.3-5.5l5.4,1.4\r c0,0.3,0,0.4,0,0.7C92,79.1,93.3,85.2,95.9,91.7z M147.1,20.5c-23.3,0-43.2,13.9-51.3,33.2l-4.4-1.2c9.3-20.8,30.8-35.5,55.7-35.5\r s46.3,14.7,55.7,35.7l-4.4,1.2C190.3,34.4,170.4,20.5,147.1,20.5z M171.2,140.2c-0.7-1.2-0.7-2.7,0-4.2l17.5-42.2\r c0.7-1.6,1.8-2.6,3-2.9c0.1,0,0.4,0,0.6,0c0.4,0,0.8,0.1,1.3,0.4l1.4,1.3l-19.8,49l-2.4-0.4C172.1,141.2,171.7,140.8,171.2,140.2z\r M207.4,108.2l-13.1,31.6c-0.7,1.9-2.4,3.2-3.7,3l-12.6-1l6.5-16h0.1h-0.1l12.6-31.2l9.7,8.8C208,104.3,208.1,106.3,207.4,108.2z\r M198.2,91.7c2.7-6.5,4-12.6,4-18.8c0-0.3,0-0.4,0-0.7l5.4-1.4c0.1,1.7,0.3,3.6,0.3,5.5v1.3c0,6.9,0,14.7-2.1,20.9L198.2,91.7z",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2253611366", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_2__["default"].primary]]]) + " " + "st0"
  }), __jsx("path", {
    d: "M213,185.8h-25v-3.5c0-1.5-1.4-2.8-3.1-2.8h-7v-1.6c0-4.2-3.8-7.6-8.6-7.6h-35.3c-4.3,0-7.8-3.1-7.8-7\r c0-3.8,3.5-7,7.8-7h47.9c4.7,0,8.6-3.4,8.6-7.6v-3.1c0-0.5-0.5-0.9-1.1-0.9s-1.1,0.4-1.1,0.9v3.1c0,3.1-2.9,5.7-6.4,5.7h-47.9\r c-5.5,0-10,4-10,8.9c0,4.9,4.5,8.9,10,8.9h35.3c3.5,0,6.4,2.6,6.4,5.7v1.6h-4.8c-1.7,0-3.1,1.2-3.1,2.8v3.5H84.7\r c-2.9,0-5.3,2.1-5.3,4.7v61.8c0,2.6,2.4,4.7,5.3,4.7H213c2.9,0,5.3-2.1,5.3-4.7v-61.8C218.2,187.9,215.9,185.8,213,185.8z\r M169.9,182.3c0-0.5,0.4-0.9,1-0.9h13.9c0.5,0,1,0.4,1,0.9v3.5h-15.9V182.3z M216.1,252.3c0,1.5-1.4,2.8-3.2,2.8H84.7\r c-1.7,0-3.2-1.3-3.2-2.8v-61.8c0-1.5,1.4-2.8,3.2-2.8h84.2c0,0,0,0,0,0c0,0,0,0,0,0h18c0,0,0,0,0,0c0,0,0,0,0,0h26\r c1.7,0,3.2,1.3,3.2,2.8V252.3z",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2253611366", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_2__["default"].primary]]]) + " " + "st0"
  }), __jsx("path", {
    d: "M206.2,195.6h-13.9c-0.6,0-1.1,0.4-1.1,0.9v12.3c0,0.5,0.5,0.9,1.1,0.9h13.9c0.6,0,1.1-0.4,1.1-0.9v-12.3\r C207.3,196,206.8,195.6,206.2,195.6z M205.2,207.9h-11.8v-10.4h11.8V207.9z",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2253611366", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_2__["default"].primary]]]) + " " + "st0"
  }), __jsx("path", {
    d: "M181.5,195.6h-13.9c-0.6,0-1.1,0.4-1.1,0.9v12.3c0,0.5,0.5,0.9,1.1,0.9h13.9c0.6,0,1.1-0.4,1.1-0.9v-12.3\r C182.6,196,182.1,195.6,181.5,195.6z M180.5,207.9h-11.8v-10.4h11.8V207.9z",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2253611366", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_2__["default"].primary]]]) + " " + "st0"
  }), __jsx("path", {
    d: "M142.9,209.8h13.9c0.6,0,1.1-0.4,1.1-0.9v-12.3c0-0.5-0.5-0.9-1.1-0.9h-13.9c-0.6,0-1.1,0.4-1.1,0.9v12.3\r C141.9,209.4,142.3,209.8,142.9,209.8z M144,197.5h11.8v10.4H144V197.5z",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2253611366", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_2__["default"].primary]]]) + " " + "st0"
  }), __jsx("path", {
    d: "M118.2,209.8h13.9c0.6,0,1.1-0.4,1.1-0.9v-12.3c0-0.5-0.5-0.9-1.1-0.9h-13.9c-0.6,0-1.1,0.4-1.1,0.9v12.3\r C117.2,209.4,117.6,209.8,118.2,209.8z M119.3,197.5H131v10.4h-11.8V197.5z",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2253611366", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_2__["default"].primary]]]) + " " + "st0"
  }), __jsx("path", {
    d: "M107.4,195.6H93.5c-0.6,0-1.1,0.4-1.1,0.9v12.3c0,0.5,0.5,0.9,1.1,0.9h13.9c0.6,0,1.1-0.4,1.1-0.9v-12.3\r C108.5,196,108,195.6,107.4,195.6z M106.3,207.9H94.6v-10.4h11.8V207.9z",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2253611366", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_2__["default"].primary]]]) + " " + "st0"
  }), __jsx("path", {
    d: "M206.2,214.3h-13.9c-0.6,0-1.1,0.4-1.1,0.9v12.3c0,0.5,0.5,0.9,1.1,0.9h13.9c0.6,0,1.1-0.4,1.1-0.9v-12.3\r C207.3,214.7,206.8,214.3,206.2,214.3z M205.2,226.6h-11.8v-10.4h11.8V226.6z",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2253611366", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_2__["default"].primary]]]) + " " + "st0"
  }), __jsx("path", {
    d: "M181.5,214.3h-13.9c-0.6,0-1.1,0.4-1.1,0.9v12.3c0,0.5,0.5,0.9,1.1,0.9h13.9c0.6,0,1.1-0.4,1.1-0.9v-12.3\r C182.6,214.7,182.1,214.3,181.5,214.3z M180.5,226.6h-11.8v-10.4h11.8V226.6z",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2253611366", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_2__["default"].primary]]]) + " " + "st0"
  }), __jsx("path", {
    d: "M142.9,228.5h13.9c0.6,0,1.1-0.4,1.1-0.9v-12.3c0-0.5-0.5-0.9-1.1-0.9h-13.9c-0.6,0-1.1,0.4-1.1,0.9v12.3\r C141.9,228.1,142.3,228.5,142.9,228.5z M144,216.2h11.8v10.4H144V216.2z",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2253611366", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_2__["default"].primary]]]) + " " + "st0"
  }), __jsx("path", {
    d: "M118.2,228.5h13.9c0.6,0,1.1-0.4,1.1-0.9v-12.3c0-0.5-0.5-0.9-1.1-0.9h-13.9c-0.6,0-1.1,0.4-1.1,0.9v12.3\r C117.2,228.1,117.6,228.5,118.2,228.5z M119.3,216.2H131v10.4h-11.8V216.2z",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2253611366", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_2__["default"].primary]]]) + " " + "st0"
  }), __jsx("path", {
    d: "M107.4,214.3H93.5c-0.6,0-1.1,0.4-1.1,0.9v12.3c0,0.5,0.5,0.9,1.1,0.9h13.9c0.6,0,1.1-0.4,1.1-0.9v-12.3\r C108.5,214.7,108,214.3,107.4,214.3z M106.3,226.6H94.6v-10.4h11.8V226.6z",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2253611366", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_2__["default"].primary]]]) + " " + "st0"
  }), __jsx("path", {
    d: "M206.2,233h-13.9c-0.6,0-1.1,0.4-1.1,0.9v12.3c0,0.5,0.5,0.9,1.1,0.9h13.9c0.6,0,1.1-0.4,1.1-0.9v-12.3\r C207.3,233.4,206.8,233,206.2,233z M205.2,245.3h-11.8v-10.4h11.8V245.3z",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2253611366", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_2__["default"].primary]]]) + " " + "st0"
  }), __jsx("path", {
    d: "M107.4,233H93.5c-0.6,0-1.1,0.4-1.1,0.9v12.3c0,0.5,0.5,0.9,1.1,0.9h13.9c0.6,0,1.1-0.4,1.1-0.9v-12.3\r C108.5,233.4,108,233,107.4,233z M106.3,245.3H94.6v-10.4h11.8V245.3z",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2253611366", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_2__["default"].primary]]]) + " " + "st0"
  }), __jsx("path", {
    d: "M181.5,233h-65.4c-0.6,0-1.1,0.4-1.1,0.9v12.3c0,0.5,0.5,0.9,1.1,0.9h65.4c0.6,0,1.1-0.4,1.1-0.9v-12.3\r C182.6,233.4,182.1,233,181.5,233z M180.5,245.3h-63.3v-10.4h63.3V245.3z",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2253611366", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_2__["default"].primary]]]) + " " + "st0"
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2253611366",
    dynamic: [_css_variables_colors__WEBPACK_IMPORTED_MODULE_2__["default"].primary]
  }, `svg.__jsx-style-dynamic-selector{height:40px;width:100px;fill:${_css_variables_colors__WEBPACK_IMPORTED_MODULE_2__["default"].primary};}.st0.__jsx-style-dynamic-selector{fill:white;}@media (max-width:490px){svg.__jsx-style-dynamic-selector{width:80px;}}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxDb2RpbmdcXE15UHJvamVjdHNcXGNvZGVycy1qdWtlYm94XFxjb21wb25lbnRzXFxMb2dvLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdEa0IsQUFHcUIsQUFNRCxBQU9aLFdBTkQsQUFNRSxDQVpZLFlBQ3NCLGtDQUNwQyIsImZpbGUiOiJDOlxcQ29kaW5nXFxNeVByb2plY3RzXFxjb2RlcnMtanVrZWJveFxcY29tcG9uZW50c1xcTG9nby5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjb2xvcnMgZnJvbSAnLi4vY3NzLXZhcmlhYmxlcy9jb2xvcnMnO1xyXG5cclxuXHJcbmNvbnN0IExvZ28gPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzdmcgaWQ9XCJMYXllcl8xXCIgZGF0YS1uYW1lPVwiTGF5ZXIgMVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiNTAgNTAgMjQwIDIzMFwiIHg9XCIwXCIgeT1cIjBcIj5cclxuXHJcbiAgICAgIDxwYXRoIGNsYXNzTmFtZT1cInN0MFwiIGQ9XCJNMTQ3LjEsMTQuMmMtMzUsMC02My42LDI3LjktNjMuNiw2Mi4xdjEuM2MwLDcuNSwwLDE2LDIuNywyM2wtMC43LDAuN2MtMiwxLjctMi40LDUuMS0xLjEsOC4xTDk3LjUsMTQxXHJcblx0XHRjMS4xLDIuOSwzLjcsNC44LDYuMSw0LjhjMC4xLDAsMC4zLDAsMC40LDBsMTcuNy0xLjZjMS42LTAuMSwyLjgtMSwzLjctMi4zYzEuMS0xLjksMS4xLTQuNSwwLjEtNi45bC0xNy41LTQyLjNcclxuXHRcdGMtMS0yLjUtMi44LTQuMi00LjktNC42Yy0xLjYtMC40LTMuMSwwLTQuMiwxbC0wLjYsMC42Yy0yLjMtNS44LTMuNC0xMS4zLTMuNC0xNi42YzAtMjcuMywyMy40LTQ5LjUsNTIuMy00OS41XHJcblx0XHRzNTIuMywyMi4yLDUyLjMsNDkuNWMwLDUuNS0xLjEsMTEtMy40LDE2LjZsLTAuNi0wLjZjLTEuMS0xLTIuNy0xLjQtNC4yLTFjLTIuMSwwLjQtNCwyLjItNC45LDQuNmwtMTcuNSw0Mi4zXHJcblx0XHRjLTEsMi41LTEsNS4xLDAuMSw2LjljMC44LDEuNCwyLjEsMi4zLDMuNywyLjNsMTcuOCwxLjRjMC4xLDAsMC4zLDAsMC40LDBjMi40LDAsNC45LTEuOSw2LjEtNC44bDEzLjEtMzEuNmMxLjMtMywwLjctNi40LTEuMS04LjFcclxuXHRcdGwtMC43LTAuN2MyLjUtNi44LDIuNS0xNS4zLDIuNS0yMi44di0xLjNDMjEwLjYsNDIsMTgyLjEsMTQuMiwxNDcuMSwxNC4yeiBNMTk5LjMsNTYuNmw0LjUtMS4zYzEuNiw0LDIuNyw4LjIsMy4yLDEyLjZsLTUuMiwxLjRcclxuXHRcdEMyMDEuNyw2NC44LDIwMC44LDYwLjcsMTk5LjMsNTYuNnogTTkyLjEsNjkuM2wtNS4yLTEuNGMwLjYtNC4zLDEuNy04LjUsMy4yLTEyLjZsNC41LDEuM0M5My40LDYwLjcsOTIuNCw2NC44LDkyLjEsNjkuM3pcclxuXHRcdCBNMTAzLjYsMTQyLjdjLTEuMywwLjEtMy0xLjItMy43LTNsLTEzLjEtMzEuNWMtMC43LTEuOS0wLjYtMy45LDAuNC00LjhsOS43LTguOGwxOS4xLDQ3LjJMMTAzLjYsMTQyLjd6IE0xMDEuOSw5MC43XHJcblx0XHRjMC4xLDAsMC4zLDAsMC42LDBjMS4zLDAuMywyLjQsMS40LDMsMi45bDE3LjUsNDIuMmMwLjcsMS42LDAuNiwzLjIsMCw0LjJjLTAuNCwwLjYtMC44LDEtMS42LDFsLTIuNCwwLjFsLTE5LjgtNDlsMS40LTEuM1xyXG5cdFx0QzEwMSw5MC44LDEwMS41LDkwLjcsMTAxLjksOTAuN3ogTTk1LjksOTEuN2wtNy41LDYuOGMtMi4xLTYuNC0yLjEtMTQtMi4xLTIwLjl2LTEuM2MwLTEuOSwwLjEtMy42LDAuMy01LjVsNS40LDEuNFxyXG5cdFx0YzAsMC4zLDAsMC40LDAsMC43QzkyLDc5LjEsOTMuMyw4NS4yLDk1LjksOTEuN3ogTTE0Ny4xLDIwLjVjLTIzLjMsMC00My4yLDEzLjktNTEuMywzMy4ybC00LjQtMS4yYzkuMy0yMC44LDMwLjgtMzUuNSw1NS43LTM1LjVcclxuXHRcdHM0Ni4zLDE0LjcsNTUuNywzNS43bC00LjQsMS4yQzE5MC4zLDM0LjQsMTcwLjQsMjAuNSwxNDcuMSwyMC41eiBNMTcxLjIsMTQwLjJjLTAuNy0xLjItMC43LTIuNywwLTQuMmwxNy41LTQyLjJcclxuXHRcdGMwLjctMS42LDEuOC0yLjYsMy0yLjljMC4xLDAsMC40LDAsMC42LDBjMC40LDAsMC44LDAuMSwxLjMsMC40bDEuNCwxLjNsLTE5LjgsNDlsLTIuNC0wLjRDMTcyLjEsMTQxLjIsMTcxLjcsMTQwLjgsMTcxLjIsMTQwLjJ6XHJcblx0XHQgTTIwNy40LDEwOC4ybC0xMy4xLDMxLjZjLTAuNywxLjktMi40LDMuMi0zLjcsM2wtMTIuNi0xbDYuNS0xNmgwLjFoLTAuMWwxMi42LTMxLjJsOS43LDguOEMyMDgsMTA0LjMsMjA4LjEsMTA2LjMsMjA3LjQsMTA4LjJ6XHJcblx0XHQgTTE5OC4yLDkxLjdjMi43LTYuNSw0LTEyLjYsNC0xOC44YzAtMC4zLDAtMC40LDAtMC43bDUuNC0xLjRjMC4xLDEuNywwLjMsMy42LDAuMyw1LjV2MS4zYzAsNi45LDAsMTQuNy0yLjEsMjAuOUwxOTguMiw5MS43elwiLz5cclxuICAgICAgPHBhdGggY2xhc3NOYW1lPVwic3QwXCIgZD1cIk0yMTMsMTg1LjhoLTI1di0zLjVjMC0xLjUtMS40LTIuOC0zLjEtMi44aC03di0xLjZjMC00LjItMy44LTcuNi04LjYtNy42aC0zNS4zYy00LjMsMC03LjgtMy4xLTcuOC03XHJcblx0XHRcdGMwLTMuOCwzLjUtNyw3LjgtN2g0Ny45YzQuNywwLDguNi0zLjQsOC42LTcuNnYtMy4xYzAtMC41LTAuNS0wLjktMS4xLTAuOXMtMS4xLDAuNC0xLjEsMC45djMuMWMwLDMuMS0yLjksNS43LTYuNCw1LjdoLTQ3LjlcclxuXHRcdFx0Yy01LjUsMC0xMCw0LTEwLDguOWMwLDQuOSw0LjUsOC45LDEwLDguOWgzNS4zYzMuNSwwLDYuNCwyLjYsNi40LDUuN3YxLjZoLTQuOGMtMS43LDAtMy4xLDEuMi0zLjEsMi44djMuNUg4NC43XHJcblx0XHRcdGMtMi45LDAtNS4zLDIuMS01LjMsNC43djYxLjhjMCwyLjYsMi40LDQuNyw1LjMsNC43SDIxM2MyLjksMCw1LjMtMi4xLDUuMy00Ljd2LTYxLjhDMjE4LjIsMTg3LjksMjE1LjksMTg1LjgsMjEzLDE4NS44elxyXG5cdFx0XHQgTTE2OS45LDE4Mi4zYzAtMC41LDAuNC0wLjksMS0wLjloMTMuOWMwLjUsMCwxLDAuNCwxLDAuOXYzLjVoLTE1LjlWMTgyLjN6IE0yMTYuMSwyNTIuM2MwLDEuNS0xLjQsMi44LTMuMiwyLjhIODQuN1xyXG5cdFx0XHRjLTEuNywwLTMuMi0xLjMtMy4yLTIuOHYtNjEuOGMwLTEuNSwxLjQtMi44LDMuMi0yLjhoODQuMmMwLDAsMCwwLDAsMGMwLDAsMCwwLDAsMGgxOGMwLDAsMCwwLDAsMGMwLDAsMCwwLDAsMGgyNlxyXG5cdFx0XHRjMS43LDAsMy4yLDEuMywzLjIsMi44VjI1Mi4zelwiLz5cclxuICAgICAgPHBhdGggY2xhc3NOYW1lPVwic3QwXCIgZD1cIk0yMDYuMiwxOTUuNmgtMTMuOWMtMC42LDAtMS4xLDAuNC0xLjEsMC45djEyLjNjMCwwLjUsMC41LDAuOSwxLjEsMC45aDEzLjljMC42LDAsMS4xLTAuNCwxLjEtMC45di0xMi4zXHJcblx0XHRcdEMyMDcuMywxOTYsMjA2LjgsMTk1LjYsMjA2LjIsMTk1LjZ6IE0yMDUuMiwyMDcuOWgtMTEuOHYtMTAuNGgxMS44VjIwNy45elwiLz5cclxuICAgICAgPHBhdGggY2xhc3NOYW1lPVwic3QwXCIgZD1cIk0xODEuNSwxOTUuNmgtMTMuOWMtMC42LDAtMS4xLDAuNC0xLjEsMC45djEyLjNjMCwwLjUsMC41LDAuOSwxLjEsMC45aDEzLjljMC42LDAsMS4xLTAuNCwxLjEtMC45di0xMi4zXHJcblx0XHRcdEMxODIuNiwxOTYsMTgyLjEsMTk1LjYsMTgxLjUsMTk1LjZ6IE0xODAuNSwyMDcuOWgtMTEuOHYtMTAuNGgxMS44VjIwNy45elwiLz5cclxuICAgICAgPHBhdGggY2xhc3NOYW1lPVwic3QwXCIgZD1cIk0xNDIuOSwyMDkuOGgxMy45YzAuNiwwLDEuMS0wLjQsMS4xLTAuOXYtMTIuM2MwLTAuNS0wLjUtMC45LTEuMS0wLjloLTEzLjljLTAuNiwwLTEuMSwwLjQtMS4xLDAuOXYxMi4zXHJcblx0XHRcdEMxNDEuOSwyMDkuNCwxNDIuMywyMDkuOCwxNDIuOSwyMDkuOHogTTE0NCwxOTcuNWgxMS44djEwLjRIMTQ0VjE5Ny41elwiLz5cclxuICAgICAgPHBhdGggY2xhc3NOYW1lPVwic3QwXCIgZD1cIk0xMTguMiwyMDkuOGgxMy45YzAuNiwwLDEuMS0wLjQsMS4xLTAuOXYtMTIuM2MwLTAuNS0wLjUtMC45LTEuMS0wLjloLTEzLjljLTAuNiwwLTEuMSwwLjQtMS4xLDAuOXYxMi4zXHJcblx0XHRcdEMxMTcuMiwyMDkuNCwxMTcuNiwyMDkuOCwxMTguMiwyMDkuOHogTTExOS4zLDE5Ny41SDEzMXYxMC40aC0xMS44VjE5Ny41elwiLz5cclxuICAgICAgPHBhdGggY2xhc3NOYW1lPVwic3QwXCIgZD1cIk0xMDcuNCwxOTUuNkg5My41Yy0wLjYsMC0xLjEsMC40LTEuMSwwLjl2MTIuM2MwLDAuNSwwLjUsMC45LDEuMSwwLjloMTMuOWMwLjYsMCwxLjEtMC40LDEuMS0wLjl2LTEyLjNcclxuXHRcdFx0QzEwOC41LDE5NiwxMDgsMTk1LjYsMTA3LjQsMTk1LjZ6IE0xMDYuMywyMDcuOUg5NC42di0xMC40aDExLjhWMjA3Ljl6XCIvPlxyXG4gICAgICA8cGF0aCBjbGFzc05hbWU9XCJzdDBcIiBkPVwiTTIwNi4yLDIxNC4zaC0xMy45Yy0wLjYsMC0xLjEsMC40LTEuMSwwLjl2MTIuM2MwLDAuNSwwLjUsMC45LDEuMSwwLjloMTMuOWMwLjYsMCwxLjEtMC40LDEuMS0wLjl2LTEyLjNcclxuXHRcdFx0QzIwNy4zLDIxNC43LDIwNi44LDIxNC4zLDIwNi4yLDIxNC4zeiBNMjA1LjIsMjI2LjZoLTExLjh2LTEwLjRoMTEuOFYyMjYuNnpcIi8+XHJcbiAgICAgIDxwYXRoIGNsYXNzTmFtZT1cInN0MFwiIGQ9XCJNMTgxLjUsMjE0LjNoLTEzLjljLTAuNiwwLTEuMSwwLjQtMS4xLDAuOXYxMi4zYzAsMC41LDAuNSwwLjksMS4xLDAuOWgxMy45YzAuNiwwLDEuMS0wLjQsMS4xLTAuOXYtMTIuM1xyXG5cdFx0XHRDMTgyLjYsMjE0LjcsMTgyLjEsMjE0LjMsMTgxLjUsMjE0LjN6IE0xODAuNSwyMjYuNmgtMTEuOHYtMTAuNGgxMS44VjIyNi42elwiLz5cclxuICAgICAgPHBhdGggY2xhc3NOYW1lPVwic3QwXCIgZD1cIk0xNDIuOSwyMjguNWgxMy45YzAuNiwwLDEuMS0wLjQsMS4xLTAuOXYtMTIuM2MwLTAuNS0wLjUtMC45LTEuMS0wLjloLTEzLjljLTAuNiwwLTEuMSwwLjQtMS4xLDAuOXYxMi4zXHJcblx0XHRcdEMxNDEuOSwyMjguMSwxNDIuMywyMjguNSwxNDIuOSwyMjguNXogTTE0NCwyMTYuMmgxMS44djEwLjRIMTQ0VjIxNi4yelwiLz5cclxuICAgICAgPHBhdGggY2xhc3NOYW1lPVwic3QwXCIgZD1cIk0xMTguMiwyMjguNWgxMy45YzAuNiwwLDEuMS0wLjQsMS4xLTAuOXYtMTIuM2MwLTAuNS0wLjUtMC45LTEuMS0wLjloLTEzLjljLTAuNiwwLTEuMSwwLjQtMS4xLDAuOXYxMi4zXHJcblx0XHRcdEMxMTcuMiwyMjguMSwxMTcuNiwyMjguNSwxMTguMiwyMjguNXogTTExOS4zLDIxNi4ySDEzMXYxMC40aC0xMS44VjIxNi4yelwiLz5cclxuICAgICAgPHBhdGggY2xhc3NOYW1lPVwic3QwXCIgZD1cIk0xMDcuNCwyMTQuM0g5My41Yy0wLjYsMC0xLjEsMC40LTEuMSwwLjl2MTIuM2MwLDAuNSwwLjUsMC45LDEuMSwwLjloMTMuOWMwLjYsMCwxLjEtMC40LDEuMS0wLjl2LTEyLjNcclxuXHRcdFx0QzEwOC41LDIxNC43LDEwOCwyMTQuMywxMDcuNCwyMTQuM3ogTTEwNi4zLDIyNi42SDk0LjZ2LTEwLjRoMTEuOFYyMjYuNnpcIi8+XHJcbiAgICAgIDxwYXRoIGNsYXNzTmFtZT1cInN0MFwiIGQ9XCJNMjA2LjIsMjMzaC0xMy45Yy0wLjYsMC0xLjEsMC40LTEuMSwwLjl2MTIuM2MwLDAuNSwwLjUsMC45LDEuMSwwLjloMTMuOWMwLjYsMCwxLjEtMC40LDEuMS0wLjl2LTEyLjNcclxuXHRcdFx0QzIwNy4zLDIzMy40LDIwNi44LDIzMywyMDYuMiwyMzN6IE0yMDUuMiwyNDUuM2gtMTEuOHYtMTAuNGgxMS44VjI0NS4zelwiLz5cclxuICAgICAgPHBhdGggY2xhc3NOYW1lPVwic3QwXCIgZD1cIk0xMDcuNCwyMzNIOTMuNWMtMC42LDAtMS4xLDAuNC0xLjEsMC45djEyLjNjMCwwLjUsMC41LDAuOSwxLjEsMC45aDEzLjljMC42LDAsMS4xLTAuNCwxLjEtMC45di0xMi4zXHJcblx0XHRcdEMxMDguNSwyMzMuNCwxMDgsMjMzLDEwNy40LDIzM3ogTTEwNi4zLDI0NS4zSDk0LjZ2LTEwLjRoMTEuOFYyNDUuM3pcIi8+XHJcbiAgICAgIDxwYXRoIGNsYXNzTmFtZT1cInN0MFwiIGQ9XCJNMTgxLjUsMjMzaC02NS40Yy0wLjYsMC0xLjEsMC40LTEuMSwwLjl2MTIuM2MwLDAuNSwwLjUsMC45LDEuMSwwLjloNjUuNGMwLjYsMCwxLjEtMC40LDEuMS0wLjl2LTEyLjNcclxuXHRcdFx0QzE4Mi42LDIzMy40LDE4Mi4xLDIzMywxODEuNSwyMzN6IE0xODAuNSwyNDUuM2gtNjMuM3YtMTAuNGg2My4zVjI0NS4zelwiLz5cclxuICAgIFxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgIHN2ZyB7XHJcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgICBmaWxsOiAke2NvbG9ycy5wcmltYXJ5fTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnN0MCB7XHJcbiAgICAgICAgZmlsbDogd2hpdGU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8qIE1lZGlhIHF1ZXJpZXMgKi9cclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ5MHB4KXtcclxuICAgICAgICBzdmcge1xyXG4gICAgICAgICAgd2lkdGg6IDgwcHhcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgYH08L3N0eWxlPlxyXG4gICAgXHJcbiAgICBcclxuICAgIFxyXG4gICAgPC9zdmc+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dvO1xyXG4iXX0= */
/*@ sourceURL=C:\\Coding\\MyProjects\\coders-jukebox\\components\\Logo.js */`));
};

/* harmony default export */ __webpack_exports__["default"] = (Logo);

/***/ }),

/***/ "./components/Navbar.js":
/*!******************************!*\
  !*** ./components/Navbar.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _context_GlobalContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../context/GlobalContext */ "./context/GlobalContext.js");
/* harmony import */ var _UserSearch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./UserSearch */ "./components/UserSearch.js");
/* harmony import */ var _css_variables_colors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../css-variables/colors */ "./css-variables/colors.js");
/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Logo */ "./components/Logo.js");


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;








const Navbar = () => {
  const {
    authState,
    currentUser,
    fetchProfileUser,
    logout
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context_GlobalContext__WEBPACK_IMPORTED_MODULE_4__["GlobalContext"]);

  const logoutHandler = () => {
    logout();
  };

  const searchUserHandler = () => {
    console.log('searchUserHandler called');
  };

  const profileNavClickHandler = () => {
    fetchProfileUser(currentUser.id, false);
    hamburgerHandler();
  };

  const hamburgerHandler = () => {
    document.getElementById('hamburger').classList.toggle('open');
    document.getElementById('nav-menu').classList.toggle('dropdown');
  };

  return __jsx("nav", {
    id: "navbar",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3222711227", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_6__["default"].gradient, _css_variables_colors__WEBPACK_IMPORTED_MODULE_6__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_6__["default"].secondary]]])
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3222711227", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_6__["default"].gradient, _css_variables_colors__WEBPACK_IMPORTED_MODULE_6__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_6__["default"].secondary]]]) + " " + "container"
  }, __jsx("div", {
    id: "nav-content",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3222711227", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_6__["default"].gradient, _css_variables_colors__WEBPACK_IMPORTED_MODULE_6__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_6__["default"].secondary]]])
  }, __jsx("div", {
    id: "brand",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3222711227", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_6__["default"].gradient, _css_variables_colors__WEBPACK_IMPORTED_MODULE_6__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_6__["default"].secondary]]])
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/"
  }, __jsx("a", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3222711227", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_6__["default"].gradient, _css_variables_colors__WEBPACK_IMPORTED_MODULE_6__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_6__["default"].secondary]]])
  }, __jsx("h1", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3222711227", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_6__["default"].gradient, _css_variables_colors__WEBPACK_IMPORTED_MODULE_6__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_6__["default"].secondary]]])
  }, "CodeTunes")))), __jsx("div", {
    id: "logo",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3222711227", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_6__["default"].gradient, _css_variables_colors__WEBPACK_IMPORTED_MODULE_6__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_6__["default"].secondary]]])
  }, __jsx(_Logo__WEBPACK_IMPORTED_MODULE_7__["default"], null)), __jsx(_UserSearch__WEBPACK_IMPORTED_MODULE_5__["default"], null), __jsx("ul", {
    id: "nav-menu",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3222711227", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_6__["default"].gradient, _css_variables_colors__WEBPACK_IMPORTED_MODULE_6__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_6__["default"].secondary]]])
  }, authState.authenticated && currentUser !== null && __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/profile/[userId]",
    as: `/profile/${currentUser.id}`
  }, __jsx("a", {
    onClick: profileNavClickHandler,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3222711227", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_6__["default"].gradient, _css_variables_colors__WEBPACK_IMPORTED_MODULE_6__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_6__["default"].secondary]]]) + " " + "nav-item"
  }, __jsx("i", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3222711227", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_6__["default"].gradient, _css_variables_colors__WEBPACK_IMPORTED_MODULE_6__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_6__["default"].secondary]]]) + " " + "fa fa-user"
  }), "Profile")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/about"
  }, __jsx("a", {
    onClick: hamburgerHandler,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3222711227", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_6__["default"].gradient, _css_variables_colors__WEBPACK_IMPORTED_MODULE_6__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_6__["default"].secondary]]]) + " " + "nav-item"
  }, __jsx("i", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3222711227", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_6__["default"].gradient, _css_variables_colors__WEBPACK_IMPORTED_MODULE_6__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_6__["default"].secondary]]]) + " " + "fa fa-info"
  }), "About")), !authState.authenticated && __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/auth"
  }, __jsx("a", {
    onClick: hamburgerHandler,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3222711227", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_6__["default"].gradient, _css_variables_colors__WEBPACK_IMPORTED_MODULE_6__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_6__["default"].secondary]]]) + " " + "nav-item"
  }, __jsx("i", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3222711227", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_6__["default"].gradient, _css_variables_colors__WEBPACK_IMPORTED_MODULE_6__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_6__["default"].secondary]]]) + " " + "fa fa-sign-in"
  }), "Login")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/auth"
  }, __jsx("a", {
    onClick: hamburgerHandler,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3222711227", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_6__["default"].gradient, _css_variables_colors__WEBPACK_IMPORTED_MODULE_6__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_6__["default"].secondary]]]) + " " + "nav-item"
  }, __jsx("i", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3222711227", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_6__["default"].gradient, _css_variables_colors__WEBPACK_IMPORTED_MODULE_6__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_6__["default"].secondary]]]) + " " + "fa fa-user-plus"
  }), "Register"))), authState.authenticated && __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/"
  }, __jsx("a", {
    onClick: logoutHandler,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3222711227", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_6__["default"].gradient, _css_variables_colors__WEBPACK_IMPORTED_MODULE_6__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_6__["default"].secondary]]]) + " " + "nav-item"
  }, __jsx("i", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3222711227", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_6__["default"].gradient, _css_variables_colors__WEBPACK_IMPORTED_MODULE_6__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_6__["default"].secondary]]]) + " " + "fa fa-sign-out"
  }), "Logout"))), __jsx("div", {
    id: "hamburger",
    onClick: hamburgerHandler,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3222711227", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_6__["default"].gradient, _css_variables_colors__WEBPACK_IMPORTED_MODULE_6__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_6__["default"].secondary]]])
  }, __jsx("div", {
    id: "line1",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3222711227", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_6__["default"].gradient, _css_variables_colors__WEBPACK_IMPORTED_MODULE_6__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_6__["default"].secondary]]]) + " " + "line"
  }), __jsx("div", {
    id: "line2",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3222711227", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_6__["default"].gradient, _css_variables_colors__WEBPACK_IMPORTED_MODULE_6__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_6__["default"].secondary]]]) + " " + "line"
  }), __jsx("div", {
    id: "line3",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3222711227", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_6__["default"].gradient, _css_variables_colors__WEBPACK_IMPORTED_MODULE_6__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_6__["default"].secondary]]]) + " " + "line"
  })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3222711227",
    dynamic: [_css_variables_colors__WEBPACK_IMPORTED_MODULE_6__["default"].gradient, _css_variables_colors__WEBPACK_IMPORTED_MODULE_6__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_6__["default"].secondary]
  }, `#navbar.__jsx-style-dynamic-selector{padding:1.5rem 0;border-bottom:1px solid black;background:${_css_variables_colors__WEBPACK_IMPORTED_MODULE_6__["default"].gradient};}#nav-content.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:auto;}#nav-menu.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}#brand.__jsx-style-dynamic-selector h1.__jsx-style-dynamic-selector{color:white;font-size:2rem;text-transform:uppercase;-webkit-letter-spacing:0.3rem;-moz-letter-spacing:0.3rem;-ms-letter-spacing:0.3rem;letter-spacing:0.3rem;}.nav-item.__jsx-style-dynamic-selector{color:white;margin:0 1rem;font-weight:400;-webkit-transition:text-shadow 0.2s;transition:text-shadow 0.2s;}.nav-item.__jsx-style-dynamic-selector:hover{text-shadow:0px 0px 8px rgb(255,255,255);}i.__jsx-style-dynamic-selector{display:none;}#search.__jsx-style-dynamic-selector{width:50%;}#searchbar.__jsx-style-dynamic-selector{width:100%;}label.__jsx-style-dynamic-selector{position:absolute;top:10px;left:12px;}#logo.__jsx-style-dynamic-selector{display:none;}@media (max-width:1150px){#nav-content.__jsx-style-dynamic-selector{width:90%;}h1.__jsx-style-dynamic-selector{margin-left:2rem;}}@media (max-width:1100px){#nav-content.__jsx-style-dynamic-selector{width:97%;}}@media (max-width:950px){body.__jsx-style-dynamic-selector{overflow-x:hidden;}#navbar.__jsx-style-dynamic-selector{position:relative;}#nav-menu.__jsx-style-dynamic-selector{z-index:101;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;position:absolute;top:100%;right:0px;width:33vw;-webkit-clip-path:circle(0px at top right);clip-path:circle(0px at top right);-webkit-transition:clip-path 0.7s ease;transition:clip-path 0.7s ease;-webkit-box-shadow:-11px 10px 19px -10px rgba(0,0,0,0.27);-moz-box-shadow:-11px 10px 19px -10px rgba(0,0,0,0.27);box-shadow:-11px 10px 19px -10px rgba(0,0,0,0.27);background:${_css_variables_colors__WEBPACK_IMPORTED_MODULE_6__["default"].primary};}#nav-menu.dropdown.__jsx-style-dynamic-selector{-webkit-clip-path:circle(150% at top right);clip-path:circle(150% at top right);}.nav-item.__jsx-style-dynamic-selector{padding:2rem 3rem;display:block;text-transform:uppercase;border-bottom:1px solid #ff6b8d;margin:0;font-size:1.3rem;}i.__jsx-style-dynamic-selector{display:inline-block;margin-right:1rem;width:1.5rem;font-size:1.5rem;text-align:center;height:100%;padding-top:0.5rem;}.nav-item.__jsx-style-dynamic-selector:hover{background:${_css_variables_colors__WEBPACK_IMPORTED_MODULE_6__["default"].secondary};}.line.__jsx-style-dynamic-selector{width:30px;height:3px;background-color:white;margin:5px;border-radius:3px;-webkit-transition:all ease 0.5s;transition:all ease 0.5s;}#hamburger.__jsx-style-dynamic-selector{cursor:pointer;}#hamburger.open.__jsx-style-dynamic-selector #line1.__jsx-style-dynamic-selector{-webkit-transform:rotate(-45deg) translateY(11.5px) scaleX(0.9);-ms-transform:rotate(-45deg) translateY(11.5px) scaleX(0.9);transform:rotate(-45deg) translateY(11.5px) scaleX(0.9);}#hamburger.open.__jsx-style-dynamic-selector #line2.__jsx-style-dynamic-selector{opacity:0;}#hamburger.open.__jsx-style-dynamic-selector #line3.__jsx-style-dynamic-selector{-webkit-transform:rotate(45deg) translateY(-11.5px) scaleX(0.9);-ms-transform:rotate(45deg) translateY(-11.5px) scaleX(0.9);transform:rotate(45deg) translateY(-11.5px) scaleX(0.9);}}@media (max-width:750px){#main-searchbar.__jsx-style-dynamic-selector{margin:auto;}}@media (max-width:690px){#main-searchbar.__jsx-style-dynamic-selector{margin:0;}#nav-menu.__jsx-style-dynamic-selector{width:40%;}}@media (max-width:600px){#brand.__jsx-style-dynamic-selector{display:none;}#logo.__jsx-style-dynamic-selector{display:inline;}}@media (max-width:570px){#nav-menu.__jsx-style-dynamic-selector{width:45%;}}@media (max-width:500px){#nav-menu.__jsx-style-dynamic-selector{width:50%;}}@media (max-width:450px){#nav-menu.__jsx-style-dynamic-selector{width:60%;}}@media (max-width:375px){.nav-item.__jsx-style-dynamic-selector{padding:2rem 2rem;}}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxDb2RpbmdcXE15UHJvamVjdHNcXGNvZGVycy1qdWtlYm94XFxjb21wb25lbnRzXFxOYXZiYXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUdvQixBQUk4QixBQVNKLEFBT0EsQUFLRCxBQU9BLEFBTytCLEFBSTlCLEFBSUgsQUFJQyxBQUlPLEFBTUwsQUFNRCxBQUlPLEFBVVAsQUFNUSxBQUlBLEFBSU4sQUFnQndCLEFBSWxCLEFBU0csQUFXaUIsQUFJM0IsQUFTSSxBQUl5QyxBQUk5QyxBQUk4QyxBQU81QyxBQU1ILEFBSUMsQUFNRyxBQUlFLEFBTUwsQUFNQSxBQU9BLEFBTVEsU0F0Q3BCLENBOUhGLEFBb0JFLEFBY0EsQUEyRUEsQUFxQkEsQUFnQkEsQUFNQSxBQU9BLENBM0pGLEFBd0ZlLENBbEhFLEFBT0QsQUErRFUsQUF3RXhCLENBNUhGLEFBa0JBLEFBMEhFLEVBbkNBLEFBdUNBLEVBdkw4QixBQW1FOUIsQ0FoQlMsQUFnQ1QsQUFJQSxBQXdCZ0IsQUFpR2hCLEdBeEZvQixDQWdCSyxJQTNHVCxDQVBTLEFBOEJmLEtBNERpQixLQTNEN0IsRUFvRWlCLENBVWYsQ0FoR0YsQ0FMOEIsR0EyR2YsRUF2STJCLEtBcUJsQixBQW1HSCxJQWdCQyxDQXpCYyxZQVdkLEtBbkhVLEFBT0EsQUEySEgsTUFoQzNCLE9BdEdGLEFBd0hnQixFQVhILENBdEJTLFFBdUJELENBV0UsT0EvRnZCLEVBOERhLE9BdUJYLEVBdEJZLENBaUNaLFNBaENhLEtBNkNiLE1BNUNxQyxtQkF4RXZDLHVCQTRIRSxBQVFBLFNBbEptQixBQU9yQiwyQkFnRm1DLGtFQXRGckIsSUF1RmdELFFBdEY5RCxrREF1RjJELHVEQUNMLGtEQUNWLHdDQUUxQyIsImZpbGUiOiJDOlxcQ29kaW5nXFxNeVByb2plY3RzXFxjb2RlcnMtanVrZWJveFxcY29tcG9uZW50c1xcTmF2YmFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEdsb2JhbENvbnRleHR9IGZyb20gJy4uL2NvbnRleHQvR2xvYmFsQ29udGV4dCc7XHJcbmltcG9ydCBVc2VyU2VhcmNoIGZyb20gJy4vVXNlclNlYXJjaCc7XHJcbmltcG9ydCBjb2xvcnMgZnJvbSAnLi4vY3NzLXZhcmlhYmxlcy9jb2xvcnMnXHJcbmltcG9ydCBMb2dvIGZyb20gJy4vTG9nbyc7XHJcblxyXG5cclxuY29uc3QgTmF2YmFyID0gKCkgPT4ge1xyXG5cclxuICBjb25zdCB7IGF1dGhTdGF0ZSwgY3VycmVudFVzZXIsIGZldGNoUHJvZmlsZVVzZXIsIGxvZ291dCB9ID0gdXNlQ29udGV4dChHbG9iYWxDb250ZXh0KTtcclxuXHJcbiAgY29uc3QgbG9nb3V0SGFuZGxlciA9ICgpID0+IHtcclxuICAgIGxvZ291dCgpO1xyXG4gIH07XHJcbiAgXHJcbiAgY29uc3Qgc2VhcmNoVXNlckhhbmRsZXIgPSAoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZygnc2VhcmNoVXNlckhhbmRsZXIgY2FsbGVkJyk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBwcm9maWxlTmF2Q2xpY2tIYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgZmV0Y2hQcm9maWxlVXNlcihjdXJyZW50VXNlci5pZCwgZmFsc2UpO1xyXG4gICAgaGFtYnVyZ2VySGFuZGxlcigpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFtYnVyZ2VySGFuZGxlciA9ICgpID0+IHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoYW1idXJnZXInKS5jbGFzc0xpc3QudG9nZ2xlKCdvcGVuJyk7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmF2LW1lbnUnKS5jbGFzc0xpc3QudG9nZ2xlKCdkcm9wZG93bicpO1xyXG4gIH1cclxuICBcclxuXHJcbiAgcmV0dXJuICggICAgXHJcbiAgICAgIDxuYXYgaWQ9XCJuYXZiYXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGRpdiBpZD1cIm5hdi1jb250ZW50XCI+XHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJicmFuZFwiPlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgICAgPGgxPkNvZGVUdW5lczwvaDE+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBpZD1cImxvZ29cIj5cclxuICAgICAgICAgICAgICA8TG9nby8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPFVzZXJTZWFyY2ggLz5cclxuXHJcbiAgICAgICAgICAgIDx1bCBpZD1cIm5hdi1tZW51XCI+XHJcbiAgICAgICAgICAgIHthdXRoU3RhdGUuYXV0aGVudGljYXRlZCAmJiBjdXJyZW50VXNlciAhPT0gbnVsbCAmJlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL3Byb2ZpbGUvW3VzZXJJZF1cIiBhcz17YC9wcm9maWxlLyR7Y3VycmVudFVzZXIuaWR9YH0+XHJcbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIiBvbkNsaWNrPXtwcm9maWxlTmF2Q2xpY2tIYW5kbGVyfT5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXVzZXJcIj48L2k+IFxyXG4gICAgICAgICAgICAgICAgUHJvZmlsZVxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYWJvdXRcIj5cclxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiIG9uQ2xpY2s9e2hhbWJ1cmdlckhhbmRsZXJ9PlxyXG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtaW5mb1wiPjwvaT4gXHJcbiAgICAgICAgICAgICAgICBBYm91dFxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICB7IWF1dGhTdGF0ZS5hdXRoZW50aWNhdGVkICYmIFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYXV0aFwiPlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIiBvbkNsaWNrPXtoYW1idXJnZXJIYW5kbGVyfT5cclxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtc2lnbi1pblwiPjwvaT4gXHJcbiAgICAgICAgICAgICAgICAgIExvZ2luXHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYXV0aFwiPlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIiBvbkNsaWNrPXtoYW1idXJnZXJIYW5kbGVyfT5cclxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtdXNlci1wbHVzXCI+PC9pPiBcclxuICAgICAgICAgICAgICAgICAgUmVnaXN0ZXJcclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHthdXRoU3RhdGUuYXV0aGVudGljYXRlZCAmJlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiIG9uQ2xpY2s9e2xvZ291dEhhbmRsZXJ9PlxyXG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1zaWduLW91dFwiPjwvaT4gXHJcbiAgICAgICAgICAgICAgICAgIExvZ291dFxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPGRpdiBpZD1cImhhbWJ1cmdlclwiIG9uQ2xpY2s9e2hhbWJ1cmdlckhhbmRsZXJ9PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGluZVwiIGlkPVwibGluZTFcIj48L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmVcIiBpZD1cImxpbmUyXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaW5lXCIgaWQ9XCJsaW5lM1wiPjwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG5cclxuICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgXHJcbiAgICAgICAgICAjbmF2YmFyIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMS41cmVtIDA7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcclxuICAgICAgICAgICAgLyogbWFyZ2luLWJvdHRvbTogMnJlbTsgKi9cclxuICAgICAgICAgICAgYmFja2dyb3VuZDogJHtjb2xvcnMuZ3JhZGllbnR9O1xyXG4gICAgICAgICAgICAvKiBjb2xvcjogd2hpdGU7ICovXHJcbiAgICAgICAgICAgIC8qIGJhY2tncm91bmQtY29sb3I6ICM5M2ZmZmI7ICovXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAjbmF2LWNvbnRlbnQge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAjbmF2LW1lbnUge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgI2JyYW5kIGgxIHtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjNyZW07XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLm5hdi1pdGVtIHtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgMXJlbTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogdGV4dC1zaGFkb3cgMC4ycztcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAubmF2LWl0ZW06aG92ZXIge1xyXG4gICAgICAgICAgICB0ZXh0LXNoYWRvdzogMHB4IDBweCA4cHggcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGkge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICNzZWFyY2gge1xyXG4gICAgICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICNzZWFyY2hiYXJ7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGxhYmVsIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3A6IDEwcHg7XHJcbiAgICAgICAgICAgIGxlZnQ6IDEycHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBcclxuICAgICAgICAgICNsb2dvIHtcclxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAvKiBNZWRpYSBxdWVyaWVzICovXHJcbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogMTE1MHB4KXtcclxuICAgICAgICAgICAgI25hdi1jb250ZW50IHtcclxuICAgICAgICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBoMSB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDJyZW07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICNuYXYtbWVudSB7XHJcbiAgICAgICAgICAgICAgLyogd2lkdGg6IDM1dnc7ICovXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogMTEwMHB4KSB7XHJcbiAgICAgICAgICAgICNuYXYtY29udGVudCB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDk3JTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5NTBweCkge1xyXG4gICAgICAgICAgICBib2R5IHtcclxuICAgICAgICAgICAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICNuYXZiYXIge1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgI25hdi1tZW51IHtcclxuICAgICAgICAgICAgICB6LWluZGV4OiAxMDE7XHJcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgdG9wOiAxMDAlO1xyXG4gICAgICAgICAgICAgIHJpZ2h0OiAwcHg7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDMzdnc7XHJcbiAgICAgICAgICAgICAgY2xpcC1wYXRoOiBjaXJjbGUoMHB4IGF0IHRvcCByaWdodCk7XHJcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjogY2xpcC1wYXRoIDAuN3MgZWFzZTtcclxuICAgICAgICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IC0xMXB4IDEwcHggMTlweCAtMTBweCByZ2JhKDAsMCwwLDAuMjcpO1xyXG4gICAgICAgICAgICAgIC1tb3otYm94LXNoYWRvdzogLTExcHggMTBweCAxOXB4IC0xMHB4IHJnYmEoMCwwLDAsMC4yNyk7XHJcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogLTExcHggMTBweCAxOXB4IC0xMHB4IHJnYmEoMCwwLDAsMC4yNyk7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogJHtjb2xvcnMucHJpbWFyeX07XHJcbiAgICAgICAgICAgICAgLyogb3BhY2l0eTogMC45OyAqL1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAjbmF2LW1lbnUuZHJvcGRvd24ge1xyXG4gICAgICAgICAgICAgIGNsaXAtcGF0aDogY2lyY2xlKDE1MCUgYXQgdG9wIHJpZ2h0KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLm5hdi1pdGVtIHtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAycmVtIDNyZW07XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmNmI4ZDtcclxuICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjNyZW07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGkge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDEuNXJlbTtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgICAgICAgICAgICAvKiBiYWNrZ3JvdW5kOiBibGFjazsgKi9cclxuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAwLjVyZW07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5uYXYtaXRlbTpob3ZlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICR7Y29sb3JzLnNlY29uZGFyeX07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5saW5lIHtcclxuICAgICAgICAgICAgICB3aWR0aDogMzBweDtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDNweDtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICBtYXJnaW46IDVweDtcclxuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIGVhc2UgMC41cztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgI2hhbWJ1cmdlciB7XHJcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAjaGFtYnVyZ2VyLm9wZW4gI2xpbmUxIHtcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpIHRyYW5zbGF0ZVkoMTEuNXB4KSBzY2FsZVgoMC45KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgI2hhbWJ1cmdlci5vcGVuICNsaW5lMntcclxuICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAjaGFtYnVyZ2VyLm9wZW4gI2xpbmUze1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKSB0cmFuc2xhdGVZKC0xMS41cHgpIHNjYWxlWCgwLjkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NTBweCkge1xyXG4gICAgICAgICAgICAjbWFpbi1zZWFyY2hiYXIge1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2OTBweCkge1xyXG4gICAgICAgICAgICAjbWFpbi1zZWFyY2hiYXIge1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgI25hdi1tZW51IHtcclxuICAgICAgICAgICAgICB3aWR0aDogNDAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICAgICAgICAgICNicmFuZCB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgI2xvZ28ge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1NzBweCkge1xyXG4gICAgICAgICAgICAjbmF2LW1lbnUge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiA0NSU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcclxuICAgICAgICAgICAgI25hdi1tZW51IHtcclxuICAgICAgICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0NTBweCkge1xyXG4gICAgICAgICAgICAjbmF2LW1lbnUge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiA2MCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogMzc1cHgpIHtcclxuICAgICAgICAgICAgLm5hdi1pdGVtIHtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAycmVtIDJyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgXHJcblxyXG4gICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgPC9uYXY+XHJcbiAgICAvLyApfVxyXG4gICAgLy8gPC9HbG9iYWxDb250ZXh0LkNvbnN1bWVyPlxyXG4gIClcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjtcclxuIl19 */
/*@ sourceURL=C:\\Coding\\MyProjects\\coders-jukebox\\components\\Navbar.js */`)) // )}
  // </GlobalContext.Consumer>
  ;
};

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ }),

/***/ "./components/UserSearch.js":
/*!**********************************!*\
  !*** ./components/UserSearch.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _UserSearchBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UserSearchBar */ "./components/UserSearchBar.js");
/* harmony import */ var _context_GlobalContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../context/GlobalContext */ "./context/GlobalContext.js");


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





const UserSearch = () => {
  const {
    0: filteredUsers,
    1: setFilteredUsers
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const {
    0: searchMode,
    1: setSearchMode
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    fetchProfileUser
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context_GlobalContext__WEBPACK_IMPORTED_MODULE_4__["GlobalContext"]);
  const {
    0: searchInput,
    1: setSearchInput
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');

  const userClickHandler = id => {
    fetchProfileUser(id, false); // Hide dropdown

    setSearchMode(false); // Clear the search bar

    setSearchInput('');
  };

  const checkSearchMode = input => {
    if (input !== '') {
      setSearchMode(true);
    } else {
      setSearchMode(false);
    }
  };

  return __jsx("div", {
    id: "user-search",
    className: "jsx-1687049347"
  }, __jsx(_UserSearchBar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    checkSearchMode: checkSearchMode,
    placeholder: "Search for user",
    searchMode: "user",
    setFilteredUsers: setFilteredUsers,
    searchInput: searchInput,
    setSearchInput: setSearchInput
  }), searchMode && __jsx("div", {
    id: "dropdown",
    className: "jsx-1687049347"
  }, __jsx("div", {
    id: "search-results",
    className: "jsx-1687049347"
  }, __jsx("ul", {
    className: "jsx-1687049347"
  }, filteredUsers.map(user => __jsx("li", {
    key: user.id,
    className: "jsx-1687049347"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/profile/[userId]",
    as: `/profile/${user.id}`
  }, __jsx("a", {
    onClick: userClickHandler.bind(undefined, user.id),
    className: "jsx-1687049347"
  }, user.name)))), filteredUsers.length === 0 && __jsx("li", {
    className: "jsx-1687049347"
  }, "No Users Found")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1687049347"
  }, "#user-search.jsx-1687049347{width:50%;}#dropdown.jsx-1687049347{width:79%;margin:auto;z-index:3;}#search-results.jsx-1687049347{width:440px;margin:auto;background:white;color:purple;margin-top:0.5rem;padding:1rem;border-radius:5px;box-shadow:10px 10px 45px -10px rgba(66,9,66,0.74);position:absolute;}ul.jsx-1687049347{list-style:none;}@media (max-width:1150px){#search-results.jsx-1687049347{width:400px;}}@media (max-width:1100px){#search-results.jsx-1687049347{width:38vw;}}@media (max-width:950px){#search-results.jsx-1687049347{right:170px;width:46vw;}}@media (max-width:900px){#search-results.jsx-1687049347{right:140px;width:46vw;}}@media (max-width:900px){#search-results.jsx-1687049347{right:120px;}}@media (max-width:740px){#search-results.jsx-1687049347{right:100px;}}@media (max-width:660px){#search-results.jsx-1687049347{right:70px;}}@media (max-width:600px){#user-search.jsx-1687049347{margin-right:4rem;}#search-results.jsx-1687049347{right:107px;width:58vw;}}@media (max-width:550px){#user-search.jsx-1687049347{width:55%;}#search-results.jsx-1687049347{width:62vw;right:91px;}}@media (max-width:490px){#user-search.jsx-1687049347{width:60%;}}@media (max-width:450px){#search-results.jsx-1687049347{right:85px;}}@media (max-width:420px){#user-search.jsx-1687049347{width:60%;}#search-results.jsx-1687049347{right:11vw;width:76vw;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxDb2RpbmdcXE15UHJvamVjdHNcXGNvZGVycy1qdWtlYm94XFxjb21wb25lbnRzXFxVc2VyU2VhcmNoLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJEa0IsQUFJcUIsQUFLQSxBQU9FLEFBZ0JJLEFBTUosQUFNQSxBQU1BLEFBT0EsQUFPQSxBQU1BLEFBTUQsQUFNTyxBQUlOLEFBT0YsQUFJQyxBQU9ELEFBTUMsQUFNRCxBQUdDLFVBakhiLEFBS2MsQUFtRmQsQUFXQSxBQVlBLENBeEVBLEFBZ0NBLEFBcUJhLEFBYWIsQUFTYSxDQXZHQyxBQXNCZCxBQVlhLEFBT0EsQUFPYixBQU1BLEFBZ0JhLElBdERiLEVBa0RBLElBdkVZLEFBdUZaLEFBc0JBLENBckVBLEFBT0EsQUE2QkEsQ0F0RW1CLFFBTG5CLFNBTWUsYUFDSyxrQkFDTCxhQUNLLGtCQUNpQyxtREFDakMsa0JBS3BCIiwiZmlsZSI6IkM6XFxDb2RpbmdcXE15UHJvamVjdHNcXGNvZGVycy1qdWtlYm94XFxjb21wb25lbnRzXFxVc2VyU2VhcmNoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBVc2VyU2VhcmNoQmFyIGZyb20gJy4vVXNlclNlYXJjaEJhcic7XHJcbmltcG9ydCB7IEdsb2JhbENvbnRleHQgfSBmcm9tICcuLi9jb250ZXh0L0dsb2JhbENvbnRleHQnO1xyXG5cclxuXHJcbmNvbnN0IFVzZXJTZWFyY2ggPSAoKSA9PiB7XHJcbiAgXHJcbiAgY29uc3QgW2ZpbHRlcmVkVXNlcnMsIHNldEZpbHRlcmVkVXNlcnNdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICBjb25zdCBbc2VhcmNoTW9kZSwgc2V0U2VhcmNoTW9kZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgXHJcbiAgY29uc3QgeyBmZXRjaFByb2ZpbGVVc2VyIH0gPSB1c2VDb250ZXh0KEdsb2JhbENvbnRleHQpO1xyXG5cclxuICBjb25zdCBbc2VhcmNoSW5wdXQsIHNldFNlYXJjaElucHV0XSA9IHVzZVN0YXRlKCcnKTtcclxuICBcclxuICBjb25zdCB1c2VyQ2xpY2tIYW5kbGVyID0gKGlkKSA9PiB7XHJcblxyXG4gICAgZmV0Y2hQcm9maWxlVXNlcihpZCwgZmFsc2UpO1xyXG4gICAgXHJcbiAgICAvLyBIaWRlIGRyb3Bkb3duXHJcbiAgICBzZXRTZWFyY2hNb2RlKGZhbHNlKVxyXG5cclxuICAgIC8vIENsZWFyIHRoZSBzZWFyY2ggYmFyXHJcbiAgICBzZXRTZWFyY2hJbnB1dCgnJyk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBjaGVja1NlYXJjaE1vZGUgPSAoaW5wdXQpID0+IHtcclxuICAgIGlmIChpbnB1dCAhPT0gJycpIHtcclxuICAgICAgc2V0U2VhcmNoTW9kZSh0cnVlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldFNlYXJjaE1vZGUoZmFsc2UpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGlkPVwidXNlci1zZWFyY2hcIj5cclxuICAgICAgPFVzZXJTZWFyY2hCYXIgY2hlY2tTZWFyY2hNb2RlPXtjaGVja1NlYXJjaE1vZGV9IHBsYWNlaG9sZGVyPSdTZWFyY2ggZm9yIHVzZXInIHNlYXJjaE1vZGU9J3VzZXInIHNldEZpbHRlcmVkVXNlcnM9e3NldEZpbHRlcmVkVXNlcnN9IHNlYXJjaElucHV0PXtzZWFyY2hJbnB1dH0gc2V0U2VhcmNoSW5wdXQ9e3NldFNlYXJjaElucHV0fS8+XHJcbiAgICAgIHsgc2VhcmNoTW9kZSAmJlxyXG4gICAgICA8ZGl2IGlkPVwiZHJvcGRvd25cIj5cclxuICAgICAgICA8ZGl2IGlkPVwic2VhcmNoLXJlc3VsdHNcIj5cclxuICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAge2ZpbHRlcmVkVXNlcnMubWFwKHVzZXIgPT4gKFxyXG4gICAgICAgICAgICAgIDxsaSBrZXk9e3VzZXIuaWR9PlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9maWxlL1t1c2VySWRdXCIgYXM9e2AvcHJvZmlsZS8ke3VzZXIuaWR9YH0+XHJcbiAgICAgICAgICAgICAgICAgIDxhIG9uQ2xpY2s9e3VzZXJDbGlja0hhbmRsZXIuYmluZCh0aGlzLCB1c2VyLmlkKX0+e3VzZXIubmFtZX08L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgKSl9XHJcblxyXG4gICAgICAgICAgICB7ZmlsdGVyZWRVc2Vycy5sZW5ndGggPT09IDAgJiYgXHJcbiAgICAgICAgICAgICAgPGxpPk5vIFVzZXJzIEZvdW5kPC9saT5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgPC91bD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgXHJcbiAgICAgICAgI3VzZXItc2VhcmNoIHtcclxuICAgICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgICAvKiBwb3NpdGlvbjogcmVsYXRpdmU7ICovXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAjZHJvcGRvd24ge1xyXG4gICAgICAgICAgd2lkdGg6IDc5JTtcclxuICAgICAgICAgIC8qIHBvc2l0aW9uOiByZWxhdGl2ZTsgKi9cclxuICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgIHotaW5kZXg6IDM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICNzZWFyY2gtcmVzdWx0cyB7XHJcbiAgICAgICAgICB3aWR0aDogNDQwcHg7XHJcbiAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgICAgIGNvbG9yOiBwdXJwbGU7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAwLjVyZW07IFxyXG4gICAgICAgICAgcGFkZGluZzogMXJlbTtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgIGJveC1zaGFkb3c6IDEwcHggMTBweCA0NXB4IC0xMHB4IHJnYmEoNjYsOSw2NiwwLjc0KTtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIC8qIHRvcDogLTEwcHg7ICovXHJcbiAgICAgICAgICAvKiB6LWluZGV4OiAyMDA7ICovXHJcblxyXG4gICAgICAgICAgLyogbGVmdDogNDEwcHg7ICovXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB1bCB7XHJcbiAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyogTWVkaWEgcXVlcmllcyAqL1xyXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogMTE1MHB4KSB7XHJcbiAgICAgICAgI3NlYXJjaC1yZXN1bHRzIHtcclxuICAgICAgICAgIHdpZHRoOiA0MDBweDtcclxuICAgICAgICB9XHJcbiAgICAgIH0gXHJcblxyXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogMTEwMHB4KSB7XHJcbiAgICAgICAgI3NlYXJjaC1yZXN1bHRzIHtcclxuICAgICAgICAgIHdpZHRoOiAzOHZ3IDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5NTBweCkge1xyXG4gICAgICAgICNzZWFyY2gtcmVzdWx0cyB7XHJcbiAgICAgICAgICByaWdodDogMTcwcHg7XHJcbiAgICAgICAgICB3aWR0aDogNDZ2dztcclxuICAgICAgICB9XHJcbiAgICAgIH0gXHJcblxyXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogOTAwcHgpIHtcclxuICAgICAgICAjc2VhcmNoLXJlc3VsdHMge1xyXG4gICAgICAgICAgcmlnaHQ6IDE0MHB4O1xyXG4gICAgICAgICAgd2lkdGg6IDQ2dnc7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IFxyXG4gICAgICBcclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDkwMHB4KSB7XHJcbiAgICAgICAgI3NlYXJjaC1yZXN1bHRzIHtcclxuICAgICAgICAgIHJpZ2h0OiAxMjBweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NDBweCkge1xyXG4gICAgICAgICNzZWFyY2gtcmVzdWx0cyB7XHJcbiAgICAgICAgICByaWdodDogMTAwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IFxyXG5cclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDY2MHB4KSB7XHJcbiAgICAgICAgI3NlYXJjaC1yZXN1bHRzIHtcclxuICAgICAgICAgIHJpZ2h0OiA3MHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfSBcclxuXHJcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgICAgICN1c2VyLXNlYXJjaCB7XHJcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDRyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAjc2VhcmNoLXJlc3VsdHMge1xyXG4gICAgICAgICAgcmlnaHQ6IDEwN3B4O1xyXG4gICAgICAgICAgd2lkdGg6IDU4dnc7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNTUwcHgpIHtcclxuICAgICAgICAjdXNlci1zZWFyY2gge1xyXG4gICAgICAgICAgd2lkdGg6IDU1JTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICNzZWFyY2gtcmVzdWx0cyB7XHJcbiAgICAgICAgICB3aWR0aDogNjJ2dztcclxuICAgICAgICAgIHJpZ2h0OiA5MXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ5MHB4KSB7XHJcbiAgICAgICAgI3VzZXItc2VhcmNoIHtcclxuICAgICAgICAgIHdpZHRoOiA2MCU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNDUwcHgpIHtcclxuICAgICAgICAjc2VhcmNoLXJlc3VsdHMge1xyXG4gICAgICAgICAgcmlnaHQ6IDg1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNDIwcHgpIHtcclxuICAgICAgICAjdXNlci1zZWFyY2gge1xyXG4gICAgICAgICAgd2lkdGg6IDYwJTtcclxuICAgICAgICB9XHJcbiAgICAgICAgI3NlYXJjaC1yZXN1bHRzIHtcclxuICAgICAgICAgIHJpZ2h0OiAxMXZ3O1xyXG4gICAgICAgICAgd2lkdGg6IDc2dnc7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG5cclxuICAgICAgXHJcbiAgICAgIGB9PC9zdHlsZT5cclxuXHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVzZXJTZWFyY2g7XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Coding\\\\MyProjects\\\\coders-jukebox\\\\components\\\\UserSearch.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (UserSearch);

/***/ }),

/***/ "./components/UserSearchBar.js":
/*!*************************************!*\
  !*** ./components/UserSearchBar.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_GlobalContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/GlobalContext */ "./context/GlobalContext.js");


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



const UserSearchbar = ({
  placeholder,
  setFilteredUsers,
  checkSearchMode,
  searchInput,
  setSearchInput
}) => {
  const {
    allUsers
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context_GlobalContext__WEBPACK_IMPORTED_MODULE_2__["GlobalContext"]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    // action on update of searchInput
    const users = allUsers.filter(user => {
      return user.name.substr(0, searchInput.length).toUpperCase() === searchInput.toUpperCase();
    });
    setFilteredUsers(users);
  }, [searchInput]);

  const onChangeHandler = e => {
    setSearchInput(e.target.value);
    checkSearchMode(e.target.value);
  };

  const onFormSubmit = e => {
    e.preventDefault(); // Call the relevant submit handler from props
    // submitHandler(searchInput);
  };

  return __jsx("div", {
    id: "main-searchbar",
    className: "jsx-3507648968"
  }, __jsx("form", {
    onSubmit: onFormSubmit,
    autoComplete: "off",
    className: "jsx-3507648968"
  }, __jsx("label", {
    htmlFor: "search-input",
    className: "jsx-3507648968"
  }, __jsx("svg", {
    id: "search-icon",
    height: "24",
    viewBox: "0 0 24 24",
    width: "24",
    className: "jsx-3507648968"
  }, __jsx("path", {
    d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z",
    className: "jsx-3507648968"
  }), __jsx("path", {
    d: "M0 0h24v24H0z",
    fill: "none",
    className: "jsx-3507648968"
  }))), __jsx("input", {
    type: "text",
    name: "search-input",
    placeholder: placeholder,
    onChange: onChangeHandler,
    value: searchInput,
    className: "jsx-3507648968"
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3507648968"
  }, "label.jsx-3507648968{position:absolute;top:8px;left:12px;}#main-searchbar.jsx-3507648968{margin:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:relative;width:75%;font:inherit;}#main-searchbar.jsx-3507648968 form.jsx-3507648968{width:100%;}#main-searchbar.jsx-3507648968 input.jsx-3507648968{width:100%;border-radius:23px;padding:0.6rem 0.5rem 0.5rem 2.5rem;font-size:1.1rem;background-color:#fff;border:none;}#main-searchbar.jsx-3507648968 input.jsx-3507648968:focus{outline:none;}@media (max-width:950px){#main-searchbar.jsx-3507648968{margin:0;width:90%;}}@media (max-width:660px){#main-searchbar.jsx-3507648968{margin:auto;}}@media (max-width:600px){#main-searchbar.jsx-3507648968{width:110%;}}@media (max-width:420px){#main-searchbar.jsx-3507648968{width:120%;}}@media (max-width:370px){#main-searchbar.jsx-3507648968{width:130%;}#main-searchbar.jsx-3507648968 input.jsx-3507648968{font-size:0.9rem;}label.jsx-3507648968{top:7px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxDb2RpbmdcXE15UHJvamVjdHNcXGNvZGVycy1qdWtlYm94XFxjb21wb25lbnRzXFxVc2VyU2VhcmNoQmFyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNDa0IsQUFJK0IsQUFNTixBQVNmLEFBR2MsQUFTRSxBQU1GLEFBT0csQUFNRCxBQU1BLEFBTUEsQUFJTSxBQUlULFFBQ1YsQ0FqQ1ksRUFuQmQsQUFJcUIsQUE0Qm5CLEFBTUEsQUFNQSxDQXBEYSxBQWtDYixDQWJGLElBbUNFLENBOURRLENBa0NSLE9BakNVLElBa0IwQixNQWpCdEMsOEJBa0JtQixpQkFDSyxHQWRKLGtCQUNSLENBY0UsU0FiQyxHQWNmLFVBYkEiLCJmaWxlIjoiQzpcXENvZGluZ1xcTXlQcm9qZWN0c1xcY29kZXJzLWp1a2Vib3hcXGNvbXBvbmVudHNcXFVzZXJTZWFyY2hCYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlQ29udGV4dCwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBHbG9iYWxDb250ZXh0IH0gZnJvbSAnLi4vY29udGV4dC9HbG9iYWxDb250ZXh0JztcclxuXHJcbmNvbnN0IFVzZXJTZWFyY2hiYXIgPSAoeyBwbGFjZWhvbGRlciwgc2V0RmlsdGVyZWRVc2VycywgY2hlY2tTZWFyY2hNb2RlLCBzZWFyY2hJbnB1dCwgc2V0U2VhcmNoSW5wdXR9KSA9PiB7XHJcblxyXG4gIGNvbnN0IHsgYWxsVXNlcnMgfSA9IHVzZUNvbnRleHQoR2xvYmFsQ29udGV4dCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyBhY3Rpb24gb24gdXBkYXRlIG9mIHNlYXJjaElucHV0XHJcbiAgICAgIGNvbnN0IHVzZXJzID0gYWxsVXNlcnMuZmlsdGVyKHVzZXIgPT4ge1xyXG4gICAgICAgIHJldHVybiB1c2VyLm5hbWUuc3Vic3RyKDAsIHNlYXJjaElucHV0Lmxlbmd0aCkudG9VcHBlckNhc2UoKSA9PT0gc2VhcmNoSW5wdXQudG9VcHBlckNhc2UoKVxyXG4gICAgICB9KVxyXG5cclxuICAgICAgc2V0RmlsdGVyZWRVc2Vycyh1c2VycylcclxuICB9LCBbc2VhcmNoSW5wdXRdKTtcclxuXHJcbiAgY29uc3Qgb25DaGFuZ2VIYW5kbGVyID0gKGUpID0+IHtcclxuICAgIHNldFNlYXJjaElucHV0KGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIGNoZWNrU2VhcmNoTW9kZShlLnRhcmdldC52YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBvbkZvcm1TdWJtaXQgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIC8vIENhbGwgdGhlIHJlbGV2YW50IHN1Ym1pdCBoYW5kbGVyIGZyb20gcHJvcHNcclxuICAgIC8vIHN1Ym1pdEhhbmRsZXIoc2VhcmNoSW5wdXQpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgaWQ9XCJtYWluLXNlYXJjaGJhclwiPlxyXG4gICAgICA8Zm9ybSBvblN1Ym1pdD17b25Gb3JtU3VibWl0fSBhdXRvQ29tcGxldGU9XCJvZmZcIj5cclxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInNlYXJjaC1pbnB1dFwiPlxyXG4gICAgICAgICAgPHN2ZyBpZD1cInNlYXJjaC1pY29uXCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgd2lkdGg9XCIyNFwiPjxwYXRoIGQ9XCJNMTUuNSAxNGgtLjc5bC0uMjgtLjI3QzE1LjQxIDEyLjU5IDE2IDExLjExIDE2IDkuNSAxNiA1LjkxIDEzLjA5IDMgOS41IDNTMyA1LjkxIDMgOS41IDUuOTEgMTYgOS41IDE2YzEuNjEgMCAzLjA5LS41OSA0LjIzLTEuNTdsLjI3LjI4di43OWw1IDQuOTlMMjAuNDkgMTlsLTQuOTktNXptLTYgMEM3LjAxIDE0IDUgMTEuOTkgNSA5LjVTNy4wMSA1IDkuNSA1IDE0IDcuMDEgMTQgOS41IDExLjk5IDE0IDkuNSAxNHpcIiAvPjxwYXRoIGQ9XCJNMCAwaDI0djI0SDB6XCIgZmlsbD1cIm5vbmVcIiAvPjwvc3ZnPlxyXG4gICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInNlYXJjaC1pbnB1dFwiIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn0gb25DaGFuZ2U9e29uQ2hhbmdlSGFuZGxlcn0gdmFsdWU9e3NlYXJjaElucHV0fSAvPlxyXG4gICAgICA8L2Zvcm0+XHJcblxyXG5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG5cclxuICAgICAgICAgIGxhYmVsIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3A6IDhweDtcclxuICAgICAgICAgICAgbGVmdDogMTJweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgI21haW4tc2VhcmNoYmFyIHtcclxuICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIHdpZHRoOiA3NSU7XHJcbiAgICAgICAgICAgIGZvbnQ6IGluaGVyaXQ7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgI21haW4tc2VhcmNoYmFyIGZvcm0ge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICNtYWluLXNlYXJjaGJhciBpbnB1dCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyM3B4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwLjZyZW0gMC41cmVtIDAuNXJlbSAyLjVyZW07XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgI21haW4tc2VhcmNoYmFyIGlucHV0IDpmb2N1cyB7XHJcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLyogTWVkaWEgcXVlcmllcyAqL1xyXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDk1MHB4KXtcclxuICAgICAgICAgICAgI21haW4tc2VhcmNoYmFyIHtcclxuICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2NjBweCl7XHJcbiAgICAgICAgICAgICNtYWluLXNlYXJjaGJhciB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KXtcclxuICAgICAgICAgICAgI21haW4tc2VhcmNoYmFyIHtcclxuICAgICAgICAgICAgICB3aWR0aDogMTEwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0MjBweCkge1xyXG4gICAgICAgICAgICAjbWFpbi1zZWFyY2hiYXIge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMjAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDM3MHB4KSB7XHJcbiAgICAgICAgICAgICNtYWluLXNlYXJjaGJhciB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDEzMCU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICNtYWluLXNlYXJjaGJhciBpbnB1dCB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxhYmVsIHtcclxuICAgICAgICAgICAgICB0b3A6IDdweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgXHJcbiAgXHJcbiAgXHJcbiAgYH08L3N0eWxlPlxyXG5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXNlclNlYXJjaGJhcjtcclxuIl19 */\n/*@ sourceURL=C:\\\\Coding\\\\MyProjects\\\\coders-jukebox\\\\components\\\\UserSearchBar.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (UserSearchbar);

/***/ }),

/***/ "./context/ContextProvider.js":
/*!************************************!*\
  !*** ./context/ContextProvider.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _GlobalContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GlobalContext */ "./context/GlobalContext.js");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ "framer-motion");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




class ContextProvider extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      value
    } = this.props;
    return __jsx(_GlobalContext__WEBPACK_IMPORTED_MODULE_1__["GlobalContext"].Provider, {
      value: value
    }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__["AnimatePresence"], {
      exitBeforeEnter: true
    }, this.props.children));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (ContextProvider);

/***/ }),

/***/ "./context/GlobalContext.js":
/*!**********************************!*\
  !*** ./context/GlobalContext.js ***!
  \**********************************/
/*! exports provided: GlobalContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalContext", function() { return GlobalContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
 // import AppReducer from './AppReducer';
// import { useQuery } from '@apollo/react-hooks';
// Inital State

const initialState = {
  authenticated: false,
  authData: null,
  user: null,
  video: null,
  comment: null // login: () => {}

}; // Create context

const GlobalContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])(initialState); // Provider Component
// export const GlobalProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(AppReducer, initialState)
//   return (
//     <GlobalContext.Provider value={{
//       // authenticated: state.authenticated,
//       login: login
//     }}>
//       {children}
//     </GlobalContext.Provider>
//   )
// }

/***/ }),

/***/ "./css-variables/colors.js":
/*!*********************************!*\
  !*** ./css-variables/colors.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const colors = {
  primary: '#ff416c',
  // gradient: 'linear-gradient(to right, #ff416c, #ff4b2b)',
  // gradient: 'linear-gradient(to right, #ff416c, #eefb4a)',
  // gradient: 'linear-gradient(37deg, #e52e71 50%, #ff8a00 100%)',
  // gradient: 'linear-gradient(37deg, #e52e71 50%, #ff8a00 100%)',
  // gradient: 'linear-gradient(37deg, rgba(255, 65, 108, 1) 50%, rgba(238, 255, 20, 1) 100%)',
  gradient: 'linear-gradient(37deg, #ff416c 50%, #eeff14 100%)',
  reverseGradient: 'linear-gradient(37deg, #eeff14 7%, #ff416c 46%)',
  pinkGradent: 'linear-gradient(to right, #ff4b2b, #ff416c);',
  reversePinkGradient: 'linear-gradient(to right, #ff416c, #ff4b2b);',
  secondary: '#ff4b2b',
  tertiary: '#eeff14'
};
/* harmony default export */ __webpack_exports__["default"] = (colors);

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

var _router2 = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");
/**
* Detects whether a given url is from the same origin as the current page (browser only).
*/


function isLocal(url) {
  const locationOrigin = (0, _utils.getLocationOrigin)();
  const resolved = new URL(url, locationOrigin);
  return resolved.origin === locationOrigin;
}

let cachedObserver;
const listeners = new Map();
const IntersectionObserver = false ? undefined : null;
const prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (cachedObserver) {
    return cachedObserver;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return cachedObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        cachedObserver.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

function prefetch(router, href, as, options) {
  if (true) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  }); // Join on an invalid URI character

  prefetched[href + '%' + as] = true;
}

function linkClicked(e, router, href, as, replace, shallow, scroll) {
  const {
    nodeName,
    target
  } = e.currentTarget;

  if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
    // ignore click for new tab / new window behavior
    return;
  }

  if (!isLocal(href)) {
    // ignore click if it's outside our scope (e.g. https://google.com)
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow
  }).then(success => {
    if (!success) return;

    if (scroll) {
      window.scrollTo(0, 0);
      document.body.focus();
    }
  });
}

function Link(props) {
  if (true) {
    // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const hasWarned = _react.default.useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/vercel/next.js/prefetch-true-deprecated');
    }
  }

  const p = props.prefetch !== false;

  const [childElm, setChildElm] = _react.default.useState();

  const router = (0, _router.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const resolvedHref = (0, _router2.resolveHref)(pathname, props.href);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router2.resolveHref)(pathname, props.as) : resolvedHref
    };
  }, [pathname, props.href, props.as]);

  _react.default.useEffect(() => {
    if (p && IntersectionObserver && childElm && childElm.tagName) {
      // Join on an invalid URI character
      const isPrefetched = prefetched[href + '%' + as];

      if (!isPrefetched) {
        return listenToIntersections(childElm, () => {
          prefetch(router, href, as);
        });
      }
    }
  }, [p, childElm, href, as, router]);

  let {
    children,
    replace,
    shallow,
    scroll
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childProps = {
    ref: el => {
      if (el) setChildElm(el);

      if (child && typeof child === 'object' && child.ref) {
        if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
          child.ref.current = el;
        }
      }
    },
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll);
      }
    }
  };

  if (p) {
    childProps.onMouseEnter = e => {
      if (child.props && typeof child.props.onMouseEnter === 'function') {
        child.props.onMouseEnter(e);
      }

      prefetch(router, href, as, {
        priority: true
      });
    };
  } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    childProps.href = (0, _router2.addBasePath)(as);
  } // Add the ending slash to the paths. So, we can serve the
  // "<page>/index.html" directly.


  if (false) {}

  return _react.default.cloneElement(child, childProps);
}

if (true) {
  const warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  const PropTypes = __webpack_require__(/*! prop-types */ "prop-types");

  const exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, (props, propName) => {
      const value = props[propName];

      if (typeof value === 'string') {
        warn(`Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>`);
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error(`Error when running the Router event: ${eventField}`); // tslint:disable-next-line:no-console

          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

var _searchParamsToUrlQuery = __webpack_require__(/*! ./utils/search-params-to-url-query */ "./node_modules/next/dist/next-server/lib/router/utils/search-params-to-url-query.js");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addBasePath(path) {
  return basePath ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(basePath) : basePath + path : path;
}

function delBasePath(path) {
  return path.slice(basePath.length) || '/';
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href);
  const finalUrl = new URL(urlAsString, base);
  finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname); // if the origin didn't change, it means we received a relative href

  return finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  return {
    url: addBasePath(resolveHref(router.pathname, url)),
    as: as ? addBasePath(resolveHref(router.pathname, as)) : as
  };
}

function tryParseRelativeUrl(url) {
  try {
    return (0, _parseRelativeUrl.parseRelativeUrl)(url);
  } catch (err) {
    if (true) {
      throw new Error(`Invalid href passed to router: ${url} https://err.sh/vercel/next.js/invalid-href-passed`);
    }

    return null;
  }
}

const manualScrollRestoration =  false && false;

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      const {
        url,
        as,
        options,
        __N
      } = e.state;

      if (!__N) {
        // this history state wasn't created by next.js so it can be ignored
        return;
      }

      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/vercel/next.js/popstate-state-empty');
        }
      }

      this.change('replaceState', url, as, options);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign({}, data, {
      Component,
      __N_SSG: mod.__N_SSG,
      __N_SSP: mod.__N_SSP
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options) {
    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly for the SSR page.


    if (false) {}

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute);
    }

    const cleanedAs = delBasePath(as);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as);
      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      Router.events.emit('hashChangeComplete', as);
      return true;
    }

    const parsed = tryParseRelativeUrl(url);
    if (!parsed) return false;
    let {
      pathname,
      searchParams
    } = parsed;
    const query = (0, _searchParamsToUrlQuery.searchParamsToUrlQuery)(searchParams); // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1

    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url

    if (!this.urlIsNew(cleanedAs)) {
      method = 'replaceState';
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    const {
      shallow = false
    } = options;

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const {
        pathname: asPathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(cleanedAs);
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);

      if (!routeMatch) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (true) {
            console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }

          throw new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/vercel/next.js/incompatible-href-as`);
        }
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as);

    try {
      const routeInfo = await this.getRouteInfo(route, pathname, query, as, shallow);
      const {
        error
      } = routeInfo;
      Router.events.emit('beforeHistoryChange', as);
      this.changeState(method, url, as, options);

      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      }

      await this.set(route, pathname, query, cleanedAs, routeInfo);

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      window.history[method]({
        url,
        as,
        options,
        __N: true
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      const {
        page: Component
      } = await this.fetchComponent('/_error');
      const routeInfo = {
        Component,
        err,
        error: err
      };

      try {
        routeInfo.props = await this.getInitialProps(Component, {
          err,
          pathname,
          query
        });
      } catch (gipErr) {
        console.error('Error in error page `getInitialProps`: ', gipErr);
        routeInfo.props = {};
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, shallow = false) {
    try {
      const cachedRouteInfo = this.components[route];

      if (shallow && cachedRouteInfo && this.route === route) {
        return cachedRouteInfo;
      }

      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "./node_modules/next/node_modules/react-is/index.js");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), as, __N_SSG);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as);
    }
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    const parsed = tryParseRelativeUrl(url);
    if (!parsed) return;
    const {
      pathname
    } = parsed; // Prefetch is not supported in development mode because it would trigger on-demand-entries

    if (true) {
      return;
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    await Promise.all([this.pageLoader.prefetchData(url, asPath), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if (false) {}

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/format-url.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var _querystring = __webpack_require__(/*! querystring */ "querystring"); // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    // query = '' + new URLSearchParams(query);
    query = (0, _querystring.encode)(query);
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;
const DUMMY_BASE = new URL('http://n');
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected.
*/

function parseRelativeUrl(url, base) {
  const resolvedBase = base ? new URL(base, DUMMY_BASE) : DUMMY_BASE;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin
  } = new URL(url, resolvedBase);

  if (origin !== DUMMY_BASE.origin) {
    throw new Error('invariant: invalid relative URL');
  }

  return {
    pathname,
    searchParams,
    search,
    hash,
    href: href.slice(DUMMY_BASE.origin.length)
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/search-params-to-url-query.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/search-params-to-url-query.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__(/*! ./router/utils/format-url */ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (true) {
    var _App$prototype;

    if ((_App$prototype = App.prototype) === null || _App$prototype === void 0 ? void 0 : _App$prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/vercel/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/vercel/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/cjs/react-is.development.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/next/node_modules/react-is/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_ContextProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context/ContextProvider */ "./context/ContextProvider.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_cookies__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-cookies */ "react-cookies");
/* harmony import */ var react_cookies__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_cookies__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! apollo-boost */ "apollo-boost");
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(apollo_boost__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! framer-motion */ "framer-motion");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "C:\\Coding\\MyProjects\\coders-jukebox\\pages\\_app.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










const App = ({
  Component,
  pageProps,
  router
}) => {
  const port = parseInt(process.env.PORT, 10) || 5000;
  let token = null;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    //Get all users - for the searchbar user search
    getAllUsers(); // Check for token in local storage once the component mounts - i.e. code is now run in the browser (instead of on the server)

    token = localStorage.getItem('token');

    if (token) {
      setAuthState(_objectSpread(_objectSpread({}, authState), {}, {
        authenticated: true,
        token: token
      })); // Get the logged in user's data

      getUserDataByToken(token);
    }
  }, []);
  const emptyUser = {
    id: '',
    firstName: '',
    lastName: '',
    jobTitle: '',
    location: '',
    languages: [],
    about: '',
    ownedVideos: [],
    userComments: [],
    playlistComments: [],
    favourites: [],
    profilePhotoFilename: ''
  }; // State

  const {
    0: authState,
    1: setAuthState
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    authenticated: false,
    userId: null,
    token: null,
    tokenExpiration: null
  }); // Logged in User's Data

  const {
    0: currentUser,
    1: setCurrentUser
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(emptyUser); // Current profiles user data

  const {
    0: profileUser,
    1: setProfileUser
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(emptyUser); // const [profilePhoto, setProfilePhoto] = useState(null);

  const {
    0: videoState,
    1: setVideoState
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    title: '',
    // description:'',
    videoId: ''
  });
  const {
    0: commentState,
    1: setCommentState
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    comment: null
  });
  const {
    0: allUsers,
    1: setAllUsers
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: autoplay,
    1: setAutoplay
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false); // AUTHENTICATION *******************************************************************
  // Login a user

  const login = async (email, password) => {
    // Make a API query to get a token
    const requestBody = {
      query: `
        query {
          login(email: "${email}", password: "${password}") {
            userId,
            token
          }
        }
      `
    };

    try {
      const res = await fetch(`http://localhost:${port}/graphql`, {
        method: 'POST',
        body: JSON.stringify(requestBody),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (res.status !== 200 && res.status !== 201) {
        throw new Error('Login failed!');
      } // .json() is a method from fetch API that auto extracts & parses the res body


      const data = await res.json(); // Check for errors array in response

      if (data.errors) {
        return {
          error: data.errors
        };
      } // Set state with returned auth data


      const {
        userId,
        token
      } = data.data.login;
      setAuthState(_objectSpread(_objectSpread({}, authState), {}, {
        authenticated: true,
        userId,
        token
      })); // Save token to local storage

      localStorage.setItem('token', token); // // Set token as a cookie
      // cookie.save(
      //   'userId',
      //   userId,
      //   {
      //     path: '/',
      //     // expires,
      //     maxAge: 1000,
      //     domain: 'http://localhost:3000',
      //     secure: false,
      //     httpOnly: false
      //   }
      // )
      // Fetch the user data and set currentUser state

      await getUserDataByToken(token); // Redirect to user's profile page

      next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push(`/profile/${userId}`); // Return item object indicating no errors

      return {};
    } catch (err) {
      console.log(err);
    }
  }; // Register a user


  const register = async (firstName, lastName, email, password) => {
    // Make a API query to get a token
    const requestBody = {
      query: `
      mutation {
        createUser(userInput: {firstName: "${firstName}", lastName: "${lastName}", email: "${email}", password: "${password}"}) {
          email
        }
      }
    `
    };

    try {
      const res = await fetch(`http://localhost:${port}/graphql`, {
        method: 'POST',
        body: JSON.stringify(requestBody),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (res.status !== 200 && res.status !== 201) {
        throw new Error('Account creation failed!');
      } // .json() is a method from fetch API that auto extracts & parses the res body


      const data = await res.json(); // Check for errors array in response

      if (data.errors) {
        return {
          newUserEmail: '',
          error: data.errors
        };
      }

      const newUserEmail = data.data.createUser.email;
      return {
        newUserEmail: newUserEmail,
        error: []
      };
    } catch (err) {
      console.log(err);
    }
  }; // Logout a user


  const logout = () => {
    // Redirect to home page
    next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push('/'); // Clear the authState

    setAuthState({
      authData: null
    }); // Remove token from localStorage

    localStorage.removeItem('token'); // Clear the current user

    setCurrentUser(emptyUser);
    setProfileUser(emptyUser); // Redirect to home page
    // Router.push('/');
    // console.log('currentUser', currentUser);
    // console.log('profileUser', profileUser);
  }; // USER *****************************************************************************


  const updateUser = async (firstName, lastName, jobTitle, location, languages, about) => {
    // Make a API query to get a token
    const requestBody = {
      query: `
      mutation {
        updateUser(profileInput: {firstName: "${firstName}", lastName: "${lastName}", jobTitle: "${jobTitle}", location: "${location}", 
        languages: [
          "${languages[0]}",
          "${languages[1]}", 
          "${languages[2]}", 
          "${languages[3]}"
        ],
        about: "${about}"}) {
          firstName,
          lastName,
          jobTitle,
          location,
          languages,
          about
        }
      }
    `
    };

    try {
      const res = await fetch(`http://localhost:${port}/graphql`, {
        method: 'POST',
        body: JSON.stringify(requestBody),
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authState.token}`
        }
      });

      if (res.status !== 200 && res.status !== 201) {
        throw new Error('User update failed!');
      } // .json() is a method from fetch API that auto extracts & parses the res body


      const data = await res.json(); // Check for errors array in response

      if (data.errors) {
        data.errors.map(error => {
          console.log(error.message);
        });
        return;
      } // Refresh the profile with the new user data - to update the profileInfo section


      fetchProfileUser(profileUser.id, false);
    } catch (err) {
      console.log(err);
    }
  }; // DATA FETCHING *******************************************************************


  const getAllUsers = async () => {
    const requestBody = {
      query: `
        query {
          users {
            _id,
            firstName,
            lastName
          }
        }
      `
    };

    try {
      const res = await fetch(`http://localhost:${port}/graphql`, {
        method: 'POST',
        body: JSON.stringify(requestBody),
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authState.token}`
        }
      });

      if (res.status !== 200 && res.status !== 201) {
        throw new Error('Failed to fetch user data');
      } // .json() is a method from fetch API that auto extracts & parses the res body


      const data = await res.json(); // Check for errors array in response

      if (data.errors) {
        data.errors.map(error => {
          console.log(error.message);
        });
        return;
      }

      const users = data.data.users; // Get full name for use in searchbar

      const usersWithFullName = users.map(user => {
        return {
          id: user._id,
          name: user.firstName + ' ' + user.lastName
        };
      });
      setAllUsers(usersWithFullName);
    } catch (err) {
      console.log(err);
    }
  };

  const getUserDataById = async (userId, requestBody = {}) => {
    // console.log('getUserData called with id:', userId)
    if (requestBody = {}) {
      requestBody = {
        query: `
          query {
            userById(id:"${userId}") {
              firstName,
              lastName,
              jobTitle,
              location,
              _id,
              languages,
              about,
              ownedVideos {
                _id,
                thumbnailURL,
                title,
                videoURL
              },
              playlistComments{
                _id,
                content,
                commenter {
                  _id
                },
                createdAt,
                updatedAt
              },
              favourites,
              profilePhotoFilename
            }
          }
          `
      };
    } // console.log(requestBody)
    // console.log(authState.token)


    try {
      const res = await fetch(`http://localhost:${port}/graphql`, {
        method: 'POST',
        body: JSON.stringify(requestBody),
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authState.token}`
        }
      });

      if (res.status !== 200 && res.status !== 201) {
        throw new Error('Failed to fetch user data');
      } // .json() is a method from fetch API that auto extracts & parses the res body


      const data = await res.json(); // Check for errors array in response

      if (data.errors) {
        data.errors.map(error => {
          console.log(error.message);
        });
        return;
      }

      const user = data.data.userById;
      return user;
    } catch (err) {
      console.log(err);
    }
  }; // Get logged in user's data and sets it in the userState


  const getUserDataByToken = async token => {
    // console.log('called')
    let requestBody; // If no userId then query the current logged in user by token

    requestBody = {
      query: `
        query {
          userByToken{
            firstName,
            lastName,
            jobTitle,
            location,
            _id,
            languages,
            about,
            ownedVideos {
              _id,
              title,
              thumbnailURL,
              videoURL
            },
            playlistComments{
              _id,
              content,
              commenter {
              _id 
              },  
              createdAt,
              updatedAt
            },
            favourites,
            profilePhotoFilename
          }
        }
      `
    };

    try {
      const res = await fetch(`http://localhost:${port}/graphql`, {
        method: 'POST',
        body: JSON.stringify(requestBody),
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });

      if (res.status !== 200 && res.status !== 201) {
        throw new Error('Failed to fetch user data');
      } // .json() is a method from fetch API that auto extracts & parses the res body


      const data = await res.json(); // Check for errors array in response

      if (data.errors) {
        data.errors.map(error => {
          console.log(error.message);
        });
        return;
      }

      const user = data.data.userByToken; // console.log(user.firstName)
      // console.log(user);

      setCurrentUser({
        id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        jobTitle: user.jobTitle,
        location: user.location,
        languages: user.languages,
        about: user.about,
        ownedVideos: user.ownedVideos,
        userComments: user.userComments,
        playlistComments: user.playlistComments,
        favourites: user.favourites,
        profilePhotoFilename: user.profilePhotoFilename
      });
    } catch (err) {
      console.log(err);
    }
  };

  const fetchProfileUser = async (userId, initialFetch) => {
    if (initialFetch === true) {
      // Only fetch data if profileUser isn't populated
      if (profileUser.firstName !== '') {
        return;
      } // Only fetch data if the userId has been parsed from the URL


      if (userId === undefined) {
        return;
      }
    } // Get the profile user's data using the userId from the URL


    const user = await getUserDataById(userId); // Set the state

    setProfileUser({
      id: userId,
      firstName: user.firstName,
      lastName: user.lastName,
      jobTitle: user.jobTitle,
      location: user.location,
      languages: user.languages,
      about: user.about,
      ownedVideos: user.ownedVideos,
      userComments: user.userComments,
      playlistComments: user.playlistComments,
      favourites: user.favourites,
      profilePhotoFilename: user.profilePhotoFilename
    }); //Set video state to be first video in profile user's playlist

    if (user.ownedVideos.length > 0) {
      const video = user.ownedVideos[0];
      setCurrentVideo({
        title: video.title,
        videoId: video.videoURL
      });
    } // Fetch the user's profile photo
    // getProfilePhoto(user.profilePhotoFilename);


    return user;
  }; // Reset the ProfileUser state


  const clearProfileUser = () => {
    setProfileUser({
      id: '',
      firstName: '',
      lastName: '',
      jobTitle: '',
      location: '',
      languages: [],
      about: '',
      ownedVideos: [],
      userComments: [],
      playlistComments: [],
      favourites: [],
      profilePhotoFilename: ''
    });
  };

  const getCommentUser = async userId => {
    let requestBody = {
      query: `
          query {
            userById(id:"${userId}") {
              firstName,
              lastName,
              profilePhotoFilename
            }
          }
          `
    };
    const commentUser = await getUserDataById(userId, requestBody);
    return commentUser;
  };

  const getFavouriteUser = async userId => {
    let requestBody = {
      query: `
          query {
            userById(id:"${userId}") {
              firstName,
              lastName,
              profilePhotoFilename
            }
          }
          `
    };
    const favouriteUser = await getUserDataById(userId, requestBody);
    return favouriteUser;
  }; // const getProfilePhoto = async (filename) => {
  //   try {
  //     const res = await axios.get(`http://localhost:5000/file/${filename}`);
  //     const photo = res.data;
  //     setProfilePhoto(photo);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
  // VIDEOS **************************************************************************
  // Add a video to a user's playlist


  const addVideoToPlaylist = async video => {
    // Send an API request to save the video
    const requestBody = {
      query: `
        mutation {
          createVideo(videoInput: {title: "${video.title}", thumbnailURL: "${video.thumbnailURL}", videoURL: "${video.videoId}", userId: "${currentUser.id}"}) {
            _id
          }
        }
      `
    }; // console.log(requestBody)
    // console.log(authState.token)

    try {
      const res = await fetch(`http://localhost:${port}/graphql`, {
        method: 'POST',
        body: JSON.stringify(requestBody),
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authState.token}`
        }
      });

      if (res.status !== 200 && res.status !== 201) {
        throw new Error('Failed to create video!');
      } // .json() is a method from fetch API that auto extracts & parses the res body


      const data = await res.json(); // Check for errors array in response

      if (data.errors) {
        data.errors.map(error => {
          console.log(error.message);
        });
        return;
      } // Refresh the profile with the new user data - to update the playlist


      fetchProfileUser(currentUser.id, false);
    } catch (err) {
      console.log(err);
    }
  }; // Remove a video from a user's playlist


  const removeVideoFromPlaylist = async id => {
    // Send an API request to save the video
    const requestBody = {
      query: `
        mutation {
          removeVideo(id: "${id}") {
            ownedVideos {
              _id,
              thumbnailURL,
              title,
              videoURL
            }
          }
        }
      `
    };

    try {
      const res = await fetch(`http://localhost:${port}/graphql`, {
        method: 'POST',
        body: JSON.stringify(requestBody),
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authState.token}`
        }
      });

      if (res.status !== 200 && res.status !== 201) {
        throw new Error('Failed to remove video!');
      } // .json() is a method from fetch API that auto extracts & parses the res body


      const data = await res.json();
      console.log(data.data.removeVideo);
      const videos = data.data.removeVideo.ownedVideos;
      console.log(videos); // Check for errors array in response

      if (data.errors) {
        data.errors.map(error => {
          console.log(error.message);
        });
        return;
      } // Refresh the profile with the new user data - to update the playlist


      updateProfileUserVideos(videos);
    } catch (err) {
      console.log(err);
    }
  };

  const updateProfileUserVideos = videos => {
    // Update the profile user's ownedVideo in th global state
    setProfileUser(_objectSpread(_objectSpread({}, profileUser), {}, {
      ownedVideos: videos
    }));
  }; // Set a video as the current video for the video player


  const setCurrentVideo = video => {
    setVideoState({
      title: video.title,
      // description: video.description,
      videoId: video.videoId
    });
  }; // COMMENTS ***********************************************************************
  // Add a comment


  const addComment = async content => {
    // Send an API request to save the comment
    const requestBody = {
      query: `
        mutation {
          createComment(commentInput: {content: "${content}", commenterId: "${currentUser.id}", playlistOwnerId: "${profileUser.id}"}) {
            _id
          }
        }
      `
    };

    try {
      const res = await fetch(`http://localhost:${port}/graphql`, {
        method: 'POST',
        body: JSON.stringify(requestBody),
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authState.token}`
        }
      });

      if (res.status !== 200 && res.status !== 201) {
        throw new Error('Failed to create comment!');
      } // .json() is a method from fetch API that auto extracts & parses the res body


      const data = await res.json(); // Check for errors array in response

      if (data.errors) {
        data.errors.map(error => {
          console.log(error.message);
        });
        return;
      } // Refresh the profile with the new user data - to update the comment section


      fetchProfileUser(profileUser.id, false);
    } catch (err) {
      console.log(err);
    }
  }; // Remove a comment from a user's playlist


  const removeCommentFromPlaylist = async id => {
    // Send an API request to delete the comment
    const requestBody = {
      query: `
        mutation {
          removeComment(id: "${id}", playlistOwnerId: "${profileUser.id}") {
            playlistComments{
              _id,
              content,
              commenter {
                _id
              },
              createdAt,
              updatedAt
            }
          }
        }
      `
    };

    try {
      const res = await fetch(`http://localhost:${port}/graphql`, {
        method: 'POST',
        body: JSON.stringify(requestBody),
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authState.token}`
        }
      });

      if (res.status !== 200 && res.status !== 201) {
        throw new Error('Failed to remove comment!');
      } // .json() is a method from fetch API that auto extracts & parses the res body


      const data = await res.json();
      const comments = data.data.removeComment.playlistComments; // Check for errors array in response

      if (data.errors) {
        data.errors.map(error => {
          console.log(error.message);
        });
        return;
      } // Refresh the profile with the new user data - to update the comments


      updateProfileUserComments(comments);
    } catch (err) {
      console.log(err);
    }
  };

  const updateProfileUserComments = comments => {
    // Update the profile user's playlistComments in the global state
    setProfileUser(_objectSpread(_objectSpread({}, profileUser), {}, {
      playlistComments: comments
    }));
  };

  const editComment = async (id, content) => {
    // Make a API query to get a token
    const requestBody = {
      query: `
      mutation {
        editComment(id: "${id}", content: "${content}") {
          content
        }
      }
    `
    };

    try {
      const res = await fetch(`http://localhost:${port}/graphql`, {
        method: 'POST',
        body: JSON.stringify(requestBody),
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authState.token}`
        }
      });

      if (res.status !== 200 && res.status !== 201) {
        throw new Error('User update failed!');
      } // .json() is a method from fetch API that auto extracts & parses the res body


      const data = await res.json(); // Check for errors array in response

      if (data.errors) {
        data.errors.map(error => {
          console.log(error.message);
        });
        return;
      }

      console.log(data.data); // Refresh the profile with the new user data - to update the comments

      fetchProfileUser(profileUser.id, false);
    } catch (err) {
      console.log(err);
    }
  }; // Favourites *******************************************************************


  const addFavourite = async id => {
    // Send an API request to add the favourite
    const requestBody = {
      query: `
        mutation {
          addFavourite(id: "${id}") {
            _id
          }
        }
      `
    };

    try {
      const res = await fetch(`http://localhost:${port}/graphql`, {
        method: 'POST',
        body: JSON.stringify(requestBody),
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authState.token}`
        }
      });

      if (res.status !== 200 && res.status !== 201) {
        throw new Error('Failed to add favourite!');
      } // .json() is a method from fetch API that auto extracts & parses the res body


      const data = await res.json(); // Check for errors array in response

      if (data.errors) {
        data.errors.map(error => {
          console.log(error.message);
        });
        return;
      } // Refresh the currentUser's data to update the add favourite profile button
      // getUserDataById(currentUser.id)
      // Refresh the profile with the new user data - to update the favourites section
      // fetchProfileUser(id, false)


      getUserDataByToken(authState.token);
    } catch (err) {
      console.log(err);
    }
  }; // Remove a favourite from a users profile


  const removeFavourite = async id => {
    // Send an API request to delete the comment
    const requestBody = {
      query: `
        mutation {
          removeFavourite(id: "${id}") {
            favourites
          }
        }
      `
    };

    try {
      const res = await fetch(`http://localhost:${port}/graphql`, {
        method: 'POST',
        body: JSON.stringify(requestBody),
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authState.token}`
        }
      });

      if (res.status !== 200 && res.status !== 201) {
        throw new Error('Failed to remove favourite!');
      } // .json() is a method from fetch API that auto extracts & parses the res body


      const data = await res.json(); // console.log(data)

      const favourites = data.data.removeFavourite.favourites; // console.log(favourites)
      // Refresh the profile with the new user data - to update the favourites section
      // fetchProfileUser(id, false)
      // Refresh the currentUser's data to update the add favourite profile button
      // getUserDataById(currentUser.id)

      getUserDataByToken(authState.token); // Check for errors array in response

      if (data.errors) {
        data.errors.map(error => {
          console.log(error.message);
        });
        return;
      } // Refresh the profile with the new user data - to update the favourites


      updateProfileUserFavourites(favourites);
    } catch (err) {
      console.log(err);
    }
  };

  const updateProfileUserFavourites = favourites => {
    // Update the profile user's favourites in th global state
    setProfileUser(_objectSpread(_objectSpread({}, profileUser), {}, {
      favourites
    }));
  }; // PHOTO ***********************************************************************


  const uploadFile = async formData => {
    try {
      // Make API request to upload the file to the DB
      const res = await axios__WEBPACK_IMPORTED_MODULE_5___default.a.post(`http://localhost:${port}/upload`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${authState.token}`
        }
      }); // refresh the profile

      fetchProfileUser(currentUser.id);
    } catch (error) {
      console.log(error);
    }
  };

  return __jsx(_context_ContextProvider__WEBPACK_IMPORTED_MODULE_1__["default"], {
    value: {
      authState,
      currentUser,
      profileUser,
      setProfileUser,
      videoState,
      commentState,
      allUsers,
      autoplay,
      setAutoplay,
      // profilePhoto,
      login,
      register,
      logout,
      updateUser,
      getUserDataById,
      getUserDataByToken,
      fetchProfileUser,
      getCommentUser,
      getFavouriteUser,
      addVideoToPlaylist,
      clearProfileUser,
      removeVideoFromPlaylist,
      setCurrentVideo,
      addComment,
      editComment,
      removeCommentFromPlaylist,
      addFavourite,
      removeFavourite,
      uploadFile
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1064,
      columnNumber: 5
    }
  }, __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1095,
      columnNumber: 7
    }
  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_7__["AnimatePresence"], {
    exitBeforeEnter: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1096,
      columnNumber: 9
    }
  }, __jsx(Component, _extends({}, pageProps, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1097,
      columnNumber: 11
    }
  })))));
}; // App.getInitialProps = async context => {
//   const res = await fetch('path/to/endpoint', {
//     headers: {
//       cookie: ctx.req.headers.cookie,
//     },
//   });
//   const user = await res.json();
//   return { user };
// const token = cookie.load('token');
// console.log('token from cookie', token);
// // if (token) {
// //   setAuthState({ ...authState, authenticated: true, token: token}); 
// // }
// return {token : token};
// }


/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "apollo-boost":
/*!*******************************!*\
  !*** external "apollo-boost" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-boost");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "framer-motion":
/*!********************************!*\
  !*** external "framer-motion" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("framer-motion");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("querystring");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-cookies":
/*!********************************!*\
  !*** external "react-cookies" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-cookies");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xheW91dC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xvZ28uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9OYXZiYXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Vc2VyU2VhcmNoLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVXNlclNlYXJjaEJhci5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZXh0L0NvbnRleHRQcm92aWRlci5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZXh0L0dsb2JhbENvbnRleHQuanMiLCJ3ZWJwYWNrOi8vLy4vY3NzLXZhcmlhYmxlcy9jb2xvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvbGluay50c3giLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC93aXRoLXJvdXRlci50c3giLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9taXR0LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9mb3JtYXQtdXJsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLW1hdGNoZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXgudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvc2VhcmNoLXBhcmFtcy10by11cmwtcXVlcnkudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi91dGlscy50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9saW5rLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9yZWFjdC1pcy9janMvcmVhY3QtaXMuZGV2ZWxvcG1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL3JlYWN0LWlzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXBvbGxvLWJvb3N0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmcmFtZXItbW90aW9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJvcC10eXBlcy1leGFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInF1ZXJ5c3RyaW5nXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1jb29raWVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3R5bGVkLWpzeC9zdHlsZVwiIl0sIm5hbWVzIjpbIkxheW91dCIsInByb3BzIiwiY29sb3JzIiwicHJpbWFyeSIsImNoaWxkcmVuIiwiTG9nbyIsIk5hdmJhciIsImF1dGhTdGF0ZSIsImN1cnJlbnRVc2VyIiwiZmV0Y2hQcm9maWxlVXNlciIsImxvZ291dCIsInVzZUNvbnRleHQiLCJHbG9iYWxDb250ZXh0IiwibG9nb3V0SGFuZGxlciIsInNlYXJjaFVzZXJIYW5kbGVyIiwiY29uc29sZSIsImxvZyIsInByb2ZpbGVOYXZDbGlja0hhbmRsZXIiLCJpZCIsImhhbWJ1cmdlckhhbmRsZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwiZ3JhZGllbnQiLCJzZWNvbmRhcnkiLCJhdXRoZW50aWNhdGVkIiwiVXNlclNlYXJjaCIsImZpbHRlcmVkVXNlcnMiLCJzZXRGaWx0ZXJlZFVzZXJzIiwidXNlU3RhdGUiLCJzZWFyY2hNb2RlIiwic2V0U2VhcmNoTW9kZSIsInNlYXJjaElucHV0Iiwic2V0U2VhcmNoSW5wdXQiLCJ1c2VyQ2xpY2tIYW5kbGVyIiwiY2hlY2tTZWFyY2hNb2RlIiwiaW5wdXQiLCJtYXAiLCJ1c2VyIiwiYmluZCIsIm5hbWUiLCJsZW5ndGgiLCJVc2VyU2VhcmNoYmFyIiwicGxhY2Vob2xkZXIiLCJhbGxVc2VycyIsInVzZUVmZmVjdCIsInVzZXJzIiwiZmlsdGVyIiwic3Vic3RyIiwidG9VcHBlckNhc2UiLCJvbkNoYW5nZUhhbmRsZXIiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJvbkZvcm1TdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsIkNvbnRleHRQcm92aWRlciIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwic3RhdGUiLCJyZW5kZXIiLCJpbml0aWFsU3RhdGUiLCJhdXRoRGF0YSIsInZpZGVvIiwiY29tbWVudCIsImNyZWF0ZUNvbnRleHQiLCJyZXZlcnNlR3JhZGllbnQiLCJwaW5rR3JhZGVudCIsInJldmVyc2VQaW5rR3JhZGllbnQiLCJ0ZXJ0aWFyeSIsImxvY2F0aW9uT3JpZ2luIiwicmVzb2x2ZWQiLCJsaXN0ZW5lcnMiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsIndpbmRvdyIsInByZWZldGNoZWQiLCJjYWNoZWRPYnNlcnZlciIsImVudHJpZXMiLCJlbnRyeSIsImNiIiwicm9vdE1hcmdpbiIsImxpc3RlblRvSW50ZXJzZWN0aW9ucyIsIm9ic2VydmVyIiwiZ2V0T2JzZXJ2ZXIiLCJyb3V0ZXIiLCJlcnIiLCJocmVmIiwibm9kZU5hbWUiLCJpc0xvY2FsIiwic2Nyb2xsIiwiYXMiLCJyZXBsYWNlIiwic3VjY2VzcyIsImhhc1dhcm5lZCIsIlJlYWN0IiwicCIsInBhdGhuYW1lIiwicmVzb2x2ZWRIcmVmIiwiY2hpbGRFbG0iLCJpc1ByZWZldGNoZWQiLCJwcmVmZXRjaCIsImNoaWxkIiwiQ2hpbGRyZW4iLCJjaGlsZFByb3BzIiwicmVmIiwiZWwiLCJzZXRDaGlsZEVsbSIsIm9uQ2xpY2siLCJsaW5rQ2xpY2tlZCIsInByaW9yaXR5IiwicHJvY2VzcyIsIndhcm4iLCJQcm9wVHlwZXMiLCJyZXF1aXJlIiwiZXhhY3QiLCJMaW5rIiwic2hhbGxvdyIsInBhc3NIcmVmIiwicGF0aCIsIm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoIiwic2luZ2xldG9uUm91dGVyIiwicmVhZHlDYWxsYmFja3MiLCJyZWFkeSIsInVybFByb3BlcnR5RmllbGRzIiwicm91dGVyRXZlbnRzIiwiY29yZU1ldGhvZEZpZWxkcyIsIk9iamVjdCIsImdldCIsIlJvdXRlciIsImZpZWxkIiwiZ2V0Um91dGVyIiwiZXZlbnQiLCJldmVudEZpZWxkIiwiX3NpbmdsZXRvblJvdXRlciIsIm1lc3NhZ2UiLCJzdGFjayIsIlJvdXRlckNvbnRleHQiLCJjcmVhdGVSb3V0ZXIiLCJfcm91dGVyIiwiaW5zdGFuY2UiLCJDb21wb3NlZENvbXBvbmVudCIsImdldEluaXRpYWxQcm9wcyIsIldpdGhSb3V0ZXJXcmFwcGVyIiwiYWxsIiwib24iLCJvZmYiLCJlbWl0IiwiaGFuZGxlciIsImJhc2VQYXRoIiwiY2FuY2VsbGVkIiwiYmFzZSIsInVybEFzU3RyaW5nIiwiZmluYWxVcmwiLCJ1cmwiLCJhZGRCYXNlUGF0aCIsInJlc29sdmVIcmVmIiwibWFudWFsU2Nyb2xsUmVzdG9yYXRpb24iLCJjcmVkZW50aWFscyIsInJlcyIsImF0dGVtcHRzIiwiZmV0Y2hSZXRyeSIsImlzU2VydmVyUmVuZGVyIiwicm91dGUiLCJxdWVyeSIsImFzUGF0aCIsImNvbXBvbmVudHMiLCJzZGMiLCJzdWIiLCJjbGMiLCJwYWdlTG9hZGVyIiwiX2JwcyIsImV2ZW50cyIsIl93cmFwQXBwIiwiaXNTc3IiLCJpc0ZhbGxiYWNrIiwiX2luRmxpZ2h0Um91dGUiLCJfX05fU1NHIiwiaW5pdGlhbFByb3BzIiwiX19OX1NTUCIsIl9fTkVYVF9EQVRBX18iLCJ1cGRhdGUiLCJtb2QiLCJkYXRhIiwibmV3RGF0YSIsInJlbG9hZCIsImJhY2siLCJwdXNoIiwib3B0aW9ucyIsInByZXBhcmVVcmxBcyIsIlNUIiwicGVyZm9ybWFuY2UiLCJjbGVhbmVkQXMiLCJkZWxCYXNlUGF0aCIsInBhcnNlZCIsInRyeVBhcnNlUmVsYXRpdmVVcmwiLCJtZXRob2QiLCJyb3V0ZVJlZ2V4Iiwicm91dGVNYXRjaCIsIm1pc3NpbmdQYXJhbXMiLCJwYXJhbSIsImFzUGF0aG5hbWUiLCJyb3V0ZUluZm8iLCJhcHBDb21wIiwiY2hhbmdlU3RhdGUiLCJfX04iLCJidWlsZENhbmNlbGxhdGlvbkVycm9yIiwicGFnZSIsImVycm9yIiwiY2FjaGVkUm91dGVJbmZvIiwiaXNWYWxpZEVsZW1lbnRUeXBlIiwiZGF0YUhyZWYiLCJzZXQiLCJiZWZvcmVQb3BTdGF0ZSIsIm9ubHlBSGFzaENoYW5nZSIsIm5ld0hhc2giLCJvbGRVcmxOb0hhc2giLCJvbGRIYXNoIiwic2Nyb2xsVG9IYXNoIiwiaGFzaCIsImlkRWwiLCJuYW1lRWwiLCJ1cmxJc05ldyIsIlByb21pc2UiLCJjYW5jZWwiLCJjb21wb25lbnRSZXN1bHQiLCJfZ2V0RGF0YSIsImZuIiwiX2dldFN0YXRpY0RhdGEiLCJmZXRjaE5leHREYXRhIiwiX2dldFNlcnZlckRhdGEiLCJBcHBUcmVlIiwiY3R4IiwiYWJvcnRDb21wb25lbnRMb2FkIiwibm90aWZ5Iiwic2xhc2hlZFByb3RvY29scyIsInByb3RvY29sIiwidXJsT2JqIiwiaG9zdCIsImF1dGgiLCJlbmNvZGVVUklDb21wb25lbnQiLCJob3N0bmFtZSIsInNlYXJjaCIsIlRFU1RfUk9VVEUiLCJEVU1NWV9CQVNFIiwicmVzb2x2ZWRCYXNlIiwib3JpZ2luIiwicmUiLCJkZWNvZGUiLCJkZWNvZGVVUklDb21wb25lbnQiLCJwYXJhbXMiLCJzbHVnTmFtZSIsImciLCJncm91cHMiLCJtIiwic3RyIiwib3B0aW9uYWwiLCJyZXBlYXQiLCJrZXkiLCJzZWdtZW50cyIsIm5vcm1hbGl6ZWRSb3V0ZSIsImdyb3VwSW5kZXgiLCJwYXJhbWV0ZXJpemVkUm91dGUiLCJzZWdtZW50IiwicGFyc2VQYXJhbWV0ZXIiLCJwb3MiLCJlc2NhcGVSZWdleCIsInJvdXRlS2V5Q2hhckNvZGUiLCJyb3V0ZUtleUNoYXJMZW5ndGgiLCJnZXRTYWZlUm91dGVLZXkiLCJyb3V0ZUtleSIsImkiLCJTdHJpbmciLCJyb3V0ZUtleXMiLCJuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSIsImNsZWFuZWRLZXkiLCJpbnZhbGlkS2V5IiwiaXNOYU4iLCJwYXJzZUludCIsIm5hbWVkUmVnZXgiLCJzZWFyY2hQYXJhbXMiLCJBcnJheSIsInVzZWQiLCJyZXN1bHQiLCJwb3J0IiwiZ2V0TG9jYXRpb25PcmlnaW4iLCJBcHAiLCJnZXREaXNwbGF5TmFtZSIsInBhZ2VQcm9wcyIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJpc1Jlc1NlbnQiLCJ1cmxPYmplY3RLZXlzIiwiU1AiLCJlbnYiLCJQT1JUIiwidG9rZW4iLCJnZXRBbGxVc2VycyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJzZXRBdXRoU3RhdGUiLCJnZXRVc2VyRGF0YUJ5VG9rZW4iLCJlbXB0eVVzZXIiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsImpvYlRpdGxlIiwibG9jYXRpb24iLCJsYW5ndWFnZXMiLCJhYm91dCIsIm93bmVkVmlkZW9zIiwidXNlckNvbW1lbnRzIiwicGxheWxpc3RDb21tZW50cyIsImZhdm91cml0ZXMiLCJwcm9maWxlUGhvdG9GaWxlbmFtZSIsInVzZXJJZCIsInRva2VuRXhwaXJhdGlvbiIsInNldEN1cnJlbnRVc2VyIiwicHJvZmlsZVVzZXIiLCJzZXRQcm9maWxlVXNlciIsInZpZGVvU3RhdGUiLCJzZXRWaWRlb1N0YXRlIiwidGl0bGUiLCJ2aWRlb0lkIiwiY29tbWVudFN0YXRlIiwic2V0Q29tbWVudFN0YXRlIiwic2V0QWxsVXNlcnMiLCJhdXRvcGxheSIsInNldEF1dG9wbGF5IiwibG9naW4iLCJlbWFpbCIsInBhc3N3b3JkIiwicmVxdWVzdEJvZHkiLCJmZXRjaCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiaGVhZGVycyIsInN0YXR1cyIsIkVycm9yIiwianNvbiIsImVycm9ycyIsInNldEl0ZW0iLCJyZWdpc3RlciIsIm5ld1VzZXJFbWFpbCIsImNyZWF0ZVVzZXIiLCJyZW1vdmVJdGVtIiwidXBkYXRlVXNlciIsInVzZXJzV2l0aEZ1bGxOYW1lIiwiX2lkIiwiZ2V0VXNlckRhdGFCeUlkIiwidXNlckJ5SWQiLCJ1c2VyQnlUb2tlbiIsImluaXRpYWxGZXRjaCIsInVuZGVmaW5lZCIsInNldEN1cnJlbnRWaWRlbyIsInZpZGVvVVJMIiwiY2xlYXJQcm9maWxlVXNlciIsImdldENvbW1lbnRVc2VyIiwiY29tbWVudFVzZXIiLCJnZXRGYXZvdXJpdGVVc2VyIiwiZmF2b3VyaXRlVXNlciIsImFkZFZpZGVvVG9QbGF5bGlzdCIsInRodW1ibmFpbFVSTCIsInJlbW92ZVZpZGVvRnJvbVBsYXlsaXN0IiwicmVtb3ZlVmlkZW8iLCJ2aWRlb3MiLCJ1cGRhdGVQcm9maWxlVXNlclZpZGVvcyIsImFkZENvbW1lbnQiLCJjb250ZW50IiwicmVtb3ZlQ29tbWVudEZyb21QbGF5bGlzdCIsImNvbW1lbnRzIiwicmVtb3ZlQ29tbWVudCIsInVwZGF0ZVByb2ZpbGVVc2VyQ29tbWVudHMiLCJlZGl0Q29tbWVudCIsImFkZEZhdm91cml0ZSIsInJlbW92ZUZhdm91cml0ZSIsInVwZGF0ZVByb2ZpbGVVc2VyRmF2b3VyaXRlcyIsInVwbG9hZEZpbGUiLCJmb3JtRGF0YSIsImF4aW9zIiwicG9zdCJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FB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QUF1QnRCVCxxQkF2QnNCO0FBd0J0QmEsZ0JBeEJzQjtBQXlCdEJNLGlCQXpCc0I7QUEwQnRCSiwrQkExQnNCO0FBMkJ0Qkssa0JBM0JzQjtBQTRCdEJDLHFCQTVCc0I7QUE2QnRCRTtBQTdCc0IsS0FBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQStCRSxNQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDZEQUFEO0FBQWlCLG1CQUFlLE1BQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLFNBQUQsZUFBZXhGLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQURGLENBREYsQ0EvQkYsQ0FERjtBQXVDRCxDQXBrQ0QsQyxDQXVrQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVFO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNGOzs7QUFLZUYsa0VBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2bUNBLHlDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLDBDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLDBDOzs7Ozs7Ozs7OztBQ0FBLDZDIiwiZmlsZSI6InBhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIik7IiwiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IE5hdmJhciBmcm9tICcuL05hdmJhcic7XHJcbmltcG9ydCBjb2xvcnMgZnJvbSAnLi4vY3NzLXZhcmlhYmxlcy9jb2xvcnMnO1xyXG5cclxuXHJcbmNvbnN0IExheW91dCA9IChwcm9wcykgPT4gKFxyXG4gIDxkaXY+XHJcbiAgICA8SGVhZD5cclxuICAgICAgPHRpdGxlPkNvZGVUdW5lczwvdGl0bGU+XHJcbiAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUJhbG9vK1RoYW1iaSsyJmRpc3BsYXk9c3dhcFwiIHJlbD1cInN0eWxlc2hlZXRcIj48L2xpbms+XHJcbiAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9zdGFja3BhdGguYm9vdHN0cmFwY2RuLmNvbS9mb250LWF3ZXNvbWUvNC43LjAvY3NzL2ZvbnQtYXdlc29tZS5taW4uY3NzXCIvPlxyXG4gICAgPC9IZWFkPlxyXG4gICAgPE5hdmJhci8+XHJcbiAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgICBcclxuXHJcbiAgICA8c3R5bGUgZ2xvYmFsIGpzeD57YFxyXG4gICAgXHJcbiAgICAgICoge1xyXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGJvZHkge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnQmFsb28gVGhhbWJpIDInLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjhlbTtcclxuICAgICAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBwdXJwbGU7ICovXHJcbiAgICAgICAgLyogYmFja2dyb3VuZC1jb2xvcjogI2RkMDBmZjsgKi9cclxuICAgICAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOyAqL1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICAgICAgLyogd2lkdGg6IDEwMHZ3OyAqL1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuY29udGFpbmVyIHtcclxuICAgICAgICBtYXgtd2lkdGg6IDExMDBweDtcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgfVxyXG5cclxuICAgICAgYSB7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgfVxyXG5cclxuICAgICAgYnV0dG9uIHtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgcGFkZGluZzogMC41cmVtIDFyZW0gO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtjb2xvcnMucHJpbWFyeX07XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDgwbXMgZWFzZS1pbjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICBidXR0b246YWN0aXZlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBidXR0b246Zm9jdXMge1xyXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIGJ1dHRvbjpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U1MzA1YTtcclxuICAgICAgfVxyXG4gICAgXHJcbiAgICBgfSBcclxuICAgIDwvc3R5bGU+IFxyXG4gIDwvZGl2PlxyXG4pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XHJcbiIsImltcG9ydCBjb2xvcnMgZnJvbSAnLi4vY3NzLXZhcmlhYmxlcy9jb2xvcnMnO1xyXG5cclxuXHJcbmNvbnN0IExvZ28gPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzdmcgaWQ9XCJMYXllcl8xXCIgZGF0YS1uYW1lPVwiTGF5ZXIgMVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiNTAgNTAgMjQwIDIzMFwiIHg9XCIwXCIgeT1cIjBcIj5cclxuXHJcbiAgICAgIDxwYXRoIGNsYXNzTmFtZT1cInN0MFwiIGQ9XCJNMTQ3LjEsMTQuMmMtMzUsMC02My42LDI3LjktNjMuNiw2Mi4xdjEuM2MwLDcuNSwwLDE2LDIuNywyM2wtMC43LDAuN2MtMiwxLjctMi40LDUuMS0xLjEsOC4xTDk3LjUsMTQxXHJcblx0XHRjMS4xLDIuOSwzLjcsNC44LDYuMSw0LjhjMC4xLDAsMC4zLDAsMC40LDBsMTcuNy0xLjZjMS42LTAuMSwyLjgtMSwzLjctMi4zYzEuMS0xLjksMS4xLTQuNSwwLjEtNi45bC0xNy41LTQyLjNcclxuXHRcdGMtMS0yLjUtMi44LTQuMi00LjktNC42Yy0xLjYtMC40LTMuMSwwLTQuMiwxbC0wLjYsMC42Yy0yLjMtNS44LTMuNC0xMS4zLTMuNC0xNi42YzAtMjcuMywyMy40LTQ5LjUsNTIuMy00OS41XHJcblx0XHRzNTIuMywyMi4yLDUyLjMsNDkuNWMwLDUuNS0xLjEsMTEtMy40LDE2LjZsLTAuNi0wLjZjLTEuMS0xLTIuNy0xLjQtNC4yLTFjLTIuMSwwLjQtNCwyLjItNC45LDQuNmwtMTcuNSw0Mi4zXHJcblx0XHRjLTEsMi41LTEsNS4xLDAuMSw2LjljMC44LDEuNCwyLjEsMi4zLDMuNywyLjNsMTcuOCwxLjRjMC4xLDAsMC4zLDAsMC40LDBjMi40LDAsNC45LTEuOSw2LjEtNC44bDEzLjEtMzEuNmMxLjMtMywwLjctNi40LTEuMS04LjFcclxuXHRcdGwtMC43LTAuN2MyLjUtNi44LDIuNS0xNS4zLDIuNS0yMi44di0xLjNDMjEwLjYsNDIsMTgyLjEsMTQuMiwxNDcuMSwxNC4yeiBNMTk5LjMsNTYuNmw0LjUtMS4zYzEuNiw0LDIuNyw4LjIsMy4yLDEyLjZsLTUuMiwxLjRcclxuXHRcdEMyMDEuNyw2NC44LDIwMC44LDYwLjcsMTk5LjMsNTYuNnogTTkyLjEsNjkuM2wtNS4yLTEuNGMwLjYtNC4zLDEuNy04LjUsMy4yLTEyLjZsNC41LDEuM0M5My40LDYwLjcsOTIuNCw2NC44LDkyLjEsNjkuM3pcclxuXHRcdCBNMTAzLjYsMTQyLjdjLTEuMywwLjEtMy0xLjItMy43LTNsLTEzLjEtMzEuNWMtMC43LTEuOS0wLjYtMy45LDAuNC00LjhsOS43LTguOGwxOS4xLDQ3LjJMMTAzLjYsMTQyLjd6IE0xMDEuOSw5MC43XHJcblx0XHRjMC4xLDAsMC4zLDAsMC42LDBjMS4zLDAuMywyLjQsMS40LDMsMi45bDE3LjUsNDIuMmMwLjcsMS42LDAuNiwzLjIsMCw0LjJjLTAuNCwwLjYtMC44LDEtMS42LDFsLTIuNCwwLjFsLTE5LjgtNDlsMS40LTEuM1xyXG5cdFx0QzEwMSw5MC44LDEwMS41LDkwLjcsMTAxLjksOTAuN3ogTTk1LjksOTEuN2wtNy41LDYuOGMtMi4xLTYuNC0yLjEtMTQtMi4xLTIwLjl2LTEuM2MwLTEuOSwwLjEtMy42LDAuMy01LjVsNS40LDEuNFxyXG5cdFx0YzAsMC4zLDAsMC40LDAsMC43QzkyLDc5LjEsOTMuMyw4NS4yLDk1LjksOTEuN3ogTTE0Ny4xLDIwLjVjLTIzLjMsMC00My4yLDEzLjktNTEuMywzMy4ybC00LjQtMS4yYzkuMy0yMC44LDMwLjgtMzUuNSw1NS43LTM1LjVcclxuXHRcdHM0Ni4zLDE0LjcsNTUuNywzNS43bC00LjQsMS4yQzE5MC4zLDM0LjQsMTcwLjQsMjAuNSwxNDcuMSwyMC41eiBNMTcxLjIsMTQwLjJjLTAuNy0xLjItMC43LTIuNywwLTQuMmwxNy41LTQyLjJcclxuXHRcdGMwLjctMS42LDEuOC0yLjYsMy0yLjljMC4xLDAsMC40LDAsMC42LDBjMC40LDAsMC44LDAuMSwxLjMsMC40bDEuNCwxLjNsLTE5LjgsNDlsLTIuNC0wLjRDMTcyLjEsMTQxLjIsMTcxLjcsMTQwLjgsMTcxLjIsMTQwLjJ6XHJcblx0XHQgTTIwNy40LDEwOC4ybC0xMy4xLDMxLjZjLTAuNywxLjktMi40LDMuMi0zLjcsM2wtMTIuNi0xbDYuNS0xNmgwLjFoLTAuMWwxMi42LTMxLjJsOS43LDguOEMyMDgsMTA0LjMsMjA4LjEsMTA2LjMsMjA3LjQsMTA4LjJ6XHJcblx0XHQgTTE5OC4yLDkxLjdjMi43LTYuNSw0LTEyLjYsNC0xOC44YzAtMC4zLDAtMC40LDAtMC43bDUuNC0xLjRjMC4xLDEuNywwLjMsMy42LDAuMyw1LjV2MS4zYzAsNi45LDAsMTQuNy0yLjEsMjAuOUwxOTguMiw5MS43elwiLz5cclxuICAgICAgPHBhdGggY2xhc3NOYW1lPVwic3QwXCIgZD1cIk0yMTMsMTg1LjhoLTI1di0zLjVjMC0xLjUtMS40LTIuOC0zLjEtMi44aC03di0xLjZjMC00LjItMy44LTcuNi04LjYtNy42aC0zNS4zYy00LjMsMC03LjgtMy4xLTcuOC03XHJcblx0XHRcdGMwLTMuOCwzLjUtNyw3LjgtN2g0Ny45YzQuNywwLDguNi0zLjQsOC42LTcuNnYtMy4xYzAtMC41LTAuNS0wLjktMS4xLTAuOXMtMS4xLDAuNC0xLjEsMC45djMuMWMwLDMuMS0yLjksNS43LTYuNCw1LjdoLTQ3LjlcclxuXHRcdFx0Yy01LjUsMC0xMCw0LTEwLDguOWMwLDQuOSw0LjUsOC45LDEwLDguOWgzNS4zYzMuNSwwLDYuNCwyLjYsNi40LDUuN3YxLjZoLTQuOGMtMS43LDAtMy4xLDEuMi0zLjEsMi44djMuNUg4NC43XHJcblx0XHRcdGMtMi45LDAtNS4zLDIuMS01LjMsNC43djYxLjhjMCwyLjYsMi40LDQuNyw1LjMsNC43SDIxM2MyLjksMCw1LjMtMi4xLDUuMy00Ljd2LTYxLjhDMjE4LjIsMTg3LjksMjE1LjksMTg1LjgsMjEzLDE4NS44elxyXG5cdFx0XHQgTTE2OS45LDE4Mi4zYzAtMC41LDAuNC0wLjksMS0wLjloMTMuOWMwLjUsMCwxLDAuNCwxLDAuOXYzLjVoLTE1LjlWMTgyLjN6IE0yMTYuMSwyNTIuM2MwLDEuNS0xLjQsMi44LTMuMiwyLjhIODQuN1xyXG5cdFx0XHRjLTEuNywwLTMuMi0xLjMtMy4yLTIuOHYtNjEuOGMwLTEuNSwxLjQtMi44LDMuMi0yLjhoODQuMmMwLDAsMCwwLDAsMGMwLDAsMCwwLDAsMGgxOGMwLDAsMCwwLDAsMGMwLDAsMCwwLDAsMGgyNlxyXG5cdFx0XHRjMS43LDAsMy4yLDEuMywzLjIsMi44VjI1Mi4zelwiLz5cclxuICAgICAgPHBhdGggY2xhc3NOYW1lPVwic3QwXCIgZD1cIk0yMDYuMiwxOTUuNmgtMTMuOWMtMC42LDAtMS4xLDAuNC0xLjEsMC45djEyLjNjMCwwLjUsMC41LDAuOSwxLjEsMC45aDEzLjljMC42LDAsMS4xLTAuNCwxLjEtMC45di0xMi4zXHJcblx0XHRcdEMyMDcuMywxOTYsMjA2LjgsMTk1LjYsMjA2LjIsMTk1LjZ6IE0yMDUuMiwyMDcuOWgtMTEuOHYtMTAuNGgxMS44VjIwNy45elwiLz5cclxuICAgICAgPHBhdGggY2xhc3NOYW1lPVwic3QwXCIgZD1cIk0xODEuNSwxOTUuNmgtMTMuOWMtMC42LDAtMS4xLDAuNC0xLjEsMC45djEyLjNjMCwwLjUsMC41LDAuOSwxLjEsMC45aDEzLjljMC42LDAsMS4xLTAuNCwxLjEtMC45di0xMi4zXHJcblx0XHRcdEMxODIuNiwxOTYsMTgyLjEsMTk1LjYsMTgxLjUsMTk1LjZ6IE0xODAuNSwyMDcuOWgtMTEuOHYtMTAuNGgxMS44VjIwNy45elwiLz5cclxuICAgICAgPHBhdGggY2xhc3NOYW1lPVwic3QwXCIgZD1cIk0xNDIuOSwyMDkuOGgxMy45YzAuNiwwLDEuMS0wLjQsMS4xLTAuOXYtMTIuM2MwLTAuNS0wLjUtMC45LTEuMS0wLjloLTEzLjljLTAuNiwwLTEuMSwwLjQtMS4xLDAuOXYxMi4zXHJcblx0XHRcdEMxNDEuOSwyMDkuNCwxNDIuMywyMDkuOCwxNDIuOSwyMDkuOHogTTE0NCwxOTcuNWgxMS44djEwLjRIMTQ0VjE5Ny41elwiLz5cclxuICAgICAgPHBhdGggY2xhc3NOYW1lPVwic3QwXCIgZD1cIk0xMTguMiwyMDkuOGgxMy45YzAuNiwwLDEuMS0wLjQsMS4xLTAuOXYtMTIuM2MwLTAuNS0wLjUtMC45LTEuMS0wLjloLTEzLjljLTAuNiwwLTEuMSwwLjQtMS4xLDAuOXYxMi4zXHJcblx0XHRcdEMxMTcuMiwyMDkuNCwxMTcuNiwyMDkuOCwxMTguMiwyMDkuOHogTTExOS4zLDE5Ny41SDEzMXYxMC40aC0xMS44VjE5Ny41elwiLz5cclxuICAgICAgPHBhdGggY2xhc3NOYW1lPVwic3QwXCIgZD1cIk0xMDcuNCwxOTUuNkg5My41Yy0wLjYsMC0xLjEsMC40LTEuMSwwLjl2MTIuM2MwLDAuNSwwLjUsMC45LDEuMSwwLjloMTMuOWMwLjYsMCwxLjEtMC40LDEuMS0wLjl2LTEyLjNcclxuXHRcdFx0QzEwOC41LDE5NiwxMDgsMTk1LjYsMTA3LjQsMTk1LjZ6IE0xMDYuMywyMDcuOUg5NC42di0xMC40aDExLjhWMjA3Ljl6XCIvPlxyXG4gICAgICA8cGF0aCBjbGFzc05hbWU9XCJzdDBcIiBkPVwiTTIwNi4yLDIxNC4zaC0xMy45Yy0wLjYsMC0xLjEsMC40LTEuMSwwLjl2MTIuM2MwLDAuNSwwLjUsMC45LDEuMSwwLjloMTMuOWMwLjYsMCwxLjEtMC40LDEuMS0wLjl2LTEyLjNcclxuXHRcdFx0QzIwNy4zLDIxNC43LDIwNi44LDIxNC4zLDIwNi4yLDIxNC4zeiBNMjA1LjIsMjI2LjZoLTExLjh2LTEwLjRoMTEuOFYyMjYuNnpcIi8+XHJcbiAgICAgIDxwYXRoIGNsYXNzTmFtZT1cInN0MFwiIGQ9XCJNMTgxLjUsMjE0LjNoLTEzLjljLTAuNiwwLTEuMSwwLjQtMS4xLDAuOXYxMi4zYzAsMC41LDAuNSwwLjksMS4xLDAuOWgxMy45YzAuNiwwLDEuMS0wLjQsMS4xLTAuOXYtMTIuM1xyXG5cdFx0XHRDMTgyLjYsMjE0LjcsMTgyLjEsMjE0LjMsMTgxLjUsMjE0LjN6IE0xODAuNSwyMjYuNmgtMTEuOHYtMTAuNGgxMS44VjIyNi42elwiLz5cclxuICAgICAgPHBhdGggY2xhc3NOYW1lPVwic3QwXCIgZD1cIk0xNDIuOSwyMjguNWgxMy45YzAuNiwwLDEuMS0wLjQsMS4xLTAuOXYtMTIuM2MwLTAuNS0wLjUtMC45LTEuMS0wLjloLTEzLjljLTAuNiwwLTEuMSwwLjQtMS4xLDAuOXYxMi4zXHJcblx0XHRcdEMxNDEuOSwyMjguMSwxNDIuMywyMjguNSwxNDIuOSwyMjguNXogTTE0NCwyMTYuMmgxMS44djEwLjRIMTQ0VjIxNi4yelwiLz5cclxuICAgICAgPHBhdGggY2xhc3NOYW1lPVwic3QwXCIgZD1cIk0xMTguMiwyMjguNWgxMy45YzAuNiwwLDEuMS0wLjQsMS4xLTAuOXYtMTIuM2MwLTAuNS0wLjUtMC45LTEuMS0wLjloLTEzLjljLTAuNiwwLTEuMSwwLjQtMS4xLDAuOXYxMi4zXHJcblx0XHRcdEMxMTcuMiwyMjguMSwxMTcuNiwyMjguNSwxMTguMiwyMjguNXogTTExOS4zLDIxNi4ySDEzMXYxMC40aC0xMS44VjIxNi4yelwiLz5cclxuICAgICAgPHBhdGggY2xhc3NOYW1lPVwic3QwXCIgZD1cIk0xMDcuNCwyMTQuM0g5My41Yy0wLjYsMC0xLjEsMC40LTEuMSwwLjl2MTIuM2MwLDAuNSwwLjUsMC45LDEuMSwwLjloMTMuOWMwLjYsMCwxLjEtMC40LDEuMS0wLjl2LTEyLjNcclxuXHRcdFx0QzEwOC41LDIxNC43LDEwOCwyMTQuMywxMDcuNCwyMTQuM3ogTTEwNi4zLDIyNi42SDk0LjZ2LTEwLjRoMTEuOFYyMjYuNnpcIi8+XHJcbiAgICAgIDxwYXRoIGNsYXNzTmFtZT1cInN0MFwiIGQ9XCJNMjA2LjIsMjMzaC0xMy45Yy0wLjYsMC0xLjEsMC40LTEuMSwwLjl2MTIuM2MwLDAuNSwwLjUsMC45LDEuMSwwLjloMTMuOWMwLjYsMCwxLjEtMC40LDEuMS0wLjl2LTEyLjNcclxuXHRcdFx0QzIwNy4zLDIzMy40LDIwNi44LDIzMywyMDYuMiwyMzN6IE0yMDUuMiwyNDUuM2gtMTEuOHYtMTAuNGgxMS44VjI0NS4zelwiLz5cclxuICAgICAgPHBhdGggY2xhc3NOYW1lPVwic3QwXCIgZD1cIk0xMDcuNCwyMzNIOTMuNWMtMC42LDAtMS4xLDAuNC0xLjEsMC45djEyLjNjMCwwLjUsMC41LDAuOSwxLjEsMC45aDEzLjljMC42LDAsMS4xLTAuNCwxLjEtMC45di0xMi4zXHJcblx0XHRcdEMxMDguNSwyMzMuNCwxMDgsMjMzLDEwNy40LDIzM3ogTTEwNi4zLDI0NS4zSDk0LjZ2LTEwLjRoMTEuOFYyNDUuM3pcIi8+XHJcbiAgICAgIDxwYXRoIGNsYXNzTmFtZT1cInN0MFwiIGQ9XCJNMTgxLjUsMjMzaC02NS40Yy0wLjYsMC0xLjEsMC40LTEuMSwwLjl2MTIuM2MwLDAuNSwwLjUsMC45LDEuMSwwLjloNjUuNGMwLjYsMCwxLjEtMC40LDEuMS0wLjl2LTEyLjNcclxuXHRcdFx0QzE4Mi42LDIzMy40LDE4Mi4xLDIzMywxODEuNSwyMzN6IE0xODAuNSwyNDUuM2gtNjMuM3YtMTAuNGg2My4zVjI0NS4zelwiLz5cclxuICAgIFxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgIHN2ZyB7XHJcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgICBmaWxsOiAke2NvbG9ycy5wcmltYXJ5fTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnN0MCB7XHJcbiAgICAgICAgZmlsbDogd2hpdGU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8qIE1lZGlhIHF1ZXJpZXMgKi9cclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ5MHB4KXtcclxuICAgICAgICBzdmcge1xyXG4gICAgICAgICAgd2lkdGg6IDgwcHhcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgYH08L3N0eWxlPlxyXG4gICAgXHJcbiAgICBcclxuICAgIFxyXG4gICAgPC9zdmc+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dvO1xyXG4iLCJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgR2xvYmFsQ29udGV4dH0gZnJvbSAnLi4vY29udGV4dC9HbG9iYWxDb250ZXh0JztcclxuaW1wb3J0IFVzZXJTZWFyY2ggZnJvbSAnLi9Vc2VyU2VhcmNoJztcclxuaW1wb3J0IGNvbG9ycyBmcm9tICcuLi9jc3MtdmFyaWFibGVzL2NvbG9ycydcclxuaW1wb3J0IExvZ28gZnJvbSAnLi9Mb2dvJztcclxuXHJcblxyXG5jb25zdCBOYXZiYXIgPSAoKSA9PiB7XHJcblxyXG4gIGNvbnN0IHsgYXV0aFN0YXRlLCBjdXJyZW50VXNlciwgZmV0Y2hQcm9maWxlVXNlciwgbG9nb3V0IH0gPSB1c2VDb250ZXh0KEdsb2JhbENvbnRleHQpO1xyXG5cclxuICBjb25zdCBsb2dvdXRIYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgbG9nb3V0KCk7XHJcbiAgfTtcclxuICBcclxuICBjb25zdCBzZWFyY2hVc2VySGFuZGxlciA9ICgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKCdzZWFyY2hVc2VySGFuZGxlciBjYWxsZWQnKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHByb2ZpbGVOYXZDbGlja0hhbmRsZXIgPSAoKSA9PiB7XHJcbiAgICBmZXRjaFByb2ZpbGVVc2VyKGN1cnJlbnRVc2VyLmlkLCBmYWxzZSk7XHJcbiAgICBoYW1idXJnZXJIYW5kbGVyKCk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW1idXJnZXJIYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hhbWJ1cmdlcicpLmNsYXNzTGlzdC50b2dnbGUoJ29wZW4nKTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYXYtbWVudScpLmNsYXNzTGlzdC50b2dnbGUoJ2Ryb3Bkb3duJyk7XHJcbiAgfVxyXG4gIFxyXG5cclxuICByZXR1cm4gKCAgICBcclxuICAgICAgPG5hdiBpZD1cIm5hdmJhclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGlkPVwibmF2LWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgPGRpdiBpZD1cImJyYW5kXCI+XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgICA8aDE+Q29kZVR1bmVzPC9oMT5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGlkPVwibG9nb1wiPlxyXG4gICAgICAgICAgICAgIDxMb2dvLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8VXNlclNlYXJjaCAvPlxyXG5cclxuICAgICAgICAgICAgPHVsIGlkPVwibmF2LW1lbnVcIj5cclxuICAgICAgICAgICAge2F1dGhTdGF0ZS5hdXRoZW50aWNhdGVkICYmIGN1cnJlbnRVc2VyICE9PSBudWxsICYmXHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvZmlsZS9bdXNlcklkXVwiIGFzPXtgL3Byb2ZpbGUvJHtjdXJyZW50VXNlci5pZH1gfT5cclxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiIG9uQ2xpY2s9e3Byb2ZpbGVOYXZDbGlja0hhbmRsZXJ9PlxyXG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtdXNlclwiPjwvaT4gXHJcbiAgICAgICAgICAgICAgICBQcm9maWxlXHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hYm91dFwiPlxyXG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCIgb25DbGljaz17aGFtYnVyZ2VySGFuZGxlcn0+XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1pbmZvXCI+PC9pPiBcclxuICAgICAgICAgICAgICAgIEFib3V0XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIHshYXV0aFN0YXRlLmF1dGhlbnRpY2F0ZWQgJiYgXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hdXRoXCI+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiIG9uQ2xpY2s9e2hhbWJ1cmdlckhhbmRsZXJ9PlxyXG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1zaWduLWluXCI+PC9pPiBcclxuICAgICAgICAgICAgICAgICAgTG9naW5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hdXRoXCI+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiIG9uQ2xpY2s9e2hhbWJ1cmdlckhhbmRsZXJ9PlxyXG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS11c2VyLXBsdXNcIj48L2k+IFxyXG4gICAgICAgICAgICAgICAgICBSZWdpc3RlclxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAge2F1dGhTdGF0ZS5hdXRoZW50aWNhdGVkICYmXHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCIgb25DbGljaz17bG9nb3V0SGFuZGxlcn0+XHJcbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXNpZ24tb3V0XCI+PC9pPiBcclxuICAgICAgICAgICAgICAgICAgTG9nb3V0XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8ZGl2IGlkPVwiaGFtYnVyZ2VyXCIgb25DbGljaz17aGFtYnVyZ2VySGFuZGxlcn0+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaW5lXCIgaWQ9XCJsaW5lMVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGluZVwiIGlkPVwibGluZTJcIj48L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmVcIiBpZD1cImxpbmUzXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICBcclxuICAgICAgICAgICNuYXZiYXIge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxLjVyZW0gMDtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgICAgICAgICAvKiBtYXJnaW4tYm90dG9tOiAycmVtOyAqL1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAke2NvbG9ycy5ncmFkaWVudH07XHJcbiAgICAgICAgICAgIC8qIGNvbG9yOiB3aGl0ZTsgKi9cclxuICAgICAgICAgICAgLyogYmFja2dyb3VuZC1jb2xvcjogIzkzZmZmYjsgKi9cclxuICAgICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAgICNuYXYtY29udGVudCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICNuYXYtbWVudSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAjYnJhbmQgaDEge1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuM3JlbTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAubmF2LWl0ZW0ge1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCAxcmVtO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiB0ZXh0LXNoYWRvdyAwLjJzO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5uYXYtaXRlbTpob3ZlciB7XHJcbiAgICAgICAgICAgIHRleHQtc2hhZG93OiAwcHggMHB4IDhweCByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgaSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgI3NlYXJjaCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgI3NlYXJjaGJhcntcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgbGFiZWwge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRvcDogMTBweDtcclxuICAgICAgICAgICAgbGVmdDogMTJweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgI2xvZ28ge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC8qIE1lZGlhIHF1ZXJpZXMgKi9cclxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMTUwcHgpe1xyXG4gICAgICAgICAgICAjbmF2LWNvbnRlbnQge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGgxIHtcclxuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMnJlbTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgI25hdi1tZW51IHtcclxuICAgICAgICAgICAgICAvKiB3aWR0aDogMzV2dzsgKi9cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMTAwcHgpIHtcclxuICAgICAgICAgICAgI25hdi1jb250ZW50IHtcclxuICAgICAgICAgICAgICB3aWR0aDogOTclO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDk1MHB4KSB7XHJcbiAgICAgICAgICAgIGJvZHkge1xyXG4gICAgICAgICAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgI25hdmJhciB7XHJcbiAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAjbmF2LW1lbnUge1xyXG4gICAgICAgICAgICAgIHotaW5kZXg6IDEwMTtcclxuICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICB0b3A6IDEwMCU7XHJcbiAgICAgICAgICAgICAgcmlnaHQ6IDBweDtcclxuICAgICAgICAgICAgICB3aWR0aDogMzN2dztcclxuICAgICAgICAgICAgICBjbGlwLXBhdGg6IGNpcmNsZSgwcHggYXQgdG9wIHJpZ2h0KTtcclxuICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBjbGlwLXBhdGggMC43cyBlYXNlO1xyXG4gICAgICAgICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogLTExcHggMTBweCAxOXB4IC0xMHB4IHJnYmEoMCwwLDAsMC4yNyk7XHJcbiAgICAgICAgICAgICAgLW1vei1ib3gtc2hhZG93OiAtMTFweCAxMHB4IDE5cHggLTEwcHggcmdiYSgwLDAsMCwwLjI3KTtcclxuICAgICAgICAgICAgICBib3gtc2hhZG93OiAtMTFweCAxMHB4IDE5cHggLTEwcHggcmdiYSgwLDAsMCwwLjI3KTtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAke2NvbG9ycy5wcmltYXJ5fTtcclxuICAgICAgICAgICAgICAvKiBvcGFjaXR5OiAwLjk7ICovXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICNuYXYtbWVudS5kcm9wZG93biB7XHJcbiAgICAgICAgICAgICAgY2xpcC1wYXRoOiBjaXJjbGUoMTUwJSBhdCB0b3AgcmlnaHQpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAubmF2LWl0ZW0ge1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDJyZW0gM3JlbTtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmY2YjhkO1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDEuM3JlbTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaSB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMXJlbTtcclxuICAgICAgICAgICAgICB3aWR0aDogMS41cmVtO1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgICAgICAgICAgIC8qIGJhY2tncm91bmQ6IGJsYWNrOyAqL1xyXG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDAuNXJlbTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLm5hdi1pdGVtOmhvdmVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogJHtjb2xvcnMuc2Vjb25kYXJ5fTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmxpbmUge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgICAgICAgICAgIGhlaWdodDogM3B4O1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogNXB4O1xyXG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgZWFzZSAwLjVzO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAjaGFtYnVyZ2VyIHtcclxuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICNoYW1idXJnZXIub3BlbiAjbGluZTEge1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZykgdHJhbnNsYXRlWSgxMS41cHgpIHNjYWxlWCgwLjkpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAjaGFtYnVyZ2VyLm9wZW4gI2xpbmUye1xyXG4gICAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICNoYW1idXJnZXIub3BlbiAjbGluZTN7XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpIHRyYW5zbGF0ZVkoLTExLjVweCkgc2NhbGVYKDAuOSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc1MHB4KSB7XHJcbiAgICAgICAgICAgICNtYWluLXNlYXJjaGJhciB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDY5MHB4KSB7XHJcbiAgICAgICAgICAgICNtYWluLXNlYXJjaGJhciB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAjbmF2LW1lbnUge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiA0MCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgICAgICAgICAgI2JyYW5kIHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAjbG9nbyB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDU3MHB4KSB7XHJcbiAgICAgICAgICAgICNuYXYtbWVudSB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDQ1JTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xyXG4gICAgICAgICAgICAjbmF2LW1lbnUge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ1MHB4KSB7XHJcbiAgICAgICAgICAgICNuYXYtbWVudSB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDYwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAzNzVweCkge1xyXG4gICAgICAgICAgICAubmF2LWl0ZW0ge1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDJyZW0gMnJlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICBcclxuXHJcbiAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICA8L25hdj5cclxuICAgIC8vICl9XHJcbiAgICAvLyA8L0dsb2JhbENvbnRleHQuQ29uc3VtZXI+XHJcbiAgKVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyO1xyXG4iLCJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IFVzZXJTZWFyY2hCYXIgZnJvbSAnLi9Vc2VyU2VhcmNoQmFyJztcclxuaW1wb3J0IHsgR2xvYmFsQ29udGV4dCB9IGZyb20gJy4uL2NvbnRleHQvR2xvYmFsQ29udGV4dCc7XHJcblxyXG5cclxuY29uc3QgVXNlclNlYXJjaCA9ICgpID0+IHtcclxuICBcclxuICBjb25zdCBbZmlsdGVyZWRVc2Vycywgc2V0RmlsdGVyZWRVc2Vyc10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIGNvbnN0IFtzZWFyY2hNb2RlLCBzZXRTZWFyY2hNb2RlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBcclxuICBjb25zdCB7IGZldGNoUHJvZmlsZVVzZXIgfSA9IHVzZUNvbnRleHQoR2xvYmFsQ29udGV4dCk7XHJcblxyXG4gIGNvbnN0IFtzZWFyY2hJbnB1dCwgc2V0U2VhcmNoSW5wdXRdID0gdXNlU3RhdGUoJycpO1xyXG4gIFxyXG4gIGNvbnN0IHVzZXJDbGlja0hhbmRsZXIgPSAoaWQpID0+IHtcclxuXHJcbiAgICBmZXRjaFByb2ZpbGVVc2VyKGlkLCBmYWxzZSk7XHJcbiAgICBcclxuICAgIC8vIEhpZGUgZHJvcGRvd25cclxuICAgIHNldFNlYXJjaE1vZGUoZmFsc2UpXHJcblxyXG4gICAgLy8gQ2xlYXIgdGhlIHNlYXJjaCBiYXJcclxuICAgIHNldFNlYXJjaElucHV0KCcnKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGNoZWNrU2VhcmNoTW9kZSA9IChpbnB1dCkgPT4ge1xyXG4gICAgaWYgKGlucHV0ICE9PSAnJykge1xyXG4gICAgICBzZXRTZWFyY2hNb2RlKHRydWUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0U2VhcmNoTW9kZShmYWxzZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgaWQ9XCJ1c2VyLXNlYXJjaFwiPlxyXG4gICAgICA8VXNlclNlYXJjaEJhciBjaGVja1NlYXJjaE1vZGU9e2NoZWNrU2VhcmNoTW9kZX0gcGxhY2Vob2xkZXI9J1NlYXJjaCBmb3IgdXNlcicgc2VhcmNoTW9kZT0ndXNlcicgc2V0RmlsdGVyZWRVc2Vycz17c2V0RmlsdGVyZWRVc2Vyc30gc2VhcmNoSW5wdXQ9e3NlYXJjaElucHV0fSBzZXRTZWFyY2hJbnB1dD17c2V0U2VhcmNoSW5wdXR9Lz5cclxuICAgICAgeyBzZWFyY2hNb2RlICYmXHJcbiAgICAgIDxkaXYgaWQ9XCJkcm9wZG93blwiPlxyXG4gICAgICAgIDxkaXYgaWQ9XCJzZWFyY2gtcmVzdWx0c1wiPlxyXG4gICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICB7ZmlsdGVyZWRVc2Vycy5tYXAodXNlciA9PiAoXHJcbiAgICAgICAgICAgICAgPGxpIGtleT17dXNlci5pZH0+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Byb2ZpbGUvW3VzZXJJZF1cIiBhcz17YC9wcm9maWxlLyR7dXNlci5pZH1gfT5cclxuICAgICAgICAgICAgICAgICAgPGEgb25DbGljaz17dXNlckNsaWNrSGFuZGxlci5iaW5kKHRoaXMsIHVzZXIuaWQpfT57dXNlci5uYW1lfTwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICApKX1cclxuXHJcbiAgICAgICAgICAgIHtmaWx0ZXJlZFVzZXJzLmxlbmd0aCA9PT0gMCAmJiBcclxuICAgICAgICAgICAgICA8bGk+Tm8gVXNlcnMgRm91bmQ8L2xpPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgfVxyXG5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICBcclxuICAgICAgICAjdXNlci1zZWFyY2gge1xyXG4gICAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICAgIC8qIHBvc2l0aW9uOiByZWxhdGl2ZTsgKi9cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICNkcm9wZG93biB7XHJcbiAgICAgICAgICB3aWR0aDogNzklO1xyXG4gICAgICAgICAgLyogcG9zaXRpb246IHJlbGF0aXZlOyAqL1xyXG4gICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgei1pbmRleDogMztcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgI3NlYXJjaC1yZXN1bHRzIHtcclxuICAgICAgICAgIHdpZHRoOiA0NDBweDtcclxuICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgICAgY29sb3I6IHB1cnBsZTtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDAuNXJlbTsgXHJcbiAgICAgICAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgYm94LXNoYWRvdzogMTBweCAxMHB4IDQ1cHggLTEwcHggcmdiYSg2Niw5LDY2LDAuNzQpO1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgLyogdG9wOiAtMTBweDsgKi9cclxuICAgICAgICAgIC8qIHotaW5kZXg6IDIwMDsgKi9cclxuXHJcbiAgICAgICAgICAvKiBsZWZ0OiA0MTBweDsgKi9cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHVsIHtcclxuICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKiBNZWRpYSBxdWVyaWVzICovXHJcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMTUwcHgpIHtcclxuICAgICAgICAjc2VhcmNoLXJlc3VsdHMge1xyXG4gICAgICAgICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfSBcclxuXHJcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMTAwcHgpIHtcclxuICAgICAgICAjc2VhcmNoLXJlc3VsdHMge1xyXG4gICAgICAgICAgd2lkdGg6IDM4dncgO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDk1MHB4KSB7XHJcbiAgICAgICAgI3NlYXJjaC1yZXN1bHRzIHtcclxuICAgICAgICAgIHJpZ2h0OiAxNzBweDtcclxuICAgICAgICAgIHdpZHRoOiA0NnZ3O1xyXG4gICAgICAgIH1cclxuICAgICAgfSBcclxuXHJcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5MDBweCkge1xyXG4gICAgICAgICNzZWFyY2gtcmVzdWx0cyB7XHJcbiAgICAgICAgICByaWdodDogMTQwcHg7XHJcbiAgICAgICAgICB3aWR0aDogNDZ2dztcclxuICAgICAgICB9XHJcbiAgICAgIH0gXHJcbiAgICAgIFxyXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogOTAwcHgpIHtcclxuICAgICAgICAjc2VhcmNoLXJlc3VsdHMge1xyXG4gICAgICAgICAgcmlnaHQ6IDEyMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc0MHB4KSB7XHJcbiAgICAgICAgI3NlYXJjaC1yZXN1bHRzIHtcclxuICAgICAgICAgIHJpZ2h0OiAxMDBweDtcclxuICAgICAgICB9XHJcbiAgICAgIH0gXHJcblxyXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNjYwcHgpIHtcclxuICAgICAgICAjc2VhcmNoLXJlc3VsdHMge1xyXG4gICAgICAgICAgcmlnaHQ6IDcwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IFxyXG5cclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICAgICAgI3VzZXItc2VhcmNoIHtcclxuICAgICAgICAgIG1hcmdpbi1yaWdodDogNHJlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICNzZWFyY2gtcmVzdWx0cyB7XHJcbiAgICAgICAgICByaWdodDogMTA3cHg7XHJcbiAgICAgICAgICB3aWR0aDogNTh2dztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1NTBweCkge1xyXG4gICAgICAgICN1c2VyLXNlYXJjaCB7XHJcbiAgICAgICAgICB3aWR0aDogNTUlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgI3NlYXJjaC1yZXN1bHRzIHtcclxuICAgICAgICAgIHdpZHRoOiA2MnZ3O1xyXG4gICAgICAgICAgcmlnaHQ6IDkxcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNDkwcHgpIHtcclxuICAgICAgICAjdXNlci1zZWFyY2gge1xyXG4gICAgICAgICAgd2lkdGg6IDYwJTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0NTBweCkge1xyXG4gICAgICAgICNzZWFyY2gtcmVzdWx0cyB7XHJcbiAgICAgICAgICByaWdodDogODVweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0MjBweCkge1xyXG4gICAgICAgICN1c2VyLXNlYXJjaCB7XHJcbiAgICAgICAgICB3aWR0aDogNjAlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAjc2VhcmNoLXJlc3VsdHMge1xyXG4gICAgICAgICAgcmlnaHQ6IDExdnc7XHJcbiAgICAgICAgICB3aWR0aDogNzZ2dztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcblxyXG4gICAgICBcclxuICAgICAgYH08L3N0eWxlPlxyXG5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXNlclNlYXJjaDtcclxuIiwiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUNvbnRleHQsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgR2xvYmFsQ29udGV4dCB9IGZyb20gJy4uL2NvbnRleHQvR2xvYmFsQ29udGV4dCc7XHJcblxyXG5jb25zdCBVc2VyU2VhcmNoYmFyID0gKHsgcGxhY2Vob2xkZXIsIHNldEZpbHRlcmVkVXNlcnMsIGNoZWNrU2VhcmNoTW9kZSwgc2VhcmNoSW5wdXQsIHNldFNlYXJjaElucHV0fSkgPT4ge1xyXG5cclxuICBjb25zdCB7IGFsbFVzZXJzIH0gPSB1c2VDb250ZXh0KEdsb2JhbENvbnRleHQpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy8gYWN0aW9uIG9uIHVwZGF0ZSBvZiBzZWFyY2hJbnB1dFxyXG4gICAgICBjb25zdCB1c2VycyA9IGFsbFVzZXJzLmZpbHRlcih1c2VyID0+IHtcclxuICAgICAgICByZXR1cm4gdXNlci5uYW1lLnN1YnN0cigwLCBzZWFyY2hJbnB1dC5sZW5ndGgpLnRvVXBwZXJDYXNlKCkgPT09IHNlYXJjaElucHV0LnRvVXBwZXJDYXNlKClcclxuICAgICAgfSlcclxuXHJcbiAgICAgIHNldEZpbHRlcmVkVXNlcnModXNlcnMpXHJcbiAgfSwgW3NlYXJjaElucHV0XSk7XHJcblxyXG4gIGNvbnN0IG9uQ2hhbmdlSGFuZGxlciA9IChlKSA9PiB7XHJcbiAgICBzZXRTZWFyY2hJbnB1dChlLnRhcmdldC52YWx1ZSk7XHJcbiAgICBjaGVja1NlYXJjaE1vZGUoZS50YXJnZXQudmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgY29uc3Qgb25Gb3JtU3VibWl0ID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAvLyBDYWxsIHRoZSByZWxldmFudCBzdWJtaXQgaGFuZGxlciBmcm9tIHByb3BzXHJcbiAgICAvLyBzdWJtaXRIYW5kbGVyKHNlYXJjaElucHV0KTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGlkPVwibWFpbi1zZWFyY2hiYXJcIj5cclxuICAgICAgPGZvcm0gb25TdWJtaXQ9e29uRm9ybVN1Ym1pdH0gYXV0b0NvbXBsZXRlPVwib2ZmXCI+XHJcbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJzZWFyY2gtaW5wdXRcIj5cclxuICAgICAgICAgIDxzdmcgaWQ9XCJzZWFyY2gtaWNvblwiIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHdpZHRoPVwiMjRcIj48cGF0aCBkPVwiTTE1LjUgMTRoLS43OWwtLjI4LS4yN0MxNS40MSAxMi41OSAxNiAxMS4xMSAxNiA5LjUgMTYgNS45MSAxMy4wOSAzIDkuNSAzUzMgNS45MSAzIDkuNSA1LjkxIDE2IDkuNSAxNmMxLjYxIDAgMy4wOS0uNTkgNC4yMy0xLjU3bC4yNy4yOHYuNzlsNSA0Ljk5TDIwLjQ5IDE5bC00Ljk5LTV6bS02IDBDNy4wMSAxNCA1IDExLjk5IDUgOS41UzcuMDEgNSA5LjUgNSAxNCA3LjAxIDE0IDkuNSAxMS45OSAxNCA5LjUgMTR6XCIgLz48cGF0aCBkPVwiTTAgMGgyNHYyNEgwelwiIGZpbGw9XCJub25lXCIgLz48L3N2Zz5cclxuICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJzZWFyY2gtaW5wdXRcIiBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9IG9uQ2hhbmdlPXtvbkNoYW5nZUhhbmRsZXJ9IHZhbHVlPXtzZWFyY2hJbnB1dH0gLz5cclxuICAgICAgPC9mb3JtPlxyXG5cclxuXHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuXHJcbiAgICAgICAgICBsYWJlbCB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgdG9wOiA4cHg7XHJcbiAgICAgICAgICAgIGxlZnQ6IDEycHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBcclxuICAgICAgICAgICNtYWluLXNlYXJjaGJhciB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICB3aWR0aDogNzUlO1xyXG4gICAgICAgICAgICBmb250OiBpbmhlcml0O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICNtYWluLXNlYXJjaGJhciBmb3JtIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCVcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAjbWFpbi1zZWFyY2hiYXIgaW5wdXQge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjNweDtcclxuICAgICAgICAgICAgcGFkZGluZzogMC42cmVtIDAuNXJlbSAwLjVyZW0gMi41cmVtO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICNtYWluLXNlYXJjaGJhciBpbnB1dCA6Zm9jdXMge1xyXG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC8qIE1lZGlhIHF1ZXJpZXMgKi9cclxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5NTBweCl7XHJcbiAgICAgICAgICAgICNtYWluLXNlYXJjaGJhciB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNjYwcHgpe1xyXG4gICAgICAgICAgICAjbWFpbi1zZWFyY2hiYXIge1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCl7XHJcbiAgICAgICAgICAgICNtYWluLXNlYXJjaGJhciB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDExMCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNDIwcHgpIHtcclxuICAgICAgICAgICAgI21haW4tc2VhcmNoYmFyIHtcclxuICAgICAgICAgICAgICB3aWR0aDogMTIwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAzNzBweCkge1xyXG4gICAgICAgICAgICAjbWFpbi1zZWFyY2hiYXIge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMzAlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAjbWFpbi1zZWFyY2hiYXIgaW5wdXQge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsYWJlbCB7XHJcbiAgICAgICAgICAgICAgdG9wOiA3cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIFxyXG4gIFxyXG4gIFxyXG4gIGB9PC9zdHlsZT5cclxuXHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVzZXJTZWFyY2hiYXI7XHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEdsb2JhbENvbnRleHQgfSBmcm9tICcuL0dsb2JhbENvbnRleHQnO1xyXG5pbXBvcnQgeyBBbmltYXRlUHJlc2VuY2UgfSBmcm9tICdmcmFtZXItbW90aW9uJztcclxuXHJcbmNsYXNzIENvbnRleHRQcm92aWRlciBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgdmFsdWUgfSA9IHRoaXMucHJvcHM7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8R2xvYmFsQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17dmFsdWV9PlxyXG4gICAgICAgIDxBbmltYXRlUHJlc2VuY2UgZXhpdEJlZm9yZUVudGVyID5cclxuICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxyXG4gICAgICAgIDwvQW5pbWF0ZVByZXNlbmNlPlxyXG4gICAgICA8L0dsb2JhbENvbnRleHQuUHJvdmlkZXI+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29udGV4dFByb3ZpZGVyOyIsImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZVJlZHVjZXJ9IGZyb20gJ3JlYWN0JztcclxuLy8gaW1wb3J0IEFwcFJlZHVjZXIgZnJvbSAnLi9BcHBSZWR1Y2VyJztcclxuLy8gaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tICdAYXBvbGxvL3JlYWN0LWhvb2tzJztcclxuXHJcbi8vIEluaXRhbCBTdGF0ZVxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgYXV0aGVudGljYXRlZDogZmFsc2UsXHJcbiAgYXV0aERhdGE6IG51bGwsXHJcbiAgdXNlcjogbnVsbCxcclxuICB2aWRlbzogbnVsbCxcclxuICBjb21tZW50OiBudWxsLFxyXG4gIC8vIGxvZ2luOiAoKSA9PiB7fVxyXG59XHJcblxyXG4vLyBDcmVhdGUgY29udGV4dFxyXG5leHBvcnQgY29uc3QgR2xvYmFsQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoaW5pdGlhbFN0YXRlKTtcclxuXHJcbi8vIFByb3ZpZGVyIENvbXBvbmVudFxyXG4vLyBleHBvcnQgY29uc3QgR2xvYmFsUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbi8vICAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKEFwcFJlZHVjZXIsIGluaXRpYWxTdGF0ZSlcclxuXHJcbi8vICAgcmV0dXJuIChcclxuLy8gICAgIDxHbG9iYWxDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7XHJcbi8vICAgICAgIC8vIGF1dGhlbnRpY2F0ZWQ6IHN0YXRlLmF1dGhlbnRpY2F0ZWQsXHJcbi8vICAgICAgIGxvZ2luOiBsb2dpblxyXG4vLyAgICAgfX0+XHJcbi8vICAgICAgIHtjaGlsZHJlbn1cclxuLy8gICAgIDwvR2xvYmFsQ29udGV4dC5Qcm92aWRlcj5cclxuLy8gICApXHJcbi8vIH0iLCJjb25zdCBjb2xvcnMgPSB7XHJcbiAgcHJpbWFyeTogJyNmZjQxNmMnLFxyXG4gIC8vIGdyYWRpZW50OiAnbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZmY0MTZjLCAjZmY0YjJiKScsXHJcbiAgLy8gZ3JhZGllbnQ6ICdsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmZjQxNmMsICNlZWZiNGEpJyxcclxuICAvLyBncmFkaWVudDogJ2xpbmVhci1ncmFkaWVudCgzN2RlZywgI2U1MmU3MSA1MCUsICNmZjhhMDAgMTAwJSknLFxyXG4gIC8vIGdyYWRpZW50OiAnbGluZWFyLWdyYWRpZW50KDM3ZGVnLCAjZTUyZTcxIDUwJSwgI2ZmOGEwMCAxMDAlKScsXHJcbiAgLy8gZ3JhZGllbnQ6ICdsaW5lYXItZ3JhZGllbnQoMzdkZWcsIHJnYmEoMjU1LCA2NSwgMTA4LCAxKSA1MCUsIHJnYmEoMjM4LCAyNTUsIDIwLCAxKSAxMDAlKScsXHJcbiAgZ3JhZGllbnQ6ICdsaW5lYXItZ3JhZGllbnQoMzdkZWcsICNmZjQxNmMgNTAlLCAjZWVmZjE0IDEwMCUpJyxcclxuICByZXZlcnNlR3JhZGllbnQ6ICdsaW5lYXItZ3JhZGllbnQoMzdkZWcsICNlZWZmMTQgNyUsICNmZjQxNmMgNDYlKScsXHJcbiAgcGlua0dyYWRlbnQ6ICdsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmZjRiMmIsICNmZjQxNmMpOycsXHJcbiAgcmV2ZXJzZVBpbmtHcmFkaWVudDogJ2xpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2ZmNDE2YywgI2ZmNGIyYik7JyxcclxuICBzZWNvbmRhcnk6ICcjZmY0YjJiJyxcclxuICB0ZXJ0aWFyeTogJyNlZWZmMTQnXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbG9yczsiLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gIGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDtcbiAgdmFyIGNhY2hlID0gbmV3IFdlYWtNYXAoKTtcblxuICBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gICAgcmV0dXJuIGNhY2hlO1xuICB9O1xuXG4gIHJldHVybiBjYWNoZTtcbn1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7XG4gIGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHtcbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCBfdHlwZW9mKG9iaikgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgICB9O1xuICB9XG5cbiAgdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7XG5cbiAgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7XG4gICAgcmV0dXJuIGNhY2hlLmdldChvYmopO1xuICB9XG5cbiAgdmFyIG5ld09iaiA9IHt9O1xuICB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDtcblxuICAgICAgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3T2JqW2tleV0gPSBvYmpba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqO1xuXG4gIGlmIChjYWNoZSkge1xuICAgIGNhY2hlLnNldChvYmosIG5ld09iaik7XG4gIH1cblxuICByZXR1cm4gbmV3T2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiLCJkZWNsYXJlIGNvbnN0IF9fTkVYVF9EQVRBX186IGFueVxuXG5pbXBvcnQgUmVhY3QsIHsgQ2hpbGRyZW4gfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IFByZWZldGNoT3B0aW9ucywgTmV4dFJvdXRlciB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgZXhlY09uY2UsIGdldExvY2F0aW9uT3JpZ2luIH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5pbXBvcnQgeyBhZGRCYXNlUGF0aCwgcmVzb2x2ZUhyZWYgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcblxuLyoqXG4gKiBEZXRlY3RzIHdoZXRoZXIgYSBnaXZlbiB1cmwgaXMgZnJvbSB0aGUgc2FtZSBvcmlnaW4gYXMgdGhlIGN1cnJlbnQgcGFnZSAoYnJvd3NlciBvbmx5KS5cbiAqL1xuZnVuY3Rpb24gaXNMb2NhbCh1cmw6IHN0cmluZyk6IGJvb2xlYW4ge1xuICBjb25zdCBsb2NhdGlvbk9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgY29uc3QgcmVzb2x2ZWQgPSBuZXcgVVJMKHVybCwgbG9jYXRpb25PcmlnaW4pXG4gIHJldHVybiByZXNvbHZlZC5vcmlnaW4gPT09IGxvY2F0aW9uT3JpZ2luXG59XG5cbnR5cGUgVXJsID0gc3RyaW5nIHwgVXJsT2JqZWN0XG5cbmV4cG9ydCB0eXBlIExpbmtQcm9wcyA9IHtcbiAgaHJlZjogVXJsXG4gIGFzPzogVXJsXG4gIHJlcGxhY2U/OiBib29sZWFuXG4gIHNjcm9sbD86IGJvb2xlYW5cbiAgc2hhbGxvdz86IGJvb2xlYW5cbiAgcGFzc0hyZWY/OiBib29sZWFuXG4gIHByZWZldGNoPzogYm9vbGVhblxufVxuXG5sZXQgY2FjaGVkT2JzZXJ2ZXI6IEludGVyc2VjdGlvbk9ic2VydmVyXG5jb25zdCBsaXN0ZW5lcnMgPSBuZXcgTWFwPEVsZW1lbnQsICgpID0+IHZvaWQ+KClcbmNvbnN0IEludGVyc2VjdGlvbk9ic2VydmVyID1cbiAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cuSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgOiBudWxsXG5jb25zdCBwcmVmZXRjaGVkOiB7IFtjYWNoZUtleTogc3RyaW5nXTogYm9vbGVhbiB9ID0ge31cblxuZnVuY3Rpb24gZ2V0T2JzZXJ2ZXIoKTogSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgfCB1bmRlZmluZWQge1xuICAvLyBSZXR1cm4gc2hhcmVkIGluc3RhbmNlIG9mIEludGVyc2VjdGlvbk9ic2VydmVyIGlmIGFscmVhZHkgY3JlYXRlZFxuICBpZiAoY2FjaGVkT2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gY2FjaGVkT2JzZXJ2ZXJcbiAgfVxuXG4gIC8vIE9ubHkgY3JlYXRlIHNoYXJlZCBJbnRlcnNlY3Rpb25PYnNlcnZlciBpZiBzdXBwb3J0ZWQgaW4gYnJvd3NlclxuICBpZiAoIUludGVyc2VjdGlvbk9ic2VydmVyKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgcmV0dXJuIChjYWNoZWRPYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihcbiAgICAoZW50cmllcykgPT4ge1xuICAgICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgICBpZiAoIWxpc3RlbmVycy5oYXMoZW50cnkudGFyZ2V0KSkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY2IgPSBsaXN0ZW5lcnMuZ2V0KGVudHJ5LnRhcmdldCkhXG4gICAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZyB8fCBlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyA+IDApIHtcbiAgICAgICAgICBjYWNoZWRPYnNlcnZlci51bm9ic2VydmUoZW50cnkudGFyZ2V0KVxuICAgICAgICAgIGxpc3RlbmVycy5kZWxldGUoZW50cnkudGFyZ2V0KVxuICAgICAgICAgIGNiKClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9LFxuICAgIHsgcm9vdE1hcmdpbjogJzIwMHB4JyB9XG4gICkpXG59XG5cbmNvbnN0IGxpc3RlblRvSW50ZXJzZWN0aW9ucyA9IChlbDogRWxlbWVudCwgY2I6ICgpID0+IHZvaWQpID0+IHtcbiAgY29uc3Qgb2JzZXJ2ZXIgPSBnZXRPYnNlcnZlcigpXG4gIGlmICghb2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gKCkgPT4ge31cbiAgfVxuXG4gIG9ic2VydmVyLm9ic2VydmUoZWwpXG4gIGxpc3RlbmVycy5zZXQoZWwsIGNiKVxuICByZXR1cm4gKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBvYnNlcnZlci51bm9ic2VydmUoZWwpXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycilcbiAgICB9XG4gICAgbGlzdGVuZXJzLmRlbGV0ZShlbClcbiAgfVxufVxuXG5mdW5jdGlvbiBwcmVmZXRjaChcbiAgcm91dGVyOiBOZXh0Um91dGVyLFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIG9wdGlvbnM/OiBQcmVmZXRjaE9wdGlvbnNcbik6IHZvaWQge1xuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHJldHVyblxuICAvLyBQcmVmZXRjaCB0aGUgSlNPTiBwYWdlIGlmIGFza2VkIChvbmx5IGluIHRoZSBjbGllbnQpXG4gIC8vIFdlIG5lZWQgdG8gaGFuZGxlIGEgcHJlZmV0Y2ggZXJyb3IgaGVyZSBzaW5jZSB3ZSBtYXkgYmVcbiAgLy8gbG9hZGluZyB3aXRoIHByaW9yaXR5IHdoaWNoIGNhbiByZWplY3QgYnV0IHdlIGRvbid0XG4gIC8vIHdhbnQgdG8gZm9yY2UgbmF2aWdhdGlvbiBzaW5jZSB0aGlzIGlzIG9ubHkgYSBwcmVmZXRjaFxuICByb3V0ZXIucHJlZmV0Y2goaHJlZiwgYXMsIG9wdGlvbnMpLmNhdGNoKChlcnIpID0+IHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgLy8gcmV0aHJvdyB0byBzaG93IGludmFsaWQgVVJMIGVycm9yc1xuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuICB9KVxuICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhc10gPSB0cnVlXG59XG5cbmZ1bmN0aW9uIGxpbmtDbGlja2VkKFxuICBlOiBSZWFjdC5Nb3VzZUV2ZW50LFxuICByb3V0ZXI6IE5leHRSb3V0ZXIsXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgcmVwbGFjZT86IGJvb2xlYW4sXG4gIHNoYWxsb3c/OiBib29sZWFuLFxuICBzY3JvbGw/OiBib29sZWFuXG4pOiB2b2lkIHtcbiAgY29uc3QgeyBub2RlTmFtZSwgdGFyZ2V0IH0gPSBlLmN1cnJlbnRUYXJnZXQgYXMgSFRNTEFuY2hvckVsZW1lbnRcbiAgaWYgKFxuICAgIG5vZGVOYW1lID09PSAnQScgJiZcbiAgICAoKHRhcmdldCAmJiB0YXJnZXQgIT09ICdfc2VsZicpIHx8XG4gICAgICBlLm1ldGFLZXkgfHxcbiAgICAgIGUuY3RybEtleSB8fFxuICAgICAgZS5zaGlmdEtleSB8fFxuICAgICAgKGUubmF0aXZlRXZlbnQgJiYgZS5uYXRpdmVFdmVudC53aGljaCA9PT0gMikpXG4gICkge1xuICAgIC8vIGlnbm9yZSBjbGljayBmb3IgbmV3IHRhYiAvIG5ldyB3aW5kb3cgYmVoYXZpb3JcbiAgICByZXR1cm5cbiAgfVxuXG4gIGlmICghaXNMb2NhbChocmVmKSkge1xuICAgIC8vIGlnbm9yZSBjbGljayBpZiBpdCdzIG91dHNpZGUgb3VyIHNjb3BlIChlLmcuIGh0dHBzOi8vZ29vZ2xlLmNvbSlcbiAgICByZXR1cm5cbiAgfVxuXG4gIGUucHJldmVudERlZmF1bHQoKVxuXG4gIC8vICBhdm9pZCBzY3JvbGwgZm9yIHVybHMgd2l0aCBhbmNob3IgcmVmc1xuICBpZiAoc2Nyb2xsID09IG51bGwpIHtcbiAgICBzY3JvbGwgPSBhcy5pbmRleE9mKCcjJykgPCAwXG4gIH1cblxuICAvLyByZXBsYWNlIHN0YXRlIGluc3RlYWQgb2YgcHVzaCBpZiBwcm9wIGlzIHByZXNlbnRcbiAgcm91dGVyW3JlcGxhY2UgPyAncmVwbGFjZScgOiAncHVzaCddKGhyZWYsIGFzLCB7IHNoYWxsb3cgfSkudGhlbihcbiAgICAoc3VjY2VzczogYm9vbGVhbikgPT4ge1xuICAgICAgaWYgKCFzdWNjZXNzKSByZXR1cm5cbiAgICAgIGlmIChzY3JvbGwpIHtcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICAgIGRvY3VtZW50LmJvZHkuZm9jdXMoKVxuICAgICAgfVxuICAgIH1cbiAgKVxufVxuXG5mdW5jdGlvbiBMaW5rKHByb3BzOiBSZWFjdC5Qcm9wc1dpdGhDaGlsZHJlbjxMaW5rUHJvcHM+KSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgLy8gVGhpcyBob29rIGlzIGluIGEgY29uZGl0aW9uYWwgYnV0IHRoYXQgaXMgb2sgYmVjYXVzZSBgcHJvY2Vzcy5lbnYuTk9ERV9FTlZgIG5ldmVyIGNoYW5nZXNcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcbiAgICBjb25zdCBoYXNXYXJuZWQgPSBSZWFjdC51c2VSZWYoZmFsc2UpXG4gICAgaWYgKHByb3BzLnByZWZldGNoICYmICFoYXNXYXJuZWQuY3VycmVudCkge1xuICAgICAgaGFzV2FybmVkLmN1cnJlbnQgPSB0cnVlXG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICdOZXh0LmpzIGF1dG8tcHJlZmV0Y2hlcyBhdXRvbWF0aWNhbGx5IGJhc2VkIG9uIHZpZXdwb3J0LiBUaGUgcHJlZmV0Y2ggYXR0cmlidXRlIGlzIG5vIGxvbmdlciBuZWVkZWQuIE1vcmU6IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL3ByZWZldGNoLXRydWUtZGVwcmVjYXRlZCdcbiAgICAgIClcbiAgICB9XG4gIH1cbiAgY29uc3QgcCA9IHByb3BzLnByZWZldGNoICE9PSBmYWxzZVxuXG4gIGNvbnN0IFtjaGlsZEVsbSwgc2V0Q2hpbGRFbG1dID0gUmVhY3QudXNlU3RhdGU8RWxlbWVudD4oKVxuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IHBhdGhuYW1lID0gKHJvdXRlciAmJiByb3V0ZXIucGF0aG5hbWUpIHx8ICcvJ1xuXG4gIGNvbnN0IHsgaHJlZiwgYXMgfSA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnN0IHJlc29sdmVkSHJlZiA9IHJlc29sdmVIcmVmKHBhdGhuYW1lLCBwcm9wcy5ocmVmKVxuICAgIHJldHVybiB7XG4gICAgICBocmVmOiByZXNvbHZlZEhyZWYsXG4gICAgICBhczogcHJvcHMuYXMgPyByZXNvbHZlSHJlZihwYXRobmFtZSwgcHJvcHMuYXMpIDogcmVzb2x2ZWRIcmVmLFxuICAgIH1cbiAgfSwgW3BhdGhuYW1lLCBwcm9wcy5ocmVmLCBwcm9wcy5hc10pXG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAocCAmJiBJbnRlcnNlY3Rpb25PYnNlcnZlciAmJiBjaGlsZEVsbSAmJiBjaGlsZEVsbS50YWdOYW1lKSB7XG4gICAgICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICAgICAgY29uc3QgaXNQcmVmZXRjaGVkID0gcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXNdXG4gICAgICBpZiAoIWlzUHJlZmV0Y2hlZCkge1xuICAgICAgICByZXR1cm4gbGlzdGVuVG9JbnRlcnNlY3Rpb25zKGNoaWxkRWxtLCAoKSA9PiB7XG4gICAgICAgICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcylcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtwLCBjaGlsZEVsbSwgaHJlZiwgYXMsIHJvdXRlcl0pXG5cbiAgbGV0IHsgY2hpbGRyZW4sIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbCB9ID0gcHJvcHNcbiAgLy8gRGVwcmVjYXRlZC4gV2FybmluZyBzaG93biBieSBwcm9wVHlwZSBjaGVjay4gSWYgdGhlIGNoaWxkcmVuIHByb3ZpZGVkIGlzIGEgc3RyaW5nICg8TGluaz5leGFtcGxlPC9MaW5rPikgd2Ugd3JhcCBpdCBpbiBhbiA8YT4gdGFnXG4gIGlmICh0eXBlb2YgY2hpbGRyZW4gPT09ICdzdHJpbmcnKSB7XG4gICAgY2hpbGRyZW4gPSA8YT57Y2hpbGRyZW59PC9hPlxuICB9XG5cbiAgLy8gVGhpcyB3aWxsIHJldHVybiB0aGUgZmlyc3QgY2hpbGQsIGlmIG11bHRpcGxlIGFyZSBwcm92aWRlZCBpdCB3aWxsIHRocm93IGFuIGVycm9yXG4gIGNvbnN0IGNoaWxkOiBhbnkgPSBDaGlsZHJlbi5vbmx5KGNoaWxkcmVuKVxuICBjb25zdCBjaGlsZFByb3BzOiB7XG4gICAgb25Nb3VzZUVudGVyPzogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICBvbkNsaWNrOiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgIGhyZWY/OiBzdHJpbmdcbiAgICByZWY/OiBhbnlcbiAgfSA9IHtcbiAgICByZWY6IChlbDogYW55KSA9PiB7XG4gICAgICBpZiAoZWwpIHNldENoaWxkRWxtKGVsKVxuXG4gICAgICBpZiAoY2hpbGQgJiYgdHlwZW9mIGNoaWxkID09PSAnb2JqZWN0JyAmJiBjaGlsZC5yZWYpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBjaGlsZC5yZWYgPT09ICdmdW5jdGlvbicpIGNoaWxkLnJlZihlbClcbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIGNoaWxkLnJlZiA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICBjaGlsZC5yZWYuY3VycmVudCA9IGVsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIG9uQ2xpY2s6IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uQ2xpY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY2hpbGQucHJvcHMub25DbGljayhlKVxuICAgICAgfVxuICAgICAgaWYgKCFlLmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgbGlua0NsaWNrZWQoZSwgcm91dGVyLCBocmVmLCBhcywgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsKVxuICAgICAgfVxuICAgIH0sXG4gIH1cblxuICBpZiAocCkge1xuICAgIGNoaWxkUHJvcHMub25Nb3VzZUVudGVyID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlcihlKVxuICAgICAgfVxuICAgICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcywgeyBwcmlvcml0eTogdHJ1ZSB9KVxuICAgIH1cbiAgfVxuXG4gIC8vIElmIGNoaWxkIGlzIGFuIDxhPiB0YWcgYW5kIGRvZXNuJ3QgaGF2ZSBhIGhyZWYgYXR0cmlidXRlLCBvciBpZiB0aGUgJ3Bhc3NIcmVmJyBwcm9wZXJ0eSBpc1xuICAvLyBkZWZpbmVkLCB3ZSBzcGVjaWZ5IHRoZSBjdXJyZW50ICdocmVmJywgc28gdGhhdCByZXBldGl0aW9uIGlzIG5vdCBuZWVkZWQgYnkgdGhlIHVzZXJcbiAgaWYgKHByb3BzLnBhc3NIcmVmIHx8IChjaGlsZC50eXBlID09PSAnYScgJiYgISgnaHJlZicgaW4gY2hpbGQucHJvcHMpKSkge1xuICAgIGNoaWxkUHJvcHMuaHJlZiA9IGFkZEJhc2VQYXRoKGFzKVxuICB9XG5cbiAgLy8gQWRkIHRoZSBlbmRpbmcgc2xhc2ggdG8gdGhlIHBhdGhzLiBTbywgd2UgY2FuIHNlcnZlIHRoZVxuICAvLyBcIjxwYWdlPi9pbmRleC5odG1sXCIgZGlyZWN0bHkuXG4gIGlmIChwcm9jZXNzLmVudi5fX05FWFRfRVhQT1JUX1RSQUlMSU5HX1NMQVNIKSB7XG4gICAgY29uc3QgcmV3cml0ZVVybEZvck5leHRFeHBvcnQgPSByZXF1aXJlKCcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3Jld3JpdGUtdXJsLWZvci1leHBvcnQnKVxuICAgICAgLnJld3JpdGVVcmxGb3JOZXh0RXhwb3J0XG4gICAgaWYgKFxuICAgICAgY2hpbGRQcm9wcy5ocmVmICYmXG4gICAgICB0eXBlb2YgX19ORVhUX0RBVEFfXyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgIF9fTkVYVF9EQVRBX18ubmV4dEV4cG9ydFxuICAgICkge1xuICAgICAgY2hpbGRQcm9wcy5ocmVmID0gcmV3cml0ZVVybEZvck5leHRFeHBvcnQoY2hpbGRQcm9wcy5ocmVmKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIGNoaWxkUHJvcHMpXG59XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICBjb25zdCB3YXJuID0gZXhlY09uY2UoY29uc29sZS5lcnJvcilcblxuICAvLyBUaGlzIG1vZHVsZSBnZXRzIHJlbW92ZWQgYnkgd2VicGFjay5JZ25vcmVQbHVnaW5cbiAgY29uc3QgUHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpXG4gIGNvbnN0IGV4YWN0ID0gcmVxdWlyZSgncHJvcC10eXBlcy1leGFjdCcpXG4gIC8vIEB0cy1pZ25vcmUgdGhlIHByb3BlcnR5IGlzIHN1cHBvcnRlZCwgd2hlbiBkZWNsYXJpbmcgaXQgb24gdGhlIGNsYXNzIGl0IG91dHB1dHMgYW4gZXh0cmEgYml0IG9mIGNvZGUgd2hpY2ggaXMgbm90IG5lZWRlZC5cbiAgTGluay5wcm9wVHlwZXMgPSBleGFjdCh7XG4gICAgaHJlZjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm9iamVjdF0pLmlzUmVxdWlyZWQsXG4gICAgYXM6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5vYmplY3RdKSxcbiAgICBwcmVmZXRjaDogUHJvcFR5cGVzLmJvb2wsXG4gICAgcmVwbGFjZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgc2hhbGxvdzogUHJvcFR5cGVzLmJvb2wsXG4gICAgcGFzc0hyZWY6IFByb3BUeXBlcy5ib29sLFxuICAgIHNjcm9sbDogUHJvcFR5cGVzLmJvb2wsXG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgUHJvcFR5cGVzLmVsZW1lbnQsXG4gICAgICAocHJvcHM6IGFueSwgcHJvcE5hbWU6IHN0cmluZykgPT4ge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHByb3BzW3Byb3BOYW1lXVxuXG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgd2FybihcbiAgICAgICAgICAgIGBXYXJuaW5nOiBZb3UncmUgdXNpbmcgYSBzdHJpbmcgZGlyZWN0bHkgaW5zaWRlIDxMaW5rPi4gVGhpcyB1c2FnZSBoYXMgYmVlbiBkZXByZWNhdGVkLiBQbGVhc2UgYWRkIGFuIDxhPiB0YWcgYXMgY2hpbGQgb2YgPExpbms+YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICB9LFxuICAgIF0pLmlzUmVxdWlyZWQsXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IExpbmtcbiIsIi8qKlxuICogUmVtb3ZlcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGlmIHRoZXJlIGlzIG9uZS4gUHJlc2VydmVzIHRoZSByb290IHBhdGggYC9gLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGguZW5kc1dpdGgoJy8nKSAmJiBwYXRoICE9PSAnLycgPyBwYXRoLnNsaWNlKDAsIC0xKSA6IHBhdGhcbn1cblxuLyoqXG4gKiBOb3JtYWxpemVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggYWNjb3JkaW5nIHRvIHRoZSBgdHJhaWxpbmdTbGFzaGAgb3B0aW9uXG4gKiBpbiBgbmV4dC5jb25maWcuanNgLlxuICovXG5leHBvcnQgY29uc3Qgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2ggPSBwcm9jZXNzLmVudi5fX05FWFRfVFJBSUxJTkdfU0xBU0hcbiAgPyAocGF0aDogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgICAgIGlmICgvXFwuW14vXStcXC8/JC8udGVzdChwYXRoKSkge1xuICAgICAgICByZXR1cm4gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aClcbiAgICAgIH0gZWxzZSBpZiAocGF0aC5lbmRzV2l0aCgnLycpKSB7XG4gICAgICAgIHJldHVybiBwYXRoXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcGF0aCArICcvJ1xuICAgICAgfVxuICAgIH1cbiAgOiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaFxuIiwiLyogZ2xvYmFsIHdpbmRvdyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJvdXRlciwgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBSb3V0ZXJDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0J1xuXG50eXBlIENsYXNzQXJndW1lbnRzPFQ+ID0gVCBleHRlbmRzIG5ldyAoLi4uYXJnczogaW5mZXIgVSkgPT4gYW55ID8gVSA6IGFueVxuXG50eXBlIFJvdXRlckFyZ3MgPSBDbGFzc0FyZ3VtZW50czx0eXBlb2YgUm91dGVyPlxuXG50eXBlIFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogUm91dGVyIHwgbnVsbFxuICByZWFkeUNhbGxiYWNrczogQXJyYXk8KCkgPT4gYW55PlxuICByZWFkeShjYjogKCkgPT4gYW55KTogdm9pZFxufVxuXG5leHBvcnQgeyBSb3V0ZXIsIE5leHRSb3V0ZXIgfVxuXG5leHBvcnQgdHlwZSBTaW5nbGV0b25Sb3V0ZXIgPSBTaW5nbGV0b25Sb3V0ZXJCYXNlICYgTmV4dFJvdXRlclxuXG5jb25zdCBzaW5nbGV0b25Sb3V0ZXI6IFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogbnVsbCwgLy8gaG9sZHMgdGhlIGFjdHVhbCByb3V0ZXIgaW5zdGFuY2VcbiAgcmVhZHlDYWxsYmFja3M6IFtdLFxuICByZWFkeShjYjogKCkgPT4gdm9pZCkge1xuICAgIGlmICh0aGlzLnJvdXRlcikgcmV0dXJuIGNiKClcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMucmVhZHlDYWxsYmFja3MucHVzaChjYilcbiAgICB9XG4gIH0sXG59XG5cbi8vIENyZWF0ZSBwdWJsaWMgcHJvcGVydGllcyBhbmQgbWV0aG9kcyBvZiB0aGUgcm91dGVyIGluIHRoZSBzaW5nbGV0b25Sb3V0ZXJcbmNvbnN0IHVybFByb3BlcnR5RmllbGRzID0gW1xuICAncGF0aG5hbWUnLFxuICAncm91dGUnLFxuICAncXVlcnknLFxuICAnYXNQYXRoJyxcbiAgJ2NvbXBvbmVudHMnLFxuICAnaXNGYWxsYmFjaycsXG4gICdiYXNlUGF0aCcsXG5dXG5jb25zdCByb3V0ZXJFdmVudHMgPSBbXG4gICdyb3V0ZUNoYW5nZVN0YXJ0JyxcbiAgJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLFxuICAncm91dGVDaGFuZ2VDb21wbGV0ZScsXG4gICdyb3V0ZUNoYW5nZUVycm9yJyxcbiAgJ2hhc2hDaGFuZ2VTdGFydCcsXG4gICdoYXNoQ2hhbmdlQ29tcGxldGUnLFxuXVxuY29uc3QgY29yZU1ldGhvZEZpZWxkcyA9IFtcbiAgJ3B1c2gnLFxuICAncmVwbGFjZScsXG4gICdyZWxvYWQnLFxuICAnYmFjaycsXG4gICdwcmVmZXRjaCcsXG4gICdiZWZvcmVQb3BTdGF0ZScsXG5dXG5cbi8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsICdldmVudHMnLCB7XG4gIGdldCgpIHtcbiAgICByZXR1cm4gUm91dGVyLmV2ZW50c1xuICB9LFxufSlcblxudXJsUHJvcGVydHlGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgLy8gSGVyZSB3ZSBuZWVkIHRvIHVzZSBPYmplY3QuZGVmaW5lUHJvcGVydHkgYmVjYXVzZSwgd2UgbmVlZCB0byByZXR1cm5cbiAgLy8gdGhlIHByb3BlcnR5IGFzc2lnbmVkIHRvIHRoZSBhY3R1YWwgcm91dGVyXG4gIC8vIFRoZSB2YWx1ZSBtaWdodCBnZXQgY2hhbmdlZCBhcyB3ZSBjaGFuZ2Ugcm91dGVzIGFuZCB0aGlzIGlzIHRoZVxuICAvLyBwcm9wZXIgd2F5IHRvIGFjY2VzcyBpdFxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCBmaWVsZCwge1xuICAgIGdldCgpIHtcbiAgICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgICAgcmV0dXJuIHJvdXRlcltmaWVsZF0gYXMgc3RyaW5nXG4gICAgfSxcbiAgfSlcbn0pXG5cbmNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgLy8gV2UgZG9uJ3QgcmVhbGx5IGtub3cgdGhlIHR5cGVzIGhlcmUsIHNvIHdlIGFkZCB0aGVtIGxhdGVyIGluc3RlYWRcbiAgOyhzaW5nbGV0b25Sb3V0ZXIgYXMgYW55KVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICB9XG59KVxuXG5yb3V0ZXJFdmVudHMuZm9yRWFjaCgoZXZlbnQpID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5KCgpID0+IHtcbiAgICBSb3V0ZXIuZXZlbnRzLm9uKGV2ZW50LCAoLi4uYXJncykgPT4ge1xuICAgICAgY29uc3QgZXZlbnRGaWVsZCA9IGBvbiR7ZXZlbnQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCl9JHtldmVudC5zdWJzdHJpbmcoXG4gICAgICAgIDFcbiAgICAgICl9YFxuICAgICAgY29uc3QgX3NpbmdsZXRvblJvdXRlciA9IHNpbmdsZXRvblJvdXRlciBhcyBhbnlcbiAgICAgIGlmIChfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSguLi5hcmdzKVxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tY29uc29sZVxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIHdoZW4gcnVubmluZyB0aGUgUm91dGVyIGV2ZW50OiAke2V2ZW50RmllbGR9YClcbiAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tY29uc29sZVxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYCR7ZXJyLm1lc3NhZ2V9XFxuJHtlcnIuc3RhY2t9YClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG59KVxuXG5mdW5jdGlvbiBnZXRSb3V0ZXIoKTogUm91dGVyIHtcbiAgaWYgKCFzaW5nbGV0b25Sb3V0ZXIucm91dGVyKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9XG4gICAgICAnTm8gcm91dGVyIGluc3RhbmNlIGZvdW5kLlxcbicgK1xuICAgICAgJ1lvdSBzaG91bGQgb25seSB1c2UgXCJuZXh0L3JvdXRlclwiIGluc2lkZSB0aGUgY2xpZW50IHNpZGUgb2YgeW91ciBhcHAuXFxuJ1xuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIEV4cG9ydCB0aGUgc2luZ2xldG9uUm91dGVyIGFuZCB0aGlzIGlzIHRoZSBwdWJsaWMgQVBJLlxuZXhwb3J0IGRlZmF1bHQgc2luZ2xldG9uUm91dGVyIGFzIFNpbmdsZXRvblJvdXRlclxuXG4vLyBSZWV4cG9ydCB0aGUgd2l0aFJvdXRlIEhPQ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB3aXRoUm91dGVyIH0gZnJvbSAnLi93aXRoLXJvdXRlcidcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVJvdXRlcigpOiBOZXh0Um91dGVyIHtcbiAgcmV0dXJuIFJlYWN0LnVzZUNvbnRleHQoUm91dGVyQ29udGV4dClcbn1cblxuLy8gSU5URVJOQUwgQVBJU1xuLy8gLS0tLS0tLS0tLS0tLVxuLy8gKGRvIG5vdCB1c2UgZm9sbG93aW5nIGV4cG9ydHMgaW5zaWRlIHRoZSBhcHApXG5cbi8vIENyZWF0ZSBhIHJvdXRlciBhbmQgYXNzaWduIGl0IGFzIHRoZSBzaW5nbGV0b24gaW5zdGFuY2UuXG4vLyBUaGlzIGlzIHVzZWQgaW4gY2xpZW50IHNpZGUgd2hlbiB3ZSBhcmUgaW5pdGlsaXppbmcgdGhlIGFwcC5cbi8vIFRoaXMgc2hvdWxkICoqbm90KiogdXNlIGluc2lkZSB0aGUgc2VydmVyLlxuZXhwb3J0IGNvbnN0IGNyZWF0ZVJvdXRlciA9ICguLi5hcmdzOiBSb3V0ZXJBcmdzKTogUm91dGVyID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJvdXRlciA9IG5ldyBSb3V0ZXIoLi4uYXJncylcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzLmZvckVhY2goKGNiKSA9PiBjYigpKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MgPSBbXVxuXG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBjcmVhdGUgdGhlIGB3aXRoUm91dGVyYCByb3V0ZXIgaW5zdGFuY2VcbmV4cG9ydCBmdW5jdGlvbiBtYWtlUHVibGljUm91dGVySW5zdGFuY2Uocm91dGVyOiBSb3V0ZXIpOiBOZXh0Um91dGVyIHtcbiAgY29uc3QgX3JvdXRlciA9IHJvdXRlciBhcyBhbnlcbiAgY29uc3QgaW5zdGFuY2UgPSB7fSBhcyBhbnlcblxuICBmb3IgKGNvbnN0IHByb3BlcnR5IG9mIHVybFByb3BlcnR5RmllbGRzKSB7XG4gICAgaWYgKHR5cGVvZiBfcm91dGVyW3Byb3BlcnR5XSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IE9iamVjdC5hc3NpZ24oe30sIF9yb3V0ZXJbcHJvcGVydHldKSAvLyBtYWtlcyBzdXJlIHF1ZXJ5IGlzIG5vdCBzdGF0ZWZ1bFxuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBfcm91dGVyW3Byb3BlcnR5XVxuICB9XG5cbiAgLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuICBpbnN0YW5jZS5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAgIGluc3RhbmNlW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgICAgcmV0dXJuIF9yb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gICAgfVxuICB9KVxuXG4gIHJldHVybiBpbnN0YW5jZVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTmV4dENvbXBvbmVudFR5cGUsIE5leHRQYWdlQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi91dGlscydcbmltcG9ydCB7IE5leHRSb3V0ZXIsIHVzZVJvdXRlciB9IGZyb20gJy4vcm91dGVyJ1xuXG5leHBvcnQgdHlwZSBXaXRoUm91dGVyUHJvcHMgPSB7XG4gIHJvdXRlcjogTmV4dFJvdXRlclxufVxuXG5leHBvcnQgdHlwZSBFeGNsdWRlUm91dGVyUHJvcHM8UD4gPSBQaWNrPFxuICBQLFxuICBFeGNsdWRlPGtleW9mIFAsIGtleW9mIFdpdGhSb3V0ZXJQcm9wcz5cbj5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2l0aFJvdXRlcjxcbiAgUCBleHRlbmRzIFdpdGhSb3V0ZXJQcm9wcyxcbiAgQyA9IE5leHRQYWdlQ29udGV4dFxuPihcbiAgQ29tcG9zZWRDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPEMsIGFueSwgUD5cbik6IFJlYWN0LkNvbXBvbmVudFR5cGU8RXhjbHVkZVJvdXRlclByb3BzPFA+PiB7XG4gIGZ1bmN0aW9uIFdpdGhSb3V0ZXJXcmFwcGVyKHByb3BzOiBhbnkpIHtcbiAgICByZXR1cm4gPENvbXBvc2VkQ29tcG9uZW50IHJvdXRlcj17dXNlUm91dGVyKCl9IHsuLi5wcm9wc30gLz5cbiAgfVxuXG4gIFdpdGhSb3V0ZXJXcmFwcGVyLmdldEluaXRpYWxQcm9wcyA9IENvbXBvc2VkQ29tcG9uZW50LmdldEluaXRpYWxQcm9wc1xuICAvLyBUaGlzIGlzIG5lZWRlZCB0byBhbGxvdyBjaGVja2luZyBmb3IgY3VzdG9tIGdldEluaXRpYWxQcm9wcyBpbiBfYXBwXG4gIDsoV2l0aFJvdXRlcldyYXBwZXIgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzID0gKENvbXBvc2VkQ29tcG9uZW50IGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wc1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNvbnN0IG5hbWUgPVxuICAgICAgQ29tcG9zZWRDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9zZWRDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbiAgICBXaXRoUm91dGVyV3JhcHBlci5kaXNwbGF5TmFtZSA9IGB3aXRoUm91dGVyKCR7bmFtZX0pYFxuICB9XG5cbiAgcmV0dXJuIFdpdGhSb3V0ZXJXcmFwcGVyXG59XG4iLCIvKlxuTUlUIExpY2Vuc2VcblxuQ29weXJpZ2h0IChjKSBKYXNvbiBNaWxsZXIgKGh0dHBzOi8vamFzb25mb3JtYXQuY29tLylcblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuKi9cblxuLy8gVGhpcyBmaWxlIGlzIGJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9kZXZlbG9waXQvbWl0dC9ibG9iL3YxLjEuMy9zcmMvaW5kZXguanNcbi8vIEl0J3MgYmVlbiBlZGl0ZWQgZm9yIHRoZSBuZWVkcyBvZiB0aGlzIHNjcmlwdFxuLy8gU2VlIHRoZSBMSUNFTlNFIGF0IHRoZSB0b3Agb2YgdGhlIGZpbGVcblxudHlwZSBIYW5kbGVyID0gKC4uLmV2dHM6IGFueVtdKSA9PiB2b2lkXG5cbmV4cG9ydCB0eXBlIE1pdHRFbWl0dGVyID0ge1xuICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSk6IHZvaWRcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWl0dCgpOiBNaXR0RW1pdHRlciB7XG4gIGNvbnN0IGFsbDogeyBbczogc3RyaW5nXTogSGFuZGxlcltdIH0gPSBPYmplY3QuY3JlYXRlKG51bGwpXG5cbiAgcmV0dXJuIHtcbiAgICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIDsoYWxsW3R5cGVdIHx8IChhbGxbdHlwZV0gPSBbXSkpLnB1c2goaGFuZGxlcilcbiAgICB9LFxuXG4gICAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgaWYgKGFsbFt0eXBlXSkge1xuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYml0d2lzZVxuICAgICAgICBhbGxbdHlwZV0uc3BsaWNlKGFsbFt0eXBlXS5pbmRleE9mKGhhbmRsZXIpID4+PiAwLCAxKVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgIDsoYWxsW3R5cGVdIHx8IFtdKS5zbGljZSgpLm1hcCgoaGFuZGxlcjogSGFuZGxlcikgPT4ge1xuICAgICAgICBoYW5kbGVyKC4uLmV2dHMpXG4gICAgICB9KVxuICAgIH0sXG4gIH1cbn1cbiIsIi8qIGdsb2JhbCBfX05FWFRfREFUQV9fICovXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1jb25zb2xlXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IG1pdHQsIHsgTWl0dEVtaXR0ZXIgfSBmcm9tICcuLi9taXR0J1xuaW1wb3J0IHtcbiAgQXBwQ29udGV4dFR5cGUsXG4gIGZvcm1hdFdpdGhWYWxpZGF0aW9uLFxuICBnZXRVUkwsXG4gIGxvYWRHZXRJbml0aWFsUHJvcHMsXG4gIE5leHRQYWdlQ29udGV4dCxcbiAgU1QsXG59IGZyb20gJy4uL3V0aWxzJ1xuaW1wb3J0IHsgaXNEeW5hbWljUm91dGUgfSBmcm9tICcuL3V0aWxzL2lzLWR5bmFtaWMnXG5pbXBvcnQgeyBnZXRSb3V0ZU1hdGNoZXIgfSBmcm9tICcuL3V0aWxzL3JvdXRlLW1hdGNoZXInXG5pbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi91dGlscy9yb3V0ZS1yZWdleCdcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3V0aWxzL3NlYXJjaC1wYXJhbXMtdG8tdXJsLXF1ZXJ5J1xuaW1wb3J0IHsgcGFyc2VSZWxhdGl2ZVVybCB9IGZyb20gJy4vdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsJ1xuaW1wb3J0IHtcbiAgcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gsXG4gIG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoLFxufSBmcm9tICcuLi8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoJ1xuXG5jb25zdCBiYXNlUGF0aCA9IChwcm9jZXNzLmVudi5fX05FWFRfUk9VVEVSX0JBU0VQQVRIIGFzIHN0cmluZykgfHwgJydcblxuZnVuY3Rpb24gYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpIHtcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24obmV3IEVycm9yKCdSb3V0ZSBDYW5jZWxsZWQnKSwge1xuICAgIGNhbmNlbGxlZDogdHJ1ZSxcbiAgfSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBiYXNlUGF0aFxuICAgID8gcGF0aCA9PT0gJy8nXG4gICAgICA/IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKGJhc2VQYXRoKVxuICAgICAgOiBiYXNlUGF0aCArIHBhdGhcbiAgICA6IHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLnNsaWNlKGJhc2VQYXRoLmxlbmd0aCkgfHwgJy8nXG59XG5cbnR5cGUgVXJsID0gVXJsT2JqZWN0IHwgc3RyaW5nXG5cbi8qKlxuICogUmVzb2x2ZXMgYSBnaXZlbiBoeXBlcmxpbmsgd2l0aCBhIGNlcnRhaW4gcm91dGVyIHN0YXRlIChiYXNlUGF0aCBub3QgaW5jbHVkZWQpLlxuICogUHJlc2VydmVzIGFic29sdXRlIHVybHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlSHJlZihjdXJyZW50UGF0aDogc3RyaW5nLCBocmVmOiBVcmwpOiBzdHJpbmcge1xuICAvLyB3ZSB1c2UgYSBkdW1teSBiYXNlIHVybCBmb3IgcmVsYXRpdmUgdXJsc1xuICBjb25zdCBiYXNlID0gbmV3IFVSTChjdXJyZW50UGF0aCwgJ2h0dHA6Ly9uJylcbiAgY29uc3QgdXJsQXNTdHJpbmcgPVxuICAgIHR5cGVvZiBocmVmID09PSAnc3RyaW5nJyA/IGhyZWYgOiBmb3JtYXRXaXRoVmFsaWRhdGlvbihocmVmKVxuICBjb25zdCBmaW5hbFVybCA9IG5ldyBVUkwodXJsQXNTdHJpbmcsIGJhc2UpXG4gIGZpbmFsVXJsLnBhdGhuYW1lID0gbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2goZmluYWxVcmwucGF0aG5hbWUpXG4gIC8vIGlmIHRoZSBvcmlnaW4gZGlkbid0IGNoYW5nZSwgaXQgbWVhbnMgd2UgcmVjZWl2ZWQgYSByZWxhdGl2ZSBocmVmXG4gIHJldHVybiBmaW5hbFVybC5vcmlnaW4gPT09IGJhc2Uub3JpZ2luXG4gICAgPyBmaW5hbFVybC5ocmVmLnNsaWNlKGZpbmFsVXJsLm9yaWdpbi5sZW5ndGgpXG4gICAgOiBmaW5hbFVybC5ocmVmXG59XG5cbmZ1bmN0aW9uIHByZXBhcmVVcmxBcyhyb3V0ZXI6IE5leHRSb3V0ZXIsIHVybDogVXJsLCBhczogVXJsKSB7XG4gIC8vIElmIHVybCBhbmQgYXMgcHJvdmlkZWQgYXMgYW4gb2JqZWN0IHJlcHJlc2VudGF0aW9uLFxuICAvLyB3ZSdsbCBmb3JtYXQgdGhlbSBpbnRvIHRoZSBzdHJpbmcgdmVyc2lvbiBoZXJlLlxuICByZXR1cm4ge1xuICAgIHVybDogYWRkQmFzZVBhdGgocmVzb2x2ZUhyZWYocm91dGVyLnBhdGhuYW1lLCB1cmwpKSxcbiAgICBhczogYXMgPyBhZGRCYXNlUGF0aChyZXNvbHZlSHJlZihyb3V0ZXIucGF0aG5hbWUsIGFzKSkgOiBhcyxcbiAgfVxufVxuXG5mdW5jdGlvbiB0cnlQYXJzZVJlbGF0aXZlVXJsKFxuICB1cmw6IHN0cmluZ1xuKTogbnVsbCB8IFJldHVyblR5cGU8dHlwZW9mIHBhcnNlUmVsYXRpdmVVcmw+IHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBJbnZhbGlkIGhyZWYgcGFzc2VkIHRvIHJvdXRlcjogJHt1cmx9IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2ludmFsaWQtaHJlZi1wYXNzZWRgXG4gICAgICApXG4gICAgfVxuICAgIHJldHVybiBudWxsXG4gIH1cbn1cblxudHlwZSBDb21wb25lbnRSZXMgPSB7IHBhZ2U6IENvbXBvbmVudFR5cGU7IG1vZDogYW55IH1cblxuZXhwb3J0IHR5cGUgQmFzZVJvdXRlciA9IHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG59XG5cbmV4cG9ydCB0eXBlIE5leHRSb3V0ZXIgPSBCYXNlUm91dGVyICZcbiAgUGljazxcbiAgICBSb3V0ZXIsXG4gICAgfCAncHVzaCdcbiAgICB8ICdyZXBsYWNlJ1xuICAgIHwgJ3JlbG9hZCdcbiAgICB8ICdiYWNrJ1xuICAgIHwgJ3ByZWZldGNoJ1xuICAgIHwgJ2JlZm9yZVBvcFN0YXRlJ1xuICAgIHwgJ2V2ZW50cydcbiAgICB8ICdpc0ZhbGxiYWNrJ1xuICA+XG5cbmV4cG9ydCB0eXBlIFByZWZldGNoT3B0aW9ucyA9IHtcbiAgcHJpb3JpdHk/OiBib29sZWFuXG59XG5cbnR5cGUgUm91dGVJbmZvID0ge1xuICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbiAgcHJvcHM/OiBhbnlcbiAgZXJyPzogRXJyb3JcbiAgZXJyb3I/OiBhbnlcbn1cblxudHlwZSBTdWJzY3JpcHRpb24gPSAoZGF0YTogUm91dGVJbmZvLCBBcHA/OiBDb21wb25lbnRUeXBlKSA9PiBQcm9taXNlPHZvaWQ+XG5cbnR5cGUgQmVmb3JlUG9wU3RhdGVDYWxsYmFjayA9IChzdGF0ZTogYW55KSA9PiBib29sZWFuXG5cbnR5cGUgQ29tcG9uZW50TG9hZENhbmNlbCA9ICgoKSA9PiB2b2lkKSB8IG51bGxcblxudHlwZSBIaXN0b3J5TWV0aG9kID0gJ3JlcGxhY2VTdGF0ZScgfCAncHVzaFN0YXRlJ1xuXG5jb25zdCBtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiA9XG4gIHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04gJiZcbiAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgJ3Njcm9sbFJlc3RvcmF0aW9uJyBpbiB3aW5kb3cuaGlzdG9yeVxuXG5mdW5jdGlvbiBmZXRjaFJldHJ5KHVybDogc3RyaW5nLCBhdHRlbXB0czogbnVtYmVyKTogUHJvbWlzZTxhbnk+IHtcbiAgcmV0dXJuIGZldGNoKHVybCwge1xuICAgIC8vIENvb2tpZXMgYXJlIHJlcXVpcmVkIHRvIGJlIHByZXNlbnQgZm9yIE5leHQuanMnIFNTRyBcIlByZXZpZXcgTW9kZVwiLlxuICAgIC8vIENvb2tpZXMgbWF5IGFsc28gYmUgcmVxdWlyZWQgZm9yIGBnZXRTZXJ2ZXJTaWRlUHJvcHNgLlxuICAgIC8vXG4gICAgLy8gPiBgZmV0Y2hgIHdvbuKAmXQgc2VuZCBjb29raWVzLCB1bmxlc3MgeW91IHNldCB0aGUgY3JlZGVudGlhbHMgaW5pdFxuICAgIC8vID4gb3B0aW9uLlxuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GZXRjaF9BUEkvVXNpbmdfRmV0Y2hcbiAgICAvL1xuICAgIC8vID4gRm9yIG1heGltdW0gYnJvd3NlciBjb21wYXRpYmlsaXR5IHdoZW4gaXQgY29tZXMgdG8gc2VuZGluZyAmXG4gICAgLy8gPiByZWNlaXZpbmcgY29va2llcywgYWx3YXlzIHN1cHBseSB0aGUgYGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nYFxuICAgIC8vID4gb3B0aW9uIGluc3RlYWQgb2YgcmVseWluZyBvbiB0aGUgZGVmYXVsdC5cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZ2l0aHViL2ZldGNoI2NhdmVhdHNcbiAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcbiAgfSkudGhlbigocmVzKSA9PiB7XG4gICAgaWYgKCFyZXMub2spIHtcbiAgICAgIGlmIChhdHRlbXB0cyA+IDEgJiYgcmVzLnN0YXR1cyA+PSA1MDApIHtcbiAgICAgICAgcmV0dXJuIGZldGNoUmV0cnkodXJsLCBhdHRlbXB0cyAtIDEpXG4gICAgICB9XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApXG4gICAgfVxuXG4gICAgcmV0dXJuIHJlcy5qc29uKClcbiAgfSlcbn1cblxuZnVuY3Rpb24gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZjogc3RyaW5nLCBpc1NlcnZlclJlbmRlcjogYm9vbGVhbikge1xuICByZXR1cm4gZmV0Y2hSZXRyeShkYXRhSHJlZiwgaXNTZXJ2ZXJSZW5kZXIgPyAzIDogMSkuY2F0Y2goKGVycjogRXJyb3IpID0+IHtcbiAgICAvLyBXZSBzaG91bGQgb25seSB0cmlnZ2VyIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbiBpZiB0aGlzIHdhcyBjYXVzZWRcbiAgICAvLyBvbiBhIGNsaWVudC1zaWRlIHRyYW5zaXRpb24uIE90aGVyd2lzZSwgd2UnZCBnZXQgaW50byBhbiBpbmZpbml0ZVxuICAgIC8vIGxvb3AuXG4gICAgaWYgKCFpc1NlcnZlclJlbmRlcikge1xuICAgICAgOyhlcnIgYXMgYW55KS5jb2RlID0gJ1BBR0VfTE9BRF9FUlJPUidcbiAgICB9XG4gICAgdGhyb3cgZXJyXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvdXRlciBpbXBsZW1lbnRzIEJhc2VSb3V0ZXIge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcblxuICAvKipcbiAgICogTWFwIG9mIGFsbCBjb21wb25lbnRzIGxvYWRlZCBpbiBgUm91dGVyYFxuICAgKi9cbiAgY29tcG9uZW50czogeyBbcGF0aG5hbWU6IHN0cmluZ106IFJvdXRlSW5mbyB9XG4gIC8vIFN0YXRpYyBEYXRhIENhY2hlXG4gIHNkYzogeyBbYXNQYXRoOiBzdHJpbmddOiBvYmplY3QgfSA9IHt9XG4gIHN1YjogU3Vic2NyaXB0aW9uXG4gIGNsYzogQ29tcG9uZW50TG9hZENhbmNlbFxuICBwYWdlTG9hZGVyOiBhbnlcbiAgX2JwczogQmVmb3JlUG9wU3RhdGVDYWxsYmFjayB8IHVuZGVmaW5lZFxuICBldmVudHM6IE1pdHRFbWl0dGVyXG4gIF93cmFwQXBwOiAoQXBwOiBDb21wb25lbnRUeXBlKSA9PiBhbnlcbiAgaXNTc3I6IGJvb2xlYW5cbiAgaXNGYWxsYmFjazogYm9vbGVhblxuICBfaW5GbGlnaHRSb3V0ZT86IHN0cmluZ1xuXG4gIHN0YXRpYyBldmVudHM6IE1pdHRFbWl0dGVyID0gbWl0dCgpXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICB7XG4gICAgICBpbml0aWFsUHJvcHMsXG4gICAgICBwYWdlTG9hZGVyLFxuICAgICAgQXBwLFxuICAgICAgd3JhcEFwcCxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIGVycixcbiAgICAgIHN1YnNjcmlwdGlvbixcbiAgICAgIGlzRmFsbGJhY2ssXG4gICAgfToge1xuICAgICAgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb25cbiAgICAgIGluaXRpYWxQcm9wczogYW55XG4gICAgICBwYWdlTG9hZGVyOiBhbnlcbiAgICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICAgICAgQXBwOiBDb21wb25lbnRUeXBlXG4gICAgICB3cmFwQXBwOiAoQXBwOiBDb21wb25lbnRUeXBlKSA9PiBhbnlcbiAgICAgIGVycj86IEVycm9yXG4gICAgICBpc0ZhbGxiYWNrOiBib29sZWFuXG4gICAgfVxuICApIHtcbiAgICAvLyByZXByZXNlbnRzIHRoZSBjdXJyZW50IGNvbXBvbmVudCBrZXlcbiAgICB0aGlzLnJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG5cbiAgICAvLyBzZXQgdXAgdGhlIGNvbXBvbmVudCBjYWNoZSAoYnkgcm91dGUga2V5cylcbiAgICB0aGlzLmNvbXBvbmVudHMgPSB7fVxuICAgIC8vIFdlIHNob3VsZCBub3Qga2VlcCB0aGUgY2FjaGUsIGlmIHRoZXJlJ3MgYW4gZXJyb3JcbiAgICAvLyBPdGhlcndpc2UsIHRoaXMgY2F1c2UgaXNzdWVzIHdoZW4gd2hlbiBnb2luZyBiYWNrIGFuZFxuICAgIC8vIGNvbWUgYWdhaW4gdG8gdGhlIGVycm9yZWQgcGFnZS5cbiAgICBpZiAocGF0aG5hbWUgIT09ICcvX2Vycm9yJykge1xuICAgICAgdGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdID0ge1xuICAgICAgICBDb21wb25lbnQsXG4gICAgICAgIHByb3BzOiBpbml0aWFsUHJvcHMsXG4gICAgICAgIGVycixcbiAgICAgICAgX19OX1NTRzogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NHLFxuICAgICAgICBfX05fU1NQOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU1AsXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5jb21wb25lbnRzWycvX2FwcCddID0geyBDb21wb25lbnQ6IEFwcCB9XG5cbiAgICAvLyBCYWNrd2FyZHMgY29tcGF0IGZvciBSb3V0ZXIucm91dGVyLmV2ZW50c1xuICAgIC8vIFRPRE86IFNob3VsZCBiZSByZW1vdmUgdGhlIGZvbGxvd2luZyBtYWpvciB2ZXJzaW9uIGFzIGl0IHdhcyBuZXZlciBkb2N1bWVudGVkXG4gICAgdGhpcy5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgICB0aGlzLnBhZ2VMb2FkZXIgPSBwYWdlTG9hZGVyXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgLy8gaWYgYXV0byBwcmVyZW5kZXJlZCBhbmQgZHluYW1pYyByb3V0ZSB3YWl0IHRvIHVwZGF0ZSBhc1BhdGhcbiAgICAvLyB1bnRpbCBhZnRlciBtb3VudCB0byBwcmV2ZW50IGh5ZHJhdGlvbiBtaXNtYXRjaFxuICAgIHRoaXMuYXNQYXRoID1cbiAgICAgIC8vIEB0cy1pZ25vcmUgdGhpcyBpcyB0ZW1wb3JhcmlseSBnbG9iYWwgKGF0dGFjaGVkIHRvIHdpbmRvdylcbiAgICAgIGlzRHluYW1pY1JvdXRlKHBhdGhuYW1lKSAmJiBfX05FWFRfREFUQV9fLmF1dG9FeHBvcnQgPyBwYXRobmFtZSA6IGFzXG4gICAgdGhpcy5iYXNlUGF0aCA9IGJhc2VQYXRoXG4gICAgdGhpcy5zdWIgPSBzdWJzY3JpcHRpb25cbiAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB0aGlzLl93cmFwQXBwID0gd3JhcEFwcFxuICAgIC8vIG1ha2Ugc3VyZSB0byBpZ25vcmUgZXh0cmEgcG9wU3RhdGUgaW4gc2FmYXJpIG9uIG5hdmlnYXRpbmdcbiAgICAvLyBiYWNrIGZyb20gZXh0ZXJuYWwgc2l0ZVxuICAgIHRoaXMuaXNTc3IgPSB0cnVlXG5cbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBpc0ZhbGxiYWNrXG5cbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIG1ha2Ugc3VyZSBcImFzXCIgZG9lc24ndCBzdGFydCB3aXRoIGRvdWJsZSBzbGFzaGVzIG9yIGVsc2UgaXQgY2FuXG4gICAgICAvLyB0aHJvdyBhbiBlcnJvciBhcyBpdCdzIGNvbnNpZGVyZWQgaW52YWxpZFxuICAgICAgaWYgKGFzLnN1YnN0cigwLCAyKSAhPT0gJy8vJykge1xuICAgICAgICAvLyBpbiBvcmRlciBmb3IgYGUuc3RhdGVgIHRvIHdvcmsgb24gdGhlIGBvbnBvcHN0YXRlYCBldmVudFxuICAgICAgICAvLyB3ZSBoYXZlIHRvIHJlZ2lzdGVyIHRoZSBpbml0aWFsIHJvdXRlIHVwb24gaW5pdGlhbGl6YXRpb25cblxuICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lKSwgcXVlcnkgfSksXG4gICAgICAgICAgZ2V0VVJMKClcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB0aGlzLm9uUG9wU3RhdGUpXG5cbiAgICAgIC8vIGVuYWJsZSBjdXN0b20gc2Nyb2xsIHJlc3RvcmF0aW9uIGhhbmRsaW5nIHdoZW4gYXZhaWxhYmxlXG4gICAgICAvLyBvdGhlcndpc2UgZmFsbGJhY2sgdG8gYnJvd3NlcidzIGRlZmF1bHQgaGFuZGxpbmdcbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnNjcm9sbFJlc3RvcmF0aW9uID0gJ21hbnVhbCdcblxuICAgICAgICAgIGxldCBzY3JvbGxEZWJvdW5jZVRpbWVvdXQ6IHVuZGVmaW5lZCB8IE5vZGVKUy5UaW1lb3V0XG5cbiAgICAgICAgICBjb25zdCBkZWJvdW5jZWRTY3JvbGxTYXZlID0gKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHNjcm9sbERlYm91bmNlVGltZW91dCkgY2xlYXJUaW1lb3V0KHNjcm9sbERlYm91bmNlVGltZW91dClcblxuICAgICAgICAgICAgc2Nyb2xsRGVib3VuY2VUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHsgdXJsLCBhczogY3VyQXMsIG9wdGlvbnMgfSA9IGhpc3Rvcnkuc3RhdGVcbiAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgICAgICAgICB1cmwsXG4gICAgICAgICAgICAgICAgY3VyQXMsXG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucywge1xuICAgICAgICAgICAgICAgICAgX05fWDogd2luZG93LnNjcm9sbFgsXG4gICAgICAgICAgICAgICAgICBfTl9ZOiB3aW5kb3cuc2Nyb2xsWSxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9LCAxMClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZGVib3VuY2VkU2Nyb2xsU2F2ZSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIEBkZXByZWNhdGVkIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5IGV2ZW4gdGhvdWdoIGl0J3MgYSBwcml2YXRlIG1ldGhvZC5cbiAgc3RhdGljIF9yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCh1cmw6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9FWFBPUlRfVFJBSUxJTkdfU0xBU0gpIHtcbiAgICAgIGNvbnN0IHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0ID0gcmVxdWlyZSgnLi9yZXdyaXRlLXVybC1mb3ItZXhwb3J0JylcbiAgICAgICAgLnJld3JpdGVVcmxGb3JOZXh0RXhwb3J0XG4gICAgICByZXR1cm4gcmV3cml0ZVVybEZvck5leHRFeHBvcnQodXJsKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdXJsXG4gICAgfVxuICB9XG5cbiAgb25Qb3BTdGF0ZSA9IChlOiBQb3BTdGF0ZUV2ZW50KTogdm9pZCA9PiB7XG4gICAgaWYgKCFlLnN0YXRlKSB7XG4gICAgICAvLyBXZSBnZXQgc3RhdGUgYXMgdW5kZWZpbmVkIGZvciB0d28gcmVhc29ucy5cbiAgICAgIC8vICAxLiBXaXRoIG9sZGVyIHNhZmFyaSAoPCA4KSBhbmQgb2xkZXIgY2hyb21lICg8IDM0KVxuICAgICAgLy8gIDIuIFdoZW4gdGhlIFVSTCBjaGFuZ2VkIHdpdGggI1xuICAgICAgLy9cbiAgICAgIC8vIEluIHRoZSBib3RoIGNhc2VzLCB3ZSBkb24ndCBuZWVkIHRvIHByb2NlZWQgYW5kIGNoYW5nZSB0aGUgcm91dGUuXG4gICAgICAvLyAoYXMgaXQncyBhbHJlYWR5IGNoYW5nZWQpXG4gICAgICAvLyBCdXQgd2UgY2FuIHNpbXBseSByZXBsYWNlIHRoZSBzdGF0ZSB3aXRoIHRoZSBuZXcgY2hhbmdlcy5cbiAgICAgIC8vIEFjdHVhbGx5LCBmb3IgKDEpIHdlIGRvbid0IG5lZWQgdG8gbm90aGluZy4gQnV0IGl0J3MgaGFyZCB0byBkZXRlY3QgdGhhdCBldmVudC5cbiAgICAgIC8vIFNvLCBkb2luZyB0aGUgZm9sbG93aW5nIGZvciAoMSkgZG9lcyBubyBoYXJtLlxuICAgICAgY29uc3QgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHRoaXNcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZSksIHF1ZXJ5IH0pLFxuICAgICAgICBnZXRVUkwoKVxuICAgICAgKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgeyB1cmwsIGFzLCBvcHRpb25zLCBfX04gfSA9IGUuc3RhdGVcbiAgICBpZiAoIV9fTikge1xuICAgICAgLy8gdGhpcyBoaXN0b3J5IHN0YXRlIHdhc24ndCBjcmVhdGVkIGJ5IG5leHQuanMgc28gaXQgY2FuIGJlIGlnbm9yZWRcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIC8vIE1ha2Ugc3VyZSB3ZSBkb24ndCByZS1yZW5kZXIgb24gaW5pdGlhbCBsb2FkLFxuICAgIC8vIGNhbiBiZSBjYXVzZWQgYnkgbmF2aWdhdGluZyBiYWNrIGZyb20gYW4gZXh0ZXJuYWwgc2l0ZVxuICAgIGlmICh0aGlzLmlzU3NyICYmIGFzID09PSB0aGlzLmFzUGF0aCAmJiBwYXRobmFtZSA9PT0gdGhpcy5wYXRobmFtZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGRvd25zdHJlYW0gYXBwbGljYXRpb24gcmV0dXJucyBmYWxzeSwgcmV0dXJuLlxuICAgIC8vIFRoZXkgd2lsbCB0aGVuIGJlIHJlc3BvbnNpYmxlIGZvciBoYW5kbGluZyB0aGUgZXZlbnQuXG4gICAgaWYgKHRoaXMuX2JwcyAmJiAhdGhpcy5fYnBzKGUuc3RhdGUpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKHR5cGVvZiB1cmwgPT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiBhcyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICdgcG9wc3RhdGVgIGV2ZW50IHRyaWdnZXJlZCBidXQgYGV2ZW50LnN0YXRlYCBkaWQgbm90IGhhdmUgYHVybGAgb3IgYGFzYCBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9wb3BzdGF0ZS1zdGF0ZS1lbXB0eSdcbiAgICAgICAgKVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIHVwZGF0ZShyb3V0ZTogc3RyaW5nLCBtb2Q6IGFueSkge1xuICAgIGNvbnN0IENvbXBvbmVudDogQ29tcG9uZW50VHlwZSA9IG1vZC5kZWZhdWx0IHx8IG1vZFxuICAgIGNvbnN0IGRhdGEgPSB0aGlzLmNvbXBvbmVudHNbcm91dGVdXG4gICAgaWYgKCFkYXRhKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYENhbm5vdCB1cGRhdGUgdW5hdmFpbGFibGUgcm91dGU6ICR7cm91dGV9YClcbiAgICB9XG5cbiAgICBjb25zdCBuZXdEYXRhID0gT2JqZWN0LmFzc2lnbih7fSwgZGF0YSwge1xuICAgICAgQ29tcG9uZW50LFxuICAgICAgX19OX1NTRzogbW9kLl9fTl9TU0csXG4gICAgICBfX05fU1NQOiBtb2QuX19OX1NTUCxcbiAgICB9KVxuICAgIHRoaXMuY29tcG9uZW50c1tyb3V0ZV0gPSBuZXdEYXRhXG5cbiAgICAvLyBwYWdlcy9fYXBwLmpzIHVwZGF0ZWRcbiAgICBpZiAocm91dGUgPT09ICcvX2FwcCcpIHtcbiAgICAgIHRoaXMubm90aWZ5KHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSlcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChyb3V0ZSA9PT0gdGhpcy5yb3V0ZSkge1xuICAgICAgdGhpcy5ub3RpZnkobmV3RGF0YSlcbiAgICB9XG4gIH1cblxuICByZWxvYWQoKTogdm9pZCB7XG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXG4gIH1cblxuICAvKipcbiAgICogR28gYmFjayBpbiBoaXN0b3J5XG4gICAqL1xuICBiYWNrKCkge1xuICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHB1c2hTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICBwdXNoKHVybDogVXJsLCBhczogVXJsID0gdXJsLCBvcHRpb25zID0ge30pIHtcbiAgICA7KHsgdXJsLCBhcyB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKVxuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncHVzaFN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGByZXBsYWNlU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcmVwbGFjZSh1cmw6IFVybCwgYXM6IFVybCA9IHVybCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgOyh7IHVybCwgYXMgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSlcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3JlcGxhY2VTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICBhc3luYyBjaGFuZ2UoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzOiBzdHJpbmcsXG4gICAgb3B0aW9uczogYW55XG4gICk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIGlmICghb3B0aW9ucy5faCkge1xuICAgICAgdGhpcy5pc1NzciA9IGZhbHNlXG4gICAgfVxuICAgIC8vIG1hcmtpbmcgcm91dGUgY2hhbmdlcyBhcyBhIG5hdmlnYXRpb24gc3RhcnQgZW50cnlcbiAgICBpZiAoU1QpIHtcbiAgICAgIHBlcmZvcm1hbmNlLm1hcmsoJ3JvdXRlQ2hhbmdlJylcbiAgICB9XG5cbiAgICAvLyBBZGQgdGhlIGVuZGluZyBzbGFzaCB0byB0aGUgcGF0aHMuIFNvLCB3ZSBjYW4gc2VydmUgdGhlXG4gICAgLy8gXCI8cGFnZT4vaW5kZXguaHRtbFwiIGRpcmVjdGx5IGZvciB0aGUgU1NSIHBhZ2UuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9FWFBPUlRfVFJBSUxJTkdfU0xBU0gpIHtcbiAgICAgIGNvbnN0IHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0ID0gcmVxdWlyZSgnLi9yZXdyaXRlLXVybC1mb3ItZXhwb3J0JylcbiAgICAgICAgLnJld3JpdGVVcmxGb3JOZXh0RXhwb3J0XG4gICAgICAvLyBAdHMtaWdub3JlIHRoaXMgaXMgdGVtcG9yYXJpbHkgZ2xvYmFsIChhdHRhY2hlZCB0byB3aW5kb3cpXG4gICAgICBpZiAoX19ORVhUX0RBVEFfXy5uZXh0RXhwb3J0KSB7XG4gICAgICAgIGFzID0gcmV3cml0ZVVybEZvck5leHRFeHBvcnQoYXMpXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2luRmxpZ2h0Um91dGUpIHtcbiAgICAgIHRoaXMuYWJvcnRDb21wb25lbnRMb2FkKHRoaXMuX2luRmxpZ2h0Um91dGUpXG4gICAgfVxuXG4gICAgY29uc3QgY2xlYW5lZEFzID0gZGVsQmFzZVBhdGgoYXMpXG4gICAgdGhpcy5faW5GbGlnaHRSb3V0ZSA9IGFzXG5cbiAgICAvLyBJZiB0aGUgdXJsIGNoYW5nZSBpcyBvbmx5IHJlbGF0ZWQgdG8gYSBoYXNoIGNoYW5nZVxuICAgIC8vIFdlIHNob3VsZCBub3QgcHJvY2VlZC4gV2Ugc2hvdWxkIG9ubHkgY2hhbmdlIHRoZSBzdGF0ZS5cblxuICAgIC8vIFdBUk5JTkc6IGBfaGAgaXMgYW4gaW50ZXJuYWwgb3B0aW9uIGZvciBoYW5kaW5nIE5leHQuanMgY2xpZW50LXNpZGVcbiAgICAvLyBoeWRyYXRpb24uIFlvdXIgYXBwIHNob3VsZCBfbmV2ZXJfIHVzZSB0aGlzIHByb3BlcnR5LiBJdCBtYXkgY2hhbmdlIGF0XG4gICAgLy8gYW55IHRpbWUgd2l0aG91dCBub3RpY2UuXG4gICAgaWYgKCFvcHRpb25zLl9oICYmIHRoaXMub25seUFIYXNoQ2hhbmdlKGNsZWFuZWRBcykpIHtcbiAgICAgIHRoaXMuYXNQYXRoID0gY2xlYW5lZEFzXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VTdGFydCcsIGFzKVxuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpXG4gICAgICB0aGlzLnNjcm9sbFRvSGFzaChjbGVhbmVkQXMpXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VDb21wbGV0ZScsIGFzKVxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICBjb25zdCBwYXJzZWQgPSB0cnlQYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIGlmICghcGFyc2VkKSByZXR1cm4gZmFsc2VcblxuICAgIGxldCB7IHBhdGhuYW1lLCBzZWFyY2hQYXJhbXMgfSA9IHBhcnNlZFxuICAgIGNvbnN0IHF1ZXJ5ID0gc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShzZWFyY2hQYXJhbXMpXG5cbiAgICAvLyB1cmwgYW5kIGFzIHNob3VsZCBhbHdheXMgYmUgcHJlZml4ZWQgd2l0aCBiYXNlUGF0aCBieSB0aGlzXG4gICAgLy8gcG9pbnQgYnkgZWl0aGVyIG5leHQvbGluayBvciByb3V0ZXIucHVzaC9yZXBsYWNlIHNvIHN0cmlwIHRoZVxuICAgIC8vIGJhc2VQYXRoIGZyb20gdGhlIHBhdGhuYW1lIHRvIG1hdGNoIHRoZSBwYWdlcyBkaXIgMS10by0xXG4gICAgcGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgPyByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChkZWxCYXNlUGF0aChwYXRobmFtZSkpXG4gICAgICA6IHBhdGhuYW1lXG5cbiAgICAvLyBJZiBhc2tlZCB0byBjaGFuZ2UgdGhlIGN1cnJlbnQgVVJMIHdlIHNob3VsZCByZWxvYWQgdGhlIGN1cnJlbnQgcGFnZVxuICAgIC8vIChub3QgbG9jYXRpb24ucmVsb2FkKCkgYnV0IHJlbG9hZCBnZXRJbml0aWFsUHJvcHMgYW5kIG90aGVyIE5leHQuanMgc3R1ZmZzKVxuICAgIC8vIFdlIGFsc28gbmVlZCB0byBzZXQgdGhlIG1ldGhvZCA9IHJlcGxhY2VTdGF0ZSBhbHdheXNcbiAgICAvLyBhcyB0aGlzIHNob3VsZCBub3QgZ28gaW50byB0aGUgaGlzdG9yeSAoVGhhdCdzIGhvdyBicm93c2VycyB3b3JrKVxuICAgIC8vIFdlIHNob3VsZCBjb21wYXJlIHRoZSBuZXcgYXNQYXRoIHRvIHRoZSBjdXJyZW50IGFzUGF0aCwgbm90IHRoZSB1cmxcbiAgICBpZiAoIXRoaXMudXJsSXNOZXcoY2xlYW5lZEFzKSkge1xuICAgICAgbWV0aG9kID0gJ3JlcGxhY2VTdGF0ZSdcbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuICAgIGNvbnN0IHsgc2hhbGxvdyA9IGZhbHNlIH0gPSBvcHRpb25zXG5cbiAgICBpZiAoaXNEeW5hbWljUm91dGUocm91dGUpKSB7XG4gICAgICBjb25zdCB7IHBhdGhuYW1lOiBhc1BhdGhuYW1lIH0gPSBwYXJzZVJlbGF0aXZlVXJsKGNsZWFuZWRBcylcbiAgICAgIGNvbnN0IHJvdXRlUmVnZXggPSBnZXRSb3V0ZVJlZ2V4KHJvdXRlKVxuICAgICAgY29uc3Qgcm91dGVNYXRjaCA9IGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4KShhc1BhdGhuYW1lKVxuICAgICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICAgIGNvbnN0IG1pc3NpbmdQYXJhbXMgPSBPYmplY3Qua2V5cyhyb3V0ZVJlZ2V4Lmdyb3VwcykuZmlsdGVyKFxuICAgICAgICAgIChwYXJhbSkgPT4gIXF1ZXJ5W3BhcmFtXVxuICAgICAgICApXG5cbiAgICAgICAgaWYgKG1pc3NpbmdQYXJhbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgIGBNaXNtYXRjaGluZyBcXGBhc1xcYCBhbmQgXFxgaHJlZlxcYCBmYWlsZWQgdG8gbWFudWFsbHkgcHJvdmlkZSBgICtcbiAgICAgICAgICAgICAgICBgdGhlIHBhcmFtczogJHttaXNzaW5nUGFyYW1zLmpvaW4oXG4gICAgICAgICAgICAgICAgICAnLCAnXG4gICAgICAgICAgICAgICAgKX0gaW4gdGhlIFxcYGhyZWZcXGAncyBcXGBxdWVyeVxcYGBcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBgVGhlIHByb3ZpZGVkIFxcYGFzXFxgIHZhbHVlICgke2FzUGF0aG5hbWV9KSBpcyBpbmNvbXBhdGlibGUgd2l0aCB0aGUgXFxgaHJlZlxcYCB2YWx1ZSAoJHtyb3V0ZX0pLiBgICtcbiAgICAgICAgICAgICAgYFJlYWQgbW9yZTogaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvaW5jb21wYXRpYmxlLWhyZWYtYXNgXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBNZXJnZSBwYXJhbXMgaW50byBgcXVlcnlgLCBvdmVyd3JpdGluZyBhbnkgc3BlY2lmaWVkIGluIHNlYXJjaFxuICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5LCByb3V0ZU1hdGNoKVxuICAgICAgfVxuICAgIH1cblxuICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VTdGFydCcsIGFzKVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJvdXRlSW5mbyA9IGF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKFxuICAgICAgICByb3V0ZSxcbiAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICBhcyxcbiAgICAgICAgc2hhbGxvd1xuICAgICAgKVxuICAgICAgY29uc3QgeyBlcnJvciB9ID0gcm91dGVJbmZvXG5cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnYmVmb3JlSGlzdG9yeUNoYW5nZScsIGFzKVxuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpXG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IGFwcENvbXA6IGFueSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnRcbiAgICAgICAgOyh3aW5kb3cgYXMgYW55KS5uZXh0LmlzUHJlcmVuZGVyZWQgPVxuICAgICAgICAgIGFwcENvbXAuZ2V0SW5pdGlhbFByb3BzID09PSBhcHBDb21wLm9yaWdHZXRJbml0aWFsUHJvcHMgJiZcbiAgICAgICAgICAhKHJvdXRlSW5mby5Db21wb25lbnQgYXMgYW55KS5nZXRJbml0aWFsUHJvcHNcbiAgICAgIH1cblxuICAgICAgYXdhaXQgdGhpcy5zZXQocm91dGUsIHBhdGhuYW1lISwgcXVlcnksIGNsZWFuZWRBcywgcm91dGVJbmZvKVxuXG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyb3IsIGNsZWFuZWRBcylcbiAgICAgICAgdGhyb3cgZXJyb3JcbiAgICAgIH1cblxuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uICYmICdfTl9YJyBpbiBvcHRpb25zKSB7XG4gICAgICAgICAgd2luZG93LnNjcm9sbFRvKG9wdGlvbnMuX05fWCwgb3B0aW9ucy5fTl9ZKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBhcylcblxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuICB9XG5cbiAgY2hhbmdlU3RhdGUoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzOiBzdHJpbmcsXG4gICAgb3B0aW9ucyA9IHt9XG4gICk6IHZvaWQge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeSBpcyBub3QgYXZhaWxhYmxlLmApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5LiR7bWV0aG9kfSBpcyBub3QgYXZhaWxhYmxlYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgfHwgZ2V0VVJMKCkgIT09IGFzKSB7XG4gICAgICB3aW5kb3cuaGlzdG9yeVttZXRob2RdKFxuICAgICAgICB7XG4gICAgICAgICAgdXJsLFxuICAgICAgICAgIGFzLFxuICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgICAgX19OOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICAvLyBNb3N0IGJyb3dzZXJzIGN1cnJlbnRseSBpZ25vcmVzIHRoaXMgcGFyYW1ldGVyLCBhbHRob3VnaCB0aGV5IG1heSB1c2UgaXQgaW4gdGhlIGZ1dHVyZS5cbiAgICAgICAgLy8gUGFzc2luZyB0aGUgZW1wdHkgc3RyaW5nIGhlcmUgc2hvdWxkIGJlIHNhZmUgYWdhaW5zdCBmdXR1cmUgY2hhbmdlcyB0byB0aGUgbWV0aG9kLlxuICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSGlzdG9yeS9yZXBsYWNlU3RhdGVcbiAgICAgICAgJycsXG4gICAgICAgIGFzXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgaGFuZGxlUm91dGVJbmZvRXJyb3IoXG4gICAgZXJyOiBFcnJvciAmIHsgY29kZTogYW55OyBjYW5jZWxsZWQ6IGJvb2xlYW4gfSxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBhbnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBsb2FkRXJyb3JGYWlsPzogYm9vbGVhblxuICApOiBQcm9taXNlPFJvdXRlSW5mbz4ge1xuICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAvLyBidWJibGUgdXAgY2FuY2VsbGF0aW9uIGVycm9yc1xuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuXG4gICAgaWYgKGVyci5jb2RlID09PSAnUEFHRV9MT0FEX0VSUk9SJyB8fCBsb2FkRXJyb3JGYWlsKSB7XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnIsIGFzKVxuXG4gICAgICAvLyBJZiB3ZSBjYW4ndCBsb2FkIHRoZSBwYWdlIGl0IGNvdWxkIGJlIG9uZSBvZiBmb2xsb3dpbmcgcmVhc29uc1xuICAgICAgLy8gIDEuIFBhZ2UgZG9lc24ndCBleGlzdHNcbiAgICAgIC8vICAyLiBQYWdlIGRvZXMgZXhpc3QgaW4gYSBkaWZmZXJlbnQgem9uZVxuICAgICAgLy8gIDMuIEludGVybmFsIGVycm9yIHdoaWxlIGxvYWRpbmcgdGhlIHBhZ2VcblxuICAgICAgLy8gU28sIGRvaW5nIGEgaGFyZCByZWxvYWQgaXMgdGhlIHByb3BlciB3YXkgdG8gZGVhbCB3aXRoIHRoaXMuXG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzXG5cbiAgICAgIC8vIENoYW5naW5nIHRoZSBVUkwgZG9lc24ndCBibG9jayBleGVjdXRpbmcgdGhlIGN1cnJlbnQgY29kZSBwYXRoLlxuICAgICAgLy8gU28gbGV0J3MgdGhyb3cgYSBjYW5jZWxsYXRpb24gZXJyb3Igc3RvcCB0aGUgcm91dGluZyBsb2dpYy5cbiAgICAgIHRocm93IGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKVxuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBjb25zdCB7IHBhZ2U6IENvbXBvbmVudCB9ID0gYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudCgnL19lcnJvcicpXG4gICAgICBjb25zdCByb3V0ZUluZm86IFJvdXRlSW5mbyA9IHsgQ29tcG9uZW50LCBlcnIsIGVycm9yOiBlcnIgfVxuXG4gICAgICB0cnkge1xuICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBhd2FpdCB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIHtcbiAgICAgICAgICBlcnIsXG4gICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgcXVlcnksXG4gICAgICAgIH0gYXMgYW55KVxuICAgICAgfSBjYXRjaCAoZ2lwRXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGVycm9yIHBhZ2UgYGdldEluaXRpYWxQcm9wc2A6ICcsIGdpcEVycilcbiAgICAgICAgcm91dGVJbmZvLnByb3BzID0ge31cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJvdXRlSW5mb1xuICAgIH0gY2F0Y2ggKHJvdXRlSW5mb0Vycikge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3Iocm91dGVJbmZvRXJyLCBwYXRobmFtZSwgcXVlcnksIGFzLCB0cnVlKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGdldFJvdXRlSW5mbyhcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IGFueSxcbiAgICBhczogc3RyaW5nLFxuICAgIHNoYWxsb3c6IGJvb2xlYW4gPSBmYWxzZVxuICApOiBQcm9taXNlPFJvdXRlSW5mbz4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBjYWNoZWRSb3V0ZUluZm8gPSB0aGlzLmNvbXBvbmVudHNbcm91dGVdXG5cbiAgICAgIGlmIChzaGFsbG93ICYmIGNhY2hlZFJvdXRlSW5mbyAmJiB0aGlzLnJvdXRlID09PSByb3V0ZSkge1xuICAgICAgICByZXR1cm4gY2FjaGVkUm91dGVJbmZvXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJvdXRlSW5mbyA9IGNhY2hlZFJvdXRlSW5mb1xuICAgICAgICA/IGNhY2hlZFJvdXRlSW5mb1xuICAgICAgICA6IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQocm91dGUpLnRoZW4oXG4gICAgICAgICAgICAocmVzKSA9PlxuICAgICAgICAgICAgICAoe1xuICAgICAgICAgICAgICAgIENvbXBvbmVudDogcmVzLnBhZ2UsXG4gICAgICAgICAgICAgICAgX19OX1NTRzogcmVzLm1vZC5fX05fU1NHLFxuICAgICAgICAgICAgICAgIF9fTl9TU1A6IHJlcy5tb2QuX19OX1NTUCxcbiAgICAgICAgICAgICAgfSBhcyBSb3V0ZUluZm8pXG4gICAgICAgICAgKVxuXG4gICAgICBjb25zdCB7IENvbXBvbmVudCwgX19OX1NTRywgX19OX1NTUCB9ID0gcm91dGVJbmZvXG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IHsgaXNWYWxpZEVsZW1lbnRUeXBlIH0gPSByZXF1aXJlKCdyZWFjdC1pcycpXG4gICAgICAgIGlmICghaXNWYWxpZEVsZW1lbnRUeXBlKENvbXBvbmVudCkpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBgVGhlIGRlZmF1bHQgZXhwb3J0IGlzIG5vdCBhIFJlYWN0IENvbXBvbmVudCBpbiBwYWdlOiBcIiR7cGF0aG5hbWV9XCJgXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxldCBkYXRhSHJlZjogc3RyaW5nIHwgdW5kZWZpbmVkXG5cbiAgICAgIGlmIChfX05fU1NHIHx8IF9fTl9TU1ApIHtcbiAgICAgICAgZGF0YUhyZWYgPSB0aGlzLnBhZ2VMb2FkZXIuZ2V0RGF0YUhyZWYoXG4gICAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZSwgcXVlcnkgfSksXG4gICAgICAgICAgYXMsXG4gICAgICAgICAgX19OX1NTR1xuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHByb3BzID0gYXdhaXQgdGhpcy5fZ2V0RGF0YTxSb3V0ZUluZm8+KCgpID0+XG4gICAgICAgIF9fTl9TU0dcbiAgICAgICAgICA/IHRoaXMuX2dldFN0YXRpY0RhdGEoZGF0YUhyZWYhKVxuICAgICAgICAgIDogX19OX1NTUFxuICAgICAgICAgID8gdGhpcy5fZ2V0U2VydmVyRGF0YShkYXRhSHJlZiEpXG4gICAgICAgICAgOiB0aGlzLmdldEluaXRpYWxQcm9wcyhcbiAgICAgICAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICAgICAgICAvLyB3ZSBwcm92aWRlIEFwcFRyZWUgbGF0ZXIgc28gdGhpcyBuZWVkcyB0byBiZSBgYW55YFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgYXNQYXRoOiBhcyxcbiAgICAgICAgICAgICAgfSBhcyBhbnlcbiAgICAgICAgICAgIClcbiAgICAgIClcbiAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzXG4gICAgICB0aGlzLmNvbXBvbmVudHNbcm91dGVdID0gcm91dGVJbmZvXG4gICAgICByZXR1cm4gcm91dGVJbmZvXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihlcnIsIHBhdGhuYW1lLCBxdWVyeSwgYXMpXG4gICAgfVxuICB9XG5cbiAgc2V0KFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogYW55LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgZGF0YTogUm91dGVJbmZvXG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMuaXNGYWxsYmFjayA9IGZhbHNlXG5cbiAgICB0aGlzLnJvdXRlID0gcm91dGVcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICB0aGlzLmFzUGF0aCA9IGFzXG4gICAgcmV0dXJuIHRoaXMubm90aWZ5KGRhdGEpXG4gIH1cblxuICAvKipcbiAgICogQ2FsbGJhY2sgdG8gZXhlY3V0ZSBiZWZvcmUgcmVwbGFjaW5nIHJvdXRlciBzdGF0ZVxuICAgKiBAcGFyYW0gY2IgY2FsbGJhY2sgdG8gYmUgZXhlY3V0ZWRcbiAgICovXG4gIGJlZm9yZVBvcFN0YXRlKGNiOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrKSB7XG4gICAgdGhpcy5fYnBzID0gY2JcbiAgfVxuXG4gIG9ubHlBSGFzaENoYW5nZShhczogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgaWYgKCF0aGlzLmFzUGF0aCkgcmV0dXJuIGZhbHNlXG4gICAgY29uc3QgW29sZFVybE5vSGFzaCwgb2xkSGFzaF0gPSB0aGlzLmFzUGF0aC5zcGxpdCgnIycpXG4gICAgY29uc3QgW25ld1VybE5vSGFzaCwgbmV3SGFzaF0gPSBhcy5zcGxpdCgnIycpXG5cbiAgICAvLyBNYWtlcyBzdXJlIHdlIHNjcm9sbCB0byB0aGUgcHJvdmlkZWQgaGFzaCBpZiB0aGUgdXJsL2hhc2ggYXJlIHRoZSBzYW1lXG4gICAgaWYgKG5ld0hhc2ggJiYgb2xkVXJsTm9IYXNoID09PSBuZXdVcmxOb0hhc2ggJiYgb2xkSGFzaCA9PT0gbmV3SGFzaCkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgdXJscyBhcmUgY2hhbmdlLCB0aGVyZSdzIG1vcmUgdGhhbiBhIGhhc2ggY2hhbmdlXG4gICAgaWYgKG9sZFVybE5vSGFzaCAhPT0gbmV3VXJsTm9IYXNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgaGFzaCBoYXMgY2hhbmdlZCwgdGhlbiBpdCdzIGEgaGFzaCBvbmx5IGNoYW5nZS5cbiAgICAvLyBUaGlzIGNoZWNrIGlzIG5lY2Vzc2FyeSB0byBoYW5kbGUgYm90aCB0aGUgZW50ZXIgYW5kXG4gICAgLy8gbGVhdmUgaGFzaCA9PT0gJycgY2FzZXMuIFRoZSBpZGVudGl0eSBjYXNlIGZhbGxzIHRocm91Z2hcbiAgICAvLyBhbmQgaXMgdHJlYXRlZCBhcyBhIG5leHQgcmVsb2FkLlxuICAgIHJldHVybiBvbGRIYXNoICE9PSBuZXdIYXNoXG4gIH1cblxuICBzY3JvbGxUb0hhc2goYXM6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IFssIGhhc2hdID0gYXMuc3BsaXQoJyMnKVxuICAgIC8vIFNjcm9sbCB0byB0b3AgaWYgdGhlIGhhc2ggaXMganVzdCBgI2Agd2l0aCBubyB2YWx1ZVxuICAgIGlmIChoYXNoID09PSAnJykge1xuICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBGaXJzdCB3ZSBjaGVjayBpZiB0aGUgZWxlbWVudCBieSBpZCBpcyBmb3VuZFxuICAgIGNvbnN0IGlkRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChoYXNoKVxuICAgIGlmIChpZEVsKSB7XG4gICAgICBpZEVsLnNjcm9sbEludG9WaWV3KClcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICAvLyBJZiB0aGVyZSdzIG5vIGVsZW1lbnQgd2l0aCB0aGUgaWQsIHdlIGNoZWNrIHRoZSBgbmFtZWAgcHJvcGVydHlcbiAgICAvLyBUbyBtaXJyb3IgYnJvd3NlcnNcbiAgICBjb25zdCBuYW1lRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShoYXNoKVswXVxuICAgIGlmIChuYW1lRWwpIHtcbiAgICAgIG5hbWVFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgfVxuICB9XG5cbiAgdXJsSXNOZXcoYXNQYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5hc1BhdGggIT09IGFzUGF0aFxuICB9XG5cbiAgLyoqXG4gICAqIFByZWZldGNoIHBhZ2UgY29kZSwgeW91IG1heSB3YWl0IGZvciB0aGUgZGF0YSBkdXJpbmcgcGFnZSByZW5kZXJpbmcuXG4gICAqIFRoaXMgZmVhdHVyZSBvbmx5IHdvcmtzIGluIHByb2R1Y3Rpb24hXG4gICAqIEBwYXJhbSB1cmwgdGhlIGhyZWYgb2YgcHJlZmV0Y2hlZCBwYWdlXG4gICAqIEBwYXJhbSBhc1BhdGggdGhlIGFzIHBhdGggb2YgdGhlIHByZWZldGNoZWQgcGFnZVxuICAgKi9cbiAgYXN5bmMgcHJlZmV0Y2goXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXNQYXRoOiBzdHJpbmcgPSB1cmwsXG4gICAgb3B0aW9uczogUHJlZmV0Y2hPcHRpb25zID0ge31cbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29uc3QgcGFyc2VkID0gdHJ5UGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICBpZiAoIXBhcnNlZCkgcmV0dXJuXG5cbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSBwYXJzZWRcblxuICAgIC8vIFByZWZldGNoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gZGV2ZWxvcG1lbnQgbW9kZSBiZWNhdXNlIGl0IHdvdWxkIHRyaWdnZXIgb24tZGVtYW5kLWVudHJpZXNcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcbiAgICBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICB0aGlzLnBhZ2VMb2FkZXIucHJlZmV0Y2hEYXRhKHVybCwgYXNQYXRoKSxcbiAgICAgIHRoaXMucGFnZUxvYWRlcltvcHRpb25zLnByaW9yaXR5ID8gJ2xvYWRQYWdlJyA6ICdwcmVmZXRjaCddKHJvdXRlKSxcbiAgICBdKVxuICB9XG5cbiAgYXN5bmMgZmV0Y2hDb21wb25lbnQocm91dGU6IHN0cmluZyk6IFByb21pc2U8Q29tcG9uZW50UmVzPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKHRoaXMuY2xjID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH0pXG5cbiAgICBjb25zdCBjb21wb25lbnRSZXN1bHQgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIubG9hZFBhZ2Uocm91dGUpXG5cbiAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICBjb25zdCBlcnJvcjogYW55ID0gbmV3IEVycm9yKFxuICAgICAgICBgQWJvcnQgZmV0Y2hpbmcgY29tcG9uZW50IGZvciByb3V0ZTogXCIke3JvdXRlfVwiYFxuICAgICAgKVxuICAgICAgZXJyb3IuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgdGhyb3cgZXJyb3JcbiAgICB9XG5cbiAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBvbmVudFJlc3VsdFxuICB9XG5cbiAgX2dldERhdGE8VD4oZm46ICgpID0+IFByb21pc2U8VD4pOiBQcm9taXNlPFQ+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfVxuICAgIHRoaXMuY2xjID0gY2FuY2VsXG4gICAgcmV0dXJuIGZuKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgICB9XG5cbiAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgY29uc3QgZXJyOiBhbnkgPSBuZXcgRXJyb3IoJ0xvYWRpbmcgaW5pdGlhbCBwcm9wcyBjYW5jZWxsZWQnKVxuICAgICAgICBlcnIuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICB9XG5cbiAgX2dldFN0YXRpY0RhdGEoZGF0YUhyZWY6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiB7XG4gICAgY29uc3QgeyBocmVmOiBjYWNoZUtleSB9ID0gbmV3IFVSTChkYXRhSHJlZiwgd2luZG93LmxvY2F0aW9uLmhyZWYpXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgJiYgdGhpcy5zZGNbY2FjaGVLZXldKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuc2RjW2NhY2hlS2V5XSlcbiAgICB9XG4gICAgcmV0dXJuIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIHRoaXMuc2RjW2NhY2hlS2V5XSA9IGRhdGFcbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSlcbiAgfVxuXG4gIF9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4ge1xuICAgIHJldHVybiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKVxuICB9XG5cbiAgZ2V0SW5pdGlhbFByb3BzKFxuICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZSxcbiAgICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICApOiBQcm9taXNlPGFueT4ge1xuICAgIGNvbnN0IHsgQ29tcG9uZW50OiBBcHAgfSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXVxuICAgIGNvbnN0IEFwcFRyZWUgPSB0aGlzLl93cmFwQXBwKEFwcClcbiAgICBjdHguQXBwVHJlZSA9IEFwcFRyZWVcbiAgICByZXR1cm4gbG9hZEdldEluaXRpYWxQcm9wczxBcHBDb250ZXh0VHlwZTxSb3V0ZXI+PihBcHAsIHtcbiAgICAgIEFwcFRyZWUsXG4gICAgICBDb21wb25lbnQsXG4gICAgICByb3V0ZXI6IHRoaXMsXG4gICAgICBjdHgsXG4gICAgfSlcbiAgfVxuXG4gIGFib3J0Q29tcG9uZW50TG9hZChhczogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY2xjKSB7XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBidWlsZENhbmNlbGxhdGlvbkVycm9yKCksIGFzKVxuICAgICAgdGhpcy5jbGMoKVxuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuICB9XG5cbiAgbm90aWZ5KGRhdGE6IFJvdXRlSW5mbyk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLnN1YihkYXRhLCB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50KVxuICB9XG59XG4iLCIvLyBGb3JtYXQgZnVuY3Rpb24gbW9kaWZpZWQgZnJvbSBub2RlanNcbi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgeyBlbmNvZGUgYXMgZW5jb2RlUXVlcnlzdHJpbmcgfSBmcm9tICdxdWVyeXN0cmluZydcblxuY29uc3Qgc2xhc2hlZFByb3RvY29scyA9IC9odHRwcz98ZnRwfGdvcGhlcnxmaWxlL1xuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0VXJsKHVybE9iajogVXJsT2JqZWN0KSB7XG4gIGxldCB7IGF1dGgsIGhvc3RuYW1lIH0gPSB1cmxPYmpcbiAgbGV0IHByb3RvY29sID0gdXJsT2JqLnByb3RvY29sIHx8ICcnXG4gIGxldCBwYXRobmFtZSA9IHVybE9iai5wYXRobmFtZSB8fCAnJ1xuICBsZXQgaGFzaCA9IHVybE9iai5oYXNoIHx8ICcnXG4gIGxldCBxdWVyeSA9IHVybE9iai5xdWVyeSB8fCAnJ1xuICBsZXQgaG9zdDogc3RyaW5nIHwgZmFsc2UgPSBmYWxzZVxuXG4gIGF1dGggPSBhdXRoID8gZW5jb2RlVVJJQ29tcG9uZW50KGF1dGgpLnJlcGxhY2UoLyUzQS9pLCAnOicpICsgJ0AnIDogJydcblxuICBpZiAodXJsT2JqLmhvc3QpIHtcbiAgICBob3N0ID0gYXV0aCArIHVybE9iai5ob3N0XG4gIH0gZWxzZSBpZiAoaG9zdG5hbWUpIHtcbiAgICBob3N0ID0gYXV0aCArICh+aG9zdG5hbWUuaW5kZXhPZignOicpID8gYFske2hvc3RuYW1lfV1gIDogaG9zdG5hbWUpXG4gICAgaWYgKHVybE9iai5wb3J0KSB7XG4gICAgICBob3N0ICs9ICc6JyArIHVybE9iai5wb3J0XG4gICAgfVxuICB9XG5cbiAgaWYgKHF1ZXJ5ICYmIHR5cGVvZiBxdWVyeSA9PT0gJ29iamVjdCcpIHtcbiAgICAvLyBxdWVyeSA9ICcnICsgbmV3IFVSTFNlYXJjaFBhcmFtcyhxdWVyeSk7XG4gICAgcXVlcnkgPSBlbmNvZGVRdWVyeXN0cmluZyhxdWVyeSlcbiAgfVxuXG4gIGxldCBzZWFyY2ggPSB1cmxPYmouc2VhcmNoIHx8IChxdWVyeSAmJiBgPyR7cXVlcnl9YCkgfHwgJydcblxuICBpZiAocHJvdG9jb2wgJiYgcHJvdG9jb2wuc3Vic3RyKC0xKSAhPT0gJzonKSBwcm90b2NvbCArPSAnOidcblxuICBpZiAoXG4gICAgdXJsT2JqLnNsYXNoZXMgfHxcbiAgICAoKCFwcm90b2NvbCB8fCBzbGFzaGVkUHJvdG9jb2xzLnRlc3QocHJvdG9jb2wpKSAmJiBob3N0ICE9PSBmYWxzZSlcbiAgKSB7XG4gICAgaG9zdCA9ICcvLycgKyAoaG9zdCB8fCAnJylcbiAgICBpZiAocGF0aG5hbWUgJiYgcGF0aG5hbWVbMF0gIT09ICcvJykgcGF0aG5hbWUgPSAnLycgKyBwYXRobmFtZVxuICB9IGVsc2UgaWYgKCFob3N0KSB7XG4gICAgaG9zdCA9ICcnXG4gIH1cblxuICBpZiAoaGFzaCAmJiBoYXNoWzBdICE9PSAnIycpIGhhc2ggPSAnIycgKyBoYXNoXG4gIGlmIChzZWFyY2ggJiYgc2VhcmNoWzBdICE9PSAnPycpIHNlYXJjaCA9ICc/JyArIHNlYXJjaFxuXG4gIHBhdGhuYW1lID0gcGF0aG5hbWUucmVwbGFjZSgvWz8jXS9nLCBlbmNvZGVVUklDb21wb25lbnQpXG4gIHNlYXJjaCA9IHNlYXJjaC5yZXBsYWNlKCcjJywgJyUyMycpXG5cbiAgcmV0dXJuIGAke3Byb3RvY29sfSR7aG9zdH0ke3BhdGhuYW1lfSR7c2VhcmNofSR7aGFzaH1gXG59XG4iLCIvLyBJZGVudGlmeSAvW3BhcmFtXS8gaW4gcm91dGUgc3RyaW5nXG5jb25zdCBURVNUX1JPVVRFID0gL1xcL1xcW1teL10rP1xcXSg/PVxcL3wkKS9cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRHluYW1pY1JvdXRlKHJvdXRlOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIFRFU1RfUk9VVEUudGVzdChyb3V0ZSlcbn1cbiIsImNvbnN0IERVTU1ZX0JBU0UgPSBuZXcgVVJMKCdodHRwOi8vbicpXG5cbi8qKlxuICogUGFyc2VzIHBhdGgtcmVsYXRpdmUgdXJscyAoZS5nLiBgL2hlbGxvL3dvcmxkP2Zvbz1iYXJgKS4gSWYgdXJsIGlzbid0IHBhdGgtcmVsYXRpdmVcbiAqIChlLmcuIGAuL2hlbGxvYCkgdGhlbiBhdCBsZWFzdCBiYXNlIG11c3QgYmUuXG4gKiBBYnNvbHV0ZSB1cmxzIGFyZSByZWplY3RlZC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlUmVsYXRpdmVVcmwodXJsOiBzdHJpbmcsIGJhc2U/OiBzdHJpbmcpIHtcbiAgY29uc3QgcmVzb2x2ZWRCYXNlID0gYmFzZSA/IG5ldyBVUkwoYmFzZSwgRFVNTVlfQkFTRSkgOiBEVU1NWV9CQVNFXG4gIGNvbnN0IHsgcGF0aG5hbWUsIHNlYXJjaFBhcmFtcywgc2VhcmNoLCBoYXNoLCBocmVmLCBvcmlnaW4gfSA9IG5ldyBVUkwoXG4gICAgdXJsLFxuICAgIHJlc29sdmVkQmFzZVxuICApXG4gIGlmIChvcmlnaW4gIT09IERVTU1ZX0JBU0Uub3JpZ2luKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdpbnZhcmlhbnQ6IGludmFsaWQgcmVsYXRpdmUgVVJMJylcbiAgfVxuICByZXR1cm4ge1xuICAgIHBhdGhuYW1lLFxuICAgIHNlYXJjaFBhcmFtcyxcbiAgICBzZWFyY2gsXG4gICAgaGFzaCxcbiAgICBocmVmOiBocmVmLnNsaWNlKERVTU1ZX0JBU0Uub3JpZ2luLmxlbmd0aCksXG4gIH1cbn1cbiIsImltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3JvdXRlLXJlZ2V4J1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXg6IFJldHVyblR5cGU8dHlwZW9mIGdldFJvdXRlUmVnZXg+KSB7XG4gIGNvbnN0IHsgcmUsIGdyb3VwcyB9ID0gcm91dGVSZWdleFxuICByZXR1cm4gKHBhdGhuYW1lOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkKSA9PiB7XG4gICAgY29uc3Qgcm91dGVNYXRjaCA9IHJlLmV4ZWMocGF0aG5hbWUhKVxuICAgIGlmICghcm91dGVNYXRjaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgY29uc3QgZGVjb2RlID0gKHBhcmFtOiBzdHJpbmcpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQocGFyYW0pXG4gICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgIGNvbnN0IGVycjogRXJyb3IgJiB7IGNvZGU/OiBzdHJpbmcgfSA9IG5ldyBFcnJvcihcbiAgICAgICAgICAnZmFpbGVkIHRvIGRlY29kZSBwYXJhbSdcbiAgICAgICAgKVxuICAgICAgICBlcnIuY29kZSA9ICdERUNPREVfRkFJTEVEJ1xuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgcGFyYW1zOiB7IFtwYXJhbU5hbWU6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH0gPSB7fVxuXG4gICAgT2JqZWN0LmtleXMoZ3JvdXBzKS5mb3JFYWNoKChzbHVnTmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICBjb25zdCBnID0gZ3JvdXBzW3NsdWdOYW1lXVxuICAgICAgY29uc3QgbSA9IHJvdXRlTWF0Y2hbZy5wb3NdXG4gICAgICBpZiAobSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHBhcmFtc1tzbHVnTmFtZV0gPSB+bS5pbmRleE9mKCcvJylcbiAgICAgICAgICA/IG0uc3BsaXQoJy8nKS5tYXAoKGVudHJ5KSA9PiBkZWNvZGUoZW50cnkpKVxuICAgICAgICAgIDogZy5yZXBlYXRcbiAgICAgICAgICA/IFtkZWNvZGUobSldXG4gICAgICAgICAgOiBkZWNvZGUobSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBwYXJhbXNcbiAgfVxufVxuIiwiaW50ZXJmYWNlIEdyb3VwIHtcbiAgcG9zOiBudW1iZXJcbiAgcmVwZWF0OiBib29sZWFuXG4gIG9wdGlvbmFsOiBib29sZWFuXG59XG5cbi8vIHRoaXMgaXNuJ3QgaW1wb3J0aW5nIHRoZSBlc2NhcGUtc3RyaW5nLXJlZ2V4IG1vZHVsZVxuLy8gdG8gcmVkdWNlIGJ5dGVzXG5mdW5jdGlvbiBlc2NhcGVSZWdleChzdHI6IHN0cmluZykge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL1t8XFxcXHt9KClbXFxdXiQrKj8uLV0vZywgJ1xcXFwkJicpXG59XG5cbmZ1bmN0aW9uIHBhcnNlUGFyYW1ldGVyKHBhcmFtOiBzdHJpbmcpIHtcbiAgY29uc3Qgb3B0aW9uYWwgPSBwYXJhbS5zdGFydHNXaXRoKCdbJykgJiYgcGFyYW0uZW5kc1dpdGgoJ10nKVxuICBpZiAob3B0aW9uYWwpIHtcbiAgICBwYXJhbSA9IHBhcmFtLnNsaWNlKDEsIC0xKVxuICB9XG4gIGNvbnN0IHJlcGVhdCA9IHBhcmFtLnN0YXJ0c1dpdGgoJy4uLicpXG4gIGlmIChyZXBlYXQpIHtcbiAgICBwYXJhbSA9IHBhcmFtLnNsaWNlKDMpXG4gIH1cbiAgcmV0dXJuIHsga2V5OiBwYXJhbSwgcmVwZWF0LCBvcHRpb25hbCB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZVJlZ2V4KFxuICBub3JtYWxpemVkUm91dGU6IHN0cmluZ1xuKToge1xuICByZTogUmVnRXhwXG4gIG5hbWVkUmVnZXg/OiBzdHJpbmdcbiAgcm91dGVLZXlzPzogeyBbbmFtZWQ6IHN0cmluZ106IHN0cmluZyB9XG4gIGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiBHcm91cCB9XG59IHtcbiAgY29uc3Qgc2VnbWVudHMgPSAobm9ybWFsaXplZFJvdXRlLnJlcGxhY2UoL1xcLyQvLCAnJykgfHwgJy8nKVxuICAgIC5zbGljZSgxKVxuICAgIC5zcGxpdCgnLycpXG5cbiAgY29uc3QgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IEdyb3VwIH0gPSB7fVxuICBsZXQgZ3JvdXBJbmRleCA9IDFcbiAgY29uc3QgcGFyYW1ldGVyaXplZFJvdXRlID0gc2VnbWVudHNcbiAgICAubWFwKChzZWdtZW50KSA9PiB7XG4gICAgICBpZiAoc2VnbWVudC5zdGFydHNXaXRoKCdbJykgJiYgc2VnbWVudC5lbmRzV2l0aCgnXScpKSB7XG4gICAgICAgIGNvbnN0IHsga2V5LCBvcHRpb25hbCwgcmVwZWF0IH0gPSBwYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsIC0xKSlcbiAgICAgICAgZ3JvdXBzW2tleV0gPSB7IHBvczogZ3JvdXBJbmRleCsrLCByZXBlYXQsIG9wdGlvbmFsIH1cbiAgICAgICAgcmV0dXJuIHJlcGVhdCA/IChvcHRpb25hbCA/ICcoPzovKC4rPykpPycgOiAnLyguKz8pJykgOiAnLyhbXi9dKz8pJ1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gXG4gICAgICB9XG4gICAgfSlcbiAgICAuam9pbignJylcblxuICAvLyBkZWFkIGNvZGUgZWxpbWluYXRlIGZvciBicm93c2VyIHNpbmNlIGl0J3Mgb25seSBuZWVkZWRcbiAgLy8gd2hpbGUgZ2VuZXJhdGluZyByb3V0ZXMtbWFuaWZlc3RcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgbGV0IHJvdXRlS2V5Q2hhckNvZGUgPSA5N1xuICAgIGxldCByb3V0ZUtleUNoYXJMZW5ndGggPSAxXG5cbiAgICAvLyBidWlsZHMgYSBtaW5pbWFsIHJvdXRlS2V5IHVzaW5nIG9ubHkgYS16IGFuZCBtaW5pbWFsIG51bWJlciBvZiBjaGFyYWN0ZXJzXG4gICAgY29uc3QgZ2V0U2FmZVJvdXRlS2V5ID0gKCkgPT4ge1xuICAgICAgbGV0IHJvdXRlS2V5ID0gJydcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3V0ZUtleUNoYXJMZW5ndGg7IGkrKykge1xuICAgICAgICByb3V0ZUtleSArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHJvdXRlS2V5Q2hhckNvZGUpXG4gICAgICAgIHJvdXRlS2V5Q2hhckNvZGUrK1xuXG4gICAgICAgIGlmIChyb3V0ZUtleUNoYXJDb2RlID4gMTIyKSB7XG4gICAgICAgICAgcm91dGVLZXlDaGFyTGVuZ3RoKytcbiAgICAgICAgICByb3V0ZUtleUNoYXJDb2RlID0gOTdcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJvdXRlS2V5XG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGVLZXlzOiB7IFtuYW1lZDogc3RyaW5nXTogc3RyaW5nIH0gPSB7fVxuXG4gICAgbGV0IG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlID0gc2VnbWVudHNcbiAgICAgIC5tYXAoKHNlZ21lbnQpID0+IHtcbiAgICAgICAgaWYgKHNlZ21lbnQuc3RhcnRzV2l0aCgnWycpICYmIHNlZ21lbnQuZW5kc1dpdGgoJ10nKSkge1xuICAgICAgICAgIGNvbnN0IHsga2V5LCBvcHRpb25hbCwgcmVwZWF0IH0gPSBwYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsIC0xKSlcbiAgICAgICAgICAvLyByZXBsYWNlIGFueSBub24td29yZCBjaGFyYWN0ZXJzIHNpbmNlIHRoZXkgY2FuIGJyZWFrXG4gICAgICAgICAgLy8gdGhlIG5hbWVkIHJlZ2V4XG4gICAgICAgICAgbGV0IGNsZWFuZWRLZXkgPSBrZXkucmVwbGFjZSgvXFxXL2csICcnKVxuICAgICAgICAgIGxldCBpbnZhbGlkS2V5ID0gZmFsc2VcblxuICAgICAgICAgIC8vIGNoZWNrIGlmIHRoZSBrZXkgaXMgc3RpbGwgaW52YWxpZCBhbmQgZmFsbGJhY2sgdG8gdXNpbmcgYSBrbm93blxuICAgICAgICAgIC8vIHNhZmUga2V5XG4gICAgICAgICAgaWYgKGNsZWFuZWRLZXkubGVuZ3RoID09PSAwIHx8IGNsZWFuZWRLZXkubGVuZ3RoID4gMzApIHtcbiAgICAgICAgICAgIGludmFsaWRLZXkgPSB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghaXNOYU4ocGFyc2VJbnQoY2xlYW5lZEtleS5zdWJzdHIoMCwgMSkpKSkge1xuICAgICAgICAgICAgaW52YWxpZEtleSA9IHRydWVcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoaW52YWxpZEtleSkge1xuICAgICAgICAgICAgY2xlYW5lZEtleSA9IGdldFNhZmVSb3V0ZUtleSgpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcm91dGVLZXlzW2NsZWFuZWRLZXldID0ga2V5XG4gICAgICAgICAgcmV0dXJuIHJlcGVhdFxuICAgICAgICAgICAgPyBvcHRpb25hbFxuICAgICAgICAgICAgICA/IGAoPzovKD88JHtjbGVhbmVkS2V5fT4uKz8pKT9gXG4gICAgICAgICAgICAgIDogYC8oPzwke2NsZWFuZWRLZXl9Pi4rPylgXG4gICAgICAgICAgICA6IGAvKD88JHtjbGVhbmVkS2V5fT5bXi9dKz8pYFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBgLyR7ZXNjYXBlUmVnZXgoc2VnbWVudCl9YFxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmpvaW4oJycpXG5cbiAgICByZXR1cm4ge1xuICAgICAgcmU6IG5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksXG4gICAgICBncm91cHMsXG4gICAgICByb3V0ZUtleXMsXG4gICAgICBuYW1lZFJlZ2V4OiBgXiR7bmFtZWRQYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGAsXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICByZTogbmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxcbiAgICBncm91cHMsXG4gIH1cbn1cbiIsImltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5cbmV4cG9ydCBmdW5jdGlvbiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KFxuICBzZWFyY2hQYXJhbXM6IFVSTFNlYXJjaFBhcmFtc1xuKTogUGFyc2VkVXJsUXVlcnkge1xuICBjb25zdCBxdWVyeTogUGFyc2VkVXJsUXVlcnkgPSB7fVxuICBzZWFyY2hQYXJhbXMuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4ge1xuICAgIGlmICh0eXBlb2YgcXVlcnlba2V5XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHF1ZXJ5W2tleV0gPSB2YWx1ZVxuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShxdWVyeVtrZXldKSkge1xuICAgICAgOyhxdWVyeVtrZXldIGFzIHN0cmluZ1tdKS5wdXNoKHZhbHVlKVxuICAgIH0gZWxzZSB7XG4gICAgICBxdWVyeVtrZXldID0gW3F1ZXJ5W2tleV0gYXMgc3RyaW5nLCB2YWx1ZV1cbiAgICB9XG4gIH0pXG4gIHJldHVybiBxdWVyeVxufVxuIiwiaW1wb3J0IHsgSW5jb21pbmdNZXNzYWdlLCBTZXJ2ZXJSZXNwb25zZSB9IGZyb20gJ2h0dHAnXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgZm9ybWF0VXJsIH0gZnJvbSAnLi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybCdcbmltcG9ydCB7IE1hbmlmZXN0SXRlbSB9IGZyb20gJy4uL3NlcnZlci9sb2FkLWNvbXBvbmVudHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgRW52IH0gZnJvbSAnLi4vLi4vbGliL2xvYWQtZW52LWNvbmZpZydcbmltcG9ydCB7IEJ1aWxkTWFuaWZlc3QgfSBmcm9tICcuLi9zZXJ2ZXIvZ2V0LXBhZ2UtZmlsZXMnXG5cbi8qKlxuICogVHlwZXMgdXNlZCBieSBib3RoIG5leHQgYW5kIG5leHQtc2VydmVyXG4gKi9cblxuZXhwb3J0IHR5cGUgTmV4dENvbXBvbmVudFR5cGU8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCA9IE5leHRQYWdlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+ID0gQ29tcG9uZW50VHlwZTxQPiAmIHtcbiAgLyoqXG4gICAqIFVzZWQgZm9yIGluaXRpYWwgcGFnZSBsb2FkIGRhdGEgcG9wdWxhdGlvbi4gRGF0YSByZXR1cm5lZCBmcm9tIGBnZXRJbml0aWFsUHJvcHNgIGlzIHNlcmlhbGl6ZWQgd2hlbiBzZXJ2ZXIgcmVuZGVyZWQuXG4gICAqIE1ha2Ugc3VyZSB0byByZXR1cm4gcGxhaW4gYE9iamVjdGAgd2l0aG91dCB1c2luZyBgRGF0ZWAsIGBNYXBgLCBgU2V0YC5cbiAgICogQHBhcmFtIGN0eCBDb250ZXh0IG9mIGBwYWdlYFxuICAgKi9cbiAgZ2V0SW5pdGlhbFByb3BzPyhjb250ZXh0OiBDKTogSVAgfCBQcm9taXNlPElQPlxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgRG9jdW1lbnRDb250ZXh0LFxuICBEb2N1bWVudEluaXRpYWxQcm9wcyxcbiAgRG9jdW1lbnRQcm9wc1xuPiAmIHtcbiAgcmVuZGVyRG9jdW1lbnQoXG4gICAgRG9jdW1lbnQ6IERvY3VtZW50VHlwZSxcbiAgICBwcm9wczogRG9jdW1lbnRQcm9wc1xuICApOiBSZWFjdC5SZWFjdEVsZW1lbnRcbn1cblxuZXhwb3J0IHR5cGUgQXBwVHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBBcHBDb250ZXh0VHlwZSxcbiAgQXBwSW5pdGlhbFByb3BzLFxuICBBcHBQcm9wc1R5cGVcbj5cblxuZXhwb3J0IHR5cGUgQXBwVHJlZVR5cGUgPSBDb21wb25lbnRUeXBlPFxuICBBcHBJbml0aWFsUHJvcHMgJiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfVxuPlxuXG4vKipcbiAqIFdlYiB2aXRhbHMgcHJvdmlkZWQgdG8gX2FwcC5yZXBvcnRXZWJWaXRhbHMgYnkgQ29yZSBXZWIgVml0YWxzIHBsdWdpbiBkZXZlbG9wZWQgYnkgR29vZ2xlIENocm9tZSB0ZWFtLlxuICogaHR0cHM6Ly9uZXh0anMub3JnL2Jsb2cvbmV4dC05LTQjaW50ZWdyYXRlZC13ZWItdml0YWxzLXJlcG9ydGluZ1xuICovXG5leHBvcnQgdHlwZSBOZXh0V2ViVml0YWxzTWV0cmljID0ge1xuICBpZDogc3RyaW5nXG4gIGxhYmVsOiBzdHJpbmdcbiAgbmFtZTogc3RyaW5nXG4gIHN0YXJ0VGltZTogbnVtYmVyXG4gIHZhbHVlOiBudW1iZXJcbn1cblxuZXhwb3J0IHR5cGUgRW5oYW5jZXI8Qz4gPSAoQ29tcG9uZW50OiBDKSA9PiBDXG5cbmV4cG9ydCB0eXBlIENvbXBvbmVudHNFbmhhbmNlciA9XG4gIHwge1xuICAgICAgZW5oYW5jZUFwcD86IEVuaGFuY2VyPEFwcFR5cGU+XG4gICAgICBlbmhhbmNlQ29tcG9uZW50PzogRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG4gICAgfVxuICB8IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlUmVzdWx0ID0ge1xuICBodG1sOiBzdHJpbmdcbiAgaGVhZD86IEFycmF5PEpTWC5FbGVtZW50IHwgbnVsbD5cbn1cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZSA9IChcbiAgb3B0aW9ucz86IENvbXBvbmVudHNFbmhhbmNlclxuKSA9PiBSZW5kZXJQYWdlUmVzdWx0IHwgUHJvbWlzZTxSZW5kZXJQYWdlUmVzdWx0PlxuXG5leHBvcnQgdHlwZSBCYXNlQ29udGV4dCA9IHtcbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgW2s6IHN0cmluZ106IGFueVxufVxuXG5leHBvcnQgdHlwZSBORVhUX0RBVEEgPSB7XG4gIHByb3BzOiBhbnlcbiAgcGFnZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBidWlsZElkOiBzdHJpbmdcbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgcnVudGltZUNvbmZpZz86IHsgW2tleTogc3RyaW5nXTogYW55IH1cbiAgbmV4dEV4cG9ydD86IGJvb2xlYW5cbiAgYXV0b0V4cG9ydD86IGJvb2xlYW5cbiAgaXNGYWxsYmFjaz86IGJvb2xlYW5cbiAgZHluYW1pY0lkcz86IHN0cmluZ1tdXG4gIGVycj86IEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH1cbiAgZ3NwPzogYm9vbGVhblxuICBnc3NwPzogYm9vbGVhblxuICBjdXN0b21TZXJ2ZXI/OiBib29sZWFuXG4gIGdpcD86IGJvb2xlYW5cbiAgYXBwR2lwPzogYm9vbGVhblxufVxuXG4vKipcbiAqIGBOZXh0YCBjb250ZXh0XG4gKi9cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSBpbnRlcmZhY2UtbmFtZVxuZXhwb3J0IGludGVyZmFjZSBOZXh0UGFnZUNvbnRleHQge1xuICAvKipcbiAgICogRXJyb3Igb2JqZWN0IGlmIGVuY291bnRlcmVkIGR1cmluZyByZW5kZXJpbmdcbiAgICovXG4gIGVycj86IChFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9KSB8IG51bGxcbiAgLyoqXG4gICAqIGBIVFRQYCByZXF1ZXN0IG9iamVjdC5cbiAgICovXG4gIHJlcT86IEluY29taW5nTWVzc2FnZVxuICAvKipcbiAgICogYEhUVFBgIHJlc3BvbnNlIG9iamVjdC5cbiAgICovXG4gIHJlcz86IFNlcnZlclJlc3BvbnNlXG4gIC8qKlxuICAgKiBQYXRoIHNlY3Rpb24gb2YgYFVSTGAuXG4gICAqL1xuICBwYXRobmFtZTogc3RyaW5nXG4gIC8qKlxuICAgKiBRdWVyeSBzdHJpbmcgc2VjdGlvbiBvZiBgVVJMYCBwYXJzZWQgYXMgYW4gb2JqZWN0LlxuICAgKi9cbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIC8qKlxuICAgKiBgU3RyaW5nYCBvZiB0aGUgYWN0dWFsIHBhdGggaW5jbHVkaW5nIHF1ZXJ5LlxuICAgKi9cbiAgYXNQYXRoPzogc3RyaW5nXG4gIC8qKlxuICAgKiBgQ29tcG9uZW50YCB0aGUgdHJlZSBvZiB0aGUgQXBwIHRvIHVzZSBpZiBuZWVkaW5nIHRvIHJlbmRlciBzZXBhcmF0ZWx5XG4gICAqL1xuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxufVxuXG5leHBvcnQgdHlwZSBBcHBDb250ZXh0VHlwZTxSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXI+ID0ge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dD5cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbiAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgcm91dGVyOiBSXG59XG5cbmV4cG9ydCB0eXBlIEFwcEluaXRpYWxQcm9wcyA9IHtcbiAgcGFnZVByb3BzOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHNUeXBlPFxuICBSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXIsXG4gIFAgPSB7fVxuPiA9IEFwcEluaXRpYWxQcm9wcyAmIHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQsIGFueSwgUD5cbiAgcm91dGVyOiBSXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50Q29udGV4dCA9IE5leHRQYWdlQ29udGV4dCAmIHtcbiAgcmVuZGVyUGFnZTogUmVuZGVyUGFnZVxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudEluaXRpYWxQcm9wcyA9IFJlbmRlclBhZ2VSZXN1bHQgJiB7XG4gIHN0eWxlcz86IFJlYWN0LlJlYWN0RWxlbWVudFtdIHwgUmVhY3QuUmVhY3RGcmFnbWVudFxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFByb3BzID0gRG9jdW1lbnRJbml0aWFsUHJvcHMgJiB7XG4gIF9fTkVYVF9EQVRBX186IE5FWFRfREFUQVxuICBkYW5nZXJvdXNBc1BhdGg6IHN0cmluZ1xuICBidWlsZE1hbmlmZXN0OiBCdWlsZE1hbmlmZXN0XG4gIGFtcFBhdGg6IHN0cmluZ1xuICBpbkFtcE1vZGU6IGJvb2xlYW5cbiAgaHlicmlkQW1wOiBib29sZWFuXG4gIGlzRGV2ZWxvcG1lbnQ6IGJvb2xlYW5cbiAgZmlsZXM6IHN0cmluZ1tdXG4gIGR5bmFtaWNJbXBvcnRzOiBNYW5pZmVzdEl0ZW1bXVxuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBjYW5vbmljYWxCYXNlOiBzdHJpbmdcbiAgaGVhZFRhZ3M6IGFueVtdXG4gIHVuc3RhYmxlX3J1bnRpbWVKUz86IGZhbHNlXG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXF1ZXN0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmV4dEFwaVJlcXVlc3QgZXh0ZW5kcyBJbmNvbWluZ01lc3NhZ2Uge1xuICAvKipcbiAgICogT2JqZWN0IG9mIGBxdWVyeWAgdmFsdWVzIGZyb20gdXJsXG4gICAqL1xuICBxdWVyeToge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdXG4gIH1cbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgY29va2llc2AgZnJvbSBoZWFkZXJcbiAgICovXG4gIGNvb2tpZXM6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmdcbiAgfVxuXG4gIGJvZHk6IGFueVxuXG4gIGVudjogRW52XG5cbiAgcHJldmlldz86IGJvb2xlYW5cbiAgLyoqXG4gICAqIFByZXZpZXcgZGF0YSBzZXQgb24gdGhlIHJlcXVlc3QsIGlmIGFueVxuICAgKiAqL1xuICBwcmV2aWV3RGF0YT86IGFueVxufVxuXG4vKipcbiAqIFNlbmQgYm9keSBvZiByZXNwb25zZVxuICovXG50eXBlIFNlbmQ8VD4gPSAoYm9keTogVCkgPT4gdm9pZFxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVzcG9uc2VcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaVJlc3BvbnNlPFQgPSBhbnk+ID0gU2VydmVyUmVzcG9uc2UgJiB7XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGFueWAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAgc2VuZDogU2VuZDxUPlxuICAvKipcbiAgICogU2VuZCBkYXRhIGBqc29uYCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBqc29uOiBTZW5kPFQ+XG4gIHN0YXR1czogKHN0YXR1c0NvZGU6IG51bWJlcikgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIHJlZGlyZWN0KHVybDogc3RyaW5nKTogTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIHJlZGlyZWN0KHN0YXR1czogbnVtYmVyLCB1cmw6IHN0cmluZyk6IE5leHRBcGlSZXNwb25zZTxUPlxuXG4gIC8qKlxuICAgKiBTZXQgcHJldmlldyBkYXRhIGZvciBOZXh0LmpzJyBwcmVyZW5kZXIgbW9kZVxuICAgKi9cbiAgc2V0UHJldmlld0RhdGE6IChcbiAgICBkYXRhOiBvYmplY3QgfCBzdHJpbmcsXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIC8qKlxuICAgICAgICogU3BlY2lmaWVzIHRoZSBudW1iZXIgKGluIHNlY29uZHMpIGZvciB0aGUgcHJldmlldyBzZXNzaW9uIHRvIGxhc3QgZm9yLlxuICAgICAgICogVGhlIGdpdmVuIG51bWJlciB3aWxsIGJlIGNvbnZlcnRlZCB0byBhbiBpbnRlZ2VyIGJ5IHJvdW5kaW5nIGRvd24uXG4gICAgICAgKiBCeSBkZWZhdWx0LCBubyBtYXhpbXVtIGFnZSBpcyBzZXQgYW5kIHRoZSBwcmV2aWV3IHNlc3Npb24gZmluaXNoZXNcbiAgICAgICAqIHdoZW4gdGhlIGNsaWVudCBzaHV0cyBkb3duIChicm93c2VyIGlzIGNsb3NlZCkuXG4gICAgICAgKi9cbiAgICAgIG1heEFnZT86IG51bWJlclxuICAgIH1cbiAgKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgY2xlYXJQcmV2aWV3RGF0YTogKCkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSBoYW5kbGVyXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlIYW5kbGVyPFQgPSBhbnk+ID0gKFxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxuICByZXM6IE5leHRBcGlSZXNwb25zZTxUPlxuKSA9PiB2b2lkIHwgUHJvbWlzZTx2b2lkPlxuXG4vKipcbiAqIFV0aWxzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBleGVjT25jZTxUIGV4dGVuZHMgKC4uLmFyZ3M6IGFueVtdKSA9PiBSZXR1cm5UeXBlPFQ+PihcbiAgZm46IFRcbik6IFQge1xuICBsZXQgdXNlZCA9IGZhbHNlXG4gIGxldCByZXN1bHQ6IFJldHVyblR5cGU8VD5cblxuICByZXR1cm4gKCguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGlmICghdXNlZCkge1xuICAgICAgdXNlZCA9IHRydWVcbiAgICAgIHJlc3VsdCA9IGZuKC4uLmFyZ3MpXG4gICAgfVxuICAgIHJldHVybiByZXN1bHRcbiAgfSkgYXMgVFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TG9jYXRpb25PcmlnaW4oKSB7XG4gIGNvbnN0IHsgcHJvdG9jb2wsIGhvc3RuYW1lLCBwb3J0IH0gPSB3aW5kb3cubG9jYXRpb25cbiAgcmV0dXJuIGAke3Byb3RvY29sfS8vJHtob3N0bmFtZX0ke3BvcnQgPyAnOicgKyBwb3J0IDogJyd9YFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VVJMKCkge1xuICBjb25zdCB7IGhyZWYgfSA9IHdpbmRvdy5sb2NhdGlvblxuICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gIHJldHVybiBocmVmLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGlzcGxheU5hbWU8UD4oQ29tcG9uZW50OiBDb21wb25lbnRUeXBlPFA+KSB7XG4gIHJldHVybiB0eXBlb2YgQ29tcG9uZW50ID09PSAnc3RyaW5nJ1xuICAgID8gQ29tcG9uZW50XG4gICAgOiBDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1Jlc1NlbnQocmVzOiBTZXJ2ZXJSZXNwb25zZSkge1xuICByZXR1cm4gcmVzLmZpbmlzaGVkIHx8IHJlcy5oZWFkZXJzU2VudFxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZEdldEluaXRpYWxQcm9wczxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4oQXBwOiBOZXh0Q29tcG9uZW50VHlwZTxDLCBJUCwgUD4sIGN0eDogQyk6IFByb21pc2U8SVA+IHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoQXBwLnByb3RvdHlwZT8uZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgQXBwXG4gICAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIGlzIGRlZmluZWQgYXMgYW4gaW5zdGFuY2UgbWV0aG9kIC0gdmlzaXQgaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvZ2V0LWluaXRpYWwtcHJvcHMtYXMtYW4taW5zdGFuY2UtbWV0aG9kIGZvciBtb3JlIGluZm9ybWF0aW9uLmBcbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICAgIH1cbiAgfVxuICAvLyB3aGVuIGNhbGxlZCBmcm9tIF9hcHAgYGN0eGAgaXMgbmVzdGVkIGluIGBjdHhgXG4gIGNvbnN0IHJlcyA9IGN0eC5yZXMgfHwgKGN0eC5jdHggJiYgY3R4LmN0eC5yZXMpXG5cbiAgaWYgKCFBcHAuZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgaWYgKGN0eC5jdHggJiYgY3R4LkNvbXBvbmVudCkge1xuICAgICAgLy8gQHRzLWlnbm9yZSBwYWdlUHJvcHMgZGVmYXVsdFxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcGFnZVByb3BzOiBhd2FpdCBsb2FkR2V0SW5pdGlhbFByb3BzKGN0eC5Db21wb25lbnQsIGN0eC5jdHgpLFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge30gYXMgSVBcbiAgfVxuXG4gIGNvbnN0IHByb3BzID0gYXdhaXQgQXBwLmdldEluaXRpYWxQcm9wcyhjdHgpXG5cbiAgaWYgKHJlcyAmJiBpc1Jlc1NlbnQocmVzKSkge1xuICAgIHJldHVybiBwcm9wc1xuICB9XG5cbiAgaWYgKCFwcm9wcykge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgQXBwXG4gICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBzaG91bGQgcmVzb2x2ZSB0byBhbiBvYmplY3QuIEJ1dCBmb3VuZCBcIiR7cHJvcHN9XCIgaW5zdGVhZC5gXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChPYmplY3Qua2V5cyhwcm9wcykubGVuZ3RoID09PSAwICYmICFjdHguY3R4KSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgIGAke2dldERpc3BsYXlOYW1lKFxuICAgICAgICAgIEFwcFxuICAgICAgICApfSByZXR1cm5lZCBhbiBlbXB0eSBvYmplY3QgZnJvbSBcXGBnZXRJbml0aWFsUHJvcHNcXGAuIFRoaXMgZGUtb3B0aW1pemVzIGFuZCBwcmV2ZW50cyBhdXRvbWF0aWMgc3RhdGljIG9wdGltaXphdGlvbi4gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvZW1wdHktb2JqZWN0LWdldEluaXRpYWxQcm9wc2BcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcHJvcHNcbn1cblxuZXhwb3J0IGNvbnN0IHVybE9iamVjdEtleXMgPSBbXG4gICdhdXRoJyxcbiAgJ2hhc2gnLFxuICAnaG9zdCcsXG4gICdob3N0bmFtZScsXG4gICdocmVmJyxcbiAgJ3BhdGgnLFxuICAncGF0aG5hbWUnLFxuICAncG9ydCcsXG4gICdwcm90b2NvbCcsXG4gICdxdWVyeScsXG4gICdzZWFyY2gnLFxuICAnc2xhc2hlcycsXG5dXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRXaXRoVmFsaWRhdGlvbih1cmw6IFVybE9iamVjdCk6IHN0cmluZyB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIGlmICh1cmwgIT09IG51bGwgJiYgdHlwZW9mIHVybCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIE9iamVjdC5rZXlzKHVybCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGlmICh1cmxPYmplY3RLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICBgVW5rbm93biBrZXkgcGFzc2VkIHZpYSB1cmxPYmplY3QgaW50byB1cmwuZm9ybWF0OiAke2tleX1gXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmb3JtYXRVcmwodXJsKVxufVxuXG5leHBvcnQgY29uc3QgU1AgPSB0eXBlb2YgcGVyZm9ybWFuY2UgIT09ICd1bmRlZmluZWQnXG5leHBvcnQgY29uc3QgU1QgPVxuICBTUCAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWFyayA9PT0gJ2Z1bmN0aW9uJyAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWVhc3VyZSA9PT0gJ2Z1bmN0aW9uJ1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2xpbmsnKVxuIiwiLyoqIEBsaWNlbnNlIFJlYWN0IHYxNi4xMy4xXG4gKiByZWFjdC1pcy5kZXZlbG9wbWVudC5qc1xuICpcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgKGZ1bmN0aW9uKCkge1xuJ3VzZSBzdHJpY3QnO1xuXG4vLyBUaGUgU3ltYm9sIHVzZWQgdG8gdGFnIHRoZSBSZWFjdEVsZW1lbnQtbGlrZSB0eXBlcy4gSWYgdGhlcmUgaXMgbm8gbmF0aXZlIFN5bWJvbFxuLy8gbm9yIHBvbHlmaWxsLCB0aGVuIGEgcGxhaW4gbnVtYmVyIGlzIHVzZWQgZm9yIHBlcmZvcm1hbmNlLlxudmFyIGhhc1N5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLmZvcjtcbnZhciBSRUFDVF9FTEVNRU5UX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5lbGVtZW50JykgOiAweGVhYzc7XG52YXIgUkVBQ1RfUE9SVEFMX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5wb3J0YWwnKSA6IDB4ZWFjYTtcbnZhciBSRUFDVF9GUkFHTUVOVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZnJhZ21lbnQnKSA6IDB4ZWFjYjtcbnZhciBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc3RyaWN0X21vZGUnKSA6IDB4ZWFjYztcbnZhciBSRUFDVF9QUk9GSUxFUl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucHJvZmlsZXInKSA6IDB4ZWFkMjtcbnZhciBSRUFDVF9QUk9WSURFUl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucHJvdmlkZXInKSA6IDB4ZWFjZDtcbnZhciBSRUFDVF9DT05URVhUX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5jb250ZXh0JykgOiAweGVhY2U7IC8vIFRPRE86IFdlIGRvbid0IHVzZSBBc3luY01vZGUgb3IgQ29uY3VycmVudE1vZGUgYW55bW9yZS4gVGhleSB3ZXJlIHRlbXBvcmFyeVxuLy8gKHVuc3RhYmxlKSBBUElzIHRoYXQgaGF2ZSBiZWVuIHJlbW92ZWQuIENhbiB3ZSByZW1vdmUgdGhlIHN5bWJvbHM/XG5cbnZhciBSRUFDVF9BU1lOQ19NT0RFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5hc3luY19tb2RlJykgOiAweGVhY2Y7XG52YXIgUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5jb25jdXJyZW50X21vZGUnKSA6IDB4ZWFjZjtcbnZhciBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZm9yd2FyZF9yZWYnKSA6IDB4ZWFkMDtcbnZhciBSRUFDVF9TVVNQRU5TRV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc3VzcGVuc2UnKSA6IDB4ZWFkMTtcbnZhciBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5zdXNwZW5zZV9saXN0JykgOiAweGVhZDg7XG52YXIgUkVBQ1RfTUVNT19UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QubWVtbycpIDogMHhlYWQzO1xudmFyIFJFQUNUX0xBWllfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmxhenknKSA6IDB4ZWFkNDtcbnZhciBSRUFDVF9CTE9DS19UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuYmxvY2snKSA6IDB4ZWFkOTtcbnZhciBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZnVuZGFtZW50YWwnKSA6IDB4ZWFkNTtcbnZhciBSRUFDVF9SRVNQT05ERVJfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnJlc3BvbmRlcicpIDogMHhlYWQ2O1xudmFyIFJFQUNUX1NDT1BFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5zY29wZScpIDogMHhlYWQ3O1xuXG5mdW5jdGlvbiBpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSkge1xuICByZXR1cm4gdHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nIHx8IC8vIE5vdGU6IGl0cyB0eXBlb2YgbWlnaHQgYmUgb3RoZXIgdGhhbiAnc3ltYm9sJyBvciAnbnVtYmVyJyBpZiBpdCdzIGEgcG9seWZpbGwuXG4gIHR5cGUgPT09IFJFQUNUX0ZSQUdNRU5UX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfUFJPRklMRVJfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFIHx8IHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiB0eXBlICE9PSBudWxsICYmICh0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9MQVpZX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1BST1ZJREVSX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9SRVNQT05ERVJfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9TQ09QRV9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0JMT0NLX1RZUEUpO1xufVxuXG5mdW5jdGlvbiB0eXBlT2Yob2JqZWN0KSB7XG4gIGlmICh0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJiBvYmplY3QgIT09IG51bGwpIHtcbiAgICB2YXIgJCR0eXBlb2YgPSBvYmplY3QuJCR0eXBlb2Y7XG5cbiAgICBzd2l0Y2ggKCQkdHlwZW9mKSB7XG4gICAgICBjYXNlIFJFQUNUX0VMRU1FTlRfVFlQRTpcbiAgICAgICAgdmFyIHR5cGUgPSBvYmplY3QudHlwZTtcblxuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICBjYXNlIFJFQUNUX0FTWU5DX01PREVfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfRlJBR01FTlRfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1BST0ZJTEVSX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfVFlQRTpcbiAgICAgICAgICAgIHJldHVybiB0eXBlO1xuXG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHZhciAkJHR5cGVvZlR5cGUgPSB0eXBlICYmIHR5cGUuJCR0eXBlb2Y7XG5cbiAgICAgICAgICAgIHN3aXRjaCAoJCR0eXBlb2ZUeXBlKSB7XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfQ09OVEVYVF9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfTEFaWV9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX01FTU9fVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9QUk9WSURFUl9UWVBFOlxuICAgICAgICAgICAgICAgIHJldHVybiAkJHR5cGVvZlR5cGU7XG5cbiAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gJCR0eXBlb2Y7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICBjYXNlIFJFQUNUX1BPUlRBTF9UWVBFOlxuICAgICAgICByZXR1cm4gJCR0eXBlb2Y7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn0gLy8gQXN5bmNNb2RlIGlzIGRlcHJlY2F0ZWQgYWxvbmcgd2l0aCBpc0FzeW5jTW9kZVxuXG52YXIgQXN5bmNNb2RlID0gUkVBQ1RfQVNZTkNfTU9ERV9UWVBFO1xudmFyIENvbmN1cnJlbnRNb2RlID0gUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEU7XG52YXIgQ29udGV4dENvbnN1bWVyID0gUkVBQ1RfQ09OVEVYVF9UWVBFO1xudmFyIENvbnRleHRQcm92aWRlciA9IFJFQUNUX1BST1ZJREVSX1RZUEU7XG52YXIgRWxlbWVudCA9IFJFQUNUX0VMRU1FTlRfVFlQRTtcbnZhciBGb3J3YXJkUmVmID0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTtcbnZhciBGcmFnbWVudCA9IFJFQUNUX0ZSQUdNRU5UX1RZUEU7XG52YXIgTGF6eSA9IFJFQUNUX0xBWllfVFlQRTtcbnZhciBNZW1vID0gUkVBQ1RfTUVNT19UWVBFO1xudmFyIFBvcnRhbCA9IFJFQUNUX1BPUlRBTF9UWVBFO1xudmFyIFByb2ZpbGVyID0gUkVBQ1RfUFJPRklMRVJfVFlQRTtcbnZhciBTdHJpY3RNb2RlID0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRTtcbnZhciBTdXNwZW5zZSA9IFJFQUNUX1NVU1BFTlNFX1RZUEU7XG52YXIgaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUgPSBmYWxzZTsgLy8gQXN5bmNNb2RlIHNob3VsZCBiZSBkZXByZWNhdGVkXG5cbmZ1bmN0aW9uIGlzQXN5bmNNb2RlKG9iamVjdCkge1xuICB7XG4gICAgaWYgKCFoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0FzeW5jTW9kZSkge1xuICAgICAgaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUgPSB0cnVlOyAvLyBVc2luZyBjb25zb2xlWyd3YXJuJ10gdG8gZXZhZGUgQmFiZWwgYW5kIEVTTGludFxuXG4gICAgICBjb25zb2xlWyd3YXJuJ10oJ1RoZSBSZWFjdElzLmlzQXN5bmNNb2RlKCkgYWxpYXMgaGFzIGJlZW4gZGVwcmVjYXRlZCwgJyArICdhbmQgd2lsbCBiZSByZW1vdmVkIGluIFJlYWN0IDE3Ky4gVXBkYXRlIHlvdXIgY29kZSB0byB1c2UgJyArICdSZWFjdElzLmlzQ29uY3VycmVudE1vZGUoKSBpbnN0ZWFkLiBJdCBoYXMgdGhlIGV4YWN0IHNhbWUgQVBJLicpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBpc0NvbmN1cnJlbnRNb2RlKG9iamVjdCkgfHwgdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0FTWU5DX01PREVfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzQ29uY3VycmVudE1vZGUob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEU7XG59XG5mdW5jdGlvbiBpc0NvbnRleHRDb25zdW1lcihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9DT05URVhUX1RZUEU7XG59XG5mdW5jdGlvbiBpc0NvbnRleHRQcm92aWRlcihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9QUk9WSURFUl9UWVBFO1xufVxuZnVuY3Rpb24gaXNFbGVtZW50KG9iamVjdCkge1xuICByZXR1cm4gdHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiYgb2JqZWN0ICE9PSBudWxsICYmIG9iamVjdC4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNGb3J3YXJkUmVmKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU7XG59XG5mdW5jdGlvbiBpc0ZyYWdtZW50KG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0ZSQUdNRU5UX1RZUEU7XG59XG5mdW5jdGlvbiBpc0xhenkob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfTEFaWV9UWVBFO1xufVxuZnVuY3Rpb24gaXNNZW1vKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX01FTU9fVFlQRTtcbn1cbmZ1bmN0aW9uIGlzUG9ydGFsKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1BPUlRBTF9UWVBFO1xufVxuZnVuY3Rpb24gaXNQcm9maWxlcihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9QUk9GSUxFUl9UWVBFO1xufVxuZnVuY3Rpb24gaXNTdHJpY3RNb2RlKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1NUUklDVF9NT0RFX1RZUEU7XG59XG5mdW5jdGlvbiBpc1N1c3BlbnNlKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1NVU1BFTlNFX1RZUEU7XG59XG5cbmV4cG9ydHMuQXN5bmNNb2RlID0gQXN5bmNNb2RlO1xuZXhwb3J0cy5Db25jdXJyZW50TW9kZSA9IENvbmN1cnJlbnRNb2RlO1xuZXhwb3J0cy5Db250ZXh0Q29uc3VtZXIgPSBDb250ZXh0Q29uc3VtZXI7XG5leHBvcnRzLkNvbnRleHRQcm92aWRlciA9IENvbnRleHRQcm92aWRlcjtcbmV4cG9ydHMuRWxlbWVudCA9IEVsZW1lbnQ7XG5leHBvcnRzLkZvcndhcmRSZWYgPSBGb3J3YXJkUmVmO1xuZXhwb3J0cy5GcmFnbWVudCA9IEZyYWdtZW50O1xuZXhwb3J0cy5MYXp5ID0gTGF6eTtcbmV4cG9ydHMuTWVtbyA9IE1lbW87XG5leHBvcnRzLlBvcnRhbCA9IFBvcnRhbDtcbmV4cG9ydHMuUHJvZmlsZXIgPSBQcm9maWxlcjtcbmV4cG9ydHMuU3RyaWN0TW9kZSA9IFN0cmljdE1vZGU7XG5leHBvcnRzLlN1c3BlbnNlID0gU3VzcGVuc2U7XG5leHBvcnRzLmlzQXN5bmNNb2RlID0gaXNBc3luY01vZGU7XG5leHBvcnRzLmlzQ29uY3VycmVudE1vZGUgPSBpc0NvbmN1cnJlbnRNb2RlO1xuZXhwb3J0cy5pc0NvbnRleHRDb25zdW1lciA9IGlzQ29udGV4dENvbnN1bWVyO1xuZXhwb3J0cy5pc0NvbnRleHRQcm92aWRlciA9IGlzQ29udGV4dFByb3ZpZGVyO1xuZXhwb3J0cy5pc0VsZW1lbnQgPSBpc0VsZW1lbnQ7XG5leHBvcnRzLmlzRm9yd2FyZFJlZiA9IGlzRm9yd2FyZFJlZjtcbmV4cG9ydHMuaXNGcmFnbWVudCA9IGlzRnJhZ21lbnQ7XG5leHBvcnRzLmlzTGF6eSA9IGlzTGF6eTtcbmV4cG9ydHMuaXNNZW1vID0gaXNNZW1vO1xuZXhwb3J0cy5pc1BvcnRhbCA9IGlzUG9ydGFsO1xuZXhwb3J0cy5pc1Byb2ZpbGVyID0gaXNQcm9maWxlcjtcbmV4cG9ydHMuaXNTdHJpY3RNb2RlID0gaXNTdHJpY3RNb2RlO1xuZXhwb3J0cy5pc1N1c3BlbnNlID0gaXNTdXNwZW5zZTtcbmV4cG9ydHMuaXNWYWxpZEVsZW1lbnRUeXBlID0gaXNWYWxpZEVsZW1lbnRUeXBlO1xuZXhwb3J0cy50eXBlT2YgPSB0eXBlT2Y7XG4gIH0pKCk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtaXMucHJvZHVjdGlvbi5taW4uanMnKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtaXMuZGV2ZWxvcG1lbnQuanMnKTtcbn1cbiIsImltcG9ydCBDb250ZXh0UHJvdmlkZXIgZnJvbSAnLi4vY29udGV4dC9Db250ZXh0UHJvdmlkZXInO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBjb29raWUgZnJvbSAncmVhY3QtY29va2llcyc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IGVtcHR5IH0gZnJvbSAnYXBvbGxvLWJvb3N0JztcclxuaW1wb3J0IHsgQW5pbWF0ZVByZXNlbmNlIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XHJcblxyXG5jb25zdCBBcHAgPSAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcywgcm91dGVyIH0pID0+IHtcclxuXHJcbiAgY29uc3QgcG9ydCA9IHBhcnNlSW50KHByb2Nlc3MuZW52LlBPUlQsIDEwKSB8fCA1MDAwO1xyXG5cclxuICBsZXQgdG9rZW4gPSBudWxsO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy9HZXQgYWxsIHVzZXJzIC0gZm9yIHRoZSBzZWFyY2hiYXIgdXNlciBzZWFyY2hcclxuICAgIGdldEFsbFVzZXJzKCk7XHJcbiAgICBcclxuICAgIC8vIENoZWNrIGZvciB0b2tlbiBpbiBsb2NhbCBzdG9yYWdlIG9uY2UgdGhlIGNvbXBvbmVudCBtb3VudHMgLSBpLmUuIGNvZGUgaXMgbm93IHJ1biBpbiB0aGUgYnJvd3NlciAoaW5zdGVhZCBvZiBvbiB0aGUgc2VydmVyKVxyXG4gICAgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKTtcclxuICAgIGlmICh0b2tlbikge1xyXG4gICAgICBzZXRBdXRoU3RhdGUoey4uLmF1dGhTdGF0ZSwgYXV0aGVudGljYXRlZDogdHJ1ZSwgdG9rZW46IHRva2VufSk7XHJcbiAgICAgIFxyXG4gICAgICAvLyBHZXQgdGhlIGxvZ2dlZCBpbiB1c2VyJ3MgZGF0YVxyXG4gICAgICBnZXRVc2VyRGF0YUJ5VG9rZW4odG9rZW4pXHJcblxyXG4gICAgfVxyXG4gIH0sIFtdKVxyXG5cclxuICBjb25zdCBlbXB0eVVzZXIgPSB7XHJcbiAgICBpZDogJycsXHJcbiAgICBmaXJzdE5hbWU6ICcnLFxyXG4gICAgbGFzdE5hbWU6ICcnLFxyXG4gICAgam9iVGl0bGU6ICcnLFxyXG4gICAgbG9jYXRpb246ICcnLFxyXG4gICAgbGFuZ3VhZ2VzOiBbXSxcclxuICAgIGFib3V0OiAnJyxcclxuICAgIG93bmVkVmlkZW9zOiBbXSxcclxuICAgIHVzZXJDb21tZW50czogW10sXHJcbiAgICBwbGF5bGlzdENvbW1lbnRzOiBbXSxcclxuICAgIGZhdm91cml0ZXM6IFtdLFxyXG4gICAgcHJvZmlsZVBob3RvRmlsZW5hbWU6ICcnXHJcbiAgfVxyXG5cclxuXHJcbiAgLy8gU3RhdGVcclxuICBjb25zdCBbYXV0aFN0YXRlLCBzZXRBdXRoU3RhdGVdID0gdXNlU3RhdGUoe1xyXG4gICAgYXV0aGVudGljYXRlZDogZmFsc2UsXHJcbiAgICB1c2VySWQ6IG51bGwsXHJcbiAgICB0b2tlbjogbnVsbCxcclxuICAgIHRva2VuRXhwaXJhdGlvbjogbnVsbFxyXG4gIH0pO1xyXG5cclxuICAvLyBMb2dnZWQgaW4gVXNlcidzIERhdGFcclxuICBjb25zdCBbY3VycmVudFVzZXIsIHNldEN1cnJlbnRVc2VyXSA9IHVzZVN0YXRlKGVtcHR5VXNlcik7XHJcblxyXG4gIC8vIEN1cnJlbnQgcHJvZmlsZXMgdXNlciBkYXRhXHJcbiAgY29uc3QgW3Byb2ZpbGVVc2VyLCBzZXRQcm9maWxlVXNlcl0gPSB1c2VTdGF0ZShlbXB0eVVzZXIpO1xyXG5cclxuICAvLyBjb25zdCBbcHJvZmlsZVBob3RvLCBzZXRQcm9maWxlUGhvdG9dID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgXHJcbiAgY29uc3QgW3ZpZGVvU3RhdGUsIHNldFZpZGVvU3RhdGVdID0gdXNlU3RhdGUoe1xyXG4gICAgdGl0bGU6ICcnLFxyXG4gICAgLy8gZGVzY3JpcHRpb246JycsXHJcbiAgICB2aWRlb0lkOiAnJ1xyXG4gIH0pO1xyXG5cclxuICBjb25zdCBbY29tbWVudFN0YXRlLCBzZXRDb21tZW50U3RhdGVdID0gdXNlU3RhdGUoe1xyXG4gICAgY29tbWVudDogbnVsbFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBbYWxsVXNlcnMsIHNldEFsbFVzZXJzXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgY29uc3QgWyBhdXRvcGxheSwgc2V0QXV0b3BsYXkgXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcblxyXG5cclxuICAvLyBBVVRIRU5USUNBVElPTiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgXHJcbiAgLy8gTG9naW4gYSB1c2VyXHJcbiAgY29uc3QgbG9naW4gPSBhc3luYyAoZW1haWwsIHBhc3N3b3JkKSA9PiB7XHJcblxyXG4gICAgLy8gTWFrZSBhIEFQSSBxdWVyeSB0byBnZXQgYSB0b2tlblxyXG4gICAgY29uc3QgcmVxdWVzdEJvZHkgPSB7XHJcbiAgICAgIHF1ZXJ5OiBgXHJcbiAgICAgICAgcXVlcnkge1xyXG4gICAgICAgICAgbG9naW4oZW1haWw6IFwiJHtlbWFpbH1cIiwgcGFzc3dvcmQ6IFwiJHtwYXNzd29yZH1cIikge1xyXG4gICAgICAgICAgICB1c2VySWQsXHJcbiAgICAgICAgICAgIHRva2VuXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICBgXHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6JHtwb3J0fS9ncmFwaHFsYCwge1xyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHJlcXVlc3RCb2R5KSxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG5cclxuICAgICAgaWYgKHJlcy5zdGF0dXMgIT09IDIwMCAmJiByZXMuc3RhdHVzICE9PSAyMDEpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0xvZ2luIGZhaWxlZCEnKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gLmpzb24oKSBpcyBhIG1ldGhvZCBmcm9tIGZldGNoIEFQSSB0aGF0IGF1dG8gZXh0cmFjdHMgJiBwYXJzZXMgdGhlIHJlcyBib2R5XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG5cclxuICAgICAgLy8gQ2hlY2sgZm9yIGVycm9ycyBhcnJheSBpbiByZXNwb25zZVxyXG4gICAgICBpZiAoZGF0YS5lcnJvcnMpIHtcclxuICAgICAgICByZXR1cm4geyBlcnJvcjogZGF0YS5lcnJvcnMgfTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gU2V0IHN0YXRlIHdpdGggcmV0dXJuZWQgYXV0aCBkYXRhXHJcbiAgICAgIGNvbnN0IHsgdXNlcklkLCB0b2tlbiB9ID0gZGF0YS5kYXRhLmxvZ2luO1xyXG5cclxuICAgICAgc2V0QXV0aFN0YXRlKHsgLi4uYXV0aFN0YXRlLCBhdXRoZW50aWNhdGVkOiB0cnVlLCB1c2VySWQsIHRva2VuIH0pO1xyXG5cclxuICAgICAgLy8gU2F2ZSB0b2tlbiB0byBsb2NhbCBzdG9yYWdlXHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2tlbicsIHRva2VuKVxyXG5cclxuICAgICAgLy8gLy8gU2V0IHRva2VuIGFzIGEgY29va2llXHJcbiAgICAgIC8vIGNvb2tpZS5zYXZlKFxyXG4gICAgICAvLyAgICd1c2VySWQnLFxyXG4gICAgICAvLyAgIHVzZXJJZCxcclxuICAgICAgLy8gICB7XHJcbiAgICAgIC8vICAgICBwYXRoOiAnLycsXHJcbiAgICAgIC8vICAgICAvLyBleHBpcmVzLFxyXG4gICAgICAvLyAgICAgbWF4QWdlOiAxMDAwLFxyXG4gICAgICAvLyAgICAgZG9tYWluOiAnaHR0cDovL2xvY2FsaG9zdDozMDAwJyxcclxuICAgICAgLy8gICAgIHNlY3VyZTogZmFsc2UsXHJcbiAgICAgIC8vICAgICBodHRwT25seTogZmFsc2VcclxuICAgICAgLy8gICB9XHJcbiAgICAgIC8vIClcclxuXHJcbiAgICAgIC8vIEZldGNoIHRoZSB1c2VyIGRhdGEgYW5kIHNldCBjdXJyZW50VXNlciBzdGF0ZVxyXG4gICAgICBhd2FpdCBnZXRVc2VyRGF0YUJ5VG9rZW4odG9rZW4pO1xyXG5cclxuICAgICAgLy8gUmVkaXJlY3QgdG8gdXNlcidzIHByb2ZpbGUgcGFnZVxyXG4gICAgICBSb3V0ZXIucHVzaChgL3Byb2ZpbGUvJHt1c2VySWR9YCk7XHJcblxyXG4gICAgICAvLyBSZXR1cm4gaXRlbSBvYmplY3QgaW5kaWNhdGluZyBubyBlcnJvcnNcclxuICAgICAgcmV0dXJuIHt9O1xyXG5cclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG4gIC8vIFJlZ2lzdGVyIGEgdXNlclxyXG4gIGNvbnN0IHJlZ2lzdGVyID0gYXN5bmMgKGZpcnN0TmFtZSwgbGFzdE5hbWUsIGVtYWlsLCBwYXNzd29yZCkgPT4ge1xyXG5cclxuICAgIC8vIE1ha2UgYSBBUEkgcXVlcnkgdG8gZ2V0IGEgdG9rZW5cclxuICAgIGNvbnN0IHJlcXVlc3RCb2R5ID0ge1xyXG4gICAgICBxdWVyeTogYFxyXG4gICAgICBtdXRhdGlvbiB7XHJcbiAgICAgICAgY3JlYXRlVXNlcih1c2VySW5wdXQ6IHtmaXJzdE5hbWU6IFwiJHtmaXJzdE5hbWV9XCIsIGxhc3ROYW1lOiBcIiR7bGFzdE5hbWV9XCIsIGVtYWlsOiBcIiR7ZW1haWx9XCIsIHBhc3N3b3JkOiBcIiR7cGFzc3dvcmR9XCJ9KSB7XHJcbiAgICAgICAgICBlbWFpbFxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgYFxyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OiR7cG9ydH0vZ3JhcGhxbGAsIHtcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShyZXF1ZXN0Qm9keSksXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuXHJcbiAgICAgIGlmIChyZXMuc3RhdHVzICE9PSAyMDAgJiYgcmVzLnN0YXR1cyAhPT0gMjAxKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdBY2NvdW50IGNyZWF0aW9uIGZhaWxlZCEnKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gLmpzb24oKSBpcyBhIG1ldGhvZCBmcm9tIGZldGNoIEFQSSB0aGF0IGF1dG8gZXh0cmFjdHMgJiBwYXJzZXMgdGhlIHJlcyBib2R5XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG5cclxuICAgICAgLy8gQ2hlY2sgZm9yIGVycm9ycyBhcnJheSBpbiByZXNwb25zZVxyXG4gICAgICBpZiAoZGF0YS5lcnJvcnMpIHtcclxuICAgICAgICByZXR1cm4ge25ld1VzZXJFbWFpbDogJycsIGVycm9yOiBkYXRhLmVycm9yc31cclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgbmV3VXNlckVtYWlsID0gKGRhdGEuZGF0YS5jcmVhdGVVc2VyLmVtYWlsKTtcclxuICAgICAgcmV0dXJuIHsgbmV3VXNlckVtYWlsOiBuZXdVc2VyRW1haWwsIGVycm9yOiBbXX07XHJcblxyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgLy8gTG9nb3V0IGEgdXNlclxyXG4gIGNvbnN0IGxvZ291dCA9ICgpID0+IHtcclxuICAgIC8vIFJlZGlyZWN0IHRvIGhvbWUgcGFnZVxyXG4gICAgUm91dGVyLnB1c2goJy8nKTtcclxuICAgIC8vIENsZWFyIHRoZSBhdXRoU3RhdGVcclxuICAgIHNldEF1dGhTdGF0ZSh7XHJcbiAgICAgIGF1dGhEYXRhOiBudWxsXHJcbiAgICB9KVxyXG4gICAgLy8gUmVtb3ZlIHRva2VuIGZyb20gbG9jYWxTdG9yYWdlXHJcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndG9rZW4nKTtcclxuICAgIC8vIENsZWFyIHRoZSBjdXJyZW50IHVzZXJcclxuICAgIHNldEN1cnJlbnRVc2VyKGVtcHR5VXNlcik7XHJcblxyXG4gICAgc2V0UHJvZmlsZVVzZXIoZW1wdHlVc2VyKTtcclxuICAgIFxyXG4gICAgLy8gUmVkaXJlY3QgdG8gaG9tZSBwYWdlXHJcbiAgICAvLyBSb3V0ZXIucHVzaCgnLycpO1xyXG4gICAgLy8gY29uc29sZS5sb2coJ2N1cnJlbnRVc2VyJywgY3VycmVudFVzZXIpO1xyXG4gICAgLy8gY29uc29sZS5sb2coJ3Byb2ZpbGVVc2VyJywgcHJvZmlsZVVzZXIpO1xyXG4gIH1cclxuXHJcbiAgLy8gVVNFUiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gIGNvbnN0IHVwZGF0ZVVzZXIgPSBhc3luYyAoZmlyc3ROYW1lLCBsYXN0TmFtZSwgam9iVGl0bGUsIGxvY2F0aW9uLCBsYW5ndWFnZXMsIGFib3V0KSA9PiB7XHJcblxyXG4gICAgLy8gTWFrZSBhIEFQSSBxdWVyeSB0byBnZXQgYSB0b2tlblxyXG4gICAgY29uc3QgcmVxdWVzdEJvZHkgPSB7XHJcbiAgICAgIHF1ZXJ5OiBgXHJcbiAgICAgIG11dGF0aW9uIHtcclxuICAgICAgICB1cGRhdGVVc2VyKHByb2ZpbGVJbnB1dDoge2ZpcnN0TmFtZTogXCIke2ZpcnN0TmFtZX1cIiwgbGFzdE5hbWU6IFwiJHtsYXN0TmFtZX1cIiwgam9iVGl0bGU6IFwiJHtqb2JUaXRsZX1cIiwgbG9jYXRpb246IFwiJHtsb2NhdGlvbn1cIiwgXHJcbiAgICAgICAgbGFuZ3VhZ2VzOiBbXHJcbiAgICAgICAgICBcIiR7bGFuZ3VhZ2VzWzBdfVwiLFxyXG4gICAgICAgICAgXCIke2xhbmd1YWdlc1sxXX1cIiwgXHJcbiAgICAgICAgICBcIiR7bGFuZ3VhZ2VzWzJdfVwiLCBcclxuICAgICAgICAgIFwiJHtsYW5ndWFnZXNbM119XCJcclxuICAgICAgICBdLFxyXG4gICAgICAgIGFib3V0OiBcIiR7YWJvdXR9XCJ9KSB7XHJcbiAgICAgICAgICBmaXJzdE5hbWUsXHJcbiAgICAgICAgICBsYXN0TmFtZSxcclxuICAgICAgICAgIGpvYlRpdGxlLFxyXG4gICAgICAgICAgbG9jYXRpb24sXHJcbiAgICAgICAgICBsYW5ndWFnZXMsXHJcbiAgICAgICAgICBhYm91dFxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgYFxyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OiR7cG9ydH0vZ3JhcGhxbGAsIHtcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShyZXF1ZXN0Qm9keSksXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICdBdXRob3JpemF0aW9uJzogYEJlYXJlciAke2F1dGhTdGF0ZS50b2tlbn1gXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG5cclxuICAgICAgaWYgKHJlcy5zdGF0dXMgIT09IDIwMCAmJiByZXMuc3RhdHVzICE9PSAyMDEpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VzZXIgdXBkYXRlIGZhaWxlZCEnKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gLmpzb24oKSBpcyBhIG1ldGhvZCBmcm9tIGZldGNoIEFQSSB0aGF0IGF1dG8gZXh0cmFjdHMgJiBwYXJzZXMgdGhlIHJlcyBib2R5XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG5cclxuICAgICAgLy8gQ2hlY2sgZm9yIGVycm9ycyBhcnJheSBpbiByZXNwb25zZVxyXG4gICAgICBpZiAoZGF0YS5lcnJvcnMpIHtcclxuICAgICAgICBkYXRhLmVycm9ycy5tYXAoZXJyb3IgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyb3IubWVzc2FnZSlcclxuICAgICAgICB9KVxyXG4gICAgICAgIHJldHVyblxyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBSZWZyZXNoIHRoZSBwcm9maWxlIHdpdGggdGhlIG5ldyB1c2VyIGRhdGEgLSB0byB1cGRhdGUgdGhlIHByb2ZpbGVJbmZvIHNlY3Rpb25cclxuICAgICAgZmV0Y2hQcm9maWxlVXNlcihwcm9maWxlVXNlci5pZCwgZmFsc2UpXHJcblxyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgXHJcblxyXG4gIFxyXG4gIC8vIERBVEEgRkVUQ0hJTkcgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cclxuICBjb25zdCBnZXRBbGxVc2VycyA9IGFzeW5jICgpID0+IHtcclxuXHJcbiAgICBjb25zdCByZXF1ZXN0Qm9keSA9IHtcclxuICAgICAgcXVlcnk6IGBcclxuICAgICAgICBxdWVyeSB7XHJcbiAgICAgICAgICB1c2VycyB7XHJcbiAgICAgICAgICAgIF9pZCxcclxuICAgICAgICAgICAgZmlyc3ROYW1lLFxyXG4gICAgICAgICAgICBsYXN0TmFtZVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgYFxyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OiR7cG9ydH0vZ3JhcGhxbGAsIHtcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShyZXF1ZXN0Qm9keSksXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICdBdXRob3JpemF0aW9uJzogYEJlYXJlciAke2F1dGhTdGF0ZS50b2tlbn1gXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG5cclxuICAgICAgaWYgKHJlcy5zdGF0dXMgIT09IDIwMCAmJiByZXMuc3RhdHVzICE9PSAyMDEpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZhaWxlZCB0byBmZXRjaCB1c2VyIGRhdGEnKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gLmpzb24oKSBpcyBhIG1ldGhvZCBmcm9tIGZldGNoIEFQSSB0aGF0IGF1dG8gZXh0cmFjdHMgJiBwYXJzZXMgdGhlIHJlcyBib2R5XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG5cclxuICAgICAgLy8gQ2hlY2sgZm9yIGVycm9ycyBhcnJheSBpbiByZXNwb25zZVxyXG4gICAgICBpZiAoZGF0YS5lcnJvcnMpIHtcclxuICAgICAgICBkYXRhLmVycm9ycy5tYXAoZXJyb3IgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyb3IubWVzc2FnZSlcclxuICAgICAgICB9KVxyXG4gICAgICAgIHJldHVyblxyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCB1c2VycyA9IChkYXRhLmRhdGEudXNlcnMpO1xyXG5cclxuICAgICAgLy8gR2V0IGZ1bGwgbmFtZSBmb3IgdXNlIGluIHNlYXJjaGJhclxyXG4gICAgICBjb25zdCB1c2Vyc1dpdGhGdWxsTmFtZSA9IHVzZXJzLm1hcCh1c2VyID0+IHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgaWQ6IHVzZXIuX2lkLFxyXG4gICAgICAgICAgbmFtZTogdXNlci5maXJzdE5hbWUgKyAnICcgKyB1c2VyLmxhc3ROYW1lXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG5cclxuICAgICAgc2V0QWxsVXNlcnModXNlcnNXaXRoRnVsbE5hbWUpO1xyXG5cclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfVxyXG5cclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgY29uc3QgZ2V0VXNlckRhdGFCeUlkID0gYXN5bmMgKHVzZXJJZCwgcmVxdWVzdEJvZHk9e30pID0+IHtcclxuICAgIC8vIGNvbnNvbGUubG9nKCdnZXRVc2VyRGF0YSBjYWxsZWQgd2l0aCBpZDonLCB1c2VySWQpXHJcblxyXG4gICAgaWYgKHJlcXVlc3RCb2R5ID0ge30pe1xyXG4gICAgICByZXF1ZXN0Qm9keSA9IHtcclxuICAgICAgICBxdWVyeTogYFxyXG4gICAgICAgICAgcXVlcnkge1xyXG4gICAgICAgICAgICB1c2VyQnlJZChpZDpcIiR7dXNlcklkfVwiKSB7XHJcbiAgICAgICAgICAgICAgZmlyc3ROYW1lLFxyXG4gICAgICAgICAgICAgIGxhc3ROYW1lLFxyXG4gICAgICAgICAgICAgIGpvYlRpdGxlLFxyXG4gICAgICAgICAgICAgIGxvY2F0aW9uLFxyXG4gICAgICAgICAgICAgIF9pZCxcclxuICAgICAgICAgICAgICBsYW5ndWFnZXMsXHJcbiAgICAgICAgICAgICAgYWJvdXQsXHJcbiAgICAgICAgICAgICAgb3duZWRWaWRlb3Mge1xyXG4gICAgICAgICAgICAgICAgX2lkLFxyXG4gICAgICAgICAgICAgICAgdGh1bWJuYWlsVVJMLFxyXG4gICAgICAgICAgICAgICAgdGl0bGUsXHJcbiAgICAgICAgICAgICAgICB2aWRlb1VSTFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgcGxheWxpc3RDb21tZW50c3tcclxuICAgICAgICAgICAgICAgIF9pZCxcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQsXHJcbiAgICAgICAgICAgICAgICBjb21tZW50ZXIge1xyXG4gICAgICAgICAgICAgICAgICBfaWRcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBjcmVhdGVkQXQsXHJcbiAgICAgICAgICAgICAgICB1cGRhdGVkQXRcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIGZhdm91cml0ZXMsXHJcbiAgICAgICAgICAgICAgcHJvZmlsZVBob3RvRmlsZW5hbWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgLy8gY29uc29sZS5sb2cocmVxdWVzdEJvZHkpXHJcbiAgICAvLyBjb25zb2xlLmxvZyhhdXRoU3RhdGUudG9rZW4pXHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6JHtwb3J0fS9ncmFwaHFsYCwge1xyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHJlcXVlc3RCb2R5KSxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBgQmVhcmVyICR7YXV0aFN0YXRlLnRva2VufWBcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcblxyXG4gICAgICBpZiAocmVzLnN0YXR1cyAhPT0gMjAwICYmIHJlcy5zdGF0dXMgIT09IDIwMSkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignRmFpbGVkIHRvIGZldGNoIHVzZXIgZGF0YScpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyAuanNvbigpIGlzIGEgbWV0aG9kIGZyb20gZmV0Y2ggQVBJIHRoYXQgYXV0byBleHRyYWN0cyAmIHBhcnNlcyB0aGUgcmVzIGJvZHlcclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcblxyXG4gICAgICAvLyBDaGVjayBmb3IgZXJyb3JzIGFycmF5IGluIHJlc3BvbnNlXHJcbiAgICAgIGlmIChkYXRhLmVycm9ycykge1xyXG4gICAgICAgIGRhdGEuZXJyb3JzLm1hcChlcnJvciA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvci5tZXNzYWdlKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmV0dXJuXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IHVzZXIgPSAoZGF0YS5kYXRhLnVzZXJCeUlkKTtcclxuICAgICAgcmV0dXJuIHVzZXI7XHJcblxyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9XHJcblxyXG4gIH1cclxuICBcclxuICBcclxuICAvLyBHZXQgbG9nZ2VkIGluIHVzZXIncyBkYXRhIGFuZCBzZXRzIGl0IGluIHRoZSB1c2VyU3RhdGVcclxuICBjb25zdCBnZXRVc2VyRGF0YUJ5VG9rZW4gPSBhc3luYyAodG9rZW4pID0+IHtcclxuXHJcbiAgICAvLyBjb25zb2xlLmxvZygnY2FsbGVkJylcclxuXHJcbiAgICBsZXQgcmVxdWVzdEJvZHk7XHJcblxyXG4gICAgLy8gSWYgbm8gdXNlcklkIHRoZW4gcXVlcnkgdGhlIGN1cnJlbnQgbG9nZ2VkIGluIHVzZXIgYnkgdG9rZW5cclxuICAgIHJlcXVlc3RCb2R5ID0ge1xyXG4gICAgICBxdWVyeTogYFxyXG4gICAgICAgIHF1ZXJ5IHtcclxuICAgICAgICAgIHVzZXJCeVRva2Vue1xyXG4gICAgICAgICAgICBmaXJzdE5hbWUsXHJcbiAgICAgICAgICAgIGxhc3ROYW1lLFxyXG4gICAgICAgICAgICBqb2JUaXRsZSxcclxuICAgICAgICAgICAgbG9jYXRpb24sXHJcbiAgICAgICAgICAgIF9pZCxcclxuICAgICAgICAgICAgbGFuZ3VhZ2VzLFxyXG4gICAgICAgICAgICBhYm91dCxcclxuICAgICAgICAgICAgb3duZWRWaWRlb3Mge1xyXG4gICAgICAgICAgICAgIF9pZCxcclxuICAgICAgICAgICAgICB0aXRsZSxcclxuICAgICAgICAgICAgICB0aHVtYm5haWxVUkwsXHJcbiAgICAgICAgICAgICAgdmlkZW9VUkxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcGxheWxpc3RDb21tZW50c3tcclxuICAgICAgICAgICAgICBfaWQsXHJcbiAgICAgICAgICAgICAgY29udGVudCxcclxuICAgICAgICAgICAgICBjb21tZW50ZXIge1xyXG4gICAgICAgICAgICAgIF9pZCBcclxuICAgICAgICAgICAgICB9LCAgXHJcbiAgICAgICAgICAgICAgY3JlYXRlZEF0LFxyXG4gICAgICAgICAgICAgIHVwZGF0ZWRBdFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBmYXZvdXJpdGVzLFxyXG4gICAgICAgICAgICBwcm9maWxlUGhvdG9GaWxlbmFtZVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgYFxyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OiR7cG9ydH0vZ3JhcGhxbGAsIHtcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShyZXF1ZXN0Qm9keSksXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICdBdXRob3JpemF0aW9uJzogYEJlYXJlciAke3Rva2VufWBcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcblxyXG4gICAgICBpZiAocmVzLnN0YXR1cyAhPT0gMjAwICYmIHJlcy5zdGF0dXMgIT09IDIwMSkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignRmFpbGVkIHRvIGZldGNoIHVzZXIgZGF0YScpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyAuanNvbigpIGlzIGEgbWV0aG9kIGZyb20gZmV0Y2ggQVBJIHRoYXQgYXV0byBleHRyYWN0cyAmIHBhcnNlcyB0aGUgcmVzIGJvZHlcclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcblxyXG4gICAgICAvLyBDaGVjayBmb3IgZXJyb3JzIGFycmF5IGluIHJlc3BvbnNlXHJcbiAgICAgIGlmIChkYXRhLmVycm9ycykge1xyXG4gICAgICAgIGRhdGEuZXJyb3JzLm1hcChlcnJvciA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvci5tZXNzYWdlKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmV0dXJuXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IHVzZXIgPSBkYXRhLmRhdGEudXNlckJ5VG9rZW47XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKHVzZXIuZmlyc3ROYW1lKVxyXG4gICAgICAvLyBjb25zb2xlLmxvZyh1c2VyKTtcclxuICAgICAgXHJcbiAgICAgIHNldEN1cnJlbnRVc2VyKHtcclxuICAgICAgICBpZDogdXNlci5faWQsXHJcbiAgICAgICAgZmlyc3ROYW1lOiB1c2VyLmZpcnN0TmFtZSxcclxuICAgICAgICBsYXN0TmFtZTogdXNlci5sYXN0TmFtZSxcclxuICAgICAgICBqb2JUaXRsZTogdXNlci5qb2JUaXRsZSxcclxuICAgICAgICBsb2NhdGlvbjogdXNlci5sb2NhdGlvbixcclxuICAgICAgICBsYW5ndWFnZXM6IHVzZXIubGFuZ3VhZ2VzLFxyXG4gICAgICAgIGFib3V0OiB1c2VyLmFib3V0LFxyXG4gICAgICAgIG93bmVkVmlkZW9zOiB1c2VyLm93bmVkVmlkZW9zLFxyXG4gICAgICAgIHVzZXJDb21tZW50czogdXNlci51c2VyQ29tbWVudHMsXHJcbiAgICAgICAgcGxheWxpc3RDb21tZW50czogdXNlci5wbGF5bGlzdENvbW1lbnRzLFxyXG4gICAgICAgIGZhdm91cml0ZXM6IHVzZXIuZmF2b3VyaXRlcyxcclxuICAgICAgICBwcm9maWxlUGhvdG9GaWxlbmFtZTogdXNlci5wcm9maWxlUGhvdG9GaWxlbmFtZVxyXG4gICAgICB9KSAgXHJcblxyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9XHJcbiAgICBcclxuICB9XHJcblxyXG4gIGNvbnN0IGZldGNoUHJvZmlsZVVzZXIgPSBhc3luYyAodXNlcklkLCBpbml0aWFsRmV0Y2gpID0+IHtcclxuXHJcbiAgICBpZiAoaW5pdGlhbEZldGNoID09PSB0cnVlKSB7XHJcbiAgICAgIC8vIE9ubHkgZmV0Y2ggZGF0YSBpZiBwcm9maWxlVXNlciBpc24ndCBwb3B1bGF0ZWRcclxuICAgICAgaWYgKHByb2ZpbGVVc2VyLmZpcnN0TmFtZSAhPT0gJycpIHtcclxuICAgICAgICByZXR1cm5cclxuICAgICAgfVxyXG4gICAgICAvLyBPbmx5IGZldGNoIGRhdGEgaWYgdGhlIHVzZXJJZCBoYXMgYmVlbiBwYXJzZWQgZnJvbSB0aGUgVVJMXHJcbiAgICAgIGlmICh1c2VySWQgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHJldHVyblxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBHZXQgdGhlIHByb2ZpbGUgdXNlcidzIGRhdGEgdXNpbmcgdGhlIHVzZXJJZCBmcm9tIHRoZSBVUkxcclxuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBnZXRVc2VyRGF0YUJ5SWQodXNlcklkKTtcclxuXHJcbiAgICAvLyBTZXQgdGhlIHN0YXRlXHJcbiAgICBzZXRQcm9maWxlVXNlcih7XHJcbiAgICAgIGlkOiB1c2VySWQsXHJcbiAgICAgIGZpcnN0TmFtZTogdXNlci5maXJzdE5hbWUsXHJcbiAgICAgIGxhc3ROYW1lOiB1c2VyLmxhc3ROYW1lLFxyXG4gICAgICBqb2JUaXRsZTogdXNlci5qb2JUaXRsZSxcclxuICAgICAgbG9jYXRpb246IHVzZXIubG9jYXRpb24sXHJcbiAgICAgIGxhbmd1YWdlczogdXNlci5sYW5ndWFnZXMsXHJcbiAgICAgIGFib3V0OiB1c2VyLmFib3V0LFxyXG4gICAgICBvd25lZFZpZGVvczogdXNlci5vd25lZFZpZGVvcyxcclxuICAgICAgdXNlckNvbW1lbnRzOiB1c2VyLnVzZXJDb21tZW50cyxcclxuICAgICAgcGxheWxpc3RDb21tZW50czogdXNlci5wbGF5bGlzdENvbW1lbnRzLFxyXG4gICAgICBmYXZvdXJpdGVzOiB1c2VyLmZhdm91cml0ZXMsXHJcbiAgICAgIHByb2ZpbGVQaG90b0ZpbGVuYW1lOiB1c2VyLnByb2ZpbGVQaG90b0ZpbGVuYW1lXHJcblxyXG4gICAgfSlcclxuXHJcbiAgICAvL1NldCB2aWRlbyBzdGF0ZSB0byBiZSBmaXJzdCB2aWRlbyBpbiBwcm9maWxlIHVzZXIncyBwbGF5bGlzdFxyXG4gICAgaWYgKHVzZXIub3duZWRWaWRlb3MubGVuZ3RoID4gMCl7XHJcbiAgICAgIGNvbnN0IHZpZGVvID0gdXNlci5vd25lZFZpZGVvc1swXVxyXG4gICAgICBzZXRDdXJyZW50VmlkZW8oe1xyXG4gICAgICAgIHRpdGxlOiB2aWRlby50aXRsZSxcclxuICAgICAgICB2aWRlb0lkOiB2aWRlby52aWRlb1VSTFxyXG4gICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIC8vIEZldGNoIHRoZSB1c2VyJ3MgcHJvZmlsZSBwaG90b1xyXG4gICAgLy8gZ2V0UHJvZmlsZVBob3RvKHVzZXIucHJvZmlsZVBob3RvRmlsZW5hbWUpO1xyXG5cclxuICAgIHJldHVybiB1c2VyO1xyXG4gIH1cclxuXHJcbiAgLy8gUmVzZXQgdGhlIFByb2ZpbGVVc2VyIHN0YXRlXHJcbiAgY29uc3QgY2xlYXJQcm9maWxlVXNlciA9ICgpID0+IHtcclxuICAgIHNldFByb2ZpbGVVc2VyKHtcclxuICAgICAgaWQ6ICcnLFxyXG4gICAgICBmaXJzdE5hbWU6ICcnLFxyXG4gICAgICBsYXN0TmFtZTogJycsXHJcbiAgICAgIGpvYlRpdGxlOiAnJyxcclxuICAgICAgbG9jYXRpb246ICcnLFxyXG4gICAgICBsYW5ndWFnZXM6IFtdLFxyXG4gICAgICBhYm91dDogJycsXHJcbiAgICAgIG93bmVkVmlkZW9zOiBbXSxcclxuICAgICAgdXNlckNvbW1lbnRzOiBbXSxcclxuICAgICAgcGxheWxpc3RDb21tZW50czogW10sXHJcbiAgICAgIGZhdm91cml0ZXM6IFtdLFxyXG4gICAgICBwcm9maWxlUGhvdG9GaWxlbmFtZTogJydcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgZ2V0Q29tbWVudFVzZXIgPSBhc3luYyAodXNlcklkKSA9PiB7XHJcbiAgICBsZXQgcmVxdWVzdEJvZHkgPSB7XHJcbiAgICAgIHF1ZXJ5OiBgXHJcbiAgICAgICAgICBxdWVyeSB7XHJcbiAgICAgICAgICAgIHVzZXJCeUlkKGlkOlwiJHt1c2VySWR9XCIpIHtcclxuICAgICAgICAgICAgICBmaXJzdE5hbWUsXHJcbiAgICAgICAgICAgICAgbGFzdE5hbWUsXHJcbiAgICAgICAgICAgICAgcHJvZmlsZVBob3RvRmlsZW5hbWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYFxyXG4gICAgfVxyXG4gICAgY29uc3QgY29tbWVudFVzZXIgPSBhd2FpdCBnZXRVc2VyRGF0YUJ5SWQodXNlcklkLCByZXF1ZXN0Qm9keSk7XHJcbiAgICByZXR1cm4gY29tbWVudFVzZXI7XHJcbiAgfVxyXG5cclxuICBjb25zdCBnZXRGYXZvdXJpdGVVc2VyID0gYXN5bmMgKHVzZXJJZCkgPT4ge1xyXG4gICAgbGV0IHJlcXVlc3RCb2R5ID0ge1xyXG4gICAgICBxdWVyeTogYFxyXG4gICAgICAgICAgcXVlcnkge1xyXG4gICAgICAgICAgICB1c2VyQnlJZChpZDpcIiR7dXNlcklkfVwiKSB7XHJcbiAgICAgICAgICAgICAgZmlyc3ROYW1lLFxyXG4gICAgICAgICAgICAgIGxhc3ROYW1lLFxyXG4gICAgICAgICAgICAgIHByb2ZpbGVQaG90b0ZpbGVuYW1lXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGBcclxuICAgIH1cclxuICAgIGNvbnN0IGZhdm91cml0ZVVzZXIgPSBhd2FpdCBnZXRVc2VyRGF0YUJ5SWQodXNlcklkLCByZXF1ZXN0Qm9keSlcclxuICAgIHJldHVybiBmYXZvdXJpdGVVc2VyO1xyXG4gIH1cclxuXHJcbiAgXHJcbiAgLy8gY29uc3QgZ2V0UHJvZmlsZVBob3RvID0gYXN5bmMgKGZpbGVuYW1lKSA9PiB7XHJcbiAgLy8gICB0cnkge1xyXG4gIC8vICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYGh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9maWxlLyR7ZmlsZW5hbWV9YCk7XHJcblxyXG4gIC8vICAgICBjb25zdCBwaG90byA9IHJlcy5kYXRhO1xyXG5cclxuICAvLyAgICAgc2V0UHJvZmlsZVBob3RvKHBob3RvKTtcclxuXHJcblxyXG4gIC8vICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAvLyAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gIC8vICAgfVxyXG4gIC8vIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG4gIC8vIFZJREVPUyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cclxuXHJcbiAgLy8gQWRkIGEgdmlkZW8gdG8gYSB1c2VyJ3MgcGxheWxpc3RcclxuICBjb25zdCBhZGRWaWRlb1RvUGxheWxpc3QgPSBhc3luYyAodmlkZW8pID0+IHtcclxuXHJcbiAgICAvLyBTZW5kIGFuIEFQSSByZXF1ZXN0IHRvIHNhdmUgdGhlIHZpZGVvXHJcbiAgICBjb25zdCByZXF1ZXN0Qm9keSA9IHtcclxuICAgICAgcXVlcnk6IGBcclxuICAgICAgICBtdXRhdGlvbiB7XHJcbiAgICAgICAgICBjcmVhdGVWaWRlbyh2aWRlb0lucHV0OiB7dGl0bGU6IFwiJHt2aWRlby50aXRsZX1cIiwgdGh1bWJuYWlsVVJMOiBcIiR7dmlkZW8udGh1bWJuYWlsVVJMfVwiLCB2aWRlb1VSTDogXCIke3ZpZGVvLnZpZGVvSWR9XCIsIHVzZXJJZDogXCIke2N1cnJlbnRVc2VyLmlkfVwifSkge1xyXG4gICAgICAgICAgICBfaWRcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIGBcclxuICAgIH1cclxuXHJcbiAgICAvLyBjb25zb2xlLmxvZyhyZXF1ZXN0Qm9keSlcclxuICAgIC8vIGNvbnNvbGUubG9nKGF1dGhTdGF0ZS50b2tlbilcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDoke3BvcnR9L2dyYXBocWxgLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocmVxdWVzdEJvZHkpLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IGBCZWFyZXIgJHthdXRoU3RhdGUudG9rZW59YFxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuXHJcbiAgICAgIGlmIChyZXMuc3RhdHVzICE9PSAyMDAgJiYgcmVzLnN0YXR1cyAhPT0gMjAxKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdGYWlsZWQgdG8gY3JlYXRlIHZpZGVvIScpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyAuanNvbigpIGlzIGEgbWV0aG9kIGZyb20gZmV0Y2ggQVBJIHRoYXQgYXV0byBleHRyYWN0cyAmIHBhcnNlcyB0aGUgcmVzIGJvZHlcclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcblxyXG4gICAgICAvLyBDaGVjayBmb3IgZXJyb3JzIGFycmF5IGluIHJlc3BvbnNlXHJcbiAgICAgIGlmIChkYXRhLmVycm9ycykge1xyXG4gICAgICAgIGRhdGEuZXJyb3JzLm1hcChlcnJvciA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvci5tZXNzYWdlKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmV0dXJuXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIFJlZnJlc2ggdGhlIHByb2ZpbGUgd2l0aCB0aGUgbmV3IHVzZXIgZGF0YSAtIHRvIHVwZGF0ZSB0aGUgcGxheWxpc3RcclxuICAgICAgZmV0Y2hQcm9maWxlVXNlcihjdXJyZW50VXNlci5pZCwgZmFsc2UpXHJcblxyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgLy8gUmVtb3ZlIGEgdmlkZW8gZnJvbSBhIHVzZXIncyBwbGF5bGlzdFxyXG4gIGNvbnN0IHJlbW92ZVZpZGVvRnJvbVBsYXlsaXN0ID0gYXN5bmMgKGlkKSA9PiB7XHJcblxyXG4gIC8vIFNlbmQgYW4gQVBJIHJlcXVlc3QgdG8gc2F2ZSB0aGUgdmlkZW9cclxuICAgIGNvbnN0IHJlcXVlc3RCb2R5ID0ge1xyXG4gICAgICBxdWVyeTogYFxyXG4gICAgICAgIG11dGF0aW9uIHtcclxuICAgICAgICAgIHJlbW92ZVZpZGVvKGlkOiBcIiR7aWR9XCIpIHtcclxuICAgICAgICAgICAgb3duZWRWaWRlb3Mge1xyXG4gICAgICAgICAgICAgIF9pZCxcclxuICAgICAgICAgICAgICB0aHVtYm5haWxVUkwsXHJcbiAgICAgICAgICAgICAgdGl0bGUsXHJcbiAgICAgICAgICAgICAgdmlkZW9VUkxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgYFxyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OiR7cG9ydH0vZ3JhcGhxbGAsIHtcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShyZXF1ZXN0Qm9keSksXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICdBdXRob3JpemF0aW9uJzogYEJlYXJlciAke2F1dGhTdGF0ZS50b2tlbn1gXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG5cclxuICAgICAgaWYgKHJlcy5zdGF0dXMgIT09IDIwMCAmJiByZXMuc3RhdHVzICE9PSAyMDEpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZhaWxlZCB0byByZW1vdmUgdmlkZW8hJyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIC5qc29uKCkgaXMgYSBtZXRob2QgZnJvbSBmZXRjaCBBUEkgdGhhdCBhdXRvIGV4dHJhY3RzICYgcGFyc2VzIHRoZSByZXMgYm9keVxyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuXHJcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEuZGF0YS5yZW1vdmVWaWRlbylcclxuXHJcbiAgICAgIGNvbnN0IHZpZGVvcyA9IGRhdGEuZGF0YS5yZW1vdmVWaWRlby5vd25lZFZpZGVvcztcclxuICAgICAgY29uc29sZS5sb2codmlkZW9zKTtcclxuXHJcbiAgICAgIC8vIENoZWNrIGZvciBlcnJvcnMgYXJyYXkgaW4gcmVzcG9uc2VcclxuICAgICAgaWYgKGRhdGEuZXJyb3JzKSB7XHJcbiAgICAgICAgZGF0YS5lcnJvcnMubWFwKGVycm9yID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLm1lc3NhZ2UpXHJcbiAgICAgICAgfSlcclxuICAgICAgICByZXR1cm5cclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gUmVmcmVzaCB0aGUgcHJvZmlsZSB3aXRoIHRoZSBuZXcgdXNlciBkYXRhIC0gdG8gdXBkYXRlIHRoZSBwbGF5bGlzdFxyXG4gICAgICB1cGRhdGVQcm9maWxlVXNlclZpZGVvcyh2aWRlb3MpXHJcblxyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCB1cGRhdGVQcm9maWxlVXNlclZpZGVvcyA9ICh2aWRlb3MpID0+IHtcclxuICAgIC8vIFVwZGF0ZSB0aGUgcHJvZmlsZSB1c2VyJ3Mgb3duZWRWaWRlbyBpbiB0aCBnbG9iYWwgc3RhdGVcclxuICAgIHNldFByb2ZpbGVVc2VyKHsuLi5wcm9maWxlVXNlciwgb3duZWRWaWRlb3M6IHZpZGVvc30pIFxyXG4gIH1cclxuXHJcbiAgLy8gU2V0IGEgdmlkZW8gYXMgdGhlIGN1cnJlbnQgdmlkZW8gZm9yIHRoZSB2aWRlbyBwbGF5ZXJcclxuICBjb25zdCBzZXRDdXJyZW50VmlkZW8gPSAodmlkZW8pID0+IHtcclxuICAgIHNldFZpZGVvU3RhdGUoe1xyXG4gICAgICB0aXRsZTogdmlkZW8udGl0bGUsXHJcbiAgICAgIC8vIGRlc2NyaXB0aW9uOiB2aWRlby5kZXNjcmlwdGlvbixcclxuICAgICAgdmlkZW9JZDogdmlkZW8udmlkZW9JZFxyXG4gICAgfSlcclxuICB9XHJcblxyXG5cclxuICBcclxuICBcclxuICAvLyBDT01NRU5UUyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cclxuICAvLyBBZGQgYSBjb21tZW50XHJcbiAgY29uc3QgYWRkQ29tbWVudCA9IGFzeW5jIChjb250ZW50KSA9PiB7XHJcblxyXG4gICAgLy8gU2VuZCBhbiBBUEkgcmVxdWVzdCB0byBzYXZlIHRoZSBjb21tZW50XHJcbiAgICBjb25zdCByZXF1ZXN0Qm9keSA9IHtcclxuICAgICAgcXVlcnk6IGBcclxuICAgICAgICBtdXRhdGlvbiB7XHJcbiAgICAgICAgICBjcmVhdGVDb21tZW50KGNvbW1lbnRJbnB1dDoge2NvbnRlbnQ6IFwiJHtjb250ZW50fVwiLCBjb21tZW50ZXJJZDogXCIke2N1cnJlbnRVc2VyLmlkfVwiLCBwbGF5bGlzdE93bmVySWQ6IFwiJHtwcm9maWxlVXNlci5pZH1cIn0pIHtcclxuICAgICAgICAgICAgX2lkXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICBgXHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6JHtwb3J0fS9ncmFwaHFsYCwge1xyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHJlcXVlc3RCb2R5KSxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBgQmVhcmVyICR7YXV0aFN0YXRlLnRva2VufWBcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcblxyXG4gICAgICBpZiAocmVzLnN0YXR1cyAhPT0gMjAwICYmIHJlcy5zdGF0dXMgIT09IDIwMSkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignRmFpbGVkIHRvIGNyZWF0ZSBjb21tZW50IScpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyAuanNvbigpIGlzIGEgbWV0aG9kIGZyb20gZmV0Y2ggQVBJIHRoYXQgYXV0byBleHRyYWN0cyAmIHBhcnNlcyB0aGUgcmVzIGJvZHlcclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcblxyXG4gICAgICAvLyBDaGVjayBmb3IgZXJyb3JzIGFycmF5IGluIHJlc3BvbnNlXHJcbiAgICAgIGlmIChkYXRhLmVycm9ycykge1xyXG4gICAgICAgIGRhdGEuZXJyb3JzLm1hcChlcnJvciA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvci5tZXNzYWdlKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmV0dXJuXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIFJlZnJlc2ggdGhlIHByb2ZpbGUgd2l0aCB0aGUgbmV3IHVzZXIgZGF0YSAtIHRvIHVwZGF0ZSB0aGUgY29tbWVudCBzZWN0aW9uXHJcbiAgICAgIGZldGNoUHJvZmlsZVVzZXIocHJvZmlsZVVzZXIuaWQsIGZhbHNlKVxyXG5cclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgXHJcbiAgLy8gUmVtb3ZlIGEgY29tbWVudCBmcm9tIGEgdXNlcidzIHBsYXlsaXN0XHJcbiAgY29uc3QgcmVtb3ZlQ29tbWVudEZyb21QbGF5bGlzdCA9IGFzeW5jIChpZCkgPT4ge1xyXG5cclxuICAgIC8vIFNlbmQgYW4gQVBJIHJlcXVlc3QgdG8gZGVsZXRlIHRoZSBjb21tZW50XHJcbiAgICBjb25zdCByZXF1ZXN0Qm9keSA9IHtcclxuICAgICAgcXVlcnk6IGBcclxuICAgICAgICBtdXRhdGlvbiB7XHJcbiAgICAgICAgICByZW1vdmVDb21tZW50KGlkOiBcIiR7aWR9XCIsIHBsYXlsaXN0T3duZXJJZDogXCIke3Byb2ZpbGVVc2VyLmlkfVwiKSB7XHJcbiAgICAgICAgICAgIHBsYXlsaXN0Q29tbWVudHN7XHJcbiAgICAgICAgICAgICAgX2lkLFxyXG4gICAgICAgICAgICAgIGNvbnRlbnQsXHJcbiAgICAgICAgICAgICAgY29tbWVudGVyIHtcclxuICAgICAgICAgICAgICAgIF9pZFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgY3JlYXRlZEF0LFxyXG4gICAgICAgICAgICAgIHVwZGF0ZWRBdFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICBgXHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6JHtwb3J0fS9ncmFwaHFsYCwge1xyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHJlcXVlc3RCb2R5KSxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBgQmVhcmVyICR7YXV0aFN0YXRlLnRva2VufWBcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcblxyXG4gICAgICBpZiAocmVzLnN0YXR1cyAhPT0gMjAwICYmIHJlcy5zdGF0dXMgIT09IDIwMSkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignRmFpbGVkIHRvIHJlbW92ZSBjb21tZW50IScpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyAuanNvbigpIGlzIGEgbWV0aG9kIGZyb20gZmV0Y2ggQVBJIHRoYXQgYXV0byBleHRyYWN0cyAmIHBhcnNlcyB0aGUgcmVzIGJvZHlcclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcblxyXG4gICAgICBjb25zdCBjb21tZW50cyA9IGRhdGEuZGF0YS5yZW1vdmVDb21tZW50LnBsYXlsaXN0Q29tbWVudHM7XHJcblxyXG4gICAgICAvLyBDaGVjayBmb3IgZXJyb3JzIGFycmF5IGluIHJlc3BvbnNlXHJcbiAgICAgIGlmIChkYXRhLmVycm9ycykge1xyXG4gICAgICAgIGRhdGEuZXJyb3JzLm1hcChlcnJvciA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvci5tZXNzYWdlKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmV0dXJuXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIFJlZnJlc2ggdGhlIHByb2ZpbGUgd2l0aCB0aGUgbmV3IHVzZXIgZGF0YSAtIHRvIHVwZGF0ZSB0aGUgY29tbWVudHNcclxuICAgICAgdXBkYXRlUHJvZmlsZVVzZXJDb21tZW50cyhjb21tZW50cyk7XHJcblxyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCB1cGRhdGVQcm9maWxlVXNlckNvbW1lbnRzID0gKGNvbW1lbnRzKSA9PiB7XHJcbiAgICAvLyBVcGRhdGUgdGhlIHByb2ZpbGUgdXNlcidzIHBsYXlsaXN0Q29tbWVudHMgaW4gdGhlIGdsb2JhbCBzdGF0ZVxyXG4gICAgc2V0UHJvZmlsZVVzZXIoeyAuLi5wcm9maWxlVXNlciwgcGxheWxpc3RDb21tZW50czogY29tbWVudHMgfSlcclxuICB9XHJcblxyXG4gIGNvbnN0IGVkaXRDb21tZW50ID0gYXN5bmMgKGlkLCBjb250ZW50KSA9PiB7XHJcblxyXG4gICAgLy8gTWFrZSBhIEFQSSBxdWVyeSB0byBnZXQgYSB0b2tlblxyXG4gICAgY29uc3QgcmVxdWVzdEJvZHkgPSB7XHJcbiAgICAgIHF1ZXJ5OiBgXHJcbiAgICAgIG11dGF0aW9uIHtcclxuICAgICAgICBlZGl0Q29tbWVudChpZDogXCIke2lkfVwiLCBjb250ZW50OiBcIiR7Y29udGVudH1cIikge1xyXG4gICAgICAgICAgY29udGVudFxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgYFxyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OiR7cG9ydH0vZ3JhcGhxbGAsIHtcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShyZXF1ZXN0Qm9keSksXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICdBdXRob3JpemF0aW9uJzogYEJlYXJlciAke2F1dGhTdGF0ZS50b2tlbn1gXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG5cclxuICAgICAgaWYgKHJlcy5zdGF0dXMgIT09IDIwMCAmJiByZXMuc3RhdHVzICE9PSAyMDEpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VzZXIgdXBkYXRlIGZhaWxlZCEnKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gLmpzb24oKSBpcyBhIG1ldGhvZCBmcm9tIGZldGNoIEFQSSB0aGF0IGF1dG8gZXh0cmFjdHMgJiBwYXJzZXMgdGhlIHJlcyBib2R5XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG5cclxuICAgICAgLy8gQ2hlY2sgZm9yIGVycm9ycyBhcnJheSBpbiByZXNwb25zZVxyXG4gICAgICBpZiAoZGF0YS5lcnJvcnMpIHtcclxuICAgICAgICBkYXRhLmVycm9ycy5tYXAoZXJyb3IgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyb3IubWVzc2FnZSlcclxuICAgICAgICB9KVxyXG4gICAgICAgIHJldHVyblxyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zb2xlLmxvZyhkYXRhLmRhdGEpXHJcblxyXG4gICAgICAvLyBSZWZyZXNoIHRoZSBwcm9maWxlIHdpdGggdGhlIG5ldyB1c2VyIGRhdGEgLSB0byB1cGRhdGUgdGhlIGNvbW1lbnRzXHJcbiAgICAgIGZldGNoUHJvZmlsZVVzZXIocHJvZmlsZVVzZXIuaWQsIGZhbHNlKVxyXG5cclxuXHJcblxyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgLy8gRmF2b3VyaXRlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgY29uc3QgYWRkRmF2b3VyaXRlID0gYXN5bmMgKGlkKSA9PiB7XHJcblxyXG4gICAgLy8gU2VuZCBhbiBBUEkgcmVxdWVzdCB0byBhZGQgdGhlIGZhdm91cml0ZVxyXG4gICAgY29uc3QgcmVxdWVzdEJvZHkgPSB7XHJcbiAgICAgIHF1ZXJ5OiBgXHJcbiAgICAgICAgbXV0YXRpb24ge1xyXG4gICAgICAgICAgYWRkRmF2b3VyaXRlKGlkOiBcIiR7aWR9XCIpIHtcclxuICAgICAgICAgICAgX2lkXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICBgXHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6JHtwb3J0fS9ncmFwaHFsYCwge1xyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHJlcXVlc3RCb2R5KSxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBgQmVhcmVyICR7YXV0aFN0YXRlLnRva2VufWBcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcblxyXG4gICAgICBpZiAocmVzLnN0YXR1cyAhPT0gMjAwICYmIHJlcy5zdGF0dXMgIT09IDIwMSkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignRmFpbGVkIHRvIGFkZCBmYXZvdXJpdGUhJyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIC5qc29uKCkgaXMgYSBtZXRob2QgZnJvbSBmZXRjaCBBUEkgdGhhdCBhdXRvIGV4dHJhY3RzICYgcGFyc2VzIHRoZSByZXMgYm9keVxyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuXHJcbiAgICAgIC8vIENoZWNrIGZvciBlcnJvcnMgYXJyYXkgaW4gcmVzcG9uc2VcclxuICAgICAgaWYgKGRhdGEuZXJyb3JzKSB7XHJcbiAgICAgICAgZGF0YS5lcnJvcnMubWFwKGVycm9yID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLm1lc3NhZ2UpXHJcbiAgICAgICAgfSlcclxuICAgICAgICByZXR1cm5cclxuICAgICAgfVxyXG5cclxuICAgICAgXHJcbiAgICAgIC8vIFJlZnJlc2ggdGhlIGN1cnJlbnRVc2VyJ3MgZGF0YSB0byB1cGRhdGUgdGhlIGFkZCBmYXZvdXJpdGUgcHJvZmlsZSBidXR0b25cclxuICAgICAgLy8gZ2V0VXNlckRhdGFCeUlkKGN1cnJlbnRVc2VyLmlkKVxyXG4gICAgICAvLyBSZWZyZXNoIHRoZSBwcm9maWxlIHdpdGggdGhlIG5ldyB1c2VyIGRhdGEgLSB0byB1cGRhdGUgdGhlIGZhdm91cml0ZXMgc2VjdGlvblxyXG4gICAgICAvLyBmZXRjaFByb2ZpbGVVc2VyKGlkLCBmYWxzZSlcclxuICAgICAgZ2V0VXNlckRhdGFCeVRva2VuKGF1dGhTdGF0ZS50b2tlbik7XHJcblxyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgLy8gUmVtb3ZlIGEgZmF2b3VyaXRlIGZyb20gYSB1c2VycyBwcm9maWxlXHJcbiAgY29uc3QgcmVtb3ZlRmF2b3VyaXRlID0gYXN5bmMgKGlkKSA9PiB7XHJcblxyXG4gICAgLy8gU2VuZCBhbiBBUEkgcmVxdWVzdCB0byBkZWxldGUgdGhlIGNvbW1lbnRcclxuICAgIGNvbnN0IHJlcXVlc3RCb2R5ID0ge1xyXG4gICAgICBxdWVyeTogYFxyXG4gICAgICAgIG11dGF0aW9uIHtcclxuICAgICAgICAgIHJlbW92ZUZhdm91cml0ZShpZDogXCIke2lkfVwiKSB7XHJcbiAgICAgICAgICAgIGZhdm91cml0ZXNcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIGBcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDoke3BvcnR9L2dyYXBocWxgLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocmVxdWVzdEJvZHkpLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IGBCZWFyZXIgJHthdXRoU3RhdGUudG9rZW59YFxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuXHJcbiAgICAgIGlmIChyZXMuc3RhdHVzICE9PSAyMDAgJiYgcmVzLnN0YXR1cyAhPT0gMjAxKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdGYWlsZWQgdG8gcmVtb3ZlIGZhdm91cml0ZSEnKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gLmpzb24oKSBpcyBhIG1ldGhvZCBmcm9tIGZldGNoIEFQSSB0aGF0IGF1dG8gZXh0cmFjdHMgJiBwYXJzZXMgdGhlIHJlcyBib2R5XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG5cclxuICAgICAgLy8gY29uc29sZS5sb2coZGF0YSlcclxuXHJcbiAgICAgIGNvbnN0IGZhdm91cml0ZXMgPSBkYXRhLmRhdGEucmVtb3ZlRmF2b3VyaXRlLmZhdm91cml0ZXM7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKGZhdm91cml0ZXMpXHJcblxyXG4gICAgICAvLyBSZWZyZXNoIHRoZSBwcm9maWxlIHdpdGggdGhlIG5ldyB1c2VyIGRhdGEgLSB0byB1cGRhdGUgdGhlIGZhdm91cml0ZXMgc2VjdGlvblxyXG4gICAgICAvLyBmZXRjaFByb2ZpbGVVc2VyKGlkLCBmYWxzZSlcclxuXHJcbiAgICAgIC8vIFJlZnJlc2ggdGhlIGN1cnJlbnRVc2VyJ3MgZGF0YSB0byB1cGRhdGUgdGhlIGFkZCBmYXZvdXJpdGUgcHJvZmlsZSBidXR0b25cclxuICAgICAgLy8gZ2V0VXNlckRhdGFCeUlkKGN1cnJlbnRVc2VyLmlkKVxyXG5cclxuICAgICAgZ2V0VXNlckRhdGFCeVRva2VuKGF1dGhTdGF0ZS50b2tlbik7XHJcblxyXG5cclxuICAgICAgLy8gQ2hlY2sgZm9yIGVycm9ycyBhcnJheSBpbiByZXNwb25zZVxyXG4gICAgICBpZiAoZGF0YS5lcnJvcnMpIHtcclxuICAgICAgICBkYXRhLmVycm9ycy5tYXAoZXJyb3IgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyb3IubWVzc2FnZSlcclxuICAgICAgICB9KVxyXG4gICAgICAgIHJldHVyblxyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBSZWZyZXNoIHRoZSBwcm9maWxlIHdpdGggdGhlIG5ldyB1c2VyIGRhdGEgLSB0byB1cGRhdGUgdGhlIGZhdm91cml0ZXNcclxuICAgICAgdXBkYXRlUHJvZmlsZVVzZXJGYXZvdXJpdGVzKGZhdm91cml0ZXMpO1xyXG5cclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgdXBkYXRlUHJvZmlsZVVzZXJGYXZvdXJpdGVzID0gKGZhdm91cml0ZXMpID0+IHtcclxuICAgIC8vIFVwZGF0ZSB0aGUgcHJvZmlsZSB1c2VyJ3MgZmF2b3VyaXRlcyBpbiB0aCBnbG9iYWwgc3RhdGVcclxuICAgIHNldFByb2ZpbGVVc2VyKHsgLi4ucHJvZmlsZVVzZXIsIGZhdm91cml0ZXMgfSlcclxuICB9XHJcblxyXG5cclxuICAvLyBQSE9UTyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gIFxyXG4gIGNvbnN0IHVwbG9hZEZpbGUgPSBhc3luYyAoZm9ybURhdGEpID0+IHtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAvLyBNYWtlIEFQSSByZXF1ZXN0IHRvIHVwbG9hZCB0aGUgZmlsZSB0byB0aGUgREJcclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MucG9zdChgaHR0cDovL2xvY2FsaG9zdDoke3BvcnR9L3VwbG9hZGAsIGZvcm1EYXRhLCB7XHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdtdWx0aXBhcnQvZm9ybS1kYXRhJyxcclxuICAgICAgICAgICdBdXRob3JpemF0aW9uJzogYEJlYXJlciAke2F1dGhTdGF0ZS50b2tlbn1gXHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIC8vIHJlZnJlc2ggdGhlIHByb2ZpbGVcclxuICAgICAgZmV0Y2hQcm9maWxlVXNlcihjdXJyZW50VXNlci5pZClcclxuXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcblxyXG4gIFxyXG4gIFxyXG4gIFxyXG4gIFxyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGV4dFByb3ZpZGVyIHZhbHVlPXt7XHJcbiAgICAgIGF1dGhTdGF0ZSxcclxuICAgICAgY3VycmVudFVzZXIsXHJcbiAgICAgIHByb2ZpbGVVc2VyLFxyXG4gICAgICBzZXRQcm9maWxlVXNlcixcclxuICAgICAgdmlkZW9TdGF0ZSxcclxuICAgICAgY29tbWVudFN0YXRlLFxyXG4gICAgICBhbGxVc2VycyxcclxuICAgICAgYXV0b3BsYXksXHJcbiAgICAgIHNldEF1dG9wbGF5LFxyXG4gICAgICAvLyBwcm9maWxlUGhvdG8sXHJcbiAgICAgIGxvZ2luLFxyXG4gICAgICByZWdpc3RlcixcclxuICAgICAgbG9nb3V0LFxyXG4gICAgICB1cGRhdGVVc2VyLFxyXG4gICAgICBnZXRVc2VyRGF0YUJ5SWQsXHJcbiAgICAgIGdldFVzZXJEYXRhQnlUb2tlbixcclxuICAgICAgZmV0Y2hQcm9maWxlVXNlcixcclxuICAgICAgZ2V0Q29tbWVudFVzZXIsXHJcbiAgICAgIGdldEZhdm91cml0ZVVzZXIsXHJcbiAgICAgIGFkZFZpZGVvVG9QbGF5bGlzdCxcclxuICAgICAgY2xlYXJQcm9maWxlVXNlcixcclxuICAgICAgcmVtb3ZlVmlkZW9Gcm9tUGxheWxpc3QsXHJcbiAgICAgIHNldEN1cnJlbnRWaWRlbyxcclxuICAgICAgYWRkQ29tbWVudCxcclxuICAgICAgZWRpdENvbW1lbnQsXHJcbiAgICAgIHJlbW92ZUNvbW1lbnRGcm9tUGxheWxpc3QsXHJcbiAgICAgIGFkZEZhdm91cml0ZSxcclxuICAgICAgcmVtb3ZlRmF2b3VyaXRlLFxyXG4gICAgICB1cGxvYWRGaWxlXHJcbiAgICB9fT5cclxuICAgICAgPExheW91dD5cclxuICAgICAgICA8QW5pbWF0ZVByZXNlbmNlIGV4aXRCZWZvcmVFbnRlcj5cclxuICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICAgICA8L0FuaW1hdGVQcmVzZW5jZT5cclxuICAgICAgPC9MYXlvdXQ+XHJcbiAgICA8L0NvbnRleHRQcm92aWRlcj5cclxuICApXHJcbn1cclxuXHJcblxyXG4vLyBBcHAuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgY29udGV4dCA9PiB7XHJcblxyXG4vLyAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdwYXRoL3RvL2VuZHBvaW50Jywge1xyXG4vLyAgICAgaGVhZGVyczoge1xyXG4vLyAgICAgICBjb29raWU6IGN0eC5yZXEuaGVhZGVycy5jb29raWUsXHJcbi8vICAgICB9LFxyXG4vLyAgIH0pO1xyXG4vLyAgIGNvbnN0IHVzZXIgPSBhd2FpdCByZXMuanNvbigpO1xyXG5cclxuLy8gICByZXR1cm4geyB1c2VyIH07XHJcbiAgXHJcbiAgLy8gY29uc3QgdG9rZW4gPSBjb29raWUubG9hZCgndG9rZW4nKTtcclxuICAvLyBjb25zb2xlLmxvZygndG9rZW4gZnJvbSBjb29raWUnLCB0b2tlbik7XHJcbiAgXHJcbiAgLy8gLy8gaWYgKHRva2VuKSB7XHJcbiAgLy8gLy8gICBzZXRBdXRoU3RhdGUoeyAuLi5hdXRoU3RhdGUsIGF1dGhlbnRpY2F0ZWQ6IHRydWUsIHRva2VuOiB0b2tlbn0pOyBcclxuICAvLyAvLyB9XHJcbiAgLy8gcmV0dXJuIHt0b2tlbiA6IHRva2VufTtcclxuLy8gfVxyXG5cclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFwb2xsby1ib29zdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmcmFtZXItbW90aW9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXMtZXhhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicXVlcnlzdHJpbmdcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtY29va2llc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtanN4L3N0eWxlXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=