module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/profile/[userId].js");
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

/***/ "./apis/youtube.js":
/*!*************************!*\
  !*** ./apis/youtube.js ***!
  \*************************/
/*! exports provided: KEY, youtube */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KEY", function() { return KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "youtube", function() { return youtube; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config/keys */ "./config/keys.js");
/* harmony import */ var _config_keys__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_config_keys__WEBPACK_IMPORTED_MODULE_1__);


const KEY = _config_keys__WEBPACK_IMPORTED_MODULE_1__["YOUTUBEAPI_KEY"];
const youtube = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: _config_keys__WEBPACK_IMPORTED_MODULE_1__["YOUTUBEAPI_KEY"]
  }
});

/***/ }),

/***/ "./components/AboutMe.js":
/*!*******************************!*\
  !*** ./components/AboutMe.js ***!
  \*******************************/
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


const AboutMe = ({
  profileUser
}) => {
  return __jsx("section", {
    id: "about-me",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2599144087", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_2__["default"].reversePinkGradient, _css_variables_colors__WEBPACK_IMPORTED_MODULE_2__["default"].primary]]])
  }, __jsx("h2", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2599144087", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_2__["default"].reversePinkGradient, _css_variables_colors__WEBPACK_IMPORTED_MODULE_2__["default"].primary]]])
  }, "About ", profileUser.firstName), profileUser.about !== null && __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2599144087", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_2__["default"].reversePinkGradient, _css_variables_colors__WEBPACK_IMPORTED_MODULE_2__["default"].primary]]])
  }, profileUser.about), profileUser.about === null && __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2599144087", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_2__["default"].reversePinkGradient, _css_variables_colors__WEBPACK_IMPORTED_MODULE_2__["default"].primary]]])
  }, "There's nothing here yet!"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2599144087",
    dynamic: [_css_variables_colors__WEBPACK_IMPORTED_MODULE_2__["default"].reversePinkGradient, _css_variables_colors__WEBPACK_IMPORTED_MODULE_2__["default"].primary]
  }, `section#about-me.__jsx-style-dynamic-selector{border:1px solid ${_css_variables_colors__WEBPACK_IMPORTED_MODULE_2__["default"].primary};border-radius:10px;padding:2rem;width:84%;margin:3rem auto;}p.__jsx-style-dynamic-selector{padding:2rem;font-size:1.2rem;line-height:2.5rem;}@media (max-width:900px){section#about-me.__jsx-style-dynamic-selector{width:90%;padding:2rem 1rem 2rem 1rem;}h2.__jsx-style-dynamic-selector{margin-left:1rem;}}@media (max-width:660px){section#about-me.__jsx-style-dynamic-selector{padding-bottom:1rem;}}@media (max-width:470px){p.__jsx-style-dynamic-selector{padding:1rem;margin-top:0.5rem;}}@media (max-width:400px){p.__jsx-style-dynamic-selector{font-size:1rem;padding:0.5rem;}}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxDb2RpbmdcXE15UHJvamVjdHNcXGNvZGVycy1qdWtlYm94XFxjb21wb25lbnRzXFxBYm91dE1lLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1CZ0IsQUFLdUQsQUFRakMsQUFRRCxBQUtPLEFBTUcsQUFNUCxBQU9FLFVBdkJhLEdBUmIsQUF5QkcsRUFPSCxFQW5CakIsR0FNQSxVQWxCbUIsQUFnQ25CLENBUEEsT0FqQkEsUUFqQm1CLEdBVXJCLGdCQVRlLGFBQ0gsVUFDTyxpQkFDbkIiLCJmaWxlIjoiQzpcXENvZGluZ1xcTXlQcm9qZWN0c1xcY29kZXJzLWp1a2Vib3hcXGNvbXBvbmVudHNcXEFib3V0TWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY29sb3JzIGZyb20gJy4uL2Nzcy12YXJpYWJsZXMvY29sb3JzJztcclxuXHJcbmNvbnN0IEFib3V0TWUgPSAoe3Byb2ZpbGVVc2VyfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBpZD1cImFib3V0LW1lXCI+XHJcbiAgICAgIDxoMj5BYm91dCB7cHJvZmlsZVVzZXIuZmlyc3ROYW1lfTwvaDI+XHJcbiAgICAgIHtwcm9maWxlVXNlci5hYm91dCAhPT0gbnVsbCAmJlxyXG4gICAgICAgIDxwPlxyXG4gICAgICAgICAge3Byb2ZpbGVVc2VyLmFib3V0fVxyXG4gICAgICAgIDwvcD5cclxuICAgICAgfVxyXG4gICAgICB7cHJvZmlsZVVzZXIuYWJvdXQgPT09IG51bGwgJiZcclxuICAgICAgICA8cD5cclxuICAgICAgICAgIFRoZXJlJ3Mgbm90aGluZyBoZXJlIHlldCFcclxuICAgICAgICA8L3A+XHJcbiAgICAgIH1cclxuICAgIFxyXG4gICAgXHJcbiAgICBcclxuICAgIDxzdHlsZSBqc3g+e2BcclxuICAgIFxyXG4gICAgICBzZWN0aW9uI2Fib3V0LW1lIHtcclxuICAgICAgICAvKiBiYWNrZ3JvdW5kICA6ICR7Y29sb3JzLnJldmVyc2VQaW5rR3JhZGllbnR9OyAqL1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICR7Y29sb3JzLnByaW1hcnl9O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgcGFkZGluZzogMnJlbTtcclxuICAgICAgICB3aWR0aDogODQlO1xyXG4gICAgICAgIG1hcmdpbjogM3JlbSBhdXRvO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBwIHtcclxuICAgICAgICBwYWRkaW5nOiAycmVtO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyLjVyZW07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8qIE1lZGlhIHF1ZXJpZXMgKi9cclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDkwMHB4KXtcclxuICAgICAgICBzZWN0aW9uI2Fib3V0LW1lIHtcclxuICAgICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgICBwYWRkaW5nOiAycmVtIDFyZW0gMnJlbSAxcmVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaDIge1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDFyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNjYwcHgpe1xyXG4gICAgICAgIHNlY3Rpb24jYWJvdXQtbWUge1xyXG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDFyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNDcwcHgpe1xyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgcGFkZGluZzogMXJlbTtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0MDBweCl7XHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgfVxyXG5cclxuICAgIGB9PC9zdHlsZT5cclxuICAgIFxyXG4gICAgPC9zZWN0aW9uPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWJvdXRNZTtcclxuIl19 */
/*@ sourceURL=C:\\Coding\\MyProjects\\coders-jukebox\\components\\AboutMe.js */`));
};

/* harmony default export */ __webpack_exports__["default"] = (AboutMe);

/***/ }),

/***/ "./components/AddToPlaylist.js":
/*!*************************************!*\
  !*** ./components/AddToPlaylist.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _SearchBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SearchBar */ "./components/SearchBar.js");
/* harmony import */ var _apis_youtube__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../apis/youtube */ "./apis/youtube.js");
/* harmony import */ var _config_keys__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config/keys */ "./config/keys.js");
/* harmony import */ var _config_keys__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_config_keys__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _VideoItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./VideoItem */ "./components/VideoItem.js");
/* harmony import */ var _css_variables_colors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../css-variables/colors */ "./css-variables/colors.js");


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







const AddToPlaylist = () => {
  const {
    0: videos,
    1: setVideos
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);

  const searchVideoHandler = async searchInput => {
    const res = await _apis_youtube__WEBPACK_IMPORTED_MODULE_3__["youtube"].get('/search', {
      params: {
        type: 'video',
        part: 'snippet',
        maxResults: 5,
        key: _config_keys__WEBPACK_IMPORTED_MODULE_4__["YOUTUBEAPI_KEY"],
        q: searchInput
      }
    });
    const videoList = res.data.items;
    setVideos(videoList);
  };

  return __jsx("section", {
    id: "addToPlaylist",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2372216600", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_6__["default"].gradient, _css_variables_colors__WEBPACK_IMPORTED_MODULE_6__["default"].primary]]])
  }, __jsx("div", {
    id: "header",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2372216600", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_6__["default"].gradient, _css_variables_colors__WEBPACK_IMPORTED_MODULE_6__["default"].primary]]])
  }, __jsx("h2", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2372216600", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_6__["default"].gradient, _css_variables_colors__WEBPACK_IMPORTED_MODULE_6__["default"].primary]]])
  }, "Add To Playlist"), __jsx(_SearchBar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    placeholder: "Search for music",
    searchMode: "video",
    submitHandler: searchVideoHandler
  })), __jsx("div", {
    id: "videos",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2372216600", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_6__["default"].gradient, _css_variables_colors__WEBPACK_IMPORTED_MODULE_6__["default"].primary]]])
  }, videos.length === 0 && __jsx("h3", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2372216600", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_6__["default"].gradient, _css_variables_colors__WEBPACK_IMPORTED_MODULE_6__["default"].primary]]])
  }, "Search for music to add to your playlist!"), videos.map(video => {
    return __jsx(_VideoItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
      video: video,
      mode: "youtube",
      key: video.id.videoId
    });
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2372216600",
    dynamic: [_css_variables_colors__WEBPACK_IMPORTED_MODULE_6__["default"].gradient, _css_variables_colors__WEBPACK_IMPORTED_MODULE_6__["default"].primary]
  }, `section.__jsx-style-dynamic-selector{margin:2rem auto 3rem auto;width:84%;border-radius:10px;color:white;}#header.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;background:${_css_variables_colors__WEBPACK_IMPORTED_MODULE_6__["default"].gradient};padding:2rem;border-radius:10px 10px 0 0;}h2.__jsx-style-dynamic-selector{color:white;margin-right:7rem;width:25%;}#videos.__jsx-style-dynamic-selector{border:1px solid ${_css_variables_colors__WEBPACK_IMPORTED_MODULE_6__["default"].primary};border-radius:0 0 10px 10px;border-top:none;}h3.__jsx-style-dynamic-selector{padding:2rem;text-align:center;}@media (max-width:1100px){h2.__jsx-style-dynamic-selector{min-width:26%;margin-right:1rem;}}@media (max-width:830px){#header.__jsx-style-dynamic-selector{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}h2.__jsx-style-dynamic-selector{margin-bottom:1.5rem;min-width:60%;}}@media (max-width:520px){#header.__jsx-style-dynamic-selector{padding:1.5rem;}}@media (max-width:355px){h2.__jsx-style-dynamic-selector{min-width:100%;}h3.__jsx-style-dynamic-selector{padding:1.5rem;}}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxDb2RpbmdcXE15UHJvamVjdHNcXGNvZGVycy1qdWtlYm94XFxjb21wb25lbnRzXFxBZGRUb1BsYXlsaXN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThDYyxBQUlrQyxBQVNkLEFBU0QsQUFPa0MsQUFNakMsQUFPRyxBQU9RLEFBSUQsQUFPTixBQU1BLEFBSUEsWUEvQ0MsQ0FhQSxDQU9FLENBa0JwQixBQU1BLEFBSUEsTUFqQmdCLE1BakROLEdBbUJBLENBYVosQ0FPRSxHQVdBLEVBL0NtQixHQWlCckIsTUFLOEIsVUFyQmhCLFlBQ2QsTUFJMEMsQUFpQnhCLElBbUJoQixZQWxCRix3QkFmZSxhQUNlLDRCQUM5QiIsImZpbGUiOiJDOlxcQ29kaW5nXFxNeVByb2plY3RzXFxjb2RlcnMtanVrZWJveFxcY29tcG9uZW50c1xcQWRkVG9QbGF5bGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBTZWFyY2hCYXIgZnJvbSAnLi9TZWFyY2hCYXInO1xyXG5pbXBvcnQgeyB5b3V0dWJlIH0gZnJvbSAnLi4vYXBpcy95b3V0dWJlJztcclxuaW1wb3J0IHsgWU9VVFVCRUFQSV9LRVkgfSBmcm9tICcuLi9jb25maWcva2V5cyc7XHJcbmltcG9ydCBWaWRlb0l0ZW0gZnJvbSAnLi9WaWRlb0l0ZW0nO1xyXG5pbXBvcnQgY29sb3JzIGZyb20gJy4uL2Nzcy12YXJpYWJsZXMvY29sb3JzJztcclxuXHJcbmNvbnN0IEFkZFRvUGxheWxpc3QgPSAoKSA9PiB7XHJcblxyXG4gIGNvbnN0IFt2aWRlb3MsIHNldFZpZGVvc10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIGNvbnN0IHNlYXJjaFZpZGVvSGFuZGxlciA9IGFzeW5jIChzZWFyY2hJbnB1dCkgPT4ge1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgeW91dHViZS5nZXQoJy9zZWFyY2gnLCB7XHJcbiAgICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgICB0eXBlOiAndmlkZW8nLFxyXG4gICAgICAgICAgcGFydDogJ3NuaXBwZXQnLFxyXG4gICAgICAgICAgbWF4UmVzdWx0czogNSxcclxuICAgICAgICAgIGtleTogWU9VVFVCRUFQSV9LRVksXHJcbiAgICAgICAgICBxOiBzZWFyY2hJbnB1dFxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuXHJcbiAgICBjb25zdCB2aWRlb0xpc3QgPSByZXMuZGF0YS5pdGVtcztcclxuICAgIHNldFZpZGVvcyh2aWRlb0xpc3QpO1xyXG4gIH1cclxuXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBpZD1cImFkZFRvUGxheWxpc3RcIj5cclxuICAgICAgPGRpdiBpZD1cImhlYWRlclwiPlxyXG4gICAgICAgIDxoMj5BZGQgVG8gUGxheWxpc3Q8L2gyPlxyXG4gICAgICAgIDxTZWFyY2hCYXIgcGxhY2Vob2xkZXI9J1NlYXJjaCBmb3IgbXVzaWMnIHNlYXJjaE1vZGU9XCJ2aWRlb1wiIHN1Ym1pdEhhbmRsZXI9e3NlYXJjaFZpZGVvSGFuZGxlcn0vPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcblxyXG4gICAgICA8ZGl2IGlkPVwidmlkZW9zXCI+XHJcbiAgICAgICAgeyB2aWRlb3MubGVuZ3RoID09PSAwICYmXHJcbiAgICAgICAgICA8aDM+U2VhcmNoIGZvciBtdXNpYyB0byBhZGQgdG8geW91ciBwbGF5bGlzdCE8L2gzPlxyXG4gICAgICAgIH1cclxuICAgICAgICB7dmlkZW9zLm1hcCh2aWRlbyA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8VmlkZW9JdGVtIHZpZGVvPXt2aWRlb30gbW9kZT1cInlvdXR1YmVcIiBrZXk9e3ZpZGVvLmlkLnZpZGVvSWR9Lz5cclxuICAgICAgICAgIClcclxuICAgICAgICB9KX1cclxuICAgICAgPC9kaXY+XHJcblxyXG4gIDxzdHlsZSBqc3g+e2BcclxuXHJcbiAgICBzZWN0aW9uIHtcclxuICAgICAgbWFyZ2luOiAycmVtIGF1dG8gM3JlbSBhdXRvO1xyXG4gICAgICB3aWR0aDogODQlO1xyXG4gICAgICAvKiBwYWRkaW5nOiAzcmVtOyAqL1xyXG4gICAgICAvKiBib3JkZXI6IDFweCBzb2xpZCBibGFjazsgKi9cclxuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgI2hlYWRlciB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGJhY2tncm91bmQ6ICR7Y29sb3JzLmdyYWRpZW50fTtcclxuICAgICAgLyogbWFyZ2luOiAycmVtIDA7ICovXHJcbiAgICAgIC8qIGhlaWdodDogMTAwJTsgKi9cclxuICAgICAgcGFkZGluZzogMnJlbTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDAgMDtcclxuICAgIH1cclxuXHJcbiAgICBoMiB7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiA3cmVtO1xyXG4gICAgICB3aWR0aDogMjUlO1xyXG4gICAgfVxyXG5cclxuICAgICN2aWRlb3Mge1xyXG4gICAgICAvKiBwYWRkaW5nOiAxcmVtOyAqL1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAke2NvbG9ycy5wcmltYXJ5fTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMCAwIDEwcHggMTBweDtcclxuICAgICAgYm9yZGVyLXRvcDogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICBoMyB7XHJcbiAgICAgIHBhZGRpbmc6IDJyZW07XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAvKiBNZWRpYSBxdWVyaWVzICovXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogMTEwMHB4KSB7XHJcbiAgICAgIGgyIHtcclxuICAgICAgICBtaW4td2lkdGg6IDI2JTtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogODMwcHgpIHtcclxuICAgICAgI2hlYWRlciB7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgfVxyXG5cclxuICAgICAgaDIge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcclxuICAgICAgICBtaW4td2lkdGg6IDYwJTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1MjBweCkge1xyXG4gICAgICAjaGVhZGVyIHtcclxuICAgICAgICBwYWRkaW5nOiAxLjVyZW07XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogMzU1cHgpIHtcclxuICAgICAgaDIge1xyXG4gICAgICAgIG1pbi13aWR0aDogMTAwJTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaDMge1xyXG4gICAgICAgIHBhZGRpbmc6IDEuNXJlbTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICBgfTwvc3R5bGU+XHJcblxyXG5cclxuXHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBZGRUb1BsYXlsaXN0OyJdfQ== */
/*@ sourceURL=C:\\Coding\\MyProjects\\coders-jukebox\\components\\AddToPlaylist.js */`));
};

/* harmony default export */ __webpack_exports__["default"] = (AddToPlaylist);

/***/ }),

/***/ "./components/Comment.js":
/*!*******************************!*\
  !*** ./components/Comment.js ***!
  \*******************************/
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
/* harmony import */ var _css_variables_colors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../css-variables/colors */ "./css-variables/colors.js");


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





const Comment = ({
  comment
}) => {
  const commenterId = comment.commenter._id;
  const {
    getCommentUser,
    removeCommentFromPlaylist,
    currentUser,
    fetchProfileUser,
    editComment
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context_GlobalContext__WEBPACK_IMPORTED_MODULE_3__["GlobalContext"]);
  const {
    0: commentUser,
    1: setCommentUser
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    firstName: '',
    lastName: '',
    profilePhotoFilename: ''
  });
  const {
    0: editMode,
    1: setEditMode
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const editedContentRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    async function fetchData() {
      const user = await getCommentUser(comment.commenter._id);
      setCommentUser({
        firstName: user.firstName,
        lastName: user.lastName,
        profilePhotoFilename: user.profilePhotoFilename
      });
    }

    fetchData();
  }, []); // const [content, setContent] = useState('');
  // const handleChange = (e) => {
  //   setContent(e.target.value);
  // }

  const editCommentClickHandler = () => {
    //Show the edit comment textarea
    setEditMode(!editMode);
  };

  const editCommentSubmitHandler = e => {
    e.preventDefault(); // Check if the content is empty

    if (editedContentRef.current.value.trim().length === 0) {
      return;
    }

    editComment(comment._id, editedContentRef.current.value); // Exit edit mode

    setEditMode(false);
  };

  const convertDate = millisecs => {
    const d = new Date(+millisecs); // return d.toLocaleString();

    const dateArray = d.toLocaleString().split(", "); // console.log(array);

    return dateArray;
  };

  const removeCommentClickHandler = () => {
    removeCommentFromPlaylist(comment._id);
  };

  const commenterClickHandler = () => {
    fetchProfileUser(commenterId, false);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    key: comment._id,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2745832357", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary]]]) + " " + "comment"
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2745832357", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary]]]) + " " + "content"
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2745832357", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary]]]) + " " + "avatar"
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2745832357", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary]]]) + " " + "avatar-crop"
  }, commentUser.profilePhotoFilename !== null && commentUser.profilePhotoFilename !== '' && __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/profile/[userId]",
    as: `/profile/${commenterId}`
  }, __jsx("a", {
    onClick: commenterClickHandler,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2745832357", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary]]])
  }, __jsx("img", {
    src: `http://localhost:3000/image/${commentUser.profilePhotoFilename}`,
    alt: "avatar",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2745832357", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary]]])
  }))), (commentUser.profilePhotoFilename === null || commentUser.profilePhotoFilename === '') && __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/profile/[userId]",
    as: `/profile/${commenterId}`
  }, __jsx("a", {
    onClick: commenterClickHandler,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2745832357", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary]]])
  }, __jsx("img", {
    src: "/default-avatar.jpg",
    alt: "avatar",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2745832357", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary]]])
  }))))), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2745832357", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary]]]) + " " + "commenter"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/profile/[userId]",
    as: `/profile/${commenterId}`
  }, __jsx("a", {
    onClick: commenterClickHandler,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2745832357", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary]]])
  }, __jsx("h3", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2745832357", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary]]])
  }, commentUser.firstName, " ", commentUser.lastName)))), !editMode && __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2745832357", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary]]])
  }, comment.content), editMode && __jsx("section", {
    id: "edit-comment",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2745832357", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary]]])
  }, __jsx("form", {
    id: "edit-form",
    onSubmit: e => editCommentSubmitHandler(e),
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2745832357", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary]]])
  }, __jsx("textarea", {
    name: "edit-comment-input",
    id: "edit-comment-input",
    defaultValue: comment.content,
    cols: "30",
    rows: "5",
    ref: editedContentRef,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2745832357", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary]]])
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2745832357", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary]]]) + " " + "edit-btns"
  }, __jsx("button", {
    type: "submit",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2745832357", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary]]])
  }, __jsx("i", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2745832357", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary]]]) + " " + "fa fa-pencil"
  })), __jsx("button", {
    onClick: editCommentClickHandler,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2745832357", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary]]])
  }, __jsx("i", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2745832357", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary]]]) + " " + "fa fa-window-close"
  })))))), !editMode && __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2745832357", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary]]]) + " " + "date-container"
  }, currentUser.id === commenterId && !editMode && __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2745832357", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary]]]) + " " + "comment-btns"
  }, __jsx("button", {
    onClick: editCommentClickHandler,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2745832357", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary]]])
  }, __jsx("i", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2745832357", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary]]]) + " " + "fa fa-pencil-square-o"
  })), __jsx("button", {
    onClick: removeCommentClickHandler,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2745832357", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary]]])
  }, __jsx("i", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2745832357", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary]]]) + " " + "fa fa-trash"
  }))), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2745832357", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary]]]) + " " + "date-time"
  }, convertDate(comment.createdAt).map(date => {
    return __jsx("h4", {
      key: date,
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2745832357", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary]]]) + " " + "date"
    }, date);
  }))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2745832357",
    dynamic: [_css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary]
  }, `.comment.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;width:100%;border:1px solid black;border-radius:5px;margin:1rem 0;background-color:white;}.commenter.__jsx-style-dynamic-selector{height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;border-right:1px solid ${_css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary};}.commenter.__jsx-style-dynamic-selector h3.__jsx-style-dynamic-selector{margin:0 1rem;}.content.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;padding:1.2rem 0 1.2rem 1.2rem;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.comment-info.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-left:1rem;}.avatar.__jsx-style-dynamic-selector{max-height:50px;}.avatar-crop.__jsx-style-dynamic-selector{max-width:50px;max-height:50px;overflow:hidden;border-radius:50%;}img.__jsx-style-dynamic-selector{max-width:50px;max-height:75px;}h4.__jsx-style-dynamic-selector{margin-right:1rem;text-align:center;}p.__jsx-style-dynamic-selector{margin:0 1.5rem;word-wrap:break-word;width:650px;}.date-container.__jsx-style-dynamic-selector{margin:1rem 0 1rem auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;padding-right:0.5rem;border-left:1px solid ${_css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary};}.date-time.__jsx-style-dynamic-selector{margin-top:0.5rem;}.date-container.__jsx-style-dynamic-selector h4.__jsx-style-dynamic-selector{font-size:0.9rem;padding:0 1rem 0 1.5rem;width:100%;}.comment-btns.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:40px;margin:0 auto;padding-left:1.15rem;}button.__jsx-style-dynamic-selector{background-color:white;color:white;border:none;cursor:pointer;font-size:1rem;position:relative;}i.__jsx-style-dynamic-selector{color:${_css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary};font-size:1.5rem;-webkit-transition:color 0.2s ease-in-out;transition:color 0.2s ease-in-out;}.comment-btns.__jsx-style-dynamic-selector i.__jsx-style-dynamic-selector{position:absolute;}i.fa-pencil-square-o.__jsx-style-dynamic-selector{top:8px;left:-2px;}i.fa-trash.__jsx-style-dynamic-selector{top:6px;left:0px;}i.__jsx-style-dynamic-selector:hover{color:#e5305a;}button.__jsx-style-dynamic-selector:focus{outline:none;}section#edit-comment.__jsx-style-dynamic-selector{width:85%;margin-left:1rem;}form#edit-form.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}textarea.__jsx-style-dynamic-selector{width:100%;font:inherit;padding:0.5rem;}#edit-comment.__jsx-style-dynamic-selector button.__jsx-style-dynamic-selector{height:50px;padding:0 0.5rem;}.edit-btns.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}i.fa-pencil.__jsx-style-dynamic-selector{margin-left:0.5rem;}i.fa-window-close.__jsx-style-dynamic-selector{margin-right:0.5rem;}@media (max-width:1150px ){p.__jsx-style-dynamic-selector{width:400px;}}@media (max-width:1070px ){p.__jsx-style-dynamic-selector{width:350px;}}@media (max-width:1000px ){p.__jsx-style-dynamic-selector{width:300px;}.avatar.__jsx-style-dynamic-selector{display:none;}.content.__jsx-style-dynamic-selector{padding-left:0.5rem;}}@media (max-width:860px){.comment.__jsx-style-dynamic-selector{display:grid;position:relative;}.date-container.__jsx-style-dynamic-selector{position:absolute;top:-11px;right:-7px;border:none;}.edit-btns.__jsx-style-dynamic-selector{position:absolute;top:2px;right:1px;border:none;}textarea.__jsx-style-dynamic-selector{margin-top:1.4rem;}.date-time.__jsx-style-dynamic-selector{display:none;}}@media (max-width:830px){.content.__jsx-style-dynamic-selector{display:grid;width:100%;}.comment.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}p.__jsx-style-dynamic-selector{width:480px;margin-top:1.5rem;}.avatar.__jsx-style-dynamic-selector{display:block;position:absolute;top:18px;left:16px;}.commenter.__jsx-style-dynamic-selector h3.__jsx-style-dynamic-selector{margin:0.7rem 0rem 0rem 4.3rem;}.commenter.__jsx-style-dynamic-selector{border:none;}section#edit-comment.__jsx-style-dynamic-selector{width:92%;}}@media (max-width:800px ){p.__jsx-style-dynamic-selector{width:59vw;}}@media (max-width:768px ){.commenter.__jsx-style-dynamic-selector{border-right:none;}p.__jsx-style-dynamic-selector{width:55vw;}.content.__jsx-style-dynamic-selector{display:grid;}}@media (max-width:660px){p.__jsx-style-dynamic-selector{width:68vw;}}@media (max-width:610px){section#edit-comment.__jsx-style-dynamic-selector{width:90%;}.content.__jsx-style-dynamic-selector{padding-left:0rem;}h3.__jsx-style-dynamic-selector{padding-left:0.6rem;}}@media (max-width:560px){p.__jsx-style-dynamic-selector{font-size:0.9rem;}}@media (max-width:500px){p.__jsx-style-dynamic-selector{width:65vw;}.comment.__jsx-style-dynamic-selector{padding-top:1rem;}.avatar.__jsx-style-dynamic-selector{top:33px;}}@media (max-width:440px){p.__jsx-style-dynamic-selector{width:63vw;}}@media (max-width:420px){p.__jsx-style-dynamic-selector{width:69vw;}}@media (max-width:360px){p.__jsx-style-dynamic-selector{width:65vw;}}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxDb2RpbmdcXE15UHJvamVjdHNcXGNvZGVycy1qdWtlYm94XFxjb21wb25lbnRzXFxDb21tZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRKa0IsQUFJc0IsQUFVRCxBQU9FLEFBSUQsQUFPQSxBQU9HLEFBSUQsQUFPQSxBQUtHLEFBS0YsQUFRUSxBQVVOLEFBSUQsQUFNSixBQVFRLEFBU1ksQUFNakIsQUFJVixBQUtBLEFBS00sQUFJRCxBQUlILEFBS0csQUFJRixBQU1DLEFBS0MsQUFJTSxBQUlDLEFBTU4sQUFNQSxBQU1BLEFBSUMsQUFJTyxBQVdQLEFBS0ssQUFPQSxBQU9BLEFBSUwsQUFNQSxBQUtBLEFBSUQsQUFLRSxBQU9pQixBQUluQixBQUlGLEFBTUMsQUFhTyxBQU9QLEFBSUUsQUFNRixBQU1ELEFBSVEsQUFJRSxBQU9ILEFBTU4sQUFLTSxBQUlSLEFBT0UsQUFPQSxBQU9BLFFBek9ILEFBS0QsQ0FnTlQsQ0FuTWlCLEFBMkhqQixBQTBDQSxDQTVKYSxBQXlIYixBQW1CQSxBQVVBLEFBNEJBLEFBZ0JBLEFBT0EsQUFRQSxDQWpWZSxBQXNJRSxBQW1CakIsQUFNQSxBQU1BLEFBeURvQixBQWdCcEIsQ0EzSEYsQUFzREUsQUFlb0IsQUF1QnBCLEFBTWEsQUEyRGIsQ0F6UUEsQUF3R0YsQUFvSHNCLENBdE1GLEFBT0EsQ0FYbEIsQUF1QnVCLENBb0JHLEFBdUM1QixBQWdNRSxBQVdBLENBN1FvQixBQXVCcEIsQUFpQ0YsQUFLQSxBQXVGYyxBQU9GLEFBT1YsQUEwREEsQUEyQkEsQ0FqSkYsQ0FJQSxBQTBCRSxBQXVIQSxHQWxOWSxDQTVCRyxBQTJFQSxBQXFGZixFQWpCWSxDQTdFZCxDQXNFZSxDQXZEZixDQXdGRSxDQWpNa0IsQUFPbEIsQUFvSkEsQUFpREEsQ0FOVyxHQWpKQyxBQVFLLENBakRqQixBQTRKYyxDQXJKQSxFQWlGaEIsQUE2RGdCLEVBMUhELEFBZ0tELE1BdE1RLEFBcURMLENBbUhmLENBckpBLEVBOElBLEFBc0NBLENBaEtBLEFBc0JrQyxVQVBuQixHQXJEZixTQTFDZ0MsQUFxQm5CLEFBT0EsQUF3REMsQUFrRGhCLEFBZUEsQUErRUUsR0FwSWtCLFFBMUVlLEFBT1osQ0FsQkEsQUEwRUwsU0FZbEIsR0FoQzBCLEVBcUJELGdCQS9ERixLQWlFckIsT0FlRixnREFyQ3VCLEVBcENGLENBakJwQixVQVpjLE1BOEJiLEtBN0J5QixTQXNCekIsY0FyQm9CLFFBVXBCLFVBVGdCLGNBQ1MsY0E4REEsU0E3RHpCLDBGQThEdUIscUJBQzhCLG1EQUNyRCIsImZpbGUiOiJDOlxcQ29kaW5nXFxNeVByb2plY3RzXFxjb2RlcnMtanVrZWJveFxcY29tcG9uZW50c1xcQ29tbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IHVzZUNvbnRleHQsIHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgR2xvYmFsQ29udGV4dCB9IGZyb20gJy4uL2NvbnRleHQvR2xvYmFsQ29udGV4dCc7XHJcbmltcG9ydCBjb2xvcnMgZnJvbSAgJy4uL2Nzcy12YXJpYWJsZXMvY29sb3JzJztcclxuXHJcbmNvbnN0IENvbW1lbnQgPSAoe2NvbW1lbnR9KSA9PiB7XHJcbiAgXHJcbiAgY29uc3QgY29tbWVudGVySWQgPSBjb21tZW50LmNvbW1lbnRlci5faWQgXHJcbiAgXHJcbiAgY29uc3QgeyBnZXRDb21tZW50VXNlciwgcmVtb3ZlQ29tbWVudEZyb21QbGF5bGlzdCwgY3VycmVudFVzZXIsIGZldGNoUHJvZmlsZVVzZXIsIGVkaXRDb21tZW50IH0gPSB1c2VDb250ZXh0KEdsb2JhbENvbnRleHQpO1xyXG4gIFxyXG4gIGNvbnN0IFtjb21tZW50VXNlciwgc2V0Q29tbWVudFVzZXJdID0gdXNlU3RhdGUoe1xyXG4gICAgZmlyc3ROYW1lOiAnJyxcclxuICAgIGxhc3ROYW1lOicnLFxyXG4gICAgcHJvZmlsZVBob3RvRmlsZW5hbWU6ICcnXHJcbiAgfSk7XHJcbiAgXHJcbiAgY29uc3QgW2VkaXRNb2RlLCBzZXRFZGl0TW9kZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgXHJcbiAgY29uc3QgZWRpdGVkQ29udGVudFJlZiA9IHVzZVJlZigpO1xyXG5cclxuICBcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hEYXRhKCkge1xyXG4gICAgICBjb25zdCB1c2VyID0gYXdhaXQgZ2V0Q29tbWVudFVzZXIoY29tbWVudC5jb21tZW50ZXIuX2lkKTtcclxuICAgICAgc2V0Q29tbWVudFVzZXIoe1xyXG4gICAgICAgIGZpcnN0TmFtZTogdXNlci5maXJzdE5hbWUsXHJcbiAgICAgICAgbGFzdE5hbWU6IHVzZXIubGFzdE5hbWUsXHJcbiAgICAgICAgcHJvZmlsZVBob3RvRmlsZW5hbWU6IHVzZXIucHJvZmlsZVBob3RvRmlsZW5hbWVcclxuICAgICAgfSlcclxuICAgIH1cclxuICAgIGZldGNoRGF0YSgpO1xyXG4gIH0sIFtdKVxyXG5cclxuICAvLyBjb25zdCBbY29udGVudCwgc2V0Q29udGVudF0gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG4gIC8vIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XHJcbiAgLy8gICBzZXRDb250ZW50KGUudGFyZ2V0LnZhbHVlKTtcclxuICAvLyB9XHJcblxyXG4gIFxyXG4gIGNvbnN0IGVkaXRDb21tZW50Q2xpY2tIYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgLy9TaG93IHRoZSBlZGl0IGNvbW1lbnQgdGV4dGFyZWFcclxuICAgIHNldEVkaXRNb2RlKCFlZGl0TW9kZSk7IFxyXG4gIH1cclxuXHJcbiAgY29uc3QgZWRpdENvbW1lbnRTdWJtaXRIYW5kbGVyID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIC8vIENoZWNrIGlmIHRoZSBjb250ZW50IGlzIGVtcHR5XHJcbiAgICBpZiAoZWRpdGVkQ29udGVudFJlZi5jdXJyZW50LnZhbHVlLnRyaW0oKS5sZW5ndGggPT09IDApIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgZWRpdENvbW1lbnQoY29tbWVudC5faWQsIGVkaXRlZENvbnRlbnRSZWYuY3VycmVudC52YWx1ZSk7XHJcbiAgICAvLyBFeGl0IGVkaXQgbW9kZVxyXG4gICAgc2V0RWRpdE1vZGUoZmFsc2UpO1xyXG4gIH1cclxuXHJcbiAgXHJcbiAgY29uc3QgY29udmVydERhdGU9IChtaWxsaXNlY3MpID0+IHtcclxuICAgIGNvbnN0IGQgPSBuZXcgRGF0ZSgrbWlsbGlzZWNzKTtcclxuICAgIC8vIHJldHVybiBkLnRvTG9jYWxlU3RyaW5nKCk7XHJcbiAgICBjb25zdCBkYXRlQXJyYXkgPSBkLnRvTG9jYWxlU3RyaW5nKCkuc3BsaXQoXCIsIFwiKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKGFycmF5KTtcclxuICAgIHJldHVybiBkYXRlQXJyYXlcclxuICB9XHJcblxyXG4gIGNvbnN0IHJlbW92ZUNvbW1lbnRDbGlja0hhbmRsZXIgPSAoKSA9PiB7XHJcbiAgICByZW1vdmVDb21tZW50RnJvbVBsYXlsaXN0KGNvbW1lbnQuX2lkKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGNvbW1lbnRlckNsaWNrSGFuZGxlciA9ICgpID0+IHtcclxuICAgIGZldGNoUHJvZmlsZVVzZXIoY29tbWVudGVySWQsIGZhbHNlKTtcclxuICB9XHJcblxyXG5cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbW1lbnRcIiBrZXk9e2NvbW1lbnQuX2lkfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXZhdGFyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXZhdGFyLWNyb3BcIj5cclxuICAgICAgICAgICAgICB7Y29tbWVudFVzZXIucHJvZmlsZVBob3RvRmlsZW5hbWUgIT09IG51bGwgJiYgY29tbWVudFVzZXIucHJvZmlsZVBob3RvRmlsZW5hbWUgIT09ICcnICYmXHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Byb2ZpbGUvW3VzZXJJZF1cIiBhcz17YC9wcm9maWxlLyR7Y29tbWVudGVySWR9YH0+XHJcbiAgICAgICAgICAgICAgICAgIDxhIG9uQ2xpY2s9e2NvbW1lbnRlckNsaWNrSGFuZGxlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2BodHRwOi8vbG9jYWxob3N0OjMwMDAvaW1hZ2UvJHtjb21tZW50VXNlci5wcm9maWxlUGhvdG9GaWxlbmFtZX1gfSBhbHQ9XCJhdmF0YXJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIHsoY29tbWVudFVzZXIucHJvZmlsZVBob3RvRmlsZW5hbWUgPT09IG51bGwgfHwgY29tbWVudFVzZXIucHJvZmlsZVBob3RvRmlsZW5hbWUgPT09ICcnKSAmJlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9maWxlL1t1c2VySWRdXCIgYXM9e2AvcHJvZmlsZS8ke2NvbW1lbnRlcklkfWB9PlxyXG4gICAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXtjb21tZW50ZXJDbGlja0hhbmRsZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPScvZGVmYXVsdC1hdmF0YXIuanBnJyBhbHQ9XCJhdmF0YXJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbW1lbnRlclwiPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL3Byb2ZpbGUvW3VzZXJJZF1cIiBhcz17YC9wcm9maWxlLyR7Y29tbWVudGVySWR9YH0+XHJcbiAgICAgICAgICAgICAgPGEgb25DbGljaz17Y29tbWVudGVyQ2xpY2tIYW5kbGVyfT48aDM+e2NvbW1lbnRVc2VyLmZpcnN0TmFtZX0ge2NvbW1lbnRVc2VyLmxhc3ROYW1lfTwvaDM+PC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgIHshZWRpdE1vZGUgJiYgXHJcbiAgICAgICAgICAgICAgPHA+e2NvbW1lbnQuY29udGVudH08L3A+XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAge2VkaXRNb2RlICYmXHJcbiAgICAgICAgICAgIDxzZWN0aW9uIGlkPVwiZWRpdC1jb21tZW50XCI+XHJcbiAgICAgICAgICAgICAgPGZvcm0gaWQ9XCJlZGl0LWZvcm1cIiBvblN1Ym1pdD17KGUpID0+IGVkaXRDb21tZW50U3VibWl0SGFuZGxlcihlKX0+XHJcbiAgICAgICAgICAgICAgICA8dGV4dGFyZWEgbmFtZT1cImVkaXQtY29tbWVudC1pbnB1dFwiIGlkPVwiZWRpdC1jb21tZW50LWlucHV0XCIgZGVmYXVsdFZhbHVlPXtjb21tZW50LmNvbnRlbnR9IGNvbHM9XCIzMFwiIHJvd3M9XCI1XCIgcmVmPXtlZGl0ZWRDb250ZW50UmVmfT48L3RleHRhcmVhPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlZGl0LWJ0bnNcIj5cclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtcGVuY2lsXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtlZGl0Q29tbWVudENsaWNrSGFuZGxlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtd2luZG93LWNsb3NlXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICA8L2Rpdj4gICAgICBcclxuXHJcbiAgICAgICAgeyFlZGl0TW9kZSAmJiBcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGF0ZS1jb250YWluZXJcIj5cclxuICAgICAgICAgICAge2N1cnJlbnRVc2VyLmlkID09PSBjb21tZW50ZXJJZCAmJiAhZWRpdE1vZGUgJiZcclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbW1lbnQtYnRuc1wiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtlZGl0Q29tbWVudENsaWNrSGFuZGxlcn0+XHJcbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXBlbmNpbC1zcXVhcmUtb1wiPjwvaT5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtyZW1vdmVDb21tZW50Q2xpY2tIYW5kbGVyfT5cclxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtdHJhc2hcIj48L2k+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhdGUtdGltZVwiPlxyXG4gICAgICAgICAgICAgIHtjb252ZXJ0RGF0ZShjb21tZW50LmNyZWF0ZWRBdCkubWFwKGRhdGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDxoNCBjbGFzc05hbWU9XCJkYXRlXCIga2V5PXtkYXRlfT57ZGF0ZX08L2g0PlxyXG4gICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIH0gIFxyXG5cclxuICAgICAgICBcclxuXHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgIDwvPlxyXG5cclxuICAgIFxyXG5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG5cclxuICAgICAgLmNvbW1lbnQge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICBtYXJnaW46IDFyZW0gMDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmNvbW1lbnRlciB7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAke2NvbG9ycy5wcmltYXJ5fVxyXG4gICAgICB9XHJcblxyXG4gICAgICAuY29tbWVudGVyIGgzIHtcclxuICAgICAgICBtYXJnaW46IDAgMXJlbTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmNvbnRlbnQge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgcGFkZGluZzogMS4ycmVtIDAgMS4ycmVtIDEuMnJlbTtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuY29tbWVudC1pbmZvIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDFyZW07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5hdmF0YXIge1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDUwcHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5hdmF0YXItY3JvcCB7XHJcbiAgICAgICAgbWF4LXdpZHRoOiA1MHB4O1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGltZyB7XHJcbiAgICAgICAgbWF4LXdpZHRoOiA1MHB4O1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDc1cHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGg0IHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBwIHtcclxuICAgICAgICBtYXJnaW46IDAgMS41cmVtO1xyXG4gICAgICAgIC8qIG92ZXJmbG93LXk6IHNjcm9sbDsgKi9cclxuICAgICAgICAvKiBoZWlnaHQ6IDEwMHB4OyAqL1xyXG4gICAgICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuICAgICAgICB3aWR0aDogNjUwcHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5kYXRlLWNvbnRhaW5lciB7XHJcbiAgICAgICAgbWFyZ2luOiAxcmVtIDAgMXJlbSBhdXRvO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDAuNXJlbTtcclxuICAgICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICR7Y29sb3JzLnByaW1hcnl9O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuZGF0ZS10aW1lIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwLjVyZW07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5kYXRlLWNvbnRhaW5lciBoNCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgICAgcGFkZGluZzogMCAxcmVtIDAgMS41cmVtO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuY29tbWVudC1idG5zIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDEuMTVyZW07XHJcblxyXG4gICAgICB9XHJcblxyXG4gICAgICBidXR0b24ge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB9XHJcblxyXG4gICAgaSB7XHJcbiAgICAgIGNvbG9yOiAke2NvbG9ycy5wcmltYXJ5fTtcclxuICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICAgIHRyYW5zaXRpb246IGNvbG9yIDAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbW1lbnQtYnRucyBpIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgfVxyXG5cclxuICAgIGkuZmEtcGVuY2lsLXNxdWFyZS1vIHtcclxuICAgICAgdG9wOiA4cHg7XHJcbiAgICAgIGxlZnQ6IC0ycHg7XHJcbiAgICB9XHJcblxyXG4gICAgaS5mYS10cmFzaCB7XHJcbiAgICAgIHRvcDogNnB4O1xyXG4gICAgICBsZWZ0OiAwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgaTpob3ZlciB7XHJcbiAgICAgIGNvbG9yOiAjZTUzMDVhO1xyXG4gICAgfVxyXG5cclxuICAgIGJ1dHRvbjpmb2N1cyB7XHJcbiAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgc2VjdGlvbiNlZGl0LWNvbW1lbnQge1xyXG4gICAgICB3aWR0aDogODUlO1xyXG4gICAgICBtYXJnaW4tbGVmdDogMXJlbTtcclxuICAgIH1cclxuXHJcbiAgICBmb3JtI2VkaXQtZm9ybSB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHRleHRhcmVhIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGZvbnQ6IGluaGVyaXQ7XHJcbiAgICAgIHBhZGRpbmc6IDAuNXJlbTtcclxuICAgIH1cclxuXHJcbiAgICAjZWRpdC1jb21tZW50IGJ1dHRvbiB7XHJcbiAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgcGFkZGluZzogMCAwLjVyZW07XHJcbiAgICB9XHJcblxyXG4gICAgLmVkaXQtYnRucyB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB9XHJcblxyXG4gICAgaS5mYS1wZW5jaWwge1xyXG4gICAgICBtYXJnaW4tbGVmdDogMC41cmVtO1xyXG4gICAgfVxyXG5cclxuICAgIGkuZmEtd2luZG93LWNsb3NlIHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XHJcbiAgICB9XHJcblxyXG4gICAgLyogTWVkaWEgcXVlcmllcyAqL1xyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDExNTBweCApIHtcclxuICAgICAgcCB7XHJcbiAgICAgICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDEwNzBweCApIHtcclxuICAgICAgcCB7XHJcbiAgICAgICAgd2lkdGg6IDM1MHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDEwMDBweCApIHtcclxuICAgICAgcCB7XHJcbiAgICAgICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuYXZhdGFyIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuY29udGVudCB7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwLjVyZW07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8qIC5jb21tZW50IHtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICB9ICovXHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDg2MHB4KSB7XHJcbiAgICAgIC5jb21tZW50IHtcclxuICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmRhdGUtY29udGFpbmVyIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAtMTFweDtcclxuICAgICAgICByaWdodDogLTdweDtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5lZGl0LWJ0bnMge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDJweDtcclxuICAgICAgICByaWdodDogMXB4O1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGV4dGFyZWEge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEuNHJlbTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmRhdGUtdGltZSB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA4MzBweCkge1xyXG4gICAgICAuY29udGVudCB7XHJcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmNvbW1lbnQge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHAge1xyXG4gICAgICAgIHdpZHRoOiA0ODBweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxLjVyZW07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5hdmF0YXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDE4cHg7XHJcbiAgICAgICAgbGVmdDogMTZweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmNvbW1lbnRlciBoMyB7XHJcbiAgICAgICAgbWFyZ2luOiAwLjdyZW0gMHJlbSAwcmVtIDQuM3JlbTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmNvbW1lbnRlciB7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBzZWN0aW9uI2VkaXQtY29tbWVudCB7XHJcbiAgICAgICAgd2lkdGg6IDkyJTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCApIHtcclxuICAgICAgcCB7XHJcbiAgICAgICAgd2lkdGg6IDU5dnc7XHJcbiAgICAgICAgLyogbWFyZ2luLXJpZ2h0OiAwLjVyZW07ICovXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgLyogTWVkaWEgcXVlcmllcyAqL1xyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4ICkge1xyXG4gICAgICAuYXZhdGFyIHtcclxuICAgICAgICAvKiBkaXNwbGF5OiBub25lOyAqL1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuY29tbWVudGVyIHtcclxuICAgICAgICBib3JkZXItcmlnaHQ6IG5vbmU7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIHAge1xyXG4gICAgICAgIC8qIG92ZXJmbG93OiBzY3JvbGw7ICovXHJcbiAgICAgICAgLyogaGVpZ2h0OiAxMDBweDsgKi9cclxuICAgICAgICAvKiB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7ICovXHJcbiAgICAgICAgd2lkdGg6IDU1dnc7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5jb250ZW50IHtcclxuICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDY2MHB4KSB7XHJcbiAgICAgIHAge1xyXG4gICAgICAgIHdpZHRoOiA2OHZ3O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDYxMHB4KSB7XHJcbiAgICAgIHNlY3Rpb24jZWRpdC1jb21tZW50IHtcclxuICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuY29udGVudCB7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwcmVtO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBoMyB7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwLjZyZW07XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNTYwcHgpIHtcclxuICAgICAgcCB7XHJcbiAgICAgICAgLyogd2lkdGg6IDQ1dnc7ICovXHJcbiAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcclxuICAgICAgcCB7XHJcbiAgICAgICAgd2lkdGg6IDY1dnc7XHJcbiAgICAgICAgLyogZm9udC1zaXplOiAwLjlyZW07ICovXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5jb21tZW50IHtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMXJlbTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmF2YXRhciB7XHJcbiAgICAgICAgdG9wOiAzM3B4O1xyXG4gICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0NDBweCkge1xyXG4gICAgICBwIHtcclxuICAgICAgICB3aWR0aDogNjN2dztcclxuICAgICAgICAvKiBmb250LXNpemU6IDAuOXJlbTsgKi9cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0MjBweCkge1xyXG4gICAgICBwIHtcclxuICAgICAgICB3aWR0aDogNjl2dztcclxuICAgICAgICAvKiBmb250LXNpemU6IDAuOXJlbTsgKi9cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAzNjBweCkge1xyXG4gICAgICBwIHtcclxuICAgICAgICB3aWR0aDogNjV2dztcclxuICAgICAgICAvKiBmb250LXNpemU6IDAuOHJlbTsgKi9cclxuICAgICAgICAvKiBtYXJnaW4tbGVmdDogMXJlbTsgKi9cclxuICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgXHJcbiAgICBgfTwvc3R5bGU+XHJcblxyXG4gIDwvPlxyXG4gIClcclxufVxyXG5cclxuLy8gQ29tbWVudC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBjdHggPT4ge1xyXG4vLyAgIGdldENvbW1lbnREYXRhXHJcbi8vIH1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbW1lbnQ7Il19 */
/*@ sourceURL=C:\\Coding\\MyProjects\\coders-jukebox\\components\\Comment.js */`));
}; // Comment.getInitialProps = async ctx => {
//   getCommentData
// }


/* harmony default export */ __webpack_exports__["default"] = (Comment);

/***/ }),

/***/ "./components/CommentSection.js":
/*!**************************************!*\
  !*** ./components/CommentSection.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Comment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Comment */ "./components/Comment.js");
/* harmony import */ var _context_GlobalContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/GlobalContext */ "./context/GlobalContext.js");
/* harmony import */ var _css_variables_colors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../css-variables/colors */ "./css-variables/colors.js");


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





const CommentSection = ({
  profileUser
}) => {
  const {
    addComment,
    authState
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context_GlobalContext__WEBPACK_IMPORTED_MODULE_3__["GlobalContext"]);
  const {
    0: content,
    1: setContent
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');

  const handleChange = e => {
    setContent(e.target.value);
  };

  const commentSubmitHandler = e => {
    e.preventDefault();
    addComment(content);
    setContent('');
  };

  return __jsx("section", {
    id: "comment-section",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2998266889", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].gradient]]])
  }, __jsx("h2", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2998266889", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].gradient]]])
  }, "Comments"), __jsx("section", {
    id: "comments",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2998266889", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].gradient]]])
  }, profileUser.playlistComments.length === 0 && __jsx("h3", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2998266889", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].gradient]]])
  }, "Be the first to add a comment!"), profileUser.playlistComments.map(comment => __jsx(_Comment__WEBPACK_IMPORTED_MODULE_2__["default"], {
    comment: comment,
    key: comment._id
  }))), authState.authenticated === true && __jsx("section", {
    id: "add-comment",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2998266889", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].gradient]]])
  }, __jsx("form", {
    onSubmit: e => commentSubmitHandler(e),
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2998266889", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].gradient]]])
  }, __jsx("label", {
    htmlFor: "comment-input",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2998266889", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].gradient]]])
  }, "Add a comment"), __jsx("textarea", {
    name: "comment-input",
    id: "comment-input",
    value: content,
    cols: "30",
    rows: "3",
    onChange: handleChange,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2998266889", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].gradient]]])
  }), __jsx("button", {
    type: "submit",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2998266889", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].gradient]]])
  }, "Post"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2998266889",
    dynamic: [_css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].gradient]
  }, `section#comment-section.__jsx-style-dynamic-selector{margin:3rem 0;padding:3rem;border:1px solid black;border-radius:10px;color:black;background:${_css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].gradient};}section#comments.__jsx-style-dynamic-selector{margin-top:1rem;}form.__jsx-style-dynamic-selector{margin:1rem 0;}label.__jsx-style-dynamic-selector{font-weight:bold;font-size:1.2rem;}textarea.__jsx-style-dynamic-selector{margin-top:0.5rem;width:100%;font:inherit;font-size:1.2rem;padding:0.5rem;}button.__jsx-style-dynamic-selector{background-color:white;color:black;padding:0.75rem 1rem;border-radius:10px;margin:0.5rem 0;border:none;cursor:pointer;font-size:1rem;font-weight:bold;-webkit-transition:background-color 0.2s ease-in-out;transition:background-color 0.2s ease-in-out;}button.__jsx-style-dynamic-selector:hover{background-color:#eee;}@media (max-width:1150px ){section#comment-section.__jsx-style-dynamic-selector{width:80%;margin:auto;}}@media (max-width:660px ){section#comment-section.__jsx-style-dynamic-selector{width:95%;}}@media (max-width:620px ){section#comment-section.__jsx-style-dynamic-selector{width:95%;padding:2rem;}}@media (max-width:390px ){section#comment-section.__jsx-style-dynamic-selector{width:95%;padding:1.5rem;}}@media (max-width:360px ){section#comment-section.__jsx-style-dynamic-selector{padding:1rem;}}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxDb2RpbmdcXE15UHJvamVjdHNcXGNvZGVycy1qdWtlYm94XFxjb21wb25lbnRzXFxDb21tZW50U2VjdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvRGtCLEFBSXVCLEFBU0UsQUFJRixBQUlHLEFBS0MsQUFRRyxBQWNDLEFBT1YsQUFPQSxBQU9BLEFBUUEsQUFTRyxVQTlCRCxBQVFkLEFBTWUsQUFRRSxHQVVqQixDQW5GYSxBQWFmLEVBSkEsQ0FRbUIsQ0FLTixJQXNCYixBQVFFLENBdEJVLEFBcUNWLEVBUUEsRUExRXVCLEVBc0JWLEtBTGYsQ0FhcUIsT0FQRixRQXRCRSxNQThCRixHQVBGLFVBdEJILEtBdUJkLENBT2dCLE1BN0IwQixVQThCOUIsWUFDRyxlQUNBLEdBL0JmLFlBZ0NpQixpQkFDNEIsa0dBRTdDIiwiZmlsZSI6IkM6XFxDb2RpbmdcXE15UHJvamVjdHNcXGNvZGVycy1qdWtlYm94XFxjb21wb25lbnRzXFxDb21tZW50U2VjdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQ29tbWVudCBmcm9tICcuL0NvbW1lbnQnO1xyXG5pbXBvcnQgeyBHbG9iYWxDb250ZXh0IH0gZnJvbSAnLi4vY29udGV4dC9HbG9iYWxDb250ZXh0JztcclxuaW1wb3J0IGNvbG9ycyBmcm9tICcuLi9jc3MtdmFyaWFibGVzL2NvbG9ycyc7XHJcblxyXG5cclxuXHJcblxyXG5jb25zdCBDb21tZW50U2VjdGlvbiA9ICh7IHByb2ZpbGVVc2VyIH0pID0+IHtcclxuXHJcbiAgY29uc3QgeyBhZGRDb21tZW50LCBhdXRoU3RhdGV9ID0gdXNlQ29udGV4dChHbG9iYWxDb250ZXh0KTtcclxuXHJcbiAgY29uc3QgW2NvbnRlbnQsIHNldENvbnRlbnRdID0gdXNlU3RhdGUoJycpO1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgc2V0Q29udGVudChlLnRhcmdldC52YWx1ZSk7XHJcbiAgfVxyXG4gIFxyXG4gIGNvbnN0IGNvbW1lbnRTdWJtaXRIYW5kbGVyID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGFkZENvbW1lbnQoY29udGVudCk7XHJcbiAgICBzZXRDb250ZW50KCcnKTtcclxuICB9XHJcblxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gaWQ9XCJjb21tZW50LXNlY3Rpb25cIj5cclxuICAgICAgPGgyPkNvbW1lbnRzPC9oMj4gXHJcblxyXG4gICAgICA8c2VjdGlvbiBpZD1cImNvbW1lbnRzXCI+XHJcbiAgICAgICAge3Byb2ZpbGVVc2VyLnBsYXlsaXN0Q29tbWVudHMubGVuZ3RoID09PSAwICYmIFxyXG4gICAgICAgICAgPGgzPkJlIHRoZSBmaXJzdCB0byBhZGQgYSBjb21tZW50ITwvaDM+XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB7cHJvZmlsZVVzZXIucGxheWxpc3RDb21tZW50cy5tYXAoY29tbWVudCA9PiAoXHJcbiAgICAgICAgICA8Q29tbWVudCBjb21tZW50PXtjb21tZW50fSBrZXk9e2NvbW1lbnQuX2lkfS8+XHJcbiAgICAgICAgKVxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvc2VjdGlvbj5cclxuXHJcbiAgICAgIHthdXRoU3RhdGUuYXV0aGVudGljYXRlZCA9PT0gdHJ1ZSAmJlxyXG4gICAgICAgIDxzZWN0aW9uIGlkPVwiYWRkLWNvbW1lbnRcIj5cclxuICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXsoZSkgPT4gY29tbWVudFN1Ym1pdEhhbmRsZXIoZSl9PlxyXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImNvbW1lbnQtaW5wdXRcIj5BZGQgYSBjb21tZW50PC9sYWJlbD5cclxuICAgICAgICAgICAgPHRleHRhcmVhIG5hbWU9XCJjb21tZW50LWlucHV0XCIgaWQ9XCJjb21tZW50LWlucHV0XCIgdmFsdWU9e2NvbnRlbnR9IGNvbHM9XCIzMFwiIHJvd3M9XCIzXCIgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0+PC90ZXh0YXJlYT5cclxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+UG9zdDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICBcclxuICAgICAgc2VjdGlvbiNjb21tZW50LXNlY3Rpb24ge1xyXG4gICAgICAgIG1hcmdpbjogM3JlbSAwO1xyXG4gICAgICAgIHBhZGRpbmc6IDNyZW07XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgYmFja2dyb3VuZDogJHtjb2xvcnMuZ3JhZGllbnR9O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBzZWN0aW9uI2NvbW1lbnRzIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBmb3JtIHtcclxuICAgICAgICBtYXJnaW46IDFyZW0gMDtcclxuICAgICAgfVxyXG5cclxuICAgICAgbGFiZWwge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0ZXh0YXJlYSB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMC41cmVtO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGZvbnQ6IGluaGVyaXQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICAgICAgcGFkZGluZzogMC41cmVtO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBidXR0b24ge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICBwYWRkaW5nOiAwLjc1cmVtIDFyZW07XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgIG1hcmdpbjogMC41cmVtIDA7XHJcbiAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZS1pbi1vdXQ7XHJcblxyXG4gICAgICB9XHJcblxyXG4gICAgICBidXR0b246aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8qIE1lZGlhIHF1ZXJpZXMgKi9cclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDExNTBweCApIHtcclxuXHJcbiAgICAgICAgc2VjdGlvbiNjb21tZW50LXNlY3Rpb24ge1xyXG4gICAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2NjBweCApIHtcclxuICAgICAgICBzZWN0aW9uI2NvbW1lbnQtc2VjdGlvbiB7XHJcbiAgICAgICAgICB3aWR0aDogOTUlO1xyXG4gICAgICAgICAgLyogbWFyZ2luOiBhdXRvOyAqL1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDYyMHB4ICkge1xyXG4gICAgICAgIHNlY3Rpb24jY29tbWVudC1zZWN0aW9uIHtcclxuICAgICAgICAgIHdpZHRoOiA5NSU7XHJcbiAgICAgICAgICBwYWRkaW5nOiAycmVtO1xyXG4gICAgICAgICAgLyogbWFyZ2luOiBhdXRvOyAqL1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDM5MHB4ICkge1xyXG4gICAgICAgIHNlY3Rpb24jY29tbWVudC1zZWN0aW9uIHtcclxuICAgICAgICAgIHdpZHRoOiA5NSU7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxLjVyZW07XHJcbiAgICAgICAgICAvKiBtYXJnaW46IGF1dG87ICovXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogMzYwcHggKSB7XHJcbiAgICAgICAgc2VjdGlvbiNjb21tZW50LXNlY3Rpb24ge1xyXG4gICAgICAgICAgLyogd2lkdGg6IDk1JTsgKi9cclxuICAgICAgICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICAgICAgICAvKiBtYXJnaW46IGF1dG87ICovXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICBcclxuICAgIGB9PC9zdHlsZT5cclxuXHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb21tZW50U2VjdGlvbjsiXX0= */
/*@ sourceURL=C:\\Coding\\MyProjects\\coders-jukebox\\components\\CommentSection.js */`));
};

/* harmony default export */ __webpack_exports__["default"] = (CommentSection);

/***/ }),

/***/ "./components/FavouriteItem.js":
/*!*************************************!*\
  !*** ./components/FavouriteItem.js ***!
  \*************************************/
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
/* harmony import */ var _css_variables_colors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../css-variables/colors */ "./css-variables/colors.js");


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





const FavouriteItem = ({
  id
}) => {
  const {
    getFavouriteUser,
    fetchProfileUser,
    removeFavourite,
    currentUser,
    profileUser,
    authState
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context_GlobalContext__WEBPACK_IMPORTED_MODULE_3__["GlobalContext"]);
  const {
    0: favUser,
    1: setFavUser
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({});

  const favUserClickHandler = () => {
    fetchProfileUser(id, false);
  };

  const removeFavHandler = () => {
    removeFavourite(id);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    const fetchData = async () => {
      const userData = await getFavouriteUser(id);
      setFavUser({
        firstName: userData.firstName,
        lastName: userData.lastName,
        profilePhotoFilename: userData.profilePhotoFilename,
        id
      });
    };

    fetchData();
  }, [id]);
  return __jsx("div", {
    id: "favourite-item",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["997345772", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary]]])
  }, __jsx("div", {
    id: "avatar",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["997345772", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary]]])
  }, favUser.profilePhotoFilename === null && __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["997345772", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary]]]) + " " + "crop"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/profile/[userId]",
    as: `/profile/${id}`
  }, __jsx("a", {
    onClick: favUserClickHandler,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["997345772", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary]]])
  }, __jsx("img", {
    src: "/default-avatar.jpg",
    alt: "avatar",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["997345772", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary]]])
  })))), favUser.profilePhotoFilename !== null && favUser.profilePhotoFilename !== '' && favUser.profilePhotoFilename !== undefined && __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["997345772", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary]]]) + " " + "crop"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/profile/[userId]",
    as: `/profile/${id}`
  }, __jsx("a", {
    onClick: favUserClickHandler,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["997345772", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary]]])
  }, __jsx("img", {
    src: `http://localhost:3000/image/${favUser.profilePhotoFilename}`,
    alt: "avatar",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["997345772", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary]]])
  }))))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/profile/[userId]",
    as: `/profile/${id}`
  }, __jsx("a", {
    onClick: favUserClickHandler,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["997345772", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary]]])
  }, __jsx("h3", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["997345772", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary]]])
  }, favUser.firstName, " ", favUser.lastName))), authState.authenticated === true && currentUser.id === profileUser.id && __jsx("button", {
    onClick: removeFavHandler,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["997345772", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary]]])
  }, __jsx("i", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["997345772", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary]]]) + " " + "fa fa-times-circle"
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "997345772",
    dynamic: [_css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary]
  }, `#favourite-item.__jsx-style-dynamic-selector{margin:0 1rem;border-radius:5px;padding:2rem;position:relative;border:2px solid ${_css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary};}.crop.__jsx-style-dynamic-selector{max-height:100px;max-width:100px;overflow:hidden;border-radius:50px;margin:0 auto 0.8rem auto;}img.__jsx-style-dynamic-selector{width:100px;}a.__jsx-style-dynamic-selector{color:white;}button.__jsx-style-dynamic-selector{width:40px;height:8px;border-radius:50%;position:absolute;top:0px;right:8px;background-color:black;font-size:1.5rem;color:${_css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary};}i.__jsx-style-dynamic-selector{-webkit-transition:color 0.2s ease-in-out;transition:color 0.2s ease-in-out;}i.__jsx-style-dynamic-selector:hover{color:#e5305a;}h3.__jsx-style-dynamic-selector{text-align:center;}@media (max-width:690px ){#favourite-item.__jsx-style-dynamic-selector{margin:0 1rem;padding:1rem;}}@media (max-width:450px ){.crop.__jsx-style-dynamic-selector{width:80px;height:80px;}img.__jsx-style-dynamic-selector{width:80px;}#avatar.__jsx-style-dynamic-selector{margin-top:1rem;}}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxDb2RpbmdcXE15UHJvamVjdHNcXGNvZGVycy1qdWtlYm94XFxjb21wb25lbnRzXFxGYXZvdXJpdGVJdGVtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBFa0IsQUFJeUIsQUFRRyxBQVFMLEFBSUEsQUFJRCxBQVl1QixBQUlwQixBQUlJLEFBS0YsQUFRSCxBQUtBLEFBS0ssV0ExQ1AsQUFpQ0csQUFNZCxDQS9DRixBQUlBLEVBcEJvQixBQXdDcEIsQUFTaUIsRUFrQmYsQ0EzRGdCLENBb0NsQixJQW5Cb0IsQ0FpQ2xCLElBUkEsS0FqRGEsQ0FRRyxPQWlCRSxLQXhCQSxJQVFDLFNBaUJYLEtBeEJzQyxHQXlCcEMsRUFqQmdCLFFBa0JILEFBT3pCLGtCQXhCQSxLQWtCbUIsVUExQm5CLE9BMkJxQyxtQ0FDckMiLCJmaWxlIjoiQzpcXENvZGluZ1xcTXlQcm9qZWN0c1xcY29kZXJzLWp1a2Vib3hcXGNvbXBvbmVudHNcXEZhdm91cml0ZUl0ZW0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlQ29udGV4dCwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBHbG9iYWxDb250ZXh0IH0gZnJvbSAnLi4vY29udGV4dC9HbG9iYWxDb250ZXh0JztcclxuaW1wb3J0IGNvbG9ycyBmcm9tICcuLi9jc3MtdmFyaWFibGVzL2NvbG9ycyc7XHJcblxyXG5cclxuXHJcbmNvbnN0IEZhdm91cml0ZUl0ZW0gPSAoe2lkfSkgPT4ge1xyXG5cclxuXHJcbiAgY29uc3QgeyBnZXRGYXZvdXJpdGVVc2VyLCBmZXRjaFByb2ZpbGVVc2VyLCByZW1vdmVGYXZvdXJpdGUsIGN1cnJlbnRVc2VyLCBwcm9maWxlVXNlciwgYXV0aFN0YXRlIH0gPSB1c2VDb250ZXh0KEdsb2JhbENvbnRleHQpO1xyXG4gIFxyXG4gIGNvbnN0IFtmYXZVc2VyLCBzZXRGYXZVc2VyXSA9IHVzZVN0YXRlKHt9KTtcclxuXHJcbiAgY29uc3QgZmF2VXNlckNsaWNrSGFuZGxlciA9ICgpID0+IHtcclxuICAgIGZldGNoUHJvZmlsZVVzZXIoaWQsIGZhbHNlKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHJlbW92ZUZhdkhhbmRsZXIgPSAoKSA9PiB7XHJcbiAgICByZW1vdmVGYXZvdXJpdGUoaWQpO1xyXG4gIH1cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgY29uc3QgdXNlckRhdGEgPSBhd2FpdCBnZXRGYXZvdXJpdGVVc2VyKGlkKTtcclxuICAgICAgc2V0RmF2VXNlcih7XHJcbiAgICAgICAgZmlyc3ROYW1lOiB1c2VyRGF0YS5maXJzdE5hbWUsXHJcbiAgICAgICAgbGFzdE5hbWU6IHVzZXJEYXRhLmxhc3ROYW1lLFxyXG4gICAgICAgIHByb2ZpbGVQaG90b0ZpbGVuYW1lOiB1c2VyRGF0YS5wcm9maWxlUGhvdG9GaWxlbmFtZSxcclxuICAgICAgICBpZFxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gICAgZmV0Y2hEYXRhKCk7XHJcbiAgfSwgW2lkXSlcclxuICBcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgaWQ9XCJmYXZvdXJpdGUtaXRlbVwiPlxyXG4gICAgICB7LyogPGg0PkF2YXRhcjwvaDQ+ICovfVxyXG4gICAgICA8ZGl2IGlkPVwiYXZhdGFyXCI+XHJcbiAgICAgICAge2ZhdlVzZXIucHJvZmlsZVBob3RvRmlsZW5hbWUgPT09IG51bGwgJiZcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNyb3BcIj5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvZmlsZS9bdXNlcklkXVwiIGFzPXtgL3Byb2ZpbGUvJHtpZH1gfT5cclxuICAgICAgICAgICAgPGEgb25DbGljaz17ZmF2VXNlckNsaWNrSGFuZGxlcn0+XHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9XCIvZGVmYXVsdC1hdmF0YXIuanBnXCIgYWx0PVwiYXZhdGFyXCIgLz5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgICAgIH0gXHJcblxyXG4gICAgICAgIHtmYXZVc2VyLnByb2ZpbGVQaG90b0ZpbGVuYW1lICE9PSBudWxsICYmIGZhdlVzZXIucHJvZmlsZVBob3RvRmlsZW5hbWUgIT09ICcnICYmIGZhdlVzZXIucHJvZmlsZVBob3RvRmlsZW5hbWUgIT09IHVuZGVmaW5lZCAmJlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3JvcFwiPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9maWxlL1t1c2VySWRdXCIgYXM9e2AvcHJvZmlsZS8ke2lkfWB9PlxyXG4gICAgICAgICAgICA8YSBvbkNsaWNrPXtmYXZVc2VyQ2xpY2tIYW5kbGVyfT5cclxuICAgICAgICAgICAgICA8aW1nIHNyYz17YGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9pbWFnZS8ke2ZhdlVzZXIucHJvZmlsZVBob3RvRmlsZW5hbWV9YH0gYWx0PVwiYXZhdGFyXCIgLz5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIH1cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8TGluayBocmVmPVwiL3Byb2ZpbGUvW3VzZXJJZF1cIiBhcz17YC9wcm9maWxlLyR7aWR9YH0+XHJcbiAgICAgICAgPGEgb25DbGljaz17ZmF2VXNlckNsaWNrSGFuZGxlcn0+PGgzPntmYXZVc2VyLmZpcnN0TmFtZX0ge2ZhdlVzZXIubGFzdE5hbWV9PC9oMz48L2E+XHJcbiAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgIFxyXG4gICAgICB7IGF1dGhTdGF0ZS5hdXRoZW50aWNhdGVkID09PSB0cnVlICYmIGN1cnJlbnRVc2VyLmlkID09PSBwcm9maWxlVXNlci5pZCAmJlxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17cmVtb3ZlRmF2SGFuZGxlcn0+XHJcbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS10aW1lcy1jaXJjbGVcIj48L2k+XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIFxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgIFxyXG4gICAgICAgICNmYXZvdXJpdGUtaXRlbSB7XHJcbiAgICAgICAgICBtYXJnaW46IDAgMXJlbTtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgIHBhZGRpbmc6IDJyZW07XHJcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAke2NvbG9ycy5wcmltYXJ5fTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jcm9wIHtcclxuICAgICAgICAgIG1heC1oZWlnaHQ6IDEwMHB4O1xyXG4gICAgICAgICAgbWF4LXdpZHRoOiAxMDBweDtcclxuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG8gMC44cmVtIGF1dG87XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhIHtcclxuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICB3aWR0aDogNDBweDtcclxuICAgICAgICAgIGhlaWdodDogOHB4O1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgdG9wOiAwcHg7XHJcbiAgICAgICAgICByaWdodDogOHB4O1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgICAgICAgIGNvbG9yOiAke2NvbG9ycy5wcmltYXJ5fTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGkge1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgMC4ycyBlYXNlLWluLW91dDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgaTpob3ZlciB7XHJcbiAgICAgICAgICBjb2xvcjogI2U1MzA1YTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGgzIHtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2OTBweCApIHtcclxuICAgICAgICAgICNmYXZvdXJpdGUtaXRlbSB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCAxcmVtO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0NTBweCApIHtcclxuICAgICAgICAgIC5jcm9wIHtcclxuICAgICAgICAgICAgd2lkdGg6IDgwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogODBweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICB3aWR0aDogODBweDtcclxuICAgICAgICAgICAgLyogcGFkZGluZy10b3A6IDFyZW07ICovXHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgI2F2YXRhciB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIFxyXG4gICAgICBgfTwvc3R5bGU+XHJcblxyXG5cclxuXHJcblxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGYXZvdXJpdGVJdGVtOyJdfQ== */
/*@ sourceURL=C:\\Coding\\MyProjects\\coders-jukebox\\components\\FavouriteItem.js */`));
};

/* harmony default export */ __webpack_exports__["default"] = (FavouriteItem);

/***/ }),

/***/ "./components/Favourites.js":
/*!**********************************!*\
  !*** ./components/Favourites.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _FavouriteItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FavouriteItem */ "./components/FavouriteItem.js");
/* harmony import */ var _context_GlobalContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/GlobalContext */ "./context/GlobalContext.js");
/* harmony import */ var _css_variables_colors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../css-variables/colors */ "./css-variables/colors.js");


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





const Favourites = () => {
  const {
    profileUser
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context_GlobalContext__WEBPACK_IMPORTED_MODULE_3__["GlobalContext"]);
  return __jsx("section", {
    id: "favourites",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["886594334", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].secondary]]])
  }, __jsx("h2", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["886594334", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].secondary]]])
  }, __jsx("i", {
    "aria-hidden": "true",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["886594334", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].secondary]]]) + " " + "fa fa-star"
  }), "Favourites "), __jsx("div", {
    id: "favourite-items",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["886594334", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].secondary]]])
  }, profileUser.favourites.map(favourite => __jsx(_FavouriteItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
    id: favourite,
    key: favourite
  }))), profileUser.favourites.length === 0 && __jsx("h3", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["886594334", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].secondary]]])
  }, "No favourite users have been added."), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "886594334",
    dynamic: [_css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].secondary]
  }, `section#favourites.__jsx-style-dynamic-selector{padding:3rem;border:1px solid ${_css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary};border-radius:10px;margin-top:1rem;color:white;margin-bottom:2rem;}i.fa-star.__jsx-style-dynamic-selector{margin-right:0.75rem;color:${_css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].secondary};font-size:1.4rem;}#favourite-items.__jsx-style-dynamic-selector{display:grid;grid-auto-flow:row;grid-template-columns:repeat(5,1fr);padding:1rem;margin-top:1rem;grid-row-gap:2rem;}h3.__jsx-style-dynamic-selector{font-weight:normal;}@media (max-width:1150px ){#favourite-items.__jsx-style-dynamic-selector{grid-template-columns:repeat(3,1fr);}section#favourites.__jsx-style-dynamic-selector{width:80%;margin:3rem auto;padding-left:2rem;}}@media (max-width:930px ){#favourite-items.__jsx-style-dynamic-selector{grid-template-columns:repeat(2,1fr);}}@media (max-width:600px ){section#favourites.__jsx-style-dynamic-selector{padding:1rem;}}@media (max-width:500px ){#favourite-items.__jsx-style-dynamic-selector{grid-template-columns:repeat(1,1fr);}}@media (max-width:370px ){section#favourites.__jsx-style-dynamic-selector{padding:1rem;}}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxDb2RpbmdcXE15UHJvamVjdHNcXGNvZGVycy1qdWtlYm94XFxjb21wb25lbnRzXFxGYXZvdXJpdGVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJCYyxBQUlvQixBQVNRLEFBT1IsQUFTTSxBQVNvQixBQUkzQixBQVEyQixBQU14QixBQU13QixBQU14QixVQXpCSSxHQXRDMkIsQUFnQjNCLEFBb0NuQixBQVlBLE1BdENGLEVBakJxQyxNQThCZixLQXRCaUIsSUFpQnJDLEFBWUEsQUFZQSxTQWxCQSxXQTlCaUIsR0FURSxTQWlCTixLQU5mLEtBVmtCLEdBaUJBLGFBaEJKLEdBaUJNLFNBaEJDLFNBaUJyQixVQWhCQSIsImZpbGUiOiJDOlxcQ29kaW5nXFxNeVByb2plY3RzXFxjb2RlcnMtanVrZWJveFxcY29tcG9uZW50c1xcRmF2b3VyaXRlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBGYXZvdXJpdGVJdGVtIGZyb20gJy4vRmF2b3VyaXRlSXRlbSc7XHJcbmltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgR2xvYmFsQ29udGV4dCB9IGZyb20gJy4uL2NvbnRleHQvR2xvYmFsQ29udGV4dCc7XHJcbmltcG9ydCBjb2xvcnMgZnJvbSAnLi4vY3NzLXZhcmlhYmxlcy9jb2xvcnMnXHJcblxyXG5jb25zdCBGYXZvdXJpdGVzID0gKCkgPT4ge1xyXG5cclxuICBjb25zdCB7IHByb2ZpbGVVc2VyIH0gPSB1c2VDb250ZXh0KEdsb2JhbENvbnRleHQpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gaWQ9XCJmYXZvdXJpdGVzXCI+XHJcbiAgICAgIDxoMj48aSBjbGFzc05hbWU9XCJmYSBmYS1zdGFyXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPkZhdm91cml0ZXMgPC9oMj5cclxuXHJcbiAgICAgIDxkaXYgaWQ9XCJmYXZvdXJpdGUtaXRlbXNcIj5cclxuICAgICAgICB7cHJvZmlsZVVzZXIuZmF2b3VyaXRlcy5tYXAoZmF2b3VyaXRlID0+IChcclxuICAgICAgICAgIDxGYXZvdXJpdGVJdGVtIGlkPXtmYXZvdXJpdGV9IGtleT17ZmF2b3VyaXRlfS8+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAge3Byb2ZpbGVVc2VyLmZhdm91cml0ZXMubGVuZ3RoID09PSAwICYmIFxyXG4gICAgICAgIDxoMz5cclxuICAgICAgICAgIE5vIGZhdm91cml0ZSB1c2VycyBoYXZlIGJlZW4gYWRkZWQuXHJcbiAgICAgICAgPC9oMz5cclxuICAgICAgfVxyXG5cclxuXHJcblxyXG4gIDxzdHlsZSBqc3g+e2BcclxuICBcclxuICAgIHNlY3Rpb24jZmF2b3VyaXRlcyB7XHJcbiAgICAgIHBhZGRpbmc6IDNyZW07XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICR7Y29sb3JzLnByaW1hcnl9O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbiAgICB9XHJcblxyXG4gICAgaS5mYS1zdGFyIHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAwLjc1cmVtO1xyXG4gICAgICBjb2xvcjogJHtjb2xvcnMuc2Vjb25kYXJ5fTtcclxuICAgICAgZm9udC1zaXplOiAxLjRyZW07XHJcbiAgICAgIC8qIGhlaWdodDogNTBweDsgKi9cclxuICAgIH1cclxuXHJcbiAgICAjZmF2b3VyaXRlLWl0ZW1zIHtcclxuICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgZ3JpZC1hdXRvLWZsb3c6IHJvdztcclxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNSwgMWZyKTtcclxuICAgICAgcGFkZGluZzogMXJlbTtcclxuICAgICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICAgICAgZ3JpZC1yb3ctZ2FwOiAycmVtO1xyXG4gICAgfVxyXG5cclxuICAgIGgzIHtcclxuICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgLyogdGV4dC1hbGlnbjogY2VudGVyOyAqL1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgLyogTWVkaWEgcXVlcmllcyAqL1xyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDExNTBweCApIHtcclxuICAgICAgI2Zhdm91cml0ZS1pdGVtcyB7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgc2VjdGlvbiNmYXZvdXJpdGVzIHtcclxuICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgIG1hcmdpbjogM3JlbSBhdXRvO1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMnJlbTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5MzBweCApIHtcclxuICAgICAgI2Zhdm91cml0ZS1pdGVtcyB7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCApIHtcclxuICAgICAgc2VjdGlvbiNmYXZvdXJpdGVzIHtcclxuICAgICAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4ICkge1xyXG4gICAgICAjZmF2b3VyaXRlLWl0ZW1zIHtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxLCAxZnIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDM3MHB4ICkge1xyXG4gICAgICBzZWN0aW9uI2Zhdm91cml0ZXMge1xyXG4gICAgICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICBcclxuICBgfTwvc3R5bGU+XHJcblxyXG4gICAgPC9zZWN0aW9uPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmF2b3VyaXRlcztcclxuIl19 */
/*@ sourceURL=C:\\Coding\\MyProjects\\coders-jukebox\\components\\Favourites.js */`));
};

/* harmony default export */ __webpack_exports__["default"] = (Favourites);

/***/ }),

/***/ "./components/FileUpload.js":
/*!**********************************!*\
  !*** ./components/FileUpload.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_GlobalContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/GlobalContext */ "./context/GlobalContext.js");
/* harmony import */ var _css_variables_colors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../css-variables/colors */ "./css-variables/colors.js");


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




const FileUpload = ({
  setEditMode
}) => {
  const {
    0: file,
    1: setFile
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');
  const {
    0: filename,
    1: setFilename
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('Upload photo - max size 70 KB');
  const {
    uploadFile
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context_GlobalContext__WEBPACK_IMPORTED_MODULE_2__["GlobalContext"]);

  const uploadFileHandler = e => {
    e.preventDefault(); // Check for max size

    if (file.size > 70000) {
      return;
    }

    const formData = new FormData();
    formData.append('file', file);
    uploadFile(formData);
    setEditMode(false);
  };

  const onChange = e => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
  };

  return __jsx("div", {
    id: "file-upload",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1812339006", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].primary]]])
  }, __jsx("h2", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1812339006", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].primary]]])
  }, "Upload a profile photo:"), __jsx("form", {
    onSubmit: e => uploadFileHandler(e),
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1812339006", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].primary]]])
  }, __jsx("input", {
    type: "file",
    name: "file",
    id: "file",
    onChange: onChange,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1812339006", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].primary]]]) + " " + "custom-file-input"
  }), __jsx("label", {
    htmlFor: "file",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1812339006", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].primary]]]) + " " + "custom-file-label"
  }, filename), __jsx("button", {
    type: "submit",
    value: "Upload",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1812339006", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].primary]]])
  }, "Upload")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1812339006",
    dynamic: [_css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].primary]
  }, `#file-upload.__jsx-style-dynamic-selector{margin-top:3rem;border-top:1px solid ${_css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].primary};padding-top:2rem;}#file-upload.__jsx-style-dynamic-selector h2.__jsx-style-dynamic-selector{margin-bottom:1rem;}form.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}input[type="file"].__jsx-style-dynamic-selector{font-size:1rem;}input#file-upload-button.__jsx-style-dynamic-selector{border-radius:5px;padding:1rem;}label.__jsx-style-dynamic-selector{margin:0.5rem 0;}button.__jsx-style-dynamic-selector{width:83px;margin-top:1rem;}input.__jsx-style-dynamic-selector{margin:1rem 0;}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxDb2RpbmdcXE15UHJvamVjdHNcXGNvZGVycy1qdWtlYm94XFxjb21wb25lbnRzXFxGaWxlVXBsb2FkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZDa0IsQUFJMkIsQUFNRyxBQUlOLEFBS0UsQUFJRyxBQUtGLEFBSUwsQUFLRyxXQUpFLEdBS2xCLENBbEJBLENBZm9ELEFBd0JwRCxFQUxlLENBYmYsUUF1QkEsSUFUQSxtQ0FuQm1CLFFBU0ssU0FSeEIscUVBU0EiLCJmaWxlIjoiQzpcXENvZGluZ1xcTXlQcm9qZWN0c1xcY29kZXJzLWp1a2Vib3hcXGNvbXBvbmVudHNcXEZpbGVVcGxvYWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlQ29udGV4dH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IEdsb2JhbENvbnRleHQgfSBmcm9tICcuLi9jb250ZXh0L0dsb2JhbENvbnRleHQnO1xyXG5pbXBvcnQgY29sb3JzIGZyb20gJy4uL2Nzcy12YXJpYWJsZXMvY29sb3JzJztcclxuXHJcblxyXG5jb25zdCBGaWxlVXBsb2FkID0gKHtzZXRFZGl0TW9kZX0pID0+IHtcclxuXHJcbiAgY29uc3QgW2ZpbGUsIHNldEZpbGVdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtmaWxlbmFtZSwgc2V0RmlsZW5hbWVdID0gdXNlU3RhdGUoJ1VwbG9hZCBwaG90byAtIG1heCBzaXplIDcwIEtCJyk7XHJcblxyXG4gIGNvbnN0IHsgdXBsb2FkRmlsZSB9ID0gdXNlQ29udGV4dChHbG9iYWxDb250ZXh0KTtcclxuXHJcbiAgY29uc3QgdXBsb2FkRmlsZUhhbmRsZXIgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIC8vIENoZWNrIGZvciBtYXggc2l6ZVxyXG4gICAgaWYgKGZpbGUuc2l6ZSA+IDcwMDAwKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgZm9ybURhdGEuYXBwZW5kKCdmaWxlJywgZmlsZSk7XHJcblxyXG4gICAgdXBsb2FkRmlsZShmb3JtRGF0YSk7XHJcbiAgICBzZXRFZGl0TW9kZShmYWxzZSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBvbkNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICBzZXRGaWxlKGUudGFyZ2V0LmZpbGVzWzBdKTtcclxuICAgIHNldEZpbGVuYW1lKGUudGFyZ2V0LmZpbGVzWzBdLm5hbWUpO1xyXG4gIH1cclxuXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGlkPVwiZmlsZS11cGxvYWRcIj5cclxuICAgICAgPGgyPlVwbG9hZCBhIHByb2ZpbGUgcGhvdG86PC9oMj5cclxuICAgICAgPGZvcm0gb25TdWJtaXQ9eyhlKSA9PiB1cGxvYWRGaWxlSGFuZGxlcihlKX0+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgbmFtZT1cImZpbGVcIiBpZD1cImZpbGVcIiBjbGFzc05hbWU9XCJjdXN0b20tZmlsZS1pbnB1dFwiIG9uQ2hhbmdlPXtvbkNoYW5nZX0gLz5cclxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImZpbGVcIiBjbGFzc05hbWU9XCJjdXN0b20tZmlsZS1sYWJlbFwiPlxyXG4gICAgICAgICAge2ZpbGVuYW1lfVxyXG4gICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJVcGxvYWRcIj5VcGxvYWQ8L2J1dHRvbj5cclxuICAgICAgPC9mb3JtPlxyXG5cclxuXHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgXHJcbiAgICAgICAgI2ZpbGUtdXBsb2FkIHtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDNyZW07XHJcbiAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgJHtjb2xvcnMucHJpbWFyeX07XHJcbiAgICAgICAgICBwYWRkaW5nLXRvcDogMnJlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICNmaWxlLXVwbG9hZCBoMiB7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgXHJcbiAgICAgICAgZm9ybSB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlucHV0W3R5cGU9XCJmaWxlXCJdIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlucHV0I2ZpbGUtdXBsb2FkLWJ1dHRvbiB7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGFiZWwge1xyXG4gICAgICAgICAgbWFyZ2luOiAwLjVyZW0gMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICB3aWR0aDogODNweDtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGlucHV0IHtcclxuICAgICAgICAgIG1hcmdpbjogMXJlbSAwOyBcclxuICAgICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBgfTwvc3R5bGU+XHJcblxyXG4gICAgPC9kaXY+IFxyXG5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZpbGVVcGxvYWQ7XHJcbiJdfQ== */
/*@ sourceURL=C:\\Coding\\MyProjects\\coders-jukebox\\components\\FileUpload.js */`));
};

/* harmony default export */ __webpack_exports__["default"] = (FileUpload);

/***/ }),

/***/ "./components/Footer.js":
/*!******************************!*\
  !*** ./components/Footer.js ***!
  \******************************/
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


const Footer = () => {
  const year = new Date().getFullYear();
  return __jsx("footer", {
    id: "main-footer",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["502531947", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_2__["default"].reverseGradient]]])
  }, __jsx("h4", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["502531947", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_2__["default"].reverseGradient]]])
  }, "CODETUNES"), __jsx("h4", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["502531947", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_2__["default"].reverseGradient]]])
  }, "\xA9 ", year), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "502531947",
    dynamic: [_css_variables_colors__WEBPACK_IMPORTED_MODULE_2__["default"].reverseGradient]
  }, `footer.__jsx-style-dynamic-selector{color:white;text-align:center;padding:1.2rem;background:${_css_variables_colors__WEBPACK_IMPORTED_MODULE_2__["default"].reverseGradient};}h4.__jsx-style-dynamic-selector{font-weight:normal;}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxDb2RpbmdcXE15UHJvamVjdHNcXGNvZGVycy1qdWtlYm94XFxjb21wb25lbnRzXFxGb290ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBV2dCLEFBSXFCLEFBUU8sWUFQRCxPQVFwQixXQVBpQixlQUV5Qix3Q0FDMUMiLCJmaWxlIjoiQzpcXENvZGluZ1xcTXlQcm9qZWN0c1xcY29kZXJzLWp1a2Vib3hcXGNvbXBvbmVudHNcXEZvb3Rlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjb2xvcnMgZnJvbSAnLi4vY3NzLXZhcmlhYmxlcy9jb2xvcnMnO1xyXG5cclxuY29uc3QgRm9vdGVyID0gKCkgPT4ge1xyXG5cclxuICBjb25zdCB5ZWFyID0gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGZvb3RlciBpZD1cIm1haW4tZm9vdGVyXCI+XHJcbiAgICAgIDxoND5DT0RFVFVORVM8L2g0PlxyXG4gICAgICA8aDQ+JmNvcHk7IHt5ZWFyfTwvaDQ+XHJcblxyXG4gICAgPHN0eWxlIGpzeD57YFxyXG5cclxuICAgICAgZm9vdGVyIHtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIHBhZGRpbmc6IDEuMnJlbTtcclxuICAgICAgICAvKiBtYXJnaW4tdG9wOiAycmVtOyAqL1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICR7Y29sb3JzLnJldmVyc2VHcmFkaWVudH07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGg0IHtcclxuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICB9XHJcbiAgICBcclxuICAgIFxyXG4gICAgYH08L3N0eWxlPlxyXG5cclxuXHJcblxyXG4gICAgPC9mb290ZXI+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7XHJcbiJdfQ== */
/*@ sourceURL=C:\\Coding\\MyProjects\\coders-jukebox\\components\\Footer.js */`));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/PlayList.js":
/*!********************************!*\
  !*** ./components/PlayList.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _VideoItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./VideoItem */ "./components/VideoItem.js");
/* harmony import */ var _css_variables_colors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../css-variables/colors */ "./css-variables/colors.js");


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



const PlayList = ({
  profileUser
}) => {
  return __jsx("section", {
    id: "playlist",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2102415340", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].gradient]]])
  }, __jsx("div", {
    id: "playlist-header",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2102415340", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].gradient]]])
  }, __jsx("h2", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2102415340", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].gradient]]])
  }, "Playlist")), profileUser.ownedVideos.length === 0 && __jsx("h3", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2102415340", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].gradient]]])
  }, "Add some music to your playlist!"), profileUser.ownedVideos.map(video => // <h3>{video.title}</h3>
  __jsx(_VideoItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
    video: video,
    mode: "playlist",
    key: video.videoURL
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2102415340",
    dynamic: [_css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].gradient]
  }, `section#playlist.__jsx-style-dynamic-selector{margin:3rem auto;border:1px solid ${_css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].primary};border-radius:10px;color:white;width:84%;}#playlist-header.__jsx-style-dynamic-selector{background:${_css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].gradient};padding:2rem;border-radius:10px 10px 0 0;color:white;}h3.__jsx-style-dynamic-selector{padding:2rem;}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxDb2RpbmdcXE15UHJvamVjdHNcXGNvZGVycy1qdWtlYm94XFxjb21wb25lbnRzXFxQbGF5TGlzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5QmdCLEFBTTBCLEFBVXVCLEFBUzNCLGFBQ2YsSUFsQmdELHVCQVdqQyxhQUNlLFVBWFQsa0JBWVAsQ0FYQSxXQVlkLENBWFksVUFDWiIsImZpbGUiOiJDOlxcQ29kaW5nXFxNeVByb2plY3RzXFxjb2RlcnMtanVrZWJveFxcY29tcG9uZW50c1xcUGxheUxpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVmlkZW9JdGVtIGZyb20gJy4vVmlkZW9JdGVtJztcclxuaW1wb3J0IGNvbG9ycyBmcm9tICcuLi9jc3MtdmFyaWFibGVzL2NvbG9ycydcclxuXHJcblxyXG5jb25zdCBQbGF5TGlzdCA9ICh7cHJvZmlsZVVzZXIgfSkgPT4ge1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gaWQ9XCJwbGF5bGlzdFwiPlxyXG5cclxuICAgICAgPGRpdiBpZD1cInBsYXlsaXN0LWhlYWRlclwiPlxyXG4gICAgICAgIDxoMj5QbGF5bGlzdDwvaDI+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAge3Byb2ZpbGVVc2VyLm93bmVkVmlkZW9zLmxlbmd0aCA9PT0gMCAmJiBcclxuICAgICAgICA8aDM+QWRkIHNvbWUgbXVzaWMgdG8geW91ciBwbGF5bGlzdCE8L2gzPlxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBcclxuICAgICAge3Byb2ZpbGVVc2VyLm93bmVkVmlkZW9zLm1hcCh2aWRlbyA9PiAoXHJcbiAgICAgICAgLy8gPGgzPnt2aWRlby50aXRsZX08L2gzPlxyXG4gICAgICAgIDxWaWRlb0l0ZW0gdmlkZW89e3ZpZGVvfSBtb2RlPVwicGxheWxpc3RcIiBrZXk9e3ZpZGVvLnZpZGVvVVJMfS8+XHJcbiAgICAgIClcclxuICAgICAgKX1cclxuXHJcblxyXG4gICAgPHN0eWxlIGpzeD57YFxyXG5cclxuXHJcbiAgICBcclxuICAgICAgc2VjdGlvbiNwbGF5bGlzdCB7XHJcbiAgICAgICAgbWFyZ2luOiAzcmVtIGF1dG87XHJcbiAgICAgICAgLyogcGFkZGluZzogM3JlbTsgKi9cclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAke2NvbG9ycy5wcmltYXJ5fTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICB3aWR0aDogODQlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAjcGxheWxpc3QtaGVhZGVyIHtcclxuICAgICAgICAvKiBkaXNwbGF5OiBmbGV4OyAqL1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICR7Y29sb3JzLmdyYWRpZW50fTtcclxuICAgICAgICAvKiBtYXJnaW46IDJyZW0gMDsgKi9cclxuICAgICAgICAvKiBoZWlnaHQ6IDEwMCU7ICovXHJcbiAgICAgICAgcGFkZGluZzogMnJlbTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMCAwO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaDMge1xyXG4gICAgICAgIHBhZGRpbmc6IDJyZW07XHJcbiAgICAgIH1cclxuICAgIFxyXG4gICAgYH08L3N0eWxlPlxyXG4gICAgICBcclxuICAgIDwvc2VjdGlvbj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBsYXlMaXN0OyJdfQ== */
/*@ sourceURL=C:\\Coding\\MyProjects\\coders-jukebox\\components\\PlayList.js */`));
};

/* harmony default export */ __webpack_exports__["default"] = (PlayList);

/***/ }),

/***/ "./components/ProfileEdit.js":
/*!***********************************!*\
  !*** ./components/ProfileEdit.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_GlobalContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/GlobalContext */ "./context/GlobalContext.js");
/* harmony import */ var _FileUpload__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FileUpload */ "./components/FileUpload.js");
/* harmony import */ var _css_variables_colors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../css-variables/colors */ "./css-variables/colors.js");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ "framer-motion");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_5__);


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





const editVariants = {
  hidden: {
    opacity: 0,
    y: -500,
    zIndex: -3
  },
  visible: {
    opacity: 1,
    y: 0,
    zIndex: -3,
    transition: {
      duration: 0.5
    }
  },
  exit: {
    opacity: 0,
    y: -500,
    zIndex: -3
  }
};

const ProfileEdit = ({
  setEditMode
}) => {
  const {
    updateUser,
    profileUser,
    uploadPhoto
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context_GlobalContext__WEBPACK_IMPORTED_MODULE_2__["GlobalContext"]); // // Fetch the updated profile info to prefill form
  // useEffect(() => {
  //   fetchProfileUser(userId, false);
  // }
  // Prefill the form with the current info

  const {
    0: profileInfo,
    1: setProfileInfo
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    firstName: profileUser.firstName,
    lastName: profileUser.lastName,
    jobTitle: profileUser.jobTitle,
    location: profileUser.location,
    languages: profileUser.languages,
    about: profileUser.about
  }); // Create refs

  const firstNameRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  const lastNameRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  const jobTitleRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  const locationRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  const language1Ref = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  const language2Ref = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  const language3Ref = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  const language4Ref = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  const aboutRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();

  const updateProfileHandler = async e => {
    e.preventDefault(); // Get credentials from refs

    const firstName = firstNameRef.current.value;
    const lastName = lastNameRef.current.value;
    const jobTitle = jobTitleRef.current.value;
    const location = locationRef.current.value;
    const language1 = language1Ref.current.value;
    const language2 = language2Ref.current.value;
    const language3 = language3Ref.current.value;
    const language4 = language4Ref.current.value;
    const languages = [language1, language2, language3, language4];
    const about = aboutRef.current.value; // Check if any names fields are empty

    if (firstName.trim().length === 0 || lastName.trim().length === 0) {
      return;
    } // Call register action to send a post request to API and change the local and global state


    await updateUser(firstName, lastName, jobTitle, location, languages, about); //Close the edit profile section - set edit to false on profile page

    setEditMode(false);
  };

  const getExistingLanguages = () => {
    if (profileInfo.languages.length > 0) {
      return profileInfo.languages;
    } else return ['', '', '', ''];
  };

  return __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__["AnimatePresence"], null, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__["motion"].div, {
    variants: editVariants,
    initial: "hidden",
    animate: "visible",
    exit: "exit"
  }, __jsx("section", {
    id: "profile-edit",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1557435279", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary]]])
  }, __jsx("div", {
    id: "edit-container",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1557435279", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary]]])
  }, __jsx("div", {
    id: "col1",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1557435279", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary]]])
  }, __jsx("form", {
    onSubmit: e => updateProfileHandler(e),
    id: "update-form",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1557435279", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary]]])
  }, __jsx("h2", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1557435279", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary]]])
  }, "Update Profile Info:"), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1557435279", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary]]])
  }, __jsx("label", {
    htmlFor: "firstName",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1557435279", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary]]])
  }, "First Name: "), __jsx("input", {
    type: "text",
    id: "firstName",
    defaultValue: profileInfo.firstName,
    ref: firstNameRef,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1557435279", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary]]])
  })), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1557435279", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary]]])
  }, __jsx("label", {
    htmlFor: "lastName",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1557435279", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary]]])
  }, "Last Name:"), __jsx("input", {
    type: "text",
    id: "lastName",
    defaultValue: profileInfo.lastName,
    ref: lastNameRef,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1557435279", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary]]])
  })), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1557435279", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary]]])
  }, __jsx("label", {
    htmlFor: "JobTitle",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1557435279", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary]]])
  }, "Job Title:"), __jsx("input", {
    type: "text",
    id: "jobTitle",
    defaultValue: profileInfo.jobTitle,
    ref: jobTitleRef,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1557435279", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary]]])
  })), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1557435279", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary]]])
  }, __jsx("label", {
    htmlFor: "location",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1557435279", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary]]])
  }, "Location:"), __jsx("input", {
    type: "text",
    id: "location",
    defaultValue: profileInfo.location,
    ref: locationRef,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1557435279", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary]]])
  })), __jsx("div", {
    id: "languages",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1557435279", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary]]])
  }, __jsx("h4", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1557435279", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary]]])
  }, "Main Programming Languages Used:"), __jsx("div", {
    id: "language-input-container",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1557435279", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary]]])
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1557435279", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary]]])
  }, __jsx("label", {
    htmlFor: "language1",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1557435279", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary]]]) + " " + "language-label"
  }, "1."), __jsx("input", {
    type: "text",
    id: "language1",
    defaultValue: getExistingLanguages()[0],
    ref: language1Ref,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1557435279", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary]]]) + " " + "language-input"
  })), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1557435279", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary]]])
  }, __jsx("label", {
    htmlFor: "language2",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1557435279", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary]]]) + " " + "language-label"
  }, "2."), __jsx("input", {
    type: "text",
    id: "language2",
    defaultValue: getExistingLanguages()[1],
    ref: language2Ref,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1557435279", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary]]]) + " " + "language-input"
  })), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1557435279", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary]]])
  }, __jsx("label", {
    htmlFor: "language3",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1557435279", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary]]]) + " " + "language-label"
  }, "3."), __jsx("input", {
    type: "text",
    id: "language3",
    defaultValue: getExistingLanguages()[2],
    ref: language3Ref,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1557435279", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary]]]) + " " + "language-input"
  })), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1557435279", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary]]])
  }, __jsx("label", {
    htmlFor: "language4",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1557435279", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary]]]) + " " + "language-label"
  }, "4."), __jsx("input", {
    type: "text",
    id: "language4",
    defaultValue: getExistingLanguages()[3],
    ref: language4Ref,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1557435279", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary]]]) + " " + "language-input"
  })))))), __jsx("div", {
    id: "col2",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1557435279", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary]]])
  }, __jsx("div", {
    id: "about-input",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1557435279", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary]]])
  }, __jsx("label", {
    htmlFor: "about",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1557435279", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary]]])
  }, "About Me:"), __jsx("textarea", {
    id: "about",
    cols: "30",
    rows: "5",
    defaultValue: profileInfo.about,
    ref: aboutRef,
    form: "update-form",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1557435279", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary]]])
  }), __jsx("button", {
    type: "submit",
    form: "update-form",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1557435279", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary]]])
  }, "Update Info")), __jsx(_FileUpload__WEBPACK_IMPORTED_MODULE_3__["default"], {
    setEditMode: setEditMode
  })), __jsx("div", {
    id: "cancel-btn",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1557435279", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary]]])
  }, __jsx("i", {
    id: "cancel",
    "aria-hidden": "true",
    onClick: () => setEditMode(false),
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1557435279", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary]]]) + " " + "fa fa-times-circle fa-2x"
  })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1557435279",
    dynamic: [_css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary]
  }, `section.__jsx-style-dynamic-selector{border:1px solid white;border-radius:10px;margin-top:1rem;z-index:-3;}#edit-container.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}#col1.__jsx-style-dynamic-selector{padding:3rem;}#col1.__jsx-style-dynamic-selector h2.__jsx-style-dynamic-selector{margin-bottom:1rem;}input.__jsx-style-dynamic-selector{background-color:#eee;border:none;padding:12px 15px;margin:8px 0;width:100%;border-radius:5px;}textarea.__jsx-style-dynamic-selector{background-color:#eee;width:100%;padding:12px 15px;margin:8px 0;height:10rem;border-radius:5px;font-size:inherit;font:inherit;}#languages.__jsx-style-dynamic-selector{margin-top:1rem;}#language-input-container.__jsx-style-dynamic-selector{display:grid;grid-template-columns:1fr 1fr;}h4.__jsx-style-dynamic-selector{font-weight:400;}label.language-label.__jsx-style-dynamic-selector{margin-right:0.25rem;}input.language-input.__jsx-style-dynamic-selector{width:95%;}button[type='submit'].__jsx-style-dynamic-selector{margin-top:1rem;}i.__jsx-style-dynamic-selector{margin:0.85rem;cursor:pointer;}#col2.__jsx-style-dynamic-selector{margin-top:1rem;padding:4.6rem 0 0 3rem;border-left:1px solid ${_css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary};}#about-input.__jsx-style-dynamic-selector{margin-bottom:2rem;}@media (max-width:1150px){#profile-edit.__jsx-style-dynamic-selector{width:90vw;margin:1rem auto 1rem auto;}#edit-container.__jsx-style-dynamic-selector{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;position:relative;}#col1.__jsx-style-dynamic-selector{padding-bottom:1rem;}#cancel.__jsx-style-dynamic-selector{position:absolute;top:5px;right:5px;}#col2.__jsx-style-dynamic-selector{margin-top:0;padding:0 3rem 3rem 3rem;}}@media (max-width:778px){#language-input-container.__jsx-style-dynamic-selector{grid-template-columns:repeat(1,1fr);}}@media (max-width:440px){#language-input-container.__jsx-style-dynamic-selector label.__jsx-style-dynamic-selector{display:none;}#col1.__jsx-style-dynamic-selector{padding:2rem 2rem 1rem 2rem;}#col2.__jsx-style-dynamic-selector{padding:0 2rem 3rem 2rem;}}@media (max-width:360px){#cancel.__jsx-style-dynamic-selector{top:-5px;right:-5px;}}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxDb2RpbmdcXE15UHJvamVjdHNcXGNvZGVycy1qdWtlYm94XFxjb21wb25lbnRzXFxQcm9maWxlRWRpdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzS2tCLEFBS2tDLEFBT1YsQUFLQSxBQUlNLEFBSUcsQUFTQSxBQVdOLEFBSUgsQUFNSSxBQUlJLEFBSVgsQUFJTSxBQVFELEFBS0MsQUFNRyxBQU9OLEFBS1csQUFTRixBQUlGLEFBTUwsQUFPd0IsQUFNeEIsQUFJZSxBQUlILEFBTWhCLFNBQ0UsQ0FqRmYsQ0E4QitCLEVBNUUvQixBQWdDK0IsQUFvRUYsQUFhM0IsRUF2RGUsQ0E5QmpCLEFBVUEsQUFZQSxBQWEwQixFQStCZCxDQTFGWixBQWlFQSxDQXFCRSxBQXNDQSxDQXRGRixDQWxDYyxBQVNELENBN0JRLEVBcUluQixDQTFCWSxFQXNCWixFQTFERixHQXpDb0IsQ0FUQSxFQXVGbEIsQUFXQSxFQTlCQSxBQXdCQSxFQXBDSCxFQTVFbUIsQ0E2Q2xCLFFBZmUsQ0FUQSxNQXBCRixNQThCRSxDQVRGLElBcEJiLEtBSWdDLEVBaUJaLENBU0EsQ0E0REUsYUFoQnRCLEdBcERBLENBU29CLENBNERsQixpQkEzRGEsYUFDZiwrREE1QkEiLCJmaWxlIjoiQzpcXENvZGluZ1xcTXlQcm9qZWN0c1xcY29kZXJzLWp1a2Vib3hcXGNvbXBvbmVudHNcXFByb2ZpbGVFZGl0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlUmVmLCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBHbG9iYWxDb250ZXh0IH0gZnJvbSAnLi4vY29udGV4dC9HbG9iYWxDb250ZXh0JztcclxuaW1wb3J0IEZpbGVVcGxvYWQgZnJvbSAnLi9GaWxlVXBsb2FkJztcclxuaW1wb3J0IGNvbG9ycyBmcm9tICcuLi9jc3MtdmFyaWFibGVzL2NvbG9ycyc7XHJcbmltcG9ydCB7IG1vdGlvbiwgQW5pbWF0ZVByZXNlbmNlIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XHJcblxyXG5cclxuY29uc3QgZWRpdFZhcmlhbnRzID0ge1xyXG4gIGhpZGRlbjogeyBvcGFjaXR5OiAwLCB5OiAtNTAwLCB6SW5kZXg6IC0zfSxcclxuICB2aXNpYmxlOiB7IFxyXG4gICAgb3BhY2l0eTogMSxcclxuICAgIHk6IDAsXHJcbiAgICB6SW5kZXg6IC0zLFxyXG4gICAgdHJhbnNpdGlvbjoge1xyXG4gICAgICBkdXJhdGlvbjogMC41XHJcbiAgICB9XHJcbiAgfSxcclxuICBleGl0OiB7IG9wYWNpdHk6IDAsIHk6IC01MDAsIHpJbmRleDogLTMgfVxyXG59XHJcblxyXG5cclxuY29uc3QgUHJvZmlsZUVkaXQgPSAoe3NldEVkaXRNb2RlfSkgPT4ge1xyXG5cclxuICBjb25zdCB7IHVwZGF0ZVVzZXIsIHByb2ZpbGVVc2VyLCB1cGxvYWRQaG90byB9ID0gdXNlQ29udGV4dChHbG9iYWxDb250ZXh0KTtcclxuXHJcbiAgLy8gLy8gRmV0Y2ggdGhlIHVwZGF0ZWQgcHJvZmlsZSBpbmZvIHRvIHByZWZpbGwgZm9ybVxyXG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgLy8gICBmZXRjaFByb2ZpbGVVc2VyKHVzZXJJZCwgZmFsc2UpO1xyXG4gIC8vIH1cclxuXHJcbiAgLy8gUHJlZmlsbCB0aGUgZm9ybSB3aXRoIHRoZSBjdXJyZW50IGluZm9cclxuICBjb25zdCBbIHByb2ZpbGVJbmZvLCBzZXRQcm9maWxlSW5mbyBdID0gdXNlU3RhdGUoe1xyXG4gICAgZmlyc3ROYW1lOiBwcm9maWxlVXNlci5maXJzdE5hbWUsXHJcbiAgICBsYXN0TmFtZTogcHJvZmlsZVVzZXIubGFzdE5hbWUsXHJcbiAgICBqb2JUaXRsZTogcHJvZmlsZVVzZXIuam9iVGl0bGUsXHJcbiAgICBsb2NhdGlvbjogcHJvZmlsZVVzZXIubG9jYXRpb24sXHJcbiAgICBsYW5ndWFnZXM6IHByb2ZpbGVVc2VyLmxhbmd1YWdlcyxcclxuICAgIGFib3V0OiBwcm9maWxlVXNlci5hYm91dFxyXG4gIH0pXHJcbiAgXHJcbiAgXHJcbiAgLy8gQ3JlYXRlIHJlZnNcclxuICBjb25zdCBmaXJzdE5hbWVSZWYgPSB1c2VSZWYoKTtcclxuICBjb25zdCBsYXN0TmFtZVJlZiA9IHVzZVJlZigpO1xyXG4gIGNvbnN0IGpvYlRpdGxlUmVmID0gdXNlUmVmKCk7XHJcbiAgY29uc3QgbG9jYXRpb25SZWYgPSB1c2VSZWYoKTtcclxuICBjb25zdCBsYW5ndWFnZTFSZWYgPSB1c2VSZWYoKTtcclxuICBjb25zdCBsYW5ndWFnZTJSZWYgPSB1c2VSZWYoKTtcclxuICBjb25zdCBsYW5ndWFnZTNSZWYgPSB1c2VSZWYoKTtcclxuICBjb25zdCBsYW5ndWFnZTRSZWYgPSB1c2VSZWYoKTtcclxuICBjb25zdCBhYm91dFJlZiA9IHVzZVJlZigpO1xyXG5cclxuICBcclxuICBjb25zdCB1cGRhdGVQcm9maWxlSGFuZGxlciA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgLy8gR2V0IGNyZWRlbnRpYWxzIGZyb20gcmVmc1xyXG4gICAgY29uc3QgZmlyc3ROYW1lID0gZmlyc3ROYW1lUmVmLmN1cnJlbnQudmFsdWU7XHJcbiAgICBjb25zdCBsYXN0TmFtZSA9IGxhc3ROYW1lUmVmLmN1cnJlbnQudmFsdWU7XHJcbiAgICBjb25zdCBqb2JUaXRsZSA9IGpvYlRpdGxlUmVmLmN1cnJlbnQudmFsdWU7XHJcbiAgICBjb25zdCBsb2NhdGlvbiA9IGxvY2F0aW9uUmVmLmN1cnJlbnQudmFsdWU7XHJcbiAgICBjb25zdCBsYW5ndWFnZTEgPSBsYW5ndWFnZTFSZWYuY3VycmVudC52YWx1ZTtcclxuICAgIGNvbnN0IGxhbmd1YWdlMiA9IGxhbmd1YWdlMlJlZi5jdXJyZW50LnZhbHVlO1xyXG4gICAgY29uc3QgbGFuZ3VhZ2UzID0gbGFuZ3VhZ2UzUmVmLmN1cnJlbnQudmFsdWU7XHJcbiAgICBjb25zdCBsYW5ndWFnZTQgPSBsYW5ndWFnZTRSZWYuY3VycmVudC52YWx1ZTtcclxuICAgIGNvbnN0IGxhbmd1YWdlcyA9IFtsYW5ndWFnZTEsIGxhbmd1YWdlMiwgbGFuZ3VhZ2UzLCBsYW5ndWFnZTRdXHJcbiAgICBjb25zdCBhYm91dCA9IGFib3V0UmVmLmN1cnJlbnQudmFsdWU7XHJcblxyXG4gICAgLy8gQ2hlY2sgaWYgYW55IG5hbWVzIGZpZWxkcyBhcmUgZW1wdHlcclxuICAgIGlmIChmaXJzdE5hbWUudHJpbSgpLmxlbmd0aCA9PT0gMCB8fCBsYXN0TmFtZS50cmltKCkubGVuZ3RoID09PSAwICkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ2FsbCByZWdpc3RlciBhY3Rpb24gdG8gc2VuZCBhIHBvc3QgcmVxdWVzdCB0byBBUEkgYW5kIGNoYW5nZSB0aGUgbG9jYWwgYW5kIGdsb2JhbCBzdGF0ZVxyXG4gICAgYXdhaXQgdXBkYXRlVXNlcihmaXJzdE5hbWUsIGxhc3ROYW1lLCBqb2JUaXRsZSwgbG9jYXRpb24sIGxhbmd1YWdlcywgYWJvdXQpO1xyXG5cclxuICAgIC8vQ2xvc2UgdGhlIGVkaXQgcHJvZmlsZSBzZWN0aW9uIC0gc2V0IGVkaXQgdG8gZmFsc2Ugb24gcHJvZmlsZSBwYWdlXHJcbiAgICBzZXRFZGl0TW9kZShmYWxzZSk7XHJcbiAgICBcclxuICB9XHJcblxyXG4gIGNvbnN0IGdldEV4aXN0aW5nTGFuZ3VhZ2VzID0gKCkgPT4ge1xyXG4gICAgaWYgKHByb2ZpbGVJbmZvLmxhbmd1YWdlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHJldHVybiBwcm9maWxlSW5mby5sYW5ndWFnZXM7XHJcbiAgICB9XHJcblxyXG4gICAgZWxzZSByZXR1cm4gWycnLCAnJywgJycsICcnXVxyXG4gIH0gXHJcblxyXG5cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxBbmltYXRlUHJlc2VuY2U+XHJcbiAgICA8bW90aW9uLmRpdiB2YXJpYW50cz17ZWRpdFZhcmlhbnRzfSBpbml0aWFsPSdoaWRkZW4nIGFuaW1hdGU9J3Zpc2libGUnIGV4aXQ9J2V4aXQnPlxyXG4gICAgICA8c2VjdGlvbiBpZD1cInByb2ZpbGUtZWRpdFwiPlxyXG4gICAgICA8ZGl2IGlkPVwiZWRpdC1jb250YWluZXJcIj5cclxuXHJcbiAgICAgICAgPGRpdiBpZD1cImNvbDFcIj5cclxuICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXsoZSkgPT4gdXBkYXRlUHJvZmlsZUhhbmRsZXIoZSl9IGlkPVwidXBkYXRlLWZvcm1cIj5cclxuICAgICAgICAgIDxoMj5VcGRhdGUgUHJvZmlsZSBJbmZvOjwvaDI+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJmaXJzdE5hbWVcIj5GaXJzdCBOYW1lOiA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiZmlyc3ROYW1lXCIgZGVmYXVsdFZhbHVlPXtwcm9maWxlSW5mby5maXJzdE5hbWV9ICByZWY9e2ZpcnN0TmFtZVJlZn0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJsYXN0TmFtZVwiPkxhc3QgTmFtZTo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwibGFzdE5hbWVcIiBkZWZhdWx0VmFsdWU9e3Byb2ZpbGVJbmZvLmxhc3ROYW1lfSByZWY9e2xhc3ROYW1lUmVmfSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIkpvYlRpdGxlXCI+Sm9iIFRpdGxlOjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJqb2JUaXRsZVwiIGRlZmF1bHRWYWx1ZT17cHJvZmlsZUluZm8uam9iVGl0bGV9IHJlZj17am9iVGl0bGVSZWZ9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibG9jYXRpb25cIj5Mb2NhdGlvbjo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwibG9jYXRpb25cIiBkZWZhdWx0VmFsdWU9e3Byb2ZpbGVJbmZvLmxvY2F0aW9ufSByZWY9e2xvY2F0aW9uUmVmfSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBpZD1cImxhbmd1YWdlc1wiPlxyXG4gICAgICAgICAgICAgIDxoND5NYWluIFByb2dyYW1taW5nIExhbmd1YWdlcyBVc2VkOjwvaDQ+XHJcbiAgICAgICAgICAgICAgPGRpdiBpZD1cImxhbmd1YWdlLWlucHV0LWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJsYW5ndWFnZTFcIiBjbGFzc05hbWU9XCJsYW5ndWFnZS1sYWJlbFwiPjEuPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwibGFuZ3VhZ2UtaW5wdXRcIiBpZD1cImxhbmd1YWdlMVwiIGRlZmF1bHRWYWx1ZT17Z2V0RXhpc3RpbmdMYW5ndWFnZXMoKVswXX0gcmVmPXtsYW5ndWFnZTFSZWZ9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJsYW5ndWFnZTJcIiBjbGFzc05hbWU9XCJsYW5ndWFnZS1sYWJlbFwiPjIuPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwibGFuZ3VhZ2UtaW5wdXRcIiBpZD1cImxhbmd1YWdlMlwiIGRlZmF1bHRWYWx1ZT17Z2V0RXhpc3RpbmdMYW5ndWFnZXMoKVsxXX0gcmVmPXtsYW5ndWFnZTJSZWZ9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJsYW5ndWFnZTNcIiBjbGFzc05hbWU9XCJsYW5ndWFnZS1sYWJlbFwiPjMuPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwibGFuZ3VhZ2UtaW5wdXRcIiBpZD1cImxhbmd1YWdlM1wiIGRlZmF1bHRWYWx1ZT17Z2V0RXhpc3RpbmdMYW5ndWFnZXMoKVsyXX0gcmVmPXtsYW5ndWFnZTNSZWZ9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJsYW5ndWFnZTRcIiBjbGFzc05hbWU9XCJsYW5ndWFnZS1sYWJlbFwiPjQuPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwibGFuZ3VhZ2UtaW5wdXRcIiBpZD1cImxhbmd1YWdlNFwiIGRlZmF1bHRWYWx1ZT17Z2V0RXhpc3RpbmdMYW5ndWFnZXMoKVszXX0gcmVmPXtsYW5ndWFnZTRSZWZ9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgaWQ9XCJjb2wyXCI+XHJcbiAgICAgICAgICA8ZGl2IGlkPVwiYWJvdXQtaW5wdXRcIj5cclxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJhYm91dFwiPkFib3V0IE1lOjwvbGFiZWw+XHJcbiAgICAgICAgICAgIDx0ZXh0YXJlYSBpZD1cImFib3V0XCIgY29scz1cIjMwXCIgcm93cz1cIjVcIiBkZWZhdWx0VmFsdWU9e3Byb2ZpbGVJbmZvLmFib3V0fSByZWY9e2Fib3V0UmVmfSBmb3JtPVwidXBkYXRlLWZvcm1cIi8+XHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGZvcm09XCJ1cGRhdGUtZm9ybVwiPlVwZGF0ZSBJbmZvPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxGaWxlVXBsb2FkIHNldEVkaXRNb2RlPXtzZXRFZGl0TW9kZX0vPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICB7LyogPGJ1dHRvbiBpZD1cImNhbmNlbFwiIG9uQ2xpY2s9eygpID0+IHNldEVkaXRNb2RlKGZhbHNlKX0+XHJcbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS10aW1lc1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cclxuICAgICAgICA8L2J1dHRvbj4gKi99XHJcbiAgICAgICAgPGRpdiBpZD1cImNhbmNlbC1idG5cIj5cclxuICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXRpbWVzLWNpcmNsZSBmYS0yeFwiIGlkPVwiY2FuY2VsXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgb25DbGljaz17KCkgPT4gc2V0RWRpdE1vZGUoZmFsc2UpfT48L2k+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgIFxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPC9zZWN0aW9uPlxyXG5cclxuXHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgXHJcbiAgICAgICAgc2VjdGlvbiB7XHJcbiAgICAgICAgICAvKiBwYWRkaW5nOiAzcmVtOyAqL1xyXG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICAgICAgICAgIHotaW5kZXg6IC0zO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgI2VkaXQtY29udGFpbmVyIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAjY29sMSB7XHJcbiAgICAgICAgICBwYWRkaW5nOiAzcmVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgI2NvbDEgaDIge1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlucHV0IHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XHJcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxMnB4IDE1cHg7XHJcbiAgICAgICAgICBtYXJnaW46IDhweCAwO1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0ZXh0YXJlYSB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxMnB4IDE1cHg7XHJcbiAgICAgICAgICBtYXJnaW46IDhweCAwO1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMHJlbTtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuICAgICAgICAgIGZvbnQ6IGluaGVyaXQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAjbGFuZ3VhZ2VzIHtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAjbGFuZ3VhZ2UtaW5wdXQtY29udGFpbmVyIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnMgMWZyIDFmcjtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBoNCB7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNDAwIDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxhYmVsLmxhbmd1YWdlLWxhYmVsIHtcclxuICAgICAgICAgIG1hcmdpbi1yaWdodDogMC4yNXJlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlucHV0Lmxhbmd1YWdlLWlucHV0IHtcclxuICAgICAgICAgIHdpZHRoOiA5NSU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBidXR0b25bdHlwZT0nc3VibWl0J10ge1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICNjYW5jZWwtYnRuIHtcclxuICAgICAgICAgIC8qIGN1cnNvcjogcG9pbnRlcjsgKi9cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgaSB7XHJcbiAgICAgICAgICBtYXJnaW46IDAuODVyZW07XHJcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAjY29sMiB7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgICAgICAgcGFkZGluZzogNC42cmVtIDAgMCAzcmVtO1xyXG4gICAgICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAke2NvbG9ycy5wcmltYXJ5fVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgI2Fib3V0LWlucHV0IHtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07ICBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qIE1lZGlhIHF1ZXJpZXMgKi9cclxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogMTE1MHB4KSB7XHJcblxyXG4gICAgICAgICAgI3Byb2ZpbGUtZWRpdCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA5MHZ3O1xyXG4gICAgICAgICAgICBtYXJnaW46IDFyZW0gYXV0byAxcmVtIGF1dG87XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgI2VkaXQtY29udGFpbmVyIHtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC8qIHRleHRhcmVhIHtcclxuICAgICAgICAgICAgd2lkdGg6IDk1JTtcclxuICAgICAgICAgIH0gKi9cclxuXHJcbiAgICAgICAgICAjY29sMSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICNjYW5jZWwge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRvcDogNXB4O1xyXG4gICAgICAgICAgICByaWdodDogNXB4O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICNjb2wyIHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgICAgICAgcGFkZGluZzogMCAzcmVtIDNyZW0gM3JlbTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NzhweCkge1xyXG4gICAgICAgICAgI2xhbmd1YWdlLWlucHV0LWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEsIDFmcik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNDQwcHgpIHtcclxuICAgICAgICAgICNsYW5ndWFnZS1pbnB1dC1jb250YWluZXIgbGFiZWx7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgI2NvbDEge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAycmVtIDJyZW0gMXJlbSAycmVtO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICNjb2wyIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMCAycmVtIDNyZW0gMnJlbTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAzNjBweCkge1xyXG4gICAgICAgICAgI2NhbmNlbCB7XHJcbiAgICAgICAgICAgIHRvcDogLTVweDtcclxuICAgICAgICAgICAgcmlnaHQ6IC01cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICBcclxuICAgICAgYH08L3N0eWxlPlxyXG5cclxuICAgIDwvbW90aW9uLmRpdj5cclxuICAgIDwvQW5pbWF0ZVByZXNlbmNlPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZmlsZUVkaXQ7Il19 */
/*@ sourceURL=C:\\Coding\\MyProjects\\coders-jukebox\\components\\ProfileEdit.js */`)));
};

/* harmony default export */ __webpack_exports__["default"] = (ProfileEdit);

/***/ }),

/***/ "./components/ProfileInfo.js":
/*!***********************************!*\
  !*** ./components/ProfileInfo.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_GlobalContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/GlobalContext */ "./context/GlobalContext.js");
/* harmony import */ var _css_variables_colors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../css-variables/colors */ "./css-variables/colors.js");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ "framer-motion");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_4__);


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




const profileInfoVariants = {// hidden: { opacity: 0, position: 'relative'},
  // visible: { 
  //   opacity: 1,
  //   position: 'relative',
  //   transition: {
  //     duration: 1.5
  //   }
  // }
}; // const infoVariants = {
//   hidden: { opacity: 0, margin: auto },
//   visible: {
//     opacity: 1,
//     transition: {
//       duration: 1.5,
//       delay: 1
//     }
//   }
// }

const ProfileInfo = ({
  setEditMode,
  editMode
}) => {
  const {
    authState,
    currentUser,
    profileUser,
    fetchProfileUser,
    clearProfileUser,
    addFavourite,
    removeFavourite
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context_GlobalContext__WEBPACK_IMPORTED_MODULE_2__["GlobalContext"]);
  const {
    0: isFavourite,
    1: setIsFavourite
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);

  const addFavouriteHandler = () => {
    addFavourite(profileUser.id);
  };

  const removeFavouriteHandler = () => {
    removeFavourite(profileUser.id);
  };

  const getLanguageString = () => {
    const languages = profileUser.languages;
    let languageString = '';

    if (profileUser.languages.length === 0) {
      return languageString;
    } else {
      languages.map((language, index) => {
        if (language !== '') {
          languageString += language;

          if (languages[index + 1] !== '' && index + 1 !== languages.length) {
            languageString += ' ' + '/' + ' ';
          }
        }
      });
      return languageString;
    }
  };

  return __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__["motion"].div, {
    variants: profileInfoVariants,
    initial: "hidden",
    animate: "visible"
  }, __jsx("section", {
    id: "user",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2042167779", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].tertiary, profileUser.profilePhotoFilename, profileUser.profilePhotoFilename, _css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].secondary]]])
  }, __jsx("div", {
    id: "profile-photo",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2042167779", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].tertiary, profileUser.profilePhotoFilename, profileUser.profilePhotoFilename, _css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].secondary]]])
  }, profileUser.profilePhotoFilename !== null && profileUser.profilePhotoFilename !== '' && __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2042167779", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].tertiary, profileUser.profilePhotoFilename, profileUser.profilePhotoFilename, _css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].secondary]]]) + " " + "crop"
  }), (profileUser.profilePhotoFilename === null || profileUser.profilePhotoFilename === '') && __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2042167779", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].tertiary, profileUser.profilePhotoFilename, profileUser.profilePhotoFilename, _css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].secondary]]]) + " " + "crop"
  }, __jsx("img", {
    src: "/default-avatar.jpg",
    alt: "profile-photo",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2042167779", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].tertiary, profileUser.profilePhotoFilename, profileUser.profilePhotoFilename, _css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].secondary]]])
  }))), __jsx("div", {
    id: "user-info",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2042167779", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].tertiary, profileUser.profilePhotoFilename, profileUser.profilePhotoFilename, _css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].secondary]]])
  }, __jsx("div", {
    id: "info",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2042167779", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].tertiary, profileUser.profilePhotoFilename, profileUser.profilePhotoFilename, _css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].secondary]]])
  }, __jsx("h1", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2042167779", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].tertiary, profileUser.profilePhotoFilename, profileUser.profilePhotoFilename, _css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].secondary]]])
  }, profileUser.firstName, " ", profileUser.lastName), __jsx("h2", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2042167779", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].tertiary, profileUser.profilePhotoFilename, profileUser.profilePhotoFilename, _css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].secondary]]])
  }, "Job Title: \xA0 ", profileUser.jobTitle), __jsx("h2", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2042167779", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].tertiary, profileUser.profilePhotoFilename, profileUser.profilePhotoFilename, _css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].secondary]]])
  }, "Location: \xA0 ", profileUser.location), __jsx("h2", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2042167779", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].tertiary, profileUser.profilePhotoFilename, profileUser.profilePhotoFilename, _css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].secondary]]])
  }, "Languages: \xA0 ", getLanguageString())), __jsx("div", {
    id: "buttons",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2042167779", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].tertiary, profileUser.profilePhotoFilename, profileUser.profilePhotoFilename, _css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].secondary]]])
  }, profileUser.id === currentUser.id && __jsx("i", {
    id: "profile-edit-cog",
    "aria-hidden": "true",
    onClick: () => setEditMode(!editMode),
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2042167779", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].tertiary, profileUser.profilePhotoFilename, profileUser.profilePhotoFilename, _css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].secondary]]]) + " " + "fa fa-cog fa-2x"
  }) // <button id="profile-edit-btn" onClick={showProfileEditSection}><i className="fa fa-cog" aria-hidden="true"></i></button>
  , profileUser.id !== currentUser.id && !currentUser.favourites.includes(profileUser.id) && authState.authenticated === true && __jsx("button", {
    id: "add-favourite",
    onClick: addFavouriteHandler,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2042167779", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].tertiary, profileUser.profilePhotoFilename, profileUser.profilePhotoFilename, _css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].secondary]]])
  }, __jsx("i", {
    "aria-hidden": "true",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2042167779", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].tertiary, profileUser.profilePhotoFilename, profileUser.profilePhotoFilename, _css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].secondary]]]) + " " + "fa fa-star-o fa-2x favourite"
  })), currentUser.favourites.includes(profileUser.id) && __jsx("button", {
    id: "remove-favourite",
    onClick: removeFavouriteHandler,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2042167779", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].tertiary, profileUser.profilePhotoFilename, profileUser.profilePhotoFilename, _css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].secondary]]])
  }, __jsx("i", {
    "aria-hidden": "true",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2042167779", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].tertiary, profileUser.profilePhotoFilename, profileUser.profilePhotoFilename, _css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].secondary]]]) + " " + "fa fa-star fa-2x favourite"
  }))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2042167779",
    dynamic: [_css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].tertiary, profileUser.profilePhotoFilename, profileUser.profilePhotoFilename, _css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].secondary]
  }, `section.__jsx-style-dynamic-selector{border-radius:10px;margin-top:1rem;}#user.__jsx-style-dynamic-selector{margin:2rem 0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;background:-webkit-linear-gradient(to right,#FF4B2B,#FF416C);background:linear-gradient(to right,#FF4B2B,#FF416C);}#user.__jsx-style-dynamic-selector h1.__jsx-style-dynamic-selector{font-size:3rem;margin:1rem 0 4rem 0;line-height:3rem;}#user.__jsx-style-dynamic-selector h2.__jsx-style-dynamic-selector{margin-bottom:2rem;}#profile-photo.__jsx-style-dynamic-selector{width:33%;background:white;padding:3.5rem 3rem 3rem 3rem;border:1px solid black;border-right:none;border-radius:10px 0 0 10px;}img.__jsx-style-dynamic-selector{width:50px;}#user-info.__jsx-style-dynamic-selector{width:61%;padding:3rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}i#profile-edit-cog.__jsx-style-dynamic-selector{cursor:pointer;-webkit-transition:-webkit-transform 2s;-webkit-transition:transform 2s;transition:transform 2s;}i#profile-edit-cog.__jsx-style-dynamic-selector:hover{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}button#add-favourite.__jsx-style-dynamic-selector,button#remove-favourite.__jsx-style-dynamic-selector{cursor:pointer;background:white;color:black;border:1px solid ${_css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].tertiary};border-radius:50%;padding:0.7rem;font-size:1rem;height:50px;width:50px;position:relative;}#playlist.__jsx-style-dynamic-selector{margin-top:4rem;}.crop.__jsx-style-dynamic-selector{width:266px;height:266px;overflow:hidden;border-radius:50%;background-image:url('/image/${profileUser.profilePhotoFilename}');background-size:cover;}img.__jsx-style-dynamic-selector{width:100%;height:100%;}i.favourite.__jsx-style-dynamic-selector{color:${_css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].secondary};position:absolute;top:9px;left:9.6px;}@media (max-width:1150px ){#user.__jsx-style-dynamic-selector{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;background:none;width:75%;margin:auto;}#profile-photo.__jsx-style-dynamic-selector{margin:auto;width:61%;background:none;}.crop.__jsx-style-dynamic-selector{margin:auto;}#user-info.__jsx-style-dynamic-selector{background:-webkit-linear-gradient(to right,#FF4B2B,#FF416C);background:linear-gradient(to right,#FF4B2B,#FF416C);margin:auto;width:90%;border-radius:10px;padding:2.5rem;}}@media (max-width:800px){#profile-photo.__jsx-style-dynamic-selector{padding:0;margin:3.5rem auto 3rem auto;}}@media (max-width:768px){#user-info.__jsx-style-dynamic-selector{position:relative;}#info.__jsx-style-dynamic-selector{width:100%;margin:auto;}#buttons.__jsx-style-dynamic-selector{position:absolute;right:21px;top:21px;}}@media (max-width:580px ){#user.__jsx-style-dynamic-selector{width:100%;}#user.__jsx-style-dynamic-selector h1.__jsx-style-dynamic-selector{margin:2rem 0 3rem 0;font-size:2.5rem;}h2.__jsx-style-dynamic-selector{font-size:1.5rem;}}@media (max-width:470px ){#buttons.__jsx-style-dynamic-selector{position:absolute;right:14px;top:14px;}#user-info.__jsx-style-dynamic-selector h1.__jsx-style-dynamic-selector{text-align:center;}#user-info.__jsx-style-dynamic-selector{padding:2rem;}#user.__jsx-style-dynamic-selector h1.__jsx-style-dynamic-selector{font-size:2rem;margin-bottom:1rem;}h2.__jsx-style-dynamic-selector{font-size:1.2rem;text-align:center;}}@media (max-width:445px ){#profile-photo.__jsx-style-dynamic-selector{width:100%;}.crop.__jsx-style-dynamic-selector{max-width:200px;max-height:200px;}}@media (max-width:370px ){i.favourite.__jsx-style-dynamic-selector{top:4.7px;left:5.7px;}.fa-star.__jsx-style-dynamic-selector .fa-2x.__jsx-style-dynamic-selector,.fa-star-o.__jsx-style-dynamic-selector <div.__jsx-style-dynamic-selector className="fa-2x".__jsx-style-dynamic-selector></div.__jsx-style-dynamic-selector>{font-size:1.4em;}button#remove-favourite.__jsx-style-dynamic-selector{height:41px;width:41px;}}@media (max-width:320px ){#user.__jsx-style-dynamic-selector h1.__jsx-style-dynamic-selector{font-size:2.2rem;margin-bottom:2rem;}}@media (max-height:820px ){#profile-photo.__jsx-style-dynamic-selector{margin:2rem auto;}}@media (max-height:770px ){#profile-photo.__jsx-style-dynamic-selector{margin:2rem auto;}}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxDb2RpbmdcXE15UHJvamVjdHNcXGNvZGVycy1qdWtlYm94XFxjb21wb25lbnRzXFxQcm9maWxlSW5mby5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwR2tCLEFBTTRCLEFBTUwsQUFXQyxBQU1JLEFBSVQsQUFTQyxBQUtELEFBT0ssQUFLVSxBQUlWLEFBZUMsQUFJSixBQVdELEFBS3dCLEFBU1gsQUFPVixBQU1BLEFBS21ELEFBV3JELEFBT1EsQUFNUCxBQVNPLEFBU1AsQUFJVSxBQUtKLEFBT0MsQUFNQSxBQUlMLEFBSUUsQUFLRSxBQU9OLEFBSUssQUFRTixBQU1iLEFBR2UsQUFRSyxBQU9BLEFBTUEsVUF6TkYsQUFjSixBQXlGa0IsQUFxRmxCLENBbkxmLEFBbURjLEFBd0RFLEFBa0JkLEFBMENBLENBL0hhLEFBZ0NELEFBT1osQUE2R2EsQ0FyQ2IsQ0FyTGEsQ0FXUSxBQStCRyxBQVNQLEFBc0lJLENBdkh2QixBQXVJcUIsQUFhbkIsQ0FsREEsQUEwQm9CLEFBb0NDLEFBT3JCLEFBTUEsQ0ExR0EsQUFhYSxBQXlCQSxBQU1iLENBdkxnQixBQXVCbEIsRUErSUMsQUFrREMsQ0EzR2tCLENBbkVMLEFBOENmLEFBd0RFLEFBaUZBLEVBcEpnQixFQWpEYyxFQTZIbkIsQUF5QkEsR0F4SEMsQ0FzSlosQ0FoQkEsQ0E5TEYsQUEwRm9CLEFBeUdsQixDQW5MaUIsQUF1TmpCLEVBM0hBLEFBNENBLEFBWUEsQUFhQSxDQWhEQSxFQXJEa0IsR0FuQjRCLFNBeENoRCxBQTBFVSxJQWhFZSxFQW1EcUMsRUFjakQsQUF5QjhDLFdBeEIzRCxNQU1vQixFQXZFQSxPQXVCcEIsQ0E5Q2dDLEVBcURaLElBMENOLEdBM0RrQixDQVpGLE1Bd0VkLElBMUNDLEdBWmpCLEdBdUVnQixFQWhCZCxHQXRCc0IsSUFwQlAsR0E5QmpCLEFBeUZjLFVBQ1MsRUEzRFQsR0FvQmQsU0FuQmEsS0EyRE0sTUExREMsU0EyRGxCLFNBeERGLHdCQTNEaUUsU0FtQ2pFLG9EQWxDeUQscURBR3pEIiwiZmlsZSI6IkM6XFxDb2RpbmdcXE15UHJvamVjdHNcXGNvZGVycy1qdWtlYm94XFxjb21wb25lbnRzXFxQcm9maWxlSW5mby5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEdsb2JhbENvbnRleHQgfSBmcm9tICcuLi9jb250ZXh0L0dsb2JhbENvbnRleHQnO1xyXG5pbXBvcnQgY29sb3JzIGZyb20gJy4uL2Nzcy12YXJpYWJsZXMvY29sb3JzJztcclxuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XHJcblxyXG5jb25zdCBwcm9maWxlSW5mb1ZhcmlhbnRzID0ge1xyXG4gIC8vIGhpZGRlbjogeyBvcGFjaXR5OiAwLCBwb3NpdGlvbjogJ3JlbGF0aXZlJ30sXHJcbiAgLy8gdmlzaWJsZTogeyBcclxuICAvLyAgIG9wYWNpdHk6IDEsXHJcbiAgLy8gICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAvLyAgIHRyYW5zaXRpb246IHtcclxuICAvLyAgICAgZHVyYXRpb246IDEuNVxyXG4gIC8vICAgfVxyXG4gIC8vIH1cclxufVxyXG5cclxuLy8gY29uc3QgaW5mb1ZhcmlhbnRzID0ge1xyXG4vLyAgIGhpZGRlbjogeyBvcGFjaXR5OiAwLCBtYXJnaW46IGF1dG8gfSxcclxuLy8gICB2aXNpYmxlOiB7XHJcbi8vICAgICBvcGFjaXR5OiAxLFxyXG4vLyAgICAgdHJhbnNpdGlvbjoge1xyXG4vLyAgICAgICBkdXJhdGlvbjogMS41LFxyXG4vLyAgICAgICBkZWxheTogMVxyXG4vLyAgICAgfVxyXG4vLyAgIH1cclxuLy8gfVxyXG5cclxuY29uc3QgUHJvZmlsZUluZm8gPSAoeyBzZXRFZGl0TW9kZSwgZWRpdE1vZGUgfSkgPT4ge1xyXG5cclxuICBjb25zdCB7IGF1dGhTdGF0ZSwgY3VycmVudFVzZXIsIHByb2ZpbGVVc2VyLCBmZXRjaFByb2ZpbGVVc2VyLCBjbGVhclByb2ZpbGVVc2VyLCBhZGRGYXZvdXJpdGUsIHJlbW92ZUZhdm91cml0ZSB9ID0gdXNlQ29udGV4dChHbG9iYWxDb250ZXh0KTtcclxuXHJcbiAgY29uc3QgW2lzRmF2b3VyaXRlLCBzZXRJc0Zhdm91cml0ZV0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgY29uc3QgYWRkRmF2b3VyaXRlSGFuZGxlciA9ICgpID0+IHtcclxuICAgIGFkZEZhdm91cml0ZShwcm9maWxlVXNlci5pZCk7XHJcbiAgfVxyXG5cclxuICBjb25zdCByZW1vdmVGYXZvdXJpdGVIYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgcmVtb3ZlRmF2b3VyaXRlKHByb2ZpbGVVc2VyLmlkKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGdldExhbmd1YWdlU3RyaW5nID0gKCkgPT4ge1xyXG4gICAgY29uc3QgbGFuZ3VhZ2VzID0gcHJvZmlsZVVzZXIubGFuZ3VhZ2VzO1xyXG4gICAgbGV0IGxhbmd1YWdlU3RyaW5nID0gJyc7XHJcblxyXG4gICAgaWYgKHByb2ZpbGVVc2VyLmxhbmd1YWdlcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgcmV0dXJuIGxhbmd1YWdlU3RyaW5nO1xyXG4gICAgfVxyXG5cclxuICAgIGVsc2Uge1xyXG4gICAgICBsYW5ndWFnZXMubWFwKChsYW5ndWFnZSwgaW5kZXgpID0+IHtcclxuICAgICAgICBpZiAobGFuZ3VhZ2UgIT09ICcnKSB7XHJcbiAgICAgICAgICBsYW5ndWFnZVN0cmluZyArPSBsYW5ndWFnZTtcclxuICAgICAgICAgIGlmIChsYW5ndWFnZXNbaW5kZXggKyAxXSAhPT0gJycgJiYgaW5kZXggKyAxICE9PSBsYW5ndWFnZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGxhbmd1YWdlU3RyaW5nICs9ICcgJyArICcvJyArICcgJztcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIHJldHVybiBsYW5ndWFnZVN0cmluZztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8bW90aW9uLmRpdiB2YXJpYW50cz17cHJvZmlsZUluZm9WYXJpYW50c30gaW5pdGlhbD0naGlkZGVuJyBhbmltYXRlPSd2aXNpYmxlJz5cclxuICAgICAgPHNlY3Rpb24gaWQ9XCJ1c2VyXCI+XHJcbiAgICAgICAgPGRpdiBpZD1cInByb2ZpbGUtcGhvdG9cIj5cclxuICAgICAgICAgIHtwcm9maWxlVXNlci5wcm9maWxlUGhvdG9GaWxlbmFtZSAhPT0gbnVsbCAmJiBwcm9maWxlVXNlci5wcm9maWxlUGhvdG9GaWxlbmFtZSAhPT0gJycgJiZcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjcm9wXCI+XHJcbiAgICAgICAgICAgICAgey8qIDxpbWcgc3JjPXtgaHR0cDovL2xvY2FsaG9zdDo1MDAwL2ltYWdlLyR7cHJvZmlsZVVzZXIucHJvZmlsZVBob3RvRmlsZW5hbWV9YH0gYWx0PVwicHJvZmlsZS1waG90b1wiIC8+ICovfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHsocHJvZmlsZVVzZXIucHJvZmlsZVBob3RvRmlsZW5hbWUgPT09IG51bGwgfHwgcHJvZmlsZVVzZXIucHJvZmlsZVBob3RvRmlsZW5hbWUgPT09ICcnKSAmJlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNyb3BcIj5cclxuICAgICAgICAgICAgICA8aW1nIHNyYz0nL2RlZmF1bHQtYXZhdGFyLmpwZycgYWx0PVwicHJvZmlsZS1waG90b1wiIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGlkPVwidXNlci1pbmZvXCI+XHJcbiAgICAgICAgICA8ZGl2IGlkPVwiaW5mb1wiPlxyXG4gICAgICAgICAgICA8aDE+e3Byb2ZpbGVVc2VyLmZpcnN0TmFtZX0ge3Byb2ZpbGVVc2VyLmxhc3ROYW1lfTwvaDE+XHJcbiAgICAgICAgICAgIDxoMj5Kb2IgVGl0bGU6ICZuYnNwOyB7cHJvZmlsZVVzZXIuam9iVGl0bGV9PC9oMj5cclxuICAgICAgICAgICAgPGgyPkxvY2F0aW9uOiAmbmJzcDsge3Byb2ZpbGVVc2VyLmxvY2F0aW9ufTwvaDI+XHJcbiAgICAgICAgICAgIDxoMj5MYW5ndWFnZXM6ICZuYnNwOyB7Z2V0TGFuZ3VhZ2VTdHJpbmcoKX08L2gyPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBpZD1cImJ1dHRvbnNcIj5cclxuICAgICAgICAgICAge3Byb2ZpbGVVc2VyLmlkID09PSBjdXJyZW50VXNlci5pZCAmJlxyXG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWNvZyBmYS0yeFwiIGlkPVwicHJvZmlsZS1lZGl0LWNvZ1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIG9uQ2xpY2s9eygpID0+IHNldEVkaXRNb2RlKCFlZGl0TW9kZSl9PjwvaT5cclxuICAgICAgICAgICAgICAvLyA8YnV0dG9uIGlkPVwicHJvZmlsZS1lZGl0LWJ0blwiIG9uQ2xpY2s9e3Nob3dQcm9maWxlRWRpdFNlY3Rpb259PjxpIGNsYXNzTmFtZT1cImZhIGZhLWNvZ1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT48L2J1dHRvbj5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB7cHJvZmlsZVVzZXIuaWQgIT09IGN1cnJlbnRVc2VyLmlkICYmICEoY3VycmVudFVzZXIuZmF2b3VyaXRlcy5pbmNsdWRlcyhwcm9maWxlVXNlci5pZCkpICYmIGF1dGhTdGF0ZS5hdXRoZW50aWNhdGVkID09PSB0cnVlICYmXHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cImFkZC1mYXZvdXJpdGVcIiBvbkNsaWNrPXthZGRGYXZvdXJpdGVIYW5kbGVyfT5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXN0YXItbyBmYS0yeCBmYXZvdXJpdGVcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAge2N1cnJlbnRVc2VyLmZhdm91cml0ZXMuaW5jbHVkZXMocHJvZmlsZVVzZXIuaWQpICYmXHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cInJlbW92ZS1mYXZvdXJpdGVcIiBvbkNsaWNrPXtyZW1vdmVGYXZvdXJpdGVIYW5kbGVyfT5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXN0YXIgZmEtMnggZmF2b3VyaXRlXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9zZWN0aW9uPlxyXG5cclxuXHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuXHJcbiAgICAgIHNlY3Rpb24ge1xyXG4gICAgICAgIC8qIHBhZGRpbmc6IDNyZW07ICovXHJcbiAgICAgICAgLyogYm9yZGVyOiAxcHggc29saWQgd2hpdGU7ICovXHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgICAgIC8qIHotaW5kZXg6IDI7ICovXHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgICN1c2VyIHtcclxuICAgICAgICBtYXJnaW46IDJyZW0gMDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAvKiBiYWNrZ3JvdW5kOiAjRkY0MTZDOyAqL1xyXG4gICAgICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjRkY0QjJCLCAjRkY0MTZDKTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNGRjRCMkIsICNGRjQxNkMpO1xyXG4gICAgICAgIC8qIGJveC1zaGFkb3c6IDAgMTRweCAyOHB4IHJnYmEoMCwwLDAsMC4yNSksIFxyXG4gICAgICAgICAgMCAxMHB4IDEwcHggcmdiYSgwLDAsMCwwLjIyKTsgKi9cclxuICAgICAgfVxyXG5cclxuICAgICAgI3VzZXIgaDEge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogM3JlbTtcclxuICAgICAgICBtYXJnaW46IDFyZW0gMCA0cmVtIDA7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDNyZW07XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgICN1c2VyIGgyIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAjcHJvZmlsZS1waG90byB7XHJcbiAgICAgICAgd2lkdGg6IDMzJTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgICBwYWRkaW5nOiAzLjVyZW0gM3JlbSAzcmVtIDNyZW07XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiBub25lO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHggMCAwIDEwcHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICN1c2VyLWluZm8ge1xyXG4gICAgICAgIC8qIGhlaWdodDogMTAwJTsgKi9cclxuICAgICAgICB3aWR0aDogNjElO1xyXG4gICAgICAgIHBhZGRpbmc6IDNyZW07XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGkjcHJvZmlsZS1lZGl0LWNvZyB7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAycztcclxuICAgICAgfVxyXG5cclxuICAgICAgaSNwcm9maWxlLWVkaXQtY29nOmhvdmVyIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBidXR0b24jYWRkLWZhdm91cml0ZSwgYnV0dG9uI3JlbW92ZS1mYXZvdXJpdGUge1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJHtjb2xvcnMudGVydGlhcnl9O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICBwYWRkaW5nOiAwLjdyZW07XHJcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICB3aWR0aDogNTBweDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLyogaGVpZ2h0OiAxMCU7ICovXHJcbiAgICAgIH1cclxuXHJcbiAgICAgICNwbGF5bGlzdCB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNHJlbTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmNyb3Age1xyXG4gICAgICAgIHdpZHRoOiAyNjZweDtcclxuICAgICAgICBoZWlnaHQ6IDI2NnB4O1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIC8qIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2ltYWdlLyR7cHJvZmlsZVVzZXIucHJvZmlsZVBob3RvRmlsZW5hbWV9Jyk7ICovXHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvaW1hZ2UvJHtwcm9maWxlVXNlci5wcm9maWxlUGhvdG9GaWxlbmFtZX0nKTtcclxuICAgICAgICAvKiBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7ICovXHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgaW1nIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGkuZmF2b3VyaXRlIHtcclxuICAgICAgICBjb2xvcjogJHtjb2xvcnMuc2Vjb25kYXJ5fTtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiA5cHg7XHJcbiAgICAgICAgbGVmdDogOS42cHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8qIE1lZGlhIHF1ZXJpZXMgKi9cclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDExNTBweCApIHtcclxuICAgICAgICAjdXNlciB7XHJcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgICAgICAgIHdpZHRoOiA3NSU7XHJcbiAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAjcHJvZmlsZS1waG90byB7XHJcbiAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICB3aWR0aDogNjElO1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jcm9wIHtcclxuICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgIC8qIHdpZHRoOiA4MCU7ICovXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAjdXNlci1pbmZvIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjRkY0QjJCLCAjRkY0MTZDKTtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI0ZGNEIyQiwgI0ZGNDE2Qyk7XHJcbiAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgIHBhZGRpbmc6IDIuNXJlbTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xyXG4gICAgICAgICNwcm9maWxlLXBob3RvIHtcclxuICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICBtYXJnaW46IDMuNXJlbSBhdXRvIDNyZW0gYXV0bztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgICN1c2VyLWluZm8ge1xyXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgLyogcGFkZGluZzogMDsgKi9cclxuICAgICAgICAgIC8qIHRleHQtYWxpZ246IGNlbnRlcjsgKi9cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICNpbmZvIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaDEge1xyXG4gICAgICAgICAgLyogdGV4dC1hbGlnbjogY2VudGVyOyAqL1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAjYnV0dG9ucyB7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICByaWdodDogMjFweDtcclxuICAgICAgICAgIHRvcDogMjFweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICB9XHJcblxyXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNTgwcHggKSB7XHJcbiAgICAgICAgI3VzZXIge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICN1c2VyIGgxIHtcclxuICAgICAgICAgIG1hcmdpbjogMnJlbSAwIDNyZW0gMDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMi41cmVtIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaDIge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNDcwcHggKSB7XHJcblxyXG4gICAgICAgICNidXR0b25zIHtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIHJpZ2h0OiAxNHB4O1xyXG4gICAgICAgICAgdG9wOiAxNHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgI3VzZXItaW5mbyBoMSB7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgfSBcclxuXHJcbiAgICAgICAgI3VzZXItaW5mbyB7XHJcbiAgICAgICAgICBwYWRkaW5nOiAycmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAjdXNlciBoMSB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtOyBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGgyIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ0NXB4ICkge1xyXG4gICAgICAgICNwcm9maWxlLXBob3RvIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNyb3Age1xyXG4gICAgICAgICAgbWF4LXdpZHRoOiAyMDBweDtcclxuICAgICAgICAgIG1heC1oZWlnaHQ6IDIwMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDM3MHB4ICkge1xyXG5cclxuICAgICAgICBpLmZhdm91cml0ZSB7XHJcbiAgICAgICAgICB0b3A6IDQuN3B4O1xyXG4gICAgICAgICAgbGVmdDogNS43cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuZmEtc3RhciAuZmEtMngsIC5mYS1zdGFyLW8gPGRpdiBjbGFzc05hbWU9XCJmYS0yeFwiPjwvZGl2PiB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEuNGVtXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBidXR0b24jcmVtb3ZlLWZhdm91cml0ZSB7XHJcbiAgICAgICAgICBoZWlnaHQ6IDQxcHg7XHJcbiAgICAgICAgICB3aWR0aDogNDFweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICB9XHJcblxyXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogMzIwcHggKSB7XHJcbiAgICAgICAgI3VzZXIgaDEge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAyLjJyZW07XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgQG1lZGlhIChtYXgtaGVpZ2h0OiA4MjBweCApIHtcclxuICAgICAgICAjcHJvZmlsZS1waG90byB7XHJcbiAgICAgICAgICBtYXJnaW46IDJyZW0gYXV0bztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIEBtZWRpYSAobWF4LWhlaWdodDogNzcwcHggKSB7XHJcbiAgICAgICAgI3Byb2ZpbGUtcGhvdG8ge1xyXG4gICAgICAgICAgbWFyZ2luOiAycmVtIGF1dG87XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICBcclxuICAgIGB9PC9zdHlsZT5cclxuXHJcbiAgICA8L21vdGlvbi5kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9maWxlSW5mbztcclxuIl19 */
/*@ sourceURL=C:\\Coding\\MyProjects\\coders-jukebox\\components\\ProfileInfo.js */`));
};

/* harmony default export */ __webpack_exports__["default"] = (ProfileInfo);

/***/ }),

/***/ "./components/SearchBar.js":
/*!*********************************!*\
  !*** ./components/SearchBar.js ***!
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


const Searchbar = ({
  placeholder,
  submitHandler
}) => {
  const {
    0: searchInput,
    1: setSearchInput
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');

  const onChangeHandler = e => {
    setSearchInput(e.target.value);
  };

  const onFormSubmit = e => {
    e.preventDefault(); // Call the relevant submit handler from props

    submitHandler(searchInput);
  };

  return __jsx("div", {
    id: "main-searchbar",
    className: "jsx-1336654080"
  }, __jsx("form", {
    onSubmit: onFormSubmit,
    className: "jsx-1336654080"
  }, __jsx("label", {
    htmlFor: "search-input",
    className: "jsx-1336654080"
  }, __jsx("svg", {
    id: "search-icon",
    height: "24",
    viewBox: "0 0 24 24",
    width: "24",
    className: "jsx-1336654080"
  }, __jsx("path", {
    d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z",
    className: "jsx-1336654080"
  }), __jsx("path", {
    d: "M0 0h24v24H0z",
    fill: "none",
    className: "jsx-1336654080"
  }))), __jsx("input", {
    type: "text",
    name: "search-input",
    placeholder: placeholder,
    onChange: onChangeHandler,
    value: searchInput,
    className: "jsx-1336654080"
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1336654080"
  }, "form.jsx-1336654080{width:68.5%;}label.jsx-1336654080{position:absolute;top:8px;left:12px;}#main-searchbar.jsx-1336654080{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:relative;width:100%;font:inherit;}#main-searchbar.jsx-1336654080 input.jsx-1336654080{width:100%;border-radius:23px;padding:0.6rem 3rem 0.5rem 2.3rem;font-size:1.1rem;border:none;background-color:white;}#main-searchbar.jsx-1336654080 input.jsx-1336654080:focus{outline:none;}@media (max-width:1100px){#main-searchbar.jsx-1336654080 input.jsx-1336654080{width:130%;}}@media (max-width:830px){#main-searchbar.jsx-1336654080{width:90%;margin:auto;}#main-searchbar.jsx-1336654080 input.jsx-1336654080{margin:auto;}form.jsx-1336654080{width:75.5%;}}@media ( max-width:430px){#main-searchbar.jsx-1336654080 input.jsx-1336654080{font-size:1rem;}label.jsx-1336654080{top:6px;left:10px;}}@media ( max-width:360px){#main-searchbar.jsx-1336654080{width:100%;}#main-searchbar.jsx-1336654080 input.jsx-1336654080{font-size:0.9rem;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxDb2RpbmdcXE15UHJvamVjdHNcXGNvZGVycy1qdWtlYm94XFxjb21wb25lbnRzXFxTZWFyY2hCYXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNEJnQixBQUdxQixBQUlNLEFBUUwsQUFPRixBQVNFLEFBS0EsQUFNRCxBQUtFLEFBSUEsQUFNRyxBQUlQLEFBT0csQUFJTSxRQVZQLEVBbkJFLENBcEJLLEFBY25CLEFBZ0NBLENBakVGLEFBNENFLEFBSUEsQ0FwQkYsRUEwQkUsRUFlQSxDQWpFUSxBQXVEUixJQW5CQSxJQW5DVSxJQWV3QixNQWRwQyw0QkFlbUIsVUFUQyxPQVVOLFdBVEQsQ0FVWSxVQVRWLGFBQ2YsQUFTQSIsImZpbGUiOiJDOlxcQ29kaW5nXFxNeVByb2plY3RzXFxjb2RlcnMtanVrZWJveFxcY29tcG9uZW50c1xcU2VhcmNoQmFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IFNlYXJjaGJhciA9ICh7IHBsYWNlaG9sZGVyLCBzdWJtaXRIYW5kbGVyIH0pID0+IHtcclxuXHJcbiAgY29uc3QgW3NlYXJjaElucHV0LCBzZXRTZWFyY2hJbnB1dF0gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG5cclxuICBjb25zdCBvbkNoYW5nZUhhbmRsZXIgPSAoZSkgPT4ge1xyXG4gICAgc2V0U2VhcmNoSW5wdXQoZS50YXJnZXQudmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgY29uc3Qgb25Gb3JtU3VibWl0ID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAvLyBDYWxsIHRoZSByZWxldmFudCBzdWJtaXQgaGFuZGxlciBmcm9tIHByb3BzXHJcbiAgICBzdWJtaXRIYW5kbGVyKHNlYXJjaElucHV0KTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGlkPVwibWFpbi1zZWFyY2hiYXJcIj5cclxuICAgICAgPGZvcm0gb25TdWJtaXQ9e29uRm9ybVN1Ym1pdH0+XHJcbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJzZWFyY2gtaW5wdXRcIj5cclxuICAgICAgICAgIDxzdmcgaWQ9XCJzZWFyY2gtaWNvblwiIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHdpZHRoPVwiMjRcIj48cGF0aCBkPVwiTTE1LjUgMTRoLS43OWwtLjI4LS4yN0MxNS40MSAxMi41OSAxNiAxMS4xMSAxNiA5LjUgMTYgNS45MSAxMy4wOSAzIDkuNSAzUzMgNS45MSAzIDkuNSA1LjkxIDE2IDkuNSAxNmMxLjYxIDAgMy4wOS0uNTkgNC4yMy0xLjU3bC4yNy4yOHYuNzlsNSA0Ljk5TDIwLjQ5IDE5bC00Ljk5LTV6bS02IDBDNy4wMSAxNCA1IDExLjk5IDUgOS41UzcuMDEgNSA5LjUgNSAxNCA3LjAxIDE0IDkuNSAxMS45OSAxNCA5LjUgMTR6XCIgLz48cGF0aCBkPVwiTTAgMGgyNHYyNEgwelwiIGZpbGw9XCJub25lXCIgLz48L3N2Zz5cclxuICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJzZWFyY2gtaW5wdXRcIiBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9IG9uQ2hhbmdlPXtvbkNoYW5nZUhhbmRsZXJ9IHZhbHVlPXtzZWFyY2hJbnB1dH0gLz5cclxuICAgICAgPC9mb3JtPlxyXG5cclxuXHJcbiAgICA8c3R5bGUganN4PntgXHJcbiAgICAgIGZvcm0ge1xyXG4gICAgICAgIHdpZHRoOiA2OC41JTtcclxuICAgICAgfVxyXG5cclxuICAgICAgbGFiZWwge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDhweDtcclxuICAgICAgICBsZWZ0OiAxMnB4O1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAjbWFpbi1zZWFyY2hiYXIge1xyXG4gICAgICAgIC8qIG1hcmdpbjogYXV0bzsgKi9cclxuICAgICAgICAvKiBtYXJnaW4tbGVmdDogMy41cmVtOyAqL1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGZvbnQ6IGluaGVyaXQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICNtYWluLXNlYXJjaGJhciBpbnB1dCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjNweDtcclxuICAgICAgICBwYWRkaW5nOiAwLjZyZW0gM3JlbSAwLjVyZW0gMi4zcmVtO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgI21haW4tc2VhcmNoYmFyIGlucHV0IDpmb2N1cyB7XHJcbiAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDExMDBweCkge1xyXG4gICAgICAgICNtYWluLXNlYXJjaGJhciBpbnB1dCB7XHJcbiAgICAgICAgICB3aWR0aDogMTMwJTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA4MzBweCkge1xyXG4gICAgICAgICNtYWluLXNlYXJjaGJhciB7XHJcbiAgICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgI21haW4tc2VhcmNoYmFyIGlucHV0IHtcclxuICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvcm0ge1xyXG4gICAgICAgICAgd2lkdGg6IDc1LjUlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgQG1lZGlhICggbWF4LXdpZHRoOiA0MzBweCkge1xyXG4gICAgICAgICNtYWluLXNlYXJjaGJhciBpbnB1dCB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsYWJlbCB7XHJcbiAgICAgICAgICB0b3A6IDZweDtcclxuICAgICAgICAgIGxlZnQ6IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBAbWVkaWEgKCBtYXgtd2lkdGg6IDM2MHB4KSB7XHJcbiAgICAgICAgI21haW4tc2VhcmNoYmFyIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgI21haW4tc2VhcmNoYmFyIGlucHV0IHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgXHJcbiAgICBcclxuICAgIGB9PC9zdHlsZT5cclxuXHJcbiAgICAgICAgICBcclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoYmFyO1xyXG4iXX0= */\n/*@ sourceURL=C:\\\\Coding\\\\MyProjects\\\\coders-jukebox\\\\components\\\\SearchBar.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Searchbar);

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
/* harmony import */ var _context_GlobalContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/GlobalContext */ "./context/GlobalContext.js");
/* harmony import */ var _css_variables_colors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../css-variables/colors */ "./css-variables/colors.js");
var _jsxFileName = "C:\\Coding\\MyProjects\\coders-jukebox\\components\\VideoItem.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




const VideoItem = ({
  video,
  mode
}) => {
  const {
    addVideoToPlaylist,
    removeVideoFromPlaylist,
    setCurrentVideo,
    currentUser,
    profileUser,
    setAutoplay
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context_GlobalContext__WEBPACK_IMPORTED_MODULE_2__["GlobalContext"]);

  const addVideoClickHandler = () => {
    const videoToSave = {
      title: video.snippet.title.split("&quot;").join("").split("&#39;").join("'").split("&amp;").join("&"),
      thumbnailURL: video.snippet.thumbnails.default.url,
      videoId: video.id.videoId
    }; // console.log(videoToSave)

    addVideoToPlaylist(videoToSave);
  };

  const removeVideoClickHandler = () => {
    removeVideoFromPlaylist(video._id);
  };

  const playButtonHandler = () => {
    let videoToSet;

    if (mode === 'youtube') {
      videoToSet = {
        title: video.snippet.title,
        // description: video.snippet.description,
        videoId: video.id.videoId
      };
    } else {
      videoToSet = {
        title: video.title,
        // description: video.description,
        videoId: video.videoURL
      };
    }

    setCurrentVideo(videoToSet);
    setAutoplay(true);
  };

  return __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2650155307", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].primary]]]) + " " + "video-item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 5
    }
  }, mode === 'youtube' && __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("img", {
    src: video.snippet.thumbnails.default.url,
    alt: "youtube video",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2650155307", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].primary]]]),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 11
    }
  }), __jsx("h3", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2650155307", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].primary]]]) + " " + "video-title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 11
    }
  }, video.snippet.title.split("&quot;").join("").split("&#39;").join("'").split("&amp;").join("&")), __jsx("div", {
    id: "buttons",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2650155307", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].primary]]]),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 11
    }
  }, profileUser.ownedVideos.length > 0 && __jsx("button", {
    onClick: playButtonHandler,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2650155307", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].primary]]]),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 13
    }
  }, __jsx("i", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2650155307", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].primary]]]) + " " + "fa fa-play",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 15
    }
  })), __jsx("button", {
    onClick: addVideoClickHandler,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2650155307", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].primary]]]),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 13
    }
  }, __jsx("i", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2650155307", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].primary]]]) + " " + "fa fa-plus",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 15
    }
  })))), mode === 'playlist' && __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("img", {
    src: video.thumbnailURL,
    alt: "youtube video",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2650155307", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].primary]]]),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 11
    }
  }), __jsx("h3", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2650155307", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].primary]]]) + " " + "video-title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 11
    }
  }, video.title), __jsx("div", {
    id: "buttons",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2650155307", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].primary]]]),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 11
    }
  }, __jsx("button", {
    onClick: playButtonHandler,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2650155307", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].primary]]]),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 13
    }
  }, __jsx("i", {
    "aria-hidden": "true",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2650155307", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].primary]]]) + " " + "fa fa-play",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 15
    }
  })), currentUser.id === profileUser.id && __jsx("button", {
    onClick: removeVideoClickHandler,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2650155307", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].primary]]]),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 15
    }
  }, __jsx("i", {
    "aria-hidden": "true",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2650155307", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].primary]]]) + " " + "fa fa-trash-o",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 17
    }
  })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2650155307",
    dynamic: [_css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].primary],
    __self: undefined
  }, `.video-item.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;border-bottom:1px solid ${_css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].primary};padding:1rem;}.video-item.__jsx-style-dynamic-selector:last-child{border-bottom:none;}h3.__jsx-style-dynamic-selector{margin:0 auto 0 2.7rem;}button.__jsx-style-dynamic-selector{background-color:${_css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].primary};color:white;padding:0.75rem 1rem;border-radius:10px;margin:0.5rem;border:none;cursor:pointer;font-size:1rem;-webkit-transition:background-color 0.2s ease-in-out,text-shadow 0.2s;transition:background-color 0.2s ease-in-out,text-shadow 0.2s;}button.__jsx-style-dynamic-selector:hover{background-color:#e5305a;text-shadow:0px 0px 8px rgb(255,255,255);}@media (max-width:1080px){h3.__jsx-style-dynamic-selector{margin-left:1.7rem;}#buttons.__jsx-style-dynamic-selector{min-width:20%;}}@media (max-width:768px){.video-item.__jsx-style-dynamic-selector{text-align:left;}h3.__jsx-style-dynamic-selector{font-size:0.8rem;margin:0;text-align:left;}#buttons.__jsx-style-dynamic-selector{min-width:10%;margin-right:0.5rem;}}@media (max-width:500px){img.__jsx-style-dynamic-selector{height:60px;margin-right:0.3rem;}#buttons.__jsx-style-dynamic-selector{width:13%;min-width:13%;}}@media (max-width:400px){#buttons.__jsx-style-dynamic-selector{width:15%;min-width:15%;}h3.__jsx-style-dynamic-selector{font-size:0.7rem;}}@media (max-width:380px){.video-item.__jsx-style-dynamic-selector{padding-left:0.6rem;}}@media (max-width:350px){.video-item.__jsx-style-dynamic-selector{padding-left:0.6rem;}#buttons.__jsx-style-dynamic-selector{width:17%;min-width:17%;}img.__jsx-style-dynamic-selector{height:40px;}}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxDb2RpbmdcXE15UHJvamVjdHNcXGNvZGVycy1qdWtlYm94XFxjb21wb25lbnRzXFxWaWRlb0l0ZW0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUZrQixBQUlvQixBQVVNLEFBSUksQUFLdUIsQUFZckIsQUFPSixBQUlMLEFBT0UsQUFJQyxBQU9ILEFBT0YsQUFLRixBQU9BLEFBS08sQUFNRyxBQU1BLEFBSVYsQUFLRSxVQWhDRSxBQU9BLEFBcUJBLEVBakNNLEFBc0N0QixFQS9EQSxBQWtCc0IsRUFYdEIsQ0FJVyxBQStCWCxFQTFFRixBQTRCRSxDQW9EQSxBQU1BLEdBbEZGLENBMkRFLEFBT0EsQUFxQkEsQ0F0RTJDLENBdUJ6QixNQWNsQixFQVBBLFFBTkEsSUFwQ1ksWUFDUyxRQVl2QixRQWhDcUIsS0FxQkEsbUJBQ0wsY0FDRixZQUNHLGVBQ0EsZUFDZ0QsYUF6QmpDLG1IQUV1QixJQXdCdkQsaURBdkJlLGFBRWYiLCJmaWxlIjoiQzpcXENvZGluZ1xcTXlQcm9qZWN0c1xcY29kZXJzLWp1a2Vib3hcXGNvbXBvbmVudHNcXFZpZGVvSXRlbS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdsb2JhbENvbnRleHQgfSBmcm9tICcuLi9jb250ZXh0L0dsb2JhbENvbnRleHQnO1xyXG5pbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY29sb3JzIGZyb20gJy4uL2Nzcy12YXJpYWJsZXMvY29sb3JzJ1xyXG5cclxuY29uc3QgVmlkZW9JdGVtID0gKHsgdmlkZW8sIG1vZGUgfSkgPT4ge1xyXG5cclxuICBjb25zdCB7IGFkZFZpZGVvVG9QbGF5bGlzdCwgcmVtb3ZlVmlkZW9Gcm9tUGxheWxpc3QsIHNldEN1cnJlbnRWaWRlbywgY3VycmVudFVzZXIsIHByb2ZpbGVVc2VyLCBzZXRBdXRvcGxheSB9ID0gdXNlQ29udGV4dChHbG9iYWxDb250ZXh0KTtcclxuXHJcbiAgY29uc3QgYWRkVmlkZW9DbGlja0hhbmRsZXIgPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgdmlkZW9Ub1NhdmUgPSB7XHJcbiAgICAgIHRpdGxlOiB2aWRlby5zbmlwcGV0LnRpdGxlLnNwbGl0KFwiJnF1b3Q7XCIpLmpvaW4oXCJcIikuc3BsaXQoXCImIzM5O1wiKS5qb2luKFwiJ1wiKS5zcGxpdChcIiZhbXA7XCIpLmpvaW4oXCImXCIpLFxyXG4gICAgICB0aHVtYm5haWxVUkw6IHZpZGVvLnNuaXBwZXQudGh1bWJuYWlscy5kZWZhdWx0LnVybCxcclxuICAgICAgdmlkZW9JZDogdmlkZW8uaWQudmlkZW9JZCxcclxuICAgIH1cclxuXHJcbiAgICAvLyBjb25zb2xlLmxvZyh2aWRlb1RvU2F2ZSlcclxuICAgIGFkZFZpZGVvVG9QbGF5bGlzdCh2aWRlb1RvU2F2ZSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCByZW1vdmVWaWRlb0NsaWNrSGFuZGxlciA9ICgpID0+IHtcclxuICAgIHJlbW92ZVZpZGVvRnJvbVBsYXlsaXN0KHZpZGVvLl9pZCk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBwbGF5QnV0dG9uSGFuZGxlciA9ICgpID0+IHtcclxuXHJcbiAgICBsZXQgdmlkZW9Ub1NldDtcclxuXHJcbiAgICBpZiAobW9kZSA9PT0gJ3lvdXR1YmUnKSB7XHJcbiAgICAgIHZpZGVvVG9TZXQgPSB7XHJcbiAgICAgICAgdGl0bGU6IHZpZGVvLnNuaXBwZXQudGl0bGUsXHJcbiAgICAgICAgLy8gZGVzY3JpcHRpb246IHZpZGVvLnNuaXBwZXQuZGVzY3JpcHRpb24sXHJcbiAgICAgICAgdmlkZW9JZDogdmlkZW8uaWQudmlkZW9JZCxcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdmlkZW9Ub1NldCA9IHtcclxuICAgICAgICB0aXRsZTogdmlkZW8udGl0bGUsXHJcbiAgICAgICAgLy8gZGVzY3JpcHRpb246IHZpZGVvLmRlc2NyaXB0aW9uLFxyXG4gICAgICAgIHZpZGVvSWQ6IHZpZGVvLnZpZGVvVVJMLFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBzZXRDdXJyZW50VmlkZW8odmlkZW9Ub1NldCk7XHJcblxyXG4gICAgc2V0QXV0b3BsYXkodHJ1ZSk7XHJcblxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwidmlkZW8taXRlbVwiPlxyXG4gICAgICB7bW9kZSA9PT0gJ3lvdXR1YmUnICYmXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIDxpbWcgc3JjPXt2aWRlby5zbmlwcGV0LnRodW1ibmFpbHMuZGVmYXVsdC51cmx9IGFsdD1cInlvdXR1YmUgdmlkZW9cIiAvPlxyXG4gICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInZpZGVvLXRpdGxlXCI+e3ZpZGVvLnNuaXBwZXQudGl0bGUuc3BsaXQoXCImcXVvdDtcIikuam9pbihcIlwiKS5zcGxpdChcIiYjMzk7XCIpLmpvaW4oXCInXCIpLnNwbGl0KFwiJmFtcDtcIikuam9pbihcIiZcIil9PC9oMz5cclxuICAgICAgICAgIDxkaXYgaWQ9XCJidXR0b25zXCI+XHJcbiAgICAgICAgICB7cHJvZmlsZVVzZXIub3duZWRWaWRlb3MubGVuZ3RoID4gMCAmJlxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3BsYXlCdXR0b25IYW5kbGVyfT5cclxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1wbGF5XCI+PC9pPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIH1cclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXthZGRWaWRlb0NsaWNrSGFuZGxlcn0+XHJcbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtcGx1c1wiPjwvaT5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Lz5cclxuICAgICAgfVxyXG5cclxuICAgICAge21vZGUgPT09ICdwbGF5bGlzdCcgJiZcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgPGltZyBzcmM9e3ZpZGVvLnRodW1ibmFpbFVSTH0gYWx0PVwieW91dHViZSB2aWRlb1wiIC8+XHJcbiAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidmlkZW8tdGl0bGVcIj57dmlkZW8udGl0bGV9PC9oMz5cclxuICAgICAgICAgIDxkaXYgaWQ9XCJidXR0b25zXCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17cGxheUJ1dHRvbkhhbmRsZXJ9PlxyXG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXBsYXlcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICB7Y3VycmVudFVzZXIuaWQgPT09IHByb2ZpbGVVc2VyLmlkICYmXHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtyZW1vdmVWaWRlb0NsaWNrSGFuZGxlcn0+XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS10cmFzaC1vXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Lz5cclxuICAgICAgfVxyXG5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gIFxyXG4gICAgLnZpZGVvLWl0ZW0ge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgIC8qIGJhY2tncm91bmQtY29sb3I6ICNlMTI5ZTg7ICovXHJcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAke2NvbG9ycy5wcmltYXJ5fTtcclxuICAgICAgcGFkZGluZzogMXJlbTtcclxuICAgICAgLyogbWFyZ2luLWJvdHRvbTogMXJlbTsgKi9cclxuICAgIH1cclxuXHJcbiAgICAudmlkZW8taXRlbTpsYXN0LWNoaWxkIHtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICBoMyB7XHJcbiAgICAgIG1hcmdpbjogMCBhdXRvIDAgMi43cmVtO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBidXR0b24ge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke2NvbG9ycy5wcmltYXJ5fTtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICBwYWRkaW5nOiAwLjc1cmVtIDFyZW07XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgIG1hcmdpbjogMC41cmVtO1xyXG4gICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZS1pbi1vdXQsIHRleHQtc2hhZG93IDAuMnM7XHJcbiAgICB9XHJcblxyXG4gICAgYnV0dG9uOmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U1MzA1YTtcclxuICAgICAgdGV4dC1zaGFkb3c6IDBweCAwcHggOHB4IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgIH1cclxuXHJcbiAgICAvKiBNZWRpYSBxdWVyaWVzICovXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogMTA4MHB4KSB7XHJcbiAgICAgIGgzIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMS43cmVtO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAjYnV0dG9ucyB7XHJcbiAgICAgICAgbWluLXdpZHRoOiAyMCU7XHJcbiAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgIC52aWRlby1pdGVtIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBoMyB7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICNidXR0b25zIHtcclxuICAgICAgICAvKiB3aWR0aDogMTAlOyAqL1xyXG4gICAgICAgIG1pbi13aWR0aDogMTAlO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMC41cmVtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XHJcbiAgICAgIGltZyB7XHJcbiAgICAgICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMC4zcmVtO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAjYnV0dG9ucyB7XHJcbiAgICAgICAgd2lkdGg6IDEzJTtcclxuICAgICAgICBtaW4td2lkdGg6IDEzJTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0MDBweCkge1xyXG4gICAgICAjYnV0dG9ucyB7XHJcbiAgICAgICAgd2lkdGg6IDE1JTtcclxuICAgICAgICBtaW4td2lkdGg6IDE1JTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaDMge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC43cmVtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDM4MHB4KSB7XHJcbiAgICAgIC52aWRlby1pdGVtIHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDAuNnJlbTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAzNTBweCkge1xyXG4gICAgICAudmlkZW8taXRlbSB7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwLjZyZW07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICNidXR0b25zIHtcclxuICAgICAgICB3aWR0aDogMTclO1xyXG4gICAgICAgIG1pbi13aWR0aDogMTclO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpbWcge1xyXG4gICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIFxyXG4gIGB9PC9zdHlsZT5cclxuXHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFZpZGVvSXRlbTsiXX0= */
/*@ sourceURL=C:\\Coding\\MyProjects\\coders-jukebox\\components\\VideoItem.js */`));
};

/* harmony default export */ __webpack_exports__["default"] = (VideoItem);

/***/ }),

/***/ "./components/VideoPlayer.js":
/*!***********************************!*\
  !*** ./components/VideoPlayer.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_GlobalContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/GlobalContext */ "./context/GlobalContext.js");
/* harmony import */ var _css_variables_colors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../css-variables/colors */ "./css-variables/colors.js");


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




const VideoPlayer = () => {
  const {
    videoState,
    autoplay,
    profileUser
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context_GlobalContext__WEBPACK_IMPORTED_MODULE_2__["GlobalContext"]); // Autoplay off

  let videoSrc = `https://www.youtube.com/embed/${videoState.videoId}`;

  if (autoplay) {
    // Autoplay on
    videoSrc = `https://www.youtube.com/embed/${videoState.videoId}?autoplay=1`;
  }

  return __jsx("div", {
    id: "video-container",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3431917472", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].primary]]])
  }, profileUser.ownedVideos.length > 0 && videoState.title !== '' && __jsx("div", {
    id: "video-player",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3431917472", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].primary]]])
  }, __jsx("iframe", {
    width: "918",
    height: "567",
    frameBorder: "0",
    allowFullScreen: true,
    allow: "autoplay",
    src: videoSrc,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3431917472", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].primary]]])
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3431917472",
    dynamic: [_css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].primary]
  }, `#video-container.__jsx-style-dynamic-selector{margin-top:3rem;}#video-player.__jsx-style-dynamic-selector{width:85%;margin:4rem auto;padding:1rem;border:1px solid ${_css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].primary};}iframe.__jsx-style-dynamic-selector{padding:0.5rem;margin:auto;width:100%;}#video-info.__jsx-style-dynamic-selector{margin-top:1rem;text-align:center;}@media (max-width:1150px ){#video-player.__jsx-style-dynamic-selector{width:90%;margin:auto;}iframe.__jsx-style-dynamic-selector{margin:auto;}}@media (max-width:1000px ){}@media (max-width:580px ){#video-player.__jsx-style-dynamic-selector{width:91%;}iframe.__jsx-style-dynamic-selector{height:33vh;}}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxDb2RpbmdcXE15UHJvamVjdHNcXGNvZGVycy1qdWtlYm94XFxjb21wb25lbnRzXFxWaWRlb1BsYXllci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4QmMsQUFJdUIsQUFJTixBQU9LLEFBTUMsQUFhSixBQUtFLEFBWUYsQUFLRSxVQS9DRyxBQTBCSCxBQWtCZCxFQWJBLEFBaUJBLEdBekNZLENBWGQsQUFpQm9CLE1BY2xCLEtBMUJhLEFBT0YsT0FNYixJQUxBLEVBTkQsOENBQUMiLCJmaWxlIjoiQzpcXENvZGluZ1xcTXlQcm9qZWN0c1xcY29kZXJzLWp1a2Vib3hcXGNvbXBvbmVudHNcXFZpZGVvUGxheWVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR2xvYmFsQ29udGV4dCB9IGZyb20gJy4uL2NvbnRleHQvR2xvYmFsQ29udGV4dCc7XHJcbmltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjb2xvcnMgZnJvbSAnLi4vY3NzLXZhcmlhYmxlcy9jb2xvcnMnXHJcblxyXG5jb25zdCBWaWRlb1BsYXllciA9ICgpID0+IHtcclxuXHJcbiAgY29uc3QgeyB2aWRlb1N0YXRlLCBhdXRvcGxheSwgcHJvZmlsZVVzZXIgfSA9IHVzZUNvbnRleHQoR2xvYmFsQ29udGV4dCk7XHJcblxyXG4gIC8vIEF1dG9wbGF5IG9mZlxyXG4gIGxldCB2aWRlb1NyYyA9IGBodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC8ke3ZpZGVvU3RhdGUudmlkZW9JZH1gO1xyXG5cclxuICBpZiAoYXV0b3BsYXkpIHtcclxuICAgIC8vIEF1dG9wbGF5IG9uXHJcbiAgICB2aWRlb1NyYyA9IGBodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC8ke3ZpZGVvU3RhdGUudmlkZW9JZH0/YXV0b3BsYXk9MWA7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG5cclxuICAgIDxkaXYgaWQ9XCJ2aWRlby1jb250YWluZXJcIj5cclxuICAgICAge3Byb2ZpbGVVc2VyLm93bmVkVmlkZW9zLmxlbmd0aCA+IDAgJiYgdmlkZW9TdGF0ZS50aXRsZSAhPT0gJycgJiZcclxuICAgICAgICA8ZGl2IGlkPVwidmlkZW8tcGxheWVyXCI+XHJcbiAgICAgICAgICA8aWZyYW1lIHdpZHRoPVwiOTE4XCIgaGVpZ2h0PVwiNTY3XCIgZnJhbWVCb3JkZXI9XCIwXCIgYWxsb3dGdWxsU2NyZWVuIGFsbG93PVwiYXV0b3BsYXlcIiBzcmM9e3ZpZGVvU3JjfT48L2lmcmFtZT5cclxuICAgICAgICAgIHsvKiA8VmlkZW9JbmZvIC8+ICovfVxyXG4gICAgICAgICAgey8qIDxkaXYgaWQ9XCJ2aWRlby1pbmZvXCI+XHJcbiAgICAgICAgICAgIDxoMz57dmlkZW9TdGF0ZS50aXRsZX08L2gzPlxyXG4gICAgICAgICAgPC9kaXY+ICovfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICB9XHJcbiAgICAgIFxyXG5cclxuICA8c3R5bGUganN4PntgXHJcbiAgXHJcbiAgICAjdmlkZW8tY29udGFpbmVyIHtcclxuICAgICAgbWFyZ2luLXRvcDogM3JlbTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgI3ZpZGVvLXBsYXllciB7XHJcbiAgICAgIHdpZHRoOiA4NSU7XHJcbiAgICAgIG1hcmdpbjogNHJlbSBhdXRvO1xyXG4gICAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAke2NvbG9ycy5wcmltYXJ5fVxyXG4gICAgfVxyXG5cclxuICAgIGlmcmFtZSB7XHJcbiAgICAgIHBhZGRpbmc6IDAuNXJlbTtcclxuICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuXHJcbiAgICAjdmlkZW8taW5mbyB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuLyogXHJcbiAgICBoMyB7XHJcbiAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgIG1hcmdpbjogYXV0bztcclxuICAgIH0gKi9cclxuXHJcbiAgICAvKiBNZWRpYSBxdWVyaWVzICovXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogMTE1MHB4ICkge1xyXG5cclxuICAgICAgI3ZpZGVvLXBsYXllciB7XHJcbiAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmcmFtZSB7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDEwMDBweCApIHtcclxuICAgICAgaWZyYW1lIHtcclxuICAgICAgICAvKiB3aWR0aDogODV2dzsgKi9cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1ODBweCApIHtcclxuICAgICAgI3ZpZGVvLXBsYXllciB7XHJcbiAgICAgICAgd2lkdGg6IDkxJTtcclxuICAgICAgICAvKiBoZWlnaHQ6IDUwJTsgKi9cclxuICAgICAgfVxyXG5cclxuICAgICAgaWZyYW1lIHtcclxuICAgICAgICBoZWlnaHQ6IDMzdmg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICBcclxuICBcclxuICBcclxuICBgfTwvc3R5bGU+XHJcblxyXG5cclxuXHJcblxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBWaWRlb1BsYXllcjsiXX0= */
/*@ sourceURL=C:\\Coding\\MyProjects\\coders-jukebox\\components\\VideoPlayer.js */`));
};

/* harmony default export */ __webpack_exports__["default"] = (VideoPlayer);

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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _context_GlobalContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context/GlobalContext */ "./context/GlobalContext.js");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ "framer-motion");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_ProfileInfo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/ProfileInfo */ "./components/ProfileInfo.js");
/* harmony import */ var _components_AboutMe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/AboutMe */ "./components/AboutMe.js");
/* harmony import */ var _components_VideoPlayer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/VideoPlayer */ "./components/VideoPlayer.js");
/* harmony import */ var _components_AddToPlaylist__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/AddToPlaylist */ "./components/AddToPlaylist.js");
/* harmony import */ var _components_PlayList__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/PlayList */ "./components/PlayList.js");
/* harmony import */ var _components_CommentSection__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/CommentSection */ "./components/CommentSection.js");
/* harmony import */ var _components_ProfileEdit__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/ProfileEdit */ "./components/ProfileEdit.js");
/* harmony import */ var _components_Favourites__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/Favourites */ "./components/Favourites.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/Footer */ "./components/Footer.js");


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

 // import Router from 'next/router'

 // import fetch from 'isomorphic-unfetch';










 // Framer-motion variants

const Profile = () => {
  const {
    authState,
    currentUser,
    profileUser,
    setAutoplay,
    fetchProfileUser,
    clearProfileUser,
    addFavourite,
    removeFavourite
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context_GlobalContext__WEBPACK_IMPORTED_MODULE_3__["GlobalContext"]); // Get the userId from the URL and fetch the profile user's data

  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  const {
    userId
  } = router.query;
  fetchProfileUser(userId, true);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    setAutoplay(false);
  }, []); //   useEffect(() => {
  //     fetchProfileUser(userId, true);
  //   //   const handleRouteChange = url => {
  //   //     // console.log('App is changing to: ', url)
  //   //     // console.log(Router.query.userId)
  //   // }
  //   // Router.events.on('routeChangeStart', handleRouteChange)
  //   // return () => {
  //   //   Router.events.off('routeChangeStart', handleRouteChange)
  //   // }
  // }, [])

  const {
    0: editMode,
    1: setEditMode
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false); // const [imageString, setImageString] = useState('http://localhost:5000/image/3cae4585ddf4cc55c72b174c0726f266.jpg');
  // if (profilePhoto !== null) {
  //   setImageString(`http://localhost:5000/image/${.filename}`)
  // }
  // console.log(imageString)
  // if (profileUser.profilePhotoFilename !== null) {
  //   const filename = profileUser.profilePhotoFilename;
  //   setImageString(`http://localhost:5000/image/${filename}`);
  // }
  // if (profilePhoto !== null){
  //   setImageString(profilePhoto.filename);
  // }
  // const showProfileEditSection = () => {
  //   setEditMode(true)
  // }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    id: "profile",
    className: "jsx-1332382758" + " " + "container"
  }, __jsx(_components_ProfileInfo__WEBPACK_IMPORTED_MODULE_5__["default"], {
    setEditMode: setEditMode,
    editMode: editMode
  }), editMode && __jsx(_components_ProfileEdit__WEBPACK_IMPORTED_MODULE_11__["default"], {
    setEditMode: setEditMode
  }), __jsx(_components_AboutMe__WEBPACK_IMPORTED_MODULE_6__["default"], {
    profileUser: profileUser
  }), __jsx(_components_VideoPlayer__WEBPACK_IMPORTED_MODULE_7__["default"], null), profileUser.id === currentUser.id && __jsx(_components_AddToPlaylist__WEBPACK_IMPORTED_MODULE_8__["default"], null), __jsx(_components_PlayList__WEBPACK_IMPORTED_MODULE_9__["default"], {
    profileUser: profileUser
  }), __jsx(_components_CommentSection__WEBPACK_IMPORTED_MODULE_10__["default"], {
    profileUser: profileUser
  }), __jsx(_components_Favourites__WEBPACK_IMPORTED_MODULE_12__["default"], {
    profileUser: profileUser
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1332382758"
  }, "#profile.jsx-1332382758{color:white;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxDb2RpbmdcXE15UHJvamVjdHNcXGNvZGVycy1qdWtlYm94XFxwYWdlc1xccHJvZmlsZVxcW3VzZXJJZF0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUdvQixBQUl5QixZQUNkIiwiZmlsZSI6IkM6XFxDb2RpbmdcXE15UHJvamVjdHNcXGNvZGVycy1qdWtlYm94XFxwYWdlc1xccHJvZmlsZVxcW3VzZXJJZF0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuLy8gaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHsgR2xvYmFsQ29udGV4dCB9IGZyb20gJy4uLy4uL2NvbnRleHQvR2xvYmFsQ29udGV4dCc7XHJcbi8vIGltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xyXG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcclxuXHJcbmltcG9ydCBQcm9maWxlSW5mbyBmcm9tICcuLi8uLi9jb21wb25lbnRzL1Byb2ZpbGVJbmZvJztcclxuaW1wb3J0IEFib3V0TWUgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9BYm91dE1lJztcclxuaW1wb3J0IFZpZGVvUGxheWVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvVmlkZW9QbGF5ZXInO1xyXG5pbXBvcnQgQWRkVG9QbGF5bGlzdCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0FkZFRvUGxheWxpc3QnO1xyXG5pbXBvcnQgUGxheWxpc3QgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9QbGF5TGlzdCc7XHJcbmltcG9ydCBDb21tZW50U2VjdGlvbiBmcm9tICcuLi8uLi9jb21wb25lbnRzL0NvbW1lbnRTZWN0aW9uJztcclxuaW1wb3J0IFByb2ZpbGVFZGl0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvUHJvZmlsZUVkaXQnO1xyXG5pbXBvcnQgRmF2b3VyaXRlcyBmcm9tICcuLi8uLi9jb21wb25lbnRzL0Zhdm91cml0ZXMnO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvRm9vdGVyJztcclxuXHJcbi8vIEZyYW1lci1tb3Rpb24gdmFyaWFudHNcclxuXHJcblxyXG5cclxuXHJcblxyXG5jb25zdCBQcm9maWxlID0gKCkgPT4ge1xyXG5cclxuICBjb25zdCB7IGF1dGhTdGF0ZSwgY3VycmVudFVzZXIsIHByb2ZpbGVVc2VyLCBzZXRBdXRvcGxheSwgZmV0Y2hQcm9maWxlVXNlciwgY2xlYXJQcm9maWxlVXNlciwgYWRkRmF2b3VyaXRlLCByZW1vdmVGYXZvdXJpdGV9ID0gdXNlQ29udGV4dChHbG9iYWxDb250ZXh0KTtcclxuXHJcbiAgLy8gR2V0IHRoZSB1c2VySWQgZnJvbSB0aGUgVVJMIGFuZCBmZXRjaCB0aGUgcHJvZmlsZSB1c2VyJ3MgZGF0YVxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgY29uc3QgeyB1c2VySWQgfSA9IHJvdXRlci5xdWVyeVxyXG4gIGZldGNoUHJvZmlsZVVzZXIodXNlcklkLCB0cnVlKTtcclxuXHJcbiAgXHJcbiAgXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgc2V0QXV0b3BsYXkoZmFsc2UpO1xyXG4gICAgfSwgW10pXHJcbiAgICBcclxuICAgIFxyXG4gIC8vICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAvLyAgICAgZmV0Y2hQcm9maWxlVXNlcih1c2VySWQsIHRydWUpO1xyXG4gIC8vICAgLy8gICBjb25zdCBoYW5kbGVSb3V0ZUNoYW5nZSA9IHVybCA9PiB7XHJcbiAgLy8gICAvLyAgICAgLy8gY29uc29sZS5sb2coJ0FwcCBpcyBjaGFuZ2luZyB0bzogJywgdXJsKVxyXG4gIC8vICAgLy8gICAgIC8vIGNvbnNvbGUubG9nKFJvdXRlci5xdWVyeS51c2VySWQpXHJcbiAgLy8gICAvLyB9XHJcblxyXG4gIC8vICAgLy8gUm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VTdGFydCcsIGhhbmRsZVJvdXRlQ2hhbmdlKVxyXG4gIC8vICAgLy8gcmV0dXJuICgpID0+IHtcclxuICAvLyAgIC8vICAgUm91dGVyLmV2ZW50cy5vZmYoJ3JvdXRlQ2hhbmdlU3RhcnQnLCBoYW5kbGVSb3V0ZUNoYW5nZSlcclxuICAvLyAgIC8vIH1cclxuICAvLyB9LCBbXSlcclxuXHJcbiAgY29uc3QgW2VkaXRNb2RlLCBzZXRFZGl0TW9kZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgXHJcblxyXG4gIC8vIGNvbnN0IFtpbWFnZVN0cmluZywgc2V0SW1hZ2VTdHJpbmddID0gdXNlU3RhdGUoJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9pbWFnZS8zY2FlNDU4NWRkZjRjYzU1YzcyYjE3NGMwNzI2ZjI2Ni5qcGcnKTtcclxuXHJcbiAgLy8gaWYgKHByb2ZpbGVQaG90byAhPT0gbnVsbCkge1xyXG4gIC8vICAgc2V0SW1hZ2VTdHJpbmcoYGh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9pbWFnZS8key5maWxlbmFtZX1gKVxyXG4gIC8vIH1cclxuICAvLyBjb25zb2xlLmxvZyhpbWFnZVN0cmluZylcclxuICAvLyBpZiAocHJvZmlsZVVzZXIucHJvZmlsZVBob3RvRmlsZW5hbWUgIT09IG51bGwpIHtcclxuICAvLyAgIGNvbnN0IGZpbGVuYW1lID0gcHJvZmlsZVVzZXIucHJvZmlsZVBob3RvRmlsZW5hbWU7XHJcbiAgICAgIFxyXG4gIC8vICAgc2V0SW1hZ2VTdHJpbmcoYGh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9pbWFnZS8ke2ZpbGVuYW1lfWApO1xyXG4gIC8vIH1cclxuXHJcblxyXG4gIC8vIGlmIChwcm9maWxlUGhvdG8gIT09IG51bGwpe1xyXG4gIC8vICAgc2V0SW1hZ2VTdHJpbmcocHJvZmlsZVBob3RvLmZpbGVuYW1lKTtcclxuICAvLyB9XHJcbiAgXHJcblxyXG4gIC8vIGNvbnN0IHNob3dQcm9maWxlRWRpdFNlY3Rpb24gPSAoKSA9PiB7XHJcbiAgLy8gICBzZXRFZGl0TW9kZSh0cnVlKVxyXG4gIC8vIH1cclxuXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiIGlkPVwicHJvZmlsZVwiPlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxQcm9maWxlSW5mbyBzZXRFZGl0TW9kZT17c2V0RWRpdE1vZGV9IGVkaXRNb2RlPXtlZGl0TW9kZX0gLz5cclxuXHJcbiAgICAgICAge2VkaXRNb2RlICYmXHJcbiAgICAgICAgICA8UHJvZmlsZUVkaXQgc2V0RWRpdE1vZGU9e3NldEVkaXRNb2RlfS8+XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICA8QWJvdXRNZSBwcm9maWxlVXNlcj17cHJvZmlsZVVzZXJ9Lz5cclxuXHJcbiAgICAgICAgPFZpZGVvUGxheWVyLz5cclxuXHJcbiAgICAgICAge3Byb2ZpbGVVc2VyLmlkID09PSBjdXJyZW50VXNlci5pZCAmJiBcclxuICAgICAgICAgIDxBZGRUb1BsYXlsaXN0Lz4gXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICA8UGxheWxpc3QgcHJvZmlsZVVzZXI9e3Byb2ZpbGVVc2VyfS8+XHJcblxyXG4gICAgICAgIDxDb21tZW50U2VjdGlvbiBwcm9maWxlVXNlcj17cHJvZmlsZVVzZXJ9Lz5cclxuXHJcbiAgICAgICAgPEZhdm91cml0ZXMgcHJvZmlsZVVzZXI9e3Byb2ZpbGVVc2VyfS8+XHJcblxyXG4gICAgICA8L2Rpdj5cclxuXHJcblxyXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAjcHJvZmlsZSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBgfTwvc3R5bGU+XHJcblxyXG4gICAgICAgIDxGb290ZXIgLz5cclxuICAgICAgPC8+XHJcbiAgKVxyXG59XHJcblxyXG4vLyBQcm9maWxlLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIChjdHggKSA9PiB7XHJcblxyXG4vLyAgIGNvbnNvbGUubG9nKGN0eC5xdWVyeS50b2tlbilcclxuICBcclxuLy8gICBjb25zdCBpZCA9IGN0eC5xdWVyeS51c2VySWRcclxuLy8gICAvLyBjb25zdCB1c2VyID0gYXdhaXQgZmV0Y2hQcm9maWxlVXNlcihpZCwgdHJ1ZSk7XHJcblxyXG4vLyAgIC8vIGNvbnN0IGdldFVzZXJEYXRhQnlJZCA9IGFzeW5jICh1c2VySWQpID0+IHtcclxuXHJcbi8vICAgLy8gICBjb25zdCByZXF1ZXN0Qm9keSA9IHtcclxuLy8gICAvLyAgICAgcXVlcnk6IGBcclxuLy8gICAvLyAgICAgICBxdWVyeSB7XHJcbi8vICAgLy8gICAgICAgICB1c2VyQnlJZChpZDpcIiR7dXNlcklkfVwiKSB7XHJcbi8vICAgLy8gICAgICAgICAgIGZpcnN0TmFtZSxcclxuLy8gICAvLyAgICAgICAgICAgbGFzdE5hbWUsXHJcbi8vICAgLy8gICAgICAgICAgIF9pZCxcclxuLy8gICAvLyAgICAgICAgICAgb3duZWRWaWRlb3Mge1xyXG4vLyAgIC8vICAgICAgICAgICAgIF9pZCxcclxuLy8gICAvLyAgICAgICAgICAgICB0aHVtYm5haWxVUkwsXHJcbi8vICAgLy8gICAgICAgICAgICAgdGl0bGUsXHJcbi8vICAgLy8gICAgICAgICAgICAgdmlkZW9VUkxcclxuLy8gICAvLyAgICAgICAgICAgfSxcclxuLy8gICAvLyAgICAgICAgICAgcGxheWxpc3RDb21tZW50c3tcclxuLy8gICAvLyAgICAgICAgICAgICBfaWQsXHJcbi8vICAgLy8gICAgICAgICAgICAgY29udGVudCxcclxuLy8gICAvLyAgICAgICAgICAgICBjb21tZW50ZXIge1xyXG4vLyAgIC8vICAgICAgICAgICAgICAgX2lkXHJcbi8vICAgLy8gICAgICAgICAgICAgfSxcclxuLy8gICAvLyAgICAgICAgICAgICBjcmVhdGVkQXQsXHJcbi8vICAgLy8gICAgICAgICAgICAgdXBkYXRlZEF0XHJcbi8vICAgLy8gICAgICAgICAgIH1cclxuLy8gICAvLyAgICAgICAgIH1cclxuLy8gICAvLyAgICAgICB9XHJcbi8vICAgLy8gICAgIGBcclxuLy8gICAvLyAgIH1cclxuXHJcbi8vICAgLy8gICB0cnkge1xyXG4vLyAgIC8vICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDo1MDAwL2dyYXBocWwnLCB7XHJcbi8vICAgLy8gICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbi8vICAgLy8gICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocmVxdWVzdEJvZHkpLFxyXG4vLyAgIC8vICAgICAgIGhlYWRlcnM6IHtcclxuLy8gICAvLyAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbi8vICAgLy8gICAgICAgICAnQXV0aG9yaXphdGlvbic6IGBCZWFyZXIgJHthdXRoU3RhdGUudG9rZW59YFxyXG4vLyAgIC8vICAgICAgIH1cclxuLy8gICAvLyAgICAgfSlcclxuXHJcbi8vICAgLy8gICAgIGlmIChyZXMuc3RhdHVzICE9PSAyMDAgJiYgcmVzLnN0YXR1cyAhPT0gMjAxKSB7XHJcbi8vICAgLy8gICAgICAgdGhyb3cgbmV3IEVycm9yKCdGYWlsZWQgdG8gZmV0Y2ggdXNlciBkYXRhJyk7XHJcbi8vICAgLy8gICAgIH1cclxuXHJcbi8vICAgLy8gICAgIC8vIC5qc29uKCkgaXMgYSBtZXRob2QgZnJvbSBmZXRjaCBBUEkgdGhhdCBhdXRvIGV4dHJhY3RzICYgcGFyc2VzIHRoZSByZXMgYm9keVxyXG4vLyAgIC8vICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuXHJcbi8vICAgLy8gICAgIC8vIENoZWNrIGZvciBlcnJvcnMgYXJyYXkgaW4gcmVzcG9uc2VcclxuLy8gICAvLyAgICAgaWYgKGRhdGEuZXJyb3JzKSB7XHJcbi8vICAgLy8gICAgICAgZGF0YS5lcnJvcnMubWFwKGVycm9yID0+IHtcclxuLy8gICAvLyAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLm1lc3NhZ2UpXHJcbi8vICAgLy8gICAgICAgfSlcclxuLy8gICAvLyAgICAgICByZXR1cm5cclxuLy8gICAvLyAgICAgfVxyXG5cclxuLy8gICAvLyAgICAgY29uc3QgdXNlciA9IChkYXRhLmRhdGEudXNlckJ5SWQpO1xyXG4vLyAgIC8vICAgICByZXR1cm4gdXNlcjtcclxuXHJcbi8vICAgLy8gICB9IGNhdGNoIChlcnIpIHtcclxuLy8gICAvLyAgICAgY29uc29sZS5sb2coZXJyKTtcclxuLy8gICAvLyAgIH1cclxuXHJcbi8vICAgLy8gfVxyXG5cclxuLy8gICAvLyBjb25zdCB1c2VyID0gYXdhaXQgZ2V0VXNlckRhdGFCeUlkKGlkKVxyXG4vLyAgIC8vIGNvbnNvbGUubG9nKHVzZXIpXHJcbi8vICAgcmV0dXJuIHsgfVxyXG4gIFxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2ZpbGU7Il19 */\n/*@ sourceURL=C:\\\\Coding\\\\MyProjects\\\\coders-jukebox\\\\pages\\\\profile\\\\[userId].js */"), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_13__["default"], null));
}; // Profile.getInitialProps = async (ctx ) => {
//   console.log(ctx.query.token)
//   const id = ctx.query.userId
//   // const user = await fetchProfileUser(id, true);
//   // const getUserDataById = async (userId) => {
//   //   const requestBody = {
//   //     query: `
//   //       query {
//   //         userById(id:"${userId}") {
//   //           firstName,
//   //           lastName,
//   //           _id,
//   //           ownedVideos {
//   //             _id,
//   //             thumbnailURL,
//   //             title,
//   //             videoURL
//   //           },
//   //           playlistComments{
//   //             _id,
//   //             content,
//   //             commenter {
//   //               _id
//   //             },
//   //             createdAt,
//   //             updatedAt
//   //           }
//   //         }
//   //       }
//   //     `
//   //   }
//   //   try {
//   //     const res = await fetch('http://localhost:5000/graphql', {
//   //       method: 'POST',
//   //       body: JSON.stringify(requestBody),
//   //       headers: {
//   //         'Content-Type': 'application/json',
//   //         'Authorization': `Bearer ${authState.token}`
//   //       }
//   //     })
//   //     if (res.status !== 200 && res.status !== 201) {
//   //       throw new Error('Failed to fetch user data');
//   //     }
//   //     // .json() is a method from fetch API that auto extracts & parses the res body
//   //     const data = await res.json();
//   //     // Check for errors array in response
//   //     if (data.errors) {
//   //       data.errors.map(error => {
//   //         console.log(error.message)
//   //       })
//   //       return
//   //     }
//   //     const user = (data.data.userById);
//   //     return user;
//   //   } catch (err) {
//   //     console.log(err);
//   //   }
//   // }
//   // const user = await getUserDataById(id)
//   // console.log(user)
//   return { }


/* harmony default export */ __webpack_exports__["default"] = (Profile);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly8vLi9hcGlzL3lvdXR1YmUuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9BYm91dE1lLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQWRkVG9QbGF5bGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NvbW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Db21tZW50U2VjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Zhdm91cml0ZUl0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9GYXZvdXJpdGVzLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRmlsZVVwbG9hZC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Zvb3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1BsYXlMaXN0LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUHJvZmlsZUVkaXQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Qcm9maWxlSW5mby5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NlYXJjaEJhci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1ZpZGVvSXRlbS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1ZpZGVvUGxheWVyLmpzIiwid2VicGFjazovLy8uL2NvbmZpZy9kZXYuanMiLCJ3ZWJwYWNrOi8vLy4vY29uZmlnL2tleXMuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGV4dC9HbG9iYWxDb250ZXh0LmpzIiwid2VicGFjazovLy8uL2Nzcy12YXJpYWJsZXMvY29sb3JzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L2xpbmsudHN4Iiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvd2l0aC1yb3V0ZXIudHN4Iiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvbWl0dC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9pcy1keW5hbWljLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1tYXRjaGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLXJlZ2V4LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3NlYXJjaC1wYXJhbXMtdG8tdXJsLXF1ZXJ5LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbGluay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvcmVhY3QtaXMvY2pzL3JlYWN0LWlzLmRldmVsb3BtZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9yZWFjdC1pcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9wcm9maWxlL1t1c2VySWRdLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZnJhbWVyLW1vdGlvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJvcC10eXBlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXMtZXhhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJxdWVyeXN0cmluZ1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3R5bGVkLWpzeC9zdHlsZVwiIl0sIm5hbWVzIjpbIktFWSIsIllPVVRVQkVBUElfS0VZIiwieW91dHViZSIsImF4aW9zIiwiY3JlYXRlIiwiYmFzZVVSTCIsInBhcmFtcyIsInBhcnQiLCJtYXhSZXN1bHRzIiwia2V5IiwiQWJvdXRNZSIsInByb2ZpbGVVc2VyIiwiY29sb3JzIiwicmV2ZXJzZVBpbmtHcmFkaWVudCIsInByaW1hcnkiLCJmaXJzdE5hbWUiLCJhYm91dCIsIkFkZFRvUGxheWxpc3QiLCJ2aWRlb3MiLCJzZXRWaWRlb3MiLCJ1c2VTdGF0ZSIsInNlYXJjaFZpZGVvSGFuZGxlciIsInNlYXJjaElucHV0IiwicmVzIiwiZ2V0IiwidHlwZSIsInEiLCJ2aWRlb0xpc3QiLCJkYXRhIiwiaXRlbXMiLCJncmFkaWVudCIsImxlbmd0aCIsIm1hcCIsInZpZGVvIiwiaWQiLCJ2aWRlb0lkIiwiQ29tbWVudCIsImNvbW1lbnQiLCJjb21tZW50ZXJJZCIsImNvbW1lbnRlciIsIl9pZCIsImdldENvbW1lbnRVc2VyIiwicmVtb3ZlQ29tbWVudEZyb21QbGF5bGlzdCIsImN1cnJlbnRVc2VyIiwiZmV0Y2hQcm9maWxlVXNlciIsImVkaXRDb21tZW50IiwidXNlQ29udGV4dCIsIkdsb2JhbENvbnRleHQiLCJjb21tZW50VXNlciIsInNldENvbW1lbnRVc2VyIiwibGFzdE5hbWUiLCJwcm9maWxlUGhvdG9GaWxlbmFtZSIsImVkaXRNb2RlIiwic2V0RWRpdE1vZGUiLCJlZGl0ZWRDb250ZW50UmVmIiwidXNlUmVmIiwidXNlRWZmZWN0IiwiZmV0Y2hEYXRhIiwidXNlciIsImVkaXRDb21tZW50Q2xpY2tIYW5kbGVyIiwiZWRpdENvbW1lbnRTdWJtaXRIYW5kbGVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwiY3VycmVudCIsInZhbHVlIiwidHJpbSIsImNvbnZlcnREYXRlIiwibWlsbGlzZWNzIiwiZCIsIkRhdGUiLCJkYXRlQXJyYXkiLCJ0b0xvY2FsZVN0cmluZyIsInNwbGl0IiwicmVtb3ZlQ29tbWVudENsaWNrSGFuZGxlciIsImNvbW1lbnRlckNsaWNrSGFuZGxlciIsImNvbnRlbnQiLCJjcmVhdGVkQXQiLCJkYXRlIiwiQ29tbWVudFNlY3Rpb24iLCJhZGRDb21tZW50IiwiYXV0aFN0YXRlIiwic2V0Q29udGVudCIsImhhbmRsZUNoYW5nZSIsInRhcmdldCIsImNvbW1lbnRTdWJtaXRIYW5kbGVyIiwicGxheWxpc3RDb21tZW50cyIsImF1dGhlbnRpY2F0ZWQiLCJGYXZvdXJpdGVJdGVtIiwiZ2V0RmF2b3VyaXRlVXNlciIsInJlbW92ZUZhdm91cml0ZSIsImZhdlVzZXIiLCJzZXRGYXZVc2VyIiwiZmF2VXNlckNsaWNrSGFuZGxlciIsInJlbW92ZUZhdkhhbmRsZXIiLCJ1c2VyRGF0YSIsInVuZGVmaW5lZCIsIkZhdm91cml0ZXMiLCJzZWNvbmRhcnkiLCJmYXZvdXJpdGVzIiwiZmF2b3VyaXRlIiwiRmlsZVVwbG9hZCIsImZpbGUiLCJzZXRGaWxlIiwiZmlsZW5hbWUiLCJzZXRGaWxlbmFtZSIsInVwbG9hZEZpbGUiLCJ1cGxvYWRGaWxlSGFuZGxlciIsInNpemUiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwib25DaGFuZ2UiLCJmaWxlcyIsIm5hbWUiLCJGb290ZXIiLCJ5ZWFyIiwiZ2V0RnVsbFllYXIiLCJyZXZlcnNlR3JhZGllbnQiLCJQbGF5TGlzdCIsIm93bmVkVmlkZW9zIiwidmlkZW9VUkwiLCJlZGl0VmFyaWFudHMiLCJoaWRkZW4iLCJvcGFjaXR5IiwieSIsInpJbmRleCIsInZpc2libGUiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJleGl0IiwiUHJvZmlsZUVkaXQiLCJ1cGRhdGVVc2VyIiwidXBsb2FkUGhvdG8iLCJwcm9maWxlSW5mbyIsInNldFByb2ZpbGVJbmZvIiwiam9iVGl0bGUiLCJsb2NhdGlvbiIsImxhbmd1YWdlcyIsImZpcnN0TmFtZVJlZiIsImxhc3ROYW1lUmVmIiwiam9iVGl0bGVSZWYiLCJsb2NhdGlvblJlZiIsImxhbmd1YWdlMVJlZiIsImxhbmd1YWdlMlJlZiIsImxhbmd1YWdlM1JlZiIsImxhbmd1YWdlNFJlZiIsImFib3V0UmVmIiwidXBkYXRlUHJvZmlsZUhhbmRsZXIiLCJsYW5ndWFnZTEiLCJsYW5ndWFnZTIiLCJsYW5ndWFnZTMiLCJsYW5ndWFnZTQiLCJnZXRFeGlzdGluZ0xhbmd1YWdlcyIsInByb2ZpbGVJbmZvVmFyaWFudHMiLCJQcm9maWxlSW5mbyIsImNsZWFyUHJvZmlsZVVzZXIiLCJhZGRGYXZvdXJpdGUiLCJpc0Zhdm91cml0ZSIsInNldElzRmF2b3VyaXRlIiwiYWRkRmF2b3VyaXRlSGFuZGxlciIsInJlbW92ZUZhdm91cml0ZUhhbmRsZXIiLCJnZXRMYW5ndWFnZVN0cmluZyIsImxhbmd1YWdlU3RyaW5nIiwibGFuZ3VhZ2UiLCJpbmRleCIsInRlcnRpYXJ5IiwiaW5jbHVkZXMiLCJTZWFyY2hiYXIiLCJwbGFjZWhvbGRlciIsInN1Ym1pdEhhbmRsZXIiLCJzZXRTZWFyY2hJbnB1dCIsIm9uQ2hhbmdlSGFuZGxlciIsIm9uRm9ybVN1Ym1pdCIsIlZpZGVvSXRlbSIsIm1vZGUiLCJhZGRWaWRlb1RvUGxheWxpc3QiLCJyZW1vdmVWaWRlb0Zyb21QbGF5bGlzdCIsInNldEN1cnJlbnRWaWRlbyIsInNldEF1dG9wbGF5IiwiYWRkVmlkZW9DbGlja0hhbmRsZXIiLCJ2aWRlb1RvU2F2ZSIsInRpdGxlIiwic25pcHBldCIsImpvaW4iLCJ0aHVtYm5haWxVUkwiLCJ0aHVtYm5haWxzIiwiZGVmYXVsdCIsInVybCIsInJlbW92ZVZpZGVvQ2xpY2tIYW5kbGVyIiwicGxheUJ1dHRvbkhhbmRsZXIiLCJ2aWRlb1RvU2V0IiwiVmlkZW9QbGF5ZXIiLCJ2aWRlb1N0YXRlIiwiYXV0b3BsYXkiLCJ2aWRlb1NyYyIsIm1vZHVsZSIsImV4cG9ydHMiLCJtb25nb1VSSSIsInJlcXVpcmUiLCJpbml0aWFsU3RhdGUiLCJhdXRoRGF0YSIsImNyZWF0ZUNvbnRleHQiLCJwaW5rR3JhZGVudCIsImxvY2F0aW9uT3JpZ2luIiwicmVzb2x2ZWQiLCJsaXN0ZW5lcnMiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsIndpbmRvdyIsInByZWZldGNoZWQiLCJjYWNoZWRPYnNlcnZlciIsImVudHJpZXMiLCJlbnRyeSIsImNiIiwicm9vdE1hcmdpbiIsImxpc3RlblRvSW50ZXJzZWN0aW9ucyIsIm9ic2VydmVyIiwiZ2V0T2JzZXJ2ZXIiLCJjb25zb2xlIiwicm91dGVyIiwiZXJyIiwiaHJlZiIsIm5vZGVOYW1lIiwiaXNMb2NhbCIsInNjcm9sbCIsImFzIiwicmVwbGFjZSIsInN1Y2Nlc3MiLCJkb2N1bWVudCIsImhhc1dhcm5lZCIsIlJlYWN0IiwicHJvcHMiLCJwIiwicGF0aG5hbWUiLCJyZXNvbHZlZEhyZWYiLCJjaGlsZEVsbSIsImlzUHJlZmV0Y2hlZCIsInByZWZldGNoIiwiY2hpbGRyZW4iLCJjaGlsZCIsIkNoaWxkcmVuIiwiY2hpbGRQcm9wcyIsInJlZiIsImVsIiwic2V0Q2hpbGRFbG0iLCJvbkNsaWNrIiwibGlua0NsaWNrZWQiLCJwcmlvcml0eSIsInByb2Nlc3MiLCJ3YXJuIiwiUHJvcFR5cGVzIiwiZXhhY3QiLCJMaW5rIiwic2hhbGxvdyIsInBhc3NIcmVmIiwicGF0aCIsIm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoIiwic2luZ2xldG9uUm91dGVyIiwicmVhZHlDYWxsYmFja3MiLCJyZWFkeSIsInVybFByb3BlcnR5RmllbGRzIiwicm91dGVyRXZlbnRzIiwiY29yZU1ldGhvZEZpZWxkcyIsIk9iamVjdCIsIlJvdXRlciIsImZpZWxkIiwiZ2V0Um91dGVyIiwiZXZlbnQiLCJldmVudEZpZWxkIiwiX3NpbmdsZXRvblJvdXRlciIsIm1lc3NhZ2UiLCJzdGFjayIsIlJvdXRlckNvbnRleHQiLCJjcmVhdGVSb3V0ZXIiLCJfcm91dGVyIiwiaW5zdGFuY2UiLCJDb21wb3NlZENvbXBvbmVudCIsImdldEluaXRpYWxQcm9wcyIsIldpdGhSb3V0ZXJXcmFwcGVyIiwiYWxsIiwib24iLCJvZmYiLCJlbWl0IiwiaGFuZGxlciIsImJhc2VQYXRoIiwiY2FuY2VsbGVkIiwiYmFzZSIsInVybEFzU3RyaW5nIiwiZmluYWxVcmwiLCJhZGRCYXNlUGF0aCIsInJlc29sdmVIcmVmIiwibWFudWFsU2Nyb2xsUmVzdG9yYXRpb24iLCJjcmVkZW50aWFscyIsImF0dGVtcHRzIiwiZmV0Y2hSZXRyeSIsImlzU2VydmVyUmVuZGVyIiwiY29uc3RydWN0b3IiLCJyb3V0ZSIsInF1ZXJ5IiwiYXNQYXRoIiwiY29tcG9uZW50cyIsInNkYyIsInN1YiIsImNsYyIsInBhZ2VMb2FkZXIiLCJfYnBzIiwiZXZlbnRzIiwiX3dyYXBBcHAiLCJpc1NzciIsImlzRmFsbGJhY2siLCJfaW5GbGlnaHRSb3V0ZSIsIl9fTl9TU0ciLCJpbml0aWFsUHJvcHMiLCJfX05fU1NQIiwiQ29tcG9uZW50IiwiX19ORVhUX0RBVEFfXyIsInVwZGF0ZSIsIm1vZCIsIm5ld0RhdGEiLCJyZWxvYWQiLCJiYWNrIiwicHVzaCIsIm9wdGlvbnMiLCJwcmVwYXJlVXJsQXMiLCJTVCIsInBlcmZvcm1hbmNlIiwiY2xlYW5lZEFzIiwiZGVsQmFzZVBhdGgiLCJwYXJzZWQiLCJ0cnlQYXJzZVJlbGF0aXZlVXJsIiwibWV0aG9kIiwicm91dGVSZWdleCIsInJvdXRlTWF0Y2giLCJtaXNzaW5nUGFyYW1zIiwicGFyYW0iLCJhc1BhdGhuYW1lIiwicm91dGVJbmZvIiwiYXBwQ29tcCIsImNoYW5nZVN0YXRlIiwiX19OIiwiYnVpbGRDYW5jZWxsYXRpb25FcnJvciIsInBhZ2UiLCJlcnJvciIsImNhY2hlZFJvdXRlSW5mbyIsImlzVmFsaWRFbGVtZW50VHlwZSIsImRhdGFIcmVmIiwic2V0IiwiYmVmb3JlUG9wU3RhdGUiLCJvbmx5QUhhc2hDaGFuZ2UiLCJuZXdIYXNoIiwib2xkVXJsTm9IYXNoIiwib2xkSGFzaCIsInNjcm9sbFRvSGFzaCIsImhhc2giLCJpZEVsIiwibmFtZUVsIiwidXJsSXNOZXciLCJQcm9taXNlIiwiY2FuY2VsIiwiY29tcG9uZW50UmVzdWx0IiwiX2dldERhdGEiLCJmbiIsIl9nZXRTdGF0aWNEYXRhIiwiZmV0Y2hOZXh0RGF0YSIsIl9nZXRTZXJ2ZXJEYXRhIiwiQXBwVHJlZSIsImN0eCIsImFib3J0Q29tcG9uZW50TG9hZCIsIm5vdGlmeSIsInNsYXNoZWRQcm90b2NvbHMiLCJwcm90b2NvbCIsInVybE9iaiIsImhvc3QiLCJhdXRoIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiaG9zdG5hbWUiLCJzZWFyY2giLCJURVNUX1JPVVRFIiwiRFVNTVlfQkFTRSIsInJlc29sdmVkQmFzZSIsIm9yaWdpbiIsInJlIiwiZGVjb2RlIiwiZGVjb2RlVVJJQ29tcG9uZW50Iiwic2x1Z05hbWUiLCJnIiwiZ3JvdXBzIiwibSIsInN0ciIsIm9wdGlvbmFsIiwicmVwZWF0Iiwic2VnbWVudHMiLCJub3JtYWxpemVkUm91dGUiLCJncm91cEluZGV4IiwicGFyYW1ldGVyaXplZFJvdXRlIiwic2VnbWVudCIsInBhcnNlUGFyYW1ldGVyIiwicG9zIiwiZXNjYXBlUmVnZXgiLCJyb3V0ZUtleUNoYXJDb2RlIiwicm91dGVLZXlDaGFyTGVuZ3RoIiwiZ2V0U2FmZVJvdXRlS2V5Iiwicm91dGVLZXkiLCJpIiwiU3RyaW5nIiwicm91dGVLZXlzIiwibmFtZWRQYXJhbWV0ZXJpemVkUm91dGUiLCJjbGVhbmVkS2V5IiwiaW52YWxpZEtleSIsImlzTmFOIiwicGFyc2VJbnQiLCJuYW1lZFJlZ2V4Iiwic2VhcmNoUGFyYW1zIiwiQXJyYXkiLCJ1c2VkIiwicmVzdWx0IiwicG9ydCIsImdldExvY2F0aW9uT3JpZ2luIiwiQXBwIiwiZ2V0RGlzcGxheU5hbWUiLCJwYWdlUHJvcHMiLCJsb2FkR2V0SW5pdGlhbFByb3BzIiwiaXNSZXNTZW50IiwidXJsT2JqZWN0S2V5cyIsIlNQIiwiUHJvZmlsZSIsInVzZVJvdXRlciIsInVzZXJJZCJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJB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QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBOzs7QUFJZTZaLHNFQUFmLEU7Ozs7Ozs7Ozs7O0FDbE1BLGtDOzs7Ozs7Ozs7OztBQ0FBLDBDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLDZDIiwiZmlsZSI6InBhZ2VzL3Byb2ZpbGUvW3VzZXJJZF0uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL3Byb2ZpbGUvW3VzZXJJZF0uanNcIik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIik7IiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgWU9VVFVCRUFQSV9LRVkgfSBmcm9tICcuLi9jb25maWcva2V5cyc7XHJcblxyXG5leHBvcnQgY29uc3QgS0VZID0gWU9VVFVCRUFQSV9LRVk7XHJcblxyXG5leHBvcnQgY29uc3QgeW91dHViZSA9IGF4aW9zLmNyZWF0ZSh7XHJcbiAgYmFzZVVSTDogJ2h0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL3lvdXR1YmUvdjMnLFxyXG4gIHBhcmFtczoge1xyXG4gICAgcGFydDogJ3NuaXBwZXQnLFxyXG4gICAgbWF4UmVzdWx0czogNSxcclxuICAgIGtleTogWU9VVFVCRUFQSV9LRVlcclxuICB9XHJcbn0pOyIsImltcG9ydCBjb2xvcnMgZnJvbSAnLi4vY3NzLXZhcmlhYmxlcy9jb2xvcnMnO1xyXG5cclxuY29uc3QgQWJvdXRNZSA9ICh7cHJvZmlsZVVzZXJ9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIGlkPVwiYWJvdXQtbWVcIj5cclxuICAgICAgPGgyPkFib3V0IHtwcm9maWxlVXNlci5maXJzdE5hbWV9PC9oMj5cclxuICAgICAge3Byb2ZpbGVVc2VyLmFib3V0ICE9PSBudWxsICYmXHJcbiAgICAgICAgPHA+XHJcbiAgICAgICAgICB7cHJvZmlsZVVzZXIuYWJvdXR9XHJcbiAgICAgICAgPC9wPlxyXG4gICAgICB9XHJcbiAgICAgIHtwcm9maWxlVXNlci5hYm91dCA9PT0gbnVsbCAmJlxyXG4gICAgICAgIDxwPlxyXG4gICAgICAgICAgVGhlcmUncyBub3RoaW5nIGhlcmUgeWV0IVxyXG4gICAgICAgIDwvcD5cclxuICAgICAgfVxyXG4gICAgXHJcbiAgICBcclxuICAgIFxyXG4gICAgPHN0eWxlIGpzeD57YFxyXG4gICAgXHJcbiAgICAgIHNlY3Rpb24jYWJvdXQtbWUge1xyXG4gICAgICAgIC8qIGJhY2tncm91bmQgIDogJHtjb2xvcnMucmV2ZXJzZVBpbmtHcmFkaWVudH07ICovXHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJHtjb2xvcnMucHJpbWFyeX07XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICBwYWRkaW5nOiAycmVtO1xyXG4gICAgICAgIHdpZHRoOiA4NCU7XHJcbiAgICAgICAgbWFyZ2luOiAzcmVtIGF1dG87XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHAge1xyXG4gICAgICAgIHBhZGRpbmc6IDJyZW07XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIuNXJlbTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLyogTWVkaWEgcXVlcmllcyAqL1xyXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogOTAwcHgpe1xyXG4gICAgICAgIHNlY3Rpb24jYWJvdXQtbWUge1xyXG4gICAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICAgIHBhZGRpbmc6IDJyZW0gMXJlbSAycmVtIDFyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBoMiB7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMXJlbTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2NjBweCl7XHJcbiAgICAgICAgc2VjdGlvbiNhYm91dC1tZSB7XHJcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0NzBweCl7XHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMC41cmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQwMHB4KXtcclxuICAgICAgICBwIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICAgIHBhZGRpbmc6IDAuNXJlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICB9XHJcblxyXG4gICAgYH08L3N0eWxlPlxyXG4gICAgXHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBYm91dE1lO1xyXG4iLCJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgU2VhcmNoQmFyIGZyb20gJy4vU2VhcmNoQmFyJztcclxuaW1wb3J0IHsgeW91dHViZSB9IGZyb20gJy4uL2FwaXMveW91dHViZSc7XHJcbmltcG9ydCB7IFlPVVRVQkVBUElfS0VZIH0gZnJvbSAnLi4vY29uZmlnL2tleXMnO1xyXG5pbXBvcnQgVmlkZW9JdGVtIGZyb20gJy4vVmlkZW9JdGVtJztcclxuaW1wb3J0IGNvbG9ycyBmcm9tICcuLi9jc3MtdmFyaWFibGVzL2NvbG9ycyc7XHJcblxyXG5jb25zdCBBZGRUb1BsYXlsaXN0ID0gKCkgPT4ge1xyXG5cclxuICBjb25zdCBbdmlkZW9zLCBzZXRWaWRlb3NdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICBjb25zdCBzZWFyY2hWaWRlb0hhbmRsZXIgPSBhc3luYyAoc2VhcmNoSW5wdXQpID0+IHtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IHlvdXR1YmUuZ2V0KCcvc2VhcmNoJywge1xyXG4gICAgICAgIHBhcmFtczoge1xyXG4gICAgICAgICAgdHlwZTogJ3ZpZGVvJyxcclxuICAgICAgICAgIHBhcnQ6ICdzbmlwcGV0JyxcclxuICAgICAgICAgIG1heFJlc3VsdHM6IDUsXHJcbiAgICAgICAgICBrZXk6IFlPVVRVQkVBUElfS0VZLFxyXG4gICAgICAgICAgcTogc2VhcmNoSW5wdXRcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcblxyXG4gICAgY29uc3QgdmlkZW9MaXN0ID0gcmVzLmRhdGEuaXRlbXM7XHJcbiAgICBzZXRWaWRlb3ModmlkZW9MaXN0KTtcclxuICB9XHJcblxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gaWQ9XCJhZGRUb1BsYXlsaXN0XCI+XHJcbiAgICAgIDxkaXYgaWQ9XCJoZWFkZXJcIj5cclxuICAgICAgICA8aDI+QWRkIFRvIFBsYXlsaXN0PC9oMj5cclxuICAgICAgICA8U2VhcmNoQmFyIHBsYWNlaG9sZGVyPSdTZWFyY2ggZm9yIG11c2ljJyBzZWFyY2hNb2RlPVwidmlkZW9cIiBzdWJtaXRIYW5kbGVyPXtzZWFyY2hWaWRlb0hhbmRsZXJ9Lz5cclxuICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAgPGRpdiBpZD1cInZpZGVvc1wiPlxyXG4gICAgICAgIHsgdmlkZW9zLmxlbmd0aCA9PT0gMCAmJlxyXG4gICAgICAgICAgPGgzPlNlYXJjaCBmb3IgbXVzaWMgdG8gYWRkIHRvIHlvdXIgcGxheWxpc3QhPC9oMz5cclxuICAgICAgICB9XHJcbiAgICAgICAge3ZpZGVvcy5tYXAodmlkZW8gPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPFZpZGVvSXRlbSB2aWRlbz17dmlkZW99IG1vZGU9XCJ5b3V0dWJlXCIga2V5PXt2aWRlby5pZC52aWRlb0lkfS8+XHJcbiAgICAgICAgICApXHJcbiAgICAgICAgfSl9XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICA8c3R5bGUganN4PntgXHJcblxyXG4gICAgc2VjdGlvbiB7XHJcbiAgICAgIG1hcmdpbjogMnJlbSBhdXRvIDNyZW0gYXV0bztcclxuICAgICAgd2lkdGg6IDg0JTtcclxuICAgICAgLyogcGFkZGluZzogM3JlbTsgKi9cclxuICAgICAgLyogYm9yZGVyOiAxcHggc29saWQgYmxhY2s7ICovXHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxuICBcclxuICAgICNoZWFkZXIge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBiYWNrZ3JvdW5kOiAke2NvbG9ycy5ncmFkaWVudH07XHJcbiAgICAgIC8qIG1hcmdpbjogMnJlbSAwOyAqL1xyXG4gICAgICAvKiBoZWlnaHQ6IDEwMCU7ICovXHJcbiAgICAgIHBhZGRpbmc6IDJyZW07XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAwIDA7XHJcbiAgICB9XHJcblxyXG4gICAgaDIge1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogN3JlbTtcclxuICAgICAgd2lkdGg6IDI1JTtcclxuICAgIH1cclxuXHJcbiAgICAjdmlkZW9zIHtcclxuICAgICAgLyogcGFkZGluZzogMXJlbTsgKi9cclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgJHtjb2xvcnMucHJpbWFyeX07XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDAgMCAxMHB4IDEwcHg7XHJcbiAgICAgIGJvcmRlci10b3A6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgaDMge1xyXG4gICAgICBwYWRkaW5nOiAycmVtO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLyogTWVkaWEgcXVlcmllcyAqL1xyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDExMDBweCkge1xyXG4gICAgICBoMiB7XHJcbiAgICAgICAgbWluLXdpZHRoOiAyNiU7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDgzMHB4KSB7XHJcbiAgICAgICNoZWFkZXIge1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGgyIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XHJcbiAgICAgICAgbWluLXdpZHRoOiA2MCU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNTIwcHgpIHtcclxuICAgICAgI2hlYWRlciB7XHJcbiAgICAgICAgcGFkZGluZzogMS41cmVtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDM1NXB4KSB7XHJcbiAgICAgIGgyIHtcclxuICAgICAgICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGgzIHtcclxuICAgICAgICBwYWRkaW5nOiAxLjVyZW07XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgYH08L3N0eWxlPlxyXG5cclxuXHJcblxyXG4gICAgPC9zZWN0aW9uPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWRkVG9QbGF5bGlzdDsiLCJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEdsb2JhbENvbnRleHQgfSBmcm9tICcuLi9jb250ZXh0L0dsb2JhbENvbnRleHQnO1xyXG5pbXBvcnQgY29sb3JzIGZyb20gICcuLi9jc3MtdmFyaWFibGVzL2NvbG9ycyc7XHJcblxyXG5jb25zdCBDb21tZW50ID0gKHtjb21tZW50fSkgPT4ge1xyXG4gIFxyXG4gIGNvbnN0IGNvbW1lbnRlcklkID0gY29tbWVudC5jb21tZW50ZXIuX2lkIFxyXG4gIFxyXG4gIGNvbnN0IHsgZ2V0Q29tbWVudFVzZXIsIHJlbW92ZUNvbW1lbnRGcm9tUGxheWxpc3QsIGN1cnJlbnRVc2VyLCBmZXRjaFByb2ZpbGVVc2VyLCBlZGl0Q29tbWVudCB9ID0gdXNlQ29udGV4dChHbG9iYWxDb250ZXh0KTtcclxuICBcclxuICBjb25zdCBbY29tbWVudFVzZXIsIHNldENvbW1lbnRVc2VyXSA9IHVzZVN0YXRlKHtcclxuICAgIGZpcnN0TmFtZTogJycsXHJcbiAgICBsYXN0TmFtZTonJyxcclxuICAgIHByb2ZpbGVQaG90b0ZpbGVuYW1lOiAnJ1xyXG4gIH0pO1xyXG4gIFxyXG4gIGNvbnN0IFtlZGl0TW9kZSwgc2V0RWRpdE1vZGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIFxyXG4gIGNvbnN0IGVkaXRlZENvbnRlbnRSZWYgPSB1c2VSZWYoKTtcclxuXHJcbiAgXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGFzeW5jIGZ1bmN0aW9uIGZldGNoRGF0YSgpIHtcclxuICAgICAgY29uc3QgdXNlciA9IGF3YWl0IGdldENvbW1lbnRVc2VyKGNvbW1lbnQuY29tbWVudGVyLl9pZCk7XHJcbiAgICAgIHNldENvbW1lbnRVc2VyKHtcclxuICAgICAgICBmaXJzdE5hbWU6IHVzZXIuZmlyc3ROYW1lLFxyXG4gICAgICAgIGxhc3ROYW1lOiB1c2VyLmxhc3ROYW1lLFxyXG4gICAgICAgIHByb2ZpbGVQaG90b0ZpbGVuYW1lOiB1c2VyLnByb2ZpbGVQaG90b0ZpbGVuYW1lXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBmZXRjaERhdGEoKTtcclxuICB9LCBbXSlcclxuXHJcbiAgLy8gY29uc3QgW2NvbnRlbnQsIHNldENvbnRlbnRdID0gdXNlU3RhdGUoJycpO1xyXG5cclxuICAvLyBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gIC8vICAgc2V0Q29udGVudChlLnRhcmdldC52YWx1ZSk7XHJcbiAgLy8gfVxyXG5cclxuICBcclxuICBjb25zdCBlZGl0Q29tbWVudENsaWNrSGFuZGxlciA9ICgpID0+IHtcclxuICAgIC8vU2hvdyB0aGUgZWRpdCBjb21tZW50IHRleHRhcmVhXHJcbiAgICBzZXRFZGl0TW9kZSghZWRpdE1vZGUpOyBcclxuICB9XHJcblxyXG4gIGNvbnN0IGVkaXRDb21tZW50U3VibWl0SGFuZGxlciA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAvLyBDaGVjayBpZiB0aGUgY29udGVudCBpcyBlbXB0eVxyXG4gICAgaWYgKGVkaXRlZENvbnRlbnRSZWYuY3VycmVudC52YWx1ZS50cmltKCkubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGVkaXRDb21tZW50KGNvbW1lbnQuX2lkLCBlZGl0ZWRDb250ZW50UmVmLmN1cnJlbnQudmFsdWUpO1xyXG4gICAgLy8gRXhpdCBlZGl0IG1vZGVcclxuICAgIHNldEVkaXRNb2RlKGZhbHNlKTtcclxuICB9XHJcblxyXG4gIFxyXG4gIGNvbnN0IGNvbnZlcnREYXRlPSAobWlsbGlzZWNzKSA9PiB7XHJcbiAgICBjb25zdCBkID0gbmV3IERhdGUoK21pbGxpc2Vjcyk7XHJcbiAgICAvLyByZXR1cm4gZC50b0xvY2FsZVN0cmluZygpO1xyXG4gICAgY29uc3QgZGF0ZUFycmF5ID0gZC50b0xvY2FsZVN0cmluZygpLnNwbGl0KFwiLCBcIik7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhhcnJheSk7XHJcbiAgICByZXR1cm4gZGF0ZUFycmF5XHJcbiAgfVxyXG5cclxuICBjb25zdCByZW1vdmVDb21tZW50Q2xpY2tIYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgcmVtb3ZlQ29tbWVudEZyb21QbGF5bGlzdChjb21tZW50Ll9pZCk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBjb21tZW50ZXJDbGlja0hhbmRsZXIgPSAoKSA9PiB7XHJcbiAgICBmZXRjaFByb2ZpbGVVc2VyKGNvbW1lbnRlcklkLCBmYWxzZSk7XHJcbiAgfVxyXG5cclxuXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21tZW50XCIga2V5PXtjb21tZW50Ll9pZH0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImF2YXRhclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImF2YXRhci1jcm9wXCI+XHJcbiAgICAgICAgICAgICAge2NvbW1lbnRVc2VyLnByb2ZpbGVQaG90b0ZpbGVuYW1lICE9PSBudWxsICYmIGNvbW1lbnRVc2VyLnByb2ZpbGVQaG90b0ZpbGVuYW1lICE9PSAnJyAmJlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9maWxlL1t1c2VySWRdXCIgYXM9e2AvcHJvZmlsZS8ke2NvbW1lbnRlcklkfWB9PlxyXG4gICAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXtjb21tZW50ZXJDbGlja0hhbmRsZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtgaHR0cDovL2xvY2FsaG9zdDozMDAwL2ltYWdlLyR7Y29tbWVudFVzZXIucHJvZmlsZVBob3RvRmlsZW5hbWV9YH0gYWx0PVwiYXZhdGFyXCIgLz5cclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB7KGNvbW1lbnRVc2VyLnByb2ZpbGVQaG90b0ZpbGVuYW1lID09PSBudWxsIHx8IGNvbW1lbnRVc2VyLnByb2ZpbGVQaG90b0ZpbGVuYW1lID09PSAnJykgJiZcclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvZmlsZS9bdXNlcklkXVwiIGFzPXtgL3Byb2ZpbGUvJHtjb21tZW50ZXJJZH1gfT5cclxuICAgICAgICAgICAgICAgICAgPGEgb25DbGljaz17Y29tbWVudGVyQ2xpY2tIYW5kbGVyfT5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz0nL2RlZmF1bHQtYXZhdGFyLmpwZycgYWx0PVwiYXZhdGFyXCIgLz5cclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21tZW50ZXJcIj5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9maWxlL1t1c2VySWRdXCIgYXM9e2AvcHJvZmlsZS8ke2NvbW1lbnRlcklkfWB9PlxyXG4gICAgICAgICAgICAgIDxhIG9uQ2xpY2s9e2NvbW1lbnRlckNsaWNrSGFuZGxlcn0+PGgzPntjb21tZW50VXNlci5maXJzdE5hbWV9IHtjb21tZW50VXNlci5sYXN0TmFtZX08L2gzPjwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICB7IWVkaXRNb2RlICYmIFxyXG4gICAgICAgICAgICAgIDxwPntjb21tZW50LmNvbnRlbnR9PC9wPlxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIHtlZGl0TW9kZSAmJlxyXG4gICAgICAgICAgICA8c2VjdGlvbiBpZD1cImVkaXQtY29tbWVudFwiPlxyXG4gICAgICAgICAgICAgIDxmb3JtIGlkPVwiZWRpdC1mb3JtXCIgb25TdWJtaXQ9eyhlKSA9PiBlZGl0Q29tbWVudFN1Ym1pdEhhbmRsZXIoZSl9PlxyXG4gICAgICAgICAgICAgICAgPHRleHRhcmVhIG5hbWU9XCJlZGl0LWNvbW1lbnQtaW5wdXRcIiBpZD1cImVkaXQtY29tbWVudC1pbnB1dFwiIGRlZmF1bHRWYWx1ZT17Y29tbWVudC5jb250ZW50fSBjb2xzPVwiMzBcIiByb3dzPVwiNVwiIHJlZj17ZWRpdGVkQ29udGVudFJlZn0+PC90ZXh0YXJlYT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZWRpdC1idG5zXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXBlbmNpbFwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17ZWRpdENvbW1lbnRDbGlja0hhbmRsZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXdpbmRvdy1jbG9zZVwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgPC9kaXY+ICAgICAgXHJcblxyXG4gICAgICAgIHshZWRpdE1vZGUgJiYgXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhdGUtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIHtjdXJyZW50VXNlci5pZCA9PT0gY29tbWVudGVySWQgJiYgIWVkaXRNb2RlICYmXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21tZW50LWJ0bnNcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17ZWRpdENvbW1lbnRDbGlja0hhbmRsZXJ9PlxyXG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1wZW5jaWwtc3F1YXJlLW9cIj48L2k+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17cmVtb3ZlQ29tbWVudENsaWNrSGFuZGxlcn0+XHJcbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXRyYXNoXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXRlLXRpbWVcIj5cclxuICAgICAgICAgICAgICB7Y29udmVydERhdGUoY29tbWVudC5jcmVhdGVkQXQpLm1hcChkYXRlID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiA8aDQgY2xhc3NOYW1lPVwiZGF0ZVwiIGtleT17ZGF0ZX0+e2RhdGV9PC9oND5cclxuICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICB9ICBcclxuXHJcbiAgICAgICAgXHJcblxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICA8Lz5cclxuXHJcbiAgICBcclxuXHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuXHJcbiAgICAgIC5jb21tZW50IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgbWFyZ2luOiAxcmVtIDA7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5jb21tZW50ZXIge1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgJHtjb2xvcnMucHJpbWFyeX1cclxuICAgICAgfVxyXG5cclxuICAgICAgLmNvbW1lbnRlciBoMyB7XHJcbiAgICAgICAgbWFyZ2luOiAwIDFyZW07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5jb250ZW50IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHBhZGRpbmc6IDEuMnJlbSAwIDEuMnJlbSAxLjJyZW07XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmNvbW1lbnQtaW5mbyB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuYXZhdGFyIHtcclxuICAgICAgICBtYXgtaGVpZ2h0OiA1MHB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuYXZhdGFyLWNyb3Age1xyXG4gICAgICAgIG1heC13aWR0aDogNTBweDtcclxuICAgICAgICBtYXgtaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpbWcge1xyXG4gICAgICAgIG1heC13aWR0aDogNTBweDtcclxuICAgICAgICBtYXgtaGVpZ2h0OiA3NXB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBoNCB7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgfVxyXG5cclxuICAgICAgcCB7XHJcbiAgICAgICAgbWFyZ2luOiAwIDEuNXJlbTtcclxuICAgICAgICAvKiBvdmVyZmxvdy15OiBzY3JvbGw7ICovXHJcbiAgICAgICAgLyogaGVpZ2h0OiAxMDBweDsgKi9cclxuICAgICAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgICAgICAgd2lkdGg6IDY1MHB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuZGF0ZS1jb250YWluZXIge1xyXG4gICAgICAgIG1hcmdpbjogMXJlbSAwIDFyZW0gYXV0bztcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwLjVyZW07XHJcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAke2NvbG9ycy5wcmltYXJ5fTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmRhdGUtdGltZSB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMC41cmVtO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuZGF0ZS1jb250YWluZXIgaDQge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMXJlbSAwIDEuNXJlbTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmNvbW1lbnQtYnRucyB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxLjE1cmVtO1xyXG5cclxuICAgICAgfVxyXG5cclxuICAgICAgYnV0dG9uIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgfVxyXG5cclxuICAgIGkge1xyXG4gICAgICBjb2xvcjogJHtjb2xvcnMucHJpbWFyeX07XHJcbiAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjJzIGVhc2UtaW4tb3V0O1xyXG4gICAgfVxyXG5cclxuICAgIC5jb21tZW50LWJ0bnMgaSB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIH1cclxuXHJcbiAgICBpLmZhLXBlbmNpbC1zcXVhcmUtbyB7XHJcbiAgICAgIHRvcDogOHB4O1xyXG4gICAgICBsZWZ0OiAtMnB4O1xyXG4gICAgfVxyXG5cclxuICAgIGkuZmEtdHJhc2gge1xyXG4gICAgICB0b3A6IDZweDtcclxuICAgICAgbGVmdDogMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIGk6aG92ZXIge1xyXG4gICAgICBjb2xvcjogI2U1MzA1YTtcclxuICAgIH1cclxuXHJcbiAgICBidXR0b246Zm9jdXMge1xyXG4gICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgIHNlY3Rpb24jZWRpdC1jb21tZW50IHtcclxuICAgICAgd2lkdGg6IDg1JTtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDFyZW07XHJcbiAgICB9XHJcblxyXG4gICAgZm9ybSNlZGl0LWZvcm0ge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICB0ZXh0YXJlYSB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBmb250OiBpbmhlcml0O1xyXG4gICAgICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgICB9XHJcblxyXG4gICAgI2VkaXQtY29tbWVudCBidXR0b24ge1xyXG4gICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgIHBhZGRpbmc6IDAgMC41cmVtO1xyXG4gICAgfVxyXG5cclxuICAgIC5lZGl0LWJ0bnMge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgfVxyXG5cclxuICAgIGkuZmEtcGVuY2lsIHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcclxuICAgIH1cclxuXHJcbiAgICBpLmZhLXdpbmRvdy1jbG9zZSB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMC41cmVtO1xyXG4gICAgfVxyXG5cclxuICAgIC8qIE1lZGlhIHF1ZXJpZXMgKi9cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMTUwcHggKSB7XHJcbiAgICAgIHAge1xyXG4gICAgICAgIHdpZHRoOiA0MDBweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMDcwcHggKSB7XHJcbiAgICAgIHAge1xyXG4gICAgICAgIHdpZHRoOiAzNTBweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMDAwcHggKSB7XHJcbiAgICAgIHAge1xyXG4gICAgICAgIHdpZHRoOiAzMDBweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmF2YXRhciB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmNvbnRlbnQge1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMC41cmVtO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvKiAuY29tbWVudCB7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgfSAqL1xyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA4NjBweCkge1xyXG4gICAgICAuY29tbWVudCB7XHJcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5kYXRlLWNvbnRhaW5lciB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogLTExcHg7XHJcbiAgICAgICAgcmlnaHQ6IC03cHg7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuZWRpdC1idG5zIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAycHg7XHJcbiAgICAgICAgcmlnaHQ6IDFweDtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRleHRhcmVhIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxLjRyZW07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5kYXRlLXRpbWUge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogODMwcHgpIHtcclxuICAgICAgLmNvbnRlbnQge1xyXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5jb21tZW50IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBwIHtcclxuICAgICAgICB3aWR0aDogNDgwcHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMS41cmVtO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuYXZhdGFyIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAxOHB4O1xyXG4gICAgICAgIGxlZnQ6IDE2cHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5jb21tZW50ZXIgaDMge1xyXG4gICAgICAgIG1hcmdpbjogMC43cmVtIDByZW0gMHJlbSA0LjNyZW07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5jb21tZW50ZXIge1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgc2VjdGlvbiNlZGl0LWNvbW1lbnQge1xyXG4gICAgICAgIHdpZHRoOiA5MiU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogODAwcHggKSB7XHJcbiAgICAgIHAge1xyXG4gICAgICAgIHdpZHRoOiA1OXZ3O1xyXG4gICAgICAgIC8qIG1hcmdpbi1yaWdodDogMC41cmVtOyAqL1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qIE1lZGlhIHF1ZXJpZXMgKi9cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCApIHtcclxuICAgICAgLmF2YXRhciB7XHJcbiAgICAgICAgLyogZGlzcGxheTogbm9uZTsgKi9cclxuICAgICAgfVxyXG5cclxuICAgICAgLmNvbW1lbnRlciB7XHJcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiBub25lO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBwIHtcclxuICAgICAgICAvKiBvdmVyZmxvdzogc2Nyb2xsOyAqL1xyXG4gICAgICAgIC8qIGhlaWdodDogMTAwcHg7ICovXHJcbiAgICAgICAgLyogd29yZC13cmFwOiBicmVhay13b3JkOyAqL1xyXG4gICAgICAgIHdpZHRoOiA1NXZ3O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuY29udGVudCB7XHJcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2NjBweCkge1xyXG4gICAgICBwIHtcclxuICAgICAgICB3aWR0aDogNjh2dztcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2MTBweCkge1xyXG4gICAgICBzZWN0aW9uI2VkaXQtY29tbWVudCB7XHJcbiAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmNvbnRlbnQge1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMHJlbTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaDMge1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMC42cmVtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDU2MHB4KSB7XHJcbiAgICAgIHAge1xyXG4gICAgICAgIC8qIHdpZHRoOiA0NXZ3OyAqL1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XHJcbiAgICAgIHAge1xyXG4gICAgICAgIHdpZHRoOiA2NXZ3O1xyXG4gICAgICAgIC8qIGZvbnQtc2l6ZTogMC45cmVtOyAqL1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuY29tbWVudCB7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDFyZW07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5hdmF0YXIge1xyXG4gICAgICAgIHRvcDogMzNweDtcclxuICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNDQwcHgpIHtcclxuICAgICAgcCB7XHJcbiAgICAgICAgd2lkdGg6IDYzdnc7XHJcbiAgICAgICAgLyogZm9udC1zaXplOiAwLjlyZW07ICovXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNDIwcHgpIHtcclxuICAgICAgcCB7XHJcbiAgICAgICAgd2lkdGg6IDY5dnc7XHJcbiAgICAgICAgLyogZm9udC1zaXplOiAwLjlyZW07ICovXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogMzYwcHgpIHtcclxuICAgICAgcCB7XHJcbiAgICAgICAgd2lkdGg6IDY1dnc7XHJcbiAgICAgICAgLyogZm9udC1zaXplOiAwLjhyZW07ICovXHJcbiAgICAgICAgLyogbWFyZ2luLWxlZnQ6IDFyZW07ICovXHJcbiAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gIFxyXG4gICAgYH08L3N0eWxlPlxyXG5cclxuICA8Lz5cclxuICApXHJcbn1cclxuXHJcbi8vIENvbW1lbnQuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgY3R4ID0+IHtcclxuLy8gICBnZXRDb21tZW50RGF0YVxyXG4vLyB9XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb21tZW50OyIsImltcG9ydCB7IHVzZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQ29tbWVudCBmcm9tICcuL0NvbW1lbnQnO1xyXG5pbXBvcnQgeyBHbG9iYWxDb250ZXh0IH0gZnJvbSAnLi4vY29udGV4dC9HbG9iYWxDb250ZXh0JztcclxuaW1wb3J0IGNvbG9ycyBmcm9tICcuLi9jc3MtdmFyaWFibGVzL2NvbG9ycyc7XHJcblxyXG5cclxuXHJcblxyXG5jb25zdCBDb21tZW50U2VjdGlvbiA9ICh7IHByb2ZpbGVVc2VyIH0pID0+IHtcclxuXHJcbiAgY29uc3QgeyBhZGRDb21tZW50LCBhdXRoU3RhdGV9ID0gdXNlQ29udGV4dChHbG9iYWxDb250ZXh0KTtcclxuXHJcbiAgY29uc3QgW2NvbnRlbnQsIHNldENvbnRlbnRdID0gdXNlU3RhdGUoJycpO1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgc2V0Q29udGVudChlLnRhcmdldC52YWx1ZSk7XHJcbiAgfVxyXG4gIFxyXG4gIGNvbnN0IGNvbW1lbnRTdWJtaXRIYW5kbGVyID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGFkZENvbW1lbnQoY29udGVudCk7XHJcbiAgICBzZXRDb250ZW50KCcnKTtcclxuICB9XHJcblxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gaWQ9XCJjb21tZW50LXNlY3Rpb25cIj5cclxuICAgICAgPGgyPkNvbW1lbnRzPC9oMj4gXHJcblxyXG4gICAgICA8c2VjdGlvbiBpZD1cImNvbW1lbnRzXCI+XHJcbiAgICAgICAge3Byb2ZpbGVVc2VyLnBsYXlsaXN0Q29tbWVudHMubGVuZ3RoID09PSAwICYmIFxyXG4gICAgICAgICAgPGgzPkJlIHRoZSBmaXJzdCB0byBhZGQgYSBjb21tZW50ITwvaDM+XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB7cHJvZmlsZVVzZXIucGxheWxpc3RDb21tZW50cy5tYXAoY29tbWVudCA9PiAoXHJcbiAgICAgICAgICA8Q29tbWVudCBjb21tZW50PXtjb21tZW50fSBrZXk9e2NvbW1lbnQuX2lkfS8+XHJcbiAgICAgICAgKVxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvc2VjdGlvbj5cclxuXHJcbiAgICAgIHthdXRoU3RhdGUuYXV0aGVudGljYXRlZCA9PT0gdHJ1ZSAmJlxyXG4gICAgICAgIDxzZWN0aW9uIGlkPVwiYWRkLWNvbW1lbnRcIj5cclxuICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXsoZSkgPT4gY29tbWVudFN1Ym1pdEhhbmRsZXIoZSl9PlxyXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImNvbW1lbnQtaW5wdXRcIj5BZGQgYSBjb21tZW50PC9sYWJlbD5cclxuICAgICAgICAgICAgPHRleHRhcmVhIG5hbWU9XCJjb21tZW50LWlucHV0XCIgaWQ9XCJjb21tZW50LWlucHV0XCIgdmFsdWU9e2NvbnRlbnR9IGNvbHM9XCIzMFwiIHJvd3M9XCIzXCIgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0+PC90ZXh0YXJlYT5cclxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+UG9zdDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICBcclxuICAgICAgc2VjdGlvbiNjb21tZW50LXNlY3Rpb24ge1xyXG4gICAgICAgIG1hcmdpbjogM3JlbSAwO1xyXG4gICAgICAgIHBhZGRpbmc6IDNyZW07XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgYmFja2dyb3VuZDogJHtjb2xvcnMuZ3JhZGllbnR9O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBzZWN0aW9uI2NvbW1lbnRzIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBmb3JtIHtcclxuICAgICAgICBtYXJnaW46IDFyZW0gMDtcclxuICAgICAgfVxyXG5cclxuICAgICAgbGFiZWwge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0ZXh0YXJlYSB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMC41cmVtO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGZvbnQ6IGluaGVyaXQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICAgICAgcGFkZGluZzogMC41cmVtO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBidXR0b24ge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICBwYWRkaW5nOiAwLjc1cmVtIDFyZW07XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgIG1hcmdpbjogMC41cmVtIDA7XHJcbiAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZS1pbi1vdXQ7XHJcblxyXG4gICAgICB9XHJcblxyXG4gICAgICBidXR0b246aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8qIE1lZGlhIHF1ZXJpZXMgKi9cclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDExNTBweCApIHtcclxuXHJcbiAgICAgICAgc2VjdGlvbiNjb21tZW50LXNlY3Rpb24ge1xyXG4gICAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2NjBweCApIHtcclxuICAgICAgICBzZWN0aW9uI2NvbW1lbnQtc2VjdGlvbiB7XHJcbiAgICAgICAgICB3aWR0aDogOTUlO1xyXG4gICAgICAgICAgLyogbWFyZ2luOiBhdXRvOyAqL1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDYyMHB4ICkge1xyXG4gICAgICAgIHNlY3Rpb24jY29tbWVudC1zZWN0aW9uIHtcclxuICAgICAgICAgIHdpZHRoOiA5NSU7XHJcbiAgICAgICAgICBwYWRkaW5nOiAycmVtO1xyXG4gICAgICAgICAgLyogbWFyZ2luOiBhdXRvOyAqL1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDM5MHB4ICkge1xyXG4gICAgICAgIHNlY3Rpb24jY29tbWVudC1zZWN0aW9uIHtcclxuICAgICAgICAgIHdpZHRoOiA5NSU7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxLjVyZW07XHJcbiAgICAgICAgICAvKiBtYXJnaW46IGF1dG87ICovXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogMzYwcHggKSB7XHJcbiAgICAgICAgc2VjdGlvbiNjb21tZW50LXNlY3Rpb24ge1xyXG4gICAgICAgICAgLyogd2lkdGg6IDk1JTsgKi9cclxuICAgICAgICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICAgICAgICAvKiBtYXJnaW46IGF1dG87ICovXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICBcclxuICAgIGB9PC9zdHlsZT5cclxuXHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb21tZW50U2VjdGlvbjsiLCJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlQ29udGV4dCwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBHbG9iYWxDb250ZXh0IH0gZnJvbSAnLi4vY29udGV4dC9HbG9iYWxDb250ZXh0JztcclxuaW1wb3J0IGNvbG9ycyBmcm9tICcuLi9jc3MtdmFyaWFibGVzL2NvbG9ycyc7XHJcblxyXG5cclxuXHJcbmNvbnN0IEZhdm91cml0ZUl0ZW0gPSAoe2lkfSkgPT4ge1xyXG5cclxuXHJcbiAgY29uc3QgeyBnZXRGYXZvdXJpdGVVc2VyLCBmZXRjaFByb2ZpbGVVc2VyLCByZW1vdmVGYXZvdXJpdGUsIGN1cnJlbnRVc2VyLCBwcm9maWxlVXNlciwgYXV0aFN0YXRlIH0gPSB1c2VDb250ZXh0KEdsb2JhbENvbnRleHQpO1xyXG4gIFxyXG4gIGNvbnN0IFtmYXZVc2VyLCBzZXRGYXZVc2VyXSA9IHVzZVN0YXRlKHt9KTtcclxuXHJcbiAgY29uc3QgZmF2VXNlckNsaWNrSGFuZGxlciA9ICgpID0+IHtcclxuICAgIGZldGNoUHJvZmlsZVVzZXIoaWQsIGZhbHNlKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHJlbW92ZUZhdkhhbmRsZXIgPSAoKSA9PiB7XHJcbiAgICByZW1vdmVGYXZvdXJpdGUoaWQpO1xyXG4gIH1cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgY29uc3QgdXNlckRhdGEgPSBhd2FpdCBnZXRGYXZvdXJpdGVVc2VyKGlkKTtcclxuICAgICAgc2V0RmF2VXNlcih7XHJcbiAgICAgICAgZmlyc3ROYW1lOiB1c2VyRGF0YS5maXJzdE5hbWUsXHJcbiAgICAgICAgbGFzdE5hbWU6IHVzZXJEYXRhLmxhc3ROYW1lLFxyXG4gICAgICAgIHByb2ZpbGVQaG90b0ZpbGVuYW1lOiB1c2VyRGF0YS5wcm9maWxlUGhvdG9GaWxlbmFtZSxcclxuICAgICAgICBpZFxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gICAgZmV0Y2hEYXRhKCk7XHJcbiAgfSwgW2lkXSlcclxuICBcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgaWQ9XCJmYXZvdXJpdGUtaXRlbVwiPlxyXG4gICAgICB7LyogPGg0PkF2YXRhcjwvaDQ+ICovfVxyXG4gICAgICA8ZGl2IGlkPVwiYXZhdGFyXCI+XHJcbiAgICAgICAge2ZhdlVzZXIucHJvZmlsZVBob3RvRmlsZW5hbWUgPT09IG51bGwgJiZcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNyb3BcIj5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvZmlsZS9bdXNlcklkXVwiIGFzPXtgL3Byb2ZpbGUvJHtpZH1gfT5cclxuICAgICAgICAgICAgPGEgb25DbGljaz17ZmF2VXNlckNsaWNrSGFuZGxlcn0+XHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9XCIvZGVmYXVsdC1hdmF0YXIuanBnXCIgYWx0PVwiYXZhdGFyXCIgLz5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgICAgIH0gXHJcblxyXG4gICAgICAgIHtmYXZVc2VyLnByb2ZpbGVQaG90b0ZpbGVuYW1lICE9PSBudWxsICYmIGZhdlVzZXIucHJvZmlsZVBob3RvRmlsZW5hbWUgIT09ICcnICYmIGZhdlVzZXIucHJvZmlsZVBob3RvRmlsZW5hbWUgIT09IHVuZGVmaW5lZCAmJlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3JvcFwiPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9maWxlL1t1c2VySWRdXCIgYXM9e2AvcHJvZmlsZS8ke2lkfWB9PlxyXG4gICAgICAgICAgICA8YSBvbkNsaWNrPXtmYXZVc2VyQ2xpY2tIYW5kbGVyfT5cclxuICAgICAgICAgICAgICA8aW1nIHNyYz17YGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9pbWFnZS8ke2ZhdlVzZXIucHJvZmlsZVBob3RvRmlsZW5hbWV9YH0gYWx0PVwiYXZhdGFyXCIgLz5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIH1cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8TGluayBocmVmPVwiL3Byb2ZpbGUvW3VzZXJJZF1cIiBhcz17YC9wcm9maWxlLyR7aWR9YH0+XHJcbiAgICAgICAgPGEgb25DbGljaz17ZmF2VXNlckNsaWNrSGFuZGxlcn0+PGgzPntmYXZVc2VyLmZpcnN0TmFtZX0ge2ZhdlVzZXIubGFzdE5hbWV9PC9oMz48L2E+XHJcbiAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgIFxyXG4gICAgICB7IGF1dGhTdGF0ZS5hdXRoZW50aWNhdGVkID09PSB0cnVlICYmIGN1cnJlbnRVc2VyLmlkID09PSBwcm9maWxlVXNlci5pZCAmJlxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17cmVtb3ZlRmF2SGFuZGxlcn0+XHJcbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS10aW1lcy1jaXJjbGVcIj48L2k+XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIFxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgIFxyXG4gICAgICAgICNmYXZvdXJpdGUtaXRlbSB7XHJcbiAgICAgICAgICBtYXJnaW46IDAgMXJlbTtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgIHBhZGRpbmc6IDJyZW07XHJcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAke2NvbG9ycy5wcmltYXJ5fTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jcm9wIHtcclxuICAgICAgICAgIG1heC1oZWlnaHQ6IDEwMHB4O1xyXG4gICAgICAgICAgbWF4LXdpZHRoOiAxMDBweDtcclxuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG8gMC44cmVtIGF1dG87XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhIHtcclxuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICB3aWR0aDogNDBweDtcclxuICAgICAgICAgIGhlaWdodDogOHB4O1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgdG9wOiAwcHg7XHJcbiAgICAgICAgICByaWdodDogOHB4O1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgICAgICAgIGNvbG9yOiAke2NvbG9ycy5wcmltYXJ5fTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGkge1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgMC4ycyBlYXNlLWluLW91dDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgaTpob3ZlciB7XHJcbiAgICAgICAgICBjb2xvcjogI2U1MzA1YTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGgzIHtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2OTBweCApIHtcclxuICAgICAgICAgICNmYXZvdXJpdGUtaXRlbSB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCAxcmVtO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0NTBweCApIHtcclxuICAgICAgICAgIC5jcm9wIHtcclxuICAgICAgICAgICAgd2lkdGg6IDgwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogODBweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICB3aWR0aDogODBweDtcclxuICAgICAgICAgICAgLyogcGFkZGluZy10b3A6IDFyZW07ICovXHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgI2F2YXRhciB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIFxyXG4gICAgICBgfTwvc3R5bGU+XHJcblxyXG5cclxuXHJcblxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGYXZvdXJpdGVJdGVtOyIsImltcG9ydCBGYXZvdXJpdGVJdGVtIGZyb20gJy4vRmF2b3VyaXRlSXRlbSc7XHJcbmltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgR2xvYmFsQ29udGV4dCB9IGZyb20gJy4uL2NvbnRleHQvR2xvYmFsQ29udGV4dCc7XHJcbmltcG9ydCBjb2xvcnMgZnJvbSAnLi4vY3NzLXZhcmlhYmxlcy9jb2xvcnMnXHJcblxyXG5jb25zdCBGYXZvdXJpdGVzID0gKCkgPT4ge1xyXG5cclxuICBjb25zdCB7IHByb2ZpbGVVc2VyIH0gPSB1c2VDb250ZXh0KEdsb2JhbENvbnRleHQpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gaWQ9XCJmYXZvdXJpdGVzXCI+XHJcbiAgICAgIDxoMj48aSBjbGFzc05hbWU9XCJmYSBmYS1zdGFyXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPkZhdm91cml0ZXMgPC9oMj5cclxuXHJcbiAgICAgIDxkaXYgaWQ9XCJmYXZvdXJpdGUtaXRlbXNcIj5cclxuICAgICAgICB7cHJvZmlsZVVzZXIuZmF2b3VyaXRlcy5tYXAoZmF2b3VyaXRlID0+IChcclxuICAgICAgICAgIDxGYXZvdXJpdGVJdGVtIGlkPXtmYXZvdXJpdGV9IGtleT17ZmF2b3VyaXRlfS8+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAge3Byb2ZpbGVVc2VyLmZhdm91cml0ZXMubGVuZ3RoID09PSAwICYmIFxyXG4gICAgICAgIDxoMz5cclxuICAgICAgICAgIE5vIGZhdm91cml0ZSB1c2VycyBoYXZlIGJlZW4gYWRkZWQuXHJcbiAgICAgICAgPC9oMz5cclxuICAgICAgfVxyXG5cclxuXHJcblxyXG4gIDxzdHlsZSBqc3g+e2BcclxuICBcclxuICAgIHNlY3Rpb24jZmF2b3VyaXRlcyB7XHJcbiAgICAgIHBhZGRpbmc6IDNyZW07XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICR7Y29sb3JzLnByaW1hcnl9O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbiAgICB9XHJcblxyXG4gICAgaS5mYS1zdGFyIHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAwLjc1cmVtO1xyXG4gICAgICBjb2xvcjogJHtjb2xvcnMuc2Vjb25kYXJ5fTtcclxuICAgICAgZm9udC1zaXplOiAxLjRyZW07XHJcbiAgICAgIC8qIGhlaWdodDogNTBweDsgKi9cclxuICAgIH1cclxuXHJcbiAgICAjZmF2b3VyaXRlLWl0ZW1zIHtcclxuICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgZ3JpZC1hdXRvLWZsb3c6IHJvdztcclxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNSwgMWZyKTtcclxuICAgICAgcGFkZGluZzogMXJlbTtcclxuICAgICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICAgICAgZ3JpZC1yb3ctZ2FwOiAycmVtO1xyXG4gICAgfVxyXG5cclxuICAgIGgzIHtcclxuICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgLyogdGV4dC1hbGlnbjogY2VudGVyOyAqL1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgLyogTWVkaWEgcXVlcmllcyAqL1xyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDExNTBweCApIHtcclxuICAgICAgI2Zhdm91cml0ZS1pdGVtcyB7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgc2VjdGlvbiNmYXZvdXJpdGVzIHtcclxuICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgIG1hcmdpbjogM3JlbSBhdXRvO1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMnJlbTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5MzBweCApIHtcclxuICAgICAgI2Zhdm91cml0ZS1pdGVtcyB7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCApIHtcclxuICAgICAgc2VjdGlvbiNmYXZvdXJpdGVzIHtcclxuICAgICAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4ICkge1xyXG4gICAgICAjZmF2b3VyaXRlLWl0ZW1zIHtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxLCAxZnIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDM3MHB4ICkge1xyXG4gICAgICBzZWN0aW9uI2Zhdm91cml0ZXMge1xyXG4gICAgICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICBcclxuICBgfTwvc3R5bGU+XHJcblxyXG4gICAgPC9zZWN0aW9uPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmF2b3VyaXRlcztcclxuIiwiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUNvbnRleHR9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBHbG9iYWxDb250ZXh0IH0gZnJvbSAnLi4vY29udGV4dC9HbG9iYWxDb250ZXh0JztcclxuaW1wb3J0IGNvbG9ycyBmcm9tICcuLi9jc3MtdmFyaWFibGVzL2NvbG9ycyc7XHJcblxyXG5cclxuY29uc3QgRmlsZVVwbG9hZCA9ICh7c2V0RWRpdE1vZGV9KSA9PiB7XHJcblxyXG4gIGNvbnN0IFtmaWxlLCBzZXRGaWxlXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbZmlsZW5hbWUsIHNldEZpbGVuYW1lXSA9IHVzZVN0YXRlKCdVcGxvYWQgcGhvdG8gLSBtYXggc2l6ZSA3MCBLQicpO1xyXG5cclxuICBjb25zdCB7IHVwbG9hZEZpbGUgfSA9IHVzZUNvbnRleHQoR2xvYmFsQ29udGV4dCk7XHJcblxyXG4gIGNvbnN0IHVwbG9hZEZpbGVIYW5kbGVyID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAvLyBDaGVjayBmb3IgbWF4IHNpemVcclxuICAgIGlmIChmaWxlLnNpemUgPiA3MDAwMCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgIGZvcm1EYXRhLmFwcGVuZCgnZmlsZScsIGZpbGUpO1xyXG5cclxuICAgIHVwbG9hZEZpbGUoZm9ybURhdGEpO1xyXG4gICAgc2V0RWRpdE1vZGUoZmFsc2UpO1xyXG4gIH1cclxuXHJcbiAgY29uc3Qgb25DaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgc2V0RmlsZShlLnRhcmdldC5maWxlc1swXSk7XHJcbiAgICBzZXRGaWxlbmFtZShlLnRhcmdldC5maWxlc1swXS5uYW1lKTtcclxuICB9XHJcblxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBpZD1cImZpbGUtdXBsb2FkXCI+XHJcbiAgICAgIDxoMj5VcGxvYWQgYSBwcm9maWxlIHBob3RvOjwvaDI+XHJcbiAgICAgIDxmb3JtIG9uU3VibWl0PXsoZSkgPT4gdXBsb2FkRmlsZUhhbmRsZXIoZSl9PlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIG5hbWU9XCJmaWxlXCIgaWQ9XCJmaWxlXCIgY2xhc3NOYW1lPVwiY3VzdG9tLWZpbGUtaW5wdXRcIiBvbkNoYW5nZT17b25DaGFuZ2V9IC8+XHJcbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJmaWxlXCIgY2xhc3NOYW1lPVwiY3VzdG9tLWZpbGUtbGFiZWxcIj5cclxuICAgICAgICAgIHtmaWxlbmFtZX1cclxuICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiVXBsb2FkXCI+VXBsb2FkPC9idXR0b24+XHJcbiAgICAgIDwvZm9ybT5cclxuXHJcblxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgIFxyXG4gICAgICAgICNmaWxlLXVwbG9hZCB7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAzcmVtO1xyXG4gICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICR7Y29sb3JzLnByaW1hcnl9O1xyXG4gICAgICAgICAgcGFkZGluZy10b3A6IDJyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAjZmlsZS11cGxvYWQgaDIge1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAgIGZvcm0ge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpbnB1dFt0eXBlPVwiZmlsZVwiXSB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpbnB1dCNmaWxlLXVwbG9hZC1idXR0b24ge1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgcGFkZGluZzogMXJlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxhYmVsIHtcclxuICAgICAgICAgIG1hcmdpbjogMC41cmVtIDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgd2lkdGg6IDgzcHg7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICBtYXJnaW46IDFyZW0gMDsgXHJcbiAgICAgICAgfVxyXG4gICAgICBcclxuICAgICAgYH08L3N0eWxlPlxyXG5cclxuICAgIDwvZGl2PiBcclxuXHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGaWxlVXBsb2FkO1xyXG4iLCJpbXBvcnQgY29sb3JzIGZyb20gJy4uL2Nzcy12YXJpYWJsZXMvY29sb3JzJztcclxuXHJcbmNvbnN0IEZvb3RlciA9ICgpID0+IHtcclxuXHJcbiAgY29uc3QgeWVhciA9IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxmb290ZXIgaWQ9XCJtYWluLWZvb3RlclwiPlxyXG4gICAgICA8aDQ+Q09ERVRVTkVTPC9oND5cclxuICAgICAgPGg0PiZjb3B5OyB7eWVhcn08L2g0PlxyXG5cclxuICAgIDxzdHlsZSBqc3g+e2BcclxuXHJcbiAgICAgIGZvb3RlciB7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBwYWRkaW5nOiAxLjJyZW07XHJcbiAgICAgICAgLyogbWFyZ2luLXRvcDogMnJlbTsgKi9cclxuICAgICAgICBiYWNrZ3JvdW5kOiAke2NvbG9ycy5yZXZlcnNlR3JhZGllbnR9O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBoNCB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgfVxyXG4gICAgXHJcbiAgICBcclxuICAgIGB9PC9zdHlsZT5cclxuXHJcblxyXG5cclxuICAgIDwvZm9vdGVyPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyO1xyXG4iLCJpbXBvcnQgVmlkZW9JdGVtIGZyb20gJy4vVmlkZW9JdGVtJztcclxuaW1wb3J0IGNvbG9ycyBmcm9tICcuLi9jc3MtdmFyaWFibGVzL2NvbG9ycydcclxuXHJcblxyXG5jb25zdCBQbGF5TGlzdCA9ICh7cHJvZmlsZVVzZXIgfSkgPT4ge1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gaWQ9XCJwbGF5bGlzdFwiPlxyXG5cclxuICAgICAgPGRpdiBpZD1cInBsYXlsaXN0LWhlYWRlclwiPlxyXG4gICAgICAgIDxoMj5QbGF5bGlzdDwvaDI+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAge3Byb2ZpbGVVc2VyLm93bmVkVmlkZW9zLmxlbmd0aCA9PT0gMCAmJiBcclxuICAgICAgICA8aDM+QWRkIHNvbWUgbXVzaWMgdG8geW91ciBwbGF5bGlzdCE8L2gzPlxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBcclxuICAgICAge3Byb2ZpbGVVc2VyLm93bmVkVmlkZW9zLm1hcCh2aWRlbyA9PiAoXHJcbiAgICAgICAgLy8gPGgzPnt2aWRlby50aXRsZX08L2gzPlxyXG4gICAgICAgIDxWaWRlb0l0ZW0gdmlkZW89e3ZpZGVvfSBtb2RlPVwicGxheWxpc3RcIiBrZXk9e3ZpZGVvLnZpZGVvVVJMfS8+XHJcbiAgICAgIClcclxuICAgICAgKX1cclxuXHJcblxyXG4gICAgPHN0eWxlIGpzeD57YFxyXG5cclxuXHJcbiAgICBcclxuICAgICAgc2VjdGlvbiNwbGF5bGlzdCB7XHJcbiAgICAgICAgbWFyZ2luOiAzcmVtIGF1dG87XHJcbiAgICAgICAgLyogcGFkZGluZzogM3JlbTsgKi9cclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAke2NvbG9ycy5wcmltYXJ5fTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICB3aWR0aDogODQlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAjcGxheWxpc3QtaGVhZGVyIHtcclxuICAgICAgICAvKiBkaXNwbGF5OiBmbGV4OyAqL1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICR7Y29sb3JzLmdyYWRpZW50fTtcclxuICAgICAgICAvKiBtYXJnaW46IDJyZW0gMDsgKi9cclxuICAgICAgICAvKiBoZWlnaHQ6IDEwMCU7ICovXHJcbiAgICAgICAgcGFkZGluZzogMnJlbTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMCAwO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaDMge1xyXG4gICAgICAgIHBhZGRpbmc6IDJyZW07XHJcbiAgICAgIH1cclxuICAgIFxyXG4gICAgYH08L3N0eWxlPlxyXG4gICAgICBcclxuICAgIDwvc2VjdGlvbj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBsYXlMaXN0OyIsImltcG9ydCB7IHVzZUNvbnRleHQsIHVzZVJlZiwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgR2xvYmFsQ29udGV4dCB9IGZyb20gJy4uL2NvbnRleHQvR2xvYmFsQ29udGV4dCc7XHJcbmltcG9ydCBGaWxlVXBsb2FkIGZyb20gJy4vRmlsZVVwbG9hZCc7XHJcbmltcG9ydCBjb2xvcnMgZnJvbSAnLi4vY3NzLXZhcmlhYmxlcy9jb2xvcnMnO1xyXG5pbXBvcnQgeyBtb3Rpb24sIEFuaW1hdGVQcmVzZW5jZSB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xyXG5cclxuXHJcbmNvbnN0IGVkaXRWYXJpYW50cyA9IHtcclxuICBoaWRkZW46IHsgb3BhY2l0eTogMCwgeTogLTUwMCwgekluZGV4OiAtM30sXHJcbiAgdmlzaWJsZTogeyBcclxuICAgIG9wYWNpdHk6IDEsXHJcbiAgICB5OiAwLFxyXG4gICAgekluZGV4OiAtMyxcclxuICAgIHRyYW5zaXRpb246IHtcclxuICAgICAgZHVyYXRpb246IDAuNVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgZXhpdDogeyBvcGFjaXR5OiAwLCB5OiAtNTAwLCB6SW5kZXg6IC0zIH1cclxufVxyXG5cclxuXHJcbmNvbnN0IFByb2ZpbGVFZGl0ID0gKHtzZXRFZGl0TW9kZX0pID0+IHtcclxuXHJcbiAgY29uc3QgeyB1cGRhdGVVc2VyLCBwcm9maWxlVXNlciwgdXBsb2FkUGhvdG8gfSA9IHVzZUNvbnRleHQoR2xvYmFsQ29udGV4dCk7XHJcblxyXG4gIC8vIC8vIEZldGNoIHRoZSB1cGRhdGVkIHByb2ZpbGUgaW5mbyB0byBwcmVmaWxsIGZvcm1cclxuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gIC8vICAgZmV0Y2hQcm9maWxlVXNlcih1c2VySWQsIGZhbHNlKTtcclxuICAvLyB9XHJcblxyXG4gIC8vIFByZWZpbGwgdGhlIGZvcm0gd2l0aCB0aGUgY3VycmVudCBpbmZvXHJcbiAgY29uc3QgWyBwcm9maWxlSW5mbywgc2V0UHJvZmlsZUluZm8gXSA9IHVzZVN0YXRlKHtcclxuICAgIGZpcnN0TmFtZTogcHJvZmlsZVVzZXIuZmlyc3ROYW1lLFxyXG4gICAgbGFzdE5hbWU6IHByb2ZpbGVVc2VyLmxhc3ROYW1lLFxyXG4gICAgam9iVGl0bGU6IHByb2ZpbGVVc2VyLmpvYlRpdGxlLFxyXG4gICAgbG9jYXRpb246IHByb2ZpbGVVc2VyLmxvY2F0aW9uLFxyXG4gICAgbGFuZ3VhZ2VzOiBwcm9maWxlVXNlci5sYW5ndWFnZXMsXHJcbiAgICBhYm91dDogcHJvZmlsZVVzZXIuYWJvdXRcclxuICB9KVxyXG4gIFxyXG4gIFxyXG4gIC8vIENyZWF0ZSByZWZzXHJcbiAgY29uc3QgZmlyc3ROYW1lUmVmID0gdXNlUmVmKCk7XHJcbiAgY29uc3QgbGFzdE5hbWVSZWYgPSB1c2VSZWYoKTtcclxuICBjb25zdCBqb2JUaXRsZVJlZiA9IHVzZVJlZigpO1xyXG4gIGNvbnN0IGxvY2F0aW9uUmVmID0gdXNlUmVmKCk7XHJcbiAgY29uc3QgbGFuZ3VhZ2UxUmVmID0gdXNlUmVmKCk7XHJcbiAgY29uc3QgbGFuZ3VhZ2UyUmVmID0gdXNlUmVmKCk7XHJcbiAgY29uc3QgbGFuZ3VhZ2UzUmVmID0gdXNlUmVmKCk7XHJcbiAgY29uc3QgbGFuZ3VhZ2U0UmVmID0gdXNlUmVmKCk7XHJcbiAgY29uc3QgYWJvdXRSZWYgPSB1c2VSZWYoKTtcclxuXHJcbiAgXHJcbiAgY29uc3QgdXBkYXRlUHJvZmlsZUhhbmRsZXIgPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIC8vIEdldCBjcmVkZW50aWFscyBmcm9tIHJlZnNcclxuICAgIGNvbnN0IGZpcnN0TmFtZSA9IGZpcnN0TmFtZVJlZi5jdXJyZW50LnZhbHVlO1xyXG4gICAgY29uc3QgbGFzdE5hbWUgPSBsYXN0TmFtZVJlZi5jdXJyZW50LnZhbHVlO1xyXG4gICAgY29uc3Qgam9iVGl0bGUgPSBqb2JUaXRsZVJlZi5jdXJyZW50LnZhbHVlO1xyXG4gICAgY29uc3QgbG9jYXRpb24gPSBsb2NhdGlvblJlZi5jdXJyZW50LnZhbHVlO1xyXG4gICAgY29uc3QgbGFuZ3VhZ2UxID0gbGFuZ3VhZ2UxUmVmLmN1cnJlbnQudmFsdWU7XHJcbiAgICBjb25zdCBsYW5ndWFnZTIgPSBsYW5ndWFnZTJSZWYuY3VycmVudC52YWx1ZTtcclxuICAgIGNvbnN0IGxhbmd1YWdlMyA9IGxhbmd1YWdlM1JlZi5jdXJyZW50LnZhbHVlO1xyXG4gICAgY29uc3QgbGFuZ3VhZ2U0ID0gbGFuZ3VhZ2U0UmVmLmN1cnJlbnQudmFsdWU7XHJcbiAgICBjb25zdCBsYW5ndWFnZXMgPSBbbGFuZ3VhZ2UxLCBsYW5ndWFnZTIsIGxhbmd1YWdlMywgbGFuZ3VhZ2U0XVxyXG4gICAgY29uc3QgYWJvdXQgPSBhYm91dFJlZi5jdXJyZW50LnZhbHVlO1xyXG5cclxuICAgIC8vIENoZWNrIGlmIGFueSBuYW1lcyBmaWVsZHMgYXJlIGVtcHR5XHJcbiAgICBpZiAoZmlyc3ROYW1lLnRyaW0oKS5sZW5ndGggPT09IDAgfHwgbGFzdE5hbWUudHJpbSgpLmxlbmd0aCA9PT0gMCApIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIENhbGwgcmVnaXN0ZXIgYWN0aW9uIHRvIHNlbmQgYSBwb3N0IHJlcXVlc3QgdG8gQVBJIGFuZCBjaGFuZ2UgdGhlIGxvY2FsIGFuZCBnbG9iYWwgc3RhdGVcclxuICAgIGF3YWl0IHVwZGF0ZVVzZXIoZmlyc3ROYW1lLCBsYXN0TmFtZSwgam9iVGl0bGUsIGxvY2F0aW9uLCBsYW5ndWFnZXMsIGFib3V0KTtcclxuXHJcbiAgICAvL0Nsb3NlIHRoZSBlZGl0IHByb2ZpbGUgc2VjdGlvbiAtIHNldCBlZGl0IHRvIGZhbHNlIG9uIHByb2ZpbGUgcGFnZVxyXG4gICAgc2V0RWRpdE1vZGUoZmFsc2UpO1xyXG4gICAgXHJcbiAgfVxyXG5cclxuICBjb25zdCBnZXRFeGlzdGluZ0xhbmd1YWdlcyA9ICgpID0+IHtcclxuICAgIGlmIChwcm9maWxlSW5mby5sYW5ndWFnZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICByZXR1cm4gcHJvZmlsZUluZm8ubGFuZ3VhZ2VzO1xyXG4gICAgfVxyXG5cclxuICAgIGVsc2UgcmV0dXJuIFsnJywgJycsICcnLCAnJ11cclxuICB9IFxyXG5cclxuXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8QW5pbWF0ZVByZXNlbmNlPlxyXG4gICAgPG1vdGlvbi5kaXYgdmFyaWFudHM9e2VkaXRWYXJpYW50c30gaW5pdGlhbD0naGlkZGVuJyBhbmltYXRlPSd2aXNpYmxlJyBleGl0PSdleGl0Jz5cclxuICAgICAgPHNlY3Rpb24gaWQ9XCJwcm9maWxlLWVkaXRcIj5cclxuICAgICAgPGRpdiBpZD1cImVkaXQtY29udGFpbmVyXCI+XHJcblxyXG4gICAgICAgIDxkaXYgaWQ9XCJjb2wxXCI+XHJcbiAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17KGUpID0+IHVwZGF0ZVByb2ZpbGVIYW5kbGVyKGUpfSBpZD1cInVwZGF0ZS1mb3JtXCI+XHJcbiAgICAgICAgICA8aDI+VXBkYXRlIFByb2ZpbGUgSW5mbzo8L2gyPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZmlyc3ROYW1lXCI+Rmlyc3QgTmFtZTogPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cImZpcnN0TmFtZVwiIGRlZmF1bHRWYWx1ZT17cHJvZmlsZUluZm8uZmlyc3ROYW1lfSAgcmVmPXtmaXJzdE5hbWVSZWZ9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibGFzdE5hbWVcIj5MYXN0IE5hbWU6PC9sYWJlbD5cclxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cImxhc3ROYW1lXCIgZGVmYXVsdFZhbHVlPXtwcm9maWxlSW5mby5sYXN0TmFtZX0gcmVmPXtsYXN0TmFtZVJlZn0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJKb2JUaXRsZVwiPkpvYiBUaXRsZTo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiam9iVGl0bGVcIiBkZWZhdWx0VmFsdWU9e3Byb2ZpbGVJbmZvLmpvYlRpdGxlfSByZWY9e2pvYlRpdGxlUmVmfSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImxvY2F0aW9uXCI+TG9jYXRpb246PC9sYWJlbD5cclxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cImxvY2F0aW9uXCIgZGVmYXVsdFZhbHVlPXtwcm9maWxlSW5mby5sb2NhdGlvbn0gcmVmPXtsb2NhdGlvblJlZn0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJsYW5ndWFnZXNcIj5cclxuICAgICAgICAgICAgICA8aDQ+TWFpbiBQcm9ncmFtbWluZyBMYW5ndWFnZXMgVXNlZDo8L2g0PlxyXG4gICAgICAgICAgICAgIDxkaXYgaWQ9XCJsYW5ndWFnZS1pbnB1dC1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibGFuZ3VhZ2UxXCIgY2xhc3NOYW1lPVwibGFuZ3VhZ2UtbGFiZWxcIj4xLjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImxhbmd1YWdlLWlucHV0XCIgaWQ9XCJsYW5ndWFnZTFcIiBkZWZhdWx0VmFsdWU9e2dldEV4aXN0aW5nTGFuZ3VhZ2VzKClbMF19IHJlZj17bGFuZ3VhZ2UxUmVmfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibGFuZ3VhZ2UyXCIgY2xhc3NOYW1lPVwibGFuZ3VhZ2UtbGFiZWxcIj4yLjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImxhbmd1YWdlLWlucHV0XCIgaWQ9XCJsYW5ndWFnZTJcIiBkZWZhdWx0VmFsdWU9e2dldEV4aXN0aW5nTGFuZ3VhZ2VzKClbMV19IHJlZj17bGFuZ3VhZ2UyUmVmfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibGFuZ3VhZ2UzXCIgY2xhc3NOYW1lPVwibGFuZ3VhZ2UtbGFiZWxcIj4zLjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImxhbmd1YWdlLWlucHV0XCIgaWQ9XCJsYW5ndWFnZTNcIiBkZWZhdWx0VmFsdWU9e2dldEV4aXN0aW5nTGFuZ3VhZ2VzKClbMl19IHJlZj17bGFuZ3VhZ2UzUmVmfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibGFuZ3VhZ2U0XCIgY2xhc3NOYW1lPVwibGFuZ3VhZ2UtbGFiZWxcIj40LjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImxhbmd1YWdlLWlucHV0XCIgaWQ9XCJsYW5ndWFnZTRcIiBkZWZhdWx0VmFsdWU9e2dldEV4aXN0aW5nTGFuZ3VhZ2VzKClbM119IHJlZj17bGFuZ3VhZ2U0UmVmfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGlkPVwiY29sMlwiPlxyXG4gICAgICAgICAgPGRpdiBpZD1cImFib3V0LWlucHV0XCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiYWJvdXRcIj5BYm91dCBNZTo8L2xhYmVsPlxyXG4gICAgICAgICAgICA8dGV4dGFyZWEgaWQ9XCJhYm91dFwiIGNvbHM9XCIzMFwiIHJvd3M9XCI1XCIgZGVmYXVsdFZhbHVlPXtwcm9maWxlSW5mby5hYm91dH0gcmVmPXthYm91dFJlZn0gZm9ybT1cInVwZGF0ZS1mb3JtXCIvPlxyXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBmb3JtPVwidXBkYXRlLWZvcm1cIj5VcGRhdGUgSW5mbzwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8RmlsZVVwbG9hZCBzZXRFZGl0TW9kZT17c2V0RWRpdE1vZGV9Lz5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgey8qIDxidXR0b24gaWQ9XCJjYW5jZWxcIiBvbkNsaWNrPXsoKSA9PiBzZXRFZGl0TW9kZShmYWxzZSl9PlxyXG4gICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtdGltZXNcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XHJcbiAgICAgICAgPC9idXR0b24+ICovfVxyXG4gICAgICAgIDxkaXYgaWQ9XCJjYW5jZWwtYnRuXCI+XHJcbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS10aW1lcy1jaXJjbGUgZmEtMnhcIiBpZD1cImNhbmNlbFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIG9uQ2xpY2s9eygpID0+IHNldEVkaXRNb2RlKGZhbHNlKX0+PC9pPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgICBcclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDwvc2VjdGlvbj5cclxuXHJcblxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgIFxyXG4gICAgICAgIHNlY3Rpb24ge1xyXG4gICAgICAgICAgLyogcGFkZGluZzogM3JlbTsgKi9cclxuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgICAgICAgICB6LWluZGV4OiAtMztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICNlZGl0LWNvbnRhaW5lciB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgI2NvbDEge1xyXG4gICAgICAgICAgcGFkZGluZzogM3JlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICNjb2wxIGgyIHtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xyXG4gICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgcGFkZGluZzogMTJweCAxNXB4O1xyXG4gICAgICAgICAgbWFyZ2luOiA4cHggMDtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGV4dGFyZWEge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgcGFkZGluZzogMTJweCAxNXB4O1xyXG4gICAgICAgICAgbWFyZ2luOiA4cHggMDtcclxuICAgICAgICAgIGhlaWdodDogMTByZW07XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICBmb250LXNpemU6IGluaGVyaXQ7XHJcbiAgICAgICAgICBmb250OiBpbmhlcml0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgI2xhbmd1YWdlcyB7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgI2xhbmd1YWdlLWlucHV0LWNvbnRhaW5lciB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zIDFmciAxZnI7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaDQge1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMCA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsYWJlbC5sYW5ndWFnZS1sYWJlbCB7XHJcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDAuMjVyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpbnB1dC5sYW5ndWFnZS1pbnB1dCB7XHJcbiAgICAgICAgICB3aWR0aDogOTUlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYnV0dG9uW3R5cGU9J3N1Ym1pdCddIHtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAjY2FuY2VsLWJ0biB7XHJcbiAgICAgICAgICAvKiBjdXJzb3I6IHBvaW50ZXI7ICovXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGkge1xyXG4gICAgICAgICAgbWFyZ2luOiAwLjg1cmVtO1xyXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgI2NvbDIge1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICAgICAgICAgIHBhZGRpbmc6IDQuNnJlbSAwIDAgM3JlbTtcclxuICAgICAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgJHtjb2xvcnMucHJpbWFyeX1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICNhYm91dC1pbnB1dCB7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAycmVtOyAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKiBNZWRpYSBxdWVyaWVzICovXHJcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDExNTBweCkge1xyXG5cclxuICAgICAgICAgICNwcm9maWxlLWVkaXQge1xyXG4gICAgICAgICAgICB3aWR0aDogOTB2dztcclxuICAgICAgICAgICAgbWFyZ2luOiAxcmVtIGF1dG8gMXJlbSBhdXRvO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICNlZGl0LWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAvKiB0ZXh0YXJlYSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA5NSU7XHJcbiAgICAgICAgICB9ICovXHJcblxyXG4gICAgICAgICAgI2NvbDEge1xyXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAjY2FuY2VsIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3A6IDVweDtcclxuICAgICAgICAgICAgcmlnaHQ6IDVweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAjY29sMiB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgM3JlbSAzcmVtIDNyZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzc4cHgpIHtcclxuICAgICAgICAgICNsYW5ndWFnZS1pbnB1dC1jb250YWluZXIge1xyXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxLCAxZnIpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ0MHB4KSB7XHJcbiAgICAgICAgICAjbGFuZ3VhZ2UtaW5wdXQtY29udGFpbmVyIGxhYmVse1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICNjb2wxIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMnJlbSAycmVtIDFyZW0gMnJlbTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAjY29sMiB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMnJlbSAzcmVtIDJyZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogMzYwcHgpIHtcclxuICAgICAgICAgICNjYW5jZWwge1xyXG4gICAgICAgICAgICB0b3A6IC01cHg7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAtNXB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIGB9PC9zdHlsZT5cclxuXHJcbiAgICA8L21vdGlvbi5kaXY+XHJcbiAgICA8L0FuaW1hdGVQcmVzZW5jZT5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2ZpbGVFZGl0OyIsImltcG9ydCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEdsb2JhbENvbnRleHQgfSBmcm9tICcuLi9jb250ZXh0L0dsb2JhbENvbnRleHQnO1xyXG5pbXBvcnQgY29sb3JzIGZyb20gJy4uL2Nzcy12YXJpYWJsZXMvY29sb3JzJztcclxuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XHJcblxyXG5jb25zdCBwcm9maWxlSW5mb1ZhcmlhbnRzID0ge1xyXG4gIC8vIGhpZGRlbjogeyBvcGFjaXR5OiAwLCBwb3NpdGlvbjogJ3JlbGF0aXZlJ30sXHJcbiAgLy8gdmlzaWJsZTogeyBcclxuICAvLyAgIG9wYWNpdHk6IDEsXHJcbiAgLy8gICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAvLyAgIHRyYW5zaXRpb246IHtcclxuICAvLyAgICAgZHVyYXRpb246IDEuNVxyXG4gIC8vICAgfVxyXG4gIC8vIH1cclxufVxyXG5cclxuLy8gY29uc3QgaW5mb1ZhcmlhbnRzID0ge1xyXG4vLyAgIGhpZGRlbjogeyBvcGFjaXR5OiAwLCBtYXJnaW46IGF1dG8gfSxcclxuLy8gICB2aXNpYmxlOiB7XHJcbi8vICAgICBvcGFjaXR5OiAxLFxyXG4vLyAgICAgdHJhbnNpdGlvbjoge1xyXG4vLyAgICAgICBkdXJhdGlvbjogMS41LFxyXG4vLyAgICAgICBkZWxheTogMVxyXG4vLyAgICAgfVxyXG4vLyAgIH1cclxuLy8gfVxyXG5cclxuY29uc3QgUHJvZmlsZUluZm8gPSAoeyBzZXRFZGl0TW9kZSwgZWRpdE1vZGUgfSkgPT4ge1xyXG5cclxuICBjb25zdCB7IGF1dGhTdGF0ZSwgY3VycmVudFVzZXIsIHByb2ZpbGVVc2VyLCBmZXRjaFByb2ZpbGVVc2VyLCBjbGVhclByb2ZpbGVVc2VyLCBhZGRGYXZvdXJpdGUsIHJlbW92ZUZhdm91cml0ZSB9ID0gdXNlQ29udGV4dChHbG9iYWxDb250ZXh0KTtcclxuXHJcbiAgY29uc3QgW2lzRmF2b3VyaXRlLCBzZXRJc0Zhdm91cml0ZV0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgY29uc3QgYWRkRmF2b3VyaXRlSGFuZGxlciA9ICgpID0+IHtcclxuICAgIGFkZEZhdm91cml0ZShwcm9maWxlVXNlci5pZCk7XHJcbiAgfVxyXG5cclxuICBjb25zdCByZW1vdmVGYXZvdXJpdGVIYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgcmVtb3ZlRmF2b3VyaXRlKHByb2ZpbGVVc2VyLmlkKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGdldExhbmd1YWdlU3RyaW5nID0gKCkgPT4ge1xyXG4gICAgY29uc3QgbGFuZ3VhZ2VzID0gcHJvZmlsZVVzZXIubGFuZ3VhZ2VzO1xyXG4gICAgbGV0IGxhbmd1YWdlU3RyaW5nID0gJyc7XHJcblxyXG4gICAgaWYgKHByb2ZpbGVVc2VyLmxhbmd1YWdlcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgcmV0dXJuIGxhbmd1YWdlU3RyaW5nO1xyXG4gICAgfVxyXG5cclxuICAgIGVsc2Uge1xyXG4gICAgICBsYW5ndWFnZXMubWFwKChsYW5ndWFnZSwgaW5kZXgpID0+IHtcclxuICAgICAgICBpZiAobGFuZ3VhZ2UgIT09ICcnKSB7XHJcbiAgICAgICAgICBsYW5ndWFnZVN0cmluZyArPSBsYW5ndWFnZTtcclxuICAgICAgICAgIGlmIChsYW5ndWFnZXNbaW5kZXggKyAxXSAhPT0gJycgJiYgaW5kZXggKyAxICE9PSBsYW5ndWFnZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGxhbmd1YWdlU3RyaW5nICs9ICcgJyArICcvJyArICcgJztcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIHJldHVybiBsYW5ndWFnZVN0cmluZztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8bW90aW9uLmRpdiB2YXJpYW50cz17cHJvZmlsZUluZm9WYXJpYW50c30gaW5pdGlhbD0naGlkZGVuJyBhbmltYXRlPSd2aXNpYmxlJz5cclxuICAgICAgPHNlY3Rpb24gaWQ9XCJ1c2VyXCI+XHJcbiAgICAgICAgPGRpdiBpZD1cInByb2ZpbGUtcGhvdG9cIj5cclxuICAgICAgICAgIHtwcm9maWxlVXNlci5wcm9maWxlUGhvdG9GaWxlbmFtZSAhPT0gbnVsbCAmJiBwcm9maWxlVXNlci5wcm9maWxlUGhvdG9GaWxlbmFtZSAhPT0gJycgJiZcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjcm9wXCI+XHJcbiAgICAgICAgICAgICAgey8qIDxpbWcgc3JjPXtgaHR0cDovL2xvY2FsaG9zdDo1MDAwL2ltYWdlLyR7cHJvZmlsZVVzZXIucHJvZmlsZVBob3RvRmlsZW5hbWV9YH0gYWx0PVwicHJvZmlsZS1waG90b1wiIC8+ICovfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHsocHJvZmlsZVVzZXIucHJvZmlsZVBob3RvRmlsZW5hbWUgPT09IG51bGwgfHwgcHJvZmlsZVVzZXIucHJvZmlsZVBob3RvRmlsZW5hbWUgPT09ICcnKSAmJlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNyb3BcIj5cclxuICAgICAgICAgICAgICA8aW1nIHNyYz0nL2RlZmF1bHQtYXZhdGFyLmpwZycgYWx0PVwicHJvZmlsZS1waG90b1wiIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGlkPVwidXNlci1pbmZvXCI+XHJcbiAgICAgICAgICA8ZGl2IGlkPVwiaW5mb1wiPlxyXG4gICAgICAgICAgICA8aDE+e3Byb2ZpbGVVc2VyLmZpcnN0TmFtZX0ge3Byb2ZpbGVVc2VyLmxhc3ROYW1lfTwvaDE+XHJcbiAgICAgICAgICAgIDxoMj5Kb2IgVGl0bGU6ICZuYnNwOyB7cHJvZmlsZVVzZXIuam9iVGl0bGV9PC9oMj5cclxuICAgICAgICAgICAgPGgyPkxvY2F0aW9uOiAmbmJzcDsge3Byb2ZpbGVVc2VyLmxvY2F0aW9ufTwvaDI+XHJcbiAgICAgICAgICAgIDxoMj5MYW5ndWFnZXM6ICZuYnNwOyB7Z2V0TGFuZ3VhZ2VTdHJpbmcoKX08L2gyPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBpZD1cImJ1dHRvbnNcIj5cclxuICAgICAgICAgICAge3Byb2ZpbGVVc2VyLmlkID09PSBjdXJyZW50VXNlci5pZCAmJlxyXG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWNvZyBmYS0yeFwiIGlkPVwicHJvZmlsZS1lZGl0LWNvZ1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIG9uQ2xpY2s9eygpID0+IHNldEVkaXRNb2RlKCFlZGl0TW9kZSl9PjwvaT5cclxuICAgICAgICAgICAgICAvLyA8YnV0dG9uIGlkPVwicHJvZmlsZS1lZGl0LWJ0blwiIG9uQ2xpY2s9e3Nob3dQcm9maWxlRWRpdFNlY3Rpb259PjxpIGNsYXNzTmFtZT1cImZhIGZhLWNvZ1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT48L2J1dHRvbj5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB7cHJvZmlsZVVzZXIuaWQgIT09IGN1cnJlbnRVc2VyLmlkICYmICEoY3VycmVudFVzZXIuZmF2b3VyaXRlcy5pbmNsdWRlcyhwcm9maWxlVXNlci5pZCkpICYmIGF1dGhTdGF0ZS5hdXRoZW50aWNhdGVkID09PSB0cnVlICYmXHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cImFkZC1mYXZvdXJpdGVcIiBvbkNsaWNrPXthZGRGYXZvdXJpdGVIYW5kbGVyfT5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXN0YXItbyBmYS0yeCBmYXZvdXJpdGVcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAge2N1cnJlbnRVc2VyLmZhdm91cml0ZXMuaW5jbHVkZXMocHJvZmlsZVVzZXIuaWQpICYmXHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cInJlbW92ZS1mYXZvdXJpdGVcIiBvbkNsaWNrPXtyZW1vdmVGYXZvdXJpdGVIYW5kbGVyfT5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXN0YXIgZmEtMnggZmF2b3VyaXRlXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9zZWN0aW9uPlxyXG5cclxuXHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuXHJcbiAgICAgIHNlY3Rpb24ge1xyXG4gICAgICAgIC8qIHBhZGRpbmc6IDNyZW07ICovXHJcbiAgICAgICAgLyogYm9yZGVyOiAxcHggc29saWQgd2hpdGU7ICovXHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgICAgIC8qIHotaW5kZXg6IDI7ICovXHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgICN1c2VyIHtcclxuICAgICAgICBtYXJnaW46IDJyZW0gMDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAvKiBiYWNrZ3JvdW5kOiAjRkY0MTZDOyAqL1xyXG4gICAgICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjRkY0QjJCLCAjRkY0MTZDKTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNGRjRCMkIsICNGRjQxNkMpO1xyXG4gICAgICAgIC8qIGJveC1zaGFkb3c6IDAgMTRweCAyOHB4IHJnYmEoMCwwLDAsMC4yNSksIFxyXG4gICAgICAgICAgMCAxMHB4IDEwcHggcmdiYSgwLDAsMCwwLjIyKTsgKi9cclxuICAgICAgfVxyXG5cclxuICAgICAgI3VzZXIgaDEge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogM3JlbTtcclxuICAgICAgICBtYXJnaW46IDFyZW0gMCA0cmVtIDA7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDNyZW07XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgICN1c2VyIGgyIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAjcHJvZmlsZS1waG90byB7XHJcbiAgICAgICAgd2lkdGg6IDMzJTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgICBwYWRkaW5nOiAzLjVyZW0gM3JlbSAzcmVtIDNyZW07XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiBub25lO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHggMCAwIDEwcHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICN1c2VyLWluZm8ge1xyXG4gICAgICAgIC8qIGhlaWdodDogMTAwJTsgKi9cclxuICAgICAgICB3aWR0aDogNjElO1xyXG4gICAgICAgIHBhZGRpbmc6IDNyZW07XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGkjcHJvZmlsZS1lZGl0LWNvZyB7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAycztcclxuICAgICAgfVxyXG5cclxuICAgICAgaSNwcm9maWxlLWVkaXQtY29nOmhvdmVyIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBidXR0b24jYWRkLWZhdm91cml0ZSwgYnV0dG9uI3JlbW92ZS1mYXZvdXJpdGUge1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJHtjb2xvcnMudGVydGlhcnl9O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICBwYWRkaW5nOiAwLjdyZW07XHJcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICB3aWR0aDogNTBweDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLyogaGVpZ2h0OiAxMCU7ICovXHJcbiAgICAgIH1cclxuXHJcbiAgICAgICNwbGF5bGlzdCB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNHJlbTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmNyb3Age1xyXG4gICAgICAgIHdpZHRoOiAyNjZweDtcclxuICAgICAgICBoZWlnaHQ6IDI2NnB4O1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIC8qIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2ltYWdlLyR7cHJvZmlsZVVzZXIucHJvZmlsZVBob3RvRmlsZW5hbWV9Jyk7ICovXHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvaW1hZ2UvJHtwcm9maWxlVXNlci5wcm9maWxlUGhvdG9GaWxlbmFtZX0nKTtcclxuICAgICAgICAvKiBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7ICovXHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgaW1nIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGkuZmF2b3VyaXRlIHtcclxuICAgICAgICBjb2xvcjogJHtjb2xvcnMuc2Vjb25kYXJ5fTtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiA5cHg7XHJcbiAgICAgICAgbGVmdDogOS42cHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8qIE1lZGlhIHF1ZXJpZXMgKi9cclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDExNTBweCApIHtcclxuICAgICAgICAjdXNlciB7XHJcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgICAgICAgIHdpZHRoOiA3NSU7XHJcbiAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAjcHJvZmlsZS1waG90byB7XHJcbiAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICB3aWR0aDogNjElO1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jcm9wIHtcclxuICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgIC8qIHdpZHRoOiA4MCU7ICovXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAjdXNlci1pbmZvIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjRkY0QjJCLCAjRkY0MTZDKTtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI0ZGNEIyQiwgI0ZGNDE2Qyk7XHJcbiAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgIHBhZGRpbmc6IDIuNXJlbTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xyXG4gICAgICAgICNwcm9maWxlLXBob3RvIHtcclxuICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICBtYXJnaW46IDMuNXJlbSBhdXRvIDNyZW0gYXV0bztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgICN1c2VyLWluZm8ge1xyXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgLyogcGFkZGluZzogMDsgKi9cclxuICAgICAgICAgIC8qIHRleHQtYWxpZ246IGNlbnRlcjsgKi9cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICNpbmZvIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaDEge1xyXG4gICAgICAgICAgLyogdGV4dC1hbGlnbjogY2VudGVyOyAqL1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAjYnV0dG9ucyB7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICByaWdodDogMjFweDtcclxuICAgICAgICAgIHRvcDogMjFweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICB9XHJcblxyXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNTgwcHggKSB7XHJcbiAgICAgICAgI3VzZXIge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICN1c2VyIGgxIHtcclxuICAgICAgICAgIG1hcmdpbjogMnJlbSAwIDNyZW0gMDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMi41cmVtIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaDIge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNDcwcHggKSB7XHJcblxyXG4gICAgICAgICNidXR0b25zIHtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIHJpZ2h0OiAxNHB4O1xyXG4gICAgICAgICAgdG9wOiAxNHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgI3VzZXItaW5mbyBoMSB7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgfSBcclxuXHJcbiAgICAgICAgI3VzZXItaW5mbyB7XHJcbiAgICAgICAgICBwYWRkaW5nOiAycmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAjdXNlciBoMSB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtOyBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGgyIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ0NXB4ICkge1xyXG4gICAgICAgICNwcm9maWxlLXBob3RvIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNyb3Age1xyXG4gICAgICAgICAgbWF4LXdpZHRoOiAyMDBweDtcclxuICAgICAgICAgIG1heC1oZWlnaHQ6IDIwMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDM3MHB4ICkge1xyXG5cclxuICAgICAgICBpLmZhdm91cml0ZSB7XHJcbiAgICAgICAgICB0b3A6IDQuN3B4O1xyXG4gICAgICAgICAgbGVmdDogNS43cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuZmEtc3RhciAuZmEtMngsIC5mYS1zdGFyLW8gPGRpdiBjbGFzc05hbWU9XCJmYS0yeFwiPjwvZGl2PiB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEuNGVtXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBidXR0b24jcmVtb3ZlLWZhdm91cml0ZSB7XHJcbiAgICAgICAgICBoZWlnaHQ6IDQxcHg7XHJcbiAgICAgICAgICB3aWR0aDogNDFweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICB9XHJcblxyXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogMzIwcHggKSB7XHJcbiAgICAgICAgI3VzZXIgaDEge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAyLjJyZW07XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgQG1lZGlhIChtYXgtaGVpZ2h0OiA4MjBweCApIHtcclxuICAgICAgICAjcHJvZmlsZS1waG90byB7XHJcbiAgICAgICAgICBtYXJnaW46IDJyZW0gYXV0bztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIEBtZWRpYSAobWF4LWhlaWdodDogNzcwcHggKSB7XHJcbiAgICAgICAgI3Byb2ZpbGUtcGhvdG8ge1xyXG4gICAgICAgICAgbWFyZ2luOiAycmVtIGF1dG87XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICBcclxuICAgIGB9PC9zdHlsZT5cclxuXHJcbiAgICA8L21vdGlvbi5kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9maWxlSW5mbztcclxuIiwiaW1wb3J0IHsgdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IFNlYXJjaGJhciA9ICh7IHBsYWNlaG9sZGVyLCBzdWJtaXRIYW5kbGVyIH0pID0+IHtcclxuXHJcbiAgY29uc3QgW3NlYXJjaElucHV0LCBzZXRTZWFyY2hJbnB1dF0gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG5cclxuICBjb25zdCBvbkNoYW5nZUhhbmRsZXIgPSAoZSkgPT4ge1xyXG4gICAgc2V0U2VhcmNoSW5wdXQoZS50YXJnZXQudmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgY29uc3Qgb25Gb3JtU3VibWl0ID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAvLyBDYWxsIHRoZSByZWxldmFudCBzdWJtaXQgaGFuZGxlciBmcm9tIHByb3BzXHJcbiAgICBzdWJtaXRIYW5kbGVyKHNlYXJjaElucHV0KTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGlkPVwibWFpbi1zZWFyY2hiYXJcIj5cclxuICAgICAgPGZvcm0gb25TdWJtaXQ9e29uRm9ybVN1Ym1pdH0+XHJcbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJzZWFyY2gtaW5wdXRcIj5cclxuICAgICAgICAgIDxzdmcgaWQ9XCJzZWFyY2gtaWNvblwiIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHdpZHRoPVwiMjRcIj48cGF0aCBkPVwiTTE1LjUgMTRoLS43OWwtLjI4LS4yN0MxNS40MSAxMi41OSAxNiAxMS4xMSAxNiA5LjUgMTYgNS45MSAxMy4wOSAzIDkuNSAzUzMgNS45MSAzIDkuNSA1LjkxIDE2IDkuNSAxNmMxLjYxIDAgMy4wOS0uNTkgNC4yMy0xLjU3bC4yNy4yOHYuNzlsNSA0Ljk5TDIwLjQ5IDE5bC00Ljk5LTV6bS02IDBDNy4wMSAxNCA1IDExLjk5IDUgOS41UzcuMDEgNSA5LjUgNSAxNCA3LjAxIDE0IDkuNSAxMS45OSAxNCA5LjUgMTR6XCIgLz48cGF0aCBkPVwiTTAgMGgyNHYyNEgwelwiIGZpbGw9XCJub25lXCIgLz48L3N2Zz5cclxuICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJzZWFyY2gtaW5wdXRcIiBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9IG9uQ2hhbmdlPXtvbkNoYW5nZUhhbmRsZXJ9IHZhbHVlPXtzZWFyY2hJbnB1dH0gLz5cclxuICAgICAgPC9mb3JtPlxyXG5cclxuXHJcbiAgICA8c3R5bGUganN4PntgXHJcbiAgICAgIGZvcm0ge1xyXG4gICAgICAgIHdpZHRoOiA2OC41JTtcclxuICAgICAgfVxyXG5cclxuICAgICAgbGFiZWwge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDhweDtcclxuICAgICAgICBsZWZ0OiAxMnB4O1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAjbWFpbi1zZWFyY2hiYXIge1xyXG4gICAgICAgIC8qIG1hcmdpbjogYXV0bzsgKi9cclxuICAgICAgICAvKiBtYXJnaW4tbGVmdDogMy41cmVtOyAqL1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGZvbnQ6IGluaGVyaXQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICNtYWluLXNlYXJjaGJhciBpbnB1dCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjNweDtcclxuICAgICAgICBwYWRkaW5nOiAwLjZyZW0gM3JlbSAwLjVyZW0gMi4zcmVtO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgI21haW4tc2VhcmNoYmFyIGlucHV0IDpmb2N1cyB7XHJcbiAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDExMDBweCkge1xyXG4gICAgICAgICNtYWluLXNlYXJjaGJhciBpbnB1dCB7XHJcbiAgICAgICAgICB3aWR0aDogMTMwJTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA4MzBweCkge1xyXG4gICAgICAgICNtYWluLXNlYXJjaGJhciB7XHJcbiAgICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgI21haW4tc2VhcmNoYmFyIGlucHV0IHtcclxuICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvcm0ge1xyXG4gICAgICAgICAgd2lkdGg6IDc1LjUlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgQG1lZGlhICggbWF4LXdpZHRoOiA0MzBweCkge1xyXG4gICAgICAgICNtYWluLXNlYXJjaGJhciBpbnB1dCB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsYWJlbCB7XHJcbiAgICAgICAgICB0b3A6IDZweDtcclxuICAgICAgICAgIGxlZnQ6IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBAbWVkaWEgKCBtYXgtd2lkdGg6IDM2MHB4KSB7XHJcbiAgICAgICAgI21haW4tc2VhcmNoYmFyIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgI21haW4tc2VhcmNoYmFyIGlucHV0IHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgXHJcbiAgICBcclxuICAgIGB9PC9zdHlsZT5cclxuXHJcbiAgICAgICAgICBcclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoYmFyO1xyXG4iLCJpbXBvcnQgeyBHbG9iYWxDb250ZXh0IH0gZnJvbSAnLi4vY29udGV4dC9HbG9iYWxDb250ZXh0JztcclxuaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGNvbG9ycyBmcm9tICcuLi9jc3MtdmFyaWFibGVzL2NvbG9ycydcclxuXHJcbmNvbnN0IFZpZGVvSXRlbSA9ICh7IHZpZGVvLCBtb2RlIH0pID0+IHtcclxuXHJcbiAgY29uc3QgeyBhZGRWaWRlb1RvUGxheWxpc3QsIHJlbW92ZVZpZGVvRnJvbVBsYXlsaXN0LCBzZXRDdXJyZW50VmlkZW8sIGN1cnJlbnRVc2VyLCBwcm9maWxlVXNlciwgc2V0QXV0b3BsYXkgfSA9IHVzZUNvbnRleHQoR2xvYmFsQ29udGV4dCk7XHJcblxyXG4gIGNvbnN0IGFkZFZpZGVvQ2xpY2tIYW5kbGVyID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IHZpZGVvVG9TYXZlID0ge1xyXG4gICAgICB0aXRsZTogdmlkZW8uc25pcHBldC50aXRsZS5zcGxpdChcIiZxdW90O1wiKS5qb2luKFwiXCIpLnNwbGl0KFwiJiMzOTtcIikuam9pbihcIidcIikuc3BsaXQoXCImYW1wO1wiKS5qb2luKFwiJlwiKSxcclxuICAgICAgdGh1bWJuYWlsVVJMOiB2aWRlby5zbmlwcGV0LnRodW1ibmFpbHMuZGVmYXVsdC51cmwsXHJcbiAgICAgIHZpZGVvSWQ6IHZpZGVvLmlkLnZpZGVvSWQsXHJcbiAgICB9XHJcblxyXG4gICAgLy8gY29uc29sZS5sb2codmlkZW9Ub1NhdmUpXHJcbiAgICBhZGRWaWRlb1RvUGxheWxpc3QodmlkZW9Ub1NhdmUpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgcmVtb3ZlVmlkZW9DbGlja0hhbmRsZXIgPSAoKSA9PiB7XHJcbiAgICByZW1vdmVWaWRlb0Zyb21QbGF5bGlzdCh2aWRlby5faWQpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgcGxheUJ1dHRvbkhhbmRsZXIgPSAoKSA9PiB7XHJcblxyXG4gICAgbGV0IHZpZGVvVG9TZXQ7XHJcblxyXG4gICAgaWYgKG1vZGUgPT09ICd5b3V0dWJlJykge1xyXG4gICAgICB2aWRlb1RvU2V0ID0ge1xyXG4gICAgICAgIHRpdGxlOiB2aWRlby5zbmlwcGV0LnRpdGxlLFxyXG4gICAgICAgIC8vIGRlc2NyaXB0aW9uOiB2aWRlby5zbmlwcGV0LmRlc2NyaXB0aW9uLFxyXG4gICAgICAgIHZpZGVvSWQ6IHZpZGVvLmlkLnZpZGVvSWQsXHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHZpZGVvVG9TZXQgPSB7XHJcbiAgICAgICAgdGl0bGU6IHZpZGVvLnRpdGxlLFxyXG4gICAgICAgIC8vIGRlc2NyaXB0aW9uOiB2aWRlby5kZXNjcmlwdGlvbixcclxuICAgICAgICB2aWRlb0lkOiB2aWRlby52aWRlb1VSTCxcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgc2V0Q3VycmVudFZpZGVvKHZpZGVvVG9TZXQpO1xyXG5cclxuICAgIHNldEF1dG9wbGF5KHRydWUpO1xyXG5cclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInZpZGVvLWl0ZW1cIj5cclxuICAgICAge21vZGUgPT09ICd5b3V0dWJlJyAmJlxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICA8aW1nIHNyYz17dmlkZW8uc25pcHBldC50aHVtYm5haWxzLmRlZmF1bHQudXJsfSBhbHQ9XCJ5b3V0dWJlIHZpZGVvXCIgLz5cclxuICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ2aWRlby10aXRsZVwiPnt2aWRlby5zbmlwcGV0LnRpdGxlLnNwbGl0KFwiJnF1b3Q7XCIpLmpvaW4oXCJcIikuc3BsaXQoXCImIzM5O1wiKS5qb2luKFwiJ1wiKS5zcGxpdChcIiZhbXA7XCIpLmpvaW4oXCImXCIpfTwvaDM+XHJcbiAgICAgICAgICA8ZGl2IGlkPVwiYnV0dG9uc1wiPlxyXG4gICAgICAgICAge3Byb2ZpbGVVc2VyLm93bmVkVmlkZW9zLmxlbmd0aCA+IDAgJiZcclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtwbGF5QnV0dG9uSGFuZGxlcn0+XHJcbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtcGxheVwiPjwvaT5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17YWRkVmlkZW9DbGlja0hhbmRsZXJ9PlxyXG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXBsdXNcIj48L2k+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHttb2RlID09PSAncGxheWxpc3QnICYmXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIDxpbWcgc3JjPXt2aWRlby50aHVtYm5haWxVUkx9IGFsdD1cInlvdXR1YmUgdmlkZW9cIiAvPlxyXG4gICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInZpZGVvLXRpdGxlXCI+e3ZpZGVvLnRpdGxlfTwvaDM+XHJcbiAgICAgICAgICA8ZGl2IGlkPVwiYnV0dG9uc1wiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3BsYXlCdXR0b25IYW5kbGVyfT5cclxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1wbGF5XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAge2N1cnJlbnRVc2VyLmlkID09PSBwcm9maWxlVXNlci5pZCAmJlxyXG4gICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17cmVtb3ZlVmlkZW9DbGlja0hhbmRsZXJ9PlxyXG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtdHJhc2gtb1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICBcclxuICAgIC52aWRlby1pdGVtIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjZTEyOWU4OyAqL1xyXG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJHtjb2xvcnMucHJpbWFyeX07XHJcbiAgICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICAgIC8qIG1hcmdpbi1ib3R0b206IDFyZW07ICovXHJcbiAgICB9XHJcblxyXG4gICAgLnZpZGVvLWl0ZW06bGFzdC1jaGlsZCB7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgaDMge1xyXG4gICAgICBtYXJnaW46IDAgYXV0byAwIDIuN3JlbTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgYnV0dG9uIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtjb2xvcnMucHJpbWFyeX07XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgcGFkZGluZzogMC43NXJlbSAxcmVtO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICBtYXJnaW46IDAuNXJlbTtcclxuICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzIGVhc2UtaW4tb3V0LCB0ZXh0LXNoYWRvdyAwLjJzO1xyXG4gICAgfVxyXG5cclxuICAgIGJ1dHRvbjpob3ZlciB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlNTMwNWE7XHJcbiAgICAgIHRleHQtc2hhZG93OiAwcHggMHB4IDhweCByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyogTWVkaWEgcXVlcmllcyAqL1xyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDEwODBweCkge1xyXG4gICAgICBoMyB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEuN3JlbTtcclxuICAgICAgfVxyXG5cclxuICAgICAgI2J1dHRvbnMge1xyXG4gICAgICAgIG1pbi13aWR0aDogMjAlO1xyXG4gICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAudmlkZW8taXRlbSB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgaDMge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAjYnV0dG9ucyB7XHJcbiAgICAgICAgLyogd2lkdGg6IDEwJTsgKi9cclxuICAgICAgICBtaW4td2lkdGg6IDEwJTtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xyXG4gICAgICBpbWcge1xyXG4gICAgICAgIGhlaWdodDogNjBweDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDAuM3JlbTtcclxuICAgICAgfVxyXG5cclxuICAgICAgI2J1dHRvbnMge1xyXG4gICAgICAgIHdpZHRoOiAxMyU7XHJcbiAgICAgICAgbWluLXdpZHRoOiAxMyU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNDAwcHgpIHtcclxuICAgICAgI2J1dHRvbnMge1xyXG4gICAgICAgIHdpZHRoOiAxNSU7XHJcbiAgICAgICAgbWluLXdpZHRoOiAxNSU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGgzIHtcclxuICAgICAgICBmb250LXNpemU6IDAuN3JlbTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAzODBweCkge1xyXG4gICAgICAudmlkZW8taXRlbSB7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwLjZyZW07XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogMzUwcHgpIHtcclxuICAgICAgLnZpZGVvLWl0ZW0ge1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMC42cmVtO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAjYnV0dG9ucyB7XHJcbiAgICAgICAgd2lkdGg6IDE3JTtcclxuICAgICAgICBtaW4td2lkdGg6IDE3JTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaW1nIHtcclxuICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICBcclxuICBgfTwvc3R5bGU+XHJcblxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBWaWRlb0l0ZW07IiwiaW1wb3J0IHsgR2xvYmFsQ29udGV4dCB9IGZyb20gJy4uL2NvbnRleHQvR2xvYmFsQ29udGV4dCc7XHJcbmltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjb2xvcnMgZnJvbSAnLi4vY3NzLXZhcmlhYmxlcy9jb2xvcnMnXHJcblxyXG5jb25zdCBWaWRlb1BsYXllciA9ICgpID0+IHtcclxuXHJcbiAgY29uc3QgeyB2aWRlb1N0YXRlLCBhdXRvcGxheSwgcHJvZmlsZVVzZXIgfSA9IHVzZUNvbnRleHQoR2xvYmFsQ29udGV4dCk7XHJcblxyXG4gIC8vIEF1dG9wbGF5IG9mZlxyXG4gIGxldCB2aWRlb1NyYyA9IGBodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC8ke3ZpZGVvU3RhdGUudmlkZW9JZH1gO1xyXG5cclxuICBpZiAoYXV0b3BsYXkpIHtcclxuICAgIC8vIEF1dG9wbGF5IG9uXHJcbiAgICB2aWRlb1NyYyA9IGBodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC8ke3ZpZGVvU3RhdGUudmlkZW9JZH0/YXV0b3BsYXk9MWA7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG5cclxuICAgIDxkaXYgaWQ9XCJ2aWRlby1jb250YWluZXJcIj5cclxuICAgICAge3Byb2ZpbGVVc2VyLm93bmVkVmlkZW9zLmxlbmd0aCA+IDAgJiYgdmlkZW9TdGF0ZS50aXRsZSAhPT0gJycgJiZcclxuICAgICAgICA8ZGl2IGlkPVwidmlkZW8tcGxheWVyXCI+XHJcbiAgICAgICAgICA8aWZyYW1lIHdpZHRoPVwiOTE4XCIgaGVpZ2h0PVwiNTY3XCIgZnJhbWVCb3JkZXI9XCIwXCIgYWxsb3dGdWxsU2NyZWVuIGFsbG93PVwiYXV0b3BsYXlcIiBzcmM9e3ZpZGVvU3JjfT48L2lmcmFtZT5cclxuICAgICAgICAgIHsvKiA8VmlkZW9JbmZvIC8+ICovfVxyXG4gICAgICAgICAgey8qIDxkaXYgaWQ9XCJ2aWRlby1pbmZvXCI+XHJcbiAgICAgICAgICAgIDxoMz57dmlkZW9TdGF0ZS50aXRsZX08L2gzPlxyXG4gICAgICAgICAgPC9kaXY+ICovfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICB9XHJcbiAgICAgIFxyXG5cclxuICA8c3R5bGUganN4PntgXHJcbiAgXHJcbiAgICAjdmlkZW8tY29udGFpbmVyIHtcclxuICAgICAgbWFyZ2luLXRvcDogM3JlbTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgI3ZpZGVvLXBsYXllciB7XHJcbiAgICAgIHdpZHRoOiA4NSU7XHJcbiAgICAgIG1hcmdpbjogNHJlbSBhdXRvO1xyXG4gICAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAke2NvbG9ycy5wcmltYXJ5fVxyXG4gICAgfVxyXG5cclxuICAgIGlmcmFtZSB7XHJcbiAgICAgIHBhZGRpbmc6IDAuNXJlbTtcclxuICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuXHJcbiAgICAjdmlkZW8taW5mbyB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuLyogXHJcbiAgICBoMyB7XHJcbiAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgIG1hcmdpbjogYXV0bztcclxuICAgIH0gKi9cclxuXHJcbiAgICAvKiBNZWRpYSBxdWVyaWVzICovXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogMTE1MHB4ICkge1xyXG5cclxuICAgICAgI3ZpZGVvLXBsYXllciB7XHJcbiAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmcmFtZSB7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDEwMDBweCApIHtcclxuICAgICAgaWZyYW1lIHtcclxuICAgICAgICAvKiB3aWR0aDogODV2dzsgKi9cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1ODBweCApIHtcclxuICAgICAgI3ZpZGVvLXBsYXllciB7XHJcbiAgICAgICAgd2lkdGg6IDkxJTtcclxuICAgICAgICAvKiBoZWlnaHQ6IDUwJTsgKi9cclxuICAgICAgfVxyXG5cclxuICAgICAgaWZyYW1lIHtcclxuICAgICAgICBoZWlnaHQ6IDMzdmg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICBcclxuICBcclxuICBcclxuICBgfTwvc3R5bGU+XHJcblxyXG5cclxuXHJcblxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBWaWRlb1BsYXllcjsiLCJtb2R1bGUuZXhwb3J0cyA9IHtcclxuICBtb25nb1VSSTogJ21vbmdvZGI6Ly9ncmVlbnBhdWxvOmFkbWluMjAyMEBkczEyMTk5Ni5tbGFiLmNvbToyMTk5Ni9jb2RlcnMtanVrZWJveC1kZXYnLFxyXG4gIFlPVVRVQkVBUElfS0VZOiAnQUl6YVN5RFdUSzVlYnFYR0h3M040RlNkeEVfcU8ydjBMRXMyOFhvJ1xyXG59IiwiLy8gRmlndXJlIG91dCB3aGljaCBzZXQgb2YgY3JlZGVudGlhbHMgdG8gcmV0dXJuXHJcblxyXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xyXG4gIC8vIHdlIGFyZSBpbiBwcm9kdWN0aW9uIC0gcmV0dXJuIHRoZSBwcm9kIHNldCBvZiBrZXlzXHJcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL3Byb2QnKTtcclxufSBlbHNlIHtcclxuICAvLyB3ZSBhcmUgaW4gZGV2ZWxvcG1lbnQgLSByZXR1cm4gdGhlIGRldiBzZXQgb2Yga2V5c1xyXG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kZXYnKTtcclxufVxyXG4iLCJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VSZWR1Y2VyfSBmcm9tICdyZWFjdCc7XHJcbi8vIGltcG9ydCBBcHBSZWR1Y2VyIGZyb20gJy4vQXBwUmVkdWNlcic7XHJcbi8vIGltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSAnQGFwb2xsby9yZWFjdC1ob29rcyc7XHJcblxyXG4vLyBJbml0YWwgU3RhdGVcclxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIGF1dGhlbnRpY2F0ZWQ6IGZhbHNlLFxyXG4gIGF1dGhEYXRhOiBudWxsLFxyXG4gIHVzZXI6IG51bGwsXHJcbiAgdmlkZW86IG51bGwsXHJcbiAgY29tbWVudDogbnVsbCxcclxuICAvLyBsb2dpbjogKCkgPT4ge31cclxufVxyXG5cclxuLy8gQ3JlYXRlIGNvbnRleHRcclxuZXhwb3J0IGNvbnN0IEdsb2JhbENvbnRleHQgPSBjcmVhdGVDb250ZXh0KGluaXRpYWxTdGF0ZSk7XHJcblxyXG4vLyBQcm92aWRlciBDb21wb25lbnRcclxuLy8gZXhwb3J0IGNvbnN0IEdsb2JhbFByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4vLyAgIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihBcHBSZWR1Y2VyLCBpbml0aWFsU3RhdGUpXHJcblxyXG4vLyAgIHJldHVybiAoXHJcbi8vICAgICA8R2xvYmFsQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17e1xyXG4vLyAgICAgICAvLyBhdXRoZW50aWNhdGVkOiBzdGF0ZS5hdXRoZW50aWNhdGVkLFxyXG4vLyAgICAgICBsb2dpbjogbG9naW5cclxuLy8gICAgIH19PlxyXG4vLyAgICAgICB7Y2hpbGRyZW59XHJcbi8vICAgICA8L0dsb2JhbENvbnRleHQuUHJvdmlkZXI+XHJcbi8vICAgKVxyXG4vLyB9IiwiY29uc3QgY29sb3JzID0ge1xyXG4gIHByaW1hcnk6ICcjZmY0MTZjJyxcclxuICAvLyBncmFkaWVudDogJ2xpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2ZmNDE2YywgI2ZmNGIyYiknLFxyXG4gIC8vIGdyYWRpZW50OiAnbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZmY0MTZjLCAjZWVmYjRhKScsXHJcbiAgLy8gZ3JhZGllbnQ6ICdsaW5lYXItZ3JhZGllbnQoMzdkZWcsICNlNTJlNzEgNTAlLCAjZmY4YTAwIDEwMCUpJyxcclxuICAvLyBncmFkaWVudDogJ2xpbmVhci1ncmFkaWVudCgzN2RlZywgI2U1MmU3MSA1MCUsICNmZjhhMDAgMTAwJSknLFxyXG4gIC8vIGdyYWRpZW50OiAnbGluZWFyLWdyYWRpZW50KDM3ZGVnLCByZ2JhKDI1NSwgNjUsIDEwOCwgMSkgNTAlLCByZ2JhKDIzOCwgMjU1LCAyMCwgMSkgMTAwJSknLFxyXG4gIGdyYWRpZW50OiAnbGluZWFyLWdyYWRpZW50KDM3ZGVnLCAjZmY0MTZjIDUwJSwgI2VlZmYxNCAxMDAlKScsXHJcbiAgcmV2ZXJzZUdyYWRpZW50OiAnbGluZWFyLWdyYWRpZW50KDM3ZGVnLCAjZWVmZjE0IDclLCAjZmY0MTZjIDQ2JSknLFxyXG4gIHBpbmtHcmFkZW50OiAnbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZmY0YjJiLCAjZmY0MTZjKTsnLFxyXG4gIHJldmVyc2VQaW5rR3JhZGllbnQ6ICdsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmZjQxNmMsICNmZjRiMmIpOycsXHJcbiAgc2Vjb25kYXJ5OiAnI2ZmNGIyYicsXHJcbiAgdGVydGlhcnk6ICcjZWVmZjE0J1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb2xvcnM7IiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3R5cGVvZlwiKTtcblxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7XG4gIHZhciBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG5cbiAgX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICAgIHJldHVybiBjYWNoZTtcbiAgfTtcblxuICByZXR1cm4gY2FjaGU7XG59XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikge1xuICBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikge1xuICAgIHJldHVybiB7XG4gICAgICBcImRlZmF1bHRcIjogb2JqXG4gICAgfTtcbiAgfVxuXG4gIHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpO1xuXG4gIGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkge1xuICAgIHJldHVybiBjYWNoZS5nZXQob2JqKTtcbiAgfVxuXG4gIHZhciBuZXdPYmogPSB7fTtcbiAgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7XG5cbiAgICAgIGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld09ialtrZXldID0gb2JqW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajtcblxuICBpZiAoY2FjaGUpIHtcbiAgICBjYWNoZS5zZXQob2JqLCBuZXdPYmopO1xuICB9XG5cbiAgcmV0dXJuIG5ld09iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZDsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwiZGVjbGFyZSBjb25zdCBfX05FWFRfREFUQV9fOiBhbnlcblxuaW1wb3J0IFJlYWN0LCB7IENoaWxkcmVuIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgeyBQcmVmZXRjaE9wdGlvbnMsIE5leHRSb3V0ZXIgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IGV4ZWNPbmNlLCBnZXRMb2NhdGlvbk9yaWdpbiB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi91dGlscydcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJy4vcm91dGVyJ1xuaW1wb3J0IHsgYWRkQmFzZVBhdGgsIHJlc29sdmVIcmVmIH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5cbi8qKlxuICogRGV0ZWN0cyB3aGV0aGVyIGEgZ2l2ZW4gdXJsIGlzIGZyb20gdGhlIHNhbWUgb3JpZ2luIGFzIHRoZSBjdXJyZW50IHBhZ2UgKGJyb3dzZXIgb25seSkuXG4gKi9cbmZ1bmN0aW9uIGlzTG9jYWwodXJsOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgY29uc3QgbG9jYXRpb25PcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gIGNvbnN0IHJlc29sdmVkID0gbmV3IFVSTCh1cmwsIGxvY2F0aW9uT3JpZ2luKVxuICByZXR1cm4gcmVzb2x2ZWQub3JpZ2luID09PSBsb2NhdGlvbk9yaWdpblxufVxuXG50eXBlIFVybCA9IHN0cmluZyB8IFVybE9iamVjdFxuXG5leHBvcnQgdHlwZSBMaW5rUHJvcHMgPSB7XG4gIGhyZWY6IFVybFxuICBhcz86IFVybFxuICByZXBsYWNlPzogYm9vbGVhblxuICBzY3JvbGw/OiBib29sZWFuXG4gIHNoYWxsb3c/OiBib29sZWFuXG4gIHBhc3NIcmVmPzogYm9vbGVhblxuICBwcmVmZXRjaD86IGJvb2xlYW5cbn1cblxubGV0IGNhY2hlZE9ic2VydmVyOiBJbnRlcnNlY3Rpb25PYnNlcnZlclxuY29uc3QgbGlzdGVuZXJzID0gbmV3IE1hcDxFbGVtZW50LCAoKSA9PiB2b2lkPigpXG5jb25zdCBJbnRlcnNlY3Rpb25PYnNlcnZlciA9XG4gIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93LkludGVyc2VjdGlvbk9ic2VydmVyIDogbnVsbFxuY29uc3QgcHJlZmV0Y2hlZDogeyBbY2FjaGVLZXk6IHN0cmluZ106IGJvb2xlYW4gfSA9IHt9XG5cbmZ1bmN0aW9uIGdldE9ic2VydmVyKCk6IEludGVyc2VjdGlvbk9ic2VydmVyIHwgdW5kZWZpbmVkIHtcbiAgLy8gUmV0dXJuIHNoYXJlZCBpbnN0YW5jZSBvZiBJbnRlcnNlY3Rpb25PYnNlcnZlciBpZiBhbHJlYWR5IGNyZWF0ZWRcbiAgaWYgKGNhY2hlZE9ic2VydmVyKSB7XG4gICAgcmV0dXJuIGNhY2hlZE9ic2VydmVyXG4gIH1cblxuICAvLyBPbmx5IGNyZWF0ZSBzaGFyZWQgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgc3VwcG9ydGVkIGluIGJyb3dzZXJcbiAgaWYgKCFJbnRlcnNlY3Rpb25PYnNlcnZlcikge1xuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIHJldHVybiAoY2FjaGVkT2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoXG4gICAgKGVudHJpZXMpID0+IHtcbiAgICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgICAgaWYgKCFsaXN0ZW5lcnMuaGFzKGVudHJ5LnRhcmdldCkpIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNiID0gbGlzdGVuZXJzLmdldChlbnRyeS50YXJnZXQpIVxuICAgICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcgfHwgZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8gPiAwKSB7XG4gICAgICAgICAgY2FjaGVkT2JzZXJ2ZXIudW5vYnNlcnZlKGVudHJ5LnRhcmdldClcbiAgICAgICAgICBsaXN0ZW5lcnMuZGVsZXRlKGVudHJ5LnRhcmdldClcbiAgICAgICAgICBjYigpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSxcbiAgICB7IHJvb3RNYXJnaW46ICcyMDBweCcgfVxuICApKVxufVxuXG5jb25zdCBsaXN0ZW5Ub0ludGVyc2VjdGlvbnMgPSAoZWw6IEVsZW1lbnQsIGNiOiAoKSA9PiB2b2lkKSA9PiB7XG4gIGNvbnN0IG9ic2VydmVyID0gZ2V0T2JzZXJ2ZXIoKVxuICBpZiAoIW9ic2VydmVyKSB7XG4gICAgcmV0dXJuICgpID0+IHt9XG4gIH1cblxuICBvYnNlcnZlci5vYnNlcnZlKGVsKVxuICBsaXN0ZW5lcnMuc2V0KGVsLCBjYilcbiAgcmV0dXJuICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVsKVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnIpXG4gICAgfVxuICAgIGxpc3RlbmVycy5kZWxldGUoZWwpXG4gIH1cbn1cblxuZnVuY3Rpb24gcHJlZmV0Y2goXG4gIHJvdXRlcjogTmV4dFJvdXRlcixcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICBvcHRpb25zPzogUHJlZmV0Y2hPcHRpb25zXG4pOiB2b2lkIHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSByZXR1cm5cbiAgLy8gUHJlZmV0Y2ggdGhlIEpTT04gcGFnZSBpZiBhc2tlZCAob25seSBpbiB0aGUgY2xpZW50KVxuICAvLyBXZSBuZWVkIHRvIGhhbmRsZSBhIHByZWZldGNoIGVycm9yIGhlcmUgc2luY2Ugd2UgbWF5IGJlXG4gIC8vIGxvYWRpbmcgd2l0aCBwcmlvcml0eSB3aGljaCBjYW4gcmVqZWN0IGJ1dCB3ZSBkb24ndFxuICAvLyB3YW50IHRvIGZvcmNlIG5hdmlnYXRpb24gc2luY2UgdGhpcyBpcyBvbmx5IGEgcHJlZmV0Y2hcbiAgcm91dGVyLnByZWZldGNoKGhyZWYsIGFzLCBvcHRpb25zKS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIC8vIHJldGhyb3cgdG8gc2hvdyBpbnZhbGlkIFVSTCBlcnJvcnNcbiAgICAgIHRocm93IGVyclxuICAgIH1cbiAgfSlcbiAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXNdID0gdHJ1ZVxufVxuXG5mdW5jdGlvbiBsaW5rQ2xpY2tlZChcbiAgZTogUmVhY3QuTW91c2VFdmVudCxcbiAgcm91dGVyOiBOZXh0Um91dGVyLFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIHJlcGxhY2U/OiBib29sZWFuLFxuICBzaGFsbG93PzogYm9vbGVhbixcbiAgc2Nyb2xsPzogYm9vbGVhblxuKTogdm9pZCB7XG4gIGNvbnN0IHsgbm9kZU5hbWUsIHRhcmdldCB9ID0gZS5jdXJyZW50VGFyZ2V0IGFzIEhUTUxBbmNob3JFbGVtZW50XG4gIGlmIChcbiAgICBub2RlTmFtZSA9PT0gJ0EnICYmXG4gICAgKCh0YXJnZXQgJiYgdGFyZ2V0ICE9PSAnX3NlbGYnKSB8fFxuICAgICAgZS5tZXRhS2V5IHx8XG4gICAgICBlLmN0cmxLZXkgfHxcbiAgICAgIGUuc2hpZnRLZXkgfHxcbiAgICAgIChlLm5hdGl2ZUV2ZW50ICYmIGUubmF0aXZlRXZlbnQud2hpY2ggPT09IDIpKVxuICApIHtcbiAgICAvLyBpZ25vcmUgY2xpY2sgZm9yIG5ldyB0YWIgLyBuZXcgd2luZG93IGJlaGF2aW9yXG4gICAgcmV0dXJuXG4gIH1cblxuICBpZiAoIWlzTG9jYWwoaHJlZikpIHtcbiAgICAvLyBpZ25vcmUgY2xpY2sgaWYgaXQncyBvdXRzaWRlIG91ciBzY29wZSAoZS5nLiBodHRwczovL2dvb2dsZS5jb20pXG4gICAgcmV0dXJuXG4gIH1cblxuICBlLnByZXZlbnREZWZhdWx0KClcblxuICAvLyAgYXZvaWQgc2Nyb2xsIGZvciB1cmxzIHdpdGggYW5jaG9yIHJlZnNcbiAgaWYgKHNjcm9sbCA9PSBudWxsKSB7XG4gICAgc2Nyb2xsID0gYXMuaW5kZXhPZignIycpIDwgMFxuICB9XG5cbiAgLy8gcmVwbGFjZSBzdGF0ZSBpbnN0ZWFkIG9mIHB1c2ggaWYgcHJvcCBpcyBwcmVzZW50XG4gIHJvdXRlcltyZXBsYWNlID8gJ3JlcGxhY2UnIDogJ3B1c2gnXShocmVmLCBhcywgeyBzaGFsbG93IH0pLnRoZW4oXG4gICAgKHN1Y2Nlc3M6IGJvb2xlYW4pID0+IHtcbiAgICAgIGlmICghc3VjY2VzcykgcmV0dXJuXG4gICAgICBpZiAoc2Nyb2xsKSB7XG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgICBkb2N1bWVudC5ib2R5LmZvY3VzKClcbiAgICAgIH1cbiAgICB9XG4gIClcbn1cblxuZnVuY3Rpb24gTGluayhwcm9wczogUmVhY3QuUHJvcHNXaXRoQ2hpbGRyZW48TGlua1Byb3BzPikge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIC8vIFRoaXMgaG9vayBpcyBpbiBhIGNvbmRpdGlvbmFsIGJ1dCB0aGF0IGlzIG9rIGJlY2F1c2UgYHByb2Nlc3MuZW52Lk5PREVfRU5WYCBuZXZlciBjaGFuZ2VzXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL3J1bGVzLW9mLWhvb2tzXG4gICAgY29uc3QgaGFzV2FybmVkID0gUmVhY3QudXNlUmVmKGZhbHNlKVxuICAgIGlmIChwcm9wcy5wcmVmZXRjaCAmJiAhaGFzV2FybmVkLmN1cnJlbnQpIHtcbiAgICAgIGhhc1dhcm5lZC5jdXJyZW50ID0gdHJ1ZVxuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAnTmV4dC5qcyBhdXRvLXByZWZldGNoZXMgYXV0b21hdGljYWxseSBiYXNlZCBvbiB2aWV3cG9ydC4gVGhlIHByZWZldGNoIGF0dHJpYnV0ZSBpcyBubyBsb25nZXIgbmVlZGVkLiBNb3JlOiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9wcmVmZXRjaC10cnVlLWRlcHJlY2F0ZWQnXG4gICAgICApXG4gICAgfVxuICB9XG4gIGNvbnN0IHAgPSBwcm9wcy5wcmVmZXRjaCAhPT0gZmFsc2VcblxuICBjb25zdCBbY2hpbGRFbG0sIHNldENoaWxkRWxtXSA9IFJlYWN0LnVzZVN0YXRlPEVsZW1lbnQ+KClcblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICBjb25zdCBwYXRobmFtZSA9IChyb3V0ZXIgJiYgcm91dGVyLnBhdGhuYW1lKSB8fCAnLydcblxuICBjb25zdCB7IGhyZWYsIGFzIH0gPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICBjb25zdCByZXNvbHZlZEhyZWYgPSByZXNvbHZlSHJlZihwYXRobmFtZSwgcHJvcHMuaHJlZilcbiAgICByZXR1cm4ge1xuICAgICAgaHJlZjogcmVzb2x2ZWRIcmVmLFxuICAgICAgYXM6IHByb3BzLmFzID8gcmVzb2x2ZUhyZWYocGF0aG5hbWUsIHByb3BzLmFzKSA6IHJlc29sdmVkSHJlZixcbiAgICB9XG4gIH0sIFtwYXRobmFtZSwgcHJvcHMuaHJlZiwgcHJvcHMuYXNdKVxuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHAgJiYgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgJiYgY2hpbGRFbG0gJiYgY2hpbGRFbG0udGFnTmFtZSkge1xuICAgICAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgICAgIGNvbnN0IGlzUHJlZmV0Y2hlZCA9IHByZWZldGNoZWRbaHJlZiArICclJyArIGFzXVxuICAgICAgaWYgKCFpc1ByZWZldGNoZWQpIHtcbiAgICAgICAgcmV0dXJuIGxpc3RlblRvSW50ZXJzZWN0aW9ucyhjaGlsZEVsbSwgKCkgPT4ge1xuICAgICAgICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICB9LCBbcCwgY2hpbGRFbG0sIGhyZWYsIGFzLCByb3V0ZXJdKVxuXG4gIGxldCB7IGNoaWxkcmVuLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwgfSA9IHByb3BzXG4gIC8vIERlcHJlY2F0ZWQuIFdhcm5pbmcgc2hvd24gYnkgcHJvcFR5cGUgY2hlY2suIElmIHRoZSBjaGlsZHJlbiBwcm92aWRlZCBpcyBhIHN0cmluZyAoPExpbms+ZXhhbXBsZTwvTGluaz4pIHdlIHdyYXAgaXQgaW4gYW4gPGE+IHRhZ1xuICBpZiAodHlwZW9mIGNoaWxkcmVuID09PSAnc3RyaW5nJykge1xuICAgIGNoaWxkcmVuID0gPGE+e2NoaWxkcmVufTwvYT5cbiAgfVxuXG4gIC8vIFRoaXMgd2lsbCByZXR1cm4gdGhlIGZpcnN0IGNoaWxkLCBpZiBtdWx0aXBsZSBhcmUgcHJvdmlkZWQgaXQgd2lsbCB0aHJvdyBhbiBlcnJvclxuICBjb25zdCBjaGlsZDogYW55ID0gQ2hpbGRyZW4ub25seShjaGlsZHJlbilcbiAgY29uc3QgY2hpbGRQcm9wczoge1xuICAgIG9uTW91c2VFbnRlcj86IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgb25DbGljazogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICBocmVmPzogc3RyaW5nXG4gICAgcmVmPzogYW55XG4gIH0gPSB7XG4gICAgcmVmOiAoZWw6IGFueSkgPT4ge1xuICAgICAgaWYgKGVsKSBzZXRDaGlsZEVsbShlbClcblxuICAgICAgaWYgKGNoaWxkICYmIHR5cGVvZiBjaGlsZCA9PT0gJ29iamVjdCcgJiYgY2hpbGQucmVmKSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2hpbGQucmVmID09PSAnZnVuY3Rpb24nKSBjaGlsZC5yZWYoZWwpXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBjaGlsZC5yZWYgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgY2hpbGQucmVmLmN1cnJlbnQgPSBlbFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBvbkNsaWNrOiAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbkNsaWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNoaWxkLnByb3BzLm9uQ2xpY2soZSlcbiAgICAgIH1cbiAgICAgIGlmICghZS5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgIGxpbmtDbGlja2VkKGUsIHJvdXRlciwgaHJlZiwgYXMsIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbClcbiAgICAgIH1cbiAgICB9LFxuICB9XG5cbiAgaWYgKHApIHtcbiAgICBjaGlsZFByb3BzLm9uTW91c2VFbnRlciA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIoZSlcbiAgICAgIH1cbiAgICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMsIHsgcHJpb3JpdHk6IHRydWUgfSlcbiAgICB9XG4gIH1cblxuICAvLyBJZiBjaGlsZCBpcyBhbiA8YT4gdGFnIGFuZCBkb2Vzbid0IGhhdmUgYSBocmVmIGF0dHJpYnV0ZSwgb3IgaWYgdGhlICdwYXNzSHJlZicgcHJvcGVydHkgaXNcbiAgLy8gZGVmaW5lZCwgd2Ugc3BlY2lmeSB0aGUgY3VycmVudCAnaHJlZicsIHNvIHRoYXQgcmVwZXRpdGlvbiBpcyBub3QgbmVlZGVkIGJ5IHRoZSB1c2VyXG4gIGlmIChwcm9wcy5wYXNzSHJlZiB8fCAoY2hpbGQudHlwZSA9PT0gJ2EnICYmICEoJ2hyZWYnIGluIGNoaWxkLnByb3BzKSkpIHtcbiAgICBjaGlsZFByb3BzLmhyZWYgPSBhZGRCYXNlUGF0aChhcylcbiAgfVxuXG4gIC8vIEFkZCB0aGUgZW5kaW5nIHNsYXNoIHRvIHRoZSBwYXRocy4gU28sIHdlIGNhbiBzZXJ2ZSB0aGVcbiAgLy8gXCI8cGFnZT4vaW5kZXguaHRtbFwiIGRpcmVjdGx5LlxuICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0VYUE9SVF9UUkFJTElOR19TTEFTSCkge1xuICAgIGNvbnN0IHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0ID0gcmVxdWlyZSgnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yZXdyaXRlLXVybC1mb3ItZXhwb3J0JylcbiAgICAgIC5yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydFxuICAgIGlmIChcbiAgICAgIGNoaWxkUHJvcHMuaHJlZiAmJlxuICAgICAgdHlwZW9mIF9fTkVYVF9EQVRBX18gIT09ICd1bmRlZmluZWQnICYmXG4gICAgICBfX05FWFRfREFUQV9fLm5leHRFeHBvcnRcbiAgICApIHtcbiAgICAgIGNoaWxkUHJvcHMuaHJlZiA9IHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0KGNoaWxkUHJvcHMuaHJlZilcbiAgICB9XG4gIH1cblxuICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCBjaGlsZFByb3BzKVxufVxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgY29uc3Qgd2FybiA9IGV4ZWNPbmNlKGNvbnNvbGUuZXJyb3IpXG5cbiAgLy8gVGhpcyBtb2R1bGUgZ2V0cyByZW1vdmVkIGJ5IHdlYnBhY2suSWdub3JlUGx1Z2luXG4gIGNvbnN0IFByb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKVxuICBjb25zdCBleGFjdCA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMtZXhhY3QnKVxuICAvLyBAdHMtaWdub3JlIHRoZSBwcm9wZXJ0eSBpcyBzdXBwb3J0ZWQsIHdoZW4gZGVjbGFyaW5nIGl0IG9uIHRoZSBjbGFzcyBpdCBvdXRwdXRzIGFuIGV4dHJhIGJpdCBvZiBjb2RlIHdoaWNoIGlzIG5vdCBuZWVkZWQuXG4gIExpbmsucHJvcFR5cGVzID0gZXhhY3Qoe1xuICAgIGhyZWY6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5vYmplY3RdKS5pc1JlcXVpcmVkLFxuICAgIGFzOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMub2JqZWN0XSksXG4gICAgcHJlZmV0Y2g6IFByb3BUeXBlcy5ib29sLFxuICAgIHJlcGxhY2U6IFByb3BUeXBlcy5ib29sLFxuICAgIHNoYWxsb3c6IFByb3BUeXBlcy5ib29sLFxuICAgIHBhc3NIcmVmOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBzY3JvbGw6IFByb3BUeXBlcy5ib29sLFxuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgIFByb3BUeXBlcy5lbGVtZW50LFxuICAgICAgKHByb3BzOiBhbnksIHByb3BOYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBwcm9wc1twcm9wTmFtZV1cblxuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIHdhcm4oXG4gICAgICAgICAgICBgV2FybmluZzogWW91J3JlIHVzaW5nIGEgc3RyaW5nIGRpcmVjdGx5IGluc2lkZSA8TGluaz4uIFRoaXMgdXNhZ2UgaGFzIGJlZW4gZGVwcmVjYXRlZC4gUGxlYXNlIGFkZCBhbiA8YT4gdGFnIGFzIGNoaWxkIG9mIDxMaW5rPmBcbiAgICAgICAgICApXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgfSxcbiAgICBdKS5pc1JlcXVpcmVkLFxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBMaW5rXG4iLCIvKipcbiAqIFJlbW92ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBpZiB0aGVyZSBpcyBvbmUuIFByZXNlcnZlcyB0aGUgcm9vdCBwYXRoIGAvYC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLmVuZHNXaXRoKCcvJykgJiYgcGF0aCAhPT0gJy8nID8gcGF0aC5zbGljZSgwLCAtMSkgOiBwYXRoXG59XG5cbi8qKlxuICogTm9ybWFsaXplcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGFjY29yZGluZyB0byB0aGUgYHRyYWlsaW5nU2xhc2hgIG9wdGlvblxuICogaW4gYG5leHQuY29uZmlnLmpzYC5cbiAqL1xuZXhwb3J0IGNvbnN0IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoID0gcHJvY2Vzcy5lbnYuX19ORVhUX1RSQUlMSU5HX1NMQVNIXG4gID8gKHBhdGg6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gICAgICBpZiAoL1xcLlteL10rXFwvPyQvLnRlc3QocGF0aCkpIHtcbiAgICAgICAgcmV0dXJuIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGgpXG4gICAgICB9IGVsc2UgaWYgKHBhdGguZW5kc1dpdGgoJy8nKSkge1xuICAgICAgICByZXR1cm4gcGF0aFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHBhdGggKyAnLydcbiAgICAgIH1cbiAgICB9XG4gIDogcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2hcbiIsIi8qIGdsb2JhbCB3aW5kb3cgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSb3V0ZXIsIHsgTmV4dFJvdXRlciB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgUm91dGVyQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dCdcblxudHlwZSBDbGFzc0FyZ3VtZW50czxUPiA9IFQgZXh0ZW5kcyBuZXcgKC4uLmFyZ3M6IGluZmVyIFUpID0+IGFueSA/IFUgOiBhbnlcblxudHlwZSBSb3V0ZXJBcmdzID0gQ2xhc3NBcmd1bWVudHM8dHlwZW9mIFJvdXRlcj5cblxudHlwZSBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IFJvdXRlciB8IG51bGxcbiAgcmVhZHlDYWxsYmFja3M6IEFycmF5PCgpID0+IGFueT5cbiAgcmVhZHkoY2I6ICgpID0+IGFueSk6IHZvaWRcbn1cblxuZXhwb3J0IHsgUm91dGVyLCBOZXh0Um91dGVyIH1cblxuZXhwb3J0IHR5cGUgU2luZ2xldG9uUm91dGVyID0gU2luZ2xldG9uUm91dGVyQmFzZSAmIE5leHRSb3V0ZXJcblxuY29uc3Qgc2luZ2xldG9uUm91dGVyOiBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IG51bGwsIC8vIGhvbGRzIHRoZSBhY3R1YWwgcm91dGVyIGluc3RhbmNlXG4gIHJlYWR5Q2FsbGJhY2tzOiBbXSxcbiAgcmVhZHkoY2I6ICgpID0+IHZvaWQpIHtcbiAgICBpZiAodGhpcy5yb3V0ZXIpIHJldHVybiBjYigpXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLnJlYWR5Q2FsbGJhY2tzLnB1c2goY2IpXG4gICAgfVxuICB9LFxufVxuXG4vLyBDcmVhdGUgcHVibGljIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMgb2YgdGhlIHJvdXRlciBpbiB0aGUgc2luZ2xldG9uUm91dGVyXG5jb25zdCB1cmxQcm9wZXJ0eUZpZWxkcyA9IFtcbiAgJ3BhdGhuYW1lJyxcbiAgJ3JvdXRlJyxcbiAgJ3F1ZXJ5JyxcbiAgJ2FzUGF0aCcsXG4gICdjb21wb25lbnRzJyxcbiAgJ2lzRmFsbGJhY2snLFxuICAnYmFzZVBhdGgnLFxuXVxuY29uc3Qgcm91dGVyRXZlbnRzID0gW1xuICAncm91dGVDaGFuZ2VTdGFydCcsXG4gICdiZWZvcmVIaXN0b3J5Q2hhbmdlJyxcbiAgJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLFxuICAncm91dGVDaGFuZ2VFcnJvcicsXG4gICdoYXNoQ2hhbmdlU3RhcnQnLFxuICAnaGFzaENoYW5nZUNvbXBsZXRlJyxcbl1cbmNvbnN0IGNvcmVNZXRob2RGaWVsZHMgPSBbXG4gICdwdXNoJyxcbiAgJ3JlcGxhY2UnLFxuICAncmVsb2FkJyxcbiAgJ2JhY2snLFxuICAncHJlZmV0Y2gnLFxuICAnYmVmb3JlUG9wU3RhdGUnLFxuXVxuXG4vLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCAnZXZlbnRzJywge1xuICBnZXQoKSB7XG4gICAgcmV0dXJuIFJvdXRlci5ldmVudHNcbiAgfSxcbn0pXG5cbnVybFByb3BlcnR5RmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gIC8vIEhlcmUgd2UgbmVlZCB0byB1c2UgT2JqZWN0LmRlZmluZVByb3BlcnR5IGJlY2F1c2UsIHdlIG5lZWQgdG8gcmV0dXJuXG4gIC8vIHRoZSBwcm9wZXJ0eSBhc3NpZ25lZCB0byB0aGUgYWN0dWFsIHJvdXRlclxuICAvLyBUaGUgdmFsdWUgbWlnaHQgZ2V0IGNoYW5nZWQgYXMgd2UgY2hhbmdlIHJvdXRlcyBhbmQgdGhpcyBpcyB0aGVcbiAgLy8gcHJvcGVyIHdheSB0byBhY2Nlc3MgaXRcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgZmllbGQsIHtcbiAgICBnZXQoKSB7XG4gICAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICAgIHJldHVybiByb3V0ZXJbZmllbGRdIGFzIHN0cmluZ1xuICAgIH0sXG4gIH0pXG59KVxuXG5jb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gIC8vIFdlIGRvbid0IHJlYWxseSBrbm93IHRoZSB0eXBlcyBoZXJlLCBzbyB3ZSBhZGQgdGhlbSBsYXRlciBpbnN0ZWFkXG4gIDsoc2luZ2xldG9uUm91dGVyIGFzIGFueSlbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgcmV0dXJuIHJvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgfVxufSlcblxucm91dGVyRXZlbnRzLmZvckVhY2goKGV2ZW50KSA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeSgoKSA9PiB7XG4gICAgUm91dGVyLmV2ZW50cy5vbihldmVudCwgKC4uLmFyZ3MpID0+IHtcbiAgICAgIGNvbnN0IGV2ZW50RmllbGQgPSBgb24ke2V2ZW50LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpfSR7ZXZlbnQuc3Vic3RyaW5nKFxuICAgICAgICAxXG4gICAgICApfWBcbiAgICAgIGNvbnN0IF9zaW5nbGV0b25Sb3V0ZXIgPSBzaW5nbGV0b25Sb3V0ZXIgYXMgYW55XG4gICAgICBpZiAoX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0oLi4uYXJncylcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWNvbnNvbGVcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciB3aGVuIHJ1bm5pbmcgdGhlIFJvdXRlciBldmVudDogJHtldmVudEZpZWxkfWApXG4gICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWNvbnNvbGVcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGAke2Vyci5tZXNzYWdlfVxcbiR7ZXJyLnN0YWNrfWApXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9KVxufSlcblxuZnVuY3Rpb24gZ2V0Um91dGVyKCk6IFJvdXRlciB7XG4gIGlmICghc2luZ2xldG9uUm91dGVyLnJvdXRlcikge1xuICAgIGNvbnN0IG1lc3NhZ2UgPVxuICAgICAgJ05vIHJvdXRlciBpbnN0YW5jZSBmb3VuZC5cXG4nICtcbiAgICAgICdZb3Ugc2hvdWxkIG9ubHkgdXNlIFwibmV4dC9yb3V0ZXJcIiBpbnNpZGUgdGhlIGNsaWVudCBzaWRlIG9mIHlvdXIgYXBwLlxcbidcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBFeHBvcnQgdGhlIHNpbmdsZXRvblJvdXRlciBhbmQgdGhpcyBpcyB0aGUgcHVibGljIEFQSS5cbmV4cG9ydCBkZWZhdWx0IHNpbmdsZXRvblJvdXRlciBhcyBTaW5nbGV0b25Sb3V0ZXJcblxuLy8gUmVleHBvcnQgdGhlIHdpdGhSb3V0ZSBIT0NcbmV4cG9ydCB7IGRlZmF1bHQgYXMgd2l0aFJvdXRlciB9IGZyb20gJy4vd2l0aC1yb3V0ZXInXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VSb3V0ZXIoKTogTmV4dFJvdXRlciB7XG4gIHJldHVybiBSZWFjdC51c2VDb250ZXh0KFJvdXRlckNvbnRleHQpXG59XG5cbi8vIElOVEVSTkFMIEFQSVNcbi8vIC0tLS0tLS0tLS0tLS1cbi8vIChkbyBub3QgdXNlIGZvbGxvd2luZyBleHBvcnRzIGluc2lkZSB0aGUgYXBwKVxuXG4vLyBDcmVhdGUgYSByb3V0ZXIgYW5kIGFzc2lnbiBpdCBhcyB0aGUgc2luZ2xldG9uIGluc3RhbmNlLlxuLy8gVGhpcyBpcyB1c2VkIGluIGNsaWVudCBzaWRlIHdoZW4gd2UgYXJlIGluaXRpbGl6aW5nIHRoZSBhcHAuXG4vLyBUaGlzIHNob3VsZCAqKm5vdCoqIHVzZSBpbnNpZGUgdGhlIHNlcnZlci5cbmV4cG9ydCBjb25zdCBjcmVhdGVSb3V0ZXIgPSAoLi4uYXJnczogUm91dGVyQXJncyk6IFJvdXRlciA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yb3V0ZXIgPSBuZXcgUm91dGVyKC4uLmFyZ3MpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcy5mb3JFYWNoKChjYikgPT4gY2IoKSlcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzID0gW11cblxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gY3JlYXRlIHRoZSBgd2l0aFJvdXRlcmAgcm91dGVyIGluc3RhbmNlXG5leHBvcnQgZnVuY3Rpb24gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlKHJvdXRlcjogUm91dGVyKTogTmV4dFJvdXRlciB7XG4gIGNvbnN0IF9yb3V0ZXIgPSByb3V0ZXIgYXMgYW55XG4gIGNvbnN0IGluc3RhbmNlID0ge30gYXMgYW55XG5cbiAgZm9yIChjb25zdCBwcm9wZXJ0eSBvZiB1cmxQcm9wZXJ0eUZpZWxkcykge1xuICAgIGlmICh0eXBlb2YgX3JvdXRlcltwcm9wZXJ0eV0gPT09ICdvYmplY3QnKSB7XG4gICAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBPYmplY3QuYXNzaWduKHt9LCBfcm91dGVyW3Byb3BlcnR5XSkgLy8gbWFrZXMgc3VyZSBxdWVyeSBpcyBub3Qgc3RhdGVmdWxcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgaW5zdGFuY2VbcHJvcGVydHldID0gX3JvdXRlcltwcm9wZXJ0eV1cbiAgfVxuXG4gIC8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbiAgaW5zdGFuY2UuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gIGNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICBpbnN0YW5jZVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICAgIHJldHVybiBfcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4gaW5zdGFuY2Vcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IE5leHRDb21wb25lbnRUeXBlLCBOZXh0UGFnZUNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyLCB1c2VSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcidcblxuZXhwb3J0IHR5cGUgV2l0aFJvdXRlclByb3BzID0ge1xuICByb3V0ZXI6IE5leHRSb3V0ZXJcbn1cblxuZXhwb3J0IHR5cGUgRXhjbHVkZVJvdXRlclByb3BzPFA+ID0gUGljazxcbiAgUCxcbiAgRXhjbHVkZTxrZXlvZiBQLCBrZXlvZiBXaXRoUm91dGVyUHJvcHM+XG4+XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdpdGhSb3V0ZXI8XG4gIFAgZXh0ZW5kcyBXaXRoUm91dGVyUHJvcHMsXG4gIEMgPSBOZXh0UGFnZUNvbnRleHRcbj4oXG4gIENvbXBvc2VkQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxDLCBhbnksIFA+XG4pOiBSZWFjdC5Db21wb25lbnRUeXBlPEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPj4ge1xuICBmdW5jdGlvbiBXaXRoUm91dGVyV3JhcHBlcihwcm9wczogYW55KSB7XG4gICAgcmV0dXJuIDxDb21wb3NlZENvbXBvbmVudCByb3V0ZXI9e3VzZVJvdXRlcigpfSB7Li4ucHJvcHN9IC8+XG4gIH1cblxuICBXaXRoUm91dGVyV3JhcHBlci5nZXRJbml0aWFsUHJvcHMgPSBDb21wb3NlZENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHNcbiAgLy8gVGhpcyBpcyBuZWVkZWQgdG8gYWxsb3cgY2hlY2tpbmcgZm9yIGN1c3RvbSBnZXRJbml0aWFsUHJvcHMgaW4gX2FwcFxuICA7KFdpdGhSb3V0ZXJXcmFwcGVyIGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wcyA9IChDb21wb3NlZENvbXBvbmVudCBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHNcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBjb25zdCBuYW1lID1cbiAgICAgIENvbXBvc2VkQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvc2VkQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG4gICAgV2l0aFJvdXRlcldyYXBwZXIuZGlzcGxheU5hbWUgPSBgd2l0aFJvdXRlcigke25hbWV9KWBcbiAgfVxuXG4gIHJldHVybiBXaXRoUm91dGVyV3JhcHBlclxufVxuIiwiLypcbk1JVCBMaWNlbnNlXG5cbkNvcHlyaWdodCAoYykgSmFzb24gTWlsbGVyIChodHRwczovL2phc29uZm9ybWF0LmNvbS8pXG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiovXG5cbi8vIFRoaXMgZmlsZSBpcyBiYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20vZGV2ZWxvcGl0L21pdHQvYmxvYi92MS4xLjMvc3JjL2luZGV4LmpzXG4vLyBJdCdzIGJlZW4gZWRpdGVkIGZvciB0aGUgbmVlZHMgb2YgdGhpcyBzY3JpcHRcbi8vIFNlZSB0aGUgTElDRU5TRSBhdCB0aGUgdG9wIG9mIHRoZSBmaWxlXG5cbnR5cGUgSGFuZGxlciA9ICguLi5ldnRzOiBhbnlbXSkgPT4gdm9pZFxuXG5leHBvcnQgdHlwZSBNaXR0RW1pdHRlciA9IHtcbiAgb24odHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKTogdm9pZFxuICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKTogdm9pZFxuICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pOiB2b2lkXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1pdHQoKTogTWl0dEVtaXR0ZXIge1xuICBjb25zdCBhbGw6IHsgW3M6IHN0cmluZ106IEhhbmRsZXJbXSB9ID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuXG4gIHJldHVybiB7XG4gICAgb24odHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICA7KGFsbFt0eXBlXSB8fCAoYWxsW3R5cGVdID0gW10pKS5wdXNoKGhhbmRsZXIpXG4gICAgfSxcblxuICAgIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIGlmIChhbGxbdHlwZV0pIHtcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWJpdHdpc2VcbiAgICAgICAgYWxsW3R5cGVdLnNwbGljZShhbGxbdHlwZV0uaW5kZXhPZihoYW5kbGVyKSA+Pj4gMCwgMSlcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgICA7KGFsbFt0eXBlXSB8fCBbXSkuc2xpY2UoKS5tYXAoKGhhbmRsZXI6IEhhbmRsZXIpID0+IHtcbiAgICAgICAgaGFuZGxlciguLi5ldnRzKVxuICAgICAgfSlcbiAgICB9LFxuICB9XG59XG4iLCIvKiBnbG9iYWwgX19ORVhUX0RBVEFfXyAqL1xuLy8gdHNsaW50OmRpc2FibGU6bm8tY29uc29sZVxuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCBtaXR0LCB7IE1pdHRFbWl0dGVyIH0gZnJvbSAnLi4vbWl0dCdcbmltcG9ydCB7XG4gIEFwcENvbnRleHRUeXBlLFxuICBmb3JtYXRXaXRoVmFsaWRhdGlvbixcbiAgZ2V0VVJMLFxuICBsb2FkR2V0SW5pdGlhbFByb3BzLFxuICBOZXh0UGFnZUNvbnRleHQsXG4gIFNULFxufSBmcm9tICcuLi91dGlscydcbmltcG9ydCB7IGlzRHluYW1pY1JvdXRlIH0gZnJvbSAnLi91dGlscy9pcy1keW5hbWljJ1xuaW1wb3J0IHsgZ2V0Um91dGVNYXRjaGVyIH0gZnJvbSAnLi91dGlscy9yb3V0ZS1tYXRjaGVyJ1xuaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vdXRpbHMvcm91dGUtcmVnZXgnXG5pbXBvcnQgeyBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IH0gZnJvbSAnLi91dGlscy9zZWFyY2gtcGFyYW1zLXRvLXVybC1xdWVyeSdcbmltcG9ydCB7IHBhcnNlUmVsYXRpdmVVcmwgfSBmcm9tICcuL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybCdcbmltcG9ydCB7XG4gIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoLFxuICBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCxcbn0gZnJvbSAnLi4vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaCdcblxuY29uc3QgYmFzZVBhdGggPSAocHJvY2Vzcy5lbnYuX19ORVhUX1JPVVRFUl9CQVNFUEFUSCBhcyBzdHJpbmcpIHx8ICcnXG5cbmZ1bmN0aW9uIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSB7XG4gIHJldHVybiBPYmplY3QuYXNzaWduKG5ldyBFcnJvcignUm91dGUgQ2FuY2VsbGVkJyksIHtcbiAgICBjYW5jZWxsZWQ6IHRydWUsXG4gIH0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gYmFzZVBhdGhcbiAgICA/IHBhdGggPT09ICcvJ1xuICAgICAgPyBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChiYXNlUGF0aClcbiAgICAgIDogYmFzZVBhdGggKyBwYXRoXG4gICAgOiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5zbGljZShiYXNlUGF0aC5sZW5ndGgpIHx8ICcvJ1xufVxuXG50eXBlIFVybCA9IFVybE9iamVjdCB8IHN0cmluZ1xuXG4vKipcbiAqIFJlc29sdmVzIGEgZ2l2ZW4gaHlwZXJsaW5rIHdpdGggYSBjZXJ0YWluIHJvdXRlciBzdGF0ZSAoYmFzZVBhdGggbm90IGluY2x1ZGVkKS5cbiAqIFByZXNlcnZlcyBhYnNvbHV0ZSB1cmxzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZUhyZWYoY3VycmVudFBhdGg6IHN0cmluZywgaHJlZjogVXJsKTogc3RyaW5nIHtcbiAgLy8gd2UgdXNlIGEgZHVtbXkgYmFzZSB1cmwgZm9yIHJlbGF0aXZlIHVybHNcbiAgY29uc3QgYmFzZSA9IG5ldyBVUkwoY3VycmVudFBhdGgsICdodHRwOi8vbicpXG4gIGNvbnN0IHVybEFzU3RyaW5nID1cbiAgICB0eXBlb2YgaHJlZiA9PT0gJ3N0cmluZycgPyBocmVmIDogZm9ybWF0V2l0aFZhbGlkYXRpb24oaHJlZilcbiAgY29uc3QgZmluYWxVcmwgPSBuZXcgVVJMKHVybEFzU3RyaW5nLCBiYXNlKVxuICBmaW5hbFVybC5wYXRobmFtZSA9IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKGZpbmFsVXJsLnBhdGhuYW1lKVxuICAvLyBpZiB0aGUgb3JpZ2luIGRpZG4ndCBjaGFuZ2UsIGl0IG1lYW5zIHdlIHJlY2VpdmVkIGEgcmVsYXRpdmUgaHJlZlxuICByZXR1cm4gZmluYWxVcmwub3JpZ2luID09PSBiYXNlLm9yaWdpblxuICAgID8gZmluYWxVcmwuaHJlZi5zbGljZShmaW5hbFVybC5vcmlnaW4ubGVuZ3RoKVxuICAgIDogZmluYWxVcmwuaHJlZlxufVxuXG5mdW5jdGlvbiBwcmVwYXJlVXJsQXMocm91dGVyOiBOZXh0Um91dGVyLCB1cmw6IFVybCwgYXM6IFVybCkge1xuICAvLyBJZiB1cmwgYW5kIGFzIHByb3ZpZGVkIGFzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbixcbiAgLy8gd2UnbGwgZm9ybWF0IHRoZW0gaW50byB0aGUgc3RyaW5nIHZlcnNpb24gaGVyZS5cbiAgcmV0dXJuIHtcbiAgICB1cmw6IGFkZEJhc2VQYXRoKHJlc29sdmVIcmVmKHJvdXRlci5wYXRobmFtZSwgdXJsKSksXG4gICAgYXM6IGFzID8gYWRkQmFzZVBhdGgocmVzb2x2ZUhyZWYocm91dGVyLnBhdGhuYW1lLCBhcykpIDogYXMsXG4gIH1cbn1cblxuZnVuY3Rpb24gdHJ5UGFyc2VSZWxhdGl2ZVVybChcbiAgdXJsOiBzdHJpbmdcbik6IG51bGwgfCBSZXR1cm5UeXBlPHR5cGVvZiBwYXJzZVJlbGF0aXZlVXJsPiB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgSW52YWxpZCBocmVmIHBhc3NlZCB0byByb3V0ZXI6ICR7dXJsfSBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9pbnZhbGlkLWhyZWYtcGFzc2VkYFxuICAgICAgKVxuICAgIH1cbiAgICByZXR1cm4gbnVsbFxuICB9XG59XG5cbnR5cGUgQ29tcG9uZW50UmVzID0geyBwYWdlOiBDb21wb25lbnRUeXBlOyBtb2Q6IGFueSB9XG5cbmV4cG9ydCB0eXBlIEJhc2VSb3V0ZXIgPSB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xufVxuXG5leHBvcnQgdHlwZSBOZXh0Um91dGVyID0gQmFzZVJvdXRlciAmXG4gIFBpY2s8XG4gICAgUm91dGVyLFxuICAgIHwgJ3B1c2gnXG4gICAgfCAncmVwbGFjZSdcbiAgICB8ICdyZWxvYWQnXG4gICAgfCAnYmFjaydcbiAgICB8ICdwcmVmZXRjaCdcbiAgICB8ICdiZWZvcmVQb3BTdGF0ZSdcbiAgICB8ICdldmVudHMnXG4gICAgfCAnaXNGYWxsYmFjaydcbiAgPlxuXG5leHBvcnQgdHlwZSBQcmVmZXRjaE9wdGlvbnMgPSB7XG4gIHByaW9yaXR5PzogYm9vbGVhblxufVxuXG50eXBlIFJvdXRlSW5mbyA9IHtcbiAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG4gIHByb3BzPzogYW55XG4gIGVycj86IEVycm9yXG4gIGVycm9yPzogYW55XG59XG5cbnR5cGUgU3Vic2NyaXB0aW9uID0gKGRhdGE6IFJvdXRlSW5mbywgQXBwPzogQ29tcG9uZW50VHlwZSkgPT4gUHJvbWlzZTx2b2lkPlxuXG50eXBlIEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgPSAoc3RhdGU6IGFueSkgPT4gYm9vbGVhblxuXG50eXBlIENvbXBvbmVudExvYWRDYW5jZWwgPSAoKCkgPT4gdm9pZCkgfCBudWxsXG5cbnR5cGUgSGlzdG9yeU1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnIHwgJ3B1c2hTdGF0ZSdcblxuY29uc3QgbWFudWFsU2Nyb2xsUmVzdG9yYXRpb24gPVxuICBwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OICYmXG4gIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXG4gICdzY3JvbGxSZXN0b3JhdGlvbicgaW4gd2luZG93Lmhpc3RvcnlcblxuZnVuY3Rpb24gZmV0Y2hSZXRyeSh1cmw6IHN0cmluZywgYXR0ZW1wdHM6IG51bWJlcik6IFByb21pc2U8YW55PiB7XG4gIHJldHVybiBmZXRjaCh1cmwsIHtcbiAgICAvLyBDb29raWVzIGFyZSByZXF1aXJlZCB0byBiZSBwcmVzZW50IGZvciBOZXh0LmpzJyBTU0cgXCJQcmV2aWV3IE1vZGVcIi5cbiAgICAvLyBDb29raWVzIG1heSBhbHNvIGJlIHJlcXVpcmVkIGZvciBgZ2V0U2VydmVyU2lkZVByb3BzYC5cbiAgICAvL1xuICAgIC8vID4gYGZldGNoYCB3b27igJl0IHNlbmQgY29va2llcywgdW5sZXNzIHlvdSBzZXQgdGhlIGNyZWRlbnRpYWxzIGluaXRcbiAgICAvLyA+IG9wdGlvbi5cbiAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRmV0Y2hfQVBJL1VzaW5nX0ZldGNoXG4gICAgLy9cbiAgICAvLyA+IEZvciBtYXhpbXVtIGJyb3dzZXIgY29tcGF0aWJpbGl0eSB3aGVuIGl0IGNvbWVzIHRvIHNlbmRpbmcgJlxuICAgIC8vID4gcmVjZWl2aW5nIGNvb2tpZXMsIGFsd2F5cyBzdXBwbHkgdGhlIGBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ2BcbiAgICAvLyA+IG9wdGlvbiBpbnN0ZWFkIG9mIHJlbHlpbmcgb24gdGhlIGRlZmF1bHQuXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2dpdGh1Yi9mZXRjaCNjYXZlYXRzXG4gICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG4gIH0pLnRoZW4oKHJlcykgPT4ge1xuICAgIGlmICghcmVzLm9rKSB7XG4gICAgICBpZiAoYXR0ZW1wdHMgPiAxICYmIHJlcy5zdGF0dXMgPj0gNTAwKSB7XG4gICAgICAgIHJldHVybiBmZXRjaFJldHJ5KHVybCwgYXR0ZW1wdHMgLSAxKVxuICAgICAgfVxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKVxuICAgIH1cblxuICAgIHJldHVybiByZXMuanNvbigpXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGZldGNoTmV4dERhdGEoZGF0YUhyZWY6IHN0cmluZywgaXNTZXJ2ZXJSZW5kZXI6IGJvb2xlYW4pIHtcbiAgcmV0dXJuIGZldGNoUmV0cnkoZGF0YUhyZWYsIGlzU2VydmVyUmVuZGVyID8gMyA6IDEpLmNhdGNoKChlcnI6IEVycm9yKSA9PiB7XG4gICAgLy8gV2Ugc2hvdWxkIG9ubHkgdHJpZ2dlciBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb24gaWYgdGhpcyB3YXMgY2F1c2VkXG4gICAgLy8gb24gYSBjbGllbnQtc2lkZSB0cmFuc2l0aW9uLiBPdGhlcndpc2UsIHdlJ2QgZ2V0IGludG8gYW4gaW5maW5pdGVcbiAgICAvLyBsb29wLlxuICAgIGlmICghaXNTZXJ2ZXJSZW5kZXIpIHtcbiAgICAgIDsoZXJyIGFzIGFueSkuY29kZSA9ICdQQUdFX0xPQURfRVJST1InXG4gICAgfVxuICAgIHRocm93IGVyclxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb3V0ZXIgaW1wbGVtZW50cyBCYXNlUm91dGVyIHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG5cbiAgLyoqXG4gICAqIE1hcCBvZiBhbGwgY29tcG9uZW50cyBsb2FkZWQgaW4gYFJvdXRlcmBcbiAgICovXG4gIGNvbXBvbmVudHM6IHsgW3BhdGhuYW1lOiBzdHJpbmddOiBSb3V0ZUluZm8gfVxuICAvLyBTdGF0aWMgRGF0YSBDYWNoZVxuICBzZGM6IHsgW2FzUGF0aDogc3RyaW5nXTogb2JqZWN0IH0gPSB7fVxuICBzdWI6IFN1YnNjcmlwdGlvblxuICBjbGM6IENvbXBvbmVudExvYWRDYW5jZWxcbiAgcGFnZUxvYWRlcjogYW55XG4gIF9icHM6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgfCB1bmRlZmluZWRcbiAgZXZlbnRzOiBNaXR0RW1pdHRlclxuICBfd3JhcEFwcDogKEFwcDogQ29tcG9uZW50VHlwZSkgPT4gYW55XG4gIGlzU3NyOiBib29sZWFuXG4gIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgX2luRmxpZ2h0Um91dGU/OiBzdHJpbmdcblxuICBzdGF0aWMgZXZlbnRzOiBNaXR0RW1pdHRlciA9IG1pdHQoKVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAge1xuICAgICAgaW5pdGlhbFByb3BzLFxuICAgICAgcGFnZUxvYWRlcixcbiAgICAgIEFwcCxcbiAgICAgIHdyYXBBcHAsXG4gICAgICBDb21wb25lbnQsXG4gICAgICBlcnIsXG4gICAgICBzdWJzY3JpcHRpb24sXG4gICAgICBpc0ZhbGxiYWNrLFxuICAgIH06IHtcbiAgICAgIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uXG4gICAgICBpbml0aWFsUHJvcHM6IGFueVxuICAgICAgcGFnZUxvYWRlcjogYW55XG4gICAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgICAgIEFwcDogQ29tcG9uZW50VHlwZVxuICAgICAgd3JhcEFwcDogKEFwcDogQ29tcG9uZW50VHlwZSkgPT4gYW55XG4gICAgICBlcnI/OiBFcnJvclxuICAgICAgaXNGYWxsYmFjazogYm9vbGVhblxuICAgIH1cbiAgKSB7XG4gICAgLy8gcmVwcmVzZW50cyB0aGUgY3VycmVudCBjb21wb25lbnQga2V5XG4gICAgdGhpcy5yb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuXG4gICAgLy8gc2V0IHVwIHRoZSBjb21wb25lbnQgY2FjaGUgKGJ5IHJvdXRlIGtleXMpXG4gICAgdGhpcy5jb21wb25lbnRzID0ge31cbiAgICAvLyBXZSBzaG91bGQgbm90IGtlZXAgdGhlIGNhY2hlLCBpZiB0aGVyZSdzIGFuIGVycm9yXG4gICAgLy8gT3RoZXJ3aXNlLCB0aGlzIGNhdXNlIGlzc3VlcyB3aGVuIHdoZW4gZ29pbmcgYmFjayBhbmRcbiAgICAvLyBjb21lIGFnYWluIHRvIHRoZSBlcnJvcmVkIHBhZ2UuXG4gICAgaWYgKHBhdGhuYW1lICE9PSAnL19lcnJvcicpIHtcbiAgICAgIHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSA9IHtcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBwcm9wczogaW5pdGlhbFByb3BzLFxuICAgICAgICBlcnIsXG4gICAgICAgIF9fTl9TU0c6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTRyxcbiAgICAgICAgX19OX1NTUDogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NQLFxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuY29tcG9uZW50c1snL19hcHAnXSA9IHsgQ29tcG9uZW50OiBBcHAgfVxuXG4gICAgLy8gQmFja3dhcmRzIGNvbXBhdCBmb3IgUm91dGVyLnJvdXRlci5ldmVudHNcbiAgICAvLyBUT0RPOiBTaG91bGQgYmUgcmVtb3ZlIHRoZSBmb2xsb3dpbmcgbWFqb3IgdmVyc2lvbiBhcyBpdCB3YXMgbmV2ZXIgZG9jdW1lbnRlZFxuICAgIHRoaXMuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gICAgdGhpcy5wYWdlTG9hZGVyID0gcGFnZUxvYWRlclxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIC8vIGlmIGF1dG8gcHJlcmVuZGVyZWQgYW5kIGR5bmFtaWMgcm91dGUgd2FpdCB0byB1cGRhdGUgYXNQYXRoXG4gICAgLy8gdW50aWwgYWZ0ZXIgbW91bnQgdG8gcHJldmVudCBoeWRyYXRpb24gbWlzbWF0Y2hcbiAgICB0aGlzLmFzUGF0aCA9XG4gICAgICAvLyBAdHMtaWdub3JlIHRoaXMgaXMgdGVtcG9yYXJpbHkgZ2xvYmFsIChhdHRhY2hlZCB0byB3aW5kb3cpXG4gICAgICBpc0R5bmFtaWNSb3V0ZShwYXRobmFtZSkgJiYgX19ORVhUX0RBVEFfXy5hdXRvRXhwb3J0ID8gcGF0aG5hbWUgOiBhc1xuICAgIHRoaXMuYmFzZVBhdGggPSBiYXNlUGF0aFxuICAgIHRoaXMuc3ViID0gc3Vic2NyaXB0aW9uXG4gICAgdGhpcy5jbGMgPSBudWxsXG4gICAgdGhpcy5fd3JhcEFwcCA9IHdyYXBBcHBcbiAgICAvLyBtYWtlIHN1cmUgdG8gaWdub3JlIGV4dHJhIHBvcFN0YXRlIGluIHNhZmFyaSBvbiBuYXZpZ2F0aW5nXG4gICAgLy8gYmFjayBmcm9tIGV4dGVybmFsIHNpdGVcbiAgICB0aGlzLmlzU3NyID0gdHJ1ZVxuXG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gaXNGYWxsYmFja1xuXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBtYWtlIHN1cmUgXCJhc1wiIGRvZXNuJ3Qgc3RhcnQgd2l0aCBkb3VibGUgc2xhc2hlcyBvciBlbHNlIGl0IGNhblxuICAgICAgLy8gdGhyb3cgYW4gZXJyb3IgYXMgaXQncyBjb25zaWRlcmVkIGludmFsaWRcbiAgICAgIGlmIChhcy5zdWJzdHIoMCwgMikgIT09ICcvLycpIHtcbiAgICAgICAgLy8gaW4gb3JkZXIgZm9yIGBlLnN0YXRlYCB0byB3b3JrIG9uIHRoZSBgb25wb3BzdGF0ZWAgZXZlbnRcbiAgICAgICAgLy8gd2UgaGF2ZSB0byByZWdpc3RlciB0aGUgaW5pdGlhbCByb3V0ZSB1cG9uIGluaXRpYWxpemF0aW9uXG5cbiAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZSksIHF1ZXJ5IH0pLFxuICAgICAgICAgIGdldFVSTCgpXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgdGhpcy5vblBvcFN0YXRlKVxuXG4gICAgICAvLyBlbmFibGUgY3VzdG9tIHNjcm9sbCByZXN0b3JhdGlvbiBoYW5kbGluZyB3aGVuIGF2YWlsYWJsZVxuICAgICAgLy8gb3RoZXJ3aXNlIGZhbGxiYWNrIHRvIGJyb3dzZXIncyBkZWZhdWx0IGhhbmRsaW5nXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5zY3JvbGxSZXN0b3JhdGlvbiA9ICdtYW51YWwnXG5cbiAgICAgICAgICBsZXQgc2Nyb2xsRGVib3VuY2VUaW1lb3V0OiB1bmRlZmluZWQgfCBOb2RlSlMuVGltZW91dFxuXG4gICAgICAgICAgY29uc3QgZGVib3VuY2VkU2Nyb2xsU2F2ZSA9ICgpID0+IHtcbiAgICAgICAgICAgIGlmIChzY3JvbGxEZWJvdW5jZVRpbWVvdXQpIGNsZWFyVGltZW91dChzY3JvbGxEZWJvdW5jZVRpbWVvdXQpXG5cbiAgICAgICAgICAgIHNjcm9sbERlYm91bmNlVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCB7IHVybCwgYXM6IGN1ckFzLCBvcHRpb25zIH0gPSBoaXN0b3J5LnN0YXRlXG4gICAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgICAgICAgICAgdXJsLFxuICAgICAgICAgICAgICAgIGN1ckFzLFxuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMsIHtcbiAgICAgICAgICAgICAgICAgIF9OX1g6IHdpbmRvdy5zY3JvbGxYLFxuICAgICAgICAgICAgICAgICAgX05fWTogd2luZG93LnNjcm9sbFksXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSwgMTApXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGRlYm91bmNlZFNjcm9sbFNhdmUpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBAZGVwcmVjYXRlZCBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eSBldmVuIHRob3VnaCBpdCdzIGEgcHJpdmF0ZSBtZXRob2QuXG4gIHN0YXRpYyBfcmV3cml0ZVVybEZvck5leHRFeHBvcnQodXJsOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfRVhQT1JUX1RSQUlMSU5HX1NMQVNIKSB7XG4gICAgICBjb25zdCByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCA9IHJlcXVpcmUoJy4vcmV3cml0ZS11cmwtZm9yLWV4cG9ydCcpXG4gICAgICAgIC5yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydFxuICAgICAgcmV0dXJuIHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0KHVybClcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHVybFxuICAgIH1cbiAgfVxuXG4gIG9uUG9wU3RhdGUgPSAoZTogUG9wU3RhdGVFdmVudCk6IHZvaWQgPT4ge1xuICAgIGlmICghZS5zdGF0ZSkge1xuICAgICAgLy8gV2UgZ2V0IHN0YXRlIGFzIHVuZGVmaW5lZCBmb3IgdHdvIHJlYXNvbnMuXG4gICAgICAvLyAgMS4gV2l0aCBvbGRlciBzYWZhcmkgKDwgOCkgYW5kIG9sZGVyIGNocm9tZSAoPCAzNClcbiAgICAgIC8vICAyLiBXaGVuIHRoZSBVUkwgY2hhbmdlZCB3aXRoICNcbiAgICAgIC8vXG4gICAgICAvLyBJbiB0aGUgYm90aCBjYXNlcywgd2UgZG9uJ3QgbmVlZCB0byBwcm9jZWVkIGFuZCBjaGFuZ2UgdGhlIHJvdXRlLlxuICAgICAgLy8gKGFzIGl0J3MgYWxyZWFkeSBjaGFuZ2VkKVxuICAgICAgLy8gQnV0IHdlIGNhbiBzaW1wbHkgcmVwbGFjZSB0aGUgc3RhdGUgd2l0aCB0aGUgbmV3IGNoYW5nZXMuXG4gICAgICAvLyBBY3R1YWxseSwgZm9yICgxKSB3ZSBkb24ndCBuZWVkIHRvIG5vdGhpbmcuIEJ1dCBpdCdzIGhhcmQgdG8gZGV0ZWN0IHRoYXQgZXZlbnQuXG4gICAgICAvLyBTbywgZG9pbmcgdGhlIGZvbGxvd2luZyBmb3IgKDEpIGRvZXMgbm8gaGFybS5cbiAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSB0aGlzXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUpLCBxdWVyeSB9KSxcbiAgICAgICAgZ2V0VVJMKClcbiAgICAgIClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHsgdXJsLCBhcywgb3B0aW9ucywgX19OIH0gPSBlLnN0YXRlXG4gICAgaWYgKCFfX04pIHtcbiAgICAgIC8vIHRoaXMgaGlzdG9yeSBzdGF0ZSB3YXNuJ3QgY3JlYXRlZCBieSBuZXh0LmpzIHNvIGl0IGNhbiBiZSBpZ25vcmVkXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICAvLyBNYWtlIHN1cmUgd2UgZG9uJ3QgcmUtcmVuZGVyIG9uIGluaXRpYWwgbG9hZCxcbiAgICAvLyBjYW4gYmUgY2F1c2VkIGJ5IG5hdmlnYXRpbmcgYmFjayBmcm9tIGFuIGV4dGVybmFsIHNpdGVcbiAgICBpZiAodGhpcy5pc1NzciAmJiBhcyA9PT0gdGhpcy5hc1BhdGggJiYgcGF0aG5hbWUgPT09IHRoaXMucGF0aG5hbWUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIElmIHRoZSBkb3duc3RyZWFtIGFwcGxpY2F0aW9uIHJldHVybnMgZmFsc3ksIHJldHVybi5cbiAgICAvLyBUaGV5IHdpbGwgdGhlbiBiZSByZXNwb25zaWJsZSBmb3IgaGFuZGxpbmcgdGhlIGV2ZW50LlxuICAgIGlmICh0aGlzLl9icHMgJiYgIXRoaXMuX2JwcyhlLnN0YXRlKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICh0eXBlb2YgdXJsID09PSAndW5kZWZpbmVkJyB8fCB0eXBlb2YgYXMgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAnYHBvcHN0YXRlYCBldmVudCB0cmlnZ2VyZWQgYnV0IGBldmVudC5zdGF0ZWAgZGlkIG5vdCBoYXZlIGB1cmxgIG9yIGBhc2AgaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvcG9wc3RhdGUtc3RhdGUtZW1wdHknXG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5jaGFuZ2UoJ3JlcGxhY2VTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICB1cGRhdGUocm91dGU6IHN0cmluZywgbW9kOiBhbnkpIHtcbiAgICBjb25zdCBDb21wb25lbnQ6IENvbXBvbmVudFR5cGUgPSBtb2QuZGVmYXVsdCB8fCBtb2RcbiAgICBjb25zdCBkYXRhID0gdGhpcy5jb21wb25lbnRzW3JvdXRlXVxuICAgIGlmICghZGF0YSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBDYW5ub3QgdXBkYXRlIHVuYXZhaWxhYmxlIHJvdXRlOiAke3JvdXRlfWApXG4gICAgfVxuXG4gICAgY29uc3QgbmV3RGF0YSA9IE9iamVjdC5hc3NpZ24oe30sIGRhdGEsIHtcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIF9fTl9TU0c6IG1vZC5fX05fU1NHLFxuICAgICAgX19OX1NTUDogbW9kLl9fTl9TU1AsXG4gICAgfSlcbiAgICB0aGlzLmNvbXBvbmVudHNbcm91dGVdID0gbmV3RGF0YVxuXG4gICAgLy8gcGFnZXMvX2FwcC5qcyB1cGRhdGVkXG4gICAgaWYgKHJvdXRlID09PSAnL19hcHAnKSB7XG4gICAgICB0aGlzLm5vdGlmeSh0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0pXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAocm91dGUgPT09IHRoaXMucm91dGUpIHtcbiAgICAgIHRoaXMubm90aWZ5KG5ld0RhdGEpXG4gICAgfVxuICB9XG5cbiAgcmVsb2FkKCk6IHZvaWQge1xuICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxuICB9XG5cbiAgLyoqXG4gICAqIEdvIGJhY2sgaW4gaGlzdG9yeVxuICAgKi9cbiAgYmFjaygpIHtcbiAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKClcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGBwdXNoU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcHVzaCh1cmw6IFVybCwgYXM6IFVybCA9IHVybCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgOyh7IHVybCwgYXMgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSlcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3B1c2hTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcmVwbGFjZVN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHJlcGxhY2UodXJsOiBVcmwsIGFzOiBVcmwgPSB1cmwsIG9wdGlvbnMgPSB7fSkge1xuICAgIDsoeyB1cmwsIGFzIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpXG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgYXN5bmMgY2hhbmdlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhczogc3RyaW5nLFxuICAgIG9wdGlvbnM6IGFueVxuICApOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICBpZiAoIW9wdGlvbnMuX2gpIHtcbiAgICAgIHRoaXMuaXNTc3IgPSBmYWxzZVxuICAgIH1cbiAgICAvLyBtYXJraW5nIHJvdXRlIGNoYW5nZXMgYXMgYSBuYXZpZ2F0aW9uIHN0YXJ0IGVudHJ5XG4gICAgaWYgKFNUKSB7XG4gICAgICBwZXJmb3JtYW5jZS5tYXJrKCdyb3V0ZUNoYW5nZScpXG4gICAgfVxuXG4gICAgLy8gQWRkIHRoZSBlbmRpbmcgc2xhc2ggdG8gdGhlIHBhdGhzLiBTbywgd2UgY2FuIHNlcnZlIHRoZVxuICAgIC8vIFwiPHBhZ2U+L2luZGV4Lmh0bWxcIiBkaXJlY3RseSBmb3IgdGhlIFNTUiBwYWdlLlxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfRVhQT1JUX1RSQUlMSU5HX1NMQVNIKSB7XG4gICAgICBjb25zdCByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCA9IHJlcXVpcmUoJy4vcmV3cml0ZS11cmwtZm9yLWV4cG9ydCcpXG4gICAgICAgIC5yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydFxuICAgICAgLy8gQHRzLWlnbm9yZSB0aGlzIGlzIHRlbXBvcmFyaWx5IGdsb2JhbCAoYXR0YWNoZWQgdG8gd2luZG93KVxuICAgICAgaWYgKF9fTkVYVF9EQVRBX18ubmV4dEV4cG9ydCkge1xuICAgICAgICBhcyA9IHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0KGFzKVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLl9pbkZsaWdodFJvdXRlKSB7XG4gICAgICB0aGlzLmFib3J0Q29tcG9uZW50TG9hZCh0aGlzLl9pbkZsaWdodFJvdXRlKVxuICAgIH1cblxuICAgIGNvbnN0IGNsZWFuZWRBcyA9IGRlbEJhc2VQYXRoKGFzKVxuICAgIHRoaXMuX2luRmxpZ2h0Um91dGUgPSBhc1xuXG4gICAgLy8gSWYgdGhlIHVybCBjaGFuZ2UgaXMgb25seSByZWxhdGVkIHRvIGEgaGFzaCBjaGFuZ2VcbiAgICAvLyBXZSBzaG91bGQgbm90IHByb2NlZWQuIFdlIHNob3VsZCBvbmx5IGNoYW5nZSB0aGUgc3RhdGUuXG5cbiAgICAvLyBXQVJOSU5HOiBgX2hgIGlzIGFuIGludGVybmFsIG9wdGlvbiBmb3IgaGFuZGluZyBOZXh0LmpzIGNsaWVudC1zaWRlXG4gICAgLy8gaHlkcmF0aW9uLiBZb3VyIGFwcCBzaG91bGQgX25ldmVyXyB1c2UgdGhpcyBwcm9wZXJ0eS4gSXQgbWF5IGNoYW5nZSBhdFxuICAgIC8vIGFueSB0aW1lIHdpdGhvdXQgbm90aWNlLlxuICAgIGlmICghb3B0aW9ucy5faCAmJiB0aGlzLm9ubHlBSGFzaENoYW5nZShjbGVhbmVkQXMpKSB7XG4gICAgICB0aGlzLmFzUGF0aCA9IGNsZWFuZWRBc1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlU3RhcnQnLCBhcylcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKVxuICAgICAgdGhpcy5zY3JvbGxUb0hhc2goY2xlYW5lZEFzKVxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlQ29tcGxldGUnLCBhcylcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgY29uc3QgcGFyc2VkID0gdHJ5UGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICBpZiAoIXBhcnNlZCkgcmV0dXJuIGZhbHNlXG5cbiAgICBsZXQgeyBwYXRobmFtZSwgc2VhcmNoUGFyYW1zIH0gPSBwYXJzZWRcbiAgICBjb25zdCBxdWVyeSA9IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoc2VhcmNoUGFyYW1zKVxuXG4gICAgLy8gdXJsIGFuZCBhcyBzaG91bGQgYWx3YXlzIGJlIHByZWZpeGVkIHdpdGggYmFzZVBhdGggYnkgdGhpc1xuICAgIC8vIHBvaW50IGJ5IGVpdGhlciBuZXh0L2xpbmsgb3Igcm91dGVyLnB1c2gvcmVwbGFjZSBzbyBzdHJpcCB0aGVcbiAgICAvLyBiYXNlUGF0aCBmcm9tIHRoZSBwYXRobmFtZSB0byBtYXRjaCB0aGUgcGFnZXMgZGlyIDEtdG8tMVxuICAgIHBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgID8gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goZGVsQmFzZVBhdGgocGF0aG5hbWUpKVxuICAgICAgOiBwYXRobmFtZVxuXG4gICAgLy8gSWYgYXNrZWQgdG8gY2hhbmdlIHRoZSBjdXJyZW50IFVSTCB3ZSBzaG91bGQgcmVsb2FkIHRoZSBjdXJyZW50IHBhZ2VcbiAgICAvLyAobm90IGxvY2F0aW9uLnJlbG9hZCgpIGJ1dCByZWxvYWQgZ2V0SW5pdGlhbFByb3BzIGFuZCBvdGhlciBOZXh0LmpzIHN0dWZmcylcbiAgICAvLyBXZSBhbHNvIG5lZWQgdG8gc2V0IHRoZSBtZXRob2QgPSByZXBsYWNlU3RhdGUgYWx3YXlzXG4gICAgLy8gYXMgdGhpcyBzaG91bGQgbm90IGdvIGludG8gdGhlIGhpc3RvcnkgKFRoYXQncyBob3cgYnJvd3NlcnMgd29yaylcbiAgICAvLyBXZSBzaG91bGQgY29tcGFyZSB0aGUgbmV3IGFzUGF0aCB0byB0aGUgY3VycmVudCBhc1BhdGgsIG5vdCB0aGUgdXJsXG4gICAgaWYgKCF0aGlzLnVybElzTmV3KGNsZWFuZWRBcykpIHtcbiAgICAgIG1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnXG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcbiAgICBjb25zdCB7IHNoYWxsb3cgPSBmYWxzZSB9ID0gb3B0aW9uc1xuXG4gICAgaWYgKGlzRHluYW1pY1JvdXRlKHJvdXRlKSkge1xuICAgICAgY29uc3QgeyBwYXRobmFtZTogYXNQYXRobmFtZSB9ID0gcGFyc2VSZWxhdGl2ZVVybChjbGVhbmVkQXMpXG4gICAgICBjb25zdCByb3V0ZVJlZ2V4ID0gZ2V0Um91dGVSZWdleChyb3V0ZSlcbiAgICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleCkoYXNQYXRobmFtZSlcbiAgICAgIGlmICghcm91dGVNYXRjaCkge1xuICAgICAgICBjb25zdCBtaXNzaW5nUGFyYW1zID0gT2JqZWN0LmtleXMocm91dGVSZWdleC5ncm91cHMpLmZpbHRlcihcbiAgICAgICAgICAocGFyYW0pID0+ICFxdWVyeVtwYXJhbV1cbiAgICAgICAgKVxuXG4gICAgICAgIGlmIChtaXNzaW5nUGFyYW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgICBgTWlzbWF0Y2hpbmcgXFxgYXNcXGAgYW5kIFxcYGhyZWZcXGAgZmFpbGVkIHRvIG1hbnVhbGx5IHByb3ZpZGUgYCArXG4gICAgICAgICAgICAgICAgYHRoZSBwYXJhbXM6ICR7bWlzc2luZ1BhcmFtcy5qb2luKFxuICAgICAgICAgICAgICAgICAgJywgJ1xuICAgICAgICAgICAgICAgICl9IGluIHRoZSBcXGBocmVmXFxgJ3MgXFxgcXVlcnlcXGBgXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgYFRoZSBwcm92aWRlZCBcXGBhc1xcYCB2YWx1ZSAoJHthc1BhdGhuYW1lfSkgaXMgaW5jb21wYXRpYmxlIHdpdGggdGhlIFxcYGhyZWZcXGAgdmFsdWUgKCR7cm91dGV9KS4gYCArXG4gICAgICAgICAgICAgIGBSZWFkIG1vcmU6IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2luY29tcGF0aWJsZS1ocmVmLWFzYFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gTWVyZ2UgcGFyYW1zIGludG8gYHF1ZXJ5YCwgb3ZlcndyaXRpbmcgYW55IHNwZWNpZmllZCBpbiBzZWFyY2hcbiAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeSwgcm91dGVNYXRjaClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlU3RhcnQnLCBhcylcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCByb3V0ZUluZm8gPSBhd2FpdCB0aGlzLmdldFJvdXRlSW5mbyhcbiAgICAgICAgcm91dGUsXG4gICAgICAgIHBhdGhuYW1lLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgYXMsXG4gICAgICAgIHNoYWxsb3dcbiAgICAgIClcbiAgICAgIGNvbnN0IHsgZXJyb3IgfSA9IHJvdXRlSW5mb1xuXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLCBhcylcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKVxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCBhcHBDb21wOiBhbnkgPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50XG4gICAgICAgIDsod2luZG93IGFzIGFueSkubmV4dC5pc1ByZXJlbmRlcmVkID1cbiAgICAgICAgICBhcHBDb21wLmdldEluaXRpYWxQcm9wcyA9PT0gYXBwQ29tcC5vcmlnR2V0SW5pdGlhbFByb3BzICYmXG4gICAgICAgICAgIShyb3V0ZUluZm8uQ29tcG9uZW50IGFzIGFueSkuZ2V0SW5pdGlhbFByb3BzXG4gICAgICB9XG5cbiAgICAgIGF3YWl0IHRoaXMuc2V0KHJvdXRlLCBwYXRobmFtZSEsIHF1ZXJ5LCBjbGVhbmVkQXMsIHJvdXRlSW5mbylcblxuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVycm9yLCBjbGVhbmVkQXMpXG4gICAgICAgIHRocm93IGVycm9yXG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiAmJiAnX05fWCcgaW4gb3B0aW9ucykge1xuICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbyhvcHRpb25zLl9OX1gsIG9wdGlvbnMuX05fWSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgYXMpXG5cbiAgICAgIHJldHVybiB0cnVlXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICAgIHRocm93IGVyclxuICAgIH1cbiAgfVxuXG4gIGNoYW5nZVN0YXRlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhczogc3RyaW5nLFxuICAgIG9wdGlvbnMgPSB7fVxuICApOiB2b2lkIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkgaXMgbm90IGF2YWlsYWJsZS5gKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeVttZXRob2RdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeS4ke21ldGhvZH0gaXMgbm90IGF2YWlsYWJsZWApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChtZXRob2QgIT09ICdwdXNoU3RhdGUnIHx8IGdldFVSTCgpICE9PSBhcykge1xuICAgICAgd2luZG93Lmhpc3RvcnlbbWV0aG9kXShcbiAgICAgICAge1xuICAgICAgICAgIHVybCxcbiAgICAgICAgICBhcyxcbiAgICAgICAgICBvcHRpb25zLFxuICAgICAgICAgIF9fTjogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgLy8gTW9zdCBicm93c2VycyBjdXJyZW50bHkgaWdub3JlcyB0aGlzIHBhcmFtZXRlciwgYWx0aG91Z2ggdGhleSBtYXkgdXNlIGl0IGluIHRoZSBmdXR1cmUuXG4gICAgICAgIC8vIFBhc3NpbmcgdGhlIGVtcHR5IHN0cmluZyBoZXJlIHNob3VsZCBiZSBzYWZlIGFnYWluc3QgZnV0dXJlIGNoYW5nZXMgdG8gdGhlIG1ldGhvZC5cbiAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hpc3RvcnkvcmVwbGFjZVN0YXRlXG4gICAgICAgICcnLFxuICAgICAgICBhc1xuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGhhbmRsZVJvdXRlSW5mb0Vycm9yKFxuICAgIGVycjogRXJyb3IgJiB7IGNvZGU6IGFueTsgY2FuY2VsbGVkOiBib29sZWFuIH0sXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogYW55LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgbG9hZEVycm9yRmFpbD86IGJvb2xlYW5cbiAgKTogUHJvbWlzZTxSb3V0ZUluZm8+IHtcbiAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgLy8gYnViYmxlIHVwIGNhbmNlbGxhdGlvbiBlcnJvcnNcbiAgICAgIHRocm93IGVyclxuICAgIH1cblxuICAgIGlmIChlcnIuY29kZSA9PT0gJ1BBR0VfTE9BRF9FUlJPUicgfHwgbG9hZEVycm9yRmFpbCkge1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyLCBhcylcblxuICAgICAgLy8gSWYgd2UgY2FuJ3QgbG9hZCB0aGUgcGFnZSBpdCBjb3VsZCBiZSBvbmUgb2YgZm9sbG93aW5nIHJlYXNvbnNcbiAgICAgIC8vICAxLiBQYWdlIGRvZXNuJ3QgZXhpc3RzXG4gICAgICAvLyAgMi4gUGFnZSBkb2VzIGV4aXN0IGluIGEgZGlmZmVyZW50IHpvbmVcbiAgICAgIC8vICAzLiBJbnRlcm5hbCBlcnJvciB3aGlsZSBsb2FkaW5nIHRoZSBwYWdlXG5cbiAgICAgIC8vIFNvLCBkb2luZyBhIGhhcmQgcmVsb2FkIGlzIHRoZSBwcm9wZXIgd2F5IHRvIGRlYWwgd2l0aCB0aGlzLlxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhc1xuXG4gICAgICAvLyBDaGFuZ2luZyB0aGUgVVJMIGRvZXNuJ3QgYmxvY2sgZXhlY3V0aW5nIHRoZSBjdXJyZW50IGNvZGUgcGF0aC5cbiAgICAgIC8vIFNvIGxldCdzIHRocm93IGEgY2FuY2VsbGF0aW9uIGVycm9yIHN0b3AgdGhlIHJvdXRpbmcgbG9naWMuXG4gICAgICB0aHJvdyBidWlsZENhbmNlbGxhdGlvbkVycm9yKClcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgeyBwYWdlOiBDb21wb25lbnQgfSA9IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoJy9fZXJyb3InKVxuICAgICAgY29uc3Qgcm91dGVJbmZvOiBSb3V0ZUluZm8gPSB7IENvbXBvbmVudCwgZXJyLCBlcnJvcjogZXJyIH1cblxuICAgICAgdHJ5IHtcbiAgICAgICAgcm91dGVJbmZvLnByb3BzID0gYXdhaXQgdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCB7XG4gICAgICAgICAgZXJyLFxuICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICB9IGFzIGFueSlcbiAgICAgIH0gY2F0Y2ggKGdpcEVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBlcnJvciBwYWdlIGBnZXRJbml0aWFsUHJvcHNgOiAnLCBnaXBFcnIpXG4gICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHt9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICB9IGNhdGNoIChyb3V0ZUluZm9FcnIpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKHJvdXRlSW5mb0VyciwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgdHJ1ZSlcbiAgICB9XG4gIH1cblxuICBhc3luYyBnZXRSb3V0ZUluZm8oXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBhbnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBzaGFsbG93OiBib29sZWFuID0gZmFsc2VcbiAgKTogUHJvbWlzZTxSb3V0ZUluZm8+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgY2FjaGVkUm91dGVJbmZvID0gdGhpcy5jb21wb25lbnRzW3JvdXRlXVxuXG4gICAgICBpZiAoc2hhbGxvdyAmJiBjYWNoZWRSb3V0ZUluZm8gJiYgdGhpcy5yb3V0ZSA9PT0gcm91dGUpIHtcbiAgICAgICAgcmV0dXJuIGNhY2hlZFJvdXRlSW5mb1xuICAgICAgfVxuXG4gICAgICBjb25zdCByb3V0ZUluZm8gPSBjYWNoZWRSb3V0ZUluZm9cbiAgICAgICAgPyBjYWNoZWRSb3V0ZUluZm9cbiAgICAgICAgOiBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KHJvdXRlKS50aGVuKFxuICAgICAgICAgICAgKHJlcykgPT5cbiAgICAgICAgICAgICAgKHtcbiAgICAgICAgICAgICAgICBDb21wb25lbnQ6IHJlcy5wYWdlLFxuICAgICAgICAgICAgICAgIF9fTl9TU0c6IHJlcy5tb2QuX19OX1NTRyxcbiAgICAgICAgICAgICAgICBfX05fU1NQOiByZXMubW9kLl9fTl9TU1AsXG4gICAgICAgICAgICAgIH0gYXMgUm91dGVJbmZvKVxuICAgICAgICAgIClcblxuICAgICAgY29uc3QgeyBDb21wb25lbnQsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mb1xuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCB7IGlzVmFsaWRFbGVtZW50VHlwZSB9ID0gcmVxdWlyZSgncmVhY3QtaXMnKVxuICAgICAgICBpZiAoIWlzVmFsaWRFbGVtZW50VHlwZShDb21wb25lbnQpKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgYFRoZSBkZWZhdWx0IGV4cG9ydCBpcyBub3QgYSBSZWFjdCBDb21wb25lbnQgaW4gcGFnZTogXCIke3BhdGhuYW1lfVwiYFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsZXQgZGF0YUhyZWY6IHN0cmluZyB8IHVuZGVmaW5lZFxuXG4gICAgICBpZiAoX19OX1NTRyB8fCBfX05fU1NQKSB7XG4gICAgICAgIGRhdGFIcmVmID0gdGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWUsIHF1ZXJ5IH0pLFxuICAgICAgICAgIGFzLFxuICAgICAgICAgIF9fTl9TU0dcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICBjb25zdCBwcm9wcyA9IGF3YWl0IHRoaXMuX2dldERhdGE8Um91dGVJbmZvPigoKSA9PlxuICAgICAgICBfX05fU1NHXG4gICAgICAgICAgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmISlcbiAgICAgICAgICA6IF9fTl9TU1BcbiAgICAgICAgICA/IHRoaXMuX2dldFNlcnZlckRhdGEoZGF0YUhyZWYhKVxuICAgICAgICAgIDogdGhpcy5nZXRJbml0aWFsUHJvcHMoXG4gICAgICAgICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgICAgICAgLy8gd2UgcHJvdmlkZSBBcHBUcmVlIGxhdGVyIHNvIHRoaXMgbmVlZHMgdG8gYmUgYGFueWBcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgICAgIGFzUGF0aDogYXMsXG4gICAgICAgICAgICAgIH0gYXMgYW55XG4gICAgICAgICAgICApXG4gICAgICApXG4gICAgICByb3V0ZUluZm8ucHJvcHMgPSBwcm9wc1xuICAgICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IHJvdXRlSW5mb1xuICAgICAgcmV0dXJuIHJvdXRlSW5mb1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3IoZXJyLCBwYXRobmFtZSwgcXVlcnksIGFzKVxuICAgIH1cbiAgfVxuXG4gIHNldChcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IGFueSxcbiAgICBhczogc3RyaW5nLFxuICAgIGRhdGE6IFJvdXRlSW5mb1xuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBmYWxzZVxuXG4gICAgdGhpcy5yb3V0ZSA9IHJvdXRlXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgdGhpcy5hc1BhdGggPSBhc1xuICAgIHJldHVybiB0aGlzLm5vdGlmeShkYXRhKVxuICB9XG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIHRvIGV4ZWN1dGUgYmVmb3JlIHJlcGxhY2luZyByb3V0ZXIgc3RhdGVcbiAgICogQHBhcmFtIGNiIGNhbGxiYWNrIHRvIGJlIGV4ZWN1dGVkXG4gICAqL1xuICBiZWZvcmVQb3BTdGF0ZShjYjogQmVmb3JlUG9wU3RhdGVDYWxsYmFjaykge1xuICAgIHRoaXMuX2JwcyA9IGNiXG4gIH1cblxuICBvbmx5QUhhc2hDaGFuZ2UoYXM6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGlmICghdGhpcy5hc1BhdGgpIHJldHVybiBmYWxzZVxuICAgIGNvbnN0IFtvbGRVcmxOb0hhc2gsIG9sZEhhc2hdID0gdGhpcy5hc1BhdGguc3BsaXQoJyMnKVxuICAgIGNvbnN0IFtuZXdVcmxOb0hhc2gsIG5ld0hhc2hdID0gYXMuc3BsaXQoJyMnKVxuXG4gICAgLy8gTWFrZXMgc3VyZSB3ZSBzY3JvbGwgdG8gdGhlIHByb3ZpZGVkIGhhc2ggaWYgdGhlIHVybC9oYXNoIGFyZSB0aGUgc2FtZVxuICAgIGlmIChuZXdIYXNoICYmIG9sZFVybE5vSGFzaCA9PT0gbmV3VXJsTm9IYXNoICYmIG9sZEhhc2ggPT09IG5ld0hhc2gpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIHVybHMgYXJlIGNoYW5nZSwgdGhlcmUncyBtb3JlIHRoYW4gYSBoYXNoIGNoYW5nZVxuICAgIGlmIChvbGRVcmxOb0hhc2ggIT09IG5ld1VybE5vSGFzaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGhhc2ggaGFzIGNoYW5nZWQsIHRoZW4gaXQncyBhIGhhc2ggb25seSBjaGFuZ2UuXG4gICAgLy8gVGhpcyBjaGVjayBpcyBuZWNlc3NhcnkgdG8gaGFuZGxlIGJvdGggdGhlIGVudGVyIGFuZFxuICAgIC8vIGxlYXZlIGhhc2ggPT09ICcnIGNhc2VzLiBUaGUgaWRlbnRpdHkgY2FzZSBmYWxscyB0aHJvdWdoXG4gICAgLy8gYW5kIGlzIHRyZWF0ZWQgYXMgYSBuZXh0IHJlbG9hZC5cbiAgICByZXR1cm4gb2xkSGFzaCAhPT0gbmV3SGFzaFxuICB9XG5cbiAgc2Nyb2xsVG9IYXNoKGFzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBbLCBoYXNoXSA9IGFzLnNwbGl0KCcjJylcbiAgICAvLyBTY3JvbGwgdG8gdG9wIGlmIHRoZSBoYXNoIGlzIGp1c3QgYCNgIHdpdGggbm8gdmFsdWVcbiAgICBpZiAoaGFzaCA9PT0gJycpIHtcbiAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gRmlyc3Qgd2UgY2hlY2sgaWYgdGhlIGVsZW1lbnQgYnkgaWQgaXMgZm91bmRcbiAgICBjb25zdCBpZEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaClcbiAgICBpZiAoaWRFbCkge1xuICAgICAgaWRFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgLy8gSWYgdGhlcmUncyBubyBlbGVtZW50IHdpdGggdGhlIGlkLCB3ZSBjaGVjayB0aGUgYG5hbWVgIHByb3BlcnR5XG4gICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgY29uc3QgbmFtZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoaGFzaClbMF1cbiAgICBpZiAobmFtZUVsKSB7XG4gICAgICBuYW1lRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgIH1cbiAgfVxuXG4gIHVybElzTmV3KGFzUGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYXNQYXRoICE9PSBhc1BhdGhcbiAgfVxuXG4gIC8qKlxuICAgKiBQcmVmZXRjaCBwYWdlIGNvZGUsIHlvdSBtYXkgd2FpdCBmb3IgdGhlIGRhdGEgZHVyaW5nIHBhZ2UgcmVuZGVyaW5nLlxuICAgKiBUaGlzIGZlYXR1cmUgb25seSB3b3JrcyBpbiBwcm9kdWN0aW9uIVxuICAgKiBAcGFyYW0gdXJsIHRoZSBocmVmIG9mIHByZWZldGNoZWQgcGFnZVxuICAgKiBAcGFyYW0gYXNQYXRoIHRoZSBhcyBwYXRoIG9mIHRoZSBwcmVmZXRjaGVkIHBhZ2VcbiAgICovXG4gIGFzeW5jIHByZWZldGNoKFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzUGF0aDogc3RyaW5nID0gdXJsLFxuICAgIG9wdGlvbnM6IFByZWZldGNoT3B0aW9ucyA9IHt9XG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IHBhcnNlZCA9IHRyeVBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgaWYgKCFwYXJzZWQpIHJldHVyblxuXG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gcGFyc2VkXG5cbiAgICAvLyBQcmVmZXRjaCBpcyBub3Qgc3VwcG9ydGVkIGluIGRldmVsb3BtZW50IG1vZGUgYmVjYXVzZSBpdCB3b3VsZCB0cmlnZ2VyIG9uLWRlbWFuZC1lbnRyaWVzXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG4gICAgYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgdGhpcy5wYWdlTG9hZGVyLnByZWZldGNoRGF0YSh1cmwsIGFzUGF0aCksXG4gICAgICB0aGlzLnBhZ2VMb2FkZXJbb3B0aW9ucy5wcmlvcml0eSA/ICdsb2FkUGFnZScgOiAncHJlZmV0Y2gnXShyb3V0ZSksXG4gICAgXSlcbiAgfVxuXG4gIGFzeW5jIGZldGNoQ29tcG9uZW50KHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPENvbXBvbmVudFJlcz4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICh0aGlzLmNsYyA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9KVxuXG4gICAgY29uc3QgY29tcG9uZW50UmVzdWx0ID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmxvYWRQYWdlKHJvdXRlKVxuXG4gICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgY29uc3QgZXJyb3I6IGFueSA9IG5ldyBFcnJvcihcbiAgICAgICAgYEFib3J0IGZldGNoaW5nIGNvbXBvbmVudCBmb3Igcm91dGU6IFwiJHtyb3V0ZX1cImBcbiAgICAgIClcbiAgICAgIGVycm9yLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgIHRocm93IGVycm9yXG4gICAgfVxuXG4gICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIH1cblxuICAgIHJldHVybiBjb21wb25lbnRSZXN1bHRcbiAgfVxuXG4gIF9nZXREYXRhPFQ+KGZuOiAoKSA9PiBQcm9taXNlPFQ+KTogUHJvbWlzZTxUPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH1cbiAgICB0aGlzLmNsYyA9IGNhbmNlbFxuICAgIHJldHVybiBmbigpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgICAgfVxuXG4gICAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICAgIGNvbnN0IGVycjogYW55ID0gbmV3IEVycm9yKCdMb2FkaW5nIGluaXRpYWwgcHJvcHMgY2FuY2VsbGVkJylcbiAgICAgICAgZXJyLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSlcbiAgfVxuXG4gIF9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4ge1xuICAgIGNvbnN0IHsgaHJlZjogY2FjaGVLZXkgfSA9IG5ldyBVUkwoZGF0YUhyZWYsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKVxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nICYmIHRoaXMuc2RjW2NhY2hlS2V5XSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLnNkY1tjYWNoZUtleV0pXG4gICAgfVxuICAgIHJldHVybiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICB0aGlzLnNkY1tjYWNoZUtleV0gPSBkYXRhXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U2VydmVyRGF0YShkYXRhSHJlZjogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcilcbiAgfVxuXG4gIGdldEluaXRpYWxQcm9wcyhcbiAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGUsXG4gICAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgKTogUHJvbWlzZTxhbnk+IHtcbiAgICBjb25zdCB7IENvbXBvbmVudDogQXBwIH0gPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ11cbiAgICBjb25zdCBBcHBUcmVlID0gdGhpcy5fd3JhcEFwcChBcHApXG4gICAgY3R4LkFwcFRyZWUgPSBBcHBUcmVlXG4gICAgcmV0dXJuIGxvYWRHZXRJbml0aWFsUHJvcHM8QXBwQ29udGV4dFR5cGU8Um91dGVyPj4oQXBwLCB7XG4gICAgICBBcHBUcmVlLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgcm91dGVyOiB0aGlzLFxuICAgICAgY3R4LFxuICAgIH0pXG4gIH1cblxuICBhYm9ydENvbXBvbmVudExvYWQoYXM6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNsYykge1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpLCBhcylcbiAgICAgIHRoaXMuY2xjKClcbiAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIH1cbiAgfVxuXG4gIG5vdGlmeShkYXRhOiBSb3V0ZUluZm8pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5zdWIoZGF0YSwgdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudClcbiAgfVxufVxuIiwiLy8gRm9ybWF0IGZ1bmN0aW9uIG1vZGlmaWVkIGZyb20gbm9kZWpzXG4vLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgZW5jb2RlIGFzIGVuY29kZVF1ZXJ5c3RyaW5nIH0gZnJvbSAncXVlcnlzdHJpbmcnXG5cbmNvbnN0IHNsYXNoZWRQcm90b2NvbHMgPSAvaHR0cHM/fGZ0cHxnb3BoZXJ8ZmlsZS9cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFVybCh1cmxPYmo6IFVybE9iamVjdCkge1xuICBsZXQgeyBhdXRoLCBob3N0bmFtZSB9ID0gdXJsT2JqXG4gIGxldCBwcm90b2NvbCA9IHVybE9iai5wcm90b2NvbCB8fCAnJ1xuICBsZXQgcGF0aG5hbWUgPSB1cmxPYmoucGF0aG5hbWUgfHwgJydcbiAgbGV0IGhhc2ggPSB1cmxPYmouaGFzaCB8fCAnJ1xuICBsZXQgcXVlcnkgPSB1cmxPYmoucXVlcnkgfHwgJydcbiAgbGV0IGhvc3Q6IHN0cmluZyB8IGZhbHNlID0gZmFsc2VcblxuICBhdXRoID0gYXV0aCA/IGVuY29kZVVSSUNvbXBvbmVudChhdXRoKS5yZXBsYWNlKC8lM0EvaSwgJzonKSArICdAJyA6ICcnXG5cbiAgaWYgKHVybE9iai5ob3N0KSB7XG4gICAgaG9zdCA9IGF1dGggKyB1cmxPYmouaG9zdFxuICB9IGVsc2UgaWYgKGhvc3RuYW1lKSB7XG4gICAgaG9zdCA9IGF1dGggKyAofmhvc3RuYW1lLmluZGV4T2YoJzonKSA/IGBbJHtob3N0bmFtZX1dYCA6IGhvc3RuYW1lKVxuICAgIGlmICh1cmxPYmoucG9ydCkge1xuICAgICAgaG9zdCArPSAnOicgKyB1cmxPYmoucG9ydFxuICAgIH1cbiAgfVxuXG4gIGlmIChxdWVyeSAmJiB0eXBlb2YgcXVlcnkgPT09ICdvYmplY3QnKSB7XG4gICAgLy8gcXVlcnkgPSAnJyArIG5ldyBVUkxTZWFyY2hQYXJhbXMocXVlcnkpO1xuICAgIHF1ZXJ5ID0gZW5jb2RlUXVlcnlzdHJpbmcocXVlcnkpXG4gIH1cblxuICBsZXQgc2VhcmNoID0gdXJsT2JqLnNlYXJjaCB8fCAocXVlcnkgJiYgYD8ke3F1ZXJ5fWApIHx8ICcnXG5cbiAgaWYgKHByb3RvY29sICYmIHByb3RvY29sLnN1YnN0cigtMSkgIT09ICc6JykgcHJvdG9jb2wgKz0gJzonXG5cbiAgaWYgKFxuICAgIHVybE9iai5zbGFzaGVzIHx8XG4gICAgKCghcHJvdG9jb2wgfHwgc2xhc2hlZFByb3RvY29scy50ZXN0KHByb3RvY29sKSkgJiYgaG9zdCAhPT0gZmFsc2UpXG4gICkge1xuICAgIGhvc3QgPSAnLy8nICsgKGhvc3QgfHwgJycpXG4gICAgaWYgKHBhdGhuYW1lICYmIHBhdGhuYW1lWzBdICE9PSAnLycpIHBhdGhuYW1lID0gJy8nICsgcGF0aG5hbWVcbiAgfSBlbHNlIGlmICghaG9zdCkge1xuICAgIGhvc3QgPSAnJ1xuICB9XG5cbiAgaWYgKGhhc2ggJiYgaGFzaFswXSAhPT0gJyMnKSBoYXNoID0gJyMnICsgaGFzaFxuICBpZiAoc2VhcmNoICYmIHNlYXJjaFswXSAhPT0gJz8nKSBzZWFyY2ggPSAnPycgKyBzZWFyY2hcblxuICBwYXRobmFtZSA9IHBhdGhuYW1lLnJlcGxhY2UoL1s/I10vZywgZW5jb2RlVVJJQ29tcG9uZW50KVxuICBzZWFyY2ggPSBzZWFyY2gucmVwbGFjZSgnIycsICclMjMnKVxuXG4gIHJldHVybiBgJHtwcm90b2NvbH0ke2hvc3R9JHtwYXRobmFtZX0ke3NlYXJjaH0ke2hhc2h9YFxufVxuIiwiLy8gSWRlbnRpZnkgL1twYXJhbV0vIGluIHJvdXRlIHN0cmluZ1xuY29uc3QgVEVTVF9ST1VURSA9IC9cXC9cXFtbXi9dKz9cXF0oPz1cXC98JCkvXG5cbmV4cG9ydCBmdW5jdGlvbiBpc0R5bmFtaWNSb3V0ZShyb3V0ZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBURVNUX1JPVVRFLnRlc3Qocm91dGUpXG59XG4iLCJjb25zdCBEVU1NWV9CQVNFID0gbmV3IFVSTCgnaHR0cDovL24nKVxuXG4vKipcbiAqIFBhcnNlcyBwYXRoLXJlbGF0aXZlIHVybHMgKGUuZy4gYC9oZWxsby93b3JsZD9mb289YmFyYCkuIElmIHVybCBpc24ndCBwYXRoLXJlbGF0aXZlXG4gKiAoZS5nLiBgLi9oZWxsb2ApIHRoZW4gYXQgbGVhc3QgYmFzZSBtdXN0IGJlLlxuICogQWJzb2x1dGUgdXJscyBhcmUgcmVqZWN0ZWQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVJlbGF0aXZlVXJsKHVybDogc3RyaW5nLCBiYXNlPzogc3RyaW5nKSB7XG4gIGNvbnN0IHJlc29sdmVkQmFzZSA9IGJhc2UgPyBuZXcgVVJMKGJhc2UsIERVTU1ZX0JBU0UpIDogRFVNTVlfQkFTRVxuICBjb25zdCB7IHBhdGhuYW1lLCBzZWFyY2hQYXJhbXMsIHNlYXJjaCwgaGFzaCwgaHJlZiwgb3JpZ2luIH0gPSBuZXcgVVJMKFxuICAgIHVybCxcbiAgICByZXNvbHZlZEJhc2VcbiAgKVxuICBpZiAob3JpZ2luICE9PSBEVU1NWV9CQVNFLm9yaWdpbikge1xuICAgIHRocm93IG5ldyBFcnJvcignaW52YXJpYW50OiBpbnZhbGlkIHJlbGF0aXZlIFVSTCcpXG4gIH1cbiAgcmV0dXJuIHtcbiAgICBwYXRobmFtZSxcbiAgICBzZWFyY2hQYXJhbXMsXG4gICAgc2VhcmNoLFxuICAgIGhhc2gsXG4gICAgaHJlZjogaHJlZi5zbGljZShEVU1NWV9CQVNFLm9yaWdpbi5sZW5ndGgpLFxuICB9XG59XG4iLCJpbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi9yb3V0ZS1yZWdleCdcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4OiBSZXR1cm5UeXBlPHR5cGVvZiBnZXRSb3V0ZVJlZ2V4Pikge1xuICBjb25zdCB7IHJlLCBncm91cHMgfSA9IHJvdXRlUmVnZXhcbiAgcmV0dXJuIChwYXRobmFtZTogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCkgPT4ge1xuICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSByZS5leGVjKHBhdGhuYW1lISlcbiAgICBpZiAoIXJvdXRlTWF0Y2gpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGNvbnN0IGRlY29kZSA9IChwYXJhbTogc3RyaW5nKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHBhcmFtKVxuICAgICAgfSBjYXRjaCAoXykge1xuICAgICAgICBjb25zdCBlcnI6IEVycm9yICYgeyBjb2RlPzogc3RyaW5nIH0gPSBuZXcgRXJyb3IoXG4gICAgICAgICAgJ2ZhaWxlZCB0byBkZWNvZGUgcGFyYW0nXG4gICAgICAgIClcbiAgICAgICAgZXJyLmNvZGUgPSAnREVDT0RFX0ZBSUxFRCdcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHBhcmFtczogeyBbcGFyYW1OYW1lOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9ID0ge31cblxuICAgIE9iamVjdC5rZXlzKGdyb3VwcykuZm9yRWFjaCgoc2x1Z05hbWU6IHN0cmluZykgPT4ge1xuICAgICAgY29uc3QgZyA9IGdyb3Vwc1tzbHVnTmFtZV1cbiAgICAgIGNvbnN0IG0gPSByb3V0ZU1hdGNoW2cucG9zXVxuICAgICAgaWYgKG0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBwYXJhbXNbc2x1Z05hbWVdID0gfm0uaW5kZXhPZignLycpXG4gICAgICAgICAgPyBtLnNwbGl0KCcvJykubWFwKChlbnRyeSkgPT4gZGVjb2RlKGVudHJ5KSlcbiAgICAgICAgICA6IGcucmVwZWF0XG4gICAgICAgICAgPyBbZGVjb2RlKG0pXVxuICAgICAgICAgIDogZGVjb2RlKG0pXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gcGFyYW1zXG4gIH1cbn1cbiIsImludGVyZmFjZSBHcm91cCB7XG4gIHBvczogbnVtYmVyXG4gIHJlcGVhdDogYm9vbGVhblxuICBvcHRpb25hbDogYm9vbGVhblxufVxuXG4vLyB0aGlzIGlzbid0IGltcG9ydGluZyB0aGUgZXNjYXBlLXN0cmluZy1yZWdleCBtb2R1bGVcbi8vIHRvIHJlZHVjZSBieXRlc1xuZnVuY3Rpb24gZXNjYXBlUmVnZXgoc3RyOiBzdHJpbmcpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9bfFxcXFx7fSgpW1xcXV4kKyo/Li1dL2csICdcXFxcJCYnKVxufVxuXG5mdW5jdGlvbiBwYXJzZVBhcmFtZXRlcihwYXJhbTogc3RyaW5nKSB7XG4gIGNvbnN0IG9wdGlvbmFsID0gcGFyYW0uc3RhcnRzV2l0aCgnWycpICYmIHBhcmFtLmVuZHNXaXRoKCddJylcbiAgaWYgKG9wdGlvbmFsKSB7XG4gICAgcGFyYW0gPSBwYXJhbS5zbGljZSgxLCAtMSlcbiAgfVxuICBjb25zdCByZXBlYXQgPSBwYXJhbS5zdGFydHNXaXRoKCcuLi4nKVxuICBpZiAocmVwZWF0KSB7XG4gICAgcGFyYW0gPSBwYXJhbS5zbGljZSgzKVxuICB9XG4gIHJldHVybiB7IGtleTogcGFyYW0sIHJlcGVhdCwgb3B0aW9uYWwgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVSZWdleChcbiAgbm9ybWFsaXplZFJvdXRlOiBzdHJpbmdcbik6IHtcbiAgcmU6IFJlZ0V4cFxuICBuYW1lZFJlZ2V4Pzogc3RyaW5nXG4gIHJvdXRlS2V5cz86IHsgW25hbWVkOiBzdHJpbmddOiBzdHJpbmcgfVxuICBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogR3JvdXAgfVxufSB7XG4gIGNvbnN0IHNlZ21lbnRzID0gKG5vcm1hbGl6ZWRSb3V0ZS5yZXBsYWNlKC9cXC8kLywgJycpIHx8ICcvJylcbiAgICAuc2xpY2UoMSlcbiAgICAuc3BsaXQoJy8nKVxuXG4gIGNvbnN0IGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiBHcm91cCB9ID0ge31cbiAgbGV0IGdyb3VwSW5kZXggPSAxXG4gIGNvbnN0IHBhcmFtZXRlcml6ZWRSb3V0ZSA9IHNlZ21lbnRzXG4gICAgLm1hcCgoc2VnbWVudCkgPT4ge1xuICAgICAgaWYgKHNlZ21lbnQuc3RhcnRzV2l0aCgnWycpICYmIHNlZ21lbnQuZW5kc1dpdGgoJ10nKSkge1xuICAgICAgICBjb25zdCB7IGtleSwgb3B0aW9uYWwsIHJlcGVhdCB9ID0gcGFyc2VQYXJhbWV0ZXIoc2VnbWVudC5zbGljZSgxLCAtMSkpXG4gICAgICAgIGdyb3Vwc1trZXldID0geyBwb3M6IGdyb3VwSW5kZXgrKywgcmVwZWF0LCBvcHRpb25hbCB9XG4gICAgICAgIHJldHVybiByZXBlYXQgPyAob3B0aW9uYWwgPyAnKD86LyguKz8pKT8nIDogJy8oLis/KScpIDogJy8oW14vXSs/KSdcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBgLyR7ZXNjYXBlUmVnZXgoc2VnbWVudCl9YFxuICAgICAgfVxuICAgIH0pXG4gICAgLmpvaW4oJycpXG5cbiAgLy8gZGVhZCBjb2RlIGVsaW1pbmF0ZSBmb3IgYnJvd3NlciBzaW5jZSBpdCdzIG9ubHkgbmVlZGVkXG4gIC8vIHdoaWxlIGdlbmVyYXRpbmcgcm91dGVzLW1hbmlmZXN0XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgIGxldCByb3V0ZUtleUNoYXJDb2RlID0gOTdcbiAgICBsZXQgcm91dGVLZXlDaGFyTGVuZ3RoID0gMVxuXG4gICAgLy8gYnVpbGRzIGEgbWluaW1hbCByb3V0ZUtleSB1c2luZyBvbmx5IGEteiBhbmQgbWluaW1hbCBudW1iZXIgb2YgY2hhcmFjdGVyc1xuICAgIGNvbnN0IGdldFNhZmVSb3V0ZUtleSA9ICgpID0+IHtcbiAgICAgIGxldCByb3V0ZUtleSA9ICcnXG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm91dGVLZXlDaGFyTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcm91dGVLZXkgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShyb3V0ZUtleUNoYXJDb2RlKVxuICAgICAgICByb3V0ZUtleUNoYXJDb2RlKytcblxuICAgICAgICBpZiAocm91dGVLZXlDaGFyQ29kZSA+IDEyMikge1xuICAgICAgICAgIHJvdXRlS2V5Q2hhckxlbmd0aCsrXG4gICAgICAgICAgcm91dGVLZXlDaGFyQ29kZSA9IDk3XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiByb3V0ZUtleVxuICAgIH1cblxuICAgIGNvbnN0IHJvdXRlS2V5czogeyBbbmFtZWQ6IHN0cmluZ106IHN0cmluZyB9ID0ge31cblxuICAgIGxldCBuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSA9IHNlZ21lbnRzXG4gICAgICAubWFwKChzZWdtZW50KSA9PiB7XG4gICAgICAgIGlmIChzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSAmJiBzZWdtZW50LmVuZHNXaXRoKCddJykpIHtcbiAgICAgICAgICBjb25zdCB7IGtleSwgb3B0aW9uYWwsIHJlcGVhdCB9ID0gcGFyc2VQYXJhbWV0ZXIoc2VnbWVudC5zbGljZSgxLCAtMSkpXG4gICAgICAgICAgLy8gcmVwbGFjZSBhbnkgbm9uLXdvcmQgY2hhcmFjdGVycyBzaW5jZSB0aGV5IGNhbiBicmVha1xuICAgICAgICAgIC8vIHRoZSBuYW1lZCByZWdleFxuICAgICAgICAgIGxldCBjbGVhbmVkS2V5ID0ga2V5LnJlcGxhY2UoL1xcVy9nLCAnJylcbiAgICAgICAgICBsZXQgaW52YWxpZEtleSA9IGZhbHNlXG5cbiAgICAgICAgICAvLyBjaGVjayBpZiB0aGUga2V5IGlzIHN0aWxsIGludmFsaWQgYW5kIGZhbGxiYWNrIHRvIHVzaW5nIGEga25vd25cbiAgICAgICAgICAvLyBzYWZlIGtleVxuICAgICAgICAgIGlmIChjbGVhbmVkS2V5Lmxlbmd0aCA9PT0gMCB8fCBjbGVhbmVkS2V5Lmxlbmd0aCA+IDMwKSB7XG4gICAgICAgICAgICBpbnZhbGlkS2V5ID0gdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoIWlzTmFOKHBhcnNlSW50KGNsZWFuZWRLZXkuc3Vic3RyKDAsIDEpKSkpIHtcbiAgICAgICAgICAgIGludmFsaWRLZXkgPSB0cnVlXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGludmFsaWRLZXkpIHtcbiAgICAgICAgICAgIGNsZWFuZWRLZXkgPSBnZXRTYWZlUm91dGVLZXkoKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJvdXRlS2V5c1tjbGVhbmVkS2V5XSA9IGtleVxuICAgICAgICAgIHJldHVybiByZXBlYXRcbiAgICAgICAgICAgID8gb3B0aW9uYWxcbiAgICAgICAgICAgICAgPyBgKD86Lyg/PCR7Y2xlYW5lZEtleX0+Lis/KSk/YFxuICAgICAgICAgICAgICA6IGAvKD88JHtjbGVhbmVkS2V5fT4uKz8pYFxuICAgICAgICAgICAgOiBgLyg/PCR7Y2xlYW5lZEtleX0+W14vXSs/KWBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWBcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5qb2luKCcnKVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHJlOiBuZXcgUmVnRXhwKGBeJHtwYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLFxuICAgICAgZ3JvdXBzLFxuICAgICAgcm91dGVLZXlzLFxuICAgICAgbmFtZWRSZWdleDogYF4ke25hbWVkUGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgLFxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcmU6IG5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksXG4gICAgZ3JvdXBzLFxuICB9XG59XG4iLCJpbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuXG5leHBvcnQgZnVuY3Rpb24gc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShcbiAgc2VhcmNoUGFyYW1zOiBVUkxTZWFyY2hQYXJhbXNcbik6IFBhcnNlZFVybFF1ZXJ5IHtcbiAgY29uc3QgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5ID0ge31cbiAgc2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHtcbiAgICBpZiAodHlwZW9mIHF1ZXJ5W2tleV0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBxdWVyeVtrZXldID0gdmFsdWVcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkocXVlcnlba2V5XSkpIHtcbiAgICAgIDsocXVlcnlba2V5XSBhcyBzdHJpbmdbXSkucHVzaCh2YWx1ZSlcbiAgICB9IGVsc2Uge1xuICAgICAgcXVlcnlba2V5XSA9IFtxdWVyeVtrZXldIGFzIHN0cmluZywgdmFsdWVdXG4gICAgfVxuICB9KVxuICByZXR1cm4gcXVlcnlcbn1cbiIsImltcG9ydCB7IEluY29taW5nTWVzc2FnZSwgU2VydmVyUmVzcG9uc2UgfSBmcm9tICdodHRwJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IGZvcm1hdFVybCB9IGZyb20gJy4vcm91dGVyL3V0aWxzL2Zvcm1hdC11cmwnXG5pbXBvcnQgeyBNYW5pZmVzdEl0ZW0gfSBmcm9tICcuLi9zZXJ2ZXIvbG9hZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciB9IGZyb20gJy4vcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IEVudiB9IGZyb20gJy4uLy4uL2xpYi9sb2FkLWVudi1jb25maWcnXG5pbXBvcnQgeyBCdWlsZE1hbmlmZXN0IH0gZnJvbSAnLi4vc2VydmVyL2dldC1wYWdlLWZpbGVzJ1xuXG4vKipcbiAqIFR5cGVzIHVzZWQgYnkgYm90aCBuZXh0IGFuZCBuZXh0LXNlcnZlclxuICovXG5cbmV4cG9ydCB0eXBlIE5leHRDb21wb25lbnRUeXBlPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQgPSBOZXh0UGFnZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPiA9IENvbXBvbmVudFR5cGU8UD4gJiB7XG4gIC8qKlxuICAgKiBVc2VkIGZvciBpbml0aWFsIHBhZ2UgbG9hZCBkYXRhIHBvcHVsYXRpb24uIERhdGEgcmV0dXJuZWQgZnJvbSBgZ2V0SW5pdGlhbFByb3BzYCBpcyBzZXJpYWxpemVkIHdoZW4gc2VydmVyIHJlbmRlcmVkLlxuICAgKiBNYWtlIHN1cmUgdG8gcmV0dXJuIHBsYWluIGBPYmplY3RgIHdpdGhvdXQgdXNpbmcgYERhdGVgLCBgTWFwYCwgYFNldGAuXG4gICAqIEBwYXJhbSBjdHggQ29udGV4dCBvZiBgcGFnZWBcbiAgICovXG4gIGdldEluaXRpYWxQcm9wcz8oY29udGV4dDogQyk6IElQIHwgUHJvbWlzZTxJUD5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIERvY3VtZW50Q29udGV4dCxcbiAgRG9jdW1lbnRJbml0aWFsUHJvcHMsXG4gIERvY3VtZW50UHJvcHNcbj4gJiB7XG4gIHJlbmRlckRvY3VtZW50KFxuICAgIERvY3VtZW50OiBEb2N1bWVudFR5cGUsXG4gICAgcHJvcHM6IERvY3VtZW50UHJvcHNcbiAgKTogUmVhY3QuUmVhY3RFbGVtZW50XG59XG5cbmV4cG9ydCB0eXBlIEFwcFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQXBwQ29udGV4dFR5cGUsXG4gIEFwcEluaXRpYWxQcm9wcyxcbiAgQXBwUHJvcHNUeXBlXG4+XG5cbmV4cG9ydCB0eXBlIEFwcFRyZWVUeXBlID0gQ29tcG9uZW50VHlwZTxcbiAgQXBwSW5pdGlhbFByb3BzICYgeyBbbmFtZTogc3RyaW5nXTogYW55IH1cbj5cblxuLyoqXG4gKiBXZWIgdml0YWxzIHByb3ZpZGVkIHRvIF9hcHAucmVwb3J0V2ViVml0YWxzIGJ5IENvcmUgV2ViIFZpdGFscyBwbHVnaW4gZGV2ZWxvcGVkIGJ5IEdvb2dsZSBDaHJvbWUgdGVhbS5cbiAqIGh0dHBzOi8vbmV4dGpzLm9yZy9ibG9nL25leHQtOS00I2ludGVncmF0ZWQtd2ViLXZpdGFscy1yZXBvcnRpbmdcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dFdlYlZpdGFsc01ldHJpYyA9IHtcbiAgaWQ6IHN0cmluZ1xuICBsYWJlbDogc3RyaW5nXG4gIG5hbWU6IHN0cmluZ1xuICBzdGFydFRpbWU6IG51bWJlclxuICB2YWx1ZTogbnVtYmVyXG59XG5cbmV4cG9ydCB0eXBlIEVuaGFuY2VyPEM+ID0gKENvbXBvbmVudDogQykgPT4gQ1xuXG5leHBvcnQgdHlwZSBDb21wb25lbnRzRW5oYW5jZXIgPVxuICB8IHtcbiAgICAgIGVuaGFuY2VBcHA/OiBFbmhhbmNlcjxBcHBUeXBlPlxuICAgICAgZW5oYW5jZUNvbXBvbmVudD86IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuICAgIH1cbiAgfCBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZVJlc3VsdCA9IHtcbiAgaHRtbDogc3RyaW5nXG4gIGhlYWQ/OiBBcnJheTxKU1guRWxlbWVudCB8IG51bGw+XG59XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2UgPSAoXG4gIG9wdGlvbnM/OiBDb21wb25lbnRzRW5oYW5jZXJcbikgPT4gUmVuZGVyUGFnZVJlc3VsdCB8IFByb21pc2U8UmVuZGVyUGFnZVJlc3VsdD5cblxuZXhwb3J0IHR5cGUgQmFzZUNvbnRleHQgPSB7XG4gIHJlcz86IFNlcnZlclJlc3BvbnNlXG4gIFtrOiBzdHJpbmddOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgTkVYVF9EQVRBID0ge1xuICBwcm9wczogYW55XG4gIHBhZ2U6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYnVpbGRJZDogc3RyaW5nXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIHJ1bnRpbWVDb25maWc/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9XG4gIG5leHRFeHBvcnQ/OiBib29sZWFuXG4gIGF1dG9FeHBvcnQ/OiBib29sZWFuXG4gIGlzRmFsbGJhY2s/OiBib29sZWFuXG4gIGR5bmFtaWNJZHM/OiBzdHJpbmdbXVxuICBlcnI/OiBFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9XG4gIGdzcD86IGJvb2xlYW5cbiAgZ3NzcD86IGJvb2xlYW5cbiAgY3VzdG9tU2VydmVyPzogYm9vbGVhblxuICBnaXA/OiBib29sZWFuXG4gIGFwcEdpcD86IGJvb2xlYW5cbn1cblxuLyoqXG4gKiBgTmV4dGAgY29udGV4dFxuICovXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgaW50ZXJmYWNlLW5hbWVcbmV4cG9ydCBpbnRlcmZhY2UgTmV4dFBhZ2VDb250ZXh0IHtcbiAgLyoqXG4gICAqIEVycm9yIG9iamVjdCBpZiBlbmNvdW50ZXJlZCBkdXJpbmcgcmVuZGVyaW5nXG4gICAqL1xuICBlcnI/OiAoRXJyb3IgJiB7IHN0YXR1c0NvZGU/OiBudW1iZXIgfSkgfCBudWxsXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVxdWVzdCBvYmplY3QuXG4gICAqL1xuICByZXE/OiBJbmNvbWluZ01lc3NhZ2VcbiAgLyoqXG4gICAqIGBIVFRQYCByZXNwb25zZSBvYmplY3QuXG4gICAqL1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICAvKipcbiAgICogUGF0aCBzZWN0aW9uIG9mIGBVUkxgLlxuICAgKi9cbiAgcGF0aG5hbWU6IHN0cmluZ1xuICAvKipcbiAgICogUXVlcnkgc3RyaW5nIHNlY3Rpb24gb2YgYFVSTGAgcGFyc2VkIGFzIGFuIG9iamVjdC5cbiAgICovXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICAvKipcbiAgICogYFN0cmluZ2Agb2YgdGhlIGFjdHVhbCBwYXRoIGluY2x1ZGluZyBxdWVyeS5cbiAgICovXG4gIGFzUGF0aD86IHN0cmluZ1xuICAvKipcbiAgICogYENvbXBvbmVudGAgdGhlIHRyZWUgb2YgdGhlIEFwcCB0byB1c2UgaWYgbmVlZGluZyB0byByZW5kZXIgc2VwYXJhdGVseVxuICAgKi9cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbn1cblxuZXhwb3J0IHR5cGUgQXBwQ29udGV4dFR5cGU8UiBleHRlbmRzIE5leHRSb3V0ZXIgPSBOZXh0Um91dGVyPiA9IHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQ+XG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG4gIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gIHJvdXRlcjogUlxufVxuXG5leHBvcnQgdHlwZSBBcHBJbml0aWFsUHJvcHMgPSB7XG4gIHBhZ2VQcm9wczogYW55XG59XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzVHlwZTxcbiAgUiBleHRlbmRzIE5leHRSb3V0ZXIgPSBOZXh0Um91dGVyLFxuICBQID0ge31cbj4gPSBBcHBJbml0aWFsUHJvcHMgJiB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0LCBhbnksIFA+XG4gIHJvdXRlcjogUlxuICBfX05fU1NHPzogYm9vbGVhblxuICBfX05fU1NQPzogYm9vbGVhblxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudENvbnRleHQgPSBOZXh0UGFnZUNvbnRleHQgJiB7XG4gIHJlbmRlclBhZ2U6IFJlbmRlclBhZ2Vcbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRJbml0aWFsUHJvcHMgPSBSZW5kZXJQYWdlUmVzdWx0ICYge1xuICBzdHlsZXM/OiBSZWFjdC5SZWFjdEVsZW1lbnRbXSB8IFJlYWN0LlJlYWN0RnJhZ21lbnRcbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRQcm9wcyA9IERvY3VtZW50SW5pdGlhbFByb3BzICYge1xuICBfX05FWFRfREFUQV9fOiBORVhUX0RBVEFcbiAgZGFuZ2Vyb3VzQXNQYXRoOiBzdHJpbmdcbiAgYnVpbGRNYW5pZmVzdDogQnVpbGRNYW5pZmVzdFxuICBhbXBQYXRoOiBzdHJpbmdcbiAgaW5BbXBNb2RlOiBib29sZWFuXG4gIGh5YnJpZEFtcDogYm9vbGVhblxuICBpc0RldmVsb3BtZW50OiBib29sZWFuXG4gIGZpbGVzOiBzdHJpbmdbXVxuICBkeW5hbWljSW1wb3J0czogTWFuaWZlc3RJdGVtW11cbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgY2Fub25pY2FsQmFzZTogc3RyaW5nXG4gIGhlYWRUYWdzOiBhbnlbXVxuICB1bnN0YWJsZV9ydW50aW1lSlM/OiBmYWxzZVxufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVxdWVzdFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5leHRBcGlSZXF1ZXN0IGV4dGVuZHMgSW5jb21pbmdNZXNzYWdlIHtcbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgcXVlcnlgIHZhbHVlcyBmcm9tIHVybFxuICAgKi9cbiAgcXVlcnk6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXVxuICB9XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYGNvb2tpZXNgIGZyb20gaGVhZGVyXG4gICAqL1xuICBjb29raWVzOiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nXG4gIH1cblxuICBib2R5OiBhbnlcblxuICBlbnY6IEVudlxuXG4gIHByZXZpZXc/OiBib29sZWFuXG4gIC8qKlxuICAgKiBQcmV2aWV3IGRhdGEgc2V0IG9uIHRoZSByZXF1ZXN0LCBpZiBhbnlcbiAgICogKi9cbiAgcHJldmlld0RhdGE/OiBhbnlcbn1cblxuLyoqXG4gKiBTZW5kIGJvZHkgb2YgcmVzcG9uc2VcbiAqL1xudHlwZSBTZW5kPFQ+ID0gKGJvZHk6IFQpID0+IHZvaWRcblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlc3BvbnNlXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlSZXNwb25zZTxUID0gYW55PiA9IFNlcnZlclJlc3BvbnNlICYge1xuICAvKipcbiAgICogU2VuZCBkYXRhIGBhbnlgIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIHNlbmQ6IFNlbmQ8VD5cbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBganNvbmAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAganNvbjogU2VuZDxUPlxuICBzdGF0dXM6IChzdGF0dXNDb2RlOiBudW1iZXIpID0+IE5leHRBcGlSZXNwb25zZTxUPlxuICByZWRpcmVjdCh1cmw6IHN0cmluZyk6IE5leHRBcGlSZXNwb25zZTxUPlxuICByZWRpcmVjdChzdGF0dXM6IG51bWJlciwgdXJsOiBzdHJpbmcpOiBOZXh0QXBpUmVzcG9uc2U8VD5cblxuICAvKipcbiAgICogU2V0IHByZXZpZXcgZGF0YSBmb3IgTmV4dC5qcycgcHJlcmVuZGVyIG1vZGVcbiAgICovXG4gIHNldFByZXZpZXdEYXRhOiAoXG4gICAgZGF0YTogb2JqZWN0IHwgc3RyaW5nLFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICAvKipcbiAgICAgICAqIFNwZWNpZmllcyB0aGUgbnVtYmVyIChpbiBzZWNvbmRzKSBmb3IgdGhlIHByZXZpZXcgc2Vzc2lvbiB0byBsYXN0IGZvci5cbiAgICAgICAqIFRoZSBnaXZlbiBudW1iZXIgd2lsbCBiZSBjb252ZXJ0ZWQgdG8gYW4gaW50ZWdlciBieSByb3VuZGluZyBkb3duLlxuICAgICAgICogQnkgZGVmYXVsdCwgbm8gbWF4aW11bSBhZ2UgaXMgc2V0IGFuZCB0aGUgcHJldmlldyBzZXNzaW9uIGZpbmlzaGVzXG4gICAgICAgKiB3aGVuIHRoZSBjbGllbnQgc2h1dHMgZG93biAoYnJvd3NlciBpcyBjbG9zZWQpLlxuICAgICAgICovXG4gICAgICBtYXhBZ2U/OiBudW1iZXJcbiAgICB9XG4gICkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIGNsZWFyUHJldmlld0RhdGE6ICgpID0+IE5leHRBcGlSZXNwb25zZTxUPlxufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgaGFuZGxlclxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpSGFuZGxlcjxUID0gYW55PiA9IChcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2U8VD5cbikgPT4gdm9pZCB8IFByb21pc2U8dm9pZD5cblxuLyoqXG4gKiBVdGlsc1xuICovXG5leHBvcnQgZnVuY3Rpb24gZXhlY09uY2U8VCBleHRlbmRzICguLi5hcmdzOiBhbnlbXSkgPT4gUmV0dXJuVHlwZTxUPj4oXG4gIGZuOiBUXG4pOiBUIHtcbiAgbGV0IHVzZWQgPSBmYWxzZVxuICBsZXQgcmVzdWx0OiBSZXR1cm5UeXBlPFQ+XG5cbiAgcmV0dXJuICgoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBpZiAoIXVzZWQpIHtcbiAgICAgIHVzZWQgPSB0cnVlXG4gICAgICByZXN1bHQgPSBmbiguLi5hcmdzKVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0XG4gIH0pIGFzIFRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldExvY2F0aW9uT3JpZ2luKCkge1xuICBjb25zdCB7IHByb3RvY29sLCBob3N0bmFtZSwgcG9ydCB9ID0gd2luZG93LmxvY2F0aW9uXG4gIHJldHVybiBgJHtwcm90b2NvbH0vLyR7aG9zdG5hbWV9JHtwb3J0ID8gJzonICsgcG9ydCA6ICcnfWBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFVSTCgpIHtcbiAgY29uc3QgeyBocmVmIH0gPSB3aW5kb3cubG9jYXRpb25cbiAgY29uc3Qgb3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICByZXR1cm4gaHJlZi5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERpc3BsYXlOYW1lPFA+KENvbXBvbmVudDogQ29tcG9uZW50VHlwZTxQPikge1xuICByZXR1cm4gdHlwZW9mIENvbXBvbmVudCA9PT0gJ3N0cmluZydcbiAgICA/IENvbXBvbmVudFxuICAgIDogQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNSZXNTZW50KHJlczogU2VydmVyUmVzcG9uc2UpIHtcbiAgcmV0dXJuIHJlcy5maW5pc2hlZCB8fCByZXMuaGVhZGVyc1NlbnRcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRHZXRJbml0aWFsUHJvcHM8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+KEFwcDogTmV4dENvbXBvbmVudFR5cGU8QywgSVAsIFA+LCBjdHg6IEMpOiBQcm9taXNlPElQPiB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKEFwcC5wcm90b3R5cGU/LmdldEluaXRpYWxQcm9wcykge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgIEFwcFxuICAgICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBpcyBkZWZpbmVkIGFzIGFuIGluc3RhbmNlIG1ldGhvZCAtIHZpc2l0IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2dldC1pbml0aWFsLXByb3BzLWFzLWFuLWluc3RhbmNlLW1ldGhvZCBmb3IgbW9yZSBpbmZvcm1hdGlvbi5gXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgICB9XG4gIH1cbiAgLy8gd2hlbiBjYWxsZWQgZnJvbSBfYXBwIGBjdHhgIGlzIG5lc3RlZCBpbiBgY3R4YFxuICBjb25zdCByZXMgPSBjdHgucmVzIHx8IChjdHguY3R4ICYmIGN0eC5jdHgucmVzKVxuXG4gIGlmICghQXBwLmdldEluaXRpYWxQcm9wcykge1xuICAgIGlmIChjdHguY3R4ICYmIGN0eC5Db21wb25lbnQpIHtcbiAgICAgIC8vIEB0cy1pZ25vcmUgcGFnZVByb3BzIGRlZmF1bHRcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBhZ2VQcm9wczogYXdhaXQgbG9hZEdldEluaXRpYWxQcm9wcyhjdHguQ29tcG9uZW50LCBjdHguY3R4KSxcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHt9IGFzIElQXG4gIH1cblxuICBjb25zdCBwcm9wcyA9IGF3YWl0IEFwcC5nZXRJbml0aWFsUHJvcHMoY3R4KVxuXG4gIGlmIChyZXMgJiYgaXNSZXNTZW50KHJlcykpIHtcbiAgICByZXR1cm4gcHJvcHNcbiAgfVxuXG4gIGlmICghcHJvcHMpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgIEFwcFxuICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgc2hvdWxkIHJlc29sdmUgdG8gYW4gb2JqZWN0LiBCdXQgZm91bmQgXCIke3Byb3BzfVwiIGluc3RlYWQuYFxuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoT2JqZWN0LmtleXMocHJvcHMpLmxlbmd0aCA9PT0gMCAmJiAhY3R4LmN0eCkge1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICBgJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgICBBcHBcbiAgICAgICAgKX0gcmV0dXJuZWQgYW4gZW1wdHkgb2JqZWN0IGZyb20gXFxgZ2V0SW5pdGlhbFByb3BzXFxgLiBUaGlzIGRlLW9wdGltaXplcyBhbmQgcHJldmVudHMgYXV0b21hdGljIHN0YXRpYyBvcHRpbWl6YXRpb24uIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2VtcHR5LW9iamVjdC1nZXRJbml0aWFsUHJvcHNgXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHByb3BzXG59XG5cbmV4cG9ydCBjb25zdCB1cmxPYmplY3RLZXlzID0gW1xuICAnYXV0aCcsXG4gICdoYXNoJyxcbiAgJ2hvc3QnLFxuICAnaG9zdG5hbWUnLFxuICAnaHJlZicsXG4gICdwYXRoJyxcbiAgJ3BhdGhuYW1lJyxcbiAgJ3BvcnQnLFxuICAncHJvdG9jb2wnLFxuICAncXVlcnknLFxuICAnc2VhcmNoJyxcbiAgJ3NsYXNoZXMnLFxuXVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0V2l0aFZhbGlkYXRpb24odXJsOiBVcmxPYmplY3QpOiBzdHJpbmcge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICBpZiAodXJsICE9PSBudWxsICYmIHR5cGVvZiB1cmwgPT09ICdvYmplY3QnKSB7XG4gICAgICBPYmplY3Qua2V5cyh1cmwpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBpZiAodXJsT2JqZWN0S2V5cy5pbmRleE9mKGtleSkgPT09IC0xKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgYFVua25vd24ga2V5IHBhc3NlZCB2aWEgdXJsT2JqZWN0IGludG8gdXJsLmZvcm1hdDogJHtrZXl9YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZm9ybWF0VXJsKHVybClcbn1cblxuZXhwb3J0IGNvbnN0IFNQID0gdHlwZW9mIHBlcmZvcm1hbmNlICE9PSAndW5kZWZpbmVkJ1xuZXhwb3J0IGNvbnN0IFNUID1cbiAgU1AgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1hcmsgPT09ICdmdW5jdGlvbicgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1lYXN1cmUgPT09ICdmdW5jdGlvbidcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9saW5rJylcbiIsIi8qKiBAbGljZW5zZSBSZWFjdCB2MTYuMTMuMVxuICogcmVhY3QtaXMuZGV2ZWxvcG1lbnQuanNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cblxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIChmdW5jdGlvbigpIHtcbid1c2Ugc3RyaWN0JztcblxuLy8gVGhlIFN5bWJvbCB1c2VkIHRvIHRhZyB0aGUgUmVhY3RFbGVtZW50LWxpa2UgdHlwZXMuIElmIHRoZXJlIGlzIG5vIG5hdGl2ZSBTeW1ib2xcbi8vIG5vciBwb2x5ZmlsbCwgdGhlbiBhIHBsYWluIG51bWJlciBpcyB1c2VkIGZvciBwZXJmb3JtYW5jZS5cbnZhciBoYXNTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5mb3I7XG52YXIgUkVBQ1RfRUxFTUVOVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZWxlbWVudCcpIDogMHhlYWM3O1xudmFyIFJFQUNUX1BPUlRBTF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucG9ydGFsJykgOiAweGVhY2E7XG52YXIgUkVBQ1RfRlJBR01FTlRfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmZyYWdtZW50JykgOiAweGVhY2I7XG52YXIgUkVBQ1RfU1RSSUNUX01PREVfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnN0cmljdF9tb2RlJykgOiAweGVhY2M7XG52YXIgUkVBQ1RfUFJPRklMRVJfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnByb2ZpbGVyJykgOiAweGVhZDI7XG52YXIgUkVBQ1RfUFJPVklERVJfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnByb3ZpZGVyJykgOiAweGVhY2Q7XG52YXIgUkVBQ1RfQ09OVEVYVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuY29udGV4dCcpIDogMHhlYWNlOyAvLyBUT0RPOiBXZSBkb24ndCB1c2UgQXN5bmNNb2RlIG9yIENvbmN1cnJlbnRNb2RlIGFueW1vcmUuIFRoZXkgd2VyZSB0ZW1wb3Jhcnlcbi8vICh1bnN0YWJsZSkgQVBJcyB0aGF0IGhhdmUgYmVlbiByZW1vdmVkLiBDYW4gd2UgcmVtb3ZlIHRoZSBzeW1ib2xzP1xuXG52YXIgUkVBQ1RfQVNZTkNfTU9ERV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuYXN5bmNfbW9kZScpIDogMHhlYWNmO1xudmFyIFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuY29uY3VycmVudF9tb2RlJykgOiAweGVhY2Y7XG52YXIgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmZvcndhcmRfcmVmJykgOiAweGVhZDA7XG52YXIgUkVBQ1RfU1VTUEVOU0VfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnN1c3BlbnNlJykgOiAweGVhZDE7XG52YXIgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc3VzcGVuc2VfbGlzdCcpIDogMHhlYWQ4O1xudmFyIFJFQUNUX01FTU9fVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0Lm1lbW8nKSA6IDB4ZWFkMztcbnZhciBSRUFDVF9MQVpZX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5sYXp5JykgOiAweGVhZDQ7XG52YXIgUkVBQ1RfQkxPQ0tfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmJsb2NrJykgOiAweGVhZDk7XG52YXIgUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmZ1bmRhbWVudGFsJykgOiAweGVhZDU7XG52YXIgUkVBQ1RfUkVTUE9OREVSX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5yZXNwb25kZXInKSA6IDB4ZWFkNjtcbnZhciBSRUFDVF9TQ09QRV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc2NvcGUnKSA6IDB4ZWFkNztcblxuZnVuY3Rpb24gaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpIHtcbiAgcmV0dXJuIHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJyB8fCAvLyBOb3RlOiBpdHMgdHlwZW9mIG1pZ2h0IGJlIG90aGVyIHRoYW4gJ3N5bWJvbCcgb3IgJ251bWJlcicgaWYgaXQncyBhIHBvbHlmaWxsLlxuICB0eXBlID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1BST0ZJTEVSX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSB8fCB0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgdHlwZSAhPT0gbnVsbCAmJiAodHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTEFaWV9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9QUk9WSURFUl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0NPTlRFWFRfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfUkVTUE9OREVSX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfU0NPUEVfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9CTE9DS19UWVBFKTtcbn1cblxuZnVuY3Rpb24gdHlwZU9mKG9iamVjdCkge1xuICBpZiAodHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiYgb2JqZWN0ICE9PSBudWxsKSB7XG4gICAgdmFyICQkdHlwZW9mID0gb2JqZWN0LiQkdHlwZW9mO1xuXG4gICAgc3dpdGNoICgkJHR5cGVvZikge1xuICAgICAgY2FzZSBSRUFDVF9FTEVNRU5UX1RZUEU6XG4gICAgICAgIHZhciB0eXBlID0gb2JqZWN0LnR5cGU7XG5cbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgY2FzZSBSRUFDVF9BU1lOQ19NT0RFX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX0ZSQUdNRU5UX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9QUk9GSUxFUl9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfU1RSSUNUX01PREVfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX1RZUEU6XG4gICAgICAgICAgICByZXR1cm4gdHlwZTtcblxuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICB2YXIgJCR0eXBlb2ZUeXBlID0gdHlwZSAmJiB0eXBlLiQkdHlwZW9mO1xuXG4gICAgICAgICAgICBzd2l0Y2ggKCQkdHlwZW9mVHlwZSkge1xuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0NPTlRFWFRfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0xBWllfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9NRU1PX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfUFJPVklERVJfVFlQRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gJCR0eXBlb2ZUeXBlO1xuXG4gICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuICQkdHlwZW9mO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgY2FzZSBSRUFDVF9QT1JUQUxfVFlQRTpcbiAgICAgICAgcmV0dXJuICQkdHlwZW9mO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWQ7XG59IC8vIEFzeW5jTW9kZSBpcyBkZXByZWNhdGVkIGFsb25nIHdpdGggaXNBc3luY01vZGVcblxudmFyIEFzeW5jTW9kZSA9IFJFQUNUX0FTWU5DX01PREVfVFlQRTtcbnZhciBDb25jdXJyZW50TW9kZSA9IFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFO1xudmFyIENvbnRleHRDb25zdW1lciA9IFJFQUNUX0NPTlRFWFRfVFlQRTtcbnZhciBDb250ZXh0UHJvdmlkZXIgPSBSRUFDVF9QUk9WSURFUl9UWVBFO1xudmFyIEVsZW1lbnQgPSBSRUFDVF9FTEVNRU5UX1RZUEU7XG52YXIgRm9yd2FyZFJlZiA9IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU7XG52YXIgRnJhZ21lbnQgPSBSRUFDVF9GUkFHTUVOVF9UWVBFO1xudmFyIExhenkgPSBSRUFDVF9MQVpZX1RZUEU7XG52YXIgTWVtbyA9IFJFQUNUX01FTU9fVFlQRTtcbnZhciBQb3J0YWwgPSBSRUFDVF9QT1JUQUxfVFlQRTtcbnZhciBQcm9maWxlciA9IFJFQUNUX1BST0ZJTEVSX1RZUEU7XG52YXIgU3RyaWN0TW9kZSA9IFJFQUNUX1NUUklDVF9NT0RFX1RZUEU7XG52YXIgU3VzcGVuc2UgPSBSRUFDVF9TVVNQRU5TRV9UWVBFO1xudmFyIGhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlID0gZmFsc2U7IC8vIEFzeW5jTW9kZSBzaG91bGQgYmUgZGVwcmVjYXRlZFxuXG5mdW5jdGlvbiBpc0FzeW5jTW9kZShvYmplY3QpIHtcbiAge1xuICAgIGlmICghaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUpIHtcbiAgICAgIGhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlID0gdHJ1ZTsgLy8gVXNpbmcgY29uc29sZVsnd2FybiddIHRvIGV2YWRlIEJhYmVsIGFuZCBFU0xpbnRcblxuICAgICAgY29uc29sZVsnd2FybiddKCdUaGUgUmVhY3RJcy5pc0FzeW5jTW9kZSgpIGFsaWFzIGhhcyBiZWVuIGRlcHJlY2F0ZWQsICcgKyAnYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiBSZWFjdCAxNysuIFVwZGF0ZSB5b3VyIGNvZGUgdG8gdXNlICcgKyAnUmVhY3RJcy5pc0NvbmN1cnJlbnRNb2RlKCkgaW5zdGVhZC4gSXQgaGFzIHRoZSBleGFjdCBzYW1lIEFQSS4nKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gaXNDb25jdXJyZW50TW9kZShvYmplY3QpIHx8IHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9BU1lOQ19NT0RFX1RZUEU7XG59XG5mdW5jdGlvbiBpc0NvbmN1cnJlbnRNb2RlKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFO1xufVxuZnVuY3Rpb24gaXNDb250ZXh0Q29uc3VtZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNDb250ZXh0UHJvdmlkZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUFJPVklERVJfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzRWxlbWVudChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmIG9iamVjdCAhPT0gbnVsbCAmJiBvYmplY3QuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzRm9yd2FyZFJlZihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFO1xufVxuZnVuY3Rpb24gaXNGcmFnbWVudChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNMYXp5KG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0xBWllfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzTWVtbyhvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9NRU1PX1RZUEU7XG59XG5mdW5jdGlvbiBpc1BvcnRhbChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9QT1JUQUxfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzUHJvZmlsZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUFJPRklMRVJfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzU3RyaWN0TW9kZShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFO1xufVxuZnVuY3Rpb24gaXNTdXNwZW5zZShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9TVVNQRU5TRV9UWVBFO1xufVxuXG5leHBvcnRzLkFzeW5jTW9kZSA9IEFzeW5jTW9kZTtcbmV4cG9ydHMuQ29uY3VycmVudE1vZGUgPSBDb25jdXJyZW50TW9kZTtcbmV4cG9ydHMuQ29udGV4dENvbnN1bWVyID0gQ29udGV4dENvbnN1bWVyO1xuZXhwb3J0cy5Db250ZXh0UHJvdmlkZXIgPSBDb250ZXh0UHJvdmlkZXI7XG5leHBvcnRzLkVsZW1lbnQgPSBFbGVtZW50O1xuZXhwb3J0cy5Gb3J3YXJkUmVmID0gRm9yd2FyZFJlZjtcbmV4cG9ydHMuRnJhZ21lbnQgPSBGcmFnbWVudDtcbmV4cG9ydHMuTGF6eSA9IExhenk7XG5leHBvcnRzLk1lbW8gPSBNZW1vO1xuZXhwb3J0cy5Qb3J0YWwgPSBQb3J0YWw7XG5leHBvcnRzLlByb2ZpbGVyID0gUHJvZmlsZXI7XG5leHBvcnRzLlN0cmljdE1vZGUgPSBTdHJpY3RNb2RlO1xuZXhwb3J0cy5TdXNwZW5zZSA9IFN1c3BlbnNlO1xuZXhwb3J0cy5pc0FzeW5jTW9kZSA9IGlzQXN5bmNNb2RlO1xuZXhwb3J0cy5pc0NvbmN1cnJlbnRNb2RlID0gaXNDb25jdXJyZW50TW9kZTtcbmV4cG9ydHMuaXNDb250ZXh0Q29uc3VtZXIgPSBpc0NvbnRleHRDb25zdW1lcjtcbmV4cG9ydHMuaXNDb250ZXh0UHJvdmlkZXIgPSBpc0NvbnRleHRQcm92aWRlcjtcbmV4cG9ydHMuaXNFbGVtZW50ID0gaXNFbGVtZW50O1xuZXhwb3J0cy5pc0ZvcndhcmRSZWYgPSBpc0ZvcndhcmRSZWY7XG5leHBvcnRzLmlzRnJhZ21lbnQgPSBpc0ZyYWdtZW50O1xuZXhwb3J0cy5pc0xhenkgPSBpc0xhenk7XG5leHBvcnRzLmlzTWVtbyA9IGlzTWVtbztcbmV4cG9ydHMuaXNQb3J0YWwgPSBpc1BvcnRhbDtcbmV4cG9ydHMuaXNQcm9maWxlciA9IGlzUHJvZmlsZXI7XG5leHBvcnRzLmlzU3RyaWN0TW9kZSA9IGlzU3RyaWN0TW9kZTtcbmV4cG9ydHMuaXNTdXNwZW5zZSA9IGlzU3VzcGVuc2U7XG5leHBvcnRzLmlzVmFsaWRFbGVtZW50VHlwZSA9IGlzVmFsaWRFbGVtZW50VHlwZTtcbmV4cG9ydHMudHlwZU9mID0gdHlwZU9mO1xuICB9KSgpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWlzLnByb2R1Y3Rpb24ubWluLmpzJyk7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWlzLmRldmVsb3BtZW50LmpzJyk7XG59XG4iLCJpbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuLy8gaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHsgR2xvYmFsQ29udGV4dCB9IGZyb20gJy4uLy4uL2NvbnRleHQvR2xvYmFsQ29udGV4dCc7XHJcbi8vIGltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xyXG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcclxuXHJcbmltcG9ydCBQcm9maWxlSW5mbyBmcm9tICcuLi8uLi9jb21wb25lbnRzL1Byb2ZpbGVJbmZvJztcclxuaW1wb3J0IEFib3V0TWUgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9BYm91dE1lJztcclxuaW1wb3J0IFZpZGVvUGxheWVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvVmlkZW9QbGF5ZXInO1xyXG5pbXBvcnQgQWRkVG9QbGF5bGlzdCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0FkZFRvUGxheWxpc3QnO1xyXG5pbXBvcnQgUGxheWxpc3QgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9QbGF5TGlzdCc7XHJcbmltcG9ydCBDb21tZW50U2VjdGlvbiBmcm9tICcuLi8uLi9jb21wb25lbnRzL0NvbW1lbnRTZWN0aW9uJztcclxuaW1wb3J0IFByb2ZpbGVFZGl0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvUHJvZmlsZUVkaXQnO1xyXG5pbXBvcnQgRmF2b3VyaXRlcyBmcm9tICcuLi8uLi9jb21wb25lbnRzL0Zhdm91cml0ZXMnO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvRm9vdGVyJztcclxuXHJcbi8vIEZyYW1lci1tb3Rpb24gdmFyaWFudHNcclxuXHJcblxyXG5cclxuXHJcblxyXG5jb25zdCBQcm9maWxlID0gKCkgPT4ge1xyXG5cclxuICBjb25zdCB7IGF1dGhTdGF0ZSwgY3VycmVudFVzZXIsIHByb2ZpbGVVc2VyLCBzZXRBdXRvcGxheSwgZmV0Y2hQcm9maWxlVXNlciwgY2xlYXJQcm9maWxlVXNlciwgYWRkRmF2b3VyaXRlLCByZW1vdmVGYXZvdXJpdGV9ID0gdXNlQ29udGV4dChHbG9iYWxDb250ZXh0KTtcclxuXHJcbiAgLy8gR2V0IHRoZSB1c2VySWQgZnJvbSB0aGUgVVJMIGFuZCBmZXRjaCB0aGUgcHJvZmlsZSB1c2VyJ3MgZGF0YVxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgY29uc3QgeyB1c2VySWQgfSA9IHJvdXRlci5xdWVyeVxyXG4gIGZldGNoUHJvZmlsZVVzZXIodXNlcklkLCB0cnVlKTtcclxuXHJcbiAgXHJcbiAgXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgc2V0QXV0b3BsYXkoZmFsc2UpO1xyXG4gICAgfSwgW10pXHJcbiAgICBcclxuICAgIFxyXG4gIC8vICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAvLyAgICAgZmV0Y2hQcm9maWxlVXNlcih1c2VySWQsIHRydWUpO1xyXG4gIC8vICAgLy8gICBjb25zdCBoYW5kbGVSb3V0ZUNoYW5nZSA9IHVybCA9PiB7XHJcbiAgLy8gICAvLyAgICAgLy8gY29uc29sZS5sb2coJ0FwcCBpcyBjaGFuZ2luZyB0bzogJywgdXJsKVxyXG4gIC8vICAgLy8gICAgIC8vIGNvbnNvbGUubG9nKFJvdXRlci5xdWVyeS51c2VySWQpXHJcbiAgLy8gICAvLyB9XHJcblxyXG4gIC8vICAgLy8gUm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VTdGFydCcsIGhhbmRsZVJvdXRlQ2hhbmdlKVxyXG4gIC8vICAgLy8gcmV0dXJuICgpID0+IHtcclxuICAvLyAgIC8vICAgUm91dGVyLmV2ZW50cy5vZmYoJ3JvdXRlQ2hhbmdlU3RhcnQnLCBoYW5kbGVSb3V0ZUNoYW5nZSlcclxuICAvLyAgIC8vIH1cclxuICAvLyB9LCBbXSlcclxuXHJcbiAgY29uc3QgW2VkaXRNb2RlLCBzZXRFZGl0TW9kZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgXHJcblxyXG4gIC8vIGNvbnN0IFtpbWFnZVN0cmluZywgc2V0SW1hZ2VTdHJpbmddID0gdXNlU3RhdGUoJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9pbWFnZS8zY2FlNDU4NWRkZjRjYzU1YzcyYjE3NGMwNzI2ZjI2Ni5qcGcnKTtcclxuXHJcbiAgLy8gaWYgKHByb2ZpbGVQaG90byAhPT0gbnVsbCkge1xyXG4gIC8vICAgc2V0SW1hZ2VTdHJpbmcoYGh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9pbWFnZS8key5maWxlbmFtZX1gKVxyXG4gIC8vIH1cclxuICAvLyBjb25zb2xlLmxvZyhpbWFnZVN0cmluZylcclxuICAvLyBpZiAocHJvZmlsZVVzZXIucHJvZmlsZVBob3RvRmlsZW5hbWUgIT09IG51bGwpIHtcclxuICAvLyAgIGNvbnN0IGZpbGVuYW1lID0gcHJvZmlsZVVzZXIucHJvZmlsZVBob3RvRmlsZW5hbWU7XHJcbiAgICAgIFxyXG4gIC8vICAgc2V0SW1hZ2VTdHJpbmcoYGh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9pbWFnZS8ke2ZpbGVuYW1lfWApO1xyXG4gIC8vIH1cclxuXHJcblxyXG4gIC8vIGlmIChwcm9maWxlUGhvdG8gIT09IG51bGwpe1xyXG4gIC8vICAgc2V0SW1hZ2VTdHJpbmcocHJvZmlsZVBob3RvLmZpbGVuYW1lKTtcclxuICAvLyB9XHJcbiAgXHJcblxyXG4gIC8vIGNvbnN0IHNob3dQcm9maWxlRWRpdFNlY3Rpb24gPSAoKSA9PiB7XHJcbiAgLy8gICBzZXRFZGl0TW9kZSh0cnVlKVxyXG4gIC8vIH1cclxuXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiIGlkPVwicHJvZmlsZVwiPlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxQcm9maWxlSW5mbyBzZXRFZGl0TW9kZT17c2V0RWRpdE1vZGV9IGVkaXRNb2RlPXtlZGl0TW9kZX0gLz5cclxuXHJcbiAgICAgICAge2VkaXRNb2RlICYmXHJcbiAgICAgICAgICA8UHJvZmlsZUVkaXQgc2V0RWRpdE1vZGU9e3NldEVkaXRNb2RlfS8+XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICA8QWJvdXRNZSBwcm9maWxlVXNlcj17cHJvZmlsZVVzZXJ9Lz5cclxuXHJcbiAgICAgICAgPFZpZGVvUGxheWVyLz5cclxuXHJcbiAgICAgICAge3Byb2ZpbGVVc2VyLmlkID09PSBjdXJyZW50VXNlci5pZCAmJiBcclxuICAgICAgICAgIDxBZGRUb1BsYXlsaXN0Lz4gXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICA8UGxheWxpc3QgcHJvZmlsZVVzZXI9e3Byb2ZpbGVVc2VyfS8+XHJcblxyXG4gICAgICAgIDxDb21tZW50U2VjdGlvbiBwcm9maWxlVXNlcj17cHJvZmlsZVVzZXJ9Lz5cclxuXHJcbiAgICAgICAgPEZhdm91cml0ZXMgcHJvZmlsZVVzZXI9e3Byb2ZpbGVVc2VyfS8+XHJcblxyXG4gICAgICA8L2Rpdj5cclxuXHJcblxyXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAjcHJvZmlsZSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBgfTwvc3R5bGU+XHJcblxyXG4gICAgICAgIDxGb290ZXIgLz5cclxuICAgICAgPC8+XHJcbiAgKVxyXG59XHJcblxyXG4vLyBQcm9maWxlLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIChjdHggKSA9PiB7XHJcblxyXG4vLyAgIGNvbnNvbGUubG9nKGN0eC5xdWVyeS50b2tlbilcclxuICBcclxuLy8gICBjb25zdCBpZCA9IGN0eC5xdWVyeS51c2VySWRcclxuLy8gICAvLyBjb25zdCB1c2VyID0gYXdhaXQgZmV0Y2hQcm9maWxlVXNlcihpZCwgdHJ1ZSk7XHJcblxyXG4vLyAgIC8vIGNvbnN0IGdldFVzZXJEYXRhQnlJZCA9IGFzeW5jICh1c2VySWQpID0+IHtcclxuXHJcbi8vICAgLy8gICBjb25zdCByZXF1ZXN0Qm9keSA9IHtcclxuLy8gICAvLyAgICAgcXVlcnk6IGBcclxuLy8gICAvLyAgICAgICBxdWVyeSB7XHJcbi8vICAgLy8gICAgICAgICB1c2VyQnlJZChpZDpcIiR7dXNlcklkfVwiKSB7XHJcbi8vICAgLy8gICAgICAgICAgIGZpcnN0TmFtZSxcclxuLy8gICAvLyAgICAgICAgICAgbGFzdE5hbWUsXHJcbi8vICAgLy8gICAgICAgICAgIF9pZCxcclxuLy8gICAvLyAgICAgICAgICAgb3duZWRWaWRlb3Mge1xyXG4vLyAgIC8vICAgICAgICAgICAgIF9pZCxcclxuLy8gICAvLyAgICAgICAgICAgICB0aHVtYm5haWxVUkwsXHJcbi8vICAgLy8gICAgICAgICAgICAgdGl0bGUsXHJcbi8vICAgLy8gICAgICAgICAgICAgdmlkZW9VUkxcclxuLy8gICAvLyAgICAgICAgICAgfSxcclxuLy8gICAvLyAgICAgICAgICAgcGxheWxpc3RDb21tZW50c3tcclxuLy8gICAvLyAgICAgICAgICAgICBfaWQsXHJcbi8vICAgLy8gICAgICAgICAgICAgY29udGVudCxcclxuLy8gICAvLyAgICAgICAgICAgICBjb21tZW50ZXIge1xyXG4vLyAgIC8vICAgICAgICAgICAgICAgX2lkXHJcbi8vICAgLy8gICAgICAgICAgICAgfSxcclxuLy8gICAvLyAgICAgICAgICAgICBjcmVhdGVkQXQsXHJcbi8vICAgLy8gICAgICAgICAgICAgdXBkYXRlZEF0XHJcbi8vICAgLy8gICAgICAgICAgIH1cclxuLy8gICAvLyAgICAgICAgIH1cclxuLy8gICAvLyAgICAgICB9XHJcbi8vICAgLy8gICAgIGBcclxuLy8gICAvLyAgIH1cclxuXHJcbi8vICAgLy8gICB0cnkge1xyXG4vLyAgIC8vICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDo1MDAwL2dyYXBocWwnLCB7XHJcbi8vICAgLy8gICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbi8vICAgLy8gICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocmVxdWVzdEJvZHkpLFxyXG4vLyAgIC8vICAgICAgIGhlYWRlcnM6IHtcclxuLy8gICAvLyAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbi8vICAgLy8gICAgICAgICAnQXV0aG9yaXphdGlvbic6IGBCZWFyZXIgJHthdXRoU3RhdGUudG9rZW59YFxyXG4vLyAgIC8vICAgICAgIH1cclxuLy8gICAvLyAgICAgfSlcclxuXHJcbi8vICAgLy8gICAgIGlmIChyZXMuc3RhdHVzICE9PSAyMDAgJiYgcmVzLnN0YXR1cyAhPT0gMjAxKSB7XHJcbi8vICAgLy8gICAgICAgdGhyb3cgbmV3IEVycm9yKCdGYWlsZWQgdG8gZmV0Y2ggdXNlciBkYXRhJyk7XHJcbi8vICAgLy8gICAgIH1cclxuXHJcbi8vICAgLy8gICAgIC8vIC5qc29uKCkgaXMgYSBtZXRob2QgZnJvbSBmZXRjaCBBUEkgdGhhdCBhdXRvIGV4dHJhY3RzICYgcGFyc2VzIHRoZSByZXMgYm9keVxyXG4vLyAgIC8vICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuXHJcbi8vICAgLy8gICAgIC8vIENoZWNrIGZvciBlcnJvcnMgYXJyYXkgaW4gcmVzcG9uc2VcclxuLy8gICAvLyAgICAgaWYgKGRhdGEuZXJyb3JzKSB7XHJcbi8vICAgLy8gICAgICAgZGF0YS5lcnJvcnMubWFwKGVycm9yID0+IHtcclxuLy8gICAvLyAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLm1lc3NhZ2UpXHJcbi8vICAgLy8gICAgICAgfSlcclxuLy8gICAvLyAgICAgICByZXR1cm5cclxuLy8gICAvLyAgICAgfVxyXG5cclxuLy8gICAvLyAgICAgY29uc3QgdXNlciA9IChkYXRhLmRhdGEudXNlckJ5SWQpO1xyXG4vLyAgIC8vICAgICByZXR1cm4gdXNlcjtcclxuXHJcbi8vICAgLy8gICB9IGNhdGNoIChlcnIpIHtcclxuLy8gICAvLyAgICAgY29uc29sZS5sb2coZXJyKTtcclxuLy8gICAvLyAgIH1cclxuXHJcbi8vICAgLy8gfVxyXG5cclxuLy8gICAvLyBjb25zdCB1c2VyID0gYXdhaXQgZ2V0VXNlckRhdGFCeUlkKGlkKVxyXG4vLyAgIC8vIGNvbnNvbGUubG9nKHVzZXIpXHJcbi8vICAgcmV0dXJuIHsgfVxyXG4gIFxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2ZpbGU7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZnJhbWVyLW1vdGlvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXMtZXhhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicXVlcnlzdHJpbmdcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWpzeC9zdHlsZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9