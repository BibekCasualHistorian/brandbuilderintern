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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_labelBoxwithOutDescription__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/labelBoxwithOutDescription */ \"(app-pages-browser)/./src/components/labelBoxwithOutDescription.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst data = [\n    {\n        title: \"Accessories\"\n    },\n    {\n        title: \"Automative\"\n    },\n    {\n        title: \"Bags\"\n    },\n    {\n        title: \"Bath/Beauty\"\n    },\n    {\n        title: \"Footwear\"\n    },\n    {\n        title: \"Gifts\"\n    },\n    {\n        title: \"Home/Garden\"\n    },\n    {\n        title: \"Jewelry\"\n    },\n    {\n        title: \"Kids\"\n    },\n    {\n        title: \"Babies\"\n    },\n    {\n        title: \"Wallets\"\n    },\n    {\n        title: \"Watches\"\n    },\n    {\n        title: \"Pets\"\n    },\n    {\n        title: \"Man Wear\"\n    },\n    {\n        title: \"Woman Wear\"\n    },\n    {\n        title: \"Other\"\n    }\n];\nconst categories = ()=>{\n    _s();\n    const [products, setProducts] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    console.log(\"products at line 60\", products);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const handleSubmit = async ()=>{\n        const user = JSON.parse(localStorage.getItem(\"user\"));\n        try {\n            const response = await fetch(\"http://localhost:3001/api/user/createproductcategory\", {\n                method: \"POST\",\n                body: JSON.stringify({\n                    _id: user._id,\n                    products\n                }),\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                }\n            });\n            const data = await response.json();\n            console.log(\"response\", response);\n            console.log(\"data\", data);\n            if (response.ok) {\n                router.push(\"/home\");\n            } else {\n                throw Error(data.error);\n            }\n        } catch (error) {\n            setError(error.message);\n        }\n    };\n    // const handleProduct = (product) => {\n    //   console.log(\"handleProduct Products\", products);\n    //   console.log(\"handleProduct product\", product);\n    //   if (products.includes(product)) {\n    //     return;\n    //   }\n    //   setProducts((prevState) => {\n    //     console.log(\"prevState\", prevState);\n    //     const newState = prevState;\n    //     return [...newState, product];\n    //   });\n    // };\n    // const handleProduct = useCallback((product) => {\n    //   console.log(\"handleProduct Products\", products);\n    //   console.log(\"handleProduct product\", product);\n    //   setProducts((prevState) => {\n    //     console.log(\"prevState\", prevState);\n    //     const newState = [...prevState, product];\n    //     console.log(\"newState\", newState);\n    //     return newState;\n    //   });\n    // }, []);\n    const handleProduct = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((product)=>{\n        console.log(\"handleProduct Products\", products);\n        console.log(\"handleProduct product\", product);\n        setProducts((prevState)=>{\n            console.log(prevState);\n            return [\n                ...prevState,\n                product\n            ];\n        });\n    }, []);\n    console.log(\"products at line 99\", products);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex items-center justify-center mt-3\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"text-black flex flex-col gap-2 p-1 rounded-lg bg-primary\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"font-bold text-[1.2rem]\",\n                    children: \"Choose Product Category\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\wwwko\\\\Desktop\\\\Next-Project\\\\brandbuilder-intern\\\\Client\\\\src\\\\app\\\\auth\\\\onbar\\\\categories\\\\page.jsx\",\n                    lineNumber: 128,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"What product do you want to sell? You should choose at less 3 categories\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\wwwko\\\\Desktop\\\\Next-Project\\\\brandbuilder-intern\\\\Client\\\\src\\\\app\\\\auth\\\\onbar\\\\categories\\\\page.jsx\",\n                    lineNumber: 129,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \" gap-4 text-center \",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-wrap gap-4 items-center justify-center \",\n                            children: data.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_labelBoxwithOutDescription__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                    title: item.title,\n                                    fn: handleProduct\n                                }, index, false, {\n                                    fileName: \"C:\\\\Users\\\\wwwko\\\\Desktop\\\\Next-Project\\\\brandbuilder-intern\\\\Client\\\\src\\\\app\\\\auth\\\\onbar\\\\categories\\\\page.jsx\",\n                                    lineNumber: 136,\n                                    columnNumber: 15\n                                }, undefined))\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\wwwko\\\\Desktop\\\\Next-Project\\\\brandbuilder-intern\\\\Client\\\\src\\\\app\\\\auth\\\\onbar\\\\categories\\\\page.jsx\",\n                            lineNumber: 134,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            children: error\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\wwwko\\\\Desktop\\\\Next-Project\\\\brandbuilder-intern\\\\Client\\\\src\\\\app\\\\auth\\\\onbar\\\\categories\\\\page.jsx\",\n                            lineNumber: 144,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: handleSubmit,\n                            className: \"w-fit px-20 py-2 mt-3 bg-font-secondary text-primary rounded-sm \",\n                            children: \"Apply\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\wwwko\\\\Desktop\\\\Next-Project\\\\brandbuilder-intern\\\\Client\\\\src\\\\app\\\\auth\\\\onbar\\\\categories\\\\page.jsx\",\n                            lineNumber: 145,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\wwwko\\\\Desktop\\\\Next-Project\\\\brandbuilder-intern\\\\Client\\\\src\\\\app\\\\auth\\\\onbar\\\\categories\\\\page.jsx\",\n                    lineNumber: 133,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\wwwko\\\\Desktop\\\\Next-Project\\\\brandbuilder-intern\\\\Client\\\\src\\\\app\\\\auth\\\\onbar\\\\categories\\\\page.jsx\",\n            lineNumber: 127,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\wwwko\\\\Desktop\\\\Next-Project\\\\brandbuilder-intern\\\\Client\\\\src\\\\app\\\\auth\\\\onbar\\\\categories\\\\page.jsx\",\n        lineNumber: 126,\n        columnNumber: 5\n    }, undefined);\n};\n_s(categories, \"/ageMu5SZgeSvWXkbL83snSVU98=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (categories);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvYXV0aC9vbmJhci9jYXRlZ29yaWVzL3BhZ2UuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFFaUY7QUFDNUI7QUFFckQsTUFBTUksT0FBTztJQUNYO1FBQ0VDLE9BQU87SUFDVDtJQUNBO1FBQ0VBLE9BQU87SUFDVDtJQUNBO1FBQ0VBLE9BQU87SUFDVDtJQUNBO1FBQ0VBLE9BQU87SUFDVDtJQUNBO1FBQ0VBLE9BQU87SUFDVDtJQUNBO1FBQ0VBLE9BQU87SUFDVDtJQUNBO1FBQ0VBLE9BQU87SUFDVDtJQUNBO1FBQ0VBLE9BQU87SUFDVDtJQUNBO1FBQ0VBLE9BQU87SUFDVDtJQUNBO1FBQ0VBLE9BQU87SUFDVDtJQUNBO1FBQ0VBLE9BQU87SUFDVDtJQUNBO1FBQ0VBLE9BQU87SUFDVDtJQUNBO1FBQ0VBLE9BQU87SUFDVDtJQUNBO1FBQ0VBLE9BQU87SUFDVDtJQUNBO1FBQ0VBLE9BQU87SUFDVDtJQUNBO1FBQ0VBLE9BQU87SUFDVDtDQUNEO0FBRUQsTUFBTUMsYUFBYTs7SUFDakIsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdMLCtDQUFRQSxDQUFDLEVBQUU7SUFFM0NNLFFBQVFDLEdBQUcsQ0FBQyx1QkFBdUJIO0lBRW5DLE1BQU0sQ0FBQ0ksT0FBT0MsU0FBUyxHQUFHVCwrQ0FBUUEsQ0FBQztJQUVuQyxNQUFNVSxlQUFlO1FBQ25CLE1BQU1DLE9BQU9DLEtBQUtDLEtBQUssQ0FBQ0MsYUFBYUMsT0FBTyxDQUFDO1FBQzdDLElBQUk7WUFDRixNQUFNQyxXQUFXLE1BQU1DLE1BQ3JCLHdEQUNBO2dCQUNFQyxRQUFRO2dCQUNSQyxNQUFNUCxLQUFLUSxTQUFTLENBQUM7b0JBQUVDLEtBQUtWLEtBQUtVLEdBQUc7b0JBQUVqQjtnQkFBUztnQkFDL0NrQixTQUFTO29CQUNQLGdCQUFnQjtnQkFDbEI7WUFDRjtZQUVGLE1BQU1yQixPQUFPLE1BQU1lLFNBQVNPLElBQUk7WUFDaENqQixRQUFRQyxHQUFHLENBQUMsWUFBWVM7WUFDeEJWLFFBQVFDLEdBQUcsQ0FBQyxRQUFRTjtZQUNwQixJQUFJZSxTQUFTUSxFQUFFLEVBQUU7Z0JBQ2ZDLE9BQU9DLElBQUksQ0FBQztZQUNkLE9BQU87Z0JBQ0wsTUFBTUMsTUFBTTFCLEtBQUtPLEtBQUs7WUFDeEI7UUFDRixFQUFFLE9BQU9BLE9BQU87WUFDZEMsU0FBU0QsTUFBTW9CLE9BQU87UUFDeEI7SUFDRjtJQUVBLHVDQUF1QztJQUN2QyxxREFBcUQ7SUFDckQsbURBQW1EO0lBQ25ELHNDQUFzQztJQUN0QyxjQUFjO0lBQ2QsTUFBTTtJQUNOLGlDQUFpQztJQUNqQywyQ0FBMkM7SUFDM0Msa0NBQWtDO0lBQ2xDLHFDQUFxQztJQUNyQyxRQUFRO0lBQ1IsS0FBSztJQUVMLG1EQUFtRDtJQUNuRCxxREFBcUQ7SUFDckQsbURBQW1EO0lBQ25ELGlDQUFpQztJQUNqQywyQ0FBMkM7SUFDM0MsZ0RBQWdEO0lBQ2hELHlDQUF5QztJQUN6Qyx1QkFBdUI7SUFDdkIsUUFBUTtJQUNSLFVBQVU7SUFFVixNQUFNQyxnQkFBZ0I5QixrREFBV0EsQ0FBQyxDQUFDK0I7UUFDakN4QixRQUFRQyxHQUFHLENBQUMsMEJBQTBCSDtRQUN0Q0UsUUFBUUMsR0FBRyxDQUFDLHlCQUF5QnVCO1FBQ3JDekIsWUFBWSxDQUFDMEI7WUFDWHpCLFFBQVFDLEdBQUcsQ0FBQ3dCO1lBQ1osT0FBTzttQkFBSUE7Z0JBQVdEO2FBQVE7UUFDaEM7SUFDRixHQUFHLEVBQUU7SUFFTHhCLFFBQVFDLEdBQUcsQ0FBQyx1QkFBdUJIO0lBRW5DLHFCQUNFLDhEQUFDNEI7UUFBSUMsV0FBVTtrQkFDYiw0RUFBQ0Q7WUFBSUMsV0FBVTs7OEJBQ2IsOERBQUNDO29CQUFFRCxXQUFVOzhCQUEwQjs7Ozs7OzhCQUN2Qyw4REFBQ0M7OEJBQUU7Ozs7Ozs4QkFJSCw4REFBQ0Y7b0JBQUlDLFdBQVU7O3NDQUNiLDhEQUFDRDs0QkFBSUMsV0FBVTtzQ0FDWmhDLEtBQUtrQyxHQUFHLENBQUMsQ0FBQ0MsTUFBTUMsc0JBQ2YsOERBQUN4Qyw4RUFBMEJBO29DQUV6QkssT0FBT2tDLEtBQUtsQyxLQUFLO29DQUNqQm9DLElBQUlUO21DQUZDUTs7Ozs7Ozs7OztzQ0FPWCw4REFBQ0U7c0NBQUkvQjs7Ozs7O3NDQUNMLDhEQUFDZ0M7NEJBQ0NDLFNBQVMvQjs0QkFDVHVCLFdBQVU7c0NBQ1g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT1g7R0FsR005QjtBQW9HTiwrREFBZUEsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2F1dGgvb25iYXIvY2F0ZWdvcmllcy9wYWdlLmpzeD83YjI1Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5cclxuaW1wb3J0IExhYmVsQm94d2l0aE91dERlc2NyaXB0aW9uIGZyb20gXCJAL2NvbXBvbmVudHMvbGFiZWxCb3h3aXRoT3V0RGVzY3JpcHRpb25cIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgZGF0YSA9IFtcclxuICB7XHJcbiAgICB0aXRsZTogXCJBY2Nlc3Nvcmllc1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiQXV0b21hdGl2ZVwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiQmFnc1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiQmF0aC9CZWF1dHlcIixcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIkZvb3R3ZWFyXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJHaWZ0c1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiSG9tZS9HYXJkZW5cIixcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIkpld2VscnlcIixcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIktpZHNcIixcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIkJhYmllc1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiV2FsbGV0c1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiV2F0Y2hlc1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiUGV0c1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiTWFuIFdlYXJcIixcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIldvbWFuIFdlYXJcIixcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIk90aGVyXCIsXHJcbiAgfSxcclxuXTtcclxuXHJcbmNvbnN0IGNhdGVnb3JpZXMgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3Byb2R1Y3RzLCBzZXRQcm9kdWN0c10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIGNvbnNvbGUubG9nKFwicHJvZHVjdHMgYXQgbGluZSA2MFwiLCBwcm9kdWN0cyk7XHJcblxyXG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IHVzZXIgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlclwiKSk7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxyXG4gICAgICAgIFwiaHR0cDovL2xvY2FsaG9zdDozMDAxL2FwaS91c2VyL2NyZWF0ZXByb2R1Y3RjYXRlZ29yeVwiLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IF9pZDogdXNlci5faWQsIHByb2R1Y3RzIH0pLFxyXG4gICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfVxyXG4gICAgICApO1xyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICBjb25zb2xlLmxvZyhcInJlc3BvbnNlXCIsIHJlc3BvbnNlKTtcclxuICAgICAgY29uc29sZS5sb2coXCJkYXRhXCIsIGRhdGEpO1xyXG4gICAgICBpZiAocmVzcG9uc2Uub2spIHtcclxuICAgICAgICByb3V0ZXIucHVzaChcIi9ob21lXCIpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRocm93IEVycm9yKGRhdGEuZXJyb3IpO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBzZXRFcnJvcihlcnJvci5tZXNzYWdlKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICAvLyBjb25zdCBoYW5kbGVQcm9kdWN0ID0gKHByb2R1Y3QpID0+IHtcclxuICAvLyAgIGNvbnNvbGUubG9nKFwiaGFuZGxlUHJvZHVjdCBQcm9kdWN0c1wiLCBwcm9kdWN0cyk7XHJcbiAgLy8gICBjb25zb2xlLmxvZyhcImhhbmRsZVByb2R1Y3QgcHJvZHVjdFwiLCBwcm9kdWN0KTtcclxuICAvLyAgIGlmIChwcm9kdWN0cy5pbmNsdWRlcyhwcm9kdWN0KSkge1xyXG4gIC8vICAgICByZXR1cm47XHJcbiAgLy8gICB9XHJcbiAgLy8gICBzZXRQcm9kdWN0cygocHJldlN0YXRlKSA9PiB7XHJcbiAgLy8gICAgIGNvbnNvbGUubG9nKFwicHJldlN0YXRlXCIsIHByZXZTdGF0ZSk7XHJcbiAgLy8gICAgIGNvbnN0IG5ld1N0YXRlID0gcHJldlN0YXRlO1xyXG4gIC8vICAgICByZXR1cm4gWy4uLm5ld1N0YXRlLCBwcm9kdWN0XTtcclxuICAvLyAgIH0pO1xyXG4gIC8vIH07XHJcblxyXG4gIC8vIGNvbnN0IGhhbmRsZVByb2R1Y3QgPSB1c2VDYWxsYmFjaygocHJvZHVjdCkgPT4ge1xyXG4gIC8vICAgY29uc29sZS5sb2coXCJoYW5kbGVQcm9kdWN0IFByb2R1Y3RzXCIsIHByb2R1Y3RzKTtcclxuICAvLyAgIGNvbnNvbGUubG9nKFwiaGFuZGxlUHJvZHVjdCBwcm9kdWN0XCIsIHByb2R1Y3QpO1xyXG4gIC8vICAgc2V0UHJvZHVjdHMoKHByZXZTdGF0ZSkgPT4ge1xyXG4gIC8vICAgICBjb25zb2xlLmxvZyhcInByZXZTdGF0ZVwiLCBwcmV2U3RhdGUpO1xyXG4gIC8vICAgICBjb25zdCBuZXdTdGF0ZSA9IFsuLi5wcmV2U3RhdGUsIHByb2R1Y3RdO1xyXG4gIC8vICAgICBjb25zb2xlLmxvZyhcIm5ld1N0YXRlXCIsIG5ld1N0YXRlKTtcclxuICAvLyAgICAgcmV0dXJuIG5ld1N0YXRlO1xyXG4gIC8vICAgfSk7XHJcbiAgLy8gfSwgW10pO1xyXG5cclxuICBjb25zdCBoYW5kbGVQcm9kdWN0ID0gdXNlQ2FsbGJhY2soKHByb2R1Y3QpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwiaGFuZGxlUHJvZHVjdCBQcm9kdWN0c1wiLCBwcm9kdWN0cyk7XHJcbiAgICBjb25zb2xlLmxvZyhcImhhbmRsZVByb2R1Y3QgcHJvZHVjdFwiLCBwcm9kdWN0KTtcclxuICAgIHNldFByb2R1Y3RzKChwcmV2U3RhdGUpID0+IHtcclxuICAgICAgY29uc29sZS5sb2cocHJldlN0YXRlKTtcclxuICAgICAgcmV0dXJuIFsuLi5wcmV2U3RhdGUsIHByb2R1Y3RdO1xyXG4gICAgfSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zb2xlLmxvZyhcInByb2R1Y3RzIGF0IGxpbmUgOTlcIiwgcHJvZHVjdHMpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBtdC0zXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1ibGFjayBmbGV4IGZsZXgtY29sIGdhcC0yIHAtMSByb3VuZGVkLWxnIGJnLXByaW1hcnlcIj5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC1bMS4ycmVtXVwiPkNob29zZSBQcm9kdWN0IENhdGVnb3J5PC9wPlxyXG4gICAgICAgIDxwPlxyXG4gICAgICAgICAgV2hhdCBwcm9kdWN0IGRvIHlvdSB3YW50IHRvIHNlbGw/IFlvdSBzaG91bGQgY2hvb3NlIGF0IGxlc3MgM1xyXG4gICAgICAgICAgY2F0ZWdvcmllc1xyXG4gICAgICAgIDwvcD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBnYXAtNCB0ZXh0LWNlbnRlciBcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgZ2FwLTQgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIFwiPlxyXG4gICAgICAgICAgICB7ZGF0YS5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgPExhYmVsQm94d2l0aE91dERlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgdGl0bGU9e2l0ZW0udGl0bGV9XHJcbiAgICAgICAgICAgICAgICBmbj17aGFuZGxlUHJvZHVjdH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxoMT57ZXJyb3J9PC9oMT5cclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgb25DbGljaz17aGFuZGxlU3VibWl0fVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZpdCBweC0yMCBweS0yIG10LTMgYmctZm9udC1zZWNvbmRhcnkgdGV4dC1wcmltYXJ5IHJvdW5kZWQtc20gXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgQXBwbHlcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjYXRlZ29yaWVzO1xyXG4iXSwibmFtZXMiOlsiTGFiZWxCb3h3aXRoT3V0RGVzY3JpcHRpb24iLCJSZWFjdCIsInVzZUNhbGxiYWNrIiwidXNlU3RhdGUiLCJkYXRhIiwidGl0bGUiLCJjYXRlZ29yaWVzIiwicHJvZHVjdHMiLCJzZXRQcm9kdWN0cyIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsInNldEVycm9yIiwiaGFuZGxlU3VibWl0IiwidXNlciIsIkpTT04iLCJwYXJzZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsInN0cmluZ2lmeSIsIl9pZCIsImhlYWRlcnMiLCJqc29uIiwib2siLCJyb3V0ZXIiLCJwdXNoIiwiRXJyb3IiLCJtZXNzYWdlIiwiaGFuZGxlUHJvZHVjdCIsInByb2R1Y3QiLCJwcmV2U3RhdGUiLCJkaXYiLCJjbGFzc05hbWUiLCJwIiwibWFwIiwiaXRlbSIsImluZGV4IiwiZm4iLCJoMSIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/auth/onbar/categories/page.jsx\n"));

/***/ })

});