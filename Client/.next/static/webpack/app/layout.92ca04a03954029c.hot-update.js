"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./src/app/globals.css":
/*!*****************************!*\
  !*** ./src/app/globals.css ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"bcff35f56b45\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZ2xvYmFscy5jc3MiLCJtYXBwaW5ncyI6IjtBQUFBLCtEQUFlLGNBQWM7QUFDN0IsSUFBSSxJQUFVLElBQUksaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvZ2xvYmFscy5jc3M/NzBmMCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcImJjZmYzNWY1NmI0NVwiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/components/Sidebar.jsx":
/*!************************************!*\
  !*** ./src/components/Sidebar.jsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n// const Sidebar = () => {\n//   return (\n//     <div className=\"flex flex-col min-h-screen py-4 px-2\">\n//       <h1 className=\"text-center font-bold text-2xl\">K-Goods</h1>\n//       <div className=\"mt-6 pr-2\">\n//         <div className=\"flex flex-col gap-4 w-fit mx-auto \">\n//           <Link href={\"/home/dashboard\"} className=\"flex gap-2\">\n//             <section className=\"w-6 h-6 bg-gray-400\"></section> Dashboard\n//           </Link>\n//           <Link href={\"/home/search\"} className=\"flex gap-2\">\n//             <section className=\"w-6 h-6 bg-gray-400\"></section> Search Product\n//           </Link>\n//           <Link href={\"/home/imports\"} className=\"flex gap-2\">\n//             <section className=\"w-6 h-6 bg-gray-400\"></section> Imports\n//           </Link>\n//           <Link href={\"/home/orders\"} className=\"flex gap-2\">\n//             <section className=\"w-6 h-6 bg-gray-400\"></section> Orders\n//           </Link>\n//           <Link href={\"/home/products\"} className=\"flex gap-2\">\n//             <section className=\"w-6 h-6 bg-gray-400\"></section> Products\n//           </Link>\n//         </div>\n//       </div>\n//       <div className=\"mt-auto pr-5\">\n//         <div className=\"flex flex-col gap-4 w-fit mx-auto\">\n//           <Link href={\"/home/settings\"} className=\"flex gap-2\">\n//             <section className=\"w-6 h-6 bg-gray-400\"></section> Settings\n//           </Link>\n//           <Link href={\"\"} className=\"flex gap-2\">\n//             <section className=\"w-6 h-6 bg-gray-400\"></section> Language\n//           </Link>\n//           <Link href={\"\"} className=\"flex gap-2\">\n//             <section className=\"w-6 h-6 bg-gray-400\"></section> Supports\n//           </Link>\n//         </div>\n//       </div>\n//     </div>\n//   );\n// };\n// export default Sidebar;\nconst Sidebar = ()=>{\n    _s();\n    const pathName = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.usePathname)();\n    // Define an array of links with their properties\n    const mainLinks = [\n        {\n            href: \"/home/dashboard\",\n            text: \"Dashboard\"\n        },\n        {\n            href: \"/home/search\",\n            text: \"Search Product\"\n        },\n        {\n            href: \"/home/imports\",\n            text: \"Imports\"\n        },\n        {\n            href: \"/home/orders\",\n            text: \"Orders\"\n        },\n        {\n            href: \"/home/products\",\n            text: \"Products\"\n        }\n    ];\n    const settingsLinks = [\n        {\n            href: \"/home/settings\",\n            text: \"Settings\"\n        },\n        {\n            href: \"/home/language\",\n            text: \"Language\"\n        },\n        {\n            href: \"/home/supports\",\n            text: \"Supports\"\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col min-h-screen py-4 px-2\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-center font-bold text-2xl\",\n                children: \"K-Goods\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\wwwko\\\\Desktop\\\\Next-Project\\\\brandbuilder-intern\\\\Client\\\\src\\\\components\\\\Sidebar.jsx\",\n                lineNumber: 70,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-6 pr-2\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col gap-4 w-fit mx-auto \",\n                    children: mainLinks.map((link)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            href: link.href,\n                            className: \"flex gap-2 \",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                                    className: \"w-6 h-6 bg-gray-400 border-white border-2 \".concat(pathName == link.href ? \"bg-red-500\" : \"\")\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\wwwko\\\\Desktop\\\\Next-Project\\\\brandbuilder-intern\\\\Client\\\\src\\\\components\\\\Sidebar.jsx\",\n                                    lineNumber: 76,\n                                    columnNumber: 15\n                                }, undefined),\n                                \" \",\n                                link.text\n                            ]\n                        }, link.href, true, {\n                            fileName: \"C:\\\\Users\\\\wwwko\\\\Desktop\\\\Next-Project\\\\brandbuilder-intern\\\\Client\\\\src\\\\components\\\\Sidebar.jsx\",\n                            lineNumber: 75,\n                            columnNumber: 13\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\wwwko\\\\Desktop\\\\Next-Project\\\\brandbuilder-intern\\\\Client\\\\src\\\\components\\\\Sidebar.jsx\",\n                    lineNumber: 73,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\wwwko\\\\Desktop\\\\Next-Project\\\\brandbuilder-intern\\\\Client\\\\src\\\\components\\\\Sidebar.jsx\",\n                lineNumber: 72,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-auto pr-5 mb-3\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col gap-4 w-fit mx-auto\",\n                    children: settingsLinks.map((link)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            href: link.href,\n                            className: \"flex gap-3\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                                    className: \"w-6 h-6 bg-gray-400 border-white border-2 \".concat(pathName === link.href ? \"bg-red-500\" : \"\")\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\wwwko\\\\Desktop\\\\Next-Project\\\\brandbuilder-intern\\\\Client\\\\src\\\\components\\\\Sidebar.jsx\",\n                                    lineNumber: 91,\n                                    columnNumber: 15\n                                }, undefined),\n                                \" \",\n                                link.text\n                            ]\n                        }, link.href, true, {\n                            fileName: \"C:\\\\Users\\\\wwwko\\\\Desktop\\\\Next-Project\\\\brandbuilder-intern\\\\Client\\\\src\\\\components\\\\Sidebar.jsx\",\n                            lineNumber: 90,\n                            columnNumber: 13\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\wwwko\\\\Desktop\\\\Next-Project\\\\brandbuilder-intern\\\\Client\\\\src\\\\components\\\\Sidebar.jsx\",\n                    lineNumber: 88,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\wwwko\\\\Desktop\\\\Next-Project\\\\brandbuilder-intern\\\\Client\\\\src\\\\components\\\\Sidebar.jsx\",\n                lineNumber: 87,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\wwwko\\\\Desktop\\\\Next-Project\\\\brandbuilder-intern\\\\Client\\\\src\\\\components\\\\Sidebar.jsx\",\n        lineNumber: 69,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Sidebar, \"28xf+Q/MMfpBebWfp+J7Y3ZZbws=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.usePathname\n    ];\n});\n_c = Sidebar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Sidebar);\nvar _c;\n$RefreshReg$(_c, \"Sidebar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1NpZGViYXIuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDNkI7QUFDaUI7QUFDcEI7QUFFMUIsMEJBQTBCO0FBQzFCLGFBQWE7QUFDYiw2REFBNkQ7QUFDN0Qsb0VBQW9FO0FBRXBFLG9DQUFvQztBQUNwQywrREFBK0Q7QUFDL0QsbUVBQW1FO0FBQ25FLDRFQUE0RTtBQUM1RSxvQkFBb0I7QUFDcEIsZ0VBQWdFO0FBQ2hFLGlGQUFpRjtBQUNqRixvQkFBb0I7QUFDcEIsaUVBQWlFO0FBQ2pFLDBFQUEwRTtBQUMxRSxvQkFBb0I7QUFDcEIsZ0VBQWdFO0FBQ2hFLHlFQUF5RTtBQUN6RSxvQkFBb0I7QUFDcEIsa0VBQWtFO0FBQ2xFLDJFQUEyRTtBQUMzRSxvQkFBb0I7QUFDcEIsaUJBQWlCO0FBQ2pCLGVBQWU7QUFFZix1Q0FBdUM7QUFDdkMsOERBQThEO0FBQzlELGtFQUFrRTtBQUNsRSwyRUFBMkU7QUFDM0Usb0JBQW9CO0FBQ3BCLG9EQUFvRDtBQUNwRCwyRUFBMkU7QUFDM0Usb0JBQW9CO0FBQ3BCLG9EQUFvRDtBQUNwRCwyRUFBMkU7QUFDM0Usb0JBQW9CO0FBQ3BCLGlCQUFpQjtBQUNqQixlQUFlO0FBQ2YsYUFBYTtBQUNiLE9BQU87QUFDUCxLQUFLO0FBRUwsMEJBQTBCO0FBRTFCLE1BQU1HLFVBQVU7O0lBQ2QsTUFBTUMsV0FBV0gsNERBQVdBO0lBRTVCLGlEQUFpRDtJQUNqRCxNQUFNSSxZQUFZO1FBQ2hCO1lBQUVDLE1BQU07WUFBbUJDLE1BQU07UUFBWTtRQUM3QztZQUFFRCxNQUFNO1lBQWdCQyxNQUFNO1FBQWlCO1FBQy9DO1lBQUVELE1BQU07WUFBaUJDLE1BQU07UUFBVTtRQUN6QztZQUFFRCxNQUFNO1lBQWdCQyxNQUFNO1FBQVM7UUFDdkM7WUFBRUQsTUFBTTtZQUFrQkMsTUFBTTtRQUFXO0tBQzVDO0lBRUQsTUFBTUMsZ0JBQWdCO1FBQ3BCO1lBQUVGLE1BQU07WUFBa0JDLE1BQU07UUFBVztRQUMzQztZQUFFRCxNQUFNO1lBQWtCQyxNQUFNO1FBQVc7UUFDM0M7WUFBRUQsTUFBTTtZQUFrQkMsTUFBTTtRQUFXO0tBQzVDO0lBRUQscUJBQ0UsOERBQUNFO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDQztnQkFBR0QsV0FBVTswQkFBaUM7Ozs7OzswQkFFL0MsOERBQUNEO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDRDtvQkFBSUMsV0FBVTs4QkFDWkwsVUFBVU8sR0FBRyxDQUFDLENBQUNDLHFCQUNkLDhEQUFDYixrREFBSUE7NEJBQWlCTSxNQUFNTyxLQUFLUCxJQUFJOzRCQUFFSSxXQUFZOzs4Q0FDakQsOERBQUNJO29DQUNDSixXQUFXLDZDQUVWLE9BRENOLFlBQVlTLEtBQUtQLElBQUksR0FBRyxlQUFlOzs7Ozs7Z0NBRS9CO2dDQUNYTyxLQUFLTixJQUFJOzsyQkFORE0sS0FBS1AsSUFBSTs7Ozs7Ozs7Ozs7Ozs7OzBCQVkxQiw4REFBQ0c7Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUNEO29CQUFJQyxXQUFVOzhCQUNaRixjQUFjSSxHQUFHLENBQUMsQ0FBQ0MscUJBQ2xCLDhEQUFDYixrREFBSUE7NEJBQWlCTSxNQUFNTyxLQUFLUCxJQUFJOzRCQUFFSSxXQUFZOzs4Q0FDakQsOERBQUNJO29DQUNDSixXQUFXLDZDQUVWLE9BRENOLGFBQWFTLEtBQUtQLElBQUksR0FBRyxlQUFlOzs7Ozs7Z0NBRWhDO2dDQUNYTyxLQUFLTixJQUFJOzsyQkFORE0sS0FBS1AsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBYWhDO0dBckRNSDs7UUFDYUYsd0RBQVdBOzs7S0FEeEJFO0FBdUROLCtEQUFlQSxPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1NpZGViYXIuanN4PzQzMzciXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgdXNlUGF0aG5hbWUgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbi8vIGNvbnN0IFNpZGViYXIgPSAoKSA9PiB7XHJcbi8vICAgcmV0dXJuIChcclxuLy8gICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBtaW4taC1zY3JlZW4gcHktNCBweC0yXCI+XHJcbi8vICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBmb250LWJvbGQgdGV4dC0yeGxcIj5LLUdvb2RzPC9oMT5cclxuXHJcbi8vICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNiBwci0yXCI+XHJcbi8vICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGdhcC00IHctZml0IG14LWF1dG8gXCI+XHJcbi8vICAgICAgICAgICA8TGluayBocmVmPXtcIi9ob21lL2Rhc2hib2FyZFwifSBjbGFzc05hbWU9XCJmbGV4IGdhcC0yXCI+XHJcbi8vICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInctNiBoLTYgYmctZ3JheS00MDBcIj48L3NlY3Rpb24+IERhc2hib2FyZFxyXG4vLyAgICAgICAgICAgPC9MaW5rPlxyXG4vLyAgICAgICAgICAgPExpbmsgaHJlZj17XCIvaG9tZS9zZWFyY2hcIn0gY2xhc3NOYW1lPVwiZmxleCBnYXAtMlwiPlxyXG4vLyAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJ3LTYgaC02IGJnLWdyYXktNDAwXCI+PC9zZWN0aW9uPiBTZWFyY2ggUHJvZHVjdFxyXG4vLyAgICAgICAgICAgPC9MaW5rPlxyXG4vLyAgICAgICAgICAgPExpbmsgaHJlZj17XCIvaG9tZS9pbXBvcnRzXCJ9IGNsYXNzTmFtZT1cImZsZXggZ2FwLTJcIj5cclxuLy8gICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwidy02IGgtNiBiZy1ncmF5LTQwMFwiPjwvc2VjdGlvbj4gSW1wb3J0c1xyXG4vLyAgICAgICAgICAgPC9MaW5rPlxyXG4vLyAgICAgICAgICAgPExpbmsgaHJlZj17XCIvaG9tZS9vcmRlcnNcIn0gY2xhc3NOYW1lPVwiZmxleCBnYXAtMlwiPlxyXG4vLyAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJ3LTYgaC02IGJnLWdyYXktNDAwXCI+PC9zZWN0aW9uPiBPcmRlcnNcclxuLy8gICAgICAgICAgIDwvTGluaz5cclxuLy8gICAgICAgICAgIDxMaW5rIGhyZWY9e1wiL2hvbWUvcHJvZHVjdHNcIn0gY2xhc3NOYW1lPVwiZmxleCBnYXAtMlwiPlxyXG4vLyAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJ3LTYgaC02IGJnLWdyYXktNDAwXCI+PC9zZWN0aW9uPiBQcm9kdWN0c1xyXG4vLyAgICAgICAgICAgPC9MaW5rPlxyXG4vLyAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICA8L2Rpdj5cclxuXHJcbi8vICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtYXV0byBwci01XCI+XHJcbi8vICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGdhcC00IHctZml0IG14LWF1dG9cIj5cclxuLy8gICAgICAgICAgIDxMaW5rIGhyZWY9e1wiL2hvbWUvc2V0dGluZ3NcIn0gY2xhc3NOYW1lPVwiZmxleCBnYXAtMlwiPlxyXG4vLyAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJ3LTYgaC02IGJnLWdyYXktNDAwXCI+PC9zZWN0aW9uPiBTZXR0aW5nc1xyXG4vLyAgICAgICAgICAgPC9MaW5rPlxyXG4vLyAgICAgICAgICAgPExpbmsgaHJlZj17XCJcIn0gY2xhc3NOYW1lPVwiZmxleCBnYXAtMlwiPlxyXG4vLyAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJ3LTYgaC02IGJnLWdyYXktNDAwXCI+PC9zZWN0aW9uPiBMYW5ndWFnZVxyXG4vLyAgICAgICAgICAgPC9MaW5rPlxyXG4vLyAgICAgICAgICAgPExpbmsgaHJlZj17XCJcIn0gY2xhc3NOYW1lPVwiZmxleCBnYXAtMlwiPlxyXG4vLyAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJ3LTYgaC02IGJnLWdyYXktNDAwXCI+PC9zZWN0aW9uPiBTdXBwb3J0c1xyXG4vLyAgICAgICAgICAgPC9MaW5rPlxyXG4vLyAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICA8L2Rpdj5cclxuLy8gICAgIDwvZGl2PlxyXG4vLyAgICk7XHJcbi8vIH07XHJcblxyXG4vLyBleHBvcnQgZGVmYXVsdCBTaWRlYmFyO1xyXG5cclxuY29uc3QgU2lkZWJhciA9ICgpID0+IHtcclxuICBjb25zdCBwYXRoTmFtZSA9IHVzZVBhdGhuYW1lKCk7XHJcblxyXG4gIC8vIERlZmluZSBhbiBhcnJheSBvZiBsaW5rcyB3aXRoIHRoZWlyIHByb3BlcnRpZXNcclxuICBjb25zdCBtYWluTGlua3MgPSBbXHJcbiAgICB7IGhyZWY6IFwiL2hvbWUvZGFzaGJvYXJkXCIsIHRleHQ6IFwiRGFzaGJvYXJkXCIgfSxcclxuICAgIHsgaHJlZjogXCIvaG9tZS9zZWFyY2hcIiwgdGV4dDogXCJTZWFyY2ggUHJvZHVjdFwiIH0sXHJcbiAgICB7IGhyZWY6IFwiL2hvbWUvaW1wb3J0c1wiLCB0ZXh0OiBcIkltcG9ydHNcIiB9LFxyXG4gICAgeyBocmVmOiBcIi9ob21lL29yZGVyc1wiLCB0ZXh0OiBcIk9yZGVyc1wiIH0sXHJcbiAgICB7IGhyZWY6IFwiL2hvbWUvcHJvZHVjdHNcIiwgdGV4dDogXCJQcm9kdWN0c1wiIH0sXHJcbiAgXTtcclxuXHJcbiAgY29uc3Qgc2V0dGluZ3NMaW5rcyA9IFtcclxuICAgIHsgaHJlZjogXCIvaG9tZS9zZXR0aW5nc1wiLCB0ZXh0OiBcIlNldHRpbmdzXCIgfSxcclxuICAgIHsgaHJlZjogXCIvaG9tZS9sYW5ndWFnZVwiLCB0ZXh0OiBcIkxhbmd1YWdlXCIgfSxcclxuICAgIHsgaHJlZjogXCIvaG9tZS9zdXBwb3J0c1wiLCB0ZXh0OiBcIlN1cHBvcnRzXCIgfSxcclxuICBdO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIG1pbi1oLXNjcmVlbiBweS00IHB4LTJcIj5cclxuICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIGZvbnQtYm9sZCB0ZXh0LTJ4bFwiPkstR29vZHM8L2gxPlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC02IHByLTJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZ2FwLTQgdy1maXQgbXgtYXV0byBcIj5cclxuICAgICAgICAgIHttYWluTGlua3MubWFwKChsaW5rKSA9PiAoXHJcbiAgICAgICAgICAgIDxMaW5rIGtleT17bGluay5ocmVmfSBocmVmPXtsaW5rLmhyZWZ9IGNsYXNzTmFtZT17YGZsZXggZ2FwLTIgYH0+XHJcbiAgICAgICAgICAgICAgPHNlY3Rpb25cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHctNiBoLTYgYmctZ3JheS00MDAgYm9yZGVyLXdoaXRlIGJvcmRlci0yICR7XHJcbiAgICAgICAgICAgICAgICAgIHBhdGhOYW1lID09IGxpbmsuaHJlZiA/IFwiYmctcmVkLTUwMFwiIDogXCJcIlxyXG4gICAgICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICAgICAgPjwvc2VjdGlvbj57XCIgXCJ9XHJcbiAgICAgICAgICAgICAge2xpbmsudGV4dH1cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC1hdXRvIHByLTUgbWItM1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBnYXAtNCB3LWZpdCBteC1hdXRvXCI+XHJcbiAgICAgICAgICB7c2V0dGluZ3NMaW5rcy5tYXAoKGxpbmspID0+IChcclxuICAgICAgICAgICAgPExpbmsga2V5PXtsaW5rLmhyZWZ9IGhyZWY9e2xpbmsuaHJlZn0gY2xhc3NOYW1lPXtgZmxleCBnYXAtM2B9PlxyXG4gICAgICAgICAgICAgIDxzZWN0aW9uXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2B3LTYgaC02IGJnLWdyYXktNDAwIGJvcmRlci13aGl0ZSBib3JkZXItMiAke1xyXG4gICAgICAgICAgICAgICAgICBwYXRoTmFtZSA9PT0gbGluay5ocmVmID8gXCJiZy1yZWQtNTAwXCIgOiBcIlwiXHJcbiAgICAgICAgICAgICAgICB9YH1cclxuICAgICAgICAgICAgICA+PC9zZWN0aW9uPntcIiBcIn1cclxuICAgICAgICAgICAgICB7bGluay50ZXh0fVxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2lkZWJhcjtcclxuIl0sIm5hbWVzIjpbIkxpbmsiLCJ1c2VQYXRobmFtZSIsIlJlYWN0IiwiU2lkZWJhciIsInBhdGhOYW1lIiwibWFpbkxpbmtzIiwiaHJlZiIsInRleHQiLCJzZXR0aW5nc0xpbmtzIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJtYXAiLCJsaW5rIiwic2VjdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Sidebar.jsx\n"));

/***/ })

});