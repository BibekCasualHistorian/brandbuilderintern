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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_labelBoxwithOutDescription__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/labelBoxwithOutDescription */ \"(app-pages-browser)/./src/components/labelBoxwithOutDescription.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst data = [\n    {\n        title: \"Accessories\"\n    },\n    {\n        title: \"Automative\"\n    },\n    {\n        title: \"Bags\"\n    },\n    {\n        title: \"Bath/Beauty\"\n    },\n    {\n        title: \"Footwear\"\n    },\n    {\n        title: \"Gifts\"\n    },\n    {\n        title: \"Home/Garden\"\n    },\n    {\n        title: \"Jewelry\"\n    },\n    {\n        title: \"Kids\"\n    },\n    {\n        title: \"Babies\"\n    },\n    {\n        title: \"Wallets\"\n    },\n    {\n        title: \"Watches\"\n    },\n    {\n        title: \"Pets\"\n    },\n    {\n        title: \"Man Wear\"\n    },\n    {\n        title: \"Woman Wear\"\n    },\n    {\n        title: \"Other\"\n    }\n];\nconst categories = ()=>{\n    _s();\n    const [error, setError] = useState(\"\");\n    const handleSubmit = async ()=>{\n        try {\n            const response = await fetch(\"http://localhost:3001/api/user/userInfo\", {\n                method: \"POST\",\n                body: JSON.stringify(formDataObject),\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                }\n            });\n            const data = await response.json();\n            console.log(\"response\", response);\n            console.log(\"data\", data);\n            if (response.ok) {\n                router.push(\"/auth/onbar/store\");\n            } else {\n                throw Error(data.error);\n            }\n        } catch (error) {\n            setError(error.message);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex items-center justify-center mt-3\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"text-black flex flex-col gap-2 p-1 rounded-lg bg-primary\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"font-bold text-[1.1rem]\",\n                    children: \"Choose Product Category\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\wwwko\\\\Desktop\\\\Next-Project\\\\brandbuilder-intern\\\\Client\\\\src\\\\app\\\\auth\\\\onbar\\\\categories\\\\page.jsx\",\n                    lineNumber: 85,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"What product do you want to sell? You should choose at less 3 categories\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\wwwko\\\\Desktop\\\\Next-Project\\\\brandbuilder-intern\\\\Client\\\\src\\\\app\\\\auth\\\\onbar\\\\categories\\\\page.jsx\",\n                    lineNumber: 86,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \" gap-4 text-center \",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-wrap gap-4 items-center justify-center \",\n                            children: data.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_labelBoxwithOutDescription__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                    title: item.title\n                                }, index, false, {\n                                    fileName: \"C:\\\\Users\\\\wwwko\\\\Desktop\\\\Next-Project\\\\brandbuilder-intern\\\\Client\\\\src\\\\app\\\\auth\\\\onbar\\\\categories\\\\page.jsx\",\n                                    lineNumber: 93,\n                                    columnNumber: 15\n                                }, undefined))\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\wwwko\\\\Desktop\\\\Next-Project\\\\brandbuilder-intern\\\\Client\\\\src\\\\app\\\\auth\\\\onbar\\\\categories\\\\page.jsx\",\n                            lineNumber: 91,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onSu: true,\n                            className: \"w-fit px-20 py-2 mt-3 bg-font-secondary text-primary rounded-sm \",\n                            children: \"Apply\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\wwwko\\\\Desktop\\\\Next-Project\\\\brandbuilder-intern\\\\Client\\\\src\\\\app\\\\auth\\\\onbar\\\\categories\\\\page.jsx\",\n                            lineNumber: 96,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\wwwko\\\\Desktop\\\\Next-Project\\\\brandbuilder-intern\\\\Client\\\\src\\\\app\\\\auth\\\\onbar\\\\categories\\\\page.jsx\",\n                    lineNumber: 90,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\wwwko\\\\Desktop\\\\Next-Project\\\\brandbuilder-intern\\\\Client\\\\src\\\\app\\\\auth\\\\onbar\\\\categories\\\\page.jsx\",\n            lineNumber: 84,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\wwwko\\\\Desktop\\\\Next-Project\\\\brandbuilder-intern\\\\Client\\\\src\\\\app\\\\auth\\\\onbar\\\\categories\\\\page.jsx\",\n        lineNumber: 83,\n        columnNumber: 5\n    }, undefined);\n};\n_s(categories, \"Wysf5k9/9rbzWl+spWgJpEWy35U=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (categories);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvYXV0aC9vbmJhci9jYXRlZ29yaWVzL3BhZ2UuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFFaUY7QUFDdkQ7QUFFMUIsTUFBTUUsT0FBTztJQUNYO1FBQ0VDLE9BQU87SUFDVDtJQUNBO1FBQ0VBLE9BQU87SUFDVDtJQUNBO1FBQ0VBLE9BQU87SUFDVDtJQUNBO1FBQ0VBLE9BQU87SUFDVDtJQUNBO1FBQ0VBLE9BQU87SUFDVDtJQUNBO1FBQ0VBLE9BQU87SUFDVDtJQUNBO1FBQ0VBLE9BQU87SUFDVDtJQUNBO1FBQ0VBLE9BQU87SUFDVDtJQUNBO1FBQ0VBLE9BQU87SUFDVDtJQUNBO1FBQ0VBLE9BQU87SUFDVDtJQUNBO1FBQ0VBLE9BQU87SUFDVDtJQUNBO1FBQ0VBLE9BQU87SUFDVDtJQUNBO1FBQ0VBLE9BQU87SUFDVDtJQUNBO1FBQ0VBLE9BQU87SUFDVDtJQUNBO1FBQ0VBLE9BQU87SUFDVDtJQUNBO1FBQ0VBLE9BQU87SUFDVDtDQUNEO0FBRUQsTUFBTUMsYUFBYTs7SUFDakIsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdDLFNBQVM7SUFFbkMsTUFBTUMsZUFBZTtRQUNuQixJQUFJO1lBQ0YsTUFBTUMsV0FBVyxNQUFNQyxNQUFNLDJDQUEyQztnQkFDdEVDLFFBQVE7Z0JBQ1JDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQ0M7Z0JBQ3JCQyxTQUFTO29CQUNQLGdCQUFnQjtnQkFDbEI7WUFDRjtZQUNBLE1BQU1kLE9BQU8sTUFBTU8sU0FBU1EsSUFBSTtZQUNoQ0MsUUFBUUMsR0FBRyxDQUFDLFlBQVlWO1lBQ3hCUyxRQUFRQyxHQUFHLENBQUMsUUFBUWpCO1lBQ3BCLElBQUlPLFNBQVNXLEVBQUUsRUFBRTtnQkFDZkMsT0FBT0MsSUFBSSxDQUFDO1lBQ2QsT0FBTztnQkFDTCxNQUFNQyxNQUFNckIsS0FBS0csS0FBSztZQUN4QjtRQUNGLEVBQUUsT0FBT0EsT0FBTztZQUNkQyxTQUFTRCxNQUFNbUIsT0FBTztRQUN4QjtJQUNGO0lBRUEscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7a0JBQ2IsNEVBQUNEO1lBQUlDLFdBQVU7OzhCQUNiLDhEQUFDQztvQkFBRUQsV0FBVTs4QkFBMEI7Ozs7Ozs4QkFDdkMsOERBQUNDOzhCQUFFOzs7Ozs7OEJBSUgsOERBQUNGO29CQUFJQyxXQUFVOztzQ0FDYiw4REFBQ0Q7NEJBQUlDLFdBQVU7c0NBQ1p4QixLQUFLMEIsR0FBRyxDQUFDLENBQUNDLE1BQU1DLHNCQUNmLDhEQUFDOUIsOEVBQTBCQTtvQ0FBYUcsT0FBTzBCLEtBQUsxQixLQUFLO21DQUF4QjJCOzs7Ozs7Ozs7O3NDQUdyQyw4REFBQ0M7NEJBQU9DLElBQUk7NEJBQUNOLFdBQVU7c0NBQW1FOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9wRztHQTlDTXRCO0FBZ0ROLCtEQUFlQSxVQUFVQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvYXV0aC9vbmJhci9jYXRlZ29yaWVzL3BhZ2UuanN4PzdiMjUiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcblxyXG5pbXBvcnQgTGFiZWxCb3h3aXRoT3V0RGVzY3JpcHRpb24gZnJvbSBcIkAvY29tcG9uZW50cy9sYWJlbEJveHdpdGhPdXREZXNjcmlwdGlvblwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBkYXRhID0gW1xyXG4gIHtcclxuICAgIHRpdGxlOiBcIkFjY2Vzc29yaWVzXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJBdXRvbWF0aXZlXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJCYWdzXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJCYXRoL0JlYXV0eVwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiRm9vdHdlYXJcIixcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIkdpZnRzXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJIb21lL0dhcmRlblwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiSmV3ZWxyeVwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiS2lkc1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiQmFiaWVzXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJXYWxsZXRzXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJXYXRjaGVzXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJQZXRzXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJNYW4gV2VhclwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiV29tYW4gV2VhclwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiT3RoZXJcIixcclxuICB9LFxyXG5dO1xyXG5cclxuY29uc3QgY2F0ZWdvcmllcyA9ICgpID0+IHtcclxuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDozMDAxL2FwaS91c2VyL3VzZXJJbmZvXCIsIHtcclxuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGZvcm1EYXRhT2JqZWN0KSxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgY29uc29sZS5sb2coXCJyZXNwb25zZVwiLCByZXNwb25zZSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiZGF0YVwiLCBkYXRhKTtcclxuICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgcm91dGVyLnB1c2goXCIvYXV0aC9vbmJhci9zdG9yZVwiKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aHJvdyBFcnJvcihkYXRhLmVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgc2V0RXJyb3IoZXJyb3IubWVzc2FnZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgbXQtM1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtYmxhY2sgZmxleCBmbGV4LWNvbCBnYXAtMiBwLTEgcm91bmRlZC1sZyBiZy1wcmltYXJ5XCI+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtWzEuMXJlbV1cIj5DaG9vc2UgUHJvZHVjdCBDYXRlZ29yeTwvcD5cclxuICAgICAgICA8cD5cclxuICAgICAgICAgIFdoYXQgcHJvZHVjdCBkbyB5b3Ugd2FudCB0byBzZWxsPyBZb3Ugc2hvdWxkIGNob29zZSBhdCBsZXNzIDNcclxuICAgICAgICAgIGNhdGVnb3JpZXNcclxuICAgICAgICA8L3A+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgZ2FwLTQgdGV4dC1jZW50ZXIgXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGdhcC00IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBcIj5cclxuICAgICAgICAgICAge2RhdGEubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgIDxMYWJlbEJveHdpdGhPdXREZXNjcmlwdGlvbiBrZXk9e2luZGV4fSB0aXRsZT17aXRlbS50aXRsZX0gLz5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxidXR0b24gb25TdSBjbGFzc05hbWU9XCJ3LWZpdCBweC0yMCBweS0yIG10LTMgYmctZm9udC1zZWNvbmRhcnkgdGV4dC1wcmltYXJ5IHJvdW5kZWQtc20gXCI+XHJcbiAgICAgICAgICAgIEFwcGx5XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2F0ZWdvcmllcztcclxuIl0sIm5hbWVzIjpbIkxhYmVsQm94d2l0aE91dERlc2NyaXB0aW9uIiwiUmVhY3QiLCJkYXRhIiwidGl0bGUiLCJjYXRlZ29yaWVzIiwiZXJyb3IiLCJzZXRFcnJvciIsInVzZVN0YXRlIiwiaGFuZGxlU3VibWl0IiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiZm9ybURhdGFPYmplY3QiLCJoZWFkZXJzIiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJvayIsInJvdXRlciIsInB1c2giLCJFcnJvciIsIm1lc3NhZ2UiLCJkaXYiLCJjbGFzc05hbWUiLCJwIiwibWFwIiwiaXRlbSIsImluZGV4IiwiYnV0dG9uIiwib25TdSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/auth/onbar/categories/page.jsx\n"));

/***/ })

});