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
  className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2594553748", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary]]])
}, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, null, __jsx("title", {
  className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2594553748", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary]]])
}, "CodeTunes"), __jsx("meta", {
  name: "description",
  content: "A social music app for coders",
  className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2594553748", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary]]])
}), __jsx("meta", {
  charSet: "utf-8",
  className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2594553748", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary]]])
}), __jsx("meta", {
  name: "robots",
  content: "noindex, nofollow",
  className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2594553748", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary]]])
}), __jsx("meta", {
  name: "viewport",
  content: "width=device-width",
  className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2594553748", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary]]])
}), __jsx("link", {
  href: "https://fonts.googleapis.com/css2?family=Baloo+Thambi+2&display=swap",
  rel: "stylesheet",
  className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2594553748", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary]]])
}), __jsx("link", {
  rel: "stylesheet",
  href: "https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css",
  className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2594553748", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary]]])
}), __jsx("link", {
  rel: "stylesheet",
  href: "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.0.0/animate.min.css",
  className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2594553748", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary]]])
}), __jsx("link", {
  rel: "icon",
  type: "image/png",
  sizes: "32x32",
  href: "/favicon-32x32.png",
  className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2594553748", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary]]])
}), __jsx("link", {
  rel: "icon",
  type: "image/png",
  sizes: "16x16",
  href: "/favicon-16x16.png",
  className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2594553748", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary]]])
}), __jsx("link", {
  rel: "apple-touch-icon",
  sizes: "180x180",
  href: "/apple-touch-icon.png",
  className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2594553748", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary]]])
}), __jsx("link", {
  rel: "manifest",
  href: "/site.webmanifest",
  className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2594553748", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary]]])
}), __jsx("link", {
  rel: "mask-icon",
  href: "/safari-pinned-tab.svg",
  color: "#5bbad5",
  className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2594553748", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary]]])
})), __jsx(_Navbar__WEBPACK_IMPORTED_MODULE_3__["default"], null), props.children, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "2594553748",
  dynamic: [_css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary]
}, `*{box-sizing:border-box;margin:0;padding:0;}body{font-family:'Baloo Thambi 2',sans-serif;font-size:16px;font-weight:400;line-height:1.8em;background-color:black;height:100vh;}.container{max-width:1100px;margin:auto;overflow:hidden;}a{-webkit-text-decoration:none;text-decoration:none;color:black;}button{color:white;padding:0.5rem 1rem;border-radius:5px;font-size:1rem;background-color:${_css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary};border:none;cursor:pointer;-webkit-transition:background-color 0.2s ease-in-out;transition:background-color 0.2s ease-in-out;-webkit-transition:-webkit-transform 80ms ease-in;-webkit-transition:transform 80ms ease-in;transition:transform 80ms ease-in;}button:active{-webkit-transform:scale(0.95);-ms-transform:scale(0.95);transform:scale(0.95);}button:focus{outline:none;}button:hover{background-color:#e5305a;}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxDb2RpbmdcXE15UHJvamVjdHNcXGNvZGVycy1qdWtlYm94XFxjb21wb25lbnRzXFxMYXlvdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNkJ1QixBQUkrQixBQU1tQixBQVN4QixBQU1JLEFBS1QsQUFZVSxBQUlULEFBSVksWUFuQkosQ0FnQnZCLElBM0JjLEtBZkgsR0E4Q1gsSUE5QmtCLEVBZk4sQ0EwQlEsUUFyQkgsQ0FKakIsSUFlQSxLQUljLEFBT0csS0FyQkMsT0FlbEIsR0FPZ0QsTUFyQjVCLE9BOEJwQixXQTdCeUIsc0JBcUJYLENBcEJDLFdBcUJFLEVBcEJqQixhQXFCK0Msa0dBQ1gsOEhBQ2xDIiwiZmlsZSI6IkM6XFxDb2RpbmdcXE15UHJvamVjdHNcXGNvZGVycy1qdWtlYm94XFxjb21wb25lbnRzXFxMYXlvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gJy4vTmF2YmFyJztcclxuaW1wb3J0IGNvbG9ycyBmcm9tICcuLi9jc3MtdmFyaWFibGVzL2NvbG9ycyc7XHJcblxyXG5cclxuY29uc3QgTGF5b3V0ID0gKHByb3BzKSA9PiAoXHJcbiAgPGRpdj5cclxuICAgIDxIZWFkPlxyXG4gICAgICA8dGl0bGU+Q29kZVR1bmVzPC90aXRsZT5cclxuICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkEgc29jaWFsIG11c2ljIGFwcCBmb3IgY29kZXJzXCIvPlxyXG4gICAgICA8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxyXG4gICAgICA8bWV0YSBuYW1lPVwicm9ib3RzXCIgY29udGVudD1cIm5vaW5kZXgsIG5vZm9sbG93XCIvPlxyXG4gICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoXCIvPlxyXG4gICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1CYWxvbytUaGFtYmkrMiZkaXNwbGF5PXN3YXBcIiByZWw9XCJzdHlsZXNoZWV0XCI+PC9saW5rPlxyXG4gICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vc3RhY2twYXRoLmJvb3RzdHJhcGNkbi5jb20vZm9udC1hd2Vzb21lLzQuNy4wL2Nzcy9mb250LWF3ZXNvbWUubWluLmNzc1wiLz5cclxuICAgICAgPGxpbmtcclxuICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcclxuICAgICAgICBocmVmPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvYW5pbWF0ZS5jc3MvNC4wLjAvYW5pbWF0ZS5taW4uY3NzXCJcclxuICAgICAgLz5cclxuICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIHR5cGU9XCJpbWFnZS9wbmdcIiBzaXplcz1cIjMyeDMyXCIgaHJlZj1cIi9mYXZpY29uLTMyeDMyLnBuZ1wiIC8+XHJcbiAgICAgIDxsaW5rIHJlbD1cImljb25cIiB0eXBlPVwiaW1hZ2UvcG5nXCIgc2l6ZXM9XCIxNngxNlwiIGhyZWY9XCIvZmF2aWNvbi0xNngxNi5wbmdcIiAvPlxyXG4gICAgICA8bGluayByZWw9XCJhcHBsZS10b3VjaC1pY29uXCIgc2l6ZXM9XCIxODB4MTgwXCIgaHJlZj1cIi9hcHBsZS10b3VjaC1pY29uLnBuZ1wiIC8+XHJcbiAgICAgIDxsaW5rIHJlbD1cIm1hbmlmZXN0XCIgaHJlZj1cIi9zaXRlLndlYm1hbmlmZXN0XCIgLz5cclxuICAgICAgPGxpbmsgcmVsPVwibWFzay1pY29uXCIgaHJlZj1cIi9zYWZhcmktcGlubmVkLXRhYi5zdmdcIiBjb2xvcj1cIiM1YmJhZDVcIiAvPlxyXG4gICAgPC9IZWFkPlxyXG4gICAgPE5hdmJhci8+XHJcbiAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgICBcclxuXHJcbiAgICA8c3R5bGUgZ2xvYmFsIGpzeD57YFxyXG4gICAgXHJcbiAgICAgICoge1xyXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGJvZHkge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnQmFsb28gVGhhbWJpIDInLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjhlbTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgICAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuY29udGFpbmVyIHtcclxuICAgICAgICBtYXgtd2lkdGg6IDExMDBweDtcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgfVxyXG5cclxuICAgICAgYSB7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgfVxyXG5cclxuICAgICAgYnV0dG9uIHtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgcGFkZGluZzogMC41cmVtIDFyZW0gO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtjb2xvcnMucHJpbWFyeX07XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDgwbXMgZWFzZS1pbjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICBidXR0b246YWN0aXZlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBidXR0b246Zm9jdXMge1xyXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIGJ1dHRvbjpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U1MzA1YTtcclxuICAgICAgfVxyXG4gICAgXHJcbiAgICBgfSBcclxuICAgIDwvc3R5bGU+IFxyXG4gIDwvZGl2PlxyXG4pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XHJcbiJdfQ== */
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
    version: "1.1",
    id: "Layer_1",
    xmlns: "http://www.w3.org/2000/svg",
    xlink: "http://www.w3.org/1999/xlink",
    x: "0px",
    y: "0px",
    viewBox: "0 0 110 95",
    space: "preserve",
    className: "jsx-688514953"
  }, __jsx("g", {
    className: "jsx-688514953"
  }, __jsx("path", {
    d: "M50,5C25.2,5,5,25.2,5,50s20.2,45,45,45s45-20.2,45-45S74.8,5,50,5z M50,92C26.8,92,8,73.2,8,50S26.8,8,50,8s42,18.8,42,42\r S73.2,92,50,92z",
    className: "jsx-688514953"
  }), __jsx("path", {
    d: "M50,16.9c-17.1,0-30.9,13.9-30.9,31V61c0,0.2,0,0.4,0.1,0.6c-0.1,0.6-0.1,1.1-0.1,1.7c0,6.4,4.9,11.7,11.1,12.4\r c0.4,1.9,2.2,3.4,4.2,3.4c2.4,0,4.4-2,4.4-4.4V51.9c0-2.4-2-4.4-4.4-4.4c-2.1,0-3.8,1.5-4.2,3.4c-3.2,0.4-6.1,2-8.1,4.3v-7.4\r c0-15.4,12.5-28,27.9-28s27.9,12.6,27.9,28v7.5c-2-2.4-4.9-4-8.1-4.4c-0.4-1.9-2.2-3.4-4.2-3.4c-2.4,0-4.4,2-4.4,4.4v22.9\r c0,2.4,2,4.4,4.4,4.4c2.1,0,3.8-1.5,4.2-3.4c6.2-0.7,11.1-6,11.1-12.4c0-0.6-0.1-1.1-0.1-1.7c0.1-0.2,0.2-0.4,0.2-0.7V47.9\r C80.9,30.8,67.1,16.9,50,16.9z M33,51.9c0-0.8,0.6-1.4,1.4-1.4s1.4,0.6,1.4,1.4v22.9c0,0.8-0.6,1.4-1.4,1.4S33,75.6,33,74.8V51.9z\r M30,54v18.7c-4.5-0.7-8-4.6-8-9.4C22.1,58.7,25.5,54.7,30,54z M66.9,74.8c0,0.8-0.6,1.4-1.4,1.4c-0.8,0-1.4-0.6-1.4-1.4V51.9\r c0-0.8,0.6-1.4,1.4-1.4c0.8,0,1.4,0.6,1.4,1.4V74.8z M69.9,72.7V54c4.5,0.7,8,4.6,8,9.4C77.9,68.1,74.4,72,69.9,72.7z",
    className: "jsx-688514953"
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "688514953"
  }, "svg.jsx-688514953{height:55px;width:66px;fill:white;margin-top:0.5rem;}.st0.jsx-688514953{font-family:'MyriadPro-Regular';}.st1.jsx-688514953{font-size:42.6359px;}.st2.jsx-688514953{fill:none;}.st0.jsx-688514953{fill:white;}@media (max-width:600px){svg.jsx-688514953{width:100px;}}@media (max-width:490px){svg.jsx-688514953{width:65px;}}@media (max-width:370px){svg.jsx-688514953{height:40px;width:47px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxDb2RpbmdcXE15UHJvamVjdHNcXGNvZGVycy1qdWtlYm94XFxjb21wb25lbnRzXFxMb2dvLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1Ca0IsQUFHcUIsQUFPbUIsQUFJWixBQUlWLEFBSUUsQUFPWixBQU1BLEFBS2UsVUFyQmhCLENBSUEsQUFZRSxDQS9CVyxBQXlCWCxBQVlhLFFBMUJmLEdBVmEsQUFxQ1gsU0EvQkYsRUFMb0Isa0JBQ3BCIiwiZmlsZSI6IkM6XFxDb2RpbmdcXE15UHJvamVjdHNcXGNvZGVycy1qdWtlYm94XFxjb21wb25lbnRzXFxMb2dvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNvbG9ycyBmcm9tICcuLi9jc3MtdmFyaWFibGVzL2NvbG9ycyc7XHJcblxyXG5cclxuY29uc3QgTG9nbyA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPHN2ZyB2ZXJzaW9uPVwiMS4xXCIgaWQ9XCJMYXllcl8xXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHhsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiIHg9XCIwcHhcIiB5PVwiMHB4XCJcclxuICAgICAgdmlld0JveD1cIjAgMCAxMTAgOTVcIiBzcGFjZT1cInByZXNlcnZlXCI+XHJcbiAgICAgIDxnPlxyXG4gICAgICAgIDxwYXRoIGQ9XCJNNTAsNUMyNS4yLDUsNSwyNS4yLDUsNTBzMjAuMiw0NSw0NSw0NXM0NS0yMC4yLDQ1LTQ1Uzc0LjgsNSw1MCw1eiBNNTAsOTJDMjYuOCw5Miw4LDczLjIsOCw1MFMyNi44LDgsNTAsOHM0MiwxOC44LDQyLDQyXHJcblx0XHRTNzMuMiw5Miw1MCw5MnpcIi8+XHJcbiAgICAgICAgPHBhdGggZD1cIk01MCwxNi45Yy0xNy4xLDAtMzAuOSwxMy45LTMwLjksMzFWNjFjMCwwLjIsMCwwLjQsMC4xLDAuNmMtMC4xLDAuNi0wLjEsMS4xLTAuMSwxLjdjMCw2LjQsNC45LDExLjcsMTEuMSwxMi40XHJcblx0XHRjMC40LDEuOSwyLjIsMy40LDQuMiwzLjRjMi40LDAsNC40LTIsNC40LTQuNFY1MS45YzAtMi40LTItNC40LTQuNC00LjRjLTIuMSwwLTMuOCwxLjUtNC4yLDMuNGMtMy4yLDAuNC02LjEsMi04LjEsNC4zdi03LjRcclxuXHRcdGMwLTE1LjQsMTIuNS0yOCwyNy45LTI4czI3LjksMTIuNiwyNy45LDI4djcuNWMtMi0yLjQtNC45LTQtOC4xLTQuNGMtMC40LTEuOS0yLjItMy40LTQuMi0zLjRjLTIuNCwwLTQuNCwyLTQuNCw0LjR2MjIuOVxyXG5cdFx0YzAsMi40LDIsNC40LDQuNCw0LjRjMi4xLDAsMy44LTEuNSw0LjItMy40YzYuMi0wLjcsMTEuMS02LDExLjEtMTIuNGMwLTAuNi0wLjEtMS4xLTAuMS0xLjdjMC4xLTAuMiwwLjItMC40LDAuMi0wLjdWNDcuOVxyXG5cdFx0QzgwLjksMzAuOCw2Ny4xLDE2LjksNTAsMTYuOXogTTMzLDUxLjljMC0wLjgsMC42LTEuNCwxLjQtMS40czEuNCwwLjYsMS40LDEuNHYyMi45YzAsMC44LTAuNiwxLjQtMS40LDEuNFMzMyw3NS42LDMzLDc0LjhWNTEuOXpcclxuXHRcdCBNMzAsNTR2MTguN2MtNC41LTAuNy04LTQuNi04LTkuNEMyMi4xLDU4LjcsMjUuNSw1NC43LDMwLDU0eiBNNjYuOSw3NC44YzAsMC44LTAuNiwxLjQtMS40LDEuNGMtMC44LDAtMS40LTAuNi0xLjQtMS40VjUxLjlcclxuXHRcdGMwLTAuOCwwLjYtMS40LDEuNC0xLjRjMC44LDAsMS40LDAuNiwxLjQsMS40Vjc0Ljh6IE02OS45LDcyLjdWNTRjNC41LDAuNyw4LDQuNiw4LDkuNEM3Ny45LDY4LjEsNzQuNCw3Miw2OS45LDcyLjd6XCIvPlxyXG4gICAgICA8L2c+XHJcblxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgIHN2ZyB7XHJcbiAgICAgICAgaGVpZ2h0OiA1NXB4O1xyXG4gICAgICAgIHdpZHRoOiA2NnB4O1xyXG4gICAgICAgIGZpbGw6IHdoaXRlO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnN0MCB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6J015cmlhZFByby1SZWd1bGFyJztcclxuICAgICAgfVxyXG5cdCAgICBcclxuICAgICAgLnN0MSB7XHJcbiAgICAgICAgZm9udC1zaXplOjQyLjYzNTlweDtcclxuICAgICAgfVxyXG5cdCAgICBcclxuICAgICAgLnN0MiB7XHJcbiAgICAgICAgZmlsbDpub25lO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuc3QwIHtcclxuICAgICAgICBmaWxsOiB3aGl0ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLyogTWVkaWEgcXVlcmllcyAqL1xyXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpe1xyXG4gICAgICAgIHN2ZyB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwcHhcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0OTBweCl7XHJcbiAgICAgICAgc3ZnIHtcclxuICAgICAgICAgIHdpZHRoOiA2NXB4XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogMzcwcHgpe1xyXG4gICAgICAgIHN2ZyB7XHJcbiAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICB3aWR0aDogNDdweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgYH08L3N0eWxlPlxyXG5cclxuXHJcblxyXG4gICAgPC9zdmc+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dvO1xyXG4iXX0= */\n/*@ sourceURL=C:\\\\Coding\\\\MyProjects\\\\coders-jukebox\\\\components\\\\Logo.js */"));
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
/* harmony import */ var _context_GlobalContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/GlobalContext */ "./context/GlobalContext.js");
/* harmony import */ var _UserSearch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./UserSearch */ "./components/UserSearch.js");
/* harmony import */ var _css_variables_colors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../css-variables/colors */ "./css-variables/colors.js");
/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Logo */ "./components/Logo.js");


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







const Navbar = () => {
  const {
    authState,
    currentUser,
    fetchProfileUser,
    logout
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context_GlobalContext__WEBPACK_IMPORTED_MODULE_3__["GlobalContext"]);

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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4019909672", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_5__["default"].gradient, _css_variables_colors__WEBPACK_IMPORTED_MODULE_5__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_5__["default"].secondary]]])
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4019909672", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_5__["default"].gradient, _css_variables_colors__WEBPACK_IMPORTED_MODULE_5__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_5__["default"].secondary]]]) + " " + "container"
  }, __jsx("div", {
    id: "nav-content",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4019909672", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_5__["default"].gradient, _css_variables_colors__WEBPACK_IMPORTED_MODULE_5__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_5__["default"].secondary]]])
  }, __jsx("div", {
    id: "logo-container",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4019909672", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_5__["default"].gradient, _css_variables_colors__WEBPACK_IMPORTED_MODULE_5__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_5__["default"].secondary]]])
  }, __jsx("div", {
    id: "logo",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4019909672", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_5__["default"].gradient, _css_variables_colors__WEBPACK_IMPORTED_MODULE_5__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_5__["default"].secondary]]])
  }, __jsx(_Logo__WEBPACK_IMPORTED_MODULE_6__["default"], null)), __jsx("div", {
    id: "brand",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4019909672", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_5__["default"].gradient, _css_variables_colors__WEBPACK_IMPORTED_MODULE_5__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_5__["default"].secondary]]])
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/"
  }, __jsx("a", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4019909672", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_5__["default"].gradient, _css_variables_colors__WEBPACK_IMPORTED_MODULE_5__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_5__["default"].secondary]]])
  }, __jsx("h1", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4019909672", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_5__["default"].gradient, _css_variables_colors__WEBPACK_IMPORTED_MODULE_5__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_5__["default"].secondary]]])
  }, "CodeTunes"))))), __jsx(_UserSearch__WEBPACK_IMPORTED_MODULE_4__["default"], null), __jsx("ul", {
    id: "nav-menu",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4019909672", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_5__["default"].gradient, _css_variables_colors__WEBPACK_IMPORTED_MODULE_5__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_5__["default"].secondary]]])
  }, authState.authenticated && currentUser !== null && __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/profile/[userId]",
    as: `/profile/${currentUser.id}`
  }, __jsx("a", {
    onClick: profileNavClickHandler,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4019909672", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_5__["default"].gradient, _css_variables_colors__WEBPACK_IMPORTED_MODULE_5__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_5__["default"].secondary]]]) + " " + "nav-item"
  }, __jsx("i", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4019909672", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_5__["default"].gradient, _css_variables_colors__WEBPACK_IMPORTED_MODULE_5__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_5__["default"].secondary]]]) + " " + "fa fa-user"
  }), "Profile")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/about"
  }, __jsx("a", {
    onClick: hamburgerHandler,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4019909672", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_5__["default"].gradient, _css_variables_colors__WEBPACK_IMPORTED_MODULE_5__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_5__["default"].secondary]]]) + " " + "nav-item"
  }, __jsx("i", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4019909672", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_5__["default"].gradient, _css_variables_colors__WEBPACK_IMPORTED_MODULE_5__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_5__["default"].secondary]]]) + " " + "fa fa-info"
  }), "About")), !authState.authenticated && __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/auth"
  }, __jsx("a", {
    onClick: hamburgerHandler,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4019909672", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_5__["default"].gradient, _css_variables_colors__WEBPACK_IMPORTED_MODULE_5__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_5__["default"].secondary]]]) + " " + "nav-item"
  }, __jsx("i", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4019909672", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_5__["default"].gradient, _css_variables_colors__WEBPACK_IMPORTED_MODULE_5__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_5__["default"].secondary]]]) + " " + "fa fa-sign-in"
  }), "Login")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/auth"
  }, __jsx("a", {
    onClick: hamburgerHandler,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4019909672", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_5__["default"].gradient, _css_variables_colors__WEBPACK_IMPORTED_MODULE_5__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_5__["default"].secondary]]]) + " " + "nav-item"
  }, __jsx("i", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4019909672", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_5__["default"].gradient, _css_variables_colors__WEBPACK_IMPORTED_MODULE_5__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_5__["default"].secondary]]]) + " " + "fa fa-user-plus"
  }), "Register"))), authState.authenticated && __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/"
  }, __jsx("a", {
    onClick: logoutHandler,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4019909672", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_5__["default"].gradient, _css_variables_colors__WEBPACK_IMPORTED_MODULE_5__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_5__["default"].secondary]]]) + " " + "nav-item"
  }, __jsx("i", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4019909672", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_5__["default"].gradient, _css_variables_colors__WEBPACK_IMPORTED_MODULE_5__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_5__["default"].secondary]]]) + " " + "fa fa-sign-out"
  }), "Logout"))), __jsx("div", {
    id: "hamburger",
    onClick: hamburgerHandler,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4019909672", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_5__["default"].gradient, _css_variables_colors__WEBPACK_IMPORTED_MODULE_5__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_5__["default"].secondary]]])
  }, __jsx("div", {
    id: "line1",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4019909672", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_5__["default"].gradient, _css_variables_colors__WEBPACK_IMPORTED_MODULE_5__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_5__["default"].secondary]]]) + " " + "line"
  }), __jsx("div", {
    id: "line2",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4019909672", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_5__["default"].gradient, _css_variables_colors__WEBPACK_IMPORTED_MODULE_5__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_5__["default"].secondary]]]) + " " + "line"
  }), __jsx("div", {
    id: "line3",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4019909672", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_5__["default"].gradient, _css_variables_colors__WEBPACK_IMPORTED_MODULE_5__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_5__["default"].secondary]]]) + " " + "line"
  })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4019909672",
    dynamic: [_css_variables_colors__WEBPACK_IMPORTED_MODULE_5__["default"].gradient, _css_variables_colors__WEBPACK_IMPORTED_MODULE_5__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_5__["default"].secondary]
  }, `#navbar.__jsx-style-dynamic-selector{padding:1.5rem 0;border-bottom:1px solid black;background:${_css_variables_colors__WEBPACK_IMPORTED_MODULE_5__["default"].gradient};}#nav-content.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:auto;}#nav-menu.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}#logo-container.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}#brand.__jsx-style-dynamic-selector h1.__jsx-style-dynamic-selector{color:white;font-size:2rem;text-transform:uppercase;-webkit-letter-spacing:0.3rem;-moz-letter-spacing:0.3rem;-ms-letter-spacing:0.3rem;letter-spacing:0.3rem;}.nav-item.__jsx-style-dynamic-selector{color:white;margin:0 1rem;font-weight:400;-webkit-transition:text-shadow 0.2s;transition:text-shadow 0.2s;}.nav-item.__jsx-style-dynamic-selector:hover{text-shadow:0px 0px 8px rgb(255,255,255);}i.__jsx-style-dynamic-selector{display:none;}#search.__jsx-style-dynamic-selector{width:50%;}#searchbar.__jsx-style-dynamic-selector{width:100%;}label.__jsx-style-dynamic-selector{position:absolute;top:10px;left:12px;}@media (max-width.__jsx-style-dynamic-selector:1150px) #nav-content{width:90%;}@media (max-width.__jsx-style-dynamic-selector:1150px) h1{margin-left:2rem;}@media (max-width:1140px){#logo-container.__jsx-style-dynamic-selector{margin-left:1rem;}}@media (max-width:1100px){#nav-content.__jsx-style-dynamic-selector{width:97%;}}@media (max-width:950px){body.__jsx-style-dynamic-selector{overflow-x:hidden;}#navbar.__jsx-style-dynamic-selector{position:relative;}#nav-menu.__jsx-style-dynamic-selector{z-index:101;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;position:absolute;top:100%;right:0px;width:33vw;-webkit-clip-path:circle(0px at top right);clip-path:circle(0px at top right);-webkit-transition:clip-path 0.7s ease;transition:clip-path 0.7s ease;-webkit-box-shadow:-11px 10px 19px -10px rgba(0,0,0,0.27);-moz-box-shadow:-11px 10px 19px -10px rgba(0,0,0,0.27);box-shadow:-11px 10px 19px -10px rgba(0,0,0,0.27);background:${_css_variables_colors__WEBPACK_IMPORTED_MODULE_5__["default"].primary};}#nav-menu.dropdown.__jsx-style-dynamic-selector{-webkit-clip-path:circle(150% at top right);clip-path:circle(150% at top right);}.nav-item.__jsx-style-dynamic-selector{padding:2rem 3rem;display:block;text-transform:uppercase;border-bottom:1px solid #ff6b8d;margin:0;font-size:1.3rem;}i.__jsx-style-dynamic-selector{display:inline-block;margin-right:1rem;width:1.5rem;font-size:1.5rem;text-align:center;height:100%;padding-top:0.5rem;}.nav-item.__jsx-style-dynamic-selector:hover{background:${_css_variables_colors__WEBPACK_IMPORTED_MODULE_5__["default"].secondary};}.line.__jsx-style-dynamic-selector{width:30px;height:3px;background-color:white;margin:5px;border-radius:3px;-webkit-transition:all ease 0.5s;transition:all ease 0.5s;}#hamburger.__jsx-style-dynamic-selector{cursor:pointer;margin-right:0.5rem;}#hamburger.open.__jsx-style-dynamic-selector #line1.__jsx-style-dynamic-selector{-webkit-transform:rotate(-45deg) translateY(11.5px) scaleX(0.9);-ms-transform:rotate(-45deg) translateY(11.5px) scaleX(0.9);transform:rotate(-45deg) translateY(11.5px) scaleX(0.9);}#hamburger.open.__jsx-style-dynamic-selector #line2.__jsx-style-dynamic-selector{opacity:0;}#hamburger.open.__jsx-style-dynamic-selector #line3.__jsx-style-dynamic-selector{-webkit-transform:rotate(45deg) translateY(-11.5px) scaleX(0.9);-ms-transform:rotate(45deg) translateY(-11.5px) scaleX(0.9);transform:rotate(45deg) translateY(-11.5px) scaleX(0.9);}}@media (max-width:860px){#logo-container.__jsx-style-dynamic-selector{margin-left:1rem;}}@media (max-width:750px){#main-searchbar.__jsx-style-dynamic-selector{margin:auto;}}@media (max-width:690px){#main-searchbar.__jsx-style-dynamic-selector{margin:0;}#nav-menu.__jsx-style-dynamic-selector{width:40%;}}@media (max-width:600px){#brand.__jsx-style-dynamic-selector{display:none;}#logo.__jsx-style-dynamic-selector{display:inline;}}@media (max-width:570px){#nav-menu.__jsx-style-dynamic-selector{width:45%;}}@media (max-width:500px){#nav-menu.__jsx-style-dynamic-selector{width:50%;}}@media (max-width:450px){#nav-menu.__jsx-style-dynamic-selector{width:60%;}}@media (max-width:375px){.nav-item.__jsx-style-dynamic-selector{padding:2rem 2rem;}}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxDb2RpbmdcXE15UHJvamVjdHNcXGNvZGVycy1qdWtlYm94XFxjb21wb25lbnRzXFxOYXZiYXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0drQixBQUk4QixBQVNKLEFBT0EsQUFLQSxBQUtELEFBT0EsQUFPK0IsQUFJOUIsQUFJSCxBQUlDLEFBSU8sQUFZTixBQUlPLEFBVUEsQUFNUCxBQU1RLEFBSUEsQUFJTixBQWdCd0IsQUFJbEIsQUFTRyxBQVdpQixBQUkzQixBQVNJLEFBS3lDLEFBSTlDLEFBSThDLEFBTXZDLEFBTUwsQUFNSCxBQUlDLEFBTUcsQUFJRSxBQU9MLEFBTUEsQUFPQSxBQU1RLFNBdkNwQixDQTFJRixBQW9CRSxBQW9CQSxBQTRFQSxBQTBCQSxBQWlCQSxBQU1BLEFBT0EsQ0F4S0YsQUE4RmUsQ0F4SEUsQUFPRCxBQXFFVSxBQThFeEIsQ0F4SUYsQUF3SkUsRUF6Q3NCLEFBNkN0QixFQXhNOEIsQUF3RTlCLEFBVUEsQUE0RkEsQ0F0SFMsQUFzQ1QsQUFJQSxBQXdCZ0IsQUF3R2hCLEdBL0ZvQixDQWdCSyxJQWpIVCxDQVBTLEFBOEJmLEtBa0VpQixHQWlDM0IsRUFsR0YsRUEwRWlCLENBVWYsQ0F0R0YsQ0FMOEIsR0FpSGYsRUFsSjJCLEtBMEJsQixBQXlHSCxJQWdCQyxDQXpCYyxZQVdkLEtBOUhVLEFBT0EsQUFLWCxBQWlJUSxNQWhDM0IsT0FqSEYsQUFtSWdCLEVBWEgsQ0F0QlMsUUF1QkQsQ0FXRSxPQXJHdkIsRUFvRWEsT0F1QlgsRUF0QlksQ0FpQ1osU0FoQ2EsS0E2Q2IsTUE1Q3FDLG1CQTlFdkMsVUFQQSxhQTBJRSxBQVFBLFNBOUptQixBQU9yQiwyQkEyRm1DLGtFQWpHckIsSUFrR2dELFFBakc5RCxrREFrRzJELHVEQUNMLGtEQUNWLHdDQUUxQyIsImZpbGUiOiJDOlxcQ29kaW5nXFxNeVByb2plY3RzXFxjb2RlcnMtanVrZWJveFxcY29tcG9uZW50c1xcTmF2YmFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgR2xvYmFsQ29udGV4dCB9IGZyb20gJy4uL2NvbnRleHQvR2xvYmFsQ29udGV4dCc7XHJcbmltcG9ydCBVc2VyU2VhcmNoIGZyb20gJy4vVXNlclNlYXJjaCc7XHJcbmltcG9ydCBjb2xvcnMgZnJvbSAnLi4vY3NzLXZhcmlhYmxlcy9jb2xvcnMnXHJcbmltcG9ydCBMb2dvIGZyb20gJy4vTG9nbyc7XHJcblxyXG5cclxuY29uc3QgTmF2YmFyID0gKCkgPT4ge1xyXG5cclxuICBjb25zdCB7IGF1dGhTdGF0ZSwgY3VycmVudFVzZXIsIGZldGNoUHJvZmlsZVVzZXIsIGxvZ291dCB9ID0gdXNlQ29udGV4dChHbG9iYWxDb250ZXh0KTtcclxuXHJcbiAgY29uc3QgbG9nb3V0SGFuZGxlciA9ICgpID0+IHtcclxuICAgIGxvZ291dCgpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHNlYXJjaFVzZXJIYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coJ3NlYXJjaFVzZXJIYW5kbGVyIGNhbGxlZCcpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgcHJvZmlsZU5hdkNsaWNrSGFuZGxlciA9ICgpID0+IHtcclxuICAgIGZldGNoUHJvZmlsZVVzZXIoY3VycmVudFVzZXIuaWQsIGZhbHNlKTtcclxuICAgIGhhbWJ1cmdlckhhbmRsZXIoKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbWJ1cmdlckhhbmRsZXIgPSAoKSA9PiB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGFtYnVyZ2VyJykuY2xhc3NMaXN0LnRvZ2dsZSgnb3BlbicpO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hdi1tZW51JykuY2xhc3NMaXN0LnRvZ2dsZSgnZHJvcGRvd24nKTtcclxuICB9XHJcblxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPG5hdiBpZD1cIm5hdmJhclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXYgaWQ9XCJuYXYtY29udGVudFwiPlxyXG4gICAgICAgICAgPGRpdiBpZD1cImxvZ28tY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJsb2dvXCI+XHJcbiAgICAgICAgICAgICAgPExvZ28gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJicmFuZFwiPlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgICAgPGgxPkNvZGVUdW5lczwvaDE+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxVc2VyU2VhcmNoIC8+XHJcblxyXG4gICAgICAgICAgPHVsIGlkPVwibmF2LW1lbnVcIj5cclxuICAgICAgICAgICAge2F1dGhTdGF0ZS5hdXRoZW50aWNhdGVkICYmIGN1cnJlbnRVc2VyICE9PSBudWxsICYmXHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9maWxlL1t1c2VySWRdXCIgYXM9e2AvcHJvZmlsZS8ke2N1cnJlbnRVc2VyLmlkfWB9PlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIiBvbkNsaWNrPXtwcm9maWxlTmF2Q2xpY2tIYW5kbGVyfT5cclxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtdXNlclwiPjwvaT5cclxuICAgICAgICAgICAgICAgIFByb2ZpbGVcclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYWJvdXRcIj5cclxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiIG9uQ2xpY2s9e2hhbWJ1cmdlckhhbmRsZXJ9PlxyXG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtaW5mb1wiPjwvaT5cclxuICAgICAgICAgICAgICAgIEFib3V0XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIHshYXV0aFN0YXRlLmF1dGhlbnRpY2F0ZWQgJiZcclxuICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hdXRoXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCIgb25DbGljaz17aGFtYnVyZ2VySGFuZGxlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtc2lnbi1pblwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgTG9naW5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYXV0aFwiPlxyXG4gICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiIG9uQ2xpY2s9e2hhbWJ1cmdlckhhbmRsZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXVzZXItcGx1c1wiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgUmVnaXN0ZXJcclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB7YXV0aFN0YXRlLmF1dGhlbnRpY2F0ZWQgJiZcclxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIiBvbkNsaWNrPXtsb2dvdXRIYW5kbGVyfT5cclxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtc2lnbi1vdXRcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgIExvZ291dFxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICA8ZGl2IGlkPVwiaGFtYnVyZ2VyXCIgb25DbGljaz17aGFtYnVyZ2VySGFuZGxlcn0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGluZVwiIGlkPVwibGluZTFcIj48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaW5lXCIgaWQ9XCJsaW5lMlwiPjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmVcIiBpZD1cImxpbmUzXCI+PC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIFxyXG4gICAgICAgICAgI25hdmJhciB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEuNXJlbSAwO1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICAgICAgICAgIC8qIG1hcmdpbi1ib3R0b206IDJyZW07ICovXHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICR7Y29sb3JzLmdyYWRpZW50fTtcclxuICAgICAgICAgICAgLyogY29sb3I6IHdoaXRlOyAqL1xyXG4gICAgICAgICAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjOTNmZmZiOyAqL1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgI25hdi1jb250ZW50IHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgI25hdi1tZW51IHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICNsb2dvLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgI2JyYW5kIGgxIHtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjNyZW07XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLm5hdi1pdGVtIHtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgMXJlbTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogdGV4dC1zaGFkb3cgMC4ycztcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAubmF2LWl0ZW06aG92ZXIge1xyXG4gICAgICAgICAgICB0ZXh0LXNoYWRvdzogMHB4IDBweCA4cHggcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGkge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICNzZWFyY2gge1xyXG4gICAgICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICNzZWFyY2hiYXJ7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGxhYmVsIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3A6IDEwcHg7XHJcbiAgICAgICAgICAgIGxlZnQ6IDEycHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIC8qICNsb2dvIHtcclxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgIH0gKi9cclxuXHJcbiAgICAgICAgICAvKiBNZWRpYSBxdWVyaWVzICovXHJcbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogMTE1MHB4KXtcclxuICAgICAgICAgICAgI25hdi1jb250ZW50IHtcclxuICAgICAgICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBoMSB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDJyZW07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICNuYXYtbWVudSB7XHJcbiAgICAgICAgICAgICAgLyogd2lkdGg6IDM1dnc7ICovXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogMTE0MHB4KSB7XHJcbiAgICAgICAgICAgICNsb2dvLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDFyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogMTEwMHB4KSB7XHJcbiAgICAgICAgICAgICNuYXYtY29udGVudCB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDk3JTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5NTBweCkge1xyXG4gICAgICAgICAgICBib2R5IHtcclxuICAgICAgICAgICAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICNuYXZiYXIge1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgI25hdi1tZW51IHtcclxuICAgICAgICAgICAgICB6LWluZGV4OiAxMDE7XHJcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgdG9wOiAxMDAlO1xyXG4gICAgICAgICAgICAgIHJpZ2h0OiAwcHg7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDMzdnc7XHJcbiAgICAgICAgICAgICAgY2xpcC1wYXRoOiBjaXJjbGUoMHB4IGF0IHRvcCByaWdodCk7XHJcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjogY2xpcC1wYXRoIDAuN3MgZWFzZTtcclxuICAgICAgICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IC0xMXB4IDEwcHggMTlweCAtMTBweCByZ2JhKDAsMCwwLDAuMjcpO1xyXG4gICAgICAgICAgICAgIC1tb3otYm94LXNoYWRvdzogLTExcHggMTBweCAxOXB4IC0xMHB4IHJnYmEoMCwwLDAsMC4yNyk7XHJcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogLTExcHggMTBweCAxOXB4IC0xMHB4IHJnYmEoMCwwLDAsMC4yNyk7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogJHtjb2xvcnMucHJpbWFyeX07XHJcbiAgICAgICAgICAgICAgLyogb3BhY2l0eTogMC45OyAqL1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAjbmF2LW1lbnUuZHJvcGRvd24ge1xyXG4gICAgICAgICAgICAgIGNsaXAtcGF0aDogY2lyY2xlKDE1MCUgYXQgdG9wIHJpZ2h0KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLm5hdi1pdGVtIHtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAycmVtIDNyZW07XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmNmI4ZDtcclxuICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjNyZW07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGkge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDEuNXJlbTtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgICAgICAgICAgICAvKiBiYWNrZ3JvdW5kOiBibGFjazsgKi9cclxuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAwLjVyZW07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5uYXYtaXRlbTpob3ZlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICR7Y29sb3JzLnNlY29uZGFyeX07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5saW5lIHtcclxuICAgICAgICAgICAgICB3aWR0aDogMzBweDtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDNweDtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICBtYXJnaW46IDVweDtcclxuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIGVhc2UgMC41cztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgI2hhbWJ1cmdlciB7XHJcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMC41cmVtO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAjaGFtYnVyZ2VyLm9wZW4gI2xpbmUxIHtcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpIHRyYW5zbGF0ZVkoMTEuNXB4KSBzY2FsZVgoMC45KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgI2hhbWJ1cmdlci5vcGVuICNsaW5lMntcclxuICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAjaGFtYnVyZ2VyLm9wZW4gI2xpbmUze1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKSB0cmFuc2xhdGVZKC0xMS41cHgpIHNjYWxlWCgwLjkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDg2MHB4KSB7XHJcbiAgICAgICAgICAgICNsb2dvLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDFyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzUwcHgpIHtcclxuICAgICAgICAgICAgI21haW4tc2VhcmNoYmFyIHtcclxuICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNjkwcHgpIHtcclxuICAgICAgICAgICAgI21haW4tc2VhcmNoYmFyIHtcclxuICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICNuYXYtbWVudSB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDQwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgICAgICAgICAjYnJhbmQge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICNsb2dvIHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDU3MHB4KSB7XHJcbiAgICAgICAgICAgICNuYXYtbWVudSB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDQ1JTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xyXG4gICAgICAgICAgICAjbmF2LW1lbnUge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ1MHB4KSB7XHJcbiAgICAgICAgICAgICNuYXYtbWVudSB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDYwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAzNzVweCkge1xyXG4gICAgICAgICAgICAubmF2LWl0ZW0ge1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDJyZW0gMnJlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICBcclxuXHJcbiAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9uYXY+XHJcbiAgICAvLyApfVxyXG4gICAgLy8gPC9HbG9iYWxDb250ZXh0LkNvbnN1bWVyPlxyXG4gIClcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjtcclxuIl19 */
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
    className: "jsx-4248078569"
  }, __jsx(_UserSearchBar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    checkSearchMode: checkSearchMode,
    placeholder: "Search for user",
    searchMode: "user",
    setFilteredUsers: setFilteredUsers,
    searchInput: searchInput,
    setSearchInput: setSearchInput
  }), searchMode && __jsx("div", {
    id: "dropdown",
    className: "jsx-4248078569"
  }, __jsx("div", {
    id: "search-results",
    className: "jsx-4248078569"
  }, __jsx("ul", {
    className: "jsx-4248078569"
  }, filteredUsers.map(user => __jsx("li", {
    key: user.id,
    className: "jsx-4248078569"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/profile/[userId]",
    as: `/profile/${user.id}`
  }, __jsx("a", {
    onClick: userClickHandler.bind(undefined, user.id),
    className: "jsx-4248078569"
  }, user.name)))), filteredUsers.length === 0 && __jsx("li", {
    className: "jsx-4248078569"
  }, "No Users Found")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4248078569"
  }, "#user-search.jsx-4248078569{width:50%;}#dropdown.jsx-4248078569{width:79%;margin:auto;z-index:3;}#search-results.jsx-4248078569{width:440px;margin:auto;background:white;color:purple;margin-top:0.5rem;padding:1rem;border-radius:5px;box-shadow:10px 10px 45px -10px rgba(66,9,66,0.74);position:absolute;}ul.jsx-4248078569{list-style:none;}@media (max-width:1150px){}@media (max-width:1100px){#search-results.jsx-4248078569{width:38vw;}}@media (max-width:1060px){#search-results.jsx-4248078569{width:36vw;}}@media (max-width:950px){#search-results.jsx-4248078569{right:154px;width:46vw;}}@media (max-width:920px){#user-search.jsx-4248078569{margin-left:2.5rem;}#search-results.jsx-4248078569{right:127px;}}@media (max-width:900px){#search-results.jsx-4248078569{right:120px;width:46vw;}}@media (max-width:870px){#search-results.jsx-4248078569{right:90px;}}@media (max-width:740px){#search-results.jsx-4248078569{right:70px;}}@media (max-width:660px){#user-search.jsx-4248078569{margin-right:1rem;margin-left:1rem;}#search-results.jsx-4248078569{right:107px;width:58vw;}}@media (max-width:600px){#user-search.jsx-4248078569{margin-right:5rem;}@media (max-width:580px){#user-search.jsx-4248078569{margin-right:4.5rem;}}@media (max-width:550px){#user-search.jsx-4248078569{width:55%;}#search-results.jsx-4248078569{width:62vw;right:91px;}}@media (max-width:490px){#user-search.jsx-4248078569{margin-right:3rem;}}@media (max-width:450px){#search-results.jsx-4248078569{right:85px;}}@media (max-width:420px){#user-search.jsx-4248078569{width:60%;}#search-results.jsx-4248078569{right:9vw;width:76vw;}}@media (max-width:375px){#search-results.jsx-4248078569{right:14.5vw;width:64vw;}}@media (max-width:370px){#user-search.jsx-4248078569{margin-left:0.8rem;margin-right:4rem;}#search-results.jsx-4248078569{right:11vw;width:76vw;}}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxDb2RpbmdcXE15UHJvamVjdHNcXGNvZGVycy1qdWtlYm94XFxjb21wb25lbnRzXFxVc2VyU2VhcmNoLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJEa0IsQUFJcUIsQUFLQSxBQU9FLEFBZ0JJLEFBWUosQUFNQSxBQU1BLEFBT08sQUFHUCxBQU1BLEFBT0QsQUFNQSxBQWdCTyxBQUtOLEFBT00sQUFLRSxBQU1WLEFBSUMsQUFPTyxBQU1QLEFBTUQsQUFHQSxBQU9HLEFBT00sQUFJUixVQWxLYixBQUtjLEFBa0hkLEFBdUJBLEFBR2EsQ0ExR2IsQUFNQSxBQTZCQSxBQU1BLEFBMkNhLEFBYWIsQUEyQmEsQ0F4SkMsQUF3Q0QsQUFVYixBQU1hLEFBa0NBLENBbURBLEdBN0hiLEVBcUVtQixBQVlyQixBQXNCRSxDQXhFQSxBQXFHb0IsQ0E5Q3BCLENBaUNBLENBNUlZLEFBc0haLEFBd0NBLENBaEhBLEFBZ0JBLEFBa0NBLENBMUZtQixBQTZJbkIsUUFsSkEsR0EwRkEsRUErREEsSUFuSmUsYUFDSyxrQkFDTCxhQUNLLGtCQUNpQyxtREFDakMsa0JBS3BCIiwiZmlsZSI6IkM6XFxDb2RpbmdcXE15UHJvamVjdHNcXGNvZGVycy1qdWtlYm94XFxjb21wb25lbnRzXFxVc2VyU2VhcmNoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBVc2VyU2VhcmNoQmFyIGZyb20gJy4vVXNlclNlYXJjaEJhcic7XHJcbmltcG9ydCB7IEdsb2JhbENvbnRleHQgfSBmcm9tICcuLi9jb250ZXh0L0dsb2JhbENvbnRleHQnO1xyXG5cclxuXHJcbmNvbnN0IFVzZXJTZWFyY2ggPSAoKSA9PiB7XHJcblxyXG4gIGNvbnN0IFtmaWx0ZXJlZFVzZXJzLCBzZXRGaWx0ZXJlZFVzZXJzXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgY29uc3QgW3NlYXJjaE1vZGUsIHNldFNlYXJjaE1vZGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCB7IGZldGNoUHJvZmlsZVVzZXIgfSA9IHVzZUNvbnRleHQoR2xvYmFsQ29udGV4dCk7XHJcblxyXG4gIGNvbnN0IFtzZWFyY2hJbnB1dCwgc2V0U2VhcmNoSW5wdXRdID0gdXNlU3RhdGUoJycpO1xyXG5cclxuICBjb25zdCB1c2VyQ2xpY2tIYW5kbGVyID0gKGlkKSA9PiB7XHJcblxyXG4gICAgZmV0Y2hQcm9maWxlVXNlcihpZCwgZmFsc2UpO1xyXG5cclxuICAgIC8vIEhpZGUgZHJvcGRvd25cclxuICAgIHNldFNlYXJjaE1vZGUoZmFsc2UpXHJcblxyXG4gICAgLy8gQ2xlYXIgdGhlIHNlYXJjaCBiYXJcclxuICAgIHNldFNlYXJjaElucHV0KCcnKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGNoZWNrU2VhcmNoTW9kZSA9IChpbnB1dCkgPT4ge1xyXG4gICAgaWYgKGlucHV0ICE9PSAnJykge1xyXG4gICAgICBzZXRTZWFyY2hNb2RlKHRydWUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0U2VhcmNoTW9kZShmYWxzZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgaWQ9XCJ1c2VyLXNlYXJjaFwiPlxyXG4gICAgICA8VXNlclNlYXJjaEJhciBjaGVja1NlYXJjaE1vZGU9e2NoZWNrU2VhcmNoTW9kZX0gcGxhY2Vob2xkZXI9J1NlYXJjaCBmb3IgdXNlcicgc2VhcmNoTW9kZT0ndXNlcicgc2V0RmlsdGVyZWRVc2Vycz17c2V0RmlsdGVyZWRVc2Vyc30gc2VhcmNoSW5wdXQ9e3NlYXJjaElucHV0fSBzZXRTZWFyY2hJbnB1dD17c2V0U2VhcmNoSW5wdXR9IC8+XHJcbiAgICAgIHtzZWFyY2hNb2RlICYmXHJcbiAgICAgICAgPGRpdiBpZD1cImRyb3Bkb3duXCI+XHJcbiAgICAgICAgICA8ZGl2IGlkPVwic2VhcmNoLXJlc3VsdHNcIj5cclxuICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgIHtmaWx0ZXJlZFVzZXJzLm1hcCh1c2VyID0+IChcclxuICAgICAgICAgICAgICAgIDxsaSBrZXk9e3VzZXIuaWR9PlxyXG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Byb2ZpbGUvW3VzZXJJZF1cIiBhcz17YC9wcm9maWxlLyR7dXNlci5pZH1gfT5cclxuICAgICAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXt1c2VyQ2xpY2tIYW5kbGVyLmJpbmQodGhpcywgdXNlci5pZCl9Pnt1c2VyLm5hbWV9PC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICkpfVxyXG5cclxuICAgICAgICAgICAgICB7ZmlsdGVyZWRVc2Vycy5sZW5ndGggPT09IDAgJiZcclxuICAgICAgICAgICAgICAgIDxsaT5ObyBVc2VycyBGb3VuZDwvbGk+XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgXHJcbiAgICAgICAgI3VzZXItc2VhcmNoIHtcclxuICAgICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgICAvKiBwb3NpdGlvbjogcmVsYXRpdmU7ICovXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAjZHJvcGRvd24ge1xyXG4gICAgICAgICAgd2lkdGg6IDc5JTtcclxuICAgICAgICAgIC8qIHBvc2l0aW9uOiByZWxhdGl2ZTsgKi9cclxuICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgIHotaW5kZXg6IDM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICNzZWFyY2gtcmVzdWx0cyB7XHJcbiAgICAgICAgICB3aWR0aDogNDQwcHg7XHJcbiAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgICAgIGNvbG9yOiBwdXJwbGU7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAwLjVyZW07IFxyXG4gICAgICAgICAgcGFkZGluZzogMXJlbTtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgIGJveC1zaGFkb3c6IDEwcHggMTBweCA0NXB4IC0xMHB4IHJnYmEoNjYsOSw2NiwwLjc0KTtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIC8qIHRvcDogLTEwcHg7ICovXHJcbiAgICAgICAgICAvKiB6LWluZGV4OiAyMDA7ICovXHJcblxyXG4gICAgICAgICAgLyogbGVmdDogNDEwcHg7ICovXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB1bCB7XHJcbiAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyogTWVkaWEgcXVlcmllcyAqL1xyXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogMTE1MHB4KSB7XHJcbiAgICAgICAgLyogI3NlYXJjaC1yZXN1bHRzIHtcclxuICAgICAgICAgIHdpZHRoOiA0MDBweDtcclxuICAgICAgICB9ICovXHJcbiAgICAgIH0gXHJcblxyXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogMTEwMHB4KSB7XHJcbiAgICAgICAgI3NlYXJjaC1yZXN1bHRzIHtcclxuICAgICAgICAgIHdpZHRoOiAzOHZ3IDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMDYwcHgpIHtcclxuICAgICAgICAjc2VhcmNoLXJlc3VsdHMge1xyXG4gICAgICAgICAgd2lkdGg6IDM2dncgO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDk1MHB4KSB7XHJcbiAgICAgICAgI3NlYXJjaC1yZXN1bHRzIHtcclxuICAgICAgICAgIHJpZ2h0OiAxNTRweDtcclxuICAgICAgICAgIHdpZHRoOiA0NnZ3O1xyXG4gICAgICAgIH1cclxuICAgICAgfSBcclxuXHJcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5MjBweCkge1xyXG4gICAgICAgICN1c2VyLXNlYXJjaCB7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMi41cmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICAjc2VhcmNoLXJlc3VsdHMge1xyXG4gICAgICAgICAgcmlnaHQ6IDEyN3B4O1xyXG4gICAgICAgIH1cclxuICAgICAgfSBcclxuXHJcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5MDBweCkge1xyXG4gICAgICAgICNzZWFyY2gtcmVzdWx0cyB7XHJcbiAgICAgICAgICByaWdodDogMTIwcHg7XHJcbiAgICAgICAgICB3aWR0aDogNDZ2dztcclxuICAgICAgICB9XHJcbiAgICAgIH0gXHJcblxyXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogODcwcHgpIHtcclxuICAgICAgICAjc2VhcmNoLXJlc3VsdHMge1xyXG4gICAgICAgICAgcmlnaHQ6IDkwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IFxyXG5cclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc0MHB4KSB7XHJcbiAgICAgICAgI3NlYXJjaC1yZXN1bHRzIHtcclxuICAgICAgICAgIHJpZ2h0OiA3MHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfSBcclxuXHJcbiAgICAgIC8qIEBtZWRpYSAobWF4LXdpZHRoOiA2NjBweCkge1xyXG4gICAgICAgICNzZWFyY2gtcmVzdWx0cyB7XHJcbiAgICAgICAgICByaWdodDogNzBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICN1c2VyLXNlYXJjaCB7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgICAgICB9XHJcbiAgICAgIH0gICovXHJcblxyXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNjYwcHgpIHtcclxuICAgICAgICAjdXNlci1zZWFyY2gge1xyXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDFyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAjc2VhcmNoLXJlc3VsdHMge1xyXG4gICAgICAgICAgcmlnaHQ6IDEwN3B4O1xyXG4gICAgICAgICAgd2lkdGg6IDU4dnc7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgICAgICAjdXNlci1zZWFyY2gge1xyXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cmVtO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNTgwcHgpIHtcclxuICAgICAgICAjdXNlci1zZWFyY2gge1xyXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiA0LjVyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNTUwcHgpIHtcclxuICAgICAgICAjdXNlci1zZWFyY2gge1xyXG4gICAgICAgICAgd2lkdGg6IDU1JTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICNzZWFyY2gtcmVzdWx0cyB7XHJcbiAgICAgICAgICB3aWR0aDogNjJ2dztcclxuICAgICAgICAgIHJpZ2h0OiA5MXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ5MHB4KSB7XHJcbiAgICAgICAgI3VzZXItc2VhcmNoIHtcclxuICAgICAgICAgIG1hcmdpbi1yaWdodDogM3JlbTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0NTBweCkge1xyXG4gICAgICAgICNzZWFyY2gtcmVzdWx0cyB7XHJcbiAgICAgICAgICByaWdodDogODVweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0MjBweCkge1xyXG4gICAgICAgICN1c2VyLXNlYXJjaCB7XHJcbiAgICAgICAgICB3aWR0aDogNjAlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAjc2VhcmNoLXJlc3VsdHMge1xyXG4gICAgICAgICAgcmlnaHQ6IDl2dztcclxuICAgICAgICAgIHdpZHRoOiA3NnZ3O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDM3NXB4KSB7XHJcbiAgICAgICAgI3NlYXJjaC1yZXN1bHRzIHtcclxuICAgICAgICAgIHJpZ2h0OiAxNC41dnc7XHJcbiAgICAgICAgICB3aWR0aDogNjR2dztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAzNzBweCkge1xyXG4gICAgICAgICN1c2VyLXNlYXJjaCB7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMC44cmVtO1xyXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiA0cmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICAjc2VhcmNoLXJlc3VsdHMge1xyXG4gICAgICAgICAgcmlnaHQ6IDExdnc7XHJcbiAgICAgICAgICB3aWR0aDogNzZ2dztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcblxyXG5cclxuXHJcbiAgICAgIFxyXG4gICAgICBgfTwvc3R5bGU+XHJcblxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVc2VyU2VhcmNoO1xyXG4iXX0= */\n/*@ sourceURL=C:\\\\Coding\\\\MyProjects\\\\coders-jukebox\\\\components\\\\UserSearch.js */"));
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
    className: "jsx-465240098"
  }, __jsx("form", {
    onSubmit: onFormSubmit,
    autoComplete: "off",
    className: "jsx-465240098"
  }, __jsx("label", {
    htmlFor: "search-input",
    className: "jsx-465240098"
  }, __jsx("svg", {
    id: "search-icon",
    height: "24",
    viewBox: "0 0 24 24",
    width: "24",
    className: "jsx-465240098"
  }, __jsx("path", {
    d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z",
    className: "jsx-465240098"
  }), __jsx("path", {
    d: "M0 0h24v24H0z",
    fill: "none",
    className: "jsx-465240098"
  }))), __jsx("input", {
    type: "text",
    name: "search-input",
    placeholder: placeholder,
    onChange: onChangeHandler,
    value: searchInput,
    className: "jsx-465240098"
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "465240098"
  }, "label.jsx-465240098{position:absolute;top:9px;left:12px;}#main-searchbar.jsx-465240098{margin:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:relative;width:75%;font:inherit;}#main-searchbar.jsx-465240098 form.jsx-465240098{width:100%;}#main-searchbar.jsx-465240098 input.jsx-465240098{width:100%;border-radius:23px;padding:0.4rem 0.5rem 0.4rem 2.6rem;font-size:1.1rem;background-color:#fff;border:none;font-family:inherit;}#main-searchbar.jsx-465240098 input.jsx-465240098:focus{outline:none;}@media (max-width:950px){#main-searchbar.jsx-465240098{margin:0;width:90%;}}@media (max-width:660px){#main-searchbar.jsx-465240098{margin:auto;}}@media (max-width:600px){#main-searchbar.jsx-465240098{width:110%;}}@media (max-width:420px){#main-searchbar.jsx-465240098{width:112%;}}@media (max-width:370px){#main-searchbar.jsx-465240098{width:130%;}#main-searchbar.jsx-465240098 input.jsx-465240098{font-size:0.9rem;padding-left:2.3rem;}label.jsx-465240098{top:7px;}svg.jsx-465240098{height:24px;width:20px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxDb2RpbmdcXE15UHJvamVjdHNcXGNvZGVycy1qdWtlYm94XFxjb21wb25lbnRzXFxVc2VyU2VhcmNoQmFyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNDa0IsQUFJK0IsQUFNTixBQVNmLEFBR2MsQUFVRSxBQU1GLEFBT0csQUFNRCxBQU1BLEFBTUEsQUFJTSxBQUtULEFBSUksUUFIZCxDQWxDWSxFQXBCZCxBQUlxQixBQTZCbkIsQUFNQSxBQU1BLENBckRhLEFBbUNiLEFBK0JhLENBNUNmLElBbUN3QixDQS9EZCxDQW1DUixJQXNDQSxHQXhFVSxJQWtCMEIsTUFqQnRDLENBOERFLDZCQTVDaUIsaUJBQ0ssR0FkSixrQkFDUixDQWNFLFNBYkMsR0FjTyxVQWJ0QixVQWNBIiwiZmlsZSI6IkM6XFxDb2RpbmdcXE15UHJvamVjdHNcXGNvZGVycy1qdWtlYm94XFxjb21wb25lbnRzXFxVc2VyU2VhcmNoQmFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBHbG9iYWxDb250ZXh0IH0gZnJvbSAnLi4vY29udGV4dC9HbG9iYWxDb250ZXh0JztcclxuXHJcbmNvbnN0IFVzZXJTZWFyY2hiYXIgPSAoeyBwbGFjZWhvbGRlciwgc2V0RmlsdGVyZWRVc2VycywgY2hlY2tTZWFyY2hNb2RlLCBzZWFyY2hJbnB1dCwgc2V0U2VhcmNoSW5wdXQgfSkgPT4ge1xyXG5cclxuICBjb25zdCB7IGFsbFVzZXJzIH0gPSB1c2VDb250ZXh0KEdsb2JhbENvbnRleHQpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy8gYWN0aW9uIG9uIHVwZGF0ZSBvZiBzZWFyY2hJbnB1dFxyXG4gICAgY29uc3QgdXNlcnMgPSBhbGxVc2Vycy5maWx0ZXIodXNlciA9PiB7XHJcbiAgICAgIHJldHVybiB1c2VyLm5hbWUuc3Vic3RyKDAsIHNlYXJjaElucHV0Lmxlbmd0aCkudG9VcHBlckNhc2UoKSA9PT0gc2VhcmNoSW5wdXQudG9VcHBlckNhc2UoKVxyXG4gICAgfSlcclxuXHJcbiAgICBzZXRGaWx0ZXJlZFVzZXJzKHVzZXJzKVxyXG4gIH0sIFtzZWFyY2hJbnB1dF0pO1xyXG5cclxuICBjb25zdCBvbkNoYW5nZUhhbmRsZXIgPSAoZSkgPT4ge1xyXG4gICAgc2V0U2VhcmNoSW5wdXQoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgY2hlY2tTZWFyY2hNb2RlKGUudGFyZ2V0LnZhbHVlKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IG9uRm9ybVN1Ym1pdCA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgLy8gQ2FsbCB0aGUgcmVsZXZhbnQgc3VibWl0IGhhbmRsZXIgZnJvbSBwcm9wc1xyXG4gICAgLy8gc3VibWl0SGFuZGxlcihzZWFyY2hJbnB1dCk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBpZD1cIm1haW4tc2VhcmNoYmFyXCI+XHJcbiAgICAgIDxmb3JtIG9uU3VibWl0PXtvbkZvcm1TdWJtaXR9IGF1dG9Db21wbGV0ZT1cIm9mZlwiPlxyXG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwic2VhcmNoLWlucHV0XCI+XHJcbiAgICAgICAgICA8c3ZnIGlkPVwic2VhcmNoLWljb25cIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiB3aWR0aD1cIjI0XCI+PHBhdGggZD1cIk0xNS41IDE0aC0uNzlsLS4yOC0uMjdDMTUuNDEgMTIuNTkgMTYgMTEuMTEgMTYgOS41IDE2IDUuOTEgMTMuMDkgMyA5LjUgM1MzIDUuOTEgMyA5LjUgNS45MSAxNiA5LjUgMTZjMS42MSAwIDMuMDktLjU5IDQuMjMtMS41N2wuMjcuMjh2Ljc5bDUgNC45OUwyMC40OSAxOWwtNC45OS01em0tNiAwQzcuMDEgMTQgNSAxMS45OSA1IDkuNVM3LjAxIDUgOS41IDUgMTQgNy4wMSAxNCA5LjUgMTEuOTkgMTQgOS41IDE0elwiIC8+PHBhdGggZD1cIk0wIDBoMjR2MjRIMHpcIiBmaWxsPVwibm9uZVwiIC8+PC9zdmc+XHJcbiAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwic2VhcmNoLWlucHV0XCIgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfSBvbkNoYW5nZT17b25DaGFuZ2VIYW5kbGVyfSB2YWx1ZT17c2VhcmNoSW5wdXR9IC8+XHJcbiAgICAgIDwvZm9ybT5cclxuXHJcblxyXG4gICAgICA8c3R5bGUganN4PntgXHJcblxyXG4gICAgICAgICAgbGFiZWwge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRvcDogOXB4O1xyXG4gICAgICAgICAgICBsZWZ0OiAxMnB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAjbWFpbi1zZWFyY2hiYXIge1xyXG4gICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgd2lkdGg6IDc1JTtcclxuICAgICAgICAgICAgZm9udDogaW5oZXJpdDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAjbWFpbi1zZWFyY2hiYXIgZm9ybSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlXHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgI21haW4tc2VhcmNoYmFyIGlucHV0IHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIzcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAuNHJlbSAwLjVyZW0gMC40cmVtIDIuNnJlbTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgI21haW4tc2VhcmNoYmFyIGlucHV0IDpmb2N1cyB7XHJcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLyogTWVkaWEgcXVlcmllcyAqL1xyXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDk1MHB4KXtcclxuICAgICAgICAgICAgI21haW4tc2VhcmNoYmFyIHtcclxuICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2NjBweCl7XHJcbiAgICAgICAgICAgICNtYWluLXNlYXJjaGJhciB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KXtcclxuICAgICAgICAgICAgI21haW4tc2VhcmNoYmFyIHtcclxuICAgICAgICAgICAgICB3aWR0aDogMTEwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0MjBweCkge1xyXG4gICAgICAgICAgICAjbWFpbi1zZWFyY2hiYXIge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMTIlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDM3MHB4KSB7XHJcbiAgICAgICAgICAgICNtYWluLXNlYXJjaGJhciB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDEzMCU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICNtYWluLXNlYXJjaGJhciBpbnB1dCB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAyLjNyZW07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxhYmVsIHtcclxuICAgICAgICAgICAgICB0b3A6IDdweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgc3ZnIHtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICBcclxuICBgfTwvc3R5bGU+XHJcblxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVc2VyU2VhcmNoYmFyO1xyXG4iXX0= */\n/*@ sourceURL=C:\\\\Coding\\\\MyProjects\\\\coders-jukebox\\\\components\\\\UserSearchBar.js */"));
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
      const res = await fetch('/graphql', {
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

      localStorage.setItem('token', token); // Fetch the user data and set currentUser state

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
      // const res = await fetch('/graphql', {
      const res = await fetch('/graphql', {
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
    setProfileUser(emptyUser);
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
      const res = await fetch('/graphql', {
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
      const res = await fetch('/graphql', {
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
    }

    try {
      const res = await fetch('/graphql', {
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
      const res = await fetch('/graphql', {
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

      const user = data.data.userByToken;
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
    }); //Set video state to be first video in profile user's playlist - but only if initial fetch

    if (initialFetch === true & user.ownedVideos.length > 0) {
      const video = user.ownedVideos[0];
      setCurrentVideo({
        title: video.title,
        videoId: video.videoURL
      });
    }

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
  }; // VIDEOS **************************************************************************
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
    };

    try {
      const res = await fetch('/graphql', {
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
      const res = await fetch('/graphql', {
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
      const videos = data.data.removeVideo.ownedVideos; // Check for errors array in response

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
      const res = await fetch('/graphql', {
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
      const res = await fetch('/graphql', {
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
      const res = await fetch('/graphql', {
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
      } // Refresh the profile with the new user data - to update the comments


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
      const res = await fetch('/graphql', {
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
      const res = await fetch('/graphql', {
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


      const data = await res.json();
      const favourites = data.data.removeFavourite.favourites;
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
      const res = await axios__WEBPACK_IMPORTED_MODULE_5___default.a.post('/upload', formData, {
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
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xheW91dC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xvZ28uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9OYXZiYXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Vc2VyU2VhcmNoLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVXNlclNlYXJjaEJhci5qcyIsIndlYnBhY2s6Ly8vLi9jb25maWcvZGV2LmpzIiwid2VicGFjazovLy8uL2NvbmZpZy9rZXlzLmpzIiwid2VicGFjazovLy8uL2NvbnRleHQvQ29udGV4dFByb3ZpZGVyLmpzIiwid2VicGFjazovLy8uL2NvbnRleHQvR2xvYmFsQ29udGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9jc3MtdmFyaWFibGVzL2NvbG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9saW5rLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3dpdGgtcm91dGVyLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL21pdHQudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2Zvcm1hdC11cmwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtbWF0Y2hlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1yZWdleC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9zZWFyY2gtcGFyYW1zLXRvLXVybC1xdWVyeS50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2xpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL3JlYWN0LWlzL2Nqcy9yZWFjdC1pcy5kZXZlbG9wbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvcmVhY3QtaXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZyYW1lci1tb3Rpb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzLWV4YWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicXVlcnlzdHJpbmdcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWNvb2tpZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtanN4L3N0eWxlXCIiXSwibmFtZXMiOlsiTGF5b3V0IiwicHJvcHMiLCJjb2xvcnMiLCJwcmltYXJ5IiwiY2hpbGRyZW4iLCJMb2dvIiwiTmF2YmFyIiwiYXV0aFN0YXRlIiwiY3VycmVudFVzZXIiLCJmZXRjaFByb2ZpbGVVc2VyIiwibG9nb3V0IiwidXNlQ29udGV4dCIsIkdsb2JhbENvbnRleHQiLCJsb2dvdXRIYW5kbGVyIiwic2VhcmNoVXNlckhhbmRsZXIiLCJjb25zb2xlIiwibG9nIiwicHJvZmlsZU5hdkNsaWNrSGFuZGxlciIsImlkIiwiaGFtYnVyZ2VySGFuZGxlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJncmFkaWVudCIsInNlY29uZGFyeSIsImF1dGhlbnRpY2F0ZWQiLCJVc2VyU2VhcmNoIiwiZmlsdGVyZWRVc2VycyIsInNldEZpbHRlcmVkVXNlcnMiLCJ1c2VTdGF0ZSIsInNlYXJjaE1vZGUiLCJzZXRTZWFyY2hNb2RlIiwic2VhcmNoSW5wdXQiLCJzZXRTZWFyY2hJbnB1dCIsInVzZXJDbGlja0hhbmRsZXIiLCJjaGVja1NlYXJjaE1vZGUiLCJpbnB1dCIsIm1hcCIsInVzZXIiLCJiaW5kIiwibmFtZSIsImxlbmd0aCIsIlVzZXJTZWFyY2hiYXIiLCJwbGFjZWhvbGRlciIsImFsbFVzZXJzIiwidXNlRWZmZWN0IiwidXNlcnMiLCJmaWx0ZXIiLCJzdWJzdHIiLCJ0b1VwcGVyQ2FzZSIsIm9uQ2hhbmdlSGFuZGxlciIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm9uRm9ybVN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwibW9kdWxlIiwiZXhwb3J0cyIsIm1vbmdvVVJJIiwiWU9VVFVCRUFQSV9LRVkiLCJyZXF1aXJlIiwiQ29udGV4dFByb3ZpZGVyIiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJzdGF0ZSIsInJlbmRlciIsImluaXRpYWxTdGF0ZSIsImF1dGhEYXRhIiwidmlkZW8iLCJjb21tZW50IiwiY3JlYXRlQ29udGV4dCIsInJldmVyc2VHcmFkaWVudCIsInBpbmtHcmFkZW50IiwicmV2ZXJzZVBpbmtHcmFkaWVudCIsInRlcnRpYXJ5IiwibG9jYXRpb25PcmlnaW4iLCJyZXNvbHZlZCIsImxpc3RlbmVycyIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwid2luZG93IiwicHJlZmV0Y2hlZCIsImNhY2hlZE9ic2VydmVyIiwiZW50cmllcyIsImVudHJ5IiwiY2IiLCJyb290TWFyZ2luIiwibGlzdGVuVG9JbnRlcnNlY3Rpb25zIiwib2JzZXJ2ZXIiLCJnZXRPYnNlcnZlciIsInJvdXRlciIsImVyciIsImhyZWYiLCJub2RlTmFtZSIsImlzTG9jYWwiLCJzY3JvbGwiLCJhcyIsInJlcGxhY2UiLCJzdWNjZXNzIiwiaGFzV2FybmVkIiwiUmVhY3QiLCJwIiwicGF0aG5hbWUiLCJyZXNvbHZlZEhyZWYiLCJjaGlsZEVsbSIsImlzUHJlZmV0Y2hlZCIsInByZWZldGNoIiwiY2hpbGQiLCJDaGlsZHJlbiIsImNoaWxkUHJvcHMiLCJyZWYiLCJlbCIsInNldENoaWxkRWxtIiwib25DbGljayIsImxpbmtDbGlja2VkIiwicHJpb3JpdHkiLCJwcm9jZXNzIiwid2FybiIsIlByb3BUeXBlcyIsImV4YWN0IiwiTGluayIsInNoYWxsb3ciLCJwYXNzSHJlZiIsInBhdGgiLCJub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCIsInNpbmdsZXRvblJvdXRlciIsInJlYWR5Q2FsbGJhY2tzIiwicmVhZHkiLCJ1cmxQcm9wZXJ0eUZpZWxkcyIsInJvdXRlckV2ZW50cyIsImNvcmVNZXRob2RGaWVsZHMiLCJPYmplY3QiLCJnZXQiLCJSb3V0ZXIiLCJmaWVsZCIsImdldFJvdXRlciIsImV2ZW50IiwiZXZlbnRGaWVsZCIsIl9zaW5nbGV0b25Sb3V0ZXIiLCJtZXNzYWdlIiwic3RhY2siLCJSb3V0ZXJDb250ZXh0IiwiY3JlYXRlUm91dGVyIiwiX3JvdXRlciIsImluc3RhbmNlIiwiQ29tcG9zZWRDb21wb25lbnQiLCJnZXRJbml0aWFsUHJvcHMiLCJXaXRoUm91dGVyV3JhcHBlciIsImFsbCIsIm9uIiwib2ZmIiwiZW1pdCIsImhhbmRsZXIiLCJiYXNlUGF0aCIsImNhbmNlbGxlZCIsImJhc2UiLCJ1cmxBc1N0cmluZyIsImZpbmFsVXJsIiwidXJsIiwiYWRkQmFzZVBhdGgiLCJyZXNvbHZlSHJlZiIsIm1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uIiwiY3JlZGVudGlhbHMiLCJyZXMiLCJhdHRlbXB0cyIsImZldGNoUmV0cnkiLCJpc1NlcnZlclJlbmRlciIsInJvdXRlIiwicXVlcnkiLCJhc1BhdGgiLCJjb21wb25lbnRzIiwic2RjIiwic3ViIiwiY2xjIiwicGFnZUxvYWRlciIsIl9icHMiLCJldmVudHMiLCJfd3JhcEFwcCIsImlzU3NyIiwiaXNGYWxsYmFjayIsIl9pbkZsaWdodFJvdXRlIiwiX19OX1NTRyIsImluaXRpYWxQcm9wcyIsIl9fTl9TU1AiLCJfX05FWFRfREFUQV9fIiwidXBkYXRlIiwibW9kIiwiZGF0YSIsIm5ld0RhdGEiLCJyZWxvYWQiLCJiYWNrIiwicHVzaCIsIm9wdGlvbnMiLCJwcmVwYXJlVXJsQXMiLCJTVCIsInBlcmZvcm1hbmNlIiwiY2xlYW5lZEFzIiwiZGVsQmFzZVBhdGgiLCJwYXJzZWQiLCJ0cnlQYXJzZVJlbGF0aXZlVXJsIiwibWV0aG9kIiwicm91dGVSZWdleCIsInJvdXRlTWF0Y2giLCJtaXNzaW5nUGFyYW1zIiwicGFyYW0iLCJhc1BhdGhuYW1lIiwicm91dGVJbmZvIiwiYXBwQ29tcCIsImNoYW5nZVN0YXRlIiwiX19OIiwiYnVpbGRDYW5jZWxsYXRpb25FcnJvciIsInBhZ2UiLCJlcnJvciIsImNhY2hlZFJvdXRlSW5mbyIsImlzVmFsaWRFbGVtZW50VHlwZSIsImRhdGFIcmVmIiwic2V0IiwiYmVmb3JlUG9wU3RhdGUiLCJvbmx5QUhhc2hDaGFuZ2UiLCJuZXdIYXNoIiwib2xkVXJsTm9IYXNoIiwib2xkSGFzaCIsInNjcm9sbFRvSGFzaCIsImhhc2giLCJpZEVsIiwibmFtZUVsIiwidXJsSXNOZXciLCJQcm9taXNlIiwiY2FuY2VsIiwiY29tcG9uZW50UmVzdWx0IiwiX2dldERhdGEiLCJmbiIsIl9nZXRTdGF0aWNEYXRhIiwiZmV0Y2hOZXh0RGF0YSIsIl9nZXRTZXJ2ZXJEYXRhIiwiQXBwVHJlZSIsImN0eCIsImFib3J0Q29tcG9uZW50TG9hZCIsIm5vdGlmeSIsInNsYXNoZWRQcm90b2NvbHMiLCJwcm90b2NvbCIsInVybE9iaiIsImhvc3QiLCJhdXRoIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiaG9zdG5hbWUiLCJzZWFyY2giLCJURVNUX1JPVVRFIiwiRFVNTVlfQkFTRSIsInJlc29sdmVkQmFzZSIsIm9yaWdpbiIsInJlIiwiZGVjb2RlIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwicGFyYW1zIiwic2x1Z05hbWUiLCJnIiwiZ3JvdXBzIiwibSIsInN0ciIsIm9wdGlvbmFsIiwicmVwZWF0Iiwia2V5Iiwic2VnbWVudHMiLCJub3JtYWxpemVkUm91dGUiLCJncm91cEluZGV4IiwicGFyYW1ldGVyaXplZFJvdXRlIiwic2VnbWVudCIsInBhcnNlUGFyYW1ldGVyIiwicG9zIiwiZXNjYXBlUmVnZXgiLCJyb3V0ZUtleUNoYXJDb2RlIiwicm91dGVLZXlDaGFyTGVuZ3RoIiwiZ2V0U2FmZVJvdXRlS2V5Iiwicm91dGVLZXkiLCJpIiwiU3RyaW5nIiwicm91dGVLZXlzIiwibmFtZWRQYXJhbWV0ZXJpemVkUm91dGUiLCJjbGVhbmVkS2V5IiwiaW52YWxpZEtleSIsImlzTmFOIiwicGFyc2VJbnQiLCJuYW1lZFJlZ2V4Iiwic2VhcmNoUGFyYW1zIiwiQXJyYXkiLCJ1c2VkIiwicmVzdWx0IiwicG9ydCIsImdldExvY2F0aW9uT3JpZ2luIiwiQXBwIiwiZ2V0RGlzcGxheU5hbWUiLCJwYWdlUHJvcHMiLCJsb2FkR2V0SW5pdGlhbFByb3BzIiwiaXNSZXNTZW50IiwidXJsT2JqZWN0S2V5cyIsIlNQIiwidG9rZW4iLCJnZXRBbGxVc2VycyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJzZXRBdXRoU3RhdGUiLCJnZXRVc2VyRGF0YUJ5VG9rZW4iLCJlbXB0eVVzZXIiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsImpvYlRpdGxlIiwibG9jYXRpb24iLCJsYW5ndWFnZXMiLCJhYm91dCIsIm93bmVkVmlkZW9zIiwidXNlckNvbW1lbnRzIiwicGxheWxpc3RDb21tZW50cyIsImZhdm91cml0ZXMiLCJwcm9maWxlUGhvdG9GaWxlbmFtZSIsInVzZXJJZCIsInRva2VuRXhwaXJhdGlvbiIsInNldEN1cnJlbnRVc2VyIiwicHJvZmlsZVVzZXIiLCJzZXRQcm9maWxlVXNlciIsInZpZGVvU3RhdGUiLCJzZXRWaWRlb1N0YXRlIiwidGl0bGUiLCJ2aWRlb0lkIiwiY29tbWVudFN0YXRlIiwic2V0Q29tbWVudFN0YXRlIiwic2V0QWxsVXNlcnMiLCJhdXRvcGxheSIsInNldEF1dG9wbGF5IiwibG9naW4iLCJlbWFpbCIsInBhc3N3b3JkIiwicmVxdWVzdEJvZHkiLCJmZXRjaCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiaGVhZGVycyIsInN0YXR1cyIsIkVycm9yIiwianNvbiIsImVycm9ycyIsInNldEl0ZW0iLCJyZWdpc3RlciIsIm5ld1VzZXJFbWFpbCIsImNyZWF0ZVVzZXIiLCJyZW1vdmVJdGVtIiwidXBkYXRlVXNlciIsInVzZXJzV2l0aEZ1bGxOYW1lIiwiX2lkIiwiZ2V0VXNlckRhdGFCeUlkIiwidXNlckJ5SWQiLCJ1c2VyQnlUb2tlbiIsImluaXRpYWxGZXRjaCIsInVuZGVmaW5lZCIsInNldEN1cnJlbnRWaWRlbyIsInZpZGVvVVJMIiwiY2xlYXJQcm9maWxlVXNlciIsImdldENvbW1lbnRVc2VyIiwiY29tbWVudFVzZXIiLCJnZXRGYXZvdXJpdGVVc2VyIiwiZmF2b3VyaXRlVXNlciIsImFkZFZpZGVvVG9QbGF5bGlzdCIsInRodW1ibmFpbFVSTCIsInJlbW92ZVZpZGVvRnJvbVBsYXlsaXN0IiwidmlkZW9zIiwicmVtb3ZlVmlkZW8iLCJ1cGRhdGVQcm9maWxlVXNlclZpZGVvcyIsImFkZENvbW1lbnQiLCJjb250ZW50IiwicmVtb3ZlQ29tbWVudEZyb21QbGF5bGlzdCIsImNvbW1lbnRzIiwicmVtb3ZlQ29tbWVudCIsInVwZGF0ZVByb2ZpbGVVc2VyQ29tbWVudHMiLCJlZGl0Q29tbWVudCIsImFkZEZhdm91cml0ZSIsInJlbW92ZUZhdm91cml0ZSIsInVwZGF0ZVByb2ZpbGVVc2VyRmF2b3VyaXRlcyIsInVwbG9hZEZpbGUiLCJmb3JtRGF0YSIsImF4aW9zIiwicG9zdCJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlD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Q0FBLDZDIiwiZmlsZSI6InBhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIik7IiwiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IE5hdmJhciBmcm9tICcuL05hdmJhcic7XHJcbmltcG9ydCBjb2xvcnMgZnJvbSAnLi4vY3NzLXZhcmlhYmxlcy9jb2xvcnMnO1xyXG5cclxuXHJcbmNvbnN0IExheW91dCA9IChwcm9wcykgPT4gKFxyXG4gIDxkaXY+XHJcbiAgICA8SGVhZD5cclxuICAgICAgPHRpdGxlPkNvZGVUdW5lczwvdGl0bGU+XHJcbiAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJBIHNvY2lhbCBtdXNpYyBhcHAgZm9yIGNvZGVyc1wiLz5cclxuICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cclxuICAgICAgPG1ldGEgbmFtZT1cInJvYm90c1wiIGNvbnRlbnQ9XCJub2luZGV4LCBub2ZvbGxvd1wiLz5cclxuICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aFwiLz5cclxuICAgICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QmFsb28rVGhhbWJpKzImZGlzcGxheT1zd2FwXCIgcmVsPVwic3R5bGVzaGVldFwiPjwvbGluaz5cclxuICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL3N0YWNrcGF0aC5ib290c3RyYXBjZG4uY29tL2ZvbnQtYXdlc29tZS80LjcuMC9jc3MvZm9udC1hd2Vzb21lLm1pbi5jc3NcIi8+XHJcbiAgICAgIDxsaW5rXHJcbiAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXHJcbiAgICAgICAgaHJlZj1cImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL2FuaW1hdGUuY3NzLzQuMC4wL2FuaW1hdGUubWluLmNzc1wiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxsaW5rIHJlbD1cImljb25cIiB0eXBlPVwiaW1hZ2UvcG5nXCIgc2l6ZXM9XCIzMngzMlwiIGhyZWY9XCIvZmF2aWNvbi0zMngzMi5wbmdcIiAvPlxyXG4gICAgICA8bGluayByZWw9XCJpY29uXCIgdHlwZT1cImltYWdlL3BuZ1wiIHNpemVzPVwiMTZ4MTZcIiBocmVmPVwiL2Zhdmljb24tMTZ4MTYucG5nXCIgLz5cclxuICAgICAgPGxpbmsgcmVsPVwiYXBwbGUtdG91Y2gtaWNvblwiIHNpemVzPVwiMTgweDE4MFwiIGhyZWY9XCIvYXBwbGUtdG91Y2gtaWNvbi5wbmdcIiAvPlxyXG4gICAgICA8bGluayByZWw9XCJtYW5pZmVzdFwiIGhyZWY9XCIvc2l0ZS53ZWJtYW5pZmVzdFwiIC8+XHJcbiAgICAgIDxsaW5rIHJlbD1cIm1hc2staWNvblwiIGhyZWY9XCIvc2FmYXJpLXBpbm5lZC10YWIuc3ZnXCIgY29sb3I9XCIjNWJiYWQ1XCIgLz5cclxuICAgIDwvSGVhZD5cclxuICAgIDxOYXZiYXIvPlxyXG4gICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgXHJcblxyXG4gICAgPHN0eWxlIGdsb2JhbCBqc3g+e2BcclxuICAgIFxyXG4gICAgICAqIHtcclxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBib2R5IHtcclxuICAgICAgICBmb250LWZhbWlseTogJ0JhbG9vIFRoYW1iaSAyJywgc2Fucy1zZXJpZjtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMS44ZW07XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMTAwcHg7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGEge1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtIDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7Y29sb3JzLnByaW1hcnl9O1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzIGVhc2UtaW4tb3V0O1xyXG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSA4MG1zIGVhc2UtaW47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgYnV0dG9uOmFjdGl2ZSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgYnV0dG9uOmZvY3VzIHtcclxuICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBidXR0b246aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlNTMwNWE7XHJcbiAgICAgIH1cclxuICAgIFxyXG4gICAgYH0gXHJcbiAgICA8L3N0eWxlPiBcclxuICA8L2Rpdj5cclxuKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0O1xyXG4iLCJpbXBvcnQgY29sb3JzIGZyb20gJy4uL2Nzcy12YXJpYWJsZXMvY29sb3JzJztcclxuXHJcblxyXG5jb25zdCBMb2dvID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c3ZnIHZlcnNpb249XCIxLjFcIiBpZD1cIkxheWVyXzFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgeGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIgeD1cIjBweFwiIHk9XCIwcHhcIlxyXG4gICAgICB2aWV3Qm94PVwiMCAwIDExMCA5NVwiIHNwYWNlPVwicHJlc2VydmVcIj5cclxuICAgICAgPGc+XHJcbiAgICAgICAgPHBhdGggZD1cIk01MCw1QzI1LjIsNSw1LDI1LjIsNSw1MHMyMC4yLDQ1LDQ1LDQ1czQ1LTIwLjIsNDUtNDVTNzQuOCw1LDUwLDV6IE01MCw5MkMyNi44LDkyLDgsNzMuMiw4LDUwUzI2LjgsOCw1MCw4czQyLDE4LjgsNDIsNDJcclxuXHRcdFM3My4yLDkyLDUwLDkyelwiLz5cclxuICAgICAgICA8cGF0aCBkPVwiTTUwLDE2LjljLTE3LjEsMC0zMC45LDEzLjktMzAuOSwzMVY2MWMwLDAuMiwwLDAuNCwwLjEsMC42Yy0wLjEsMC42LTAuMSwxLjEtMC4xLDEuN2MwLDYuNCw0LjksMTEuNywxMS4xLDEyLjRcclxuXHRcdGMwLjQsMS45LDIuMiwzLjQsNC4yLDMuNGMyLjQsMCw0LjQtMiw0LjQtNC40VjUxLjljMC0yLjQtMi00LjQtNC40LTQuNGMtMi4xLDAtMy44LDEuNS00LjIsMy40Yy0zLjIsMC40LTYuMSwyLTguMSw0LjN2LTcuNFxyXG5cdFx0YzAtMTUuNCwxMi41LTI4LDI3LjktMjhzMjcuOSwxMi42LDI3LjksMjh2Ny41Yy0yLTIuNC00LjktNC04LjEtNC40Yy0wLjQtMS45LTIuMi0zLjQtNC4yLTMuNGMtMi40LDAtNC40LDItNC40LDQuNHYyMi45XHJcblx0XHRjMCwyLjQsMiw0LjQsNC40LDQuNGMyLjEsMCwzLjgtMS41LDQuMi0zLjRjNi4yLTAuNywxMS4xLTYsMTEuMS0xMi40YzAtMC42LTAuMS0xLjEtMC4xLTEuN2MwLjEtMC4yLDAuMi0wLjQsMC4yLTAuN1Y0Ny45XHJcblx0XHRDODAuOSwzMC44LDY3LjEsMTYuOSw1MCwxNi45eiBNMzMsNTEuOWMwLTAuOCwwLjYtMS40LDEuNC0xLjRzMS40LDAuNiwxLjQsMS40djIyLjljMCwwLjgtMC42LDEuNC0xLjQsMS40UzMzLDc1LjYsMzMsNzQuOFY1MS45elxyXG5cdFx0IE0zMCw1NHYxOC43Yy00LjUtMC43LTgtNC42LTgtOS40QzIyLjEsNTguNywyNS41LDU0LjcsMzAsNTR6IE02Ni45LDc0LjhjMCwwLjgtMC42LDEuNC0xLjQsMS40Yy0wLjgsMC0xLjQtMC42LTEuNC0xLjRWNTEuOVxyXG5cdFx0YzAtMC44LDAuNi0xLjQsMS40LTEuNGMwLjgsMCwxLjQsMC42LDEuNCwxLjRWNzQuOHogTTY5LjksNzIuN1Y1NGM0LjUsMC43LDgsNC42LDgsOS40Qzc3LjksNjguMSw3NC40LDcyLDY5LjksNzIuN3pcIi8+XHJcbiAgICAgIDwvZz5cclxuXHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgc3ZnIHtcclxuICAgICAgICBoZWlnaHQ6IDU1cHg7XHJcbiAgICAgICAgd2lkdGg6IDY2cHg7XHJcbiAgICAgICAgZmlsbDogd2hpdGU7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMC41cmVtO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuc3QwIHtcclxuICAgICAgICBmb250LWZhbWlseTonTXlyaWFkUHJvLVJlZ3VsYXInO1xyXG4gICAgICB9XHJcblx0ICAgIFxyXG4gICAgICAuc3QxIHtcclxuICAgICAgICBmb250LXNpemU6NDIuNjM1OXB4O1xyXG4gICAgICB9XHJcblx0ICAgIFxyXG4gICAgICAuc3QyIHtcclxuICAgICAgICBmaWxsOm5vbmU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5zdDAge1xyXG4gICAgICAgIGZpbGw6IHdoaXRlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvKiBNZWRpYSBxdWVyaWVzICovXHJcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCl7XHJcbiAgICAgICAgc3ZnIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDBweFxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ5MHB4KXtcclxuICAgICAgICBzdmcge1xyXG4gICAgICAgICAgd2lkdGg6IDY1cHhcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAzNzBweCl7XHJcbiAgICAgICAgc3ZnIHtcclxuICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgIHdpZHRoOiA0N3B4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICBgfTwvc3R5bGU+XHJcblxyXG5cclxuXHJcbiAgICA8L3N2Zz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvZ287XHJcbiIsImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEdsb2JhbENvbnRleHQgfSBmcm9tICcuLi9jb250ZXh0L0dsb2JhbENvbnRleHQnO1xyXG5pbXBvcnQgVXNlclNlYXJjaCBmcm9tICcuL1VzZXJTZWFyY2gnO1xyXG5pbXBvcnQgY29sb3JzIGZyb20gJy4uL2Nzcy12YXJpYWJsZXMvY29sb3JzJ1xyXG5pbXBvcnQgTG9nbyBmcm9tICcuL0xvZ28nO1xyXG5cclxuXHJcbmNvbnN0IE5hdmJhciA9ICgpID0+IHtcclxuXHJcbiAgY29uc3QgeyBhdXRoU3RhdGUsIGN1cnJlbnRVc2VyLCBmZXRjaFByb2ZpbGVVc2VyLCBsb2dvdXQgfSA9IHVzZUNvbnRleHQoR2xvYmFsQ29udGV4dCk7XHJcblxyXG4gIGNvbnN0IGxvZ291dEhhbmRsZXIgPSAoKSA9PiB7XHJcbiAgICBsb2dvdXQoKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBzZWFyY2hVc2VySGFuZGxlciA9ICgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKCdzZWFyY2hVc2VySGFuZGxlciBjYWxsZWQnKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHByb2ZpbGVOYXZDbGlja0hhbmRsZXIgPSAoKSA9PiB7XHJcbiAgICBmZXRjaFByb2ZpbGVVc2VyKGN1cnJlbnRVc2VyLmlkLCBmYWxzZSk7XHJcbiAgICBoYW1idXJnZXJIYW5kbGVyKCk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW1idXJnZXJIYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hhbWJ1cmdlcicpLmNsYXNzTGlzdC50b2dnbGUoJ29wZW4nKTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYXYtbWVudScpLmNsYXNzTGlzdC50b2dnbGUoJ2Ryb3Bkb3duJyk7XHJcbiAgfVxyXG5cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxuYXYgaWQ9XCJuYXZiYXJcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICA8ZGl2IGlkPVwibmF2LWNvbnRlbnRcIj5cclxuICAgICAgICAgIDxkaXYgaWQ9XCJsb2dvLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGlkPVwibG9nb1wiPlxyXG4gICAgICAgICAgICAgIDxMb2dvIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGlkPVwiYnJhbmRcIj5cclxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICAgIDxoMT5Db2RlVHVuZXM8L2gxPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8VXNlclNlYXJjaCAvPlxyXG5cclxuICAgICAgICAgIDx1bCBpZD1cIm5hdi1tZW51XCI+XHJcbiAgICAgICAgICAgIHthdXRoU3RhdGUuYXV0aGVudGljYXRlZCAmJiBjdXJyZW50VXNlciAhPT0gbnVsbCAmJlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvZmlsZS9bdXNlcklkXVwiIGFzPXtgL3Byb2ZpbGUvJHtjdXJyZW50VXNlci5pZH1gfT5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCIgb25DbGljaz17cHJvZmlsZU5hdkNsaWNrSGFuZGxlcn0+XHJcbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXVzZXJcIj48L2k+XHJcbiAgICAgICAgICAgICAgICBQcm9maWxlXHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL2Fib3V0XCI+XHJcbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIiBvbkNsaWNrPXtoYW1idXJnZXJIYW5kbGVyfT5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWluZm9cIj48L2k+XHJcbiAgICAgICAgICAgICAgICBBYm91dFxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICB7IWF1dGhTdGF0ZS5hdXRoZW50aWNhdGVkICYmXHJcbiAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYXV0aFwiPlxyXG4gICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiIG9uQ2xpY2s9e2hhbWJ1cmdlckhhbmRsZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXNpZ24taW5cIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgIExvZ2luXHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2F1dGhcIj5cclxuICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIiBvbkNsaWNrPXtoYW1idXJnZXJIYW5kbGVyfT5cclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS11c2VyLXBsdXNcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgIFJlZ2lzdGVyXHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAge2F1dGhTdGF0ZS5hdXRoZW50aWNhdGVkICYmXHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCIgb25DbGljaz17bG9nb3V0SGFuZGxlcn0+XHJcbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXNpZ24tb3V0XCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICBMb2dvdXRcclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgPGRpdiBpZD1cImhhbWJ1cmdlclwiIG9uQ2xpY2s9e2hhbWJ1cmdlckhhbmRsZXJ9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmVcIiBpZD1cImxpbmUxXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGluZVwiIGlkPVwibGluZTJcIj48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaW5lXCIgaWQ9XCJsaW5lM1wiPjwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICBcclxuICAgICAgICAgICNuYXZiYXIge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxLjVyZW0gMDtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgICAgICAgICAvKiBtYXJnaW4tYm90dG9tOiAycmVtOyAqL1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAke2NvbG9ycy5ncmFkaWVudH07XHJcbiAgICAgICAgICAgIC8qIGNvbG9yOiB3aGl0ZTsgKi9cclxuICAgICAgICAgICAgLyogYmFja2dyb3VuZC1jb2xvcjogIzkzZmZmYjsgKi9cclxuICAgICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAgICNuYXYtY29udGVudCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICNuYXYtbWVudSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAjbG9nby1jb250YWluZXIge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICNicmFuZCBoMSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4zcmVtO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5uYXYtaXRlbSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIDFyZW07XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IHRleHQtc2hhZG93IDAuMnM7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLm5hdi1pdGVtOmhvdmVyIHtcclxuICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDBweCAwcHggOHB4IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBpIHtcclxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAjc2VhcmNoIHtcclxuICAgICAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAjc2VhcmNoYmFye1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBsYWJlbCB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgdG9wOiAxMHB4O1xyXG4gICAgICAgICAgICBsZWZ0OiAxMnB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAvKiAjbG9nbyB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICB9ICovXHJcblxyXG4gICAgICAgICAgLyogTWVkaWEgcXVlcmllcyAqL1xyXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDExNTBweCl7XHJcbiAgICAgICAgICAgICNuYXYtY29udGVudCB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaDEge1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAycmVtO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAjbmF2LW1lbnUge1xyXG4gICAgICAgICAgICAgIC8qIHdpZHRoOiAzNXZ3OyAqL1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDExNDBweCkge1xyXG4gICAgICAgICAgICAjbG9nby1jb250YWluZXIge1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDExMDBweCkge1xyXG4gICAgICAgICAgICAjbmF2LWNvbnRlbnQge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiA5NyU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogOTUwcHgpIHtcclxuICAgICAgICAgICAgYm9keSB7XHJcbiAgICAgICAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAjbmF2YmFyIHtcclxuICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICNuYXYtbWVudSB7XHJcbiAgICAgICAgICAgICAgei1pbmRleDogMTAxO1xyXG4gICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgIHRvcDogMTAwJTtcclxuICAgICAgICAgICAgICByaWdodDogMHB4O1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAzM3Z3O1xyXG4gICAgICAgICAgICAgIGNsaXAtcGF0aDogY2lyY2xlKDBweCBhdCB0b3AgcmlnaHQpO1xyXG4gICAgICAgICAgICAgIHRyYW5zaXRpb246IGNsaXAtcGF0aCAwLjdzIGVhc2U7XHJcbiAgICAgICAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAtMTFweCAxMHB4IDE5cHggLTEwcHggcmdiYSgwLDAsMCwwLjI3KTtcclxuICAgICAgICAgICAgICAtbW96LWJveC1zaGFkb3c6IC0xMXB4IDEwcHggMTlweCAtMTBweCByZ2JhKDAsMCwwLDAuMjcpO1xyXG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6IC0xMXB4IDEwcHggMTlweCAtMTBweCByZ2JhKDAsMCwwLDAuMjcpO1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICR7Y29sb3JzLnByaW1hcnl9O1xyXG4gICAgICAgICAgICAgIC8qIG9wYWNpdHk6IDAuOTsgKi9cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgI25hdi1tZW51LmRyb3Bkb3duIHtcclxuICAgICAgICAgICAgICBjbGlwLXBhdGg6IGNpcmNsZSgxNTAlIGF0IHRvcCByaWdodCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5uYXYtaXRlbSB7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMnJlbSAzcmVtO1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZjZiOGQ7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpIHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxLjVyZW07XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICAgICAgICAgICAgLyogYmFja2dyb3VuZDogYmxhY2s7ICovXHJcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMC41cmVtO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAubmF2LWl0ZW06aG92ZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAke2NvbG9ycy5zZWNvbmRhcnl9O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAubGluZSB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDMwcHg7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiAzcHg7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiA1cHg7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCBlYXNlIDAuNXM7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICNoYW1idXJnZXIge1xyXG4gICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgI2hhbWJ1cmdlci5vcGVuICNsaW5lMSB7XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKSB0cmFuc2xhdGVZKDExLjVweCkgc2NhbGVYKDAuOSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICNoYW1idXJnZXIub3BlbiAjbGluZTJ7XHJcbiAgICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgI2hhbWJ1cmdlci5vcGVuICNsaW5lM3tcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZykgdHJhbnNsYXRlWSgtMTEuNXB4KSBzY2FsZVgoMC45KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA4NjBweCkge1xyXG4gICAgICAgICAgICAjbG9nby1jb250YWluZXIge1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc1MHB4KSB7XHJcbiAgICAgICAgICAgICNtYWluLXNlYXJjaGJhciB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDY5MHB4KSB7XHJcbiAgICAgICAgICAgICNtYWluLXNlYXJjaGJhciB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAjbmF2LW1lbnUge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiA0MCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgICAgICAgICAgI2JyYW5kIHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAjbG9nbyB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1NzBweCkge1xyXG4gICAgICAgICAgICAjbmF2LW1lbnUge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiA0NSU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcclxuICAgICAgICAgICAgI25hdi1tZW51IHtcclxuICAgICAgICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0NTBweCkge1xyXG4gICAgICAgICAgICAjbmF2LW1lbnUge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiA2MCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogMzc1cHgpIHtcclxuICAgICAgICAgICAgLm5hdi1pdGVtIHtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAycmVtIDJyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgXHJcblxyXG4gICAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvbmF2PlxyXG4gICAgLy8gKX1cclxuICAgIC8vIDwvR2xvYmFsQ29udGV4dC5Db25zdW1lcj5cclxuICApXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZiYXI7XHJcbiIsImltcG9ydCB7IHVzZVN0YXRlLCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgVXNlclNlYXJjaEJhciBmcm9tICcuL1VzZXJTZWFyY2hCYXInO1xyXG5pbXBvcnQgeyBHbG9iYWxDb250ZXh0IH0gZnJvbSAnLi4vY29udGV4dC9HbG9iYWxDb250ZXh0JztcclxuXHJcblxyXG5jb25zdCBVc2VyU2VhcmNoID0gKCkgPT4ge1xyXG5cclxuICBjb25zdCBbZmlsdGVyZWRVc2Vycywgc2V0RmlsdGVyZWRVc2Vyc10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIGNvbnN0IFtzZWFyY2hNb2RlLCBzZXRTZWFyY2hNb2RlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgeyBmZXRjaFByb2ZpbGVVc2VyIH0gPSB1c2VDb250ZXh0KEdsb2JhbENvbnRleHQpO1xyXG5cclxuICBjb25zdCBbc2VhcmNoSW5wdXQsIHNldFNlYXJjaElucHV0XSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcbiAgY29uc3QgdXNlckNsaWNrSGFuZGxlciA9IChpZCkgPT4ge1xyXG5cclxuICAgIGZldGNoUHJvZmlsZVVzZXIoaWQsIGZhbHNlKTtcclxuXHJcbiAgICAvLyBIaWRlIGRyb3Bkb3duXHJcbiAgICBzZXRTZWFyY2hNb2RlKGZhbHNlKVxyXG5cclxuICAgIC8vIENsZWFyIHRoZSBzZWFyY2ggYmFyXHJcbiAgICBzZXRTZWFyY2hJbnB1dCgnJyk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBjaGVja1NlYXJjaE1vZGUgPSAoaW5wdXQpID0+IHtcclxuICAgIGlmIChpbnB1dCAhPT0gJycpIHtcclxuICAgICAgc2V0U2VhcmNoTW9kZSh0cnVlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldFNlYXJjaE1vZGUoZmFsc2UpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGlkPVwidXNlci1zZWFyY2hcIj5cclxuICAgICAgPFVzZXJTZWFyY2hCYXIgY2hlY2tTZWFyY2hNb2RlPXtjaGVja1NlYXJjaE1vZGV9IHBsYWNlaG9sZGVyPSdTZWFyY2ggZm9yIHVzZXInIHNlYXJjaE1vZGU9J3VzZXInIHNldEZpbHRlcmVkVXNlcnM9e3NldEZpbHRlcmVkVXNlcnN9IHNlYXJjaElucHV0PXtzZWFyY2hJbnB1dH0gc2V0U2VhcmNoSW5wdXQ9e3NldFNlYXJjaElucHV0fSAvPlxyXG4gICAgICB7c2VhcmNoTW9kZSAmJlxyXG4gICAgICAgIDxkaXYgaWQ9XCJkcm9wZG93blwiPlxyXG4gICAgICAgICAgPGRpdiBpZD1cInNlYXJjaC1yZXN1bHRzXCI+XHJcbiAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICB7ZmlsdGVyZWRVc2Vycy5tYXAodXNlciA9PiAoXHJcbiAgICAgICAgICAgICAgICA8bGkga2V5PXt1c2VyLmlkfT5cclxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9maWxlL1t1c2VySWRdXCIgYXM9e2AvcHJvZmlsZS8ke3VzZXIuaWR9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgb25DbGljaz17dXNlckNsaWNrSGFuZGxlci5iaW5kKHRoaXMsIHVzZXIuaWQpfT57dXNlci5uYW1lfTwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICApKX1cclxuXHJcbiAgICAgICAgICAgICAge2ZpbHRlcmVkVXNlcnMubGVuZ3RoID09PSAwICYmXHJcbiAgICAgICAgICAgICAgICA8bGk+Tm8gVXNlcnMgRm91bmQ8L2xpPlxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICB9XHJcblxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgIFxyXG4gICAgICAgICN1c2VyLXNlYXJjaCB7XHJcbiAgICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgICAgLyogcG9zaXRpb246IHJlbGF0aXZlOyAqL1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgI2Ryb3Bkb3duIHtcclxuICAgICAgICAgIHdpZHRoOiA3OSU7XHJcbiAgICAgICAgICAvKiBwb3NpdGlvbjogcmVsYXRpdmU7ICovXHJcbiAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICB6LWluZGV4OiAzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAjc2VhcmNoLXJlc3VsdHMge1xyXG4gICAgICAgICAgd2lkdGg6IDQ0MHB4O1xyXG4gICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgICAgICBjb2xvcjogcHVycGxlO1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMC41cmVtOyBcclxuICAgICAgICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICBib3gtc2hhZG93OiAxMHB4IDEwcHggNDVweCAtMTBweCByZ2JhKDY2LDksNjYsMC43NCk7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAvKiB0b3A6IC0xMHB4OyAqL1xyXG4gICAgICAgICAgLyogei1pbmRleDogMjAwOyAqL1xyXG5cclxuICAgICAgICAgIC8qIGxlZnQ6IDQxMHB4OyAqL1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdWwge1xyXG4gICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qIE1lZGlhIHF1ZXJpZXMgKi9cclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDExNTBweCkge1xyXG4gICAgICAgIC8qICNzZWFyY2gtcmVzdWx0cyB7XHJcbiAgICAgICAgICB3aWR0aDogNDAwcHg7XHJcbiAgICAgICAgfSAqL1xyXG4gICAgICB9IFxyXG5cclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDExMDBweCkge1xyXG4gICAgICAgICNzZWFyY2gtcmVzdWx0cyB7XHJcbiAgICAgICAgICB3aWR0aDogMzh2dyA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogMTA2MHB4KSB7XHJcbiAgICAgICAgI3NlYXJjaC1yZXN1bHRzIHtcclxuICAgICAgICAgIHdpZHRoOiAzNnZ3IDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5NTBweCkge1xyXG4gICAgICAgICNzZWFyY2gtcmVzdWx0cyB7XHJcbiAgICAgICAgICByaWdodDogMTU0cHg7XHJcbiAgICAgICAgICB3aWR0aDogNDZ2dztcclxuICAgICAgICB9XHJcbiAgICAgIH0gXHJcblxyXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogOTIwcHgpIHtcclxuICAgICAgICAjdXNlci1zZWFyY2gge1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDIuNXJlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgI3NlYXJjaC1yZXN1bHRzIHtcclxuICAgICAgICAgIHJpZ2h0OiAxMjdweDtcclxuICAgICAgICB9XHJcbiAgICAgIH0gXHJcblxyXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogOTAwcHgpIHtcclxuICAgICAgICAjc2VhcmNoLXJlc3VsdHMge1xyXG4gICAgICAgICAgcmlnaHQ6IDEyMHB4O1xyXG4gICAgICAgICAgd2lkdGg6IDQ2dnc7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IFxyXG5cclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDg3MHB4KSB7XHJcbiAgICAgICAgI3NlYXJjaC1yZXN1bHRzIHtcclxuICAgICAgICAgIHJpZ2h0OiA5MHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfSBcclxuXHJcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NDBweCkge1xyXG4gICAgICAgICNzZWFyY2gtcmVzdWx0cyB7XHJcbiAgICAgICAgICByaWdodDogNzBweDtcclxuICAgICAgICB9XHJcbiAgICAgIH0gXHJcblxyXG4gICAgICAvKiBAbWVkaWEgKG1heC13aWR0aDogNjYwcHgpIHtcclxuICAgICAgICAjc2VhcmNoLXJlc3VsdHMge1xyXG4gICAgICAgICAgcmlnaHQ6IDcwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAjdXNlci1zZWFyY2gge1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9ICAqL1xyXG5cclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDY2MHB4KSB7XHJcbiAgICAgICAgI3VzZXItc2VhcmNoIHtcclxuICAgICAgICAgIG1hcmdpbi1yaWdodDogMXJlbTtcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgI3NlYXJjaC1yZXN1bHRzIHtcclxuICAgICAgICAgIHJpZ2h0OiAxMDdweDtcclxuICAgICAgICAgIHdpZHRoOiA1OHZ3O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICAgICAgI3VzZXItc2VhcmNoIHtcclxuICAgICAgICAgIG1hcmdpbi1yaWdodDogNXJlbTtcclxuICAgICAgfVxyXG5cclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDU4MHB4KSB7XHJcbiAgICAgICAgI3VzZXItc2VhcmNoIHtcclxuICAgICAgICAgIG1hcmdpbi1yaWdodDogNC41cmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDU1MHB4KSB7XHJcbiAgICAgICAgI3VzZXItc2VhcmNoIHtcclxuICAgICAgICAgIHdpZHRoOiA1NSU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAjc2VhcmNoLXJlc3VsdHMge1xyXG4gICAgICAgICAgd2lkdGg6IDYydnc7XHJcbiAgICAgICAgICByaWdodDogOTFweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0OTBweCkge1xyXG4gICAgICAgICN1c2VyLXNlYXJjaCB7XHJcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDNyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNDUwcHgpIHtcclxuICAgICAgICAjc2VhcmNoLXJlc3VsdHMge1xyXG4gICAgICAgICAgcmlnaHQ6IDg1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNDIwcHgpIHtcclxuICAgICAgICAjdXNlci1zZWFyY2gge1xyXG4gICAgICAgICAgd2lkdGg6IDYwJTtcclxuICAgICAgICB9XHJcbiAgICAgICAgI3NlYXJjaC1yZXN1bHRzIHtcclxuICAgICAgICAgIHJpZ2h0OiA5dnc7XHJcbiAgICAgICAgICB3aWR0aDogNzZ2dztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAzNzVweCkge1xyXG4gICAgICAgICNzZWFyY2gtcmVzdWx0cyB7XHJcbiAgICAgICAgICByaWdodDogMTQuNXZ3O1xyXG4gICAgICAgICAgd2lkdGg6IDY0dnc7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogMzcwcHgpIHtcclxuICAgICAgICAjdXNlci1zZWFyY2gge1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDAuOHJlbTtcclxuICAgICAgICAgIG1hcmdpbi1yaWdodDogNHJlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgI3NlYXJjaC1yZXN1bHRzIHtcclxuICAgICAgICAgIHJpZ2h0OiAxMXZ3O1xyXG4gICAgICAgICAgd2lkdGg6IDc2dnc7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG5cclxuXHJcblxyXG4gICAgICBcclxuICAgICAgYH08L3N0eWxlPlxyXG5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXNlclNlYXJjaDtcclxuIiwiaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBHbG9iYWxDb250ZXh0IH0gZnJvbSAnLi4vY29udGV4dC9HbG9iYWxDb250ZXh0JztcclxuXHJcbmNvbnN0IFVzZXJTZWFyY2hiYXIgPSAoeyBwbGFjZWhvbGRlciwgc2V0RmlsdGVyZWRVc2VycywgY2hlY2tTZWFyY2hNb2RlLCBzZWFyY2hJbnB1dCwgc2V0U2VhcmNoSW5wdXQgfSkgPT4ge1xyXG5cclxuICBjb25zdCB7IGFsbFVzZXJzIH0gPSB1c2VDb250ZXh0KEdsb2JhbENvbnRleHQpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy8gYWN0aW9uIG9uIHVwZGF0ZSBvZiBzZWFyY2hJbnB1dFxyXG4gICAgY29uc3QgdXNlcnMgPSBhbGxVc2Vycy5maWx0ZXIodXNlciA9PiB7XHJcbiAgICAgIHJldHVybiB1c2VyLm5hbWUuc3Vic3RyKDAsIHNlYXJjaElucHV0Lmxlbmd0aCkudG9VcHBlckNhc2UoKSA9PT0gc2VhcmNoSW5wdXQudG9VcHBlckNhc2UoKVxyXG4gICAgfSlcclxuXHJcbiAgICBzZXRGaWx0ZXJlZFVzZXJzKHVzZXJzKVxyXG4gIH0sIFtzZWFyY2hJbnB1dF0pO1xyXG5cclxuICBjb25zdCBvbkNoYW5nZUhhbmRsZXIgPSAoZSkgPT4ge1xyXG4gICAgc2V0U2VhcmNoSW5wdXQoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgY2hlY2tTZWFyY2hNb2RlKGUudGFyZ2V0LnZhbHVlKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IG9uRm9ybVN1Ym1pdCA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgLy8gQ2FsbCB0aGUgcmVsZXZhbnQgc3VibWl0IGhhbmRsZXIgZnJvbSBwcm9wc1xyXG4gICAgLy8gc3VibWl0SGFuZGxlcihzZWFyY2hJbnB1dCk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBpZD1cIm1haW4tc2VhcmNoYmFyXCI+XHJcbiAgICAgIDxmb3JtIG9uU3VibWl0PXtvbkZvcm1TdWJtaXR9IGF1dG9Db21wbGV0ZT1cIm9mZlwiPlxyXG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwic2VhcmNoLWlucHV0XCI+XHJcbiAgICAgICAgICA8c3ZnIGlkPVwic2VhcmNoLWljb25cIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiB3aWR0aD1cIjI0XCI+PHBhdGggZD1cIk0xNS41IDE0aC0uNzlsLS4yOC0uMjdDMTUuNDEgMTIuNTkgMTYgMTEuMTEgMTYgOS41IDE2IDUuOTEgMTMuMDkgMyA5LjUgM1MzIDUuOTEgMyA5LjUgNS45MSAxNiA5LjUgMTZjMS42MSAwIDMuMDktLjU5IDQuMjMtMS41N2wuMjcuMjh2Ljc5bDUgNC45OUwyMC40OSAxOWwtNC45OS01em0tNiAwQzcuMDEgMTQgNSAxMS45OSA1IDkuNVM3LjAxIDUgOS41IDUgMTQgNy4wMSAxNCA5LjUgMTEuOTkgMTQgOS41IDE0elwiIC8+PHBhdGggZD1cIk0wIDBoMjR2MjRIMHpcIiBmaWxsPVwibm9uZVwiIC8+PC9zdmc+XHJcbiAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwic2VhcmNoLWlucHV0XCIgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfSBvbkNoYW5nZT17b25DaGFuZ2VIYW5kbGVyfSB2YWx1ZT17c2VhcmNoSW5wdXR9IC8+XHJcbiAgICAgIDwvZm9ybT5cclxuXHJcblxyXG4gICAgICA8c3R5bGUganN4PntgXHJcblxyXG4gICAgICAgICAgbGFiZWwge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRvcDogOXB4O1xyXG4gICAgICAgICAgICBsZWZ0OiAxMnB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAjbWFpbi1zZWFyY2hiYXIge1xyXG4gICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgd2lkdGg6IDc1JTtcclxuICAgICAgICAgICAgZm9udDogaW5oZXJpdDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAjbWFpbi1zZWFyY2hiYXIgZm9ybSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlXHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgI21haW4tc2VhcmNoYmFyIGlucHV0IHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIzcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAuNHJlbSAwLjVyZW0gMC40cmVtIDIuNnJlbTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgI21haW4tc2VhcmNoYmFyIGlucHV0IDpmb2N1cyB7XHJcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLyogTWVkaWEgcXVlcmllcyAqL1xyXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDk1MHB4KXtcclxuICAgICAgICAgICAgI21haW4tc2VhcmNoYmFyIHtcclxuICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2NjBweCl7XHJcbiAgICAgICAgICAgICNtYWluLXNlYXJjaGJhciB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KXtcclxuICAgICAgICAgICAgI21haW4tc2VhcmNoYmFyIHtcclxuICAgICAgICAgICAgICB3aWR0aDogMTEwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0MjBweCkge1xyXG4gICAgICAgICAgICAjbWFpbi1zZWFyY2hiYXIge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMTIlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDM3MHB4KSB7XHJcbiAgICAgICAgICAgICNtYWluLXNlYXJjaGJhciB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDEzMCU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICNtYWluLXNlYXJjaGJhciBpbnB1dCB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAyLjNyZW07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxhYmVsIHtcclxuICAgICAgICAgICAgICB0b3A6IDdweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgc3ZnIHtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICBcclxuICBgfTwvc3R5bGU+XHJcblxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVc2VyU2VhcmNoYmFyO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHtcclxuICBtb25nb1VSSTogJ21vbmdvZGI6Ly9ncmVlbnBhdWxvOmFkbWluMjAyMEBkczEyMTk5Ni5tbGFiLmNvbToyMTk5Ni9jb2RlcnMtanVrZWJveC1kZXYnLFxyXG4gIFlPVVRVQkVBUElfS0VZOiAnQUl6YVN5RFdUSzVlYnFYR0h3M040RlNkeEVfcU8ydjBMRXMyOFhvJ1xyXG59IiwiLy8gRmlndXJlIG91dCB3aGljaCBzZXQgb2YgY3JlZGVudGlhbHMgdG8gcmV0dXJuXHJcblxyXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xyXG4gIC8vIHdlIGFyZSBpbiBwcm9kdWN0aW9uIC0gcmV0dXJuIHRoZSBwcm9kIHNldCBvZiBrZXlzXHJcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL3Byb2QnKTtcclxufSBlbHNlIHtcclxuICAvLyB3ZSBhcmUgaW4gZGV2ZWxvcG1lbnQgLSByZXR1cm4gdGhlIGRldiBzZXQgb2Yga2V5c1xyXG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kZXYnKTtcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBHbG9iYWxDb250ZXh0IH0gZnJvbSAnLi9HbG9iYWxDb250ZXh0JztcclxuaW1wb3J0IHsgQW5pbWF0ZVByZXNlbmNlIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XHJcblxyXG5jbGFzcyBDb250ZXh0UHJvdmlkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IHZhbHVlIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPEdsb2JhbENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3ZhbHVlfT5cclxuICAgICAgICA8QW5pbWF0ZVByZXNlbmNlIGV4aXRCZWZvcmVFbnRlciA+XHJcbiAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICA8L0FuaW1hdGVQcmVzZW5jZT5cclxuICAgICAgPC9HbG9iYWxDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbnRleHRQcm92aWRlcjsiLCJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VSZWR1Y2VyfSBmcm9tICdyZWFjdCc7XHJcbi8vIGltcG9ydCBBcHBSZWR1Y2VyIGZyb20gJy4vQXBwUmVkdWNlcic7XHJcbi8vIGltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSAnQGFwb2xsby9yZWFjdC1ob29rcyc7XHJcblxyXG4vLyBJbml0YWwgU3RhdGVcclxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIGF1dGhlbnRpY2F0ZWQ6IGZhbHNlLFxyXG4gIGF1dGhEYXRhOiBudWxsLFxyXG4gIHVzZXI6IG51bGwsXHJcbiAgdmlkZW86IG51bGwsXHJcbiAgY29tbWVudDogbnVsbCxcclxuICAvLyBsb2dpbjogKCkgPT4ge31cclxufVxyXG5cclxuLy8gQ3JlYXRlIGNvbnRleHRcclxuZXhwb3J0IGNvbnN0IEdsb2JhbENvbnRleHQgPSBjcmVhdGVDb250ZXh0KGluaXRpYWxTdGF0ZSk7XHJcblxyXG4vLyBQcm92aWRlciBDb21wb25lbnRcclxuLy8gZXhwb3J0IGNvbnN0IEdsb2JhbFByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4vLyAgIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihBcHBSZWR1Y2VyLCBpbml0aWFsU3RhdGUpXHJcblxyXG4vLyAgIHJldHVybiAoXHJcbi8vICAgICA8R2xvYmFsQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17e1xyXG4vLyAgICAgICAvLyBhdXRoZW50aWNhdGVkOiBzdGF0ZS5hdXRoZW50aWNhdGVkLFxyXG4vLyAgICAgICBsb2dpbjogbG9naW5cclxuLy8gICAgIH19PlxyXG4vLyAgICAgICB7Y2hpbGRyZW59XHJcbi8vICAgICA8L0dsb2JhbENvbnRleHQuUHJvdmlkZXI+XHJcbi8vICAgKVxyXG4vLyB9IiwiY29uc3QgY29sb3JzID0ge1xyXG4gIHByaW1hcnk6ICcjZmY0MTZjJyxcclxuICAvLyBncmFkaWVudDogJ2xpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2ZmNDE2YywgI2ZmNGIyYiknLFxyXG4gIC8vIGdyYWRpZW50OiAnbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZmY0MTZjLCAjZWVmYjRhKScsXHJcbiAgLy8gZ3JhZGllbnQ6ICdsaW5lYXItZ3JhZGllbnQoMzdkZWcsICNlNTJlNzEgNTAlLCAjZmY4YTAwIDEwMCUpJyxcclxuICAvLyBncmFkaWVudDogJ2xpbmVhci1ncmFkaWVudCgzN2RlZywgI2U1MmU3MSA1MCUsICNmZjhhMDAgMTAwJSknLFxyXG4gIC8vIGdyYWRpZW50OiAnbGluZWFyLWdyYWRpZW50KDM3ZGVnLCByZ2JhKDI1NSwgNjUsIDEwOCwgMSkgNTAlLCByZ2JhKDIzOCwgMjU1LCAyMCwgMSkgMTAwJSknLFxyXG4gIGdyYWRpZW50OiAnbGluZWFyLWdyYWRpZW50KDM3ZGVnLCAjZmY0MTZjIDUwJSwgI2VlZmYxNCAxMDAlKScsXHJcbiAgcmV2ZXJzZUdyYWRpZW50OiAnbGluZWFyLWdyYWRpZW50KDM3ZGVnLCAjZWVmZjE0IDclLCAjZmY0MTZjIDQ2JSknLFxyXG4gIHBpbmtHcmFkZW50OiAnbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZmY0YjJiLCAjZmY0MTZjKTsnLFxyXG4gIHJldmVyc2VQaW5rR3JhZGllbnQ6ICdsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmZjQxNmMsICNmZjRiMmIpOycsXHJcbiAgc2Vjb25kYXJ5OiAnI2ZmNGIyYicsXHJcbiAgdGVydGlhcnk6ICcjZWVmZjE0J1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb2xvcnM7IiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3R5cGVvZlwiKTtcblxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7XG4gIHZhciBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG5cbiAgX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICAgIHJldHVybiBjYWNoZTtcbiAgfTtcblxuICByZXR1cm4gY2FjaGU7XG59XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikge1xuICBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikge1xuICAgIHJldHVybiB7XG4gICAgICBcImRlZmF1bHRcIjogb2JqXG4gICAgfTtcbiAgfVxuXG4gIHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpO1xuXG4gIGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkge1xuICAgIHJldHVybiBjYWNoZS5nZXQob2JqKTtcbiAgfVxuXG4gIHZhciBuZXdPYmogPSB7fTtcbiAgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7XG5cbiAgICAgIGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld09ialtrZXldID0gb2JqW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajtcblxuICBpZiAoY2FjaGUpIHtcbiAgICBjYWNoZS5zZXQob2JqLCBuZXdPYmopO1xuICB9XG5cbiAgcmV0dXJuIG5ld09iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZDsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwiZGVjbGFyZSBjb25zdCBfX05FWFRfREFUQV9fOiBhbnlcblxuaW1wb3J0IFJlYWN0LCB7IENoaWxkcmVuIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgeyBQcmVmZXRjaE9wdGlvbnMsIE5leHRSb3V0ZXIgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IGV4ZWNPbmNlLCBnZXRMb2NhdGlvbk9yaWdpbiB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi91dGlscydcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJy4vcm91dGVyJ1xuaW1wb3J0IHsgYWRkQmFzZVBhdGgsIHJlc29sdmVIcmVmIH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5cbi8qKlxuICogRGV0ZWN0cyB3aGV0aGVyIGEgZ2l2ZW4gdXJsIGlzIGZyb20gdGhlIHNhbWUgb3JpZ2luIGFzIHRoZSBjdXJyZW50IHBhZ2UgKGJyb3dzZXIgb25seSkuXG4gKi9cbmZ1bmN0aW9uIGlzTG9jYWwodXJsOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgY29uc3QgbG9jYXRpb25PcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gIGNvbnN0IHJlc29sdmVkID0gbmV3IFVSTCh1cmwsIGxvY2F0aW9uT3JpZ2luKVxuICByZXR1cm4gcmVzb2x2ZWQub3JpZ2luID09PSBsb2NhdGlvbk9yaWdpblxufVxuXG50eXBlIFVybCA9IHN0cmluZyB8IFVybE9iamVjdFxuXG5leHBvcnQgdHlwZSBMaW5rUHJvcHMgPSB7XG4gIGhyZWY6IFVybFxuICBhcz86IFVybFxuICByZXBsYWNlPzogYm9vbGVhblxuICBzY3JvbGw/OiBib29sZWFuXG4gIHNoYWxsb3c/OiBib29sZWFuXG4gIHBhc3NIcmVmPzogYm9vbGVhblxuICBwcmVmZXRjaD86IGJvb2xlYW5cbn1cblxubGV0IGNhY2hlZE9ic2VydmVyOiBJbnRlcnNlY3Rpb25PYnNlcnZlclxuY29uc3QgbGlzdGVuZXJzID0gbmV3IE1hcDxFbGVtZW50LCAoKSA9PiB2b2lkPigpXG5jb25zdCBJbnRlcnNlY3Rpb25PYnNlcnZlciA9XG4gIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93LkludGVyc2VjdGlvbk9ic2VydmVyIDogbnVsbFxuY29uc3QgcHJlZmV0Y2hlZDogeyBbY2FjaGVLZXk6IHN0cmluZ106IGJvb2xlYW4gfSA9IHt9XG5cbmZ1bmN0aW9uIGdldE9ic2VydmVyKCk6IEludGVyc2VjdGlvbk9ic2VydmVyIHwgdW5kZWZpbmVkIHtcbiAgLy8gUmV0dXJuIHNoYXJlZCBpbnN0YW5jZSBvZiBJbnRlcnNlY3Rpb25PYnNlcnZlciBpZiBhbHJlYWR5IGNyZWF0ZWRcbiAgaWYgKGNhY2hlZE9ic2VydmVyKSB7XG4gICAgcmV0dXJuIGNhY2hlZE9ic2VydmVyXG4gIH1cblxuICAvLyBPbmx5IGNyZWF0ZSBzaGFyZWQgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgc3VwcG9ydGVkIGluIGJyb3dzZXJcbiAgaWYgKCFJbnRlcnNlY3Rpb25PYnNlcnZlcikge1xuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIHJldHVybiAoY2FjaGVkT2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoXG4gICAgKGVudHJpZXMpID0+IHtcbiAgICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgICAgaWYgKCFsaXN0ZW5lcnMuaGFzKGVudHJ5LnRhcmdldCkpIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNiID0gbGlzdGVuZXJzLmdldChlbnRyeS50YXJnZXQpIVxuICAgICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcgfHwgZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8gPiAwKSB7XG4gICAgICAgICAgY2FjaGVkT2JzZXJ2ZXIudW5vYnNlcnZlKGVudHJ5LnRhcmdldClcbiAgICAgICAgICBsaXN0ZW5lcnMuZGVsZXRlKGVudHJ5LnRhcmdldClcbiAgICAgICAgICBjYigpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSxcbiAgICB7IHJvb3RNYXJnaW46ICcyMDBweCcgfVxuICApKVxufVxuXG5jb25zdCBsaXN0ZW5Ub0ludGVyc2VjdGlvbnMgPSAoZWw6IEVsZW1lbnQsIGNiOiAoKSA9PiB2b2lkKSA9PiB7XG4gIGNvbnN0IG9ic2VydmVyID0gZ2V0T2JzZXJ2ZXIoKVxuICBpZiAoIW9ic2VydmVyKSB7XG4gICAgcmV0dXJuICgpID0+IHt9XG4gIH1cblxuICBvYnNlcnZlci5vYnNlcnZlKGVsKVxuICBsaXN0ZW5lcnMuc2V0KGVsLCBjYilcbiAgcmV0dXJuICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVsKVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnIpXG4gICAgfVxuICAgIGxpc3RlbmVycy5kZWxldGUoZWwpXG4gIH1cbn1cblxuZnVuY3Rpb24gcHJlZmV0Y2goXG4gIHJvdXRlcjogTmV4dFJvdXRlcixcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICBvcHRpb25zPzogUHJlZmV0Y2hPcHRpb25zXG4pOiB2b2lkIHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSByZXR1cm5cbiAgLy8gUHJlZmV0Y2ggdGhlIEpTT04gcGFnZSBpZiBhc2tlZCAob25seSBpbiB0aGUgY2xpZW50KVxuICAvLyBXZSBuZWVkIHRvIGhhbmRsZSBhIHByZWZldGNoIGVycm9yIGhlcmUgc2luY2Ugd2UgbWF5IGJlXG4gIC8vIGxvYWRpbmcgd2l0aCBwcmlvcml0eSB3aGljaCBjYW4gcmVqZWN0IGJ1dCB3ZSBkb24ndFxuICAvLyB3YW50IHRvIGZvcmNlIG5hdmlnYXRpb24gc2luY2UgdGhpcyBpcyBvbmx5IGEgcHJlZmV0Y2hcbiAgcm91dGVyLnByZWZldGNoKGhyZWYsIGFzLCBvcHRpb25zKS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIC8vIHJldGhyb3cgdG8gc2hvdyBpbnZhbGlkIFVSTCBlcnJvcnNcbiAgICAgIHRocm93IGVyclxuICAgIH1cbiAgfSlcbiAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXNdID0gdHJ1ZVxufVxuXG5mdW5jdGlvbiBsaW5rQ2xpY2tlZChcbiAgZTogUmVhY3QuTW91c2VFdmVudCxcbiAgcm91dGVyOiBOZXh0Um91dGVyLFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIHJlcGxhY2U/OiBib29sZWFuLFxuICBzaGFsbG93PzogYm9vbGVhbixcbiAgc2Nyb2xsPzogYm9vbGVhblxuKTogdm9pZCB7XG4gIGNvbnN0IHsgbm9kZU5hbWUsIHRhcmdldCB9ID0gZS5jdXJyZW50VGFyZ2V0IGFzIEhUTUxBbmNob3JFbGVtZW50XG4gIGlmIChcbiAgICBub2RlTmFtZSA9PT0gJ0EnICYmXG4gICAgKCh0YXJnZXQgJiYgdGFyZ2V0ICE9PSAnX3NlbGYnKSB8fFxuICAgICAgZS5tZXRhS2V5IHx8XG4gICAgICBlLmN0cmxLZXkgfHxcbiAgICAgIGUuc2hpZnRLZXkgfHxcbiAgICAgIChlLm5hdGl2ZUV2ZW50ICYmIGUubmF0aXZlRXZlbnQud2hpY2ggPT09IDIpKVxuICApIHtcbiAgICAvLyBpZ25vcmUgY2xpY2sgZm9yIG5ldyB0YWIgLyBuZXcgd2luZG93IGJlaGF2aW9yXG4gICAgcmV0dXJuXG4gIH1cblxuICBpZiAoIWlzTG9jYWwoaHJlZikpIHtcbiAgICAvLyBpZ25vcmUgY2xpY2sgaWYgaXQncyBvdXRzaWRlIG91ciBzY29wZSAoZS5nLiBodHRwczovL2dvb2dsZS5jb20pXG4gICAgcmV0dXJuXG4gIH1cblxuICBlLnByZXZlbnREZWZhdWx0KClcblxuICAvLyAgYXZvaWQgc2Nyb2xsIGZvciB1cmxzIHdpdGggYW5jaG9yIHJlZnNcbiAgaWYgKHNjcm9sbCA9PSBudWxsKSB7XG4gICAgc2Nyb2xsID0gYXMuaW5kZXhPZignIycpIDwgMFxuICB9XG5cbiAgLy8gcmVwbGFjZSBzdGF0ZSBpbnN0ZWFkIG9mIHB1c2ggaWYgcHJvcCBpcyBwcmVzZW50XG4gIHJvdXRlcltyZXBsYWNlID8gJ3JlcGxhY2UnIDogJ3B1c2gnXShocmVmLCBhcywgeyBzaGFsbG93IH0pLnRoZW4oXG4gICAgKHN1Y2Nlc3M6IGJvb2xlYW4pID0+IHtcbiAgICAgIGlmICghc3VjY2VzcykgcmV0dXJuXG4gICAgICBpZiAoc2Nyb2xsKSB7XG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgICBkb2N1bWVudC5ib2R5LmZvY3VzKClcbiAgICAgIH1cbiAgICB9XG4gIClcbn1cblxuZnVuY3Rpb24gTGluayhwcm9wczogUmVhY3QuUHJvcHNXaXRoQ2hpbGRyZW48TGlua1Byb3BzPikge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIC8vIFRoaXMgaG9vayBpcyBpbiBhIGNvbmRpdGlvbmFsIGJ1dCB0aGF0IGlzIG9rIGJlY2F1c2UgYHByb2Nlc3MuZW52Lk5PREVfRU5WYCBuZXZlciBjaGFuZ2VzXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL3J1bGVzLW9mLWhvb2tzXG4gICAgY29uc3QgaGFzV2FybmVkID0gUmVhY3QudXNlUmVmKGZhbHNlKVxuICAgIGlmIChwcm9wcy5wcmVmZXRjaCAmJiAhaGFzV2FybmVkLmN1cnJlbnQpIHtcbiAgICAgIGhhc1dhcm5lZC5jdXJyZW50ID0gdHJ1ZVxuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAnTmV4dC5qcyBhdXRvLXByZWZldGNoZXMgYXV0b21hdGljYWxseSBiYXNlZCBvbiB2aWV3cG9ydC4gVGhlIHByZWZldGNoIGF0dHJpYnV0ZSBpcyBubyBsb25nZXIgbmVlZGVkLiBNb3JlOiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9wcmVmZXRjaC10cnVlLWRlcHJlY2F0ZWQnXG4gICAgICApXG4gICAgfVxuICB9XG4gIGNvbnN0IHAgPSBwcm9wcy5wcmVmZXRjaCAhPT0gZmFsc2VcblxuICBjb25zdCBbY2hpbGRFbG0sIHNldENoaWxkRWxtXSA9IFJlYWN0LnVzZVN0YXRlPEVsZW1lbnQ+KClcblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICBjb25zdCBwYXRobmFtZSA9IChyb3V0ZXIgJiYgcm91dGVyLnBhdGhuYW1lKSB8fCAnLydcblxuICBjb25zdCB7IGhyZWYsIGFzIH0gPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICBjb25zdCByZXNvbHZlZEhyZWYgPSByZXNvbHZlSHJlZihwYXRobmFtZSwgcHJvcHMuaHJlZilcbiAgICByZXR1cm4ge1xuICAgICAgaHJlZjogcmVzb2x2ZWRIcmVmLFxuICAgICAgYXM6IHByb3BzLmFzID8gcmVzb2x2ZUhyZWYocGF0aG5hbWUsIHByb3BzLmFzKSA6IHJlc29sdmVkSHJlZixcbiAgICB9XG4gIH0sIFtwYXRobmFtZSwgcHJvcHMuaHJlZiwgcHJvcHMuYXNdKVxuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHAgJiYgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgJiYgY2hpbGRFbG0gJiYgY2hpbGRFbG0udGFnTmFtZSkge1xuICAgICAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgICAgIGNvbnN0IGlzUHJlZmV0Y2hlZCA9IHByZWZldGNoZWRbaHJlZiArICclJyArIGFzXVxuICAgICAgaWYgKCFpc1ByZWZldGNoZWQpIHtcbiAgICAgICAgcmV0dXJuIGxpc3RlblRvSW50ZXJzZWN0aW9ucyhjaGlsZEVsbSwgKCkgPT4ge1xuICAgICAgICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICB9LCBbcCwgY2hpbGRFbG0sIGhyZWYsIGFzLCByb3V0ZXJdKVxuXG4gIGxldCB7IGNoaWxkcmVuLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwgfSA9IHByb3BzXG4gIC8vIERlcHJlY2F0ZWQuIFdhcm5pbmcgc2hvd24gYnkgcHJvcFR5cGUgY2hlY2suIElmIHRoZSBjaGlsZHJlbiBwcm92aWRlZCBpcyBhIHN0cmluZyAoPExpbms+ZXhhbXBsZTwvTGluaz4pIHdlIHdyYXAgaXQgaW4gYW4gPGE+IHRhZ1xuICBpZiAodHlwZW9mIGNoaWxkcmVuID09PSAnc3RyaW5nJykge1xuICAgIGNoaWxkcmVuID0gPGE+e2NoaWxkcmVufTwvYT5cbiAgfVxuXG4gIC8vIFRoaXMgd2lsbCByZXR1cm4gdGhlIGZpcnN0IGNoaWxkLCBpZiBtdWx0aXBsZSBhcmUgcHJvdmlkZWQgaXQgd2lsbCB0aHJvdyBhbiBlcnJvclxuICBjb25zdCBjaGlsZDogYW55ID0gQ2hpbGRyZW4ub25seShjaGlsZHJlbilcbiAgY29uc3QgY2hpbGRQcm9wczoge1xuICAgIG9uTW91c2VFbnRlcj86IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgb25DbGljazogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICBocmVmPzogc3RyaW5nXG4gICAgcmVmPzogYW55XG4gIH0gPSB7XG4gICAgcmVmOiAoZWw6IGFueSkgPT4ge1xuICAgICAgaWYgKGVsKSBzZXRDaGlsZEVsbShlbClcblxuICAgICAgaWYgKGNoaWxkICYmIHR5cGVvZiBjaGlsZCA9PT0gJ29iamVjdCcgJiYgY2hpbGQucmVmKSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2hpbGQucmVmID09PSAnZnVuY3Rpb24nKSBjaGlsZC5yZWYoZWwpXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBjaGlsZC5yZWYgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgY2hpbGQucmVmLmN1cnJlbnQgPSBlbFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBvbkNsaWNrOiAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbkNsaWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNoaWxkLnByb3BzLm9uQ2xpY2soZSlcbiAgICAgIH1cbiAgICAgIGlmICghZS5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgIGxpbmtDbGlja2VkKGUsIHJvdXRlciwgaHJlZiwgYXMsIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbClcbiAgICAgIH1cbiAgICB9LFxuICB9XG5cbiAgaWYgKHApIHtcbiAgICBjaGlsZFByb3BzLm9uTW91c2VFbnRlciA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIoZSlcbiAgICAgIH1cbiAgICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMsIHsgcHJpb3JpdHk6IHRydWUgfSlcbiAgICB9XG4gIH1cblxuICAvLyBJZiBjaGlsZCBpcyBhbiA8YT4gdGFnIGFuZCBkb2Vzbid0IGhhdmUgYSBocmVmIGF0dHJpYnV0ZSwgb3IgaWYgdGhlICdwYXNzSHJlZicgcHJvcGVydHkgaXNcbiAgLy8gZGVmaW5lZCwgd2Ugc3BlY2lmeSB0aGUgY3VycmVudCAnaHJlZicsIHNvIHRoYXQgcmVwZXRpdGlvbiBpcyBub3QgbmVlZGVkIGJ5IHRoZSB1c2VyXG4gIGlmIChwcm9wcy5wYXNzSHJlZiB8fCAoY2hpbGQudHlwZSA9PT0gJ2EnICYmICEoJ2hyZWYnIGluIGNoaWxkLnByb3BzKSkpIHtcbiAgICBjaGlsZFByb3BzLmhyZWYgPSBhZGRCYXNlUGF0aChhcylcbiAgfVxuXG4gIC8vIEFkZCB0aGUgZW5kaW5nIHNsYXNoIHRvIHRoZSBwYXRocy4gU28sIHdlIGNhbiBzZXJ2ZSB0aGVcbiAgLy8gXCI8cGFnZT4vaW5kZXguaHRtbFwiIGRpcmVjdGx5LlxuICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0VYUE9SVF9UUkFJTElOR19TTEFTSCkge1xuICAgIGNvbnN0IHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0ID0gcmVxdWlyZSgnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yZXdyaXRlLXVybC1mb3ItZXhwb3J0JylcbiAgICAgIC5yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydFxuICAgIGlmIChcbiAgICAgIGNoaWxkUHJvcHMuaHJlZiAmJlxuICAgICAgdHlwZW9mIF9fTkVYVF9EQVRBX18gIT09ICd1bmRlZmluZWQnICYmXG4gICAgICBfX05FWFRfREFUQV9fLm5leHRFeHBvcnRcbiAgICApIHtcbiAgICAgIGNoaWxkUHJvcHMuaHJlZiA9IHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0KGNoaWxkUHJvcHMuaHJlZilcbiAgICB9XG4gIH1cblxuICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCBjaGlsZFByb3BzKVxufVxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgY29uc3Qgd2FybiA9IGV4ZWNPbmNlKGNvbnNvbGUuZXJyb3IpXG5cbiAgLy8gVGhpcyBtb2R1bGUgZ2V0cyByZW1vdmVkIGJ5IHdlYnBhY2suSWdub3JlUGx1Z2luXG4gIGNvbnN0IFByb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKVxuICBjb25zdCBleGFjdCA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMtZXhhY3QnKVxuICAvLyBAdHMtaWdub3JlIHRoZSBwcm9wZXJ0eSBpcyBzdXBwb3J0ZWQsIHdoZW4gZGVjbGFyaW5nIGl0IG9uIHRoZSBjbGFzcyBpdCBvdXRwdXRzIGFuIGV4dHJhIGJpdCBvZiBjb2RlIHdoaWNoIGlzIG5vdCBuZWVkZWQuXG4gIExpbmsucHJvcFR5cGVzID0gZXhhY3Qoe1xuICAgIGhyZWY6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5vYmplY3RdKS5pc1JlcXVpcmVkLFxuICAgIGFzOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMub2JqZWN0XSksXG4gICAgcHJlZmV0Y2g6IFByb3BUeXBlcy5ib29sLFxuICAgIHJlcGxhY2U6IFByb3BUeXBlcy5ib29sLFxuICAgIHNoYWxsb3c6IFByb3BUeXBlcy5ib29sLFxuICAgIHBhc3NIcmVmOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBzY3JvbGw6IFByb3BUeXBlcy5ib29sLFxuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgIFByb3BUeXBlcy5lbGVtZW50LFxuICAgICAgKHByb3BzOiBhbnksIHByb3BOYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBwcm9wc1twcm9wTmFtZV1cblxuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIHdhcm4oXG4gICAgICAgICAgICBgV2FybmluZzogWW91J3JlIHVzaW5nIGEgc3RyaW5nIGRpcmVjdGx5IGluc2lkZSA8TGluaz4uIFRoaXMgdXNhZ2UgaGFzIGJlZW4gZGVwcmVjYXRlZC4gUGxlYXNlIGFkZCBhbiA8YT4gdGFnIGFzIGNoaWxkIG9mIDxMaW5rPmBcbiAgICAgICAgICApXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgfSxcbiAgICBdKS5pc1JlcXVpcmVkLFxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBMaW5rXG4iLCIvKipcbiAqIFJlbW92ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBpZiB0aGVyZSBpcyBvbmUuIFByZXNlcnZlcyB0aGUgcm9vdCBwYXRoIGAvYC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLmVuZHNXaXRoKCcvJykgJiYgcGF0aCAhPT0gJy8nID8gcGF0aC5zbGljZSgwLCAtMSkgOiBwYXRoXG59XG5cbi8qKlxuICogTm9ybWFsaXplcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGFjY29yZGluZyB0byB0aGUgYHRyYWlsaW5nU2xhc2hgIG9wdGlvblxuICogaW4gYG5leHQuY29uZmlnLmpzYC5cbiAqL1xuZXhwb3J0IGNvbnN0IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoID0gcHJvY2Vzcy5lbnYuX19ORVhUX1RSQUlMSU5HX1NMQVNIXG4gID8gKHBhdGg6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gICAgICBpZiAoL1xcLlteL10rXFwvPyQvLnRlc3QocGF0aCkpIHtcbiAgICAgICAgcmV0dXJuIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGgpXG4gICAgICB9IGVsc2UgaWYgKHBhdGguZW5kc1dpdGgoJy8nKSkge1xuICAgICAgICByZXR1cm4gcGF0aFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHBhdGggKyAnLydcbiAgICAgIH1cbiAgICB9XG4gIDogcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2hcbiIsIi8qIGdsb2JhbCB3aW5kb3cgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSb3V0ZXIsIHsgTmV4dFJvdXRlciB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgUm91dGVyQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dCdcblxudHlwZSBDbGFzc0FyZ3VtZW50czxUPiA9IFQgZXh0ZW5kcyBuZXcgKC4uLmFyZ3M6IGluZmVyIFUpID0+IGFueSA/IFUgOiBhbnlcblxudHlwZSBSb3V0ZXJBcmdzID0gQ2xhc3NBcmd1bWVudHM8dHlwZW9mIFJvdXRlcj5cblxudHlwZSBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IFJvdXRlciB8IG51bGxcbiAgcmVhZHlDYWxsYmFja3M6IEFycmF5PCgpID0+IGFueT5cbiAgcmVhZHkoY2I6ICgpID0+IGFueSk6IHZvaWRcbn1cblxuZXhwb3J0IHsgUm91dGVyLCBOZXh0Um91dGVyIH1cblxuZXhwb3J0IHR5cGUgU2luZ2xldG9uUm91dGVyID0gU2luZ2xldG9uUm91dGVyQmFzZSAmIE5leHRSb3V0ZXJcblxuY29uc3Qgc2luZ2xldG9uUm91dGVyOiBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IG51bGwsIC8vIGhvbGRzIHRoZSBhY3R1YWwgcm91dGVyIGluc3RhbmNlXG4gIHJlYWR5Q2FsbGJhY2tzOiBbXSxcbiAgcmVhZHkoY2I6ICgpID0+IHZvaWQpIHtcbiAgICBpZiAodGhpcy5yb3V0ZXIpIHJldHVybiBjYigpXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLnJlYWR5Q2FsbGJhY2tzLnB1c2goY2IpXG4gICAgfVxuICB9LFxufVxuXG4vLyBDcmVhdGUgcHVibGljIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMgb2YgdGhlIHJvdXRlciBpbiB0aGUgc2luZ2xldG9uUm91dGVyXG5jb25zdCB1cmxQcm9wZXJ0eUZpZWxkcyA9IFtcbiAgJ3BhdGhuYW1lJyxcbiAgJ3JvdXRlJyxcbiAgJ3F1ZXJ5JyxcbiAgJ2FzUGF0aCcsXG4gICdjb21wb25lbnRzJyxcbiAgJ2lzRmFsbGJhY2snLFxuICAnYmFzZVBhdGgnLFxuXVxuY29uc3Qgcm91dGVyRXZlbnRzID0gW1xuICAncm91dGVDaGFuZ2VTdGFydCcsXG4gICdiZWZvcmVIaXN0b3J5Q2hhbmdlJyxcbiAgJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLFxuICAncm91dGVDaGFuZ2VFcnJvcicsXG4gICdoYXNoQ2hhbmdlU3RhcnQnLFxuICAnaGFzaENoYW5nZUNvbXBsZXRlJyxcbl1cbmNvbnN0IGNvcmVNZXRob2RGaWVsZHMgPSBbXG4gICdwdXNoJyxcbiAgJ3JlcGxhY2UnLFxuICAncmVsb2FkJyxcbiAgJ2JhY2snLFxuICAncHJlZmV0Y2gnLFxuICAnYmVmb3JlUG9wU3RhdGUnLFxuXVxuXG4vLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCAnZXZlbnRzJywge1xuICBnZXQoKSB7XG4gICAgcmV0dXJuIFJvdXRlci5ldmVudHNcbiAgfSxcbn0pXG5cbnVybFByb3BlcnR5RmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gIC8vIEhlcmUgd2UgbmVlZCB0byB1c2UgT2JqZWN0LmRlZmluZVByb3BlcnR5IGJlY2F1c2UsIHdlIG5lZWQgdG8gcmV0dXJuXG4gIC8vIHRoZSBwcm9wZXJ0eSBhc3NpZ25lZCB0byB0aGUgYWN0dWFsIHJvdXRlclxuICAvLyBUaGUgdmFsdWUgbWlnaHQgZ2V0IGNoYW5nZWQgYXMgd2UgY2hhbmdlIHJvdXRlcyBhbmQgdGhpcyBpcyB0aGVcbiAgLy8gcHJvcGVyIHdheSB0byBhY2Nlc3MgaXRcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgZmllbGQsIHtcbiAgICBnZXQoKSB7XG4gICAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICAgIHJldHVybiByb3V0ZXJbZmllbGRdIGFzIHN0cmluZ1xuICAgIH0sXG4gIH0pXG59KVxuXG5jb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gIC8vIFdlIGRvbid0IHJlYWxseSBrbm93IHRoZSB0eXBlcyBoZXJlLCBzbyB3ZSBhZGQgdGhlbSBsYXRlciBpbnN0ZWFkXG4gIDsoc2luZ2xldG9uUm91dGVyIGFzIGFueSlbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgcmV0dXJuIHJvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgfVxufSlcblxucm91dGVyRXZlbnRzLmZvckVhY2goKGV2ZW50KSA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeSgoKSA9PiB7XG4gICAgUm91dGVyLmV2ZW50cy5vbihldmVudCwgKC4uLmFyZ3MpID0+IHtcbiAgICAgIGNvbnN0IGV2ZW50RmllbGQgPSBgb24ke2V2ZW50LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpfSR7ZXZlbnQuc3Vic3RyaW5nKFxuICAgICAgICAxXG4gICAgICApfWBcbiAgICAgIGNvbnN0IF9zaW5nbGV0b25Sb3V0ZXIgPSBzaW5nbGV0b25Sb3V0ZXIgYXMgYW55XG4gICAgICBpZiAoX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0oLi4uYXJncylcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWNvbnNvbGVcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciB3aGVuIHJ1bm5pbmcgdGhlIFJvdXRlciBldmVudDogJHtldmVudEZpZWxkfWApXG4gICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWNvbnNvbGVcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGAke2Vyci5tZXNzYWdlfVxcbiR7ZXJyLnN0YWNrfWApXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9KVxufSlcblxuZnVuY3Rpb24gZ2V0Um91dGVyKCk6IFJvdXRlciB7XG4gIGlmICghc2luZ2xldG9uUm91dGVyLnJvdXRlcikge1xuICAgIGNvbnN0IG1lc3NhZ2UgPVxuICAgICAgJ05vIHJvdXRlciBpbnN0YW5jZSBmb3VuZC5cXG4nICtcbiAgICAgICdZb3Ugc2hvdWxkIG9ubHkgdXNlIFwibmV4dC9yb3V0ZXJcIiBpbnNpZGUgdGhlIGNsaWVudCBzaWRlIG9mIHlvdXIgYXBwLlxcbidcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBFeHBvcnQgdGhlIHNpbmdsZXRvblJvdXRlciBhbmQgdGhpcyBpcyB0aGUgcHVibGljIEFQSS5cbmV4cG9ydCBkZWZhdWx0IHNpbmdsZXRvblJvdXRlciBhcyBTaW5nbGV0b25Sb3V0ZXJcblxuLy8gUmVleHBvcnQgdGhlIHdpdGhSb3V0ZSBIT0NcbmV4cG9ydCB7IGRlZmF1bHQgYXMgd2l0aFJvdXRlciB9IGZyb20gJy4vd2l0aC1yb3V0ZXInXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VSb3V0ZXIoKTogTmV4dFJvdXRlciB7XG4gIHJldHVybiBSZWFjdC51c2VDb250ZXh0KFJvdXRlckNvbnRleHQpXG59XG5cbi8vIElOVEVSTkFMIEFQSVNcbi8vIC0tLS0tLS0tLS0tLS1cbi8vIChkbyBub3QgdXNlIGZvbGxvd2luZyBleHBvcnRzIGluc2lkZSB0aGUgYXBwKVxuXG4vLyBDcmVhdGUgYSByb3V0ZXIgYW5kIGFzc2lnbiBpdCBhcyB0aGUgc2luZ2xldG9uIGluc3RhbmNlLlxuLy8gVGhpcyBpcyB1c2VkIGluIGNsaWVudCBzaWRlIHdoZW4gd2UgYXJlIGluaXRpbGl6aW5nIHRoZSBhcHAuXG4vLyBUaGlzIHNob3VsZCAqKm5vdCoqIHVzZSBpbnNpZGUgdGhlIHNlcnZlci5cbmV4cG9ydCBjb25zdCBjcmVhdGVSb3V0ZXIgPSAoLi4uYXJnczogUm91dGVyQXJncyk6IFJvdXRlciA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yb3V0ZXIgPSBuZXcgUm91dGVyKC4uLmFyZ3MpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcy5mb3JFYWNoKChjYikgPT4gY2IoKSlcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzID0gW11cblxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gY3JlYXRlIHRoZSBgd2l0aFJvdXRlcmAgcm91dGVyIGluc3RhbmNlXG5leHBvcnQgZnVuY3Rpb24gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlKHJvdXRlcjogUm91dGVyKTogTmV4dFJvdXRlciB7XG4gIGNvbnN0IF9yb3V0ZXIgPSByb3V0ZXIgYXMgYW55XG4gIGNvbnN0IGluc3RhbmNlID0ge30gYXMgYW55XG5cbiAgZm9yIChjb25zdCBwcm9wZXJ0eSBvZiB1cmxQcm9wZXJ0eUZpZWxkcykge1xuICAgIGlmICh0eXBlb2YgX3JvdXRlcltwcm9wZXJ0eV0gPT09ICdvYmplY3QnKSB7XG4gICAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBPYmplY3QuYXNzaWduKHt9LCBfcm91dGVyW3Byb3BlcnR5XSkgLy8gbWFrZXMgc3VyZSBxdWVyeSBpcyBub3Qgc3RhdGVmdWxcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgaW5zdGFuY2VbcHJvcGVydHldID0gX3JvdXRlcltwcm9wZXJ0eV1cbiAgfVxuXG4gIC8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbiAgaW5zdGFuY2UuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gIGNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICBpbnN0YW5jZVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICAgIHJldHVybiBfcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4gaW5zdGFuY2Vcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IE5leHRDb21wb25lbnRUeXBlLCBOZXh0UGFnZUNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyLCB1c2VSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcidcblxuZXhwb3J0IHR5cGUgV2l0aFJvdXRlclByb3BzID0ge1xuICByb3V0ZXI6IE5leHRSb3V0ZXJcbn1cblxuZXhwb3J0IHR5cGUgRXhjbHVkZVJvdXRlclByb3BzPFA+ID0gUGljazxcbiAgUCxcbiAgRXhjbHVkZTxrZXlvZiBQLCBrZXlvZiBXaXRoUm91dGVyUHJvcHM+XG4+XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdpdGhSb3V0ZXI8XG4gIFAgZXh0ZW5kcyBXaXRoUm91dGVyUHJvcHMsXG4gIEMgPSBOZXh0UGFnZUNvbnRleHRcbj4oXG4gIENvbXBvc2VkQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxDLCBhbnksIFA+XG4pOiBSZWFjdC5Db21wb25lbnRUeXBlPEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPj4ge1xuICBmdW5jdGlvbiBXaXRoUm91dGVyV3JhcHBlcihwcm9wczogYW55KSB7XG4gICAgcmV0dXJuIDxDb21wb3NlZENvbXBvbmVudCByb3V0ZXI9e3VzZVJvdXRlcigpfSB7Li4ucHJvcHN9IC8+XG4gIH1cblxuICBXaXRoUm91dGVyV3JhcHBlci5nZXRJbml0aWFsUHJvcHMgPSBDb21wb3NlZENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHNcbiAgLy8gVGhpcyBpcyBuZWVkZWQgdG8gYWxsb3cgY2hlY2tpbmcgZm9yIGN1c3RvbSBnZXRJbml0aWFsUHJvcHMgaW4gX2FwcFxuICA7KFdpdGhSb3V0ZXJXcmFwcGVyIGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wcyA9IChDb21wb3NlZENvbXBvbmVudCBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHNcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBjb25zdCBuYW1lID1cbiAgICAgIENvbXBvc2VkQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvc2VkQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG4gICAgV2l0aFJvdXRlcldyYXBwZXIuZGlzcGxheU5hbWUgPSBgd2l0aFJvdXRlcigke25hbWV9KWBcbiAgfVxuXG4gIHJldHVybiBXaXRoUm91dGVyV3JhcHBlclxufVxuIiwiLypcbk1JVCBMaWNlbnNlXG5cbkNvcHlyaWdodCAoYykgSmFzb24gTWlsbGVyIChodHRwczovL2phc29uZm9ybWF0LmNvbS8pXG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiovXG5cbi8vIFRoaXMgZmlsZSBpcyBiYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20vZGV2ZWxvcGl0L21pdHQvYmxvYi92MS4xLjMvc3JjL2luZGV4LmpzXG4vLyBJdCdzIGJlZW4gZWRpdGVkIGZvciB0aGUgbmVlZHMgb2YgdGhpcyBzY3JpcHRcbi8vIFNlZSB0aGUgTElDRU5TRSBhdCB0aGUgdG9wIG9mIHRoZSBmaWxlXG5cbnR5cGUgSGFuZGxlciA9ICguLi5ldnRzOiBhbnlbXSkgPT4gdm9pZFxuXG5leHBvcnQgdHlwZSBNaXR0RW1pdHRlciA9IHtcbiAgb24odHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKTogdm9pZFxuICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKTogdm9pZFxuICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pOiB2b2lkXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1pdHQoKTogTWl0dEVtaXR0ZXIge1xuICBjb25zdCBhbGw6IHsgW3M6IHN0cmluZ106IEhhbmRsZXJbXSB9ID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuXG4gIHJldHVybiB7XG4gICAgb24odHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICA7KGFsbFt0eXBlXSB8fCAoYWxsW3R5cGVdID0gW10pKS5wdXNoKGhhbmRsZXIpXG4gICAgfSxcblxuICAgIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIGlmIChhbGxbdHlwZV0pIHtcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWJpdHdpc2VcbiAgICAgICAgYWxsW3R5cGVdLnNwbGljZShhbGxbdHlwZV0uaW5kZXhPZihoYW5kbGVyKSA+Pj4gMCwgMSlcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgICA7KGFsbFt0eXBlXSB8fCBbXSkuc2xpY2UoKS5tYXAoKGhhbmRsZXI6IEhhbmRsZXIpID0+IHtcbiAgICAgICAgaGFuZGxlciguLi5ldnRzKVxuICAgICAgfSlcbiAgICB9LFxuICB9XG59XG4iLCIvKiBnbG9iYWwgX19ORVhUX0RBVEFfXyAqL1xuLy8gdHNsaW50OmRpc2FibGU6bm8tY29uc29sZVxuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCBtaXR0LCB7IE1pdHRFbWl0dGVyIH0gZnJvbSAnLi4vbWl0dCdcbmltcG9ydCB7XG4gIEFwcENvbnRleHRUeXBlLFxuICBmb3JtYXRXaXRoVmFsaWRhdGlvbixcbiAgZ2V0VVJMLFxuICBsb2FkR2V0SW5pdGlhbFByb3BzLFxuICBOZXh0UGFnZUNvbnRleHQsXG4gIFNULFxufSBmcm9tICcuLi91dGlscydcbmltcG9ydCB7IGlzRHluYW1pY1JvdXRlIH0gZnJvbSAnLi91dGlscy9pcy1keW5hbWljJ1xuaW1wb3J0IHsgZ2V0Um91dGVNYXRjaGVyIH0gZnJvbSAnLi91dGlscy9yb3V0ZS1tYXRjaGVyJ1xuaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vdXRpbHMvcm91dGUtcmVnZXgnXG5pbXBvcnQgeyBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IH0gZnJvbSAnLi91dGlscy9zZWFyY2gtcGFyYW1zLXRvLXVybC1xdWVyeSdcbmltcG9ydCB7IHBhcnNlUmVsYXRpdmVVcmwgfSBmcm9tICcuL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybCdcbmltcG9ydCB7XG4gIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoLFxuICBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCxcbn0gZnJvbSAnLi4vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaCdcblxuY29uc3QgYmFzZVBhdGggPSAocHJvY2Vzcy5lbnYuX19ORVhUX1JPVVRFUl9CQVNFUEFUSCBhcyBzdHJpbmcpIHx8ICcnXG5cbmZ1bmN0aW9uIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSB7XG4gIHJldHVybiBPYmplY3QuYXNzaWduKG5ldyBFcnJvcignUm91dGUgQ2FuY2VsbGVkJyksIHtcbiAgICBjYW5jZWxsZWQ6IHRydWUsXG4gIH0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gYmFzZVBhdGhcbiAgICA/IHBhdGggPT09ICcvJ1xuICAgICAgPyBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChiYXNlUGF0aClcbiAgICAgIDogYmFzZVBhdGggKyBwYXRoXG4gICAgOiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5zbGljZShiYXNlUGF0aC5sZW5ndGgpIHx8ICcvJ1xufVxuXG50eXBlIFVybCA9IFVybE9iamVjdCB8IHN0cmluZ1xuXG4vKipcbiAqIFJlc29sdmVzIGEgZ2l2ZW4gaHlwZXJsaW5rIHdpdGggYSBjZXJ0YWluIHJvdXRlciBzdGF0ZSAoYmFzZVBhdGggbm90IGluY2x1ZGVkKS5cbiAqIFByZXNlcnZlcyBhYnNvbHV0ZSB1cmxzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZUhyZWYoY3VycmVudFBhdGg6IHN0cmluZywgaHJlZjogVXJsKTogc3RyaW5nIHtcbiAgLy8gd2UgdXNlIGEgZHVtbXkgYmFzZSB1cmwgZm9yIHJlbGF0aXZlIHVybHNcbiAgY29uc3QgYmFzZSA9IG5ldyBVUkwoY3VycmVudFBhdGgsICdodHRwOi8vbicpXG4gIGNvbnN0IHVybEFzU3RyaW5nID1cbiAgICB0eXBlb2YgaHJlZiA9PT0gJ3N0cmluZycgPyBocmVmIDogZm9ybWF0V2l0aFZhbGlkYXRpb24oaHJlZilcbiAgY29uc3QgZmluYWxVcmwgPSBuZXcgVVJMKHVybEFzU3RyaW5nLCBiYXNlKVxuICBmaW5hbFVybC5wYXRobmFtZSA9IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKGZpbmFsVXJsLnBhdGhuYW1lKVxuICAvLyBpZiB0aGUgb3JpZ2luIGRpZG4ndCBjaGFuZ2UsIGl0IG1lYW5zIHdlIHJlY2VpdmVkIGEgcmVsYXRpdmUgaHJlZlxuICByZXR1cm4gZmluYWxVcmwub3JpZ2luID09PSBiYXNlLm9yaWdpblxuICAgID8gZmluYWxVcmwuaHJlZi5zbGljZShmaW5hbFVybC5vcmlnaW4ubGVuZ3RoKVxuICAgIDogZmluYWxVcmwuaHJlZlxufVxuXG5mdW5jdGlvbiBwcmVwYXJlVXJsQXMocm91dGVyOiBOZXh0Um91dGVyLCB1cmw6IFVybCwgYXM6IFVybCkge1xuICAvLyBJZiB1cmwgYW5kIGFzIHByb3ZpZGVkIGFzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbixcbiAgLy8gd2UnbGwgZm9ybWF0IHRoZW0gaW50byB0aGUgc3RyaW5nIHZlcnNpb24gaGVyZS5cbiAgcmV0dXJuIHtcbiAgICB1cmw6IGFkZEJhc2VQYXRoKHJlc29sdmVIcmVmKHJvdXRlci5wYXRobmFtZSwgdXJsKSksXG4gICAgYXM6IGFzID8gYWRkQmFzZVBhdGgocmVzb2x2ZUhyZWYocm91dGVyLnBhdGhuYW1lLCBhcykpIDogYXMsXG4gIH1cbn1cblxuZnVuY3Rpb24gdHJ5UGFyc2VSZWxhdGl2ZVVybChcbiAgdXJsOiBzdHJpbmdcbik6IG51bGwgfCBSZXR1cm5UeXBlPHR5cGVvZiBwYXJzZVJlbGF0aXZlVXJsPiB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgSW52YWxpZCBocmVmIHBhc3NlZCB0byByb3V0ZXI6ICR7dXJsfSBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9pbnZhbGlkLWhyZWYtcGFzc2VkYFxuICAgICAgKVxuICAgIH1cbiAgICByZXR1cm4gbnVsbFxuICB9XG59XG5cbnR5cGUgQ29tcG9uZW50UmVzID0geyBwYWdlOiBDb21wb25lbnRUeXBlOyBtb2Q6IGFueSB9XG5cbmV4cG9ydCB0eXBlIEJhc2VSb3V0ZXIgPSB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xufVxuXG5leHBvcnQgdHlwZSBOZXh0Um91dGVyID0gQmFzZVJvdXRlciAmXG4gIFBpY2s8XG4gICAgUm91dGVyLFxuICAgIHwgJ3B1c2gnXG4gICAgfCAncmVwbGFjZSdcbiAgICB8ICdyZWxvYWQnXG4gICAgfCAnYmFjaydcbiAgICB8ICdwcmVmZXRjaCdcbiAgICB8ICdiZWZvcmVQb3BTdGF0ZSdcbiAgICB8ICdldmVudHMnXG4gICAgfCAnaXNGYWxsYmFjaydcbiAgPlxuXG5leHBvcnQgdHlwZSBQcmVmZXRjaE9wdGlvbnMgPSB7XG4gIHByaW9yaXR5PzogYm9vbGVhblxufVxuXG50eXBlIFJvdXRlSW5mbyA9IHtcbiAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG4gIHByb3BzPzogYW55XG4gIGVycj86IEVycm9yXG4gIGVycm9yPzogYW55XG59XG5cbnR5cGUgU3Vic2NyaXB0aW9uID0gKGRhdGE6IFJvdXRlSW5mbywgQXBwPzogQ29tcG9uZW50VHlwZSkgPT4gUHJvbWlzZTx2b2lkPlxuXG50eXBlIEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgPSAoc3RhdGU6IGFueSkgPT4gYm9vbGVhblxuXG50eXBlIENvbXBvbmVudExvYWRDYW5jZWwgPSAoKCkgPT4gdm9pZCkgfCBudWxsXG5cbnR5cGUgSGlzdG9yeU1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnIHwgJ3B1c2hTdGF0ZSdcblxuY29uc3QgbWFudWFsU2Nyb2xsUmVzdG9yYXRpb24gPVxuICBwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OICYmXG4gIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXG4gICdzY3JvbGxSZXN0b3JhdGlvbicgaW4gd2luZG93Lmhpc3RvcnlcblxuZnVuY3Rpb24gZmV0Y2hSZXRyeSh1cmw6IHN0cmluZywgYXR0ZW1wdHM6IG51bWJlcik6IFByb21pc2U8YW55PiB7XG4gIHJldHVybiBmZXRjaCh1cmwsIHtcbiAgICAvLyBDb29raWVzIGFyZSByZXF1aXJlZCB0byBiZSBwcmVzZW50IGZvciBOZXh0LmpzJyBTU0cgXCJQcmV2aWV3IE1vZGVcIi5cbiAgICAvLyBDb29raWVzIG1heSBhbHNvIGJlIHJlcXVpcmVkIGZvciBgZ2V0U2VydmVyU2lkZVByb3BzYC5cbiAgICAvL1xuICAgIC8vID4gYGZldGNoYCB3b27igJl0IHNlbmQgY29va2llcywgdW5sZXNzIHlvdSBzZXQgdGhlIGNyZWRlbnRpYWxzIGluaXRcbiAgICAvLyA+IG9wdGlvbi5cbiAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRmV0Y2hfQVBJL1VzaW5nX0ZldGNoXG4gICAgLy9cbiAgICAvLyA+IEZvciBtYXhpbXVtIGJyb3dzZXIgY29tcGF0aWJpbGl0eSB3aGVuIGl0IGNvbWVzIHRvIHNlbmRpbmcgJlxuICAgIC8vID4gcmVjZWl2aW5nIGNvb2tpZXMsIGFsd2F5cyBzdXBwbHkgdGhlIGBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ2BcbiAgICAvLyA+IG9wdGlvbiBpbnN0ZWFkIG9mIHJlbHlpbmcgb24gdGhlIGRlZmF1bHQuXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2dpdGh1Yi9mZXRjaCNjYXZlYXRzXG4gICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG4gIH0pLnRoZW4oKHJlcykgPT4ge1xuICAgIGlmICghcmVzLm9rKSB7XG4gICAgICBpZiAoYXR0ZW1wdHMgPiAxICYmIHJlcy5zdGF0dXMgPj0gNTAwKSB7XG4gICAgICAgIHJldHVybiBmZXRjaFJldHJ5KHVybCwgYXR0ZW1wdHMgLSAxKVxuICAgICAgfVxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKVxuICAgIH1cblxuICAgIHJldHVybiByZXMuanNvbigpXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGZldGNoTmV4dERhdGEoZGF0YUhyZWY6IHN0cmluZywgaXNTZXJ2ZXJSZW5kZXI6IGJvb2xlYW4pIHtcbiAgcmV0dXJuIGZldGNoUmV0cnkoZGF0YUhyZWYsIGlzU2VydmVyUmVuZGVyID8gMyA6IDEpLmNhdGNoKChlcnI6IEVycm9yKSA9PiB7XG4gICAgLy8gV2Ugc2hvdWxkIG9ubHkgdHJpZ2dlciBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb24gaWYgdGhpcyB3YXMgY2F1c2VkXG4gICAgLy8gb24gYSBjbGllbnQtc2lkZSB0cmFuc2l0aW9uLiBPdGhlcndpc2UsIHdlJ2QgZ2V0IGludG8gYW4gaW5maW5pdGVcbiAgICAvLyBsb29wLlxuICAgIGlmICghaXNTZXJ2ZXJSZW5kZXIpIHtcbiAgICAgIDsoZXJyIGFzIGFueSkuY29kZSA9ICdQQUdFX0xPQURfRVJST1InXG4gICAgfVxuICAgIHRocm93IGVyclxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb3V0ZXIgaW1wbGVtZW50cyBCYXNlUm91dGVyIHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG5cbiAgLyoqXG4gICAqIE1hcCBvZiBhbGwgY29tcG9uZW50cyBsb2FkZWQgaW4gYFJvdXRlcmBcbiAgICovXG4gIGNvbXBvbmVudHM6IHsgW3BhdGhuYW1lOiBzdHJpbmddOiBSb3V0ZUluZm8gfVxuICAvLyBTdGF0aWMgRGF0YSBDYWNoZVxuICBzZGM6IHsgW2FzUGF0aDogc3RyaW5nXTogb2JqZWN0IH0gPSB7fVxuICBzdWI6IFN1YnNjcmlwdGlvblxuICBjbGM6IENvbXBvbmVudExvYWRDYW5jZWxcbiAgcGFnZUxvYWRlcjogYW55XG4gIF9icHM6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgfCB1bmRlZmluZWRcbiAgZXZlbnRzOiBNaXR0RW1pdHRlclxuICBfd3JhcEFwcDogKEFwcDogQ29tcG9uZW50VHlwZSkgPT4gYW55XG4gIGlzU3NyOiBib29sZWFuXG4gIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgX2luRmxpZ2h0Um91dGU/OiBzdHJpbmdcblxuICBzdGF0aWMgZXZlbnRzOiBNaXR0RW1pdHRlciA9IG1pdHQoKVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAge1xuICAgICAgaW5pdGlhbFByb3BzLFxuICAgICAgcGFnZUxvYWRlcixcbiAgICAgIEFwcCxcbiAgICAgIHdyYXBBcHAsXG4gICAgICBDb21wb25lbnQsXG4gICAgICBlcnIsXG4gICAgICBzdWJzY3JpcHRpb24sXG4gICAgICBpc0ZhbGxiYWNrLFxuICAgIH06IHtcbiAgICAgIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uXG4gICAgICBpbml0aWFsUHJvcHM6IGFueVxuICAgICAgcGFnZUxvYWRlcjogYW55XG4gICAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgICAgIEFwcDogQ29tcG9uZW50VHlwZVxuICAgICAgd3JhcEFwcDogKEFwcDogQ29tcG9uZW50VHlwZSkgPT4gYW55XG4gICAgICBlcnI/OiBFcnJvclxuICAgICAgaXNGYWxsYmFjazogYm9vbGVhblxuICAgIH1cbiAgKSB7XG4gICAgLy8gcmVwcmVzZW50cyB0aGUgY3VycmVudCBjb21wb25lbnQga2V5XG4gICAgdGhpcy5yb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuXG4gICAgLy8gc2V0IHVwIHRoZSBjb21wb25lbnQgY2FjaGUgKGJ5IHJvdXRlIGtleXMpXG4gICAgdGhpcy5jb21wb25lbnRzID0ge31cbiAgICAvLyBXZSBzaG91bGQgbm90IGtlZXAgdGhlIGNhY2hlLCBpZiB0aGVyZSdzIGFuIGVycm9yXG4gICAgLy8gT3RoZXJ3aXNlLCB0aGlzIGNhdXNlIGlzc3VlcyB3aGVuIHdoZW4gZ29pbmcgYmFjayBhbmRcbiAgICAvLyBjb21lIGFnYWluIHRvIHRoZSBlcnJvcmVkIHBhZ2UuXG4gICAgaWYgKHBhdGhuYW1lICE9PSAnL19lcnJvcicpIHtcbiAgICAgIHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSA9IHtcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBwcm9wczogaW5pdGlhbFByb3BzLFxuICAgICAgICBlcnIsXG4gICAgICAgIF9fTl9TU0c6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTRyxcbiAgICAgICAgX19OX1NTUDogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NQLFxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuY29tcG9uZW50c1snL19hcHAnXSA9IHsgQ29tcG9uZW50OiBBcHAgfVxuXG4gICAgLy8gQmFja3dhcmRzIGNvbXBhdCBmb3IgUm91dGVyLnJvdXRlci5ldmVudHNcbiAgICAvLyBUT0RPOiBTaG91bGQgYmUgcmVtb3ZlIHRoZSBmb2xsb3dpbmcgbWFqb3IgdmVyc2lvbiBhcyBpdCB3YXMgbmV2ZXIgZG9jdW1lbnRlZFxuICAgIHRoaXMuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gICAgdGhpcy5wYWdlTG9hZGVyID0gcGFnZUxvYWRlclxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIC8vIGlmIGF1dG8gcHJlcmVuZGVyZWQgYW5kIGR5bmFtaWMgcm91dGUgd2FpdCB0byB1cGRhdGUgYXNQYXRoXG4gICAgLy8gdW50aWwgYWZ0ZXIgbW91bnQgdG8gcHJldmVudCBoeWRyYXRpb24gbWlzbWF0Y2hcbiAgICB0aGlzLmFzUGF0aCA9XG4gICAgICAvLyBAdHMtaWdub3JlIHRoaXMgaXMgdGVtcG9yYXJpbHkgZ2xvYmFsIChhdHRhY2hlZCB0byB3aW5kb3cpXG4gICAgICBpc0R5bmFtaWNSb3V0ZShwYXRobmFtZSkgJiYgX19ORVhUX0RBVEFfXy5hdXRvRXhwb3J0ID8gcGF0aG5hbWUgOiBhc1xuICAgIHRoaXMuYmFzZVBhdGggPSBiYXNlUGF0aFxuICAgIHRoaXMuc3ViID0gc3Vic2NyaXB0aW9uXG4gICAgdGhpcy5jbGMgPSBudWxsXG4gICAgdGhpcy5fd3JhcEFwcCA9IHdyYXBBcHBcbiAgICAvLyBtYWtlIHN1cmUgdG8gaWdub3JlIGV4dHJhIHBvcFN0YXRlIGluIHNhZmFyaSBvbiBuYXZpZ2F0aW5nXG4gICAgLy8gYmFjayBmcm9tIGV4dGVybmFsIHNpdGVcbiAgICB0aGlzLmlzU3NyID0gdHJ1ZVxuXG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gaXNGYWxsYmFja1xuXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBtYWtlIHN1cmUgXCJhc1wiIGRvZXNuJ3Qgc3RhcnQgd2l0aCBkb3VibGUgc2xhc2hlcyBvciBlbHNlIGl0IGNhblxuICAgICAgLy8gdGhyb3cgYW4gZXJyb3IgYXMgaXQncyBjb25zaWRlcmVkIGludmFsaWRcbiAgICAgIGlmIChhcy5zdWJzdHIoMCwgMikgIT09ICcvLycpIHtcbiAgICAgICAgLy8gaW4gb3JkZXIgZm9yIGBlLnN0YXRlYCB0byB3b3JrIG9uIHRoZSBgb25wb3BzdGF0ZWAgZXZlbnRcbiAgICAgICAgLy8gd2UgaGF2ZSB0byByZWdpc3RlciB0aGUgaW5pdGlhbCByb3V0ZSB1cG9uIGluaXRpYWxpemF0aW9uXG5cbiAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZSksIHF1ZXJ5IH0pLFxuICAgICAgICAgIGdldFVSTCgpXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgdGhpcy5vblBvcFN0YXRlKVxuXG4gICAgICAvLyBlbmFibGUgY3VzdG9tIHNjcm9sbCByZXN0b3JhdGlvbiBoYW5kbGluZyB3aGVuIGF2YWlsYWJsZVxuICAgICAgLy8gb3RoZXJ3aXNlIGZhbGxiYWNrIHRvIGJyb3dzZXIncyBkZWZhdWx0IGhhbmRsaW5nXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5zY3JvbGxSZXN0b3JhdGlvbiA9ICdtYW51YWwnXG5cbiAgICAgICAgICBsZXQgc2Nyb2xsRGVib3VuY2VUaW1lb3V0OiB1bmRlZmluZWQgfCBOb2RlSlMuVGltZW91dFxuXG4gICAgICAgICAgY29uc3QgZGVib3VuY2VkU2Nyb2xsU2F2ZSA9ICgpID0+IHtcbiAgICAgICAgICAgIGlmIChzY3JvbGxEZWJvdW5jZVRpbWVvdXQpIGNsZWFyVGltZW91dChzY3JvbGxEZWJvdW5jZVRpbWVvdXQpXG5cbiAgICAgICAgICAgIHNjcm9sbERlYm91bmNlVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCB7IHVybCwgYXM6IGN1ckFzLCBvcHRpb25zIH0gPSBoaXN0b3J5LnN0YXRlXG4gICAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgICAgICAgICAgdXJsLFxuICAgICAgICAgICAgICAgIGN1ckFzLFxuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMsIHtcbiAgICAgICAgICAgICAgICAgIF9OX1g6IHdpbmRvdy5zY3JvbGxYLFxuICAgICAgICAgICAgICAgICAgX05fWTogd2luZG93LnNjcm9sbFksXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSwgMTApXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGRlYm91bmNlZFNjcm9sbFNhdmUpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBAZGVwcmVjYXRlZCBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eSBldmVuIHRob3VnaCBpdCdzIGEgcHJpdmF0ZSBtZXRob2QuXG4gIHN0YXRpYyBfcmV3cml0ZVVybEZvck5leHRFeHBvcnQodXJsOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfRVhQT1JUX1RSQUlMSU5HX1NMQVNIKSB7XG4gICAgICBjb25zdCByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCA9IHJlcXVpcmUoJy4vcmV3cml0ZS11cmwtZm9yLWV4cG9ydCcpXG4gICAgICAgIC5yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydFxuICAgICAgcmV0dXJuIHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0KHVybClcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHVybFxuICAgIH1cbiAgfVxuXG4gIG9uUG9wU3RhdGUgPSAoZTogUG9wU3RhdGVFdmVudCk6IHZvaWQgPT4ge1xuICAgIGlmICghZS5zdGF0ZSkge1xuICAgICAgLy8gV2UgZ2V0IHN0YXRlIGFzIHVuZGVmaW5lZCBmb3IgdHdvIHJlYXNvbnMuXG4gICAgICAvLyAgMS4gV2l0aCBvbGRlciBzYWZhcmkgKDwgOCkgYW5kIG9sZGVyIGNocm9tZSAoPCAzNClcbiAgICAgIC8vICAyLiBXaGVuIHRoZSBVUkwgY2hhbmdlZCB3aXRoICNcbiAgICAgIC8vXG4gICAgICAvLyBJbiB0aGUgYm90aCBjYXNlcywgd2UgZG9uJ3QgbmVlZCB0byBwcm9jZWVkIGFuZCBjaGFuZ2UgdGhlIHJvdXRlLlxuICAgICAgLy8gKGFzIGl0J3MgYWxyZWFkeSBjaGFuZ2VkKVxuICAgICAgLy8gQnV0IHdlIGNhbiBzaW1wbHkgcmVwbGFjZSB0aGUgc3RhdGUgd2l0aCB0aGUgbmV3IGNoYW5nZXMuXG4gICAgICAvLyBBY3R1YWxseSwgZm9yICgxKSB3ZSBkb24ndCBuZWVkIHRvIG5vdGhpbmcuIEJ1dCBpdCdzIGhhcmQgdG8gZGV0ZWN0IHRoYXQgZXZlbnQuXG4gICAgICAvLyBTbywgZG9pbmcgdGhlIGZvbGxvd2luZyBmb3IgKDEpIGRvZXMgbm8gaGFybS5cbiAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSB0aGlzXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUpLCBxdWVyeSB9KSxcbiAgICAgICAgZ2V0VVJMKClcbiAgICAgIClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHsgdXJsLCBhcywgb3B0aW9ucywgX19OIH0gPSBlLnN0YXRlXG4gICAgaWYgKCFfX04pIHtcbiAgICAgIC8vIHRoaXMgaGlzdG9yeSBzdGF0ZSB3YXNuJ3QgY3JlYXRlZCBieSBuZXh0LmpzIHNvIGl0IGNhbiBiZSBpZ25vcmVkXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICAvLyBNYWtlIHN1cmUgd2UgZG9uJ3QgcmUtcmVuZGVyIG9uIGluaXRpYWwgbG9hZCxcbiAgICAvLyBjYW4gYmUgY2F1c2VkIGJ5IG5hdmlnYXRpbmcgYmFjayBmcm9tIGFuIGV4dGVybmFsIHNpdGVcbiAgICBpZiAodGhpcy5pc1NzciAmJiBhcyA9PT0gdGhpcy5hc1BhdGggJiYgcGF0aG5hbWUgPT09IHRoaXMucGF0aG5hbWUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIElmIHRoZSBkb3duc3RyZWFtIGFwcGxpY2F0aW9uIHJldHVybnMgZmFsc3ksIHJldHVybi5cbiAgICAvLyBUaGV5IHdpbGwgdGhlbiBiZSByZXNwb25zaWJsZSBmb3IgaGFuZGxpbmcgdGhlIGV2ZW50LlxuICAgIGlmICh0aGlzLl9icHMgJiYgIXRoaXMuX2JwcyhlLnN0YXRlKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICh0eXBlb2YgdXJsID09PSAndW5kZWZpbmVkJyB8fCB0eXBlb2YgYXMgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAnYHBvcHN0YXRlYCBldmVudCB0cmlnZ2VyZWQgYnV0IGBldmVudC5zdGF0ZWAgZGlkIG5vdCBoYXZlIGB1cmxgIG9yIGBhc2AgaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvcG9wc3RhdGUtc3RhdGUtZW1wdHknXG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5jaGFuZ2UoJ3JlcGxhY2VTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICB1cGRhdGUocm91dGU6IHN0cmluZywgbW9kOiBhbnkpIHtcbiAgICBjb25zdCBDb21wb25lbnQ6IENvbXBvbmVudFR5cGUgPSBtb2QuZGVmYXVsdCB8fCBtb2RcbiAgICBjb25zdCBkYXRhID0gdGhpcy5jb21wb25lbnRzW3JvdXRlXVxuICAgIGlmICghZGF0YSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBDYW5ub3QgdXBkYXRlIHVuYXZhaWxhYmxlIHJvdXRlOiAke3JvdXRlfWApXG4gICAgfVxuXG4gICAgY29uc3QgbmV3RGF0YSA9IE9iamVjdC5hc3NpZ24oe30sIGRhdGEsIHtcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIF9fTl9TU0c6IG1vZC5fX05fU1NHLFxuICAgICAgX19OX1NTUDogbW9kLl9fTl9TU1AsXG4gICAgfSlcbiAgICB0aGlzLmNvbXBvbmVudHNbcm91dGVdID0gbmV3RGF0YVxuXG4gICAgLy8gcGFnZXMvX2FwcC5qcyB1cGRhdGVkXG4gICAgaWYgKHJvdXRlID09PSAnL19hcHAnKSB7XG4gICAgICB0aGlzLm5vdGlmeSh0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0pXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAocm91dGUgPT09IHRoaXMucm91dGUpIHtcbiAgICAgIHRoaXMubm90aWZ5KG5ld0RhdGEpXG4gICAgfVxuICB9XG5cbiAgcmVsb2FkKCk6IHZvaWQge1xuICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxuICB9XG5cbiAgLyoqXG4gICAqIEdvIGJhY2sgaW4gaGlzdG9yeVxuICAgKi9cbiAgYmFjaygpIHtcbiAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKClcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGBwdXNoU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcHVzaCh1cmw6IFVybCwgYXM6IFVybCA9IHVybCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgOyh7IHVybCwgYXMgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSlcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3B1c2hTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcmVwbGFjZVN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHJlcGxhY2UodXJsOiBVcmwsIGFzOiBVcmwgPSB1cmwsIG9wdGlvbnMgPSB7fSkge1xuICAgIDsoeyB1cmwsIGFzIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpXG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgYXN5bmMgY2hhbmdlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhczogc3RyaW5nLFxuICAgIG9wdGlvbnM6IGFueVxuICApOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICBpZiAoIW9wdGlvbnMuX2gpIHtcbiAgICAgIHRoaXMuaXNTc3IgPSBmYWxzZVxuICAgIH1cbiAgICAvLyBtYXJraW5nIHJvdXRlIGNoYW5nZXMgYXMgYSBuYXZpZ2F0aW9uIHN0YXJ0IGVudHJ5XG4gICAgaWYgKFNUKSB7XG4gICAgICBwZXJmb3JtYW5jZS5tYXJrKCdyb3V0ZUNoYW5nZScpXG4gICAgfVxuXG4gICAgLy8gQWRkIHRoZSBlbmRpbmcgc2xhc2ggdG8gdGhlIHBhdGhzLiBTbywgd2UgY2FuIHNlcnZlIHRoZVxuICAgIC8vIFwiPHBhZ2U+L2luZGV4Lmh0bWxcIiBkaXJlY3RseSBmb3IgdGhlIFNTUiBwYWdlLlxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfRVhQT1JUX1RSQUlMSU5HX1NMQVNIKSB7XG4gICAgICBjb25zdCByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCA9IHJlcXVpcmUoJy4vcmV3cml0ZS11cmwtZm9yLWV4cG9ydCcpXG4gICAgICAgIC5yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydFxuICAgICAgLy8gQHRzLWlnbm9yZSB0aGlzIGlzIHRlbXBvcmFyaWx5IGdsb2JhbCAoYXR0YWNoZWQgdG8gd2luZG93KVxuICAgICAgaWYgKF9fTkVYVF9EQVRBX18ubmV4dEV4cG9ydCkge1xuICAgICAgICBhcyA9IHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0KGFzKVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLl9pbkZsaWdodFJvdXRlKSB7XG4gICAgICB0aGlzLmFib3J0Q29tcG9uZW50TG9hZCh0aGlzLl9pbkZsaWdodFJvdXRlKVxuICAgIH1cblxuICAgIGNvbnN0IGNsZWFuZWRBcyA9IGRlbEJhc2VQYXRoKGFzKVxuICAgIHRoaXMuX2luRmxpZ2h0Um91dGUgPSBhc1xuXG4gICAgLy8gSWYgdGhlIHVybCBjaGFuZ2UgaXMgb25seSByZWxhdGVkIHRvIGEgaGFzaCBjaGFuZ2VcbiAgICAvLyBXZSBzaG91bGQgbm90IHByb2NlZWQuIFdlIHNob3VsZCBvbmx5IGNoYW5nZSB0aGUgc3RhdGUuXG5cbiAgICAvLyBXQVJOSU5HOiBgX2hgIGlzIGFuIGludGVybmFsIG9wdGlvbiBmb3IgaGFuZGluZyBOZXh0LmpzIGNsaWVudC1zaWRlXG4gICAgLy8gaHlkcmF0aW9uLiBZb3VyIGFwcCBzaG91bGQgX25ldmVyXyB1c2UgdGhpcyBwcm9wZXJ0eS4gSXQgbWF5IGNoYW5nZSBhdFxuICAgIC8vIGFueSB0aW1lIHdpdGhvdXQgbm90aWNlLlxuICAgIGlmICghb3B0aW9ucy5faCAmJiB0aGlzLm9ubHlBSGFzaENoYW5nZShjbGVhbmVkQXMpKSB7XG4gICAgICB0aGlzLmFzUGF0aCA9IGNsZWFuZWRBc1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlU3RhcnQnLCBhcylcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKVxuICAgICAgdGhpcy5zY3JvbGxUb0hhc2goY2xlYW5lZEFzKVxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlQ29tcGxldGUnLCBhcylcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgY29uc3QgcGFyc2VkID0gdHJ5UGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICBpZiAoIXBhcnNlZCkgcmV0dXJuIGZhbHNlXG5cbiAgICBsZXQgeyBwYXRobmFtZSwgc2VhcmNoUGFyYW1zIH0gPSBwYXJzZWRcbiAgICBjb25zdCBxdWVyeSA9IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoc2VhcmNoUGFyYW1zKVxuXG4gICAgLy8gdXJsIGFuZCBhcyBzaG91bGQgYWx3YXlzIGJlIHByZWZpeGVkIHdpdGggYmFzZVBhdGggYnkgdGhpc1xuICAgIC8vIHBvaW50IGJ5IGVpdGhlciBuZXh0L2xpbmsgb3Igcm91dGVyLnB1c2gvcmVwbGFjZSBzbyBzdHJpcCB0aGVcbiAgICAvLyBiYXNlUGF0aCBmcm9tIHRoZSBwYXRobmFtZSB0byBtYXRjaCB0aGUgcGFnZXMgZGlyIDEtdG8tMVxuICAgIHBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgID8gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goZGVsQmFzZVBhdGgocGF0aG5hbWUpKVxuICAgICAgOiBwYXRobmFtZVxuXG4gICAgLy8gSWYgYXNrZWQgdG8gY2hhbmdlIHRoZSBjdXJyZW50IFVSTCB3ZSBzaG91bGQgcmVsb2FkIHRoZSBjdXJyZW50IHBhZ2VcbiAgICAvLyAobm90IGxvY2F0aW9uLnJlbG9hZCgpIGJ1dCByZWxvYWQgZ2V0SW5pdGlhbFByb3BzIGFuZCBvdGhlciBOZXh0LmpzIHN0dWZmcylcbiAgICAvLyBXZSBhbHNvIG5lZWQgdG8gc2V0IHRoZSBtZXRob2QgPSByZXBsYWNlU3RhdGUgYWx3YXlzXG4gICAgLy8gYXMgdGhpcyBzaG91bGQgbm90IGdvIGludG8gdGhlIGhpc3RvcnkgKFRoYXQncyBob3cgYnJvd3NlcnMgd29yaylcbiAgICAvLyBXZSBzaG91bGQgY29tcGFyZSB0aGUgbmV3IGFzUGF0aCB0byB0aGUgY3VycmVudCBhc1BhdGgsIG5vdCB0aGUgdXJsXG4gICAgaWYgKCF0aGlzLnVybElzTmV3KGNsZWFuZWRBcykpIHtcbiAgICAgIG1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnXG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcbiAgICBjb25zdCB7IHNoYWxsb3cgPSBmYWxzZSB9ID0gb3B0aW9uc1xuXG4gICAgaWYgKGlzRHluYW1pY1JvdXRlKHJvdXRlKSkge1xuICAgICAgY29uc3QgeyBwYXRobmFtZTogYXNQYXRobmFtZSB9ID0gcGFyc2VSZWxhdGl2ZVVybChjbGVhbmVkQXMpXG4gICAgICBjb25zdCByb3V0ZVJlZ2V4ID0gZ2V0Um91dGVSZWdleChyb3V0ZSlcbiAgICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleCkoYXNQYXRobmFtZSlcbiAgICAgIGlmICghcm91dGVNYXRjaCkge1xuICAgICAgICBjb25zdCBtaXNzaW5nUGFyYW1zID0gT2JqZWN0LmtleXMocm91dGVSZWdleC5ncm91cHMpLmZpbHRlcihcbiAgICAgICAgICAocGFyYW0pID0+ICFxdWVyeVtwYXJhbV1cbiAgICAgICAgKVxuXG4gICAgICAgIGlmIChtaXNzaW5nUGFyYW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgICBgTWlzbWF0Y2hpbmcgXFxgYXNcXGAgYW5kIFxcYGhyZWZcXGAgZmFpbGVkIHRvIG1hbnVhbGx5IHByb3ZpZGUgYCArXG4gICAgICAgICAgICAgICAgYHRoZSBwYXJhbXM6ICR7bWlzc2luZ1BhcmFtcy5qb2luKFxuICAgICAgICAgICAgICAgICAgJywgJ1xuICAgICAgICAgICAgICAgICl9IGluIHRoZSBcXGBocmVmXFxgJ3MgXFxgcXVlcnlcXGBgXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgYFRoZSBwcm92aWRlZCBcXGBhc1xcYCB2YWx1ZSAoJHthc1BhdGhuYW1lfSkgaXMgaW5jb21wYXRpYmxlIHdpdGggdGhlIFxcYGhyZWZcXGAgdmFsdWUgKCR7cm91dGV9KS4gYCArXG4gICAgICAgICAgICAgIGBSZWFkIG1vcmU6IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2luY29tcGF0aWJsZS1ocmVmLWFzYFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gTWVyZ2UgcGFyYW1zIGludG8gYHF1ZXJ5YCwgb3ZlcndyaXRpbmcgYW55IHNwZWNpZmllZCBpbiBzZWFyY2hcbiAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeSwgcm91dGVNYXRjaClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlU3RhcnQnLCBhcylcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCByb3V0ZUluZm8gPSBhd2FpdCB0aGlzLmdldFJvdXRlSW5mbyhcbiAgICAgICAgcm91dGUsXG4gICAgICAgIHBhdGhuYW1lLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgYXMsXG4gICAgICAgIHNoYWxsb3dcbiAgICAgIClcbiAgICAgIGNvbnN0IHsgZXJyb3IgfSA9IHJvdXRlSW5mb1xuXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLCBhcylcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKVxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCBhcHBDb21wOiBhbnkgPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50XG4gICAgICAgIDsod2luZG93IGFzIGFueSkubmV4dC5pc1ByZXJlbmRlcmVkID1cbiAgICAgICAgICBhcHBDb21wLmdldEluaXRpYWxQcm9wcyA9PT0gYXBwQ29tcC5vcmlnR2V0SW5pdGlhbFByb3BzICYmXG4gICAgICAgICAgIShyb3V0ZUluZm8uQ29tcG9uZW50IGFzIGFueSkuZ2V0SW5pdGlhbFByb3BzXG4gICAgICB9XG5cbiAgICAgIGF3YWl0IHRoaXMuc2V0KHJvdXRlLCBwYXRobmFtZSEsIHF1ZXJ5LCBjbGVhbmVkQXMsIHJvdXRlSW5mbylcblxuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVycm9yLCBjbGVhbmVkQXMpXG4gICAgICAgIHRocm93IGVycm9yXG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiAmJiAnX05fWCcgaW4gb3B0aW9ucykge1xuICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbyhvcHRpb25zLl9OX1gsIG9wdGlvbnMuX05fWSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgYXMpXG5cbiAgICAgIHJldHVybiB0cnVlXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICAgIHRocm93IGVyclxuICAgIH1cbiAgfVxuXG4gIGNoYW5nZVN0YXRlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhczogc3RyaW5nLFxuICAgIG9wdGlvbnMgPSB7fVxuICApOiB2b2lkIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkgaXMgbm90IGF2YWlsYWJsZS5gKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeVttZXRob2RdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeS4ke21ldGhvZH0gaXMgbm90IGF2YWlsYWJsZWApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChtZXRob2QgIT09ICdwdXNoU3RhdGUnIHx8IGdldFVSTCgpICE9PSBhcykge1xuICAgICAgd2luZG93Lmhpc3RvcnlbbWV0aG9kXShcbiAgICAgICAge1xuICAgICAgICAgIHVybCxcbiAgICAgICAgICBhcyxcbiAgICAgICAgICBvcHRpb25zLFxuICAgICAgICAgIF9fTjogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgLy8gTW9zdCBicm93c2VycyBjdXJyZW50bHkgaWdub3JlcyB0aGlzIHBhcmFtZXRlciwgYWx0aG91Z2ggdGhleSBtYXkgdXNlIGl0IGluIHRoZSBmdXR1cmUuXG4gICAgICAgIC8vIFBhc3NpbmcgdGhlIGVtcHR5IHN0cmluZyBoZXJlIHNob3VsZCBiZSBzYWZlIGFnYWluc3QgZnV0dXJlIGNoYW5nZXMgdG8gdGhlIG1ldGhvZC5cbiAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hpc3RvcnkvcmVwbGFjZVN0YXRlXG4gICAgICAgICcnLFxuICAgICAgICBhc1xuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGhhbmRsZVJvdXRlSW5mb0Vycm9yKFxuICAgIGVycjogRXJyb3IgJiB7IGNvZGU6IGFueTsgY2FuY2VsbGVkOiBib29sZWFuIH0sXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogYW55LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgbG9hZEVycm9yRmFpbD86IGJvb2xlYW5cbiAgKTogUHJvbWlzZTxSb3V0ZUluZm8+IHtcbiAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgLy8gYnViYmxlIHVwIGNhbmNlbGxhdGlvbiBlcnJvcnNcbiAgICAgIHRocm93IGVyclxuICAgIH1cblxuICAgIGlmIChlcnIuY29kZSA9PT0gJ1BBR0VfTE9BRF9FUlJPUicgfHwgbG9hZEVycm9yRmFpbCkge1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyLCBhcylcblxuICAgICAgLy8gSWYgd2UgY2FuJ3QgbG9hZCB0aGUgcGFnZSBpdCBjb3VsZCBiZSBvbmUgb2YgZm9sbG93aW5nIHJlYXNvbnNcbiAgICAgIC8vICAxLiBQYWdlIGRvZXNuJ3QgZXhpc3RzXG4gICAgICAvLyAgMi4gUGFnZSBkb2VzIGV4aXN0IGluIGEgZGlmZmVyZW50IHpvbmVcbiAgICAgIC8vICAzLiBJbnRlcm5hbCBlcnJvciB3aGlsZSBsb2FkaW5nIHRoZSBwYWdlXG5cbiAgICAgIC8vIFNvLCBkb2luZyBhIGhhcmQgcmVsb2FkIGlzIHRoZSBwcm9wZXIgd2F5IHRvIGRlYWwgd2l0aCB0aGlzLlxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhc1xuXG4gICAgICAvLyBDaGFuZ2luZyB0aGUgVVJMIGRvZXNuJ3QgYmxvY2sgZXhlY3V0aW5nIHRoZSBjdXJyZW50IGNvZGUgcGF0aC5cbiAgICAgIC8vIFNvIGxldCdzIHRocm93IGEgY2FuY2VsbGF0aW9uIGVycm9yIHN0b3AgdGhlIHJvdXRpbmcgbG9naWMuXG4gICAgICB0aHJvdyBidWlsZENhbmNlbGxhdGlvbkVycm9yKClcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgeyBwYWdlOiBDb21wb25lbnQgfSA9IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoJy9fZXJyb3InKVxuICAgICAgY29uc3Qgcm91dGVJbmZvOiBSb3V0ZUluZm8gPSB7IENvbXBvbmVudCwgZXJyLCBlcnJvcjogZXJyIH1cblxuICAgICAgdHJ5IHtcbiAgICAgICAgcm91dGVJbmZvLnByb3BzID0gYXdhaXQgdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCB7XG4gICAgICAgICAgZXJyLFxuICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICB9IGFzIGFueSlcbiAgICAgIH0gY2F0Y2ggKGdpcEVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBlcnJvciBwYWdlIGBnZXRJbml0aWFsUHJvcHNgOiAnLCBnaXBFcnIpXG4gICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHt9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICB9IGNhdGNoIChyb3V0ZUluZm9FcnIpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKHJvdXRlSW5mb0VyciwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgdHJ1ZSlcbiAgICB9XG4gIH1cblxuICBhc3luYyBnZXRSb3V0ZUluZm8oXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBhbnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBzaGFsbG93OiBib29sZWFuID0gZmFsc2VcbiAgKTogUHJvbWlzZTxSb3V0ZUluZm8+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgY2FjaGVkUm91dGVJbmZvID0gdGhpcy5jb21wb25lbnRzW3JvdXRlXVxuXG4gICAgICBpZiAoc2hhbGxvdyAmJiBjYWNoZWRSb3V0ZUluZm8gJiYgdGhpcy5yb3V0ZSA9PT0gcm91dGUpIHtcbiAgICAgICAgcmV0dXJuIGNhY2hlZFJvdXRlSW5mb1xuICAgICAgfVxuXG4gICAgICBjb25zdCByb3V0ZUluZm8gPSBjYWNoZWRSb3V0ZUluZm9cbiAgICAgICAgPyBjYWNoZWRSb3V0ZUluZm9cbiAgICAgICAgOiBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KHJvdXRlKS50aGVuKFxuICAgICAgICAgICAgKHJlcykgPT5cbiAgICAgICAgICAgICAgKHtcbiAgICAgICAgICAgICAgICBDb21wb25lbnQ6IHJlcy5wYWdlLFxuICAgICAgICAgICAgICAgIF9fTl9TU0c6IHJlcy5tb2QuX19OX1NTRyxcbiAgICAgICAgICAgICAgICBfX05fU1NQOiByZXMubW9kLl9fTl9TU1AsXG4gICAgICAgICAgICAgIH0gYXMgUm91dGVJbmZvKVxuICAgICAgICAgIClcblxuICAgICAgY29uc3QgeyBDb21wb25lbnQsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mb1xuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCB7IGlzVmFsaWRFbGVtZW50VHlwZSB9ID0gcmVxdWlyZSgncmVhY3QtaXMnKVxuICAgICAgICBpZiAoIWlzVmFsaWRFbGVtZW50VHlwZShDb21wb25lbnQpKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgYFRoZSBkZWZhdWx0IGV4cG9ydCBpcyBub3QgYSBSZWFjdCBDb21wb25lbnQgaW4gcGFnZTogXCIke3BhdGhuYW1lfVwiYFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsZXQgZGF0YUhyZWY6IHN0cmluZyB8IHVuZGVmaW5lZFxuXG4gICAgICBpZiAoX19OX1NTRyB8fCBfX05fU1NQKSB7XG4gICAgICAgIGRhdGFIcmVmID0gdGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWUsIHF1ZXJ5IH0pLFxuICAgICAgICAgIGFzLFxuICAgICAgICAgIF9fTl9TU0dcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICBjb25zdCBwcm9wcyA9IGF3YWl0IHRoaXMuX2dldERhdGE8Um91dGVJbmZvPigoKSA9PlxuICAgICAgICBfX05fU1NHXG4gICAgICAgICAgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmISlcbiAgICAgICAgICA6IF9fTl9TU1BcbiAgICAgICAgICA/IHRoaXMuX2dldFNlcnZlckRhdGEoZGF0YUhyZWYhKVxuICAgICAgICAgIDogdGhpcy5nZXRJbml0aWFsUHJvcHMoXG4gICAgICAgICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgICAgICAgLy8gd2UgcHJvdmlkZSBBcHBUcmVlIGxhdGVyIHNvIHRoaXMgbmVlZHMgdG8gYmUgYGFueWBcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgICAgIGFzUGF0aDogYXMsXG4gICAgICAgICAgICAgIH0gYXMgYW55XG4gICAgICAgICAgICApXG4gICAgICApXG4gICAgICByb3V0ZUluZm8ucHJvcHMgPSBwcm9wc1xuICAgICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IHJvdXRlSW5mb1xuICAgICAgcmV0dXJuIHJvdXRlSW5mb1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3IoZXJyLCBwYXRobmFtZSwgcXVlcnksIGFzKVxuICAgIH1cbiAgfVxuXG4gIHNldChcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IGFueSxcbiAgICBhczogc3RyaW5nLFxuICAgIGRhdGE6IFJvdXRlSW5mb1xuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBmYWxzZVxuXG4gICAgdGhpcy5yb3V0ZSA9IHJvdXRlXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgdGhpcy5hc1BhdGggPSBhc1xuICAgIHJldHVybiB0aGlzLm5vdGlmeShkYXRhKVxuICB9XG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIHRvIGV4ZWN1dGUgYmVmb3JlIHJlcGxhY2luZyByb3V0ZXIgc3RhdGVcbiAgICogQHBhcmFtIGNiIGNhbGxiYWNrIHRvIGJlIGV4ZWN1dGVkXG4gICAqL1xuICBiZWZvcmVQb3BTdGF0ZShjYjogQmVmb3JlUG9wU3RhdGVDYWxsYmFjaykge1xuICAgIHRoaXMuX2JwcyA9IGNiXG4gIH1cblxuICBvbmx5QUhhc2hDaGFuZ2UoYXM6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGlmICghdGhpcy5hc1BhdGgpIHJldHVybiBmYWxzZVxuICAgIGNvbnN0IFtvbGRVcmxOb0hhc2gsIG9sZEhhc2hdID0gdGhpcy5hc1BhdGguc3BsaXQoJyMnKVxuICAgIGNvbnN0IFtuZXdVcmxOb0hhc2gsIG5ld0hhc2hdID0gYXMuc3BsaXQoJyMnKVxuXG4gICAgLy8gTWFrZXMgc3VyZSB3ZSBzY3JvbGwgdG8gdGhlIHByb3ZpZGVkIGhhc2ggaWYgdGhlIHVybC9oYXNoIGFyZSB0aGUgc2FtZVxuICAgIGlmIChuZXdIYXNoICYmIG9sZFVybE5vSGFzaCA9PT0gbmV3VXJsTm9IYXNoICYmIG9sZEhhc2ggPT09IG5ld0hhc2gpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIHVybHMgYXJlIGNoYW5nZSwgdGhlcmUncyBtb3JlIHRoYW4gYSBoYXNoIGNoYW5nZVxuICAgIGlmIChvbGRVcmxOb0hhc2ggIT09IG5ld1VybE5vSGFzaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGhhc2ggaGFzIGNoYW5nZWQsIHRoZW4gaXQncyBhIGhhc2ggb25seSBjaGFuZ2UuXG4gICAgLy8gVGhpcyBjaGVjayBpcyBuZWNlc3NhcnkgdG8gaGFuZGxlIGJvdGggdGhlIGVudGVyIGFuZFxuICAgIC8vIGxlYXZlIGhhc2ggPT09ICcnIGNhc2VzLiBUaGUgaWRlbnRpdHkgY2FzZSBmYWxscyB0aHJvdWdoXG4gICAgLy8gYW5kIGlzIHRyZWF0ZWQgYXMgYSBuZXh0IHJlbG9hZC5cbiAgICByZXR1cm4gb2xkSGFzaCAhPT0gbmV3SGFzaFxuICB9XG5cbiAgc2Nyb2xsVG9IYXNoKGFzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBbLCBoYXNoXSA9IGFzLnNwbGl0KCcjJylcbiAgICAvLyBTY3JvbGwgdG8gdG9wIGlmIHRoZSBoYXNoIGlzIGp1c3QgYCNgIHdpdGggbm8gdmFsdWVcbiAgICBpZiAoaGFzaCA9PT0gJycpIHtcbiAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gRmlyc3Qgd2UgY2hlY2sgaWYgdGhlIGVsZW1lbnQgYnkgaWQgaXMgZm91bmRcbiAgICBjb25zdCBpZEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaClcbiAgICBpZiAoaWRFbCkge1xuICAgICAgaWRFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgLy8gSWYgdGhlcmUncyBubyBlbGVtZW50IHdpdGggdGhlIGlkLCB3ZSBjaGVjayB0aGUgYG5hbWVgIHByb3BlcnR5XG4gICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgY29uc3QgbmFtZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoaGFzaClbMF1cbiAgICBpZiAobmFtZUVsKSB7XG4gICAgICBuYW1lRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgIH1cbiAgfVxuXG4gIHVybElzTmV3KGFzUGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYXNQYXRoICE9PSBhc1BhdGhcbiAgfVxuXG4gIC8qKlxuICAgKiBQcmVmZXRjaCBwYWdlIGNvZGUsIHlvdSBtYXkgd2FpdCBmb3IgdGhlIGRhdGEgZHVyaW5nIHBhZ2UgcmVuZGVyaW5nLlxuICAgKiBUaGlzIGZlYXR1cmUgb25seSB3b3JrcyBpbiBwcm9kdWN0aW9uIVxuICAgKiBAcGFyYW0gdXJsIHRoZSBocmVmIG9mIHByZWZldGNoZWQgcGFnZVxuICAgKiBAcGFyYW0gYXNQYXRoIHRoZSBhcyBwYXRoIG9mIHRoZSBwcmVmZXRjaGVkIHBhZ2VcbiAgICovXG4gIGFzeW5jIHByZWZldGNoKFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzUGF0aDogc3RyaW5nID0gdXJsLFxuICAgIG9wdGlvbnM6IFByZWZldGNoT3B0aW9ucyA9IHt9XG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IHBhcnNlZCA9IHRyeVBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgaWYgKCFwYXJzZWQpIHJldHVyblxuXG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gcGFyc2VkXG5cbiAgICAvLyBQcmVmZXRjaCBpcyBub3Qgc3VwcG9ydGVkIGluIGRldmVsb3BtZW50IG1vZGUgYmVjYXVzZSBpdCB3b3VsZCB0cmlnZ2VyIG9uLWRlbWFuZC1lbnRyaWVzXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG4gICAgYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgdGhpcy5wYWdlTG9hZGVyLnByZWZldGNoRGF0YSh1cmwsIGFzUGF0aCksXG4gICAgICB0aGlzLnBhZ2VMb2FkZXJbb3B0aW9ucy5wcmlvcml0eSA/ICdsb2FkUGFnZScgOiAncHJlZmV0Y2gnXShyb3V0ZSksXG4gICAgXSlcbiAgfVxuXG4gIGFzeW5jIGZldGNoQ29tcG9uZW50KHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPENvbXBvbmVudFJlcz4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICh0aGlzLmNsYyA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9KVxuXG4gICAgY29uc3QgY29tcG9uZW50UmVzdWx0ID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmxvYWRQYWdlKHJvdXRlKVxuXG4gICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgY29uc3QgZXJyb3I6IGFueSA9IG5ldyBFcnJvcihcbiAgICAgICAgYEFib3J0IGZldGNoaW5nIGNvbXBvbmVudCBmb3Igcm91dGU6IFwiJHtyb3V0ZX1cImBcbiAgICAgIClcbiAgICAgIGVycm9yLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgIHRocm93IGVycm9yXG4gICAgfVxuXG4gICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIH1cblxuICAgIHJldHVybiBjb21wb25lbnRSZXN1bHRcbiAgfVxuXG4gIF9nZXREYXRhPFQ+KGZuOiAoKSA9PiBQcm9taXNlPFQ+KTogUHJvbWlzZTxUPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH1cbiAgICB0aGlzLmNsYyA9IGNhbmNlbFxuICAgIHJldHVybiBmbigpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgICAgfVxuXG4gICAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICAgIGNvbnN0IGVycjogYW55ID0gbmV3IEVycm9yKCdMb2FkaW5nIGluaXRpYWwgcHJvcHMgY2FuY2VsbGVkJylcbiAgICAgICAgZXJyLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSlcbiAgfVxuXG4gIF9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4ge1xuICAgIGNvbnN0IHsgaHJlZjogY2FjaGVLZXkgfSA9IG5ldyBVUkwoZGF0YUhyZWYsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKVxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nICYmIHRoaXMuc2RjW2NhY2hlS2V5XSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLnNkY1tjYWNoZUtleV0pXG4gICAgfVxuICAgIHJldHVybiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICB0aGlzLnNkY1tjYWNoZUtleV0gPSBkYXRhXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U2VydmVyRGF0YShkYXRhSHJlZjogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcilcbiAgfVxuXG4gIGdldEluaXRpYWxQcm9wcyhcbiAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGUsXG4gICAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgKTogUHJvbWlzZTxhbnk+IHtcbiAgICBjb25zdCB7IENvbXBvbmVudDogQXBwIH0gPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ11cbiAgICBjb25zdCBBcHBUcmVlID0gdGhpcy5fd3JhcEFwcChBcHApXG4gICAgY3R4LkFwcFRyZWUgPSBBcHBUcmVlXG4gICAgcmV0dXJuIGxvYWRHZXRJbml0aWFsUHJvcHM8QXBwQ29udGV4dFR5cGU8Um91dGVyPj4oQXBwLCB7XG4gICAgICBBcHBUcmVlLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgcm91dGVyOiB0aGlzLFxuICAgICAgY3R4LFxuICAgIH0pXG4gIH1cblxuICBhYm9ydENvbXBvbmVudExvYWQoYXM6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNsYykge1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpLCBhcylcbiAgICAgIHRoaXMuY2xjKClcbiAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIH1cbiAgfVxuXG4gIG5vdGlmeShkYXRhOiBSb3V0ZUluZm8pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5zdWIoZGF0YSwgdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudClcbiAgfVxufVxuIiwiLy8gRm9ybWF0IGZ1bmN0aW9uIG1vZGlmaWVkIGZyb20gbm9kZWpzXG4vLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgZW5jb2RlIGFzIGVuY29kZVF1ZXJ5c3RyaW5nIH0gZnJvbSAncXVlcnlzdHJpbmcnXG5cbmNvbnN0IHNsYXNoZWRQcm90b2NvbHMgPSAvaHR0cHM/fGZ0cHxnb3BoZXJ8ZmlsZS9cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFVybCh1cmxPYmo6IFVybE9iamVjdCkge1xuICBsZXQgeyBhdXRoLCBob3N0bmFtZSB9ID0gdXJsT2JqXG4gIGxldCBwcm90b2NvbCA9IHVybE9iai5wcm90b2NvbCB8fCAnJ1xuICBsZXQgcGF0aG5hbWUgPSB1cmxPYmoucGF0aG5hbWUgfHwgJydcbiAgbGV0IGhhc2ggPSB1cmxPYmouaGFzaCB8fCAnJ1xuICBsZXQgcXVlcnkgPSB1cmxPYmoucXVlcnkgfHwgJydcbiAgbGV0IGhvc3Q6IHN0cmluZyB8IGZhbHNlID0gZmFsc2VcblxuICBhdXRoID0gYXV0aCA/IGVuY29kZVVSSUNvbXBvbmVudChhdXRoKS5yZXBsYWNlKC8lM0EvaSwgJzonKSArICdAJyA6ICcnXG5cbiAgaWYgKHVybE9iai5ob3N0KSB7XG4gICAgaG9zdCA9IGF1dGggKyB1cmxPYmouaG9zdFxuICB9IGVsc2UgaWYgKGhvc3RuYW1lKSB7XG4gICAgaG9zdCA9IGF1dGggKyAofmhvc3RuYW1lLmluZGV4T2YoJzonKSA/IGBbJHtob3N0bmFtZX1dYCA6IGhvc3RuYW1lKVxuICAgIGlmICh1cmxPYmoucG9ydCkge1xuICAgICAgaG9zdCArPSAnOicgKyB1cmxPYmoucG9ydFxuICAgIH1cbiAgfVxuXG4gIGlmIChxdWVyeSAmJiB0eXBlb2YgcXVlcnkgPT09ICdvYmplY3QnKSB7XG4gICAgLy8gcXVlcnkgPSAnJyArIG5ldyBVUkxTZWFyY2hQYXJhbXMocXVlcnkpO1xuICAgIHF1ZXJ5ID0gZW5jb2RlUXVlcnlzdHJpbmcocXVlcnkpXG4gIH1cblxuICBsZXQgc2VhcmNoID0gdXJsT2JqLnNlYXJjaCB8fCAocXVlcnkgJiYgYD8ke3F1ZXJ5fWApIHx8ICcnXG5cbiAgaWYgKHByb3RvY29sICYmIHByb3RvY29sLnN1YnN0cigtMSkgIT09ICc6JykgcHJvdG9jb2wgKz0gJzonXG5cbiAgaWYgKFxuICAgIHVybE9iai5zbGFzaGVzIHx8XG4gICAgKCghcHJvdG9jb2wgfHwgc2xhc2hlZFByb3RvY29scy50ZXN0KHByb3RvY29sKSkgJiYgaG9zdCAhPT0gZmFsc2UpXG4gICkge1xuICAgIGhvc3QgPSAnLy8nICsgKGhvc3QgfHwgJycpXG4gICAgaWYgKHBhdGhuYW1lICYmIHBhdGhuYW1lWzBdICE9PSAnLycpIHBhdGhuYW1lID0gJy8nICsgcGF0aG5hbWVcbiAgfSBlbHNlIGlmICghaG9zdCkge1xuICAgIGhvc3QgPSAnJ1xuICB9XG5cbiAgaWYgKGhhc2ggJiYgaGFzaFswXSAhPT0gJyMnKSBoYXNoID0gJyMnICsgaGFzaFxuICBpZiAoc2VhcmNoICYmIHNlYXJjaFswXSAhPT0gJz8nKSBzZWFyY2ggPSAnPycgKyBzZWFyY2hcblxuICBwYXRobmFtZSA9IHBhdGhuYW1lLnJlcGxhY2UoL1s/I10vZywgZW5jb2RlVVJJQ29tcG9uZW50KVxuICBzZWFyY2ggPSBzZWFyY2gucmVwbGFjZSgnIycsICclMjMnKVxuXG4gIHJldHVybiBgJHtwcm90b2NvbH0ke2hvc3R9JHtwYXRobmFtZX0ke3NlYXJjaH0ke2hhc2h9YFxufVxuIiwiLy8gSWRlbnRpZnkgL1twYXJhbV0vIGluIHJvdXRlIHN0cmluZ1xuY29uc3QgVEVTVF9ST1VURSA9IC9cXC9cXFtbXi9dKz9cXF0oPz1cXC98JCkvXG5cbmV4cG9ydCBmdW5jdGlvbiBpc0R5bmFtaWNSb3V0ZShyb3V0ZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBURVNUX1JPVVRFLnRlc3Qocm91dGUpXG59XG4iLCJjb25zdCBEVU1NWV9CQVNFID0gbmV3IFVSTCgnaHR0cDovL24nKVxuXG4vKipcbiAqIFBhcnNlcyBwYXRoLXJlbGF0aXZlIHVybHMgKGUuZy4gYC9oZWxsby93b3JsZD9mb289YmFyYCkuIElmIHVybCBpc24ndCBwYXRoLXJlbGF0aXZlXG4gKiAoZS5nLiBgLi9oZWxsb2ApIHRoZW4gYXQgbGVhc3QgYmFzZSBtdXN0IGJlLlxuICogQWJzb2x1dGUgdXJscyBhcmUgcmVqZWN0ZWQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVJlbGF0aXZlVXJsKHVybDogc3RyaW5nLCBiYXNlPzogc3RyaW5nKSB7XG4gIGNvbnN0IHJlc29sdmVkQmFzZSA9IGJhc2UgPyBuZXcgVVJMKGJhc2UsIERVTU1ZX0JBU0UpIDogRFVNTVlfQkFTRVxuICBjb25zdCB7IHBhdGhuYW1lLCBzZWFyY2hQYXJhbXMsIHNlYXJjaCwgaGFzaCwgaHJlZiwgb3JpZ2luIH0gPSBuZXcgVVJMKFxuICAgIHVybCxcbiAgICByZXNvbHZlZEJhc2VcbiAgKVxuICBpZiAob3JpZ2luICE9PSBEVU1NWV9CQVNFLm9yaWdpbikge1xuICAgIHRocm93IG5ldyBFcnJvcignaW52YXJpYW50OiBpbnZhbGlkIHJlbGF0aXZlIFVSTCcpXG4gIH1cbiAgcmV0dXJuIHtcbiAgICBwYXRobmFtZSxcbiAgICBzZWFyY2hQYXJhbXMsXG4gICAgc2VhcmNoLFxuICAgIGhhc2gsXG4gICAgaHJlZjogaHJlZi5zbGljZShEVU1NWV9CQVNFLm9yaWdpbi5sZW5ndGgpLFxuICB9XG59XG4iLCJpbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi9yb3V0ZS1yZWdleCdcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4OiBSZXR1cm5UeXBlPHR5cGVvZiBnZXRSb3V0ZVJlZ2V4Pikge1xuICBjb25zdCB7IHJlLCBncm91cHMgfSA9IHJvdXRlUmVnZXhcbiAgcmV0dXJuIChwYXRobmFtZTogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCkgPT4ge1xuICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSByZS5leGVjKHBhdGhuYW1lISlcbiAgICBpZiAoIXJvdXRlTWF0Y2gpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGNvbnN0IGRlY29kZSA9IChwYXJhbTogc3RyaW5nKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHBhcmFtKVxuICAgICAgfSBjYXRjaCAoXykge1xuICAgICAgICBjb25zdCBlcnI6IEVycm9yICYgeyBjb2RlPzogc3RyaW5nIH0gPSBuZXcgRXJyb3IoXG4gICAgICAgICAgJ2ZhaWxlZCB0byBkZWNvZGUgcGFyYW0nXG4gICAgICAgIClcbiAgICAgICAgZXJyLmNvZGUgPSAnREVDT0RFX0ZBSUxFRCdcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHBhcmFtczogeyBbcGFyYW1OYW1lOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9ID0ge31cblxuICAgIE9iamVjdC5rZXlzKGdyb3VwcykuZm9yRWFjaCgoc2x1Z05hbWU6IHN0cmluZykgPT4ge1xuICAgICAgY29uc3QgZyA9IGdyb3Vwc1tzbHVnTmFtZV1cbiAgICAgIGNvbnN0IG0gPSByb3V0ZU1hdGNoW2cucG9zXVxuICAgICAgaWYgKG0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBwYXJhbXNbc2x1Z05hbWVdID0gfm0uaW5kZXhPZignLycpXG4gICAgICAgICAgPyBtLnNwbGl0KCcvJykubWFwKChlbnRyeSkgPT4gZGVjb2RlKGVudHJ5KSlcbiAgICAgICAgICA6IGcucmVwZWF0XG4gICAgICAgICAgPyBbZGVjb2RlKG0pXVxuICAgICAgICAgIDogZGVjb2RlKG0pXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gcGFyYW1zXG4gIH1cbn1cbiIsImludGVyZmFjZSBHcm91cCB7XG4gIHBvczogbnVtYmVyXG4gIHJlcGVhdDogYm9vbGVhblxuICBvcHRpb25hbDogYm9vbGVhblxufVxuXG4vLyB0aGlzIGlzbid0IGltcG9ydGluZyB0aGUgZXNjYXBlLXN0cmluZy1yZWdleCBtb2R1bGVcbi8vIHRvIHJlZHVjZSBieXRlc1xuZnVuY3Rpb24gZXNjYXBlUmVnZXgoc3RyOiBzdHJpbmcpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9bfFxcXFx7fSgpW1xcXV4kKyo/Li1dL2csICdcXFxcJCYnKVxufVxuXG5mdW5jdGlvbiBwYXJzZVBhcmFtZXRlcihwYXJhbTogc3RyaW5nKSB7XG4gIGNvbnN0IG9wdGlvbmFsID0gcGFyYW0uc3RhcnRzV2l0aCgnWycpICYmIHBhcmFtLmVuZHNXaXRoKCddJylcbiAgaWYgKG9wdGlvbmFsKSB7XG4gICAgcGFyYW0gPSBwYXJhbS5zbGljZSgxLCAtMSlcbiAgfVxuICBjb25zdCByZXBlYXQgPSBwYXJhbS5zdGFydHNXaXRoKCcuLi4nKVxuICBpZiAocmVwZWF0KSB7XG4gICAgcGFyYW0gPSBwYXJhbS5zbGljZSgzKVxuICB9XG4gIHJldHVybiB7IGtleTogcGFyYW0sIHJlcGVhdCwgb3B0aW9uYWwgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVSZWdleChcbiAgbm9ybWFsaXplZFJvdXRlOiBzdHJpbmdcbik6IHtcbiAgcmU6IFJlZ0V4cFxuICBuYW1lZFJlZ2V4Pzogc3RyaW5nXG4gIHJvdXRlS2V5cz86IHsgW25hbWVkOiBzdHJpbmddOiBzdHJpbmcgfVxuICBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogR3JvdXAgfVxufSB7XG4gIGNvbnN0IHNlZ21lbnRzID0gKG5vcm1hbGl6ZWRSb3V0ZS5yZXBsYWNlKC9cXC8kLywgJycpIHx8ICcvJylcbiAgICAuc2xpY2UoMSlcbiAgICAuc3BsaXQoJy8nKVxuXG4gIGNvbnN0IGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiBHcm91cCB9ID0ge31cbiAgbGV0IGdyb3VwSW5kZXggPSAxXG4gIGNvbnN0IHBhcmFtZXRlcml6ZWRSb3V0ZSA9IHNlZ21lbnRzXG4gICAgLm1hcCgoc2VnbWVudCkgPT4ge1xuICAgICAgaWYgKHNlZ21lbnQuc3RhcnRzV2l0aCgnWycpICYmIHNlZ21lbnQuZW5kc1dpdGgoJ10nKSkge1xuICAgICAgICBjb25zdCB7IGtleSwgb3B0aW9uYWwsIHJlcGVhdCB9ID0gcGFyc2VQYXJhbWV0ZXIoc2VnbWVudC5zbGljZSgxLCAtMSkpXG4gICAgICAgIGdyb3Vwc1trZXldID0geyBwb3M6IGdyb3VwSW5kZXgrKywgcmVwZWF0LCBvcHRpb25hbCB9XG4gICAgICAgIHJldHVybiByZXBlYXQgPyAob3B0aW9uYWwgPyAnKD86LyguKz8pKT8nIDogJy8oLis/KScpIDogJy8oW14vXSs/KSdcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBgLyR7ZXNjYXBlUmVnZXgoc2VnbWVudCl9YFxuICAgICAgfVxuICAgIH0pXG4gICAgLmpvaW4oJycpXG5cbiAgLy8gZGVhZCBjb2RlIGVsaW1pbmF0ZSBmb3IgYnJvd3NlciBzaW5jZSBpdCdzIG9ubHkgbmVlZGVkXG4gIC8vIHdoaWxlIGdlbmVyYXRpbmcgcm91dGVzLW1hbmlmZXN0XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgIGxldCByb3V0ZUtleUNoYXJDb2RlID0gOTdcbiAgICBsZXQgcm91dGVLZXlDaGFyTGVuZ3RoID0gMVxuXG4gICAgLy8gYnVpbGRzIGEgbWluaW1hbCByb3V0ZUtleSB1c2luZyBvbmx5IGEteiBhbmQgbWluaW1hbCBudW1iZXIgb2YgY2hhcmFjdGVyc1xuICAgIGNvbnN0IGdldFNhZmVSb3V0ZUtleSA9ICgpID0+IHtcbiAgICAgIGxldCByb3V0ZUtleSA9ICcnXG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm91dGVLZXlDaGFyTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcm91dGVLZXkgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShyb3V0ZUtleUNoYXJDb2RlKVxuICAgICAgICByb3V0ZUtleUNoYXJDb2RlKytcblxuICAgICAgICBpZiAocm91dGVLZXlDaGFyQ29kZSA+IDEyMikge1xuICAgICAgICAgIHJvdXRlS2V5Q2hhckxlbmd0aCsrXG4gICAgICAgICAgcm91dGVLZXlDaGFyQ29kZSA9IDk3XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiByb3V0ZUtleVxuICAgIH1cblxuICAgIGNvbnN0IHJvdXRlS2V5czogeyBbbmFtZWQ6IHN0cmluZ106IHN0cmluZyB9ID0ge31cblxuICAgIGxldCBuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSA9IHNlZ21lbnRzXG4gICAgICAubWFwKChzZWdtZW50KSA9PiB7XG4gICAgICAgIGlmIChzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSAmJiBzZWdtZW50LmVuZHNXaXRoKCddJykpIHtcbiAgICAgICAgICBjb25zdCB7IGtleSwgb3B0aW9uYWwsIHJlcGVhdCB9ID0gcGFyc2VQYXJhbWV0ZXIoc2VnbWVudC5zbGljZSgxLCAtMSkpXG4gICAgICAgICAgLy8gcmVwbGFjZSBhbnkgbm9uLXdvcmQgY2hhcmFjdGVycyBzaW5jZSB0aGV5IGNhbiBicmVha1xuICAgICAgICAgIC8vIHRoZSBuYW1lZCByZWdleFxuICAgICAgICAgIGxldCBjbGVhbmVkS2V5ID0ga2V5LnJlcGxhY2UoL1xcVy9nLCAnJylcbiAgICAgICAgICBsZXQgaW52YWxpZEtleSA9IGZhbHNlXG5cbiAgICAgICAgICAvLyBjaGVjayBpZiB0aGUga2V5IGlzIHN0aWxsIGludmFsaWQgYW5kIGZhbGxiYWNrIHRvIHVzaW5nIGEga25vd25cbiAgICAgICAgICAvLyBzYWZlIGtleVxuICAgICAgICAgIGlmIChjbGVhbmVkS2V5Lmxlbmd0aCA9PT0gMCB8fCBjbGVhbmVkS2V5Lmxlbmd0aCA+IDMwKSB7XG4gICAgICAgICAgICBpbnZhbGlkS2V5ID0gdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoIWlzTmFOKHBhcnNlSW50KGNsZWFuZWRLZXkuc3Vic3RyKDAsIDEpKSkpIHtcbiAgICAgICAgICAgIGludmFsaWRLZXkgPSB0cnVlXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGludmFsaWRLZXkpIHtcbiAgICAgICAgICAgIGNsZWFuZWRLZXkgPSBnZXRTYWZlUm91dGVLZXkoKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJvdXRlS2V5c1tjbGVhbmVkS2V5XSA9IGtleVxuICAgICAgICAgIHJldHVybiByZXBlYXRcbiAgICAgICAgICAgID8gb3B0aW9uYWxcbiAgICAgICAgICAgICAgPyBgKD86Lyg/PCR7Y2xlYW5lZEtleX0+Lis/KSk/YFxuICAgICAgICAgICAgICA6IGAvKD88JHtjbGVhbmVkS2V5fT4uKz8pYFxuICAgICAgICAgICAgOiBgLyg/PCR7Y2xlYW5lZEtleX0+W14vXSs/KWBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWBcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5qb2luKCcnKVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHJlOiBuZXcgUmVnRXhwKGBeJHtwYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLFxuICAgICAgZ3JvdXBzLFxuICAgICAgcm91dGVLZXlzLFxuICAgICAgbmFtZWRSZWdleDogYF4ke25hbWVkUGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgLFxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcmU6IG5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksXG4gICAgZ3JvdXBzLFxuICB9XG59XG4iLCJpbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuXG5leHBvcnQgZnVuY3Rpb24gc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShcbiAgc2VhcmNoUGFyYW1zOiBVUkxTZWFyY2hQYXJhbXNcbik6IFBhcnNlZFVybFF1ZXJ5IHtcbiAgY29uc3QgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5ID0ge31cbiAgc2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHtcbiAgICBpZiAodHlwZW9mIHF1ZXJ5W2tleV0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBxdWVyeVtrZXldID0gdmFsdWVcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkocXVlcnlba2V5XSkpIHtcbiAgICAgIDsocXVlcnlba2V5XSBhcyBzdHJpbmdbXSkucHVzaCh2YWx1ZSlcbiAgICB9IGVsc2Uge1xuICAgICAgcXVlcnlba2V5XSA9IFtxdWVyeVtrZXldIGFzIHN0cmluZywgdmFsdWVdXG4gICAgfVxuICB9KVxuICByZXR1cm4gcXVlcnlcbn1cbiIsImltcG9ydCB7IEluY29taW5nTWVzc2FnZSwgU2VydmVyUmVzcG9uc2UgfSBmcm9tICdodHRwJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IGZvcm1hdFVybCB9IGZyb20gJy4vcm91dGVyL3V0aWxzL2Zvcm1hdC11cmwnXG5pbXBvcnQgeyBNYW5pZmVzdEl0ZW0gfSBmcm9tICcuLi9zZXJ2ZXIvbG9hZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciB9IGZyb20gJy4vcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IEVudiB9IGZyb20gJy4uLy4uL2xpYi9sb2FkLWVudi1jb25maWcnXG5pbXBvcnQgeyBCdWlsZE1hbmlmZXN0IH0gZnJvbSAnLi4vc2VydmVyL2dldC1wYWdlLWZpbGVzJ1xuXG4vKipcbiAqIFR5cGVzIHVzZWQgYnkgYm90aCBuZXh0IGFuZCBuZXh0LXNlcnZlclxuICovXG5cbmV4cG9ydCB0eXBlIE5leHRDb21wb25lbnRUeXBlPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQgPSBOZXh0UGFnZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPiA9IENvbXBvbmVudFR5cGU8UD4gJiB7XG4gIC8qKlxuICAgKiBVc2VkIGZvciBpbml0aWFsIHBhZ2UgbG9hZCBkYXRhIHBvcHVsYXRpb24uIERhdGEgcmV0dXJuZWQgZnJvbSBgZ2V0SW5pdGlhbFByb3BzYCBpcyBzZXJpYWxpemVkIHdoZW4gc2VydmVyIHJlbmRlcmVkLlxuICAgKiBNYWtlIHN1cmUgdG8gcmV0dXJuIHBsYWluIGBPYmplY3RgIHdpdGhvdXQgdXNpbmcgYERhdGVgLCBgTWFwYCwgYFNldGAuXG4gICAqIEBwYXJhbSBjdHggQ29udGV4dCBvZiBgcGFnZWBcbiAgICovXG4gIGdldEluaXRpYWxQcm9wcz8oY29udGV4dDogQyk6IElQIHwgUHJvbWlzZTxJUD5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIERvY3VtZW50Q29udGV4dCxcbiAgRG9jdW1lbnRJbml0aWFsUHJvcHMsXG4gIERvY3VtZW50UHJvcHNcbj4gJiB7XG4gIHJlbmRlckRvY3VtZW50KFxuICAgIERvY3VtZW50OiBEb2N1bWVudFR5cGUsXG4gICAgcHJvcHM6IERvY3VtZW50UHJvcHNcbiAgKTogUmVhY3QuUmVhY3RFbGVtZW50XG59XG5cbmV4cG9ydCB0eXBlIEFwcFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQXBwQ29udGV4dFR5cGUsXG4gIEFwcEluaXRpYWxQcm9wcyxcbiAgQXBwUHJvcHNUeXBlXG4+XG5cbmV4cG9ydCB0eXBlIEFwcFRyZWVUeXBlID0gQ29tcG9uZW50VHlwZTxcbiAgQXBwSW5pdGlhbFByb3BzICYgeyBbbmFtZTogc3RyaW5nXTogYW55IH1cbj5cblxuLyoqXG4gKiBXZWIgdml0YWxzIHByb3ZpZGVkIHRvIF9hcHAucmVwb3J0V2ViVml0YWxzIGJ5IENvcmUgV2ViIFZpdGFscyBwbHVnaW4gZGV2ZWxvcGVkIGJ5IEdvb2dsZSBDaHJvbWUgdGVhbS5cbiAqIGh0dHBzOi8vbmV4dGpzLm9yZy9ibG9nL25leHQtOS00I2ludGVncmF0ZWQtd2ViLXZpdGFscy1yZXBvcnRpbmdcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dFdlYlZpdGFsc01ldHJpYyA9IHtcbiAgaWQ6IHN0cmluZ1xuICBsYWJlbDogc3RyaW5nXG4gIG5hbWU6IHN0cmluZ1xuICBzdGFydFRpbWU6IG51bWJlclxuICB2YWx1ZTogbnVtYmVyXG59XG5cbmV4cG9ydCB0eXBlIEVuaGFuY2VyPEM+ID0gKENvbXBvbmVudDogQykgPT4gQ1xuXG5leHBvcnQgdHlwZSBDb21wb25lbnRzRW5oYW5jZXIgPVxuICB8IHtcbiAgICAgIGVuaGFuY2VBcHA/OiBFbmhhbmNlcjxBcHBUeXBlPlxuICAgICAgZW5oYW5jZUNvbXBvbmVudD86IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuICAgIH1cbiAgfCBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZVJlc3VsdCA9IHtcbiAgaHRtbDogc3RyaW5nXG4gIGhlYWQ/OiBBcnJheTxKU1guRWxlbWVudCB8IG51bGw+XG59XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2UgPSAoXG4gIG9wdGlvbnM/OiBDb21wb25lbnRzRW5oYW5jZXJcbikgPT4gUmVuZGVyUGFnZVJlc3VsdCB8IFByb21pc2U8UmVuZGVyUGFnZVJlc3VsdD5cblxuZXhwb3J0IHR5cGUgQmFzZUNvbnRleHQgPSB7XG4gIHJlcz86IFNlcnZlclJlc3BvbnNlXG4gIFtrOiBzdHJpbmddOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgTkVYVF9EQVRBID0ge1xuICBwcm9wczogYW55XG4gIHBhZ2U6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYnVpbGRJZDogc3RyaW5nXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIHJ1bnRpbWVDb25maWc/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9XG4gIG5leHRFeHBvcnQ/OiBib29sZWFuXG4gIGF1dG9FeHBvcnQ/OiBib29sZWFuXG4gIGlzRmFsbGJhY2s/OiBib29sZWFuXG4gIGR5bmFtaWNJZHM/OiBzdHJpbmdbXVxuICBlcnI/OiBFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9XG4gIGdzcD86IGJvb2xlYW5cbiAgZ3NzcD86IGJvb2xlYW5cbiAgY3VzdG9tU2VydmVyPzogYm9vbGVhblxuICBnaXA/OiBib29sZWFuXG4gIGFwcEdpcD86IGJvb2xlYW5cbn1cblxuLyoqXG4gKiBgTmV4dGAgY29udGV4dFxuICovXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgaW50ZXJmYWNlLW5hbWVcbmV4cG9ydCBpbnRlcmZhY2UgTmV4dFBhZ2VDb250ZXh0IHtcbiAgLyoqXG4gICAqIEVycm9yIG9iamVjdCBpZiBlbmNvdW50ZXJlZCBkdXJpbmcgcmVuZGVyaW5nXG4gICAqL1xuICBlcnI/OiAoRXJyb3IgJiB7IHN0YXR1c0NvZGU/OiBudW1iZXIgfSkgfCBudWxsXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVxdWVzdCBvYmplY3QuXG4gICAqL1xuICByZXE/OiBJbmNvbWluZ01lc3NhZ2VcbiAgLyoqXG4gICAqIGBIVFRQYCByZXNwb25zZSBvYmplY3QuXG4gICAqL1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICAvKipcbiAgICogUGF0aCBzZWN0aW9uIG9mIGBVUkxgLlxuICAgKi9cbiAgcGF0aG5hbWU6IHN0cmluZ1xuICAvKipcbiAgICogUXVlcnkgc3RyaW5nIHNlY3Rpb24gb2YgYFVSTGAgcGFyc2VkIGFzIGFuIG9iamVjdC5cbiAgICovXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICAvKipcbiAgICogYFN0cmluZ2Agb2YgdGhlIGFjdHVhbCBwYXRoIGluY2x1ZGluZyBxdWVyeS5cbiAgICovXG4gIGFzUGF0aD86IHN0cmluZ1xuICAvKipcbiAgICogYENvbXBvbmVudGAgdGhlIHRyZWUgb2YgdGhlIEFwcCB0byB1c2UgaWYgbmVlZGluZyB0byByZW5kZXIgc2VwYXJhdGVseVxuICAgKi9cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbn1cblxuZXhwb3J0IHR5cGUgQXBwQ29udGV4dFR5cGU8UiBleHRlbmRzIE5leHRSb3V0ZXIgPSBOZXh0Um91dGVyPiA9IHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQ+XG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG4gIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gIHJvdXRlcjogUlxufVxuXG5leHBvcnQgdHlwZSBBcHBJbml0aWFsUHJvcHMgPSB7XG4gIHBhZ2VQcm9wczogYW55XG59XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzVHlwZTxcbiAgUiBleHRlbmRzIE5leHRSb3V0ZXIgPSBOZXh0Um91dGVyLFxuICBQID0ge31cbj4gPSBBcHBJbml0aWFsUHJvcHMgJiB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0LCBhbnksIFA+XG4gIHJvdXRlcjogUlxuICBfX05fU1NHPzogYm9vbGVhblxuICBfX05fU1NQPzogYm9vbGVhblxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudENvbnRleHQgPSBOZXh0UGFnZUNvbnRleHQgJiB7XG4gIHJlbmRlclBhZ2U6IFJlbmRlclBhZ2Vcbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRJbml0aWFsUHJvcHMgPSBSZW5kZXJQYWdlUmVzdWx0ICYge1xuICBzdHlsZXM/OiBSZWFjdC5SZWFjdEVsZW1lbnRbXSB8IFJlYWN0LlJlYWN0RnJhZ21lbnRcbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRQcm9wcyA9IERvY3VtZW50SW5pdGlhbFByb3BzICYge1xuICBfX05FWFRfREFUQV9fOiBORVhUX0RBVEFcbiAgZGFuZ2Vyb3VzQXNQYXRoOiBzdHJpbmdcbiAgYnVpbGRNYW5pZmVzdDogQnVpbGRNYW5pZmVzdFxuICBhbXBQYXRoOiBzdHJpbmdcbiAgaW5BbXBNb2RlOiBib29sZWFuXG4gIGh5YnJpZEFtcDogYm9vbGVhblxuICBpc0RldmVsb3BtZW50OiBib29sZWFuXG4gIGZpbGVzOiBzdHJpbmdbXVxuICBkeW5hbWljSW1wb3J0czogTWFuaWZlc3RJdGVtW11cbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgY2Fub25pY2FsQmFzZTogc3RyaW5nXG4gIGhlYWRUYWdzOiBhbnlbXVxuICB1bnN0YWJsZV9ydW50aW1lSlM/OiBmYWxzZVxufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVxdWVzdFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5leHRBcGlSZXF1ZXN0IGV4dGVuZHMgSW5jb21pbmdNZXNzYWdlIHtcbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgcXVlcnlgIHZhbHVlcyBmcm9tIHVybFxuICAgKi9cbiAgcXVlcnk6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXVxuICB9XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYGNvb2tpZXNgIGZyb20gaGVhZGVyXG4gICAqL1xuICBjb29raWVzOiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nXG4gIH1cblxuICBib2R5OiBhbnlcblxuICBlbnY6IEVudlxuXG4gIHByZXZpZXc/OiBib29sZWFuXG4gIC8qKlxuICAgKiBQcmV2aWV3IGRhdGEgc2V0IG9uIHRoZSByZXF1ZXN0LCBpZiBhbnlcbiAgICogKi9cbiAgcHJldmlld0RhdGE/OiBhbnlcbn1cblxuLyoqXG4gKiBTZW5kIGJvZHkgb2YgcmVzcG9uc2VcbiAqL1xudHlwZSBTZW5kPFQ+ID0gKGJvZHk6IFQpID0+IHZvaWRcblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlc3BvbnNlXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlSZXNwb25zZTxUID0gYW55PiA9IFNlcnZlclJlc3BvbnNlICYge1xuICAvKipcbiAgICogU2VuZCBkYXRhIGBhbnlgIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIHNlbmQ6IFNlbmQ8VD5cbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBganNvbmAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAganNvbjogU2VuZDxUPlxuICBzdGF0dXM6IChzdGF0dXNDb2RlOiBudW1iZXIpID0+IE5leHRBcGlSZXNwb25zZTxUPlxuICByZWRpcmVjdCh1cmw6IHN0cmluZyk6IE5leHRBcGlSZXNwb25zZTxUPlxuICByZWRpcmVjdChzdGF0dXM6IG51bWJlciwgdXJsOiBzdHJpbmcpOiBOZXh0QXBpUmVzcG9uc2U8VD5cblxuICAvKipcbiAgICogU2V0IHByZXZpZXcgZGF0YSBmb3IgTmV4dC5qcycgcHJlcmVuZGVyIG1vZGVcbiAgICovXG4gIHNldFByZXZpZXdEYXRhOiAoXG4gICAgZGF0YTogb2JqZWN0IHwgc3RyaW5nLFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICAvKipcbiAgICAgICAqIFNwZWNpZmllcyB0aGUgbnVtYmVyIChpbiBzZWNvbmRzKSBmb3IgdGhlIHByZXZpZXcgc2Vzc2lvbiB0byBsYXN0IGZvci5cbiAgICAgICAqIFRoZSBnaXZlbiBudW1iZXIgd2lsbCBiZSBjb252ZXJ0ZWQgdG8gYW4gaW50ZWdlciBieSByb3VuZGluZyBkb3duLlxuICAgICAgICogQnkgZGVmYXVsdCwgbm8gbWF4aW11bSBhZ2UgaXMgc2V0IGFuZCB0aGUgcHJldmlldyBzZXNzaW9uIGZpbmlzaGVzXG4gICAgICAgKiB3aGVuIHRoZSBjbGllbnQgc2h1dHMgZG93biAoYnJvd3NlciBpcyBjbG9zZWQpLlxuICAgICAgICovXG4gICAgICBtYXhBZ2U/OiBudW1iZXJcbiAgICB9XG4gICkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIGNsZWFyUHJldmlld0RhdGE6ICgpID0+IE5leHRBcGlSZXNwb25zZTxUPlxufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgaGFuZGxlclxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpSGFuZGxlcjxUID0gYW55PiA9IChcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2U8VD5cbikgPT4gdm9pZCB8IFByb21pc2U8dm9pZD5cblxuLyoqXG4gKiBVdGlsc1xuICovXG5leHBvcnQgZnVuY3Rpb24gZXhlY09uY2U8VCBleHRlbmRzICguLi5hcmdzOiBhbnlbXSkgPT4gUmV0dXJuVHlwZTxUPj4oXG4gIGZuOiBUXG4pOiBUIHtcbiAgbGV0IHVzZWQgPSBmYWxzZVxuICBsZXQgcmVzdWx0OiBSZXR1cm5UeXBlPFQ+XG5cbiAgcmV0dXJuICgoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBpZiAoIXVzZWQpIHtcbiAgICAgIHVzZWQgPSB0cnVlXG4gICAgICByZXN1bHQgPSBmbiguLi5hcmdzKVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0XG4gIH0pIGFzIFRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldExvY2F0aW9uT3JpZ2luKCkge1xuICBjb25zdCB7IHByb3RvY29sLCBob3N0bmFtZSwgcG9ydCB9ID0gd2luZG93LmxvY2F0aW9uXG4gIHJldHVybiBgJHtwcm90b2NvbH0vLyR7aG9zdG5hbWV9JHtwb3J0ID8gJzonICsgcG9ydCA6ICcnfWBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFVSTCgpIHtcbiAgY29uc3QgeyBocmVmIH0gPSB3aW5kb3cubG9jYXRpb25cbiAgY29uc3Qgb3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICByZXR1cm4gaHJlZi5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERpc3BsYXlOYW1lPFA+KENvbXBvbmVudDogQ29tcG9uZW50VHlwZTxQPikge1xuICByZXR1cm4gdHlwZW9mIENvbXBvbmVudCA9PT0gJ3N0cmluZydcbiAgICA/IENvbXBvbmVudFxuICAgIDogQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNSZXNTZW50KHJlczogU2VydmVyUmVzcG9uc2UpIHtcbiAgcmV0dXJuIHJlcy5maW5pc2hlZCB8fCByZXMuaGVhZGVyc1NlbnRcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRHZXRJbml0aWFsUHJvcHM8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+KEFwcDogTmV4dENvbXBvbmVudFR5cGU8QywgSVAsIFA+LCBjdHg6IEMpOiBQcm9taXNlPElQPiB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKEFwcC5wcm90b3R5cGU/LmdldEluaXRpYWxQcm9wcykge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgIEFwcFxuICAgICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBpcyBkZWZpbmVkIGFzIGFuIGluc3RhbmNlIG1ldGhvZCAtIHZpc2l0IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2dldC1pbml0aWFsLXByb3BzLWFzLWFuLWluc3RhbmNlLW1ldGhvZCBmb3IgbW9yZSBpbmZvcm1hdGlvbi5gXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgICB9XG4gIH1cbiAgLy8gd2hlbiBjYWxsZWQgZnJvbSBfYXBwIGBjdHhgIGlzIG5lc3RlZCBpbiBgY3R4YFxuICBjb25zdCByZXMgPSBjdHgucmVzIHx8IChjdHguY3R4ICYmIGN0eC5jdHgucmVzKVxuXG4gIGlmICghQXBwLmdldEluaXRpYWxQcm9wcykge1xuICAgIGlmIChjdHguY3R4ICYmIGN0eC5Db21wb25lbnQpIHtcbiAgICAgIC8vIEB0cy1pZ25vcmUgcGFnZVByb3BzIGRlZmF1bHRcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBhZ2VQcm9wczogYXdhaXQgbG9hZEdldEluaXRpYWxQcm9wcyhjdHguQ29tcG9uZW50LCBjdHguY3R4KSxcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHt9IGFzIElQXG4gIH1cblxuICBjb25zdCBwcm9wcyA9IGF3YWl0IEFwcC5nZXRJbml0aWFsUHJvcHMoY3R4KVxuXG4gIGlmIChyZXMgJiYgaXNSZXNTZW50KHJlcykpIHtcbiAgICByZXR1cm4gcHJvcHNcbiAgfVxuXG4gIGlmICghcHJvcHMpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgIEFwcFxuICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgc2hvdWxkIHJlc29sdmUgdG8gYW4gb2JqZWN0LiBCdXQgZm91bmQgXCIke3Byb3BzfVwiIGluc3RlYWQuYFxuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoT2JqZWN0LmtleXMocHJvcHMpLmxlbmd0aCA9PT0gMCAmJiAhY3R4LmN0eCkge1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICBgJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgICBBcHBcbiAgICAgICAgKX0gcmV0dXJuZWQgYW4gZW1wdHkgb2JqZWN0IGZyb20gXFxgZ2V0SW5pdGlhbFByb3BzXFxgLiBUaGlzIGRlLW9wdGltaXplcyBhbmQgcHJldmVudHMgYXV0b21hdGljIHN0YXRpYyBvcHRpbWl6YXRpb24uIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2VtcHR5LW9iamVjdC1nZXRJbml0aWFsUHJvcHNgXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHByb3BzXG59XG5cbmV4cG9ydCBjb25zdCB1cmxPYmplY3RLZXlzID0gW1xuICAnYXV0aCcsXG4gICdoYXNoJyxcbiAgJ2hvc3QnLFxuICAnaG9zdG5hbWUnLFxuICAnaHJlZicsXG4gICdwYXRoJyxcbiAgJ3BhdGhuYW1lJyxcbiAgJ3BvcnQnLFxuICAncHJvdG9jb2wnLFxuICAncXVlcnknLFxuICAnc2VhcmNoJyxcbiAgJ3NsYXNoZXMnLFxuXVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0V2l0aFZhbGlkYXRpb24odXJsOiBVcmxPYmplY3QpOiBzdHJpbmcge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICBpZiAodXJsICE9PSBudWxsICYmIHR5cGVvZiB1cmwgPT09ICdvYmplY3QnKSB7XG4gICAgICBPYmplY3Qua2V5cyh1cmwpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBpZiAodXJsT2JqZWN0S2V5cy5pbmRleE9mKGtleSkgPT09IC0xKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgYFVua25vd24ga2V5IHBhc3NlZCB2aWEgdXJsT2JqZWN0IGludG8gdXJsLmZvcm1hdDogJHtrZXl9YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZm9ybWF0VXJsKHVybClcbn1cblxuZXhwb3J0IGNvbnN0IFNQID0gdHlwZW9mIHBlcmZvcm1hbmNlICE9PSAndW5kZWZpbmVkJ1xuZXhwb3J0IGNvbnN0IFNUID1cbiAgU1AgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1hcmsgPT09ICdmdW5jdGlvbicgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1lYXN1cmUgPT09ICdmdW5jdGlvbidcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9saW5rJylcbiIsIi8qKiBAbGljZW5zZSBSZWFjdCB2MTYuMTMuMVxuICogcmVhY3QtaXMuZGV2ZWxvcG1lbnQuanNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cblxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIChmdW5jdGlvbigpIHtcbid1c2Ugc3RyaWN0JztcblxuLy8gVGhlIFN5bWJvbCB1c2VkIHRvIHRhZyB0aGUgUmVhY3RFbGVtZW50LWxpa2UgdHlwZXMuIElmIHRoZXJlIGlzIG5vIG5hdGl2ZSBTeW1ib2xcbi8vIG5vciBwb2x5ZmlsbCwgdGhlbiBhIHBsYWluIG51bWJlciBpcyB1c2VkIGZvciBwZXJmb3JtYW5jZS5cbnZhciBoYXNTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5mb3I7XG52YXIgUkVBQ1RfRUxFTUVOVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZWxlbWVudCcpIDogMHhlYWM3O1xudmFyIFJFQUNUX1BPUlRBTF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucG9ydGFsJykgOiAweGVhY2E7XG52YXIgUkVBQ1RfRlJBR01FTlRfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmZyYWdtZW50JykgOiAweGVhY2I7XG52YXIgUkVBQ1RfU1RSSUNUX01PREVfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnN0cmljdF9tb2RlJykgOiAweGVhY2M7XG52YXIgUkVBQ1RfUFJPRklMRVJfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnByb2ZpbGVyJykgOiAweGVhZDI7XG52YXIgUkVBQ1RfUFJPVklERVJfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnByb3ZpZGVyJykgOiAweGVhY2Q7XG52YXIgUkVBQ1RfQ09OVEVYVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuY29udGV4dCcpIDogMHhlYWNlOyAvLyBUT0RPOiBXZSBkb24ndCB1c2UgQXN5bmNNb2RlIG9yIENvbmN1cnJlbnRNb2RlIGFueW1vcmUuIFRoZXkgd2VyZSB0ZW1wb3Jhcnlcbi8vICh1bnN0YWJsZSkgQVBJcyB0aGF0IGhhdmUgYmVlbiByZW1vdmVkLiBDYW4gd2UgcmVtb3ZlIHRoZSBzeW1ib2xzP1xuXG52YXIgUkVBQ1RfQVNZTkNfTU9ERV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuYXN5bmNfbW9kZScpIDogMHhlYWNmO1xudmFyIFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuY29uY3VycmVudF9tb2RlJykgOiAweGVhY2Y7XG52YXIgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmZvcndhcmRfcmVmJykgOiAweGVhZDA7XG52YXIgUkVBQ1RfU1VTUEVOU0VfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnN1c3BlbnNlJykgOiAweGVhZDE7XG52YXIgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc3VzcGVuc2VfbGlzdCcpIDogMHhlYWQ4O1xudmFyIFJFQUNUX01FTU9fVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0Lm1lbW8nKSA6IDB4ZWFkMztcbnZhciBSRUFDVF9MQVpZX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5sYXp5JykgOiAweGVhZDQ7XG52YXIgUkVBQ1RfQkxPQ0tfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmJsb2NrJykgOiAweGVhZDk7XG52YXIgUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmZ1bmRhbWVudGFsJykgOiAweGVhZDU7XG52YXIgUkVBQ1RfUkVTUE9OREVSX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5yZXNwb25kZXInKSA6IDB4ZWFkNjtcbnZhciBSRUFDVF9TQ09QRV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc2NvcGUnKSA6IDB4ZWFkNztcblxuZnVuY3Rpb24gaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpIHtcbiAgcmV0dXJuIHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJyB8fCAvLyBOb3RlOiBpdHMgdHlwZW9mIG1pZ2h0IGJlIG90aGVyIHRoYW4gJ3N5bWJvbCcgb3IgJ251bWJlcicgaWYgaXQncyBhIHBvbHlmaWxsLlxuICB0eXBlID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1BST0ZJTEVSX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSB8fCB0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgdHlwZSAhPT0gbnVsbCAmJiAodHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTEFaWV9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9QUk9WSURFUl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0NPTlRFWFRfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfUkVTUE9OREVSX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfU0NPUEVfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9CTE9DS19UWVBFKTtcbn1cblxuZnVuY3Rpb24gdHlwZU9mKG9iamVjdCkge1xuICBpZiAodHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiYgb2JqZWN0ICE9PSBudWxsKSB7XG4gICAgdmFyICQkdHlwZW9mID0gb2JqZWN0LiQkdHlwZW9mO1xuXG4gICAgc3dpdGNoICgkJHR5cGVvZikge1xuICAgICAgY2FzZSBSRUFDVF9FTEVNRU5UX1RZUEU6XG4gICAgICAgIHZhciB0eXBlID0gb2JqZWN0LnR5cGU7XG5cbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgY2FzZSBSRUFDVF9BU1lOQ19NT0RFX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX0ZSQUdNRU5UX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9QUk9GSUxFUl9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfU1RSSUNUX01PREVfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX1RZUEU6XG4gICAgICAgICAgICByZXR1cm4gdHlwZTtcblxuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICB2YXIgJCR0eXBlb2ZUeXBlID0gdHlwZSAmJiB0eXBlLiQkdHlwZW9mO1xuXG4gICAgICAgICAgICBzd2l0Y2ggKCQkdHlwZW9mVHlwZSkge1xuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0NPTlRFWFRfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0xBWllfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9NRU1PX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfUFJPVklERVJfVFlQRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gJCR0eXBlb2ZUeXBlO1xuXG4gICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuICQkdHlwZW9mO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgY2FzZSBSRUFDVF9QT1JUQUxfVFlQRTpcbiAgICAgICAgcmV0dXJuICQkdHlwZW9mO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWQ7XG59IC8vIEFzeW5jTW9kZSBpcyBkZXByZWNhdGVkIGFsb25nIHdpdGggaXNBc3luY01vZGVcblxudmFyIEFzeW5jTW9kZSA9IFJFQUNUX0FTWU5DX01PREVfVFlQRTtcbnZhciBDb25jdXJyZW50TW9kZSA9IFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFO1xudmFyIENvbnRleHRDb25zdW1lciA9IFJFQUNUX0NPTlRFWFRfVFlQRTtcbnZhciBDb250ZXh0UHJvdmlkZXIgPSBSRUFDVF9QUk9WSURFUl9UWVBFO1xudmFyIEVsZW1lbnQgPSBSRUFDVF9FTEVNRU5UX1RZUEU7XG52YXIgRm9yd2FyZFJlZiA9IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU7XG52YXIgRnJhZ21lbnQgPSBSRUFDVF9GUkFHTUVOVF9UWVBFO1xudmFyIExhenkgPSBSRUFDVF9MQVpZX1RZUEU7XG52YXIgTWVtbyA9IFJFQUNUX01FTU9fVFlQRTtcbnZhciBQb3J0YWwgPSBSRUFDVF9QT1JUQUxfVFlQRTtcbnZhciBQcm9maWxlciA9IFJFQUNUX1BST0ZJTEVSX1RZUEU7XG52YXIgU3RyaWN0TW9kZSA9IFJFQUNUX1NUUklDVF9NT0RFX1RZUEU7XG52YXIgU3VzcGVuc2UgPSBSRUFDVF9TVVNQRU5TRV9UWVBFO1xudmFyIGhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlID0gZmFsc2U7IC8vIEFzeW5jTW9kZSBzaG91bGQgYmUgZGVwcmVjYXRlZFxuXG5mdW5jdGlvbiBpc0FzeW5jTW9kZShvYmplY3QpIHtcbiAge1xuICAgIGlmICghaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUpIHtcbiAgICAgIGhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlID0gdHJ1ZTsgLy8gVXNpbmcgY29uc29sZVsnd2FybiddIHRvIGV2YWRlIEJhYmVsIGFuZCBFU0xpbnRcblxuICAgICAgY29uc29sZVsnd2FybiddKCdUaGUgUmVhY3RJcy5pc0FzeW5jTW9kZSgpIGFsaWFzIGhhcyBiZWVuIGRlcHJlY2F0ZWQsICcgKyAnYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiBSZWFjdCAxNysuIFVwZGF0ZSB5b3VyIGNvZGUgdG8gdXNlICcgKyAnUmVhY3RJcy5pc0NvbmN1cnJlbnRNb2RlKCkgaW5zdGVhZC4gSXQgaGFzIHRoZSBleGFjdCBzYW1lIEFQSS4nKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gaXNDb25jdXJyZW50TW9kZShvYmplY3QpIHx8IHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9BU1lOQ19NT0RFX1RZUEU7XG59XG5mdW5jdGlvbiBpc0NvbmN1cnJlbnRNb2RlKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFO1xufVxuZnVuY3Rpb24gaXNDb250ZXh0Q29uc3VtZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNDb250ZXh0UHJvdmlkZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUFJPVklERVJfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzRWxlbWVudChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmIG9iamVjdCAhPT0gbnVsbCAmJiBvYmplY3QuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzRm9yd2FyZFJlZihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFO1xufVxuZnVuY3Rpb24gaXNGcmFnbWVudChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNMYXp5KG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0xBWllfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzTWVtbyhvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9NRU1PX1RZUEU7XG59XG5mdW5jdGlvbiBpc1BvcnRhbChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9QT1JUQUxfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzUHJvZmlsZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUFJPRklMRVJfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzU3RyaWN0TW9kZShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFO1xufVxuZnVuY3Rpb24gaXNTdXNwZW5zZShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9TVVNQRU5TRV9UWVBFO1xufVxuXG5leHBvcnRzLkFzeW5jTW9kZSA9IEFzeW5jTW9kZTtcbmV4cG9ydHMuQ29uY3VycmVudE1vZGUgPSBDb25jdXJyZW50TW9kZTtcbmV4cG9ydHMuQ29udGV4dENvbnN1bWVyID0gQ29udGV4dENvbnN1bWVyO1xuZXhwb3J0cy5Db250ZXh0UHJvdmlkZXIgPSBDb250ZXh0UHJvdmlkZXI7XG5leHBvcnRzLkVsZW1lbnQgPSBFbGVtZW50O1xuZXhwb3J0cy5Gb3J3YXJkUmVmID0gRm9yd2FyZFJlZjtcbmV4cG9ydHMuRnJhZ21lbnQgPSBGcmFnbWVudDtcbmV4cG9ydHMuTGF6eSA9IExhenk7XG5leHBvcnRzLk1lbW8gPSBNZW1vO1xuZXhwb3J0cy5Qb3J0YWwgPSBQb3J0YWw7XG5leHBvcnRzLlByb2ZpbGVyID0gUHJvZmlsZXI7XG5leHBvcnRzLlN0cmljdE1vZGUgPSBTdHJpY3RNb2RlO1xuZXhwb3J0cy5TdXNwZW5zZSA9IFN1c3BlbnNlO1xuZXhwb3J0cy5pc0FzeW5jTW9kZSA9IGlzQXN5bmNNb2RlO1xuZXhwb3J0cy5pc0NvbmN1cnJlbnRNb2RlID0gaXNDb25jdXJyZW50TW9kZTtcbmV4cG9ydHMuaXNDb250ZXh0Q29uc3VtZXIgPSBpc0NvbnRleHRDb25zdW1lcjtcbmV4cG9ydHMuaXNDb250ZXh0UHJvdmlkZXIgPSBpc0NvbnRleHRQcm92aWRlcjtcbmV4cG9ydHMuaXNFbGVtZW50ID0gaXNFbGVtZW50O1xuZXhwb3J0cy5pc0ZvcndhcmRSZWYgPSBpc0ZvcndhcmRSZWY7XG5leHBvcnRzLmlzRnJhZ21lbnQgPSBpc0ZyYWdtZW50O1xuZXhwb3J0cy5pc0xhenkgPSBpc0xhenk7XG5leHBvcnRzLmlzTWVtbyA9IGlzTWVtbztcbmV4cG9ydHMuaXNQb3J0YWwgPSBpc1BvcnRhbDtcbmV4cG9ydHMuaXNQcm9maWxlciA9IGlzUHJvZmlsZXI7XG5leHBvcnRzLmlzU3RyaWN0TW9kZSA9IGlzU3RyaWN0TW9kZTtcbmV4cG9ydHMuaXNTdXNwZW5zZSA9IGlzU3VzcGVuc2U7XG5leHBvcnRzLmlzVmFsaWRFbGVtZW50VHlwZSA9IGlzVmFsaWRFbGVtZW50VHlwZTtcbmV4cG9ydHMudHlwZU9mID0gdHlwZU9mO1xuICB9KSgpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWlzLnByb2R1Y3Rpb24ubWluLmpzJyk7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWlzLmRldmVsb3BtZW50LmpzJyk7XG59XG4iLCJpbXBvcnQgQ29udGV4dFByb3ZpZGVyIGZyb20gJy4uL2NvbnRleHQvQ29udGV4dFByb3ZpZGVyJztcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCc7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgY29va2llIGZyb20gJ3JlYWN0LWNvb2tpZXMnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG4vLyBpbXBvcnQgeyBlbXB0eSB9IGZyb20gJ2Fwb2xsby1ib29zdCc7XHJcbmltcG9ydCB7IEFuaW1hdGVQcmVzZW5jZSB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xyXG5pbXBvcnQga2V5cyBmcm9tICcuLi9jb25maWcva2V5cyc7XHJcblxyXG5jb25zdCBBcHAgPSAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcywgcm91dGVyIH0pID0+IHtcclxuXHJcbiBsZXQgdG9rZW4gPSBudWxsO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy9HZXQgYWxsIHVzZXJzIC0gZm9yIHRoZSBzZWFyY2hiYXIgdXNlciBzZWFyY2hcclxuICAgIGdldEFsbFVzZXJzKCk7XHJcbiAgICBcclxuICAgIC8vIENoZWNrIGZvciB0b2tlbiBpbiBsb2NhbCBzdG9yYWdlIG9uY2UgdGhlIGNvbXBvbmVudCBtb3VudHMgLSBpLmUuIGNvZGUgaXMgbm93IHJ1biBpbiB0aGUgYnJvd3NlciAoaW5zdGVhZCBvZiBvbiB0aGUgc2VydmVyKVxyXG4gICAgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKTtcclxuICAgIGlmICh0b2tlbikge1xyXG4gICAgICBzZXRBdXRoU3RhdGUoey4uLmF1dGhTdGF0ZSwgYXV0aGVudGljYXRlZDogdHJ1ZSwgdG9rZW46IHRva2VufSk7XHJcbiAgICAgIFxyXG4gICAgICAvLyBHZXQgdGhlIGxvZ2dlZCBpbiB1c2VyJ3MgZGF0YVxyXG4gICAgICBnZXRVc2VyRGF0YUJ5VG9rZW4odG9rZW4pXHJcblxyXG4gICAgfVxyXG4gIH0sIFtdKVxyXG5cclxuICBjb25zdCBlbXB0eVVzZXIgPSB7XHJcbiAgICBpZDogJycsXHJcbiAgICBmaXJzdE5hbWU6ICcnLFxyXG4gICAgbGFzdE5hbWU6ICcnLFxyXG4gICAgam9iVGl0bGU6ICcnLFxyXG4gICAgbG9jYXRpb246ICcnLFxyXG4gICAgbGFuZ3VhZ2VzOiBbXSxcclxuICAgIGFib3V0OiAnJyxcclxuICAgIG93bmVkVmlkZW9zOiBbXSxcclxuICAgIHVzZXJDb21tZW50czogW10sXHJcbiAgICBwbGF5bGlzdENvbW1lbnRzOiBbXSxcclxuICAgIGZhdm91cml0ZXM6IFtdLFxyXG4gICAgcHJvZmlsZVBob3RvRmlsZW5hbWU6ICcnXHJcbiAgfVxyXG5cclxuXHJcbiAgLy8gU3RhdGVcclxuICBjb25zdCBbYXV0aFN0YXRlLCBzZXRBdXRoU3RhdGVdID0gdXNlU3RhdGUoe1xyXG4gICAgYXV0aGVudGljYXRlZDogZmFsc2UsXHJcbiAgICB1c2VySWQ6IG51bGwsXHJcbiAgICB0b2tlbjogbnVsbCxcclxuICAgIHRva2VuRXhwaXJhdGlvbjogbnVsbFxyXG4gIH0pO1xyXG5cclxuICAvLyBMb2dnZWQgaW4gVXNlcidzIERhdGFcclxuICBjb25zdCBbY3VycmVudFVzZXIsIHNldEN1cnJlbnRVc2VyXSA9IHVzZVN0YXRlKGVtcHR5VXNlcik7XHJcblxyXG4gIC8vIEN1cnJlbnQgcHJvZmlsZXMgdXNlciBkYXRhXHJcbiAgY29uc3QgW3Byb2ZpbGVVc2VyLCBzZXRQcm9maWxlVXNlcl0gPSB1c2VTdGF0ZShlbXB0eVVzZXIpO1xyXG5cclxuICAvLyBjb25zdCBbcHJvZmlsZVBob3RvLCBzZXRQcm9maWxlUGhvdG9dID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgXHJcbiAgY29uc3QgW3ZpZGVvU3RhdGUsIHNldFZpZGVvU3RhdGVdID0gdXNlU3RhdGUoe1xyXG4gICAgdGl0bGU6ICcnLFxyXG4gICAgLy8gZGVzY3JpcHRpb246JycsXHJcbiAgICB2aWRlb0lkOiAnJ1xyXG4gIH0pO1xyXG5cclxuICBjb25zdCBbY29tbWVudFN0YXRlLCBzZXRDb21tZW50U3RhdGVdID0gdXNlU3RhdGUoe1xyXG4gICAgY29tbWVudDogbnVsbFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBbYWxsVXNlcnMsIHNldEFsbFVzZXJzXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgY29uc3QgWyBhdXRvcGxheSwgc2V0QXV0b3BsYXkgXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcblxyXG5cclxuICAvLyBBVVRIRU5USUNBVElPTiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgXHJcbiAgLy8gTG9naW4gYSB1c2VyXHJcbiAgY29uc3QgbG9naW4gPSBhc3luYyAoZW1haWwsIHBhc3N3b3JkKSA9PiB7XHJcblxyXG4gICAgLy8gTWFrZSBhIEFQSSBxdWVyeSB0byBnZXQgYSB0b2tlblxyXG4gICAgY29uc3QgcmVxdWVzdEJvZHkgPSB7XHJcbiAgICAgIHF1ZXJ5OiBgXHJcbiAgICAgICAgcXVlcnkge1xyXG4gICAgICAgICAgbG9naW4oZW1haWw6IFwiJHtlbWFpbH1cIiwgcGFzc3dvcmQ6IFwiJHtwYXNzd29yZH1cIikge1xyXG4gICAgICAgICAgICB1c2VySWQsXHJcbiAgICAgICAgICAgIHRva2VuXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICBgXHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJy9ncmFwaHFsJywge1xyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHJlcXVlc3RCb2R5KSxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG5cclxuICAgICAgaWYgKHJlcy5zdGF0dXMgIT09IDIwMCAmJiByZXMuc3RhdHVzICE9PSAyMDEpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0xvZ2luIGZhaWxlZCEnKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gLmpzb24oKSBpcyBhIG1ldGhvZCBmcm9tIGZldGNoIEFQSSB0aGF0IGF1dG8gZXh0cmFjdHMgJiBwYXJzZXMgdGhlIHJlcyBib2R5XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG5cclxuICAgICAgLy8gQ2hlY2sgZm9yIGVycm9ycyBhcnJheSBpbiByZXNwb25zZVxyXG4gICAgICBpZiAoZGF0YS5lcnJvcnMpIHtcclxuICAgICAgICByZXR1cm4geyBlcnJvcjogZGF0YS5lcnJvcnMgfTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gU2V0IHN0YXRlIHdpdGggcmV0dXJuZWQgYXV0aCBkYXRhXHJcbiAgICAgIGNvbnN0IHsgdXNlcklkLCB0b2tlbiB9ID0gZGF0YS5kYXRhLmxvZ2luO1xyXG5cclxuICAgICAgc2V0QXV0aFN0YXRlKHsgLi4uYXV0aFN0YXRlLCBhdXRoZW50aWNhdGVkOiB0cnVlLCB1c2VySWQsIHRva2VuIH0pO1xyXG5cclxuICAgICAgLy8gU2F2ZSB0b2tlbiB0byBsb2NhbCBzdG9yYWdlXHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2tlbicsIHRva2VuKVxyXG5cclxuICAgICAgLy8gRmV0Y2ggdGhlIHVzZXIgZGF0YSBhbmQgc2V0IGN1cnJlbnRVc2VyIHN0YXRlXHJcbiAgICAgIGF3YWl0IGdldFVzZXJEYXRhQnlUb2tlbih0b2tlbik7XHJcblxyXG4gICAgICAvLyBSZWRpcmVjdCB0byB1c2VyJ3MgcHJvZmlsZSBwYWdlXHJcbiAgICAgIFJvdXRlci5wdXNoKGAvcHJvZmlsZS8ke3VzZXJJZH1gKTtcclxuXHJcbiAgICAgIC8vIFJldHVybiBpdGVtIG9iamVjdCBpbmRpY2F0aW5nIG5vIGVycm9yc1xyXG4gICAgICByZXR1cm4ge307XHJcblxyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgLy8gUmVnaXN0ZXIgYSB1c2VyXHJcbiAgY29uc3QgcmVnaXN0ZXIgPSBhc3luYyAoZmlyc3ROYW1lLCBsYXN0TmFtZSwgZW1haWwsIHBhc3N3b3JkKSA9PiB7XHJcblxyXG4gICAgLy8gTWFrZSBhIEFQSSBxdWVyeSB0byBnZXQgYSB0b2tlblxyXG4gICAgY29uc3QgcmVxdWVzdEJvZHkgPSB7XHJcbiAgICAgIHF1ZXJ5OiBgXHJcbiAgICAgIG11dGF0aW9uIHtcclxuICAgICAgICBjcmVhdGVVc2VyKHVzZXJJbnB1dDoge2ZpcnN0TmFtZTogXCIke2ZpcnN0TmFtZX1cIiwgbGFzdE5hbWU6IFwiJHtsYXN0TmFtZX1cIiwgZW1haWw6IFwiJHtlbWFpbH1cIiwgcGFzc3dvcmQ6IFwiJHtwYXNzd29yZH1cIn0pIHtcclxuICAgICAgICAgIGVtYWlsXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICBgXHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgLy8gY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJy9ncmFwaHFsJywge1xyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnL2dyYXBocWwnLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocmVxdWVzdEJvZHkpLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcblxyXG4gICAgICBpZiAocmVzLnN0YXR1cyAhPT0gMjAwICYmIHJlcy5zdGF0dXMgIT09IDIwMSkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignQWNjb3VudCBjcmVhdGlvbiBmYWlsZWQhJyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIC5qc29uKCkgaXMgYSBtZXRob2QgZnJvbSBmZXRjaCBBUEkgdGhhdCBhdXRvIGV4dHJhY3RzICYgcGFyc2VzIHRoZSByZXMgYm9keVxyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuXHJcbiAgICAgIC8vIENoZWNrIGZvciBlcnJvcnMgYXJyYXkgaW4gcmVzcG9uc2VcclxuICAgICAgaWYgKGRhdGEuZXJyb3JzKSB7XHJcbiAgICAgICAgcmV0dXJuIHtuZXdVc2VyRW1haWw6ICcnLCBlcnJvcjogZGF0YS5lcnJvcnN9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IG5ld1VzZXJFbWFpbCA9IChkYXRhLmRhdGEuY3JlYXRlVXNlci5lbWFpbCk7XHJcbiAgICAgIHJldHVybiB7IG5ld1VzZXJFbWFpbDogbmV3VXNlckVtYWlsLCBlcnJvcjogW119O1xyXG5cclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gIC8vIExvZ291dCBhIHVzZXJcclxuICBjb25zdCBsb2dvdXQgPSAoKSA9PiB7XHJcbiAgICAvLyBSZWRpcmVjdCB0byBob21lIHBhZ2VcclxuICAgIFJvdXRlci5wdXNoKCcvJyk7XHJcbiAgICAvLyBDbGVhciB0aGUgYXV0aFN0YXRlXHJcbiAgICBzZXRBdXRoU3RhdGUoe1xyXG4gICAgICBhdXRoRGF0YTogbnVsbFxyXG4gICAgfSlcclxuICAgIC8vIFJlbW92ZSB0b2tlbiBmcm9tIGxvY2FsU3RvcmFnZVxyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3Rva2VuJyk7XHJcbiAgICAvLyBDbGVhciB0aGUgY3VycmVudCB1c2VyXHJcbiAgICBzZXRDdXJyZW50VXNlcihlbXB0eVVzZXIpO1xyXG5cclxuICAgIHNldFByb2ZpbGVVc2VyKGVtcHR5VXNlcik7XHJcbiAgICBcclxuICB9XHJcblxyXG4gIC8vIFVTRVIgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICBjb25zdCB1cGRhdGVVc2VyID0gYXN5bmMgKGZpcnN0TmFtZSwgbGFzdE5hbWUsIGpvYlRpdGxlLCBsb2NhdGlvbiwgbGFuZ3VhZ2VzLCBhYm91dCkgPT4ge1xyXG5cclxuICAgIC8vIE1ha2UgYSBBUEkgcXVlcnkgdG8gZ2V0IGEgdG9rZW5cclxuICAgIGNvbnN0IHJlcXVlc3RCb2R5ID0ge1xyXG4gICAgICBxdWVyeTogYFxyXG4gICAgICBtdXRhdGlvbiB7XHJcbiAgICAgICAgdXBkYXRlVXNlcihwcm9maWxlSW5wdXQ6IHtmaXJzdE5hbWU6IFwiJHtmaXJzdE5hbWV9XCIsIGxhc3ROYW1lOiBcIiR7bGFzdE5hbWV9XCIsIGpvYlRpdGxlOiBcIiR7am9iVGl0bGV9XCIsIGxvY2F0aW9uOiBcIiR7bG9jYXRpb259XCIsIFxyXG4gICAgICAgIGxhbmd1YWdlczogW1xyXG4gICAgICAgICAgXCIke2xhbmd1YWdlc1swXX1cIixcclxuICAgICAgICAgIFwiJHtsYW5ndWFnZXNbMV19XCIsIFxyXG4gICAgICAgICAgXCIke2xhbmd1YWdlc1syXX1cIiwgXHJcbiAgICAgICAgICBcIiR7bGFuZ3VhZ2VzWzNdfVwiXHJcbiAgICAgICAgXSxcclxuICAgICAgICBhYm91dDogXCIke2Fib3V0fVwifSkge1xyXG4gICAgICAgICAgZmlyc3ROYW1lLFxyXG4gICAgICAgICAgbGFzdE5hbWUsXHJcbiAgICAgICAgICBqb2JUaXRsZSxcclxuICAgICAgICAgIGxvY2F0aW9uLFxyXG4gICAgICAgICAgbGFuZ3VhZ2VzLFxyXG4gICAgICAgICAgYWJvdXRcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIGBcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnL2dyYXBocWwnLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocmVxdWVzdEJvZHkpLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IGBCZWFyZXIgJHthdXRoU3RhdGUudG9rZW59YFxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuXHJcbiAgICAgIGlmIChyZXMuc3RhdHVzICE9PSAyMDAgJiYgcmVzLnN0YXR1cyAhPT0gMjAxKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVc2VyIHVwZGF0ZSBmYWlsZWQhJyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIC5qc29uKCkgaXMgYSBtZXRob2QgZnJvbSBmZXRjaCBBUEkgdGhhdCBhdXRvIGV4dHJhY3RzICYgcGFyc2VzIHRoZSByZXMgYm9keVxyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuXHJcbiAgICAgIC8vIENoZWNrIGZvciBlcnJvcnMgYXJyYXkgaW4gcmVzcG9uc2VcclxuICAgICAgaWYgKGRhdGEuZXJyb3JzKSB7XHJcbiAgICAgICAgZGF0YS5lcnJvcnMubWFwKGVycm9yID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLm1lc3NhZ2UpXHJcbiAgICAgICAgfSlcclxuICAgICAgICByZXR1cm5cclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gUmVmcmVzaCB0aGUgcHJvZmlsZSB3aXRoIHRoZSBuZXcgdXNlciBkYXRhIC0gdG8gdXBkYXRlIHRoZSBwcm9maWxlSW5mbyBzZWN0aW9uXHJcbiAgICAgIGZldGNoUHJvZmlsZVVzZXIocHJvZmlsZVVzZXIuaWQsIGZhbHNlKVxyXG5cclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG4gIFxyXG5cclxuICBcclxuICAvLyBEQVRBIEZFVENISU5HICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuXHJcbiAgY29uc3QgZ2V0QWxsVXNlcnMgPSBhc3luYyAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgcmVxdWVzdEJvZHkgPSB7XHJcbiAgICAgIHF1ZXJ5OiBgXHJcbiAgICAgICAgcXVlcnkge1xyXG4gICAgICAgICAgdXNlcnMge1xyXG4gICAgICAgICAgICBfaWQsXHJcbiAgICAgICAgICAgIGZpcnN0TmFtZSxcclxuICAgICAgICAgICAgbGFzdE5hbWVcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIGBcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnL2dyYXBocWwnLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocmVxdWVzdEJvZHkpLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IGBCZWFyZXIgJHthdXRoU3RhdGUudG9rZW59YFxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuXHJcbiAgICAgIGlmIChyZXMuc3RhdHVzICE9PSAyMDAgJiYgcmVzLnN0YXR1cyAhPT0gMjAxKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdGYWlsZWQgdG8gZmV0Y2ggdXNlciBkYXRhJyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIC5qc29uKCkgaXMgYSBtZXRob2QgZnJvbSBmZXRjaCBBUEkgdGhhdCBhdXRvIGV4dHJhY3RzICYgcGFyc2VzIHRoZSByZXMgYm9keVxyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuXHJcbiAgICAgIC8vIENoZWNrIGZvciBlcnJvcnMgYXJyYXkgaW4gcmVzcG9uc2VcclxuICAgICAgaWYgKGRhdGEuZXJyb3JzKSB7XHJcbiAgICAgICAgZGF0YS5lcnJvcnMubWFwKGVycm9yID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLm1lc3NhZ2UpXHJcbiAgICAgICAgfSlcclxuICAgICAgICByZXR1cm5cclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgdXNlcnMgPSAoZGF0YS5kYXRhLnVzZXJzKTtcclxuXHJcbiAgICAgIC8vIEdldCBmdWxsIG5hbWUgZm9yIHVzZSBpbiBzZWFyY2hiYXJcclxuICAgICAgY29uc3QgdXNlcnNXaXRoRnVsbE5hbWUgPSB1c2Vycy5tYXAodXNlciA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIGlkOiB1c2VyLl9pZCxcclxuICAgICAgICAgIG5hbWU6IHVzZXIuZmlyc3ROYW1lICsgJyAnICsgdXNlci5sYXN0TmFtZVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuXHJcbiAgICAgIHNldEFsbFVzZXJzKHVzZXJzV2l0aEZ1bGxOYW1lKTtcclxuXHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH1cclxuXHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIGNvbnN0IGdldFVzZXJEYXRhQnlJZCA9IGFzeW5jICh1c2VySWQsIHJlcXVlc3RCb2R5PXt9KSA9PiB7XHJcbiAgICAvLyBjb25zb2xlLmxvZygnZ2V0VXNlckRhdGEgY2FsbGVkIHdpdGggaWQ6JywgdXNlcklkKVxyXG5cclxuICAgIGlmIChyZXF1ZXN0Qm9keSA9IHt9KXtcclxuICAgICAgcmVxdWVzdEJvZHkgPSB7XHJcbiAgICAgICAgcXVlcnk6IGBcclxuICAgICAgICAgIHF1ZXJ5IHtcclxuICAgICAgICAgICAgdXNlckJ5SWQoaWQ6XCIke3VzZXJJZH1cIikge1xyXG4gICAgICAgICAgICAgIGZpcnN0TmFtZSxcclxuICAgICAgICAgICAgICBsYXN0TmFtZSxcclxuICAgICAgICAgICAgICBqb2JUaXRsZSxcclxuICAgICAgICAgICAgICBsb2NhdGlvbixcclxuICAgICAgICAgICAgICBfaWQsXHJcbiAgICAgICAgICAgICAgbGFuZ3VhZ2VzLFxyXG4gICAgICAgICAgICAgIGFib3V0LFxyXG4gICAgICAgICAgICAgIG93bmVkVmlkZW9zIHtcclxuICAgICAgICAgICAgICAgIF9pZCxcclxuICAgICAgICAgICAgICAgIHRodW1ibmFpbFVSTCxcclxuICAgICAgICAgICAgICAgIHRpdGxlLFxyXG4gICAgICAgICAgICAgICAgdmlkZW9VUkxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIHBsYXlsaXN0Q29tbWVudHN7XHJcbiAgICAgICAgICAgICAgICBfaWQsXHJcbiAgICAgICAgICAgICAgICBjb250ZW50LFxyXG4gICAgICAgICAgICAgICAgY29tbWVudGVyIHtcclxuICAgICAgICAgICAgICAgICAgX2lkXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgY3JlYXRlZEF0LFxyXG4gICAgICAgICAgICAgICAgdXBkYXRlZEF0XHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBmYXZvdXJpdGVzLFxyXG4gICAgICAgICAgICAgIHByb2ZpbGVQaG90b0ZpbGVuYW1lXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGBcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJy9ncmFwaHFsJywge1xyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHJlcXVlc3RCb2R5KSxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBgQmVhcmVyICR7YXV0aFN0YXRlLnRva2VufWBcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcblxyXG4gICAgICBpZiAocmVzLnN0YXR1cyAhPT0gMjAwICYmIHJlcy5zdGF0dXMgIT09IDIwMSkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignRmFpbGVkIHRvIGZldGNoIHVzZXIgZGF0YScpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyAuanNvbigpIGlzIGEgbWV0aG9kIGZyb20gZmV0Y2ggQVBJIHRoYXQgYXV0byBleHRyYWN0cyAmIHBhcnNlcyB0aGUgcmVzIGJvZHlcclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcblxyXG4gICAgICAvLyBDaGVjayBmb3IgZXJyb3JzIGFycmF5IGluIHJlc3BvbnNlXHJcbiAgICAgIGlmIChkYXRhLmVycm9ycykge1xyXG4gICAgICAgIGRhdGEuZXJyb3JzLm1hcChlcnJvciA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvci5tZXNzYWdlKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmV0dXJuXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IHVzZXIgPSAoZGF0YS5kYXRhLnVzZXJCeUlkKTtcclxuICAgICAgcmV0dXJuIHVzZXI7XHJcblxyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9XHJcblxyXG4gIH1cclxuICBcclxuICBcclxuICAvLyBHZXQgbG9nZ2VkIGluIHVzZXIncyBkYXRhIGFuZCBzZXRzIGl0IGluIHRoZSB1c2VyU3RhdGVcclxuICBjb25zdCBnZXRVc2VyRGF0YUJ5VG9rZW4gPSBhc3luYyAodG9rZW4pID0+IHtcclxuXHJcbiAgICBsZXQgcmVxdWVzdEJvZHk7XHJcblxyXG4gICAgLy8gSWYgbm8gdXNlcklkIHRoZW4gcXVlcnkgdGhlIGN1cnJlbnQgbG9nZ2VkIGluIHVzZXIgYnkgdG9rZW5cclxuICAgIHJlcXVlc3RCb2R5ID0ge1xyXG4gICAgICBxdWVyeTogYFxyXG4gICAgICAgIHF1ZXJ5IHtcclxuICAgICAgICAgIHVzZXJCeVRva2Vue1xyXG4gICAgICAgICAgICBmaXJzdE5hbWUsXHJcbiAgICAgICAgICAgIGxhc3ROYW1lLFxyXG4gICAgICAgICAgICBqb2JUaXRsZSxcclxuICAgICAgICAgICAgbG9jYXRpb24sXHJcbiAgICAgICAgICAgIF9pZCxcclxuICAgICAgICAgICAgbGFuZ3VhZ2VzLFxyXG4gICAgICAgICAgICBhYm91dCxcclxuICAgICAgICAgICAgb3duZWRWaWRlb3Mge1xyXG4gICAgICAgICAgICAgIF9pZCxcclxuICAgICAgICAgICAgICB0aXRsZSxcclxuICAgICAgICAgICAgICB0aHVtYm5haWxVUkwsXHJcbiAgICAgICAgICAgICAgdmlkZW9VUkxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcGxheWxpc3RDb21tZW50c3tcclxuICAgICAgICAgICAgICBfaWQsXHJcbiAgICAgICAgICAgICAgY29udGVudCxcclxuICAgICAgICAgICAgICBjb21tZW50ZXIge1xyXG4gICAgICAgICAgICAgIF9pZCBcclxuICAgICAgICAgICAgICB9LCAgXHJcbiAgICAgICAgICAgICAgY3JlYXRlZEF0LFxyXG4gICAgICAgICAgICAgIHVwZGF0ZWRBdFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBmYXZvdXJpdGVzLFxyXG4gICAgICAgICAgICBwcm9maWxlUGhvdG9GaWxlbmFtZVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgYFxyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCcvZ3JhcGhxbCcsIHtcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShyZXF1ZXN0Qm9keSksXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICdBdXRob3JpemF0aW9uJzogYEJlYXJlciAke3Rva2VufWBcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcblxyXG4gICAgICBpZiAocmVzLnN0YXR1cyAhPT0gMjAwICYmIHJlcy5zdGF0dXMgIT09IDIwMSkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignRmFpbGVkIHRvIGZldGNoIHVzZXIgZGF0YScpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyAuanNvbigpIGlzIGEgbWV0aG9kIGZyb20gZmV0Y2ggQVBJIHRoYXQgYXV0byBleHRyYWN0cyAmIHBhcnNlcyB0aGUgcmVzIGJvZHlcclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcblxyXG4gICAgICAvLyBDaGVjayBmb3IgZXJyb3JzIGFycmF5IGluIHJlc3BvbnNlXHJcbiAgICAgIGlmIChkYXRhLmVycm9ycykge1xyXG4gICAgICAgIGRhdGEuZXJyb3JzLm1hcChlcnJvciA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvci5tZXNzYWdlKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmV0dXJuXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IHVzZXIgPSBkYXRhLmRhdGEudXNlckJ5VG9rZW47XHJcbiAgICAgIFxyXG4gICAgICBzZXRDdXJyZW50VXNlcih7XHJcbiAgICAgICAgaWQ6IHVzZXIuX2lkLFxyXG4gICAgICAgIGZpcnN0TmFtZTogdXNlci5maXJzdE5hbWUsXHJcbiAgICAgICAgbGFzdE5hbWU6IHVzZXIubGFzdE5hbWUsXHJcbiAgICAgICAgam9iVGl0bGU6IHVzZXIuam9iVGl0bGUsXHJcbiAgICAgICAgbG9jYXRpb246IHVzZXIubG9jYXRpb24sXHJcbiAgICAgICAgbGFuZ3VhZ2VzOiB1c2VyLmxhbmd1YWdlcyxcclxuICAgICAgICBhYm91dDogdXNlci5hYm91dCxcclxuICAgICAgICBvd25lZFZpZGVvczogdXNlci5vd25lZFZpZGVvcyxcclxuICAgICAgICB1c2VyQ29tbWVudHM6IHVzZXIudXNlckNvbW1lbnRzLFxyXG4gICAgICAgIHBsYXlsaXN0Q29tbWVudHM6IHVzZXIucGxheWxpc3RDb21tZW50cyxcclxuICAgICAgICBmYXZvdXJpdGVzOiB1c2VyLmZhdm91cml0ZXMsXHJcbiAgICAgICAgcHJvZmlsZVBob3RvRmlsZW5hbWU6IHVzZXIucHJvZmlsZVBob3RvRmlsZW5hbWVcclxuICAgICAgfSkgIFxyXG5cclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgfVxyXG5cclxuICBjb25zdCBmZXRjaFByb2ZpbGVVc2VyID0gYXN5bmMgKHVzZXJJZCwgaW5pdGlhbEZldGNoKSA9PiB7XHJcblxyXG4gICAgaWYgKGluaXRpYWxGZXRjaCA9PT0gdHJ1ZSkge1xyXG4gICAgICAvLyBPbmx5IGZldGNoIGRhdGEgaWYgcHJvZmlsZVVzZXIgaXNuJ3QgcG9wdWxhdGVkXHJcbiAgICAgIGlmIChwcm9maWxlVXNlci5maXJzdE5hbWUgIT09ICcnKSB7XHJcbiAgICAgICAgcmV0dXJuXHJcbiAgICAgIH1cclxuICAgICAgLy8gT25seSBmZXRjaCBkYXRhIGlmIHRoZSB1c2VySWQgaGFzIGJlZW4gcGFyc2VkIGZyb20gdGhlIFVSTFxyXG4gICAgICBpZiAodXNlcklkID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICByZXR1cm5cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gR2V0IHRoZSBwcm9maWxlIHVzZXIncyBkYXRhIHVzaW5nIHRoZSB1c2VySWQgZnJvbSB0aGUgVVJMXHJcbiAgICBjb25zdCB1c2VyID0gYXdhaXQgZ2V0VXNlckRhdGFCeUlkKHVzZXJJZCk7XHJcblxyXG4gICAgLy8gU2V0IHRoZSBzdGF0ZVxyXG4gICAgc2V0UHJvZmlsZVVzZXIoe1xyXG4gICAgICBpZDogdXNlcklkLFxyXG4gICAgICBmaXJzdE5hbWU6IHVzZXIuZmlyc3ROYW1lLFxyXG4gICAgICBsYXN0TmFtZTogdXNlci5sYXN0TmFtZSxcclxuICAgICAgam9iVGl0bGU6IHVzZXIuam9iVGl0bGUsXHJcbiAgICAgIGxvY2F0aW9uOiB1c2VyLmxvY2F0aW9uLFxyXG4gICAgICBsYW5ndWFnZXM6IHVzZXIubGFuZ3VhZ2VzLFxyXG4gICAgICBhYm91dDogdXNlci5hYm91dCxcclxuICAgICAgb3duZWRWaWRlb3M6IHVzZXIub3duZWRWaWRlb3MsXHJcbiAgICAgIHVzZXJDb21tZW50czogdXNlci51c2VyQ29tbWVudHMsXHJcbiAgICAgIHBsYXlsaXN0Q29tbWVudHM6IHVzZXIucGxheWxpc3RDb21tZW50cyxcclxuICAgICAgZmF2b3VyaXRlczogdXNlci5mYXZvdXJpdGVzLFxyXG4gICAgICBwcm9maWxlUGhvdG9GaWxlbmFtZTogdXNlci5wcm9maWxlUGhvdG9GaWxlbmFtZVxyXG5cclxuICAgIH0pXHJcblxyXG4gICAgLy9TZXQgdmlkZW8gc3RhdGUgdG8gYmUgZmlyc3QgdmlkZW8gaW4gcHJvZmlsZSB1c2VyJ3MgcGxheWxpc3QgLSBidXQgb25seSBpZiBpbml0aWFsIGZldGNoXHJcbiAgICBpZiAoaW5pdGlhbEZldGNoID09PSB0cnVlICYgdXNlci5vd25lZFZpZGVvcy5sZW5ndGggPiAwKXtcclxuICAgICAgY29uc3QgdmlkZW8gPSB1c2VyLm93bmVkVmlkZW9zWzBdXHJcbiAgICAgIHNldEN1cnJlbnRWaWRlbyh7XHJcbiAgICAgICAgdGl0bGU6IHZpZGVvLnRpdGxlLFxyXG4gICAgICAgIHZpZGVvSWQ6IHZpZGVvLnZpZGVvVVJMXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgICByZXR1cm4gdXNlcjtcclxuICB9XHJcblxyXG4gIC8vIFJlc2V0IHRoZSBQcm9maWxlVXNlciBzdGF0ZVxyXG4gIGNvbnN0IGNsZWFyUHJvZmlsZVVzZXIgPSAoKSA9PiB7XHJcbiAgICBzZXRQcm9maWxlVXNlcih7XHJcbiAgICAgIGlkOiAnJyxcclxuICAgICAgZmlyc3ROYW1lOiAnJyxcclxuICAgICAgbGFzdE5hbWU6ICcnLFxyXG4gICAgICBqb2JUaXRsZTogJycsXHJcbiAgICAgIGxvY2F0aW9uOiAnJyxcclxuICAgICAgbGFuZ3VhZ2VzOiBbXSxcclxuICAgICAgYWJvdXQ6ICcnLFxyXG4gICAgICBvd25lZFZpZGVvczogW10sXHJcbiAgICAgIHVzZXJDb21tZW50czogW10sXHJcbiAgICAgIHBsYXlsaXN0Q29tbWVudHM6IFtdLFxyXG4gICAgICBmYXZvdXJpdGVzOiBbXSxcclxuICAgICAgcHJvZmlsZVBob3RvRmlsZW5hbWU6ICcnXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGdldENvbW1lbnRVc2VyID0gYXN5bmMgKHVzZXJJZCkgPT4ge1xyXG4gICAgbGV0IHJlcXVlc3RCb2R5ID0ge1xyXG4gICAgICBxdWVyeTogYFxyXG4gICAgICAgICAgcXVlcnkge1xyXG4gICAgICAgICAgICB1c2VyQnlJZChpZDpcIiR7dXNlcklkfVwiKSB7XHJcbiAgICAgICAgICAgICAgZmlyc3ROYW1lLFxyXG4gICAgICAgICAgICAgIGxhc3ROYW1lLFxyXG4gICAgICAgICAgICAgIHByb2ZpbGVQaG90b0ZpbGVuYW1lXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGBcclxuICAgIH1cclxuICAgIGNvbnN0IGNvbW1lbnRVc2VyID0gYXdhaXQgZ2V0VXNlckRhdGFCeUlkKHVzZXJJZCwgcmVxdWVzdEJvZHkpO1xyXG4gICAgcmV0dXJuIGNvbW1lbnRVc2VyO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgZ2V0RmF2b3VyaXRlVXNlciA9IGFzeW5jICh1c2VySWQpID0+IHtcclxuICAgIGxldCByZXF1ZXN0Qm9keSA9IHtcclxuICAgICAgcXVlcnk6IGBcclxuICAgICAgICAgIHF1ZXJ5IHtcclxuICAgICAgICAgICAgdXNlckJ5SWQoaWQ6XCIke3VzZXJJZH1cIikge1xyXG4gICAgICAgICAgICAgIGZpcnN0TmFtZSxcclxuICAgICAgICAgICAgICBsYXN0TmFtZSxcclxuICAgICAgICAgICAgICBwcm9maWxlUGhvdG9GaWxlbmFtZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBgXHJcbiAgICB9XHJcbiAgICBjb25zdCBmYXZvdXJpdGVVc2VyID0gYXdhaXQgZ2V0VXNlckRhdGFCeUlkKHVzZXJJZCwgcmVxdWVzdEJvZHkpXHJcbiAgICByZXR1cm4gZmF2b3VyaXRlVXNlcjtcclxuICB9XHJcblxyXG5cclxuXHJcbiAgLy8gVklERU9TICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcblxyXG5cclxuICAvLyBBZGQgYSB2aWRlbyB0byBhIHVzZXIncyBwbGF5bGlzdFxyXG4gIGNvbnN0IGFkZFZpZGVvVG9QbGF5bGlzdCA9IGFzeW5jICh2aWRlbykgPT4ge1xyXG5cclxuICAgIC8vIFNlbmQgYW4gQVBJIHJlcXVlc3QgdG8gc2F2ZSB0aGUgdmlkZW9cclxuICAgIGNvbnN0IHJlcXVlc3RCb2R5ID0ge1xyXG4gICAgICBxdWVyeTogYFxyXG4gICAgICAgIG11dGF0aW9uIHtcclxuICAgICAgICAgIGNyZWF0ZVZpZGVvKHZpZGVvSW5wdXQ6IHt0aXRsZTogXCIke3ZpZGVvLnRpdGxlfVwiLCB0aHVtYm5haWxVUkw6IFwiJHt2aWRlby50aHVtYm5haWxVUkx9XCIsIHZpZGVvVVJMOiBcIiR7dmlkZW8udmlkZW9JZH1cIiwgdXNlcklkOiBcIiR7Y3VycmVudFVzZXIuaWR9XCJ9KSB7XHJcbiAgICAgICAgICAgIF9pZFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgYFxyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCcvZ3JhcGhxbCcsIHtcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShyZXF1ZXN0Qm9keSksXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICdBdXRob3JpemF0aW9uJzogYEJlYXJlciAke2F1dGhTdGF0ZS50b2tlbn1gXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG5cclxuICAgICAgaWYgKHJlcy5zdGF0dXMgIT09IDIwMCAmJiByZXMuc3RhdHVzICE9PSAyMDEpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZhaWxlZCB0byBjcmVhdGUgdmlkZW8hJyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIC5qc29uKCkgaXMgYSBtZXRob2QgZnJvbSBmZXRjaCBBUEkgdGhhdCBhdXRvIGV4dHJhY3RzICYgcGFyc2VzIHRoZSByZXMgYm9keVxyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuXHJcbiAgICAgIC8vIENoZWNrIGZvciBlcnJvcnMgYXJyYXkgaW4gcmVzcG9uc2VcclxuICAgICAgaWYgKGRhdGEuZXJyb3JzKSB7XHJcbiAgICAgICAgZGF0YS5lcnJvcnMubWFwKGVycm9yID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLm1lc3NhZ2UpXHJcbiAgICAgICAgfSlcclxuICAgICAgICByZXR1cm5cclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gUmVmcmVzaCB0aGUgcHJvZmlsZSB3aXRoIHRoZSBuZXcgdXNlciBkYXRhIC0gdG8gdXBkYXRlIHRoZSBwbGF5bGlzdFxyXG4gICAgICBmZXRjaFByb2ZpbGVVc2VyKGN1cnJlbnRVc2VyLmlkLCBmYWxzZSlcclxuXHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICAvLyBSZW1vdmUgYSB2aWRlbyBmcm9tIGEgdXNlcidzIHBsYXlsaXN0XHJcbiAgY29uc3QgcmVtb3ZlVmlkZW9Gcm9tUGxheWxpc3QgPSBhc3luYyAoaWQpID0+IHtcclxuXHJcbiAgLy8gU2VuZCBhbiBBUEkgcmVxdWVzdCB0byBzYXZlIHRoZSB2aWRlb1xyXG4gICAgY29uc3QgcmVxdWVzdEJvZHkgPSB7XHJcbiAgICAgIHF1ZXJ5OiBgXHJcbiAgICAgICAgbXV0YXRpb24ge1xyXG4gICAgICAgICAgcmVtb3ZlVmlkZW8oaWQ6IFwiJHtpZH1cIikge1xyXG4gICAgICAgICAgICBvd25lZFZpZGVvcyB7XHJcbiAgICAgICAgICAgICAgX2lkLFxyXG4gICAgICAgICAgICAgIHRodW1ibmFpbFVSTCxcclxuICAgICAgICAgICAgICB0aXRsZSxcclxuICAgICAgICAgICAgICB2aWRlb1VSTFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICBgXHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJy9ncmFwaHFsJywge1xyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHJlcXVlc3RCb2R5KSxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBgQmVhcmVyICR7YXV0aFN0YXRlLnRva2VufWBcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcblxyXG4gICAgICBpZiAocmVzLnN0YXR1cyAhPT0gMjAwICYmIHJlcy5zdGF0dXMgIT09IDIwMSkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignRmFpbGVkIHRvIHJlbW92ZSB2aWRlbyEnKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gLmpzb24oKSBpcyBhIG1ldGhvZCBmcm9tIGZldGNoIEFQSSB0aGF0IGF1dG8gZXh0cmFjdHMgJiBwYXJzZXMgdGhlIHJlcyBib2R5XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG5cclxuICAgICAgY29uc3QgdmlkZW9zID0gZGF0YS5kYXRhLnJlbW92ZVZpZGVvLm93bmVkVmlkZW9zO1xyXG5cclxuICAgICAgLy8gQ2hlY2sgZm9yIGVycm9ycyBhcnJheSBpbiByZXNwb25zZVxyXG4gICAgICBpZiAoZGF0YS5lcnJvcnMpIHtcclxuICAgICAgICBkYXRhLmVycm9ycy5tYXAoZXJyb3IgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyb3IubWVzc2FnZSlcclxuICAgICAgICB9KVxyXG4gICAgICAgIHJldHVyblxyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBSZWZyZXNoIHRoZSBwcm9maWxlIHdpdGggdGhlIG5ldyB1c2VyIGRhdGEgLSB0byB1cGRhdGUgdGhlIHBsYXlsaXN0XHJcbiAgICAgIHVwZGF0ZVByb2ZpbGVVc2VyVmlkZW9zKHZpZGVvcylcclxuXHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IHVwZGF0ZVByb2ZpbGVVc2VyVmlkZW9zID0gKHZpZGVvcykgPT4ge1xyXG4gICAgLy8gVXBkYXRlIHRoZSBwcm9maWxlIHVzZXIncyBvd25lZFZpZGVvIGluIHRoIGdsb2JhbCBzdGF0ZVxyXG4gICAgc2V0UHJvZmlsZVVzZXIoey4uLnByb2ZpbGVVc2VyLCBvd25lZFZpZGVvczogdmlkZW9zfSkgXHJcbiAgfVxyXG5cclxuICAvLyBTZXQgYSB2aWRlbyBhcyB0aGUgY3VycmVudCB2aWRlbyBmb3IgdGhlIHZpZGVvIHBsYXllclxyXG4gIGNvbnN0IHNldEN1cnJlbnRWaWRlbyA9ICh2aWRlbykgPT4ge1xyXG4gICAgc2V0VmlkZW9TdGF0ZSh7XHJcbiAgICAgIHRpdGxlOiB2aWRlby50aXRsZSxcclxuICAgICAgLy8gZGVzY3JpcHRpb246IHZpZGVvLmRlc2NyaXB0aW9uLFxyXG4gICAgICB2aWRlb0lkOiB2aWRlby52aWRlb0lkXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcblxyXG4gIFxyXG4gIFxyXG4gIC8vIENPTU1FTlRTICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcblxyXG4gIC8vIEFkZCBhIGNvbW1lbnRcclxuICBjb25zdCBhZGRDb21tZW50ID0gYXN5bmMgKGNvbnRlbnQpID0+IHtcclxuXHJcbiAgICAvLyBTZW5kIGFuIEFQSSByZXF1ZXN0IHRvIHNhdmUgdGhlIGNvbW1lbnRcclxuICAgIGNvbnN0IHJlcXVlc3RCb2R5ID0ge1xyXG4gICAgICBxdWVyeTogYFxyXG4gICAgICAgIG11dGF0aW9uIHtcclxuICAgICAgICAgIGNyZWF0ZUNvbW1lbnQoY29tbWVudElucHV0OiB7Y29udGVudDogXCIke2NvbnRlbnR9XCIsIGNvbW1lbnRlcklkOiBcIiR7Y3VycmVudFVzZXIuaWR9XCIsIHBsYXlsaXN0T3duZXJJZDogXCIke3Byb2ZpbGVVc2VyLmlkfVwifSkge1xyXG4gICAgICAgICAgICBfaWRcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIGBcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnL2dyYXBocWwnLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocmVxdWVzdEJvZHkpLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IGBCZWFyZXIgJHthdXRoU3RhdGUudG9rZW59YFxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuXHJcbiAgICAgIGlmIChyZXMuc3RhdHVzICE9PSAyMDAgJiYgcmVzLnN0YXR1cyAhPT0gMjAxKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdGYWlsZWQgdG8gY3JlYXRlIGNvbW1lbnQhJyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIC5qc29uKCkgaXMgYSBtZXRob2QgZnJvbSBmZXRjaCBBUEkgdGhhdCBhdXRvIGV4dHJhY3RzICYgcGFyc2VzIHRoZSByZXMgYm9keVxyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuXHJcbiAgICAgIC8vIENoZWNrIGZvciBlcnJvcnMgYXJyYXkgaW4gcmVzcG9uc2VcclxuICAgICAgaWYgKGRhdGEuZXJyb3JzKSB7XHJcbiAgICAgICAgZGF0YS5lcnJvcnMubWFwKGVycm9yID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLm1lc3NhZ2UpXHJcbiAgICAgICAgfSlcclxuICAgICAgICByZXR1cm5cclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gUmVmcmVzaCB0aGUgcHJvZmlsZSB3aXRoIHRoZSBuZXcgdXNlciBkYXRhIC0gdG8gdXBkYXRlIHRoZSBjb21tZW50IHNlY3Rpb25cclxuICAgICAgZmV0Y2hQcm9maWxlVXNlcihwcm9maWxlVXNlci5pZCwgZmFsc2UpXHJcblxyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBcclxuICAvLyBSZW1vdmUgYSBjb21tZW50IGZyb20gYSB1c2VyJ3MgcGxheWxpc3RcclxuICBjb25zdCByZW1vdmVDb21tZW50RnJvbVBsYXlsaXN0ID0gYXN5bmMgKGlkKSA9PiB7XHJcblxyXG4gICAgLy8gU2VuZCBhbiBBUEkgcmVxdWVzdCB0byBkZWxldGUgdGhlIGNvbW1lbnRcclxuICAgIGNvbnN0IHJlcXVlc3RCb2R5ID0ge1xyXG4gICAgICBxdWVyeTogYFxyXG4gICAgICAgIG11dGF0aW9uIHtcclxuICAgICAgICAgIHJlbW92ZUNvbW1lbnQoaWQ6IFwiJHtpZH1cIiwgcGxheWxpc3RPd25lcklkOiBcIiR7cHJvZmlsZVVzZXIuaWR9XCIpIHtcclxuICAgICAgICAgICAgcGxheWxpc3RDb21tZW50c3tcclxuICAgICAgICAgICAgICBfaWQsXHJcbiAgICAgICAgICAgICAgY29udGVudCxcclxuICAgICAgICAgICAgICBjb21tZW50ZXIge1xyXG4gICAgICAgICAgICAgICAgX2lkXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBjcmVhdGVkQXQsXHJcbiAgICAgICAgICAgICAgdXBkYXRlZEF0XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIGBcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnL2dyYXBocWwnLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocmVxdWVzdEJvZHkpLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IGBCZWFyZXIgJHthdXRoU3RhdGUudG9rZW59YFxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuXHJcbiAgICAgIGlmIChyZXMuc3RhdHVzICE9PSAyMDAgJiYgcmVzLnN0YXR1cyAhPT0gMjAxKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdGYWlsZWQgdG8gcmVtb3ZlIGNvbW1lbnQhJyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIC5qc29uKCkgaXMgYSBtZXRob2QgZnJvbSBmZXRjaCBBUEkgdGhhdCBhdXRvIGV4dHJhY3RzICYgcGFyc2VzIHRoZSByZXMgYm9keVxyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuXHJcbiAgICAgIGNvbnN0IGNvbW1lbnRzID0gZGF0YS5kYXRhLnJlbW92ZUNvbW1lbnQucGxheWxpc3RDb21tZW50cztcclxuXHJcbiAgICAgIC8vIENoZWNrIGZvciBlcnJvcnMgYXJyYXkgaW4gcmVzcG9uc2VcclxuICAgICAgaWYgKGRhdGEuZXJyb3JzKSB7XHJcbiAgICAgICAgZGF0YS5lcnJvcnMubWFwKGVycm9yID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLm1lc3NhZ2UpXHJcbiAgICAgICAgfSlcclxuICAgICAgICByZXR1cm5cclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gUmVmcmVzaCB0aGUgcHJvZmlsZSB3aXRoIHRoZSBuZXcgdXNlciBkYXRhIC0gdG8gdXBkYXRlIHRoZSBjb21tZW50c1xyXG4gICAgICB1cGRhdGVQcm9maWxlVXNlckNvbW1lbnRzKGNvbW1lbnRzKTtcclxuXHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IHVwZGF0ZVByb2ZpbGVVc2VyQ29tbWVudHMgPSAoY29tbWVudHMpID0+IHtcclxuICAgIC8vIFVwZGF0ZSB0aGUgcHJvZmlsZSB1c2VyJ3MgcGxheWxpc3RDb21tZW50cyBpbiB0aGUgZ2xvYmFsIHN0YXRlXHJcbiAgICBzZXRQcm9maWxlVXNlcih7IC4uLnByb2ZpbGVVc2VyLCBwbGF5bGlzdENvbW1lbnRzOiBjb21tZW50cyB9KVxyXG4gIH1cclxuXHJcbiAgY29uc3QgZWRpdENvbW1lbnQgPSBhc3luYyAoaWQsIGNvbnRlbnQpID0+IHtcclxuXHJcbiAgICAvLyBNYWtlIGEgQVBJIHF1ZXJ5IHRvIGdldCBhIHRva2VuXHJcbiAgICBjb25zdCByZXF1ZXN0Qm9keSA9IHtcclxuICAgICAgcXVlcnk6IGBcclxuICAgICAgbXV0YXRpb24ge1xyXG4gICAgICAgIGVkaXRDb21tZW50KGlkOiBcIiR7aWR9XCIsIGNvbnRlbnQ6IFwiJHtjb250ZW50fVwiKSB7XHJcbiAgICAgICAgICBjb250ZW50XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICBgXHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJy9ncmFwaHFsJywge1xyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHJlcXVlc3RCb2R5KSxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBgQmVhcmVyICR7YXV0aFN0YXRlLnRva2VufWBcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcblxyXG4gICAgICBpZiAocmVzLnN0YXR1cyAhPT0gMjAwICYmIHJlcy5zdGF0dXMgIT09IDIwMSkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVXNlciB1cGRhdGUgZmFpbGVkIScpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyAuanNvbigpIGlzIGEgbWV0aG9kIGZyb20gZmV0Y2ggQVBJIHRoYXQgYXV0byBleHRyYWN0cyAmIHBhcnNlcyB0aGUgcmVzIGJvZHlcclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcblxyXG4gICAgICAvLyBDaGVjayBmb3IgZXJyb3JzIGFycmF5IGluIHJlc3BvbnNlXHJcbiAgICAgIGlmIChkYXRhLmVycm9ycykge1xyXG4gICAgICAgIGRhdGEuZXJyb3JzLm1hcChlcnJvciA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvci5tZXNzYWdlKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmV0dXJuXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIFJlZnJlc2ggdGhlIHByb2ZpbGUgd2l0aCB0aGUgbmV3IHVzZXIgZGF0YSAtIHRvIHVwZGF0ZSB0aGUgY29tbWVudHNcclxuICAgICAgZmV0Y2hQcm9maWxlVXNlcihwcm9maWxlVXNlci5pZCwgZmFsc2UpXHJcblxyXG5cclxuXHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICAvLyBGYXZvdXJpdGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICBjb25zdCBhZGRGYXZvdXJpdGUgPSBhc3luYyAoaWQpID0+IHtcclxuXHJcbiAgICAvLyBTZW5kIGFuIEFQSSByZXF1ZXN0IHRvIGFkZCB0aGUgZmF2b3VyaXRlXHJcbiAgICBjb25zdCByZXF1ZXN0Qm9keSA9IHtcclxuICAgICAgcXVlcnk6IGBcclxuICAgICAgICBtdXRhdGlvbiB7XHJcbiAgICAgICAgICBhZGRGYXZvdXJpdGUoaWQ6IFwiJHtpZH1cIikge1xyXG4gICAgICAgICAgICBfaWRcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIGBcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnL2dyYXBocWwnLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocmVxdWVzdEJvZHkpLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IGBCZWFyZXIgJHthdXRoU3RhdGUudG9rZW59YFxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuXHJcbiAgICAgIGlmIChyZXMuc3RhdHVzICE9PSAyMDAgJiYgcmVzLnN0YXR1cyAhPT0gMjAxKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdGYWlsZWQgdG8gYWRkIGZhdm91cml0ZSEnKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gLmpzb24oKSBpcyBhIG1ldGhvZCBmcm9tIGZldGNoIEFQSSB0aGF0IGF1dG8gZXh0cmFjdHMgJiBwYXJzZXMgdGhlIHJlcyBib2R5XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG5cclxuICAgICAgLy8gQ2hlY2sgZm9yIGVycm9ycyBhcnJheSBpbiByZXNwb25zZVxyXG4gICAgICBpZiAoZGF0YS5lcnJvcnMpIHtcclxuICAgICAgICBkYXRhLmVycm9ycy5tYXAoZXJyb3IgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyb3IubWVzc2FnZSlcclxuICAgICAgICB9KVxyXG4gICAgICAgIHJldHVyblxyXG4gICAgICB9XHJcblxyXG4gICAgICBcclxuICAgICAgLy8gUmVmcmVzaCB0aGUgY3VycmVudFVzZXIncyBkYXRhIHRvIHVwZGF0ZSB0aGUgYWRkIGZhdm91cml0ZSBwcm9maWxlIGJ1dHRvblxyXG4gICAgICAvLyBnZXRVc2VyRGF0YUJ5SWQoY3VycmVudFVzZXIuaWQpXHJcbiAgICAgIC8vIFJlZnJlc2ggdGhlIHByb2ZpbGUgd2l0aCB0aGUgbmV3IHVzZXIgZGF0YSAtIHRvIHVwZGF0ZSB0aGUgZmF2b3VyaXRlcyBzZWN0aW9uXHJcbiAgICAgIC8vIGZldGNoUHJvZmlsZVVzZXIoaWQsIGZhbHNlKVxyXG4gICAgICBnZXRVc2VyRGF0YUJ5VG9rZW4oYXV0aFN0YXRlLnRva2VuKTtcclxuXHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICAvLyBSZW1vdmUgYSBmYXZvdXJpdGUgZnJvbSBhIHVzZXJzIHByb2ZpbGVcclxuICBjb25zdCByZW1vdmVGYXZvdXJpdGUgPSBhc3luYyAoaWQpID0+IHtcclxuXHJcbiAgICAvLyBTZW5kIGFuIEFQSSByZXF1ZXN0IHRvIGRlbGV0ZSB0aGUgY29tbWVudFxyXG4gICAgY29uc3QgcmVxdWVzdEJvZHkgPSB7XHJcbiAgICAgIHF1ZXJ5OiBgXHJcbiAgICAgICAgbXV0YXRpb24ge1xyXG4gICAgICAgICAgcmVtb3ZlRmF2b3VyaXRlKGlkOiBcIiR7aWR9XCIpIHtcclxuICAgICAgICAgICAgZmF2b3VyaXRlc1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgYFxyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCcvZ3JhcGhxbCcsIHtcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShyZXF1ZXN0Qm9keSksXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICdBdXRob3JpemF0aW9uJzogYEJlYXJlciAke2F1dGhTdGF0ZS50b2tlbn1gXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG5cclxuICAgICAgaWYgKHJlcy5zdGF0dXMgIT09IDIwMCAmJiByZXMuc3RhdHVzICE9PSAyMDEpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZhaWxlZCB0byByZW1vdmUgZmF2b3VyaXRlIScpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyAuanNvbigpIGlzIGEgbWV0aG9kIGZyb20gZmV0Y2ggQVBJIHRoYXQgYXV0byBleHRyYWN0cyAmIHBhcnNlcyB0aGUgcmVzIGJvZHlcclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcblxyXG4gICAgICBjb25zdCBmYXZvdXJpdGVzID0gZGF0YS5kYXRhLnJlbW92ZUZhdm91cml0ZS5mYXZvdXJpdGVzO1xyXG4gICAgICBcclxuICAgICAgZ2V0VXNlckRhdGFCeVRva2VuKGF1dGhTdGF0ZS50b2tlbik7XHJcblxyXG5cclxuICAgICAgLy8gQ2hlY2sgZm9yIGVycm9ycyBhcnJheSBpbiByZXNwb25zZVxyXG4gICAgICBpZiAoZGF0YS5lcnJvcnMpIHtcclxuICAgICAgICBkYXRhLmVycm9ycy5tYXAoZXJyb3IgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyb3IubWVzc2FnZSlcclxuICAgICAgICB9KVxyXG4gICAgICAgIHJldHVyblxyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBSZWZyZXNoIHRoZSBwcm9maWxlIHdpdGggdGhlIG5ldyB1c2VyIGRhdGEgLSB0byB1cGRhdGUgdGhlIGZhdm91cml0ZXNcclxuICAgICAgdXBkYXRlUHJvZmlsZVVzZXJGYXZvdXJpdGVzKGZhdm91cml0ZXMpO1xyXG5cclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgdXBkYXRlUHJvZmlsZVVzZXJGYXZvdXJpdGVzID0gKGZhdm91cml0ZXMpID0+IHtcclxuICAgIC8vIFVwZGF0ZSB0aGUgcHJvZmlsZSB1c2VyJ3MgZmF2b3VyaXRlcyBpbiB0aCBnbG9iYWwgc3RhdGVcclxuICAgIHNldFByb2ZpbGVVc2VyKHsgLi4ucHJvZmlsZVVzZXIsIGZhdm91cml0ZXMgfSlcclxuICB9XHJcblxyXG5cclxuICAvLyBQSE9UTyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gIFxyXG4gIGNvbnN0IHVwbG9hZEZpbGUgPSBhc3luYyAoZm9ybURhdGEpID0+IHtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAvLyBNYWtlIEFQSSByZXF1ZXN0IHRvIHVwbG9hZCB0aGUgZmlsZSB0byB0aGUgREJcclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MucG9zdCgnL3VwbG9hZCcsIGZvcm1EYXRhLCB7XHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdtdWx0aXBhcnQvZm9ybS1kYXRhJyxcclxuICAgICAgICAgICdBdXRob3JpemF0aW9uJzogYEJlYXJlciAke2F1dGhTdGF0ZS50b2tlbn1gXHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIC8vIHJlZnJlc2ggdGhlIHByb2ZpbGVcclxuICAgICAgZmV0Y2hQcm9maWxlVXNlcihjdXJyZW50VXNlci5pZClcclxuXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcblxyXG4gIFxyXG4gIFxyXG4gIFxyXG4gIFxyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGV4dFByb3ZpZGVyIHZhbHVlPXt7XHJcbiAgICAgIGF1dGhTdGF0ZSxcclxuICAgICAgY3VycmVudFVzZXIsXHJcbiAgICAgIHByb2ZpbGVVc2VyLFxyXG4gICAgICBzZXRQcm9maWxlVXNlcixcclxuICAgICAgdmlkZW9TdGF0ZSxcclxuICAgICAgY29tbWVudFN0YXRlLFxyXG4gICAgICBhbGxVc2VycyxcclxuICAgICAgYXV0b3BsYXksXHJcbiAgICAgIHNldEF1dG9wbGF5LFxyXG4gICAgICBsb2dpbixcclxuICAgICAgcmVnaXN0ZXIsXHJcbiAgICAgIGxvZ291dCxcclxuICAgICAgdXBkYXRlVXNlcixcclxuICAgICAgZ2V0VXNlckRhdGFCeUlkLFxyXG4gICAgICBnZXRVc2VyRGF0YUJ5VG9rZW4sXHJcbiAgICAgIGZldGNoUHJvZmlsZVVzZXIsXHJcbiAgICAgIGdldENvbW1lbnRVc2VyLFxyXG4gICAgICBnZXRGYXZvdXJpdGVVc2VyLFxyXG4gICAgICBhZGRWaWRlb1RvUGxheWxpc3QsXHJcbiAgICAgIGNsZWFyUHJvZmlsZVVzZXIsXHJcbiAgICAgIHJlbW92ZVZpZGVvRnJvbVBsYXlsaXN0LFxyXG4gICAgICBzZXRDdXJyZW50VmlkZW8sXHJcbiAgICAgIGFkZENvbW1lbnQsXHJcbiAgICAgIGVkaXRDb21tZW50LFxyXG4gICAgICByZW1vdmVDb21tZW50RnJvbVBsYXlsaXN0LFxyXG4gICAgICBhZGRGYXZvdXJpdGUsXHJcbiAgICAgIHJlbW92ZUZhdm91cml0ZSxcclxuICAgICAgdXBsb2FkRmlsZVxyXG4gICAgfX0+XHJcbiAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgPEFuaW1hdGVQcmVzZW5jZSBleGl0QmVmb3JlRW50ZXI+XHJcbiAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICAgICAgPC9BbmltYXRlUHJlc2VuY2U+XHJcbiAgICAgIDwvTGF5b3V0PlxyXG4gICAgPC9Db250ZXh0UHJvdmlkZXI+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHA7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZnJhbWVyLW1vdGlvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzLWV4YWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInF1ZXJ5c3RyaW5nXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWNvb2tpZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWpzeC9zdHlsZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9