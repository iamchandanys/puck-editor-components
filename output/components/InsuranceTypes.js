"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var InsuranceTypes = function InsuranceTypes(_ref) {
  var title = _ref.title,
    description = _ref.description,
    items = _ref.items;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("section", {
    className: "bg-white dark:bg-gray-900"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid xl:grid-cols-3 lg:gap-8 xl:gap-24 sm:py-16 lg:px-6"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "mb-8 lg:mb-0"
  }, /*#__PURE__*/_react["default"].createElement("h2", {
    className: "mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white"
  }, title), /*#__PURE__*/_react["default"].createElement("p", {
    className: "mb-4 text-gray-500 sm:text-xl dark:text-gray-400"
  }, description), /*#__PURE__*/_react["default"].createElement("a", {
    href: "#",
    className: "inline-flex items-center text-lg font-medium text-primary-600 hover:text-primary-800 dark:text-primary-500 dark:hover:text-primary-700"
  }, "Learn more", /*#__PURE__*/_react["default"].createElement("svg", {
    className: "ml-1 w-6 h-6",
    fill: "currentColor",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    "fill-rule": "evenodd",
    d: "M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z",
    "clip-rule": "evenodd"
  })))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-span-2 space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0"
  }, items === null || items === void 0 ? void 0 : items.map(function (item) {
    return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
      className: "flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900"
    }, /*#__PURE__*/_react["default"].createElement("svg", {
      className: "w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300",
      fill: "currentColor",
      viewBox: "0 0 20 20",
      xmlns: "http://www.w3.org/2000/svg"
    }, /*#__PURE__*/_react["default"].createElement("path", {
      "fill-rule": "evenodd",
      d: "M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z",
      "clip-rule": "evenodd"
    }))), /*#__PURE__*/_react["default"].createElement("h3", {
      className: "mb-2 text-xl font-bold dark:text-white"
    }, item.title), /*#__PURE__*/_react["default"].createElement("p", {
      className: "text-gray-500 dark:text-gray-400"
    }, item.description)));
  })))));
};
var _default = exports["default"] = InsuranceTypes;