"use strict";
(self["webpackChunkadmin_panel"] = self["webpackChunkadmin_panel"] || []).push([["src_pages_IndividualEditPage_ui_IndividualEditPage_tsx"],{

/***/ "./src/features/AddGoods/index.ts":
/*!****************************************!*\
  !*** ./src/features/AddGoods/index.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddGoods": () => (/* reexport safe */ _ui_AddGoods__WEBPACK_IMPORTED_MODULE_0__.AddGoods)
/* harmony export */ });
/* harmony import */ var _ui_AddGoods__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui/AddGoods */ "./src/features/AddGoods/ui/AddGoods.tsx");



/***/ }),

/***/ "./src/features/AddGoods/ui/AddGoods.tsx":
/*!***********************************************!*\
  !*** ./src/features/AddGoods/ui/AddGoods.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddGoods": () => (/* binding */ AddGoods)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Button */ "./node_modules/@mui/material/Button/Button.js");
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Box */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material_Paper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/Paper */ "./node_modules/@mui/material/Paper/Paper.js");
/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Stack */ "./node_modules/@mui/material/Stack/Stack.js");
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/styles */ "./node_modules/@mui/material/styles/styled.js");
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/Typography */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var shared_ui_TextArea_TextArea__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shared/ui/TextArea/TextArea */ "./src/shared/ui/TextArea/TextArea.tsx");
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
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};









var Item = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__["default"])(_mui_material_Paper__WEBPACK_IMPORTED_MODULE_4__["default"])(function (_a) {
    var theme = _a.theme;
    return (__assign(__assign({ backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff' }, theme.typography.body2), { padding: theme.spacing(1), textAlign: 'center', color: theme.palette.text.secondary, maxWidth: 400 }));
});
var AddGoods = function () {
    var _a = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''), inputValue = _a[0], setInputValue = _a[1];
    var _b = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), productList = _b[0], setProductList = _b[1];
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
        var storedProductList = localStorage.getItem('productList');
        if (storedProductList) {
            setProductList(JSON.parse(storedProductList));
        }
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
        localStorage.setItem('productList', JSON.stringify(productList));
    }, [productList]);
    var handleInputChange = function (event) {
        setInputValue(event.target.value);
    };
    var handleAddProduct = function () {
        var products = inputValue
            .split('\n')
            .map(function (line) { return line.trim(); })
            .filter(function (line) { return line !== ''; });
        if (products.length > 0) {
            setProductList(function (prevList) { return __spreadArray(__spreadArray([], prevList, true), products, true); });
            setInputValue('');
        }
    };
    var handleKeyPress = function (event) {
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault();
            handleAddProduct();
        }
    };
    var handleRemoveProduct = function (index) {
        setProductList(function (prevList) { return prevList.filter(function (_, i) { return i !== index; }); });
    };
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_TextArea_TextArea__WEBPACK_IMPORTED_MODULE_2__.TextArea, { value: inputValue, onChange: handleInputChange, onKeyDown: handleKeyPress, placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u043E\u0432\u0430\u0440\u044B (\u043A\u0430\u0436\u0434\u0430\u044F \u043D\u043E\u0432\u0430\u044F \u0441\u0442\u0440\u043E\u043A\u0430 - \u043D\u043E\u0432\u044B\u0439 \u0442\u043E\u0432\u0430\u0440)" }, void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {}, void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_5__["default"], __assign({ onClick: handleAddProduct, size: "small" }, { children: "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C" }), void 0)] }, void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", { children: "\u0414\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u043D\u044B\u0435 \u0442\u043E\u0432\u0430\u0440\u044B:" }, void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: productList.map(function (product, index) { return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_6__["default"], __assign({ sx: { flexGrow: 1, overflow: 'hidden' } }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Item, __assign({ sx: { my: 1, p: 2 } }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_7__["default"], __assign({ direction: "column", justifyContent: "flex-start", alignItems: "flex-start", spacing: 1 }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_7__["default"], __assign({ sx: { minWidth: 0 } }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], __assign({ noWrap: true }, { children: product }), void 0) }), void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_5__["default"], __assign({ onClick: function () { return handleRemoveProduct(index); }, size: "small" }, { children: "\u0423\u0434\u0430\u043B\u0438\u0442\u044C" }), void 0)] }), void 0) }), void 0) }), index)); }) }, void 0)] }, void 0)] }, void 0));
};


/***/ }),

/***/ "./src/features/EditBasicGood/index.ts":
/*!*********************************************!*\
  !*** ./src/features/EditBasicGood/index.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditBasicGood": () => (/* reexport safe */ _ui_EditBasicGood__WEBPACK_IMPORTED_MODULE_0__.EditBasicGood)
/* harmony export */ });
/* harmony import */ var _ui_EditBasicGood__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui/EditBasicGood */ "./src/features/EditBasicGood/ui/EditBasicGood.tsx");



/***/ }),

/***/ "./src/features/EditBasicGood/ui/EditBasicGood.tsx":
/*!*********************************************************!*\
  !*** ./src/features/EditBasicGood/ui/EditBasicGood.tsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditBasicGood": () => (/* binding */ EditBasicGood)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/TextField */ "./node_modules/@mui/material/TextField/TextField.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Button/Button.js");
/* harmony import */ var shared_ui_TextArea_TextArea__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared/ui/TextArea/TextArea */ "./src/shared/ui/TextArea/TextArea.tsx");
/* harmony import */ var _mui_material_Checkbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/Checkbox */ "./node_modules/@mui/material/Checkbox/Checkbox.js");
/* harmony import */ var _mui_material_FormControlLabel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/FormControlLabel */ "./node_modules/@mui/material/FormControlLabel/FormControlLabel.js");
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






var EditBasicGood = function () {
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_2__["default"], { id: "standard-textarea", label: "ID", placeholder: "ID", multiline: true, variant: "standard", type: "number", sx: { width: { xs: '100%', sm: 483 } } }, void 0) }, void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_2__["default"], { id: "standard-textarea", label: "CS GO", placeholder: "CS GO", multiline: true, variant: "standard", sx: { width: { xs: '100%', sm: 483 } } }, void 0) }, void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_2__["default"], { id: "standard-textarea", label: "\u0426\u0435\u043D\u0430", type: "number", placeholder: "269", multiline: true, variant: "standard", sx: { width: { xs: '100%', sm: 483 } } }, void 0) }, void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_2__["default"], { id: "standard-textarea", label: "\u0421\u0442\u0430\u0440\u0430\u044F \u0446\u0435\u043D\u0430", type: "number", placeholder: "1269", multiline: true, variant: "standard", sx: { width: { xs: '100%', sm: 483 } } }, void 0) }, void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_2__["default"], { id: "standard-textarea", label: "\u0421\u043A\u0438\u0434\u043A\u0430", type: "number", placeholder: "69", multiline: true, variant: "standard", sx: { width: { xs: '100%', sm: 483 } } }, void 0) }, void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_2__["default"], { id: "standard-textarea", label: "08.02.2018", placeholder: "08.02.2018", multiline: true, variant: "standard", sx: { width: { xs: '100%', sm: 483 } } }, void 0) }, void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_2__["default"], { id: "standard-textarea", label: "\u0418\u043D\u0434\u0438, \u041E\u043D\u043B\u0430\u0439\u043D", placeholder: "\u0418\u043D\u0434\u0438, \u041E\u043D\u043B\u0430\u0439\u043D", multiline: true, variant: "standard", sx: { width: { xs: '100%', sm: 483 } } }, void 0) }, void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {}, void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_TextArea_TextArea__WEBPACK_IMPORTED_MODULE_1__.TextArea, { value: '', onChange: function () { }, onKeyDown: function () { }, placeholder: "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u0442\u043E\u0432\u0430\u0440\u0430", sx: { width: '100%' } }, void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_2__["default"], { id: "standard-textarea", label: "description", placeholder: "description", multiline: true, variant: "standard", sx: { width: { xs: '100%', sm: 483 } } }, void 0) }, void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_2__["default"], { id: "standard-textarea", label: "keywords", placeholder: "keywords", multiline: true, variant: "standard", sx: { width: { xs: '100%', sm: 483 } } }, void 0) }, void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_2__["default"], { id: "standard-textarea", label: "metaOgTitle", placeholder: "metaOgTitle", multiline: true, variant: "standard", sx: { width: { xs: '100%', sm: 483 } } }, void 0) }, void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_2__["default"], { id: "standard-textarea", label: "metaOgDescription", placeholder: "metaOgDescription", multiline: true, variant: "standard", sx: { width: { xs: '100%', sm: 483 } } }, void 0) }, void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_2__["default"], { id: "standard-textarea", label: "metaOgUrl", placeholder: "metaOgUrl", multiline: true, variant: "standard", sx: { width: { xs: '100%', sm: 483 } } }, void 0) }, void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_2__["default"], { id: "standard-textarea", label: "canonical", placeholder: "canonical", multiline: true, variant: "standard", sx: { width: { xs: '100%', sm: 483 } } }, void 0) }, void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_2__["default"], { id: "standard-textarea", label: "link (\u041E\u043F\u043B\u0430\u0442\u0430)", placeholder: "link (\u041E\u043F\u043B\u0430\u0442\u0430)", multiline: true, variant: "standard", sx: { width: { xs: '100%', sm: 483 } } }, void 0) }, void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_FormControlLabel__WEBPACK_IMPORTED_MODULE_3__["default"], { value: "\u0421\u043D\u0438\u0436\u0435\u043D\u0438\u0435 \u0446\u0435\u043D", control: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Checkbox__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0), label: "\u0421\u043D\u0438\u0436\u0435\u043D\u0438\u0435 \u0446\u0435\u043D", labelPlacement: "start" }, void 0) }, void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_FormControlLabel__WEBPACK_IMPORTED_MODULE_3__["default"], { value: "\u041B\u0438\u0434\u0435\u0440\u044B \u043F\u0440\u043E\u0434\u0430\u0436", control: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Checkbox__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0), label: "\u041B\u0438\u0434\u0435\u0440\u044B \u043F\u0440\u043E\u0434\u0430\u0436", labelPlacement: "start" }, void 0) }, void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_FormControlLabel__WEBPACK_IMPORTED_MODULE_3__["default"], { value: "\u041D\u043E\u0432\u0438\u043D\u043A\u0438", control: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Checkbox__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0), label: "\u041D\u043E\u0432\u0438\u043D\u043A\u0438", labelPlacement: "start" }, void 0) }, void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_FormControlLabel__WEBPACK_IMPORTED_MODULE_3__["default"], { value: "\u0425\u0438\u0442\u044B \u043F\u0440\u043E\u0434\u0430\u0436 (\u043C\u0430\u043A\u0441 5 \u0448\u0442)", control: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Checkbox__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0), label: "\u0425\u0438\u0442\u044B \u043F\u0440\u043E\u0434\u0430\u0436 (\u043C\u0430\u043A\u0441 5 \u0448\u0442)", labelPlacement: "start" }, void 0) }, void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {}, void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {}, void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], __assign({ variant: "contained" }, { children: "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C" }), void 0)] }, void 0));
};


/***/ }),

/***/ "./src/features/ItemAddImage/index.ts":
/*!********************************************!*\
  !*** ./src/features/ItemAddImage/index.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemAddImage": () => (/* reexport safe */ _ui_ItemAddImage__WEBPACK_IMPORTED_MODULE_0__.ItemAddImage)
/* harmony export */ });
/* harmony import */ var _ui_ItemAddImage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui/ItemAddImage */ "./src/features/ItemAddImage/ui/ItemAddImage.tsx");



/***/ }),

/***/ "./src/features/ItemAddImage/ui/ItemAddImage.tsx":
/*!*******************************************************!*\
  !*** ./src/features/ItemAddImage/ui/ItemAddImage.tsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemAddImage": () => (/* binding */ ItemAddImage)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Card/Card.js");
/* harmony import */ var _mui_material_CardMedia__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/CardMedia */ "./node_modules/@mui/material/CardMedia/CardMedia.js");
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/Button */ "./node_modules/@mui/material/Button/Button.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
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
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};





var ItemAddImage = function () {
    var _a = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), selectedFile = _a[0], setSelectedFile = _a[1];
    var _b = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), uploadedFiles = _b[0], setUploadedFiles = _b[1];
    var handleFileChange = function (event) {
        var files = Array.from(event.target.files);
        setSelectedFile(files[0]);
        setUploadedFiles(function (prevFiles) { return __spreadArray(__spreadArray([], prevFiles, true), [files[0]], false); });
    };
    var handleRemoveFile = function (index) {
        setUploadedFiles(function (prevFiles) { return prevFiles.filter(function (_, i) { return i !== index; }); });
    };
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { type: "file", onChange: handleFileChange }, void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", { children: "\u0417\u0430\u0433\u0440\u0443\u0436\u0435\u043D\u043D\u044B\u0435 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F:" }, void 0), uploadedFiles.map(function (file, index) { return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__["default"], __assign({ sx: { maxWidth: 345 } }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_CardMedia__WEBPACK_IMPORTED_MODULE_3__["default"], { component: "img", sx: { height: 140 }, image: URL.createObjectURL(file), alt: "Paella dish" }, void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_4__["default"], __assign({ onClick: function () { return handleRemoveFile(index); }, size: "small" }, { children: "\u0423\u0434\u0430\u043B\u0438\u0442\u044C" }), void 0)] }), index)); })] }, void 0));
};


/***/ }),

/***/ "./src/pages/IndividualEditPage/ui/IndividualEditPage.tsx":
/*!****************************************************************!*\
  !*** ./src/pages/IndividualEditPage/ui/IndividualEditPage.tsx ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/CardContent/CardContent.js");
/* harmony import */ var shared_ui_Card_Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared/ui/Card/Card */ "./src/shared/ui/Card/Card.tsx");
/* harmony import */ var widgets_GoodsInside__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! widgets/GoodsInside */ "./src/widgets/GoodsInside/index.ts");
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




var IndividualEditPage = function () {
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_Card_Card__WEBPACK_IMPORTED_MODULE_1__["default"], __assign({ sx: { mt: 2, p: 2 } }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(widgets_GoodsInside__WEBPACK_IMPORTED_MODULE_2__.GoodsInside, {}, void 0) }, void 0) }), void 0));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IndividualEditPage);


/***/ }),

/***/ "./src/shared/ui/TextArea/TextArea.tsx":
/*!*********************************************!*\
  !*** ./src/shared/ui/TextArea/TextArea.tsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TextArea": () => (/* binding */ TextArea)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material/styles */ "./node_modules/@mui/material/styles/styled.js");
/* harmony import */ var _mui_material_TextareaAutosize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/TextareaAutosize */ "./node_modules/@mui/base/TextareaAutosize/TextareaAutosize.js");



var StyledTextarea = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__["default"])(_mui_material_TextareaAutosize__WEBPACK_IMPORTED_MODULE_2__["default"])(function (_a) {
    var theme = _a.theme;
    return ({
        width: '100%',
        padding: theme.spacing(1),
        borderRadius: '12px 12px 0 12px',
        color: theme.palette.mode === 'dark' ? theme.palette.grey[300] : theme.palette.grey[900],
        backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[900] : '#fff',
        border: "1px solid ".concat(theme.palette.mode === 'dark' ? theme.palette.grey[700] : theme.palette.grey[200]),
        boxShadow: "0px 2px 2px ".concat(theme.palette.mode === 'dark' ? theme.palette.grey[900] : theme.palette.grey[50]),
        '&:hover': {
            borderColor: theme.palette.primary.main,
        },
    });
});
var TextArea = function (_a) {
    var value = _a.value, onChange = _a.onChange, onKeyDown = _a.onKeyDown, placeholder = _a.placeholder, sx = _a.sx;
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(StyledTextarea, { minRows: 3, value: value, onChange: onChange, onKeyDown: onKeyDown, placeholder: placeholder, sx: sx }, void 0));
};


/***/ }),

/***/ "./src/widgets/GoodsInside/index.ts":
/*!******************************************!*\
  !*** ./src/widgets/GoodsInside/index.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GoodsInside": () => (/* reexport safe */ _ui_GoodsInside__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _ui_GoodsInside__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui/GoodsInside */ "./src/widgets/GoodsInside/ui/GoodsInside.tsx");




/***/ }),

/***/ "./src/widgets/GoodsInside/ui/GoodsInside.tsx":
/*!****************************************************!*\
  !*** ./src/widgets/GoodsInside/ui/GoodsInside.tsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Typography */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _mui_material_Tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Tabs */ "./node_modules/@mui/material/Tabs/Tabs.js");
/* harmony import */ var _mui_material_Tab__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/Tab */ "./node_modules/@mui/material/Tab/Tab.js");
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Box */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var features_ItemAddImage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! features/ItemAddImage */ "./src/features/ItemAddImage/index.ts");
/* harmony import */ var features_AddGoods__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! features/AddGoods */ "./src/features/AddGoods/index.ts");
/* harmony import */ var features_EditBasicGood__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! features/EditBasicGood */ "./src/features/EditBasicGood/index.ts");
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
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};









function CustomTabPanel(props) {
    var children = props.children, value = props.value, index = props.index, other = __rest(props, ["children", "value", "index"]);
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ role: "tabpanel", hidden: value !== index, id: "simple-tabpanel-".concat(index), "aria-labelledby": "simple-tab-".concat(index) }, other, { children: value === index && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_5__["default"], __assign({ sx: { p: 3 } }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], { children: children }, void 0) }), void 0)) }), void 0));
}
function a11yProps(index) {
    return {
        id: "simple-tab-".concat(index),
        'aria-controls': "simple-tabpanel-".concat(index),
    };
}
var GoodsInside = function () {
    var _a = react__WEBPACK_IMPORTED_MODULE_4__.useState(0), value = _a[0], setValue = _a[1];
    var handleChange = function (event, newValue) {
        setValue(newValue);
    };
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_5__["default"], __assign({ sx: { borderBottom: 1, borderColor: 'divider', maxWidth: { xs: 320, sm: 483 } } }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Tabs__WEBPACK_IMPORTED_MODULE_7__["default"], __assign({ value: value, onChange: handleChange, variant: "scrollable", scrollButtons: "auto", "aria-label": "scrollable auto tabs example" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Tab__WEBPACK_IMPORTED_MODULE_8__["default"], __assign({ label: "\u041E\u0441\u043D\u043E\u0432\u043D\u043E\u0435" }, a11yProps(0)), void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Tab__WEBPACK_IMPORTED_MODULE_8__["default"], __assign({ label: "\u0413\u0430\u043B\u0435\u0440\u0435\u044F" }, a11yProps(1)), void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Tab__WEBPACK_IMPORTED_MODULE_8__["default"], __assign({ label: "\u0421\u043E\u0434\u0435\u0440\u0436\u0438\u043C\u043E\u0435" }, a11yProps(2)), void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Tab__WEBPACK_IMPORTED_MODULE_8__["default"], __assign({ label: "\u041F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u044B" }, a11yProps(3)), void 0)] }), void 0) }), void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(CustomTabPanel, __assign({ value: value, index: 0 }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(features_EditBasicGood__WEBPACK_IMPORTED_MODULE_3__.EditBasicGood, {}, void 0) }), void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(CustomTabPanel, __assign({ value: value, index: 1 }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(features_ItemAddImage__WEBPACK_IMPORTED_MODULE_1__.ItemAddImage, {}, void 0) }), void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(CustomTabPanel, __assign({ value: value, index: 2 }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(features_AddGoods__WEBPACK_IMPORTED_MODULE_2__.AddGoods, {}, void 0) }), void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(CustomTabPanel, __assign({ value: value, index: 3 }, { children: "\u041F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u044B" }), void 0)] }, void 0));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GoodsInside);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3BhZ2VzX0luZGl2aWR1YWxFZGl0UGFnZV91aV9JbmRpdmlkdWFsRWRpdFBhZ2VfdHN4LjBmNTg0YWY5ZWM1ZjZlYmJjOTQ0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQXlDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBekMsZ0JBQWdCLFNBQUksSUFBSSxTQUFJO0FBQzVCO0FBQ0EsaURBQWlELE9BQU87QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixTQUFJLElBQUksU0FBSTtBQUNqQyw2RUFBNkUsT0FBTztBQUNwRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNzRjtBQUMxQztBQUNGO0FBQ047QUFDSTtBQUNBO0FBQ007QUFDSTtBQUNLO0FBQ3ZELFdBQVcsZ0VBQU0sQ0FBQywyREFBSztBQUN2QjtBQUNBLGdDQUFnQyxxRUFBcUUsNkJBQTZCLG9HQUFvRztBQUN0TyxDQUFDO0FBQ007QUFDUCxhQUFhLCtDQUFRO0FBQ3JCLGFBQWEsK0NBQVE7QUFDckIsSUFBSSxnREFBUztBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLElBQUksZ0RBQVM7QUFDYjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMscUJBQXFCO0FBQ3hELHNDQUFzQyxxQkFBcUI7QUFDM0Q7QUFDQSxpREFBaUQsMEVBQTBFO0FBQzNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLHlDQUF5QyxxQkFBcUIsSUFBSTtBQUMvRztBQUNBLFlBQVksdURBQUssQ0FBQyx1REFBUyxJQUFJLFdBQVcsdURBQUssVUFBVSxXQUFXLHNEQUFJLENBQUMsaUVBQVEsSUFBSSxzVkFBc1YsV0FBVyxzREFBSSxTQUFTLFdBQVcsc0RBQUksQ0FBQyw0REFBTSxhQUFhLDBDQUEwQyxJQUFJLDhEQUE4RCxhQUFh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QUFLLENBQUMsdURBQVMsSUFBSSxXQUFXLHNEQUFJLENBQUMseURBQUcsYUFBYSxNQUFNLHFEQUFxRCxzQkFBc0IsSUFBSSxVQUFVLHVEQUFLLENBQUMsMERBQUksYUFBYSxrSUFBa0ksSUFBSSxXQUFXLHNEQUFJLENBQUMseURBQUcsYUFBYSwyREFBMkQsMEJBQTBCLHNEQUFJLENBQUMseURBQUcsYUFBYSxxREFBcUQsMEJBQTBCLHNEQUFJLENBQUMseURBQUcsYUFBYSx1RUFBdUUsMEJBQTBCLHNEQUFJLENBQUMseURBQUcsYUFBYSxpRUFBaUUsMkJBQTJCLFlBQVksWUFBWSxzREFBSSw0QkFBNEIsd0JBQXdCLElBQUksVUFBVSxzREFBSSxDQUFDLGlFQUFhLElBQUksV0FBVyxZQUFZLHNEQUFJLDRCQUE0Qix3QkFBd0IsSUFBSSxVQUFVLHNEQUFJLENBQUMsK0RBQVksSUFBSSxXQUFXLFlBQVksc0RBQUksNEJBQTRCLHdCQUF3QixJQUFJLFVBQVUsc0RBQUksQ0FBQyx1REFBUSxJQUFJLFdBQVcsWUFBWSxzREFBSSw0QkFBNEIsd0JBQXdCLElBQUksb0VBQW9FLGFBQWE7QUFDbnZDO0FBQ0EsaUVBQWUsV0FBVyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYWRtaW4tcGFuZWwvLi9zcmMvZmVhdHVyZXMvQWRkR29vZHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vYWRtaW4tcGFuZWwvLi9zcmMvZmVhdHVyZXMvQWRkR29vZHMvdWkvQWRkR29vZHMudHN4Iiwid2VicGFjazovL2FkbWluLXBhbmVsLy4vc3JjL2ZlYXR1cmVzL0VkaXRCYXNpY0dvb2QvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vYWRtaW4tcGFuZWwvLi9zcmMvZmVhdHVyZXMvRWRpdEJhc2ljR29vZC91aS9FZGl0QmFzaWNHb29kLnRzeCIsIndlYnBhY2s6Ly9hZG1pbi1wYW5lbC8uL3NyYy9mZWF0dXJlcy9JdGVtQWRkSW1hZ2UvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vYWRtaW4tcGFuZWwvLi9zcmMvZmVhdHVyZXMvSXRlbUFkZEltYWdlL3VpL0l0ZW1BZGRJbWFnZS50c3giLCJ3ZWJwYWNrOi8vYWRtaW4tcGFuZWwvLi9zcmMvcGFnZXMvSW5kaXZpZHVhbEVkaXRQYWdlL3VpL0luZGl2aWR1YWxFZGl0UGFnZS50c3giLCJ3ZWJwYWNrOi8vYWRtaW4tcGFuZWwvLi9zcmMvc2hhcmVkL3VpL1RleHRBcmVhL1RleHRBcmVhLnRzeCIsIndlYnBhY2s6Ly9hZG1pbi1wYW5lbC8uL3NyYy93aWRnZXRzL0dvb2RzSW5zaWRlL2luZGV4LnRzIiwid2VicGFjazovL2FkbWluLXBhbmVsLy4vc3JjL3dpZGdldHMvR29vZHNJbnNpZGUvdWkvR29vZHNJbnNpZGUudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB7IEFkZEdvb2RzIH0gZnJvbSAnLi91aS9BZGRHb29kcyc7XG4iLCJ2YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xudmFyIF9fc3ByZWFkQXJyYXkgPSAodGhpcyAmJiB0aGlzLl9fc3ByZWFkQXJyYXkpIHx8IGZ1bmN0aW9uICh0bywgZnJvbSwgcGFjaykge1xuICAgIGlmIChwYWNrIHx8IGFyZ3VtZW50cy5sZW5ndGggPT09IDIpIGZvciAodmFyIGkgPSAwLCBsID0gZnJvbS5sZW5ndGgsIGFyOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGlmIChhciB8fCAhKGkgaW4gZnJvbSkpIHtcbiAgICAgICAgICAgIGlmICghYXIpIGFyID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZnJvbSwgMCwgaSk7XG4gICAgICAgICAgICBhcltpXSA9IGZyb21baV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRvLmNvbmNhdChhciB8fCBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChmcm9tKSk7XG59O1xuaW1wb3J0IHsganN4IGFzIF9qc3gsIGpzeHMgYXMgX2pzeHMsIEZyYWdtZW50IGFzIF9GcmFnbWVudCB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBCdXR0b24gZnJvbSAnQG11aS9tYXRlcmlhbC9CdXR0b24nO1xuaW1wb3J0IEJveCBmcm9tICdAbXVpL21hdGVyaWFsL0JveCc7XG5pbXBvcnQgUGFwZXIgZnJvbSAnQG11aS9tYXRlcmlhbC9QYXBlcic7XG5pbXBvcnQgU3RhY2sgZnJvbSAnQG11aS9tYXRlcmlhbC9TdGFjayc7XG5pbXBvcnQgeyBzdHlsZWQgfSBmcm9tICdAbXVpL21hdGVyaWFsL3N0eWxlcyc7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbXVpL21hdGVyaWFsL1R5cG9ncmFwaHknO1xuaW1wb3J0IHsgVGV4dEFyZWEgfSBmcm9tICdzaGFyZWQvdWkvVGV4dEFyZWEvVGV4dEFyZWEnO1xudmFyIEl0ZW0gPSBzdHlsZWQoUGFwZXIpKGZ1bmN0aW9uIChfYSkge1xuICAgIHZhciB0aGVtZSA9IF9hLnRoZW1lO1xuICAgIHJldHVybiAoX19hc3NpZ24oX19hc3NpZ24oeyBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gJ2RhcmsnID8gJyMxQTIwMjcnIDogJyNmZmYnIH0sIHRoZW1lLnR5cG9ncmFwaHkuYm9keTIpLCB7IHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMSksIHRleHRBbGlnbjogJ2NlbnRlcicsIGNvbG9yOiB0aGVtZS5wYWxldHRlLnRleHQuc2Vjb25kYXJ5LCBtYXhXaWR0aDogNDAwIH0pKTtcbn0pO1xuZXhwb3J0IHZhciBBZGRHb29kcyA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX2EgPSB1c2VTdGF0ZSgnJyksIGlucHV0VmFsdWUgPSBfYVswXSwgc2V0SW5wdXRWYWx1ZSA9IF9hWzFdO1xuICAgIHZhciBfYiA9IHVzZVN0YXRlKFtdKSwgcHJvZHVjdExpc3QgPSBfYlswXSwgc2V0UHJvZHVjdExpc3QgPSBfYlsxXTtcbiAgICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgc3RvcmVkUHJvZHVjdExpc3QgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvZHVjdExpc3QnKTtcbiAgICAgICAgaWYgKHN0b3JlZFByb2R1Y3RMaXN0KSB7XG4gICAgICAgICAgICBzZXRQcm9kdWN0TGlzdChKU09OLnBhcnNlKHN0b3JlZFByb2R1Y3RMaXN0KSk7XG4gICAgICAgIH1cbiAgICB9LCBbXSk7XG4gICAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2R1Y3RMaXN0JywgSlNPTi5zdHJpbmdpZnkocHJvZHVjdExpc3QpKTtcbiAgICB9LCBbcHJvZHVjdExpc3RdKTtcbiAgICB2YXIgaGFuZGxlSW5wdXRDaGFuZ2UgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgc2V0SW5wdXRWYWx1ZShldmVudC50YXJnZXQudmFsdWUpO1xuICAgIH07XG4gICAgdmFyIGhhbmRsZUFkZFByb2R1Y3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBwcm9kdWN0cyA9IGlucHV0VmFsdWVcbiAgICAgICAgICAgIC5zcGxpdCgnXFxuJylcbiAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKGxpbmUpIHsgcmV0dXJuIGxpbmUudHJpbSgpOyB9KVxuICAgICAgICAgICAgLmZpbHRlcihmdW5jdGlvbiAobGluZSkgeyByZXR1cm4gbGluZSAhPT0gJyc7IH0pO1xuICAgICAgICBpZiAocHJvZHVjdHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgc2V0UHJvZHVjdExpc3QoZnVuY3Rpb24gKHByZXZMaXN0KSB7IHJldHVybiBfX3NwcmVhZEFycmF5KF9fc3ByZWFkQXJyYXkoW10sIHByZXZMaXN0LCB0cnVlKSwgcHJvZHVjdHMsIHRydWUpOyB9KTtcbiAgICAgICAgICAgIHNldElucHV0VmFsdWUoJycpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICB2YXIgaGFuZGxlS2V5UHJlc3MgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgaWYgKGV2ZW50LmtleSA9PT0gJ0VudGVyJyAmJiAhZXZlbnQuc2hpZnRLZXkpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBoYW5kbGVBZGRQcm9kdWN0KCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHZhciBoYW5kbGVSZW1vdmVQcm9kdWN0ID0gZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICAgIHNldFByb2R1Y3RMaXN0KGZ1bmN0aW9uIChwcmV2TGlzdCkgeyByZXR1cm4gcHJldkxpc3QuZmlsdGVyKGZ1bmN0aW9uIChfLCBpKSB7IHJldHVybiBpICE9PSBpbmRleDsgfSk7IH0pO1xuICAgIH07XG4gICAgcmV0dXJuIChfanN4cyhfRnJhZ21lbnQsIHsgY2hpbGRyZW46IFtfanN4cyhcImRpdlwiLCB7IGNoaWxkcmVuOiBbX2pzeChUZXh0QXJlYSwgeyB2YWx1ZTogaW5wdXRWYWx1ZSwgb25DaGFuZ2U6IGhhbmRsZUlucHV0Q2hhbmdlLCBvbktleURvd246IGhhbmRsZUtleVByZXNzLCBwbGFjZWhvbGRlcjogXCJcXHUwNDEyXFx1MDQzMlxcdTA0MzVcXHUwNDM0XFx1MDQzOFxcdTA0NDJcXHUwNDM1IFxcdTA0NDJcXHUwNDNFXFx1MDQzMlxcdTA0MzBcXHUwNDQwXFx1MDQ0QiAoXFx1MDQzQVxcdTA0MzBcXHUwNDM2XFx1MDQzNFxcdTA0MzBcXHUwNDRGIFxcdTA0M0RcXHUwNDNFXFx1MDQzMlxcdTA0MzBcXHUwNDRGIFxcdTA0NDFcXHUwNDQyXFx1MDQ0MFxcdTA0M0VcXHUwNDNBXFx1MDQzMCAtIFxcdTA0M0RcXHUwNDNFXFx1MDQzMlxcdTA0NEJcXHUwNDM5IFxcdTA0NDJcXHUwNDNFXFx1MDQzMlxcdTA0MzBcXHUwNDQwKVwiIH0sIHZvaWQgMCksIF9qc3goXCJiclwiLCB7fSwgdm9pZCAwKSwgX2pzeChCdXR0b24sIF9fYXNzaWduKHsgb25DbGljazogaGFuZGxlQWRkUHJvZHVjdCwgc2l6ZTogXCJzbWFsbFwiIH0sIHsgY2hpbGRyZW46IFwiXFx1MDQxNFxcdTA0M0VcXHUwNDMxXFx1MDQzMFxcdTA0MzJcXHUwNDM4XFx1MDQ0MlxcdTA0NENcIiB9KSwgdm9pZCAwKV0gfSwgdm9pZCAwKSwgX2pzeHMoXCJkaXZcIiwgeyBjaGlsZHJlbjogW19qc3goXCJoM1wiLCB7IGNoaWxkcmVuOiBcIlxcdTA0MTRcXHUwNDNFXFx1MDQzMVxcdTA0MzBcXHUwNDMyXFx1MDQzQlxcdTA0MzVcXHUwNDNEXFx1MDQzRFxcdTA0NEJcXHUwNDM1IFxcdTA0NDJcXHUwNDNFXFx1MDQzMlxcdTA0MzBcXHUwNDQwXFx1MDQ0QjpcIiB9LCB2b2lkIDApLCBfanN4KFwiZGl2XCIsIHsgY2hpbGRyZW46IHByb2R1Y3RMaXN0Lm1hcChmdW5jdGlvbiAocHJvZHVjdCwgaW5kZXgpIHsgcmV0dXJuIChfanN4KEJveCwgX19hc3NpZ24oeyBzeDogeyBmbGV4R3JvdzogMSwgb3ZlcmZsb3c6ICdoaWRkZW4nIH0gfSwgeyBjaGlsZHJlbjogX2pzeChJdGVtLCBfX2Fzc2lnbih7IHN4OiB7IG15OiAxLCBwOiAyIH0gfSwgeyBjaGlsZHJlbjogX2pzeHMoU3RhY2ssIF9fYXNzaWduKHsgZGlyZWN0aW9uOiBcImNvbHVtblwiLCBqdXN0aWZ5Q29udGVudDogXCJmbGV4LXN0YXJ0XCIsIGFsaWduSXRlbXM6IFwiZmxleC1zdGFydFwiLCBzcGFjaW5nOiAxIH0sIHsgY2hpbGRyZW46IFtfanN4KFN0YWNrLCBfX2Fzc2lnbih7IHN4OiB7IG1pbldpZHRoOiAwIH0gfSwgeyBjaGlsZHJlbjogX2pzeChUeXBvZ3JhcGh5LCBfX2Fzc2lnbih7IG5vV3JhcDogdHJ1ZSB9LCB7IGNoaWxkcmVuOiBwcm9kdWN0IH0pLCB2b2lkIDApIH0pLCB2b2lkIDApLCBfanN4KEJ1dHRvbiwgX19hc3NpZ24oeyBvbkNsaWNrOiBmdW5jdGlvbiAoKSB7IHJldHVybiBoYW5kbGVSZW1vdmVQcm9kdWN0KGluZGV4KTsgfSwgc2l6ZTogXCJzbWFsbFwiIH0sIHsgY2hpbGRyZW46IFwiXFx1MDQyM1xcdTA0MzRcXHUwNDMwXFx1MDQzQlxcdTA0MzhcXHUwNDQyXFx1MDQ0Q1wiIH0pLCB2b2lkIDApXSB9KSwgdm9pZCAwKSB9KSwgdm9pZCAwKSB9KSwgaW5kZXgpKTsgfSkgfSwgdm9pZCAwKV0gfSwgdm9pZCAwKV0gfSwgdm9pZCAwKSk7XG59O1xuIiwiZXhwb3J0IHsgRWRpdEJhc2ljR29vZCB9IGZyb20gJy4vdWkvRWRpdEJhc2ljR29vZCc7XG4iLCJ2YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xuaW1wb3J0IHsganN4IGFzIF9qc3gsIEZyYWdtZW50IGFzIF9GcmFnbWVudCwganN4cyBhcyBfanN4cyB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuaW1wb3J0IFRleHRGaWVsZCBmcm9tICdAbXVpL21hdGVyaWFsL1RleHRGaWVsZCc7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdAbXVpL21hdGVyaWFsJztcbmltcG9ydCB7IFRleHRBcmVhIH0gZnJvbSAnc2hhcmVkL3VpL1RleHRBcmVhL1RleHRBcmVhJztcbmltcG9ydCBDaGVja2JveCBmcm9tICdAbXVpL21hdGVyaWFsL0NoZWNrYm94JztcbmltcG9ydCBGb3JtQ29udHJvbExhYmVsIGZyb20gJ0BtdWkvbWF0ZXJpYWwvRm9ybUNvbnRyb2xMYWJlbCc7XG5leHBvcnQgdmFyIEVkaXRCYXNpY0dvb2QgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIChfanN4cyhfRnJhZ21lbnQsIHsgY2hpbGRyZW46IFtfanN4KFwiZGl2XCIsIHsgY2hpbGRyZW46IF9qc3goVGV4dEZpZWxkLCB7IGlkOiBcInN0YW5kYXJkLXRleHRhcmVhXCIsIGxhYmVsOiBcIklEXCIsIHBsYWNlaG9sZGVyOiBcIklEXCIsIG11bHRpbGluZTogdHJ1ZSwgdmFyaWFudDogXCJzdGFuZGFyZFwiLCB0eXBlOiBcIm51bWJlclwiLCBzeDogeyB3aWR0aDogeyB4czogJzEwMCUnLCBzbTogNDgzIH0gfSB9LCB2b2lkIDApIH0sIHZvaWQgMCksIF9qc3goXCJkaXZcIiwgeyBjaGlsZHJlbjogX2pzeChUZXh0RmllbGQsIHsgaWQ6IFwic3RhbmRhcmQtdGV4dGFyZWFcIiwgbGFiZWw6IFwiQ1MgR09cIiwgcGxhY2Vob2xkZXI6IFwiQ1MgR09cIiwgbXVsdGlsaW5lOiB0cnVlLCB2YXJpYW50OiBcInN0YW5kYXJkXCIsIHN4OiB7IHdpZHRoOiB7IHhzOiAnMTAwJScsIHNtOiA0ODMgfSB9IH0sIHZvaWQgMCkgfSwgdm9pZCAwKSwgX2pzeChcImRpdlwiLCB7IGNoaWxkcmVuOiBfanN4KFRleHRGaWVsZCwgeyBpZDogXCJzdGFuZGFyZC10ZXh0YXJlYVwiLCBsYWJlbDogXCJcXHUwNDI2XFx1MDQzNVxcdTA0M0RcXHUwNDMwXCIsIHR5cGU6IFwibnVtYmVyXCIsIHBsYWNlaG9sZGVyOiBcIjI2OVwiLCBtdWx0aWxpbmU6IHRydWUsIHZhcmlhbnQ6IFwic3RhbmRhcmRcIiwgc3g6IHsgd2lkdGg6IHsgeHM6ICcxMDAlJywgc206IDQ4MyB9IH0gfSwgdm9pZCAwKSB9LCB2b2lkIDApLCBfanN4KFwiZGl2XCIsIHsgY2hpbGRyZW46IF9qc3goVGV4dEZpZWxkLCB7IGlkOiBcInN0YW5kYXJkLXRleHRhcmVhXCIsIGxhYmVsOiBcIlxcdTA0MjFcXHUwNDQyXFx1MDQzMFxcdTA0NDBcXHUwNDMwXFx1MDQ0RiBcXHUwNDQ2XFx1MDQzNVxcdTA0M0RcXHUwNDMwXCIsIHR5cGU6IFwibnVtYmVyXCIsIHBsYWNlaG9sZGVyOiBcIjEyNjlcIiwgbXVsdGlsaW5lOiB0cnVlLCB2YXJpYW50OiBcInN0YW5kYXJkXCIsIHN4OiB7IHdpZHRoOiB7IHhzOiAnMTAwJScsIHNtOiA0ODMgfSB9IH0sIHZvaWQgMCkgfSwgdm9pZCAwKSwgX2pzeChcImRpdlwiLCB7IGNoaWxkcmVuOiBfanN4KFRleHRGaWVsZCwgeyBpZDogXCJzdGFuZGFyZC10ZXh0YXJlYVwiLCBsYWJlbDogXCJcXHUwNDIxXFx1MDQzQVxcdTA0MzhcXHUwNDM0XFx1MDQzQVxcdTA0MzBcIiwgdHlwZTogXCJudW1iZXJcIiwgcGxhY2Vob2xkZXI6IFwiNjlcIiwgbXVsdGlsaW5lOiB0cnVlLCB2YXJpYW50OiBcInN0YW5kYXJkXCIsIHN4OiB7IHdpZHRoOiB7IHhzOiAnMTAwJScsIHNtOiA0ODMgfSB9IH0sIHZvaWQgMCkgfSwgdm9pZCAwKSwgX2pzeChcImRpdlwiLCB7IGNoaWxkcmVuOiBfanN4KFRleHRGaWVsZCwgeyBpZDogXCJzdGFuZGFyZC10ZXh0YXJlYVwiLCBsYWJlbDogXCIwOC4wMi4yMDE4XCIsIHBsYWNlaG9sZGVyOiBcIjA4LjAyLjIwMThcIiwgbXVsdGlsaW5lOiB0cnVlLCB2YXJpYW50OiBcInN0YW5kYXJkXCIsIHN4OiB7IHdpZHRoOiB7IHhzOiAnMTAwJScsIHNtOiA0ODMgfSB9IH0sIHZvaWQgMCkgfSwgdm9pZCAwKSwgX2pzeChcImRpdlwiLCB7IGNoaWxkcmVuOiBfanN4KFRleHRGaWVsZCwgeyBpZDogXCJzdGFuZGFyZC10ZXh0YXJlYVwiLCBsYWJlbDogXCJcXHUwNDE4XFx1MDQzRFxcdTA0MzRcXHUwNDM4LCBcXHUwNDFFXFx1MDQzRFxcdTA0M0JcXHUwNDMwXFx1MDQzOVxcdTA0M0RcIiwgcGxhY2Vob2xkZXI6IFwiXFx1MDQxOFxcdTA0M0RcXHUwNDM0XFx1MDQzOCwgXFx1MDQxRVxcdTA0M0RcXHUwNDNCXFx1MDQzMFxcdTA0MzlcXHUwNDNEXCIsIG11bHRpbGluZTogdHJ1ZSwgdmFyaWFudDogXCJzdGFuZGFyZFwiLCBzeDogeyB3aWR0aDogeyB4czogJzEwMCUnLCBzbTogNDgzIH0gfSB9LCB2b2lkIDApIH0sIHZvaWQgMCksIF9qc3goXCJiclwiLCB7fSwgdm9pZCAwKSwgX2pzeChUZXh0QXJlYSwgeyB2YWx1ZTogJycsIG9uQ2hhbmdlOiBmdW5jdGlvbiAoKSB7IH0sIG9uS2V5RG93bjogZnVuY3Rpb24gKCkgeyB9LCBwbGFjZWhvbGRlcjogXCJcXHUwNDFFXFx1MDQzRlxcdTA0MzhcXHUwNDQxXFx1MDQzMFxcdTA0M0RcXHUwNDM4XFx1MDQzNSBcXHUwNDQyXFx1MDQzRVxcdTA0MzJcXHUwNDMwXFx1MDQ0MFxcdTA0MzBcIiwgc3g6IHsgd2lkdGg6ICcxMDAlJyB9IH0sIHZvaWQgMCksIF9qc3goXCJkaXZcIiwgeyBjaGlsZHJlbjogX2pzeChUZXh0RmllbGQsIHsgaWQ6IFwic3RhbmRhcmQtdGV4dGFyZWFcIiwgbGFiZWw6IFwiZGVzY3JpcHRpb25cIiwgcGxhY2Vob2xkZXI6IFwiZGVzY3JpcHRpb25cIiwgbXVsdGlsaW5lOiB0cnVlLCB2YXJpYW50OiBcInN0YW5kYXJkXCIsIHN4OiB7IHdpZHRoOiB7IHhzOiAnMTAwJScsIHNtOiA0ODMgfSB9IH0sIHZvaWQgMCkgfSwgdm9pZCAwKSwgX2pzeChcImRpdlwiLCB7IGNoaWxkcmVuOiBfanN4KFRleHRGaWVsZCwgeyBpZDogXCJzdGFuZGFyZC10ZXh0YXJlYVwiLCBsYWJlbDogXCJrZXl3b3Jkc1wiLCBwbGFjZWhvbGRlcjogXCJrZXl3b3Jkc1wiLCBtdWx0aWxpbmU6IHRydWUsIHZhcmlhbnQ6IFwic3RhbmRhcmRcIiwgc3g6IHsgd2lkdGg6IHsgeHM6ICcxMDAlJywgc206IDQ4MyB9IH0gfSwgdm9pZCAwKSB9LCB2b2lkIDApLCBfanN4KFwiZGl2XCIsIHsgY2hpbGRyZW46IF9qc3goVGV4dEZpZWxkLCB7IGlkOiBcInN0YW5kYXJkLXRleHRhcmVhXCIsIGxhYmVsOiBcIm1ldGFPZ1RpdGxlXCIsIHBsYWNlaG9sZGVyOiBcIm1ldGFPZ1RpdGxlXCIsIG11bHRpbGluZTogdHJ1ZSwgdmFyaWFudDogXCJzdGFuZGFyZFwiLCBzeDogeyB3aWR0aDogeyB4czogJzEwMCUnLCBzbTogNDgzIH0gfSB9LCB2b2lkIDApIH0sIHZvaWQgMCksIF9qc3goXCJkaXZcIiwgeyBjaGlsZHJlbjogX2pzeChUZXh0RmllbGQsIHsgaWQ6IFwic3RhbmRhcmQtdGV4dGFyZWFcIiwgbGFiZWw6IFwibWV0YU9nRGVzY3JpcHRpb25cIiwgcGxhY2Vob2xkZXI6IFwibWV0YU9nRGVzY3JpcHRpb25cIiwgbXVsdGlsaW5lOiB0cnVlLCB2YXJpYW50OiBcInN0YW5kYXJkXCIsIHN4OiB7IHdpZHRoOiB7IHhzOiAnMTAwJScsIHNtOiA0ODMgfSB9IH0sIHZvaWQgMCkgfSwgdm9pZCAwKSwgX2pzeChcImRpdlwiLCB7IGNoaWxkcmVuOiBfanN4KFRleHRGaWVsZCwgeyBpZDogXCJzdGFuZGFyZC10ZXh0YXJlYVwiLCBsYWJlbDogXCJtZXRhT2dVcmxcIiwgcGxhY2Vob2xkZXI6IFwibWV0YU9nVXJsXCIsIG11bHRpbGluZTogdHJ1ZSwgdmFyaWFudDogXCJzdGFuZGFyZFwiLCBzeDogeyB3aWR0aDogeyB4czogJzEwMCUnLCBzbTogNDgzIH0gfSB9LCB2b2lkIDApIH0sIHZvaWQgMCksIF9qc3goXCJkaXZcIiwgeyBjaGlsZHJlbjogX2pzeChUZXh0RmllbGQsIHsgaWQ6IFwic3RhbmRhcmQtdGV4dGFyZWFcIiwgbGFiZWw6IFwiY2Fub25pY2FsXCIsIHBsYWNlaG9sZGVyOiBcImNhbm9uaWNhbFwiLCBtdWx0aWxpbmU6IHRydWUsIHZhcmlhbnQ6IFwic3RhbmRhcmRcIiwgc3g6IHsgd2lkdGg6IHsgeHM6ICcxMDAlJywgc206IDQ4MyB9IH0gfSwgdm9pZCAwKSB9LCB2b2lkIDApLCBfanN4KFwiZGl2XCIsIHsgY2hpbGRyZW46IF9qc3goVGV4dEZpZWxkLCB7IGlkOiBcInN0YW5kYXJkLXRleHRhcmVhXCIsIGxhYmVsOiBcImxpbmsgKFxcdTA0MUVcXHUwNDNGXFx1MDQzQlxcdTA0MzBcXHUwNDQyXFx1MDQzMClcIiwgcGxhY2Vob2xkZXI6IFwibGluayAoXFx1MDQxRVxcdTA0M0ZcXHUwNDNCXFx1MDQzMFxcdTA0NDJcXHUwNDMwKVwiLCBtdWx0aWxpbmU6IHRydWUsIHZhcmlhbnQ6IFwic3RhbmRhcmRcIiwgc3g6IHsgd2lkdGg6IHsgeHM6ICcxMDAlJywgc206IDQ4MyB9IH0gfSwgdm9pZCAwKSB9LCB2b2lkIDApLCBfanN4KFwiZGl2XCIsIHsgY2hpbGRyZW46IF9qc3goRm9ybUNvbnRyb2xMYWJlbCwgeyB2YWx1ZTogXCJcXHUwNDIxXFx1MDQzRFxcdTA0MzhcXHUwNDM2XFx1MDQzNVxcdTA0M0RcXHUwNDM4XFx1MDQzNSBcXHUwNDQ2XFx1MDQzNVxcdTA0M0RcIiwgY29udHJvbDogX2pzeChDaGVja2JveCwge30sIHZvaWQgMCksIGxhYmVsOiBcIlxcdTA0MjFcXHUwNDNEXFx1MDQzOFxcdTA0MzZcXHUwNDM1XFx1MDQzRFxcdTA0MzhcXHUwNDM1IFxcdTA0NDZcXHUwNDM1XFx1MDQzRFwiLCBsYWJlbFBsYWNlbWVudDogXCJzdGFydFwiIH0sIHZvaWQgMCkgfSwgdm9pZCAwKSwgX2pzeChcImRpdlwiLCB7IGNoaWxkcmVuOiBfanN4KEZvcm1Db250cm9sTGFiZWwsIHsgdmFsdWU6IFwiXFx1MDQxQlxcdTA0MzhcXHUwNDM0XFx1MDQzNVxcdTA0NDBcXHUwNDRCIFxcdTA0M0ZcXHUwNDQwXFx1MDQzRVxcdTA0MzRcXHUwNDMwXFx1MDQzNlwiLCBjb250cm9sOiBfanN4KENoZWNrYm94LCB7fSwgdm9pZCAwKSwgbGFiZWw6IFwiXFx1MDQxQlxcdTA0MzhcXHUwNDM0XFx1MDQzNVxcdTA0NDBcXHUwNDRCIFxcdTA0M0ZcXHUwNDQwXFx1MDQzRVxcdTA0MzRcXHUwNDMwXFx1MDQzNlwiLCBsYWJlbFBsYWNlbWVudDogXCJzdGFydFwiIH0sIHZvaWQgMCkgfSwgdm9pZCAwKSwgX2pzeChcImRpdlwiLCB7IGNoaWxkcmVuOiBfanN4KEZvcm1Db250cm9sTGFiZWwsIHsgdmFsdWU6IFwiXFx1MDQxRFxcdTA0M0VcXHUwNDMyXFx1MDQzOFxcdTA0M0RcXHUwNDNBXFx1MDQzOFwiLCBjb250cm9sOiBfanN4KENoZWNrYm94LCB7fSwgdm9pZCAwKSwgbGFiZWw6IFwiXFx1MDQxRFxcdTA0M0VcXHUwNDMyXFx1MDQzOFxcdTA0M0RcXHUwNDNBXFx1MDQzOFwiLCBsYWJlbFBsYWNlbWVudDogXCJzdGFydFwiIH0sIHZvaWQgMCkgfSwgdm9pZCAwKSwgX2pzeChcImRpdlwiLCB7IGNoaWxkcmVuOiBfanN4KEZvcm1Db250cm9sTGFiZWwsIHsgdmFsdWU6IFwiXFx1MDQyNVxcdTA0MzhcXHUwNDQyXFx1MDQ0QiBcXHUwNDNGXFx1MDQ0MFxcdTA0M0VcXHUwNDM0XFx1MDQzMFxcdTA0MzYgKFxcdTA0M0NcXHUwNDMwXFx1MDQzQVxcdTA0NDEgNSBcXHUwNDQ4XFx1MDQ0MilcIiwgY29udHJvbDogX2pzeChDaGVja2JveCwge30sIHZvaWQgMCksIGxhYmVsOiBcIlxcdTA0MjVcXHUwNDM4XFx1MDQ0MlxcdTA0NEIgXFx1MDQzRlxcdTA0NDBcXHUwNDNFXFx1MDQzNFxcdTA0MzBcXHUwNDM2IChcXHUwNDNDXFx1MDQzMFxcdTA0M0FcXHUwNDQxIDUgXFx1MDQ0OFxcdTA0NDIpXCIsIGxhYmVsUGxhY2VtZW50OiBcInN0YXJ0XCIgfSwgdm9pZCAwKSB9LCB2b2lkIDApLCBfanN4KFwiYnJcIiwge30sIHZvaWQgMCksIF9qc3goXCJiclwiLCB7fSwgdm9pZCAwKSwgX2pzeChCdXR0b24sIF9fYXNzaWduKHsgdmFyaWFudDogXCJjb250YWluZWRcIiB9LCB7IGNoaWxkcmVuOiBcIlxcdTA0MjFcXHUwNDNFXFx1MDQ0NVxcdTA0NDBcXHUwNDMwXFx1MDQzRFxcdTA0MzhcXHUwNDQyXFx1MDQ0Q1wiIH0pLCB2b2lkIDApXSB9LCB2b2lkIDApKTtcbn07XG4iLCJleHBvcnQgeyBJdGVtQWRkSW1hZ2UgfSBmcm9tICcuL3VpL0l0ZW1BZGRJbWFnZSc7XG4iLCJ2YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xudmFyIF9fc3ByZWFkQXJyYXkgPSAodGhpcyAmJiB0aGlzLl9fc3ByZWFkQXJyYXkpIHx8IGZ1bmN0aW9uICh0bywgZnJvbSwgcGFjaykge1xuICAgIGlmIChwYWNrIHx8IGFyZ3VtZW50cy5sZW5ndGggPT09IDIpIGZvciAodmFyIGkgPSAwLCBsID0gZnJvbS5sZW5ndGgsIGFyOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGlmIChhciB8fCAhKGkgaW4gZnJvbSkpIHtcbiAgICAgICAgICAgIGlmICghYXIpIGFyID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZnJvbSwgMCwgaSk7XG4gICAgICAgICAgICBhcltpXSA9IGZyb21baV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRvLmNvbmNhdChhciB8fCBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChmcm9tKSk7XG59O1xuaW1wb3J0IHsganN4IGFzIF9qc3gsIGpzeHMgYXMgX2pzeHMgfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCB7IENhcmQgfSBmcm9tICdAbXVpL21hdGVyaWFsJztcbmltcG9ydCBDYXJkTWVkaWEgZnJvbSAnQG11aS9tYXRlcmlhbC9DYXJkTWVkaWEnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbXVpL21hdGVyaWFsL0J1dHRvbic7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmV4cG9ydCB2YXIgSXRlbUFkZEltYWdlID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBfYSA9IHVzZVN0YXRlKG51bGwpLCBzZWxlY3RlZEZpbGUgPSBfYVswXSwgc2V0U2VsZWN0ZWRGaWxlID0gX2FbMV07XG4gICAgdmFyIF9iID0gdXNlU3RhdGUoW10pLCB1cGxvYWRlZEZpbGVzID0gX2JbMF0sIHNldFVwbG9hZGVkRmlsZXMgPSBfYlsxXTtcbiAgICB2YXIgaGFuZGxlRmlsZUNoYW5nZSA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICB2YXIgZmlsZXMgPSBBcnJheS5mcm9tKGV2ZW50LnRhcmdldC5maWxlcyk7XG4gICAgICAgIHNldFNlbGVjdGVkRmlsZShmaWxlc1swXSk7XG4gICAgICAgIHNldFVwbG9hZGVkRmlsZXMoZnVuY3Rpb24gKHByZXZGaWxlcykgeyByZXR1cm4gX19zcHJlYWRBcnJheShfX3NwcmVhZEFycmF5KFtdLCBwcmV2RmlsZXMsIHRydWUpLCBbZmlsZXNbMF1dLCBmYWxzZSk7IH0pO1xuICAgIH07XG4gICAgdmFyIGhhbmRsZVJlbW92ZUZpbGUgPSBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgc2V0VXBsb2FkZWRGaWxlcyhmdW5jdGlvbiAocHJldkZpbGVzKSB7IHJldHVybiBwcmV2RmlsZXMuZmlsdGVyKGZ1bmN0aW9uIChfLCBpKSB7IHJldHVybiBpICE9PSBpbmRleDsgfSk7IH0pO1xuICAgIH07XG4gICAgcmV0dXJuIChfanN4cyhcImRpdlwiLCB7IGNoaWxkcmVuOiBbX2pzeChcImlucHV0XCIsIHsgdHlwZTogXCJmaWxlXCIsIG9uQ2hhbmdlOiBoYW5kbGVGaWxlQ2hhbmdlIH0sIHZvaWQgMCksIF9qc3goXCJoM1wiLCB7IGNoaWxkcmVuOiBcIlxcdTA0MTdcXHUwNDMwXFx1MDQzM1xcdTA0NDBcXHUwNDQzXFx1MDQzNlxcdTA0MzVcXHUwNDNEXFx1MDQzRFxcdTA0NEJcXHUwNDM1IFxcdTA0MzhcXHUwNDM3XFx1MDQzRVxcdTA0MzFcXHUwNDQwXFx1MDQzMFxcdTA0MzZcXHUwNDM1XFx1MDQzRFxcdTA0MzhcXHUwNDRGOlwiIH0sIHZvaWQgMCksIHVwbG9hZGVkRmlsZXMubWFwKGZ1bmN0aW9uIChmaWxlLCBpbmRleCkgeyByZXR1cm4gKF9qc3hzKENhcmQsIF9fYXNzaWduKHsgc3g6IHsgbWF4V2lkdGg6IDM0NSB9IH0sIHsgY2hpbGRyZW46IFtfanN4KENhcmRNZWRpYSwgeyBjb21wb25lbnQ6IFwiaW1nXCIsIHN4OiB7IGhlaWdodDogMTQwIH0sIGltYWdlOiBVUkwuY3JlYXRlT2JqZWN0VVJMKGZpbGUpLCBhbHQ6IFwiUGFlbGxhIGRpc2hcIiB9LCB2b2lkIDApLCBfanN4KEJ1dHRvbiwgX19hc3NpZ24oeyBvbkNsaWNrOiBmdW5jdGlvbiAoKSB7IHJldHVybiBoYW5kbGVSZW1vdmVGaWxlKGluZGV4KTsgfSwgc2l6ZTogXCJzbWFsbFwiIH0sIHsgY2hpbGRyZW46IFwiXFx1MDQyM1xcdTA0MzRcXHUwNDMwXFx1MDQzQlxcdTA0MzhcXHUwNDQyXFx1MDQ0Q1wiIH0pLCB2b2lkIDApXSB9KSwgaW5kZXgpKTsgfSldIH0sIHZvaWQgMCkpO1xufTtcbiIsInZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuaW1wb3J0IHsgQ2FyZENvbnRlbnQgfSBmcm9tICdAbXVpL21hdGVyaWFsJztcbmltcG9ydCBDYXJkQ29udGFpbmVyIGZyb20gJ3NoYXJlZC91aS9DYXJkL0NhcmQnO1xuaW1wb3J0IHsgR29vZHNJbnNpZGUgfSBmcm9tICd3aWRnZXRzL0dvb2RzSW5zaWRlJztcbnZhciBJbmRpdmlkdWFsRWRpdFBhZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIChfanN4KENhcmRDb250YWluZXIsIF9fYXNzaWduKHsgc3g6IHsgbXQ6IDIsIHA6IDIgfSB9LCB7IGNoaWxkcmVuOiBfanN4KENhcmRDb250ZW50LCB7IGNoaWxkcmVuOiBfanN4KEdvb2RzSW5zaWRlLCB7fSwgdm9pZCAwKSB9LCB2b2lkIDApIH0pLCB2b2lkIDApKTtcbn07XG5leHBvcnQgZGVmYXVsdCBJbmRpdmlkdWFsRWRpdFBhZ2U7XG4iLCJpbXBvcnQgeyBqc3ggYXMgX2pzeCB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuaW1wb3J0IHsgc3R5bGVkIH0gZnJvbSAnQG11aS9tYXRlcmlhbC9zdHlsZXMnO1xuaW1wb3J0IFRleHRhcmVhQXV0b3NpemUgZnJvbSAnQG11aS9tYXRlcmlhbC9UZXh0YXJlYUF1dG9zaXplJztcbnZhciBTdHlsZWRUZXh0YXJlYSA9IHN0eWxlZChUZXh0YXJlYUF1dG9zaXplKShmdW5jdGlvbiAoX2EpIHtcbiAgICB2YXIgdGhlbWUgPSBfYS50aGVtZTtcbiAgICByZXR1cm4gKHtcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygxKSxcbiAgICAgICAgYm9yZGVyUmFkaXVzOiAnMTJweCAxMnB4IDAgMTJweCcsXG4gICAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLm1vZGUgPT09ICdkYXJrJyA/IHRoZW1lLnBhbGV0dGUuZ3JleVszMDBdIDogdGhlbWUucGFsZXR0ZS5ncmV5WzkwMF0sXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5tb2RlID09PSAnZGFyaycgPyB0aGVtZS5wYWxldHRlLmdyZXlbOTAwXSA6ICcjZmZmJyxcbiAgICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZCBcIi5jb25jYXQodGhlbWUucGFsZXR0ZS5tb2RlID09PSAnZGFyaycgPyB0aGVtZS5wYWxldHRlLmdyZXlbNzAwXSA6IHRoZW1lLnBhbGV0dGUuZ3JleVsyMDBdKSxcbiAgICAgICAgYm94U2hhZG93OiBcIjBweCAycHggMnB4IFwiLmNvbmNhdCh0aGVtZS5wYWxldHRlLm1vZGUgPT09ICdkYXJrJyA/IHRoZW1lLnBhbGV0dGUuZ3JleVs5MDBdIDogdGhlbWUucGFsZXR0ZS5ncmV5WzUwXSksXG4gICAgICAgICcmOmhvdmVyJzoge1xuICAgICAgICAgICAgYm9yZGVyQ29sb3I6IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5tYWluLFxuICAgICAgICB9LFxuICAgIH0pO1xufSk7XG5leHBvcnQgdmFyIFRleHRBcmVhID0gZnVuY3Rpb24gKF9hKSB7XG4gICAgdmFyIHZhbHVlID0gX2EudmFsdWUsIG9uQ2hhbmdlID0gX2Eub25DaGFuZ2UsIG9uS2V5RG93biA9IF9hLm9uS2V5RG93biwgcGxhY2Vob2xkZXIgPSBfYS5wbGFjZWhvbGRlciwgc3ggPSBfYS5zeDtcbiAgICByZXR1cm4gKF9qc3goU3R5bGVkVGV4dGFyZWEsIHsgbWluUm93czogMywgdmFsdWU6IHZhbHVlLCBvbkNoYW5nZTogb25DaGFuZ2UsIG9uS2V5RG93bjogb25LZXlEb3duLCBwbGFjZWhvbGRlcjogcGxhY2Vob2xkZXIsIHN4OiBzeCB9LCB2b2lkIDApKTtcbn07XG4iLCJpbXBvcnQgR29vZHNJbnNpZGUgZnJvbSAnLi91aS9Hb29kc0luc2lkZSc7XG5leHBvcnQgeyBHb29kc0luc2lkZSB9O1xuIiwidmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbnZhciBfX3Jlc3QgPSAodGhpcyAmJiB0aGlzLl9fcmVzdCkgfHwgZnVuY3Rpb24gKHMsIGUpIHtcbiAgICB2YXIgdCA9IHt9O1xuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxuICAgICAgICB0W3BdID0gc1twXTtcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSlcbiAgICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcbiAgICAgICAgfVxuICAgIHJldHVybiB0O1xufTtcbmltcG9ydCB7IGpzeCBhcyBfanN4LCBqc3hzIGFzIF9qc3hzLCBGcmFnbWVudCBhcyBfRnJhZ21lbnQgfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtdWkvbWF0ZXJpYWwvVHlwb2dyYXBoeSc7XG5pbXBvcnQgVGFicyBmcm9tICdAbXVpL21hdGVyaWFsL1RhYnMnO1xuaW1wb3J0IFRhYiBmcm9tICdAbXVpL21hdGVyaWFsL1RhYic7XG5pbXBvcnQgQm94IGZyb20gJ0BtdWkvbWF0ZXJpYWwvQm94JztcbmltcG9ydCB7IEl0ZW1BZGRJbWFnZSB9IGZyb20gJ2ZlYXR1cmVzL0l0ZW1BZGRJbWFnZSc7XG5pbXBvcnQgeyBBZGRHb29kcyB9IGZyb20gJ2ZlYXR1cmVzL0FkZEdvb2RzJztcbmltcG9ydCB7IEVkaXRCYXNpY0dvb2QgfSBmcm9tICdmZWF0dXJlcy9FZGl0QmFzaWNHb29kJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5mdW5jdGlvbiBDdXN0b21UYWJQYW5lbChwcm9wcykge1xuICAgIHZhciBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLCB2YWx1ZSA9IHByb3BzLnZhbHVlLCBpbmRleCA9IHByb3BzLmluZGV4LCBvdGhlciA9IF9fcmVzdChwcm9wcywgW1wiY2hpbGRyZW5cIiwgXCJ2YWx1ZVwiLCBcImluZGV4XCJdKTtcbiAgICByZXR1cm4gKF9qc3goXCJkaXZcIiwgX19hc3NpZ24oeyByb2xlOiBcInRhYnBhbmVsXCIsIGhpZGRlbjogdmFsdWUgIT09IGluZGV4LCBpZDogXCJzaW1wbGUtdGFicGFuZWwtXCIuY29uY2F0KGluZGV4KSwgXCJhcmlhLWxhYmVsbGVkYnlcIjogXCJzaW1wbGUtdGFiLVwiLmNvbmNhdChpbmRleCkgfSwgb3RoZXIsIHsgY2hpbGRyZW46IHZhbHVlID09PSBpbmRleCAmJiAoX2pzeChCb3gsIF9fYXNzaWduKHsgc3g6IHsgcDogMyB9IH0sIHsgY2hpbGRyZW46IF9qc3goVHlwb2dyYXBoeSwgeyBjaGlsZHJlbjogY2hpbGRyZW4gfSwgdm9pZCAwKSB9KSwgdm9pZCAwKSkgfSksIHZvaWQgMCkpO1xufVxuZnVuY3Rpb24gYTExeVByb3BzKGluZGV4KSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgaWQ6IFwic2ltcGxlLXRhYi1cIi5jb25jYXQoaW5kZXgpLFxuICAgICAgICAnYXJpYS1jb250cm9scyc6IFwic2ltcGxlLXRhYnBhbmVsLVwiLmNvbmNhdChpbmRleCksXG4gICAgfTtcbn1cbnZhciBHb29kc0luc2lkZSA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX2EgPSBSZWFjdC51c2VTdGF0ZSgwKSwgdmFsdWUgPSBfYVswXSwgc2V0VmFsdWUgPSBfYVsxXTtcbiAgICB2YXIgaGFuZGxlQ2hhbmdlID0gZnVuY3Rpb24gKGV2ZW50LCBuZXdWYWx1ZSkge1xuICAgICAgICBzZXRWYWx1ZShuZXdWYWx1ZSk7XG4gICAgfTtcbiAgICByZXR1cm4gKF9qc3hzKF9GcmFnbWVudCwgeyBjaGlsZHJlbjogW19qc3goQm94LCBfX2Fzc2lnbih7IHN4OiB7IGJvcmRlckJvdHRvbTogMSwgYm9yZGVyQ29sb3I6ICdkaXZpZGVyJywgbWF4V2lkdGg6IHsgeHM6IDMyMCwgc206IDQ4MyB9IH0gfSwgeyBjaGlsZHJlbjogX2pzeHMoVGFicywgX19hc3NpZ24oeyB2YWx1ZTogdmFsdWUsIG9uQ2hhbmdlOiBoYW5kbGVDaGFuZ2UsIHZhcmlhbnQ6IFwic2Nyb2xsYWJsZVwiLCBzY3JvbGxCdXR0b25zOiBcImF1dG9cIiwgXCJhcmlhLWxhYmVsXCI6IFwic2Nyb2xsYWJsZSBhdXRvIHRhYnMgZXhhbXBsZVwiIH0sIHsgY2hpbGRyZW46IFtfanN4KFRhYiwgX19hc3NpZ24oeyBsYWJlbDogXCJcXHUwNDFFXFx1MDQ0MVxcdTA0M0RcXHUwNDNFXFx1MDQzMlxcdTA0M0RcXHUwNDNFXFx1MDQzNVwiIH0sIGExMXlQcm9wcygwKSksIHZvaWQgMCksIF9qc3goVGFiLCBfX2Fzc2lnbih7IGxhYmVsOiBcIlxcdTA0MTNcXHUwNDMwXFx1MDQzQlxcdTA0MzVcXHUwNDQwXFx1MDQzNVxcdTA0NEZcIiB9LCBhMTF5UHJvcHMoMSkpLCB2b2lkIDApLCBfanN4KFRhYiwgX19hc3NpZ24oeyBsYWJlbDogXCJcXHUwNDIxXFx1MDQzRVxcdTA0MzRcXHUwNDM1XFx1MDQ0MFxcdTA0MzZcXHUwNDM4XFx1MDQzQ1xcdTA0M0VcXHUwNDM1XCIgfSwgYTExeVByb3BzKDIpKSwgdm9pZCAwKSwgX2pzeChUYWIsIF9fYXNzaWduKHsgbGFiZWw6IFwiXFx1MDQxRlxcdTA0MzBcXHUwNDQwXFx1MDQzMFxcdTA0M0NcXHUwNDM1XFx1MDQ0MlxcdTA0NDBcXHUwNDRCXCIgfSwgYTExeVByb3BzKDMpKSwgdm9pZCAwKV0gfSksIHZvaWQgMCkgfSksIHZvaWQgMCksIF9qc3goQ3VzdG9tVGFiUGFuZWwsIF9fYXNzaWduKHsgdmFsdWU6IHZhbHVlLCBpbmRleDogMCB9LCB7IGNoaWxkcmVuOiBfanN4KEVkaXRCYXNpY0dvb2QsIHt9LCB2b2lkIDApIH0pLCB2b2lkIDApLCBfanN4KEN1c3RvbVRhYlBhbmVsLCBfX2Fzc2lnbih7IHZhbHVlOiB2YWx1ZSwgaW5kZXg6IDEgfSwgeyBjaGlsZHJlbjogX2pzeChJdGVtQWRkSW1hZ2UsIHt9LCB2b2lkIDApIH0pLCB2b2lkIDApLCBfanN4KEN1c3RvbVRhYlBhbmVsLCBfX2Fzc2lnbih7IHZhbHVlOiB2YWx1ZSwgaW5kZXg6IDIgfSwgeyBjaGlsZHJlbjogX2pzeChBZGRHb29kcywge30sIHZvaWQgMCkgfSksIHZvaWQgMCksIF9qc3goQ3VzdG9tVGFiUGFuZWwsIF9fYXNzaWduKHsgdmFsdWU6IHZhbHVlLCBpbmRleDogMyB9LCB7IGNoaWxkcmVuOiBcIlxcdTA0MUZcXHUwNDMwXFx1MDQ0MFxcdTA0MzBcXHUwNDNDXFx1MDQzNVxcdTA0NDJcXHUwNDQwXFx1MDQ0QlwiIH0pLCB2b2lkIDApXSB9LCB2b2lkIDApKTtcbn07XG5leHBvcnQgZGVmYXVsdCBHb29kc0luc2lkZTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==