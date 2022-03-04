"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/article";
exports.ids = ["pages/article"];
exports.modules = {

/***/ "./pages/article.jsx":
/*!***************************!*\
  !*** ./pages/article.jsx ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/Users/koushikdey/Desktop/Intern_Project/devhub/devhub-social-mern-api/forum/pages/article.jsx\";\n\n\n\n\nconst Article = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.withRouter)(props => {\n  const {\n    0: article,\n    1: setArticle\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"\");\n  const {\n    0: failure,\n    1: setFailure\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"\");\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    // console.log(props.router.query.id);\n    const id = props.router.query.id;\n\n    if (id) {\n      axios__WEBPACK_IMPORTED_MODULE_1___default().get(`/api/article-data?id=${props.router.query.id}`).then(res => {\n        const data = res.data;\n        console.log(data[0]);\n\n        if (data[0]) {\n          return setArticle(data[0]);\n        } else {\n          setFailure(\"No article Found with that id\");\n        }\n      });\n    } else {\n      location.href = \"/\";\n    }\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n    style: {\n      color: \"#33539E\"\n    },\n    children: [!article && !failure && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n      children: \"Loading Article ...\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 32\n    }, undefined), article && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n      className: \"valign-wrapper\",\n      style: {\n        display: \"flex\",\n        flexWrap: \"wrap\",\n        marginTop: \"-1em\",\n        justifyContent: \"space-between\"\n      },\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"h1\", {\n        style: {\n          fontWeight: \"bold\",\n          color: \"#cc2b5e\"\n        },\n        children: article.title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 11\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n        style: {\n          fontWeight: \"bold\"\n        },\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"a\", {\n          href: `/edit?id=${article._id}`,\n          style: {\n            marginTop: \"1em\",\n            marginRight: \"0.5em\",\n            color: \"#C73866\"\n          },\n          children: \"Edit This Article\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 42,\n          columnNumber: 13\n        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"a\", {\n          href: `/edithistory?title=${article.title}`,\n          style: {\n            marginTop: \"1em\",\n            color: \"#C73866\"\n          },\n          children: \"Edit History\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 45,\n          columnNumber: 13\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 11\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 9\n    }, undefined), article && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n      style: {\n        marginTop: \"1em\"\n      },\n      children: article.text.split(\"<br />\").map(text => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"p\", {\n        children: text\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 55,\n        columnNumber: 13\n      }, undefined))\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 9\n    }, undefined), failure && `${failure}`]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 27,\n    columnNumber: 5\n  }, undefined);\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Article);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUEsU0FBUyxFQUFFO0FBQWIsT0FBWjtBQUFBLGdCQUNHbEIsT0FBTyxDQUFDd0IsSUFBUixDQUFhQyxLQUFiLENBQW1CLFFBQW5CLEVBQTZCQyxHQUE3QixDQUFpQ0YsSUFBSSxpQkFDcEM7QUFBQSxrQkFBSUE7QUFBSjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUREO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkExQkosRUFnQ0d0QixPQUFPLElBQUssR0FBRUEsT0FBUSxFQWhDekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFvQ0QsQ0F6RHlCLENBQTFCO0FBMkRBLGlFQUFlSixPQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZm9ydW0vLi9wYWdlcy9hcnRpY2xlLmpzeD8zYmEwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBBeGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcblxuY29uc3QgQXJ0aWNsZSA9IHdpdGhSb3V0ZXIocHJvcHMgPT4ge1xuICBjb25zdCBbYXJ0aWNsZSwgc2V0QXJ0aWNsZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2ZhaWx1cmUsIHNldEZhaWx1cmVdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBjb25zb2xlLmxvZyhwcm9wcy5yb3V0ZXIucXVlcnkuaWQpO1xuICAgIGNvbnN0IGlkID0gcHJvcHMucm91dGVyLnF1ZXJ5LmlkO1xuICAgIGlmIChpZCkge1xuICAgICAgQXhpb3MuZ2V0KGAvYXBpL2FydGljbGUtZGF0YT9pZD0ke3Byb3BzLnJvdXRlci5xdWVyeS5pZH1gKS50aGVuKHJlcyA9PiB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSByZXMuZGF0YTtcbiAgICAgICAgY29uc29sZS5sb2coZGF0YVswXSk7XG4gICAgICAgIGlmIChkYXRhWzBdKSB7XG4gICAgICAgICAgcmV0dXJuIHNldEFydGljbGUoZGF0YVswXSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2V0RmFpbHVyZShcIk5vIGFydGljbGUgRm91bmQgd2l0aCB0aGF0IGlkXCIpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgbG9jYXRpb24uaHJlZiA9IFwiL1wiO1xuICAgIH1cbiAgfSwgW10pO1xuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3sgY29sb3I6IFwiIzMzNTM5RVwiIH19PlxuICAgICAgeyFhcnRpY2xlICYmICFmYWlsdXJlICYmIDxkaXY+TG9hZGluZyBBcnRpY2xlIC4uLjwvZGl2Pn1cblxuICAgICAge2FydGljbGUgJiYgKFxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPVwidmFsaWduLXdyYXBwZXJcIlxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICAgIGZsZXhXcmFwOiBcIndyYXBcIixcbiAgICAgICAgICAgIG1hcmdpblRvcDogXCItMWVtXCIsXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1iZXR3ZWVuXCJcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPGgxIHN0eWxlPXt7IGZvbnRXZWlnaHQ6IFwiYm9sZFwiLCBjb2xvcjogXCIjY2MyYjVlXCIgfX0+e2FydGljbGUudGl0bGV9PC9oMT5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRXZWlnaHQ6IFwiYm9sZFwiIH19PlxuICAgICAgICAgICAgPGEgaHJlZj17YC9lZGl0P2lkPSR7YXJ0aWNsZS5faWR9YH0gc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjFlbVwiLCBtYXJnaW5SaWdodDogXCIwLjVlbVwiLCBjb2xvcjogXCIjQzczODY2XCIgfX0+XG4gICAgICAgICAgICAgIEVkaXQgVGhpcyBBcnRpY2xlXG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8YSBocmVmPXtgL2VkaXRoaXN0b3J5P3RpdGxlPSR7YXJ0aWNsZS50aXRsZX1gfSBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMWVtXCIsIGNvbG9yOiBcIiNDNzM4NjZcIiB9fT5cbiAgICAgICAgICAgICAgRWRpdCBIaXN0b3J5XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cblxuICAgICAge2FydGljbGUgJiYgKFxuICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblRvcDogXCIxZW1cIiB9fT5cbiAgICAgICAgICB7YXJ0aWNsZS50ZXh0LnNwbGl0KFwiPGJyIC8+XCIpLm1hcCh0ZXh0ID0+IChcbiAgICAgICAgICAgIDxwPnt0ZXh0fTwvcD5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgICAge2ZhaWx1cmUgJiYgYCR7ZmFpbHVyZX1gfVxuICAgIDwvZGl2PlxuICApO1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IEFydGljbGU7XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJBeGlvcyIsIndpdGhSb3V0ZXIiLCJBcnRpY2xlIiwicHJvcHMiLCJhcnRpY2xlIiwic2V0QXJ0aWNsZSIsImZhaWx1cmUiLCJzZXRGYWlsdXJlIiwiaWQiLCJyb3V0ZXIiLCJxdWVyeSIsImdldCIsInRoZW4iLCJyZXMiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImxvY2F0aW9uIiwiaHJlZiIsImNvbG9yIiwiZGlzcGxheSIsImZsZXhXcmFwIiwibWFyZ2luVG9wIiwianVzdGlmeUNvbnRlbnQiLCJmb250V2VpZ2h0IiwidGl0bGUiLCJfaWQiLCJtYXJnaW5SaWdodCIsInRleHQiLCJzcGxpdCIsIm1hcCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/article.jsx\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/article.jsx"));
module.exports = __webpack_exports__;

})();