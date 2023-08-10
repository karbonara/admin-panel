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
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/CardContent/CardContent.js");
/* harmony import */ var shared_ui_Card_Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared/ui/Card/Card */ "./src/shared/ui/Card/Card.tsx");
/* harmony import */ var shared_ui_CollapsibleTable_CollapsibleTable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shared/ui/CollapsibleTable/CollapsibleTable */ "./src/shared/ui/CollapsibleTable/CollapsibleTable.tsx");
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




var OrderPage = function () {
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_Card_Card__WEBPACK_IMPORTED_MODULE_1__["default"], __assign({ sx: { mt: 2, p: 2 } }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h1", { children: "OrderPage" }, void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_CollapsibleTable_CollapsibleTable__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0)] }, void 0) }), void 0));
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
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/Box */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material_Collapse__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Collapse */ "./node_modules/@mui/material/Collapse/Collapse.js");
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/IconButton */ "./node_modules/@mui/material/IconButton/IconButton.js");
/* harmony import */ var _mui_material_Table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/Table */ "./node_modules/@mui/material/Table/Table.js");
/* harmony import */ var _mui_material_TableBody__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material/TableBody */ "./node_modules/@mui/material/TableBody/TableBody.js");
/* harmony import */ var _mui_material_TableCell__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/TableCell */ "./node_modules/@mui/material/TableCell/TableCell.js");
/* harmony import */ var _mui_material_TableContainer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material/TableContainer */ "./node_modules/@mui/material/TableContainer/TableContainer.js");
/* harmony import */ var _mui_material_TableHead__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material/TableHead */ "./node_modules/@mui/material/TableHead/TableHead.js");
/* harmony import */ var _mui_material_TableRow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/TableRow */ "./node_modules/@mui/material/TableRow/TableRow.js");
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/Typography */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _mui_material_Paper__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material/Paper */ "./node_modules/@mui/material/Paper/Paper.js");
/* harmony import */ var _mui_icons_material_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/icons-material/KeyboardArrowDown */ "./node_modules/@mui/icons-material/KeyboardArrowDown.js");
/* harmony import */ var _mui_icons_material_KeyboardArrowUp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/icons-material/KeyboardArrowUp */ "./node_modules/@mui/icons-material/KeyboardArrowUp.js");
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
    };
}
function Row(props) {
    var row = props.row;
    var _a = react__WEBPACK_IMPORTED_MODULE_1__.useState(false), open = _a[0], setOpen = _a[1];
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_TableRow__WEBPACK_IMPORTED_MODULE_2__["default"], __assign({ sx: { '& > *': { borderBottom: 'unset' } } }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_3__["default"], { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_4__["default"], __assign({ "aria-label": "expand row", size: "small", onClick: function () { return setOpen(!open); } }, { children: open ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material_KeyboardArrowUp__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0) : (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0) }), void 0) }, void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_3__["default"], __assign({ component: "th", scope: "row" }, { children: row.name }), void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_3__["default"], __assign({ align: "right" }, { children: row.calories }), void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_3__["default"], __assign({ align: "right" }, { children: row.fat }), void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_3__["default"], __assign({ align: "right" }, { children: row.carbs }), void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_3__["default"], __assign({ align: "right" }, { children: row.protein }), void 0)] }), void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_TableRow__WEBPACK_IMPORTED_MODULE_2__["default"], { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_3__["default"], __assign({ style: { paddingBottom: 0, paddingTop: 0 }, colSpan: 6 }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Collapse__WEBPACK_IMPORTED_MODULE_7__["default"], __assign({ in: open, timeout: "auto", unmountOnExit: true }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_8__["default"], __assign({ sx: { margin: 1 } }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_9__["default"], __assign({ variant: "h6", gutterBottom: true, component: "div" }, { children: "History" }), void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_9__["default"], __assign({ variant: "h6", gutterBottom: true, component: "div" }, { children: "History" }), void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Table__WEBPACK_IMPORTED_MODULE_10__["default"], __assign({ size: "small", "aria-label": "purchases" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_TableHead__WEBPACK_IMPORTED_MODULE_11__["default"], { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_TableRow__WEBPACK_IMPORTED_MODULE_2__["default"], { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_3__["default"], { children: "Date" }, void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_3__["default"], { children: "Customer" }, void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_3__["default"], __assign({ align: "right" }, { children: "Amount" }), void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_3__["default"], __assign({ align: "right" }, { children: "Total price ($)" }), void 0)] }, void 0) }, void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_TableBody__WEBPACK_IMPORTED_MODULE_12__["default"], { children: row.history.map(function (historyRow) { return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_TableRow__WEBPACK_IMPORTED_MODULE_2__["default"], { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_3__["default"], __assign({ component: "th", scope: "row" }, { children: historyRow.date }), void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_3__["default"], { children: historyRow.customerId }, void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_3__["default"], __assign({ align: "right" }, { children: historyRow.amount }), void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_3__["default"], __assign({ align: "right" }, { children: Math.round(historyRow.amount * row.price * 100) / 100 }), void 0)] }, historyRow.date)); }) }, void 0)] }), void 0)] }), void 0) }), void 0) }), void 0) }, void 0)] }, void 0));
}
var rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 3.99),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3, 4.99),
    createData('Eclair', 262, 16.0, 24, 6.0, 3.79),
    createData('Cupcake', 305, 3.7, 67, 4.3, 2.5),
    createData('Gingerbread', 356, 16.0, 49, 3.9, 1.5),
];
function CollapsibleTable() {
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_TableContainer__WEBPACK_IMPORTED_MODULE_13__["default"], __assign({ component: _mui_material_Paper__WEBPACK_IMPORTED_MODULE_14__["default"] }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Table__WEBPACK_IMPORTED_MODULE_10__["default"], __assign({ "aria-label": "collapsible table" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_TableHead__WEBPACK_IMPORTED_MODULE_11__["default"], { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_TableRow__WEBPACK_IMPORTED_MODULE_2__["default"], { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_3__["default"], { children: "Dessert (100g serving)" }, void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_3__["default"], __assign({ align: "right" }, { children: "Calories" }), void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_3__["default"], __assign({ align: "right" }, { children: "Fat\u00A0(g)" }), void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_3__["default"], __assign({ align: "right" }, { children: "Carbs\u00A0(g)" }), void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_3__["default"], __assign({ align: "right" }, { children: "Protein\u00A0(g)" }), void 0)] }, void 0) }, void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_TableBody__WEBPACK_IMPORTED_MODULE_12__["default"], { children: rows.map(function (row) { return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Row, { row: row }, row.name)); }) }, void 0)] }), void 0) }), void 0));
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3BhZ2VzX09yZGVyUGFnZV91aV9PcmRlclBhZ2VfdHN4LjcxMjk3NWJhZTg3MjA2YzI1ZDlkLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFhOztBQUViLDZCQUE2QixtQkFBTyxDQUFDLG9IQUE4Qzs7QUFFbkYsOENBQTZDO0FBQzdDO0FBQ0EsQ0FBQyxFQUFDO0FBQ0Ysa0JBQWU7O0FBRWYsNENBQTRDLG1CQUFPLENBQUMsd0ZBQXVCOztBQUUzRSxrQkFBa0IsbUJBQU8sQ0FBQyw4REFBbUI7O0FBRTdDO0FBQ0E7QUFDQSxDQUFDOztBQUVELGtCQUFlOzs7Ozs7Ozs7O0FDakJGOztBQUViLDZCQUE2QixtQkFBTyxDQUFDLG9IQUE4Qzs7QUFFbkYsOENBQTZDO0FBQzdDO0FBQ0EsQ0FBQyxFQUFDO0FBQ0Ysa0JBQWU7O0FBRWYsNENBQTRDLG1CQUFPLENBQUMsd0ZBQXVCOztBQUUzRSxrQkFBa0IsbUJBQU8sQ0FBQyw4REFBbUI7O0FBRTdDO0FBQ0E7QUFDQSxDQUFDOztBQUVELGtCQUFlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakIyQztBQUMwQztBQUNwRztBQUMrQjtBQUNJO0FBQ1g7QUFDOEM7QUFDaEM7QUFDYztBQUNjO0FBQ2xCOztBQUVoRDtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsU0FBUyxxREFBYyxRQUFRLDJFQUEwQjtBQUN6RDs7QUFFQSx3QkFBd0IsMERBQU07QUFDOUI7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxpQ0FBaUMsNkNBQWdCO0FBQ2pELGdCQUFnQixpRUFBYTtBQUM3QjtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0osZ0JBQWdCLG1HQUE2Qjs7QUFFN0MscUJBQXFCLDhFQUFRLEdBQUc7QUFDaEM7QUFDQSxHQUFHOztBQUVIO0FBQ0Esc0JBQXNCLHNEQUFJLGtCQUFrQiw4RUFB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YSxnQkFBZ0IsSUFBSSwwQkFBMEIsWUFBWSxzREFBSSxDQUFDLCtEQUFTLGFBQWEsZ0JBQWdCLElBQUksNEJBQTRCLFlBQVksc0RBQUksQ0FBQywrREFBUyxhQUFhLGdCQUFnQixJQUFJLDhCQUE4QixhQUFhLFdBQVcsV0FBVyxzREFBSSxDQUFDLGdFQUFTLElBQUksb0NBQW9DLFFBQVEsc0RBQUksUUFBUSxVQUFVLGVBQWUsR0FBRyxZQUFZLFlBQVk7QUFDeHhCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYWRtaW4tcGFuZWwvLi9ub2RlX21vZHVsZXMvQG11aS9pY29ucy1tYXRlcmlhbC9LZXlib2FyZEFycm93RG93bi5qcyIsIndlYnBhY2s6Ly9hZG1pbi1wYW5lbC8uL25vZGVfbW9kdWxlcy9AbXVpL2ljb25zLW1hdGVyaWFsL0tleWJvYXJkQXJyb3dVcC5qcyIsIndlYnBhY2s6Ly9hZG1pbi1wYW5lbC8uL25vZGVfbW9kdWxlcy9AbXVpL21hdGVyaWFsL0NhcmRDb250ZW50L0NhcmRDb250ZW50LmpzIiwid2VicGFjazovL2FkbWluLXBhbmVsLy4vbm9kZV9tb2R1bGVzL0BtdWkvbWF0ZXJpYWwvQ2FyZENvbnRlbnQvY2FyZENvbnRlbnRDbGFzc2VzLmpzIiwid2VicGFjazovL2FkbWluLXBhbmVsLy4vc3JjL3BhZ2VzL09yZGVyUGFnZS91aS9PcmRlclBhZ2UudHN4Iiwid2VicGFjazovL2FkbWluLXBhbmVsLy4vc3JjL3NoYXJlZC91aS9Db2xsYXBzaWJsZVRhYmxlL0NvbGxhcHNpYmxlVGFibGUudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF9jcmVhdGVTdmdJY29uID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlscy9jcmVhdGVTdmdJY29uXCIpKTtcblxudmFyIF9qc3hSdW50aW1lID0gcmVxdWlyZShcInJlYWN0L2pzeC1ydW50aW1lXCIpO1xuXG52YXIgX2RlZmF1bHQgPSAoMCwgX2NyZWF0ZVN2Z0ljb24uZGVmYXVsdCkoIC8qI19fUFVSRV9fKi8oMCwgX2pzeFJ1bnRpbWUuanN4KShcInBhdGhcIiwge1xuICBkOiBcIk03LjQxIDguNTkgMTIgMTMuMTdsNC41OS00LjU4TDE4IDEwbC02IDYtNi02IDEuNDEtMS40MXpcIlxufSksICdLZXlib2FyZEFycm93RG93bicpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfY3JlYXRlU3ZnSWNvbiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdXRpbHMvY3JlYXRlU3ZnSWNvblwiKSk7XG5cbnZhciBfanN4UnVudGltZSA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtcnVudGltZVwiKTtcblxudmFyIF9kZWZhdWx0ID0gKDAsIF9jcmVhdGVTdmdJY29uLmRlZmF1bHQpKCAvKiNfX1BVUkVfXyovKDAsIF9qc3hSdW50aW1lLmpzeCkoXCJwYXRoXCIsIHtcbiAgZDogXCJNNy40MSAxNS40MSAxMiAxMC44M2w0LjU5IDQuNThMMTggMTRsLTYtNi02IDZ6XCJcbn0pLCAnS2V5Ym9hcmRBcnJvd1VwJyk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlXCI7XG5jb25zdCBfZXhjbHVkZWQgPSBbXCJjbGFzc05hbWVcIiwgXCJjb21wb25lbnRcIl07XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XG5pbXBvcnQgeyB1bnN0YWJsZV9jb21wb3NlQ2xhc3NlcyBhcyBjb21wb3NlQ2xhc3NlcyB9IGZyb20gJ0BtdWkvYmFzZSc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJy4uL3N0eWxlcy9zdHlsZWQnO1xuaW1wb3J0IHVzZVRoZW1lUHJvcHMgZnJvbSAnLi4vc3R5bGVzL3VzZVRoZW1lUHJvcHMnO1xuaW1wb3J0IHsgZ2V0Q2FyZENvbnRlbnRVdGlsaXR5Q2xhc3MgfSBmcm9tICcuL2NhcmRDb250ZW50Q2xhc3Nlcyc7XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuXG5jb25zdCB1c2VVdGlsaXR5Q2xhc3NlcyA9IG93bmVyU3RhdGUgPT4ge1xuICBjb25zdCB7XG4gICAgY2xhc3Nlc1xuICB9ID0gb3duZXJTdGF0ZTtcbiAgY29uc3Qgc2xvdHMgPSB7XG4gICAgcm9vdDogWydyb290J11cbiAgfTtcbiAgcmV0dXJuIGNvbXBvc2VDbGFzc2VzKHNsb3RzLCBnZXRDYXJkQ29udGVudFV0aWxpdHlDbGFzcywgY2xhc3Nlcyk7XG59O1xuXG5jb25zdCBDYXJkQ29udGVudFJvb3QgPSBzdHlsZWQoJ2RpdicsIHtcbiAgbmFtZTogJ011aUNhcmRDb250ZW50JyxcbiAgc2xvdDogJ1Jvb3QnLFxuICBvdmVycmlkZXNSZXNvbHZlcjogKHByb3BzLCBzdHlsZXMpID0+IHN0eWxlcy5yb290XG59KSgoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgcGFkZGluZzogMTYsXG4gICAgJyY6bGFzdC1jaGlsZCc6IHtcbiAgICAgIHBhZGRpbmdCb3R0b206IDI0XG4gICAgfVxuICB9O1xufSk7XG5jb25zdCBDYXJkQ29udGVudCA9IC8qI19fUFVSRV9fKi9SZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIENhcmRDb250ZW50KGluUHJvcHMsIHJlZikge1xuICBjb25zdCBwcm9wcyA9IHVzZVRoZW1lUHJvcHMoe1xuICAgIHByb3BzOiBpblByb3BzLFxuICAgIG5hbWU6ICdNdWlDYXJkQ29udGVudCdcbiAgfSk7XG5cbiAgY29uc3Qge1xuICAgIGNsYXNzTmFtZSxcbiAgICBjb21wb25lbnQgPSAnZGl2J1xuICB9ID0gcHJvcHMsXG4gICAgICAgIG90aGVyID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UocHJvcHMsIF9leGNsdWRlZCk7XG5cbiAgY29uc3Qgb3duZXJTdGF0ZSA9IF9leHRlbmRzKHt9LCBwcm9wcywge1xuICAgIGNvbXBvbmVudFxuICB9KTtcblxuICBjb25zdCBjbGFzc2VzID0gdXNlVXRpbGl0eUNsYXNzZXMob3duZXJTdGF0ZSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovX2pzeChDYXJkQ29udGVudFJvb3QsIF9leHRlbmRzKHtcbiAgICBhczogY29tcG9uZW50LFxuICAgIGNsYXNzTmFtZTogY2xzeChjbGFzc2VzLnJvb3QsIGNsYXNzTmFtZSksXG4gICAgb3duZXJTdGF0ZTogb3duZXJTdGF0ZSxcbiAgICByZWY6IHJlZlxuICB9LCBvdGhlcikpO1xufSk7XG5wcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBDYXJkQ29udGVudC5wcm9wVHlwZXNcbi8qIHJlbW92ZS1wcm9wdHlwZXMgKi9cbj0ge1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBXYXJuaW5nIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIHwgVGhlc2UgUHJvcFR5cGVzIGFyZSBnZW5lcmF0ZWQgZnJvbSB0aGUgVHlwZVNjcmlwdCB0eXBlIGRlZmluaXRpb25zIHxcbiAgLy8gfCAgICAgVG8gdXBkYXRlIHRoZW0gZWRpdCB0aGUgZC50cyBmaWxlIGFuZCBydW4gXCJ5YXJuIHByb3B0eXBlc1wiICAgICB8XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAvKipcbiAgICogVGhlIGNvbnRlbnQgb2YgdGhlIGNvbXBvbmVudC5cbiAgICovXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcblxuICAvKipcbiAgICogT3ZlcnJpZGUgb3IgZXh0ZW5kIHRoZSBzdHlsZXMgYXBwbGllZCB0byB0aGUgY29tcG9uZW50LlxuICAgKi9cbiAgY2xhc3NlczogUHJvcFR5cGVzLm9iamVjdCxcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBUaGUgY29tcG9uZW50IHVzZWQgZm9yIHRoZSByb290IG5vZGUuXG4gICAqIEVpdGhlciBhIHN0cmluZyB0byB1c2UgYSBIVE1MIGVsZW1lbnQgb3IgYSBjb21wb25lbnQuXG4gICAqL1xuICBjb21wb25lbnQ6IFByb3BUeXBlcy5lbGVtZW50VHlwZSxcblxuICAvKipcbiAgICogVGhlIHN5c3RlbSBwcm9wIHRoYXQgYWxsb3dzIGRlZmluaW5nIHN5c3RlbSBvdmVycmlkZXMgYXMgd2VsbCBhcyBhZGRpdGlvbmFsIENTUyBzdHlsZXMuXG4gICAqL1xuICBzeDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmZ1bmMsIFByb3BUeXBlcy5vYmplY3QsIFByb3BUeXBlcy5ib29sXSkpLCBQcm9wVHlwZXMuZnVuYywgUHJvcFR5cGVzLm9iamVjdF0pXG59IDogdm9pZCAwO1xuZXhwb3J0IGRlZmF1bHQgQ2FyZENvbnRlbnQ7IiwiaW1wb3J0IHsgZ2VuZXJhdGVVdGlsaXR5Q2xhc3MsIGdlbmVyYXRlVXRpbGl0eUNsYXNzZXMgfSBmcm9tICdAbXVpL2Jhc2UnO1xuZXhwb3J0IGZ1bmN0aW9uIGdldENhcmRDb250ZW50VXRpbGl0eUNsYXNzKHNsb3QpIHtcbiAgcmV0dXJuIGdlbmVyYXRlVXRpbGl0eUNsYXNzKCdNdWlDYXJkQ29udGVudCcsIHNsb3QpO1xufVxuY29uc3QgY2FyZENvbnRlbnRDbGFzc2VzID0gZ2VuZXJhdGVVdGlsaXR5Q2xhc3NlcygnTXVpQ2FyZENvbnRlbnQnLCBbJ3Jvb3QnXSk7XG5leHBvcnQgZGVmYXVsdCBjYXJkQ29udGVudENsYXNzZXM7IiwidmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbmltcG9ydCB7IGpzeCBhcyBfanN4LCBqc3hzIGFzIF9qc3hzIH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5pbXBvcnQgeyBDYXJkQ29udGVudCB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwnO1xuaW1wb3J0IENhcmRDb250YWluZXIgZnJvbSAnc2hhcmVkL3VpL0NhcmQvQ2FyZCc7XG5pbXBvcnQgQ29sbGFwc2libGVUYWJsZSBmcm9tICdzaGFyZWQvdWkvQ29sbGFwc2libGVUYWJsZS9Db2xsYXBzaWJsZVRhYmxlJztcbnZhciBPcmRlclBhZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIChfanN4KENhcmRDb250YWluZXIsIF9fYXNzaWduKHsgc3g6IHsgbXQ6IDIsIHA6IDIgfSB9LCB7IGNoaWxkcmVuOiBfanN4cyhDYXJkQ29udGVudCwgeyBjaGlsZHJlbjogW19qc3goXCJoMVwiLCB7IGNoaWxkcmVuOiBcIk9yZGVyUGFnZVwiIH0sIHZvaWQgMCksIF9qc3goQ29sbGFwc2libGVUYWJsZSwge30sIHZvaWQgMCldIH0sIHZvaWQgMCkgfSksIHZvaWQgMCkpO1xufTtcbmV4cG9ydCBkZWZhdWx0IE9yZGVyUGFnZTtcbiIsInZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCwganN4cyBhcyBfanN4cyB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEJveCBmcm9tICdAbXVpL21hdGVyaWFsL0JveCc7XG5pbXBvcnQgQ29sbGFwc2UgZnJvbSAnQG11aS9tYXRlcmlhbC9Db2xsYXBzZSc7XG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICdAbXVpL21hdGVyaWFsL0ljb25CdXR0b24nO1xuaW1wb3J0IFRhYmxlIGZyb20gJ0BtdWkvbWF0ZXJpYWwvVGFibGUnO1xuaW1wb3J0IFRhYmxlQm9keSBmcm9tICdAbXVpL21hdGVyaWFsL1RhYmxlQm9keSc7XG5pbXBvcnQgVGFibGVDZWxsIGZyb20gJ0BtdWkvbWF0ZXJpYWwvVGFibGVDZWxsJztcbmltcG9ydCBUYWJsZUNvbnRhaW5lciBmcm9tICdAbXVpL21hdGVyaWFsL1RhYmxlQ29udGFpbmVyJztcbmltcG9ydCBUYWJsZUhlYWQgZnJvbSAnQG11aS9tYXRlcmlhbC9UYWJsZUhlYWQnO1xuaW1wb3J0IFRhYmxlUm93IGZyb20gJ0BtdWkvbWF0ZXJpYWwvVGFibGVSb3cnO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG11aS9tYXRlcmlhbC9UeXBvZ3JhcGh5JztcbmltcG9ydCBQYXBlciBmcm9tICdAbXVpL21hdGVyaWFsL1BhcGVyJztcbmltcG9ydCBLZXlib2FyZEFycm93RG93bkljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9LZXlib2FyZEFycm93RG93bic7XG5pbXBvcnQgS2V5Ym9hcmRBcnJvd1VwSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0tleWJvYXJkQXJyb3dVcCc7XG5mdW5jdGlvbiBjcmVhdGVEYXRhKG5hbWUsIGNhbG9yaWVzLCBmYXQsIGNhcmJzLCBwcm90ZWluLCBwcmljZSkge1xuICAgIHJldHVybiB7XG4gICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgIGNhbG9yaWVzOiBjYWxvcmllcyxcbiAgICAgICAgZmF0OiBmYXQsXG4gICAgICAgIGNhcmJzOiBjYXJicyxcbiAgICAgICAgcHJvdGVpbjogcHJvdGVpbixcbiAgICAgICAgcHJpY2U6IHByaWNlLFxuICAgICAgICBoaXN0b3J5OiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZGF0ZTogJzIwMjAtMDEtMDUnLFxuICAgICAgICAgICAgICAgIGN1c3RvbWVySWQ6ICcxMTA5MTcwMCcsXG4gICAgICAgICAgICAgICAgYW1vdW50OiAzLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBkYXRlOiAnMjAyMC0wMS0wMicsXG4gICAgICAgICAgICAgICAgY3VzdG9tZXJJZDogJ0Fub255bW91cycsXG4gICAgICAgICAgICAgICAgYW1vdW50OiAxLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICB9O1xufVxuZnVuY3Rpb24gUm93KHByb3BzKSB7XG4gICAgdmFyIHJvdyA9IHByb3BzLnJvdztcbiAgICB2YXIgX2EgPSBSZWFjdC51c2VTdGF0ZShmYWxzZSksIG9wZW4gPSBfYVswXSwgc2V0T3BlbiA9IF9hWzFdO1xuICAgIHJldHVybiAoX2pzeHMoUmVhY3QuRnJhZ21lbnQsIHsgY2hpbGRyZW46IFtfanN4cyhUYWJsZVJvdywgX19hc3NpZ24oeyBzeDogeyAnJiA+IConOiB7IGJvcmRlckJvdHRvbTogJ3Vuc2V0JyB9IH0gfSwgeyBjaGlsZHJlbjogW19qc3goVGFibGVDZWxsLCB7IGNoaWxkcmVuOiBfanN4KEljb25CdXR0b24sIF9fYXNzaWduKHsgXCJhcmlhLWxhYmVsXCI6IFwiZXhwYW5kIHJvd1wiLCBzaXplOiBcInNtYWxsXCIsIG9uQ2xpY2s6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNldE9wZW4oIW9wZW4pOyB9IH0sIHsgY2hpbGRyZW46IG9wZW4gPyBfanN4KEtleWJvYXJkQXJyb3dVcEljb24sIHt9LCB2b2lkIDApIDogX2pzeChLZXlib2FyZEFycm93RG93bkljb24sIHt9LCB2b2lkIDApIH0pLCB2b2lkIDApIH0sIHZvaWQgMCksIF9qc3goVGFibGVDZWxsLCBfX2Fzc2lnbih7IGNvbXBvbmVudDogXCJ0aFwiLCBzY29wZTogXCJyb3dcIiB9LCB7IGNoaWxkcmVuOiByb3cubmFtZSB9KSwgdm9pZCAwKSwgX2pzeChUYWJsZUNlbGwsIF9fYXNzaWduKHsgYWxpZ246IFwicmlnaHRcIiB9LCB7IGNoaWxkcmVuOiByb3cuY2Fsb3JpZXMgfSksIHZvaWQgMCksIF9qc3goVGFibGVDZWxsLCBfX2Fzc2lnbih7IGFsaWduOiBcInJpZ2h0XCIgfSwgeyBjaGlsZHJlbjogcm93LmZhdCB9KSwgdm9pZCAwKSwgX2pzeChUYWJsZUNlbGwsIF9fYXNzaWduKHsgYWxpZ246IFwicmlnaHRcIiB9LCB7IGNoaWxkcmVuOiByb3cuY2FyYnMgfSksIHZvaWQgMCksIF9qc3goVGFibGVDZWxsLCBfX2Fzc2lnbih7IGFsaWduOiBcInJpZ2h0XCIgfSwgeyBjaGlsZHJlbjogcm93LnByb3RlaW4gfSksIHZvaWQgMCldIH0pLCB2b2lkIDApLCBfanN4KFRhYmxlUm93LCB7IGNoaWxkcmVuOiBfanN4KFRhYmxlQ2VsbCwgX19hc3NpZ24oeyBzdHlsZTogeyBwYWRkaW5nQm90dG9tOiAwLCBwYWRkaW5nVG9wOiAwIH0sIGNvbFNwYW46IDYgfSwgeyBjaGlsZHJlbjogX2pzeChDb2xsYXBzZSwgX19hc3NpZ24oeyBpbjogb3BlbiwgdGltZW91dDogXCJhdXRvXCIsIHVubW91bnRPbkV4aXQ6IHRydWUgfSwgeyBjaGlsZHJlbjogX2pzeHMoQm94LCBfX2Fzc2lnbih7IHN4OiB7IG1hcmdpbjogMSB9IH0sIHsgY2hpbGRyZW46IFtfanN4KFR5cG9ncmFwaHksIF9fYXNzaWduKHsgdmFyaWFudDogXCJoNlwiLCBndXR0ZXJCb3R0b206IHRydWUsIGNvbXBvbmVudDogXCJkaXZcIiB9LCB7IGNoaWxkcmVuOiBcIkhpc3RvcnlcIiB9KSwgdm9pZCAwKSwgX2pzeChUeXBvZ3JhcGh5LCBfX2Fzc2lnbih7IHZhcmlhbnQ6IFwiaDZcIiwgZ3V0dGVyQm90dG9tOiB0cnVlLCBjb21wb25lbnQ6IFwiZGl2XCIgfSwgeyBjaGlsZHJlbjogXCJIaXN0b3J5XCIgfSksIHZvaWQgMCksIF9qc3hzKFRhYmxlLCBfX2Fzc2lnbih7IHNpemU6IFwic21hbGxcIiwgXCJhcmlhLWxhYmVsXCI6IFwicHVyY2hhc2VzXCIgfSwgeyBjaGlsZHJlbjogW19qc3goVGFibGVIZWFkLCB7IGNoaWxkcmVuOiBfanN4cyhUYWJsZVJvdywgeyBjaGlsZHJlbjogW19qc3goVGFibGVDZWxsLCB7IGNoaWxkcmVuOiBcIkRhdGVcIiB9LCB2b2lkIDApLCBfanN4KFRhYmxlQ2VsbCwgeyBjaGlsZHJlbjogXCJDdXN0b21lclwiIH0sIHZvaWQgMCksIF9qc3goVGFibGVDZWxsLCBfX2Fzc2lnbih7IGFsaWduOiBcInJpZ2h0XCIgfSwgeyBjaGlsZHJlbjogXCJBbW91bnRcIiB9KSwgdm9pZCAwKSwgX2pzeChUYWJsZUNlbGwsIF9fYXNzaWduKHsgYWxpZ246IFwicmlnaHRcIiB9LCB7IGNoaWxkcmVuOiBcIlRvdGFsIHByaWNlICgkKVwiIH0pLCB2b2lkIDApXSB9LCB2b2lkIDApIH0sIHZvaWQgMCksIF9qc3goVGFibGVCb2R5LCB7IGNoaWxkcmVuOiByb3cuaGlzdG9yeS5tYXAoZnVuY3Rpb24gKGhpc3RvcnlSb3cpIHsgcmV0dXJuIChfanN4cyhUYWJsZVJvdywgeyBjaGlsZHJlbjogW19qc3goVGFibGVDZWxsLCBfX2Fzc2lnbih7IGNvbXBvbmVudDogXCJ0aFwiLCBzY29wZTogXCJyb3dcIiB9LCB7IGNoaWxkcmVuOiBoaXN0b3J5Um93LmRhdGUgfSksIHZvaWQgMCksIF9qc3goVGFibGVDZWxsLCB7IGNoaWxkcmVuOiBoaXN0b3J5Um93LmN1c3RvbWVySWQgfSwgdm9pZCAwKSwgX2pzeChUYWJsZUNlbGwsIF9fYXNzaWduKHsgYWxpZ246IFwicmlnaHRcIiB9LCB7IGNoaWxkcmVuOiBoaXN0b3J5Um93LmFtb3VudCB9KSwgdm9pZCAwKSwgX2pzeChUYWJsZUNlbGwsIF9fYXNzaWduKHsgYWxpZ246IFwicmlnaHRcIiB9LCB7IGNoaWxkcmVuOiBNYXRoLnJvdW5kKGhpc3RvcnlSb3cuYW1vdW50ICogcm93LnByaWNlICogMTAwKSAvIDEwMCB9KSwgdm9pZCAwKV0gfSwgaGlzdG9yeVJvdy5kYXRlKSk7IH0pIH0sIHZvaWQgMCldIH0pLCB2b2lkIDApXSB9KSwgdm9pZCAwKSB9KSwgdm9pZCAwKSB9KSwgdm9pZCAwKSB9LCB2b2lkIDApXSB9LCB2b2lkIDApKTtcbn1cbnZhciByb3dzID0gW1xuICAgIGNyZWF0ZURhdGEoJ0Zyb3plbiB5b2dodXJ0JywgMTU5LCA2LjAsIDI0LCA0LjAsIDMuOTkpLFxuICAgIGNyZWF0ZURhdGEoJ0ljZSBjcmVhbSBzYW5kd2ljaCcsIDIzNywgOS4wLCAzNywgNC4zLCA0Ljk5KSxcbiAgICBjcmVhdGVEYXRhKCdFY2xhaXInLCAyNjIsIDE2LjAsIDI0LCA2LjAsIDMuNzkpLFxuICAgIGNyZWF0ZURhdGEoJ0N1cGNha2UnLCAzMDUsIDMuNywgNjcsIDQuMywgMi41KSxcbiAgICBjcmVhdGVEYXRhKCdHaW5nZXJicmVhZCcsIDM1NiwgMTYuMCwgNDksIDMuOSwgMS41KSxcbl07XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb2xsYXBzaWJsZVRhYmxlKCkge1xuICAgIHJldHVybiAoX2pzeChUYWJsZUNvbnRhaW5lciwgX19hc3NpZ24oeyBjb21wb25lbnQ6IFBhcGVyIH0sIHsgY2hpbGRyZW46IF9qc3hzKFRhYmxlLCBfX2Fzc2lnbih7IFwiYXJpYS1sYWJlbFwiOiBcImNvbGxhcHNpYmxlIHRhYmxlXCIgfSwgeyBjaGlsZHJlbjogW19qc3goVGFibGVIZWFkLCB7IGNoaWxkcmVuOiBfanN4cyhUYWJsZVJvdywgeyBjaGlsZHJlbjogW19qc3goVGFibGVDZWxsLCB7fSwgdm9pZCAwKSwgX2pzeChUYWJsZUNlbGwsIHsgY2hpbGRyZW46IFwiRGVzc2VydCAoMTAwZyBzZXJ2aW5nKVwiIH0sIHZvaWQgMCksIF9qc3goVGFibGVDZWxsLCBfX2Fzc2lnbih7IGFsaWduOiBcInJpZ2h0XCIgfSwgeyBjaGlsZHJlbjogXCJDYWxvcmllc1wiIH0pLCB2b2lkIDApLCBfanN4KFRhYmxlQ2VsbCwgX19hc3NpZ24oeyBhbGlnbjogXCJyaWdodFwiIH0sIHsgY2hpbGRyZW46IFwiRmF0XFx1MDBBMChnKVwiIH0pLCB2b2lkIDApLCBfanN4KFRhYmxlQ2VsbCwgX19hc3NpZ24oeyBhbGlnbjogXCJyaWdodFwiIH0sIHsgY2hpbGRyZW46IFwiQ2FyYnNcXHUwMEEwKGcpXCIgfSksIHZvaWQgMCksIF9qc3goVGFibGVDZWxsLCBfX2Fzc2lnbih7IGFsaWduOiBcInJpZ2h0XCIgfSwgeyBjaGlsZHJlbjogXCJQcm90ZWluXFx1MDBBMChnKVwiIH0pLCB2b2lkIDApXSB9LCB2b2lkIDApIH0sIHZvaWQgMCksIF9qc3goVGFibGVCb2R5LCB7IGNoaWxkcmVuOiByb3dzLm1hcChmdW5jdGlvbiAocm93KSB7IHJldHVybiAoX2pzeChSb3csIHsgcm93OiByb3cgfSwgcm93Lm5hbWUpKTsgfSkgfSwgdm9pZCAwKV0gfSksIHZvaWQgMCkgfSksIHZvaWQgMCkpO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9