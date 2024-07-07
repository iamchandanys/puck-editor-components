"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _ViWithHeading = _interopRequireDefault(require("./ViWithHeading"));
var _InsuranceTypes = _interopRequireDefault(require("./InsuranceTypes"));
var _FeaturesListCard = _interopRequireDefault(require("./FeaturesListCard"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
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
      render: function render(_ref) {
        var title = _ref.title,
          description = _ref.description,
          allProductsBtn = _ref.allProductsBtn,
          advisorBtn = _ref.advisorBtn,
          bannerImg = _ref.bannerImg;
        return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_ViWithHeading["default"], {
          title: title,
          description: description,
          allProductsBtn: allProductsBtn,
          advisorBtn: advisorBtn,
          bannerImg: bannerImg
        }));
      }
    },
    InsuranceTypeBlock: {
      fields: {
        title: {
          type: "text"
        },
        description: {
          type: "textarea"
        },
        items: {
          type: "array",
          arrayFields: {
            title: {
              type: "text"
            },
            description: {
              type: "text"
            }
          },
          defaultItemProps: {
            title: "Lorem ipsum",
            description: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
          }
        }
      },
      defaultProps: {
        title: "What are you looking for? Can we help?",
        description: "Here we focus on markets where creativity and innovation can unlock long-term value and growth.",
        items: [{
          title: "LIFE COVER",
          description: "Collaborate seamlessly with all  the organization and hit your marketing goals every month with our marketing plan."
        }]
      },
      render: function render(_ref2) {
        var title = _ref2.title,
          description = _ref2.description,
          items = _ref2.items;
        return /*#__PURE__*/_react["default"].createElement(_InsuranceTypes["default"], {
          title: title,
          description: description,
          items: items
        });
      }
    },
    FeaturesListCardBlock: {
      fields: {
        title: {
          type: "text"
        },
        description: {
          type: "textarea"
        },
        items: {
          type: "array",
          arrayFields: {
            title: {
              type: "text"
            },
            description: {
              type: "text"
            }
          },
          defaultItemProps: {
            title: "Lorem ipsum",
            description: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
          }
        }
      },
      defaultProps: {
        title: "Insurance to help you get though life",
        description: "Here at Selekta we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth."
      },
      render: function render(_ref3) {
        var title = _ref3.title,
          description = _ref3.description,
          items = _ref3.items;
        return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_FeaturesListCard["default"], {
          title: title,
          description: description,
          items: items
        }));
      }
    }
  },
  root: {
    render: function render(_ref4) {
      var children = _ref4.children;
      return /*#__PURE__*/_react["default"].createElement("div", null, children);
    }
  }
};
var _default = exports["default"] = PuckConfig;