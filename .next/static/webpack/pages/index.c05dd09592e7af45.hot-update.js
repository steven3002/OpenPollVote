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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   VoteComponent: function() { return /* binding */ VoteComponent; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst VoteComponent = (param)=>{\n    let { data } = param;\n    _s();\n    const [showCards, setShowCards] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [voteCount1, setVoteCount1] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [voteCount2, setVoteCount2] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [voteCount3, setVoteCount3] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [timer, setTimer] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(120); // 2 minutes in seconds\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        let countdown = null;\n        if (showCards) {\n            countdown = setInterval(()=>{\n                setTimer((prevTimer)=>prevTimer - 1);\n            }, 1000);\n        }\n        return ()=>clearInterval(countdown);\n    }, [\n        showCards\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (timer === 0) {\n            // Voting time is over, do something\n            clearInterval(timer);\n            setShowCards(false); // Hide the cards when time is up\n        }\n    }, [\n        timer\n    ]);\n    const handleButtonClick = ()=>{\n        setShowCards(true); // Update showCards state to true\n    };\n    const handleVote1 = ()=>{\n        setVoteCount1((prevCount)=>prevCount + 1);\n    };\n    const handleVote2 = ()=>{\n        setVoteCount2((prevCount)=>prevCount + 1);\n    };\n    const handleVote3 = ()=>{\n        setVoteCount3((prevCount)=>prevCount + 1);\n    };\n    const array = [\n        \"https://wc6twypwa5fhvlv5ytxjrk5wtjnriurwyiigkeay6mcx3vzvwr6a.arweave.net/sL07YfYHSnquvcTumKu2mlsUUjbCEGUQGPMFfdc1tHw\",\n        \"https://bafkreif7g76jre76i5mnjc2y63pidnfhfabdnik3naq2udvxjf2hhr3bui.ipfs.nftstorage.link/\",\n        \"https://zlyd4yjgrmfjnumk6cwncdx3hywxixqdxqyjslno4x5sam4c7bia.arweave.net/yvA-YSaLCpbRivCs0Q77Pi10XgO8MJktruX7IDOC-FA\"\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container events-container\",\n        children: [\n            !showCards && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleButtonClick,\n                children: \"Start Voting\"\n            }, void 0, false, {\n                fileName: \"C:\\\\polldart\\\\src\\\\event\\\\vote.js\",\n                lineNumber: 50,\n                columnNumber: 17\n            }, undefined),\n            showCards && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container events-container vote-main\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    id: \"events-list\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"event\",\n                        children: Object.keys(data).map((key)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"event-containerx\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"container112 event-detailsx event-detailse\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"wrapper112\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \"banner-image\",\n                                                    children: [\n                                                        \" \",\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                            src: array[key].imageUrl\n                                                        }, void 0, false, {\n                                                            fileName: \"C:\\\\polldart\\\\src\\\\event\\\\vote.js\",\n                                                            lineNumber: 62,\n                                                            columnNumber: 76\n                                                        }, undefined)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"C:\\\\polldart\\\\src\\\\event\\\\vote.js\",\n                                                    lineNumber: 62,\n                                                    columnNumber: 45\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                                    children: data[key].title\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\polldart\\\\src\\\\event\\\\vote.js\",\n                                                    lineNumber: 63,\n                                                    columnNumber: 45\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                    children: data[key].description\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\polldart\\\\src\\\\event\\\\vote.js\",\n                                                    lineNumber: 64,\n                                                    columnNumber: 45\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\polldart\\\\src\\\\event\\\\vote.js\",\n                                            lineNumber: 61,\n                                            columnNumber: 41\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"button-wrapper\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                className: \"btn fill\",\n                                                children: \"Vote\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\polldart\\\\src\\\\event\\\\vote.js\",\n                                                lineNumber: 67,\n                                                columnNumber: 45\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\polldart\\\\src\\\\event\\\\vote.js\",\n                                            lineNumber: 66,\n                                            columnNumber: 41\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\polldart\\\\src\\\\event\\\\vote.js\",\n                                    lineNumber: 60,\n                                    columnNumber: 37\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\polldart\\\\src\\\\event\\\\vote.js\",\n                                lineNumber: 59,\n                                columnNumber: 33\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"C:\\\\polldart\\\\src\\\\event\\\\vote.js\",\n                        lineNumber: 57,\n                        columnNumber: 25\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\polldart\\\\src\\\\event\\\\vote.js\",\n                    lineNumber: 55,\n                    columnNumber: 21\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\polldart\\\\src\\\\event\\\\vote.js\",\n                lineNumber: 54,\n                columnNumber: 17\n            }, undefined),\n            showCards && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    \"Time Left: \",\n                    timer,\n                    \" seconds\"\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\polldart\\\\src\\\\event\\\\vote.js\",\n                lineNumber: 77,\n                columnNumber: 27\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\polldart\\\\src\\\\event\\\\vote.js\",\n        lineNumber: 48,\n        columnNumber: 9\n    }, undefined);\n};\n_s(VoteComponent, \"L1YbKhTrFrG9GVp69UAfTxODPeQ=\");\n_c = VoteComponent;\n;\nvar _c;\n$RefreshReg$(_c, \"VoteComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZXZlbnQvdm90ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQTRDO0FBR3JDLE1BQU1FLGdCQUFnQjtRQUFDLEVBQUVDLElBQUksRUFBRTs7SUFDbEMsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdMLCtDQUFRQSxDQUFDO0lBQzNDLE1BQU0sQ0FBQ00sWUFBWUMsY0FBYyxHQUFHUCwrQ0FBUUEsQ0FBQztJQUM3QyxNQUFNLENBQUNRLFlBQVlDLGNBQWMsR0FBR1QsK0NBQVFBLENBQUM7SUFDN0MsTUFBTSxDQUFDVSxZQUFZQyxjQUFjLEdBQUdYLCtDQUFRQSxDQUFDO0lBQzdDLE1BQU0sQ0FBQ1ksT0FBT0MsU0FBUyxHQUFHYiwrQ0FBUUEsQ0FBQyxNQUFNLHVCQUF1QjtJQUVoRUMsZ0RBQVNBLENBQUM7UUFDTixJQUFJYSxZQUFZO1FBQ2hCLElBQUlWLFdBQVc7WUFDWFUsWUFBWUMsWUFBWTtnQkFDcEJGLFNBQVNHLENBQUFBLFlBQWFBLFlBQVk7WUFDdEMsR0FBRztRQUNQO1FBQ0EsT0FBTyxJQUFNQyxjQUFjSDtJQUMvQixHQUFHO1FBQUNWO0tBQVU7SUFFZEgsZ0RBQVNBLENBQUM7UUFDTixJQUFJVyxVQUFVLEdBQUc7WUFDYixvQ0FBb0M7WUFDcENLLGNBQWNMO1lBQ2RQLGFBQWEsUUFBUSxpQ0FBaUM7UUFDMUQ7SUFDSixHQUFHO1FBQUNPO0tBQU07SUFFVixNQUFNTSxvQkFBb0I7UUFDdEJiLGFBQWEsT0FBTyxpQ0FBaUM7SUFDekQ7SUFHQSxNQUFNYyxjQUFjO1FBQ2hCWixjQUFjYSxDQUFBQSxZQUFhQSxZQUFZO0lBQzNDO0lBRUEsTUFBTUMsY0FBYztRQUNoQlosY0FBY1csQ0FBQUEsWUFBYUEsWUFBWTtJQUMzQztJQUVBLE1BQU1FLGNBQWM7UUFDaEJYLGNBQWNTLENBQUFBLFlBQWFBLFlBQVk7SUFDM0M7SUFDQSxNQUFNRyxRQUFRO1FBQUM7UUFBd0g7UUFBNkY7S0FBdUg7SUFFM1YscUJBQ0ksOERBQUNDO1FBQUlDLFdBQVU7O1lBQ1YsQ0FBQ3JCLDJCQUNFLDhEQUFDc0I7Z0JBQU9DLFNBQVNUOzBCQUFtQjs7Ozs7O1lBRXZDZCwyQkFFRyw4REFBQ29CO2dCQUFJQyxXQUFVOzBCQUNYLDRFQUFDRDtvQkFBSUksSUFBRzs4QkFFSiw0RUFBQ0o7d0JBQUlDLFdBQVU7a0NBQ1ZJLE9BQU9DLElBQUksQ0FBQzNCLE1BQU00QixHQUFHLENBQUNDLENBQUFBLG9CQUNuQiw4REFBQ1I7Z0NBQUlDLFdBQVU7MENBQ1gsNEVBQUNEO29DQUFJQyxXQUFVOztzREFDWCw4REFBQ0Q7NENBQUlDLFdBQVU7OzhEQUNYLDhEQUFDRDtvREFBSUMsV0FBVTs7d0RBQWU7c0VBQUMsOERBQUNROzREQUFJQyxLQUFLWCxLQUFLLENBQUNTLElBQUksQ0FBQ0csUUFBUTs7Ozs7Ozs7Ozs7OzhEQUM1RCw4REFBQ0M7OERBQUlqQyxJQUFJLENBQUM2QixJQUFJLENBQUNLLEtBQUs7Ozs7Ozs4REFDcEIsOERBQUNDOzhEQUFHbkMsSUFBSSxDQUFDNkIsSUFBSSxDQUFDTyxXQUFXOzs7Ozs7Ozs7Ozs7c0RBRTdCLDhEQUFDZjs0Q0FBSUMsV0FBVTtzREFDWCw0RUFBQ0M7Z0RBQU9ELFdBQVU7MERBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFVN0RyQiwyQkFBYSw4REFBQ29COztvQkFBSTtvQkFBWVo7b0JBQU07Ozs7Ozs7Ozs7Ozs7QUFHakQsRUFBRTtHQTVFV1Y7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2V2ZW50L3ZvdGUuanM/ZWY3OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBWb3RlQ29tcG9uZW50ID0gKHsgZGF0YSB9KSA9PiB7XHJcbiAgICBjb25zdCBbc2hvd0NhcmRzLCBzZXRTaG93Q2FyZHNdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3ZvdGVDb3VudDEsIHNldFZvdGVDb3VudDFdID0gdXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBbdm90ZUNvdW50Miwgc2V0Vm90ZUNvdW50Ml0gPSB1c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IFt2b3RlQ291bnQzLCBzZXRWb3RlQ291bnQzXSA9IHVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgW3RpbWVyLCBzZXRUaW1lcl0gPSB1c2VTdGF0ZSgxMjApOyAvLyAyIG1pbnV0ZXMgaW4gc2Vjb25kc1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgbGV0IGNvdW50ZG93biA9IG51bGw7XHJcbiAgICAgICAgaWYgKHNob3dDYXJkcykge1xyXG4gICAgICAgICAgICBjb3VudGRvd24gPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lcihwcmV2VGltZXIgPT4gcHJldlRpbWVyIC0gMSk7XHJcbiAgICAgICAgICAgIH0sIDEwMDApO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbChjb3VudGRvd24pO1xyXG4gICAgfSwgW3Nob3dDYXJkc10pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKHRpbWVyID09PSAwKSB7XHJcbiAgICAgICAgICAgIC8vIFZvdGluZyB0aW1lIGlzIG92ZXIsIGRvIHNvbWV0aGluZ1xyXG4gICAgICAgICAgICBjbGVhckludGVydmFsKHRpbWVyKTtcclxuICAgICAgICAgICAgc2V0U2hvd0NhcmRzKGZhbHNlKTsgLy8gSGlkZSB0aGUgY2FyZHMgd2hlbiB0aW1lIGlzIHVwXHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3RpbWVyXSk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQnV0dG9uQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0U2hvd0NhcmRzKHRydWUpOyAvLyBVcGRhdGUgc2hvd0NhcmRzIHN0YXRlIHRvIHRydWVcclxuICAgIH07XHJcblxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVZvdGUxID0gKCkgPT4ge1xyXG4gICAgICAgIHNldFZvdGVDb3VudDEocHJldkNvdW50ID0+IHByZXZDb3VudCArIDEpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVWb3RlMiA9ICgpID0+IHtcclxuICAgICAgICBzZXRWb3RlQ291bnQyKHByZXZDb3VudCA9PiBwcmV2Q291bnQgKyAxKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlVm90ZTMgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0Vm90ZUNvdW50MyhwcmV2Q291bnQgPT4gcHJldkNvdW50ICsgMSk7XHJcbiAgICB9O1xyXG4gICAgY29uc3QgYXJyYXkgPSBbXCJodHRwczovL3djNnR3eXB3YTVmaHZsdjV5dHhqcms1d3RqbnJpdXJ3eWlpZ2tlYXk2bWN4M3Z6dndyNmEuYXJ3ZWF2ZS5uZXQvc0wwN1lmWUhTbnF1dmNUdW1LdTJtbHNVVWpiQ0VHVVFHUE1GZmRjMXRId1wiLCBcImh0dHBzOi8vYmFma3JlaWY3Zzc2anJlNzZpNW1uamMyeTYzcGlkbmZoZmFiZG5pazNuYXEydWR2eGpmMmhocjNidWkuaXBmcy5uZnRzdG9yYWdlLmxpbmsvXCIsIFwiaHR0cHM6Ly96bHlkNHlqZ3JtZmpudW1rNmN3bmNkeDNoeXd4aXhxZHhxeWpzbG5vNHg1c2FtNGM3YmlhLmFyd2VhdmUubmV0L3l2QS1ZU2FMQ3BiUml2Q3MwUTc3UGkxMFhnTzhNSmt0cnVYN0lET0MtRkFcIl1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGV2ZW50cy1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgeyFzaG93Q2FyZHMgJiYgKFxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVCdXR0b25DbGlja30+U3RhcnQgVm90aW5nPC9idXR0b24+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIHtzaG93Q2FyZHMgJiYgKFxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGV2ZW50cy1jb250YWluZXIgdm90ZS1tYWluXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cImV2ZW50cy1saXN0XCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImV2ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7T2JqZWN0LmtleXMoZGF0YSkubWFwKGtleSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJldmVudC1jb250YWluZXJ4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyMTEyIGV2ZW50LWRldGFpbHN4IGV2ZW50LWRldGFpbHNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXIxMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhbm5lci1pbWFnZVwiPiA8aW1nIHNyYz17YXJyYXlba2V5XS5pbWFnZVVybH0gLz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDE+e2RhdGFba2V5XS50aXRsZX08L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntkYXRhW2tleV0uZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbi13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gZmlsbFwiID5Wb3RlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIHtzaG93Q2FyZHMgJiYgPGRpdj5UaW1lIExlZnQ6IHt0aW1lcn0gc2Vjb25kczwvZGl2Pn1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcbjtcclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiVm90ZUNvbXBvbmVudCIsImRhdGEiLCJzaG93Q2FyZHMiLCJzZXRTaG93Q2FyZHMiLCJ2b3RlQ291bnQxIiwic2V0Vm90ZUNvdW50MSIsInZvdGVDb3VudDIiLCJzZXRWb3RlQ291bnQyIiwidm90ZUNvdW50MyIsInNldFZvdGVDb3VudDMiLCJ0aW1lciIsInNldFRpbWVyIiwiY291bnRkb3duIiwic2V0SW50ZXJ2YWwiLCJwcmV2VGltZXIiLCJjbGVhckludGVydmFsIiwiaGFuZGxlQnV0dG9uQ2xpY2siLCJoYW5kbGVWb3RlMSIsInByZXZDb3VudCIsImhhbmRsZVZvdGUyIiwiaGFuZGxlVm90ZTMiLCJhcnJheSIsImRpdiIsImNsYXNzTmFtZSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJpZCIsIk9iamVjdCIsImtleXMiLCJtYXAiLCJrZXkiLCJpbWciLCJzcmMiLCJpbWFnZVVybCIsImgxIiwidGl0bGUiLCJwIiwiZGVzY3JpcHRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/event/vote.js\n"));

/***/ })

});