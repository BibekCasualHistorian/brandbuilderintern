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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_labelBoxwithOutDescription__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/labelBoxwithOutDescription */ \"(app-pages-browser)/./src/components/labelBoxwithOutDescription.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst data = [\n    {\n        title: \"Accessories\"\n    },\n    {\n        title: \"Automative\"\n    },\n    {\n        title: \"Bags\"\n    },\n    {\n        title: \"Bath/Beauty\"\n    },\n    {\n        title: \"Footwear\"\n    },\n    {\n        title: \"Gifts\"\n    },\n    {\n        title: \"Home/Garden\"\n    },\n    {\n        title: \"Jewelry\"\n    },\n    {\n        title: \"Kids\"\n    },\n    {\n        title: \"Babies\"\n    },\n    {\n        title: \"Wallets\"\n    },\n    {\n        title: \"Watches\"\n    },\n    {\n        title: \"Pets\"\n    },\n    {\n        title: \"Man Wear\"\n    },\n    {\n        title: \"Woman Wear\"\n    },\n    {\n        title: \"Other\"\n    }\n];\nconst categories = ()=>{\n    _s();\n    const [products, setProducts] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    console.log(\"products at line 60\", products);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const handleSubmit = async ()=>{\n        const user = JSON.parse(localStorage.getItem(\"user\"));\n        try {\n            const response = await fetch(\"http://localhost:3001/api/user/createproductcategory\", {\n                method: \"POST\",\n                body: JSON.stringify({\n                    _id: user._id,\n                    products\n                }),\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                }\n            });\n            const data = await response.json();\n            console.log(\"response\", response);\n            console.log(\"data\", data);\n            if (response.ok) {\n                router.push(\"/home\");\n            } else {\n                throw Error(data.error);\n            }\n        } catch (error) {\n            setError(error.message);\n        }\n    };\n    // const handleProduct = (product) => {\n    //   console.log(\"handleProduct Products\", products);\n    //   console.log(\"handleProduct product\", product);\n    //   if (products.includes(product)) {\n    //     return;\n    //   }\n    //   setProducts((prevState) => {\n    //     console.log(\"prevState\", prevState);\n    //     const newState = prevState;\n    //     return [...newState, product];\n    //   });\n    // };\n    const handleProduct = useCallback((product)=>{\n        //   console.log(\"handleProduct Products\", products);\n        //   console.log(\"handleProduct product\", product);\n        setProducts((prevState)=>{\n            console.log(\"prevState\", prevState);\n            return [\n                ...prevState,\n                product\n            ];\n        });\n    }, []);\n    console.log(\"products at line 99\", products);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex items-center justify-center mt-3\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"text-black flex flex-col gap-2 p-1 rounded-lg bg-primary\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"font-bold text-[1.1rem]\",\n                    children: \"Choose Product Category\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\wwwko\\\\Desktop\\\\Next-Project\\\\brandbuilder-intern\\\\Client\\\\src\\\\app\\\\auth\\\\onbar\\\\categories\\\\page.jsx\",\n                    lineNumber: 117,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"What product do you want to sell? You should choose at less 3 categories\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\wwwko\\\\Desktop\\\\Next-Project\\\\brandbuilder-intern\\\\Client\\\\src\\\\app\\\\auth\\\\onbar\\\\categories\\\\page.jsx\",\n                    lineNumber: 118,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \" gap-4 text-center \",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-wrap gap-4 items-center justify-center \",\n                            children: data.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_labelBoxwithOutDescription__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                    title: item.title,\n                                    fn: handleProduct\n                                }, index, false, {\n                                    fileName: \"C:\\\\Users\\\\wwwko\\\\Desktop\\\\Next-Project\\\\brandbuilder-intern\\\\Client\\\\src\\\\app\\\\auth\\\\onbar\\\\categories\\\\page.jsx\",\n                                    lineNumber: 125,\n                                    columnNumber: 15\n                                }, undefined))\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\wwwko\\\\Desktop\\\\Next-Project\\\\brandbuilder-intern\\\\Client\\\\src\\\\app\\\\auth\\\\onbar\\\\categories\\\\page.jsx\",\n                            lineNumber: 123,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            children: error\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\wwwko\\\\Desktop\\\\Next-Project\\\\brandbuilder-intern\\\\Client\\\\src\\\\app\\\\auth\\\\onbar\\\\categories\\\\page.jsx\",\n                            lineNumber: 133,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: handleSubmit,\n                            className: \"w-fit px-20 py-2 mt-3 bg-font-secondary text-primary rounded-sm \",\n                            children: \"Apply\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\wwwko\\\\Desktop\\\\Next-Project\\\\brandbuilder-intern\\\\Client\\\\src\\\\app\\\\auth\\\\onbar\\\\categories\\\\page.jsx\",\n                            lineNumber: 134,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\wwwko\\\\Desktop\\\\Next-Project\\\\brandbuilder-intern\\\\Client\\\\src\\\\app\\\\auth\\\\onbar\\\\categories\\\\page.jsx\",\n                    lineNumber: 122,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\wwwko\\\\Desktop\\\\Next-Project\\\\brandbuilder-intern\\\\Client\\\\src\\\\app\\\\auth\\\\onbar\\\\categories\\\\page.jsx\",\n            lineNumber: 116,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\wwwko\\\\Desktop\\\\Next-Project\\\\brandbuilder-intern\\\\Client\\\\src\\\\app\\\\auth\\\\onbar\\\\categories\\\\page.jsx\",\n        lineNumber: 115,\n        columnNumber: 5\n    }, undefined);\n};\n_s(categories, \"/ageMu5SZgeSvWXkbL83snSVU98=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (categories);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvYXV0aC9vbmJhci9jYXRlZ29yaWVzL3BhZ2UuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFFaUY7QUFDekM7QUFFeEMsTUFBTUcsT0FBTztJQUNYO1FBQ0VDLE9BQU87SUFDVDtJQUNBO1FBQ0VBLE9BQU87SUFDVDtJQUNBO1FBQ0VBLE9BQU87SUFDVDtJQUNBO1FBQ0VBLE9BQU87SUFDVDtJQUNBO1FBQ0VBLE9BQU87SUFDVDtJQUNBO1FBQ0VBLE9BQU87SUFDVDtJQUNBO1FBQ0VBLE9BQU87SUFDVDtJQUNBO1FBQ0VBLE9BQU87SUFDVDtJQUNBO1FBQ0VBLE9BQU87SUFDVDtJQUNBO1FBQ0VBLE9BQU87SUFDVDtJQUNBO1FBQ0VBLE9BQU87SUFDVDtJQUNBO1FBQ0VBLE9BQU87SUFDVDtJQUNBO1FBQ0VBLE9BQU87SUFDVDtJQUNBO1FBQ0VBLE9BQU87SUFDVDtJQUNBO1FBQ0VBLE9BQU87SUFDVDtJQUNBO1FBQ0VBLE9BQU87SUFDVDtDQUNEO0FBRUQsTUFBTUMsYUFBYTs7SUFDakIsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdMLCtDQUFRQSxDQUFDLEVBQUU7SUFFM0NNLFFBQVFDLEdBQUcsQ0FBQyx1QkFBdUJIO0lBRW5DLE1BQU0sQ0FBQ0ksT0FBT0MsU0FBUyxHQUFHVCwrQ0FBUUEsQ0FBQztJQUVuQyxNQUFNVSxlQUFlO1FBQ25CLE1BQU1DLE9BQU9DLEtBQUtDLEtBQUssQ0FBQ0MsYUFBYUMsT0FBTyxDQUFDO1FBQzdDLElBQUk7WUFDRixNQUFNQyxXQUFXLE1BQU1DLE1BQ3JCLHdEQUNBO2dCQUNFQyxRQUFRO2dCQUNSQyxNQUFNUCxLQUFLUSxTQUFTLENBQUM7b0JBQUVDLEtBQUtWLEtBQUtVLEdBQUc7b0JBQUVqQjtnQkFBUztnQkFDL0NrQixTQUFTO29CQUNQLGdCQUFnQjtnQkFDbEI7WUFDRjtZQUVGLE1BQU1yQixPQUFPLE1BQU1lLFNBQVNPLElBQUk7WUFDaENqQixRQUFRQyxHQUFHLENBQUMsWUFBWVM7WUFDeEJWLFFBQVFDLEdBQUcsQ0FBQyxRQUFRTjtZQUNwQixJQUFJZSxTQUFTUSxFQUFFLEVBQUU7Z0JBQ2ZDLE9BQU9DLElBQUksQ0FBQztZQUNkLE9BQU87Z0JBQ0wsTUFBTUMsTUFBTTFCLEtBQUtPLEtBQUs7WUFDeEI7UUFDRixFQUFFLE9BQU9BLE9BQU87WUFDZEMsU0FBU0QsTUFBTW9CLE9BQU87UUFDeEI7SUFDRjtJQUVBLHVDQUF1QztJQUN2QyxxREFBcUQ7SUFDckQsbURBQW1EO0lBQ25ELHNDQUFzQztJQUN0QyxjQUFjO0lBQ2QsTUFBTTtJQUNOLGlDQUFpQztJQUNqQywyQ0FBMkM7SUFDM0Msa0NBQWtDO0lBQ2xDLHFDQUFxQztJQUNyQyxRQUFRO0lBQ1IsS0FBSztJQUVMLE1BQU1DLGdCQUFnQkMsWUFBWSxDQUFDQztRQUMvQixxREFBcUQ7UUFDekQsbURBQW1EO1FBQ2pEMUIsWUFBWSxDQUFDMkI7WUFDWDFCLFFBQVFDLEdBQUcsQ0FBQyxhQUFheUI7WUFDekIsT0FBTzttQkFBSUE7Z0JBQVdEO2FBQVE7UUFDaEM7SUFDRixHQUFHLEVBQUU7SUFFTHpCLFFBQVFDLEdBQUcsQ0FBQyx1QkFBdUJIO0lBRW5DLHFCQUNFLDhEQUFDNkI7UUFBSUMsV0FBVTtrQkFDYiw0RUFBQ0Q7WUFBSUMsV0FBVTs7OEJBQ2IsOERBQUNDO29CQUFFRCxXQUFVOzhCQUEwQjs7Ozs7OzhCQUN2Qyw4REFBQ0M7OEJBQUU7Ozs7Ozs4QkFJSCw4REFBQ0Y7b0JBQUlDLFdBQVU7O3NDQUNiLDhEQUFDRDs0QkFBSUMsV0FBVTtzQ0FDWmpDLEtBQUttQyxHQUFHLENBQUMsQ0FBQ0MsTUFBTUMsc0JBQ2YsOERBQUN4Qyw4RUFBMEJBO29DQUV6QkksT0FBT21DLEtBQUtuQyxLQUFLO29DQUNqQnFDLElBQUlWO21DQUZDUzs7Ozs7Ozs7OztzQ0FPWCw4REFBQ0U7c0NBQUloQzs7Ozs7O3NDQUNMLDhEQUFDaUM7NEJBQ0NDLFNBQVNoQzs0QkFDVHdCLFdBQVU7c0NBQ1g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT1g7R0F2Rk0vQjtBQXlGTiwrREFBZUEsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2F1dGgvb25iYXIvY2F0ZWdvcmllcy9wYWdlLmpzeD83YjI1Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5cclxuaW1wb3J0IExhYmVsQm94d2l0aE91dERlc2NyaXB0aW9uIGZyb20gXCJAL2NvbXBvbmVudHMvbGFiZWxCb3h3aXRoT3V0RGVzY3JpcHRpb25cIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBkYXRhID0gW1xyXG4gIHtcclxuICAgIHRpdGxlOiBcIkFjY2Vzc29yaWVzXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJBdXRvbWF0aXZlXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJCYWdzXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJCYXRoL0JlYXV0eVwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiRm9vdHdlYXJcIixcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIkdpZnRzXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJIb21lL0dhcmRlblwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiSmV3ZWxyeVwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiS2lkc1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiQmFiaWVzXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJXYWxsZXRzXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJXYXRjaGVzXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJQZXRzXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJNYW4gV2VhclwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiV29tYW4gV2VhclwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiT3RoZXJcIixcclxuICB9LFxyXG5dO1xyXG5cclxuY29uc3QgY2F0ZWdvcmllcyA9ICgpID0+IHtcclxuICBjb25zdCBbcHJvZHVjdHMsIHNldFByb2R1Y3RzXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgY29uc29sZS5sb2coXCJwcm9kdWN0cyBhdCBsaW5lIDYwXCIsIHByb2R1Y3RzKTtcclxuXHJcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgdXNlciA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyXCIpKTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXHJcbiAgICAgICAgXCJodHRwOi8vbG9jYWxob3N0OjMwMDEvYXBpL3VzZXIvY3JlYXRlcHJvZHVjdGNhdGVnb3J5XCIsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgX2lkOiB1c2VyLl9pZCwgcHJvZHVjdHMgfSksXHJcbiAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9XHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwicmVzcG9uc2VcIiwgcmVzcG9uc2UpO1xyXG4gICAgICBjb25zb2xlLmxvZyhcImRhdGFcIiwgZGF0YSk7XHJcbiAgICAgIGlmIChyZXNwb25zZS5vaykge1xyXG4gICAgICAgIHJvdXRlci5wdXNoKFwiL2hvbWVcIik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhyb3cgRXJyb3IoZGF0YS5lcnJvcik7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIHNldEVycm9yKGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIC8vIGNvbnN0IGhhbmRsZVByb2R1Y3QgPSAocHJvZHVjdCkgPT4ge1xyXG4gIC8vICAgY29uc29sZS5sb2coXCJoYW5kbGVQcm9kdWN0IFByb2R1Y3RzXCIsIHByb2R1Y3RzKTtcclxuICAvLyAgIGNvbnNvbGUubG9nKFwiaGFuZGxlUHJvZHVjdCBwcm9kdWN0XCIsIHByb2R1Y3QpO1xyXG4gIC8vICAgaWYgKHByb2R1Y3RzLmluY2x1ZGVzKHByb2R1Y3QpKSB7XHJcbiAgLy8gICAgIHJldHVybjtcclxuICAvLyAgIH1cclxuICAvLyAgIHNldFByb2R1Y3RzKChwcmV2U3RhdGUpID0+IHtcclxuICAvLyAgICAgY29uc29sZS5sb2coXCJwcmV2U3RhdGVcIiwgcHJldlN0YXRlKTtcclxuICAvLyAgICAgY29uc3QgbmV3U3RhdGUgPSBwcmV2U3RhdGU7XHJcbiAgLy8gICAgIHJldHVybiBbLi4ubmV3U3RhdGUsIHByb2R1Y3RdO1xyXG4gIC8vICAgfSk7XHJcbiAgLy8gfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlUHJvZHVjdCA9IHVzZUNhbGxiYWNrKChwcm9kdWN0KSA9PiB7XHJcbiAgICAgIC8vICAgY29uc29sZS5sb2coXCJoYW5kbGVQcm9kdWN0IFByb2R1Y3RzXCIsIHByb2R1Y3RzKTtcclxuICAvLyAgIGNvbnNvbGUubG9nKFwiaGFuZGxlUHJvZHVjdCBwcm9kdWN0XCIsIHByb2R1Y3QpO1xyXG4gICAgc2V0UHJvZHVjdHMoKHByZXZTdGF0ZSkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhcInByZXZTdGF0ZVwiLCBwcmV2U3RhdGUpO1xyXG4gICAgICByZXR1cm4gWy4uLnByZXZTdGF0ZSwgcHJvZHVjdF07XHJcbiAgICB9KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnNvbGUubG9nKFwicHJvZHVjdHMgYXQgbGluZSA5OVwiLCBwcm9kdWN0cyk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG10LTNcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWJsYWNrIGZsZXggZmxleC1jb2wgZ2FwLTIgcC0xIHJvdW5kZWQtbGcgYmctcHJpbWFyeVwiPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LVsxLjFyZW1dXCI+Q2hvb3NlIFByb2R1Y3QgQ2F0ZWdvcnk8L3A+XHJcbiAgICAgICAgPHA+XHJcbiAgICAgICAgICBXaGF0IHByb2R1Y3QgZG8geW91IHdhbnQgdG8gc2VsbD8gWW91IHNob3VsZCBjaG9vc2UgYXQgbGVzcyAzXHJcbiAgICAgICAgICBjYXRlZ29yaWVzXHJcbiAgICAgICAgPC9wPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIGdhcC00IHRleHQtY2VudGVyIFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBnYXAtNCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgXCI+XHJcbiAgICAgICAgICAgIHtkYXRhLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICA8TGFiZWxCb3h3aXRoT3V0RGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICB0aXRsZT17aXRlbS50aXRsZX1cclxuICAgICAgICAgICAgICAgIGZuPXtoYW5kbGVQcm9kdWN0fVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGgxPntlcnJvcn08L2gxPlxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVTdWJtaXR9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZml0IHB4LTIwIHB5LTIgbXQtMyBiZy1mb250LXNlY29uZGFyeSB0ZXh0LXByaW1hcnkgcm91bmRlZC1zbSBcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBBcHBseVxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNhdGVnb3JpZXM7XHJcbiJdLCJuYW1lcyI6WyJMYWJlbEJveHdpdGhPdXREZXNjcmlwdGlvbiIsIlJlYWN0IiwidXNlU3RhdGUiLCJkYXRhIiwidGl0bGUiLCJjYXRlZ29yaWVzIiwicHJvZHVjdHMiLCJzZXRQcm9kdWN0cyIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsInNldEVycm9yIiwiaGFuZGxlU3VibWl0IiwidXNlciIsIkpTT04iLCJwYXJzZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsInN0cmluZ2lmeSIsIl9pZCIsImhlYWRlcnMiLCJqc29uIiwib2siLCJyb3V0ZXIiLCJwdXNoIiwiRXJyb3IiLCJtZXNzYWdlIiwiaGFuZGxlUHJvZHVjdCIsInVzZUNhbGxiYWNrIiwicHJvZHVjdCIsInByZXZTdGF0ZSIsImRpdiIsImNsYXNzTmFtZSIsInAiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJmbiIsImgxIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/auth/onbar/categories/page.jsx\n"));

/***/ })

});