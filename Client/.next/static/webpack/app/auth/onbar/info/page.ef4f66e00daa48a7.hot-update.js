"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/auth/onbar/info/page",{

/***/ "(app-pages-browser)/./src/app/auth/onbar/info/page.jsx":
/*!******************************************!*\
  !*** ./src/app/auth/onbar/info/page.jsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_Input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Input */ \"(app-pages-browser)/./src/components/Input.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\nconst Info = ()=>{\n    const handleSubmit = (e)=>{\n        e.preventDefault();\n        // const form = new FormData();\n        const formData = new FormData(event.target);\n        // // Iterate over form data entries\n        // for (const [name, value] of formData.entries()) {\n        //   console.log(`${name}: ${value}`);\n        // }\n        const formDataToObject = (formData)=>{\n            const object = {};\n            formData.forEach((value, key)=>{\n                object[key] = value;\n            });\n            return object;\n        };\n        // Example usage:\n        const formDataObject = formDataToObject(formData);\n        console.log(\"formData\", formDataObject);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        className: \"text-center w-full px-10 py-8\",\n        onSubmit: handleSubmit,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-4xl mb-5 font-bold\",\n                children: \"Fill your personal info\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\wwwko\\\\Desktop\\\\Next-Project\\\\brandbuilder-intern\\\\Client\\\\src\\\\app\\\\auth\\\\onbar\\\\info\\\\page.jsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Input__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                labelOne: \"Name\",\n                typeOne: \"text\",\n                inputOneName: \"name\",\n                labelTwo: \"Last Name\",\n                typeTwo: \"text\",\n                inputTwoName: \"last-name\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\wwwko\\\\Desktop\\\\Next-Project\\\\brandbuilder-intern\\\\Client\\\\src\\\\app\\\\auth\\\\onbar\\\\info\\\\page.jsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Input__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                labelOne: \"Email Address\",\n                typeOne: \"email\",\n                inputOneName: \"email\",\n                labelTwo: \"Phone Number\",\n                typeTwo: \"number\",\n                inputTwoName: \"phone-number\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\wwwko\\\\Desktop\\\\Next-Project\\\\brandbuilder-intern\\\\Client\\\\src\\\\app\\\\auth\\\\onbar\\\\info\\\\page.jsx\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Input__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                labelOne: \"User Name\",\n                typeOne: \"text\",\n                inputOneName: \"user-name\",\n                labelTwo: \"Business Name\",\n                typeTwo: \"text\",\n                inputTwoName: \"business-name\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\wwwko\\\\Desktop\\\\Next-Project\\\\brandbuilder-intern\\\\Client\\\\src\\\\app\\\\auth\\\\onbar\\\\info\\\\page.jsx\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mr-auto text-left  w-1/2 px-7\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"country\",\n                        children: \"Country/Region\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\wwwko\\\\Desktop\\\\Next-Project\\\\brandbuilder-intern\\\\Client\\\\src\\\\app\\\\auth\\\\onbar\\\\info\\\\page.jsx\",\n                        lineNumber: 60,\n                        columnNumber: 9\n                    }, undefined),\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\wwwko\\\\Desktop\\\\Next-Project\\\\brandbuilder-intern\\\\Client\\\\src\\\\app\\\\auth\\\\onbar\\\\info\\\\page.jsx\",\n                        lineNumber: 60,\n                        columnNumber: 57\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        autoComplete: \"no\",\n                        type: \"text\",\n                        name: \"country\",\n                        id: \"country\",\n                        className: \"bg-gray-300 p-1.5 px-2 text-gray-600 mt-1 w-full hover:outline-none\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\wwwko\\\\Desktop\\\\Next-Project\\\\brandbuilder-intern\\\\Client\\\\src\\\\app\\\\auth\\\\onbar\\\\info\\\\page.jsx\",\n                        lineNumber: 61,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\wwwko\\\\Desktop\\\\Next-Project\\\\brandbuilder-intern\\\\Client\\\\src\\\\app\\\\auth\\\\onbar\\\\info\\\\page.jsx\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Input__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                labelOne: \"Address\",\n                typeOne: \"text\",\n                inputOneName: \"address\",\n                labelTwo: \"Postal Code\",\n                typeTwo: \"text\",\n                inputTwoName: \"postal-code\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\wwwko\\\\Desktop\\\\Next-Project\\\\brandbuilder-intern\\\\Client\\\\src\\\\app\\\\auth\\\\onbar\\\\info\\\\page.jsx\",\n                lineNumber: 70,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Input__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                labelOne: \"New Password\",\n                typeOne: \"text\",\n                inputOneName: \"new-password\",\n                labelTwo: \"Confirm Password\",\n                typeTwo: \"text\",\n                inputTwoName: \"confirm-password\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\wwwko\\\\Desktop\\\\Next-Project\\\\brandbuilder-intern\\\\Client\\\\src\\\\app\\\\auth\\\\onbar\\\\info\\\\page.jsx\",\n                lineNumber: 78,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"submit\",\n                className: \"bg-gray-600 text-white p-2 mt-5 min-w-96 font-bold\",\n                children: \"Apply\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\wwwko\\\\Desktop\\\\Next-Project\\\\brandbuilder-intern\\\\Client\\\\src\\\\app\\\\auth\\\\onbar\\\\info\\\\page.jsx\",\n                lineNumber: 87,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\wwwko\\\\Desktop\\\\Next-Project\\\\brandbuilder-intern\\\\Client\\\\src\\\\app\\\\auth\\\\onbar\\\\info\\\\page.jsx\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Info;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Info);\nvar _c;\n$RefreshReg$(_c, \"Info\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvYXV0aC9vbmJhci9pbmZvL3BhZ2UuanN4IiwibWFwcGluZ3MiOiI7Ozs7OztBQUV3QztBQUNkO0FBRTFCLE1BQU1FLE9BQU87SUFDWCxNQUFNQyxlQUFlLENBQUNDO1FBQ3BCQSxFQUFFQyxjQUFjO1FBQ2hCLCtCQUErQjtRQUMvQixNQUFNQyxXQUFXLElBQUlDLFNBQVNDLE1BQU1DLE1BQU07UUFFMUMsb0NBQW9DO1FBQ3BDLG9EQUFvRDtRQUNwRCxzQ0FBc0M7UUFDdEMsSUFBSTtRQUVKLE1BQU1DLG1CQUFtQixDQUFDSjtZQUN4QixNQUFNSyxTQUFTLENBQUM7WUFDaEJMLFNBQVNNLE9BQU8sQ0FBQyxDQUFDQyxPQUFPQztnQkFDdkJILE1BQU0sQ0FBQ0csSUFBSSxHQUFHRDtZQUNoQjtZQUNBLE9BQU9GO1FBQ1Q7UUFFQSxpQkFBaUI7UUFDakIsTUFBTUksaUJBQWlCTCxpQkFBaUJKO1FBQ3hDVSxRQUFRQyxHQUFHLENBQUMsWUFBWUY7SUFDMUI7SUFFQSxxQkFDRSw4REFBQ0c7UUFBS0MsV0FBVTtRQUFnQ0MsVUFBVWpCOzswQkFDeEQsOERBQUNrQjtnQkFBR0YsV0FBVTswQkFBMEI7Ozs7OzswQkFFeEMsOERBQUNuQix5REFBTUE7Z0JBQ0xzQixVQUFTO2dCQUNUQyxTQUFRO2dCQUNSQyxjQUFhO2dCQUNiQyxVQUFTO2dCQUNUQyxTQUFRO2dCQUNSQyxjQUFhOzs7Ozs7MEJBRWYsOERBQUMzQix5REFBTUE7Z0JBQ0xzQixVQUFTO2dCQUNUQyxTQUFRO2dCQUNSQyxjQUFhO2dCQUNiQyxVQUFTO2dCQUNUQyxTQUFRO2dCQUNSQyxjQUFhOzs7Ozs7MEJBRWYsOERBQUMzQix5REFBTUE7Z0JBQ0xzQixVQUFTO2dCQUNUQyxTQUFRO2dCQUNSQyxjQUFhO2dCQUNiQyxVQUFTO2dCQUNUQyxTQUFRO2dCQUNSQyxjQUFhOzs7Ozs7MEJBR2YsOERBQUNDO2dCQUFJVCxXQUFVOztrQ0FDYiw4REFBQ1U7d0JBQU1DLFNBQVE7a0NBQVU7Ozs7OztvQkFBc0I7a0NBQUMsOERBQUNDOzs7OztrQ0FDakQsOERBQUNDO3dCQUNDQyxjQUFhO3dCQUNiQyxNQUFLO3dCQUNMQyxNQUFLO3dCQUNMQyxJQUFHO3dCQUNIakIsV0FBVTs7Ozs7Ozs7Ozs7OzBCQUlkLDhEQUFDbkIseURBQU1BO2dCQUNMc0IsVUFBUztnQkFDVEMsU0FBUTtnQkFDUkMsY0FBYTtnQkFDYkMsVUFBUztnQkFDVEMsU0FBUTtnQkFDUkMsY0FBYTs7Ozs7OzBCQUVmLDhEQUFDM0IseURBQU1BO2dCQUNMc0IsVUFBUztnQkFDVEMsU0FBUTtnQkFDUkMsY0FBYTtnQkFDYkMsVUFBUztnQkFDVEMsU0FBUTtnQkFDUkMsY0FBYTs7Ozs7OzBCQUdmLDhEQUFDVTtnQkFDQ0gsTUFBSztnQkFDTGYsV0FBVTswQkFDWDs7Ozs7Ozs7Ozs7O0FBS1A7S0F6Rk1qQjtBQTJGTiwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2F1dGgvb25iYXIvaW5mby9wYWdlLmpzeD9lNzFhIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5cclxuaW1wb3J0IElucHV0cyBmcm9tIFwiQC9jb21wb25lbnRzL0lucHV0XCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IEluZm8gPSAoKSA9PiB7XHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIC8vIGNvbnN0IGZvcm0gPSBuZXcgRm9ybURhdGEoKTtcclxuICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKGV2ZW50LnRhcmdldCk7XHJcblxyXG4gICAgLy8gLy8gSXRlcmF0ZSBvdmVyIGZvcm0gZGF0YSBlbnRyaWVzXHJcbiAgICAvLyBmb3IgKGNvbnN0IFtuYW1lLCB2YWx1ZV0gb2YgZm9ybURhdGEuZW50cmllcygpKSB7XHJcbiAgICAvLyAgIGNvbnNvbGUubG9nKGAke25hbWV9OiAke3ZhbHVlfWApO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIGNvbnN0IGZvcm1EYXRhVG9PYmplY3QgPSAoZm9ybURhdGEpID0+IHtcclxuICAgICAgY29uc3Qgb2JqZWN0ID0ge307XHJcbiAgICAgIGZvcm1EYXRhLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHtcclxuICAgICAgICBvYmplY3Rba2V5XSA9IHZhbHVlO1xyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIG9iamVjdDtcclxuICAgIH07XHJcblxyXG4gICAgLy8gRXhhbXBsZSB1c2FnZTpcclxuICAgIGNvbnN0IGZvcm1EYXRhT2JqZWN0ID0gZm9ybURhdGFUb09iamVjdChmb3JtRGF0YSk7XHJcbiAgICBjb25zb2xlLmxvZyhcImZvcm1EYXRhXCIsIGZvcm1EYXRhT2JqZWN0KTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGZvcm0gY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdy1mdWxsIHB4LTEwIHB5LThcIiBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtNHhsIG1iLTUgZm9udC1ib2xkXCI+RmlsbCB5b3VyIHBlcnNvbmFsIGluZm88L2gyPlxyXG5cclxuICAgICAgPElucHV0c1xyXG4gICAgICAgIGxhYmVsT25lPVwiTmFtZVwiXHJcbiAgICAgICAgdHlwZU9uZT1cInRleHRcIlxyXG4gICAgICAgIGlucHV0T25lTmFtZT1cIm5hbWVcIlxyXG4gICAgICAgIGxhYmVsVHdvPVwiTGFzdCBOYW1lXCJcclxuICAgICAgICB0eXBlVHdvPVwidGV4dFwiXHJcbiAgICAgICAgaW5wdXRUd29OYW1lPVwibGFzdC1uYW1lXCJcclxuICAgICAgLz5cclxuICAgICAgPElucHV0c1xyXG4gICAgICAgIGxhYmVsT25lPVwiRW1haWwgQWRkcmVzc1wiXHJcbiAgICAgICAgdHlwZU9uZT1cImVtYWlsXCJcclxuICAgICAgICBpbnB1dE9uZU5hbWU9XCJlbWFpbFwiXHJcbiAgICAgICAgbGFiZWxUd289XCJQaG9uZSBOdW1iZXJcIlxyXG4gICAgICAgIHR5cGVUd289XCJudW1iZXJcIlxyXG4gICAgICAgIGlucHV0VHdvTmFtZT1cInBob25lLW51bWJlclwiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxJbnB1dHNcclxuICAgICAgICBsYWJlbE9uZT1cIlVzZXIgTmFtZVwiXHJcbiAgICAgICAgdHlwZU9uZT1cInRleHRcIlxyXG4gICAgICAgIGlucHV0T25lTmFtZT1cInVzZXItbmFtZVwiXHJcbiAgICAgICAgbGFiZWxUd289XCJCdXNpbmVzcyBOYW1lXCJcclxuICAgICAgICB0eXBlVHdvPVwidGV4dFwiXHJcbiAgICAgICAgaW5wdXRUd29OYW1lPVwiYnVzaW5lc3MtbmFtZVwiXHJcbiAgICAgIC8+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1yLWF1dG8gdGV4dC1sZWZ0ICB3LTEvMiBweC03XCI+XHJcbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJjb3VudHJ5XCI+Q291bnRyeS9SZWdpb248L2xhYmVsPiA8YnIgLz5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIGF1dG9Db21wbGV0ZT1cIm5vXCJcclxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgIG5hbWU9XCJjb3VudHJ5XCJcclxuICAgICAgICAgIGlkPVwiY291bnRyeVwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJiZy1ncmF5LTMwMCBwLTEuNSBweC0yIHRleHQtZ3JheS02MDAgbXQtMSB3LWZ1bGwgaG92ZXI6b3V0bGluZS1ub25lXCJcclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxJbnB1dHNcclxuICAgICAgICBsYWJlbE9uZT1cIkFkZHJlc3NcIlxyXG4gICAgICAgIHR5cGVPbmU9XCJ0ZXh0XCJcclxuICAgICAgICBpbnB1dE9uZU5hbWU9XCJhZGRyZXNzXCJcclxuICAgICAgICBsYWJlbFR3bz1cIlBvc3RhbCBDb2RlXCJcclxuICAgICAgICB0eXBlVHdvPVwidGV4dFwiXHJcbiAgICAgICAgaW5wdXRUd29OYW1lPVwicG9zdGFsLWNvZGVcIlxyXG4gICAgICAvPlxyXG4gICAgICA8SW5wdXRzXHJcbiAgICAgICAgbGFiZWxPbmU9XCJOZXcgUGFzc3dvcmRcIlxyXG4gICAgICAgIHR5cGVPbmU9XCJ0ZXh0XCJcclxuICAgICAgICBpbnB1dE9uZU5hbWU9XCJuZXctcGFzc3dvcmRcIlxyXG4gICAgICAgIGxhYmVsVHdvPVwiQ29uZmlybSBQYXNzd29yZFwiXHJcbiAgICAgICAgdHlwZVR3bz1cInRleHRcIlxyXG4gICAgICAgIGlucHV0VHdvTmFtZT1cImNvbmZpcm0tcGFzc3dvcmRcIlxyXG4gICAgICAvPlxyXG5cclxuICAgICAgPGJ1dHRvblxyXG4gICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgIGNsYXNzTmFtZT1cImJnLWdyYXktNjAwIHRleHQtd2hpdGUgcC0yIG10LTUgbWluLXctOTYgZm9udC1ib2xkXCJcclxuICAgICAgPlxyXG4gICAgICAgIEFwcGx5XHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgPC9mb3JtPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmZvO1xyXG4iXSwibmFtZXMiOlsiSW5wdXRzIiwiUmVhY3QiLCJJbmZvIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImV2ZW50IiwidGFyZ2V0IiwiZm9ybURhdGFUb09iamVjdCIsIm9iamVjdCIsImZvckVhY2giLCJ2YWx1ZSIsImtleSIsImZvcm1EYXRhT2JqZWN0IiwiY29uc29sZSIsImxvZyIsImZvcm0iLCJjbGFzc05hbWUiLCJvblN1Ym1pdCIsImgyIiwibGFiZWxPbmUiLCJ0eXBlT25lIiwiaW5wdXRPbmVOYW1lIiwibGFiZWxUd28iLCJ0eXBlVHdvIiwiaW5wdXRUd29OYW1lIiwiZGl2IiwibGFiZWwiLCJodG1sRm9yIiwiYnIiLCJpbnB1dCIsImF1dG9Db21wbGV0ZSIsInR5cGUiLCJuYW1lIiwiaWQiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/auth/onbar/info/page.jsx\n"));

/***/ })

});