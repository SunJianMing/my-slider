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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teV9zbGlkZXIvLi9zcmMvbGliL2NvbXBvbmVudHMvTXlTbGlkZXIucmVhY3QuanMiXSwibmFtZXMiOlsiTXlTbGlkZXIiLCJwcm9wcyIsImltZyIsIlJlYWN0IiwiY3JlYXRlUmVmIiwibWFyayIsIndyYXBJbWciLCJzdGF0ZSIsInN0ZXBJbnRlcnZhbCIsInN1YnNjcmlwdCIsImZsYWciLCJzdGFydFRpbWUiLCJ3cmFwSW1nTGVmdCIsIm1hcmtMZWZ0Iiwic3RhcnREYXRhU2l0ZSIsImJ1dHRvblR5cGUiLCJzZXRTdWJzY3JpcHQiLCJvYmoiLCJzZXRQcm9wcyIsInR5cGVTaXRlIiwibWFya1RpbWUiLCJjdXJyZW50Iiwib2Zmc2V0TGVmdCIsImVuZFRpbWUiLCJvZmZzZXRXaWR0aCIsImltZ1N0YXJ0VGltZSIsIk1hdGgiLCJhYnMiLCJpbWdFbmRUaW1lIiwicGFyZW50Tm9kZSIsInJhbmdlIiwidmFsdWUiLCJzZXRTdGF0ZSIsInRvRml4ZWQiLCJ3cmFwVGltZSIsIm1hcmtTdGFydCIsInN0YXJ0VGltZTEiLCJlbmRUaW1lMSIsImZsb29yIiwic3RlcCIsInNlbGYiLCJhZGRFdmVudExpc3RlbmVyIiwiaSIsInB1c2giLCJkYXRhc2V0Iiwid2lkdGgiLCJzaWxkZXJEcmFnIiwiY29tcHV0ZVRpbWUiLCJ0eXBlIiwibW92ZVdpZHRoIiwibWFya01vdmVXaWR0aCIsIndyYXBQb3NpIiwiUmVtYWluaW5nVGltZSIsImRpc1giLCJkaXNXIiwiZGlzWDEiLCJkaXNMIiwid3JhcFdpZHRoIiwib2JqTW92ZSIsImV2Iiwib2Zmc2V0WCIsInN0eWxlIiwiY3Vyc29yIiwib25tb3VzZW1vdmUiLCJvbm1vdXNlZG93biIsImNsaWVudFgiLCJkb2N1bWVudCIsIm1vdmUiLCJ3IiwibGVmdCIsImN1cnJlbnRYIiwib25tb3VzZXVwIiwidW5kZWZpbmVkIiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJlIiwiY3VycmVudFRhcmdldCIsInNldFN0YXRyVGltZSIsImlkIiwicGljVXJsIiwic2V0VGltZVNob3ciLCJoZWlnaHQiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJwb3NpdGlvbiIsImZvbnRTaXplIiwiYm90dG9tIiwiZGlzcGxheSIsImJhY2tncm91bmRDb2xvciIsIm1hcmdpbkxlZnQiLCJjaGFuZ2VTdGFydFRpbWUiLCJiaW5kIiwibWFyZ2luUmlnaHQiLCJ1cGRhdGVSZW5kZXIiLCJjaGFuZ2VTdGFydERhdGFTaXRlIiwicHJldlByb3BzIiwiQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwibnVtYmVyIiwib25lT2ZUeXBlIiwib2JqZWN0IiwiYXJyYXkiLCJmdW5jIiwiYm9vbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7OztJQVFxQkEsUTs7Ozs7QUFDakIsb0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDZiw4QkFBTUEsS0FBTjtBQUNBLFVBQUtDLEdBQUwsZ0JBQVdDLDRDQUFLLENBQUNDLFNBQU4sRUFBWDtBQUNBLFVBQUtDLElBQUwsZ0JBQVlGLDRDQUFLLENBQUNDLFNBQU4sRUFBWjtBQUNBLFVBQUtFLE9BQUwsZ0JBQWVILDRDQUFLLENBQUNDLFNBQU4sRUFBZjtBQUNBLFVBQUtHLEtBQUwsR0FBYTtBQUNUQyxrQkFBWSxFQUFFLENBREw7QUFFVEMsZUFBUyxFQUFFLEVBRkY7QUFHVEMsVUFBSSxFQUFFLElBSEc7QUFJVEMsZUFBUyxFQUFFLENBSkY7QUFLVEMsaUJBQVcsRUFBRSxDQUxKO0FBTVRDLGNBQVEsRUFBRSxDQU5EO0FBT1RDLG1CQUFhLEVBQUMsQ0FQTDtBQVFUQyxnQkFBVSxFQUFDO0FBUkYsS0FBYjtBQUxlO0FBZWxCOzs7O3dDQUNtQjtBQUNoQixXQUFLQyxZQUFMO0FBQ0gsSyxDQUVEOzs7O2dDQUNZQyxHLEVBQUs7QUFBQSx3QkFDYyxLQUFLaEIsS0FEbkI7QUFBQSxVQUNSaUIsUUFEUSxlQUNSQSxRQURRO0FBQUEsVUFDRUMsUUFERixlQUNFQSxRQURGO0FBQUEsVUFFUlgsWUFGUSxHQUVRLEtBQUtELEtBRmIsQ0FFUkMsWUFGUTtBQUdiLFVBQUlZLFFBQVEsR0FBRyxLQUFLZixJQUFMLENBQVVnQixPQUFWLENBQWtCQyxVQUFsQixHQUErQmQsWUFBOUMsQ0FIYSxDQUtiOztBQUNBLFVBQUlHLFNBQVMsR0FBRyxDQUFDUyxRQUFqQixDQU5hLENBT2I7O0FBQ0EsVUFBSUcsT0FBTyxHQUFHLEVBQUUsS0FBS2xCLElBQUwsQ0FBVWdCLE9BQVYsQ0FBa0JHLFdBQWxCLEdBQWdDaEIsWUFBaEMsR0FBZ0RZLFFBQWxELENBQWQsQ0FSYSxDQVNiOztBQUNBLFVBQUlLLFlBQVksR0FBR0MsSUFBSSxDQUFDQyxHQUFMLENBQVMsS0FBS3JCLE9BQUwsQ0FBYWUsT0FBYixDQUFxQkMsVUFBOUIsSUFBNENkLFlBQS9ELENBVmEsQ0FXYjs7QUFDQSxVQUFJb0IsVUFBVSxHQUFHLEtBQUt0QixPQUFMLENBQWFlLE9BQWIsQ0FBcUJRLFVBQXJCLENBQWdDTCxXQUFoQyxHQUE4Q2hCLFlBQTlDLEdBQTZEaUIsWUFBOUU7O0FBRUEsVUFBSU4sUUFBSixFQUFjO0FBQ1YsWUFBSSxDQUFDRixHQUFMLEVBQVU7QUFDTjtBQUNBQyxrQkFBUSxDQUFDO0FBQ0xZLGlCQUFLLEVBQUU7QUFDSEwsMEJBQVksRUFBWkEsWUFERztBQUVIRyx3QkFBVSxFQUFWQTtBQUZHO0FBREYsV0FBRCxDQUFSO0FBTUFWLGtCQUFRLENBQUM7QUFDTGEsaUJBQUssRUFBRTtBQUNIcEIsdUJBQVMsRUFBVEEsU0FERztBQUVIWSxxQkFBTyxFQUFQQTtBQUZHO0FBREYsV0FBRCxDQUFSO0FBTUg7O0FBQ0QsWUFBSU4sR0FBRyxLQUFLLEtBQUtYLE9BQUwsQ0FBYWUsT0FBekIsRUFBa0M7QUFDOUI7QUFDQUgsa0JBQVEsQ0FBQztBQUNMWSxpQkFBSyxFQUFFO0FBQ0hMLDBCQUFZLEVBQVpBLFlBREc7QUFFSEcsd0JBQVUsRUFBVkE7QUFGRztBQURGLFdBQUQsQ0FBUixDQUY4QixDQVE5Qjs7QUFDQVYsa0JBQVEsQ0FBQztBQUNMYSxpQkFBSyxFQUFFO0FBQ0hwQix1QkFBUyxFQUFUQSxTQURHO0FBRUhZLHFCQUFPLEVBQVBBO0FBRkc7QUFERixXQUFELENBQVI7QUFNSCxTQWZELE1BZU87QUFDSDtBQUNBTCxrQkFBUSxDQUFDO0FBQ0xhLGlCQUFLLEVBQUU7QUFDSHBCLHVCQUFTLEVBQVRBLFNBREc7QUFFSFkscUJBQU8sRUFBUEE7QUFGRztBQURGLFdBQUQsQ0FBUjtBQU1IOztBQUNELGFBQUtTLFFBQUwsQ0FBYztBQUNWckIsbUJBQVMsRUFBRSxDQUFDYyxZQUFZLEdBQUdkLFNBQWhCLEVBQTJCc0IsT0FBM0IsQ0FBbUMsQ0FBbkM7QUFERCxTQUFkO0FBR0gsT0EzQ0QsTUEyQ087QUFDSCxZQUFJQyxRQUFRLEdBQUdSLElBQUksQ0FBQ0MsR0FBTCxDQUFTLEtBQUtyQixPQUFMLENBQWFlLE9BQWIsQ0FBcUJDLFVBQTlCLENBQWY7QUFDQSxZQUFJYSxTQUFTLEdBQUcsS0FBSzlCLElBQUwsQ0FBVWdCLE9BQVYsQ0FBa0JDLFVBQWxDO0FBQ0EsWUFBSWMsVUFBVSxHQUFHLENBQUNGLFFBQVEsR0FBR0MsU0FBWixJQUF5QjNCLFlBQTFDO0FBQ0EsWUFBSTZCLFFBQVEsR0FBRyxDQUFDLEtBQUtoQyxJQUFMLENBQVVnQixPQUFWLENBQWtCRyxXQUFsQixHQUFnQ1UsUUFBaEMsR0FBMkNDLFNBQTVDLElBQXlEM0IsWUFBeEU7QUFFQVUsZ0JBQVEsQ0FBQztBQUNMYSxlQUFLLEVBQUU7QUFDSHBCLHFCQUFTLEVBQUV5QixVQURSO0FBRUhiLG1CQUFPLEVBQUVjO0FBRk47QUFERixTQUFELENBQVI7QUFNQSxhQUFLTCxRQUFMLENBQWM7QUFDVnJCLG1CQUFTLEVBQUUsQ0FBQyxDQUFFeUIsVUFBSCxFQUFlSCxPQUFmLENBQXVCLENBQXZCLENBREQ7QUFFVm5CLHVCQUFhLEVBQUNZLElBQUksQ0FBQ1ksS0FBTCxDQUFXLFNBQU9GLFVBQWxCO0FBRkosU0FBZDtBQUlIO0FBRUosSyxDQUNEOzs7O21DQUNlO0FBQUEsVUFDTkcsSUFETSxHQUNFLEtBQUt0QyxLQURQLENBQ05zQyxJQURNO0FBQUEsVUFFTjdCLElBRk0sR0FFRSxLQUFLSCxLQUZQLENBRU5HLElBRk07QUFHWCxVQUFJOEIsSUFBSSxHQUFHLElBQVg7QUFDQSxVQUFJL0IsU0FBUyxHQUFHLEVBQWhCO0FBRUEsV0FDS1AsR0FETCxDQUVLbUIsT0FGTCxDQUdLb0IsZ0JBSEwsQ0FHc0IsTUFIdEIsRUFHOEIsWUFBWTtBQUNsQyxhQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdILElBQXBCLEVBQTBCRyxDQUFDLEVBQTNCLEVBQStCO0FBQzNCakMsbUJBQVMsQ0FBQ2tDLElBQVYsQ0FBZUQsQ0FBZjtBQUNIOztBQUNERixZQUFJLENBQUNSLFFBQUwsQ0FBYztBQUNWeEIsc0JBQVksRUFBRSxLQUFLZ0IsV0FBTCxHQUFtQmUsSUFEdkI7QUFFVjlCLG1CQUFTLEVBQVRBO0FBRlUsU0FBZDtBQUlBK0IsWUFBSSxDQUFDbEMsT0FBTCxDQUFhZSxPQUFiLENBQXFCdUIsT0FBckIsQ0FBNkJDLEtBQTdCLEdBQXFDLEtBQUtyQixXQUExQztBQUNBZ0IsWUFBSSxDQUFDTSxVQUFMLENBQWdCTixJQUFJLENBQUNuQyxJQUFMLENBQVVnQixPQUExQjtBQUNBbUIsWUFBSSxDQUFDTSxVQUFMLENBQWdCTixJQUFJLENBQUNsQyxPQUFMLENBQWFlLE9BQTdCLEVBQXNDLElBQXRDOztBQUNBLFlBQUlYLElBQUosRUFBVTtBQUNOOEIsY0FBSSxDQUFDTyxXQUFMO0FBQ0FQLGNBQUksQ0FBQ1IsUUFBTCxDQUFjO0FBQUN0QixnQkFBSSxFQUFFO0FBQVAsV0FBZDtBQUNIO0FBQ0osT0FsQkw7QUFvQkgsSyxDQUNEOzs7O2lDQUNhc0MsSSxFQUFNO0FBQUE7O0FBQUEsd0JBRTBDLEtBQUt6QyxLQUYvQztBQUFBLFVBRVZDLFlBRlUsZUFFVkEsWUFGVTtBQUFBLFVBRUlHLFNBRkosZUFFSUEsU0FGSjtBQUFBLFVBRWNHLGFBRmQsZUFFY0EsYUFGZDtBQUFBLFVBRTRCQyxVQUY1QixlQUU0QkEsVUFGNUI7QUFBQSxVQUlEVCxPQUpDLEdBSVUsS0FBS0EsT0FKZixDQUlWZSxPQUpVO0FBQUEsVUFLRGhCLElBTEMsR0FLTyxLQUFLQSxJQUxaLENBS1ZnQixPQUxVOztBQU1mLFVBQUdOLFVBQVUsSUFBSSxZQUFqQixFQUE4QjtBQUUxQkosaUJBQVMsR0FBR0csYUFBYSxHQUFDLE1BQTFCLENBRjBCLENBRzFCO0FBQ0gsT0FKRCxNQUlNLElBQUdDLFVBQVUsSUFBSSxXQUFqQixFQUE2QjtBQUUvQkQscUJBQWEsR0FBRyxTQUFPSCxTQUF2QixDQUYrQixDQUcvQjtBQUNIOztBQUNELFVBQUlzQyxTQUFTLEdBQUczQyxPQUFPLENBQUNzQyxPQUFSLENBQWdCQyxLQUFoQixHQUF3QnZDLE9BQU8sQ0FBQ2tCLFdBQWhEO0FBQ0EsVUFBSTBCLGFBQWEsR0FBRzVDLE9BQU8sQ0FBQ2tCLFdBQVIsR0FBc0JuQixJQUFJLENBQUNtQixXQUEvQztBQUNBLFVBQUkyQixRQUFRLEdBQUd4QyxTQUFTLEdBQUdILFlBQTNCOztBQUVBLFVBQUkyQyxRQUFRLElBQUlGLFNBQWhCLEVBQTJCO0FBQ3ZCO0FBQ0EsYUFBS2pCLFFBQUwsQ0FBYztBQUNWcEIscUJBQVcsRUFBRSxDQUFDdUMsUUFBRCxHQUFZLElBRGY7QUFFVnRDLGtCQUFRLEVBQUU7QUFGQSxTQUFkLEVBR0csWUFBTTtBQUNMLGdCQUFJLENBQUNrQyxXQUFMO0FBQ0gsU0FMRDtBQU9ILE9BVEQsTUFTTyxJQUFJSSxRQUFRLEdBQUdGLFNBQWYsRUFBMEI7QUFDN0IsWUFBSUcsYUFBYSxHQUFHRCxRQUFRLEdBQUdGLFNBQS9CLENBRDZCLENBRTdCOztBQUNBLGFBQUtqQixRQUFMLENBQWM7QUFDVnBCLHFCQUFXLEVBQUUsQ0FBQ3FDLFNBQUQsR0FBYSxJQURoQjtBQUVWcEMsa0JBQVEsRUFBRTtBQUZBLFNBQWQsRUFHRyxZQUFNO0FBQ0wsZ0JBQUksQ0FBQ2tDLFdBQUw7QUFDSCxTQUxEOztBQU9BLFlBQUlLLGFBQWEsR0FBR0YsYUFBcEIsRUFBbUM7QUFFL0IsZUFBS2xCLFFBQUwsQ0FBYztBQUNWbkIsb0JBQVEsRUFBRXVDLGFBQWEsR0FBRztBQURoQixXQUFkLEVBRUcsWUFBTTtBQUNMLGtCQUFJLENBQUNMLFdBQUw7QUFDSCxXQUpELEVBRitCLENBUS9CO0FBQ0gsU0FURCxNQVNPO0FBQ0gsZUFBS2YsUUFBTCxDQUFjO0FBQ1ZuQixvQkFBUSxFQUFFcUMsYUFBYSxHQUFHO0FBRGhCLFdBQWQsRUFFRyxZQUFNO0FBQ0wsa0JBQUksQ0FBQ0gsV0FBTDtBQUNILFdBSkQ7QUFNSDtBQUNKO0FBRUosSyxDQUNEOzs7OytCQUNXOUIsRyxFQUFLUCxJLEVBQU07QUFDbEIsVUFBSTJDLElBQUosRUFDSUwsSUFESixFQUVJTSxJQUZKLEVBR0lDLEtBSEosRUFJSUMsSUFKSjtBQUtBLFVBQUlDLFNBQVMsR0FBRyxLQUFLbkQsT0FBTCxDQUFhZSxPQUFiLENBQXFCRyxXQUFyQztBQU5rQixVQU9iaEIsWUFQYSxHQU9HLEtBQUtELEtBUFIsQ0FPYkMsWUFQYTtBQVFsQixVQUFJZ0MsSUFBSSxHQUFHLElBQVg7O0FBRUEsZUFBU2tCLE9BQVQsQ0FBaUJDLEVBQWpCLEVBQXFCO0FBRWpCLFlBQUlBLEVBQUUsQ0FBQ0MsT0FBSCxHQUFhLEVBQWpCLEVBQXFCO0FBQ2pCWixjQUFJLEdBQUcsTUFBUDtBQUNBL0IsYUFBRyxDQUFDNEMsS0FBSixDQUFVQyxNQUFWLEdBQW1CLFVBQW5CO0FBQ0gsU0FIRCxNQUdPLElBQUlILEVBQUUsQ0FBQ0MsT0FBSCxHQUFhM0MsR0FBRyxDQUFDTyxXQUFKLEdBQWtCLEVBQW5DLEVBQXVDO0FBQzFDd0IsY0FBSSxHQUFHLE9BQVA7QUFDQS9CLGFBQUcsQ0FBQzRDLEtBQUosQ0FBVUMsTUFBVixHQUFtQixVQUFuQjtBQUNILFNBSE0sTUFHQTtBQUNIZCxjQUFJLEdBQUcsRUFBUDtBQUNBL0IsYUFBRyxDQUFDNEMsS0FBSixDQUFVQyxNQUFWLEdBQW1CLFNBQW5CO0FBQ0g7QUFDSjs7QUFDRCxVQUFJLENBQUNwRCxJQUFMLEVBQVc7QUFDUE8sV0FBRyxDQUFDOEMsV0FBSixHQUFrQkwsT0FBbEI7QUFDSDs7QUFDRHpDLFNBQUcsQ0FBQytDLFdBQUosR0FBa0IsVUFBVUwsRUFBVixFQUFjO0FBQzVCLFlBQUksQ0FBQ2pELElBQUwsRUFBVztBQUNQTyxhQUFHLENBQUM4QyxXQUFKLEdBQWtCLElBQWxCOztBQUNBLGNBQUlKLEVBQUUsQ0FBQ0MsT0FBSCxHQUFhLEVBQWpCLEVBQXFCO0FBQ2pCWixnQkFBSSxHQUFHLE1BQVA7QUFDQS9CLGVBQUcsQ0FBQzRDLEtBQUosQ0FBVUMsTUFBVixHQUFtQixVQUFuQjtBQUNIOztBQUNELGNBQUlILEVBQUUsQ0FBQ0MsT0FBSCxHQUFhM0MsR0FBRyxDQUFDTyxXQUFKLEdBQWtCLEVBQW5DLEVBQXVDO0FBQ25Dd0IsZ0JBQUksR0FBRyxPQUFQO0FBQ0EvQixlQUFHLENBQUM0QyxLQUFKLENBQVVDLE1BQVYsR0FBbUIsVUFBbkI7QUFDSDtBQUNKOztBQUNEUCxhQUFLLEdBQUdJLEVBQUUsQ0FBQ00sT0FBWDtBQUNBWCxZQUFJLEdBQUdyQyxHQUFHLENBQUNPLFdBQVg7QUFDQWdDLFlBQUksR0FBR3ZDLEdBQUcsQ0FBQ0ssVUFBWDtBQUNBK0IsWUFBSSxHQUFHTSxFQUFFLENBQUNNLE9BQUgsR0FBYWhELEdBQUcsQ0FBQ0ssVUFBeEI7O0FBRUE0QyxnQkFBUSxDQUFDSCxXQUFULEdBQXVCLFNBQVNJLElBQVQsQ0FBY1IsRUFBZCxFQUFrQjtBQUNyQyxjQUFJWCxJQUFKLEVBQVU7QUFDTixnQkFBSW9CLENBQUMsR0FBR1QsRUFBRSxDQUFDTSxPQUFILEdBQWFWLEtBQXJCOztBQUNBLGdCQUFJdEMsR0FBRyxDQUFDTyxXQUFKLEdBQWtCaUMsU0FBdEIsRUFBaUM7QUFDN0J4QyxpQkFBRyxDQUFDNEMsS0FBSixDQUFVaEIsS0FBVixHQUFrQlksU0FBUyxHQUFHLElBQTlCO0FBQ0E7QUFDSDs7QUFDRCxnQkFBSXhDLEdBQUcsQ0FBQ08sV0FBSixHQUFrQlAsR0FBRyxDQUFDSyxVQUF0QixHQUFtQ21DLFNBQXZDLEVBQWtEO0FBQzlDeEMsaUJBQUcsQ0FBQzRDLEtBQUosQ0FBVWhCLEtBQVYsR0FBa0JZLFNBQVMsR0FBR3hDLEdBQUcsQ0FBQ0ssVUFBaEIsR0FBNkIsSUFBL0M7QUFDQTtBQUNIOztBQUNELGdCQUFJTCxHQUFHLENBQUNPLFdBQUosR0FBa0JoQixZQUF0QixFQUFvQztBQUNoQ1MsaUJBQUcsQ0FBQzRDLEtBQUosQ0FBVWhCLEtBQVYsR0FBa0JyQyxZQUFZLEdBQUcsSUFBakM7QUFDSDs7QUFDRCxnQkFBSXdDLElBQUksSUFBSSxPQUFaLEVBQXFCO0FBQ2pCL0IsaUJBQUcsQ0FBQzRDLEtBQUosQ0FBVWhCLEtBQVYsR0FBa0J1QixDQUFDLEdBQUdkLElBQUosR0FBVyxJQUE3QjtBQUNIOztBQUNELGdCQUFJTixJQUFJLElBQUksTUFBWixFQUFvQjtBQUNoQixrQkFBSVEsSUFBSSxHQUFHWSxDQUFQLElBQVksQ0FBaEIsRUFBbUI7QUFDZjtBQUNBbkQsbUJBQUcsQ0FBQzRDLEtBQUosQ0FBVVEsSUFBVixHQUFpQixDQUFqQjtBQUNBO0FBQ0g7O0FBQ0RwRCxpQkFBRyxDQUFDNEMsS0FBSixDQUFVaEIsS0FBVixHQUFrQlMsSUFBSSxHQUFHYyxDQUFQLEdBQVcsSUFBN0I7QUFDQW5ELGlCQUFHLENBQUM0QyxLQUFKLENBQVVRLElBQVYsR0FBaUJiLElBQUksR0FBR1ksQ0FBUCxHQUFXLElBQTVCO0FBQ0g7O0FBQ0Q7QUFDSDs7QUFDRCxjQUFJRSxRQUFRLEdBQUdYLEVBQUUsQ0FBQ00sT0FBSCxHQUFhWixJQUE1Qjs7QUFFQSxjQUFJLENBQUMzQyxJQUFMLEVBQVc7QUFDUCxnQkFBSTRELFFBQVEsR0FBRyxDQUFmLEVBQWtCO0FBQ2RBLHNCQUFRLEdBQUcsQ0FBWDtBQUNIOztBQUNELGdCQUFJQSxRQUFRLEdBQUdiLFNBQVMsR0FBR3hDLEdBQUcsQ0FBQ08sV0FBL0IsRUFBNEM7QUFDeEM4QyxzQkFBUSxHQUFHYixTQUFTLEdBQUd4QyxHQUFHLENBQUNPLFdBQTNCO0FBQ0g7QUFDSixXQVBELE1BT087QUFDSCxnQkFBSThDLFFBQVEsR0FBRyxDQUFmLEVBQWtCO0FBQ2RBLHNCQUFRLEdBQUcsQ0FBWDtBQUNIOztBQUNELGdCQUFJQSxRQUFRLEdBQUdiLFNBQVMsR0FBR3hDLEdBQUcsQ0FBQzJCLE9BQUosQ0FBWUMsS0FBdkMsRUFBOEM7QUFDMUN5QixzQkFBUSxHQUFHYixTQUFTLEdBQUd4QyxHQUFHLENBQUMyQixPQUFKLENBQVlDLEtBQW5DO0FBQ0g7QUFDSjs7QUFDRDVCLGFBQUcsQ0FBQzRDLEtBQUosQ0FBVVEsSUFBVixHQUFpQkMsUUFBUSxHQUFHLElBQTVCO0FBQ0gsU0E5Q0Q7O0FBK0NBSixnQkFBUSxDQUFDSyxTQUFULEdBQXFCLFlBQVk7QUFDN0JMLGtCQUFRLENBQUNILFdBQVQsR0FBdUIsSUFBdkI7QUFDQUcsa0JBQVEsQ0FBQ0ssU0FBVCxHQUFxQixJQUFyQjtBQUNBdkIsY0FBSSxHQUFHd0IsU0FBUDtBQUNBdkQsYUFBRyxDQUFDNEMsS0FBSixDQUFVQyxNQUFWLEdBQW1CLFNBQW5CO0FBQ0F0QixjQUFJLENBQUNSLFFBQUwsQ0FBYztBQUNWbkIsb0JBQVEsRUFBRTJCLElBQUksQ0FBQ25DLElBQUwsQ0FBVWdCLE9BQVYsQ0FBa0JDLFVBQWxCLEdBQStCLElBRC9CO0FBRVZWLHVCQUFXLEVBQUU0QixJQUFJLENBQUNsQyxPQUFMLENBQWFlLE9BQWIsQ0FBcUJDLFVBQXJCLEdBQWtDO0FBRnJDLFdBQWQ7O0FBSUEsY0FBSSxDQUFDWixJQUFMLEVBQVc7QUFFUE8sZUFBRyxDQUFDOEMsV0FBSixHQUFrQkwsT0FBbEI7O0FBQ0EsZ0JBQUl6QyxHQUFHLENBQUNPLFdBQUosR0FBa0JQLEdBQUcsQ0FBQ0ssVUFBdEIsR0FBbUNtQyxTQUF2QyxFQUFrRDtBQUM5Q3hDLGlCQUFHLENBQUM0QyxLQUFKLENBQVVoQixLQUFWLEdBQWtCWSxTQUFTLEdBQUd4QyxHQUFHLENBQUNLLFVBQWhCLEdBQTZCLElBQS9DO0FBQ0E7QUFDSDtBQUVKOztBQUVEa0IsY0FBSSxDQUFDTyxXQUFMLENBQWlCOUIsR0FBakI7QUFFSCxTQXJCRDs7QUFzQkEwQyxVQUFFLENBQUNjLGNBQUg7QUFDQWQsVUFBRSxDQUFDZSxlQUFIO0FBQ0gsT0F4RkQ7QUF5Rkg7OztvQ0FDZUMsQyxFQUFHO0FBQ2YsV0FBSzNDLFFBQUwsQ0FBYztBQUFDckIsaUJBQVMsRUFBRWdFLENBQUMsQ0FBQ0MsYUFBRixDQUFnQjdDLEtBQTVCO0FBQWtDaEIsa0JBQVUsRUFBQztBQUE3QyxPQUFkO0FBQ0g7Ozt3Q0FDbUI0RCxDLEVBQUU7QUFDbEIsV0FBSzNDLFFBQUwsQ0FBYztBQUFDbEIscUJBQWEsRUFBRTZELENBQUMsQ0FBQ0MsYUFBRixDQUFnQjdDLEtBQWhDO0FBQXNDaEIsa0JBQVUsRUFBQztBQUFqRCxPQUFkO0FBRUg7OzttQ0FDYztBQUVYLFdBQUs4RCxZQUFMO0FBQ0g7Ozs2QkFFUTtBQUFBLHlCQVFELEtBQUs1RSxLQVJKO0FBQUEsVUFFRDZFLEVBRkMsZ0JBRURBLEVBRkM7QUFBQSxVQUdEQyxNQUhDLGdCQUdEQSxNQUhDO0FBQUEsVUFJRGxDLEtBSkMsZ0JBSURBLEtBSkM7QUFBQSxVQUtEbUMsV0FMQyxnQkFLREEsV0FMQztBQUFBLFVBTURDLE1BTkMsZ0JBTURBLE1BTkM7QUFBQSxVQU9EMUMsSUFQQyxnQkFPREEsSUFQQztBQUFBLHlCQVMyRSxLQUFLaEMsS0FUaEY7QUFBQSxVQVNBQyxZQVRBLGdCQVNBQSxZQVRBO0FBQUEsVUFTY0MsU0FUZCxnQkFTY0EsU0FUZDtBQUFBLFVBU3lCSSxRQVR6QixnQkFTeUJBLFFBVHpCO0FBQUEsVUFTbUNELFdBVG5DLGdCQVNtQ0EsV0FUbkM7QUFBQSxVQVNnREQsU0FUaEQsZ0JBU2dEQSxTQVRoRDtBQUFBLFVBUzBERyxhQVQxRCxnQkFTMERBLGFBVDFEOztBQVVMLFVBQUksT0FBTytCLEtBQVAsS0FBaUIsUUFBckIsRUFBK0I7QUFDM0JBLGFBQUssR0FBR0EsS0FBSyxHQUFHckMsWUFBUixHQUF1QixJQUEvQjtBQUNIOztBQUNELDBCQUNJO0FBQUssVUFBRSxFQUFFc0U7QUFBVCxzQkFDSTtBQUNJLGlCQUFTLEVBQUMsTUFEZDtBQUVJLGFBQUssRUFBRTtBQUNQakMsZUFBSyxFQUFFQTtBQURBO0FBRlgsc0JBS0k7QUFDSSxpQkFBUyxFQUFDLFNBRGQ7QUFFSSxhQUFLLEVBQUU7QUFDUHdCLGNBQUksRUFBRXpELFdBREM7QUFFUHFFLGdCQUFNLEVBQUVBLE1BQU0sR0FBRyxFQUFULEdBQWM7QUFGZixTQUZYO0FBTUksV0FBRyxFQUFFLEtBQUszRTtBQU5kLHNCQU9JO0FBQ0ksV0FBRyxFQUFFLEtBQUtKLEdBRGQ7QUFFSSxXQUFHLEVBQUU2RSxNQUZUO0FBR0ksYUFBSyxFQUFFO0FBQ1BFLGdCQUFNLEVBQUVBLE1BQU0sR0FBRztBQURWLFNBSFg7QUFNSSxpQkFBUyxFQUFDLEtBTmQ7QUFPSSxXQUFHLEVBQUM7QUFQUixRQVBKLEVBZVN4RSxTQUFTLENBQUN5RSxHQUFWLENBQWMsVUFBQ0MsSUFBRCxFQUFNQyxLQUFOO0FBQUEsNEJBQ2Y7QUFDSSxhQUFHLEVBQUVBLEtBRFQ7QUFFSSxlQUFLLEVBQUU7QUFDUEMsb0JBQVEsRUFBRSxVQURIO0FBRVBoQixnQkFBSSxFQUFFN0QsWUFBWSxHQUFHMkUsSUFBZixHQUFzQixJQUZyQjtBQUdQRyxvQkFBUSxFQUFFLE1BSEg7QUFJUEMsa0JBQU0sRUFBRTtBQUpEO0FBRlgsd0JBUUk7QUFDSSxlQUFLLEVBQUU7QUFDUEMsbUJBQU8sRUFBRSxPQURGO0FBRVBQLGtCQUFNLEVBQUUsS0FGRDtBQUdQcEMsaUJBQUssRUFBRSxLQUhBO0FBSVA0QywyQkFBZSxFQUFFO0FBSlY7QUFEWCxVQVJKLGVBZUk7QUFDSSxlQUFLLEVBQUU7QUFDUEMsc0JBQVUsRUFBRTtBQURMO0FBRFgsV0FJS1AsSUFKTCxRQWZKLENBRGU7QUFBQSxPQUFkLENBZlQsQ0FMSixlQThDSTtBQUNJLFdBQUcsRUFBRSxLQUFLOUUsSUFEZDtBQUVJLGlCQUFTLEVBQUMsTUFGZDtBQUdJLGFBQUssRUFBRTtBQUNQd0MsZUFBSyxFQUFFckMsWUFBWSxHQUFHLElBRGY7QUFFUHlFLGdCQUFNLEVBQUVBLE1BQU0sR0FBRyxJQUZWO0FBR1BaLGNBQUksRUFBRXhEO0FBSEM7QUFIWCxRQTlDSixDQURKLEVBd0RLbUUsV0FBVyxpQkFBSTtBQUFLLGlCQUFTLEVBQUM7QUFBZixzQkFDWjtBQUNJLFlBQUksRUFBQyxNQURUO0FBRUksYUFBSyxFQUFFckUsU0FGWDtBQUdJLGdCQUFRLEVBQUUsS0FDVGdGLGVBRFMsQ0FFVEMsSUFGUyxDQUVKLElBRkk7QUFIZCxRQURZLGVBT1o7QUFDSSxhQUFLLEVBQUU7QUFBQ0MscUJBQVcsRUFBQztBQUFiLFNBRFg7QUFFSSxlQUFPLEVBQUUsS0FBS0MsWUFBTCxDQUFrQkYsSUFBbEIsQ0FBdUIsSUFBdkI7QUFGYixxQkFQWSxlQVVaO0FBQU8sWUFBSSxFQUFDLE1BQVo7QUFDSyxhQUFLLEVBQUU5RSxhQURaO0FBRUssZ0JBQVEsRUFBRSxLQUFLaUYsbUJBQUwsQ0FBeUJILElBQXpCLENBQThCLElBQTlCO0FBRmYsUUFWWSxlQWNaO0FBQVEsZUFBTyxFQUFFLEtBQUtFLFlBQUwsQ0FBa0JGLElBQWxCLENBQXVCLElBQXZCO0FBQWpCLHNCQWRZLENBeERwQixDQURKO0FBNEVIOzs7dUNBQ2tCSSxTLEVBQVU7QUFDekIsVUFBR0EsU0FBUyxDQUFDekQsSUFBVixJQUFrQixLQUFLdEMsS0FBTCxDQUFXc0MsSUFBaEMsRUFBcUM7QUFDakMsYUFBS3ZCLFlBQUw7QUFDQSxhQUFLZ0IsUUFBTCxDQUFjO0FBQ1ZwQixxQkFBVyxFQUFDLENBREY7QUFFVkMsa0JBQVEsRUFBQztBQUZDLFNBQWQ7QUFJSDtBQUVKOzs7O0VBN1ppQ29GLCtDOzs7QUFnYXRDakcsUUFBUSxDQUFDa0csWUFBVCxHQUF3QjtBQUNwQnJELE9BQUssRUFBRSxFQURhO0FBRXBCb0MsUUFBTSxFQUFFLEVBRlk7QUFHcEJELGFBQVcsRUFBRSxJQUhPO0FBSXBCN0QsVUFBUSxFQUFFO0FBSlUsQ0FBeEI7QUFPQW5CLFFBQVEsQ0FBQ21HLFNBQVQsR0FBcUI7QUFDakI7OztBQUdBckIsSUFBRSxFQUFFc0IsaURBQVMsQ0FBQ0MsTUFKRzs7QUFLakI7Ozs7QUFJQXRCLFFBQU0sRUFBRXFCLGlEQUFTLENBQUNDLE1BVEQ7O0FBVWpCOzs7QUFHQTlELE1BQUksRUFBRTZELGlEQUFTLENBQUNFLE1BYkM7O0FBY2pCOzs7O0FBSUF2RSxPQUFLLEVBQUVxRSxpREFBUyxDQUFDRyxTQUFWLENBQW9CLENBQUNILGlEQUFTLENBQUNDLE1BQVgsRUFBbUJELGlEQUFTLENBQUNFLE1BQTdCLEVBQXFDRixpREFBUyxDQUFDSSxNQUEvQyxFQUF1REosaURBQVMsQ0FBQ0ssS0FBakUsQ0FBcEIsQ0FsQlU7O0FBb0JqQjs7Ozs7QUFJQTs7O0FBR0EzRSxPQUFLLEVBQUVzRSxpREFBUyxDQUFDRyxTQUFWLENBQW9CLENBQUNILGlEQUFTLENBQUNDLE1BQVgsRUFBbUJELGlEQUFTLENBQUNJLE1BQTdCLENBQXBCLENBM0JVO0FBNEJqQnRGLFVBQVEsRUFBRWtGLGlEQUFTLENBQUNNLElBNUJIOztBQTZCakI7OztBQUdBN0QsT0FBSyxFQUFFdUQsaURBQVMsQ0FBQ0csU0FBVixDQUFvQixDQUFDSCxpREFBUyxDQUFDQyxNQUFYLEVBQW1CRCxpREFBUyxDQUFDRSxNQUE3QixDQUFwQixDQWhDVTs7QUFpQ2pCOzs7QUFHQXRCLGFBQVcsRUFBRW9CLGlEQUFTLENBQUNPLElBcENOOztBQXFDakI7OztBQUdBeEYsVUFBUSxFQUFFaUYsaURBQVMsQ0FBQ08sSUF4Q0g7O0FBeUNqQjs7O0FBR0ExQixRQUFNLEVBQUVtQixpREFBUyxDQUFDRTtBQTVDRCxDQUFyQixDIiwiZmlsZSI6ImEyMDk2YjQtbWFpbi13cHMtaG1yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0ICcuLi8uLi9zdHlsZS9pbmRleC5jc3MnO1xuXG4vKipcbiAqIEV4YW1wbGVDb21wb25lbnQgaXMgYW4gZXhhbXBsZSBjb21wb25lbnQuXG4gKiBJdCB0YWtlcyBhIHByb3BlcnR5LCBgbGFiZWxgLCBhbmRcbiAqIGRpc3BsYXlzIGl0LlxuICogSXQgcmVuZGVycyBhbiBpbnB1dCB3aXRoIHRoZSBwcm9wZXJ0eSBgdmFsdWVgXG4gKiB3aGljaCBpcyBlZGl0YWJsZSBieSB0aGUgdXNlci5cbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNeVNsaWRlciBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLmltZyA9IFJlYWN0LmNyZWF0ZVJlZigpO1xuICAgICAgICB0aGlzLm1hcmsgPSBSZWFjdC5jcmVhdGVSZWYoKTtcbiAgICAgICAgdGhpcy53cmFwSW1nID0gUmVhY3QuY3JlYXRlUmVmKCk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBzdGVwSW50ZXJ2YWw6IDAsXG4gICAgICAgICAgICBzdWJzY3JpcHQ6IFtdLFxuICAgICAgICAgICAgZmxhZzogdHJ1ZSxcbiAgICAgICAgICAgIHN0YXJ0VGltZTogMCxcbiAgICAgICAgICAgIHdyYXBJbWdMZWZ0OiAwLFxuICAgICAgICAgICAgbWFya0xlZnQ6IDAsXG4gICAgICAgICAgICBzdGFydERhdGFTaXRlOjAsXG4gICAgICAgICAgICBidXR0b25UeXBlOicnXG4gICAgICAgIH07XG4gICAgfVxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLnNldFN1YnNjcmlwdCgpO1xuICAgIH1cblxuICAgIC8vIOiuoeeul+W8gOWni+aXtumXtOWSjOe7k+adn+aXtumXtFxuICAgIGNvbXB1dGVUaW1lKG9iaikge1xuICAgICAgICBsZXQge3NldFByb3BzLCB0eXBlU2l0ZX0gPSB0aGlzLnByb3BzO1xuICAgICAgICBsZXQge3N0ZXBJbnRlcnZhbH0gPSB0aGlzLnN0YXRlXG4gICAgICAgIGxldCBtYXJrVGltZSA9IHRoaXMubWFyay5jdXJyZW50Lm9mZnNldExlZnQgLyBzdGVwSW50ZXJ2YWw7XG5cbiAgICAgICAgLy/mu5HlnZflvIDlp4vml7bpl7RcbiAgICAgICAgbGV0IHN0YXJ0VGltZSA9ICttYXJrVGltZVxuICAgICAgICAvL+a7keWdl+e7k+adn+aXtumXtFxuICAgICAgICBsZXQgZW5kVGltZSA9ICsodGhpcy5tYXJrLmN1cnJlbnQub2Zmc2V0V2lkdGggLyBzdGVwSW50ZXJ2YWwgKyAobWFya1RpbWUpKVxuICAgICAgICAvLyDlm77niYfotbflp4vml7bpl7RcbiAgICAgICAgbGV0IGltZ1N0YXJ0VGltZSA9IE1hdGguYWJzKHRoaXMud3JhcEltZy5jdXJyZW50Lm9mZnNldExlZnQpIC8gc3RlcEludGVydmFsXG4gICAgICAgIC8v5Zu+54mH57uT5p2f5pe26Ze0XG4gICAgICAgIGxldCBpbWdFbmRUaW1lID0gdGhpcy53cmFwSW1nLmN1cnJlbnQucGFyZW50Tm9kZS5vZmZzZXRXaWR0aCAvIHN0ZXBJbnRlcnZhbCArIGltZ1N0YXJ0VGltZVxuXG4gICAgICAgIGlmICh0eXBlU2l0ZSkge1xuICAgICAgICAgICAgaWYgKCFvYmopIHtcbiAgICAgICAgICAgICAgICAvL+WIneWni+WMluaYr+WbvueJh+WSjOa7keWdl+aJgOWkhOS9jee9rlxuICAgICAgICAgICAgICAgIHNldFByb3BzKHtcbiAgICAgICAgICAgICAgICAgICAgcmFuZ2U6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGltZ1N0YXJ0VGltZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGltZ0VuZFRpbWVcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgc2V0UHJvcHMoe1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnRUaW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgZW5kVGltZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChvYmogPT09IHRoaXMud3JhcEltZy5jdXJyZW50KSB7XG4gICAgICAgICAgICAgICAgLy8g5Zu+54mH5ruR5Yqo5ZCO55qE5L2N572uXG4gICAgICAgICAgICAgICAgc2V0UHJvcHMoe1xuICAgICAgICAgICAgICAgICAgICByYW5nZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW1nU3RhcnRUaW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW1nRW5kVGltZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAvL+WbvueJh+enu+WKqOWQju+8jOa7keWdl+aJgOWcqOeahOS9jee9rlxuICAgICAgICAgICAgICAgIHNldFByb3BzKHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0VGltZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuZFRpbWVcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvL+a7keWdl+enu+WKqOWQju+8jOaJgOWcqOS9jee9rlxuICAgICAgICAgICAgICAgIHNldFByb3BzKHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0VGltZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuZFRpbWVcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgc3RhcnRUaW1lOiAoaW1nU3RhcnRUaW1lICsgc3RhcnRUaW1lKS50b0ZpeGVkKDIpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IHdyYXBUaW1lID0gTWF0aC5hYnModGhpcy53cmFwSW1nLmN1cnJlbnQub2Zmc2V0TGVmdClcbiAgICAgICAgICAgIGxldCBtYXJrU3RhcnQgPSB0aGlzLm1hcmsuY3VycmVudC5vZmZzZXRMZWZ0XG4gICAgICAgICAgICBsZXQgc3RhcnRUaW1lMSA9ICh3cmFwVGltZSArIG1hcmtTdGFydCkgLyBzdGVwSW50ZXJ2YWxcbiAgICAgICAgICAgIGxldCBlbmRUaW1lMSA9ICh0aGlzLm1hcmsuY3VycmVudC5vZmZzZXRXaWR0aCArIHdyYXBUaW1lICsgbWFya1N0YXJ0KSAvIHN0ZXBJbnRlcnZhbFxuXG4gICAgICAgICAgICBzZXRQcm9wcyh7XG4gICAgICAgICAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICAgICAgICAgICAgc3RhcnRUaW1lOiBzdGFydFRpbWUxLFxuICAgICAgICAgICAgICAgICAgICBlbmRUaW1lOiBlbmRUaW1lMVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBzdGFydFRpbWU6ICgrIHN0YXJ0VGltZTEpLnRvRml4ZWQoMiksXG4gICAgICAgICAgICAgICAgc3RhcnREYXRhU2l0ZTpNYXRoLmZsb29yKDMwMDAwMCpzdGFydFRpbWUxKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgfVxuICAgIC8v6K6+572u5LiL5qCH5L2N572uXG4gICAgc2V0U3Vic2NyaXB0KCkge1xuICAgICAgICBsZXQge3N0ZXB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgbGV0IHtmbGFnfSA9IHRoaXMuc3RhdGVcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgICBsZXQgc3Vic2NyaXB0ID0gW11cblxuICAgICAgICB0aGlzXG4gICAgICAgICAgICAuaW1nXG4gICAgICAgICAgICAuY3VycmVudFxuICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdGVwOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgc3Vic2NyaXB0LnB1c2goaSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHNlbGYuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICBzdGVwSW50ZXJ2YWw6IHRoaXMub2Zmc2V0V2lkdGggLyBzdGVwLFxuICAgICAgICAgICAgICAgICAgICBzdWJzY3JpcHRcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBzZWxmLndyYXBJbWcuY3VycmVudC5kYXRhc2V0LndpZHRoID0gdGhpcy5vZmZzZXRXaWR0aDtcbiAgICAgICAgICAgICAgICBzZWxmLnNpbGRlckRyYWcoc2VsZi5tYXJrLmN1cnJlbnQpO1xuICAgICAgICAgICAgICAgIHNlbGYuc2lsZGVyRHJhZyhzZWxmLndyYXBJbWcuY3VycmVudCwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgaWYgKGZsYWcpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5jb21wdXRlVGltZSgpO1xuICAgICAgICAgICAgICAgICAgICBzZWxmLnNldFN0YXRlKHtmbGFnOiBmYWxzZX0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICB9XG4gICAgLy/orr7nva7liJ3lp4vljJbml7bpl7RcbiAgICBzZXRTdGF0clRpbWUodHlwZSkge1xuXG4gICAgICAgIGxldCB7c3RlcEludGVydmFsLCBzdGFydFRpbWUsc3RhcnREYXRhU2l0ZSxidXR0b25UeXBlfSA9IHRoaXMuc3RhdGVcbiAgICAgICAgXG4gICAgICAgIGxldCB7Y3VycmVudDogd3JhcEltZ30gPSB0aGlzLndyYXBJbWdcbiAgICAgICAgbGV0IHtjdXJyZW50OiBtYXJrfSA9IHRoaXMubWFya1xuICAgICAgICBpZihidXR0b25UeXBlID09ICdzdGFydFBvaW50Jyl7XG4gICAgICAgICAgIFxuICAgICAgICAgICAgc3RhcnRUaW1lID0gc3RhcnREYXRhU2l0ZS8zMDAwMDBcbiAgICAgICAgICAgIC8vIHRoaXMuc2V0U3RhdGUoe3N0YXJ0VGltZX0pXG4gICAgICAgIH1lbHNlIGlmKGJ1dHRvblR5cGUgPT0gJ3N0YXJ0VGltZScpe1xuICAgICAgICAgICBcbiAgICAgICAgICAgIHN0YXJ0RGF0YVNpdGUgPSAzMDAwMDAqc3RhcnRUaW1lXG4gICAgICAgICAgICAvLyB0aGlzLnNldFN0YXRlKHtzdGFydERhdGFTaXRlfSlcbiAgICAgICAgfVxuICAgICAgICBsZXQgbW92ZVdpZHRoID0gd3JhcEltZy5kYXRhc2V0LndpZHRoIC0gd3JhcEltZy5vZmZzZXRXaWR0aFxuICAgICAgICBsZXQgbWFya01vdmVXaWR0aCA9IHdyYXBJbWcub2Zmc2V0V2lkdGggLSBtYXJrLm9mZnNldFdpZHRoXG4gICAgICAgIGxldCB3cmFwUG9zaSA9IHN0YXJ0VGltZSAqIHN0ZXBJbnRlcnZhbFxuICAgICAgIFxuICAgICAgICBpZiAod3JhcFBvc2kgPD0gbW92ZVdpZHRoKSB7XG4gICAgICAgICAgICAvLyB3cmFwSW1nLnN0eWxlLmxlZnQgPSBgLSR7d3JhcFBvc2l9cHhgXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICB3cmFwSW1nTGVmdDogLXdyYXBQb3NpICsgJ3B4JyxcbiAgICAgICAgICAgICAgICBtYXJrTGVmdDogJzBweCdcbiAgICAgICAgICAgIH0sICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbXB1dGVUaW1lKClcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgfSBlbHNlIGlmICh3cmFwUG9zaSA+IG1vdmVXaWR0aCkge1xuICAgICAgICAgICAgbGV0IFJlbWFpbmluZ1RpbWUgPSB3cmFwUG9zaSAtIG1vdmVXaWR0aFxuICAgICAgICAgICAgLy8gd3JhcEltZy5zdHlsZS5sZWZ0ID0gYC0ke21vdmVXaWR0aH1weGBcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIHdyYXBJbWdMZWZ0OiAtbW92ZVdpZHRoICsgJ3B4JyxcbiAgICAgICAgICAgICAgICBtYXJrTGVmdDogJzBweCdcbiAgICAgICAgICAgIH0sICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbXB1dGVUaW1lKClcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIGlmIChSZW1haW5pbmdUaW1lIDwgbWFya01vdmVXaWR0aCkge1xuICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIG1hcmtMZWZ0OiBSZW1haW5pbmdUaW1lICsgJ3B4J1xuICAgICAgICAgICAgICAgIH0sICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21wdXRlVGltZSgpXG4gICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgIC8vIG1hcmsuc3R5bGUubGVmdCA9IGAke1JlbWFpbmluZ1RpbWV9cHhgXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICBtYXJrTGVmdDogbWFya01vdmVXaWR0aCArICdweCdcbiAgICAgICAgICAgICAgICB9LCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tcHV0ZVRpbWUoKVxuICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfVxuICAgIC8v5ruR5Z2XXG4gICAgc2lsZGVyRHJhZyhvYmosIGZsYWcpIHtcbiAgICAgICAgbGV0IGRpc1gsXG4gICAgICAgICAgICB0eXBlLFxuICAgICAgICAgICAgZGlzVyxcbiAgICAgICAgICAgIGRpc1gxLFxuICAgICAgICAgICAgZGlzTDtcbiAgICAgICAgbGV0IHdyYXBXaWR0aCA9IHRoaXMud3JhcEltZy5jdXJyZW50Lm9mZnNldFdpZHRoO1xuICAgICAgICBsZXQge3N0ZXBJbnRlcnZhbH0gPSB0aGlzLnN0YXRlO1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXNcblxuICAgICAgICBmdW5jdGlvbiBvYmpNb3ZlKGV2KSB7XG5cbiAgICAgICAgICAgIGlmIChldi5vZmZzZXRYIDwgMTApIHtcbiAgICAgICAgICAgICAgICB0eXBlID0gJ2xlZnQnO1xuICAgICAgICAgICAgICAgIG9iai5zdHlsZS5jdXJzb3IgPSAndy1yZXNpemUnO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChldi5vZmZzZXRYID4gb2JqLm9mZnNldFdpZHRoIC0gMTApIHtcbiAgICAgICAgICAgICAgICB0eXBlID0gJ3JpZ2h0JztcbiAgICAgICAgICAgICAgICBvYmouc3R5bGUuY3Vyc29yID0gJ2UtcmVzaXplJztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdHlwZSA9ICcnO1xuICAgICAgICAgICAgICAgIG9iai5zdHlsZS5jdXJzb3IgPSAnZGVmYXVsdCc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFmbGFnKSB7XG4gICAgICAgICAgICBvYmoub25tb3VzZW1vdmUgPSBvYmpNb3ZlXG4gICAgICAgIH1cbiAgICAgICAgb2JqLm9ubW91c2Vkb3duID0gZnVuY3Rpb24gKGV2KSB7XG4gICAgICAgICAgICBpZiAoIWZsYWcpIHtcbiAgICAgICAgICAgICAgICBvYmoub25tb3VzZW1vdmUgPSBudWxsXG4gICAgICAgICAgICAgICAgaWYgKGV2Lm9mZnNldFggPCAxMCkge1xuICAgICAgICAgICAgICAgICAgICB0eXBlID0gJ2xlZnQnO1xuICAgICAgICAgICAgICAgICAgICBvYmouc3R5bGUuY3Vyc29yID0gJ3ctcmVzaXplJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGV2Lm9mZnNldFggPiBvYmoub2Zmc2V0V2lkdGggLSAxMCkge1xuICAgICAgICAgICAgICAgICAgICB0eXBlID0gJ3JpZ2h0JztcbiAgICAgICAgICAgICAgICAgICAgb2JqLnN0eWxlLmN1cnNvciA9ICdlLXJlc2l6ZSc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGlzWDEgPSBldi5jbGllbnRYO1xuICAgICAgICAgICAgZGlzVyA9IG9iai5vZmZzZXRXaWR0aDtcbiAgICAgICAgICAgIGRpc0wgPSBvYmoub2Zmc2V0TGVmdDtcbiAgICAgICAgICAgIGRpc1ggPSBldi5jbGllbnRYIC0gb2JqLm9mZnNldExlZnQ7XG5cbiAgICAgICAgICAgIGRvY3VtZW50Lm9ubW91c2Vtb3ZlID0gZnVuY3Rpb24gbW92ZShldikge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCB3ID0gZXYuY2xpZW50WCAtIGRpc1gxO1xuICAgICAgICAgICAgICAgICAgICBpZiAob2JqLm9mZnNldFdpZHRoID4gd3JhcFdpZHRoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvYmouc3R5bGUud2lkdGggPSB3cmFwV2lkdGggKyAncHgnO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvYmoub2Zmc2V0V2lkdGggKyBvYmoub2Zmc2V0TGVmdCA+IHdyYXBXaWR0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgb2JqLnN0eWxlLndpZHRoID0gd3JhcFdpZHRoIC0gb2JqLm9mZnNldExlZnQgKyAncHgnO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvYmoub2Zmc2V0V2lkdGggPCBzdGVwSW50ZXJ2YWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9iai5zdHlsZS53aWR0aCA9IHN0ZXBJbnRlcnZhbCArICdweCc7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGUgPT0gJ3JpZ2h0Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgb2JqLnN0eWxlLndpZHRoID0gdyArIGRpc1cgKyAncHgnO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlID09ICdsZWZ0Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRpc0wgKyB3IDw9IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBvYmouc3R5bGUud2lkdGhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmouc3R5bGUubGVmdCA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgb2JqLnN0eWxlLndpZHRoID0gZGlzVyAtIHcgKyAncHgnO1xuICAgICAgICAgICAgICAgICAgICAgICAgb2JqLnN0eWxlLmxlZnQgPSBkaXNMICsgdyArICdweCc7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZXQgY3VycmVudFggPSBldi5jbGllbnRYIC0gZGlzWDtcblxuICAgICAgICAgICAgICAgIGlmICghZmxhZykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudFggPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50WCA9IDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRYID4gd3JhcFdpZHRoIC0gb2JqLm9mZnNldFdpZHRoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50WCA9IHdyYXBXaWR0aCAtIG9iai5vZmZzZXRXaWR0aDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50WCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRYID0gMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudFggPCB3cmFwV2lkdGggLSBvYmouZGF0YXNldC53aWR0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFggPSB3cmFwV2lkdGggLSBvYmouZGF0YXNldC53aWR0aDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBvYmouc3R5bGUubGVmdCA9IGN1cnJlbnRYICsgJ3B4JztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRvY3VtZW50Lm9ubW91c2V1cCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5vbm1vdXNlbW92ZSA9IG51bGxcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5vbm1vdXNldXAgPSBudWxsXG4gICAgICAgICAgICAgICAgdHlwZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICBvYmouc3R5bGUuY3Vyc29yID0gJ2RlZmF1bHQnO1xuICAgICAgICAgICAgICAgIHNlbGYuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICBtYXJrTGVmdDogc2VsZi5tYXJrLmN1cnJlbnQub2Zmc2V0TGVmdCArICdweCcsXG4gICAgICAgICAgICAgICAgICAgIHdyYXBJbWdMZWZ0OiBzZWxmLndyYXBJbWcuY3VycmVudC5vZmZzZXRMZWZ0ICsgJ3B4J1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgaWYgKCFmbGFnKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgb2JqLm9ubW91c2Vtb3ZlID0gb2JqTW92ZVxuICAgICAgICAgICAgICAgICAgICBpZiAob2JqLm9mZnNldFdpZHRoICsgb2JqLm9mZnNldExlZnQgPiB3cmFwV2lkdGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9iai5zdHlsZS53aWR0aCA9IHdyYXBXaWR0aCAtIG9iai5vZmZzZXRMZWZ0ICsgJ3B4JztcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgc2VsZi5jb21wdXRlVGltZShvYmopXG5cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIH07XG4gICAgfVxuICAgIGNoYW5nZVN0YXJ0VGltZShlKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3N0YXJ0VGltZTogZS5jdXJyZW50VGFyZ2V0LnZhbHVlLGJ1dHRvblR5cGU6J3N0YXJ0VGltZSd9KVxuICAgIH1cbiAgICBjaGFuZ2VTdGFydERhdGFTaXRlKGUpe1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtzdGFydERhdGFTaXRlOiBlLmN1cnJlbnRUYXJnZXQudmFsdWUsYnV0dG9uVHlwZTonc3RhcnRQb2ludCd9KVxuXG4gICAgfVxuICAgIHVwZGF0ZVJlbmRlcigpIHtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuc2V0U3RhdHJUaW1lKClcbiAgICB9XG4gICAgXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQge1xuICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICBwaWNVcmwsXG4gICAgICAgICAgICB3aWR0aCxcbiAgICAgICAgICAgIHNldFRpbWVTaG93LFxuICAgICAgICAgICAgaGVpZ2h0LFxuICAgICAgICAgICAgc3RlcFxuICAgICAgICB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgbGV0IHtzdGVwSW50ZXJ2YWwsIHN1YnNjcmlwdCwgbWFya0xlZnQsIHdyYXBJbWdMZWZ0LCBzdGFydFRpbWUsc3RhcnREYXRhU2l0ZX0gPSB0aGlzLnN0YXRlO1xuICAgICAgICBpZiAodHlwZW9mIHdpZHRoID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgd2lkdGggPSB3aWR0aCAqIHN0ZXBJbnRlcnZhbCArICdweCdcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBpZD17aWR9PlxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwid3JhcFwiXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiB3aWR0aFxuICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3cmFwSW1nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiB3cmFwSW1nTGVmdCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogaGVpZ2h0ICsgMjAgKyAncHgnXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICByZWY9e3RoaXMud3JhcEltZ30+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXt0aGlzLmltZ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e3BpY1VybH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogaGVpZ2h0ICsgJ3B4J1xuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiLz4gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3N1YnNjcmlwdC5tYXAoKGl0ZW0saW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiBzdGVwSW50ZXJ2YWwgKiBpdGVtICsgJ3B4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICcxMnB4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzVweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzFweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjOTk5J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luTGVmdDogJy01MCUnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW19bWluXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8aVxuICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXt0aGlzLm1hcmt9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtYXJrXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogc3RlcEludGVydmFsICsgJ3B4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogaGVpZ2h0ICsgJ3B4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IG1hcmtMZWZ0XG4gICAgICAgICAgICAgICAgICAgIH19PjwvaT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB7c2V0VGltZVNob3cgJiYgPGRpdiBjbGFzc05hbWU9J2J1dHRvbSc+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3N0YXJ0VGltZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2hhbmdlU3RhcnRUaW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAuYmluZCh0aGlzKX0vPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e21hcmdpblJpZ2h0OicyMHB4J319XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnVwZGF0ZVJlbmRlci5iaW5kKHRoaXMpfT5zdGFydFRpbWU8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3N0YXJ0RGF0YVNpdGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuY2hhbmdlU3RhcnREYXRhU2l0ZS5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy51cGRhdGVSZW5kZXIuYmluZCh0aGlzKX0+c3RhcnRQb2ludDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2Pn1cbiAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbiAgICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKXtcbiAgICAgICAgaWYocHJldlByb3BzLnN0ZXAgIT0gdGhpcy5wcm9wcy5zdGVwKXtcbiAgICAgICAgICAgIHRoaXMuc2V0U3Vic2NyaXB0KClcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIHdyYXBJbWdMZWZ0OjAsXG4gICAgICAgICAgICAgICAgbWFya0xlZnQ6MFxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG59XG5cbk15U2xpZGVyLmRlZmF1bHRQcm9wcyA9IHtcbiAgICB3aWR0aDogMTAsXG4gICAgaGVpZ2h0OiA4MCxcbiAgICBzZXRUaW1lU2hvdzogdHJ1ZSxcbiAgICB0eXBlU2l0ZTogZmFsc2Vcbn07XG5cbk15U2xpZGVyLnByb3BUeXBlcyA9IHtcbiAgICAvKipcbiAgICAgKiBUaGUgSUQgdXNlZCB0byBpZGVudGlmeSB0aGlzIGNvbXBvbmVudCBpbiBEYXNoIGNhbGxiYWNrcy5cbiAgICAgKi9cbiAgICBpZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAvKipcbiAgICAgKiBUaGUgcGljVXJsIGRpc3BsYXllZCBpbiB0aGUgc3RyaW5nLlxuICAgICAqIOaAu+mihOiniOWbvui3r+W+hFxuICAgICAqL1xuICAgIHBpY1VybDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAvKipcbiAgICAgKiDpooTop4jlm77mgLvml7bpl7TvvIg2MS4xN++8iVxuICAgICAqL1xuICAgIHN0ZXA6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgLyoqXG4gICAgICogVGhlIHZhbHVlIGRpc3BsYXllZCBpbiB0aGUgaW5wdXQuXG4gICAgICog6L+U5Zue5byA5aeL5pe26Ze05ZKM57uT5p2f5pe26Ze0IHt2YWx1ZTp7aW1nU3RhcnRUaW1lLGltZ0VuZFRpbWV9fVxuICAgICAqL1xuICAgIHZhbHVlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMub2JqZWN0LCBQcm9wVHlwZXMuYXJyYXldKSxcblxuICAgIC8qKlxuICAgICAqIERhc2gtYXNzaWduZWQgY2FsbGJhY2sgdGhhdCBzaG91bGQgYmUgY2FsbGVkIHRvIHJlcG9ydCBwcm9wZXJ0eSBjaGFuZ2VzXG4gICAgICogdG8gRGFzaCwgdG8gbWFrZSB0aGVtIGF2YWlsYWJsZSBmb3IgY2FsbGJhY2tzLlxuICAgICAqL1xuICAgIC8qKlxuICAgICAqIOi/lOWbnuiMg+WbtOaVsOaNrueahOiMg+WbtCjlm77niYflj6/op4bljLrml7bpl7TmrrUpXG4gICAgICovXG4gICAgcmFuZ2U6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5vYmplY3RdKSxcbiAgICBzZXRQcm9wczogUHJvcFR5cGVzLmZ1bmMsXG4gICAgLyoqXG4gICAgICog5Y+v6KeG5Yy65a695bqm6buY6K6kMTDliIbpkp9cbiAgICAgKi9cbiAgICB3aWR0aDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pLFxuICAgIC8qKlxuICAgICAqIOmAieaLqeW8gOWni+aXtumXtOahhuaYr+WQpuaYvuekulxuICAgICAqL1xuICAgIHNldFRpbWVTaG93OiBQcm9wVHlwZXMuYm9vbCxcbiAgICAvKipcbiAgICAgKiDorqHnrpfmqKHlvI/ml7bpl7TmqKHlvI/vvIx0cnVl5Li65bqV6YOo5Zu+54mH5Li65qC55o2u77yMZmFsc2XkuLptYXJr5Z2X5Li65L6d5o2uXG4gICAgICovXG4gICAgdHlwZVNpdGU6IFByb3BUeXBlcy5ib29sLFxuICAgIC8qKlxuICAgICAqIOWbvueJh+mrmOW6plxuICAgICAqL1xuICAgIGhlaWdodDogUHJvcFR5cGVzLm51bWJlclxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=