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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxDb2RpbmdcXE15UHJvamVjdHNcXGNvZGVycy1qdWtlYm94XFxjb21wb25lbnRzXFxMYXlvdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNEJ1QixBQUkrQixBQU1tQixBQVN4QixBQU1JLEFBS1QsQUFZVSxBQUlULEFBSVksWUFuQkosQ0FnQnZCLElBM0JjLEtBZkgsR0E4Q1gsSUE5QmtCLEVBZk4sQ0EwQlEsUUFyQkgsQ0FKakIsSUFlQSxLQUljLEFBT0csS0FyQkMsT0FlbEIsR0FPZ0QsTUFyQjVCLE9BOEJwQixXQTdCeUIsc0JBcUJYLENBcEJDLFdBcUJFLEVBcEJqQixhQXFCK0Msa0dBQ1gsOEhBQ2xDIiwiZmlsZSI6IkM6XFxDb2RpbmdcXE15UHJvamVjdHNcXGNvZGVycy1qdWtlYm94XFxjb21wb25lbnRzXFxMYXlvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gJy4vTmF2YmFyJztcclxuaW1wb3J0IGNvbG9ycyBmcm9tICcuLi9jc3MtdmFyaWFibGVzL2NvbG9ycyc7XHJcblxyXG5jb25zdCBMYXlvdXQgPSAocHJvcHMpID0+IChcclxuICA8ZGl2PlxyXG4gICAgPEhlYWQ+XHJcbiAgICAgIDx0aXRsZT5Db2RlVHVuZXM8L3RpdGxlPlxyXG4gICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiQSBzb2NpYWwgbXVzaWMgYXBwIGZvciBjb2RlcnNcIi8+XHJcbiAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XHJcbiAgICAgIDxtZXRhIG5hbWU9XCJyb2JvdHNcIiBjb250ZW50PVwibm9pbmRleCwgbm9mb2xsb3dcIi8+XHJcbiAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGhcIi8+XHJcbiAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUJhbG9vK1RoYW1iaSsyJmRpc3BsYXk9c3dhcFwiIHJlbD1cInN0eWxlc2hlZXRcIj48L2xpbms+XHJcbiAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9zdGFja3BhdGguYm9vdHN0cmFwY2RuLmNvbS9mb250LWF3ZXNvbWUvNC43LjAvY3NzL2ZvbnQtYXdlc29tZS5taW4uY3NzXCIvPlxyXG4gICAgICA8bGlua1xyXG4gICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxyXG4gICAgICAgIGhyZWY9XCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9hbmltYXRlLmNzcy80LjAuMC9hbmltYXRlLm1pbi5jc3NcIlxyXG4gICAgICAvPlxyXG4gICAgICA8bGluayByZWw9XCJpY29uXCIgdHlwZT1cImltYWdlL3BuZ1wiIHNpemVzPVwiMzJ4MzJcIiBocmVmPVwiL2Zhdmljb24tMzJ4MzIucG5nXCIgLz5cclxuICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIHR5cGU9XCJpbWFnZS9wbmdcIiBzaXplcz1cIjE2eDE2XCIgaHJlZj1cIi9mYXZpY29uLTE2eDE2LnBuZ1wiIC8+XHJcbiAgICAgIDxsaW5rIHJlbD1cImFwcGxlLXRvdWNoLWljb25cIiBzaXplcz1cIjE4MHgxODBcIiBocmVmPVwiL2FwcGxlLXRvdWNoLWljb24ucG5nXCIgLz5cclxuICAgICAgPGxpbmsgcmVsPVwibWFuaWZlc3RcIiBocmVmPVwiL3NpdGUud2VibWFuaWZlc3RcIiAvPlxyXG4gICAgICA8bGluayByZWw9XCJtYXNrLWljb25cIiBocmVmPVwiL3NhZmFyaS1waW5uZWQtdGFiLnN2Z1wiIGNvbG9yPVwiIzViYmFkNVwiIC8+XHJcbiAgICA8L0hlYWQ+XHJcbiAgICA8TmF2YmFyLz5cclxuICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgIFxyXG5cclxuICAgIDxzdHlsZSBnbG9iYWwganN4PntgXHJcbiAgICBcclxuICAgICAgKiB7XHJcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgfVxyXG5cclxuICAgICAgYm9keSB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdCYWxvbyBUaGFtYmkgMicsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuOGVtO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5jb250YWluZXIge1xyXG4gICAgICAgIG1heC13aWR0aDogMTEwMHB4O1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBhIHtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBidXR0b24ge1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBwYWRkaW5nOiAwLjVyZW0gMXJlbSA7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke2NvbG9ycy5wcmltYXJ5fTtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlLWluLW91dDtcclxuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gODBtcyBlYXNlLWluO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgIGJ1dHRvbjphY3RpdmUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGJ1dHRvbjpmb2N1cyB7XHJcbiAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgYnV0dG9uOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTUzMDVhO1xyXG4gICAgICB9XHJcbiAgICBcclxuICAgIGB9IFxyXG4gICAgPC9zdHlsZT4gXHJcbiAgPC9kaXY+XHJcbilcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExheW91dDtcclxuIl19 */
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
  }, "svg.jsx-688514953{height:55px;width:66px;fill:white;margin-top:0.5rem;}.st0.jsx-688514953{font-family:'MyriadPro-Regular';}.st1.jsx-688514953{font-size:42.6359px;}.st2.jsx-688514953{fill:none;}.st0.jsx-688514953{fill:white;}@media (max-width:600px){svg.jsx-688514953{width:100px;}}@media (max-width:490px){svg.jsx-688514953{width:65px;}}@media (max-width:370px){svg.jsx-688514953{height:40px;width:47px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxDb2RpbmdcXE15UHJvamVjdHNcXGNvZGVycy1qdWtlYm94XFxjb21wb25lbnRzXFxMb2dvLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtCa0IsQUFHcUIsQUFPbUIsQUFJWixBQUlWLEFBSUUsQUFPWixBQU1BLEFBS2UsVUFyQmhCLENBSUEsQUFZRSxDQS9CVyxBQXlCWCxBQVlhLFFBMUJmLEdBVmEsQUFxQ1gsU0EvQkYsRUFMb0Isa0JBQ3BCIiwiZmlsZSI6IkM6XFxDb2RpbmdcXE15UHJvamVjdHNcXGNvZGVycy1qdWtlYm94XFxjb21wb25lbnRzXFxMb2dvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNvbG9ycyBmcm9tICcuLi9jc3MtdmFyaWFibGVzL2NvbG9ycyc7XHJcblxyXG5jb25zdCBMb2dvID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c3ZnIHZlcnNpb249XCIxLjFcIiBpZD1cIkxheWVyXzFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgeGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIgeD1cIjBweFwiIHk9XCIwcHhcIlxyXG4gICAgICB2aWV3Qm94PVwiMCAwIDExMCA5NVwiIHNwYWNlPVwicHJlc2VydmVcIj5cclxuICAgICAgPGc+XHJcbiAgICAgICAgPHBhdGggZD1cIk01MCw1QzI1LjIsNSw1LDI1LjIsNSw1MHMyMC4yLDQ1LDQ1LDQ1czQ1LTIwLjIsNDUtNDVTNzQuOCw1LDUwLDV6IE01MCw5MkMyNi44LDkyLDgsNzMuMiw4LDUwUzI2LjgsOCw1MCw4czQyLDE4LjgsNDIsNDJcclxuXHRcdFM3My4yLDkyLDUwLDkyelwiLz5cclxuICAgICAgICA8cGF0aCBkPVwiTTUwLDE2LjljLTE3LjEsMC0zMC45LDEzLjktMzAuOSwzMVY2MWMwLDAuMiwwLDAuNCwwLjEsMC42Yy0wLjEsMC42LTAuMSwxLjEtMC4xLDEuN2MwLDYuNCw0LjksMTEuNywxMS4xLDEyLjRcclxuXHRcdGMwLjQsMS45LDIuMiwzLjQsNC4yLDMuNGMyLjQsMCw0LjQtMiw0LjQtNC40VjUxLjljMC0yLjQtMi00LjQtNC40LTQuNGMtMi4xLDAtMy44LDEuNS00LjIsMy40Yy0zLjIsMC40LTYuMSwyLTguMSw0LjN2LTcuNFxyXG5cdFx0YzAtMTUuNCwxMi41LTI4LDI3LjktMjhzMjcuOSwxMi42LDI3LjksMjh2Ny41Yy0yLTIuNC00LjktNC04LjEtNC40Yy0wLjQtMS45LTIuMi0zLjQtNC4yLTMuNGMtMi40LDAtNC40LDItNC40LDQuNHYyMi45XHJcblx0XHRjMCwyLjQsMiw0LjQsNC40LDQuNGMyLjEsMCwzLjgtMS41LDQuMi0zLjRjNi4yLTAuNywxMS4xLTYsMTEuMS0xMi40YzAtMC42LTAuMS0xLjEtMC4xLTEuN2MwLjEtMC4yLDAuMi0wLjQsMC4yLTAuN1Y0Ny45XHJcblx0XHRDODAuOSwzMC44LDY3LjEsMTYuOSw1MCwxNi45eiBNMzMsNTEuOWMwLTAuOCwwLjYtMS40LDEuNC0xLjRzMS40LDAuNiwxLjQsMS40djIyLjljMCwwLjgtMC42LDEuNC0xLjQsMS40UzMzLDc1LjYsMzMsNzQuOFY1MS45elxyXG5cdFx0IE0zMCw1NHYxOC43Yy00LjUtMC43LTgtNC42LTgtOS40QzIyLjEsNTguNywyNS41LDU0LjcsMzAsNTR6IE02Ni45LDc0LjhjMCwwLjgtMC42LDEuNC0xLjQsMS40Yy0wLjgsMC0xLjQtMC42LTEuNC0xLjRWNTEuOVxyXG5cdFx0YzAtMC44LDAuNi0xLjQsMS40LTEuNGMwLjgsMCwxLjQsMC42LDEuNCwxLjRWNzQuOHogTTY5LjksNzIuN1Y1NGM0LjUsMC43LDgsNC42LDgsOS40Qzc3LjksNjguMSw3NC40LDcyLDY5LjksNzIuN3pcIi8+XHJcbiAgICAgIDwvZz5cclxuXHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgc3ZnIHtcclxuICAgICAgICBoZWlnaHQ6IDU1cHg7XHJcbiAgICAgICAgd2lkdGg6IDY2cHg7XHJcbiAgICAgICAgZmlsbDogd2hpdGU7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMC41cmVtO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuc3QwIHtcclxuICAgICAgICBmb250LWZhbWlseTonTXlyaWFkUHJvLVJlZ3VsYXInO1xyXG4gICAgICB9XHJcblx0ICAgIFxyXG4gICAgICAuc3QxIHtcclxuICAgICAgICBmb250LXNpemU6NDIuNjM1OXB4O1xyXG4gICAgICB9XHJcblx0ICAgIFxyXG4gICAgICAuc3QyIHtcclxuICAgICAgICBmaWxsOm5vbmU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5zdDAge1xyXG4gICAgICAgIGZpbGw6IHdoaXRlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvKiBNZWRpYSBxdWVyaWVzICovXHJcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCl7XHJcbiAgICAgICAgc3ZnIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDBweFxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ5MHB4KXtcclxuICAgICAgICBzdmcge1xyXG4gICAgICAgICAgd2lkdGg6IDY1cHhcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAzNzBweCl7XHJcbiAgICAgICAgc3ZnIHtcclxuICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgIHdpZHRoOiA0N3B4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICBgfTwvc3R5bGU+XHJcblxyXG5cclxuXHJcbiAgICA8L3N2Zz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvZ287XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Coding\\\\MyProjects\\\\coders-jukebox\\\\components\\\\Logo.js */"));
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
    className: "jsx-1475980572"
  }, __jsx(_UserSearchBar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    checkSearchMode: checkSearchMode,
    placeholder: "Search for user",
    searchMode: "user",
    setFilteredUsers: setFilteredUsers,
    searchInput: searchInput,
    setSearchInput: setSearchInput
  }), searchMode && __jsx("div", {
    id: "dropdown",
    className: "jsx-1475980572"
  }, __jsx("div", {
    id: "search-results",
    className: "jsx-1475980572"
  }, __jsx("ul", {
    className: "jsx-1475980572"
  }, filteredUsers.map(user => __jsx("li", {
    key: user.id,
    className: "jsx-1475980572"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/profile/[userId]",
    as: `/profile/${user.id}`
  }, __jsx("a", {
    onClick: userClickHandler.bind(undefined, user.id),
    className: "jsx-1475980572"
  }, user.name)))), filteredUsers.length === 0 && __jsx("li", {
    className: "jsx-1475980572"
  }, "No Users Found")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1475980572"
  }, "#user-search.jsx-1475980572{width:50%;}#dropdown.jsx-1475980572{width:79%;margin:auto;z-index:3;}#search-results.jsx-1475980572{width:440px;margin:auto;background:white;color:purple;margin-top:0.5rem;padding:1rem;border-radius:5px;box-shadow:10px 10px 45px -10px rgba(66,9,66,0.74);position:absolute;}ul.jsx-1475980572{list-style:none;}@media (max-width:1150px){}@media (max-width:1100px){#search-results.jsx-1475980572{width:38vw;}}@media (max-width:1060px){#search-results.jsx-1475980572{width:36vw;}}@media (max-width:950px){#search-results.jsx-1475980572{right:154px;width:46vw;}}@media (max-width:920px){#user-search.jsx-1475980572{margin-left:2.5rem;}#search-results.jsx-1475980572{right:127px;}}@media (max-width:900px){#search-results.jsx-1475980572{right:120px;width:46vw;}}@media (max-width:870px){#search-results.jsx-1475980572{right:90px;}}@media (max-width:740px){#search-results.jsx-1475980572{right:70px;}}@media (max-width:660px){#user-search.jsx-1475980572{margin-right:1rem;margin-left:1rem;}#search-results.jsx-1475980572{right:107px;width:58vw;}}@media (max-width:600px){#user-search.jsx-1475980572{margin-right:5rem;}@media (max-width:580px){#user-search.jsx-1475980572{margin-right:4.5rem;}}@media (max-width:550px){#user-search.jsx-1475980572{width:55%;}#search-results.jsx-1475980572{width:62vw;right:91px;}}@media (max-width:490px){#user-search.jsx-1475980572{margin-right:3rem;}}@media (max-width:450px){#search-results.jsx-1475980572{right:85px;}}@media (max-width:420px){#user-search.jsx-1475980572{width:60%;}#search-results.jsx-1475980572{right:9vw;width:76vw;}}@media (max-width:375px){#search-results.jsx-1475980572{right:14.5vw;width:64vw;}}@media (max-width:370px){#user-search.jsx-1475980572{margin-left:0.8rem;margin-right:4rem;}#search-results.jsx-1475980572{right:11vw;width:76vw;}}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxDb2RpbmdcXE15UHJvamVjdHNcXGNvZGVycy1qdWtlYm94XFxjb21wb25lbnRzXFxVc2VyU2VhcmNoLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJEa0IsQUFJcUIsQUFLQSxBQU9FLEFBZ0JJLEFBWUosQUFNQSxBQU1BLEFBT08sQUFHUCxBQU1BLEFBT0QsQUFNQSxBQU1PLEFBS04sQUFPTSxBQUtFLEFBTVYsQUFJQyxBQU9PLEFBTVAsQUFNRCxBQUdBLEFBT0csQUFPTSxBQUlSLFVBeEpiLEFBS2MsQUF3R2QsQUF1QkEsQUFHYSxDQWhHYixBQU1BLEFBNkJBLEFBTUEsQUFpQ2EsQUFhYixBQTJCYSxDQTlJQyxBQXdDRCxBQVViLEFBTWEsQUF3QkEsQ0FtREEsR0FuSGIsRUEyRG1CLEFBWXJCLEFBc0JFLENBOURBLEFBMkZvQixDQTlDcEIsQ0FpQ0EsQ0FsSVksQUE0R1osQUF3Q0EsQ0F0R0EsQUFnQkEsQUF3QkEsQ0FoRm1CLEFBbUluQixRQXhJQSxHQWdGQSxFQStEQSxJQXpJZSxhQUNLLGtCQUNMLGFBQ0ssa0JBQ2lDLG1EQUNqQyxrQkFLcEIiLCJmaWxlIjoiQzpcXENvZGluZ1xcTXlQcm9qZWN0c1xcY29kZXJzLWp1a2Vib3hcXGNvbXBvbmVudHNcXFVzZXJTZWFyY2guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IFVzZXJTZWFyY2hCYXIgZnJvbSAnLi9Vc2VyU2VhcmNoQmFyJztcclxuaW1wb3J0IHsgR2xvYmFsQ29udGV4dCB9IGZyb20gJy4uL2NvbnRleHQvR2xvYmFsQ29udGV4dCc7XHJcblxyXG5cclxuY29uc3QgVXNlclNlYXJjaCA9ICgpID0+IHtcclxuXHJcbiAgY29uc3QgW2ZpbHRlcmVkVXNlcnMsIHNldEZpbHRlcmVkVXNlcnNdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICBjb25zdCBbc2VhcmNoTW9kZSwgc2V0U2VhcmNoTW9kZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IHsgZmV0Y2hQcm9maWxlVXNlciB9ID0gdXNlQ29udGV4dChHbG9iYWxDb250ZXh0KTtcclxuXHJcbiAgY29uc3QgW3NlYXJjaElucHV0LCBzZXRTZWFyY2hJbnB1dF0gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG4gIGNvbnN0IHVzZXJDbGlja0hhbmRsZXIgPSAoaWQpID0+IHtcclxuXHJcbiAgICBmZXRjaFByb2ZpbGVVc2VyKGlkLCBmYWxzZSk7XHJcblxyXG4gICAgLy8gSGlkZSBkcm9wZG93blxyXG4gICAgc2V0U2VhcmNoTW9kZShmYWxzZSlcclxuXHJcbiAgICAvLyBDbGVhciB0aGUgc2VhcmNoIGJhclxyXG4gICAgc2V0U2VhcmNoSW5wdXQoJycpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgY2hlY2tTZWFyY2hNb2RlID0gKGlucHV0KSA9PiB7XHJcbiAgICBpZiAoaW5wdXQgIT09ICcnKSB7XHJcbiAgICAgIHNldFNlYXJjaE1vZGUodHJ1ZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRTZWFyY2hNb2RlKGZhbHNlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBpZD1cInVzZXItc2VhcmNoXCI+XHJcbiAgICAgIDxVc2VyU2VhcmNoQmFyIGNoZWNrU2VhcmNoTW9kZT17Y2hlY2tTZWFyY2hNb2RlfSBwbGFjZWhvbGRlcj0nU2VhcmNoIGZvciB1c2VyJyBzZWFyY2hNb2RlPSd1c2VyJyBzZXRGaWx0ZXJlZFVzZXJzPXtzZXRGaWx0ZXJlZFVzZXJzfSBzZWFyY2hJbnB1dD17c2VhcmNoSW5wdXR9IHNldFNlYXJjaElucHV0PXtzZXRTZWFyY2hJbnB1dH0gLz5cclxuICAgICAge3NlYXJjaE1vZGUgJiZcclxuICAgICAgICA8ZGl2IGlkPVwiZHJvcGRvd25cIj5cclxuICAgICAgICAgIDxkaXYgaWQ9XCJzZWFyY2gtcmVzdWx0c1wiPlxyXG4gICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAge2ZpbHRlcmVkVXNlcnMubWFwKHVzZXIgPT4gKFxyXG4gICAgICAgICAgICAgICAgPGxpIGtleT17dXNlci5pZH0+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvZmlsZS9bdXNlcklkXVwiIGFzPXtgL3Byb2ZpbGUvJHt1c2VyLmlkfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIG9uQ2xpY2s9e3VzZXJDbGlja0hhbmRsZXIuYmluZCh0aGlzLCB1c2VyLmlkKX0+e3VzZXIubmFtZX08L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgKSl9XHJcblxyXG4gICAgICAgICAgICAgIHtmaWx0ZXJlZFVzZXJzLmxlbmd0aCA9PT0gMCAmJlxyXG4gICAgICAgICAgICAgICAgPGxpPk5vIFVzZXJzIEZvdW5kPC9saT5cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgfVxyXG5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICBcclxuICAgICAgICAjdXNlci1zZWFyY2gge1xyXG4gICAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICAgIC8qIHBvc2l0aW9uOiByZWxhdGl2ZTsgKi9cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICNkcm9wZG93biB7XHJcbiAgICAgICAgICB3aWR0aDogNzklO1xyXG4gICAgICAgICAgLyogcG9zaXRpb246IHJlbGF0aXZlOyAqL1xyXG4gICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgei1pbmRleDogMztcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgI3NlYXJjaC1yZXN1bHRzIHtcclxuICAgICAgICAgIHdpZHRoOiA0NDBweDtcclxuICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgICAgY29sb3I6IHB1cnBsZTtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDAuNXJlbTsgXHJcbiAgICAgICAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgYm94LXNoYWRvdzogMTBweCAxMHB4IDQ1cHggLTEwcHggcmdiYSg2Niw5LDY2LDAuNzQpO1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgLyogdG9wOiAtMTBweDsgKi9cclxuICAgICAgICAgIC8qIHotaW5kZXg6IDIwMDsgKi9cclxuXHJcbiAgICAgICAgICAvKiBsZWZ0OiA0MTBweDsgKi9cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHVsIHtcclxuICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKiBNZWRpYSBxdWVyaWVzICovXHJcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMTUwcHgpIHtcclxuICAgICAgICAvKiAjc2VhcmNoLXJlc3VsdHMge1xyXG4gICAgICAgICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgICAgIH0gKi9cclxuICAgICAgfSBcclxuXHJcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMTAwcHgpIHtcclxuICAgICAgICAjc2VhcmNoLXJlc3VsdHMge1xyXG4gICAgICAgICAgd2lkdGg6IDM4dncgO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDEwNjBweCkge1xyXG4gICAgICAgICNzZWFyY2gtcmVzdWx0cyB7XHJcbiAgICAgICAgICB3aWR0aDogMzZ2dyA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogOTUwcHgpIHtcclxuICAgICAgICAjc2VhcmNoLXJlc3VsdHMge1xyXG4gICAgICAgICAgcmlnaHQ6IDE1NHB4O1xyXG4gICAgICAgICAgd2lkdGg6IDQ2dnc7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IFxyXG5cclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDkyMHB4KSB7XHJcbiAgICAgICAgI3VzZXItc2VhcmNoIHtcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyLjVyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgICNzZWFyY2gtcmVzdWx0cyB7XHJcbiAgICAgICAgICByaWdodDogMTI3cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IFxyXG5cclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDkwMHB4KSB7XHJcbiAgICAgICAgI3NlYXJjaC1yZXN1bHRzIHtcclxuICAgICAgICAgIHJpZ2h0OiAxMjBweDtcclxuICAgICAgICAgIHdpZHRoOiA0NnZ3O1xyXG4gICAgICAgIH1cclxuICAgICAgfSBcclxuXHJcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA4NzBweCkge1xyXG4gICAgICAgICNzZWFyY2gtcmVzdWx0cyB7XHJcbiAgICAgICAgICByaWdodDogOTBweDtcclxuICAgICAgICB9XHJcbiAgICAgIH0gXHJcblxyXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNzQwcHgpIHtcclxuICAgICAgICAjc2VhcmNoLXJlc3VsdHMge1xyXG4gICAgICAgICAgcmlnaHQ6IDcwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IFxyXG5cclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDY2MHB4KSB7XHJcbiAgICAgICAgI3VzZXItc2VhcmNoIHtcclxuICAgICAgICAgIG1hcmdpbi1yaWdodDogMXJlbTtcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgI3NlYXJjaC1yZXN1bHRzIHtcclxuICAgICAgICAgIHJpZ2h0OiAxMDdweDtcclxuICAgICAgICAgIHdpZHRoOiA1OHZ3O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICAgICAgI3VzZXItc2VhcmNoIHtcclxuICAgICAgICAgIG1hcmdpbi1yaWdodDogNXJlbTtcclxuICAgICAgfVxyXG5cclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDU4MHB4KSB7XHJcbiAgICAgICAgI3VzZXItc2VhcmNoIHtcclxuICAgICAgICAgIG1hcmdpbi1yaWdodDogNC41cmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDU1MHB4KSB7XHJcbiAgICAgICAgI3VzZXItc2VhcmNoIHtcclxuICAgICAgICAgIHdpZHRoOiA1NSU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAjc2VhcmNoLXJlc3VsdHMge1xyXG4gICAgICAgICAgd2lkdGg6IDYydnc7XHJcbiAgICAgICAgICByaWdodDogOTFweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0OTBweCkge1xyXG4gICAgICAgICN1c2VyLXNlYXJjaCB7XHJcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDNyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNDUwcHgpIHtcclxuICAgICAgICAjc2VhcmNoLXJlc3VsdHMge1xyXG4gICAgICAgICAgcmlnaHQ6IDg1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNDIwcHgpIHtcclxuICAgICAgICAjdXNlci1zZWFyY2gge1xyXG4gICAgICAgICAgd2lkdGg6IDYwJTtcclxuICAgICAgICB9XHJcbiAgICAgICAgI3NlYXJjaC1yZXN1bHRzIHtcclxuICAgICAgICAgIHJpZ2h0OiA5dnc7XHJcbiAgICAgICAgICB3aWR0aDogNzZ2dztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAzNzVweCkge1xyXG4gICAgICAgICNzZWFyY2gtcmVzdWx0cyB7XHJcbiAgICAgICAgICByaWdodDogMTQuNXZ3O1xyXG4gICAgICAgICAgd2lkdGg6IDY0dnc7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogMzcwcHgpIHtcclxuICAgICAgICAjdXNlci1zZWFyY2gge1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDAuOHJlbTtcclxuICAgICAgICAgIG1hcmdpbi1yaWdodDogNHJlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgI3NlYXJjaC1yZXN1bHRzIHtcclxuICAgICAgICAgIHJpZ2h0OiAxMXZ3O1xyXG4gICAgICAgICAgd2lkdGg6IDc2dnc7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuXHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVzZXJTZWFyY2g7XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Coding\\\\MyProjects\\\\coders-jukebox\\\\components\\\\UserSearch.js */"));
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
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







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
      const res = await axios__WEBPACK_IMPORTED_MODULE_4___default.a.post('/upload', formData, {
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
  }, __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], null, __jsx(Component, pageProps)));
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

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xheW91dC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xvZ28uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9OYXZiYXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Vc2VyU2VhcmNoLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVXNlclNlYXJjaEJhci5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZXh0L0NvbnRleHRQcm92aWRlci5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZXh0L0dsb2JhbENvbnRleHQuanMiLCJ3ZWJwYWNrOi8vLy4vY3NzLXZhcmlhYmxlcy9jb2xvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvbGluay50c3giLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC93aXRoLXJvdXRlci50c3giLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9taXR0LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9mb3JtYXQtdXJsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLW1hdGNoZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXgudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvc2VhcmNoLXBhcmFtcy10by11cmwtcXVlcnkudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi91dGlscy50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9saW5rLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9yZWFjdC1pcy9janMvcmVhY3QtaXMuZGV2ZWxvcG1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL3JlYWN0LWlzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmcmFtZXItbW90aW9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJvcC10eXBlcy1leGFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInF1ZXJ5c3RyaW5nXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtanN4L3N0eWxlXCIiXSwibmFtZXMiOlsiTGF5b3V0IiwicHJvcHMiLCJjb2xvcnMiLCJwcmltYXJ5IiwiY2hpbGRyZW4iLCJMb2dvIiwiTmF2YmFyIiwiYXV0aFN0YXRlIiwiY3VycmVudFVzZXIiLCJmZXRjaFByb2ZpbGVVc2VyIiwibG9nb3V0IiwidXNlQ29udGV4dCIsIkdsb2JhbENvbnRleHQiLCJsb2dvdXRIYW5kbGVyIiwic2VhcmNoVXNlckhhbmRsZXIiLCJjb25zb2xlIiwibG9nIiwicHJvZmlsZU5hdkNsaWNrSGFuZGxlciIsImlkIiwiaGFtYnVyZ2VySGFuZGxlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJncmFkaWVudCIsInNlY29uZGFyeSIsImF1dGhlbnRpY2F0ZWQiLCJVc2VyU2VhcmNoIiwiZmlsdGVyZWRVc2VycyIsInNldEZpbHRlcmVkVXNlcnMiLCJ1c2VTdGF0ZSIsInNlYXJjaE1vZGUiLCJzZXRTZWFyY2hNb2RlIiwic2VhcmNoSW5wdXQiLCJzZXRTZWFyY2hJbnB1dCIsInVzZXJDbGlja0hhbmRsZXIiLCJjaGVja1NlYXJjaE1vZGUiLCJpbnB1dCIsIm1hcCIsInVzZXIiLCJiaW5kIiwibmFtZSIsImxlbmd0aCIsIlVzZXJTZWFyY2hiYXIiLCJwbGFjZWhvbGRlciIsImFsbFVzZXJzIiwidXNlRWZmZWN0IiwidXNlcnMiLCJmaWx0ZXIiLCJzdWJzdHIiLCJ0b1VwcGVyQ2FzZSIsIm9uQ2hhbmdlSGFuZGxlciIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm9uRm9ybVN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiQ29udGV4dFByb3ZpZGVyIiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJzdGF0ZSIsInJlbmRlciIsImluaXRpYWxTdGF0ZSIsImF1dGhEYXRhIiwidmlkZW8iLCJjb21tZW50IiwiY3JlYXRlQ29udGV4dCIsInJldmVyc2VHcmFkaWVudCIsInBpbmtHcmFkZW50IiwicmV2ZXJzZVBpbmtHcmFkaWVudCIsInRlcnRpYXJ5IiwibG9jYXRpb25PcmlnaW4iLCJyZXNvbHZlZCIsImxpc3RlbmVycyIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwid2luZG93IiwicHJlZmV0Y2hlZCIsImNhY2hlZE9ic2VydmVyIiwiZW50cmllcyIsImVudHJ5IiwiY2IiLCJyb290TWFyZ2luIiwibGlzdGVuVG9JbnRlcnNlY3Rpb25zIiwib2JzZXJ2ZXIiLCJnZXRPYnNlcnZlciIsInJvdXRlciIsImVyciIsImhyZWYiLCJub2RlTmFtZSIsImlzTG9jYWwiLCJzY3JvbGwiLCJhcyIsInJlcGxhY2UiLCJzdWNjZXNzIiwiaGFzV2FybmVkIiwiUmVhY3QiLCJwIiwicGF0aG5hbWUiLCJyZXNvbHZlZEhyZWYiLCJjaGlsZEVsbSIsImlzUHJlZmV0Y2hlZCIsInByZWZldGNoIiwiY2hpbGQiLCJDaGlsZHJlbiIsImNoaWxkUHJvcHMiLCJyZWYiLCJlbCIsInNldENoaWxkRWxtIiwib25DbGljayIsImxpbmtDbGlja2VkIiwicHJpb3JpdHkiLCJwcm9jZXNzIiwid2FybiIsIlByb3BUeXBlcyIsInJlcXVpcmUiLCJleGFjdCIsIkxpbmsiLCJzaGFsbG93IiwicGFzc0hyZWYiLCJwYXRoIiwibm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2giLCJzaW5nbGV0b25Sb3V0ZXIiLCJyZWFkeUNhbGxiYWNrcyIsInJlYWR5IiwidXJsUHJvcGVydHlGaWVsZHMiLCJyb3V0ZXJFdmVudHMiLCJjb3JlTWV0aG9kRmllbGRzIiwiT2JqZWN0IiwiZ2V0IiwiUm91dGVyIiwiZmllbGQiLCJnZXRSb3V0ZXIiLCJldmVudCIsImV2ZW50RmllbGQiLCJfc2luZ2xldG9uUm91dGVyIiwibWVzc2FnZSIsInN0YWNrIiwiUm91dGVyQ29udGV4dCIsImNyZWF0ZVJvdXRlciIsIl9yb3V0ZXIiLCJpbnN0YW5jZSIsIkNvbXBvc2VkQ29tcG9uZW50IiwiZ2V0SW5pdGlhbFByb3BzIiwiV2l0aFJvdXRlcldyYXBwZXIiLCJhbGwiLCJvbiIsIm9mZiIsImVtaXQiLCJoYW5kbGVyIiwiYmFzZVBhdGgiLCJjYW5jZWxsZWQiLCJiYXNlIiwidXJsQXNTdHJpbmciLCJmaW5hbFVybCIsInVybCIsImFkZEJhc2VQYXRoIiwicmVzb2x2ZUhyZWYiLCJtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiIsImNyZWRlbnRpYWxzIiwicmVzIiwiYXR0ZW1wdHMiLCJmZXRjaFJldHJ5IiwiaXNTZXJ2ZXJSZW5kZXIiLCJyb3V0ZSIsInF1ZXJ5IiwiYXNQYXRoIiwiY29tcG9uZW50cyIsInNkYyIsInN1YiIsImNsYyIsInBhZ2VMb2FkZXIiLCJfYnBzIiwiZXZlbnRzIiwiX3dyYXBBcHAiLCJpc1NzciIsImlzRmFsbGJhY2siLCJfaW5GbGlnaHRSb3V0ZSIsIl9fTl9TU0ciLCJpbml0aWFsUHJvcHMiLCJfX05fU1NQIiwiX19ORVhUX0RBVEFfXyIsInVwZGF0ZSIsIm1vZCIsImRhdGEiLCJuZXdEYXRhIiwicmVsb2FkIiwiYmFjayIsInB1c2giLCJvcHRpb25zIiwicHJlcGFyZVVybEFzIiwiU1QiLCJwZXJmb3JtYW5jZSIsImNsZWFuZWRBcyIsImRlbEJhc2VQYXRoIiwicGFyc2VkIiwidHJ5UGFyc2VSZWxhdGl2ZVVybCIsIm1ldGhvZCIsInJvdXRlUmVnZXgiLCJyb3V0ZU1hdGNoIiwibWlzc2luZ1BhcmFtcyIsInBhcmFtIiwiYXNQYXRobmFtZSIsInJvdXRlSW5mbyIsImFwcENvbXAiLCJjaGFuZ2VTdGF0ZSIsIl9fTiIsImJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IiLCJwYWdlIiwiZXJyb3IiLCJjYWNoZWRSb3V0ZUluZm8iLCJpc1ZhbGlkRWxlbWVudFR5cGUiLCJkYXRhSHJlZiIsInNldCIsImJlZm9yZVBvcFN0YXRlIiwib25seUFIYXNoQ2hhbmdlIiwibmV3SGFzaCIsIm9sZFVybE5vSGFzaCIsIm9sZEhhc2giLCJzY3JvbGxUb0hhc2giLCJoYXNoIiwiaWRFbCIsIm5hbWVFbCIsInVybElzTmV3IiwiUHJvbWlzZSIsImNhbmNlbCIsImNvbXBvbmVudFJlc3VsdCIsIl9nZXREYXRhIiwiZm4iLCJfZ2V0U3RhdGljRGF0YSIsImZldGNoTmV4dERhdGEiLCJfZ2V0U2VydmVyRGF0YSIsIkFwcFRyZWUiLCJjdHgiLCJhYm9ydENvbXBvbmVudExvYWQiLCJub3RpZnkiLCJzbGFzaGVkUHJvdG9jb2xzIiwicHJvdG9jb2wiLCJ1cmxPYmoiLCJob3N0IiwiYXV0aCIsImVuY29kZVVSSUNvbXBvbmVudCIsImhvc3RuYW1lIiwic2VhcmNoIiwiVEVTVF9ST1VURSIsIkRVTU1ZX0JBU0UiLCJyZXNvbHZlZEJhc2UiLCJvcmlnaW4iLCJyZSIsImRlY29kZSIsImRlY29kZVVSSUNvbXBvbmVudCIsInBhcmFtcyIsInNsdWdOYW1lIiwiZyIsImdyb3VwcyIsIm0iLCJzdHIiLCJvcHRpb25hbCIsInJlcGVhdCIsImtleSIsInNlZ21lbnRzIiwibm9ybWFsaXplZFJvdXRlIiwiZ3JvdXBJbmRleCIsInBhcmFtZXRlcml6ZWRSb3V0ZSIsInNlZ21lbnQiLCJwYXJzZVBhcmFtZXRlciIsInBvcyIsImVzY2FwZVJlZ2V4Iiwicm91dGVLZXlDaGFyQ29kZSIsInJvdXRlS2V5Q2hhckxlbmd0aCIsImdldFNhZmVSb3V0ZUtleSIsInJvdXRlS2V5IiwiaSIsIlN0cmluZyIsInJvdXRlS2V5cyIsIm5hbWVkUGFyYW1ldGVyaXplZFJvdXRlIiwiY2xlYW5lZEtleSIsImludmFsaWRLZXkiLCJpc05hTiIsInBhcnNlSW50IiwibmFtZWRSZWdleCIsInNlYXJjaFBhcmFtcyIsIkFycmF5IiwidXNlZCIsInJlc3VsdCIsInBvcnQiLCJnZXRMb2NhdGlvbk9yaWdpbiIsIkFwcCIsImdldERpc3BsYXlOYW1lIiwicGFnZVByb3BzIiwibG9hZEdldEluaXRpYWxQcm9wcyIsImlzUmVzU2VudCIsInVybE9iamVjdEtleXMiLCJTUCIsInRva2VuIiwiZ2V0QWxsVXNlcnMiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwic2V0QXV0aFN0YXRlIiwiZ2V0VXNlckRhdGFCeVRva2VuIiwiZW1wdHlVc2VyIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJqb2JUaXRsZSIsImxvY2F0aW9uIiwibGFuZ3VhZ2VzIiwiYWJvdXQiLCJvd25lZFZpZGVvcyIsInVzZXJDb21tZW50cyIsInBsYXlsaXN0Q29tbWVudHMiLCJmYXZvdXJpdGVzIiwicHJvZmlsZVBob3RvRmlsZW5hbWUiLCJ1c2VySWQiLCJ0b2tlbkV4cGlyYXRpb24iLCJzZXRDdXJyZW50VXNlciIsInByb2ZpbGVVc2VyIiwic2V0UHJvZmlsZVVzZXIiLCJ2aWRlb1N0YXRlIiwic2V0VmlkZW9TdGF0ZSIsInRpdGxlIiwidmlkZW9JZCIsImNvbW1lbnRTdGF0ZSIsInNldENvbW1lbnRTdGF0ZSIsInNldEFsbFVzZXJzIiwiYXV0b3BsYXkiLCJzZXRBdXRvcGxheSIsImxvZ2luIiwiZW1haWwiLCJwYXNzd29yZCIsInJlcXVlc3RCb2R5IiwiZmV0Y2giLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImhlYWRlcnMiLCJzdGF0dXMiLCJFcnJvciIsImpzb24iLCJlcnJvcnMiLCJzZXRJdGVtIiwicmVnaXN0ZXIiLCJuZXdVc2VyRW1haWwiLCJjcmVhdGVVc2VyIiwicmVtb3ZlSXRlbSIsInVwZGF0ZVVzZXIiLCJ1c2Vyc1dpdGhGdWxsTmFtZSIsIl9pZCIsImdldFVzZXJEYXRhQnlJZCIsInVzZXJCeUlkIiwidXNlckJ5VG9rZW4iLCJpbml0aWFsRmV0Y2giLCJ1bmRlZmluZWQiLCJzZXRDdXJyZW50VmlkZW8iLCJ2aWRlb1VSTCIsImNsZWFyUHJvZmlsZVVzZXIiLCJnZXRDb21tZW50VXNlciIsImNvbW1lbnRVc2VyIiwiZ2V0RmF2b3VyaXRlVXNlciIsImZhdm91cml0ZVVzZXIiLCJhZGRWaWRlb1RvUGxheWxpc3QiLCJ0aHVtYm5haWxVUkwiLCJyZW1vdmVWaWRlb0Zyb21QbGF5bGlzdCIsInZpZGVvcyIsInJlbW92ZVZpZGVvIiwidXBkYXRlUHJvZmlsZVVzZXJWaWRlb3MiLCJhZGRDb21tZW50IiwiY29udGVudCIsInJlbW92ZUNvbW1lbnRGcm9tUGxheWxpc3QiLCJjb21tZW50cyIsInJlbW92ZUNvbW1lbnQiLCJ1cGRhdGVQcm9maWxlVXNlckNvbW1lbnRzIiwiZWRpdENvbW1lbnQiLCJhZGRGYXZvdXJpdGUiLCJyZW1vdmVGYXZvdXJpdGUiLCJ1cGRhdGVQcm9maWxlVXNlckZhdm91cml0ZXMiLCJ1cGxvYWRGaWxlIiwiZm9ybURhdGEiLCJheGlvcyIsInBvc3QiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJI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d0JBZnNCO0FBZ0J0QmpTLHNCQWhCc0I7QUFpQnRCeVYsb0JBakJzQjtBQWtCdEJFLHNCQWxCc0I7QUFtQnRCRSx3QkFuQnNCO0FBb0J0Qkwsc0JBcEJzQjtBQXFCdEJPLDZCQXJCc0I7QUFzQnRCVCxxQkF0QnNCO0FBdUJ0QmEsZ0JBdkJzQjtBQXdCdEJNLGlCQXhCc0I7QUF5QnRCSiwrQkF6QnNCO0FBMEJ0Qkssa0JBMUJzQjtBQTJCdEJDLHFCQTNCc0I7QUE0QnRCRTtBQTVCc0I7QUFBeEIsS0E4QkUsTUFBQywwREFBRCxRQUNJLE1BQUMsU0FBRCxFQUFldEYsU0FBZixDQURKLENBOUJGLENBREY7QUFvQ0QsQ0FoZ0NEOztBQWtnQ2VGLGtFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeGdDQSxrQzs7Ozs7Ozs7Ozs7QUNBQSwwQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSw2QyIsImZpbGUiOiJwYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzXCIpOyIsImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi9OYXZiYXInO1xyXG5pbXBvcnQgY29sb3JzIGZyb20gJy4uL2Nzcy12YXJpYWJsZXMvY29sb3JzJztcclxuXHJcbmNvbnN0IExheW91dCA9IChwcm9wcykgPT4gKFxyXG4gIDxkaXY+XHJcbiAgICA8SGVhZD5cclxuICAgICAgPHRpdGxlPkNvZGVUdW5lczwvdGl0bGU+XHJcbiAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJBIHNvY2lhbCBtdXNpYyBhcHAgZm9yIGNvZGVyc1wiLz5cclxuICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cclxuICAgICAgPG1ldGEgbmFtZT1cInJvYm90c1wiIGNvbnRlbnQ9XCJub2luZGV4LCBub2ZvbGxvd1wiLz5cclxuICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aFwiLz5cclxuICAgICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QmFsb28rVGhhbWJpKzImZGlzcGxheT1zd2FwXCIgcmVsPVwic3R5bGVzaGVldFwiPjwvbGluaz5cclxuICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL3N0YWNrcGF0aC5ib290c3RyYXBjZG4uY29tL2ZvbnQtYXdlc29tZS80LjcuMC9jc3MvZm9udC1hd2Vzb21lLm1pbi5jc3NcIi8+XHJcbiAgICAgIDxsaW5rXHJcbiAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXHJcbiAgICAgICAgaHJlZj1cImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL2FuaW1hdGUuY3NzLzQuMC4wL2FuaW1hdGUubWluLmNzc1wiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxsaW5rIHJlbD1cImljb25cIiB0eXBlPVwiaW1hZ2UvcG5nXCIgc2l6ZXM9XCIzMngzMlwiIGhyZWY9XCIvZmF2aWNvbi0zMngzMi5wbmdcIiAvPlxyXG4gICAgICA8bGluayByZWw9XCJpY29uXCIgdHlwZT1cImltYWdlL3BuZ1wiIHNpemVzPVwiMTZ4MTZcIiBocmVmPVwiL2Zhdmljb24tMTZ4MTYucG5nXCIgLz5cclxuICAgICAgPGxpbmsgcmVsPVwiYXBwbGUtdG91Y2gtaWNvblwiIHNpemVzPVwiMTgweDE4MFwiIGhyZWY9XCIvYXBwbGUtdG91Y2gtaWNvbi5wbmdcIiAvPlxyXG4gICAgICA8bGluayByZWw9XCJtYW5pZmVzdFwiIGhyZWY9XCIvc2l0ZS53ZWJtYW5pZmVzdFwiIC8+XHJcbiAgICAgIDxsaW5rIHJlbD1cIm1hc2staWNvblwiIGhyZWY9XCIvc2FmYXJpLXBpbm5lZC10YWIuc3ZnXCIgY29sb3I9XCIjNWJiYWQ1XCIgLz5cclxuICAgIDwvSGVhZD5cclxuICAgIDxOYXZiYXIvPlxyXG4gICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgXHJcblxyXG4gICAgPHN0eWxlIGdsb2JhbCBqc3g+e2BcclxuICAgIFxyXG4gICAgICAqIHtcclxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBib2R5IHtcclxuICAgICAgICBmb250LWZhbWlseTogJ0JhbG9vIFRoYW1iaSAyJywgc2Fucy1zZXJpZjtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMS44ZW07XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMTAwcHg7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGEge1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtIDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7Y29sb3JzLnByaW1hcnl9O1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzIGVhc2UtaW4tb3V0O1xyXG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSA4MG1zIGVhc2UtaW47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgYnV0dG9uOmFjdGl2ZSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgYnV0dG9uOmZvY3VzIHtcclxuICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBidXR0b246aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlNTMwNWE7XHJcbiAgICAgIH1cclxuICAgIFxyXG4gICAgYH0gXHJcbiAgICA8L3N0eWxlPiBcclxuICA8L2Rpdj5cclxuKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0O1xyXG4iLCJpbXBvcnQgY29sb3JzIGZyb20gJy4uL2Nzcy12YXJpYWJsZXMvY29sb3JzJztcclxuXHJcbmNvbnN0IExvZ28gPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzdmcgdmVyc2lvbj1cIjEuMVwiIGlkPVwiTGF5ZXJfMVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB4bGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIiB4PVwiMHB4XCIgeT1cIjBweFwiXHJcbiAgICAgIHZpZXdCb3g9XCIwIDAgMTEwIDk1XCIgc3BhY2U9XCJwcmVzZXJ2ZVwiPlxyXG4gICAgICA8Zz5cclxuICAgICAgICA8cGF0aCBkPVwiTTUwLDVDMjUuMiw1LDUsMjUuMiw1LDUwczIwLjIsNDUsNDUsNDVzNDUtMjAuMiw0NS00NVM3NC44LDUsNTAsNXogTTUwLDkyQzI2LjgsOTIsOCw3My4yLDgsNTBTMjYuOCw4LDUwLDhzNDIsMTguOCw0Miw0MlxyXG5cdFx0UzczLjIsOTIsNTAsOTJ6XCIvPlxyXG4gICAgICAgIDxwYXRoIGQ9XCJNNTAsMTYuOWMtMTcuMSwwLTMwLjksMTMuOS0zMC45LDMxVjYxYzAsMC4yLDAsMC40LDAuMSwwLjZjLTAuMSwwLjYtMC4xLDEuMS0wLjEsMS43YzAsNi40LDQuOSwxMS43LDExLjEsMTIuNFxyXG5cdFx0YzAuNCwxLjksMi4yLDMuNCw0LjIsMy40YzIuNCwwLDQuNC0yLDQuNC00LjRWNTEuOWMwLTIuNC0yLTQuNC00LjQtNC40Yy0yLjEsMC0zLjgsMS41LTQuMiwzLjRjLTMuMiwwLjQtNi4xLDItOC4xLDQuM3YtNy40XHJcblx0XHRjMC0xNS40LDEyLjUtMjgsMjcuOS0yOHMyNy45LDEyLjYsMjcuOSwyOHY3LjVjLTItMi40LTQuOS00LTguMS00LjRjLTAuNC0xLjktMi4yLTMuNC00LjItMy40Yy0yLjQsMC00LjQsMi00LjQsNC40djIyLjlcclxuXHRcdGMwLDIuNCwyLDQuNCw0LjQsNC40YzIuMSwwLDMuOC0xLjUsNC4yLTMuNGM2LjItMC43LDExLjEtNiwxMS4xLTEyLjRjMC0wLjYtMC4xLTEuMS0wLjEtMS43YzAuMS0wLjIsMC4yLTAuNCwwLjItMC43VjQ3LjlcclxuXHRcdEM4MC45LDMwLjgsNjcuMSwxNi45LDUwLDE2Ljl6IE0zMyw1MS45YzAtMC44LDAuNi0xLjQsMS40LTEuNHMxLjQsMC42LDEuNCwxLjR2MjIuOWMwLDAuOC0wLjYsMS40LTEuNCwxLjRTMzMsNzUuNiwzMyw3NC44VjUxLjl6XHJcblx0XHQgTTMwLDU0djE4LjdjLTQuNS0wLjctOC00LjYtOC05LjRDMjIuMSw1OC43LDI1LjUsNTQuNywzMCw1NHogTTY2LjksNzQuOGMwLDAuOC0wLjYsMS40LTEuNCwxLjRjLTAuOCwwLTEuNC0wLjYtMS40LTEuNFY1MS45XHJcblx0XHRjMC0wLjgsMC42LTEuNCwxLjQtMS40YzAuOCwwLDEuNCwwLjYsMS40LDEuNFY3NC44eiBNNjkuOSw3Mi43VjU0YzQuNSwwLjcsOCw0LjYsOCw5LjRDNzcuOSw2OC4xLDc0LjQsNzIsNjkuOSw3Mi43elwiLz5cclxuICAgICAgPC9nPlxyXG5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICBzdmcge1xyXG4gICAgICAgIGhlaWdodDogNTVweDtcclxuICAgICAgICB3aWR0aDogNjZweDtcclxuICAgICAgICBmaWxsOiB3aGl0ZTtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwLjVyZW07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5zdDAge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OidNeXJpYWRQcm8tUmVndWxhcic7XHJcbiAgICAgIH1cclxuXHQgICAgXHJcbiAgICAgIC5zdDEge1xyXG4gICAgICAgIGZvbnQtc2l6ZTo0Mi42MzU5cHg7XHJcbiAgICAgIH1cclxuXHQgICAgXHJcbiAgICAgIC5zdDIge1xyXG4gICAgICAgIGZpbGw6bm9uZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnN0MCB7XHJcbiAgICAgICAgZmlsbDogd2hpdGU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8qIE1lZGlhIHF1ZXJpZXMgKi9cclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KXtcclxuICAgICAgICBzdmcge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMHB4XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNDkwcHgpe1xyXG4gICAgICAgIHN2ZyB7XHJcbiAgICAgICAgICB3aWR0aDogNjVweFxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDM3MHB4KXtcclxuICAgICAgICBzdmcge1xyXG4gICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgd2lkdGg6IDQ3cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gIGB9PC9zdHlsZT5cclxuXHJcblxyXG5cclxuICAgIDwvc3ZnPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9nbztcclxuIiwiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgR2xvYmFsQ29udGV4dCB9IGZyb20gJy4uL2NvbnRleHQvR2xvYmFsQ29udGV4dCc7XHJcbmltcG9ydCBVc2VyU2VhcmNoIGZyb20gJy4vVXNlclNlYXJjaCc7XHJcbmltcG9ydCBjb2xvcnMgZnJvbSAnLi4vY3NzLXZhcmlhYmxlcy9jb2xvcnMnXHJcbmltcG9ydCBMb2dvIGZyb20gJy4vTG9nbyc7XHJcblxyXG5cclxuY29uc3QgTmF2YmFyID0gKCkgPT4ge1xyXG5cclxuICBjb25zdCB7IGF1dGhTdGF0ZSwgY3VycmVudFVzZXIsIGZldGNoUHJvZmlsZVVzZXIsIGxvZ291dCB9ID0gdXNlQ29udGV4dChHbG9iYWxDb250ZXh0KTtcclxuXHJcbiAgY29uc3QgbG9nb3V0SGFuZGxlciA9ICgpID0+IHtcclxuICAgIGxvZ291dCgpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHNlYXJjaFVzZXJIYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coJ3NlYXJjaFVzZXJIYW5kbGVyIGNhbGxlZCcpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgcHJvZmlsZU5hdkNsaWNrSGFuZGxlciA9ICgpID0+IHtcclxuICAgIGZldGNoUHJvZmlsZVVzZXIoY3VycmVudFVzZXIuaWQsIGZhbHNlKTtcclxuICAgIGhhbWJ1cmdlckhhbmRsZXIoKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbWJ1cmdlckhhbmRsZXIgPSAoKSA9PiB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGFtYnVyZ2VyJykuY2xhc3NMaXN0LnRvZ2dsZSgnb3BlbicpO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hdi1tZW51JykuY2xhc3NMaXN0LnRvZ2dsZSgnZHJvcGRvd24nKTtcclxuICB9XHJcblxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPG5hdiBpZD1cIm5hdmJhclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXYgaWQ9XCJuYXYtY29udGVudFwiPlxyXG4gICAgICAgICAgPGRpdiBpZD1cImxvZ28tY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJsb2dvXCI+XHJcbiAgICAgICAgICAgICAgPExvZ28gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJicmFuZFwiPlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgICAgPGgxPkNvZGVUdW5lczwvaDE+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxVc2VyU2VhcmNoIC8+XHJcblxyXG4gICAgICAgICAgPHVsIGlkPVwibmF2LW1lbnVcIj5cclxuICAgICAgICAgICAge2F1dGhTdGF0ZS5hdXRoZW50aWNhdGVkICYmIGN1cnJlbnRVc2VyICE9PSBudWxsICYmXHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9maWxlL1t1c2VySWRdXCIgYXM9e2AvcHJvZmlsZS8ke2N1cnJlbnRVc2VyLmlkfWB9PlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIiBvbkNsaWNrPXtwcm9maWxlTmF2Q2xpY2tIYW5kbGVyfT5cclxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtdXNlclwiPjwvaT5cclxuICAgICAgICAgICAgICAgIFByb2ZpbGVcclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYWJvdXRcIj5cclxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiIG9uQ2xpY2s9e2hhbWJ1cmdlckhhbmRsZXJ9PlxyXG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtaW5mb1wiPjwvaT5cclxuICAgICAgICAgICAgICAgIEFib3V0XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIHshYXV0aFN0YXRlLmF1dGhlbnRpY2F0ZWQgJiZcclxuICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hdXRoXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCIgb25DbGljaz17aGFtYnVyZ2VySGFuZGxlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtc2lnbi1pblwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgTG9naW5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYXV0aFwiPlxyXG4gICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiIG9uQ2xpY2s9e2hhbWJ1cmdlckhhbmRsZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXVzZXItcGx1c1wiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgUmVnaXN0ZXJcclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB7YXV0aFN0YXRlLmF1dGhlbnRpY2F0ZWQgJiZcclxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIiBvbkNsaWNrPXtsb2dvdXRIYW5kbGVyfT5cclxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtc2lnbi1vdXRcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgIExvZ291dFxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICA8ZGl2IGlkPVwiaGFtYnVyZ2VyXCIgb25DbGljaz17aGFtYnVyZ2VySGFuZGxlcn0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGluZVwiIGlkPVwibGluZTFcIj48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaW5lXCIgaWQ9XCJsaW5lMlwiPjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmVcIiBpZD1cImxpbmUzXCI+PC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIFxyXG4gICAgICAgICAgI25hdmJhciB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEuNXJlbSAwO1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICAgICAgICAgIC8qIG1hcmdpbi1ib3R0b206IDJyZW07ICovXHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICR7Y29sb3JzLmdyYWRpZW50fTtcclxuICAgICAgICAgICAgLyogY29sb3I6IHdoaXRlOyAqL1xyXG4gICAgICAgICAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjOTNmZmZiOyAqL1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgI25hdi1jb250ZW50IHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgI25hdi1tZW51IHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICNsb2dvLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgI2JyYW5kIGgxIHtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjNyZW07XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLm5hdi1pdGVtIHtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgMXJlbTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogdGV4dC1zaGFkb3cgMC4ycztcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAubmF2LWl0ZW06aG92ZXIge1xyXG4gICAgICAgICAgICB0ZXh0LXNoYWRvdzogMHB4IDBweCA4cHggcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGkge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICNzZWFyY2gge1xyXG4gICAgICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICNzZWFyY2hiYXJ7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGxhYmVsIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3A6IDEwcHg7XHJcbiAgICAgICAgICAgIGxlZnQ6IDEycHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIC8qICNsb2dvIHtcclxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgIH0gKi9cclxuXHJcbiAgICAgICAgICAvKiBNZWRpYSBxdWVyaWVzICovXHJcbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogMTE1MHB4KXtcclxuICAgICAgICAgICAgI25hdi1jb250ZW50IHtcclxuICAgICAgICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBoMSB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDJyZW07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICNuYXYtbWVudSB7XHJcbiAgICAgICAgICAgICAgLyogd2lkdGg6IDM1dnc7ICovXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogMTE0MHB4KSB7XHJcbiAgICAgICAgICAgICNsb2dvLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDFyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogMTEwMHB4KSB7XHJcbiAgICAgICAgICAgICNuYXYtY29udGVudCB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDk3JTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5NTBweCkge1xyXG4gICAgICAgICAgICBib2R5IHtcclxuICAgICAgICAgICAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICNuYXZiYXIge1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgI25hdi1tZW51IHtcclxuICAgICAgICAgICAgICB6LWluZGV4OiAxMDE7XHJcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgdG9wOiAxMDAlO1xyXG4gICAgICAgICAgICAgIHJpZ2h0OiAwcHg7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDMzdnc7XHJcbiAgICAgICAgICAgICAgY2xpcC1wYXRoOiBjaXJjbGUoMHB4IGF0IHRvcCByaWdodCk7XHJcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjogY2xpcC1wYXRoIDAuN3MgZWFzZTtcclxuICAgICAgICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IC0xMXB4IDEwcHggMTlweCAtMTBweCByZ2JhKDAsMCwwLDAuMjcpO1xyXG4gICAgICAgICAgICAgIC1tb3otYm94LXNoYWRvdzogLTExcHggMTBweCAxOXB4IC0xMHB4IHJnYmEoMCwwLDAsMC4yNyk7XHJcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogLTExcHggMTBweCAxOXB4IC0xMHB4IHJnYmEoMCwwLDAsMC4yNyk7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogJHtjb2xvcnMucHJpbWFyeX07XHJcbiAgICAgICAgICAgICAgLyogb3BhY2l0eTogMC45OyAqL1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAjbmF2LW1lbnUuZHJvcGRvd24ge1xyXG4gICAgICAgICAgICAgIGNsaXAtcGF0aDogY2lyY2xlKDE1MCUgYXQgdG9wIHJpZ2h0KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLm5hdi1pdGVtIHtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAycmVtIDNyZW07XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmNmI4ZDtcclxuICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjNyZW07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGkge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDEuNXJlbTtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgICAgICAgICAgICAvKiBiYWNrZ3JvdW5kOiBibGFjazsgKi9cclxuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAwLjVyZW07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5uYXYtaXRlbTpob3ZlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICR7Y29sb3JzLnNlY29uZGFyeX07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5saW5lIHtcclxuICAgICAgICAgICAgICB3aWR0aDogMzBweDtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDNweDtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICBtYXJnaW46IDVweDtcclxuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIGVhc2UgMC41cztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgI2hhbWJ1cmdlciB7XHJcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMC41cmVtO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAjaGFtYnVyZ2VyLm9wZW4gI2xpbmUxIHtcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpIHRyYW5zbGF0ZVkoMTEuNXB4KSBzY2FsZVgoMC45KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgI2hhbWJ1cmdlci5vcGVuICNsaW5lMntcclxuICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAjaGFtYnVyZ2VyLm9wZW4gI2xpbmUze1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKSB0cmFuc2xhdGVZKC0xMS41cHgpIHNjYWxlWCgwLjkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDg2MHB4KSB7XHJcbiAgICAgICAgICAgICNsb2dvLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDFyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzUwcHgpIHtcclxuICAgICAgICAgICAgI21haW4tc2VhcmNoYmFyIHtcclxuICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNjkwcHgpIHtcclxuICAgICAgICAgICAgI21haW4tc2VhcmNoYmFyIHtcclxuICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICNuYXYtbWVudSB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDQwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgICAgICAgICAjYnJhbmQge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICNsb2dvIHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDU3MHB4KSB7XHJcbiAgICAgICAgICAgICNuYXYtbWVudSB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDQ1JTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xyXG4gICAgICAgICAgICAjbmF2LW1lbnUge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ1MHB4KSB7XHJcbiAgICAgICAgICAgICNuYXYtbWVudSB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDYwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAzNzVweCkge1xyXG4gICAgICAgICAgICAubmF2LWl0ZW0ge1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDJyZW0gMnJlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICBcclxuXHJcbiAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9uYXY+XHJcbiAgICAvLyApfVxyXG4gICAgLy8gPC9HbG9iYWxDb250ZXh0LkNvbnN1bWVyPlxyXG4gIClcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjtcclxuIiwiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBVc2VyU2VhcmNoQmFyIGZyb20gJy4vVXNlclNlYXJjaEJhcic7XHJcbmltcG9ydCB7IEdsb2JhbENvbnRleHQgfSBmcm9tICcuLi9jb250ZXh0L0dsb2JhbENvbnRleHQnO1xyXG5cclxuXHJcbmNvbnN0IFVzZXJTZWFyY2ggPSAoKSA9PiB7XHJcblxyXG4gIGNvbnN0IFtmaWx0ZXJlZFVzZXJzLCBzZXRGaWx0ZXJlZFVzZXJzXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgY29uc3QgW3NlYXJjaE1vZGUsIHNldFNlYXJjaE1vZGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCB7IGZldGNoUHJvZmlsZVVzZXIgfSA9IHVzZUNvbnRleHQoR2xvYmFsQ29udGV4dCk7XHJcblxyXG4gIGNvbnN0IFtzZWFyY2hJbnB1dCwgc2V0U2VhcmNoSW5wdXRdID0gdXNlU3RhdGUoJycpO1xyXG5cclxuICBjb25zdCB1c2VyQ2xpY2tIYW5kbGVyID0gKGlkKSA9PiB7XHJcblxyXG4gICAgZmV0Y2hQcm9maWxlVXNlcihpZCwgZmFsc2UpO1xyXG5cclxuICAgIC8vIEhpZGUgZHJvcGRvd25cclxuICAgIHNldFNlYXJjaE1vZGUoZmFsc2UpXHJcblxyXG4gICAgLy8gQ2xlYXIgdGhlIHNlYXJjaCBiYXJcclxuICAgIHNldFNlYXJjaElucHV0KCcnKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGNoZWNrU2VhcmNoTW9kZSA9IChpbnB1dCkgPT4ge1xyXG4gICAgaWYgKGlucHV0ICE9PSAnJykge1xyXG4gICAgICBzZXRTZWFyY2hNb2RlKHRydWUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0U2VhcmNoTW9kZShmYWxzZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgaWQ9XCJ1c2VyLXNlYXJjaFwiPlxyXG4gICAgICA8VXNlclNlYXJjaEJhciBjaGVja1NlYXJjaE1vZGU9e2NoZWNrU2VhcmNoTW9kZX0gcGxhY2Vob2xkZXI9J1NlYXJjaCBmb3IgdXNlcicgc2VhcmNoTW9kZT0ndXNlcicgc2V0RmlsdGVyZWRVc2Vycz17c2V0RmlsdGVyZWRVc2Vyc30gc2VhcmNoSW5wdXQ9e3NlYXJjaElucHV0fSBzZXRTZWFyY2hJbnB1dD17c2V0U2VhcmNoSW5wdXR9IC8+XHJcbiAgICAgIHtzZWFyY2hNb2RlICYmXHJcbiAgICAgICAgPGRpdiBpZD1cImRyb3Bkb3duXCI+XHJcbiAgICAgICAgICA8ZGl2IGlkPVwic2VhcmNoLXJlc3VsdHNcIj5cclxuICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgIHtmaWx0ZXJlZFVzZXJzLm1hcCh1c2VyID0+IChcclxuICAgICAgICAgICAgICAgIDxsaSBrZXk9e3VzZXIuaWR9PlxyXG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Byb2ZpbGUvW3VzZXJJZF1cIiBhcz17YC9wcm9maWxlLyR7dXNlci5pZH1gfT5cclxuICAgICAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXt1c2VyQ2xpY2tIYW5kbGVyLmJpbmQodGhpcywgdXNlci5pZCl9Pnt1c2VyLm5hbWV9PC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICkpfVxyXG5cclxuICAgICAgICAgICAgICB7ZmlsdGVyZWRVc2Vycy5sZW5ndGggPT09IDAgJiZcclxuICAgICAgICAgICAgICAgIDxsaT5ObyBVc2VycyBGb3VuZDwvbGk+XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgXHJcbiAgICAgICAgI3VzZXItc2VhcmNoIHtcclxuICAgICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgICAvKiBwb3NpdGlvbjogcmVsYXRpdmU7ICovXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAjZHJvcGRvd24ge1xyXG4gICAgICAgICAgd2lkdGg6IDc5JTtcclxuICAgICAgICAgIC8qIHBvc2l0aW9uOiByZWxhdGl2ZTsgKi9cclxuICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgIHotaW5kZXg6IDM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICNzZWFyY2gtcmVzdWx0cyB7XHJcbiAgICAgICAgICB3aWR0aDogNDQwcHg7XHJcbiAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgICAgIGNvbG9yOiBwdXJwbGU7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAwLjVyZW07IFxyXG4gICAgICAgICAgcGFkZGluZzogMXJlbTtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgIGJveC1zaGFkb3c6IDEwcHggMTBweCA0NXB4IC0xMHB4IHJnYmEoNjYsOSw2NiwwLjc0KTtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIC8qIHRvcDogLTEwcHg7ICovXHJcbiAgICAgICAgICAvKiB6LWluZGV4OiAyMDA7ICovXHJcblxyXG4gICAgICAgICAgLyogbGVmdDogNDEwcHg7ICovXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB1bCB7XHJcbiAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyogTWVkaWEgcXVlcmllcyAqL1xyXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogMTE1MHB4KSB7XHJcbiAgICAgICAgLyogI3NlYXJjaC1yZXN1bHRzIHtcclxuICAgICAgICAgIHdpZHRoOiA0MDBweDtcclxuICAgICAgICB9ICovXHJcbiAgICAgIH0gXHJcblxyXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogMTEwMHB4KSB7XHJcbiAgICAgICAgI3NlYXJjaC1yZXN1bHRzIHtcclxuICAgICAgICAgIHdpZHRoOiAzOHZ3IDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMDYwcHgpIHtcclxuICAgICAgICAjc2VhcmNoLXJlc3VsdHMge1xyXG4gICAgICAgICAgd2lkdGg6IDM2dncgO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDk1MHB4KSB7XHJcbiAgICAgICAgI3NlYXJjaC1yZXN1bHRzIHtcclxuICAgICAgICAgIHJpZ2h0OiAxNTRweDtcclxuICAgICAgICAgIHdpZHRoOiA0NnZ3O1xyXG4gICAgICAgIH1cclxuICAgICAgfSBcclxuXHJcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5MjBweCkge1xyXG4gICAgICAgICN1c2VyLXNlYXJjaCB7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMi41cmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICAjc2VhcmNoLXJlc3VsdHMge1xyXG4gICAgICAgICAgcmlnaHQ6IDEyN3B4O1xyXG4gICAgICAgIH1cclxuICAgICAgfSBcclxuXHJcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5MDBweCkge1xyXG4gICAgICAgICNzZWFyY2gtcmVzdWx0cyB7XHJcbiAgICAgICAgICByaWdodDogMTIwcHg7XHJcbiAgICAgICAgICB3aWR0aDogNDZ2dztcclxuICAgICAgICB9XHJcbiAgICAgIH0gXHJcblxyXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogODcwcHgpIHtcclxuICAgICAgICAjc2VhcmNoLXJlc3VsdHMge1xyXG4gICAgICAgICAgcmlnaHQ6IDkwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IFxyXG5cclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc0MHB4KSB7XHJcbiAgICAgICAgI3NlYXJjaC1yZXN1bHRzIHtcclxuICAgICAgICAgIHJpZ2h0OiA3MHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfSBcclxuXHJcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2NjBweCkge1xyXG4gICAgICAgICN1c2VyLXNlYXJjaCB7XHJcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMXJlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICNzZWFyY2gtcmVzdWx0cyB7XHJcbiAgICAgICAgICByaWdodDogMTA3cHg7XHJcbiAgICAgICAgICB3aWR0aDogNTh2dztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgICAgICN1c2VyLXNlYXJjaCB7XHJcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVyZW07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1ODBweCkge1xyXG4gICAgICAgICN1c2VyLXNlYXJjaCB7XHJcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDQuNXJlbTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1NTBweCkge1xyXG4gICAgICAgICN1c2VyLXNlYXJjaCB7XHJcbiAgICAgICAgICB3aWR0aDogNTUlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgI3NlYXJjaC1yZXN1bHRzIHtcclxuICAgICAgICAgIHdpZHRoOiA2MnZ3O1xyXG4gICAgICAgICAgcmlnaHQ6IDkxcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNDkwcHgpIHtcclxuICAgICAgICAjdXNlci1zZWFyY2gge1xyXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAzcmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ1MHB4KSB7XHJcbiAgICAgICAgI3NlYXJjaC1yZXN1bHRzIHtcclxuICAgICAgICAgIHJpZ2h0OiA4NXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQyMHB4KSB7XHJcbiAgICAgICAgI3VzZXItc2VhcmNoIHtcclxuICAgICAgICAgIHdpZHRoOiA2MCU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICNzZWFyY2gtcmVzdWx0cyB7XHJcbiAgICAgICAgICByaWdodDogOXZ3O1xyXG4gICAgICAgICAgd2lkdGg6IDc2dnc7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogMzc1cHgpIHtcclxuICAgICAgICAjc2VhcmNoLXJlc3VsdHMge1xyXG4gICAgICAgICAgcmlnaHQ6IDE0LjV2dztcclxuICAgICAgICAgIHdpZHRoOiA2NHZ3O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDM3MHB4KSB7XHJcbiAgICAgICAgI3VzZXItc2VhcmNoIHtcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwLjhyZW07XHJcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDRyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgICNzZWFyY2gtcmVzdWx0cyB7XHJcbiAgICAgICAgICByaWdodDogMTF2dztcclxuICAgICAgICAgIHdpZHRoOiA3NnZ3O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcblxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVc2VyU2VhcmNoO1xyXG4iLCJpbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEdsb2JhbENvbnRleHQgfSBmcm9tICcuLi9jb250ZXh0L0dsb2JhbENvbnRleHQnO1xyXG5cclxuY29uc3QgVXNlclNlYXJjaGJhciA9ICh7IHBsYWNlaG9sZGVyLCBzZXRGaWx0ZXJlZFVzZXJzLCBjaGVja1NlYXJjaE1vZGUsIHNlYXJjaElucHV0LCBzZXRTZWFyY2hJbnB1dCB9KSA9PiB7XHJcblxyXG4gIGNvbnN0IHsgYWxsVXNlcnMgfSA9IHVzZUNvbnRleHQoR2xvYmFsQ29udGV4dCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyBhY3Rpb24gb24gdXBkYXRlIG9mIHNlYXJjaElucHV0XHJcbiAgICBjb25zdCB1c2VycyA9IGFsbFVzZXJzLmZpbHRlcih1c2VyID0+IHtcclxuICAgICAgcmV0dXJuIHVzZXIubmFtZS5zdWJzdHIoMCwgc2VhcmNoSW5wdXQubGVuZ3RoKS50b1VwcGVyQ2FzZSgpID09PSBzZWFyY2hJbnB1dC50b1VwcGVyQ2FzZSgpXHJcbiAgICB9KVxyXG5cclxuICAgIHNldEZpbHRlcmVkVXNlcnModXNlcnMpXHJcbiAgfSwgW3NlYXJjaElucHV0XSk7XHJcblxyXG4gIGNvbnN0IG9uQ2hhbmdlSGFuZGxlciA9IChlKSA9PiB7XHJcbiAgICBzZXRTZWFyY2hJbnB1dChlLnRhcmdldC52YWx1ZSk7XHJcbiAgICBjaGVja1NlYXJjaE1vZGUoZS50YXJnZXQudmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgY29uc3Qgb25Gb3JtU3VibWl0ID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAvLyBDYWxsIHRoZSByZWxldmFudCBzdWJtaXQgaGFuZGxlciBmcm9tIHByb3BzXHJcbiAgICAvLyBzdWJtaXRIYW5kbGVyKHNlYXJjaElucHV0KTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGlkPVwibWFpbi1zZWFyY2hiYXJcIj5cclxuICAgICAgPGZvcm0gb25TdWJtaXQ9e29uRm9ybVN1Ym1pdH0gYXV0b0NvbXBsZXRlPVwib2ZmXCI+XHJcbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJzZWFyY2gtaW5wdXRcIj5cclxuICAgICAgICAgIDxzdmcgaWQ9XCJzZWFyY2gtaWNvblwiIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHdpZHRoPVwiMjRcIj48cGF0aCBkPVwiTTE1LjUgMTRoLS43OWwtLjI4LS4yN0MxNS40MSAxMi41OSAxNiAxMS4xMSAxNiA5LjUgMTYgNS45MSAxMy4wOSAzIDkuNSAzUzMgNS45MSAzIDkuNSA1LjkxIDE2IDkuNSAxNmMxLjYxIDAgMy4wOS0uNTkgNC4yMy0xLjU3bC4yNy4yOHYuNzlsNSA0Ljk5TDIwLjQ5IDE5bC00Ljk5LTV6bS02IDBDNy4wMSAxNCA1IDExLjk5IDUgOS41UzcuMDEgNSA5LjUgNSAxNCA3LjAxIDE0IDkuNSAxMS45OSAxNCA5LjUgMTR6XCIgLz48cGF0aCBkPVwiTTAgMGgyNHYyNEgwelwiIGZpbGw9XCJub25lXCIgLz48L3N2Zz5cclxuICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJzZWFyY2gtaW5wdXRcIiBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9IG9uQ2hhbmdlPXtvbkNoYW5nZUhhbmRsZXJ9IHZhbHVlPXtzZWFyY2hJbnB1dH0gLz5cclxuICAgICAgPC9mb3JtPlxyXG5cclxuXHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuXHJcbiAgICAgICAgICBsYWJlbCB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgdG9wOiA5cHg7XHJcbiAgICAgICAgICAgIGxlZnQ6IDEycHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBcclxuICAgICAgICAgICNtYWluLXNlYXJjaGJhciB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICB3aWR0aDogNzUlO1xyXG4gICAgICAgICAgICBmb250OiBpbmhlcml0O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICNtYWluLXNlYXJjaGJhciBmb3JtIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCVcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAjbWFpbi1zZWFyY2hiYXIgaW5wdXQge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjNweDtcclxuICAgICAgICAgICAgcGFkZGluZzogMC40cmVtIDAuNXJlbSAwLjRyZW0gMi42cmVtO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogaW5oZXJpdDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAjbWFpbi1zZWFyY2hiYXIgaW5wdXQgOmZvY3VzIHtcclxuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAvKiBNZWRpYSBxdWVyaWVzICovXHJcbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogOTUwcHgpe1xyXG4gICAgICAgICAgICAjbWFpbi1zZWFyY2hiYXIge1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDY2MHB4KXtcclxuICAgICAgICAgICAgI21haW4tc2VhcmNoYmFyIHtcclxuICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpe1xyXG4gICAgICAgICAgICAjbWFpbi1zZWFyY2hiYXIge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMTAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQyMHB4KSB7XHJcbiAgICAgICAgICAgICNtYWluLXNlYXJjaGJhciB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDExMiU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogMzcwcHgpIHtcclxuICAgICAgICAgICAgI21haW4tc2VhcmNoYmFyIHtcclxuICAgICAgICAgICAgICB3aWR0aDogMTMwJTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgI21haW4tc2VhcmNoYmFyIGlucHV0IHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDIuM3JlbTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGFiZWwge1xyXG4gICAgICAgICAgICAgIHRvcDogN3B4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBzdmcge1xyXG4gICAgICAgICAgICAgIGhlaWdodDogMjRweDtcclxuICAgICAgICAgICAgICB3aWR0aDogMjBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gIFxyXG4gIGB9PC9zdHlsZT5cclxuXHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVzZXJTZWFyY2hiYXI7XHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEdsb2JhbENvbnRleHQgfSBmcm9tICcuL0dsb2JhbENvbnRleHQnO1xyXG5pbXBvcnQgeyBBbmltYXRlUHJlc2VuY2UgfSBmcm9tICdmcmFtZXItbW90aW9uJztcclxuXHJcbmNsYXNzIENvbnRleHRQcm92aWRlciBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgdmFsdWUgfSA9IHRoaXMucHJvcHM7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8R2xvYmFsQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17dmFsdWV9PlxyXG4gICAgICAgIDxBbmltYXRlUHJlc2VuY2UgZXhpdEJlZm9yZUVudGVyID5cclxuICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxyXG4gICAgICAgIDwvQW5pbWF0ZVByZXNlbmNlPlxyXG4gICAgICA8L0dsb2JhbENvbnRleHQuUHJvdmlkZXI+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29udGV4dFByb3ZpZGVyOyIsImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZVJlZHVjZXJ9IGZyb20gJ3JlYWN0JztcclxuLy8gaW1wb3J0IEFwcFJlZHVjZXIgZnJvbSAnLi9BcHBSZWR1Y2VyJztcclxuLy8gaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tICdAYXBvbGxvL3JlYWN0LWhvb2tzJztcclxuXHJcbi8vIEluaXRhbCBTdGF0ZVxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgYXV0aGVudGljYXRlZDogZmFsc2UsXHJcbiAgYXV0aERhdGE6IG51bGwsXHJcbiAgdXNlcjogbnVsbCxcclxuICB2aWRlbzogbnVsbCxcclxuICBjb21tZW50OiBudWxsLFxyXG4gIC8vIGxvZ2luOiAoKSA9PiB7fVxyXG59XHJcblxyXG4vLyBDcmVhdGUgY29udGV4dFxyXG5leHBvcnQgY29uc3QgR2xvYmFsQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoaW5pdGlhbFN0YXRlKTtcclxuXHJcbi8vIFByb3ZpZGVyIENvbXBvbmVudFxyXG4vLyBleHBvcnQgY29uc3QgR2xvYmFsUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbi8vICAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKEFwcFJlZHVjZXIsIGluaXRpYWxTdGF0ZSlcclxuXHJcbi8vICAgcmV0dXJuIChcclxuLy8gICAgIDxHbG9iYWxDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7XHJcbi8vICAgICAgIC8vIGF1dGhlbnRpY2F0ZWQ6IHN0YXRlLmF1dGhlbnRpY2F0ZWQsXHJcbi8vICAgICAgIGxvZ2luOiBsb2dpblxyXG4vLyAgICAgfX0+XHJcbi8vICAgICAgIHtjaGlsZHJlbn1cclxuLy8gICAgIDwvR2xvYmFsQ29udGV4dC5Qcm92aWRlcj5cclxuLy8gICApXHJcbi8vIH0iLCJjb25zdCBjb2xvcnMgPSB7XHJcbiAgcHJpbWFyeTogJyNmZjQxNmMnLFxyXG4gIC8vIGdyYWRpZW50OiAnbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZmY0MTZjLCAjZmY0YjJiKScsXHJcbiAgLy8gZ3JhZGllbnQ6ICdsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmZjQxNmMsICNlZWZiNGEpJyxcclxuICAvLyBncmFkaWVudDogJ2xpbmVhci1ncmFkaWVudCgzN2RlZywgI2U1MmU3MSA1MCUsICNmZjhhMDAgMTAwJSknLFxyXG4gIC8vIGdyYWRpZW50OiAnbGluZWFyLWdyYWRpZW50KDM3ZGVnLCAjZTUyZTcxIDUwJSwgI2ZmOGEwMCAxMDAlKScsXHJcbiAgLy8gZ3JhZGllbnQ6ICdsaW5lYXItZ3JhZGllbnQoMzdkZWcsIHJnYmEoMjU1LCA2NSwgMTA4LCAxKSA1MCUsIHJnYmEoMjM4LCAyNTUsIDIwLCAxKSAxMDAlKScsXHJcbiAgZ3JhZGllbnQ6ICdsaW5lYXItZ3JhZGllbnQoMzdkZWcsICNmZjQxNmMgNTAlLCAjZWVmZjE0IDEwMCUpJyxcclxuICByZXZlcnNlR3JhZGllbnQ6ICdsaW5lYXItZ3JhZGllbnQoMzdkZWcsICNlZWZmMTQgNyUsICNmZjQxNmMgNDYlKScsXHJcbiAgcGlua0dyYWRlbnQ6ICdsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmZjRiMmIsICNmZjQxNmMpOycsXHJcbiAgcmV2ZXJzZVBpbmtHcmFkaWVudDogJ2xpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2ZmNDE2YywgI2ZmNGIyYik7JyxcclxuICBzZWNvbmRhcnk6ICcjZmY0YjJiJyxcclxuICB0ZXJ0aWFyeTogJyNlZWZmMTQnXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbG9yczsiLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gIGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDtcbiAgdmFyIGNhY2hlID0gbmV3IFdlYWtNYXAoKTtcblxuICBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gICAgcmV0dXJuIGNhY2hlO1xuICB9O1xuXG4gIHJldHVybiBjYWNoZTtcbn1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7XG4gIGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHtcbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCBfdHlwZW9mKG9iaikgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgICB9O1xuICB9XG5cbiAgdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7XG5cbiAgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7XG4gICAgcmV0dXJuIGNhY2hlLmdldChvYmopO1xuICB9XG5cbiAgdmFyIG5ld09iaiA9IHt9O1xuICB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDtcblxuICAgICAgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3T2JqW2tleV0gPSBvYmpba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqO1xuXG4gIGlmIChjYWNoZSkge1xuICAgIGNhY2hlLnNldChvYmosIG5ld09iaik7XG4gIH1cblxuICByZXR1cm4gbmV3T2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiLCJkZWNsYXJlIGNvbnN0IF9fTkVYVF9EQVRBX186IGFueVxuXG5pbXBvcnQgUmVhY3QsIHsgQ2hpbGRyZW4gfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IFByZWZldGNoT3B0aW9ucywgTmV4dFJvdXRlciB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgZXhlY09uY2UsIGdldExvY2F0aW9uT3JpZ2luIH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5pbXBvcnQgeyBhZGRCYXNlUGF0aCwgcmVzb2x2ZUhyZWYgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcblxuLyoqXG4gKiBEZXRlY3RzIHdoZXRoZXIgYSBnaXZlbiB1cmwgaXMgZnJvbSB0aGUgc2FtZSBvcmlnaW4gYXMgdGhlIGN1cnJlbnQgcGFnZSAoYnJvd3NlciBvbmx5KS5cbiAqL1xuZnVuY3Rpb24gaXNMb2NhbCh1cmw6IHN0cmluZyk6IGJvb2xlYW4ge1xuICBjb25zdCBsb2NhdGlvbk9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgY29uc3QgcmVzb2x2ZWQgPSBuZXcgVVJMKHVybCwgbG9jYXRpb25PcmlnaW4pXG4gIHJldHVybiByZXNvbHZlZC5vcmlnaW4gPT09IGxvY2F0aW9uT3JpZ2luXG59XG5cbnR5cGUgVXJsID0gc3RyaW5nIHwgVXJsT2JqZWN0XG5cbmV4cG9ydCB0eXBlIExpbmtQcm9wcyA9IHtcbiAgaHJlZjogVXJsXG4gIGFzPzogVXJsXG4gIHJlcGxhY2U/OiBib29sZWFuXG4gIHNjcm9sbD86IGJvb2xlYW5cbiAgc2hhbGxvdz86IGJvb2xlYW5cbiAgcGFzc0hyZWY/OiBib29sZWFuXG4gIHByZWZldGNoPzogYm9vbGVhblxufVxuXG5sZXQgY2FjaGVkT2JzZXJ2ZXI6IEludGVyc2VjdGlvbk9ic2VydmVyXG5jb25zdCBsaXN0ZW5lcnMgPSBuZXcgTWFwPEVsZW1lbnQsICgpID0+IHZvaWQ+KClcbmNvbnN0IEludGVyc2VjdGlvbk9ic2VydmVyID1cbiAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cuSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgOiBudWxsXG5jb25zdCBwcmVmZXRjaGVkOiB7IFtjYWNoZUtleTogc3RyaW5nXTogYm9vbGVhbiB9ID0ge31cblxuZnVuY3Rpb24gZ2V0T2JzZXJ2ZXIoKTogSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgfCB1bmRlZmluZWQge1xuICAvLyBSZXR1cm4gc2hhcmVkIGluc3RhbmNlIG9mIEludGVyc2VjdGlvbk9ic2VydmVyIGlmIGFscmVhZHkgY3JlYXRlZFxuICBpZiAoY2FjaGVkT2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gY2FjaGVkT2JzZXJ2ZXJcbiAgfVxuXG4gIC8vIE9ubHkgY3JlYXRlIHNoYXJlZCBJbnRlcnNlY3Rpb25PYnNlcnZlciBpZiBzdXBwb3J0ZWQgaW4gYnJvd3NlclxuICBpZiAoIUludGVyc2VjdGlvbk9ic2VydmVyKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgcmV0dXJuIChjYWNoZWRPYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihcbiAgICAoZW50cmllcykgPT4ge1xuICAgICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgICBpZiAoIWxpc3RlbmVycy5oYXMoZW50cnkudGFyZ2V0KSkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY2IgPSBsaXN0ZW5lcnMuZ2V0KGVudHJ5LnRhcmdldCkhXG4gICAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZyB8fCBlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyA+IDApIHtcbiAgICAgICAgICBjYWNoZWRPYnNlcnZlci51bm9ic2VydmUoZW50cnkudGFyZ2V0KVxuICAgICAgICAgIGxpc3RlbmVycy5kZWxldGUoZW50cnkudGFyZ2V0KVxuICAgICAgICAgIGNiKClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9LFxuICAgIHsgcm9vdE1hcmdpbjogJzIwMHB4JyB9XG4gICkpXG59XG5cbmNvbnN0IGxpc3RlblRvSW50ZXJzZWN0aW9ucyA9IChlbDogRWxlbWVudCwgY2I6ICgpID0+IHZvaWQpID0+IHtcbiAgY29uc3Qgb2JzZXJ2ZXIgPSBnZXRPYnNlcnZlcigpXG4gIGlmICghb2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gKCkgPT4ge31cbiAgfVxuXG4gIG9ic2VydmVyLm9ic2VydmUoZWwpXG4gIGxpc3RlbmVycy5zZXQoZWwsIGNiKVxuICByZXR1cm4gKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBvYnNlcnZlci51bm9ic2VydmUoZWwpXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycilcbiAgICB9XG4gICAgbGlzdGVuZXJzLmRlbGV0ZShlbClcbiAgfVxufVxuXG5mdW5jdGlvbiBwcmVmZXRjaChcbiAgcm91dGVyOiBOZXh0Um91dGVyLFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIG9wdGlvbnM/OiBQcmVmZXRjaE9wdGlvbnNcbik6IHZvaWQge1xuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHJldHVyblxuICAvLyBQcmVmZXRjaCB0aGUgSlNPTiBwYWdlIGlmIGFza2VkIChvbmx5IGluIHRoZSBjbGllbnQpXG4gIC8vIFdlIG5lZWQgdG8gaGFuZGxlIGEgcHJlZmV0Y2ggZXJyb3IgaGVyZSBzaW5jZSB3ZSBtYXkgYmVcbiAgLy8gbG9hZGluZyB3aXRoIHByaW9yaXR5IHdoaWNoIGNhbiByZWplY3QgYnV0IHdlIGRvbid0XG4gIC8vIHdhbnQgdG8gZm9yY2UgbmF2aWdhdGlvbiBzaW5jZSB0aGlzIGlzIG9ubHkgYSBwcmVmZXRjaFxuICByb3V0ZXIucHJlZmV0Y2goaHJlZiwgYXMsIG9wdGlvbnMpLmNhdGNoKChlcnIpID0+IHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgLy8gcmV0aHJvdyB0byBzaG93IGludmFsaWQgVVJMIGVycm9yc1xuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuICB9KVxuICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhc10gPSB0cnVlXG59XG5cbmZ1bmN0aW9uIGxpbmtDbGlja2VkKFxuICBlOiBSZWFjdC5Nb3VzZUV2ZW50LFxuICByb3V0ZXI6IE5leHRSb3V0ZXIsXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgcmVwbGFjZT86IGJvb2xlYW4sXG4gIHNoYWxsb3c/OiBib29sZWFuLFxuICBzY3JvbGw/OiBib29sZWFuXG4pOiB2b2lkIHtcbiAgY29uc3QgeyBub2RlTmFtZSwgdGFyZ2V0IH0gPSBlLmN1cnJlbnRUYXJnZXQgYXMgSFRNTEFuY2hvckVsZW1lbnRcbiAgaWYgKFxuICAgIG5vZGVOYW1lID09PSAnQScgJiZcbiAgICAoKHRhcmdldCAmJiB0YXJnZXQgIT09ICdfc2VsZicpIHx8XG4gICAgICBlLm1ldGFLZXkgfHxcbiAgICAgIGUuY3RybEtleSB8fFxuICAgICAgZS5zaGlmdEtleSB8fFxuICAgICAgKGUubmF0aXZlRXZlbnQgJiYgZS5uYXRpdmVFdmVudC53aGljaCA9PT0gMikpXG4gICkge1xuICAgIC8vIGlnbm9yZSBjbGljayBmb3IgbmV3IHRhYiAvIG5ldyB3aW5kb3cgYmVoYXZpb3JcbiAgICByZXR1cm5cbiAgfVxuXG4gIGlmICghaXNMb2NhbChocmVmKSkge1xuICAgIC8vIGlnbm9yZSBjbGljayBpZiBpdCdzIG91dHNpZGUgb3VyIHNjb3BlIChlLmcuIGh0dHBzOi8vZ29vZ2xlLmNvbSlcbiAgICByZXR1cm5cbiAgfVxuXG4gIGUucHJldmVudERlZmF1bHQoKVxuXG4gIC8vICBhdm9pZCBzY3JvbGwgZm9yIHVybHMgd2l0aCBhbmNob3IgcmVmc1xuICBpZiAoc2Nyb2xsID09IG51bGwpIHtcbiAgICBzY3JvbGwgPSBhcy5pbmRleE9mKCcjJykgPCAwXG4gIH1cblxuICAvLyByZXBsYWNlIHN0YXRlIGluc3RlYWQgb2YgcHVzaCBpZiBwcm9wIGlzIHByZXNlbnRcbiAgcm91dGVyW3JlcGxhY2UgPyAncmVwbGFjZScgOiAncHVzaCddKGhyZWYsIGFzLCB7IHNoYWxsb3cgfSkudGhlbihcbiAgICAoc3VjY2VzczogYm9vbGVhbikgPT4ge1xuICAgICAgaWYgKCFzdWNjZXNzKSByZXR1cm5cbiAgICAgIGlmIChzY3JvbGwpIHtcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICAgIGRvY3VtZW50LmJvZHkuZm9jdXMoKVxuICAgICAgfVxuICAgIH1cbiAgKVxufVxuXG5mdW5jdGlvbiBMaW5rKHByb3BzOiBSZWFjdC5Qcm9wc1dpdGhDaGlsZHJlbjxMaW5rUHJvcHM+KSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgLy8gVGhpcyBob29rIGlzIGluIGEgY29uZGl0aW9uYWwgYnV0IHRoYXQgaXMgb2sgYmVjYXVzZSBgcHJvY2Vzcy5lbnYuTk9ERV9FTlZgIG5ldmVyIGNoYW5nZXNcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcbiAgICBjb25zdCBoYXNXYXJuZWQgPSBSZWFjdC51c2VSZWYoZmFsc2UpXG4gICAgaWYgKHByb3BzLnByZWZldGNoICYmICFoYXNXYXJuZWQuY3VycmVudCkge1xuICAgICAgaGFzV2FybmVkLmN1cnJlbnQgPSB0cnVlXG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICdOZXh0LmpzIGF1dG8tcHJlZmV0Y2hlcyBhdXRvbWF0aWNhbGx5IGJhc2VkIG9uIHZpZXdwb3J0LiBUaGUgcHJlZmV0Y2ggYXR0cmlidXRlIGlzIG5vIGxvbmdlciBuZWVkZWQuIE1vcmU6IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL3ByZWZldGNoLXRydWUtZGVwcmVjYXRlZCdcbiAgICAgIClcbiAgICB9XG4gIH1cbiAgY29uc3QgcCA9IHByb3BzLnByZWZldGNoICE9PSBmYWxzZVxuXG4gIGNvbnN0IFtjaGlsZEVsbSwgc2V0Q2hpbGRFbG1dID0gUmVhY3QudXNlU3RhdGU8RWxlbWVudD4oKVxuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IHBhdGhuYW1lID0gKHJvdXRlciAmJiByb3V0ZXIucGF0aG5hbWUpIHx8ICcvJ1xuXG4gIGNvbnN0IHsgaHJlZiwgYXMgfSA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnN0IHJlc29sdmVkSHJlZiA9IHJlc29sdmVIcmVmKHBhdGhuYW1lLCBwcm9wcy5ocmVmKVxuICAgIHJldHVybiB7XG4gICAgICBocmVmOiByZXNvbHZlZEhyZWYsXG4gICAgICBhczogcHJvcHMuYXMgPyByZXNvbHZlSHJlZihwYXRobmFtZSwgcHJvcHMuYXMpIDogcmVzb2x2ZWRIcmVmLFxuICAgIH1cbiAgfSwgW3BhdGhuYW1lLCBwcm9wcy5ocmVmLCBwcm9wcy5hc10pXG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAocCAmJiBJbnRlcnNlY3Rpb25PYnNlcnZlciAmJiBjaGlsZEVsbSAmJiBjaGlsZEVsbS50YWdOYW1lKSB7XG4gICAgICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICAgICAgY29uc3QgaXNQcmVmZXRjaGVkID0gcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXNdXG4gICAgICBpZiAoIWlzUHJlZmV0Y2hlZCkge1xuICAgICAgICByZXR1cm4gbGlzdGVuVG9JbnRlcnNlY3Rpb25zKGNoaWxkRWxtLCAoKSA9PiB7XG4gICAgICAgICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcylcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtwLCBjaGlsZEVsbSwgaHJlZiwgYXMsIHJvdXRlcl0pXG5cbiAgbGV0IHsgY2hpbGRyZW4sIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbCB9ID0gcHJvcHNcbiAgLy8gRGVwcmVjYXRlZC4gV2FybmluZyBzaG93biBieSBwcm9wVHlwZSBjaGVjay4gSWYgdGhlIGNoaWxkcmVuIHByb3ZpZGVkIGlzIGEgc3RyaW5nICg8TGluaz5leGFtcGxlPC9MaW5rPikgd2Ugd3JhcCBpdCBpbiBhbiA8YT4gdGFnXG4gIGlmICh0eXBlb2YgY2hpbGRyZW4gPT09ICdzdHJpbmcnKSB7XG4gICAgY2hpbGRyZW4gPSA8YT57Y2hpbGRyZW59PC9hPlxuICB9XG5cbiAgLy8gVGhpcyB3aWxsIHJldHVybiB0aGUgZmlyc3QgY2hpbGQsIGlmIG11bHRpcGxlIGFyZSBwcm92aWRlZCBpdCB3aWxsIHRocm93IGFuIGVycm9yXG4gIGNvbnN0IGNoaWxkOiBhbnkgPSBDaGlsZHJlbi5vbmx5KGNoaWxkcmVuKVxuICBjb25zdCBjaGlsZFByb3BzOiB7XG4gICAgb25Nb3VzZUVudGVyPzogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICBvbkNsaWNrOiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgIGhyZWY/OiBzdHJpbmdcbiAgICByZWY/OiBhbnlcbiAgfSA9IHtcbiAgICByZWY6IChlbDogYW55KSA9PiB7XG4gICAgICBpZiAoZWwpIHNldENoaWxkRWxtKGVsKVxuXG4gICAgICBpZiAoY2hpbGQgJiYgdHlwZW9mIGNoaWxkID09PSAnb2JqZWN0JyAmJiBjaGlsZC5yZWYpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBjaGlsZC5yZWYgPT09ICdmdW5jdGlvbicpIGNoaWxkLnJlZihlbClcbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIGNoaWxkLnJlZiA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICBjaGlsZC5yZWYuY3VycmVudCA9IGVsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIG9uQ2xpY2s6IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uQ2xpY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY2hpbGQucHJvcHMub25DbGljayhlKVxuICAgICAgfVxuICAgICAgaWYgKCFlLmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgbGlua0NsaWNrZWQoZSwgcm91dGVyLCBocmVmLCBhcywgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsKVxuICAgICAgfVxuICAgIH0sXG4gIH1cblxuICBpZiAocCkge1xuICAgIGNoaWxkUHJvcHMub25Nb3VzZUVudGVyID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlcihlKVxuICAgICAgfVxuICAgICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcywgeyBwcmlvcml0eTogdHJ1ZSB9KVxuICAgIH1cbiAgfVxuXG4gIC8vIElmIGNoaWxkIGlzIGFuIDxhPiB0YWcgYW5kIGRvZXNuJ3QgaGF2ZSBhIGhyZWYgYXR0cmlidXRlLCBvciBpZiB0aGUgJ3Bhc3NIcmVmJyBwcm9wZXJ0eSBpc1xuICAvLyBkZWZpbmVkLCB3ZSBzcGVjaWZ5IHRoZSBjdXJyZW50ICdocmVmJywgc28gdGhhdCByZXBldGl0aW9uIGlzIG5vdCBuZWVkZWQgYnkgdGhlIHVzZXJcbiAgaWYgKHByb3BzLnBhc3NIcmVmIHx8IChjaGlsZC50eXBlID09PSAnYScgJiYgISgnaHJlZicgaW4gY2hpbGQucHJvcHMpKSkge1xuICAgIGNoaWxkUHJvcHMuaHJlZiA9IGFkZEJhc2VQYXRoKGFzKVxuICB9XG5cbiAgLy8gQWRkIHRoZSBlbmRpbmcgc2xhc2ggdG8gdGhlIHBhdGhzLiBTbywgd2UgY2FuIHNlcnZlIHRoZVxuICAvLyBcIjxwYWdlPi9pbmRleC5odG1sXCIgZGlyZWN0bHkuXG4gIGlmIChwcm9jZXNzLmVudi5fX05FWFRfRVhQT1JUX1RSQUlMSU5HX1NMQVNIKSB7XG4gICAgY29uc3QgcmV3cml0ZVVybEZvck5leHRFeHBvcnQgPSByZXF1aXJlKCcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3Jld3JpdGUtdXJsLWZvci1leHBvcnQnKVxuICAgICAgLnJld3JpdGVVcmxGb3JOZXh0RXhwb3J0XG4gICAgaWYgKFxuICAgICAgY2hpbGRQcm9wcy5ocmVmICYmXG4gICAgICB0eXBlb2YgX19ORVhUX0RBVEFfXyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgIF9fTkVYVF9EQVRBX18ubmV4dEV4cG9ydFxuICAgICkge1xuICAgICAgY2hpbGRQcm9wcy5ocmVmID0gcmV3cml0ZVVybEZvck5leHRFeHBvcnQoY2hpbGRQcm9wcy5ocmVmKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIGNoaWxkUHJvcHMpXG59XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICBjb25zdCB3YXJuID0gZXhlY09uY2UoY29uc29sZS5lcnJvcilcblxuICAvLyBUaGlzIG1vZHVsZSBnZXRzIHJlbW92ZWQgYnkgd2VicGFjay5JZ25vcmVQbHVnaW5cbiAgY29uc3QgUHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpXG4gIGNvbnN0IGV4YWN0ID0gcmVxdWlyZSgncHJvcC10eXBlcy1leGFjdCcpXG4gIC8vIEB0cy1pZ25vcmUgdGhlIHByb3BlcnR5IGlzIHN1cHBvcnRlZCwgd2hlbiBkZWNsYXJpbmcgaXQgb24gdGhlIGNsYXNzIGl0IG91dHB1dHMgYW4gZXh0cmEgYml0IG9mIGNvZGUgd2hpY2ggaXMgbm90IG5lZWRlZC5cbiAgTGluay5wcm9wVHlwZXMgPSBleGFjdCh7XG4gICAgaHJlZjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm9iamVjdF0pLmlzUmVxdWlyZWQsXG4gICAgYXM6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5vYmplY3RdKSxcbiAgICBwcmVmZXRjaDogUHJvcFR5cGVzLmJvb2wsXG4gICAgcmVwbGFjZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgc2hhbGxvdzogUHJvcFR5cGVzLmJvb2wsXG4gICAgcGFzc0hyZWY6IFByb3BUeXBlcy5ib29sLFxuICAgIHNjcm9sbDogUHJvcFR5cGVzLmJvb2wsXG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgUHJvcFR5cGVzLmVsZW1lbnQsXG4gICAgICAocHJvcHM6IGFueSwgcHJvcE5hbWU6IHN0cmluZykgPT4ge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHByb3BzW3Byb3BOYW1lXVxuXG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgd2FybihcbiAgICAgICAgICAgIGBXYXJuaW5nOiBZb3UncmUgdXNpbmcgYSBzdHJpbmcgZGlyZWN0bHkgaW5zaWRlIDxMaW5rPi4gVGhpcyB1c2FnZSBoYXMgYmVlbiBkZXByZWNhdGVkLiBQbGVhc2UgYWRkIGFuIDxhPiB0YWcgYXMgY2hpbGQgb2YgPExpbms+YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICB9LFxuICAgIF0pLmlzUmVxdWlyZWQsXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IExpbmtcbiIsIi8qKlxuICogUmVtb3ZlcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGlmIHRoZXJlIGlzIG9uZS4gUHJlc2VydmVzIHRoZSByb290IHBhdGggYC9gLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGguZW5kc1dpdGgoJy8nKSAmJiBwYXRoICE9PSAnLycgPyBwYXRoLnNsaWNlKDAsIC0xKSA6IHBhdGhcbn1cblxuLyoqXG4gKiBOb3JtYWxpemVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggYWNjb3JkaW5nIHRvIHRoZSBgdHJhaWxpbmdTbGFzaGAgb3B0aW9uXG4gKiBpbiBgbmV4dC5jb25maWcuanNgLlxuICovXG5leHBvcnQgY29uc3Qgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2ggPSBwcm9jZXNzLmVudi5fX05FWFRfVFJBSUxJTkdfU0xBU0hcbiAgPyAocGF0aDogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgICAgIGlmICgvXFwuW14vXStcXC8/JC8udGVzdChwYXRoKSkge1xuICAgICAgICByZXR1cm4gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aClcbiAgICAgIH0gZWxzZSBpZiAocGF0aC5lbmRzV2l0aCgnLycpKSB7XG4gICAgICAgIHJldHVybiBwYXRoXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcGF0aCArICcvJ1xuICAgICAgfVxuICAgIH1cbiAgOiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaFxuIiwiLyogZ2xvYmFsIHdpbmRvdyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJvdXRlciwgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBSb3V0ZXJDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0J1xuXG50eXBlIENsYXNzQXJndW1lbnRzPFQ+ID0gVCBleHRlbmRzIG5ldyAoLi4uYXJnczogaW5mZXIgVSkgPT4gYW55ID8gVSA6IGFueVxuXG50eXBlIFJvdXRlckFyZ3MgPSBDbGFzc0FyZ3VtZW50czx0eXBlb2YgUm91dGVyPlxuXG50eXBlIFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogUm91dGVyIHwgbnVsbFxuICByZWFkeUNhbGxiYWNrczogQXJyYXk8KCkgPT4gYW55PlxuICByZWFkeShjYjogKCkgPT4gYW55KTogdm9pZFxufVxuXG5leHBvcnQgeyBSb3V0ZXIsIE5leHRSb3V0ZXIgfVxuXG5leHBvcnQgdHlwZSBTaW5nbGV0b25Sb3V0ZXIgPSBTaW5nbGV0b25Sb3V0ZXJCYXNlICYgTmV4dFJvdXRlclxuXG5jb25zdCBzaW5nbGV0b25Sb3V0ZXI6IFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogbnVsbCwgLy8gaG9sZHMgdGhlIGFjdHVhbCByb3V0ZXIgaW5zdGFuY2VcbiAgcmVhZHlDYWxsYmFja3M6IFtdLFxuICByZWFkeShjYjogKCkgPT4gdm9pZCkge1xuICAgIGlmICh0aGlzLnJvdXRlcikgcmV0dXJuIGNiKClcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMucmVhZHlDYWxsYmFja3MucHVzaChjYilcbiAgICB9XG4gIH0sXG59XG5cbi8vIENyZWF0ZSBwdWJsaWMgcHJvcGVydGllcyBhbmQgbWV0aG9kcyBvZiB0aGUgcm91dGVyIGluIHRoZSBzaW5nbGV0b25Sb3V0ZXJcbmNvbnN0IHVybFByb3BlcnR5RmllbGRzID0gW1xuICAncGF0aG5hbWUnLFxuICAncm91dGUnLFxuICAncXVlcnknLFxuICAnYXNQYXRoJyxcbiAgJ2NvbXBvbmVudHMnLFxuICAnaXNGYWxsYmFjaycsXG4gICdiYXNlUGF0aCcsXG5dXG5jb25zdCByb3V0ZXJFdmVudHMgPSBbXG4gICdyb3V0ZUNoYW5nZVN0YXJ0JyxcbiAgJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLFxuICAncm91dGVDaGFuZ2VDb21wbGV0ZScsXG4gICdyb3V0ZUNoYW5nZUVycm9yJyxcbiAgJ2hhc2hDaGFuZ2VTdGFydCcsXG4gICdoYXNoQ2hhbmdlQ29tcGxldGUnLFxuXVxuY29uc3QgY29yZU1ldGhvZEZpZWxkcyA9IFtcbiAgJ3B1c2gnLFxuICAncmVwbGFjZScsXG4gICdyZWxvYWQnLFxuICAnYmFjaycsXG4gICdwcmVmZXRjaCcsXG4gICdiZWZvcmVQb3BTdGF0ZScsXG5dXG5cbi8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsICdldmVudHMnLCB7XG4gIGdldCgpIHtcbiAgICByZXR1cm4gUm91dGVyLmV2ZW50c1xuICB9LFxufSlcblxudXJsUHJvcGVydHlGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgLy8gSGVyZSB3ZSBuZWVkIHRvIHVzZSBPYmplY3QuZGVmaW5lUHJvcGVydHkgYmVjYXVzZSwgd2UgbmVlZCB0byByZXR1cm5cbiAgLy8gdGhlIHByb3BlcnR5IGFzc2lnbmVkIHRvIHRoZSBhY3R1YWwgcm91dGVyXG4gIC8vIFRoZSB2YWx1ZSBtaWdodCBnZXQgY2hhbmdlZCBhcyB3ZSBjaGFuZ2Ugcm91dGVzIGFuZCB0aGlzIGlzIHRoZVxuICAvLyBwcm9wZXIgd2F5IHRvIGFjY2VzcyBpdFxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCBmaWVsZCwge1xuICAgIGdldCgpIHtcbiAgICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgICAgcmV0dXJuIHJvdXRlcltmaWVsZF0gYXMgc3RyaW5nXG4gICAgfSxcbiAgfSlcbn0pXG5cbmNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgLy8gV2UgZG9uJ3QgcmVhbGx5IGtub3cgdGhlIHR5cGVzIGhlcmUsIHNvIHdlIGFkZCB0aGVtIGxhdGVyIGluc3RlYWRcbiAgOyhzaW5nbGV0b25Sb3V0ZXIgYXMgYW55KVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICB9XG59KVxuXG5yb3V0ZXJFdmVudHMuZm9yRWFjaCgoZXZlbnQpID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5KCgpID0+IHtcbiAgICBSb3V0ZXIuZXZlbnRzLm9uKGV2ZW50LCAoLi4uYXJncykgPT4ge1xuICAgICAgY29uc3QgZXZlbnRGaWVsZCA9IGBvbiR7ZXZlbnQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCl9JHtldmVudC5zdWJzdHJpbmcoXG4gICAgICAgIDFcbiAgICAgICl9YFxuICAgICAgY29uc3QgX3NpbmdsZXRvblJvdXRlciA9IHNpbmdsZXRvblJvdXRlciBhcyBhbnlcbiAgICAgIGlmIChfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSguLi5hcmdzKVxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tY29uc29sZVxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIHdoZW4gcnVubmluZyB0aGUgUm91dGVyIGV2ZW50OiAke2V2ZW50RmllbGR9YClcbiAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tY29uc29sZVxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYCR7ZXJyLm1lc3NhZ2V9XFxuJHtlcnIuc3RhY2t9YClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG59KVxuXG5mdW5jdGlvbiBnZXRSb3V0ZXIoKTogUm91dGVyIHtcbiAgaWYgKCFzaW5nbGV0b25Sb3V0ZXIucm91dGVyKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9XG4gICAgICAnTm8gcm91dGVyIGluc3RhbmNlIGZvdW5kLlxcbicgK1xuICAgICAgJ1lvdSBzaG91bGQgb25seSB1c2UgXCJuZXh0L3JvdXRlclwiIGluc2lkZSB0aGUgY2xpZW50IHNpZGUgb2YgeW91ciBhcHAuXFxuJ1xuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIEV4cG9ydCB0aGUgc2luZ2xldG9uUm91dGVyIGFuZCB0aGlzIGlzIHRoZSBwdWJsaWMgQVBJLlxuZXhwb3J0IGRlZmF1bHQgc2luZ2xldG9uUm91dGVyIGFzIFNpbmdsZXRvblJvdXRlclxuXG4vLyBSZWV4cG9ydCB0aGUgd2l0aFJvdXRlIEhPQ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB3aXRoUm91dGVyIH0gZnJvbSAnLi93aXRoLXJvdXRlcidcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVJvdXRlcigpOiBOZXh0Um91dGVyIHtcbiAgcmV0dXJuIFJlYWN0LnVzZUNvbnRleHQoUm91dGVyQ29udGV4dClcbn1cblxuLy8gSU5URVJOQUwgQVBJU1xuLy8gLS0tLS0tLS0tLS0tLVxuLy8gKGRvIG5vdCB1c2UgZm9sbG93aW5nIGV4cG9ydHMgaW5zaWRlIHRoZSBhcHApXG5cbi8vIENyZWF0ZSBhIHJvdXRlciBhbmQgYXNzaWduIGl0IGFzIHRoZSBzaW5nbGV0b24gaW5zdGFuY2UuXG4vLyBUaGlzIGlzIHVzZWQgaW4gY2xpZW50IHNpZGUgd2hlbiB3ZSBhcmUgaW5pdGlsaXppbmcgdGhlIGFwcC5cbi8vIFRoaXMgc2hvdWxkICoqbm90KiogdXNlIGluc2lkZSB0aGUgc2VydmVyLlxuZXhwb3J0IGNvbnN0IGNyZWF0ZVJvdXRlciA9ICguLi5hcmdzOiBSb3V0ZXJBcmdzKTogUm91dGVyID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJvdXRlciA9IG5ldyBSb3V0ZXIoLi4uYXJncylcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzLmZvckVhY2goKGNiKSA9PiBjYigpKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MgPSBbXVxuXG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBjcmVhdGUgdGhlIGB3aXRoUm91dGVyYCByb3V0ZXIgaW5zdGFuY2VcbmV4cG9ydCBmdW5jdGlvbiBtYWtlUHVibGljUm91dGVySW5zdGFuY2Uocm91dGVyOiBSb3V0ZXIpOiBOZXh0Um91dGVyIHtcbiAgY29uc3QgX3JvdXRlciA9IHJvdXRlciBhcyBhbnlcbiAgY29uc3QgaW5zdGFuY2UgPSB7fSBhcyBhbnlcblxuICBmb3IgKGNvbnN0IHByb3BlcnR5IG9mIHVybFByb3BlcnR5RmllbGRzKSB7XG4gICAgaWYgKHR5cGVvZiBfcm91dGVyW3Byb3BlcnR5XSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IE9iamVjdC5hc3NpZ24oe30sIF9yb3V0ZXJbcHJvcGVydHldKSAvLyBtYWtlcyBzdXJlIHF1ZXJ5IGlzIG5vdCBzdGF0ZWZ1bFxuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBfcm91dGVyW3Byb3BlcnR5XVxuICB9XG5cbiAgLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuICBpbnN0YW5jZS5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAgIGluc3RhbmNlW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgICAgcmV0dXJuIF9yb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gICAgfVxuICB9KVxuXG4gIHJldHVybiBpbnN0YW5jZVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTmV4dENvbXBvbmVudFR5cGUsIE5leHRQYWdlQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi91dGlscydcbmltcG9ydCB7IE5leHRSb3V0ZXIsIHVzZVJvdXRlciB9IGZyb20gJy4vcm91dGVyJ1xuXG5leHBvcnQgdHlwZSBXaXRoUm91dGVyUHJvcHMgPSB7XG4gIHJvdXRlcjogTmV4dFJvdXRlclxufVxuXG5leHBvcnQgdHlwZSBFeGNsdWRlUm91dGVyUHJvcHM8UD4gPSBQaWNrPFxuICBQLFxuICBFeGNsdWRlPGtleW9mIFAsIGtleW9mIFdpdGhSb3V0ZXJQcm9wcz5cbj5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2l0aFJvdXRlcjxcbiAgUCBleHRlbmRzIFdpdGhSb3V0ZXJQcm9wcyxcbiAgQyA9IE5leHRQYWdlQ29udGV4dFxuPihcbiAgQ29tcG9zZWRDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPEMsIGFueSwgUD5cbik6IFJlYWN0LkNvbXBvbmVudFR5cGU8RXhjbHVkZVJvdXRlclByb3BzPFA+PiB7XG4gIGZ1bmN0aW9uIFdpdGhSb3V0ZXJXcmFwcGVyKHByb3BzOiBhbnkpIHtcbiAgICByZXR1cm4gPENvbXBvc2VkQ29tcG9uZW50IHJvdXRlcj17dXNlUm91dGVyKCl9IHsuLi5wcm9wc30gLz5cbiAgfVxuXG4gIFdpdGhSb3V0ZXJXcmFwcGVyLmdldEluaXRpYWxQcm9wcyA9IENvbXBvc2VkQ29tcG9uZW50LmdldEluaXRpYWxQcm9wc1xuICAvLyBUaGlzIGlzIG5lZWRlZCB0byBhbGxvdyBjaGVja2luZyBmb3IgY3VzdG9tIGdldEluaXRpYWxQcm9wcyBpbiBfYXBwXG4gIDsoV2l0aFJvdXRlcldyYXBwZXIgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzID0gKENvbXBvc2VkQ29tcG9uZW50IGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wc1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNvbnN0IG5hbWUgPVxuICAgICAgQ29tcG9zZWRDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9zZWRDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbiAgICBXaXRoUm91dGVyV3JhcHBlci5kaXNwbGF5TmFtZSA9IGB3aXRoUm91dGVyKCR7bmFtZX0pYFxuICB9XG5cbiAgcmV0dXJuIFdpdGhSb3V0ZXJXcmFwcGVyXG59XG4iLCIvKlxuTUlUIExpY2Vuc2VcblxuQ29weXJpZ2h0IChjKSBKYXNvbiBNaWxsZXIgKGh0dHBzOi8vamFzb25mb3JtYXQuY29tLylcblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuKi9cblxuLy8gVGhpcyBmaWxlIGlzIGJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9kZXZlbG9waXQvbWl0dC9ibG9iL3YxLjEuMy9zcmMvaW5kZXguanNcbi8vIEl0J3MgYmVlbiBlZGl0ZWQgZm9yIHRoZSBuZWVkcyBvZiB0aGlzIHNjcmlwdFxuLy8gU2VlIHRoZSBMSUNFTlNFIGF0IHRoZSB0b3Agb2YgdGhlIGZpbGVcblxudHlwZSBIYW5kbGVyID0gKC4uLmV2dHM6IGFueVtdKSA9PiB2b2lkXG5cbmV4cG9ydCB0eXBlIE1pdHRFbWl0dGVyID0ge1xuICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSk6IHZvaWRcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWl0dCgpOiBNaXR0RW1pdHRlciB7XG4gIGNvbnN0IGFsbDogeyBbczogc3RyaW5nXTogSGFuZGxlcltdIH0gPSBPYmplY3QuY3JlYXRlKG51bGwpXG5cbiAgcmV0dXJuIHtcbiAgICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIDsoYWxsW3R5cGVdIHx8IChhbGxbdHlwZV0gPSBbXSkpLnB1c2goaGFuZGxlcilcbiAgICB9LFxuXG4gICAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgaWYgKGFsbFt0eXBlXSkge1xuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYml0d2lzZVxuICAgICAgICBhbGxbdHlwZV0uc3BsaWNlKGFsbFt0eXBlXS5pbmRleE9mKGhhbmRsZXIpID4+PiAwLCAxKVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgIDsoYWxsW3R5cGVdIHx8IFtdKS5zbGljZSgpLm1hcCgoaGFuZGxlcjogSGFuZGxlcikgPT4ge1xuICAgICAgICBoYW5kbGVyKC4uLmV2dHMpXG4gICAgICB9KVxuICAgIH0sXG4gIH1cbn1cbiIsIi8qIGdsb2JhbCBfX05FWFRfREFUQV9fICovXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1jb25zb2xlXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IG1pdHQsIHsgTWl0dEVtaXR0ZXIgfSBmcm9tICcuLi9taXR0J1xuaW1wb3J0IHtcbiAgQXBwQ29udGV4dFR5cGUsXG4gIGZvcm1hdFdpdGhWYWxpZGF0aW9uLFxuICBnZXRVUkwsXG4gIGxvYWRHZXRJbml0aWFsUHJvcHMsXG4gIE5leHRQYWdlQ29udGV4dCxcbiAgU1QsXG59IGZyb20gJy4uL3V0aWxzJ1xuaW1wb3J0IHsgaXNEeW5hbWljUm91dGUgfSBmcm9tICcuL3V0aWxzL2lzLWR5bmFtaWMnXG5pbXBvcnQgeyBnZXRSb3V0ZU1hdGNoZXIgfSBmcm9tICcuL3V0aWxzL3JvdXRlLW1hdGNoZXInXG5pbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi91dGlscy9yb3V0ZS1yZWdleCdcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3V0aWxzL3NlYXJjaC1wYXJhbXMtdG8tdXJsLXF1ZXJ5J1xuaW1wb3J0IHsgcGFyc2VSZWxhdGl2ZVVybCB9IGZyb20gJy4vdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsJ1xuaW1wb3J0IHtcbiAgcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gsXG4gIG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoLFxufSBmcm9tICcuLi8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoJ1xuXG5jb25zdCBiYXNlUGF0aCA9IChwcm9jZXNzLmVudi5fX05FWFRfUk9VVEVSX0JBU0VQQVRIIGFzIHN0cmluZykgfHwgJydcblxuZnVuY3Rpb24gYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpIHtcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24obmV3IEVycm9yKCdSb3V0ZSBDYW5jZWxsZWQnKSwge1xuICAgIGNhbmNlbGxlZDogdHJ1ZSxcbiAgfSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBiYXNlUGF0aFxuICAgID8gcGF0aCA9PT0gJy8nXG4gICAgICA/IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKGJhc2VQYXRoKVxuICAgICAgOiBiYXNlUGF0aCArIHBhdGhcbiAgICA6IHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLnNsaWNlKGJhc2VQYXRoLmxlbmd0aCkgfHwgJy8nXG59XG5cbnR5cGUgVXJsID0gVXJsT2JqZWN0IHwgc3RyaW5nXG5cbi8qKlxuICogUmVzb2x2ZXMgYSBnaXZlbiBoeXBlcmxpbmsgd2l0aCBhIGNlcnRhaW4gcm91dGVyIHN0YXRlIChiYXNlUGF0aCBub3QgaW5jbHVkZWQpLlxuICogUHJlc2VydmVzIGFic29sdXRlIHVybHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlSHJlZihjdXJyZW50UGF0aDogc3RyaW5nLCBocmVmOiBVcmwpOiBzdHJpbmcge1xuICAvLyB3ZSB1c2UgYSBkdW1teSBiYXNlIHVybCBmb3IgcmVsYXRpdmUgdXJsc1xuICBjb25zdCBiYXNlID0gbmV3IFVSTChjdXJyZW50UGF0aCwgJ2h0dHA6Ly9uJylcbiAgY29uc3QgdXJsQXNTdHJpbmcgPVxuICAgIHR5cGVvZiBocmVmID09PSAnc3RyaW5nJyA/IGhyZWYgOiBmb3JtYXRXaXRoVmFsaWRhdGlvbihocmVmKVxuICBjb25zdCBmaW5hbFVybCA9IG5ldyBVUkwodXJsQXNTdHJpbmcsIGJhc2UpXG4gIGZpbmFsVXJsLnBhdGhuYW1lID0gbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2goZmluYWxVcmwucGF0aG5hbWUpXG4gIC8vIGlmIHRoZSBvcmlnaW4gZGlkbid0IGNoYW5nZSwgaXQgbWVhbnMgd2UgcmVjZWl2ZWQgYSByZWxhdGl2ZSBocmVmXG4gIHJldHVybiBmaW5hbFVybC5vcmlnaW4gPT09IGJhc2Uub3JpZ2luXG4gICAgPyBmaW5hbFVybC5ocmVmLnNsaWNlKGZpbmFsVXJsLm9yaWdpbi5sZW5ndGgpXG4gICAgOiBmaW5hbFVybC5ocmVmXG59XG5cbmZ1bmN0aW9uIHByZXBhcmVVcmxBcyhyb3V0ZXI6IE5leHRSb3V0ZXIsIHVybDogVXJsLCBhczogVXJsKSB7XG4gIC8vIElmIHVybCBhbmQgYXMgcHJvdmlkZWQgYXMgYW4gb2JqZWN0IHJlcHJlc2VudGF0aW9uLFxuICAvLyB3ZSdsbCBmb3JtYXQgdGhlbSBpbnRvIHRoZSBzdHJpbmcgdmVyc2lvbiBoZXJlLlxuICByZXR1cm4ge1xuICAgIHVybDogYWRkQmFzZVBhdGgocmVzb2x2ZUhyZWYocm91dGVyLnBhdGhuYW1lLCB1cmwpKSxcbiAgICBhczogYXMgPyBhZGRCYXNlUGF0aChyZXNvbHZlSHJlZihyb3V0ZXIucGF0aG5hbWUsIGFzKSkgOiBhcyxcbiAgfVxufVxuXG5mdW5jdGlvbiB0cnlQYXJzZVJlbGF0aXZlVXJsKFxuICB1cmw6IHN0cmluZ1xuKTogbnVsbCB8IFJldHVyblR5cGU8dHlwZW9mIHBhcnNlUmVsYXRpdmVVcmw+IHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBJbnZhbGlkIGhyZWYgcGFzc2VkIHRvIHJvdXRlcjogJHt1cmx9IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2ludmFsaWQtaHJlZi1wYXNzZWRgXG4gICAgICApXG4gICAgfVxuICAgIHJldHVybiBudWxsXG4gIH1cbn1cblxudHlwZSBDb21wb25lbnRSZXMgPSB7IHBhZ2U6IENvbXBvbmVudFR5cGU7IG1vZDogYW55IH1cblxuZXhwb3J0IHR5cGUgQmFzZVJvdXRlciA9IHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG59XG5cbmV4cG9ydCB0eXBlIE5leHRSb3V0ZXIgPSBCYXNlUm91dGVyICZcbiAgUGljazxcbiAgICBSb3V0ZXIsXG4gICAgfCAncHVzaCdcbiAgICB8ICdyZXBsYWNlJ1xuICAgIHwgJ3JlbG9hZCdcbiAgICB8ICdiYWNrJ1xuICAgIHwgJ3ByZWZldGNoJ1xuICAgIHwgJ2JlZm9yZVBvcFN0YXRlJ1xuICAgIHwgJ2V2ZW50cydcbiAgICB8ICdpc0ZhbGxiYWNrJ1xuICA+XG5cbmV4cG9ydCB0eXBlIFByZWZldGNoT3B0aW9ucyA9IHtcbiAgcHJpb3JpdHk/OiBib29sZWFuXG59XG5cbnR5cGUgUm91dGVJbmZvID0ge1xuICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbiAgcHJvcHM/OiBhbnlcbiAgZXJyPzogRXJyb3JcbiAgZXJyb3I/OiBhbnlcbn1cblxudHlwZSBTdWJzY3JpcHRpb24gPSAoZGF0YTogUm91dGVJbmZvLCBBcHA/OiBDb21wb25lbnRUeXBlKSA9PiBQcm9taXNlPHZvaWQ+XG5cbnR5cGUgQmVmb3JlUG9wU3RhdGVDYWxsYmFjayA9IChzdGF0ZTogYW55KSA9PiBib29sZWFuXG5cbnR5cGUgQ29tcG9uZW50TG9hZENhbmNlbCA9ICgoKSA9PiB2b2lkKSB8IG51bGxcblxudHlwZSBIaXN0b3J5TWV0aG9kID0gJ3JlcGxhY2VTdGF0ZScgfCAncHVzaFN0YXRlJ1xuXG5jb25zdCBtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiA9XG4gIHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04gJiZcbiAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgJ3Njcm9sbFJlc3RvcmF0aW9uJyBpbiB3aW5kb3cuaGlzdG9yeVxuXG5mdW5jdGlvbiBmZXRjaFJldHJ5KHVybDogc3RyaW5nLCBhdHRlbXB0czogbnVtYmVyKTogUHJvbWlzZTxhbnk+IHtcbiAgcmV0dXJuIGZldGNoKHVybCwge1xuICAgIC8vIENvb2tpZXMgYXJlIHJlcXVpcmVkIHRvIGJlIHByZXNlbnQgZm9yIE5leHQuanMnIFNTRyBcIlByZXZpZXcgTW9kZVwiLlxuICAgIC8vIENvb2tpZXMgbWF5IGFsc28gYmUgcmVxdWlyZWQgZm9yIGBnZXRTZXJ2ZXJTaWRlUHJvcHNgLlxuICAgIC8vXG4gICAgLy8gPiBgZmV0Y2hgIHdvbuKAmXQgc2VuZCBjb29raWVzLCB1bmxlc3MgeW91IHNldCB0aGUgY3JlZGVudGlhbHMgaW5pdFxuICAgIC8vID4gb3B0aW9uLlxuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GZXRjaF9BUEkvVXNpbmdfRmV0Y2hcbiAgICAvL1xuICAgIC8vID4gRm9yIG1heGltdW0gYnJvd3NlciBjb21wYXRpYmlsaXR5IHdoZW4gaXQgY29tZXMgdG8gc2VuZGluZyAmXG4gICAgLy8gPiByZWNlaXZpbmcgY29va2llcywgYWx3YXlzIHN1cHBseSB0aGUgYGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nYFxuICAgIC8vID4gb3B0aW9uIGluc3RlYWQgb2YgcmVseWluZyBvbiB0aGUgZGVmYXVsdC5cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZ2l0aHViL2ZldGNoI2NhdmVhdHNcbiAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcbiAgfSkudGhlbigocmVzKSA9PiB7XG4gICAgaWYgKCFyZXMub2spIHtcbiAgICAgIGlmIChhdHRlbXB0cyA+IDEgJiYgcmVzLnN0YXR1cyA+PSA1MDApIHtcbiAgICAgICAgcmV0dXJuIGZldGNoUmV0cnkodXJsLCBhdHRlbXB0cyAtIDEpXG4gICAgICB9XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApXG4gICAgfVxuXG4gICAgcmV0dXJuIHJlcy5qc29uKClcbiAgfSlcbn1cblxuZnVuY3Rpb24gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZjogc3RyaW5nLCBpc1NlcnZlclJlbmRlcjogYm9vbGVhbikge1xuICByZXR1cm4gZmV0Y2hSZXRyeShkYXRhSHJlZiwgaXNTZXJ2ZXJSZW5kZXIgPyAzIDogMSkuY2F0Y2goKGVycjogRXJyb3IpID0+IHtcbiAgICAvLyBXZSBzaG91bGQgb25seSB0cmlnZ2VyIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbiBpZiB0aGlzIHdhcyBjYXVzZWRcbiAgICAvLyBvbiBhIGNsaWVudC1zaWRlIHRyYW5zaXRpb24uIE90aGVyd2lzZSwgd2UnZCBnZXQgaW50byBhbiBpbmZpbml0ZVxuICAgIC8vIGxvb3AuXG4gICAgaWYgKCFpc1NlcnZlclJlbmRlcikge1xuICAgICAgOyhlcnIgYXMgYW55KS5jb2RlID0gJ1BBR0VfTE9BRF9FUlJPUidcbiAgICB9XG4gICAgdGhyb3cgZXJyXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvdXRlciBpbXBsZW1lbnRzIEJhc2VSb3V0ZXIge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcblxuICAvKipcbiAgICogTWFwIG9mIGFsbCBjb21wb25lbnRzIGxvYWRlZCBpbiBgUm91dGVyYFxuICAgKi9cbiAgY29tcG9uZW50czogeyBbcGF0aG5hbWU6IHN0cmluZ106IFJvdXRlSW5mbyB9XG4gIC8vIFN0YXRpYyBEYXRhIENhY2hlXG4gIHNkYzogeyBbYXNQYXRoOiBzdHJpbmddOiBvYmplY3QgfSA9IHt9XG4gIHN1YjogU3Vic2NyaXB0aW9uXG4gIGNsYzogQ29tcG9uZW50TG9hZENhbmNlbFxuICBwYWdlTG9hZGVyOiBhbnlcbiAgX2JwczogQmVmb3JlUG9wU3RhdGVDYWxsYmFjayB8IHVuZGVmaW5lZFxuICBldmVudHM6IE1pdHRFbWl0dGVyXG4gIF93cmFwQXBwOiAoQXBwOiBDb21wb25lbnRUeXBlKSA9PiBhbnlcbiAgaXNTc3I6IGJvb2xlYW5cbiAgaXNGYWxsYmFjazogYm9vbGVhblxuICBfaW5GbGlnaHRSb3V0ZT86IHN0cmluZ1xuXG4gIHN0YXRpYyBldmVudHM6IE1pdHRFbWl0dGVyID0gbWl0dCgpXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICB7XG4gICAgICBpbml0aWFsUHJvcHMsXG4gICAgICBwYWdlTG9hZGVyLFxuICAgICAgQXBwLFxuICAgICAgd3JhcEFwcCxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIGVycixcbiAgICAgIHN1YnNjcmlwdGlvbixcbiAgICAgIGlzRmFsbGJhY2ssXG4gICAgfToge1xuICAgICAgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb25cbiAgICAgIGluaXRpYWxQcm9wczogYW55XG4gICAgICBwYWdlTG9hZGVyOiBhbnlcbiAgICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICAgICAgQXBwOiBDb21wb25lbnRUeXBlXG4gICAgICB3cmFwQXBwOiAoQXBwOiBDb21wb25lbnRUeXBlKSA9PiBhbnlcbiAgICAgIGVycj86IEVycm9yXG4gICAgICBpc0ZhbGxiYWNrOiBib29sZWFuXG4gICAgfVxuICApIHtcbiAgICAvLyByZXByZXNlbnRzIHRoZSBjdXJyZW50IGNvbXBvbmVudCBrZXlcbiAgICB0aGlzLnJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG5cbiAgICAvLyBzZXQgdXAgdGhlIGNvbXBvbmVudCBjYWNoZSAoYnkgcm91dGUga2V5cylcbiAgICB0aGlzLmNvbXBvbmVudHMgPSB7fVxuICAgIC8vIFdlIHNob3VsZCBub3Qga2VlcCB0aGUgY2FjaGUsIGlmIHRoZXJlJ3MgYW4gZXJyb3JcbiAgICAvLyBPdGhlcndpc2UsIHRoaXMgY2F1c2UgaXNzdWVzIHdoZW4gd2hlbiBnb2luZyBiYWNrIGFuZFxuICAgIC8vIGNvbWUgYWdhaW4gdG8gdGhlIGVycm9yZWQgcGFnZS5cbiAgICBpZiAocGF0aG5hbWUgIT09ICcvX2Vycm9yJykge1xuICAgICAgdGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdID0ge1xuICAgICAgICBDb21wb25lbnQsXG4gICAgICAgIHByb3BzOiBpbml0aWFsUHJvcHMsXG4gICAgICAgIGVycixcbiAgICAgICAgX19OX1NTRzogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NHLFxuICAgICAgICBfX05fU1NQOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU1AsXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5jb21wb25lbnRzWycvX2FwcCddID0geyBDb21wb25lbnQ6IEFwcCB9XG5cbiAgICAvLyBCYWNrd2FyZHMgY29tcGF0IGZvciBSb3V0ZXIucm91dGVyLmV2ZW50c1xuICAgIC8vIFRPRE86IFNob3VsZCBiZSByZW1vdmUgdGhlIGZvbGxvd2luZyBtYWpvciB2ZXJzaW9uIGFzIGl0IHdhcyBuZXZlciBkb2N1bWVudGVkXG4gICAgdGhpcy5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgICB0aGlzLnBhZ2VMb2FkZXIgPSBwYWdlTG9hZGVyXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgLy8gaWYgYXV0byBwcmVyZW5kZXJlZCBhbmQgZHluYW1pYyByb3V0ZSB3YWl0IHRvIHVwZGF0ZSBhc1BhdGhcbiAgICAvLyB1bnRpbCBhZnRlciBtb3VudCB0byBwcmV2ZW50IGh5ZHJhdGlvbiBtaXNtYXRjaFxuICAgIHRoaXMuYXNQYXRoID1cbiAgICAgIC8vIEB0cy1pZ25vcmUgdGhpcyBpcyB0ZW1wb3JhcmlseSBnbG9iYWwgKGF0dGFjaGVkIHRvIHdpbmRvdylcbiAgICAgIGlzRHluYW1pY1JvdXRlKHBhdGhuYW1lKSAmJiBfX05FWFRfREFUQV9fLmF1dG9FeHBvcnQgPyBwYXRobmFtZSA6IGFzXG4gICAgdGhpcy5iYXNlUGF0aCA9IGJhc2VQYXRoXG4gICAgdGhpcy5zdWIgPSBzdWJzY3JpcHRpb25cbiAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB0aGlzLl93cmFwQXBwID0gd3JhcEFwcFxuICAgIC8vIG1ha2Ugc3VyZSB0byBpZ25vcmUgZXh0cmEgcG9wU3RhdGUgaW4gc2FmYXJpIG9uIG5hdmlnYXRpbmdcbiAgICAvLyBiYWNrIGZyb20gZXh0ZXJuYWwgc2l0ZVxuICAgIHRoaXMuaXNTc3IgPSB0cnVlXG5cbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBpc0ZhbGxiYWNrXG5cbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIG1ha2Ugc3VyZSBcImFzXCIgZG9lc24ndCBzdGFydCB3aXRoIGRvdWJsZSBzbGFzaGVzIG9yIGVsc2UgaXQgY2FuXG4gICAgICAvLyB0aHJvdyBhbiBlcnJvciBhcyBpdCdzIGNvbnNpZGVyZWQgaW52YWxpZFxuICAgICAgaWYgKGFzLnN1YnN0cigwLCAyKSAhPT0gJy8vJykge1xuICAgICAgICAvLyBpbiBvcmRlciBmb3IgYGUuc3RhdGVgIHRvIHdvcmsgb24gdGhlIGBvbnBvcHN0YXRlYCBldmVudFxuICAgICAgICAvLyB3ZSBoYXZlIHRvIHJlZ2lzdGVyIHRoZSBpbml0aWFsIHJvdXRlIHVwb24gaW5pdGlhbGl6YXRpb25cblxuICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lKSwgcXVlcnkgfSksXG4gICAgICAgICAgZ2V0VVJMKClcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB0aGlzLm9uUG9wU3RhdGUpXG5cbiAgICAgIC8vIGVuYWJsZSBjdXN0b20gc2Nyb2xsIHJlc3RvcmF0aW9uIGhhbmRsaW5nIHdoZW4gYXZhaWxhYmxlXG4gICAgICAvLyBvdGhlcndpc2UgZmFsbGJhY2sgdG8gYnJvd3NlcidzIGRlZmF1bHQgaGFuZGxpbmdcbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnNjcm9sbFJlc3RvcmF0aW9uID0gJ21hbnVhbCdcblxuICAgICAgICAgIGxldCBzY3JvbGxEZWJvdW5jZVRpbWVvdXQ6IHVuZGVmaW5lZCB8IE5vZGVKUy5UaW1lb3V0XG5cbiAgICAgICAgICBjb25zdCBkZWJvdW5jZWRTY3JvbGxTYXZlID0gKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHNjcm9sbERlYm91bmNlVGltZW91dCkgY2xlYXJUaW1lb3V0KHNjcm9sbERlYm91bmNlVGltZW91dClcblxuICAgICAgICAgICAgc2Nyb2xsRGVib3VuY2VUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHsgdXJsLCBhczogY3VyQXMsIG9wdGlvbnMgfSA9IGhpc3Rvcnkuc3RhdGVcbiAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgICAgICAgICB1cmwsXG4gICAgICAgICAgICAgICAgY3VyQXMsXG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucywge1xuICAgICAgICAgICAgICAgICAgX05fWDogd2luZG93LnNjcm9sbFgsXG4gICAgICAgICAgICAgICAgICBfTl9ZOiB3aW5kb3cuc2Nyb2xsWSxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9LCAxMClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZGVib3VuY2VkU2Nyb2xsU2F2ZSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIEBkZXByZWNhdGVkIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5IGV2ZW4gdGhvdWdoIGl0J3MgYSBwcml2YXRlIG1ldGhvZC5cbiAgc3RhdGljIF9yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCh1cmw6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9FWFBPUlRfVFJBSUxJTkdfU0xBU0gpIHtcbiAgICAgIGNvbnN0IHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0ID0gcmVxdWlyZSgnLi9yZXdyaXRlLXVybC1mb3ItZXhwb3J0JylcbiAgICAgICAgLnJld3JpdGVVcmxGb3JOZXh0RXhwb3J0XG4gICAgICByZXR1cm4gcmV3cml0ZVVybEZvck5leHRFeHBvcnQodXJsKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdXJsXG4gICAgfVxuICB9XG5cbiAgb25Qb3BTdGF0ZSA9IChlOiBQb3BTdGF0ZUV2ZW50KTogdm9pZCA9PiB7XG4gICAgaWYgKCFlLnN0YXRlKSB7XG4gICAgICAvLyBXZSBnZXQgc3RhdGUgYXMgdW5kZWZpbmVkIGZvciB0d28gcmVhc29ucy5cbiAgICAgIC8vICAxLiBXaXRoIG9sZGVyIHNhZmFyaSAoPCA4KSBhbmQgb2xkZXIgY2hyb21lICg8IDM0KVxuICAgICAgLy8gIDIuIFdoZW4gdGhlIFVSTCBjaGFuZ2VkIHdpdGggI1xuICAgICAgLy9cbiAgICAgIC8vIEluIHRoZSBib3RoIGNhc2VzLCB3ZSBkb24ndCBuZWVkIHRvIHByb2NlZWQgYW5kIGNoYW5nZSB0aGUgcm91dGUuXG4gICAgICAvLyAoYXMgaXQncyBhbHJlYWR5IGNoYW5nZWQpXG4gICAgICAvLyBCdXQgd2UgY2FuIHNpbXBseSByZXBsYWNlIHRoZSBzdGF0ZSB3aXRoIHRoZSBuZXcgY2hhbmdlcy5cbiAgICAgIC8vIEFjdHVhbGx5LCBmb3IgKDEpIHdlIGRvbid0IG5lZWQgdG8gbm90aGluZy4gQnV0IGl0J3MgaGFyZCB0byBkZXRlY3QgdGhhdCBldmVudC5cbiAgICAgIC8vIFNvLCBkb2luZyB0aGUgZm9sbG93aW5nIGZvciAoMSkgZG9lcyBubyBoYXJtLlxuICAgICAgY29uc3QgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHRoaXNcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZSksIHF1ZXJ5IH0pLFxuICAgICAgICBnZXRVUkwoKVxuICAgICAgKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgeyB1cmwsIGFzLCBvcHRpb25zLCBfX04gfSA9IGUuc3RhdGVcbiAgICBpZiAoIV9fTikge1xuICAgICAgLy8gdGhpcyBoaXN0b3J5IHN0YXRlIHdhc24ndCBjcmVhdGVkIGJ5IG5leHQuanMgc28gaXQgY2FuIGJlIGlnbm9yZWRcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIC8vIE1ha2Ugc3VyZSB3ZSBkb24ndCByZS1yZW5kZXIgb24gaW5pdGlhbCBsb2FkLFxuICAgIC8vIGNhbiBiZSBjYXVzZWQgYnkgbmF2aWdhdGluZyBiYWNrIGZyb20gYW4gZXh0ZXJuYWwgc2l0ZVxuICAgIGlmICh0aGlzLmlzU3NyICYmIGFzID09PSB0aGlzLmFzUGF0aCAmJiBwYXRobmFtZSA9PT0gdGhpcy5wYXRobmFtZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGRvd25zdHJlYW0gYXBwbGljYXRpb24gcmV0dXJucyBmYWxzeSwgcmV0dXJuLlxuICAgIC8vIFRoZXkgd2lsbCB0aGVuIGJlIHJlc3BvbnNpYmxlIGZvciBoYW5kbGluZyB0aGUgZXZlbnQuXG4gICAgaWYgKHRoaXMuX2JwcyAmJiAhdGhpcy5fYnBzKGUuc3RhdGUpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKHR5cGVvZiB1cmwgPT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiBhcyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICdgcG9wc3RhdGVgIGV2ZW50IHRyaWdnZXJlZCBidXQgYGV2ZW50LnN0YXRlYCBkaWQgbm90IGhhdmUgYHVybGAgb3IgYGFzYCBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9wb3BzdGF0ZS1zdGF0ZS1lbXB0eSdcbiAgICAgICAgKVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIHVwZGF0ZShyb3V0ZTogc3RyaW5nLCBtb2Q6IGFueSkge1xuICAgIGNvbnN0IENvbXBvbmVudDogQ29tcG9uZW50VHlwZSA9IG1vZC5kZWZhdWx0IHx8IG1vZFxuICAgIGNvbnN0IGRhdGEgPSB0aGlzLmNvbXBvbmVudHNbcm91dGVdXG4gICAgaWYgKCFkYXRhKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYENhbm5vdCB1cGRhdGUgdW5hdmFpbGFibGUgcm91dGU6ICR7cm91dGV9YClcbiAgICB9XG5cbiAgICBjb25zdCBuZXdEYXRhID0gT2JqZWN0LmFzc2lnbih7fSwgZGF0YSwge1xuICAgICAgQ29tcG9uZW50LFxuICAgICAgX19OX1NTRzogbW9kLl9fTl9TU0csXG4gICAgICBfX05fU1NQOiBtb2QuX19OX1NTUCxcbiAgICB9KVxuICAgIHRoaXMuY29tcG9uZW50c1tyb3V0ZV0gPSBuZXdEYXRhXG5cbiAgICAvLyBwYWdlcy9fYXBwLmpzIHVwZGF0ZWRcbiAgICBpZiAocm91dGUgPT09ICcvX2FwcCcpIHtcbiAgICAgIHRoaXMubm90aWZ5KHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSlcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChyb3V0ZSA9PT0gdGhpcy5yb3V0ZSkge1xuICAgICAgdGhpcy5ub3RpZnkobmV3RGF0YSlcbiAgICB9XG4gIH1cblxuICByZWxvYWQoKTogdm9pZCB7XG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXG4gIH1cblxuICAvKipcbiAgICogR28gYmFjayBpbiBoaXN0b3J5XG4gICAqL1xuICBiYWNrKCkge1xuICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHB1c2hTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICBwdXNoKHVybDogVXJsLCBhczogVXJsID0gdXJsLCBvcHRpb25zID0ge30pIHtcbiAgICA7KHsgdXJsLCBhcyB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKVxuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncHVzaFN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGByZXBsYWNlU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcmVwbGFjZSh1cmw6IFVybCwgYXM6IFVybCA9IHVybCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgOyh7IHVybCwgYXMgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSlcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3JlcGxhY2VTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICBhc3luYyBjaGFuZ2UoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzOiBzdHJpbmcsXG4gICAgb3B0aW9uczogYW55XG4gICk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIGlmICghb3B0aW9ucy5faCkge1xuICAgICAgdGhpcy5pc1NzciA9IGZhbHNlXG4gICAgfVxuICAgIC8vIG1hcmtpbmcgcm91dGUgY2hhbmdlcyBhcyBhIG5hdmlnYXRpb24gc3RhcnQgZW50cnlcbiAgICBpZiAoU1QpIHtcbiAgICAgIHBlcmZvcm1hbmNlLm1hcmsoJ3JvdXRlQ2hhbmdlJylcbiAgICB9XG5cbiAgICAvLyBBZGQgdGhlIGVuZGluZyBzbGFzaCB0byB0aGUgcGF0aHMuIFNvLCB3ZSBjYW4gc2VydmUgdGhlXG4gICAgLy8gXCI8cGFnZT4vaW5kZXguaHRtbFwiIGRpcmVjdGx5IGZvciB0aGUgU1NSIHBhZ2UuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9FWFBPUlRfVFJBSUxJTkdfU0xBU0gpIHtcbiAgICAgIGNvbnN0IHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0ID0gcmVxdWlyZSgnLi9yZXdyaXRlLXVybC1mb3ItZXhwb3J0JylcbiAgICAgICAgLnJld3JpdGVVcmxGb3JOZXh0RXhwb3J0XG4gICAgICAvLyBAdHMtaWdub3JlIHRoaXMgaXMgdGVtcG9yYXJpbHkgZ2xvYmFsIChhdHRhY2hlZCB0byB3aW5kb3cpXG4gICAgICBpZiAoX19ORVhUX0RBVEFfXy5uZXh0RXhwb3J0KSB7XG4gICAgICAgIGFzID0gcmV3cml0ZVVybEZvck5leHRFeHBvcnQoYXMpXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2luRmxpZ2h0Um91dGUpIHtcbiAgICAgIHRoaXMuYWJvcnRDb21wb25lbnRMb2FkKHRoaXMuX2luRmxpZ2h0Um91dGUpXG4gICAgfVxuXG4gICAgY29uc3QgY2xlYW5lZEFzID0gZGVsQmFzZVBhdGgoYXMpXG4gICAgdGhpcy5faW5GbGlnaHRSb3V0ZSA9IGFzXG5cbiAgICAvLyBJZiB0aGUgdXJsIGNoYW5nZSBpcyBvbmx5IHJlbGF0ZWQgdG8gYSBoYXNoIGNoYW5nZVxuICAgIC8vIFdlIHNob3VsZCBub3QgcHJvY2VlZC4gV2Ugc2hvdWxkIG9ubHkgY2hhbmdlIHRoZSBzdGF0ZS5cblxuICAgIC8vIFdBUk5JTkc6IGBfaGAgaXMgYW4gaW50ZXJuYWwgb3B0aW9uIGZvciBoYW5kaW5nIE5leHQuanMgY2xpZW50LXNpZGVcbiAgICAvLyBoeWRyYXRpb24uIFlvdXIgYXBwIHNob3VsZCBfbmV2ZXJfIHVzZSB0aGlzIHByb3BlcnR5LiBJdCBtYXkgY2hhbmdlIGF0XG4gICAgLy8gYW55IHRpbWUgd2l0aG91dCBub3RpY2UuXG4gICAgaWYgKCFvcHRpb25zLl9oICYmIHRoaXMub25seUFIYXNoQ2hhbmdlKGNsZWFuZWRBcykpIHtcbiAgICAgIHRoaXMuYXNQYXRoID0gY2xlYW5lZEFzXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VTdGFydCcsIGFzKVxuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpXG4gICAgICB0aGlzLnNjcm9sbFRvSGFzaChjbGVhbmVkQXMpXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VDb21wbGV0ZScsIGFzKVxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICBjb25zdCBwYXJzZWQgPSB0cnlQYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIGlmICghcGFyc2VkKSByZXR1cm4gZmFsc2VcblxuICAgIGxldCB7IHBhdGhuYW1lLCBzZWFyY2hQYXJhbXMgfSA9IHBhcnNlZFxuICAgIGNvbnN0IHF1ZXJ5ID0gc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShzZWFyY2hQYXJhbXMpXG5cbiAgICAvLyB1cmwgYW5kIGFzIHNob3VsZCBhbHdheXMgYmUgcHJlZml4ZWQgd2l0aCBiYXNlUGF0aCBieSB0aGlzXG4gICAgLy8gcG9pbnQgYnkgZWl0aGVyIG5leHQvbGluayBvciByb3V0ZXIucHVzaC9yZXBsYWNlIHNvIHN0cmlwIHRoZVxuICAgIC8vIGJhc2VQYXRoIGZyb20gdGhlIHBhdGhuYW1lIHRvIG1hdGNoIHRoZSBwYWdlcyBkaXIgMS10by0xXG4gICAgcGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgPyByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChkZWxCYXNlUGF0aChwYXRobmFtZSkpXG4gICAgICA6IHBhdGhuYW1lXG5cbiAgICAvLyBJZiBhc2tlZCB0byBjaGFuZ2UgdGhlIGN1cnJlbnQgVVJMIHdlIHNob3VsZCByZWxvYWQgdGhlIGN1cnJlbnQgcGFnZVxuICAgIC8vIChub3QgbG9jYXRpb24ucmVsb2FkKCkgYnV0IHJlbG9hZCBnZXRJbml0aWFsUHJvcHMgYW5kIG90aGVyIE5leHQuanMgc3R1ZmZzKVxuICAgIC8vIFdlIGFsc28gbmVlZCB0byBzZXQgdGhlIG1ldGhvZCA9IHJlcGxhY2VTdGF0ZSBhbHdheXNcbiAgICAvLyBhcyB0aGlzIHNob3VsZCBub3QgZ28gaW50byB0aGUgaGlzdG9yeSAoVGhhdCdzIGhvdyBicm93c2VycyB3b3JrKVxuICAgIC8vIFdlIHNob3VsZCBjb21wYXJlIHRoZSBuZXcgYXNQYXRoIHRvIHRoZSBjdXJyZW50IGFzUGF0aCwgbm90IHRoZSB1cmxcbiAgICBpZiAoIXRoaXMudXJsSXNOZXcoY2xlYW5lZEFzKSkge1xuICAgICAgbWV0aG9kID0gJ3JlcGxhY2VTdGF0ZSdcbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuICAgIGNvbnN0IHsgc2hhbGxvdyA9IGZhbHNlIH0gPSBvcHRpb25zXG5cbiAgICBpZiAoaXNEeW5hbWljUm91dGUocm91dGUpKSB7XG4gICAgICBjb25zdCB7IHBhdGhuYW1lOiBhc1BhdGhuYW1lIH0gPSBwYXJzZVJlbGF0aXZlVXJsKGNsZWFuZWRBcylcbiAgICAgIGNvbnN0IHJvdXRlUmVnZXggPSBnZXRSb3V0ZVJlZ2V4KHJvdXRlKVxuICAgICAgY29uc3Qgcm91dGVNYXRjaCA9IGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4KShhc1BhdGhuYW1lKVxuICAgICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICAgIGNvbnN0IG1pc3NpbmdQYXJhbXMgPSBPYmplY3Qua2V5cyhyb3V0ZVJlZ2V4Lmdyb3VwcykuZmlsdGVyKFxuICAgICAgICAgIChwYXJhbSkgPT4gIXF1ZXJ5W3BhcmFtXVxuICAgICAgICApXG5cbiAgICAgICAgaWYgKG1pc3NpbmdQYXJhbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgIGBNaXNtYXRjaGluZyBcXGBhc1xcYCBhbmQgXFxgaHJlZlxcYCBmYWlsZWQgdG8gbWFudWFsbHkgcHJvdmlkZSBgICtcbiAgICAgICAgICAgICAgICBgdGhlIHBhcmFtczogJHttaXNzaW5nUGFyYW1zLmpvaW4oXG4gICAgICAgICAgICAgICAgICAnLCAnXG4gICAgICAgICAgICAgICAgKX0gaW4gdGhlIFxcYGhyZWZcXGAncyBcXGBxdWVyeVxcYGBcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBgVGhlIHByb3ZpZGVkIFxcYGFzXFxgIHZhbHVlICgke2FzUGF0aG5hbWV9KSBpcyBpbmNvbXBhdGlibGUgd2l0aCB0aGUgXFxgaHJlZlxcYCB2YWx1ZSAoJHtyb3V0ZX0pLiBgICtcbiAgICAgICAgICAgICAgYFJlYWQgbW9yZTogaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvaW5jb21wYXRpYmxlLWhyZWYtYXNgXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBNZXJnZSBwYXJhbXMgaW50byBgcXVlcnlgLCBvdmVyd3JpdGluZyBhbnkgc3BlY2lmaWVkIGluIHNlYXJjaFxuICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5LCByb3V0ZU1hdGNoKVxuICAgICAgfVxuICAgIH1cblxuICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VTdGFydCcsIGFzKVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJvdXRlSW5mbyA9IGF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKFxuICAgICAgICByb3V0ZSxcbiAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICBhcyxcbiAgICAgICAgc2hhbGxvd1xuICAgICAgKVxuICAgICAgY29uc3QgeyBlcnJvciB9ID0gcm91dGVJbmZvXG5cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnYmVmb3JlSGlzdG9yeUNoYW5nZScsIGFzKVxuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpXG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IGFwcENvbXA6IGFueSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnRcbiAgICAgICAgOyh3aW5kb3cgYXMgYW55KS5uZXh0LmlzUHJlcmVuZGVyZWQgPVxuICAgICAgICAgIGFwcENvbXAuZ2V0SW5pdGlhbFByb3BzID09PSBhcHBDb21wLm9yaWdHZXRJbml0aWFsUHJvcHMgJiZcbiAgICAgICAgICAhKHJvdXRlSW5mby5Db21wb25lbnQgYXMgYW55KS5nZXRJbml0aWFsUHJvcHNcbiAgICAgIH1cblxuICAgICAgYXdhaXQgdGhpcy5zZXQocm91dGUsIHBhdGhuYW1lISwgcXVlcnksIGNsZWFuZWRBcywgcm91dGVJbmZvKVxuXG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyb3IsIGNsZWFuZWRBcylcbiAgICAgICAgdGhyb3cgZXJyb3JcbiAgICAgIH1cblxuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uICYmICdfTl9YJyBpbiBvcHRpb25zKSB7XG4gICAgICAgICAgd2luZG93LnNjcm9sbFRvKG9wdGlvbnMuX05fWCwgb3B0aW9ucy5fTl9ZKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBhcylcblxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuICB9XG5cbiAgY2hhbmdlU3RhdGUoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzOiBzdHJpbmcsXG4gICAgb3B0aW9ucyA9IHt9XG4gICk6IHZvaWQge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeSBpcyBub3QgYXZhaWxhYmxlLmApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5LiR7bWV0aG9kfSBpcyBub3QgYXZhaWxhYmxlYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgfHwgZ2V0VVJMKCkgIT09IGFzKSB7XG4gICAgICB3aW5kb3cuaGlzdG9yeVttZXRob2RdKFxuICAgICAgICB7XG4gICAgICAgICAgdXJsLFxuICAgICAgICAgIGFzLFxuICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgICAgX19OOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICAvLyBNb3N0IGJyb3dzZXJzIGN1cnJlbnRseSBpZ25vcmVzIHRoaXMgcGFyYW1ldGVyLCBhbHRob3VnaCB0aGV5IG1heSB1c2UgaXQgaW4gdGhlIGZ1dHVyZS5cbiAgICAgICAgLy8gUGFzc2luZyB0aGUgZW1wdHkgc3RyaW5nIGhlcmUgc2hvdWxkIGJlIHNhZmUgYWdhaW5zdCBmdXR1cmUgY2hhbmdlcyB0byB0aGUgbWV0aG9kLlxuICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSGlzdG9yeS9yZXBsYWNlU3RhdGVcbiAgICAgICAgJycsXG4gICAgICAgIGFzXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgaGFuZGxlUm91dGVJbmZvRXJyb3IoXG4gICAgZXJyOiBFcnJvciAmIHsgY29kZTogYW55OyBjYW5jZWxsZWQ6IGJvb2xlYW4gfSxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBhbnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBsb2FkRXJyb3JGYWlsPzogYm9vbGVhblxuICApOiBQcm9taXNlPFJvdXRlSW5mbz4ge1xuICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAvLyBidWJibGUgdXAgY2FuY2VsbGF0aW9uIGVycm9yc1xuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuXG4gICAgaWYgKGVyci5jb2RlID09PSAnUEFHRV9MT0FEX0VSUk9SJyB8fCBsb2FkRXJyb3JGYWlsKSB7XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnIsIGFzKVxuXG4gICAgICAvLyBJZiB3ZSBjYW4ndCBsb2FkIHRoZSBwYWdlIGl0IGNvdWxkIGJlIG9uZSBvZiBmb2xsb3dpbmcgcmVhc29uc1xuICAgICAgLy8gIDEuIFBhZ2UgZG9lc24ndCBleGlzdHNcbiAgICAgIC8vICAyLiBQYWdlIGRvZXMgZXhpc3QgaW4gYSBkaWZmZXJlbnQgem9uZVxuICAgICAgLy8gIDMuIEludGVybmFsIGVycm9yIHdoaWxlIGxvYWRpbmcgdGhlIHBhZ2VcblxuICAgICAgLy8gU28sIGRvaW5nIGEgaGFyZCByZWxvYWQgaXMgdGhlIHByb3BlciB3YXkgdG8gZGVhbCB3aXRoIHRoaXMuXG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzXG5cbiAgICAgIC8vIENoYW5naW5nIHRoZSBVUkwgZG9lc24ndCBibG9jayBleGVjdXRpbmcgdGhlIGN1cnJlbnQgY29kZSBwYXRoLlxuICAgICAgLy8gU28gbGV0J3MgdGhyb3cgYSBjYW5jZWxsYXRpb24gZXJyb3Igc3RvcCB0aGUgcm91dGluZyBsb2dpYy5cbiAgICAgIHRocm93IGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKVxuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBjb25zdCB7IHBhZ2U6IENvbXBvbmVudCB9ID0gYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudCgnL19lcnJvcicpXG4gICAgICBjb25zdCByb3V0ZUluZm86IFJvdXRlSW5mbyA9IHsgQ29tcG9uZW50LCBlcnIsIGVycm9yOiBlcnIgfVxuXG4gICAgICB0cnkge1xuICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBhd2FpdCB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIHtcbiAgICAgICAgICBlcnIsXG4gICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgcXVlcnksXG4gICAgICAgIH0gYXMgYW55KVxuICAgICAgfSBjYXRjaCAoZ2lwRXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGVycm9yIHBhZ2UgYGdldEluaXRpYWxQcm9wc2A6ICcsIGdpcEVycilcbiAgICAgICAgcm91dGVJbmZvLnByb3BzID0ge31cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJvdXRlSW5mb1xuICAgIH0gY2F0Y2ggKHJvdXRlSW5mb0Vycikge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3Iocm91dGVJbmZvRXJyLCBwYXRobmFtZSwgcXVlcnksIGFzLCB0cnVlKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGdldFJvdXRlSW5mbyhcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IGFueSxcbiAgICBhczogc3RyaW5nLFxuICAgIHNoYWxsb3c6IGJvb2xlYW4gPSBmYWxzZVxuICApOiBQcm9taXNlPFJvdXRlSW5mbz4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBjYWNoZWRSb3V0ZUluZm8gPSB0aGlzLmNvbXBvbmVudHNbcm91dGVdXG5cbiAgICAgIGlmIChzaGFsbG93ICYmIGNhY2hlZFJvdXRlSW5mbyAmJiB0aGlzLnJvdXRlID09PSByb3V0ZSkge1xuICAgICAgICByZXR1cm4gY2FjaGVkUm91dGVJbmZvXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJvdXRlSW5mbyA9IGNhY2hlZFJvdXRlSW5mb1xuICAgICAgICA/IGNhY2hlZFJvdXRlSW5mb1xuICAgICAgICA6IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQocm91dGUpLnRoZW4oXG4gICAgICAgICAgICAocmVzKSA9PlxuICAgICAgICAgICAgICAoe1xuICAgICAgICAgICAgICAgIENvbXBvbmVudDogcmVzLnBhZ2UsXG4gICAgICAgICAgICAgICAgX19OX1NTRzogcmVzLm1vZC5fX05fU1NHLFxuICAgICAgICAgICAgICAgIF9fTl9TU1A6IHJlcy5tb2QuX19OX1NTUCxcbiAgICAgICAgICAgICAgfSBhcyBSb3V0ZUluZm8pXG4gICAgICAgICAgKVxuXG4gICAgICBjb25zdCB7IENvbXBvbmVudCwgX19OX1NTRywgX19OX1NTUCB9ID0gcm91dGVJbmZvXG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IHsgaXNWYWxpZEVsZW1lbnRUeXBlIH0gPSByZXF1aXJlKCdyZWFjdC1pcycpXG4gICAgICAgIGlmICghaXNWYWxpZEVsZW1lbnRUeXBlKENvbXBvbmVudCkpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBgVGhlIGRlZmF1bHQgZXhwb3J0IGlzIG5vdCBhIFJlYWN0IENvbXBvbmVudCBpbiBwYWdlOiBcIiR7cGF0aG5hbWV9XCJgXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxldCBkYXRhSHJlZjogc3RyaW5nIHwgdW5kZWZpbmVkXG5cbiAgICAgIGlmIChfX05fU1NHIHx8IF9fTl9TU1ApIHtcbiAgICAgICAgZGF0YUhyZWYgPSB0aGlzLnBhZ2VMb2FkZXIuZ2V0RGF0YUhyZWYoXG4gICAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZSwgcXVlcnkgfSksXG4gICAgICAgICAgYXMsXG4gICAgICAgICAgX19OX1NTR1xuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHByb3BzID0gYXdhaXQgdGhpcy5fZ2V0RGF0YTxSb3V0ZUluZm8+KCgpID0+XG4gICAgICAgIF9fTl9TU0dcbiAgICAgICAgICA/IHRoaXMuX2dldFN0YXRpY0RhdGEoZGF0YUhyZWYhKVxuICAgICAgICAgIDogX19OX1NTUFxuICAgICAgICAgID8gdGhpcy5fZ2V0U2VydmVyRGF0YShkYXRhSHJlZiEpXG4gICAgICAgICAgOiB0aGlzLmdldEluaXRpYWxQcm9wcyhcbiAgICAgICAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICAgICAgICAvLyB3ZSBwcm92aWRlIEFwcFRyZWUgbGF0ZXIgc28gdGhpcyBuZWVkcyB0byBiZSBgYW55YFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgYXNQYXRoOiBhcyxcbiAgICAgICAgICAgICAgfSBhcyBhbnlcbiAgICAgICAgICAgIClcbiAgICAgIClcbiAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzXG4gICAgICB0aGlzLmNvbXBvbmVudHNbcm91dGVdID0gcm91dGVJbmZvXG4gICAgICByZXR1cm4gcm91dGVJbmZvXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihlcnIsIHBhdGhuYW1lLCBxdWVyeSwgYXMpXG4gICAgfVxuICB9XG5cbiAgc2V0KFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogYW55LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgZGF0YTogUm91dGVJbmZvXG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMuaXNGYWxsYmFjayA9IGZhbHNlXG5cbiAgICB0aGlzLnJvdXRlID0gcm91dGVcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICB0aGlzLmFzUGF0aCA9IGFzXG4gICAgcmV0dXJuIHRoaXMubm90aWZ5KGRhdGEpXG4gIH1cblxuICAvKipcbiAgICogQ2FsbGJhY2sgdG8gZXhlY3V0ZSBiZWZvcmUgcmVwbGFjaW5nIHJvdXRlciBzdGF0ZVxuICAgKiBAcGFyYW0gY2IgY2FsbGJhY2sgdG8gYmUgZXhlY3V0ZWRcbiAgICovXG4gIGJlZm9yZVBvcFN0YXRlKGNiOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrKSB7XG4gICAgdGhpcy5fYnBzID0gY2JcbiAgfVxuXG4gIG9ubHlBSGFzaENoYW5nZShhczogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgaWYgKCF0aGlzLmFzUGF0aCkgcmV0dXJuIGZhbHNlXG4gICAgY29uc3QgW29sZFVybE5vSGFzaCwgb2xkSGFzaF0gPSB0aGlzLmFzUGF0aC5zcGxpdCgnIycpXG4gICAgY29uc3QgW25ld1VybE5vSGFzaCwgbmV3SGFzaF0gPSBhcy5zcGxpdCgnIycpXG5cbiAgICAvLyBNYWtlcyBzdXJlIHdlIHNjcm9sbCB0byB0aGUgcHJvdmlkZWQgaGFzaCBpZiB0aGUgdXJsL2hhc2ggYXJlIHRoZSBzYW1lXG4gICAgaWYgKG5ld0hhc2ggJiYgb2xkVXJsTm9IYXNoID09PSBuZXdVcmxOb0hhc2ggJiYgb2xkSGFzaCA9PT0gbmV3SGFzaCkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgdXJscyBhcmUgY2hhbmdlLCB0aGVyZSdzIG1vcmUgdGhhbiBhIGhhc2ggY2hhbmdlXG4gICAgaWYgKG9sZFVybE5vSGFzaCAhPT0gbmV3VXJsTm9IYXNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgaGFzaCBoYXMgY2hhbmdlZCwgdGhlbiBpdCdzIGEgaGFzaCBvbmx5IGNoYW5nZS5cbiAgICAvLyBUaGlzIGNoZWNrIGlzIG5lY2Vzc2FyeSB0byBoYW5kbGUgYm90aCB0aGUgZW50ZXIgYW5kXG4gICAgLy8gbGVhdmUgaGFzaCA9PT0gJycgY2FzZXMuIFRoZSBpZGVudGl0eSBjYXNlIGZhbGxzIHRocm91Z2hcbiAgICAvLyBhbmQgaXMgdHJlYXRlZCBhcyBhIG5leHQgcmVsb2FkLlxuICAgIHJldHVybiBvbGRIYXNoICE9PSBuZXdIYXNoXG4gIH1cblxuICBzY3JvbGxUb0hhc2goYXM6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IFssIGhhc2hdID0gYXMuc3BsaXQoJyMnKVxuICAgIC8vIFNjcm9sbCB0byB0b3AgaWYgdGhlIGhhc2ggaXMganVzdCBgI2Agd2l0aCBubyB2YWx1ZVxuICAgIGlmIChoYXNoID09PSAnJykge1xuICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBGaXJzdCB3ZSBjaGVjayBpZiB0aGUgZWxlbWVudCBieSBpZCBpcyBmb3VuZFxuICAgIGNvbnN0IGlkRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChoYXNoKVxuICAgIGlmIChpZEVsKSB7XG4gICAgICBpZEVsLnNjcm9sbEludG9WaWV3KClcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICAvLyBJZiB0aGVyZSdzIG5vIGVsZW1lbnQgd2l0aCB0aGUgaWQsIHdlIGNoZWNrIHRoZSBgbmFtZWAgcHJvcGVydHlcbiAgICAvLyBUbyBtaXJyb3IgYnJvd3NlcnNcbiAgICBjb25zdCBuYW1lRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShoYXNoKVswXVxuICAgIGlmIChuYW1lRWwpIHtcbiAgICAgIG5hbWVFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgfVxuICB9XG5cbiAgdXJsSXNOZXcoYXNQYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5hc1BhdGggIT09IGFzUGF0aFxuICB9XG5cbiAgLyoqXG4gICAqIFByZWZldGNoIHBhZ2UgY29kZSwgeW91IG1heSB3YWl0IGZvciB0aGUgZGF0YSBkdXJpbmcgcGFnZSByZW5kZXJpbmcuXG4gICAqIFRoaXMgZmVhdHVyZSBvbmx5IHdvcmtzIGluIHByb2R1Y3Rpb24hXG4gICAqIEBwYXJhbSB1cmwgdGhlIGhyZWYgb2YgcHJlZmV0Y2hlZCBwYWdlXG4gICAqIEBwYXJhbSBhc1BhdGggdGhlIGFzIHBhdGggb2YgdGhlIHByZWZldGNoZWQgcGFnZVxuICAgKi9cbiAgYXN5bmMgcHJlZmV0Y2goXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXNQYXRoOiBzdHJpbmcgPSB1cmwsXG4gICAgb3B0aW9uczogUHJlZmV0Y2hPcHRpb25zID0ge31cbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29uc3QgcGFyc2VkID0gdHJ5UGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICBpZiAoIXBhcnNlZCkgcmV0dXJuXG5cbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSBwYXJzZWRcblxuICAgIC8vIFByZWZldGNoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gZGV2ZWxvcG1lbnQgbW9kZSBiZWNhdXNlIGl0IHdvdWxkIHRyaWdnZXIgb24tZGVtYW5kLWVudHJpZXNcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcbiAgICBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICB0aGlzLnBhZ2VMb2FkZXIucHJlZmV0Y2hEYXRhKHVybCwgYXNQYXRoKSxcbiAgICAgIHRoaXMucGFnZUxvYWRlcltvcHRpb25zLnByaW9yaXR5ID8gJ2xvYWRQYWdlJyA6ICdwcmVmZXRjaCddKHJvdXRlKSxcbiAgICBdKVxuICB9XG5cbiAgYXN5bmMgZmV0Y2hDb21wb25lbnQocm91dGU6IHN0cmluZyk6IFByb21pc2U8Q29tcG9uZW50UmVzPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKHRoaXMuY2xjID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH0pXG5cbiAgICBjb25zdCBjb21wb25lbnRSZXN1bHQgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIubG9hZFBhZ2Uocm91dGUpXG5cbiAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICBjb25zdCBlcnJvcjogYW55ID0gbmV3IEVycm9yKFxuICAgICAgICBgQWJvcnQgZmV0Y2hpbmcgY29tcG9uZW50IGZvciByb3V0ZTogXCIke3JvdXRlfVwiYFxuICAgICAgKVxuICAgICAgZXJyb3IuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgdGhyb3cgZXJyb3JcbiAgICB9XG5cbiAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBvbmVudFJlc3VsdFxuICB9XG5cbiAgX2dldERhdGE8VD4oZm46ICgpID0+IFByb21pc2U8VD4pOiBQcm9taXNlPFQ+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfVxuICAgIHRoaXMuY2xjID0gY2FuY2VsXG4gICAgcmV0dXJuIGZuKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgICB9XG5cbiAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgY29uc3QgZXJyOiBhbnkgPSBuZXcgRXJyb3IoJ0xvYWRpbmcgaW5pdGlhbCBwcm9wcyBjYW5jZWxsZWQnKVxuICAgICAgICBlcnIuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICB9XG5cbiAgX2dldFN0YXRpY0RhdGEoZGF0YUhyZWY6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiB7XG4gICAgY29uc3QgeyBocmVmOiBjYWNoZUtleSB9ID0gbmV3IFVSTChkYXRhSHJlZiwgd2luZG93LmxvY2F0aW9uLmhyZWYpXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgJiYgdGhpcy5zZGNbY2FjaGVLZXldKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuc2RjW2NhY2hlS2V5XSlcbiAgICB9XG4gICAgcmV0dXJuIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIHRoaXMuc2RjW2NhY2hlS2V5XSA9IGRhdGFcbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSlcbiAgfVxuXG4gIF9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4ge1xuICAgIHJldHVybiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKVxuICB9XG5cbiAgZ2V0SW5pdGlhbFByb3BzKFxuICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZSxcbiAgICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICApOiBQcm9taXNlPGFueT4ge1xuICAgIGNvbnN0IHsgQ29tcG9uZW50OiBBcHAgfSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXVxuICAgIGNvbnN0IEFwcFRyZWUgPSB0aGlzLl93cmFwQXBwKEFwcClcbiAgICBjdHguQXBwVHJlZSA9IEFwcFRyZWVcbiAgICByZXR1cm4gbG9hZEdldEluaXRpYWxQcm9wczxBcHBDb250ZXh0VHlwZTxSb3V0ZXI+PihBcHAsIHtcbiAgICAgIEFwcFRyZWUsXG4gICAgICBDb21wb25lbnQsXG4gICAgICByb3V0ZXI6IHRoaXMsXG4gICAgICBjdHgsXG4gICAgfSlcbiAgfVxuXG4gIGFib3J0Q29tcG9uZW50TG9hZChhczogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY2xjKSB7XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBidWlsZENhbmNlbGxhdGlvbkVycm9yKCksIGFzKVxuICAgICAgdGhpcy5jbGMoKVxuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuICB9XG5cbiAgbm90aWZ5KGRhdGE6IFJvdXRlSW5mbyk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLnN1YihkYXRhLCB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50KVxuICB9XG59XG4iLCIvLyBGb3JtYXQgZnVuY3Rpb24gbW9kaWZpZWQgZnJvbSBub2RlanNcbi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgeyBlbmNvZGUgYXMgZW5jb2RlUXVlcnlzdHJpbmcgfSBmcm9tICdxdWVyeXN0cmluZydcblxuY29uc3Qgc2xhc2hlZFByb3RvY29scyA9IC9odHRwcz98ZnRwfGdvcGhlcnxmaWxlL1xuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0VXJsKHVybE9iajogVXJsT2JqZWN0KSB7XG4gIGxldCB7IGF1dGgsIGhvc3RuYW1lIH0gPSB1cmxPYmpcbiAgbGV0IHByb3RvY29sID0gdXJsT2JqLnByb3RvY29sIHx8ICcnXG4gIGxldCBwYXRobmFtZSA9IHVybE9iai5wYXRobmFtZSB8fCAnJ1xuICBsZXQgaGFzaCA9IHVybE9iai5oYXNoIHx8ICcnXG4gIGxldCBxdWVyeSA9IHVybE9iai5xdWVyeSB8fCAnJ1xuICBsZXQgaG9zdDogc3RyaW5nIHwgZmFsc2UgPSBmYWxzZVxuXG4gIGF1dGggPSBhdXRoID8gZW5jb2RlVVJJQ29tcG9uZW50KGF1dGgpLnJlcGxhY2UoLyUzQS9pLCAnOicpICsgJ0AnIDogJydcblxuICBpZiAodXJsT2JqLmhvc3QpIHtcbiAgICBob3N0ID0gYXV0aCArIHVybE9iai5ob3N0XG4gIH0gZWxzZSBpZiAoaG9zdG5hbWUpIHtcbiAgICBob3N0ID0gYXV0aCArICh+aG9zdG5hbWUuaW5kZXhPZignOicpID8gYFske2hvc3RuYW1lfV1gIDogaG9zdG5hbWUpXG4gICAgaWYgKHVybE9iai5wb3J0KSB7XG4gICAgICBob3N0ICs9ICc6JyArIHVybE9iai5wb3J0XG4gICAgfVxuICB9XG5cbiAgaWYgKHF1ZXJ5ICYmIHR5cGVvZiBxdWVyeSA9PT0gJ29iamVjdCcpIHtcbiAgICAvLyBxdWVyeSA9ICcnICsgbmV3IFVSTFNlYXJjaFBhcmFtcyhxdWVyeSk7XG4gICAgcXVlcnkgPSBlbmNvZGVRdWVyeXN0cmluZyhxdWVyeSlcbiAgfVxuXG4gIGxldCBzZWFyY2ggPSB1cmxPYmouc2VhcmNoIHx8IChxdWVyeSAmJiBgPyR7cXVlcnl9YCkgfHwgJydcblxuICBpZiAocHJvdG9jb2wgJiYgcHJvdG9jb2wuc3Vic3RyKC0xKSAhPT0gJzonKSBwcm90b2NvbCArPSAnOidcblxuICBpZiAoXG4gICAgdXJsT2JqLnNsYXNoZXMgfHxcbiAgICAoKCFwcm90b2NvbCB8fCBzbGFzaGVkUHJvdG9jb2xzLnRlc3QocHJvdG9jb2wpKSAmJiBob3N0ICE9PSBmYWxzZSlcbiAgKSB7XG4gICAgaG9zdCA9ICcvLycgKyAoaG9zdCB8fCAnJylcbiAgICBpZiAocGF0aG5hbWUgJiYgcGF0aG5hbWVbMF0gIT09ICcvJykgcGF0aG5hbWUgPSAnLycgKyBwYXRobmFtZVxuICB9IGVsc2UgaWYgKCFob3N0KSB7XG4gICAgaG9zdCA9ICcnXG4gIH1cblxuICBpZiAoaGFzaCAmJiBoYXNoWzBdICE9PSAnIycpIGhhc2ggPSAnIycgKyBoYXNoXG4gIGlmIChzZWFyY2ggJiYgc2VhcmNoWzBdICE9PSAnPycpIHNlYXJjaCA9ICc/JyArIHNlYXJjaFxuXG4gIHBhdGhuYW1lID0gcGF0aG5hbWUucmVwbGFjZSgvWz8jXS9nLCBlbmNvZGVVUklDb21wb25lbnQpXG4gIHNlYXJjaCA9IHNlYXJjaC5yZXBsYWNlKCcjJywgJyUyMycpXG5cbiAgcmV0dXJuIGAke3Byb3RvY29sfSR7aG9zdH0ke3BhdGhuYW1lfSR7c2VhcmNofSR7aGFzaH1gXG59XG4iLCIvLyBJZGVudGlmeSAvW3BhcmFtXS8gaW4gcm91dGUgc3RyaW5nXG5jb25zdCBURVNUX1JPVVRFID0gL1xcL1xcW1teL10rP1xcXSg/PVxcL3wkKS9cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRHluYW1pY1JvdXRlKHJvdXRlOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIFRFU1RfUk9VVEUudGVzdChyb3V0ZSlcbn1cbiIsImNvbnN0IERVTU1ZX0JBU0UgPSBuZXcgVVJMKCdodHRwOi8vbicpXG5cbi8qKlxuICogUGFyc2VzIHBhdGgtcmVsYXRpdmUgdXJscyAoZS5nLiBgL2hlbGxvL3dvcmxkP2Zvbz1iYXJgKS4gSWYgdXJsIGlzbid0IHBhdGgtcmVsYXRpdmVcbiAqIChlLmcuIGAuL2hlbGxvYCkgdGhlbiBhdCBsZWFzdCBiYXNlIG11c3QgYmUuXG4gKiBBYnNvbHV0ZSB1cmxzIGFyZSByZWplY3RlZC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlUmVsYXRpdmVVcmwodXJsOiBzdHJpbmcsIGJhc2U/OiBzdHJpbmcpIHtcbiAgY29uc3QgcmVzb2x2ZWRCYXNlID0gYmFzZSA/IG5ldyBVUkwoYmFzZSwgRFVNTVlfQkFTRSkgOiBEVU1NWV9CQVNFXG4gIGNvbnN0IHsgcGF0aG5hbWUsIHNlYXJjaFBhcmFtcywgc2VhcmNoLCBoYXNoLCBocmVmLCBvcmlnaW4gfSA9IG5ldyBVUkwoXG4gICAgdXJsLFxuICAgIHJlc29sdmVkQmFzZVxuICApXG4gIGlmIChvcmlnaW4gIT09IERVTU1ZX0JBU0Uub3JpZ2luKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdpbnZhcmlhbnQ6IGludmFsaWQgcmVsYXRpdmUgVVJMJylcbiAgfVxuICByZXR1cm4ge1xuICAgIHBhdGhuYW1lLFxuICAgIHNlYXJjaFBhcmFtcyxcbiAgICBzZWFyY2gsXG4gICAgaGFzaCxcbiAgICBocmVmOiBocmVmLnNsaWNlKERVTU1ZX0JBU0Uub3JpZ2luLmxlbmd0aCksXG4gIH1cbn1cbiIsImltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3JvdXRlLXJlZ2V4J1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXg6IFJldHVyblR5cGU8dHlwZW9mIGdldFJvdXRlUmVnZXg+KSB7XG4gIGNvbnN0IHsgcmUsIGdyb3VwcyB9ID0gcm91dGVSZWdleFxuICByZXR1cm4gKHBhdGhuYW1lOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkKSA9PiB7XG4gICAgY29uc3Qgcm91dGVNYXRjaCA9IHJlLmV4ZWMocGF0aG5hbWUhKVxuICAgIGlmICghcm91dGVNYXRjaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgY29uc3QgZGVjb2RlID0gKHBhcmFtOiBzdHJpbmcpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQocGFyYW0pXG4gICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgIGNvbnN0IGVycjogRXJyb3IgJiB7IGNvZGU/OiBzdHJpbmcgfSA9IG5ldyBFcnJvcihcbiAgICAgICAgICAnZmFpbGVkIHRvIGRlY29kZSBwYXJhbSdcbiAgICAgICAgKVxuICAgICAgICBlcnIuY29kZSA9ICdERUNPREVfRkFJTEVEJ1xuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgcGFyYW1zOiB7IFtwYXJhbU5hbWU6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH0gPSB7fVxuXG4gICAgT2JqZWN0LmtleXMoZ3JvdXBzKS5mb3JFYWNoKChzbHVnTmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICBjb25zdCBnID0gZ3JvdXBzW3NsdWdOYW1lXVxuICAgICAgY29uc3QgbSA9IHJvdXRlTWF0Y2hbZy5wb3NdXG4gICAgICBpZiAobSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHBhcmFtc1tzbHVnTmFtZV0gPSB+bS5pbmRleE9mKCcvJylcbiAgICAgICAgICA/IG0uc3BsaXQoJy8nKS5tYXAoKGVudHJ5KSA9PiBkZWNvZGUoZW50cnkpKVxuICAgICAgICAgIDogZy5yZXBlYXRcbiAgICAgICAgICA/IFtkZWNvZGUobSldXG4gICAgICAgICAgOiBkZWNvZGUobSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBwYXJhbXNcbiAgfVxufVxuIiwiaW50ZXJmYWNlIEdyb3VwIHtcbiAgcG9zOiBudW1iZXJcbiAgcmVwZWF0OiBib29sZWFuXG4gIG9wdGlvbmFsOiBib29sZWFuXG59XG5cbi8vIHRoaXMgaXNuJ3QgaW1wb3J0aW5nIHRoZSBlc2NhcGUtc3RyaW5nLXJlZ2V4IG1vZHVsZVxuLy8gdG8gcmVkdWNlIGJ5dGVzXG5mdW5jdGlvbiBlc2NhcGVSZWdleChzdHI6IHN0cmluZykge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL1t8XFxcXHt9KClbXFxdXiQrKj8uLV0vZywgJ1xcXFwkJicpXG59XG5cbmZ1bmN0aW9uIHBhcnNlUGFyYW1ldGVyKHBhcmFtOiBzdHJpbmcpIHtcbiAgY29uc3Qgb3B0aW9uYWwgPSBwYXJhbS5zdGFydHNXaXRoKCdbJykgJiYgcGFyYW0uZW5kc1dpdGgoJ10nKVxuICBpZiAob3B0aW9uYWwpIHtcbiAgICBwYXJhbSA9IHBhcmFtLnNsaWNlKDEsIC0xKVxuICB9XG4gIGNvbnN0IHJlcGVhdCA9IHBhcmFtLnN0YXJ0c1dpdGgoJy4uLicpXG4gIGlmIChyZXBlYXQpIHtcbiAgICBwYXJhbSA9IHBhcmFtLnNsaWNlKDMpXG4gIH1cbiAgcmV0dXJuIHsga2V5OiBwYXJhbSwgcmVwZWF0LCBvcHRpb25hbCB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZVJlZ2V4KFxuICBub3JtYWxpemVkUm91dGU6IHN0cmluZ1xuKToge1xuICByZTogUmVnRXhwXG4gIG5hbWVkUmVnZXg/OiBzdHJpbmdcbiAgcm91dGVLZXlzPzogeyBbbmFtZWQ6IHN0cmluZ106IHN0cmluZyB9XG4gIGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiBHcm91cCB9XG59IHtcbiAgY29uc3Qgc2VnbWVudHMgPSAobm9ybWFsaXplZFJvdXRlLnJlcGxhY2UoL1xcLyQvLCAnJykgfHwgJy8nKVxuICAgIC5zbGljZSgxKVxuICAgIC5zcGxpdCgnLycpXG5cbiAgY29uc3QgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IEdyb3VwIH0gPSB7fVxuICBsZXQgZ3JvdXBJbmRleCA9IDFcbiAgY29uc3QgcGFyYW1ldGVyaXplZFJvdXRlID0gc2VnbWVudHNcbiAgICAubWFwKChzZWdtZW50KSA9PiB7XG4gICAgICBpZiAoc2VnbWVudC5zdGFydHNXaXRoKCdbJykgJiYgc2VnbWVudC5lbmRzV2l0aCgnXScpKSB7XG4gICAgICAgIGNvbnN0IHsga2V5LCBvcHRpb25hbCwgcmVwZWF0IH0gPSBwYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsIC0xKSlcbiAgICAgICAgZ3JvdXBzW2tleV0gPSB7IHBvczogZ3JvdXBJbmRleCsrLCByZXBlYXQsIG9wdGlvbmFsIH1cbiAgICAgICAgcmV0dXJuIHJlcGVhdCA/IChvcHRpb25hbCA/ICcoPzovKC4rPykpPycgOiAnLyguKz8pJykgOiAnLyhbXi9dKz8pJ1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gXG4gICAgICB9XG4gICAgfSlcbiAgICAuam9pbignJylcblxuICAvLyBkZWFkIGNvZGUgZWxpbWluYXRlIGZvciBicm93c2VyIHNpbmNlIGl0J3Mgb25seSBuZWVkZWRcbiAgLy8gd2hpbGUgZ2VuZXJhdGluZyByb3V0ZXMtbWFuaWZlc3RcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgbGV0IHJvdXRlS2V5Q2hhckNvZGUgPSA5N1xuICAgIGxldCByb3V0ZUtleUNoYXJMZW5ndGggPSAxXG5cbiAgICAvLyBidWlsZHMgYSBtaW5pbWFsIHJvdXRlS2V5IHVzaW5nIG9ubHkgYS16IGFuZCBtaW5pbWFsIG51bWJlciBvZiBjaGFyYWN0ZXJzXG4gICAgY29uc3QgZ2V0U2FmZVJvdXRlS2V5ID0gKCkgPT4ge1xuICAgICAgbGV0IHJvdXRlS2V5ID0gJydcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3V0ZUtleUNoYXJMZW5ndGg7IGkrKykge1xuICAgICAgICByb3V0ZUtleSArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHJvdXRlS2V5Q2hhckNvZGUpXG4gICAgICAgIHJvdXRlS2V5Q2hhckNvZGUrK1xuXG4gICAgICAgIGlmIChyb3V0ZUtleUNoYXJDb2RlID4gMTIyKSB7XG4gICAgICAgICAgcm91dGVLZXlDaGFyTGVuZ3RoKytcbiAgICAgICAgICByb3V0ZUtleUNoYXJDb2RlID0gOTdcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJvdXRlS2V5XG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGVLZXlzOiB7IFtuYW1lZDogc3RyaW5nXTogc3RyaW5nIH0gPSB7fVxuXG4gICAgbGV0IG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlID0gc2VnbWVudHNcbiAgICAgIC5tYXAoKHNlZ21lbnQpID0+IHtcbiAgICAgICAgaWYgKHNlZ21lbnQuc3RhcnRzV2l0aCgnWycpICYmIHNlZ21lbnQuZW5kc1dpdGgoJ10nKSkge1xuICAgICAgICAgIGNvbnN0IHsga2V5LCBvcHRpb25hbCwgcmVwZWF0IH0gPSBwYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsIC0xKSlcbiAgICAgICAgICAvLyByZXBsYWNlIGFueSBub24td29yZCBjaGFyYWN0ZXJzIHNpbmNlIHRoZXkgY2FuIGJyZWFrXG4gICAgICAgICAgLy8gdGhlIG5hbWVkIHJlZ2V4XG4gICAgICAgICAgbGV0IGNsZWFuZWRLZXkgPSBrZXkucmVwbGFjZSgvXFxXL2csICcnKVxuICAgICAgICAgIGxldCBpbnZhbGlkS2V5ID0gZmFsc2VcblxuICAgICAgICAgIC8vIGNoZWNrIGlmIHRoZSBrZXkgaXMgc3RpbGwgaW52YWxpZCBhbmQgZmFsbGJhY2sgdG8gdXNpbmcgYSBrbm93blxuICAgICAgICAgIC8vIHNhZmUga2V5XG4gICAgICAgICAgaWYgKGNsZWFuZWRLZXkubGVuZ3RoID09PSAwIHx8IGNsZWFuZWRLZXkubGVuZ3RoID4gMzApIHtcbiAgICAgICAgICAgIGludmFsaWRLZXkgPSB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghaXNOYU4ocGFyc2VJbnQoY2xlYW5lZEtleS5zdWJzdHIoMCwgMSkpKSkge1xuICAgICAgICAgICAgaW52YWxpZEtleSA9IHRydWVcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoaW52YWxpZEtleSkge1xuICAgICAgICAgICAgY2xlYW5lZEtleSA9IGdldFNhZmVSb3V0ZUtleSgpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcm91dGVLZXlzW2NsZWFuZWRLZXldID0ga2V5XG4gICAgICAgICAgcmV0dXJuIHJlcGVhdFxuICAgICAgICAgICAgPyBvcHRpb25hbFxuICAgICAgICAgICAgICA/IGAoPzovKD88JHtjbGVhbmVkS2V5fT4uKz8pKT9gXG4gICAgICAgICAgICAgIDogYC8oPzwke2NsZWFuZWRLZXl9Pi4rPylgXG4gICAgICAgICAgICA6IGAvKD88JHtjbGVhbmVkS2V5fT5bXi9dKz8pYFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBgLyR7ZXNjYXBlUmVnZXgoc2VnbWVudCl9YFxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmpvaW4oJycpXG5cbiAgICByZXR1cm4ge1xuICAgICAgcmU6IG5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksXG4gICAgICBncm91cHMsXG4gICAgICByb3V0ZUtleXMsXG4gICAgICBuYW1lZFJlZ2V4OiBgXiR7bmFtZWRQYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGAsXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICByZTogbmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxcbiAgICBncm91cHMsXG4gIH1cbn1cbiIsImltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5cbmV4cG9ydCBmdW5jdGlvbiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KFxuICBzZWFyY2hQYXJhbXM6IFVSTFNlYXJjaFBhcmFtc1xuKTogUGFyc2VkVXJsUXVlcnkge1xuICBjb25zdCBxdWVyeTogUGFyc2VkVXJsUXVlcnkgPSB7fVxuICBzZWFyY2hQYXJhbXMuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4ge1xuICAgIGlmICh0eXBlb2YgcXVlcnlba2V5XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHF1ZXJ5W2tleV0gPSB2YWx1ZVxuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShxdWVyeVtrZXldKSkge1xuICAgICAgOyhxdWVyeVtrZXldIGFzIHN0cmluZ1tdKS5wdXNoKHZhbHVlKVxuICAgIH0gZWxzZSB7XG4gICAgICBxdWVyeVtrZXldID0gW3F1ZXJ5W2tleV0gYXMgc3RyaW5nLCB2YWx1ZV1cbiAgICB9XG4gIH0pXG4gIHJldHVybiBxdWVyeVxufVxuIiwiaW1wb3J0IHsgSW5jb21pbmdNZXNzYWdlLCBTZXJ2ZXJSZXNwb25zZSB9IGZyb20gJ2h0dHAnXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgZm9ybWF0VXJsIH0gZnJvbSAnLi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybCdcbmltcG9ydCB7IE1hbmlmZXN0SXRlbSB9IGZyb20gJy4uL3NlcnZlci9sb2FkLWNvbXBvbmVudHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgRW52IH0gZnJvbSAnLi4vLi4vbGliL2xvYWQtZW52LWNvbmZpZydcbmltcG9ydCB7IEJ1aWxkTWFuaWZlc3QgfSBmcm9tICcuLi9zZXJ2ZXIvZ2V0LXBhZ2UtZmlsZXMnXG5cbi8qKlxuICogVHlwZXMgdXNlZCBieSBib3RoIG5leHQgYW5kIG5leHQtc2VydmVyXG4gKi9cblxuZXhwb3J0IHR5cGUgTmV4dENvbXBvbmVudFR5cGU8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCA9IE5leHRQYWdlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+ID0gQ29tcG9uZW50VHlwZTxQPiAmIHtcbiAgLyoqXG4gICAqIFVzZWQgZm9yIGluaXRpYWwgcGFnZSBsb2FkIGRhdGEgcG9wdWxhdGlvbi4gRGF0YSByZXR1cm5lZCBmcm9tIGBnZXRJbml0aWFsUHJvcHNgIGlzIHNlcmlhbGl6ZWQgd2hlbiBzZXJ2ZXIgcmVuZGVyZWQuXG4gICAqIE1ha2Ugc3VyZSB0byByZXR1cm4gcGxhaW4gYE9iamVjdGAgd2l0aG91dCB1c2luZyBgRGF0ZWAsIGBNYXBgLCBgU2V0YC5cbiAgICogQHBhcmFtIGN0eCBDb250ZXh0IG9mIGBwYWdlYFxuICAgKi9cbiAgZ2V0SW5pdGlhbFByb3BzPyhjb250ZXh0OiBDKTogSVAgfCBQcm9taXNlPElQPlxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgRG9jdW1lbnRDb250ZXh0LFxuICBEb2N1bWVudEluaXRpYWxQcm9wcyxcbiAgRG9jdW1lbnRQcm9wc1xuPiAmIHtcbiAgcmVuZGVyRG9jdW1lbnQoXG4gICAgRG9jdW1lbnQ6IERvY3VtZW50VHlwZSxcbiAgICBwcm9wczogRG9jdW1lbnRQcm9wc1xuICApOiBSZWFjdC5SZWFjdEVsZW1lbnRcbn1cblxuZXhwb3J0IHR5cGUgQXBwVHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBBcHBDb250ZXh0VHlwZSxcbiAgQXBwSW5pdGlhbFByb3BzLFxuICBBcHBQcm9wc1R5cGVcbj5cblxuZXhwb3J0IHR5cGUgQXBwVHJlZVR5cGUgPSBDb21wb25lbnRUeXBlPFxuICBBcHBJbml0aWFsUHJvcHMgJiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfVxuPlxuXG4vKipcbiAqIFdlYiB2aXRhbHMgcHJvdmlkZWQgdG8gX2FwcC5yZXBvcnRXZWJWaXRhbHMgYnkgQ29yZSBXZWIgVml0YWxzIHBsdWdpbiBkZXZlbG9wZWQgYnkgR29vZ2xlIENocm9tZSB0ZWFtLlxuICogaHR0cHM6Ly9uZXh0anMub3JnL2Jsb2cvbmV4dC05LTQjaW50ZWdyYXRlZC13ZWItdml0YWxzLXJlcG9ydGluZ1xuICovXG5leHBvcnQgdHlwZSBOZXh0V2ViVml0YWxzTWV0cmljID0ge1xuICBpZDogc3RyaW5nXG4gIGxhYmVsOiBzdHJpbmdcbiAgbmFtZTogc3RyaW5nXG4gIHN0YXJ0VGltZTogbnVtYmVyXG4gIHZhbHVlOiBudW1iZXJcbn1cblxuZXhwb3J0IHR5cGUgRW5oYW5jZXI8Qz4gPSAoQ29tcG9uZW50OiBDKSA9PiBDXG5cbmV4cG9ydCB0eXBlIENvbXBvbmVudHNFbmhhbmNlciA9XG4gIHwge1xuICAgICAgZW5oYW5jZUFwcD86IEVuaGFuY2VyPEFwcFR5cGU+XG4gICAgICBlbmhhbmNlQ29tcG9uZW50PzogRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG4gICAgfVxuICB8IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlUmVzdWx0ID0ge1xuICBodG1sOiBzdHJpbmdcbiAgaGVhZD86IEFycmF5PEpTWC5FbGVtZW50IHwgbnVsbD5cbn1cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZSA9IChcbiAgb3B0aW9ucz86IENvbXBvbmVudHNFbmhhbmNlclxuKSA9PiBSZW5kZXJQYWdlUmVzdWx0IHwgUHJvbWlzZTxSZW5kZXJQYWdlUmVzdWx0PlxuXG5leHBvcnQgdHlwZSBCYXNlQ29udGV4dCA9IHtcbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgW2s6IHN0cmluZ106IGFueVxufVxuXG5leHBvcnQgdHlwZSBORVhUX0RBVEEgPSB7XG4gIHByb3BzOiBhbnlcbiAgcGFnZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBidWlsZElkOiBzdHJpbmdcbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgcnVudGltZUNvbmZpZz86IHsgW2tleTogc3RyaW5nXTogYW55IH1cbiAgbmV4dEV4cG9ydD86IGJvb2xlYW5cbiAgYXV0b0V4cG9ydD86IGJvb2xlYW5cbiAgaXNGYWxsYmFjaz86IGJvb2xlYW5cbiAgZHluYW1pY0lkcz86IHN0cmluZ1tdXG4gIGVycj86IEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH1cbiAgZ3NwPzogYm9vbGVhblxuICBnc3NwPzogYm9vbGVhblxuICBjdXN0b21TZXJ2ZXI/OiBib29sZWFuXG4gIGdpcD86IGJvb2xlYW5cbiAgYXBwR2lwPzogYm9vbGVhblxufVxuXG4vKipcbiAqIGBOZXh0YCBjb250ZXh0XG4gKi9cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSBpbnRlcmZhY2UtbmFtZVxuZXhwb3J0IGludGVyZmFjZSBOZXh0UGFnZUNvbnRleHQge1xuICAvKipcbiAgICogRXJyb3Igb2JqZWN0IGlmIGVuY291bnRlcmVkIGR1cmluZyByZW5kZXJpbmdcbiAgICovXG4gIGVycj86IChFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9KSB8IG51bGxcbiAgLyoqXG4gICAqIGBIVFRQYCByZXF1ZXN0IG9iamVjdC5cbiAgICovXG4gIHJlcT86IEluY29taW5nTWVzc2FnZVxuICAvKipcbiAgICogYEhUVFBgIHJlc3BvbnNlIG9iamVjdC5cbiAgICovXG4gIHJlcz86IFNlcnZlclJlc3BvbnNlXG4gIC8qKlxuICAgKiBQYXRoIHNlY3Rpb24gb2YgYFVSTGAuXG4gICAqL1xuICBwYXRobmFtZTogc3RyaW5nXG4gIC8qKlxuICAgKiBRdWVyeSBzdHJpbmcgc2VjdGlvbiBvZiBgVVJMYCBwYXJzZWQgYXMgYW4gb2JqZWN0LlxuICAgKi9cbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIC8qKlxuICAgKiBgU3RyaW5nYCBvZiB0aGUgYWN0dWFsIHBhdGggaW5jbHVkaW5nIHF1ZXJ5LlxuICAgKi9cbiAgYXNQYXRoPzogc3RyaW5nXG4gIC8qKlxuICAgKiBgQ29tcG9uZW50YCB0aGUgdHJlZSBvZiB0aGUgQXBwIHRvIHVzZSBpZiBuZWVkaW5nIHRvIHJlbmRlciBzZXBhcmF0ZWx5XG4gICAqL1xuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxufVxuXG5leHBvcnQgdHlwZSBBcHBDb250ZXh0VHlwZTxSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXI+ID0ge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dD5cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbiAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgcm91dGVyOiBSXG59XG5cbmV4cG9ydCB0eXBlIEFwcEluaXRpYWxQcm9wcyA9IHtcbiAgcGFnZVByb3BzOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHNUeXBlPFxuICBSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXIsXG4gIFAgPSB7fVxuPiA9IEFwcEluaXRpYWxQcm9wcyAmIHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQsIGFueSwgUD5cbiAgcm91dGVyOiBSXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50Q29udGV4dCA9IE5leHRQYWdlQ29udGV4dCAmIHtcbiAgcmVuZGVyUGFnZTogUmVuZGVyUGFnZVxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudEluaXRpYWxQcm9wcyA9IFJlbmRlclBhZ2VSZXN1bHQgJiB7XG4gIHN0eWxlcz86IFJlYWN0LlJlYWN0RWxlbWVudFtdIHwgUmVhY3QuUmVhY3RGcmFnbWVudFxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFByb3BzID0gRG9jdW1lbnRJbml0aWFsUHJvcHMgJiB7XG4gIF9fTkVYVF9EQVRBX186IE5FWFRfREFUQVxuICBkYW5nZXJvdXNBc1BhdGg6IHN0cmluZ1xuICBidWlsZE1hbmlmZXN0OiBCdWlsZE1hbmlmZXN0XG4gIGFtcFBhdGg6IHN0cmluZ1xuICBpbkFtcE1vZGU6IGJvb2xlYW5cbiAgaHlicmlkQW1wOiBib29sZWFuXG4gIGlzRGV2ZWxvcG1lbnQ6IGJvb2xlYW5cbiAgZmlsZXM6IHN0cmluZ1tdXG4gIGR5bmFtaWNJbXBvcnRzOiBNYW5pZmVzdEl0ZW1bXVxuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBjYW5vbmljYWxCYXNlOiBzdHJpbmdcbiAgaGVhZFRhZ3M6IGFueVtdXG4gIHVuc3RhYmxlX3J1bnRpbWVKUz86IGZhbHNlXG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXF1ZXN0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmV4dEFwaVJlcXVlc3QgZXh0ZW5kcyBJbmNvbWluZ01lc3NhZ2Uge1xuICAvKipcbiAgICogT2JqZWN0IG9mIGBxdWVyeWAgdmFsdWVzIGZyb20gdXJsXG4gICAqL1xuICBxdWVyeToge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdXG4gIH1cbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgY29va2llc2AgZnJvbSBoZWFkZXJcbiAgICovXG4gIGNvb2tpZXM6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmdcbiAgfVxuXG4gIGJvZHk6IGFueVxuXG4gIGVudjogRW52XG5cbiAgcHJldmlldz86IGJvb2xlYW5cbiAgLyoqXG4gICAqIFByZXZpZXcgZGF0YSBzZXQgb24gdGhlIHJlcXVlc3QsIGlmIGFueVxuICAgKiAqL1xuICBwcmV2aWV3RGF0YT86IGFueVxufVxuXG4vKipcbiAqIFNlbmQgYm9keSBvZiByZXNwb25zZVxuICovXG50eXBlIFNlbmQ8VD4gPSAoYm9keTogVCkgPT4gdm9pZFxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVzcG9uc2VcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaVJlc3BvbnNlPFQgPSBhbnk+ID0gU2VydmVyUmVzcG9uc2UgJiB7XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGFueWAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAgc2VuZDogU2VuZDxUPlxuICAvKipcbiAgICogU2VuZCBkYXRhIGBqc29uYCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBqc29uOiBTZW5kPFQ+XG4gIHN0YXR1czogKHN0YXR1c0NvZGU6IG51bWJlcikgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIHJlZGlyZWN0KHVybDogc3RyaW5nKTogTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIHJlZGlyZWN0KHN0YXR1czogbnVtYmVyLCB1cmw6IHN0cmluZyk6IE5leHRBcGlSZXNwb25zZTxUPlxuXG4gIC8qKlxuICAgKiBTZXQgcHJldmlldyBkYXRhIGZvciBOZXh0LmpzJyBwcmVyZW5kZXIgbW9kZVxuICAgKi9cbiAgc2V0UHJldmlld0RhdGE6IChcbiAgICBkYXRhOiBvYmplY3QgfCBzdHJpbmcsXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIC8qKlxuICAgICAgICogU3BlY2lmaWVzIHRoZSBudW1iZXIgKGluIHNlY29uZHMpIGZvciB0aGUgcHJldmlldyBzZXNzaW9uIHRvIGxhc3QgZm9yLlxuICAgICAgICogVGhlIGdpdmVuIG51bWJlciB3aWxsIGJlIGNvbnZlcnRlZCB0byBhbiBpbnRlZ2VyIGJ5IHJvdW5kaW5nIGRvd24uXG4gICAgICAgKiBCeSBkZWZhdWx0LCBubyBtYXhpbXVtIGFnZSBpcyBzZXQgYW5kIHRoZSBwcmV2aWV3IHNlc3Npb24gZmluaXNoZXNcbiAgICAgICAqIHdoZW4gdGhlIGNsaWVudCBzaHV0cyBkb3duIChicm93c2VyIGlzIGNsb3NlZCkuXG4gICAgICAgKi9cbiAgICAgIG1heEFnZT86IG51bWJlclxuICAgIH1cbiAgKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgY2xlYXJQcmV2aWV3RGF0YTogKCkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSBoYW5kbGVyXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlIYW5kbGVyPFQgPSBhbnk+ID0gKFxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxuICByZXM6IE5leHRBcGlSZXNwb25zZTxUPlxuKSA9PiB2b2lkIHwgUHJvbWlzZTx2b2lkPlxuXG4vKipcbiAqIFV0aWxzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBleGVjT25jZTxUIGV4dGVuZHMgKC4uLmFyZ3M6IGFueVtdKSA9PiBSZXR1cm5UeXBlPFQ+PihcbiAgZm46IFRcbik6IFQge1xuICBsZXQgdXNlZCA9IGZhbHNlXG4gIGxldCByZXN1bHQ6IFJldHVyblR5cGU8VD5cblxuICByZXR1cm4gKCguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGlmICghdXNlZCkge1xuICAgICAgdXNlZCA9IHRydWVcbiAgICAgIHJlc3VsdCA9IGZuKC4uLmFyZ3MpXG4gICAgfVxuICAgIHJldHVybiByZXN1bHRcbiAgfSkgYXMgVFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TG9jYXRpb25PcmlnaW4oKSB7XG4gIGNvbnN0IHsgcHJvdG9jb2wsIGhvc3RuYW1lLCBwb3J0IH0gPSB3aW5kb3cubG9jYXRpb25cbiAgcmV0dXJuIGAke3Byb3RvY29sfS8vJHtob3N0bmFtZX0ke3BvcnQgPyAnOicgKyBwb3J0IDogJyd9YFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VVJMKCkge1xuICBjb25zdCB7IGhyZWYgfSA9IHdpbmRvdy5sb2NhdGlvblxuICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gIHJldHVybiBocmVmLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGlzcGxheU5hbWU8UD4oQ29tcG9uZW50OiBDb21wb25lbnRUeXBlPFA+KSB7XG4gIHJldHVybiB0eXBlb2YgQ29tcG9uZW50ID09PSAnc3RyaW5nJ1xuICAgID8gQ29tcG9uZW50XG4gICAgOiBDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1Jlc1NlbnQocmVzOiBTZXJ2ZXJSZXNwb25zZSkge1xuICByZXR1cm4gcmVzLmZpbmlzaGVkIHx8IHJlcy5oZWFkZXJzU2VudFxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZEdldEluaXRpYWxQcm9wczxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4oQXBwOiBOZXh0Q29tcG9uZW50VHlwZTxDLCBJUCwgUD4sIGN0eDogQyk6IFByb21pc2U8SVA+IHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoQXBwLnByb3RvdHlwZT8uZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgQXBwXG4gICAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIGlzIGRlZmluZWQgYXMgYW4gaW5zdGFuY2UgbWV0aG9kIC0gdmlzaXQgaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvZ2V0LWluaXRpYWwtcHJvcHMtYXMtYW4taW5zdGFuY2UtbWV0aG9kIGZvciBtb3JlIGluZm9ybWF0aW9uLmBcbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICAgIH1cbiAgfVxuICAvLyB3aGVuIGNhbGxlZCBmcm9tIF9hcHAgYGN0eGAgaXMgbmVzdGVkIGluIGBjdHhgXG4gIGNvbnN0IHJlcyA9IGN0eC5yZXMgfHwgKGN0eC5jdHggJiYgY3R4LmN0eC5yZXMpXG5cbiAgaWYgKCFBcHAuZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgaWYgKGN0eC5jdHggJiYgY3R4LkNvbXBvbmVudCkge1xuICAgICAgLy8gQHRzLWlnbm9yZSBwYWdlUHJvcHMgZGVmYXVsdFxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcGFnZVByb3BzOiBhd2FpdCBsb2FkR2V0SW5pdGlhbFByb3BzKGN0eC5Db21wb25lbnQsIGN0eC5jdHgpLFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge30gYXMgSVBcbiAgfVxuXG4gIGNvbnN0IHByb3BzID0gYXdhaXQgQXBwLmdldEluaXRpYWxQcm9wcyhjdHgpXG5cbiAgaWYgKHJlcyAmJiBpc1Jlc1NlbnQocmVzKSkge1xuICAgIHJldHVybiBwcm9wc1xuICB9XG5cbiAgaWYgKCFwcm9wcykge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgQXBwXG4gICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBzaG91bGQgcmVzb2x2ZSB0byBhbiBvYmplY3QuIEJ1dCBmb3VuZCBcIiR7cHJvcHN9XCIgaW5zdGVhZC5gXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChPYmplY3Qua2V5cyhwcm9wcykubGVuZ3RoID09PSAwICYmICFjdHguY3R4KSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgIGAke2dldERpc3BsYXlOYW1lKFxuICAgICAgICAgIEFwcFxuICAgICAgICApfSByZXR1cm5lZCBhbiBlbXB0eSBvYmplY3QgZnJvbSBcXGBnZXRJbml0aWFsUHJvcHNcXGAuIFRoaXMgZGUtb3B0aW1pemVzIGFuZCBwcmV2ZW50cyBhdXRvbWF0aWMgc3RhdGljIG9wdGltaXphdGlvbi4gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvZW1wdHktb2JqZWN0LWdldEluaXRpYWxQcm9wc2BcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcHJvcHNcbn1cblxuZXhwb3J0IGNvbnN0IHVybE9iamVjdEtleXMgPSBbXG4gICdhdXRoJyxcbiAgJ2hhc2gnLFxuICAnaG9zdCcsXG4gICdob3N0bmFtZScsXG4gICdocmVmJyxcbiAgJ3BhdGgnLFxuICAncGF0aG5hbWUnLFxuICAncG9ydCcsXG4gICdwcm90b2NvbCcsXG4gICdxdWVyeScsXG4gICdzZWFyY2gnLFxuICAnc2xhc2hlcycsXG5dXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRXaXRoVmFsaWRhdGlvbih1cmw6IFVybE9iamVjdCk6IHN0cmluZyB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIGlmICh1cmwgIT09IG51bGwgJiYgdHlwZW9mIHVybCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIE9iamVjdC5rZXlzKHVybCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGlmICh1cmxPYmplY3RLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICBgVW5rbm93biBrZXkgcGFzc2VkIHZpYSB1cmxPYmplY3QgaW50byB1cmwuZm9ybWF0OiAke2tleX1gXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmb3JtYXRVcmwodXJsKVxufVxuXG5leHBvcnQgY29uc3QgU1AgPSB0eXBlb2YgcGVyZm9ybWFuY2UgIT09ICd1bmRlZmluZWQnXG5leHBvcnQgY29uc3QgU1QgPVxuICBTUCAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWFyayA9PT0gJ2Z1bmN0aW9uJyAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWVhc3VyZSA9PT0gJ2Z1bmN0aW9uJ1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2xpbmsnKVxuIiwiLyoqIEBsaWNlbnNlIFJlYWN0IHYxNi4xMy4xXG4gKiByZWFjdC1pcy5kZXZlbG9wbWVudC5qc1xuICpcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgKGZ1bmN0aW9uKCkge1xuJ3VzZSBzdHJpY3QnO1xuXG4vLyBUaGUgU3ltYm9sIHVzZWQgdG8gdGFnIHRoZSBSZWFjdEVsZW1lbnQtbGlrZSB0eXBlcy4gSWYgdGhlcmUgaXMgbm8gbmF0aXZlIFN5bWJvbFxuLy8gbm9yIHBvbHlmaWxsLCB0aGVuIGEgcGxhaW4gbnVtYmVyIGlzIHVzZWQgZm9yIHBlcmZvcm1hbmNlLlxudmFyIGhhc1N5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLmZvcjtcbnZhciBSRUFDVF9FTEVNRU5UX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5lbGVtZW50JykgOiAweGVhYzc7XG52YXIgUkVBQ1RfUE9SVEFMX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5wb3J0YWwnKSA6IDB4ZWFjYTtcbnZhciBSRUFDVF9GUkFHTUVOVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZnJhZ21lbnQnKSA6IDB4ZWFjYjtcbnZhciBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc3RyaWN0X21vZGUnKSA6IDB4ZWFjYztcbnZhciBSRUFDVF9QUk9GSUxFUl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucHJvZmlsZXInKSA6IDB4ZWFkMjtcbnZhciBSRUFDVF9QUk9WSURFUl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucHJvdmlkZXInKSA6IDB4ZWFjZDtcbnZhciBSRUFDVF9DT05URVhUX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5jb250ZXh0JykgOiAweGVhY2U7IC8vIFRPRE86IFdlIGRvbid0IHVzZSBBc3luY01vZGUgb3IgQ29uY3VycmVudE1vZGUgYW55bW9yZS4gVGhleSB3ZXJlIHRlbXBvcmFyeVxuLy8gKHVuc3RhYmxlKSBBUElzIHRoYXQgaGF2ZSBiZWVuIHJlbW92ZWQuIENhbiB3ZSByZW1vdmUgdGhlIHN5bWJvbHM/XG5cbnZhciBSRUFDVF9BU1lOQ19NT0RFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5hc3luY19tb2RlJykgOiAweGVhY2Y7XG52YXIgUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5jb25jdXJyZW50X21vZGUnKSA6IDB4ZWFjZjtcbnZhciBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZm9yd2FyZF9yZWYnKSA6IDB4ZWFkMDtcbnZhciBSRUFDVF9TVVNQRU5TRV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc3VzcGVuc2UnKSA6IDB4ZWFkMTtcbnZhciBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5zdXNwZW5zZV9saXN0JykgOiAweGVhZDg7XG52YXIgUkVBQ1RfTUVNT19UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QubWVtbycpIDogMHhlYWQzO1xudmFyIFJFQUNUX0xBWllfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmxhenknKSA6IDB4ZWFkNDtcbnZhciBSRUFDVF9CTE9DS19UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuYmxvY2snKSA6IDB4ZWFkOTtcbnZhciBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZnVuZGFtZW50YWwnKSA6IDB4ZWFkNTtcbnZhciBSRUFDVF9SRVNQT05ERVJfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnJlc3BvbmRlcicpIDogMHhlYWQ2O1xudmFyIFJFQUNUX1NDT1BFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5zY29wZScpIDogMHhlYWQ3O1xuXG5mdW5jdGlvbiBpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSkge1xuICByZXR1cm4gdHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nIHx8IC8vIE5vdGU6IGl0cyB0eXBlb2YgbWlnaHQgYmUgb3RoZXIgdGhhbiAnc3ltYm9sJyBvciAnbnVtYmVyJyBpZiBpdCdzIGEgcG9seWZpbGwuXG4gIHR5cGUgPT09IFJFQUNUX0ZSQUdNRU5UX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfUFJPRklMRVJfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFIHx8IHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiB0eXBlICE9PSBudWxsICYmICh0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9MQVpZX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1BST1ZJREVSX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9SRVNQT05ERVJfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9TQ09QRV9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0JMT0NLX1RZUEUpO1xufVxuXG5mdW5jdGlvbiB0eXBlT2Yob2JqZWN0KSB7XG4gIGlmICh0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJiBvYmplY3QgIT09IG51bGwpIHtcbiAgICB2YXIgJCR0eXBlb2YgPSBvYmplY3QuJCR0eXBlb2Y7XG5cbiAgICBzd2l0Y2ggKCQkdHlwZW9mKSB7XG4gICAgICBjYXNlIFJFQUNUX0VMRU1FTlRfVFlQRTpcbiAgICAgICAgdmFyIHR5cGUgPSBvYmplY3QudHlwZTtcblxuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICBjYXNlIFJFQUNUX0FTWU5DX01PREVfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfRlJBR01FTlRfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1BST0ZJTEVSX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfVFlQRTpcbiAgICAgICAgICAgIHJldHVybiB0eXBlO1xuXG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHZhciAkJHR5cGVvZlR5cGUgPSB0eXBlICYmIHR5cGUuJCR0eXBlb2Y7XG5cbiAgICAgICAgICAgIHN3aXRjaCAoJCR0eXBlb2ZUeXBlKSB7XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfQ09OVEVYVF9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfTEFaWV9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX01FTU9fVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9QUk9WSURFUl9UWVBFOlxuICAgICAgICAgICAgICAgIHJldHVybiAkJHR5cGVvZlR5cGU7XG5cbiAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gJCR0eXBlb2Y7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICBjYXNlIFJFQUNUX1BPUlRBTF9UWVBFOlxuICAgICAgICByZXR1cm4gJCR0eXBlb2Y7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn0gLy8gQXN5bmNNb2RlIGlzIGRlcHJlY2F0ZWQgYWxvbmcgd2l0aCBpc0FzeW5jTW9kZVxuXG52YXIgQXN5bmNNb2RlID0gUkVBQ1RfQVNZTkNfTU9ERV9UWVBFO1xudmFyIENvbmN1cnJlbnRNb2RlID0gUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEU7XG52YXIgQ29udGV4dENvbnN1bWVyID0gUkVBQ1RfQ09OVEVYVF9UWVBFO1xudmFyIENvbnRleHRQcm92aWRlciA9IFJFQUNUX1BST1ZJREVSX1RZUEU7XG52YXIgRWxlbWVudCA9IFJFQUNUX0VMRU1FTlRfVFlQRTtcbnZhciBGb3J3YXJkUmVmID0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTtcbnZhciBGcmFnbWVudCA9IFJFQUNUX0ZSQUdNRU5UX1RZUEU7XG52YXIgTGF6eSA9IFJFQUNUX0xBWllfVFlQRTtcbnZhciBNZW1vID0gUkVBQ1RfTUVNT19UWVBFO1xudmFyIFBvcnRhbCA9IFJFQUNUX1BPUlRBTF9UWVBFO1xudmFyIFByb2ZpbGVyID0gUkVBQ1RfUFJPRklMRVJfVFlQRTtcbnZhciBTdHJpY3RNb2RlID0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRTtcbnZhciBTdXNwZW5zZSA9IFJFQUNUX1NVU1BFTlNFX1RZUEU7XG52YXIgaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUgPSBmYWxzZTsgLy8gQXN5bmNNb2RlIHNob3VsZCBiZSBkZXByZWNhdGVkXG5cbmZ1bmN0aW9uIGlzQXN5bmNNb2RlKG9iamVjdCkge1xuICB7XG4gICAgaWYgKCFoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0FzeW5jTW9kZSkge1xuICAgICAgaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUgPSB0cnVlOyAvLyBVc2luZyBjb25zb2xlWyd3YXJuJ10gdG8gZXZhZGUgQmFiZWwgYW5kIEVTTGludFxuXG4gICAgICBjb25zb2xlWyd3YXJuJ10oJ1RoZSBSZWFjdElzLmlzQXN5bmNNb2RlKCkgYWxpYXMgaGFzIGJlZW4gZGVwcmVjYXRlZCwgJyArICdhbmQgd2lsbCBiZSByZW1vdmVkIGluIFJlYWN0IDE3Ky4gVXBkYXRlIHlvdXIgY29kZSB0byB1c2UgJyArICdSZWFjdElzLmlzQ29uY3VycmVudE1vZGUoKSBpbnN0ZWFkLiBJdCBoYXMgdGhlIGV4YWN0IHNhbWUgQVBJLicpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBpc0NvbmN1cnJlbnRNb2RlKG9iamVjdCkgfHwgdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0FTWU5DX01PREVfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzQ29uY3VycmVudE1vZGUob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEU7XG59XG5mdW5jdGlvbiBpc0NvbnRleHRDb25zdW1lcihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9DT05URVhUX1RZUEU7XG59XG5mdW5jdGlvbiBpc0NvbnRleHRQcm92aWRlcihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9QUk9WSURFUl9UWVBFO1xufVxuZnVuY3Rpb24gaXNFbGVtZW50KG9iamVjdCkge1xuICByZXR1cm4gdHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiYgb2JqZWN0ICE9PSBudWxsICYmIG9iamVjdC4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNGb3J3YXJkUmVmKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU7XG59XG5mdW5jdGlvbiBpc0ZyYWdtZW50KG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0ZSQUdNRU5UX1RZUEU7XG59XG5mdW5jdGlvbiBpc0xhenkob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfTEFaWV9UWVBFO1xufVxuZnVuY3Rpb24gaXNNZW1vKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX01FTU9fVFlQRTtcbn1cbmZ1bmN0aW9uIGlzUG9ydGFsKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1BPUlRBTF9UWVBFO1xufVxuZnVuY3Rpb24gaXNQcm9maWxlcihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9QUk9GSUxFUl9UWVBFO1xufVxuZnVuY3Rpb24gaXNTdHJpY3RNb2RlKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1NUUklDVF9NT0RFX1RZUEU7XG59XG5mdW5jdGlvbiBpc1N1c3BlbnNlKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1NVU1BFTlNFX1RZUEU7XG59XG5cbmV4cG9ydHMuQXN5bmNNb2RlID0gQXN5bmNNb2RlO1xuZXhwb3J0cy5Db25jdXJyZW50TW9kZSA9IENvbmN1cnJlbnRNb2RlO1xuZXhwb3J0cy5Db250ZXh0Q29uc3VtZXIgPSBDb250ZXh0Q29uc3VtZXI7XG5leHBvcnRzLkNvbnRleHRQcm92aWRlciA9IENvbnRleHRQcm92aWRlcjtcbmV4cG9ydHMuRWxlbWVudCA9IEVsZW1lbnQ7XG5leHBvcnRzLkZvcndhcmRSZWYgPSBGb3J3YXJkUmVmO1xuZXhwb3J0cy5GcmFnbWVudCA9IEZyYWdtZW50O1xuZXhwb3J0cy5MYXp5ID0gTGF6eTtcbmV4cG9ydHMuTWVtbyA9IE1lbW87XG5leHBvcnRzLlBvcnRhbCA9IFBvcnRhbDtcbmV4cG9ydHMuUHJvZmlsZXIgPSBQcm9maWxlcjtcbmV4cG9ydHMuU3RyaWN0TW9kZSA9IFN0cmljdE1vZGU7XG5leHBvcnRzLlN1c3BlbnNlID0gU3VzcGVuc2U7XG5leHBvcnRzLmlzQXN5bmNNb2RlID0gaXNBc3luY01vZGU7XG5leHBvcnRzLmlzQ29uY3VycmVudE1vZGUgPSBpc0NvbmN1cnJlbnRNb2RlO1xuZXhwb3J0cy5pc0NvbnRleHRDb25zdW1lciA9IGlzQ29udGV4dENvbnN1bWVyO1xuZXhwb3J0cy5pc0NvbnRleHRQcm92aWRlciA9IGlzQ29udGV4dFByb3ZpZGVyO1xuZXhwb3J0cy5pc0VsZW1lbnQgPSBpc0VsZW1lbnQ7XG5leHBvcnRzLmlzRm9yd2FyZFJlZiA9IGlzRm9yd2FyZFJlZjtcbmV4cG9ydHMuaXNGcmFnbWVudCA9IGlzRnJhZ21lbnQ7XG5leHBvcnRzLmlzTGF6eSA9IGlzTGF6eTtcbmV4cG9ydHMuaXNNZW1vID0gaXNNZW1vO1xuZXhwb3J0cy5pc1BvcnRhbCA9IGlzUG9ydGFsO1xuZXhwb3J0cy5pc1Byb2ZpbGVyID0gaXNQcm9maWxlcjtcbmV4cG9ydHMuaXNTdHJpY3RNb2RlID0gaXNTdHJpY3RNb2RlO1xuZXhwb3J0cy5pc1N1c3BlbnNlID0gaXNTdXNwZW5zZTtcbmV4cG9ydHMuaXNWYWxpZEVsZW1lbnRUeXBlID0gaXNWYWxpZEVsZW1lbnRUeXBlO1xuZXhwb3J0cy50eXBlT2YgPSB0eXBlT2Y7XG4gIH0pKCk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtaXMucHJvZHVjdGlvbi5taW4uanMnKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtaXMuZGV2ZWxvcG1lbnQuanMnKTtcbn1cbiIsImltcG9ydCBDb250ZXh0UHJvdmlkZXIgZnJvbSAnLi4vY29udGV4dC9Db250ZXh0UHJvdmlkZXInO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5jb25zdCBBcHAgPSAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcywgcm91dGVyIH0pID0+IHtcclxuXHJcbiBsZXQgdG9rZW4gPSBudWxsO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy9HZXQgYWxsIHVzZXJzIC0gZm9yIHRoZSBzZWFyY2hiYXIgdXNlciBzZWFyY2hcclxuICAgIGdldEFsbFVzZXJzKCk7XHJcbiAgICBcclxuICAgIC8vIENoZWNrIGZvciB0b2tlbiBpbiBsb2NhbCBzdG9yYWdlIG9uY2UgdGhlIGNvbXBvbmVudCBtb3VudHMgLSBpLmUuIGNvZGUgaXMgbm93IHJ1biBpbiB0aGUgYnJvd3NlciAoaW5zdGVhZCBvZiBvbiB0aGUgc2VydmVyKVxyXG4gICAgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKTtcclxuICAgIGlmICh0b2tlbikge1xyXG4gICAgICBzZXRBdXRoU3RhdGUoey4uLmF1dGhTdGF0ZSwgYXV0aGVudGljYXRlZDogdHJ1ZSwgdG9rZW46IHRva2VufSk7XHJcbiAgICAgIFxyXG4gICAgICAvLyBHZXQgdGhlIGxvZ2dlZCBpbiB1c2VyJ3MgZGF0YVxyXG4gICAgICBnZXRVc2VyRGF0YUJ5VG9rZW4odG9rZW4pXHJcblxyXG4gICAgfVxyXG4gIH0sIFtdKVxyXG5cclxuICBjb25zdCBlbXB0eVVzZXIgPSB7XHJcbiAgICBpZDogJycsXHJcbiAgICBmaXJzdE5hbWU6ICcnLFxyXG4gICAgbGFzdE5hbWU6ICcnLFxyXG4gICAgam9iVGl0bGU6ICcnLFxyXG4gICAgbG9jYXRpb246ICcnLFxyXG4gICAgbGFuZ3VhZ2VzOiBbXSxcclxuICAgIGFib3V0OiAnJyxcclxuICAgIG93bmVkVmlkZW9zOiBbXSxcclxuICAgIHVzZXJDb21tZW50czogW10sXHJcbiAgICBwbGF5bGlzdENvbW1lbnRzOiBbXSxcclxuICAgIGZhdm91cml0ZXM6IFtdLFxyXG4gICAgcHJvZmlsZVBob3RvRmlsZW5hbWU6ICcnXHJcbiAgfVxyXG5cclxuXHJcbiAgLy8gU3RhdGVcclxuICBjb25zdCBbYXV0aFN0YXRlLCBzZXRBdXRoU3RhdGVdID0gdXNlU3RhdGUoe1xyXG4gICAgYXV0aGVudGljYXRlZDogZmFsc2UsXHJcbiAgICB1c2VySWQ6IG51bGwsXHJcbiAgICB0b2tlbjogbnVsbCxcclxuICAgIHRva2VuRXhwaXJhdGlvbjogbnVsbFxyXG4gIH0pO1xyXG5cclxuICAvLyBMb2dnZWQgaW4gVXNlcidzIERhdGFcclxuICBjb25zdCBbY3VycmVudFVzZXIsIHNldEN1cnJlbnRVc2VyXSA9IHVzZVN0YXRlKGVtcHR5VXNlcik7XHJcblxyXG4gIC8vIEN1cnJlbnQgcHJvZmlsZXMgdXNlciBkYXRhXHJcbiAgY29uc3QgW3Byb2ZpbGVVc2VyLCBzZXRQcm9maWxlVXNlcl0gPSB1c2VTdGF0ZShlbXB0eVVzZXIpO1xyXG5cclxuICAvLyBjb25zdCBbcHJvZmlsZVBob3RvLCBzZXRQcm9maWxlUGhvdG9dID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgXHJcbiAgY29uc3QgW3ZpZGVvU3RhdGUsIHNldFZpZGVvU3RhdGVdID0gdXNlU3RhdGUoe1xyXG4gICAgdGl0bGU6ICcnLFxyXG4gICAgLy8gZGVzY3JpcHRpb246JycsXHJcbiAgICB2aWRlb0lkOiAnJ1xyXG4gIH0pO1xyXG5cclxuICBjb25zdCBbY29tbWVudFN0YXRlLCBzZXRDb21tZW50U3RhdGVdID0gdXNlU3RhdGUoe1xyXG4gICAgY29tbWVudDogbnVsbFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBbYWxsVXNlcnMsIHNldEFsbFVzZXJzXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgY29uc3QgWyBhdXRvcGxheSwgc2V0QXV0b3BsYXkgXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcblxyXG5cclxuICAvLyBBVVRIRU5USUNBVElPTiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgXHJcbiAgLy8gTG9naW4gYSB1c2VyXHJcbiAgY29uc3QgbG9naW4gPSBhc3luYyAoZW1haWwsIHBhc3N3b3JkKSA9PiB7XHJcblxyXG4gICAgLy8gTWFrZSBhIEFQSSBxdWVyeSB0byBnZXQgYSB0b2tlblxyXG4gICAgY29uc3QgcmVxdWVzdEJvZHkgPSB7XHJcbiAgICAgIHF1ZXJ5OiBgXHJcbiAgICAgICAgcXVlcnkge1xyXG4gICAgICAgICAgbG9naW4oZW1haWw6IFwiJHtlbWFpbH1cIiwgcGFzc3dvcmQ6IFwiJHtwYXNzd29yZH1cIikge1xyXG4gICAgICAgICAgICB1c2VySWQsXHJcbiAgICAgICAgICAgIHRva2VuXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICBgXHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJy9ncmFwaHFsJywge1xyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHJlcXVlc3RCb2R5KSxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG5cclxuICAgICAgaWYgKHJlcy5zdGF0dXMgIT09IDIwMCAmJiByZXMuc3RhdHVzICE9PSAyMDEpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0xvZ2luIGZhaWxlZCEnKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gLmpzb24oKSBpcyBhIG1ldGhvZCBmcm9tIGZldGNoIEFQSSB0aGF0IGF1dG8gZXh0cmFjdHMgJiBwYXJzZXMgdGhlIHJlcyBib2R5XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG5cclxuICAgICAgLy8gQ2hlY2sgZm9yIGVycm9ycyBhcnJheSBpbiByZXNwb25zZVxyXG4gICAgICBpZiAoZGF0YS5lcnJvcnMpIHtcclxuICAgICAgICByZXR1cm4geyBlcnJvcjogZGF0YS5lcnJvcnMgfTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gU2V0IHN0YXRlIHdpdGggcmV0dXJuZWQgYXV0aCBkYXRhXHJcbiAgICAgIGNvbnN0IHsgdXNlcklkLCB0b2tlbiB9ID0gZGF0YS5kYXRhLmxvZ2luO1xyXG5cclxuICAgICAgc2V0QXV0aFN0YXRlKHsgLi4uYXV0aFN0YXRlLCBhdXRoZW50aWNhdGVkOiB0cnVlLCB1c2VySWQsIHRva2VuIH0pO1xyXG5cclxuICAgICAgLy8gU2F2ZSB0b2tlbiB0byBsb2NhbCBzdG9yYWdlXHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2tlbicsIHRva2VuKVxyXG5cclxuICAgICAgLy8gRmV0Y2ggdGhlIHVzZXIgZGF0YSBhbmQgc2V0IGN1cnJlbnRVc2VyIHN0YXRlXHJcbiAgICAgIGF3YWl0IGdldFVzZXJEYXRhQnlUb2tlbih0b2tlbik7XHJcblxyXG4gICAgICAvLyBSZWRpcmVjdCB0byB1c2VyJ3MgcHJvZmlsZSBwYWdlXHJcbiAgICAgIFJvdXRlci5wdXNoKGAvcHJvZmlsZS8ke3VzZXJJZH1gKTtcclxuXHJcbiAgICAgIC8vIFJldHVybiBpdGVtIG9iamVjdCBpbmRpY2F0aW5nIG5vIGVycm9yc1xyXG4gICAgICByZXR1cm4ge307XHJcblxyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgLy8gUmVnaXN0ZXIgYSB1c2VyXHJcbiAgY29uc3QgcmVnaXN0ZXIgPSBhc3luYyAoZmlyc3ROYW1lLCBsYXN0TmFtZSwgZW1haWwsIHBhc3N3b3JkKSA9PiB7XHJcblxyXG4gICAgLy8gTWFrZSBhIEFQSSBxdWVyeSB0byBnZXQgYSB0b2tlblxyXG4gICAgY29uc3QgcmVxdWVzdEJvZHkgPSB7XHJcbiAgICAgIHF1ZXJ5OiBgXHJcbiAgICAgIG11dGF0aW9uIHtcclxuICAgICAgICBjcmVhdGVVc2VyKHVzZXJJbnB1dDoge2ZpcnN0TmFtZTogXCIke2ZpcnN0TmFtZX1cIiwgbGFzdE5hbWU6IFwiJHtsYXN0TmFtZX1cIiwgZW1haWw6IFwiJHtlbWFpbH1cIiwgcGFzc3dvcmQ6IFwiJHtwYXNzd29yZH1cIn0pIHtcclxuICAgICAgICAgIGVtYWlsXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICBgXHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgLy8gY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJy9ncmFwaHFsJywge1xyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnL2dyYXBocWwnLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocmVxdWVzdEJvZHkpLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcblxyXG4gICAgICBpZiAocmVzLnN0YXR1cyAhPT0gMjAwICYmIHJlcy5zdGF0dXMgIT09IDIwMSkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignQWNjb3VudCBjcmVhdGlvbiBmYWlsZWQhJyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIC5qc29uKCkgaXMgYSBtZXRob2QgZnJvbSBmZXRjaCBBUEkgdGhhdCBhdXRvIGV4dHJhY3RzICYgcGFyc2VzIHRoZSByZXMgYm9keVxyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuXHJcbiAgICAgIC8vIENoZWNrIGZvciBlcnJvcnMgYXJyYXkgaW4gcmVzcG9uc2VcclxuICAgICAgaWYgKGRhdGEuZXJyb3JzKSB7XHJcbiAgICAgICAgcmV0dXJuIHtuZXdVc2VyRW1haWw6ICcnLCBlcnJvcjogZGF0YS5lcnJvcnN9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IG5ld1VzZXJFbWFpbCA9IChkYXRhLmRhdGEuY3JlYXRlVXNlci5lbWFpbCk7XHJcbiAgICAgIHJldHVybiB7IG5ld1VzZXJFbWFpbDogbmV3VXNlckVtYWlsLCBlcnJvcjogW119O1xyXG5cclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gIC8vIExvZ291dCBhIHVzZXJcclxuICBjb25zdCBsb2dvdXQgPSAoKSA9PiB7XHJcbiAgICAvLyBSZWRpcmVjdCB0byBob21lIHBhZ2VcclxuICAgIFJvdXRlci5wdXNoKCcvJyk7XHJcbiAgICAvLyBDbGVhciB0aGUgYXV0aFN0YXRlXHJcbiAgICBzZXRBdXRoU3RhdGUoe1xyXG4gICAgICBhdXRoRGF0YTogbnVsbFxyXG4gICAgfSlcclxuICAgIC8vIFJlbW92ZSB0b2tlbiBmcm9tIGxvY2FsU3RvcmFnZVxyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3Rva2VuJyk7XHJcbiAgICAvLyBDbGVhciB0aGUgY3VycmVudCB1c2VyXHJcbiAgICBzZXRDdXJyZW50VXNlcihlbXB0eVVzZXIpO1xyXG5cclxuICAgIHNldFByb2ZpbGVVc2VyKGVtcHR5VXNlcik7XHJcbiAgICBcclxuICB9XHJcblxyXG4gIC8vIFVTRVIgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICBjb25zdCB1cGRhdGVVc2VyID0gYXN5bmMgKGZpcnN0TmFtZSwgbGFzdE5hbWUsIGpvYlRpdGxlLCBsb2NhdGlvbiwgbGFuZ3VhZ2VzLCBhYm91dCkgPT4ge1xyXG5cclxuICAgIC8vIE1ha2UgYSBBUEkgcXVlcnkgdG8gZ2V0IGEgdG9rZW5cclxuICAgIGNvbnN0IHJlcXVlc3RCb2R5ID0ge1xyXG4gICAgICBxdWVyeTogYFxyXG4gICAgICBtdXRhdGlvbiB7XHJcbiAgICAgICAgdXBkYXRlVXNlcihwcm9maWxlSW5wdXQ6IHtmaXJzdE5hbWU6IFwiJHtmaXJzdE5hbWV9XCIsIGxhc3ROYW1lOiBcIiR7bGFzdE5hbWV9XCIsIGpvYlRpdGxlOiBcIiR7am9iVGl0bGV9XCIsIGxvY2F0aW9uOiBcIiR7bG9jYXRpb259XCIsIFxyXG4gICAgICAgIGxhbmd1YWdlczogW1xyXG4gICAgICAgICAgXCIke2xhbmd1YWdlc1swXX1cIixcclxuICAgICAgICAgIFwiJHtsYW5ndWFnZXNbMV19XCIsIFxyXG4gICAgICAgICAgXCIke2xhbmd1YWdlc1syXX1cIiwgXHJcbiAgICAgICAgICBcIiR7bGFuZ3VhZ2VzWzNdfVwiXHJcbiAgICAgICAgXSxcclxuICAgICAgICBhYm91dDogXCIke2Fib3V0fVwifSkge1xyXG4gICAgICAgICAgZmlyc3ROYW1lLFxyXG4gICAgICAgICAgbGFzdE5hbWUsXHJcbiAgICAgICAgICBqb2JUaXRsZSxcclxuICAgICAgICAgIGxvY2F0aW9uLFxyXG4gICAgICAgICAgbGFuZ3VhZ2VzLFxyXG4gICAgICAgICAgYWJvdXRcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIGBcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnL2dyYXBocWwnLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocmVxdWVzdEJvZHkpLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IGBCZWFyZXIgJHthdXRoU3RhdGUudG9rZW59YFxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuXHJcbiAgICAgIGlmIChyZXMuc3RhdHVzICE9PSAyMDAgJiYgcmVzLnN0YXR1cyAhPT0gMjAxKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVc2VyIHVwZGF0ZSBmYWlsZWQhJyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIC5qc29uKCkgaXMgYSBtZXRob2QgZnJvbSBmZXRjaCBBUEkgdGhhdCBhdXRvIGV4dHJhY3RzICYgcGFyc2VzIHRoZSByZXMgYm9keVxyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuXHJcbiAgICAgIC8vIENoZWNrIGZvciBlcnJvcnMgYXJyYXkgaW4gcmVzcG9uc2VcclxuICAgICAgaWYgKGRhdGEuZXJyb3JzKSB7XHJcbiAgICAgICAgZGF0YS5lcnJvcnMubWFwKGVycm9yID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLm1lc3NhZ2UpXHJcbiAgICAgICAgfSlcclxuICAgICAgICByZXR1cm5cclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gUmVmcmVzaCB0aGUgcHJvZmlsZSB3aXRoIHRoZSBuZXcgdXNlciBkYXRhIC0gdG8gdXBkYXRlIHRoZSBwcm9maWxlSW5mbyBzZWN0aW9uXHJcbiAgICAgIGZldGNoUHJvZmlsZVVzZXIocHJvZmlsZVVzZXIuaWQsIGZhbHNlKVxyXG5cclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG4gIFxyXG5cclxuICBcclxuICAvLyBEQVRBIEZFVENISU5HICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuXHJcbiAgY29uc3QgZ2V0QWxsVXNlcnMgPSBhc3luYyAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgcmVxdWVzdEJvZHkgPSB7XHJcbiAgICAgIHF1ZXJ5OiBgXHJcbiAgICAgICAgcXVlcnkge1xyXG4gICAgICAgICAgdXNlcnMge1xyXG4gICAgICAgICAgICBfaWQsXHJcbiAgICAgICAgICAgIGZpcnN0TmFtZSxcclxuICAgICAgICAgICAgbGFzdE5hbWVcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIGBcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnL2dyYXBocWwnLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocmVxdWVzdEJvZHkpLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IGBCZWFyZXIgJHthdXRoU3RhdGUudG9rZW59YFxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuXHJcbiAgICAgIGlmIChyZXMuc3RhdHVzICE9PSAyMDAgJiYgcmVzLnN0YXR1cyAhPT0gMjAxKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdGYWlsZWQgdG8gZmV0Y2ggdXNlciBkYXRhJyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIC5qc29uKCkgaXMgYSBtZXRob2QgZnJvbSBmZXRjaCBBUEkgdGhhdCBhdXRvIGV4dHJhY3RzICYgcGFyc2VzIHRoZSByZXMgYm9keVxyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuXHJcbiAgICAgIC8vIENoZWNrIGZvciBlcnJvcnMgYXJyYXkgaW4gcmVzcG9uc2VcclxuICAgICAgaWYgKGRhdGEuZXJyb3JzKSB7XHJcbiAgICAgICAgZGF0YS5lcnJvcnMubWFwKGVycm9yID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLm1lc3NhZ2UpXHJcbiAgICAgICAgfSlcclxuICAgICAgICByZXR1cm5cclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgdXNlcnMgPSAoZGF0YS5kYXRhLnVzZXJzKTtcclxuXHJcbiAgICAgIC8vIEdldCBmdWxsIG5hbWUgZm9yIHVzZSBpbiBzZWFyY2hiYXJcclxuICAgICAgY29uc3QgdXNlcnNXaXRoRnVsbE5hbWUgPSB1c2Vycy5tYXAodXNlciA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIGlkOiB1c2VyLl9pZCxcclxuICAgICAgICAgIG5hbWU6IHVzZXIuZmlyc3ROYW1lICsgJyAnICsgdXNlci5sYXN0TmFtZVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuXHJcbiAgICAgIHNldEFsbFVzZXJzKHVzZXJzV2l0aEZ1bGxOYW1lKTtcclxuXHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH1cclxuXHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIGNvbnN0IGdldFVzZXJEYXRhQnlJZCA9IGFzeW5jICh1c2VySWQsIHJlcXVlc3RCb2R5PXt9KSA9PiB7XHJcbiAgICAvLyBjb25zb2xlLmxvZygnZ2V0VXNlckRhdGEgY2FsbGVkIHdpdGggaWQ6JywgdXNlcklkKVxyXG5cclxuICAgIGlmIChyZXF1ZXN0Qm9keSA9IHt9KXtcclxuICAgICAgcmVxdWVzdEJvZHkgPSB7XHJcbiAgICAgICAgcXVlcnk6IGBcclxuICAgICAgICAgIHF1ZXJ5IHtcclxuICAgICAgICAgICAgdXNlckJ5SWQoaWQ6XCIke3VzZXJJZH1cIikge1xyXG4gICAgICAgICAgICAgIGZpcnN0TmFtZSxcclxuICAgICAgICAgICAgICBsYXN0TmFtZSxcclxuICAgICAgICAgICAgICBqb2JUaXRsZSxcclxuICAgICAgICAgICAgICBsb2NhdGlvbixcclxuICAgICAgICAgICAgICBfaWQsXHJcbiAgICAgICAgICAgICAgbGFuZ3VhZ2VzLFxyXG4gICAgICAgICAgICAgIGFib3V0LFxyXG4gICAgICAgICAgICAgIG93bmVkVmlkZW9zIHtcclxuICAgICAgICAgICAgICAgIF9pZCxcclxuICAgICAgICAgICAgICAgIHRodW1ibmFpbFVSTCxcclxuICAgICAgICAgICAgICAgIHRpdGxlLFxyXG4gICAgICAgICAgICAgICAgdmlkZW9VUkxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIHBsYXlsaXN0Q29tbWVudHN7XHJcbiAgICAgICAgICAgICAgICBfaWQsXHJcbiAgICAgICAgICAgICAgICBjb250ZW50LFxyXG4gICAgICAgICAgICAgICAgY29tbWVudGVyIHtcclxuICAgICAgICAgICAgICAgICAgX2lkXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgY3JlYXRlZEF0LFxyXG4gICAgICAgICAgICAgICAgdXBkYXRlZEF0XHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBmYXZvdXJpdGVzLFxyXG4gICAgICAgICAgICAgIHByb2ZpbGVQaG90b0ZpbGVuYW1lXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGBcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJy9ncmFwaHFsJywge1xyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHJlcXVlc3RCb2R5KSxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBgQmVhcmVyICR7YXV0aFN0YXRlLnRva2VufWBcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcblxyXG4gICAgICBpZiAocmVzLnN0YXR1cyAhPT0gMjAwICYmIHJlcy5zdGF0dXMgIT09IDIwMSkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignRmFpbGVkIHRvIGZldGNoIHVzZXIgZGF0YScpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyAuanNvbigpIGlzIGEgbWV0aG9kIGZyb20gZmV0Y2ggQVBJIHRoYXQgYXV0byBleHRyYWN0cyAmIHBhcnNlcyB0aGUgcmVzIGJvZHlcclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcblxyXG4gICAgICAvLyBDaGVjayBmb3IgZXJyb3JzIGFycmF5IGluIHJlc3BvbnNlXHJcbiAgICAgIGlmIChkYXRhLmVycm9ycykge1xyXG4gICAgICAgIGRhdGEuZXJyb3JzLm1hcChlcnJvciA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvci5tZXNzYWdlKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmV0dXJuXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IHVzZXIgPSAoZGF0YS5kYXRhLnVzZXJCeUlkKTtcclxuICAgICAgcmV0dXJuIHVzZXI7XHJcblxyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9XHJcblxyXG4gIH1cclxuICBcclxuICBcclxuICAvLyBHZXQgbG9nZ2VkIGluIHVzZXIncyBkYXRhIGFuZCBzZXRzIGl0IGluIHRoZSB1c2VyU3RhdGVcclxuICBjb25zdCBnZXRVc2VyRGF0YUJ5VG9rZW4gPSBhc3luYyAodG9rZW4pID0+IHtcclxuXHJcbiAgICBsZXQgcmVxdWVzdEJvZHk7XHJcblxyXG4gICAgLy8gSWYgbm8gdXNlcklkIHRoZW4gcXVlcnkgdGhlIGN1cnJlbnQgbG9nZ2VkIGluIHVzZXIgYnkgdG9rZW5cclxuICAgIHJlcXVlc3RCb2R5ID0ge1xyXG4gICAgICBxdWVyeTogYFxyXG4gICAgICAgIHF1ZXJ5IHtcclxuICAgICAgICAgIHVzZXJCeVRva2Vue1xyXG4gICAgICAgICAgICBmaXJzdE5hbWUsXHJcbiAgICAgICAgICAgIGxhc3ROYW1lLFxyXG4gICAgICAgICAgICBqb2JUaXRsZSxcclxuICAgICAgICAgICAgbG9jYXRpb24sXHJcbiAgICAgICAgICAgIF9pZCxcclxuICAgICAgICAgICAgbGFuZ3VhZ2VzLFxyXG4gICAgICAgICAgICBhYm91dCxcclxuICAgICAgICAgICAgb3duZWRWaWRlb3Mge1xyXG4gICAgICAgICAgICAgIF9pZCxcclxuICAgICAgICAgICAgICB0aXRsZSxcclxuICAgICAgICAgICAgICB0aHVtYm5haWxVUkwsXHJcbiAgICAgICAgICAgICAgdmlkZW9VUkxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcGxheWxpc3RDb21tZW50c3tcclxuICAgICAgICAgICAgICBfaWQsXHJcbiAgICAgICAgICAgICAgY29udGVudCxcclxuICAgICAgICAgICAgICBjb21tZW50ZXIge1xyXG4gICAgICAgICAgICAgIF9pZCBcclxuICAgICAgICAgICAgICB9LCAgXHJcbiAgICAgICAgICAgICAgY3JlYXRlZEF0LFxyXG4gICAgICAgICAgICAgIHVwZGF0ZWRBdFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBmYXZvdXJpdGVzLFxyXG4gICAgICAgICAgICBwcm9maWxlUGhvdG9GaWxlbmFtZVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgYFxyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCcvZ3JhcGhxbCcsIHtcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShyZXF1ZXN0Qm9keSksXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICdBdXRob3JpemF0aW9uJzogYEJlYXJlciAke3Rva2VufWBcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcblxyXG4gICAgICBpZiAocmVzLnN0YXR1cyAhPT0gMjAwICYmIHJlcy5zdGF0dXMgIT09IDIwMSkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignRmFpbGVkIHRvIGZldGNoIHVzZXIgZGF0YScpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyAuanNvbigpIGlzIGEgbWV0aG9kIGZyb20gZmV0Y2ggQVBJIHRoYXQgYXV0byBleHRyYWN0cyAmIHBhcnNlcyB0aGUgcmVzIGJvZHlcclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcblxyXG4gICAgICAvLyBDaGVjayBmb3IgZXJyb3JzIGFycmF5IGluIHJlc3BvbnNlXHJcbiAgICAgIGlmIChkYXRhLmVycm9ycykge1xyXG4gICAgICAgIGRhdGEuZXJyb3JzLm1hcChlcnJvciA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvci5tZXNzYWdlKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmV0dXJuXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IHVzZXIgPSBkYXRhLmRhdGEudXNlckJ5VG9rZW47XHJcbiAgICAgIFxyXG4gICAgICBzZXRDdXJyZW50VXNlcih7XHJcbiAgICAgICAgaWQ6IHVzZXIuX2lkLFxyXG4gICAgICAgIGZpcnN0TmFtZTogdXNlci5maXJzdE5hbWUsXHJcbiAgICAgICAgbGFzdE5hbWU6IHVzZXIubGFzdE5hbWUsXHJcbiAgICAgICAgam9iVGl0bGU6IHVzZXIuam9iVGl0bGUsXHJcbiAgICAgICAgbG9jYXRpb246IHVzZXIubG9jYXRpb24sXHJcbiAgICAgICAgbGFuZ3VhZ2VzOiB1c2VyLmxhbmd1YWdlcyxcclxuICAgICAgICBhYm91dDogdXNlci5hYm91dCxcclxuICAgICAgICBvd25lZFZpZGVvczogdXNlci5vd25lZFZpZGVvcyxcclxuICAgICAgICB1c2VyQ29tbWVudHM6IHVzZXIudXNlckNvbW1lbnRzLFxyXG4gICAgICAgIHBsYXlsaXN0Q29tbWVudHM6IHVzZXIucGxheWxpc3RDb21tZW50cyxcclxuICAgICAgICBmYXZvdXJpdGVzOiB1c2VyLmZhdm91cml0ZXMsXHJcbiAgICAgICAgcHJvZmlsZVBob3RvRmlsZW5hbWU6IHVzZXIucHJvZmlsZVBob3RvRmlsZW5hbWVcclxuICAgICAgfSkgIFxyXG5cclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgfVxyXG5cclxuICBjb25zdCBmZXRjaFByb2ZpbGVVc2VyID0gYXN5bmMgKHVzZXJJZCwgaW5pdGlhbEZldGNoKSA9PiB7XHJcblxyXG4gICAgaWYgKGluaXRpYWxGZXRjaCA9PT0gdHJ1ZSkge1xyXG4gICAgICAvLyBPbmx5IGZldGNoIGRhdGEgaWYgcHJvZmlsZVVzZXIgaXNuJ3QgcG9wdWxhdGVkXHJcbiAgICAgIGlmIChwcm9maWxlVXNlci5maXJzdE5hbWUgIT09ICcnKSB7XHJcbiAgICAgICAgcmV0dXJuXHJcbiAgICAgIH1cclxuICAgICAgLy8gT25seSBmZXRjaCBkYXRhIGlmIHRoZSB1c2VySWQgaGFzIGJlZW4gcGFyc2VkIGZyb20gdGhlIFVSTFxyXG4gICAgICBpZiAodXNlcklkID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICByZXR1cm5cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gR2V0IHRoZSBwcm9maWxlIHVzZXIncyBkYXRhIHVzaW5nIHRoZSB1c2VySWQgZnJvbSB0aGUgVVJMXHJcbiAgICBjb25zdCB1c2VyID0gYXdhaXQgZ2V0VXNlckRhdGFCeUlkKHVzZXJJZCk7XHJcblxyXG4gICAgLy8gU2V0IHRoZSBzdGF0ZVxyXG4gICAgc2V0UHJvZmlsZVVzZXIoe1xyXG4gICAgICBpZDogdXNlcklkLFxyXG4gICAgICBmaXJzdE5hbWU6IHVzZXIuZmlyc3ROYW1lLFxyXG4gICAgICBsYXN0TmFtZTogdXNlci5sYXN0TmFtZSxcclxuICAgICAgam9iVGl0bGU6IHVzZXIuam9iVGl0bGUsXHJcbiAgICAgIGxvY2F0aW9uOiB1c2VyLmxvY2F0aW9uLFxyXG4gICAgICBsYW5ndWFnZXM6IHVzZXIubGFuZ3VhZ2VzLFxyXG4gICAgICBhYm91dDogdXNlci5hYm91dCxcclxuICAgICAgb3duZWRWaWRlb3M6IHVzZXIub3duZWRWaWRlb3MsXHJcbiAgICAgIHVzZXJDb21tZW50czogdXNlci51c2VyQ29tbWVudHMsXHJcbiAgICAgIHBsYXlsaXN0Q29tbWVudHM6IHVzZXIucGxheWxpc3RDb21tZW50cyxcclxuICAgICAgZmF2b3VyaXRlczogdXNlci5mYXZvdXJpdGVzLFxyXG4gICAgICBwcm9maWxlUGhvdG9GaWxlbmFtZTogdXNlci5wcm9maWxlUGhvdG9GaWxlbmFtZVxyXG5cclxuICAgIH0pXHJcblxyXG4gICAgLy9TZXQgdmlkZW8gc3RhdGUgdG8gYmUgZmlyc3QgdmlkZW8gaW4gcHJvZmlsZSB1c2VyJ3MgcGxheWxpc3QgLSBidXQgb25seSBpZiBpbml0aWFsIGZldGNoXHJcbiAgICBpZiAoaW5pdGlhbEZldGNoID09PSB0cnVlICYgdXNlci5vd25lZFZpZGVvcy5sZW5ndGggPiAwKXtcclxuICAgICAgY29uc3QgdmlkZW8gPSB1c2VyLm93bmVkVmlkZW9zWzBdXHJcbiAgICAgIHNldEN1cnJlbnRWaWRlbyh7XHJcbiAgICAgICAgdGl0bGU6IHZpZGVvLnRpdGxlLFxyXG4gICAgICAgIHZpZGVvSWQ6IHZpZGVvLnZpZGVvVVJMXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgICByZXR1cm4gdXNlcjtcclxuICB9XHJcblxyXG4gIC8vIFJlc2V0IHRoZSBQcm9maWxlVXNlciBzdGF0ZVxyXG4gIGNvbnN0IGNsZWFyUHJvZmlsZVVzZXIgPSAoKSA9PiB7XHJcbiAgICBzZXRQcm9maWxlVXNlcih7XHJcbiAgICAgIGlkOiAnJyxcclxuICAgICAgZmlyc3ROYW1lOiAnJyxcclxuICAgICAgbGFzdE5hbWU6ICcnLFxyXG4gICAgICBqb2JUaXRsZTogJycsXHJcbiAgICAgIGxvY2F0aW9uOiAnJyxcclxuICAgICAgbGFuZ3VhZ2VzOiBbXSxcclxuICAgICAgYWJvdXQ6ICcnLFxyXG4gICAgICBvd25lZFZpZGVvczogW10sXHJcbiAgICAgIHVzZXJDb21tZW50czogW10sXHJcbiAgICAgIHBsYXlsaXN0Q29tbWVudHM6IFtdLFxyXG4gICAgICBmYXZvdXJpdGVzOiBbXSxcclxuICAgICAgcHJvZmlsZVBob3RvRmlsZW5hbWU6ICcnXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGdldENvbW1lbnRVc2VyID0gYXN5bmMgKHVzZXJJZCkgPT4ge1xyXG4gICAgbGV0IHJlcXVlc3RCb2R5ID0ge1xyXG4gICAgICBxdWVyeTogYFxyXG4gICAgICAgICAgcXVlcnkge1xyXG4gICAgICAgICAgICB1c2VyQnlJZChpZDpcIiR7dXNlcklkfVwiKSB7XHJcbiAgICAgICAgICAgICAgZmlyc3ROYW1lLFxyXG4gICAgICAgICAgICAgIGxhc3ROYW1lLFxyXG4gICAgICAgICAgICAgIHByb2ZpbGVQaG90b0ZpbGVuYW1lXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGBcclxuICAgIH1cclxuICAgIGNvbnN0IGNvbW1lbnRVc2VyID0gYXdhaXQgZ2V0VXNlckRhdGFCeUlkKHVzZXJJZCwgcmVxdWVzdEJvZHkpO1xyXG4gICAgcmV0dXJuIGNvbW1lbnRVc2VyO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgZ2V0RmF2b3VyaXRlVXNlciA9IGFzeW5jICh1c2VySWQpID0+IHtcclxuICAgIGxldCByZXF1ZXN0Qm9keSA9IHtcclxuICAgICAgcXVlcnk6IGBcclxuICAgICAgICAgIHF1ZXJ5IHtcclxuICAgICAgICAgICAgdXNlckJ5SWQoaWQ6XCIke3VzZXJJZH1cIikge1xyXG4gICAgICAgICAgICAgIGZpcnN0TmFtZSxcclxuICAgICAgICAgICAgICBsYXN0TmFtZSxcclxuICAgICAgICAgICAgICBwcm9maWxlUGhvdG9GaWxlbmFtZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBgXHJcbiAgICB9XHJcbiAgICBjb25zdCBmYXZvdXJpdGVVc2VyID0gYXdhaXQgZ2V0VXNlckRhdGFCeUlkKHVzZXJJZCwgcmVxdWVzdEJvZHkpXHJcbiAgICByZXR1cm4gZmF2b3VyaXRlVXNlcjtcclxuICB9XHJcblxyXG5cclxuXHJcbiAgLy8gVklERU9TICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcblxyXG5cclxuICAvLyBBZGQgYSB2aWRlbyB0byBhIHVzZXIncyBwbGF5bGlzdFxyXG4gIGNvbnN0IGFkZFZpZGVvVG9QbGF5bGlzdCA9IGFzeW5jICh2aWRlbykgPT4ge1xyXG5cclxuICAgIC8vIFNlbmQgYW4gQVBJIHJlcXVlc3QgdG8gc2F2ZSB0aGUgdmlkZW9cclxuICAgIGNvbnN0IHJlcXVlc3RCb2R5ID0ge1xyXG4gICAgICBxdWVyeTogYFxyXG4gICAgICAgIG11dGF0aW9uIHtcclxuICAgICAgICAgIGNyZWF0ZVZpZGVvKHZpZGVvSW5wdXQ6IHt0aXRsZTogXCIke3ZpZGVvLnRpdGxlfVwiLCB0aHVtYm5haWxVUkw6IFwiJHt2aWRlby50aHVtYm5haWxVUkx9XCIsIHZpZGVvVVJMOiBcIiR7dmlkZW8udmlkZW9JZH1cIiwgdXNlcklkOiBcIiR7Y3VycmVudFVzZXIuaWR9XCJ9KSB7XHJcbiAgICAgICAgICAgIF9pZFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgYFxyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCcvZ3JhcGhxbCcsIHtcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShyZXF1ZXN0Qm9keSksXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICdBdXRob3JpemF0aW9uJzogYEJlYXJlciAke2F1dGhTdGF0ZS50b2tlbn1gXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG5cclxuICAgICAgaWYgKHJlcy5zdGF0dXMgIT09IDIwMCAmJiByZXMuc3RhdHVzICE9PSAyMDEpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZhaWxlZCB0byBjcmVhdGUgdmlkZW8hJyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIC5qc29uKCkgaXMgYSBtZXRob2QgZnJvbSBmZXRjaCBBUEkgdGhhdCBhdXRvIGV4dHJhY3RzICYgcGFyc2VzIHRoZSByZXMgYm9keVxyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuXHJcbiAgICAgIC8vIENoZWNrIGZvciBlcnJvcnMgYXJyYXkgaW4gcmVzcG9uc2VcclxuICAgICAgaWYgKGRhdGEuZXJyb3JzKSB7XHJcbiAgICAgICAgZGF0YS5lcnJvcnMubWFwKGVycm9yID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLm1lc3NhZ2UpXHJcbiAgICAgICAgfSlcclxuICAgICAgICByZXR1cm5cclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gUmVmcmVzaCB0aGUgcHJvZmlsZSB3aXRoIHRoZSBuZXcgdXNlciBkYXRhIC0gdG8gdXBkYXRlIHRoZSBwbGF5bGlzdFxyXG4gICAgICBmZXRjaFByb2ZpbGVVc2VyKGN1cnJlbnRVc2VyLmlkLCBmYWxzZSlcclxuXHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICAvLyBSZW1vdmUgYSB2aWRlbyBmcm9tIGEgdXNlcidzIHBsYXlsaXN0XHJcbiAgY29uc3QgcmVtb3ZlVmlkZW9Gcm9tUGxheWxpc3QgPSBhc3luYyAoaWQpID0+IHtcclxuXHJcbiAgLy8gU2VuZCBhbiBBUEkgcmVxdWVzdCB0byBzYXZlIHRoZSB2aWRlb1xyXG4gICAgY29uc3QgcmVxdWVzdEJvZHkgPSB7XHJcbiAgICAgIHF1ZXJ5OiBgXHJcbiAgICAgICAgbXV0YXRpb24ge1xyXG4gICAgICAgICAgcmVtb3ZlVmlkZW8oaWQ6IFwiJHtpZH1cIikge1xyXG4gICAgICAgICAgICBvd25lZFZpZGVvcyB7XHJcbiAgICAgICAgICAgICAgX2lkLFxyXG4gICAgICAgICAgICAgIHRodW1ibmFpbFVSTCxcclxuICAgICAgICAgICAgICB0aXRsZSxcclxuICAgICAgICAgICAgICB2aWRlb1VSTFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICBgXHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJy9ncmFwaHFsJywge1xyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHJlcXVlc3RCb2R5KSxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBgQmVhcmVyICR7YXV0aFN0YXRlLnRva2VufWBcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcblxyXG4gICAgICBpZiAocmVzLnN0YXR1cyAhPT0gMjAwICYmIHJlcy5zdGF0dXMgIT09IDIwMSkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignRmFpbGVkIHRvIHJlbW92ZSB2aWRlbyEnKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gLmpzb24oKSBpcyBhIG1ldGhvZCBmcm9tIGZldGNoIEFQSSB0aGF0IGF1dG8gZXh0cmFjdHMgJiBwYXJzZXMgdGhlIHJlcyBib2R5XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG5cclxuICAgICAgY29uc3QgdmlkZW9zID0gZGF0YS5kYXRhLnJlbW92ZVZpZGVvLm93bmVkVmlkZW9zO1xyXG5cclxuICAgICAgLy8gQ2hlY2sgZm9yIGVycm9ycyBhcnJheSBpbiByZXNwb25zZVxyXG4gICAgICBpZiAoZGF0YS5lcnJvcnMpIHtcclxuICAgICAgICBkYXRhLmVycm9ycy5tYXAoZXJyb3IgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyb3IubWVzc2FnZSlcclxuICAgICAgICB9KVxyXG4gICAgICAgIHJldHVyblxyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBSZWZyZXNoIHRoZSBwcm9maWxlIHdpdGggdGhlIG5ldyB1c2VyIGRhdGEgLSB0byB1cGRhdGUgdGhlIHBsYXlsaXN0XHJcbiAgICAgIHVwZGF0ZVByb2ZpbGVVc2VyVmlkZW9zKHZpZGVvcylcclxuXHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IHVwZGF0ZVByb2ZpbGVVc2VyVmlkZW9zID0gKHZpZGVvcykgPT4ge1xyXG4gICAgLy8gVXBkYXRlIHRoZSBwcm9maWxlIHVzZXIncyBvd25lZFZpZGVvIGluIHRoIGdsb2JhbCBzdGF0ZVxyXG4gICAgc2V0UHJvZmlsZVVzZXIoey4uLnByb2ZpbGVVc2VyLCBvd25lZFZpZGVvczogdmlkZW9zfSkgXHJcbiAgfVxyXG5cclxuICAvLyBTZXQgYSB2aWRlbyBhcyB0aGUgY3VycmVudCB2aWRlbyBmb3IgdGhlIHZpZGVvIHBsYXllclxyXG4gIGNvbnN0IHNldEN1cnJlbnRWaWRlbyA9ICh2aWRlbykgPT4ge1xyXG4gICAgc2V0VmlkZW9TdGF0ZSh7XHJcbiAgICAgIHRpdGxlOiB2aWRlby50aXRsZSxcclxuICAgICAgLy8gZGVzY3JpcHRpb246IHZpZGVvLmRlc2NyaXB0aW9uLFxyXG4gICAgICB2aWRlb0lkOiB2aWRlby52aWRlb0lkXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcblxyXG4gIFxyXG4gIFxyXG4gIC8vIENPTU1FTlRTICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcblxyXG4gIC8vIEFkZCBhIGNvbW1lbnRcclxuICBjb25zdCBhZGRDb21tZW50ID0gYXN5bmMgKGNvbnRlbnQpID0+IHtcclxuXHJcbiAgICAvLyBTZW5kIGFuIEFQSSByZXF1ZXN0IHRvIHNhdmUgdGhlIGNvbW1lbnRcclxuICAgIGNvbnN0IHJlcXVlc3RCb2R5ID0ge1xyXG4gICAgICBxdWVyeTogYFxyXG4gICAgICAgIG11dGF0aW9uIHtcclxuICAgICAgICAgIGNyZWF0ZUNvbW1lbnQoY29tbWVudElucHV0OiB7Y29udGVudDogXCIke2NvbnRlbnR9XCIsIGNvbW1lbnRlcklkOiBcIiR7Y3VycmVudFVzZXIuaWR9XCIsIHBsYXlsaXN0T3duZXJJZDogXCIke3Byb2ZpbGVVc2VyLmlkfVwifSkge1xyXG4gICAgICAgICAgICBfaWRcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIGBcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnL2dyYXBocWwnLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocmVxdWVzdEJvZHkpLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IGBCZWFyZXIgJHthdXRoU3RhdGUudG9rZW59YFxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuXHJcbiAgICAgIGlmIChyZXMuc3RhdHVzICE9PSAyMDAgJiYgcmVzLnN0YXR1cyAhPT0gMjAxKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdGYWlsZWQgdG8gY3JlYXRlIGNvbW1lbnQhJyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIC5qc29uKCkgaXMgYSBtZXRob2QgZnJvbSBmZXRjaCBBUEkgdGhhdCBhdXRvIGV4dHJhY3RzICYgcGFyc2VzIHRoZSByZXMgYm9keVxyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuXHJcbiAgICAgIC8vIENoZWNrIGZvciBlcnJvcnMgYXJyYXkgaW4gcmVzcG9uc2VcclxuICAgICAgaWYgKGRhdGEuZXJyb3JzKSB7XHJcbiAgICAgICAgZGF0YS5lcnJvcnMubWFwKGVycm9yID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLm1lc3NhZ2UpXHJcbiAgICAgICAgfSlcclxuICAgICAgICByZXR1cm5cclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gUmVmcmVzaCB0aGUgcHJvZmlsZSB3aXRoIHRoZSBuZXcgdXNlciBkYXRhIC0gdG8gdXBkYXRlIHRoZSBjb21tZW50IHNlY3Rpb25cclxuICAgICAgZmV0Y2hQcm9maWxlVXNlcihwcm9maWxlVXNlci5pZCwgZmFsc2UpXHJcblxyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBcclxuICAvLyBSZW1vdmUgYSBjb21tZW50IGZyb20gYSB1c2VyJ3MgcGxheWxpc3RcclxuICBjb25zdCByZW1vdmVDb21tZW50RnJvbVBsYXlsaXN0ID0gYXN5bmMgKGlkKSA9PiB7XHJcblxyXG4gICAgLy8gU2VuZCBhbiBBUEkgcmVxdWVzdCB0byBkZWxldGUgdGhlIGNvbW1lbnRcclxuICAgIGNvbnN0IHJlcXVlc3RCb2R5ID0ge1xyXG4gICAgICBxdWVyeTogYFxyXG4gICAgICAgIG11dGF0aW9uIHtcclxuICAgICAgICAgIHJlbW92ZUNvbW1lbnQoaWQ6IFwiJHtpZH1cIiwgcGxheWxpc3RPd25lcklkOiBcIiR7cHJvZmlsZVVzZXIuaWR9XCIpIHtcclxuICAgICAgICAgICAgcGxheWxpc3RDb21tZW50c3tcclxuICAgICAgICAgICAgICBfaWQsXHJcbiAgICAgICAgICAgICAgY29udGVudCxcclxuICAgICAgICAgICAgICBjb21tZW50ZXIge1xyXG4gICAgICAgICAgICAgICAgX2lkXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBjcmVhdGVkQXQsXHJcbiAgICAgICAgICAgICAgdXBkYXRlZEF0XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIGBcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnL2dyYXBocWwnLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocmVxdWVzdEJvZHkpLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IGBCZWFyZXIgJHthdXRoU3RhdGUudG9rZW59YFxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuXHJcbiAgICAgIGlmIChyZXMuc3RhdHVzICE9PSAyMDAgJiYgcmVzLnN0YXR1cyAhPT0gMjAxKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdGYWlsZWQgdG8gcmVtb3ZlIGNvbW1lbnQhJyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIC5qc29uKCkgaXMgYSBtZXRob2QgZnJvbSBmZXRjaCBBUEkgdGhhdCBhdXRvIGV4dHJhY3RzICYgcGFyc2VzIHRoZSByZXMgYm9keVxyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuXHJcbiAgICAgIGNvbnN0IGNvbW1lbnRzID0gZGF0YS5kYXRhLnJlbW92ZUNvbW1lbnQucGxheWxpc3RDb21tZW50cztcclxuXHJcbiAgICAgIC8vIENoZWNrIGZvciBlcnJvcnMgYXJyYXkgaW4gcmVzcG9uc2VcclxuICAgICAgaWYgKGRhdGEuZXJyb3JzKSB7XHJcbiAgICAgICAgZGF0YS5lcnJvcnMubWFwKGVycm9yID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLm1lc3NhZ2UpXHJcbiAgICAgICAgfSlcclxuICAgICAgICByZXR1cm5cclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gUmVmcmVzaCB0aGUgcHJvZmlsZSB3aXRoIHRoZSBuZXcgdXNlciBkYXRhIC0gdG8gdXBkYXRlIHRoZSBjb21tZW50c1xyXG4gICAgICB1cGRhdGVQcm9maWxlVXNlckNvbW1lbnRzKGNvbW1lbnRzKTtcclxuXHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IHVwZGF0ZVByb2ZpbGVVc2VyQ29tbWVudHMgPSAoY29tbWVudHMpID0+IHtcclxuICAgIC8vIFVwZGF0ZSB0aGUgcHJvZmlsZSB1c2VyJ3MgcGxheWxpc3RDb21tZW50cyBpbiB0aGUgZ2xvYmFsIHN0YXRlXHJcbiAgICBzZXRQcm9maWxlVXNlcih7IC4uLnByb2ZpbGVVc2VyLCBwbGF5bGlzdENvbW1lbnRzOiBjb21tZW50cyB9KVxyXG4gIH1cclxuXHJcbiAgY29uc3QgZWRpdENvbW1lbnQgPSBhc3luYyAoaWQsIGNvbnRlbnQpID0+IHtcclxuXHJcbiAgICAvLyBNYWtlIGEgQVBJIHF1ZXJ5IHRvIGdldCBhIHRva2VuXHJcbiAgICBjb25zdCByZXF1ZXN0Qm9keSA9IHtcclxuICAgICAgcXVlcnk6IGBcclxuICAgICAgbXV0YXRpb24ge1xyXG4gICAgICAgIGVkaXRDb21tZW50KGlkOiBcIiR7aWR9XCIsIGNvbnRlbnQ6IFwiJHtjb250ZW50fVwiKSB7XHJcbiAgICAgICAgICBjb250ZW50XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICBgXHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJy9ncmFwaHFsJywge1xyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHJlcXVlc3RCb2R5KSxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBgQmVhcmVyICR7YXV0aFN0YXRlLnRva2VufWBcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcblxyXG4gICAgICBpZiAocmVzLnN0YXR1cyAhPT0gMjAwICYmIHJlcy5zdGF0dXMgIT09IDIwMSkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVXNlciB1cGRhdGUgZmFpbGVkIScpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyAuanNvbigpIGlzIGEgbWV0aG9kIGZyb20gZmV0Y2ggQVBJIHRoYXQgYXV0byBleHRyYWN0cyAmIHBhcnNlcyB0aGUgcmVzIGJvZHlcclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcblxyXG4gICAgICAvLyBDaGVjayBmb3IgZXJyb3JzIGFycmF5IGluIHJlc3BvbnNlXHJcbiAgICAgIGlmIChkYXRhLmVycm9ycykge1xyXG4gICAgICAgIGRhdGEuZXJyb3JzLm1hcChlcnJvciA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvci5tZXNzYWdlKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmV0dXJuXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIFJlZnJlc2ggdGhlIHByb2ZpbGUgd2l0aCB0aGUgbmV3IHVzZXIgZGF0YSAtIHRvIHVwZGF0ZSB0aGUgY29tbWVudHNcclxuICAgICAgZmV0Y2hQcm9maWxlVXNlcihwcm9maWxlVXNlci5pZCwgZmFsc2UpXHJcblxyXG5cclxuXHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICAvLyBGYXZvdXJpdGVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICBjb25zdCBhZGRGYXZvdXJpdGUgPSBhc3luYyAoaWQpID0+IHtcclxuXHJcbiAgICAvLyBTZW5kIGFuIEFQSSByZXF1ZXN0IHRvIGFkZCB0aGUgZmF2b3VyaXRlXHJcbiAgICBjb25zdCByZXF1ZXN0Qm9keSA9IHtcclxuICAgICAgcXVlcnk6IGBcclxuICAgICAgICBtdXRhdGlvbiB7XHJcbiAgICAgICAgICBhZGRGYXZvdXJpdGUoaWQ6IFwiJHtpZH1cIikge1xyXG4gICAgICAgICAgICBfaWRcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIGBcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnL2dyYXBocWwnLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocmVxdWVzdEJvZHkpLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IGBCZWFyZXIgJHthdXRoU3RhdGUudG9rZW59YFxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuXHJcbiAgICAgIGlmIChyZXMuc3RhdHVzICE9PSAyMDAgJiYgcmVzLnN0YXR1cyAhPT0gMjAxKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdGYWlsZWQgdG8gYWRkIGZhdm91cml0ZSEnKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gLmpzb24oKSBpcyBhIG1ldGhvZCBmcm9tIGZldGNoIEFQSSB0aGF0IGF1dG8gZXh0cmFjdHMgJiBwYXJzZXMgdGhlIHJlcyBib2R5XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG5cclxuICAgICAgLy8gQ2hlY2sgZm9yIGVycm9ycyBhcnJheSBpbiByZXNwb25zZVxyXG4gICAgICBpZiAoZGF0YS5lcnJvcnMpIHtcclxuICAgICAgICBkYXRhLmVycm9ycy5tYXAoZXJyb3IgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyb3IubWVzc2FnZSlcclxuICAgICAgICB9KVxyXG4gICAgICAgIHJldHVyblxyXG4gICAgICB9XHJcblxyXG4gICAgICBcclxuICAgICAgLy8gUmVmcmVzaCB0aGUgY3VycmVudFVzZXIncyBkYXRhIHRvIHVwZGF0ZSB0aGUgYWRkIGZhdm91cml0ZSBwcm9maWxlIGJ1dHRvblxyXG4gICAgICAvLyBnZXRVc2VyRGF0YUJ5SWQoY3VycmVudFVzZXIuaWQpXHJcbiAgICAgIC8vIFJlZnJlc2ggdGhlIHByb2ZpbGUgd2l0aCB0aGUgbmV3IHVzZXIgZGF0YSAtIHRvIHVwZGF0ZSB0aGUgZmF2b3VyaXRlcyBzZWN0aW9uXHJcbiAgICAgIC8vIGZldGNoUHJvZmlsZVVzZXIoaWQsIGZhbHNlKVxyXG4gICAgICBnZXRVc2VyRGF0YUJ5VG9rZW4oYXV0aFN0YXRlLnRva2VuKTtcclxuXHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICAvLyBSZW1vdmUgYSBmYXZvdXJpdGUgZnJvbSBhIHVzZXJzIHByb2ZpbGVcclxuICBjb25zdCByZW1vdmVGYXZvdXJpdGUgPSBhc3luYyAoaWQpID0+IHtcclxuXHJcbiAgICAvLyBTZW5kIGFuIEFQSSByZXF1ZXN0IHRvIGRlbGV0ZSB0aGUgY29tbWVudFxyXG4gICAgY29uc3QgcmVxdWVzdEJvZHkgPSB7XHJcbiAgICAgIHF1ZXJ5OiBgXHJcbiAgICAgICAgbXV0YXRpb24ge1xyXG4gICAgICAgICAgcmVtb3ZlRmF2b3VyaXRlKGlkOiBcIiR7aWR9XCIpIHtcclxuICAgICAgICAgICAgZmF2b3VyaXRlc1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgYFxyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCcvZ3JhcGhxbCcsIHtcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShyZXF1ZXN0Qm9keSksXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICdBdXRob3JpemF0aW9uJzogYEJlYXJlciAke2F1dGhTdGF0ZS50b2tlbn1gXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG5cclxuICAgICAgaWYgKHJlcy5zdGF0dXMgIT09IDIwMCAmJiByZXMuc3RhdHVzICE9PSAyMDEpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZhaWxlZCB0byByZW1vdmUgZmF2b3VyaXRlIScpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyAuanNvbigpIGlzIGEgbWV0aG9kIGZyb20gZmV0Y2ggQVBJIHRoYXQgYXV0byBleHRyYWN0cyAmIHBhcnNlcyB0aGUgcmVzIGJvZHlcclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcblxyXG4gICAgICBjb25zdCBmYXZvdXJpdGVzID0gZGF0YS5kYXRhLnJlbW92ZUZhdm91cml0ZS5mYXZvdXJpdGVzO1xyXG4gICAgICBcclxuICAgICAgZ2V0VXNlckRhdGFCeVRva2VuKGF1dGhTdGF0ZS50b2tlbik7XHJcblxyXG5cclxuICAgICAgLy8gQ2hlY2sgZm9yIGVycm9ycyBhcnJheSBpbiByZXNwb25zZVxyXG4gICAgICBpZiAoZGF0YS5lcnJvcnMpIHtcclxuICAgICAgICBkYXRhLmVycm9ycy5tYXAoZXJyb3IgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyb3IubWVzc2FnZSlcclxuICAgICAgICB9KVxyXG4gICAgICAgIHJldHVyblxyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBSZWZyZXNoIHRoZSBwcm9maWxlIHdpdGggdGhlIG5ldyB1c2VyIGRhdGEgLSB0byB1cGRhdGUgdGhlIGZhdm91cml0ZXNcclxuICAgICAgdXBkYXRlUHJvZmlsZVVzZXJGYXZvdXJpdGVzKGZhdm91cml0ZXMpO1xyXG5cclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgdXBkYXRlUHJvZmlsZVVzZXJGYXZvdXJpdGVzID0gKGZhdm91cml0ZXMpID0+IHtcclxuICAgIC8vIFVwZGF0ZSB0aGUgcHJvZmlsZSB1c2VyJ3MgZmF2b3VyaXRlcyBpbiB0aCBnbG9iYWwgc3RhdGVcclxuICAgIHNldFByb2ZpbGVVc2VyKHsgLi4ucHJvZmlsZVVzZXIsIGZhdm91cml0ZXMgfSlcclxuICB9XHJcblxyXG5cclxuICAvLyBQSE9UTyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gIFxyXG4gIGNvbnN0IHVwbG9hZEZpbGUgPSBhc3luYyAoZm9ybURhdGEpID0+IHtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAvLyBNYWtlIEFQSSByZXF1ZXN0IHRvIHVwbG9hZCB0aGUgZmlsZSB0byB0aGUgREJcclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MucG9zdCgnL3VwbG9hZCcsIGZvcm1EYXRhLCB7XHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdtdWx0aXBhcnQvZm9ybS1kYXRhJyxcclxuICAgICAgICAgICdBdXRob3JpemF0aW9uJzogYEJlYXJlciAke2F1dGhTdGF0ZS50b2tlbn1gXHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIC8vIHJlZnJlc2ggdGhlIHByb2ZpbGVcclxuICAgICAgZmV0Y2hQcm9maWxlVXNlcihjdXJyZW50VXNlci5pZClcclxuXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcblxyXG4gIFxyXG4gIFxyXG4gIFxyXG4gIFxyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGV4dFByb3ZpZGVyIHZhbHVlPXt7XHJcbiAgICAgIGF1dGhTdGF0ZSxcclxuICAgICAgY3VycmVudFVzZXIsXHJcbiAgICAgIHByb2ZpbGVVc2VyLFxyXG4gICAgICBzZXRQcm9maWxlVXNlcixcclxuICAgICAgdmlkZW9TdGF0ZSxcclxuICAgICAgY29tbWVudFN0YXRlLFxyXG4gICAgICBhbGxVc2VycyxcclxuICAgICAgYXV0b3BsYXksXHJcbiAgICAgIHNldEF1dG9wbGF5LFxyXG4gICAgICBsb2dpbixcclxuICAgICAgcmVnaXN0ZXIsXHJcbiAgICAgIGxvZ291dCxcclxuICAgICAgdXBkYXRlVXNlcixcclxuICAgICAgZ2V0VXNlckRhdGFCeUlkLFxyXG4gICAgICBnZXRVc2VyRGF0YUJ5VG9rZW4sXHJcbiAgICAgIGZldGNoUHJvZmlsZVVzZXIsXHJcbiAgICAgIGdldENvbW1lbnRVc2VyLFxyXG4gICAgICBnZXRGYXZvdXJpdGVVc2VyLFxyXG4gICAgICBhZGRWaWRlb1RvUGxheWxpc3QsXHJcbiAgICAgIGNsZWFyUHJvZmlsZVVzZXIsXHJcbiAgICAgIHJlbW92ZVZpZGVvRnJvbVBsYXlsaXN0LFxyXG4gICAgICBzZXRDdXJyZW50VmlkZW8sXHJcbiAgICAgIGFkZENvbW1lbnQsXHJcbiAgICAgIGVkaXRDb21tZW50LFxyXG4gICAgICByZW1vdmVDb21tZW50RnJvbVBsYXlsaXN0LFxyXG4gICAgICBhZGRGYXZvdXJpdGUsXHJcbiAgICAgIHJlbW92ZUZhdm91cml0ZSxcclxuICAgICAgdXBsb2FkRmlsZVxyXG4gICAgfX0+XHJcbiAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICAgIDwvTGF5b3V0PlxyXG4gICAgPC9Db250ZXh0UHJvdmlkZXI+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHA7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZnJhbWVyLW1vdGlvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzLWV4YWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInF1ZXJ5c3RyaW5nXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1qc3gvc3R5bGVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==