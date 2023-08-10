"use strict";
(self["webpackChunkadmin_panel"] = self["webpackChunkadmin_panel"] || []).push([["src_features_AuthByUser_ui_LoginForm_LoginForm_tsx"],{

/***/ "./src/features/AuthByUser/model/selectors/getLoginError/getLoginError.ts":
/*!********************************************************************************!*\
  !*** ./src/features/AuthByUser/model/selectors/getLoginError/getLoginError.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getLoginError": () => (/* binding */ getLoginError)
/* harmony export */ });
var getLoginError = function (state) { var _a; return (_a = state === null || state === void 0 ? void 0 : state.loginForm) === null || _a === void 0 ? void 0 : _a.error; };


/***/ }),

/***/ "./src/features/AuthByUser/model/selectors/getLoginMail/getLoginMail.ts":
/*!******************************************************************************!*\
  !*** ./src/features/AuthByUser/model/selectors/getLoginMail/getLoginMail.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getLoginMail": () => (/* binding */ getLoginMail)
/* harmony export */ });
var getLoginMail = function (state) { var _a; return ((_a = state === null || state === void 0 ? void 0 : state.loginForm) === null || _a === void 0 ? void 0 : _a.email) || ''; };


/***/ }),

/***/ "./src/features/AuthByUser/model/selectors/getLoginPassword/getLoginPassword.ts":
/*!**************************************************************************************!*\
  !*** ./src/features/AuthByUser/model/selectors/getLoginPassword/getLoginPassword.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getLoginPassword": () => (/* binding */ getLoginPassword)
/* harmony export */ });
var getLoginPassword = function (state) { var _a; return ((_a = state === null || state === void 0 ? void 0 : state.loginForm) === null || _a === void 0 ? void 0 : _a.password) || ''; };


/***/ }),

/***/ "./src/features/AuthByUser/model/services/loginByUsername/loginByUsername.ts":
/*!***********************************************************************************!*\
  !*** ./src/features/AuthByUser/model/services/loginByUsername/loginByUsername.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loginByUsername": () => (/* binding */ loginByUsername)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var entities_User__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! entities/User */ "./src/entities/User/index.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var loginByUsername = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createAsyncThunk)('login/loginByUsername', function (_a, thunkAPI) {
    var email = _a.email, password = _a.password;
    return __awaiter(void 0, void 0, void 0, function () {
        var response, error_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, axios__WEBPACK_IMPORTED_MODULE_2__["default"].post("http://localhost:5000/api/login", { email: email, password: password })];
                case 1:
                    response = _b.sent();
                    if (!response.data) {
                        throw new Error('No data');
                    }
                    localStorage.setItem('token', JSON.stringify(response.data));
                    thunkAPI.dispatch(entities_User__WEBPACK_IMPORTED_MODULE_0__.userActions.setAuthData(response.data));
                    return [2 /*return*/, response.data];
                case 2:
                    error_1 = _b.sent();
                    return [2 /*return*/, thunkAPI.rejectWithValue(error_1.response.data)];
                case 3: return [2 /*return*/];
            }
        });
    });
});


/***/ }),

/***/ "./src/features/AuthByUser/model/slice/loginSlice.ts":
/*!***********************************************************!*\
  !*** ./src/features/AuthByUser/model/slice/loginSlice.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loginSlice": () => (/* binding */ loginSlice),
/* harmony export */   "loginActions": () => (/* binding */ loginActions),
/* harmony export */   "loginReducer": () => (/* binding */ loginReducer)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* harmony import */ var _services_loginByUsername_loginByUsername__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/loginByUsername/loginByUsername */ "./src/features/AuthByUser/model/services/loginByUsername/loginByUsername.ts");


// Начальное состояние
var initialState = {
    email: '',
    password: '',
    isLoading: false,
};
// Слайс - это часть хранилища, которая отвечает за одну сущность
var loginSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createSlice)({
    name: 'login',
    initialState: initialState,
    // reducers - это обработчики экшенов, которые создаются с помощью createAction
    reducers: {
        setUsername: function (state, action) {
            state.email = action.payload;
        },
        setPassword: function (state, action) {
            state.password = action.payload;
        }
    },
    // extraReducers - это обработчики экшенов, которые создаются с помощью createAsyncThunk
    extraReducers: function (builder) {
        builder
            .addCase(_services_loginByUsername_loginByUsername__WEBPACK_IMPORTED_MODULE_0__.loginByUsername.pending, function (state) {
            state.error = undefined;
            state.isLoading = true;
        })
            .addCase(_services_loginByUsername_loginByUsername__WEBPACK_IMPORTED_MODULE_0__.loginByUsername.fulfilled, function (state) {
            state.isLoading = false;
        })
            .addCase(_services_loginByUsername_loginByUsername__WEBPACK_IMPORTED_MODULE_0__.loginByUsername.rejected, function (state, action) {
            state.isLoading = false;
        });
    }
});
// Экспортируем actions и reducer
var loginActions = loginSlice.actions;
var loginReducer = loginSlice.reducer;


/***/ }),

/***/ "./src/features/AuthByUser/ui/LoginForm/LoginForm.tsx":
/*!************************************************************!*\
  !*** ./src/features/AuthByUser/ui/LoginForm/LoginForm.tsx ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Button/Button.js");
/* harmony import */ var _model_slice_loginSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../model/slice/loginSlice */ "./src/features/AuthByUser/model/slice/loginSlice.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _model_services_loginByUsername_loginByUsername__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../model/services/loginByUsername/loginByUsername */ "./src/features/AuthByUser/model/services/loginByUsername/loginByUsername.ts");
/* harmony import */ var shared_ui_BasicInput_BasicInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! shared/ui/BasicInput/BasicInput */ "./src/shared/ui/BasicInput/BasicInput.tsx");
/* harmony import */ var _model_selectors_getLoginMail_getLoginMail__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../model/selectors/getLoginMail/getLoginMail */ "./src/features/AuthByUser/model/selectors/getLoginMail/getLoginMail.ts");
/* harmony import */ var _model_selectors_getLoginPassword_getLoginPassword__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../model/selectors/getLoginPassword/getLoginPassword */ "./src/features/AuthByUser/model/selectors/getLoginPassword/getLoginPassword.ts");
/* harmony import */ var _model_selectors_getLoginError_getLoginError__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../model/selectors/getLoginError/getLoginError */ "./src/features/AuthByUser/model/selectors/getLoginError/getLoginError.ts");
/* harmony import */ var shared_lib_components_DynamicModuleLoader_DynamicModuleLoader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! shared/lib/components/DynamicModuleLoader/DynamicModuleLoader */ "./src/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader.tsx");
/* harmony import */ var shared_lib_hooks_useAppDispatch_useAppDispatch__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! shared/lib/hooks/useAppDispatch/useAppDispatch */ "./src/shared/lib/hooks/useAppDispatch/useAppDispatch.ts");
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
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};












var initialReducers = {
    loginForm: _model_slice_loginSlice__WEBPACK_IMPORTED_MODULE_1__.loginReducer
};
var LoginForm = (0,react__WEBPACK_IMPORTED_MODULE_2__.memo)(function (_a) {
    var onSuccess = _a.onSuccess;
    var dispatch = (0,shared_lib_hooks_useAppDispatch_useAppDispatch__WEBPACK_IMPORTED_MODULE_10__.useAppDispatch)();
    var email = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(_model_selectors_getLoginMail_getLoginMail__WEBPACK_IMPORTED_MODULE_6__.getLoginMail);
    var password = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(_model_selectors_getLoginPassword_getLoginPassword__WEBPACK_IMPORTED_MODULE_7__.getLoginPassword);
    var error = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(_model_selectors_getLoginError_getLoginError__WEBPACK_IMPORTED_MODULE_8__.getLoginError);
    // Функиця useCallback нужна для того, чтобы не создавать новую функцию при каждом рендере
    var onChangeUsername = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(function (value) {
        dispatch(_model_slice_loginSlice__WEBPACK_IMPORTED_MODULE_1__.loginActions.setUsername(value));
    }, [dispatch]);
    var onChangePassword = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(function (value) {
        dispatch(_model_slice_loginSlice__WEBPACK_IMPORTED_MODULE_1__.loginActions.setPassword(value));
    }, [dispatch]);
    var onLoginClick = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(function () { return __awaiter(void 0, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, dispatch((0,_model_services_loginByUsername_loginByUsername__WEBPACK_IMPORTED_MODULE_4__.loginByUsername)({ email: email, password: password }))];
                case 1:
                    result = _a.sent();
                    if (result.meta.requestStatus === 'fulfilled') {
                        onSuccess();
                    }
                    return [2 /*return*/];
            }
        });
    }); }, [onSuccess, dispatch, email, password]);
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(shared_lib_components_DynamicModuleLoader_DynamicModuleLoader__WEBPACK_IMPORTED_MODULE_9__.DynamicModuleLoader, __assign({ reducers: initialReducers, removeAfterUnmount: true }, { children: [error && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: error }, void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_BasicInput_BasicInput__WEBPACK_IMPORTED_MODULE_5__.BasicInput, { onChange: onChangeUsername, value: email }, void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_BasicInput_BasicInput__WEBPACK_IMPORTED_MODULE_5__.BasicInput, { onChange: onChangePassword, value: password }, void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], __assign({ onClick: onLoginClick }, { children: "\u0412\u043E\u0439\u0442\u0438" }), void 0)] }), void 0));
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoginForm);


/***/ }),

/***/ "./src/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader.tsx":
/*!*******************************************************************************!*\
  !*** ./src/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader.tsx ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DynamicModuleLoader": () => (/* binding */ DynamicModuleLoader)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");



var DynamicModuleLoader = function (props) {
    var children = props.children, reducers = props.reducers, removeAfterUnmount = props.removeAfterUnmount;
    var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
    var store = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useStore)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
        Object.entries(reducers).forEach(function (_a) {
            var name = _a[0], reducer = _a[1];
            store.reducerManager.add(name, reducer);
            dispatch({ type: "@INIT ".concat(name, " reducer") });
        });
        return function () {
            if (removeAfterUnmount) {
                Object.entries(reducers).forEach(function (_a) {
                    var name = _a[0], reducer = _a[1];
                    store.reducerManager.remove(name);
                    dispatch({ type: "@REMOVE ".concat(name, " reducer") });
                });
            }
        };
    }, []);
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: children }, void 0));
};


/***/ }),

/***/ "./src/shared/lib/hooks/useAppDispatch/useAppDispatch.ts":
/*!***************************************************************!*\
  !*** ./src/shared/lib/hooks/useAppDispatch/useAppDispatch.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useAppDispatch": () => (/* binding */ useAppDispatch)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

// Хук, который возвращает функцию dispatch хранилища Redux.
var useAppDispatch = function () { return (0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useDispatch)(); };


/***/ }),

/***/ "./src/shared/ui/BasicInput/BasicInput.tsx":
/*!*************************************************!*\
  !*** ./src/shared/ui/BasicInput/BasicInput.tsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BasicInput": () => (/* binding */ BasicInput)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _mui_joy_Input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/joy/Input */ "./node_modules/@mui/joy/Input/Input.js");



var BasicInput = (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function (props) {
    var value = props.value, onChange = props.onChange;
    var onChangeInput = function (e) {
        onChange && onChange(e.target.value);
    };
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_joy_Input__WEBPACK_IMPORTED_MODULE_2__["default"], { color: "neutral", size: "md", variant: "outlined", value: value, onChange: onChangeInput }, void 0));
});


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2ZlYXR1cmVzX0F1dGhCeVVzZXJfdWlfTG9naW5Gb3JtX0xvZ2luRm9ybV90c3guNmQzNGQxMDI4MTUxYjBjMDJhMjMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFPLHVDQUF1QyxRQUFROzs7Ozs7Ozs7Ozs7Ozs7QUNBL0Msc0NBQXNDLFFBQVE7Ozs7Ozs7Ozs7Ozs7OztBQ0E5QywwQ0FBMEMsUUFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQXpELGlCQUFpQixTQUFJLElBQUksU0FBSTtBQUM3Qiw0QkFBNEIsK0RBQStELGlCQUFpQjtBQUM1RztBQUNBLG9DQUFvQyxNQUFNLCtCQUErQixZQUFZO0FBQ3JGLG1DQUFtQyxNQUFNLG1DQUFtQyxZQUFZO0FBQ3hGLGdDQUFnQztBQUNoQztBQUNBLEtBQUs7QUFDTDtBQUNBLG1CQUFtQixTQUFJLElBQUksU0FBSTtBQUMvQixjQUFjLDZCQUE2QiwwQkFBMEIsY0FBYyxxQkFBcUI7QUFDeEcsaUJBQWlCLG9EQUFvRCxxRUFBcUUsY0FBYztBQUN4Six1QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QztBQUN4QyxtQ0FBbUMsU0FBUztBQUM1QyxtQ0FBbUMsV0FBVyxVQUFVO0FBQ3hELDBDQUEwQyxjQUFjO0FBQ3hEO0FBQ0EsOEdBQThHLE9BQU87QUFDckgsaUZBQWlGLGlCQUFpQjtBQUNsRyx5REFBeUQsZ0JBQWdCLFFBQVE7QUFDakYsK0NBQStDLGdCQUFnQixnQkFBZ0I7QUFDL0U7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBLFVBQVUsWUFBWSxhQUFhLFNBQVMsVUFBVTtBQUN0RCxvQ0FBb0MsU0FBUztBQUM3QztBQUNBO0FBQ29EO0FBQzFCO0FBQ2tCO0FBQ3JDLHNCQUFzQixrRUFBZ0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsa0RBQVUsc0NBQXNDLGtDQUFrQztBQUMzSDtBQUNBO0FBQ0E7QUFD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UDtBQUNBLG1CQUFtQix3REFBVztBQUM5QixnQkFBZ0IscURBQVE7QUFDeEIsSUFBSSxnREFBUztBQUNiO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qix5Q0FBeUM7QUFDaEUsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsMkNBQTJDO0FBQzFFLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsS0FBSztBQUNMLFlBQVksc0RBQUksQ0FBQyx1REFBUyxJQUFJLG9CQUFvQjtBQUNsRDs7Ozs7Ozs7Ozs7Ozs7OztBQ3hCMEM7QUFDMUM7QUFDTyxtQ0FBbUMsT0FBTyx3REFBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRlo7QUFDbkI7QUFDTTtBQUM1QixpQkFBaUIsMkNBQUk7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLHNEQUFJLENBQUMsc0RBQUssSUFBSSwwRkFBMEY7QUFDcEgsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2FkbWluLXBhbmVsLy4vc3JjL2ZlYXR1cmVzL0F1dGhCeVVzZXIvbW9kZWwvc2VsZWN0b3JzL2dldExvZ2luRXJyb3IvZ2V0TG9naW5FcnJvci50cyIsIndlYnBhY2s6Ly9hZG1pbi1wYW5lbC8uL3NyYy9mZWF0dXJlcy9BdXRoQnlVc2VyL21vZGVsL3NlbGVjdG9ycy9nZXRMb2dpbk1haWwvZ2V0TG9naW5NYWlsLnRzIiwid2VicGFjazovL2FkbWluLXBhbmVsLy4vc3JjL2ZlYXR1cmVzL0F1dGhCeVVzZXIvbW9kZWwvc2VsZWN0b3JzL2dldExvZ2luUGFzc3dvcmQvZ2V0TG9naW5QYXNzd29yZC50cyIsIndlYnBhY2s6Ly9hZG1pbi1wYW5lbC8uL3NyYy9mZWF0dXJlcy9BdXRoQnlVc2VyL21vZGVsL3NlcnZpY2VzL2xvZ2luQnlVc2VybmFtZS9sb2dpbkJ5VXNlcm5hbWUudHMiLCJ3ZWJwYWNrOi8vYWRtaW4tcGFuZWwvLi9zcmMvZmVhdHVyZXMvQXV0aEJ5VXNlci9tb2RlbC9zbGljZS9sb2dpblNsaWNlLnRzIiwid2VicGFjazovL2FkbWluLXBhbmVsLy4vc3JjL2ZlYXR1cmVzL0F1dGhCeVVzZXIvdWkvTG9naW5Gb3JtL0xvZ2luRm9ybS50c3giLCJ3ZWJwYWNrOi8vYWRtaW4tcGFuZWwvLi9zcmMvc2hhcmVkL2xpYi9jb21wb25lbnRzL0R5bmFtaWNNb2R1bGVMb2FkZXIvRHluYW1pY01vZHVsZUxvYWRlci50c3giLCJ3ZWJwYWNrOi8vYWRtaW4tcGFuZWwvLi9zcmMvc2hhcmVkL2xpYi9ob29rcy91c2VBcHBEaXNwYXRjaC91c2VBcHBEaXNwYXRjaC50cyIsIndlYnBhY2s6Ly9hZG1pbi1wYW5lbC8uL3NyYy9zaGFyZWQvdWkvQmFzaWNJbnB1dC9CYXNpY0lucHV0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgdmFyIGdldExvZ2luRXJyb3IgPSBmdW5jdGlvbiAoc3RhdGUpIHsgdmFyIF9hOyByZXR1cm4gKF9hID0gc3RhdGUgPT09IG51bGwgfHwgc3RhdGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHN0YXRlLmxvZ2luRm9ybSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmVycm9yOyB9O1xuIiwiZXhwb3J0IHZhciBnZXRMb2dpbk1haWwgPSBmdW5jdGlvbiAoc3RhdGUpIHsgdmFyIF9hOyByZXR1cm4gKChfYSA9IHN0YXRlID09PSBudWxsIHx8IHN0YXRlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBzdGF0ZS5sb2dpbkZvcm0pID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5lbWFpbCkgfHwgJyc7IH07XG4iLCJleHBvcnQgdmFyIGdldExvZ2luUGFzc3dvcmQgPSBmdW5jdGlvbiAoc3RhdGUpIHsgdmFyIF9hOyByZXR1cm4gKChfYSA9IHN0YXRlID09PSBudWxsIHx8IHN0YXRlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBzdGF0ZS5sb2dpbkZvcm0pID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5wYXNzd29yZCkgfHwgJyc7IH07XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcbiAgICB9XG59O1xuaW1wb3J0IHsgY3JlYXRlQXN5bmNUaHVuayB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyB1c2VyQWN0aW9ucyB9IGZyb20gXCJlbnRpdGllcy9Vc2VyXCI7XG5leHBvcnQgdmFyIGxvZ2luQnlVc2VybmFtZSA9IGNyZWF0ZUFzeW5jVGh1bmsoJ2xvZ2luL2xvZ2luQnlVc2VybmFtZScsIGZ1bmN0aW9uIChfYSwgdGh1bmtBUEkpIHtcbiAgICB2YXIgZW1haWwgPSBfYS5lbWFpbCwgcGFzc3dvcmQgPSBfYS5wYXNzd29yZDtcbiAgICByZXR1cm4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHJlc3BvbnNlLCBlcnJvcl8xO1xuICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9iKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKF9iLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICBfYi50cnlzLnB1c2goWzAsIDIsICwgM10pO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBheGlvcy5wb3N0KFwiaHR0cDovL2xvY2FsaG9zdDo1MDAwL2FwaS9sb2dpblwiLCB7IGVtYWlsOiBlbWFpbCwgcGFzc3dvcmQ6IHBhc3N3b3JkIH0pXTtcbiAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlID0gX2Iuc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXJlc3BvbnNlLmRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTm8gZGF0YScpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2tlbicsIEpTT04uc3RyaW5naWZ5KHJlc3BvbnNlLmRhdGEpKTtcbiAgICAgICAgICAgICAgICAgICAgdGh1bmtBUEkuZGlzcGF0Y2godXNlckFjdGlvbnMuc2V0QXV0aERhdGEocmVzcG9uc2UuZGF0YSkpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgcmVzcG9uc2UuZGF0YV07XG4gICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICBlcnJvcl8xID0gX2Iuc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgdGh1bmtBUEkucmVqZWN0V2l0aFZhbHVlKGVycm9yXzEucmVzcG9uc2UuZGF0YSldO1xuICAgICAgICAgICAgICAgIGNhc2UgMzogcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbn0pO1xuIiwiaW1wb3J0IHsgY3JlYXRlU2xpY2UgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0JztcbmltcG9ydCB7IGxvZ2luQnlVc2VybmFtZSB9IGZyb20gJy4uL3NlcnZpY2VzL2xvZ2luQnlVc2VybmFtZS9sb2dpbkJ5VXNlcm5hbWUnO1xuLy8g0J3QsNGH0LDQu9GM0L3QvtC1INGB0L7RgdGC0L7Rj9C90LjQtVxudmFyIGluaXRpYWxTdGF0ZSA9IHtcbiAgICBlbWFpbDogJycsXG4gICAgcGFzc3dvcmQ6ICcnLFxuICAgIGlzTG9hZGluZzogZmFsc2UsXG59O1xuLy8g0KHQu9Cw0LnRgSAtINGN0YLQviDRh9Cw0YHRgtGMINGF0YDQsNC90LjQu9C40YnQsCwg0LrQvtGC0L7RgNCw0Y8g0L7RgtCy0LXRh9Cw0LXRgiDQt9CwINC+0LTQvdGDINGB0YPRidC90L7RgdGC0YxcbmV4cG9ydCB2YXIgbG9naW5TbGljZSA9IGNyZWF0ZVNsaWNlKHtcbiAgICBuYW1lOiAnbG9naW4nLFxuICAgIGluaXRpYWxTdGF0ZTogaW5pdGlhbFN0YXRlLFxuICAgIC8vIHJlZHVjZXJzIC0g0Y3RgtC+INC+0LHRgNCw0LHQvtGC0YfQuNC60Lgg0Y3QutGI0LXQvdC+0LIsINC60L7RgtC+0YDRi9C1INGB0L7Qt9C00LDRjtGC0YHRjyDRgSDQv9C+0LzQvtGJ0YzRjiBjcmVhdGVBY3Rpb25cbiAgICByZWR1Y2Vyczoge1xuICAgICAgICBzZXRVc2VybmFtZTogZnVuY3Rpb24gKHN0YXRlLCBhY3Rpb24pIHtcbiAgICAgICAgICAgIHN0YXRlLmVtYWlsID0gYWN0aW9uLnBheWxvYWQ7XG4gICAgICAgIH0sXG4gICAgICAgIHNldFBhc3N3b3JkOiBmdW5jdGlvbiAoc3RhdGUsIGFjdGlvbikge1xuICAgICAgICAgICAgc3RhdGUucGFzc3dvcmQgPSBhY3Rpb24ucGF5bG9hZDtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgLy8gZXh0cmFSZWR1Y2VycyAtINGN0YLQviDQvtCx0YDQsNCx0L7RgtGH0LjQutC4INGN0LrRiNC10L3QvtCyLCDQutC+0YLQvtGA0YvQtSDRgdC+0LfQtNCw0Y7RgtGB0Y8g0YEg0L/QvtC80L7RidGM0Y4gY3JlYXRlQXN5bmNUaHVua1xuICAgIGV4dHJhUmVkdWNlcnM6IGZ1bmN0aW9uIChidWlsZGVyKSB7XG4gICAgICAgIGJ1aWxkZXJcbiAgICAgICAgICAgIC5hZGRDYXNlKGxvZ2luQnlVc2VybmFtZS5wZW5kaW5nLCBmdW5jdGlvbiAoc3RhdGUpIHtcbiAgICAgICAgICAgIHN0YXRlLmVycm9yID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgc3RhdGUuaXNMb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC5hZGRDYXNlKGxvZ2luQnlVc2VybmFtZS5mdWxmaWxsZWQsIGZ1bmN0aW9uIChzdGF0ZSkge1xuICAgICAgICAgICAgc3RhdGUuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIH0pXG4gICAgICAgICAgICAuYWRkQ2FzZShsb2dpbkJ5VXNlcm5hbWUucmVqZWN0ZWQsIGZ1bmN0aW9uIChzdGF0ZSwgYWN0aW9uKSB7XG4gICAgICAgICAgICBzdGF0ZS5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgfVxufSk7XG4vLyDQrdC60YHQv9C+0YDRgtC40YDRg9C10LwgYWN0aW9ucyDQuCByZWR1Y2VyXG5leHBvcnQgdmFyIGxvZ2luQWN0aW9ucyA9IGxvZ2luU2xpY2UuYWN0aW9ucztcbmV4cG9ydCB2YXIgbG9naW5SZWR1Y2VyID0gbG9naW5TbGljZS5yZWR1Y2VyO1xuIiwidmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xuICAgIH1cbn07XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCwganN4cyBhcyBfanN4cyB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnQG11aS9tYXRlcmlhbCc7XG5pbXBvcnQgeyBsb2dpbkFjdGlvbnMsIGxvZ2luUmVkdWNlciB9IGZyb20gJy4uLy4uL21vZGVsL3NsaWNlL2xvZ2luU2xpY2UnO1xuaW1wb3J0IHsgbWVtbywgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IGxvZ2luQnlVc2VybmFtZSB9IGZyb20gJy4uLy4uL21vZGVsL3NlcnZpY2VzL2xvZ2luQnlVc2VybmFtZS9sb2dpbkJ5VXNlcm5hbWUnO1xuaW1wb3J0IHsgQmFzaWNJbnB1dCB9IGZyb20gJ3NoYXJlZC91aS9CYXNpY0lucHV0L0Jhc2ljSW5wdXQnO1xuaW1wb3J0IHsgZ2V0TG9naW5NYWlsIH0gZnJvbSAnLi4vLi4vbW9kZWwvc2VsZWN0b3JzL2dldExvZ2luTWFpbC9nZXRMb2dpbk1haWwnO1xuaW1wb3J0IHsgZ2V0TG9naW5QYXNzd29yZCB9IGZyb20gJy4uLy4uL21vZGVsL3NlbGVjdG9ycy9nZXRMb2dpblBhc3N3b3JkL2dldExvZ2luUGFzc3dvcmQnO1xuaW1wb3J0IHsgZ2V0TG9naW5FcnJvciB9IGZyb20gJy4uLy4uL21vZGVsL3NlbGVjdG9ycy9nZXRMb2dpbkVycm9yL2dldExvZ2luRXJyb3InO1xuaW1wb3J0IHsgRHluYW1pY01vZHVsZUxvYWRlciB9IGZyb20gJ3NoYXJlZC9saWIvY29tcG9uZW50cy9EeW5hbWljTW9kdWxlTG9hZGVyL0R5bmFtaWNNb2R1bGVMb2FkZXInO1xuaW1wb3J0IHsgdXNlQXBwRGlzcGF0Y2ggfSBmcm9tICdzaGFyZWQvbGliL2hvb2tzL3VzZUFwcERpc3BhdGNoL3VzZUFwcERpc3BhdGNoJztcbnZhciBpbml0aWFsUmVkdWNlcnMgPSB7XG4gICAgbG9naW5Gb3JtOiBsb2dpblJlZHVjZXJcbn07XG52YXIgTG9naW5Gb3JtID0gbWVtbyhmdW5jdGlvbiAoX2EpIHtcbiAgICB2YXIgb25TdWNjZXNzID0gX2Eub25TdWNjZXNzO1xuICAgIHZhciBkaXNwYXRjaCA9IHVzZUFwcERpc3BhdGNoKCk7XG4gICAgdmFyIGVtYWlsID0gdXNlU2VsZWN0b3IoZ2V0TG9naW5NYWlsKTtcbiAgICB2YXIgcGFzc3dvcmQgPSB1c2VTZWxlY3RvcihnZXRMb2dpblBhc3N3b3JkKTtcbiAgICB2YXIgZXJyb3IgPSB1c2VTZWxlY3RvcihnZXRMb2dpbkVycm9yKTtcbiAgICAvLyDQpNGD0L3QutC40YbRjyB1c2VDYWxsYmFjayDQvdGD0LbQvdCwINC00LvRjyDRgtC+0LPQviwg0YfRgtC+0LHRiyDQvdC1INGB0L7Qt9C00LDQstCw0YLRjCDQvdC+0LLRg9GOINGE0YPQvdC60YbQuNGOINC/0YDQuCDQutCw0LbQtNC+0Lwg0YDQtdC90LTQtdGA0LVcbiAgICB2YXIgb25DaGFuZ2VVc2VybmFtZSA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICBkaXNwYXRjaChsb2dpbkFjdGlvbnMuc2V0VXNlcm5hbWUodmFsdWUpKTtcbiAgICB9LCBbZGlzcGF0Y2hdKTtcbiAgICB2YXIgb25DaGFuZ2VQYXNzd29yZCA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICBkaXNwYXRjaChsb2dpbkFjdGlvbnMuc2V0UGFzc3dvcmQodmFsdWUpKTtcbiAgICB9LCBbZGlzcGF0Y2hdKTtcbiAgICB2YXIgb25Mb2dpbkNsaWNrID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKCkgeyByZXR1cm4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHJlc3VsdDtcbiAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIFs0IC8qeWllbGQqLywgZGlzcGF0Y2gobG9naW5CeVVzZXJuYW1lKHsgZW1haWw6IGVtYWlsLCBwYXNzd29yZDogcGFzc3dvcmQgfSkpXTtcbiAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5tZXRhLnJlcXVlc3RTdGF0dXMgPT09ICdmdWxmaWxsZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvblN1Y2Nlc3MoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pOyB9LCBbb25TdWNjZXNzLCBkaXNwYXRjaCwgZW1haWwsIHBhc3N3b3JkXSk7XG4gICAgcmV0dXJuIChfanN4cyhEeW5hbWljTW9kdWxlTG9hZGVyLCBfX2Fzc2lnbih7IHJlZHVjZXJzOiBpbml0aWFsUmVkdWNlcnMsIHJlbW92ZUFmdGVyVW5tb3VudDogdHJ1ZSB9LCB7IGNoaWxkcmVuOiBbZXJyb3IgJiYgX2pzeChcImRpdlwiLCB7IGNoaWxkcmVuOiBlcnJvciB9LCB2b2lkIDApLCBfanN4KEJhc2ljSW5wdXQsIHsgb25DaGFuZ2U6IG9uQ2hhbmdlVXNlcm5hbWUsIHZhbHVlOiBlbWFpbCB9LCB2b2lkIDApLCBfanN4KEJhc2ljSW5wdXQsIHsgb25DaGFuZ2U6IG9uQ2hhbmdlUGFzc3dvcmQsIHZhbHVlOiBwYXNzd29yZCB9LCB2b2lkIDApLCBfanN4KEJ1dHRvbiwgX19hc3NpZ24oeyBvbkNsaWNrOiBvbkxvZ2luQ2xpY2sgfSwgeyBjaGlsZHJlbjogXCJcXHUwNDEyXFx1MDQzRVxcdTA0MzlcXHUwNDQyXFx1MDQzOFwiIH0pLCB2b2lkIDApXSB9KSwgdm9pZCAwKSk7XG59KTtcbmV4cG9ydCBkZWZhdWx0IExvZ2luRm9ybTtcbiIsImltcG9ydCB7IEZyYWdtZW50IGFzIF9GcmFnbWVudCwganN4IGFzIF9qc3ggfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTdG9yZSB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmV4cG9ydCB2YXIgRHluYW1pY01vZHVsZUxvYWRlciA9IGZ1bmN0aW9uIChwcm9wcykge1xuICAgIHZhciBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLCByZWR1Y2VycyA9IHByb3BzLnJlZHVjZXJzLCByZW1vdmVBZnRlclVubW91bnQgPSBwcm9wcy5yZW1vdmVBZnRlclVubW91bnQ7XG4gICAgdmFyIGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgICB2YXIgc3RvcmUgPSB1c2VTdG9yZSgpO1xuICAgIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICAgIE9iamVjdC5lbnRyaWVzKHJlZHVjZXJzKS5mb3JFYWNoKGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgdmFyIG5hbWUgPSBfYVswXSwgcmVkdWNlciA9IF9hWzFdO1xuICAgICAgICAgICAgc3RvcmUucmVkdWNlck1hbmFnZXIuYWRkKG5hbWUsIHJlZHVjZXIpO1xuICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBcIkBJTklUIFwiLmNvbmNhdChuYW1lLCBcIiByZWR1Y2VyXCIpIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmIChyZW1vdmVBZnRlclVubW91bnQpIHtcbiAgICAgICAgICAgICAgICBPYmplY3QuZW50cmllcyhyZWR1Y2VycykuZm9yRWFjaChmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5hbWUgPSBfYVswXSwgcmVkdWNlciA9IF9hWzFdO1xuICAgICAgICAgICAgICAgICAgICBzdG9yZS5yZWR1Y2VyTWFuYWdlci5yZW1vdmUobmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogXCJAUkVNT1ZFIFwiLmNvbmNhdChuYW1lLCBcIiByZWR1Y2VyXCIpIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH0sIFtdKTtcbiAgICByZXR1cm4gKF9qc3goX0ZyYWdtZW50LCB7IGNoaWxkcmVuOiBjaGlsZHJlbiB9LCB2b2lkIDApKTtcbn07XG4iLCJpbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuLy8g0KXRg9C6LCDQutC+0YLQvtGA0YvQuSDQstC+0LfQstGA0LDRidCw0LXRgiDRhNGD0L3QutGG0LjRjiBkaXNwYXRjaCDRhdGA0LDQvdC40LvQuNGJ0LAgUmVkdXguXG5leHBvcnQgdmFyIHVzZUFwcERpc3BhdGNoID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdXNlRGlzcGF0Y2goKTsgfTtcbiIsImltcG9ydCB7IGpzeCBhcyBfanN4IH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5pbXBvcnQgeyBtZW1vIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSW5wdXQgZnJvbSAnQG11aS9qb3kvSW5wdXQnO1xuZXhwb3J0IHZhciBCYXNpY0lucHV0ID0gbWVtbyhmdW5jdGlvbiAocHJvcHMpIHtcbiAgICB2YXIgdmFsdWUgPSBwcm9wcy52YWx1ZSwgb25DaGFuZ2UgPSBwcm9wcy5vbkNoYW5nZTtcbiAgICB2YXIgb25DaGFuZ2VJbnB1dCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIG9uQ2hhbmdlICYmIG9uQ2hhbmdlKGUudGFyZ2V0LnZhbHVlKTtcbiAgICB9O1xuICAgIHJldHVybiAoX2pzeChJbnB1dCwgeyBjb2xvcjogXCJuZXV0cmFsXCIsIHNpemU6IFwibWRcIiwgdmFyaWFudDogXCJvdXRsaW5lZFwiLCB2YWx1ZTogdmFsdWUsIG9uQ2hhbmdlOiBvbkNoYW5nZUlucHV0IH0sIHZvaWQgMCkpO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=