"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var PuckConfig = {
  components: {
    ViWithHeadingBlock: {
      fields: {
        title: {
          type: "text"
        },
        description: {
          type: "textarea"
        },
        allProductsBtn: {
          type: "text"
        },
        advisorBtn: {
          type: "text"
        },
        bannerImg: {
          type: "text"
        }
      },
      defaultProps: {
        title: "Buy Insurance you want in 5 minutes",
        description: "From checkout to global sales tax compliance, companies around the world use Selekta to simplify their payment stack.",
        allProductsBtn: "See all our Insurance Products",
        advisorBtn: "Speak to an advisor",
        bannerImg: "https://codesnippet.blob.core.windows.net/store-images/5d8876c20e57bf6e470a6cca699c67f2.png"
      },
      render: function render() {
        return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(React.Fragment, null, "Testing 1"));
      }
    }
  },
  root: {
    render: function render(_ref) {
      var children = _ref.children;
      return /*#__PURE__*/React.createElement("div", null, children);
    }
  }
};
var _default = exports["default"] = PuckConfig;