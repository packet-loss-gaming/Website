webpackHotUpdate("static/development/pages/voip/current-users.js",{

/***/ "./components/VoIPViewer.js":
/*!**********************************!*\
  !*** ./components/VoIPViewer.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return VoIPViewer; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "/home/wyatt/Dev/Projects/Packet Loss Gaming/packetloss.gg/components/VoIPViewer.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var VoIPViewer =
/*#__PURE__*/
function (_React$Component) {
  _inherits(VoIPViewer, _React$Component);

  function VoIPViewer() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, VoIPViewer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(VoIPViewer)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getChannelIndent", function (channelLevel) {
      var LEVEL_INDENT_AMT = 20;
      return channelLevel * LEVEL_INDENT_AMT;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "renderChannelName", function (channelData, channelLevel) {
      if (channelLevel === 0) return null;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "bold",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "oi oi-people pr-2",
        title: "icon name",
        "aria-hidden": "true",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }), channelData.name);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "renderChannelUsers", function (channelData, channelLevel) {
      var users = [];
      channelData.users.forEach(function (user) {
        var userStyle = {
          marginLeft: _this.getChannelIndent(channelLevel + 1) + 'px'
        };
        users.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          style: userStyle,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 53
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
          className: "oi oi-person pr-2",
          title: "icon name",
          "aria-hidden": "true",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 53
          },
          __self: this
        }), user));
      });
      return users;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "renderSubChannels", function (channelData, channelLevel) {
      var subChannels = [];
      channelData.channels.forEach(function (channel) {
        subChannels.push(_this.renderChannel(channel, channelLevel + 1));
      });
      return subChannels;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "renderChannel", function (channelData, channelLevel) {
      var channelStyle = {
        marginLeft: _this.getChannelIndent(channelLevel) + 'px'
      };
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: channelStyle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, _this.renderChannelName(channelData, channelLevel), _this.renderChannelUsers(channelData, channelLevel), _this.renderSubChannels(channelData, channelLevel));
    });

    return _this;
  }

  _createClass(VoIPViewer, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return new Promise(function (resolve) {
                  return setTimeout(resolve, 3000);
                });

              case 2:
                this.setState(function (state) {
                  return {
                    rootChannel: {
                      name: "Root",
                      users: ["Dark_Arc"],
                      channels: [{
                        name: "Game Lobby 1",
                        users: ["Cow_Fu"],
                        channels: [{
                          name: "Sub Lobby 1",
                          users: ["Rambo"],
                          channels: []
                        }]
                      }]
                    }
                  };
                });

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "render",
    value: function render() {
      var channelPreview;

      if (this.state) {
        channelPreview = this.renderChannel(this.state.rootChannel, 0);
      } else {
        channelPreview = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          class: "d-flex justify-content-center",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 91
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          class: "spinner-border",
          role: "status",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 92
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
          class: "sr-only",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 93
          },
          __self: this
        }, "Loading...")));
      }

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }, channelPreview);
    }
  }]);

  return VoIPViewer;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);



/***/ })

})
//# sourceMappingURL=current-users.js.d583d99a8b32e3b96a06.hot-update.js.map