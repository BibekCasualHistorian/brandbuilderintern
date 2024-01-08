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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_Input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Input */ \"(app-pages-browser)/./src/components/Input.jsx\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst Info = ()=>{\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        // const form = new FormData();\n        const formData = new FormData(event.target);\n        // // Iterate over form data entries\n        // for (const [name, value] of formData.entries()) {\n        //   console.log(`${name}: ${value}`);\n        // }\n        const formDataToObject = (formData)=>{\n            const object = {};\n            formData.forEach((value, key)=>{\n                object[key] = value;\n            });\n            return object;\n        };\n        // Example usage:\n        let formDataObject = formDataToObject(formData);\n        const userId = JSON.parse(localStorage.getItem(\"user\"));\n        formDataObject = {\n            ...formDataObject,\n            _id: userId._id\n        };\n        try {\n            const response = await fetch(\"\", {\n                method: \"POST\",\n                body: JSON.stringify(formDataObject),\n                headersP\n            });\n            const data1 = await response.json();\n            console.log(\"response\", response);\n            console.log(\"data\", data1);\n            if (response.ok) {\n                router.push(\"/auth/onbar/store\");\n            } else {\n                throw Error(data1.error);\n            }\n        } catch (error) {\n            setError(data.message);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        className: \"text-center w-full px-10 py-8\",\n        onSubmit: handleSubmit,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-4xl mb-5 font-bold\",\n                children: \"Fill your personal info\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\wwwko\\\\Desktop\\\\Next-Project\\\\brandbuilder-intern\\\\Client\\\\src\\\\app\\\\auth\\\\onbar\\\\info\\\\page.jsx\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Input__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                labelOne: \"Name\",\n                typeOne: \"text\",\n                inputOneName: \"name\",\n                labelTwo: \"Last Name\",\n                typeTwo: \"text\",\n                inputTwoName: \"last-name\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\wwwko\\\\Desktop\\\\Next-Project\\\\brandbuilder-intern\\\\Client\\\\src\\\\app\\\\auth\\\\onbar\\\\info\\\\page.jsx\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Input__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                labelOne: \"Email Address\",\n                typeOne: \"email\",\n                inputOneName: \"email\",\n                labelTwo: \"Phone Number\",\n                typeTwo: \"number\",\n                inputTwoName: \"phone-number\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\wwwko\\\\Desktop\\\\Next-Project\\\\brandbuilder-intern\\\\Client\\\\src\\\\app\\\\auth\\\\onbar\\\\info\\\\page.jsx\",\n                lineNumber: 66,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Input__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                labelOne: \"User Name\",\n                typeOne: \"text\",\n                inputOneName: \"user-name\",\n                labelTwo: \"Business Name\",\n                typeTwo: \"text\",\n                inputTwoName: \"business-name\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\wwwko\\\\Desktop\\\\Next-Project\\\\brandbuilder-intern\\\\Client\\\\src\\\\app\\\\auth\\\\onbar\\\\info\\\\page.jsx\",\n                lineNumber: 74,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mr-auto text-left  w-1/2 px-7\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"country\",\n                        children: \"Country/Region\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\wwwko\\\\Desktop\\\\Next-Project\\\\brandbuilder-intern\\\\Client\\\\src\\\\app\\\\auth\\\\onbar\\\\info\\\\page.jsx\",\n                        lineNumber: 84,\n                        columnNumber: 9\n                    }, undefined),\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\wwwko\\\\Desktop\\\\Next-Project\\\\brandbuilder-intern\\\\Client\\\\src\\\\app\\\\auth\\\\onbar\\\\info\\\\page.jsx\",\n                        lineNumber: 84,\n                        columnNumber: 57\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        autoComplete: \"no\",\n                        type: \"text\",\n                        name: \"country\",\n                        id: \"country\",\n                        className: \"bg-gray-300 p-1.5 px-2 text-gray-600 mt-1 w-full hover:outline-none\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\wwwko\\\\Desktop\\\\Next-Project\\\\brandbuilder-intern\\\\Client\\\\src\\\\app\\\\auth\\\\onbar\\\\info\\\\page.jsx\",\n                        lineNumber: 85,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\wwwko\\\\Desktop\\\\Next-Project\\\\brandbuilder-intern\\\\Client\\\\src\\\\app\\\\auth\\\\onbar\\\\info\\\\page.jsx\",\n                lineNumber: 83,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Input__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                labelOne: \"Address\",\n                typeOne: \"text\",\n                inputOneName: \"address\",\n                labelTwo: \"Postal Code\",\n                typeTwo: \"text\",\n                inputTwoName: \"postal-code\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\wwwko\\\\Desktop\\\\Next-Project\\\\brandbuilder-intern\\\\Client\\\\src\\\\app\\\\auth\\\\onbar\\\\info\\\\page.jsx\",\n                lineNumber: 94,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Input__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                labelOne: \"New Password\",\n                typeOne: \"text\",\n                inputOneName: \"new-password\",\n                labelTwo: \"Confirm Password\",\n                typeTwo: \"text\",\n                inputTwoName: \"confirm-password\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\wwwko\\\\Desktop\\\\Next-Project\\\\brandbuilder-intern\\\\Client\\\\src\\\\app\\\\auth\\\\onbar\\\\info\\\\page.jsx\",\n                lineNumber: 102,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"submit\",\n                className: \"bg-gray-600 text-white p-2 mt-5 min-w-96 font-bold\",\n                children: \"Apply\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\wwwko\\\\Desktop\\\\Next-Project\\\\brandbuilder-intern\\\\Client\\\\src\\\\app\\\\auth\\\\onbar\\\\info\\\\page.jsx\",\n                lineNumber: 111,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\wwwko\\\\Desktop\\\\Next-Project\\\\brandbuilder-intern\\\\Client\\\\src\\\\app\\\\auth\\\\onbar\\\\info\\\\page.jsx\",\n        lineNumber: 55,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Info, \"KDKwCBjrq/eX1TNfFL0ofKQj1Lg=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Info;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Info);\nvar _c;\n$RefreshReg$(_c, \"Info\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvYXV0aC9vbmJhci9pbmZvL3BhZ2UuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUV3QztBQUNJO0FBQ0o7QUFFeEMsTUFBTUksT0FBTzs7SUFDWCxNQUFNQyxTQUFTSiwwREFBU0E7SUFFeEIsTUFBTSxDQUFDSyxPQUFPQyxTQUFTLEdBQUdKLCtDQUFRQSxDQUFDO0lBRW5DLE1BQU1LLGVBQWUsT0FBT0M7UUFDMUJBLEVBQUVDLGNBQWM7UUFDaEIsK0JBQStCO1FBQy9CLE1BQU1DLFdBQVcsSUFBSUMsU0FBU0MsTUFBTUMsTUFBTTtRQUUxQyxvQ0FBb0M7UUFDcEMsb0RBQW9EO1FBQ3BELHNDQUFzQztRQUN0QyxJQUFJO1FBRUosTUFBTUMsbUJBQW1CLENBQUNKO1lBQ3hCLE1BQU1LLFNBQVMsQ0FBQztZQUNoQkwsU0FBU00sT0FBTyxDQUFDLENBQUNDLE9BQU9DO2dCQUN2QkgsTUFBTSxDQUFDRyxJQUFJLEdBQUdEO1lBQ2hCO1lBQ0EsT0FBT0Y7UUFDVDtRQUVBLGlCQUFpQjtRQUNqQixJQUFJSSxpQkFBaUJMLGlCQUFpQko7UUFFdEMsTUFBTVUsU0FBU0MsS0FBS0MsS0FBSyxDQUFDQyxhQUFhQyxPQUFPLENBQUM7UUFDL0NMLGlCQUFpQjtZQUFFLEdBQUdBLGNBQWM7WUFBRU0sS0FBS0wsT0FBT0ssR0FBRztRQUFDO1FBQ3RELElBQUk7WUFDRixNQUFNQyxXQUFXLE1BQU1DLE1BQU0sSUFBSTtnQkFDL0JDLFFBQVE7Z0JBQ1JDLE1BQU1SLEtBQUtTLFNBQVMsQ0FBQ1g7Z0JBQ3JCWTtZQUNGO1lBQ0EsTUFBTUMsUUFBTyxNQUFNTixTQUFTTyxJQUFJO1lBQ2hDQyxRQUFRQyxHQUFHLENBQUMsWUFBWVQ7WUFDeEJRLFFBQVFDLEdBQUcsQ0FBQyxRQUFRSDtZQUNwQixJQUFJTixTQUFTVSxFQUFFLEVBQUU7Z0JBQ2ZoQyxPQUFPaUMsSUFBSSxDQUFDO1lBQ2QsT0FBTztnQkFDTCxNQUFNQyxNQUFNTixNQUFLM0IsS0FBSztZQUN4QjtRQUNGLEVBQUUsT0FBT0EsT0FBTztZQUNkQyxTQUFTMEIsS0FBS08sT0FBTztRQUN2QjtJQUNGO0lBRUEscUJBQ0UsOERBQUNDO1FBQUtDLFdBQVU7UUFBZ0NDLFVBQVVuQzs7MEJBQ3hELDhEQUFDb0M7Z0JBQUdGLFdBQVU7MEJBQTBCOzs7Ozs7MEJBRXhDLDhEQUFDMUMseURBQU1BO2dCQUNMNkMsVUFBUztnQkFDVEMsU0FBUTtnQkFDUkMsY0FBYTtnQkFDYkMsVUFBUztnQkFDVEMsU0FBUTtnQkFDUkMsY0FBYTs7Ozs7OzBCQUVmLDhEQUFDbEQseURBQU1BO2dCQUNMNkMsVUFBUztnQkFDVEMsU0FBUTtnQkFDUkMsY0FBYTtnQkFDYkMsVUFBUztnQkFDVEMsU0FBUTtnQkFDUkMsY0FBYTs7Ozs7OzBCQUVmLDhEQUFDbEQseURBQU1BO2dCQUNMNkMsVUFBUztnQkFDVEMsU0FBUTtnQkFDUkMsY0FBYTtnQkFDYkMsVUFBUztnQkFDVEMsU0FBUTtnQkFDUkMsY0FBYTs7Ozs7OzBCQUdmLDhEQUFDQztnQkFBSVQsV0FBVTs7a0NBQ2IsOERBQUNVO3dCQUFNQyxTQUFRO2tDQUFVOzs7Ozs7b0JBQXNCO2tDQUFDLDhEQUFDQzs7Ozs7a0NBQ2pELDhEQUFDQzt3QkFDQ0MsY0FBYTt3QkFDYkMsTUFBSzt3QkFDTEMsTUFBSzt3QkFDTEMsSUFBRzt3QkFDSGpCLFdBQVU7Ozs7Ozs7Ozs7OzswQkFJZCw4REFBQzFDLHlEQUFNQTtnQkFDTDZDLFVBQVM7Z0JBQ1RDLFNBQVE7Z0JBQ1JDLGNBQWE7Z0JBQ2JDLFVBQVM7Z0JBQ1RDLFNBQVE7Z0JBQ1JDLGNBQWE7Ozs7OzswQkFFZiw4REFBQ2xELHlEQUFNQTtnQkFDTDZDLFVBQVM7Z0JBQ1RDLFNBQVE7Z0JBQ1JDLGNBQWE7Z0JBQ2JDLFVBQVM7Z0JBQ1RDLFNBQVE7Z0JBQ1JDLGNBQWE7Ozs7OzswQkFHZiw4REFBQ1U7Z0JBQ0NILE1BQUs7Z0JBQ0xmLFdBQVU7MEJBQ1g7Ozs7Ozs7Ozs7OztBQUtQO0dBaEhNdEM7O1FBQ1dILHNEQUFTQTs7O0tBRHBCRztBQWtITiwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2F1dGgvb25iYXIvaW5mby9wYWdlLmpzeD9lNzFhIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5cclxuaW1wb3J0IElucHV0cyBmcm9tIFwiQC9jb21wb25lbnRzL0lucHV0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBJbmZvID0gKCkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgLy8gY29uc3QgZm9ybSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZXZlbnQudGFyZ2V0KTtcclxuXHJcbiAgICAvLyAvLyBJdGVyYXRlIG92ZXIgZm9ybSBkYXRhIGVudHJpZXNcclxuICAgIC8vIGZvciAoY29uc3QgW25hbWUsIHZhbHVlXSBvZiBmb3JtRGF0YS5lbnRyaWVzKCkpIHtcclxuICAgIC8vICAgY29uc29sZS5sb2coYCR7bmFtZX06ICR7dmFsdWV9YCk7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgY29uc3QgZm9ybURhdGFUb09iamVjdCA9IChmb3JtRGF0YSkgPT4ge1xyXG4gICAgICBjb25zdCBvYmplY3QgPSB7fTtcclxuICAgICAgZm9ybURhdGEuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4ge1xyXG4gICAgICAgIG9iamVjdFtrZXldID0gdmFsdWU7XHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gb2JqZWN0O1xyXG4gICAgfTtcclxuXHJcbiAgICAvLyBFeGFtcGxlIHVzYWdlOlxyXG4gICAgbGV0IGZvcm1EYXRhT2JqZWN0ID0gZm9ybURhdGFUb09iamVjdChmb3JtRGF0YSk7XHJcblxyXG4gICAgY29uc3QgdXNlcklkID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJcIikpO1xyXG4gICAgZm9ybURhdGFPYmplY3QgPSB7IC4uLmZvcm1EYXRhT2JqZWN0LCBfaWQ6IHVzZXJJZC5faWQgfTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCJcIiwge1xyXG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZm9ybURhdGFPYmplY3QpLFxyXG4gICAgICAgIGhlYWRlcnNQXHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICBjb25zb2xlLmxvZyhcInJlc3BvbnNlXCIsIHJlc3BvbnNlKTtcclxuICAgICAgY29uc29sZS5sb2coXCJkYXRhXCIsIGRhdGEpO1xyXG4gICAgICBpZiAocmVzcG9uc2Uub2spIHtcclxuICAgICAgICByb3V0ZXIucHVzaChcIi9hdXRoL29uYmFyL3N0b3JlXCIpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRocm93IEVycm9yKGRhdGEuZXJyb3IpO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBzZXRFcnJvcihkYXRhLm1lc3NhZ2UpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Zm9ybSBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB3LWZ1bGwgcHgtMTAgcHktOFwiIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC00eGwgbWItNSBmb250LWJvbGRcIj5GaWxsIHlvdXIgcGVyc29uYWwgaW5mbzwvaDI+XHJcblxyXG4gICAgICA8SW5wdXRzXHJcbiAgICAgICAgbGFiZWxPbmU9XCJOYW1lXCJcclxuICAgICAgICB0eXBlT25lPVwidGV4dFwiXHJcbiAgICAgICAgaW5wdXRPbmVOYW1lPVwibmFtZVwiXHJcbiAgICAgICAgbGFiZWxUd289XCJMYXN0IE5hbWVcIlxyXG4gICAgICAgIHR5cGVUd289XCJ0ZXh0XCJcclxuICAgICAgICBpbnB1dFR3b05hbWU9XCJsYXN0LW5hbWVcIlxyXG4gICAgICAvPlxyXG4gICAgICA8SW5wdXRzXHJcbiAgICAgICAgbGFiZWxPbmU9XCJFbWFpbCBBZGRyZXNzXCJcclxuICAgICAgICB0eXBlT25lPVwiZW1haWxcIlxyXG4gICAgICAgIGlucHV0T25lTmFtZT1cImVtYWlsXCJcclxuICAgICAgICBsYWJlbFR3bz1cIlBob25lIE51bWJlclwiXHJcbiAgICAgICAgdHlwZVR3bz1cIm51bWJlclwiXHJcbiAgICAgICAgaW5wdXRUd29OYW1lPVwicGhvbmUtbnVtYmVyXCJcclxuICAgICAgLz5cclxuICAgICAgPElucHV0c1xyXG4gICAgICAgIGxhYmVsT25lPVwiVXNlciBOYW1lXCJcclxuICAgICAgICB0eXBlT25lPVwidGV4dFwiXHJcbiAgICAgICAgaW5wdXRPbmVOYW1lPVwidXNlci1uYW1lXCJcclxuICAgICAgICBsYWJlbFR3bz1cIkJ1c2luZXNzIE5hbWVcIlxyXG4gICAgICAgIHR5cGVUd289XCJ0ZXh0XCJcclxuICAgICAgICBpbnB1dFR3b05hbWU9XCJidXNpbmVzcy1uYW1lXCJcclxuICAgICAgLz5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXItYXV0byB0ZXh0LWxlZnQgIHctMS8yIHB4LTdcIj5cclxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImNvdW50cnlcIj5Db3VudHJ5L1JlZ2lvbjwvbGFiZWw+IDxiciAvPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgYXV0b0NvbXBsZXRlPVwibm9cIlxyXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgbmFtZT1cImNvdW50cnlcIlxyXG4gICAgICAgICAgaWQ9XCJjb3VudHJ5XCJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWdyYXktMzAwIHAtMS41IHB4LTIgdGV4dC1ncmF5LTYwMCBtdC0xIHctZnVsbCBob3ZlcjpvdXRsaW5lLW5vbmVcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPElucHV0c1xyXG4gICAgICAgIGxhYmVsT25lPVwiQWRkcmVzc1wiXHJcbiAgICAgICAgdHlwZU9uZT1cInRleHRcIlxyXG4gICAgICAgIGlucHV0T25lTmFtZT1cImFkZHJlc3NcIlxyXG4gICAgICAgIGxhYmVsVHdvPVwiUG9zdGFsIENvZGVcIlxyXG4gICAgICAgIHR5cGVUd289XCJ0ZXh0XCJcclxuICAgICAgICBpbnB1dFR3b05hbWU9XCJwb3N0YWwtY29kZVwiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxJbnB1dHNcclxuICAgICAgICBsYWJlbE9uZT1cIk5ldyBQYXNzd29yZFwiXHJcbiAgICAgICAgdHlwZU9uZT1cInRleHRcIlxyXG4gICAgICAgIGlucHV0T25lTmFtZT1cIm5ldy1wYXNzd29yZFwiXHJcbiAgICAgICAgbGFiZWxUd289XCJDb25maXJtIFBhc3N3b3JkXCJcclxuICAgICAgICB0eXBlVHdvPVwidGV4dFwiXHJcbiAgICAgICAgaW5wdXRUd29OYW1lPVwiY29uZmlybS1wYXNzd29yZFwiXHJcbiAgICAgIC8+XHJcblxyXG4gICAgICA8YnV0dG9uXHJcbiAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgY2xhc3NOYW1lPVwiYmctZ3JheS02MDAgdGV4dC13aGl0ZSBwLTIgbXQtNSBtaW4tdy05NiBmb250LWJvbGRcIlxyXG4gICAgICA+XHJcbiAgICAgICAgQXBwbHlcclxuICAgICAgPC9idXR0b24+XHJcbiAgICA8L2Zvcm0+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZm87XHJcbiJdLCJuYW1lcyI6WyJJbnB1dHMiLCJ1c2VSb3V0ZXIiLCJSZWFjdCIsInVzZVN0YXRlIiwiSW5mbyIsInJvdXRlciIsImVycm9yIiwic2V0RXJyb3IiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiZXZlbnQiLCJ0YXJnZXQiLCJmb3JtRGF0YVRvT2JqZWN0Iiwib2JqZWN0IiwiZm9yRWFjaCIsInZhbHVlIiwia2V5IiwiZm9ybURhdGFPYmplY3QiLCJ1c2VySWQiLCJKU09OIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiX2lkIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJzdHJpbmdpZnkiLCJoZWFkZXJzUCIsImRhdGEiLCJqc29uIiwiY29uc29sZSIsImxvZyIsIm9rIiwicHVzaCIsIkVycm9yIiwibWVzc2FnZSIsImZvcm0iLCJjbGFzc05hbWUiLCJvblN1Ym1pdCIsImgyIiwibGFiZWxPbmUiLCJ0eXBlT25lIiwiaW5wdXRPbmVOYW1lIiwibGFiZWxUd28iLCJ0eXBlVHdvIiwiaW5wdXRUd29OYW1lIiwiZGl2IiwibGFiZWwiLCJodG1sRm9yIiwiYnIiLCJpbnB1dCIsImF1dG9Db21wbGV0ZSIsInR5cGUiLCJuYW1lIiwiaWQiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/auth/onbar/info/page.jsx\n"));

/***/ })

});