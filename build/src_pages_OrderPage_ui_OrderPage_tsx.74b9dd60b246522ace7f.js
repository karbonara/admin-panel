"use strict";
(self["webpackChunkadmin_panel"] = self["webpackChunkadmin_panel"] || []).push([["src_pages_OrderPage_ui_OrderPage_tsx"],{

/***/ "./node_modules/@mui/icons-material/KeyboardArrowDown.js":
/*!***************************************************************!*\
  !*** ./node_modules/@mui/icons-material/KeyboardArrowDown.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _createSvgIcon = _interopRequireDefault(__webpack_require__(/*! ./utils/createSvgIcon */ "./node_modules/@mui/icons-material/utils/createSvgIcon.js"));

var _jsxRuntime = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
  d: "M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"
}), 'KeyboardArrowDown');

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/@mui/icons-material/KeyboardArrowUp.js":
/*!*************************************************************!*\
  !*** ./node_modules/@mui/icons-material/KeyboardArrowUp.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _createSvgIcon = _interopRequireDefault(__webpack_require__(/*! ./utils/createSvgIcon */ "./node_modules/@mui/icons-material/utils/createSvgIcon.js"));

var _jsxRuntime = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
  d: "M7.41 15.41 12 10.83l4.59 4.58L18 14l-6-6-6 6z"
}), 'KeyboardArrowUp');

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/@mui/icons-material/OpenInNew.js":
/*!*******************************************************!*\
  !*** ./node_modules/@mui/icons-material/OpenInNew.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _createSvgIcon = _interopRequireDefault(__webpack_require__(/*! ./utils/createSvgIcon */ "./node_modules/@mui/icons-material/utils/createSvgIcon.js"));

var _jsxRuntime = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
  d: "M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"
}), 'OpenInNew');

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/@mui/material/CardContent/CardContent.js":
/*!***************************************************************!*\
  !*** ./node_modules/@mui/material/CardContent/CardContent.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _mui_base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/base */ "./node_modules/@mui/base/composeClasses/composeClasses.js");
/* harmony import */ var _styles_styled__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/styled */ "./node_modules/@mui/material/styles/styled.js");
/* harmony import */ var _styles_useThemeProps__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/useThemeProps */ "./node_modules/@mui/material/styles/useThemeProps.js");
/* harmony import */ var _cardContentClasses__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cardContentClasses */ "./node_modules/@mui/material/CardContent/cardContentClasses.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");


const _excluded = ["className", "component"];









const useUtilityClasses = ownerState => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ['root']
  };
  return (0,_mui_base__WEBPACK_IMPORTED_MODULE_5__["default"])(slots, _cardContentClasses__WEBPACK_IMPORTED_MODULE_6__.getCardContentUtilityClass, classes);
};

const CardContentRoot = (0,_styles_styled__WEBPACK_IMPORTED_MODULE_7__["default"])('div', {
  name: 'MuiCardContent',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})(() => {
  return {
    padding: 16,
    '&:last-child': {
      paddingBottom: 24
    }
  };
});
const CardContent = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function CardContent(inProps, ref) {
  const props = (0,_styles_useThemeProps__WEBPACK_IMPORTED_MODULE_8__["default"])({
    props: inProps,
    name: 'MuiCardContent'
  });

  const {
    className,
    component = 'div'
  } = props,
        other = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, _excluded);

  const ownerState = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    component
  });

  const classes = useUtilityClasses(ownerState);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(CardContentRoot, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    as: component,
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__["default"])(classes.root, className),
    ownerState: ownerState,
    ref: ref
  }, other));
});
 true ? CardContent.propTypes
/* remove-proptypes */
= {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * The content of the component.
   */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().node),

  /**
   * Override or extend the styles applied to the component.
   */
  classes: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().object),

  /**
   * @ignore
   */
  className: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().string),

  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().elementType),

  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: prop_types__WEBPACK_IMPORTED_MODULE_9___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_9___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_9___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_9___default().func), (prop_types__WEBPACK_IMPORTED_MODULE_9___default().object), (prop_types__WEBPACK_IMPORTED_MODULE_9___default().bool)])), (prop_types__WEBPACK_IMPORTED_MODULE_9___default().func), (prop_types__WEBPACK_IMPORTED_MODULE_9___default().object)])
} : 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CardContent);

/***/ }),

/***/ "./node_modules/@mui/material/CardContent/cardContentClasses.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@mui/material/CardContent/cardContentClasses.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getCardContentUtilityClass": () => (/* binding */ getCardContentUtilityClass),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mui_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/base */ "./node_modules/@mui/base/generateUtilityClass/generateUtilityClass.js");
/* harmony import */ var _mui_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/base */ "./node_modules/@mui/base/generateUtilityClasses/generateUtilityClasses.js");

function getCardContentUtilityClass(slot) {
  return (0,_mui_base__WEBPACK_IMPORTED_MODULE_0__["default"])('MuiCardContent', slot);
}
const cardContentClasses = (0,_mui_base__WEBPACK_IMPORTED_MODULE_1__["default"])('MuiCardContent', ['root']);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cardContentClasses);

/***/ }),

/***/ "./src/pages/OrderPage/ui/OrderPage.tsx":
/*!**********************************************!*\
  !*** ./src/pages/OrderPage/ui/OrderPage.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "desserts": () => (/* binding */ desserts),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/CardContent/CardContent.js");
/* harmony import */ var shared_ui_Card_Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared/ui/Card/Card */ "./src/shared/ui/Card/Card.tsx");
/* harmony import */ var shared_ui_CollapsibleTable_CollapsibleTable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shared/ui/CollapsibleTable/CollapsibleTable */ "./src/shared/ui/CollapsibleTable/CollapsibleTable.tsx");
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/Typography */ "./node_modules/@mui/material/Typography/Typography.js");
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





var desserts = [
    {
        name: 'АРТЕМ',
        calories: 111,
        fat: 222,
        carbs: 33,
        protein: 444,
        price: 1,
        history: [
            {
                date: 'тут дата',
                customerId: 'айди',
                amount: 33,
            },
            {
                date: 'еще дата',
                customerId: 'еще айди',
                amount: 222,
            },
        ],
    },
    {
        name: 'Frozen yoghurt',
        calories: 159,
        fat: 6.0,
        carbs: 24,
        protein: 4.0,
        price: 3.99,
        history: [
            {
                date: '2020-01-05',
                customerId: '11091700',
                amount: 3,
            },
            {
                date: '2020-01-02',
                customerId: 'Anonymous',
                amount: 1,
            },
        ],
    },
];
var OrderPage = function () {
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_Card_Card__WEBPACK_IMPORTED_MODULE_1__["default"], __assign({ sx: { mt: 2, p: 2 } }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], __assign({ variant: "h4" }, { children: "\u0417\u0430\u043A\u0430\u0437\u044B" }), void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_CollapsibleTable_CollapsibleTable__WEBPACK_IMPORTED_MODULE_2__["default"], { data: desserts }, void 0)] }, void 0) }), void 0));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OrderPage);


/***/ }),

/***/ "./src/shared/ui/CollapsibleTable/CollapsibleTable.tsx":
/*!*************************************************************!*\
  !*** ./src/shared/ui/CollapsibleTable/CollapsibleTable.tsx ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CollapsibleTable)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/Box */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material_Collapse__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/Collapse */ "./node_modules/@mui/material/Collapse/Collapse.js");
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/IconButton */ "./node_modules/@mui/material/IconButton/IconButton.js");
/* harmony import */ var _mui_material_Table__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material/Table */ "./node_modules/@mui/material/Table/Table.js");
/* harmony import */ var _mui_material_TableBody__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material/TableBody */ "./node_modules/@mui/material/TableBody/TableBody.js");
/* harmony import */ var _mui_material_TableCell__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/TableCell */ "./node_modules/@mui/material/TableCell/TableCell.js");
/* harmony import */ var _mui_material_TableContainer__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @mui/material/TableContainer */ "./node_modules/@mui/material/TableContainer/TableContainer.js");
/* harmony import */ var _mui_material_TableHead__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material/TableHead */ "./node_modules/@mui/material/TableHead/TableHead.js");
/* harmony import */ var _mui_material_TableRow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/TableRow */ "./node_modules/@mui/material/TableRow/TableRow.js");
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material/Typography */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _mui_material_Paper__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @mui/material/Paper */ "./node_modules/@mui/material/Paper/Paper.js");
/* harmony import */ var _mui_icons_material_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/icons-material/KeyboardArrowDown */ "./node_modules/@mui/icons-material/KeyboardArrowDown.js");
/* harmony import */ var _mui_icons_material_KeyboardArrowUp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/icons-material/KeyboardArrowUp */ "./node_modules/@mui/icons-material/KeyboardArrowUp.js");
/* harmony import */ var _mui_icons_material_OpenInNew__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/icons-material/OpenInNew */ "./node_modules/@mui/icons-material/OpenInNew.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
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

















function createData(name, calories, fat, carbs, protein, price) {
    return {
        name: name,
        calories: calories,
        fat: fat,
        carbs: carbs,
        protein: protein,
        price: price,
        history: [
            {
                date: '',
                customerId: '',
                amount: 3,
            },
            {
                date: '',
                customerId: '',
                amount: 1,
            },
        ],
    };
}
function Row(props) {
    var row = props.row;
    var _a = react__WEBPACK_IMPORTED_MODULE_1__.useState(false), open = _a[0], setOpen = _a[1];
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_TableRow__WEBPACK_IMPORTED_MODULE_2__["default"], __assign({ sx: { '& > *': { borderBottom: 'unset' } } }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_3__["default"], { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_4__["default"], __assign({ "aria-label": "expand row", size: "small", onClick: function () { return setOpen(!open); } }, { children: open ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material_KeyboardArrowUp__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0) : (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0) }), void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Link, __assign({ to: '/individual-edit' }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material_OpenInNew__WEBPACK_IMPORTED_MODULE_8__["default"], {}, void 0) }), void 0)] }, void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_3__["default"], __assign({ component: "th", scope: "row" }, { children: row.name }), void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_3__["default"], __assign({ align: "right" }, { children: row.calories }), void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_3__["default"], __assign({ align: "right" }, { children: row.fat }), void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_3__["default"], __assign({ align: "right" }, { children: row.carbs }), void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_3__["default"], __assign({ align: "right" }, { children: row.protein }), void 0)] }), void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_TableRow__WEBPACK_IMPORTED_MODULE_2__["default"], { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_3__["default"], __assign({ style: { paddingBottom: 0, paddingTop: 0 }, colSpan: 6 }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Collapse__WEBPACK_IMPORTED_MODULE_9__["default"], __assign({ in: open, timeout: "auto", unmountOnExit: true }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_10__["default"], __assign({ sx: { margin: 1 } }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_11__["default"], __assign({ variant: "h6", gutterBottom: true, component: "div" }, { children: "\u0418\u0441\u0442\u043E\u0440\u0438\u044F \u0437\u0430\u043A\u0430\u0437\u043E\u0432" }), void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Table__WEBPACK_IMPORTED_MODULE_12__["default"], __assign({ size: "small", "aria-label": "purchases" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_TableHead__WEBPACK_IMPORTED_MODULE_13__["default"], { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_TableRow__WEBPACK_IMPORTED_MODULE_2__["default"], { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_3__["default"], { children: "\u0414\u0430\u0442\u0430" }, void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_3__["default"], { children: "Customer" }, void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_3__["default"], __assign({ align: "right" }, { children: "Amount" }), void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_3__["default"], __assign({ align: "right" }, { children: "Total price ($)" }), void 0)] }, void 0) }, void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_TableBody__WEBPACK_IMPORTED_MODULE_14__["default"], { children: row.history.map(function (historyRow) { return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_TableRow__WEBPACK_IMPORTED_MODULE_2__["default"], { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_3__["default"], __assign({ component: "th", scope: "row" }, { children: historyRow.date }), void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_3__["default"], { children: historyRow.customerId }, void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_3__["default"], __assign({ align: "right" }, { children: historyRow.amount }), void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_3__["default"], __assign({ align: "right" }, { children: Math.round(historyRow.amount * row.price * 100) / 100 }), void 0)] }, historyRow.date)); }) }, void 0)] }), void 0)] }), void 0) }), void 0) }), void 0) }, void 0)] }, void 0));
}
function CollapsibleTable(_a) {
    var data = _a.data;
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_TableContainer__WEBPACK_IMPORTED_MODULE_15__["default"], __assign({ component: _mui_material_Paper__WEBPACK_IMPORTED_MODULE_16__["default"] }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Table__WEBPACK_IMPORTED_MODULE_12__["default"], __assign({ "aria-label": "collapsible table" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_TableHead__WEBPACK_IMPORTED_MODULE_13__["default"], { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_TableRow__WEBPACK_IMPORTED_MODULE_2__["default"], { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_3__["default"], { children: "\u0418\u043C\u044F" }, void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_3__["default"], __assign({ align: "right" }, { children: "Calories" }), void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_3__["default"], __assign({ align: "right" }, { children: "Fat\u00A0(g)" }), void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_3__["default"], __assign({ align: "right" }, { children: "Carbs\u00A0(g)" }), void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_3__["default"], __assign({ align: "right" }, { children: "Protein\u00A0(g)" }), void 0)] }, void 0) }, void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_TableBody__WEBPACK_IMPORTED_MODULE_14__["default"], { children: data.map(function (row) { return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Row, { row: row }, row.name)); }) }, void 0)] }), void 0) }), void 0));
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3BhZ2VzX09yZGVyUGFnZV91aV9PcmRlclBhZ2VfdHN4Ljc0YjlkZDYwYjI0NjUyMmFjZTdmLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFhOztBQUViLDZCQUE2QixtQkFBTyxDQUFDLG9IQUE4Qzs7QUFFbkYsOENBQTZDO0FBQzdDO0FBQ0EsQ0FBQyxFQUFDO0FBQ0Ysa0JBQWU7O0FBRWYsNENBQTRDLG1CQUFPLENBQUMsd0ZBQXVCOztBQUUzRSxrQkFBa0IsbUJBQU8sQ0FBQyw4REFBbUI7O0FBRTdDO0FBQ0E7QUFDQSxDQUFDOztBQUVELGtCQUFlOzs7Ozs7Ozs7O0FDakJGOztBQUViLDZCQUE2QixtQkFBTyxDQUFDLG9IQUE4Qzs7QUFFbkYsOENBQTZDO0FBQzdDO0FBQ0EsQ0FBQyxFQUFDO0FBQ0Ysa0JBQWU7O0FBRWYsNENBQTRDLG1CQUFPLENBQUMsd0ZBQXVCOztBQUUzRSxrQkFBa0IsbUJBQU8sQ0FBQyw4REFBbUI7O0FBRTdDO0FBQ0E7QUFDQSxDQUFDOztBQUVELGtCQUFlOzs7Ozs7Ozs7O0FDakJGOztBQUViLDZCQUE2QixtQkFBTyxDQUFDLG9IQUE4Qzs7QUFFbkYsOENBQTZDO0FBQzdDO0FBQ0EsQ0FBQyxFQUFDO0FBQ0Ysa0JBQWU7O0FBRWYsNENBQTRDLG1CQUFPLENBQUMsd0ZBQXVCOztBQUUzRSxrQkFBa0IsbUJBQU8sQ0FBQyw4REFBbUI7O0FBRTdDO0FBQ0E7QUFDQSxDQUFDOztBQUVELGtCQUFlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakIyQztBQUMwQztBQUNwRztBQUMrQjtBQUNJO0FBQ1g7QUFDOEM7QUFDaEM7QUFDYztBQUNjO0FBQ2xCOztBQUVoRDtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsU0FBUyxxREFBYyxRQUFRLDJFQUEwQjtBQUN6RDs7QUFFQSx3QkFBd0IsMERBQU07QUFDOUI7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QUEyQixZQUFZLHNEQUFJLENBQUMsK0RBQVMsSUFBSSxpQ0FBaUMsV0FBVyxzREFBSSxDQUFDLCtEQUFTLGFBQWEsZ0JBQWdCLElBQUksNkJBQTZCLFlBQVksc0RBQUksQ0FBQywrREFBUyxhQUFhLGdCQUFnQixJQUFJLGlFQUFpRSxhQUFhLHNCQUFzQixHQUFHLFlBQVksYUFBYSxZQUFZLFlBQVksWUFBWSxZQUFZO0FBQ2o0RTtBQUNlO0FBQ2Y7QUFDQSxZQUFZLHNEQUFJLENBQUMscUVBQWMsYUFBYSxXQUFXLDREQUFLLEVBQUUsSUFBSSxVQUFVLHVEQUFLLENBQUMsNERBQUssYUFBYSxtQ0FBbUMsSUFBSSxXQUFXLHNEQUFJLENBQUMsZ0VBQVMsSUFBSSxVQUFVLHVEQUFLLENBQUMsOERBQVEsSUFBSSxXQUFXLHNEQUFJLENBQUMsK0RBQVMsSUFBSSxXQUFXLHNEQUFJLENBQUMsK0RBQVMsSUFBSSxnQ0FBZ0MsV0FBVyxzREFBSSxDQUFDLCtEQUFTLGFBQWEsZ0JBQWdCLElBQUksc0JBQXNCLFlBQVksc0RBQUksQ0FBQywrREFBUyxhQUFhLGdCQUFnQixJQUFJLDBCQUEwQixZQUFZLHNEQUFJLENBQUMsK0RBQVMsYUFBYSxnQkFBZ0IsSUFBSSw0QkFBNEIsWUFBWSxzREFBSSxDQUFDLCtEQUFTLGFBQWEsZ0JBQWdCLElBQUksOEJBQThCLGFBQWEsV0FBVyxXQUFXLHNEQUFJLENBQUMsZ0VBQVMsSUFBSSxvQ0FBb0MsUUFBUSxzREFBSSxRQUFRLFVBQVUsZUFBZSxHQUFHLFlBQVksWUFBWTtBQUNweEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hZG1pbi1wYW5lbC8uL25vZGVfbW9kdWxlcy9AbXVpL2ljb25zLW1hdGVyaWFsL0tleWJvYXJkQXJyb3dEb3duLmpzIiwid2VicGFjazovL2FkbWluLXBhbmVsLy4vbm9kZV9tb2R1bGVzL0BtdWkvaWNvbnMtbWF0ZXJpYWwvS2V5Ym9hcmRBcnJvd1VwLmpzIiwid2VicGFjazovL2FkbWluLXBhbmVsLy4vbm9kZV9tb2R1bGVzL0BtdWkvaWNvbnMtbWF0ZXJpYWwvT3BlbkluTmV3LmpzIiwid2VicGFjazovL2FkbWluLXBhbmVsLy4vbm9kZV9tb2R1bGVzL0BtdWkvbWF0ZXJpYWwvQ2FyZENvbnRlbnQvQ2FyZENvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vYWRtaW4tcGFuZWwvLi9ub2RlX21vZHVsZXMvQG11aS9tYXRlcmlhbC9DYXJkQ29udGVudC9jYXJkQ29udGVudENsYXNzZXMuanMiLCJ3ZWJwYWNrOi8vYWRtaW4tcGFuZWwvLi9zcmMvcGFnZXMvT3JkZXJQYWdlL3VpL09yZGVyUGFnZS50c3giLCJ3ZWJwYWNrOi8vYWRtaW4tcGFuZWwvLi9zcmMvc2hhcmVkL3VpL0NvbGxhcHNpYmxlVGFibGUvQ29sbGFwc2libGVUYWJsZS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX2NyZWF0ZVN2Z0ljb24gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWxzL2NyZWF0ZVN2Z0ljb25cIikpO1xuXG52YXIgX2pzeFJ1bnRpbWUgPSByZXF1aXJlKFwicmVhY3QvanN4LXJ1bnRpbWVcIik7XG5cbnZhciBfZGVmYXVsdCA9ICgwLCBfY3JlYXRlU3ZnSWNvbi5kZWZhdWx0KSggLyojX19QVVJFX18qLygwLCBfanN4UnVudGltZS5qc3gpKFwicGF0aFwiLCB7XG4gIGQ6IFwiTTcuNDEgOC41OSAxMiAxMy4xN2w0LjU5LTQuNThMMTggMTBsLTYgNi02LTYgMS40MS0xLjQxelwiXG59KSwgJ0tleWJvYXJkQXJyb3dEb3duJyk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF9jcmVhdGVTdmdJY29uID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlscy9jcmVhdGVTdmdJY29uXCIpKTtcblxudmFyIF9qc3hSdW50aW1lID0gcmVxdWlyZShcInJlYWN0L2pzeC1ydW50aW1lXCIpO1xuXG52YXIgX2RlZmF1bHQgPSAoMCwgX2NyZWF0ZVN2Z0ljb24uZGVmYXVsdCkoIC8qI19fUFVSRV9fKi8oMCwgX2pzeFJ1bnRpbWUuanN4KShcInBhdGhcIiwge1xuICBkOiBcIk03LjQxIDE1LjQxIDEyIDEwLjgzbDQuNTkgNC41OEwxOCAxNGwtNi02LTYgNnpcIlxufSksICdLZXlib2FyZEFycm93VXAnKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX2NyZWF0ZVN2Z0ljb24gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWxzL2NyZWF0ZVN2Z0ljb25cIikpO1xuXG52YXIgX2pzeFJ1bnRpbWUgPSByZXF1aXJlKFwicmVhY3QvanN4LXJ1bnRpbWVcIik7XG5cbnZhciBfZGVmYXVsdCA9ICgwLCBfY3JlYXRlU3ZnSWNvbi5kZWZhdWx0KSggLyojX19QVVJFX18qLygwLCBfanN4UnVudGltZS5qc3gpKFwicGF0aFwiLCB7XG4gIGQ6IFwiTTE5IDE5SDVWNWg3VjNINWMtMS4xMSAwLTIgLjktMiAydjE0YzAgMS4xLjg5IDIgMiAyaDE0YzEuMSAwIDItLjkgMi0ydi03aC0ydjd6TTE0IDN2MmgzLjU5bC05LjgzIDkuODMgMS40MSAxLjQxTDE5IDYuNDFWMTBoMlYzaC03elwiXG59KSwgJ09wZW5Jbk5ldycpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZVwiO1xuY29uc3QgX2V4Y2x1ZGVkID0gW1wiY2xhc3NOYW1lXCIsIFwiY29tcG9uZW50XCJdO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xuaW1wb3J0IHsgdW5zdGFibGVfY29tcG9zZUNsYXNzZXMgYXMgY29tcG9zZUNsYXNzZXMgfSBmcm9tICdAbXVpL2Jhc2UnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICcuLi9zdHlsZXMvc3R5bGVkJztcbmltcG9ydCB1c2VUaGVtZVByb3BzIGZyb20gJy4uL3N0eWxlcy91c2VUaGVtZVByb3BzJztcbmltcG9ydCB7IGdldENhcmRDb250ZW50VXRpbGl0eUNsYXNzIH0gZnJvbSAnLi9jYXJkQ29udGVudENsYXNzZXMnO1xuaW1wb3J0IHsganN4IGFzIF9qc3ggfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcblxuY29uc3QgdXNlVXRpbGl0eUNsYXNzZXMgPSBvd25lclN0YXRlID0+IHtcbiAgY29uc3Qge1xuICAgIGNsYXNzZXNcbiAgfSA9IG93bmVyU3RhdGU7XG4gIGNvbnN0IHNsb3RzID0ge1xuICAgIHJvb3Q6IFsncm9vdCddXG4gIH07XG4gIHJldHVybiBjb21wb3NlQ2xhc3NlcyhzbG90cywgZ2V0Q2FyZENvbnRlbnRVdGlsaXR5Q2xhc3MsIGNsYXNzZXMpO1xufTtcblxuY29uc3QgQ2FyZENvbnRlbnRSb290ID0gc3R5bGVkKCdkaXYnLCB7XG4gIG5hbWU6ICdNdWlDYXJkQ29udGVudCcsXG4gIHNsb3Q6ICdSb290JyxcbiAgb3ZlcnJpZGVzUmVzb2x2ZXI6IChwcm9wcywgc3R5bGVzKSA9PiBzdHlsZXMucm9vdFxufSkoKCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHBhZGRpbmc6IDE2LFxuICAgICcmOmxhc3QtY2hpbGQnOiB7XG4gICAgICBwYWRkaW5nQm90dG9tOiAyNFxuICAgIH1cbiAgfTtcbn0pO1xuY29uc3QgQ2FyZENvbnRlbnQgPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiBDYXJkQ29udGVudChpblByb3BzLCByZWYpIHtcbiAgY29uc3QgcHJvcHMgPSB1c2VUaGVtZVByb3BzKHtcbiAgICBwcm9wczogaW5Qcm9wcyxcbiAgICBuYW1lOiAnTXVpQ2FyZENvbnRlbnQnXG4gIH0pO1xuXG4gIGNvbnN0IHtcbiAgICBjbGFzc05hbWUsXG4gICAgY29tcG9uZW50ID0gJ2RpdidcbiAgfSA9IHByb3BzLFxuICAgICAgICBvdGhlciA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHByb3BzLCBfZXhjbHVkZWQpO1xuXG4gIGNvbnN0IG93bmVyU3RhdGUgPSBfZXh0ZW5kcyh7fSwgcHJvcHMsIHtcbiAgICBjb21wb25lbnRcbiAgfSk7XG5cbiAgY29uc3QgY2xhc3NlcyA9IHVzZVV0aWxpdHlDbGFzc2VzKG93bmVyU3RhdGUpO1xuICByZXR1cm4gLyojX19QVVJFX18qL19qc3goQ2FyZENvbnRlbnRSb290LCBfZXh0ZW5kcyh7XG4gICAgYXM6IGNvbXBvbmVudCxcbiAgICBjbGFzc05hbWU6IGNsc3goY2xhc3Nlcy5yb290LCBjbGFzc05hbWUpLFxuICAgIG93bmVyU3RhdGU6IG93bmVyU3RhdGUsXG4gICAgcmVmOiByZWZcbiAgfSwgb3RoZXIpKTtcbn0pO1xucHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gQ2FyZENvbnRlbnQucHJvcFR5cGVzXG4vKiByZW1vdmUtcHJvcHR5cGVzICovXG49IHtcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gV2FybmluZyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyB8IFRoZXNlIFByb3BUeXBlcyBhcmUgZ2VuZXJhdGVkIGZyb20gdGhlIFR5cGVTY3JpcHQgdHlwZSBkZWZpbml0aW9ucyB8XG4gIC8vIHwgICAgIFRvIHVwZGF0ZSB0aGVtIGVkaXQgdGhlIGQudHMgZmlsZSBhbmQgcnVuIFwieWFybiBwcm9wdHlwZXNcIiAgICAgfFxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgLyoqXG4gICAqIFRoZSBjb250ZW50IG9mIHRoZSBjb21wb25lbnQuXG4gICAqL1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG5cbiAgLyoqXG4gICAqIE92ZXJyaWRlIG9yIGV4dGVuZCB0aGUgc3R5bGVzIGFwcGxpZWQgdG8gdGhlIGNvbXBvbmVudC5cbiAgICovXG4gIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogVGhlIGNvbXBvbmVudCB1c2VkIGZvciB0aGUgcm9vdCBub2RlLlxuICAgKiBFaXRoZXIgYSBzdHJpbmcgdG8gdXNlIGEgSFRNTCBlbGVtZW50IG9yIGEgY29tcG9uZW50LlxuICAgKi9cbiAgY29tcG9uZW50OiBQcm9wVHlwZXMuZWxlbWVudFR5cGUsXG5cbiAgLyoqXG4gICAqIFRoZSBzeXN0ZW0gcHJvcCB0aGF0IGFsbG93cyBkZWZpbmluZyBzeXN0ZW0gb3ZlcnJpZGVzIGFzIHdlbGwgYXMgYWRkaXRpb25hbCBDU1Mgc3R5bGVzLlxuICAgKi9cbiAgc3g6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5mdW5jLCBQcm9wVHlwZXMub2JqZWN0LCBQcm9wVHlwZXMuYm9vbF0pKSwgUHJvcFR5cGVzLmZ1bmMsIFByb3BUeXBlcy5vYmplY3RdKVxufSA6IHZvaWQgMDtcbmV4cG9ydCBkZWZhdWx0IENhcmRDb250ZW50OyIsImltcG9ydCB7IGdlbmVyYXRlVXRpbGl0eUNsYXNzLCBnZW5lcmF0ZVV0aWxpdHlDbGFzc2VzIH0gZnJvbSAnQG11aS9iYXNlJztcbmV4cG9ydCBmdW5jdGlvbiBnZXRDYXJkQ29udGVudFV0aWxpdHlDbGFzcyhzbG90KSB7XG4gIHJldHVybiBnZW5lcmF0ZVV0aWxpdHlDbGFzcygnTXVpQ2FyZENvbnRlbnQnLCBzbG90KTtcbn1cbmNvbnN0IGNhcmRDb250ZW50Q2xhc3NlcyA9IGdlbmVyYXRlVXRpbGl0eUNsYXNzZXMoJ011aUNhcmRDb250ZW50JywgWydyb290J10pO1xuZXhwb3J0IGRlZmF1bHQgY2FyZENvbnRlbnRDbGFzc2VzOyIsInZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCwganN4cyBhcyBfanN4cyB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuaW1wb3J0IHsgQ2FyZENvbnRlbnQgfSBmcm9tICdAbXVpL21hdGVyaWFsJztcbmltcG9ydCBDYXJkQ29udGFpbmVyIGZyb20gJ3NoYXJlZC91aS9DYXJkL0NhcmQnO1xuaW1wb3J0IENvbGxhcHNpYmxlVGFibGUgZnJvbSAnc2hhcmVkL3VpL0NvbGxhcHNpYmxlVGFibGUvQ29sbGFwc2libGVUYWJsZSc7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbXVpL21hdGVyaWFsL1R5cG9ncmFwaHknO1xuZXhwb3J0IHZhciBkZXNzZXJ0cyA9IFtcbiAgICB7XG4gICAgICAgIG5hbWU6ICfQkNCg0KLQldCcJyxcbiAgICAgICAgY2Fsb3JpZXM6IDExMSxcbiAgICAgICAgZmF0OiAyMjIsXG4gICAgICAgIGNhcmJzOiAzMyxcbiAgICAgICAgcHJvdGVpbjogNDQ0LFxuICAgICAgICBwcmljZTogMSxcbiAgICAgICAgaGlzdG9yeTogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGRhdGU6ICfRgtGD0YIg0LTQsNGC0LAnLFxuICAgICAgICAgICAgICAgIGN1c3RvbWVySWQ6ICfQsNC50LTQuCcsXG4gICAgICAgICAgICAgICAgYW1vdW50OiAzMyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZGF0ZTogJ9C10YnQtSDQtNCw0YLQsCcsXG4gICAgICAgICAgICAgICAgY3VzdG9tZXJJZDogJ9C10YnQtSDQsNC50LTQuCcsXG4gICAgICAgICAgICAgICAgYW1vdW50OiAyMjIsXG4gICAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnRnJvemVuIHlvZ2h1cnQnLFxuICAgICAgICBjYWxvcmllczogMTU5LFxuICAgICAgICBmYXQ6IDYuMCxcbiAgICAgICAgY2FyYnM6IDI0LFxuICAgICAgICBwcm90ZWluOiA0LjAsXG4gICAgICAgIHByaWNlOiAzLjk5LFxuICAgICAgICBoaXN0b3J5OiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZGF0ZTogJzIwMjAtMDEtMDUnLFxuICAgICAgICAgICAgICAgIGN1c3RvbWVySWQ6ICcxMTA5MTcwMCcsXG4gICAgICAgICAgICAgICAgYW1vdW50OiAzLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBkYXRlOiAnMjAyMC0wMS0wMicsXG4gICAgICAgICAgICAgICAgY3VzdG9tZXJJZDogJ0Fub255bW91cycsXG4gICAgICAgICAgICAgICAgYW1vdW50OiAxLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICB9LFxuXTtcbnZhciBPcmRlclBhZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIChfanN4KENhcmRDb250YWluZXIsIF9fYXNzaWduKHsgc3g6IHsgbXQ6IDIsIHA6IDIgfSB9LCB7IGNoaWxkcmVuOiBfanN4cyhDYXJkQ29udGVudCwgeyBjaGlsZHJlbjogW19qc3goVHlwb2dyYXBoeSwgX19hc3NpZ24oeyB2YXJpYW50OiBcImg0XCIgfSwgeyBjaGlsZHJlbjogXCJcXHUwNDE3XFx1MDQzMFxcdTA0M0FcXHUwNDMwXFx1MDQzN1xcdTA0NEJcIiB9KSwgdm9pZCAwKSwgX2pzeChDb2xsYXBzaWJsZVRhYmxlLCB7IGRhdGE6IGRlc3NlcnRzIH0sIHZvaWQgMCldIH0sIHZvaWQgMCkgfSksIHZvaWQgMCkpO1xufTtcbmV4cG9ydCBkZWZhdWx0IE9yZGVyUGFnZTtcbiIsInZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCwganN4cyBhcyBfanN4cyB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEJveCBmcm9tICdAbXVpL21hdGVyaWFsL0JveCc7XG5pbXBvcnQgQ29sbGFwc2UgZnJvbSAnQG11aS9tYXRlcmlhbC9Db2xsYXBzZSc7XG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICdAbXVpL21hdGVyaWFsL0ljb25CdXR0b24nO1xuaW1wb3J0IFRhYmxlIGZyb20gJ0BtdWkvbWF0ZXJpYWwvVGFibGUnO1xuaW1wb3J0IFRhYmxlQm9keSBmcm9tICdAbXVpL21hdGVyaWFsL1RhYmxlQm9keSc7XG5pbXBvcnQgVGFibGVDZWxsIGZyb20gJ0BtdWkvbWF0ZXJpYWwvVGFibGVDZWxsJztcbmltcG9ydCBUYWJsZUNvbnRhaW5lciBmcm9tICdAbXVpL21hdGVyaWFsL1RhYmxlQ29udGFpbmVyJztcbmltcG9ydCBUYWJsZUhlYWQgZnJvbSAnQG11aS9tYXRlcmlhbC9UYWJsZUhlYWQnO1xuaW1wb3J0IFRhYmxlUm93IGZyb20gJ0BtdWkvbWF0ZXJpYWwvVGFibGVSb3cnO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG11aS9tYXRlcmlhbC9UeXBvZ3JhcGh5JztcbmltcG9ydCBQYXBlciBmcm9tICdAbXVpL21hdGVyaWFsL1BhcGVyJztcbmltcG9ydCBLZXlib2FyZEFycm93RG93bkljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9LZXlib2FyZEFycm93RG93bic7XG5pbXBvcnQgS2V5Ym9hcmRBcnJvd1VwSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0tleWJvYXJkQXJyb3dVcCc7XG5pbXBvcnQgT3BlbkluTmV3SWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL09wZW5Jbk5ldyc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5mdW5jdGlvbiBjcmVhdGVEYXRhKG5hbWUsIGNhbG9yaWVzLCBmYXQsIGNhcmJzLCBwcm90ZWluLCBwcmljZSkge1xuICAgIHJldHVybiB7XG4gICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgIGNhbG9yaWVzOiBjYWxvcmllcyxcbiAgICAgICAgZmF0OiBmYXQsXG4gICAgICAgIGNhcmJzOiBjYXJicyxcbiAgICAgICAgcHJvdGVpbjogcHJvdGVpbixcbiAgICAgICAgcHJpY2U6IHByaWNlLFxuICAgICAgICBoaXN0b3J5OiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZGF0ZTogJycsXG4gICAgICAgICAgICAgICAgY3VzdG9tZXJJZDogJycsXG4gICAgICAgICAgICAgICAgYW1vdW50OiAzLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBkYXRlOiAnJyxcbiAgICAgICAgICAgICAgICBjdXN0b21lcklkOiAnJyxcbiAgICAgICAgICAgICAgICBhbW91bnQ6IDEsXG4gICAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgIH07XG59XG5mdW5jdGlvbiBSb3cocHJvcHMpIHtcbiAgICB2YXIgcm93ID0gcHJvcHMucm93O1xuICAgIHZhciBfYSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKSwgb3BlbiA9IF9hWzBdLCBzZXRPcGVuID0gX2FbMV07XG4gICAgcmV0dXJuIChfanN4cyhSZWFjdC5GcmFnbWVudCwgeyBjaGlsZHJlbjogW19qc3hzKFRhYmxlUm93LCBfX2Fzc2lnbih7IHN4OiB7ICcmID4gKic6IHsgYm9yZGVyQm90dG9tOiAndW5zZXQnIH0gfSB9LCB7IGNoaWxkcmVuOiBbX2pzeHMoVGFibGVDZWxsLCB7IGNoaWxkcmVuOiBbX2pzeChJY29uQnV0dG9uLCBfX2Fzc2lnbih7IFwiYXJpYS1sYWJlbFwiOiBcImV4cGFuZCByb3dcIiwgc2l6ZTogXCJzbWFsbFwiLCBvbkNsaWNrOiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXRPcGVuKCFvcGVuKTsgfSB9LCB7IGNoaWxkcmVuOiBvcGVuID8gX2pzeChLZXlib2FyZEFycm93VXBJY29uLCB7fSwgdm9pZCAwKSA6IF9qc3goS2V5Ym9hcmRBcnJvd0Rvd25JY29uLCB7fSwgdm9pZCAwKSB9KSwgdm9pZCAwKSwgX2pzeChMaW5rLCBfX2Fzc2lnbih7IHRvOiAnL2luZGl2aWR1YWwtZWRpdCcgfSwgeyBjaGlsZHJlbjogX2pzeChPcGVuSW5OZXdJY29uLCB7fSwgdm9pZCAwKSB9KSwgdm9pZCAwKV0gfSwgdm9pZCAwKSwgX2pzeChUYWJsZUNlbGwsIF9fYXNzaWduKHsgY29tcG9uZW50OiBcInRoXCIsIHNjb3BlOiBcInJvd1wiIH0sIHsgY2hpbGRyZW46IHJvdy5uYW1lIH0pLCB2b2lkIDApLCBfanN4KFRhYmxlQ2VsbCwgX19hc3NpZ24oeyBhbGlnbjogXCJyaWdodFwiIH0sIHsgY2hpbGRyZW46IHJvdy5jYWxvcmllcyB9KSwgdm9pZCAwKSwgX2pzeChUYWJsZUNlbGwsIF9fYXNzaWduKHsgYWxpZ246IFwicmlnaHRcIiB9LCB7IGNoaWxkcmVuOiByb3cuZmF0IH0pLCB2b2lkIDApLCBfanN4KFRhYmxlQ2VsbCwgX19hc3NpZ24oeyBhbGlnbjogXCJyaWdodFwiIH0sIHsgY2hpbGRyZW46IHJvdy5jYXJicyB9KSwgdm9pZCAwKSwgX2pzeChUYWJsZUNlbGwsIF9fYXNzaWduKHsgYWxpZ246IFwicmlnaHRcIiB9LCB7IGNoaWxkcmVuOiByb3cucHJvdGVpbiB9KSwgdm9pZCAwKV0gfSksIHZvaWQgMCksIF9qc3goVGFibGVSb3csIHsgY2hpbGRyZW46IF9qc3goVGFibGVDZWxsLCBfX2Fzc2lnbih7IHN0eWxlOiB7IHBhZGRpbmdCb3R0b206IDAsIHBhZGRpbmdUb3A6IDAgfSwgY29sU3BhbjogNiB9LCB7IGNoaWxkcmVuOiBfanN4KENvbGxhcHNlLCBfX2Fzc2lnbih7IGluOiBvcGVuLCB0aW1lb3V0OiBcImF1dG9cIiwgdW5tb3VudE9uRXhpdDogdHJ1ZSB9LCB7IGNoaWxkcmVuOiBfanN4cyhCb3gsIF9fYXNzaWduKHsgc3g6IHsgbWFyZ2luOiAxIH0gfSwgeyBjaGlsZHJlbjogW19qc3goVHlwb2dyYXBoeSwgX19hc3NpZ24oeyB2YXJpYW50OiBcImg2XCIsIGd1dHRlckJvdHRvbTogdHJ1ZSwgY29tcG9uZW50OiBcImRpdlwiIH0sIHsgY2hpbGRyZW46IFwiXFx1MDQxOFxcdTA0NDFcXHUwNDQyXFx1MDQzRVxcdTA0NDBcXHUwNDM4XFx1MDQ0RiBcXHUwNDM3XFx1MDQzMFxcdTA0M0FcXHUwNDMwXFx1MDQzN1xcdTA0M0VcXHUwNDMyXCIgfSksIHZvaWQgMCksIF9qc3hzKFRhYmxlLCBfX2Fzc2lnbih7IHNpemU6IFwic21hbGxcIiwgXCJhcmlhLWxhYmVsXCI6IFwicHVyY2hhc2VzXCIgfSwgeyBjaGlsZHJlbjogW19qc3goVGFibGVIZWFkLCB7IGNoaWxkcmVuOiBfanN4cyhUYWJsZVJvdywgeyBjaGlsZHJlbjogW19qc3goVGFibGVDZWxsLCB7IGNoaWxkcmVuOiBcIlxcdTA0MTRcXHUwNDMwXFx1MDQ0MlxcdTA0MzBcIiB9LCB2b2lkIDApLCBfanN4KFRhYmxlQ2VsbCwgeyBjaGlsZHJlbjogXCJDdXN0b21lclwiIH0sIHZvaWQgMCksIF9qc3goVGFibGVDZWxsLCBfX2Fzc2lnbih7IGFsaWduOiBcInJpZ2h0XCIgfSwgeyBjaGlsZHJlbjogXCJBbW91bnRcIiB9KSwgdm9pZCAwKSwgX2pzeChUYWJsZUNlbGwsIF9fYXNzaWduKHsgYWxpZ246IFwicmlnaHRcIiB9LCB7IGNoaWxkcmVuOiBcIlRvdGFsIHByaWNlICgkKVwiIH0pLCB2b2lkIDApXSB9LCB2b2lkIDApIH0sIHZvaWQgMCksIF9qc3goVGFibGVCb2R5LCB7IGNoaWxkcmVuOiByb3cuaGlzdG9yeS5tYXAoZnVuY3Rpb24gKGhpc3RvcnlSb3cpIHsgcmV0dXJuIChfanN4cyhUYWJsZVJvdywgeyBjaGlsZHJlbjogW19qc3goVGFibGVDZWxsLCBfX2Fzc2lnbih7IGNvbXBvbmVudDogXCJ0aFwiLCBzY29wZTogXCJyb3dcIiB9LCB7IGNoaWxkcmVuOiBoaXN0b3J5Um93LmRhdGUgfSksIHZvaWQgMCksIF9qc3goVGFibGVDZWxsLCB7IGNoaWxkcmVuOiBoaXN0b3J5Um93LmN1c3RvbWVySWQgfSwgdm9pZCAwKSwgX2pzeChUYWJsZUNlbGwsIF9fYXNzaWduKHsgYWxpZ246IFwicmlnaHRcIiB9LCB7IGNoaWxkcmVuOiBoaXN0b3J5Um93LmFtb3VudCB9KSwgdm9pZCAwKSwgX2pzeChUYWJsZUNlbGwsIF9fYXNzaWduKHsgYWxpZ246IFwicmlnaHRcIiB9LCB7IGNoaWxkcmVuOiBNYXRoLnJvdW5kKGhpc3RvcnlSb3cuYW1vdW50ICogcm93LnByaWNlICogMTAwKSAvIDEwMCB9KSwgdm9pZCAwKV0gfSwgaGlzdG9yeVJvdy5kYXRlKSk7IH0pIH0sIHZvaWQgMCldIH0pLCB2b2lkIDApXSB9KSwgdm9pZCAwKSB9KSwgdm9pZCAwKSB9KSwgdm9pZCAwKSB9LCB2b2lkIDApXSB9LCB2b2lkIDApKTtcbn1cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbGxhcHNpYmxlVGFibGUoX2EpIHtcbiAgICB2YXIgZGF0YSA9IF9hLmRhdGE7XG4gICAgcmV0dXJuIChfanN4KFRhYmxlQ29udGFpbmVyLCBfX2Fzc2lnbih7IGNvbXBvbmVudDogUGFwZXIgfSwgeyBjaGlsZHJlbjogX2pzeHMoVGFibGUsIF9fYXNzaWduKHsgXCJhcmlhLWxhYmVsXCI6IFwiY29sbGFwc2libGUgdGFibGVcIiB9LCB7IGNoaWxkcmVuOiBbX2pzeChUYWJsZUhlYWQsIHsgY2hpbGRyZW46IF9qc3hzKFRhYmxlUm93LCB7IGNoaWxkcmVuOiBbX2pzeChUYWJsZUNlbGwsIHt9LCB2b2lkIDApLCBfanN4KFRhYmxlQ2VsbCwgeyBjaGlsZHJlbjogXCJcXHUwNDE4XFx1MDQzQ1xcdTA0NEZcIiB9LCB2b2lkIDApLCBfanN4KFRhYmxlQ2VsbCwgX19hc3NpZ24oeyBhbGlnbjogXCJyaWdodFwiIH0sIHsgY2hpbGRyZW46IFwiQ2Fsb3JpZXNcIiB9KSwgdm9pZCAwKSwgX2pzeChUYWJsZUNlbGwsIF9fYXNzaWduKHsgYWxpZ246IFwicmlnaHRcIiB9LCB7IGNoaWxkcmVuOiBcIkZhdFxcdTAwQTAoZylcIiB9KSwgdm9pZCAwKSwgX2pzeChUYWJsZUNlbGwsIF9fYXNzaWduKHsgYWxpZ246IFwicmlnaHRcIiB9LCB7IGNoaWxkcmVuOiBcIkNhcmJzXFx1MDBBMChnKVwiIH0pLCB2b2lkIDApLCBfanN4KFRhYmxlQ2VsbCwgX19hc3NpZ24oeyBhbGlnbjogXCJyaWdodFwiIH0sIHsgY2hpbGRyZW46IFwiUHJvdGVpblxcdTAwQTAoZylcIiB9KSwgdm9pZCAwKV0gfSwgdm9pZCAwKSB9LCB2b2lkIDApLCBfanN4KFRhYmxlQm9keSwgeyBjaGlsZHJlbjogZGF0YS5tYXAoZnVuY3Rpb24gKHJvdykgeyByZXR1cm4gKF9qc3goUm93LCB7IHJvdzogcm93IH0sIHJvdy5uYW1lKSk7IH0pIH0sIHZvaWQgMCldIH0pLCB2b2lkIDApIH0pLCB2b2lkIDApKTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==