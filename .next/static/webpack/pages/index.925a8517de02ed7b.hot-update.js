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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Container\": function() { return /* binding */ Container; },\n/* harmony export */   \"Content\": function() { return /* binding */ Content; },\n/* harmony export */   \"Description\": function() { return /* binding */ Description; },\n/* harmony export */   \"Info\": function() { return /* binding */ Info; },\n/* harmony export */   \"ProfileContainer\": function() { return /* binding */ ProfileContainer; },\n/* harmony export */   \"ProfileImage\": function() { return /* binding */ ProfileImage; },\n/* harmony export */   \"Title\": function() { return /* binding */ Title; }\n/* harmony export */ });\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\n\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].section.withConfig({\n  displayName: \"styles__Container\",\n  componentId: \"sc-tf3gr6-0\"\n})([\"width:100%;border-top:1px solid \", \";\"], function (_ref) {\n  var theme = _ref.theme;\n  return theme.colors.gray50;\n});\nvar Content = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"styles__Content\",\n  componentId: \"sc-tf3gr6-1\"\n})([\"display:flex;justify-content:space-between;margin:5rem 0;@media screen and (max-width:991.98px){flex-direction:column;align-items:center;gap:3rem;}\"]);\nvar Info = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"styles__Info\",\n  componentId: \"sc-tf3gr6-2\"\n})([\"display:flex;flex-direction:column;justify-content:center;gap:1rem;max-width:500px;\"]);\nvar Title = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].h2.withConfig({\n  displayName: \"styles__Title\",\n  componentId: \"sc-tf3gr6-3\"\n})([\"font-size:3rem;\"]);\nvar Description = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].p.withConfig({\n  displayName: \"styles__Description\",\n  componentId: \"sc-tf3gr6-4\"\n})([\"font-size:1rem;color:\", \";font-weight:\", \";span{font-weight:\", \";color:\", \";}\"], function (_ref2) {\n  var theme = _ref2.theme;\n  return theme.colors.gray60;\n}, function (_ref3) {\n  var theme = _ref3.theme;\n  return theme.fontWeights.regular;\n}, function (_ref4) {\n  var theme = _ref4.theme;\n  return theme.fontWeights.medium;\n}, function (_ref5) {\n  var theme = _ref5.theme;\n  return theme.colors.rose40;\n});\nvar ProfileContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"styles__ProfileContainer\",\n  componentId: \"sc-tf3gr6-5\"\n})([\"position:relative;width:400px;height:400px;@media screen and (max-width:575.98px){width:100%;height:350px;}\"]);\nvar ProfileImage = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((next_image__WEBPACK_IMPORTED_MODULE_0___default())).withConfig({\n  displayName: \"styles__ProfileImage\",\n  componentId: \"sc-tf3gr6-6\"\n})([\"border-radius:0.5rem;border:1px solid \", \";filter:grayscale(100%);\"], function (_ref6) {\n  var theme = _ref6.theme;\n  return theme.colors.gray50;\n});\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TZWN0aW9ucy9BYm91dE1lL3N0eWxlcy50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVPLElBQU1FLFNBQVMsR0FBR0QsNEVBQUg7QUFBQTtBQUFBO0FBQUEsOENBRUk7QUFBQSxNQUFHRyxLQUFILFFBQUdBLEtBQUg7QUFBQSxTQUFlQSxLQUFLLENBQUNDLE1BQU4sQ0FBYUMsTUFBNUI7QUFBQSxDQUZKLENBQWY7QUFLQSxJQUFNQyxPQUFPLEdBQUdOLHdFQUFIO0FBQUE7QUFBQTtBQUFBLDJKQUFiO0FBWUEsSUFBTVEsSUFBSSxHQUFHUix3RUFBSDtBQUFBO0FBQUE7QUFBQSwyRkFBVjtBQVFBLElBQU1TLEtBQUssR0FBR1QsdUVBQUg7QUFBQTtBQUFBO0FBQUEsdUJBQVg7QUFJQSxJQUFNVyxXQUFXLEdBQUdYLHNFQUFIO0FBQUE7QUFBQTtBQUFBLHNGQUViO0FBQUEsTUFBR0csS0FBSCxTQUFHQSxLQUFIO0FBQUEsU0FBZUEsS0FBSyxDQUFDQyxNQUFOLENBQWFTLE1BQTVCO0FBQUEsQ0FGYSxFQUdQO0FBQUEsTUFBR1YsS0FBSCxTQUFHQSxLQUFIO0FBQUEsU0FBZUEsS0FBSyxDQUFDVyxXQUFOLENBQWtCQyxPQUFqQztBQUFBLENBSE8sRUFNTDtBQUFBLE1BQUdaLEtBQUgsU0FBR0EsS0FBSDtBQUFBLFNBQWVBLEtBQUssQ0FBQ1csV0FBTixDQUFrQkUsTUFBakM7QUFBQSxDQU5LLEVBT1g7QUFBQSxNQUFHYixLQUFILFNBQUdBLEtBQUg7QUFBQSxTQUFlQSxLQUFLLENBQUNDLE1BQU4sQ0FBYWEsTUFBNUI7QUFBQSxDQVBXLENBQWpCO0FBV0EsSUFBTUMsZ0JBQWdCLEdBQUdsQix3RUFBSDtBQUFBO0FBQUE7QUFBQSxtSEFBdEI7QUFXQSxJQUFNbUIsWUFBWSxHQUFHbkIsNkRBQU0sQ0FBQ0QsbURBQUQsQ0FBVDtBQUFBO0FBQUE7QUFBQSwyRUFFSDtBQUFBLE1BQUdJLEtBQUgsU0FBR0EsS0FBSDtBQUFBLFNBQWVBLEtBQUssQ0FBQ0MsTUFBTixDQUFhQyxNQUE1QjtBQUFBLENBRkcsQ0FBbEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU2VjdGlvbnMvQWJvdXRNZS9zdHlsZXMudHM/NWNmZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBDb250YWluZXIgPSBzdHlsZWQuc2VjdGlvbmBcclxuICB3aWR0aDogMTAwJTtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMuZ3JheTUwfTtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBDb250ZW50ID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBtYXJnaW46IDVyZW0gMDtcclxuXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxLjk4cHgpIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiAzcmVtO1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBJbmZvID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZ2FwOiAxcmVtO1xyXG4gIG1heC13aWR0aDogNTAwcHg7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgVGl0bGUgPSBzdHlsZWQuaDJgXHJcbiAgZm9udC1zaXplOiAzcmVtO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IERlc2NyaXB0aW9uID0gc3R5bGVkLnBgXHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5ncmF5NjB9O1xyXG4gIGZvbnQtd2VpZ2h0OiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmZvbnRXZWlnaHRzLnJlZ3VsYXJ9O1xyXG5cclxuICBzcGFuIHtcclxuICAgIGZvbnQtd2VpZ2h0OiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmZvbnRXZWlnaHRzLm1lZGl1bX07XHJcbiAgICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMucm9zZTQwfTtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgUHJvZmlsZUNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiA0MDBweDtcclxuICBoZWlnaHQ6IDQwMHB4O1xyXG5cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzUuOThweCkge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDM1MHB4O1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBQcm9maWxlSW1hZ2UgPSBzdHlsZWQoSW1hZ2UpYFxyXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5ncmF5NTB9O1xyXG4gIGZpbHRlcjogZ3JheXNjYWxlKDEwMCUpO1xyXG5gO1xyXG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJzdHlsZWQiLCJDb250YWluZXIiLCJzZWN0aW9uIiwidGhlbWUiLCJjb2xvcnMiLCJncmF5NTAiLCJDb250ZW50IiwiZGl2IiwiSW5mbyIsIlRpdGxlIiwiaDIiLCJEZXNjcmlwdGlvbiIsInAiLCJncmF5NjAiLCJmb250V2VpZ2h0cyIsInJlZ3VsYXIiLCJtZWRpdW0iLCJyb3NlNDAiLCJQcm9maWxlQ29udGFpbmVyIiwiUHJvZmlsZUltYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Sections/AboutMe/styles.ts\n");

/***/ })

});