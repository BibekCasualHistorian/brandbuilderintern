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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_labelBoxwithOutDescription__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/labelBoxwithOutDescription */ \"(app-pages-browser)/./src/components/labelBoxwithOutDescription.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst data = [\n    {\n        title: \"Accessories\"\n    },\n    {\n        title: \"Automative\"\n    },\n    {\n        title: \"Bags\"\n    },\n    {\n        title: \"Bath/Beauty\"\n    },\n    {\n        title: \"Footwear\"\n    },\n    {\n        title: \"Gifts\"\n    },\n    {\n        title: \"Home/Garden\"\n    },\n    {\n        title: \"Jewelry\"\n    },\n    {\n        title: \"Kids\"\n    },\n    {\n        title: \"Babies\"\n    },\n    {\n        title: \"Wallets\"\n    },\n    {\n        title: \"Watches\"\n    },\n    {\n        title: \"Pets\"\n    },\n    {\n        title: \"Man Wear\"\n    },\n    {\n        title: \"Woman Wear\"\n    },\n    {\n        title: \"Other\"\n    }\n];\nconst categories = ()=>{\n    _s();\n    const [products, setProducts] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    console.log(\"products at line 60\", products);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const handleSubmit = async ()=>{\n        const user = JSON.parse(localStorage.getItem(\"user\"));\n        try {\n            const response = await fetch(\"http://localhost:3001/api/user/createproductcategory\", {\n                method: \"POST\",\n                body: JSON.stringify({\n                    _id: user._id,\n                    products\n                }),\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                }\n            });\n            const data = await response.json();\n            console.log(\"response\", response);\n            console.log(\"data\", data);\n            if (response.ok) {\n                router.push(\"/home\");\n            } else {\n                throw Error(data.error);\n            }\n        } catch (error) {\n            setError(error.message);\n        }\n    };\n    // const handleProduct = (product) => {\n    //   console.log(\"handleProduct Products\", products);\n    //   console.log(\"handleProduct product\", product);\n    //   if (products.includes(product)) {\n    //     return;\n    //   }\n    //   setProducts((prevState) => {\n    //     console.log(\"prevState\", prevState);\n    //     const newState = prevState;\n    //     return [...newState, product];\n    //   });\n    // };\n    // const handleProduct = useCallback((product) => {\n    //   console.log(\"handleProduct Products\", products);\n    //   console.log(\"handleProduct product\", product);\n    //   setProducts((prevState) => {\n    //     console.log(\"prevState\", prevState);\n    //     const newState = [...prevState, product];\n    //     console.log(\"newState\", newState);\n    //     return newState;\n    //   });\n    // }, []);\n    const handleProduct = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((product)=>{\n        console.log(\"handleProduct Products\", products);\n        console.log(\"handleProduct product\", product);\n        setProducts((prevState)=>{\n            return [\n                ...prevState,\n                product\n            ];\n        });\n    }, []);\n    console.log(\"products at line 99\", products);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex items-center justify-center mt-3\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"text-black flex flex-col gap-2 p-1 rounded-lg bg-primary\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"font-bold text-[1.1rem]\",\n                    children: \"Choose Product Category\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\wwwko\\\\Desktop\\\\Next-Project\\\\brandbuilder-intern\\\\Client\\\\src\\\\app\\\\auth\\\\onbar\\\\categories\\\\page.jsx\",\n                    lineNumber: 128,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"What product do you want to sell? You should choose at less 3 categories\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\wwwko\\\\Desktop\\\\Next-Project\\\\brandbuilder-intern\\\\Client\\\\src\\\\app\\\\auth\\\\onbar\\\\categories\\\\page.jsx\",\n                    lineNumber: 129,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \" gap-4 text-center \",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-wrap gap-4 items-center justify-center \",\n                            children: data.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_labelBoxwithOutDescription__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                    title: item.title,\n                                    fn: handleProduct\n                                }, index, false, {\n                                    fileName: \"C:\\\\Users\\\\wwwko\\\\Desktop\\\\Next-Project\\\\brandbuilder-intern\\\\Client\\\\src\\\\app\\\\auth\\\\onbar\\\\categories\\\\page.jsx\",\n                                    lineNumber: 136,\n                                    columnNumber: 15\n                                }, undefined))\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\wwwko\\\\Desktop\\\\Next-Project\\\\brandbuilder-intern\\\\Client\\\\src\\\\app\\\\auth\\\\onbar\\\\categories\\\\page.jsx\",\n                            lineNumber: 134,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            children: error\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\wwwko\\\\Desktop\\\\Next-Project\\\\brandbuilder-intern\\\\Client\\\\src\\\\app\\\\auth\\\\onbar\\\\categories\\\\page.jsx\",\n                            lineNumber: 144,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: handleSubmit,\n                            className: \"w-fit px-20 py-2 mt-3 bg-font-secondary text-primary rounded-sm \",\n                            children: \"Apply\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\wwwko\\\\Desktop\\\\Next-Project\\\\brandbuilder-intern\\\\Client\\\\src\\\\app\\\\auth\\\\onbar\\\\categories\\\\page.jsx\",\n                            lineNumber: 145,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\wwwko\\\\Desktop\\\\Next-Project\\\\brandbuilder-intern\\\\Client\\\\src\\\\app\\\\auth\\\\onbar\\\\categories\\\\page.jsx\",\n                    lineNumber: 133,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\wwwko\\\\Desktop\\\\Next-Project\\\\brandbuilder-intern\\\\Client\\\\src\\\\app\\\\auth\\\\onbar\\\\categories\\\\page.jsx\",\n            lineNumber: 127,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\wwwko\\\\Desktop\\\\Next-Project\\\\brandbuilder-intern\\\\Client\\\\src\\\\app\\\\auth\\\\onbar\\\\categories\\\\page.jsx\",\n        lineNumber: 126,\n        columnNumber: 5\n    }, undefined);\n};\n_s(categories, \"/ageMu5SZgeSvWXkbL83snSVU98=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (categories);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvYXV0aC9vbmJhci9jYXRlZ29yaWVzL3BhZ2UuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFFaUY7QUFDNUI7QUFFckQsTUFBTUksT0FBTztJQUNYO1FBQ0VDLE9BQU87SUFDVDtJQUNBO1FBQ0VBLE9BQU87SUFDVDtJQUNBO1FBQ0VBLE9BQU87SUFDVDtJQUNBO1FBQ0VBLE9BQU87SUFDVDtJQUNBO1FBQ0VBLE9BQU87SUFDVDtJQUNBO1FBQ0VBLE9BQU87SUFDVDtJQUNBO1FBQ0VBLE9BQU87SUFDVDtJQUNBO1FBQ0VBLE9BQU87SUFDVDtJQUNBO1FBQ0VBLE9BQU87SUFDVDtJQUNBO1FBQ0VBLE9BQU87SUFDVDtJQUNBO1FBQ0VBLE9BQU87SUFDVDtJQUNBO1FBQ0VBLE9BQU87SUFDVDtJQUNBO1FBQ0VBLE9BQU87SUFDVDtJQUNBO1FBQ0VBLE9BQU87SUFDVDtJQUNBO1FBQ0VBLE9BQU87SUFDVDtJQUNBO1FBQ0VBLE9BQU87SUFDVDtDQUNEO0FBRUQsTUFBTUMsYUFBYTs7SUFDakIsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdMLCtDQUFRQSxDQUFDLEVBQUU7SUFFM0NNLFFBQVFDLEdBQUcsQ0FBQyx1QkFBdUJIO0lBRW5DLE1BQU0sQ0FBQ0ksT0FBT0MsU0FBUyxHQUFHVCwrQ0FBUUEsQ0FBQztJQUVuQyxNQUFNVSxlQUFlO1FBQ25CLE1BQU1DLE9BQU9DLEtBQUtDLEtBQUssQ0FBQ0MsYUFBYUMsT0FBTyxDQUFDO1FBQzdDLElBQUk7WUFDRixNQUFNQyxXQUFXLE1BQU1DLE1BQ3JCLHdEQUNBO2dCQUNFQyxRQUFRO2dCQUNSQyxNQUFNUCxLQUFLUSxTQUFTLENBQUM7b0JBQUVDLEtBQUtWLEtBQUtVLEdBQUc7b0JBQUVqQjtnQkFBUztnQkFDL0NrQixTQUFTO29CQUNQLGdCQUFnQjtnQkFDbEI7WUFDRjtZQUVGLE1BQU1yQixPQUFPLE1BQU1lLFNBQVNPLElBQUk7WUFDaENqQixRQUFRQyxHQUFHLENBQUMsWUFBWVM7WUFDeEJWLFFBQVFDLEdBQUcsQ0FBQyxRQUFRTjtZQUNwQixJQUFJZSxTQUFTUSxFQUFFLEVBQUU7Z0JBQ2ZDLE9BQU9DLElBQUksQ0FBQztZQUNkLE9BQU87Z0JBQ0wsTUFBTUMsTUFBTTFCLEtBQUtPLEtBQUs7WUFDeEI7UUFDRixFQUFFLE9BQU9BLE9BQU87WUFDZEMsU0FBU0QsTUFBTW9CLE9BQU87UUFDeEI7SUFDRjtJQUVBLHVDQUF1QztJQUN2QyxxREFBcUQ7SUFDckQsbURBQW1EO0lBQ25ELHNDQUFzQztJQUN0QyxjQUFjO0lBQ2QsTUFBTTtJQUNOLGlDQUFpQztJQUNqQywyQ0FBMkM7SUFDM0Msa0NBQWtDO0lBQ2xDLHFDQUFxQztJQUNyQyxRQUFRO0lBQ1IsS0FBSztJQUVMLG1EQUFtRDtJQUNuRCxxREFBcUQ7SUFDckQsbURBQW1EO0lBQ25ELGlDQUFpQztJQUNqQywyQ0FBMkM7SUFDM0MsZ0RBQWdEO0lBQ2hELHlDQUF5QztJQUN6Qyx1QkFBdUI7SUFDdkIsUUFBUTtJQUNSLFVBQVU7SUFFVixNQUFNQyxnQkFBZ0I5QixrREFBV0EsQ0FBQyxDQUFDK0I7UUFDakN4QixRQUFRQyxHQUFHLENBQUMsMEJBQTBCSDtRQUN0Q0UsUUFBUUMsR0FBRyxDQUFDLHlCQUF5QnVCO1FBQ3JDekIsWUFBWSxDQUFDMEI7WUFFWCxPQUFPO21CQUFJQTtnQkFBV0Q7YUFBUTtRQUNoQztJQUNGLEdBQUcsRUFBRTtJQUVMeEIsUUFBUUMsR0FBRyxDQUFDLHVCQUF1Qkg7SUFFbkMscUJBQ0UsOERBQUM0QjtRQUFJQyxXQUFVO2tCQUNiLDRFQUFDRDtZQUFJQyxXQUFVOzs4QkFDYiw4REFBQ0M7b0JBQUVELFdBQVU7OEJBQTBCOzs7Ozs7OEJBQ3ZDLDhEQUFDQzs4QkFBRTs7Ozs7OzhCQUlILDhEQUFDRjtvQkFBSUMsV0FBVTs7c0NBQ2IsOERBQUNEOzRCQUFJQyxXQUFVO3NDQUNaaEMsS0FBS2tDLEdBQUcsQ0FBQyxDQUFDQyxNQUFNQyxzQkFDZiw4REFBQ3hDLDhFQUEwQkE7b0NBRXpCSyxPQUFPa0MsS0FBS2xDLEtBQUs7b0NBQ2pCb0MsSUFBSVQ7bUNBRkNROzs7Ozs7Ozs7O3NDQU9YLDhEQUFDRTtzQ0FBSS9COzs7Ozs7c0NBQ0wsOERBQUNnQzs0QkFDQ0MsU0FBUy9COzRCQUNUdUIsV0FBVTtzQ0FDWDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPWDtHQWxHTTlCO0FBb0dOLCtEQUFlQSxVQUFVQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvYXV0aC9vbmJhci9jYXRlZ29yaWVzL3BhZ2UuanN4PzdiMjUiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcblxyXG5pbXBvcnQgTGFiZWxCb3h3aXRoT3V0RGVzY3JpcHRpb24gZnJvbSBcIkAvY29tcG9uZW50cy9sYWJlbEJveHdpdGhPdXREZXNjcmlwdGlvblwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBkYXRhID0gW1xyXG4gIHtcclxuICAgIHRpdGxlOiBcIkFjY2Vzc29yaWVzXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJBdXRvbWF0aXZlXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJCYWdzXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJCYXRoL0JlYXV0eVwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiRm9vdHdlYXJcIixcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIkdpZnRzXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJIb21lL0dhcmRlblwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiSmV3ZWxyeVwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiS2lkc1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiQmFiaWVzXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJXYWxsZXRzXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJXYXRjaGVzXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJQZXRzXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJNYW4gV2VhclwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiV29tYW4gV2VhclwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiT3RoZXJcIixcclxuICB9LFxyXG5dO1xyXG5cclxuY29uc3QgY2F0ZWdvcmllcyA9ICgpID0+IHtcclxuICBjb25zdCBbcHJvZHVjdHMsIHNldFByb2R1Y3RzXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgY29uc29sZS5sb2coXCJwcm9kdWN0cyBhdCBsaW5lIDYwXCIsIHByb2R1Y3RzKTtcclxuXHJcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgdXNlciA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyXCIpKTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXHJcbiAgICAgICAgXCJodHRwOi8vbG9jYWxob3N0OjMwMDEvYXBpL3VzZXIvY3JlYXRlcHJvZHVjdGNhdGVnb3J5XCIsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgX2lkOiB1c2VyLl9pZCwgcHJvZHVjdHMgfSksXHJcbiAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9XHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwicmVzcG9uc2VcIiwgcmVzcG9uc2UpO1xyXG4gICAgICBjb25zb2xlLmxvZyhcImRhdGFcIiwgZGF0YSk7XHJcbiAgICAgIGlmIChyZXNwb25zZS5vaykge1xyXG4gICAgICAgIHJvdXRlci5wdXNoKFwiL2hvbWVcIik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhyb3cgRXJyb3IoZGF0YS5lcnJvcik7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIHNldEVycm9yKGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIC8vIGNvbnN0IGhhbmRsZVByb2R1Y3QgPSAocHJvZHVjdCkgPT4ge1xyXG4gIC8vICAgY29uc29sZS5sb2coXCJoYW5kbGVQcm9kdWN0IFByb2R1Y3RzXCIsIHByb2R1Y3RzKTtcclxuICAvLyAgIGNvbnNvbGUubG9nKFwiaGFuZGxlUHJvZHVjdCBwcm9kdWN0XCIsIHByb2R1Y3QpO1xyXG4gIC8vICAgaWYgKHByb2R1Y3RzLmluY2x1ZGVzKHByb2R1Y3QpKSB7XHJcbiAgLy8gICAgIHJldHVybjtcclxuICAvLyAgIH1cclxuICAvLyAgIHNldFByb2R1Y3RzKChwcmV2U3RhdGUpID0+IHtcclxuICAvLyAgICAgY29uc29sZS5sb2coXCJwcmV2U3RhdGVcIiwgcHJldlN0YXRlKTtcclxuICAvLyAgICAgY29uc3QgbmV3U3RhdGUgPSBwcmV2U3RhdGU7XHJcbiAgLy8gICAgIHJldHVybiBbLi4ubmV3U3RhdGUsIHByb2R1Y3RdO1xyXG4gIC8vICAgfSk7XHJcbiAgLy8gfTtcclxuXHJcbiAgLy8gY29uc3QgaGFuZGxlUHJvZHVjdCA9IHVzZUNhbGxiYWNrKChwcm9kdWN0KSA9PiB7XHJcbiAgLy8gICBjb25zb2xlLmxvZyhcImhhbmRsZVByb2R1Y3QgUHJvZHVjdHNcIiwgcHJvZHVjdHMpO1xyXG4gIC8vICAgY29uc29sZS5sb2coXCJoYW5kbGVQcm9kdWN0IHByb2R1Y3RcIiwgcHJvZHVjdCk7XHJcbiAgLy8gICBzZXRQcm9kdWN0cygocHJldlN0YXRlKSA9PiB7XHJcbiAgLy8gICAgIGNvbnNvbGUubG9nKFwicHJldlN0YXRlXCIsIHByZXZTdGF0ZSk7XHJcbiAgLy8gICAgIGNvbnN0IG5ld1N0YXRlID0gWy4uLnByZXZTdGF0ZSwgcHJvZHVjdF07XHJcbiAgLy8gICAgIGNvbnNvbGUubG9nKFwibmV3U3RhdGVcIiwgbmV3U3RhdGUpO1xyXG4gIC8vICAgICByZXR1cm4gbmV3U3RhdGU7XHJcbiAgLy8gICB9KTtcclxuICAvLyB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVByb2R1Y3QgPSB1c2VDYWxsYmFjaygocHJvZHVjdCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJoYW5kbGVQcm9kdWN0IFByb2R1Y3RzXCIsIHByb2R1Y3RzKTtcclxuICAgIGNvbnNvbGUubG9nKFwiaGFuZGxlUHJvZHVjdCBwcm9kdWN0XCIsIHByb2R1Y3QpO1xyXG4gICAgc2V0UHJvZHVjdHMoKHByZXZTdGF0ZSkgPT4ge1xyXG4gICAgICBcclxuICAgICAgcmV0dXJuIFsuLi5wcmV2U3RhdGUsIHByb2R1Y3RdO1xyXG4gICAgfSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zb2xlLmxvZyhcInByb2R1Y3RzIGF0IGxpbmUgOTlcIiwgcHJvZHVjdHMpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBtdC0zXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1ibGFjayBmbGV4IGZsZXgtY29sIGdhcC0yIHAtMSByb3VuZGVkLWxnIGJnLXByaW1hcnlcIj5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC1bMS4xcmVtXVwiPkNob29zZSBQcm9kdWN0IENhdGVnb3J5PC9wPlxyXG4gICAgICAgIDxwPlxyXG4gICAgICAgICAgV2hhdCBwcm9kdWN0IGRvIHlvdSB3YW50IHRvIHNlbGw/IFlvdSBzaG91bGQgY2hvb3NlIGF0IGxlc3MgM1xyXG4gICAgICAgICAgY2F0ZWdvcmllc1xyXG4gICAgICAgIDwvcD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBnYXAtNCB0ZXh0LWNlbnRlciBcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgZ2FwLTQgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIFwiPlxyXG4gICAgICAgICAgICB7ZGF0YS5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgPExhYmVsQm94d2l0aE91dERlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgdGl0bGU9e2l0ZW0udGl0bGV9XHJcbiAgICAgICAgICAgICAgICBmbj17aGFuZGxlUHJvZHVjdH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxoMT57ZXJyb3J9PC9oMT5cclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgb25DbGljaz17aGFuZGxlU3VibWl0fVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZpdCBweC0yMCBweS0yIG10LTMgYmctZm9udC1zZWNvbmRhcnkgdGV4dC1wcmltYXJ5IHJvdW5kZWQtc20gXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgQXBwbHlcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjYXRlZ29yaWVzO1xyXG4iXSwibmFtZXMiOlsiTGFiZWxCb3h3aXRoT3V0RGVzY3JpcHRpb24iLCJSZWFjdCIsInVzZUNhbGxiYWNrIiwidXNlU3RhdGUiLCJkYXRhIiwidGl0bGUiLCJjYXRlZ29yaWVzIiwicHJvZHVjdHMiLCJzZXRQcm9kdWN0cyIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsInNldEVycm9yIiwiaGFuZGxlU3VibWl0IiwidXNlciIsIkpTT04iLCJwYXJzZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsInN0cmluZ2lmeSIsIl9pZCIsImhlYWRlcnMiLCJqc29uIiwib2siLCJyb3V0ZXIiLCJwdXNoIiwiRXJyb3IiLCJtZXNzYWdlIiwiaGFuZGxlUHJvZHVjdCIsInByb2R1Y3QiLCJwcmV2U3RhdGUiLCJkaXYiLCJjbGFzc05hbWUiLCJwIiwibWFwIiwiaXRlbSIsImluZGV4IiwiZm4iLCJoMSIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/auth/onbar/categories/page.jsx\n"));

/***/ })

});