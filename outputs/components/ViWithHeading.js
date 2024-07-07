"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
/* eslint-disable @next/next/no-img-element */

// VI - Visual Image
var ViWithHeading = function ViWithHeading(_ref) {
  var title = _ref.title,
    description = _ref.description,
    allProductsBtn = _ref.allProductsBtn,
    advisorBtn = _ref.advisorBtn,
    bannerImg = _ref.bannerImg;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("section", {
    className: "bg-white dark:bg-gray-900"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "mr-auto place-self-center lg:col-span-7"
  }, /*#__PURE__*/_react["default"].createElement("h1", {
    className: "max-w-2xl mb-4 text-4xl text-primary-900 font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white"
  }, title), /*#__PURE__*/_react["default"].createElement("p", {
    className: "max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400"
  }, description), /*#__PURE__*/_react["default"].createElement("a", {
    className: "inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
  }, allProductsBtn, /*#__PURE__*/_react["default"].createElement("svg", {
    className: "w-5 h-5 ml-2 -mr-1",
    fill: "currentColor",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    "fill-rule": "evenodd",
    d: "M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z",
    "clip-rule": "evenodd"
  }))), /*#__PURE__*/_react["default"].createElement("a", {
    href: "#",
    className: "inline-flex items-center justify-center px-5 py-3 mt-5 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
  }, advisorBtn)), /*#__PURE__*/_react["default"].createElement("div", {
    className: "hidden lg:mt-0 lg:col-span-5 lg:flex"
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: bannerImg,
    alt: "mockup"
  })))));
};
var _default = exports["default"] = ViWithHeading;