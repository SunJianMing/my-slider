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
          startTime = _this$state2.startTime;

      if (typeof width === 'number') {
        width = width * stepInterval + 'px';
      }

      return step && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
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
      }), " ", subscript.map(function (item) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          key: item,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teV9zbGlkZXIvLi9zcmMvbGliL2NvbXBvbmVudHMvTXlTbGlkZXIucmVhY3QuanMiXSwibmFtZXMiOlsiTXlTbGlkZXIiLCJwcm9wcyIsImltZyIsIlJlYWN0IiwiY3JlYXRlUmVmIiwibWFyayIsIndyYXBJbWciLCJzdGF0ZSIsInN0ZXBJbnRlcnZhbCIsInN1YnNjcmlwdCIsImZsYWciLCJzdGFydFRpbWUiLCJ3cmFwSW1nTGVmdCIsIm1hcmtMZWZ0Iiwic2V0U3Vic2NyaXB0Iiwib2JqIiwic2V0UHJvcHMiLCJ0eXBlU2l0ZSIsIm1hcmtUaW1lIiwiY3VycmVudCIsIm9mZnNldExlZnQiLCJlbmRUaW1lIiwib2Zmc2V0V2lkdGgiLCJpbWdTdGFydFRpbWUiLCJNYXRoIiwiYWJzIiwiaW1nRW5kVGltZSIsInBhcmVudE5vZGUiLCJyYW5nZSIsInZhbHVlIiwic2V0U3RhdGUiLCJ0b0ZpeGVkIiwid3JhcFRpbWUiLCJtYXJrU3RhcnQiLCJzdGFydFRpbWUxIiwiZW5kVGltZTEiLCJzdGVwIiwic2VsZiIsImFkZEV2ZW50TGlzdGVuZXIiLCJpIiwicHVzaCIsImRhdGFzZXQiLCJ3aWR0aCIsInNpbGRlckRyYWciLCJjb21wdXRlVGltZSIsIm1vdmVXaWR0aCIsIm1hcmtNb3ZlV2lkdGgiLCJ3cmFwUG9zaSIsIlJlbWFpbmluZ1RpbWUiLCJkaXNYIiwidHlwZSIsImRpc1ciLCJkaXNYMSIsImRpc0wiLCJ3cmFwV2lkdGgiLCJvYmpNb3ZlIiwiZXYiLCJvZmZzZXRYIiwic3R5bGUiLCJjdXJzb3IiLCJvbm1vdXNlbW92ZSIsIm9ubW91c2Vkb3duIiwiY2xpZW50WCIsImRvY3VtZW50IiwibW92ZSIsInciLCJsZWZ0IiwiY3VycmVudFgiLCJvbm1vdXNldXAiLCJ1bmRlZmluZWQiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsImUiLCJjdXJyZW50VGFyZ2V0Iiwic2V0U3RhdHJUaW1lIiwiaWQiLCJwaWNVcmwiLCJzZXRUaW1lU2hvdyIsImhlaWdodCIsIm1hcCIsIml0ZW0iLCJwb3NpdGlvbiIsImZvbnRTaXplIiwiYm90dG9tIiwiZGlzcGxheSIsImJhY2tncm91bmRDb2xvciIsIm1hcmdpbkxlZnQiLCJjaGFuZ2VTdGFydFRpbWUiLCJiaW5kIiwidXBkYXRlUmVuZGVyIiwiQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwibnVtYmVyIiwib25lT2ZUeXBlIiwib2JqZWN0IiwiYXJyYXkiLCJmdW5jIiwiYm9vbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7OztJQVFxQkEsUTs7Ozs7QUFDakIsb0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDZiw4QkFBTUEsS0FBTjtBQUNBLFVBQUtDLEdBQUwsZ0JBQVdDLDRDQUFLLENBQUNDLFNBQU4sRUFBWDtBQUNBLFVBQUtDLElBQUwsZ0JBQVlGLDRDQUFLLENBQUNDLFNBQU4sRUFBWjtBQUNBLFVBQUtFLE9BQUwsZ0JBQWVILDRDQUFLLENBQUNDLFNBQU4sRUFBZjtBQUNBLFVBQUtHLEtBQUwsR0FBYTtBQUNUQyxrQkFBWSxFQUFFLENBREw7QUFFVEMsZUFBUyxFQUFFLEVBRkY7QUFHVEMsVUFBSSxFQUFFLElBSEc7QUFJVEMsZUFBUyxFQUFFLENBSkY7QUFLVEMsaUJBQVcsRUFBRSxDQUxKO0FBTVRDLGNBQVEsRUFBRTtBQU5ELEtBQWI7QUFMZTtBQWFsQjs7Ozt3Q0FDbUI7QUFDaEIsV0FBS0MsWUFBTDtBQUNILEssQ0FFRDs7OztnQ0FDWUMsRyxFQUFLO0FBQUEsd0JBQ2MsS0FBS2QsS0FEbkI7QUFBQSxVQUNSZSxRQURRLGVBQ1JBLFFBRFE7QUFBQSxVQUNFQyxRQURGLGVBQ0VBLFFBREY7QUFBQSxVQUVSVCxZQUZRLEdBRVEsS0FBS0QsS0FGYixDQUVSQyxZQUZRO0FBR2IsVUFBSVUsUUFBUSxHQUFHLEtB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O0FBSUFsQixRQUFNLEVBQUVpQixpREFBUyxDQUFDQyxNQVREOztBQVVqQjs7O0FBR0ExRCxNQUFJLEVBQUV5RCxpREFBUyxDQUFDRSxNQWJDOztBQWNqQjs7OztBQUlBbEUsT0FBSyxFQUFFZ0UsaURBQVMsQ0FBQ0csU0FBVixDQUFvQixDQUFDSCxpREFBUyxDQUFDQyxNQUFYLEVBQW1CRCxpREFBUyxDQUFDRSxNQUE3QixFQUFxQ0YsaURBQVMsQ0FBQ0ksTUFBL0MsRUFBdURKLGlEQUFTLENBQUNLLEtBQWpFLENBQXBCLENBbEJVOztBQW9CakI7Ozs7O0FBSUE7OztBQUdBdEUsT0FBSyxFQUFFaUUsaURBQVMsQ0FBQ0csU0FBVixDQUFvQixDQUFDSCxpREFBUyxDQUFDQyxNQUFYLEVBQW1CRCxpREFBUyxDQUFDSSxNQUE3QixDQUFwQixDQTNCVTtBQTRCakJqRixVQUFRLEVBQUU2RSxpREFBUyxDQUFDTSxJQTVCSDs7QUE2QmpCOzs7QUFHQXpELE9BQUssRUFBRW1ELGlEQUFTLENBQUNHLFNBQVYsQ0FBb0IsQ0FBQ0gsaURBQVMsQ0FBQ0MsTUFBWCxFQUFtQkQsaURBQVMsQ0FBQ0UsTUFBN0IsQ0FBcEIsQ0FoQ1U7O0FBaUNqQjs7O0FBR0FsQixhQUFXLEVBQUVnQixpREFBUyxDQUFDTyxJQXBDTjs7QUFxQ2pCOzs7QUFHQW5GLFVBQVEsRUFBRTRFLGlEQUFTLENBQUNPLElBeENIOztBQXlDakI7OztBQUdDdEIsUUFBTSxFQUFDZSxpREFBUyxDQUFDRTtBQTVDRCxDQUFyQixDIiwiZmlsZSI6ImEwNjQ5ZGItbWFpbi13cHMtaG1yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0ICcuLi8uLi9zdHlsZS9pbmRleC5jc3MnO1xuXG4vKipcbiAqIEV4YW1wbGVDb21wb25lbnQgaXMgYW4gZXhhbXBsZSBjb21wb25lbnQuXG4gKiBJdCB0YWtlcyBhIHByb3BlcnR5LCBgbGFiZWxgLCBhbmRcbiAqIGRpc3BsYXlzIGl0LlxuICogSXQgcmVuZGVycyBhbiBpbnB1dCB3aXRoIHRoZSBwcm9wZXJ0eSBgdmFsdWVgXG4gKiB3aGljaCBpcyBlZGl0YWJsZSBieSB0aGUgdXNlci5cbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNeVNsaWRlciBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLmltZyA9IFJlYWN0LmNyZWF0ZVJlZigpO1xuICAgICAgICB0aGlzLm1hcmsgPSBSZWFjdC5jcmVhdGVSZWYoKTtcbiAgICAgICAgdGhpcy53cmFwSW1nID0gUmVhY3QuY3JlYXRlUmVmKCk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBzdGVwSW50ZXJ2YWw6IDAsXG4gICAgICAgICAgICBzdWJzY3JpcHQ6IFtdLFxuICAgICAgICAgICAgZmxhZzogdHJ1ZSxcbiAgICAgICAgICAgIHN0YXJ0VGltZTogMCxcbiAgICAgICAgICAgIHdyYXBJbWdMZWZ0OiAwLFxuICAgICAgICAgICAgbWFya0xlZnQ6IDBcbiAgICAgICAgfTtcbiAgICB9XG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMuc2V0U3Vic2NyaXB0KCk7XG4gICAgfVxuXG4gICAgLy8g6K6h566X5byA5aeL5pe26Ze05ZKM57uT5p2f5pe26Ze0XG4gICAgY29tcHV0ZVRpbWUob2JqKSB7XG4gICAgICAgIGxldCB7c2V0UHJvcHMsIHR5cGVTaXRlfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGxldCB7c3RlcEludGVydmFsfSA9IHRoaXMuc3RhdGVcbiAgICAgICAgbGV0IG1hcmtUaW1lID0gdGhpcy5tYXJrLmN1cnJlbnQub2Zmc2V0TGVmdCAvIHN0ZXBJbnRlcnZhbDtcbiAgICAgICAgIFxuICAgICAgICAvL+a7keWdl+W8gOWni+aXtumXtFxuICAgICAgICBsZXQgc3RhcnRUaW1lID0gK21hcmtUaW1lXG4gICAgICAgIC8v5ruR5Z2X57uT5p2f5pe26Ze0XG4gICAgICAgIGxldCBlbmRUaW1lID0gKyh0aGlzLm1hcmsuY3VycmVudC5vZmZzZXRXaWR0aCAvIHN0ZXBJbnRlcnZhbCArIChtYXJrVGltZSkpXG4gICAgICAgIC8vIOWbvueJh+i1t+Wni+aXtumXtFxuICAgICAgICBsZXQgaW1nU3RhcnRUaW1lID0gTWF0aC5hYnModGhpcy53cmFwSW1nLmN1cnJlbnQub2Zmc2V0TGVmdCkgLyBzdGVwSW50ZXJ2YWxcbiAgICAgICAgLy/lm77niYfnu5PmnZ/ml7bpl7RcbiAgICAgICAgbGV0IGltZ0VuZFRpbWUgPSB0aGlzLndyYXBJbWcuY3VycmVudC5wYXJlbnROb2RlLm9mZnNldFdpZHRoIC8gc3RlcEludGVydmFsICsgaW1nU3RhcnRUaW1lXG5cbiAgICAgICAgaWYgKHR5cGVTaXRlKSB7XG4gICAgICAgICAgICBpZiAoIW9iaikge1xuICAgICAgICAgICAgICAgIC8v5Yid5aeL5YyW5piv5Zu+54mH5ZKM5ruR5Z2X5omA5aSE5L2N572uXG4gICAgICAgICAgICAgICAgc2V0UHJvcHMoe1xuICAgICAgICAgICAgICAgICAgICByYW5nZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW1nU3RhcnRUaW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW1nRW5kVGltZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBzZXRQcm9wcyh7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFydFRpbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBlbmRUaW1lXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9iaiA9PT0gdGhpcy53cmFwSW1nLmN1cnJlbnQpIHtcbiAgICAgICAgICAgICAgICAvLyDlm77niYfmu5HliqjlkI7nmoTkvY3nva5cbiAgICAgICAgICAgICAgICBzZXRQcm9wcyh7XG4gICAgICAgICAgICAgICAgICAgIHJhbmdlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbWdTdGFydFRpbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWdFbmRUaW1lXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC8v5Zu+54mH56e75Yqo5ZCO77yM5ruR5Z2X5omA5Zyo55qE5L2N572uXG4gICAgICAgICAgICAgICAgc2V0UHJvcHMoe1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnRUaW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgZW5kVGltZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8v5ruR5Z2X56e75Yqo5ZCO77yM5omA5Zyo5L2N572uXG4gICAgICAgICAgICAgICAgc2V0UHJvcHMoe1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnRUaW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgZW5kVGltZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBzdGFydFRpbWU6KGltZ1N0YXJ0VGltZStzdGFydFRpbWUpLnRvRml4ZWQoMilcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgbGV0IHdyYXBUaW1lID0gTWF0aC5hYnModGhpcy53cmFwSW1nLmN1cnJlbnQub2Zmc2V0TGVmdClcbiAgICAgICAgICAgIGxldCBtYXJrU3RhcnQgPSB0aGlzLm1hcmsuY3VycmVudC5vZmZzZXRMZWZ0XG4gICAgICAgICAgICBsZXQgc3RhcnRUaW1lMSA9ICh3cmFwVGltZSttYXJrU3RhcnQpL3N0ZXBJbnRlcnZhbFxuICAgICAgICAgICAgbGV0IGVuZFRpbWUxID0gKHRoaXMubWFyay5jdXJyZW50Lm9mZnNldFdpZHRoICsgd3JhcFRpbWUgK21hcmtTdGFydCkvc3RlcEludGVydmFsXG5cbiAgICAgICAgICAgIHNldFByb3BzKHtcbiAgICAgICAgICAgICAgICB2YWx1ZTp7XG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0VGltZTpzdGFydFRpbWUxLFxuICAgICAgICAgICAgICAgICAgICBlbmRUaW1lOmVuZFRpbWUxXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIHN0YXJ0VGltZTooK3N0YXJ0VGltZTEpLnRvRml4ZWQoMilcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgXG5cbiAgICB9XG4gICAgLy/orr7nva7kuIvmoIfkvY3nva5cbiAgICBzZXRTdWJzY3JpcHQoKSB7XG4gICAgICAgIGxldCB7c3RlcH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBsZXQge2ZsYWd9ID0gdGhpcy5zdGF0ZVxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgIGxldCBzdWJzY3JpcHQgPSBbXVxuICAgICAgICBcbiAgICAgICAgdGhpc1xuICAgICAgICAgICAgLmltZ1xuICAgICAgICAgICAgLmN1cnJlbnRcbiAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RlcDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHN1YnNjcmlwdC5wdXNoKGkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzZWxmLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgc3RlcEludGVydmFsOiB0aGlzLm9mZnNldFdpZHRoIC8gc3RlcCxcbiAgICAgICAgICAgICAgICAgICAgc3Vic2NyaXB0XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgc2VsZi53cmFwSW1nLmN1cnJlbnQuZGF0YXNldC53aWR0aCA9IHRoaXMub2Zmc2V0V2lkdGg7XG4gICAgICAgICAgICAgICAgc2VsZi5zaWxkZXJEcmFnKHNlbGYubWFyay5jdXJyZW50KTtcbiAgICAgICAgICAgICAgICBzZWxmLnNpbGRlckRyYWcoc2VsZi53cmFwSW1nLmN1cnJlbnQsIHRydWUpO1xuICAgICAgICAgICAgICAgIGlmIChmbGFnKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuY29tcHV0ZVRpbWUoKTtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5zZXRTdGF0ZSh7ZmxhZzogZmFsc2V9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgIH1cbiAgICAvL+iuvue9ruWIneWni+WMluaXtumXtFxuICAgIHNldFN0YXRyVGltZSgpIHtcblxuICAgICAgICBsZXQge3N0ZXBJbnRlcnZhbCwgc3RhcnRUaW1lfSA9IHRoaXMuc3RhdGVcblxuICAgICAgICBsZXQge2N1cnJlbnQ6IHdyYXBJbWd9ID0gdGhpcy53cmFwSW1nXG4gICAgICAgIGxldCB7Y3VycmVudDogbWFya30gPSB0aGlzLm1hcmtcbiAgICAgICAgbGV0IG1vdmVXaWR0aCA9IHdyYXBJbWcuZGF0YXNldC53aWR0aCAtIHdyYXBJbWcub2Zmc2V0V2lkdGhcbiAgICAgICAgbGV0IG1hcmtNb3ZlV2lkdGggPSB3cmFwSW1nLm9mZnNldFdpZHRoIC0gbWFyay5vZmZzZXRXaWR0aFxuICAgICAgICBsZXQgd3JhcFBvc2kgPSBzdGFydFRpbWUgKiBzdGVwSW50ZXJ2YWxcbiAgICAgICAgaWYgKHdyYXBQb3NpIDw9IG1vdmVXaWR0aCkge1xuXG4gICAgICAgICAgICAvLyB3cmFwSW1nLnN0eWxlLmxlZnQgPSBgLSR7d3JhcFBvc2l9cHhgXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICB3cmFwSW1nTGVmdDogLXdyYXBQb3NpICsgJ3B4JyxcbiAgICAgICAgICAgICAgICBtYXJrTGVmdDogJzBweCdcbiAgICAgICAgICAgIH0sKCk9PntcbiAgICAgICAgICAgICAgICB0aGlzLmNvbXB1dGVUaW1lKClcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgfSBlbHNlIGlmICh3cmFwUG9zaSA+IG1vdmVXaWR0aCkge1xuICAgICAgICAgICAgbGV0IFJlbWFpbmluZ1RpbWUgPSB3cmFwUG9zaSAtIG1vdmVXaWR0aFxuICAgICAgICAgICAgLy8gd3JhcEltZy5zdHlsZS5sZWZ0ID0gYC0ke21vdmVXaWR0aH1weGBcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIHdyYXBJbWdMZWZ0OiAtbW92ZVdpZHRoICsgJ3B4JyxcbiAgICAgICAgICAgICAgICBtYXJrTGVmdDogJzBweCdcbiAgICAgICAgICAgIH0sKCk9PntcbiAgICAgICAgICAgICAgICB0aGlzLmNvbXB1dGVUaW1lKClcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIGlmIChSZW1haW5pbmdUaW1lIDwgbWFya01vdmVXaWR0aCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICBtYXJrTGVmdDogUmVtYWluaW5nVGltZSArICdweCdcbiAgICAgICAgICAgICAgICB9LCgpPT57XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tcHV0ZVRpbWUoKVxuICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICAvLyBtYXJrLnN0eWxlLmxlZnQgPSBgJHtSZW1haW5pbmdUaW1lfXB4YFxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgbWFya0xlZnQ6IG1hcmtNb3ZlV2lkdGggKyAncHgnXG4gICAgICAgICAgICAgICAgfSwoKT0+e1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbXB1dGVUaW1lKClcbiAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfVxuICAgIC8v5ruR5Z2XXG4gICAgc2lsZGVyRHJhZyhvYmosIGZsYWcpIHtcbiAgICAgICAgbGV0IGRpc1gsXG4gICAgICAgICAgICB0eXBlLFxuICAgICAgICAgICAgZGlzVyxcbiAgICAgICAgICAgIGRpc1gxLFxuICAgICAgICAgICAgZGlzTDtcbiAgICAgICAgbGV0IHdyYXBXaWR0aCA9IHRoaXMud3JhcEltZy5jdXJyZW50Lm9mZnNldFdpZHRoO1xuICAgICAgICBsZXQge3N0ZXBJbnRlcnZhbH0gPSB0aGlzLnN0YXRlO1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXNcblxuICAgICAgICBmdW5jdGlvbiBvYmpNb3ZlKGV2KSB7XG5cbiAgICAgICAgICAgIGlmIChldi5vZmZzZXRYIDwgMTApIHtcbiAgICAgICAgICAgICAgICB0eXBlID0gJ2xlZnQnO1xuICAgICAgICAgICAgICAgIG9iai5zdHlsZS5jdXJzb3IgPSAndy1yZXNpemUnO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChldi5vZmZzZXRYID4gb2JqLm9mZnNldFdpZHRoIC0gMTApIHtcbiAgICAgICAgICAgICAgICB0eXBlID0gJ3JpZ2h0JztcbiAgICAgICAgICAgICAgICBvYmouc3R5bGUuY3Vyc29yID0gJ2UtcmVzaXplJztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdHlwZSA9ICcnO1xuICAgICAgICAgICAgICAgIG9iai5zdHlsZS5jdXJzb3IgPSAnZGVmYXVsdCc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFmbGFnKSB7XG4gICAgICAgICAgICBvYmoub25tb3VzZW1vdmUgPSBvYmpNb3ZlXG4gICAgICAgIH1cbiAgICAgICAgb2JqLm9ubW91c2Vkb3duID0gZnVuY3Rpb24gKGV2KSB7XG4gICAgICAgICAgICBpZiAoIWZsYWcpIHtcbiAgICAgICAgICAgICAgICBvYmoub25tb3VzZW1vdmUgPSBudWxsXG4gICAgICAgICAgICAgICAgaWYgKGV2Lm9mZnNldFggPCAxMCkge1xuICAgICAgICAgICAgICAgICAgICB0eXBlID0gJ2xlZnQnO1xuICAgICAgICAgICAgICAgICAgICBvYmouc3R5bGUuY3Vyc29yID0gJ3ctcmVzaXplJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGV2Lm9mZnNldFggPiBvYmoub2Zmc2V0V2lkdGggLSAxMCkge1xuICAgICAgICAgICAgICAgICAgICB0eXBlID0gJ3JpZ2h0JztcbiAgICAgICAgICAgICAgICAgICAgb2JqLnN0eWxlLmN1cnNvciA9ICdlLXJlc2l6ZSc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGlzWDEgPSBldi5jbGllbnRYO1xuICAgICAgICAgICAgZGlzVyA9IG9iai5vZmZzZXRXaWR0aDtcbiAgICAgICAgICAgIGRpc0wgPSBvYmoub2Zmc2V0TGVmdDtcbiAgICAgICAgICAgIGRpc1ggPSBldi5jbGllbnRYIC0gb2JqLm9mZnNldExlZnQ7XG5cbiAgICAgICAgICAgIGRvY3VtZW50Lm9ubW91c2Vtb3ZlID0gZnVuY3Rpb24gbW92ZShldikge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCB3ID0gZXYuY2xpZW50WCAtIGRpc1gxO1xuICAgICAgICAgICAgICAgICAgICBpZiAob2JqLm9mZnNldFdpZHRoID4gd3JhcFdpZHRoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvYmouc3R5bGUud2lkdGggPSB3cmFwV2lkdGggKyAncHgnO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvYmoub2Zmc2V0V2lkdGggKyBvYmoub2Zmc2V0TGVmdCA+IHdyYXBXaWR0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgb2JqLnN0eWxlLndpZHRoID0gd3JhcFdpZHRoIC0gb2JqLm9mZnNldExlZnQgKyAncHgnO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvYmoub2Zmc2V0V2lkdGggPCBzdGVwSW50ZXJ2YWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9iai5zdHlsZS53aWR0aCA9IHN0ZXBJbnRlcnZhbCArICdweCc7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGUgPT0gJ3JpZ2h0Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgb2JqLnN0eWxlLndpZHRoID0gdyArIGRpc1cgKyAncHgnO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlID09ICdsZWZ0Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRpc0wgKyB3IDw9IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBvYmouc3R5bGUud2lkdGhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmouc3R5bGUubGVmdCA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgb2JqLnN0eWxlLndpZHRoID0gZGlzVyAtIHcgKyAncHgnO1xuICAgICAgICAgICAgICAgICAgICAgICAgb2JqLnN0eWxlLmxlZnQgPSBkaXNMICsgdyArICdweCc7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZXQgY3VycmVudFggPSBldi5jbGllbnRYIC0gZGlzWDtcblxuICAgICAgICAgICAgICAgIGlmICghZmxhZykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudFggPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50WCA9IDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRYID4gd3JhcFdpZHRoIC0gb2JqLm9mZnNldFdpZHRoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50WCA9IHdyYXBXaWR0aCAtIG9iai5vZmZzZXRXaWR0aDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50WCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRYID0gMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudFggPCB3cmFwV2lkdGggLSBvYmouZGF0YXNldC53aWR0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFggPSB3cmFwV2lkdGggLSBvYmouZGF0YXNldC53aWR0aDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBvYmouc3R5bGUubGVmdCA9IGN1cnJlbnRYICsgJ3B4JztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRvY3VtZW50Lm9ubW91c2V1cCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5vbm1vdXNlbW92ZSA9IG51bGxcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5vbm1vdXNldXAgPSBudWxsXG4gICAgICAgICAgICAgICAgdHlwZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICBvYmouc3R5bGUuY3Vyc29yID0gJ2RlZmF1bHQnO1xuICAgICAgICAgICAgICAgIHNlbGYuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICBtYXJrTGVmdDogc2VsZi5tYXJrLmN1cnJlbnQub2Zmc2V0TGVmdCArICdweCcsXG4gICAgICAgICAgICAgICAgICAgIHdyYXBJbWdMZWZ0OnNlbGYud3JhcEltZy5jdXJyZW50Lm9mZnNldExlZnQrJ3B4J1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgaWYgKCFmbGFnKSB7XG4gICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIG9iai5vbm1vdXNlbW92ZSA9IG9iak1vdmVcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9iai5vZmZzZXRXaWR0aCArIG9iai5vZmZzZXRMZWZ0ID4gd3JhcFdpZHRoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvYmouc3R5bGUud2lkdGggPSB3cmFwV2lkdGggLSBvYmoub2Zmc2V0TGVmdCArICdweCc7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHNlbGYuY29tcHV0ZVRpbWUob2JqKVxuXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB9O1xuICAgIH1cbiAgICBjaGFuZ2VTdGFydFRpbWUoZSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtzdGFydFRpbWU6IGUuY3VycmVudFRhcmdldC52YWx1ZX0pXG4gICAgfVxuICAgIHVwZGF0ZVJlbmRlcigpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0clRpbWUoKVxuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCB7aWQsIHBpY1VybCwgd2lkdGgsIHNldFRpbWVTaG93LGhlaWdodCxzdGVwfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGxldCB7c3RlcEludGVydmFsLCBzdWJzY3JpcHQsIG1hcmtMZWZ0LCB3cmFwSW1nTGVmdCwgc3RhcnRUaW1lfSA9IHRoaXMuc3RhdGU7XG4gICAgICAgIGlmICh0eXBlb2Ygd2lkdGggPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICB3aWR0aCA9IHdpZHRoICogc3RlcEludGVydmFsICsgJ3B4J1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gKHN0ZXAgJiYgXG4gICAgICAgICAgICA8ZGl2IGlkPXtpZH0+XG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3cmFwXCJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IHdpZHRoXG4gICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIndyYXBJbWdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IHdyYXBJbWdMZWZ0LFxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OmhlaWdodCsyMCsncHgnXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICByZWY9e3RoaXMud3JhcEltZ30+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHJlZj17dGhpcy5pbWd9IHNyYz17cGljVXJsfSBzdHlsZT17e2hlaWdodDpoZWlnaHQrJ3B4J319IGNsYXNzTmFtZT1cImltZ1wiIGFsdD1cIlwiLz4ge3N1YnNjcmlwdC5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aXRlbX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IHN0ZXBJbnRlcnZhbCAqIGl0ZW0gKyAncHgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzEycHgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3R0b206IDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnNXB4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnMXB4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyM5OTknXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiAnLTUwJSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbX1taW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxpXG4gICAgICAgICAgICAgICAgICAgICAgICByZWY9e3RoaXMubWFya31cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1hcmtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBzdGVwSW50ZXJ2YWwgKyAncHgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OmhlaWdodCsncHgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogbWFya0xlZnRcbiAgICAgICAgICAgICAgICAgICAgfX0+PC9pPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIHtzZXRUaW1lU2hvdyAmJiA8ZGl2IGNsYXNzTmFtZT0nYnV0dG9tJz5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c3RhcnRUaW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXNcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jaGFuZ2VTdGFydFRpbWVcbiAgICAgICAgICAgICAgICAgICAgICAgIC5iaW5kKHRoaXMpfS8+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXNcbiAgICAgICAgICAgICAgICAgICAgICAgIC51cGRhdGVSZW5kZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5iaW5kKHRoaXMpfT5zdGFydFRpbWU8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj59XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuTXlTbGlkZXIuZGVmYXVsdFByb3BzID0ge1xuICAgIHdpZHRoOiAxMCxcbiAgICBoZWlnaHQ6ODAsXG4gICAgc2V0VGltZVNob3c6IHRydWUsXG4gICAgdHlwZVNpdGU6IGZhbHNlXG59O1xuXG5NeVNsaWRlci5wcm9wVHlwZXMgPSB7XG4gICAgLyoqXG4gICAgICogVGhlIElEIHVzZWQgdG8gaWRlbnRpZnkgdGhpcyBjb21wb25lbnQgaW4gRGFzaCBjYWxsYmFja3MuXG4gICAgICovXG4gICAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgLyoqXG4gICAgICogVGhlIHBpY1VybCBkaXNwbGF5ZWQgaW4gdGhlIHN0cmluZy5cbiAgICAgKiDmgLvpooTop4jlm77ot6/lvoRcbiAgICAgKi9cbiAgICBwaWNVcmw6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgLyoqXG4gICAgICog6aKE6KeI5Zu+5oC75pe26Ze077yINjEuMTfvvIlcbiAgICAgKi9cbiAgICBzdGVwOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIC8qKlxuICAgICAqIFRoZSB2YWx1ZSBkaXNwbGF5ZWQgaW4gdGhlIGlucHV0LlxuICAgICAqIOi/lOWbnuW8gOWni+aXtumXtOWSjOe7k+adn+aXtumXtCB7dmFsdWU6e2ltZ1N0YXJ0VGltZSxpbWdFbmRUaW1lfX1cbiAgICAgKi9cbiAgICB2YWx1ZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLm9iamVjdCwgUHJvcFR5cGVzLmFycmF5XSksXG5cbiAgICAvKipcbiAgICAgKiBEYXNoLWFzc2lnbmVkIGNhbGxiYWNrIHRoYXQgc2hvdWxkIGJlIGNhbGxlZCB0byByZXBvcnQgcHJvcGVydHkgY2hhbmdlc1xuICAgICAqIHRvIERhc2gsIHRvIG1ha2UgdGhlbSBhdmFpbGFibGUgZm9yIGNhbGxiYWNrcy5cbiAgICAgKi9cbiAgICAvKipcbiAgICAgKiDov5Tlm57ojIPlm7TmlbDmja7nmoTojIPlm7Qo5Zu+54mH5Y+v6KeG5Yy65pe26Ze05q61KVxuICAgICAqL1xuICAgIHJhbmdlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMub2JqZWN0XSksXG4gICAgc2V0UHJvcHM6IFByb3BUeXBlcy5mdW5jLFxuICAgIC8qKlxuICAgICAqIOWPr+inhuWMuuWuveW6pum7mOiupDEw5YiG6ZKfXG4gICAgICovXG4gICAgd2lkdGg6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKSxcbiAgICAvKipcbiAgICAgKiDpgInmi6nlvIDlp4vml7bpl7TmoYbmmK/lkKbmmL7npLpcbiAgICAgKi9cbiAgICBzZXRUaW1lU2hvdzogUHJvcFR5cGVzLmJvb2wsXG4gICAgLyoqXG4gICAgICog6K6h566X5qih5byP5pe26Ze05qih5byP77yMdHJ1ZeS4uuW6lemDqOWbvueJh+S4uuagueaNru+8jGZhbHNl5Li6bWFya+Wdl+S4uuS+neaNrlxuICAgICAqL1xuICAgIHR5cGVTaXRlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAvKipcbiAgICAgKiDlm77niYfpq5jluqZcbiAgICAgKi9cbiAgICAgaGVpZ2h0OlByb3BUeXBlcy5udW1iZXJcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9