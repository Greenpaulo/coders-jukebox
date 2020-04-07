module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

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


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



const Layout = props => __jsx("div", {
  className: "jsx-1710726789"
}, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, null, __jsx("title", {
  className: "jsx-1710726789"
}, "CodeTunes"), __jsx("link", {
  href: "https://fonts.googleapis.com/css2?family=Baloo+Thambi+2&display=swap",
  rel: "stylesheet",
  className: "jsx-1710726789"
}), __jsx("link", {
  rel: "stylesheet",
  href: "https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css",
  className: "jsx-1710726789"
})), __jsx(_Navbar__WEBPACK_IMPORTED_MODULE_3__["default"], null), props.children, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "1710726789"
}, "*{box-sizing:border-box;margin:0;padding:0;}body{font-family:'Baloo Thambi 2',sans-serif;font-size:16px;font-weight:400;line-height:1.8em;background-color:purple;}.container{max-width:1100px;margin:auto;overflow:hidden;}a{-webkit-text-decoration:none;text-decoration:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxDb2RpbmdcXE15UHJvamVjdHNcXGNvZGVycy1qdWtlYm94XFxjb21wb25lbnRzXFxMYXlvdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZXVCLEFBSStCLEFBTW1CLEFBUXhCLEFBTUksaUJBTFQsS0FkSCxPQWVPLEVBZE4sU0FLSyxDQUpqQixJQWNBLEtBSUEsS0Fia0IsZ0JBQ0Usa0JBQ00sd0JBQzFCIiwiZmlsZSI6IkM6XFxDb2RpbmdcXE15UHJvamVjdHNcXGNvZGVycy1qdWtlYm94XFxjb21wb25lbnRzXFxMYXlvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gJy4vTmF2YmFyJztcclxuXHJcblxyXG5jb25zdCBMYXlvdXQgPSAocHJvcHMpID0+IChcclxuICA8ZGl2PlxyXG4gICAgPEhlYWQ+XHJcbiAgICAgIDx0aXRsZT5Db2RlVHVuZXM8L3RpdGxlPlxyXG4gICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1CYWxvbytUaGFtYmkrMiZkaXNwbGF5PXN3YXBcIiByZWw9XCJzdHlsZXNoZWV0XCI+PC9saW5rPlxyXG4gICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vc3RhY2twYXRoLmJvb3RzdHJhcGNkbi5jb20vZm9udC1hd2Vzb21lLzQuNy4wL2Nzcy9mb250LWF3ZXNvbWUubWluLmNzc1wiLz5cclxuICAgIDwvSGVhZD5cclxuICAgIDxOYXZiYXIvPlxyXG4gICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgXHJcblxyXG4gICAgPHN0eWxlIGdsb2JhbCBqc3g+e2BcclxuICAgIFxyXG4gICAgICAqIHtcclxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBib2R5IHtcclxuICAgICAgICBmb250LWZhbWlseTogJ0JhbG9vIFRoYW1iaSAyJywgc2Fucy1zZXJpZjtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMS44ZW07XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcHVycGxlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuY29udGFpbmVyIHtcclxuICAgICAgICBtYXgtd2lkdGg6IDExMDBweDtcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgfVxyXG5cclxuICAgICAgYSB7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICB9XHJcbiAgICBcclxuICAgIGB9IFxyXG4gICAgPC9zdHlsZT5cclxuICAgIFxyXG4gIDwvZGl2PlxyXG4pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Coding\\\\MyProjects\\\\coders-jukebox\\\\components\\\\Layout.js */"));

/* harmony default export */ __webpack_exports__["default"] = (Layout);

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
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/Link */ "next/Link");
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_Link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Coding\\MyProjects\\coders-jukebox\\components\\Navbar.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const Navbar = () => __jsx("nav", {
  id: "navbar",
  className: "jsx-1856690977",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 3
  }
}, __jsx("div", {
  className: "jsx-1856690977" + " " + "container",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }
}, __jsx("div", {
  id: "nav-content",
  className: "jsx-1856690977",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 7
  }
}, __jsx("div", {
  id: "logo",
  className: "jsx-1856690977",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 9
  }
}, __jsx(next_Link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 11
  }
}, __jsx("a", {
  className: "jsx-1856690977",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 13
  }
}, __jsx("h1", {
  className: "jsx-1856690977",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 15
  }
}, "CodeTunes")))), __jsx("div", {
  id: "search",
  className: "jsx-1856690977",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 9
  }
}, __jsx("div", {
  id: "main-searchbar",
  className: "jsx-1856690977",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 11
  }
}, __jsx("label", {
  htmlFor: "search-input",
  className: "jsx-1856690977",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 13
  }
}, __jsx("svg", {
  id: "search-icon",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  className: "jsx-1856690977",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 15
  }
}, __jsx("path", {
  d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z",
  className: "jsx-1856690977",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 80
  }
}), __jsx("path", {
  d: "M0 0h24v24H0z",
  fill: "none",
  className: "jsx-1856690977",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 327
  }
}))), __jsx("input", {
  type: "text",
  name: "search-input",
  placeholder: "Search User",
  className: "jsx-1856690977",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 13
  }
}))), __jsx("ul", {
  id: "nav-menu",
  className: "jsx-1856690977",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 9
  }
}, __jsx(next_Link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/about",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 11
  }
}, __jsx("a", {
  className: "jsx-1856690977" + " " + "nav-link",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 13
  }
}, "About"))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "1856690977",
  __self: undefined
}, "#navbar.jsx-1856690977{padding:1.5rem 0;border-bottom:1px solid white;}#nav-content.jsx-1856690977{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}#logo.jsx-1856690977 h1.jsx-1856690977{color:white;font-size:2rem;text-transform:uppercase;}.nav-link.jsx-1856690977{color:white;}#search.jsx-1856690977{width:50%;}#searchbar.jsx-1856690977{width:100%;}label.jsx-1856690977{position:absolute;top:10px;left:12px;}#main-searchbar.jsx-1856690977{margin:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:relative;}#main-searchbar.jsx-1856690977 input.jsx-1856690977{width:100%;border-radius:23px;padding:0.6rem 0.5rem 0.5rem 2.3rem;font-size:1.1rem;}#main-searchbar.jsx-1856690977 input.jsx-1856690977:focus{outline:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxDb2RpbmdcXE15UHJvamVjdHNcXGNvZGVycy1qdWtlYm94XFxjb21wb25lbnRzXFxOYXZiYXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUNnQixBQUkwQixBQUtKLEFBTUQsQUFNQSxBQUlGLEFBSUMsQUFJTyxBQU1OLEFBTUQsQUFPRSxVQTFCZixDQUlBLEFBZ0JxQixDQTlCSixBQU1qQixBQWtCZSxDQWFmLElBaERnQyxDQTZCckIsU0FqQmdCLEFBa0JmLEdBWTBCLE9BWHRDLFVBOUJBLEtBWUEsY0E4Qm1CLFFBdENhLFNBdUNoQyxHQVJvQixrQkFDcEIscUZBL0JxQiw2RkFDckIiLCJmaWxlIjoiQzpcXENvZGluZ1xcTXlQcm9qZWN0c1xcY29kZXJzLWp1a2Vib3hcXGNvbXBvbmVudHNcXE5hdmJhci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvTGluayc7XHJcblxyXG5jb25zdCBOYXZiYXIgPSAoKSA9PiAoXHJcbiAgPG5hdiBpZD1cIm5hdmJhclwiPlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgPGRpdiBpZD1cIm5hdi1jb250ZW50XCI+XHJcbiAgICAgICAgPGRpdiBpZD1cImxvZ29cIj5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgIDxoMT5Db2RlVHVuZXM8L2gxPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgaWQ9XCJzZWFyY2hcIj5cclxuICAgICAgICAgIDxkaXYgaWQ9XCJtYWluLXNlYXJjaGJhclwiPlxyXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInNlYXJjaC1pbnB1dFwiPlxyXG4gICAgICAgICAgICAgIHsvKiA8aSBjbGFzcz1cImZhIGZhLXNlYXJjaFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT4gKi99XHJcbiAgICAgICAgICAgICAgPHN2ZyBpZD1cInNlYXJjaC1pY29uXCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgd2lkdGg9XCIyNFwiPjxwYXRoIGQ9XCJNMTUuNSAxNGgtLjc5bC0uMjgtLjI3QzE1LjQxIDEyLjU5IDE2IDExLjExIDE2IDkuNSAxNiA1LjkxIDEzLjA5IDMgOS41IDNTMyA1LjkxIDMgOS41IDUuOTEgMTYgOS41IDE2YzEuNjEgMCAzLjA5LS41OSA0LjIzLTEuNTdsLjI3LjI4di43OWw1IDQuOTlMMjAuNDkgMTlsLTQuOTktNXptLTYgMEM3LjAxIDE0IDUgMTEuOTkgNSA5LjVTNy4wMSA1IDkuNSA1IDE0IDcuMDEgMTQgOS41IDExLjk5IDE0IDkuNSAxNHpcIiAvPjxwYXRoIGQ9XCJNMCAwaDI0djI0SDB6XCIgZmlsbD1cIm5vbmVcIiAvPjwvc3ZnPlxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwic2VhcmNoLWlucHV0XCIgcGxhY2Vob2xkZXI9XCJTZWFyY2ggVXNlclwiIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPHVsIGlkPVwibmF2LW1lbnVcIj5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYWJvdXRcIj5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIj5BYm91dDwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICBcclxuXHJcbiAgICA8c3R5bGUganN4PntgXHJcbiAgICBcclxuICAgICAgI25hdmJhciB7XHJcbiAgICAgICAgcGFkZGluZzogMS41cmVtIDA7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHdoaXRlO1xyXG4gICAgICB9XHJcbiAgICBcclxuICAgICAgI25hdi1jb250ZW50IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAjbG9nbyBoMSB7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAubmF2LWxpbmsge1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgI3NlYXJjaCB7XHJcbiAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgfVxyXG5cclxuICAgICAgI3NlYXJjaGJhcntcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgfVxyXG5cclxuICAgICAgbGFiZWwge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDEwcHg7XHJcbiAgICAgICAgbGVmdDogMTJweDtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgI21haW4tc2VhcmNoYmFyIHtcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICNtYWluLXNlYXJjaGJhciBpbnB1dCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjNweDtcclxuICAgICAgICBwYWRkaW5nOiAwLjZyZW0gMC41cmVtIDAuNXJlbSAyLjNyZW07XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICNtYWluLXNlYXJjaGJhciBpbnB1dCA6Zm9jdXMge1xyXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgIH1cclxuXHJcbiAgICBgfTwvc3R5bGU+XHJcbiAgPC9uYXY+XHJcbilcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjtcclxuIl19 */\n/*@ sourceURL=C:\\\\Coding\\\\MyProjects\\\\coders-jukebox\\\\components\\\\Navbar.js */"));

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ }),

/***/ "./components/VideoItem.js":
/*!*********************************!*\
  !*** ./components/VideoItem.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

const VideoItem = ({
  video
}) => {
  return __jsx("div", {
    className: "jsx-1962109304" + " " + "video-item"
  }, __jsx("h3", {
    className: "jsx-1962109304"
  }, video.thumbnailURL), __jsx("h3", {
    className: "jsx-1962109304"
  }, video.title), __jsx("h3", {
    className: "jsx-1962109304"
  }, video.videoURL), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1962109304"
  }, ".video-item.jsx-1962109304{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;background-color:#cc22c9;border-radius:5px;margin-top:1rem;padding:1rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxDb2RpbmdcXE15UHJvamVjdHNcXGNvZGVycy1qdWtlYm94XFxjb21wb25lbnRzXFxWaWRlb0l0ZW0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBU2tCLEFBSXdCLDBFQUNpQixtSEFDTCx5QkFDUCxrQkFDRixnQkFDSCxhQUNmIiwiZmlsZSI6IkM6XFxDb2RpbmdcXE15UHJvamVjdHNcXGNvZGVycy1qdWtlYm94XFxjb21wb25lbnRzXFxWaWRlb0l0ZW0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBWaWRlb0l0ZW0gPSAoe3ZpZGVvfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInZpZGVvLWl0ZW1cIj5cclxuICAgICAgPGgzPnt2aWRlby50aHVtYm5haWxVUkx9PC9oMz5cclxuICAgICAgPGgzPnt2aWRlby50aXRsZX08L2gzPlxyXG4gICAgICA8aDM+e3ZpZGVvLnZpZGVvVVJMfTwvaDM+XHJcblxyXG4gICAgICBcclxuICAgICAgXHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuXHJcbiAgICAgICAgLnZpZGVvLWl0ZW0ge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNjYzIyYzk7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgICAgICAgcGFkZGluZzogMXJlbTtcclxuICAgICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBcclxuICAgICAgYH1cclxuICAgICAgPC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFZpZGVvSXRlbTsiXX0= */\n/*@ sourceURL=C:\\\\Coding\\\\MyProjects\\\\coders-jukebox\\\\components\\\\VideoItem.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (VideoItem);

/***/ }),

/***/ "./lib/withApollo.js":
/*!***************************!*\
  !*** ./lib/withApollo.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_with_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-with-apollo */ "next-with-apollo");
/* harmony import */ var next_with_apollo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_with_apollo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! apollo-boost */ "apollo-boost");
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(apollo_boost__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/react-hooks */ "@apollo/react-hooks");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// lib/withApollo.js



/* harmony default export */ __webpack_exports__["default"] = (next_with_apollo__WEBPACK_IMPORTED_MODULE_1___default()(({
  initialState
}) => {
  return new apollo_boost__WEBPACK_IMPORTED_MODULE_2___default.a({
    uri: 'http://localhost:3000/graphql',
    cache: new apollo_boost__WEBPACK_IMPORTED_MODULE_2__["InMemoryCache"]().restore(initialState || {})
  });
}, {
  render: ({
    Page,
    props
  }) => {
    return __jsx(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__["ApolloProvider"], {
      client: props.apollo
    }, __jsx(Page, props));
  }
}));

/***/ }),

/***/ "./pages/profile/[userId].js":
/*!***********************************!*\
  !*** ./pages/profile/[userId].js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/react-hooks */ "@apollo/react-hooks");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_withApollo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/withApollo */ "./lib/withApollo.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Layout */ "./components/Layout.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_VideoItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/VideoItem */ "./components/VideoItem.js");


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







const Profile = () => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"])();
  const {
    userId
  } = router.query;
  const USER_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default.a`
    query UserQuery{
      user(id:"${userId}") {
        firstName,
        lastName,
        _id,
        ownedVideos {
          thumbnailURL,
          title,
          videoURL
        },
        playlistComments{
          content
        }
      }
    }
  `;
  const {
    loading,
    data
  } = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__["useQuery"])(USER_QUERY);

  if (loading || !data) {
    return __jsx("h1", null, "loading...");
  }

  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_5__["default"], null, __jsx("div", {
    className: "jsx-709510860" + " " + "container"
  }, __jsx("section", {
    id: "user-info",
    className: "jsx-709510860"
  }, __jsx("h2", {
    className: "jsx-709510860"
  }, data.user.firstName, " ", data.user.lastName)), __jsx("section", {
    id: "playlist",
    className: "jsx-709510860"
  }, __jsx("h2", {
    className: "jsx-709510860"
  }, "Playlist"), data.user.ownedVideos.map(video => __jsx(_components_VideoItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
    video: video
  })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "709510860"
  }, "#user-info.jsx-709510860{margin-top:2rem;}#playlist.jsx-709510860{margin-top:4rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxDb2RpbmdcXE15UHJvamVjdHNcXGNvZGVycy1qdWtlYm94XFxwYWdlc1xccHJvZmlsZVxcW3VzZXJJZF0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0RvQixBQUtVLEFBSW1CLGdCQUpsQixBQUtBIiwiZmlsZSI6IkM6XFxDb2RpbmdcXE15UHJvamVjdHNcXGNvZGVycy1qdWtlYm94XFxwYWdlc1xccHJvZmlsZVxcW3VzZXJJZF0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcclxuaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tICdAYXBvbGxvL3JlYWN0LWhvb2tzJztcclxuaW1wb3J0IHdpdGhBcG9sbG8gZnJvbSAnLi4vLi4vbGliL3dpdGhBcG9sbG8nO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTGF5b3V0JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBWaWRlb0l0ZW0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9WaWRlb0l0ZW0nO1xyXG5cclxuXHJcblxyXG5jb25zdCBQcm9maWxlID0gKCkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgY29uc3QgeyB1c2VySWQgfSA9IHJvdXRlci5xdWVyeVxyXG5cclxuICBjb25zdCBVU0VSX1FVRVJZID0gZ3FsYFxyXG4gICAgcXVlcnkgVXNlclF1ZXJ5e1xyXG4gICAgICB1c2VyKGlkOlwiJHt1c2VySWR9XCIpIHtcclxuICAgICAgICBmaXJzdE5hbWUsXHJcbiAgICAgICAgbGFzdE5hbWUsXHJcbiAgICAgICAgX2lkLFxyXG4gICAgICAgIG93bmVkVmlkZW9zIHtcclxuICAgICAgICAgIHRodW1ibmFpbFVSTCxcclxuICAgICAgICAgIHRpdGxlLFxyXG4gICAgICAgICAgdmlkZW9VUkxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHBsYXlsaXN0Q29tbWVudHN7XHJcbiAgICAgICAgICBjb250ZW50XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgYDtcclxuXHJcbiAgY29uc3QgeyBsb2FkaW5nLCBkYXRhIH0gPSB1c2VRdWVyeShVU0VSX1FVRVJZKTtcclxuXHJcbiAgaWYgKGxvYWRpbmcgfHwgIWRhdGEpIHtcclxuICAgIHJldHVybiA8aDE+bG9hZGluZy4uLjwvaDE+O1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxMYXlvdXQ+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgPHNlY3Rpb24gaWQ9XCJ1c2VyLWluZm9cIj5cclxuICAgICAgICAgIDxoMj57ZGF0YS51c2VyLmZpcnN0TmFtZX0ge2RhdGEudXNlci5sYXN0TmFtZX08L2gyPlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuXHJcbiAgICAgICAgPHNlY3Rpb24gaWQ9XCJwbGF5bGlzdFwiPlxyXG4gICAgICAgICAgPGgyPlBsYXlsaXN0PC9oMj5cclxuICAgICAgICAgIHtkYXRhLnVzZXIub3duZWRWaWRlb3MubWFwKHZpZGVvID0+IChcclxuICAgICAgICAgICAgPFZpZGVvSXRlbSB2aWRlbz17dmlkZW99IC8+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuXHJcblxyXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICBcclxuICAgICAgICAgICN1c2VyLWluZm8ge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAycmVtXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgI3BsYXlsaXN0IHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogNHJlbTtcclxuICAgICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBgfTwvc3R5bGU+XHJcblxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoQXBvbGxvKFByb2ZpbGUpOyJdfQ== */\n/*@ sourceURL=C:\\\\Coding\\\\MyProjects\\\\coders-jukebox\\\\pages\\\\profile\\\\[userId].js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_lib_withApollo__WEBPACK_IMPORTED_MODULE_4__["default"])(Profile));

/***/ }),

/***/ 4:
/*!*****************************************!*\
  !*** multi ./pages/profile/[userId].js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Coding\MyProjects\coders-jukebox\pages\profile\[userId].js */"./pages/profile/[userId].js");


/***/ }),

/***/ "@apollo/react-hooks":
/*!**************************************!*\
  !*** external "@apollo/react-hooks" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@apollo/react-hooks");

/***/ }),

/***/ "apollo-boost":
/*!*******************************!*\
  !*** external "apollo-boost" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-boost");

/***/ }),

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),

/***/ "next-with-apollo":
/*!***********************************!*\
  !*** external "next-with-apollo" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-with-apollo");

/***/ }),

/***/ "next/Link":
/*!****************************!*\
  !*** external "next/Link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/Link");

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
//# sourceMappingURL=[userId].js.map