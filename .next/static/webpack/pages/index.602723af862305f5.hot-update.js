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

/***/ "./src/components/Sections/AboutMe/styles.ts":
/*!***************************************************!*\
  !*** ./src/components/Sections/AboutMe/styles.ts ***!
  \***************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Container\": function() { return /* binding */ Container; },\n/* harmony export */   \"Content\": function() { return /* binding */ Content; },\n/* harmony export */   \"Description\": function() { return /* binding */ Description; },\n/* harmony export */   \"Info\": function() { return /* binding */ Info; },\n/* harmony export */   \"ProfileImage\": function() { return /* binding */ ProfileImage; },\n/* harmony export */   \"Title\": function() { return /* binding */ Title; }\n/* harmony export */ });\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\n\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].section.withConfig({\n  displayName: \"styles__Container\",\n  componentId: \"sc-tf3gr6-0\"\n})([\"\"]);\nvar Content = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"styles__Content\",\n  componentId: \"sc-tf3gr6-1\"\n})([\"display:flex;justify-content:space-between;\"]);\nvar Info = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"styles__Info\",\n  componentId: \"sc-tf3gr6-2\"\n})([\"display:flex;flex-direction:column;\"]);\nvar Title = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].h2.withConfig({\n  displayName: \"styles__Title\",\n  componentId: \"sc-tf3gr6-3\"\n})([\"\"]);\nvar Description = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].p.withConfig({\n  displayName: \"styles__Description\",\n  componentId: \"sc-tf3gr6-4\"\n})([\"color:\", \";font-weight:\", \";\"], function (_ref) {\n  var theme = _ref.theme;\n  return theme.colors.gray60;\n}, function (_ref2) {\n  var theme = _ref2.theme;\n  return theme.fontWeights.regular;\n});\nvar ProfileImage = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((next_image__WEBPACK_IMPORTED_MODULE_0___default())).withConfig({\n  displayName: \"styles__ProfileImage\",\n  componentId: \"sc-tf3gr6-5\"\n})([\"border-radius:0.5rem;border:1px solid \", \";\"], function (_ref3) {\n  var theme = _ref3.theme;\n  return theme.colors.gray50;\n});\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TZWN0aW9ucy9BYm91dE1lL3N0eWxlcy50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRU8sSUFBTUUsU0FBUyxHQUFHRCw0RUFBSDtBQUFBO0FBQUE7QUFBQSxRQUFmO0FBRUEsSUFBTUcsT0FBTyxHQUFHSCx3RUFBSDtBQUFBO0FBQUE7QUFBQSxtREFBYjtBQUtBLElBQU1LLElBQUksR0FBR0wsd0VBQUg7QUFBQTtBQUFBO0FBQUEsMkNBQVY7QUFLQSxJQUFNTSxLQUFLLEdBQUdOLHVFQUFIO0FBQUE7QUFBQTtBQUFBLFFBQVg7QUFFQSxJQUFNUSxXQUFXLEdBQUdSLHNFQUFIO0FBQUE7QUFBQTtBQUFBLHFDQUNiO0FBQUEsTUFBR1UsS0FBSCxRQUFHQSxLQUFIO0FBQUEsU0FBZUEsS0FBSyxDQUFDQyxNQUFOLENBQWFDLE1BQTVCO0FBQUEsQ0FEYSxFQUVQO0FBQUEsTUFBR0YsS0FBSCxTQUFHQSxLQUFIO0FBQUEsU0FBZUEsS0FBSyxDQUFDRyxXQUFOLENBQWtCQyxPQUFqQztBQUFBLENBRk8sQ0FBakI7QUFLQSxJQUFNQyxZQUFZLEdBQUdmLDZEQUFNLENBQUNELG1EQUFELENBQVQ7QUFBQTtBQUFBO0FBQUEsb0RBRUg7QUFBQSxNQUFHVyxLQUFILFNBQUdBLEtBQUg7QUFBQSxTQUFlQSxLQUFLLENBQUNDLE1BQU4sQ0FBYUssTUFBNUI7QUFBQSxDQUZHLENBQWxCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1NlY3Rpb25zL0Fib3V0TWUvc3R5bGVzLnRzPzVjZmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLnNlY3Rpb25gYDtcclxuXHJcbmV4cG9ydCBjb25zdCBDb250ZW50ID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBJbmZvID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgVGl0bGUgPSBzdHlsZWQuaDJgYDtcclxuXHJcbmV4cG9ydCBjb25zdCBEZXNjcmlwdGlvbiA9IHN0eWxlZC5wYFxyXG4gIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5ncmF5NjB9O1xyXG4gIGZvbnQtd2VpZ2h0OiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmZvbnRXZWlnaHRzLnJlZ3VsYXJ9O1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFByb2ZpbGVJbWFnZSA9IHN0eWxlZChJbWFnZSlgXHJcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLmdyYXk1MH07XHJcbmA7XHJcbiJdLCJuYW1lcyI6WyJJbWFnZSIsInN0eWxlZCIsIkNvbnRhaW5lciIsInNlY3Rpb24iLCJDb250ZW50IiwiZGl2IiwiSW5mbyIsIlRpdGxlIiwiaDIiLCJEZXNjcmlwdGlvbiIsInAiLCJ0aGVtZSIsImNvbG9ycyIsImdyYXk2MCIsImZvbnRXZWlnaHRzIiwicmVndWxhciIsIlByb2ZpbGVJbWFnZSIsImdyYXk1MCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Sections/AboutMe/styles.ts\n");

/***/ })

});