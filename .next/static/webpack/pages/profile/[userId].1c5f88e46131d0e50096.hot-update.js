webpackHotUpdate_N_E("pages/profile/[userId]",{

/***/ "./components/AddToPlaylist.js":
/*!*************************************!*\
  !*** ./components/AddToPlaylist.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _SearchBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SearchBar */ "./components/SearchBar.js");
/* harmony import */ var _apis_youtube__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../apis/youtube */ "./apis/youtube.js");
/* harmony import */ var _VideoItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./VideoItem */ "./components/VideoItem.js");
/* harmony import */ var _css_variables_colors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../css-variables/colors */ "./css-variables/colors.js");



var _s = $RefreshSig$();



var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;






var AddToPlaylist = function AddToPlaylist() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      videos = _useState[0],
      setVideos = _useState[1];

  console.log('key', _apis_youtube__WEBPACK_IMPORTED_MODULE_5__["KEY"]);

  var searchVideoHandler = /*#__PURE__*/function () {
    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(searchInput) {
      var res, videoList;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _apis_youtube__WEBPACK_IMPORTED_MODULE_5__["youtube"].get('/search', {
                params: {
                  type: 'video',
                  part: 'snippet',
                  maxResults: 5,
                  key: _apis_youtube__WEBPACK_IMPORTED_MODULE_5__["KEY"],
                  q: searchInput
                }
              });

            case 2:
              res = _context.sent;
              videoList = res.data.items;
              setVideos(videoList);

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function searchVideoHandler(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  return __jsx("section", {
    id: "addToPlaylist",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["2372216600", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_7__["default"].gradient, _css_variables_colors__WEBPACK_IMPORTED_MODULE_7__["default"].primary]]])
  }, __jsx("div", {
    id: "header",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["2372216600", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_7__["default"].gradient, _css_variables_colors__WEBPACK_IMPORTED_MODULE_7__["default"].primary]]])
  }, __jsx("h2", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["2372216600", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_7__["default"].gradient, _css_variables_colors__WEBPACK_IMPORTED_MODULE_7__["default"].primary]]])
  }, "Add To Playlist"), __jsx(_SearchBar__WEBPACK_IMPORTED_MODULE_4__["default"], {
    placeholder: "Search for music",
    searchMode: "video",
    submitHandler: searchVideoHandler
  })), __jsx("div", {
    id: "videos",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["2372216600", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_7__["default"].gradient, _css_variables_colors__WEBPACK_IMPORTED_MODULE_7__["default"].primary]]])
  }, videos.length === 0 && __jsx("h3", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["2372216600", [_css_variables_colors__WEBPACK_IMPORTED_MODULE_7__["default"].gradient, _css_variables_colors__WEBPACK_IMPORTED_MODULE_7__["default"].primary]]])
  }, "Search for music to add to your playlist!"), videos.map(function (video) {
    return __jsx(_VideoItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
      video: video,
      mode: "youtube",
      key: video.id.videoId
    });
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "2372216600",
    dynamic: [_css_variables_colors__WEBPACK_IMPORTED_MODULE_7__["default"].gradient, _css_variables_colors__WEBPACK_IMPORTED_MODULE_7__["default"].primary]
  }, "section.__jsx-style-dynamic-selector{margin:2rem auto 3rem auto;width:84%;border-radius:10px;color:white;}#header.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;background:".concat(_css_variables_colors__WEBPACK_IMPORTED_MODULE_7__["default"].gradient, ";padding:2rem;border-radius:10px 10px 0 0;}h2.__jsx-style-dynamic-selector{color:white;margin-right:7rem;width:25%;}#videos.__jsx-style-dynamic-selector{border:1px solid ").concat(_css_variables_colors__WEBPACK_IMPORTED_MODULE_7__["default"].primary, ";border-radius:0 0 10px 10px;border-top:none;}h3.__jsx-style-dynamic-selector{padding:2rem;text-align:center;}@media (max-width:1100px){h2.__jsx-style-dynamic-selector{min-width:26%;margin-right:1rem;}}@media (max-width:830px){#header.__jsx-style-dynamic-selector{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}h2.__jsx-style-dynamic-selector{margin-bottom:1.5rem;min-width:60%;}}@media (max-width:520px){#header.__jsx-style-dynamic-selector{padding:1.5rem;}}@media (max-width:355px){h2.__jsx-style-dynamic-selector{min-width:100%;}h3.__jsx-style-dynamic-selector{padding:1.5rem;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxDb2RpbmdcXE15UHJvamVjdHNcXGNvZGVycy1qdWtlYm94XFxjb21wb25lbnRzXFxBZGRUb1BsYXlsaXN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStDYyxBQUlrQyxBQVNkLEFBU0QsQUFPa0MsQUFNakMsQUFPRyxBQU9RLEFBSUQsQUFPTixBQU1BLEFBSUEsWUEvQ0MsQ0FhQSxDQU9FLENBa0JwQixBQU1BLEFBSUEsTUFqQmdCLE1BakROLEdBbUJBLENBYVosQ0FPRSxHQVdBLEVBL0NtQixHQWlCckIsTUFLOEIsVUFyQmhCLFlBQ2QsTUFJMEMsQUFpQnhCLElBbUJoQixZQWxCRix3QkFmZSxhQUNlLDRCQUM5QiIsImZpbGUiOiJDOlxcQ29kaW5nXFxNeVByb2plY3RzXFxjb2RlcnMtanVrZWJveFxcY29tcG9uZW50c1xcQWRkVG9QbGF5bGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBTZWFyY2hCYXIgZnJvbSAnLi9TZWFyY2hCYXInO1xyXG5pbXBvcnQgeyB5b3V0dWJlLCBLRVkgfSBmcm9tICcuLi9hcGlzL3lvdXR1YmUnO1xyXG5pbXBvcnQgVmlkZW9JdGVtIGZyb20gJy4vVmlkZW9JdGVtJztcclxuaW1wb3J0IGNvbG9ycyBmcm9tICcuLi9jc3MtdmFyaWFibGVzL2NvbG9ycyc7XHJcblxyXG5jb25zdCBBZGRUb1BsYXlsaXN0ID0gKCkgPT4ge1xyXG5cclxuICBjb25zdCBbdmlkZW9zLCBzZXRWaWRlb3NdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICBjb25zb2xlLmxvZygna2V5JywgS0VZKTtcclxuXHJcbiAgY29uc3Qgc2VhcmNoVmlkZW9IYW5kbGVyID0gYXN5bmMgKHNlYXJjaElucHV0KSA9PiB7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCB5b3V0dWJlLmdldCgnL3NlYXJjaCcsIHtcclxuICAgICAgICBwYXJhbXM6IHtcclxuICAgICAgICAgIHR5cGU6ICd2aWRlbycsXHJcbiAgICAgICAgICBwYXJ0OiAnc25pcHBldCcsXHJcbiAgICAgICAgICBtYXhSZXN1bHRzOiA1LFxyXG4gICAgICAgICAga2V5OiBLRVksXHJcbiAgICAgICAgICBxOiBzZWFyY2hJbnB1dFxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuXHJcbiAgICBjb25zdCB2aWRlb0xpc3QgPSByZXMuZGF0YS5pdGVtcztcclxuICAgIHNldFZpZGVvcyh2aWRlb0xpc3QpO1xyXG4gIH1cclxuXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBpZD1cImFkZFRvUGxheWxpc3RcIj5cclxuICAgICAgPGRpdiBpZD1cImhlYWRlclwiPlxyXG4gICAgICAgIDxoMj5BZGQgVG8gUGxheWxpc3Q8L2gyPlxyXG4gICAgICAgIDxTZWFyY2hCYXIgcGxhY2Vob2xkZXI9J1NlYXJjaCBmb3IgbXVzaWMnIHNlYXJjaE1vZGU9XCJ2aWRlb1wiIHN1Ym1pdEhhbmRsZXI9e3NlYXJjaFZpZGVvSGFuZGxlcn0vPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcblxyXG4gICAgICA8ZGl2IGlkPVwidmlkZW9zXCI+XHJcbiAgICAgICAgeyB2aWRlb3MubGVuZ3RoID09PSAwICYmXHJcbiAgICAgICAgICA8aDM+U2VhcmNoIGZvciBtdXNpYyB0byBhZGQgdG8geW91ciBwbGF5bGlzdCE8L2gzPlxyXG4gICAgICAgIH1cclxuICAgICAgICB7dmlkZW9zLm1hcCh2aWRlbyA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8VmlkZW9JdGVtIHZpZGVvPXt2aWRlb30gbW9kZT1cInlvdXR1YmVcIiBrZXk9e3ZpZGVvLmlkLnZpZGVvSWR9Lz5cclxuICAgICAgICAgIClcclxuICAgICAgICB9KX1cclxuICAgICAgPC9kaXY+XHJcblxyXG4gIDxzdHlsZSBqc3g+e2BcclxuXHJcbiAgICBzZWN0aW9uIHtcclxuICAgICAgbWFyZ2luOiAycmVtIGF1dG8gM3JlbSBhdXRvO1xyXG4gICAgICB3aWR0aDogODQlO1xyXG4gICAgICAvKiBwYWRkaW5nOiAzcmVtOyAqL1xyXG4gICAgICAvKiBib3JkZXI6IDFweCBzb2xpZCBibGFjazsgKi9cclxuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgI2hlYWRlciB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGJhY2tncm91bmQ6ICR7Y29sb3JzLmdyYWRpZW50fTtcclxuICAgICAgLyogbWFyZ2luOiAycmVtIDA7ICovXHJcbiAgICAgIC8qIGhlaWdodDogMTAwJTsgKi9cclxuICAgICAgcGFkZGluZzogMnJlbTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDAgMDtcclxuICAgIH1cclxuXHJcbiAgICBoMiB7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiA3cmVtO1xyXG4gICAgICB3aWR0aDogMjUlO1xyXG4gICAgfVxyXG5cclxuICAgICN2aWRlb3Mge1xyXG4gICAgICAvKiBwYWRkaW5nOiAxcmVtOyAqL1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAke2NvbG9ycy5wcmltYXJ5fTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMCAwIDEwcHggMTBweDtcclxuICAgICAgYm9yZGVyLXRvcDogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICBoMyB7XHJcbiAgICAgIHBhZGRpbmc6IDJyZW07XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAvKiBNZWRpYSBxdWVyaWVzICovXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogMTEwMHB4KSB7XHJcbiAgICAgIGgyIHtcclxuICAgICAgICBtaW4td2lkdGg6IDI2JTtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogODMwcHgpIHtcclxuICAgICAgI2hlYWRlciB7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgfVxyXG5cclxuICAgICAgaDIge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcclxuICAgICAgICBtaW4td2lkdGg6IDYwJTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1MjBweCkge1xyXG4gICAgICAjaGVhZGVyIHtcclxuICAgICAgICBwYWRkaW5nOiAxLjVyZW07XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogMzU1cHgpIHtcclxuICAgICAgaDIge1xyXG4gICAgICAgIG1pbi13aWR0aDogMTAwJTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaDMge1xyXG4gICAgICAgIHBhZGRpbmc6IDEuNXJlbTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICBgfTwvc3R5bGU+XHJcblxyXG5cclxuXHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBZGRUb1BsYXlsaXN0OyJdfQ== */\n/*@ sourceURL=C:\\\\Coding\\\\MyProjects\\\\coders-jukebox\\\\components\\\\AddToPlaylist.js */")));
};

_s(AddToPlaylist, "SbG6CMM6FaXD5465NFUm02FT42U=");

_c = AddToPlaylist;
/* harmony default export */ __webpack_exports__["default"] = (AddToPlaylist);

var _c;

$RefreshReg$(_c, "AddToPlaylist");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BZGRUb1BsYXlsaXN0LmpzIl0sIm5hbWVzIjpbIkFkZFRvUGxheWxpc3QiLCJ1c2VTdGF0ZSIsInZpZGVvcyIsInNldFZpZGVvcyIsImNvbnNvbGUiLCJsb2ciLCJLRVkiLCJzZWFyY2hWaWRlb0hhbmRsZXIiLCJzZWFyY2hJbnB1dCIsInlvdXR1YmUiLCJnZXQiLCJwYXJhbXMiLCJ0eXBlIiwicGFydCIsIm1heFJlc3VsdHMiLCJrZXkiLCJxIiwicmVzIiwidmlkZW9MaXN0IiwiZGF0YSIsIml0ZW1zIiwiY29sb3JzIiwiZ3JhZGllbnQiLCJwcmltYXJ5IiwibGVuZ3RoIiwibWFwIiwidmlkZW8iLCJpZCIsInZpZGVvSWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixHQUFNO0FBQUE7O0FBQUEsa0JBRUVDLHNEQUFRLENBQUMsRUFBRCxDQUZWO0FBQUEsTUFFbkJDLE1BRm1CO0FBQUEsTUFFWEMsU0FGVzs7QUFJMUJDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLEtBQVosRUFBbUJDLGlEQUFuQjs7QUFFQSxNQUFNQyxrQkFBa0I7QUFBQSxnTUFBRyxpQkFBT0MsV0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUNQQyxxREFBTyxDQUFDQyxHQUFSLENBQVksU0FBWixFQUF1QjtBQUNyQ0Msc0JBQU0sRUFBRTtBQUNOQyxzQkFBSSxFQUFFLE9BREE7QUFFTkMsc0JBQUksRUFBRSxTQUZBO0FBR05DLDRCQUFVLEVBQUUsQ0FITjtBQUlOQyxxQkFBRyxFQUFFVCxpREFKQztBQUtOVSxtQkFBQyxFQUFFUjtBQUxHO0FBRDZCLGVBQXZCLENBRE87O0FBQUE7QUFDbkJTLGlCQURtQjtBQVduQkMsdUJBWG1CLEdBV1BELEdBQUcsQ0FBQ0UsSUFBSixDQUFTQyxLQVhGO0FBWXpCakIsdUJBQVMsQ0FBQ2UsU0FBRCxDQUFUOztBQVp5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFsQlgsa0JBQWtCO0FBQUE7QUFBQTtBQUFBLEtBQXhCOztBQWdCQSxTQUNFO0FBQVMsTUFBRSxFQUFDLGVBQVo7QUFBQSxnR0ErQmdCYyw2REFBTSxDQUFDQyxRQS9CdkIsRUE4Q3NCRCw2REFBTSxDQUFDRSxPQTlDN0I7QUFBQSxLQUNFO0FBQUssTUFBRSxFQUFDLFFBQVI7QUFBQSxnR0E4QmNGLDZEQUFNLENBQUNDLFFBOUJyQixFQTZDb0JELDZEQUFNLENBQUNFLE9BN0MzQjtBQUFBLEtBQ0U7QUFBQSxnR0E2QllGLDZEQUFNLENBQUNDLFFBN0JuQixFQTRDa0JELDZEQUFNLENBQUNFLE9BNUN6QjtBQUFBLHVCQURGLEVBRUUsTUFBQyxrREFBRDtBQUFXLGVBQVcsRUFBQyxrQkFBdkI7QUFBMEMsY0FBVSxFQUFDLE9BQXJEO0FBQTZELGlCQUFhLEVBQUVoQjtBQUE1RSxJQUZGLENBREYsRUFPRTtBQUFLLE1BQUUsRUFBQyxRQUFSO0FBQUEsZ0dBd0JjYyw2REFBTSxDQUFDQyxRQXhCckIsRUF1Q29CRCw2REFBTSxDQUFDRSxPQXZDM0I7QUFBQSxLQUNJckIsTUFBTSxDQUFDc0IsTUFBUCxLQUFrQixDQUFsQixJQUNBO0FBQUEsZ0dBc0JVSCw2REFBTSxDQUFDQyxRQXRCakIsRUFxQ2dCRCw2REFBTSxDQUFDRSxPQXJDdkI7QUFBQSxpREFGSixFQUlHckIsTUFBTSxDQUFDdUIsR0FBUCxDQUFXLFVBQUFDLEtBQUssRUFBSTtBQUNuQixXQUNFLE1BQUMsa0RBQUQ7QUFBVyxXQUFLLEVBQUVBLEtBQWxCO0FBQXlCLFVBQUksRUFBQyxTQUE5QjtBQUF3QyxTQUFHLEVBQUVBLEtBQUssQ0FBQ0MsRUFBTixDQUFTQztBQUF0RCxNQURGO0FBR0QsR0FKQSxDQUpILENBUEY7QUFBQTtBQUFBLGNBK0JnQlAsNkRBQU0sQ0FBQ0MsUUEvQnZCLEVBOENzQkQsNkRBQU0sQ0FBQ0UsT0E5QzdCO0FBQUEsbVBBK0JnQkYsNkRBQU0sQ0FBQ0MsUUEvQnZCLHVMQThDc0JELDZEQUFNLENBQUNFLE9BOUM3QixrZ0tBREY7QUFrR0QsQ0F4SEQ7O0dBQU12QixhOztLQUFBQSxhO0FBMEhTQSw0RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9maWxlL1t1c2VySWRdLjFjNWY4OGU0NjEzMWQwZTUwMDk2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgU2VhcmNoQmFyIGZyb20gJy4vU2VhcmNoQmFyJztcclxuaW1wb3J0IHsgeW91dHViZSwgS0VZIH0gZnJvbSAnLi4vYXBpcy95b3V0dWJlJztcclxuaW1wb3J0IFZpZGVvSXRlbSBmcm9tICcuL1ZpZGVvSXRlbSc7XHJcbmltcG9ydCBjb2xvcnMgZnJvbSAnLi4vY3NzLXZhcmlhYmxlcy9jb2xvcnMnO1xyXG5cclxuY29uc3QgQWRkVG9QbGF5bGlzdCA9ICgpID0+IHtcclxuXHJcbiAgY29uc3QgW3ZpZGVvcywgc2V0VmlkZW9zXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgY29uc29sZS5sb2coJ2tleScsIEtFWSk7XHJcblxyXG4gIGNvbnN0IHNlYXJjaFZpZGVvSGFuZGxlciA9IGFzeW5jIChzZWFyY2hJbnB1dCkgPT4ge1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgeW91dHViZS5nZXQoJy9zZWFyY2gnLCB7XHJcbiAgICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgICB0eXBlOiAndmlkZW8nLFxyXG4gICAgICAgICAgcGFydDogJ3NuaXBwZXQnLFxyXG4gICAgICAgICAgbWF4UmVzdWx0czogNSxcclxuICAgICAgICAgIGtleTogS0VZLFxyXG4gICAgICAgICAgcTogc2VhcmNoSW5wdXRcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcblxyXG4gICAgY29uc3QgdmlkZW9MaXN0ID0gcmVzLmRhdGEuaXRlbXM7XHJcbiAgICBzZXRWaWRlb3ModmlkZW9MaXN0KTtcclxuICB9XHJcblxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gaWQ9XCJhZGRUb1BsYXlsaXN0XCI+XHJcbiAgICAgIDxkaXYgaWQ9XCJoZWFkZXJcIj5cclxuICAgICAgICA8aDI+QWRkIFRvIFBsYXlsaXN0PC9oMj5cclxuICAgICAgICA8U2VhcmNoQmFyIHBsYWNlaG9sZGVyPSdTZWFyY2ggZm9yIG11c2ljJyBzZWFyY2hNb2RlPVwidmlkZW9cIiBzdWJtaXRIYW5kbGVyPXtzZWFyY2hWaWRlb0hhbmRsZXJ9Lz5cclxuICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAgPGRpdiBpZD1cInZpZGVvc1wiPlxyXG4gICAgICAgIHsgdmlkZW9zLmxlbmd0aCA9PT0gMCAmJlxyXG4gICAgICAgICAgPGgzPlNlYXJjaCBmb3IgbXVzaWMgdG8gYWRkIHRvIHlvdXIgcGxheWxpc3QhPC9oMz5cclxuICAgICAgICB9XHJcbiAgICAgICAge3ZpZGVvcy5tYXAodmlkZW8gPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPFZpZGVvSXRlbSB2aWRlbz17dmlkZW99IG1vZGU9XCJ5b3V0dWJlXCIga2V5PXt2aWRlby5pZC52aWRlb0lkfS8+XHJcbiAgICAgICAgICApXHJcbiAgICAgICAgfSl9XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICA8c3R5bGUganN4PntgXHJcblxyXG4gICAgc2VjdGlvbiB7XHJcbiAgICAgIG1hcmdpbjogMnJlbSBhdXRvIDNyZW0gYXV0bztcclxuICAgICAgd2lkdGg6IDg0JTtcclxuICAgICAgLyogcGFkZGluZzogM3JlbTsgKi9cclxuICAgICAgLyogYm9yZGVyOiAxcHggc29saWQgYmxhY2s7ICovXHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxuICBcclxuICAgICNoZWFkZXIge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBiYWNrZ3JvdW5kOiAke2NvbG9ycy5ncmFkaWVudH07XHJcbiAgICAgIC8qIG1hcmdpbjogMnJlbSAwOyAqL1xyXG4gICAgICAvKiBoZWlnaHQ6IDEwMCU7ICovXHJcbiAgICAgIHBhZGRpbmc6IDJyZW07XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAwIDA7XHJcbiAgICB9XHJcblxyXG4gICAgaDIge1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogN3JlbTtcclxuICAgICAgd2lkdGg6IDI1JTtcclxuICAgIH1cclxuXHJcbiAgICAjdmlkZW9zIHtcclxuICAgICAgLyogcGFkZGluZzogMXJlbTsgKi9cclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgJHtjb2xvcnMucHJpbWFyeX07XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDAgMCAxMHB4IDEwcHg7XHJcbiAgICAgIGJvcmRlci10b3A6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgaDMge1xyXG4gICAgICBwYWRkaW5nOiAycmVtO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLyogTWVkaWEgcXVlcmllcyAqL1xyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDExMDBweCkge1xyXG4gICAgICBoMiB7XHJcbiAgICAgICAgbWluLXdpZHRoOiAyNiU7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDgzMHB4KSB7XHJcbiAgICAgICNoZWFkZXIge1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGgyIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XHJcbiAgICAgICAgbWluLXdpZHRoOiA2MCU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNTIwcHgpIHtcclxuICAgICAgI2hlYWRlciB7XHJcbiAgICAgICAgcGFkZGluZzogMS41cmVtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDM1NXB4KSB7XHJcbiAgICAgIGgyIHtcclxuICAgICAgICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGgzIHtcclxuICAgICAgICBwYWRkaW5nOiAxLjVyZW07XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgYH08L3N0eWxlPlxyXG5cclxuXHJcblxyXG4gICAgPC9zZWN0aW9uPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWRkVG9QbGF5bGlzdDsiXSwic291cmNlUm9vdCI6IiJ9