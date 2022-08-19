/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./api/build-client.js":
/*!*****************************!*\
  !*** ./api/build-client.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (({\n  req\n}) => {\n  if (true) {\n    // we are on the server!\n    // <serviceName>.<namespaceName>.svc.cluster.local\n    return axios__WEBPACK_IMPORTED_MODULE_0___default().create({\n      baseURL: 'http://ingress-nginx-controller.ingress-nginx.svc.cluster.local',\n      headers: req.headers\n    });\n  } else {}\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9hcGkvYnVpbGQtY2xpZW50LmpzP2UxOTYiXSwibmFtZXMiOlsicmVxIiwiYXhpb3MiLCJiYXNlVVJMIiwiaGVhZGVycyJdLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFFQSwrREFBZSxDQUFDO0FBQUVBO0FBQUYsQ0FBRCxLQUFhO0FBQ3hCLFlBQWtDO0FBQzlCO0FBQ0E7QUFDQSxXQUFPQyxtREFBQSxDQUFhO0FBQ2hCQyxhQUFPLEVBQUUsaUVBRE87QUFFaEJDLGFBQU8sRUFBRUgsR0FBRyxDQUFDRztBQUZHLEtBQWIsQ0FBUDtBQUlILEdBUEQsTUFPTyxFQUtOO0FBQ0osQ0FkRCIsImZpbGUiOiIuL2FwaS9idWlsZC1jbGllbnQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmV4cG9ydCBkZWZhdWx0ICh7IHJlcSB9KSA9PiB7XG4gICAgaWYodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgLy8gd2UgYXJlIG9uIHRoZSBzZXJ2ZXIhXG4gICAgICAgIC8vIDxzZXJ2aWNlTmFtZT4uPG5hbWVzcGFjZU5hbWU+LnN2Yy5jbHVzdGVyLmxvY2FsXG4gICAgICAgIHJldHVybiBheGlvcy5jcmVhdGUoe1xuICAgICAgICAgICAgYmFzZVVSTDogJ2h0dHA6Ly9pbmdyZXNzLW5naW54LWNvbnRyb2xsZXIuaW5ncmVzcy1uZ2lueC5zdmMuY2x1c3Rlci5sb2NhbCcsXG4gICAgICAgICAgICBoZWFkZXJzOiByZXEuaGVhZGVyc1xuICAgICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIHdlIGFyZSBvbiB0aGUgYnJvd3NlciFcbiAgICAgICAgcmV0dXJuIGF4aW9zLmNyZWF0ZSh7IFxuICAgICAgICAgICAgYmFzZVVSTDogJy8nXG4gICAgICAgIH0pXG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./api/build-client.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _api_build_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/build-client */ \"./api/build-client.js\");\n\nvar _jsxFileName = \"/Users/ton/udemy-course/microservices-with-nodejs-and-react/section 5/ticketing/client/pages/index.js\";\n\n\nconst LandingPage = ({\n  currentUser\n}) => {\n  return currentUser ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n    children: \"You are signed in\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 5,\n    columnNumber: 9\n  }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n    children: \"You are NOT signed in\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 7,\n    columnNumber: 9\n  }, undefined);\n};\n\nLandingPage.getInitialProps = async context => {\n  console.log('LANDING PAGE!');\n  const client = (0,_api_build_client__WEBPACK_IMPORTED_MODULE_1__.default)(context);\n  const {\n    data\n  } = await client.get('/api/users/currentuser');\n  return data;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (LandingPage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkxhbmRpbmdQYWdlIiwiY3VycmVudFVzZXIiLCJnZXRJbml0aWFsUHJvcHMiLCJjb250ZXh0IiwiY29uc29sZSIsImxvZyIsImNsaWVudCIsImJ1aWxkQ2xpZW50IiwiZGF0YSIsImdldCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7O0FBRUEsTUFBTUEsV0FBVyxHQUFHLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQXFCO0FBQ3JDLFNBQU9BLFdBQVcsZ0JBQ2Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEYyxnQkFHZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUhKO0FBS0gsQ0FORDs7QUFRQUQsV0FBVyxDQUFDRSxlQUFaLEdBQThCLE1BQU9DLE9BQVAsSUFBbUI7QUFDN0NDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLGVBQVo7QUFDQSxRQUFNQyxNQUFNLEdBQUdDLDBEQUFXLENBQUNKLE9BQUQsQ0FBMUI7QUFDQSxRQUFNO0FBQUVLO0FBQUYsTUFBVyxNQUFNRixNQUFNLENBQUNHLEdBQVAsQ0FBVyx3QkFBWCxDQUF2QjtBQUVBLFNBQU9ELElBQVA7QUFDSCxDQU5EOztBQVFBLCtEQUFlUixXQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYnVpbGRDbGllbnQgZnJvbSBcIi4uL2FwaS9idWlsZC1jbGllbnRcIjtcblxuY29uc3QgTGFuZGluZ1BhZ2UgPSAoeyBjdXJyZW50VXNlciB9KSA9PiB7XG4gICAgcmV0dXJuIGN1cnJlbnRVc2VyID8gKFxuICAgICAgICA8aDE+WW91IGFyZSBzaWduZWQgaW48L2gxPlxuICAgICkgOiAoXG4gICAgICAgIDxoMT5Zb3UgYXJlIE5PVCBzaWduZWQgaW48L2gxPlxuICAgIClcbn1cblxuTGFuZGluZ1BhZ2UuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKGNvbnRleHQpID0+IHtcbiAgICBjb25zb2xlLmxvZygnTEFORElORyBQQUdFIScpO1xuICAgIGNvbnN0IGNsaWVudCA9IGJ1aWxkQ2xpZW50KGNvbnRleHQpXG4gICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBjbGllbnQuZ2V0KCcvYXBpL3VzZXJzL2N1cnJlbnR1c2VyJylcblxuICAgIHJldHVybiBkYXRhXG59XG5cbmV4cG9ydCBkZWZhdWx0IExhbmRpbmdQYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();