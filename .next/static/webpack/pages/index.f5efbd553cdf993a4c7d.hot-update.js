"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/wheelComponent.js":
/*!*********************************!*\
  !*** ./pages/wheelComponent.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_levi_wheel_latest_client_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _home_levi_wheel_latest_client_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _home_levi_wheel_latest_client_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var _home_levi_wheel_latest_client_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ \"./node_modules/next/node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _home_levi_wheel_latest_client_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_home_levi_wheel_latest_client_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_assets_wheel_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/assets/wheel.png */ \"./styles/assets/wheel.png\");\n/* harmony import */ var _styles_assets_marker_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/assets/marker.png */ \"./styles/assets/marker.png\");\n/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! grommet */ \"./node_modules/grommet/es6/index.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-spring */ \"./node_modules/react-spring/dist/react-spring.esm.js\");\n/* harmony import */ var d3_ease__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! d3-ease */ \"./node_modules/d3-ease/src/index.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _jsxFileName = \"/home/levi/wheel_latest/client/pages/wheelComponent.js\",\n    _templateObject,\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_home_levi_wheel_latest_client_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar WheelImage = (0,styled_components__WEBPACK_IMPORTED_MODULE_10__.default)((next_image__WEBPACK_IMPORTED_MODULE_7___default()))(_templateObject || (_templateObject = (0,_home_levi_wheel_latest_client_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__.default)([\"\\n  \", \"\\n\"])), function (_ref) {\n  var value = _ref.value;\n  return value && \"\\n  filter: blur(1px);\";\n});\n_c = WheelImage;\n\nfunction timeout(delay) {\n  return new Promise(function (res) {\n    return setTimeout(res, delay);\n  });\n}\n\nvar wait = /*#__PURE__*/function () {\n  var _ref2 = (0,_home_levi_wheel_latest_client_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/_home_levi_wheel_latest_client_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee(props) {\n    return _home_levi_wheel_latest_client_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return timeout(1500);\n\n          case 2:\n            props.setIsEnded(true);\n\n          case 3:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function wait(_x) {\n    return _ref2.apply(this, arguments);\n  };\n}();\n\nfunction WheelComponent(props) {\n  _s();\n\n  var animations = (0,react_spring__WEBPACK_IMPORTED_MODULE_8__.useSpring)(props.isSpinning ? {\n    from: {\n      rotateZ: 0\n    },\n    to: {\n      rotateZ: props.rotateValue\n    },\n    config: {\n      mass: 10000,\n      duration: 15000,\n      easing: d3_ease__WEBPACK_IMPORTED_MODULE_11__.easeQuadOut\n    },\n    reset: true,\n    onRest: function onRest() {\n      props.setIsSpinning(false);\n      wait(props);\n    }\n  } : {});\n  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {\n    console.log(\"winningMulti in wheelc: \", props.winningMultiplier);\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(grommet__WEBPACK_IMPORTED_MODULE_12__.Box, {\n      direction: \"column\",\n      gap: \"medium\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(grommet__WEBPACK_IMPORTED_MODULE_12__.Box, {\n        height: \"medium\",\n        width: \"medium\",\n        margin: \"0px\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(grommet__WEBPACK_IMPORTED_MODULE_12__.Stack, {\n          anchor: \"top\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(react_spring__WEBPACK_IMPORTED_MODULE_8__.animated.div, {\n            style: _objectSpread({\n              width: 390,\n              height: 390,\n              borderRadius: 16\n            }, animations),\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(grommet__WEBPACK_IMPORTED_MODULE_12__.Box, {\n              animation: {\n                type: \"zoomIn\",\n                duration: 1000,\n                size: \"xlarge\"\n              },\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(WheelImage, {\n                value: props.isSpinning,\n                src: _styles_assets_wheel_png__WEBPACK_IMPORTED_MODULE_5__.default,\n                width: 500,\n                height: 500\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 68,\n                columnNumber: 17\n              }, this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 65,\n              columnNumber: 15\n            }, this)\n          }, reset, false, {\n            fileName: _jsxFileName,\n            lineNumber: 56,\n            columnNumber: 13\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(grommet__WEBPACK_IMPORTED_MODULE_12__.Box, {\n            height: \"100px\",\n            width: \"40px\",\n            margin: {\n              top: \"-20px\"\n            },\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_7___default()), {\n              className: \"marker\",\n              fit: \"cover\",\n              src: _styles_assets_marker_png__WEBPACK_IMPORTED_MODULE_6__.default\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 78,\n              columnNumber: 15\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 77,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 55,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 54,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 7\n    }, this)\n  }, void 0, false);\n}\n\n_s(WheelComponent, \"RSKJXyZerAscsnYRUb202f8XmbI=\", false, function () {\n  return [react_spring__WEBPACK_IMPORTED_MODULE_8__.useSpring];\n});\n\n_c2 = WheelComponent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (WheelComponent);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"WheelImage\");\n$RefreshReg$(_c2, \"WheelComponent\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LDZEQUZQO0FBR0UscUJBQUssRUFBRSxHQUhUO0FBSUUsc0JBQU0sRUFBRTtBQUpWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVEYsYUFDT2lDLEtBRFA7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQXNCRSw4REFBQyx5Q0FBRDtBQUFLLGtCQUFNLEVBQUMsT0FBWjtBQUFvQixpQkFBSyxFQUFDLE1BQTFCO0FBQWlDLGtCQUFNLEVBQUU7QUFBRVcsY0FBQUEsR0FBRyxFQUFFO0FBQVAsYUFBekM7QUFBQSxtQ0FDRSw4REFBQyxtREFBRDtBQUFPLHVCQUFTLEVBQUMsUUFBakI7QUFBMEIsaUJBQUcsRUFBQyxPQUE5QjtBQUFzQyxpQkFBRyxFQUFFM0MsOERBQVNBO0FBQXBEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQXRCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLG1CQURGO0FBa0NEOztHQTFEUW9CO1VBQ1loQjs7O01BRFpnQjtBQTREVCwrREFBZUEsY0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy93aGVlbENvbXBvbmVudC5qcz9jZTBmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB3aGVlbEltZyBmcm9tIFwiLi4vc3R5bGVzL2Fzc2V0cy93aGVlbC5wbmdcIjtcbmltcG9ydCBtYXJrZXJJbWcgZnJvbSBcIi4uL3N0eWxlcy9hc3NldHMvbWFya2VyLnBuZ1wiO1xuaW1wb3J0IHsgQm94LCBTdGFjayB9IGZyb20gXCJncm9tbWV0XCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBcIi4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3NcIjtcbmltcG9ydCB7IHVzZVNwcmluZywgYW5pbWF0ZWQgfSBmcm9tIFwicmVhY3Qtc3ByaW5nXCI7XG5pbXBvcnQgKiBhcyBlYXNpbmdzIGZyb20gXCJkMy1lYXNlXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCwgeyBjc3MgfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcblxuY29uc3QgV2hlZWxJbWFnZSA9IHN0eWxlZChJbWFnZSlgXG4gICR7KHsgdmFsdWUgfSkgPT5cbiAgICB2YWx1ZSAmJlxuICAgIGBcbiAgZmlsdGVyOiBibHVyKDFweCk7YH1cbmA7XG5cbmZ1bmN0aW9uIHRpbWVvdXQoZGVsYXkpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXMpID0+IHNldFRpbWVvdXQocmVzLCBkZWxheSkpO1xufVxuY29uc3Qgd2FpdCA9IGFzeW5jIChwcm9wcykgPT4ge1xuICBhd2FpdCB0aW1lb3V0KDE1MDApO1xuICBwcm9wcy5zZXRJc0VuZGVkKHRydWUpO1xufTtcblxuZnVuY3Rpb24gV2hlZWxDb21wb25lbnQocHJvcHMpIHtcbiAgY29uc3QgYW5pbWF0aW9ucyA9IHVzZVNwcmluZyhcbiAgICBwcm9wcy5pc1NwaW5uaW5nXG4gICAgICA/IHtcbiAgICAgICAgICBmcm9tOiB7IHJvdGF0ZVo6IDAgfSxcbiAgICAgICAgICB0bzogeyByb3RhdGVaOiBwcm9wcy5yb3RhdGVWYWx1ZSB9LFxuICAgICAgICAgIGNvbmZpZzoge1xuICAgICAgICAgICAgbWFzczogMTAwMDAsXG4gICAgICAgICAgICBkdXJhdGlvbjogMTUwMDAsXG4gICAgICAgICAgICBlYXNpbmc6IGVhc2luZ3MuZWFzZVF1YWRPdXQsXG4gICAgICAgICAgfSxcbiAgICAgICAgICByZXNldDogdHJ1ZSxcbiAgICAgICAgICBvblJlc3Q6ICgpID0+IHtcbiAgICAgICAgICAgIHByb3BzLnNldElzU3Bpbm5pbmcoZmFsc2UpO1xuICAgICAgICAgICAgd2FpdChwcm9wcyk7XG4gICAgICAgICAgfSxcbiAgICAgICAgfVxuICAgICAgOiB7fVxuICApO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJ3aW5uaW5nTXVsdGkgaW4gd2hlZWxjOiBcIiwgcHJvcHMud2lubmluZ011bHRpcGxpZXIpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEJveCBkaXJlY3Rpb249XCJjb2x1bW5cIiBnYXA9XCJtZWRpdW1cIj5cbiAgICAgICAgPEJveCBoZWlnaHQ9XCJtZWRpdW1cIiB3aWR0aD1cIm1lZGl1bVwiIG1hcmdpbj1cIjBweFwiPlxuICAgICAgICAgIDxTdGFjayBhbmNob3I9XCJ0b3BcIj5cbiAgICAgICAgICAgIDxhbmltYXRlZC5kaXZcbiAgICAgICAgICAgICAga2V5PXtyZXNldH1cbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICB3aWR0aDogMzkwLFxuICAgICAgICAgICAgICAgIGhlaWdodDogMzkwLFxuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogMTYsXG4gICAgICAgICAgICAgICAgLi4uYW5pbWF0aW9ucyxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPEJveFxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbj17eyB0eXBlOiBcInpvb21JblwiLCBkdXJhdGlvbjogMTAwMCwgc2l6ZTogXCJ4bGFyZ2VcIiB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPFdoZWVsSW1hZ2VcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtwcm9wcy5pc1NwaW5uaW5nfVxuICAgICAgICAgICAgICAgICAgc3JjPXt3aGVlbEltZ31cbiAgICAgICAgICAgICAgICAgIHdpZHRoPXs1MDB9XG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9ezUwMH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgIDwvYW5pbWF0ZWQuZGl2PlxuXG4gICAgICAgICAgICA8Qm94IGhlaWdodD1cIjEwMHB4XCIgd2lkdGg9XCI0MHB4XCIgbWFyZ2luPXt7IHRvcDogXCItMjBweFwiIH19PlxuICAgICAgICAgICAgICA8SW1hZ2UgY2xhc3NOYW1lPVwibWFya2VyXCIgZml0PVwiY292ZXJcIiBzcmM9e21hcmtlckltZ30gLz5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgIDwvQm94PlxuICAgICAgPC9Cb3g+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFdoZWVsQ29tcG9uZW50O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0Iiwid2hlZWxJbWciLCJtYXJrZXJJbWciLCJCb3giLCJTdGFjayIsIkltYWdlIiwidXNlU3ByaW5nIiwiYW5pbWF0ZWQiLCJlYXNpbmdzIiwidXNlU3RhdGUiLCJzdHlsZWQiLCJjc3MiLCJXaGVlbEltYWdlIiwidmFsdWUiLCJ0aW1lb3V0IiwiZGVsYXkiLCJQcm9taXNlIiwicmVzIiwic2V0VGltZW91dCIsIndhaXQiLCJwcm9wcyIsInNldElzRW5kZWQiLCJXaGVlbENvbXBvbmVudCIsImFuaW1hdGlvbnMiLCJpc1NwaW5uaW5nIiwiZnJvbSIsInJvdGF0ZVoiLCJ0byIsInJvdGF0ZVZhbHVlIiwiY29uZmlnIiwibWFzcyIsImR1cmF0aW9uIiwiZWFzaW5nIiwiZWFzZVF1YWRPdXQiLCJyZXNldCIsIm9uUmVzdCIsInNldElzU3Bpbm5pbmciLCJjb25zb2xlIiwibG9nIiwid2lubmluZ011bHRpcGxpZXIiLCJ3aWR0aCIsImhlaWdodCIsImJvcmRlclJhZGl1cyIsInR5cGUiLCJzaXplIiwidG9wIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/wheelComponent.js\n");

/***/ })

});