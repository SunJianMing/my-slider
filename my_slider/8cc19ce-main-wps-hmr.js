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
      markLeft: 0,
      startDataSite: 0,
      buttonType: ''
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
          console.log(obj, 'ssss');
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
          startTime: (+startTime1).toFixed(2),
          startDataSite: Math.floor(300000 * startTime1)
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
    value: function setStatrTime(type) {
      var _this2 = this;

      var _this$state = this.state,
          stepInterval = _this$state.stepInterval,
          startTime = _this$state.startTime,
          startDataSite = _this$state.startDataSite,
          buttonType = _this$state.buttonType;
      var wrapImg = this.wrapImg.current;
      var mark = this.mark.current;

      if (buttonType == 'startPoint') {
        startTime = startDataSite / 300000; // this.setState({startTime})
      } else if (buttonType == 'startTime') {
        startDataSite = 300000 * startTime; // this.setState({startDataSite})
      }

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
      var disX, type, disW, disX1, disL, keyCode;
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

      document.onkeydown = function (e) {
        // console.log(e.keyCode,e)
        if (e.keyCode == 16) {
          keyCode = true;
        }
      };

      document.onkeyup = function (e) {
        keyCode = false;
        self.computeTime(obj);
      };

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

          if (!keyCode) {
            self.computeTime(obj);
          }
        };

        ev.preventDefault();
        ev.stopPropagation();
      };
    }
  }, {
    key: "changeStartTime",
    value: function changeStartTime(e) {
      this.setState({
        startTime: e.currentTarget.value,
        buttonType: 'startTime'
      });
    }
  }, {
    key: "changeStartDataSite",
    value: function changeStartDataSite(e) {
      this.setState({
        startDataSite: e.currentTarget.value,
        buttonType: 'startPoint'
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
          startTime = _this$state2.startTime,
          startDataSite = _this$state2.startDataSite;

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
        style: {
          marginRight: '20px'
        },
        onClick: this.updateRender.bind(this)
      }, "startTime"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "text",
        value: startDataSite,
        onChange: this.changeStartDataSite.bind(this)
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        onClick: this.updateRender.bind(this)
      }, "startPoint")));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teV9zbGlkZXIvLi9zcmMvbGliL2NvbXBvbmVudHMvTXlTbGlkZXIucmVhY3QuanMiXSwibmFtZXMiOlsiTXlTbGlkZXIiLCJwcm9wcyIsImltZyIsIlJlYWN0IiwiY3JlYXRlUmVmIiwibWFyayIsIndyYXBJbWciLCJzdGF0ZSIsInN0ZXBJbnRlcnZhbCIsInN1YnNjcmlwdCIsImZsYWciLCJzdGFydFRpbWUiLCJ3cmFwSW1nTGVmdCIsIm1hcmtMZWZ0Iiwic3RhcnREYXRhU2l0ZSIsImJ1dHRvblR5cGUiLCJzZXRTdWJzY3JpcHQiLCJvYmoiLCJzZXRQcm9wcyIsInR5cGVTaXRlIiwibWFya1RpbWUiLCJjdXJyZW50Iiwib2Zmc2V0TGVmdCIsImVuZFRpbWUiLCJvZmZzZXRXaWR0aCIsImltZ1N0YXJ0VGltZSIsIk1hdGgiLCJhYnMiLCJpbWdFbmRUaW1lIiwicGFyZW50Tm9kZSIsInJhbmdlIiwidmFsdWUiLCJjb25zb2xlIiwibG9nIiwic2V0U3RhdGUiLCJ0b0ZpeGVkIiwid3JhcFRpbWUiLCJtYXJrU3RhcnQiLCJzdGFydFRpbWUxIiwiZW5kVGltZTEiLCJmbG9vciIsInN0ZXAiLCJzZWxmIiwiYWRkRXZlbnRMaXN0ZW5lciIsImkiLCJwdXNoIiwiZGF0YXNldCIsIndpZHRoIiwic2lsZGVyRHJhZyIsImNvbXB1dGVUaW1lIiwidHlwZSIsIm1vdmVXaWR0aCIsIm1hcmtNb3ZlV2lkdGgiLCJ3cmFwUG9zaSIsIlJlbWFpbmluZ1RpbWUiLCJkaXNYIiwiZGlzVyIsImRpc1gxIiwiZGlzTCIsImtleUNvZGUiLCJ3cmFwV2lkdGgiLCJvYmpNb3ZlIiwiZXYiLCJvZmZzZXRYIiwic3R5bGUiLCJjdXJzb3IiLCJkb2N1bWVudCIsIm9ua2V5ZG93biIsImUiLCJvbmtleXVwIiwib25tb3VzZW1vdmUiLCJvbm1vdXNlZG93biIsImNsaWVudFgiLCJtb3ZlIiwidyIsImxlZnQiLCJjdXJyZW50WCIsIm9ubW91c2V1cCIsInVuZGVmaW5lZCIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwiY3VycmVudFRhcmdldCIsInNldFN0YXRyVGltZSIsImlkIiwicGljVXJsIiwic2V0VGltZVNob3ciLCJoZWlnaHQiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJwb3NpdGlvbiIsImZvbnRTaXplIiwiYm90dG9tIiwiZGlzcGxheSIsImJhY2tncm91bmRDb2xvciIsIm1hcmdpbkxlZnQiLCJjaGFuZ2VTdGFydFRpbWUiLCJiaW5kIiwibWFyZ2luUmlnaHQiLCJ1cGRhdGVSZW5kZXIiLCJjaGFuZ2VTdGFydERhdGFTaXRlIiwicHJldlByb3BzIiwiQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwibnVtYmVyIiwib25lT2ZUeXBlIiwib2JqZWN0IiwiYXJyYXkiLCJmdW5jIiwiYm9vbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7OztJQVFxQkEsUTs7Ozs7QUFDakIsb0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDZiw4QkFBTUEsS0FBTjtBQUNBLFVBQUtDLEdBQUwsZ0JBQVdDLDRDQUFLLENBQUNDLFNBQU4sRUFBWDtBQUNBLFVBQUtDLElBQUwsZ0JBQVlGLDRDQUFLLENBQUNDLFNBQU4sRUFBWjtBQUNBLFVBQUtFLE9BQUwsZ0JBQWVILDRDQUFLLENBQUNDLFNBQU4sRUFBZjtBQUNBLFVBQUtHLEtBQUwsR0FBYTtBQUNUQyxrQkFBWSxFQUFFLENBREw7QUFFVEMsZUFBUyxFQUFFLEVBRkY7QUFHVEMsVUFBSSxFQUFFLElBSEc7QUFJVEMsZUFBUyxFQUFFLENBSkY7QUFLVEMsaUJBQVcsRUFBRSxDQUxKO0FBTVRDLGNBQVEsRUFBRSxDQU5EO0FBT1RDLG1CQUFhLEVBQUMsQ0FQTDtBQVFUQyxnQkFBVSxFQUFDO0FBUkYsS0FBYjtBQUxlO0FBZWxCOzs7O3dDQUNtQjtBQUNo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RUFBRXVGLGlEQUFTLENBQUNNLElBNUJIOztBQTZCakI7OztBQUdBaEUsT0FBSyxFQUFFMEQsaURBQVMsQ0FBQ0csU0FBVixDQUFvQixDQUFDSCxpREFBUyxDQUFDQyxNQUFYLEVBQW1CRCxpREFBUyxDQUFDRSxNQUE3QixDQUFwQixDQWhDVTs7QUFpQ2pCOzs7QUFHQXRCLGFBQVcsRUFBRW9CLGlEQUFTLENBQUNPLElBcENOOztBQXFDakI7OztBQUdBN0YsVUFBUSxFQUFFc0YsaURBQVMsQ0FBQ08sSUF4Q0g7O0FBeUNqQjs7O0FBR0ExQixRQUFNLEVBQUVtQixpREFBUyxDQUFDRTtBQTVDRCxDQUFyQixDIiwiZmlsZSI6IjhjYzE5Y2UtbWFpbi13cHMtaG1yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0ICcuLi8uLi9zdHlsZS9pbmRleC5jc3MnO1xuXG4vKipcbiAqIEV4YW1wbGVDb21wb25lbnQgaXMgYW4gZXhhbXBsZSBjb21wb25lbnQuXG4gKiBJdCB0YWtlcyBhIHByb3BlcnR5LCBgbGFiZWxgLCBhbmRcbiAqIGRpc3BsYXlzIGl0LlxuICogSXQgcmVuZGVycyBhbiBpbnB1dCB3aXRoIHRoZSBwcm9wZXJ0eSBgdmFsdWVgXG4gKiB3aGljaCBpcyBlZGl0YWJsZSBieSB0aGUgdXNlci5cbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNeVNsaWRlciBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLmltZyA9IFJlYWN0LmNyZWF0ZVJlZigpO1xuICAgICAgICB0aGlzLm1hcmsgPSBSZWFjdC5jcmVhdGVSZWYoKTtcbiAgICAgICAgdGhpcy53cmFwSW1nID0gUmVhY3QuY3JlYXRlUmVmKCk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBzdGVwSW50ZXJ2YWw6IDAsXG4gICAgICAgICAgICBzdWJzY3JpcHQ6IFtdLFxuICAgICAgICAgICAgZmxhZzogdHJ1ZSxcbiAgICAgICAgICAgIHN0YXJ0VGltZTogMCxcbiAgICAgICAgICAgIHdyYXBJbWdMZWZ0OiAwLFxuICAgICAgICAgICAgbWFya0xlZnQ6IDAsXG4gICAgICAgICAgICBzdGFydERhdGFTaXRlOjAsXG4gICAgICAgICAgICBidXR0b25UeXBlOicnXG4gICAgICAgIH07XG4gICAgfVxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLnNldFN1YnNjcmlwdCgpO1xuICAgIH1cblxuICAgIC8vIOiuoeeul+W8gOWni+aXtumXtOWSjOe7k+adn+aXtumXtFxuICAgIGNvbXB1dGVUaW1lKG9iaikge1xuICAgICAgICBsZXQge3NldFByb3BzLCB0eXBlU2l0ZX0gPSB0aGlzLnByb3BzO1xuICAgICAgICBsZXQge3N0ZXBJbnRlcnZhbH0gPSB0aGlzLnN0YXRlXG4gICAgICAgIGxldCBtYXJrVGltZSA9IHRoaXMubWFyay5jdXJyZW50Lm9mZnNldExlZnQgLyBzdGVwSW50ZXJ2YWw7XG5cbiAgICAgICAgLy/mu5HlnZflvIDlp4vml7bpl7RcbiAgICAgICAgbGV0IHN0YXJ0VGltZSA9ICttYXJrVGltZVxuICAgICAgICAvL+a7keWdl+e7k+adn+aXtumXtFxuICAgICAgICBsZXQgZW5kVGltZSA9ICsodGhpcy5tYXJrLmN1cnJlbnQub2Zmc2V0V2lkdGggLyBzdGVwSW50ZXJ2YWwgKyAobWFya1RpbWUpKVxuICAgICAgICAvLyDlm77niYfotbflp4vml7bpl7RcbiAgICAgICAgbGV0IGltZ1N0YXJ0VGltZSA9IE1hdGguYWJzKHRoaXMud3JhcEltZy5jdXJyZW50Lm9mZnNldExlZnQpIC8gc3RlcEludGVydmFsXG4gICAgICAgIC8v5Zu+54mH57uT5p2f5pe26Ze0XG4gICAgICAgIGxldCBpbWdFbmRUaW1lID0gdGhpcy53cmFwSW1nLmN1cnJlbnQucGFyZW50Tm9kZS5vZmZzZXRXaWR0aCAvIHN0ZXBJbnRlcnZhbCArIGltZ1N0YXJ0VGltZVxuICAgICAgICBpZiAodHlwZVNpdGUpIHtcbiAgICAgICAgICAgIGlmICghb2JqKSB7XG4gICAgICAgICAgICAgICAgLy/liJ3lp4vljJbmmK/lm77niYflkozmu5HlnZfmiYDlpITkvY3nva5cbiAgICAgICAgICAgICAgICBzZXRQcm9wcyh7XG4gICAgICAgICAgICAgICAgICAgIHJhbmdlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbWdTdGFydFRpbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWdFbmRUaW1lXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIHNldFByb3BzKHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0VGltZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuZFRpbWVcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKG9iaiA9PT0gdGhpcy53cmFwSW1nLmN1cnJlbnQpIHtcbiAgICAgICAgICAgICAgICAvLyDlm77niYfmu5HliqjlkI7nmoTkvY3nva5cbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhvYmosJ3Nzc3MnKVxuICAgICAgICAgICAgICAgIHNldFByb3BzKHtcbiAgICAgICAgICAgICAgICAgICAgcmFuZ2U6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGltZ1N0YXJ0VGltZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGltZ0VuZFRpbWVcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLy/lm77niYfnp7vliqjlkI7vvIzmu5HlnZfmiYDlnKjnmoTkvY3nva5cbiAgICAgICAgICAgICAgICBzZXRQcm9wcyh7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFydFRpbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBlbmRUaW1lXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy/mu5HlnZfnp7vliqjlkI7vvIzmiYDlnKjkvY3nva5cbiAgICAgICAgICAgICAgICBzZXRQcm9wcyh7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFydFRpbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBlbmRUaW1lXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIHN0YXJ0VGltZTogKGltZ1N0YXJ0VGltZSArIHN0YXJ0VGltZSkudG9GaXhlZCgyKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCB3cmFwVGltZSA9IE1hdGguYWJzKHRoaXMud3JhcEltZy5jdXJyZW50Lm9mZnNldExlZnQpXG4gICAgICAgICAgICBsZXQgbWFya1N0YXJ0ID0gdGhpcy5tYXJrLmN1cnJlbnQub2Zmc2V0TGVmdFxuICAgICAgICAgICAgbGV0IHN0YXJ0VGltZTEgPSAod3JhcFRpbWUgKyBtYXJrU3RhcnQpIC8gc3RlcEludGVydmFsXG4gICAgICAgICAgICBsZXQgZW5kVGltZTEgPSAodGhpcy5tYXJrLmN1cnJlbnQub2Zmc2V0V2lkdGggKyB3cmFwVGltZSArIG1hcmtTdGFydCkgLyBzdGVwSW50ZXJ2YWxcbiAgICAgICAgICAgXG4gICAgICAgICAgICBzZXRQcm9wcyh7XG4gICAgICAgICAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICAgICAgICAgICAgc3RhcnRUaW1lOiBzdGFydFRpbWUxLFxuICAgICAgICAgICAgICAgICAgICBlbmRUaW1lOiBlbmRUaW1lMVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBzdGFydFRpbWU6ICgrIHN0YXJ0VGltZTEpLnRvRml4ZWQoMiksXG4gICAgICAgICAgICAgICAgc3RhcnREYXRhU2l0ZTpNYXRoLmZsb29yKDMwMDAwMCpzdGFydFRpbWUxKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgfVxuICAgIC8v6K6+572u5LiL5qCH5L2N572uXG4gICAgc2V0U3Vic2NyaXB0KCkge1xuICAgICAgICBsZXQge3N0ZXB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgbGV0IHtmbGFnfSA9IHRoaXMuc3RhdGVcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgICBsZXQgc3Vic2NyaXB0ID0gW11cblxuICAgICAgICB0aGlzXG4gICAgICAgICAgICAuaW1nXG4gICAgICAgICAgICAuY3VycmVudFxuICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdGVwOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgc3Vic2NyaXB0LnB1c2goaSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHNlbGYuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICBzdGVwSW50ZXJ2YWw6IHRoaXMub2Zmc2V0V2lkdGggLyBzdGVwLFxuICAgICAgICAgICAgICAgICAgICBzdWJzY3JpcHRcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBzZWxmLndyYXBJbWcuY3VycmVudC5kYXRhc2V0LndpZHRoID0gdGhpcy5vZmZzZXRXaWR0aDtcbiAgICAgICAgICAgICAgICBzZWxmLnNpbGRlckRyYWcoc2VsZi5tYXJrLmN1cnJlbnQpO1xuICAgICAgICAgICAgICAgIHNlbGYuc2lsZGVyRHJhZyhzZWxmLndyYXBJbWcuY3VycmVudCwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgaWYgKGZsYWcpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5jb21wdXRlVGltZSgpO1xuICAgICAgICAgICAgICAgICAgICBzZWxmLnNldFN0YXRlKHtmbGFnOiBmYWxzZX0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICB9XG4gICAgLy/orr7nva7liJ3lp4vljJbml7bpl7RcbiAgICBzZXRTdGF0clRpbWUodHlwZSkge1xuXG4gICAgICAgIGxldCB7c3RlcEludGVydmFsLCBzdGFydFRpbWUsc3RhcnREYXRhU2l0ZSxidXR0b25UeXBlfSA9IHRoaXMuc3RhdGVcbiAgICAgICAgXG4gICAgICAgIGxldCB7Y3VycmVudDogd3JhcEltZ30gPSB0aGlzLndyYXBJbWdcbiAgICAgICAgbGV0IHtjdXJyZW50OiBtYXJrfSA9IHRoaXMubWFya1xuICAgICAgICBpZihidXR0b25UeXBlID09ICdzdGFydFBvaW50Jyl7XG4gICAgICAgICAgIFxuICAgICAgICAgICAgc3RhcnRUaW1lID0gc3RhcnREYXRhU2l0ZS8zMDAwMDBcbiAgICAgICAgICAgIC8vIHRoaXMuc2V0U3RhdGUoe3N0YXJ0VGltZX0pXG4gICAgICAgIH1lbHNlIGlmKGJ1dHRvblR5cGUgPT0gJ3N0YXJ0VGltZScpe1xuICAgICAgICAgICBcbiAgICAgICAgICAgIHN0YXJ0RGF0YVNpdGUgPSAzMDAwMDAqc3RhcnRUaW1lXG4gICAgICAgICAgICAvLyB0aGlzLnNldFN0YXRlKHtzdGFydERhdGFTaXRlfSlcbiAgICAgICAgfVxuICAgICAgICBsZXQgbW92ZVdpZHRoID0gd3JhcEltZy5kYXRhc2V0LndpZHRoIC0gd3JhcEltZy5vZmZzZXRXaWR0aFxuICAgICAgICBsZXQgbWFya01vdmVXaWR0aCA9IHdyYXBJbWcub2Zmc2V0V2lkdGggLSBtYXJrLm9mZnNldFdpZHRoXG4gICAgICAgIGxldCB3cmFwUG9zaSA9IHN0YXJ0VGltZSAqIHN0ZXBJbnRlcnZhbFxuICAgICAgIFxuICAgICAgICBpZiAod3JhcFBvc2kgPD0gbW92ZVdpZHRoKSB7XG4gICAgICAgICAgICAvLyB3cmFwSW1nLnN0eWxlLmxlZnQgPSBgLSR7d3JhcFBvc2l9cHhgXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICB3cmFwSW1nTGVmdDogLXdyYXBQb3NpICsgJ3B4JyxcbiAgICAgICAgICAgICAgICBtYXJrTGVmdDogJzBweCdcbiAgICAgICAgICAgIH0sICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbXB1dGVUaW1lKClcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgfSBlbHNlIGlmICh3cmFwUG9zaSA+IG1vdmVXaWR0aCkge1xuICAgICAgICAgICAgbGV0IFJlbWFpbmluZ1RpbWUgPSB3cmFwUG9zaSAtIG1vdmVXaWR0aFxuICAgICAgICAgICAgLy8gd3JhcEltZy5zdHlsZS5sZWZ0ID0gYC0ke21vdmVXaWR0aH1weGBcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIHdyYXBJbWdMZWZ0OiAtbW92ZVdpZHRoICsgJ3B4JyxcbiAgICAgICAgICAgICAgICBtYXJrTGVmdDogJzBweCdcbiAgICAgICAgICAgIH0sICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbXB1dGVUaW1lKClcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIGlmIChSZW1haW5pbmdUaW1lIDwgbWFya01vdmVXaWR0aCkge1xuICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIG1hcmtMZWZ0OiBSZW1haW5pbmdUaW1lICsgJ3B4J1xuICAgICAgICAgICAgICAgIH0sICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21wdXRlVGltZSgpXG4gICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgIC8vIG1hcmsuc3R5bGUubGVmdCA9IGAke1JlbWFpbmluZ1RpbWV9cHhgXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICBtYXJrTGVmdDogbWFya01vdmVXaWR0aCArICdweCdcbiAgICAgICAgICAgICAgICB9LCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tcHV0ZVRpbWUoKVxuICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfVxuICAgIC8v5ruR5Z2XXG4gICAgc2lsZGVyRHJhZyhvYmosIGZsYWcpIHtcbiAgICAgICAgbGV0IGRpc1gsXG4gICAgICAgICAgICB0eXBlLFxuICAgICAgICAgICAgZGlzVyxcbiAgICAgICAgICAgIGRpc1gxLFxuICAgICAgICAgICAgZGlzTCxcbiAgICAgICAgICAgIGtleUNvZGU7XG4gICAgICAgIGxldCB3cmFwV2lkdGggPSB0aGlzLndyYXBJbWcuY3VycmVudC5vZmZzZXRXaWR0aDtcbiAgICAgICAgbGV0IHtzdGVwSW50ZXJ2YWx9ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzXG5cbiAgICAgICAgZnVuY3Rpb24gb2JqTW92ZShldikge1xuXG4gICAgICAgICAgICBpZiAoZXYub2Zmc2V0WCA8IDEwKSB7XG4gICAgICAgICAgICAgICAgdHlwZSA9ICdsZWZ0JztcbiAgICAgICAgICAgICAgICBvYmouc3R5bGUuY3Vyc29yID0gJ3ctcmVzaXplJztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZXYub2Zmc2V0WCA+IG9iai5vZmZzZXRXaWR0aCAtIDEwKSB7XG4gICAgICAgICAgICAgICAgdHlwZSA9ICdyaWdodCc7XG4gICAgICAgICAgICAgICAgb2JqLnN0eWxlLmN1cnNvciA9ICdlLXJlc2l6ZSc7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHR5cGUgPSAnJztcbiAgICAgICAgICAgICAgICBvYmouc3R5bGUuY3Vyc29yID0gJ2RlZmF1bHQnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGRvY3VtZW50Lm9ua2V5ZG93biA9IGZ1bmN0aW9uKGUpe1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZS5rZXlDb2RlLGUpXG4gICAgICAgICAgICBpZihlLmtleUNvZGUgPT0gMTYpe1xuICAgICAgICAgICAgICAgIGtleUNvZGUgPSB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZG9jdW1lbnQub25rZXl1cCA9IGZ1bmN0aW9uKGUpe1xuICAgICAgICAgICAgICAgIGtleUNvZGUgPSBmYWxzZVxuICAgICAgICAgICAgICAgIHNlbGYuY29tcHV0ZVRpbWUob2JqKVxuICAgICAgICB9XG4gICAgICAgIGlmICghZmxhZykge1xuICAgICAgICAgICAgb2JqLm9ubW91c2Vtb3ZlID0gb2JqTW92ZVxuICAgICAgICB9XG4gICAgICAgIG9iai5vbm1vdXNlZG93biA9IGZ1bmN0aW9uIChldikge1xuICAgICAgICAgICBcbiAgICAgICAgICAgIGlmICghZmxhZykge1xuICAgICAgICAgICAgICAgIG9iai5vbm1vdXNlbW92ZSA9IG51bGxcbiAgICAgICAgICAgICAgICBpZiAoZXYub2Zmc2V0WCA8IDEwKSB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGUgPSAnbGVmdCc7XG4gICAgICAgICAgICAgICAgICAgIG9iai5zdHlsZS5jdXJzb3IgPSAndy1yZXNpemUnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZXYub2Zmc2V0WCA+IG9iai5vZmZzZXRXaWR0aCAtIDEwKSB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGUgPSAncmlnaHQnO1xuICAgICAgICAgICAgICAgICAgICBvYmouc3R5bGUuY3Vyc29yID0gJ2UtcmVzaXplJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkaXNYMSA9IGV2LmNsaWVudFg7XG4gICAgICAgICAgICBkaXNXID0gb2JqLm9mZnNldFdpZHRoO1xuICAgICAgICAgICAgZGlzTCA9IG9iai5vZmZzZXRMZWZ0O1xuICAgICAgICAgICAgZGlzWCA9IGV2LmNsaWVudFggLSBvYmoub2Zmc2V0TGVmdDtcblxuICAgICAgICAgICAgZG9jdW1lbnQub25tb3VzZW1vdmUgPSBmdW5jdGlvbiBtb3ZlKGV2KSB7XG4gICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiAodHlwZSkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgdyA9IGV2LmNsaWVudFggLSBkaXNYMTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9iai5vZmZzZXRXaWR0aCA+IHdyYXBXaWR0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgb2JqLnN0eWxlLndpZHRoID0gd3JhcFdpZHRoICsgJ3B4JztcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob2JqLm9mZnNldFdpZHRoICsgb2JqLm9mZnNldExlZnQgPiB3cmFwV2lkdGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9iai5zdHlsZS53aWR0aCA9IHdyYXBXaWR0aCAtIG9iai5vZmZzZXRMZWZ0ICsgJ3B4JztcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob2JqLm9mZnNldFdpZHRoIDwgc3RlcEludGVydmFsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvYmouc3R5bGUud2lkdGggPSBzdGVwSW50ZXJ2YWwgKyAncHgnO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlID09ICdyaWdodCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9iai5zdHlsZS53aWR0aCA9IHcgKyBkaXNXICsgJ3B4JztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZSA9PSAnbGVmdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkaXNMICsgdyA8PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gb2JqLnN0eWxlLndpZHRoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqLnN0eWxlLmxlZnQgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9iai5zdHlsZS53aWR0aCA9IGRpc1cgLSB3ICsgJ3B4JztcbiAgICAgICAgICAgICAgICAgICAgICAgIG9iai5zdHlsZS5sZWZ0ID0gZGlzTCArIHcgKyAncHgnO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRYID0gZXYuY2xpZW50WCAtIGRpc1g7XG5cbiAgICAgICAgICAgICAgICBpZiAoIWZsYWcpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRYIDwgMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFggPSAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50WCA+IHdyYXBXaWR0aCAtIG9iai5vZmZzZXRXaWR0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFggPSB3cmFwV2lkdGggLSBvYmoub2Zmc2V0V2lkdGg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudFggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50WCA9IDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRYIDwgd3JhcFdpZHRoIC0gb2JqLmRhdGFzZXQud2lkdGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRYID0gd3JhcFdpZHRoIC0gb2JqLmRhdGFzZXQud2lkdGg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgb2JqLnN0eWxlLmxlZnQgPSBjdXJyZW50WCArICdweCc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkb2N1bWVudC5vbm1vdXNldXAgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQub25tb3VzZW1vdmUgPSBudWxsXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQub25tb3VzZXVwID0gbnVsbFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHR5cGUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgb2JqLnN0eWxlLmN1cnNvciA9ICdkZWZhdWx0JztcbiAgICAgICAgICAgICAgICBzZWxmLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgbWFya0xlZnQ6IHNlbGYubWFyay5jdXJyZW50Lm9mZnNldExlZnQgKyAncHgnLFxuICAgICAgICAgICAgICAgICAgICB3cmFwSW1nTGVmdDogc2VsZi53cmFwSW1nLmN1cnJlbnQub2Zmc2V0TGVmdCArICdweCdcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmICghZmxhZykge1xuXG4gICAgICAgICAgICAgICAgICAgIG9iai5vbm1vdXNlbW92ZSA9IG9iak1vdmVcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9iai5vZmZzZXRXaWR0aCArIG9iai5vZmZzZXRMZWZ0ID4gd3JhcFdpZHRoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvYmouc3R5bGUud2lkdGggPSB3cmFwV2lkdGggLSBvYmoub2Zmc2V0TGVmdCArICdweCc7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZigha2V5Q29kZSl7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuY29tcHV0ZVRpbWUob2JqKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgY2hhbmdlU3RhcnRUaW1lKGUpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c3RhcnRUaW1lOiBlLmN1cnJlbnRUYXJnZXQudmFsdWUsYnV0dG9uVHlwZTonc3RhcnRUaW1lJ30pXG4gICAgfVxuICAgIGNoYW5nZVN0YXJ0RGF0YVNpdGUoZSl7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3N0YXJ0RGF0YVNpdGU6IGUuY3VycmVudFRhcmdldC52YWx1ZSxidXR0b25UeXBlOidzdGFydFBvaW50J30pXG5cbiAgICB9XG4gICAgdXBkYXRlUmVuZGVyKCkge1xuICAgICAgICBcbiAgICAgICAgdGhpcy5zZXRTdGF0clRpbWUoKVxuICAgIH1cbiAgICBcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCB7XG4gICAgICAgICAgICBpZCxcbiAgICAgICAgICAgIHBpY1VybCxcbiAgICAgICAgICAgIHdpZHRoLFxuICAgICAgICAgICAgc2V0VGltZVNob3csXG4gICAgICAgICAgICBoZWlnaHQsXG4gICAgICAgICAgICBzdGVwXG4gICAgICAgIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBsZXQge3N0ZXBJbnRlcnZhbCwgc3Vic2NyaXB0LCBtYXJrTGVmdCwgd3JhcEltZ0xlZnQsIHN0YXJ0VGltZSxzdGFydERhdGFTaXRlfSA9IHRoaXMuc3RhdGU7XG4gICAgICAgIGlmICh0eXBlb2Ygd2lkdGggPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICB3aWR0aCA9IHdpZHRoICogc3RlcEludGVydmFsICsgJ3B4J1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGlkPXtpZH0+XG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3cmFwXCJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IHdpZHRoXG4gICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIndyYXBJbWdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IHdyYXBJbWdMZWZ0LFxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBoZWlnaHQgKyAyMCArICdweCdcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17dGhpcy53cmFwSW1nfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9e3RoaXMuaW1nfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17cGljVXJsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBoZWlnaHQgKyAncHgnXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImltZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCIvPiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c3Vic2NyaXB0Lm1hcCgoaXRlbSxpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IHN0ZXBJbnRlcnZhbCAqIGl0ZW0gKyAncHgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzEycHgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3R0b206IDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnNXB4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnMXB4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyM5OTknXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiAnLTUwJSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbX1taW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxpXG4gICAgICAgICAgICAgICAgICAgICAgICByZWY9e3RoaXMubWFya31cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1hcmtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBzdGVwSW50ZXJ2YWwgKyAncHgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBoZWlnaHQgKyAncHgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogbWFya0xlZnRcbiAgICAgICAgICAgICAgICAgICAgfX0+PC9pPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIHtzZXRUaW1lU2hvdyAmJiA8ZGl2IGNsYXNzTmFtZT0nYnV0dG9tJz5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c3RhcnRUaW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXNcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jaGFuZ2VTdGFydFRpbWVcbiAgICAgICAgICAgICAgICAgICAgICAgIC5iaW5kKHRoaXMpfS8+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7bWFyZ2luUmlnaHQ6JzIwcHgnfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMudXBkYXRlUmVuZGVyLmJpbmQodGhpcyl9PnN0YXJ0VGltZTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c3RhcnREYXRhU2l0ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5jaGFuZ2VTdGFydERhdGFTaXRlLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLnVwZGF0ZVJlbmRlci5iaW5kKHRoaXMpfT5zdGFydFBvaW50PC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+fVxuICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxuICAgIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpe1xuICAgICAgICBpZihwcmV2UHJvcHMuc3RlcCAhPSB0aGlzLnByb3BzLnN0ZXApe1xuICAgICAgICAgICAgdGhpcy5zZXRTdWJzY3JpcHQoKVxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgd3JhcEltZ0xlZnQ6MCxcbiAgICAgICAgICAgICAgICBtYXJrTGVmdDowXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIFxuICAgIH1cbn1cblxuTXlTbGlkZXIuZGVmYXVsdFByb3BzID0ge1xuICAgIHdpZHRoOiAxMCxcbiAgICBoZWlnaHQ6IDgwLFxuICAgIHNldFRpbWVTaG93OiB0cnVlLFxuICAgIHR5cGVTaXRlOiBmYWxzZVxufTtcblxuTXlTbGlkZXIucHJvcFR5cGVzID0ge1xuICAgIC8qKlxuICAgICAqIFRoZSBJRCB1c2VkIHRvIGlkZW50aWZ5IHRoaXMgY29tcG9uZW50IGluIERhc2ggY2FsbGJhY2tzLlxuICAgICAqL1xuICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIC8qKlxuICAgICAqIFRoZSBwaWNVcmwgZGlzcGxheWVkIGluIHRoZSBzdHJpbmcuXG4gICAgICog5oC76aKE6KeI5Zu+6Lev5b6EXG4gICAgICovXG4gICAgcGljVXJsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIC8qKlxuICAgICAqIOmihOiniOWbvuaAu+aXtumXtO+8iDYxLjE377yJXG4gICAgICovXG4gICAgc3RlcDogUHJvcFR5cGVzLm51bWJlcixcbiAgICAvKipcbiAgICAgKiBUaGUgdmFsdWUgZGlzcGxheWVkIGluIHRoZSBpbnB1dC5cbiAgICAgKiDov5Tlm57lvIDlp4vml7bpl7Tlkoznu5PmnZ/ml7bpl7Qge3ZhbHVlOntpbWdTdGFydFRpbWUsaW1nRW5kVGltZX19XG4gICAgICovXG4gICAgdmFsdWU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5vYmplY3QsIFByb3BUeXBlcy5hcnJheV0pLFxuXG4gICAgLyoqXG4gICAgICogRGFzaC1hc3NpZ25lZCBjYWxsYmFjayB0aGF0IHNob3VsZCBiZSBjYWxsZWQgdG8gcmVwb3J0IHByb3BlcnR5IGNoYW5nZXNcbiAgICAgKiB0byBEYXNoLCB0byBtYWtlIHRoZW0gYXZhaWxhYmxlIGZvciBjYWxsYmFja3MuXG4gICAgICovXG4gICAgLyoqXG4gICAgICog6L+U5Zue6IyD5Zu05pWw5o2u55qE6IyD5Zu0KOWbvueJh+WPr+inhuWMuuaXtumXtOautSlcbiAgICAgKi9cbiAgICByYW5nZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm9iamVjdF0pLFxuICAgIHNldFByb3BzOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAvKipcbiAgICAgKiDlj6/op4bljLrlrr3luqbpu5jorqQxMOWIhumSn1xuICAgICAqL1xuICAgIHdpZHRoOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSksXG4gICAgLyoqXG4gICAgICog6YCJ5oup5byA5aeL5pe26Ze05qGG5piv5ZCm5pi+56S6XG4gICAgICovXG4gICAgc2V0VGltZVNob3c6IFByb3BUeXBlcy5ib29sLFxuICAgIC8qKlxuICAgICAqIOiuoeeul+aooeW8j+aXtumXtOaooeW8j++8jHRydWXkuLrlupXpg6jlm77niYfkuLrmoLnmja7vvIxmYWxzZeS4um1hcmvlnZfkuLrkvp3mja5cbiAgICAgKi9cbiAgICB0eXBlU2l0ZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgLyoqXG4gICAgICog5Zu+54mH6auY5bqmXG4gICAgICovXG4gICAgaGVpZ2h0OiBQcm9wVHlwZXMubnVtYmVyXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==