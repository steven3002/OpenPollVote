"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/event/vote.js":
/*!***************************!*\
  !*** ./src/event/vote.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   VoteComponent: function() { return /* binding */ VoteComponent; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\n// export const VoteComponent = () => {\n//     const [showCards, setShowCards] = useState(false);\n//     const [voteCount1, setVoteCount1] = useState(0);\n//     const [voteCount2, setVoteCount2] = useState(0);\n//     const [voteCount3, setVoteCount3] = useState(0);\n//     const [timer, setTimer] = useState(120); // 2 minutes in seconds\n//     useEffect(() => {\n//         let countdown = null;\n//         if (showCards) {\n//             countdown = setInterval(() => {\n//                 setTimer(prevTimer => prevTimer - 1);\n//             }, 1000);\n//         }\n//         return () => clearInterval(countdown);\n//     }, [showCards]);\n//     useEffect(() => {\n//         if (timer === 0) {\n//             // Voting time is over, do something\n//             clearInterval(timer);\n//             setShowCards(false); // Hide the cards when time is up\n//         }\n//     }, [timer]);\n//     const handleButtonClick = () => {\n//         setShowCards(true); // Update showCards state to true\n//     };\n//     const handleVote1 = () => {\n//         setVoteCount1(prevCount => prevCount + 1);\n//     };\n//     const handleVote2 = () => {\n//         setVoteCount2(prevCount => prevCount + 1);\n//     };\n//     const handleVote3 = () => {\n//         setVoteCount3(prevCount => prevCount + 1);\n//     };\n//     return (\n//         <div className=\"container events-container\">\n//             {!showCards && (\n//                 <button onClick={handleButtonClick}>Start Voting</button>\n//             )}\n//             {showCards && (\n//                 <div className=\"container events-container vote-main\">\n//                     <div id=\"events-list\">\n//                         <div className=\"event\">\n//                             <div className=\"event-containerx\">\n//                                 <div className=\" container112 event-detailsx, event-detailse\">\n//                                     <div class=\"wrapper112\">\n//                                         <div class=\"banner-image\"> </div>\n//                                         <h1> Toyota Supra</h1>\n//                                         <p>Lorem ipsum dolor sit amet, <br />\n//                                             consectetur adipiscing elit.</p>\n//                                     </div>\n//                                     <div class=\"button-wrapper\">\n//                                         <button class=\"btn fill\" onClick={handleVote1}>Vote</button>\n//                                     </div>\n//                                 </div>\n//                                 <div className=\" container112  event-detailsx\">\n//                                     <div class=\"wrapper112\">\n//                                         <div class=\"banner-image\"> </div>\n//                                         <h1> Toyota Supra</h1>\n//                                         <p>Lorem ipsum dolor sit amet, <br />\n//                                             consectetur adipiscing elit.</p>\n//                                     </div>\n//                                     <div class=\"button-wrapper\">\n//                                         <button class=\"btn fill\" onClick={handleVote2}>Vote</button>\n//                                     </div>\n//                                 </div>\n//                                 <div className=\" container112  event-detailsx line-edit\">\n//                                     <div class=\"wrapper112\">\n//                                         <div class=\"banner-image\"> </div>\n//                                         <h1> Toyota Supra</h1>\n//                                         <p>Lorem ipsum dolor sit amet, <br />\n//                                             consectetur adipiscing elit.</p>\n//                                     </div>\n//                                     <div class=\"button-wrapper\">\n//                                         <button class=\"btn fill\" onClick={handleVote3}>Vote</button>\n//                                     </div>\n//                                 </div>\n//                             </div>\n//                         </div>\n//                     </div>\n//                 </div>\n//             )}\n//             {showCards && <div>Time Left: {timer} seconds</div>}\n//         </div>\n//     );\n// };\n// ;\nconst VoteComponent = (param)=>{\n    let { title, description, handleVote } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container events-container\",\n        children: [\n            !showCards && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleButtonClick,\n                children: \"Start Voting\"\n            }, void 0, false, {\n                fileName: \"C:\\\\polldart\\\\src\\\\event\\\\vote.js\",\n                lineNumber: 116,\n                columnNumber: 17\n            }, undefined),\n            showCards && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container events-container vote-main\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    id: \"events-list\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"event\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"event-containerx\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"container112 event-detailsx event-detailse\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"wrapper112\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"banner-image\",\n                                                children: \" \"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\polldart\\\\src\\\\event\\\\vote.js\",\n                                                lineNumber: 126,\n                                                columnNumber: 41\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                                children: title\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\polldart\\\\src\\\\event\\\\vote.js\",\n                                                lineNumber: 127,\n                                                columnNumber: 41\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                children: description\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\polldart\\\\src\\\\event\\\\vote.js\",\n                                                lineNumber: 128,\n                                                columnNumber: 41\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\polldart\\\\src\\\\event\\\\vote.js\",\n                                        lineNumber: 125,\n                                        columnNumber: 37\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"button-wrapper\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            className: \"btn fill\",\n                                            onClick: handleVote,\n                                            children: \"Vote\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\polldart\\\\src\\\\event\\\\vote.js\",\n                                            lineNumber: 131,\n                                            columnNumber: 41\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\polldart\\\\src\\\\event\\\\vote.js\",\n                                        lineNumber: 130,\n                                        columnNumber: 37\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\polldart\\\\src\\\\event\\\\vote.js\",\n                                lineNumber: 124,\n                                columnNumber: 33\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\polldart\\\\src\\\\event\\\\vote.js\",\n                            lineNumber: 123,\n                            columnNumber: 29\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\polldart\\\\src\\\\event\\\\vote.js\",\n                        lineNumber: 122,\n                        columnNumber: 25\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\polldart\\\\src\\\\event\\\\vote.js\",\n                    lineNumber: 121,\n                    columnNumber: 21\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\polldart\\\\src\\\\event\\\\vote.js\",\n                lineNumber: 120,\n                columnNumber: 17\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\polldart\\\\src\\\\event\\\\vote.js\",\n        lineNumber: 114,\n        columnNumber: 9\n    }, undefined);\n};\n_c = VoteComponent;\nvar _c;\n$RefreshReg$(_c, \"VoteComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZXZlbnQvdm90ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBNEM7QUFHNUMsdUNBQXVDO0FBQ3ZDLHlEQUF5RDtBQUN6RCx1REFBdUQ7QUFDdkQsdURBQXVEO0FBQ3ZELHVEQUF1RDtBQUN2RCx1RUFBdUU7QUFFdkUsd0JBQXdCO0FBQ3hCLGdDQUFnQztBQUNoQywyQkFBMkI7QUFDM0IsOENBQThDO0FBQzlDLHdEQUF3RDtBQUN4RCx3QkFBd0I7QUFDeEIsWUFBWTtBQUNaLGlEQUFpRDtBQUNqRCx1QkFBdUI7QUFFdkIsd0JBQXdCO0FBQ3hCLDZCQUE2QjtBQUM3QixtREFBbUQ7QUFDbkQsb0NBQW9DO0FBQ3BDLHFFQUFxRTtBQUNyRSxZQUFZO0FBQ1osbUJBQW1CO0FBRW5CLHdDQUF3QztBQUN4QyxnRUFBZ0U7QUFDaEUsU0FBUztBQUdULGtDQUFrQztBQUNsQyxxREFBcUQ7QUFDckQsU0FBUztBQUVULGtDQUFrQztBQUNsQyxxREFBcUQ7QUFDckQsU0FBUztBQUVULGtDQUFrQztBQUNsQyxxREFBcUQ7QUFDckQsU0FBUztBQUVULGVBQWU7QUFDZix1REFBdUQ7QUFDdkQsK0JBQStCO0FBQy9CLDRFQUE0RTtBQUM1RSxpQkFBaUI7QUFDakIsOEJBQThCO0FBRTlCLHlFQUF5RTtBQUN6RSw2Q0FBNkM7QUFDN0Msa0RBQWtEO0FBQ2xELGlFQUFpRTtBQUNqRSxpR0FBaUc7QUFDakcsK0RBQStEO0FBQy9ELDRFQUE0RTtBQUM1RSxpRUFBaUU7QUFDakUsZ0ZBQWdGO0FBQ2hGLCtFQUErRTtBQUMvRSw2Q0FBNkM7QUFDN0MsbUVBQW1FO0FBRW5FLHVHQUF1RztBQUV2Ryw2Q0FBNkM7QUFFN0MseUNBQXlDO0FBQ3pDLGtGQUFrRjtBQUNsRiwrREFBK0Q7QUFDL0QsNEVBQTRFO0FBQzVFLGlFQUFpRTtBQUNqRSxnRkFBZ0Y7QUFDaEYsK0VBQStFO0FBQy9FLDZDQUE2QztBQUM3QyxtRUFBbUU7QUFFbkUsdUdBQXVHO0FBRXZHLDZDQUE2QztBQUU3Qyx5Q0FBeUM7QUFDekMsNEZBQTRGO0FBQzVGLCtEQUErRDtBQUMvRCw0RUFBNEU7QUFDNUUsaUVBQWlFO0FBQ2pFLGdGQUFnRjtBQUNoRiwrRUFBK0U7QUFDL0UsNkNBQTZDO0FBQzdDLG1FQUFtRTtBQUVuRSx1R0FBdUc7QUFFdkcsNkNBQTZDO0FBRzdDLHlDQUF5QztBQUN6QyxxQ0FBcUM7QUFDckMsaUNBQWlDO0FBQ2pDLDZCQUE2QjtBQUU3Qix5QkFBeUI7QUFDekIsaUJBQWlCO0FBQ2pCLG1FQUFtRTtBQUNuRSxpQkFBaUI7QUFDakIsU0FBUztBQUNULEtBQUs7QUFDTCxJQUFJO0FBQ0csTUFBTUUsZ0JBQWdCO1FBQUMsRUFBRUMsS0FBSyxFQUFFQyxXQUFXLEVBQUVDLFVBQVUsRUFBRTtJQUU1RCxxQkFDSSw4REFBQ0M7UUFBSUMsV0FBVTs7WUFDVixDQUFDQywyQkFDRSw4REFBQ0M7Z0JBQU9DLFNBQVNDOzBCQUFtQjs7Ozs7O1lBRXZDSCwyQkFFRyw4REFBQ0Y7Z0JBQUlDLFdBQVU7MEJBQ1gsNEVBQUNEO29CQUFJTSxJQUFHOzhCQUNKLDRFQUFDTjt3QkFBSUMsV0FBVTtrQ0FDWCw0RUFBQ0Q7NEJBQUlDLFdBQVU7c0NBQ1gsNEVBQUNEO2dDQUFJQyxXQUFVOztrREFDWCw4REFBQ0Q7d0NBQUlDLFdBQVU7OzBEQUNYLDhEQUFDRDtnREFBSUMsV0FBVTswREFBZTs7Ozs7OzBEQUM5Qiw4REFBQ007MERBQUlWOzs7Ozs7MERBQ0wsOERBQUNXOzBEQUFHVjs7Ozs7Ozs7Ozs7O2tEQUVSLDhEQUFDRTt3Q0FBSUMsV0FBVTtrREFDWCw0RUFBQ0U7NENBQU9GLFdBQVU7NENBQVdHLFNBQVNMO3NEQUFZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVTFGLEVBQUU7S0E5QldIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9ldmVudC92b3RlLmpzP2VmNzgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuXHJcblxyXG4vLyBleHBvcnQgY29uc3QgVm90ZUNvbXBvbmVudCA9ICgpID0+IHtcclxuLy8gICAgIGNvbnN0IFtzaG93Q2FyZHMsIHNldFNob3dDYXJkc10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbi8vICAgICBjb25zdCBbdm90ZUNvdW50MSwgc2V0Vm90ZUNvdW50MV0gPSB1c2VTdGF0ZSgwKTtcclxuLy8gICAgIGNvbnN0IFt2b3RlQ291bnQyLCBzZXRWb3RlQ291bnQyXSA9IHVzZVN0YXRlKDApO1xyXG4vLyAgICAgY29uc3QgW3ZvdGVDb3VudDMsIHNldFZvdGVDb3VudDNdID0gdXNlU3RhdGUoMCk7XHJcbi8vICAgICBjb25zdCBbdGltZXIsIHNldFRpbWVyXSA9IHVzZVN0YXRlKDEyMCk7IC8vIDIgbWludXRlcyBpbiBzZWNvbmRzXHJcblxyXG4vLyAgICAgdXNlRWZmZWN0KCgpID0+IHtcclxuLy8gICAgICAgICBsZXQgY291bnRkb3duID0gbnVsbDtcclxuLy8gICAgICAgICBpZiAoc2hvd0NhcmRzKSB7XHJcbi8vICAgICAgICAgICAgIGNvdW50ZG93biA9IHNldEludGVydmFsKCgpID0+IHtcclxuLy8gICAgICAgICAgICAgICAgIHNldFRpbWVyKHByZXZUaW1lciA9PiBwcmV2VGltZXIgLSAxKTtcclxuLy8gICAgICAgICAgICAgfSwgMTAwMCk7XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgICAgIHJldHVybiAoKSA9PiBjbGVhckludGVydmFsKGNvdW50ZG93bik7XHJcbi8vICAgICB9LCBbc2hvd0NhcmRzXSk7XHJcblxyXG4vLyAgICAgdXNlRWZmZWN0KCgpID0+IHtcclxuLy8gICAgICAgICBpZiAodGltZXIgPT09IDApIHtcclxuLy8gICAgICAgICAgICAgLy8gVm90aW5nIHRpbWUgaXMgb3ZlciwgZG8gc29tZXRoaW5nXHJcbi8vICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGltZXIpO1xyXG4vLyAgICAgICAgICAgICBzZXRTaG93Q2FyZHMoZmFsc2UpOyAvLyBIaWRlIHRoZSBjYXJkcyB3aGVuIHRpbWUgaXMgdXBcclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9LCBbdGltZXJdKTtcclxuXHJcbi8vICAgICBjb25zdCBoYW5kbGVCdXR0b25DbGljayA9ICgpID0+IHtcclxuLy8gICAgICAgICBzZXRTaG93Q2FyZHModHJ1ZSk7IC8vIFVwZGF0ZSBzaG93Q2FyZHMgc3RhdGUgdG8gdHJ1ZVxyXG4vLyAgICAgfTtcclxuXHJcblxyXG4vLyAgICAgY29uc3QgaGFuZGxlVm90ZTEgPSAoKSA9PiB7XHJcbi8vICAgICAgICAgc2V0Vm90ZUNvdW50MShwcmV2Q291bnQgPT4gcHJldkNvdW50ICsgMSk7XHJcbi8vICAgICB9O1xyXG5cclxuLy8gICAgIGNvbnN0IGhhbmRsZVZvdGUyID0gKCkgPT4ge1xyXG4vLyAgICAgICAgIHNldFZvdGVDb3VudDIocHJldkNvdW50ID0+IHByZXZDb3VudCArIDEpO1xyXG4vLyAgICAgfTtcclxuXHJcbi8vICAgICBjb25zdCBoYW5kbGVWb3RlMyA9ICgpID0+IHtcclxuLy8gICAgICAgICBzZXRWb3RlQ291bnQzKHByZXZDb3VudCA9PiBwcmV2Q291bnQgKyAxKTtcclxuLy8gICAgIH07XHJcblxyXG4vLyAgICAgcmV0dXJuIChcclxuLy8gICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBldmVudHMtY29udGFpbmVyXCI+XHJcbi8vICAgICAgICAgICAgIHshc2hvd0NhcmRzICYmIChcclxuLy8gICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlQnV0dG9uQ2xpY2t9PlN0YXJ0IFZvdGluZzwvYnV0dG9uPlxyXG4vLyAgICAgICAgICAgICApfVxyXG4vLyAgICAgICAgICAgICB7c2hvd0NhcmRzICYmIChcclxuXHJcbi8vICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBldmVudHMtY29udGFpbmVyIHZvdGUtbWFpblwiPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJldmVudHMtbGlzdFwiPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImV2ZW50XCI+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImV2ZW50LWNvbnRhaW5lcnhcIj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBjb250YWluZXIxMTIgZXZlbnQtZGV0YWlsc3gsIGV2ZW50LWRldGFpbHNlXCI+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3cmFwcGVyMTEyXCI+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYmFubmVyLWltYWdlXCI+IDwvZGl2PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxPiBUb3lvdGEgU3VwcmE8L2gxPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIDxiciAvPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC48L3A+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYnV0dG9uLXdyYXBwZXJcIj5cclxuXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGZpbGxcIiBvbkNsaWNrPXtoYW5kbGVWb3RlMX0+Vm90ZTwvYnV0dG9uPlxyXG5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIGNvbnRhaW5lcjExMiAgZXZlbnQtZGV0YWlsc3hcIj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIndyYXBwZXIxMTJcIj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJiYW5uZXItaW1hZ2VcIj4gPC9kaXY+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDE+IFRveW90YSBTdXByYTwvaDE+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgPGJyIC8+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LjwvcD5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJidXR0b24td3JhcHBlclwiPlxyXG5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gZmlsbFwiIG9uQ2xpY2s9e2hhbmRsZVZvdGUyfT5Wb3RlPC9idXR0b24+XHJcblxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgY29udGFpbmVyMTEyICBldmVudC1kZXRhaWxzeCBsaW5lLWVkaXRcIj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIndyYXBwZXIxMTJcIj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJiYW5uZXItaW1hZ2VcIj4gPC9kaXY+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDE+IFRveW90YSBTdXByYTwvaDE+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgPGJyIC8+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LjwvcD5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJidXR0b24td3JhcHBlclwiPlxyXG5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gZmlsbFwiIG9uQ2xpY2s9e2hhbmRsZVZvdGUzfT5Wb3RlPC9idXR0b24+XHJcblxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuLy8gICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICAgICAgICApfVxyXG4vLyAgICAgICAgICAgICB7c2hvd0NhcmRzICYmIDxkaXY+VGltZSBMZWZ0OiB7dGltZXJ9IHNlY29uZHM8L2Rpdj59XHJcbi8vICAgICAgICAgPC9kaXY+XHJcbi8vICAgICApO1xyXG4vLyB9O1xyXG4vLyA7XHJcbmV4cG9ydCBjb25zdCBWb3RlQ29tcG9uZW50ID0gKHsgdGl0bGUsIGRlc2NyaXB0aW9uLCBoYW5kbGVWb3RlIH0pID0+IHtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGV2ZW50cy1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgeyFzaG93Q2FyZHMgJiYgKFxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVCdXR0b25DbGlja30+U3RhcnQgVm90aW5nPC9idXR0b24+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIHtzaG93Q2FyZHMgJiYgKFxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGV2ZW50cy1jb250YWluZXIgdm90ZS1tYWluXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cImV2ZW50cy1saXN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXZlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXZlbnQtY29udGFpbmVyeFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyMTEyIGV2ZW50LWRldGFpbHN4IGV2ZW50LWRldGFpbHNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlcjExMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYW5uZXItaW1hZ2VcIj4gPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDE+e3RpdGxlfTwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57ZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b24td3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gZmlsbFwiIG9uQ2xpY2s9e2hhbmRsZVZvdGV9PlZvdGU8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiVm90ZUNvbXBvbmVudCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJoYW5kbGVWb3RlIiwiZGl2IiwiY2xhc3NOYW1lIiwic2hvd0NhcmRzIiwiYnV0dG9uIiwib25DbGljayIsImhhbmRsZUJ1dHRvbkNsaWNrIiwiaWQiLCJoMSIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/event/vote.js\n"));

/***/ })

});