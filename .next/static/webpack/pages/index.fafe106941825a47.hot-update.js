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

/***/ "./src/todoMain/todo.js":
/*!******************************!*\
  !*** ./src/todoMain/todo.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   TodoApp: function() { return /* binding */ TodoApp; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/layout */ \"./src/layout.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config */ \"./src/config.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst CONTRACT = _config__WEBPACK_IMPORTED_MODULE_3__.HelloNearContract;\nconst TodoApp = (param)=>{\n    let { todoData, handleDelete, handleCompleted, handleTaskInput } = param;\n    _s();\n    const { signedAccountId, wallet } = (0,_layout__WEBPACK_IMPORTED_MODULE_2__.useStore)();\n    const [greeting, setGreeting] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"loading...\");\n    const [loggedIn, setLoggedIn] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [showSpinner, setShowSpinner] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    let initialTasks = todoData.todoData;\n    const [inputValue, setInputValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [tasks, setTasks] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(initialTasks);\n    const addTask = (task)=>{\n        handleTaskInput(task);\n    };\n    const toggleTask = (index, state1)=>{\n        if (state1) {\n            alert(\"Task has been completed\");\n            return;\n        }\n        handleCompleted(index);\n    };\n    const removeTask = (index)=>{\n        handleDelete(index);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                rel: \"stylesheet\",\n                href: \"styles.css\"\n            }, void 0, false, {\n                fileName: \"C:\\\\todo_fr\\\\polldart\\\\src\\\\todoMain\\\\todo.js\",\n                lineNumber: 35,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"todo-app\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"app-title\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                children: \"Todo list\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\todo_fr\\\\polldart\\\\src\\\\todoMain\\\\todo.js\",\n                                lineNumber: 39,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                className: \"fa-solid fa-book-bookmark\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\todo_fr\\\\polldart\\\\src\\\\todoMain\\\\todo.js\",\n                                lineNumber: 40,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\todo_fr\\\\polldart\\\\src\\\\todoMain\\\\todo.js\",\n                        lineNumber: 38,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"row\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                id: \"input-box\",\n                                placeholder: \"Add your tasks\",\n                                value: inputValue,\n                                onChange: (e)=>setInputValue(e.target.value)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\todo_fr\\\\polldart\\\\src\\\\todoMain\\\\todo.js\",\n                                lineNumber: 43,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"button\",\n                                onClick: addTask,\n                                children: \"Add\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\todo_fr\\\\polldart\\\\src\\\\todoMain\\\\todo.js\",\n                                lineNumber: 50,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\todo_fr\\\\polldart\\\\src\\\\todoMain\\\\todo.js\",\n                        lineNumber: 42,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        id: \"list-container\",\n                        children: todoData.map((task)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: task[2] ? \"checked\" : \"\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        onClick: ()=>toggleTask(task[0], task[2]),\n                                        children: task[1]\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\todo_fr\\\\polldart\\\\src\\\\todoMain\\\\todo.js\",\n                                        lineNumber: 55,\n                                        columnNumber: 29\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        onClick: ()=>removeTask(task[0]),\n                                        children: \"x\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\todo_fr\\\\polldart\\\\src\\\\todoMain\\\\todo.js\",\n                                        lineNumber: 56,\n                                        columnNumber: 29\n                                    }, undefined)\n                                ]\n                            }, task[0], true, {\n                                fileName: \"C:\\\\todo_fr\\\\polldart\\\\src\\\\todoMain\\\\todo.js\",\n                                lineNumber: 54,\n                                columnNumber: 25\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"C:\\\\todo_fr\\\\polldart\\\\src\\\\todoMain\\\\todo.js\",\n                        lineNumber: 52,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\todo_fr\\\\polldart\\\\src\\\\todoMain\\\\todo.js\",\n                lineNumber: 37,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\todo_fr\\\\polldart\\\\src\\\\todoMain\\\\todo.js\",\n        lineNumber: 34,\n        columnNumber: 9\n    }, undefined);\n};\n_s(TodoApp, \"NLVtialBh9XVkhKgVdQMK0Tj4gM=\", false, function() {\n    return [\n        _layout__WEBPACK_IMPORTED_MODULE_2__.useStore\n    ];\n});\n_c = TodoApp;\nvar _c;\n$RefreshReg$(_c, \"TodoApp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdG9kb01haW4vdG9kby5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBbUQ7QUFDZjtBQUNVO0FBRTlDLE1BQU1LLFdBQVdELHNEQUFpQkE7QUFDM0IsTUFBTUUsVUFBVTtRQUFDLEVBQUVDLFFBQVEsRUFBRUMsWUFBWSxFQUFFQyxlQUFlLEVBQUVDLGVBQWUsRUFBRTs7SUFDaEYsTUFBTSxFQUFFQyxlQUFlLEVBQUVDLE1BQU0sRUFBRSxHQUFHVCxpREFBUUE7SUFDNUMsTUFBTSxDQUFDVSxVQUFVQyxZQUFZLEdBQUdiLCtDQUFRQSxDQUFDO0lBQ3pDLE1BQU0sQ0FBQ2MsVUFBVUMsWUFBWSxHQUFHZiwrQ0FBUUEsQ0FBQztJQUN6QyxNQUFNLENBQUNnQixhQUFhQyxlQUFlLEdBQUdqQiwrQ0FBUUEsQ0FBQztJQUcvQyxJQUFJa0IsZUFBZVosU0FBU0EsUUFBUTtJQUNwQyxNQUFNLENBQUNhLFlBQVlDLGNBQWMsR0FBR3BCLCtDQUFRQSxDQUFDO0lBQzdDLE1BQU0sQ0FBQ3FCLE9BQU9DLFNBQVMsR0FBR3RCLCtDQUFRQSxDQUFDa0I7SUFFbkMsTUFBTUssVUFBVSxDQUFDQztRQUNiZixnQkFBZ0JlO0lBQ3BCO0lBRUEsTUFBTUMsYUFBYSxDQUFDQyxPQUFPQztRQUN2QixJQUFJQSxRQUFRO1lBQ1JDLE1BQU07WUFDTjtRQUNKO1FBQ0FwQixnQkFBZ0JrQjtJQUNwQjtJQUVBLE1BQU1HLGFBQWEsQ0FBQ0g7UUFDaEJuQixhQUFhbUI7SUFDakI7SUFFQSxxQkFDSSw4REFBQ0k7UUFBSUMsV0FBVTs7MEJBQ1gsOERBQUNDO2dCQUFLQyxLQUFJO2dCQUFhQyxNQUFLOzs7Ozs7MEJBRTVCLDhEQUFDSjtnQkFBSUMsV0FBVTs7a0NBQ1gsOERBQUNEO3dCQUFJQyxXQUFVOzswQ0FDWCw4REFBQ0k7MENBQUc7Ozs7OzswQ0FDSiw4REFBQ0M7Z0NBQUVMLFdBQVU7Ozs7Ozs7Ozs7OztrQ0FFakIsOERBQUNEO3dCQUFJQyxXQUFVOzswQ0FDWCw4REFBQ007Z0NBQ0dDLE1BQUs7Z0NBQ0xDLElBQUc7Z0NBQ0hDLGFBQVk7Z0NBQ1pDLE9BQU90QjtnQ0FDUHVCLFVBQVUsQ0FBQ0MsSUFBTXZCLGNBQWN1QixFQUFFQyxNQUFNLENBQUNILEtBQUs7Ozs7OzswQ0FFakQsOERBQUNJO2dDQUFPZCxXQUFVO2dDQUFTZSxTQUFTdkI7MENBQVM7Ozs7Ozs7Ozs7OztrQ0FFakQsOERBQUN3Qjt3QkFBR1IsSUFBRztrQ0FDRmpDLFNBQVMwQyxHQUFHLENBQUMsQ0FBQ3hCLHFCQUNYLDhEQUFDeUI7Z0NBQWlCbEIsV0FBV1AsSUFBSSxDQUFDLEVBQUUsR0FBRyxZQUFZOztrREFDL0MsOERBQUNNO3dDQUFJZ0IsU0FBUyxJQUFNckIsV0FBV0QsSUFBSSxDQUFDLEVBQUUsRUFBRUEsSUFBSSxDQUFDLEVBQUU7a0RBQUlBLElBQUksQ0FBQyxFQUFFOzs7Ozs7a0RBQzFELDhEQUFDMEI7d0NBQUtKLFNBQVMsSUFBTWpCLFdBQVdMLElBQUksQ0FBQyxFQUFFO2tEQUFHOzs7Ozs7OytCQUZyQ0EsSUFBSSxDQUFDLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTeEMsRUFBRTtHQXpEV25COztRQUMyQkgsNkNBQVFBOzs7S0FEbkNHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy90b2RvTWFpbi90b2RvLmpzPzJmZTMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVN0b3JlIH0gZnJvbSAnQC9sYXlvdXQnO1xyXG5pbXBvcnQgeyBIZWxsb05lYXJDb250cmFjdCB9IGZyb20gJy4uL2NvbmZpZyc7XHJcblxyXG5jb25zdCBDT05UUkFDVCA9IEhlbGxvTmVhckNvbnRyYWN0O1xyXG5leHBvcnQgY29uc3QgVG9kb0FwcCA9ICh7IHRvZG9EYXRhLCBoYW5kbGVEZWxldGUsIGhhbmRsZUNvbXBsZXRlZCwgaGFuZGxlVGFza0lucHV0IH0pID0+IHtcclxuICAgIGNvbnN0IHsgc2lnbmVkQWNjb3VudElkLCB3YWxsZXQgfSA9IHVzZVN0b3JlKCk7XHJcbiAgICBjb25zdCBbZ3JlZXRpbmcsIHNldEdyZWV0aW5nXSA9IHVzZVN0YXRlKCdsb2FkaW5nLi4uJyk7XHJcbiAgICBjb25zdCBbbG9nZ2VkSW4sIHNldExvZ2dlZEluXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtzaG93U3Bpbm5lciwgc2V0U2hvd1NwaW5uZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuXHJcbiAgICBsZXQgaW5pdGlhbFRhc2tzID0gdG9kb0RhdGEudG9kb0RhdGE7XHJcbiAgICBjb25zdCBbaW5wdXRWYWx1ZSwgc2V0SW5wdXRWYWx1ZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbdGFza3MsIHNldFRhc2tzXSA9IHVzZVN0YXRlKGluaXRpYWxUYXNrcyk7XHJcblxyXG4gICAgY29uc3QgYWRkVGFzayA9ICh0YXNrKSA9PiB7XHJcbiAgICAgICAgaGFuZGxlVGFza0lucHV0KHRhc2spXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHRvZ2dsZVRhc2sgPSAoaW5kZXgsIHN0YXRlMSkgPT4ge1xyXG4gICAgICAgIGlmIChzdGF0ZTEpIHtcclxuICAgICAgICAgICAgYWxlcnQoXCJUYXNrIGhhcyBiZWVuIGNvbXBsZXRlZFwiKVxyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICAgICAgaGFuZGxlQ29tcGxldGVkKGluZGV4KVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCByZW1vdmVUYXNrID0gKGluZGV4KSA9PiB7XHJcbiAgICAgICAgaGFuZGxlRGVsZXRlKGluZGV4KVxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwic3R5bGVzLmNzc1wiIC8+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvZG8tYXBwXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFwcC10aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMj5Ub2RvIGxpc3Q8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhLXNvbGlkIGZhLWJvb2stYm9va21hcmtcIj48L2k+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJpbnB1dC1ib3hcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkFkZCB5b3VyIHRhc2tzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2lucHV0VmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0SW5wdXRWYWx1ZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYnV0dG9uJyBvbkNsaWNrPXthZGRUYXNrfT5BZGQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPHVsIGlkPVwibGlzdC1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICB7dG9kb0RhdGEubWFwKCh0YXNrKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e3Rhc2tbMF19IGNsYXNzTmFtZT17dGFza1syXSA/ICdjaGVja2VkJyA6ICcnfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4gdG9nZ2xlVGFzayh0YXNrWzBdLCB0YXNrWzJdKX0+e3Rhc2tbMV19PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKSA9PiByZW1vdmVUYXNrKHRhc2tbMF0pfT54PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VTdG9yZSIsIkhlbGxvTmVhckNvbnRyYWN0IiwiQ09OVFJBQ1QiLCJUb2RvQXBwIiwidG9kb0RhdGEiLCJoYW5kbGVEZWxldGUiLCJoYW5kbGVDb21wbGV0ZWQiLCJoYW5kbGVUYXNrSW5wdXQiLCJzaWduZWRBY2NvdW50SWQiLCJ3YWxsZXQiLCJncmVldGluZyIsInNldEdyZWV0aW5nIiwibG9nZ2VkSW4iLCJzZXRMb2dnZWRJbiIsInNob3dTcGlubmVyIiwic2V0U2hvd1NwaW5uZXIiLCJpbml0aWFsVGFza3MiLCJpbnB1dFZhbHVlIiwic2V0SW5wdXRWYWx1ZSIsInRhc2tzIiwic2V0VGFza3MiLCJhZGRUYXNrIiwidGFzayIsInRvZ2dsZVRhc2siLCJpbmRleCIsInN0YXRlMSIsImFsZXJ0IiwicmVtb3ZlVGFzayIsImRpdiIsImNsYXNzTmFtZSIsImxpbmsiLCJyZWwiLCJocmVmIiwiaDIiLCJpIiwiaW5wdXQiLCJ0eXBlIiwiaWQiLCJwbGFjZWhvbGRlciIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwiYnV0dG9uIiwib25DbGljayIsInVsIiwibWFwIiwibGkiLCJzcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/todoMain/todo.js\n"));

/***/ })

});