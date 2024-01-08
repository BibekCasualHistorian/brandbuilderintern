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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_Input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Input */ \"(app-pages-browser)/./src/components/Input.jsx\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst Info = ()=>{\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        // const form = new FormData();\n        const formData = new FormData(event.target);\n        // // Iterate over form data entries\n        // for (const [name, value] of formData.entries()) {\n        //   console.log(`${name}: ${value}`);\n        // }\n        const formDataToObject = (formData)=>{\n            const object = {};\n            formData.forEach((value, key)=>{\n                object[key] = value;\n            });\n            return object;\n        };\n        // Example usage:\n        let formDataObject = formDataToObject(formData);\n        const userId = JSON.parse(localStorage.getItem(\"user\"));\n        formDataObject = {\n            ...formDataObject,\n            _id: userId._id\n        };\n        try {\n            const response = await fetch(\"\", {\n                method: \"POST\",\n                body: JSON.stringify(formDataObject),\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                }\n            });\n            const data1 = await response.json();\n            console.log(\"response\", response);\n            console.log(\"data\", data1);\n            if (response.ok) {\n                router.push(\"/auth/onbar/store\");\n            } else {\n                throw Error(data1.error);\n            }\n        } catch (error) {\n            setError(data.message);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        className: \"text-center w-full px-10 py-8\",\n        onSubmit: handleSubmit,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-4xl mb-5 font-bold\",\n                children: \"Fill your personal info\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\wwwko\\\\Desktop\\\\Next-Project\\\\brandbuilder-intern\\\\Client\\\\src\\\\app\\\\auth\\\\onbar\\\\info\\\\page.jsx\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Input__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                labelOne: \"Name\",\n                typeOne: \"text\",\n                inputOneName: \"name\",\n                labelTwo: \"Last Name\",\n                typeTwo: \"text\",\n                inputTwoName: \"lastName\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\wwwko\\\\Desktop\\\\Next-Project\\\\brandbuilder-intern\\\\Client\\\\src\\\\app\\\\auth\\\\onbar\\\\info\\\\page.jsx\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Input__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                labelOne: \"Email Address\",\n                typeOne: \"email\",\n                inputOneName: \"email\",\n                labelTwo: \"Phone Number\",\n                typeTwo: \"number\",\n                inputTwoName: \"phoneNumber\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\wwwko\\\\Desktop\\\\Next-Project\\\\brandbuilder-intern\\\\Client\\\\src\\\\app\\\\auth\\\\onbar\\\\info\\\\page.jsx\",\n                lineNumber: 68,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Input__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                labelOne: \"User Name\",\n                typeOne: \"text\",\n                inputOneName: \"user-name\",\n                labelTwo: \"Business Name\",\n                typeTwo: \"text\",\n                inputTwoName: \"businessName\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\wwwko\\\\Desktop\\\\Next-Project\\\\brandbuilder-intern\\\\Client\\\\src\\\\app\\\\auth\\\\onbar\\\\info\\\\page.jsx\",\n                lineNumber: 76,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mr-auto text-left  w-1/2 px-7\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"country\",\n                        children: \"Country/Region\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\wwwko\\\\Desktop\\\\Next-Project\\\\brandbuilder-intern\\\\Client\\\\src\\\\app\\\\auth\\\\onbar\\\\info\\\\page.jsx\",\n                        lineNumber: 86,\n                        columnNumber: 9\n                    }, undefined),\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\wwwko\\\\Desktop\\\\Next-Project\\\\brandbuilder-intern\\\\Client\\\\src\\\\app\\\\auth\\\\onbar\\\\info\\\\page.jsx\",\n                        lineNumber: 86,\n                        columnNumber: 57\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        autoComplete: \"no\",\n                        type: \"text\",\n                        name: \"country\",\n                        id: \"country\",\n                        className: \"bg-gray-300 p-1.5 px-2 text-gray-600 mt-1 w-full hover:outline-none\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\wwwko\\\\Desktop\\\\Next-Project\\\\brandbuilder-intern\\\\Client\\\\src\\\\app\\\\auth\\\\onbar\\\\info\\\\page.jsx\",\n                        lineNumber: 87,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\wwwko\\\\Desktop\\\\Next-Project\\\\brandbuilder-intern\\\\Client\\\\src\\\\app\\\\auth\\\\onbar\\\\info\\\\page.jsx\",\n                lineNumber: 85,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Input__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                labelOne: \"Address\",\n                typeOne: \"text\",\n                inputOneName: \"address\",\n                labelTwo: \"Postal Code\",\n                typeTwo: \"text\",\n                inputTwoName: \"postalCode\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\wwwko\\\\Desktop\\\\Next-Project\\\\brandbuilder-intern\\\\Client\\\\src\\\\app\\\\auth\\\\onbar\\\\info\\\\page.jsx\",\n                lineNumber: 96,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Input__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                labelOne: \"New Password\",\n                typeOne: \"text\",\n                inputOneName: \"newPassword\",\n                labelTwo: \"Confirm Password\",\n                typeTwo: \"text\",\n                inputTwoName: \"confirmPassword\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\wwwko\\\\Desktop\\\\Next-Project\\\\brandbuilder-intern\\\\Client\\\\src\\\\app\\\\auth\\\\onbar\\\\info\\\\page.jsx\",\n                lineNumber: 104,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"submit\",\n                className: \"bg-gray-600 text-white p-2 mt-5 min-w-96 font-bold\",\n                children: \"Apply\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\wwwko\\\\Desktop\\\\Next-Project\\\\brandbuilder-intern\\\\Client\\\\src\\\\app\\\\auth\\\\onbar\\\\info\\\\page.jsx\",\n                lineNumber: 113,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\wwwko\\\\Desktop\\\\Next-Project\\\\brandbuilder-intern\\\\Client\\\\src\\\\app\\\\auth\\\\onbar\\\\info\\\\page.jsx\",\n        lineNumber: 57,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Info, \"KDKwCBjrq/eX1TNfFL0ofKQj1Lg=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Info;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Info);\nvar _c;\n$RefreshReg$(_c, \"Info\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvYXV0aC9vbmJhci9pbmZvL3BhZ2UuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUV3QztBQUNJO0FBQ0o7QUFFeEMsTUFBTUksT0FBTzs7SUFDWCxNQUFNQyxTQUFTSiwwREFBU0E7SUFFeEIsTUFBTSxDQUFDSyxPQUFPQyxTQUFTLEdBQUdKLCtDQUFRQSxDQUFDO0lBRW5DLE1BQU1LLGVBQWUsT0FBT0M7UUFDMUJBLEVBQUVDLGNBQWM7UUFDaEIsK0JBQStCO1FBQy9CLE1BQU1DLFdBQVcsSUFBSUMsU0FBU0MsTUFBTUMsTUFBTTtRQUUxQyxvQ0FBb0M7UUFDcEMsb0RBQW9EO1FBQ3BELHNDQUFzQztRQUN0QyxJQUFJO1FBRUosTUFBTUMsbUJBQW1CLENBQUNKO1lBQ3hCLE1BQU1LLFNBQVMsQ0FBQztZQUNoQkwsU0FBU00sT0FBTyxDQUFDLENBQUNDLE9BQU9DO2dCQUN2QkgsTUFBTSxDQUFDRyxJQUFJLEdBQUdEO1lBQ2hCO1lBQ0EsT0FBT0Y7UUFDVDtRQUVBLGlCQUFpQjtRQUNqQixJQUFJSSxpQkFBaUJMLGlCQUFpQko7UUFFdEMsTUFBTVUsU0FBU0MsS0FBS0MsS0FBSyxDQUFDQyxhQUFhQyxPQUFPLENBQUM7UUFDL0NMLGlCQUFpQjtZQUFFLEdBQUdBLGNBQWM7WUFBRU0sS0FBS0wsT0FBT0ssR0FBRztRQUFDO1FBQ3RELElBQUk7WUFDRixNQUFNQyxXQUFXLE1BQU1DLE1BQU0sSUFBSTtnQkFDL0JDLFFBQVE7Z0JBQ1JDLE1BQU1SLEtBQUtTLFNBQVMsQ0FBQ1g7Z0JBQ3JCWSxTQUFTO29CQUNQLGdCQUFnQjtnQkFDbEI7WUFDRjtZQUNBLE1BQU1DLFFBQU8sTUFBTU4sU0FBU08sSUFBSTtZQUNoQ0MsUUFBUUMsR0FBRyxDQUFDLFlBQVlUO1lBQ3hCUSxRQUFRQyxHQUFHLENBQUMsUUFBUUg7WUFDcEIsSUFBSU4sU0FBU1UsRUFBRSxFQUFFO2dCQUNmaEMsT0FBT2lDLElBQUksQ0FBQztZQUNkLE9BQU87Z0JBQ0wsTUFBTUMsTUFBTU4sTUFBSzNCLEtBQUs7WUFDeEI7UUFDRixFQUFFLE9BQU9BLE9BQU87WUFDZEMsU0FBUzBCLEtBQUtPLE9BQU87UUFDdkI7SUFDRjtJQUVBLHFCQUNFLDhEQUFDQztRQUFLQyxXQUFVO1FBQWdDQyxVQUFVbkM7OzBCQUN4RCw4REFBQ29DO2dCQUFHRixXQUFVOzBCQUEwQjs7Ozs7OzBCQUV4Qyw4REFBQzFDLHlEQUFNQTtnQkFDTDZDLFVBQVM7Z0JBQ1RDLFNBQVE7Z0JBQ1JDLGNBQWE7Z0JBQ2JDLFVBQVM7Z0JBQ1RDLFNBQVE7Z0JBQ1JDLGNBQWE7Ozs7OzswQkFFZiw4REFBQ2xELHlEQUFNQTtnQkFDTDZDLFVBQVM7Z0JBQ1RDLFNBQVE7Z0JBQ1JDLGNBQWE7Z0JBQ2JDLFVBQVM7Z0JBQ1RDLFNBQVE7Z0JBQ1JDLGNBQWE7Ozs7OzswQkFFZiw4REFBQ2xELHlEQUFNQTtnQkFDTDZDLFVBQVM7Z0JBQ1RDLFNBQVE7Z0JBQ1JDLGNBQWE7Z0JBQ2JDLFVBQVM7Z0JBQ1RDLFNBQVE7Z0JBQ1JDLGNBQWE7Ozs7OzswQkFHZiw4REFBQ0M7Z0JBQUlULFdBQVU7O2tDQUNiLDhEQUFDVTt3QkFBTUMsU0FBUTtrQ0FBVTs7Ozs7O29CQUFzQjtrQ0FBQyw4REFBQ0M7Ozs7O2tDQUNqRCw4REFBQ0M7d0JBQ0NDLGNBQWE7d0JBQ2JDLE1BQUs7d0JBQ0xDLE1BQUs7d0JBQ0xDLElBQUc7d0JBQ0hqQixXQUFVOzs7Ozs7Ozs7Ozs7MEJBSWQsOERBQUMxQyx5REFBTUE7Z0JBQ0w2QyxVQUFTO2dCQUNUQyxTQUFRO2dCQUNSQyxjQUFhO2dCQUNiQyxVQUFTO2dCQUNUQyxTQUFRO2dCQUNSQyxjQUFhOzs7Ozs7MEJBRWYsOERBQUNsRCx5REFBTUE7Z0JBQ0w2QyxVQUFTO2dCQUNUQyxTQUFRO2dCQUNSQyxjQUFhO2dCQUNiQyxVQUFTO2dCQUNUQyxTQUFRO2dCQUNSQyxjQUFhOzs7Ozs7MEJBR2YsOERBQUNVO2dCQUNDSCxNQUFLO2dCQUNMZixXQUFVOzBCQUNYOzs7Ozs7Ozs7Ozs7QUFLUDtHQWxITXRDOztRQUNXSCxzREFBU0E7OztLQURwQkc7QUFvSE4sK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9hdXRoL29uYmFyL2luZm8vcGFnZS5qc3g/ZTcxYSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuXHJcbmltcG9ydCBJbnB1dHMgZnJvbSBcIkAvY29tcG9uZW50cy9JbnB1dFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgSW5mbyA9ICgpID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIC8vIGNvbnN0IGZvcm0gPSBuZXcgRm9ybURhdGEoKTtcclxuICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKGV2ZW50LnRhcmdldCk7XHJcblxyXG4gICAgLy8gLy8gSXRlcmF0ZSBvdmVyIGZvcm0gZGF0YSBlbnRyaWVzXHJcbiAgICAvLyBmb3IgKGNvbnN0IFtuYW1lLCB2YWx1ZV0gb2YgZm9ybURhdGEuZW50cmllcygpKSB7XHJcbiAgICAvLyAgIGNvbnNvbGUubG9nKGAke25hbWV9OiAke3ZhbHVlfWApO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIGNvbnN0IGZvcm1EYXRhVG9PYmplY3QgPSAoZm9ybURhdGEpID0+IHtcclxuICAgICAgY29uc3Qgb2JqZWN0ID0ge307XHJcbiAgICAgIGZvcm1EYXRhLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHtcclxuICAgICAgICBvYmplY3Rba2V5XSA9IHZhbHVlO1xyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIG9iamVjdDtcclxuICAgIH07XHJcblxyXG4gICAgLy8gRXhhbXBsZSB1c2FnZTpcclxuICAgIGxldCBmb3JtRGF0YU9iamVjdCA9IGZvcm1EYXRhVG9PYmplY3QoZm9ybURhdGEpO1xyXG5cclxuICAgIGNvbnN0IHVzZXJJZCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyXCIpKTtcclxuICAgIGZvcm1EYXRhT2JqZWN0ID0geyAuLi5mb3JtRGF0YU9iamVjdCwgX2lkOiB1c2VySWQuX2lkIH07XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiXCIsIHtcclxuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGZvcm1EYXRhT2JqZWN0KSxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgY29uc29sZS5sb2coXCJyZXNwb25zZVwiLCByZXNwb25zZSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiZGF0YVwiLCBkYXRhKTtcclxuICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgcm91dGVyLnB1c2goXCIvYXV0aC9vbmJhci9zdG9yZVwiKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aHJvdyBFcnJvcihkYXRhLmVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgc2V0RXJyb3IoZGF0YS5tZXNzYWdlKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGZvcm0gY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdy1mdWxsIHB4LTEwIHB5LThcIiBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtNHhsIG1iLTUgZm9udC1ib2xkXCI+RmlsbCB5b3VyIHBlcnNvbmFsIGluZm88L2gyPlxyXG5cclxuICAgICAgPElucHV0c1xyXG4gICAgICAgIGxhYmVsT25lPVwiTmFtZVwiXHJcbiAgICAgICAgdHlwZU9uZT1cInRleHRcIlxyXG4gICAgICAgIGlucHV0T25lTmFtZT1cIm5hbWVcIlxyXG4gICAgICAgIGxhYmVsVHdvPVwiTGFzdCBOYW1lXCJcclxuICAgICAgICB0eXBlVHdvPVwidGV4dFwiXHJcbiAgICAgICAgaW5wdXRUd29OYW1lPVwibGFzdE5hbWVcIlxyXG4gICAgICAvPlxyXG4gICAgICA8SW5wdXRzXHJcbiAgICAgICAgbGFiZWxPbmU9XCJFbWFpbCBBZGRyZXNzXCJcclxuICAgICAgICB0eXBlT25lPVwiZW1haWxcIlxyXG4gICAgICAgIGlucHV0T25lTmFtZT1cImVtYWlsXCJcclxuICAgICAgICBsYWJlbFR3bz1cIlBob25lIE51bWJlclwiXHJcbiAgICAgICAgdHlwZVR3bz1cIm51bWJlclwiXHJcbiAgICAgICAgaW5wdXRUd29OYW1lPVwicGhvbmVOdW1iZXJcIlxyXG4gICAgICAvPlxyXG4gICAgICA8SW5wdXRzXHJcbiAgICAgICAgbGFiZWxPbmU9XCJVc2VyIE5hbWVcIlxyXG4gICAgICAgIHR5cGVPbmU9XCJ0ZXh0XCJcclxuICAgICAgICBpbnB1dE9uZU5hbWU9XCJ1c2VyLW5hbWVcIlxyXG4gICAgICAgIGxhYmVsVHdvPVwiQnVzaW5lc3MgTmFtZVwiXHJcbiAgICAgICAgdHlwZVR3bz1cInRleHRcIlxyXG4gICAgICAgIGlucHV0VHdvTmFtZT1cImJ1c2luZXNzTmFtZVwiXHJcbiAgICAgIC8+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1yLWF1dG8gdGV4dC1sZWZ0ICB3LTEvMiBweC03XCI+XHJcbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJjb3VudHJ5XCI+Q291bnRyeS9SZWdpb248L2xhYmVsPiA8YnIgLz5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIGF1dG9Db21wbGV0ZT1cIm5vXCJcclxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgIG5hbWU9XCJjb3VudHJ5XCJcclxuICAgICAgICAgIGlkPVwiY291bnRyeVwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJiZy1ncmF5LTMwMCBwLTEuNSBweC0yIHRleHQtZ3JheS02MDAgbXQtMSB3LWZ1bGwgaG92ZXI6b3V0bGluZS1ub25lXCJcclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxJbnB1dHNcclxuICAgICAgICBsYWJlbE9uZT1cIkFkZHJlc3NcIlxyXG4gICAgICAgIHR5cGVPbmU9XCJ0ZXh0XCJcclxuICAgICAgICBpbnB1dE9uZU5hbWU9XCJhZGRyZXNzXCJcclxuICAgICAgICBsYWJlbFR3bz1cIlBvc3RhbCBDb2RlXCJcclxuICAgICAgICB0eXBlVHdvPVwidGV4dFwiXHJcbiAgICAgICAgaW5wdXRUd29OYW1lPVwicG9zdGFsQ29kZVwiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxJbnB1dHNcclxuICAgICAgICBsYWJlbE9uZT1cIk5ldyBQYXNzd29yZFwiXHJcbiAgICAgICAgdHlwZU9uZT1cInRleHRcIlxyXG4gICAgICAgIGlucHV0T25lTmFtZT1cIm5ld1Bhc3N3b3JkXCJcclxuICAgICAgICBsYWJlbFR3bz1cIkNvbmZpcm0gUGFzc3dvcmRcIlxyXG4gICAgICAgIHR5cGVUd289XCJ0ZXh0XCJcclxuICAgICAgICBpbnB1dFR3b05hbWU9XCJjb25maXJtUGFzc3dvcmRcIlxyXG4gICAgICAvPlxyXG5cclxuICAgICAgPGJ1dHRvblxyXG4gICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgIGNsYXNzTmFtZT1cImJnLWdyYXktNjAwIHRleHQtd2hpdGUgcC0yIG10LTUgbWluLXctOTYgZm9udC1ib2xkXCJcclxuICAgICAgPlxyXG4gICAgICAgIEFwcGx5XHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgPC9mb3JtPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmZvO1xyXG4iXSwibmFtZXMiOlsiSW5wdXRzIiwidXNlUm91dGVyIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsIkluZm8iLCJyb3V0ZXIiLCJlcnJvciIsInNldEVycm9yIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImV2ZW50IiwidGFyZ2V0IiwiZm9ybURhdGFUb09iamVjdCIsIm9iamVjdCIsImZvckVhY2giLCJ2YWx1ZSIsImtleSIsImZvcm1EYXRhT2JqZWN0IiwidXNlcklkIiwiSlNPTiIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIl9pZCIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJib2R5Iiwic3RyaW5naWZ5IiwiaGVhZGVycyIsImRhdGEiLCJqc29uIiwiY29uc29sZSIsImxvZyIsIm9rIiwicHVzaCIsIkVycm9yIiwibWVzc2FnZSIsImZvcm0iLCJjbGFzc05hbWUiLCJvblN1Ym1pdCIsImgyIiwibGFiZWxPbmUiLCJ0eXBlT25lIiwiaW5wdXRPbmVOYW1lIiwibGFiZWxUd28iLCJ0eXBlVHdvIiwiaW5wdXRUd29OYW1lIiwiZGl2IiwibGFiZWwiLCJodG1sRm9yIiwiYnIiLCJpbnB1dCIsImF1dG9Db21wbGV0ZSIsInR5cGUiLCJuYW1lIiwiaWQiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/auth/onbar/info/page.jsx\n"));

/***/ })

});