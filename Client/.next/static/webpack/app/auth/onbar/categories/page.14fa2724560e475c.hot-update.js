"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/auth/onbar/categories/page",{

/***/ "(app-pages-browser)/./src/app/auth/onbar/categories/page.jsx":
/*!************************************************!*\
  !*** ./src/app/auth/onbar/categories/page.jsx ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_labelBoxwithOutDescription__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/labelBoxwithOutDescription */ \"(app-pages-browser)/./src/components/labelBoxwithOutDescription.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst data = [\n    {\n        title: \"Accessories\"\n    },\n    {\n        title: \"Automative\"\n    },\n    {\n        title: \"Bags\"\n    },\n    {\n        title: \"Bath/Beauty\"\n    },\n    {\n        title: \"Footwear\"\n    },\n    {\n        title: \"Gifts\"\n    },\n    {\n        title: \"Home/Garden\"\n    },\n    {\n        title: \"Jewelry\"\n    },\n    {\n        title: \"Kids\"\n    },\n    {\n        title: \"Babies\"\n    },\n    {\n        title: \"Wallets\"\n    },\n    {\n        title: \"Watches\"\n    },\n    {\n        title: \"Pets\"\n    },\n    {\n        title: \"Man Wear\"\n    },\n    {\n        title: \"Woman Wear\"\n    },\n    {\n        title: \"Other\"\n    }\n];\nconst categories = ()=>{\n    _s();\n    const [products, setProducts] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const handleSubmit = async ()=>{\n        const user = JSON.parse(localStorage.getItem(\"user\"));\n        try {\n            const response = await fetch(\"http://localhost:3001/api/user/createproductcategory\", {\n                method: \"POST\",\n                body: JSON.stringify({\n                    _id: user._id,\n                    products\n                }),\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                }\n            });\n            const data = await response.json();\n            console.log(\"response\", response);\n            console.log(\"data\", data);\n            if (response.ok) {\n                router.push(\"/home\");\n            } else {\n                throw Error(data.error);\n            }\n        } catch (error) {\n            setError(error.message);\n        }\n    };\n    const handleProduct = (product)=>{\n        setProducts((prevState)=>{});\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex items-center justify-center mt-3\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"text-black flex flex-col gap-2 p-1 rounded-lg bg-primary\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"font-bold text-[1.1rem]\",\n                    children: \"Choose Product Category\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\wwwko\\\\Desktop\\\\Next-Project\\\\brandbuilder-intern\\\\Client\\\\src\\\\app\\\\auth\\\\onbar\\\\categories\\\\page.jsx\",\n                    lineNumber: 97,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"What product do you want to sell? You should choose at less 3 categories\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\wwwko\\\\Desktop\\\\Next-Project\\\\brandbuilder-intern\\\\Client\\\\src\\\\app\\\\auth\\\\onbar\\\\categories\\\\page.jsx\",\n                    lineNumber: 98,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \" gap-4 text-center \",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-wrap gap-4 items-center justify-center \",\n                            children: data.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_labelBoxwithOutDescription__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                    title: item.title\n                                }, index, false, {\n                                    fileName: \"C:\\\\Users\\\\wwwko\\\\Desktop\\\\Next-Project\\\\brandbuilder-intern\\\\Client\\\\src\\\\app\\\\auth\\\\onbar\\\\categories\\\\page.jsx\",\n                                    lineNumber: 105,\n                                    columnNumber: 15\n                                }, undefined))\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\wwwko\\\\Desktop\\\\Next-Project\\\\brandbuilder-intern\\\\Client\\\\src\\\\app\\\\auth\\\\onbar\\\\categories\\\\page.jsx\",\n                            lineNumber: 103,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            children: error\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\wwwko\\\\Desktop\\\\Next-Project\\\\brandbuilder-intern\\\\Client\\\\src\\\\app\\\\auth\\\\onbar\\\\categories\\\\page.jsx\",\n                            lineNumber: 109,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: handleSubmit,\n                            className: \"w-fit px-20 py-2 mt-3 bg-font-secondary text-primary rounded-sm \",\n                            children: \"Apply\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\wwwko\\\\Desktop\\\\Next-Project\\\\brandbuilder-intern\\\\Client\\\\src\\\\app\\\\auth\\\\onbar\\\\categories\\\\page.jsx\",\n                            lineNumber: 110,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\wwwko\\\\Desktop\\\\Next-Project\\\\brandbuilder-intern\\\\Client\\\\src\\\\app\\\\auth\\\\onbar\\\\categories\\\\page.jsx\",\n                    lineNumber: 102,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\wwwko\\\\Desktop\\\\Next-Project\\\\brandbuilder-intern\\\\Client\\\\src\\\\app\\\\auth\\\\onbar\\\\categories\\\\page.jsx\",\n            lineNumber: 96,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\wwwko\\\\Desktop\\\\Next-Project\\\\brandbuilder-intern\\\\Client\\\\src\\\\app\\\\auth\\\\onbar\\\\categories\\\\page.jsx\",\n        lineNumber: 95,\n        columnNumber: 5\n    }, undefined);\n};\n_s(categories, \"XexB3JcOoWo8GPCiD/TgW4tmpWs=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (categories);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvYXV0aC9vbmJhci9jYXRlZ29yaWVzL3BhZ2UuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFFaUY7QUFDekM7QUFFeEMsTUFBTUcsT0FBTztJQUNYO1FBQ0VDLE9BQU87SUFDVDtJQUNBO1FBQ0VBLE9BQU87SUFDVDtJQUNBO1FBQ0VBLE9BQU87SUFDVDtJQUNBO1FBQ0VBLE9BQU87SUFDVDtJQUNBO1FBQ0VBLE9BQU87SUFDVDtJQUNBO1FBQ0VBLE9BQU87SUFDVDtJQUNBO1FBQ0VBLE9BQU87SUFDVDtJQUNBO1FBQ0VBLE9BQU87SUFDVDtJQUNBO1FBQ0VBLE9BQU87SUFDVDtJQUNBO1FBQ0VBLE9BQU87SUFDVDtJQUNBO1FBQ0VBLE9BQU87SUFDVDtJQUNBO1FBQ0VBLE9BQU87SUFDVDtJQUNBO1FBQ0VBLE9BQU87SUFDVDtJQUNBO1FBQ0VBLE9BQU87SUFDVDtJQUNBO1FBQ0VBLE9BQU87SUFDVDtJQUNBO1FBQ0VBLE9BQU87SUFDVDtDQUNEO0FBRUQsTUFBTUMsYUFBYTs7SUFDakIsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdMLCtDQUFRQSxDQUFDLEVBQUU7SUFFM0MsTUFBTSxDQUFDTSxPQUFPQyxTQUFTLEdBQUdQLCtDQUFRQSxDQUFDO0lBRW5DLE1BQU1RLGVBQWU7UUFDbkIsTUFBTUMsT0FBT0MsS0FBS0MsS0FBSyxDQUFDQyxhQUFhQyxPQUFPLENBQUM7UUFDN0MsSUFBSTtZQUNGLE1BQU1DLFdBQVcsTUFBTUMsTUFDckIsd0RBQ0E7Z0JBQ0VDLFFBQVE7Z0JBQ1JDLE1BQU1QLEtBQUtRLFNBQVMsQ0FBQztvQkFBRUMsS0FBS1YsS0FBS1UsR0FBRztvQkFBRWY7Z0JBQVM7Z0JBQy9DZ0IsU0FBUztvQkFDUCxnQkFBZ0I7Z0JBQ2xCO1lBQ0Y7WUFFRixNQUFNbkIsT0FBTyxNQUFNYSxTQUFTTyxJQUFJO1lBQ2hDQyxRQUFRQyxHQUFHLENBQUMsWUFBWVQ7WUFDeEJRLFFBQVFDLEdBQUcsQ0FBQyxRQUFRdEI7WUFDcEIsSUFBSWEsU0FBU1UsRUFBRSxFQUFFO2dCQUNmQyxPQUFPQyxJQUFJLENBQUM7WUFDZCxPQUFPO2dCQUNMLE1BQU1DLE1BQU0xQixLQUFLSyxLQUFLO1lBQ3hCO1FBQ0YsRUFBRSxPQUFPQSxPQUFPO1lBQ2RDLFNBQVNELE1BQU1zQixPQUFPO1FBQ3hCO0lBQ0Y7SUFFQSxNQUFNQyxnQkFBZ0IsQ0FBQ0M7UUFDckJ6QixZQUFZLENBQUMwQixhQUViO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTtrQkFDYiw0RUFBQ0Q7WUFBSUMsV0FBVTs7OEJBQ2IsOERBQUNDO29CQUFFRCxXQUFVOzhCQUEwQjs7Ozs7OzhCQUN2Qyw4REFBQ0M7OEJBQUU7Ozs7Ozs4QkFJSCw4REFBQ0Y7b0JBQUlDLFdBQVU7O3NDQUNiLDhEQUFDRDs0QkFBSUMsV0FBVTtzQ0FDWmhDLEtBQUtrQyxHQUFHLENBQUMsQ0FBQ0MsTUFBTUMsc0JBQ2YsOERBQUN2Qyw4RUFBMEJBO29DQUFhSSxPQUFPa0MsS0FBS2xDLEtBQUs7bUNBQXhCbUM7Ozs7Ozs7Ozs7c0NBSXJDLDhEQUFDQztzQ0FBSWhDOzs7Ozs7c0NBQ0wsOERBQUNpQzs0QkFDQ0MsU0FBU2hDOzRCQUNUeUIsV0FBVTtzQ0FDWDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPWDtHQS9ETTlCO0FBaUVOLCtEQUFlQSxVQUFVQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvYXV0aC9vbmJhci9jYXRlZ29yaWVzL3BhZ2UuanN4PzdiMjUiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcblxyXG5pbXBvcnQgTGFiZWxCb3h3aXRoT3V0RGVzY3JpcHRpb24gZnJvbSBcIkAvY29tcG9uZW50cy9sYWJlbEJveHdpdGhPdXREZXNjcmlwdGlvblwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IGRhdGEgPSBbXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiQWNjZXNzb3JpZXNcIixcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIkF1dG9tYXRpdmVcIixcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIkJhZ3NcIixcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIkJhdGgvQmVhdXR5XCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJGb290d2VhclwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiR2lmdHNcIixcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIkhvbWUvR2FyZGVuXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJKZXdlbHJ5XCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJLaWRzXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJCYWJpZXNcIixcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIldhbGxldHNcIixcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIldhdGNoZXNcIixcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIlBldHNcIixcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIk1hbiBXZWFyXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJXb21hbiBXZWFyXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJPdGhlclwiLFxyXG4gIH0sXHJcbl07XHJcblxyXG5jb25zdCBjYXRlZ29yaWVzID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtwcm9kdWN0cywgc2V0UHJvZHVjdHNdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCB1c2VyID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJcIikpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcclxuICAgICAgICBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9hcGkvdXNlci9jcmVhdGVwcm9kdWN0Y2F0ZWdvcnlcIixcclxuICAgICAgICB7XHJcbiAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBfaWQ6IHVzZXIuX2lkLCBwcm9kdWN0cyB9KSxcclxuICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH1cclxuICAgICAgKTtcclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgY29uc29sZS5sb2coXCJyZXNwb25zZVwiLCByZXNwb25zZSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiZGF0YVwiLCBkYXRhKTtcclxuICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgcm91dGVyLnB1c2goXCIvaG9tZVwiKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aHJvdyBFcnJvcihkYXRhLmVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgc2V0RXJyb3IoZXJyb3IubWVzc2FnZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlUHJvZHVjdCA9IChwcm9kdWN0KSA9PiB7XHJcbiAgICBzZXRQcm9kdWN0cygocHJldlN0YXRlKSA9PiB7XHJcbiAgICAgIFxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG10LTNcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWJsYWNrIGZsZXggZmxleC1jb2wgZ2FwLTIgcC0xIHJvdW5kZWQtbGcgYmctcHJpbWFyeVwiPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LVsxLjFyZW1dXCI+Q2hvb3NlIFByb2R1Y3QgQ2F0ZWdvcnk8L3A+XHJcbiAgICAgICAgPHA+XHJcbiAgICAgICAgICBXaGF0IHByb2R1Y3QgZG8geW91IHdhbnQgdG8gc2VsbD8gWW91IHNob3VsZCBjaG9vc2UgYXQgbGVzcyAzXHJcbiAgICAgICAgICBjYXRlZ29yaWVzXHJcbiAgICAgICAgPC9wPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIGdhcC00IHRleHQtY2VudGVyIFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBnYXAtNCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgXCI+XHJcbiAgICAgICAgICAgIHtkYXRhLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICA8TGFiZWxCb3h3aXRoT3V0RGVzY3JpcHRpb24ga2V5PXtpbmRleH0gdGl0bGU9e2l0ZW0udGl0bGV9IC8+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGgxPntlcnJvcn08L2gxPlxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVTdWJtaXR9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZml0IHB4LTIwIHB5LTIgbXQtMyBiZy1mb250LXNlY29uZGFyeSB0ZXh0LXByaW1hcnkgcm91bmRlZC1zbSBcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBBcHBseVxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNhdGVnb3JpZXM7XHJcbiJdLCJuYW1lcyI6WyJMYWJlbEJveHdpdGhPdXREZXNjcmlwdGlvbiIsIlJlYWN0IiwidXNlU3RhdGUiLCJkYXRhIiwidGl0bGUiLCJjYXRlZ29yaWVzIiwicHJvZHVjdHMiLCJzZXRQcm9kdWN0cyIsImVycm9yIiwic2V0RXJyb3IiLCJoYW5kbGVTdWJtaXQiLCJ1c2VyIiwiSlNPTiIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJib2R5Iiwic3RyaW5naWZ5IiwiX2lkIiwiaGVhZGVycyIsImpzb24iLCJjb25zb2xlIiwibG9nIiwib2siLCJyb3V0ZXIiLCJwdXNoIiwiRXJyb3IiLCJtZXNzYWdlIiwiaGFuZGxlUHJvZHVjdCIsInByb2R1Y3QiLCJwcmV2U3RhdGUiLCJkaXYiLCJjbGFzc05hbWUiLCJwIiwibWFwIiwiaXRlbSIsImluZGV4IiwiaDEiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/auth/onbar/categories/page.jsx\n"));

/***/ })

});