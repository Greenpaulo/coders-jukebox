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
  console.log('key', _config_keys__WEBPACK_IMPORTED_MODULE_4__["YOUTUBEAPI_KEY"]);

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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxDb2RpbmdcXE15UHJvamVjdHNcXGNvZGVycy1qdWtlYm94XFxjb21wb25lbnRzXFxBZGRUb1BsYXlsaXN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdEYyxBQUlrQyxBQVNkLEFBU0QsQUFPa0MsQUFNakMsQUFPRyxBQU9RLEFBSUQsQUFPTixBQU1BLEFBSUEsWUEvQ0MsQ0FhQSxDQU9FLENBa0JwQixBQU1BLEFBSUEsTUFqQmdCLE1BakROLEdBbUJBLENBYVosQ0FPRSxHQVdBLEVBL0NtQixHQWlCckIsTUFLOEIsVUFyQmhCLFlBQ2QsTUFJMEMsQUFpQnhCLElBbUJoQixZQWxCRix3QkFmZSxhQUNlLDRCQUM5QiIsImZpbGUiOiJDOlxcQ29kaW5nXFxNeVByb2plY3RzXFxjb2RlcnMtanVrZWJveFxcY29tcG9uZW50c1xcQWRkVG9QbGF5bGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBTZWFyY2hCYXIgZnJvbSAnLi9TZWFyY2hCYXInO1xyXG5pbXBvcnQgeyB5b3V0dWJlIH0gZnJvbSAnLi4vYXBpcy95b3V0dWJlJztcclxuaW1wb3J0IHsgWU9VVFVCRUFQSV9LRVkgfSBmcm9tICcuLi9jb25maWcva2V5cyc7XHJcbmltcG9ydCBWaWRlb0l0ZW0gZnJvbSAnLi9WaWRlb0l0ZW0nO1xyXG5pbXBvcnQgY29sb3JzIGZyb20gJy4uL2Nzcy12YXJpYWJsZXMvY29sb3JzJztcclxuXHJcbmNvbnN0IEFkZFRvUGxheWxpc3QgPSAoKSA9PiB7XHJcblxyXG4gIGNvbnN0IFt2aWRlb3MsIHNldFZpZGVvc10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIGNvbnNvbGUubG9nKCdrZXknLCBZT1VUVUJFQVBJX0tFWSk7XHJcblxyXG4gIGNvbnN0IHNlYXJjaFZpZGVvSGFuZGxlciA9IGFzeW5jIChzZWFyY2hJbnB1dCkgPT4ge1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgeW91dHViZS5nZXQoJy9zZWFyY2gnLCB7XHJcbiAgICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgICB0eXBlOiAndmlkZW8nLFxyXG4gICAgICAgICAgcGFydDogJ3NuaXBwZXQnLFxyXG4gICAgICAgICAgbWF4UmVzdWx0czogNSxcclxuICAgICAgICAgIGtleTogWU9VVFVCRUFQSV9LRVksXHJcbiAgICAgICAgICBxOiBzZWFyY2hJbnB1dFxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuXHJcbiAgICBjb25zdCB2aWRlb0xpc3QgPSByZXMuZGF0YS5pdGVtcztcclxuICAgIHNldFZpZGVvcyh2aWRlb0xpc3QpO1xyXG4gIH1cclxuXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBpZD1cImFkZFRvUGxheWxpc3RcIj5cclxuICAgICAgPGRpdiBpZD1cImhlYWRlclwiPlxyXG4gICAgICAgIDxoMj5BZGQgVG8gUGxheWxpc3Q8L2gyPlxyXG4gICAgICAgIDxTZWFyY2hCYXIgcGxhY2Vob2xkZXI9J1NlYXJjaCBmb3IgbXVzaWMnIHNlYXJjaE1vZGU9XCJ2aWRlb1wiIHN1Ym1pdEhhbmRsZXI9e3NlYXJjaFZpZGVvSGFuZGxlcn0vPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcblxyXG4gICAgICA8ZGl2IGlkPVwidmlkZW9zXCI+XHJcbiAgICAgICAgeyB2aWRlb3MubGVuZ3RoID09PSAwICYmXHJcbiAgICAgICAgICA8aDM+U2VhcmNoIGZvciBtdXNpYyB0byBhZGQgdG8geW91ciBwbGF5bGlzdCE8L2gzPlxyXG4gICAgICAgIH1cclxuICAgICAgICB7dmlkZW9zLm1hcCh2aWRlbyA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8VmlkZW9JdGVtIHZpZGVvPXt2aWRlb30gbW9kZT1cInlvdXR1YmVcIiBrZXk9e3ZpZGVvLmlkLnZpZGVvSWR9Lz5cclxuICAgICAgICAgIClcclxuICAgICAgICB9KX1cclxuICAgICAgPC9kaXY+XHJcblxyXG4gIDxzdHlsZSBqc3g+e2BcclxuXHJcbiAgICBzZWN0aW9uIHtcclxuICAgICAgbWFyZ2luOiAycmVtIGF1dG8gM3JlbSBhdXRvO1xyXG4gICAgICB3aWR0aDogODQlO1xyXG4gICAgICAvKiBwYWRkaW5nOiAzcmVtOyAqL1xyXG4gICAgICAvKiBib3JkZXI6IDFweCBzb2xpZCBibGFjazsgKi9cclxuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgI2hlYWRlciB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGJhY2tncm91bmQ6ICR7Y29sb3JzLmdyYWRpZW50fTtcclxuICAgICAgLyogbWFyZ2luOiAycmVtIDA7ICovXHJcbiAgICAgIC8qIGhlaWdodDogMTAwJTsgKi9cclxuICAgICAgcGFkZGluZzogMnJlbTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDAgMDtcclxuICAgIH1cclxuXHJcbiAgICBoMiB7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiA3cmVtO1xyXG4gICAgICB3aWR0aDogMjUlO1xyXG4gICAgfVxyXG5cclxuICAgICN2aWRlb3Mge1xyXG4gICAgICAvKiBwYWRkaW5nOiAxcmVtOyAqL1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAke2NvbG9ycy5wcmltYXJ5fTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMCAwIDEwcHggMTBweDtcclxuICAgICAgYm9yZGVyLXRvcDogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICBoMyB7XHJcbiAgICAgIHBhZGRpbmc6IDJyZW07XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAvKiBNZWRpYSBxdWVyaWVzICovXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogMTEwMHB4KSB7XHJcbiAgICAgIGgyIHtcclxuICAgICAgICBtaW4td2lkdGg6IDI2JTtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogODMwcHgpIHtcclxuICAgICAgI2hlYWRlciB7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgfVxyXG5cclxuICAgICAgaDIge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcclxuICAgICAgICBtaW4td2lkdGg6IDYwJTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1MjBweCkge1xyXG4gICAgICAjaGVhZGVyIHtcclxuICAgICAgICBwYWRkaW5nOiAxLjVyZW07XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogMzU1cHgpIHtcclxuICAgICAgaDIge1xyXG4gICAgICAgIG1pbi13aWR0aDogMTAwJTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaDMge1xyXG4gICAgICAgIHBhZGRpbmc6IDEuNXJlbTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICBgfTwvc3R5bGU+XHJcblxyXG5cclxuXHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBZGRUb1BsYXlsaXN0OyJdfQ== */
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
    src: `http://localhost:5000/image/${favUser.profilePhotoFilename}`,
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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxDb2RpbmdcXE15UHJvamVjdHNcXGNvZGVycy1qdWtlYm94XFxjb21wb25lbnRzXFxGYXZvdXJpdGVJdGVtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBFa0IsQUFJeUIsQUFRRyxBQVFMLEFBSUEsQUFJRCxBQVl1QixBQUlwQixBQUlJLEFBS0YsQUFRSCxBQUtBLEFBS0ssV0ExQ1AsQUFpQ0csQUFNZCxDQS9DRixBQUlBLEVBcEJvQixBQXdDcEIsQUFTaUIsRUFrQmYsQ0EzRGdCLENBb0NsQixJQW5Cb0IsQ0FpQ2xCLElBUkEsS0FqRGEsQ0FRRyxPQWlCRSxLQXhCQSxJQVFDLFNBaUJYLEtBeEJzQyxHQXlCcEMsRUFqQmdCLFFBa0JILEFBT3pCLGtCQXhCQSxLQWtCbUIsVUExQm5CLE9BMkJxQyxtQ0FDckMiLCJmaWxlIjoiQzpcXENvZGluZ1xcTXlQcm9qZWN0c1xcY29kZXJzLWp1a2Vib3hcXGNvbXBvbmVudHNcXEZhdm91cml0ZUl0ZW0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlQ29udGV4dCwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBHbG9iYWxDb250ZXh0IH0gZnJvbSAnLi4vY29udGV4dC9HbG9iYWxDb250ZXh0JztcclxuaW1wb3J0IGNvbG9ycyBmcm9tICcuLi9jc3MtdmFyaWFibGVzL2NvbG9ycyc7XHJcblxyXG5cclxuXHJcbmNvbnN0IEZhdm91cml0ZUl0ZW0gPSAoe2lkfSkgPT4ge1xyXG5cclxuXHJcbiAgY29uc3QgeyBnZXRGYXZvdXJpdGVVc2VyLCBmZXRjaFByb2ZpbGVVc2VyLCByZW1vdmVGYXZvdXJpdGUsIGN1cnJlbnRVc2VyLCBwcm9maWxlVXNlciwgYXV0aFN0YXRlIH0gPSB1c2VDb250ZXh0KEdsb2JhbENvbnRleHQpO1xyXG4gIFxyXG4gIGNvbnN0IFtmYXZVc2VyLCBzZXRGYXZVc2VyXSA9IHVzZVN0YXRlKHt9KTtcclxuXHJcbiAgY29uc3QgZmF2VXNlckNsaWNrSGFuZGxlciA9ICgpID0+IHtcclxuICAgIGZldGNoUHJvZmlsZVVzZXIoaWQsIGZhbHNlKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHJlbW92ZUZhdkhhbmRsZXIgPSAoKSA9PiB7XHJcbiAgICByZW1vdmVGYXZvdXJpdGUoaWQpO1xyXG4gIH1cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgY29uc3QgdXNlckRhdGEgPSBhd2FpdCBnZXRGYXZvdXJpdGVVc2VyKGlkKTtcclxuICAgICAgc2V0RmF2VXNlcih7XHJcbiAgICAgICAgZmlyc3ROYW1lOiB1c2VyRGF0YS5maXJzdE5hbWUsXHJcbiAgICAgICAgbGFzdE5hbWU6IHVzZXJEYXRhLmxhc3ROYW1lLFxyXG4gICAgICAgIHByb2ZpbGVQaG90b0ZpbGVuYW1lOiB1c2VyRGF0YS5wcm9maWxlUGhvdG9GaWxlbmFtZSxcclxuICAgICAgICBpZFxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gICAgZmV0Y2hEYXRhKCk7XHJcbiAgfSwgW2lkXSlcclxuICBcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgaWQ9XCJmYXZvdXJpdGUtaXRlbVwiPlxyXG4gICAgICB7LyogPGg0PkF2YXRhcjwvaDQ+ICovfVxyXG4gICAgICA8ZGl2IGlkPVwiYXZhdGFyXCI+XHJcbiAgICAgICAge2ZhdlVzZXIucHJvZmlsZVBob3RvRmlsZW5hbWUgPT09IG51bGwgJiZcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNyb3BcIj5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvZmlsZS9bdXNlcklkXVwiIGFzPXtgL3Byb2ZpbGUvJHtpZH1gfT5cclxuICAgICAgICAgICAgPGEgb25DbGljaz17ZmF2VXNlckNsaWNrSGFuZGxlcn0+XHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9XCIvZGVmYXVsdC1hdmF0YXIuanBnXCIgYWx0PVwiYXZhdGFyXCIgLz5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgICAgIH0gXHJcblxyXG4gICAgICAgIHtmYXZVc2VyLnByb2ZpbGVQaG90b0ZpbGVuYW1lICE9PSBudWxsICYmIGZhdlVzZXIucHJvZmlsZVBob3RvRmlsZW5hbWUgIT09ICcnICYmIGZhdlVzZXIucHJvZmlsZVBob3RvRmlsZW5hbWUgIT09IHVuZGVmaW5lZCAmJlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3JvcFwiPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9maWxlL1t1c2VySWRdXCIgYXM9e2AvcHJvZmlsZS8ke2lkfWB9PlxyXG4gICAgICAgICAgICA8YSBvbkNsaWNrPXtmYXZVc2VyQ2xpY2tIYW5kbGVyfT5cclxuICAgICAgICAgICAgICA8aW1nIHNyYz17YGh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9pbWFnZS8ke2ZhdlVzZXIucHJvZmlsZVBob3RvRmlsZW5hbWV9YH0gYWx0PVwiYXZhdGFyXCIgLz5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIH1cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8TGluayBocmVmPVwiL3Byb2ZpbGUvW3VzZXJJZF1cIiBhcz17YC9wcm9maWxlLyR7aWR9YH0+XHJcbiAgICAgICAgPGEgb25DbGljaz17ZmF2VXNlckNsaWNrSGFuZGxlcn0+PGgzPntmYXZVc2VyLmZpcnN0TmFtZX0ge2ZhdlVzZXIubGFzdE5hbWV9PC9oMz48L2E+XHJcbiAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgIFxyXG4gICAgICB7IGF1dGhTdGF0ZS5hdXRoZW50aWNhdGVkID09PSB0cnVlICYmIGN1cnJlbnRVc2VyLmlkID09PSBwcm9maWxlVXNlci5pZCAmJlxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17cmVtb3ZlRmF2SGFuZGxlcn0+XHJcbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS10aW1lcy1jaXJjbGVcIj48L2k+XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIFxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgIFxyXG4gICAgICAgICNmYXZvdXJpdGUtaXRlbSB7XHJcbiAgICAgICAgICBtYXJnaW46IDAgMXJlbTtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgIHBhZGRpbmc6IDJyZW07XHJcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAke2NvbG9ycy5wcmltYXJ5fTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jcm9wIHtcclxuICAgICAgICAgIG1heC1oZWlnaHQ6IDEwMHB4O1xyXG4gICAgICAgICAgbWF4LXdpZHRoOiAxMDBweDtcclxuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG8gMC44cmVtIGF1dG87XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhIHtcclxuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICB3aWR0aDogNDBweDtcclxuICAgICAgICAgIGhlaWdodDogOHB4O1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgdG9wOiAwcHg7XHJcbiAgICAgICAgICByaWdodDogOHB4O1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgICAgICAgIGNvbG9yOiAke2NvbG9ycy5wcmltYXJ5fTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGkge1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgMC4ycyBlYXNlLWluLW91dDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgaTpob3ZlciB7XHJcbiAgICAgICAgICBjb2xvcjogI2U1MzA1YTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGgzIHtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2OTBweCApIHtcclxuICAgICAgICAgICNmYXZvdXJpdGUtaXRlbSB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCAxcmVtO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0NTBweCApIHtcclxuICAgICAgICAgIC5jcm9wIHtcclxuICAgICAgICAgICAgd2lkdGg6IDgwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogODBweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICB3aWR0aDogODBweDtcclxuICAgICAgICAgICAgLyogcGFkZGluZy10b3A6IDFyZW07ICovXHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgI2F2YXRhciB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIFxyXG4gICAgICBgfTwvc3R5bGU+XHJcblxyXG5cclxuXHJcblxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGYXZvdXJpdGVJdGVtOyJdfQ== */
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1405241134", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].tertiary, profileUser.profilePhotoFilename, _css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].secondary]]])
  }, __jsx("div", {
    id: "profile-photo",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1405241134", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].tertiary, profileUser.profilePhotoFilename, _css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].secondary]]])
  }, profileUser.profilePhotoFilename !== null && profileUser.profilePhotoFilename !== '' && __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1405241134", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].tertiary, profileUser.profilePhotoFilename, _css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].secondary]]]) + " " + "crop"
  }), (profileUser.profilePhotoFilename === null || profileUser.profilePhotoFilename === '') && __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1405241134", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].tertiary, profileUser.profilePhotoFilename, _css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].secondary]]]) + " " + "crop"
  }, __jsx("img", {
    src: "/default-avatar.jpg",
    alt: "profile-photo",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1405241134", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].tertiary, profileUser.profilePhotoFilename, _css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].secondary]]])
  }))), __jsx("div", {
    id: "user-info",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1405241134", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].tertiary, profileUser.profilePhotoFilename, _css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].secondary]]])
  }, __jsx("div", {
    id: "info",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1405241134", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].tertiary, profileUser.profilePhotoFilename, _css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].secondary]]])
  }, __jsx("h1", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1405241134", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].tertiary, profileUser.profilePhotoFilename, _css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].secondary]]])
  }, profileUser.firstName, " ", profileUser.lastName), __jsx("h2", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1405241134", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].tertiary, profileUser.profilePhotoFilename, _css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].secondary]]])
  }, "Job Title: \xA0 ", profileUser.jobTitle), __jsx("h2", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1405241134", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].tertiary, profileUser.profilePhotoFilename, _css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].secondary]]])
  }, "Location: \xA0 ", profileUser.location), __jsx("h2", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1405241134", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].tertiary, profileUser.profilePhotoFilename, _css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].secondary]]])
  }, "Languages: \xA0 ", getLanguageString())), __jsx("div", {
    id: "buttons",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1405241134", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].tertiary, profileUser.profilePhotoFilename, _css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].secondary]]])
  }, profileUser.id === currentUser.id && __jsx("i", {
    id: "profile-edit-cog",
    "aria-hidden": "true",
    onClick: () => setEditMode(!editMode),
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1405241134", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].tertiary, profileUser.profilePhotoFilename, _css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].secondary]]]) + " " + "fa fa-cog fa-2x"
  }) // <button id="profile-edit-btn" onClick={showProfileEditSection}><i className="fa fa-cog" aria-hidden="true"></i></button>
  , profileUser.id !== currentUser.id && !currentUser.favourites.includes(profileUser.id) && authState.authenticated === true && __jsx("button", {
    id: "add-favourite",
    onClick: addFavouriteHandler,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1405241134", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].tertiary, profileUser.profilePhotoFilename, _css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].secondary]]])
  }, __jsx("i", {
    "aria-hidden": "true",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1405241134", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].tertiary, profileUser.profilePhotoFilename, _css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].secondary]]]) + " " + "fa fa-star-o fa-2x favourite"
  })), currentUser.favourites.includes(profileUser.id) && __jsx("button", {
    id: "remove-favourite",
    onClick: removeFavouriteHandler,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1405241134", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].tertiary, profileUser.profilePhotoFilename, _css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].secondary]]])
  }, __jsx("i", {
    "aria-hidden": "true",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1405241134", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].tertiary, profileUser.profilePhotoFilename, _css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].secondary]]]) + " " + "fa fa-star fa-2x favourite"
  }))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1405241134",
    dynamic: [_css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].tertiary, profileUser.profilePhotoFilename, _css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].secondary]
  }, `section.__jsx-style-dynamic-selector{border-radius:10px;margin-top:1rem;}#user.__jsx-style-dynamic-selector{margin:2rem 0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;background:-webkit-linear-gradient(to right,#FF4B2B,#FF416C);background:linear-gradient(to right,#FF4B2B,#FF416C);}#user.__jsx-style-dynamic-selector h1.__jsx-style-dynamic-selector{font-size:3rem;margin:1rem 0 4rem 0;line-height:3rem;}#user.__jsx-style-dynamic-selector h2.__jsx-style-dynamic-selector{margin-bottom:2rem;}#profile-photo.__jsx-style-dynamic-selector{width:33%;background:white;padding:3.5rem 3rem 3rem 3rem;border:1px solid black;border-right:none;border-radius:10px 0 0 10px;}img.__jsx-style-dynamic-selector{width:50px;}#user-info.__jsx-style-dynamic-selector{width:61%;padding:3rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}i#profile-edit-cog.__jsx-style-dynamic-selector{cursor:pointer;-webkit-transition:-webkit-transform 2s;-webkit-transition:transform 2s;transition:transform 2s;}i#profile-edit-cog.__jsx-style-dynamic-selector:hover{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}button#add-favourite.__jsx-style-dynamic-selector,button#remove-favourite.__jsx-style-dynamic-selector{cursor:pointer;background:white;color:black;border:1px solid ${_css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].tertiary};border-radius:50%;padding:0.7rem;font-size:1rem;height:50px;width:50px;position:relative;}#playlist.__jsx-style-dynamic-selector{margin-top:4rem;}.crop.__jsx-style-dynamic-selector{width:266px;height:266px;overflow:hidden;border-radius:50%;background-image:url('http://localhost:3000/image/${profileUser.profilePhotoFilename}');background-size:cover;}img.__jsx-style-dynamic-selector{width:100%;height:100%;}i.favourite.__jsx-style-dynamic-selector{color:${_css_variables_colors__WEBPACK_IMPORTED_MODULE_3__["default"].secondary};position:absolute;top:9px;left:9.6px;}@media (max-width:1150px ){#user.__jsx-style-dynamic-selector{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;background:none;width:75%;margin:auto;}#profile-photo.__jsx-style-dynamic-selector{margin:auto;width:61%;background:none;}.crop.__jsx-style-dynamic-selector{margin:auto;}#user-info.__jsx-style-dynamic-selector{background:-webkit-linear-gradient(to right,#FF4B2B,#FF416C);background:linear-gradient(to right,#FF4B2B,#FF416C);margin:auto;width:90%;border-radius:10px;padding:2.5rem;}}@media (max-width:800px){#profile-photo.__jsx-style-dynamic-selector{padding:0;margin:3.5rem auto 3rem auto;}}@media (max-width:768px){#user-info.__jsx-style-dynamic-selector{position:relative;}#info.__jsx-style-dynamic-selector{width:100%;margin:auto;}#buttons.__jsx-style-dynamic-selector{position:absolute;right:21px;top:21px;}}@media (max-width:580px ){#user.__jsx-style-dynamic-selector{width:100%;}#user.__jsx-style-dynamic-selector h1.__jsx-style-dynamic-selector{margin:2rem 0 3rem 0;font-size:2.5rem;}h2.__jsx-style-dynamic-selector{font-size:1.5rem;}}@media (max-width:470px ){#buttons.__jsx-style-dynamic-selector{position:absolute;right:14px;top:14px;}#user-info.__jsx-style-dynamic-selector h1.__jsx-style-dynamic-selector{text-align:center;}#user-info.__jsx-style-dynamic-selector{padding:2rem;}#user.__jsx-style-dynamic-selector h1.__jsx-style-dynamic-selector{font-size:2rem;margin-bottom:1rem;}h2.__jsx-style-dynamic-selector{font-size:1.2rem;text-align:center;}}@media (max-width:445px ){#profile-photo.__jsx-style-dynamic-selector{width:100%;}.crop.__jsx-style-dynamic-selector{max-width:200px;max-height:200px;}}@media (max-width:370px ){i.favourite.__jsx-style-dynamic-selector{top:4.7px;left:5.7px;}.fa-star.__jsx-style-dynamic-selector .fa-2x.__jsx-style-dynamic-selector,.fa-star-o.__jsx-style-dynamic-selector <div.__jsx-style-dynamic-selector className="fa-2x".__jsx-style-dynamic-selector></div.__jsx-style-dynamic-selector>{font-size:1.4em;}button#remove-favourite.__jsx-style-dynamic-selector{height:41px;width:41px;}}@media (max-width:320px ){#user.__jsx-style-dynamic-selector h1.__jsx-style-dynamic-selector{font-size:2.2rem;margin-bottom:2rem;}}@media (max-height:820px ){#profile-photo.__jsx-style-dynamic-selector{margin:2rem auto;}}@media (max-height:770px ){#profile-photo.__jsx-style-dynamic-selector{margin:2rem auto;}}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxDb2RpbmdcXE15UHJvamVjdHNcXGNvZGVycy1qdWtlYm94XFxjb21wb25lbnRzXFxQcm9maWxlSW5mby5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwR2tCLEFBTTRCLEFBTUwsQUFXQyxBQU1JLEFBSVQsQUFTQyxBQUtELEFBT0ssQUFLVSxBQUlWLEFBZUMsQUFJSixBQVVELEFBS3dCLEFBU1gsQUFPVixBQU1BLEFBS21ELEFBV3JELEFBT1EsQUFNUCxBQVNPLEFBU1AsQUFJVSxBQUtKLEFBT0MsQUFNQSxBQUlMLEFBSUUsQUFLRSxBQU9OLEFBSUssQUFRTixBQU1iLEFBR2UsQUFRSyxBQU9BLEFBTUEsVUF4TkYsQUFjSixBQXdGa0IsQUFxRmxCLENBbExmLEFBa0RjLEFBd0RFLEFBa0JkLEFBMENBLENBOUhhLEFBK0JELEFBT1osQUE2R2EsQ0FyQ2IsQ0FwTGEsQ0FXUSxBQStCRyxBQVNQLEFBcUlJLENBdEh2QixBQXNJcUIsQUFhbkIsQ0FsREEsQUEwQm9CLEFBb0NDLEFBT3JCLEFBTUEsQ0ExR0EsQUFhYSxBQXlCQSxBQU1iLENBdExnQixBQXVCbEIsRUE4SUMsQUFrREMsQ0EzR2tCLENBbEVMLEFBNkNmLEFBd0RFLEFBaUZBLEVBbkpnQixFQWpEYyxFQTRIbkIsQUF5QkEsR0F2SEMsQ0FxSlosQ0FoQkEsQ0E3TEYsQUF5Rm9CLEFBeUdsQixDQWxMaUIsQUFzTmpCLEVBM0hBLEFBNENBLEFBWUEsQUFhQSxDQWhEQSxFQXBEa0IsR0FuQjRCLFNBeENoRCxBQXlFVSxJQS9EZSxFQWtEMEQsRUFjdEUsQUF5QjhDLFdBeEIzRCxNQU1vQixFQXRFQSxPQXVCcEIsQ0E5Q2dDLEVBcURaLElBeUNOLEdBMURrQixDQVpGLE1BdUVkLElBekNDLEdBWmpCLEdBc0VnQixFQWhCZCxPQXpDZSxHQTlCakIsQUF3RmMsVUFDUyxFQTFEVCxFQWtCVSxVQWpCWCxLQTBETSxNQXpEQyxDQWlCcEIsUUF5Q0UsU0F2REYsd0JBM0RpRSxTQW1DakUsb0RBbEN5RCxxREFHekQiLCJmaWxlIjoiQzpcXENvZGluZ1xcTXlQcm9qZWN0c1xcY29kZXJzLWp1a2Vib3hcXGNvbXBvbmVudHNcXFByb2ZpbGVJbmZvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgR2xvYmFsQ29udGV4dCB9IGZyb20gJy4uL2NvbnRleHQvR2xvYmFsQ29udGV4dCc7XHJcbmltcG9ydCBjb2xvcnMgZnJvbSAnLi4vY3NzLXZhcmlhYmxlcy9jb2xvcnMnO1xyXG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcclxuXHJcbmNvbnN0IHByb2ZpbGVJbmZvVmFyaWFudHMgPSB7XHJcbiAgLy8gaGlkZGVuOiB7IG9wYWNpdHk6IDAsIHBvc2l0aW9uOiAncmVsYXRpdmUnfSxcclxuICAvLyB2aXNpYmxlOiB7IFxyXG4gIC8vICAgb3BhY2l0eTogMSxcclxuICAvLyAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gIC8vICAgdHJhbnNpdGlvbjoge1xyXG4gIC8vICAgICBkdXJhdGlvbjogMS41XHJcbiAgLy8gICB9XHJcbiAgLy8gfVxyXG59XHJcblxyXG4vLyBjb25zdCBpbmZvVmFyaWFudHMgPSB7XHJcbi8vICAgaGlkZGVuOiB7IG9wYWNpdHk6IDAsIG1hcmdpbjogYXV0byB9LFxyXG4vLyAgIHZpc2libGU6IHtcclxuLy8gICAgIG9wYWNpdHk6IDEsXHJcbi8vICAgICB0cmFuc2l0aW9uOiB7XHJcbi8vICAgICAgIGR1cmF0aW9uOiAxLjUsXHJcbi8vICAgICAgIGRlbGF5OiAxXHJcbi8vICAgICB9XHJcbi8vICAgfVxyXG4vLyB9XHJcblxyXG5jb25zdCBQcm9maWxlSW5mbyA9ICh7IHNldEVkaXRNb2RlLCBlZGl0TW9kZSB9KSA9PiB7XHJcblxyXG4gIGNvbnN0IHsgYXV0aFN0YXRlLCBjdXJyZW50VXNlciwgcHJvZmlsZVVzZXIsIGZldGNoUHJvZmlsZVVzZXIsIGNsZWFyUHJvZmlsZVVzZXIsIGFkZEZhdm91cml0ZSwgcmVtb3ZlRmF2b3VyaXRlIH0gPSB1c2VDb250ZXh0KEdsb2JhbENvbnRleHQpO1xyXG5cclxuICBjb25zdCBbaXNGYXZvdXJpdGUsIHNldElzRmF2b3VyaXRlXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICBjb25zdCBhZGRGYXZvdXJpdGVIYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgYWRkRmF2b3VyaXRlKHByb2ZpbGVVc2VyLmlkKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHJlbW92ZUZhdm91cml0ZUhhbmRsZXIgPSAoKSA9PiB7XHJcbiAgICByZW1vdmVGYXZvdXJpdGUocHJvZmlsZVVzZXIuaWQpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgZ2V0TGFuZ3VhZ2VTdHJpbmcgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBsYW5ndWFnZXMgPSBwcm9maWxlVXNlci5sYW5ndWFnZXM7XHJcbiAgICBsZXQgbGFuZ3VhZ2VTdHJpbmcgPSAnJztcclxuXHJcbiAgICBpZiAocHJvZmlsZVVzZXIubGFuZ3VhZ2VzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICByZXR1cm4gbGFuZ3VhZ2VTdHJpbmc7XHJcbiAgICB9XHJcblxyXG4gICAgZWxzZSB7XHJcbiAgICAgIGxhbmd1YWdlcy5tYXAoKGxhbmd1YWdlLCBpbmRleCkgPT4ge1xyXG4gICAgICAgIGlmIChsYW5ndWFnZSAhPT0gJycpIHtcclxuICAgICAgICAgIGxhbmd1YWdlU3RyaW5nICs9IGxhbmd1YWdlO1xyXG4gICAgICAgICAgaWYgKGxhbmd1YWdlc1tpbmRleCArIDFdICE9PSAnJyAmJiBpbmRleCArIDEgIT09IGxhbmd1YWdlcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgbGFuZ3VhZ2VTdHJpbmcgKz0gJyAnICsgJy8nICsgJyAnO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgcmV0dXJuIGxhbmd1YWdlU3RyaW5nO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxtb3Rpb24uZGl2IHZhcmlhbnRzPXtwcm9maWxlSW5mb1ZhcmlhbnRzfSBpbml0aWFsPSdoaWRkZW4nIGFuaW1hdGU9J3Zpc2libGUnPlxyXG4gICAgICA8c2VjdGlvbiBpZD1cInVzZXJcIj5cclxuICAgICAgICA8ZGl2IGlkPVwicHJvZmlsZS1waG90b1wiPlxyXG4gICAgICAgICAge3Byb2ZpbGVVc2VyLnByb2ZpbGVQaG90b0ZpbGVuYW1lICE9PSBudWxsICYmIHByb2ZpbGVVc2VyLnByb2ZpbGVQaG90b0ZpbGVuYW1lICE9PSAnJyAmJlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNyb3BcIj5cclxuICAgICAgICAgICAgICB7LyogPGltZyBzcmM9e2BodHRwOi8vbG9jYWxob3N0OjUwMDAvaW1hZ2UvJHtwcm9maWxlVXNlci5wcm9maWxlUGhvdG9GaWxlbmFtZX1gfSBhbHQ9XCJwcm9maWxlLXBob3RvXCIgLz4gKi99XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgeyhwcm9maWxlVXNlci5wcm9maWxlUGhvdG9GaWxlbmFtZSA9PT0gbnVsbCB8fCBwcm9maWxlVXNlci5wcm9maWxlUGhvdG9GaWxlbmFtZSA9PT0gJycpICYmXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3JvcFwiPlxyXG4gICAgICAgICAgICAgIDxpbWcgc3JjPScvZGVmYXVsdC1hdmF0YXIuanBnJyBhbHQ9XCJwcm9maWxlLXBob3RvXCIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgaWQ9XCJ1c2VyLWluZm9cIj5cclxuICAgICAgICAgIDxkaXYgaWQ9XCJpbmZvXCI+XHJcbiAgICAgICAgICAgIDxoMT57cHJvZmlsZVVzZXIuZmlyc3ROYW1lfSB7cHJvZmlsZVVzZXIubGFzdE5hbWV9PC9oMT5cclxuICAgICAgICAgICAgPGgyPkpvYiBUaXRsZTogJm5ic3A7IHtwcm9maWxlVXNlci5qb2JUaXRsZX08L2gyPlxyXG4gICAgICAgICAgICA8aDI+TG9jYXRpb246ICZuYnNwOyB7cHJvZmlsZVVzZXIubG9jYXRpb259PC9oMj5cclxuICAgICAgICAgICAgPGgyPkxhbmd1YWdlczogJm5ic3A7IHtnZXRMYW5ndWFnZVN0cmluZygpfTwvaDI+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGlkPVwiYnV0dG9uc1wiPlxyXG4gICAgICAgICAgICB7cHJvZmlsZVVzZXIuaWQgPT09IGN1cnJlbnRVc2VyLmlkICYmXHJcbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtY29nIGZhLTJ4XCIgaWQ9XCJwcm9maWxlLWVkaXQtY29nXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgb25DbGljaz17KCkgPT4gc2V0RWRpdE1vZGUoIWVkaXRNb2RlKX0+PC9pPlxyXG4gICAgICAgICAgICAgIC8vIDxidXR0b24gaWQ9XCJwcm9maWxlLWVkaXQtYnRuXCIgb25DbGljaz17c2hvd1Byb2ZpbGVFZGl0U2VjdGlvbn0+PGkgY2xhc3NOYW1lPVwiZmEgZmEtY29nXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHtwcm9maWxlVXNlci5pZCAhPT0gY3VycmVudFVzZXIuaWQgJiYgIShjdXJyZW50VXNlci5mYXZvdXJpdGVzLmluY2x1ZGVzKHByb2ZpbGVVc2VyLmlkKSkgJiYgYXV0aFN0YXRlLmF1dGhlbnRpY2F0ZWQgPT09IHRydWUgJiZcclxuICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwiYWRkLWZhdm91cml0ZVwiIG9uQ2xpY2s9e2FkZEZhdm91cml0ZUhhbmRsZXJ9PlxyXG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtc3Rhci1vIGZhLTJ4IGZhdm91cml0ZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB7Y3VycmVudFVzZXIuZmF2b3VyaXRlcy5pbmNsdWRlcyhwcm9maWxlVXNlci5pZCkgJiZcclxuICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwicmVtb3ZlLWZhdm91cml0ZVwiIG9uQ2xpY2s9e3JlbW92ZUZhdm91cml0ZUhhbmRsZXJ9PlxyXG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtc3RhciBmYS0yeCBmYXZvdXJpdGVcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L3NlY3Rpb24+XHJcblxyXG5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG5cclxuICAgICAgc2VjdGlvbiB7XHJcbiAgICAgICAgLyogcGFkZGluZzogM3JlbTsgKi9cclxuICAgICAgICAvKiBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTsgKi9cclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgICAgICAgLyogei1pbmRleDogMjsgKi9cclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgI3VzZXIge1xyXG4gICAgICAgIG1hcmdpbjogMnJlbSAwO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIC8qIGJhY2tncm91bmQ6ICNGRjQxNkM7ICovXHJcbiAgICAgICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNGRjRCMkIsICNGRjQxNkMpO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI0ZGNEIyQiwgI0ZGNDE2Qyk7XHJcbiAgICAgICAgLyogYm94LXNoYWRvdzogMCAxNHB4IDI4cHggcmdiYSgwLDAsMCwwLjI1KSwgXHJcbiAgICAgICAgICAwIDEwcHggMTBweCByZ2JhKDAsMCwwLDAuMjIpOyAqL1xyXG4gICAgICB9XHJcblxyXG4gICAgICAjdXNlciBoMSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAzcmVtO1xyXG4gICAgICAgIG1hcmdpbjogMXJlbSAwIDRyZW0gMDtcclxuICAgICAgICBsaW5lLWhlaWdodDogM3JlbTtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgI3VzZXIgaDIge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICNwcm9maWxlLXBob3RvIHtcclxuICAgICAgICB3aWR0aDogMzMlO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgIHBhZGRpbmc6IDMuNXJlbSAzcmVtIDNyZW0gM3JlbTtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICAgICAgICBib3JkZXItcmlnaHQ6IG5vbmU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweCAwIDAgMTBweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgaW1nIHtcclxuICAgICAgICB3aWR0aDogNTBweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgI3VzZXItaW5mbyB7XHJcbiAgICAgICAgLyogaGVpZ2h0OiAxMDAlOyAqL1xyXG4gICAgICAgIHdpZHRoOiA2MSU7XHJcbiAgICAgICAgcGFkZGluZzogM3JlbTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgfVxyXG5cclxuICAgICAgaSNwcm9maWxlLWVkaXQtY29nIHtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDJzO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpI3Byb2ZpbGUtZWRpdC1jb2c6aG92ZXIge1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIGJ1dHRvbiNhZGQtZmF2b3VyaXRlLCBidXR0b24jcmVtb3ZlLWZhdm91cml0ZSB7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAke2NvbG9ycy50ZXJ0aWFyeX07XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIHBhZGRpbmc6IDAuN3JlbTtcclxuICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBcclxuICAgICAgICAvKiBoZWlnaHQ6IDEwJTsgKi9cclxuICAgICAgfVxyXG5cclxuICAgICAgI3BsYXlsaXN0IHtcclxuICAgICAgICBtYXJnaW4tdG9wOiA0cmVtO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuY3JvcCB7XHJcbiAgICAgICAgd2lkdGg6IDI2NnB4O1xyXG4gICAgICAgIGhlaWdodDogMjY2cHg7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwOi8vbG9jYWxob3N0OjMwMDAvaW1hZ2UvJHtwcm9maWxlVXNlci5wcm9maWxlUGhvdG9GaWxlbmFtZX0nKTtcclxuICAgICAgICAvKiBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7ICovXHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgaW1nIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGkuZmF2b3VyaXRlIHtcclxuICAgICAgICBjb2xvcjogJHtjb2xvcnMuc2Vjb25kYXJ5fTtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiA5cHg7XHJcbiAgICAgICAgbGVmdDogOS42cHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8qIE1lZGlhIHF1ZXJpZXMgKi9cclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDExNTBweCApIHtcclxuICAgICAgICAjdXNlciB7XHJcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgICAgICAgIHdpZHRoOiA3NSU7XHJcbiAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAjcHJvZmlsZS1waG90byB7XHJcbiAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICB3aWR0aDogNjElO1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jcm9wIHtcclxuICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgIC8qIHdpZHRoOiA4MCU7ICovXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAjdXNlci1pbmZvIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjRkY0QjJCLCAjRkY0MTZDKTtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI0ZGNEIyQiwgI0ZGNDE2Qyk7XHJcbiAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgIHBhZGRpbmc6IDIuNXJlbTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xyXG4gICAgICAgICNwcm9maWxlLXBob3RvIHtcclxuICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICBtYXJnaW46IDMuNXJlbSBhdXRvIDNyZW0gYXV0bztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgICN1c2VyLWluZm8ge1xyXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgLyogcGFkZGluZzogMDsgKi9cclxuICAgICAgICAgIC8qIHRleHQtYWxpZ246IGNlbnRlcjsgKi9cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICNpbmZvIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaDEge1xyXG4gICAgICAgICAgLyogdGV4dC1hbGlnbjogY2VudGVyOyAqL1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAjYnV0dG9ucyB7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICByaWdodDogMjFweDtcclxuICAgICAgICAgIHRvcDogMjFweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICB9XHJcblxyXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNTgwcHggKSB7XHJcbiAgICAgICAgI3VzZXIge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICN1c2VyIGgxIHtcclxuICAgICAgICAgIG1hcmdpbjogMnJlbSAwIDNyZW0gMDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMi41cmVtIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaDIge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNDcwcHggKSB7XHJcblxyXG4gICAgICAgICNidXR0b25zIHtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIHJpZ2h0OiAxNHB4O1xyXG4gICAgICAgICAgdG9wOiAxNHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgI3VzZXItaW5mbyBoMSB7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgfSBcclxuXHJcbiAgICAgICAgI3VzZXItaW5mbyB7XHJcbiAgICAgICAgICBwYWRkaW5nOiAycmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAjdXNlciBoMSB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtOyBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGgyIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ0NXB4ICkge1xyXG4gICAgICAgICNwcm9maWxlLXBob3RvIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNyb3Age1xyXG4gICAgICAgICAgbWF4LXdpZHRoOiAyMDBweDtcclxuICAgICAgICAgIG1heC1oZWlnaHQ6IDIwMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDM3MHB4ICkge1xyXG5cclxuICAgICAgICBpLmZhdm91cml0ZSB7XHJcbiAgICAgICAgICB0b3A6IDQuN3B4O1xyXG4gICAgICAgICAgbGVmdDogNS43cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuZmEtc3RhciAuZmEtMngsIC5mYS1zdGFyLW8gPGRpdiBjbGFzc05hbWU9XCJmYS0yeFwiPjwvZGl2PiB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEuNGVtXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBidXR0b24jcmVtb3ZlLWZhdm91cml0ZSB7XHJcbiAgICAgICAgICBoZWlnaHQ6IDQxcHg7XHJcbiAgICAgICAgICB3aWR0aDogNDFweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICB9XHJcblxyXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogMzIwcHggKSB7XHJcbiAgICAgICAgI3VzZXIgaDEge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAyLjJyZW07XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgQG1lZGlhIChtYXgtaGVpZ2h0OiA4MjBweCApIHtcclxuICAgICAgICAjcHJvZmlsZS1waG90byB7XHJcbiAgICAgICAgICBtYXJnaW46IDJyZW0gYXV0bztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIEBtZWRpYSAobWF4LWhlaWdodDogNzcwcHggKSB7XHJcbiAgICAgICAgI3Byb2ZpbGUtcGhvdG8ge1xyXG4gICAgICAgICAgbWFyZ2luOiAycmVtIGF1dG87XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICBcclxuICAgIGB9PC9zdHlsZT5cclxuXHJcbiAgICA8L21vdGlvbi5kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9maWxlSW5mbztcclxuIl19 */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly8vLi9hcGlzL3lvdXR1YmUuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9BYm91dE1lLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQWRkVG9QbGF5bGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NvbW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Db21tZW50U2VjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Zhdm91cml0ZUl0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9GYXZvdXJpdGVzLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRmlsZVVwbG9hZC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Zvb3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1BsYXlMaXN0LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUHJvZmlsZUVkaXQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Qcm9maWxlSW5mby5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NlYXJjaEJhci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1ZpZGVvSXRlbS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1ZpZGVvUGxheWVyLmpzIiwid2VicGFjazovLy8uL2NvbmZpZy9kZXYuanMiLCJ3ZWJwYWNrOi8vLy4vY29uZmlnL2tleXMuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGV4dC9HbG9iYWxDb250ZXh0LmpzIiwid2VicGFjazovLy8uL2Nzcy12YXJpYWJsZXMvY29sb3JzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L2xpbmsudHN4Iiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvd2l0aC1yb3V0ZXIudHN4Iiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvbWl0dC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9pcy1keW5hbWljLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1tYXRjaGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLXJlZ2V4LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3NlYXJjaC1wYXJhbXMtdG8tdXJsLXF1ZXJ5LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbGluay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvcmVhY3QtaXMvY2pzL3JlYWN0LWlzLmRldmVsb3BtZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9yZWFjdC1pcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9wcm9maWxlL1t1c2VySWRdLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZnJhbWVyLW1vdGlvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJvcC10eXBlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXMtZXhhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJxdWVyeXN0cmluZ1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3R5bGVkLWpzeC9zdHlsZVwiIl0sIm5hbWVzIjpbIktFWSIsIllPVVRVQkVBUElfS0VZIiwieW91dHViZSIsImF4aW9zIiwiY3JlYXRlIiwiYmFzZVVSTCIsInBhcmFtcyIsInBhcnQiLCJtYXhSZXN1bHRzIiwia2V5IiwiQWJvdXRNZSIsInByb2ZpbGVVc2VyIiwiY29sb3JzIiwicmV2ZXJzZVBpbmtHcmFkaWVudCIsInByaW1hcnkiLCJmaXJzdE5hbWUiLCJhYm91dCIsIkFkZFRvUGxheWxpc3QiLCJ2aWRlb3MiLCJzZXRWaWRlb3MiLCJ1c2VTdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJzZWFyY2hWaWRlb0hhbmRsZXIiLCJzZWFyY2hJbnB1dCIsInJlcyIsImdldCIsInR5cGUiLCJxIiwidmlkZW9MaXN0IiwiZGF0YSIsIml0ZW1zIiwiZ3JhZGllbnQiLCJsZW5ndGgiLCJtYXAiLCJ2aWRlbyIsImlkIiwidmlkZW9JZCIsIkNvbW1lbnQiLCJjb21tZW50IiwiY29tbWVudGVySWQiLCJjb21tZW50ZXIiLCJfaWQiLCJnZXRDb21tZW50VXNlciIsInJlbW92ZUNvbW1lbnRGcm9tUGxheWxpc3QiLCJjdXJyZW50VXNlciIsImZldGNoUHJvZmlsZVVzZXIiLCJlZGl0Q29tbWVudCIsInVzZUNvbnRleHQiLCJHbG9iYWxDb250ZXh0IiwiY29tbWVudFVzZXIiLCJzZXRDb21tZW50VXNlciIsImxhc3ROYW1lIiwicHJvZmlsZVBob3RvRmlsZW5hbWUiLCJlZGl0TW9kZSIsInNldEVkaXRNb2RlIiwiZWRpdGVkQ29udGVudFJlZiIsInVzZVJlZiIsInVzZUVmZmVjdCIsImZldGNoRGF0YSIsInVzZXIiLCJlZGl0Q29tbWVudENsaWNrSGFuZGxlciIsImVkaXRDb21tZW50U3VibWl0SGFuZGxlciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImN1cnJlbnQiLCJ2YWx1ZSIsInRyaW0iLCJjb252ZXJ0RGF0ZSIsIm1pbGxpc2VjcyIsImQiLCJEYXRlIiwiZGF0ZUFycmF5IiwidG9Mb2NhbGVTdHJpbmciLCJzcGxpdCIsInJlbW92ZUNvbW1lbnRDbGlja0hhbmRsZXIiLCJjb21tZW50ZXJDbGlja0hhbmRsZXIiLCJjb250ZW50IiwiY3JlYXRlZEF0IiwiZGF0ZSIsIkNvbW1lbnRTZWN0aW9uIiwiYWRkQ29tbWVudCIsImF1dGhTdGF0ZSIsInNldENvbnRlbnQiLCJoYW5kbGVDaGFuZ2UiLCJ0YXJnZXQiLCJjb21tZW50U3VibWl0SGFuZGxlciIsInBsYXlsaXN0Q29tbWVudHMiLCJhdXRoZW50aWNhdGVkIiwiRmF2b3VyaXRlSXRlbSIsImdldEZhdm91cml0ZVVzZXIiLCJyZW1vdmVGYXZvdXJpdGUiLCJmYXZVc2VyIiwic2V0RmF2VXNlciIsImZhdlVzZXJDbGlja0hhbmRsZXIiLCJyZW1vdmVGYXZIYW5kbGVyIiwidXNlckRhdGEiLCJ1bmRlZmluZWQiLCJGYXZvdXJpdGVzIiwic2Vjb25kYXJ5IiwiZmF2b3VyaXRlcyIsImZhdm91cml0ZSIsIkZpbGVVcGxvYWQiLCJmaWxlIiwic2V0RmlsZSIsImZpbGVuYW1lIiwic2V0RmlsZW5hbWUiLCJ1cGxvYWRGaWxlIiwidXBsb2FkRmlsZUhhbmRsZXIiLCJzaXplIiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsIm9uQ2hhbmdlIiwiZmlsZXMiLCJuYW1lIiwiRm9vdGVyIiwieWVhciIsImdldEZ1bGxZZWFyIiwicmV2ZXJzZUdyYWRpZW50IiwiUGxheUxpc3QiLCJvd25lZFZpZGVvcyIsInZpZGVvVVJMIiwiZWRpdFZhcmlhbnRzIiwiaGlkZGVuIiwib3BhY2l0eSIsInkiLCJ6SW5kZXgiLCJ2aXNpYmxlIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiZXhpdCIsIlByb2ZpbGVFZGl0IiwidXBkYXRlVXNlciIsInVwbG9hZFBob3RvIiwicHJvZmlsZUluZm8iLCJzZXRQcm9maWxlSW5mbyIsImpvYlRpdGxlIiwibG9jYXRpb24iLCJsYW5ndWFnZXMiLCJmaXJzdE5hbWVSZWYiLCJsYXN0TmFtZVJlZiIsImpvYlRpdGxlUmVmIiwibG9jYXRpb25SZWYiLCJsYW5ndWFnZTFSZWYiLCJsYW5ndWFnZTJSZWYiLCJsYW5ndWFnZTNSZWYiLCJsYW5ndWFnZTRSZWYiLCJhYm91dFJlZiIsInVwZGF0ZVByb2ZpbGVIYW5kbGVyIiwibGFuZ3VhZ2UxIiwibGFuZ3VhZ2UyIiwibGFuZ3VhZ2UzIiwibGFuZ3VhZ2U0IiwiZ2V0RXhpc3RpbmdMYW5ndWFnZXMiLCJwcm9maWxlSW5mb1ZhcmlhbnRzIiwiUHJvZmlsZUluZm8iLCJjbGVhclByb2ZpbGVVc2VyIiwiYWRkRmF2b3VyaXRlIiwiaXNGYXZvdXJpdGUiLCJzZXRJc0Zhdm91cml0ZSIsImFkZEZhdm91cml0ZUhhbmRsZXIiLCJyZW1vdmVGYXZvdXJpdGVIYW5kbGVyIiwiZ2V0TGFuZ3VhZ2VTdHJpbmciLCJsYW5ndWFnZVN0cmluZyIsImxhbmd1YWdlIiwiaW5kZXgiLCJ0ZXJ0aWFyeSIsImluY2x1ZGVzIiwiU2VhcmNoYmFyIiwicGxhY2Vob2xkZXIiLCJzdWJtaXRIYW5kbGVyIiwic2V0U2VhcmNoSW5wdXQiLCJvbkNoYW5nZUhhbmRsZXIiLCJvbkZvcm1TdWJtaXQiLCJWaWRlb0l0ZW0iLCJtb2RlIiwiYWRkVmlkZW9Ub1BsYXlsaXN0IiwicmVtb3ZlVmlkZW9Gcm9tUGxheWxpc3QiLCJzZXRDdXJyZW50VmlkZW8iLCJzZXRBdXRvcGxheSIsImFkZFZpZGVvQ2xpY2tIYW5kbGVyIiwidmlkZW9Ub1NhdmUiLCJ0aXRsZSIsInNuaXBwZXQiLCJqb2luIiwidGh1bWJuYWlsVVJMIiwidGh1bWJuYWlscyIsImRlZmF1bHQiLCJ1cmwiLCJyZW1vdmVWaWRlb0NsaWNrSGFuZGxlciIsInBsYXlCdXR0b25IYW5kbGVyIiwidmlkZW9Ub1NldCIsIlZpZGVvUGxheWVyIiwidmlkZW9TdGF0ZSIsImF1dG9wbGF5IiwidmlkZW9TcmMiLCJtb2R1bGUiLCJleHBvcnRzIiwibW9uZ29VUkkiLCJyZXF1aXJlIiwiaW5pdGlhbFN0YXRlIiwiYXV0aERhdGEiLCJjcmVhdGVDb250ZXh0IiwicGlua0dyYWRlbnQiLCJsb2NhdGlvbk9yaWdpbiIsInJlc29sdmVkIiwibGlzdGVuZXJzIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJ3aW5kb3ciLCJwcmVmZXRjaGVkIiwiY2FjaGVkT2JzZXJ2ZXIiLCJlbnRyaWVzIiwiZW50cnkiLCJjYiIsInJvb3RNYXJnaW4iLCJsaXN0ZW5Ub0ludGVyc2VjdGlvbnMiLCJvYnNlcnZlciIsImdldE9ic2VydmVyIiwicm91dGVyIiwiZXJyIiwiaHJlZiIsIm5vZGVOYW1lIiwiaXNMb2NhbCIsInNjcm9sbCIsImFzIiwicmVwbGFjZSIsInN1Y2Nlc3MiLCJkb2N1bWVudCIsImhhc1dhcm5lZCIsIlJlYWN0IiwicHJvcHMiLCJwIiwicGF0aG5hbWUiLCJyZXNvbHZlZEhyZWYiLCJjaGlsZEVsbSIsImlzUHJlZmV0Y2hlZCIsInByZWZldGNoIiwiY2hpbGRyZW4iLCJjaGlsZCIsIkNoaWxkcmVuIiwiY2hpbGRQcm9wcyIsInJlZiIsImVsIiwic2V0Q2hpbGRFbG0iLCJvbkNsaWNrIiwibGlua0NsaWNrZWQiLCJwcmlvcml0eSIsInByb2Nlc3MiLCJ3YXJuIiwiUHJvcFR5cGVzIiwiZXhhY3QiLCJMaW5rIiwic2hhbGxvdyIsInBhc3NIcmVmIiwicGF0aCIsIm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoIiwic2luZ2xldG9uUm91dGVyIiwicmVhZHlDYWxsYmFja3MiLCJyZWFkeSIsInVybFByb3BlcnR5RmllbGRzIiwicm91dGVyRXZlbnRzIiwiY29yZU1ldGhvZEZpZWxkcyIsIk9iamVjdCIsIlJvdXRlciIsImZpZWxkIiwiZ2V0Um91dGVyIiwiZXZlbnQiLCJldmVudEZpZWxkIiwiX3NpbmdsZXRvblJvdXRlciIsIm1lc3NhZ2UiLCJzdGFjayIsIlJvdXRlckNvbnRleHQiLCJjcmVhdGVSb3V0ZXIiLCJfcm91dGVyIiwiaW5zdGFuY2UiLCJDb21wb3NlZENvbXBvbmVudCIsImdldEluaXRpYWxQcm9wcyIsIldpdGhSb3V0ZXJXcmFwcGVyIiwiYWxsIiwib24iLCJvZmYiLCJlbWl0IiwiaGFuZGxlciIsImJhc2VQYXRoIiwiY2FuY2VsbGVkIiwiYmFzZSIsInVybEFzU3RyaW5nIiwiZmluYWxVcmwiLCJhZGRCYXNlUGF0aCIsInJlc29sdmVIcmVmIiwibWFudWFsU2Nyb2xsUmVzdG9yYXRpb24iLCJjcmVkZW50aWFscyIsImF0dGVtcHRzIiwiZmV0Y2hSZXRyeSIsImlzU2VydmVyUmVuZGVyIiwiY29uc3RydWN0b3IiLCJyb3V0ZSIsInF1ZXJ5IiwiYXNQYXRoIiwiY29tcG9uZW50cyIsInNkYyIsInN1YiIsImNsYyIsInBhZ2VMb2FkZXIiLCJfYnBzIiwiZXZlbnRzIiwiX3dyYXBBcHAiLCJpc1NzciIsImlzRmFsbGJhY2siLCJfaW5GbGlnaHRSb3V0ZSIsIl9fTl9TU0ciLCJpbml0aWFsUHJvcHMiLCJfX05fU1NQIiwiQ29tcG9uZW50IiwiX19ORVhUX0RBVEFfXyIsInVwZGF0ZSIsIm1vZCIsIm5ld0RhdGEiLCJyZWxvYWQiLCJiYWNrIiwicHVzaCIsIm9wdGlvbnMiLCJwcmVwYXJlVXJsQXMiLCJTVCIsInBlcmZvcm1hbmNlIiwiY2xlYW5lZEFzIiwiZGVsQmFzZVBhdGgiLCJwYXJzZWQiLCJ0cnlQYXJzZVJlbGF0aXZlVXJsIiwibWV0aG9kIiwicm91dGVSZWdleCIsInJvdXRlTWF0Y2giLCJtaXNzaW5nUGFyYW1zIiwicGFyYW0iLCJhc1BhdGhuYW1lIiwicm91dGVJbmZvIiwiYXBwQ29tcCIsImNoYW5nZVN0YXRlIiwiX19OIiwiYnVpbGRDYW5jZWxsYXRpb25FcnJvciIsInBhZ2UiLCJlcnJvciIsImNhY2hlZFJvdXRlSW5mbyIsImlzVmFsaWRFbGVtZW50VHlwZSIsImRhdGFIcmVmIiwic2V0IiwiYmVmb3JlUG9wU3RhdGUiLCJvbmx5QUhhc2hDaGFuZ2UiLCJuZXdIYXNoIiwib2xkVXJsTm9IYXNoIiwib2xkSGFzaCIsInNjcm9sbFRvSGFzaCIsImhhc2giLCJpZEVsIiwibmFtZUVsIiwidXJsSXNOZXciLCJQcm9taXNlIiwiY2FuY2VsIiwiY29tcG9uZW50UmVzdWx0IiwiX2dldERhdGEiLCJmbiIsIl9nZXRTdGF0aWNEYXRhIiwiZmV0Y2hOZXh0RGF0YSIsIl9nZXRTZXJ2ZXJEYXRhIiwiQXBwVHJlZSIsImN0eCIsImFib3J0Q29tcG9uZW50TG9hZCIsIm5vdGlmeSIsInNsYXNoZWRQcm90b2NvbHMiLCJwcm90b2NvbCIsInVybE9iaiIsImhvc3QiLCJhdXRoIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiaG9zdG5hbWUiLCJzZWFyY2giLCJURVNUX1JPVVRFIiwiRFVNTVlfQkFTRSIsInJlc29sdmVkQmFzZSIsIm9yaWdpbiIsInJlIiwiZGVjb2RlIiwiZGVjb2RlVVJJQ29tcG9uZW50Iiwic2x1Z05hbWUiLCJnIiwiZ3JvdXBzIiwibSIsInN0ciIsIm9wdGlvbmFsIiwicmVwZWF0Iiwic2VnbWVudHMiLCJub3JtYWxpemVkUm91dGUiLCJncm91cEluZGV4IiwicGFyYW1ldGVyaXplZFJvdXRlIiwic2VnbWVudCIsInBhcnNlUGFyYW1ldGVyIiwicG9zIiwiZXNjYXBlUmVnZXgiLCJyb3V0ZUtleUNoYXJDb2RlIiwicm91dGVLZXlDaGFyTGVuZ3RoIiwiZ2V0U2FmZVJvdXRlS2V5Iiwicm91dGVLZXkiLCJpIiwiU3RyaW5nIiwicm91dGVLZXlzIiwibmFtZWRQYXJhbWV0ZXJpemVkUm91dGUiLCJjbGVhbmVkS2V5IiwiaW52YWxpZEtleSIsImlzTmFOIiwicGFyc2VJbnQiLCJuYW1lZFJlZ2V4Iiwic2VhcmNoUGFyYW1zIiwiQXJyYXkiLCJ1c2VkIiwicmVzdWx0IiwicG9ydCIsImdldExvY2F0aW9uT3JpZ2luIiwiQXBwIiwiZ2V0RGlzcGxheU5hbWUiLCJwYWdlUHJvcHMiLCJsb2FkR2V0SW5pdGlhbFByb3BzIiwiaXNSZXNTZW50IiwidXJsT2JqZWN0S2V5cyIsIlNQIiwiUHJvZmlsZSIsInVzZVJvdXRlciIsInVzZXJJZCJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdEOztBQUVoRDtBQUNBO0FBQ0E7QUFDQSxpREFBaUQ7O0FBRWpEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7O0FDcExhOztBQUViLElBQUksS0FBcUMsRUFBRSxFQUUxQztBQUNELG1CQUFtQixtQkFBTyxDQUFDLDRHQUErQjtBQUMxRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTtDQUVBOztDQUVBOztBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUdBOztBQU1BLE1BQU1vRyxPQUFPLEdBQUcsTUFBTTtBQUVwQixRQUFNO0FBQUV2VixhQUFGO0FBQWFyQyxlQUFiO0FBQTBCbEMsZUFBMUI7QUFBdUN5SyxlQUF2QztBQUFvRHRJLG9CQUFwRDtBQUFzRStHLG9CQUF0RTtBQUF3RkMsZ0JBQXhGO0FBQXNHbkU7QUFBdEcsTUFBeUgzQyx3REFBVSxDQUFDQyxvRUFBRCxDQUF6SSxDQUZvQixDQUlwQjs7QUFDQSxRQUFNMEssTUFBTSxHQUFHK00sNkRBQVMsRUFBeEI7QUFDQSxRQUFNO0FBQUVDO0FBQUYsTUFBYWhOLE1BQU0sQ0FBQytFLEtBQTFCO0FBQ0E1UCxrQkFBZ0IsQ0FBQzZYLE1BQUQsRUFBUyxJQUFULENBQWhCO0FBSUFqWCx5REFBUyxDQUFDLE1BQU07QUFDWjBILGVBQVcsQ0FBQyxLQUFELENBQVg7QUFDRCxHQUZNLEVBRUosRUFGSSxDQUFULENBWG9CLENBZ0JwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFFBQU07QUFBQSxPQUFDOUgsUUFBRDtBQUFBLE9BQVdDO0FBQVgsTUFBMEJuQyxzREFBUSxDQUFDLEtBQUQsQ0FBeEMsQ0E3Qm9CLENBZ0NwQjtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7O0FBR0EsU0FDRSxtRUFDRTtBQUEyQixNQUFFLEVBQUMsU0FBOUI7QUFBQSx3Q0FBZTtBQUFmLEtBRUUsTUFBQywrREFBRDtBQUFhLGVBQVcsRUFBRW1DLFdBQTFCO0FBQXVDLFlBQVEsRUFBRUQ7QUFBakQsSUFGRixFQUlHQSxRQUFRLElBQ1AsTUFBQyxnRUFBRDtBQUFhLGVBQVcsRUFBRUM7QUFBMUIsSUFMSixFQVFFLE1BQUMsMkRBQUQ7QUFBUyxlQUFXLEVBQUU1QztBQUF0QixJQVJGLEVBVUUsTUFBQywrREFBRCxPQVZGLEVBWUdBLFdBQVcsQ0FBQ3lCLEVBQVosS0FBbUJTLFdBQVcsQ0FBQ1QsRUFBL0IsSUFDQyxNQUFDLGlFQUFELE9BYkosRUFnQkUsTUFBQyw0REFBRDtBQUFVLGVBQVcsRUFBRXpCO0FBQXZCLElBaEJGLEVBa0JFLE1BQUMsbUVBQUQ7QUFBZ0IsZUFBVyxFQUFFQTtBQUE3QixJQWxCRixFQW9CRSxNQUFDLCtEQUFEO0FBQVksZUFBVyxFQUFFQTtBQUF6QixJQXBCRixDQURGO0FBQUE7QUFBQSw4MFBBa0NJLE1BQUMsMkRBQUQsT0FsQ0osQ0FERjtBQXNDRCxDQTdGRCxDLENBK0ZBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBOzs7QUFJZThaLHNFQUFmLEU7Ozs7Ozs7Ozs7O0FDbE1BLGtDOzs7Ozs7Ozs7OztBQ0FBLDBDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLDZDIiwiZmlsZSI6InBhZ2VzL3Byb2ZpbGUvW3VzZXJJZF0uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL3Byb2ZpbGUvW3VzZXJJZF0uanNcIik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIik7IiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgWU9VVFVCRUFQSV9LRVkgfSBmcm9tICcuLi9jb25maWcva2V5cyc7XHJcblxyXG5leHBvcnQgY29uc3QgS0VZID0gWU9VVFVCRUFQSV9LRVk7XHJcblxyXG5leHBvcnQgY29uc3QgeW91dHViZSA9IGF4aW9zLmNyZWF0ZSh7XHJcbiAgYmFzZVVSTDogJ2h0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL3lvdXR1YmUvdjMnLFxyXG4gIHBhcmFtczoge1xyXG4gICAgcGFydDogJ3NuaXBwZXQnLFxyXG4gICAgbWF4UmVzdWx0czogNSxcclxuICAgIGtleTogWU9VVFVCRUFQSV9LRVlcclxuICB9XHJcbn0pOyIsImltcG9ydCBjb2xvcnMgZnJvbSAnLi4vY3NzLXZhcmlhYmxlcy9jb2xvcnMnO1xyXG5cclxuY29uc3QgQWJvdXRNZSA9ICh7cHJvZmlsZVVzZXJ9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIGlkPVwiYWJvdXQtbWVcIj5cclxuICAgICAgPGgyPkFib3V0IHtwcm9maWxlVXNlci5maXJzdE5hbWV9PC9oMj5cclxuICAgICAge3Byb2ZpbGVVc2VyLmFib3V0ICE9PSBudWxsICYmXHJcbiAgICAgICAgPHA+XHJcbiAgICAgICAgICB7cHJvZmlsZVVzZXIuYWJvdXR9XHJcbiAgICAgICAgPC9wPlxyXG4gICAgICB9XHJcbiAgICAgIHtwcm9maWxlVXNlci5hYm91dCA9PT0gbnVsbCAmJlxyXG4gICAgICAgIDxwPlxyXG4gICAgICAgICAgVGhlcmUncyBub3RoaW5nIGhlcmUgeWV0IVxyXG4gICAgICAgIDwvcD5cclxuICAgICAgfVxyXG4gICAgXHJcbiAgICBcclxuICAgIFxyXG4gICAgPHN0eWxlIGpzeD57YFxyXG4gICAgXHJcbiAgICAgIHNlY3Rpb24jYWJvdXQtbWUge1xyXG4gICAgICAgIC8qIGJhY2tncm91bmQgIDogJHtjb2xvcnMucmV2ZXJzZVBpbmtHcmFkaWVudH07ICovXHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJHtjb2xvcnMucHJpbWFyeX07XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICBwYWRkaW5nOiAycmVtO1xyXG4gICAgICAgIHdpZHRoOiA4NCU7XHJcbiAgICAgICAgbWFyZ2luOiAzcmVtIGF1dG87XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHAge1xyXG4gICAgICAgIHBhZGRpbmc6IDJyZW07XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIuNXJlbTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLyogTWVkaWEgcXVlcmllcyAqL1xyXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogOTAwcHgpe1xyXG4gICAgICAgIHNlY3Rpb24jYWJvdXQtbWUge1xyXG4gICAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICAgIHBhZGRpbmc6IDJyZW0gMXJlbSAycmVtIDFyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBoMiB7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMXJlbTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2NjBweCl7XHJcbiAgICAgICAgc2VjdGlvbiNhYm91dC1tZSB7XHJcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0NzBweCl7XHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMC41cmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQwMHB4KXtcclxuICAgICAgICBwIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICAgIHBhZGRpbmc6IDAuNXJlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICB9XHJcblxyXG4gICAgYH08L3N0eWxlPlxyXG4gICAgXHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBYm91dE1lO1xyXG4iLCJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgU2VhcmNoQmFyIGZyb20gJy4vU2VhcmNoQmFyJztcclxuaW1wb3J0IHsgeW91dHViZSB9IGZyb20gJy4uL2FwaXMveW91dHViZSc7XHJcbmltcG9ydCB7IFlPVVRVQkVBUElfS0VZIH0gZnJvbSAnLi4vY29uZmlnL2tleXMnO1xyXG5pbXBvcnQgVmlkZW9JdGVtIGZyb20gJy4vVmlkZW9JdGVtJztcclxuaW1wb3J0IGNvbG9ycyBmcm9tICcuLi9jc3MtdmFyaWFibGVzL2NvbG9ycyc7XHJcblxyXG5jb25zdCBBZGRUb1BsYXlsaXN0ID0gKCkgPT4ge1xyXG5cclxuICBjb25zdCBbdmlkZW9zLCBzZXRWaWRlb3NdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICBjb25zb2xlLmxvZygna2V5JywgWU9VVFVCRUFQSV9LRVkpO1xyXG5cclxuICBjb25zdCBzZWFyY2hWaWRlb0hhbmRsZXIgPSBhc3luYyAoc2VhcmNoSW5wdXQpID0+IHtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IHlvdXR1YmUuZ2V0KCcvc2VhcmNoJywge1xyXG4gICAgICAgIHBhcmFtczoge1xyXG4gICAgICAgICAgdHlwZTogJ3ZpZGVvJyxcclxuICAgICAgICAgIHBhcnQ6ICdzbmlwcGV0JyxcclxuICAgICAgICAgIG1heFJlc3VsdHM6IDUsXHJcbiAgICAgICAgICBrZXk6IFlPVVRVQkVBUElfS0VZLFxyXG4gICAgICAgICAgcTogc2VhcmNoSW5wdXRcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcblxyXG4gICAgY29uc3QgdmlkZW9MaXN0ID0gcmVzLmRhdGEuaXRlbXM7XHJcbiAgICBzZXRWaWRlb3ModmlkZW9MaXN0KTtcclxuICB9XHJcblxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gaWQ9XCJhZGRUb1BsYXlsaXN0XCI+XHJcbiAgICAgIDxkaXYgaWQ9XCJoZWFkZXJcIj5cclxuICAgICAgICA8aDI+QWRkIFRvIFBsYXlsaXN0PC9oMj5cclxuICAgICAgICA8U2VhcmNoQmFyIHBsYWNlaG9sZGVyPSdTZWFyY2ggZm9yIG11c2ljJyBzZWFyY2hNb2RlPVwidmlkZW9cIiBzdWJtaXRIYW5kbGVyPXtzZWFyY2hWaWRlb0hhbmRsZXJ9Lz5cclxuICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAgPGRpdiBpZD1cInZpZGVvc1wiPlxyXG4gICAgICAgIHsgdmlkZW9zLmxlbmd0aCA9PT0gMCAmJlxyXG4gICAgICAgICAgPGgzPlNlYXJjaCBmb3IgbXVzaWMgdG8gYWRkIHRvIHlvdXIgcGxheWxpc3QhPC9oMz5cclxuICAgICAgICB9XHJcbiAgICAgICAge3ZpZGVvcy5tYXAodmlkZW8gPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPFZpZGVvSXRlbSB2aWRlbz17dmlkZW99IG1vZGU9XCJ5b3V0dWJlXCIga2V5PXt2aWRlby5pZC52aWRlb0lkfS8+XHJcbiAgICAgICAgICApXHJcbiAgICAgICAgfSl9XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICA8c3R5bGUganN4PntgXHJcblxyXG4gICAgc2VjdGlvbiB7XHJcbiAgICAgIG1hcmdpbjogMnJlbSBhdXRvIDNyZW0gYXV0bztcclxuICAgICAgd2lkdGg6IDg0JTtcclxuICAgICAgLyogcGFkZGluZzogM3JlbTsgKi9cclxuICAgICAgLyogYm9yZGVyOiAxcHggc29saWQgYmxhY2s7ICovXHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxuICBcclxuICAgICNoZWFkZXIge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBiYWNrZ3JvdW5kOiAke2NvbG9ycy5ncmFkaWVudH07XHJcbiAgICAgIC8qIG1hcmdpbjogMnJlbSAwOyAqL1xyXG4gICAgICAvKiBoZWlnaHQ6IDEwMCU7ICovXHJcbiAgICAgIHBhZGRpbmc6IDJyZW07XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAwIDA7XHJcbiAgICB9XHJcblxyXG4gICAgaDIge1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogN3JlbTtcclxuICAgICAgd2lkdGg6IDI1JTtcclxuICAgIH1cclxuXHJcbiAgICAjdmlkZW9zIHtcclxuICAgICAgLyogcGFkZGluZzogMXJlbTsgKi9cclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgJHtjb2xvcnMucHJpbWFyeX07XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDAgMCAxMHB4IDEwcHg7XHJcbiAgICAgIGJvcmRlci10b3A6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgaDMge1xyXG4gICAgICBwYWRkaW5nOiAycmVtO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLyogTWVkaWEgcXVlcmllcyAqL1xyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDExMDBweCkge1xyXG4gICAgICBoMiB7XHJcbiAgICAgICAgbWluLXdpZHRoOiAyNiU7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDgzMHB4KSB7XHJcbiAgICAgICNoZWFkZXIge1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGgyIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XHJcbiAgICAgICAgbWluLXdpZHRoOiA2MCU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNTIwcHgpIHtcclxuICAgICAgI2hlYWRlciB7XHJcbiAgICAgICAgcGFkZGluZzogMS41cmVtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDM1NXB4KSB7XHJcbiAgICAgIGgyIHtcclxuICAgICAgICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGgzIHtcclxuICAgICAgICBwYWRkaW5nOiAxLjVyZW07XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgYH08L3N0eWxlPlxyXG5cclxuXHJcblxyXG4gICAgPC9zZWN0aW9uPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWRkVG9QbGF5bGlzdDsiLCJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEdsb2JhbENvbnRleHQgfSBmcm9tICcuLi9jb250ZXh0L0dsb2JhbENvbnRleHQnO1xyXG5pbXBvcnQgY29sb3JzIGZyb20gICcuLi9jc3MtdmFyaWFibGVzL2NvbG9ycyc7XHJcblxyXG5jb25zdCBDb21tZW50ID0gKHtjb21tZW50fSkgPT4ge1xyXG4gIFxyXG4gIGNvbnN0IGNvbW1lbnRlcklkID0gY29tbWVudC5jb21tZW50ZXIuX2lkIFxyXG4gIFxyXG4gIGNvbnN0IHsgZ2V0Q29tbWVudFVzZXIsIHJlbW92ZUNvbW1lbnRGcm9tUGxheWxpc3QsIGN1cnJlbnRVc2VyLCBmZXRjaFByb2ZpbGVVc2VyLCBlZGl0Q29tbWVudCB9ID0gdXNlQ29udGV4dChHbG9iYWxDb250ZXh0KTtcclxuICBcclxuICBjb25zdCBbY29tbWVudFVzZXIsIHNldENvbW1lbnRVc2VyXSA9IHVzZVN0YXRlKHtcclxuICAgIGZpcnN0TmFtZTogJycsXHJcbiAgICBsYXN0TmFtZTonJyxcclxuICAgIHByb2ZpbGVQaG90b0ZpbGVuYW1lOiAnJ1xyXG4gIH0pO1xyXG4gIFxyXG4gIGNvbnN0IFtlZGl0TW9kZSwgc2V0RWRpdE1vZGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIFxyXG4gIGNvbnN0IGVkaXRlZENvbnRlbnRSZWYgPSB1c2VSZWYoKTtcclxuXHJcbiAgXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGFzeW5jIGZ1bmN0aW9uIGZldGNoRGF0YSgpIHtcclxuICAgICAgY29uc3QgdXNlciA9IGF3YWl0IGdldENvbW1lbnRVc2VyKGNvbW1lbnQuY29tbWVudGVyLl9pZCk7XHJcbiAgICAgIHNldENvbW1lbnRVc2VyKHtcclxuICAgICAgICBmaXJzdE5hbWU6IHVzZXIuZmlyc3ROYW1lLFxyXG4gICAgICAgIGxhc3ROYW1lOiB1c2VyLmxhc3ROYW1lLFxyXG4gICAgICAgIHByb2ZpbGVQaG90b0ZpbGVuYW1lOiB1c2VyLnByb2ZpbGVQaG90b0ZpbGVuYW1lXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBmZXRjaERhdGEoKTtcclxuICB9LCBbXSlcclxuXHJcbiAgLy8gY29uc3QgW2NvbnRlbnQsIHNldENvbnRlbnRdID0gdXNlU3RhdGUoJycpO1xyXG5cclxuICAvLyBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gIC8vICAgc2V0Q29udGVudChlLnRhcmdldC52YWx1ZSk7XHJcbiAgLy8gfVxyXG5cclxuICBcclxuICBjb25zdCBlZGl0Q29tbWVudENsaWNrSGFuZGxlciA9ICgpID0+IHtcclxuICAgIC8vU2hvdyB0aGUgZWRpdCBjb21tZW50IHRleHRhcmVhXHJcbiAgICBzZXRFZGl0TW9kZSghZWRpdE1vZGUpOyBcclxuICB9XHJcblxyXG4gIGNvbnN0IGVkaXRDb21tZW50U3VibWl0SGFuZGxlciA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAvLyBDaGVjayBpZiB0aGUgY29udGVudCBpcyBlbXB0eVxyXG4gICAgaWYgKGVkaXRlZENvbnRlbnRSZWYuY3VycmVudC52YWx1ZS50cmltKCkubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGVkaXRDb21tZW50KGNvbW1lbnQuX2lkLCBlZGl0ZWRDb250ZW50UmVmLmN1cnJlbnQudmFsdWUpO1xyXG4gICAgLy8gRXhpdCBlZGl0IG1vZGVcclxuICAgIHNldEVkaXRNb2RlKGZhbHNlKTtcclxuICB9XHJcblxyXG4gIFxyXG4gIGNvbnN0IGNvbnZlcnREYXRlPSAobWlsbGlzZWNzKSA9PiB7XHJcbiAgICBjb25zdCBkID0gbmV3IERhdGUoK21pbGxpc2Vjcyk7XHJcbiAgICAvLyByZXR1cm4gZC50b0xvY2FsZVN0cmluZygpO1xyXG4gICAgY29uc3QgZGF0ZUFycmF5ID0gZC50b0xvY2FsZVN0cmluZygpLnNwbGl0KFwiLCBcIik7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhhcnJheSk7XHJcbiAgICByZXR1cm4gZGF0ZUFycmF5XHJcbiAgfVxyXG5cclxuICBjb25zdCByZW1vdmVDb21tZW50Q2xpY2tIYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgcmVtb3ZlQ29tbWVudEZyb21QbGF5bGlzdChjb21tZW50Ll9pZCk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBjb21tZW50ZXJDbGlja0hhbmRsZXIgPSAoKSA9PiB7XHJcbiAgICBmZXRjaFByb2ZpbGVVc2VyKGNvbW1lbnRlcklkLCBmYWxzZSk7XHJcbiAgfVxyXG5cclxuXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21tZW50XCIga2V5PXtjb21tZW50Ll9pZH0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImF2YXRhclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImF2YXRhci1jcm9wXCI+XHJcbiAgICAgICAgICAgICAge2NvbW1lbnRVc2VyLnByb2ZpbGVQaG90b0ZpbGVuYW1lICE9PSBudWxsICYmIGNvbW1lbnRVc2VyLnByb2ZpbGVQaG90b0ZpbGVuYW1lICE9PSAnJyAmJlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9maWxlL1t1c2VySWRdXCIgYXM9e2AvcHJvZmlsZS8ke2NvbW1lbnRlcklkfWB9PlxyXG4gICAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXtjb21tZW50ZXJDbGlja0hhbmRsZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtgaHR0cDovL2xvY2FsaG9zdDozMDAwL2ltYWdlLyR7Y29tbWVudFVzZXIucHJvZmlsZVBob3RvRmlsZW5hbWV9YH0gYWx0PVwiYXZhdGFyXCIgLz5cclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB7KGNvbW1lbnRVc2VyLnByb2ZpbGVQaG90b0ZpbGVuYW1lID09PSBudWxsIHx8IGNvbW1lbnRVc2VyLnByb2ZpbGVQaG90b0ZpbGVuYW1lID09PSAnJykgJiZcclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvZmlsZS9bdXNlcklkXVwiIGFzPXtgL3Byb2ZpbGUvJHtjb21tZW50ZXJJZH1gfT5cclxuICAgICAgICAgICAgICAgICAgPGEgb25DbGljaz17Y29tbWVudGVyQ2xpY2tIYW5kbGVyfT5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz0nL2RlZmF1bHQtYXZhdGFyLmpwZycgYWx0PVwiYXZhdGFyXCIgLz5cclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21tZW50ZXJcIj5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9maWxlL1t1c2VySWRdXCIgYXM9e2AvcHJvZmlsZS8ke2NvbW1lbnRlcklkfWB9PlxyXG4gICAgICAgICAgICAgIDxhIG9uQ2xpY2s9e2NvbW1lbnRlckNsaWNrSGFuZGxlcn0+PGgzPntjb21tZW50VXNlci5maXJzdE5hbWV9IHtjb21tZW50VXNlci5sYXN0TmFtZX08L2gzPjwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICB7IWVkaXRNb2RlICYmIFxyXG4gICAgICAgICAgICAgIDxwPntjb21tZW50LmNvbnRlbnR9PC9wPlxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIHtlZGl0TW9kZSAmJlxyXG4gICAgICAgICAgICA8c2VjdGlvbiBpZD1cImVkaXQtY29tbWVudFwiPlxyXG4gICAgICAgICAgICAgIDxmb3JtIGlkPVwiZWRpdC1mb3JtXCIgb25TdWJtaXQ9eyhlKSA9PiBlZGl0Q29tbWVudFN1Ym1pdEhhbmRsZXIoZSl9PlxyXG4gICAgICAgICAgICAgICAgPHRleHRhcmVhIG5hbWU9XCJlZGl0LWNvbW1lbnQtaW5wdXRcIiBpZD1cImVkaXQtY29tbWVudC1pbnB1dFwiIGRlZmF1bHRWYWx1ZT17Y29tbWVudC5jb250ZW50fSBjb2xzPVwiMzBcIiByb3dzPVwiNVwiIHJlZj17ZWRpdGVkQ29udGVudFJlZn0+PC90ZXh0YXJlYT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZWRpdC1idG5zXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXBlbmNpbFwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17ZWRpdENvbW1lbnRDbGlja0hhbmRsZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXdpbmRvdy1jbG9zZVwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgPC9kaXY+ICAgICAgXHJcblxyXG4gICAgICAgIHshZWRpdE1vZGUgJiYgXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhdGUtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIHtjdXJyZW50VXNlci5pZCA9PT0gY29tbWVudGVySWQgJiYgIWVkaXRNb2RlICYmXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21tZW50LWJ0bnNcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17ZWRpdENvbW1lbnRDbGlja0hhbmRsZXJ9PlxyXG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1wZW5jaWwtc3F1YXJlLW9cIj48L2k+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17cmVtb3ZlQ29tbWVudENsaWNrSGFuZGxlcn0+XHJcbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXRyYXNoXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXRlLXRpbWVcIj5cclxuICAgICAgICAgICAgICB7Y29udmVydERhdGUoY29tbWVudC5jcmVhdGVkQXQpLm1hcChkYXRlID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiA8aDQgY2xhc3NOYW1lPVwiZGF0ZVwiIGtleT17ZGF0ZX0+e2RhdGV9PC9oND5cclxuICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICB9ICBcclxuXHJcbiAgICAgICAgXHJcblxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICA8Lz5cclxuXHJcbiAgICBcclxuXHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuXHJcbiAgICAgIC5jb21tZW50IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgbWFyZ2luOiAxcmVtIDA7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5jb21tZW50ZXIge1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgJHtjb2xvcnMucHJpbWFyeX1cclxuICAgICAgfVxyXG5cclxuICAgICAgLmNvbW1lbnRlciBoMyB7XHJcbiAgICAgICAgbWFyZ2luOiAwIDFyZW07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5jb250ZW50IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHBhZGRpbmc6IDEuMnJlbSAwIDEuMnJlbSAxLjJyZW07XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmNvbW1lbnQtaW5mbyB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuYXZhdGFyIHtcclxuICAgICAgICBtYXgtaGVpZ2h0OiA1MHB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuYXZhdGFyLWNyb3Age1xyXG4gICAgICAgIG1heC13aWR0aDogNTBweDtcclxuICAgICAgICBtYXgtaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpbWcge1xyXG4gICAgICAgIG1heC13aWR0aDogNTBweDtcclxuICAgICAgICBtYXgtaGVpZ2h0OiA3NXB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBoNCB7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgfVxyXG5cclxuICAgICAgcCB7XHJcbiAgICAgICAgbWFyZ2luOiAwIDEuNXJlbTtcclxuICAgICAgICAvKiBvdmVyZmxvdy15OiBzY3JvbGw7ICovXHJcbiAgICAgICAgLyogaGVpZ2h0OiAxMDBweDsgKi9cclxuICAgICAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgICAgICAgd2lkdGg6IDY1MHB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuZGF0ZS1jb250YWluZXIge1xyXG4gICAgICAgIG1hcmdpbjogMXJlbSAwIDFyZW0gYXV0bztcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwLjVyZW07XHJcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAke2NvbG9ycy5wcmltYXJ5fTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmRhdGUtdGltZSB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMC41cmVtO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuZGF0ZS1jb250YWluZXIgaDQge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMXJlbSAwIDEuNXJlbTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmNvbW1lbnQtYnRucyB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxLjE1cmVtO1xyXG5cclxuICAgICAgfVxyXG5cclxuICAgICAgYnV0dG9uIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgfVxyXG5cclxuICAgIGkge1xyXG4gICAgICBjb2xvcjogJHtjb2xvcnMucHJpbWFyeX07XHJcbiAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjJzIGVhc2UtaW4tb3V0O1xyXG4gICAgfVxyXG5cclxuICAgIC5jb21tZW50LWJ0bnMgaSB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIH1cclxuXHJcbiAgICBpLmZhLXBlbmNpbC1zcXVhcmUtbyB7XHJcbiAgICAgIHRvcDogOHB4O1xyXG4gICAgICBsZWZ0OiAtMnB4O1xyXG4gICAgfVxyXG5cclxuICAgIGkuZmEtdHJhc2gge1xyXG4gICAgICB0b3A6IDZweDtcclxuICAgICAgbGVmdDogMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIGk6aG92ZXIge1xyXG4gICAgICBjb2xvcjogI2U1MzA1YTtcclxuICAgIH1cclxuXHJcbiAgICBidXR0b246Zm9jdXMge1xyXG4gICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgIHNlY3Rpb24jZWRpdC1jb21tZW50IHtcclxuICAgICAgd2lkdGg6IDg1JTtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDFyZW07XHJcbiAgICB9XHJcblxyXG4gICAgZm9ybSNlZGl0LWZvcm0ge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICB0ZXh0YXJlYSB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBmb250OiBpbmhlcml0O1xyXG4gICAgICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgICB9XHJcblxyXG4gICAgI2VkaXQtY29tbWVudCBidXR0b24ge1xyXG4gICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgIHBhZGRpbmc6IDAgMC41cmVtO1xyXG4gICAgfVxyXG5cclxuICAgIC5lZGl0LWJ0bnMge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgfVxyXG5cclxuICAgIGkuZmEtcGVuY2lsIHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcclxuICAgIH1cclxuXHJcbiAgICBpLmZhLXdpbmRvdy1jbG9zZSB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMC41cmVtO1xyXG4gICAgfVxyXG5cclxuICAgIC8qIE1lZGlhIHF1ZXJpZXMgKi9cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMTUwcHggKSB7XHJcbiAgICAgIHAge1xyXG4gICAgICAgIHdpZHRoOiA0MDBweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMDcwcHggKSB7XHJcbiAgICAgIHAge1xyXG4gICAgICAgIHdpZHRoOiAzNTBweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMDAwcHggKSB7XHJcbiAgICAgIHAge1xyXG4gICAgICAgIHdpZHRoOiAzMDBweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmF2YXRhciB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmNvbnRlbnQge1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMC41cmVtO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvKiAuY29tbWVudCB7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgfSAqL1xyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA4NjBweCkge1xyXG4gICAgICAuY29tbWVudCB7XHJcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5kYXRlLWNvbnRhaW5lciB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogLTExcHg7XHJcbiAgICAgICAgcmlnaHQ6IC03cHg7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuZWRpdC1idG5zIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAycHg7XHJcbiAgICAgICAgcmlnaHQ6IDFweDtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRleHRhcmVhIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxLjRyZW07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5kYXRlLXRpbWUge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogODMwcHgpIHtcclxuICAgICAgLmNvbnRlbnQge1xyXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5jb21tZW50IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBwIHtcclxuICAgICAgICB3aWR0aDogNDgwcHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMS41cmVtO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuYXZhdGFyIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAxOHB4O1xyXG4gICAgICAgIGxlZnQ6IDE2cHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5jb21tZW50ZXIgaDMge1xyXG4gICAgICAgIG1hcmdpbjogMC43cmVtIDByZW0gMHJlbSA0LjNyZW07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5jb21tZW50ZXIge1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgc2VjdGlvbiNlZGl0LWNvbW1lbnQge1xyXG4gICAgICAgIHdpZHRoOiA5MiU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogODAwcHggKSB7XHJcbiAgICAgIHAge1xyXG4gICAgICAgIHdpZHRoOiA1OXZ3O1xyXG4gICAgICAgIC8qIG1hcmdpbi1yaWdodDogMC41cmVtOyAqL1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qIE1lZGlhIHF1ZXJpZXMgKi9cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCApIHtcclxuICAgICAgLmF2YXRhciB7XHJcbiAgICAgICAgLyogZGlzcGxheTogbm9uZTsgKi9cclxuICAgICAgfVxyXG5cclxuICAgICAgLmNvbW1lbnRlciB7XHJcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiBub25lO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBwIHtcclxuICAgICAgICAvKiBvdmVyZmxvdzogc2Nyb2xsOyAqL1xyXG4gICAgICAgIC8qIGhlaWdodDogMTAwcHg7ICovXHJcbiAgICAgICAgLyogd29yZC13cmFwOiBicmVhay13b3JkOyAqL1xyXG4gICAgICAgIHdpZHRoOiA1NXZ3O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuY29udGVudCB7XHJcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2NjBweCkge1xyXG4gICAgICBwIHtcclxuICAgICAgICB3aWR0aDogNjh2dztcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2MTBweCkge1xyXG4gICAgICBzZWN0aW9uI2VkaXQtY29tbWVudCB7XHJcbiAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmNvbnRlbnQge1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMHJlbTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaDMge1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMC42cmVtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDU2MHB4KSB7XHJcbiAgICAgIHAge1xyXG4gICAgICAgIC8qIHdpZHRoOiA0NXZ3OyAqL1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XHJcbiAgICAgIHAge1xyXG4gICAgICAgIHdpZHRoOiA2NXZ3O1xyXG4gICAgICAgIC8qIGZvbnQtc2l6ZTogMC45cmVtOyAqL1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuY29tbWVudCB7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDFyZW07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5hdmF0YXIge1xyXG4gICAgICAgIHRvcDogMzNweDtcclxuICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNDQwcHgpIHtcclxuICAgICAgcCB7XHJcbiAgICAgICAgd2lkdGg6IDYzdnc7XHJcbiAgICAgICAgLyogZm9udC1zaXplOiAwLjlyZW07ICovXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNDIwcHgpIHtcclxuICAgICAgcCB7XHJcbiAgICAgICAgd2lkdGg6IDY5dnc7XHJcbiAgICAgICAgLyogZm9udC1zaXplOiAwLjlyZW07ICovXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogMzYwcHgpIHtcclxuICAgICAgcCB7XHJcbiAgICAgICAgd2lkdGg6IDY1dnc7XHJcbiAgICAgICAgLyogZm9udC1zaXplOiAwLjhyZW07ICovXHJcbiAgICAgICAgLyogbWFyZ2luLWxlZnQ6IDFyZW07ICovXHJcbiAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gIFxyXG4gICAgYH08L3N0eWxlPlxyXG5cclxuICA8Lz5cclxuICApXHJcbn1cclxuXHJcbi8vIENvbW1lbnQuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgY3R4ID0+IHtcclxuLy8gICBnZXRDb21tZW50RGF0YVxyXG4vLyB9XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb21tZW50OyIsImltcG9ydCB7IHVzZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQ29tbWVudCBmcm9tICcuL0NvbW1lbnQnO1xyXG5pbXBvcnQgeyBHbG9iYWxDb250ZXh0IH0gZnJvbSAnLi4vY29udGV4dC9HbG9iYWxDb250ZXh0JztcclxuaW1wb3J0IGNvbG9ycyBmcm9tICcuLi9jc3MtdmFyaWFibGVzL2NvbG9ycyc7XHJcblxyXG5cclxuXHJcblxyXG5jb25zdCBDb21tZW50U2VjdGlvbiA9ICh7IHByb2ZpbGVVc2VyIH0pID0+IHtcclxuXHJcbiAgY29uc3QgeyBhZGRDb21tZW50LCBhdXRoU3RhdGV9ID0gdXNlQ29udGV4dChHbG9iYWxDb250ZXh0KTtcclxuXHJcbiAgY29uc3QgW2NvbnRlbnQsIHNldENvbnRlbnRdID0gdXNlU3RhdGUoJycpO1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgc2V0Q29udGVudChlLnRhcmdldC52YWx1ZSk7XHJcbiAgfVxyXG4gIFxyXG4gIGNvbnN0IGNvbW1lbnRTdWJtaXRIYW5kbGVyID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGFkZENvbW1lbnQoY29udGVudCk7XHJcbiAgICBzZXRDb250ZW50KCcnKTtcclxuICB9XHJcblxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gaWQ9XCJjb21tZW50LXNlY3Rpb25cIj5cclxuICAgICAgPGgyPkNvbW1lbnRzPC9oMj4gXHJcblxyXG4gICAgICA8c2VjdGlvbiBpZD1cImNvbW1lbnRzXCI+XHJcbiAgICAgICAge3Byb2ZpbGVVc2VyLnBsYXlsaXN0Q29tbWVudHMubGVuZ3RoID09PSAwICYmIFxyXG4gICAgICAgICAgPGgzPkJlIHRoZSBmaXJzdCB0byBhZGQgYSBjb21tZW50ITwvaDM+XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB7cHJvZmlsZVVzZXIucGxheWxpc3RDb21tZW50cy5tYXAoY29tbWVudCA9PiAoXHJcbiAgICAgICAgICA8Q29tbWVudCBjb21tZW50PXtjb21tZW50fSBrZXk9e2NvbW1lbnQuX2lkfS8+XHJcbiAgICAgICAgKVxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvc2VjdGlvbj5cclxuXHJcbiAgICAgIHthdXRoU3RhdGUuYXV0aGVudGljYXRlZCA9PT0gdHJ1ZSAmJlxyXG4gICAgICAgIDxzZWN0aW9uIGlkPVwiYWRkLWNvbW1lbnRcIj5cclxuICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXsoZSkgPT4gY29tbWVudFN1Ym1pdEhhbmRsZXIoZSl9PlxyXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImNvbW1lbnQtaW5wdXRcIj5BZGQgYSBjb21tZW50PC9sYWJlbD5cclxuICAgICAgICAgICAgPHRleHRhcmVhIG5hbWU9XCJjb21tZW50LWlucHV0XCIgaWQ9XCJjb21tZW50LWlucHV0XCIgdmFsdWU9e2NvbnRlbnR9IGNvbHM9XCIzMFwiIHJvd3M9XCIzXCIgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0+PC90ZXh0YXJlYT5cclxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+UG9zdDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICBcclxuICAgICAgc2VjdGlvbiNjb21tZW50LXNlY3Rpb24ge1xyXG4gICAgICAgIG1hcmdpbjogM3JlbSAwO1xyXG4gICAgICAgIHBhZGRpbmc6IDNyZW07XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgYmFja2dyb3VuZDogJHtjb2xvcnMuZ3JhZGllbnR9O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBzZWN0aW9uI2NvbW1lbnRzIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBmb3JtIHtcclxuICAgICAgICBtYXJnaW46IDFyZW0gMDtcclxuICAgICAgfVxyXG5cclxuICAgICAgbGFiZWwge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0ZXh0YXJlYSB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMC41cmVtO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGZvbnQ6IGluaGVyaXQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICAgICAgcGFkZGluZzogMC41cmVtO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBidXR0b24ge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICBwYWRkaW5nOiAwLjc1cmVtIDFyZW07XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgIG1hcmdpbjogMC41cmVtIDA7XHJcbiAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZS1pbi1vdXQ7XHJcblxyXG4gICAgICB9XHJcblxyXG4gICAgICBidXR0b246aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8qIE1lZGlhIHF1ZXJpZXMgKi9cclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDExNTBweCApIHtcclxuXHJcbiAgICAgICAgc2VjdGlvbiNjb21tZW50LXNlY3Rpb24ge1xyXG4gICAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2NjBweCApIHtcclxuICAgICAgICBzZWN0aW9uI2NvbW1lbnQtc2VjdGlvbiB7XHJcbiAgICAgICAgICB3aWR0aDogOTUlO1xyXG4gICAgICAgICAgLyogbWFyZ2luOiBhdXRvOyAqL1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDYyMHB4ICkge1xyXG4gICAgICAgIHNlY3Rpb24jY29tbWVudC1zZWN0aW9uIHtcclxuICAgICAgICAgIHdpZHRoOiA5NSU7XHJcbiAgICAgICAgICBwYWRkaW5nOiAycmVtO1xyXG4gICAgICAgICAgLyogbWFyZ2luOiBhdXRvOyAqL1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDM5MHB4ICkge1xyXG4gICAgICAgIHNlY3Rpb24jY29tbWVudC1zZWN0aW9uIHtcclxuICAgICAgICAgIHdpZHRoOiA5NSU7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxLjVyZW07XHJcbiAgICAgICAgICAvKiBtYXJnaW46IGF1dG87ICovXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogMzYwcHggKSB7XHJcbiAgICAgICAgc2VjdGlvbiNjb21tZW50LXNlY3Rpb24ge1xyXG4gICAgICAgICAgLyogd2lkdGg6IDk1JTsgKi9cclxuICAgICAgICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICAgICAgICAvKiBtYXJnaW46IGF1dG87ICovXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICBcclxuICAgIGB9PC9zdHlsZT5cclxuXHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb21tZW50U2VjdGlvbjsiLCJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlQ29udGV4dCwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBHbG9iYWxDb250ZXh0IH0gZnJvbSAnLi4vY29udGV4dC9HbG9iYWxDb250ZXh0JztcclxuaW1wb3J0IGNvbG9ycyBmcm9tICcuLi9jc3MtdmFyaWFibGVzL2NvbG9ycyc7XHJcblxyXG5cclxuXHJcbmNvbnN0IEZhdm91cml0ZUl0ZW0gPSAoe2lkfSkgPT4ge1xyXG5cclxuXHJcbiAgY29uc3QgeyBnZXRGYXZvdXJpdGVVc2VyLCBmZXRjaFByb2ZpbGVVc2VyLCByZW1vdmVGYXZvdXJpdGUsIGN1cnJlbnRVc2VyLCBwcm9maWxlVXNlciwgYXV0aFN0YXRlIH0gPSB1c2VDb250ZXh0KEdsb2JhbENvbnRleHQpO1xyXG4gIFxyXG4gIGNvbnN0IFtmYXZVc2VyLCBzZXRGYXZVc2VyXSA9IHVzZVN0YXRlKHt9KTtcclxuXHJcbiAgY29uc3QgZmF2VXNlckNsaWNrSGFuZGxlciA9ICgpID0+IHtcclxuICAgIGZldGNoUHJvZmlsZVVzZXIoaWQsIGZhbHNlKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHJlbW92ZUZhdkhhbmRsZXIgPSAoKSA9PiB7XHJcbiAgICByZW1vdmVGYXZvdXJpdGUoaWQpO1xyXG4gIH1cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgY29uc3QgdXNlckRhdGEgPSBhd2FpdCBnZXRGYXZvdXJpdGVVc2VyKGlkKTtcclxuICAgICAgc2V0RmF2VXNlcih7XHJcbiAgICAgICAgZmlyc3ROYW1lOiB1c2VyRGF0YS5maXJzdE5hbWUsXHJcbiAgICAgICAgbGFzdE5hbWU6IHVzZXJEYXRhLmxhc3ROYW1lLFxyXG4gICAgICAgIHByb2ZpbGVQaG90b0ZpbGVuYW1lOiB1c2VyRGF0YS5wcm9maWxlUGhvdG9GaWxlbmFtZSxcclxuICAgICAgICBpZFxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gICAgZmV0Y2hEYXRhKCk7XHJcbiAgfSwgW2lkXSlcclxuICBcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgaWQ9XCJmYXZvdXJpdGUtaXRlbVwiPlxyXG4gICAgICB7LyogPGg0PkF2YXRhcjwvaDQ+ICovfVxyXG4gICAgICA8ZGl2IGlkPVwiYXZhdGFyXCI+XHJcbiAgICAgICAge2ZhdlVzZXIucHJvZmlsZVBob3RvRmlsZW5hbWUgPT09IG51bGwgJiZcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNyb3BcIj5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvZmlsZS9bdXNlcklkXVwiIGFzPXtgL3Byb2ZpbGUvJHtpZH1gfT5cclxuICAgICAgICAgICAgPGEgb25DbGljaz17ZmF2VXNlckNsaWNrSGFuZGxlcn0+XHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9XCIvZGVmYXVsdC1hdmF0YXIuanBnXCIgYWx0PVwiYXZhdGFyXCIgLz5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgICAgIH0gXHJcblxyXG4gICAgICAgIHtmYXZVc2VyLnByb2ZpbGVQaG90b0ZpbGVuYW1lICE9PSBudWxsICYmIGZhdlVzZXIucHJvZmlsZVBob3RvRmlsZW5hbWUgIT09ICcnICYmIGZhdlVzZXIucHJvZmlsZVBob3RvRmlsZW5hbWUgIT09IHVuZGVmaW5lZCAmJlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3JvcFwiPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9maWxlL1t1c2VySWRdXCIgYXM9e2AvcHJvZmlsZS8ke2lkfWB9PlxyXG4gICAgICAgICAgICA8YSBvbkNsaWNrPXtmYXZVc2VyQ2xpY2tIYW5kbGVyfT5cclxuICAgICAgICAgICAgICA8aW1nIHNyYz17YGh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9pbWFnZS8ke2ZhdlVzZXIucHJvZmlsZVBob3RvRmlsZW5hbWV9YH0gYWx0PVwiYXZhdGFyXCIgLz5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIH1cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8TGluayBocmVmPVwiL3Byb2ZpbGUvW3VzZXJJZF1cIiBhcz17YC9wcm9maWxlLyR7aWR9YH0+XHJcbiAgICAgICAgPGEgb25DbGljaz17ZmF2VXNlckNsaWNrSGFuZGxlcn0+PGgzPntmYXZVc2VyLmZpcnN0TmFtZX0ge2ZhdlVzZXIubGFzdE5hbWV9PC9oMz48L2E+XHJcbiAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgIFxyXG4gICAgICB7IGF1dGhTdGF0ZS5hdXRoZW50aWNhdGVkID09PSB0cnVlICYmIGN1cnJlbnRVc2VyLmlkID09PSBwcm9maWxlVXNlci5pZCAmJlxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17cmVtb3ZlRmF2SGFuZGxlcn0+XHJcbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS10aW1lcy1jaXJjbGVcIj48L2k+XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIFxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgIFxyXG4gICAgICAgICNmYXZvdXJpdGUtaXRlbSB7XHJcbiAgICAgICAgICBtYXJnaW46IDAgMXJlbTtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgIHBhZGRpbmc6IDJyZW07XHJcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAke2NvbG9ycy5wcmltYXJ5fTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jcm9wIHtcclxuICAgICAgICAgIG1heC1oZWlnaHQ6IDEwMHB4O1xyXG4gICAgICAgICAgbWF4LXdpZHRoOiAxMDBweDtcclxuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG8gMC44cmVtIGF1dG87XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhIHtcclxuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICB3aWR0aDogNDBweDtcclxuICAgICAgICAgIGhlaWdodDogOHB4O1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgdG9wOiAwcHg7XHJcbiAgICAgICAgICByaWdodDogOHB4O1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgICAgICAgIGNvbG9yOiAke2NvbG9ycy5wcmltYXJ5fTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGkge1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgMC4ycyBlYXNlLWluLW91dDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgaTpob3ZlciB7XHJcbiAgICAgICAgICBjb2xvcjogI2U1MzA1YTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGgzIHtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2OTBweCApIHtcclxuICAgICAgICAgICNmYXZvdXJpdGUtaXRlbSB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCAxcmVtO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0NTBweCApIHtcclxuICAgICAgICAgIC5jcm9wIHtcclxuICAgICAgICAgICAgd2lkdGg6IDgwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogODBweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICB3aWR0aDogODBweDtcclxuICAgICAgICAgICAgLyogcGFkZGluZy10b3A6IDFyZW07ICovXHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgI2F2YXRhciB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIFxyXG4gICAgICBgfTwvc3R5bGU+XHJcblxyXG5cclxuXHJcblxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGYXZvdXJpdGVJdGVtOyIsImltcG9ydCBGYXZvdXJpdGVJdGVtIGZyb20gJy4vRmF2b3VyaXRlSXRlbSc7XHJcbmltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgR2xvYmFsQ29udGV4dCB9IGZyb20gJy4uL2NvbnRleHQvR2xvYmFsQ29udGV4dCc7XHJcbmltcG9ydCBjb2xvcnMgZnJvbSAnLi4vY3NzLXZhcmlhYmxlcy9jb2xvcnMnXHJcblxyXG5jb25zdCBGYXZvdXJpdGVzID0gKCkgPT4ge1xyXG5cclxuICBjb25zdCB7IHByb2ZpbGVVc2VyIH0gPSB1c2VDb250ZXh0KEdsb2JhbENvbnRleHQpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gaWQ9XCJmYXZvdXJpdGVzXCI+XHJcbiAgICAgIDxoMj48aSBjbGFzc05hbWU9XCJmYSBmYS1zdGFyXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPkZhdm91cml0ZXMgPC9oMj5cclxuXHJcbiAgICAgIDxkaXYgaWQ9XCJmYXZvdXJpdGUtaXRlbXNcIj5cclxuICAgICAgICB7cHJvZmlsZVVzZXIuZmF2b3VyaXRlcy5tYXAoZmF2b3VyaXRlID0+IChcclxuICAgICAgICAgIDxGYXZvdXJpdGVJdGVtIGlkPXtmYXZvdXJpdGV9IGtleT17ZmF2b3VyaXRlfS8+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAge3Byb2ZpbGVVc2VyLmZhdm91cml0ZXMubGVuZ3RoID09PSAwICYmIFxyXG4gICAgICAgIDxoMz5cclxuICAgICAgICAgIE5vIGZhdm91cml0ZSB1c2VycyBoYXZlIGJlZW4gYWRkZWQuXHJcbiAgICAgICAgPC9oMz5cclxuICAgICAgfVxyXG5cclxuXHJcblxyXG4gIDxzdHlsZSBqc3g+e2BcclxuICBcclxuICAgIHNlY3Rpb24jZmF2b3VyaXRlcyB7XHJcbiAgICAgIHBhZGRpbmc6IDNyZW07XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICR7Y29sb3JzLnByaW1hcnl9O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbiAgICB9XHJcblxyXG4gICAgaS5mYS1zdGFyIHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAwLjc1cmVtO1xyXG4gICAgICBjb2xvcjogJHtjb2xvcnMuc2Vjb25kYXJ5fTtcclxuICAgICAgZm9udC1zaXplOiAxLjRyZW07XHJcbiAgICAgIC8qIGhlaWdodDogNTBweDsgKi9cclxuICAgIH1cclxuXHJcbiAgICAjZmF2b3VyaXRlLWl0ZW1zIHtcclxuICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgZ3JpZC1hdXRvLWZsb3c6IHJvdztcclxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNSwgMWZyKTtcclxuICAgICAgcGFkZGluZzogMXJlbTtcclxuICAgICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICAgICAgZ3JpZC1yb3ctZ2FwOiAycmVtO1xyXG4gICAgfVxyXG5cclxuICAgIGgzIHtcclxuICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgLyogdGV4dC1hbGlnbjogY2VudGVyOyAqL1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgLyogTWVkaWEgcXVlcmllcyAqL1xyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDExNTBweCApIHtcclxuICAgICAgI2Zhdm91cml0ZS1pdGVtcyB7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgc2VjdGlvbiNmYXZvdXJpdGVzIHtcclxuICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgIG1hcmdpbjogM3JlbSBhdXRvO1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMnJlbTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5MzBweCApIHtcclxuICAgICAgI2Zhdm91cml0ZS1pdGVtcyB7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCApIHtcclxuICAgICAgc2VjdGlvbiNmYXZvdXJpdGVzIHtcclxuICAgICAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4ICkge1xyXG4gICAgICAjZmF2b3VyaXRlLWl0ZW1zIHtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxLCAxZnIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDM3MHB4ICkge1xyXG4gICAgICBzZWN0aW9uI2Zhdm91cml0ZXMge1xyXG4gICAgICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICBcclxuICBgfTwvc3R5bGU+XHJcblxyXG4gICAgPC9zZWN0aW9uPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmF2b3VyaXRlcztcclxuIiwiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUNvbnRleHR9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBHbG9iYWxDb250ZXh0IH0gZnJvbSAnLi4vY29udGV4dC9HbG9iYWxDb250ZXh0JztcclxuaW1wb3J0IGNvbG9ycyBmcm9tICcuLi9jc3MtdmFyaWFibGVzL2NvbG9ycyc7XHJcblxyXG5cclxuY29uc3QgRmlsZVVwbG9hZCA9ICh7c2V0RWRpdE1vZGV9KSA9PiB7XHJcblxyXG4gIGNvbnN0IFtmaWxlLCBzZXRGaWxlXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbZmlsZW5hbWUsIHNldEZpbGVuYW1lXSA9IHVzZVN0YXRlKCdVcGxvYWQgcGhvdG8gLSBtYXggc2l6ZSA3MCBLQicpO1xyXG5cclxuICBjb25zdCB7IHVwbG9hZEZpbGUgfSA9IHVzZUNvbnRleHQoR2xvYmFsQ29udGV4dCk7XHJcblxyXG4gIGNvbnN0IHVwbG9hZEZpbGVIYW5kbGVyID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAvLyBDaGVjayBmb3IgbWF4IHNpemVcclxuICAgIGlmIChmaWxlLnNpemUgPiA3MDAwMCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgIGZvcm1EYXRhLmFwcGVuZCgnZmlsZScsIGZpbGUpO1xyXG5cclxuICAgIHVwbG9hZEZpbGUoZm9ybURhdGEpO1xyXG4gICAgc2V0RWRpdE1vZGUoZmFsc2UpO1xyXG4gIH1cclxuXHJcbiAgY29uc3Qgb25DaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgc2V0RmlsZShlLnRhcmdldC5maWxlc1swXSk7XHJcbiAgICBzZXRGaWxlbmFtZShlLnRhcmdldC5maWxlc1swXS5uYW1lKTtcclxuICB9XHJcblxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBpZD1cImZpbGUtdXBsb2FkXCI+XHJcbiAgICAgIDxoMj5VcGxvYWQgYSBwcm9maWxlIHBob3RvOjwvaDI+XHJcbiAgICAgIDxmb3JtIG9uU3VibWl0PXsoZSkgPT4gdXBsb2FkRmlsZUhhbmRsZXIoZSl9PlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIG5hbWU9XCJmaWxlXCIgaWQ9XCJmaWxlXCIgY2xhc3NOYW1lPVwiY3VzdG9tLWZpbGUtaW5wdXRcIiBvbkNoYW5nZT17b25DaGFuZ2V9IC8+XHJcbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJmaWxlXCIgY2xhc3NOYW1lPVwiY3VzdG9tLWZpbGUtbGFiZWxcIj5cclxuICAgICAgICAgIHtmaWxlbmFtZX1cclxuICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiVXBsb2FkXCI+VXBsb2FkPC9idXR0b24+XHJcbiAgICAgIDwvZm9ybT5cclxuXHJcblxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgIFxyXG4gICAgICAgICNmaWxlLXVwbG9hZCB7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAzcmVtO1xyXG4gICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICR7Y29sb3JzLnByaW1hcnl9O1xyXG4gICAgICAgICAgcGFkZGluZy10b3A6IDJyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAjZmlsZS11cGxvYWQgaDIge1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAgIGZvcm0ge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpbnB1dFt0eXBlPVwiZmlsZVwiXSB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpbnB1dCNmaWxlLXVwbG9hZC1idXR0b24ge1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgcGFkZGluZzogMXJlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxhYmVsIHtcclxuICAgICAgICAgIG1hcmdpbjogMC41cmVtIDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgd2lkdGg6IDgzcHg7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICBtYXJnaW46IDFyZW0gMDsgXHJcbiAgICAgICAgfVxyXG4gICAgICBcclxuICAgICAgYH08L3N0eWxlPlxyXG5cclxuICAgIDwvZGl2PiBcclxuXHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGaWxlVXBsb2FkO1xyXG4iLCJpbXBvcnQgY29sb3JzIGZyb20gJy4uL2Nzcy12YXJpYWJsZXMvY29sb3JzJztcclxuXHJcbmNvbnN0IEZvb3RlciA9ICgpID0+IHtcclxuXHJcbiAgY29uc3QgeWVhciA9IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxmb290ZXIgaWQ9XCJtYWluLWZvb3RlclwiPlxyXG4gICAgICA8aDQ+Q09ERVRVTkVTPC9oND5cclxuICAgICAgPGg0PiZjb3B5OyB7eWVhcn08L2g0PlxyXG5cclxuICAgIDxzdHlsZSBqc3g+e2BcclxuXHJcbiAgICAgIGZvb3RlciB7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBwYWRkaW5nOiAxLjJyZW07XHJcbiAgICAgICAgLyogbWFyZ2luLXRvcDogMnJlbTsgKi9cclxuICAgICAgICBiYWNrZ3JvdW5kOiAke2NvbG9ycy5yZXZlcnNlR3JhZGllbnR9O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBoNCB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgfVxyXG4gICAgXHJcbiAgICBcclxuICAgIGB9PC9zdHlsZT5cclxuXHJcblxyXG5cclxuICAgIDwvZm9vdGVyPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyO1xyXG4iLCJpbXBvcnQgVmlkZW9JdGVtIGZyb20gJy4vVmlkZW9JdGVtJztcclxuaW1wb3J0IGNvbG9ycyBmcm9tICcuLi9jc3MtdmFyaWFibGVzL2NvbG9ycydcclxuXHJcblxyXG5jb25zdCBQbGF5TGlzdCA9ICh7cHJvZmlsZVVzZXIgfSkgPT4ge1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gaWQ9XCJwbGF5bGlzdFwiPlxyXG5cclxuICAgICAgPGRpdiBpZD1cInBsYXlsaXN0LWhlYWRlclwiPlxyXG4gICAgICAgIDxoMj5QbGF5bGlzdDwvaDI+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAge3Byb2ZpbGVVc2VyLm93bmVkVmlkZW9zLmxlbmd0aCA9PT0gMCAmJiBcclxuICAgICAgICA8aDM+QWRkIHNvbWUgbXVzaWMgdG8geW91ciBwbGF5bGlzdCE8L2gzPlxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBcclxuICAgICAge3Byb2ZpbGVVc2VyLm93bmVkVmlkZW9zLm1hcCh2aWRlbyA9PiAoXHJcbiAgICAgICAgLy8gPGgzPnt2aWRlby50aXRsZX08L2gzPlxyXG4gICAgICAgIDxWaWRlb0l0ZW0gdmlkZW89e3ZpZGVvfSBtb2RlPVwicGxheWxpc3RcIiBrZXk9e3ZpZGVvLnZpZGVvVVJMfS8+XHJcbiAgICAgIClcclxuICAgICAgKX1cclxuXHJcblxyXG4gICAgPHN0eWxlIGpzeD57YFxyXG5cclxuXHJcbiAgICBcclxuICAgICAgc2VjdGlvbiNwbGF5bGlzdCB7XHJcbiAgICAgICAgbWFyZ2luOiAzcmVtIGF1dG87XHJcbiAgICAgICAgLyogcGFkZGluZzogM3JlbTsgKi9cclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAke2NvbG9ycy5wcmltYXJ5fTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICB3aWR0aDogODQlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAjcGxheWxpc3QtaGVhZGVyIHtcclxuICAgICAgICAvKiBkaXNwbGF5OiBmbGV4OyAqL1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICR7Y29sb3JzLmdyYWRpZW50fTtcclxuICAgICAgICAvKiBtYXJnaW46IDJyZW0gMDsgKi9cclxuICAgICAgICAvKiBoZWlnaHQ6IDEwMCU7ICovXHJcbiAgICAgICAgcGFkZGluZzogMnJlbTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMCAwO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaDMge1xyXG4gICAgICAgIHBhZGRpbmc6IDJyZW07XHJcbiAgICAgIH1cclxuICAgIFxyXG4gICAgYH08L3N0eWxlPlxyXG4gICAgICBcclxuICAgIDwvc2VjdGlvbj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBsYXlMaXN0OyIsImltcG9ydCB7IHVzZUNvbnRleHQsIHVzZVJlZiwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgR2xvYmFsQ29udGV4dCB9IGZyb20gJy4uL2NvbnRleHQvR2xvYmFsQ29udGV4dCc7XHJcbmltcG9ydCBGaWxlVXBsb2FkIGZyb20gJy4vRmlsZVVwbG9hZCc7XHJcbmltcG9ydCBjb2xvcnMgZnJvbSAnLi4vY3NzLXZhcmlhYmxlcy9jb2xvcnMnO1xyXG5pbXBvcnQgeyBtb3Rpb24sIEFuaW1hdGVQcmVzZW5jZSB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xyXG5cclxuXHJcbmNvbnN0IGVkaXRWYXJpYW50cyA9IHtcclxuICBoaWRkZW46IHsgb3BhY2l0eTogMCwgeTogLTUwMCwgekluZGV4OiAtM30sXHJcbiAgdmlzaWJsZTogeyBcclxuICAgIG9wYWNpdHk6IDEsXHJcbiAgICB5OiAwLFxyXG4gICAgekluZGV4OiAtMyxcclxuICAgIHRyYW5zaXRpb246IHtcclxuICAgICAgZHVyYXRpb246IDAuNVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgZXhpdDogeyBvcGFjaXR5OiAwLCB5OiAtNTAwLCB6SW5kZXg6IC0zIH1cclxufVxyXG5cclxuXHJcbmNvbnN0IFByb2ZpbGVFZGl0ID0gKHtzZXRFZGl0TW9kZX0pID0+IHtcclxuXHJcbiAgY29uc3QgeyB1cGRhdGVVc2VyLCBwcm9maWxlVXNlciwgdXBsb2FkUGhvdG8gfSA9IHVzZUNvbnRleHQoR2xvYmFsQ29udGV4dCk7XHJcblxyXG4gIC8vIC8vIEZldGNoIHRoZSB1cGRhdGVkIHByb2ZpbGUgaW5mbyB0byBwcmVmaWxsIGZvcm1cclxuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gIC8vICAgZmV0Y2hQcm9maWxlVXNlcih1c2VySWQsIGZhbHNlKTtcclxuICAvLyB9XHJcblxyXG4gIC8vIFByZWZpbGwgdGhlIGZvcm0gd2l0aCB0aGUgY3VycmVudCBpbmZvXHJcbiAgY29uc3QgWyBwcm9maWxlSW5mbywgc2V0UHJvZmlsZUluZm8gXSA9IHVzZVN0YXRlKHtcclxuICAgIGZpcnN0TmFtZTogcHJvZmlsZVVzZXIuZmlyc3ROYW1lLFxyXG4gICAgbGFzdE5hbWU6IHByb2ZpbGVVc2VyLmxhc3ROYW1lLFxyXG4gICAgam9iVGl0bGU6IHByb2ZpbGVVc2VyLmpvYlRpdGxlLFxyXG4gICAgbG9jYXRpb246IHByb2ZpbGVVc2VyLmxvY2F0aW9uLFxyXG4gICAgbGFuZ3VhZ2VzOiBwcm9maWxlVXNlci5sYW5ndWFnZXMsXHJcbiAgICBhYm91dDogcHJvZmlsZVVzZXIuYWJvdXRcclxuICB9KVxyXG4gIFxyXG4gIFxyXG4gIC8vIENyZWF0ZSByZWZzXHJcbiAgY29uc3QgZmlyc3ROYW1lUmVmID0gdXNlUmVmKCk7XHJcbiAgY29uc3QgbGFzdE5hbWVSZWYgPSB1c2VSZWYoKTtcclxuICBjb25zdCBqb2JUaXRsZVJlZiA9IHVzZVJlZigpO1xyXG4gIGNvbnN0IGxvY2F0aW9uUmVmID0gdXNlUmVmKCk7XHJcbiAgY29uc3QgbGFuZ3VhZ2UxUmVmID0gdXNlUmVmKCk7XHJcbiAgY29uc3QgbGFuZ3VhZ2UyUmVmID0gdXNlUmVmKCk7XHJcbiAgY29uc3QgbGFuZ3VhZ2UzUmVmID0gdXNlUmVmKCk7XHJcbiAgY29uc3QgbGFuZ3VhZ2U0UmVmID0gdXNlUmVmKCk7XHJcbiAgY29uc3QgYWJvdXRSZWYgPSB1c2VSZWYoKTtcclxuXHJcbiAgXHJcbiAgY29uc3QgdXBkYXRlUHJvZmlsZUhhbmRsZXIgPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIC8vIEdldCBjcmVkZW50aWFscyBmcm9tIHJlZnNcclxuICAgIGNvbnN0IGZpcnN0TmFtZSA9IGZpcnN0TmFtZVJlZi5jdXJyZW50LnZhbHVlO1xyXG4gICAgY29uc3QgbGFzdE5hbWUgPSBsYXN0TmFtZVJlZi5jdXJyZW50LnZhbHVlO1xyXG4gICAgY29uc3Qgam9iVGl0bGUgPSBqb2JUaXRsZVJlZi5jdXJyZW50LnZhbHVlO1xyXG4gICAgY29uc3QgbG9jYXRpb24gPSBsb2NhdGlvblJlZi5jdXJyZW50LnZhbHVlO1xyXG4gICAgY29uc3QgbGFuZ3VhZ2UxID0gbGFuZ3VhZ2UxUmVmLmN1cnJlbnQudmFsdWU7XHJcbiAgICBjb25zdCBsYW5ndWFnZTIgPSBsYW5ndWFnZTJSZWYuY3VycmVudC52YWx1ZTtcclxuICAgIGNvbnN0IGxhbmd1YWdlMyA9IGxhbmd1YWdlM1JlZi5jdXJyZW50LnZhbHVlO1xyXG4gICAgY29uc3QgbGFuZ3VhZ2U0ID0gbGFuZ3VhZ2U0UmVmLmN1cnJlbnQudmFsdWU7XHJcbiAgICBjb25zdCBsYW5ndWFnZXMgPSBbbGFuZ3VhZ2UxLCBsYW5ndWFnZTIsIGxhbmd1YWdlMywgbGFuZ3VhZ2U0XVxyXG4gICAgY29uc3QgYWJvdXQgPSBhYm91dFJlZi5jdXJyZW50LnZhbHVlO1xyXG5cclxuICAgIC8vIENoZWNrIGlmIGFueSBuYW1lcyBmaWVsZHMgYXJlIGVtcHR5XHJcbiAgICBpZiAoZmlyc3ROYW1lLnRyaW0oKS5sZW5ndGggPT09IDAgfHwgbGFzdE5hbWUudHJpbSgpLmxlbmd0aCA9PT0gMCApIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIENhbGwgcmVnaXN0ZXIgYWN0aW9uIHRvIHNlbmQgYSBwb3N0IHJlcXVlc3QgdG8gQVBJIGFuZCBjaGFuZ2UgdGhlIGxvY2FsIGFuZCBnbG9iYWwgc3RhdGVcclxuICAgIGF3YWl0IHVwZGF0ZVVzZXIoZmlyc3ROYW1lLCBsYXN0TmFtZSwgam9iVGl0bGUsIGxvY2F0aW9uLCBsYW5ndWFnZXMsIGFib3V0KTtcclxuXHJcbiAgICAvL0Nsb3NlIHRoZSBlZGl0IHByb2ZpbGUgc2VjdGlvbiAtIHNldCBlZGl0IHRvIGZhbHNlIG9uIHByb2ZpbGUgcGFnZVxyXG4gICAgc2V0RWRpdE1vZGUoZmFsc2UpO1xyXG4gICAgXHJcbiAgfVxyXG5cclxuICBjb25zdCBnZXRFeGlzdGluZ0xhbmd1YWdlcyA9ICgpID0+IHtcclxuICAgIGlmIChwcm9maWxlSW5mby5sYW5ndWFnZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICByZXR1cm4gcHJvZmlsZUluZm8ubGFuZ3VhZ2VzO1xyXG4gICAgfVxyXG5cclxuICAgIGVsc2UgcmV0dXJuIFsnJywgJycsICcnLCAnJ11cclxuICB9IFxyXG5cclxuXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8QW5pbWF0ZVByZXNlbmNlPlxyXG4gICAgPG1vdGlvbi5kaXYgdmFyaWFudHM9e2VkaXRWYXJpYW50c30gaW5pdGlhbD0naGlkZGVuJyBhbmltYXRlPSd2aXNpYmxlJyBleGl0PSdleGl0Jz5cclxuICAgICAgPHNlY3Rpb24gaWQ9XCJwcm9maWxlLWVkaXRcIj5cclxuICAgICAgPGRpdiBpZD1cImVkaXQtY29udGFpbmVyXCI+XHJcblxyXG4gICAgICAgIDxkaXYgaWQ9XCJjb2wxXCI+XHJcbiAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17KGUpID0+IHVwZGF0ZVByb2ZpbGVIYW5kbGVyKGUpfSBpZD1cInVwZGF0ZS1mb3JtXCI+XHJcbiAgICAgICAgICA8aDI+VXBkYXRlIFByb2ZpbGUgSW5mbzo8L2gyPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZmlyc3ROYW1lXCI+Rmlyc3QgTmFtZTogPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cImZpcnN0TmFtZVwiIGRlZmF1bHRWYWx1ZT17cHJvZmlsZUluZm8uZmlyc3ROYW1lfSAgcmVmPXtmaXJzdE5hbWVSZWZ9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibGFzdE5hbWVcIj5MYXN0IE5hbWU6PC9sYWJlbD5cclxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cImxhc3ROYW1lXCIgZGVmYXVsdFZhbHVlPXtwcm9maWxlSW5mby5sYXN0TmFtZX0gcmVmPXtsYXN0TmFtZVJlZn0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJKb2JUaXRsZVwiPkpvYiBUaXRsZTo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiam9iVGl0bGVcIiBkZWZhdWx0VmFsdWU9e3Byb2ZpbGVJbmZvLmpvYlRpdGxlfSByZWY9e2pvYlRpdGxlUmVmfSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImxvY2F0aW9uXCI+TG9jYXRpb246PC9sYWJlbD5cclxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cImxvY2F0aW9uXCIgZGVmYXVsdFZhbHVlPXtwcm9maWxlSW5mby5sb2NhdGlvbn0gcmVmPXtsb2NhdGlvblJlZn0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJsYW5ndWFnZXNcIj5cclxuICAgICAgICAgICAgICA8aDQ+TWFpbiBQcm9ncmFtbWluZyBMYW5ndWFnZXMgVXNlZDo8L2g0PlxyXG4gICAgICAgICAgICAgIDxkaXYgaWQ9XCJsYW5ndWFnZS1pbnB1dC1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibGFuZ3VhZ2UxXCIgY2xhc3NOYW1lPVwibGFuZ3VhZ2UtbGFiZWxcIj4xLjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImxhbmd1YWdlLWlucHV0XCIgaWQ9XCJsYW5ndWFnZTFcIiBkZWZhdWx0VmFsdWU9e2dldEV4aXN0aW5nTGFuZ3VhZ2VzKClbMF19IHJlZj17bGFuZ3VhZ2UxUmVmfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibGFuZ3VhZ2UyXCIgY2xhc3NOYW1lPVwibGFuZ3VhZ2UtbGFiZWxcIj4yLjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImxhbmd1YWdlLWlucHV0XCIgaWQ9XCJsYW5ndWFnZTJcIiBkZWZhdWx0VmFsdWU9e2dldEV4aXN0aW5nTGFuZ3VhZ2VzKClbMV19IHJlZj17bGFuZ3VhZ2UyUmVmfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibGFuZ3VhZ2UzXCIgY2xhc3NOYW1lPVwibGFuZ3VhZ2UtbGFiZWxcIj4zLjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImxhbmd1YWdlLWlucHV0XCIgaWQ9XCJsYW5ndWFnZTNcIiBkZWZhdWx0VmFsdWU9e2dldEV4aXN0aW5nTGFuZ3VhZ2VzKClbMl19IHJlZj17bGFuZ3VhZ2UzUmVmfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibGFuZ3VhZ2U0XCIgY2xhc3NOYW1lPVwibGFuZ3VhZ2UtbGFiZWxcIj40LjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImxhbmd1YWdlLWlucHV0XCIgaWQ9XCJsYW5ndWFnZTRcIiBkZWZhdWx0VmFsdWU9e2dldEV4aXN0aW5nTGFuZ3VhZ2VzKClbM119IHJlZj17bGFuZ3VhZ2U0UmVmfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGlkPVwiY29sMlwiPlxyXG4gICAgICAgICAgPGRpdiBpZD1cImFib3V0LWlucHV0XCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiYWJvdXRcIj5BYm91dCBNZTo8L2xhYmVsPlxyXG4gICAgICAgICAgICA8dGV4dGFyZWEgaWQ9XCJhYm91dFwiIGNvbHM9XCIzMFwiIHJvd3M9XCI1XCIgZGVmYXVsdFZhbHVlPXtwcm9maWxlSW5mby5hYm91dH0gcmVmPXthYm91dFJlZn0gZm9ybT1cInVwZGF0ZS1mb3JtXCIvPlxyXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBmb3JtPVwidXBkYXRlLWZvcm1cIj5VcGRhdGUgSW5mbzwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8RmlsZVVwbG9hZCBzZXRFZGl0TW9kZT17c2V0RWRpdE1vZGV9Lz5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgey8qIDxidXR0b24gaWQ9XCJjYW5jZWxcIiBvbkNsaWNrPXsoKSA9PiBzZXRFZGl0TW9kZShmYWxzZSl9PlxyXG4gICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtdGltZXNcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XHJcbiAgICAgICAgPC9idXR0b24+ICovfVxyXG4gICAgICAgIDxkaXYgaWQ9XCJjYW5jZWwtYnRuXCI+XHJcbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS10aW1lcy1jaXJjbGUgZmEtMnhcIiBpZD1cImNhbmNlbFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIG9uQ2xpY2s9eygpID0+IHNldEVkaXRNb2RlKGZhbHNlKX0+PC9pPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgICBcclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDwvc2VjdGlvbj5cclxuXHJcblxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgIFxyXG4gICAgICAgIHNlY3Rpb24ge1xyXG4gICAgICAgICAgLyogcGFkZGluZzogM3JlbTsgKi9cclxuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgICAgICAgICB6LWluZGV4OiAtMztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICNlZGl0LWNvbnRhaW5lciB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgI2NvbDEge1xyXG4gICAgICAgICAgcGFkZGluZzogM3JlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICNjb2wxIGgyIHtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xyXG4gICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgcGFkZGluZzogMTJweCAxNXB4O1xyXG4gICAgICAgICAgbWFyZ2luOiA4cHggMDtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGV4dGFyZWEge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgcGFkZGluZzogMTJweCAxNXB4O1xyXG4gICAgICAgICAgbWFyZ2luOiA4cHggMDtcclxuICAgICAgICAgIGhlaWdodDogMTByZW07XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICBmb250LXNpemU6IGluaGVyaXQ7XHJcbiAgICAgICAgICBmb250OiBpbmhlcml0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgI2xhbmd1YWdlcyB7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgI2xhbmd1YWdlLWlucHV0LWNvbnRhaW5lciB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zIDFmciAxZnI7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaDQge1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMCA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsYWJlbC5sYW5ndWFnZS1sYWJlbCB7XHJcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDAuMjVyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpbnB1dC5sYW5ndWFnZS1pbnB1dCB7XHJcbiAgICAgICAgICB3aWR0aDogOTUlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYnV0dG9uW3R5cGU9J3N1Ym1pdCddIHtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAjY2FuY2VsLWJ0biB7XHJcbiAgICAgICAgICAvKiBjdXJzb3I6IHBvaW50ZXI7ICovXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGkge1xyXG4gICAgICAgICAgbWFyZ2luOiAwLjg1cmVtO1xyXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgI2NvbDIge1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICAgICAgICAgIHBhZGRpbmc6IDQuNnJlbSAwIDAgM3JlbTtcclxuICAgICAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgJHtjb2xvcnMucHJpbWFyeX1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICNhYm91dC1pbnB1dCB7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAycmVtOyAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKiBNZWRpYSBxdWVyaWVzICovXHJcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDExNTBweCkge1xyXG5cclxuICAgICAgICAgICNwcm9maWxlLWVkaXQge1xyXG4gICAgICAgICAgICB3aWR0aDogOTB2dztcclxuICAgICAgICAgICAgbWFyZ2luOiAxcmVtIGF1dG8gMXJlbSBhdXRvO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICNlZGl0LWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAvKiB0ZXh0YXJlYSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA5NSU7XHJcbiAgICAgICAgICB9ICovXHJcblxyXG4gICAgICAgICAgI2NvbDEge1xyXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAjY2FuY2VsIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3A6IDVweDtcclxuICAgICAgICAgICAgcmlnaHQ6IDVweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAjY29sMiB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgM3JlbSAzcmVtIDNyZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzc4cHgpIHtcclxuICAgICAgICAgICNsYW5ndWFnZS1pbnB1dC1jb250YWluZXIge1xyXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxLCAxZnIpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ0MHB4KSB7XHJcbiAgICAgICAgICAjbGFuZ3VhZ2UtaW5wdXQtY29udGFpbmVyIGxhYmVse1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICNjb2wxIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMnJlbSAycmVtIDFyZW0gMnJlbTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAjY29sMiB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMnJlbSAzcmVtIDJyZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogMzYwcHgpIHtcclxuICAgICAgICAgICNjYW5jZWwge1xyXG4gICAgICAgICAgICB0b3A6IC01cHg7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAtNXB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIGB9PC9zdHlsZT5cclxuXHJcbiAgICA8L21vdGlvbi5kaXY+XHJcbiAgICA8L0FuaW1hdGVQcmVzZW5jZT5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2ZpbGVFZGl0OyIsImltcG9ydCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEdsb2JhbENvbnRleHQgfSBmcm9tICcuLi9jb250ZXh0L0dsb2JhbENvbnRleHQnO1xyXG5pbXBvcnQgY29sb3JzIGZyb20gJy4uL2Nzcy12YXJpYWJsZXMvY29sb3JzJztcclxuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XHJcblxyXG5jb25zdCBwcm9maWxlSW5mb1ZhcmlhbnRzID0ge1xyXG4gIC8vIGhpZGRlbjogeyBvcGFjaXR5OiAwLCBwb3NpdGlvbjogJ3JlbGF0aXZlJ30sXHJcbiAgLy8gdmlzaWJsZTogeyBcclxuICAvLyAgIG9wYWNpdHk6IDEsXHJcbiAgLy8gICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAvLyAgIHRyYW5zaXRpb246IHtcclxuICAvLyAgICAgZHVyYXRpb246IDEuNVxyXG4gIC8vICAgfVxyXG4gIC8vIH1cclxufVxyXG5cclxuLy8gY29uc3QgaW5mb1ZhcmlhbnRzID0ge1xyXG4vLyAgIGhpZGRlbjogeyBvcGFjaXR5OiAwLCBtYXJnaW46IGF1dG8gfSxcclxuLy8gICB2aXNpYmxlOiB7XHJcbi8vICAgICBvcGFjaXR5OiAxLFxyXG4vLyAgICAgdHJhbnNpdGlvbjoge1xyXG4vLyAgICAgICBkdXJhdGlvbjogMS41LFxyXG4vLyAgICAgICBkZWxheTogMVxyXG4vLyAgICAgfVxyXG4vLyAgIH1cclxuLy8gfVxyXG5cclxuY29uc3QgUHJvZmlsZUluZm8gPSAoeyBzZXRFZGl0TW9kZSwgZWRpdE1vZGUgfSkgPT4ge1xyXG5cclxuICBjb25zdCB7IGF1dGhTdGF0ZSwgY3VycmVudFVzZXIsIHByb2ZpbGVVc2VyLCBmZXRjaFByb2ZpbGVVc2VyLCBjbGVhclByb2ZpbGVVc2VyLCBhZGRGYXZvdXJpdGUsIHJlbW92ZUZhdm91cml0ZSB9ID0gdXNlQ29udGV4dChHbG9iYWxDb250ZXh0KTtcclxuXHJcbiAgY29uc3QgW2lzRmF2b3VyaXRlLCBzZXRJc0Zhdm91cml0ZV0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgY29uc3QgYWRkRmF2b3VyaXRlSGFuZGxlciA9ICgpID0+IHtcclxuICAgIGFkZEZhdm91cml0ZShwcm9maWxlVXNlci5pZCk7XHJcbiAgfVxyXG5cclxuICBjb25zdCByZW1vdmVGYXZvdXJpdGVIYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgcmVtb3ZlRmF2b3VyaXRlKHByb2ZpbGVVc2VyLmlkKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGdldExhbmd1YWdlU3RyaW5nID0gKCkgPT4ge1xyXG4gICAgY29uc3QgbGFuZ3VhZ2VzID0gcHJvZmlsZVVzZXIubGFuZ3VhZ2VzO1xyXG4gICAgbGV0IGxhbmd1YWdlU3RyaW5nID0gJyc7XHJcblxyXG4gICAgaWYgKHByb2ZpbGVVc2VyLmxhbmd1YWdlcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgcmV0dXJuIGxhbmd1YWdlU3RyaW5nO1xyXG4gICAgfVxyXG5cclxuICAgIGVsc2Uge1xyXG4gICAgICBsYW5ndWFnZXMubWFwKChsYW5ndWFnZSwgaW5kZXgpID0+IHtcclxuICAgICAgICBpZiAobGFuZ3VhZ2UgIT09ICcnKSB7XHJcbiAgICAgICAgICBsYW5ndWFnZVN0cmluZyArPSBsYW5ndWFnZTtcclxuICAgICAgICAgIGlmIChsYW5ndWFnZXNbaW5kZXggKyAxXSAhPT0gJycgJiYgaW5kZXggKyAxICE9PSBsYW5ndWFnZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGxhbmd1YWdlU3RyaW5nICs9ICcgJyArICcvJyArICcgJztcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIHJldHVybiBsYW5ndWFnZVN0cmluZztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8bW90aW9uLmRpdiB2YXJpYW50cz17cHJvZmlsZUluZm9WYXJpYW50c30gaW5pdGlhbD0naGlkZGVuJyBhbmltYXRlPSd2aXNpYmxlJz5cclxuICAgICAgPHNlY3Rpb24gaWQ9XCJ1c2VyXCI+XHJcbiAgICAgICAgPGRpdiBpZD1cInByb2ZpbGUtcGhvdG9cIj5cclxuICAgICAgICAgIHtwcm9maWxlVXNlci5wcm9maWxlUGhvdG9GaWxlbmFtZSAhPT0gbnVsbCAmJiBwcm9maWxlVXNlci5wcm9maWxlUGhvdG9GaWxlbmFtZSAhPT0gJycgJiZcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjcm9wXCI+XHJcbiAgICAgICAgICAgICAgey8qIDxpbWcgc3JjPXtgaHR0cDovL2xvY2FsaG9zdDo1MDAwL2ltYWdlLyR7cHJvZmlsZVVzZXIucHJvZmlsZVBob3RvRmlsZW5hbWV9YH0gYWx0PVwicHJvZmlsZS1waG90b1wiIC8+ICovfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHsocHJvZmlsZVVzZXIucHJvZmlsZVBob3RvRmlsZW5hbWUgPT09IG51bGwgfHwgcHJvZmlsZVVzZXIucHJvZmlsZVBob3RvRmlsZW5hbWUgPT09ICcnKSAmJlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNyb3BcIj5cclxuICAgICAgICAgICAgICA8aW1nIHNyYz0nL2RlZmF1bHQtYXZhdGFyLmpwZycgYWx0PVwicHJvZmlsZS1waG90b1wiIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGlkPVwidXNlci1pbmZvXCI+XHJcbiAgICAgICAgICA8ZGl2IGlkPVwiaW5mb1wiPlxyXG4gICAgICAgICAgICA8aDE+e3Byb2ZpbGVVc2VyLmZpcnN0TmFtZX0ge3Byb2ZpbGVVc2VyLmxhc3ROYW1lfTwvaDE+XHJcbiAgICAgICAgICAgIDxoMj5Kb2IgVGl0bGU6ICZuYnNwOyB7cHJvZmlsZVVzZXIuam9iVGl0bGV9PC9oMj5cclxuICAgICAgICAgICAgPGgyPkxvY2F0aW9uOiAmbmJzcDsge3Byb2ZpbGVVc2VyLmxvY2F0aW9ufTwvaDI+XHJcbiAgICAgICAgICAgIDxoMj5MYW5ndWFnZXM6ICZuYnNwOyB7Z2V0TGFuZ3VhZ2VTdHJpbmcoKX08L2gyPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBpZD1cImJ1dHRvbnNcIj5cclxuICAgICAgICAgICAge3Byb2ZpbGVVc2VyLmlkID09PSBjdXJyZW50VXNlci5pZCAmJlxyXG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWNvZyBmYS0yeFwiIGlkPVwicHJvZmlsZS1lZGl0LWNvZ1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIG9uQ2xpY2s9eygpID0+IHNldEVkaXRNb2RlKCFlZGl0TW9kZSl9PjwvaT5cclxuICAgICAgICAgICAgICAvLyA8YnV0dG9uIGlkPVwicHJvZmlsZS1lZGl0LWJ0blwiIG9uQ2xpY2s9e3Nob3dQcm9maWxlRWRpdFNlY3Rpb259PjxpIGNsYXNzTmFtZT1cImZhIGZhLWNvZ1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT48L2J1dHRvbj5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB7cHJvZmlsZVVzZXIuaWQgIT09IGN1cnJlbnRVc2VyLmlkICYmICEoY3VycmVudFVzZXIuZmF2b3VyaXRlcy5pbmNsdWRlcyhwcm9maWxlVXNlci5pZCkpICYmIGF1dGhTdGF0ZS5hdXRoZW50aWNhdGVkID09PSB0cnVlICYmXHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cImFkZC1mYXZvdXJpdGVcIiBvbkNsaWNrPXthZGRGYXZvdXJpdGVIYW5kbGVyfT5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXN0YXItbyBmYS0yeCBmYXZvdXJpdGVcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAge2N1cnJlbnRVc2VyLmZhdm91cml0ZXMuaW5jbHVkZXMocHJvZmlsZVVzZXIuaWQpICYmXHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cInJlbW92ZS1mYXZvdXJpdGVcIiBvbkNsaWNrPXtyZW1vdmVGYXZvdXJpdGVIYW5kbGVyfT5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXN0YXIgZmEtMnggZmF2b3VyaXRlXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9zZWN0aW9uPlxyXG5cclxuXHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuXHJcbiAgICAgIHNlY3Rpb24ge1xyXG4gICAgICAgIC8qIHBhZGRpbmc6IDNyZW07ICovXHJcbiAgICAgICAgLyogYm9yZGVyOiAxcHggc29saWQgd2hpdGU7ICovXHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgICAgIC8qIHotaW5kZXg6IDI7ICovXHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgICN1c2VyIHtcclxuICAgICAgICBtYXJnaW46IDJyZW0gMDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAvKiBiYWNrZ3JvdW5kOiAjRkY0MTZDOyAqL1xyXG4gICAgICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjRkY0QjJCLCAjRkY0MTZDKTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNGRjRCMkIsICNGRjQxNkMpO1xyXG4gICAgICAgIC8qIGJveC1zaGFkb3c6IDAgMTRweCAyOHB4IHJnYmEoMCwwLDAsMC4yNSksIFxyXG4gICAgICAgICAgMCAxMHB4IDEwcHggcmdiYSgwLDAsMCwwLjIyKTsgKi9cclxuICAgICAgfVxyXG5cclxuICAgICAgI3VzZXIgaDEge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogM3JlbTtcclxuICAgICAgICBtYXJnaW46IDFyZW0gMCA0cmVtIDA7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDNyZW07XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgICN1c2VyIGgyIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAjcHJvZmlsZS1waG90byB7XHJcbiAgICAgICAgd2lkdGg6IDMzJTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgICBwYWRkaW5nOiAzLjVyZW0gM3JlbSAzcmVtIDNyZW07XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiBub25lO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHggMCAwIDEwcHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICN1c2VyLWluZm8ge1xyXG4gICAgICAgIC8qIGhlaWdodDogMTAwJTsgKi9cclxuICAgICAgICB3aWR0aDogNjElO1xyXG4gICAgICAgIHBhZGRpbmc6IDNyZW07XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGkjcHJvZmlsZS1lZGl0LWNvZyB7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAycztcclxuICAgICAgfVxyXG5cclxuICAgICAgaSNwcm9maWxlLWVkaXQtY29nOmhvdmVyIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBidXR0b24jYWRkLWZhdm91cml0ZSwgYnV0dG9uI3JlbW92ZS1mYXZvdXJpdGUge1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJHtjb2xvcnMudGVydGlhcnl9O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICBwYWRkaW5nOiAwLjdyZW07XHJcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICB3aWR0aDogNTBweDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLyogaGVpZ2h0OiAxMCU7ICovXHJcbiAgICAgIH1cclxuXHJcbiAgICAgICNwbGF5bGlzdCB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNHJlbTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmNyb3Age1xyXG4gICAgICAgIHdpZHRoOiAyNjZweDtcclxuICAgICAgICBoZWlnaHQ6IDI2NnB4O1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2ltYWdlLyR7cHJvZmlsZVVzZXIucHJvZmlsZVBob3RvRmlsZW5hbWV9Jyk7XHJcbiAgICAgICAgLyogYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyOyAqL1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpLmZhdm91cml0ZSB7XHJcbiAgICAgICAgY29sb3I6ICR7Y29sb3JzLnNlY29uZGFyeX07XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogOXB4O1xyXG4gICAgICAgIGxlZnQ6IDkuNnB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvKiBNZWRpYSBxdWVyaWVzICovXHJcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMTUwcHggKSB7XHJcbiAgICAgICAgI3VzZXIge1xyXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICAgICAgICB3aWR0aDogNzUlO1xyXG4gICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgI3Byb2ZpbGUtcGhvdG8ge1xyXG4gICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgd2lkdGg6IDYxJTtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY3JvcCB7XHJcbiAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAvKiB3aWR0aDogODAlOyAqL1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgI3VzZXItaW5mbyB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI0ZGNEIyQiwgI0ZGNDE2Qyk7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNGRjRCMkIsICNGRjQxNkMpO1xyXG4gICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICBwYWRkaW5nOiAyLjVyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogODAwcHgpIHtcclxuICAgICAgICAjcHJvZmlsZS1waG90byB7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgbWFyZ2luOiAzLjVyZW0gYXV0byAzcmVtIGF1dG87XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICAjdXNlci1pbmZvIHtcclxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgIC8qIHBhZGRpbmc6IDA7ICovXHJcbiAgICAgICAgICAvKiB0ZXh0LWFsaWduOiBjZW50ZXI7ICovXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAjaW5mbyB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGgxIHtcclxuICAgICAgICAgIC8qIHRleHQtYWxpZ246IGNlbnRlcjsgKi9cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgI2J1dHRvbnMge1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgcmlnaHQ6IDIxcHg7XHJcbiAgICAgICAgICB0b3A6IDIxcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgfVxyXG5cclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDU4MHB4ICkge1xyXG4gICAgICAgICN1c2VyIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAjdXNlciBoMSB7XHJcbiAgICAgICAgICBtYXJnaW46IDJyZW0gMCAzcmVtIDA7XHJcbiAgICAgICAgICBmb250LXNpemU6IDIuNXJlbSBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGgyIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ3MHB4ICkge1xyXG5cclxuICAgICAgICAjYnV0dG9ucyB7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICByaWdodDogMTRweDtcclxuICAgICAgICAgIHRvcDogMTRweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICN1c2VyLWluZm8gaDEge1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIH0gXHJcblxyXG4gICAgICAgICN1c2VyLWluZm8ge1xyXG4gICAgICAgICAgcGFkZGluZzogMnJlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgI3VzZXIgaDEge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTsgXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBoMiB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0NDVweCApIHtcclxuICAgICAgICAjcHJvZmlsZS1waG90byB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jcm9wIHtcclxuICAgICAgICAgIG1heC13aWR0aDogMjAwcHg7XHJcbiAgICAgICAgICBtYXgtaGVpZ2h0OiAyMDBweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAzNzBweCApIHtcclxuXHJcbiAgICAgICAgaS5mYXZvdXJpdGUge1xyXG4gICAgICAgICAgdG9wOiA0LjdweDtcclxuICAgICAgICAgIGxlZnQ6IDUuN3B4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmZhLXN0YXIgLmZhLTJ4LCAuZmEtc3Rhci1vIDxkaXYgY2xhc3NOYW1lPVwiZmEtMnhcIj48L2Rpdj4ge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxLjRlbVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYnV0dG9uI3JlbW92ZS1mYXZvdXJpdGUge1xyXG4gICAgICAgICAgaGVpZ2h0OiA0MXB4O1xyXG4gICAgICAgICAgd2lkdGg6IDQxcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgfVxyXG5cclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDMyMHB4ICkge1xyXG4gICAgICAgICN1c2VyIGgxIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMi4ycmVtO1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIEBtZWRpYSAobWF4LWhlaWdodDogODIwcHggKSB7XHJcbiAgICAgICAgI3Byb2ZpbGUtcGhvdG8ge1xyXG4gICAgICAgICAgbWFyZ2luOiAycmVtIGF1dG87XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBAbWVkaWEgKG1heC1oZWlnaHQ6IDc3MHB4ICkge1xyXG4gICAgICAgICNwcm9maWxlLXBob3RvIHtcclxuICAgICAgICAgIG1hcmdpbjogMnJlbSBhdXRvO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgXHJcbiAgICBgfTwvc3R5bGU+XHJcblxyXG4gICAgPC9tb3Rpb24uZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZmlsZUluZm87XHJcbiIsImltcG9ydCB7IHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBTZWFyY2hiYXIgPSAoeyBwbGFjZWhvbGRlciwgc3VibWl0SGFuZGxlciB9KSA9PiB7XHJcblxyXG4gIGNvbnN0IFtzZWFyY2hJbnB1dCwgc2V0U2VhcmNoSW5wdXRdID0gdXNlU3RhdGUoJycpO1xyXG5cclxuXHJcbiAgY29uc3Qgb25DaGFuZ2VIYW5kbGVyID0gKGUpID0+IHtcclxuICAgIHNldFNlYXJjaElucHV0KGUudGFyZ2V0LnZhbHVlKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IG9uRm9ybVN1Ym1pdCA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgLy8gQ2FsbCB0aGUgcmVsZXZhbnQgc3VibWl0IGhhbmRsZXIgZnJvbSBwcm9wc1xyXG4gICAgc3VibWl0SGFuZGxlcihzZWFyY2hJbnB1dCk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBpZD1cIm1haW4tc2VhcmNoYmFyXCI+XHJcbiAgICAgIDxmb3JtIG9uU3VibWl0PXtvbkZvcm1TdWJtaXR9PlxyXG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwic2VhcmNoLWlucHV0XCI+XHJcbiAgICAgICAgICA8c3ZnIGlkPVwic2VhcmNoLWljb25cIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiB3aWR0aD1cIjI0XCI+PHBhdGggZD1cIk0xNS41IDE0aC0uNzlsLS4yOC0uMjdDMTUuNDEgMTIuNTkgMTYgMTEuMTEgMTYgOS41IDE2IDUuOTEgMTMuMDkgMyA5LjUgM1MzIDUuOTEgMyA5LjUgNS45MSAxNiA5LjUgMTZjMS42MSAwIDMuMDktLjU5IDQuMjMtMS41N2wuMjcuMjh2Ljc5bDUgNC45OUwyMC40OSAxOWwtNC45OS01em0tNiAwQzcuMDEgMTQgNSAxMS45OSA1IDkuNVM3LjAxIDUgOS41IDUgMTQgNy4wMSAxNCA5LjUgMTEuOTkgMTQgOS41IDE0elwiIC8+PHBhdGggZD1cIk0wIDBoMjR2MjRIMHpcIiBmaWxsPVwibm9uZVwiIC8+PC9zdmc+XHJcbiAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwic2VhcmNoLWlucHV0XCIgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfSBvbkNoYW5nZT17b25DaGFuZ2VIYW5kbGVyfSB2YWx1ZT17c2VhcmNoSW5wdXR9IC8+XHJcbiAgICAgIDwvZm9ybT5cclxuXHJcblxyXG4gICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICBmb3JtIHtcclxuICAgICAgICB3aWR0aDogNjguNSU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGxhYmVsIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiA4cHg7XHJcbiAgICAgICAgbGVmdDogMTJweDtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgI21haW4tc2VhcmNoYmFyIHtcclxuICAgICAgICAvKiBtYXJnaW46IGF1dG87ICovXHJcbiAgICAgICAgLyogbWFyZ2luLWxlZnQ6IDMuNXJlbTsgKi9cclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBmb250OiBpbmhlcml0O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAjbWFpbi1zZWFyY2hiYXIgaW5wdXQge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIzcHg7XHJcbiAgICAgICAgcGFkZGluZzogMC42cmVtIDNyZW0gMC41cmVtIDIuM3JlbTtcclxuICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICNtYWluLXNlYXJjaGJhciBpbnB1dCA6Zm9jdXMge1xyXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMTAwcHgpIHtcclxuICAgICAgICAjbWFpbi1zZWFyY2hiYXIgaW5wdXQge1xyXG4gICAgICAgICAgd2lkdGg6IDEzMCU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogODMwcHgpIHtcclxuICAgICAgICAjbWFpbi1zZWFyY2hiYXIge1xyXG4gICAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICNtYWluLXNlYXJjaGJhciBpbnB1dCB7XHJcbiAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3JtIHtcclxuICAgICAgICAgIHdpZHRoOiA3NS41JTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIEBtZWRpYSAoIG1heC13aWR0aDogNDMwcHgpIHtcclxuICAgICAgICAjbWFpbi1zZWFyY2hiYXIgaW5wdXQge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGFiZWwge1xyXG4gICAgICAgICAgdG9wOiA2cHg7XHJcbiAgICAgICAgICBsZWZ0OiAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgQG1lZGlhICggbWF4LXdpZHRoOiAzNjBweCkge1xyXG4gICAgICAgICNtYWluLXNlYXJjaGJhciB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICNtYWluLXNlYXJjaGJhciBpbnB1dCB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIFxyXG4gICAgXHJcbiAgICBgfTwvc3R5bGU+XHJcblxyXG4gICAgICAgICAgXHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlYXJjaGJhcjtcclxuIiwiaW1wb3J0IHsgR2xvYmFsQ29udGV4dCB9IGZyb20gJy4uL2NvbnRleHQvR2xvYmFsQ29udGV4dCc7XHJcbmltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjb2xvcnMgZnJvbSAnLi4vY3NzLXZhcmlhYmxlcy9jb2xvcnMnXHJcblxyXG5jb25zdCBWaWRlb0l0ZW0gPSAoeyB2aWRlbywgbW9kZSB9KSA9PiB7XHJcblxyXG4gIGNvbnN0IHsgYWRkVmlkZW9Ub1BsYXlsaXN0LCByZW1vdmVWaWRlb0Zyb21QbGF5bGlzdCwgc2V0Q3VycmVudFZpZGVvLCBjdXJyZW50VXNlciwgcHJvZmlsZVVzZXIsIHNldEF1dG9wbGF5IH0gPSB1c2VDb250ZXh0KEdsb2JhbENvbnRleHQpO1xyXG5cclxuICBjb25zdCBhZGRWaWRlb0NsaWNrSGFuZGxlciA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCB2aWRlb1RvU2F2ZSA9IHtcclxuICAgICAgdGl0bGU6IHZpZGVvLnNuaXBwZXQudGl0bGUuc3BsaXQoXCImcXVvdDtcIikuam9pbihcIlwiKS5zcGxpdChcIiYjMzk7XCIpLmpvaW4oXCInXCIpLnNwbGl0KFwiJmFtcDtcIikuam9pbihcIiZcIiksXHJcbiAgICAgIHRodW1ibmFpbFVSTDogdmlkZW8uc25pcHBldC50aHVtYm5haWxzLmRlZmF1bHQudXJsLFxyXG4gICAgICB2aWRlb0lkOiB2aWRlby5pZC52aWRlb0lkLFxyXG4gICAgfVxyXG5cclxuICAgIC8vIGNvbnNvbGUubG9nKHZpZGVvVG9TYXZlKVxyXG4gICAgYWRkVmlkZW9Ub1BsYXlsaXN0KHZpZGVvVG9TYXZlKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHJlbW92ZVZpZGVvQ2xpY2tIYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgcmVtb3ZlVmlkZW9Gcm9tUGxheWxpc3QodmlkZW8uX2lkKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHBsYXlCdXR0b25IYW5kbGVyID0gKCkgPT4ge1xyXG5cclxuICAgIGxldCB2aWRlb1RvU2V0O1xyXG5cclxuICAgIGlmIChtb2RlID09PSAneW91dHViZScpIHtcclxuICAgICAgdmlkZW9Ub1NldCA9IHtcclxuICAgICAgICB0aXRsZTogdmlkZW8uc25pcHBldC50aXRsZSxcclxuICAgICAgICAvLyBkZXNjcmlwdGlvbjogdmlkZW8uc25pcHBldC5kZXNjcmlwdGlvbixcclxuICAgICAgICB2aWRlb0lkOiB2aWRlby5pZC52aWRlb0lkLFxyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB2aWRlb1RvU2V0ID0ge1xyXG4gICAgICAgIHRpdGxlOiB2aWRlby50aXRsZSxcclxuICAgICAgICAvLyBkZXNjcmlwdGlvbjogdmlkZW8uZGVzY3JpcHRpb24sXHJcbiAgICAgICAgdmlkZW9JZDogdmlkZW8udmlkZW9VUkwsXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHNldEN1cnJlbnRWaWRlbyh2aWRlb1RvU2V0KTtcclxuXHJcbiAgICBzZXRBdXRvcGxheSh0cnVlKTtcclxuXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ2aWRlby1pdGVtXCI+XHJcbiAgICAgIHttb2RlID09PSAneW91dHViZScgJiZcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgPGltZyBzcmM9e3ZpZGVvLnNuaXBwZXQudGh1bWJuYWlscy5kZWZhdWx0LnVybH0gYWx0PVwieW91dHViZSB2aWRlb1wiIC8+XHJcbiAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidmlkZW8tdGl0bGVcIj57dmlkZW8uc25pcHBldC50aXRsZS5zcGxpdChcIiZxdW90O1wiKS5qb2luKFwiXCIpLnNwbGl0KFwiJiMzOTtcIikuam9pbihcIidcIikuc3BsaXQoXCImYW1wO1wiKS5qb2luKFwiJlwiKX08L2gzPlxyXG4gICAgICAgICAgPGRpdiBpZD1cImJ1dHRvbnNcIj5cclxuICAgICAgICAgIHtwcm9maWxlVXNlci5vd25lZFZpZGVvcy5sZW5ndGggPiAwICYmXHJcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17cGxheUJ1dHRvbkhhbmRsZXJ9PlxyXG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXBsYXlcIj48L2k+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2FkZFZpZGVvQ2xpY2tIYW5kbGVyfT5cclxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1wbHVzXCI+PC9pPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvPlxyXG4gICAgICB9XHJcblxyXG4gICAgICB7bW9kZSA9PT0gJ3BsYXlsaXN0JyAmJlxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICA8aW1nIHNyYz17dmlkZW8udGh1bWJuYWlsVVJMfSBhbHQ9XCJ5b3V0dWJlIHZpZGVvXCIgLz5cclxuICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ2aWRlby10aXRsZVwiPnt2aWRlby50aXRsZX08L2gzPlxyXG4gICAgICAgICAgPGRpdiBpZD1cImJ1dHRvbnNcIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtwbGF5QnV0dG9uSGFuZGxlcn0+XHJcbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtcGxheVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIHtjdXJyZW50VXNlci5pZCA9PT0gcHJvZmlsZVVzZXIuaWQgJiZcclxuICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3JlbW92ZVZpZGVvQ2xpY2tIYW5kbGVyfT5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXRyYXNoLW9cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvPlxyXG4gICAgICB9XHJcblxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgXHJcbiAgICAudmlkZW8taXRlbSB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgLyogYmFja2dyb3VuZC1jb2xvcjogI2UxMjllODsgKi9cclxuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICR7Y29sb3JzLnByaW1hcnl9O1xyXG4gICAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgICAvKiBtYXJnaW4tYm90dG9tOiAxcmVtOyAqL1xyXG4gICAgfVxyXG5cclxuICAgIC52aWRlby1pdGVtOmxhc3QtY2hpbGQge1xyXG4gICAgICBib3JkZXItYm90dG9tOiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgIGgzIHtcclxuICAgICAgbWFyZ2luOiAwIGF1dG8gMCAyLjdyZW07XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7Y29sb3JzLnByaW1hcnl9O1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIHBhZGRpbmc6IDAuNzVyZW0gMXJlbTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgbWFyZ2luOiAwLjVyZW07XHJcbiAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlLWluLW91dCwgdGV4dC1zaGFkb3cgMC4ycztcclxuICAgIH1cclxuXHJcbiAgICBidXR0b246aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTUzMDVhO1xyXG4gICAgICB0ZXh0LXNoYWRvdzogMHB4IDBweCA4cHggcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qIE1lZGlhIHF1ZXJpZXMgKi9cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMDgwcHgpIHtcclxuICAgICAgaDMge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxLjdyZW07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICNidXR0b25zIHtcclxuICAgICAgICBtaW4td2lkdGg6IDIwJTtcclxuICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgLnZpZGVvLWl0ZW0ge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIGgzIHtcclxuICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgfVxyXG5cclxuICAgICAgI2J1dHRvbnMge1xyXG4gICAgICAgIC8qIHdpZHRoOiAxMCU7ICovXHJcbiAgICAgICAgbWluLXdpZHRoOiAxMCU7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcclxuICAgICAgaW1nIHtcclxuICAgICAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwLjNyZW07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICNidXR0b25zIHtcclxuICAgICAgICB3aWR0aDogMTMlO1xyXG4gICAgICAgIG1pbi13aWR0aDogMTMlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDQwMHB4KSB7XHJcbiAgICAgICNidXR0b25zIHtcclxuICAgICAgICB3aWR0aDogMTUlO1xyXG4gICAgICAgIG1pbi13aWR0aDogMTUlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBoMyB7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjdyZW07XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogMzgwcHgpIHtcclxuICAgICAgLnZpZGVvLWl0ZW0ge1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMC42cmVtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDM1MHB4KSB7XHJcbiAgICAgIC52aWRlby1pdGVtIHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDAuNnJlbTtcclxuICAgICAgfVxyXG5cclxuICAgICAgI2J1dHRvbnMge1xyXG4gICAgICAgIHdpZHRoOiAxNyU7XHJcbiAgICAgICAgbWluLXdpZHRoOiAxNyU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGltZyB7XHJcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgXHJcbiAgYH08L3N0eWxlPlxyXG5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVmlkZW9JdGVtOyIsImltcG9ydCB7IEdsb2JhbENvbnRleHQgfSBmcm9tICcuLi9jb250ZXh0L0dsb2JhbENvbnRleHQnO1xyXG5pbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY29sb3JzIGZyb20gJy4uL2Nzcy12YXJpYWJsZXMvY29sb3JzJ1xyXG5cclxuY29uc3QgVmlkZW9QbGF5ZXIgPSAoKSA9PiB7XHJcblxyXG4gIGNvbnN0IHsgdmlkZW9TdGF0ZSwgYXV0b3BsYXksIHByb2ZpbGVVc2VyIH0gPSB1c2VDb250ZXh0KEdsb2JhbENvbnRleHQpO1xyXG5cclxuICAvLyBBdXRvcGxheSBvZmZcclxuICBsZXQgdmlkZW9TcmMgPSBgaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvJHt2aWRlb1N0YXRlLnZpZGVvSWR9YDtcclxuXHJcbiAgaWYgKGF1dG9wbGF5KSB7XHJcbiAgICAvLyBBdXRvcGxheSBvblxyXG4gICAgdmlkZW9TcmMgPSBgaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvJHt2aWRlb1N0YXRlLnZpZGVvSWR9P2F1dG9wbGF5PTFgO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuXHJcbiAgICA8ZGl2IGlkPVwidmlkZW8tY29udGFpbmVyXCI+XHJcbiAgICAgIHtwcm9maWxlVXNlci5vd25lZFZpZGVvcy5sZW5ndGggPiAwICYmIHZpZGVvU3RhdGUudGl0bGUgIT09ICcnICYmXHJcbiAgICAgICAgPGRpdiBpZD1cInZpZGVvLXBsYXllclwiPlxyXG4gICAgICAgICAgPGlmcmFtZSB3aWR0aD1cIjkxOFwiIGhlaWdodD1cIjU2N1wiIGZyYW1lQm9yZGVyPVwiMFwiIGFsbG93RnVsbFNjcmVlbiBhbGxvdz1cImF1dG9wbGF5XCIgc3JjPXt2aWRlb1NyY30+PC9pZnJhbWU+XHJcbiAgICAgICAgICB7LyogPFZpZGVvSW5mbyAvPiAqL31cclxuICAgICAgICAgIHsvKiA8ZGl2IGlkPVwidmlkZW8taW5mb1wiPlxyXG4gICAgICAgICAgICA8aDM+e3ZpZGVvU3RhdGUudGl0bGV9PC9oMz5cclxuICAgICAgICAgIDwvZGl2PiAqL31cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgfVxyXG4gICAgICBcclxuXHJcbiAgPHN0eWxlIGpzeD57YFxyXG4gIFxyXG4gICAgI3ZpZGVvLWNvbnRhaW5lciB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDNyZW07XHJcbiAgICB9XHJcbiAgICBcclxuICAgICN2aWRlby1wbGF5ZXIge1xyXG4gICAgICB3aWR0aDogODUlO1xyXG4gICAgICBtYXJnaW46IDRyZW0gYXV0bztcclxuICAgICAgcGFkZGluZzogMXJlbTtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgJHtjb2xvcnMucHJpbWFyeX1cclxuICAgIH1cclxuXHJcbiAgICBpZnJhbWUge1xyXG4gICAgICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcblxyXG4gICAgI3ZpZGVvLWluZm8ge1xyXG4gICAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbi8qIFxyXG4gICAgaDMge1xyXG4gICAgICB3aWR0aDogODAlO1xyXG4gICAgICBtYXJnaW46IGF1dG87XHJcbiAgICB9ICovXHJcblxyXG4gICAgLyogTWVkaWEgcXVlcmllcyAqL1xyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDExNTBweCApIHtcclxuXHJcbiAgICAgICN2aWRlby1wbGF5ZXIge1xyXG4gICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZnJhbWUge1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMDAwcHggKSB7XHJcbiAgICAgIGlmcmFtZSB7XHJcbiAgICAgICAgLyogd2lkdGg6IDg1dnc7ICovXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNTgwcHggKSB7XHJcbiAgICAgICN2aWRlby1wbGF5ZXIge1xyXG4gICAgICAgIHdpZHRoOiA5MSU7XHJcbiAgICAgICAgLyogaGVpZ2h0OiA1MCU7ICovXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmcmFtZSB7XHJcbiAgICAgICAgaGVpZ2h0OiAzM3ZoO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgXHJcbiAgXHJcbiAgXHJcbiAgYH08L3N0eWxlPlxyXG5cclxuXHJcblxyXG5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVmlkZW9QbGF5ZXI7IiwibW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgbW9uZ29VUkk6ICdtb25nb2RiOi8vZ3JlZW5wYXVsbzphZG1pbjIwMjBAZHMxMjE5OTYubWxhYi5jb206MjE5OTYvY29kZXJzLWp1a2Vib3gtZGV2JyxcclxuICBZT1VUVUJFQVBJX0tFWTogJ0FJemFTeURXVEs1ZWJxWEdIdzNONEZTZHhFX3FPMnYwTEVzMjhYbydcclxufSIsIi8vIEZpZ3VyZSBvdXQgd2hpY2ggc2V0IG9mIGNyZWRlbnRpYWxzIHRvIHJldHVyblxyXG5cclxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcclxuICAvLyB3ZSBhcmUgaW4gcHJvZHVjdGlvbiAtIHJldHVybiB0aGUgcHJvZCBzZXQgb2Yga2V5c1xyXG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9wcm9kJyk7XHJcbn0gZWxzZSB7XHJcbiAgLy8gd2UgYXJlIGluIGRldmVsb3BtZW50IC0gcmV0dXJuIHRoZSBkZXYgc2V0IG9mIGtleXNcclxuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGV2Jyk7XHJcbn1cclxuIiwiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlUmVkdWNlcn0gZnJvbSAncmVhY3QnO1xyXG4vLyBpbXBvcnQgQXBwUmVkdWNlciBmcm9tICcuL0FwcFJlZHVjZXInO1xyXG4vLyBpbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gJ0BhcG9sbG8vcmVhY3QtaG9va3MnO1xyXG5cclxuLy8gSW5pdGFsIFN0YXRlXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICBhdXRoZW50aWNhdGVkOiBmYWxzZSxcclxuICBhdXRoRGF0YTogbnVsbCxcclxuICB1c2VyOiBudWxsLFxyXG4gIHZpZGVvOiBudWxsLFxyXG4gIGNvbW1lbnQ6IG51bGwsXHJcbiAgLy8gbG9naW46ICgpID0+IHt9XHJcbn1cclxuXHJcbi8vIENyZWF0ZSBjb250ZXh0XHJcbmV4cG9ydCBjb25zdCBHbG9iYWxDb250ZXh0ID0gY3JlYXRlQ29udGV4dChpbml0aWFsU3RhdGUpO1xyXG5cclxuLy8gUHJvdmlkZXIgQ29tcG9uZW50XHJcbi8vIGV4cG9ydCBjb25zdCBHbG9iYWxQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuLy8gICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIoQXBwUmVkdWNlciwgaW5pdGlhbFN0YXRlKVxyXG5cclxuLy8gICByZXR1cm4gKFxyXG4vLyAgICAgPEdsb2JhbENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3tcclxuLy8gICAgICAgLy8gYXV0aGVudGljYXRlZDogc3RhdGUuYXV0aGVudGljYXRlZCxcclxuLy8gICAgICAgbG9naW46IGxvZ2luXHJcbi8vICAgICB9fT5cclxuLy8gICAgICAge2NoaWxkcmVufVxyXG4vLyAgICAgPC9HbG9iYWxDb250ZXh0LlByb3ZpZGVyPlxyXG4vLyAgIClcclxuLy8gfSIsImNvbnN0IGNvbG9ycyA9IHtcclxuICBwcmltYXJ5OiAnI2ZmNDE2YycsXHJcbiAgLy8gZ3JhZGllbnQ6ICdsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmZjQxNmMsICNmZjRiMmIpJyxcclxuICAvLyBncmFkaWVudDogJ2xpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2ZmNDE2YywgI2VlZmI0YSknLFxyXG4gIC8vIGdyYWRpZW50OiAnbGluZWFyLWdyYWRpZW50KDM3ZGVnLCAjZTUyZTcxIDUwJSwgI2ZmOGEwMCAxMDAlKScsXHJcbiAgLy8gZ3JhZGllbnQ6ICdsaW5lYXItZ3JhZGllbnQoMzdkZWcsICNlNTJlNzEgNTAlLCAjZmY4YTAwIDEwMCUpJyxcclxuICAvLyBncmFkaWVudDogJ2xpbmVhci1ncmFkaWVudCgzN2RlZywgcmdiYSgyNTUsIDY1LCAxMDgsIDEpIDUwJSwgcmdiYSgyMzgsIDI1NSwgMjAsIDEpIDEwMCUpJyxcclxuICBncmFkaWVudDogJ2xpbmVhci1ncmFkaWVudCgzN2RlZywgI2ZmNDE2YyA1MCUsICNlZWZmMTQgMTAwJSknLFxyXG4gIHJldmVyc2VHcmFkaWVudDogJ2xpbmVhci1ncmFkaWVudCgzN2RlZywgI2VlZmYxNCA3JSwgI2ZmNDE2YyA0NiUpJyxcclxuICBwaW5rR3JhZGVudDogJ2xpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2ZmNGIyYiwgI2ZmNDE2Yyk7JyxcclxuICByZXZlcnNlUGlua0dyYWRpZW50OiAnbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZmY0MTZjLCAjZmY0YjJiKTsnLFxyXG4gIHNlY29uZGFyeTogJyNmZjRiMmInLFxyXG4gIHRlcnRpYXJ5OiAnI2VlZmYxNCdcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29sb3JzOyIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiLi4vaGVscGVycy90eXBlb2ZcIik7XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsO1xuICB2YXIgY2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuXG4gIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgICByZXR1cm4gY2FjaGU7XG4gIH07XG5cbiAgcmV0dXJuIGNhY2hlO1xufVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHtcbiAgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkge1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgXCJkZWZhdWx0XCI6IG9ialxuICAgIH07XG4gIH1cblxuICB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTtcblxuICBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHtcbiAgICByZXR1cm4gY2FjaGUuZ2V0KG9iaik7XG4gIH1cblxuICB2YXIgbmV3T2JqID0ge307XG4gIHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgIHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsO1xuXG4gICAgICBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdPYmpba2V5XSA9IG9ialtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7XG5cbiAgaWYgKGNhY2hlKSB7XG4gICAgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTtcbiAgfVxuXG4gIHJldHVybiBuZXdPYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsImRlY2xhcmUgY29uc3QgX19ORVhUX0RBVEFfXzogYW55XG5cbmltcG9ydCBSZWFjdCwgeyBDaGlsZHJlbiB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgUHJlZmV0Y2hPcHRpb25zLCBOZXh0Um91dGVyIH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBleGVjT25jZSwgZ2V0TG9jYXRpb25PcmlnaW4gfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMnXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcidcbmltcG9ydCB7IGFkZEJhc2VQYXRoLCByZXNvbHZlSHJlZiB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuXG4vKipcbiAqIERldGVjdHMgd2hldGhlciBhIGdpdmVuIHVybCBpcyBmcm9tIHRoZSBzYW1lIG9yaWdpbiBhcyB0aGUgY3VycmVudCBwYWdlIChicm93c2VyIG9ubHkpLlxuICovXG5mdW5jdGlvbiBpc0xvY2FsKHVybDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIGNvbnN0IGxvY2F0aW9uT3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICBjb25zdCByZXNvbHZlZCA9IG5ldyBVUkwodXJsLCBsb2NhdGlvbk9yaWdpbilcbiAgcmV0dXJuIHJlc29sdmVkLm9yaWdpbiA9PT0gbG9jYXRpb25PcmlnaW5cbn1cblxudHlwZSBVcmwgPSBzdHJpbmcgfCBVcmxPYmplY3RcblxuZXhwb3J0IHR5cGUgTGlua1Byb3BzID0ge1xuICBocmVmOiBVcmxcbiAgYXM/OiBVcmxcbiAgcmVwbGFjZT86IGJvb2xlYW5cbiAgc2Nyb2xsPzogYm9vbGVhblxuICBzaGFsbG93PzogYm9vbGVhblxuICBwYXNzSHJlZj86IGJvb2xlYW5cbiAgcHJlZmV0Y2g/OiBib29sZWFuXG59XG5cbmxldCBjYWNoZWRPYnNlcnZlcjogSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcbmNvbnN0IGxpc3RlbmVycyA9IG5ldyBNYXA8RWxlbWVudCwgKCkgPT4gdm9pZD4oKVxuY29uc3QgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPVxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdy5JbnRlcnNlY3Rpb25PYnNlcnZlciA6IG51bGxcbmNvbnN0IHByZWZldGNoZWQ6IHsgW2NhY2hlS2V5OiBzdHJpbmddOiBib29sZWFuIH0gPSB7fVxuXG5mdW5jdGlvbiBnZXRPYnNlcnZlcigpOiBJbnRlcnNlY3Rpb25PYnNlcnZlciB8IHVuZGVmaW5lZCB7XG4gIC8vIFJldHVybiBzaGFyZWQgaW5zdGFuY2Ugb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgYWxyZWFkeSBjcmVhdGVkXG4gIGlmIChjYWNoZWRPYnNlcnZlcikge1xuICAgIHJldHVybiBjYWNoZWRPYnNlcnZlclxuICB9XG5cbiAgLy8gT25seSBjcmVhdGUgc2hhcmVkIEludGVyc2VjdGlvbk9ic2VydmVyIGlmIHN1cHBvcnRlZCBpbiBicm93c2VyXG4gIGlmICghSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cblxuICByZXR1cm4gKGNhY2hlZE9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKFxuICAgIChlbnRyaWVzKSA9PiB7XG4gICAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICAgIGlmICghbGlzdGVuZXJzLmhhcyhlbnRyeS50YXJnZXQpKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjYiA9IGxpc3RlbmVycy5nZXQoZW50cnkudGFyZ2V0KSFcbiAgICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nIHx8IGVudHJ5LmludGVyc2VjdGlvblJhdGlvID4gMCkge1xuICAgICAgICAgIGNhY2hlZE9ic2VydmVyLnVub2JzZXJ2ZShlbnRyeS50YXJnZXQpXG4gICAgICAgICAgbGlzdGVuZXJzLmRlbGV0ZShlbnRyeS50YXJnZXQpXG4gICAgICAgICAgY2IoKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0sXG4gICAgeyByb290TWFyZ2luOiAnMjAwcHgnIH1cbiAgKSlcbn1cblxuY29uc3QgbGlzdGVuVG9JbnRlcnNlY3Rpb25zID0gKGVsOiBFbGVtZW50LCBjYjogKCkgPT4gdm9pZCkgPT4ge1xuICBjb25zdCBvYnNlcnZlciA9IGdldE9ic2VydmVyKClcbiAgaWYgKCFvYnNlcnZlcikge1xuICAgIHJldHVybiAoKSA9PiB7fVxuICB9XG5cbiAgb2JzZXJ2ZXIub2JzZXJ2ZShlbClcbiAgbGlzdGVuZXJzLnNldChlbCwgY2IpXG4gIHJldHVybiAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbClcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxuICAgIH1cbiAgICBsaXN0ZW5lcnMuZGVsZXRlKGVsKVxuICB9XG59XG5cbmZ1bmN0aW9uIHByZWZldGNoKFxuICByb3V0ZXI6IE5leHRSb3V0ZXIsXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgb3B0aW9ucz86IFByZWZldGNoT3B0aW9uc1xuKTogdm9pZCB7XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykgcmV0dXJuXG4gIC8vIFByZWZldGNoIHRoZSBKU09OIHBhZ2UgaWYgYXNrZWQgKG9ubHkgaW4gdGhlIGNsaWVudClcbiAgLy8gV2UgbmVlZCB0byBoYW5kbGUgYSBwcmVmZXRjaCBlcnJvciBoZXJlIHNpbmNlIHdlIG1heSBiZVxuICAvLyBsb2FkaW5nIHdpdGggcHJpb3JpdHkgd2hpY2ggY2FuIHJlamVjdCBidXQgd2UgZG9uJ3RcbiAgLy8gd2FudCB0byBmb3JjZSBuYXZpZ2F0aW9uIHNpbmNlIHRoaXMgaXMgb25seSBhIHByZWZldGNoXG4gIHJvdXRlci5wcmVmZXRjaChocmVmLCBhcywgb3B0aW9ucykuY2F0Y2goKGVycikgPT4ge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAvLyByZXRocm93IHRvIHNob3cgaW52YWxpZCBVUkwgZXJyb3JzXG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH0pXG4gIC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4gIHByZWZldGNoZWRbaHJlZiArICclJyArIGFzXSA9IHRydWVcbn1cblxuZnVuY3Rpb24gbGlua0NsaWNrZWQoXG4gIGU6IFJlYWN0Lk1vdXNlRXZlbnQsXG4gIHJvdXRlcjogTmV4dFJvdXRlcixcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICByZXBsYWNlPzogYm9vbGVhbixcbiAgc2hhbGxvdz86IGJvb2xlYW4sXG4gIHNjcm9sbD86IGJvb2xlYW5cbik6IHZvaWQge1xuICBjb25zdCB7IG5vZGVOYW1lLCB0YXJnZXQgfSA9IGUuY3VycmVudFRhcmdldCBhcyBIVE1MQW5jaG9yRWxlbWVudFxuICBpZiAoXG4gICAgbm9kZU5hbWUgPT09ICdBJyAmJlxuICAgICgodGFyZ2V0ICYmIHRhcmdldCAhPT0gJ19zZWxmJykgfHxcbiAgICAgIGUubWV0YUtleSB8fFxuICAgICAgZS5jdHJsS2V5IHx8XG4gICAgICBlLnNoaWZ0S2V5IHx8XG4gICAgICAoZS5uYXRpdmVFdmVudCAmJiBlLm5hdGl2ZUV2ZW50LndoaWNoID09PSAyKSlcbiAgKSB7XG4gICAgLy8gaWdub3JlIGNsaWNrIGZvciBuZXcgdGFiIC8gbmV3IHdpbmRvdyBiZWhhdmlvclxuICAgIHJldHVyblxuICB9XG5cbiAgaWYgKCFpc0xvY2FsKGhyZWYpKSB7XG4gICAgLy8gaWdub3JlIGNsaWNrIGlmIGl0J3Mgb3V0c2lkZSBvdXIgc2NvcGUgKGUuZy4gaHR0cHM6Ly9nb29nbGUuY29tKVxuICAgIHJldHVyblxuICB9XG5cbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgLy8gIGF2b2lkIHNjcm9sbCBmb3IgdXJscyB3aXRoIGFuY2hvciByZWZzXG4gIGlmIChzY3JvbGwgPT0gbnVsbCkge1xuICAgIHNjcm9sbCA9IGFzLmluZGV4T2YoJyMnKSA8IDBcbiAgfVxuXG4gIC8vIHJlcGxhY2Ugc3RhdGUgaW5zdGVhZCBvZiBwdXNoIGlmIHByb3AgaXMgcHJlc2VudFxuICByb3V0ZXJbcmVwbGFjZSA/ICdyZXBsYWNlJyA6ICdwdXNoJ10oaHJlZiwgYXMsIHsgc2hhbGxvdyB9KS50aGVuKFxuICAgIChzdWNjZXNzOiBib29sZWFuKSA9PiB7XG4gICAgICBpZiAoIXN1Y2Nlc3MpIHJldHVyblxuICAgICAgaWYgKHNjcm9sbCkge1xuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgICAgZG9jdW1lbnQuYm9keS5mb2N1cygpXG4gICAgICB9XG4gICAgfVxuICApXG59XG5cbmZ1bmN0aW9uIExpbmsocHJvcHM6IFJlYWN0LlByb3BzV2l0aENoaWxkcmVuPExpbmtQcm9wcz4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAvLyBUaGlzIGhvb2sgaXMgaW4gYSBjb25kaXRpb25hbCBidXQgdGhhdCBpcyBvayBiZWNhdXNlIGBwcm9jZXNzLmVudi5OT0RFX0VOVmAgbmV2ZXIgY2hhbmdlc1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rc1xuICAgIGNvbnN0IGhhc1dhcm5lZCA9IFJlYWN0LnVzZVJlZihmYWxzZSlcbiAgICBpZiAocHJvcHMucHJlZmV0Y2ggJiYgIWhhc1dhcm5lZC5jdXJyZW50KSB7XG4gICAgICBoYXNXYXJuZWQuY3VycmVudCA9IHRydWVcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgJ05leHQuanMgYXV0by1wcmVmZXRjaGVzIGF1dG9tYXRpY2FsbHkgYmFzZWQgb24gdmlld3BvcnQuIFRoZSBwcmVmZXRjaCBhdHRyaWJ1dGUgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gTW9yZTogaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvcHJlZmV0Y2gtdHJ1ZS1kZXByZWNhdGVkJ1xuICAgICAgKVxuICAgIH1cbiAgfVxuICBjb25zdCBwID0gcHJvcHMucHJlZmV0Y2ggIT09IGZhbHNlXG5cbiAgY29uc3QgW2NoaWxkRWxtLCBzZXRDaGlsZEVsbV0gPSBSZWFjdC51c2VTdGF0ZTxFbGVtZW50PigpXG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgY29uc3QgcGF0aG5hbWUgPSAocm91dGVyICYmIHJvdXRlci5wYXRobmFtZSkgfHwgJy8nXG5cbiAgY29uc3QgeyBocmVmLCBhcyB9ID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgY29uc3QgcmVzb2x2ZWRIcmVmID0gcmVzb2x2ZUhyZWYocGF0aG5hbWUsIHByb3BzLmhyZWYpXG4gICAgcmV0dXJuIHtcbiAgICAgIGhyZWY6IHJlc29sdmVkSHJlZixcbiAgICAgIGFzOiBwcm9wcy5hcyA/IHJlc29sdmVIcmVmKHBhdGhuYW1lLCBwcm9wcy5hcykgOiByZXNvbHZlZEhyZWYsXG4gICAgfVxuICB9LCBbcGF0aG5hbWUsIHByb3BzLmhyZWYsIHByb3BzLmFzXSlcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChwICYmIEludGVyc2VjdGlvbk9ic2VydmVyICYmIGNoaWxkRWxtICYmIGNoaWxkRWxtLnRhZ05hbWUpIHtcbiAgICAgIC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4gICAgICBjb25zdCBpc1ByZWZldGNoZWQgPSBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhc11cbiAgICAgIGlmICghaXNQcmVmZXRjaGVkKSB7XG4gICAgICAgIHJldHVybiBsaXN0ZW5Ub0ludGVyc2VjdGlvbnMoY2hpbGRFbG0sICgpID0+IHtcbiAgICAgICAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgfSwgW3AsIGNoaWxkRWxtLCBocmVmLCBhcywgcm91dGVyXSlcblxuICBsZXQgeyBjaGlsZHJlbiwgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsIH0gPSBwcm9wc1xuICAvLyBEZXByZWNhdGVkLiBXYXJuaW5nIHNob3duIGJ5IHByb3BUeXBlIGNoZWNrLiBJZiB0aGUgY2hpbGRyZW4gcHJvdmlkZWQgaXMgYSBzdHJpbmcgKDxMaW5rPmV4YW1wbGU8L0xpbms+KSB3ZSB3cmFwIGl0IGluIGFuIDxhPiB0YWdcbiAgaWYgKHR5cGVvZiBjaGlsZHJlbiA9PT0gJ3N0cmluZycpIHtcbiAgICBjaGlsZHJlbiA9IDxhPntjaGlsZHJlbn08L2E+XG4gIH1cblxuICAvLyBUaGlzIHdpbGwgcmV0dXJuIHRoZSBmaXJzdCBjaGlsZCwgaWYgbXVsdGlwbGUgYXJlIHByb3ZpZGVkIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3JcbiAgY29uc3QgY2hpbGQ6IGFueSA9IENoaWxkcmVuLm9ubHkoY2hpbGRyZW4pXG4gIGNvbnN0IGNoaWxkUHJvcHM6IHtcbiAgICBvbk1vdXNlRW50ZXI/OiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgIG9uQ2xpY2s6IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgaHJlZj86IHN0cmluZ1xuICAgIHJlZj86IGFueVxuICB9ID0ge1xuICAgIHJlZjogKGVsOiBhbnkpID0+IHtcbiAgICAgIGlmIChlbCkgc2V0Q2hpbGRFbG0oZWwpXG5cbiAgICAgIGlmIChjaGlsZCAmJiB0eXBlb2YgY2hpbGQgPT09ICdvYmplY3QnICYmIGNoaWxkLnJlZikge1xuICAgICAgICBpZiAodHlwZW9mIGNoaWxkLnJlZiA9PT0gJ2Z1bmN0aW9uJykgY2hpbGQucmVmKGVsKVxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgY2hpbGQucmVmID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgIGNoaWxkLnJlZi5jdXJyZW50ID0gZWxcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgb25DbGljazogKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25DbGljayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjaGlsZC5wcm9wcy5vbkNsaWNrKGUpXG4gICAgICB9XG4gICAgICBpZiAoIWUuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICBsaW5rQ2xpY2tlZChlLCByb3V0ZXIsIGhyZWYsIGFzLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwpXG4gICAgICB9XG4gICAgfSxcbiAgfVxuXG4gIGlmIChwKSB7XG4gICAgY2hpbGRQcm9wcy5vbk1vdXNlRW50ZXIgPSAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyKGUpXG4gICAgICB9XG4gICAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCB7IHByaW9yaXR5OiB0cnVlIH0pXG4gICAgfVxuICB9XG5cbiAgLy8gSWYgY2hpbGQgaXMgYW4gPGE+IHRhZyBhbmQgZG9lc24ndCBoYXZlIGEgaHJlZiBhdHRyaWJ1dGUsIG9yIGlmIHRoZSAncGFzc0hyZWYnIHByb3BlcnR5IGlzXG4gIC8vIGRlZmluZWQsIHdlIHNwZWNpZnkgdGhlIGN1cnJlbnQgJ2hyZWYnLCBzbyB0aGF0IHJlcGV0aXRpb24gaXMgbm90IG5lZWRlZCBieSB0aGUgdXNlclxuICBpZiAocHJvcHMucGFzc0hyZWYgfHwgKGNoaWxkLnR5cGUgPT09ICdhJyAmJiAhKCdocmVmJyBpbiBjaGlsZC5wcm9wcykpKSB7XG4gICAgY2hpbGRQcm9wcy5ocmVmID0gYWRkQmFzZVBhdGgoYXMpXG4gIH1cblxuICAvLyBBZGQgdGhlIGVuZGluZyBzbGFzaCB0byB0aGUgcGF0aHMuIFNvLCB3ZSBjYW4gc2VydmUgdGhlXG4gIC8vIFwiPHBhZ2U+L2luZGV4Lmh0bWxcIiBkaXJlY3RseS5cbiAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9FWFBPUlRfVFJBSUxJTkdfU0xBU0gpIHtcbiAgICBjb25zdCByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCA9IHJlcXVpcmUoJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcmV3cml0ZS11cmwtZm9yLWV4cG9ydCcpXG4gICAgICAucmV3cml0ZVVybEZvck5leHRFeHBvcnRcbiAgICBpZiAoXG4gICAgICBjaGlsZFByb3BzLmhyZWYgJiZcbiAgICAgIHR5cGVvZiBfX05FWFRfREFUQV9fICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICAgX19ORVhUX0RBVEFfXy5uZXh0RXhwb3J0XG4gICAgKSB7XG4gICAgICBjaGlsZFByb3BzLmhyZWYgPSByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydChjaGlsZFByb3BzLmhyZWYpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwgY2hpbGRQcm9wcylcbn1cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gIGNvbnN0IHdhcm4gPSBleGVjT25jZShjb25zb2xlLmVycm9yKVxuXG4gIC8vIFRoaXMgbW9kdWxlIGdldHMgcmVtb3ZlZCBieSB3ZWJwYWNrLklnbm9yZVBsdWdpblxuICBjb25zdCBQcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJylcbiAgY29uc3QgZXhhY3QgPSByZXF1aXJlKCdwcm9wLXR5cGVzLWV4YWN0JylcbiAgLy8gQHRzLWlnbm9yZSB0aGUgcHJvcGVydHkgaXMgc3VwcG9ydGVkLCB3aGVuIGRlY2xhcmluZyBpdCBvbiB0aGUgY2xhc3MgaXQgb3V0cHV0cyBhbiBleHRyYSBiaXQgb2YgY29kZSB3aGljaCBpcyBub3QgbmVlZGVkLlxuICBMaW5rLnByb3BUeXBlcyA9IGV4YWN0KHtcbiAgICBocmVmOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMub2JqZWN0XSkuaXNSZXF1aXJlZCxcbiAgICBhczogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm9iamVjdF0pLFxuICAgIHByZWZldGNoOiBQcm9wVHlwZXMuYm9vbCxcbiAgICByZXBsYWNlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBzaGFsbG93OiBQcm9wVHlwZXMuYm9vbCxcbiAgICBwYXNzSHJlZjogUHJvcFR5cGVzLmJvb2wsXG4gICAgc2Nyb2xsOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICBQcm9wVHlwZXMuZWxlbWVudCxcbiAgICAgIChwcm9wczogYW55LCBwcm9wTmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gcHJvcHNbcHJvcE5hbWVdXG5cbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICB3YXJuKFxuICAgICAgICAgICAgYFdhcm5pbmc6IFlvdSdyZSB1c2luZyBhIHN0cmluZyBkaXJlY3RseSBpbnNpZGUgPExpbms+LiBUaGlzIHVzYWdlIGhhcyBiZWVuIGRlcHJlY2F0ZWQuIFBsZWFzZSBhZGQgYW4gPGE+IHRhZyBhcyBjaGlsZCBvZiA8TGluaz5gXG4gICAgICAgICAgKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgIH0sXG4gICAgXSkuaXNSZXF1aXJlZCxcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGlua1xuIiwiLyoqXG4gKiBSZW1vdmVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggaWYgdGhlcmUgaXMgb25lLiBQcmVzZXJ2ZXMgdGhlIHJvb3QgcGF0aCBgL2AuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5lbmRzV2l0aCgnLycpICYmIHBhdGggIT09ICcvJyA/IHBhdGguc2xpY2UoMCwgLTEpIDogcGF0aFxufVxuXG4vKipcbiAqIE5vcm1hbGl6ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBhY2NvcmRpbmcgdG8gdGhlIGB0cmFpbGluZ1NsYXNoYCBvcHRpb25cbiAqIGluIGBuZXh0LmNvbmZpZy5qc2AuXG4gKi9cbmV4cG9ydCBjb25zdCBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCA9IHByb2Nlc3MuZW52Ll9fTkVYVF9UUkFJTElOR19TTEFTSFxuICA/IChwYXRoOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICAgICAgaWYgKC9cXC5bXi9dK1xcLz8kLy50ZXN0KHBhdGgpKSB7XG4gICAgICAgIHJldHVybiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoKVxuICAgICAgfSBlbHNlIGlmIChwYXRoLmVuZHNXaXRoKCcvJykpIHtcbiAgICAgICAgcmV0dXJuIHBhdGhcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBwYXRoICsgJy8nXG4gICAgICB9XG4gICAgfVxuICA6IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoXG4iLCIvKiBnbG9iYWwgd2luZG93ICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUm91dGVyLCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IFJvdXRlckNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQnXG5cbnR5cGUgQ2xhc3NBcmd1bWVudHM8VD4gPSBUIGV4dGVuZHMgbmV3ICguLi5hcmdzOiBpbmZlciBVKSA9PiBhbnkgPyBVIDogYW55XG5cbnR5cGUgUm91dGVyQXJncyA9IENsYXNzQXJndW1lbnRzPHR5cGVvZiBSb3V0ZXI+XG5cbnR5cGUgU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBSb3V0ZXIgfCBudWxsXG4gIHJlYWR5Q2FsbGJhY2tzOiBBcnJheTwoKSA9PiBhbnk+XG4gIHJlYWR5KGNiOiAoKSA9PiBhbnkpOiB2b2lkXG59XG5cbmV4cG9ydCB7IFJvdXRlciwgTmV4dFJvdXRlciB9XG5cbmV4cG9ydCB0eXBlIFNpbmdsZXRvblJvdXRlciA9IFNpbmdsZXRvblJvdXRlckJhc2UgJiBOZXh0Um91dGVyXG5cbmNvbnN0IHNpbmdsZXRvblJvdXRlcjogU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBudWxsLCAvLyBob2xkcyB0aGUgYWN0dWFsIHJvdXRlciBpbnN0YW5jZVxuICByZWFkeUNhbGxiYWNrczogW10sXG4gIHJlYWR5KGNiOiAoKSA9PiB2b2lkKSB7XG4gICAgaWYgKHRoaXMucm91dGVyKSByZXR1cm4gY2IoKVxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5yZWFkeUNhbGxiYWNrcy5wdXNoKGNiKVxuICAgIH1cbiAgfSxcbn1cblxuLy8gQ3JlYXRlIHB1YmxpYyBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzIG9mIHRoZSByb3V0ZXIgaW4gdGhlIHNpbmdsZXRvblJvdXRlclxuY29uc3QgdXJsUHJvcGVydHlGaWVsZHMgPSBbXG4gICdwYXRobmFtZScsXG4gICdyb3V0ZScsXG4gICdxdWVyeScsXG4gICdhc1BhdGgnLFxuICAnY29tcG9uZW50cycsXG4gICdpc0ZhbGxiYWNrJyxcbiAgJ2Jhc2VQYXRoJyxcbl1cbmNvbnN0IHJvdXRlckV2ZW50cyA9IFtcbiAgJ3JvdXRlQ2hhbmdlU3RhcnQnLFxuICAnYmVmb3JlSGlzdG9yeUNoYW5nZScsXG4gICdyb3V0ZUNoYW5nZUNvbXBsZXRlJyxcbiAgJ3JvdXRlQ2hhbmdlRXJyb3InLFxuICAnaGFzaENoYW5nZVN0YXJ0JyxcbiAgJ2hhc2hDaGFuZ2VDb21wbGV0ZScsXG5dXG5jb25zdCBjb3JlTWV0aG9kRmllbGRzID0gW1xuICAncHVzaCcsXG4gICdyZXBsYWNlJyxcbiAgJ3JlbG9hZCcsXG4gICdiYWNrJyxcbiAgJ3ByZWZldGNoJyxcbiAgJ2JlZm9yZVBvcFN0YXRlJyxcbl1cblxuLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgJ2V2ZW50cycsIHtcbiAgZ2V0KCkge1xuICAgIHJldHVybiBSb3V0ZXIuZXZlbnRzXG4gIH0sXG59KVxuXG51cmxQcm9wZXJ0eUZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAvLyBIZXJlIHdlIG5lZWQgdG8gdXNlIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSBiZWNhdXNlLCB3ZSBuZWVkIHRvIHJldHVyblxuICAvLyB0aGUgcHJvcGVydHkgYXNzaWduZWQgdG8gdGhlIGFjdHVhbCByb3V0ZXJcbiAgLy8gVGhlIHZhbHVlIG1pZ2h0IGdldCBjaGFuZ2VkIGFzIHdlIGNoYW5nZSByb3V0ZXMgYW5kIHRoaXMgaXMgdGhlXG4gIC8vIHByb3BlciB3YXkgdG8gYWNjZXNzIGl0XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsIGZpZWxkLCB7XG4gICAgZ2V0KCkge1xuICAgICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSBhcyBzdHJpbmdcbiAgICB9LFxuICB9KVxufSlcblxuY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAvLyBXZSBkb24ndCByZWFsbHkga25vdyB0aGUgdHlwZXMgaGVyZSwgc28gd2UgYWRkIHRoZW0gbGF0ZXIgaW5zdGVhZFxuICA7KHNpbmdsZXRvblJvdXRlciBhcyBhbnkpW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgIHJldHVybiByb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gIH1cbn0pXG5cbnJvdXRlckV2ZW50cy5mb3JFYWNoKChldmVudCkgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHkoKCkgPT4ge1xuICAgIFJvdXRlci5ldmVudHMub24oZXZlbnQsICguLi5hcmdzKSA9PiB7XG4gICAgICBjb25zdCBldmVudEZpZWxkID0gYG9uJHtldmVudC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX0ke2V2ZW50LnN1YnN0cmluZyhcbiAgICAgICAgMVxuICAgICAgKX1gXG4gICAgICBjb25zdCBfc2luZ2xldG9uUm91dGVyID0gc2luZ2xldG9uUm91dGVyIGFzIGFueVxuICAgICAgaWYgKF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKC4uLmFyZ3MpXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1jb25zb2xlXG4gICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3Igd2hlbiBydW5uaW5nIHRoZSBSb3V0ZXIgZXZlbnQ6ICR7ZXZlbnRGaWVsZH1gKVxuICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1jb25zb2xlXG4gICAgICAgICAgY29uc29sZS5lcnJvcihgJHtlcnIubWVzc2FnZX1cXG4ke2Vyci5zdGFja31gKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfSlcbn0pXG5cbmZ1bmN0aW9uIGdldFJvdXRlcigpOiBSb3V0ZXIge1xuICBpZiAoIXNpbmdsZXRvblJvdXRlci5yb3V0ZXIpIHtcbiAgICBjb25zdCBtZXNzYWdlID1cbiAgICAgICdObyByb3V0ZXIgaW5zdGFuY2UgZm91bmQuXFxuJyArXG4gICAgICAnWW91IHNob3VsZCBvbmx5IHVzZSBcIm5leHQvcm91dGVyXCIgaW5zaWRlIHRoZSBjbGllbnQgc2lkZSBvZiB5b3VyIGFwcC5cXG4nXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cbiAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXJcbn1cblxuLy8gRXhwb3J0IHRoZSBzaW5nbGV0b25Sb3V0ZXIgYW5kIHRoaXMgaXMgdGhlIHB1YmxpYyBBUEkuXG5leHBvcnQgZGVmYXVsdCBzaW5nbGV0b25Sb3V0ZXIgYXMgU2luZ2xldG9uUm91dGVyXG5cbi8vIFJlZXhwb3J0IHRoZSB3aXRoUm91dGUgSE9DXG5leHBvcnQgeyBkZWZhdWx0IGFzIHdpdGhSb3V0ZXIgfSBmcm9tICcuL3dpdGgtcm91dGVyJ1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlUm91dGVyKCk6IE5leHRSb3V0ZXIge1xuICByZXR1cm4gUmVhY3QudXNlQ29udGV4dChSb3V0ZXJDb250ZXh0KVxufVxuXG4vLyBJTlRFUk5BTCBBUElTXG4vLyAtLS0tLS0tLS0tLS0tXG4vLyAoZG8gbm90IHVzZSBmb2xsb3dpbmcgZXhwb3J0cyBpbnNpZGUgdGhlIGFwcClcblxuLy8gQ3JlYXRlIGEgcm91dGVyIGFuZCBhc3NpZ24gaXQgYXMgdGhlIHNpbmdsZXRvbiBpbnN0YW5jZS5cbi8vIFRoaXMgaXMgdXNlZCBpbiBjbGllbnQgc2lkZSB3aGVuIHdlIGFyZSBpbml0aWxpemluZyB0aGUgYXBwLlxuLy8gVGhpcyBzaG91bGQgKipub3QqKiB1c2UgaW5zaWRlIHRoZSBzZXJ2ZXIuXG5leHBvcnQgY29uc3QgY3JlYXRlUm91dGVyID0gKC4uLmFyZ3M6IFJvdXRlckFyZ3MpOiBSb3V0ZXIgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucm91dGVyID0gbmV3IFJvdXRlciguLi5hcmdzKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MuZm9yRWFjaCgoY2IpID0+IGNiKCkpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcyA9IFtdXG5cbiAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXJcbn1cblxuLy8gVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIGNyZWF0ZSB0aGUgYHdpdGhSb3V0ZXJgIHJvdXRlciBpbnN0YW5jZVxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZShyb3V0ZXI6IFJvdXRlcik6IE5leHRSb3V0ZXIge1xuICBjb25zdCBfcm91dGVyID0gcm91dGVyIGFzIGFueVxuICBjb25zdCBpbnN0YW5jZSA9IHt9IGFzIGFueVxuXG4gIGZvciAoY29uc3QgcHJvcGVydHkgb2YgdXJsUHJvcGVydHlGaWVsZHMpIHtcbiAgICBpZiAodHlwZW9mIF9yb3V0ZXJbcHJvcGVydHldID09PSAnb2JqZWN0Jykge1xuICAgICAgaW5zdGFuY2VbcHJvcGVydHldID0gT2JqZWN0LmFzc2lnbih7fSwgX3JvdXRlcltwcm9wZXJ0eV0pIC8vIG1ha2VzIHN1cmUgcXVlcnkgaXMgbm90IHN0YXRlZnVsXG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IF9yb3V0ZXJbcHJvcGVydHldXG4gIH1cblxuICAvLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG4gIGluc3RhbmNlLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICBjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgaW5zdGFuY2VbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgICByZXR1cm4gX3JvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIGluc3RhbmNlXG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBOZXh0Q29tcG9uZW50VHlwZSwgTmV4dFBhZ2VDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciwgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5cbmV4cG9ydCB0eXBlIFdpdGhSb3V0ZXJQcm9wcyA9IHtcbiAgcm91dGVyOiBOZXh0Um91dGVyXG59XG5cbmV4cG9ydCB0eXBlIEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPiA9IFBpY2s8XG4gIFAsXG4gIEV4Y2x1ZGU8a2V5b2YgUCwga2V5b2YgV2l0aFJvdXRlclByb3BzPlxuPlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3aXRoUm91dGVyPFxuICBQIGV4dGVuZHMgV2l0aFJvdXRlclByb3BzLFxuICBDID0gTmV4dFBhZ2VDb250ZXh0XG4+KFxuICBDb21wb3NlZENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8QywgYW55LCBQPlxuKTogUmVhY3QuQ29tcG9uZW50VHlwZTxFeGNsdWRlUm91dGVyUHJvcHM8UD4+IHtcbiAgZnVuY3Rpb24gV2l0aFJvdXRlcldyYXBwZXIocHJvcHM6IGFueSkge1xuICAgIHJldHVybiA8Q29tcG9zZWRDb21wb25lbnQgcm91dGVyPXt1c2VSb3V0ZXIoKX0gey4uLnByb3BzfSAvPlxuICB9XG5cbiAgV2l0aFJvdXRlcldyYXBwZXIuZ2V0SW5pdGlhbFByb3BzID0gQ29tcG9zZWRDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzXG4gIC8vIFRoaXMgaXMgbmVlZGVkIHRvIGFsbG93IGNoZWNraW5nIGZvciBjdXN0b20gZ2V0SW5pdGlhbFByb3BzIGluIF9hcHBcbiAgOyhXaXRoUm91dGVyV3JhcHBlciBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHMgPSAoQ29tcG9zZWRDb21wb25lbnQgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgY29uc3QgbmFtZSA9XG4gICAgICBDb21wb3NlZENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb3NlZENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xuICAgIFdpdGhSb3V0ZXJXcmFwcGVyLmRpc3BsYXlOYW1lID0gYHdpdGhSb3V0ZXIoJHtuYW1lfSlgXG4gIH1cblxuICByZXR1cm4gV2l0aFJvdXRlcldyYXBwZXJcbn1cbiIsIi8qXG5NSVQgTGljZW5zZVxuXG5Db3B5cmlnaHQgKGMpIEphc29uIE1pbGxlciAoaHR0cHM6Ly9qYXNvbmZvcm1hdC5jb20vKVxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4qL1xuXG4vLyBUaGlzIGZpbGUgaXMgYmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL2RldmVsb3BpdC9taXR0L2Jsb2IvdjEuMS4zL3NyYy9pbmRleC5qc1xuLy8gSXQncyBiZWVuIGVkaXRlZCBmb3IgdGhlIG5lZWRzIG9mIHRoaXMgc2NyaXB0XG4vLyBTZWUgdGhlIExJQ0VOU0UgYXQgdGhlIHRvcCBvZiB0aGUgZmlsZVxuXG50eXBlIEhhbmRsZXIgPSAoLi4uZXZ0czogYW55W10pID0+IHZvaWRcblxuZXhwb3J0IHR5cGUgTWl0dEVtaXR0ZXIgPSB7XG4gIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKTogdm9pZFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtaXR0KCk6IE1pdHRFbWl0dGVyIHtcbiAgY29uc3QgYWxsOiB7IFtzOiBzdHJpbmddOiBIYW5kbGVyW10gfSA9IE9iamVjdC5jcmVhdGUobnVsbClcblxuICByZXR1cm4ge1xuICAgIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgOyhhbGxbdHlwZV0gfHwgKGFsbFt0eXBlXSA9IFtdKSkucHVzaChoYW5kbGVyKVxuICAgIH0sXG5cbiAgICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICBpZiAoYWxsW3R5cGVdKSB7XG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1iaXR3aXNlXG4gICAgICAgIGFsbFt0eXBlXS5zcGxpY2UoYWxsW3R5cGVdLmluZGV4T2YoaGFuZGxlcikgPj4+IDAsIDEpXG4gICAgICB9XG4gICAgfSxcblxuICAgIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgOyhhbGxbdHlwZV0gfHwgW10pLnNsaWNlKCkubWFwKChoYW5kbGVyOiBIYW5kbGVyKSA9PiB7XG4gICAgICAgIGhhbmRsZXIoLi4uZXZ0cylcbiAgICAgIH0pXG4gICAgfSxcbiAgfVxufVxuIiwiLyogZ2xvYmFsIF9fTkVYVF9EQVRBX18gKi9cbi8vIHRzbGludDpkaXNhYmxlOm5vLWNvbnNvbGVcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgbWl0dCwgeyBNaXR0RW1pdHRlciB9IGZyb20gJy4uL21pdHQnXG5pbXBvcnQge1xuICBBcHBDb250ZXh0VHlwZSxcbiAgZm9ybWF0V2l0aFZhbGlkYXRpb24sXG4gIGdldFVSTCxcbiAgbG9hZEdldEluaXRpYWxQcm9wcyxcbiAgTmV4dFBhZ2VDb250ZXh0LFxuICBTVCxcbn0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgeyBpc0R5bmFtaWNSb3V0ZSB9IGZyb20gJy4vdXRpbHMvaXMtZHluYW1pYydcbmltcG9ydCB7IGdldFJvdXRlTWF0Y2hlciB9IGZyb20gJy4vdXRpbHMvcm91dGUtbWF0Y2hlcidcbmltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3V0aWxzL3JvdXRlLXJlZ2V4J1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vdXRpbHMvc2VhcmNoLXBhcmFtcy10by11cmwtcXVlcnknXG5pbXBvcnQgeyBwYXJzZVJlbGF0aXZlVXJsIH0gZnJvbSAnLi91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwnXG5pbXBvcnQge1xuICByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCxcbiAgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gsXG59IGZyb20gJy4uLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gnXG5cbmNvbnN0IGJhc2VQYXRoID0gKHByb2Nlc3MuZW52Ll9fTkVYVF9ST1VURVJfQkFTRVBBVEggYXMgc3RyaW5nKSB8fCAnJ1xuXG5mdW5jdGlvbiBidWlsZENhbmNlbGxhdGlvbkVycm9yKCkge1xuICByZXR1cm4gT2JqZWN0LmFzc2lnbihuZXcgRXJyb3IoJ1JvdXRlIENhbmNlbGxlZCcpLCB7XG4gICAgY2FuY2VsbGVkOiB0cnVlLFxuICB9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIGJhc2VQYXRoXG4gICAgPyBwYXRoID09PSAnLydcbiAgICAgID8gbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2goYmFzZVBhdGgpXG4gICAgICA6IGJhc2VQYXRoICsgcGF0aFxuICAgIDogcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGguc2xpY2UoYmFzZVBhdGgubGVuZ3RoKSB8fCAnLydcbn1cblxudHlwZSBVcmwgPSBVcmxPYmplY3QgfCBzdHJpbmdcblxuLyoqXG4gKiBSZXNvbHZlcyBhIGdpdmVuIGh5cGVybGluayB3aXRoIGEgY2VydGFpbiByb3V0ZXIgc3RhdGUgKGJhc2VQYXRoIG5vdCBpbmNsdWRlZCkuXG4gKiBQcmVzZXJ2ZXMgYWJzb2x1dGUgdXJscy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVIcmVmKGN1cnJlbnRQYXRoOiBzdHJpbmcsIGhyZWY6IFVybCk6IHN0cmluZyB7XG4gIC8vIHdlIHVzZSBhIGR1bW15IGJhc2UgdXJsIGZvciByZWxhdGl2ZSB1cmxzXG4gIGNvbnN0IGJhc2UgPSBuZXcgVVJMKGN1cnJlbnRQYXRoLCAnaHR0cDovL24nKVxuICBjb25zdCB1cmxBc1N0cmluZyA9XG4gICAgdHlwZW9mIGhyZWYgPT09ICdzdHJpbmcnID8gaHJlZiA6IGZvcm1hdFdpdGhWYWxpZGF0aW9uKGhyZWYpXG4gIGNvbnN0IGZpbmFsVXJsID0gbmV3IFVSTCh1cmxBc1N0cmluZywgYmFzZSlcbiAgZmluYWxVcmwucGF0aG5hbWUgPSBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChmaW5hbFVybC5wYXRobmFtZSlcbiAgLy8gaWYgdGhlIG9yaWdpbiBkaWRuJ3QgY2hhbmdlLCBpdCBtZWFucyB3ZSByZWNlaXZlZCBhIHJlbGF0aXZlIGhyZWZcbiAgcmV0dXJuIGZpbmFsVXJsLm9yaWdpbiA9PT0gYmFzZS5vcmlnaW5cbiAgICA/IGZpbmFsVXJsLmhyZWYuc2xpY2UoZmluYWxVcmwub3JpZ2luLmxlbmd0aClcbiAgICA6IGZpbmFsVXJsLmhyZWZcbn1cblxuZnVuY3Rpb24gcHJlcGFyZVVybEFzKHJvdXRlcjogTmV4dFJvdXRlciwgdXJsOiBVcmwsIGFzOiBVcmwpIHtcbiAgLy8gSWYgdXJsIGFuZCBhcyBwcm92aWRlZCBhcyBhbiBvYmplY3QgcmVwcmVzZW50YXRpb24sXG4gIC8vIHdlJ2xsIGZvcm1hdCB0aGVtIGludG8gdGhlIHN0cmluZyB2ZXJzaW9uIGhlcmUuXG4gIHJldHVybiB7XG4gICAgdXJsOiBhZGRCYXNlUGF0aChyZXNvbHZlSHJlZihyb3V0ZXIucGF0aG5hbWUsIHVybCkpLFxuICAgIGFzOiBhcyA/IGFkZEJhc2VQYXRoKHJlc29sdmVIcmVmKHJvdXRlci5wYXRobmFtZSwgYXMpKSA6IGFzLFxuICB9XG59XG5cbmZ1bmN0aW9uIHRyeVBhcnNlUmVsYXRpdmVVcmwoXG4gIHVybDogc3RyaW5nXG4pOiBudWxsIHwgUmV0dXJuVHlwZTx0eXBlb2YgcGFyc2VSZWxhdGl2ZVVybD4ge1xuICB0cnkge1xuICAgIHJldHVybiBwYXJzZVJlbGF0aXZlVXJsKHVybClcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYEludmFsaWQgaHJlZiBwYXNzZWQgdG8gcm91dGVyOiAke3VybH0gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvaW52YWxpZC1ocmVmLXBhc3NlZGBcbiAgICAgIClcbiAgICB9XG4gICAgcmV0dXJuIG51bGxcbiAgfVxufVxuXG50eXBlIENvbXBvbmVudFJlcyA9IHsgcGFnZTogQ29tcG9uZW50VHlwZTsgbW9kOiBhbnkgfVxuXG5leHBvcnQgdHlwZSBCYXNlUm91dGVyID0ge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcbn1cblxuZXhwb3J0IHR5cGUgTmV4dFJvdXRlciA9IEJhc2VSb3V0ZXIgJlxuICBQaWNrPFxuICAgIFJvdXRlcixcbiAgICB8ICdwdXNoJ1xuICAgIHwgJ3JlcGxhY2UnXG4gICAgfCAncmVsb2FkJ1xuICAgIHwgJ2JhY2snXG4gICAgfCAncHJlZmV0Y2gnXG4gICAgfCAnYmVmb3JlUG9wU3RhdGUnXG4gICAgfCAnZXZlbnRzJ1xuICAgIHwgJ2lzRmFsbGJhY2snXG4gID5cblxuZXhwb3J0IHR5cGUgUHJlZmV0Y2hPcHRpb25zID0ge1xuICBwcmlvcml0eT86IGJvb2xlYW5cbn1cblxudHlwZSBSb3V0ZUluZm8gPSB7XG4gIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICBfX05fU1NHPzogYm9vbGVhblxuICBfX05fU1NQPzogYm9vbGVhblxuICBwcm9wcz86IGFueVxuICBlcnI/OiBFcnJvclxuICBlcnJvcj86IGFueVxufVxuXG50eXBlIFN1YnNjcmlwdGlvbiA9IChkYXRhOiBSb3V0ZUluZm8sIEFwcD86IENvbXBvbmVudFR5cGUpID0+IFByb21pc2U8dm9pZD5cblxudHlwZSBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrID0gKHN0YXRlOiBhbnkpID0+IGJvb2xlYW5cblxudHlwZSBDb21wb25lbnRMb2FkQ2FuY2VsID0gKCgpID0+IHZvaWQpIHwgbnVsbFxuXG50eXBlIEhpc3RvcnlNZXRob2QgPSAncmVwbGFjZVN0YXRlJyB8ICdwdXNoU3RhdGUnXG5cbmNvbnN0IG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uID1cbiAgcHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTiAmJlxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAnc2Nyb2xsUmVzdG9yYXRpb24nIGluIHdpbmRvdy5oaXN0b3J5XG5cbmZ1bmN0aW9uIGZldGNoUmV0cnkodXJsOiBzdHJpbmcsIGF0dGVtcHRzOiBudW1iZXIpOiBQcm9taXNlPGFueT4ge1xuICByZXR1cm4gZmV0Y2godXJsLCB7XG4gICAgLy8gQ29va2llcyBhcmUgcmVxdWlyZWQgdG8gYmUgcHJlc2VudCBmb3IgTmV4dC5qcycgU1NHIFwiUHJldmlldyBNb2RlXCIuXG4gICAgLy8gQ29va2llcyBtYXkgYWxzbyBiZSByZXF1aXJlZCBmb3IgYGdldFNlcnZlclNpZGVQcm9wc2AuXG4gICAgLy9cbiAgICAvLyA+IGBmZXRjaGAgd29u4oCZdCBzZW5kIGNvb2tpZXMsIHVubGVzcyB5b3Ugc2V0IHRoZSBjcmVkZW50aWFscyBpbml0XG4gICAgLy8gPiBvcHRpb24uXG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZldGNoX0FQSS9Vc2luZ19GZXRjaFxuICAgIC8vXG4gICAgLy8gPiBGb3IgbWF4aW11bSBicm93c2VyIGNvbXBhdGliaWxpdHkgd2hlbiBpdCBjb21lcyB0byBzZW5kaW5nICZcbiAgICAvLyA+IHJlY2VpdmluZyBjb29raWVzLCBhbHdheXMgc3VwcGx5IHRoZSBgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidgXG4gICAgLy8gPiBvcHRpb24gaW5zdGVhZCBvZiByZWx5aW5nIG9uIHRoZSBkZWZhdWx0LlxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9naXRodWIvZmV0Y2gjY2F2ZWF0c1xuICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICB9KS50aGVuKChyZXMpID0+IHtcbiAgICBpZiAoIXJlcy5vaykge1xuICAgICAgaWYgKGF0dGVtcHRzID4gMSAmJiByZXMuc3RhdHVzID49IDUwMCkge1xuICAgICAgICByZXR1cm4gZmV0Y2hSZXRyeSh1cmwsIGF0dGVtcHRzIC0gMSlcbiAgICAgIH1cbiAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYClcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzLmpzb24oKVxuICB9KVxufVxuXG5mdW5jdGlvbiBmZXRjaE5leHREYXRhKGRhdGFIcmVmOiBzdHJpbmcsIGlzU2VydmVyUmVuZGVyOiBib29sZWFuKSB7XG4gIHJldHVybiBmZXRjaFJldHJ5KGRhdGFIcmVmLCBpc1NlcnZlclJlbmRlciA/IDMgOiAxKS5jYXRjaCgoZXJyOiBFcnJvcikgPT4ge1xuICAgIC8vIFdlIHNob3VsZCBvbmx5IHRyaWdnZXIgYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uIGlmIHRoaXMgd2FzIGNhdXNlZFxuICAgIC8vIG9uIGEgY2xpZW50LXNpZGUgdHJhbnNpdGlvbi4gT3RoZXJ3aXNlLCB3ZSdkIGdldCBpbnRvIGFuIGluZmluaXRlXG4gICAgLy8gbG9vcC5cbiAgICBpZiAoIWlzU2VydmVyUmVuZGVyKSB7XG4gICAgICA7KGVyciBhcyBhbnkpLmNvZGUgPSAnUEFHRV9MT0FEX0VSUk9SJ1xuICAgIH1cbiAgICB0aHJvdyBlcnJcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm91dGVyIGltcGxlbWVudHMgQmFzZVJvdXRlciB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xuXG4gIC8qKlxuICAgKiBNYXAgb2YgYWxsIGNvbXBvbmVudHMgbG9hZGVkIGluIGBSb3V0ZXJgXG4gICAqL1xuICBjb21wb25lbnRzOiB7IFtwYXRobmFtZTogc3RyaW5nXTogUm91dGVJbmZvIH1cbiAgLy8gU3RhdGljIERhdGEgQ2FjaGVcbiAgc2RjOiB7IFthc1BhdGg6IHN0cmluZ106IG9iamVjdCB9ID0ge31cbiAgc3ViOiBTdWJzY3JpcHRpb25cbiAgY2xjOiBDb21wb25lbnRMb2FkQ2FuY2VsXG4gIHBhZ2VMb2FkZXI6IGFueVxuICBfYnBzOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrIHwgdW5kZWZpbmVkXG4gIGV2ZW50czogTWl0dEVtaXR0ZXJcbiAgX3dyYXBBcHA6IChBcHA6IENvbXBvbmVudFR5cGUpID0+IGFueVxuICBpc1NzcjogYm9vbGVhblxuICBpc0ZhbGxiYWNrOiBib29sZWFuXG4gIF9pbkZsaWdodFJvdXRlPzogc3RyaW5nXG5cbiAgc3RhdGljIGV2ZW50czogTWl0dEVtaXR0ZXIgPSBtaXR0KClcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIHtcbiAgICAgIGluaXRpYWxQcm9wcyxcbiAgICAgIHBhZ2VMb2FkZXIsXG4gICAgICBBcHAsXG4gICAgICB3cmFwQXBwLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgZXJyLFxuICAgICAgc3Vic2NyaXB0aW9uLFxuICAgICAgaXNGYWxsYmFjayxcbiAgICB9OiB7XG4gICAgICBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvblxuICAgICAgaW5pdGlhbFByb3BzOiBhbnlcbiAgICAgIHBhZ2VMb2FkZXI6IGFueVxuICAgICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gICAgICBBcHA6IENvbXBvbmVudFR5cGVcbiAgICAgIHdyYXBBcHA6IChBcHA6IENvbXBvbmVudFR5cGUpID0+IGFueVxuICAgICAgZXJyPzogRXJyb3JcbiAgICAgIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgICB9XG4gICkge1xuICAgIC8vIHJlcHJlc2VudHMgdGhlIGN1cnJlbnQgY29tcG9uZW50IGtleVxuICAgIHRoaXMucm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcblxuICAgIC8vIHNldCB1cCB0aGUgY29tcG9uZW50IGNhY2hlIChieSByb3V0ZSBrZXlzKVxuICAgIHRoaXMuY29tcG9uZW50cyA9IHt9XG4gICAgLy8gV2Ugc2hvdWxkIG5vdCBrZWVwIHRoZSBjYWNoZSwgaWYgdGhlcmUncyBhbiBlcnJvclxuICAgIC8vIE90aGVyd2lzZSwgdGhpcyBjYXVzZSBpc3N1ZXMgd2hlbiB3aGVuIGdvaW5nIGJhY2sgYW5kXG4gICAgLy8gY29tZSBhZ2FpbiB0byB0aGUgZXJyb3JlZCBwYWdlLlxuICAgIGlmIChwYXRobmFtZSAhPT0gJy9fZXJyb3InKSB7XG4gICAgICB0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0gPSB7XG4gICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgcHJvcHM6IGluaXRpYWxQcm9wcyxcbiAgICAgICAgZXJyLFxuICAgICAgICBfX05fU1NHOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU0csXG4gICAgICAgIF9fTl9TU1A6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTUCxcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10gPSB7IENvbXBvbmVudDogQXBwIH1cblxuICAgIC8vIEJhY2t3YXJkcyBjb21wYXQgZm9yIFJvdXRlci5yb3V0ZXIuZXZlbnRzXG4gICAgLy8gVE9ETzogU2hvdWxkIGJlIHJlbW92ZSB0aGUgZm9sbG93aW5nIG1ham9yIHZlcnNpb24gYXMgaXQgd2FzIG5ldmVyIGRvY3VtZW50ZWRcbiAgICB0aGlzLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICAgIHRoaXMucGFnZUxvYWRlciA9IHBhZ2VMb2FkZXJcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICAvLyBpZiBhdXRvIHByZXJlbmRlcmVkIGFuZCBkeW5hbWljIHJvdXRlIHdhaXQgdG8gdXBkYXRlIGFzUGF0aFxuICAgIC8vIHVudGlsIGFmdGVyIG1vdW50IHRvIHByZXZlbnQgaHlkcmF0aW9uIG1pc21hdGNoXG4gICAgdGhpcy5hc1BhdGggPVxuICAgICAgLy8gQHRzLWlnbm9yZSB0aGlzIGlzIHRlbXBvcmFyaWx5IGdsb2JhbCAoYXR0YWNoZWQgdG8gd2luZG93KVxuICAgICAgaXNEeW5hbWljUm91dGUocGF0aG5hbWUpICYmIF9fTkVYVF9EQVRBX18uYXV0b0V4cG9ydCA/IHBhdGhuYW1lIDogYXNcbiAgICB0aGlzLmJhc2VQYXRoID0gYmFzZVBhdGhcbiAgICB0aGlzLnN1YiA9IHN1YnNjcmlwdGlvblxuICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIHRoaXMuX3dyYXBBcHAgPSB3cmFwQXBwXG4gICAgLy8gbWFrZSBzdXJlIHRvIGlnbm9yZSBleHRyYSBwb3BTdGF0ZSBpbiBzYWZhcmkgb24gbmF2aWdhdGluZ1xuICAgIC8vIGJhY2sgZnJvbSBleHRlcm5hbCBzaXRlXG4gICAgdGhpcy5pc1NzciA9IHRydWVcblxuICAgIHRoaXMuaXNGYWxsYmFjayA9IGlzRmFsbGJhY2tcblxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gbWFrZSBzdXJlIFwiYXNcIiBkb2Vzbid0IHN0YXJ0IHdpdGggZG91YmxlIHNsYXNoZXMgb3IgZWxzZSBpdCBjYW5cbiAgICAgIC8vIHRocm93IGFuIGVycm9yIGFzIGl0J3MgY29uc2lkZXJlZCBpbnZhbGlkXG4gICAgICBpZiAoYXMuc3Vic3RyKDAsIDIpICE9PSAnLy8nKSB7XG4gICAgICAgIC8vIGluIG9yZGVyIGZvciBgZS5zdGF0ZWAgdG8gd29yayBvbiB0aGUgYG9ucG9wc3RhdGVgIGV2ZW50XG4gICAgICAgIC8vIHdlIGhhdmUgdG8gcmVnaXN0ZXIgdGhlIGluaXRpYWwgcm91dGUgdXBvbiBpbml0aWFsaXphdGlvblxuXG4gICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUpLCBxdWVyeSB9KSxcbiAgICAgICAgICBnZXRVUkwoKVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMub25Qb3BTdGF0ZSlcblxuICAgICAgLy8gZW5hYmxlIGN1c3RvbSBzY3JvbGwgcmVzdG9yYXRpb24gaGFuZGxpbmcgd2hlbiBhdmFpbGFibGVcbiAgICAgIC8vIG90aGVyd2lzZSBmYWxsYmFjayB0byBicm93c2VyJ3MgZGVmYXVsdCBoYW5kbGluZ1xuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgICAgd2luZG93Lmhpc3Rvcnkuc2Nyb2xsUmVzdG9yYXRpb24gPSAnbWFudWFsJ1xuXG4gICAgICAgICAgbGV0IHNjcm9sbERlYm91bmNlVGltZW91dDogdW5kZWZpbmVkIHwgTm9kZUpTLlRpbWVvdXRcblxuICAgICAgICAgIGNvbnN0IGRlYm91bmNlZFNjcm9sbFNhdmUgPSAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoc2Nyb2xsRGVib3VuY2VUaW1lb3V0KSBjbGVhclRpbWVvdXQoc2Nyb2xsRGVib3VuY2VUaW1lb3V0KVxuXG4gICAgICAgICAgICBzY3JvbGxEZWJvdW5jZVRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgeyB1cmwsIGFzOiBjdXJBcywgb3B0aW9ucyB9ID0gaGlzdG9yeS5zdGF0ZVxuICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAgICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICAgICAgICAgIHVybCxcbiAgICAgICAgICAgICAgICBjdXJBcyxcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zLCB7XG4gICAgICAgICAgICAgICAgICBfTl9YOiB3aW5kb3cuc2Nyb2xsWCxcbiAgICAgICAgICAgICAgICAgIF9OX1k6IHdpbmRvdy5zY3JvbGxZLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0sIDEwKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBkZWJvdW5jZWRTY3JvbGxTYXZlKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gQGRlcHJlY2F0ZWQgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkgZXZlbiB0aG91Z2ggaXQncyBhIHByaXZhdGUgbWV0aG9kLlxuICBzdGF0aWMgX3Jld3JpdGVVcmxGb3JOZXh0RXhwb3J0KHVybDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0VYUE9SVF9UUkFJTElOR19TTEFTSCkge1xuICAgICAgY29uc3QgcmV3cml0ZVVybEZvck5leHRFeHBvcnQgPSByZXF1aXJlKCcuL3Jld3JpdGUtdXJsLWZvci1leHBvcnQnKVxuICAgICAgICAucmV3cml0ZVVybEZvck5leHRFeHBvcnRcbiAgICAgIHJldHVybiByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCh1cmwpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB1cmxcbiAgICB9XG4gIH1cblxuICBvblBvcFN0YXRlID0gKGU6IFBvcFN0YXRlRXZlbnQpOiB2b2lkID0+IHtcbiAgICBpZiAoIWUuc3RhdGUpIHtcbiAgICAgIC8vIFdlIGdldCBzdGF0ZSBhcyB1bmRlZmluZWQgZm9yIHR3byByZWFzb25zLlxuICAgICAgLy8gIDEuIFdpdGggb2xkZXIgc2FmYXJpICg8IDgpIGFuZCBvbGRlciBjaHJvbWUgKDwgMzQpXG4gICAgICAvLyAgMi4gV2hlbiB0aGUgVVJMIGNoYW5nZWQgd2l0aCAjXG4gICAgICAvL1xuICAgICAgLy8gSW4gdGhlIGJvdGggY2FzZXMsIHdlIGRvbid0IG5lZWQgdG8gcHJvY2VlZCBhbmQgY2hhbmdlIHRoZSByb3V0ZS5cbiAgICAgIC8vIChhcyBpdCdzIGFscmVhZHkgY2hhbmdlZClcbiAgICAgIC8vIEJ1dCB3ZSBjYW4gc2ltcGx5IHJlcGxhY2UgdGhlIHN0YXRlIHdpdGggdGhlIG5ldyBjaGFuZ2VzLlxuICAgICAgLy8gQWN0dWFsbHksIGZvciAoMSkgd2UgZG9uJ3QgbmVlZCB0byBub3RoaW5nLiBCdXQgaXQncyBoYXJkIHRvIGRldGVjdCB0aGF0IGV2ZW50LlxuICAgICAgLy8gU28sIGRvaW5nIHRoZSBmb2xsb3dpbmcgZm9yICgxKSBkb2VzIG5vIGhhcm0uXG4gICAgICBjb25zdCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gdGhpc1xuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lKSwgcXVlcnkgfSksXG4gICAgICAgIGdldFVSTCgpXG4gICAgICApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCB7IHVybCwgYXMsIG9wdGlvbnMsIF9fTiB9ID0gZS5zdGF0ZVxuICAgIGlmICghX19OKSB7XG4gICAgICAvLyB0aGlzIGhpc3Rvcnkgc3RhdGUgd2Fzbid0IGNyZWF0ZWQgYnkgbmV4dC5qcyBzbyBpdCBjYW4gYmUgaWdub3JlZFxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgLy8gTWFrZSBzdXJlIHdlIGRvbid0IHJlLXJlbmRlciBvbiBpbml0aWFsIGxvYWQsXG4gICAgLy8gY2FuIGJlIGNhdXNlZCBieSBuYXZpZ2F0aW5nIGJhY2sgZnJvbSBhbiBleHRlcm5hbCBzaXRlXG4gICAgaWYgKHRoaXMuaXNTc3IgJiYgYXMgPT09IHRoaXMuYXNQYXRoICYmIHBhdGhuYW1lID09PSB0aGlzLnBhdGhuYW1lKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgZG93bnN0cmVhbSBhcHBsaWNhdGlvbiByZXR1cm5zIGZhbHN5LCByZXR1cm4uXG4gICAgLy8gVGhleSB3aWxsIHRoZW4gYmUgcmVzcG9uc2libGUgZm9yIGhhbmRsaW5nIHRoZSBldmVudC5cbiAgICBpZiAodGhpcy5fYnBzICYmICF0aGlzLl9icHMoZS5zdGF0ZSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAodHlwZW9mIHVybCA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIGFzID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgJ2Bwb3BzdGF0ZWAgZXZlbnQgdHJpZ2dlcmVkIGJ1dCBgZXZlbnQuc3RhdGVgIGRpZCBub3QgaGF2ZSBgdXJsYCBvciBgYXNgIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL3BvcHN0YXRlLXN0YXRlLWVtcHR5J1xuICAgICAgICApXG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgdXBkYXRlKHJvdXRlOiBzdHJpbmcsIG1vZDogYW55KSB7XG4gICAgY29uc3QgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlID0gbW9kLmRlZmF1bHQgfHwgbW9kXG4gICAgY29uc3QgZGF0YSA9IHRoaXMuY29tcG9uZW50c1tyb3V0ZV1cbiAgICBpZiAoIWRhdGEpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgQ2Fubm90IHVwZGF0ZSB1bmF2YWlsYWJsZSByb3V0ZTogJHtyb3V0ZX1gKVxuICAgIH1cblxuICAgIGNvbnN0IG5ld0RhdGEgPSBPYmplY3QuYXNzaWduKHt9LCBkYXRhLCB7XG4gICAgICBDb21wb25lbnQsXG4gICAgICBfX05fU1NHOiBtb2QuX19OX1NTRyxcbiAgICAgIF9fTl9TU1A6IG1vZC5fX05fU1NQLFxuICAgIH0pXG4gICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IG5ld0RhdGFcblxuICAgIC8vIHBhZ2VzL19hcHAuanMgdXBkYXRlZFxuICAgIGlmIChyb3V0ZSA9PT0gJy9fYXBwJykge1xuICAgICAgdGhpcy5ub3RpZnkodGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKHJvdXRlID09PSB0aGlzLnJvdXRlKSB7XG4gICAgICB0aGlzLm5vdGlmeShuZXdEYXRhKVxuICAgIH1cbiAgfVxuXG4gIHJlbG9hZCgpOiB2b2lkIHtcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcbiAgfVxuXG4gIC8qKlxuICAgKiBHbyBiYWNrIGluIGhpc3RvcnlcbiAgICovXG4gIGJhY2soKSB7XG4gICAgd2luZG93Lmhpc3RvcnkuYmFjaygpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcHVzaFN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHB1c2godXJsOiBVcmwsIGFzOiBVcmwgPSB1cmwsIG9wdGlvbnMgPSB7fSkge1xuICAgIDsoeyB1cmwsIGFzIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpXG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdwdXNoU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHJlcGxhY2VTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICByZXBsYWNlKHVybDogVXJsLCBhczogVXJsID0gdXJsLCBvcHRpb25zID0ge30pIHtcbiAgICA7KHsgdXJsLCBhcyB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKVxuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIGFzeW5jIGNoYW5nZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zOiBhbnlcbiAgKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgaWYgKCFvcHRpb25zLl9oKSB7XG4gICAgICB0aGlzLmlzU3NyID0gZmFsc2VcbiAgICB9XG4gICAgLy8gbWFya2luZyByb3V0ZSBjaGFuZ2VzIGFzIGEgbmF2aWdhdGlvbiBzdGFydCBlbnRyeVxuICAgIGlmIChTVCkge1xuICAgICAgcGVyZm9ybWFuY2UubWFyaygncm91dGVDaGFuZ2UnKVxuICAgIH1cblxuICAgIC8vIEFkZCB0aGUgZW5kaW5nIHNsYXNoIHRvIHRoZSBwYXRocy4gU28sIHdlIGNhbiBzZXJ2ZSB0aGVcbiAgICAvLyBcIjxwYWdlPi9pbmRleC5odG1sXCIgZGlyZWN0bHkgZm9yIHRoZSBTU1IgcGFnZS5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0VYUE9SVF9UUkFJTElOR19TTEFTSCkge1xuICAgICAgY29uc3QgcmV3cml0ZVVybEZvck5leHRFeHBvcnQgPSByZXF1aXJlKCcuL3Jld3JpdGUtdXJsLWZvci1leHBvcnQnKVxuICAgICAgICAucmV3cml0ZVVybEZvck5leHRFeHBvcnRcbiAgICAgIC8vIEB0cy1pZ25vcmUgdGhpcyBpcyB0ZW1wb3JhcmlseSBnbG9iYWwgKGF0dGFjaGVkIHRvIHdpbmRvdylcbiAgICAgIGlmIChfX05FWFRfREFUQV9fLm5leHRFeHBvcnQpIHtcbiAgICAgICAgYXMgPSByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydChhcylcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy5faW5GbGlnaHRSb3V0ZSkge1xuICAgICAgdGhpcy5hYm9ydENvbXBvbmVudExvYWQodGhpcy5faW5GbGlnaHRSb3V0ZSlcbiAgICB9XG5cbiAgICBjb25zdCBjbGVhbmVkQXMgPSBkZWxCYXNlUGF0aChhcylcbiAgICB0aGlzLl9pbkZsaWdodFJvdXRlID0gYXNcblxuICAgIC8vIElmIHRoZSB1cmwgY2hhbmdlIGlzIG9ubHkgcmVsYXRlZCB0byBhIGhhc2ggY2hhbmdlXG4gICAgLy8gV2Ugc2hvdWxkIG5vdCBwcm9jZWVkLiBXZSBzaG91bGQgb25seSBjaGFuZ2UgdGhlIHN0YXRlLlxuXG4gICAgLy8gV0FSTklORzogYF9oYCBpcyBhbiBpbnRlcm5hbCBvcHRpb24gZm9yIGhhbmRpbmcgTmV4dC5qcyBjbGllbnQtc2lkZVxuICAgIC8vIGh5ZHJhdGlvbi4gWW91ciBhcHAgc2hvdWxkIF9uZXZlcl8gdXNlIHRoaXMgcHJvcGVydHkuIEl0IG1heSBjaGFuZ2UgYXRcbiAgICAvLyBhbnkgdGltZSB3aXRob3V0IG5vdGljZS5cbiAgICBpZiAoIW9wdGlvbnMuX2ggJiYgdGhpcy5vbmx5QUhhc2hDaGFuZ2UoY2xlYW5lZEFzKSkge1xuICAgICAgdGhpcy5hc1BhdGggPSBjbGVhbmVkQXNcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZVN0YXJ0JywgYXMpXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucylcbiAgICAgIHRoaXMuc2Nyb2xsVG9IYXNoKGNsZWFuZWRBcylcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZUNvbXBsZXRlJywgYXMpXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIGNvbnN0IHBhcnNlZCA9IHRyeVBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgaWYgKCFwYXJzZWQpIHJldHVybiBmYWxzZVxuXG4gICAgbGV0IHsgcGF0aG5hbWUsIHNlYXJjaFBhcmFtcyB9ID0gcGFyc2VkXG4gICAgY29uc3QgcXVlcnkgPSBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KHNlYXJjaFBhcmFtcylcblxuICAgIC8vIHVybCBhbmQgYXMgc2hvdWxkIGFsd2F5cyBiZSBwcmVmaXhlZCB3aXRoIGJhc2VQYXRoIGJ5IHRoaXNcbiAgICAvLyBwb2ludCBieSBlaXRoZXIgbmV4dC9saW5rIG9yIHJvdXRlci5wdXNoL3JlcGxhY2Ugc28gc3RyaXAgdGhlXG4gICAgLy8gYmFzZVBhdGggZnJvbSB0aGUgcGF0aG5hbWUgdG8gbWF0Y2ggdGhlIHBhZ2VzIGRpciAxLXRvLTFcbiAgICBwYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICA/IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKGRlbEJhc2VQYXRoKHBhdGhuYW1lKSlcbiAgICAgIDogcGF0aG5hbWVcblxuICAgIC8vIElmIGFza2VkIHRvIGNoYW5nZSB0aGUgY3VycmVudCBVUkwgd2Ugc2hvdWxkIHJlbG9hZCB0aGUgY3VycmVudCBwYWdlXG4gICAgLy8gKG5vdCBsb2NhdGlvbi5yZWxvYWQoKSBidXQgcmVsb2FkIGdldEluaXRpYWxQcm9wcyBhbmQgb3RoZXIgTmV4dC5qcyBzdHVmZnMpXG4gICAgLy8gV2UgYWxzbyBuZWVkIHRvIHNldCB0aGUgbWV0aG9kID0gcmVwbGFjZVN0YXRlIGFsd2F5c1xuICAgIC8vIGFzIHRoaXMgc2hvdWxkIG5vdCBnbyBpbnRvIHRoZSBoaXN0b3J5IChUaGF0J3MgaG93IGJyb3dzZXJzIHdvcmspXG4gICAgLy8gV2Ugc2hvdWxkIGNvbXBhcmUgdGhlIG5ldyBhc1BhdGggdG8gdGhlIGN1cnJlbnQgYXNQYXRoLCBub3QgdGhlIHVybFxuICAgIGlmICghdGhpcy51cmxJc05ldyhjbGVhbmVkQXMpKSB7XG4gICAgICBtZXRob2QgPSAncmVwbGFjZVN0YXRlJ1xuICAgIH1cblxuICAgIGNvbnN0IHJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG4gICAgY29uc3QgeyBzaGFsbG93ID0gZmFsc2UgfSA9IG9wdGlvbnNcblxuICAgIGlmIChpc0R5bmFtaWNSb3V0ZShyb3V0ZSkpIHtcbiAgICAgIGNvbnN0IHsgcGF0aG5hbWU6IGFzUGF0aG5hbWUgfSA9IHBhcnNlUmVsYXRpdmVVcmwoY2xlYW5lZEFzKVxuICAgICAgY29uc3Qgcm91dGVSZWdleCA9IGdldFJvdXRlUmVnZXgocm91dGUpXG4gICAgICBjb25zdCByb3V0ZU1hdGNoID0gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXgpKGFzUGF0aG5hbWUpXG4gICAgICBpZiAoIXJvdXRlTWF0Y2gpIHtcbiAgICAgICAgY29uc3QgbWlzc2luZ1BhcmFtcyA9IE9iamVjdC5rZXlzKHJvdXRlUmVnZXguZ3JvdXBzKS5maWx0ZXIoXG4gICAgICAgICAgKHBhcmFtKSA9PiAhcXVlcnlbcGFyYW1dXG4gICAgICAgIClcblxuICAgICAgICBpZiAobWlzc2luZ1BhcmFtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgICAgYE1pc21hdGNoaW5nIFxcYGFzXFxgIGFuZCBcXGBocmVmXFxgIGZhaWxlZCB0byBtYW51YWxseSBwcm92aWRlIGAgK1xuICAgICAgICAgICAgICAgIGB0aGUgcGFyYW1zOiAke21pc3NpbmdQYXJhbXMuam9pbihcbiAgICAgICAgICAgICAgICAgICcsICdcbiAgICAgICAgICAgICAgICApfSBpbiB0aGUgXFxgaHJlZlxcYCdzIFxcYHF1ZXJ5XFxgYFxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIGBUaGUgcHJvdmlkZWQgXFxgYXNcXGAgdmFsdWUgKCR7YXNQYXRobmFtZX0pIGlzIGluY29tcGF0aWJsZSB3aXRoIHRoZSBcXGBocmVmXFxgIHZhbHVlICgke3JvdXRlfSkuIGAgK1xuICAgICAgICAgICAgICBgUmVhZCBtb3JlOiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9pbmNvbXBhdGlibGUtaHJlZi1hc2BcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIE1lcmdlIHBhcmFtcyBpbnRvIGBxdWVyeWAsIG92ZXJ3cml0aW5nIGFueSBzcGVjaWZpZWQgaW4gc2VhcmNoXG4gICAgICAgIE9iamVjdC5hc3NpZ24ocXVlcnksIHJvdXRlTWF0Y2gpXG4gICAgICB9XG4gICAgfVxuXG4gICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZVN0YXJ0JywgYXMpXG5cbiAgICB0cnkge1xuICAgICAgY29uc3Qgcm91dGVJbmZvID0gYXdhaXQgdGhpcy5nZXRSb3V0ZUluZm8oXG4gICAgICAgIHJvdXRlLFxuICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIGFzLFxuICAgICAgICBzaGFsbG93XG4gICAgICApXG4gICAgICBjb25zdCB7IGVycm9yIH0gPSByb3V0ZUluZm9cblxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdiZWZvcmVIaXN0b3J5Q2hhbmdlJywgYXMpXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucylcblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgYXBwQ29tcDogYW55ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudFxuICAgICAgICA7KHdpbmRvdyBhcyBhbnkpLm5leHQuaXNQcmVyZW5kZXJlZCA9XG4gICAgICAgICAgYXBwQ29tcC5nZXRJbml0aWFsUHJvcHMgPT09IGFwcENvbXAub3JpZ0dldEluaXRpYWxQcm9wcyAmJlxuICAgICAgICAgICEocm91dGVJbmZvLkNvbXBvbmVudCBhcyBhbnkpLmdldEluaXRpYWxQcm9wc1xuICAgICAgfVxuXG4gICAgICBhd2FpdCB0aGlzLnNldChyb3V0ZSwgcGF0aG5hbWUhLCBxdWVyeSwgY2xlYW5lZEFzLCByb3V0ZUluZm8pXG5cbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnJvciwgY2xlYW5lZEFzKVxuICAgICAgICB0aHJvdyBlcnJvclxuICAgICAgfVxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24gJiYgJ19OX1gnIGluIG9wdGlvbnMpIHtcbiAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8ob3B0aW9ucy5fTl9YLCBvcHRpb25zLl9OX1kpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VDb21wbGV0ZScsIGFzKVxuXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH1cblxuICBjaGFuZ2VTdGF0ZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zID0ge31cbiAgKTogdm9pZCB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5IGlzIG5vdCBhdmFpbGFibGUuYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnlbbWV0aG9kXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkuJHttZXRob2R9IGlzIG5vdCBhdmFpbGFibGVgKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobWV0aG9kICE9PSAncHVzaFN0YXRlJyB8fCBnZXRVUkwoKSAhPT0gYXMpIHtcbiAgICAgIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0oXG4gICAgICAgIHtcbiAgICAgICAgICB1cmwsXG4gICAgICAgICAgYXMsXG4gICAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgICBfX046IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIC8vIE1vc3QgYnJvd3NlcnMgY3VycmVudGx5IGlnbm9yZXMgdGhpcyBwYXJhbWV0ZXIsIGFsdGhvdWdoIHRoZXkgbWF5IHVzZSBpdCBpbiB0aGUgZnV0dXJlLlxuICAgICAgICAvLyBQYXNzaW5nIHRoZSBlbXB0eSBzdHJpbmcgaGVyZSBzaG91bGQgYmUgc2FmZSBhZ2FpbnN0IGZ1dHVyZSBjaGFuZ2VzIHRvIHRoZSBtZXRob2QuXG4gICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IaXN0b3J5L3JlcGxhY2VTdGF0ZVxuICAgICAgICAnJyxcbiAgICAgICAgYXNcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBhc3luYyBoYW5kbGVSb3V0ZUluZm9FcnJvcihcbiAgICBlcnI6IEVycm9yICYgeyBjb2RlOiBhbnk7IGNhbmNlbGxlZDogYm9vbGVhbiB9LFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IGFueSxcbiAgICBhczogc3RyaW5nLFxuICAgIGxvYWRFcnJvckZhaWw/OiBib29sZWFuXG4gICk6IFByb21pc2U8Um91dGVJbmZvPiB7XG4gICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgIC8vIGJ1YmJsZSB1cCBjYW5jZWxsYXRpb24gZXJyb3JzXG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG5cbiAgICBpZiAoZXJyLmNvZGUgPT09ICdQQUdFX0xPQURfRVJST1InIHx8IGxvYWRFcnJvckZhaWwpIHtcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVyciwgYXMpXG5cbiAgICAgIC8vIElmIHdlIGNhbid0IGxvYWQgdGhlIHBhZ2UgaXQgY291bGQgYmUgb25lIG9mIGZvbGxvd2luZyByZWFzb25zXG4gICAgICAvLyAgMS4gUGFnZSBkb2Vzbid0IGV4aXN0c1xuICAgICAgLy8gIDIuIFBhZ2UgZG9lcyBleGlzdCBpbiBhIGRpZmZlcmVudCB6b25lXG4gICAgICAvLyAgMy4gSW50ZXJuYWwgZXJyb3Igd2hpbGUgbG9hZGluZyB0aGUgcGFnZVxuXG4gICAgICAvLyBTbywgZG9pbmcgYSBoYXJkIHJlbG9hZCBpcyB0aGUgcHJvcGVyIHdheSB0byBkZWFsIHdpdGggdGhpcy5cbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXNcblxuICAgICAgLy8gQ2hhbmdpbmcgdGhlIFVSTCBkb2Vzbid0IGJsb2NrIGV4ZWN1dGluZyB0aGUgY3VycmVudCBjb2RlIHBhdGguXG4gICAgICAvLyBTbyBsZXQncyB0aHJvdyBhIGNhbmNlbGxhdGlvbiBlcnJvciBzdG9wIHRoZSByb3V0aW5nIGxvZ2ljLlxuICAgICAgdGhyb3cgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpXG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHsgcGFnZTogQ29tcG9uZW50IH0gPSBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KCcvX2Vycm9yJylcbiAgICAgIGNvbnN0IHJvdXRlSW5mbzogUm91dGVJbmZvID0geyBDb21wb25lbnQsIGVyciwgZXJyb3I6IGVyciB9XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IGF3YWl0IHRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwge1xuICAgICAgICAgIGVycixcbiAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICBxdWVyeSxcbiAgICAgICAgfSBhcyBhbnkpXG4gICAgICB9IGNhdGNoIChnaXBFcnIpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gZXJyb3IgcGFnZSBgZ2V0SW5pdGlhbFByb3BzYDogJywgZ2lwRXJyKVxuICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSB7fVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gcm91dGVJbmZvXG4gICAgfSBjYXRjaCAocm91dGVJbmZvRXJyKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihyb3V0ZUluZm9FcnIsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHRydWUpXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZ2V0Um91dGVJbmZvKFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogYW55LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgc2hhbGxvdzogYm9vbGVhbiA9IGZhbHNlXG4gICk6IFByb21pc2U8Um91dGVJbmZvPiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGNhY2hlZFJvdXRlSW5mbyA9IHRoaXMuY29tcG9uZW50c1tyb3V0ZV1cblxuICAgICAgaWYgKHNoYWxsb3cgJiYgY2FjaGVkUm91dGVJbmZvICYmIHRoaXMucm91dGUgPT09IHJvdXRlKSB7XG4gICAgICAgIHJldHVybiBjYWNoZWRSb3V0ZUluZm9cbiAgICAgIH1cblxuICAgICAgY29uc3Qgcm91dGVJbmZvID0gY2FjaGVkUm91dGVJbmZvXG4gICAgICAgID8gY2FjaGVkUm91dGVJbmZvXG4gICAgICAgIDogYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChyb3V0ZSkudGhlbihcbiAgICAgICAgICAgIChyZXMpID0+XG4gICAgICAgICAgICAgICh7XG4gICAgICAgICAgICAgICAgQ29tcG9uZW50OiByZXMucGFnZSxcbiAgICAgICAgICAgICAgICBfX05fU1NHOiByZXMubW9kLl9fTl9TU0csXG4gICAgICAgICAgICAgICAgX19OX1NTUDogcmVzLm1vZC5fX05fU1NQLFxuICAgICAgICAgICAgICB9IGFzIFJvdXRlSW5mbylcbiAgICAgICAgICApXG5cbiAgICAgIGNvbnN0IHsgQ29tcG9uZW50LCBfX05fU1NHLCBfX05fU1NQIH0gPSByb3V0ZUluZm9cblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgeyBpc1ZhbGlkRWxlbWVudFR5cGUgfSA9IHJlcXVpcmUoJ3JlYWN0LWlzJylcbiAgICAgICAgaWYgKCFpc1ZhbGlkRWxlbWVudFR5cGUoQ29tcG9uZW50KSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIGBUaGUgZGVmYXVsdCBleHBvcnQgaXMgbm90IGEgUmVhY3QgQ29tcG9uZW50IGluIHBhZ2U6IFwiJHtwYXRobmFtZX1cImBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGV0IGRhdGFIcmVmOiBzdHJpbmcgfCB1bmRlZmluZWRcblxuICAgICAgaWYgKF9fTl9TU0cgfHwgX19OX1NTUCkge1xuICAgICAgICBkYXRhSHJlZiA9IHRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZihcbiAgICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lLCBxdWVyeSB9KSxcbiAgICAgICAgICBhcyxcbiAgICAgICAgICBfX05fU1NHXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgY29uc3QgcHJvcHMgPSBhd2FpdCB0aGlzLl9nZXREYXRhPFJvdXRlSW5mbz4oKCkgPT5cbiAgICAgICAgX19OX1NTR1xuICAgICAgICAgID8gdGhpcy5fZ2V0U3RhdGljRGF0YShkYXRhSHJlZiEpXG4gICAgICAgICAgOiBfX05fU1NQXG4gICAgICAgICAgPyB0aGlzLl9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmISlcbiAgICAgICAgICA6IHRoaXMuZ2V0SW5pdGlhbFByb3BzKFxuICAgICAgICAgICAgICBDb21wb25lbnQsXG4gICAgICAgICAgICAgIC8vIHdlIHByb3ZpZGUgQXBwVHJlZSBsYXRlciBzbyB0aGlzIG5lZWRzIHRvIGJlIGBhbnlgXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICBhc1BhdGg6IGFzLFxuICAgICAgICAgICAgICB9IGFzIGFueVxuICAgICAgICAgICAgKVxuICAgICAgKVxuICAgICAgcm91dGVJbmZvLnByb3BzID0gcHJvcHNcbiAgICAgIHRoaXMuY29tcG9uZW50c1tyb3V0ZV0gPSByb3V0ZUluZm9cbiAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKGVyciwgcGF0aG5hbWUsIHF1ZXJ5LCBhcylcbiAgICB9XG4gIH1cblxuICBzZXQoXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBhbnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBkYXRhOiBSb3V0ZUluZm9cbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gZmFsc2VcblxuICAgIHRoaXMucm91dGUgPSByb3V0ZVxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIHRoaXMuYXNQYXRoID0gYXNcbiAgICByZXR1cm4gdGhpcy5ub3RpZnkoZGF0YSlcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayB0byBleGVjdXRlIGJlZm9yZSByZXBsYWNpbmcgcm91dGVyIHN0YXRlXG4gICAqIEBwYXJhbSBjYiBjYWxsYmFjayB0byBiZSBleGVjdXRlZFxuICAgKi9cbiAgYmVmb3JlUG9wU3RhdGUoY2I6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2spIHtcbiAgICB0aGlzLl9icHMgPSBjYlxuICB9XG5cbiAgb25seUFIYXNoQ2hhbmdlKGFzOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBpZiAoIXRoaXMuYXNQYXRoKSByZXR1cm4gZmFsc2VcbiAgICBjb25zdCBbb2xkVXJsTm9IYXNoLCBvbGRIYXNoXSA9IHRoaXMuYXNQYXRoLnNwbGl0KCcjJylcbiAgICBjb25zdCBbbmV3VXJsTm9IYXNoLCBuZXdIYXNoXSA9IGFzLnNwbGl0KCcjJylcblxuICAgIC8vIE1ha2VzIHN1cmUgd2Ugc2Nyb2xsIHRvIHRoZSBwcm92aWRlZCBoYXNoIGlmIHRoZSB1cmwvaGFzaCBhcmUgdGhlIHNhbWVcbiAgICBpZiAobmV3SGFzaCAmJiBvbGRVcmxOb0hhc2ggPT09IG5ld1VybE5vSGFzaCAmJiBvbGRIYXNoID09PSBuZXdIYXNoKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSB1cmxzIGFyZSBjaGFuZ2UsIHRoZXJlJ3MgbW9yZSB0aGFuIGEgaGFzaCBjaGFuZ2VcbiAgICBpZiAob2xkVXJsTm9IYXNoICE9PSBuZXdVcmxOb0hhc2gpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSBoYXNoIGhhcyBjaGFuZ2VkLCB0aGVuIGl0J3MgYSBoYXNoIG9ubHkgY2hhbmdlLlxuICAgIC8vIFRoaXMgY2hlY2sgaXMgbmVjZXNzYXJ5IHRvIGhhbmRsZSBib3RoIHRoZSBlbnRlciBhbmRcbiAgICAvLyBsZWF2ZSBoYXNoID09PSAnJyBjYXNlcy4gVGhlIGlkZW50aXR5IGNhc2UgZmFsbHMgdGhyb3VnaFxuICAgIC8vIGFuZCBpcyB0cmVhdGVkIGFzIGEgbmV4dCByZWxvYWQuXG4gICAgcmV0dXJuIG9sZEhhc2ggIT09IG5ld0hhc2hcbiAgfVxuXG4gIHNjcm9sbFRvSGFzaChhczogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgWywgaGFzaF0gPSBhcy5zcGxpdCgnIycpXG4gICAgLy8gU2Nyb2xsIHRvIHRvcCBpZiB0aGUgaGFzaCBpcyBqdXN0IGAjYCB3aXRoIG5vIHZhbHVlXG4gICAgaWYgKGhhc2ggPT09ICcnKSB7XG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIEZpcnN0IHdlIGNoZWNrIGlmIHRoZSBlbGVtZW50IGJ5IGlkIGlzIGZvdW5kXG4gICAgY29uc3QgaWRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhhc2gpXG4gICAgaWYgKGlkRWwpIHtcbiAgICAgIGlkRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIC8vIElmIHRoZXJlJ3Mgbm8gZWxlbWVudCB3aXRoIHRoZSBpZCwgd2UgY2hlY2sgdGhlIGBuYW1lYCBwcm9wZXJ0eVxuICAgIC8vIFRvIG1pcnJvciBicm93c2Vyc1xuICAgIGNvbnN0IG5hbWVFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKGhhc2gpWzBdXG4gICAgaWYgKG5hbWVFbCkge1xuICAgICAgbmFtZUVsLnNjcm9sbEludG9WaWV3KClcbiAgICB9XG4gIH1cblxuICB1cmxJc05ldyhhc1BhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmFzUGF0aCAhPT0gYXNQYXRoXG4gIH1cblxuICAvKipcbiAgICogUHJlZmV0Y2ggcGFnZSBjb2RlLCB5b3UgbWF5IHdhaXQgZm9yIHRoZSBkYXRhIGR1cmluZyBwYWdlIHJlbmRlcmluZy5cbiAgICogVGhpcyBmZWF0dXJlIG9ubHkgd29ya3MgaW4gcHJvZHVjdGlvbiFcbiAgICogQHBhcmFtIHVybCB0aGUgaHJlZiBvZiBwcmVmZXRjaGVkIHBhZ2VcbiAgICogQHBhcmFtIGFzUGF0aCB0aGUgYXMgcGF0aCBvZiB0aGUgcHJlZmV0Y2hlZCBwYWdlXG4gICAqL1xuICBhc3luYyBwcmVmZXRjaChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhc1BhdGg6IHN0cmluZyA9IHVybCxcbiAgICBvcHRpb25zOiBQcmVmZXRjaE9wdGlvbnMgPSB7fVxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCBwYXJzZWQgPSB0cnlQYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIGlmICghcGFyc2VkKSByZXR1cm5cblxuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHBhcnNlZFxuXG4gICAgLy8gUHJlZmV0Y2ggaXMgbm90IHN1cHBvcnRlZCBpbiBkZXZlbG9wbWVudCBtb2RlIGJlY2F1c2UgaXQgd291bGQgdHJpZ2dlciBvbi1kZW1hbmQtZW50cmllc1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuICAgIGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgIHRoaXMucGFnZUxvYWRlci5wcmVmZXRjaERhdGEodXJsLCBhc1BhdGgpLFxuICAgICAgdGhpcy5wYWdlTG9hZGVyW29wdGlvbnMucHJpb3JpdHkgPyAnbG9hZFBhZ2UnIDogJ3ByZWZldGNoJ10ocm91dGUpLFxuICAgIF0pXG4gIH1cblxuICBhc3luYyBmZXRjaENvbXBvbmVudChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTxDb21wb25lbnRSZXM+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAodGhpcy5jbGMgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfSlcblxuICAgIGNvbnN0IGNvbXBvbmVudFJlc3VsdCA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5sb2FkUGFnZShyb3V0ZSlcblxuICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgIGNvbnN0IGVycm9yOiBhbnkgPSBuZXcgRXJyb3IoXG4gICAgICAgIGBBYm9ydCBmZXRjaGluZyBjb21wb25lbnQgZm9yIHJvdXRlOiBcIiR7cm91dGV9XCJgXG4gICAgICApXG4gICAgICBlcnJvci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICB0aHJvdyBlcnJvclxuICAgIH1cblxuICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcG9uZW50UmVzdWx0XG4gIH1cblxuICBfZ2V0RGF0YTxUPihmbjogKCkgPT4gUHJvbWlzZTxUPik6IFByb21pc2U8VD4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9XG4gICAgdGhpcy5jbGMgPSBjYW5jZWxcbiAgICByZXR1cm4gZm4oKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICAgIH1cblxuICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICBjb25zdCBlcnI6IGFueSA9IG5ldyBFcnJvcignTG9hZGluZyBpbml0aWFsIHByb3BzIGNhbmNlbGxlZCcpXG4gICAgICAgIGVyci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U3RhdGljRGF0YShkYXRhSHJlZjogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICBjb25zdCB7IGhyZWY6IGNhY2hlS2V5IH0gPSBuZXcgVVJMKGRhdGFIcmVmLCB3aW5kb3cubG9jYXRpb24uaHJlZilcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyAmJiB0aGlzLnNkY1tjYWNoZUtleV0pIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5zZGNbY2FjaGVLZXldKVxuICAgIH1cbiAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcikudGhlbigoZGF0YSkgPT4ge1xuICAgICAgdGhpcy5zZGNbY2FjaGVLZXldID0gZGF0YVxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICB9XG5cbiAgX2dldFNlcnZlckRhdGEoZGF0YUhyZWY6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiB7XG4gICAgcmV0dXJuIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpXG4gIH1cblxuICBnZXRJbml0aWFsUHJvcHMoXG4gICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlLFxuICAgIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gICk6IFByb21pc2U8YW55PiB7XG4gICAgY29uc3QgeyBDb21wb25lbnQ6IEFwcCB9ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddXG4gICAgY29uc3QgQXBwVHJlZSA9IHRoaXMuX3dyYXBBcHAoQXBwKVxuICAgIGN0eC5BcHBUcmVlID0gQXBwVHJlZVxuICAgIHJldHVybiBsb2FkR2V0SW5pdGlhbFByb3BzPEFwcENvbnRleHRUeXBlPFJvdXRlcj4+KEFwcCwge1xuICAgICAgQXBwVHJlZSxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIHJvdXRlcjogdGhpcyxcbiAgICAgIGN0eCxcbiAgICB9KVxuICB9XG5cbiAgYWJvcnRDb21wb25lbnRMb2FkKGFzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jbGMpIHtcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSwgYXMpXG4gICAgICB0aGlzLmNsYygpXG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG4gIH1cblxuICBub3RpZnkoZGF0YTogUm91dGVJbmZvKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuc3ViKGRhdGEsIHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQpXG4gIH1cbn1cbiIsIi8vIEZvcm1hdCBmdW5jdGlvbiBtb2RpZmllZCBmcm9tIG5vZGVqc1xuLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IGVuY29kZSBhcyBlbmNvZGVRdWVyeXN0cmluZyB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuXG5jb25zdCBzbGFzaGVkUHJvdG9jb2xzID0gL2h0dHBzP3xmdHB8Z29waGVyfGZpbGUvXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRVcmwodXJsT2JqOiBVcmxPYmplY3QpIHtcbiAgbGV0IHsgYXV0aCwgaG9zdG5hbWUgfSA9IHVybE9ialxuICBsZXQgcHJvdG9jb2wgPSB1cmxPYmoucHJvdG9jb2wgfHwgJydcbiAgbGV0IHBhdGhuYW1lID0gdXJsT2JqLnBhdGhuYW1lIHx8ICcnXG4gIGxldCBoYXNoID0gdXJsT2JqLmhhc2ggfHwgJydcbiAgbGV0IHF1ZXJ5ID0gdXJsT2JqLnF1ZXJ5IHx8ICcnXG4gIGxldCBob3N0OiBzdHJpbmcgfCBmYWxzZSA9IGZhbHNlXG5cbiAgYXV0aCA9IGF1dGggPyBlbmNvZGVVUklDb21wb25lbnQoYXV0aCkucmVwbGFjZSgvJTNBL2ksICc6JykgKyAnQCcgOiAnJ1xuXG4gIGlmICh1cmxPYmouaG9zdCkge1xuICAgIGhvc3QgPSBhdXRoICsgdXJsT2JqLmhvc3RcbiAgfSBlbHNlIGlmIChob3N0bmFtZSkge1xuICAgIGhvc3QgPSBhdXRoICsgKH5ob3N0bmFtZS5pbmRleE9mKCc6JykgPyBgWyR7aG9zdG5hbWV9XWAgOiBob3N0bmFtZSlcbiAgICBpZiAodXJsT2JqLnBvcnQpIHtcbiAgICAgIGhvc3QgKz0gJzonICsgdXJsT2JqLnBvcnRcbiAgICB9XG4gIH1cblxuICBpZiAocXVlcnkgJiYgdHlwZW9mIHF1ZXJ5ID09PSAnb2JqZWN0Jykge1xuICAgIC8vIHF1ZXJ5ID0gJycgKyBuZXcgVVJMU2VhcmNoUGFyYW1zKHF1ZXJ5KTtcbiAgICBxdWVyeSA9IGVuY29kZVF1ZXJ5c3RyaW5nKHF1ZXJ5KVxuICB9XG5cbiAgbGV0IHNlYXJjaCA9IHVybE9iai5zZWFyY2ggfHwgKHF1ZXJ5ICYmIGA/JHtxdWVyeX1gKSB8fCAnJ1xuXG4gIGlmIChwcm90b2NvbCAmJiBwcm90b2NvbC5zdWJzdHIoLTEpICE9PSAnOicpIHByb3RvY29sICs9ICc6J1xuXG4gIGlmIChcbiAgICB1cmxPYmouc2xhc2hlcyB8fFxuICAgICgoIXByb3RvY29sIHx8IHNsYXNoZWRQcm90b2NvbHMudGVzdChwcm90b2NvbCkpICYmIGhvc3QgIT09IGZhbHNlKVxuICApIHtcbiAgICBob3N0ID0gJy8vJyArIChob3N0IHx8ICcnKVxuICAgIGlmIChwYXRobmFtZSAmJiBwYXRobmFtZVswXSAhPT0gJy8nKSBwYXRobmFtZSA9ICcvJyArIHBhdGhuYW1lXG4gIH0gZWxzZSBpZiAoIWhvc3QpIHtcbiAgICBob3N0ID0gJydcbiAgfVxuXG4gIGlmIChoYXNoICYmIGhhc2hbMF0gIT09ICcjJykgaGFzaCA9ICcjJyArIGhhc2hcbiAgaWYgKHNlYXJjaCAmJiBzZWFyY2hbMF0gIT09ICc/Jykgc2VhcmNoID0gJz8nICsgc2VhcmNoXG5cbiAgcGF0aG5hbWUgPSBwYXRobmFtZS5yZXBsYWNlKC9bPyNdL2csIGVuY29kZVVSSUNvbXBvbmVudClcbiAgc2VhcmNoID0gc2VhcmNoLnJlcGxhY2UoJyMnLCAnJTIzJylcblxuICByZXR1cm4gYCR7cHJvdG9jb2x9JHtob3N0fSR7cGF0aG5hbWV9JHtzZWFyY2h9JHtoYXNofWBcbn1cbiIsIi8vIElkZW50aWZ5IC9bcGFyYW1dLyBpbiByb3V0ZSBzdHJpbmdcbmNvbnN0IFRFU1RfUk9VVEUgPSAvXFwvXFxbW14vXSs/XFxdKD89XFwvfCQpL1xuXG5leHBvcnQgZnVuY3Rpb24gaXNEeW5hbWljUm91dGUocm91dGU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gVEVTVF9ST1VURS50ZXN0KHJvdXRlKVxufVxuIiwiY29uc3QgRFVNTVlfQkFTRSA9IG5ldyBVUkwoJ2h0dHA6Ly9uJylcblxuLyoqXG4gKiBQYXJzZXMgcGF0aC1yZWxhdGl2ZSB1cmxzIChlLmcuIGAvaGVsbG8vd29ybGQ/Zm9vPWJhcmApLiBJZiB1cmwgaXNuJ3QgcGF0aC1yZWxhdGl2ZVxuICogKGUuZy4gYC4vaGVsbG9gKSB0aGVuIGF0IGxlYXN0IGJhc2UgbXVzdCBiZS5cbiAqIEFic29sdXRlIHVybHMgYXJlIHJlamVjdGVkLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VSZWxhdGl2ZVVybCh1cmw6IHN0cmluZywgYmFzZT86IHN0cmluZykge1xuICBjb25zdCByZXNvbHZlZEJhc2UgPSBiYXNlID8gbmV3IFVSTChiYXNlLCBEVU1NWV9CQVNFKSA6IERVTU1ZX0JBU0VcbiAgY29uc3QgeyBwYXRobmFtZSwgc2VhcmNoUGFyYW1zLCBzZWFyY2gsIGhhc2gsIGhyZWYsIG9yaWdpbiB9ID0gbmV3IFVSTChcbiAgICB1cmwsXG4gICAgcmVzb2x2ZWRCYXNlXG4gIClcbiAgaWYgKG9yaWdpbiAhPT0gRFVNTVlfQkFTRS5vcmlnaW4pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFyaWFudDogaW52YWxpZCByZWxhdGl2ZSBVUkwnKVxuICB9XG4gIHJldHVybiB7XG4gICAgcGF0aG5hbWUsXG4gICAgc2VhcmNoUGFyYW1zLFxuICAgIHNlYXJjaCxcbiAgICBoYXNoLFxuICAgIGhyZWY6IGhyZWYuc2xpY2UoRFVNTVlfQkFTRS5vcmlnaW4ubGVuZ3RoKSxcbiAgfVxufVxuIiwiaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vcm91dGUtcmVnZXgnXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleDogUmV0dXJuVHlwZTx0eXBlb2YgZ2V0Um91dGVSZWdleD4pIHtcbiAgY29uc3QgeyByZSwgZ3JvdXBzIH0gPSByb3V0ZVJlZ2V4XG4gIHJldHVybiAocGF0aG5hbWU6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQpID0+IHtcbiAgICBjb25zdCByb3V0ZU1hdGNoID0gcmUuZXhlYyhwYXRobmFtZSEpXG4gICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBjb25zdCBkZWNvZGUgPSAocGFyYW06IHN0cmluZykgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChwYXJhbSlcbiAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgY29uc3QgZXJyOiBFcnJvciAmIHsgY29kZT86IHN0cmluZyB9ID0gbmV3IEVycm9yKFxuICAgICAgICAgICdmYWlsZWQgdG8gZGVjb2RlIHBhcmFtJ1xuICAgICAgICApXG4gICAgICAgIGVyci5jb2RlID0gJ0RFQ09ERV9GQUlMRUQnXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBwYXJhbXM6IHsgW3BhcmFtTmFtZTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfSA9IHt9XG5cbiAgICBPYmplY3Qua2V5cyhncm91cHMpLmZvckVhY2goKHNsdWdOYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IGcgPSBncm91cHNbc2x1Z05hbWVdXG4gICAgICBjb25zdCBtID0gcm91dGVNYXRjaFtnLnBvc11cbiAgICAgIGlmIChtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcGFyYW1zW3NsdWdOYW1lXSA9IH5tLmluZGV4T2YoJy8nKVxuICAgICAgICAgID8gbS5zcGxpdCgnLycpLm1hcCgoZW50cnkpID0+IGRlY29kZShlbnRyeSkpXG4gICAgICAgICAgOiBnLnJlcGVhdFxuICAgICAgICAgID8gW2RlY29kZShtKV1cbiAgICAgICAgICA6IGRlY29kZShtKVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIHBhcmFtc1xuICB9XG59XG4iLCJpbnRlcmZhY2UgR3JvdXAge1xuICBwb3M6IG51bWJlclxuICByZXBlYXQ6IGJvb2xlYW5cbiAgb3B0aW9uYWw6IGJvb2xlYW5cbn1cblxuLy8gdGhpcyBpc24ndCBpbXBvcnRpbmcgdGhlIGVzY2FwZS1zdHJpbmctcmVnZXggbW9kdWxlXG4vLyB0byByZWR1Y2UgYnl0ZXNcbmZ1bmN0aW9uIGVzY2FwZVJlZ2V4KHN0cjogc3RyaW5nKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvW3xcXFxce30oKVtcXF1eJCsqPy4tXS9nLCAnXFxcXCQmJylcbn1cblxuZnVuY3Rpb24gcGFyc2VQYXJhbWV0ZXIocGFyYW06IHN0cmluZykge1xuICBjb25zdCBvcHRpb25hbCA9IHBhcmFtLnN0YXJ0c1dpdGgoJ1snKSAmJiBwYXJhbS5lbmRzV2l0aCgnXScpXG4gIGlmIChvcHRpb25hbCkge1xuICAgIHBhcmFtID0gcGFyYW0uc2xpY2UoMSwgLTEpXG4gIH1cbiAgY29uc3QgcmVwZWF0ID0gcGFyYW0uc3RhcnRzV2l0aCgnLi4uJylcbiAgaWYgKHJlcGVhdCkge1xuICAgIHBhcmFtID0gcGFyYW0uc2xpY2UoMylcbiAgfVxuICByZXR1cm4geyBrZXk6IHBhcmFtLCByZXBlYXQsIG9wdGlvbmFsIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlUmVnZXgoXG4gIG5vcm1hbGl6ZWRSb3V0ZTogc3RyaW5nXG4pOiB7XG4gIHJlOiBSZWdFeHBcbiAgbmFtZWRSZWdleD86IHN0cmluZ1xuICByb3V0ZUtleXM/OiB7IFtuYW1lZDogc3RyaW5nXTogc3RyaW5nIH1cbiAgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IEdyb3VwIH1cbn0ge1xuICBjb25zdCBzZWdtZW50cyA9IChub3JtYWxpemVkUm91dGUucmVwbGFjZSgvXFwvJC8sICcnKSB8fCAnLycpXG4gICAgLnNsaWNlKDEpXG4gICAgLnNwbGl0KCcvJylcblxuICBjb25zdCBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogR3JvdXAgfSA9IHt9XG4gIGxldCBncm91cEluZGV4ID0gMVxuICBjb25zdCBwYXJhbWV0ZXJpemVkUm91dGUgPSBzZWdtZW50c1xuICAgIC5tYXAoKHNlZ21lbnQpID0+IHtcbiAgICAgIGlmIChzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSAmJiBzZWdtZW50LmVuZHNXaXRoKCddJykpIHtcbiAgICAgICAgY29uc3QgeyBrZXksIG9wdGlvbmFsLCByZXBlYXQgfSA9IHBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwgLTEpKVxuICAgICAgICBncm91cHNba2V5XSA9IHsgcG9zOiBncm91cEluZGV4KyssIHJlcGVhdCwgb3B0aW9uYWwgfVxuICAgICAgICByZXR1cm4gcmVwZWF0ID8gKG9wdGlvbmFsID8gJyg/Oi8oLis/KSk/JyA6ICcvKC4rPyknKSA6ICcvKFteL10rPyknXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWBcbiAgICAgIH1cbiAgICB9KVxuICAgIC5qb2luKCcnKVxuXG4gIC8vIGRlYWQgY29kZSBlbGltaW5hdGUgZm9yIGJyb3dzZXIgc2luY2UgaXQncyBvbmx5IG5lZWRlZFxuICAvLyB3aGlsZSBnZW5lcmF0aW5nIHJvdXRlcy1tYW5pZmVzdFxuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBsZXQgcm91dGVLZXlDaGFyQ29kZSA9IDk3XG4gICAgbGV0IHJvdXRlS2V5Q2hhckxlbmd0aCA9IDFcblxuICAgIC8vIGJ1aWxkcyBhIG1pbmltYWwgcm91dGVLZXkgdXNpbmcgb25seSBhLXogYW5kIG1pbmltYWwgbnVtYmVyIG9mIGNoYXJhY3RlcnNcbiAgICBjb25zdCBnZXRTYWZlUm91dGVLZXkgPSAoKSA9PiB7XG4gICAgICBsZXQgcm91dGVLZXkgPSAnJ1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvdXRlS2V5Q2hhckxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJvdXRlS2V5ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUocm91dGVLZXlDaGFyQ29kZSlcbiAgICAgICAgcm91dGVLZXlDaGFyQ29kZSsrXG5cbiAgICAgICAgaWYgKHJvdXRlS2V5Q2hhckNvZGUgPiAxMjIpIHtcbiAgICAgICAgICByb3V0ZUtleUNoYXJMZW5ndGgrK1xuICAgICAgICAgIHJvdXRlS2V5Q2hhckNvZGUgPSA5N1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gcm91dGVLZXlcbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZUtleXM6IHsgW25hbWVkOiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9XG5cbiAgICBsZXQgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGUgPSBzZWdtZW50c1xuICAgICAgLm1hcCgoc2VnbWVudCkgPT4ge1xuICAgICAgICBpZiAoc2VnbWVudC5zdGFydHNXaXRoKCdbJykgJiYgc2VnbWVudC5lbmRzV2l0aCgnXScpKSB7XG4gICAgICAgICAgY29uc3QgeyBrZXksIG9wdGlvbmFsLCByZXBlYXQgfSA9IHBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwgLTEpKVxuICAgICAgICAgIC8vIHJlcGxhY2UgYW55IG5vbi13b3JkIGNoYXJhY3RlcnMgc2luY2UgdGhleSBjYW4gYnJlYWtcbiAgICAgICAgICAvLyB0aGUgbmFtZWQgcmVnZXhcbiAgICAgICAgICBsZXQgY2xlYW5lZEtleSA9IGtleS5yZXBsYWNlKC9cXFcvZywgJycpXG4gICAgICAgICAgbGV0IGludmFsaWRLZXkgPSBmYWxzZVxuXG4gICAgICAgICAgLy8gY2hlY2sgaWYgdGhlIGtleSBpcyBzdGlsbCBpbnZhbGlkIGFuZCBmYWxsYmFjayB0byB1c2luZyBhIGtub3duXG4gICAgICAgICAgLy8gc2FmZSBrZXlcbiAgICAgICAgICBpZiAoY2xlYW5lZEtleS5sZW5ndGggPT09IDAgfHwgY2xlYW5lZEtleS5sZW5ndGggPiAzMCkge1xuICAgICAgICAgICAgaW52YWxpZEtleSA9IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCFpc05hTihwYXJzZUludChjbGVhbmVkS2V5LnN1YnN0cigwLCAxKSkpKSB7XG4gICAgICAgICAgICBpbnZhbGlkS2V5ID0gdHJ1ZVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChpbnZhbGlkS2V5KSB7XG4gICAgICAgICAgICBjbGVhbmVkS2V5ID0gZ2V0U2FmZVJvdXRlS2V5KClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByb3V0ZUtleXNbY2xlYW5lZEtleV0gPSBrZXlcbiAgICAgICAgICByZXR1cm4gcmVwZWF0XG4gICAgICAgICAgICA/IG9wdGlvbmFsXG4gICAgICAgICAgICAgID8gYCg/Oi8oPzwke2NsZWFuZWRLZXl9Pi4rPykpP2BcbiAgICAgICAgICAgICAgOiBgLyg/PCR7Y2xlYW5lZEtleX0+Lis/KWBcbiAgICAgICAgICAgIDogYC8oPzwke2NsZWFuZWRLZXl9PlteL10rPylgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuam9pbignJylcblxuICAgIHJldHVybiB7XG4gICAgICByZTogbmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxcbiAgICAgIGdyb3VwcyxcbiAgICAgIHJvdXRlS2V5cyxcbiAgICAgIG5hbWVkUmVnZXg6IGBeJHtuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCxcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHJlOiBuZXcgUmVnRXhwKGBeJHtwYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLFxuICAgIGdyb3VwcyxcbiAgfVxufVxuIiwiaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcblxuZXhwb3J0IGZ1bmN0aW9uIHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoXG4gIHNlYXJjaFBhcmFtczogVVJMU2VhcmNoUGFyYW1zXG4pOiBQYXJzZWRVcmxRdWVyeSB7XG4gIGNvbnN0IHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSA9IHt9XG4gIHNlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XG4gICAgaWYgKHR5cGVvZiBxdWVyeVtrZXldID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcXVlcnlba2V5XSA9IHZhbHVlXG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHF1ZXJ5W2tleV0pKSB7XG4gICAgICA7KHF1ZXJ5W2tleV0gYXMgc3RyaW5nW10pLnB1c2godmFsdWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIHF1ZXJ5W2tleV0gPSBbcXVlcnlba2V5XSBhcyBzdHJpbmcsIHZhbHVlXVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIHF1ZXJ5XG59XG4iLCJpbXBvcnQgeyBJbmNvbWluZ01lc3NhZ2UsIFNlcnZlclJlc3BvbnNlIH0gZnJvbSAnaHR0cCdcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgeyBmb3JtYXRVcmwgfSBmcm9tICcuL3JvdXRlci91dGlscy9mb3JtYXQtdXJsJ1xuaW1wb3J0IHsgTWFuaWZlc3RJdGVtIH0gZnJvbSAnLi4vc2VydmVyL2xvYWQtY29tcG9uZW50cydcbmltcG9ydCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBFbnYgfSBmcm9tICcuLi8uLi9saWIvbG9hZC1lbnYtY29uZmlnJ1xuaW1wb3J0IHsgQnVpbGRNYW5pZmVzdCB9IGZyb20gJy4uL3NlcnZlci9nZXQtcGFnZS1maWxlcydcblxuLyoqXG4gKiBUeXBlcyB1c2VkIGJ5IGJvdGggbmV4dCBhbmQgbmV4dC1zZXJ2ZXJcbiAqL1xuXG5leHBvcnQgdHlwZSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4gPSBDb21wb25lbnRUeXBlPFA+ICYge1xuICAvKipcbiAgICogVXNlZCBmb3IgaW5pdGlhbCBwYWdlIGxvYWQgZGF0YSBwb3B1bGF0aW9uLiBEYXRhIHJldHVybmVkIGZyb20gYGdldEluaXRpYWxQcm9wc2AgaXMgc2VyaWFsaXplZCB3aGVuIHNlcnZlciByZW5kZXJlZC5cbiAgICogTWFrZSBzdXJlIHRvIHJldHVybiBwbGFpbiBgT2JqZWN0YCB3aXRob3V0IHVzaW5nIGBEYXRlYCwgYE1hcGAsIGBTZXRgLlxuICAgKiBAcGFyYW0gY3R4IENvbnRleHQgb2YgYHBhZ2VgXG4gICAqL1xuICBnZXRJbml0aWFsUHJvcHM/KGNvbnRleHQ6IEMpOiBJUCB8IFByb21pc2U8SVA+XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50VHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBEb2N1bWVudENvbnRleHQsXG4gIERvY3VtZW50SW5pdGlhbFByb3BzLFxuICBEb2N1bWVudFByb3BzXG4+ICYge1xuICByZW5kZXJEb2N1bWVudChcbiAgICBEb2N1bWVudDogRG9jdW1lbnRUeXBlLFxuICAgIHByb3BzOiBEb2N1bWVudFByb3BzXG4gICk6IFJlYWN0LlJlYWN0RWxlbWVudFxufVxuXG5leHBvcnQgdHlwZSBBcHBUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIEFwcENvbnRleHRUeXBlLFxuICBBcHBJbml0aWFsUHJvcHMsXG4gIEFwcFByb3BzVHlwZVxuPlxuXG5leHBvcnQgdHlwZSBBcHBUcmVlVHlwZSA9IENvbXBvbmVudFR5cGU8XG4gIEFwcEluaXRpYWxQcm9wcyAmIHsgW25hbWU6IHN0cmluZ106IGFueSB9XG4+XG5cbi8qKlxuICogV2ViIHZpdGFscyBwcm92aWRlZCB0byBfYXBwLnJlcG9ydFdlYlZpdGFscyBieSBDb3JlIFdlYiBWaXRhbHMgcGx1Z2luIGRldmVsb3BlZCBieSBHb29nbGUgQ2hyb21lIHRlYW0uXG4gKiBodHRwczovL25leHRqcy5vcmcvYmxvZy9uZXh0LTktNCNpbnRlZ3JhdGVkLXdlYi12aXRhbHMtcmVwb3J0aW5nXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRXZWJWaXRhbHNNZXRyaWMgPSB7XG4gIGlkOiBzdHJpbmdcbiAgbGFiZWw6IHN0cmluZ1xuICBuYW1lOiBzdHJpbmdcbiAgc3RhcnRUaW1lOiBudW1iZXJcbiAgdmFsdWU6IG51bWJlclxufVxuXG5leHBvcnQgdHlwZSBFbmhhbmNlcjxDPiA9IChDb21wb25lbnQ6IEMpID0+IENcblxuZXhwb3J0IHR5cGUgQ29tcG9uZW50c0VuaGFuY2VyID1cbiAgfCB7XG4gICAgICBlbmhhbmNlQXBwPzogRW5oYW5jZXI8QXBwVHlwZT5cbiAgICAgIGVuaGFuY2VDb21wb25lbnQ/OiBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cbiAgICB9XG4gIHwgRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2VSZXN1bHQgPSB7XG4gIGh0bWw6IHN0cmluZ1xuICBoZWFkPzogQXJyYXk8SlNYLkVsZW1lbnQgfCBudWxsPlxufVxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlID0gKFxuICBvcHRpb25zPzogQ29tcG9uZW50c0VuaGFuY2VyXG4pID0+IFJlbmRlclBhZ2VSZXN1bHQgfCBQcm9taXNlPFJlbmRlclBhZ2VSZXN1bHQ+XG5cbmV4cG9ydCB0eXBlIEJhc2VDb250ZXh0ID0ge1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICBbazogc3RyaW5nXTogYW55XG59XG5cbmV4cG9ydCB0eXBlIE5FWFRfREFUQSA9IHtcbiAgcHJvcHM6IGFueVxuICBwYWdlOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGJ1aWxkSWQ6IHN0cmluZ1xuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBydW50aW1lQ29uZmlnPzogeyBba2V5OiBzdHJpbmddOiBhbnkgfVxuICBuZXh0RXhwb3J0PzogYm9vbGVhblxuICBhdXRvRXhwb3J0PzogYm9vbGVhblxuICBpc0ZhbGxiYWNrPzogYm9vbGVhblxuICBkeW5hbWljSWRzPzogc3RyaW5nW11cbiAgZXJyPzogRXJyb3IgJiB7IHN0YXR1c0NvZGU/OiBudW1iZXIgfVxuICBnc3A/OiBib29sZWFuXG4gIGdzc3A/OiBib29sZWFuXG4gIGN1c3RvbVNlcnZlcj86IGJvb2xlYW5cbiAgZ2lwPzogYm9vbGVhblxuICBhcHBHaXA/OiBib29sZWFuXG59XG5cbi8qKlxuICogYE5leHRgIGNvbnRleHRcbiAqL1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lIGludGVyZmFjZS1uYW1lXG5leHBvcnQgaW50ZXJmYWNlIE5leHRQYWdlQ29udGV4dCB7XG4gIC8qKlxuICAgKiBFcnJvciBvYmplY3QgaWYgZW5jb3VudGVyZWQgZHVyaW5nIHJlbmRlcmluZ1xuICAgKi9cbiAgZXJyPzogKEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH0pIHwgbnVsbFxuICAvKipcbiAgICogYEhUVFBgIHJlcXVlc3Qgb2JqZWN0LlxuICAgKi9cbiAgcmVxPzogSW5jb21pbmdNZXNzYWdlXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVzcG9uc2Ugb2JqZWN0LlxuICAgKi9cbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgLyoqXG4gICAqIFBhdGggc2VjdGlvbiBvZiBgVVJMYC5cbiAgICovXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgLyoqXG4gICAqIFF1ZXJ5IHN0cmluZyBzZWN0aW9uIG9mIGBVUkxgIHBhcnNlZCBhcyBhbiBvYmplY3QuXG4gICAqL1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgLyoqXG4gICAqIGBTdHJpbmdgIG9mIHRoZSBhY3R1YWwgcGF0aCBpbmNsdWRpbmcgcXVlcnkuXG4gICAqL1xuICBhc1BhdGg/OiBzdHJpbmdcbiAgLyoqXG4gICAqIGBDb21wb25lbnRgIHRoZSB0cmVlIG9mIHRoZSBBcHAgdG8gdXNlIGlmIG5lZWRpbmcgdG8gcmVuZGVyIHNlcGFyYXRlbHlcbiAgICovXG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG59XG5cbmV4cG9ydCB0eXBlIEFwcENvbnRleHRUeXBlPFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcj4gPSB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0PlxuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxuICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICByb3V0ZXI6IFJcbn1cblxuZXhwb3J0IHR5cGUgQXBwSW5pdGlhbFByb3BzID0ge1xuICBwYWdlUHJvcHM6IGFueVxufVxuXG5leHBvcnQgdHlwZSBBcHBQcm9wc1R5cGU8XG4gIFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcixcbiAgUCA9IHt9XG4+ID0gQXBwSW5pdGlhbFByb3BzICYge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dCwgYW55LCBQPlxuICByb3V0ZXI6IFJcbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0ICYge1xuICByZW5kZXJQYWdlOiBSZW5kZXJQYWdlXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50SW5pdGlhbFByb3BzID0gUmVuZGVyUGFnZVJlc3VsdCAmIHtcbiAgc3R5bGVzPzogUmVhY3QuUmVhY3RFbGVtZW50W10gfCBSZWFjdC5SZWFjdEZyYWdtZW50XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50UHJvcHMgPSBEb2N1bWVudEluaXRpYWxQcm9wcyAmIHtcbiAgX19ORVhUX0RBVEFfXzogTkVYVF9EQVRBXG4gIGRhbmdlcm91c0FzUGF0aDogc3RyaW5nXG4gIGJ1aWxkTWFuaWZlc3Q6IEJ1aWxkTWFuaWZlc3RcbiAgYW1wUGF0aDogc3RyaW5nXG4gIGluQW1wTW9kZTogYm9vbGVhblxuICBoeWJyaWRBbXA6IGJvb2xlYW5cbiAgaXNEZXZlbG9wbWVudDogYm9vbGVhblxuICBmaWxlczogc3RyaW5nW11cbiAgZHluYW1pY0ltcG9ydHM6IE1hbmlmZXN0SXRlbVtdXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIGNhbm9uaWNhbEJhc2U6IHN0cmluZ1xuICBoZWFkVGFnczogYW55W11cbiAgdW5zdGFibGVfcnVudGltZUpTPzogZmFsc2Vcbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlcXVlc3RcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZXh0QXBpUmVxdWVzdCBleHRlbmRzIEluY29taW5nTWVzc2FnZSB7XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYHF1ZXJ5YCB2YWx1ZXMgZnJvbSB1cmxcbiAgICovXG4gIHF1ZXJ5OiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW11cbiAgfVxuICAvKipcbiAgICogT2JqZWN0IG9mIGBjb29raWVzYCBmcm9tIGhlYWRlclxuICAgKi9cbiAgY29va2llczoge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZ1xuICB9XG5cbiAgYm9keTogYW55XG5cbiAgZW52OiBFbnZcblxuICBwcmV2aWV3PzogYm9vbGVhblxuICAvKipcbiAgICogUHJldmlldyBkYXRhIHNldCBvbiB0aGUgcmVxdWVzdCwgaWYgYW55XG4gICAqICovXG4gIHByZXZpZXdEYXRhPzogYW55XG59XG5cbi8qKlxuICogU2VuZCBib2R5IG9mIHJlc3BvbnNlXG4gKi9cbnR5cGUgU2VuZDxUPiA9IChib2R5OiBUKSA9PiB2b2lkXG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXNwb25zZVxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpUmVzcG9uc2U8VCA9IGFueT4gPSBTZXJ2ZXJSZXNwb25zZSAmIHtcbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBgYW55YCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBzZW5kOiBTZW5kPFQ+XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGpzb25gIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIGpzb246IFNlbmQ8VD5cbiAgc3RhdHVzOiAoc3RhdHVzQ29kZTogbnVtYmVyKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgcmVkaXJlY3QodXJsOiBzdHJpbmcpOiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgcmVkaXJlY3Qoc3RhdHVzOiBudW1iZXIsIHVybDogc3RyaW5nKTogTmV4dEFwaVJlc3BvbnNlPFQ+XG5cbiAgLyoqXG4gICAqIFNldCBwcmV2aWV3IGRhdGEgZm9yIE5leHQuanMnIHByZXJlbmRlciBtb2RlXG4gICAqL1xuICBzZXRQcmV2aWV3RGF0YTogKFxuICAgIGRhdGE6IG9iamVjdCB8IHN0cmluZyxcbiAgICBvcHRpb25zPzoge1xuICAgICAgLyoqXG4gICAgICAgKiBTcGVjaWZpZXMgdGhlIG51bWJlciAoaW4gc2Vjb25kcykgZm9yIHRoZSBwcmV2aWV3IHNlc3Npb24gdG8gbGFzdCBmb3IuXG4gICAgICAgKiBUaGUgZ2l2ZW4gbnVtYmVyIHdpbGwgYmUgY29udmVydGVkIHRvIGFuIGludGVnZXIgYnkgcm91bmRpbmcgZG93bi5cbiAgICAgICAqIEJ5IGRlZmF1bHQsIG5vIG1heGltdW0gYWdlIGlzIHNldCBhbmQgdGhlIHByZXZpZXcgc2Vzc2lvbiBmaW5pc2hlc1xuICAgICAgICogd2hlbiB0aGUgY2xpZW50IHNodXRzIGRvd24gKGJyb3dzZXIgaXMgY2xvc2VkKS5cbiAgICAgICAqL1xuICAgICAgbWF4QWdlPzogbnVtYmVyXG4gICAgfVxuICApID0+IE5leHRBcGlSZXNwb25zZTxUPlxuICBjbGVhclByZXZpZXdEYXRhOiAoKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIGhhbmRsZXJcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaUhhbmRsZXI8VCA9IGFueT4gPSAoXG4gIHJlcTogTmV4dEFwaVJlcXVlc3QsXG4gIHJlczogTmV4dEFwaVJlc3BvbnNlPFQ+XG4pID0+IHZvaWQgfCBQcm9taXNlPHZvaWQ+XG5cbi8qKlxuICogVXRpbHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGV4ZWNPbmNlPFQgZXh0ZW5kcyAoLi4uYXJnczogYW55W10pID0+IFJldHVyblR5cGU8VD4+KFxuICBmbjogVFxuKTogVCB7XG4gIGxldCB1c2VkID0gZmFsc2VcbiAgbGV0IHJlc3VsdDogUmV0dXJuVHlwZTxUPlxuXG4gIHJldHVybiAoKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgaWYgKCF1c2VkKSB7XG4gICAgICB1c2VkID0gdHJ1ZVxuICAgICAgcmVzdWx0ID0gZm4oLi4uYXJncylcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdFxuICB9KSBhcyBUXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRMb2NhdGlvbk9yaWdpbigpIHtcbiAgY29uc3QgeyBwcm90b2NvbCwgaG9zdG5hbWUsIHBvcnQgfSA9IHdpbmRvdy5sb2NhdGlvblxuICByZXR1cm4gYCR7cHJvdG9jb2x9Ly8ke2hvc3RuYW1lfSR7cG9ydCA/ICc6JyArIHBvcnQgOiAnJ31gXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRVUkwoKSB7XG4gIGNvbnN0IHsgaHJlZiB9ID0gd2luZG93LmxvY2F0aW9uXG4gIGNvbnN0IG9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgcmV0dXJuIGhyZWYuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREaXNwbGF5TmFtZTxQPihDb21wb25lbnQ6IENvbXBvbmVudFR5cGU8UD4pIHtcbiAgcmV0dXJuIHR5cGVvZiBDb21wb25lbnQgPT09ICdzdHJpbmcnXG4gICAgPyBDb21wb25lbnRcbiAgICA6IENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUmVzU2VudChyZXM6IFNlcnZlclJlc3BvbnNlKSB7XG4gIHJldHVybiByZXMuZmluaXNoZWQgfHwgcmVzLmhlYWRlcnNTZW50XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkR2V0SW5pdGlhbFByb3BzPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPihBcHA6IE5leHRDb21wb25lbnRUeXBlPEMsIElQLCBQPiwgY3R4OiBDKTogUHJvbWlzZTxJUD4ge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChBcHAucHJvdG90eXBlPy5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgICBBcHBcbiAgICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgaXMgZGVmaW5lZCBhcyBhbiBpbnN0YW5jZSBtZXRob2QgLSB2aXNpdCBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9nZXQtaW5pdGlhbC1wcm9wcy1hcy1hbi1pbnN0YW5jZS1tZXRob2QgZm9yIG1vcmUgaW5mb3JtYXRpb24uYFxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gICAgfVxuICB9XG4gIC8vIHdoZW4gY2FsbGVkIGZyb20gX2FwcCBgY3R4YCBpcyBuZXN0ZWQgaW4gYGN0eGBcbiAgY29uc3QgcmVzID0gY3R4LnJlcyB8fCAoY3R4LmN0eCAmJiBjdHguY3R4LnJlcylcblxuICBpZiAoIUFwcC5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICBpZiAoY3R4LmN0eCAmJiBjdHguQ29tcG9uZW50KSB7XG4gICAgICAvLyBAdHMtaWdub3JlIHBhZ2VQcm9wcyBkZWZhdWx0XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwYWdlUHJvcHM6IGF3YWl0IGxvYWRHZXRJbml0aWFsUHJvcHMoY3R4LkNvbXBvbmVudCwgY3R4LmN0eCksXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7fSBhcyBJUFxuICB9XG5cbiAgY29uc3QgcHJvcHMgPSBhd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGN0eClcblxuICBpZiAocmVzICYmIGlzUmVzU2VudChyZXMpKSB7XG4gICAgcmV0dXJuIHByb3BzXG4gIH1cblxuICBpZiAoIXByb3BzKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICBBcHBcbiAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIHNob3VsZCByZXNvbHZlIHRvIGFuIG9iamVjdC4gQnV0IGZvdW5kIFwiJHtwcm9wc31cIiBpbnN0ZWFkLmBcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKE9iamVjdC5rZXlzKHByb3BzKS5sZW5ndGggPT09IDAgJiYgIWN0eC5jdHgpIHtcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgYCR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgICAgQXBwXG4gICAgICAgICl9IHJldHVybmVkIGFuIGVtcHR5IG9iamVjdCBmcm9tIFxcYGdldEluaXRpYWxQcm9wc1xcYC4gVGhpcyBkZS1vcHRpbWl6ZXMgYW5kIHByZXZlbnRzIGF1dG9tYXRpYyBzdGF0aWMgb3B0aW1pemF0aW9uLiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9lbXB0eS1vYmplY3QtZ2V0SW5pdGlhbFByb3BzYFxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwcm9wc1xufVxuXG5leHBvcnQgY29uc3QgdXJsT2JqZWN0S2V5cyA9IFtcbiAgJ2F1dGgnLFxuICAnaGFzaCcsXG4gICdob3N0JyxcbiAgJ2hvc3RuYW1lJyxcbiAgJ2hyZWYnLFxuICAncGF0aCcsXG4gICdwYXRobmFtZScsXG4gICdwb3J0JyxcbiAgJ3Byb3RvY29sJyxcbiAgJ3F1ZXJ5JyxcbiAgJ3NlYXJjaCcsXG4gICdzbGFzaGVzJyxcbl1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHVybDogVXJsT2JqZWN0KTogc3RyaW5nIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgaWYgKHVybCAhPT0gbnVsbCAmJiB0eXBlb2YgdXJsID09PSAnb2JqZWN0Jykge1xuICAgICAgT2JqZWN0LmtleXModXJsKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgaWYgKHVybE9iamVjdEtleXMuaW5kZXhPZihrZXkpID09PSAtMSkge1xuICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgIGBVbmtub3duIGtleSBwYXNzZWQgdmlhIHVybE9iamVjdCBpbnRvIHVybC5mb3JtYXQ6ICR7a2V5fWBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZvcm1hdFVybCh1cmwpXG59XG5cbmV4cG9ydCBjb25zdCBTUCA9IHR5cGVvZiBwZXJmb3JtYW5jZSAhPT0gJ3VuZGVmaW5lZCdcbmV4cG9ydCBjb25zdCBTVCA9XG4gIFNQICYmXG4gIHR5cGVvZiBwZXJmb3JtYW5jZS5tYXJrID09PSAnZnVuY3Rpb24nICYmXG4gIHR5cGVvZiBwZXJmb3JtYW5jZS5tZWFzdXJlID09PSAnZnVuY3Rpb24nXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvbGluaycpXG4iLCIvKiogQGxpY2Vuc2UgUmVhY3QgdjE2LjEzLjFcbiAqIHJlYWN0LWlzLmRldmVsb3BtZW50LmpzXG4gKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAoZnVuY3Rpb24oKSB7XG4ndXNlIHN0cmljdCc7XG5cbi8vIFRoZSBTeW1ib2wgdXNlZCB0byB0YWcgdGhlIFJlYWN0RWxlbWVudC1saWtlIHR5cGVzLiBJZiB0aGVyZSBpcyBubyBuYXRpdmUgU3ltYm9sXG4vLyBub3IgcG9seWZpbGwsIHRoZW4gYSBwbGFpbiBudW1iZXIgaXMgdXNlZCBmb3IgcGVyZm9ybWFuY2UuXG52YXIgaGFzU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuZm9yO1xudmFyIFJFQUNUX0VMRU1FTlRfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmVsZW1lbnQnKSA6IDB4ZWFjNztcbnZhciBSRUFDVF9QT1JUQUxfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnBvcnRhbCcpIDogMHhlYWNhO1xudmFyIFJFQUNUX0ZSQUdNRU5UX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5mcmFnbWVudCcpIDogMHhlYWNiO1xudmFyIFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5zdHJpY3RfbW9kZScpIDogMHhlYWNjO1xudmFyIFJFQUNUX1BST0ZJTEVSX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5wcm9maWxlcicpIDogMHhlYWQyO1xudmFyIFJFQUNUX1BST1ZJREVSX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5wcm92aWRlcicpIDogMHhlYWNkO1xudmFyIFJFQUNUX0NPTlRFWFRfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmNvbnRleHQnKSA6IDB4ZWFjZTsgLy8gVE9ETzogV2UgZG9uJ3QgdXNlIEFzeW5jTW9kZSBvciBDb25jdXJyZW50TW9kZSBhbnltb3JlLiBUaGV5IHdlcmUgdGVtcG9yYXJ5XG4vLyAodW5zdGFibGUpIEFQSXMgdGhhdCBoYXZlIGJlZW4gcmVtb3ZlZC4gQ2FuIHdlIHJlbW92ZSB0aGUgc3ltYm9scz9cblxudmFyIFJFQUNUX0FTWU5DX01PREVfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmFzeW5jX21vZGUnKSA6IDB4ZWFjZjtcbnZhciBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmNvbmN1cnJlbnRfbW9kZScpIDogMHhlYWNmO1xudmFyIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5mb3J3YXJkX3JlZicpIDogMHhlYWQwO1xudmFyIFJFQUNUX1NVU1BFTlNFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5zdXNwZW5zZScpIDogMHhlYWQxO1xudmFyIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnN1c3BlbnNlX2xpc3QnKSA6IDB4ZWFkODtcbnZhciBSRUFDVF9NRU1PX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5tZW1vJykgOiAweGVhZDM7XG52YXIgUkVBQ1RfTEFaWV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QubGF6eScpIDogMHhlYWQ0O1xudmFyIFJFQUNUX0JMT0NLX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5ibG9jaycpIDogMHhlYWQ5O1xudmFyIFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5mdW5kYW1lbnRhbCcpIDogMHhlYWQ1O1xudmFyIFJFQUNUX1JFU1BPTkRFUl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucmVzcG9uZGVyJykgOiAweGVhZDY7XG52YXIgUkVBQ1RfU0NPUEVfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnNjb3BlJykgOiAweGVhZDc7XG5cbmZ1bmN0aW9uIGlzVmFsaWRFbGVtZW50VHlwZSh0eXBlKSB7XG4gIHJldHVybiB0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicgfHwgLy8gTm90ZTogaXRzIHR5cGVvZiBtaWdodCBiZSBvdGhlciB0aGFuICdzeW1ib2wnIG9yICdudW1iZXInIGlmIGl0J3MgYSBwb2x5ZmlsbC5cbiAgdHlwZSA9PT0gUkVBQ1RfRlJBR01FTlRfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9QUk9GSUxFUl9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgfHwgdHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmIHR5cGUgIT09IG51bGwgJiYgKHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0xBWllfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9NRU1PX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfUFJPVklERVJfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9DT05URVhUX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1JFU1BPTkRFUl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1NDT1BFX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQkxPQ0tfVFlQRSk7XG59XG5cbmZ1bmN0aW9uIHR5cGVPZihvYmplY3QpIHtcbiAgaWYgKHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmIG9iamVjdCAhPT0gbnVsbCkge1xuICAgIHZhciAkJHR5cGVvZiA9IG9iamVjdC4kJHR5cGVvZjtcblxuICAgIHN3aXRjaCAoJCR0eXBlb2YpIHtcbiAgICAgIGNhc2UgUkVBQ1RfRUxFTUVOVF9UWVBFOlxuICAgICAgICB2YXIgdHlwZSA9IG9iamVjdC50eXBlO1xuXG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgIGNhc2UgUkVBQ1RfQVNZTkNfTU9ERV9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9GUkFHTUVOVF9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfUFJPRklMRVJfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1NUUklDVF9NT0RFX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9UWVBFOlxuICAgICAgICAgICAgcmV0dXJuIHR5cGU7XG5cbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgdmFyICQkdHlwZW9mVHlwZSA9IHR5cGUgJiYgdHlwZS4kJHR5cGVvZjtcblxuICAgICAgICAgICAgc3dpdGNoICgkJHR5cGVvZlR5cGUpIHtcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9DT05URVhUX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9MQVpZX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfTUVNT19UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX1BST1ZJREVSX1RZUEU6XG4gICAgICAgICAgICAgICAgcmV0dXJuICQkdHlwZW9mVHlwZTtcblxuICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiAkJHR5cGVvZjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgIGNhc2UgUkVBQ1RfUE9SVEFMX1RZUEU6XG4gICAgICAgIHJldHVybiAkJHR5cGVvZjtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkO1xufSAvLyBBc3luY01vZGUgaXMgZGVwcmVjYXRlZCBhbG9uZyB3aXRoIGlzQXN5bmNNb2RlXG5cbnZhciBBc3luY01vZGUgPSBSRUFDVF9BU1lOQ19NT0RFX1RZUEU7XG52YXIgQ29uY3VycmVudE1vZGUgPSBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRTtcbnZhciBDb250ZXh0Q29uc3VtZXIgPSBSRUFDVF9DT05URVhUX1RZUEU7XG52YXIgQ29udGV4dFByb3ZpZGVyID0gUkVBQ1RfUFJPVklERVJfVFlQRTtcbnZhciBFbGVtZW50ID0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xudmFyIEZvcndhcmRSZWYgPSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFO1xudmFyIEZyYWdtZW50ID0gUkVBQ1RfRlJBR01FTlRfVFlQRTtcbnZhciBMYXp5ID0gUkVBQ1RfTEFaWV9UWVBFO1xudmFyIE1lbW8gPSBSRUFDVF9NRU1PX1RZUEU7XG52YXIgUG9ydGFsID0gUkVBQ1RfUE9SVEFMX1RZUEU7XG52YXIgUHJvZmlsZXIgPSBSRUFDVF9QUk9GSUxFUl9UWVBFO1xudmFyIFN0cmljdE1vZGUgPSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFO1xudmFyIFN1c3BlbnNlID0gUkVBQ1RfU1VTUEVOU0VfVFlQRTtcbnZhciBoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0FzeW5jTW9kZSA9IGZhbHNlOyAvLyBBc3luY01vZGUgc2hvdWxkIGJlIGRlcHJlY2F0ZWRcblxuZnVuY3Rpb24gaXNBc3luY01vZGUob2JqZWN0KSB7XG4gIHtcbiAgICBpZiAoIWhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlKSB7XG4gICAgICBoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0FzeW5jTW9kZSA9IHRydWU7IC8vIFVzaW5nIGNvbnNvbGVbJ3dhcm4nXSB0byBldmFkZSBCYWJlbCBhbmQgRVNMaW50XG5cbiAgICAgIGNvbnNvbGVbJ3dhcm4nXSgnVGhlIFJlYWN0SXMuaXNBc3luY01vZGUoKSBhbGlhcyBoYXMgYmVlbiBkZXByZWNhdGVkLCAnICsgJ2FuZCB3aWxsIGJlIHJlbW92ZWQgaW4gUmVhY3QgMTcrLiBVcGRhdGUgeW91ciBjb2RlIHRvIHVzZSAnICsgJ1JlYWN0SXMuaXNDb25jdXJyZW50TW9kZSgpIGluc3RlYWQuIEl0IGhhcyB0aGUgZXhhY3Qgc2FtZSBBUEkuJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGlzQ29uY3VycmVudE1vZGUob2JqZWN0KSB8fCB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfQVNZTkNfTU9ERV9UWVBFO1xufVxuZnVuY3Rpb24gaXNDb25jdXJyZW50TW9kZShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzQ29udGV4dENvbnN1bWVyKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0NPTlRFWFRfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzQ29udGV4dFByb3ZpZGVyKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1BST1ZJREVSX1RZUEU7XG59XG5mdW5jdGlvbiBpc0VsZW1lbnQob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJiBvYmplY3QgIT09IG51bGwgJiYgb2JqZWN0LiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEU7XG59XG5mdW5jdGlvbiBpc0ZvcndhcmRSZWYob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzRnJhZ21lbnQob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfRlJBR01FTlRfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzTGF6eShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9MQVpZX1RZUEU7XG59XG5mdW5jdGlvbiBpc01lbW8ob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfTUVNT19UWVBFO1xufVxuZnVuY3Rpb24gaXNQb3J0YWwob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUE9SVEFMX1RZUEU7XG59XG5mdW5jdGlvbiBpc1Byb2ZpbGVyKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1BST0ZJTEVSX1RZUEU7XG59XG5mdW5jdGlvbiBpc1N0cmljdE1vZGUob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzU3VzcGVuc2Uob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfU1VTUEVOU0VfVFlQRTtcbn1cblxuZXhwb3J0cy5Bc3luY01vZGUgPSBBc3luY01vZGU7XG5leHBvcnRzLkNvbmN1cnJlbnRNb2RlID0gQ29uY3VycmVudE1vZGU7XG5leHBvcnRzLkNvbnRleHRDb25zdW1lciA9IENvbnRleHRDb25zdW1lcjtcbmV4cG9ydHMuQ29udGV4dFByb3ZpZGVyID0gQ29udGV4dFByb3ZpZGVyO1xuZXhwb3J0cy5FbGVtZW50ID0gRWxlbWVudDtcbmV4cG9ydHMuRm9yd2FyZFJlZiA9IEZvcndhcmRSZWY7XG5leHBvcnRzLkZyYWdtZW50ID0gRnJhZ21lbnQ7XG5leHBvcnRzLkxhenkgPSBMYXp5O1xuZXhwb3J0cy5NZW1vID0gTWVtbztcbmV4cG9ydHMuUG9ydGFsID0gUG9ydGFsO1xuZXhwb3J0cy5Qcm9maWxlciA9IFByb2ZpbGVyO1xuZXhwb3J0cy5TdHJpY3RNb2RlID0gU3RyaWN0TW9kZTtcbmV4cG9ydHMuU3VzcGVuc2UgPSBTdXNwZW5zZTtcbmV4cG9ydHMuaXNBc3luY01vZGUgPSBpc0FzeW5jTW9kZTtcbmV4cG9ydHMuaXNDb25jdXJyZW50TW9kZSA9IGlzQ29uY3VycmVudE1vZGU7XG5leHBvcnRzLmlzQ29udGV4dENvbnN1bWVyID0gaXNDb250ZXh0Q29uc3VtZXI7XG5leHBvcnRzLmlzQ29udGV4dFByb3ZpZGVyID0gaXNDb250ZXh0UHJvdmlkZXI7XG5leHBvcnRzLmlzRWxlbWVudCA9IGlzRWxlbWVudDtcbmV4cG9ydHMuaXNGb3J3YXJkUmVmID0gaXNGb3J3YXJkUmVmO1xuZXhwb3J0cy5pc0ZyYWdtZW50ID0gaXNGcmFnbWVudDtcbmV4cG9ydHMuaXNMYXp5ID0gaXNMYXp5O1xuZXhwb3J0cy5pc01lbW8gPSBpc01lbW87XG5leHBvcnRzLmlzUG9ydGFsID0gaXNQb3J0YWw7XG5leHBvcnRzLmlzUHJvZmlsZXIgPSBpc1Byb2ZpbGVyO1xuZXhwb3J0cy5pc1N0cmljdE1vZGUgPSBpc1N0cmljdE1vZGU7XG5leHBvcnRzLmlzU3VzcGVuc2UgPSBpc1N1c3BlbnNlO1xuZXhwb3J0cy5pc1ZhbGlkRWxlbWVudFR5cGUgPSBpc1ZhbGlkRWxlbWVudFR5cGU7XG5leHBvcnRzLnR5cGVPZiA9IHR5cGVPZjtcbiAgfSkoKTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1pcy5wcm9kdWN0aW9uLm1pbi5qcycpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1pcy5kZXZlbG9wbWVudC5qcycpO1xufVxuIiwiaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbi8vIGltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCB7IEdsb2JhbENvbnRleHQgfSBmcm9tICcuLi8uLi9jb250ZXh0L0dsb2JhbENvbnRleHQnO1xyXG4vLyBpbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJztcclxuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XHJcblxyXG5pbXBvcnQgUHJvZmlsZUluZm8gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Qcm9maWxlSW5mbyc7XHJcbmltcG9ydCBBYm91dE1lIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQWJvdXRNZSc7XHJcbmltcG9ydCBWaWRlb1BsYXllciBmcm9tICcuLi8uLi9jb21wb25lbnRzL1ZpZGVvUGxheWVyJztcclxuaW1wb3J0IEFkZFRvUGxheWxpc3QgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9BZGRUb1BsYXlsaXN0JztcclxuaW1wb3J0IFBsYXlsaXN0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvUGxheUxpc3QnO1xyXG5pbXBvcnQgQ29tbWVudFNlY3Rpb24gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Db21tZW50U2VjdGlvbic7XHJcbmltcG9ydCBQcm9maWxlRWRpdCBmcm9tICcuLi8uLi9jb21wb25lbnRzL1Byb2ZpbGVFZGl0JztcclxuaW1wb3J0IEZhdm91cml0ZXMgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9GYXZvdXJpdGVzJztcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL0Zvb3Rlcic7XHJcblxyXG4vLyBGcmFtZXItbW90aW9uIHZhcmlhbnRzXHJcblxyXG5cclxuXHJcblxyXG5cclxuY29uc3QgUHJvZmlsZSA9ICgpID0+IHtcclxuXHJcbiAgY29uc3QgeyBhdXRoU3RhdGUsIGN1cnJlbnRVc2VyLCBwcm9maWxlVXNlciwgc2V0QXV0b3BsYXksIGZldGNoUHJvZmlsZVVzZXIsIGNsZWFyUHJvZmlsZVVzZXIsIGFkZEZhdm91cml0ZSwgcmVtb3ZlRmF2b3VyaXRlfSA9IHVzZUNvbnRleHQoR2xvYmFsQ29udGV4dCk7XHJcblxyXG4gIC8vIEdldCB0aGUgdXNlcklkIGZyb20gdGhlIFVSTCBhbmQgZmV0Y2ggdGhlIHByb2ZpbGUgdXNlcidzIGRhdGFcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gIGNvbnN0IHsgdXNlcklkIH0gPSByb3V0ZXIucXVlcnlcclxuICBmZXRjaFByb2ZpbGVVc2VyKHVzZXJJZCwgdHJ1ZSk7XHJcblxyXG4gIFxyXG4gIFxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgIHNldEF1dG9wbGF5KGZhbHNlKTtcclxuICAgIH0sIFtdKVxyXG4gICAgXHJcbiAgICBcclxuICAvLyAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgLy8gICAgIGZldGNoUHJvZmlsZVVzZXIodXNlcklkLCB0cnVlKTtcclxuICAvLyAgIC8vICAgY29uc3QgaGFuZGxlUm91dGVDaGFuZ2UgPSB1cmwgPT4ge1xyXG4gIC8vICAgLy8gICAgIC8vIGNvbnNvbGUubG9nKCdBcHAgaXMgY2hhbmdpbmcgdG86ICcsIHVybClcclxuICAvLyAgIC8vICAgICAvLyBjb25zb2xlLmxvZyhSb3V0ZXIucXVlcnkudXNlcklkKVxyXG4gIC8vICAgLy8gfVxyXG5cclxuICAvLyAgIC8vIFJvdXRlci5ldmVudHMub24oJ3JvdXRlQ2hhbmdlU3RhcnQnLCBoYW5kbGVSb3V0ZUNoYW5nZSlcclxuICAvLyAgIC8vIHJldHVybiAoKSA9PiB7XHJcbiAgLy8gICAvLyAgIFJvdXRlci5ldmVudHMub2ZmKCdyb3V0ZUNoYW5nZVN0YXJ0JywgaGFuZGxlUm91dGVDaGFuZ2UpXHJcbiAgLy8gICAvLyB9XHJcbiAgLy8gfSwgW10pXHJcblxyXG4gIGNvbnN0IFtlZGl0TW9kZSwgc2V0RWRpdE1vZGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIFxyXG5cclxuICAvLyBjb25zdCBbaW1hZ2VTdHJpbmcsIHNldEltYWdlU3RyaW5nXSA9IHVzZVN0YXRlKCdodHRwOi8vbG9jYWxob3N0OjUwMDAvaW1hZ2UvM2NhZTQ1ODVkZGY0Y2M1NWM3MmIxNzRjMDcyNmYyNjYuanBnJyk7XHJcblxyXG4gIC8vIGlmIChwcm9maWxlUGhvdG8gIT09IG51bGwpIHtcclxuICAvLyAgIHNldEltYWdlU3RyaW5nKGBodHRwOi8vbG9jYWxob3N0OjUwMDAvaW1hZ2UvJHsuZmlsZW5hbWV9YClcclxuICAvLyB9XHJcbiAgLy8gY29uc29sZS5sb2coaW1hZ2VTdHJpbmcpXHJcbiAgLy8gaWYgKHByb2ZpbGVVc2VyLnByb2ZpbGVQaG90b0ZpbGVuYW1lICE9PSBudWxsKSB7XHJcbiAgLy8gICBjb25zdCBmaWxlbmFtZSA9IHByb2ZpbGVVc2VyLnByb2ZpbGVQaG90b0ZpbGVuYW1lO1xyXG4gICAgICBcclxuICAvLyAgIHNldEltYWdlU3RyaW5nKGBodHRwOi8vbG9jYWxob3N0OjUwMDAvaW1hZ2UvJHtmaWxlbmFtZX1gKTtcclxuICAvLyB9XHJcblxyXG5cclxuICAvLyBpZiAocHJvZmlsZVBob3RvICE9PSBudWxsKXtcclxuICAvLyAgIHNldEltYWdlU3RyaW5nKHByb2ZpbGVQaG90by5maWxlbmFtZSk7XHJcbiAgLy8gfVxyXG4gIFxyXG5cclxuICAvLyBjb25zdCBzaG93UHJvZmlsZUVkaXRTZWN0aW9uID0gKCkgPT4ge1xyXG4gIC8vICAgc2V0RWRpdE1vZGUodHJ1ZSlcclxuICAvLyB9XHJcblxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIiBpZD1cInByb2ZpbGVcIj5cclxuICAgICAgICBcclxuICAgICAgICA8UHJvZmlsZUluZm8gc2V0RWRpdE1vZGU9e3NldEVkaXRNb2RlfSBlZGl0TW9kZT17ZWRpdE1vZGV9IC8+XHJcblxyXG4gICAgICAgIHtlZGl0TW9kZSAmJlxyXG4gICAgICAgICAgPFByb2ZpbGVFZGl0IHNldEVkaXRNb2RlPXtzZXRFZGl0TW9kZX0vPlxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgPEFib3V0TWUgcHJvZmlsZVVzZXI9e3Byb2ZpbGVVc2VyfS8+XHJcblxyXG4gICAgICAgIDxWaWRlb1BsYXllci8+XHJcblxyXG4gICAgICAgIHtwcm9maWxlVXNlci5pZCA9PT0gY3VycmVudFVzZXIuaWQgJiYgXHJcbiAgICAgICAgICA8QWRkVG9QbGF5bGlzdC8+IFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgPFBsYXlsaXN0IHByb2ZpbGVVc2VyPXtwcm9maWxlVXNlcn0vPlxyXG5cclxuICAgICAgICA8Q29tbWVudFNlY3Rpb24gcHJvZmlsZVVzZXI9e3Byb2ZpbGVVc2VyfS8+XHJcblxyXG4gICAgICAgIDxGYXZvdXJpdGVzIHByb2ZpbGVVc2VyPXtwcm9maWxlVXNlcn0vPlxyXG5cclxuICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgI3Byb2ZpbGUge1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgYH08L3N0eWxlPlxyXG5cclxuICAgICAgICA8Rm9vdGVyIC8+XHJcbiAgICAgIDwvPlxyXG4gIClcclxufVxyXG5cclxuLy8gUHJvZmlsZS5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoY3R4ICkgPT4ge1xyXG5cclxuLy8gICBjb25zb2xlLmxvZyhjdHgucXVlcnkudG9rZW4pXHJcbiAgXHJcbi8vICAgY29uc3QgaWQgPSBjdHgucXVlcnkudXNlcklkXHJcbi8vICAgLy8gY29uc3QgdXNlciA9IGF3YWl0IGZldGNoUHJvZmlsZVVzZXIoaWQsIHRydWUpO1xyXG5cclxuLy8gICAvLyBjb25zdCBnZXRVc2VyRGF0YUJ5SWQgPSBhc3luYyAodXNlcklkKSA9PiB7XHJcblxyXG4vLyAgIC8vICAgY29uc3QgcmVxdWVzdEJvZHkgPSB7XHJcbi8vICAgLy8gICAgIHF1ZXJ5OiBgXHJcbi8vICAgLy8gICAgICAgcXVlcnkge1xyXG4vLyAgIC8vICAgICAgICAgdXNlckJ5SWQoaWQ6XCIke3VzZXJJZH1cIikge1xyXG4vLyAgIC8vICAgICAgICAgICBmaXJzdE5hbWUsXHJcbi8vICAgLy8gICAgICAgICAgIGxhc3ROYW1lLFxyXG4vLyAgIC8vICAgICAgICAgICBfaWQsXHJcbi8vICAgLy8gICAgICAgICAgIG93bmVkVmlkZW9zIHtcclxuLy8gICAvLyAgICAgICAgICAgICBfaWQsXHJcbi8vICAgLy8gICAgICAgICAgICAgdGh1bWJuYWlsVVJMLFxyXG4vLyAgIC8vICAgICAgICAgICAgIHRpdGxlLFxyXG4vLyAgIC8vICAgICAgICAgICAgIHZpZGVvVVJMXHJcbi8vICAgLy8gICAgICAgICAgIH0sXHJcbi8vICAgLy8gICAgICAgICAgIHBsYXlsaXN0Q29tbWVudHN7XHJcbi8vICAgLy8gICAgICAgICAgICAgX2lkLFxyXG4vLyAgIC8vICAgICAgICAgICAgIGNvbnRlbnQsXHJcbi8vICAgLy8gICAgICAgICAgICAgY29tbWVudGVyIHtcclxuLy8gICAvLyAgICAgICAgICAgICAgIF9pZFxyXG4vLyAgIC8vICAgICAgICAgICAgIH0sXHJcbi8vICAgLy8gICAgICAgICAgICAgY3JlYXRlZEF0LFxyXG4vLyAgIC8vICAgICAgICAgICAgIHVwZGF0ZWRBdFxyXG4vLyAgIC8vICAgICAgICAgICB9XHJcbi8vICAgLy8gICAgICAgICB9XHJcbi8vICAgLy8gICAgICAgfVxyXG4vLyAgIC8vICAgICBgXHJcbi8vICAgLy8gICB9XHJcblxyXG4vLyAgIC8vICAgdHJ5IHtcclxuLy8gICAvLyAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9ncmFwaHFsJywge1xyXG4vLyAgIC8vICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4vLyAgIC8vICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHJlcXVlc3RCb2R5KSxcclxuLy8gICAvLyAgICAgICBoZWFkZXJzOiB7XHJcbi8vICAgLy8gICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4vLyAgIC8vICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBgQmVhcmVyICR7YXV0aFN0YXRlLnRva2VufWBcclxuLy8gICAvLyAgICAgICB9XHJcbi8vICAgLy8gICAgIH0pXHJcblxyXG4vLyAgIC8vICAgICBpZiAocmVzLnN0YXR1cyAhPT0gMjAwICYmIHJlcy5zdGF0dXMgIT09IDIwMSkge1xyXG4vLyAgIC8vICAgICAgIHRocm93IG5ldyBFcnJvcignRmFpbGVkIHRvIGZldGNoIHVzZXIgZGF0YScpO1xyXG4vLyAgIC8vICAgICB9XHJcblxyXG4vLyAgIC8vICAgICAvLyAuanNvbigpIGlzIGEgbWV0aG9kIGZyb20gZmV0Y2ggQVBJIHRoYXQgYXV0byBleHRyYWN0cyAmIHBhcnNlcyB0aGUgcmVzIGJvZHlcclxuLy8gICAvLyAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcblxyXG4vLyAgIC8vICAgICAvLyBDaGVjayBmb3IgZXJyb3JzIGFycmF5IGluIHJlc3BvbnNlXHJcbi8vICAgLy8gICAgIGlmIChkYXRhLmVycm9ycykge1xyXG4vLyAgIC8vICAgICAgIGRhdGEuZXJyb3JzLm1hcChlcnJvciA9PiB7XHJcbi8vICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhlcnJvci5tZXNzYWdlKVxyXG4vLyAgIC8vICAgICAgIH0pXHJcbi8vICAgLy8gICAgICAgcmV0dXJuXHJcbi8vICAgLy8gICAgIH1cclxuXHJcbi8vICAgLy8gICAgIGNvbnN0IHVzZXIgPSAoZGF0YS5kYXRhLnVzZXJCeUlkKTtcclxuLy8gICAvLyAgICAgcmV0dXJuIHVzZXI7XHJcblxyXG4vLyAgIC8vICAgfSBjYXRjaCAoZXJyKSB7XHJcbi8vICAgLy8gICAgIGNvbnNvbGUubG9nKGVycik7XHJcbi8vICAgLy8gICB9XHJcblxyXG4vLyAgIC8vIH1cclxuXHJcbi8vICAgLy8gY29uc3QgdXNlciA9IGF3YWl0IGdldFVzZXJEYXRhQnlJZChpZClcclxuLy8gICAvLyBjb25zb2xlLmxvZyh1c2VyKVxyXG4vLyAgIHJldHVybiB7IH1cclxuICBcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9maWxlOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZyYW1lci1tb3Rpb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzLWV4YWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInF1ZXJ5c3RyaW5nXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1qc3gvc3R5bGVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==