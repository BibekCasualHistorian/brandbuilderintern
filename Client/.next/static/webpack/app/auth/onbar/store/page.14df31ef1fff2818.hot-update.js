"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/auth/onbar/store/page",{

/***/ "(app-pages-browser)/./src/components/labelBoxwithOutDescription.jsx":
/*!*******************************************************!*\
  !*** ./src/components/labelBoxwithOutDescription.jsx ***!
  \*******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction LabelBoxwithOutDescription(props) {\n    function handleClick() {\n        props.fn(props.title);\n        console.log(\"handleClilck\");\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n        onClick: handleClick,\n        htmlFor: props.title,\n        className: \"bg-secondary cursor-pointer px-4 py-4 flex flex-col w-[200px] gap-2 rounded-lg relative\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"checkbox\",\n                id: props.title,\n                className: \"absolute top-2 right-2 accent-green-700\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\wwwko\\\\Desktop\\\\Next-Project\\\\brandbuilder-intern\\\\Client\\\\src\\\\components\\\\labelBoxwithOutDescription.jsx\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col gap-1 items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"flex w-12 aspect-square  bg-font-secondary\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\wwwko\\\\Desktop\\\\Next-Project\\\\brandbuilder-intern\\\\Client\\\\src\\\\components\\\\labelBoxwithOutDescription.jsx\",\n                        lineNumber: 20,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: props.title\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\wwwko\\\\Desktop\\\\Next-Project\\\\brandbuilder-intern\\\\Client\\\\src\\\\components\\\\labelBoxwithOutDescription.jsx\",\n                        lineNumber: 21,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\wwwko\\\\Desktop\\\\Next-Project\\\\brandbuilder-intern\\\\Client\\\\src\\\\components\\\\labelBoxwithOutDescription.jsx\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\wwwko\\\\Desktop\\\\Next-Project\\\\brandbuilder-intern\\\\Client\\\\src\\\\components\\\\labelBoxwithOutDescription.jsx\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, this);\n}\n_c = LabelBoxwithOutDescription;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LabelBoxwithOutDescription);\nvar _c;\n$RefreshReg$(_c, \"LabelBoxwithOutDescription\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2xhYmVsQm94d2l0aE91dERlc2NyaXB0aW9uLmpzeCIsIm1hcHBpbmdzIjoiOzs7OztBQUEwQjtBQUUxQixTQUFTQywyQkFBMkJDLEtBQUs7SUFDdkMsU0FBU0M7UUFDUEQsTUFBTUUsRUFBRSxDQUFDRixNQUFNRyxLQUFLO1FBQ3BCQyxRQUFRQyxHQUFHLENBQUM7SUFDZDtJQUNBLHFCQUNFLDhEQUFDQztRQUNDQyxTQUFTTjtRQUNUTyxTQUFTUixNQUFNRyxLQUFLO1FBQ3BCTSxXQUFVOzswQkFFViw4REFBQ0M7Z0JBQ0NDLE1BQUs7Z0JBQ0xDLElBQUlaLE1BQU1HLEtBQUs7Z0JBQ2ZNLFdBQVU7Ozs7OzswQkFFWiw4REFBQ0k7Z0JBQUlKLFdBQVU7O2tDQUNiLDhEQUFDSzt3QkFBRUwsV0FBVTs7Ozs7O2tDQUNiLDhEQUFDSztrQ0FBR2QsTUFBTUcsS0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSXZCO0tBdEJTSjtBQXdCVCwrREFBZUEsMEJBQTBCQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2xhYmVsQm94d2l0aE91dERlc2NyaXB0aW9uLmpzeD9mMGU5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmZ1bmN0aW9uIExhYmVsQm94d2l0aE91dERlc2NyaXB0aW9uKHByb3BzKSB7XHJcbiAgZnVuY3Rpb24gaGFuZGxlQ2xpY2soKSB7XHJcbiAgICBwcm9wcy5mbihwcm9wcy50aXRsZSk7XHJcbiAgICBjb25zb2xlLmxvZyhcImhhbmRsZUNsaWxja1wiKTtcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxsYWJlbFxyXG4gICAgICBvbkNsaWNrPXtoYW5kbGVDbGlja31cclxuICAgICAgaHRtbEZvcj17cHJvcHMudGl0bGV9XHJcbiAgICAgIGNsYXNzTmFtZT1cImJnLXNlY29uZGFyeSBjdXJzb3ItcG9pbnRlciBweC00IHB5LTQgZmxleCBmbGV4LWNvbCB3LVsyMDBweF0gZ2FwLTIgcm91bmRlZC1sZyByZWxhdGl2ZVwiXHJcbiAgICA+XHJcbiAgICAgIDxpbnB1dFxyXG4gICAgICAgIHR5cGU9XCJjaGVja2JveFwiXHJcbiAgICAgICAgaWQ9e3Byb3BzLnRpdGxlfVxyXG4gICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0yIHJpZ2h0LTIgYWNjZW50LWdyZWVuLTcwMFwiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBnYXAtMSBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJmbGV4IHctMTIgYXNwZWN0LXNxdWFyZSAgYmctZm9udC1zZWNvbmRhcnlcIj48L3A+XHJcbiAgICAgICAgPHA+e3Byb3BzLnRpdGxlfTwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2xhYmVsPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExhYmVsQm94d2l0aE91dERlc2NyaXB0aW9uO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJMYWJlbEJveHdpdGhPdXREZXNjcmlwdGlvbiIsInByb3BzIiwiaGFuZGxlQ2xpY2siLCJmbiIsInRpdGxlIiwiY29uc29sZSIsImxvZyIsImxhYmVsIiwib25DbGljayIsImh0bWxGb3IiLCJjbGFzc05hbWUiLCJpbnB1dCIsInR5cGUiLCJpZCIsImRpdiIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/labelBoxwithOutDescription.jsx\n"));

/***/ })

});