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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   VoteComponent: function() { return /* binding */ VoteComponent; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst VoteComponent = (param)=>{\n    let { data } = param;\n    _s();\n    const [showCards, setShowCards] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [voteCount1, setVoteCount1] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [voteCount2, setVoteCount2] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [voteCount3, setVoteCount3] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [timer, setTimer] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(120); // 2 minutes in seconds\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        let countdown = null;\n        if (showCards) {\n            countdown = setInterval(()=>{\n                setTimer((prevTimer)=>prevTimer - 1);\n            }, 1000);\n        }\n        return ()=>clearInterval(countdown);\n    }, [\n        showCards\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (timer === 0) {\n            // Voting time is over, do something\n            clearInterval(timer);\n            setShowCards(false); // Hide the cards when time is up\n        }\n    }, [\n        timer\n    ]);\n    const handleButtonClick = ()=>{\n        setShowCards(true); // Update showCards state to true\n    };\n    const handleVote1 = ()=>{\n        setVoteCount1((prevCount)=>prevCount + 1);\n    };\n    const handleVote2 = ()=>{\n        setVoteCount2((prevCount)=>prevCount + 1);\n    };\n    const handleVote3 = ()=>{\n        setVoteCount3((prevCount)=>prevCount + 1);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container events-container\",\n        children: [\n            !showCards && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleButtonClick,\n                children: \"Start Voting\"\n            }, void 0, false, {\n                fileName: \"C:\\\\polldart\\\\src\\\\event\\\\vote.js\",\n                lineNumber: 49,\n                columnNumber: 17\n            }, undefined),\n            showCards && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container events-container vote-main\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    id: \"events-list\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"event\",\n                        children: Object.keys(data).map((key)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"event-containerx\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"container112 event-detailsx event-detailse\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"wrapper112\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \"banner-image\",\n                                                    children: \" \"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\polldart\\\\src\\\\event\\\\vote.js\",\n                                                    lineNumber: 61,\n                                                    columnNumber: 45\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                                    children: data[key].title\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\polldart\\\\src\\\\event\\\\vote.js\",\n                                                    lineNumber: 62,\n                                                    columnNumber: 45\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                    children: data[key].description\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\polldart\\\\src\\\\event\\\\vote.js\",\n                                                    lineNumber: 63,\n                                                    columnNumber: 45\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\polldart\\\\src\\\\event\\\\vote.js\",\n                                            lineNumber: 60,\n                                            columnNumber: 41\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"button-wrapper\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                className: \"btn fill\",\n                                                children: \"Vote\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\polldart\\\\src\\\\event\\\\vote.js\",\n                                                lineNumber: 66,\n                                                columnNumber: 45\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\polldart\\\\src\\\\event\\\\vote.js\",\n                                            lineNumber: 65,\n                                            columnNumber: 41\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\polldart\\\\src\\\\event\\\\vote.js\",\n                                    lineNumber: 59,\n                                    columnNumber: 37\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\polldart\\\\src\\\\event\\\\vote.js\",\n                                lineNumber: 58,\n                                columnNumber: 33\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"C:\\\\polldart\\\\src\\\\event\\\\vote.js\",\n                        lineNumber: 56,\n                        columnNumber: 25\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\polldart\\\\src\\\\event\\\\vote.js\",\n                    lineNumber: 54,\n                    columnNumber: 21\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\polldart\\\\src\\\\event\\\\vote.js\",\n                lineNumber: 53,\n                columnNumber: 17\n            }, undefined),\n            showCards && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    \"Time Left: \",\n                    timer,\n                    \" seconds\"\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\polldart\\\\src\\\\event\\\\vote.js\",\n                lineNumber: 76,\n                columnNumber: 27\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\polldart\\\\src\\\\event\\\\vote.js\",\n        lineNumber: 47,\n        columnNumber: 9\n    }, undefined);\n};\n_s(VoteComponent, \"L1YbKhTrFrG9GVp69UAfTxODPeQ=\");\n_c = VoteComponent;\n;\nvar _c;\n$RefreshReg$(_c, \"VoteComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZXZlbnQvdm90ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQTRDO0FBR3JDLE1BQU1FLGdCQUFnQjtRQUFDLEVBQUVDLElBQUksRUFBRTs7SUFDbEMsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdMLCtDQUFRQSxDQUFDO0lBQzNDLE1BQU0sQ0FBQ00sWUFBWUMsY0FBYyxHQUFHUCwrQ0FBUUEsQ0FBQztJQUM3QyxNQUFNLENBQUNRLFlBQVlDLGNBQWMsR0FBR1QsK0NBQVFBLENBQUM7SUFDN0MsTUFBTSxDQUFDVSxZQUFZQyxjQUFjLEdBQUdYLCtDQUFRQSxDQUFDO0lBQzdDLE1BQU0sQ0FBQ1ksT0FBT0MsU0FBUyxHQUFHYiwrQ0FBUUEsQ0FBQyxNQUFNLHVCQUF1QjtJQUVoRUMsZ0RBQVNBLENBQUM7UUFDTixJQUFJYSxZQUFZO1FBQ2hCLElBQUlWLFdBQVc7WUFDWFUsWUFBWUMsWUFBWTtnQkFDcEJGLFNBQVNHLENBQUFBLFlBQWFBLFlBQVk7WUFDdEMsR0FBRztRQUNQO1FBQ0EsT0FBTyxJQUFNQyxjQUFjSDtJQUMvQixHQUFHO1FBQUNWO0tBQVU7SUFFZEgsZ0RBQVNBLENBQUM7UUFDTixJQUFJVyxVQUFVLEdBQUc7WUFDYixvQ0FBb0M7WUFDcENLLGNBQWNMO1lBQ2RQLGFBQWEsUUFBUSxpQ0FBaUM7UUFDMUQ7SUFDSixHQUFHO1FBQUNPO0tBQU07SUFFVixNQUFNTSxvQkFBb0I7UUFDdEJiLGFBQWEsT0FBTyxpQ0FBaUM7SUFDekQ7SUFHQSxNQUFNYyxjQUFjO1FBQ2hCWixjQUFjYSxDQUFBQSxZQUFhQSxZQUFZO0lBQzNDO0lBRUEsTUFBTUMsY0FBYztRQUNoQlosY0FBY1csQ0FBQUEsWUFBYUEsWUFBWTtJQUMzQztJQUVBLE1BQU1FLGNBQWM7UUFDaEJYLGNBQWNTLENBQUFBLFlBQWFBLFlBQVk7SUFDM0M7SUFFQSxxQkFDSSw4REFBQ0c7UUFBSUMsV0FBVTs7WUFDVixDQUFDcEIsMkJBQ0UsOERBQUNxQjtnQkFBT0MsU0FBU1I7MEJBQW1COzs7Ozs7WUFFdkNkLDJCQUVHLDhEQUFDbUI7Z0JBQUlDLFdBQVU7MEJBQ1gsNEVBQUNEO29CQUFJSSxJQUFHOzhCQUVKLDRFQUFDSjt3QkFBSUMsV0FBVTtrQ0FDVkksT0FBT0MsSUFBSSxDQUFDMUIsTUFBTTJCLEdBQUcsQ0FBQ0MsQ0FBQUEsb0JBQ25CLDhEQUFDUjtnQ0FBSUMsV0FBVTswQ0FDWCw0RUFBQ0Q7b0NBQUlDLFdBQVU7O3NEQUNYLDhEQUFDRDs0Q0FBSUMsV0FBVTs7OERBQ1gsOERBQUNEO29EQUFJQyxXQUFVOzhEQUFlOzs7Ozs7OERBQzlCLDhEQUFDUTs4REFBSTdCLElBQUksQ0FBQzRCLElBQUksQ0FBQ0UsS0FBSzs7Ozs7OzhEQUNwQiw4REFBQ0M7OERBQUcvQixJQUFJLENBQUM0QixJQUFJLENBQUNJLFdBQVc7Ozs7Ozs7Ozs7OztzREFFN0IsOERBQUNaOzRDQUFJQyxXQUFVO3NEQUNYLDRFQUFDQztnREFBT0QsV0FBVTswREFBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVU3RHBCLDJCQUFhLDhEQUFDbUI7O29CQUFJO29CQUFZWDtvQkFBTTs7Ozs7Ozs7Ozs7OztBQUdqRCxFQUFFO0dBM0VXVjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvZXZlbnQvdm90ZS5qcz9lZjc4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IFZvdGVDb21wb25lbnQgPSAoeyBkYXRhIH0pID0+IHtcclxuICAgIGNvbnN0IFtzaG93Q2FyZHMsIHNldFNob3dDYXJkc10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbdm90ZUNvdW50MSwgc2V0Vm90ZUNvdW50MV0gPSB1c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IFt2b3RlQ291bnQyLCBzZXRWb3RlQ291bnQyXSA9IHVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgW3ZvdGVDb3VudDMsIHNldFZvdGVDb3VudDNdID0gdXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBbdGltZXIsIHNldFRpbWVyXSA9IHVzZVN0YXRlKDEyMCk7IC8vIDIgbWludXRlcyBpbiBzZWNvbmRzXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBsZXQgY291bnRkb3duID0gbnVsbDtcclxuICAgICAgICBpZiAoc2hvd0NhcmRzKSB7XHJcbiAgICAgICAgICAgIGNvdW50ZG93biA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHNldFRpbWVyKHByZXZUaW1lciA9PiBwcmV2VGltZXIgLSAxKTtcclxuICAgICAgICAgICAgfSwgMTAwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAoKSA9PiBjbGVhckludGVydmFsKGNvdW50ZG93bik7XHJcbiAgICB9LCBbc2hvd0NhcmRzXSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAodGltZXIgPT09IDApIHtcclxuICAgICAgICAgICAgLy8gVm90aW5nIHRpbWUgaXMgb3ZlciwgZG8gc29tZXRoaW5nXHJcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGltZXIpO1xyXG4gICAgICAgICAgICBzZXRTaG93Q2FyZHMoZmFsc2UpOyAvLyBIaWRlIHRoZSBjYXJkcyB3aGVuIHRpbWUgaXMgdXBcclxuICAgICAgICB9XHJcbiAgICB9LCBbdGltZXJdKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVCdXR0b25DbGljayA9ICgpID0+IHtcclxuICAgICAgICBzZXRTaG93Q2FyZHModHJ1ZSk7IC8vIFVwZGF0ZSBzaG93Q2FyZHMgc3RhdGUgdG8gdHJ1ZVxyXG4gICAgfTtcclxuXHJcblxyXG4gICAgY29uc3QgaGFuZGxlVm90ZTEgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0Vm90ZUNvdW50MShwcmV2Q291bnQgPT4gcHJldkNvdW50ICsgMSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZVZvdGUyID0gKCkgPT4ge1xyXG4gICAgICAgIHNldFZvdGVDb3VudDIocHJldkNvdW50ID0+IHByZXZDb3VudCArIDEpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVWb3RlMyA9ICgpID0+IHtcclxuICAgICAgICBzZXRWb3RlQ291bnQzKHByZXZDb3VudCA9PiBwcmV2Q291bnQgKyAxKTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBldmVudHMtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIHshc2hvd0NhcmRzICYmIChcclxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlQnV0dG9uQ2xpY2t9PlN0YXJ0IFZvdGluZzwvYnV0dG9uPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICB7c2hvd0NhcmRzICYmIChcclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBldmVudHMtY29udGFpbmVyIHZvdGUtbWFpblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJldmVudHMtbGlzdFwiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJldmVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge09iamVjdC5rZXlzKGRhdGEpLm1hcChrZXkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXZlbnQtY29udGFpbmVyeFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lcjExMiBldmVudC1kZXRhaWxzeCBldmVudC1kZXRhaWxzZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyMTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYW5uZXItaW1hZ2VcIj4gPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxPntkYXRhW2tleV0udGl0bGV9PC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57ZGF0YVtrZXldLmRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b24td3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGZpbGxcIiA+Vm90ZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICB7c2hvd0NhcmRzICYmIDxkaXY+VGltZSBMZWZ0OiB7dGltZXJ9IHNlY29uZHM8L2Rpdj59XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG47XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIlZvdGVDb21wb25lbnQiLCJkYXRhIiwic2hvd0NhcmRzIiwic2V0U2hvd0NhcmRzIiwidm90ZUNvdW50MSIsInNldFZvdGVDb3VudDEiLCJ2b3RlQ291bnQyIiwic2V0Vm90ZUNvdW50MiIsInZvdGVDb3VudDMiLCJzZXRWb3RlQ291bnQzIiwidGltZXIiLCJzZXRUaW1lciIsImNvdW50ZG93biIsInNldEludGVydmFsIiwicHJldlRpbWVyIiwiY2xlYXJJbnRlcnZhbCIsImhhbmRsZUJ1dHRvbkNsaWNrIiwiaGFuZGxlVm90ZTEiLCJwcmV2Q291bnQiLCJoYW5kbGVWb3RlMiIsImhhbmRsZVZvdGUzIiwiZGl2IiwiY2xhc3NOYW1lIiwiYnV0dG9uIiwib25DbGljayIsImlkIiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsImtleSIsImgxIiwidGl0bGUiLCJwIiwiZGVzY3JpcHRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/event/vote.js\n"));

/***/ })

});