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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   VoteComponent: function() { return /* binding */ VoteComponent; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst VoteComponent = (param)=>{\n    let { title, description, handleVote } = param;\n    _s();\n    const [showCards, setShowCards] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [voteCount1, setVoteCount1] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [voteCount2, setVoteCount2] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [voteCount3, setVoteCount3] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [timer, setTimer] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(120); // 2 minutes in seconds\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        let countdown = null;\n        if (showCards) {\n            countdown = setInterval(()=>{\n                setTimer((prevTimer)=>prevTimer - 1);\n            }, 1000);\n        }\n        return ()=>clearInterval(countdown);\n    }, [\n        showCards\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (timer === 0) {\n            // Voting time is over, do something\n            clearInterval(timer);\n            setShowCards(false); // Hide the cards when time is up\n        }\n    }, [\n        timer\n    ]);\n    const handleButtonClick = ()=>{\n        setShowCards(true); // Update showCards state to true\n    };\n    const handleVote1 = ()=>{\n        setVoteCount1((prevCount)=>prevCount + 1);\n    };\n    const handleVote2 = ()=>{\n        setVoteCount2((prevCount)=>prevCount + 1);\n    };\n    const handleVote3 = ()=>{\n        setVoteCount3((prevCount)=>prevCount + 1);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container events-container\",\n        children: [\n            !showCards && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleButtonClick,\n                children: \"Start Voting\"\n            }, void 0, false, {\n                fileName: \"C:\\\\polldart\\\\src\\\\event\\\\vote.js\",\n                lineNumber: 49,\n                columnNumber: 17\n            }, undefined),\n            showCards && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container events-container vote-main\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    id: \"events-list\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"event\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"event-containerx\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"container112 event-detailsx event-detailse\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"wrapper112\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"banner-image\",\n                                                children: \" \"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\polldart\\\\src\\\\event\\\\vote.js\",\n                                                lineNumber: 59,\n                                                columnNumber: 41\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                                children: title\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\polldart\\\\src\\\\event\\\\vote.js\",\n                                                lineNumber: 60,\n                                                columnNumber: 41\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                children: description\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\polldart\\\\src\\\\event\\\\vote.js\",\n                                                lineNumber: 61,\n                                                columnNumber: 41\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\polldart\\\\src\\\\event\\\\vote.js\",\n                                        lineNumber: 58,\n                                        columnNumber: 37\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"button-wrapper\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            className: \"btn fill\",\n                                            onClick: handleVote,\n                                            children: \"Vote\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\polldart\\\\src\\\\event\\\\vote.js\",\n                                            lineNumber: 64,\n                                            columnNumber: 41\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\polldart\\\\src\\\\event\\\\vote.js\",\n                                        lineNumber: 63,\n                                        columnNumber: 37\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\polldart\\\\src\\\\event\\\\vote.js\",\n                                lineNumber: 57,\n                                columnNumber: 33\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\polldart\\\\src\\\\event\\\\vote.js\",\n                            lineNumber: 56,\n                            columnNumber: 29\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\polldart\\\\src\\\\event\\\\vote.js\",\n                        lineNumber: 55,\n                        columnNumber: 25\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\polldart\\\\src\\\\event\\\\vote.js\",\n                    lineNumber: 54,\n                    columnNumber: 21\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\polldart\\\\src\\\\event\\\\vote.js\",\n                lineNumber: 53,\n                columnNumber: 17\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\polldart\\\\src\\\\event\\\\vote.js\",\n        lineNumber: 47,\n        columnNumber: 9\n    }, undefined);\n};\n_s(VoteComponent, \"L1YbKhTrFrG9GVp69UAfTxODPeQ=\");\n_c = VoteComponent;\n;\nvar _c;\n$RefreshReg$(_c, \"VoteComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZXZlbnQvdm90ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQTRDO0FBR3JDLE1BQU1FLGdCQUFnQjtRQUFDLEVBQUVDLEtBQUssRUFBRUMsV0FBVyxFQUFFQyxVQUFVLEVBQUU7O0lBQzVELE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHUCwrQ0FBUUEsQ0FBQztJQUMzQyxNQUFNLENBQUNRLFlBQVlDLGNBQWMsR0FBR1QsK0NBQVFBLENBQUM7SUFDN0MsTUFBTSxDQUFDVSxZQUFZQyxjQUFjLEdBQUdYLCtDQUFRQSxDQUFDO0lBQzdDLE1BQU0sQ0FBQ1ksWUFBWUMsY0FBYyxHQUFHYiwrQ0FBUUEsQ0FBQztJQUM3QyxNQUFNLENBQUNjLE9BQU9DLFNBQVMsR0FBR2YsK0NBQVFBLENBQUMsTUFBTSx1QkFBdUI7SUFFaEVDLGdEQUFTQSxDQUFDO1FBQ04sSUFBSWUsWUFBWTtRQUNoQixJQUFJVixXQUFXO1lBQ1hVLFlBQVlDLFlBQVk7Z0JBQ3BCRixTQUFTRyxDQUFBQSxZQUFhQSxZQUFZO1lBQ3RDLEdBQUc7UUFDUDtRQUNBLE9BQU8sSUFBTUMsY0FBY0g7SUFDL0IsR0FBRztRQUFDVjtLQUFVO0lBRWRMLGdEQUFTQSxDQUFDO1FBQ04sSUFBSWEsVUFBVSxHQUFHO1lBQ2Isb0NBQW9DO1lBQ3BDSyxjQUFjTDtZQUNkUCxhQUFhLFFBQVEsaUNBQWlDO1FBQzFEO0lBQ0osR0FBRztRQUFDTztLQUFNO0lBRVYsTUFBTU0sb0JBQW9CO1FBQ3RCYixhQUFhLE9BQU8saUNBQWlDO0lBQ3pEO0lBR0EsTUFBTWMsY0FBYztRQUNoQlosY0FBY2EsQ0FBQUEsWUFBYUEsWUFBWTtJQUMzQztJQUVBLE1BQU1DLGNBQWM7UUFDaEJaLGNBQWNXLENBQUFBLFlBQWFBLFlBQVk7SUFDM0M7SUFFQSxNQUFNRSxjQUFjO1FBQ2hCWCxjQUFjUyxDQUFBQSxZQUFhQSxZQUFZO0lBQzNDO0lBRUEscUJBQ0ksOERBQUNHO1FBQUlDLFdBQVU7O1lBQ1YsQ0FBQ3BCLDJCQUNFLDhEQUFDcUI7Z0JBQU9DLFNBQVNSOzBCQUFtQjs7Ozs7O1lBRXZDZCwyQkFFRyw4REFBQ21CO2dCQUFJQyxXQUFVOzBCQUNYLDRFQUFDRDtvQkFBSUksSUFBRzs4QkFDSiw0RUFBQ0o7d0JBQUlDLFdBQVU7a0NBQ1gsNEVBQUNEOzRCQUFJQyxXQUFVO3NDQUNYLDRFQUFDRDtnQ0FBSUMsV0FBVTs7a0RBQ1gsOERBQUNEO3dDQUFJQyxXQUFVOzswREFDWCw4REFBQ0Q7Z0RBQUlDLFdBQVU7MERBQWU7Ozs7OzswREFDOUIsOERBQUNJOzBEQUFJM0I7Ozs7OzswREFDTCw4REFBQzRCOzBEQUFHM0I7Ozs7Ozs7Ozs7OztrREFFUiw4REFBQ3FCO3dDQUFJQyxXQUFVO2tEQUNYLDRFQUFDQzs0Q0FBT0QsV0FBVTs0Q0FBV0UsU0FBU3ZCO3NEQUFZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVTFGLEVBQUU7R0F0RVdIO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9ldmVudC92b3RlLmpzP2VmNzgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuXHJcblxyXG5leHBvcnQgY29uc3QgVm90ZUNvbXBvbmVudCA9ICh7IHRpdGxlLCBkZXNjcmlwdGlvbiwgaGFuZGxlVm90ZSB9KSA9PiB7XHJcbiAgICBjb25zdCBbc2hvd0NhcmRzLCBzZXRTaG93Q2FyZHNdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3ZvdGVDb3VudDEsIHNldFZvdGVDb3VudDFdID0gdXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBbdm90ZUNvdW50Miwgc2V0Vm90ZUNvdW50Ml0gPSB1c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IFt2b3RlQ291bnQzLCBzZXRWb3RlQ291bnQzXSA9IHVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgW3RpbWVyLCBzZXRUaW1lcl0gPSB1c2VTdGF0ZSgxMjApOyAvLyAyIG1pbnV0ZXMgaW4gc2Vjb25kc1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgbGV0IGNvdW50ZG93biA9IG51bGw7XHJcbiAgICAgICAgaWYgKHNob3dDYXJkcykge1xyXG4gICAgICAgICAgICBjb3VudGRvd24gPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lcihwcmV2VGltZXIgPT4gcHJldlRpbWVyIC0gMSk7XHJcbiAgICAgICAgICAgIH0sIDEwMDApO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbChjb3VudGRvd24pO1xyXG4gICAgfSwgW3Nob3dDYXJkc10pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKHRpbWVyID09PSAwKSB7XHJcbiAgICAgICAgICAgIC8vIFZvdGluZyB0aW1lIGlzIG92ZXIsIGRvIHNvbWV0aGluZ1xyXG4gICAgICAgICAgICBjbGVhckludGVydmFsKHRpbWVyKTtcclxuICAgICAgICAgICAgc2V0U2hvd0NhcmRzKGZhbHNlKTsgLy8gSGlkZSB0aGUgY2FyZHMgd2hlbiB0aW1lIGlzIHVwXHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3RpbWVyXSk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQnV0dG9uQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0U2hvd0NhcmRzKHRydWUpOyAvLyBVcGRhdGUgc2hvd0NhcmRzIHN0YXRlIHRvIHRydWVcclxuICAgIH07XHJcblxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVZvdGUxID0gKCkgPT4ge1xyXG4gICAgICAgIHNldFZvdGVDb3VudDEocHJldkNvdW50ID0+IHByZXZDb3VudCArIDEpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVWb3RlMiA9ICgpID0+IHtcclxuICAgICAgICBzZXRWb3RlQ291bnQyKHByZXZDb3VudCA9PiBwcmV2Q291bnQgKyAxKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlVm90ZTMgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0Vm90ZUNvdW50MyhwcmV2Q291bnQgPT4gcHJldkNvdW50ICsgMSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgZXZlbnRzLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICB7IXNob3dDYXJkcyAmJiAoXHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUJ1dHRvbkNsaWNrfT5TdGFydCBWb3Rpbmc8L2J1dHRvbj5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAge3Nob3dDYXJkcyAmJiAoXHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgZXZlbnRzLWNvbnRhaW5lciB2b3RlLW1haW5cIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiZXZlbnRzLWxpc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJldmVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJldmVudC1jb250YWluZXJ4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIxMTIgZXZlbnQtZGV0YWlsc3ggZXZlbnQtZGV0YWlsc2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyMTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhbm5lci1pbWFnZVwiPiA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMT57dGl0bGV9PC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntkZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbi13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBmaWxsXCIgb25DbGljaz17aGFuZGxlVm90ZX0+Vm90ZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuOyJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIlZvdGVDb21wb25lbnQiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiaGFuZGxlVm90ZSIsInNob3dDYXJkcyIsInNldFNob3dDYXJkcyIsInZvdGVDb3VudDEiLCJzZXRWb3RlQ291bnQxIiwidm90ZUNvdW50MiIsInNldFZvdGVDb3VudDIiLCJ2b3RlQ291bnQzIiwic2V0Vm90ZUNvdW50MyIsInRpbWVyIiwic2V0VGltZXIiLCJjb3VudGRvd24iLCJzZXRJbnRlcnZhbCIsInByZXZUaW1lciIsImNsZWFySW50ZXJ2YWwiLCJoYW5kbGVCdXR0b25DbGljayIsImhhbmRsZVZvdGUxIiwicHJldkNvdW50IiwiaGFuZGxlVm90ZTIiLCJoYW5kbGVWb3RlMyIsImRpdiIsImNsYXNzTmFtZSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJpZCIsImgxIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/event/vote.js\n"));

/***/ })

});