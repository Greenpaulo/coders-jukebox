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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["717247843", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_6__["default"].gradient, _css_variables_colors__WEBPACK_IMPORTED_MODULE_6__["default"].primary]]])
  }, __jsx("div", {
    id: "header",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["717247843", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_6__["default"].gradient, _css_variables_colors__WEBPACK_IMPORTED_MODULE_6__["default"].primary]]])
  }, __jsx("h2", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["717247843", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_6__["default"].gradient, _css_variables_colors__WEBPACK_IMPORTED_MODULE_6__["default"].primary]]])
  }, "Add To Playlist"), __jsx(_SearchBar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    placeholder: "Search for music",
    searchMode: "video",
    submitHandler: searchVideoHandler
  })), __jsx("div", {
    id: "videos",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["717247843", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_6__["default"].gradient, _css_variables_colors__WEBPACK_IMPORTED_MODULE_6__["default"].primary]]])
  }, videos.length === 0 && __jsx("h3", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["717247843", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_6__["default"].gradient, _css_variables_colors__WEBPACK_IMPORTED_MODULE_6__["default"].primary]]])
  }, "Search for music to add to your playlist!"), videos.map(video => {
    return __jsx(_VideoItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
      video: video,
      mode: "youtube",
      key: video.id.videoId
    });
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "717247843",
    dynamic: [_css_variables_colors__WEBPACK_IMPORTED_MODULE_6__["default"].gradient, _css_variables_colors__WEBPACK_IMPORTED_MODULE_6__["default"].primary]
  }, `section.__jsx-style-dynamic-selector{margin:2rem auto 3rem auto;width:84%;border-radius:10px;color:white;}#header.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;background:${_css_variables_colors__WEBPACK_IMPORTED_MODULE_6__["default"].gradient};padding:2rem;border-radius:10px 10px 0 0;}h2.__jsx-style-dynamic-selector{color:white;margin-right:7rem;width:25%;}#videos.__jsx-style-dynamic-selector{border:1px solid ${_css_variables_colors__WEBPACK_IMPORTED_MODULE_6__["default"].primary};border-radius:0 0 10px 10px;border-top:none;}h3.__jsx-style-dynamic-selector{padding:2rem;text-align:center;}@media (max-width:1100px){h2.__jsx-style-dynamic-selector{min-width:26%;margin-right:1rem;}}@media (max-width:830px){#header.__jsx-style-dynamic-selector{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}h2.__jsx-style-dynamic-selector{margin-bottom:1.5rem;min-width:60%;}}@media (max-width:520px){#header.__jsx-style-dynamic-selector{padding:1.5rem;}}@media (max-width:355px){h2.__jsx-style-dynamic-selector{min-width:100%;}h3.__jsx-style-dynamic-selector{padding:1.5rem;}}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxDb2RpbmdcXE15UHJvamVjdHNcXGNvZGVycy1qdWtlYm94XFxjb21wb25lbnRzXFxBZGRUb1BsYXlsaXN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThDYyxBQUlrQyxBQU9kLEFBT0QsQUFNa0MsQUFNakMsQUFPRyxBQU9RLEFBSUQsQUFPTixBQU1BLEFBSUEsWUE5Q0MsQ0FZQSxDQU9FLENBa0JwQixBQU1BLEFBSUEsTUFqQmdCLE1BNUNOLEdBZUEsQ0FZWixDQU9FLEdBV0EsRUE1Q21CLEdBZXJCLE1BSThCLFVBbEJoQixZQUNkLE1BSTBDLEFBY3hCLElBbUJoQixZQWxCRix3QkFkZSxhQUNlLDRCQUM5QiIsImZpbGUiOiJDOlxcQ29kaW5nXFxNeVByb2plY3RzXFxjb2RlcnMtanVrZWJveFxcY29tcG9uZW50c1xcQWRkVG9QbGF5bGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBTZWFyY2hCYXIgZnJvbSAnLi9TZWFyY2hCYXInO1xyXG5pbXBvcnQgeyB5b3V0dWJlIH0gZnJvbSAnLi4vYXBpcy95b3V0dWJlJztcclxuaW1wb3J0IHsgWU9VVFVCRUFQSV9LRVkgfSBmcm9tICcuLi9jb25maWcva2V5cyc7XHJcbmltcG9ydCBWaWRlb0l0ZW0gZnJvbSAnLi9WaWRlb0l0ZW0nO1xyXG5pbXBvcnQgY29sb3JzIGZyb20gJy4uL2Nzcy12YXJpYWJsZXMvY29sb3JzJztcclxuXHJcbmNvbnN0IEFkZFRvUGxheWxpc3QgPSAoKSA9PiB7XHJcblxyXG4gIGNvbnN0IFt2aWRlb3MsIHNldFZpZGVvc10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIGNvbnN0IHNlYXJjaFZpZGVvSGFuZGxlciA9IGFzeW5jIChzZWFyY2hJbnB1dCkgPT4ge1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgeW91dHViZS5nZXQoJy9zZWFyY2gnLCB7XHJcbiAgICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgICB0eXBlOiAndmlkZW8nLFxyXG4gICAgICAgICAgcGFydDogJ3NuaXBwZXQnLFxyXG4gICAgICAgICAgbWF4UmVzdWx0czogNSxcclxuICAgICAgICAgIGtleTogWU9VVFVCRUFQSV9LRVksXHJcbiAgICAgICAgICBxOiBzZWFyY2hJbnB1dFxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuXHJcbiAgICBjb25zdCB2aWRlb0xpc3QgPSByZXMuZGF0YS5pdGVtcztcclxuICAgIHNldFZpZGVvcyh2aWRlb0xpc3QpO1xyXG4gIH1cclxuXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBpZD1cImFkZFRvUGxheWxpc3RcIj5cclxuICAgICAgPGRpdiBpZD1cImhlYWRlclwiPlxyXG4gICAgICAgIDxoMj5BZGQgVG8gUGxheWxpc3Q8L2gyPlxyXG4gICAgICAgIDxTZWFyY2hCYXIgcGxhY2Vob2xkZXI9J1NlYXJjaCBmb3IgbXVzaWMnIHNlYXJjaE1vZGU9XCJ2aWRlb1wiIHN1Ym1pdEhhbmRsZXI9e3NlYXJjaFZpZGVvSGFuZGxlcn0vPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcblxyXG4gICAgICA8ZGl2IGlkPVwidmlkZW9zXCI+XHJcbiAgICAgICAgeyB2aWRlb3MubGVuZ3RoID09PSAwICYmXHJcbiAgICAgICAgICA8aDM+U2VhcmNoIGZvciBtdXNpYyB0byBhZGQgdG8geW91ciBwbGF5bGlzdCE8L2gzPlxyXG4gICAgICAgIH1cclxuICAgICAgICB7dmlkZW9zLm1hcCh2aWRlbyA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8VmlkZW9JdGVtIHZpZGVvPXt2aWRlb30gbW9kZT1cInlvdXR1YmVcIiBrZXk9e3ZpZGVvLmlkLnZpZGVvSWR9Lz5cclxuICAgICAgICAgIClcclxuICAgICAgICB9KX1cclxuICAgICAgPC9kaXY+XHJcblxyXG4gIDxzdHlsZSBqc3g+e2BcclxuXHJcbiAgICBzZWN0aW9uIHtcclxuICAgICAgbWFyZ2luOiAycmVtIGF1dG8gM3JlbSBhdXRvO1xyXG4gICAgICB3aWR0aDogODQlO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAjaGVhZGVyIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYmFja2dyb3VuZDogJHtjb2xvcnMuZ3JhZGllbnR9O1xyXG4gICAgICBwYWRkaW5nOiAycmVtO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMCAwO1xyXG4gICAgfVxyXG5cclxuICAgIGgyIHtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDdyZW07XHJcbiAgICAgIHdpZHRoOiAyNSU7XHJcbiAgICB9XHJcblxyXG4gICAgI3ZpZGVvcyB7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICR7Y29sb3JzLnByaW1hcnl9O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAwIDAgMTBweCAxMHB4O1xyXG4gICAgICBib3JkZXItdG9wOiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgIGgzIHtcclxuICAgICAgcGFkZGluZzogMnJlbTtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC8qIE1lZGlhIHF1ZXJpZXMgKi9cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMTAwcHgpIHtcclxuICAgICAgaDIge1xyXG4gICAgICAgIG1pbi13aWR0aDogMjYlO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMXJlbTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA4MzBweCkge1xyXG4gICAgICAjaGVhZGVyIHtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBoMiB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xyXG4gICAgICAgIG1pbi13aWR0aDogNjAlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDUyMHB4KSB7XHJcbiAgICAgICNoZWFkZXIge1xyXG4gICAgICAgIHBhZGRpbmc6IDEuNXJlbTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAzNTVweCkge1xyXG4gICAgICBoMiB7XHJcbiAgICAgICAgbWluLXdpZHRoOiAxMDAlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBoMyB7XHJcbiAgICAgICAgcGFkZGluZzogMS41cmVtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gIGB9PC9zdHlsZT5cclxuXHJcblxyXG5cclxuICAgIDwvc2VjdGlvbj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFkZFRvUGxheWxpc3Q7Il19 */
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
  }, []);

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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2800101501", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary]]]) + " " + "comment"
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2800101501", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary]]]) + " " + "content"
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2800101501", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary]]]) + " " + "avatar"
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2800101501", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary]]]) + " " + "avatar-crop"
  }, commentUser.profilePhotoFilename !== null && commentUser.profilePhotoFilename !== '' && __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/profile/[userId]",
    as: `/profile/${commenterId}`
  }, __jsx("a", {
    onClick: commenterClickHandler,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2800101501", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary]]])
  }, __jsx("img", {
    src: `/image/${commentUser.profilePhotoFilename}`,
    alt: "avatar",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2800101501", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary]]])
  }))), (commentUser.profilePhotoFilename === null || commentUser.profilePhotoFilename === '') && __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/profile/[userId]",
    as: `/profile/${commenterId}`
  }, __jsx("a", {
    onClick: commenterClickHandler,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2800101501", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary]]])
  }, __jsx("img", {
    src: "/default-avatar.jpg",
    alt: "avatar",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2800101501", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary]]])
  }))))), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2800101501", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary]]]) + " " + "commenter"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/profile/[userId]",
    as: `/profile/${commenterId}`
  }, __jsx("a", {
    onClick: commenterClickHandler,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2800101501", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary]]])
  }, __jsx("h3", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2800101501", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary]]])
  }, commentUser.firstName, " ", commentUser.lastName)))), !editMode && __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2800101501", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary]]])
  }, comment.content), editMode && __jsx("section", {
    id: "edit-comment",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2800101501", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary]]])
  }, __jsx("form", {
    id: "edit-form",
    onSubmit: e => editCommentSubmitHandler(e),
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2800101501", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary]]])
  }, __jsx("textarea", {
    name: "edit-comment-input",
    id: "edit-comment-input",
    defaultValue: comment.content,
    cols: "30",
    rows: "5",
    ref: editedContentRef,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2800101501", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary]]])
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2800101501", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary]]]) + " " + "edit-btns"
  }, __jsx("button", {
    type: "submit",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2800101501", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary]]])
  }, __jsx("i", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2800101501", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary]]]) + " " + "fa fa-pencil"
  })), __jsx("button", {
    onClick: editCommentClickHandler,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2800101501", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary]]])
  }, __jsx("i", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2800101501", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary]]]) + " " + "fa fa-window-close"
  })))))), !editMode && __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2800101501", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary]]]) + " " + "date-container"
  }, currentUser.id === commenterId && !editMode && __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2800101501", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary]]]) + " " + "comment-btns"
  }, __jsx("button", {
    onClick: editCommentClickHandler,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2800101501", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary]]])
  }, __jsx("i", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2800101501", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary]]]) + " " + "fa fa-pencil-square-o"
  })), __jsx("button", {
    onClick: removeCommentClickHandler,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2800101501", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary]]])
  }, __jsx("i", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2800101501", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary]]]) + " " + "fa fa-trash"
  }))), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2800101501", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary]]]) + " " + "date-time"
  }, convertDate(comment.createdAt).map(date => {
    return __jsx("h4", {
      key: date,
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2800101501", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary]]]) + " " + "date"
    }, date);
  }))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2800101501",
    dynamic: [_css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary]
  }, `.comment.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;width:100%;border:1px solid black;border-radius:5px;margin:1rem 0;background-color:white;}.commenter.__jsx-style-dynamic-selector{height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;border-right:1px solid ${_css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary};}.commenter.__jsx-style-dynamic-selector h3.__jsx-style-dynamic-selector{margin:0 1rem;}.content.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;padding:1.2rem 0 1.2rem 1.2rem;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.comment-info.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-left:1rem;}.avatar.__jsx-style-dynamic-selector{max-height:50px;}.avatar-crop.__jsx-style-dynamic-selector{max-width:50px;max-height:50px;overflow:hidden;border-radius:50%;}img.__jsx-style-dynamic-selector{max-width:50px;max-height:75px;}h4.__jsx-style-dynamic-selector{margin-right:1rem;text-align:center;}p.__jsx-style-dynamic-selector{margin:0 1.5rem;word-wrap:break-word;width:650px;}.date-container.__jsx-style-dynamic-selector{margin:1rem 0 1rem auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;padding-right:0.5rem;border-left:1px solid ${_css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary};}.date-time.__jsx-style-dynamic-selector{margin-top:0.5rem;}.date-container.__jsx-style-dynamic-selector h4.__jsx-style-dynamic-selector{font-size:0.9rem;padding:0 1rem 0 1.5rem;width:100%;}.comment-btns.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:40px;margin:0 auto;padding-left:1.15rem;}button.__jsx-style-dynamic-selector{background-color:white;color:white;border:none;cursor:pointer;font-size:1rem;position:relative;}i.__jsx-style-dynamic-selector{color:${_css_variables_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary};font-size:1.5rem;-webkit-transition:color 0.2s ease-in-out;transition:color 0.2s ease-in-out;}.comment-btns.__jsx-style-dynamic-selector i.__jsx-style-dynamic-selector{position:absolute;}i.fa-pencil-square-o.__jsx-style-dynamic-selector{top:8px;left:-2px;}i.fa-trash.__jsx-style-dynamic-selector{top:6px;left:0px;}i.__jsx-style-dynamic-selector:hover{color:#e5305a;}button.__jsx-style-dynamic-selector:focus{outline:none;}section#edit-comment.__jsx-style-dynamic-selector{width:85%;margin-left:1rem;}form#edit-form.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}textarea.__jsx-style-dynamic-selector{width:100%;font:inherit;padding:0.5rem;}#edit-comment.__jsx-style-dynamic-selector button.__jsx-style-dynamic-selector{height:50px;padding:0 0.5rem;}.edit-btns.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}i.fa-pencil.__jsx-style-dynamic-selector{margin-left:0.5rem;}i.fa-window-close.__jsx-style-dynamic-selector{margin-right:0.5rem;}@media (max-width:1150px ){p.__jsx-style-dynamic-selector{width:400px;}}@media (max-width:1070px ){p.__jsx-style-dynamic-selector{width:350px;}}@media (max-width:1000px ){p.__jsx-style-dynamic-selector{width:300px;}.avatar.__jsx-style-dynamic-selector{display:none;}.content.__jsx-style-dynamic-selector{padding-left:0.5rem;}}@media (max-width:860px){.comment.__jsx-style-dynamic-selector{display:grid;position:relative;}.date-container.__jsx-style-dynamic-selector{position:absolute;top:-11px;right:-7px;border:none;}.edit-btns.__jsx-style-dynamic-selector{position:absolute;top:2px;right:1px;border:none;}textarea.__jsx-style-dynamic-selector{margin-top:1.4rem;}.date-time.__jsx-style-dynamic-selector{display:none;}}@media (max-width:830px){.content.__jsx-style-dynamic-selector{display:grid;width:100%;}.comment.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}p.__jsx-style-dynamic-selector{width:480px;margin-top:1.5rem;}.avatar.__jsx-style-dynamic-selector{display:block;position:absolute;top:18px;left:16px;}.commenter.__jsx-style-dynamic-selector h3.__jsx-style-dynamic-selector{margin:0.7rem 0rem 0rem 4.3rem;}.commenter.__jsx-style-dynamic-selector{border:none;}section#edit-comment.__jsx-style-dynamic-selector{width:92%;}}@media (max-width:800px ){p.__jsx-style-dynamic-selector{width:59vw;}}@media (max-width:768px ){.commenter.__jsx-style-dynamic-selector{border-right:none;}p.__jsx-style-dynamic-selector{width:55vw;}.content.__jsx-style-dynamic-selector{display:grid;}}@media (max-width:660px){p.__jsx-style-dynamic-selector{width:68vw;}}@media (max-width:610px){section#edit-comment.__jsx-style-dynamic-selector{width:90%;}.content.__jsx-style-dynamic-selector{padding-left:0rem;}h3.__jsx-style-dynamic-selector{padding-left:0.6rem;}}@media (max-width:560px){p.__jsx-style-dynamic-selector{font-size:0.9rem;}}@media (max-width:500px){p.__jsx-style-dynamic-selector{width:65vw;}.comment.__jsx-style-dynamic-selector{padding-top:1rem;}.avatar.__jsx-style-dynamic-selector{top:33px;}}@media (max-width:440px){p.__jsx-style-dynamic-selector{width:63vw;}}@media (max-width:420px){p.__jsx-style-dynamic-selector{width:69vw;}}@media (max-width:360px){p.__jsx-style-dynamic-selector{width:65vw;}}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxDb2RpbmdcXE15UHJvamVjdHNcXGNvZGVycy1qdWtlYm94XFxjb21wb25lbnRzXFxDb21tZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFKa0IsQUFJc0IsQUFVRCxBQU9FLEFBSUQsQUFPQSxBQU9HLEFBSUQsQUFPQSxBQUtHLEFBS0YsQUFNUSxBQVVOLEFBSUQsQUFNSixBQVFRLEFBU1ksQUFNakIsQUFJVixBQUtBLEFBS00sQUFJRCxBQUlILEFBS0csQUFJRixBQU1DLEFBS0MsQUFJTSxBQUlDLEFBTU4sQUFNQSxBQU1BLEFBSUMsQUFJTyxBQVdQLEFBS0ssQUFPQSxBQU9BLEFBSUwsQUFNQSxBQUtBLEFBSUQsQUFLRSxBQU9pQixBQUluQixBQUlGLEFBTUMsQUFhTyxBQU9QLEFBSUUsQUFNRixBQU1ELEFBSVEsQUFJRSxBQU9ILEFBTU4sQUFLTSxBQUlSLEFBT0UsQUFNQSxBQU1BLFFBdk9ILEFBS0QsQ0FnTlQsQ0FuTWlCLEFBMkhqQixBQTBDQSxDQTVKYSxBQXlIYixBQW1CQSxBQVVBLEFBNEJBLEFBZUEsQUFNQSxBQU1BLENBM1VlLEFBb0lFLEFBbUJqQixBQU1BLEFBTUEsQUF5RG9CLEFBZ0JwQixDQTNIRixBQXNERSxBQWVvQixBQXVCcEIsQUFNYSxBQTJEYixDQXZRQSxBQXNHRixBQW9Ic0IsQ0FwTUYsQUFPQSxDQVhsQixBQXFCdUIsQ0FvQkcsQUF1QzVCLEFBZ01FLEFBV0EsQ0EzUW9CLEFBcUJwQixBQWlDRixBQUtBLEFBdUZjLEFBT0YsQUFPVixBQTBEQSxBQTJCQSxDQWpKRixDQUlBLEFBMEJFLEFBdUhBLEdBbE5ZLENBNUJHLEFBMkVBLEFBcUZmLEVBakJZLENBN0VkLENBc0VlLENBdkRmLENBd0ZFLENBL0xrQixBQU9sQixBQWtKQSxBQWlEQSxDQU5XLEdBakpDLEFBUUssQ0EvQ2pCLEFBMEpjLENBckpBLEVBaUZoQixBQTZEZ0IsRUExSEQsQUFnS0QsTUFwTVEsQUFtREwsQ0FtSGYsQ0FySkEsRUE4SUEsQUFzQ0EsQ0FoS0EsQUFzQmtDLFVBUG5CLEdBbkRmLFNBMUNnQyxBQXFCbkIsQUFPQSxBQXNEQyxBQWtEaEIsQUFlQSxBQStFRSxHQXBJa0IsUUF4RWUsQUFPWixDQWxCQSxBQXdFTCxTQVlsQixHQWhDMEIsRUFxQkQsZ0JBN0RGLEtBK0RyQixPQWVGLGdEQXJDdUIsRUFsQ0YsQ0FqQnBCLFVBWmMsTUE4QmIsS0E3QnlCLFNBc0J6QixjQXJCb0IsUUFVcEIsVUFUZ0IsY0FDUyxjQTREQSxTQTNEekIsMEZBNER1QixxQkFDOEIsbURBQ3JEIiwiZmlsZSI6IkM6XFxDb2RpbmdcXE15UHJvamVjdHNcXGNvZGVycy1qdWtlYm94XFxjb21wb25lbnRzXFxDb21tZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBHbG9iYWxDb250ZXh0IH0gZnJvbSAnLi4vY29udGV4dC9HbG9iYWxDb250ZXh0JztcclxuaW1wb3J0IGNvbG9ycyBmcm9tICAnLi4vY3NzLXZhcmlhYmxlcy9jb2xvcnMnO1xyXG5cclxuY29uc3QgQ29tbWVudCA9ICh7Y29tbWVudH0pID0+IHtcclxuICBcclxuICBjb25zdCBjb21tZW50ZXJJZCA9IGNvbW1lbnQuY29tbWVudGVyLl9pZCBcclxuICBcclxuICBjb25zdCB7IGdldENvbW1lbnRVc2VyLCByZW1vdmVDb21tZW50RnJvbVBsYXlsaXN0LCBjdXJyZW50VXNlciwgZmV0Y2hQcm9maWxlVXNlciwgZWRpdENvbW1lbnQgfSA9IHVzZUNvbnRleHQoR2xvYmFsQ29udGV4dCk7XHJcbiAgXHJcbiAgY29uc3QgW2NvbW1lbnRVc2VyLCBzZXRDb21tZW50VXNlcl0gPSB1c2VTdGF0ZSh7XHJcbiAgICBmaXJzdE5hbWU6ICcnLFxyXG4gICAgbGFzdE5hbWU6JycsXHJcbiAgICBwcm9maWxlUGhvdG9GaWxlbmFtZTogJydcclxuICB9KTtcclxuICBcclxuICBjb25zdCBbZWRpdE1vZGUsIHNldEVkaXRNb2RlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBcclxuICBjb25zdCBlZGl0ZWRDb250ZW50UmVmID0gdXNlUmVmKCk7XHJcblxyXG4gIFxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBhc3luYyBmdW5jdGlvbiBmZXRjaERhdGEoKSB7XHJcbiAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBnZXRDb21tZW50VXNlcihjb21tZW50LmNvbW1lbnRlci5faWQpO1xyXG4gICAgICBzZXRDb21tZW50VXNlcih7XHJcbiAgICAgICAgZmlyc3ROYW1lOiB1c2VyLmZpcnN0TmFtZSxcclxuICAgICAgICBsYXN0TmFtZTogdXNlci5sYXN0TmFtZSxcclxuICAgICAgICBwcm9maWxlUGhvdG9GaWxlbmFtZTogdXNlci5wcm9maWxlUGhvdG9GaWxlbmFtZVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gICAgZmV0Y2hEYXRhKCk7XHJcbiAgfSwgW10pXHJcblxyXG4gY29uc3QgZWRpdENvbW1lbnRDbGlja0hhbmRsZXIgPSAoKSA9PiB7XHJcbiAgICAvL1Nob3cgdGhlIGVkaXQgY29tbWVudCB0ZXh0YXJlYVxyXG4gICAgc2V0RWRpdE1vZGUoIWVkaXRNb2RlKTsgXHJcbiAgfVxyXG5cclxuICBjb25zdCBlZGl0Q29tbWVudFN1Ym1pdEhhbmRsZXIgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgLy8gQ2hlY2sgaWYgdGhlIGNvbnRlbnQgaXMgZW1wdHlcclxuICAgIGlmIChlZGl0ZWRDb250ZW50UmVmLmN1cnJlbnQudmFsdWUudHJpbSgpLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBlZGl0Q29tbWVudChjb21tZW50Ll9pZCwgZWRpdGVkQ29udGVudFJlZi5jdXJyZW50LnZhbHVlKTtcclxuICAgIC8vIEV4aXQgZWRpdCBtb2RlXHJcbiAgICBzZXRFZGl0TW9kZShmYWxzZSk7XHJcbiAgfVxyXG5cclxuICBcclxuICBjb25zdCBjb252ZXJ0RGF0ZT0gKG1pbGxpc2VjcykgPT4ge1xyXG4gICAgY29uc3QgZCA9IG5ldyBEYXRlKCttaWxsaXNlY3MpO1xyXG4gICAgLy8gcmV0dXJuIGQudG9Mb2NhbGVTdHJpbmcoKTtcclxuICAgIGNvbnN0IGRhdGVBcnJheSA9IGQudG9Mb2NhbGVTdHJpbmcoKS5zcGxpdChcIiwgXCIpO1xyXG4gICAgLy8gY29uc29sZS5sb2coYXJyYXkpO1xyXG4gICAgcmV0dXJuIGRhdGVBcnJheVxyXG4gIH1cclxuXHJcbiAgY29uc3QgcmVtb3ZlQ29tbWVudENsaWNrSGFuZGxlciA9ICgpID0+IHtcclxuICAgIHJlbW92ZUNvbW1lbnRGcm9tUGxheWxpc3QoY29tbWVudC5faWQpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgY29tbWVudGVyQ2xpY2tIYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgZmV0Y2hQcm9maWxlVXNlcihjb21tZW50ZXJJZCwgZmFsc2UpO1xyXG4gIH1cclxuXHJcblxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgIDw+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tbWVudFwiIGtleT17Y29tbWVudC5faWR9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhdmF0YXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhdmF0YXItY3JvcFwiPlxyXG4gICAgICAgICAgICAgIHtjb21tZW50VXNlci5wcm9maWxlUGhvdG9GaWxlbmFtZSAhPT0gbnVsbCAmJiBjb21tZW50VXNlci5wcm9maWxlUGhvdG9GaWxlbmFtZSAhPT0gJycgJiZcclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvZmlsZS9bdXNlcklkXVwiIGFzPXtgL3Byb2ZpbGUvJHtjb21tZW50ZXJJZH1gfT5cclxuICAgICAgICAgICAgICAgICAgPGEgb25DbGljaz17Y29tbWVudGVyQ2xpY2tIYW5kbGVyfT5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YC9pbWFnZS8ke2NvbW1lbnRVc2VyLnByb2ZpbGVQaG90b0ZpbGVuYW1lfWB9IGFsdD1cImF2YXRhclwiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgeyhjb21tZW50VXNlci5wcm9maWxlUGhvdG9GaWxlbmFtZSA9PT0gbnVsbCB8fCBjb21tZW50VXNlci5wcm9maWxlUGhvdG9GaWxlbmFtZSA9PT0gJycpICYmXHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Byb2ZpbGUvW3VzZXJJZF1cIiBhcz17YC9wcm9maWxlLyR7Y29tbWVudGVySWR9YH0+XHJcbiAgICAgICAgICAgICAgICAgIDxhIG9uQ2xpY2s9e2NvbW1lbnRlckNsaWNrSGFuZGxlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9Jy9kZWZhdWx0LWF2YXRhci5qcGcnIGFsdD1cImF2YXRhclwiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tbWVudGVyXCI+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvZmlsZS9bdXNlcklkXVwiIGFzPXtgL3Byb2ZpbGUvJHtjb21tZW50ZXJJZH1gfT5cclxuICAgICAgICAgICAgICA8YSBvbkNsaWNrPXtjb21tZW50ZXJDbGlja0hhbmRsZXJ9PjxoMz57Y29tbWVudFVzZXIuZmlyc3ROYW1lfSB7Y29tbWVudFVzZXIubGFzdE5hbWV9PC9oMz48L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgeyFlZGl0TW9kZSAmJiBcclxuICAgICAgICAgICAgICA8cD57Y29tbWVudC5jb250ZW50fTwvcD5cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICB7ZWRpdE1vZGUgJiZcclxuICAgICAgICAgICAgPHNlY3Rpb24gaWQ9XCJlZGl0LWNvbW1lbnRcIj5cclxuICAgICAgICAgICAgICA8Zm9ybSBpZD1cImVkaXQtZm9ybVwiIG9uU3VibWl0PXsoZSkgPT4gZWRpdENvbW1lbnRTdWJtaXRIYW5kbGVyKGUpfT5cclxuICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBuYW1lPVwiZWRpdC1jb21tZW50LWlucHV0XCIgaWQ9XCJlZGl0LWNvbW1lbnQtaW5wdXRcIiBkZWZhdWx0VmFsdWU9e2NvbW1lbnQuY29udGVudH0gY29scz1cIjMwXCIgcm93cz1cIjVcIiByZWY9e2VkaXRlZENvbnRlbnRSZWZ9PjwvdGV4dGFyZWE+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVkaXQtYnRuc1wiPlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1wZW5jaWxcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2VkaXRDb21tZW50Q2xpY2tIYW5kbGVyfT5cclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS13aW5kb3ctY2xvc2VcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgIDwvZGl2PiAgICAgIFxyXG5cclxuICAgICAgICB7IWVkaXRNb2RlICYmIFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXRlLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICB7Y3VycmVudFVzZXIuaWQgPT09IGNvbW1lbnRlcklkICYmICFlZGl0TW9kZSAmJlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tbWVudC1idG5zXCI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2VkaXRDb21tZW50Q2xpY2tIYW5kbGVyfT5cclxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtcGVuY2lsLXNxdWFyZS1vXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3JlbW92ZUNvbW1lbnRDbGlja0hhbmRsZXJ9PlxyXG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS10cmFzaFwiPjwvaT5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGF0ZS10aW1lXCI+XHJcbiAgICAgICAgICAgICAge2NvbnZlcnREYXRlKGNvbW1lbnQuY3JlYXRlZEF0KS5tYXAoZGF0ZSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gPGg0IGNsYXNzTmFtZT1cImRhdGVcIiBrZXk9e2RhdGV9PntkYXRlfTwvaDQ+XHJcbiAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgfSAgXHJcblxyXG4gICAgICAgIFxyXG5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgPC8+XHJcblxyXG4gICAgXHJcblxyXG4gICAgICA8c3R5bGUganN4PntgXHJcblxyXG4gICAgICAuY29tbWVudCB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIG1hcmdpbjogMXJlbSAwO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuY29tbWVudGVyIHtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICR7Y29sb3JzLnByaW1hcnl9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5jb21tZW50ZXIgaDMge1xyXG4gICAgICAgIG1hcmdpbjogMCAxcmVtO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuY29udGVudCB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBwYWRkaW5nOiAxLjJyZW0gMCAxLjJyZW0gMS4ycmVtO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5jb21tZW50LWluZm8ge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMXJlbTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmF2YXRhciB7XHJcbiAgICAgICAgbWF4LWhlaWdodDogNTBweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmF2YXRhci1jcm9wIHtcclxuICAgICAgICBtYXgtd2lkdGg6IDUwcHg7XHJcbiAgICAgICAgbWF4LWhlaWdodDogNTBweDtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaW1nIHtcclxuICAgICAgICBtYXgtd2lkdGg6IDUwcHg7XHJcbiAgICAgICAgbWF4LWhlaWdodDogNzVweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgaDQge1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMXJlbTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHAge1xyXG4gICAgICAgIG1hcmdpbjogMCAxLjVyZW07XHJcbiAgICAgICAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG4gICAgICAgIHdpZHRoOiA2NTBweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmRhdGUtY29udGFpbmVyIHtcclxuICAgICAgICBtYXJnaW46IDFyZW0gMCAxcmVtIGF1dG87XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMC41cmVtO1xyXG4gICAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgJHtjb2xvcnMucHJpbWFyeX07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5kYXRlLXRpbWUge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmRhdGUtY29udGFpbmVyIGg0IHtcclxuICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgICBwYWRkaW5nOiAwIDFyZW0gMCAxLjVyZW07XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5jb21tZW50LWJ0bnMge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMS4xNXJlbTtcclxuXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGJ1dHRvbiB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIH1cclxuXHJcbiAgICBpIHtcclxuICAgICAgY29sb3I6ICR7Y29sb3JzLnByaW1hcnl9O1xyXG4gICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgICAgdHJhbnNpdGlvbjogY29sb3IgMC4ycyBlYXNlLWluLW91dDtcclxuICAgIH1cclxuXHJcbiAgICAuY29tbWVudC1idG5zIGkge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB9XHJcblxyXG4gICAgaS5mYS1wZW5jaWwtc3F1YXJlLW8ge1xyXG4gICAgICB0b3A6IDhweDtcclxuICAgICAgbGVmdDogLTJweDtcclxuICAgIH1cclxuXHJcbiAgICBpLmZhLXRyYXNoIHtcclxuICAgICAgdG9wOiA2cHg7XHJcbiAgICAgIGxlZnQ6IDBweDtcclxuICAgIH1cclxuXHJcbiAgICBpOmhvdmVyIHtcclxuICAgICAgY29sb3I6ICNlNTMwNWE7XHJcbiAgICB9XHJcblxyXG4gICAgYnV0dG9uOmZvY3VzIHtcclxuICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICBzZWN0aW9uI2VkaXQtY29tbWVudCB7XHJcbiAgICAgIHdpZHRoOiA4NSU7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xyXG4gICAgfVxyXG5cclxuICAgIGZvcm0jZWRpdC1mb3JtIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgdGV4dGFyZWEge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgZm9udDogaW5oZXJpdDtcclxuICAgICAgcGFkZGluZzogMC41cmVtO1xyXG4gICAgfVxyXG5cclxuICAgICNlZGl0LWNvbW1lbnQgYnV0dG9uIHtcclxuICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICBwYWRkaW5nOiAwIDAuNXJlbTtcclxuICAgIH1cclxuXHJcbiAgICAuZWRpdC1idG5zIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgIH1cclxuXHJcbiAgICBpLmZhLXBlbmNpbCB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAwLjVyZW07XHJcbiAgICB9XHJcblxyXG4gICAgaS5mYS13aW5kb3ctY2xvc2Uge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcclxuICAgIH1cclxuXHJcbiAgICAvKiBNZWRpYSBxdWVyaWVzICovXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogMTE1MHB4ICkge1xyXG4gICAgICBwIHtcclxuICAgICAgICB3aWR0aDogNDAwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogMTA3MHB4ICkge1xyXG4gICAgICBwIHtcclxuICAgICAgICB3aWR0aDogMzUwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogMTAwMHB4ICkge1xyXG4gICAgICBwIHtcclxuICAgICAgICB3aWR0aDogMzAwcHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5hdmF0YXIge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5jb250ZW50IHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLyogLmNvbW1lbnQge1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIH0gKi9cclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogODYwcHgpIHtcclxuICAgICAgLmNvbW1lbnQge1xyXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuZGF0ZS1jb250YWluZXIge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IC0xMXB4O1xyXG4gICAgICAgIHJpZ2h0OiAtN3B4O1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmVkaXQtYnRucyB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMnB4O1xyXG4gICAgICAgIHJpZ2h0OiAxcHg7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0ZXh0YXJlYSB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMS40cmVtO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuZGF0ZS10aW1lIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDgzMHB4KSB7XHJcbiAgICAgIC5jb250ZW50IHtcclxuICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuY29tbWVudCB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgfVxyXG5cclxuICAgICAgcCB7XHJcbiAgICAgICAgd2lkdGg6IDQ4MHB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEuNXJlbTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmF2YXRhciB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMThweDtcclxuICAgICAgICBsZWZ0OiAxNnB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuY29tbWVudGVyIGgzIHtcclxuICAgICAgICBtYXJnaW46IDAuN3JlbSAwcmVtIDByZW0gNC4zcmVtO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuY29tbWVudGVyIHtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHNlY3Rpb24jZWRpdC1jb21tZW50IHtcclxuICAgICAgICB3aWR0aDogOTIlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDgwMHB4ICkge1xyXG4gICAgICBwIHtcclxuICAgICAgICB3aWR0aDogNTl2dztcclxuICAgICAgICAvKiBtYXJnaW4tcmlnaHQ6IDAuNXJlbTsgKi9cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKiBNZWRpYSBxdWVyaWVzICovXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHggKSB7XHJcbiAgICAgIC5hdmF0YXIge1xyXG4gICAgICAgIC8qIGRpc3BsYXk6IG5vbmU7ICovXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5jb21tZW50ZXIge1xyXG4gICAgICAgIGJvcmRlci1yaWdodDogbm9uZTtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgcCB7XHJcbiAgICAgICAgLyogb3ZlcmZsb3c6IHNjcm9sbDsgKi9cclxuICAgICAgICAvKiBoZWlnaHQ6IDEwMHB4OyAqL1xyXG4gICAgICAgIC8qIHdvcmQtd3JhcDogYnJlYWstd29yZDsgKi9cclxuICAgICAgICB3aWR0aDogNTV2dztcclxuICAgICAgfVxyXG5cclxuICAgICAgLmNvbnRlbnQge1xyXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNjYwcHgpIHtcclxuICAgICAgcCB7XHJcbiAgICAgICAgd2lkdGg6IDY4dnc7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNjEwcHgpIHtcclxuICAgICAgc2VjdGlvbiNlZGl0LWNvbW1lbnQge1xyXG4gICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5jb250ZW50IHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDByZW07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGgzIHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDAuNnJlbTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1NjBweCkge1xyXG4gICAgICBwIHtcclxuICAgICAgICAvKiB3aWR0aDogNDV2dzsgKi9cclxuICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xyXG4gICAgICBwIHtcclxuICAgICAgICB3aWR0aDogNjV2dztcclxuICAgICAgICAvKiBmb250LXNpemU6IDAuOXJlbTsgKi9cclxuICAgICAgfVxyXG5cclxuICAgICAgLmNvbW1lbnQge1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAxcmVtO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuYXZhdGFyIHtcclxuICAgICAgICB0b3A6IDMzcHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ0MHB4KSB7XHJcbiAgICAgIHAge1xyXG4gICAgICAgIHdpZHRoOiA2M3Z3O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDQyMHB4KSB7XHJcbiAgICAgIHAge1xyXG4gICAgICAgIHdpZHRoOiA2OXZ3O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDM2MHB4KSB7XHJcbiAgICAgIHAge1xyXG4gICAgICAgIHdpZHRoOiA2NXZ3O1xyXG4gICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICBcclxuICAgIGB9PC9zdHlsZT5cclxuXHJcbiAgPC8+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb21tZW50OyJdfQ== */
/*@ sourceURL=C:\\Coding\\MyProjects\\coders-jukebox\\components\\Comment.js */`));
};

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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxDb2RpbmdcXE15UHJvamVjdHNcXGNvZGVycy1qdWtlYm94XFxjb21wb25lbnRzXFxDb21tZW50U2VjdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpRGtCLEFBSXVCLEFBU0UsQUFJRixBQUlHLEFBS0MsQUFRRyxBQWNDLEFBT1YsQUFPQSxBQU9BLEFBUUEsQUFTRyxVQTlCRCxBQVFkLEFBTWUsQUFRRSxHQVVqQixDQW5GYSxBQWFmLEVBSkEsQ0FRbUIsQ0FLTixJQXNCYixBQVFFLENBdEJVLEFBcUNWLEVBUUEsRUExRXVCLEVBc0JWLEtBTGYsQ0FhcUIsT0FQRixRQXRCRSxNQThCRixHQVBGLFVBdEJILEtBdUJkLENBT2dCLE1BN0IwQixVQThCOUIsWUFDRyxlQUNBLEdBL0JmLFlBZ0NpQixpQkFDNEIsa0dBRTdDIiwiZmlsZSI6IkM6XFxDb2RpbmdcXE15UHJvamVjdHNcXGNvZGVycy1qdWtlYm94XFxjb21wb25lbnRzXFxDb21tZW50U2VjdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQ29tbWVudCBmcm9tICcuL0NvbW1lbnQnO1xyXG5pbXBvcnQgeyBHbG9iYWxDb250ZXh0IH0gZnJvbSAnLi4vY29udGV4dC9HbG9iYWxDb250ZXh0JztcclxuaW1wb3J0IGNvbG9ycyBmcm9tICcuLi9jc3MtdmFyaWFibGVzL2NvbG9ycyc7XHJcblxyXG5jb25zdCBDb21tZW50U2VjdGlvbiA9ICh7IHByb2ZpbGVVc2VyIH0pID0+IHtcclxuXHJcbiAgY29uc3QgeyBhZGRDb21tZW50LCBhdXRoU3RhdGV9ID0gdXNlQ29udGV4dChHbG9iYWxDb250ZXh0KTtcclxuXHJcbiAgY29uc3QgW2NvbnRlbnQsIHNldENvbnRlbnRdID0gdXNlU3RhdGUoJycpO1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgc2V0Q29udGVudChlLnRhcmdldC52YWx1ZSk7XHJcbiAgfVxyXG4gIFxyXG4gIGNvbnN0IGNvbW1lbnRTdWJtaXRIYW5kbGVyID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGFkZENvbW1lbnQoY29udGVudCk7XHJcbiAgICBzZXRDb250ZW50KCcnKTtcclxuICB9XHJcblxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gaWQ9XCJjb21tZW50LXNlY3Rpb25cIj5cclxuICAgICAgPGgyPkNvbW1lbnRzPC9oMj4gXHJcblxyXG4gICAgICA8c2VjdGlvbiBpZD1cImNvbW1lbnRzXCI+XHJcbiAgICAgICAge3Byb2ZpbGVVc2VyLnBsYXlsaXN0Q29tbWVudHMubGVuZ3RoID09PSAwICYmIFxyXG4gICAgICAgICAgPGgzPkJlIHRoZSBmaXJzdCB0byBhZGQgYSBjb21tZW50ITwvaDM+XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB7cHJvZmlsZVVzZXIucGxheWxpc3RDb21tZW50cy5tYXAoY29tbWVudCA9PiAoXHJcbiAgICAgICAgICA8Q29tbWVudCBjb21tZW50PXtjb21tZW50fSBrZXk9e2NvbW1lbnQuX2lkfS8+XHJcbiAgICAgICAgKVxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvc2VjdGlvbj5cclxuXHJcbiAgICAgIHthdXRoU3RhdGUuYXV0aGVudGljYXRlZCA9PT0gdHJ1ZSAmJlxyXG4gICAgICAgIDxzZWN0aW9uIGlkPVwiYWRkLWNvbW1lbnRcIj5cclxuICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXsoZSkgPT4gY29tbWVudFN1Ym1pdEhhbmRsZXIoZSl9PlxyXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImNvbW1lbnQtaW5wdXRcIj5BZGQgYSBjb21tZW50PC9sYWJlbD5cclxuICAgICAgICAgICAgPHRleHRhcmVhIG5hbWU9XCJjb21tZW50LWlucHV0XCIgaWQ9XCJjb21tZW50LWlucHV0XCIgdmFsdWU9e2NvbnRlbnR9IGNvbHM9XCIzMFwiIHJvd3M9XCIzXCIgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0+PC90ZXh0YXJlYT5cclxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+UG9zdDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICBcclxuICAgICAgc2VjdGlvbiNjb21tZW50LXNlY3Rpb24ge1xyXG4gICAgICAgIG1hcmdpbjogM3JlbSAwO1xyXG4gICAgICAgIHBhZGRpbmc6IDNyZW07XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgYmFja2dyb3VuZDogJHtjb2xvcnMuZ3JhZGllbnR9O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBzZWN0aW9uI2NvbW1lbnRzIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBmb3JtIHtcclxuICAgICAgICBtYXJnaW46IDFyZW0gMDtcclxuICAgICAgfVxyXG5cclxuICAgICAgbGFiZWwge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0ZXh0YXJlYSB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMC41cmVtO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGZvbnQ6IGluaGVyaXQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICAgICAgcGFkZGluZzogMC41cmVtO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBidXR0b24ge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICBwYWRkaW5nOiAwLjc1cmVtIDFyZW07XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgIG1hcmdpbjogMC41cmVtIDA7XHJcbiAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZS1pbi1vdXQ7XHJcblxyXG4gICAgICB9XHJcblxyXG4gICAgICBidXR0b246aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8qIE1lZGlhIHF1ZXJpZXMgKi9cclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDExNTBweCApIHtcclxuXHJcbiAgICAgICAgc2VjdGlvbiNjb21tZW50LXNlY3Rpb24ge1xyXG4gICAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2NjBweCApIHtcclxuICAgICAgICBzZWN0aW9uI2NvbW1lbnQtc2VjdGlvbiB7XHJcbiAgICAgICAgICB3aWR0aDogOTUlO1xyXG4gICAgICAgICAgLyogbWFyZ2luOiBhdXRvOyAqL1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDYyMHB4ICkge1xyXG4gICAgICAgIHNlY3Rpb24jY29tbWVudC1zZWN0aW9uIHtcclxuICAgICAgICAgIHdpZHRoOiA5NSU7XHJcbiAgICAgICAgICBwYWRkaW5nOiAycmVtO1xyXG4gICAgICAgICAgLyogbWFyZ2luOiBhdXRvOyAqL1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDM5MHB4ICkge1xyXG4gICAgICAgIHNlY3Rpb24jY29tbWVudC1zZWN0aW9uIHtcclxuICAgICAgICAgIHdpZHRoOiA5NSU7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxLjVyZW07XHJcbiAgICAgICAgICAvKiBtYXJnaW46IGF1dG87ICovXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogMzYwcHggKSB7XHJcbiAgICAgICAgc2VjdGlvbiNjb21tZW50LXNlY3Rpb24ge1xyXG4gICAgICAgICAgLyogd2lkdGg6IDk1JTsgKi9cclxuICAgICAgICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICAgICAgICAvKiBtYXJnaW46IGF1dG87ICovXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICBcclxuICAgIGB9PC9zdHlsZT5cclxuXHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb21tZW50U2VjdGlvbjsiXX0= */
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
    src: `/image/${favUser.profilePhotoFilename}`,
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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxDb2RpbmdcXE15UHJvamVjdHNcXGNvZGVycy1qdWtlYm94XFxjb21wb25lbnRzXFxGYXZvdXJpdGVJdGVtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVFa0IsQUFJeUIsQUFRRyxBQVFMLEFBSUEsQUFJRCxBQVl1QixBQUlwQixBQUlJLEFBS0YsQUFRSCxBQUtBLEFBS0ssV0ExQ1AsQUFpQ0csQUFNZCxDQS9DRixBQUlBLEVBcEJvQixBQXdDcEIsQUFTaUIsRUFrQmYsQ0EzRGdCLENBb0NsQixJQW5Cb0IsQ0FpQ2xCLElBUkEsS0FqRGEsQ0FRRyxPQWlCRSxLQXhCQSxJQVFDLFNBaUJYLEtBeEJzQyxHQXlCcEMsRUFqQmdCLFFBa0JILEFBT3pCLGtCQXhCQSxLQWtCbUIsVUExQm5CLE9BMkJxQyxtQ0FDckMiLCJmaWxlIjoiQzpcXENvZGluZ1xcTXlQcm9qZWN0c1xcY29kZXJzLWp1a2Vib3hcXGNvbXBvbmVudHNcXEZhdm91cml0ZUl0ZW0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlQ29udGV4dCwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBHbG9iYWxDb250ZXh0IH0gZnJvbSAnLi4vY29udGV4dC9HbG9iYWxDb250ZXh0JztcclxuaW1wb3J0IGNvbG9ycyBmcm9tICcuLi9jc3MtdmFyaWFibGVzL2NvbG9ycyc7XHJcblxyXG5jb25zdCBGYXZvdXJpdGVJdGVtID0gKHtpZH0pID0+IHtcclxuXHJcbiAgY29uc3QgeyBnZXRGYXZvdXJpdGVVc2VyLCBmZXRjaFByb2ZpbGVVc2VyLCByZW1vdmVGYXZvdXJpdGUsIGN1cnJlbnRVc2VyLCBwcm9maWxlVXNlciwgYXV0aFN0YXRlIH0gPSB1c2VDb250ZXh0KEdsb2JhbENvbnRleHQpO1xyXG4gIFxyXG4gIGNvbnN0IFtmYXZVc2VyLCBzZXRGYXZVc2VyXSA9IHVzZVN0YXRlKHt9KTtcclxuXHJcbiAgY29uc3QgZmF2VXNlckNsaWNrSGFuZGxlciA9ICgpID0+IHtcclxuICAgIGZldGNoUHJvZmlsZVVzZXIoaWQsIGZhbHNlKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHJlbW92ZUZhdkhhbmRsZXIgPSAoKSA9PiB7XHJcbiAgICByZW1vdmVGYXZvdXJpdGUoaWQpO1xyXG4gIH1cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgY29uc3QgdXNlckRhdGEgPSBhd2FpdCBnZXRGYXZvdXJpdGVVc2VyKGlkKTtcclxuICAgICAgc2V0RmF2VXNlcih7XHJcbiAgICAgICAgZmlyc3ROYW1lOiB1c2VyRGF0YS5maXJzdE5hbWUsXHJcbiAgICAgICAgbGFzdE5hbWU6IHVzZXJEYXRhLmxhc3ROYW1lLFxyXG4gICAgICAgIHByb2ZpbGVQaG90b0ZpbGVuYW1lOiB1c2VyRGF0YS5wcm9maWxlUGhvdG9GaWxlbmFtZSxcclxuICAgICAgICBpZFxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gICAgZmV0Y2hEYXRhKCk7XHJcbiAgfSwgW2lkXSlcclxuICBcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgaWQ9XCJmYXZvdXJpdGUtaXRlbVwiPlxyXG4gICAgICB7LyogPGg0PkF2YXRhcjwvaDQ+ICovfVxyXG4gICAgICA8ZGl2IGlkPVwiYXZhdGFyXCI+XHJcbiAgICAgICAge2ZhdlVzZXIucHJvZmlsZVBob3RvRmlsZW5hbWUgPT09IG51bGwgJiZcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNyb3BcIj5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvZmlsZS9bdXNlcklkXVwiIGFzPXtgL3Byb2ZpbGUvJHtpZH1gfT5cclxuICAgICAgICAgICAgPGEgb25DbGljaz17ZmF2VXNlckNsaWNrSGFuZGxlcn0+XHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9XCIvZGVmYXVsdC1hdmF0YXIuanBnXCIgYWx0PVwiYXZhdGFyXCIgLz5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgICAgIH0gXHJcblxyXG4gICAgICAgIHtmYXZVc2VyLnByb2ZpbGVQaG90b0ZpbGVuYW1lICE9PSBudWxsICYmIGZhdlVzZXIucHJvZmlsZVBob3RvRmlsZW5hbWUgIT09ICcnICYmIGZhdlVzZXIucHJvZmlsZVBob3RvRmlsZW5hbWUgIT09IHVuZGVmaW5lZCAmJlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3JvcFwiPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9maWxlL1t1c2VySWRdXCIgYXM9e2AvcHJvZmlsZS8ke2lkfWB9PlxyXG4gICAgICAgICAgICA8YSBvbkNsaWNrPXtmYXZVc2VyQ2xpY2tIYW5kbGVyfT5cclxuICAgICAgICAgICAgICA8aW1nIHNyYz17YC9pbWFnZS8ke2ZhdlVzZXIucHJvZmlsZVBob3RvRmlsZW5hbWV9YH0gYWx0PVwiYXZhdGFyXCIgLz5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIH1cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8TGluayBocmVmPVwiL3Byb2ZpbGUvW3VzZXJJZF1cIiBhcz17YC9wcm9maWxlLyR7aWR9YH0+XHJcbiAgICAgICAgPGEgb25DbGljaz17ZmF2VXNlckNsaWNrSGFuZGxlcn0+PGgzPntmYXZVc2VyLmZpcnN0TmFtZX0ge2ZhdlVzZXIubGFzdE5hbWV9PC9oMz48L2E+XHJcbiAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgIFxyXG4gICAgICB7IGF1dGhTdGF0ZS5hdXRoZW50aWNhdGVkID09PSB0cnVlICYmIGN1cnJlbnRVc2VyLmlkID09PSBwcm9maWxlVXNlci5pZCAmJlxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17cmVtb3ZlRmF2SGFuZGxlcn0+XHJcbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS10aW1lcy1jaXJjbGVcIj48L2k+XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIFxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgIFxyXG4gICAgICAgICNmYXZvdXJpdGUtaXRlbSB7XHJcbiAgICAgICAgICBtYXJnaW46IDAgMXJlbTtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgIHBhZGRpbmc6IDJyZW07XHJcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAke2NvbG9ycy5wcmltYXJ5fTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jcm9wIHtcclxuICAgICAgICAgIG1heC1oZWlnaHQ6IDEwMHB4O1xyXG4gICAgICAgICAgbWF4LXdpZHRoOiAxMDBweDtcclxuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG8gMC44cmVtIGF1dG87XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhIHtcclxuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICB3aWR0aDogNDBweDtcclxuICAgICAgICAgIGhlaWdodDogOHB4O1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgdG9wOiAwcHg7XHJcbiAgICAgICAgICByaWdodDogOHB4O1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgICAgICAgIGNvbG9yOiAke2NvbG9ycy5wcmltYXJ5fTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGkge1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgMC4ycyBlYXNlLWluLW91dDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgaTpob3ZlciB7XHJcbiAgICAgICAgICBjb2xvcjogI2U1MzA1YTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGgzIHtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2OTBweCApIHtcclxuICAgICAgICAgICNmYXZvdXJpdGUtaXRlbSB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCAxcmVtO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0NTBweCApIHtcclxuICAgICAgICAgIC5jcm9wIHtcclxuICAgICAgICAgICAgd2lkdGg6IDgwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogODBweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICB3aWR0aDogODBweDtcclxuICAgICAgICAgICAgLyogcGFkZGluZy10b3A6IDFyZW07ICovXHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgI2F2YXRhciB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIFxyXG4gICAgICBgfTwvc3R5bGU+XHJcblxyXG5cclxuXHJcblxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGYXZvdXJpdGVJdGVtOyJdfQ== */
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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxDb2RpbmdcXE15UHJvamVjdHNcXGNvZGVycy1qdWtlYm94XFxjb21wb25lbnRzXFxGaWxlVXBsb2FkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRDa0IsQUFJMkIsQUFNRyxBQUlOLEFBS0UsQUFJRyxBQUtGLEFBSUwsQUFLRyxXQUpFLEdBS2xCLENBbEJBLENBZm9ELEFBd0JwRCxFQUxlLENBYmYsUUF1QkEsSUFUQSxtQ0FuQm1CLFFBU0ssU0FSeEIscUVBU0EiLCJmaWxlIjoiQzpcXENvZGluZ1xcTXlQcm9qZWN0c1xcY29kZXJzLWp1a2Vib3hcXGNvbXBvbmVudHNcXEZpbGVVcGxvYWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlQ29udGV4dH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IEdsb2JhbENvbnRleHQgfSBmcm9tICcuLi9jb250ZXh0L0dsb2JhbENvbnRleHQnO1xyXG5pbXBvcnQgY29sb3JzIGZyb20gJy4uL2Nzcy12YXJpYWJsZXMvY29sb3JzJztcclxuXHJcbmNvbnN0IEZpbGVVcGxvYWQgPSAoe3NldEVkaXRNb2RlfSkgPT4ge1xyXG5cclxuICBjb25zdCBbZmlsZSwgc2V0RmlsZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2ZpbGVuYW1lLCBzZXRGaWxlbmFtZV0gPSB1c2VTdGF0ZSgnVXBsb2FkIHBob3RvIC0gbWF4IHNpemUgNzAgS0InKTtcclxuXHJcbiAgY29uc3QgeyB1cGxvYWRGaWxlIH0gPSB1c2VDb250ZXh0KEdsb2JhbENvbnRleHQpO1xyXG5cclxuICBjb25zdCB1cGxvYWRGaWxlSGFuZGxlciA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgLy8gQ2hlY2sgZm9yIG1heCBzaXplXHJcbiAgICBpZiAoZmlsZS5zaXplID4gNzAwMDApIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICBmb3JtRGF0YS5hcHBlbmQoJ2ZpbGUnLCBmaWxlKTtcclxuXHJcbiAgICB1cGxvYWRGaWxlKGZvcm1EYXRhKTtcclxuICAgIHNldEVkaXRNb2RlKGZhbHNlKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IG9uQ2hhbmdlID0gKGUpID0+IHtcclxuICAgIHNldEZpbGUoZS50YXJnZXQuZmlsZXNbMF0pO1xyXG4gICAgc2V0RmlsZW5hbWUoZS50YXJnZXQuZmlsZXNbMF0ubmFtZSk7XHJcbiAgfVxyXG5cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgaWQ9XCJmaWxlLXVwbG9hZFwiPlxyXG4gICAgICA8aDI+VXBsb2FkIGEgcHJvZmlsZSBwaG90bzo8L2gyPlxyXG4gICAgICA8Zm9ybSBvblN1Ym1pdD17KGUpID0+IHVwbG9hZEZpbGVIYW5kbGVyKGUpfT5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBuYW1lPVwiZmlsZVwiIGlkPVwiZmlsZVwiIGNsYXNzTmFtZT1cImN1c3RvbS1maWxlLWlucHV0XCIgb25DaGFuZ2U9e29uQ2hhbmdlfSAvPlxyXG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZmlsZVwiIGNsYXNzTmFtZT1cImN1c3RvbS1maWxlLWxhYmVsXCI+XHJcbiAgICAgICAgICB7ZmlsZW5hbWV9XHJcbiAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIlVwbG9hZFwiPlVwbG9hZDwvYnV0dG9uPlxyXG4gICAgICA8L2Zvcm0+XHJcblxyXG5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICBcclxuICAgICAgICAjZmlsZS11cGxvYWQge1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogM3JlbTtcclxuICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAke2NvbG9ycy5wcmltYXJ5fTtcclxuICAgICAgICAgIHBhZGRpbmctdG9wOiAycmVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgI2ZpbGUtdXBsb2FkIGgyIHtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICBcclxuICAgICAgICBmb3JtIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW5wdXRbdHlwZT1cImZpbGVcIl0ge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW5wdXQjZmlsZS11cGxvYWQtYnV0dG9uIHtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsYWJlbCB7XHJcbiAgICAgICAgICBtYXJnaW46IDAuNXJlbSAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgIHdpZHRoOiA4M3B4O1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgbWFyZ2luOiAxcmVtIDA7IFxyXG4gICAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIGB9PC9zdHlsZT5cclxuXHJcbiAgICA8L2Rpdj4gXHJcblxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmlsZVVwbG9hZDtcclxuIl19 */
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
    zIndex: -10
  },
  visible: {
    opacity: 1,
    y: 0,
    zIndex: -10,
    transition: {
      duration: 0.5
    }
  },
  exit: {
    opacity: 0,
    y: -500,
    zIndex: -10
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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxDb2RpbmdcXE15UHJvamVjdHNcXGNvZGVycy1qdWtlYm94XFxjb21wb25lbnRzXFxQcm9maWxlRWRpdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzS2tCLEFBS2tDLEFBT1YsQUFLQSxBQUlNLEFBSUcsQUFTQSxBQVdOLEFBSUgsQUFNSSxBQUlJLEFBSVgsQUFJTSxBQVFELEFBS0MsQUFNRyxBQU9OLEFBS1csQUFTRixBQUlGLEFBTUwsQUFPd0IsQUFNeEIsQUFJZSxBQUlILEFBTWhCLFNBQ0UsQ0FqRmYsQ0E4QitCLEVBNUUvQixBQWdDK0IsQUFvRUYsQUFhM0IsRUF2RGUsQ0E5QmpCLEFBVUEsQUFZQSxBQWEwQixFQStCZCxDQTFGWixBQWlFQSxDQXFCRSxBQXNDQSxDQXRGRixDQWxDYyxBQVNELENBN0JRLEVBcUluQixDQTFCWSxFQXNCWixFQTFERixHQXpDb0IsQ0FUQSxFQXVGbEIsQUFXQSxFQTlCQSxBQXdCQSxFQXBDSCxFQTVFbUIsQ0E2Q2xCLFFBZmUsQ0FUQSxNQXBCRixNQThCRSxDQVRGLElBcEJiLEtBSWdDLEVBaUJaLENBU0EsQ0E0REUsYUFoQnRCLEdBcERBLENBU29CLENBNERsQixpQkEzRGEsYUFDZiwrREE1QkEiLCJmaWxlIjoiQzpcXENvZGluZ1xcTXlQcm9qZWN0c1xcY29kZXJzLWp1a2Vib3hcXGNvbXBvbmVudHNcXFByb2ZpbGVFZGl0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlUmVmLCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBHbG9iYWxDb250ZXh0IH0gZnJvbSAnLi4vY29udGV4dC9HbG9iYWxDb250ZXh0JztcclxuaW1wb3J0IEZpbGVVcGxvYWQgZnJvbSAnLi9GaWxlVXBsb2FkJztcclxuaW1wb3J0IGNvbG9ycyBmcm9tICcuLi9jc3MtdmFyaWFibGVzL2NvbG9ycyc7XHJcbmltcG9ydCB7IG1vdGlvbiwgQW5pbWF0ZVByZXNlbmNlIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XHJcblxyXG5cclxuY29uc3QgZWRpdFZhcmlhbnRzID0ge1xyXG4gIGhpZGRlbjogeyBvcGFjaXR5OiAwLCB5OiAtNTAwLCB6SW5kZXg6IC0xMH0sXHJcbiAgdmlzaWJsZTogeyBcclxuICAgIG9wYWNpdHk6IDEsXHJcbiAgICB5OiAwLFxyXG4gICAgekluZGV4OiAtMTAsXHJcbiAgICB0cmFuc2l0aW9uOiB7XHJcbiAgICAgIGR1cmF0aW9uOiAwLjVcclxuICAgIH1cclxuICB9LFxyXG4gIGV4aXQ6IHsgb3BhY2l0eTogMCwgeTogLTUwMCwgekluZGV4OiAtMTAgfVxyXG59XHJcblxyXG5cclxuY29uc3QgUHJvZmlsZUVkaXQgPSAoe3NldEVkaXRNb2RlfSkgPT4ge1xyXG5cclxuICBjb25zdCB7IHVwZGF0ZVVzZXIsIHByb2ZpbGVVc2VyLCB1cGxvYWRQaG90byB9ID0gdXNlQ29udGV4dChHbG9iYWxDb250ZXh0KTtcclxuXHJcbiAgLy8gLy8gRmV0Y2ggdGhlIHVwZGF0ZWQgcHJvZmlsZSBpbmZvIHRvIHByZWZpbGwgZm9ybVxyXG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgLy8gICBmZXRjaFByb2ZpbGVVc2VyKHVzZXJJZCwgZmFsc2UpO1xyXG4gIC8vIH1cclxuXHJcbiAgLy8gUHJlZmlsbCB0aGUgZm9ybSB3aXRoIHRoZSBjdXJyZW50IGluZm9cclxuICBjb25zdCBbIHByb2ZpbGVJbmZvLCBzZXRQcm9maWxlSW5mbyBdID0gdXNlU3RhdGUoe1xyXG4gICAgZmlyc3ROYW1lOiBwcm9maWxlVXNlci5maXJzdE5hbWUsXHJcbiAgICBsYXN0TmFtZTogcHJvZmlsZVVzZXIubGFzdE5hbWUsXHJcbiAgICBqb2JUaXRsZTogcHJvZmlsZVVzZXIuam9iVGl0bGUsXHJcbiAgICBsb2NhdGlvbjogcHJvZmlsZVVzZXIubG9jYXRpb24sXHJcbiAgICBsYW5ndWFnZXM6IHByb2ZpbGVVc2VyLmxhbmd1YWdlcyxcclxuICAgIGFib3V0OiBwcm9maWxlVXNlci5hYm91dFxyXG4gIH0pXHJcbiAgXHJcbiAgXHJcbiAgLy8gQ3JlYXRlIHJlZnNcclxuICBjb25zdCBmaXJzdE5hbWVSZWYgPSB1c2VSZWYoKTtcclxuICBjb25zdCBsYXN0TmFtZVJlZiA9IHVzZVJlZigpO1xyXG4gIGNvbnN0IGpvYlRpdGxlUmVmID0gdXNlUmVmKCk7XHJcbiAgY29uc3QgbG9jYXRpb25SZWYgPSB1c2VSZWYoKTtcclxuICBjb25zdCBsYW5ndWFnZTFSZWYgPSB1c2VSZWYoKTtcclxuICBjb25zdCBsYW5ndWFnZTJSZWYgPSB1c2VSZWYoKTtcclxuICBjb25zdCBsYW5ndWFnZTNSZWYgPSB1c2VSZWYoKTtcclxuICBjb25zdCBsYW5ndWFnZTRSZWYgPSB1c2VSZWYoKTtcclxuICBjb25zdCBhYm91dFJlZiA9IHVzZVJlZigpO1xyXG5cclxuICBcclxuICBjb25zdCB1cGRhdGVQcm9maWxlSGFuZGxlciA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgLy8gR2V0IGNyZWRlbnRpYWxzIGZyb20gcmVmc1xyXG4gICAgY29uc3QgZmlyc3ROYW1lID0gZmlyc3ROYW1lUmVmLmN1cnJlbnQudmFsdWU7XHJcbiAgICBjb25zdCBsYXN0TmFtZSA9IGxhc3ROYW1lUmVmLmN1cnJlbnQudmFsdWU7XHJcbiAgICBjb25zdCBqb2JUaXRsZSA9IGpvYlRpdGxlUmVmLmN1cnJlbnQudmFsdWU7XHJcbiAgICBjb25zdCBsb2NhdGlvbiA9IGxvY2F0aW9uUmVmLmN1cnJlbnQudmFsdWU7XHJcbiAgICBjb25zdCBsYW5ndWFnZTEgPSBsYW5ndWFnZTFSZWYuY3VycmVudC52YWx1ZTtcclxuICAgIGNvbnN0IGxhbmd1YWdlMiA9IGxhbmd1YWdlMlJlZi5jdXJyZW50LnZhbHVlO1xyXG4gICAgY29uc3QgbGFuZ3VhZ2UzID0gbGFuZ3VhZ2UzUmVmLmN1cnJlbnQudmFsdWU7XHJcbiAgICBjb25zdCBsYW5ndWFnZTQgPSBsYW5ndWFnZTRSZWYuY3VycmVudC52YWx1ZTtcclxuICAgIGNvbnN0IGxhbmd1YWdlcyA9IFtsYW5ndWFnZTEsIGxhbmd1YWdlMiwgbGFuZ3VhZ2UzLCBsYW5ndWFnZTRdXHJcbiAgICBjb25zdCBhYm91dCA9IGFib3V0UmVmLmN1cnJlbnQudmFsdWU7XHJcblxyXG4gICAgLy8gQ2hlY2sgaWYgYW55IG5hbWVzIGZpZWxkcyBhcmUgZW1wdHlcclxuICAgIGlmIChmaXJzdE5hbWUudHJpbSgpLmxlbmd0aCA9PT0gMCB8fCBsYXN0TmFtZS50cmltKCkubGVuZ3RoID09PSAwICkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ2FsbCByZWdpc3RlciBhY3Rpb24gdG8gc2VuZCBhIHBvc3QgcmVxdWVzdCB0byBBUEkgYW5kIGNoYW5nZSB0aGUgbG9jYWwgYW5kIGdsb2JhbCBzdGF0ZVxyXG4gICAgYXdhaXQgdXBkYXRlVXNlcihmaXJzdE5hbWUsIGxhc3ROYW1lLCBqb2JUaXRsZSwgbG9jYXRpb24sIGxhbmd1YWdlcywgYWJvdXQpO1xyXG5cclxuICAgIC8vQ2xvc2UgdGhlIGVkaXQgcHJvZmlsZSBzZWN0aW9uIC0gc2V0IGVkaXQgdG8gZmFsc2Ugb24gcHJvZmlsZSBwYWdlXHJcbiAgICBzZXRFZGl0TW9kZShmYWxzZSk7XHJcbiAgICBcclxuICB9XHJcblxyXG4gIGNvbnN0IGdldEV4aXN0aW5nTGFuZ3VhZ2VzID0gKCkgPT4ge1xyXG4gICAgaWYgKHByb2ZpbGVJbmZvLmxhbmd1YWdlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHJldHVybiBwcm9maWxlSW5mby5sYW5ndWFnZXM7XHJcbiAgICB9XHJcblxyXG4gICAgZWxzZSByZXR1cm4gWycnLCAnJywgJycsICcnXVxyXG4gIH0gXHJcblxyXG5cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxBbmltYXRlUHJlc2VuY2U+XHJcbiAgICA8bW90aW9uLmRpdiB2YXJpYW50cz17ZWRpdFZhcmlhbnRzfSBpbml0aWFsPSdoaWRkZW4nIGFuaW1hdGU9J3Zpc2libGUnIGV4aXQ9J2V4aXQnPlxyXG4gICAgICA8c2VjdGlvbiBpZD1cInByb2ZpbGUtZWRpdFwiPlxyXG4gICAgICA8ZGl2IGlkPVwiZWRpdC1jb250YWluZXJcIj5cclxuXHJcbiAgICAgICAgPGRpdiBpZD1cImNvbDFcIj5cclxuICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXsoZSkgPT4gdXBkYXRlUHJvZmlsZUhhbmRsZXIoZSl9IGlkPVwidXBkYXRlLWZvcm1cIj5cclxuICAgICAgICAgIDxoMj5VcGRhdGUgUHJvZmlsZSBJbmZvOjwvaDI+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJmaXJzdE5hbWVcIj5GaXJzdCBOYW1lOiA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiZmlyc3ROYW1lXCIgZGVmYXVsdFZhbHVlPXtwcm9maWxlSW5mby5maXJzdE5hbWV9ICByZWY9e2ZpcnN0TmFtZVJlZn0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJsYXN0TmFtZVwiPkxhc3QgTmFtZTo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwibGFzdE5hbWVcIiBkZWZhdWx0VmFsdWU9e3Byb2ZpbGVJbmZvLmxhc3ROYW1lfSByZWY9e2xhc3ROYW1lUmVmfSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIkpvYlRpdGxlXCI+Sm9iIFRpdGxlOjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJqb2JUaXRsZVwiIGRlZmF1bHRWYWx1ZT17cHJvZmlsZUluZm8uam9iVGl0bGV9IHJlZj17am9iVGl0bGVSZWZ9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibG9jYXRpb25cIj5Mb2NhdGlvbjo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwibG9jYXRpb25cIiBkZWZhdWx0VmFsdWU9e3Byb2ZpbGVJbmZvLmxvY2F0aW9ufSByZWY9e2xvY2F0aW9uUmVmfSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBpZD1cImxhbmd1YWdlc1wiPlxyXG4gICAgICAgICAgICAgIDxoND5NYWluIFByb2dyYW1taW5nIExhbmd1YWdlcyBVc2VkOjwvaDQ+XHJcbiAgICAgICAgICAgICAgPGRpdiBpZD1cImxhbmd1YWdlLWlucHV0LWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJsYW5ndWFnZTFcIiBjbGFzc05hbWU9XCJsYW5ndWFnZS1sYWJlbFwiPjEuPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwibGFuZ3VhZ2UtaW5wdXRcIiBpZD1cImxhbmd1YWdlMVwiIGRlZmF1bHRWYWx1ZT17Z2V0RXhpc3RpbmdMYW5ndWFnZXMoKVswXX0gcmVmPXtsYW5ndWFnZTFSZWZ9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJsYW5ndWFnZTJcIiBjbGFzc05hbWU9XCJsYW5ndWFnZS1sYWJlbFwiPjIuPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwibGFuZ3VhZ2UtaW5wdXRcIiBpZD1cImxhbmd1YWdlMlwiIGRlZmF1bHRWYWx1ZT17Z2V0RXhpc3RpbmdMYW5ndWFnZXMoKVsxXX0gcmVmPXtsYW5ndWFnZTJSZWZ9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJsYW5ndWFnZTNcIiBjbGFzc05hbWU9XCJsYW5ndWFnZS1sYWJlbFwiPjMuPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwibGFuZ3VhZ2UtaW5wdXRcIiBpZD1cImxhbmd1YWdlM1wiIGRlZmF1bHRWYWx1ZT17Z2V0RXhpc3RpbmdMYW5ndWFnZXMoKVsyXX0gcmVmPXtsYW5ndWFnZTNSZWZ9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJsYW5ndWFnZTRcIiBjbGFzc05hbWU9XCJsYW5ndWFnZS1sYWJlbFwiPjQuPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwibGFuZ3VhZ2UtaW5wdXRcIiBpZD1cImxhbmd1YWdlNFwiIGRlZmF1bHRWYWx1ZT17Z2V0RXhpc3RpbmdMYW5ndWFnZXMoKVszXX0gcmVmPXtsYW5ndWFnZTRSZWZ9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgaWQ9XCJjb2wyXCI+XHJcbiAgICAgICAgICA8ZGl2IGlkPVwiYWJvdXQtaW5wdXRcIj5cclxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJhYm91dFwiPkFib3V0IE1lOjwvbGFiZWw+XHJcbiAgICAgICAgICAgIDx0ZXh0YXJlYSBpZD1cImFib3V0XCIgY29scz1cIjMwXCIgcm93cz1cIjVcIiBkZWZhdWx0VmFsdWU9e3Byb2ZpbGVJbmZvLmFib3V0fSByZWY9e2Fib3V0UmVmfSBmb3JtPVwidXBkYXRlLWZvcm1cIi8+XHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGZvcm09XCJ1cGRhdGUtZm9ybVwiPlVwZGF0ZSBJbmZvPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxGaWxlVXBsb2FkIHNldEVkaXRNb2RlPXtzZXRFZGl0TW9kZX0vPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICB7LyogPGJ1dHRvbiBpZD1cImNhbmNlbFwiIG9uQ2xpY2s9eygpID0+IHNldEVkaXRNb2RlKGZhbHNlKX0+XHJcbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS10aW1lc1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cclxuICAgICAgICA8L2J1dHRvbj4gKi99XHJcbiAgICAgICAgPGRpdiBpZD1cImNhbmNlbC1idG5cIj5cclxuICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXRpbWVzLWNpcmNsZSBmYS0yeFwiIGlkPVwiY2FuY2VsXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgb25DbGljaz17KCkgPT4gc2V0RWRpdE1vZGUoZmFsc2UpfT48L2k+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgIFxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPC9zZWN0aW9uPlxyXG5cclxuXHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgXHJcbiAgICAgICAgc2VjdGlvbiB7XHJcbiAgICAgICAgICAvKiBwYWRkaW5nOiAzcmVtOyAqL1xyXG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICAgICAgICAgIHotaW5kZXg6IC0zO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgI2VkaXQtY29udGFpbmVyIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAjY29sMSB7XHJcbiAgICAgICAgICBwYWRkaW5nOiAzcmVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgI2NvbDEgaDIge1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlucHV0IHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XHJcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxMnB4IDE1cHg7XHJcbiAgICAgICAgICBtYXJnaW46IDhweCAwO1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0ZXh0YXJlYSB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxMnB4IDE1cHg7XHJcbiAgICAgICAgICBtYXJnaW46IDhweCAwO1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMHJlbTtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuICAgICAgICAgIGZvbnQ6IGluaGVyaXQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAjbGFuZ3VhZ2VzIHtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAjbGFuZ3VhZ2UtaW5wdXQtY29udGFpbmVyIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnMgMWZyIDFmcjtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBoNCB7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNDAwIDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxhYmVsLmxhbmd1YWdlLWxhYmVsIHtcclxuICAgICAgICAgIG1hcmdpbi1yaWdodDogMC4yNXJlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlucHV0Lmxhbmd1YWdlLWlucHV0IHtcclxuICAgICAgICAgIHdpZHRoOiA5NSU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBidXR0b25bdHlwZT0nc3VibWl0J10ge1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICNjYW5jZWwtYnRuIHtcclxuICAgICAgICAgIC8qIGN1cnNvcjogcG9pbnRlcjsgKi9cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgaSB7XHJcbiAgICAgICAgICBtYXJnaW46IDAuODVyZW07XHJcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAjY29sMiB7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgICAgICAgcGFkZGluZzogNC42cmVtIDAgMCAzcmVtO1xyXG4gICAgICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAke2NvbG9ycy5wcmltYXJ5fVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgI2Fib3V0LWlucHV0IHtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07ICBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qIE1lZGlhIHF1ZXJpZXMgKi9cclxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogMTE1MHB4KSB7XHJcblxyXG4gICAgICAgICAgI3Byb2ZpbGUtZWRpdCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA5MHZ3O1xyXG4gICAgICAgICAgICBtYXJnaW46IDFyZW0gYXV0byAxcmVtIGF1dG87XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgI2VkaXQtY29udGFpbmVyIHtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC8qIHRleHRhcmVhIHtcclxuICAgICAgICAgICAgd2lkdGg6IDk1JTtcclxuICAgICAgICAgIH0gKi9cclxuXHJcbiAgICAgICAgICAjY29sMSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICNjYW5jZWwge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRvcDogNXB4O1xyXG4gICAgICAgICAgICByaWdodDogNXB4O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICNjb2wyIHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgICAgICAgcGFkZGluZzogMCAzcmVtIDNyZW0gM3JlbTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NzhweCkge1xyXG4gICAgICAgICAgI2xhbmd1YWdlLWlucHV0LWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEsIDFmcik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNDQwcHgpIHtcclxuICAgICAgICAgICNsYW5ndWFnZS1pbnB1dC1jb250YWluZXIgbGFiZWx7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgI2NvbDEge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAycmVtIDJyZW0gMXJlbSAycmVtO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICNjb2wyIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMCAycmVtIDNyZW0gMnJlbTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAzNjBweCkge1xyXG4gICAgICAgICAgI2NhbmNlbCB7XHJcbiAgICAgICAgICAgIHRvcDogLTVweDtcclxuICAgICAgICAgICAgcmlnaHQ6IC01cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICBcclxuICAgICAgYH08L3N0eWxlPlxyXG5cclxuICAgIDwvbW90aW9uLmRpdj5cclxuICAgIDwvQW5pbWF0ZVByZXNlbmNlPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZmlsZUVkaXQ7Il19 */
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


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




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

  return __jsx("section", {
    id: "user",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4084182670", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].tertiary, profileUser.profilePhotoFilename, _css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].secondary]]]) + " " + "animate__animated animate__fadeIn"
  }, __jsx("div", {
    id: "profile-photo",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4084182670", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].tertiary, profileUser.profilePhotoFilename, _css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].secondary]]])
  }, profileUser.profilePhotoFilename !== null && profileUser.profilePhotoFilename !== '' && __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4084182670", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].tertiary, profileUser.profilePhotoFilename, _css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].secondary]]]) + " " + "crop animate__animated animate__fadeIn"
  }), (profileUser.profilePhotoFilename === null || profileUser.profilePhotoFilename === '') && __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4084182670", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].tertiary, profileUser.profilePhotoFilename, _css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].secondary]]]) + " " + "crop animate__animated animate__fadeIn"
  }, __jsx("img", {
    src: "/default-avatar.jpg",
    alt: "profile-photo",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4084182670", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].tertiary, profileUser.profilePhotoFilename, _css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].secondary]]])
  }))), __jsx("div", {
    id: "user-info",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4084182670", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].tertiary, profileUser.profilePhotoFilename, _css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].secondary]]])
  }, __jsx("div", {
    id: "info",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4084182670", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].tertiary, profileUser.profilePhotoFilename, _css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].secondary]]])
  }, __jsx("h1", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4084182670", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].tertiary, profileUser.profilePhotoFilename, _css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].secondary]]])
  }, profileUser.firstName, " ", profileUser.lastName), __jsx("h2", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4084182670", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].tertiary, profileUser.profilePhotoFilename, _css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].secondary]]])
  }, "Job Title: \xA0 ", profileUser.jobTitle), __jsx("h2", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4084182670", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].tertiary, profileUser.profilePhotoFilename, _css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].secondary]]])
  }, "Location: \xA0 ", profileUser.location), __jsx("h2", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4084182670", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].tertiary, profileUser.profilePhotoFilename, _css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].secondary]]])
  }, "Languages: \xA0 ", getLanguageString())), __jsx("div", {
    id: "buttons",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4084182670", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].tertiary, profileUser.profilePhotoFilename, _css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].secondary]]])
  }, profileUser.id === currentUser.id && __jsx("i", {
    id: "profile-edit-cog",
    "aria-hidden": "true",
    onClick: () => setEditMode(!editMode),
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4084182670", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].tertiary, profileUser.profilePhotoFilename, _css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].secondary]]]) + " " + "fa fa-cog fa-2x"
  }), profileUser.id !== currentUser.id && !currentUser.favourites.includes(profileUser.id) && authState.authenticated === true && __jsx("button", {
    id: "add-favourite",
    onClick: addFavouriteHandler,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4084182670", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].tertiary, profileUser.profilePhotoFilename, _css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].secondary]]])
  }, __jsx("i", {
    "aria-hidden": "true",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4084182670", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].tertiary, profileUser.profilePhotoFilename, _css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].secondary]]]) + " " + "fa fa-star-o fa-2x favourite"
  })), currentUser.favourites.includes(profileUser.id) && __jsx("button", {
    id: "remove-favourite",
    onClick: removeFavouriteHandler,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4084182670", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].tertiary, profileUser.profilePhotoFilename, _css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].secondary]]])
  }, __jsx("i", {
    "aria-hidden": "true",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4084182670", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].tertiary, profileUser.profilePhotoFilename, _css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].secondary]]]) + " " + "fa fa-star fa-2x favourite"
  })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4084182670",
    dynamic: [_css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].tertiary, profileUser.profilePhotoFilename, _css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].secondary]
  }, `section.__jsx-style-dynamic-selector{border-radius:10px;margin-top:1rem;}#user.__jsx-style-dynamic-selector{margin:3rem 0 2rem 0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;background:-webkit-linear-gradient(to right,#FF4B2B,#FF416C);background:linear-gradient(to right,#FF4B2B,#FF416C);}#user.__jsx-style-dynamic-selector h1.__jsx-style-dynamic-selector{font-size:3rem;margin:1rem 0 4rem 0;line-height:3rem;}#user.__jsx-style-dynamic-selector h2.__jsx-style-dynamic-selector{margin-bottom:2rem;}#profile-photo.__jsx-style-dynamic-selector{width:33%;background:white;padding:3.5rem 3rem 3rem 3rem;border:1px solid black;border-right:none;border-radius:10px 0 0 10px;}img.__jsx-style-dynamic-selector{width:50px;}#user-info.__jsx-style-dynamic-selector{width:61%;padding:3rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}i#profile-edit-cog.__jsx-style-dynamic-selector{cursor:pointer;-webkit-transition:-webkit-transform 2s;-webkit-transition:transform 2s;transition:transform 2s;}i#profile-edit-cog.__jsx-style-dynamic-selector:hover{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}button#add-favourite.__jsx-style-dynamic-selector,button#remove-favourite.__jsx-style-dynamic-selector{cursor:pointer;background:white;color:black;border:1px solid ${_css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].tertiary};border-radius:50%;padding:0.7rem;font-size:1rem;height:50px;width:50px;position:relative;}#playlist.__jsx-style-dynamic-selector{margin-top:4rem;}.crop.__jsx-style-dynamic-selector{width:266px;height:266px;overflow:hidden;border-radius:50%;background-image:url('/image/${profileUser.profilePhotoFilename}');background-size:cover;}img.__jsx-style-dynamic-selector{width:100%;height:100%;}i.favourite.__jsx-style-dynamic-selector{color:${_css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].secondary};position:absolute;top:9px;left:9.6px;}@media (max-width:1150px ){#user.__jsx-style-dynamic-selector{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;background:none;width:75%;margin:auto;}#profile-photo.__jsx-style-dynamic-selector{margin:auto;width:61%;background:none;}.crop.__jsx-style-dynamic-selector{margin:auto;}#user-info.__jsx-style-dynamic-selector{background:-webkit-linear-gradient(to right,#FF4B2B,#FF416C);background:linear-gradient(to right,#FF4B2B,#FF416C);margin:auto;width:90%;border-radius:10px;padding:2.5rem;}}@media (max-width:800px){#profile-photo.__jsx-style-dynamic-selector{padding:0;margin:3rem auto 3rem auto;}}@media (max-width:768px){#user-info.__jsx-style-dynamic-selector{position:relative;}#info.__jsx-style-dynamic-selector{width:100%;margin:auto;}#buttons.__jsx-style-dynamic-selector{position:absolute;right:21px;top:21px;}}@media (max-width:580px ){#user.__jsx-style-dynamic-selector{width:100%;}#user.__jsx-style-dynamic-selector h1.__jsx-style-dynamic-selector{margin:2rem 0 3rem 0;font-size:2.5rem;}h2.__jsx-style-dynamic-selector{font-size:1.5rem;}}@media (max-width:470px ){#buttons.__jsx-style-dynamic-selector{position:absolute;right:14px;top:14px;}#user-info.__jsx-style-dynamic-selector h1.__jsx-style-dynamic-selector{text-align:center;}#user-info.__jsx-style-dynamic-selector{padding:2rem;}#user.__jsx-style-dynamic-selector h1.__jsx-style-dynamic-selector{font-size:2rem;margin-bottom:1rem;}h2.__jsx-style-dynamic-selector{font-size:1.2rem;text-align:center;}}@media (max-width:445px ){#profile-photo.__jsx-style-dynamic-selector{width:100%;}.crop.__jsx-style-dynamic-selector{max-width:200px;max-height:200px;}}@media (max-width:370px ){i.favourite.__jsx-style-dynamic-selector{top:4.7px;left:5.7px;}.fa-star.__jsx-style-dynamic-selector .fa-2x.__jsx-style-dynamic-selector,.fa-star-o.__jsx-style-dynamic-selector <div.__jsx-style-dynamic-selector className="fa-2x".__jsx-style-dynamic-selector></div.__jsx-style-dynamic-selector>{font-size:1.4em;}button#remove-favourite.__jsx-style-dynamic-selector{height:41px;width:41px;}}@media (max-width:320px ){#user.__jsx-style-dynamic-selector h1.__jsx-style-dynamic-selector{font-size:2.2rem;margin-bottom:2rem;}}@media (max-height:820px ){#profile-photo.__jsx-style-dynamic-selector{margin:2rem auto;}}@media (max-height:770px ){#profile-photo.__jsx-style-dynamic-selector{margin:2rem auto;}}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxDb2RpbmdcXE15UHJvamVjdHNcXGNvZGVycy1qdWtlYm94XFxjb21wb25lbnRzXFxQcm9maWxlSW5mby5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErRWtCLEFBSTRCLEFBS0UsQUFRTixBQU1JLEFBSVQsQUFTQyxBQUtELEFBT0ssQUFLVSxBQUlWLEFBZUMsQUFJSixBQVNELEFBS3dCLEFBU1gsQUFPVixBQU1BLEFBS21ELEFBV3JELEFBT1EsQUFNUCxBQVNPLEFBU1AsQUFJVSxBQUtKLEFBT0MsQUFNQSxBQUlMLEFBSUUsQUFLRSxBQU9OLEFBSUssQUFRTixBQU1iLEFBR2UsQUFRSyxBQU9BLEFBTUEsVUF2TkYsQUFjSixBQXVGZ0IsQUFxRmhCLENBakxmLEFBaURjLEFBd0RFLEFBa0JkLEFBMENBLENBN0hhLEFBOEJELEFBT1osQUE2R2EsQ0FyQ2IsRUF4S3FCLEFBK0JHLEFBU1AsQUFvSUksQ0FySHZCLEFBcUlxQixBQWFuQixDQWxEQSxBQTBCb0IsQUFvQ0MsQUFPckIsQUFNQSxDQTFHQSxBQWFhLEFBeUJBLEFBTWIsQ0FqTGdCLEFBbUJsQixFQWRlLEFBMkpkLEFBa0RDLENBM0drQixDQWpFTCxBQTRDZixBQXdERSxBQWlGQSxFQWxKZ0IsRUFqRGMsRUEySG5CLEFBeUJBLEdBdEhDLENBb0paLENBaEJBLENBekxGLEFBcUZvQixBQXlHbEIsQ0FqTGlCLEFBcU5qQixDQXRHQSxDQXJCQSxBQTRDQSxBQVlBLEFBYUEsR0FuR2tCLEdBbkI0QixTQXhDaEQsQUF3RVUsSUE5RGUsRUFrRHFDLEVBYWpELEFBeUI4QyxXQXhCM0QsTUFNb0IsRUFyRUEsT0F1QnBCLEdBT29CLElBd0NOLENBMUZrQixFQWlDQSxDQVpGLE1Bc0VkLElBeENDLEdBWmpCLEdBcUVnQixFQWhCZCxHQXRCc0IsSUFsQlAsR0E5QmpCLEFBdUZjLFVBQ1MsRUF6RFQsR0FrQmQsU0FqQmEsS0F5RE0sTUF4REMsU0F5RGxCLFNBdERGLCtCQXpEaUUsRUFpQ2pFLDJEQWhDeUQscURBQ3pEIiwiZmlsZSI6IkM6XFxDb2RpbmdcXE15UHJvamVjdHNcXGNvZGVycy1qdWtlYm94XFxjb21wb25lbnRzXFxQcm9maWxlSW5mby5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBHbG9iYWxDb250ZXh0IH0gZnJvbSAnLi4vY29udGV4dC9HbG9iYWxDb250ZXh0JztcclxuaW1wb3J0IGNvbG9ycyBmcm9tICcuLi9jc3MtdmFyaWFibGVzL2NvbG9ycyc7XHJcblxyXG5jb25zdCBQcm9maWxlSW5mbyA9ICh7IHNldEVkaXRNb2RlLCBlZGl0TW9kZSB9KSA9PiB7XHJcblxyXG4gIGNvbnN0IHsgYXV0aFN0YXRlLCBjdXJyZW50VXNlciwgcHJvZmlsZVVzZXIsIGZldGNoUHJvZmlsZVVzZXIsIGNsZWFyUHJvZmlsZVVzZXIsIGFkZEZhdm91cml0ZSwgcmVtb3ZlRmF2b3VyaXRlIH0gPSB1c2VDb250ZXh0KEdsb2JhbENvbnRleHQpO1xyXG5cclxuICBjb25zdCBbaXNGYXZvdXJpdGUsIHNldElzRmF2b3VyaXRlXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICBjb25zdCBhZGRGYXZvdXJpdGVIYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgYWRkRmF2b3VyaXRlKHByb2ZpbGVVc2VyLmlkKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHJlbW92ZUZhdm91cml0ZUhhbmRsZXIgPSAoKSA9PiB7XHJcbiAgICByZW1vdmVGYXZvdXJpdGUocHJvZmlsZVVzZXIuaWQpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgZ2V0TGFuZ3VhZ2VTdHJpbmcgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBsYW5ndWFnZXMgPSBwcm9maWxlVXNlci5sYW5ndWFnZXM7XHJcbiAgICBsZXQgbGFuZ3VhZ2VTdHJpbmcgPSAnJztcclxuXHJcbiAgICBpZiAocHJvZmlsZVVzZXIubGFuZ3VhZ2VzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICByZXR1cm4gbGFuZ3VhZ2VTdHJpbmc7XHJcbiAgICB9XHJcblxyXG4gICAgZWxzZSB7XHJcbiAgICAgIGxhbmd1YWdlcy5tYXAoKGxhbmd1YWdlLCBpbmRleCkgPT4ge1xyXG4gICAgICAgIGlmIChsYW5ndWFnZSAhPT0gJycpIHtcclxuICAgICAgICAgIGxhbmd1YWdlU3RyaW5nICs9IGxhbmd1YWdlO1xyXG4gICAgICAgICAgaWYgKGxhbmd1YWdlc1tpbmRleCArIDFdICE9PSAnJyAmJiBpbmRleCArIDEgIT09IGxhbmd1YWdlcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgbGFuZ3VhZ2VTdHJpbmcgKz0gJyAnICsgJy8nICsgJyAnO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgcmV0dXJuIGxhbmd1YWdlU3RyaW5nO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgICAgPHNlY3Rpb24gaWQ9XCJ1c2VyXCIgY2xhc3NOYW1lPVwiYW5pbWF0ZV9fYW5pbWF0ZWQgYW5pbWF0ZV9fZmFkZUluXCI+XHJcbiAgICAgICAgPGRpdiBpZD1cInByb2ZpbGUtcGhvdG9cIj5cclxuICAgICAgICAgIHtwcm9maWxlVXNlci5wcm9maWxlUGhvdG9GaWxlbmFtZSAhPT0gbnVsbCAmJiBwcm9maWxlVXNlci5wcm9maWxlUGhvdG9GaWxlbmFtZSAhPT0gJycgJiZcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjcm9wIGFuaW1hdGVfX2FuaW1hdGVkIGFuaW1hdGVfX2ZhZGVJblwiPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHsocHJvZmlsZVVzZXIucHJvZmlsZVBob3RvRmlsZW5hbWUgPT09IG51bGwgfHwgcHJvZmlsZVVzZXIucHJvZmlsZVBob3RvRmlsZW5hbWUgPT09ICcnKSAmJlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNyb3AgYW5pbWF0ZV9fYW5pbWF0ZWQgYW5pbWF0ZV9fZmFkZUluXCI+XHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9Jy9kZWZhdWx0LWF2YXRhci5qcGcnIGFsdD1cInByb2ZpbGUtcGhvdG9cIiAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIH1cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBpZD1cInVzZXItaW5mb1wiPlxyXG4gICAgICAgICAgPGRpdiBpZD1cImluZm9cIj5cclxuICAgICAgICAgICAgPGgxPntwcm9maWxlVXNlci5maXJzdE5hbWV9IHtwcm9maWxlVXNlci5sYXN0TmFtZX08L2gxPlxyXG4gICAgICAgICAgICA8aDI+Sm9iIFRpdGxlOiAmbmJzcDsge3Byb2ZpbGVVc2VyLmpvYlRpdGxlfTwvaDI+XHJcbiAgICAgICAgICAgIDxoMj5Mb2NhdGlvbjogJm5ic3A7IHtwcm9maWxlVXNlci5sb2NhdGlvbn08L2gyPlxyXG4gICAgICAgICAgICA8aDI+TGFuZ3VhZ2VzOiAmbmJzcDsge2dldExhbmd1YWdlU3RyaW5nKCl9PC9oMj5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXYgaWQ9XCJidXR0b25zXCI+XHJcbiAgICAgICAgICAgIHtwcm9maWxlVXNlci5pZCA9PT0gY3VycmVudFVzZXIuaWQgJiZcclxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1jb2cgZmEtMnhcIiBpZD1cInByb2ZpbGUtZWRpdC1jb2dcIiBhcmlhLWhpZGRlbj1cInRydWVcIiBvbkNsaWNrPXsoKSA9PiBzZXRFZGl0TW9kZSghZWRpdE1vZGUpfT48L2k+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAge3Byb2ZpbGVVc2VyLmlkICE9PSBjdXJyZW50VXNlci5pZCAmJiAhKGN1cnJlbnRVc2VyLmZhdm91cml0ZXMuaW5jbHVkZXMocHJvZmlsZVVzZXIuaWQpKSAmJiBhdXRoU3RhdGUuYXV0aGVudGljYXRlZCA9PT0gdHJ1ZSAmJlxyXG4gICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJhZGQtZmF2b3VyaXRlXCIgb25DbGljaz17YWRkRmF2b3VyaXRlSGFuZGxlcn0+XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1zdGFyLW8gZmEtMnggZmF2b3VyaXRlXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHtjdXJyZW50VXNlci5mYXZvdXJpdGVzLmluY2x1ZGVzKHByb2ZpbGVVc2VyLmlkKSAmJlxyXG4gICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJyZW1vdmUtZmF2b3VyaXRlXCIgb25DbGljaz17cmVtb3ZlRmF2b3VyaXRlSGFuZGxlcn0+XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1zdGFyIGZhLTJ4IGZhdm91cml0ZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG5cclxuICAgICAgc2VjdGlvbiB7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAjdXNlciB7XHJcbiAgICAgICAgbWFyZ2luOiAzcmVtIDAgMnJlbSAwO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjRkY0QjJCLCAjRkY0MTZDKTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNGRjRCMkIsICNGRjQxNkMpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAjdXNlciBoMSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAzcmVtO1xyXG4gICAgICAgIG1hcmdpbjogMXJlbSAwIDRyZW0gMDtcclxuICAgICAgICBsaW5lLWhlaWdodDogM3JlbTtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgI3VzZXIgaDIge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICNwcm9maWxlLXBob3RvIHtcclxuICAgICAgICB3aWR0aDogMzMlO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgIHBhZGRpbmc6IDMuNXJlbSAzcmVtIDNyZW0gM3JlbTtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICAgICAgICBib3JkZXItcmlnaHQ6IG5vbmU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweCAwIDAgMTBweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgaW1nIHtcclxuICAgICAgICB3aWR0aDogNTBweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgI3VzZXItaW5mbyB7XHJcbiAgICAgICAgLyogaGVpZ2h0OiAxMDAlOyAqL1xyXG4gICAgICAgIHdpZHRoOiA2MSU7XHJcbiAgICAgICAgcGFkZGluZzogM3JlbTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgfVxyXG5cclxuICAgICAgaSNwcm9maWxlLWVkaXQtY29nIHtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDJzO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpI3Byb2ZpbGUtZWRpdC1jb2c6aG92ZXIge1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIGJ1dHRvbiNhZGQtZmF2b3VyaXRlLCBidXR0b24jcmVtb3ZlLWZhdm91cml0ZSB7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAke2NvbG9ycy50ZXJ0aWFyeX07XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIHBhZGRpbmc6IDAuN3JlbTtcclxuICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBcclxuICAgICAgICAvKiBoZWlnaHQ6IDEwJTsgKi9cclxuICAgICAgfVxyXG5cclxuICAgICAgI3BsYXlsaXN0IHtcclxuICAgICAgICBtYXJnaW4tdG9wOiA0cmVtO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuY3JvcCB7XHJcbiAgICAgICAgd2lkdGg6IDI2NnB4O1xyXG4gICAgICAgIGhlaWdodDogMjY2cHg7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvaW1hZ2UvJHtwcm9maWxlVXNlci5wcm9maWxlUGhvdG9GaWxlbmFtZX0nKTtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBpbWcge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaS5mYXZvdXJpdGUge1xyXG4gICAgICAgIGNvbG9yOiAke2NvbG9ycy5zZWNvbmRhcnl9O1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDlweDtcclxuICAgICAgICBsZWZ0OiA5LjZweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLyogTWVkaWEgcXVlcmllcyAqL1xyXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogMTE1MHB4ICkge1xyXG4gICAgICAgICN1c2VyIHtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgICAgICAgd2lkdGg6IDc1JTtcclxuICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICNwcm9maWxlLXBob3RvIHtcclxuICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgIHdpZHRoOiA2MSU7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNyb3Age1xyXG4gICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgLyogd2lkdGg6IDgwJTsgKi9cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICN1c2VyLWluZm8ge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNGRjRCMkIsICNGRjQxNkMpO1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjRkY0QjJCLCAjRkY0MTZDKTtcclxuICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgcGFkZGluZzogMi41cmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDgwMHB4KSB7XHJcbiAgICAgICAgI3Byb2ZpbGUtcGhvdG8ge1xyXG4gICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgIG1hcmdpbjogM3JlbSBhdXRvIDNyZW0gYXV0bztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgICN1c2VyLWluZm8ge1xyXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgLyogcGFkZGluZzogMDsgKi9cclxuICAgICAgICAgIC8qIHRleHQtYWxpZ246IGNlbnRlcjsgKi9cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICNpbmZvIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaDEge1xyXG4gICAgICAgICAgLyogdGV4dC1hbGlnbjogY2VudGVyOyAqL1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAjYnV0dG9ucyB7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICByaWdodDogMjFweDtcclxuICAgICAgICAgIHRvcDogMjFweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICB9XHJcblxyXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNTgwcHggKSB7XHJcbiAgICAgICAgI3VzZXIge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICN1c2VyIGgxIHtcclxuICAgICAgICAgIG1hcmdpbjogMnJlbSAwIDNyZW0gMDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMi41cmVtIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaDIge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNDcwcHggKSB7XHJcblxyXG4gICAgICAgICNidXR0b25zIHtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIHJpZ2h0OiAxNHB4O1xyXG4gICAgICAgICAgdG9wOiAxNHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgI3VzZXItaW5mbyBoMSB7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgfSBcclxuXHJcbiAgICAgICAgI3VzZXItaW5mbyB7XHJcbiAgICAgICAgICBwYWRkaW5nOiAycmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAjdXNlciBoMSB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtOyBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGgyIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ0NXB4ICkge1xyXG4gICAgICAgICNwcm9maWxlLXBob3RvIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNyb3Age1xyXG4gICAgICAgICAgbWF4LXdpZHRoOiAyMDBweDtcclxuICAgICAgICAgIG1heC1oZWlnaHQ6IDIwMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDM3MHB4ICkge1xyXG5cclxuICAgICAgICBpLmZhdm91cml0ZSB7XHJcbiAgICAgICAgICB0b3A6IDQuN3B4O1xyXG4gICAgICAgICAgbGVmdDogNS43cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuZmEtc3RhciAuZmEtMngsIC5mYS1zdGFyLW8gPGRpdiBjbGFzc05hbWU9XCJmYS0yeFwiPjwvZGl2PiB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEuNGVtXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBidXR0b24jcmVtb3ZlLWZhdm91cml0ZSB7XHJcbiAgICAgICAgICBoZWlnaHQ6IDQxcHg7XHJcbiAgICAgICAgICB3aWR0aDogNDFweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICB9XHJcblxyXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogMzIwcHggKSB7XHJcbiAgICAgICAgI3VzZXIgaDEge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAyLjJyZW07XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgQG1lZGlhIChtYXgtaGVpZ2h0OiA4MjBweCApIHtcclxuICAgICAgICAjcHJvZmlsZS1waG90byB7XHJcbiAgICAgICAgICBtYXJnaW46IDJyZW0gYXV0bztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIEBtZWRpYSAobWF4LWhlaWdodDogNzcwcHggKSB7XHJcbiAgICAgICAgI3Byb2ZpbGUtcGhvdG8ge1xyXG4gICAgICAgICAgbWFyZ2luOiAycmVtIGF1dG87XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICBcclxuICAgIGB9PC9zdHlsZT5cclxuXHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9maWxlSW5mbztcclxuIl19 */
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
    className: "jsx-1820672173"
  }, __jsx("form", {
    onSubmit: onFormSubmit,
    className: "jsx-1820672173"
  }, __jsx("label", {
    htmlFor: "search-input",
    className: "jsx-1820672173"
  }, __jsx("svg", {
    id: "search-icon",
    height: "24",
    viewBox: "0 0 24 24",
    width: "24",
    className: "jsx-1820672173"
  }, __jsx("path", {
    d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z",
    className: "jsx-1820672173"
  }), __jsx("path", {
    d: "M0 0h24v24H0z",
    fill: "none",
    className: "jsx-1820672173"
  }))), __jsx("input", {
    type: "text",
    name: "search-input",
    placeholder: placeholder,
    onChange: onChangeHandler,
    value: searchInput,
    className: "jsx-1820672173"
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1820672173"
  }, "form.jsx-1820672173{width:68.5%;}label.jsx-1820672173{position:absolute;top:11px;left:12px;}#main-searchbar.jsx-1820672173{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:relative;width:100%;}#main-searchbar.jsx-1820672173 input.jsx-1820672173{width:100%;border-radius:23px;padding:0.6rem 3rem 0.5rem 2.5rem;font-size:1.1rem;border:none;background-color:white;font:inherit;}#main-searchbar.jsx-1820672173 input.jsx-1820672173:focus{outline:none;}@media (max-width:1100px){#main-searchbar.jsx-1820672173 input.jsx-1820672173{width:130%;}}@media (max-width:830px){#main-searchbar.jsx-1820672173{width:90%;margin:auto;}#main-searchbar.jsx-1820672173 input.jsx-1820672173{margin:auto;}form.jsx-1820672173{width:75.5%;}}@media ( max-width:430px){#main-searchbar.jsx-1820672173 input.jsx-1820672173{font-size:1rem;}label.jsx-1820672173{top:6px;left:10px;}}@media ( max-width:360px){#main-searchbar.jsx-1820672173{width:100%;}#main-searchbar.jsx-1820672173 input.jsx-1820672173{font-size:0.9rem;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxDb2RpbmdcXE15UHJvamVjdHNcXGNvZGVycy1qdWtlYm94XFxjb21wb25lbnRzXFxTZWFyY2hCYXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNEJnQixBQUdxQixBQUlNLEFBTUwsQUFNRixBQVVFLEFBS0EsQUFNRCxBQUtFLEFBSUEsQUFNRyxBQUlQLEFBT0csQUFJTSxRQVZQLEVBbkJFLENBckJLLEFBZW5CLEFBZ0NBLENBL0RGLEFBMENFLEFBSUEsQ0FwQkYsRUEwQkUsRUFlQSxDQS9EUyxBQXFEVCxJQW5CQSxLQWpDVSxHQVl3QixPQVhwQywyQkFZbUIsVUFSQyxPQVNOLFdBUkQsQ0FTWSxVQVJ6QixhQVNlLGFBQ2YiLCJmaWxlIjoiQzpcXENvZGluZ1xcTXlQcm9qZWN0c1xcY29kZXJzLWp1a2Vib3hcXGNvbXBvbmVudHNcXFNlYXJjaEJhci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBTZWFyY2hiYXIgPSAoeyBwbGFjZWhvbGRlciwgc3VibWl0SGFuZGxlciB9KSA9PiB7XHJcblxyXG4gIGNvbnN0IFtzZWFyY2hJbnB1dCwgc2V0U2VhcmNoSW5wdXRdID0gdXNlU3RhdGUoJycpO1xyXG5cclxuXHJcbiAgY29uc3Qgb25DaGFuZ2VIYW5kbGVyID0gKGUpID0+IHtcclxuICAgIHNldFNlYXJjaElucHV0KGUudGFyZ2V0LnZhbHVlKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IG9uRm9ybVN1Ym1pdCA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgLy8gQ2FsbCB0aGUgcmVsZXZhbnQgc3VibWl0IGhhbmRsZXIgZnJvbSBwcm9wc1xyXG4gICAgc3VibWl0SGFuZGxlcihzZWFyY2hJbnB1dCk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBpZD1cIm1haW4tc2VhcmNoYmFyXCI+XHJcbiAgICAgIDxmb3JtIG9uU3VibWl0PXtvbkZvcm1TdWJtaXR9PlxyXG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwic2VhcmNoLWlucHV0XCI+XHJcbiAgICAgICAgICA8c3ZnIGlkPVwic2VhcmNoLWljb25cIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiB3aWR0aD1cIjI0XCI+PHBhdGggZD1cIk0xNS41IDE0aC0uNzlsLS4yOC0uMjdDMTUuNDEgMTIuNTkgMTYgMTEuMTEgMTYgOS41IDE2IDUuOTEgMTMuMDkgMyA5LjUgM1MzIDUuOTEgMyA5LjUgNS45MSAxNiA5LjUgMTZjMS42MSAwIDMuMDktLjU5IDQuMjMtMS41N2wuMjcuMjh2Ljc5bDUgNC45OUwyMC40OSAxOWwtNC45OS01em0tNiAwQzcuMDEgMTQgNSAxMS45OSA1IDkuNVM3LjAxIDUgOS41IDUgMTQgNy4wMSAxNCA5LjUgMTEuOTkgMTQgOS41IDE0elwiIC8+PHBhdGggZD1cIk0wIDBoMjR2MjRIMHpcIiBmaWxsPVwibm9uZVwiIC8+PC9zdmc+XHJcbiAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwic2VhcmNoLWlucHV0XCIgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfSBvbkNoYW5nZT17b25DaGFuZ2VIYW5kbGVyfSB2YWx1ZT17c2VhcmNoSW5wdXR9IC8+XHJcbiAgICAgIDwvZm9ybT5cclxuXHJcblxyXG4gICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICBmb3JtIHtcclxuICAgICAgICB3aWR0aDogNjguNSU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGxhYmVsIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAxMXB4O1xyXG4gICAgICAgIGxlZnQ6IDEycHg7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgICNtYWluLXNlYXJjaGJhciB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICNtYWluLXNlYXJjaGJhciBpbnB1dCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjNweDtcclxuICAgICAgICBwYWRkaW5nOiAwLjZyZW0gM3JlbSAwLjVyZW0gMi41cmVtO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBmb250OiBpbmhlcml0O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAjbWFpbi1zZWFyY2hiYXIgaW5wdXQgOmZvY3VzIHtcclxuICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogMTEwMHB4KSB7XHJcbiAgICAgICAgI21haW4tc2VhcmNoYmFyIGlucHV0IHtcclxuICAgICAgICAgIHdpZHRoOiAxMzAlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDgzMHB4KSB7XHJcbiAgICAgICAgI21haW4tc2VhcmNoYmFyIHtcclxuICAgICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAjbWFpbi1zZWFyY2hiYXIgaW5wdXQge1xyXG4gICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9ybSB7XHJcbiAgICAgICAgICB3aWR0aDogNzUuNSU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBAbWVkaWEgKCBtYXgtd2lkdGg6IDQzMHB4KSB7XHJcbiAgICAgICAgI21haW4tc2VhcmNoYmFyIGlucHV0IHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxhYmVsIHtcclxuICAgICAgICAgIHRvcDogNnB4O1xyXG4gICAgICAgICAgbGVmdDogMTBweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIEBtZWRpYSAoIG1heC13aWR0aDogMzYwcHgpIHtcclxuICAgICAgICAjbWFpbi1zZWFyY2hiYXIge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAjbWFpbi1zZWFyY2hiYXIgaW5wdXQge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBcclxuICAgIFxyXG4gICAgYH08L3N0eWxlPlxyXG5cclxuICAgICAgICAgIFxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hiYXI7XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Coding\\\\MyProjects\\\\coders-jukebox\\\\components\\\\SearchBar.js */"));
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
    };
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2650155307", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].primary]]]) + " " + "video-item"
  }, mode === 'youtube' && __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("img", {
    src: video.snippet.thumbnails.default.url,
    alt: "youtube video",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2650155307", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].primary]]])
  }), __jsx("h3", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2650155307", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].primary]]]) + " " + "video-title"
  }, video.snippet.title.split("&quot;").join("").split("&#39;").join("'").split("&amp;").join("&")), __jsx("div", {
    id: "buttons",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2650155307", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].primary]]])
  }, profileUser.ownedVideos.length > 0 && __jsx("button", {
    onClick: playButtonHandler,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2650155307", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].primary]]])
  }, __jsx("i", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2650155307", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].primary]]]) + " " + "fa fa-play"
  })), __jsx("button", {
    onClick: addVideoClickHandler,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2650155307", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].primary]]])
  }, __jsx("i", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2650155307", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].primary]]]) + " " + "fa fa-plus"
  })))), mode === 'playlist' && __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("img", {
    src: video.thumbnailURL,
    alt: "youtube video",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2650155307", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].primary]]])
  }), __jsx("h3", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2650155307", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].primary]]]) + " " + "video-title"
  }, video.title), __jsx("div", {
    id: "buttons",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2650155307", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].primary]]])
  }, __jsx("button", {
    onClick: playButtonHandler,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2650155307", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].primary]]])
  }, __jsx("i", {
    "aria-hidden": "true",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2650155307", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].primary]]]) + " " + "fa fa-play"
  })), currentUser.id === profileUser.id && __jsx("button", {
    onClick: removeVideoClickHandler,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2650155307", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].primary]]])
  }, __jsx("i", {
    "aria-hidden": "true",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2650155307", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].primary]]]) + " " + "fa fa-trash-o"
  })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2650155307",
    dynamic: [_css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].primary, _css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].primary]
  }, `.video-item.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;border-bottom:1px solid ${_css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].primary};padding:1rem;}.video-item.__jsx-style-dynamic-selector:last-child{border-bottom:none;}h3.__jsx-style-dynamic-selector{margin:0 auto 0 2.7rem;}button.__jsx-style-dynamic-selector{background-color:${_css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].primary};color:white;padding:0.75rem 1rem;border-radius:10px;margin:0.5rem;border:none;cursor:pointer;font-size:1rem;-webkit-transition:background-color 0.2s ease-in-out,text-shadow 0.2s;transition:background-color 0.2s ease-in-out,text-shadow 0.2s;}button.__jsx-style-dynamic-selector:hover{background-color:#e5305a;text-shadow:0px 0px 8px rgb(255,255,255);}@media (max-width:1080px){h3.__jsx-style-dynamic-selector{margin-left:1.7rem;}#buttons.__jsx-style-dynamic-selector{min-width:20%;}}@media (max-width:768px){.video-item.__jsx-style-dynamic-selector{text-align:left;}h3.__jsx-style-dynamic-selector{font-size:0.8rem;margin:0;text-align:left;}#buttons.__jsx-style-dynamic-selector{min-width:10%;margin-right:0.5rem;}}@media (max-width:500px){img.__jsx-style-dynamic-selector{height:60px;margin-right:0.3rem;}#buttons.__jsx-style-dynamic-selector{width:13%;min-width:13%;}}@media (max-width:400px){#buttons.__jsx-style-dynamic-selector{width:15%;min-width:15%;}h3.__jsx-style-dynamic-selector{font-size:0.7rem;}}@media (max-width:380px){.video-item.__jsx-style-dynamic-selector{padding-left:0.6rem;}}@media (max-width:350px){.video-item.__jsx-style-dynamic-selector{padding-left:0.6rem;}#buttons.__jsx-style-dynamic-selector{width:17%;min-width:17%;}img.__jsx-style-dynamic-selector{height:40px;}}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxDb2RpbmdcXE15UHJvamVjdHNcXGNvZGVycy1qdWtlYm94XFxjb21wb25lbnRzXFxWaWRlb0l0ZW0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0ZrQixBQUlvQixBQVVNLEFBSUksQUFLdUIsQUFZckIsQUFPSixBQUlMLEFBT0UsQUFJQyxBQU9ILEFBT0YsQUFLRixBQU9BLEFBS08sQUFNRyxBQU1BLEFBSVYsQUFLRSxVQWhDRSxBQU9BLEFBcUJBLEVBakNNLEFBc0N0QixFQS9EQSxBQWtCc0IsRUFYdEIsQ0FJVyxBQStCWCxFQTFFRixBQTRCRSxDQW9EQSxBQU1BLEdBbEZGLENBMkRFLEFBT0EsQUFxQkEsQ0F0RTJDLENBdUJ6QixNQWNsQixFQVBBLFFBTkEsSUFwQ1ksWUFDUyxRQVl2QixRQWhDcUIsS0FxQkEsbUJBQ0wsY0FDRixZQUNHLGVBQ0EsZUFDZ0QsYUF6QmpDLG1IQUV1QixJQXdCdkQsaURBdkJlLGFBRWYiLCJmaWxlIjoiQzpcXENvZGluZ1xcTXlQcm9qZWN0c1xcY29kZXJzLWp1a2Vib3hcXGNvbXBvbmVudHNcXFZpZGVvSXRlbS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdsb2JhbENvbnRleHQgfSBmcm9tICcuLi9jb250ZXh0L0dsb2JhbENvbnRleHQnO1xyXG5pbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY29sb3JzIGZyb20gJy4uL2Nzcy12YXJpYWJsZXMvY29sb3JzJ1xyXG5cclxuY29uc3QgVmlkZW9JdGVtID0gKHsgdmlkZW8sIG1vZGUgfSkgPT4ge1xyXG5cclxuICBjb25zdCB7IGFkZFZpZGVvVG9QbGF5bGlzdCwgcmVtb3ZlVmlkZW9Gcm9tUGxheWxpc3QsIHNldEN1cnJlbnRWaWRlbywgY3VycmVudFVzZXIsIHByb2ZpbGVVc2VyLCBzZXRBdXRvcGxheSB9ID0gdXNlQ29udGV4dChHbG9iYWxDb250ZXh0KTtcclxuXHJcbiAgY29uc3QgYWRkVmlkZW9DbGlja0hhbmRsZXIgPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgdmlkZW9Ub1NhdmUgPSB7XHJcbiAgICAgIHRpdGxlOiB2aWRlby5zbmlwcGV0LnRpdGxlLnNwbGl0KFwiJnF1b3Q7XCIpLmpvaW4oXCJcIikuc3BsaXQoXCImIzM5O1wiKS5qb2luKFwiJ1wiKS5zcGxpdChcIiZhbXA7XCIpLmpvaW4oXCImXCIpLFxyXG4gICAgICB0aHVtYm5haWxVUkw6IHZpZGVvLnNuaXBwZXQudGh1bWJuYWlscy5kZWZhdWx0LnVybCxcclxuICAgICAgdmlkZW9JZDogdmlkZW8uaWQudmlkZW9JZCxcclxuICAgIH1cclxuXHJcbiAgICBhZGRWaWRlb1RvUGxheWxpc3QodmlkZW9Ub1NhdmUpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgcmVtb3ZlVmlkZW9DbGlja0hhbmRsZXIgPSAoKSA9PiB7XHJcbiAgICByZW1vdmVWaWRlb0Zyb21QbGF5bGlzdCh2aWRlby5faWQpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgcGxheUJ1dHRvbkhhbmRsZXIgPSAoKSA9PiB7XHJcblxyXG4gICAgbGV0IHZpZGVvVG9TZXQ7XHJcblxyXG4gICAgaWYgKG1vZGUgPT09ICd5b3V0dWJlJykge1xyXG4gICAgICB2aWRlb1RvU2V0ID0ge1xyXG4gICAgICAgIHRpdGxlOiB2aWRlby5zbmlwcGV0LnRpdGxlLFxyXG4gICAgICAgIC8vIGRlc2NyaXB0aW9uOiB2aWRlby5zbmlwcGV0LmRlc2NyaXB0aW9uLFxyXG4gICAgICAgIHZpZGVvSWQ6IHZpZGVvLmlkLnZpZGVvSWQsXHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHZpZGVvVG9TZXQgPSB7XHJcbiAgICAgICAgdGl0bGU6IHZpZGVvLnRpdGxlLFxyXG4gICAgICAgIC8vIGRlc2NyaXB0aW9uOiB2aWRlby5kZXNjcmlwdGlvbixcclxuICAgICAgICB2aWRlb0lkOiB2aWRlby52aWRlb1VSTCxcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgc2V0Q3VycmVudFZpZGVvKHZpZGVvVG9TZXQpO1xyXG5cclxuICAgIHNldEF1dG9wbGF5KHRydWUpO1xyXG5cclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInZpZGVvLWl0ZW1cIj5cclxuICAgICAge21vZGUgPT09ICd5b3V0dWJlJyAmJlxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICA8aW1nIHNyYz17dmlkZW8uc25pcHBldC50aHVtYm5haWxzLmRlZmF1bHQudXJsfSBhbHQ9XCJ5b3V0dWJlIHZpZGVvXCIgLz5cclxuICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ2aWRlby10aXRsZVwiPnt2aWRlby5zbmlwcGV0LnRpdGxlLnNwbGl0KFwiJnF1b3Q7XCIpLmpvaW4oXCJcIikuc3BsaXQoXCImIzM5O1wiKS5qb2luKFwiJ1wiKS5zcGxpdChcIiZhbXA7XCIpLmpvaW4oXCImXCIpfTwvaDM+XHJcbiAgICAgICAgICA8ZGl2IGlkPVwiYnV0dG9uc1wiPlxyXG4gICAgICAgICAge3Byb2ZpbGVVc2VyLm93bmVkVmlkZW9zLmxlbmd0aCA+IDAgJiZcclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtwbGF5QnV0dG9uSGFuZGxlcn0+XHJcbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtcGxheVwiPjwvaT5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17YWRkVmlkZW9DbGlja0hhbmRsZXJ9PlxyXG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXBsdXNcIj48L2k+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHttb2RlID09PSAncGxheWxpc3QnICYmXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIDxpbWcgc3JjPXt2aWRlby50aHVtYm5haWxVUkx9IGFsdD1cInlvdXR1YmUgdmlkZW9cIiAvPlxyXG4gICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInZpZGVvLXRpdGxlXCI+e3ZpZGVvLnRpdGxlfTwvaDM+XHJcbiAgICAgICAgICA8ZGl2IGlkPVwiYnV0dG9uc1wiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3BsYXlCdXR0b25IYW5kbGVyfT5cclxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1wbGF5XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAge2N1cnJlbnRVc2VyLmlkID09PSBwcm9maWxlVXNlci5pZCAmJlxyXG4gICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17cmVtb3ZlVmlkZW9DbGlja0hhbmRsZXJ9PlxyXG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtdHJhc2gtb1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICBcclxuICAgIC52aWRlby1pdGVtIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjZTEyOWU4OyAqL1xyXG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJHtjb2xvcnMucHJpbWFyeX07XHJcbiAgICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICAgIC8qIG1hcmdpbi1ib3R0b206IDFyZW07ICovXHJcbiAgICB9XHJcblxyXG4gICAgLnZpZGVvLWl0ZW06bGFzdC1jaGlsZCB7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgaDMge1xyXG4gICAgICBtYXJnaW46IDAgYXV0byAwIDIuN3JlbTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgYnV0dG9uIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtjb2xvcnMucHJpbWFyeX07XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgcGFkZGluZzogMC43NXJlbSAxcmVtO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICBtYXJnaW46IDAuNXJlbTtcclxuICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzIGVhc2UtaW4tb3V0LCB0ZXh0LXNoYWRvdyAwLjJzO1xyXG4gICAgfVxyXG5cclxuICAgIGJ1dHRvbjpob3ZlciB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlNTMwNWE7XHJcbiAgICAgIHRleHQtc2hhZG93OiAwcHggMHB4IDhweCByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyogTWVkaWEgcXVlcmllcyAqL1xyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDEwODBweCkge1xyXG4gICAgICBoMyB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEuN3JlbTtcclxuICAgICAgfVxyXG5cclxuICAgICAgI2J1dHRvbnMge1xyXG4gICAgICAgIG1pbi13aWR0aDogMjAlO1xyXG4gICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAudmlkZW8taXRlbSB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgaDMge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAjYnV0dG9ucyB7XHJcbiAgICAgICAgLyogd2lkdGg6IDEwJTsgKi9cclxuICAgICAgICBtaW4td2lkdGg6IDEwJTtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xyXG4gICAgICBpbWcge1xyXG4gICAgICAgIGhlaWdodDogNjBweDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDAuM3JlbTtcclxuICAgICAgfVxyXG5cclxuICAgICAgI2J1dHRvbnMge1xyXG4gICAgICAgIHdpZHRoOiAxMyU7XHJcbiAgICAgICAgbWluLXdpZHRoOiAxMyU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNDAwcHgpIHtcclxuICAgICAgI2J1dHRvbnMge1xyXG4gICAgICAgIHdpZHRoOiAxNSU7XHJcbiAgICAgICAgbWluLXdpZHRoOiAxNSU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGgzIHtcclxuICAgICAgICBmb250LXNpemU6IDAuN3JlbTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAzODBweCkge1xyXG4gICAgICAudmlkZW8taXRlbSB7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwLjZyZW07XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogMzUwcHgpIHtcclxuICAgICAgLnZpZGVvLWl0ZW0ge1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMC42cmVtO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAjYnV0dG9ucyB7XHJcbiAgICAgICAgd2lkdGg6IDE3JTtcclxuICAgICAgICBtaW4td2lkdGg6IDE3JTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaW1nIHtcclxuICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICBcclxuICBgfTwvc3R5bGU+XHJcblxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBWaWRlb0l0ZW07Il19 */
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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxDb2RpbmdcXE15UHJvamVjdHNcXGNvZGVycy1qdWtlYm94XFxjb21wb25lbnRzXFxWaWRlb1BsYXllci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwQmMsQUFJdUIsQUFJTixBQU9LLEFBTUMsQUFhSixBQUtFLEFBWUYsQUFLRSxVQS9DRyxBQTBCSCxBQWtCZCxFQWJBLEFBaUJBLEdBekNZLENBWGQsQUFpQm9CLE1BY2xCLEtBMUJhLEFBT0YsT0FNYixJQUxBLEVBTkQsOENBQUMiLCJmaWxlIjoiQzpcXENvZGluZ1xcTXlQcm9qZWN0c1xcY29kZXJzLWp1a2Vib3hcXGNvbXBvbmVudHNcXFZpZGVvUGxheWVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR2xvYmFsQ29udGV4dCB9IGZyb20gJy4uL2NvbnRleHQvR2xvYmFsQ29udGV4dCc7XHJcbmltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjb2xvcnMgZnJvbSAnLi4vY3NzLXZhcmlhYmxlcy9jb2xvcnMnXHJcblxyXG5jb25zdCBWaWRlb1BsYXllciA9ICgpID0+IHtcclxuXHJcbiAgY29uc3QgeyB2aWRlb1N0YXRlLCBhdXRvcGxheSwgcHJvZmlsZVVzZXIgfSA9IHVzZUNvbnRleHQoR2xvYmFsQ29udGV4dCk7XHJcblxyXG4gIC8vIEF1dG9wbGF5IG9mZlxyXG4gIGxldCB2aWRlb1NyYyA9IGBodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC8ke3ZpZGVvU3RhdGUudmlkZW9JZH1gO1xyXG5cclxuICBpZiAoYXV0b3BsYXkpIHtcclxuICAgIC8vIEF1dG9wbGF5IG9uXHJcbiAgICB2aWRlb1NyYyA9IGBodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC8ke3ZpZGVvU3RhdGUudmlkZW9JZH0/YXV0b3BsYXk9MWA7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG5cclxuICAgIDxkaXYgaWQ9XCJ2aWRlby1jb250YWluZXJcIj5cclxuICAgICAge3Byb2ZpbGVVc2VyLm93bmVkVmlkZW9zLmxlbmd0aCA+IDAgJiYgdmlkZW9TdGF0ZS50aXRsZSAhPT0gJycgJiZcclxuICAgICAgICA8ZGl2IGlkPVwidmlkZW8tcGxheWVyXCI+XHJcbiAgICAgICAgICA8aWZyYW1lIHdpZHRoPVwiOTE4XCIgaGVpZ2h0PVwiNTY3XCIgZnJhbWVCb3JkZXI9XCIwXCIgYWxsb3dGdWxsU2NyZWVuIGFsbG93PVwiYXV0b3BsYXlcIiBzcmM9e3ZpZGVvU3JjfT48L2lmcmFtZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgfVxyXG4gICAgICBcclxuXHJcbiAgPHN0eWxlIGpzeD57YFxyXG4gIFxyXG4gICAgI3ZpZGVvLWNvbnRhaW5lciB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDNyZW07XHJcbiAgICB9XHJcbiAgICBcclxuICAgICN2aWRlby1wbGF5ZXIge1xyXG4gICAgICB3aWR0aDogODUlO1xyXG4gICAgICBtYXJnaW46IDRyZW0gYXV0bztcclxuICAgICAgcGFkZGluZzogMXJlbTtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgJHtjb2xvcnMucHJpbWFyeX1cclxuICAgIH1cclxuXHJcbiAgICBpZnJhbWUge1xyXG4gICAgICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcblxyXG4gICAgI3ZpZGVvLWluZm8ge1xyXG4gICAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbi8qIFxyXG4gICAgaDMge1xyXG4gICAgICB3aWR0aDogODAlO1xyXG4gICAgICBtYXJnaW46IGF1dG87XHJcbiAgICB9ICovXHJcblxyXG4gICAgLyogTWVkaWEgcXVlcmllcyAqL1xyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDExNTBweCApIHtcclxuXHJcbiAgICAgICN2aWRlby1wbGF5ZXIge1xyXG4gICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZnJhbWUge1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMDAwcHggKSB7XHJcbiAgICAgIGlmcmFtZSB7XHJcbiAgICAgICAgLyogd2lkdGg6IDg1dnc7ICovXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNTgwcHggKSB7XHJcbiAgICAgICN2aWRlby1wbGF5ZXIge1xyXG4gICAgICAgIHdpZHRoOiA5MSU7XHJcbiAgICAgICAgLyogaGVpZ2h0OiA1MCU7ICovXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmcmFtZSB7XHJcbiAgICAgICAgaGVpZ2h0OiAzM3ZoO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgXHJcbiAgXHJcbiAgXHJcbiAgYH08L3N0eWxlPlxyXG5cclxuXHJcblxyXG5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVmlkZW9QbGF5ZXI7Il19 */
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
/* harmony import */ var _components_ProfileInfo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/ProfileInfo */ "./components/ProfileInfo.js");
/* harmony import */ var _components_AboutMe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/AboutMe */ "./components/AboutMe.js");
/* harmony import */ var _components_VideoPlayer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/VideoPlayer */ "./components/VideoPlayer.js");
/* harmony import */ var _components_AddToPlaylist__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/AddToPlaylist */ "./components/AddToPlaylist.js");
/* harmony import */ var _components_PlayList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/PlayList */ "./components/PlayList.js");
/* harmony import */ var _components_CommentSection__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/CommentSection */ "./components/CommentSection.js");
/* harmony import */ var _components_ProfileEdit__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/ProfileEdit */ "./components/ProfileEdit.js");
/* harmony import */ var _components_Favourites__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/Favourites */ "./components/Favourites.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/Footer */ "./components/Footer.js");


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;













const Profile = () => {
  const {
    currentUser,
    profileUser,
    setAutoplay,
    fetchProfileUser
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context_GlobalContext__WEBPACK_IMPORTED_MODULE_3__["GlobalContext"]); // Get the userId from the URL and fetch the profile user's data

  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  const {
    userId
  } = router.query;
  fetchProfileUser(userId, true);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    setAutoplay(false);
  }, []);
  const {
    0: editMode,
    1: setEditMode
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    id: "profile",
    className: "jsx-1332382758" + " " + "container animate__animated animate__fadeIn"
  }, __jsx(_components_ProfileInfo__WEBPACK_IMPORTED_MODULE_4__["default"], {
    setEditMode: setEditMode,
    editMode: editMode
  }), editMode && __jsx(_components_ProfileEdit__WEBPACK_IMPORTED_MODULE_10__["default"], {
    setEditMode: setEditMode
  }), __jsx(_components_AboutMe__WEBPACK_IMPORTED_MODULE_5__["default"], {
    profileUser: profileUser
  }), __jsx(_components_VideoPlayer__WEBPACK_IMPORTED_MODULE_6__["default"], null), profileUser.id === currentUser.id && __jsx(_components_AddToPlaylist__WEBPACK_IMPORTED_MODULE_7__["default"], null), __jsx(_components_PlayList__WEBPACK_IMPORTED_MODULE_8__["default"], {
    profileUser: profileUser
  }), __jsx(_components_CommentSection__WEBPACK_IMPORTED_MODULE_9__["default"], {
    profileUser: profileUser
  }), __jsx(_components_Favourites__WEBPACK_IMPORTED_MODULE_11__["default"], {
    profileUser: profileUser
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1332382758"
  }, "#profile.jsx-1332382758{color:white;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxDb2RpbmdcXE15UHJvamVjdHNcXGNvZGVycy1qdWtlYm94XFxwYWdlc1xccHJvZmlsZVxcW3VzZXJJZF0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdURvQixBQUl5QixZQUNkIiwiZmlsZSI6IkM6XFxDb2RpbmdcXE15UHJvamVjdHNcXGNvZGVycy1qdWtlYm94XFxwYWdlc1xccHJvZmlsZVxcW3VzZXJJZF0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHsgR2xvYmFsQ29udGV4dCB9IGZyb20gJy4uLy4uL2NvbnRleHQvR2xvYmFsQ29udGV4dCc7XHJcblxyXG5pbXBvcnQgUHJvZmlsZUluZm8gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Qcm9maWxlSW5mbyc7XHJcbmltcG9ydCBBYm91dE1lIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQWJvdXRNZSc7XHJcbmltcG9ydCBWaWRlb1BsYXllciBmcm9tICcuLi8uLi9jb21wb25lbnRzL1ZpZGVvUGxheWVyJztcclxuaW1wb3J0IEFkZFRvUGxheWxpc3QgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9BZGRUb1BsYXlsaXN0JztcclxuaW1wb3J0IFBsYXlsaXN0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvUGxheUxpc3QnO1xyXG5pbXBvcnQgQ29tbWVudFNlY3Rpb24gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Db21tZW50U2VjdGlvbic7XHJcbmltcG9ydCBQcm9maWxlRWRpdCBmcm9tICcuLi8uLi9jb21wb25lbnRzL1Byb2ZpbGVFZGl0JztcclxuaW1wb3J0IEZhdm91cml0ZXMgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9GYXZvdXJpdGVzJztcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL0Zvb3Rlcic7XHJcblxyXG5jb25zdCBQcm9maWxlID0gKCkgPT4ge1xyXG5cclxuICBjb25zdCB7IGN1cnJlbnRVc2VyLCBwcm9maWxlVXNlciwgc2V0QXV0b3BsYXksIGZldGNoUHJvZmlsZVVzZXJ9ID0gdXNlQ29udGV4dChHbG9iYWxDb250ZXh0KTtcclxuXHJcbiAgLy8gR2V0IHRoZSB1c2VySWQgZnJvbSB0aGUgVVJMIGFuZCBmZXRjaCB0aGUgcHJvZmlsZSB1c2VyJ3MgZGF0YVxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgY29uc3QgeyB1c2VySWQgfSA9IHJvdXRlci5xdWVyeVxyXG4gIGZldGNoUHJvZmlsZVVzZXIodXNlcklkLCB0cnVlKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgc2V0QXV0b3BsYXkoZmFsc2UpO1xyXG4gICAgfSwgW10pXHJcblxyXG4gIGNvbnN0IFtlZGl0TW9kZSwgc2V0RWRpdE1vZGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgYW5pbWF0ZV9fYW5pbWF0ZWQgYW5pbWF0ZV9fZmFkZUluXCIgaWQ9XCJwcm9maWxlXCI+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPFByb2ZpbGVJbmZvIHNldEVkaXRNb2RlPXtzZXRFZGl0TW9kZX0gZWRpdE1vZGU9e2VkaXRNb2RlfSAvPlxyXG5cclxuICAgICAgICB7ZWRpdE1vZGUgJiZcclxuICAgICAgICAgIDxQcm9maWxlRWRpdCBzZXRFZGl0TW9kZT17c2V0RWRpdE1vZGV9Lz5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIDxBYm91dE1lIHByb2ZpbGVVc2VyPXtwcm9maWxlVXNlcn0vPlxyXG5cclxuICAgICAgICA8VmlkZW9QbGF5ZXIvPlxyXG5cclxuICAgICAgICB7cHJvZmlsZVVzZXIuaWQgPT09IGN1cnJlbnRVc2VyLmlkICYmIFxyXG4gICAgICAgICAgPEFkZFRvUGxheWxpc3QvPiBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIDxQbGF5bGlzdCBwcm9maWxlVXNlcj17cHJvZmlsZVVzZXJ9Lz5cclxuXHJcbiAgICAgICAgPENvbW1lbnRTZWN0aW9uIHByb2ZpbGVVc2VyPXtwcm9maWxlVXNlcn0vPlxyXG5cclxuICAgICAgICA8RmF2b3VyaXRlcyBwcm9maWxlVXNlcj17cHJvZmlsZVVzZXJ9Lz5cclxuXHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgI3Byb2ZpbGUge1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgYH08L3N0eWxlPlxyXG5cclxuICAgICAgICA8Rm9vdGVyIC8+XHJcbiAgICAgIDwvPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZmlsZTsiXX0= */\n/*@ sourceURL=C:\\\\Coding\\\\MyProjects\\\\coders-jukebox\\\\pages\\\\profile\\\\[userId].js */"), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_12__["default"], null));
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly8vLi9hcGlzL3lvdXR1YmUuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9BYm91dE1lLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQWRkVG9QbGF5bGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NvbW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Db21tZW50U2VjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Zhdm91cml0ZUl0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9GYXZvdXJpdGVzLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRmlsZVVwbG9hZC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Zvb3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1BsYXlMaXN0LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUHJvZmlsZUVkaXQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Qcm9maWxlSW5mby5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NlYXJjaEJhci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1ZpZGVvSXRlbS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1ZpZGVvUGxheWVyLmpzIiwid2VicGFjazovLy8uL2NvbmZpZy9kZXYuanMiLCJ3ZWJwYWNrOi8vLy4vY29uZmlnL2tleXMuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGV4dC9HbG9iYWxDb250ZXh0LmpzIiwid2VicGFjazovLy8uL2Nzcy12YXJpYWJsZXMvY29sb3JzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L2xpbmsudHN4Iiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvd2l0aC1yb3V0ZXIudHN4Iiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvbWl0dC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9pcy1keW5hbWljLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1tYXRjaGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLXJlZ2V4LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3NlYXJjaC1wYXJhbXMtdG8tdXJsLXF1ZXJ5LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbGluay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvcmVhY3QtaXMvY2pzL3JlYWN0LWlzLmRldmVsb3BtZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9yZWFjdC1pcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9wcm9maWxlL1t1c2VySWRdLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZnJhbWVyLW1vdGlvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJvcC10eXBlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXMtZXhhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJxdWVyeXN0cmluZ1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3R5bGVkLWpzeC9zdHlsZVwiIl0sIm5hbWVzIjpbIktFWSIsIllPVVRVQkVBUElfS0VZIiwieW91dHViZSIsImF4aW9zIiwiY3JlYXRlIiwiYmFzZVVSTCIsInBhcmFtcyIsInBhcnQiLCJtYXhSZXN1bHRzIiwia2V5IiwiQWJvdXRNZSIsInByb2ZpbGVVc2VyIiwiY29sb3JzIiwicmV2ZXJzZVBpbmtHcmFkaWVudCIsInByaW1hcnkiLCJmaXJzdE5hbWUiLCJhYm91dCIsIkFkZFRvUGxheWxpc3QiLCJ2aWRlb3MiLCJzZXRWaWRlb3MiLCJ1c2VTdGF0ZSIsInNlYXJjaFZpZGVvSGFuZGxlciIsInNlYXJjaElucHV0IiwicmVzIiwiZ2V0IiwidHlwZSIsInEiLCJ2aWRlb0xpc3QiLCJkYXRhIiwiaXRlbXMiLCJncmFkaWVudCIsImxlbmd0aCIsIm1hcCIsInZpZGVvIiwiaWQiLCJ2aWRlb0lkIiwiQ29tbWVudCIsImNvbW1lbnQiLCJjb21tZW50ZXJJZCIsImNvbW1lbnRlciIsIl9pZCIsImdldENvbW1lbnRVc2VyIiwicmVtb3ZlQ29tbWVudEZyb21QbGF5bGlzdCIsImN1cnJlbnRVc2VyIiwiZmV0Y2hQcm9maWxlVXNlciIsImVkaXRDb21tZW50IiwidXNlQ29udGV4dCIsIkdsb2JhbENvbnRleHQiLCJjb21tZW50VXNlciIsInNldENvbW1lbnRVc2VyIiwibGFzdE5hbWUiLCJwcm9maWxlUGhvdG9GaWxlbmFtZSIsImVkaXRNb2RlIiwic2V0RWRpdE1vZGUiLCJlZGl0ZWRDb250ZW50UmVmIiwidXNlUmVmIiwidXNlRWZmZWN0IiwiZmV0Y2hEYXRhIiwidXNlciIsImVkaXRDb21tZW50Q2xpY2tIYW5kbGVyIiwiZWRpdENvbW1lbnRTdWJtaXRIYW5kbGVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwiY3VycmVudCIsInZhbHVlIiwidHJpbSIsImNvbnZlcnREYXRlIiwibWlsbGlzZWNzIiwiZCIsIkRhdGUiLCJkYXRlQXJyYXkiLCJ0b0xvY2FsZVN0cmluZyIsInNwbGl0IiwicmVtb3ZlQ29tbWVudENsaWNrSGFuZGxlciIsImNvbW1lbnRlckNsaWNrSGFuZGxlciIsImNvbnRlbnQiLCJjcmVhdGVkQXQiLCJkYXRlIiwiQ29tbWVudFNlY3Rpb24iLCJhZGRDb21tZW50IiwiYXV0aFN0YXRlIiwic2V0Q29udGVudCIsImhhbmRsZUNoYW5nZSIsInRhcmdldCIsImNvbW1lbnRTdWJtaXRIYW5kbGVyIiwicGxheWxpc3RDb21tZW50cyIsImF1dGhlbnRpY2F0ZWQiLCJGYXZvdXJpdGVJdGVtIiwiZ2V0RmF2b3VyaXRlVXNlciIsInJlbW92ZUZhdm91cml0ZSIsImZhdlVzZXIiLCJzZXRGYXZVc2VyIiwiZmF2VXNlckNsaWNrSGFuZGxlciIsInJlbW92ZUZhdkhhbmRsZXIiLCJ1c2VyRGF0YSIsInVuZGVmaW5lZCIsIkZhdm91cml0ZXMiLCJzZWNvbmRhcnkiLCJmYXZvdXJpdGVzIiwiZmF2b3VyaXRlIiwiRmlsZVVwbG9hZCIsImZpbGUiLCJzZXRGaWxlIiwiZmlsZW5hbWUiLCJzZXRGaWxlbmFtZSIsInVwbG9hZEZpbGUiLCJ1cGxvYWRGaWxlSGFuZGxlciIsInNpemUiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwib25DaGFuZ2UiLCJmaWxlcyIsIm5hbWUiLCJGb290ZXIiLCJ5ZWFyIiwiZ2V0RnVsbFllYXIiLCJyZXZlcnNlR3JhZGllbnQiLCJQbGF5TGlzdCIsIm93bmVkVmlkZW9zIiwidmlkZW9VUkwiLCJlZGl0VmFyaWFudHMiLCJoaWRkZW4iLCJvcGFjaXR5IiwieSIsInpJbmRleCIsInZpc2libGUiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJleGl0IiwiUHJvZmlsZUVkaXQiLCJ1cGRhdGVVc2VyIiwidXBsb2FkUGhvdG8iLCJwcm9maWxlSW5mbyIsInNldFByb2ZpbGVJbmZvIiwiam9iVGl0bGUiLCJsb2NhdGlvbiIsImxhbmd1YWdlcyIsImZpcnN0TmFtZVJlZiIsImxhc3ROYW1lUmVmIiwiam9iVGl0bGVSZWYiLCJsb2NhdGlvblJlZiIsImxhbmd1YWdlMVJlZiIsImxhbmd1YWdlMlJlZiIsImxhbmd1YWdlM1JlZiIsImxhbmd1YWdlNFJlZiIsImFib3V0UmVmIiwidXBkYXRlUHJvZmlsZUhhbmRsZXIiLCJsYW5ndWFnZTEiLCJsYW5ndWFnZTIiLCJsYW5ndWFnZTMiLCJsYW5ndWFnZTQiLCJnZXRFeGlzdGluZ0xhbmd1YWdlcyIsIlByb2ZpbGVJbmZvIiwiY2xlYXJQcm9maWxlVXNlciIsImFkZEZhdm91cml0ZSIsImlzRmF2b3VyaXRlIiwic2V0SXNGYXZvdXJpdGUiLCJhZGRGYXZvdXJpdGVIYW5kbGVyIiwicmVtb3ZlRmF2b3VyaXRlSGFuZGxlciIsImdldExhbmd1YWdlU3RyaW5nIiwibGFuZ3VhZ2VTdHJpbmciLCJsYW5ndWFnZSIsImluZGV4IiwidGVydGlhcnkiLCJpbmNsdWRlcyIsIlNlYXJjaGJhciIsInBsYWNlaG9sZGVyIiwic3VibWl0SGFuZGxlciIsInNldFNlYXJjaElucHV0Iiwib25DaGFuZ2VIYW5kbGVyIiwib25Gb3JtU3VibWl0IiwiVmlkZW9JdGVtIiwibW9kZSIsImFkZFZpZGVvVG9QbGF5bGlzdCIsInJlbW92ZVZpZGVvRnJvbVBsYXlsaXN0Iiwic2V0Q3VycmVudFZpZGVvIiwic2V0QXV0b3BsYXkiLCJhZGRWaWRlb0NsaWNrSGFuZGxlciIsInZpZGVvVG9TYXZlIiwidGl0bGUiLCJzbmlwcGV0Iiwiam9pbiIsInRodW1ibmFpbFVSTCIsInRodW1ibmFpbHMiLCJkZWZhdWx0IiwidXJsIiwicmVtb3ZlVmlkZW9DbGlja0hhbmRsZXIiLCJwbGF5QnV0dG9uSGFuZGxlciIsInZpZGVvVG9TZXQiLCJWaWRlb1BsYXllciIsInZpZGVvU3RhdGUiLCJhdXRvcGxheSIsInZpZGVvU3JjIiwibW9kdWxlIiwiZXhwb3J0cyIsIm1vbmdvVVJJIiwicmVxdWlyZSIsImluaXRpYWxTdGF0ZSIsImF1dGhEYXRhIiwiY3JlYXRlQ29udGV4dCIsInBpbmtHcmFkZW50IiwibG9jYXRpb25PcmlnaW4iLCJyZXNvbHZlZCIsImxpc3RlbmVycyIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwid2luZG93IiwicHJlZmV0Y2hlZCIsImNhY2hlZE9ic2VydmVyIiwiZW50cmllcyIsImVudHJ5IiwiY2IiLCJyb290TWFyZ2luIiwibGlzdGVuVG9JbnRlcnNlY3Rpb25zIiwib2JzZXJ2ZXIiLCJnZXRPYnNlcnZlciIsImNvbnNvbGUiLCJyb3V0ZXIiLCJlcnIiLCJocmVmIiwibm9kZU5hbWUiLCJpc0xvY2FsIiwic2Nyb2xsIiwiYXMiLCJyZXBsYWNlIiwic3VjY2VzcyIsImRvY3VtZW50IiwiaGFzV2FybmVkIiwiUmVhY3QiLCJwcm9wcyIsInAiLCJwYXRobmFtZSIsInJlc29sdmVkSHJlZiIsImNoaWxkRWxtIiwiaXNQcmVmZXRjaGVkIiwicHJlZmV0Y2giLCJjaGlsZHJlbiIsImNoaWxkIiwiQ2hpbGRyZW4iLCJjaGlsZFByb3BzIiwicmVmIiwiZWwiLCJzZXRDaGlsZEVsbSIsIm9uQ2xpY2siLCJsaW5rQ2xpY2tlZCIsInByaW9yaXR5IiwicHJvY2VzcyIsIndhcm4iLCJQcm9wVHlwZXMiLCJleGFjdCIsIkxpbmsiLCJzaGFsbG93IiwicGFzc0hyZWYiLCJwYXRoIiwibm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2giLCJzaW5nbGV0b25Sb3V0ZXIiLCJyZWFkeUNhbGxiYWNrcyIsInJlYWR5IiwidXJsUHJvcGVydHlGaWVsZHMiLCJyb3V0ZXJFdmVudHMiLCJjb3JlTWV0aG9kRmllbGRzIiwiT2JqZWN0IiwiUm91dGVyIiwiZmllbGQiLCJnZXRSb3V0ZXIiLCJldmVudCIsImV2ZW50RmllbGQiLCJfc2luZ2xldG9uUm91dGVyIiwibWVzc2FnZSIsInN0YWNrIiwiUm91dGVyQ29udGV4dCIsImNyZWF0ZVJvdXRlciIsIl9yb3V0ZXIiLCJpbnN0YW5jZSIsIkNvbXBvc2VkQ29tcG9uZW50IiwiZ2V0SW5pdGlhbFByb3BzIiwiV2l0aFJvdXRlcldyYXBwZXIiLCJhbGwiLCJvbiIsIm9mZiIsImVtaXQiLCJoYW5kbGVyIiwiYmFzZVBhdGgiLCJjYW5jZWxsZWQiLCJiYXNlIiwidXJsQXNTdHJpbmciLCJmaW5hbFVybCIsImFkZEJhc2VQYXRoIiwicmVzb2x2ZUhyZWYiLCJtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiIsImNyZWRlbnRpYWxzIiwiYXR0ZW1wdHMiLCJmZXRjaFJldHJ5IiwiaXNTZXJ2ZXJSZW5kZXIiLCJjb25zdHJ1Y3RvciIsInJvdXRlIiwicXVlcnkiLCJhc1BhdGgiLCJjb21wb25lbnRzIiwic2RjIiwic3ViIiwiY2xjIiwicGFnZUxvYWRlciIsIl9icHMiLCJldmVudHMiLCJfd3JhcEFwcCIsImlzU3NyIiwiaXNGYWxsYmFjayIsIl9pbkZsaWdodFJvdXRlIiwiX19OX1NTRyIsImluaXRpYWxQcm9wcyIsIl9fTl9TU1AiLCJDb21wb25lbnQiLCJfX05FWFRfREFUQV9fIiwidXBkYXRlIiwibW9kIiwibmV3RGF0YSIsInJlbG9hZCIsImJhY2siLCJwdXNoIiwib3B0aW9ucyIsInByZXBhcmVVcmxBcyIsIlNUIiwicGVyZm9ybWFuY2UiLCJjbGVhbmVkQXMiLCJkZWxCYXNlUGF0aCIsInBhcnNlZCIsInRyeVBhcnNlUmVsYXRpdmVVcmwiLCJtZXRob2QiLCJyb3V0ZVJlZ2V4Iiwicm91dGVNYXRjaCIsIm1pc3NpbmdQYXJhbXMiLCJwYXJhbSIsImFzUGF0aG5hbWUiLCJyb3V0ZUluZm8iLCJhcHBDb21wIiwiY2hhbmdlU3RhdGUiLCJfX04iLCJidWlsZENhbmNlbGxhdGlvbkVycm9yIiwicGFnZSIsImVycm9yIiwiY2FjaGVkUm91dGVJbmZvIiwiaXNWYWxpZEVsZW1lbnRUeXBlIiwiZGF0YUhyZWYiLCJzZXQiLCJiZWZvcmVQb3BTdGF0ZSIsIm9ubHlBSGFzaENoYW5nZSIsIm5ld0hhc2giLCJvbGRVcmxOb0hhc2giLCJvbGRIYXNoIiwic2Nyb2xsVG9IYXNoIiwiaGFzaCIsImlkRWwiLCJuYW1lRWwiLCJ1cmxJc05ldyIsIlByb21pc2UiLCJjYW5jZWwiLCJjb21wb25lbnRSZXN1bHQiLCJfZ2V0RGF0YSIsImZuIiwiX2dldFN0YXRpY0RhdGEiLCJmZXRjaE5leHREYXRhIiwiX2dldFNlcnZlckRhdGEiLCJBcHBUcmVlIiwiY3R4IiwiYWJvcnRDb21wb25lbnRMb2FkIiwibm90aWZ5Iiwic2xhc2hlZFByb3RvY29scyIsInByb3RvY29sIiwidXJsT2JqIiwiaG9zdCIsImF1dGgiLCJlbmNvZGVVUklDb21wb25lbnQiLCJob3N0bmFtZSIsInNlYXJjaCIsIlRFU1RfUk9VVEUiLCJEVU1NWV9CQVNFIiwicmVzb2x2ZWRCYXNlIiwib3JpZ2luIiwicmUiLCJkZWNvZGUiLCJkZWNvZGVVUklDb21wb25lbnQiLCJzbHVnTmFtZSIsImciLCJncm91cHMiLCJtIiwic3RyIiwib3B0aW9uYWwiLCJyZXBlYXQiLCJzZWdtZW50cyIsIm5vcm1hbGl6ZWRSb3V0ZSIsImdyb3VwSW5kZXgiLCJwYXJhbWV0ZXJpemVkUm91dGUiLCJzZWdtZW50IiwicGFyc2VQYXJhbWV0ZXIiLCJwb3MiLCJlc2NhcGVSZWdleCIsInJvdXRlS2V5Q2hhckNvZGUiLCJyb3V0ZUtleUNoYXJMZW5ndGgiLCJnZXRTYWZlUm91dGVLZXkiLCJyb3V0ZUtleSIsImkiLCJTdHJpbmciLCJyb3V0ZUtleXMiLCJuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSIsImNsZWFuZWRLZXkiLCJpbnZhbGlkS2V5IiwiaXNOYU4iLCJwYXJzZUludCIsIm5hbWVkUmVnZXgiLCJzZWFyY2hQYXJhbXMiLCJBcnJheSIsInVzZWQiLCJyZXN1bHQiLCJwb3J0IiwiZ2V0TG9jYXRpb25PcmlnaW4iLCJBcHAiLCJnZXREaXNwbGF5TmFtZSIsInBhZ2VQcm9wcyIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJpc1Jlc1NlbnQiLCJ1cmxPYmplY3RLZXlzIiwiU1AiLCJQcm9maWxlIiwidXNlUm91dGVyIiwidXNlcklkIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztR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akNKLENBREY7QUFxQ0QsQ0FwREQ7O0FBc0RlNFosc0VBQWYsRTs7Ozs7Ozs7Ozs7QUNwRUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsMEM7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsNkMiLCJmaWxlIjoicGFnZXMvcHJvZmlsZS9bdXNlcklkXS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvcHJvZmlsZS9bdXNlcklkXS5qc1wiKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qc1wiKTsiLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyBZT1VUVUJFQVBJX0tFWSB9IGZyb20gJy4uL2NvbmZpZy9rZXlzJztcclxuXHJcbmV4cG9ydCBjb25zdCBLRVkgPSBZT1VUVUJFQVBJX0tFWTtcclxuXHJcbmV4cG9ydCBjb25zdCB5b3V0dWJlID0gYXhpb3MuY3JlYXRlKHtcclxuICBiYXNlVVJMOiAnaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20veW91dHViZS92MycsXHJcbiAgcGFyYW1zOiB7XHJcbiAgICBwYXJ0OiAnc25pcHBldCcsXHJcbiAgICBtYXhSZXN1bHRzOiA1LFxyXG4gICAga2V5OiBZT1VUVUJFQVBJX0tFWVxyXG4gIH1cclxufSk7IiwiaW1wb3J0IGNvbG9ycyBmcm9tICcuLi9jc3MtdmFyaWFibGVzL2NvbG9ycyc7XHJcblxyXG5jb25zdCBBYm91dE1lID0gKHtwcm9maWxlVXNlcn0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gaWQ9XCJhYm91dC1tZVwiPlxyXG4gICAgICA8aDI+QWJvdXQge3Byb2ZpbGVVc2VyLmZpcnN0TmFtZX08L2gyPlxyXG4gICAgICB7cHJvZmlsZVVzZXIuYWJvdXQgIT09IG51bGwgJiZcclxuICAgICAgICA8cD5cclxuICAgICAgICAgIHtwcm9maWxlVXNlci5hYm91dH1cclxuICAgICAgICA8L3A+XHJcbiAgICAgIH1cclxuICAgICAge3Byb2ZpbGVVc2VyLmFib3V0ID09PSBudWxsICYmXHJcbiAgICAgICAgPHA+XHJcbiAgICAgICAgICBUaGVyZSdzIG5vdGhpbmcgaGVyZSB5ZXQhXHJcbiAgICAgICAgPC9wPlxyXG4gICAgICB9XHJcbiAgICBcclxuICAgIFxyXG4gICAgXHJcbiAgICA8c3R5bGUganN4PntgXHJcbiAgICBcclxuICAgICAgc2VjdGlvbiNhYm91dC1tZSB7XHJcbiAgICAgICAgLyogYmFja2dyb3VuZCAgOiAke2NvbG9ycy5yZXZlcnNlUGlua0dyYWRpZW50fTsgKi9cclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAke2NvbG9ycy5wcmltYXJ5fTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDJyZW07XHJcbiAgICAgICAgd2lkdGg6IDg0JTtcclxuICAgICAgICBtYXJnaW46IDNyZW0gYXV0bztcclxuICAgICAgfVxyXG5cclxuICAgICAgcCB7XHJcbiAgICAgICAgcGFkZGluZzogMnJlbTtcclxuICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgICAgICBsaW5lLWhlaWdodDogMi41cmVtO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvKiBNZWRpYSBxdWVyaWVzICovXHJcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5MDBweCl7XHJcbiAgICAgICAgc2VjdGlvbiNhYm91dC1tZSB7XHJcbiAgICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgICAgcGFkZGluZzogMnJlbSAxcmVtIDJyZW0gMXJlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGgyIHtcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDY2MHB4KXtcclxuICAgICAgICBzZWN0aW9uI2Fib3V0LW1lIHtcclxuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ3MHB4KXtcclxuICAgICAgICBwIHtcclxuICAgICAgICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAwLjVyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNDAwcHgpe1xyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgICAgcGFkZGluZzogMC41cmVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgIH1cclxuXHJcbiAgICBgfTwvc3R5bGU+XHJcbiAgICBcclxuICAgIDwvc2VjdGlvbj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFib3V0TWU7XHJcbiIsImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBTZWFyY2hCYXIgZnJvbSAnLi9TZWFyY2hCYXInO1xyXG5pbXBvcnQgeyB5b3V0dWJlIH0gZnJvbSAnLi4vYXBpcy95b3V0dWJlJztcclxuaW1wb3J0IHsgWU9VVFVCRUFQSV9LRVkgfSBmcm9tICcuLi9jb25maWcva2V5cyc7XHJcbmltcG9ydCBWaWRlb0l0ZW0gZnJvbSAnLi9WaWRlb0l0ZW0nO1xyXG5pbXBvcnQgY29sb3JzIGZyb20gJy4uL2Nzcy12YXJpYWJsZXMvY29sb3JzJztcclxuXHJcbmNvbnN0IEFkZFRvUGxheWxpc3QgPSAoKSA9PiB7XHJcblxyXG4gIGNvbnN0IFt2aWRlb3MsIHNldFZpZGVvc10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIGNvbnN0IHNlYXJjaFZpZGVvSGFuZGxlciA9IGFzeW5jIChzZWFyY2hJbnB1dCkgPT4ge1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgeW91dHViZS5nZXQoJy9zZWFyY2gnLCB7XHJcbiAgICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgICB0eXBlOiAndmlkZW8nLFxyXG4gICAgICAgICAgcGFydDogJ3NuaXBwZXQnLFxyXG4gICAgICAgICAgbWF4UmVzdWx0czogNSxcclxuICAgICAgICAgIGtleTogWU9VVFVCRUFQSV9LRVksXHJcbiAgICAgICAgICBxOiBzZWFyY2hJbnB1dFxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuXHJcbiAgICBjb25zdCB2aWRlb0xpc3QgPSByZXMuZGF0YS5pdGVtcztcclxuICAgIHNldFZpZGVvcyh2aWRlb0xpc3QpO1xyXG4gIH1cclxuXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBpZD1cImFkZFRvUGxheWxpc3RcIj5cclxuICAgICAgPGRpdiBpZD1cImhlYWRlclwiPlxyXG4gICAgICAgIDxoMj5BZGQgVG8gUGxheWxpc3Q8L2gyPlxyXG4gICAgICAgIDxTZWFyY2hCYXIgcGxhY2Vob2xkZXI9J1NlYXJjaCBmb3IgbXVzaWMnIHNlYXJjaE1vZGU9XCJ2aWRlb1wiIHN1Ym1pdEhhbmRsZXI9e3NlYXJjaFZpZGVvSGFuZGxlcn0vPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcblxyXG4gICAgICA8ZGl2IGlkPVwidmlkZW9zXCI+XHJcbiAgICAgICAgeyB2aWRlb3MubGVuZ3RoID09PSAwICYmXHJcbiAgICAgICAgICA8aDM+U2VhcmNoIGZvciBtdXNpYyB0byBhZGQgdG8geW91ciBwbGF5bGlzdCE8L2gzPlxyXG4gICAgICAgIH1cclxuICAgICAgICB7dmlkZW9zLm1hcCh2aWRlbyA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8VmlkZW9JdGVtIHZpZGVvPXt2aWRlb30gbW9kZT1cInlvdXR1YmVcIiBrZXk9e3ZpZGVvLmlkLnZpZGVvSWR9Lz5cclxuICAgICAgICAgIClcclxuICAgICAgICB9KX1cclxuICAgICAgPC9kaXY+XHJcblxyXG4gIDxzdHlsZSBqc3g+e2BcclxuXHJcbiAgICBzZWN0aW9uIHtcclxuICAgICAgbWFyZ2luOiAycmVtIGF1dG8gM3JlbSBhdXRvO1xyXG4gICAgICB3aWR0aDogODQlO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAjaGVhZGVyIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYmFja2dyb3VuZDogJHtjb2xvcnMuZ3JhZGllbnR9O1xyXG4gICAgICBwYWRkaW5nOiAycmVtO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMCAwO1xyXG4gICAgfVxyXG5cclxuICAgIGgyIHtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDdyZW07XHJcbiAgICAgIHdpZHRoOiAyNSU7XHJcbiAgICB9XHJcblxyXG4gICAgI3ZpZGVvcyB7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICR7Y29sb3JzLnByaW1hcnl9O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAwIDAgMTBweCAxMHB4O1xyXG4gICAgICBib3JkZXItdG9wOiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgIGgzIHtcclxuICAgICAgcGFkZGluZzogMnJlbTtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC8qIE1lZGlhIHF1ZXJpZXMgKi9cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMTAwcHgpIHtcclxuICAgICAgaDIge1xyXG4gICAgICAgIG1pbi13aWR0aDogMjYlO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMXJlbTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA4MzBweCkge1xyXG4gICAgICAjaGVhZGVyIHtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBoMiB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xyXG4gICAgICAgIG1pbi13aWR0aDogNjAlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDUyMHB4KSB7XHJcbiAgICAgICNoZWFkZXIge1xyXG4gICAgICAgIHBhZGRpbmc6IDEuNXJlbTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAzNTVweCkge1xyXG4gICAgICBoMiB7XHJcbiAgICAgICAgbWluLXdpZHRoOiAxMDAlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBoMyB7XHJcbiAgICAgICAgcGFkZGluZzogMS41cmVtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gIGB9PC9zdHlsZT5cclxuXHJcblxyXG5cclxuICAgIDwvc2VjdGlvbj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFkZFRvUGxheWxpc3Q7IiwiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBHbG9iYWxDb250ZXh0IH0gZnJvbSAnLi4vY29udGV4dC9HbG9iYWxDb250ZXh0JztcclxuaW1wb3J0IGNvbG9ycyBmcm9tICAnLi4vY3NzLXZhcmlhYmxlcy9jb2xvcnMnO1xyXG5cclxuY29uc3QgQ29tbWVudCA9ICh7Y29tbWVudH0pID0+IHtcclxuICBcclxuICBjb25zdCBjb21tZW50ZXJJZCA9IGNvbW1lbnQuY29tbWVudGVyLl9pZCBcclxuICBcclxuICBjb25zdCB7IGdldENvbW1lbnRVc2VyLCByZW1vdmVDb21tZW50RnJvbVBsYXlsaXN0LCBjdXJyZW50VXNlciwgZmV0Y2hQcm9maWxlVXNlciwgZWRpdENvbW1lbnQgfSA9IHVzZUNvbnRleHQoR2xvYmFsQ29udGV4dCk7XHJcbiAgXHJcbiAgY29uc3QgW2NvbW1lbnRVc2VyLCBzZXRDb21tZW50VXNlcl0gPSB1c2VTdGF0ZSh7XHJcbiAgICBmaXJzdE5hbWU6ICcnLFxyXG4gICAgbGFzdE5hbWU6JycsXHJcbiAgICBwcm9maWxlUGhvdG9GaWxlbmFtZTogJydcclxuICB9KTtcclxuICBcclxuICBjb25zdCBbZWRpdE1vZGUsIHNldEVkaXRNb2RlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBcclxuICBjb25zdCBlZGl0ZWRDb250ZW50UmVmID0gdXNlUmVmKCk7XHJcblxyXG4gIFxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBhc3luYyBmdW5jdGlvbiBmZXRjaERhdGEoKSB7XHJcbiAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBnZXRDb21tZW50VXNlcihjb21tZW50LmNvbW1lbnRlci5faWQpO1xyXG4gICAgICBzZXRDb21tZW50VXNlcih7XHJcbiAgICAgICAgZmlyc3ROYW1lOiB1c2VyLmZpcnN0TmFtZSxcclxuICAgICAgICBsYXN0TmFtZTogdXNlci5sYXN0TmFtZSxcclxuICAgICAgICBwcm9maWxlUGhvdG9GaWxlbmFtZTogdXNlci5wcm9maWxlUGhvdG9GaWxlbmFtZVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gICAgZmV0Y2hEYXRhKCk7XHJcbiAgfSwgW10pXHJcblxyXG4gY29uc3QgZWRpdENvbW1lbnRDbGlja0hhbmRsZXIgPSAoKSA9PiB7XHJcbiAgICAvL1Nob3cgdGhlIGVkaXQgY29tbWVudCB0ZXh0YXJlYVxyXG4gICAgc2V0RWRpdE1vZGUoIWVkaXRNb2RlKTsgXHJcbiAgfVxyXG5cclxuICBjb25zdCBlZGl0Q29tbWVudFN1Ym1pdEhhbmRsZXIgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgLy8gQ2hlY2sgaWYgdGhlIGNvbnRlbnQgaXMgZW1wdHlcclxuICAgIGlmIChlZGl0ZWRDb250ZW50UmVmLmN1cnJlbnQudmFsdWUudHJpbSgpLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBlZGl0Q29tbWVudChjb21tZW50Ll9pZCwgZWRpdGVkQ29udGVudFJlZi5jdXJyZW50LnZhbHVlKTtcclxuICAgIC8vIEV4aXQgZWRpdCBtb2RlXHJcbiAgICBzZXRFZGl0TW9kZShmYWxzZSk7XHJcbiAgfVxyXG5cclxuICBcclxuICBjb25zdCBjb252ZXJ0RGF0ZT0gKG1pbGxpc2VjcykgPT4ge1xyXG4gICAgY29uc3QgZCA9IG5ldyBEYXRlKCttaWxsaXNlY3MpO1xyXG4gICAgLy8gcmV0dXJuIGQudG9Mb2NhbGVTdHJpbmcoKTtcclxuICAgIGNvbnN0IGRhdGVBcnJheSA9IGQudG9Mb2NhbGVTdHJpbmcoKS5zcGxpdChcIiwgXCIpO1xyXG4gICAgLy8gY29uc29sZS5sb2coYXJyYXkpO1xyXG4gICAgcmV0dXJuIGRhdGVBcnJheVxyXG4gIH1cclxuXHJcbiAgY29uc3QgcmVtb3ZlQ29tbWVudENsaWNrSGFuZGxlciA9ICgpID0+IHtcclxuICAgIHJlbW92ZUNvbW1lbnRGcm9tUGxheWxpc3QoY29tbWVudC5faWQpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgY29tbWVudGVyQ2xpY2tIYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgZmV0Y2hQcm9maWxlVXNlcihjb21tZW50ZXJJZCwgZmFsc2UpO1xyXG4gIH1cclxuXHJcblxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgIDw+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tbWVudFwiIGtleT17Y29tbWVudC5faWR9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhdmF0YXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhdmF0YXItY3JvcFwiPlxyXG4gICAgICAgICAgICAgIHtjb21tZW50VXNlci5wcm9maWxlUGhvdG9GaWxlbmFtZSAhPT0gbnVsbCAmJiBjb21tZW50VXNlci5wcm9maWxlUGhvdG9GaWxlbmFtZSAhPT0gJycgJiZcclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvZmlsZS9bdXNlcklkXVwiIGFzPXtgL3Byb2ZpbGUvJHtjb21tZW50ZXJJZH1gfT5cclxuICAgICAgICAgICAgICAgICAgPGEgb25DbGljaz17Y29tbWVudGVyQ2xpY2tIYW5kbGVyfT5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YC9pbWFnZS8ke2NvbW1lbnRVc2VyLnByb2ZpbGVQaG90b0ZpbGVuYW1lfWB9IGFsdD1cImF2YXRhclwiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgeyhjb21tZW50VXNlci5wcm9maWxlUGhvdG9GaWxlbmFtZSA9PT0gbnVsbCB8fCBjb21tZW50VXNlci5wcm9maWxlUGhvdG9GaWxlbmFtZSA9PT0gJycpICYmXHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Byb2ZpbGUvW3VzZXJJZF1cIiBhcz17YC9wcm9maWxlLyR7Y29tbWVudGVySWR9YH0+XHJcbiAgICAgICAgICAgICAgICAgIDxhIG9uQ2xpY2s9e2NvbW1lbnRlckNsaWNrSGFuZGxlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9Jy9kZWZhdWx0LWF2YXRhci5qcGcnIGFsdD1cImF2YXRhclwiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tbWVudGVyXCI+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvZmlsZS9bdXNlcklkXVwiIGFzPXtgL3Byb2ZpbGUvJHtjb21tZW50ZXJJZH1gfT5cclxuICAgICAgICAgICAgICA8YSBvbkNsaWNrPXtjb21tZW50ZXJDbGlja0hhbmRsZXJ9PjxoMz57Y29tbWVudFVzZXIuZmlyc3ROYW1lfSB7Y29tbWVudFVzZXIubGFzdE5hbWV9PC9oMz48L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgeyFlZGl0TW9kZSAmJiBcclxuICAgICAgICAgICAgICA8cD57Y29tbWVudC5jb250ZW50fTwvcD5cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICB7ZWRpdE1vZGUgJiZcclxuICAgICAgICAgICAgPHNlY3Rpb24gaWQ9XCJlZGl0LWNvbW1lbnRcIj5cclxuICAgICAgICAgICAgICA8Zm9ybSBpZD1cImVkaXQtZm9ybVwiIG9uU3VibWl0PXsoZSkgPT4gZWRpdENvbW1lbnRTdWJtaXRIYW5kbGVyKGUpfT5cclxuICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBuYW1lPVwiZWRpdC1jb21tZW50LWlucHV0XCIgaWQ9XCJlZGl0LWNvbW1lbnQtaW5wdXRcIiBkZWZhdWx0VmFsdWU9e2NvbW1lbnQuY29udGVudH0gY29scz1cIjMwXCIgcm93cz1cIjVcIiByZWY9e2VkaXRlZENvbnRlbnRSZWZ9PjwvdGV4dGFyZWE+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVkaXQtYnRuc1wiPlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1wZW5jaWxcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2VkaXRDb21tZW50Q2xpY2tIYW5kbGVyfT5cclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS13aW5kb3ctY2xvc2VcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgIDwvZGl2PiAgICAgIFxyXG5cclxuICAgICAgICB7IWVkaXRNb2RlICYmIFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXRlLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICB7Y3VycmVudFVzZXIuaWQgPT09IGNvbW1lbnRlcklkICYmICFlZGl0TW9kZSAmJlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tbWVudC1idG5zXCI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2VkaXRDb21tZW50Q2xpY2tIYW5kbGVyfT5cclxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtcGVuY2lsLXNxdWFyZS1vXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3JlbW92ZUNvbW1lbnRDbGlja0hhbmRsZXJ9PlxyXG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS10cmFzaFwiPjwvaT5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGF0ZS10aW1lXCI+XHJcbiAgICAgICAgICAgICAge2NvbnZlcnREYXRlKGNvbW1lbnQuY3JlYXRlZEF0KS5tYXAoZGF0ZSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gPGg0IGNsYXNzTmFtZT1cImRhdGVcIiBrZXk9e2RhdGV9PntkYXRlfTwvaDQ+XHJcbiAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgfSAgXHJcblxyXG4gICAgICAgIFxyXG5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgPC8+XHJcblxyXG4gICAgXHJcblxyXG4gICAgICA8c3R5bGUganN4PntgXHJcblxyXG4gICAgICAuY29tbWVudCB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIG1hcmdpbjogMXJlbSAwO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuY29tbWVudGVyIHtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICR7Y29sb3JzLnByaW1hcnl9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5jb21tZW50ZXIgaDMge1xyXG4gICAgICAgIG1hcmdpbjogMCAxcmVtO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuY29udGVudCB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBwYWRkaW5nOiAxLjJyZW0gMCAxLjJyZW0gMS4ycmVtO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5jb21tZW50LWluZm8ge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMXJlbTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmF2YXRhciB7XHJcbiAgICAgICAgbWF4LWhlaWdodDogNTBweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmF2YXRhci1jcm9wIHtcclxuICAgICAgICBtYXgtd2lkdGg6IDUwcHg7XHJcbiAgICAgICAgbWF4LWhlaWdodDogNTBweDtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaW1nIHtcclxuICAgICAgICBtYXgtd2lkdGg6IDUwcHg7XHJcbiAgICAgICAgbWF4LWhlaWdodDogNzVweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgaDQge1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMXJlbTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHAge1xyXG4gICAgICAgIG1hcmdpbjogMCAxLjVyZW07XHJcbiAgICAgICAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG4gICAgICAgIHdpZHRoOiA2NTBweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmRhdGUtY29udGFpbmVyIHtcclxuICAgICAgICBtYXJnaW46IDFyZW0gMCAxcmVtIGF1dG87XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMC41cmVtO1xyXG4gICAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgJHtjb2xvcnMucHJpbWFyeX07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5kYXRlLXRpbWUge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmRhdGUtY29udGFpbmVyIGg0IHtcclxuICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgICBwYWRkaW5nOiAwIDFyZW0gMCAxLjVyZW07XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5jb21tZW50LWJ0bnMge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMS4xNXJlbTtcclxuXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGJ1dHRvbiB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIH1cclxuXHJcbiAgICBpIHtcclxuICAgICAgY29sb3I6ICR7Y29sb3JzLnByaW1hcnl9O1xyXG4gICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgICAgdHJhbnNpdGlvbjogY29sb3IgMC4ycyBlYXNlLWluLW91dDtcclxuICAgIH1cclxuXHJcbiAgICAuY29tbWVudC1idG5zIGkge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB9XHJcblxyXG4gICAgaS5mYS1wZW5jaWwtc3F1YXJlLW8ge1xyXG4gICAgICB0b3A6IDhweDtcclxuICAgICAgbGVmdDogLTJweDtcclxuICAgIH1cclxuXHJcbiAgICBpLmZhLXRyYXNoIHtcclxuICAgICAgdG9wOiA2cHg7XHJcbiAgICAgIGxlZnQ6IDBweDtcclxuICAgIH1cclxuXHJcbiAgICBpOmhvdmVyIHtcclxuICAgICAgY29sb3I6ICNlNTMwNWE7XHJcbiAgICB9XHJcblxyXG4gICAgYnV0dG9uOmZvY3VzIHtcclxuICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICBzZWN0aW9uI2VkaXQtY29tbWVudCB7XHJcbiAgICAgIHdpZHRoOiA4NSU7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xyXG4gICAgfVxyXG5cclxuICAgIGZvcm0jZWRpdC1mb3JtIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgdGV4dGFyZWEge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgZm9udDogaW5oZXJpdDtcclxuICAgICAgcGFkZGluZzogMC41cmVtO1xyXG4gICAgfVxyXG5cclxuICAgICNlZGl0LWNvbW1lbnQgYnV0dG9uIHtcclxuICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICBwYWRkaW5nOiAwIDAuNXJlbTtcclxuICAgIH1cclxuXHJcbiAgICAuZWRpdC1idG5zIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgIH1cclxuXHJcbiAgICBpLmZhLXBlbmNpbCB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAwLjVyZW07XHJcbiAgICB9XHJcblxyXG4gICAgaS5mYS13aW5kb3ctY2xvc2Uge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcclxuICAgIH1cclxuXHJcbiAgICAvKiBNZWRpYSBxdWVyaWVzICovXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogMTE1MHB4ICkge1xyXG4gICAgICBwIHtcclxuICAgICAgICB3aWR0aDogNDAwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogMTA3MHB4ICkge1xyXG4gICAgICBwIHtcclxuICAgICAgICB3aWR0aDogMzUwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogMTAwMHB4ICkge1xyXG4gICAgICBwIHtcclxuICAgICAgICB3aWR0aDogMzAwcHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5hdmF0YXIge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5jb250ZW50IHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLyogLmNvbW1lbnQge1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIH0gKi9cclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogODYwcHgpIHtcclxuICAgICAgLmNvbW1lbnQge1xyXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuZGF0ZS1jb250YWluZXIge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IC0xMXB4O1xyXG4gICAgICAgIHJpZ2h0OiAtN3B4O1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmVkaXQtYnRucyB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMnB4O1xyXG4gICAgICAgIHJpZ2h0OiAxcHg7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0ZXh0YXJlYSB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMS40cmVtO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuZGF0ZS10aW1lIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDgzMHB4KSB7XHJcbiAgICAgIC5jb250ZW50IHtcclxuICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuY29tbWVudCB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgfVxyXG5cclxuICAgICAgcCB7XHJcbiAgICAgICAgd2lkdGg6IDQ4MHB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEuNXJlbTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmF2YXRhciB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMThweDtcclxuICAgICAgICBsZWZ0OiAxNnB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuY29tbWVudGVyIGgzIHtcclxuICAgICAgICBtYXJnaW46IDAuN3JlbSAwcmVtIDByZW0gNC4zcmVtO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuY29tbWVudGVyIHtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHNlY3Rpb24jZWRpdC1jb21tZW50IHtcclxuICAgICAgICB3aWR0aDogOTIlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDgwMHB4ICkge1xyXG4gICAgICBwIHtcclxuICAgICAgICB3aWR0aDogNTl2dztcclxuICAgICAgICAvKiBtYXJnaW4tcmlnaHQ6IDAuNXJlbTsgKi9cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKiBNZWRpYSBxdWVyaWVzICovXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHggKSB7XHJcbiAgICAgIC5hdmF0YXIge1xyXG4gICAgICAgIC8qIGRpc3BsYXk6IG5vbmU7ICovXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5jb21tZW50ZXIge1xyXG4gICAgICAgIGJvcmRlci1yaWdodDogbm9uZTtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgcCB7XHJcbiAgICAgICAgLyogb3ZlcmZsb3c6IHNjcm9sbDsgKi9cclxuICAgICAgICAvKiBoZWlnaHQ6IDEwMHB4OyAqL1xyXG4gICAgICAgIC8qIHdvcmQtd3JhcDogYnJlYWstd29yZDsgKi9cclxuICAgICAgICB3aWR0aDogNTV2dztcclxuICAgICAgfVxyXG5cclxuICAgICAgLmNvbnRlbnQge1xyXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNjYwcHgpIHtcclxuICAgICAgcCB7XHJcbiAgICAgICAgd2lkdGg6IDY4dnc7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNjEwcHgpIHtcclxuICAgICAgc2VjdGlvbiNlZGl0LWNvbW1lbnQge1xyXG4gICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5jb250ZW50IHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDByZW07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGgzIHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDAuNnJlbTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1NjBweCkge1xyXG4gICAgICBwIHtcclxuICAgICAgICAvKiB3aWR0aDogNDV2dzsgKi9cclxuICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xyXG4gICAgICBwIHtcclxuICAgICAgICB3aWR0aDogNjV2dztcclxuICAgICAgICAvKiBmb250LXNpemU6IDAuOXJlbTsgKi9cclxuICAgICAgfVxyXG5cclxuICAgICAgLmNvbW1lbnQge1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAxcmVtO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuYXZhdGFyIHtcclxuICAgICAgICB0b3A6IDMzcHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ0MHB4KSB7XHJcbiAgICAgIHAge1xyXG4gICAgICAgIHdpZHRoOiA2M3Z3O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDQyMHB4KSB7XHJcbiAgICAgIHAge1xyXG4gICAgICAgIHdpZHRoOiA2OXZ3O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDM2MHB4KSB7XHJcbiAgICAgIHAge1xyXG4gICAgICAgIHdpZHRoOiA2NXZ3O1xyXG4gICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICBcclxuICAgIGB9PC9zdHlsZT5cclxuXHJcbiAgPC8+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb21tZW50OyIsImltcG9ydCB7IHVzZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQ29tbWVudCBmcm9tICcuL0NvbW1lbnQnO1xyXG5pbXBvcnQgeyBHbG9iYWxDb250ZXh0IH0gZnJvbSAnLi4vY29udGV4dC9HbG9iYWxDb250ZXh0JztcclxuaW1wb3J0IGNvbG9ycyBmcm9tICcuLi9jc3MtdmFyaWFibGVzL2NvbG9ycyc7XHJcblxyXG5jb25zdCBDb21tZW50U2VjdGlvbiA9ICh7IHByb2ZpbGVVc2VyIH0pID0+IHtcclxuXHJcbiAgY29uc3QgeyBhZGRDb21tZW50LCBhdXRoU3RhdGV9ID0gdXNlQ29udGV4dChHbG9iYWxDb250ZXh0KTtcclxuXHJcbiAgY29uc3QgW2NvbnRlbnQsIHNldENvbnRlbnRdID0gdXNlU3RhdGUoJycpO1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgc2V0Q29udGVudChlLnRhcmdldC52YWx1ZSk7XHJcbiAgfVxyXG4gIFxyXG4gIGNvbnN0IGNvbW1lbnRTdWJtaXRIYW5kbGVyID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGFkZENvbW1lbnQoY29udGVudCk7XHJcbiAgICBzZXRDb250ZW50KCcnKTtcclxuICB9XHJcblxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gaWQ9XCJjb21tZW50LXNlY3Rpb25cIj5cclxuICAgICAgPGgyPkNvbW1lbnRzPC9oMj4gXHJcblxyXG4gICAgICA8c2VjdGlvbiBpZD1cImNvbW1lbnRzXCI+XHJcbiAgICAgICAge3Byb2ZpbGVVc2VyLnBsYXlsaXN0Q29tbWVudHMubGVuZ3RoID09PSAwICYmIFxyXG4gICAgICAgICAgPGgzPkJlIHRoZSBmaXJzdCB0byBhZGQgYSBjb21tZW50ITwvaDM+XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB7cHJvZmlsZVVzZXIucGxheWxpc3RDb21tZW50cy5tYXAoY29tbWVudCA9PiAoXHJcbiAgICAgICAgICA8Q29tbWVudCBjb21tZW50PXtjb21tZW50fSBrZXk9e2NvbW1lbnQuX2lkfS8+XHJcbiAgICAgICAgKVxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvc2VjdGlvbj5cclxuXHJcbiAgICAgIHthdXRoU3RhdGUuYXV0aGVudGljYXRlZCA9PT0gdHJ1ZSAmJlxyXG4gICAgICAgIDxzZWN0aW9uIGlkPVwiYWRkLWNvbW1lbnRcIj5cclxuICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXsoZSkgPT4gY29tbWVudFN1Ym1pdEhhbmRsZXIoZSl9PlxyXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImNvbW1lbnQtaW5wdXRcIj5BZGQgYSBjb21tZW50PC9sYWJlbD5cclxuICAgICAgICAgICAgPHRleHRhcmVhIG5hbWU9XCJjb21tZW50LWlucHV0XCIgaWQ9XCJjb21tZW50LWlucHV0XCIgdmFsdWU9e2NvbnRlbnR9IGNvbHM9XCIzMFwiIHJvd3M9XCIzXCIgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0+PC90ZXh0YXJlYT5cclxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+UG9zdDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICBcclxuICAgICAgc2VjdGlvbiNjb21tZW50LXNlY3Rpb24ge1xyXG4gICAgICAgIG1hcmdpbjogM3JlbSAwO1xyXG4gICAgICAgIHBhZGRpbmc6IDNyZW07XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgYmFja2dyb3VuZDogJHtjb2xvcnMuZ3JhZGllbnR9O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBzZWN0aW9uI2NvbW1lbnRzIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBmb3JtIHtcclxuICAgICAgICBtYXJnaW46IDFyZW0gMDtcclxuICAgICAgfVxyXG5cclxuICAgICAgbGFiZWwge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0ZXh0YXJlYSB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMC41cmVtO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGZvbnQ6IGluaGVyaXQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICAgICAgcGFkZGluZzogMC41cmVtO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBidXR0b24ge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICBwYWRkaW5nOiAwLjc1cmVtIDFyZW07XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgIG1hcmdpbjogMC41cmVtIDA7XHJcbiAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZS1pbi1vdXQ7XHJcblxyXG4gICAgICB9XHJcblxyXG4gICAgICBidXR0b246aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8qIE1lZGlhIHF1ZXJpZXMgKi9cclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDExNTBweCApIHtcclxuXHJcbiAgICAgICAgc2VjdGlvbiNjb21tZW50LXNlY3Rpb24ge1xyXG4gICAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2NjBweCApIHtcclxuICAgICAgICBzZWN0aW9uI2NvbW1lbnQtc2VjdGlvbiB7XHJcbiAgICAgICAgICB3aWR0aDogOTUlO1xyXG4gICAgICAgICAgLyogbWFyZ2luOiBhdXRvOyAqL1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDYyMHB4ICkge1xyXG4gICAgICAgIHNlY3Rpb24jY29tbWVudC1zZWN0aW9uIHtcclxuICAgICAgICAgIHdpZHRoOiA5NSU7XHJcbiAgICAgICAgICBwYWRkaW5nOiAycmVtO1xyXG4gICAgICAgICAgLyogbWFyZ2luOiBhdXRvOyAqL1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDM5MHB4ICkge1xyXG4gICAgICAgIHNlY3Rpb24jY29tbWVudC1zZWN0aW9uIHtcclxuICAgICAgICAgIHdpZHRoOiA5NSU7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxLjVyZW07XHJcbiAgICAgICAgICAvKiBtYXJnaW46IGF1dG87ICovXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogMzYwcHggKSB7XHJcbiAgICAgICAgc2VjdGlvbiNjb21tZW50LXNlY3Rpb24ge1xyXG4gICAgICAgICAgLyogd2lkdGg6IDk1JTsgKi9cclxuICAgICAgICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICAgICAgICAvKiBtYXJnaW46IGF1dG87ICovXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICBcclxuICAgIGB9PC9zdHlsZT5cclxuXHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb21tZW50U2VjdGlvbjsiLCJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlQ29udGV4dCwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBHbG9iYWxDb250ZXh0IH0gZnJvbSAnLi4vY29udGV4dC9HbG9iYWxDb250ZXh0JztcclxuaW1wb3J0IGNvbG9ycyBmcm9tICcuLi9jc3MtdmFyaWFibGVzL2NvbG9ycyc7XHJcblxyXG5jb25zdCBGYXZvdXJpdGVJdGVtID0gKHtpZH0pID0+IHtcclxuXHJcbiAgY29uc3QgeyBnZXRGYXZvdXJpdGVVc2VyLCBmZXRjaFByb2ZpbGVVc2VyLCByZW1vdmVGYXZvdXJpdGUsIGN1cnJlbnRVc2VyLCBwcm9maWxlVXNlciwgYXV0aFN0YXRlIH0gPSB1c2VDb250ZXh0KEdsb2JhbENvbnRleHQpO1xyXG4gIFxyXG4gIGNvbnN0IFtmYXZVc2VyLCBzZXRGYXZVc2VyXSA9IHVzZVN0YXRlKHt9KTtcclxuXHJcbiAgY29uc3QgZmF2VXNlckNsaWNrSGFuZGxlciA9ICgpID0+IHtcclxuICAgIGZldGNoUHJvZmlsZVVzZXIoaWQsIGZhbHNlKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHJlbW92ZUZhdkhhbmRsZXIgPSAoKSA9PiB7XHJcbiAgICByZW1vdmVGYXZvdXJpdGUoaWQpO1xyXG4gIH1cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgY29uc3QgdXNlckRhdGEgPSBhd2FpdCBnZXRGYXZvdXJpdGVVc2VyKGlkKTtcclxuICAgICAgc2V0RmF2VXNlcih7XHJcbiAgICAgICAgZmlyc3ROYW1lOiB1c2VyRGF0YS5maXJzdE5hbWUsXHJcbiAgICAgICAgbGFzdE5hbWU6IHVzZXJEYXRhLmxhc3ROYW1lLFxyXG4gICAgICAgIHByb2ZpbGVQaG90b0ZpbGVuYW1lOiB1c2VyRGF0YS5wcm9maWxlUGhvdG9GaWxlbmFtZSxcclxuICAgICAgICBpZFxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gICAgZmV0Y2hEYXRhKCk7XHJcbiAgfSwgW2lkXSlcclxuICBcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgaWQ9XCJmYXZvdXJpdGUtaXRlbVwiPlxyXG4gICAgICB7LyogPGg0PkF2YXRhcjwvaDQ+ICovfVxyXG4gICAgICA8ZGl2IGlkPVwiYXZhdGFyXCI+XHJcbiAgICAgICAge2ZhdlVzZXIucHJvZmlsZVBob3RvRmlsZW5hbWUgPT09IG51bGwgJiZcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNyb3BcIj5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvZmlsZS9bdXNlcklkXVwiIGFzPXtgL3Byb2ZpbGUvJHtpZH1gfT5cclxuICAgICAgICAgICAgPGEgb25DbGljaz17ZmF2VXNlckNsaWNrSGFuZGxlcn0+XHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9XCIvZGVmYXVsdC1hdmF0YXIuanBnXCIgYWx0PVwiYXZhdGFyXCIgLz5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgICAgIH0gXHJcblxyXG4gICAgICAgIHtmYXZVc2VyLnByb2ZpbGVQaG90b0ZpbGVuYW1lICE9PSBudWxsICYmIGZhdlVzZXIucHJvZmlsZVBob3RvRmlsZW5hbWUgIT09ICcnICYmIGZhdlVzZXIucHJvZmlsZVBob3RvRmlsZW5hbWUgIT09IHVuZGVmaW5lZCAmJlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3JvcFwiPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9maWxlL1t1c2VySWRdXCIgYXM9e2AvcHJvZmlsZS8ke2lkfWB9PlxyXG4gICAgICAgICAgICA8YSBvbkNsaWNrPXtmYXZVc2VyQ2xpY2tIYW5kbGVyfT5cclxuICAgICAgICAgICAgICA8aW1nIHNyYz17YC9pbWFnZS8ke2ZhdlVzZXIucHJvZmlsZVBob3RvRmlsZW5hbWV9YH0gYWx0PVwiYXZhdGFyXCIgLz5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIH1cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8TGluayBocmVmPVwiL3Byb2ZpbGUvW3VzZXJJZF1cIiBhcz17YC9wcm9maWxlLyR7aWR9YH0+XHJcbiAgICAgICAgPGEgb25DbGljaz17ZmF2VXNlckNsaWNrSGFuZGxlcn0+PGgzPntmYXZVc2VyLmZpcnN0TmFtZX0ge2ZhdlVzZXIubGFzdE5hbWV9PC9oMz48L2E+XHJcbiAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgIFxyXG4gICAgICB7IGF1dGhTdGF0ZS5hdXRoZW50aWNhdGVkID09PSB0cnVlICYmIGN1cnJlbnRVc2VyLmlkID09PSBwcm9maWxlVXNlci5pZCAmJlxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17cmVtb3ZlRmF2SGFuZGxlcn0+XHJcbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS10aW1lcy1jaXJjbGVcIj48L2k+XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIFxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgIFxyXG4gICAgICAgICNmYXZvdXJpdGUtaXRlbSB7XHJcbiAgICAgICAgICBtYXJnaW46IDAgMXJlbTtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgIHBhZGRpbmc6IDJyZW07XHJcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAke2NvbG9ycy5wcmltYXJ5fTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jcm9wIHtcclxuICAgICAgICAgIG1heC1oZWlnaHQ6IDEwMHB4O1xyXG4gICAgICAgICAgbWF4LXdpZHRoOiAxMDBweDtcclxuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG8gMC44cmVtIGF1dG87XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhIHtcclxuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICB3aWR0aDogNDBweDtcclxuICAgICAgICAgIGhlaWdodDogOHB4O1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgdG9wOiAwcHg7XHJcbiAgICAgICAgICByaWdodDogOHB4O1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgICAgICAgIGNvbG9yOiAke2NvbG9ycy5wcmltYXJ5fTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGkge1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgMC4ycyBlYXNlLWluLW91dDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgaTpob3ZlciB7XHJcbiAgICAgICAgICBjb2xvcjogI2U1MzA1YTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGgzIHtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2OTBweCApIHtcclxuICAgICAgICAgICNmYXZvdXJpdGUtaXRlbSB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCAxcmVtO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0NTBweCApIHtcclxuICAgICAgICAgIC5jcm9wIHtcclxuICAgICAgICAgICAgd2lkdGg6IDgwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogODBweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICB3aWR0aDogODBweDtcclxuICAgICAgICAgICAgLyogcGFkZGluZy10b3A6IDFyZW07ICovXHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgI2F2YXRhciB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIFxyXG4gICAgICBgfTwvc3R5bGU+XHJcblxyXG5cclxuXHJcblxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGYXZvdXJpdGVJdGVtOyIsImltcG9ydCBGYXZvdXJpdGVJdGVtIGZyb20gJy4vRmF2b3VyaXRlSXRlbSc7XHJcbmltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgR2xvYmFsQ29udGV4dCB9IGZyb20gJy4uL2NvbnRleHQvR2xvYmFsQ29udGV4dCc7XHJcbmltcG9ydCBjb2xvcnMgZnJvbSAnLi4vY3NzLXZhcmlhYmxlcy9jb2xvcnMnXHJcblxyXG5jb25zdCBGYXZvdXJpdGVzID0gKCkgPT4ge1xyXG5cclxuICBjb25zdCB7IHByb2ZpbGVVc2VyIH0gPSB1c2VDb250ZXh0KEdsb2JhbENvbnRleHQpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gaWQ9XCJmYXZvdXJpdGVzXCI+XHJcbiAgICAgIDxoMj48aSBjbGFzc05hbWU9XCJmYSBmYS1zdGFyXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPkZhdm91cml0ZXMgPC9oMj5cclxuXHJcbiAgICAgIDxkaXYgaWQ9XCJmYXZvdXJpdGUtaXRlbXNcIj5cclxuICAgICAgICB7cHJvZmlsZVVzZXIuZmF2b3VyaXRlcy5tYXAoZmF2b3VyaXRlID0+IChcclxuICAgICAgICAgIDxGYXZvdXJpdGVJdGVtIGlkPXtmYXZvdXJpdGV9IGtleT17ZmF2b3VyaXRlfS8+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAge3Byb2ZpbGVVc2VyLmZhdm91cml0ZXMubGVuZ3RoID09PSAwICYmIFxyXG4gICAgICAgIDxoMz5cclxuICAgICAgICAgIE5vIGZhdm91cml0ZSB1c2VycyBoYXZlIGJlZW4gYWRkZWQuXHJcbiAgICAgICAgPC9oMz5cclxuICAgICAgfVxyXG5cclxuXHJcblxyXG4gIDxzdHlsZSBqc3g+e2BcclxuICBcclxuICAgIHNlY3Rpb24jZmF2b3VyaXRlcyB7XHJcbiAgICAgIHBhZGRpbmc6IDNyZW07XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICR7Y29sb3JzLnByaW1hcnl9O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbiAgICB9XHJcblxyXG4gICAgaS5mYS1zdGFyIHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAwLjc1cmVtO1xyXG4gICAgICBjb2xvcjogJHtjb2xvcnMuc2Vjb25kYXJ5fTtcclxuICAgICAgZm9udC1zaXplOiAxLjRyZW07XHJcbiAgICAgIC8qIGhlaWdodDogNTBweDsgKi9cclxuICAgIH1cclxuXHJcbiAgICAjZmF2b3VyaXRlLWl0ZW1zIHtcclxuICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgZ3JpZC1hdXRvLWZsb3c6IHJvdztcclxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNSwgMWZyKTtcclxuICAgICAgcGFkZGluZzogMXJlbTtcclxuICAgICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICAgICAgZ3JpZC1yb3ctZ2FwOiAycmVtO1xyXG4gICAgfVxyXG5cclxuICAgIGgzIHtcclxuICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgLyogdGV4dC1hbGlnbjogY2VudGVyOyAqL1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgLyogTWVkaWEgcXVlcmllcyAqL1xyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDExNTBweCApIHtcclxuICAgICAgI2Zhdm91cml0ZS1pdGVtcyB7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgc2VjdGlvbiNmYXZvdXJpdGVzIHtcclxuICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgIG1hcmdpbjogM3JlbSBhdXRvO1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMnJlbTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5MzBweCApIHtcclxuICAgICAgI2Zhdm91cml0ZS1pdGVtcyB7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCApIHtcclxuICAgICAgc2VjdGlvbiNmYXZvdXJpdGVzIHtcclxuICAgICAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4ICkge1xyXG4gICAgICAjZmF2b3VyaXRlLWl0ZW1zIHtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxLCAxZnIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDM3MHB4ICkge1xyXG4gICAgICBzZWN0aW9uI2Zhdm91cml0ZXMge1xyXG4gICAgICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICBcclxuICBgfTwvc3R5bGU+XHJcblxyXG4gICAgPC9zZWN0aW9uPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmF2b3VyaXRlcztcclxuIiwiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUNvbnRleHR9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBHbG9iYWxDb250ZXh0IH0gZnJvbSAnLi4vY29udGV4dC9HbG9iYWxDb250ZXh0JztcclxuaW1wb3J0IGNvbG9ycyBmcm9tICcuLi9jc3MtdmFyaWFibGVzL2NvbG9ycyc7XHJcblxyXG5jb25zdCBGaWxlVXBsb2FkID0gKHtzZXRFZGl0TW9kZX0pID0+IHtcclxuXHJcbiAgY29uc3QgW2ZpbGUsIHNldEZpbGVdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtmaWxlbmFtZSwgc2V0RmlsZW5hbWVdID0gdXNlU3RhdGUoJ1VwbG9hZCBwaG90byAtIG1heCBzaXplIDcwIEtCJyk7XHJcblxyXG4gIGNvbnN0IHsgdXBsb2FkRmlsZSB9ID0gdXNlQ29udGV4dChHbG9iYWxDb250ZXh0KTtcclxuXHJcbiAgY29uc3QgdXBsb2FkRmlsZUhhbmRsZXIgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIC8vIENoZWNrIGZvciBtYXggc2l6ZVxyXG4gICAgaWYgKGZpbGUuc2l6ZSA+IDcwMDAwKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgZm9ybURhdGEuYXBwZW5kKCdmaWxlJywgZmlsZSk7XHJcblxyXG4gICAgdXBsb2FkRmlsZShmb3JtRGF0YSk7XHJcbiAgICBzZXRFZGl0TW9kZShmYWxzZSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBvbkNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICBzZXRGaWxlKGUudGFyZ2V0LmZpbGVzWzBdKTtcclxuICAgIHNldEZpbGVuYW1lKGUudGFyZ2V0LmZpbGVzWzBdLm5hbWUpO1xyXG4gIH1cclxuXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGlkPVwiZmlsZS11cGxvYWRcIj5cclxuICAgICAgPGgyPlVwbG9hZCBhIHByb2ZpbGUgcGhvdG86PC9oMj5cclxuICAgICAgPGZvcm0gb25TdWJtaXQ9eyhlKSA9PiB1cGxvYWRGaWxlSGFuZGxlcihlKX0+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgbmFtZT1cImZpbGVcIiBpZD1cImZpbGVcIiBjbGFzc05hbWU9XCJjdXN0b20tZmlsZS1pbnB1dFwiIG9uQ2hhbmdlPXtvbkNoYW5nZX0gLz5cclxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImZpbGVcIiBjbGFzc05hbWU9XCJjdXN0b20tZmlsZS1sYWJlbFwiPlxyXG4gICAgICAgICAge2ZpbGVuYW1lfVxyXG4gICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJVcGxvYWRcIj5VcGxvYWQ8L2J1dHRvbj5cclxuICAgICAgPC9mb3JtPlxyXG5cclxuXHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgXHJcbiAgICAgICAgI2ZpbGUtdXBsb2FkIHtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDNyZW07XHJcbiAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgJHtjb2xvcnMucHJpbWFyeX07XHJcbiAgICAgICAgICBwYWRkaW5nLXRvcDogMnJlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICNmaWxlLXVwbG9hZCBoMiB7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgXHJcbiAgICAgICAgZm9ybSB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlucHV0W3R5cGU9XCJmaWxlXCJdIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlucHV0I2ZpbGUtdXBsb2FkLWJ1dHRvbiB7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGFiZWwge1xyXG4gICAgICAgICAgbWFyZ2luOiAwLjVyZW0gMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICB3aWR0aDogODNweDtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGlucHV0IHtcclxuICAgICAgICAgIG1hcmdpbjogMXJlbSAwOyBcclxuICAgICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBgfTwvc3R5bGU+XHJcblxyXG4gICAgPC9kaXY+IFxyXG5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZpbGVVcGxvYWQ7XHJcbiIsImltcG9ydCBjb2xvcnMgZnJvbSAnLi4vY3NzLXZhcmlhYmxlcy9jb2xvcnMnO1xyXG5cclxuY29uc3QgRm9vdGVyID0gKCkgPT4ge1xyXG5cclxuICBjb25zdCB5ZWFyID0gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGZvb3RlciBpZD1cIm1haW4tZm9vdGVyXCI+XHJcbiAgICAgIDxoND5DT0RFVFVORVM8L2g0PlxyXG4gICAgICA8aDQ+JmNvcHk7IHt5ZWFyfTwvaDQ+XHJcblxyXG4gICAgPHN0eWxlIGpzeD57YFxyXG5cclxuICAgICAgZm9vdGVyIHtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIHBhZGRpbmc6IDEuMnJlbTtcclxuICAgICAgICAvKiBtYXJnaW4tdG9wOiAycmVtOyAqL1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICR7Y29sb3JzLnJldmVyc2VHcmFkaWVudH07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGg0IHtcclxuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICB9XHJcbiAgICBcclxuICAgIFxyXG4gICAgYH08L3N0eWxlPlxyXG5cclxuXHJcblxyXG4gICAgPC9mb290ZXI+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7XHJcbiIsImltcG9ydCBWaWRlb0l0ZW0gZnJvbSAnLi9WaWRlb0l0ZW0nO1xyXG5pbXBvcnQgY29sb3JzIGZyb20gJy4uL2Nzcy12YXJpYWJsZXMvY29sb3JzJ1xyXG5cclxuXHJcbmNvbnN0IFBsYXlMaXN0ID0gKHtwcm9maWxlVXNlciB9KSA9PiB7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBpZD1cInBsYXlsaXN0XCI+XHJcblxyXG4gICAgICA8ZGl2IGlkPVwicGxheWxpc3QtaGVhZGVyXCI+XHJcbiAgICAgICAgPGgyPlBsYXlsaXN0PC9oMj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICB7cHJvZmlsZVVzZXIub3duZWRWaWRlb3MubGVuZ3RoID09PSAwICYmIFxyXG4gICAgICAgIDxoMz5BZGQgc29tZSBtdXNpYyB0byB5b3VyIHBsYXlsaXN0ITwvaDM+XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIFxyXG4gICAgICB7cHJvZmlsZVVzZXIub3duZWRWaWRlb3MubWFwKHZpZGVvID0+IChcclxuICAgICAgICAvLyA8aDM+e3ZpZGVvLnRpdGxlfTwvaDM+XHJcbiAgICAgICAgPFZpZGVvSXRlbSB2aWRlbz17dmlkZW99IG1vZGU9XCJwbGF5bGlzdFwiIGtleT17dmlkZW8udmlkZW9VUkx9Lz5cclxuICAgICAgKVxyXG4gICAgICApfVxyXG5cclxuXHJcbiAgICA8c3R5bGUganN4PntgXHJcblxyXG5cclxuICAgIFxyXG4gICAgICBzZWN0aW9uI3BsYXlsaXN0IHtcclxuICAgICAgICBtYXJnaW46IDNyZW0gYXV0bztcclxuICAgICAgICAvKiBwYWRkaW5nOiAzcmVtOyAqL1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICR7Y29sb3JzLnByaW1hcnl9O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIHdpZHRoOiA4NCU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICNwbGF5bGlzdC1oZWFkZXIge1xyXG4gICAgICAgIC8qIGRpc3BsYXk6IGZsZXg7ICovXHJcbiAgICAgICAgYmFja2dyb3VuZDogJHtjb2xvcnMuZ3JhZGllbnR9O1xyXG4gICAgICAgIC8qIG1hcmdpbjogMnJlbSAwOyAqL1xyXG4gICAgICAgIC8qIGhlaWdodDogMTAwJTsgKi9cclxuICAgICAgICBwYWRkaW5nOiAycmVtO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAwIDA7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBoMyB7XHJcbiAgICAgICAgcGFkZGluZzogMnJlbTtcclxuICAgICAgfVxyXG4gICAgXHJcbiAgICBgfTwvc3R5bGU+XHJcbiAgICAgIFxyXG4gICAgPC9zZWN0aW9uPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGxheUxpc3Q7IiwiaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlUmVmLCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBHbG9iYWxDb250ZXh0IH0gZnJvbSAnLi4vY29udGV4dC9HbG9iYWxDb250ZXh0JztcclxuaW1wb3J0IEZpbGVVcGxvYWQgZnJvbSAnLi9GaWxlVXBsb2FkJztcclxuaW1wb3J0IGNvbG9ycyBmcm9tICcuLi9jc3MtdmFyaWFibGVzL2NvbG9ycyc7XHJcbmltcG9ydCB7IG1vdGlvbiwgQW5pbWF0ZVByZXNlbmNlIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XHJcblxyXG5cclxuY29uc3QgZWRpdFZhcmlhbnRzID0ge1xyXG4gIGhpZGRlbjogeyBvcGFjaXR5OiAwLCB5OiAtNTAwLCB6SW5kZXg6IC0xMH0sXHJcbiAgdmlzaWJsZTogeyBcclxuICAgIG9wYWNpdHk6IDEsXHJcbiAgICB5OiAwLFxyXG4gICAgekluZGV4OiAtMTAsXHJcbiAgICB0cmFuc2l0aW9uOiB7XHJcbiAgICAgIGR1cmF0aW9uOiAwLjVcclxuICAgIH1cclxuICB9LFxyXG4gIGV4aXQ6IHsgb3BhY2l0eTogMCwgeTogLTUwMCwgekluZGV4OiAtMTAgfVxyXG59XHJcblxyXG5cclxuY29uc3QgUHJvZmlsZUVkaXQgPSAoe3NldEVkaXRNb2RlfSkgPT4ge1xyXG5cclxuICBjb25zdCB7IHVwZGF0ZVVzZXIsIHByb2ZpbGVVc2VyLCB1cGxvYWRQaG90byB9ID0gdXNlQ29udGV4dChHbG9iYWxDb250ZXh0KTtcclxuXHJcbiAgLy8gLy8gRmV0Y2ggdGhlIHVwZGF0ZWQgcHJvZmlsZSBpbmZvIHRvIHByZWZpbGwgZm9ybVxyXG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgLy8gICBmZXRjaFByb2ZpbGVVc2VyKHVzZXJJZCwgZmFsc2UpO1xyXG4gIC8vIH1cclxuXHJcbiAgLy8gUHJlZmlsbCB0aGUgZm9ybSB3aXRoIHRoZSBjdXJyZW50IGluZm9cclxuICBjb25zdCBbIHByb2ZpbGVJbmZvLCBzZXRQcm9maWxlSW5mbyBdID0gdXNlU3RhdGUoe1xyXG4gICAgZmlyc3ROYW1lOiBwcm9maWxlVXNlci5maXJzdE5hbWUsXHJcbiAgICBsYXN0TmFtZTogcHJvZmlsZVVzZXIubGFzdE5hbWUsXHJcbiAgICBqb2JUaXRsZTogcHJvZmlsZVVzZXIuam9iVGl0bGUsXHJcbiAgICBsb2NhdGlvbjogcHJvZmlsZVVzZXIubG9jYXRpb24sXHJcbiAgICBsYW5ndWFnZXM6IHByb2ZpbGVVc2VyLmxhbmd1YWdlcyxcclxuICAgIGFib3V0OiBwcm9maWxlVXNlci5hYm91dFxyXG4gIH0pXHJcbiAgXHJcbiAgXHJcbiAgLy8gQ3JlYXRlIHJlZnNcclxuICBjb25zdCBmaXJzdE5hbWVSZWYgPSB1c2VSZWYoKTtcclxuICBjb25zdCBsYXN0TmFtZVJlZiA9IHVzZVJlZigpO1xyXG4gIGNvbnN0IGpvYlRpdGxlUmVmID0gdXNlUmVmKCk7XHJcbiAgY29uc3QgbG9jYXRpb25SZWYgPSB1c2VSZWYoKTtcclxuICBjb25zdCBsYW5ndWFnZTFSZWYgPSB1c2VSZWYoKTtcclxuICBjb25zdCBsYW5ndWFnZTJSZWYgPSB1c2VSZWYoKTtcclxuICBjb25zdCBsYW5ndWFnZTNSZWYgPSB1c2VSZWYoKTtcclxuICBjb25zdCBsYW5ndWFnZTRSZWYgPSB1c2VSZWYoKTtcclxuICBjb25zdCBhYm91dFJlZiA9IHVzZVJlZigpO1xyXG5cclxuICBcclxuICBjb25zdCB1cGRhdGVQcm9maWxlSGFuZGxlciA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgLy8gR2V0IGNyZWRlbnRpYWxzIGZyb20gcmVmc1xyXG4gICAgY29uc3QgZmlyc3ROYW1lID0gZmlyc3ROYW1lUmVmLmN1cnJlbnQudmFsdWU7XHJcbiAgICBjb25zdCBsYXN0TmFtZSA9IGxhc3ROYW1lUmVmLmN1cnJlbnQudmFsdWU7XHJcbiAgICBjb25zdCBqb2JUaXRsZSA9IGpvYlRpdGxlUmVmLmN1cnJlbnQudmFsdWU7XHJcbiAgICBjb25zdCBsb2NhdGlvbiA9IGxvY2F0aW9uUmVmLmN1cnJlbnQudmFsdWU7XHJcbiAgICBjb25zdCBsYW5ndWFnZTEgPSBsYW5ndWFnZTFSZWYuY3VycmVudC52YWx1ZTtcclxuICAgIGNvbnN0IGxhbmd1YWdlMiA9IGxhbmd1YWdlMlJlZi5jdXJyZW50LnZhbHVlO1xyXG4gICAgY29uc3QgbGFuZ3VhZ2UzID0gbGFuZ3VhZ2UzUmVmLmN1cnJlbnQudmFsdWU7XHJcbiAgICBjb25zdCBsYW5ndWFnZTQgPSBsYW5ndWFnZTRSZWYuY3VycmVudC52YWx1ZTtcclxuICAgIGNvbnN0IGxhbmd1YWdlcyA9IFtsYW5ndWFnZTEsIGxhbmd1YWdlMiwgbGFuZ3VhZ2UzLCBsYW5ndWFnZTRdXHJcbiAgICBjb25zdCBhYm91dCA9IGFib3V0UmVmLmN1cnJlbnQudmFsdWU7XHJcblxyXG4gICAgLy8gQ2hlY2sgaWYgYW55IG5hbWVzIGZpZWxkcyBhcmUgZW1wdHlcclxuICAgIGlmIChmaXJzdE5hbWUudHJpbSgpLmxlbmd0aCA9PT0gMCB8fCBsYXN0TmFtZS50cmltKCkubGVuZ3RoID09PSAwICkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ2FsbCByZWdpc3RlciBhY3Rpb24gdG8gc2VuZCBhIHBvc3QgcmVxdWVzdCB0byBBUEkgYW5kIGNoYW5nZSB0aGUgbG9jYWwgYW5kIGdsb2JhbCBzdGF0ZVxyXG4gICAgYXdhaXQgdXBkYXRlVXNlcihmaXJzdE5hbWUsIGxhc3ROYW1lLCBqb2JUaXRsZSwgbG9jYXRpb24sIGxhbmd1YWdlcywgYWJvdXQpO1xyXG5cclxuICAgIC8vQ2xvc2UgdGhlIGVkaXQgcHJvZmlsZSBzZWN0aW9uIC0gc2V0IGVkaXQgdG8gZmFsc2Ugb24gcHJvZmlsZSBwYWdlXHJcbiAgICBzZXRFZGl0TW9kZShmYWxzZSk7XHJcbiAgICBcclxuICB9XHJcblxyXG4gIGNvbnN0IGdldEV4aXN0aW5nTGFuZ3VhZ2VzID0gKCkgPT4ge1xyXG4gICAgaWYgKHByb2ZpbGVJbmZvLmxhbmd1YWdlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHJldHVybiBwcm9maWxlSW5mby5sYW5ndWFnZXM7XHJcbiAgICB9XHJcblxyXG4gICAgZWxzZSByZXR1cm4gWycnLCAnJywgJycsICcnXVxyXG4gIH0gXHJcblxyXG5cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxBbmltYXRlUHJlc2VuY2U+XHJcbiAgICA8bW90aW9uLmRpdiB2YXJpYW50cz17ZWRpdFZhcmlhbnRzfSBpbml0aWFsPSdoaWRkZW4nIGFuaW1hdGU9J3Zpc2libGUnIGV4aXQ9J2V4aXQnPlxyXG4gICAgICA8c2VjdGlvbiBpZD1cInByb2ZpbGUtZWRpdFwiPlxyXG4gICAgICA8ZGl2IGlkPVwiZWRpdC1jb250YWluZXJcIj5cclxuXHJcbiAgICAgICAgPGRpdiBpZD1cImNvbDFcIj5cclxuICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXsoZSkgPT4gdXBkYXRlUHJvZmlsZUhhbmRsZXIoZSl9IGlkPVwidXBkYXRlLWZvcm1cIj5cclxuICAgICAgICAgIDxoMj5VcGRhdGUgUHJvZmlsZSBJbmZvOjwvaDI+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJmaXJzdE5hbWVcIj5GaXJzdCBOYW1lOiA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiZmlyc3ROYW1lXCIgZGVmYXVsdFZhbHVlPXtwcm9maWxlSW5mby5maXJzdE5hbWV9ICByZWY9e2ZpcnN0TmFtZVJlZn0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJsYXN0TmFtZVwiPkxhc3QgTmFtZTo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwibGFzdE5hbWVcIiBkZWZhdWx0VmFsdWU9e3Byb2ZpbGVJbmZvLmxhc3ROYW1lfSByZWY9e2xhc3ROYW1lUmVmfSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIkpvYlRpdGxlXCI+Sm9iIFRpdGxlOjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJqb2JUaXRsZVwiIGRlZmF1bHRWYWx1ZT17cHJvZmlsZUluZm8uam9iVGl0bGV9IHJlZj17am9iVGl0bGVSZWZ9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibG9jYXRpb25cIj5Mb2NhdGlvbjo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwibG9jYXRpb25cIiBkZWZhdWx0VmFsdWU9e3Byb2ZpbGVJbmZvLmxvY2F0aW9ufSByZWY9e2xvY2F0aW9uUmVmfSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBpZD1cImxhbmd1YWdlc1wiPlxyXG4gICAgICAgICAgICAgIDxoND5NYWluIFByb2dyYW1taW5nIExhbmd1YWdlcyBVc2VkOjwvaDQ+XHJcbiAgICAgICAgICAgICAgPGRpdiBpZD1cImxhbmd1YWdlLWlucHV0LWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJsYW5ndWFnZTFcIiBjbGFzc05hbWU9XCJsYW5ndWFnZS1sYWJlbFwiPjEuPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwibGFuZ3VhZ2UtaW5wdXRcIiBpZD1cImxhbmd1YWdlMVwiIGRlZmF1bHRWYWx1ZT17Z2V0RXhpc3RpbmdMYW5ndWFnZXMoKVswXX0gcmVmPXtsYW5ndWFnZTFSZWZ9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJsYW5ndWFnZTJcIiBjbGFzc05hbWU9XCJsYW5ndWFnZS1sYWJlbFwiPjIuPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwibGFuZ3VhZ2UtaW5wdXRcIiBpZD1cImxhbmd1YWdlMlwiIGRlZmF1bHRWYWx1ZT17Z2V0RXhpc3RpbmdMYW5ndWFnZXMoKVsxXX0gcmVmPXtsYW5ndWFnZTJSZWZ9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJsYW5ndWFnZTNcIiBjbGFzc05hbWU9XCJsYW5ndWFnZS1sYWJlbFwiPjMuPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwibGFuZ3VhZ2UtaW5wdXRcIiBpZD1cImxhbmd1YWdlM1wiIGRlZmF1bHRWYWx1ZT17Z2V0RXhpc3RpbmdMYW5ndWFnZXMoKVsyXX0gcmVmPXtsYW5ndWFnZTNSZWZ9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJsYW5ndWFnZTRcIiBjbGFzc05hbWU9XCJsYW5ndWFnZS1sYWJlbFwiPjQuPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwibGFuZ3VhZ2UtaW5wdXRcIiBpZD1cImxhbmd1YWdlNFwiIGRlZmF1bHRWYWx1ZT17Z2V0RXhpc3RpbmdMYW5ndWFnZXMoKVszXX0gcmVmPXtsYW5ndWFnZTRSZWZ9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgaWQ9XCJjb2wyXCI+XHJcbiAgICAgICAgICA8ZGl2IGlkPVwiYWJvdXQtaW5wdXRcIj5cclxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJhYm91dFwiPkFib3V0IE1lOjwvbGFiZWw+XHJcbiAgICAgICAgICAgIDx0ZXh0YXJlYSBpZD1cImFib3V0XCIgY29scz1cIjMwXCIgcm93cz1cIjVcIiBkZWZhdWx0VmFsdWU9e3Byb2ZpbGVJbmZvLmFib3V0fSByZWY9e2Fib3V0UmVmfSBmb3JtPVwidXBkYXRlLWZvcm1cIi8+XHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGZvcm09XCJ1cGRhdGUtZm9ybVwiPlVwZGF0ZSBJbmZvPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxGaWxlVXBsb2FkIHNldEVkaXRNb2RlPXtzZXRFZGl0TW9kZX0vPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICB7LyogPGJ1dHRvbiBpZD1cImNhbmNlbFwiIG9uQ2xpY2s9eygpID0+IHNldEVkaXRNb2RlKGZhbHNlKX0+XHJcbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS10aW1lc1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cclxuICAgICAgICA8L2J1dHRvbj4gKi99XHJcbiAgICAgICAgPGRpdiBpZD1cImNhbmNlbC1idG5cIj5cclxuICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXRpbWVzLWNpcmNsZSBmYS0yeFwiIGlkPVwiY2FuY2VsXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgb25DbGljaz17KCkgPT4gc2V0RWRpdE1vZGUoZmFsc2UpfT48L2k+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgIFxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPC9zZWN0aW9uPlxyXG5cclxuXHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgXHJcbiAgICAgICAgc2VjdGlvbiB7XHJcbiAgICAgICAgICAvKiBwYWRkaW5nOiAzcmVtOyAqL1xyXG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICAgICAgICAgIHotaW5kZXg6IC0zO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgI2VkaXQtY29udGFpbmVyIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAjY29sMSB7XHJcbiAgICAgICAgICBwYWRkaW5nOiAzcmVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgI2NvbDEgaDIge1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlucHV0IHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XHJcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxMnB4IDE1cHg7XHJcbiAgICAgICAgICBtYXJnaW46IDhweCAwO1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0ZXh0YXJlYSB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxMnB4IDE1cHg7XHJcbiAgICAgICAgICBtYXJnaW46IDhweCAwO1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMHJlbTtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuICAgICAgICAgIGZvbnQ6IGluaGVyaXQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAjbGFuZ3VhZ2VzIHtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAjbGFuZ3VhZ2UtaW5wdXQtY29udGFpbmVyIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnMgMWZyIDFmcjtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBoNCB7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNDAwIDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxhYmVsLmxhbmd1YWdlLWxhYmVsIHtcclxuICAgICAgICAgIG1hcmdpbi1yaWdodDogMC4yNXJlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlucHV0Lmxhbmd1YWdlLWlucHV0IHtcclxuICAgICAgICAgIHdpZHRoOiA5NSU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBidXR0b25bdHlwZT0nc3VibWl0J10ge1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICNjYW5jZWwtYnRuIHtcclxuICAgICAgICAgIC8qIGN1cnNvcjogcG9pbnRlcjsgKi9cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgaSB7XHJcbiAgICAgICAgICBtYXJnaW46IDAuODVyZW07XHJcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAjY29sMiB7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgICAgICAgcGFkZGluZzogNC42cmVtIDAgMCAzcmVtO1xyXG4gICAgICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAke2NvbG9ycy5wcmltYXJ5fVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgI2Fib3V0LWlucHV0IHtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07ICBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qIE1lZGlhIHF1ZXJpZXMgKi9cclxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogMTE1MHB4KSB7XHJcblxyXG4gICAgICAgICAgI3Byb2ZpbGUtZWRpdCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA5MHZ3O1xyXG4gICAgICAgICAgICBtYXJnaW46IDFyZW0gYXV0byAxcmVtIGF1dG87XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgI2VkaXQtY29udGFpbmVyIHtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC8qIHRleHRhcmVhIHtcclxuICAgICAgICAgICAgd2lkdGg6IDk1JTtcclxuICAgICAgICAgIH0gKi9cclxuXHJcbiAgICAgICAgICAjY29sMSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICNjYW5jZWwge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRvcDogNXB4O1xyXG4gICAgICAgICAgICByaWdodDogNXB4O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICNjb2wyIHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgICAgICAgcGFkZGluZzogMCAzcmVtIDNyZW0gM3JlbTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NzhweCkge1xyXG4gICAgICAgICAgI2xhbmd1YWdlLWlucHV0LWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEsIDFmcik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNDQwcHgpIHtcclxuICAgICAgICAgICNsYW5ndWFnZS1pbnB1dC1jb250YWluZXIgbGFiZWx7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgI2NvbDEge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAycmVtIDJyZW0gMXJlbSAycmVtO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICNjb2wyIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMCAycmVtIDNyZW0gMnJlbTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAzNjBweCkge1xyXG4gICAgICAgICAgI2NhbmNlbCB7XHJcbiAgICAgICAgICAgIHRvcDogLTVweDtcclxuICAgICAgICAgICAgcmlnaHQ6IC01cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICBcclxuICAgICAgYH08L3N0eWxlPlxyXG5cclxuICAgIDwvbW90aW9uLmRpdj5cclxuICAgIDwvQW5pbWF0ZVByZXNlbmNlPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZmlsZUVkaXQ7IiwiaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEdsb2JhbENvbnRleHQgfSBmcm9tICcuLi9jb250ZXh0L0dsb2JhbENvbnRleHQnO1xyXG5pbXBvcnQgY29sb3JzIGZyb20gJy4uL2Nzcy12YXJpYWJsZXMvY29sb3JzJztcclxuXHJcbmNvbnN0IFByb2ZpbGVJbmZvID0gKHsgc2V0RWRpdE1vZGUsIGVkaXRNb2RlIH0pID0+IHtcclxuXHJcbiAgY29uc3QgeyBhdXRoU3RhdGUsIGN1cnJlbnRVc2VyLCBwcm9maWxlVXNlciwgZmV0Y2hQcm9maWxlVXNlciwgY2xlYXJQcm9maWxlVXNlciwgYWRkRmF2b3VyaXRlLCByZW1vdmVGYXZvdXJpdGUgfSA9IHVzZUNvbnRleHQoR2xvYmFsQ29udGV4dCk7XHJcblxyXG4gIGNvbnN0IFtpc0Zhdm91cml0ZSwgc2V0SXNGYXZvdXJpdGVdID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gIGNvbnN0IGFkZEZhdm91cml0ZUhhbmRsZXIgPSAoKSA9PiB7XHJcbiAgICBhZGRGYXZvdXJpdGUocHJvZmlsZVVzZXIuaWQpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgcmVtb3ZlRmF2b3VyaXRlSGFuZGxlciA9ICgpID0+IHtcclxuICAgIHJlbW92ZUZhdm91cml0ZShwcm9maWxlVXNlci5pZCk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBnZXRMYW5ndWFnZVN0cmluZyA9ICgpID0+IHtcclxuICAgIGNvbnN0IGxhbmd1YWdlcyA9IHByb2ZpbGVVc2VyLmxhbmd1YWdlcztcclxuICAgIGxldCBsYW5ndWFnZVN0cmluZyA9ICcnO1xyXG5cclxuICAgIGlmIChwcm9maWxlVXNlci5sYW5ndWFnZXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHJldHVybiBsYW5ndWFnZVN0cmluZztcclxuICAgIH1cclxuXHJcbiAgICBlbHNlIHtcclxuICAgICAgbGFuZ3VhZ2VzLm1hcCgobGFuZ3VhZ2UsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgaWYgKGxhbmd1YWdlICE9PSAnJykge1xyXG4gICAgICAgICAgbGFuZ3VhZ2VTdHJpbmcgKz0gbGFuZ3VhZ2U7XHJcbiAgICAgICAgICBpZiAobGFuZ3VhZ2VzW2luZGV4ICsgMV0gIT09ICcnICYmIGluZGV4ICsgMSAhPT0gbGFuZ3VhZ2VzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBsYW5ndWFnZVN0cmluZyArPSAnICcgKyAnLycgKyAnICc7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICByZXR1cm4gbGFuZ3VhZ2VTdHJpbmc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgICA8c2VjdGlvbiBpZD1cInVzZXJcIiBjbGFzc05hbWU9XCJhbmltYXRlX19hbmltYXRlZCBhbmltYXRlX19mYWRlSW5cIj5cclxuICAgICAgICA8ZGl2IGlkPVwicHJvZmlsZS1waG90b1wiPlxyXG4gICAgICAgICAge3Byb2ZpbGVVc2VyLnByb2ZpbGVQaG90b0ZpbGVuYW1lICE9PSBudWxsICYmIHByb2ZpbGVVc2VyLnByb2ZpbGVQaG90b0ZpbGVuYW1lICE9PSAnJyAmJlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNyb3AgYW5pbWF0ZV9fYW5pbWF0ZWQgYW5pbWF0ZV9fZmFkZUluXCI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgeyhwcm9maWxlVXNlci5wcm9maWxlUGhvdG9GaWxlbmFtZSA9PT0gbnVsbCB8fCBwcm9maWxlVXNlci5wcm9maWxlUGhvdG9GaWxlbmFtZSA9PT0gJycpICYmXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3JvcCBhbmltYXRlX19hbmltYXRlZCBhbmltYXRlX19mYWRlSW5cIj5cclxuICAgICAgICAgICAgICA8aW1nIHNyYz0nL2RlZmF1bHQtYXZhdGFyLmpwZycgYWx0PVwicHJvZmlsZS1waG90b1wiIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGlkPVwidXNlci1pbmZvXCI+XHJcbiAgICAgICAgICA8ZGl2IGlkPVwiaW5mb1wiPlxyXG4gICAgICAgICAgICA8aDE+e3Byb2ZpbGVVc2VyLmZpcnN0TmFtZX0ge3Byb2ZpbGVVc2VyLmxhc3ROYW1lfTwvaDE+XHJcbiAgICAgICAgICAgIDxoMj5Kb2IgVGl0bGU6ICZuYnNwOyB7cHJvZmlsZVVzZXIuam9iVGl0bGV9PC9oMj5cclxuICAgICAgICAgICAgPGgyPkxvY2F0aW9uOiAmbmJzcDsge3Byb2ZpbGVVc2VyLmxvY2F0aW9ufTwvaDI+XHJcbiAgICAgICAgICAgIDxoMj5MYW5ndWFnZXM6ICZuYnNwOyB7Z2V0TGFuZ3VhZ2VTdHJpbmcoKX08L2gyPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBpZD1cImJ1dHRvbnNcIj5cclxuICAgICAgICAgICAge3Byb2ZpbGVVc2VyLmlkID09PSBjdXJyZW50VXNlci5pZCAmJlxyXG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWNvZyBmYS0yeFwiIGlkPVwicHJvZmlsZS1lZGl0LWNvZ1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIG9uQ2xpY2s9eygpID0+IHNldEVkaXRNb2RlKCFlZGl0TW9kZSl9PjwvaT5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB7cHJvZmlsZVVzZXIuaWQgIT09IGN1cnJlbnRVc2VyLmlkICYmICEoY3VycmVudFVzZXIuZmF2b3VyaXRlcy5pbmNsdWRlcyhwcm9maWxlVXNlci5pZCkpICYmIGF1dGhTdGF0ZS5hdXRoZW50aWNhdGVkID09PSB0cnVlICYmXHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cImFkZC1mYXZvdXJpdGVcIiBvbkNsaWNrPXthZGRGYXZvdXJpdGVIYW5kbGVyfT5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXN0YXItbyBmYS0yeCBmYXZvdXJpdGVcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAge2N1cnJlbnRVc2VyLmZhdm91cml0ZXMuaW5jbHVkZXMocHJvZmlsZVVzZXIuaWQpICYmXHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cInJlbW92ZS1mYXZvdXJpdGVcIiBvbkNsaWNrPXtyZW1vdmVGYXZvdXJpdGVIYW5kbGVyfT5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXN0YXIgZmEtMnggZmF2b3VyaXRlXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG4gICAgICA8c3R5bGUganN4PntgXHJcblxyXG4gICAgICBzZWN0aW9uIHtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgICN1c2VyIHtcclxuICAgICAgICBtYXJnaW46IDNyZW0gMCAycmVtIDA7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNGRjRCMkIsICNGRjQxNkMpO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI0ZGNEIyQiwgI0ZGNDE2Qyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICN1c2VyIGgxIHtcclxuICAgICAgICBmb250LXNpemU6IDNyZW07XHJcbiAgICAgICAgbWFyZ2luOiAxcmVtIDAgNHJlbSAwO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzcmVtO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAjdXNlciBoMiB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxuICAgICAgfVxyXG5cclxuICAgICAgI3Byb2ZpbGUtcGhvdG8ge1xyXG4gICAgICAgIHdpZHRoOiAzMyU7XHJcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgICAgcGFkZGluZzogMy41cmVtIDNyZW0gM3JlbSAzcmVtO1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgICAgIGJvcmRlci1yaWdodDogbm9uZTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4IDAgMCAxMHB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpbWcge1xyXG4gICAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAjdXNlci1pbmZvIHtcclxuICAgICAgICAvKiBoZWlnaHQ6IDEwMCU7ICovXHJcbiAgICAgICAgd2lkdGg6IDYxJTtcclxuICAgICAgICBwYWRkaW5nOiAzcmVtO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpI3Byb2ZpbGUtZWRpdC1jb2cge1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMnM7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGkjcHJvZmlsZS1lZGl0LWNvZzpob3ZlciB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgYnV0dG9uI2FkZC1mYXZvdXJpdGUsIGJ1dHRvbiNyZW1vdmUtZmF2b3VyaXRlIHtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICR7Y29sb3JzLnRlcnRpYXJ5fTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgcGFkZGluZzogMC43cmVtO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8qIGhlaWdodDogMTAlOyAqL1xyXG4gICAgICB9XHJcblxyXG4gICAgICAjcGxheWxpc3Qge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDRyZW07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5jcm9wIHtcclxuICAgICAgICB3aWR0aDogMjY2cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyNjZweDtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9pbWFnZS8ke3Byb2ZpbGVVc2VyLnByb2ZpbGVQaG90b0ZpbGVuYW1lfScpO1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpLmZhdm91cml0ZSB7XHJcbiAgICAgICAgY29sb3I6ICR7Y29sb3JzLnNlY29uZGFyeX07XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogOXB4O1xyXG4gICAgICAgIGxlZnQ6IDkuNnB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvKiBNZWRpYSBxdWVyaWVzICovXHJcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMTUwcHggKSB7XHJcbiAgICAgICAgI3VzZXIge1xyXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICAgICAgICB3aWR0aDogNzUlO1xyXG4gICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgI3Byb2ZpbGUtcGhvdG8ge1xyXG4gICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgd2lkdGg6IDYxJTtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY3JvcCB7XHJcbiAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAvKiB3aWR0aDogODAlOyAqL1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgI3VzZXItaW5mbyB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI0ZGNEIyQiwgI0ZGNDE2Qyk7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNGRjRCMkIsICNGRjQxNkMpO1xyXG4gICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICBwYWRkaW5nOiAyLjVyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogODAwcHgpIHtcclxuICAgICAgICAjcHJvZmlsZS1waG90byB7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgbWFyZ2luOiAzcmVtIGF1dG8gM3JlbSBhdXRvO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgI3VzZXItaW5mbyB7XHJcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAvKiBwYWRkaW5nOiAwOyAqL1xyXG4gICAgICAgICAgLyogdGV4dC1hbGlnbjogY2VudGVyOyAqL1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgI2luZm8ge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBoMSB7XHJcbiAgICAgICAgICAvKiB0ZXh0LWFsaWduOiBjZW50ZXI7ICovXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICNidXR0b25zIHtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIHJpZ2h0OiAyMXB4O1xyXG4gICAgICAgICAgdG9wOiAyMXB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1ODBweCApIHtcclxuICAgICAgICAjdXNlciB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgI3VzZXIgaDEge1xyXG4gICAgICAgICAgbWFyZ2luOiAycmVtIDAgM3JlbSAwO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAyLjVyZW0gXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBoMiB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0NzBweCApIHtcclxuXHJcbiAgICAgICAgI2J1dHRvbnMge1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgcmlnaHQ6IDE0cHg7XHJcbiAgICAgICAgICB0b3A6IDE0cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAjdXNlci1pbmZvIGgxIHtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9IFxyXG5cclxuICAgICAgICAjdXNlci1pbmZvIHtcclxuICAgICAgICAgIHBhZGRpbmc6IDJyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICN1c2VyIGgxIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07IFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaDIge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNDQ1cHggKSB7XHJcbiAgICAgICAgI3Byb2ZpbGUtcGhvdG8ge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY3JvcCB7XHJcbiAgICAgICAgICBtYXgtd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgICAgbWF4LWhlaWdodDogMjAwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogMzcwcHggKSB7XHJcblxyXG4gICAgICAgIGkuZmF2b3VyaXRlIHtcclxuICAgICAgICAgIHRvcDogNC43cHg7XHJcbiAgICAgICAgICBsZWZ0OiA1LjdweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5mYS1zdGFyIC5mYS0yeCwgLmZhLXN0YXItbyA8ZGl2IGNsYXNzTmFtZT1cImZhLTJ4XCI+PC9kaXY+IHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMS40ZW1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGJ1dHRvbiNyZW1vdmUtZmF2b3VyaXRlIHtcclxuICAgICAgICAgIGhlaWdodDogNDFweDtcclxuICAgICAgICAgIHdpZHRoOiA0MXB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAzMjBweCApIHtcclxuICAgICAgICAjdXNlciBoMSB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDIuMnJlbTtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBAbWVkaWEgKG1heC1oZWlnaHQ6IDgyMHB4ICkge1xyXG4gICAgICAgICNwcm9maWxlLXBob3RvIHtcclxuICAgICAgICAgIG1hcmdpbjogMnJlbSBhdXRvO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgQG1lZGlhIChtYXgtaGVpZ2h0OiA3NzBweCApIHtcclxuICAgICAgICAjcHJvZmlsZS1waG90byB7XHJcbiAgICAgICAgICBtYXJnaW46IDJyZW0gYXV0bztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIFxyXG4gICAgYH08L3N0eWxlPlxyXG5cclxuICAgIDwvc2VjdGlvbj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2ZpbGVJbmZvO1xyXG4iLCJpbXBvcnQgeyB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgU2VhcmNoYmFyID0gKHsgcGxhY2Vob2xkZXIsIHN1Ym1pdEhhbmRsZXIgfSkgPT4ge1xyXG5cclxuICBjb25zdCBbc2VhcmNoSW5wdXQsIHNldFNlYXJjaElucHV0XSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcblxyXG4gIGNvbnN0IG9uQ2hhbmdlSGFuZGxlciA9IChlKSA9PiB7XHJcbiAgICBzZXRTZWFyY2hJbnB1dChlLnRhcmdldC52YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBvbkZvcm1TdWJtaXQgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIC8vIENhbGwgdGhlIHJlbGV2YW50IHN1Ym1pdCBoYW5kbGVyIGZyb20gcHJvcHNcclxuICAgIHN1Ym1pdEhhbmRsZXIoc2VhcmNoSW5wdXQpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgaWQ9XCJtYWluLXNlYXJjaGJhclwiPlxyXG4gICAgICA8Zm9ybSBvblN1Ym1pdD17b25Gb3JtU3VibWl0fT5cclxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInNlYXJjaC1pbnB1dFwiPlxyXG4gICAgICAgICAgPHN2ZyBpZD1cInNlYXJjaC1pY29uXCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgd2lkdGg9XCIyNFwiPjxwYXRoIGQ9XCJNMTUuNSAxNGgtLjc5bC0uMjgtLjI3QzE1LjQxIDEyLjU5IDE2IDExLjExIDE2IDkuNSAxNiA1LjkxIDEzLjA5IDMgOS41IDNTMyA1LjkxIDMgOS41IDUuOTEgMTYgOS41IDE2YzEuNjEgMCAzLjA5LS41OSA0LjIzLTEuNTdsLjI3LjI4di43OWw1IDQuOTlMMjAuNDkgMTlsLTQuOTktNXptLTYgMEM3LjAxIDE0IDUgMTEuOTkgNSA5LjVTNy4wMSA1IDkuNSA1IDE0IDcuMDEgMTQgOS41IDExLjk5IDE0IDkuNSAxNHpcIiAvPjxwYXRoIGQ9XCJNMCAwaDI0djI0SDB6XCIgZmlsbD1cIm5vbmVcIiAvPjwvc3ZnPlxyXG4gICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInNlYXJjaC1pbnB1dFwiIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn0gb25DaGFuZ2U9e29uQ2hhbmdlSGFuZGxlcn0gdmFsdWU9e3NlYXJjaElucHV0fSAvPlxyXG4gICAgICA8L2Zvcm0+XHJcblxyXG5cclxuICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgZm9ybSB7XHJcbiAgICAgICAgd2lkdGg6IDY4LjUlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBsYWJlbCB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMTFweDtcclxuICAgICAgICBsZWZ0OiAxMnB4O1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAjbWFpbi1zZWFyY2hiYXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAjbWFpbi1zZWFyY2hiYXIgaW5wdXQge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIzcHg7XHJcbiAgICAgICAgcGFkZGluZzogMC42cmVtIDNyZW0gMC41cmVtIDIuNXJlbTtcclxuICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgZm9udDogaW5oZXJpdDtcclxuICAgICAgfVxyXG5cclxuICAgICAgI21haW4tc2VhcmNoYmFyIGlucHV0IDpmb2N1cyB7XHJcbiAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDExMDBweCkge1xyXG4gICAgICAgICNtYWluLXNlYXJjaGJhciBpbnB1dCB7XHJcbiAgICAgICAgICB3aWR0aDogMTMwJTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA4MzBweCkge1xyXG4gICAgICAgICNtYWluLXNlYXJjaGJhciB7XHJcbiAgICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgI21haW4tc2VhcmNoYmFyIGlucHV0IHtcclxuICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvcm0ge1xyXG4gICAgICAgICAgd2lkdGg6IDc1LjUlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgQG1lZGlhICggbWF4LXdpZHRoOiA0MzBweCkge1xyXG4gICAgICAgICNtYWluLXNlYXJjaGJhciBpbnB1dCB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsYWJlbCB7XHJcbiAgICAgICAgICB0b3A6IDZweDtcclxuICAgICAgICAgIGxlZnQ6IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBAbWVkaWEgKCBtYXgtd2lkdGg6IDM2MHB4KSB7XHJcbiAgICAgICAgI21haW4tc2VhcmNoYmFyIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgI21haW4tc2VhcmNoYmFyIGlucHV0IHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgXHJcbiAgICBcclxuICAgIGB9PC9zdHlsZT5cclxuXHJcbiAgICAgICAgICBcclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoYmFyO1xyXG4iLCJpbXBvcnQgeyBHbG9iYWxDb250ZXh0IH0gZnJvbSAnLi4vY29udGV4dC9HbG9iYWxDb250ZXh0JztcclxuaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGNvbG9ycyBmcm9tICcuLi9jc3MtdmFyaWFibGVzL2NvbG9ycydcclxuXHJcbmNvbnN0IFZpZGVvSXRlbSA9ICh7IHZpZGVvLCBtb2RlIH0pID0+IHtcclxuXHJcbiAgY29uc3QgeyBhZGRWaWRlb1RvUGxheWxpc3QsIHJlbW92ZVZpZGVvRnJvbVBsYXlsaXN0LCBzZXRDdXJyZW50VmlkZW8sIGN1cnJlbnRVc2VyLCBwcm9maWxlVXNlciwgc2V0QXV0b3BsYXkgfSA9IHVzZUNvbnRleHQoR2xvYmFsQ29udGV4dCk7XHJcblxyXG4gIGNvbnN0IGFkZFZpZGVvQ2xpY2tIYW5kbGVyID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IHZpZGVvVG9TYXZlID0ge1xyXG4gICAgICB0aXRsZTogdmlkZW8uc25pcHBldC50aXRsZS5zcGxpdChcIiZxdW90O1wiKS5qb2luKFwiXCIpLnNwbGl0KFwiJiMzOTtcIikuam9pbihcIidcIikuc3BsaXQoXCImYW1wO1wiKS5qb2luKFwiJlwiKSxcclxuICAgICAgdGh1bWJuYWlsVVJMOiB2aWRlby5zbmlwcGV0LnRodW1ibmFpbHMuZGVmYXVsdC51cmwsXHJcbiAgICAgIHZpZGVvSWQ6IHZpZGVvLmlkLnZpZGVvSWQsXHJcbiAgICB9XHJcblxyXG4gICAgYWRkVmlkZW9Ub1BsYXlsaXN0KHZpZGVvVG9TYXZlKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHJlbW92ZVZpZGVvQ2xpY2tIYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgcmVtb3ZlVmlkZW9Gcm9tUGxheWxpc3QodmlkZW8uX2lkKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHBsYXlCdXR0b25IYW5kbGVyID0gKCkgPT4ge1xyXG5cclxuICAgIGxldCB2aWRlb1RvU2V0O1xyXG5cclxuICAgIGlmIChtb2RlID09PSAneW91dHViZScpIHtcclxuICAgICAgdmlkZW9Ub1NldCA9IHtcclxuICAgICAgICB0aXRsZTogdmlkZW8uc25pcHBldC50aXRsZSxcclxuICAgICAgICAvLyBkZXNjcmlwdGlvbjogdmlkZW8uc25pcHBldC5kZXNjcmlwdGlvbixcclxuICAgICAgICB2aWRlb0lkOiB2aWRlby5pZC52aWRlb0lkLFxyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB2aWRlb1RvU2V0ID0ge1xyXG4gICAgICAgIHRpdGxlOiB2aWRlby50aXRsZSxcclxuICAgICAgICAvLyBkZXNjcmlwdGlvbjogdmlkZW8uZGVzY3JpcHRpb24sXHJcbiAgICAgICAgdmlkZW9JZDogdmlkZW8udmlkZW9VUkwsXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHNldEN1cnJlbnRWaWRlbyh2aWRlb1RvU2V0KTtcclxuXHJcbiAgICBzZXRBdXRvcGxheSh0cnVlKTtcclxuXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ2aWRlby1pdGVtXCI+XHJcbiAgICAgIHttb2RlID09PSAneW91dHViZScgJiZcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgPGltZyBzcmM9e3ZpZGVvLnNuaXBwZXQudGh1bWJuYWlscy5kZWZhdWx0LnVybH0gYWx0PVwieW91dHViZSB2aWRlb1wiIC8+XHJcbiAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidmlkZW8tdGl0bGVcIj57dmlkZW8uc25pcHBldC50aXRsZS5zcGxpdChcIiZxdW90O1wiKS5qb2luKFwiXCIpLnNwbGl0KFwiJiMzOTtcIikuam9pbihcIidcIikuc3BsaXQoXCImYW1wO1wiKS5qb2luKFwiJlwiKX08L2gzPlxyXG4gICAgICAgICAgPGRpdiBpZD1cImJ1dHRvbnNcIj5cclxuICAgICAgICAgIHtwcm9maWxlVXNlci5vd25lZFZpZGVvcy5sZW5ndGggPiAwICYmXHJcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17cGxheUJ1dHRvbkhhbmRsZXJ9PlxyXG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXBsYXlcIj48L2k+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2FkZFZpZGVvQ2xpY2tIYW5kbGVyfT5cclxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1wbHVzXCI+PC9pPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvPlxyXG4gICAgICB9XHJcblxyXG4gICAgICB7bW9kZSA9PT0gJ3BsYXlsaXN0JyAmJlxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICA8aW1nIHNyYz17dmlkZW8udGh1bWJuYWlsVVJMfSBhbHQ9XCJ5b3V0dWJlIHZpZGVvXCIgLz5cclxuICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ2aWRlby10aXRsZVwiPnt2aWRlby50aXRsZX08L2gzPlxyXG4gICAgICAgICAgPGRpdiBpZD1cImJ1dHRvbnNcIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtwbGF5QnV0dG9uSGFuZGxlcn0+XHJcbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtcGxheVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIHtjdXJyZW50VXNlci5pZCA9PT0gcHJvZmlsZVVzZXIuaWQgJiZcclxuICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3JlbW92ZVZpZGVvQ2xpY2tIYW5kbGVyfT5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXRyYXNoLW9cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvPlxyXG4gICAgICB9XHJcblxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgXHJcbiAgICAudmlkZW8taXRlbSB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgLyogYmFja2dyb3VuZC1jb2xvcjogI2UxMjllODsgKi9cclxuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICR7Y29sb3JzLnByaW1hcnl9O1xyXG4gICAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgICAvKiBtYXJnaW4tYm90dG9tOiAxcmVtOyAqL1xyXG4gICAgfVxyXG5cclxuICAgIC52aWRlby1pdGVtOmxhc3QtY2hpbGQge1xyXG4gICAgICBib3JkZXItYm90dG9tOiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgIGgzIHtcclxuICAgICAgbWFyZ2luOiAwIGF1dG8gMCAyLjdyZW07XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7Y29sb3JzLnByaW1hcnl9O1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIHBhZGRpbmc6IDAuNzVyZW0gMXJlbTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgbWFyZ2luOiAwLjVyZW07XHJcbiAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlLWluLW91dCwgdGV4dC1zaGFkb3cgMC4ycztcclxuICAgIH1cclxuXHJcbiAgICBidXR0b246aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTUzMDVhO1xyXG4gICAgICB0ZXh0LXNoYWRvdzogMHB4IDBweCA4cHggcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qIE1lZGlhIHF1ZXJpZXMgKi9cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMDgwcHgpIHtcclxuICAgICAgaDMge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxLjdyZW07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICNidXR0b25zIHtcclxuICAgICAgICBtaW4td2lkdGg6IDIwJTtcclxuICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgLnZpZGVvLWl0ZW0ge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIGgzIHtcclxuICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgfVxyXG5cclxuICAgICAgI2J1dHRvbnMge1xyXG4gICAgICAgIC8qIHdpZHRoOiAxMCU7ICovXHJcbiAgICAgICAgbWluLXdpZHRoOiAxMCU7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcclxuICAgICAgaW1nIHtcclxuICAgICAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwLjNyZW07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICNidXR0b25zIHtcclxuICAgICAgICB3aWR0aDogMTMlO1xyXG4gICAgICAgIG1pbi13aWR0aDogMTMlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDQwMHB4KSB7XHJcbiAgICAgICNidXR0b25zIHtcclxuICAgICAgICB3aWR0aDogMTUlO1xyXG4gICAgICAgIG1pbi13aWR0aDogMTUlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBoMyB7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjdyZW07XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogMzgwcHgpIHtcclxuICAgICAgLnZpZGVvLWl0ZW0ge1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMC42cmVtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDM1MHB4KSB7XHJcbiAgICAgIC52aWRlby1pdGVtIHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDAuNnJlbTtcclxuICAgICAgfVxyXG5cclxuICAgICAgI2J1dHRvbnMge1xyXG4gICAgICAgIHdpZHRoOiAxNyU7XHJcbiAgICAgICAgbWluLXdpZHRoOiAxNyU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGltZyB7XHJcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgXHJcbiAgYH08L3N0eWxlPlxyXG5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVmlkZW9JdGVtOyIsImltcG9ydCB7IEdsb2JhbENvbnRleHQgfSBmcm9tICcuLi9jb250ZXh0L0dsb2JhbENvbnRleHQnO1xyXG5pbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY29sb3JzIGZyb20gJy4uL2Nzcy12YXJpYWJsZXMvY29sb3JzJ1xyXG5cclxuY29uc3QgVmlkZW9QbGF5ZXIgPSAoKSA9PiB7XHJcblxyXG4gIGNvbnN0IHsgdmlkZW9TdGF0ZSwgYXV0b3BsYXksIHByb2ZpbGVVc2VyIH0gPSB1c2VDb250ZXh0KEdsb2JhbENvbnRleHQpO1xyXG5cclxuICAvLyBBdXRvcGxheSBvZmZcclxuICBsZXQgdmlkZW9TcmMgPSBgaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvJHt2aWRlb1N0YXRlLnZpZGVvSWR9YDtcclxuXHJcbiAgaWYgKGF1dG9wbGF5KSB7XHJcbiAgICAvLyBBdXRvcGxheSBvblxyXG4gICAgdmlkZW9TcmMgPSBgaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvJHt2aWRlb1N0YXRlLnZpZGVvSWR9P2F1dG9wbGF5PTFgO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuXHJcbiAgICA8ZGl2IGlkPVwidmlkZW8tY29udGFpbmVyXCI+XHJcbiAgICAgIHtwcm9maWxlVXNlci5vd25lZFZpZGVvcy5sZW5ndGggPiAwICYmIHZpZGVvU3RhdGUudGl0bGUgIT09ICcnICYmXHJcbiAgICAgICAgPGRpdiBpZD1cInZpZGVvLXBsYXllclwiPlxyXG4gICAgICAgICAgPGlmcmFtZSB3aWR0aD1cIjkxOFwiIGhlaWdodD1cIjU2N1wiIGZyYW1lQm9yZGVyPVwiMFwiIGFsbG93RnVsbFNjcmVlbiBhbGxvdz1cImF1dG9wbGF5XCIgc3JjPXt2aWRlb1NyY30+PC9pZnJhbWU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIH1cclxuICAgICAgXHJcblxyXG4gIDxzdHlsZSBqc3g+e2BcclxuICBcclxuICAgICN2aWRlby1jb250YWluZXIge1xyXG4gICAgICBtYXJnaW4tdG9wOiAzcmVtO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAjdmlkZW8tcGxheWVyIHtcclxuICAgICAgd2lkdGg6IDg1JTtcclxuICAgICAgbWFyZ2luOiA0cmVtIGF1dG87XHJcbiAgICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICR7Y29sb3JzLnByaW1hcnl9XHJcbiAgICB9XHJcblxyXG4gICAgaWZyYW1lIHtcclxuICAgICAgcGFkZGluZzogMC41cmVtO1xyXG4gICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG5cclxuICAgICN2aWRlby1pbmZvIHtcclxuICAgICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4vKiBcclxuICAgIGgzIHtcclxuICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgfSAqL1xyXG5cclxuICAgIC8qIE1lZGlhIHF1ZXJpZXMgKi9cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMTUwcHggKSB7XHJcblxyXG4gICAgICAjdmlkZW8tcGxheWVyIHtcclxuICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgfVxyXG5cclxuICAgICAgaWZyYW1lIHtcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogMTAwMHB4ICkge1xyXG4gICAgICBpZnJhbWUge1xyXG4gICAgICAgIC8qIHdpZHRoOiA4NXZ3OyAqL1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDU4MHB4ICkge1xyXG4gICAgICAjdmlkZW8tcGxheWVyIHtcclxuICAgICAgICB3aWR0aDogOTElO1xyXG4gICAgICAgIC8qIGhlaWdodDogNTAlOyAqL1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZnJhbWUge1xyXG4gICAgICAgIGhlaWdodDogMzN2aDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIFxyXG4gIFxyXG4gIFxyXG4gIGB9PC9zdHlsZT5cclxuXHJcblxyXG5cclxuXHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFZpZGVvUGxheWVyOyIsIm1vZHVsZS5leHBvcnRzID0ge1xyXG4gIG1vbmdvVVJJOiAnbW9uZ29kYjovL2dyZWVucGF1bG86YWRtaW4yMDIwQGRzMTIxOTk2Lm1sYWIuY29tOjIxOTk2L2NvZGVycy1qdWtlYm94LWRldicsXHJcbiAgWU9VVFVCRUFQSV9LRVk6ICdBSXphU3lEV1RLNWVicVhHSHczTjRGU2R4RV9xTzJ2MExFczI4WG8nXHJcbn0iLCIvLyBGaWd1cmUgb3V0IHdoaWNoIHNldCBvZiBjcmVkZW50aWFscyB0byByZXR1cm5cclxuXHJcbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XHJcbiAgLy8gd2UgYXJlIGluIHByb2R1Y3Rpb24gLSByZXR1cm4gdGhlIHByb2Qgc2V0IG9mIGtleXNcclxuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vcHJvZCcpO1xyXG59IGVsc2Uge1xyXG4gIC8vIHdlIGFyZSBpbiBkZXZlbG9wbWVudCAtIHJldHVybiB0aGUgZGV2IHNldCBvZiBrZXlzXHJcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2RldicpO1xyXG59XHJcbiIsImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZVJlZHVjZXJ9IGZyb20gJ3JlYWN0JztcclxuLy8gaW1wb3J0IEFwcFJlZHVjZXIgZnJvbSAnLi9BcHBSZWR1Y2VyJztcclxuLy8gaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tICdAYXBvbGxvL3JlYWN0LWhvb2tzJztcclxuXHJcbi8vIEluaXRhbCBTdGF0ZVxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgYXV0aGVudGljYXRlZDogZmFsc2UsXHJcbiAgYXV0aERhdGE6IG51bGwsXHJcbiAgdXNlcjogbnVsbCxcclxuICB2aWRlbzogbnVsbCxcclxuICBjb21tZW50OiBudWxsLFxyXG4gIC8vIGxvZ2luOiAoKSA9PiB7fVxyXG59XHJcblxyXG4vLyBDcmVhdGUgY29udGV4dFxyXG5leHBvcnQgY29uc3QgR2xvYmFsQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoaW5pdGlhbFN0YXRlKTtcclxuXHJcbi8vIFByb3ZpZGVyIENvbXBvbmVudFxyXG4vLyBleHBvcnQgY29uc3QgR2xvYmFsUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbi8vICAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKEFwcFJlZHVjZXIsIGluaXRpYWxTdGF0ZSlcclxuXHJcbi8vICAgcmV0dXJuIChcclxuLy8gICAgIDxHbG9iYWxDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7XHJcbi8vICAgICAgIC8vIGF1dGhlbnRpY2F0ZWQ6IHN0YXRlLmF1dGhlbnRpY2F0ZWQsXHJcbi8vICAgICAgIGxvZ2luOiBsb2dpblxyXG4vLyAgICAgfX0+XHJcbi8vICAgICAgIHtjaGlsZHJlbn1cclxuLy8gICAgIDwvR2xvYmFsQ29udGV4dC5Qcm92aWRlcj5cclxuLy8gICApXHJcbi8vIH0iLCJjb25zdCBjb2xvcnMgPSB7XHJcbiAgcHJpbWFyeTogJyNmZjQxNmMnLFxyXG4gIC8vIGdyYWRpZW50OiAnbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZmY0MTZjLCAjZmY0YjJiKScsXHJcbiAgLy8gZ3JhZGllbnQ6ICdsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmZjQxNmMsICNlZWZiNGEpJyxcclxuICAvLyBncmFkaWVudDogJ2xpbmVhci1ncmFkaWVudCgzN2RlZywgI2U1MmU3MSA1MCUsICNmZjhhMDAgMTAwJSknLFxyXG4gIC8vIGdyYWRpZW50OiAnbGluZWFyLWdyYWRpZW50KDM3ZGVnLCAjZTUyZTcxIDUwJSwgI2ZmOGEwMCAxMDAlKScsXHJcbiAgLy8gZ3JhZGllbnQ6ICdsaW5lYXItZ3JhZGllbnQoMzdkZWcsIHJnYmEoMjU1LCA2NSwgMTA4LCAxKSA1MCUsIHJnYmEoMjM4LCAyNTUsIDIwLCAxKSAxMDAlKScsXHJcbiAgZ3JhZGllbnQ6ICdsaW5lYXItZ3JhZGllbnQoMzdkZWcsICNmZjQxNmMgNTAlLCAjZWVmZjE0IDEwMCUpJyxcclxuICByZXZlcnNlR3JhZGllbnQ6ICdsaW5lYXItZ3JhZGllbnQoMzdkZWcsICNlZWZmMTQgNyUsICNmZjQxNmMgNDYlKScsXHJcbiAgcGlua0dyYWRlbnQ6ICdsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmZjRiMmIsICNmZjQxNmMpOycsXHJcbiAgcmV2ZXJzZVBpbmtHcmFkaWVudDogJ2xpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2ZmNDE2YywgI2ZmNGIyYik7JyxcclxuICBzZWNvbmRhcnk6ICcjZmY0YjJiJyxcclxuICB0ZXJ0aWFyeTogJyNlZWZmMTQnXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbG9yczsiLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gIGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDtcbiAgdmFyIGNhY2hlID0gbmV3IFdlYWtNYXAoKTtcblxuICBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gICAgcmV0dXJuIGNhY2hlO1xuICB9O1xuXG4gIHJldHVybiBjYWNoZTtcbn1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7XG4gIGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHtcbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCBfdHlwZW9mKG9iaikgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgICB9O1xuICB9XG5cbiAgdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7XG5cbiAgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7XG4gICAgcmV0dXJuIGNhY2hlLmdldChvYmopO1xuICB9XG5cbiAgdmFyIG5ld09iaiA9IHt9O1xuICB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDtcblxuICAgICAgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3T2JqW2tleV0gPSBvYmpba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqO1xuXG4gIGlmIChjYWNoZSkge1xuICAgIGNhY2hlLnNldChvYmosIG5ld09iaik7XG4gIH1cblxuICByZXR1cm4gbmV3T2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiLCJkZWNsYXJlIGNvbnN0IF9fTkVYVF9EQVRBX186IGFueVxuXG5pbXBvcnQgUmVhY3QsIHsgQ2hpbGRyZW4gfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IFByZWZldGNoT3B0aW9ucywgTmV4dFJvdXRlciB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgZXhlY09uY2UsIGdldExvY2F0aW9uT3JpZ2luIH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5pbXBvcnQgeyBhZGRCYXNlUGF0aCwgcmVzb2x2ZUhyZWYgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcblxuLyoqXG4gKiBEZXRlY3RzIHdoZXRoZXIgYSBnaXZlbiB1cmwgaXMgZnJvbSB0aGUgc2FtZSBvcmlnaW4gYXMgdGhlIGN1cnJlbnQgcGFnZSAoYnJvd3NlciBvbmx5KS5cbiAqL1xuZnVuY3Rpb24gaXNMb2NhbCh1cmw6IHN0cmluZyk6IGJvb2xlYW4ge1xuICBjb25zdCBsb2NhdGlvbk9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgY29uc3QgcmVzb2x2ZWQgPSBuZXcgVVJMKHVybCwgbG9jYXRpb25PcmlnaW4pXG4gIHJldHVybiByZXNvbHZlZC5vcmlnaW4gPT09IGxvY2F0aW9uT3JpZ2luXG59XG5cbnR5cGUgVXJsID0gc3RyaW5nIHwgVXJsT2JqZWN0XG5cbmV4cG9ydCB0eXBlIExpbmtQcm9wcyA9IHtcbiAgaHJlZjogVXJsXG4gIGFzPzogVXJsXG4gIHJlcGxhY2U/OiBib29sZWFuXG4gIHNjcm9sbD86IGJvb2xlYW5cbiAgc2hhbGxvdz86IGJvb2xlYW5cbiAgcGFzc0hyZWY/OiBib29sZWFuXG4gIHByZWZldGNoPzogYm9vbGVhblxufVxuXG5sZXQgY2FjaGVkT2JzZXJ2ZXI6IEludGVyc2VjdGlvbk9ic2VydmVyXG5jb25zdCBsaXN0ZW5lcnMgPSBuZXcgTWFwPEVsZW1lbnQsICgpID0+IHZvaWQ+KClcbmNvbnN0IEludGVyc2VjdGlvbk9ic2VydmVyID1cbiAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cuSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgOiBudWxsXG5jb25zdCBwcmVmZXRjaGVkOiB7IFtjYWNoZUtleTogc3RyaW5nXTogYm9vbGVhbiB9ID0ge31cblxuZnVuY3Rpb24gZ2V0T2JzZXJ2ZXIoKTogSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgfCB1bmRlZmluZWQge1xuICAvLyBSZXR1cm4gc2hhcmVkIGluc3RhbmNlIG9mIEludGVyc2VjdGlvbk9ic2VydmVyIGlmIGFscmVhZHkgY3JlYXRlZFxuICBpZiAoY2FjaGVkT2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gY2FjaGVkT2JzZXJ2ZXJcbiAgfVxuXG4gIC8vIE9ubHkgY3JlYXRlIHNoYXJlZCBJbnRlcnNlY3Rpb25PYnNlcnZlciBpZiBzdXBwb3J0ZWQgaW4gYnJvd3NlclxuICBpZiAoIUludGVyc2VjdGlvbk9ic2VydmVyKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgcmV0dXJuIChjYWNoZWRPYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihcbiAgICAoZW50cmllcykgPT4ge1xuICAgICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgICBpZiAoIWxpc3RlbmVycy5oYXMoZW50cnkudGFyZ2V0KSkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY2IgPSBsaXN0ZW5lcnMuZ2V0KGVudHJ5LnRhcmdldCkhXG4gICAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZyB8fCBlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyA+IDApIHtcbiAgICAgICAgICBjYWNoZWRPYnNlcnZlci51bm9ic2VydmUoZW50cnkudGFyZ2V0KVxuICAgICAgICAgIGxpc3RlbmVycy5kZWxldGUoZW50cnkudGFyZ2V0KVxuICAgICAgICAgIGNiKClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9LFxuICAgIHsgcm9vdE1hcmdpbjogJzIwMHB4JyB9XG4gICkpXG59XG5cbmNvbnN0IGxpc3RlblRvSW50ZXJzZWN0aW9ucyA9IChlbDogRWxlbWVudCwgY2I6ICgpID0+IHZvaWQpID0+IHtcbiAgY29uc3Qgb2JzZXJ2ZXIgPSBnZXRPYnNlcnZlcigpXG4gIGlmICghb2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gKCkgPT4ge31cbiAgfVxuXG4gIG9ic2VydmVyLm9ic2VydmUoZWwpXG4gIGxpc3RlbmVycy5zZXQoZWwsIGNiKVxuICByZXR1cm4gKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBvYnNlcnZlci51bm9ic2VydmUoZWwpXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycilcbiAgICB9XG4gICAgbGlzdGVuZXJzLmRlbGV0ZShlbClcbiAgfVxufVxuXG5mdW5jdGlvbiBwcmVmZXRjaChcbiAgcm91dGVyOiBOZXh0Um91dGVyLFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIG9wdGlvbnM/OiBQcmVmZXRjaE9wdGlvbnNcbik6IHZvaWQge1xuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHJldHVyblxuICAvLyBQcmVmZXRjaCB0aGUgSlNPTiBwYWdlIGlmIGFza2VkIChvbmx5IGluIHRoZSBjbGllbnQpXG4gIC8vIFdlIG5lZWQgdG8gaGFuZGxlIGEgcHJlZmV0Y2ggZXJyb3IgaGVyZSBzaW5jZSB3ZSBtYXkgYmVcbiAgLy8gbG9hZGluZyB3aXRoIHByaW9yaXR5IHdoaWNoIGNhbiByZWplY3QgYnV0IHdlIGRvbid0XG4gIC8vIHdhbnQgdG8gZm9yY2UgbmF2aWdhdGlvbiBzaW5jZSB0aGlzIGlzIG9ubHkgYSBwcmVmZXRjaFxuICByb3V0ZXIucHJlZmV0Y2goaHJlZiwgYXMsIG9wdGlvbnMpLmNhdGNoKChlcnIpID0+IHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgLy8gcmV0aHJvdyB0byBzaG93IGludmFsaWQgVVJMIGVycm9yc1xuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuICB9KVxuICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhc10gPSB0cnVlXG59XG5cbmZ1bmN0aW9uIGxpbmtDbGlja2VkKFxuICBlOiBSZWFjdC5Nb3VzZUV2ZW50LFxuICByb3V0ZXI6IE5leHRSb3V0ZXIsXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgcmVwbGFjZT86IGJvb2xlYW4sXG4gIHNoYWxsb3c/OiBib29sZWFuLFxuICBzY3JvbGw/OiBib29sZWFuXG4pOiB2b2lkIHtcbiAgY29uc3QgeyBub2RlTmFtZSwgdGFyZ2V0IH0gPSBlLmN1cnJlbnRUYXJnZXQgYXMgSFRNTEFuY2hvckVsZW1lbnRcbiAgaWYgKFxuICAgIG5vZGVOYW1lID09PSAnQScgJiZcbiAgICAoKHRhcmdldCAmJiB0YXJnZXQgIT09ICdfc2VsZicpIHx8XG4gICAgICBlLm1ldGFLZXkgfHxcbiAgICAgIGUuY3RybEtleSB8fFxuICAgICAgZS5zaGlmdEtleSB8fFxuICAgICAgKGUubmF0aXZlRXZlbnQgJiYgZS5uYXRpdmVFdmVudC53aGljaCA9PT0gMikpXG4gICkge1xuICAgIC8vIGlnbm9yZSBjbGljayBmb3IgbmV3IHRhYiAvIG5ldyB3aW5kb3cgYmVoYXZpb3JcbiAgICByZXR1cm5cbiAgfVxuXG4gIGlmICghaXNMb2NhbChocmVmKSkge1xuICAgIC8vIGlnbm9yZSBjbGljayBpZiBpdCdzIG91dHNpZGUgb3VyIHNjb3BlIChlLmcuIGh0dHBzOi8vZ29vZ2xlLmNvbSlcbiAgICByZXR1cm5cbiAgfVxuXG4gIGUucHJldmVudERlZmF1bHQoKVxuXG4gIC8vICBhdm9pZCBzY3JvbGwgZm9yIHVybHMgd2l0aCBhbmNob3IgcmVmc1xuICBpZiAoc2Nyb2xsID09IG51bGwpIHtcbiAgICBzY3JvbGwgPSBhcy5pbmRleE9mKCcjJykgPCAwXG4gIH1cblxuICAvLyByZXBsYWNlIHN0YXRlIGluc3RlYWQgb2YgcHVzaCBpZiBwcm9wIGlzIHByZXNlbnRcbiAgcm91dGVyW3JlcGxhY2UgPyAncmVwbGFjZScgOiAncHVzaCddKGhyZWYsIGFzLCB7IHNoYWxsb3cgfSkudGhlbihcbiAgICAoc3VjY2VzczogYm9vbGVhbikgPT4ge1xuICAgICAgaWYgKCFzdWNjZXNzKSByZXR1cm5cbiAgICAgIGlmIChzY3JvbGwpIHtcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICAgIGRvY3VtZW50LmJvZHkuZm9jdXMoKVxuICAgICAgfVxuICAgIH1cbiAgKVxufVxuXG5mdW5jdGlvbiBMaW5rKHByb3BzOiBSZWFjdC5Qcm9wc1dpdGhDaGlsZHJlbjxMaW5rUHJvcHM+KSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgLy8gVGhpcyBob29rIGlzIGluIGEgY29uZGl0aW9uYWwgYnV0IHRoYXQgaXMgb2sgYmVjYXVzZSBgcHJvY2Vzcy5lbnYuTk9ERV9FTlZgIG5ldmVyIGNoYW5nZXNcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcbiAgICBjb25zdCBoYXNXYXJuZWQgPSBSZWFjdC51c2VSZWYoZmFsc2UpXG4gICAgaWYgKHByb3BzLnByZWZldGNoICYmICFoYXNXYXJuZWQuY3VycmVudCkge1xuICAgICAgaGFzV2FybmVkLmN1cnJlbnQgPSB0cnVlXG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICdOZXh0LmpzIGF1dG8tcHJlZmV0Y2hlcyBhdXRvbWF0aWNhbGx5IGJhc2VkIG9uIHZpZXdwb3J0LiBUaGUgcHJlZmV0Y2ggYXR0cmlidXRlIGlzIG5vIGxvbmdlciBuZWVkZWQuIE1vcmU6IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL3ByZWZldGNoLXRydWUtZGVwcmVjYXRlZCdcbiAgICAgIClcbiAgICB9XG4gIH1cbiAgY29uc3QgcCA9IHByb3BzLnByZWZldGNoICE9PSBmYWxzZVxuXG4gIGNvbnN0IFtjaGlsZEVsbSwgc2V0Q2hpbGRFbG1dID0gUmVhY3QudXNlU3RhdGU8RWxlbWVudD4oKVxuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IHBhdGhuYW1lID0gKHJvdXRlciAmJiByb3V0ZXIucGF0aG5hbWUpIHx8ICcvJ1xuXG4gIGNvbnN0IHsgaHJlZiwgYXMgfSA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnN0IHJlc29sdmVkSHJlZiA9IHJlc29sdmVIcmVmKHBhdGhuYW1lLCBwcm9wcy5ocmVmKVxuICAgIHJldHVybiB7XG4gICAgICBocmVmOiByZXNvbHZlZEhyZWYsXG4gICAgICBhczogcHJvcHMuYXMgPyByZXNvbHZlSHJlZihwYXRobmFtZSwgcHJvcHMuYXMpIDogcmVzb2x2ZWRIcmVmLFxuICAgIH1cbiAgfSwgW3BhdGhuYW1lLCBwcm9wcy5ocmVmLCBwcm9wcy5hc10pXG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAocCAmJiBJbnRlcnNlY3Rpb25PYnNlcnZlciAmJiBjaGlsZEVsbSAmJiBjaGlsZEVsbS50YWdOYW1lKSB7XG4gICAgICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICAgICAgY29uc3QgaXNQcmVmZXRjaGVkID0gcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXNdXG4gICAgICBpZiAoIWlzUHJlZmV0Y2hlZCkge1xuICAgICAgICByZXR1cm4gbGlzdGVuVG9JbnRlcnNlY3Rpb25zKGNoaWxkRWxtLCAoKSA9PiB7XG4gICAgICAgICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcylcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtwLCBjaGlsZEVsbSwgaHJlZiwgYXMsIHJvdXRlcl0pXG5cbiAgbGV0IHsgY2hpbGRyZW4sIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbCB9ID0gcHJvcHNcbiAgLy8gRGVwcmVjYXRlZC4gV2FybmluZyBzaG93biBieSBwcm9wVHlwZSBjaGVjay4gSWYgdGhlIGNoaWxkcmVuIHByb3ZpZGVkIGlzIGEgc3RyaW5nICg8TGluaz5leGFtcGxlPC9MaW5rPikgd2Ugd3JhcCBpdCBpbiBhbiA8YT4gdGFnXG4gIGlmICh0eXBlb2YgY2hpbGRyZW4gPT09ICdzdHJpbmcnKSB7XG4gICAgY2hpbGRyZW4gPSA8YT57Y2hpbGRyZW59PC9hPlxuICB9XG5cbiAgLy8gVGhpcyB3aWxsIHJldHVybiB0aGUgZmlyc3QgY2hpbGQsIGlmIG11bHRpcGxlIGFyZSBwcm92aWRlZCBpdCB3aWxsIHRocm93IGFuIGVycm9yXG4gIGNvbnN0IGNoaWxkOiBhbnkgPSBDaGlsZHJlbi5vbmx5KGNoaWxkcmVuKVxuICBjb25zdCBjaGlsZFByb3BzOiB7XG4gICAgb25Nb3VzZUVudGVyPzogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICBvbkNsaWNrOiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgIGhyZWY/OiBzdHJpbmdcbiAgICByZWY/OiBhbnlcbiAgfSA9IHtcbiAgICByZWY6IChlbDogYW55KSA9PiB7XG4gICAgICBpZiAoZWwpIHNldENoaWxkRWxtKGVsKVxuXG4gICAgICBpZiAoY2hpbGQgJiYgdHlwZW9mIGNoaWxkID09PSAnb2JqZWN0JyAmJiBjaGlsZC5yZWYpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBjaGlsZC5yZWYgPT09ICdmdW5jdGlvbicpIGNoaWxkLnJlZihlbClcbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIGNoaWxkLnJlZiA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICBjaGlsZC5yZWYuY3VycmVudCA9IGVsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIG9uQ2xpY2s6IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uQ2xpY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY2hpbGQucHJvcHMub25DbGljayhlKVxuICAgICAgfVxuICAgICAgaWYgKCFlLmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgbGlua0NsaWNrZWQoZSwgcm91dGVyLCBocmVmLCBhcywgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsKVxuICAgICAgfVxuICAgIH0sXG4gIH1cblxuICBpZiAocCkge1xuICAgIGNoaWxkUHJvcHMub25Nb3VzZUVudGVyID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlcihlKVxuICAgICAgfVxuICAgICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcywgeyBwcmlvcml0eTogdHJ1ZSB9KVxuICAgIH1cbiAgfVxuXG4gIC8vIElmIGNoaWxkIGlzIGFuIDxhPiB0YWcgYW5kIGRvZXNuJ3QgaGF2ZSBhIGhyZWYgYXR0cmlidXRlLCBvciBpZiB0aGUgJ3Bhc3NIcmVmJyBwcm9wZXJ0eSBpc1xuICAvLyBkZWZpbmVkLCB3ZSBzcGVjaWZ5IHRoZSBjdXJyZW50ICdocmVmJywgc28gdGhhdCByZXBldGl0aW9uIGlzIG5vdCBuZWVkZWQgYnkgdGhlIHVzZXJcbiAgaWYgKHByb3BzLnBhc3NIcmVmIHx8IChjaGlsZC50eXBlID09PSAnYScgJiYgISgnaHJlZicgaW4gY2hpbGQucHJvcHMpKSkge1xuICAgIGNoaWxkUHJvcHMuaHJlZiA9IGFkZEJhc2VQYXRoKGFzKVxuICB9XG5cbiAgLy8gQWRkIHRoZSBlbmRpbmcgc2xhc2ggdG8gdGhlIHBhdGhzLiBTbywgd2UgY2FuIHNlcnZlIHRoZVxuICAvLyBcIjxwYWdlPi9pbmRleC5odG1sXCIgZGlyZWN0bHkuXG4gIGlmIChwcm9jZXNzLmVudi5fX05FWFRfRVhQT1JUX1RSQUlMSU5HX1NMQVNIKSB7XG4gICAgY29uc3QgcmV3cml0ZVVybEZvck5leHRFeHBvcnQgPSByZXF1aXJlKCcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3Jld3JpdGUtdXJsLWZvci1leHBvcnQnKVxuICAgICAgLnJld3JpdGVVcmxGb3JOZXh0RXhwb3J0XG4gICAgaWYgKFxuICAgICAgY2hpbGRQcm9wcy5ocmVmICYmXG4gICAgICB0eXBlb2YgX19ORVhUX0RBVEFfXyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgIF9fTkVYVF9EQVRBX18ubmV4dEV4cG9ydFxuICAgICkge1xuICAgICAgY2hpbGRQcm9wcy5ocmVmID0gcmV3cml0ZVVybEZvck5leHRFeHBvcnQoY2hpbGRQcm9wcy5ocmVmKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIGNoaWxkUHJvcHMpXG59XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICBjb25zdCB3YXJuID0gZXhlY09uY2UoY29uc29sZS5lcnJvcilcblxuICAvLyBUaGlzIG1vZHVsZSBnZXRzIHJlbW92ZWQgYnkgd2VicGFjay5JZ25vcmVQbHVnaW5cbiAgY29uc3QgUHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpXG4gIGNvbnN0IGV4YWN0ID0gcmVxdWlyZSgncHJvcC10eXBlcy1leGFjdCcpXG4gIC8vIEB0cy1pZ25vcmUgdGhlIHByb3BlcnR5IGlzIHN1cHBvcnRlZCwgd2hlbiBkZWNsYXJpbmcgaXQgb24gdGhlIGNsYXNzIGl0IG91dHB1dHMgYW4gZXh0cmEgYml0IG9mIGNvZGUgd2hpY2ggaXMgbm90IG5lZWRlZC5cbiAgTGluay5wcm9wVHlwZXMgPSBleGFjdCh7XG4gICAgaHJlZjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm9iamVjdF0pLmlzUmVxdWlyZWQsXG4gICAgYXM6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5vYmplY3RdKSxcbiAgICBwcmVmZXRjaDogUHJvcFR5cGVzLmJvb2wsXG4gICAgcmVwbGFjZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgc2hhbGxvdzogUHJvcFR5cGVzLmJvb2wsXG4gICAgcGFzc0hyZWY6IFByb3BUeXBlcy5ib29sLFxuICAgIHNjcm9sbDogUHJvcFR5cGVzLmJvb2wsXG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgUHJvcFR5cGVzLmVsZW1lbnQsXG4gICAgICAocHJvcHM6IGFueSwgcHJvcE5hbWU6IHN0cmluZykgPT4ge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHByb3BzW3Byb3BOYW1lXVxuXG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgd2FybihcbiAgICAgICAgICAgIGBXYXJuaW5nOiBZb3UncmUgdXNpbmcgYSBzdHJpbmcgZGlyZWN0bHkgaW5zaWRlIDxMaW5rPi4gVGhpcyB1c2FnZSBoYXMgYmVlbiBkZXByZWNhdGVkLiBQbGVhc2UgYWRkIGFuIDxhPiB0YWcgYXMgY2hpbGQgb2YgPExpbms+YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICB9LFxuICAgIF0pLmlzUmVxdWlyZWQsXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IExpbmtcbiIsIi8qKlxuICogUmVtb3ZlcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGlmIHRoZXJlIGlzIG9uZS4gUHJlc2VydmVzIHRoZSByb290IHBhdGggYC9gLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGguZW5kc1dpdGgoJy8nKSAmJiBwYXRoICE9PSAnLycgPyBwYXRoLnNsaWNlKDAsIC0xKSA6IHBhdGhcbn1cblxuLyoqXG4gKiBOb3JtYWxpemVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggYWNjb3JkaW5nIHRvIHRoZSBgdHJhaWxpbmdTbGFzaGAgb3B0aW9uXG4gKiBpbiBgbmV4dC5jb25maWcuanNgLlxuICovXG5leHBvcnQgY29uc3Qgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2ggPSBwcm9jZXNzLmVudi5fX05FWFRfVFJBSUxJTkdfU0xBU0hcbiAgPyAocGF0aDogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgICAgIGlmICgvXFwuW14vXStcXC8/JC8udGVzdChwYXRoKSkge1xuICAgICAgICByZXR1cm4gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aClcbiAgICAgIH0gZWxzZSBpZiAocGF0aC5lbmRzV2l0aCgnLycpKSB7XG4gICAgICAgIHJldHVybiBwYXRoXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcGF0aCArICcvJ1xuICAgICAgfVxuICAgIH1cbiAgOiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaFxuIiwiLyogZ2xvYmFsIHdpbmRvdyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJvdXRlciwgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBSb3V0ZXJDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0J1xuXG50eXBlIENsYXNzQXJndW1lbnRzPFQ+ID0gVCBleHRlbmRzIG5ldyAoLi4uYXJnczogaW5mZXIgVSkgPT4gYW55ID8gVSA6IGFueVxuXG50eXBlIFJvdXRlckFyZ3MgPSBDbGFzc0FyZ3VtZW50czx0eXBlb2YgUm91dGVyPlxuXG50eXBlIFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogUm91dGVyIHwgbnVsbFxuICByZWFkeUNhbGxiYWNrczogQXJyYXk8KCkgPT4gYW55PlxuICByZWFkeShjYjogKCkgPT4gYW55KTogdm9pZFxufVxuXG5leHBvcnQgeyBSb3V0ZXIsIE5leHRSb3V0ZXIgfVxuXG5leHBvcnQgdHlwZSBTaW5nbGV0b25Sb3V0ZXIgPSBTaW5nbGV0b25Sb3V0ZXJCYXNlICYgTmV4dFJvdXRlclxuXG5jb25zdCBzaW5nbGV0b25Sb3V0ZXI6IFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogbnVsbCwgLy8gaG9sZHMgdGhlIGFjdHVhbCByb3V0ZXIgaW5zdGFuY2VcbiAgcmVhZHlDYWxsYmFja3M6IFtdLFxuICByZWFkeShjYjogKCkgPT4gdm9pZCkge1xuICAgIGlmICh0aGlzLnJvdXRlcikgcmV0dXJuIGNiKClcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMucmVhZHlDYWxsYmFja3MucHVzaChjYilcbiAgICB9XG4gIH0sXG59XG5cbi8vIENyZWF0ZSBwdWJsaWMgcHJvcGVydGllcyBhbmQgbWV0aG9kcyBvZiB0aGUgcm91dGVyIGluIHRoZSBzaW5nbGV0b25Sb3V0ZXJcbmNvbnN0IHVybFByb3BlcnR5RmllbGRzID0gW1xuICAncGF0aG5hbWUnLFxuICAncm91dGUnLFxuICAncXVlcnknLFxuICAnYXNQYXRoJyxcbiAgJ2NvbXBvbmVudHMnLFxuICAnaXNGYWxsYmFjaycsXG4gICdiYXNlUGF0aCcsXG5dXG5jb25zdCByb3V0ZXJFdmVudHMgPSBbXG4gICdyb3V0ZUNoYW5nZVN0YXJ0JyxcbiAgJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLFxuICAncm91dGVDaGFuZ2VDb21wbGV0ZScsXG4gICdyb3V0ZUNoYW5nZUVycm9yJyxcbiAgJ2hhc2hDaGFuZ2VTdGFydCcsXG4gICdoYXNoQ2hhbmdlQ29tcGxldGUnLFxuXVxuY29uc3QgY29yZU1ldGhvZEZpZWxkcyA9IFtcbiAgJ3B1c2gnLFxuICAncmVwbGFjZScsXG4gICdyZWxvYWQnLFxuICAnYmFjaycsXG4gICdwcmVmZXRjaCcsXG4gICdiZWZvcmVQb3BTdGF0ZScsXG5dXG5cbi8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsICdldmVudHMnLCB7XG4gIGdldCgpIHtcbiAgICByZXR1cm4gUm91dGVyLmV2ZW50c1xuICB9LFxufSlcblxudXJsUHJvcGVydHlGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgLy8gSGVyZSB3ZSBuZWVkIHRvIHVzZSBPYmplY3QuZGVmaW5lUHJvcGVydHkgYmVjYXVzZSwgd2UgbmVlZCB0byByZXR1cm5cbiAgLy8gdGhlIHByb3BlcnR5IGFzc2lnbmVkIHRvIHRoZSBhY3R1YWwgcm91dGVyXG4gIC8vIFRoZSB2YWx1ZSBtaWdodCBnZXQgY2hhbmdlZCBhcyB3ZSBjaGFuZ2Ugcm91dGVzIGFuZCB0aGlzIGlzIHRoZVxuICAvLyBwcm9wZXIgd2F5IHRvIGFjY2VzcyBpdFxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCBmaWVsZCwge1xuICAgIGdldCgpIHtcbiAgICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgICAgcmV0dXJuIHJvdXRlcltmaWVsZF0gYXMgc3RyaW5nXG4gICAgfSxcbiAgfSlcbn0pXG5cbmNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgLy8gV2UgZG9uJ3QgcmVhbGx5IGtub3cgdGhlIHR5cGVzIGhlcmUsIHNvIHdlIGFkZCB0aGVtIGxhdGVyIGluc3RlYWRcbiAgOyhzaW5nbGV0b25Sb3V0ZXIgYXMgYW55KVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICB9XG59KVxuXG5yb3V0ZXJFdmVudHMuZm9yRWFjaCgoZXZlbnQpID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5KCgpID0+IHtcbiAgICBSb3V0ZXIuZXZlbnRzLm9uKGV2ZW50LCAoLi4uYXJncykgPT4ge1xuICAgICAgY29uc3QgZXZlbnRGaWVsZCA9IGBvbiR7ZXZlbnQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCl9JHtldmVudC5zdWJzdHJpbmcoXG4gICAgICAgIDFcbiAgICAgICl9YFxuICAgICAgY29uc3QgX3NpbmdsZXRvblJvdXRlciA9IHNpbmdsZXRvblJvdXRlciBhcyBhbnlcbiAgICAgIGlmIChfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSguLi5hcmdzKVxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tY29uc29sZVxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIHdoZW4gcnVubmluZyB0aGUgUm91dGVyIGV2ZW50OiAke2V2ZW50RmllbGR9YClcbiAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tY29uc29sZVxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYCR7ZXJyLm1lc3NhZ2V9XFxuJHtlcnIuc3RhY2t9YClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG59KVxuXG5mdW5jdGlvbiBnZXRSb3V0ZXIoKTogUm91dGVyIHtcbiAgaWYgKCFzaW5nbGV0b25Sb3V0ZXIucm91dGVyKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9XG4gICAgICAnTm8gcm91dGVyIGluc3RhbmNlIGZvdW5kLlxcbicgK1xuICAgICAgJ1lvdSBzaG91bGQgb25seSB1c2UgXCJuZXh0L3JvdXRlclwiIGluc2lkZSB0aGUgY2xpZW50IHNpZGUgb2YgeW91ciBhcHAuXFxuJ1xuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIEV4cG9ydCB0aGUgc2luZ2xldG9uUm91dGVyIGFuZCB0aGlzIGlzIHRoZSBwdWJsaWMgQVBJLlxuZXhwb3J0IGRlZmF1bHQgc2luZ2xldG9uUm91dGVyIGFzIFNpbmdsZXRvblJvdXRlclxuXG4vLyBSZWV4cG9ydCB0aGUgd2l0aFJvdXRlIEhPQ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB3aXRoUm91dGVyIH0gZnJvbSAnLi93aXRoLXJvdXRlcidcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVJvdXRlcigpOiBOZXh0Um91dGVyIHtcbiAgcmV0dXJuIFJlYWN0LnVzZUNvbnRleHQoUm91dGVyQ29udGV4dClcbn1cblxuLy8gSU5URVJOQUwgQVBJU1xuLy8gLS0tLS0tLS0tLS0tLVxuLy8gKGRvIG5vdCB1c2UgZm9sbG93aW5nIGV4cG9ydHMgaW5zaWRlIHRoZSBhcHApXG5cbi8vIENyZWF0ZSBhIHJvdXRlciBhbmQgYXNzaWduIGl0IGFzIHRoZSBzaW5nbGV0b24gaW5zdGFuY2UuXG4vLyBUaGlzIGlzIHVzZWQgaW4gY2xpZW50IHNpZGUgd2hlbiB3ZSBhcmUgaW5pdGlsaXppbmcgdGhlIGFwcC5cbi8vIFRoaXMgc2hvdWxkICoqbm90KiogdXNlIGluc2lkZSB0aGUgc2VydmVyLlxuZXhwb3J0IGNvbnN0IGNyZWF0ZVJvdXRlciA9ICguLi5hcmdzOiBSb3V0ZXJBcmdzKTogUm91dGVyID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJvdXRlciA9IG5ldyBSb3V0ZXIoLi4uYXJncylcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzLmZvckVhY2goKGNiKSA9PiBjYigpKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MgPSBbXVxuXG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBjcmVhdGUgdGhlIGB3aXRoUm91dGVyYCByb3V0ZXIgaW5zdGFuY2VcbmV4cG9ydCBmdW5jdGlvbiBtYWtlUHVibGljUm91dGVySW5zdGFuY2Uocm91dGVyOiBSb3V0ZXIpOiBOZXh0Um91dGVyIHtcbiAgY29uc3QgX3JvdXRlciA9IHJvdXRlciBhcyBhbnlcbiAgY29uc3QgaW5zdGFuY2UgPSB7fSBhcyBhbnlcblxuICBmb3IgKGNvbnN0IHByb3BlcnR5IG9mIHVybFByb3BlcnR5RmllbGRzKSB7XG4gICAgaWYgKHR5cGVvZiBfcm91dGVyW3Byb3BlcnR5XSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IE9iamVjdC5hc3NpZ24oe30sIF9yb3V0ZXJbcHJvcGVydHldKSAvLyBtYWtlcyBzdXJlIHF1ZXJ5IGlzIG5vdCBzdGF0ZWZ1bFxuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBfcm91dGVyW3Byb3BlcnR5XVxuICB9XG5cbiAgLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuICBpbnN0YW5jZS5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAgIGluc3RhbmNlW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgICAgcmV0dXJuIF9yb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gICAgfVxuICB9KVxuXG4gIHJldHVybiBpbnN0YW5jZVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTmV4dENvbXBvbmVudFR5cGUsIE5leHRQYWdlQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi91dGlscydcbmltcG9ydCB7IE5leHRSb3V0ZXIsIHVzZVJvdXRlciB9IGZyb20gJy4vcm91dGVyJ1xuXG5leHBvcnQgdHlwZSBXaXRoUm91dGVyUHJvcHMgPSB7XG4gIHJvdXRlcjogTmV4dFJvdXRlclxufVxuXG5leHBvcnQgdHlwZSBFeGNsdWRlUm91dGVyUHJvcHM8UD4gPSBQaWNrPFxuICBQLFxuICBFeGNsdWRlPGtleW9mIFAsIGtleW9mIFdpdGhSb3V0ZXJQcm9wcz5cbj5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2l0aFJvdXRlcjxcbiAgUCBleHRlbmRzIFdpdGhSb3V0ZXJQcm9wcyxcbiAgQyA9IE5leHRQYWdlQ29udGV4dFxuPihcbiAgQ29tcG9zZWRDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPEMsIGFueSwgUD5cbik6IFJlYWN0LkNvbXBvbmVudFR5cGU8RXhjbHVkZVJvdXRlclByb3BzPFA+PiB7XG4gIGZ1bmN0aW9uIFdpdGhSb3V0ZXJXcmFwcGVyKHByb3BzOiBhbnkpIHtcbiAgICByZXR1cm4gPENvbXBvc2VkQ29tcG9uZW50IHJvdXRlcj17dXNlUm91dGVyKCl9IHsuLi5wcm9wc30gLz5cbiAgfVxuXG4gIFdpdGhSb3V0ZXJXcmFwcGVyLmdldEluaXRpYWxQcm9wcyA9IENvbXBvc2VkQ29tcG9uZW50LmdldEluaXRpYWxQcm9wc1xuICAvLyBUaGlzIGlzIG5lZWRlZCB0byBhbGxvdyBjaGVja2luZyBmb3IgY3VzdG9tIGdldEluaXRpYWxQcm9wcyBpbiBfYXBwXG4gIDsoV2l0aFJvdXRlcldyYXBwZXIgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzID0gKENvbXBvc2VkQ29tcG9uZW50IGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wc1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNvbnN0IG5hbWUgPVxuICAgICAgQ29tcG9zZWRDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9zZWRDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbiAgICBXaXRoUm91dGVyV3JhcHBlci5kaXNwbGF5TmFtZSA9IGB3aXRoUm91dGVyKCR7bmFtZX0pYFxuICB9XG5cbiAgcmV0dXJuIFdpdGhSb3V0ZXJXcmFwcGVyXG59XG4iLCIvKlxuTUlUIExpY2Vuc2VcblxuQ29weXJpZ2h0IChjKSBKYXNvbiBNaWxsZXIgKGh0dHBzOi8vamFzb25mb3JtYXQuY29tLylcblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuKi9cblxuLy8gVGhpcyBmaWxlIGlzIGJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9kZXZlbG9waXQvbWl0dC9ibG9iL3YxLjEuMy9zcmMvaW5kZXguanNcbi8vIEl0J3MgYmVlbiBlZGl0ZWQgZm9yIHRoZSBuZWVkcyBvZiB0aGlzIHNjcmlwdFxuLy8gU2VlIHRoZSBMSUNFTlNFIGF0IHRoZSB0b3Agb2YgdGhlIGZpbGVcblxudHlwZSBIYW5kbGVyID0gKC4uLmV2dHM6IGFueVtdKSA9PiB2b2lkXG5cbmV4cG9ydCB0eXBlIE1pdHRFbWl0dGVyID0ge1xuICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSk6IHZvaWRcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWl0dCgpOiBNaXR0RW1pdHRlciB7XG4gIGNvbnN0IGFsbDogeyBbczogc3RyaW5nXTogSGFuZGxlcltdIH0gPSBPYmplY3QuY3JlYXRlKG51bGwpXG5cbiAgcmV0dXJuIHtcbiAgICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIDsoYWxsW3R5cGVdIHx8IChhbGxbdHlwZV0gPSBbXSkpLnB1c2goaGFuZGxlcilcbiAgICB9LFxuXG4gICAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgaWYgKGFsbFt0eXBlXSkge1xuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYml0d2lzZVxuICAgICAgICBhbGxbdHlwZV0uc3BsaWNlKGFsbFt0eXBlXS5pbmRleE9mKGhhbmRsZXIpID4+PiAwLCAxKVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgIDsoYWxsW3R5cGVdIHx8IFtdKS5zbGljZSgpLm1hcCgoaGFuZGxlcjogSGFuZGxlcikgPT4ge1xuICAgICAgICBoYW5kbGVyKC4uLmV2dHMpXG4gICAgICB9KVxuICAgIH0sXG4gIH1cbn1cbiIsIi8qIGdsb2JhbCBfX05FWFRfREFUQV9fICovXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1jb25zb2xlXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IG1pdHQsIHsgTWl0dEVtaXR0ZXIgfSBmcm9tICcuLi9taXR0J1xuaW1wb3J0IHtcbiAgQXBwQ29udGV4dFR5cGUsXG4gIGZvcm1hdFdpdGhWYWxpZGF0aW9uLFxuICBnZXRVUkwsXG4gIGxvYWRHZXRJbml0aWFsUHJvcHMsXG4gIE5leHRQYWdlQ29udGV4dCxcbiAgU1QsXG59IGZyb20gJy4uL3V0aWxzJ1xuaW1wb3J0IHsgaXNEeW5hbWljUm91dGUgfSBmcm9tICcuL3V0aWxzL2lzLWR5bmFtaWMnXG5pbXBvcnQgeyBnZXRSb3V0ZU1hdGNoZXIgfSBmcm9tICcuL3V0aWxzL3JvdXRlLW1hdGNoZXInXG5pbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi91dGlscy9yb3V0ZS1yZWdleCdcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3V0aWxzL3NlYXJjaC1wYXJhbXMtdG8tdXJsLXF1ZXJ5J1xuaW1wb3J0IHsgcGFyc2VSZWxhdGl2ZVVybCB9IGZyb20gJy4vdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsJ1xuaW1wb3J0IHtcbiAgcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gsXG4gIG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoLFxufSBmcm9tICcuLi8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoJ1xuXG5jb25zdCBiYXNlUGF0aCA9IChwcm9jZXNzLmVudi5fX05FWFRfUk9VVEVSX0JBU0VQQVRIIGFzIHN0cmluZykgfHwgJydcblxuZnVuY3Rpb24gYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpIHtcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24obmV3IEVycm9yKCdSb3V0ZSBDYW5jZWxsZWQnKSwge1xuICAgIGNhbmNlbGxlZDogdHJ1ZSxcbiAgfSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBiYXNlUGF0aFxuICAgID8gcGF0aCA9PT0gJy8nXG4gICAgICA/IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKGJhc2VQYXRoKVxuICAgICAgOiBiYXNlUGF0aCArIHBhdGhcbiAgICA6IHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLnNsaWNlKGJhc2VQYXRoLmxlbmd0aCkgfHwgJy8nXG59XG5cbnR5cGUgVXJsID0gVXJsT2JqZWN0IHwgc3RyaW5nXG5cbi8qKlxuICogUmVzb2x2ZXMgYSBnaXZlbiBoeXBlcmxpbmsgd2l0aCBhIGNlcnRhaW4gcm91dGVyIHN0YXRlIChiYXNlUGF0aCBub3QgaW5jbHVkZWQpLlxuICogUHJlc2VydmVzIGFic29sdXRlIHVybHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlSHJlZihjdXJyZW50UGF0aDogc3RyaW5nLCBocmVmOiBVcmwpOiBzdHJpbmcge1xuICAvLyB3ZSB1c2UgYSBkdW1teSBiYXNlIHVybCBmb3IgcmVsYXRpdmUgdXJsc1xuICBjb25zdCBiYXNlID0gbmV3IFVSTChjdXJyZW50UGF0aCwgJ2h0dHA6Ly9uJylcbiAgY29uc3QgdXJsQXNTdHJpbmcgPVxuICAgIHR5cGVvZiBocmVmID09PSAnc3RyaW5nJyA/IGhyZWYgOiBmb3JtYXRXaXRoVmFsaWRhdGlvbihocmVmKVxuICBjb25zdCBmaW5hbFVybCA9IG5ldyBVUkwodXJsQXNTdHJpbmcsIGJhc2UpXG4gIGZpbmFsVXJsLnBhdGhuYW1lID0gbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2goZmluYWxVcmwucGF0aG5hbWUpXG4gIC8vIGlmIHRoZSBvcmlnaW4gZGlkbid0IGNoYW5nZSwgaXQgbWVhbnMgd2UgcmVjZWl2ZWQgYSByZWxhdGl2ZSBocmVmXG4gIHJldHVybiBmaW5hbFVybC5vcmlnaW4gPT09IGJhc2Uub3JpZ2luXG4gICAgPyBmaW5hbFVybC5ocmVmLnNsaWNlKGZpbmFsVXJsLm9yaWdpbi5sZW5ndGgpXG4gICAgOiBmaW5hbFVybC5ocmVmXG59XG5cbmZ1bmN0aW9uIHByZXBhcmVVcmxBcyhyb3V0ZXI6IE5leHRSb3V0ZXIsIHVybDogVXJsLCBhczogVXJsKSB7XG4gIC8vIElmIHVybCBhbmQgYXMgcHJvdmlkZWQgYXMgYW4gb2JqZWN0IHJlcHJlc2VudGF0aW9uLFxuICAvLyB3ZSdsbCBmb3JtYXQgdGhlbSBpbnRvIHRoZSBzdHJpbmcgdmVyc2lvbiBoZXJlLlxuICByZXR1cm4ge1xuICAgIHVybDogYWRkQmFzZVBhdGgocmVzb2x2ZUhyZWYocm91dGVyLnBhdGhuYW1lLCB1cmwpKSxcbiAgICBhczogYXMgPyBhZGRCYXNlUGF0aChyZXNvbHZlSHJlZihyb3V0ZXIucGF0aG5hbWUsIGFzKSkgOiBhcyxcbiAgfVxufVxuXG5mdW5jdGlvbiB0cnlQYXJzZVJlbGF0aXZlVXJsKFxuICB1cmw6IHN0cmluZ1xuKTogbnVsbCB8IFJldHVyblR5cGU8dHlwZW9mIHBhcnNlUmVsYXRpdmVVcmw+IHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBJbnZhbGlkIGhyZWYgcGFzc2VkIHRvIHJvdXRlcjogJHt1cmx9IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2ludmFsaWQtaHJlZi1wYXNzZWRgXG4gICAgICApXG4gICAgfVxuICAgIHJldHVybiBudWxsXG4gIH1cbn1cblxudHlwZSBDb21wb25lbnRSZXMgPSB7IHBhZ2U6IENvbXBvbmVudFR5cGU7IG1vZDogYW55IH1cblxuZXhwb3J0IHR5cGUgQmFzZVJvdXRlciA9IHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG59XG5cbmV4cG9ydCB0eXBlIE5leHRSb3V0ZXIgPSBCYXNlUm91dGVyICZcbiAgUGljazxcbiAgICBSb3V0ZXIsXG4gICAgfCAncHVzaCdcbiAgICB8ICdyZXBsYWNlJ1xuICAgIHwgJ3JlbG9hZCdcbiAgICB8ICdiYWNrJ1xuICAgIHwgJ3ByZWZldGNoJ1xuICAgIHwgJ2JlZm9yZVBvcFN0YXRlJ1xuICAgIHwgJ2V2ZW50cydcbiAgICB8ICdpc0ZhbGxiYWNrJ1xuICA+XG5cbmV4cG9ydCB0eXBlIFByZWZldGNoT3B0aW9ucyA9IHtcbiAgcHJpb3JpdHk/OiBib29sZWFuXG59XG5cbnR5cGUgUm91dGVJbmZvID0ge1xuICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbiAgcHJvcHM/OiBhbnlcbiAgZXJyPzogRXJyb3JcbiAgZXJyb3I/OiBhbnlcbn1cblxudHlwZSBTdWJzY3JpcHRpb24gPSAoZGF0YTogUm91dGVJbmZvLCBBcHA/OiBDb21wb25lbnRUeXBlKSA9PiBQcm9taXNlPHZvaWQ+XG5cbnR5cGUgQmVmb3JlUG9wU3RhdGVDYWxsYmFjayA9IChzdGF0ZTogYW55KSA9PiBib29sZWFuXG5cbnR5cGUgQ29tcG9uZW50TG9hZENhbmNlbCA9ICgoKSA9PiB2b2lkKSB8IG51bGxcblxudHlwZSBIaXN0b3J5TWV0aG9kID0gJ3JlcGxhY2VTdGF0ZScgfCAncHVzaFN0YXRlJ1xuXG5jb25zdCBtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiA9XG4gIHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04gJiZcbiAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgJ3Njcm9sbFJlc3RvcmF0aW9uJyBpbiB3aW5kb3cuaGlzdG9yeVxuXG5mdW5jdGlvbiBmZXRjaFJldHJ5KHVybDogc3RyaW5nLCBhdHRlbXB0czogbnVtYmVyKTogUHJvbWlzZTxhbnk+IHtcbiAgcmV0dXJuIGZldGNoKHVybCwge1xuICAgIC8vIENvb2tpZXMgYXJlIHJlcXVpcmVkIHRvIGJlIHByZXNlbnQgZm9yIE5leHQuanMnIFNTRyBcIlByZXZpZXcgTW9kZVwiLlxuICAgIC8vIENvb2tpZXMgbWF5IGFsc28gYmUgcmVxdWlyZWQgZm9yIGBnZXRTZXJ2ZXJTaWRlUHJvcHNgLlxuICAgIC8vXG4gICAgLy8gPiBgZmV0Y2hgIHdvbuKAmXQgc2VuZCBjb29raWVzLCB1bmxlc3MgeW91IHNldCB0aGUgY3JlZGVudGlhbHMgaW5pdFxuICAgIC8vID4gb3B0aW9uLlxuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GZXRjaF9BUEkvVXNpbmdfRmV0Y2hcbiAgICAvL1xuICAgIC8vID4gRm9yIG1heGltdW0gYnJvd3NlciBjb21wYXRpYmlsaXR5IHdoZW4gaXQgY29tZXMgdG8gc2VuZGluZyAmXG4gICAgLy8gPiByZWNlaXZpbmcgY29va2llcywgYWx3YXlzIHN1cHBseSB0aGUgYGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nYFxuICAgIC8vID4gb3B0aW9uIGluc3RlYWQgb2YgcmVseWluZyBvbiB0aGUgZGVmYXVsdC5cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZ2l0aHViL2ZldGNoI2NhdmVhdHNcbiAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcbiAgfSkudGhlbigocmVzKSA9PiB7XG4gICAgaWYgKCFyZXMub2spIHtcbiAgICAgIGlmIChhdHRlbXB0cyA+IDEgJiYgcmVzLnN0YXR1cyA+PSA1MDApIHtcbiAgICAgICAgcmV0dXJuIGZldGNoUmV0cnkodXJsLCBhdHRlbXB0cyAtIDEpXG4gICAgICB9XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApXG4gICAgfVxuXG4gICAgcmV0dXJuIHJlcy5qc29uKClcbiAgfSlcbn1cblxuZnVuY3Rpb24gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZjogc3RyaW5nLCBpc1NlcnZlclJlbmRlcjogYm9vbGVhbikge1xuICByZXR1cm4gZmV0Y2hSZXRyeShkYXRhSHJlZiwgaXNTZXJ2ZXJSZW5kZXIgPyAzIDogMSkuY2F0Y2goKGVycjogRXJyb3IpID0+IHtcbiAgICAvLyBXZSBzaG91bGQgb25seSB0cmlnZ2VyIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbiBpZiB0aGlzIHdhcyBjYXVzZWRcbiAgICAvLyBvbiBhIGNsaWVudC1zaWRlIHRyYW5zaXRpb24uIE90aGVyd2lzZSwgd2UnZCBnZXQgaW50byBhbiBpbmZpbml0ZVxuICAgIC8vIGxvb3AuXG4gICAgaWYgKCFpc1NlcnZlclJlbmRlcikge1xuICAgICAgOyhlcnIgYXMgYW55KS5jb2RlID0gJ1BBR0VfTE9BRF9FUlJPUidcbiAgICB9XG4gICAgdGhyb3cgZXJyXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvdXRlciBpbXBsZW1lbnRzIEJhc2VSb3V0ZXIge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcblxuICAvKipcbiAgICogTWFwIG9mIGFsbCBjb21wb25lbnRzIGxvYWRlZCBpbiBgUm91dGVyYFxuICAgKi9cbiAgY29tcG9uZW50czogeyBbcGF0aG5hbWU6IHN0cmluZ106IFJvdXRlSW5mbyB9XG4gIC8vIFN0YXRpYyBEYXRhIENhY2hlXG4gIHNkYzogeyBbYXNQYXRoOiBzdHJpbmddOiBvYmplY3QgfSA9IHt9XG4gIHN1YjogU3Vic2NyaXB0aW9uXG4gIGNsYzogQ29tcG9uZW50TG9hZENhbmNlbFxuICBwYWdlTG9hZGVyOiBhbnlcbiAgX2JwczogQmVmb3JlUG9wU3RhdGVDYWxsYmFjayB8IHVuZGVmaW5lZFxuICBldmVudHM6IE1pdHRFbWl0dGVyXG4gIF93cmFwQXBwOiAoQXBwOiBDb21wb25lbnRUeXBlKSA9PiBhbnlcbiAgaXNTc3I6IGJvb2xlYW5cbiAgaXNGYWxsYmFjazogYm9vbGVhblxuICBfaW5GbGlnaHRSb3V0ZT86IHN0cmluZ1xuXG4gIHN0YXRpYyBldmVudHM6IE1pdHRFbWl0dGVyID0gbWl0dCgpXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICB7XG4gICAgICBpbml0aWFsUHJvcHMsXG4gICAgICBwYWdlTG9hZGVyLFxuICAgICAgQXBwLFxuICAgICAgd3JhcEFwcCxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIGVycixcbiAgICAgIHN1YnNjcmlwdGlvbixcbiAgICAgIGlzRmFsbGJhY2ssXG4gICAgfToge1xuICAgICAgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb25cbiAgICAgIGluaXRpYWxQcm9wczogYW55XG4gICAgICBwYWdlTG9hZGVyOiBhbnlcbiAgICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICAgICAgQXBwOiBDb21wb25lbnRUeXBlXG4gICAgICB3cmFwQXBwOiAoQXBwOiBDb21wb25lbnRUeXBlKSA9PiBhbnlcbiAgICAgIGVycj86IEVycm9yXG4gICAgICBpc0ZhbGxiYWNrOiBib29sZWFuXG4gICAgfVxuICApIHtcbiAgICAvLyByZXByZXNlbnRzIHRoZSBjdXJyZW50IGNvbXBvbmVudCBrZXlcbiAgICB0aGlzLnJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG5cbiAgICAvLyBzZXQgdXAgdGhlIGNvbXBvbmVudCBjYWNoZSAoYnkgcm91dGUga2V5cylcbiAgICB0aGlzLmNvbXBvbmVudHMgPSB7fVxuICAgIC8vIFdlIHNob3VsZCBub3Qga2VlcCB0aGUgY2FjaGUsIGlmIHRoZXJlJ3MgYW4gZXJyb3JcbiAgICAvLyBPdGhlcndpc2UsIHRoaXMgY2F1c2UgaXNzdWVzIHdoZW4gd2hlbiBnb2luZyBiYWNrIGFuZFxuICAgIC8vIGNvbWUgYWdhaW4gdG8gdGhlIGVycm9yZWQgcGFnZS5cbiAgICBpZiAocGF0aG5hbWUgIT09ICcvX2Vycm9yJykge1xuICAgICAgdGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdID0ge1xuICAgICAgICBDb21wb25lbnQsXG4gICAgICAgIHByb3BzOiBpbml0aWFsUHJvcHMsXG4gICAgICAgIGVycixcbiAgICAgICAgX19OX1NTRzogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NHLFxuICAgICAgICBfX05fU1NQOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU1AsXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5jb21wb25lbnRzWycvX2FwcCddID0geyBDb21wb25lbnQ6IEFwcCB9XG5cbiAgICAvLyBCYWNrd2FyZHMgY29tcGF0IGZvciBSb3V0ZXIucm91dGVyLmV2ZW50c1xuICAgIC8vIFRPRE86IFNob3VsZCBiZSByZW1vdmUgdGhlIGZvbGxvd2luZyBtYWpvciB2ZXJzaW9uIGFzIGl0IHdhcyBuZXZlciBkb2N1bWVudGVkXG4gICAgdGhpcy5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgICB0aGlzLnBhZ2VMb2FkZXIgPSBwYWdlTG9hZGVyXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgLy8gaWYgYXV0byBwcmVyZW5kZXJlZCBhbmQgZHluYW1pYyByb3V0ZSB3YWl0IHRvIHVwZGF0ZSBhc1BhdGhcbiAgICAvLyB1bnRpbCBhZnRlciBtb3VudCB0byBwcmV2ZW50IGh5ZHJhdGlvbiBtaXNtYXRjaFxuICAgIHRoaXMuYXNQYXRoID1cbiAgICAgIC8vIEB0cy1pZ25vcmUgdGhpcyBpcyB0ZW1wb3JhcmlseSBnbG9iYWwgKGF0dGFjaGVkIHRvIHdpbmRvdylcbiAgICAgIGlzRHluYW1pY1JvdXRlKHBhdGhuYW1lKSAmJiBfX05FWFRfREFUQV9fLmF1dG9FeHBvcnQgPyBwYXRobmFtZSA6IGFzXG4gICAgdGhpcy5iYXNlUGF0aCA9IGJhc2VQYXRoXG4gICAgdGhpcy5zdWIgPSBzdWJzY3JpcHRpb25cbiAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB0aGlzLl93cmFwQXBwID0gd3JhcEFwcFxuICAgIC8vIG1ha2Ugc3VyZSB0byBpZ25vcmUgZXh0cmEgcG9wU3RhdGUgaW4gc2FmYXJpIG9uIG5hdmlnYXRpbmdcbiAgICAvLyBiYWNrIGZyb20gZXh0ZXJuYWwgc2l0ZVxuICAgIHRoaXMuaXNTc3IgPSB0cnVlXG5cbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBpc0ZhbGxiYWNrXG5cbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIG1ha2Ugc3VyZSBcImFzXCIgZG9lc24ndCBzdGFydCB3aXRoIGRvdWJsZSBzbGFzaGVzIG9yIGVsc2UgaXQgY2FuXG4gICAgICAvLyB0aHJvdyBhbiBlcnJvciBhcyBpdCdzIGNvbnNpZGVyZWQgaW52YWxpZFxuICAgICAgaWYgKGFzLnN1YnN0cigwLCAyKSAhPT0gJy8vJykge1xuICAgICAgICAvLyBpbiBvcmRlciBmb3IgYGUuc3RhdGVgIHRvIHdvcmsgb24gdGhlIGBvbnBvcHN0YXRlYCBldmVudFxuICAgICAgICAvLyB3ZSBoYXZlIHRvIHJlZ2lzdGVyIHRoZSBpbml0aWFsIHJvdXRlIHVwb24gaW5pdGlhbGl6YXRpb25cblxuICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lKSwgcXVlcnkgfSksXG4gICAgICAgICAgZ2V0VVJMKClcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB0aGlzLm9uUG9wU3RhdGUpXG5cbiAgICAgIC8vIGVuYWJsZSBjdXN0b20gc2Nyb2xsIHJlc3RvcmF0aW9uIGhhbmRsaW5nIHdoZW4gYXZhaWxhYmxlXG4gICAgICAvLyBvdGhlcndpc2UgZmFsbGJhY2sgdG8gYnJvd3NlcidzIGRlZmF1bHQgaGFuZGxpbmdcbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnNjcm9sbFJlc3RvcmF0aW9uID0gJ21hbnVhbCdcblxuICAgICAgICAgIGxldCBzY3JvbGxEZWJvdW5jZVRpbWVvdXQ6IHVuZGVmaW5lZCB8IE5vZGVKUy5UaW1lb3V0XG5cbiAgICAgICAgICBjb25zdCBkZWJvdW5jZWRTY3JvbGxTYXZlID0gKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHNjcm9sbERlYm91bmNlVGltZW91dCkgY2xlYXJUaW1lb3V0KHNjcm9sbERlYm91bmNlVGltZW91dClcblxuICAgICAgICAgICAgc2Nyb2xsRGVib3VuY2VUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHsgdXJsLCBhczogY3VyQXMsIG9wdGlvbnMgfSA9IGhpc3Rvcnkuc3RhdGVcbiAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgICAgICAgICB1cmwsXG4gICAgICAgICAgICAgICAgY3VyQXMsXG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucywge1xuICAgICAgICAgICAgICAgICAgX05fWDogd2luZG93LnNjcm9sbFgsXG4gICAgICAgICAgICAgICAgICBfTl9ZOiB3aW5kb3cuc2Nyb2xsWSxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9LCAxMClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZGVib3VuY2VkU2Nyb2xsU2F2ZSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIEBkZXByZWNhdGVkIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5IGV2ZW4gdGhvdWdoIGl0J3MgYSBwcml2YXRlIG1ldGhvZC5cbiAgc3RhdGljIF9yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCh1cmw6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9FWFBPUlRfVFJBSUxJTkdfU0xBU0gpIHtcbiAgICAgIGNvbnN0IHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0ID0gcmVxdWlyZSgnLi9yZXdyaXRlLXVybC1mb3ItZXhwb3J0JylcbiAgICAgICAgLnJld3JpdGVVcmxGb3JOZXh0RXhwb3J0XG4gICAgICByZXR1cm4gcmV3cml0ZVVybEZvck5leHRFeHBvcnQodXJsKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdXJsXG4gICAgfVxuICB9XG5cbiAgb25Qb3BTdGF0ZSA9IChlOiBQb3BTdGF0ZUV2ZW50KTogdm9pZCA9PiB7XG4gICAgaWYgKCFlLnN0YXRlKSB7XG4gICAgICAvLyBXZSBnZXQgc3RhdGUgYXMgdW5kZWZpbmVkIGZvciB0d28gcmVhc29ucy5cbiAgICAgIC8vICAxLiBXaXRoIG9sZGVyIHNhZmFyaSAoPCA4KSBhbmQgb2xkZXIgY2hyb21lICg8IDM0KVxuICAgICAgLy8gIDIuIFdoZW4gdGhlIFVSTCBjaGFuZ2VkIHdpdGggI1xuICAgICAgLy9cbiAgICAgIC8vIEluIHRoZSBib3RoIGNhc2VzLCB3ZSBkb24ndCBuZWVkIHRvIHByb2NlZWQgYW5kIGNoYW5nZSB0aGUgcm91dGUuXG4gICAgICAvLyAoYXMgaXQncyBhbHJlYWR5IGNoYW5nZWQpXG4gICAgICAvLyBCdXQgd2UgY2FuIHNpbXBseSByZXBsYWNlIHRoZSBzdGF0ZSB3aXRoIHRoZSBuZXcgY2hhbmdlcy5cbiAgICAgIC8vIEFjdHVhbGx5LCBmb3IgKDEpIHdlIGRvbid0IG5lZWQgdG8gbm90aGluZy4gQnV0IGl0J3MgaGFyZCB0byBkZXRlY3QgdGhhdCBldmVudC5cbiAgICAgIC8vIFNvLCBkb2luZyB0aGUgZm9sbG93aW5nIGZvciAoMSkgZG9lcyBubyBoYXJtLlxuICAgICAgY29uc3QgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHRoaXNcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZSksIHF1ZXJ5IH0pLFxuICAgICAgICBnZXRVUkwoKVxuICAgICAgKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgeyB1cmwsIGFzLCBvcHRpb25zLCBfX04gfSA9IGUuc3RhdGVcbiAgICBpZiAoIV9fTikge1xuICAgICAgLy8gdGhpcyBoaXN0b3J5IHN0YXRlIHdhc24ndCBjcmVhdGVkIGJ5IG5leHQuanMgc28gaXQgY2FuIGJlIGlnbm9yZWRcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIC8vIE1ha2Ugc3VyZSB3ZSBkb24ndCByZS1yZW5kZXIgb24gaW5pdGlhbCBsb2FkLFxuICAgIC8vIGNhbiBiZSBjYXVzZWQgYnkgbmF2aWdhdGluZyBiYWNrIGZyb20gYW4gZXh0ZXJuYWwgc2l0ZVxuICAgIGlmICh0aGlzLmlzU3NyICYmIGFzID09PSB0aGlzLmFzUGF0aCAmJiBwYXRobmFtZSA9PT0gdGhpcy5wYXRobmFtZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGRvd25zdHJlYW0gYXBwbGljYXRpb24gcmV0dXJucyBmYWxzeSwgcmV0dXJuLlxuICAgIC8vIFRoZXkgd2lsbCB0aGVuIGJlIHJlc3BvbnNpYmxlIGZvciBoYW5kbGluZyB0aGUgZXZlbnQuXG4gICAgaWYgKHRoaXMuX2JwcyAmJiAhdGhpcy5fYnBzKGUuc3RhdGUpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKHR5cGVvZiB1cmwgPT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiBhcyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICdgcG9wc3RhdGVgIGV2ZW50IHRyaWdnZXJlZCBidXQgYGV2ZW50LnN0YXRlYCBkaWQgbm90IGhhdmUgYHVybGAgb3IgYGFzYCBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9wb3BzdGF0ZS1zdGF0ZS1lbXB0eSdcbiAgICAgICAgKVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIHVwZGF0ZShyb3V0ZTogc3RyaW5nLCBtb2Q6IGFueSkge1xuICAgIGNvbnN0IENvbXBvbmVudDogQ29tcG9uZW50VHlwZSA9IG1vZC5kZWZhdWx0IHx8IG1vZFxuICAgIGNvbnN0IGRhdGEgPSB0aGlzLmNvbXBvbmVudHNbcm91dGVdXG4gICAgaWYgKCFkYXRhKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYENhbm5vdCB1cGRhdGUgdW5hdmFpbGFibGUgcm91dGU6ICR7cm91dGV9YClcbiAgICB9XG5cbiAgICBjb25zdCBuZXdEYXRhID0gT2JqZWN0LmFzc2lnbih7fSwgZGF0YSwge1xuICAgICAgQ29tcG9uZW50LFxuICAgICAgX19OX1NTRzogbW9kLl9fTl9TU0csXG4gICAgICBfX05fU1NQOiBtb2QuX19OX1NTUCxcbiAgICB9KVxuICAgIHRoaXMuY29tcG9uZW50c1tyb3V0ZV0gPSBuZXdEYXRhXG5cbiAgICAvLyBwYWdlcy9fYXBwLmpzIHVwZGF0ZWRcbiAgICBpZiAocm91dGUgPT09ICcvX2FwcCcpIHtcbiAgICAgIHRoaXMubm90aWZ5KHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSlcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChyb3V0ZSA9PT0gdGhpcy5yb3V0ZSkge1xuICAgICAgdGhpcy5ub3RpZnkobmV3RGF0YSlcbiAgICB9XG4gIH1cblxuICByZWxvYWQoKTogdm9pZCB7XG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXG4gIH1cblxuICAvKipcbiAgICogR28gYmFjayBpbiBoaXN0b3J5XG4gICAqL1xuICBiYWNrKCkge1xuICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHB1c2hTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICBwdXNoKHVybDogVXJsLCBhczogVXJsID0gdXJsLCBvcHRpb25zID0ge30pIHtcbiAgICA7KHsgdXJsLCBhcyB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKVxuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncHVzaFN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGByZXBsYWNlU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcmVwbGFjZSh1cmw6IFVybCwgYXM6IFVybCA9IHVybCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgOyh7IHVybCwgYXMgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSlcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3JlcGxhY2VTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICBhc3luYyBjaGFuZ2UoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzOiBzdHJpbmcsXG4gICAgb3B0aW9uczogYW55XG4gICk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIGlmICghb3B0aW9ucy5faCkge1xuICAgICAgdGhpcy5pc1NzciA9IGZhbHNlXG4gICAgfVxuICAgIC8vIG1hcmtpbmcgcm91dGUgY2hhbmdlcyBhcyBhIG5hdmlnYXRpb24gc3RhcnQgZW50cnlcbiAgICBpZiAoU1QpIHtcbiAgICAgIHBlcmZvcm1hbmNlLm1hcmsoJ3JvdXRlQ2hhbmdlJylcbiAgICB9XG5cbiAgICAvLyBBZGQgdGhlIGVuZGluZyBzbGFzaCB0byB0aGUgcGF0aHMuIFNvLCB3ZSBjYW4gc2VydmUgdGhlXG4gICAgLy8gXCI8cGFnZT4vaW5kZXguaHRtbFwiIGRpcmVjdGx5IGZvciB0aGUgU1NSIHBhZ2UuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9FWFBPUlRfVFJBSUxJTkdfU0xBU0gpIHtcbiAgICAgIGNvbnN0IHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0ID0gcmVxdWlyZSgnLi9yZXdyaXRlLXVybC1mb3ItZXhwb3J0JylcbiAgICAgICAgLnJld3JpdGVVcmxGb3JOZXh0RXhwb3J0XG4gICAgICAvLyBAdHMtaWdub3JlIHRoaXMgaXMgdGVtcG9yYXJpbHkgZ2xvYmFsIChhdHRhY2hlZCB0byB3aW5kb3cpXG4gICAgICBpZiAoX19ORVhUX0RBVEFfXy5uZXh0RXhwb3J0KSB7XG4gICAgICAgIGFzID0gcmV3cml0ZVVybEZvck5leHRFeHBvcnQoYXMpXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2luRmxpZ2h0Um91dGUpIHtcbiAgICAgIHRoaXMuYWJvcnRDb21wb25lbnRMb2FkKHRoaXMuX2luRmxpZ2h0Um91dGUpXG4gICAgfVxuXG4gICAgY29uc3QgY2xlYW5lZEFzID0gZGVsQmFzZVBhdGgoYXMpXG4gICAgdGhpcy5faW5GbGlnaHRSb3V0ZSA9IGFzXG5cbiAgICAvLyBJZiB0aGUgdXJsIGNoYW5nZSBpcyBvbmx5IHJlbGF0ZWQgdG8gYSBoYXNoIGNoYW5nZVxuICAgIC8vIFdlIHNob3VsZCBub3QgcHJvY2VlZC4gV2Ugc2hvdWxkIG9ubHkgY2hhbmdlIHRoZSBzdGF0ZS5cblxuICAgIC8vIFdBUk5JTkc6IGBfaGAgaXMgYW4gaW50ZXJuYWwgb3B0aW9uIGZvciBoYW5kaW5nIE5leHQuanMgY2xpZW50LXNpZGVcbiAgICAvLyBoeWRyYXRpb24uIFlvdXIgYXBwIHNob3VsZCBfbmV2ZXJfIHVzZSB0aGlzIHByb3BlcnR5LiBJdCBtYXkgY2hhbmdlIGF0XG4gICAgLy8gYW55IHRpbWUgd2l0aG91dCBub3RpY2UuXG4gICAgaWYgKCFvcHRpb25zLl9oICYmIHRoaXMub25seUFIYXNoQ2hhbmdlKGNsZWFuZWRBcykpIHtcbiAgICAgIHRoaXMuYXNQYXRoID0gY2xlYW5lZEFzXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VTdGFydCcsIGFzKVxuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpXG4gICAgICB0aGlzLnNjcm9sbFRvSGFzaChjbGVhbmVkQXMpXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VDb21wbGV0ZScsIGFzKVxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICBjb25zdCBwYXJzZWQgPSB0cnlQYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIGlmICghcGFyc2VkKSByZXR1cm4gZmFsc2VcblxuICAgIGxldCB7IHBhdGhuYW1lLCBzZWFyY2hQYXJhbXMgfSA9IHBhcnNlZFxuICAgIGNvbnN0IHF1ZXJ5ID0gc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShzZWFyY2hQYXJhbXMpXG5cbiAgICAvLyB1cmwgYW5kIGFzIHNob3VsZCBhbHdheXMgYmUgcHJlZml4ZWQgd2l0aCBiYXNlUGF0aCBieSB0aGlzXG4gICAgLy8gcG9pbnQgYnkgZWl0aGVyIG5leHQvbGluayBvciByb3V0ZXIucHVzaC9yZXBsYWNlIHNvIHN0cmlwIHRoZVxuICAgIC8vIGJhc2VQYXRoIGZyb20gdGhlIHBhdGhuYW1lIHRvIG1hdGNoIHRoZSBwYWdlcyBkaXIgMS10by0xXG4gICAgcGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgPyByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChkZWxCYXNlUGF0aChwYXRobmFtZSkpXG4gICAgICA6IHBhdGhuYW1lXG5cbiAgICAvLyBJZiBhc2tlZCB0byBjaGFuZ2UgdGhlIGN1cnJlbnQgVVJMIHdlIHNob3VsZCByZWxvYWQgdGhlIGN1cnJlbnQgcGFnZVxuICAgIC8vIChub3QgbG9jYXRpb24ucmVsb2FkKCkgYnV0IHJlbG9hZCBnZXRJbml0aWFsUHJvcHMgYW5kIG90aGVyIE5leHQuanMgc3R1ZmZzKVxuICAgIC8vIFdlIGFsc28gbmVlZCB0byBzZXQgdGhlIG1ldGhvZCA9IHJlcGxhY2VTdGF0ZSBhbHdheXNcbiAgICAvLyBhcyB0aGlzIHNob3VsZCBub3QgZ28gaW50byB0aGUgaGlzdG9yeSAoVGhhdCdzIGhvdyBicm93c2VycyB3b3JrKVxuICAgIC8vIFdlIHNob3VsZCBjb21wYXJlIHRoZSBuZXcgYXNQYXRoIHRvIHRoZSBjdXJyZW50IGFzUGF0aCwgbm90IHRoZSB1cmxcbiAgICBpZiAoIXRoaXMudXJsSXNOZXcoY2xlYW5lZEFzKSkge1xuICAgICAgbWV0aG9kID0gJ3JlcGxhY2VTdGF0ZSdcbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuICAgIGNvbnN0IHsgc2hhbGxvdyA9IGZhbHNlIH0gPSBvcHRpb25zXG5cbiAgICBpZiAoaXNEeW5hbWljUm91dGUocm91dGUpKSB7XG4gICAgICBjb25zdCB7IHBhdGhuYW1lOiBhc1BhdGhuYW1lIH0gPSBwYXJzZVJlbGF0aXZlVXJsKGNsZWFuZWRBcylcbiAgICAgIGNvbnN0IHJvdXRlUmVnZXggPSBnZXRSb3V0ZVJlZ2V4KHJvdXRlKVxuICAgICAgY29uc3Qgcm91dGVNYXRjaCA9IGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4KShhc1BhdGhuYW1lKVxuICAgICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICAgIGNvbnN0IG1pc3NpbmdQYXJhbXMgPSBPYmplY3Qua2V5cyhyb3V0ZVJlZ2V4Lmdyb3VwcykuZmlsdGVyKFxuICAgICAgICAgIChwYXJhbSkgPT4gIXF1ZXJ5W3BhcmFtXVxuICAgICAgICApXG5cbiAgICAgICAgaWYgKG1pc3NpbmdQYXJhbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgIGBNaXNtYXRjaGluZyBcXGBhc1xcYCBhbmQgXFxgaHJlZlxcYCBmYWlsZWQgdG8gbWFudWFsbHkgcHJvdmlkZSBgICtcbiAgICAgICAgICAgICAgICBgdGhlIHBhcmFtczogJHttaXNzaW5nUGFyYW1zLmpvaW4oXG4gICAgICAgICAgICAgICAgICAnLCAnXG4gICAgICAgICAgICAgICAgKX0gaW4gdGhlIFxcYGhyZWZcXGAncyBcXGBxdWVyeVxcYGBcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBgVGhlIHByb3ZpZGVkIFxcYGFzXFxgIHZhbHVlICgke2FzUGF0aG5hbWV9KSBpcyBpbmNvbXBhdGlibGUgd2l0aCB0aGUgXFxgaHJlZlxcYCB2YWx1ZSAoJHtyb3V0ZX0pLiBgICtcbiAgICAgICAgICAgICAgYFJlYWQgbW9yZTogaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvaW5jb21wYXRpYmxlLWhyZWYtYXNgXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBNZXJnZSBwYXJhbXMgaW50byBgcXVlcnlgLCBvdmVyd3JpdGluZyBhbnkgc3BlY2lmaWVkIGluIHNlYXJjaFxuICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5LCByb3V0ZU1hdGNoKVxuICAgICAgfVxuICAgIH1cblxuICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VTdGFydCcsIGFzKVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJvdXRlSW5mbyA9IGF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKFxuICAgICAgICByb3V0ZSxcbiAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICBhcyxcbiAgICAgICAgc2hhbGxvd1xuICAgICAgKVxuICAgICAgY29uc3QgeyBlcnJvciB9ID0gcm91dGVJbmZvXG5cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnYmVmb3JlSGlzdG9yeUNoYW5nZScsIGFzKVxuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpXG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IGFwcENvbXA6IGFueSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnRcbiAgICAgICAgOyh3aW5kb3cgYXMgYW55KS5uZXh0LmlzUHJlcmVuZGVyZWQgPVxuICAgICAgICAgIGFwcENvbXAuZ2V0SW5pdGlhbFByb3BzID09PSBhcHBDb21wLm9yaWdHZXRJbml0aWFsUHJvcHMgJiZcbiAgICAgICAgICAhKHJvdXRlSW5mby5Db21wb25lbnQgYXMgYW55KS5nZXRJbml0aWFsUHJvcHNcbiAgICAgIH1cblxuICAgICAgYXdhaXQgdGhpcy5zZXQocm91dGUsIHBhdGhuYW1lISwgcXVlcnksIGNsZWFuZWRBcywgcm91dGVJbmZvKVxuXG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyb3IsIGNsZWFuZWRBcylcbiAgICAgICAgdGhyb3cgZXJyb3JcbiAgICAgIH1cblxuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uICYmICdfTl9YJyBpbiBvcHRpb25zKSB7XG4gICAgICAgICAgd2luZG93LnNjcm9sbFRvKG9wdGlvbnMuX05fWCwgb3B0aW9ucy5fTl9ZKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBhcylcblxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuICB9XG5cbiAgY2hhbmdlU3RhdGUoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzOiBzdHJpbmcsXG4gICAgb3B0aW9ucyA9IHt9XG4gICk6IHZvaWQge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeSBpcyBub3QgYXZhaWxhYmxlLmApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5LiR7bWV0aG9kfSBpcyBub3QgYXZhaWxhYmxlYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgfHwgZ2V0VVJMKCkgIT09IGFzKSB7XG4gICAgICB3aW5kb3cuaGlzdG9yeVttZXRob2RdKFxuICAgICAgICB7XG4gICAgICAgICAgdXJsLFxuICAgICAgICAgIGFzLFxuICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgICAgX19OOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICAvLyBNb3N0IGJyb3dzZXJzIGN1cnJlbnRseSBpZ25vcmVzIHRoaXMgcGFyYW1ldGVyLCBhbHRob3VnaCB0aGV5IG1heSB1c2UgaXQgaW4gdGhlIGZ1dHVyZS5cbiAgICAgICAgLy8gUGFzc2luZyB0aGUgZW1wdHkgc3RyaW5nIGhlcmUgc2hvdWxkIGJlIHNhZmUgYWdhaW5zdCBmdXR1cmUgY2hhbmdlcyB0byB0aGUgbWV0aG9kLlxuICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSGlzdG9yeS9yZXBsYWNlU3RhdGVcbiAgICAgICAgJycsXG4gICAgICAgIGFzXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgaGFuZGxlUm91dGVJbmZvRXJyb3IoXG4gICAgZXJyOiBFcnJvciAmIHsgY29kZTogYW55OyBjYW5jZWxsZWQ6IGJvb2xlYW4gfSxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBhbnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBsb2FkRXJyb3JGYWlsPzogYm9vbGVhblxuICApOiBQcm9taXNlPFJvdXRlSW5mbz4ge1xuICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAvLyBidWJibGUgdXAgY2FuY2VsbGF0aW9uIGVycm9yc1xuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuXG4gICAgaWYgKGVyci5jb2RlID09PSAnUEFHRV9MT0FEX0VSUk9SJyB8fCBsb2FkRXJyb3JGYWlsKSB7XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnIsIGFzKVxuXG4gICAgICAvLyBJZiB3ZSBjYW4ndCBsb2FkIHRoZSBwYWdlIGl0IGNvdWxkIGJlIG9uZSBvZiBmb2xsb3dpbmcgcmVhc29uc1xuICAgICAgLy8gIDEuIFBhZ2UgZG9lc24ndCBleGlzdHNcbiAgICAgIC8vICAyLiBQYWdlIGRvZXMgZXhpc3QgaW4gYSBkaWZmZXJlbnQgem9uZVxuICAgICAgLy8gIDMuIEludGVybmFsIGVycm9yIHdoaWxlIGxvYWRpbmcgdGhlIHBhZ2VcblxuICAgICAgLy8gU28sIGRvaW5nIGEgaGFyZCByZWxvYWQgaXMgdGhlIHByb3BlciB3YXkgdG8gZGVhbCB3aXRoIHRoaXMuXG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzXG5cbiAgICAgIC8vIENoYW5naW5nIHRoZSBVUkwgZG9lc24ndCBibG9jayBleGVjdXRpbmcgdGhlIGN1cnJlbnQgY29kZSBwYXRoLlxuICAgICAgLy8gU28gbGV0J3MgdGhyb3cgYSBjYW5jZWxsYXRpb24gZXJyb3Igc3RvcCB0aGUgcm91dGluZyBsb2dpYy5cbiAgICAgIHRocm93IGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKVxuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBjb25zdCB7IHBhZ2U6IENvbXBvbmVudCB9ID0gYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudCgnL19lcnJvcicpXG4gICAgICBjb25zdCByb3V0ZUluZm86IFJvdXRlSW5mbyA9IHsgQ29tcG9uZW50LCBlcnIsIGVycm9yOiBlcnIgfVxuXG4gICAgICB0cnkge1xuICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBhd2FpdCB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIHtcbiAgICAgICAgICBlcnIsXG4gICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgcXVlcnksXG4gICAgICAgIH0gYXMgYW55KVxuICAgICAgfSBjYXRjaCAoZ2lwRXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGVycm9yIHBhZ2UgYGdldEluaXRpYWxQcm9wc2A6ICcsIGdpcEVycilcbiAgICAgICAgcm91dGVJbmZvLnByb3BzID0ge31cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJvdXRlSW5mb1xuICAgIH0gY2F0Y2ggKHJvdXRlSW5mb0Vycikge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3Iocm91dGVJbmZvRXJyLCBwYXRobmFtZSwgcXVlcnksIGFzLCB0cnVlKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGdldFJvdXRlSW5mbyhcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IGFueSxcbiAgICBhczogc3RyaW5nLFxuICAgIHNoYWxsb3c6IGJvb2xlYW4gPSBmYWxzZVxuICApOiBQcm9taXNlPFJvdXRlSW5mbz4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBjYWNoZWRSb3V0ZUluZm8gPSB0aGlzLmNvbXBvbmVudHNbcm91dGVdXG5cbiAgICAgIGlmIChzaGFsbG93ICYmIGNhY2hlZFJvdXRlSW5mbyAmJiB0aGlzLnJvdXRlID09PSByb3V0ZSkge1xuICAgICAgICByZXR1cm4gY2FjaGVkUm91dGVJbmZvXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJvdXRlSW5mbyA9IGNhY2hlZFJvdXRlSW5mb1xuICAgICAgICA/IGNhY2hlZFJvdXRlSW5mb1xuICAgICAgICA6IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQocm91dGUpLnRoZW4oXG4gICAgICAgICAgICAocmVzKSA9PlxuICAgICAgICAgICAgICAoe1xuICAgICAgICAgICAgICAgIENvbXBvbmVudDogcmVzLnBhZ2UsXG4gICAgICAgICAgICAgICAgX19OX1NTRzogcmVzLm1vZC5fX05fU1NHLFxuICAgICAgICAgICAgICAgIF9fTl9TU1A6IHJlcy5tb2QuX19OX1NTUCxcbiAgICAgICAgICAgICAgfSBhcyBSb3V0ZUluZm8pXG4gICAgICAgICAgKVxuXG4gICAgICBjb25zdCB7IENvbXBvbmVudCwgX19OX1NTRywgX19OX1NTUCB9ID0gcm91dGVJbmZvXG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IHsgaXNWYWxpZEVsZW1lbnRUeXBlIH0gPSByZXF1aXJlKCdyZWFjdC1pcycpXG4gICAgICAgIGlmICghaXNWYWxpZEVsZW1lbnRUeXBlKENvbXBvbmVudCkpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBgVGhlIGRlZmF1bHQgZXhwb3J0IGlzIG5vdCBhIFJlYWN0IENvbXBvbmVudCBpbiBwYWdlOiBcIiR7cGF0aG5hbWV9XCJgXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxldCBkYXRhSHJlZjogc3RyaW5nIHwgdW5kZWZpbmVkXG5cbiAgICAgIGlmIChfX05fU1NHIHx8IF9fTl9TU1ApIHtcbiAgICAgICAgZGF0YUhyZWYgPSB0aGlzLnBhZ2VMb2FkZXIuZ2V0RGF0YUhyZWYoXG4gICAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZSwgcXVlcnkgfSksXG4gICAgICAgICAgYXMsXG4gICAgICAgICAgX19OX1NTR1xuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHByb3BzID0gYXdhaXQgdGhpcy5fZ2V0RGF0YTxSb3V0ZUluZm8+KCgpID0+XG4gICAgICAgIF9fTl9TU0dcbiAgICAgICAgICA/IHRoaXMuX2dldFN0YXRpY0RhdGEoZGF0YUhyZWYhKVxuICAgICAgICAgIDogX19OX1NTUFxuICAgICAgICAgID8gdGhpcy5fZ2V0U2VydmVyRGF0YShkYXRhSHJlZiEpXG4gICAgICAgICAgOiB0aGlzLmdldEluaXRpYWxQcm9wcyhcbiAgICAgICAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICAgICAgICAvLyB3ZSBwcm92aWRlIEFwcFRyZWUgbGF0ZXIgc28gdGhpcyBuZWVkcyB0byBiZSBgYW55YFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgYXNQYXRoOiBhcyxcbiAgICAgICAgICAgICAgfSBhcyBhbnlcbiAgICAgICAgICAgIClcbiAgICAgIClcbiAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzXG4gICAgICB0aGlzLmNvbXBvbmVudHNbcm91dGVdID0gcm91dGVJbmZvXG4gICAgICByZXR1cm4gcm91dGVJbmZvXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihlcnIsIHBhdGhuYW1lLCBxdWVyeSwgYXMpXG4gICAgfVxuICB9XG5cbiAgc2V0KFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogYW55LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgZGF0YTogUm91dGVJbmZvXG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMuaXNGYWxsYmFjayA9IGZhbHNlXG5cbiAgICB0aGlzLnJvdXRlID0gcm91dGVcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICB0aGlzLmFzUGF0aCA9IGFzXG4gICAgcmV0dXJuIHRoaXMubm90aWZ5KGRhdGEpXG4gIH1cblxuICAvKipcbiAgICogQ2FsbGJhY2sgdG8gZXhlY3V0ZSBiZWZvcmUgcmVwbGFjaW5nIHJvdXRlciBzdGF0ZVxuICAgKiBAcGFyYW0gY2IgY2FsbGJhY2sgdG8gYmUgZXhlY3V0ZWRcbiAgICovXG4gIGJlZm9yZVBvcFN0YXRlKGNiOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrKSB7XG4gICAgdGhpcy5fYnBzID0gY2JcbiAgfVxuXG4gIG9ubHlBSGFzaENoYW5nZShhczogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgaWYgKCF0aGlzLmFzUGF0aCkgcmV0dXJuIGZhbHNlXG4gICAgY29uc3QgW29sZFVybE5vSGFzaCwgb2xkSGFzaF0gPSB0aGlzLmFzUGF0aC5zcGxpdCgnIycpXG4gICAgY29uc3QgW25ld1VybE5vSGFzaCwgbmV3SGFzaF0gPSBhcy5zcGxpdCgnIycpXG5cbiAgICAvLyBNYWtlcyBzdXJlIHdlIHNjcm9sbCB0byB0aGUgcHJvdmlkZWQgaGFzaCBpZiB0aGUgdXJsL2hhc2ggYXJlIHRoZSBzYW1lXG4gICAgaWYgKG5ld0hhc2ggJiYgb2xkVXJsTm9IYXNoID09PSBuZXdVcmxOb0hhc2ggJiYgb2xkSGFzaCA9PT0gbmV3SGFzaCkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgdXJscyBhcmUgY2hhbmdlLCB0aGVyZSdzIG1vcmUgdGhhbiBhIGhhc2ggY2hhbmdlXG4gICAgaWYgKG9sZFVybE5vSGFzaCAhPT0gbmV3VXJsTm9IYXNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgaGFzaCBoYXMgY2hhbmdlZCwgdGhlbiBpdCdzIGEgaGFzaCBvbmx5IGNoYW5nZS5cbiAgICAvLyBUaGlzIGNoZWNrIGlzIG5lY2Vzc2FyeSB0byBoYW5kbGUgYm90aCB0aGUgZW50ZXIgYW5kXG4gICAgLy8gbGVhdmUgaGFzaCA9PT0gJycgY2FzZXMuIFRoZSBpZGVudGl0eSBjYXNlIGZhbGxzIHRocm91Z2hcbiAgICAvLyBhbmQgaXMgdHJlYXRlZCBhcyBhIG5leHQgcmVsb2FkLlxuICAgIHJldHVybiBvbGRIYXNoICE9PSBuZXdIYXNoXG4gIH1cblxuICBzY3JvbGxUb0hhc2goYXM6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IFssIGhhc2hdID0gYXMuc3BsaXQoJyMnKVxuICAgIC8vIFNjcm9sbCB0byB0b3AgaWYgdGhlIGhhc2ggaXMganVzdCBgI2Agd2l0aCBubyB2YWx1ZVxuICAgIGlmIChoYXNoID09PSAnJykge1xuICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBGaXJzdCB3ZSBjaGVjayBpZiB0aGUgZWxlbWVudCBieSBpZCBpcyBmb3VuZFxuICAgIGNvbnN0IGlkRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChoYXNoKVxuICAgIGlmIChpZEVsKSB7XG4gICAgICBpZEVsLnNjcm9sbEludG9WaWV3KClcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICAvLyBJZiB0aGVyZSdzIG5vIGVsZW1lbnQgd2l0aCB0aGUgaWQsIHdlIGNoZWNrIHRoZSBgbmFtZWAgcHJvcGVydHlcbiAgICAvLyBUbyBtaXJyb3IgYnJvd3NlcnNcbiAgICBjb25zdCBuYW1lRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShoYXNoKVswXVxuICAgIGlmIChuYW1lRWwpIHtcbiAgICAgIG5hbWVFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgfVxuICB9XG5cbiAgdXJsSXNOZXcoYXNQYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5hc1BhdGggIT09IGFzUGF0aFxuICB9XG5cbiAgLyoqXG4gICAqIFByZWZldGNoIHBhZ2UgY29kZSwgeW91IG1heSB3YWl0IGZvciB0aGUgZGF0YSBkdXJpbmcgcGFnZSByZW5kZXJpbmcuXG4gICAqIFRoaXMgZmVhdHVyZSBvbmx5IHdvcmtzIGluIHByb2R1Y3Rpb24hXG4gICAqIEBwYXJhbSB1cmwgdGhlIGhyZWYgb2YgcHJlZmV0Y2hlZCBwYWdlXG4gICAqIEBwYXJhbSBhc1BhdGggdGhlIGFzIHBhdGggb2YgdGhlIHByZWZldGNoZWQgcGFnZVxuICAgKi9cbiAgYXN5bmMgcHJlZmV0Y2goXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXNQYXRoOiBzdHJpbmcgPSB1cmwsXG4gICAgb3B0aW9uczogUHJlZmV0Y2hPcHRpb25zID0ge31cbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29uc3QgcGFyc2VkID0gdHJ5UGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICBpZiAoIXBhcnNlZCkgcmV0dXJuXG5cbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSBwYXJzZWRcblxuICAgIC8vIFByZWZldGNoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gZGV2ZWxvcG1lbnQgbW9kZSBiZWNhdXNlIGl0IHdvdWxkIHRyaWdnZXIgb24tZGVtYW5kLWVudHJpZXNcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcbiAgICBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICB0aGlzLnBhZ2VMb2FkZXIucHJlZmV0Y2hEYXRhKHVybCwgYXNQYXRoKSxcbiAgICAgIHRoaXMucGFnZUxvYWRlcltvcHRpb25zLnByaW9yaXR5ID8gJ2xvYWRQYWdlJyA6ICdwcmVmZXRjaCddKHJvdXRlKSxcbiAgICBdKVxuICB9XG5cbiAgYXN5bmMgZmV0Y2hDb21wb25lbnQocm91dGU6IHN0cmluZyk6IFByb21pc2U8Q29tcG9uZW50UmVzPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKHRoaXMuY2xjID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH0pXG5cbiAgICBjb25zdCBjb21wb25lbnRSZXN1bHQgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIubG9hZFBhZ2Uocm91dGUpXG5cbiAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICBjb25zdCBlcnJvcjogYW55ID0gbmV3IEVycm9yKFxuICAgICAgICBgQWJvcnQgZmV0Y2hpbmcgY29tcG9uZW50IGZvciByb3V0ZTogXCIke3JvdXRlfVwiYFxuICAgICAgKVxuICAgICAgZXJyb3IuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgdGhyb3cgZXJyb3JcbiAgICB9XG5cbiAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBvbmVudFJlc3VsdFxuICB9XG5cbiAgX2dldERhdGE8VD4oZm46ICgpID0+IFByb21pc2U8VD4pOiBQcm9taXNlPFQ+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfVxuICAgIHRoaXMuY2xjID0gY2FuY2VsXG4gICAgcmV0dXJuIGZuKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgICB9XG5cbiAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgY29uc3QgZXJyOiBhbnkgPSBuZXcgRXJyb3IoJ0xvYWRpbmcgaW5pdGlhbCBwcm9wcyBjYW5jZWxsZWQnKVxuICAgICAgICBlcnIuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICB9XG5cbiAgX2dldFN0YXRpY0RhdGEoZGF0YUhyZWY6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiB7XG4gICAgY29uc3QgeyBocmVmOiBjYWNoZUtleSB9ID0gbmV3IFVSTChkYXRhSHJlZiwgd2luZG93LmxvY2F0aW9uLmhyZWYpXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgJiYgdGhpcy5zZGNbY2FjaGVLZXldKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuc2RjW2NhY2hlS2V5XSlcbiAgICB9XG4gICAgcmV0dXJuIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIHRoaXMuc2RjW2NhY2hlS2V5XSA9IGRhdGFcbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSlcbiAgfVxuXG4gIF9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4ge1xuICAgIHJldHVybiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKVxuICB9XG5cbiAgZ2V0SW5pdGlhbFByb3BzKFxuICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZSxcbiAgICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICApOiBQcm9taXNlPGFueT4ge1xuICAgIGNvbnN0IHsgQ29tcG9uZW50OiBBcHAgfSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXVxuICAgIGNvbnN0IEFwcFRyZWUgPSB0aGlzLl93cmFwQXBwKEFwcClcbiAgICBjdHguQXBwVHJlZSA9IEFwcFRyZWVcbiAgICByZXR1cm4gbG9hZEdldEluaXRpYWxQcm9wczxBcHBDb250ZXh0VHlwZTxSb3V0ZXI+PihBcHAsIHtcbiAgICAgIEFwcFRyZWUsXG4gICAgICBDb21wb25lbnQsXG4gICAgICByb3V0ZXI6IHRoaXMsXG4gICAgICBjdHgsXG4gICAgfSlcbiAgfVxuXG4gIGFib3J0Q29tcG9uZW50TG9hZChhczogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY2xjKSB7XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBidWlsZENhbmNlbGxhdGlvbkVycm9yKCksIGFzKVxuICAgICAgdGhpcy5jbGMoKVxuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuICB9XG5cbiAgbm90aWZ5KGRhdGE6IFJvdXRlSW5mbyk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLnN1YihkYXRhLCB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50KVxuICB9XG59XG4iLCIvLyBGb3JtYXQgZnVuY3Rpb24gbW9kaWZpZWQgZnJvbSBub2RlanNcbi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgeyBlbmNvZGUgYXMgZW5jb2RlUXVlcnlzdHJpbmcgfSBmcm9tICdxdWVyeXN0cmluZydcblxuY29uc3Qgc2xhc2hlZFByb3RvY29scyA9IC9odHRwcz98ZnRwfGdvcGhlcnxmaWxlL1xuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0VXJsKHVybE9iajogVXJsT2JqZWN0KSB7XG4gIGxldCB7IGF1dGgsIGhvc3RuYW1lIH0gPSB1cmxPYmpcbiAgbGV0IHByb3RvY29sID0gdXJsT2JqLnByb3RvY29sIHx8ICcnXG4gIGxldCBwYXRobmFtZSA9IHVybE9iai5wYXRobmFtZSB8fCAnJ1xuICBsZXQgaGFzaCA9IHVybE9iai5oYXNoIHx8ICcnXG4gIGxldCBxdWVyeSA9IHVybE9iai5xdWVyeSB8fCAnJ1xuICBsZXQgaG9zdDogc3RyaW5nIHwgZmFsc2UgPSBmYWxzZVxuXG4gIGF1dGggPSBhdXRoID8gZW5jb2RlVVJJQ29tcG9uZW50KGF1dGgpLnJlcGxhY2UoLyUzQS9pLCAnOicpICsgJ0AnIDogJydcblxuICBpZiAodXJsT2JqLmhvc3QpIHtcbiAgICBob3N0ID0gYXV0aCArIHVybE9iai5ob3N0XG4gIH0gZWxzZSBpZiAoaG9zdG5hbWUpIHtcbiAgICBob3N0ID0gYXV0aCArICh+aG9zdG5hbWUuaW5kZXhPZignOicpID8gYFske2hvc3RuYW1lfV1gIDogaG9zdG5hbWUpXG4gICAgaWYgKHVybE9iai5wb3J0KSB7XG4gICAgICBob3N0ICs9ICc6JyArIHVybE9iai5wb3J0XG4gICAgfVxuICB9XG5cbiAgaWYgKHF1ZXJ5ICYmIHR5cGVvZiBxdWVyeSA9PT0gJ29iamVjdCcpIHtcbiAgICAvLyBxdWVyeSA9ICcnICsgbmV3IFVSTFNlYXJjaFBhcmFtcyhxdWVyeSk7XG4gICAgcXVlcnkgPSBlbmNvZGVRdWVyeXN0cmluZyhxdWVyeSlcbiAgfVxuXG4gIGxldCBzZWFyY2ggPSB1cmxPYmouc2VhcmNoIHx8IChxdWVyeSAmJiBgPyR7cXVlcnl9YCkgfHwgJydcblxuICBpZiAocHJvdG9jb2wgJiYgcHJvdG9jb2wuc3Vic3RyKC0xKSAhPT0gJzonKSBwcm90b2NvbCArPSAnOidcblxuICBpZiAoXG4gICAgdXJsT2JqLnNsYXNoZXMgfHxcbiAgICAoKCFwcm90b2NvbCB8fCBzbGFzaGVkUHJvdG9jb2xzLnRlc3QocHJvdG9jb2wpKSAmJiBob3N0ICE9PSBmYWxzZSlcbiAgKSB7XG4gICAgaG9zdCA9ICcvLycgKyAoaG9zdCB8fCAnJylcbiAgICBpZiAocGF0aG5hbWUgJiYgcGF0aG5hbWVbMF0gIT09ICcvJykgcGF0aG5hbWUgPSAnLycgKyBwYXRobmFtZVxuICB9IGVsc2UgaWYgKCFob3N0KSB7XG4gICAgaG9zdCA9ICcnXG4gIH1cblxuICBpZiAoaGFzaCAmJiBoYXNoWzBdICE9PSAnIycpIGhhc2ggPSAnIycgKyBoYXNoXG4gIGlmIChzZWFyY2ggJiYgc2VhcmNoWzBdICE9PSAnPycpIHNlYXJjaCA9ICc/JyArIHNlYXJjaFxuXG4gIHBhdGhuYW1lID0gcGF0aG5hbWUucmVwbGFjZSgvWz8jXS9nLCBlbmNvZGVVUklDb21wb25lbnQpXG4gIHNlYXJjaCA9IHNlYXJjaC5yZXBsYWNlKCcjJywgJyUyMycpXG5cbiAgcmV0dXJuIGAke3Byb3RvY29sfSR7aG9zdH0ke3BhdGhuYW1lfSR7c2VhcmNofSR7aGFzaH1gXG59XG4iLCIvLyBJZGVudGlmeSAvW3BhcmFtXS8gaW4gcm91dGUgc3RyaW5nXG5jb25zdCBURVNUX1JPVVRFID0gL1xcL1xcW1teL10rP1xcXSg/PVxcL3wkKS9cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRHluYW1pY1JvdXRlKHJvdXRlOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIFRFU1RfUk9VVEUudGVzdChyb3V0ZSlcbn1cbiIsImNvbnN0IERVTU1ZX0JBU0UgPSBuZXcgVVJMKCdodHRwOi8vbicpXG5cbi8qKlxuICogUGFyc2VzIHBhdGgtcmVsYXRpdmUgdXJscyAoZS5nLiBgL2hlbGxvL3dvcmxkP2Zvbz1iYXJgKS4gSWYgdXJsIGlzbid0IHBhdGgtcmVsYXRpdmVcbiAqIChlLmcuIGAuL2hlbGxvYCkgdGhlbiBhdCBsZWFzdCBiYXNlIG11c3QgYmUuXG4gKiBBYnNvbHV0ZSB1cmxzIGFyZSByZWplY3RlZC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlUmVsYXRpdmVVcmwodXJsOiBzdHJpbmcsIGJhc2U/OiBzdHJpbmcpIHtcbiAgY29uc3QgcmVzb2x2ZWRCYXNlID0gYmFzZSA/IG5ldyBVUkwoYmFzZSwgRFVNTVlfQkFTRSkgOiBEVU1NWV9CQVNFXG4gIGNvbnN0IHsgcGF0aG5hbWUsIHNlYXJjaFBhcmFtcywgc2VhcmNoLCBoYXNoLCBocmVmLCBvcmlnaW4gfSA9IG5ldyBVUkwoXG4gICAgdXJsLFxuICAgIHJlc29sdmVkQmFzZVxuICApXG4gIGlmIChvcmlnaW4gIT09IERVTU1ZX0JBU0Uub3JpZ2luKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdpbnZhcmlhbnQ6IGludmFsaWQgcmVsYXRpdmUgVVJMJylcbiAgfVxuICByZXR1cm4ge1xuICAgIHBhdGhuYW1lLFxuICAgIHNlYXJjaFBhcmFtcyxcbiAgICBzZWFyY2gsXG4gICAgaGFzaCxcbiAgICBocmVmOiBocmVmLnNsaWNlKERVTU1ZX0JBU0Uub3JpZ2luLmxlbmd0aCksXG4gIH1cbn1cbiIsImltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3JvdXRlLXJlZ2V4J1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXg6IFJldHVyblR5cGU8dHlwZW9mIGdldFJvdXRlUmVnZXg+KSB7XG4gIGNvbnN0IHsgcmUsIGdyb3VwcyB9ID0gcm91dGVSZWdleFxuICByZXR1cm4gKHBhdGhuYW1lOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkKSA9PiB7XG4gICAgY29uc3Qgcm91dGVNYXRjaCA9IHJlLmV4ZWMocGF0aG5hbWUhKVxuICAgIGlmICghcm91dGVNYXRjaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgY29uc3QgZGVjb2RlID0gKHBhcmFtOiBzdHJpbmcpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQocGFyYW0pXG4gICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgIGNvbnN0IGVycjogRXJyb3IgJiB7IGNvZGU/OiBzdHJpbmcgfSA9IG5ldyBFcnJvcihcbiAgICAgICAgICAnZmFpbGVkIHRvIGRlY29kZSBwYXJhbSdcbiAgICAgICAgKVxuICAgICAgICBlcnIuY29kZSA9ICdERUNPREVfRkFJTEVEJ1xuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgcGFyYW1zOiB7IFtwYXJhbU5hbWU6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH0gPSB7fVxuXG4gICAgT2JqZWN0LmtleXMoZ3JvdXBzKS5mb3JFYWNoKChzbHVnTmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICBjb25zdCBnID0gZ3JvdXBzW3NsdWdOYW1lXVxuICAgICAgY29uc3QgbSA9IHJvdXRlTWF0Y2hbZy5wb3NdXG4gICAgICBpZiAobSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHBhcmFtc1tzbHVnTmFtZV0gPSB+bS5pbmRleE9mKCcvJylcbiAgICAgICAgICA/IG0uc3BsaXQoJy8nKS5tYXAoKGVudHJ5KSA9PiBkZWNvZGUoZW50cnkpKVxuICAgICAgICAgIDogZy5yZXBlYXRcbiAgICAgICAgICA/IFtkZWNvZGUobSldXG4gICAgICAgICAgOiBkZWNvZGUobSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBwYXJhbXNcbiAgfVxufVxuIiwiaW50ZXJmYWNlIEdyb3VwIHtcbiAgcG9zOiBudW1iZXJcbiAgcmVwZWF0OiBib29sZWFuXG4gIG9wdGlvbmFsOiBib29sZWFuXG59XG5cbi8vIHRoaXMgaXNuJ3QgaW1wb3J0aW5nIHRoZSBlc2NhcGUtc3RyaW5nLXJlZ2V4IG1vZHVsZVxuLy8gdG8gcmVkdWNlIGJ5dGVzXG5mdW5jdGlvbiBlc2NhcGVSZWdleChzdHI6IHN0cmluZykge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL1t8XFxcXHt9KClbXFxdXiQrKj8uLV0vZywgJ1xcXFwkJicpXG59XG5cbmZ1bmN0aW9uIHBhcnNlUGFyYW1ldGVyKHBhcmFtOiBzdHJpbmcpIHtcbiAgY29uc3Qgb3B0aW9uYWwgPSBwYXJhbS5zdGFydHNXaXRoKCdbJykgJiYgcGFyYW0uZW5kc1dpdGgoJ10nKVxuICBpZiAob3B0aW9uYWwpIHtcbiAgICBwYXJhbSA9IHBhcmFtLnNsaWNlKDEsIC0xKVxuICB9XG4gIGNvbnN0IHJlcGVhdCA9IHBhcmFtLnN0YXJ0c1dpdGgoJy4uLicpXG4gIGlmIChyZXBlYXQpIHtcbiAgICBwYXJhbSA9IHBhcmFtLnNsaWNlKDMpXG4gIH1cbiAgcmV0dXJuIHsga2V5OiBwYXJhbSwgcmVwZWF0LCBvcHRpb25hbCB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZVJlZ2V4KFxuICBub3JtYWxpemVkUm91dGU6IHN0cmluZ1xuKToge1xuICByZTogUmVnRXhwXG4gIG5hbWVkUmVnZXg/OiBzdHJpbmdcbiAgcm91dGVLZXlzPzogeyBbbmFtZWQ6IHN0cmluZ106IHN0cmluZyB9XG4gIGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiBHcm91cCB9XG59IHtcbiAgY29uc3Qgc2VnbWVudHMgPSAobm9ybWFsaXplZFJvdXRlLnJlcGxhY2UoL1xcLyQvLCAnJykgfHwgJy8nKVxuICAgIC5zbGljZSgxKVxuICAgIC5zcGxpdCgnLycpXG5cbiAgY29uc3QgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IEdyb3VwIH0gPSB7fVxuICBsZXQgZ3JvdXBJbmRleCA9IDFcbiAgY29uc3QgcGFyYW1ldGVyaXplZFJvdXRlID0gc2VnbWVudHNcbiAgICAubWFwKChzZWdtZW50KSA9PiB7XG4gICAgICBpZiAoc2VnbWVudC5zdGFydHNXaXRoKCdbJykgJiYgc2VnbWVudC5lbmRzV2l0aCgnXScpKSB7XG4gICAgICAgIGNvbnN0IHsga2V5LCBvcHRpb25hbCwgcmVwZWF0IH0gPSBwYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsIC0xKSlcbiAgICAgICAgZ3JvdXBzW2tleV0gPSB7IHBvczogZ3JvdXBJbmRleCsrLCByZXBlYXQsIG9wdGlvbmFsIH1cbiAgICAgICAgcmV0dXJuIHJlcGVhdCA/IChvcHRpb25hbCA/ICcoPzovKC4rPykpPycgOiAnLyguKz8pJykgOiAnLyhbXi9dKz8pJ1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gXG4gICAgICB9XG4gICAgfSlcbiAgICAuam9pbignJylcblxuICAvLyBkZWFkIGNvZGUgZWxpbWluYXRlIGZvciBicm93c2VyIHNpbmNlIGl0J3Mgb25seSBuZWVkZWRcbiAgLy8gd2hpbGUgZ2VuZXJhdGluZyByb3V0ZXMtbWFuaWZlc3RcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgbGV0IHJvdXRlS2V5Q2hhckNvZGUgPSA5N1xuICAgIGxldCByb3V0ZUtleUNoYXJMZW5ndGggPSAxXG5cbiAgICAvLyBidWlsZHMgYSBtaW5pbWFsIHJvdXRlS2V5IHVzaW5nIG9ubHkgYS16IGFuZCBtaW5pbWFsIG51bWJlciBvZiBjaGFyYWN0ZXJzXG4gICAgY29uc3QgZ2V0U2FmZVJvdXRlS2V5ID0gKCkgPT4ge1xuICAgICAgbGV0IHJvdXRlS2V5ID0gJydcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3V0ZUtleUNoYXJMZW5ndGg7IGkrKykge1xuICAgICAgICByb3V0ZUtleSArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHJvdXRlS2V5Q2hhckNvZGUpXG4gICAgICAgIHJvdXRlS2V5Q2hhckNvZGUrK1xuXG4gICAgICAgIGlmIChyb3V0ZUtleUNoYXJDb2RlID4gMTIyKSB7XG4gICAgICAgICAgcm91dGVLZXlDaGFyTGVuZ3RoKytcbiAgICAgICAgICByb3V0ZUtleUNoYXJDb2RlID0gOTdcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJvdXRlS2V5XG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGVLZXlzOiB7IFtuYW1lZDogc3RyaW5nXTogc3RyaW5nIH0gPSB7fVxuXG4gICAgbGV0IG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlID0gc2VnbWVudHNcbiAgICAgIC5tYXAoKHNlZ21lbnQpID0+IHtcbiAgICAgICAgaWYgKHNlZ21lbnQuc3RhcnRzV2l0aCgnWycpICYmIHNlZ21lbnQuZW5kc1dpdGgoJ10nKSkge1xuICAgICAgICAgIGNvbnN0IHsga2V5LCBvcHRpb25hbCwgcmVwZWF0IH0gPSBwYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsIC0xKSlcbiAgICAgICAgICAvLyByZXBsYWNlIGFueSBub24td29yZCBjaGFyYWN0ZXJzIHNpbmNlIHRoZXkgY2FuIGJyZWFrXG4gICAgICAgICAgLy8gdGhlIG5hbWVkIHJlZ2V4XG4gICAgICAgICAgbGV0IGNsZWFuZWRLZXkgPSBrZXkucmVwbGFjZSgvXFxXL2csICcnKVxuICAgICAgICAgIGxldCBpbnZhbGlkS2V5ID0gZmFsc2VcblxuICAgICAgICAgIC8vIGNoZWNrIGlmIHRoZSBrZXkgaXMgc3RpbGwgaW52YWxpZCBhbmQgZmFsbGJhY2sgdG8gdXNpbmcgYSBrbm93blxuICAgICAgICAgIC8vIHNhZmUga2V5XG4gICAgICAgICAgaWYgKGNsZWFuZWRLZXkubGVuZ3RoID09PSAwIHx8IGNsZWFuZWRLZXkubGVuZ3RoID4gMzApIHtcbiAgICAgICAgICAgIGludmFsaWRLZXkgPSB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghaXNOYU4ocGFyc2VJbnQoY2xlYW5lZEtleS5zdWJzdHIoMCwgMSkpKSkge1xuICAgICAgICAgICAgaW52YWxpZEtleSA9IHRydWVcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoaW52YWxpZEtleSkge1xuICAgICAgICAgICAgY2xlYW5lZEtleSA9IGdldFNhZmVSb3V0ZUtleSgpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcm91dGVLZXlzW2NsZWFuZWRLZXldID0ga2V5XG4gICAgICAgICAgcmV0dXJuIHJlcGVhdFxuICAgICAgICAgICAgPyBvcHRpb25hbFxuICAgICAgICAgICAgICA/IGAoPzovKD88JHtjbGVhbmVkS2V5fT4uKz8pKT9gXG4gICAgICAgICAgICAgIDogYC8oPzwke2NsZWFuZWRLZXl9Pi4rPylgXG4gICAgICAgICAgICA6IGAvKD88JHtjbGVhbmVkS2V5fT5bXi9dKz8pYFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBgLyR7ZXNjYXBlUmVnZXgoc2VnbWVudCl9YFxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmpvaW4oJycpXG5cbiAgICByZXR1cm4ge1xuICAgICAgcmU6IG5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksXG4gICAgICBncm91cHMsXG4gICAgICByb3V0ZUtleXMsXG4gICAgICBuYW1lZFJlZ2V4OiBgXiR7bmFtZWRQYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGAsXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICByZTogbmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxcbiAgICBncm91cHMsXG4gIH1cbn1cbiIsImltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5cbmV4cG9ydCBmdW5jdGlvbiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KFxuICBzZWFyY2hQYXJhbXM6IFVSTFNlYXJjaFBhcmFtc1xuKTogUGFyc2VkVXJsUXVlcnkge1xuICBjb25zdCBxdWVyeTogUGFyc2VkVXJsUXVlcnkgPSB7fVxuICBzZWFyY2hQYXJhbXMuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4ge1xuICAgIGlmICh0eXBlb2YgcXVlcnlba2V5XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHF1ZXJ5W2tleV0gPSB2YWx1ZVxuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShxdWVyeVtrZXldKSkge1xuICAgICAgOyhxdWVyeVtrZXldIGFzIHN0cmluZ1tdKS5wdXNoKHZhbHVlKVxuICAgIH0gZWxzZSB7XG4gICAgICBxdWVyeVtrZXldID0gW3F1ZXJ5W2tleV0gYXMgc3RyaW5nLCB2YWx1ZV1cbiAgICB9XG4gIH0pXG4gIHJldHVybiBxdWVyeVxufVxuIiwiaW1wb3J0IHsgSW5jb21pbmdNZXNzYWdlLCBTZXJ2ZXJSZXNwb25zZSB9IGZyb20gJ2h0dHAnXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgZm9ybWF0VXJsIH0gZnJvbSAnLi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybCdcbmltcG9ydCB7IE1hbmlmZXN0SXRlbSB9IGZyb20gJy4uL3NlcnZlci9sb2FkLWNvbXBvbmVudHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgRW52IH0gZnJvbSAnLi4vLi4vbGliL2xvYWQtZW52LWNvbmZpZydcbmltcG9ydCB7IEJ1aWxkTWFuaWZlc3QgfSBmcm9tICcuLi9zZXJ2ZXIvZ2V0LXBhZ2UtZmlsZXMnXG5cbi8qKlxuICogVHlwZXMgdXNlZCBieSBib3RoIG5leHQgYW5kIG5leHQtc2VydmVyXG4gKi9cblxuZXhwb3J0IHR5cGUgTmV4dENvbXBvbmVudFR5cGU8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCA9IE5leHRQYWdlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+ID0gQ29tcG9uZW50VHlwZTxQPiAmIHtcbiAgLyoqXG4gICAqIFVzZWQgZm9yIGluaXRpYWwgcGFnZSBsb2FkIGRhdGEgcG9wdWxhdGlvbi4gRGF0YSByZXR1cm5lZCBmcm9tIGBnZXRJbml0aWFsUHJvcHNgIGlzIHNlcmlhbGl6ZWQgd2hlbiBzZXJ2ZXIgcmVuZGVyZWQuXG4gICAqIE1ha2Ugc3VyZSB0byByZXR1cm4gcGxhaW4gYE9iamVjdGAgd2l0aG91dCB1c2luZyBgRGF0ZWAsIGBNYXBgLCBgU2V0YC5cbiAgICogQHBhcmFtIGN0eCBDb250ZXh0IG9mIGBwYWdlYFxuICAgKi9cbiAgZ2V0SW5pdGlhbFByb3BzPyhjb250ZXh0OiBDKTogSVAgfCBQcm9taXNlPElQPlxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgRG9jdW1lbnRDb250ZXh0LFxuICBEb2N1bWVudEluaXRpYWxQcm9wcyxcbiAgRG9jdW1lbnRQcm9wc1xuPiAmIHtcbiAgcmVuZGVyRG9jdW1lbnQoXG4gICAgRG9jdW1lbnQ6IERvY3VtZW50VHlwZSxcbiAgICBwcm9wczogRG9jdW1lbnRQcm9wc1xuICApOiBSZWFjdC5SZWFjdEVsZW1lbnRcbn1cblxuZXhwb3J0IHR5cGUgQXBwVHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBBcHBDb250ZXh0VHlwZSxcbiAgQXBwSW5pdGlhbFByb3BzLFxuICBBcHBQcm9wc1R5cGVcbj5cblxuZXhwb3J0IHR5cGUgQXBwVHJlZVR5cGUgPSBDb21wb25lbnRUeXBlPFxuICBBcHBJbml0aWFsUHJvcHMgJiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfVxuPlxuXG4vKipcbiAqIFdlYiB2aXRhbHMgcHJvdmlkZWQgdG8gX2FwcC5yZXBvcnRXZWJWaXRhbHMgYnkgQ29yZSBXZWIgVml0YWxzIHBsdWdpbiBkZXZlbG9wZWQgYnkgR29vZ2xlIENocm9tZSB0ZWFtLlxuICogaHR0cHM6Ly9uZXh0anMub3JnL2Jsb2cvbmV4dC05LTQjaW50ZWdyYXRlZC13ZWItdml0YWxzLXJlcG9ydGluZ1xuICovXG5leHBvcnQgdHlwZSBOZXh0V2ViVml0YWxzTWV0cmljID0ge1xuICBpZDogc3RyaW5nXG4gIGxhYmVsOiBzdHJpbmdcbiAgbmFtZTogc3RyaW5nXG4gIHN0YXJ0VGltZTogbnVtYmVyXG4gIHZhbHVlOiBudW1iZXJcbn1cblxuZXhwb3J0IHR5cGUgRW5oYW5jZXI8Qz4gPSAoQ29tcG9uZW50OiBDKSA9PiBDXG5cbmV4cG9ydCB0eXBlIENvbXBvbmVudHNFbmhhbmNlciA9XG4gIHwge1xuICAgICAgZW5oYW5jZUFwcD86IEVuaGFuY2VyPEFwcFR5cGU+XG4gICAgICBlbmhhbmNlQ29tcG9uZW50PzogRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG4gICAgfVxuICB8IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlUmVzdWx0ID0ge1xuICBodG1sOiBzdHJpbmdcbiAgaGVhZD86IEFycmF5PEpTWC5FbGVtZW50IHwgbnVsbD5cbn1cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZSA9IChcbiAgb3B0aW9ucz86IENvbXBvbmVudHNFbmhhbmNlclxuKSA9PiBSZW5kZXJQYWdlUmVzdWx0IHwgUHJvbWlzZTxSZW5kZXJQYWdlUmVzdWx0PlxuXG5leHBvcnQgdHlwZSBCYXNlQ29udGV4dCA9IHtcbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgW2s6IHN0cmluZ106IGFueVxufVxuXG5leHBvcnQgdHlwZSBORVhUX0RBVEEgPSB7XG4gIHByb3BzOiBhbnlcbiAgcGFnZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBidWlsZElkOiBzdHJpbmdcbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgcnVudGltZUNvbmZpZz86IHsgW2tleTogc3RyaW5nXTogYW55IH1cbiAgbmV4dEV4cG9ydD86IGJvb2xlYW5cbiAgYXV0b0V4cG9ydD86IGJvb2xlYW5cbiAgaXNGYWxsYmFjaz86IGJvb2xlYW5cbiAgZHluYW1pY0lkcz86IHN0cmluZ1tdXG4gIGVycj86IEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH1cbiAgZ3NwPzogYm9vbGVhblxuICBnc3NwPzogYm9vbGVhblxuICBjdXN0b21TZXJ2ZXI/OiBib29sZWFuXG4gIGdpcD86IGJvb2xlYW5cbiAgYXBwR2lwPzogYm9vbGVhblxufVxuXG4vKipcbiAqIGBOZXh0YCBjb250ZXh0XG4gKi9cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSBpbnRlcmZhY2UtbmFtZVxuZXhwb3J0IGludGVyZmFjZSBOZXh0UGFnZUNvbnRleHQge1xuICAvKipcbiAgICogRXJyb3Igb2JqZWN0IGlmIGVuY291bnRlcmVkIGR1cmluZyByZW5kZXJpbmdcbiAgICovXG4gIGVycj86IChFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9KSB8IG51bGxcbiAgLyoqXG4gICAqIGBIVFRQYCByZXF1ZXN0IG9iamVjdC5cbiAgICovXG4gIHJlcT86IEluY29taW5nTWVzc2FnZVxuICAvKipcbiAgICogYEhUVFBgIHJlc3BvbnNlIG9iamVjdC5cbiAgICovXG4gIHJlcz86IFNlcnZlclJlc3BvbnNlXG4gIC8qKlxuICAgKiBQYXRoIHNlY3Rpb24gb2YgYFVSTGAuXG4gICAqL1xuICBwYXRobmFtZTogc3RyaW5nXG4gIC8qKlxuICAgKiBRdWVyeSBzdHJpbmcgc2VjdGlvbiBvZiBgVVJMYCBwYXJzZWQgYXMgYW4gb2JqZWN0LlxuICAgKi9cbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIC8qKlxuICAgKiBgU3RyaW5nYCBvZiB0aGUgYWN0dWFsIHBhdGggaW5jbHVkaW5nIHF1ZXJ5LlxuICAgKi9cbiAgYXNQYXRoPzogc3RyaW5nXG4gIC8qKlxuICAgKiBgQ29tcG9uZW50YCB0aGUgdHJlZSBvZiB0aGUgQXBwIHRvIHVzZSBpZiBuZWVkaW5nIHRvIHJlbmRlciBzZXBhcmF0ZWx5XG4gICAqL1xuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxufVxuXG5leHBvcnQgdHlwZSBBcHBDb250ZXh0VHlwZTxSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXI+ID0ge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dD5cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbiAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgcm91dGVyOiBSXG59XG5cbmV4cG9ydCB0eXBlIEFwcEluaXRpYWxQcm9wcyA9IHtcbiAgcGFnZVByb3BzOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHNUeXBlPFxuICBSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXIsXG4gIFAgPSB7fVxuPiA9IEFwcEluaXRpYWxQcm9wcyAmIHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQsIGFueSwgUD5cbiAgcm91dGVyOiBSXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50Q29udGV4dCA9IE5leHRQYWdlQ29udGV4dCAmIHtcbiAgcmVuZGVyUGFnZTogUmVuZGVyUGFnZVxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudEluaXRpYWxQcm9wcyA9IFJlbmRlclBhZ2VSZXN1bHQgJiB7XG4gIHN0eWxlcz86IFJlYWN0LlJlYWN0RWxlbWVudFtdIHwgUmVhY3QuUmVhY3RGcmFnbWVudFxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFByb3BzID0gRG9jdW1lbnRJbml0aWFsUHJvcHMgJiB7XG4gIF9fTkVYVF9EQVRBX186IE5FWFRfREFUQVxuICBkYW5nZXJvdXNBc1BhdGg6IHN0cmluZ1xuICBidWlsZE1hbmlmZXN0OiBCdWlsZE1hbmlmZXN0XG4gIGFtcFBhdGg6IHN0cmluZ1xuICBpbkFtcE1vZGU6IGJvb2xlYW5cbiAgaHlicmlkQW1wOiBib29sZWFuXG4gIGlzRGV2ZWxvcG1lbnQ6IGJvb2xlYW5cbiAgZmlsZXM6IHN0cmluZ1tdXG4gIGR5bmFtaWNJbXBvcnRzOiBNYW5pZmVzdEl0ZW1bXVxuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBjYW5vbmljYWxCYXNlOiBzdHJpbmdcbiAgaGVhZFRhZ3M6IGFueVtdXG4gIHVuc3RhYmxlX3J1bnRpbWVKUz86IGZhbHNlXG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXF1ZXN0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmV4dEFwaVJlcXVlc3QgZXh0ZW5kcyBJbmNvbWluZ01lc3NhZ2Uge1xuICAvKipcbiAgICogT2JqZWN0IG9mIGBxdWVyeWAgdmFsdWVzIGZyb20gdXJsXG4gICAqL1xuICBxdWVyeToge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdXG4gIH1cbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgY29va2llc2AgZnJvbSBoZWFkZXJcbiAgICovXG4gIGNvb2tpZXM6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmdcbiAgfVxuXG4gIGJvZHk6IGFueVxuXG4gIGVudjogRW52XG5cbiAgcHJldmlldz86IGJvb2xlYW5cbiAgLyoqXG4gICAqIFByZXZpZXcgZGF0YSBzZXQgb24gdGhlIHJlcXVlc3QsIGlmIGFueVxuICAgKiAqL1xuICBwcmV2aWV3RGF0YT86IGFueVxufVxuXG4vKipcbiAqIFNlbmQgYm9keSBvZiByZXNwb25zZVxuICovXG50eXBlIFNlbmQ8VD4gPSAoYm9keTogVCkgPT4gdm9pZFxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVzcG9uc2VcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaVJlc3BvbnNlPFQgPSBhbnk+ID0gU2VydmVyUmVzcG9uc2UgJiB7XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGFueWAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAgc2VuZDogU2VuZDxUPlxuICAvKipcbiAgICogU2VuZCBkYXRhIGBqc29uYCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBqc29uOiBTZW5kPFQ+XG4gIHN0YXR1czogKHN0YXR1c0NvZGU6IG51bWJlcikgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIHJlZGlyZWN0KHVybDogc3RyaW5nKTogTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIHJlZGlyZWN0KHN0YXR1czogbnVtYmVyLCB1cmw6IHN0cmluZyk6IE5leHRBcGlSZXNwb25zZTxUPlxuXG4gIC8qKlxuICAgKiBTZXQgcHJldmlldyBkYXRhIGZvciBOZXh0LmpzJyBwcmVyZW5kZXIgbW9kZVxuICAgKi9cbiAgc2V0UHJldmlld0RhdGE6IChcbiAgICBkYXRhOiBvYmplY3QgfCBzdHJpbmcsXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIC8qKlxuICAgICAgICogU3BlY2lmaWVzIHRoZSBudW1iZXIgKGluIHNlY29uZHMpIGZvciB0aGUgcHJldmlldyBzZXNzaW9uIHRvIGxhc3QgZm9yLlxuICAgICAgICogVGhlIGdpdmVuIG51bWJlciB3aWxsIGJlIGNvbnZlcnRlZCB0byBhbiBpbnRlZ2VyIGJ5IHJvdW5kaW5nIGRvd24uXG4gICAgICAgKiBCeSBkZWZhdWx0LCBubyBtYXhpbXVtIGFnZSBpcyBzZXQgYW5kIHRoZSBwcmV2aWV3IHNlc3Npb24gZmluaXNoZXNcbiAgICAgICAqIHdoZW4gdGhlIGNsaWVudCBzaHV0cyBkb3duIChicm93c2VyIGlzIGNsb3NlZCkuXG4gICAgICAgKi9cbiAgICAgIG1heEFnZT86IG51bWJlclxuICAgIH1cbiAgKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgY2xlYXJQcmV2aWV3RGF0YTogKCkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSBoYW5kbGVyXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlIYW5kbGVyPFQgPSBhbnk+ID0gKFxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxuICByZXM6IE5leHRBcGlSZXNwb25zZTxUPlxuKSA9PiB2b2lkIHwgUHJvbWlzZTx2b2lkPlxuXG4vKipcbiAqIFV0aWxzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBleGVjT25jZTxUIGV4dGVuZHMgKC4uLmFyZ3M6IGFueVtdKSA9PiBSZXR1cm5UeXBlPFQ+PihcbiAgZm46IFRcbik6IFQge1xuICBsZXQgdXNlZCA9IGZhbHNlXG4gIGxldCByZXN1bHQ6IFJldHVyblR5cGU8VD5cblxuICByZXR1cm4gKCguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGlmICghdXNlZCkge1xuICAgICAgdXNlZCA9IHRydWVcbiAgICAgIHJlc3VsdCA9IGZuKC4uLmFyZ3MpXG4gICAgfVxuICAgIHJldHVybiByZXN1bHRcbiAgfSkgYXMgVFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TG9jYXRpb25PcmlnaW4oKSB7XG4gIGNvbnN0IHsgcHJvdG9jb2wsIGhvc3RuYW1lLCBwb3J0IH0gPSB3aW5kb3cubG9jYXRpb25cbiAgcmV0dXJuIGAke3Byb3RvY29sfS8vJHtob3N0bmFtZX0ke3BvcnQgPyAnOicgKyBwb3J0IDogJyd9YFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VVJMKCkge1xuICBjb25zdCB7IGhyZWYgfSA9IHdpbmRvdy5sb2NhdGlvblxuICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gIHJldHVybiBocmVmLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGlzcGxheU5hbWU8UD4oQ29tcG9uZW50OiBDb21wb25lbnRUeXBlPFA+KSB7XG4gIHJldHVybiB0eXBlb2YgQ29tcG9uZW50ID09PSAnc3RyaW5nJ1xuICAgID8gQ29tcG9uZW50XG4gICAgOiBDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1Jlc1NlbnQocmVzOiBTZXJ2ZXJSZXNwb25zZSkge1xuICByZXR1cm4gcmVzLmZpbmlzaGVkIHx8IHJlcy5oZWFkZXJzU2VudFxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZEdldEluaXRpYWxQcm9wczxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4oQXBwOiBOZXh0Q29tcG9uZW50VHlwZTxDLCBJUCwgUD4sIGN0eDogQyk6IFByb21pc2U8SVA+IHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoQXBwLnByb3RvdHlwZT8uZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgQXBwXG4gICAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIGlzIGRlZmluZWQgYXMgYW4gaW5zdGFuY2UgbWV0aG9kIC0gdmlzaXQgaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvZ2V0LWluaXRpYWwtcHJvcHMtYXMtYW4taW5zdGFuY2UtbWV0aG9kIGZvciBtb3JlIGluZm9ybWF0aW9uLmBcbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICAgIH1cbiAgfVxuICAvLyB3aGVuIGNhbGxlZCBmcm9tIF9hcHAgYGN0eGAgaXMgbmVzdGVkIGluIGBjdHhgXG4gIGNvbnN0IHJlcyA9IGN0eC5yZXMgfHwgKGN0eC5jdHggJiYgY3R4LmN0eC5yZXMpXG5cbiAgaWYgKCFBcHAuZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgaWYgKGN0eC5jdHggJiYgY3R4LkNvbXBvbmVudCkge1xuICAgICAgLy8gQHRzLWlnbm9yZSBwYWdlUHJvcHMgZGVmYXVsdFxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcGFnZVByb3BzOiBhd2FpdCBsb2FkR2V0SW5pdGlhbFByb3BzKGN0eC5Db21wb25lbnQsIGN0eC5jdHgpLFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge30gYXMgSVBcbiAgfVxuXG4gIGNvbnN0IHByb3BzID0gYXdhaXQgQXBwLmdldEluaXRpYWxQcm9wcyhjdHgpXG5cbiAgaWYgKHJlcyAmJiBpc1Jlc1NlbnQocmVzKSkge1xuICAgIHJldHVybiBwcm9wc1xuICB9XG5cbiAgaWYgKCFwcm9wcykge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgQXBwXG4gICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBzaG91bGQgcmVzb2x2ZSB0byBhbiBvYmplY3QuIEJ1dCBmb3VuZCBcIiR7cHJvcHN9XCIgaW5zdGVhZC5gXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChPYmplY3Qua2V5cyhwcm9wcykubGVuZ3RoID09PSAwICYmICFjdHguY3R4KSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgIGAke2dldERpc3BsYXlOYW1lKFxuICAgICAgICAgIEFwcFxuICAgICAgICApfSByZXR1cm5lZCBhbiBlbXB0eSBvYmplY3QgZnJvbSBcXGBnZXRJbml0aWFsUHJvcHNcXGAuIFRoaXMgZGUtb3B0aW1pemVzIGFuZCBwcmV2ZW50cyBhdXRvbWF0aWMgc3RhdGljIG9wdGltaXphdGlvbi4gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvZW1wdHktb2JqZWN0LWdldEluaXRpYWxQcm9wc2BcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcHJvcHNcbn1cblxuZXhwb3J0IGNvbnN0IHVybE9iamVjdEtleXMgPSBbXG4gICdhdXRoJyxcbiAgJ2hhc2gnLFxuICAnaG9zdCcsXG4gICdob3N0bmFtZScsXG4gICdocmVmJyxcbiAgJ3BhdGgnLFxuICAncGF0aG5hbWUnLFxuICAncG9ydCcsXG4gICdwcm90b2NvbCcsXG4gICdxdWVyeScsXG4gICdzZWFyY2gnLFxuICAnc2xhc2hlcycsXG5dXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRXaXRoVmFsaWRhdGlvbih1cmw6IFVybE9iamVjdCk6IHN0cmluZyB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIGlmICh1cmwgIT09IG51bGwgJiYgdHlwZW9mIHVybCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIE9iamVjdC5rZXlzKHVybCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGlmICh1cmxPYmplY3RLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICBgVW5rbm93biBrZXkgcGFzc2VkIHZpYSB1cmxPYmplY3QgaW50byB1cmwuZm9ybWF0OiAke2tleX1gXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmb3JtYXRVcmwodXJsKVxufVxuXG5leHBvcnQgY29uc3QgU1AgPSB0eXBlb2YgcGVyZm9ybWFuY2UgIT09ICd1bmRlZmluZWQnXG5leHBvcnQgY29uc3QgU1QgPVxuICBTUCAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWFyayA9PT0gJ2Z1bmN0aW9uJyAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWVhc3VyZSA9PT0gJ2Z1bmN0aW9uJ1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2xpbmsnKVxuIiwiLyoqIEBsaWNlbnNlIFJlYWN0IHYxNi4xMy4xXG4gKiByZWFjdC1pcy5kZXZlbG9wbWVudC5qc1xuICpcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgKGZ1bmN0aW9uKCkge1xuJ3VzZSBzdHJpY3QnO1xuXG4vLyBUaGUgU3ltYm9sIHVzZWQgdG8gdGFnIHRoZSBSZWFjdEVsZW1lbnQtbGlrZSB0eXBlcy4gSWYgdGhlcmUgaXMgbm8gbmF0aXZlIFN5bWJvbFxuLy8gbm9yIHBvbHlmaWxsLCB0aGVuIGEgcGxhaW4gbnVtYmVyIGlzIHVzZWQgZm9yIHBlcmZvcm1hbmNlLlxudmFyIGhhc1N5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLmZvcjtcbnZhciBSRUFDVF9FTEVNRU5UX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5lbGVtZW50JykgOiAweGVhYzc7XG52YXIgUkVBQ1RfUE9SVEFMX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5wb3J0YWwnKSA6IDB4ZWFjYTtcbnZhciBSRUFDVF9GUkFHTUVOVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZnJhZ21lbnQnKSA6IDB4ZWFjYjtcbnZhciBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc3RyaWN0X21vZGUnKSA6IDB4ZWFjYztcbnZhciBSRUFDVF9QUk9GSUxFUl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucHJvZmlsZXInKSA6IDB4ZWFkMjtcbnZhciBSRUFDVF9QUk9WSURFUl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucHJvdmlkZXInKSA6IDB4ZWFjZDtcbnZhciBSRUFDVF9DT05URVhUX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5jb250ZXh0JykgOiAweGVhY2U7IC8vIFRPRE86IFdlIGRvbid0IHVzZSBBc3luY01vZGUgb3IgQ29uY3VycmVudE1vZGUgYW55bW9yZS4gVGhleSB3ZXJlIHRlbXBvcmFyeVxuLy8gKHVuc3RhYmxlKSBBUElzIHRoYXQgaGF2ZSBiZWVuIHJlbW92ZWQuIENhbiB3ZSByZW1vdmUgdGhlIHN5bWJvbHM/XG5cbnZhciBSRUFDVF9BU1lOQ19NT0RFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5hc3luY19tb2RlJykgOiAweGVhY2Y7XG52YXIgUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5jb25jdXJyZW50X21vZGUnKSA6IDB4ZWFjZjtcbnZhciBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZm9yd2FyZF9yZWYnKSA6IDB4ZWFkMDtcbnZhciBSRUFDVF9TVVNQRU5TRV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc3VzcGVuc2UnKSA6IDB4ZWFkMTtcbnZhciBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5zdXNwZW5zZV9saXN0JykgOiAweGVhZDg7XG52YXIgUkVBQ1RfTUVNT19UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QubWVtbycpIDogMHhlYWQzO1xudmFyIFJFQUNUX0xBWllfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmxhenknKSA6IDB4ZWFkNDtcbnZhciBSRUFDVF9CTE9DS19UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuYmxvY2snKSA6IDB4ZWFkOTtcbnZhciBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZnVuZGFtZW50YWwnKSA6IDB4ZWFkNTtcbnZhciBSRUFDVF9SRVNQT05ERVJfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnJlc3BvbmRlcicpIDogMHhlYWQ2O1xudmFyIFJFQUNUX1NDT1BFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5zY29wZScpIDogMHhlYWQ3O1xuXG5mdW5jdGlvbiBpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSkge1xuICByZXR1cm4gdHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nIHx8IC8vIE5vdGU6IGl0cyB0eXBlb2YgbWlnaHQgYmUgb3RoZXIgdGhhbiAnc3ltYm9sJyBvciAnbnVtYmVyJyBpZiBpdCdzIGEgcG9seWZpbGwuXG4gIHR5cGUgPT09IFJFQUNUX0ZSQUdNRU5UX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfUFJPRklMRVJfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFIHx8IHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiB0eXBlICE9PSBudWxsICYmICh0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9MQVpZX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1BST1ZJREVSX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9SRVNQT05ERVJfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9TQ09QRV9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0JMT0NLX1RZUEUpO1xufVxuXG5mdW5jdGlvbiB0eXBlT2Yob2JqZWN0KSB7XG4gIGlmICh0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJiBvYmplY3QgIT09IG51bGwpIHtcbiAgICB2YXIgJCR0eXBlb2YgPSBvYmplY3QuJCR0eXBlb2Y7XG5cbiAgICBzd2l0Y2ggKCQkdHlwZW9mKSB7XG4gICAgICBjYXNlIFJFQUNUX0VMRU1FTlRfVFlQRTpcbiAgICAgICAgdmFyIHR5cGUgPSBvYmplY3QudHlwZTtcblxuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICBjYXNlIFJFQUNUX0FTWU5DX01PREVfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfRlJBR01FTlRfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1BST0ZJTEVSX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfVFlQRTpcbiAgICAgICAgICAgIHJldHVybiB0eXBlO1xuXG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHZhciAkJHR5cGVvZlR5cGUgPSB0eXBlICYmIHR5cGUuJCR0eXBlb2Y7XG5cbiAgICAgICAgICAgIHN3aXRjaCAoJCR0eXBlb2ZUeXBlKSB7XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfQ09OVEVYVF9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfTEFaWV9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX01FTU9fVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9QUk9WSURFUl9UWVBFOlxuICAgICAgICAgICAgICAgIHJldHVybiAkJHR5cGVvZlR5cGU7XG5cbiAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gJCR0eXBlb2Y7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICBjYXNlIFJFQUNUX1BPUlRBTF9UWVBFOlxuICAgICAgICByZXR1cm4gJCR0eXBlb2Y7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn0gLy8gQXN5bmNNb2RlIGlzIGRlcHJlY2F0ZWQgYWxvbmcgd2l0aCBpc0FzeW5jTW9kZVxuXG52YXIgQXN5bmNNb2RlID0gUkVBQ1RfQVNZTkNfTU9ERV9UWVBFO1xudmFyIENvbmN1cnJlbnRNb2RlID0gUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEU7XG52YXIgQ29udGV4dENvbnN1bWVyID0gUkVBQ1RfQ09OVEVYVF9UWVBFO1xudmFyIENvbnRleHRQcm92aWRlciA9IFJFQUNUX1BST1ZJREVSX1RZUEU7XG52YXIgRWxlbWVudCA9IFJFQUNUX0VMRU1FTlRfVFlQRTtcbnZhciBGb3J3YXJkUmVmID0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTtcbnZhciBGcmFnbWVudCA9IFJFQUNUX0ZSQUdNRU5UX1RZUEU7XG52YXIgTGF6eSA9IFJFQUNUX0xBWllfVFlQRTtcbnZhciBNZW1vID0gUkVBQ1RfTUVNT19UWVBFO1xudmFyIFBvcnRhbCA9IFJFQUNUX1BPUlRBTF9UWVBFO1xudmFyIFByb2ZpbGVyID0gUkVBQ1RfUFJPRklMRVJfVFlQRTtcbnZhciBTdHJpY3RNb2RlID0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRTtcbnZhciBTdXNwZW5zZSA9IFJFQUNUX1NVU1BFTlNFX1RZUEU7XG52YXIgaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUgPSBmYWxzZTsgLy8gQXN5bmNNb2RlIHNob3VsZCBiZSBkZXByZWNhdGVkXG5cbmZ1bmN0aW9uIGlzQXN5bmNNb2RlKG9iamVjdCkge1xuICB7XG4gICAgaWYgKCFoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0FzeW5jTW9kZSkge1xuICAgICAgaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUgPSB0cnVlOyAvLyBVc2luZyBjb25zb2xlWyd3YXJuJ10gdG8gZXZhZGUgQmFiZWwgYW5kIEVTTGludFxuXG4gICAgICBjb25zb2xlWyd3YXJuJ10oJ1RoZSBSZWFjdElzLmlzQXN5bmNNb2RlKCkgYWxpYXMgaGFzIGJlZW4gZGVwcmVjYXRlZCwgJyArICdhbmQgd2lsbCBiZSByZW1vdmVkIGluIFJlYWN0IDE3Ky4gVXBkYXRlIHlvdXIgY29kZSB0byB1c2UgJyArICdSZWFjdElzLmlzQ29uY3VycmVudE1vZGUoKSBpbnN0ZWFkLiBJdCBoYXMgdGhlIGV4YWN0IHNhbWUgQVBJLicpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBpc0NvbmN1cnJlbnRNb2RlKG9iamVjdCkgfHwgdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0FTWU5DX01PREVfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzQ29uY3VycmVudE1vZGUob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEU7XG59XG5mdW5jdGlvbiBpc0NvbnRleHRDb25zdW1lcihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9DT05URVhUX1RZUEU7XG59XG5mdW5jdGlvbiBpc0NvbnRleHRQcm92aWRlcihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9QUk9WSURFUl9UWVBFO1xufVxuZnVuY3Rpb24gaXNFbGVtZW50KG9iamVjdCkge1xuICByZXR1cm4gdHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiYgb2JqZWN0ICE9PSBudWxsICYmIG9iamVjdC4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNGb3J3YXJkUmVmKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU7XG59XG5mdW5jdGlvbiBpc0ZyYWdtZW50KG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0ZSQUdNRU5UX1RZUEU7XG59XG5mdW5jdGlvbiBpc0xhenkob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfTEFaWV9UWVBFO1xufVxuZnVuY3Rpb24gaXNNZW1vKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX01FTU9fVFlQRTtcbn1cbmZ1bmN0aW9uIGlzUG9ydGFsKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1BPUlRBTF9UWVBFO1xufVxuZnVuY3Rpb24gaXNQcm9maWxlcihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9QUk9GSUxFUl9UWVBFO1xufVxuZnVuY3Rpb24gaXNTdHJpY3RNb2RlKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1NUUklDVF9NT0RFX1RZUEU7XG59XG5mdW5jdGlvbiBpc1N1c3BlbnNlKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1NVU1BFTlNFX1RZUEU7XG59XG5cbmV4cG9ydHMuQXN5bmNNb2RlID0gQXN5bmNNb2RlO1xuZXhwb3J0cy5Db25jdXJyZW50TW9kZSA9IENvbmN1cnJlbnRNb2RlO1xuZXhwb3J0cy5Db250ZXh0Q29uc3VtZXIgPSBDb250ZXh0Q29uc3VtZXI7XG5leHBvcnRzLkNvbnRleHRQcm92aWRlciA9IENvbnRleHRQcm92aWRlcjtcbmV4cG9ydHMuRWxlbWVudCA9IEVsZW1lbnQ7XG5leHBvcnRzLkZvcndhcmRSZWYgPSBGb3J3YXJkUmVmO1xuZXhwb3J0cy5GcmFnbWVudCA9IEZyYWdtZW50O1xuZXhwb3J0cy5MYXp5ID0gTGF6eTtcbmV4cG9ydHMuTWVtbyA9IE1lbW87XG5leHBvcnRzLlBvcnRhbCA9IFBvcnRhbDtcbmV4cG9ydHMuUHJvZmlsZXIgPSBQcm9maWxlcjtcbmV4cG9ydHMuU3RyaWN0TW9kZSA9IFN0cmljdE1vZGU7XG5leHBvcnRzLlN1c3BlbnNlID0gU3VzcGVuc2U7XG5leHBvcnRzLmlzQXN5bmNNb2RlID0gaXNBc3luY01vZGU7XG5leHBvcnRzLmlzQ29uY3VycmVudE1vZGUgPSBpc0NvbmN1cnJlbnRNb2RlO1xuZXhwb3J0cy5pc0NvbnRleHRDb25zdW1lciA9IGlzQ29udGV4dENvbnN1bWVyO1xuZXhwb3J0cy5pc0NvbnRleHRQcm92aWRlciA9IGlzQ29udGV4dFByb3ZpZGVyO1xuZXhwb3J0cy5pc0VsZW1lbnQgPSBpc0VsZW1lbnQ7XG5leHBvcnRzLmlzRm9yd2FyZFJlZiA9IGlzRm9yd2FyZFJlZjtcbmV4cG9ydHMuaXNGcmFnbWVudCA9IGlzRnJhZ21lbnQ7XG5leHBvcnRzLmlzTGF6eSA9IGlzTGF6eTtcbmV4cG9ydHMuaXNNZW1vID0gaXNNZW1vO1xuZXhwb3J0cy5pc1BvcnRhbCA9IGlzUG9ydGFsO1xuZXhwb3J0cy5pc1Byb2ZpbGVyID0gaXNQcm9maWxlcjtcbmV4cG9ydHMuaXNTdHJpY3RNb2RlID0gaXNTdHJpY3RNb2RlO1xuZXhwb3J0cy5pc1N1c3BlbnNlID0gaXNTdXNwZW5zZTtcbmV4cG9ydHMuaXNWYWxpZEVsZW1lbnRUeXBlID0gaXNWYWxpZEVsZW1lbnRUeXBlO1xuZXhwb3J0cy50eXBlT2YgPSB0eXBlT2Y7XG4gIH0pKCk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtaXMucHJvZHVjdGlvbi5taW4uanMnKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtaXMuZGV2ZWxvcG1lbnQuanMnKTtcbn1cbiIsImltcG9ydCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgeyBHbG9iYWxDb250ZXh0IH0gZnJvbSAnLi4vLi4vY29udGV4dC9HbG9iYWxDb250ZXh0JztcclxuXHJcbmltcG9ydCBQcm9maWxlSW5mbyBmcm9tICcuLi8uLi9jb21wb25lbnRzL1Byb2ZpbGVJbmZvJztcclxuaW1wb3J0IEFib3V0TWUgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9BYm91dE1lJztcclxuaW1wb3J0IFZpZGVvUGxheWVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvVmlkZW9QbGF5ZXInO1xyXG5pbXBvcnQgQWRkVG9QbGF5bGlzdCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0FkZFRvUGxheWxpc3QnO1xyXG5pbXBvcnQgUGxheWxpc3QgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9QbGF5TGlzdCc7XHJcbmltcG9ydCBDb21tZW50U2VjdGlvbiBmcm9tICcuLi8uLi9jb21wb25lbnRzL0NvbW1lbnRTZWN0aW9uJztcclxuaW1wb3J0IFByb2ZpbGVFZGl0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvUHJvZmlsZUVkaXQnO1xyXG5pbXBvcnQgRmF2b3VyaXRlcyBmcm9tICcuLi8uLi9jb21wb25lbnRzL0Zhdm91cml0ZXMnO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvRm9vdGVyJztcclxuXHJcbmNvbnN0IFByb2ZpbGUgPSAoKSA9PiB7XHJcblxyXG4gIGNvbnN0IHsgY3VycmVudFVzZXIsIHByb2ZpbGVVc2VyLCBzZXRBdXRvcGxheSwgZmV0Y2hQcm9maWxlVXNlcn0gPSB1c2VDb250ZXh0KEdsb2JhbENvbnRleHQpO1xyXG5cclxuICAvLyBHZXQgdGhlIHVzZXJJZCBmcm9tIHRoZSBVUkwgYW5kIGZldGNoIHRoZSBwcm9maWxlIHVzZXIncyBkYXRhXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICBjb25zdCB7IHVzZXJJZCB9ID0gcm91dGVyLnF1ZXJ5XHJcbiAgZmV0Y2hQcm9maWxlVXNlcih1c2VySWQsIHRydWUpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICBzZXRBdXRvcGxheShmYWxzZSk7XHJcbiAgICB9LCBbXSlcclxuXHJcbiAgY29uc3QgW2VkaXRNb2RlLCBzZXRFZGl0TW9kZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBhbmltYXRlX19hbmltYXRlZCBhbmltYXRlX19mYWRlSW5cIiBpZD1cInByb2ZpbGVcIj5cclxuICAgICAgICBcclxuICAgICAgICA8UHJvZmlsZUluZm8gc2V0RWRpdE1vZGU9e3NldEVkaXRNb2RlfSBlZGl0TW9kZT17ZWRpdE1vZGV9IC8+XHJcblxyXG4gICAgICAgIHtlZGl0TW9kZSAmJlxyXG4gICAgICAgICAgPFByb2ZpbGVFZGl0IHNldEVkaXRNb2RlPXtzZXRFZGl0TW9kZX0vPlxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgPEFib3V0TWUgcHJvZmlsZVVzZXI9e3Byb2ZpbGVVc2VyfS8+XHJcblxyXG4gICAgICAgIDxWaWRlb1BsYXllci8+XHJcblxyXG4gICAgICAgIHtwcm9maWxlVXNlci5pZCA9PT0gY3VycmVudFVzZXIuaWQgJiYgXHJcbiAgICAgICAgICA8QWRkVG9QbGF5bGlzdC8+IFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgPFBsYXlsaXN0IHByb2ZpbGVVc2VyPXtwcm9maWxlVXNlcn0vPlxyXG5cclxuICAgICAgICA8Q29tbWVudFNlY3Rpb24gcHJvZmlsZVVzZXI9e3Byb2ZpbGVVc2VyfS8+XHJcblxyXG4gICAgICAgIDxGYXZvdXJpdGVzIHByb2ZpbGVVc2VyPXtwcm9maWxlVXNlcn0vPlxyXG5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAjcHJvZmlsZSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBgfTwvc3R5bGU+XHJcblxyXG4gICAgICAgIDxGb290ZXIgLz5cclxuICAgICAgPC8+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9maWxlOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZyYW1lci1tb3Rpb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzLWV4YWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInF1ZXJ5c3RyaW5nXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1qc3gvc3R5bGVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==