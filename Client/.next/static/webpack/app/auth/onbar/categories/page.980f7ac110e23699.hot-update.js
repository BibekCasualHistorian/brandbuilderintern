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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_labelBoxwithOutDescription__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/labelBoxwithOutDescription */ \"(app-pages-browser)/./src/components/labelBoxwithOutDescription.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst data = [\n    {\n        title: \"Accessories\"\n    },\n    {\n        title: \"Automative\"\n    },\n    {\n        title: \"Bags\"\n    },\n    {\n        title: \"Bath/Beauty\"\n    },\n    {\n        title: \"Footwear\"\n    },\n    {\n        title: \"Gifts\"\n    },\n    {\n        title: \"Home/Garden\"\n    },\n    {\n        title: \"Jewelry\"\n    },\n    {\n        title: \"Kids\"\n    },\n    {\n        title: \"Babies\"\n    },\n    {\n        title: \"Wallets\"\n    },\n    {\n        title: \"Watches\"\n    },\n    {\n        title: \"Pets\"\n    },\n    {\n        title: \"Man Wear\"\n    },\n    {\n        title: \"Woman Wear\"\n    },\n    {\n        title: \"Other\"\n    }\n];\nconst categories = ()=>{\n    _s();\n    const [products, setProducts] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    console.log(\"products at line 60\", products);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const handleSubmit = async ()=>{\n        const user = JSON.parse(localStorage.getItem(\"user\"));\n        try {\n            const response = await fetch(\"http://localhost:3001/api/user/createproductcategory\", {\n                method: \"POST\",\n                body: JSON.stringify({\n                    _id: user._id,\n                    products\n                }),\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                }\n            });\n            const data = await response.json();\n            console.log(\"response\", response);\n            console.log(\"data\", data);\n            if (response.ok) {\n                router.push(\"/home\");\n            } else {\n                throw Error(data.error);\n            }\n        } catch (error) {\n            setError(error.message);\n        }\n    };\n    const handleProduct = (product)=>{\n        console.log(\"handleProduct Products\", products);\n        console.log(\"handleProduct product\", product);\n        if (products.includes(product)) {\n            return;\n        }\n        setProducts((prevState)=>{\n            console.log(\"prevState\", prevState);\n            const newState = prevState;\n            console.log(\"newState\", newState);\n            return [\n                ...newState,\n                product\n            ];\n        });\n    };\n    // const handleProduct = useCallback((product) => {\n    //   console.log(\"handleProduct Products\", products);\n    //   console.log(\"handleProduct product\", product);\n    //   setProducts((prevState) => {\n    //     console.log(\"prevState\", prevState);\n    //     const newState = [...prevState, product];\n    //     console.log(\"newState\", newState);\n    //     return newState;\n    //   });\n    // }, []);\n    // const handleProduct = useCallback((product) => {\n    //   console.log(\"handleProduct Products\", products);\n    //   console.log(\"handleProduct product\", product);\n    //   setProducts((prevState) => {\n    //     console.log(prevState);\n    //     return [...prevState, product];\n    //   });\n    // }, []);\n    console.log(\"products at line 99\", products);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex items-center justify-center mt-3\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"text-black flex flex-col gap-2 p-1 rounded-lg bg-primary\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"font-bold text-[1.2rem]\",\n                    children: \"Choose Product Category\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\wwwko\\\\Desktop\\\\Next-Project\\\\brandbuilder-intern\\\\Client\\\\src\\\\app\\\\auth\\\\onbar\\\\categories\\\\page.jsx\",\n                    lineNumber: 133,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"What product do you want to sell? You should choose at less 3 categories\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\wwwko\\\\Desktop\\\\Next-Project\\\\brandbuilder-intern\\\\Client\\\\src\\\\app\\\\auth\\\\onbar\\\\categories\\\\page.jsx\",\n                    lineNumber: 134,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \" gap-4 text-center \",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-wrap gap-4 items-center justify-center \",\n                            children: data.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_labelBoxwithOutDescription__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                    title: item.title,\n                                    fn: handleProduct\n                                }, index, false, {\n                                    fileName: \"C:\\\\Users\\\\wwwko\\\\Desktop\\\\Next-Project\\\\brandbuilder-intern\\\\Client\\\\src\\\\app\\\\auth\\\\onbar\\\\categories\\\\page.jsx\",\n                                    lineNumber: 141,\n                                    columnNumber: 15\n                                }, undefined))\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\wwwko\\\\Desktop\\\\Next-Project\\\\brandbuilder-intern\\\\Client\\\\src\\\\app\\\\auth\\\\onbar\\\\categories\\\\page.jsx\",\n                            lineNumber: 139,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            children: error\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\wwwko\\\\Desktop\\\\Next-Project\\\\brandbuilder-intern\\\\Client\\\\src\\\\app\\\\auth\\\\onbar\\\\categories\\\\page.jsx\",\n                            lineNumber: 149,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: handleSubmit,\n                            className: \"w-fit px-20 py-2 mt-3 bg-font-secondary text-primary rounded-sm \",\n                            children: \"Apply\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\wwwko\\\\Desktop\\\\Next-Project\\\\brandbuilder-intern\\\\Client\\\\src\\\\app\\\\auth\\\\onbar\\\\categories\\\\page.jsx\",\n                            lineNumber: 150,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\wwwko\\\\Desktop\\\\Next-Project\\\\brandbuilder-intern\\\\Client\\\\src\\\\app\\\\auth\\\\onbar\\\\categories\\\\page.jsx\",\n                    lineNumber: 138,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\wwwko\\\\Desktop\\\\Next-Project\\\\brandbuilder-intern\\\\Client\\\\src\\\\app\\\\auth\\\\onbar\\\\categories\\\\page.jsx\",\n            lineNumber: 132,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\wwwko\\\\Desktop\\\\Next-Project\\\\brandbuilder-intern\\\\Client\\\\src\\\\app\\\\auth\\\\onbar\\\\categories\\\\page.jsx\",\n        lineNumber: 131,\n        columnNumber: 5\n    }, undefined);\n};\n_s(categories, \"XexB3JcOoWo8GPCiD/TgW4tmpWs=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (categories);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvYXV0aC9vbmJhci9jYXRlZ29yaWVzL3BhZ2UuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFFaUY7QUFDNUI7QUFFckQsTUFBTUksT0FBTztJQUNYO1FBQ0VDLE9BQU87SUFDVDtJQUNBO1FBQ0VBLE9BQU87SUFDVDtJQUNBO1FBQ0VBLE9BQU87SUFDVDtJQUNBO1FBQ0VBLE9BQU87SUFDVDtJQUNBO1FBQ0VBLE9BQU87SUFDVDtJQUNBO1FBQ0VBLE9BQU87SUFDVDtJQUNBO1FBQ0VBLE9BQU87SUFDVDtJQUNBO1FBQ0VBLE9BQU87SUFDVDtJQUNBO1FBQ0VBLE9BQU87SUFDVDtJQUNBO1FBQ0VBLE9BQU87SUFDVDtJQUNBO1FBQ0VBLE9BQU87SUFDVDtJQUNBO1FBQ0VBLE9BQU87SUFDVDtJQUNBO1FBQ0VBLE9BQU87SUFDVDtJQUNBO1FBQ0VBLE9BQU87SUFDVDtJQUNBO1FBQ0VBLE9BQU87SUFDVDtJQUNBO1FBQ0VBLE9BQU87SUFDVDtDQUNEO0FBRUQsTUFBTUMsYUFBYTs7SUFHakIsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdMLCtDQUFRQSxDQUFDLEVBQUU7SUFFM0NNLFFBQVFDLEdBQUcsQ0FBQyx1QkFBdUJIO0lBRW5DLE1BQU0sQ0FBQ0ksT0FBT0MsU0FBUyxHQUFHVCwrQ0FBUUEsQ0FBQztJQUVuQyxNQUFNVSxlQUFlO1FBQ25CLE1BQU1DLE9BQU9DLEtBQUtDLEtBQUssQ0FBQ0MsYUFBYUMsT0FBTyxDQUFDO1FBQzdDLElBQUk7WUFDRixNQUFNQyxXQUFXLE1BQU1DLE1BQ3JCLHdEQUNBO2dCQUNFQyxRQUFRO2dCQUNSQyxNQUFNUCxLQUFLUSxTQUFTLENBQUM7b0JBQUVDLEtBQUtWLEtBQUtVLEdBQUc7b0JBQUVqQjtnQkFBUztnQkFDL0NrQixTQUFTO29CQUNQLGdCQUFnQjtnQkFDbEI7WUFDRjtZQUVGLE1BQU1yQixPQUFPLE1BQU1lLFNBQVNPLElBQUk7WUFDaENqQixRQUFRQyxHQUFHLENBQUMsWUFBWVM7WUFDeEJWLFFBQVFDLEdBQUcsQ0FBQyxRQUFRTjtZQUNwQixJQUFJZSxTQUFTUSxFQUFFLEVBQUU7Z0JBQ2ZDLE9BQU9DLElBQUksQ0FBQztZQUNkLE9BQU87Z0JBQ0wsTUFBTUMsTUFBTTFCLEtBQUtPLEtBQUs7WUFDeEI7UUFDRixFQUFFLE9BQU9BLE9BQU87WUFDZEMsU0FBU0QsTUFBTW9CLE9BQU87UUFDeEI7SUFDRjtJQUVBLE1BQU1DLGdCQUFnQixDQUFDQztRQUNyQnhCLFFBQVFDLEdBQUcsQ0FBQywwQkFBMEJIO1FBQ3RDRSxRQUFRQyxHQUFHLENBQUMseUJBQXlCdUI7UUFFckMsSUFBSTFCLFNBQVMyQixRQUFRLENBQUNELFVBQVU7WUFDOUI7UUFDRjtRQUNBekIsWUFBWSxDQUFDMkI7WUFDWDFCLFFBQVFDLEdBQUcsQ0FBQyxhQUFheUI7WUFDekIsTUFBTUMsV0FBV0Q7WUFDakIxQixRQUFRQyxHQUFHLENBQUMsWUFBWTBCO1lBQ3hCLE9BQU87bUJBQUlBO2dCQUFVSDthQUFRO1FBQy9CO0lBQ0Y7SUFFQSxtREFBbUQ7SUFDbkQscURBQXFEO0lBQ3JELG1EQUFtRDtJQUNuRCxpQ0FBaUM7SUFDakMsMkNBQTJDO0lBQzNDLGdEQUFnRDtJQUNoRCx5Q0FBeUM7SUFDekMsdUJBQXVCO0lBQ3ZCLFFBQVE7SUFDUixVQUFVO0lBRVYsbURBQW1EO0lBQ25ELHFEQUFxRDtJQUNyRCxtREFBbUQ7SUFFbkQsaUNBQWlDO0lBQ2pDLDhCQUE4QjtJQUM5QixzQ0FBc0M7SUFDdEMsUUFBUTtJQUNSLFVBQVU7SUFFVnhCLFFBQVFDLEdBQUcsQ0FBQyx1QkFBdUJIO0lBRW5DLHFCQUNFLDhEQUFDOEI7UUFBSUMsV0FBVTtrQkFDYiw0RUFBQ0Q7WUFBSUMsV0FBVTs7OEJBQ2IsOERBQUNDO29CQUFFRCxXQUFVOzhCQUEwQjs7Ozs7OzhCQUN2Qyw4REFBQ0M7OEJBQUU7Ozs7Ozs4QkFJSCw4REFBQ0Y7b0JBQUlDLFdBQVU7O3NDQUNiLDhEQUFDRDs0QkFBSUMsV0FBVTtzQ0FDWmxDLEtBQUtvQyxHQUFHLENBQUMsQ0FBQ0MsTUFBTUMsc0JBQ2YsOERBQUMxQyw4RUFBMEJBO29DQUV6QkssT0FBT29DLEtBQUtwQyxLQUFLO29DQUNqQnNDLElBQUlYO21DQUZDVTs7Ozs7Ozs7OztzQ0FPWCw4REFBQ0U7c0NBQUlqQzs7Ozs7O3NDQUNMLDhEQUFDa0M7NEJBQ0NDLFNBQVNqQzs0QkFDVHlCLFdBQVU7c0NBQ1g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT1g7R0F2R01oQztBQXlHTiwrREFBZUEsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2F1dGgvb25iYXIvY2F0ZWdvcmllcy9wYWdlLmpzeD83YjI1Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5cclxuaW1wb3J0IExhYmVsQm94d2l0aE91dERlc2NyaXB0aW9uIGZyb20gXCJAL2NvbXBvbmVudHMvbGFiZWxCb3h3aXRoT3V0RGVzY3JpcHRpb25cIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgZGF0YSA9IFtcclxuICB7XHJcbiAgICB0aXRsZTogXCJBY2Nlc3Nvcmllc1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiQXV0b21hdGl2ZVwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiQmFnc1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiQmF0aC9CZWF1dHlcIixcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIkZvb3R3ZWFyXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJHaWZ0c1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiSG9tZS9HYXJkZW5cIixcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIkpld2VscnlcIixcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIktpZHNcIixcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIkJhYmllc1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiV2FsbGV0c1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiV2F0Y2hlc1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiUGV0c1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiTWFuIFdlYXJcIixcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIldvbWFuIFdlYXJcIixcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIk90aGVyXCIsXHJcbiAgfSxcclxuXTtcclxuXHJcbmNvbnN0IGNhdGVnb3JpZXMgPSAoKSA9PiB7XHJcbiAgXHJcblxyXG4gIGNvbnN0IFtwcm9kdWN0cywgc2V0UHJvZHVjdHNdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICBjb25zb2xlLmxvZyhcInByb2R1Y3RzIGF0IGxpbmUgNjBcIiwgcHJvZHVjdHMpO1xyXG5cclxuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCB1c2VyID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJcIikpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcclxuICAgICAgICBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9hcGkvdXNlci9jcmVhdGVwcm9kdWN0Y2F0ZWdvcnlcIixcclxuICAgICAgICB7XHJcbiAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBfaWQ6IHVzZXIuX2lkLCBwcm9kdWN0cyB9KSxcclxuICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH1cclxuICAgICAgKTtcclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgY29uc29sZS5sb2coXCJyZXNwb25zZVwiLCByZXNwb25zZSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiZGF0YVwiLCBkYXRhKTtcclxuICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgcm91dGVyLnB1c2goXCIvaG9tZVwiKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aHJvdyBFcnJvcihkYXRhLmVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgc2V0RXJyb3IoZXJyb3IubWVzc2FnZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlUHJvZHVjdCA9IChwcm9kdWN0KSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcImhhbmRsZVByb2R1Y3QgUHJvZHVjdHNcIiwgcHJvZHVjdHMpO1xyXG4gICAgY29uc29sZS5sb2coXCJoYW5kbGVQcm9kdWN0IHByb2R1Y3RcIiwgcHJvZHVjdCk7XHJcblxyXG4gICAgaWYgKHByb2R1Y3RzLmluY2x1ZGVzKHByb2R1Y3QpKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHNldFByb2R1Y3RzKChwcmV2U3RhdGUpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coXCJwcmV2U3RhdGVcIiwgcHJldlN0YXRlKTtcclxuICAgICAgY29uc3QgbmV3U3RhdGUgPSBwcmV2U3RhdGU7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwibmV3U3RhdGVcIiwgbmV3U3RhdGUpO1xyXG4gICAgICByZXR1cm4gWy4uLm5ld1N0YXRlLCBwcm9kdWN0XTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIC8vIGNvbnN0IGhhbmRsZVByb2R1Y3QgPSB1c2VDYWxsYmFjaygocHJvZHVjdCkgPT4ge1xyXG4gIC8vICAgY29uc29sZS5sb2coXCJoYW5kbGVQcm9kdWN0IFByb2R1Y3RzXCIsIHByb2R1Y3RzKTtcclxuICAvLyAgIGNvbnNvbGUubG9nKFwiaGFuZGxlUHJvZHVjdCBwcm9kdWN0XCIsIHByb2R1Y3QpO1xyXG4gIC8vICAgc2V0UHJvZHVjdHMoKHByZXZTdGF0ZSkgPT4ge1xyXG4gIC8vICAgICBjb25zb2xlLmxvZyhcInByZXZTdGF0ZVwiLCBwcmV2U3RhdGUpO1xyXG4gIC8vICAgICBjb25zdCBuZXdTdGF0ZSA9IFsuLi5wcmV2U3RhdGUsIHByb2R1Y3RdO1xyXG4gIC8vICAgICBjb25zb2xlLmxvZyhcIm5ld1N0YXRlXCIsIG5ld1N0YXRlKTtcclxuICAvLyAgICAgcmV0dXJuIG5ld1N0YXRlO1xyXG4gIC8vICAgfSk7XHJcbiAgLy8gfSwgW10pO1xyXG5cclxuICAvLyBjb25zdCBoYW5kbGVQcm9kdWN0ID0gdXNlQ2FsbGJhY2soKHByb2R1Y3QpID0+IHtcclxuICAvLyAgIGNvbnNvbGUubG9nKFwiaGFuZGxlUHJvZHVjdCBQcm9kdWN0c1wiLCBwcm9kdWN0cyk7XHJcbiAgLy8gICBjb25zb2xlLmxvZyhcImhhbmRsZVByb2R1Y3QgcHJvZHVjdFwiLCBwcm9kdWN0KTtcclxuXHJcbiAgLy8gICBzZXRQcm9kdWN0cygocHJldlN0YXRlKSA9PiB7XHJcbiAgLy8gICAgIGNvbnNvbGUubG9nKHByZXZTdGF0ZSk7XHJcbiAgLy8gICAgIHJldHVybiBbLi4ucHJldlN0YXRlLCBwcm9kdWN0XTtcclxuICAvLyAgIH0pO1xyXG4gIC8vIH0sIFtdKTtcclxuXHJcbiAgY29uc29sZS5sb2coXCJwcm9kdWN0cyBhdCBsaW5lIDk5XCIsIHByb2R1Y3RzKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgbXQtM1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtYmxhY2sgZmxleCBmbGV4LWNvbCBnYXAtMiBwLTEgcm91bmRlZC1sZyBiZy1wcmltYXJ5XCI+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtWzEuMnJlbV1cIj5DaG9vc2UgUHJvZHVjdCBDYXRlZ29yeTwvcD5cclxuICAgICAgICA8cD5cclxuICAgICAgICAgIFdoYXQgcHJvZHVjdCBkbyB5b3Ugd2FudCB0byBzZWxsPyBZb3Ugc2hvdWxkIGNob29zZSBhdCBsZXNzIDNcclxuICAgICAgICAgIGNhdGVnb3JpZXNcclxuICAgICAgICA8L3A+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgZ2FwLTQgdGV4dC1jZW50ZXIgXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGdhcC00IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBcIj5cclxuICAgICAgICAgICAge2RhdGEubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgIDxMYWJlbEJveHdpdGhPdXREZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICAgIHRpdGxlPXtpdGVtLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgZm49e2hhbmRsZVByb2R1Y3R9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8aDE+e2Vycm9yfTwvaDE+XHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVN1Ym1pdH1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1maXQgcHgtMjAgcHktMiBtdC0zIGJnLWZvbnQtc2Vjb25kYXJ5IHRleHQtcHJpbWFyeSByb3VuZGVkLXNtIFwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIEFwcGx5XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2F0ZWdvcmllcztcclxuIl0sIm5hbWVzIjpbIkxhYmVsQm94d2l0aE91dERlc2NyaXB0aW9uIiwiUmVhY3QiLCJ1c2VDYWxsYmFjayIsInVzZVN0YXRlIiwiZGF0YSIsInRpdGxlIiwiY2F0ZWdvcmllcyIsInByb2R1Y3RzIiwic2V0UHJvZHVjdHMiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJzZXRFcnJvciIsImhhbmRsZVN1Ym1pdCIsInVzZXIiLCJKU09OIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJzdHJpbmdpZnkiLCJfaWQiLCJoZWFkZXJzIiwianNvbiIsIm9rIiwicm91dGVyIiwicHVzaCIsIkVycm9yIiwibWVzc2FnZSIsImhhbmRsZVByb2R1Y3QiLCJwcm9kdWN0IiwiaW5jbHVkZXMiLCJwcmV2U3RhdGUiLCJuZXdTdGF0ZSIsImRpdiIsImNsYXNzTmFtZSIsInAiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJmbiIsImgxIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/auth/onbar/categories/page.jsx\n"));

/***/ })

});