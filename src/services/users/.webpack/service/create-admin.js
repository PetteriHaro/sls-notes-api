(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./create-admin.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../models/Admin.ts":
/*!*********************************************************************!*\
  !*** /Users/pette/Desktop/maigo/maigo-platform/src/models/Admin.ts ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types */ \"../../types.ts\");\n/* harmony import */ var _utils_db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/db */ \"../../utils/db.ts\");\n\n\n\nconst Schema = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema;\nconst AdminSchema = new Schema({\n    email: _utils_db__WEBPACK_IMPORTED_MODULE_2__[\"requiredString\"],\n    role: _utils_db__WEBPACK_IMPORTED_MODULE_2__[\"requiredString\"],\n    password: {\n        type: String,\n        required: true,\n        minlength: 4,\n    },\n});\nmongoose__WEBPACK_IMPORTED_MODULE_0___default.a.models = {};\n/* harmony default export */ __webpack_exports__[\"default\"] = (mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model(_types__WEBPACK_IMPORTED_MODULE_1__[\"CollectionNames\"].admins, AdminSchema));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vLi4vbW9kZWxzL0FkbWluLnRzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy9Vc2Vycy9wZXR0ZS9EZXNrdG9wL21haWdvL21haWdvLXBsYXRmb3JtL3NyYy9tb2RlbHMvQWRtaW4udHM/MzlmNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xuaW1wb3J0IHsgTWFpZ29BZG1pbiwgQ29sbGVjdGlvbk5hbWVzIH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgcmVxdWlyZWRTdHJpbmcgfSBmcm9tICcuLi91dGlscy9kYic7XG5cbmNvbnN0IFNjaGVtYSA9IE1vbmdvb3NlLlNjaGVtYTtcblxuY29uc3QgQWRtaW5TY2hlbWEgPSBuZXcgU2NoZW1hKHtcbiAgZW1haWw6IHJlcXVpcmVkU3RyaW5nLFxuICByb2xlOiByZXF1aXJlZFN0cmluZyxcbiAgcGFzc3dvcmQ6IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgbWlubGVuZ3RoOiA0LFxuICB9LFxufSk7XG5cbk1vbmdvb3NlLm1vZGVscyA9IHt9O1xuXG5leHBvcnQgZGVmYXVsdCBNb25nb29zZS5tb2RlbDxNYWlnb0FkbWluPihDb2xsZWN0aW9uTmFtZXMuYWRtaW5zLCBBZG1pblNjaGVtYSk7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///../../models/Admin.ts\n");

/***/ }),

/***/ "../../types.ts":
/*!**************************************************************!*\
  !*** /Users/pette/Desktop/maigo/maigo-platform/src/types.ts ***!
  \**************************************************************/
/*! exports provided: ErrorCode, CollectionNames */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ErrorCode\", function() { return ErrorCode; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CollectionNames\", function() { return CollectionNames; });\nvar ErrorCode;\n(function (ErrorCode) {\n    ErrorCode[\"GeneralError\"] = \"E0\";\n    ErrorCode[\"AuthError\"] = \"E01\";\n    ErrorCode[\"AttendNotToday\"] = \"A10\";\n    ErrorCode[\"AlreadyAttended\"] = \"A11\";\n    ErrorCode[\"AttendEventNotFound\"] = \"A12\";\n    ErrorCode[\"NoEventsToday\"] = \"A13\";\n    ErrorCode[\"NoEventsTodayCode\"] = \"A14\";\n})(ErrorCode || (ErrorCode = {}));\nvar CollectionNames;\n(function (CollectionNames) {\n    CollectionNames[\"admins\"] = \"admins\";\n    CollectionNames[\"venues\"] = \"venues\";\n    CollectionNames[\"organizers\"] = \"organizers\";\n    CollectionNames[\"news\"] = \"news\";\n    CollectionNames[\"events\"] = \"events\";\n    CollectionNames[\"users\"] = \"users\";\n})(CollectionNames || (CollectionNames = {}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vLi4vdHlwZXMudHMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vL1VzZXJzL3BldHRlL0Rlc2t0b3AvbWFpZ28vbWFpZ28tcGxhdGZvcm0vc3JjL3R5cGVzLnRzPzMxNmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRG9jdW1lbnQgfSBmcm9tICdtb25nb29zZSc7XG5cbmV4cG9ydCBlbnVtIEVycm9yQ29kZSB7XG4gIEdlbmVyYWxFcnJvciA9ICdFMCcsXG4gIEF1dGhFcnJvciA9ICdFMDEnLFxuICBBdHRlbmROb3RUb2RheSA9ICdBMTAnLFxuICBBbHJlYWR5QXR0ZW5kZWQgPSAnQTExJyxcbiAgQXR0ZW5kRXZlbnROb3RGb3VuZCA9ICdBMTInLFxuICBOb0V2ZW50c1RvZGF5ID0gJ0ExMycsXG4gIE5vRXZlbnRzVG9kYXlDb2RlID0gJ0ExNCcsXG59XG5cbmV4cG9ydCB0eXBlIEFkbWluUm9sZSA9ICdhZG1pbicgfCAnY29udHJpYnV0b3InIHwgJ3N1cGVyLWFkbWluJztcblxuZXhwb3J0IGVudW0gQ29sbGVjdGlvbk5hbWVzIHtcbiAgYWRtaW5zID0gJ2FkbWlucycsXG4gIHZlbnVlcyA9ICd2ZW51ZXMnLFxuICBvcmdhbml6ZXJzID0gJ29yZ2FuaXplcnMnLFxuICBuZXdzID0gJ25ld3MnLFxuICBldmVudHMgPSAnZXZlbnRzJyxcbiAgdXNlcnMgPSAndXNlcnMnLFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIE1haWdvQWRtaW4gZXh0ZW5kcyBEb2N1bWVudCB7XG4gIF9pZDogc3RyaW5nO1xuICByb2xlOiBBZG1pblJvbGU7XG4gIGVtYWlsOiBzdHJpbmc7XG4gIHBhc3N3b3JkOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRmlFbk9iamVjdCB7XG4gIGVuOiBzdHJpbmc7XG4gIGZpOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVmVudWUgZXh0ZW5kcyBEb2N1bWVudCB7XG4gIHZlbnVlSWQ6IHN0cmluZztcbiAgbmFtZTogRmlFbk9iamVjdDtcbiAgc2hvcnREZXNjcmlwdGlvbjogRmlFbk9iamVjdDtcbiAgZGVzY3JpcHRpb246IEZpRW5PYmplY3Q7XG4gIGltYWdlVXJsOiBzdHJpbmc7XG4gIGFkZHJlc3M6IHN0cmluZztcbiAgbG9jYXRpb246IHtcbiAgICBsYXQ6IG51bWJlcjtcbiAgICBsb246IG51bWJlcjtcbiAgfTtcbiAgd2Vic2l0ZTogc3RyaW5nO1xuICBwaG9uZTogc3RyaW5nO1xuICB1cGNvbWluZ0V2ZW50czogVXBjb21pbmdFdmVudFtdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE9yZ2FuaXplciBleHRlbmRzIERvY3VtZW50IHtcbiAgc2VhcmNoSWQ6IHN0cmluZztcbiAgaW5mbzoge1xuICAgIG5hbWU6IEZpRW5PYmplY3Q7XG4gICAgc2hvcnREZXNjcmlwdGlvbjogRmlFbk9iamVjdDtcbiAgICBkZXNjcmlwdGlvbjogRmlFbk9iamVjdDtcbiAgICB3ZWJzaXRlOiBzdHJpbmc7XG4gICAgcGhvbmU6IHN0cmluZztcbiAgICBsb2dvVXJsPzogc3RyaW5nO1xuICAgIGltYWdlVXJsOiBzdHJpbmc7XG4gICAgdXBjb21pbmdFdmVudHM6IFVwY29taW5nRXZlbnRbXTtcbiAgICBwYXN0RXZlbnRzOiBbXTtcbiAgfTtcbiAgY3JlZGVudGlhbHM6IHtcbiAgICBlbWFpbDogc3RyaW5nO1xuICAgIHBhc3N3b3JkOiBzdHJpbmc7XG4gICAgZGVmYXVsdENvbWlzc2lvbj86IG51bWJlcjtcbiAgfTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBVcGNvbWluZ0V2ZW50IHtcbiAgX2lkOiBzdHJpbmc7XG4gIGluZm86IHtcbiAgICB0aW1lOiB7XG4gICAgICBkaXNwbGF5VGltZTogc3RyaW5nO1xuICAgICAgdGltZXN0YW1wOiBudW1iZXI7XG4gICAgfTtcbiAgICB2ZW51ZTogc3RyaW5nO1xuICAgIG9yZ2FuaXplcjogc3RyaW5nO1xuICAgIG5hbWU6IEZpRW5PYmplY3Q7XG4gIH07XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmV3c0FydGljbGUgZXh0ZW5kcyBEb2N1bWVudCB7XG4gIGFydGljbGVJZDogc3RyaW5nO1xuICB0aXRsZTogRmlFbk9iamVjdDtcbiAgYm9keTogRmlFbk9iamVjdDtcbiAgaW1hZ2VVcmw6IHN0cmluZztcbiAgdGltZToge1xuICAgIGRpc3BsYXlEYXRlOiBzdHJpbmc7XG4gICAgdGltZXN0YW1wOiBudW1iZXI7XG4gIH07XG4gIHdyaXRlcjogRmlFbk9iamVjdDtcbiAgZXh0cmFBY3Rpb25zPzogRXh0cmFBY3Rpb25bXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBFeHRyYUFjdGlvbiB7XG4gIGFjdGlvblR5cGU6IEFydGljbGVGdW5jdGlvblR5cGU7XG4gIGFjdGlvbkZpbHRlcjogc3RyaW5nO1xuICB0aXRsZTogRmlFbk9iamVjdDtcbn1cblxuZXhwb3J0IHR5cGUgQXJ0aWNsZUZ1bmN0aW9uVHlwZSA9XG4gIHwgJ2V2ZW50J1xuICB8ICdvcmdhbml6ZXInXG4gIHwgJ2NhdGVnb3J5J1xuICB8ICdvd24nXG4gIHwgJ3ZlbnVlJztcblxuZXhwb3J0IHR5cGUgQ2F0ZWdvcnkgPSAnc3BvcnRzJyB8ICdjdWx0dXJlJyB8ICdtdXNpYycgfCAnb3RoZXInO1xuXG5leHBvcnQgdHlwZSBTdWJDYXRlZ29yeSA9XG4gIHwgJ2hvY2tleSdcbiAgfCAnZmxvb3JiYWxsJ1xuICB8ICdiYXNrZXRiYWxsJ1xuICB8ICdmb290YmFsbCdcbiAgfCAndm9sbGV5YmFsbCdcbiAgfCAnaGFuZGJhbGwnXG4gIHwgJ2FtZXJpY2FuRm9vdGJhbGwnO1xuXG5leHBvcnQgdHlwZSBFdmVudFN0YXR1cyA9XG4gIHwgJ3VwY29taW5nJ1xuICB8ICdvbmdvaW5nJ1xuICB8ICdjYW5jZWxsZWQnXG4gIHwgJ3Bhc3QnXG4gIHwgJ25lYXJGdXR1cmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIE1haWdvRXZlbnQgZXh0ZW5kcyBEb2N1bWVudCB7XG4gIGluZm86IHtcbiAgICBzdGF0dXM6IEV2ZW50U3RhdHVzO1xuICAgIGltYWdlOiB7XG4gICAgICB1cmw/OiBzdHJpbmc7XG4gICAgICBpbWFnZVNvdXJjZT86ICdvcmdhbml6ZXInIHwgJ3ZlbnVlJztcbiAgICB9O1xuICAgIHRpbWU6IHtcbiAgICAgIHRpbWVzdGFtcDogbnVtYmVyO1xuICAgICAgZGF0ZTogc3RyaW5nO1xuICAgIH07XG4gICAgdmVudWU6IFN0cmluZztcbiAgICBvcmdhbml6ZXI6IFN0cmluZztcbiAgICBjYXRlZ29yeToge1xuICAgICAgbWFpbjogQ2F0ZWdvcnk7XG4gICAgICBzdWI6IFN1YkNhdGVnb3J5O1xuICAgIH07XG4gICAgbmFtZTogRmlFbk9iamVjdDtcbiAgICBkZXNjcmlwdGlvbjogRmlFbk9iamVjdDtcbiAgICBvbGRQcmljZTogc3RyaW5nO1xuICAgIG5ld1ByaWNlOiBzdHJpbmc7XG4gICAgbm90ZT86IEZpRW5PYmplY3Q7XG4gICAgdmlzaXRvckxpbWl0OiBudW1iZXI7XG4gICAgYXR0ZW5kZWVzOiBzdHJpbmdbXTtcbiAgfTtcbiAgcHJvZHVjdEluZm86IHtcbiAgICBjb21pc3Npb25QZXJjZW50YWdlPzogbnVtYmVyO1xuICAgIHByb2R1Y3RzOiBNYWlnb1RpY2tldFByb2R1Y3RbXTtcbiAgfTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBNYWlnb0xpc3RFdmVudCBleHRlbmRzIERvY3VtZW50IHtcbiAgX2lkOiBzdHJpbmc7XG4gIG5hbWU6IEZpRW5PYmplY3Q7XG4gIHN0YXR1czogRXZlbnRTdGF0dXM7XG4gIHRpbWU6IHtcbiAgICBkaXNwbGF5RGF0ZTogc3RyaW5nO1xuICAgIHRpbWVzdGFtcDogbnVtYmVyO1xuICAgIGRhdGU6IERhdGU7XG4gICAgZGlzcGxheVRpbWU6IHN0cmluZztcbiAgfTtcbiAgdmVudWU6IHtcbiAgICBfaWQ6IHN0cmluZztcbiAgICBuYW1lOiBGaUVuT2JqZWN0O1xuICB9O1xuICBvcmdhbml6ZXI6IHtcbiAgICBpbmZvOiB7XG4gICAgICBuYW1lOiBGaUVuT2JqZWN0O1xuICAgIH07XG4gICAgX2lkOiBzdHJpbmc7XG4gIH07XG4gIHZpc2l0b3JMaW1pdD86IG51bWJlcjtcbiAgY2F0ZWdvcnk6IHtcbiAgICBtYWluOiBDYXRlZ29yeTtcbiAgICBzdWI6IFN1YkNhdGVnb3J5O1xuICB9O1xuICBpbWFnZToge1xuICAgIHVybD86IHN0cmluZztcbiAgICBpbWFnZVNvdXJjZT86ICdvcmdhbml6ZXInIHwgJ3ZlbnVlJztcbiAgfTtcbiAgYXR0ZW5kZWVzOiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTWFpZ29UaWNrZXRQcm9kdWN0IHtcbiAgc29sZFRpY2tldFByaWNlOiBudW1iZXI7XG4gIG9yaWdpbmFsUHJpY2U6IG51bWJlcjtcbiAgY3VycmVuY3k6ICdVU0QnIHwgJ0VVUic7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXR0ZW5kZWRFdmVudCB7XG4gIGV2ZW50SWQ6IHN0cmluZztcbiAgdGltZToge1xuICAgIHRpbWVzdGFtcDogbnVtYmVyO1xuICAgIGRhdGU6IHN0cmluZztcbiAgfTtcbiAgbmFtZTogRmlFbk9iamVjdDtcbiAgc3RhdHVzOiBFdmVudFN0YXR1cztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBNYWlnb1VzZXIgZXh0ZW5kcyBEb2N1bWVudCB7XG4gIGluZm86IHtcbiAgICBmaXJzdE5hbWU6IHN0cmluZztcbiAgICBsYXN0TmFtZTogc3RyaW5nO1xuICAgIGRhdGVPZkJpcnRoOiBzdHJpbmc7XG4gICAgdXNlcklkOiBzdHJpbmc7XG4gICAgc2F2ZWRFdmVudHM6IHN0cmluZ1tdO1xuICAgIGF0dGVuZGVkRXZlbnRzOiBzdHJpbmdbXTtcbiAgfTtcbiAgY3JlZGVudGlhbHM6IHtcbiAgICBwaG9uZU51bWJlcjogc3RyaW5nO1xuICB9O1xufVxuIl0sIm1hcHBpbmdzIjoiQUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///../../types.ts\n");

/***/ }),

/***/ "../../utils/auth.ts":
/*!*******************************************************************!*\
  !*** /Users/pette/Desktop/maigo/maigo-platform/src/utils/auth.ts ***!
  \*******************************************************************/
/*! exports provided: generateAdminJWT, verifyAdminJWT, getToken, adminHasRights, checkAuthentication */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"generateAdminJWT\", function() { return generateAdminJWT; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"verifyAdminJWT\", function() { return verifyAdminJWT; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getToken\", function() { return getToken; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"adminHasRights\", function() { return adminHasRights; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"checkAuthentication\", function() { return checkAuthentication; });\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _models_Admin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/Admin */ \"../../models/Admin.ts\");\n\n\nconst generateAdminJWT = (adminData) => {\n    return jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default.a.sign(adminData, process.env.JWT_KEY, { expiresIn: '1h' });\n};\nconst verifyAdminJWT = (token) => {\n    return jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default.a.verify(token, process.env.JWT_KEY, {}, (err, tok) => {\n        if (err) {\n            throw {\n                errorCode: 'E01',\n                name: err.name,\n                statusCode: 401,\n                message: 'Auth failed',\n            };\n        }\n        return tok;\n    });\n};\nconst getToken = (token) => token.split('Bearer ')[1];\nconst allowedRoles = (allowedRole) => {\n    const roles = ['super-admin'];\n    if (allowedRole === 'admin') {\n        roles.push('admin');\n    }\n    if (allowedRole === 'contributor') {\n        roles.push('contributor');\n    }\n    return roles;\n};\nconst adminHasRights = async (adminId, allowedRole) => {\n    try {\n        const admin = await _models_Admin__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findById(adminId);\n        if (!admin) {\n            throw {\n                name: 'NotFound',\n                statusCode: 404,\n                message: 'No admin found',\n            };\n        }\n        if (!allowedRoles(allowedRole).some(role => role === admin.role)) {\n            throw {\n                name: 'Not Authorized',\n                statusCode: 401,\n                message: 'OOPS! You are not allowed to do that',\n            };\n        }\n    }\n    catch (e) {\n        throw e;\n    }\n};\nconst checkAuthentication = async (headers, role, returnInfo) => {\n    try {\n        if (!headers.Authorization) {\n            throw {\n                statusCode: 400,\n                message: 'Request requires authentication',\n                name: 'BadRequest',\n            };\n        }\n        const { Authorization } = headers;\n        const adminInfo = verifyAdminJWT(getToken(Authorization));\n        await adminHasRights(adminInfo._id, role);\n        if (returnInfo) {\n            return adminInfo;\n        }\n    }\n    catch (e) {\n        throw e;\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vLi4vdXRpbHMvYXV0aC50cy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8vVXNlcnMvcGV0dGUvRGVza3RvcC9tYWlnby9tYWlnby1wbGF0Zm9ybS9zcmMvdXRpbHMvYXV0aC50cz8zOTg2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBqd3QgZnJvbSAnanNvbndlYnRva2VuJztcbmltcG9ydCB7IEFkbWluUm9sZSB9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCBBZG1pbiBmcm9tICcuLi9tb2RlbHMvQWRtaW4nO1xuXG5leHBvcnQgaW50ZXJmYWNlIEpXVERhdGEge1xuICBfaWQ6IHN0cmluZztcbiAgZW1haWw6IHN0cmluZztcbn1cblxuZXhwb3J0IGNvbnN0IGdlbmVyYXRlQWRtaW5KV1QgPSAoYWRtaW5EYXRhOiBKV1REYXRhKSA9PiB7XG4gIHJldHVybiBqd3Quc2lnbihhZG1pbkRhdGEsIHByb2Nlc3MuZW52LkpXVF9LRVksIHsgZXhwaXJlc0luOiAnMWgnIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IHZlcmlmeUFkbWluSldUID0gKHRva2VuOiBzdHJpbmcpOiBhbnkgPT4ge1xuICByZXR1cm4gand0LnZlcmlmeSh0b2tlbiwgcHJvY2Vzcy5lbnYuSldUX0tFWSwge30sIChlcnI6IGFueSwgdG9rOiBzdHJpbmcpID0+IHtcbiAgICBpZiAoZXJyKSB7XG4gICAgICB0aHJvdyB7XG4gICAgICAgIGVycm9yQ29kZTogJ0UwMScsXG4gICAgICAgIG5hbWU6IGVyci5uYW1lLFxuICAgICAgICBzdGF0dXNDb2RlOiA0MDEsXG4gICAgICAgIG1lc3NhZ2U6ICdBdXRoIGZhaWxlZCcsXG4gICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gdG9rO1xuICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRUb2tlbiA9ICh0b2tlbjogc3RyaW5nKSA9PiB0b2tlbi5zcGxpdCgnQmVhcmVyICcpWzFdO1xuXG5jb25zdCBhbGxvd2VkUm9sZXMgPSAoYWxsb3dlZFJvbGU6IEFkbWluUm9sZSkgPT4ge1xuICBjb25zdCByb2xlczogQWRtaW5Sb2xlW10gPSBbJ3N1cGVyLWFkbWluJ107XG4gIGlmIChhbGxvd2VkUm9sZSA9PT0gJ2FkbWluJykge1xuICAgIHJvbGVzLnB1c2goJ2FkbWluJyk7XG4gIH1cbiAgaWYgKGFsbG93ZWRSb2xlID09PSAnY29udHJpYnV0b3InKSB7XG4gICAgcm9sZXMucHVzaCgnY29udHJpYnV0b3InKTtcbiAgfVxuICByZXR1cm4gcm9sZXM7XG59O1xuXG5leHBvcnQgY29uc3QgYWRtaW5IYXNSaWdodHMgPSBhc3luYyAoXG4gIGFkbWluSWQ6IHN0cmluZyxcbiAgYWxsb3dlZFJvbGU6IEFkbWluUm9sZSxcbikgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IGFkbWluID0gYXdhaXQgQWRtaW4uZmluZEJ5SWQoYWRtaW5JZCk7XG4gICAgaWYgKCFhZG1pbikge1xuICAgICAgdGhyb3cge1xuICAgICAgICBuYW1lOiAnTm90Rm91bmQnLFxuICAgICAgICBzdGF0dXNDb2RlOiA0MDQsXG4gICAgICAgIG1lc3NhZ2U6ICdObyBhZG1pbiBmb3VuZCcsXG4gICAgICB9O1xuICAgIH1cblxuICAgIGlmICghYWxsb3dlZFJvbGVzKGFsbG93ZWRSb2xlKS5zb21lKHJvbGUgPT4gcm9sZSA9PT0gYWRtaW4ucm9sZSkpIHtcbiAgICAgIHRocm93IHtcbiAgICAgICAgbmFtZTogJ05vdCBBdXRob3JpemVkJyxcbiAgICAgICAgc3RhdHVzQ29kZTogNDAxLFxuICAgICAgICBtZXNzYWdlOiAnT09QUyEgWW91IGFyZSBub3QgYWxsb3dlZCB0byBkbyB0aGF0JyxcbiAgICAgIH07XG4gICAgfVxuICB9IGNhdGNoIChlKSB7XG4gICAgdGhyb3cgZTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGNoZWNrQXV0aGVudGljYXRpb24gPSBhc3luYyAoXG4gIGhlYWRlcnM6IGFueSxcbiAgcm9sZTogQWRtaW5Sb2xlLFxuICByZXR1cm5JbmZvPzogYm9vbGVhbixcbikgPT4ge1xuICB0cnkge1xuICAgIGlmICghaGVhZGVycy5BdXRob3JpemF0aW9uKSB7XG4gICAgICB0aHJvdyB7XG4gICAgICAgIHN0YXR1c0NvZGU6IDQwMCxcbiAgICAgICAgbWVzc2FnZTogJ1JlcXVlc3QgcmVxdWlyZXMgYXV0aGVudGljYXRpb24nLFxuICAgICAgICBuYW1lOiAnQmFkUmVxdWVzdCcsXG4gICAgICB9O1xuICAgIH1cbiAgICBjb25zdCB7IEF1dGhvcml6YXRpb24gfSA9IGhlYWRlcnM7XG5cbiAgICBjb25zdCBhZG1pbkluZm86IEpXVERhdGEgPSB2ZXJpZnlBZG1pbkpXVChnZXRUb2tlbihBdXRob3JpemF0aW9uKSk7XG5cbiAgICBhd2FpdCBhZG1pbkhhc1JpZ2h0cyhhZG1pbkluZm8uX2lkLCByb2xlKTtcbiAgICBpZiAocmV0dXJuSW5mbykge1xuICAgICAgcmV0dXJuIGFkbWluSW5mbztcbiAgICB9XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICB0aHJvdyBlO1xuICB9XG59O1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBT0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///../../utils/auth.ts\n");

/***/ }),

/***/ "../../utils/db.ts":
/*!*****************************************************************!*\
  !*** /Users/pette/Desktop/maigo/maigo-platform/src/utils/db.ts ***!
  \*****************************************************************/
/*! exports provided: connectToDataBase, corsHeaders, FiEnObj, NotRequiredFiEnObj, requiredString, createReturnableEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"connectToDataBase\", function() { return connectToDataBase; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"corsHeaders\", function() { return corsHeaders; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FiEnObj\", function() { return FiEnObj; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NotRequiredFiEnObj\", function() { return NotRequiredFiEnObj; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"requiredString\", function() { return requiredString; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createReturnableEvent\", function() { return createReturnableEvent; });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nlet db = null;\nconst connectToDataBase = async (url) => {\n    try {\n        if (db) {\n            return Promise.resolve(db);\n        }\n        const connection = await Object(mongoose__WEBPACK_IMPORTED_MODULE_0__[\"connect\"])(url, {\n            bufferCommands: false,\n            bufferMaxEntries: 0,\n            useNewUrlParser: true,\n        });\n        db = connection;\n        return db;\n    }\n    catch (e) {\n        throw { e };\n    }\n};\nconst corsHeaders = {\n    'Access-Control-Allow-Origin': '*',\n};\nconst FiEnObj = {\n    fi: {\n        type: String,\n        required: true,\n    },\n    en: {\n        type: String,\n        required: true,\n    },\n};\nconst NotRequiredFiEnObj = {\n    fi: String,\n    en: String,\n};\nconst requiredString = {\n    type: String,\n    required: true,\n};\nconst createReturnableEvent = (event) => {\n    const { status, image, time, venue, organizer, category, name, description, oldPrice, newPrice, note, visitorLimit, attendees, } = event.info;\n    return {\n        _id: event._id,\n        info: {\n            status,\n            image,\n            time,\n            venue,\n            organizer,\n            category,\n            name,\n            description,\n            oldPrice,\n            newPrice,\n            note,\n            visitorLimit,\n            attendees: attendees.length,\n        },\n    };\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vLi4vdXRpbHMvZGIudHMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vL1VzZXJzL3BldHRlL0Rlc2t0b3AvbWFpZ28vbWFpZ28tcGxhdGZvcm0vc3JjL3V0aWxzL2RiLnRzPzg3NWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9uZ29vc2UsIGNvbm5lY3QgfSBmcm9tICdtb25nb29zZSc7XG5pbXBvcnQgeyBNYWlnb0V2ZW50IH0gZnJvbSAnLi4vdHlwZXMnO1xuXG5sZXQgZGI6IE1vbmdvb3NlID0gbnVsbDtcblxuZXhwb3J0IGNvbnN0IGNvbm5lY3RUb0RhdGFCYXNlID0gYXN5bmMgKHVybDogc3RyaW5nKSA9PiB7XG4gIHRyeSB7XG4gICAgaWYgKGRiKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGRiKTtcbiAgICB9XG5cbiAgICBjb25zdCBjb25uZWN0aW9uID0gYXdhaXQgY29ubmVjdCh1cmwsIHtcbiAgICAgIGJ1ZmZlckNvbW1hbmRzOiBmYWxzZSxcbiAgICAgIGJ1ZmZlck1heEVudHJpZXM6IDAsXG4gICAgICB1c2VOZXdVcmxQYXJzZXI6IHRydWUsXG4gICAgfSk7XG4gICAgZGIgPSBjb25uZWN0aW9uO1xuICAgIHJldHVybiBkYjtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHRocm93IHsgZSB9O1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgY29yc0hlYWRlcnMgPSB7XG4gICdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nOiAnKicsXG59O1xuXG5leHBvcnQgY29uc3QgRmlFbk9iaiA9IHtcbiAgZmk6IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgcmVxdWlyZWQ6IHRydWUsXG4gIH0sXG4gIGVuOiB7XG4gICAgdHlwZTogU3RyaW5nLFxuICAgIHJlcXVpcmVkOiB0cnVlLFxuICB9LFxufTtcblxuZXhwb3J0IGNvbnN0IE5vdFJlcXVpcmVkRmlFbk9iaiA9IHtcbiAgZmk6IFN0cmluZyxcbiAgZW46IFN0cmluZyxcbn07XG5cbmV4cG9ydCBjb25zdCByZXF1aXJlZFN0cmluZyA9IHtcbiAgdHlwZTogU3RyaW5nLFxuICByZXF1aXJlZDogdHJ1ZSxcbn07XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVSZXR1cm5hYmxlRXZlbnQgPSAoZXZlbnQ6IE1haWdvRXZlbnQpID0+IHtcbiAgY29uc3Qge1xuICAgIHN0YXR1cyxcbiAgICBpbWFnZSxcbiAgICB0aW1lLFxuICAgIHZlbnVlLFxuICAgIG9yZ2FuaXplcixcbiAgICBjYXRlZ29yeSxcbiAgICBuYW1lLFxuICAgIGRlc2NyaXB0aW9uLFxuICAgIG9sZFByaWNlLFxuICAgIG5ld1ByaWNlLFxuICAgIG5vdGUsXG4gICAgdmlzaXRvckxpbWl0LFxuICAgIGF0dGVuZGVlcyxcbiAgfSA9IGV2ZW50LmluZm87XG4gIHJldHVybiB7XG4gICAgX2lkOiBldmVudC5faWQsXG4gICAgaW5mbzoge1xuICAgICAgc3RhdHVzLFxuICAgICAgaW1hZ2UsXG4gICAgICB0aW1lLFxuICAgICAgdmVudWUsXG4gICAgICBvcmdhbml6ZXIsXG4gICAgICBjYXRlZ29yeSxcbiAgICAgIG5hbWUsXG4gICAgICBkZXNjcmlwdGlvbixcbiAgICAgIG9sZFByaWNlLFxuICAgICAgbmV3UHJpY2UsXG4gICAgICBub3RlLFxuICAgICAgdmlzaXRvckxpbWl0LFxuICAgICAgYXR0ZW5kZWVzOiBhdHRlbmRlZXMubGVuZ3RoLFxuICAgIH0sXG4gIH07XG59O1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFlQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///../../utils/db.ts\n");

/***/ }),

/***/ "../../utils/errors.ts":
/*!*********************************************************************!*\
  !*** /Users/pette/Desktop/maigo/maigo-platform/src/utils/errors.ts ***!
  \*********************************************************************/
/*! exports provided: createError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createError\", function() { return createError; });\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ \"../../types.ts\");\n/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./db */ \"../../utils/db.ts\");\n\n\nconst createError = ({ e, altStatusCode, message, devMessage, errorCode, name, }) => {\n    return {\n        statusCode: e && e.name === 'ValidationError'\n            ? 400\n            : e && e.name === 'NotFound'\n                ? 404\n                : e && e.name === 'BadRequest'\n                    ? 400\n                    : altStatusCode || e.statusCode || 500,\n        headers: _db__WEBPACK_IMPORTED_MODULE_1__[\"corsHeaders\"],\n        body: JSON.stringify({\n            name: name || e.name || 'Server error',\n            message: (e && e.details && e.details[0].message.replace(/\"/g, '')) ||\n                (e && e.message) ||\n                message,\n            devMessage,\n            errorCode: (e && e.errorCode && e.errorCode) ||\n                errorCode ||\n                _types__WEBPACK_IMPORTED_MODULE_0__[\"ErrorCode\"].GeneralError,\n        }),\n    };\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vLi4vdXRpbHMvZXJyb3JzLnRzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy9Vc2Vycy9wZXR0ZS9EZXNrdG9wL21haWdvL21haWdvLXBsYXRmb3JtL3NyYy91dGlscy9lcnJvcnMudHM/MTRhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFcnJvckNvZGUgfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBjb3JzSGVhZGVycyB9IGZyb20gJy4vZGInO1xuXG5pbnRlcmZhY2UgRXJyb3JQcm9wcyB7XG4gIGU/OiBhbnk7XG4gIGFsdFN0YXR1c0NvZGU/OiBudW1iZXI7XG4gIG1lc3NhZ2U/OiBzdHJpbmc7XG4gIGRldk1lc3NhZ2U/OiBzdHJpbmc7XG4gIGVycm9yQ29kZT86IEVycm9yQ29kZTtcbiAgbmFtZT86IHN0cmluZztcbn1cblxuZXhwb3J0IGNvbnN0IGNyZWF0ZUVycm9yID0gKHtcbiAgZSxcbiAgYWx0U3RhdHVzQ29kZSxcbiAgbWVzc2FnZSxcbiAgZGV2TWVzc2FnZSxcbiAgZXJyb3JDb2RlLFxuICBuYW1lLFxufTogRXJyb3JQcm9wcykgPT4ge1xuICByZXR1cm4ge1xuICAgIHN0YXR1c0NvZGU6XG4gICAgICBlICYmIGUubmFtZSA9PT0gJ1ZhbGlkYXRpb25FcnJvcidcbiAgICAgICAgPyA0MDBcbiAgICAgICAgOiBlICYmIGUubmFtZSA9PT0gJ05vdEZvdW5kJ1xuICAgICAgICA/IDQwNFxuICAgICAgICA6IGUgJiYgZS5uYW1lID09PSAnQmFkUmVxdWVzdCdcbiAgICAgICAgPyA0MDBcbiAgICAgICAgOiBhbHRTdGF0dXNDb2RlIHx8IGUuc3RhdHVzQ29kZSB8fCA1MDAsXG4gICAgaGVhZGVyczogY29yc0hlYWRlcnMsXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgbmFtZTogbmFtZSB8fCBlLm5hbWUgfHwgJ1NlcnZlciBlcnJvcicsXG4gICAgICBtZXNzYWdlOlxuICAgICAgICAoZSAmJiBlLmRldGFpbHMgJiYgZS5kZXRhaWxzWzBdLm1lc3NhZ2UucmVwbGFjZSgvXCIvZywgJycpKSB8fFxuICAgICAgICAoZSAmJiBlLm1lc3NhZ2UpIHx8XG4gICAgICAgIG1lc3NhZ2UsXG4gICAgICBkZXZNZXNzYWdlLFxuICAgICAgZXJyb3JDb2RlOlxuICAgICAgICAoZSAmJiBlLmVycm9yQ29kZSAmJiBlLmVycm9yQ29kZSkgfHxcbiAgICAgICAgZXJyb3JDb2RlIHx8XG4gICAgICAgIEVycm9yQ29kZS5HZW5lcmFsRXJyb3IsXG4gICAgfSksXG4gIH07XG59O1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFXQTtBQVFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///../../utils/errors.ts\n");

/***/ }),

/***/ "./create-admin.ts":
/*!*************************!*\
  !*** ./create-admin.ts ***!
  \*************************/
/*! exports provided: handler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"handler\", function() { return handler; });\n/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source-map-support/register */ \"source-map-support/register\");\n/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _hapi_joi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @hapi/joi */ \"@hapi/joi\");\n/* harmony import */ var _hapi_joi__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_hapi_joi__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bcryptjs */ \"bcryptjs\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_errors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/errors */ \"../../utils/errors.ts\");\n/* harmony import */ var _utils_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/auth */ \"../../utils/auth.ts\");\n/* harmony import */ var _utils_db__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/db */ \"../../utils/db.ts\");\n/* harmony import */ var _models_Admin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models/Admin */ \"../../models/Admin.ts\");\n\n\n\n\n\n\n\nconst validationSchema = _hapi_joi__WEBPACK_IMPORTED_MODULE_1___default.a.object({\n    email: _hapi_joi__WEBPACK_IMPORTED_MODULE_1___default.a.string()\n        .email({ minDomainSegments: 2, tlds: { allow: ['fi'] } })\n        .regex(/3as.fi/)\n        .required(),\n    password: _hapi_joi__WEBPACK_IMPORTED_MODULE_1___default.a.string().required(),\n    role: _hapi_joi__WEBPACK_IMPORTED_MODULE_1___default.a.string()\n        .valid('admin', 'contributor', 'super-admin')\n        .required(),\n});\nconst url = process.env.MONGO_URL;\nconst handler = async (event, context) => {\n    context.callbackWaitsForEmptyEventLoop = false;\n    try {\n        const parsedBody = JSON.parse(event.body);\n        await validationSchema.validateAsync(parsedBody);\n        await Object(_utils_db__WEBPACK_IMPORTED_MODULE_5__[\"connectToDataBase\"])(url);\n        await Object(_utils_auth__WEBPACK_IMPORTED_MODULE_4__[\"checkAuthentication\"])(event.headers, 'super-admin');\n        const { password, email, role } = parsedBody;\n        const admins = await _models_Admin__WEBPACK_IMPORTED_MODULE_6__[\"default\"].find();\n        if (admins.some(item => item.email === email)) {\n            return Object(_utils_errors__WEBPACK_IMPORTED_MODULE_3__[\"createError\"])({\n                message: 'Email in use',\n                altStatusCode: 400,\n                name: 'Bad request',\n            });\n        }\n        const hashedPassword = await bcryptjs__WEBPACK_IMPORTED_MODULE_2___default.a.hash(password, 12);\n        const newAdmin = new _models_Admin__WEBPACK_IMPORTED_MODULE_6__[\"default\"]({\n            email,\n            role,\n            password: hashedPassword,\n        });\n        const savedAdmin = await newAdmin.save();\n        return {\n            statusCode: 200,\n            headers: _utils_db__WEBPACK_IMPORTED_MODULE_5__[\"corsHeaders\"],\n            body: JSON.stringify({\n                message: 'Admin created!',\n                admin: savedAdmin,\n            }),\n        };\n    }\n    catch (e) {\n        return Object(_utils_errors__WEBPACK_IMPORTED_MODULE_3__[\"createError\"])({ e });\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jcmVhdGUtYWRtaW4udHMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jcmVhdGUtYWRtaW4udHM/ZGYxMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBUElHYXRld2F5UHJveHlIYW5kbGVyIH0gZnJvbSAnYXdzLWxhbWJkYSc7XG5pbXBvcnQgJ3NvdXJjZS1tYXAtc3VwcG9ydC9yZWdpc3Rlcic7XG5pbXBvcnQgSm9pIGZyb20gJ0BoYXBpL2pvaSc7XG5pbXBvcnQgYmNyeXB0IGZyb20gJ2JjcnlwdGpzJztcblxuaW1wb3J0IHsgY3JlYXRlRXJyb3IgfSBmcm9tICcuLi8uLi91dGlscy9lcnJvcnMnO1xuaW1wb3J0IHsgQWRtaW5Sb2xlIH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuaW1wb3J0IHsgY2hlY2tBdXRoZW50aWNhdGlvbiB9IGZyb20gJy4uLy4uL3V0aWxzL2F1dGgnO1xuaW1wb3J0IHsgY29ubmVjdFRvRGF0YUJhc2UsIGNvcnNIZWFkZXJzIH0gZnJvbSAnLi4vLi4vdXRpbHMvZGInO1xuaW1wb3J0IEFkbWluIGZyb20gJy4uLy4uL21vZGVscy9BZG1pbic7XG5cbmludGVyZmFjZSBDcmVhdGVBZG1pbkJvZHkge1xuICBlbWFpbDogc3RyaW5nO1xuICBwYXNzd29yZDogc3RyaW5nO1xuICByb2xlOiBBZG1pblJvbGU7XG59XG5cbmNvbnN0IHZhbGlkYXRpb25TY2hlbWEgPSBKb2kub2JqZWN0KHtcbiAgZW1haWw6IEpvaS5zdHJpbmcoKVxuICAgIC5lbWFpbCh7IG1pbkRvbWFpblNlZ21lbnRzOiAyLCB0bGRzOiB7IGFsbG93OiBbJ2ZpJ10gfSB9KVxuICAgIC5yZWdleCgvM2FzLmZpLylcbiAgICAucmVxdWlyZWQoKSxcbiAgcGFzc3dvcmQ6IEpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLFxuICByb2xlOiBKb2kuc3RyaW5nKClcbiAgICAudmFsaWQoJ2FkbWluJywgJ2NvbnRyaWJ1dG9yJywgJ3N1cGVyLWFkbWluJylcbiAgICAucmVxdWlyZWQoKSxcbn0pO1xuXG5jb25zdCB1cmwgPSBwcm9jZXNzLmVudi5NT05HT19VUkw7XG5cbmV4cG9ydCBjb25zdCBoYW5kbGVyOiBBUElHYXRld2F5UHJveHlIYW5kbGVyID0gYXN5bmMgKGV2ZW50LCBjb250ZXh0KSA9PiB7XG4gIGNvbnRleHQuY2FsbGJhY2tXYWl0c0ZvckVtcHR5RXZlbnRMb29wID0gZmFsc2U7XG4gIHRyeSB7XG4gICAgY29uc3QgcGFyc2VkQm9keTogQ3JlYXRlQWRtaW5Cb2R5ID0gSlNPTi5wYXJzZShldmVudC5ib2R5KTtcbiAgICBhd2FpdCB2YWxpZGF0aW9uU2NoZW1hLnZhbGlkYXRlQXN5bmMocGFyc2VkQm9keSk7XG5cbiAgICBhd2FpdCBjb25uZWN0VG9EYXRhQmFzZSh1cmwpO1xuXG4gICAgYXdhaXQgY2hlY2tBdXRoZW50aWNhdGlvbihldmVudC5oZWFkZXJzLCAnc3VwZXItYWRtaW4nKTtcblxuICAgIGNvbnN0IHsgcGFzc3dvcmQsIGVtYWlsLCByb2xlIH0gPSBwYXJzZWRCb2R5O1xuXG4gICAgY29uc3QgYWRtaW5zID0gYXdhaXQgQWRtaW4uZmluZCgpO1xuXG4gICAgaWYgKGFkbWlucy5zb21lKGl0ZW0gPT4gaXRlbS5lbWFpbCA9PT0gZW1haWwpKSB7XG4gICAgICByZXR1cm4gY3JlYXRlRXJyb3Ioe1xuICAgICAgICBtZXNzYWdlOiAnRW1haWwgaW4gdXNlJyxcbiAgICAgICAgYWx0U3RhdHVzQ29kZTogNDAwLFxuICAgICAgICBuYW1lOiAnQmFkIHJlcXVlc3QnLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgaGFzaGVkUGFzc3dvcmQgPSBhd2FpdCBiY3J5cHQuaGFzaChwYXNzd29yZCwgMTIpO1xuXG4gICAgY29uc3QgbmV3QWRtaW4gPSBuZXcgQWRtaW4oe1xuICAgICAgZW1haWwsXG4gICAgICByb2xlLFxuICAgICAgcGFzc3dvcmQ6IGhhc2hlZFBhc3N3b3JkLFxuICAgIH0pO1xuXG4gICAgY29uc3Qgc2F2ZWRBZG1pbiA9IGF3YWl0IG5ld0FkbWluLnNhdmUoKTtcblxuICAgIHJldHVybiB7XG4gICAgICBzdGF0dXNDb2RlOiAyMDAsXG4gICAgICBoZWFkZXJzOiBjb3JzSGVhZGVycyxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgbWVzc2FnZTogJ0FkbWluIGNyZWF0ZWQhJyxcbiAgICAgICAgYWRtaW46IHNhdmVkQWRtaW4sXG4gICAgICB9KSxcbiAgICB9O1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUVycm9yKHsgZSB9KTtcbiAgfVxufTtcbiJdLCJtYXBwaW5ncyI6IkFBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./create-admin.ts\n");

/***/ }),

/***/ "@hapi/joi":
/*!****************************!*\
  !*** external "@hapi/joi" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@hapi/joi\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQGhhcGkvam9pLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGhhcGkvam9pXCI/MDhjNyJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAaGFwaS9qb2lcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///@hapi/joi\n");

/***/ }),

/***/ "bcryptjs":
/*!***************************!*\
  !*** external "bcryptjs" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"bcryptjs\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmNyeXB0anMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJiY3J5cHRqc1wiP2NlNTUiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYmNyeXB0anNcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///bcryptjs\n");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"jsonwebtoken\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianNvbndlYnRva2VuLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwianNvbndlYnRva2VuXCI/NjQ5MCJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqc29ud2VidG9rZW5cIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///jsonwebtoken\n");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9uZ29vc2UuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb25nb29zZVwiP2ZmZDciXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9uZ29vc2VcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///mongoose\n");

/***/ }),

/***/ "source-map-support/register":
/*!**********************************************!*\
  !*** external "source-map-support/register" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"source-map-support/register\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlLW1hcC1zdXBwb3J0L3JlZ2lzdGVyLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic291cmNlLW1hcC1zdXBwb3J0L3JlZ2lzdGVyXCI/ZGExNiJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzb3VyY2UtbWFwLXN1cHBvcnQvcmVnaXN0ZXJcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///source-map-support/register\n");

/***/ })

/******/ })));