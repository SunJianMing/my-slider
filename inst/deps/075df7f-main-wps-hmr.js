webpackHotUpdatemy_slider("main",{

/***/ "./src/lib/components/MySlider.react.js":
/*!**********************************************!*\
  !*** ./src/lib/components/MySlider.react.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MySlider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../style/index.css */ "./src/style/index.css");
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_index_css__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




/**
 * ExampleComponent is an example component.
 * It takes a property, `label`, and
 * displays it.
 * It renders an input with the property `value`
 * which is editable by the user.
 */

var MySlider = /*#__PURE__*/function (_Component) {
  _inherits(MySlider, _Component);

  var _super = _createSuper(MySlider);

  function MySlider(props) {
    var _this;

    _classCallCheck(this, MySlider);

    _this = _super.call(this, props);
    _this.img = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    _this.mark = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    _this.wrapImg = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    _this.state = {
      stepInterval: 0,
      subscript: [],
      flag: true,
      startTime: 0,
      wrapImgLeft: 0,
      markLeft: 0
    };
    return _this;
  }

  _createClass(MySlider, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setSubscript();
    } // 计算开始时间和结束时间

  }, {
    key: "computeTime",
    value: function computeTime(obj) {
      var _this$props = this.props,
          setProps = _this$props.setProps,
          typeSite = _this$props.typeSite;
      var stepInterval = this.state.stepInterval;
      var markTime = this.mark.current.offsetLeft / stepInterval; //滑块开始时间

      var startTime = +markTime; //滑块结束时间

      var endTime = +(this.mark.current.offsetWidth / stepInterval + markTime); // 图片起始时间

      var imgStartTime = Math.abs(this.wrapImg.current.offsetLeft) / stepInterval; //图片结束时间

      var imgEndTime = this.wrapImg.current.parentNode.offsetWidth / stepInterval + imgStartTime;

      if (typeSite) {
        if (!obj) {
          //初始化是图片和滑块所处位置
          setProps({
            range: {
              imgStartTime: imgStartTime,
              imgEndTime: imgEndTime
            }
          });
          setProps({
            value: {
              startTime: startTime,
              endTime: endTime
            }
          });
        }

        if (obj === this.wrapImg.current) {
          // 图片滑动后的位置
          setProps({
            range: {
              imgStartTime: imgStartTime,
              imgEndTime: imgEndTime
            }
          }); //图片移动后，滑块所在的位置

          setProps({
            value: {
              startTime: startTime,
              endTime: endTime
            }
          });
        } else {
          //滑块移动后，所在位置
          setProps({
            value: {
              startTime: startTime,
              endTime: endTime
            }
          });
        }

        this.setState({
          startTime: (imgStartTime + startTime).toFixed(2)
        });
      } else {
        var wrapTime = Math.abs(this.wrapImg.current.offsetLeft);
        var markStart = this.mark.current.offsetLeft;
        var startTime1 = (wrapTime + markStart) / stepInterval;
        var endTime1 = (this.mark.current.offsetWidth + wrapTime + markStart) / stepInterval;
        setProps({
          value: {
            startTime: startTime1,
            endTime: endTime1
          }
        });
        this.setState({
          startTime: (+startTime1).toFixed(2)
        });
      }
    } //设置下标位置

  }, {
    key: "setSubscript",
    value: function setSubscript() {
      var step = this.props.step;
      var flag = this.state.flag;
      var self = this;
      var subscript = [];
      this.img.current.addEventListener('load', function () {
        for (var i = 0; i < step; i++) {
          subscript.push(i);
        }

        self.setState({
          stepInterval: this.offsetWidth / step,
          subscript: subscript
        });
        self.wrapImg.current.dataset.width = this.offsetWidth;
        self.silderDrag(self.mark.current);
        self.silderDrag(self.wrapImg.current, true);

        if (flag) {
          self.computeTime();
          self.setState({
            flag: false
          });
        }
      });
    } //设置初始化时间

  }, {
    key: "setStatrTime",
    value: function setStatrTime() {
      var _this2 = this;

      var _this$state = this.state,
          stepInterval = _this$state.stepInterval,
          startTime = _this$state.startTime;
      var wrapImg = this.wrapImg.current;
      var mark = this.mark.current;
      var moveWidth = wrapImg.dataset.width - wrapImg.offsetWidth;
      var markMoveWidth = wrapImg.offsetWidth - mark.offsetWidth;
      var wrapPosi = startTime * stepInterval;

      if (wrapPosi <= moveWidth) {
        // wrapImg.style.left = `-${wrapPosi}px`
        this.setState({
          wrapImgLeft: -wrapPosi + 'px',
          markLeft: '0px'
        }, function () {
          _this2.computeTime();
        });
      } else if (wrapPosi > moveWidth) {
        var RemainingTime = wrapPosi - moveWidth; // wrapImg.style.left = `-${moveWidth}px`

        this.setState({
          wrapImgLeft: -moveWidth + 'px',
          markLeft: '0px'
        }, function () {
          _this2.computeTime();
        });

        if (RemainingTime < markMoveWidth) {
          this.setState({
            markLeft: RemainingTime + 'px'
          }, function () {
            _this2.computeTime();
          }); // mark.style.left = `${RemainingTime}px`
        } else {
          this.setState({
            markLeft: markMoveWidth + 'px'
          }, function () {
            _this2.computeTime();
          });
        }
      }
    } //滑块

  }, {
    key: "silderDrag",
    value: function silderDrag(obj, flag) {
      var disX, type, disW, disX1, disL;
      var wrapWidth = this.wrapImg.current.offsetWidth;
      var stepInterval = this.state.stepInterval;
      var self = this;

      function objMove(ev) {
        if (ev.offsetX < 10) {
          type = 'left';
          obj.style.cursor = 'w-resize';
        } else if (ev.offsetX > obj.offsetWidth - 10) {
          type = 'right';
          obj.style.cursor = 'e-resize';
        } else {
          type = '';
          obj.style.cursor = 'default';
        }
      }

      if (!flag) {
        obj.onmousemove = objMove;
      }

      obj.onmousedown = function (ev) {
        if (!flag) {
          obj.onmousemove = null;

          if (ev.offsetX < 10) {
            type = 'left';
            obj.style.cursor = 'w-resize';
          }

          if (ev.offsetX > obj.offsetWidth - 10) {
            type = 'right';
            obj.style.cursor = 'e-resize';
          }
        }

        disX1 = ev.clientX;
        disW = obj.offsetWidth;
        disL = obj.offsetLeft;
        disX = ev.clientX - obj.offsetLeft;

        document.onmousemove = function move(ev) {
          if (type) {
            var w = ev.clientX - disX1;

            if (obj.offsetWidth > wrapWidth) {
              obj.style.width = wrapWidth + 'px';
              return;
            }

            if (obj.offsetWidth + obj.offsetLeft > wrapWidth) {
              obj.style.width = wrapWidth - obj.offsetLeft + 'px';
              return;
            }

            if (obj.offsetWidth < stepInterval) {
              obj.style.width = stepInterval + 'px';
            }

            if (type == 'right') {
              obj.style.width = w + disW + 'px';
            }

            if (type == 'left') {
              if (disL + w <= 0) {
                // obj.style.width
                obj.style.left = 0;
                return;
              }

              obj.style.width = disW - w + 'px';
              obj.style.left = disL + w + 'px';
            }

            return;
          }

          var currentX = ev.clientX - disX;

          if (!flag) {
            if (currentX < 0) {
              currentX = 0;
            }

            if (currentX > wrapWidth - obj.offsetWidth) {
              currentX = wrapWidth - obj.offsetWidth;
            }
          } else {
            if (currentX > 0) {
              currentX = 0;
            }

            if (currentX < wrapWidth - obj.dataset.width) {
              currentX = wrapWidth - obj.dataset.width;
            }
          }

          obj.style.left = currentX + 'px';
        };

        document.onmouseup = function () {
          document.onmousemove = null;
          document.onmouseup = null;
          type = undefined;
          obj.style.cursor = 'default';
          self.setState({
            markLeft: self.mark.current.offsetLeft + 'px',
            wrapImgLeft: self.wrapImg.current.offsetLeft + 'px'
          });

          if (!flag) {
            obj.onmousemove = objMove;

            if (obj.offsetWidth + obj.offsetLeft > wrapWidth) {
              obj.style.width = wrapWidth - obj.offsetLeft + 'px';
              return;
            }
          }

          self.computeTime(obj);
        };

        ev.preventDefault();
        ev.stopPropagation();
      };
    }
  }, {
    key: "changeStartTime",
    value: function changeStartTime(e) {
      this.setState({
        startTime: e.currentTarget.value
      });
    }
  }, {
    key: "updateRender",
    value: function updateRender() {
      this.setStatrTime();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          id = _this$props2.id,
          picUrl = _this$props2.picUrl,
          width = _this$props2.width,
          setTimeShow = _this$props2.setTimeShow,
          height = _this$props2.height,
          step = _this$props2.step;
      var _this$state2 = this.state,
          stepInterval = _this$state2.stepInterval,
          subscript = _this$state2.subscript,
          markLeft = _this$state2.markLeft,
          wrapImgLeft = _this$state2.wrapImgLeft,
          startTime = _this$state2.startTime; // console.log(subscript)

      if (typeof width === 'number') {
        width = width * stepInterval + 'px';
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: id
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "wrap",
        style: {
          width: width
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "wrapImg",
        style: {
          left: wrapImgLeft,
          height: height + 20 + 'px'
        },
        ref: this.wrapImg
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        ref: this.img,
        src: picUrl,
        style: {
          height: height + 'px'
        },
        className: "img",
        alt: ""
      }), subscript.map(function (item, index) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          key: index,
          style: {
            position: 'absolute',
            left: stepInterval * item + 'px',
            fontSize: '12px',
            bottom: 0
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
          style: {
            display: 'block',
            height: '5px',
            width: '1px',
            backgroundColor: '#999'
          }
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          style: {
            marginLeft: '-50%'
          }
        }, item, "min"));
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        ref: this.mark,
        className: "mark",
        style: {
          width: stepInterval + 'px',
          height: height + 'px',
          left: markLeft
        }
      })), setTimeShow && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "buttom"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "text",
        value: startTime,
        onChange: this.changeStartTime.bind(this)
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        onClick: this.updateRender.bind(this)
      }, "startTime")));
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.step != this.props.step) {
        this.setSubscript();
        this.setState({
          wrapImgLeft: 0,
          markLeft: 0
        });
      }
    }
  }]);

  return MySlider;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);


MySlider.defaultProps = {
  width: 10,
  height: 80,
  setTimeShow: true,
  typeSite: false
};
MySlider.propTypes = {
  /**
   * The ID used to identify this component in Dash callbacks.
   */
  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * The picUrl displayed in the string.
   * 总预览图路径
   */
  picUrl: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * 预览图总时间（61.17）
   */
  step: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,

  /**
   * The value displayed in the input.
   * 返回开始时间和结束时间 {value:{imgStartTime,imgEndTime}}
   */
  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array]),

  /**
   * Dash-assigned callback that should be called to report property changes
   * to Dash, to make them available for callbacks.
   */

  /**
   * 返回范围数据的范围(图片可视区时间段)
   */
  range: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object]),
  setProps: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,

  /**
   * 可视区宽度默认10分钟
   */
  width: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number]),

  /**
   * 选择开始时间框是否显示
   */
  setTimeShow: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * 计算模式时间模式，true为底部图片为根据，false为mark块为依据
   */
  typeSite: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * 图片高度
   */
  height: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number
};

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teV9zbGlkZXIvLi9zcmMvbGliL2NvbXBvbmVudHMvTXlTbGlkZXIucmVhY3QuanMiXSwibmFtZXMiOlsiTXlTbGlkZXIiLCJwcm9wcyIsImltZyIsIlJlYWN0IiwiY3JlYXRlUmVmIiwibWFyayIsIndyYXBJbWciLCJzdGF0ZSIsInN0ZXBJbnRlcnZhbCIsInN1YnNjcmlwdCIsImZsYWciLCJzdGFydFRpbWUiLCJ3cmFwSW1nTGVmdCIsIm1hcmtMZWZ0Iiwic2V0U3Vic2NyaXB0Iiwib2JqIiwic2V0UHJvcHMiLCJ0eXBlU2l0ZSIsIm1hcmtUaW1lIiwiY3VycmVudCIsIm9mZnNldExlZnQiLCJlbmRUaW1lIiwib2Zmc2V0V2lkdGgiLCJpbWdTdGFydFRpbWUiLCJNYXRoIiwiYWJzIiwiaW1nRW5kVGltZSIsInBhcmVudE5vZGUiLCJyYW5nZSIsInZhbHVlIiwic2V0U3RhdGUiLCJ0b0ZpeGVkIiwid3JhcFRpbWUiLCJtYXJrU3RhcnQiLCJzdGFydFRpbWUxIiwiZW5kVGltZTEiLCJzdGVwIiwic2VsZiIsImFkZEV2ZW50TGlzdGVuZXIiLCJpIiwicHVzaCIsImRhdGFzZXQiLCJ3aWR0aCIsInNpbGRlckRyYWciLCJjb21wdXRlVGltZSIsIm1vdmVXaWR0aCIsIm1hcmtNb3ZlV2lkdGgiLCJ3cmFwUG9zaSIsIlJlbWFpbmluZ1RpbWUiLCJkaXNYIiwidHlwZSIsImRpc1ciLCJkaXNYMSIsImRpc0wiLCJ3cmFwV2lkdGgiLCJvYmpNb3ZlIiwiZXYiLCJvZmZzZXRYIiwic3R5bGUiLCJjdXJzb3IiLCJvbm1vdXNlbW92ZSIsIm9ubW91c2Vkb3duIiwiY2xpZW50WCIsImRvY3VtZW50IiwibW92ZSIsInciLCJsZWZ0IiwiY3VycmVudFgiLCJvbm1vdXNldXAiLCJ1bmRlZmluZWQiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsImUiLCJjdXJyZW50VGFyZ2V0Iiwic2V0U3RhdHJUaW1lIiwiaWQiLCJwaWNVcmwiLCJzZXRUaW1lU2hvdyIsImhlaWdodCIsIm1hcCIsIml0ZW0iLCJpbmRleCIsInBvc2l0aW9uIiwiZm9udFNpemUiLCJib3R0b20iLCJkaXNwbGF5IiwiYmFja2dyb3VuZENvbG9yIiwibWFyZ2luTGVmdCIsImNoYW5nZVN0YXJ0VGltZSIsImJpbmQiLCJ1cGRhdGVSZW5kZXIiLCJwcmV2UHJvcHMiLCJDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJudW1iZXIiLCJvbmVPZlR5cGUiLCJvYmplY3QiLCJhcnJheSIsImZ1bmMiLCJib29sIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7O0lBUXFCQSxROzs7OztBQUNqQixvQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNmLDhCQUFNQSxLQUFOO0FBQ0EsVUFBS0MsR0FBTCxnQkFBV0MsNENBQUssQ0FBQ0MsU0FBTixFQUFYO0FBQ0EsVUFBS0MsSUFBTCxnQkFBWUYsNENBQUssQ0FBQ0MsU0FBTixFQUFaO0FBQ0EsVUFBS0UsT0FBTCxnQkFBZUgsNENBQUssQ0FBQ0MsU0FBTixFQUFmO0FBQ0EsVUFBS0csS0FBTCxHQUFhO0FBQ1RDLGtCQUFZLEVBQUUsQ0FETDtBQUVUQyxlQUFTLEVBQUUsRUFGRjtBQUdUQyxVQUFJLEVBQUUsSUFIRztBQUlUQyxlQUFTLEVBQUUsQ0FKRjtBQUtUQyxpQkFBVyxFQUFFLENBTEo7QUFNVEMsY0FBUSxFQUFFO0FBTkQsS0FBYjtBQUxlO0FBYWxCOzs7O3dDQUNtQjtBQUNoQixXQUFLQyxZQUFMO0FBQ0gsSyxDQUVEOzs7O2dDQUNZQyxHLEVBQUs7QUFBQSx3QkFDYyxLQUFLZCxLQURuQjtBQUFBLFVBQ1JlLFFBRFEsZUFDUkEsUUFEUTtBQUFBLFVBQ0VDLFFBREYsZUFDRUEsUUFERjtBQUFBLFVBRVJULFlBRlEsR0FFUSxLQUFLRCxLQUZiLENBRVJDLFlBRlE7QUFH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WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgJy4uLy4uL3N0eWxlL2luZGV4LmNzcyc7XG5cbi8qKlxuICogRXhhbXBsZUNvbXBvbmVudCBpcyBhbiBleGFtcGxlIGNvbXBvbmVudC5cbiAqIEl0IHRha2VzIGEgcHJvcGVydHksIGBsYWJlbGAsIGFuZFxuICogZGlzcGxheXMgaXQuXG4gKiBJdCByZW5kZXJzIGFuIGlucHV0IHdpdGggdGhlIHByb3BlcnR5IGB2YWx1ZWBcbiAqIHdoaWNoIGlzIGVkaXRhYmxlIGJ5IHRoZSB1c2VyLlxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE15U2xpZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuaW1nID0gUmVhY3QuY3JlYXRlUmVmKCk7XG4gICAgICAgIHRoaXMubWFyayA9IFJlYWN0LmNyZWF0ZVJlZigpO1xuICAgICAgICB0aGlzLndyYXBJbWcgPSBSZWFjdC5jcmVhdGVSZWYoKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHN0ZXBJbnRlcnZhbDogMCxcbiAgICAgICAgICAgIHN1YnNjcmlwdDogW10sXG4gICAgICAgICAgICBmbGFnOiB0cnVlLFxuICAgICAgICAgICAgc3RhcnRUaW1lOiAwLFxuICAgICAgICAgICAgd3JhcEltZ0xlZnQ6IDAsXG4gICAgICAgICAgICBtYXJrTGVmdDogMFxuICAgICAgICB9O1xuICAgIH1cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5zZXRTdWJzY3JpcHQoKTtcbiAgICB9XG5cbiAgICAvLyDorqHnrpflvIDlp4vml7bpl7Tlkoznu5PmnZ/ml7bpl7RcbiAgICBjb21wdXRlVGltZShvYmopIHtcbiAgICAgICAgbGV0IHtzZXRQcm9wcywgdHlwZVNpdGV9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgbGV0IHtzdGVwSW50ZXJ2YWx9ID0gdGhpcy5zdGF0ZVxuICAgICAgICBsZXQgbWFya1RpbWUgPSB0aGlzLm1hcmsuY3VycmVudC5vZmZzZXRMZWZ0IC8gc3RlcEludGVydmFsO1xuXG4gICAgICAgIC8v5ruR5Z2X5byA5aeL5pe26Ze0XG4gICAgICAgIGxldCBzdGFydFRpbWUgPSArbWFya1RpbWVcbiAgICAgICAgLy/mu5HlnZfnu5PmnZ/ml7bpl7RcbiAgICAgICAgbGV0IGVuZFRpbWUgPSArKHRoaXMubWFyay5jdXJyZW50Lm9mZnNldFdpZHRoIC8gc3RlcEludGVydmFsICsgKG1hcmtUaW1lKSlcbiAgICAgICAgLy8g5Zu+54mH6LW35aeL5pe26Ze0XG4gICAgICAgIGxldCBpbWdTdGFydFRpbWUgPSBNYXRoLmFicyh0aGlzLndyYXBJbWcuY3VycmVudC5vZmZzZXRMZWZ0KSAvIHN0ZXBJbnRlcnZhbFxuICAgICAgICAvL+WbvueJh+e7k+adn+aXtumXtFxuICAgICAgICBsZXQgaW1nRW5kVGltZSA9IHRoaXMud3JhcEltZy5jdXJyZW50LnBhcmVudE5vZGUub2Zmc2V0V2lkdGggLyBzdGVwSW50ZXJ2YWwgKyBpbWdTdGFydFRpbWVcblxuICAgICAgICBpZiAodHlwZVNpdGUpIHtcbiAgICAgICAgICAgIGlmICghb2JqKSB7XG4gICAgICAgICAgICAgICAgLy/liJ3lp4vljJbmmK/lm77niYflkozmu5HlnZfmiYDlpITkvY3nva5cbiAgICAgICAgICAgICAgICBzZXRQcm9wcyh7XG4gICAgICAgICAgICAgICAgICAgIHJhbmdlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbWdTdGFydFRpbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWdFbmRUaW1lXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIHNldFByb3BzKHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0VGltZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuZFRpbWVcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAob2JqID09PSB0aGlzLndyYXBJbWcuY3VycmVudCkge1xuICAgICAgICAgICAgICAgIC8vIOWbvueJh+a7keWKqOWQjueahOS9jee9rlxuICAgICAgICAgICAgICAgIHNldFByb3BzKHtcbiAgICAgICAgICAgICAgICAgICAgcmFuZ2U6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGltZ1N0YXJ0VGltZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGltZ0VuZFRpbWVcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLy/lm77niYfnp7vliqjlkI7vvIzmu5HlnZfmiYDlnKjnmoTkvY3nva5cbiAgICAgICAgICAgICAgICBzZXRQcm9wcyh7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFydFRpbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBlbmRUaW1lXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy/mu5HlnZfnp7vliqjlkI7vvIzmiYDlnKjkvY3nva5cbiAgICAgICAgICAgICAgICBzZXRQcm9wcyh7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFydFRpbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBlbmRUaW1lXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIHN0YXJ0VGltZTogKGltZ1N0YXJ0VGltZSArIHN0YXJ0VGltZSkudG9GaXhlZCgyKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCB3cmFwVGltZSA9IE1hdGguYWJzKHRoaXMud3JhcEltZy5jdXJyZW50Lm9mZnNldExlZnQpXG4gICAgICAgICAgICBsZXQgbWFya1N0YXJ0ID0gdGhpcy5tYXJrLmN1cnJlbnQub2Zmc2V0TGVmdFxuICAgICAgICAgICAgbGV0IHN0YXJ0VGltZTEgPSAod3JhcFRpbWUgKyBtYXJrU3RhcnQpIC8gc3RlcEludGVydmFsXG4gICAgICAgICAgICBsZXQgZW5kVGltZTEgPSAodGhpcy5tYXJrLmN1cnJlbnQub2Zmc2V0V2lkdGggKyB3cmFwVGltZSArIG1hcmtTdGFydCkgLyBzdGVwSW50ZXJ2YWxcblxuICAgICAgICAgICAgc2V0UHJvcHMoe1xuICAgICAgICAgICAgICAgIHZhbHVlOiB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0VGltZTogc3RhcnRUaW1lMSxcbiAgICAgICAgICAgICAgICAgICAgZW5kVGltZTogZW5kVGltZTFcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgc3RhcnRUaW1lOiAoKyBzdGFydFRpbWUxKS50b0ZpeGVkKDIpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICB9XG4gICAgLy/orr7nva7kuIvmoIfkvY3nva5cbiAgICBzZXRTdWJzY3JpcHQoKSB7XG4gICAgICAgIGxldCB7c3RlcH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBsZXQge2ZsYWd9ID0gdGhpcy5zdGF0ZVxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgIGxldCBzdWJzY3JpcHQgPSBbXVxuXG4gICAgICAgIHRoaXNcbiAgICAgICAgICAgIC5pbWdcbiAgICAgICAgICAgIC5jdXJyZW50XG4gICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0ZXA7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBzdWJzY3JpcHQucHVzaChpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc2VsZi5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIHN0ZXBJbnRlcnZhbDogdGhpcy5vZmZzZXRXaWR0aCAvIHN0ZXAsXG4gICAgICAgICAgICAgICAgICAgIHN1YnNjcmlwdFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHNlbGYud3JhcEltZy5jdXJyZW50LmRhdGFzZXQud2lkdGggPSB0aGlzLm9mZnNldFdpZHRoO1xuICAgICAgICAgICAgICAgIHNlbGYuc2lsZGVyRHJhZyhzZWxmLm1hcmsuY3VycmVudCk7XG4gICAgICAgICAgICAgICAgc2VsZi5zaWxkZXJEcmFnKHNlbGYud3JhcEltZy5jdXJyZW50LCB0cnVlKTtcbiAgICAgICAgICAgICAgICBpZiAoZmxhZykge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbXB1dGVUaW1lKCk7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuc2V0U3RhdGUoe2ZsYWc6IGZhbHNlfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgIH1cbiAgICAvL+iuvue9ruWIneWni+WMluaXtumXtFxuICAgIHNldFN0YXRyVGltZSgpIHtcblxuICAgICAgICBsZXQge3N0ZXBJbnRlcnZhbCwgc3RhcnRUaW1lfSA9IHRoaXMuc3RhdGVcblxuICAgICAgICBsZXQge2N1cnJlbnQ6IHdyYXBJbWd9ID0gdGhpcy53cmFwSW1nXG4gICAgICAgIGxldCB7Y3VycmVudDogbWFya30gPSB0aGlzLm1hcmtcbiAgICAgICAgbGV0IG1vdmVXaWR0aCA9IHdyYXBJbWcuZGF0YXNldC53aWR0aCAtIHdyYXBJbWcub2Zmc2V0V2lkdGhcbiAgICAgICAgbGV0IG1hcmtNb3ZlV2lkdGggPSB3cmFwSW1nLm9mZnNldFdpZHRoIC0gbWFyay5vZmZzZXRXaWR0aFxuICAgICAgICBsZXQgd3JhcFBvc2kgPSBzdGFydFRpbWUgKiBzdGVwSW50ZXJ2YWxcbiAgICAgICAgaWYgKHdyYXBQb3NpIDw9IG1vdmVXaWR0aCkge1xuXG4gICAgICAgICAgICAvLyB3cmFwSW1nLnN0eWxlLmxlZnQgPSBgLSR7d3JhcFBvc2l9cHhgXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICB3cmFwSW1nTGVmdDogLXdyYXBQb3NpICsgJ3B4JyxcbiAgICAgICAgICAgICAgICBtYXJrTGVmdDogJzBweCdcbiAgICAgICAgICAgIH0sICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbXB1dGVUaW1lKClcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgfSBlbHNlIGlmICh3cmFwUG9zaSA+IG1vdmVXaWR0aCkge1xuICAgICAgICAgICAgbGV0IFJlbWFpbmluZ1RpbWUgPSB3cmFwUG9zaSAtIG1vdmVXaWR0aFxuICAgICAgICAgICAgLy8gd3JhcEltZy5zdHlsZS5sZWZ0ID0gYC0ke21vdmVXaWR0aH1weGBcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIHdyYXBJbWdMZWZ0OiAtbW92ZVdpZHRoICsgJ3B4JyxcbiAgICAgICAgICAgICAgICBtYXJrTGVmdDogJzBweCdcbiAgICAgICAgICAgIH0sICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbXB1dGVUaW1lKClcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIGlmIChSZW1haW5pbmdUaW1lIDwgbWFya01vdmVXaWR0aCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICBtYXJrTGVmdDogUmVtYWluaW5nVGltZSArICdweCdcbiAgICAgICAgICAgICAgICB9LCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tcHV0ZVRpbWUoKVxuICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICAvLyBtYXJrLnN0eWxlLmxlZnQgPSBgJHtSZW1haW5pbmdUaW1lfXB4YFxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgbWFya0xlZnQ6IG1hcmtNb3ZlV2lkdGggKyAncHgnXG4gICAgICAgICAgICAgICAgfSwgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbXB1dGVUaW1lKClcbiAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH1cbiAgICAvL+a7keWdl1xuICAgIHNpbGRlckRyYWcob2JqLCBmbGFnKSB7XG4gICAgICAgIGxldCBkaXNYLFxuICAgICAgICAgICAgdHlwZSxcbiAgICAgICAgICAgIGRpc1csXG4gICAgICAgICAgICBkaXNYMSxcbiAgICAgICAgICAgIGRpc0w7XG4gICAgICAgIGxldCB3cmFwV2lkdGggPSB0aGlzLndyYXBJbWcuY3VycmVudC5vZmZzZXRXaWR0aDtcbiAgICAgICAgbGV0IHtzdGVwSW50ZXJ2YWx9ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzXG5cbiAgICAgICAgZnVuY3Rpb24gb2JqTW92ZShldikge1xuXG4gICAgICAgICAgICBpZiAoZXYub2Zmc2V0WCA8IDEwKSB7XG4gICAgICAgICAgICAgICAgdHlwZSA9ICdsZWZ0JztcbiAgICAgICAgICAgICAgICBvYmouc3R5bGUuY3Vyc29yID0gJ3ctcmVzaXplJztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZXYub2Zmc2V0WCA+IG9iai5vZmZzZXRXaWR0aCAtIDEwKSB7XG4gICAgICAgICAgICAgICAgdHlwZSA9ICdyaWdodCc7XG4gICAgICAgICAgICAgICAgb2JqLnN0eWxlLmN1cnNvciA9ICdlLXJlc2l6ZSc7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHR5cGUgPSAnJztcbiAgICAgICAgICAgICAgICBvYmouc3R5bGUuY3Vyc29yID0gJ2RlZmF1bHQnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICghZmxhZykge1xuICAgICAgICAgICAgb2JqLm9ubW91c2Vtb3ZlID0gb2JqTW92ZVxuICAgICAgICB9XG4gICAgICAgIG9iai5vbm1vdXNlZG93biA9IGZ1bmN0aW9uIChldikge1xuICAgICAgICAgICAgaWYgKCFmbGFnKSB7XG4gICAgICAgICAgICAgICAgb2JqLm9ubW91c2Vtb3ZlID0gbnVsbFxuICAgICAgICAgICAgICAgIGlmIChldi5vZmZzZXRYIDwgMTApIHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZSA9ICdsZWZ0JztcbiAgICAgICAgICAgICAgICAgICAgb2JqLnN0eWxlLmN1cnNvciA9ICd3LXJlc2l6ZSc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChldi5vZmZzZXRYID4gb2JqLm9mZnNldFdpZHRoIC0gMTApIHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZSA9ICdyaWdodCc7XG4gICAgICAgICAgICAgICAgICAgIG9iai5zdHlsZS5jdXJzb3IgPSAnZS1yZXNpemUnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRpc1gxID0gZXYuY2xpZW50WDtcbiAgICAgICAgICAgIGRpc1cgPSBvYmoub2Zmc2V0V2lkdGg7XG4gICAgICAgICAgICBkaXNMID0gb2JqLm9mZnNldExlZnQ7XG4gICAgICAgICAgICBkaXNYID0gZXYuY2xpZW50WCAtIG9iai5vZmZzZXRMZWZ0O1xuXG4gICAgICAgICAgICBkb2N1bWVudC5vbm1vdXNlbW92ZSA9IGZ1bmN0aW9uIG1vdmUoZXYpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZSkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgdyA9IGV2LmNsaWVudFggLSBkaXNYMTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9iai5vZmZzZXRXaWR0aCA+IHdyYXBXaWR0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgb2JqLnN0eWxlLndpZHRoID0gd3JhcFdpZHRoICsgJ3B4JztcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob2JqLm9mZnNldFdpZHRoICsgb2JqLm9mZnNldExlZnQgPiB3cmFwV2lkdGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9iai5zdHlsZS53aWR0aCA9IHdyYXBXaWR0aCAtIG9iai5vZmZzZXRMZWZ0ICsgJ3B4JztcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob2JqLm9mZnNldFdpZHRoIDwgc3RlcEludGVydmFsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvYmouc3R5bGUud2lkdGggPSBzdGVwSW50ZXJ2YWwgKyAncHgnO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlID09ICdyaWdodCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9iai5zdHlsZS53aWR0aCA9IHcgKyBkaXNXICsgJ3B4JztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZSA9PSAnbGVmdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkaXNMICsgdyA8PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gb2JqLnN0eWxlLndpZHRoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqLnN0eWxlLmxlZnQgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9iai5zdHlsZS53aWR0aCA9IGRpc1cgLSB3ICsgJ3B4JztcbiAgICAgICAgICAgICAgICAgICAgICAgIG9iai5zdHlsZS5sZWZ0ID0gZGlzTCArIHcgKyAncHgnO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRYID0gZXYuY2xpZW50WCAtIGRpc1g7XG5cbiAgICAgICAgICAgICAgICBpZiAoIWZsYWcpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRYIDwgMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFggPSAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50WCA+IHdyYXBXaWR0aCAtIG9iai5vZmZzZXRXaWR0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFggPSB3cmFwV2lkdGggLSBvYmoub2Zmc2V0V2lkdGg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudFggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50WCA9IDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRYIDwgd3JhcFdpZHRoIC0gb2JqLmRhdGFzZXQud2lkdGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRYID0gd3JhcFdpZHRoIC0gb2JqLmRhdGFzZXQud2lkdGg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgb2JqLnN0eWxlLmxlZnQgPSBjdXJyZW50WCArICdweCc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkb2N1bWVudC5vbm1vdXNldXAgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQub25tb3VzZW1vdmUgPSBudWxsXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQub25tb3VzZXVwID0gbnVsbFxuICAgICAgICAgICAgICAgIHR5cGUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgb2JqLnN0eWxlLmN1cnNvciA9ICdkZWZhdWx0JztcbiAgICAgICAgICAgICAgICBzZWxmLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgbWFya0xlZnQ6IHNlbGYubWFyay5jdXJyZW50Lm9mZnNldExlZnQgKyAncHgnLFxuICAgICAgICAgICAgICAgICAgICB3cmFwSW1nTGVmdDogc2VsZi53cmFwSW1nLmN1cnJlbnQub2Zmc2V0TGVmdCArICdweCdcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIGlmICghZmxhZykge1xuXG4gICAgICAgICAgICAgICAgICAgIG9iai5vbm1vdXNlbW92ZSA9IG9iak1vdmVcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9iai5vZmZzZXRXaWR0aCArIG9iai5vZmZzZXRMZWZ0ID4gd3JhcFdpZHRoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvYmouc3R5bGUud2lkdGggPSB3cmFwV2lkdGggLSBvYmoub2Zmc2V0TGVmdCArICdweCc7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHNlbGYuY29tcHV0ZVRpbWUob2JqKVxuXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB9O1xuICAgIH1cbiAgICBjaGFuZ2VTdGFydFRpbWUoZSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtzdGFydFRpbWU6IGUuY3VycmVudFRhcmdldC52YWx1ZX0pXG4gICAgfVxuICAgIHVwZGF0ZVJlbmRlcigpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0clRpbWUoKVxuICAgIH1cbiAgICBcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCB7XG4gICAgICAgICAgICBpZCxcbiAgICAgICAgICAgIHBpY1VybCxcbiAgICAgICAgICAgIHdpZHRoLFxuICAgICAgICAgICAgc2V0VGltZVNob3csXG4gICAgICAgICAgICBoZWlnaHQsXG4gICAgICAgICAgICBzdGVwXG4gICAgICAgIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBsZXQge3N0ZXBJbnRlcnZhbCwgc3Vic2NyaXB0LCBtYXJrTGVmdCwgd3JhcEltZ0xlZnQsIHN0YXJ0VGltZX0gPSB0aGlzLnN0YXRlO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhzdWJzY3JpcHQpXG4gICAgICAgIGlmICh0eXBlb2Ygd2lkdGggPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICB3aWR0aCA9IHdpZHRoICogc3RlcEludGVydmFsICsgJ3B4J1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGlkPXtpZH0+XG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3cmFwXCJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IHdpZHRoXG4gICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIndyYXBJbWdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IHdyYXBJbWdMZWZ0LFxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBoZWlnaHQgKyAyMCArICdweCdcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17dGhpcy53cmFwSW1nfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9e3RoaXMuaW1nfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17cGljVXJsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBoZWlnaHQgKyAncHgnXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImltZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCIvPiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c3Vic2NyaXB0Lm1hcCgoaXRlbSxpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IHN0ZXBJbnRlcnZhbCAqIGl0ZW0gKyAncHgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzEycHgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3R0b206IDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnNXB4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnMXB4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyM5OTknXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiAnLTUwJSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbX1taW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxpXG4gICAgICAgICAgICAgICAgICAgICAgICByZWY9e3RoaXMubWFya31cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1hcmtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBzdGVwSW50ZXJ2YWwgKyAncHgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBoZWlnaHQgKyAncHgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogbWFya0xlZnRcbiAgICAgICAgICAgICAgICAgICAgfX0+PC9pPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIHtzZXRUaW1lU2hvdyAmJiA8ZGl2IGNsYXNzTmFtZT0nYnV0dG9tJz5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c3RhcnRUaW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXNcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jaGFuZ2VTdGFydFRpbWVcbiAgICAgICAgICAgICAgICAgICAgICAgIC5iaW5kKHRoaXMpfS8+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXNcbiAgICAgICAgICAgICAgICAgICAgICAgIC51cGRhdGVSZW5kZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5iaW5kKHRoaXMpfT5zdGFydFRpbWU8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj59XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbiAgICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKXtcbiAgICAgICAgaWYocHJldlByb3BzLnN0ZXAgIT0gdGhpcy5wcm9wcy5zdGVwKXtcbiAgICAgICAgICAgIHRoaXMuc2V0U3Vic2NyaXB0KClcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIHdyYXBJbWdMZWZ0OjAsXG4gICAgICAgICAgICAgICAgbWFya0xlZnQ6MFxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG59XG5cbk15U2xpZGVyLmRlZmF1bHRQcm9wcyA9IHtcbiAgICB3aWR0aDogMTAsXG4gICAgaGVpZ2h0OiA4MCxcbiAgICBzZXRUaW1lU2hvdzogdHJ1ZSxcbiAgICB0eXBlU2l0ZTogZmFsc2Vcbn07XG5cbk15U2xpZGVyLnByb3BUeXBlcyA9IHtcbiAgICAvKipcbiAgICAgKiBUaGUgSUQgdXNlZCB0byBpZGVudGlmeSB0aGlzIGNvbXBvbmVudCBpbiBEYXNoIGNhbGxiYWNrcy5cbiAgICAgKi9cbiAgICBpZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAvKipcbiAgICAgKiBUaGUgcGljVXJsIGRpc3BsYXllZCBpbiB0aGUgc3RyaW5nLlxuICAgICAqIOaAu+mihOiniOWbvui3r+W+hFxuICAgICAqL1xuICAgIHBpY1VybDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAvKipcbiAgICAgKiDpooTop4jlm77mgLvml7bpl7TvvIg2MS4xN++8iVxuICAgICAqL1xuICAgIHN0ZXA6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgLyoqXG4gICAgICogVGhlIHZhbHVlIGRpc3BsYXllZCBpbiB0aGUgaW5wdXQuXG4gICAgICog6L+U5Zue5byA5aeL5pe26Ze05ZKM57uT5p2f5pe26Ze0IHt2YWx1ZTp7aW1nU3RhcnRUaW1lLGltZ0VuZFRpbWV9fVxuICAgICAqL1xuICAgIHZhbHVlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMub2JqZWN0LCBQcm9wVHlwZXMuYXJyYXldKSxcblxuICAgIC8qKlxuICAgICAqIERhc2gtYXNzaWduZWQgY2FsbGJhY2sgdGhhdCBzaG91bGQgYmUgY2FsbGVkIHRvIHJlcG9ydCBwcm9wZXJ0eSBjaGFuZ2VzXG4gICAgICogdG8gRGFzaCwgdG8gbWFrZSB0aGVtIGF2YWlsYWJsZSBmb3IgY2FsbGJhY2tzLlxuICAgICAqL1xuICAgIC8qKlxuICAgICAqIOi/lOWbnuiMg+WbtOaVsOaNrueahOiMg+WbtCjlm77niYflj6/op4bljLrml7bpl7TmrrUpXG4gICAgICovXG4gICAgcmFuZ2U6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5vYmplY3RdKSxcbiAgICBzZXRQcm9wczogUHJvcFR5cGVzLmZ1bmMsXG4gICAgLyoqXG4gICAgICog5Y+v6KeG5Yy65a695bqm6buY6K6kMTDliIbpkp9cbiAgICAgKi9cbiAgICB3aWR0aDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pLFxuICAgIC8qKlxuICAgICAqIOmAieaLqeW8gOWni+aXtumXtOahhuaYr+WQpuaYvuekulxuICAgICAqL1xuICAgIHNldFRpbWVTaG93OiBQcm9wVHlwZXMuYm9vbCxcbiAgICAvKipcbiAgICAgKiDorqHnrpfmqKHlvI/ml7bpl7TmqKHlvI/vvIx0cnVl5Li65bqV6YOo5Zu+54mH5Li65qC55o2u77yMZmFsc2XkuLptYXJr5Z2X5Li65L6d5o2uXG4gICAgICovXG4gICAgdHlwZVNpdGU6IFByb3BUeXBlcy5ib29sLFxuICAgIC8qKlxuICAgICAqIOWbvueJh+mrmOW6plxuICAgICAqL1xuICAgIGhlaWdodDogUHJvcFR5cGVzLm51bWJlclxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=