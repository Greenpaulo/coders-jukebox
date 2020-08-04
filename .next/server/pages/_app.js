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

/***/ "./config/dev.js":
/*!***********************!*\
  !*** ./config/dev.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  mongoURI: 'mongodb://greenpaulo:admin2020@ds121996.mlab.com:21996/coders-jukebox-dev',
  YOUTUBEAPI_KEY: 'AIzaSyDWTK5ebqXGHw3N4FSdxE_qO2v0LEs28Xo'
};

/***/ }),

/***/ "./config/keys.js":
/*!************************!*\
  !*** ./config/keys.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Figure out which set of credentials to return
if (false) {} else {
  // we are in development - return the dev set of keys
  module.exports = __webpack_require__(/*! ./dev */ "./config/dev.js");
}

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
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! framer-motion */ "framer-motion");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _config_keys__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../config/keys */ "./config/keys.js");
/* harmony import */ var _config_keys__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_config_keys__WEBPACK_IMPORTED_MODULE_7__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






 // import { empty } from 'apollo-boost';




const App = ({
  Component,
  pageProps,
  router
}) => {
  const port = parseInt(process.env.PORT, 10) || 3000; // Determine the URI based on dev or prod

  const URI = false ? undefined : `http://localhost:${port}`;
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
      const res = await fetch(`${URI}/graphql`, {
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
      // const res = await fetch(`${URI}/graphql`, {
      const res = await fetch(`${URI}/graphql`, {
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
      const res = await fetch(`${URI}/graphql`, {
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
      const res = await fetch(`${URI}/graphql`, {
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
      const res = await fetch(`${URI}/graphql`, {
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
      const res = await fetch(`${URI}/graphql`, {
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
      const res = await fetch(`${URI}/graphql`, {
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
      const res = await fetch(`${URI}/graphql`, {
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
      const res = await fetch(`${URI}/graphql`, {
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
      const res = await fetch(`${URI}/graphql`, {
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
      const res = await fetch(`${URI}/graphql`, {
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
      const res = await fetch(`${URI}/graphql`, {
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
      const res = await fetch(`${URI}/graphql`, {
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
    }
  }, __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], null, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_6__["AnimatePresence"], {
    exitBeforeEnter: true
  }, __jsx(Component, pageProps))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xheW91dC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xvZ28uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9OYXZiYXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Vc2VyU2VhcmNoLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVXNlclNlYXJjaEJhci5qcyIsIndlYnBhY2s6Ly8vLi9jb25maWcvZGV2LmpzIiwid2VicGFjazovLy8uL2NvbmZpZy9rZXlzLmpzIiwid2VicGFjazovLy8uL2NvbnRleHQvQ29udGV4dFByb3ZpZGVyLmpzIiwid2VicGFjazovLy8uL2NvbnRleHQvR2xvYmFsQ29udGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9jc3MtdmFyaWFibGVzL2NvbG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9saW5rLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3dpdGgtcm91dGVyLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL21pdHQudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2Zvcm1hdC11cmwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtbWF0Y2hlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1yZWdleC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9zZWFyY2gtcGFyYW1zLXRvLXVybC1xdWVyeS50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2xpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL3JlYWN0LWlzL2Nqcy9yZWFjdC1pcy5kZXZlbG9wbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvcmVhY3QtaXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZyYW1lci1tb3Rpb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzLWV4YWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicXVlcnlzdHJpbmdcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWNvb2tpZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtanN4L3N0eWxlXCIiXSwibmFtZXMiOlsiTGF5b3V0IiwicHJvcHMiLCJjb2xvcnMiLCJwcmltYXJ5IiwiY2hpbGRyZW4iLCJMb2dvIiwiTmF2YmFyIiwiYXV0aFN0YXRlIiwiY3VycmVudFVzZXIiLCJmZXRjaFByb2ZpbGVVc2VyIiwibG9nb3V0IiwidXNlQ29udGV4dCIsIkdsb2JhbENvbnRleHQiLCJsb2dvdXRIYW5kbGVyIiwic2VhcmNoVXNlckhhbmRsZXIiLCJjb25zb2xlIiwibG9nIiwicHJvZmlsZU5hdkNsaWNrSGFuZGxlciIsImlkIiwiaGFtYnVyZ2VySGFuZGxlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJncmFkaWVudCIsInNlY29uZGFyeSIsImF1dGhlbnRpY2F0ZWQiLCJVc2VyU2VhcmNoIiwiZmlsdGVyZWRVc2VycyIsInNldEZpbHRlcmVkVXNlcnMiLCJ1c2VTdGF0ZSIsInNlYXJjaE1vZGUiLCJzZXRTZWFyY2hNb2RlIiwic2VhcmNoSW5wdXQiLCJzZXRTZWFyY2hJbnB1dCIsInVzZXJDbGlja0hhbmRsZXIiLCJjaGVja1NlYXJjaE1vZGUiLCJpbnB1dCIsIm1hcCIsInVzZXIiLCJiaW5kIiwibmFtZSIsImxlbmd0aCIsIlVzZXJTZWFyY2hiYXIiLCJwbGFjZWhvbGRlciIsImFsbFVzZXJzIiwidXNlRWZmZWN0IiwidXNlcnMiLCJmaWx0ZXIiLCJzdWJzdHIiLCJ0b1VwcGVyQ2FzZSIsIm9uQ2hhbmdlSGFuZGxlciIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm9uRm9ybVN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwibW9kdWxlIiwiZXhwb3J0cyIsIm1vbmdvVVJJIiwiWU9VVFVCRUFQSV9LRVkiLCJyZXF1aXJlIiwiQ29udGV4dFByb3ZpZGVyIiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJzdGF0ZSIsInJlbmRlciIsImluaXRpYWxTdGF0ZSIsImF1dGhEYXRhIiwidmlkZW8iLCJjb21tZW50IiwiY3JlYXRlQ29udGV4dCIsInJldmVyc2VHcmFkaWVudCIsInBpbmtHcmFkZW50IiwicmV2ZXJzZVBpbmtHcmFkaWVudCIsInRlcnRpYXJ5IiwibG9jYXRpb25PcmlnaW4iLCJyZXNvbHZlZCIsImxpc3RlbmVycyIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwid2luZG93IiwicHJlZmV0Y2hlZCIsImNhY2hlZE9ic2VydmVyIiwiZW50cmllcyIsImVudHJ5IiwiY2IiLCJyb290TWFyZ2luIiwibGlzdGVuVG9JbnRlcnNlY3Rpb25zIiwib2JzZXJ2ZXIiLCJnZXRPYnNlcnZlciIsInJvdXRlciIsImVyciIsImhyZWYiLCJub2RlTmFtZSIsImlzTG9jYWwiLCJzY3JvbGwiLCJhcyIsInJlcGxhY2UiLCJzdWNjZXNzIiwiaGFzV2FybmVkIiwiUmVhY3QiLCJwIiwicGF0aG5hbWUiLCJyZXNvbHZlZEhyZWYiLCJjaGlsZEVsbSIsImlzUHJlZmV0Y2hlZCIsInByZWZldGNoIiwiY2hpbGQiLCJDaGlsZHJlbiIsImNoaWxkUHJvcHMiLCJyZWYiLCJlbCIsInNldENoaWxkRWxtIiwib25DbGljayIsImxpbmtDbGlja2VkIiwicHJpb3JpdHkiLCJwcm9jZXNzIiwid2FybiIsIlByb3BUeXBlcyIsImV4YWN0IiwiTGluayIsInNoYWxsb3ciLCJwYXNzSHJlZiIsInBhdGgiLCJub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCIsInNpbmdsZXRvblJvdXRlciIsInJlYWR5Q2FsbGJhY2tzIiwicmVhZHkiLCJ1cmxQcm9wZXJ0eUZpZWxkcyIsInJvdXRlckV2ZW50cyIsImNvcmVNZXRob2RGaWVsZHMiLCJPYmplY3QiLCJnZXQiLCJSb3V0ZXIiLCJmaWVsZCIsImdldFJvdXRlciIsImV2ZW50IiwiZXZlbnRGaWVsZCIsIl9zaW5nbGV0b25Sb3V0ZXIiLCJtZXNzYWdlIiwic3RhY2siLCJSb3V0ZXJDb250ZXh0IiwiY3JlYXRlUm91dGVyIiwiX3JvdXRlciIsImluc3RhbmNlIiwiQ29tcG9zZWRDb21wb25lbnQiLCJnZXRJbml0aWFsUHJvcHMiLCJXaXRoUm91dGVyV3JhcHBlciIsImFsbCIsIm9uIiwib2ZmIiwiZW1pdCIsImhhbmRsZXIiLCJiYXNlUGF0aCIsImNhbmNlbGxlZCIsImJhc2UiLCJ1cmxBc1N0cmluZyIsImZpbmFsVXJsIiwidXJsIiwiYWRkQmFzZVBhdGgiLCJyZXNvbHZlSHJlZiIsIm1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uIiwiY3JlZGVudGlhbHMiLCJyZXMiLCJhdHRlbXB0cyIsImZldGNoUmV0cnkiLCJpc1NlcnZlclJlbmRlciIsInJvdXRlIiwicXVlcnkiLCJhc1BhdGgiLCJjb21wb25lbnRzIiwic2RjIiwic3ViIiwiY2xjIiwicGFnZUxvYWRlciIsIl9icHMiLCJldmVudHMiLCJfd3JhcEFwcCIsImlzU3NyIiwiaXNGYWxsYmFjayIsIl9pbkZsaWdodFJvdXRlIiwiX19OX1NTRyIsImluaXRpYWxQcm9wcyIsIl9fTl9TU1AiLCJfX05FWFRfREFUQV9fIiwidXBkYXRlIiwibW9kIiwiZGF0YSIsIm5ld0RhdGEiLCJyZWxvYWQiLCJiYWNrIiwicHVzaCIsIm9wdGlvbnMiLCJwcmVwYXJlVXJsQXMiLCJTVCIsInBlcmZvcm1hbmNlIiwiY2xlYW5lZEFzIiwiZGVsQmFzZVBhdGgiLCJwYXJzZWQiLCJ0cnlQYXJzZVJlbGF0aXZlVXJsIiwibWV0aG9kIiwicm91dGVSZWdleCIsInJvdXRlTWF0Y2giLCJtaXNzaW5nUGFyYW1zIiwicGFyYW0iLCJhc1BhdGhuYW1lIiwicm91dGVJbmZvIiwiYXBwQ29tcCIsImNoYW5nZVN0YXRlIiwiX19OIiwiYnVpbGRDYW5jZWxsYXRpb25FcnJvciIsInBhZ2UiLCJlcnJvciIsImNhY2hlZFJvdXRlSW5mbyIsImlzVmFsaWRFbGVtZW50VHlwZSIsImRhdGFIcmVmIiwic2V0IiwiYmVmb3JlUG9wU3RhdGUiLCJvbmx5QUhhc2hDaGFuZ2UiLCJuZXdIYXNoIiwib2xkVXJsTm9IYXNoIiwib2xkSGFzaCIsInNjcm9sbFRvSGFzaCIsImhhc2giLCJpZEVsIiwibmFtZUVsIiwidXJsSXNOZXciLCJQcm9taXNlIiwiY2FuY2VsIiwiY29tcG9uZW50UmVzdWx0IiwiX2dldERhdGEiLCJmbiIsIl9nZXRTdGF0aWNEYXRhIiwiZmV0Y2hOZXh0RGF0YSIsIl9nZXRTZXJ2ZXJEYXRhIiwiQXBwVHJlZSIsImN0eCIsImFib3J0Q29tcG9uZW50TG9hZCIsIm5vdGlmeSIsInNsYXNoZWRQcm90b2NvbHMiLCJwcm90b2NvbCIsInVybE9iaiIsImhvc3QiLCJhdXRoIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiaG9zdG5hbWUiLCJzZWFyY2giLCJURVNUX1JPVVRFIiwiRFVNTVlfQkFTRSIsInJlc29sdmVkQmFzZSIsIm9yaWdpbiIsInJlIiwiZGVjb2RlIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwicGFyYW1zIiwic2x1Z05hbWUiLCJnIiwiZ3JvdXBzIiwibSIsInN0ciIsIm9wdGlvbmFsIiwicmVwZWF0Iiwia2V5Iiwic2VnbWVudHMiLCJub3JtYWxpemVkUm91dGUiLCJncm91cEluZGV4IiwicGFyYW1ldGVyaXplZFJvdXRlIiwic2VnbWVudCIsInBhcnNlUGFyYW1ldGVyIiwicG9zIiwiZXNjYXBlUmVnZXgiLCJyb3V0ZUtleUNoYXJDb2RlIiwicm91dGVLZXlDaGFyTGVuZ3RoIiwiZ2V0U2FmZVJvdXRlS2V5Iiwicm91dGVLZXkiLCJpIiwiU3RyaW5nIiwicm91dGVLZXlzIiwibmFtZWRQYXJhbWV0ZXJpemVkUm91dGUiLCJjbGVhbmVkS2V5IiwiaW52YWxpZEtleSIsImlzTmFOIiwicGFyc2VJbnQiLCJuYW1lZFJlZ2V4Iiwic2VhcmNoUGFyYW1zIiwiQXJyYXkiLCJ1c2VkIiwicmVzdWx0IiwicG9ydCIsImdldExvY2F0aW9uT3JpZ2luIiwiQXBwIiwiZ2V0RGlzcGxheU5hbWUiLCJwYWdlUHJvcHMiLCJsb2FkR2V0SW5pdGlhbFByb3BzIiwiaXNSZXNTZW50IiwidXJsT2JqZWN0S2V5cyIsIlNQIiwiZW52IiwiUE9SVCIsIlVSSSIsImtleXMiLCJ0b2tlbiIsImdldEFsbFVzZXJzIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInNldEF1dGhTdGF0ZSIsImdldFVzZXJEYXRhQnlUb2tlbiIsImVtcHR5VXNlciIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwiam9iVGl0bGUiLCJsb2NhdGlvbiIsImxhbmd1YWdlcyIsImFib3V0Iiwib3duZWRWaWRlb3MiLCJ1c2VyQ29tbWVudHMiLCJwbGF5bGlzdENvbW1lbnRzIiwiZmF2b3VyaXRlcyIsInByb2ZpbGVQaG90b0ZpbGVuYW1lIiwidXNlcklkIiwidG9rZW5FeHBpcmF0aW9uIiwic2V0Q3VycmVudFVzZXIiLCJwcm9maWxlVXNlciIsInNldFByb2ZpbGVVc2VyIiwidmlkZW9TdGF0ZSIsInNldFZpZGVvU3RhdGUiLCJ0aXRsZSIsInZpZGVvSWQiLCJjb21tZW50U3RhdGUiLCJzZXRDb21tZW50U3RhdGUiLCJzZXRBbGxVc2VycyIsImF1dG9wbGF5Iiwic2V0QXV0b3BsYXkiLCJsb2dpbiIsImVtYWlsIiwicGFzc3dvcmQiLCJyZXF1ZXN0Qm9keSIsImZldGNoIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJoZWFkZXJzIiwic3RhdHVzIiwiRXJyb3IiLCJqc29uIiwiZXJyb3JzIiwic2V0SXRlbSIsInJlZ2lzdGVyIiwibmV3VXNlckVtYWlsIiwiY3JlYXRlVXNlciIsInJlbW92ZUl0ZW0iLCJ1cGRhdGVVc2VyIiwidXNlcnNXaXRoRnVsbE5hbWUiLCJfaWQiLCJnZXRVc2VyRGF0YUJ5SWQiLCJ1c2VyQnlJZCIsInVzZXJCeVRva2VuIiwiaW5pdGlhbEZldGNoIiwidW5kZWZpbmVkIiwic2V0Q3VycmVudFZpZGVvIiwidmlkZW9VUkwiLCJjbGVhclByb2ZpbGVVc2VyIiwiZ2V0Q29tbWVudFVzZXIiLCJjb21tZW50VXNlciIsImdldEZhdm91cml0ZVVzZXIiLCJmYXZvdXJpdGVVc2VyIiwiYWRkVmlkZW9Ub1BsYXlsaXN0IiwidGh1bWJuYWlsVVJMIiwicmVtb3ZlVmlkZW9Gcm9tUGxheWxpc3QiLCJyZW1vdmVWaWRlbyIsInZpZGVvcyIsInVwZGF0ZVByb2ZpbGVVc2VyVmlkZW9zIiwiYWRkQ29tbWVudCIsImNvbnRlbnQiLCJyZW1vdmVDb21tZW50RnJvbVBsYXlsaXN0IiwiY29tbWVudHMiLCJyZW1vdmVDb21tZW50IiwidXBkYXRlUHJvZmlsZVVzZXJDb21tZW50cyIsImVkaXRDb21tZW50IiwiYWRkRmF2b3VyaXRlIiwicmVtb3ZlRmF2b3VyaXRlIiwidXBkYXRlUHJvZmlsZVVzZXJGYXZvdXJpdGVzIiwidXBsb2FkRmlsZSIsImZvcm1EYXRhIiwiYXhpb3MiLCJwb3N0Il0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFD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QURzQjtBQUV0QkMsaUJBRnNCO0FBR3RCMFQsaUJBSHNCO0FBSXRCQyxvQkFKc0I7QUFLdEJDLGdCQUxzQjtBQU10Qkksa0JBTnNCO0FBT3RCM1IsY0FQc0I7QUFRdEI4UixjQVJzQjtBQVN0QkMsaUJBVHNCO0FBVXRCO0FBQ0FDLFdBWHNCO0FBWXRCYyxjQVpzQjtBQWF0QmpWLFlBYnNCO0FBY3RCcVYsZ0JBZHNCO0FBZXRCRyxxQkFmc0I7QUFnQnRCaEQsd0JBaEJzQjtBQWlCdEJ6UyxzQkFqQnNCO0FBa0J0QmlXLG9CQWxCc0I7QUFtQnRCRSxzQkFuQnNCO0FBb0J0QkUsd0JBcEJzQjtBQXFCdEJMLHNCQXJCc0I7QUFzQnRCTyw2QkF0QnNCO0FBdUJ0QlQscUJBdkJzQjtBQXdCdEJhLGdCQXhCc0I7QUF5QnRCTSxpQkF6QnNCO0FBMEJ0QkosK0JBMUJzQjtBQTJCdEJLLGtCQTNCc0I7QUE0QnRCQyxxQkE1QnNCO0FBNkJ0QkU7QUE3QnNCO0FBQXhCLEtBK0JFLE1BQUMsMERBQUQsUUFDRSxNQUFDLDZEQUFEO0FBQWlCLG1CQUFlO0FBQWhDLEtBQ0UsTUFBQyxTQUFELEVBQWUxRixTQUFmLENBREYsQ0FERixDQS9CRixDQURGO0FBdUNELENBMWtDRCxDLENBNmtDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUU7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Y7OztBQUtlRixrRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzltQ0Esa0M7Ozs7Ozs7Ozs7O0FDQUEsMEM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsMEM7Ozs7Ozs7Ozs7O0FDQUEsNkMiLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qc1wiKTsiLCJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gJy4vTmF2YmFyJztcclxuaW1wb3J0IGNvbG9ycyBmcm9tICcuLi9jc3MtdmFyaWFibGVzL2NvbG9ycyc7XHJcblxyXG5cclxuY29uc3QgTGF5b3V0ID0gKHByb3BzKSA9PiAoXHJcbiAgPGRpdj5cclxuICAgIDxIZWFkPlxyXG4gICAgICA8dGl0bGU+Q29kZVR1bmVzPC90aXRsZT5cclxuICAgICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QmFsb28rVGhhbWJpKzImZGlzcGxheT1zd2FwXCIgcmVsPVwic3R5bGVzaGVldFwiPjwvbGluaz5cclxuICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL3N0YWNrcGF0aC5ib290c3RyYXBjZG4uY29tL2ZvbnQtYXdlc29tZS80LjcuMC9jc3MvZm9udC1hd2Vzb21lLm1pbi5jc3NcIi8+XHJcbiAgICA8L0hlYWQ+XHJcbiAgICA8TmF2YmFyLz5cclxuICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgIFxyXG5cclxuICAgIDxzdHlsZSBnbG9iYWwganN4PntgXHJcbiAgICBcclxuICAgICAgKiB7XHJcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgfVxyXG5cclxuICAgICAgYm9keSB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdCYWxvbyBUaGFtYmkgMicsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuOGVtO1xyXG4gICAgICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHB1cnBsZTsgKi9cclxuICAgICAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjZGQwMGZmOyAqL1xyXG4gICAgICAgIC8qIGJhY2tncm91bmQtY29sb3I6ICNmZmY7ICovXHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgICAgICAvKiB3aWR0aDogMTAwdnc7ICovXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5jb250YWluZXIge1xyXG4gICAgICAgIG1heC13aWR0aDogMTEwMHB4O1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBhIHtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBidXR0b24ge1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBwYWRkaW5nOiAwLjVyZW0gMXJlbSA7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke2NvbG9ycy5wcmltYXJ5fTtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlLWluLW91dDtcclxuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gODBtcyBlYXNlLWluO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgIGJ1dHRvbjphY3RpdmUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGJ1dHRvbjpmb2N1cyB7XHJcbiAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgYnV0dG9uOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTUzMDVhO1xyXG4gICAgICB9XHJcbiAgICBcclxuICAgIGB9IFxyXG4gICAgPC9zdHlsZT4gXHJcbiAgPC9kaXY+XHJcbilcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExheW91dDtcclxuIiwiaW1wb3J0IGNvbG9ycyBmcm9tICcuLi9jc3MtdmFyaWFibGVzL2NvbG9ycyc7XHJcblxyXG5cclxuY29uc3QgTG9nbyA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPHN2ZyBpZD1cIkxheWVyXzFcIiBkYXRhLW5hbWU9XCJMYXllciAxXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCI1MCA1MCAyNDAgMjMwXCIgeD1cIjBcIiB5PVwiMFwiPlxyXG5cclxuICAgICAgPHBhdGggY2xhc3NOYW1lPVwic3QwXCIgZD1cIk0xNDcuMSwxNC4yYy0zNSwwLTYzLjYsMjcuOS02My42LDYyLjF2MS4zYzAsNy41LDAsMTYsMi43LDIzbC0wLjcsMC43Yy0yLDEuNy0yLjQsNS4xLTEuMSw4LjFMOTcuNSwxNDFcclxuXHRcdGMxLjEsMi45LDMuNyw0LjgsNi4xLDQuOGMwLjEsMCwwLjMsMCwwLjQsMGwxNy43LTEuNmMxLjYtMC4xLDIuOC0xLDMuNy0yLjNjMS4xLTEuOSwxLjEtNC41LDAuMS02LjlsLTE3LjUtNDIuM1xyXG5cdFx0Yy0xLTIuNS0yLjgtNC4yLTQuOS00LjZjLTEuNi0wLjQtMy4xLDAtNC4yLDFsLTAuNiwwLjZjLTIuMy01LjgtMy40LTExLjMtMy40LTE2LjZjMC0yNy4zLDIzLjQtNDkuNSw1Mi4zLTQ5LjVcclxuXHRcdHM1Mi4zLDIyLjIsNTIuMyw0OS41YzAsNS41LTEuMSwxMS0zLjQsMTYuNmwtMC42LTAuNmMtMS4xLTEtMi43LTEuNC00LjItMWMtMi4xLDAuNC00LDIuMi00LjksNC42bC0xNy41LDQyLjNcclxuXHRcdGMtMSwyLjUtMSw1LjEsMC4xLDYuOWMwLjgsMS40LDIuMSwyLjMsMy43LDIuM2wxNy44LDEuNGMwLjEsMCwwLjMsMCwwLjQsMGMyLjQsMCw0LjktMS45LDYuMS00LjhsMTMuMS0zMS42YzEuMy0zLDAuNy02LjQtMS4xLTguMVxyXG5cdFx0bC0wLjctMC43YzIuNS02LjgsMi41LTE1LjMsMi41LTIyLjh2LTEuM0MyMTAuNiw0MiwxODIuMSwxNC4yLDE0Ny4xLDE0LjJ6IE0xOTkuMyw1Ni42bDQuNS0xLjNjMS42LDQsMi43LDguMiwzLjIsMTIuNmwtNS4yLDEuNFxyXG5cdFx0QzIwMS43LDY0LjgsMjAwLjgsNjAuNywxOTkuMyw1Ni42eiBNOTIuMSw2OS4zbC01LjItMS40YzAuNi00LjMsMS43LTguNSwzLjItMTIuNmw0LjUsMS4zQzkzLjQsNjAuNyw5Mi40LDY0LjgsOTIuMSw2OS4zelxyXG5cdFx0IE0xMDMuNiwxNDIuN2MtMS4zLDAuMS0zLTEuMi0zLjctM2wtMTMuMS0zMS41Yy0wLjctMS45LTAuNi0zLjksMC40LTQuOGw5LjctOC44bDE5LjEsNDcuMkwxMDMuNiwxNDIuN3ogTTEwMS45LDkwLjdcclxuXHRcdGMwLjEsMCwwLjMsMCwwLjYsMGMxLjMsMC4zLDIuNCwxLjQsMywyLjlsMTcuNSw0Mi4yYzAuNywxLjYsMC42LDMuMiwwLDQuMmMtMC40LDAuNi0wLjgsMS0xLjYsMWwtMi40LDAuMWwtMTkuOC00OWwxLjQtMS4zXHJcblx0XHRDMTAxLDkwLjgsMTAxLjUsOTAuNywxMDEuOSw5MC43eiBNOTUuOSw5MS43bC03LjUsNi44Yy0yLjEtNi40LTIuMS0xNC0yLjEtMjAuOXYtMS4zYzAtMS45LDAuMS0zLjYsMC4zLTUuNWw1LjQsMS40XHJcblx0XHRjMCwwLjMsMCwwLjQsMCwwLjdDOTIsNzkuMSw5My4zLDg1LjIsOTUuOSw5MS43eiBNMTQ3LjEsMjAuNWMtMjMuMywwLTQzLjIsMTMuOS01MS4zLDMzLjJsLTQuNC0xLjJjOS4zLTIwLjgsMzAuOC0zNS41LDU1LjctMzUuNVxyXG5cdFx0czQ2LjMsMTQuNyw1NS43LDM1LjdsLTQuNCwxLjJDMTkwLjMsMzQuNCwxNzAuNCwyMC41LDE0Ny4xLDIwLjV6IE0xNzEuMiwxNDAuMmMtMC43LTEuMi0wLjctMi43LDAtNC4ybDE3LjUtNDIuMlxyXG5cdFx0YzAuNy0xLjYsMS44LTIuNiwzLTIuOWMwLjEsMCwwLjQsMCwwLjYsMGMwLjQsMCwwLjgsMC4xLDEuMywwLjRsMS40LDEuM2wtMTkuOCw0OWwtMi40LTAuNEMxNzIuMSwxNDEuMiwxNzEuNywxNDAuOCwxNzEuMiwxNDAuMnpcclxuXHRcdCBNMjA3LjQsMTA4LjJsLTEzLjEsMzEuNmMtMC43LDEuOS0yLjQsMy4yLTMuNywzbC0xMi42LTFsNi41LTE2aDAuMWgtMC4xbDEyLjYtMzEuMmw5LjcsOC44QzIwOCwxMDQuMywyMDguMSwxMDYuMywyMDcuNCwxMDguMnpcclxuXHRcdCBNMTk4LjIsOTEuN2MyLjctNi41LDQtMTIuNiw0LTE4LjhjMC0wLjMsMC0wLjQsMC0wLjdsNS40LTEuNGMwLjEsMS43LDAuMywzLjYsMC4zLDUuNXYxLjNjMCw2LjksMCwxNC43LTIuMSwyMC45TDE5OC4yLDkxLjd6XCIvPlxyXG4gICAgICA8cGF0aCBjbGFzc05hbWU9XCJzdDBcIiBkPVwiTTIxMywxODUuOGgtMjV2LTMuNWMwLTEuNS0xLjQtMi44LTMuMS0yLjhoLTd2LTEuNmMwLTQuMi0zLjgtNy42LTguNi03LjZoLTM1LjNjLTQuMywwLTcuOC0zLjEtNy44LTdcclxuXHRcdFx0YzAtMy44LDMuNS03LDcuOC03aDQ3LjljNC43LDAsOC42LTMuNCw4LjYtNy42di0zLjFjMC0wLjUtMC41LTAuOS0xLjEtMC45cy0xLjEsMC40LTEuMSwwLjl2My4xYzAsMy4xLTIuOSw1LjctNi40LDUuN2gtNDcuOVxyXG5cdFx0XHRjLTUuNSwwLTEwLDQtMTAsOC45YzAsNC45LDQuNSw4LjksMTAsOC45aDM1LjNjMy41LDAsNi40LDIuNiw2LjQsNS43djEuNmgtNC44Yy0xLjcsMC0zLjEsMS4yLTMuMSwyLjh2My41SDg0LjdcclxuXHRcdFx0Yy0yLjksMC01LjMsMi4xLTUuMyw0Ljd2NjEuOGMwLDIuNiwyLjQsNC43LDUuMyw0LjdIMjEzYzIuOSwwLDUuMy0yLjEsNS4zLTQuN3YtNjEuOEMyMTguMiwxODcuOSwyMTUuOSwxODUuOCwyMTMsMTg1Ljh6XHJcblx0XHRcdCBNMTY5LjksMTgyLjNjMC0wLjUsMC40LTAuOSwxLTAuOWgxMy45YzAuNSwwLDEsMC40LDEsMC45djMuNWgtMTUuOVYxODIuM3ogTTIxNi4xLDI1Mi4zYzAsMS41LTEuNCwyLjgtMy4yLDIuOEg4NC43XHJcblx0XHRcdGMtMS43LDAtMy4yLTEuMy0zLjItMi44di02MS44YzAtMS41LDEuNC0yLjgsMy4yLTIuOGg4NC4yYzAsMCwwLDAsMCwwYzAsMCwwLDAsMCwwaDE4YzAsMCwwLDAsMCwwYzAsMCwwLDAsMCwwaDI2XHJcblx0XHRcdGMxLjcsMCwzLjIsMS4zLDMuMiwyLjhWMjUyLjN6XCIvPlxyXG4gICAgICA8cGF0aCBjbGFzc05hbWU9XCJzdDBcIiBkPVwiTTIwNi4yLDE5NS42aC0xMy45Yy0wLjYsMC0xLjEsMC40LTEuMSwwLjl2MTIuM2MwLDAuNSwwLjUsMC45LDEuMSwwLjloMTMuOWMwLjYsMCwxLjEtMC40LDEuMS0wLjl2LTEyLjNcclxuXHRcdFx0QzIwNy4zLDE5NiwyMDYuOCwxOTUuNiwyMDYuMiwxOTUuNnogTTIwNS4yLDIwNy45aC0xMS44di0xMC40aDExLjhWMjA3Ljl6XCIvPlxyXG4gICAgICA8cGF0aCBjbGFzc05hbWU9XCJzdDBcIiBkPVwiTTE4MS41LDE5NS42aC0xMy45Yy0wLjYsMC0xLjEsMC40LTEuMSwwLjl2MTIuM2MwLDAuNSwwLjUsMC45LDEuMSwwLjloMTMuOWMwLjYsMCwxLjEtMC40LDEuMS0wLjl2LTEyLjNcclxuXHRcdFx0QzE4Mi42LDE5NiwxODIuMSwxOTUuNiwxODEuNSwxOTUuNnogTTE4MC41LDIwNy45aC0xMS44di0xMC40aDExLjhWMjA3Ljl6XCIvPlxyXG4gICAgICA8cGF0aCBjbGFzc05hbWU9XCJzdDBcIiBkPVwiTTE0Mi45LDIwOS44aDEzLjljMC42LDAsMS4xLTAuNCwxLjEtMC45di0xMi4zYzAtMC41LTAuNS0wLjktMS4xLTAuOWgtMTMuOWMtMC42LDAtMS4xLDAuNC0xLjEsMC45djEyLjNcclxuXHRcdFx0QzE0MS45LDIwOS40LDE0Mi4zLDIwOS44LDE0Mi45LDIwOS44eiBNMTQ0LDE5Ny41aDExLjh2MTAuNEgxNDRWMTk3LjV6XCIvPlxyXG4gICAgICA8cGF0aCBjbGFzc05hbWU9XCJzdDBcIiBkPVwiTTExOC4yLDIwOS44aDEzLjljMC42LDAsMS4xLTAuNCwxLjEtMC45di0xMi4zYzAtMC41LTAuNS0wLjktMS4xLTAuOWgtMTMuOWMtMC42LDAtMS4xLDAuNC0xLjEsMC45djEyLjNcclxuXHRcdFx0QzExNy4yLDIwOS40LDExNy42LDIwOS44LDExOC4yLDIwOS44eiBNMTE5LjMsMTk3LjVIMTMxdjEwLjRoLTExLjhWMTk3LjV6XCIvPlxyXG4gICAgICA8cGF0aCBjbGFzc05hbWU9XCJzdDBcIiBkPVwiTTEwNy40LDE5NS42SDkzLjVjLTAuNiwwLTEuMSwwLjQtMS4xLDAuOXYxMi4zYzAsMC41LDAuNSwwLjksMS4xLDAuOWgxMy45YzAuNiwwLDEuMS0wLjQsMS4xLTAuOXYtMTIuM1xyXG5cdFx0XHRDMTA4LjUsMTk2LDEwOCwxOTUuNiwxMDcuNCwxOTUuNnogTTEwNi4zLDIwNy45SDk0LjZ2LTEwLjRoMTEuOFYyMDcuOXpcIi8+XHJcbiAgICAgIDxwYXRoIGNsYXNzTmFtZT1cInN0MFwiIGQ9XCJNMjA2LjIsMjE0LjNoLTEzLjljLTAuNiwwLTEuMSwwLjQtMS4xLDAuOXYxMi4zYzAsMC41LDAuNSwwLjksMS4xLDAuOWgxMy45YzAuNiwwLDEuMS0wLjQsMS4xLTAuOXYtMTIuM1xyXG5cdFx0XHRDMjA3LjMsMjE0LjcsMjA2LjgsMjE0LjMsMjA2LjIsMjE0LjN6IE0yMDUuMiwyMjYuNmgtMTEuOHYtMTAuNGgxMS44VjIyNi42elwiLz5cclxuICAgICAgPHBhdGggY2xhc3NOYW1lPVwic3QwXCIgZD1cIk0xODEuNSwyMTQuM2gtMTMuOWMtMC42LDAtMS4xLDAuNC0xLjEsMC45djEyLjNjMCwwLjUsMC41LDAuOSwxLjEsMC45aDEzLjljMC42LDAsMS4xLTAuNCwxLjEtMC45di0xMi4zXHJcblx0XHRcdEMxODIuNiwyMTQuNywxODIuMSwyMTQuMywxODEuNSwyMTQuM3ogTTE4MC41LDIyNi42aC0xMS44di0xMC40aDExLjhWMjI2LjZ6XCIvPlxyXG4gICAgICA8cGF0aCBjbGFzc05hbWU9XCJzdDBcIiBkPVwiTTE0Mi45LDIyOC41aDEzLjljMC42LDAsMS4xLTAuNCwxLjEtMC45di0xMi4zYzAtMC41LTAuNS0wLjktMS4xLTAuOWgtMTMuOWMtMC42LDAtMS4xLDAuNC0xLjEsMC45djEyLjNcclxuXHRcdFx0QzE0MS45LDIyOC4xLDE0Mi4zLDIyOC41LDE0Mi45LDIyOC41eiBNMTQ0LDIxNi4yaDExLjh2MTAuNEgxNDRWMjE2LjJ6XCIvPlxyXG4gICAgICA8cGF0aCBjbGFzc05hbWU9XCJzdDBcIiBkPVwiTTExOC4yLDIyOC41aDEzLjljMC42LDAsMS4xLTAuNCwxLjEtMC45di0xMi4zYzAtMC41LTAuNS0wLjktMS4xLTAuOWgtMTMuOWMtMC42LDAtMS4xLDAuNC0xLjEsMC45djEyLjNcclxuXHRcdFx0QzExNy4yLDIyOC4xLDExNy42LDIyOC41LDExOC4yLDIyOC41eiBNMTE5LjMsMjE2LjJIMTMxdjEwLjRoLTExLjhWMjE2LjJ6XCIvPlxyXG4gICAgICA8cGF0aCBjbGFzc05hbWU9XCJzdDBcIiBkPVwiTTEwNy40LDIxNC4zSDkzLjVjLTAuNiwwLTEuMSwwLjQtMS4xLDAuOXYxMi4zYzAsMC41LDAuNSwwLjksMS4xLDAuOWgxMy45YzAuNiwwLDEuMS0wLjQsMS4xLTAuOXYtMTIuM1xyXG5cdFx0XHRDMTA4LjUsMjE0LjcsMTA4LDIxNC4zLDEwNy40LDIxNC4zeiBNMTA2LjMsMjI2LjZIOTQuNnYtMTAuNGgxMS44VjIyNi42elwiLz5cclxuICAgICAgPHBhdGggY2xhc3NOYW1lPVwic3QwXCIgZD1cIk0yMDYuMiwyMzNoLTEzLjljLTAuNiwwLTEuMSwwLjQtMS4xLDAuOXYxMi4zYzAsMC41LDAuNSwwLjksMS4xLDAuOWgxMy45YzAuNiwwLDEuMS0wLjQsMS4xLTAuOXYtMTIuM1xyXG5cdFx0XHRDMjA3LjMsMjMzLjQsMjA2LjgsMjMzLDIwNi4yLDIzM3ogTTIwNS4yLDI0NS4zaC0xMS44di0xMC40aDExLjhWMjQ1LjN6XCIvPlxyXG4gICAgICA8cGF0aCBjbGFzc05hbWU9XCJzdDBcIiBkPVwiTTEwNy40LDIzM0g5My41Yy0wLjYsMC0xLjEsMC40LTEuMSwwLjl2MTIuM2MwLDAuNSwwLjUsMC45LDEuMSwwLjloMTMuOWMwLjYsMCwxLjEtMC40LDEuMS0wLjl2LTEyLjNcclxuXHRcdFx0QzEwOC41LDIzMy40LDEwOCwyMzMsMTA3LjQsMjMzeiBNMTA2LjMsMjQ1LjNIOTQuNnYtMTAuNGgxMS44VjI0NS4zelwiLz5cclxuICAgICAgPHBhdGggY2xhc3NOYW1lPVwic3QwXCIgZD1cIk0xODEuNSwyMzNoLTY1LjRjLTAuNiwwLTEuMSwwLjQtMS4xLDAuOXYxMi4zYzAsMC41LDAuNSwwLjksMS4xLDAuOWg2NS40YzAuNiwwLDEuMS0wLjQsMS4xLTAuOXYtMTIuM1xyXG5cdFx0XHRDMTgyLjYsMjMzLjQsMTgyLjEsMjMzLDE4MS41LDIzM3ogTTE4MC41LDI0NS4zaC02My4zdi0xMC40aDYzLjNWMjQ1LjN6XCIvPlxyXG4gICAgXHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgc3ZnIHtcclxuICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgIGZpbGw6ICR7Y29sb3JzLnByaW1hcnl9O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuc3QwIHtcclxuICAgICAgICBmaWxsOiB3aGl0ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLyogTWVkaWEgcXVlcmllcyAqL1xyXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNDkwcHgpe1xyXG4gICAgICAgIHN2ZyB7XHJcbiAgICAgICAgICB3aWR0aDogODBweFxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICBgfTwvc3R5bGU+XHJcbiAgICBcclxuICAgIFxyXG4gICAgXHJcbiAgICA8L3N2Zz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvZ287XHJcbiIsImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBHbG9iYWxDb250ZXh0fSBmcm9tICcuLi9jb250ZXh0L0dsb2JhbENvbnRleHQnO1xyXG5pbXBvcnQgVXNlclNlYXJjaCBmcm9tICcuL1VzZXJTZWFyY2gnO1xyXG5pbXBvcnQgY29sb3JzIGZyb20gJy4uL2Nzcy12YXJpYWJsZXMvY29sb3JzJ1xyXG5pbXBvcnQgTG9nbyBmcm9tICcuL0xvZ28nO1xyXG5cclxuXHJcbmNvbnN0IE5hdmJhciA9ICgpID0+IHtcclxuXHJcbiAgY29uc3QgeyBhdXRoU3RhdGUsIGN1cnJlbnRVc2VyLCBmZXRjaFByb2ZpbGVVc2VyLCBsb2dvdXQgfSA9IHVzZUNvbnRleHQoR2xvYmFsQ29udGV4dCk7XHJcblxyXG4gIGNvbnN0IGxvZ291dEhhbmRsZXIgPSAoKSA9PiB7XHJcbiAgICBsb2dvdXQoKTtcclxuICB9O1xyXG4gIFxyXG4gIGNvbnN0IHNlYXJjaFVzZXJIYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coJ3NlYXJjaFVzZXJIYW5kbGVyIGNhbGxlZCcpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgcHJvZmlsZU5hdkNsaWNrSGFuZGxlciA9ICgpID0+IHtcclxuICAgIGZldGNoUHJvZmlsZVVzZXIoY3VycmVudFVzZXIuaWQsIGZhbHNlKTtcclxuICAgIGhhbWJ1cmdlckhhbmRsZXIoKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbWJ1cmdlckhhbmRsZXIgPSAoKSA9PiB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGFtYnVyZ2VyJykuY2xhc3NMaXN0LnRvZ2dsZSgnb3BlbicpO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hdi1tZW51JykuY2xhc3NMaXN0LnRvZ2dsZSgnZHJvcGRvd24nKTtcclxuICB9XHJcbiAgXHJcblxyXG4gIHJldHVybiAoICAgIFxyXG4gICAgICA8bmF2IGlkPVwibmF2YmFyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgIDxkaXYgaWQ9XCJuYXYtY29udGVudFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGlkPVwiYnJhbmRcIj5cclxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICAgIDxoMT5Db2RlVHVuZXM8L2gxPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJsb2dvXCI+XHJcbiAgICAgICAgICAgICAgPExvZ28vPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxVc2VyU2VhcmNoIC8+XHJcblxyXG4gICAgICAgICAgICA8dWwgaWQ9XCJuYXYtbWVudVwiPlxyXG4gICAgICAgICAgICB7YXV0aFN0YXRlLmF1dGhlbnRpY2F0ZWQgJiYgY3VycmVudFVzZXIgIT09IG51bGwgJiZcclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9maWxlL1t1c2VySWRdXCIgYXM9e2AvcHJvZmlsZS8ke2N1cnJlbnRVc2VyLmlkfWB9PlxyXG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCIgb25DbGljaz17cHJvZmlsZU5hdkNsaWNrSGFuZGxlcn0+XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS11c2VyXCI+PC9pPiBcclxuICAgICAgICAgICAgICAgIFByb2ZpbGVcclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL2Fib3V0XCI+XHJcbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIiBvbkNsaWNrPXtoYW1idXJnZXJIYW5kbGVyfT5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWluZm9cIj48L2k+IFxyXG4gICAgICAgICAgICAgICAgQWJvdXRcclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgeyFhdXRoU3RhdGUuYXV0aGVudGljYXRlZCAmJiBcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2F1dGhcIj5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCIgb25DbGljaz17aGFtYnVyZ2VySGFuZGxlcn0+XHJcbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXNpZ24taW5cIj48L2k+IFxyXG4gICAgICAgICAgICAgICAgICBMb2dpblxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2F1dGhcIj5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCIgb25DbGljaz17aGFtYnVyZ2VySGFuZGxlcn0+XHJcbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXVzZXItcGx1c1wiPjwvaT4gXHJcbiAgICAgICAgICAgICAgICAgIFJlZ2lzdGVyXHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB7YXV0aFN0YXRlLmF1dGhlbnRpY2F0ZWQgJiZcclxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIiBvbkNsaWNrPXtsb2dvdXRIYW5kbGVyfT5cclxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtc2lnbi1vdXRcIj48L2k+IFxyXG4gICAgICAgICAgICAgICAgICBMb2dvdXRcclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJoYW1idXJnZXJcIiBvbkNsaWNrPXtoYW1idXJnZXJIYW5kbGVyfT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmVcIiBpZD1cImxpbmUxXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaW5lXCIgaWQ9XCJsaW5lMlwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGluZVwiIGlkPVwibGluZTNcIj48L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuXHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIFxyXG4gICAgICAgICAgI25hdmJhciB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEuNXJlbSAwO1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICAgICAgICAgIC8qIG1hcmdpbi1ib3R0b206IDJyZW07ICovXHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICR7Y29sb3JzLmdyYWRpZW50fTtcclxuICAgICAgICAgICAgLyogY29sb3I6IHdoaXRlOyAqL1xyXG4gICAgICAgICAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjOTNmZmZiOyAqL1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgI25hdi1jb250ZW50IHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgI25hdi1tZW51IHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICNicmFuZCBoMSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4zcmVtO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5uYXYtaXRlbSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIDFyZW07XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IHRleHQtc2hhZG93IDAuMnM7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLm5hdi1pdGVtOmhvdmVyIHtcclxuICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDBweCAwcHggOHB4IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBpIHtcclxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAjc2VhcmNoIHtcclxuICAgICAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAjc2VhcmNoYmFye1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBsYWJlbCB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgdG9wOiAxMHB4O1xyXG4gICAgICAgICAgICBsZWZ0OiAxMnB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAjbG9nbyB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLyogTWVkaWEgcXVlcmllcyAqL1xyXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDExNTBweCl7XHJcbiAgICAgICAgICAgICNuYXYtY29udGVudCB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaDEge1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAycmVtO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAjbmF2LW1lbnUge1xyXG4gICAgICAgICAgICAgIC8qIHdpZHRoOiAzNXZ3OyAqL1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDExMDBweCkge1xyXG4gICAgICAgICAgICAjbmF2LWNvbnRlbnQge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiA5NyU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogOTUwcHgpIHtcclxuICAgICAgICAgICAgYm9keSB7XHJcbiAgICAgICAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAjbmF2YmFyIHtcclxuICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICNuYXYtbWVudSB7XHJcbiAgICAgICAgICAgICAgei1pbmRleDogMTAxO1xyXG4gICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgIHRvcDogMTAwJTtcclxuICAgICAgICAgICAgICByaWdodDogMHB4O1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAzM3Z3O1xyXG4gICAgICAgICAgICAgIGNsaXAtcGF0aDogY2lyY2xlKDBweCBhdCB0b3AgcmlnaHQpO1xyXG4gICAgICAgICAgICAgIHRyYW5zaXRpb246IGNsaXAtcGF0aCAwLjdzIGVhc2U7XHJcbiAgICAgICAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAtMTFweCAxMHB4IDE5cHggLTEwcHggcmdiYSgwLDAsMCwwLjI3KTtcclxuICAgICAgICAgICAgICAtbW96LWJveC1zaGFkb3c6IC0xMXB4IDEwcHggMTlweCAtMTBweCByZ2JhKDAsMCwwLDAuMjcpO1xyXG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6IC0xMXB4IDEwcHggMTlweCAtMTBweCByZ2JhKDAsMCwwLDAuMjcpO1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICR7Y29sb3JzLnByaW1hcnl9O1xyXG4gICAgICAgICAgICAgIC8qIG9wYWNpdHk6IDAuOTsgKi9cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgI25hdi1tZW51LmRyb3Bkb3duIHtcclxuICAgICAgICAgICAgICBjbGlwLXBhdGg6IGNpcmNsZSgxNTAlIGF0IHRvcCByaWdodCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5uYXYtaXRlbSB7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMnJlbSAzcmVtO1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZjZiOGQ7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpIHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxLjVyZW07XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICAgICAgICAgICAgLyogYmFja2dyb3VuZDogYmxhY2s7ICovXHJcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMC41cmVtO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAubmF2LWl0ZW06aG92ZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAke2NvbG9ycy5zZWNvbmRhcnl9O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAubGluZSB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDMwcHg7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiAzcHg7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiA1cHg7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCBlYXNlIDAuNXM7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICNoYW1idXJnZXIge1xyXG4gICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgI2hhbWJ1cmdlci5vcGVuICNsaW5lMSB7XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKSB0cmFuc2xhdGVZKDExLjVweCkgc2NhbGVYKDAuOSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICNoYW1idXJnZXIub3BlbiAjbGluZTJ7XHJcbiAgICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgI2hhbWJ1cmdlci5vcGVuICNsaW5lM3tcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZykgdHJhbnNsYXRlWSgtMTEuNXB4KSBzY2FsZVgoMC45KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzUwcHgpIHtcclxuICAgICAgICAgICAgI21haW4tc2VhcmNoYmFyIHtcclxuICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNjkwcHgpIHtcclxuICAgICAgICAgICAgI21haW4tc2VhcmNoYmFyIHtcclxuICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICNuYXYtbWVudSB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDQwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgICAgICAgICAjYnJhbmQge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICNsb2dvIHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNTcwcHgpIHtcclxuICAgICAgICAgICAgI25hdi1tZW51IHtcclxuICAgICAgICAgICAgICB3aWR0aDogNDUlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XHJcbiAgICAgICAgICAgICNuYXYtbWVudSB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNDUwcHgpIHtcclxuICAgICAgICAgICAgI25hdi1tZW51IHtcclxuICAgICAgICAgICAgICB3aWR0aDogNjAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDM3NXB4KSB7XHJcbiAgICAgICAgICAgIC5uYXYtaXRlbSB7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMnJlbSAycmVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgIFxyXG5cclxuICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgIDwvbmF2PlxyXG4gICAgLy8gKX1cclxuICAgIC8vIDwvR2xvYmFsQ29udGV4dC5Db25zdW1lcj5cclxuICApXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZiYXI7XHJcbiIsImltcG9ydCB7IHVzZVN0YXRlLCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgVXNlclNlYXJjaEJhciBmcm9tICcuL1VzZXJTZWFyY2hCYXInO1xyXG5pbXBvcnQgeyBHbG9iYWxDb250ZXh0IH0gZnJvbSAnLi4vY29udGV4dC9HbG9iYWxDb250ZXh0JztcclxuXHJcblxyXG5jb25zdCBVc2VyU2VhcmNoID0gKCkgPT4ge1xyXG4gIFxyXG4gIGNvbnN0IFtmaWx0ZXJlZFVzZXJzLCBzZXRGaWx0ZXJlZFVzZXJzXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgY29uc3QgW3NlYXJjaE1vZGUsIHNldFNlYXJjaE1vZGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIFxyXG4gIGNvbnN0IHsgZmV0Y2hQcm9maWxlVXNlciB9ID0gdXNlQ29udGV4dChHbG9iYWxDb250ZXh0KTtcclxuXHJcbiAgY29uc3QgW3NlYXJjaElucHV0LCBzZXRTZWFyY2hJbnB1dF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgXHJcbiAgY29uc3QgdXNlckNsaWNrSGFuZGxlciA9IChpZCkgPT4ge1xyXG5cclxuICAgIGZldGNoUHJvZmlsZVVzZXIoaWQsIGZhbHNlKTtcclxuICAgIFxyXG4gICAgLy8gSGlkZSBkcm9wZG93blxyXG4gICAgc2V0U2VhcmNoTW9kZShmYWxzZSlcclxuXHJcbiAgICAvLyBDbGVhciB0aGUgc2VhcmNoIGJhclxyXG4gICAgc2V0U2VhcmNoSW5wdXQoJycpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgY2hlY2tTZWFyY2hNb2RlID0gKGlucHV0KSA9PiB7XHJcbiAgICBpZiAoaW5wdXQgIT09ICcnKSB7XHJcbiAgICAgIHNldFNlYXJjaE1vZGUodHJ1ZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRTZWFyY2hNb2RlKGZhbHNlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBpZD1cInVzZXItc2VhcmNoXCI+XHJcbiAgICAgIDxVc2VyU2VhcmNoQmFyIGNoZWNrU2VhcmNoTW9kZT17Y2hlY2tTZWFyY2hNb2RlfSBwbGFjZWhvbGRlcj0nU2VhcmNoIGZvciB1c2VyJyBzZWFyY2hNb2RlPSd1c2VyJyBzZXRGaWx0ZXJlZFVzZXJzPXtzZXRGaWx0ZXJlZFVzZXJzfSBzZWFyY2hJbnB1dD17c2VhcmNoSW5wdXR9IHNldFNlYXJjaElucHV0PXtzZXRTZWFyY2hJbnB1dH0vPlxyXG4gICAgICB7IHNlYXJjaE1vZGUgJiZcclxuICAgICAgPGRpdiBpZD1cImRyb3Bkb3duXCI+XHJcbiAgICAgICAgPGRpdiBpZD1cInNlYXJjaC1yZXN1bHRzXCI+XHJcbiAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgIHtmaWx0ZXJlZFVzZXJzLm1hcCh1c2VyID0+IChcclxuICAgICAgICAgICAgICA8bGkga2V5PXt1c2VyLmlkfT5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvZmlsZS9bdXNlcklkXVwiIGFzPXtgL3Byb2ZpbGUvJHt1c2VyLmlkfWB9PlxyXG4gICAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXt1c2VyQ2xpY2tIYW5kbGVyLmJpbmQodGhpcywgdXNlci5pZCl9Pnt1c2VyLm5hbWV9PC9hPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICkpfVxyXG5cclxuICAgICAgICAgICAge2ZpbHRlcmVkVXNlcnMubGVuZ3RoID09PSAwICYmIFxyXG4gICAgICAgICAgICAgIDxsaT5ObyBVc2VycyBGb3VuZDwvbGk+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB9XHJcblxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgIFxyXG4gICAgICAgICN1c2VyLXNlYXJjaCB7XHJcbiAgICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgICAgLyogcG9zaXRpb246IHJlbGF0aXZlOyAqL1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgI2Ryb3Bkb3duIHtcclxuICAgICAgICAgIHdpZHRoOiA3OSU7XHJcbiAgICAgICAgICAvKiBwb3NpdGlvbjogcmVsYXRpdmU7ICovXHJcbiAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICB6LWluZGV4OiAzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAjc2VhcmNoLXJlc3VsdHMge1xyXG4gICAgICAgICAgd2lkdGg6IDQ0MHB4O1xyXG4gICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgICAgICBjb2xvcjogcHVycGxlO1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMC41cmVtOyBcclxuICAgICAgICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICBib3gtc2hhZG93OiAxMHB4IDEwcHggNDVweCAtMTBweCByZ2JhKDY2LDksNjYsMC43NCk7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAvKiB0b3A6IC0xMHB4OyAqL1xyXG4gICAgICAgICAgLyogei1pbmRleDogMjAwOyAqL1xyXG5cclxuICAgICAgICAgIC8qIGxlZnQ6IDQxMHB4OyAqL1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdWwge1xyXG4gICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qIE1lZGlhIHF1ZXJpZXMgKi9cclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDExNTBweCkge1xyXG4gICAgICAgICNzZWFyY2gtcmVzdWx0cyB7XHJcbiAgICAgICAgICB3aWR0aDogNDAwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IFxyXG5cclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDExMDBweCkge1xyXG4gICAgICAgICNzZWFyY2gtcmVzdWx0cyB7XHJcbiAgICAgICAgICB3aWR0aDogMzh2dyA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogOTUwcHgpIHtcclxuICAgICAgICAjc2VhcmNoLXJlc3VsdHMge1xyXG4gICAgICAgICAgcmlnaHQ6IDE3MHB4O1xyXG4gICAgICAgICAgd2lkdGg6IDQ2dnc7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IFxyXG5cclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDkwMHB4KSB7XHJcbiAgICAgICAgI3NlYXJjaC1yZXN1bHRzIHtcclxuICAgICAgICAgIHJpZ2h0OiAxNDBweDtcclxuICAgICAgICAgIHdpZHRoOiA0NnZ3O1xyXG4gICAgICAgIH1cclxuICAgICAgfSBcclxuICAgICAgXHJcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5MDBweCkge1xyXG4gICAgICAgICNzZWFyY2gtcmVzdWx0cyB7XHJcbiAgICAgICAgICByaWdodDogMTIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNzQwcHgpIHtcclxuICAgICAgICAjc2VhcmNoLXJlc3VsdHMge1xyXG4gICAgICAgICAgcmlnaHQ6IDEwMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfSBcclxuXHJcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2NjBweCkge1xyXG4gICAgICAgICNzZWFyY2gtcmVzdWx0cyB7XHJcbiAgICAgICAgICByaWdodDogNzBweDtcclxuICAgICAgICB9XHJcbiAgICAgIH0gXHJcblxyXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgICAgICAjdXNlci1zZWFyY2gge1xyXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiA0cmVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgI3NlYXJjaC1yZXN1bHRzIHtcclxuICAgICAgICAgIHJpZ2h0OiAxMDdweDtcclxuICAgICAgICAgIHdpZHRoOiA1OHZ3O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDU1MHB4KSB7XHJcbiAgICAgICAgI3VzZXItc2VhcmNoIHtcclxuICAgICAgICAgIHdpZHRoOiA1NSU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAjc2VhcmNoLXJlc3VsdHMge1xyXG4gICAgICAgICAgd2lkdGg6IDYydnc7XHJcbiAgICAgICAgICByaWdodDogOTFweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0OTBweCkge1xyXG4gICAgICAgICN1c2VyLXNlYXJjaCB7XHJcbiAgICAgICAgICB3aWR0aDogNjAlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ1MHB4KSB7XHJcbiAgICAgICAgI3NlYXJjaC1yZXN1bHRzIHtcclxuICAgICAgICAgIHJpZ2h0OiA4NXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQyMHB4KSB7XHJcbiAgICAgICAgI3VzZXItc2VhcmNoIHtcclxuICAgICAgICAgIHdpZHRoOiA2MCU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICNzZWFyY2gtcmVzdWx0cyB7XHJcbiAgICAgICAgICByaWdodDogMTF2dztcclxuICAgICAgICAgIHdpZHRoOiA3NnZ3O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuXHJcbiAgICAgIFxyXG4gICAgICBgfTwvc3R5bGU+XHJcblxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVc2VyU2VhcmNoO1xyXG4iLCJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlQ29udGV4dCwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBHbG9iYWxDb250ZXh0IH0gZnJvbSAnLi4vY29udGV4dC9HbG9iYWxDb250ZXh0JztcclxuXHJcbmNvbnN0IFVzZXJTZWFyY2hiYXIgPSAoeyBwbGFjZWhvbGRlciwgc2V0RmlsdGVyZWRVc2VycywgY2hlY2tTZWFyY2hNb2RlLCBzZWFyY2hJbnB1dCwgc2V0U2VhcmNoSW5wdXR9KSA9PiB7XHJcblxyXG4gIGNvbnN0IHsgYWxsVXNlcnMgfSA9IHVzZUNvbnRleHQoR2xvYmFsQ29udGV4dCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyBhY3Rpb24gb24gdXBkYXRlIG9mIHNlYXJjaElucHV0XHJcbiAgICAgIGNvbnN0IHVzZXJzID0gYWxsVXNlcnMuZmlsdGVyKHVzZXIgPT4ge1xyXG4gICAgICAgIHJldHVybiB1c2VyLm5hbWUuc3Vic3RyKDAsIHNlYXJjaElucHV0Lmxlbmd0aCkudG9VcHBlckNhc2UoKSA9PT0gc2VhcmNoSW5wdXQudG9VcHBlckNhc2UoKVxyXG4gICAgICB9KVxyXG5cclxuICAgICAgc2V0RmlsdGVyZWRVc2Vycyh1c2VycylcclxuICB9LCBbc2VhcmNoSW5wdXRdKTtcclxuXHJcbiAgY29uc3Qgb25DaGFuZ2VIYW5kbGVyID0gKGUpID0+IHtcclxuICAgIHNldFNlYXJjaElucHV0KGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIGNoZWNrU2VhcmNoTW9kZShlLnRhcmdldC52YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBvbkZvcm1TdWJtaXQgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIC8vIENhbGwgdGhlIHJlbGV2YW50IHN1Ym1pdCBoYW5kbGVyIGZyb20gcHJvcHNcclxuICAgIC8vIHN1Ym1pdEhhbmRsZXIoc2VhcmNoSW5wdXQpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgaWQ9XCJtYWluLXNlYXJjaGJhclwiPlxyXG4gICAgICA8Zm9ybSBvblN1Ym1pdD17b25Gb3JtU3VibWl0fSBhdXRvQ29tcGxldGU9XCJvZmZcIj5cclxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInNlYXJjaC1pbnB1dFwiPlxyXG4gICAgICAgICAgPHN2ZyBpZD1cInNlYXJjaC1pY29uXCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgd2lkdGg9XCIyNFwiPjxwYXRoIGQ9XCJNMTUuNSAxNGgtLjc5bC0uMjgtLjI3QzE1LjQxIDEyLjU5IDE2IDExLjExIDE2IDkuNSAxNiA1LjkxIDEzLjA5IDMgOS41IDNTMyA1LjkxIDMgOS41IDUuOTEgMTYgOS41IDE2YzEuNjEgMCAzLjA5LS41OSA0LjIzLTEuNTdsLjI3LjI4di43OWw1IDQuOTlMMjAuNDkgMTlsLTQuOTktNXptLTYgMEM3LjAxIDE0IDUgMTEuOTkgNSA5LjVTNy4wMSA1IDkuNSA1IDE0IDcuMDEgMTQgOS41IDExLjk5IDE0IDkuNSAxNHpcIiAvPjxwYXRoIGQ9XCJNMCAwaDI0djI0SDB6XCIgZmlsbD1cIm5vbmVcIiAvPjwvc3ZnPlxyXG4gICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInNlYXJjaC1pbnB1dFwiIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn0gb25DaGFuZ2U9e29uQ2hhbmdlSGFuZGxlcn0gdmFsdWU9e3NlYXJjaElucHV0fSAvPlxyXG4gICAgICA8L2Zvcm0+XHJcblxyXG5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG5cclxuICAgICAgICAgIGxhYmVsIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3A6IDhweDtcclxuICAgICAgICAgICAgbGVmdDogMTJweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgI21haW4tc2VhcmNoYmFyIHtcclxuICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIHdpZHRoOiA3NSU7XHJcbiAgICAgICAgICAgIGZvbnQ6IGluaGVyaXQ7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgI21haW4tc2VhcmNoYmFyIGZvcm0ge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICNtYWluLXNlYXJjaGJhciBpbnB1dCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyM3B4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwLjZyZW0gMC41cmVtIDAuNXJlbSAyLjVyZW07XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgI21haW4tc2VhcmNoYmFyIGlucHV0IDpmb2N1cyB7XHJcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLyogTWVkaWEgcXVlcmllcyAqL1xyXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDk1MHB4KXtcclxuICAgICAgICAgICAgI21haW4tc2VhcmNoYmFyIHtcclxuICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2NjBweCl7XHJcbiAgICAgICAgICAgICNtYWluLXNlYXJjaGJhciB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KXtcclxuICAgICAgICAgICAgI21haW4tc2VhcmNoYmFyIHtcclxuICAgICAgICAgICAgICB3aWR0aDogMTEwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0MjBweCkge1xyXG4gICAgICAgICAgICAjbWFpbi1zZWFyY2hiYXIge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMjAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDM3MHB4KSB7XHJcbiAgICAgICAgICAgICNtYWluLXNlYXJjaGJhciB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDEzMCU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICNtYWluLXNlYXJjaGJhciBpbnB1dCB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxhYmVsIHtcclxuICAgICAgICAgICAgICB0b3A6IDdweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgXHJcbiAgXHJcbiAgXHJcbiAgYH08L3N0eWxlPlxyXG5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXNlclNlYXJjaGJhcjtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgbW9uZ29VUkk6ICdtb25nb2RiOi8vZ3JlZW5wYXVsbzphZG1pbjIwMjBAZHMxMjE5OTYubWxhYi5jb206MjE5OTYvY29kZXJzLWp1a2Vib3gtZGV2JyxcclxuICBZT1VUVUJFQVBJX0tFWTogJ0FJemFTeURXVEs1ZWJxWEdIdzNONEZTZHhFX3FPMnYwTEVzMjhYbydcclxufSIsIi8vIEZpZ3VyZSBvdXQgd2hpY2ggc2V0IG9mIGNyZWRlbnRpYWxzIHRvIHJldHVyblxyXG5cclxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcclxuICAvLyB3ZSBhcmUgaW4gcHJvZHVjdGlvbiAtIHJldHVybiB0aGUgcHJvZCBzZXQgb2Yga2V5c1xyXG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9wcm9kJyk7XHJcbn0gZWxzZSB7XHJcbiAgLy8gd2UgYXJlIGluIGRldmVsb3BtZW50IC0gcmV0dXJuIHRoZSBkZXYgc2V0IG9mIGtleXNcclxuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGV2Jyk7XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgR2xvYmFsQ29udGV4dCB9IGZyb20gJy4vR2xvYmFsQ29udGV4dCc7XHJcbmltcG9ydCB7IEFuaW1hdGVQcmVzZW5jZSB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xyXG5cclxuY2xhc3MgQ29udGV4dFByb3ZpZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyB2YWx1ZSB9ID0gdGhpcy5wcm9wcztcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxHbG9iYWxDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt2YWx1ZX0+XHJcbiAgICAgICAgPEFuaW1hdGVQcmVzZW5jZSBleGl0QmVmb3JlRW50ZXIgPlxyXG4gICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XHJcbiAgICAgICAgPC9BbmltYXRlUHJlc2VuY2U+XHJcbiAgICAgIDwvR2xvYmFsQ29udGV4dC5Qcm92aWRlcj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb250ZXh0UHJvdmlkZXI7IiwiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlUmVkdWNlcn0gZnJvbSAncmVhY3QnO1xyXG4vLyBpbXBvcnQgQXBwUmVkdWNlciBmcm9tICcuL0FwcFJlZHVjZXInO1xyXG4vLyBpbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gJ0BhcG9sbG8vcmVhY3QtaG9va3MnO1xyXG5cclxuLy8gSW5pdGFsIFN0YXRlXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICBhdXRoZW50aWNhdGVkOiBmYWxzZSxcclxuICBhdXRoRGF0YTogbnVsbCxcclxuICB1c2VyOiBudWxsLFxyXG4gIHZpZGVvOiBudWxsLFxyXG4gIGNvbW1lbnQ6IG51bGwsXHJcbiAgLy8gbG9naW46ICgpID0+IHt9XHJcbn1cclxuXHJcbi8vIENyZWF0ZSBjb250ZXh0XHJcbmV4cG9ydCBjb25zdCBHbG9iYWxDb250ZXh0ID0gY3JlYXRlQ29udGV4dChpbml0aWFsU3RhdGUpO1xyXG5cclxuLy8gUHJvdmlkZXIgQ29tcG9uZW50XHJcbi8vIGV4cG9ydCBjb25zdCBHbG9iYWxQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuLy8gICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIoQXBwUmVkdWNlciwgaW5pdGlhbFN0YXRlKVxyXG5cclxuLy8gICByZXR1cm4gKFxyXG4vLyAgICAgPEdsb2JhbENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3tcclxuLy8gICAgICAgLy8gYXV0aGVudGljYXRlZDogc3RhdGUuYXV0aGVudGljYXRlZCxcclxuLy8gICAgICAgbG9naW46IGxvZ2luXHJcbi8vICAgICB9fT5cclxuLy8gICAgICAge2NoaWxkcmVufVxyXG4vLyAgICAgPC9HbG9iYWxDb250ZXh0LlByb3ZpZGVyPlxyXG4vLyAgIClcclxuLy8gfSIsImNvbnN0IGNvbG9ycyA9IHtcclxuICBwcmltYXJ5OiAnI2ZmNDE2YycsXHJcbiAgLy8gZ3JhZGllbnQ6ICdsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmZjQxNmMsICNmZjRiMmIpJyxcclxuICAvLyBncmFkaWVudDogJ2xpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2ZmNDE2YywgI2VlZmI0YSknLFxyXG4gIC8vIGdyYWRpZW50OiAnbGluZWFyLWdyYWRpZW50KDM3ZGVnLCAjZTUyZTcxIDUwJSwgI2ZmOGEwMCAxMDAlKScsXHJcbiAgLy8gZ3JhZGllbnQ6ICdsaW5lYXItZ3JhZGllbnQoMzdkZWcsICNlNTJlNzEgNTAlLCAjZmY4YTAwIDEwMCUpJyxcclxuICAvLyBncmFkaWVudDogJ2xpbmVhci1ncmFkaWVudCgzN2RlZywgcmdiYSgyNTUsIDY1LCAxMDgsIDEpIDUwJSwgcmdiYSgyMzgsIDI1NSwgMjAsIDEpIDEwMCUpJyxcclxuICBncmFkaWVudDogJ2xpbmVhci1ncmFkaWVudCgzN2RlZywgI2ZmNDE2YyA1MCUsICNlZWZmMTQgMTAwJSknLFxyXG4gIHJldmVyc2VHcmFkaWVudDogJ2xpbmVhci1ncmFkaWVudCgzN2RlZywgI2VlZmYxNCA3JSwgI2ZmNDE2YyA0NiUpJyxcclxuICBwaW5rR3JhZGVudDogJ2xpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2ZmNGIyYiwgI2ZmNDE2Yyk7JyxcclxuICByZXZlcnNlUGlua0dyYWRpZW50OiAnbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZmY0MTZjLCAjZmY0YjJiKTsnLFxyXG4gIHNlY29uZGFyeTogJyNmZjRiMmInLFxyXG4gIHRlcnRpYXJ5OiAnI2VlZmYxNCdcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29sb3JzOyIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiLi4vaGVscGVycy90eXBlb2ZcIik7XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsO1xuICB2YXIgY2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuXG4gIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgICByZXR1cm4gY2FjaGU7XG4gIH07XG5cbiAgcmV0dXJuIGNhY2hlO1xufVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHtcbiAgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkge1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgXCJkZWZhdWx0XCI6IG9ialxuICAgIH07XG4gIH1cblxuICB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTtcblxuICBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHtcbiAgICByZXR1cm4gY2FjaGUuZ2V0KG9iaik7XG4gIH1cblxuICB2YXIgbmV3T2JqID0ge307XG4gIHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgIHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsO1xuXG4gICAgICBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdPYmpba2V5XSA9IG9ialtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7XG5cbiAgaWYgKGNhY2hlKSB7XG4gICAgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTtcbiAgfVxuXG4gIHJldHVybiBuZXdPYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsImRlY2xhcmUgY29uc3QgX19ORVhUX0RBVEFfXzogYW55XG5cbmltcG9ydCBSZWFjdCwgeyBDaGlsZHJlbiB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgUHJlZmV0Y2hPcHRpb25zLCBOZXh0Um91dGVyIH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBleGVjT25jZSwgZ2V0TG9jYXRpb25PcmlnaW4gfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMnXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcidcbmltcG9ydCB7IGFkZEJhc2VQYXRoLCByZXNvbHZlSHJlZiB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuXG4vKipcbiAqIERldGVjdHMgd2hldGhlciBhIGdpdmVuIHVybCBpcyBmcm9tIHRoZSBzYW1lIG9yaWdpbiBhcyB0aGUgY3VycmVudCBwYWdlIChicm93c2VyIG9ubHkpLlxuICovXG5mdW5jdGlvbiBpc0xvY2FsKHVybDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIGNvbnN0IGxvY2F0aW9uT3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICBjb25zdCByZXNvbHZlZCA9IG5ldyBVUkwodXJsLCBsb2NhdGlvbk9yaWdpbilcbiAgcmV0dXJuIHJlc29sdmVkLm9yaWdpbiA9PT0gbG9jYXRpb25PcmlnaW5cbn1cblxudHlwZSBVcmwgPSBzdHJpbmcgfCBVcmxPYmplY3RcblxuZXhwb3J0IHR5cGUgTGlua1Byb3BzID0ge1xuICBocmVmOiBVcmxcbiAgYXM/OiBVcmxcbiAgcmVwbGFjZT86IGJvb2xlYW5cbiAgc2Nyb2xsPzogYm9vbGVhblxuICBzaGFsbG93PzogYm9vbGVhblxuICBwYXNzSHJlZj86IGJvb2xlYW5cbiAgcHJlZmV0Y2g/OiBib29sZWFuXG59XG5cbmxldCBjYWNoZWRPYnNlcnZlcjogSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcbmNvbnN0IGxpc3RlbmVycyA9IG5ldyBNYXA8RWxlbWVudCwgKCkgPT4gdm9pZD4oKVxuY29uc3QgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPVxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdy5JbnRlcnNlY3Rpb25PYnNlcnZlciA6IG51bGxcbmNvbnN0IHByZWZldGNoZWQ6IHsgW2NhY2hlS2V5OiBzdHJpbmddOiBib29sZWFuIH0gPSB7fVxuXG5mdW5jdGlvbiBnZXRPYnNlcnZlcigpOiBJbnRlcnNlY3Rpb25PYnNlcnZlciB8IHVuZGVmaW5lZCB7XG4gIC8vIFJldHVybiBzaGFyZWQgaW5zdGFuY2Ugb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgYWxyZWFkeSBjcmVhdGVkXG4gIGlmIChjYWNoZWRPYnNlcnZlcikge1xuICAgIHJldHVybiBjYWNoZWRPYnNlcnZlclxuICB9XG5cbiAgLy8gT25seSBjcmVhdGUgc2hhcmVkIEludGVyc2VjdGlvbk9ic2VydmVyIGlmIHN1cHBvcnRlZCBpbiBicm93c2VyXG4gIGlmICghSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cblxuICByZXR1cm4gKGNhY2hlZE9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKFxuICAgIChlbnRyaWVzKSA9PiB7XG4gICAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICAgIGlmICghbGlzdGVuZXJzLmhhcyhlbnRyeS50YXJnZXQpKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjYiA9IGxpc3RlbmVycy5nZXQoZW50cnkudGFyZ2V0KSFcbiAgICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nIHx8IGVudHJ5LmludGVyc2VjdGlvblJhdGlvID4gMCkge1xuICAgICAgICAgIGNhY2hlZE9ic2VydmVyLnVub2JzZXJ2ZShlbnRyeS50YXJnZXQpXG4gICAgICAgICAgbGlzdGVuZXJzLmRlbGV0ZShlbnRyeS50YXJnZXQpXG4gICAgICAgICAgY2IoKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0sXG4gICAgeyByb290TWFyZ2luOiAnMjAwcHgnIH1cbiAgKSlcbn1cblxuY29uc3QgbGlzdGVuVG9JbnRlcnNlY3Rpb25zID0gKGVsOiBFbGVtZW50LCBjYjogKCkgPT4gdm9pZCkgPT4ge1xuICBjb25zdCBvYnNlcnZlciA9IGdldE9ic2VydmVyKClcbiAgaWYgKCFvYnNlcnZlcikge1xuICAgIHJldHVybiAoKSA9PiB7fVxuICB9XG5cbiAgb2JzZXJ2ZXIub2JzZXJ2ZShlbClcbiAgbGlzdGVuZXJzLnNldChlbCwgY2IpXG4gIHJldHVybiAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbClcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxuICAgIH1cbiAgICBsaXN0ZW5lcnMuZGVsZXRlKGVsKVxuICB9XG59XG5cbmZ1bmN0aW9uIHByZWZldGNoKFxuICByb3V0ZXI6IE5leHRSb3V0ZXIsXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgb3B0aW9ucz86IFByZWZldGNoT3B0aW9uc1xuKTogdm9pZCB7XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykgcmV0dXJuXG4gIC8vIFByZWZldGNoIHRoZSBKU09OIHBhZ2UgaWYgYXNrZWQgKG9ubHkgaW4gdGhlIGNsaWVudClcbiAgLy8gV2UgbmVlZCB0byBoYW5kbGUgYSBwcmVmZXRjaCBlcnJvciBoZXJlIHNpbmNlIHdlIG1heSBiZVxuICAvLyBsb2FkaW5nIHdpdGggcHJpb3JpdHkgd2hpY2ggY2FuIHJlamVjdCBidXQgd2UgZG9uJ3RcbiAgLy8gd2FudCB0byBmb3JjZSBuYXZpZ2F0aW9uIHNpbmNlIHRoaXMgaXMgb25seSBhIHByZWZldGNoXG4gIHJvdXRlci5wcmVmZXRjaChocmVmLCBhcywgb3B0aW9ucykuY2F0Y2goKGVycikgPT4ge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAvLyByZXRocm93IHRvIHNob3cgaW52YWxpZCBVUkwgZXJyb3JzXG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH0pXG4gIC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4gIHByZWZldGNoZWRbaHJlZiArICclJyArIGFzXSA9IHRydWVcbn1cblxuZnVuY3Rpb24gbGlua0NsaWNrZWQoXG4gIGU6IFJlYWN0Lk1vdXNlRXZlbnQsXG4gIHJvdXRlcjogTmV4dFJvdXRlcixcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICByZXBsYWNlPzogYm9vbGVhbixcbiAgc2hhbGxvdz86IGJvb2xlYW4sXG4gIHNjcm9sbD86IGJvb2xlYW5cbik6IHZvaWQge1xuICBjb25zdCB7IG5vZGVOYW1lLCB0YXJnZXQgfSA9IGUuY3VycmVudFRhcmdldCBhcyBIVE1MQW5jaG9yRWxlbWVudFxuICBpZiAoXG4gICAgbm9kZU5hbWUgPT09ICdBJyAmJlxuICAgICgodGFyZ2V0ICYmIHRhcmdldCAhPT0gJ19zZWxmJykgfHxcbiAgICAgIGUubWV0YUtleSB8fFxuICAgICAgZS5jdHJsS2V5IHx8XG4gICAgICBlLnNoaWZ0S2V5IHx8XG4gICAgICAoZS5uYXRpdmVFdmVudCAmJiBlLm5hdGl2ZUV2ZW50LndoaWNoID09PSAyKSlcbiAgKSB7XG4gICAgLy8gaWdub3JlIGNsaWNrIGZvciBuZXcgdGFiIC8gbmV3IHdpbmRvdyBiZWhhdmlvclxuICAgIHJldHVyblxuICB9XG5cbiAgaWYgKCFpc0xvY2FsKGhyZWYpKSB7XG4gICAgLy8gaWdub3JlIGNsaWNrIGlmIGl0J3Mgb3V0c2lkZSBvdXIgc2NvcGUgKGUuZy4gaHR0cHM6Ly9nb29nbGUuY29tKVxuICAgIHJldHVyblxuICB9XG5cbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgLy8gIGF2b2lkIHNjcm9sbCBmb3IgdXJscyB3aXRoIGFuY2hvciByZWZzXG4gIGlmIChzY3JvbGwgPT0gbnVsbCkge1xuICAgIHNjcm9sbCA9IGFzLmluZGV4T2YoJyMnKSA8IDBcbiAgfVxuXG4gIC8vIHJlcGxhY2Ugc3RhdGUgaW5zdGVhZCBvZiBwdXNoIGlmIHByb3AgaXMgcHJlc2VudFxuICByb3V0ZXJbcmVwbGFjZSA/ICdyZXBsYWNlJyA6ICdwdXNoJ10oaHJlZiwgYXMsIHsgc2hhbGxvdyB9KS50aGVuKFxuICAgIChzdWNjZXNzOiBib29sZWFuKSA9PiB7XG4gICAgICBpZiAoIXN1Y2Nlc3MpIHJldHVyblxuICAgICAgaWYgKHNjcm9sbCkge1xuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgICAgZG9jdW1lbnQuYm9keS5mb2N1cygpXG4gICAgICB9XG4gICAgfVxuICApXG59XG5cbmZ1bmN0aW9uIExpbmsocHJvcHM6IFJlYWN0LlByb3BzV2l0aENoaWxkcmVuPExpbmtQcm9wcz4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAvLyBUaGlzIGhvb2sgaXMgaW4gYSBjb25kaXRpb25hbCBidXQgdGhhdCBpcyBvayBiZWNhdXNlIGBwcm9jZXNzLmVudi5OT0RFX0VOVmAgbmV2ZXIgY2hhbmdlc1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rc1xuICAgIGNvbnN0IGhhc1dhcm5lZCA9IFJlYWN0LnVzZVJlZihmYWxzZSlcbiAgICBpZiAocHJvcHMucHJlZmV0Y2ggJiYgIWhhc1dhcm5lZC5jdXJyZW50KSB7XG4gICAgICBoYXNXYXJuZWQuY3VycmVudCA9IHRydWVcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgJ05leHQuanMgYXV0by1wcmVmZXRjaGVzIGF1dG9tYXRpY2FsbHkgYmFzZWQgb24gdmlld3BvcnQuIFRoZSBwcmVmZXRjaCBhdHRyaWJ1dGUgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gTW9yZTogaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvcHJlZmV0Y2gtdHJ1ZS1kZXByZWNhdGVkJ1xuICAgICAgKVxuICAgIH1cbiAgfVxuICBjb25zdCBwID0gcHJvcHMucHJlZmV0Y2ggIT09IGZhbHNlXG5cbiAgY29uc3QgW2NoaWxkRWxtLCBzZXRDaGlsZEVsbV0gPSBSZWFjdC51c2VTdGF0ZTxFbGVtZW50PigpXG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgY29uc3QgcGF0aG5hbWUgPSAocm91dGVyICYmIHJvdXRlci5wYXRobmFtZSkgfHwgJy8nXG5cbiAgY29uc3QgeyBocmVmLCBhcyB9ID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgY29uc3QgcmVzb2x2ZWRIcmVmID0gcmVzb2x2ZUhyZWYocGF0aG5hbWUsIHByb3BzLmhyZWYpXG4gICAgcmV0dXJuIHtcbiAgICAgIGhyZWY6IHJlc29sdmVkSHJlZixcbiAgICAgIGFzOiBwcm9wcy5hcyA/IHJlc29sdmVIcmVmKHBhdGhuYW1lLCBwcm9wcy5hcykgOiByZXNvbHZlZEhyZWYsXG4gICAgfVxuICB9LCBbcGF0aG5hbWUsIHByb3BzLmhyZWYsIHByb3BzLmFzXSlcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChwICYmIEludGVyc2VjdGlvbk9ic2VydmVyICYmIGNoaWxkRWxtICYmIGNoaWxkRWxtLnRhZ05hbWUpIHtcbiAgICAgIC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4gICAgICBjb25zdCBpc1ByZWZldGNoZWQgPSBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhc11cbiAgICAgIGlmICghaXNQcmVmZXRjaGVkKSB7XG4gICAgICAgIHJldHVybiBsaXN0ZW5Ub0ludGVyc2VjdGlvbnMoY2hpbGRFbG0sICgpID0+IHtcbiAgICAgICAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgfSwgW3AsIGNoaWxkRWxtLCBocmVmLCBhcywgcm91dGVyXSlcblxuICBsZXQgeyBjaGlsZHJlbiwgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsIH0gPSBwcm9wc1xuICAvLyBEZXByZWNhdGVkLiBXYXJuaW5nIHNob3duIGJ5IHByb3BUeXBlIGNoZWNrLiBJZiB0aGUgY2hpbGRyZW4gcHJvdmlkZWQgaXMgYSBzdHJpbmcgKDxMaW5rPmV4YW1wbGU8L0xpbms+KSB3ZSB3cmFwIGl0IGluIGFuIDxhPiB0YWdcbiAgaWYgKHR5cGVvZiBjaGlsZHJlbiA9PT0gJ3N0cmluZycpIHtcbiAgICBjaGlsZHJlbiA9IDxhPntjaGlsZHJlbn08L2E+XG4gIH1cblxuICAvLyBUaGlzIHdpbGwgcmV0dXJuIHRoZSBmaXJzdCBjaGlsZCwgaWYgbXVsdGlwbGUgYXJlIHByb3ZpZGVkIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3JcbiAgY29uc3QgY2hpbGQ6IGFueSA9IENoaWxkcmVuLm9ubHkoY2hpbGRyZW4pXG4gIGNvbnN0IGNoaWxkUHJvcHM6IHtcbiAgICBvbk1vdXNlRW50ZXI/OiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgIG9uQ2xpY2s6IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgaHJlZj86IHN0cmluZ1xuICAgIHJlZj86IGFueVxuICB9ID0ge1xuICAgIHJlZjogKGVsOiBhbnkpID0+IHtcbiAgICAgIGlmIChlbCkgc2V0Q2hpbGRFbG0oZWwpXG5cbiAgICAgIGlmIChjaGlsZCAmJiB0eXBlb2YgY2hpbGQgPT09ICdvYmplY3QnICYmIGNoaWxkLnJlZikge1xuICAgICAgICBpZiAodHlwZW9mIGNoaWxkLnJlZiA9PT0gJ2Z1bmN0aW9uJykgY2hpbGQucmVmKGVsKVxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgY2hpbGQucmVmID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgIGNoaWxkLnJlZi5jdXJyZW50ID0gZWxcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgb25DbGljazogKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25DbGljayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjaGlsZC5wcm9wcy5vbkNsaWNrKGUpXG4gICAgICB9XG4gICAgICBpZiAoIWUuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICBsaW5rQ2xpY2tlZChlLCByb3V0ZXIsIGhyZWYsIGFzLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwpXG4gICAgICB9XG4gICAgfSxcbiAgfVxuXG4gIGlmIChwKSB7XG4gICAgY2hpbGRQcm9wcy5vbk1vdXNlRW50ZXIgPSAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyKGUpXG4gICAgICB9XG4gICAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCB7IHByaW9yaXR5OiB0cnVlIH0pXG4gICAgfVxuICB9XG5cbiAgLy8gSWYgY2hpbGQgaXMgYW4gPGE+IHRhZyBhbmQgZG9lc24ndCBoYXZlIGEgaHJlZiBhdHRyaWJ1dGUsIG9yIGlmIHRoZSAncGFzc0hyZWYnIHByb3BlcnR5IGlzXG4gIC8vIGRlZmluZWQsIHdlIHNwZWNpZnkgdGhlIGN1cnJlbnQgJ2hyZWYnLCBzbyB0aGF0IHJlcGV0aXRpb24gaXMgbm90IG5lZWRlZCBieSB0aGUgdXNlclxuICBpZiAocHJvcHMucGFzc0hyZWYgfHwgKGNoaWxkLnR5cGUgPT09ICdhJyAmJiAhKCdocmVmJyBpbiBjaGlsZC5wcm9wcykpKSB7XG4gICAgY2hpbGRQcm9wcy5ocmVmID0gYWRkQmFzZVBhdGgoYXMpXG4gIH1cblxuICAvLyBBZGQgdGhlIGVuZGluZyBzbGFzaCB0byB0aGUgcGF0aHMuIFNvLCB3ZSBjYW4gc2VydmUgdGhlXG4gIC8vIFwiPHBhZ2U+L2luZGV4Lmh0bWxcIiBkaXJlY3RseS5cbiAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9FWFBPUlRfVFJBSUxJTkdfU0xBU0gpIHtcbiAgICBjb25zdCByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCA9IHJlcXVpcmUoJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcmV3cml0ZS11cmwtZm9yLWV4cG9ydCcpXG4gICAgICAucmV3cml0ZVVybEZvck5leHRFeHBvcnRcbiAgICBpZiAoXG4gICAgICBjaGlsZFByb3BzLmhyZWYgJiZcbiAgICAgIHR5cGVvZiBfX05FWFRfREFUQV9fICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICAgX19ORVhUX0RBVEFfXy5uZXh0RXhwb3J0XG4gICAgKSB7XG4gICAgICBjaGlsZFByb3BzLmhyZWYgPSByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydChjaGlsZFByb3BzLmhyZWYpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwgY2hpbGRQcm9wcylcbn1cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gIGNvbnN0IHdhcm4gPSBleGVjT25jZShjb25zb2xlLmVycm9yKVxuXG4gIC8vIFRoaXMgbW9kdWxlIGdldHMgcmVtb3ZlZCBieSB3ZWJwYWNrLklnbm9yZVBsdWdpblxuICBjb25zdCBQcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJylcbiAgY29uc3QgZXhhY3QgPSByZXF1aXJlKCdwcm9wLXR5cGVzLWV4YWN0JylcbiAgLy8gQHRzLWlnbm9yZSB0aGUgcHJvcGVydHkgaXMgc3VwcG9ydGVkLCB3aGVuIGRlY2xhcmluZyBpdCBvbiB0aGUgY2xhc3MgaXQgb3V0cHV0cyBhbiBleHRyYSBiaXQgb2YgY29kZSB3aGljaCBpcyBub3QgbmVlZGVkLlxuICBMaW5rLnByb3BUeXBlcyA9IGV4YWN0KHtcbiAgICBocmVmOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMub2JqZWN0XSkuaXNSZXF1aXJlZCxcbiAgICBhczogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm9iamVjdF0pLFxuICAgIHByZWZldGNoOiBQcm9wVHlwZXMuYm9vbCxcbiAgICByZXBsYWNlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBzaGFsbG93OiBQcm9wVHlwZXMuYm9vbCxcbiAgICBwYXNzSHJlZjogUHJvcFR5cGVzLmJvb2wsXG4gICAgc2Nyb2xsOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICBQcm9wVHlwZXMuZWxlbWVudCxcbiAgICAgIChwcm9wczogYW55LCBwcm9wTmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gcHJvcHNbcHJvcE5hbWVdXG5cbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICB3YXJuKFxuICAgICAgICAgICAgYFdhcm5pbmc6IFlvdSdyZSB1c2luZyBhIHN0cmluZyBkaXJlY3RseSBpbnNpZGUgPExpbms+LiBUaGlzIHVzYWdlIGhhcyBiZWVuIGRlcHJlY2F0ZWQuIFBsZWFzZSBhZGQgYW4gPGE+IHRhZyBhcyBjaGlsZCBvZiA8TGluaz5gXG4gICAgICAgICAgKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgIH0sXG4gICAgXSkuaXNSZXF1aXJlZCxcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGlua1xuIiwiLyoqXG4gKiBSZW1vdmVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggaWYgdGhlcmUgaXMgb25lLiBQcmVzZXJ2ZXMgdGhlIHJvb3QgcGF0aCBgL2AuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5lbmRzV2l0aCgnLycpICYmIHBhdGggIT09ICcvJyA/IHBhdGguc2xpY2UoMCwgLTEpIDogcGF0aFxufVxuXG4vKipcbiAqIE5vcm1hbGl6ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBhY2NvcmRpbmcgdG8gdGhlIGB0cmFpbGluZ1NsYXNoYCBvcHRpb25cbiAqIGluIGBuZXh0LmNvbmZpZy5qc2AuXG4gKi9cbmV4cG9ydCBjb25zdCBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCA9IHByb2Nlc3MuZW52Ll9fTkVYVF9UUkFJTElOR19TTEFTSFxuICA/IChwYXRoOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICAgICAgaWYgKC9cXC5bXi9dK1xcLz8kLy50ZXN0KHBhdGgpKSB7XG4gICAgICAgIHJldHVybiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoKVxuICAgICAgfSBlbHNlIGlmIChwYXRoLmVuZHNXaXRoKCcvJykpIHtcbiAgICAgICAgcmV0dXJuIHBhdGhcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBwYXRoICsgJy8nXG4gICAgICB9XG4gICAgfVxuICA6IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoXG4iLCIvKiBnbG9iYWwgd2luZG93ICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUm91dGVyLCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IFJvdXRlckNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQnXG5cbnR5cGUgQ2xhc3NBcmd1bWVudHM8VD4gPSBUIGV4dGVuZHMgbmV3ICguLi5hcmdzOiBpbmZlciBVKSA9PiBhbnkgPyBVIDogYW55XG5cbnR5cGUgUm91dGVyQXJncyA9IENsYXNzQXJndW1lbnRzPHR5cGVvZiBSb3V0ZXI+XG5cbnR5cGUgU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBSb3V0ZXIgfCBudWxsXG4gIHJlYWR5Q2FsbGJhY2tzOiBBcnJheTwoKSA9PiBhbnk+XG4gIHJlYWR5KGNiOiAoKSA9PiBhbnkpOiB2b2lkXG59XG5cbmV4cG9ydCB7IFJvdXRlciwgTmV4dFJvdXRlciB9XG5cbmV4cG9ydCB0eXBlIFNpbmdsZXRvblJvdXRlciA9IFNpbmdsZXRvblJvdXRlckJhc2UgJiBOZXh0Um91dGVyXG5cbmNvbnN0IHNpbmdsZXRvblJvdXRlcjogU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBudWxsLCAvLyBob2xkcyB0aGUgYWN0dWFsIHJvdXRlciBpbnN0YW5jZVxuICByZWFkeUNhbGxiYWNrczogW10sXG4gIHJlYWR5KGNiOiAoKSA9PiB2b2lkKSB7XG4gICAgaWYgKHRoaXMucm91dGVyKSByZXR1cm4gY2IoKVxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5yZWFkeUNhbGxiYWNrcy5wdXNoKGNiKVxuICAgIH1cbiAgfSxcbn1cblxuLy8gQ3JlYXRlIHB1YmxpYyBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzIG9mIHRoZSByb3V0ZXIgaW4gdGhlIHNpbmdsZXRvblJvdXRlclxuY29uc3QgdXJsUHJvcGVydHlGaWVsZHMgPSBbXG4gICdwYXRobmFtZScsXG4gICdyb3V0ZScsXG4gICdxdWVyeScsXG4gICdhc1BhdGgnLFxuICAnY29tcG9uZW50cycsXG4gICdpc0ZhbGxiYWNrJyxcbiAgJ2Jhc2VQYXRoJyxcbl1cbmNvbnN0IHJvdXRlckV2ZW50cyA9IFtcbiAgJ3JvdXRlQ2hhbmdlU3RhcnQnLFxuICAnYmVmb3JlSGlzdG9yeUNoYW5nZScsXG4gICdyb3V0ZUNoYW5nZUNvbXBsZXRlJyxcbiAgJ3JvdXRlQ2hhbmdlRXJyb3InLFxuICAnaGFzaENoYW5nZVN0YXJ0JyxcbiAgJ2hhc2hDaGFuZ2VDb21wbGV0ZScsXG5dXG5jb25zdCBjb3JlTWV0aG9kRmllbGRzID0gW1xuICAncHVzaCcsXG4gICdyZXBsYWNlJyxcbiAgJ3JlbG9hZCcsXG4gICdiYWNrJyxcbiAgJ3ByZWZldGNoJyxcbiAgJ2JlZm9yZVBvcFN0YXRlJyxcbl1cblxuLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgJ2V2ZW50cycsIHtcbiAgZ2V0KCkge1xuICAgIHJldHVybiBSb3V0ZXIuZXZlbnRzXG4gIH0sXG59KVxuXG51cmxQcm9wZXJ0eUZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAvLyBIZXJlIHdlIG5lZWQgdG8gdXNlIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSBiZWNhdXNlLCB3ZSBuZWVkIHRvIHJldHVyblxuICAvLyB0aGUgcHJvcGVydHkgYXNzaWduZWQgdG8gdGhlIGFjdHVhbCByb3V0ZXJcbiAgLy8gVGhlIHZhbHVlIG1pZ2h0IGdldCBjaGFuZ2VkIGFzIHdlIGNoYW5nZSByb3V0ZXMgYW5kIHRoaXMgaXMgdGhlXG4gIC8vIHByb3BlciB3YXkgdG8gYWNjZXNzIGl0XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsIGZpZWxkLCB7XG4gICAgZ2V0KCkge1xuICAgICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSBhcyBzdHJpbmdcbiAgICB9LFxuICB9KVxufSlcblxuY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAvLyBXZSBkb24ndCByZWFsbHkga25vdyB0aGUgdHlwZXMgaGVyZSwgc28gd2UgYWRkIHRoZW0gbGF0ZXIgaW5zdGVhZFxuICA7KHNpbmdsZXRvblJvdXRlciBhcyBhbnkpW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgIHJldHVybiByb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gIH1cbn0pXG5cbnJvdXRlckV2ZW50cy5mb3JFYWNoKChldmVudCkgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHkoKCkgPT4ge1xuICAgIFJvdXRlci5ldmVudHMub24oZXZlbnQsICguLi5hcmdzKSA9PiB7XG4gICAgICBjb25zdCBldmVudEZpZWxkID0gYG9uJHtldmVudC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX0ke2V2ZW50LnN1YnN0cmluZyhcbiAgICAgICAgMVxuICAgICAgKX1gXG4gICAgICBjb25zdCBfc2luZ2xldG9uUm91dGVyID0gc2luZ2xldG9uUm91dGVyIGFzIGFueVxuICAgICAgaWYgKF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKC4uLmFyZ3MpXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1jb25zb2xlXG4gICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3Igd2hlbiBydW5uaW5nIHRoZSBSb3V0ZXIgZXZlbnQ6ICR7ZXZlbnRGaWVsZH1gKVxuICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1jb25zb2xlXG4gICAgICAgICAgY29uc29sZS5lcnJvcihgJHtlcnIubWVzc2FnZX1cXG4ke2Vyci5zdGFja31gKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfSlcbn0pXG5cbmZ1bmN0aW9uIGdldFJvdXRlcigpOiBSb3V0ZXIge1xuICBpZiAoIXNpbmdsZXRvblJvdXRlci5yb3V0ZXIpIHtcbiAgICBjb25zdCBtZXNzYWdlID1cbiAgICAgICdObyByb3V0ZXIgaW5zdGFuY2UgZm91bmQuXFxuJyArXG4gICAgICAnWW91IHNob3VsZCBvbmx5IHVzZSBcIm5leHQvcm91dGVyXCIgaW5zaWRlIHRoZSBjbGllbnQgc2lkZSBvZiB5b3VyIGFwcC5cXG4nXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cbiAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXJcbn1cblxuLy8gRXhwb3J0IHRoZSBzaW5nbGV0b25Sb3V0ZXIgYW5kIHRoaXMgaXMgdGhlIHB1YmxpYyBBUEkuXG5leHBvcnQgZGVmYXVsdCBzaW5nbGV0b25Sb3V0ZXIgYXMgU2luZ2xldG9uUm91dGVyXG5cbi8vIFJlZXhwb3J0IHRoZSB3aXRoUm91dGUgSE9DXG5leHBvcnQgeyBkZWZhdWx0IGFzIHdpdGhSb3V0ZXIgfSBmcm9tICcuL3dpdGgtcm91dGVyJ1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlUm91dGVyKCk6IE5leHRSb3V0ZXIge1xuICByZXR1cm4gUmVhY3QudXNlQ29udGV4dChSb3V0ZXJDb250ZXh0KVxufVxuXG4vLyBJTlRFUk5BTCBBUElTXG4vLyAtLS0tLS0tLS0tLS0tXG4vLyAoZG8gbm90IHVzZSBmb2xsb3dpbmcgZXhwb3J0cyBpbnNpZGUgdGhlIGFwcClcblxuLy8gQ3JlYXRlIGEgcm91dGVyIGFuZCBhc3NpZ24gaXQgYXMgdGhlIHNpbmdsZXRvbiBpbnN0YW5jZS5cbi8vIFRoaXMgaXMgdXNlZCBpbiBjbGllbnQgc2lkZSB3aGVuIHdlIGFyZSBpbml0aWxpemluZyB0aGUgYXBwLlxuLy8gVGhpcyBzaG91bGQgKipub3QqKiB1c2UgaW5zaWRlIHRoZSBzZXJ2ZXIuXG5leHBvcnQgY29uc3QgY3JlYXRlUm91dGVyID0gKC4uLmFyZ3M6IFJvdXRlckFyZ3MpOiBSb3V0ZXIgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucm91dGVyID0gbmV3IFJvdXRlciguLi5hcmdzKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MuZm9yRWFjaCgoY2IpID0+IGNiKCkpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcyA9IFtdXG5cbiAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXJcbn1cblxuLy8gVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIGNyZWF0ZSB0aGUgYHdpdGhSb3V0ZXJgIHJvdXRlciBpbnN0YW5jZVxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZShyb3V0ZXI6IFJvdXRlcik6IE5leHRSb3V0ZXIge1xuICBjb25zdCBfcm91dGVyID0gcm91dGVyIGFzIGFueVxuICBjb25zdCBpbnN0YW5jZSA9IHt9IGFzIGFueVxuXG4gIGZvciAoY29uc3QgcHJvcGVydHkgb2YgdXJsUHJvcGVydHlGaWVsZHMpIHtcbiAgICBpZiAodHlwZW9mIF9yb3V0ZXJbcHJvcGVydHldID09PSAnb2JqZWN0Jykge1xuICAgICAgaW5zdGFuY2VbcHJvcGVydHldID0gT2JqZWN0LmFzc2lnbih7fSwgX3JvdXRlcltwcm9wZXJ0eV0pIC8vIG1ha2VzIHN1cmUgcXVlcnkgaXMgbm90IHN0YXRlZnVsXG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IF9yb3V0ZXJbcHJvcGVydHldXG4gIH1cblxuICAvLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG4gIGluc3RhbmNlLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICBjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgaW5zdGFuY2VbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgICByZXR1cm4gX3JvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIGluc3RhbmNlXG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBOZXh0Q29tcG9uZW50VHlwZSwgTmV4dFBhZ2VDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciwgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5cbmV4cG9ydCB0eXBlIFdpdGhSb3V0ZXJQcm9wcyA9IHtcbiAgcm91dGVyOiBOZXh0Um91dGVyXG59XG5cbmV4cG9ydCB0eXBlIEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPiA9IFBpY2s8XG4gIFAsXG4gIEV4Y2x1ZGU8a2V5b2YgUCwga2V5b2YgV2l0aFJvdXRlclByb3BzPlxuPlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3aXRoUm91dGVyPFxuICBQIGV4dGVuZHMgV2l0aFJvdXRlclByb3BzLFxuICBDID0gTmV4dFBhZ2VDb250ZXh0XG4+KFxuICBDb21wb3NlZENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8QywgYW55LCBQPlxuKTogUmVhY3QuQ29tcG9uZW50VHlwZTxFeGNsdWRlUm91dGVyUHJvcHM8UD4+IHtcbiAgZnVuY3Rpb24gV2l0aFJvdXRlcldyYXBwZXIocHJvcHM6IGFueSkge1xuICAgIHJldHVybiA8Q29tcG9zZWRDb21wb25lbnQgcm91dGVyPXt1c2VSb3V0ZXIoKX0gey4uLnByb3BzfSAvPlxuICB9XG5cbiAgV2l0aFJvdXRlcldyYXBwZXIuZ2V0SW5pdGlhbFByb3BzID0gQ29tcG9zZWRDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzXG4gIC8vIFRoaXMgaXMgbmVlZGVkIHRvIGFsbG93IGNoZWNraW5nIGZvciBjdXN0b20gZ2V0SW5pdGlhbFByb3BzIGluIF9hcHBcbiAgOyhXaXRoUm91dGVyV3JhcHBlciBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHMgPSAoQ29tcG9zZWRDb21wb25lbnQgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgY29uc3QgbmFtZSA9XG4gICAgICBDb21wb3NlZENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb3NlZENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xuICAgIFdpdGhSb3V0ZXJXcmFwcGVyLmRpc3BsYXlOYW1lID0gYHdpdGhSb3V0ZXIoJHtuYW1lfSlgXG4gIH1cblxuICByZXR1cm4gV2l0aFJvdXRlcldyYXBwZXJcbn1cbiIsIi8qXG5NSVQgTGljZW5zZVxuXG5Db3B5cmlnaHQgKGMpIEphc29uIE1pbGxlciAoaHR0cHM6Ly9qYXNvbmZvcm1hdC5jb20vKVxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4qL1xuXG4vLyBUaGlzIGZpbGUgaXMgYmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL2RldmVsb3BpdC9taXR0L2Jsb2IvdjEuMS4zL3NyYy9pbmRleC5qc1xuLy8gSXQncyBiZWVuIGVkaXRlZCBmb3IgdGhlIG5lZWRzIG9mIHRoaXMgc2NyaXB0XG4vLyBTZWUgdGhlIExJQ0VOU0UgYXQgdGhlIHRvcCBvZiB0aGUgZmlsZVxuXG50eXBlIEhhbmRsZXIgPSAoLi4uZXZ0czogYW55W10pID0+IHZvaWRcblxuZXhwb3J0IHR5cGUgTWl0dEVtaXR0ZXIgPSB7XG4gIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKTogdm9pZFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtaXR0KCk6IE1pdHRFbWl0dGVyIHtcbiAgY29uc3QgYWxsOiB7IFtzOiBzdHJpbmddOiBIYW5kbGVyW10gfSA9IE9iamVjdC5jcmVhdGUobnVsbClcblxuICByZXR1cm4ge1xuICAgIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgOyhhbGxbdHlwZV0gfHwgKGFsbFt0eXBlXSA9IFtdKSkucHVzaChoYW5kbGVyKVxuICAgIH0sXG5cbiAgICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICBpZiAoYWxsW3R5cGVdKSB7XG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1iaXR3aXNlXG4gICAgICAgIGFsbFt0eXBlXS5zcGxpY2UoYWxsW3R5cGVdLmluZGV4T2YoaGFuZGxlcikgPj4+IDAsIDEpXG4gICAgICB9XG4gICAgfSxcblxuICAgIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgOyhhbGxbdHlwZV0gfHwgW10pLnNsaWNlKCkubWFwKChoYW5kbGVyOiBIYW5kbGVyKSA9PiB7XG4gICAgICAgIGhhbmRsZXIoLi4uZXZ0cylcbiAgICAgIH0pXG4gICAgfSxcbiAgfVxufVxuIiwiLyogZ2xvYmFsIF9fTkVYVF9EQVRBX18gKi9cbi8vIHRzbGludDpkaXNhYmxlOm5vLWNvbnNvbGVcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgbWl0dCwgeyBNaXR0RW1pdHRlciB9IGZyb20gJy4uL21pdHQnXG5pbXBvcnQge1xuICBBcHBDb250ZXh0VHlwZSxcbiAgZm9ybWF0V2l0aFZhbGlkYXRpb24sXG4gIGdldFVSTCxcbiAgbG9hZEdldEluaXRpYWxQcm9wcyxcbiAgTmV4dFBhZ2VDb250ZXh0LFxuICBTVCxcbn0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgeyBpc0R5bmFtaWNSb3V0ZSB9IGZyb20gJy4vdXRpbHMvaXMtZHluYW1pYydcbmltcG9ydCB7IGdldFJvdXRlTWF0Y2hlciB9IGZyb20gJy4vdXRpbHMvcm91dGUtbWF0Y2hlcidcbmltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3V0aWxzL3JvdXRlLXJlZ2V4J1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vdXRpbHMvc2VhcmNoLXBhcmFtcy10by11cmwtcXVlcnknXG5pbXBvcnQgeyBwYXJzZVJlbGF0aXZlVXJsIH0gZnJvbSAnLi91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwnXG5pbXBvcnQge1xuICByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCxcbiAgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gsXG59IGZyb20gJy4uLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gnXG5cbmNvbnN0IGJhc2VQYXRoID0gKHByb2Nlc3MuZW52Ll9fTkVYVF9ST1VURVJfQkFTRVBBVEggYXMgc3RyaW5nKSB8fCAnJ1xuXG5mdW5jdGlvbiBidWlsZENhbmNlbGxhdGlvbkVycm9yKCkge1xuICByZXR1cm4gT2JqZWN0LmFzc2lnbihuZXcgRXJyb3IoJ1JvdXRlIENhbmNlbGxlZCcpLCB7XG4gICAgY2FuY2VsbGVkOiB0cnVlLFxuICB9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIGJhc2VQYXRoXG4gICAgPyBwYXRoID09PSAnLydcbiAgICAgID8gbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2goYmFzZVBhdGgpXG4gICAgICA6IGJhc2VQYXRoICsgcGF0aFxuICAgIDogcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGguc2xpY2UoYmFzZVBhdGgubGVuZ3RoKSB8fCAnLydcbn1cblxudHlwZSBVcmwgPSBVcmxPYmplY3QgfCBzdHJpbmdcblxuLyoqXG4gKiBSZXNvbHZlcyBhIGdpdmVuIGh5cGVybGluayB3aXRoIGEgY2VydGFpbiByb3V0ZXIgc3RhdGUgKGJhc2VQYXRoIG5vdCBpbmNsdWRlZCkuXG4gKiBQcmVzZXJ2ZXMgYWJzb2x1dGUgdXJscy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVIcmVmKGN1cnJlbnRQYXRoOiBzdHJpbmcsIGhyZWY6IFVybCk6IHN0cmluZyB7XG4gIC8vIHdlIHVzZSBhIGR1bW15IGJhc2UgdXJsIGZvciByZWxhdGl2ZSB1cmxzXG4gIGNvbnN0IGJhc2UgPSBuZXcgVVJMKGN1cnJlbnRQYXRoLCAnaHR0cDovL24nKVxuICBjb25zdCB1cmxBc1N0cmluZyA9XG4gICAgdHlwZW9mIGhyZWYgPT09ICdzdHJpbmcnID8gaHJlZiA6IGZvcm1hdFdpdGhWYWxpZGF0aW9uKGhyZWYpXG4gIGNvbnN0IGZpbmFsVXJsID0gbmV3IFVSTCh1cmxBc1N0cmluZywgYmFzZSlcbiAgZmluYWxVcmwucGF0aG5hbWUgPSBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChmaW5hbFVybC5wYXRobmFtZSlcbiAgLy8gaWYgdGhlIG9yaWdpbiBkaWRuJ3QgY2hhbmdlLCBpdCBtZWFucyB3ZSByZWNlaXZlZCBhIHJlbGF0aXZlIGhyZWZcbiAgcmV0dXJuIGZpbmFsVXJsLm9yaWdpbiA9PT0gYmFzZS5vcmlnaW5cbiAgICA/IGZpbmFsVXJsLmhyZWYuc2xpY2UoZmluYWxVcmwub3JpZ2luLmxlbmd0aClcbiAgICA6IGZpbmFsVXJsLmhyZWZcbn1cblxuZnVuY3Rpb24gcHJlcGFyZVVybEFzKHJvdXRlcjogTmV4dFJvdXRlciwgdXJsOiBVcmwsIGFzOiBVcmwpIHtcbiAgLy8gSWYgdXJsIGFuZCBhcyBwcm92aWRlZCBhcyBhbiBvYmplY3QgcmVwcmVzZW50YXRpb24sXG4gIC8vIHdlJ2xsIGZvcm1hdCB0aGVtIGludG8gdGhlIHN0cmluZyB2ZXJzaW9uIGhlcmUuXG4gIHJldHVybiB7XG4gICAgdXJsOiBhZGRCYXNlUGF0aChyZXNvbHZlSHJlZihyb3V0ZXIucGF0aG5hbWUsIHVybCkpLFxuICAgIGFzOiBhcyA/IGFkZEJhc2VQYXRoKHJlc29sdmVIcmVmKHJvdXRlci5wYXRobmFtZSwgYXMpKSA6IGFzLFxuICB9XG59XG5cbmZ1bmN0aW9uIHRyeVBhcnNlUmVsYXRpdmVVcmwoXG4gIHVybDogc3RyaW5nXG4pOiBudWxsIHwgUmV0dXJuVHlwZTx0eXBlb2YgcGFyc2VSZWxhdGl2ZVVybD4ge1xuICB0cnkge1xuICAgIHJldHVybiBwYXJzZVJlbGF0aXZlVXJsKHVybClcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYEludmFsaWQgaHJlZiBwYXNzZWQgdG8gcm91dGVyOiAke3VybH0gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvaW52YWxpZC1ocmVmLXBhc3NlZGBcbiAgICAgIClcbiAgICB9XG4gICAgcmV0dXJuIG51bGxcbiAgfVxufVxuXG50eXBlIENvbXBvbmVudFJlcyA9IHsgcGFnZTogQ29tcG9uZW50VHlwZTsgbW9kOiBhbnkgfVxuXG5leHBvcnQgdHlwZSBCYXNlUm91dGVyID0ge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcbn1cblxuZXhwb3J0IHR5cGUgTmV4dFJvdXRlciA9IEJhc2VSb3V0ZXIgJlxuICBQaWNrPFxuICAgIFJvdXRlcixcbiAgICB8ICdwdXNoJ1xuICAgIHwgJ3JlcGxhY2UnXG4gICAgfCAncmVsb2FkJ1xuICAgIHwgJ2JhY2snXG4gICAgfCAncHJlZmV0Y2gnXG4gICAgfCAnYmVmb3JlUG9wU3RhdGUnXG4gICAgfCAnZXZlbnRzJ1xuICAgIHwgJ2lzRmFsbGJhY2snXG4gID5cblxuZXhwb3J0IHR5cGUgUHJlZmV0Y2hPcHRpb25zID0ge1xuICBwcmlvcml0eT86IGJvb2xlYW5cbn1cblxudHlwZSBSb3V0ZUluZm8gPSB7XG4gIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICBfX05fU1NHPzogYm9vbGVhblxuICBfX05fU1NQPzogYm9vbGVhblxuICBwcm9wcz86IGFueVxuICBlcnI/OiBFcnJvclxuICBlcnJvcj86IGFueVxufVxuXG50eXBlIFN1YnNjcmlwdGlvbiA9IChkYXRhOiBSb3V0ZUluZm8sIEFwcD86IENvbXBvbmVudFR5cGUpID0+IFByb21pc2U8dm9pZD5cblxudHlwZSBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrID0gKHN0YXRlOiBhbnkpID0+IGJvb2xlYW5cblxudHlwZSBDb21wb25lbnRMb2FkQ2FuY2VsID0gKCgpID0+IHZvaWQpIHwgbnVsbFxuXG50eXBlIEhpc3RvcnlNZXRob2QgPSAncmVwbGFjZVN0YXRlJyB8ICdwdXNoU3RhdGUnXG5cbmNvbnN0IG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uID1cbiAgcHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTiAmJlxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAnc2Nyb2xsUmVzdG9yYXRpb24nIGluIHdpbmRvdy5oaXN0b3J5XG5cbmZ1bmN0aW9uIGZldGNoUmV0cnkodXJsOiBzdHJpbmcsIGF0dGVtcHRzOiBudW1iZXIpOiBQcm9taXNlPGFueT4ge1xuICByZXR1cm4gZmV0Y2godXJsLCB7XG4gICAgLy8gQ29va2llcyBhcmUgcmVxdWlyZWQgdG8gYmUgcHJlc2VudCBmb3IgTmV4dC5qcycgU1NHIFwiUHJldmlldyBNb2RlXCIuXG4gICAgLy8gQ29va2llcyBtYXkgYWxzbyBiZSByZXF1aXJlZCBmb3IgYGdldFNlcnZlclNpZGVQcm9wc2AuXG4gICAgLy9cbiAgICAvLyA+IGBmZXRjaGAgd29u4oCZdCBzZW5kIGNvb2tpZXMsIHVubGVzcyB5b3Ugc2V0IHRoZSBjcmVkZW50aWFscyBpbml0XG4gICAgLy8gPiBvcHRpb24uXG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZldGNoX0FQSS9Vc2luZ19GZXRjaFxuICAgIC8vXG4gICAgLy8gPiBGb3IgbWF4aW11bSBicm93c2VyIGNvbXBhdGliaWxpdHkgd2hlbiBpdCBjb21lcyB0byBzZW5kaW5nICZcbiAgICAvLyA+IHJlY2VpdmluZyBjb29raWVzLCBhbHdheXMgc3VwcGx5IHRoZSBgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidgXG4gICAgLy8gPiBvcHRpb24gaW5zdGVhZCBvZiByZWx5aW5nIG9uIHRoZSBkZWZhdWx0LlxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9naXRodWIvZmV0Y2gjY2F2ZWF0c1xuICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICB9KS50aGVuKChyZXMpID0+IHtcbiAgICBpZiAoIXJlcy5vaykge1xuICAgICAgaWYgKGF0dGVtcHRzID4gMSAmJiByZXMuc3RhdHVzID49IDUwMCkge1xuICAgICAgICByZXR1cm4gZmV0Y2hSZXRyeSh1cmwsIGF0dGVtcHRzIC0gMSlcbiAgICAgIH1cbiAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYClcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzLmpzb24oKVxuICB9KVxufVxuXG5mdW5jdGlvbiBmZXRjaE5leHREYXRhKGRhdGFIcmVmOiBzdHJpbmcsIGlzU2VydmVyUmVuZGVyOiBib29sZWFuKSB7XG4gIHJldHVybiBmZXRjaFJldHJ5KGRhdGFIcmVmLCBpc1NlcnZlclJlbmRlciA/IDMgOiAxKS5jYXRjaCgoZXJyOiBFcnJvcikgPT4ge1xuICAgIC8vIFdlIHNob3VsZCBvbmx5IHRyaWdnZXIgYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uIGlmIHRoaXMgd2FzIGNhdXNlZFxuICAgIC8vIG9uIGEgY2xpZW50LXNpZGUgdHJhbnNpdGlvbi4gT3RoZXJ3aXNlLCB3ZSdkIGdldCBpbnRvIGFuIGluZmluaXRlXG4gICAgLy8gbG9vcC5cbiAgICBpZiAoIWlzU2VydmVyUmVuZGVyKSB7XG4gICAgICA7KGVyciBhcyBhbnkpLmNvZGUgPSAnUEFHRV9MT0FEX0VSUk9SJ1xuICAgIH1cbiAgICB0aHJvdyBlcnJcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm91dGVyIGltcGxlbWVudHMgQmFzZVJvdXRlciB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xuXG4gIC8qKlxuICAgKiBNYXAgb2YgYWxsIGNvbXBvbmVudHMgbG9hZGVkIGluIGBSb3V0ZXJgXG4gICAqL1xuICBjb21wb25lbnRzOiB7IFtwYXRobmFtZTogc3RyaW5nXTogUm91dGVJbmZvIH1cbiAgLy8gU3RhdGljIERhdGEgQ2FjaGVcbiAgc2RjOiB7IFthc1BhdGg6IHN0cmluZ106IG9iamVjdCB9ID0ge31cbiAgc3ViOiBTdWJzY3JpcHRpb25cbiAgY2xjOiBDb21wb25lbnRMb2FkQ2FuY2VsXG4gIHBhZ2VMb2FkZXI6IGFueVxuICBfYnBzOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrIHwgdW5kZWZpbmVkXG4gIGV2ZW50czogTWl0dEVtaXR0ZXJcbiAgX3dyYXBBcHA6IChBcHA6IENvbXBvbmVudFR5cGUpID0+IGFueVxuICBpc1NzcjogYm9vbGVhblxuICBpc0ZhbGxiYWNrOiBib29sZWFuXG4gIF9pbkZsaWdodFJvdXRlPzogc3RyaW5nXG5cbiAgc3RhdGljIGV2ZW50czogTWl0dEVtaXR0ZXIgPSBtaXR0KClcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIHtcbiAgICAgIGluaXRpYWxQcm9wcyxcbiAgICAgIHBhZ2VMb2FkZXIsXG4gICAgICBBcHAsXG4gICAgICB3cmFwQXBwLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgZXJyLFxuICAgICAgc3Vic2NyaXB0aW9uLFxuICAgICAgaXNGYWxsYmFjayxcbiAgICB9OiB7XG4gICAgICBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvblxuICAgICAgaW5pdGlhbFByb3BzOiBhbnlcbiAgICAgIHBhZ2VMb2FkZXI6IGFueVxuICAgICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gICAgICBBcHA6IENvbXBvbmVudFR5cGVcbiAgICAgIHdyYXBBcHA6IChBcHA6IENvbXBvbmVudFR5cGUpID0+IGFueVxuICAgICAgZXJyPzogRXJyb3JcbiAgICAgIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgICB9XG4gICkge1xuICAgIC8vIHJlcHJlc2VudHMgdGhlIGN1cnJlbnQgY29tcG9uZW50IGtleVxuICAgIHRoaXMucm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcblxuICAgIC8vIHNldCB1cCB0aGUgY29tcG9uZW50IGNhY2hlIChieSByb3V0ZSBrZXlzKVxuICAgIHRoaXMuY29tcG9uZW50cyA9IHt9XG4gICAgLy8gV2Ugc2hvdWxkIG5vdCBrZWVwIHRoZSBjYWNoZSwgaWYgdGhlcmUncyBhbiBlcnJvclxuICAgIC8vIE90aGVyd2lzZSwgdGhpcyBjYXVzZSBpc3N1ZXMgd2hlbiB3aGVuIGdvaW5nIGJhY2sgYW5kXG4gICAgLy8gY29tZSBhZ2FpbiB0byB0aGUgZXJyb3JlZCBwYWdlLlxuICAgIGlmIChwYXRobmFtZSAhPT0gJy9fZXJyb3InKSB7XG4gICAgICB0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0gPSB7XG4gICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgcHJvcHM6IGluaXRpYWxQcm9wcyxcbiAgICAgICAgZXJyLFxuICAgICAgICBfX05fU1NHOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU0csXG4gICAgICAgIF9fTl9TU1A6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTUCxcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10gPSB7IENvbXBvbmVudDogQXBwIH1cblxuICAgIC8vIEJhY2t3YXJkcyBjb21wYXQgZm9yIFJvdXRlci5yb3V0ZXIuZXZlbnRzXG4gICAgLy8gVE9ETzogU2hvdWxkIGJlIHJlbW92ZSB0aGUgZm9sbG93aW5nIG1ham9yIHZlcnNpb24gYXMgaXQgd2FzIG5ldmVyIGRvY3VtZW50ZWRcbiAgICB0aGlzLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICAgIHRoaXMucGFnZUxvYWRlciA9IHBhZ2VMb2FkZXJcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICAvLyBpZiBhdXRvIHByZXJlbmRlcmVkIGFuZCBkeW5hbWljIHJvdXRlIHdhaXQgdG8gdXBkYXRlIGFzUGF0aFxuICAgIC8vIHVudGlsIGFmdGVyIG1vdW50IHRvIHByZXZlbnQgaHlkcmF0aW9uIG1pc21hdGNoXG4gICAgdGhpcy5hc1BhdGggPVxuICAgICAgLy8gQHRzLWlnbm9yZSB0aGlzIGlzIHRlbXBvcmFyaWx5IGdsb2JhbCAoYXR0YWNoZWQgdG8gd2luZG93KVxuICAgICAgaXNEeW5hbWljUm91dGUocGF0aG5hbWUpICYmIF9fTkVYVF9EQVRBX18uYXV0b0V4cG9ydCA/IHBhdGhuYW1lIDogYXNcbiAgICB0aGlzLmJhc2VQYXRoID0gYmFzZVBhdGhcbiAgICB0aGlzLnN1YiA9IHN1YnNjcmlwdGlvblxuICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIHRoaXMuX3dyYXBBcHAgPSB3cmFwQXBwXG4gICAgLy8gbWFrZSBzdXJlIHRvIGlnbm9yZSBleHRyYSBwb3BTdGF0ZSBpbiBzYWZhcmkgb24gbmF2aWdhdGluZ1xuICAgIC8vIGJhY2sgZnJvbSBleHRlcm5hbCBzaXRlXG4gICAgdGhpcy5pc1NzciA9IHRydWVcblxuICAgIHRoaXMuaXNGYWxsYmFjayA9IGlzRmFsbGJhY2tcblxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gbWFrZSBzdXJlIFwiYXNcIiBkb2Vzbid0IHN0YXJ0IHdpdGggZG91YmxlIHNsYXNoZXMgb3IgZWxzZSBpdCBjYW5cbiAgICAgIC8vIHRocm93IGFuIGVycm9yIGFzIGl0J3MgY29uc2lkZXJlZCBpbnZhbGlkXG4gICAgICBpZiAoYXMuc3Vic3RyKDAsIDIpICE9PSAnLy8nKSB7XG4gICAgICAgIC8vIGluIG9yZGVyIGZvciBgZS5zdGF0ZWAgdG8gd29yayBvbiB0aGUgYG9ucG9wc3RhdGVgIGV2ZW50XG4gICAgICAgIC8vIHdlIGhhdmUgdG8gcmVnaXN0ZXIgdGhlIGluaXRpYWwgcm91dGUgdXBvbiBpbml0aWFsaXphdGlvblxuXG4gICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUpLCBxdWVyeSB9KSxcbiAgICAgICAgICBnZXRVUkwoKVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMub25Qb3BTdGF0ZSlcblxuICAgICAgLy8gZW5hYmxlIGN1c3RvbSBzY3JvbGwgcmVzdG9yYXRpb24gaGFuZGxpbmcgd2hlbiBhdmFpbGFibGVcbiAgICAgIC8vIG90aGVyd2lzZSBmYWxsYmFjayB0byBicm93c2VyJ3MgZGVmYXVsdCBoYW5kbGluZ1xuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgICAgd2luZG93Lmhpc3Rvcnkuc2Nyb2xsUmVzdG9yYXRpb24gPSAnbWFudWFsJ1xuXG4gICAgICAgICAgbGV0IHNjcm9sbERlYm91bmNlVGltZW91dDogdW5kZWZpbmVkIHwgTm9kZUpTLlRpbWVvdXRcblxuICAgICAgICAgIGNvbnN0IGRlYm91bmNlZFNjcm9sbFNhdmUgPSAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoc2Nyb2xsRGVib3VuY2VUaW1lb3V0KSBjbGVhclRpbWVvdXQoc2Nyb2xsRGVib3VuY2VUaW1lb3V0KVxuXG4gICAgICAgICAgICBzY3JvbGxEZWJvdW5jZVRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgeyB1cmwsIGFzOiBjdXJBcywgb3B0aW9ucyB9ID0gaGlzdG9yeS5zdGF0ZVxuICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAgICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICAgICAgICAgIHVybCxcbiAgICAgICAgICAgICAgICBjdXJBcyxcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zLCB7XG4gICAgICAgICAgICAgICAgICBfTl9YOiB3aW5kb3cuc2Nyb2xsWCxcbiAgICAgICAgICAgICAgICAgIF9OX1k6IHdpbmRvdy5zY3JvbGxZLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0sIDEwKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBkZWJvdW5jZWRTY3JvbGxTYXZlKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gQGRlcHJlY2F0ZWQgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkgZXZlbiB0aG91Z2ggaXQncyBhIHByaXZhdGUgbWV0aG9kLlxuICBzdGF0aWMgX3Jld3JpdGVVcmxGb3JOZXh0RXhwb3J0KHVybDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0VYUE9SVF9UUkFJTElOR19TTEFTSCkge1xuICAgICAgY29uc3QgcmV3cml0ZVVybEZvck5leHRFeHBvcnQgPSByZXF1aXJlKCcuL3Jld3JpdGUtdXJsLWZvci1leHBvcnQnKVxuICAgICAgICAucmV3cml0ZVVybEZvck5leHRFeHBvcnRcbiAgICAgIHJldHVybiByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCh1cmwpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB1cmxcbiAgICB9XG4gIH1cblxuICBvblBvcFN0YXRlID0gKGU6IFBvcFN0YXRlRXZlbnQpOiB2b2lkID0+IHtcbiAgICBpZiAoIWUuc3RhdGUpIHtcbiAgICAgIC8vIFdlIGdldCBzdGF0ZSBhcyB1bmRlZmluZWQgZm9yIHR3byByZWFzb25zLlxuICAgICAgLy8gIDEuIFdpdGggb2xkZXIgc2FmYXJpICg8IDgpIGFuZCBvbGRlciBjaHJvbWUgKDwgMzQpXG4gICAgICAvLyAgMi4gV2hlbiB0aGUgVVJMIGNoYW5nZWQgd2l0aCAjXG4gICAgICAvL1xuICAgICAgLy8gSW4gdGhlIGJvdGggY2FzZXMsIHdlIGRvbid0IG5lZWQgdG8gcHJvY2VlZCBhbmQgY2hhbmdlIHRoZSByb3V0ZS5cbiAgICAgIC8vIChhcyBpdCdzIGFscmVhZHkgY2hhbmdlZClcbiAgICAgIC8vIEJ1dCB3ZSBjYW4gc2ltcGx5IHJlcGxhY2UgdGhlIHN0YXRlIHdpdGggdGhlIG5ldyBjaGFuZ2VzLlxuICAgICAgLy8gQWN0dWFsbHksIGZvciAoMSkgd2UgZG9uJ3QgbmVlZCB0byBub3RoaW5nLiBCdXQgaXQncyBoYXJkIHRvIGRldGVjdCB0aGF0IGV2ZW50LlxuICAgICAgLy8gU28sIGRvaW5nIHRoZSBmb2xsb3dpbmcgZm9yICgxKSBkb2VzIG5vIGhhcm0uXG4gICAgICBjb25zdCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gdGhpc1xuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lKSwgcXVlcnkgfSksXG4gICAgICAgIGdldFVSTCgpXG4gICAgICApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCB7IHVybCwgYXMsIG9wdGlvbnMsIF9fTiB9ID0gZS5zdGF0ZVxuICAgIGlmICghX19OKSB7XG4gICAgICAvLyB0aGlzIGhpc3Rvcnkgc3RhdGUgd2Fzbid0IGNyZWF0ZWQgYnkgbmV4dC5qcyBzbyBpdCBjYW4gYmUgaWdub3JlZFxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgLy8gTWFrZSBzdXJlIHdlIGRvbid0IHJlLXJlbmRlciBvbiBpbml0aWFsIGxvYWQsXG4gICAgLy8gY2FuIGJlIGNhdXNlZCBieSBuYXZpZ2F0aW5nIGJhY2sgZnJvbSBhbiBleHRlcm5hbCBzaXRlXG4gICAgaWYgKHRoaXMuaXNTc3IgJiYgYXMgPT09IHRoaXMuYXNQYXRoICYmIHBhdGhuYW1lID09PSB0aGlzLnBhdGhuYW1lKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgZG93bnN0cmVhbSBhcHBsaWNhdGlvbiByZXR1cm5zIGZhbHN5LCByZXR1cm4uXG4gICAgLy8gVGhleSB3aWxsIHRoZW4gYmUgcmVzcG9uc2libGUgZm9yIGhhbmRsaW5nIHRoZSBldmVudC5cbiAgICBpZiAodGhpcy5fYnBzICYmICF0aGlzLl9icHMoZS5zdGF0ZSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAodHlwZW9mIHVybCA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIGFzID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgJ2Bwb3BzdGF0ZWAgZXZlbnQgdHJpZ2dlcmVkIGJ1dCBgZXZlbnQuc3RhdGVgIGRpZCBub3QgaGF2ZSBgdXJsYCBvciBgYXNgIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL3BvcHN0YXRlLXN0YXRlLWVtcHR5J1xuICAgICAgICApXG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgdXBkYXRlKHJvdXRlOiBzdHJpbmcsIG1vZDogYW55KSB7XG4gICAgY29uc3QgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlID0gbW9kLmRlZmF1bHQgfHwgbW9kXG4gICAgY29uc3QgZGF0YSA9IHRoaXMuY29tcG9uZW50c1tyb3V0ZV1cbiAgICBpZiAoIWRhdGEpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgQ2Fubm90IHVwZGF0ZSB1bmF2YWlsYWJsZSByb3V0ZTogJHtyb3V0ZX1gKVxuICAgIH1cblxuICAgIGNvbnN0IG5ld0RhdGEgPSBPYmplY3QuYXNzaWduKHt9LCBkYXRhLCB7XG4gICAgICBDb21wb25lbnQsXG4gICAgICBfX05fU1NHOiBtb2QuX19OX1NTRyxcbiAgICAgIF9fTl9TU1A6IG1vZC5fX05fU1NQLFxuICAgIH0pXG4gICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IG5ld0RhdGFcblxuICAgIC8vIHBhZ2VzL19hcHAuanMgdXBkYXRlZFxuICAgIGlmIChyb3V0ZSA9PT0gJy9fYXBwJykge1xuICAgICAgdGhpcy5ub3RpZnkodGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKHJvdXRlID09PSB0aGlzLnJvdXRlKSB7XG4gICAgICB0aGlzLm5vdGlmeShuZXdEYXRhKVxuICAgIH1cbiAgfVxuXG4gIHJlbG9hZCgpOiB2b2lkIHtcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcbiAgfVxuXG4gIC8qKlxuICAgKiBHbyBiYWNrIGluIGhpc3RvcnlcbiAgICovXG4gIGJhY2soKSB7XG4gICAgd2luZG93Lmhpc3RvcnkuYmFjaygpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcHVzaFN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHB1c2godXJsOiBVcmwsIGFzOiBVcmwgPSB1cmwsIG9wdGlvbnMgPSB7fSkge1xuICAgIDsoeyB1cmwsIGFzIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpXG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdwdXNoU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHJlcGxhY2VTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICByZXBsYWNlKHVybDogVXJsLCBhczogVXJsID0gdXJsLCBvcHRpb25zID0ge30pIHtcbiAgICA7KHsgdXJsLCBhcyB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKVxuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIGFzeW5jIGNoYW5nZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zOiBhbnlcbiAgKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgaWYgKCFvcHRpb25zLl9oKSB7XG4gICAgICB0aGlzLmlzU3NyID0gZmFsc2VcbiAgICB9XG4gICAgLy8gbWFya2luZyByb3V0ZSBjaGFuZ2VzIGFzIGEgbmF2aWdhdGlvbiBzdGFydCBlbnRyeVxuICAgIGlmIChTVCkge1xuICAgICAgcGVyZm9ybWFuY2UubWFyaygncm91dGVDaGFuZ2UnKVxuICAgIH1cblxuICAgIC8vIEFkZCB0aGUgZW5kaW5nIHNsYXNoIHRvIHRoZSBwYXRocy4gU28sIHdlIGNhbiBzZXJ2ZSB0aGVcbiAgICAvLyBcIjxwYWdlPi9pbmRleC5odG1sXCIgZGlyZWN0bHkgZm9yIHRoZSBTU1IgcGFnZS5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0VYUE9SVF9UUkFJTElOR19TTEFTSCkge1xuICAgICAgY29uc3QgcmV3cml0ZVVybEZvck5leHRFeHBvcnQgPSByZXF1aXJlKCcuL3Jld3JpdGUtdXJsLWZvci1leHBvcnQnKVxuICAgICAgICAucmV3cml0ZVVybEZvck5leHRFeHBvcnRcbiAgICAgIC8vIEB0cy1pZ25vcmUgdGhpcyBpcyB0ZW1wb3JhcmlseSBnbG9iYWwgKGF0dGFjaGVkIHRvIHdpbmRvdylcbiAgICAgIGlmIChfX05FWFRfREFUQV9fLm5leHRFeHBvcnQpIHtcbiAgICAgICAgYXMgPSByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydChhcylcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy5faW5GbGlnaHRSb3V0ZSkge1xuICAgICAgdGhpcy5hYm9ydENvbXBvbmVudExvYWQodGhpcy5faW5GbGlnaHRSb3V0ZSlcbiAgICB9XG5cbiAgICBjb25zdCBjbGVhbmVkQXMgPSBkZWxCYXNlUGF0aChhcylcbiAgICB0aGlzLl9pbkZsaWdodFJvdXRlID0gYXNcblxuICAgIC8vIElmIHRoZSB1cmwgY2hhbmdlIGlzIG9ubHkgcmVsYXRlZCB0byBhIGhhc2ggY2hhbmdlXG4gICAgLy8gV2Ugc2hvdWxkIG5vdCBwcm9jZWVkLiBXZSBzaG91bGQgb25seSBjaGFuZ2UgdGhlIHN0YXRlLlxuXG4gICAgLy8gV0FSTklORzogYF9oYCBpcyBhbiBpbnRlcm5hbCBvcHRpb24gZm9yIGhhbmRpbmcgTmV4dC5qcyBjbGllbnQtc2lkZVxuICAgIC8vIGh5ZHJhdGlvbi4gWW91ciBhcHAgc2hvdWxkIF9uZXZlcl8gdXNlIHRoaXMgcHJvcGVydHkuIEl0IG1heSBjaGFuZ2UgYXRcbiAgICAvLyBhbnkgdGltZSB3aXRob3V0IG5vdGljZS5cbiAgICBpZiAoIW9wdGlvbnMuX2ggJiYgdGhpcy5vbmx5QUhhc2hDaGFuZ2UoY2xlYW5lZEFzKSkge1xuICAgICAgdGhpcy5hc1BhdGggPSBjbGVhbmVkQXNcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZVN0YXJ0JywgYXMpXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucylcbiAgICAgIHRoaXMuc2Nyb2xsVG9IYXNoKGNsZWFuZWRBcylcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZUNvbXBsZXRlJywgYXMpXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIGNvbnN0IHBhcnNlZCA9IHRyeVBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgaWYgKCFwYXJzZWQpIHJldHVybiBmYWxzZVxuXG4gICAgbGV0IHsgcGF0aG5hbWUsIHNlYXJjaFBhcmFtcyB9ID0gcGFyc2VkXG4gICAgY29uc3QgcXVlcnkgPSBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KHNlYXJjaFBhcmFtcylcblxuICAgIC8vIHVybCBhbmQgYXMgc2hvdWxkIGFsd2F5cyBiZSBwcmVmaXhlZCB3aXRoIGJhc2VQYXRoIGJ5IHRoaXNcbiAgICAvLyBwb2ludCBieSBlaXRoZXIgbmV4dC9saW5rIG9yIHJvdXRlci5wdXNoL3JlcGxhY2Ugc28gc3RyaXAgdGhlXG4gICAgLy8gYmFzZVBhdGggZnJvbSB0aGUgcGF0aG5hbWUgdG8gbWF0Y2ggdGhlIHBhZ2VzIGRpciAxLXRvLTFcbiAgICBwYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICA/IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKGRlbEJhc2VQYXRoKHBhdGhuYW1lKSlcbiAgICAgIDogcGF0aG5hbWVcblxuICAgIC8vIElmIGFza2VkIHRvIGNoYW5nZSB0aGUgY3VycmVudCBVUkwgd2Ugc2hvdWxkIHJlbG9hZCB0aGUgY3VycmVudCBwYWdlXG4gICAgLy8gKG5vdCBsb2NhdGlvbi5yZWxvYWQoKSBidXQgcmVsb2FkIGdldEluaXRpYWxQcm9wcyBhbmQgb3RoZXIgTmV4dC5qcyBzdHVmZnMpXG4gICAgLy8gV2UgYWxzbyBuZWVkIHRvIHNldCB0aGUgbWV0aG9kID0gcmVwbGFjZVN0YXRlIGFsd2F5c1xuICAgIC8vIGFzIHRoaXMgc2hvdWxkIG5vdCBnbyBpbnRvIHRoZSBoaXN0b3J5IChUaGF0J3MgaG93IGJyb3dzZXJzIHdvcmspXG4gICAgLy8gV2Ugc2hvdWxkIGNvbXBhcmUgdGhlIG5ldyBhc1BhdGggdG8gdGhlIGN1cnJlbnQgYXNQYXRoLCBub3QgdGhlIHVybFxuICAgIGlmICghdGhpcy51cmxJc05ldyhjbGVhbmVkQXMpKSB7XG4gICAgICBtZXRob2QgPSAncmVwbGFjZVN0YXRlJ1xuICAgIH1cblxuICAgIGNvbnN0IHJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG4gICAgY29uc3QgeyBzaGFsbG93ID0gZmFsc2UgfSA9IG9wdGlvbnNcblxuICAgIGlmIChpc0R5bmFtaWNSb3V0ZShyb3V0ZSkpIHtcbiAgICAgIGNvbnN0IHsgcGF0aG5hbWU6IGFzUGF0aG5hbWUgfSA9IHBhcnNlUmVsYXRpdmVVcmwoY2xlYW5lZEFzKVxuICAgICAgY29uc3Qgcm91dGVSZWdleCA9IGdldFJvdXRlUmVnZXgocm91dGUpXG4gICAgICBjb25zdCByb3V0ZU1hdGNoID0gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXgpKGFzUGF0aG5hbWUpXG4gICAgICBpZiAoIXJvdXRlTWF0Y2gpIHtcbiAgICAgICAgY29uc3QgbWlzc2luZ1BhcmFtcyA9IE9iamVjdC5rZXlzKHJvdXRlUmVnZXguZ3JvdXBzKS5maWx0ZXIoXG4gICAgICAgICAgKHBhcmFtKSA9PiAhcXVlcnlbcGFyYW1dXG4gICAgICAgIClcblxuICAgICAgICBpZiAobWlzc2luZ1BhcmFtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgICAgYE1pc21hdGNoaW5nIFxcYGFzXFxgIGFuZCBcXGBocmVmXFxgIGZhaWxlZCB0byBtYW51YWxseSBwcm92aWRlIGAgK1xuICAgICAgICAgICAgICAgIGB0aGUgcGFyYW1zOiAke21pc3NpbmdQYXJhbXMuam9pbihcbiAgICAgICAgICAgICAgICAgICcsICdcbiAgICAgICAgICAgICAgICApfSBpbiB0aGUgXFxgaHJlZlxcYCdzIFxcYHF1ZXJ5XFxgYFxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIGBUaGUgcHJvdmlkZWQgXFxgYXNcXGAgdmFsdWUgKCR7YXNQYXRobmFtZX0pIGlzIGluY29tcGF0aWJsZSB3aXRoIHRoZSBcXGBocmVmXFxgIHZhbHVlICgke3JvdXRlfSkuIGAgK1xuICAgICAgICAgICAgICBgUmVhZCBtb3JlOiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9pbmNvbXBhdGlibGUtaHJlZi1hc2BcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIE1lcmdlIHBhcmFtcyBpbnRvIGBxdWVyeWAsIG92ZXJ3cml0aW5nIGFueSBzcGVjaWZpZWQgaW4gc2VhcmNoXG4gICAgICAgIE9iamVjdC5hc3NpZ24ocXVlcnksIHJvdXRlTWF0Y2gpXG4gICAgICB9XG4gICAgfVxuXG4gICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZVN0YXJ0JywgYXMpXG5cbiAgICB0cnkge1xuICAgICAgY29uc3Qgcm91dGVJbmZvID0gYXdhaXQgdGhpcy5nZXRSb3V0ZUluZm8oXG4gICAgICAgIHJvdXRlLFxuICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIGFzLFxuICAgICAgICBzaGFsbG93XG4gICAgICApXG4gICAgICBjb25zdCB7IGVycm9yIH0gPSByb3V0ZUluZm9cblxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdiZWZvcmVIaXN0b3J5Q2hhbmdlJywgYXMpXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucylcblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgYXBwQ29tcDogYW55ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudFxuICAgICAgICA7KHdpbmRvdyBhcyBhbnkpLm5leHQuaXNQcmVyZW5kZXJlZCA9XG4gICAgICAgICAgYXBwQ29tcC5nZXRJbml0aWFsUHJvcHMgPT09IGFwcENvbXAub3JpZ0dldEluaXRpYWxQcm9wcyAmJlxuICAgICAgICAgICEocm91dGVJbmZvLkNvbXBvbmVudCBhcyBhbnkpLmdldEluaXRpYWxQcm9wc1xuICAgICAgfVxuXG4gICAgICBhd2FpdCB0aGlzLnNldChyb3V0ZSwgcGF0aG5hbWUhLCBxdWVyeSwgY2xlYW5lZEFzLCByb3V0ZUluZm8pXG5cbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnJvciwgY2xlYW5lZEFzKVxuICAgICAgICB0aHJvdyBlcnJvclxuICAgICAgfVxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24gJiYgJ19OX1gnIGluIG9wdGlvbnMpIHtcbiAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8ob3B0aW9ucy5fTl9YLCBvcHRpb25zLl9OX1kpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VDb21wbGV0ZScsIGFzKVxuXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH1cblxuICBjaGFuZ2VTdGF0ZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zID0ge31cbiAgKTogdm9pZCB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5IGlzIG5vdCBhdmFpbGFibGUuYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnlbbWV0aG9kXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkuJHttZXRob2R9IGlzIG5vdCBhdmFpbGFibGVgKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobWV0aG9kICE9PSAncHVzaFN0YXRlJyB8fCBnZXRVUkwoKSAhPT0gYXMpIHtcbiAgICAgIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0oXG4gICAgICAgIHtcbiAgICAgICAgICB1cmwsXG4gICAgICAgICAgYXMsXG4gICAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgICBfX046IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIC8vIE1vc3QgYnJvd3NlcnMgY3VycmVudGx5IGlnbm9yZXMgdGhpcyBwYXJhbWV0ZXIsIGFsdGhvdWdoIHRoZXkgbWF5IHVzZSBpdCBpbiB0aGUgZnV0dXJlLlxuICAgICAgICAvLyBQYXNzaW5nIHRoZSBlbXB0eSBzdHJpbmcgaGVyZSBzaG91bGQgYmUgc2FmZSBhZ2FpbnN0IGZ1dHVyZSBjaGFuZ2VzIHRvIHRoZSBtZXRob2QuXG4gICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IaXN0b3J5L3JlcGxhY2VTdGF0ZVxuICAgICAgICAnJyxcbiAgICAgICAgYXNcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBhc3luYyBoYW5kbGVSb3V0ZUluZm9FcnJvcihcbiAgICBlcnI6IEVycm9yICYgeyBjb2RlOiBhbnk7IGNhbmNlbGxlZDogYm9vbGVhbiB9LFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IGFueSxcbiAgICBhczogc3RyaW5nLFxuICAgIGxvYWRFcnJvckZhaWw/OiBib29sZWFuXG4gICk6IFByb21pc2U8Um91dGVJbmZvPiB7XG4gICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgIC8vIGJ1YmJsZSB1cCBjYW5jZWxsYXRpb24gZXJyb3JzXG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG5cbiAgICBpZiAoZXJyLmNvZGUgPT09ICdQQUdFX0xPQURfRVJST1InIHx8IGxvYWRFcnJvckZhaWwpIHtcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVyciwgYXMpXG5cbiAgICAgIC8vIElmIHdlIGNhbid0IGxvYWQgdGhlIHBhZ2UgaXQgY291bGQgYmUgb25lIG9mIGZvbGxvd2luZyByZWFzb25zXG4gICAgICAvLyAgMS4gUGFnZSBkb2Vzbid0IGV4aXN0c1xuICAgICAgLy8gIDIuIFBhZ2UgZG9lcyBleGlzdCBpbiBhIGRpZmZlcmVudCB6b25lXG4gICAgICAvLyAgMy4gSW50ZXJuYWwgZXJyb3Igd2hpbGUgbG9hZGluZyB0aGUgcGFnZVxuXG4gICAgICAvLyBTbywgZG9pbmcgYSBoYXJkIHJlbG9hZCBpcyB0aGUgcHJvcGVyIHdheSB0byBkZWFsIHdpdGggdGhpcy5cbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXNcblxuICAgICAgLy8gQ2hhbmdpbmcgdGhlIFVSTCBkb2Vzbid0IGJsb2NrIGV4ZWN1dGluZyB0aGUgY3VycmVudCBjb2RlIHBhdGguXG4gICAgICAvLyBTbyBsZXQncyB0aHJvdyBhIGNhbmNlbGxhdGlvbiBlcnJvciBzdG9wIHRoZSByb3V0aW5nIGxvZ2ljLlxuICAgICAgdGhyb3cgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpXG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHsgcGFnZTogQ29tcG9uZW50IH0gPSBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KCcvX2Vycm9yJylcbiAgICAgIGNvbnN0IHJvdXRlSW5mbzogUm91dGVJbmZvID0geyBDb21wb25lbnQsIGVyciwgZXJyb3I6IGVyciB9XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IGF3YWl0IHRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwge1xuICAgICAgICAgIGVycixcbiAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICBxdWVyeSxcbiAgICAgICAgfSBhcyBhbnkpXG4gICAgICB9IGNhdGNoIChnaXBFcnIpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gZXJyb3IgcGFnZSBgZ2V0SW5pdGlhbFByb3BzYDogJywgZ2lwRXJyKVxuICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSB7fVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gcm91dGVJbmZvXG4gICAgfSBjYXRjaCAocm91dGVJbmZvRXJyKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihyb3V0ZUluZm9FcnIsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHRydWUpXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZ2V0Um91dGVJbmZvKFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogYW55LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgc2hhbGxvdzogYm9vbGVhbiA9IGZhbHNlXG4gICk6IFByb21pc2U8Um91dGVJbmZvPiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGNhY2hlZFJvdXRlSW5mbyA9IHRoaXMuY29tcG9uZW50c1tyb3V0ZV1cblxuICAgICAgaWYgKHNoYWxsb3cgJiYgY2FjaGVkUm91dGVJbmZvICYmIHRoaXMucm91dGUgPT09IHJvdXRlKSB7XG4gICAgICAgIHJldHVybiBjYWNoZWRSb3V0ZUluZm9cbiAgICAgIH1cblxuICAgICAgY29uc3Qgcm91dGVJbmZvID0gY2FjaGVkUm91dGVJbmZvXG4gICAgICAgID8gY2FjaGVkUm91dGVJbmZvXG4gICAgICAgIDogYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChyb3V0ZSkudGhlbihcbiAgICAgICAgICAgIChyZXMpID0+XG4gICAgICAgICAgICAgICh7XG4gICAgICAgICAgICAgICAgQ29tcG9uZW50OiByZXMucGFnZSxcbiAgICAgICAgICAgICAgICBfX05fU1NHOiByZXMubW9kLl9fTl9TU0csXG4gICAgICAgICAgICAgICAgX19OX1NTUDogcmVzLm1vZC5fX05fU1NQLFxuICAgICAgICAgICAgICB9IGFzIFJvdXRlSW5mbylcbiAgICAgICAgICApXG5cbiAgICAgIGNvbnN0IHsgQ29tcG9uZW50LCBfX05fU1NHLCBfX05fU1NQIH0gPSByb3V0ZUluZm9cblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgeyBpc1ZhbGlkRWxlbWVudFR5cGUgfSA9IHJlcXVpcmUoJ3JlYWN0LWlzJylcbiAgICAgICAgaWYgKCFpc1ZhbGlkRWxlbWVudFR5cGUoQ29tcG9uZW50KSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIGBUaGUgZGVmYXVsdCBleHBvcnQgaXMgbm90IGEgUmVhY3QgQ29tcG9uZW50IGluIHBhZ2U6IFwiJHtwYXRobmFtZX1cImBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGV0IGRhdGFIcmVmOiBzdHJpbmcgfCB1bmRlZmluZWRcblxuICAgICAgaWYgKF9fTl9TU0cgfHwgX19OX1NTUCkge1xuICAgICAgICBkYXRhSHJlZiA9IHRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZihcbiAgICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lLCBxdWVyeSB9KSxcbiAgICAgICAgICBhcyxcbiAgICAgICAgICBfX05fU1NHXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgY29uc3QgcHJvcHMgPSBhd2FpdCB0aGlzLl9nZXREYXRhPFJvdXRlSW5mbz4oKCkgPT5cbiAgICAgICAgX19OX1NTR1xuICAgICAgICAgID8gdGhpcy5fZ2V0U3RhdGljRGF0YShkYXRhSHJlZiEpXG4gICAgICAgICAgOiBfX05fU1NQXG4gICAgICAgICAgPyB0aGlzLl9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmISlcbiAgICAgICAgICA6IHRoaXMuZ2V0SW5pdGlhbFByb3BzKFxuICAgICAgICAgICAgICBDb21wb25lbnQsXG4gICAgICAgICAgICAgIC8vIHdlIHByb3ZpZGUgQXBwVHJlZSBsYXRlciBzbyB0aGlzIG5lZWRzIHRvIGJlIGBhbnlgXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICBhc1BhdGg6IGFzLFxuICAgICAgICAgICAgICB9IGFzIGFueVxuICAgICAgICAgICAgKVxuICAgICAgKVxuICAgICAgcm91dGVJbmZvLnByb3BzID0gcHJvcHNcbiAgICAgIHRoaXMuY29tcG9uZW50c1tyb3V0ZV0gPSByb3V0ZUluZm9cbiAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKGVyciwgcGF0aG5hbWUsIHF1ZXJ5LCBhcylcbiAgICB9XG4gIH1cblxuICBzZXQoXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBhbnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBkYXRhOiBSb3V0ZUluZm9cbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gZmFsc2VcblxuICAgIHRoaXMucm91dGUgPSByb3V0ZVxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIHRoaXMuYXNQYXRoID0gYXNcbiAgICByZXR1cm4gdGhpcy5ub3RpZnkoZGF0YSlcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayB0byBleGVjdXRlIGJlZm9yZSByZXBsYWNpbmcgcm91dGVyIHN0YXRlXG4gICAqIEBwYXJhbSBjYiBjYWxsYmFjayB0byBiZSBleGVjdXRlZFxuICAgKi9cbiAgYmVmb3JlUG9wU3RhdGUoY2I6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2spIHtcbiAgICB0aGlzLl9icHMgPSBjYlxuICB9XG5cbiAgb25seUFIYXNoQ2hhbmdlKGFzOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBpZiAoIXRoaXMuYXNQYXRoKSByZXR1cm4gZmFsc2VcbiAgICBjb25zdCBbb2xkVXJsTm9IYXNoLCBvbGRIYXNoXSA9IHRoaXMuYXNQYXRoLnNwbGl0KCcjJylcbiAgICBjb25zdCBbbmV3VXJsTm9IYXNoLCBuZXdIYXNoXSA9IGFzLnNwbGl0KCcjJylcblxuICAgIC8vIE1ha2VzIHN1cmUgd2Ugc2Nyb2xsIHRvIHRoZSBwcm92aWRlZCBoYXNoIGlmIHRoZSB1cmwvaGFzaCBhcmUgdGhlIHNhbWVcbiAgICBpZiAobmV3SGFzaCAmJiBvbGRVcmxOb0hhc2ggPT09IG5ld1VybE5vSGFzaCAmJiBvbGRIYXNoID09PSBuZXdIYXNoKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSB1cmxzIGFyZSBjaGFuZ2UsIHRoZXJlJ3MgbW9yZSB0aGFuIGEgaGFzaCBjaGFuZ2VcbiAgICBpZiAob2xkVXJsTm9IYXNoICE9PSBuZXdVcmxOb0hhc2gpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSBoYXNoIGhhcyBjaGFuZ2VkLCB0aGVuIGl0J3MgYSBoYXNoIG9ubHkgY2hhbmdlLlxuICAgIC8vIFRoaXMgY2hlY2sgaXMgbmVjZXNzYXJ5IHRvIGhhbmRsZSBib3RoIHRoZSBlbnRlciBhbmRcbiAgICAvLyBsZWF2ZSBoYXNoID09PSAnJyBjYXNlcy4gVGhlIGlkZW50aXR5IGNhc2UgZmFsbHMgdGhyb3VnaFxuICAgIC8vIGFuZCBpcyB0cmVhdGVkIGFzIGEgbmV4dCByZWxvYWQuXG4gICAgcmV0dXJuIG9sZEhhc2ggIT09IG5ld0hhc2hcbiAgfVxuXG4gIHNjcm9sbFRvSGFzaChhczogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgWywgaGFzaF0gPSBhcy5zcGxpdCgnIycpXG4gICAgLy8gU2Nyb2xsIHRvIHRvcCBpZiB0aGUgaGFzaCBpcyBqdXN0IGAjYCB3aXRoIG5vIHZhbHVlXG4gICAgaWYgKGhhc2ggPT09ICcnKSB7XG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIEZpcnN0IHdlIGNoZWNrIGlmIHRoZSBlbGVtZW50IGJ5IGlkIGlzIGZvdW5kXG4gICAgY29uc3QgaWRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhhc2gpXG4gICAgaWYgKGlkRWwpIHtcbiAgICAgIGlkRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIC8vIElmIHRoZXJlJ3Mgbm8gZWxlbWVudCB3aXRoIHRoZSBpZCwgd2UgY2hlY2sgdGhlIGBuYW1lYCBwcm9wZXJ0eVxuICAgIC8vIFRvIG1pcnJvciBicm93c2Vyc1xuICAgIGNvbnN0IG5hbWVFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKGhhc2gpWzBdXG4gICAgaWYgKG5hbWVFbCkge1xuICAgICAgbmFtZUVsLnNjcm9sbEludG9WaWV3KClcbiAgICB9XG4gIH1cblxuICB1cmxJc05ldyhhc1BhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmFzUGF0aCAhPT0gYXNQYXRoXG4gIH1cblxuICAvKipcbiAgICogUHJlZmV0Y2ggcGFnZSBjb2RlLCB5b3UgbWF5IHdhaXQgZm9yIHRoZSBkYXRhIGR1cmluZyBwYWdlIHJlbmRlcmluZy5cbiAgICogVGhpcyBmZWF0dXJlIG9ubHkgd29ya3MgaW4gcHJvZHVjdGlvbiFcbiAgICogQHBhcmFtIHVybCB0aGUgaHJlZiBvZiBwcmVmZXRjaGVkIHBhZ2VcbiAgICogQHBhcmFtIGFzUGF0aCB0aGUgYXMgcGF0aCBvZiB0aGUgcHJlZmV0Y2hlZCBwYWdlXG4gICAqL1xuICBhc3luYyBwcmVmZXRjaChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhc1BhdGg6IHN0cmluZyA9IHVybCxcbiAgICBvcHRpb25zOiBQcmVmZXRjaE9wdGlvbnMgPSB7fVxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCBwYXJzZWQgPSB0cnlQYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIGlmICghcGFyc2VkKSByZXR1cm5cblxuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHBhcnNlZFxuXG4gICAgLy8gUHJlZmV0Y2ggaXMgbm90IHN1cHBvcnRlZCBpbiBkZXZlbG9wbWVudCBtb2RlIGJlY2F1c2UgaXQgd291bGQgdHJpZ2dlciBvbi1kZW1hbmQtZW50cmllc1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuICAgIGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgIHRoaXMucGFnZUxvYWRlci5wcmVmZXRjaERhdGEodXJsLCBhc1BhdGgpLFxuICAgICAgdGhpcy5wYWdlTG9hZGVyW29wdGlvbnMucHJpb3JpdHkgPyAnbG9hZFBhZ2UnIDogJ3ByZWZldGNoJ10ocm91dGUpLFxuICAgIF0pXG4gIH1cblxuICBhc3luYyBmZXRjaENvbXBvbmVudChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTxDb21wb25lbnRSZXM+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAodGhpcy5jbGMgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfSlcblxuICAgIGNvbnN0IGNvbXBvbmVudFJlc3VsdCA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5sb2FkUGFnZShyb3V0ZSlcblxuICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgIGNvbnN0IGVycm9yOiBhbnkgPSBuZXcgRXJyb3IoXG4gICAgICAgIGBBYm9ydCBmZXRjaGluZyBjb21wb25lbnQgZm9yIHJvdXRlOiBcIiR7cm91dGV9XCJgXG4gICAgICApXG4gICAgICBlcnJvci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICB0aHJvdyBlcnJvclxuICAgIH1cblxuICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcG9uZW50UmVzdWx0XG4gIH1cblxuICBfZ2V0RGF0YTxUPihmbjogKCkgPT4gUHJvbWlzZTxUPik6IFByb21pc2U8VD4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9XG4gICAgdGhpcy5jbGMgPSBjYW5jZWxcbiAgICByZXR1cm4gZm4oKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICAgIH1cblxuICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICBjb25zdCBlcnI6IGFueSA9IG5ldyBFcnJvcignTG9hZGluZyBpbml0aWFsIHByb3BzIGNhbmNlbGxlZCcpXG4gICAgICAgIGVyci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U3RhdGljRGF0YShkYXRhSHJlZjogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICBjb25zdCB7IGhyZWY6IGNhY2hlS2V5IH0gPSBuZXcgVVJMKGRhdGFIcmVmLCB3aW5kb3cubG9jYXRpb24uaHJlZilcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyAmJiB0aGlzLnNkY1tjYWNoZUtleV0pIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5zZGNbY2FjaGVLZXldKVxuICAgIH1cbiAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcikudGhlbigoZGF0YSkgPT4ge1xuICAgICAgdGhpcy5zZGNbY2FjaGVLZXldID0gZGF0YVxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICB9XG5cbiAgX2dldFNlcnZlckRhdGEoZGF0YUhyZWY6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiB7XG4gICAgcmV0dXJuIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpXG4gIH1cblxuICBnZXRJbml0aWFsUHJvcHMoXG4gICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlLFxuICAgIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gICk6IFByb21pc2U8YW55PiB7XG4gICAgY29uc3QgeyBDb21wb25lbnQ6IEFwcCB9ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddXG4gICAgY29uc3QgQXBwVHJlZSA9IHRoaXMuX3dyYXBBcHAoQXBwKVxuICAgIGN0eC5BcHBUcmVlID0gQXBwVHJlZVxuICAgIHJldHVybiBsb2FkR2V0SW5pdGlhbFByb3BzPEFwcENvbnRleHRUeXBlPFJvdXRlcj4+KEFwcCwge1xuICAgICAgQXBwVHJlZSxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIHJvdXRlcjogdGhpcyxcbiAgICAgIGN0eCxcbiAgICB9KVxuICB9XG5cbiAgYWJvcnRDb21wb25lbnRMb2FkKGFzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jbGMpIHtcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSwgYXMpXG4gICAgICB0aGlzLmNsYygpXG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG4gIH1cblxuICBub3RpZnkoZGF0YTogUm91dGVJbmZvKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuc3ViKGRhdGEsIHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQpXG4gIH1cbn1cbiIsIi8vIEZvcm1hdCBmdW5jdGlvbiBtb2RpZmllZCBmcm9tIG5vZGVqc1xuLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IGVuY29kZSBhcyBlbmNvZGVRdWVyeXN0cmluZyB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuXG5jb25zdCBzbGFzaGVkUHJvdG9jb2xzID0gL2h0dHBzP3xmdHB8Z29waGVyfGZpbGUvXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRVcmwodXJsT2JqOiBVcmxPYmplY3QpIHtcbiAgbGV0IHsgYXV0aCwgaG9zdG5hbWUgfSA9IHVybE9ialxuICBsZXQgcHJvdG9jb2wgPSB1cmxPYmoucHJvdG9jb2wgfHwgJydcbiAgbGV0IHBhdGhuYW1lID0gdXJsT2JqLnBhdGhuYW1lIHx8ICcnXG4gIGxldCBoYXNoID0gdXJsT2JqLmhhc2ggfHwgJydcbiAgbGV0IHF1ZXJ5ID0gdXJsT2JqLnF1ZXJ5IHx8ICcnXG4gIGxldCBob3N0OiBzdHJpbmcgfCBmYWxzZSA9IGZhbHNlXG5cbiAgYXV0aCA9IGF1dGggPyBlbmNvZGVVUklDb21wb25lbnQoYXV0aCkucmVwbGFjZSgvJTNBL2ksICc6JykgKyAnQCcgOiAnJ1xuXG4gIGlmICh1cmxPYmouaG9zdCkge1xuICAgIGhvc3QgPSBhdXRoICsgdXJsT2JqLmhvc3RcbiAgfSBlbHNlIGlmIChob3N0bmFtZSkge1xuICAgIGhvc3QgPSBhdXRoICsgKH5ob3N0bmFtZS5pbmRleE9mKCc6JykgPyBgWyR7aG9zdG5hbWV9XWAgOiBob3N0bmFtZSlcbiAgICBpZiAodXJsT2JqLnBvcnQpIHtcbiAgICAgIGhvc3QgKz0gJzonICsgdXJsT2JqLnBvcnRcbiAgICB9XG4gIH1cblxuICBpZiAocXVlcnkgJiYgdHlwZW9mIHF1ZXJ5ID09PSAnb2JqZWN0Jykge1xuICAgIC8vIHF1ZXJ5ID0gJycgKyBuZXcgVVJMU2VhcmNoUGFyYW1zKHF1ZXJ5KTtcbiAgICBxdWVyeSA9IGVuY29kZVF1ZXJ5c3RyaW5nKHF1ZXJ5KVxuICB9XG5cbiAgbGV0IHNlYXJjaCA9IHVybE9iai5zZWFyY2ggfHwgKHF1ZXJ5ICYmIGA/JHtxdWVyeX1gKSB8fCAnJ1xuXG4gIGlmIChwcm90b2NvbCAmJiBwcm90b2NvbC5zdWJzdHIoLTEpICE9PSAnOicpIHByb3RvY29sICs9ICc6J1xuXG4gIGlmIChcbiAgICB1cmxPYmouc2xhc2hlcyB8fFxuICAgICgoIXByb3RvY29sIHx8IHNsYXNoZWRQcm90b2NvbHMudGVzdChwcm90b2NvbCkpICYmIGhvc3QgIT09IGZhbHNlKVxuICApIHtcbiAgICBob3N0ID0gJy8vJyArIChob3N0IHx8ICcnKVxuICAgIGlmIChwYXRobmFtZSAmJiBwYXRobmFtZVswXSAhPT0gJy8nKSBwYXRobmFtZSA9ICcvJyArIHBhdGhuYW1lXG4gIH0gZWxzZSBpZiAoIWhvc3QpIHtcbiAgICBob3N0ID0gJydcbiAgfVxuXG4gIGlmIChoYXNoICYmIGhhc2hbMF0gIT09ICcjJykgaGFzaCA9ICcjJyArIGhhc2hcbiAgaWYgKHNlYXJjaCAmJiBzZWFyY2hbMF0gIT09ICc/Jykgc2VhcmNoID0gJz8nICsgc2VhcmNoXG5cbiAgcGF0aG5hbWUgPSBwYXRobmFtZS5yZXBsYWNlKC9bPyNdL2csIGVuY29kZVVSSUNvbXBvbmVudClcbiAgc2VhcmNoID0gc2VhcmNoLnJlcGxhY2UoJyMnLCAnJTIzJylcblxuICByZXR1cm4gYCR7cHJvdG9jb2x9JHtob3N0fSR7cGF0aG5hbWV9JHtzZWFyY2h9JHtoYXNofWBcbn1cbiIsIi8vIElkZW50aWZ5IC9bcGFyYW1dLyBpbiByb3V0ZSBzdHJpbmdcbmNvbnN0IFRFU1RfUk9VVEUgPSAvXFwvXFxbW14vXSs/XFxdKD89XFwvfCQpL1xuXG5leHBvcnQgZnVuY3Rpb24gaXNEeW5hbWljUm91dGUocm91dGU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gVEVTVF9ST1VURS50ZXN0KHJvdXRlKVxufVxuIiwiY29uc3QgRFVNTVlfQkFTRSA9IG5ldyBVUkwoJ2h0dHA6Ly9uJylcblxuLyoqXG4gKiBQYXJzZXMgcGF0aC1yZWxhdGl2ZSB1cmxzIChlLmcuIGAvaGVsbG8vd29ybGQ/Zm9vPWJhcmApLiBJZiB1cmwgaXNuJ3QgcGF0aC1yZWxhdGl2ZVxuICogKGUuZy4gYC4vaGVsbG9gKSB0aGVuIGF0IGxlYXN0IGJhc2UgbXVzdCBiZS5cbiAqIEFic29sdXRlIHVybHMgYXJlIHJlamVjdGVkLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VSZWxhdGl2ZVVybCh1cmw6IHN0cmluZywgYmFzZT86IHN0cmluZykge1xuICBjb25zdCByZXNvbHZlZEJhc2UgPSBiYXNlID8gbmV3IFVSTChiYXNlLCBEVU1NWV9CQVNFKSA6IERVTU1ZX0JBU0VcbiAgY29uc3QgeyBwYXRobmFtZSwgc2VhcmNoUGFyYW1zLCBzZWFyY2gsIGhhc2gsIGhyZWYsIG9yaWdpbiB9ID0gbmV3IFVSTChcbiAgICB1cmwsXG4gICAgcmVzb2x2ZWRCYXNlXG4gIClcbiAgaWYgKG9yaWdpbiAhPT0gRFVNTVlfQkFTRS5vcmlnaW4pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFyaWFudDogaW52YWxpZCByZWxhdGl2ZSBVUkwnKVxuICB9XG4gIHJldHVybiB7XG4gICAgcGF0aG5hbWUsXG4gICAgc2VhcmNoUGFyYW1zLFxuICAgIHNlYXJjaCxcbiAgICBoYXNoLFxuICAgIGhyZWY6IGhyZWYuc2xpY2UoRFVNTVlfQkFTRS5vcmlnaW4ubGVuZ3RoKSxcbiAgfVxufVxuIiwiaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vcm91dGUtcmVnZXgnXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleDogUmV0dXJuVHlwZTx0eXBlb2YgZ2V0Um91dGVSZWdleD4pIHtcbiAgY29uc3QgeyByZSwgZ3JvdXBzIH0gPSByb3V0ZVJlZ2V4XG4gIHJldHVybiAocGF0aG5hbWU6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQpID0+IHtcbiAgICBjb25zdCByb3V0ZU1hdGNoID0gcmUuZXhlYyhwYXRobmFtZSEpXG4gICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBjb25zdCBkZWNvZGUgPSAocGFyYW06IHN0cmluZykgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChwYXJhbSlcbiAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgY29uc3QgZXJyOiBFcnJvciAmIHsgY29kZT86IHN0cmluZyB9ID0gbmV3IEVycm9yKFxuICAgICAgICAgICdmYWlsZWQgdG8gZGVjb2RlIHBhcmFtJ1xuICAgICAgICApXG4gICAgICAgIGVyci5jb2RlID0gJ0RFQ09ERV9GQUlMRUQnXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBwYXJhbXM6IHsgW3BhcmFtTmFtZTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfSA9IHt9XG5cbiAgICBPYmplY3Qua2V5cyhncm91cHMpLmZvckVhY2goKHNsdWdOYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IGcgPSBncm91cHNbc2x1Z05hbWVdXG4gICAgICBjb25zdCBtID0gcm91dGVNYXRjaFtnLnBvc11cbiAgICAgIGlmIChtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcGFyYW1zW3NsdWdOYW1lXSA9IH5tLmluZGV4T2YoJy8nKVxuICAgICAgICAgID8gbS5zcGxpdCgnLycpLm1hcCgoZW50cnkpID0+IGRlY29kZShlbnRyeSkpXG4gICAgICAgICAgOiBnLnJlcGVhdFxuICAgICAgICAgID8gW2RlY29kZShtKV1cbiAgICAgICAgICA6IGRlY29kZShtKVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIHBhcmFtc1xuICB9XG59XG4iLCJpbnRlcmZhY2UgR3JvdXAge1xuICBwb3M6IG51bWJlclxuICByZXBlYXQ6IGJvb2xlYW5cbiAgb3B0aW9uYWw6IGJvb2xlYW5cbn1cblxuLy8gdGhpcyBpc24ndCBpbXBvcnRpbmcgdGhlIGVzY2FwZS1zdHJpbmctcmVnZXggbW9kdWxlXG4vLyB0byByZWR1Y2UgYnl0ZXNcbmZ1bmN0aW9uIGVzY2FwZVJlZ2V4KHN0cjogc3RyaW5nKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvW3xcXFxce30oKVtcXF1eJCsqPy4tXS9nLCAnXFxcXCQmJylcbn1cblxuZnVuY3Rpb24gcGFyc2VQYXJhbWV0ZXIocGFyYW06IHN0cmluZykge1xuICBjb25zdCBvcHRpb25hbCA9IHBhcmFtLnN0YXJ0c1dpdGgoJ1snKSAmJiBwYXJhbS5lbmRzV2l0aCgnXScpXG4gIGlmIChvcHRpb25hbCkge1xuICAgIHBhcmFtID0gcGFyYW0uc2xpY2UoMSwgLTEpXG4gIH1cbiAgY29uc3QgcmVwZWF0ID0gcGFyYW0uc3RhcnRzV2l0aCgnLi4uJylcbiAgaWYgKHJlcGVhdCkge1xuICAgIHBhcmFtID0gcGFyYW0uc2xpY2UoMylcbiAgfVxuICByZXR1cm4geyBrZXk6IHBhcmFtLCByZXBlYXQsIG9wdGlvbmFsIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlUmVnZXgoXG4gIG5vcm1hbGl6ZWRSb3V0ZTogc3RyaW5nXG4pOiB7XG4gIHJlOiBSZWdFeHBcbiAgbmFtZWRSZWdleD86IHN0cmluZ1xuICByb3V0ZUtleXM/OiB7IFtuYW1lZDogc3RyaW5nXTogc3RyaW5nIH1cbiAgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IEdyb3VwIH1cbn0ge1xuICBjb25zdCBzZWdtZW50cyA9IChub3JtYWxpemVkUm91dGUucmVwbGFjZSgvXFwvJC8sICcnKSB8fCAnLycpXG4gICAgLnNsaWNlKDEpXG4gICAgLnNwbGl0KCcvJylcblxuICBjb25zdCBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogR3JvdXAgfSA9IHt9XG4gIGxldCBncm91cEluZGV4ID0gMVxuICBjb25zdCBwYXJhbWV0ZXJpemVkUm91dGUgPSBzZWdtZW50c1xuICAgIC5tYXAoKHNlZ21lbnQpID0+IHtcbiAgICAgIGlmIChzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSAmJiBzZWdtZW50LmVuZHNXaXRoKCddJykpIHtcbiAgICAgICAgY29uc3QgeyBrZXksIG9wdGlvbmFsLCByZXBlYXQgfSA9IHBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwgLTEpKVxuICAgICAgICBncm91cHNba2V5XSA9IHsgcG9zOiBncm91cEluZGV4KyssIHJlcGVhdCwgb3B0aW9uYWwgfVxuICAgICAgICByZXR1cm4gcmVwZWF0ID8gKG9wdGlvbmFsID8gJyg/Oi8oLis/KSk/JyA6ICcvKC4rPyknKSA6ICcvKFteL10rPyknXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWBcbiAgICAgIH1cbiAgICB9KVxuICAgIC5qb2luKCcnKVxuXG4gIC8vIGRlYWQgY29kZSBlbGltaW5hdGUgZm9yIGJyb3dzZXIgc2luY2UgaXQncyBvbmx5IG5lZWRlZFxuICAvLyB3aGlsZSBnZW5lcmF0aW5nIHJvdXRlcy1tYW5pZmVzdFxuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBsZXQgcm91dGVLZXlDaGFyQ29kZSA9IDk3XG4gICAgbGV0IHJvdXRlS2V5Q2hhckxlbmd0aCA9IDFcblxuICAgIC8vIGJ1aWxkcyBhIG1pbmltYWwgcm91dGVLZXkgdXNpbmcgb25seSBhLXogYW5kIG1pbmltYWwgbnVtYmVyIG9mIGNoYXJhY3RlcnNcbiAgICBjb25zdCBnZXRTYWZlUm91dGVLZXkgPSAoKSA9PiB7XG4gICAgICBsZXQgcm91dGVLZXkgPSAnJ1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvdXRlS2V5Q2hhckxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJvdXRlS2V5ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUocm91dGVLZXlDaGFyQ29kZSlcbiAgICAgICAgcm91dGVLZXlDaGFyQ29kZSsrXG5cbiAgICAgICAgaWYgKHJvdXRlS2V5Q2hhckNvZGUgPiAxMjIpIHtcbiAgICAgICAgICByb3V0ZUtleUNoYXJMZW5ndGgrK1xuICAgICAgICAgIHJvdXRlS2V5Q2hhckNvZGUgPSA5N1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gcm91dGVLZXlcbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZUtleXM6IHsgW25hbWVkOiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9XG5cbiAgICBsZXQgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGUgPSBzZWdtZW50c1xuICAgICAgLm1hcCgoc2VnbWVudCkgPT4ge1xuICAgICAgICBpZiAoc2VnbWVudC5zdGFydHNXaXRoKCdbJykgJiYgc2VnbWVudC5lbmRzV2l0aCgnXScpKSB7XG4gICAgICAgICAgY29uc3QgeyBrZXksIG9wdGlvbmFsLCByZXBlYXQgfSA9IHBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwgLTEpKVxuICAgICAgICAgIC8vIHJlcGxhY2UgYW55IG5vbi13b3JkIGNoYXJhY3RlcnMgc2luY2UgdGhleSBjYW4gYnJlYWtcbiAgICAgICAgICAvLyB0aGUgbmFtZWQgcmVnZXhcbiAgICAgICAgICBsZXQgY2xlYW5lZEtleSA9IGtleS5yZXBsYWNlKC9cXFcvZywgJycpXG4gICAgICAgICAgbGV0IGludmFsaWRLZXkgPSBmYWxzZVxuXG4gICAgICAgICAgLy8gY2hlY2sgaWYgdGhlIGtleSBpcyBzdGlsbCBpbnZhbGlkIGFuZCBmYWxsYmFjayB0byB1c2luZyBhIGtub3duXG4gICAgICAgICAgLy8gc2FmZSBrZXlcbiAgICAgICAgICBpZiAoY2xlYW5lZEtleS5sZW5ndGggPT09IDAgfHwgY2xlYW5lZEtleS5sZW5ndGggPiAzMCkge1xuICAgICAgICAgICAgaW52YWxpZEtleSA9IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCFpc05hTihwYXJzZUludChjbGVhbmVkS2V5LnN1YnN0cigwLCAxKSkpKSB7XG4gICAgICAgICAgICBpbnZhbGlkS2V5ID0gdHJ1ZVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChpbnZhbGlkS2V5KSB7XG4gICAgICAgICAgICBjbGVhbmVkS2V5ID0gZ2V0U2FmZVJvdXRlS2V5KClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByb3V0ZUtleXNbY2xlYW5lZEtleV0gPSBrZXlcbiAgICAgICAgICByZXR1cm4gcmVwZWF0XG4gICAgICAgICAgICA/IG9wdGlvbmFsXG4gICAgICAgICAgICAgID8gYCg/Oi8oPzwke2NsZWFuZWRLZXl9Pi4rPykpP2BcbiAgICAgICAgICAgICAgOiBgLyg/PCR7Y2xlYW5lZEtleX0+Lis/KWBcbiAgICAgICAgICAgIDogYC8oPzwke2NsZWFuZWRLZXl9PlteL10rPylgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuam9pbignJylcblxuICAgIHJldHVybiB7XG4gICAgICByZTogbmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxcbiAgICAgIGdyb3VwcyxcbiAgICAgIHJvdXRlS2V5cyxcbiAgICAgIG5hbWVkUmVnZXg6IGBeJHtuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCxcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHJlOiBuZXcgUmVnRXhwKGBeJHtwYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLFxuICAgIGdyb3VwcyxcbiAgfVxufVxuIiwiaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcblxuZXhwb3J0IGZ1bmN0aW9uIHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoXG4gIHNlYXJjaFBhcmFtczogVVJMU2VhcmNoUGFyYW1zXG4pOiBQYXJzZWRVcmxRdWVyeSB7XG4gIGNvbnN0IHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSA9IHt9XG4gIHNlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XG4gICAgaWYgKHR5cGVvZiBxdWVyeVtrZXldID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcXVlcnlba2V5XSA9IHZhbHVlXG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHF1ZXJ5W2tleV0pKSB7XG4gICAgICA7KHF1ZXJ5W2tleV0gYXMgc3RyaW5nW10pLnB1c2godmFsdWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIHF1ZXJ5W2tleV0gPSBbcXVlcnlba2V5XSBhcyBzdHJpbmcsIHZhbHVlXVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIHF1ZXJ5XG59XG4iLCJpbXBvcnQgeyBJbmNvbWluZ01lc3NhZ2UsIFNlcnZlclJlc3BvbnNlIH0gZnJvbSAnaHR0cCdcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgeyBmb3JtYXRVcmwgfSBmcm9tICcuL3JvdXRlci91dGlscy9mb3JtYXQtdXJsJ1xuaW1wb3J0IHsgTWFuaWZlc3RJdGVtIH0gZnJvbSAnLi4vc2VydmVyL2xvYWQtY29tcG9uZW50cydcbmltcG9ydCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBFbnYgfSBmcm9tICcuLi8uLi9saWIvbG9hZC1lbnYtY29uZmlnJ1xuaW1wb3J0IHsgQnVpbGRNYW5pZmVzdCB9IGZyb20gJy4uL3NlcnZlci9nZXQtcGFnZS1maWxlcydcblxuLyoqXG4gKiBUeXBlcyB1c2VkIGJ5IGJvdGggbmV4dCBhbmQgbmV4dC1zZXJ2ZXJcbiAqL1xuXG5leHBvcnQgdHlwZSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4gPSBDb21wb25lbnRUeXBlPFA+ICYge1xuICAvKipcbiAgICogVXNlZCBmb3IgaW5pdGlhbCBwYWdlIGxvYWQgZGF0YSBwb3B1bGF0aW9uLiBEYXRhIHJldHVybmVkIGZyb20gYGdldEluaXRpYWxQcm9wc2AgaXMgc2VyaWFsaXplZCB3aGVuIHNlcnZlciByZW5kZXJlZC5cbiAgICogTWFrZSBzdXJlIHRvIHJldHVybiBwbGFpbiBgT2JqZWN0YCB3aXRob3V0IHVzaW5nIGBEYXRlYCwgYE1hcGAsIGBTZXRgLlxuICAgKiBAcGFyYW0gY3R4IENvbnRleHQgb2YgYHBhZ2VgXG4gICAqL1xuICBnZXRJbml0aWFsUHJvcHM/KGNvbnRleHQ6IEMpOiBJUCB8IFByb21pc2U8SVA+XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50VHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBEb2N1bWVudENvbnRleHQsXG4gIERvY3VtZW50SW5pdGlhbFByb3BzLFxuICBEb2N1bWVudFByb3BzXG4+ICYge1xuICByZW5kZXJEb2N1bWVudChcbiAgICBEb2N1bWVudDogRG9jdW1lbnRUeXBlLFxuICAgIHByb3BzOiBEb2N1bWVudFByb3BzXG4gICk6IFJlYWN0LlJlYWN0RWxlbWVudFxufVxuXG5leHBvcnQgdHlwZSBBcHBUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIEFwcENvbnRleHRUeXBlLFxuICBBcHBJbml0aWFsUHJvcHMsXG4gIEFwcFByb3BzVHlwZVxuPlxuXG5leHBvcnQgdHlwZSBBcHBUcmVlVHlwZSA9IENvbXBvbmVudFR5cGU8XG4gIEFwcEluaXRpYWxQcm9wcyAmIHsgW25hbWU6IHN0cmluZ106IGFueSB9XG4+XG5cbi8qKlxuICogV2ViIHZpdGFscyBwcm92aWRlZCB0byBfYXBwLnJlcG9ydFdlYlZpdGFscyBieSBDb3JlIFdlYiBWaXRhbHMgcGx1Z2luIGRldmVsb3BlZCBieSBHb29nbGUgQ2hyb21lIHRlYW0uXG4gKiBodHRwczovL25leHRqcy5vcmcvYmxvZy9uZXh0LTktNCNpbnRlZ3JhdGVkLXdlYi12aXRhbHMtcmVwb3J0aW5nXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRXZWJWaXRhbHNNZXRyaWMgPSB7XG4gIGlkOiBzdHJpbmdcbiAgbGFiZWw6IHN0cmluZ1xuICBuYW1lOiBzdHJpbmdcbiAgc3RhcnRUaW1lOiBudW1iZXJcbiAgdmFsdWU6IG51bWJlclxufVxuXG5leHBvcnQgdHlwZSBFbmhhbmNlcjxDPiA9IChDb21wb25lbnQ6IEMpID0+IENcblxuZXhwb3J0IHR5cGUgQ29tcG9uZW50c0VuaGFuY2VyID1cbiAgfCB7XG4gICAgICBlbmhhbmNlQXBwPzogRW5oYW5jZXI8QXBwVHlwZT5cbiAgICAgIGVuaGFuY2VDb21wb25lbnQ/OiBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cbiAgICB9XG4gIHwgRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2VSZXN1bHQgPSB7XG4gIGh0bWw6IHN0cmluZ1xuICBoZWFkPzogQXJyYXk8SlNYLkVsZW1lbnQgfCBudWxsPlxufVxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlID0gKFxuICBvcHRpb25zPzogQ29tcG9uZW50c0VuaGFuY2VyXG4pID0+IFJlbmRlclBhZ2VSZXN1bHQgfCBQcm9taXNlPFJlbmRlclBhZ2VSZXN1bHQ+XG5cbmV4cG9ydCB0eXBlIEJhc2VDb250ZXh0ID0ge1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICBbazogc3RyaW5nXTogYW55XG59XG5cbmV4cG9ydCB0eXBlIE5FWFRfREFUQSA9IHtcbiAgcHJvcHM6IGFueVxuICBwYWdlOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGJ1aWxkSWQ6IHN0cmluZ1xuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBydW50aW1lQ29uZmlnPzogeyBba2V5OiBzdHJpbmddOiBhbnkgfVxuICBuZXh0RXhwb3J0PzogYm9vbGVhblxuICBhdXRvRXhwb3J0PzogYm9vbGVhblxuICBpc0ZhbGxiYWNrPzogYm9vbGVhblxuICBkeW5hbWljSWRzPzogc3RyaW5nW11cbiAgZXJyPzogRXJyb3IgJiB7IHN0YXR1c0NvZGU/OiBudW1iZXIgfVxuICBnc3A/OiBib29sZWFuXG4gIGdzc3A/OiBib29sZWFuXG4gIGN1c3RvbVNlcnZlcj86IGJvb2xlYW5cbiAgZ2lwPzogYm9vbGVhblxuICBhcHBHaXA/OiBib29sZWFuXG59XG5cbi8qKlxuICogYE5leHRgIGNvbnRleHRcbiAqL1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lIGludGVyZmFjZS1uYW1lXG5leHBvcnQgaW50ZXJmYWNlIE5leHRQYWdlQ29udGV4dCB7XG4gIC8qKlxuICAgKiBFcnJvciBvYmplY3QgaWYgZW5jb3VudGVyZWQgZHVyaW5nIHJlbmRlcmluZ1xuICAgKi9cbiAgZXJyPzogKEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH0pIHwgbnVsbFxuICAvKipcbiAgICogYEhUVFBgIHJlcXVlc3Qgb2JqZWN0LlxuICAgKi9cbiAgcmVxPzogSW5jb21pbmdNZXNzYWdlXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVzcG9uc2Ugb2JqZWN0LlxuICAgKi9cbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgLyoqXG4gICAqIFBhdGggc2VjdGlvbiBvZiBgVVJMYC5cbiAgICovXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgLyoqXG4gICAqIFF1ZXJ5IHN0cmluZyBzZWN0aW9uIG9mIGBVUkxgIHBhcnNlZCBhcyBhbiBvYmplY3QuXG4gICAqL1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgLyoqXG4gICAqIGBTdHJpbmdgIG9mIHRoZSBhY3R1YWwgcGF0aCBpbmNsdWRpbmcgcXVlcnkuXG4gICAqL1xuICBhc1BhdGg/OiBzdHJpbmdcbiAgLyoqXG4gICAqIGBDb21wb25lbnRgIHRoZSB0cmVlIG9mIHRoZSBBcHAgdG8gdXNlIGlmIG5lZWRpbmcgdG8gcmVuZGVyIHNlcGFyYXRlbHlcbiAgICovXG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG59XG5cbmV4cG9ydCB0eXBlIEFwcENvbnRleHRUeXBlPFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcj4gPSB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0PlxuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxuICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICByb3V0ZXI6IFJcbn1cblxuZXhwb3J0IHR5cGUgQXBwSW5pdGlhbFByb3BzID0ge1xuICBwYWdlUHJvcHM6IGFueVxufVxuXG5leHBvcnQgdHlwZSBBcHBQcm9wc1R5cGU8XG4gIFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcixcbiAgUCA9IHt9XG4+ID0gQXBwSW5pdGlhbFByb3BzICYge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dCwgYW55LCBQPlxuICByb3V0ZXI6IFJcbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0ICYge1xuICByZW5kZXJQYWdlOiBSZW5kZXJQYWdlXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50SW5pdGlhbFByb3BzID0gUmVuZGVyUGFnZVJlc3VsdCAmIHtcbiAgc3R5bGVzPzogUmVhY3QuUmVhY3RFbGVtZW50W10gfCBSZWFjdC5SZWFjdEZyYWdtZW50XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50UHJvcHMgPSBEb2N1bWVudEluaXRpYWxQcm9wcyAmIHtcbiAgX19ORVhUX0RBVEFfXzogTkVYVF9EQVRBXG4gIGRhbmdlcm91c0FzUGF0aDogc3RyaW5nXG4gIGJ1aWxkTWFuaWZlc3Q6IEJ1aWxkTWFuaWZlc3RcbiAgYW1wUGF0aDogc3RyaW5nXG4gIGluQW1wTW9kZTogYm9vbGVhblxuICBoeWJyaWRBbXA6IGJvb2xlYW5cbiAgaXNEZXZlbG9wbWVudDogYm9vbGVhblxuICBmaWxlczogc3RyaW5nW11cbiAgZHluYW1pY0ltcG9ydHM6IE1hbmlmZXN0SXRlbVtdXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIGNhbm9uaWNhbEJhc2U6IHN0cmluZ1xuICBoZWFkVGFnczogYW55W11cbiAgdW5zdGFibGVfcnVudGltZUpTPzogZmFsc2Vcbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlcXVlc3RcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZXh0QXBpUmVxdWVzdCBleHRlbmRzIEluY29taW5nTWVzc2FnZSB7XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYHF1ZXJ5YCB2YWx1ZXMgZnJvbSB1cmxcbiAgICovXG4gIHF1ZXJ5OiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW11cbiAgfVxuICAvKipcbiAgICogT2JqZWN0IG9mIGBjb29raWVzYCBmcm9tIGhlYWRlclxuICAgKi9cbiAgY29va2llczoge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZ1xuICB9XG5cbiAgYm9keTogYW55XG5cbiAgZW52OiBFbnZcblxuICBwcmV2aWV3PzogYm9vbGVhblxuICAvKipcbiAgICogUHJldmlldyBkYXRhIHNldCBvbiB0aGUgcmVxdWVzdCwgaWYgYW55XG4gICAqICovXG4gIHByZXZpZXdEYXRhPzogYW55XG59XG5cbi8qKlxuICogU2VuZCBib2R5IG9mIHJlc3BvbnNlXG4gKi9cbnR5cGUgU2VuZDxUPiA9IChib2R5OiBUKSA9PiB2b2lkXG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXNwb25zZVxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpUmVzcG9uc2U8VCA9IGFueT4gPSBTZXJ2ZXJSZXNwb25zZSAmIHtcbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBgYW55YCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBzZW5kOiBTZW5kPFQ+XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGpzb25gIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIGpzb246IFNlbmQ8VD5cbiAgc3RhdHVzOiAoc3RhdHVzQ29kZTogbnVtYmVyKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgcmVkaXJlY3QodXJsOiBzdHJpbmcpOiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgcmVkaXJlY3Qoc3RhdHVzOiBudW1iZXIsIHVybDogc3RyaW5nKTogTmV4dEFwaVJlc3BvbnNlPFQ+XG5cbiAgLyoqXG4gICAqIFNldCBwcmV2aWV3IGRhdGEgZm9yIE5leHQuanMnIHByZXJlbmRlciBtb2RlXG4gICAqL1xuICBzZXRQcmV2aWV3RGF0YTogKFxuICAgIGRhdGE6IG9iamVjdCB8IHN0cmluZyxcbiAgICBvcHRpb25zPzoge1xuICAgICAgLyoqXG4gICAgICAgKiBTcGVjaWZpZXMgdGhlIG51bWJlciAoaW4gc2Vjb25kcykgZm9yIHRoZSBwcmV2aWV3IHNlc3Npb24gdG8gbGFzdCBmb3IuXG4gICAgICAgKiBUaGUgZ2l2ZW4gbnVtYmVyIHdpbGwgYmUgY29udmVydGVkIHRvIGFuIGludGVnZXIgYnkgcm91bmRpbmcgZG93bi5cbiAgICAgICAqIEJ5IGRlZmF1bHQsIG5vIG1heGltdW0gYWdlIGlzIHNldCBhbmQgdGhlIHByZXZpZXcgc2Vzc2lvbiBmaW5pc2hlc1xuICAgICAgICogd2hlbiB0aGUgY2xpZW50IHNodXRzIGRvd24gKGJyb3dzZXIgaXMgY2xvc2VkKS5cbiAgICAgICAqL1xuICAgICAgbWF4QWdlPzogbnVtYmVyXG4gICAgfVxuICApID0+IE5leHRBcGlSZXNwb25zZTxUPlxuICBjbGVhclByZXZpZXdEYXRhOiAoKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIGhhbmRsZXJcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaUhhbmRsZXI8VCA9IGFueT4gPSAoXG4gIHJlcTogTmV4dEFwaVJlcXVlc3QsXG4gIHJlczogTmV4dEFwaVJlc3BvbnNlPFQ+XG4pID0+IHZvaWQgfCBQcm9taXNlPHZvaWQ+XG5cbi8qKlxuICogVXRpbHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGV4ZWNPbmNlPFQgZXh0ZW5kcyAoLi4uYXJnczogYW55W10pID0+IFJldHVyblR5cGU8VD4+KFxuICBmbjogVFxuKTogVCB7XG4gIGxldCB1c2VkID0gZmFsc2VcbiAgbGV0IHJlc3VsdDogUmV0dXJuVHlwZTxUPlxuXG4gIHJldHVybiAoKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgaWYgKCF1c2VkKSB7XG4gICAgICB1c2VkID0gdHJ1ZVxuICAgICAgcmVzdWx0ID0gZm4oLi4uYXJncylcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdFxuICB9KSBhcyBUXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRMb2NhdGlvbk9yaWdpbigpIHtcbiAgY29uc3QgeyBwcm90b2NvbCwgaG9zdG5hbWUsIHBvcnQgfSA9IHdpbmRvdy5sb2NhdGlvblxuICByZXR1cm4gYCR7cHJvdG9jb2x9Ly8ke2hvc3RuYW1lfSR7cG9ydCA/ICc6JyArIHBvcnQgOiAnJ31gXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRVUkwoKSB7XG4gIGNvbnN0IHsgaHJlZiB9ID0gd2luZG93LmxvY2F0aW9uXG4gIGNvbnN0IG9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgcmV0dXJuIGhyZWYuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREaXNwbGF5TmFtZTxQPihDb21wb25lbnQ6IENvbXBvbmVudFR5cGU8UD4pIHtcbiAgcmV0dXJuIHR5cGVvZiBDb21wb25lbnQgPT09ICdzdHJpbmcnXG4gICAgPyBDb21wb25lbnRcbiAgICA6IENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUmVzU2VudChyZXM6IFNlcnZlclJlc3BvbnNlKSB7XG4gIHJldHVybiByZXMuZmluaXNoZWQgfHwgcmVzLmhlYWRlcnNTZW50XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkR2V0SW5pdGlhbFByb3BzPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPihBcHA6IE5leHRDb21wb25lbnRUeXBlPEMsIElQLCBQPiwgY3R4OiBDKTogUHJvbWlzZTxJUD4ge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChBcHAucHJvdG90eXBlPy5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgICBBcHBcbiAgICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgaXMgZGVmaW5lZCBhcyBhbiBpbnN0YW5jZSBtZXRob2QgLSB2aXNpdCBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9nZXQtaW5pdGlhbC1wcm9wcy1hcy1hbi1pbnN0YW5jZS1tZXRob2QgZm9yIG1vcmUgaW5mb3JtYXRpb24uYFxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gICAgfVxuICB9XG4gIC8vIHdoZW4gY2FsbGVkIGZyb20gX2FwcCBgY3R4YCBpcyBuZXN0ZWQgaW4gYGN0eGBcbiAgY29uc3QgcmVzID0gY3R4LnJlcyB8fCAoY3R4LmN0eCAmJiBjdHguY3R4LnJlcylcblxuICBpZiAoIUFwcC5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICBpZiAoY3R4LmN0eCAmJiBjdHguQ29tcG9uZW50KSB7XG4gICAgICAvLyBAdHMtaWdub3JlIHBhZ2VQcm9wcyBkZWZhdWx0XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwYWdlUHJvcHM6IGF3YWl0IGxvYWRHZXRJbml0aWFsUHJvcHMoY3R4LkNvbXBvbmVudCwgY3R4LmN0eCksXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7fSBhcyBJUFxuICB9XG5cbiAgY29uc3QgcHJvcHMgPSBhd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGN0eClcblxuICBpZiAocmVzICYmIGlzUmVzU2VudChyZXMpKSB7XG4gICAgcmV0dXJuIHByb3BzXG4gIH1cblxuICBpZiAoIXByb3BzKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICBBcHBcbiAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIHNob3VsZCByZXNvbHZlIHRvIGFuIG9iamVjdC4gQnV0IGZvdW5kIFwiJHtwcm9wc31cIiBpbnN0ZWFkLmBcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKE9iamVjdC5rZXlzKHByb3BzKS5sZW5ndGggPT09IDAgJiYgIWN0eC5jdHgpIHtcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgYCR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgICAgQXBwXG4gICAgICAgICl9IHJldHVybmVkIGFuIGVtcHR5IG9iamVjdCBmcm9tIFxcYGdldEluaXRpYWxQcm9wc1xcYC4gVGhpcyBkZS1vcHRpbWl6ZXMgYW5kIHByZXZlbnRzIGF1dG9tYXRpYyBzdGF0aWMgb3B0aW1pemF0aW9uLiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9lbXB0eS1vYmplY3QtZ2V0SW5pdGlhbFByb3BzYFxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwcm9wc1xufVxuXG5leHBvcnQgY29uc3QgdXJsT2JqZWN0S2V5cyA9IFtcbiAgJ2F1dGgnLFxuICAnaGFzaCcsXG4gICdob3N0JyxcbiAgJ2hvc3RuYW1lJyxcbiAgJ2hyZWYnLFxuICAncGF0aCcsXG4gICdwYXRobmFtZScsXG4gICdwb3J0JyxcbiAgJ3Byb3RvY29sJyxcbiAgJ3F1ZXJ5JyxcbiAgJ3NlYXJjaCcsXG4gICdzbGFzaGVzJyxcbl1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHVybDogVXJsT2JqZWN0KTogc3RyaW5nIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgaWYgKHVybCAhPT0gbnVsbCAmJiB0eXBlb2YgdXJsID09PSAnb2JqZWN0Jykge1xuICAgICAgT2JqZWN0LmtleXModXJsKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgaWYgKHVybE9iamVjdEtleXMuaW5kZXhPZihrZXkpID09PSAtMSkge1xuICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgIGBVbmtub3duIGtleSBwYXNzZWQgdmlhIHVybE9iamVjdCBpbnRvIHVybC5mb3JtYXQ6ICR7a2V5fWBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZvcm1hdFVybCh1cmwpXG59XG5cbmV4cG9ydCBjb25zdCBTUCA9IHR5cGVvZiBwZXJmb3JtYW5jZSAhPT0gJ3VuZGVmaW5lZCdcbmV4cG9ydCBjb25zdCBTVCA9XG4gIFNQICYmXG4gIHR5cGVvZiBwZXJmb3JtYW5jZS5tYXJrID09PSAnZnVuY3Rpb24nICYmXG4gIHR5cGVvZiBwZXJmb3JtYW5jZS5tZWFzdXJlID09PSAnZnVuY3Rpb24nXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvbGluaycpXG4iLCIvKiogQGxpY2Vuc2UgUmVhY3QgdjE2LjEzLjFcbiAqIHJlYWN0LWlzLmRldmVsb3BtZW50LmpzXG4gKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAoZnVuY3Rpb24oKSB7XG4ndXNlIHN0cmljdCc7XG5cbi8vIFRoZSBTeW1ib2wgdXNlZCB0byB0YWcgdGhlIFJlYWN0RWxlbWVudC1saWtlIHR5cGVzLiBJZiB0aGVyZSBpcyBubyBuYXRpdmUgU3ltYm9sXG4vLyBub3IgcG9seWZpbGwsIHRoZW4gYSBwbGFpbiBudW1iZXIgaXMgdXNlZCBmb3IgcGVyZm9ybWFuY2UuXG52YXIgaGFzU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuZm9yO1xudmFyIFJFQUNUX0VMRU1FTlRfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmVsZW1lbnQnKSA6IDB4ZWFjNztcbnZhciBSRUFDVF9QT1JUQUxfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnBvcnRhbCcpIDogMHhlYWNhO1xudmFyIFJFQUNUX0ZSQUdNRU5UX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5mcmFnbWVudCcpIDogMHhlYWNiO1xudmFyIFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5zdHJpY3RfbW9kZScpIDogMHhlYWNjO1xudmFyIFJFQUNUX1BST0ZJTEVSX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5wcm9maWxlcicpIDogMHhlYWQyO1xudmFyIFJFQUNUX1BST1ZJREVSX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5wcm92aWRlcicpIDogMHhlYWNkO1xudmFyIFJFQUNUX0NPTlRFWFRfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmNvbnRleHQnKSA6IDB4ZWFjZTsgLy8gVE9ETzogV2UgZG9uJ3QgdXNlIEFzeW5jTW9kZSBvciBDb25jdXJyZW50TW9kZSBhbnltb3JlLiBUaGV5IHdlcmUgdGVtcG9yYXJ5XG4vLyAodW5zdGFibGUpIEFQSXMgdGhhdCBoYXZlIGJlZW4gcmVtb3ZlZC4gQ2FuIHdlIHJlbW92ZSB0aGUgc3ltYm9scz9cblxudmFyIFJFQUNUX0FTWU5DX01PREVfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmFzeW5jX21vZGUnKSA6IDB4ZWFjZjtcbnZhciBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmNvbmN1cnJlbnRfbW9kZScpIDogMHhlYWNmO1xudmFyIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5mb3J3YXJkX3JlZicpIDogMHhlYWQwO1xudmFyIFJFQUNUX1NVU1BFTlNFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5zdXNwZW5zZScpIDogMHhlYWQxO1xudmFyIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnN1c3BlbnNlX2xpc3QnKSA6IDB4ZWFkODtcbnZhciBSRUFDVF9NRU1PX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5tZW1vJykgOiAweGVhZDM7XG52YXIgUkVBQ1RfTEFaWV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QubGF6eScpIDogMHhlYWQ0O1xudmFyIFJFQUNUX0JMT0NLX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5ibG9jaycpIDogMHhlYWQ5O1xudmFyIFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5mdW5kYW1lbnRhbCcpIDogMHhlYWQ1O1xudmFyIFJFQUNUX1JFU1BPTkRFUl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucmVzcG9uZGVyJykgOiAweGVhZDY7XG52YXIgUkVBQ1RfU0NPUEVfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnNjb3BlJykgOiAweGVhZDc7XG5cbmZ1bmN0aW9uIGlzVmFsaWRFbGVtZW50VHlwZSh0eXBlKSB7XG4gIHJldHVybiB0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicgfHwgLy8gTm90ZTogaXRzIHR5cGVvZiBtaWdodCBiZSBvdGhlciB0aGFuICdzeW1ib2wnIG9yICdudW1iZXInIGlmIGl0J3MgYSBwb2x5ZmlsbC5cbiAgdHlwZSA9PT0gUkVBQ1RfRlJBR01FTlRfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9QUk9GSUxFUl9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgfHwgdHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmIHR5cGUgIT09IG51bGwgJiYgKHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0xBWllfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9NRU1PX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfUFJPVklERVJfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9DT05URVhUX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1JFU1BPTkRFUl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1NDT1BFX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQkxPQ0tfVFlQRSk7XG59XG5cbmZ1bmN0aW9uIHR5cGVPZihvYmplY3QpIHtcbiAgaWYgKHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmIG9iamVjdCAhPT0gbnVsbCkge1xuICAgIHZhciAkJHR5cGVvZiA9IG9iamVjdC4kJHR5cGVvZjtcblxuICAgIHN3aXRjaCAoJCR0eXBlb2YpIHtcbiAgICAgIGNhc2UgUkVBQ1RfRUxFTUVOVF9UWVBFOlxuICAgICAgICB2YXIgdHlwZSA9IG9iamVjdC50eXBlO1xuXG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgIGNhc2UgUkVBQ1RfQVNZTkNfTU9ERV9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9GUkFHTUVOVF9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfUFJPRklMRVJfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1NUUklDVF9NT0RFX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9UWVBFOlxuICAgICAgICAgICAgcmV0dXJuIHR5cGU7XG5cbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgdmFyICQkdHlwZW9mVHlwZSA9IHR5cGUgJiYgdHlwZS4kJHR5cGVvZjtcblxuICAgICAgICAgICAgc3dpdGNoICgkJHR5cGVvZlR5cGUpIHtcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9DT05URVhUX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9MQVpZX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfTUVNT19UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX1BST1ZJREVSX1RZUEU6XG4gICAgICAgICAgICAgICAgcmV0dXJuICQkdHlwZW9mVHlwZTtcblxuICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiAkJHR5cGVvZjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgIGNhc2UgUkVBQ1RfUE9SVEFMX1RZUEU6XG4gICAgICAgIHJldHVybiAkJHR5cGVvZjtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkO1xufSAvLyBBc3luY01vZGUgaXMgZGVwcmVjYXRlZCBhbG9uZyB3aXRoIGlzQXN5bmNNb2RlXG5cbnZhciBBc3luY01vZGUgPSBSRUFDVF9BU1lOQ19NT0RFX1RZUEU7XG52YXIgQ29uY3VycmVudE1vZGUgPSBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRTtcbnZhciBDb250ZXh0Q29uc3VtZXIgPSBSRUFDVF9DT05URVhUX1RZUEU7XG52YXIgQ29udGV4dFByb3ZpZGVyID0gUkVBQ1RfUFJPVklERVJfVFlQRTtcbnZhciBFbGVtZW50ID0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xudmFyIEZvcndhcmRSZWYgPSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFO1xudmFyIEZyYWdtZW50ID0gUkVBQ1RfRlJBR01FTlRfVFlQRTtcbnZhciBMYXp5ID0gUkVBQ1RfTEFaWV9UWVBFO1xudmFyIE1lbW8gPSBSRUFDVF9NRU1PX1RZUEU7XG52YXIgUG9ydGFsID0gUkVBQ1RfUE9SVEFMX1RZUEU7XG52YXIgUHJvZmlsZXIgPSBSRUFDVF9QUk9GSUxFUl9UWVBFO1xudmFyIFN0cmljdE1vZGUgPSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFO1xudmFyIFN1c3BlbnNlID0gUkVBQ1RfU1VTUEVOU0VfVFlQRTtcbnZhciBoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0FzeW5jTW9kZSA9IGZhbHNlOyAvLyBBc3luY01vZGUgc2hvdWxkIGJlIGRlcHJlY2F0ZWRcblxuZnVuY3Rpb24gaXNBc3luY01vZGUob2JqZWN0KSB7XG4gIHtcbiAgICBpZiAoIWhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlKSB7XG4gICAgICBoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0FzeW5jTW9kZSA9IHRydWU7IC8vIFVzaW5nIGNvbnNvbGVbJ3dhcm4nXSB0byBldmFkZSBCYWJlbCBhbmQgRVNMaW50XG5cbiAgICAgIGNvbnNvbGVbJ3dhcm4nXSgnVGhlIFJlYWN0SXMuaXNBc3luY01vZGUoKSBhbGlhcyBoYXMgYmVlbiBkZXByZWNhdGVkLCAnICsgJ2FuZCB3aWxsIGJlIHJlbW92ZWQgaW4gUmVhY3QgMTcrLiBVcGRhdGUgeW91ciBjb2RlIHRvIHVzZSAnICsgJ1JlYWN0SXMuaXNDb25jdXJyZW50TW9kZSgpIGluc3RlYWQuIEl0IGhhcyB0aGUgZXhhY3Qgc2FtZSBBUEkuJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGlzQ29uY3VycmVudE1vZGUob2JqZWN0KSB8fCB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfQVNZTkNfTU9ERV9UWVBFO1xufVxuZnVuY3Rpb24gaXNDb25jdXJyZW50TW9kZShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzQ29udGV4dENvbnN1bWVyKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0NPTlRFWFRfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzQ29udGV4dFByb3ZpZGVyKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1BST1ZJREVSX1RZUEU7XG59XG5mdW5jdGlvbiBpc0VsZW1lbnQob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJiBvYmplY3QgIT09IG51bGwgJiYgb2JqZWN0LiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEU7XG59XG5mdW5jdGlvbiBpc0ZvcndhcmRSZWYob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzRnJhZ21lbnQob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfRlJBR01FTlRfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzTGF6eShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9MQVpZX1RZUEU7XG59XG5mdW5jdGlvbiBpc01lbW8ob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfTUVNT19UWVBFO1xufVxuZnVuY3Rpb24gaXNQb3J0YWwob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUE9SVEFMX1RZUEU7XG59XG5mdW5jdGlvbiBpc1Byb2ZpbGVyKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1BST0ZJTEVSX1RZUEU7XG59XG5mdW5jdGlvbiBpc1N0cmljdE1vZGUob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzU3VzcGVuc2Uob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfU1VTUEVOU0VfVFlQRTtcbn1cblxuZXhwb3J0cy5Bc3luY01vZGUgPSBBc3luY01vZGU7XG5leHBvcnRzLkNvbmN1cnJlbnRNb2RlID0gQ29uY3VycmVudE1vZGU7XG5leHBvcnRzLkNvbnRleHRDb25zdW1lciA9IENvbnRleHRDb25zdW1lcjtcbmV4cG9ydHMuQ29udGV4dFByb3ZpZGVyID0gQ29udGV4dFByb3ZpZGVyO1xuZXhwb3J0cy5FbGVtZW50ID0gRWxlbWVudDtcbmV4cG9ydHMuRm9yd2FyZFJlZiA9IEZvcndhcmRSZWY7XG5leHBvcnRzLkZyYWdtZW50ID0gRnJhZ21lbnQ7XG5leHBvcnRzLkxhenkgPSBMYXp5O1xuZXhwb3J0cy5NZW1vID0gTWVtbztcbmV4cG9ydHMuUG9ydGFsID0gUG9ydGFsO1xuZXhwb3J0cy5Qcm9maWxlciA9IFByb2ZpbGVyO1xuZXhwb3J0cy5TdHJpY3RNb2RlID0gU3RyaWN0TW9kZTtcbmV4cG9ydHMuU3VzcGVuc2UgPSBTdXNwZW5zZTtcbmV4cG9ydHMuaXNBc3luY01vZGUgPSBpc0FzeW5jTW9kZTtcbmV4cG9ydHMuaXNDb25jdXJyZW50TW9kZSA9IGlzQ29uY3VycmVudE1vZGU7XG5leHBvcnRzLmlzQ29udGV4dENvbnN1bWVyID0gaXNDb250ZXh0Q29uc3VtZXI7XG5leHBvcnRzLmlzQ29udGV4dFByb3ZpZGVyID0gaXNDb250ZXh0UHJvdmlkZXI7XG5leHBvcnRzLmlzRWxlbWVudCA9IGlzRWxlbWVudDtcbmV4cG9ydHMuaXNGb3J3YXJkUmVmID0gaXNGb3J3YXJkUmVmO1xuZXhwb3J0cy5pc0ZyYWdtZW50ID0gaXNGcmFnbWVudDtcbmV4cG9ydHMuaXNMYXp5ID0gaXNMYXp5O1xuZXhwb3J0cy5pc01lbW8gPSBpc01lbW87XG5leHBvcnRzLmlzUG9ydGFsID0gaXNQb3J0YWw7XG5leHBvcnRzLmlzUHJvZmlsZXIgPSBpc1Byb2ZpbGVyO1xuZXhwb3J0cy5pc1N0cmljdE1vZGUgPSBpc1N0cmljdE1vZGU7XG5leHBvcnRzLmlzU3VzcGVuc2UgPSBpc1N1c3BlbnNlO1xuZXhwb3J0cy5pc1ZhbGlkRWxlbWVudFR5cGUgPSBpc1ZhbGlkRWxlbWVudFR5cGU7XG5leHBvcnRzLnR5cGVPZiA9IHR5cGVPZjtcbiAgfSkoKTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1pcy5wcm9kdWN0aW9uLm1pbi5qcycpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1pcy5kZXZlbG9wbWVudC5qcycpO1xufVxuIiwiaW1wb3J0IENvbnRleHRQcm92aWRlciBmcm9tICcuLi9jb250ZXh0L0NvbnRleHRQcm92aWRlcic7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IGNvb2tpZSBmcm9tICdyZWFjdC1jb29raWVzJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuLy8gaW1wb3J0IHsgZW1wdHkgfSBmcm9tICdhcG9sbG8tYm9vc3QnO1xyXG5pbXBvcnQgeyBBbmltYXRlUHJlc2VuY2UgfSBmcm9tICdmcmFtZXItbW90aW9uJztcclxuaW1wb3J0IGtleXMgZnJvbSAnLi4vY29uZmlnL2tleXMnO1xyXG5cclxuY29uc3QgQXBwID0gKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMsIHJvdXRlciB9KSA9PiB7XHJcblxyXG4gIGNvbnN0IHBvcnQgPSBwYXJzZUludChwcm9jZXNzLmVudi5QT1JULCAxMCkgfHwgMzAwMDtcclxuICBcclxuICAvLyBEZXRlcm1pbmUgdGhlIFVSSSBiYXNlZCBvbiBkZXYgb3IgcHJvZFxyXG4gIGNvbnN0IFVSSSA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgXHJcbiAgICA/IGtleXMuVVJJIDpcclxuICAgYGh0dHA6Ly9sb2NhbGhvc3Q6JHtwb3J0fWA7XHJcblxyXG4gIGxldCB0b2tlbiA9IG51bGw7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvL0dldCBhbGwgdXNlcnMgLSBmb3IgdGhlIHNlYXJjaGJhciB1c2VyIHNlYXJjaFxyXG4gICAgZ2V0QWxsVXNlcnMoKTtcclxuICAgIFxyXG4gICAgLy8gQ2hlY2sgZm9yIHRva2VuIGluIGxvY2FsIHN0b3JhZ2Ugb25jZSB0aGUgY29tcG9uZW50IG1vdW50cyAtIGkuZS4gY29kZSBpcyBub3cgcnVuIGluIHRoZSBicm93c2VyIChpbnN0ZWFkIG9mIG9uIHRoZSBzZXJ2ZXIpXHJcbiAgICB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpO1xyXG4gICAgaWYgKHRva2VuKSB7XHJcbiAgICAgIHNldEF1dGhTdGF0ZSh7Li4uYXV0aFN0YXRlLCBhdXRoZW50aWNhdGVkOiB0cnVlLCB0b2tlbjogdG9rZW59KTtcclxuICAgICAgXHJcbiAgICAgIC8vIEdldCB0aGUgbG9nZ2VkIGluIHVzZXIncyBkYXRhXHJcbiAgICAgIGdldFVzZXJEYXRhQnlUb2tlbih0b2tlbilcclxuXHJcbiAgICB9XHJcbiAgfSwgW10pXHJcblxyXG4gIGNvbnN0IGVtcHR5VXNlciA9IHtcclxuICAgIGlkOiAnJyxcclxuICAgIGZpcnN0TmFtZTogJycsXHJcbiAgICBsYXN0TmFtZTogJycsXHJcbiAgICBqb2JUaXRsZTogJycsXHJcbiAgICBsb2NhdGlvbjogJycsXHJcbiAgICBsYW5ndWFnZXM6IFtdLFxyXG4gICAgYWJvdXQ6ICcnLFxyXG4gICAgb3duZWRWaWRlb3M6IFtdLFxyXG4gICAgdXNlckNvbW1lbnRzOiBbXSxcclxuICAgIHBsYXlsaXN0Q29tbWVudHM6IFtdLFxyXG4gICAgZmF2b3VyaXRlczogW10sXHJcbiAgICBwcm9maWxlUGhvdG9GaWxlbmFtZTogJydcclxuICB9XHJcblxyXG5cclxuICAvLyBTdGF0ZVxyXG4gIGNvbnN0IFthdXRoU3RhdGUsIHNldEF1dGhTdGF0ZV0gPSB1c2VTdGF0ZSh7XHJcbiAgICBhdXRoZW50aWNhdGVkOiBmYWxzZSxcclxuICAgIHVzZXJJZDogbnVsbCxcclxuICAgIHRva2VuOiBudWxsLFxyXG4gICAgdG9rZW5FeHBpcmF0aW9uOiBudWxsXHJcbiAgfSk7XHJcblxyXG4gIC8vIExvZ2dlZCBpbiBVc2VyJ3MgRGF0YVxyXG4gIGNvbnN0IFtjdXJyZW50VXNlciwgc2V0Q3VycmVudFVzZXJdID0gdXNlU3RhdGUoZW1wdHlVc2VyKTtcclxuXHJcbiAgLy8gQ3VycmVudCBwcm9maWxlcyB1c2VyIGRhdGFcclxuICBjb25zdCBbcHJvZmlsZVVzZXIsIHNldFByb2ZpbGVVc2VyXSA9IHVzZVN0YXRlKGVtcHR5VXNlcik7XHJcblxyXG4gIC8vIGNvbnN0IFtwcm9maWxlUGhvdG8sIHNldFByb2ZpbGVQaG90b10gPSB1c2VTdGF0ZShudWxsKTtcclxuICBcclxuICBjb25zdCBbdmlkZW9TdGF0ZSwgc2V0VmlkZW9TdGF0ZV0gPSB1c2VTdGF0ZSh7XHJcbiAgICB0aXRsZTogJycsXHJcbiAgICAvLyBkZXNjcmlwdGlvbjonJyxcclxuICAgIHZpZGVvSWQ6ICcnXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IFtjb21tZW50U3RhdGUsIHNldENvbW1lbnRTdGF0ZV0gPSB1c2VTdGF0ZSh7XHJcbiAgICBjb21tZW50OiBudWxsXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IFthbGxVc2Vycywgc2V0QWxsVXNlcnNdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICBjb25zdCBbIGF1dG9wbGF5LCBzZXRBdXRvcGxheSBdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuXHJcblxyXG4gIC8vIEFVVEhFTlRJQ0FUSU9OICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICBcclxuICAvLyBMb2dpbiBhIHVzZXJcclxuICBjb25zdCBsb2dpbiA9IGFzeW5jIChlbWFpbCwgcGFzc3dvcmQpID0+IHtcclxuXHJcbiAgICAvLyBNYWtlIGEgQVBJIHF1ZXJ5IHRvIGdldCBhIHRva2VuXHJcbiAgICBjb25zdCByZXF1ZXN0Qm9keSA9IHtcclxuICAgICAgcXVlcnk6IGBcclxuICAgICAgICBxdWVyeSB7XHJcbiAgICAgICAgICBsb2dpbihlbWFpbDogXCIke2VtYWlsfVwiLCBwYXNzd29yZDogXCIke3Bhc3N3b3JkfVwiKSB7XHJcbiAgICAgICAgICAgIHVzZXJJZCxcclxuICAgICAgICAgICAgdG9rZW5cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIGBcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtVUkl9L2dyYXBocWxgLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocmVxdWVzdEJvZHkpLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcblxyXG4gICAgICBpZiAocmVzLnN0YXR1cyAhPT0gMjAwICYmIHJlcy5zdGF0dXMgIT09IDIwMSkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTG9naW4gZmFpbGVkIScpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyAuanNvbigpIGlzIGEgbWV0aG9kIGZyb20gZmV0Y2ggQVBJIHRoYXQgYXV0byBleHRyYWN0cyAmIHBhcnNlcyB0aGUgcmVzIGJvZHlcclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcblxyXG4gICAgICAvLyBDaGVjayBmb3IgZXJyb3JzIGFycmF5IGluIHJlc3BvbnNlXHJcbiAgICAgIGlmIChkYXRhLmVycm9ycykge1xyXG4gICAgICAgIHJldHVybiB7IGVycm9yOiBkYXRhLmVycm9ycyB9O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBTZXQgc3RhdGUgd2l0aCByZXR1cm5lZCBhdXRoIGRhdGFcclxuICAgICAgY29uc3QgeyB1c2VySWQsIHRva2VuIH0gPSBkYXRhLmRhdGEubG9naW47XHJcblxyXG4gICAgICBzZXRBdXRoU3RhdGUoeyAuLi5hdXRoU3RhdGUsIGF1dGhlbnRpY2F0ZWQ6IHRydWUsIHVzZXJJZCwgdG9rZW4gfSk7XHJcblxyXG4gICAgICAvLyBTYXZlIHRva2VuIHRvIGxvY2FsIHN0b3JhZ2VcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rva2VuJywgdG9rZW4pXHJcblxyXG4gICAgICAvLyAvLyBTZXQgdG9rZW4gYXMgYSBjb29raWVcclxuICAgICAgLy8gY29va2llLnNhdmUoXHJcbiAgICAgIC8vICAgJ3VzZXJJZCcsXHJcbiAgICAgIC8vICAgdXNlcklkLFxyXG4gICAgICAvLyAgIHtcclxuICAgICAgLy8gICAgIHBhdGg6ICcvJyxcclxuICAgICAgLy8gICAgIC8vIGV4cGlyZXMsXHJcbiAgICAgIC8vICAgICBtYXhBZ2U6IDEwMDAsXHJcbiAgICAgIC8vICAgICBkb21haW46ICdodHRwOi8vbG9jYWxob3N0OjMwMDAnLFxyXG4gICAgICAvLyAgICAgc2VjdXJlOiBmYWxzZSxcclxuICAgICAgLy8gICAgIGh0dHBPbmx5OiBmYWxzZVxyXG4gICAgICAvLyAgIH1cclxuICAgICAgLy8gKVxyXG5cclxuICAgICAgLy8gRmV0Y2ggdGhlIHVzZXIgZGF0YSBhbmQgc2V0IGN1cnJlbnRVc2VyIHN0YXRlXHJcbiAgICAgIGF3YWl0IGdldFVzZXJEYXRhQnlUb2tlbih0b2tlbik7XHJcblxyXG4gICAgICAvLyBSZWRpcmVjdCB0byB1c2VyJ3MgcHJvZmlsZSBwYWdlXHJcbiAgICAgIFJvdXRlci5wdXNoKGAvcHJvZmlsZS8ke3VzZXJJZH1gKTtcclxuXHJcbiAgICAgIC8vIFJldHVybiBpdGVtIG9iamVjdCBpbmRpY2F0aW5nIG5vIGVycm9yc1xyXG4gICAgICByZXR1cm4ge307XHJcblxyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgLy8gUmVnaXN0ZXIgYSB1c2VyXHJcbiAgY29uc3QgcmVnaXN0ZXIgPSBhc3luYyAoZmlyc3ROYW1lLCBsYXN0TmFtZSwgZW1haWwsIHBhc3N3b3JkKSA9PiB7XHJcblxyXG4gICAgLy8gTWFrZSBhIEFQSSBxdWVyeSB0byBnZXQgYSB0b2tlblxyXG4gICAgY29uc3QgcmVxdWVzdEJvZHkgPSB7XHJcbiAgICAgIHF1ZXJ5OiBgXHJcbiAgICAgIG11dGF0aW9uIHtcclxuICAgICAgICBjcmVhdGVVc2VyKHVzZXJJbnB1dDoge2ZpcnN0TmFtZTogXCIke2ZpcnN0TmFtZX1cIiwgbGFzdE5hbWU6IFwiJHtsYXN0TmFtZX1cIiwgZW1haWw6IFwiJHtlbWFpbH1cIiwgcGFzc3dvcmQ6IFwiJHtwYXNzd29yZH1cIn0pIHtcclxuICAgICAgICAgIGVtYWlsXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICBgXHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgLy8gY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7VVJJfS9ncmFwaHFsYCwge1xyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtVUkl9L2dyYXBocWxgLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocmVxdWVzdEJvZHkpLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcblxyXG4gICAgICBpZiAocmVzLnN0YXR1cyAhPT0gMjAwICYmIHJlcy5zdGF0dXMgIT09IDIwMSkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignQWNjb3VudCBjcmVhdGlvbiBmYWlsZWQhJyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIC5qc29uKCkgaXMgYSBtZXRob2QgZnJvbSBmZXRjaCBBUEkgdGhhdCBhdXRvIGV4dHJhY3RzICYgcGFyc2VzIHRoZSByZXMgYm9keVxyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuXHJcbiAgICAgIC8vIENoZWNrIGZvciBlcnJvcnMgYXJyYXkgaW4gcmVzcG9uc2VcclxuICAgICAgaWYgKGRhdGEuZXJyb3JzKSB7XHJcbiAgICAgICAgcmV0dXJuIHtuZXdVc2VyRW1haWw6ICcnLCBlcnJvcjogZGF0YS5lcnJvcnN9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IG5ld1VzZXJFbWFpbCA9IChkYXRhLmRhdGEuY3JlYXRlVXNlci5lbWFpbCk7XHJcbiAgICAgIHJldHVybiB7IG5ld1VzZXJFbWFpbDogbmV3VXNlckVtYWlsLCBlcnJvcjogW119O1xyXG5cclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gIC8vIExvZ291dCBhIHVzZXJcclxuICBjb25zdCBsb2dvdXQgPSAoKSA9PiB7XHJcbiAgICAvLyBSZWRpcmVjdCB0byBob21lIHBhZ2VcclxuICAgIFJvdXRlci5wdXNoKCcvJyk7XHJcbiAgICAvLyBDbGVhciB0aGUgYXV0aFN0YXRlXHJcbiAgICBzZXRBdXRoU3RhdGUoe1xyXG4gICAgICBhdXRoRGF0YTogbnVsbFxyXG4gICAgfSlcclxuICAgIC8vIFJlbW92ZSB0b2tlbiBmcm9tIGxvY2FsU3RvcmFnZVxyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3Rva2VuJyk7XHJcbiAgICAvLyBDbGVhciB0aGUgY3VycmVudCB1c2VyXHJcbiAgICBzZXRDdXJyZW50VXNlcihlbXB0eVVzZXIpO1xyXG5cclxuICAgIHNldFByb2ZpbGVVc2VyKGVtcHR5VXNlcik7XHJcbiAgICBcclxuICAgIC8vIFJlZGlyZWN0IHRvIGhvbWUgcGFnZVxyXG4gICAgLy8gUm91dGVyLnB1c2goJy8nKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKCdjdXJyZW50VXNlcicsIGN1cnJlbnRVc2VyKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKCdwcm9maWxlVXNlcicsIHByb2ZpbGVVc2VyKTtcclxuICB9XHJcblxyXG4gIC8vIFVTRVIgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICBjb25zdCB1cGRhdGVVc2VyID0gYXN5bmMgKGZpcnN0TmFtZSwgbGFzdE5hbWUsIGpvYlRpdGxlLCBsb2NhdGlvbiwgbGFuZ3VhZ2VzLCBhYm91dCkgPT4ge1xyXG5cclxuICAgIC8vIE1ha2UgYSBBUEkgcXVlcnkgdG8gZ2V0IGEgdG9rZW5cclxuICAgIGNvbnN0IHJlcXVlc3RCb2R5ID0ge1xyXG4gICAgICBxdWVyeTogYFxyXG4gICAgICBtdXRhdGlvbiB7XHJcbiAgICAgICAgdXBkYXRlVXNlcihwcm9maWxlSW5wdXQ6IHtmaXJzdE5hbWU6IFwiJHtmaXJzdE5hbWV9XCIsIGxhc3ROYW1lOiBcIiR7bGFzdE5hbWV9XCIsIGpvYlRpdGxlOiBcIiR7am9iVGl0bGV9XCIsIGxvY2F0aW9uOiBcIiR7bG9jYXRpb259XCIsIFxyXG4gICAgICAgIGxhbmd1YWdlczogW1xyXG4gICAgICAgICAgXCIke2xhbmd1YWdlc1swXX1cIixcclxuICAgICAgICAgIFwiJHtsYW5ndWFnZXNbMV19XCIsIFxyXG4gICAgICAgICAgXCIke2xhbmd1YWdlc1syXX1cIiwgXHJcbiAgICAgICAgICBcIiR7bGFuZ3VhZ2VzWzNdfVwiXHJcbiAgICAgICAgXSxcclxuICAgICAgICBhYm91dDogXCIke2Fib3V0fVwifSkge1xyXG4gICAgICAgICAgZmlyc3ROYW1lLFxyXG4gICAgICAgICAgbGFzdE5hbWUsXHJcbiAgICAgICAgICBqb2JUaXRsZSxcclxuICAgICAgICAgIGxvY2F0aW9uLFxyXG4gICAgICAgICAgbGFuZ3VhZ2VzLFxyXG4gICAgICAgICAgYWJvdXRcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIGBcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtVUkl9L2dyYXBocWxgLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocmVxdWVzdEJvZHkpLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IGBCZWFyZXIgJHthdXRoU3RhdGUudG9rZW59YFxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuXHJcbiAgICAgIGlmIChyZXMuc3RhdHVzICE9PSAyMDAgJiYgcmVzLnN0YXR1cyAhPT0gMjAxKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVc2VyIHVwZGF0ZSBmYWlsZWQhJyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIC5qc29uKCkgaXMgYSBtZXRob2QgZnJvbSBmZXRjaCBBUEkgdGhhdCBhdXRvIGV4dHJhY3RzICYgcGFyc2VzIHRoZSByZXMgYm9keVxyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuXHJcbiAgICAgIC8vIENoZWNrIGZvciBlcnJvcnMgYXJyYXkgaW4gcmVzcG9uc2VcclxuICAgICAgaWYgKGRhdGEuZXJyb3JzKSB7XHJcbiAgICAgICAgZGF0YS5lcnJvcnMubWFwKGVycm9yID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLm1lc3NhZ2UpXHJcbiAgICAgICAgfSlcclxuICAgICAgICByZXR1cm5cclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gUmVmcmVzaCB0aGUgcHJvZmlsZSB3aXRoIHRoZSBuZXcgdXNlciBkYXRhIC0gdG8gdXBkYXRlIHRoZSBwcm9maWxlSW5mbyBzZWN0aW9uXHJcbiAgICAgIGZldGNoUHJvZmlsZVVzZXIocHJvZmlsZVVzZXIuaWQsIGZhbHNlKVxyXG5cclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG4gIFxyXG5cclxuICBcclxuICAvLyBEQVRBIEZFVENISU5HICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuXHJcbiAgY29uc3QgZ2V0QWxsVXNlcnMgPSBhc3luYyAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgcmVxdWVzdEJvZHkgPSB7XHJcbiAgICAgIHF1ZXJ5OiBgXHJcbiAgICAgICAgcXVlcnkge1xyXG4gICAgICAgICAgdXNlcnMge1xyXG4gICAgICAgICAgICBfaWQsXHJcbiAgICAgICAgICAgIGZpcnN0TmFtZSxcclxuICAgICAgICAgICAgbGFzdE5hbWVcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIGBcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtVUkl9L2dyYXBocWxgLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocmVxdWVzdEJvZHkpLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IGBCZWFyZXIgJHthdXRoU3RhdGUudG9rZW59YFxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuXHJcbiAgICAgIGlmIChyZXMuc3RhdHVzICE9PSAyMDAgJiYgcmVzLnN0YXR1cyAhPT0gMjAxKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdGYWlsZWQgdG8gZmV0Y2ggdXNlciBkYXRhJyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIC5qc29uKCkgaXMgYSBtZXRob2QgZnJvbSBmZXRjaCBBUEkgdGhhdCBhdXRvIGV4dHJhY3RzICYgcGFyc2VzIHRoZSByZXMgYm9keVxyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuXHJcbiAgICAgIC8vIENoZWNrIGZvciBlcnJvcnMgYXJyYXkgaW4gcmVzcG9uc2VcclxuICAgICAgaWYgKGRhdGEuZXJyb3JzKSB7XHJcbiAgICAgICAgZGF0YS5lcnJvcnMubWFwKGVycm9yID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLm1lc3NhZ2UpXHJcbiAgICAgICAgfSlcclxuICAgICAgICByZXR1cm5cclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgdXNlcnMgPSAoZGF0YS5kYXRhLnVzZXJzKTtcclxuXHJcbiAgICAgIC8vIEdldCBmdWxsIG5hbWUgZm9yIHVzZSBpbiBzZWFyY2hiYXJcclxuICAgICAgY29uc3QgdXNlcnNXaXRoRnVsbE5hbWUgPSB1c2Vycy5tYXAodXNlciA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIGlkOiB1c2VyLl9pZCxcclxuICAgICAgICAgIG5hbWU6IHVzZXIuZmlyc3ROYW1lICsgJyAnICsgdXNlci5sYXN0TmFtZVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuXHJcbiAgICAgIHNldEFsbFVzZXJzKHVzZXJzV2l0aEZ1bGxOYW1lKTtcclxuXHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH1cclxuXHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIGNvbnN0IGdldFVzZXJEYXRhQnlJZCA9IGFzeW5jICh1c2VySWQsIHJlcXVlc3RCb2R5PXt9KSA9PiB7XHJcbiAgICAvLyBjb25zb2xlLmxvZygnZ2V0VXNlckRhdGEgY2FsbGVkIHdpdGggaWQ6JywgdXNlcklkKVxyXG5cclxuICAgIGlmIChyZXF1ZXN0Qm9keSA9IHt9KXtcclxuICAgICAgcmVxdWVzdEJvZHkgPSB7XHJcbiAgICAgICAgcXVlcnk6IGBcclxuICAgICAgICAgIHF1ZXJ5IHtcclxuICAgICAgICAgICAgdXNlckJ5SWQoaWQ6XCIke3VzZXJJZH1cIikge1xyXG4gICAgICAgICAgICAgIGZpcnN0TmFtZSxcclxuICAgICAgICAgICAgICBsYXN0TmFtZSxcclxuICAgICAgICAgICAgICBqb2JUaXRsZSxcclxuICAgICAgICAgICAgICBsb2NhdGlvbixcclxuICAgICAgICAgICAgICBfaWQsXHJcbiAgICAgICAgICAgICAgbGFuZ3VhZ2VzLFxyXG4gICAgICAgICAgICAgIGFib3V0LFxyXG4gICAgICAgICAgICAgIG93bmVkVmlkZW9zIHtcclxuICAgICAgICAgICAgICAgIF9pZCxcclxuICAgICAgICAgICAgICAgIHRodW1ibmFpbFVSTCxcclxuICAgICAgICAgICAgICAgIHRpdGxlLFxyXG4gICAgICAgICAgICAgICAgdmlkZW9VUkxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIHBsYXlsaXN0Q29tbWVudHN7XHJcbiAgICAgICAgICAgICAgICBfaWQsXHJcbiAgICAgICAgICAgICAgICBjb250ZW50LFxyXG4gICAgICAgICAgICAgICAgY29tbWVudGVyIHtcclxuICAgICAgICAgICAgICAgICAgX2lkXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgY3JlYXRlZEF0LFxyXG4gICAgICAgICAgICAgICAgdXBkYXRlZEF0XHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBmYXZvdXJpdGVzLFxyXG4gICAgICAgICAgICAgIHByb2ZpbGVQaG90b0ZpbGVuYW1lXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGBcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vIGNvbnNvbGUubG9nKHJlcXVlc3RCb2R5KVxyXG4gICAgLy8gY29uc29sZS5sb2coYXV0aFN0YXRlLnRva2VuKVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke1VSSX0vZ3JhcGhxbGAsIHtcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShyZXF1ZXN0Qm9keSksXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICdBdXRob3JpemF0aW9uJzogYEJlYXJlciAke2F1dGhTdGF0ZS50b2tlbn1gXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG5cclxuICAgICAgaWYgKHJlcy5zdGF0dXMgIT09IDIwMCAmJiByZXMuc3RhdHVzICE9PSAyMDEpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZhaWxlZCB0byBmZXRjaCB1c2VyIGRhdGEnKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gLmpzb24oKSBpcyBhIG1ldGhvZCBmcm9tIGZldGNoIEFQSSB0aGF0IGF1dG8gZXh0cmFjdHMgJiBwYXJzZXMgdGhlIHJlcyBib2R5XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG5cclxuICAgICAgLy8gQ2hlY2sgZm9yIGVycm9ycyBhcnJheSBpbiByZXNwb25zZVxyXG4gICAgICBpZiAoZGF0YS5lcnJvcnMpIHtcclxuICAgICAgICBkYXRhLmVycm9ycy5tYXAoZXJyb3IgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyb3IubWVzc2FnZSlcclxuICAgICAgICB9KVxyXG4gICAgICAgIHJldHVyblxyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCB1c2VyID0gKGRhdGEuZGF0YS51c2VyQnlJZCk7XHJcbiAgICAgIHJldHVybiB1c2VyO1xyXG5cclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfVxyXG5cclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgLy8gR2V0IGxvZ2dlZCBpbiB1c2VyJ3MgZGF0YSBhbmQgc2V0cyBpdCBpbiB0aGUgdXNlclN0YXRlXHJcbiAgY29uc3QgZ2V0VXNlckRhdGFCeVRva2VuID0gYXN5bmMgKHRva2VuKSA9PiB7XHJcblxyXG4gICAgLy8gY29uc29sZS5sb2coJ2NhbGxlZCcpXHJcblxyXG4gICAgbGV0IHJlcXVlc3RCb2R5O1xyXG5cclxuICAgIC8vIElmIG5vIHVzZXJJZCB0aGVuIHF1ZXJ5IHRoZSBjdXJyZW50IGxvZ2dlZCBpbiB1c2VyIGJ5IHRva2VuXHJcbiAgICByZXF1ZXN0Qm9keSA9IHtcclxuICAgICAgcXVlcnk6IGBcclxuICAgICAgICBxdWVyeSB7XHJcbiAgICAgICAgICB1c2VyQnlUb2tlbntcclxuICAgICAgICAgICAgZmlyc3ROYW1lLFxyXG4gICAgICAgICAgICBsYXN0TmFtZSxcclxuICAgICAgICAgICAgam9iVGl0bGUsXHJcbiAgICAgICAgICAgIGxvY2F0aW9uLFxyXG4gICAgICAgICAgICBfaWQsXHJcbiAgICAgICAgICAgIGxhbmd1YWdlcyxcclxuICAgICAgICAgICAgYWJvdXQsXHJcbiAgICAgICAgICAgIG93bmVkVmlkZW9zIHtcclxuICAgICAgICAgICAgICBfaWQsXHJcbiAgICAgICAgICAgICAgdGl0bGUsXHJcbiAgICAgICAgICAgICAgdGh1bWJuYWlsVVJMLFxyXG4gICAgICAgICAgICAgIHZpZGVvVVJMXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHBsYXlsaXN0Q29tbWVudHN7XHJcbiAgICAgICAgICAgICAgX2lkLFxyXG4gICAgICAgICAgICAgIGNvbnRlbnQsXHJcbiAgICAgICAgICAgICAgY29tbWVudGVyIHtcclxuICAgICAgICAgICAgICBfaWQgXHJcbiAgICAgICAgICAgICAgfSwgIFxyXG4gICAgICAgICAgICAgIGNyZWF0ZWRBdCxcclxuICAgICAgICAgICAgICB1cGRhdGVkQXRcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZmF2b3VyaXRlcyxcclxuICAgICAgICAgICAgcHJvZmlsZVBob3RvRmlsZW5hbWVcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIGBcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtVUkl9L2dyYXBocWxgLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocmVxdWVzdEJvZHkpLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IGBCZWFyZXIgJHt0b2tlbn1gXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG5cclxuICAgICAgaWYgKHJlcy5zdGF0dXMgIT09IDIwMCAmJiByZXMuc3RhdHVzICE9PSAyMDEpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZhaWxlZCB0byBmZXRjaCB1c2VyIGRhdGEnKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gLmpzb24oKSBpcyBhIG1ldGhvZCBmcm9tIGZldGNoIEFQSSB0aGF0IGF1dG8gZXh0cmFjdHMgJiBwYXJzZXMgdGhlIHJlcyBib2R5XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG5cclxuICAgICAgLy8gQ2hlY2sgZm9yIGVycm9ycyBhcnJheSBpbiByZXNwb25zZVxyXG4gICAgICBpZiAoZGF0YS5lcnJvcnMpIHtcclxuICAgICAgICBkYXRhLmVycm9ycy5tYXAoZXJyb3IgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyb3IubWVzc2FnZSlcclxuICAgICAgICB9KVxyXG4gICAgICAgIHJldHVyblxyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCB1c2VyID0gZGF0YS5kYXRhLnVzZXJCeVRva2VuO1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyh1c2VyLmZpcnN0TmFtZSlcclxuICAgICAgLy8gY29uc29sZS5sb2codXNlcik7XHJcbiAgICAgIFxyXG4gICAgICBzZXRDdXJyZW50VXNlcih7XHJcbiAgICAgICAgaWQ6IHVzZXIuX2lkLFxyXG4gICAgICAgIGZpcnN0TmFtZTogdXNlci5maXJzdE5hbWUsXHJcbiAgICAgICAgbGFzdE5hbWU6IHVzZXIubGFzdE5hbWUsXHJcbiAgICAgICAgam9iVGl0bGU6IHVzZXIuam9iVGl0bGUsXHJcbiAgICAgICAgbG9jYXRpb246IHVzZXIubG9jYXRpb24sXHJcbiAgICAgICAgbGFuZ3VhZ2VzOiB1c2VyLmxhbmd1YWdlcyxcclxuICAgICAgICBhYm91dDogdXNlci5hYm91dCxcclxuICAgICAgICBvd25lZFZpZGVvczogdXNlci5vd25lZFZpZGVvcyxcclxuICAgICAgICB1c2VyQ29tbWVudHM6IHVzZXIudXNlckNvbW1lbnRzLFxyXG4gICAgICAgIHBsYXlsaXN0Q29tbWVudHM6IHVzZXIucGxheWxpc3RDb21tZW50cyxcclxuICAgICAgICBmYXZvdXJpdGVzOiB1c2VyLmZhdm91cml0ZXMsXHJcbiAgICAgICAgcHJvZmlsZVBob3RvRmlsZW5hbWU6IHVzZXIucHJvZmlsZVBob3RvRmlsZW5hbWVcclxuICAgICAgfSkgIFxyXG5cclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgfVxyXG5cclxuICBjb25zdCBmZXRjaFByb2ZpbGVVc2VyID0gYXN5bmMgKHVzZXJJZCwgaW5pdGlhbEZldGNoKSA9PiB7XHJcblxyXG4gICAgaWYgKGluaXRpYWxGZXRjaCA9PT0gdHJ1ZSkge1xyXG4gICAgICAvLyBPbmx5IGZldGNoIGRhdGEgaWYgcHJvZmlsZVVzZXIgaXNuJ3QgcG9wdWxhdGVkXHJcbiAgICAgIGlmIChwcm9maWxlVXNlci5maXJzdE5hbWUgIT09ICcnKSB7XHJcbiAgICAgICAgcmV0dXJuXHJcbiAgICAgIH1cclxuICAgICAgLy8gT25seSBmZXRjaCBkYXRhIGlmIHRoZSB1c2VySWQgaGFzIGJlZW4gcGFyc2VkIGZyb20gdGhlIFVSTFxyXG4gICAgICBpZiAodXNlcklkID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICByZXR1cm5cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gR2V0IHRoZSBwcm9maWxlIHVzZXIncyBkYXRhIHVzaW5nIHRoZSB1c2VySWQgZnJvbSB0aGUgVVJMXHJcbiAgICBjb25zdCB1c2VyID0gYXdhaXQgZ2V0VXNlckRhdGFCeUlkKHVzZXJJZCk7XHJcblxyXG4gICAgLy8gU2V0IHRoZSBzdGF0ZVxyXG4gICAgc2V0UHJvZmlsZVVzZXIoe1xyXG4gICAgICBpZDogdXNlcklkLFxyXG4gICAgICBmaXJzdE5hbWU6IHVzZXIuZmlyc3ROYW1lLFxyXG4gICAgICBsYXN0TmFtZTogdXNlci5sYXN0TmFtZSxcclxuICAgICAgam9iVGl0bGU6IHVzZXIuam9iVGl0bGUsXHJcbiAgICAgIGxvY2F0aW9uOiB1c2VyLmxvY2F0aW9uLFxyXG4gICAgICBsYW5ndWFnZXM6IHVzZXIubGFuZ3VhZ2VzLFxyXG4gICAgICBhYm91dDogdXNlci5hYm91dCxcclxuICAgICAgb3duZWRWaWRlb3M6IHVzZXIub3duZWRWaWRlb3MsXHJcbiAgICAgIHVzZXJDb21tZW50czogdXNlci51c2VyQ29tbWVudHMsXHJcbiAgICAgIHBsYXlsaXN0Q29tbWVudHM6IHVzZXIucGxheWxpc3RDb21tZW50cyxcclxuICAgICAgZmF2b3VyaXRlczogdXNlci5mYXZvdXJpdGVzLFxyXG4gICAgICBwcm9maWxlUGhvdG9GaWxlbmFtZTogdXNlci5wcm9maWxlUGhvdG9GaWxlbmFtZVxyXG5cclxuICAgIH0pXHJcblxyXG4gICAgLy9TZXQgdmlkZW8gc3RhdGUgdG8gYmUgZmlyc3QgdmlkZW8gaW4gcHJvZmlsZSB1c2VyJ3MgcGxheWxpc3RcclxuICAgIGlmICh1c2VyLm93bmVkVmlkZW9zLmxlbmd0aCA+IDApe1xyXG4gICAgICBjb25zdCB2aWRlbyA9IHVzZXIub3duZWRWaWRlb3NbMF1cclxuICAgICAgc2V0Q3VycmVudFZpZGVvKHtcclxuICAgICAgICB0aXRsZTogdmlkZW8udGl0bGUsXHJcbiAgICAgICAgdmlkZW9JZDogdmlkZW8udmlkZW9VUkxcclxuICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICAvLyBGZXRjaCB0aGUgdXNlcidzIHByb2ZpbGUgcGhvdG9cclxuICAgIC8vIGdldFByb2ZpbGVQaG90byh1c2VyLnByb2ZpbGVQaG90b0ZpbGVuYW1lKTtcclxuXHJcbiAgICByZXR1cm4gdXNlcjtcclxuICB9XHJcblxyXG4gIC8vIFJlc2V0IHRoZSBQcm9maWxlVXNlciBzdGF0ZVxyXG4gIGNvbnN0IGNsZWFyUHJvZmlsZVVzZXIgPSAoKSA9PiB7XHJcbiAgICBzZXRQcm9maWxlVXNlcih7XHJcbiAgICAgIGlkOiAnJyxcclxuICAgICAgZmlyc3ROYW1lOiAnJyxcclxuICAgICAgbGFzdE5hbWU6ICcnLFxyXG4gICAgICBqb2JUaXRsZTogJycsXHJcbiAgICAgIGxvY2F0aW9uOiAnJyxcclxuICAgICAgbGFuZ3VhZ2VzOiBbXSxcclxuICAgICAgYWJvdXQ6ICcnLFxyXG4gICAgICBvd25lZFZpZGVvczogW10sXHJcbiAgICAgIHVzZXJDb21tZW50czogW10sXHJcbiAgICAgIHBsYXlsaXN0Q29tbWVudHM6IFtdLFxyXG4gICAgICBmYXZvdXJpdGVzOiBbXSxcclxuICAgICAgcHJvZmlsZVBob3RvRmlsZW5hbWU6ICcnXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGdldENvbW1lbnRVc2VyID0gYXN5bmMgKHVzZXJJZCkgPT4ge1xyXG4gICAgbGV0IHJlcXVlc3RCb2R5ID0ge1xyXG4gICAgICBxdWVyeTogYFxyXG4gICAgICAgICAgcXVlcnkge1xyXG4gICAgICAgICAgICB1c2VyQnlJZChpZDpcIiR7dXNlcklkfVwiKSB7XHJcbiAgICAgICAgICAgICAgZmlyc3ROYW1lLFxyXG4gICAgICAgICAgICAgIGxhc3ROYW1lLFxyXG4gICAgICAgICAgICAgIHByb2ZpbGVQaG90b0ZpbGVuYW1lXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGBcclxuICAgIH1cclxuICAgIGNvbnN0IGNvbW1lbnRVc2VyID0gYXdhaXQgZ2V0VXNlckRhdGFCeUlkKHVzZXJJZCwgcmVxdWVzdEJvZHkpO1xyXG4gICAgcmV0dXJuIGNvbW1lbnRVc2VyO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgZ2V0RmF2b3VyaXRlVXNlciA9IGFzeW5jICh1c2VySWQpID0+IHtcclxuICAgIGxldCByZXF1ZXN0Qm9keSA9IHtcclxuICAgICAgcXVlcnk6IGBcclxuICAgICAgICAgIHF1ZXJ5IHtcclxuICAgICAgICAgICAgdXNlckJ5SWQoaWQ6XCIke3VzZXJJZH1cIikge1xyXG4gICAgICAgICAgICAgIGZpcnN0TmFtZSxcclxuICAgICAgICAgICAgICBsYXN0TmFtZSxcclxuICAgICAgICAgICAgICBwcm9maWxlUGhvdG9GaWxlbmFtZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBgXHJcbiAgICB9XHJcbiAgICBjb25zdCBmYXZvdXJpdGVVc2VyID0gYXdhaXQgZ2V0VXNlckRhdGFCeUlkKHVzZXJJZCwgcmVxdWVzdEJvZHkpXHJcbiAgICByZXR1cm4gZmF2b3VyaXRlVXNlcjtcclxuICB9XHJcblxyXG4gIFxyXG4gIC8vIGNvbnN0IGdldFByb2ZpbGVQaG90byA9IGFzeW5jIChmaWxlbmFtZSkgPT4ge1xyXG4gIC8vICAgdHJ5IHtcclxuICAvLyAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGBodHRwOi8vbG9jYWxob3N0OjUwMDAvZmlsZS8ke2ZpbGVuYW1lfWApO1xyXG5cclxuICAvLyAgICAgY29uc3QgcGhvdG8gPSByZXMuZGF0YTtcclxuXHJcbiAgLy8gICAgIHNldFByb2ZpbGVQaG90byhwaG90byk7XHJcblxyXG5cclxuICAvLyAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgLy8gICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAvLyAgIH1cclxuICAvLyB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuICAvLyBWSURFT1MgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuXHJcblxyXG4gIC8vIEFkZCBhIHZpZGVvIHRvIGEgdXNlcidzIHBsYXlsaXN0XHJcbiAgY29uc3QgYWRkVmlkZW9Ub1BsYXlsaXN0ID0gYXN5bmMgKHZpZGVvKSA9PiB7XHJcblxyXG4gICAgLy8gU2VuZCBhbiBBUEkgcmVxdWVzdCB0byBzYXZlIHRoZSB2aWRlb1xyXG4gICAgY29uc3QgcmVxdWVzdEJvZHkgPSB7XHJcbiAgICAgIHF1ZXJ5OiBgXHJcbiAgICAgICAgbXV0YXRpb24ge1xyXG4gICAgICAgICAgY3JlYXRlVmlkZW8odmlkZW9JbnB1dDoge3RpdGxlOiBcIiR7dmlkZW8udGl0bGV9XCIsIHRodW1ibmFpbFVSTDogXCIke3ZpZGVvLnRodW1ibmFpbFVSTH1cIiwgdmlkZW9VUkw6IFwiJHt2aWRlby52aWRlb0lkfVwiLCB1c2VySWQ6IFwiJHtjdXJyZW50VXNlci5pZH1cIn0pIHtcclxuICAgICAgICAgICAgX2lkXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICBgXHJcbiAgICB9XHJcblxyXG4gICAgLy8gY29uc29sZS5sb2cocmVxdWVzdEJvZHkpXHJcbiAgICAvLyBjb25zb2xlLmxvZyhhdXRoU3RhdGUudG9rZW4pXHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7VVJJfS9ncmFwaHFsYCwge1xyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHJlcXVlc3RCb2R5KSxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBgQmVhcmVyICR7YXV0aFN0YXRlLnRva2VufWBcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcblxyXG4gICAgICBpZiAocmVzLnN0YXR1cyAhPT0gMjAwICYmIHJlcy5zdGF0dXMgIT09IDIwMSkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignRmFpbGVkIHRvIGNyZWF0ZSB2aWRlbyEnKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gLmpzb24oKSBpcyBhIG1ldGhvZCBmcm9tIGZldGNoIEFQSSB0aGF0IGF1dG8gZXh0cmFjdHMgJiBwYXJzZXMgdGhlIHJlcyBib2R5XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG5cclxuICAgICAgLy8gQ2hlY2sgZm9yIGVycm9ycyBhcnJheSBpbiByZXNwb25zZVxyXG4gICAgICBpZiAoZGF0YS5lcnJvcnMpIHtcclxuICAgICAgICBkYXRhLmVycm9ycy5tYXAoZXJyb3IgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyb3IubWVzc2FnZSlcclxuICAgICAgICB9KVxyXG4gICAgICAgIHJldHVyblxyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBSZWZyZXNoIHRoZSBwcm9maWxlIHdpdGggdGhlIG5ldyB1c2VyIGRhdGEgLSB0byB1cGRhdGUgdGhlIHBsYXlsaXN0XHJcbiAgICAgIGZldGNoUHJvZmlsZVVzZXIoY3VycmVudFVzZXIuaWQsIGZhbHNlKVxyXG5cclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG4gIC8vIFJlbW92ZSBhIHZpZGVvIGZyb20gYSB1c2VyJ3MgcGxheWxpc3RcclxuICBjb25zdCByZW1vdmVWaWRlb0Zyb21QbGF5bGlzdCA9IGFzeW5jIChpZCkgPT4ge1xyXG5cclxuICAvLyBTZW5kIGFuIEFQSSByZXF1ZXN0IHRvIHNhdmUgdGhlIHZpZGVvXHJcbiAgICBjb25zdCByZXF1ZXN0Qm9keSA9IHtcclxuICAgICAgcXVlcnk6IGBcclxuICAgICAgICBtdXRhdGlvbiB7XHJcbiAgICAgICAgICByZW1vdmVWaWRlbyhpZDogXCIke2lkfVwiKSB7XHJcbiAgICAgICAgICAgIG93bmVkVmlkZW9zIHtcclxuICAgICAgICAgICAgICBfaWQsXHJcbiAgICAgICAgICAgICAgdGh1bWJuYWlsVVJMLFxyXG4gICAgICAgICAgICAgIHRpdGxlLFxyXG4gICAgICAgICAgICAgIHZpZGVvVVJMXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIGBcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtVUkl9L2dyYXBocWxgLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocmVxdWVzdEJvZHkpLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IGBCZWFyZXIgJHthdXRoU3RhdGUudG9rZW59YFxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuXHJcbiAgICAgIGlmIChyZXMuc3RhdHVzICE9PSAyMDAgJiYgcmVzLnN0YXR1cyAhPT0gMjAxKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdGYWlsZWQgdG8gcmVtb3ZlIHZpZGVvIScpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyAuanNvbigpIGlzIGEgbWV0aG9kIGZyb20gZmV0Y2ggQVBJIHRoYXQgYXV0byBleHRyYWN0cyAmIHBhcnNlcyB0aGUgcmVzIGJvZHlcclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcblxyXG4gICAgICBjb25zb2xlLmxvZyhkYXRhLmRhdGEucmVtb3ZlVmlkZW8pXHJcblxyXG4gICAgICBjb25zdCB2aWRlb3MgPSBkYXRhLmRhdGEucmVtb3ZlVmlkZW8ub3duZWRWaWRlb3M7XHJcbiAgICAgIGNvbnNvbGUubG9nKHZpZGVvcyk7XHJcblxyXG4gICAgICAvLyBDaGVjayBmb3IgZXJyb3JzIGFycmF5IGluIHJlc3BvbnNlXHJcbiAgICAgIGlmIChkYXRhLmVycm9ycykge1xyXG4gICAgICAgIGRhdGEuZXJyb3JzLm1hcChlcnJvciA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvci5tZXNzYWdlKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmV0dXJuXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIFJlZnJlc2ggdGhlIHByb2ZpbGUgd2l0aCB0aGUgbmV3IHVzZXIgZGF0YSAtIHRvIHVwZGF0ZSB0aGUgcGxheWxpc3RcclxuICAgICAgdXBkYXRlUHJvZmlsZVVzZXJWaWRlb3ModmlkZW9zKVxyXG5cclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgdXBkYXRlUHJvZmlsZVVzZXJWaWRlb3MgPSAodmlkZW9zKSA9PiB7XHJcbiAgICAvLyBVcGRhdGUgdGhlIHByb2ZpbGUgdXNlcidzIG93bmVkVmlkZW8gaW4gdGggZ2xvYmFsIHN0YXRlXHJcbiAgICBzZXRQcm9maWxlVXNlcih7Li4ucHJvZmlsZVVzZXIsIG93bmVkVmlkZW9zOiB2aWRlb3N9KSBcclxuICB9XHJcblxyXG4gIC8vIFNldCBhIHZpZGVvIGFzIHRoZSBjdXJyZW50IHZpZGVvIGZvciB0aGUgdmlkZW8gcGxheWVyXHJcbiAgY29uc3Qgc2V0Q3VycmVudFZpZGVvID0gKHZpZGVvKSA9PiB7XHJcbiAgICBzZXRWaWRlb1N0YXRlKHtcclxuICAgICAgdGl0bGU6IHZpZGVvLnRpdGxlLFxyXG4gICAgICAvLyBkZXNjcmlwdGlvbjogdmlkZW8uZGVzY3JpcHRpb24sXHJcbiAgICAgIHZpZGVvSWQ6IHZpZGVvLnZpZGVvSWRcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuXHJcbiAgXHJcbiAgXHJcbiAgLy8gQ09NTUVOVFMgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuXHJcbiAgLy8gQWRkIGEgY29tbWVudFxyXG4gIGNvbnN0IGFkZENvbW1lbnQgPSBhc3luYyAoY29udGVudCkgPT4ge1xyXG5cclxuICAgIC8vIFNlbmQgYW4gQVBJIHJlcXVlc3QgdG8gc2F2ZSB0aGUgY29tbWVudFxyXG4gICAgY29uc3QgcmVxdWVzdEJvZHkgPSB7XHJcbiAgICAgIHF1ZXJ5OiBgXHJcbiAgICAgICAgbXV0YXRpb24ge1xyXG4gICAgICAgICAgY3JlYXRlQ29tbWVudChjb21tZW50SW5wdXQ6IHtjb250ZW50OiBcIiR7Y29udGVudH1cIiwgY29tbWVudGVySWQ6IFwiJHtjdXJyZW50VXNlci5pZH1cIiwgcGxheWxpc3RPd25lcklkOiBcIiR7cHJvZmlsZVVzZXIuaWR9XCJ9KSB7XHJcbiAgICAgICAgICAgIF9pZFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgYFxyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke1VSSX0vZ3JhcGhxbGAsIHtcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShyZXF1ZXN0Qm9keSksXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICdBdXRob3JpemF0aW9uJzogYEJlYXJlciAke2F1dGhTdGF0ZS50b2tlbn1gXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG5cclxuICAgICAgaWYgKHJlcy5zdGF0dXMgIT09IDIwMCAmJiByZXMuc3RhdHVzICE9PSAyMDEpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZhaWxlZCB0byBjcmVhdGUgY29tbWVudCEnKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gLmpzb24oKSBpcyBhIG1ldGhvZCBmcm9tIGZldGNoIEFQSSB0aGF0IGF1dG8gZXh0cmFjdHMgJiBwYXJzZXMgdGhlIHJlcyBib2R5XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG5cclxuICAgICAgLy8gQ2hlY2sgZm9yIGVycm9ycyBhcnJheSBpbiByZXNwb25zZVxyXG4gICAgICBpZiAoZGF0YS5lcnJvcnMpIHtcclxuICAgICAgICBkYXRhLmVycm9ycy5tYXAoZXJyb3IgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyb3IubWVzc2FnZSlcclxuICAgICAgICB9KVxyXG4gICAgICAgIHJldHVyblxyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBSZWZyZXNoIHRoZSBwcm9maWxlIHdpdGggdGhlIG5ldyB1c2VyIGRhdGEgLSB0byB1cGRhdGUgdGhlIGNvbW1lbnQgc2VjdGlvblxyXG4gICAgICBmZXRjaFByb2ZpbGVVc2VyKHByb2ZpbGVVc2VyLmlkLCBmYWxzZSlcclxuXHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIFxyXG4gIC8vIFJlbW92ZSBhIGNvbW1lbnQgZnJvbSBhIHVzZXIncyBwbGF5bGlzdFxyXG4gIGNvbnN0IHJlbW92ZUNvbW1lbnRGcm9tUGxheWxpc3QgPSBhc3luYyAoaWQpID0+IHtcclxuXHJcbiAgICAvLyBTZW5kIGFuIEFQSSByZXF1ZXN0IHRvIGRlbGV0ZSB0aGUgY29tbWVudFxyXG4gICAgY29uc3QgcmVxdWVzdEJvZHkgPSB7XHJcbiAgICAgIHF1ZXJ5OiBgXHJcbiAgICAgICAgbXV0YXRpb24ge1xyXG4gICAgICAgICAgcmVtb3ZlQ29tbWVudChpZDogXCIke2lkfVwiLCBwbGF5bGlzdE93bmVySWQ6IFwiJHtwcm9maWxlVXNlci5pZH1cIikge1xyXG4gICAgICAgICAgICBwbGF5bGlzdENvbW1lbnRze1xyXG4gICAgICAgICAgICAgIF9pZCxcclxuICAgICAgICAgICAgICBjb250ZW50LFxyXG4gICAgICAgICAgICAgIGNvbW1lbnRlciB7XHJcbiAgICAgICAgICAgICAgICBfaWRcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIGNyZWF0ZWRBdCxcclxuICAgICAgICAgICAgICB1cGRhdGVkQXRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgYFxyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke1VSSX0vZ3JhcGhxbGAsIHtcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShyZXF1ZXN0Qm9keSksXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICdBdXRob3JpemF0aW9uJzogYEJlYXJlciAke2F1dGhTdGF0ZS50b2tlbn1gXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG5cclxuICAgICAgaWYgKHJlcy5zdGF0dXMgIT09IDIwMCAmJiByZXMuc3RhdHVzICE9PSAyMDEpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZhaWxlZCB0byByZW1vdmUgY29tbWVudCEnKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gLmpzb24oKSBpcyBhIG1ldGhvZCBmcm9tIGZldGNoIEFQSSB0aGF0IGF1dG8gZXh0cmFjdHMgJiBwYXJzZXMgdGhlIHJlcyBib2R5XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG5cclxuICAgICAgY29uc3QgY29tbWVudHMgPSBkYXRhLmRhdGEucmVtb3ZlQ29tbWVudC5wbGF5bGlzdENvbW1lbnRzO1xyXG5cclxuICAgICAgLy8gQ2hlY2sgZm9yIGVycm9ycyBhcnJheSBpbiByZXNwb25zZVxyXG4gICAgICBpZiAoZGF0YS5lcnJvcnMpIHtcclxuICAgICAgICBkYXRhLmVycm9ycy5tYXAoZXJyb3IgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyb3IubWVzc2FnZSlcclxuICAgICAgICB9KVxyXG4gICAgICAgIHJldHVyblxyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBSZWZyZXNoIHRoZSBwcm9maWxlIHdpdGggdGhlIG5ldyB1c2VyIGRhdGEgLSB0byB1cGRhdGUgdGhlIGNvbW1lbnRzXHJcbiAgICAgIHVwZGF0ZVByb2ZpbGVVc2VyQ29tbWVudHMoY29tbWVudHMpO1xyXG5cclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgdXBkYXRlUHJvZmlsZVVzZXJDb21tZW50cyA9IChjb21tZW50cykgPT4ge1xyXG4gICAgLy8gVXBkYXRlIHRoZSBwcm9maWxlIHVzZXIncyBwbGF5bGlzdENvbW1lbnRzIGluIHRoZSBnbG9iYWwgc3RhdGVcclxuICAgIHNldFByb2ZpbGVVc2VyKHsgLi4ucHJvZmlsZVVzZXIsIHBsYXlsaXN0Q29tbWVudHM6IGNvbW1lbnRzIH0pXHJcbiAgfVxyXG5cclxuICBjb25zdCBlZGl0Q29tbWVudCA9IGFzeW5jIChpZCwgY29udGVudCkgPT4ge1xyXG5cclxuICAgIC8vIE1ha2UgYSBBUEkgcXVlcnkgdG8gZ2V0IGEgdG9rZW5cclxuICAgIGNvbnN0IHJlcXVlc3RCb2R5ID0ge1xyXG4gICAgICBxdWVyeTogYFxyXG4gICAgICBtdXRhdGlvbiB7XHJcbiAgICAgICAgZWRpdENvbW1lbnQoaWQ6IFwiJHtpZH1cIiwgY29udGVudDogXCIke2NvbnRlbnR9XCIpIHtcclxuICAgICAgICAgIGNvbnRlbnRcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIGBcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtVUkl9L2dyYXBocWxgLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocmVxdWVzdEJvZHkpLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IGBCZWFyZXIgJHthdXRoU3RhdGUudG9rZW59YFxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuXHJcbiAgICAgIGlmIChyZXMuc3RhdHVzICE9PSAyMDAgJiYgcmVzLnN0YXR1cyAhPT0gMjAxKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVc2VyIHVwZGF0ZSBmYWlsZWQhJyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIC5qc29uKCkgaXMgYSBtZXRob2QgZnJvbSBmZXRjaCBBUEkgdGhhdCBhdXRvIGV4dHJhY3RzICYgcGFyc2VzIHRoZSByZXMgYm9keVxyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuXHJcbiAgICAgIC8vIENoZWNrIGZvciBlcnJvcnMgYXJyYXkgaW4gcmVzcG9uc2VcclxuICAgICAgaWYgKGRhdGEuZXJyb3JzKSB7XHJcbiAgICAgICAgZGF0YS5lcnJvcnMubWFwKGVycm9yID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLm1lc3NhZ2UpXHJcbiAgICAgICAgfSlcclxuICAgICAgICByZXR1cm5cclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc29sZS5sb2coZGF0YS5kYXRhKVxyXG5cclxuICAgICAgLy8gUmVmcmVzaCB0aGUgcHJvZmlsZSB3aXRoIHRoZSBuZXcgdXNlciBkYXRhIC0gdG8gdXBkYXRlIHRoZSBjb21tZW50c1xyXG4gICAgICBmZXRjaFByb2ZpbGVVc2VyKHByb2ZpbGVVc2VyLmlkLCBmYWxzZSlcclxuXHJcblxyXG5cclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG4gIC8vIEZhdm91cml0ZXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gIGNvbnN0IGFkZEZhdm91cml0ZSA9IGFzeW5jIChpZCkgPT4ge1xyXG5cclxuICAgIC8vIFNlbmQgYW4gQVBJIHJlcXVlc3QgdG8gYWRkIHRoZSBmYXZvdXJpdGVcclxuICAgIGNvbnN0IHJlcXVlc3RCb2R5ID0ge1xyXG4gICAgICBxdWVyeTogYFxyXG4gICAgICAgIG11dGF0aW9uIHtcclxuICAgICAgICAgIGFkZEZhdm91cml0ZShpZDogXCIke2lkfVwiKSB7XHJcbiAgICAgICAgICAgIF9pZFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgYFxyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke1VSSX0vZ3JhcGhxbGAsIHtcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShyZXF1ZXN0Qm9keSksXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICdBdXRob3JpemF0aW9uJzogYEJlYXJlciAke2F1dGhTdGF0ZS50b2tlbn1gXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG5cclxuICAgICAgaWYgKHJlcy5zdGF0dXMgIT09IDIwMCAmJiByZXMuc3RhdHVzICE9PSAyMDEpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZhaWxlZCB0byBhZGQgZmF2b3VyaXRlIScpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyAuanNvbigpIGlzIGEgbWV0aG9kIGZyb20gZmV0Y2ggQVBJIHRoYXQgYXV0byBleHRyYWN0cyAmIHBhcnNlcyB0aGUgcmVzIGJvZHlcclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcblxyXG4gICAgICAvLyBDaGVjayBmb3IgZXJyb3JzIGFycmF5IGluIHJlc3BvbnNlXHJcbiAgICAgIGlmIChkYXRhLmVycm9ycykge1xyXG4gICAgICAgIGRhdGEuZXJyb3JzLm1hcChlcnJvciA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvci5tZXNzYWdlKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmV0dXJuXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIFxyXG4gICAgICAvLyBSZWZyZXNoIHRoZSBjdXJyZW50VXNlcidzIGRhdGEgdG8gdXBkYXRlIHRoZSBhZGQgZmF2b3VyaXRlIHByb2ZpbGUgYnV0dG9uXHJcbiAgICAgIC8vIGdldFVzZXJEYXRhQnlJZChjdXJyZW50VXNlci5pZClcclxuICAgICAgLy8gUmVmcmVzaCB0aGUgcHJvZmlsZSB3aXRoIHRoZSBuZXcgdXNlciBkYXRhIC0gdG8gdXBkYXRlIHRoZSBmYXZvdXJpdGVzIHNlY3Rpb25cclxuICAgICAgLy8gZmV0Y2hQcm9maWxlVXNlcihpZCwgZmFsc2UpXHJcbiAgICAgIGdldFVzZXJEYXRhQnlUb2tlbihhdXRoU3RhdGUudG9rZW4pO1xyXG5cclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG4gIC8vIFJlbW92ZSBhIGZhdm91cml0ZSBmcm9tIGEgdXNlcnMgcHJvZmlsZVxyXG4gIGNvbnN0IHJlbW92ZUZhdm91cml0ZSA9IGFzeW5jIChpZCkgPT4ge1xyXG5cclxuICAgIC8vIFNlbmQgYW4gQVBJIHJlcXVlc3QgdG8gZGVsZXRlIHRoZSBjb21tZW50XHJcbiAgICBjb25zdCByZXF1ZXN0Qm9keSA9IHtcclxuICAgICAgcXVlcnk6IGBcclxuICAgICAgICBtdXRhdGlvbiB7XHJcbiAgICAgICAgICByZW1vdmVGYXZvdXJpdGUoaWQ6IFwiJHtpZH1cIikge1xyXG4gICAgICAgICAgICBmYXZvdXJpdGVzXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICBgXHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7VVJJfS9ncmFwaHFsYCwge1xyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHJlcXVlc3RCb2R5KSxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBgQmVhcmVyICR7YXV0aFN0YXRlLnRva2VufWBcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcblxyXG4gICAgICBpZiAocmVzLnN0YXR1cyAhPT0gMjAwICYmIHJlcy5zdGF0dXMgIT09IDIwMSkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignRmFpbGVkIHRvIHJlbW92ZSBmYXZvdXJpdGUhJyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIC5qc29uKCkgaXMgYSBtZXRob2QgZnJvbSBmZXRjaCBBUEkgdGhhdCBhdXRvIGV4dHJhY3RzICYgcGFyc2VzIHRoZSByZXMgYm9keVxyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuXHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGEpXHJcblxyXG4gICAgICBjb25zdCBmYXZvdXJpdGVzID0gZGF0YS5kYXRhLnJlbW92ZUZhdm91cml0ZS5mYXZvdXJpdGVzO1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhmYXZvdXJpdGVzKVxyXG5cclxuICAgICAgLy8gUmVmcmVzaCB0aGUgcHJvZmlsZSB3aXRoIHRoZSBuZXcgdXNlciBkYXRhIC0gdG8gdXBkYXRlIHRoZSBmYXZvdXJpdGVzIHNlY3Rpb25cclxuICAgICAgLy8gZmV0Y2hQcm9maWxlVXNlcihpZCwgZmFsc2UpXHJcblxyXG4gICAgICAvLyBSZWZyZXNoIHRoZSBjdXJyZW50VXNlcidzIGRhdGEgdG8gdXBkYXRlIHRoZSBhZGQgZmF2b3VyaXRlIHByb2ZpbGUgYnV0dG9uXHJcbiAgICAgIC8vIGdldFVzZXJEYXRhQnlJZChjdXJyZW50VXNlci5pZClcclxuXHJcbiAgICAgIGdldFVzZXJEYXRhQnlUb2tlbihhdXRoU3RhdGUudG9rZW4pO1xyXG5cclxuXHJcbiAgICAgIC8vIENoZWNrIGZvciBlcnJvcnMgYXJyYXkgaW4gcmVzcG9uc2VcclxuICAgICAgaWYgKGRhdGEuZXJyb3JzKSB7XHJcbiAgICAgICAgZGF0YS5lcnJvcnMubWFwKGVycm9yID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLm1lc3NhZ2UpXHJcbiAgICAgICAgfSlcclxuICAgICAgICByZXR1cm5cclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gUmVmcmVzaCB0aGUgcHJvZmlsZSB3aXRoIHRoZSBuZXcgdXNlciBkYXRhIC0gdG8gdXBkYXRlIHRoZSBmYXZvdXJpdGVzXHJcbiAgICAgIHVwZGF0ZVByb2ZpbGVVc2VyRmF2b3VyaXRlcyhmYXZvdXJpdGVzKTtcclxuXHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IHVwZGF0ZVByb2ZpbGVVc2VyRmF2b3VyaXRlcyA9IChmYXZvdXJpdGVzKSA9PiB7XHJcbiAgICAvLyBVcGRhdGUgdGhlIHByb2ZpbGUgdXNlcidzIGZhdm91cml0ZXMgaW4gdGggZ2xvYmFsIHN0YXRlXHJcbiAgICBzZXRQcm9maWxlVXNlcih7IC4uLnByb2ZpbGVVc2VyLCBmYXZvdXJpdGVzIH0pXHJcbiAgfVxyXG5cclxuXHJcbiAgLy8gUEhPVE8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICBcclxuICBjb25zdCB1cGxvYWRGaWxlID0gYXN5bmMgKGZvcm1EYXRhKSA9PiB7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgLy8gTWFrZSBBUEkgcmVxdWVzdCB0byB1cGxvYWQgdGhlIGZpbGUgdG8gdGhlIERCXHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLnBvc3QoYGh0dHA6Ly9sb2NhbGhvc3Q6JHtwb3J0fS91cGxvYWRgLCBmb3JtRGF0YSwge1xyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnbXVsdGlwYXJ0L2Zvcm0tZGF0YScsXHJcbiAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IGBCZWFyZXIgJHthdXRoU3RhdGUudG9rZW59YFxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgICAvLyByZWZyZXNoIHRoZSBwcm9maWxlXHJcbiAgICAgIGZldGNoUHJvZmlsZVVzZXIoY3VycmVudFVzZXIuaWQpXHJcblxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG5cclxuICBcclxuICBcclxuICBcclxuICBcclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRleHRQcm92aWRlciB2YWx1ZT17e1xyXG4gICAgICBhdXRoU3RhdGUsXHJcbiAgICAgIGN1cnJlbnRVc2VyLFxyXG4gICAgICBwcm9maWxlVXNlcixcclxuICAgICAgc2V0UHJvZmlsZVVzZXIsXHJcbiAgICAgIHZpZGVvU3RhdGUsXHJcbiAgICAgIGNvbW1lbnRTdGF0ZSxcclxuICAgICAgYWxsVXNlcnMsXHJcbiAgICAgIGF1dG9wbGF5LFxyXG4gICAgICBzZXRBdXRvcGxheSxcclxuICAgICAgLy8gcHJvZmlsZVBob3RvLFxyXG4gICAgICBsb2dpbixcclxuICAgICAgcmVnaXN0ZXIsXHJcbiAgICAgIGxvZ291dCxcclxuICAgICAgdXBkYXRlVXNlcixcclxuICAgICAgZ2V0VXNlckRhdGFCeUlkLFxyXG4gICAgICBnZXRVc2VyRGF0YUJ5VG9rZW4sXHJcbiAgICAgIGZldGNoUHJvZmlsZVVzZXIsXHJcbiAgICAgIGdldENvbW1lbnRVc2VyLFxyXG4gICAgICBnZXRGYXZvdXJpdGVVc2VyLFxyXG4gICAgICBhZGRWaWRlb1RvUGxheWxpc3QsXHJcbiAgICAgIGNsZWFyUHJvZmlsZVVzZXIsXHJcbiAgICAgIHJlbW92ZVZpZGVvRnJvbVBsYXlsaXN0LFxyXG4gICAgICBzZXRDdXJyZW50VmlkZW8sXHJcbiAgICAgIGFkZENvbW1lbnQsXHJcbiAgICAgIGVkaXRDb21tZW50LFxyXG4gICAgICByZW1vdmVDb21tZW50RnJvbVBsYXlsaXN0LFxyXG4gICAgICBhZGRGYXZvdXJpdGUsXHJcbiAgICAgIHJlbW92ZUZhdm91cml0ZSxcclxuICAgICAgdXBsb2FkRmlsZVxyXG4gICAgfX0+XHJcbiAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgPEFuaW1hdGVQcmVzZW5jZSBleGl0QmVmb3JlRW50ZXI+XHJcbiAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICAgICAgPC9BbmltYXRlUHJlc2VuY2U+XHJcbiAgICAgIDwvTGF5b3V0PlxyXG4gICAgPC9Db250ZXh0UHJvdmlkZXI+XHJcbiAgKVxyXG59XHJcblxyXG5cclxuLy8gQXBwLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIGNvbnRleHQgPT4ge1xyXG5cclxuLy8gICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgncGF0aC90by9lbmRwb2ludCcsIHtcclxuLy8gICAgIGhlYWRlcnM6IHtcclxuLy8gICAgICAgY29va2llOiBjdHgucmVxLmhlYWRlcnMuY29va2llLFxyXG4vLyAgICAgfSxcclxuLy8gICB9KTtcclxuLy8gICBjb25zdCB1c2VyID0gYXdhaXQgcmVzLmpzb24oKTtcclxuXHJcbi8vICAgcmV0dXJuIHsgdXNlciB9O1xyXG4gIFxyXG4gIC8vIGNvbnN0IHRva2VuID0gY29va2llLmxvYWQoJ3Rva2VuJyk7XHJcbiAgLy8gY29uc29sZS5sb2coJ3Rva2VuIGZyb20gY29va2llJywgdG9rZW4pO1xyXG4gIFxyXG4gIC8vIC8vIGlmICh0b2tlbikge1xyXG4gIC8vIC8vICAgc2V0QXV0aFN0YXRlKHsgLi4uYXV0aFN0YXRlLCBhdXRoZW50aWNhdGVkOiB0cnVlLCB0b2tlbjogdG9rZW59KTsgXHJcbiAgLy8gLy8gfVxyXG4gIC8vIHJldHVybiB7dG9rZW4gOiB0b2tlbn07XHJcbi8vIH1cclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcDsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmcmFtZXItbW90aW9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXMtZXhhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicXVlcnlzdHJpbmdcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtY29va2llc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtanN4L3N0eWxlXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=