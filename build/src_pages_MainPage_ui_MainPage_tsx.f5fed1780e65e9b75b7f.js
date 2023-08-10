"use strict";
(self["webpackChunkadmin_panel"] = self["webpackChunkadmin_panel"] || []).push([["src_pages_MainPage_ui_MainPage_tsx"],{

/***/ "./src/pages/MainPage/ui/MainPage.tsx":
/*!********************************************!*\
  !*** ./src/pages/MainPage/ui/MainPage.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var shared_ui_Card_Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared/ui/Card/Card */ "./src/shared/ui/Card/Card.tsx");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Grid/Grid.js");
/* harmony import */ var shared_ui_BasicTable_BasicTable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shared/ui/BasicTable/BasicTable */ "./src/shared/ui/BasicTable/BasicTable.tsx");
/* harmony import */ var widgets_CardStatistics__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! widgets/CardStatistics */ "./src/widgets/CardStatistics/index.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};






var data = [
    { name: 'Артем', calories: 'test@gmail.com', fat: '89998781003', carbs: '22 июня', protein: 'сумма' },
];
var rows = [
    { name: 'Frozen yoghurt', calories: '159', fat: '2112', carbs: '12112' },
];
var MainPage = (0,react__WEBPACK_IMPORTED_MODULE_4__.memo)(function () {
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(widgets_CardStatistics__WEBPACK_IMPORTED_MODULE_3__.CardStatistics, {}, void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_Card_Card__WEBPACK_IMPORTED_MODULE_1__["default"], __assign({ sx: { mt: 2, p: 2 } }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], __assign({ container: true, spacing: 2 }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], __assign({ item: true, xs: 12, sm: 12, md: 6 }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_BasicTable_BasicTable__WEBPACK_IMPORTED_MODULE_2__["default"], { rows: data, call1: "\u0418\u043C\u044F", call2: '\u041F\u043E\u0447\u0442\u0430', call3: 'Номер телефона', call4: 'Дата заявки', call5: 'Сумма' }, void 0) }), void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], __assign({ item: true, xs: 12, sm: 12, md: 6 }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_BasicTable_BasicTable__WEBPACK_IMPORTED_MODULE_2__["default"], { rows: rows, call1: "\u0418\u043C\u044F", call2: '\u041F\u043E\u0447\u0442\u0430', call3: 'call3', call4: 'тест' }, void 0) }), void 0)] }), void 0) }), void 0)] }, void 0));
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MainPage);


/***/ }),

/***/ "./src/shared/ui/BasicTable/BasicTable.tsx":
/*!*************************************************!*\
  !*** ./src/shared/ui/BasicTable/BasicTable.tsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _mui_material_Table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Table */ "./node_modules/@mui/material/Table/Table.js");
/* harmony import */ var _mui_material_TableBody__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/TableBody */ "./node_modules/@mui/material/TableBody/TableBody.js");
/* harmony import */ var _mui_material_TableCell__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/TableCell */ "./node_modules/@mui/material/TableCell/TableCell.js");
/* harmony import */ var _mui_material_TableContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material/TableContainer */ "./node_modules/@mui/material/TableContainer/TableContainer.js");
/* harmony import */ var _mui_material_TableHead__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/TableHead */ "./node_modules/@mui/material/TableHead/TableHead.js");
/* harmony import */ var _mui_material_TableRow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/TableRow */ "./node_modules/@mui/material/TableRow/TableRow.js");
/* harmony import */ var _mui_material_Paper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/Paper */ "./node_modules/@mui/material/Paper/Paper.js");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};








var BasicTable = function (_a) {
    var rows = _a.rows, call1 = _a.call1, call2 = _a.call2, call3 = _a.call3, call4 = _a.call4, call5 = _a.call5;
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_TableContainer__WEBPACK_IMPORTED_MODULE_1__["default"], __assign({ component: _mui_material_Paper__WEBPACK_IMPORTED_MODULE_2__["default"] }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Table__WEBPACK_IMPORTED_MODULE_3__["default"], __assign({ sx: { maxWidth: 550 }, "aria-label": "simple table" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_TableHead__WEBPACK_IMPORTED_MODULE_4__["default"], { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_TableRow__WEBPACK_IMPORTED_MODULE_5__["default"], { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_6__["default"], { children: call1 }, void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_6__["default"], { children: call2 }, void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_6__["default"], { children: call3 }, void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_6__["default"], { children: call4 }, void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_6__["default"], { children: call5 }, void 0)] }, void 0) }, void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_TableBody__WEBPACK_IMPORTED_MODULE_7__["default"], { children: rows.map(function (row) { return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_TableRow__WEBPACK_IMPORTED_MODULE_5__["default"], __assign({ sx: { '&:last-child td, &:last-child th': { border: 0 } } }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_6__["default"], __assign({ component: "th", scope: "row" }, { children: row.name }), void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_6__["default"], { children: row.calories }, void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_6__["default"], { children: row.fat }, void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_6__["default"], { children: row.carbs }, void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_6__["default"], { children: row.protein }, void 0)] }), row.name)); }) }, void 0)] }), void 0) }), void 0));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BasicTable);


/***/ }),

/***/ "./src/widgets/CardStatistics/index.ts":
/*!*********************************************!*\
  !*** ./src/widgets/CardStatistics/index.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CardStatistics": () => (/* reexport safe */ _ui_CardStatistics__WEBPACK_IMPORTED_MODULE_0__.CardStatistics)
/* harmony export */ });
/* harmony import */ var _ui_CardStatistics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui/CardStatistics */ "./src/widgets/CardStatistics/ui/CardStatistics.tsx");




/***/ }),

/***/ "./src/widgets/CardStatistics/ui/CardStatistics.tsx":
/*!**********************************************************!*\
  !*** ./src/widgets/CardStatistics/ui/CardStatistics.tsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CardStatistics": () => (/* binding */ CardStatistics)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _mui_icons_material_PollOutlined__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/icons-material/PollOutlined */ "./node_modules/@mui/icons-material/PollOutlined.js");
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/Typography */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Grid/Grid.js");
/* harmony import */ var shared_ui_Card_Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared/ui/Card/Card */ "./src/shared/ui/Card/Card.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};






var CardStatistics = (0,react__WEBPACK_IMPORTED_MODULE_2__.memo)(function () {
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], __assign({ container: true, spacing: 2 }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], __assign({ item: true, xs: 12, sm: 6, md: 3 }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(shared_ui_Card_Card__WEBPACK_IMPORTED_MODULE_1__["default"], __assign({ sx: {
                        mt: 2, p: 2, display: 'flex', justifyContent: 'space-between',
                        alignItems: 'center',
                    } }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], __assign({ variant: "subtitle2", gutterBottom: true }, { children: "\u041F\u0440\u043E\u0434\u0430\u0436\u0438 \u0437\u0430 \u0441\u0435\u0433\u043E\u0434\u043D\u044F" }), void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], __assign({ variant: "body2", gutterBottom: true }, { children: "4,42,236" }), void 0)] }, void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material_PollOutlined__WEBPACK_IMPORTED_MODULE_5__["default"], { sx: { fontSize: '32px' } }, void 0)] }), void 0) }), void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], __assign({ item: true, xs: 12, sm: 6, md: 3 }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(shared_ui_Card_Card__WEBPACK_IMPORTED_MODULE_1__["default"], __assign({ sx: {
                        mt: 2, p: 2, display: 'flex', justifyContent: 'space-between',
                        alignItems: 'center',
                    } }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], __assign({ variant: "subtitle2", gutterBottom: true }, { children: "\u041F\u0440\u043E\u0434\u0430\u0436\u0438 \u0437\u0430 \u0441\u0435\u0433\u043E\u0434\u043D\u044F" }), void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], __assign({ variant: "body2", gutterBottom: true }, { children: "4,42,236" }), void 0)] }, void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material_PollOutlined__WEBPACK_IMPORTED_MODULE_5__["default"], { sx: { fontSize: '32px' } }, void 0)] }), void 0) }), void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], __assign({ item: true, xs: 12, sm: 6, md: 3 }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(shared_ui_Card_Card__WEBPACK_IMPORTED_MODULE_1__["default"], __assign({ sx: {
                        mt: 2, p: 2, display: 'flex', justifyContent: 'space-between',
                        alignItems: 'center',
                    } }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], __assign({ variant: "subtitle2", gutterBottom: true }, { children: "\u041F\u0440\u043E\u0434\u0430\u0436\u0438 \u0437\u0430 \u0441\u0435\u0433\u043E\u0434\u043D\u044F" }), void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], __assign({ variant: "body2", gutterBottom: true }, { children: "4,42,236" }), void 0)] }, void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material_PollOutlined__WEBPACK_IMPORTED_MODULE_5__["default"], { sx: { fontSize: '32px' } }, void 0)] }), void 0) }), void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], __assign({ item: true, xs: 12, sm: 6, md: 3 }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(shared_ui_Card_Card__WEBPACK_IMPORTED_MODULE_1__["default"], __assign({ sx: {
                        mt: 2, p: 2, display: 'flex', justifyContent: 'space-between',
                        alignItems: 'center',
                    } }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], __assign({ variant: "subtitle2", gutterBottom: true }, { children: "\u041F\u0440\u043E\u0434\u0430\u0436\u0438 \u0437\u0430 \u0441\u0435\u0433\u043E\u0434\u043D\u044F" }), void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], __assign({ variant: "body2", gutterBottom: true }, { children: "4,42,236" }), void 0)] }, void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material_PollOutlined__WEBPACK_IMPORTED_MODULE_5__["default"], { sx: { fontSize: '32px' } }, void 0)] }), void 0) }), void 0)] }), void 0));
});


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3BhZ2VzX01haW5QYWdlX3VpX01haW5QYWdlX3RzeC5mNWZlZDE3ODBlNjVlOWI3NWI3Zi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0JBQWdCLFNBQUksSUFBSSxTQUFJO0FBQzVCO0FBQ0EsaURBQWlELE9BQU87QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNzRjtBQUN0QztBQUNYO0FBQ29CO0FBQ0Q7QUFDM0I7QUFDN0I7QUFDQSxNQUFNLG1HQUFtRztBQUN6RztBQUNBO0FBQ0EsTUFBTSxzRUFBc0U7QUFDNUU7QUFDQSxlQUFlLDJDQUFJO0FBQ25CLFlBQVksdURBQUssQ0FBQyx1REFBUyxJQUFJLFdBQVcsc0RBQUksQ0FBQyxrRUFBYyxJQUFJLFdBQVcsc0RBQUksQ0FBQywyREFBYSxhQUFhLE1BQU0sZUFBZSxJQUFJLFVBQVUsdURBQUssQ0FBQyxxREFBSSxhQUFhLDZCQUE2QixJQUFJLFdBQVcsc0RBQUksQ0FBQyxxREFBSSxhQUFhLG1DQUFtQyxJQUFJLFVBQVUsc0RBQUksQ0FBQyx1RUFBVSxJQUFJLGlKQUFpSixXQUFXLFlBQVksc0RBQUksQ0FBQyxxREFBSSxhQUFhLG1DQUFtQyxJQUFJLFVBQVUsc0RBQUksQ0FBQyx1RUFBVSxJQUFJLGlIQUFpSCxXQUFXLGFBQWEsWUFBWSxhQUFhO0FBQy9zQixDQUFDO0FBQ0QsaUVBQWUsUUFBUSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFCeEIsZ0JBQWdCLFNBQUksSUFBSSxTQUFJO0FBQzVCO0FBQ0EsaURBQWlELE9BQU87QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUMrRDtBQUN2QjtBQUNRO0FBQ0E7QUFDVTtBQUNWO0FBQ0Y7QUFDTjtBQUN4QztBQUNBO0FBQ0EsWUFBWSxzREFBSSxDQUFDLG9FQUFjLGFBQWEsV0FBVywyREFBSyxFQUFFLElBQUksVUFBVSx1REFBSyxDQUFDLDJEQUFLLGFB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LHNEQUFJLENBQUMsd0VBQWdCLElBQUksTUFBTSxvQkFBb0IsWUFBWSxZQUFZLGFBQWE7QUFDbGQsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2FkbWluLXBhbmVsLy4vc3JjL3BhZ2VzL01haW5QYWdlL3VpL01haW5QYWdlLnRzeCIsIndlYnBhY2s6Ly9hZG1pbi1wYW5lbC8uL3NyYy9zaGFyZWQvdWkvQmFzaWNUYWJsZS9CYXNpY1RhYmxlLnRzeCIsIndlYnBhY2s6Ly9hZG1pbi1wYW5lbC8uL3NyYy93aWRnZXRzL0NhcmRTdGF0aXN0aWNzL2luZGV4LnRzIiwid2VicGFjazovL2FkbWluLXBhbmVsLy4vc3JjL3dpZGdldHMvQ2FyZFN0YXRpc3RpY3MvdWkvQ2FyZFN0YXRpc3RpY3MudHN4Il0sInNvdXJjZXNDb250ZW50IjpbInZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCwganN4cyBhcyBfanN4cywgRnJhZ21lbnQgYXMgX0ZyYWdtZW50IH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5pbXBvcnQgQ2FyZENvbnRhaW5lciBmcm9tICdzaGFyZWQvdWkvQ2FyZC9DYXJkJztcbmltcG9ydCB7IEdyaWQgfSBmcm9tICdAbXVpL21hdGVyaWFsJztcbmltcG9ydCBCYXNpY1RhYmxlIGZyb20gJ3NoYXJlZC91aS9CYXNpY1RhYmxlL0Jhc2ljVGFibGUnO1xuaW1wb3J0IHsgQ2FyZFN0YXRpc3RpY3MgfSBmcm9tICd3aWRnZXRzL0NhcmRTdGF0aXN0aWNzJztcbmltcG9ydCB7IG1lbW8gfSBmcm9tICdyZWFjdCc7XG52YXIgZGF0YSA9IFtcbiAgICB7IG5hbWU6ICfQkNGA0YLQtdC8JywgY2Fsb3JpZXM6ICd0ZXN0QGdtYWlsLmNvbScsIGZhdDogJzg5OTk4NzgxMDAzJywgY2FyYnM6ICcyMiDQuNGO0L3RjycsIHByb3RlaW46ICfRgdGD0LzQvNCwJyB9LFxuXTtcbnZhciByb3dzID0gW1xuICAgIHsgbmFtZTogJ0Zyb3plbiB5b2dodXJ0JywgY2Fsb3JpZXM6ICcxNTknLCBmYXQ6ICcyMTEyJywgY2FyYnM6ICcxMjExMicgfSxcbl07XG52YXIgTWFpblBhZ2UgPSBtZW1vKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gKF9qc3hzKF9GcmFnbWVudCwgeyBjaGlsZHJlbjogW19qc3goQ2FyZFN0YXRpc3RpY3MsIHt9LCB2b2lkIDApLCBfanN4KENhcmRDb250YWluZXIsIF9fYXNzaWduKHsgc3g6IHsgbXQ6IDIsIHA6IDIgfSB9LCB7IGNoaWxkcmVuOiBfanN4cyhHcmlkLCBfX2Fzc2lnbih7IGNvbnRhaW5lcjogdHJ1ZSwgc3BhY2luZzogMiB9LCB7IGNoaWxkcmVuOiBbX2pzeChHcmlkLCBfX2Fzc2lnbih7IGl0ZW06IHRydWUsIHhzOiAxMiwgc206IDEyLCBtZDogNiB9LCB7IGNoaWxkcmVuOiBfanN4KEJhc2ljVGFibGUsIHsgcm93czogZGF0YSwgY2FsbDE6IFwiXFx1MDQxOFxcdTA0M0NcXHUwNDRGXCIsIGNhbGwyOiAnXFx1MDQxRlxcdTA0M0VcXHUwNDQ3XFx1MDQ0MlxcdTA0MzAnLCBjYWxsMzogJ9Cd0L7QvNC10YAg0YLQtdC70LXRhNC+0L3QsCcsIGNhbGw0OiAn0JTQsNGC0LAg0LfQsNGP0LLQutC4JywgY2FsbDU6ICfQodGD0LzQvNCwJyB9LCB2b2lkIDApIH0pLCB2b2lkIDApLCBfanN4KEdyaWQsIF9fYXNzaWduKHsgaXRlbTogdHJ1ZSwgeHM6IDEyLCBzbTogMTIsIG1kOiA2IH0sIHsgY2hpbGRyZW46IF9qc3goQmFzaWNUYWJsZSwgeyByb3dzOiByb3dzLCBjYWxsMTogXCJcXHUwNDE4XFx1MDQzQ1xcdTA0NEZcIiwgY2FsbDI6ICdcXHUwNDFGXFx1MDQzRVxcdTA0NDdcXHUwNDQyXFx1MDQzMCcsIGNhbGwzOiAnY2FsbDMnLCBjYWxsNDogJ9GC0LXRgdGCJyB9LCB2b2lkIDApIH0pLCB2b2lkIDApXSB9KSwgdm9pZCAwKSB9KSwgdm9pZCAwKV0gfSwgdm9pZCAwKSk7XG59KTtcbmV4cG9ydCBkZWZhdWx0IE1haW5QYWdlO1xuIiwidmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbmltcG9ydCB7IGpzeCBhcyBfanN4LCBqc3hzIGFzIF9qc3hzIH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5pbXBvcnQgVGFibGUgZnJvbSAnQG11aS9tYXRlcmlhbC9UYWJsZSc7XG5pbXBvcnQgVGFibGVCb2R5IGZyb20gJ0BtdWkvbWF0ZXJpYWwvVGFibGVCb2R5JztcbmltcG9ydCBUYWJsZUNlbGwgZnJvbSAnQG11aS9tYXRlcmlhbC9UYWJsZUNlbGwnO1xuaW1wb3J0IFRhYmxlQ29udGFpbmVyIGZyb20gJ0BtdWkvbWF0ZXJpYWwvVGFibGVDb250YWluZXInO1xuaW1wb3J0IFRhYmxlSGVhZCBmcm9tICdAbXVpL21hdGVyaWFsL1RhYmxlSGVhZCc7XG5pbXBvcnQgVGFibGVSb3cgZnJvbSAnQG11aS9tYXRlcmlhbC9UYWJsZVJvdyc7XG5pbXBvcnQgUGFwZXIgZnJvbSAnQG11aS9tYXRlcmlhbC9QYXBlcic7XG52YXIgQmFzaWNUYWJsZSA9IGZ1bmN0aW9uIChfYSkge1xuICAgIHZhciByb3dzID0gX2Eucm93cywgY2FsbDEgPSBfYS5jYWxsMSwgY2FsbDIgPSBfYS5jYWxsMiwgY2FsbDMgPSBfYS5jYWxsMywgY2FsbDQgPSBfYS5jYWxsNCwgY2FsbDUgPSBfYS5jYWxsNTtcbiAgICByZXR1cm4gKF9qc3goVGFibGVDb250YWluZXIsIF9fYXNzaWduKHsgY29tcG9uZW50OiBQYXBlciB9LCB7IGNoaWxkcmVuOiBfanN4cyhUYWJsZSwgX19hc3NpZ24oeyBzeDogeyBtYXhXaWR0aDogNTUwIH0sIFwiYXJpYS1sYWJlbFwiOiBcInNpbXBsZSB0YWJsZVwiIH0sIHsgY2hpbGRyZW46IFtfanN4KFRhYmxlSGVhZCwgeyBjaGlsZHJlbjogX2pzeHMoVGFibGVSb3csIHsgY2hpbGRyZW46IFtfanN4KFRhYmxlQ2VsbCwgeyBjaGlsZHJlbjogY2FsbDEgfSwgdm9pZCAwKSwgX2pzeChUYWJsZUNlbGwsIHsgY2hpbGRyZW46IGNhbGwyIH0sIHZvaWQgMCksIF9qc3goVGFibGVDZWxsLCB7IGNoaWxkcmVuOiBjYWxsMyB9LCB2b2lkIDApLCBfanN4KFRhYmxlQ2VsbCwgeyBjaGlsZHJlbjogY2FsbDQgfSwgdm9pZCAwKSwgX2pzeChUYWJsZUNlbGwsIHsgY2hpbGRyZW46IGNhbGw1IH0sIHZvaWQgMCldIH0sIHZvaWQgMCkgfSwgdm9pZCAwKSwgX2pzeChUYWJsZUJvZHksIHsgY2hpbGRyZW46IHJvd3MubWFwKGZ1bmN0aW9uIChyb3cpIHsgcmV0dXJuIChfanN4cyhUYWJsZVJvdywgX19hc3NpZ24oeyBzeDogeyAnJjpsYXN0LWNoaWxkIHRkLCAmOmxhc3QtY2hpbGQgdGgnOiB7IGJvcmRlcjogMCB9IH0gfSwgeyBjaGlsZHJlbjogW19qc3goVGFibGVDZWxsLCBfX2Fzc2lnbih7IGNvbXBvbmVudDogXCJ0aFwiLCBzY29wZTogXCJyb3dcIiB9LCB7IGNoaWxkcmVuOiByb3cubmFtZSB9KSwgdm9pZCAwKSwgX2pzeChUYWJsZUNlbGwsIHsgY2hpbGRyZW46IHJvdy5jYWxvcmllcyB9LCB2b2lkIDApLCBfanN4KFRhYmxlQ2VsbCwgeyBjaGlsZHJlbjogcm93LmZhdCB9LCB2b2lkIDApLCBfanN4KFRhYmxlQ2VsbCwgeyBjaGlsZHJlbjogcm93LmNhcmJzIH0sIHZvaWQgMCksIF9qc3goVGFibGVDZWxsLCB7IGNoaWxkcmVuOiByb3cucHJvdGVpbiB9LCB2b2lkIDApXSB9KSwgcm93Lm5hbWUpKTsgfSkgfSwgdm9pZCAwKV0gfSksIHZvaWQgMCkgfSksIHZvaWQgMCkpO1xufTtcbmV4cG9ydCBkZWZhdWx0IEJhc2ljVGFibGU7XG4iLCJpbXBvcnQgeyBDYXJkU3RhdGlzdGljcyB9IGZyb20gJy4vdWkvQ2FyZFN0YXRpc3RpY3MnO1xuZXhwb3J0IHsgQ2FyZFN0YXRpc3RpY3MgfTtcbiIsInZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCwganN4cyBhcyBfanN4cyB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuaW1wb3J0IFBvbGxPdXRsaW5lZEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9Qb2xsT3V0bGluZWQnO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG11aS9tYXRlcmlhbC9UeXBvZ3JhcGh5JztcbmltcG9ydCB7IEdyaWQgfSBmcm9tICdAbXVpL21hdGVyaWFsJztcbmltcG9ydCBDYXJkQ29udGFpbmVyIGZyb20gJ3NoYXJlZC91aS9DYXJkL0NhcmQnO1xuaW1wb3J0IHsgbWVtbyB9IGZyb20gJ3JlYWN0JztcbmV4cG9ydCB2YXIgQ2FyZFN0YXRpc3RpY3MgPSBtZW1vKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gKF9qc3hzKEdyaWQsIF9fYXNzaWduKHsgY29udGFpbmVyOiB0cnVlLCBzcGFjaW5nOiAyIH0sIHsgY2hpbGRyZW46IFtfanN4KEdyaWQsIF9fYXNzaWduKHsgaXRlbTogdHJ1ZSwgeHM6IDEyLCBzbTogNiwgbWQ6IDMgfSwgeyBjaGlsZHJlbjogX2pzeHMoQ2FyZENvbnRhaW5lciwgX19hc3NpZ24oeyBzeDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbXQ6IDIsIHA6IDIsIGRpc3BsYXk6ICdmbGV4JywganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgICAgICB9IH0sIHsgY2hpbGRyZW46IFtfanN4cyhcImRpdlwiLCB7IGNoaWxkcmVuOiBbX2pzeChUeXBvZ3JhcGh5LCBfX2Fzc2lnbih7IHZhcmlhbnQ6IFwic3VidGl0bGUyXCIsIGd1dHRlckJvdHRvbTogdHJ1ZSB9LCB7IGNoaWxkcmVuOiBcIlxcdTA0MUZcXHUwNDQwXFx1MDQzRVxcdTA0MzRcXHUwNDMwXFx1MDQzNlxcdTA0MzggXFx1MDQzN1xcdTA0MzAgXFx1MDQ0MVxcdTA0MzVcXHUwNDMzXFx1MDQzRVxcdTA0MzRcXHUwNDNEXFx1MDQ0RlwiIH0pLCB2b2lkIDApLCBfanN4KFR5cG9ncmFwaHksIF9fYXNzaWduKHsgdmFyaWFudDogXCJib2R5MlwiLCBndXR0ZXJCb3R0b206IHRydWUgfSwgeyBjaGlsZHJlbjogXCI0LDQyLDIzNlwiIH0pLCB2b2lkIDApXSB9LCB2b2lkIDApLCBfanN4KFBvbGxPdXRsaW5lZEljb24sIHsgc3g6IHsgZm9udFNpemU6ICczMnB4JyB9IH0sIHZvaWQgMCldIH0pLCB2b2lkIDApIH0pLCB2b2lkIDApLCBfanN4KEdyaWQsIF9fYXNzaWduKHsgaXRlbTogdHJ1ZSwgeHM6IDEyLCBzbTogNiwgbWQ6IDMgfSwgeyBjaGlsZHJlbjogX2pzeHMoQ2FyZENvbnRhaW5lciwgX19hc3NpZ24oeyBzeDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbXQ6IDIsIHA6IDIsIGRpc3BsYXk6ICdmbGV4JywganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgICAgICB9IH0sIHsgY2hpbGRyZW46IFtfanN4cyhcImRpdlwiLCB7IGNoaWxkcmVuOiBbX2pzeChUeXBvZ3JhcGh5LCBfX2Fzc2lnbih7IHZhcmlhbnQ6IFwic3VidGl0bGUyXCIsIGd1dHRlckJvdHRvbTogdHJ1ZSB9LCB7IGNoaWxkcmVuOiBcIlxcdTA0MUZcXHUwNDQwXFx1MDQzRVxcdTA0MzRcXHUwNDMwXFx1MDQzNlxcdTA0MzggXFx1MDQzN1xcdTA0MzAgXFx1MDQ0MVxcdTA0MzVcXHUwNDMzXFx1MDQzRVxcdTA0MzRcXHUwNDNEXFx1MDQ0RlwiIH0pLCB2b2lkIDApLCBfanN4KFR5cG9ncmFwaHksIF9fYXNzaWduKHsgdmFyaWFudDogXCJib2R5MlwiLCBndXR0ZXJCb3R0b206IHRydWUgfSwgeyBjaGlsZHJlbjogXCI0LDQyLDIzNlwiIH0pLCB2b2lkIDApXSB9LCB2b2lkIDApLCBfanN4KFBvbGxPdXRsaW5lZEljb24sIHsgc3g6IHsgZm9udFNpemU6ICczMnB4JyB9IH0sIHZvaWQgMCldIH0pLCB2b2lkIDApIH0pLCB2b2lkIDApLCBfanN4KEdyaWQsIF9fYXNzaWduKHsgaXRlbTogdHJ1ZSwgeHM6IDEyLCBzbTogNiwgbWQ6IDMgfSwgeyBjaGlsZHJlbjogX2pzeHMoQ2FyZENvbnRhaW5lciwgX19hc3NpZ24oeyBzeDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbXQ6IDIsIHA6IDIsIGRpc3BsYXk6ICdmbGV4JywganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgICAgICB9IH0sIHsgY2hpbGRyZW46IFtfanN4cyhcImRpdlwiLCB7IGNoaWxkcmVuOiBbX2pzeChUeXBvZ3JhcGh5LCBfX2Fzc2lnbih7IHZhcmlhbnQ6IFwic3VidGl0bGUyXCIsIGd1dHRlckJvdHRvbTogdHJ1ZSB9LCB7IGNoaWxkcmVuOiBcIlxcdTA0MUZcXHUwNDQwXFx1MDQzRVxcdTA0MzRcXHUwNDMwXFx1MDQzNlxcdTA0MzggXFx1MDQzN1xcdTA0MzAgXFx1MDQ0MVxcdTA0MzVcXHUwNDMzXFx1MDQzRVxcdTA0MzRcXHUwNDNEXFx1MDQ0RlwiIH0pLCB2b2lkIDApLCBfanN4KFR5cG9ncmFwaHksIF9fYXNzaWduKHsgdmFyaWFudDogXCJib2R5MlwiLCBndXR0ZXJCb3R0b206IHRydWUgfSwgeyBjaGlsZHJlbjogXCI0LDQyLDIzNlwiIH0pLCB2b2lkIDApXSB9LCB2b2lkIDApLCBfanN4KFBvbGxPdXRsaW5lZEljb24sIHsgc3g6IHsgZm9udFNpemU6ICczMnB4JyB9IH0sIHZvaWQgMCldIH0pLCB2b2lkIDApIH0pLCB2b2lkIDApLCBfanN4KEdyaWQsIF9fYXNzaWduKHsgaXRlbTogdHJ1ZSwgeHM6IDEyLCBzbTogNiwgbWQ6IDMgfSwgeyBjaGlsZHJlbjogX2pzeHMoQ2FyZENvbnRhaW5lciwgX19hc3NpZ24oeyBzeDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbXQ6IDIsIHA6IDIsIGRpc3BsYXk6ICdmbGV4JywganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgICAgICB9IH0sIHsgY2hpbGRyZW46IFtfanN4cyhcImRpdlwiLCB7IGNoaWxkcmVuOiBbX2pzeChUeXBvZ3JhcGh5LCBfX2Fzc2lnbih7IHZhcmlhbnQ6IFwic3VidGl0bGUyXCIsIGd1dHRlckJvdHRvbTogdHJ1ZSB9LCB7IGNoaWxkcmVuOiBcIlxcdTA0MUZcXHUwNDQwXFx1MDQzRVxcdTA0MzRcXHUwNDMwXFx1MDQzNlxcdTA0MzggXFx1MDQzN1xcdTA0MzAgXFx1MDQ0MVxcdTA0MzVcXHUwNDMzXFx1MDQzRVxcdTA0MzRcXHUwNDNEXFx1MDQ0RlwiIH0pLCB2b2lkIDApLCBfanN4KFR5cG9ncmFwaHksIF9fYXNzaWduKHsgdmFyaWFudDogXCJib2R5MlwiLCBndXR0ZXJCb3R0b206IHRydWUgfSwgeyBjaGlsZHJlbjogXCI0LDQyLDIzNlwiIH0pLCB2b2lkIDApXSB9LCB2b2lkIDApLCBfanN4KFBvbGxPdXRsaW5lZEljb24sIHsgc3g6IHsgZm9udFNpemU6ICczMnB4JyB9IH0sIHZvaWQgMCldIH0pLCB2b2lkIDApIH0pLCB2b2lkIDApXSB9KSwgdm9pZCAwKSk7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==