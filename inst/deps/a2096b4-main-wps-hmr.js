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
        startDataSite = 300000 * startTime;
        this.setState({
          startDataSite: startDataSite
        });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teV9zbGlkZXIvLi9zcmMvbGliL2NvbXBvbmVudHMvTXlTbGlkZXIucmVhY3QuanMiXSwibmFtZXMiOlsiTXlTbGlkZXIiLCJwcm9wcyIsImltZyIsIlJlYWN0IiwiY3JlYXRlUmVmIiwibWFyayIsIndyYXBJbWciLCJzdGF0ZSIsInN0ZXBJbnRlcnZhbCIsInN1YnNjcmlwdCIsImZsYWciLCJzdGFydFRpbWUiLCJ3cmFwSW1nTGVmdCIsIm1hcmtMZWZ0Iiwic3RhcnREYXRhU2l0ZSIsImJ1dHRvblR5cGUiLCJzZXRTdWJzY3JpcHQiLCJvYmoiLCJzZXRQcm9wcyIsInR5cGVTaXRlIiwibWFya1RpbWUiLCJjdXJyZW50Iiwib2Zmc2V0TGVmdCIsImVuZFRpbWUiLCJvZmZzZXRXaWR0aCIsImltZ1N0YXJ0VGltZSIsIk1hdGgiLCJhYnMiLCJpbWdFbmRUaW1lIiwicGFyZW50Tm9kZSIsInJhbmdlIiwidmFsdWUiLCJzZXRTdGF0ZSIsInRvRml4ZWQiLCJ3cmFwVGltZSIsIm1hcmtTdGFydCIsInN0YXJ0VGltZTEiLCJlbmRUaW1lMSIsInN0ZXAiLCJzZWxmIiwiYWRkRXZlbnRMaXN0ZW5lciIsImkiLCJwdXNoIiwiZGF0YXNldCIsIndpZHRoIiwic2lsZGVyRHJhZyIsImNvbXB1dGVUaW1lIiwidHlwZSIsIm1vdmVXaWR0aCIsIm1hcmtNb3ZlV2lkdGgiLCJ3cmFwUG9zaSIsIlJlbWFpbmluZ1RpbWUiLCJkaXNYIiwiZGlzVyIsImRpc1gxIiwiZGlzTCIsIndyYXBXaWR0aCIsIm9iak1vdmUiLCJldiIsIm9mZnNldFgiLCJzdHlsZSIsImN1cnNvciIsIm9ubW91c2Vtb3ZlIiwib25tb3VzZWRvd24iLCJjbGllbnRYIiwiZG9jdW1lbnQiLCJtb3ZlIiwidyIsImxlZnQiLCJjdXJyZW50WCIsIm9ubW91c2V1cCIsInVuZGVmaW5lZCIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwiZSIsImN1cnJlbnRUYXJnZXQiLCJzZXRTdGF0clRpbWUiLCJpZCIsInBpY1VybCIsInNldFRpbWVTaG93IiwiaGVpZ2h0IiwibWFwIiwiaXRlbSIsImluZGV4IiwicG9zaXRpb24iLCJmb250U2l6ZSIsImJvdHRvbSIsImRpc3BsYXkiLCJiYWNrZ3JvdW5kQ29sb3IiLCJtYXJnaW5MZWZ0IiwiY2hhbmdlU3RhcnRUaW1lIiwiYmluZCIsIm1hcmdpblJpZ2h0IiwidXBkYXRlUmVuZGVyIiwiY2hhbmdlU3RhcnREYXRhU2l0ZSIsInByZXZQcm9wcyIsIkNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsIm51bWJlciIsIm9uZU9mVHlwZSIsIm9iamVjdCIsImFycmF5IiwiZnVuYyIsImJvb2wiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7SUFRcUJBLFE7Ozs7O0FBQ2pCLG9CQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2YsOEJBQU1BLEtBQU47QUFDQSxVQUFLQyxHQUFMLGdCQUFXQyw0Q0FBSyxDQUFDQyxTQUFOLEVBQVg7QUFDQSxVQUFLQyxJQUFMLGdCQUFZRiw0Q0FBSyxDQUFDQyxTQUFOLEVBQVo7QUFDQSxVQUFLRSxPQUFMLGdCQUFlSCw0Q0FBSyxDQUFDQyxTQUFOLEVBQWY7QUFDQSxVQUFLRyxLQUFMLEdBQWE7QUFDVEMsa0JBQVksRUFBRSxDQURMO0FBRVRDLGVBQVMsRUFBRSxFQUZGO0FBR1RDLFVBQUksRUFBRSxJQUhHO0FBSVRDLGVBQVMsRUFBRSxDQUpGO0FBS1RDLGlCQUFXLEVBQUUsQ0FMSjtBQU1UQyxjQUFRLEVBQUUsQ0FORDtBQU9UQyxtQkFBYSxFQUFDLENBUEw7QUFRVEMsZ0JBQVUsRUFBQztBQVJGLEtBQWI7QUFMZTtBQWVsQjs7Ozt3Q0FDbUI7QUFDaEIsV0FBS0MsWUFBTDtBQUNILEssQ0FFRDs7OztnQ0FDWUMsRyxFQUFLO0FBQUEsd0JBQ2MsS0FBS2hCLEtBRG5CO0FBQUEsVUFDUmlCLFFBRFEsZUFDUkEsUUFEUTtBQUFBLFVBQ0VDLFFBREYsZUFDRUEsUUFERjtBQUFBLFVBRVJYLFlBRlEsR0FFUSxLQUFLRCxLQUZiLENBRVJDLFlBRlE7QUFHYixVQUFJWSxRQUFRLEdBQUcsS0FBS2YsSUFBTCxDQUFVZ0IsT0FBVixDQUFrQkMsVUFBbEIsR0FBK0JkLFlBQTlDLENBSGEsQ0FLYjs7QUFDQSxVQUFJRyxTQUFTLEdBQUcsQ0FBQ1MsUUFBakIsQ0FOYSxDQU9iOztBQUNBLFVBQUlHLE9BQU8sR0FBRyxFQUFFLEtBQUtsQixJQUFMLENBQVVnQixPQUFWLENBQWtCRyxXQUFsQixHQUFnQ2hCLFlBQWhDLEdBQWdEWSxRQUFsRCxDQUFkLENBUmEsQ0FTYjs7QUFDQSxVQUFJSyxZQUFZLEdBQUdDLElBQUksQ0FBQ0MsR0FBTCxDQUFTLEtBQUtyQixPQUFMLENBQWFlLE9BQWIsQ0FBcUJDLFVBQTlCLElBQTRDZCxZQUEvRCxDQVZhLENBV2I7O0FBQ0EsVUFBSW9CLFVBQVUsR0FBRyxLQUFLdEIsT0FBTCxDQUFhZSxPQUFiLENBQXFCUSxVQUFyQixDQUFnQ0wsV0FBaEMsR0FBOENoQixZQUE5QyxHQUE2RGlCLFlBQTlFOztBQUVBLFVBQUlOLFFBQUosRUFBYztBQUNWLFlBQUksQ0FBQ0YsR0FBTCxFQUFVO0FBQ047QUFDQUMsa0JBQVEsQ0FBQztBQUNMWSxpQkFBSyxFQUFFO0FBQ0hMLDBCQUFZLEVBQVpBLFlBREc7QUFFSEcsd0JBQVUsRUFBVkE7QUFGRztBQURGLFdBQUQsQ0FBUjtBQU1BVixrQkFBUSxDQUFDO0FBQ0xhLGlCQUFLLEVBQUU7QUFDSHBCLHVCQUFTLEVBQVRBLFNBREc7QUFFSFkscUJBQU8sRUFBUEE7QUFGRztBQURGLFdBQUQsQ0FBUjtBQU1IOztBQUNELFlBQUlOLEdBQUcsS0FBSyxLQUFLWCxPQUFMLENBQWFlLE9BQXpCLEVBQWtDO0FBQzlCO0FBQ0FILGtCQUFRLENBQUM7QUFDTFksaUJBQUssRUFBRTtBQUNITCwwQkFBWSxFQUFaQSxZQURHO0FBRUhHLHdCQUFVLEVBQVZBO0FBRkc7QUFERixXQUFELENBQVIsQ0FGOEIsQ0FROUI7O0FBQ0FWLGtCQUFRLENBQUM7QUFDTGEsaUJBQUssRUFBRTtBQUNIcEIsdUJBQVMsRUFBVEEsU0FERztBQUVIWSxxQkFBTyxFQUFQQTtBQUZHO0FBREYsV0FBRCxDQUFSO0FBTUgsU0FmRCxNQWVPO0FBQ0g7QUFDQUwsa0JBQVEsQ0FBQztBQUNMYSxpQkFBSyxFQUFFO0FBQ0hwQix1QkFBUyxFQUFUQSxTQURHO0FBRUhZLHFCQUFPLEVBQVBBO0FBRkc7QUFERixXQUFELENBQVI7QUFNSDs7QUFDRCxhQUFLUyxRQUFMLENBQWM7QUFDVnJCLG1CQUFTLEVBQUUsQ0FBQ2MsWUFBWSxHQUFHZCxTQUFoQixFQUEyQnNCLE9BQTNCLENBQW1DLENBQW5DO0FBREQsU0FBZDtBQUdILE9BM0NELE1BMkNPO0FBQ0gsWUFBSUMsUUFBUSxHQUFHUixJQUFJLENBQUNDLEdBQUwsQ0FBUyxLQUFLckIsT0FBTCxDQUFhZSxPQUFiLENBQXFCQyxVQUE5QixDQUFmO0FBQ0EsWUFBSWEsU0FBUyxHQUFHLEtBQUs5QixJQUFMLENBQVVnQixPQUFWLENBQWtCQyxVQUFsQztBQUNBLFlBQUljLFVBQVUsR0FBRyxDQUFDRixRQUFRLEdBQUdDLFNBQVosSUFBeUIzQixZQUExQztBQUNBLFlBQUk2QixRQUFRLEdBQUcsQ0FBQyxLQUFLaEMsSUFBTCxDQUFVZ0IsT0FBVixDQUFrQkcsV0FBbEIsR0FBZ0NVLFFBQWhDLEdBQTJDQyxTQUE1QyxJQUF5RDNCLFlBQXhFO0FBRUFVLGdCQUFRLENBQUM7QUFDTGEsZUFBSyxFQUFFO0FBQ0hwQixxQkFBUyxFQUFFeUIsVUFEUjtBQUVIYixtQkFBTyxFQUFFYztBQUZOO0FBREYsU0FBRCxDQUFSO0FBTUEsYUFBS0wsUUFBTCxDQUFjO0FBQ1ZyQixtQkFBUyxFQUFFLENBQUMsQ0FBRXlCLFVBQUgsRUFBZUgsT0FBZixDQUF1QixDQUF2QjtBQURELFNBQWQ7QUFHSDtBQUVKLEssQ0FDRDs7OzttQ0FDZTtBQUFBLFVBQ05LLElBRE0sR0FDRSxLQUFLckMsS0FEUCxDQUNOcUMsSUFETTtBQUFBLFVBRU41QixJQUZNLEdBRUUsS0FBS0gsS0FGUCxDQUVORyxJQUZNO0FBR1gsVUFBSTZCLElBQUksR0FBRyxJQUFYO0FBQ0EsVUFBSTlCLFNBQVMsR0FBRyxFQUFoQjtBQUVBLFdBQ0tQLEdBREwsQ0FFS21CLE9BRkwsQ0FHS21CLGdCQUhMLENBR3NCLE1BSHRCLEVBRzhCLFlBQVk7QUFDbEMsYUFBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHSCxJQUFwQixFQUEwQkcsQ0FBQyxFQUEzQixFQUErQjtBQUMzQmhDLG1CQUFTLENBQUNpQyxJQUFWLENBQWVELENBQWY7QUFDSDs7QUFDREYsWUFBSSxDQUFDUCxRQUFMLENBQWM7QUFDVnhCLHNCQUFZLEVBQUUsS0FBS2dCLFdBQUwsR0FBbUJjLElBRHZCO0FBRVY3QixtQkFBUyxFQUFUQTtBQUZVLFNBQWQ7QUFJQThCLFlBQUksQ0FBQ2pDLE9BQUwsQ0FBYWUsT0FBYixDQUFxQnNCLE9BQXJCLENBQTZCQyxLQUE3QixHQUFxQyxLQUFLcEIsV0FBMUM7QUFDQWUsWUFBSSxDQUFDTSxVQUFMLENBQWdCTixJQUFJLENBQUNsQyxJQUFMLENBQVVnQixPQUExQjtBQUNBa0IsWUFBSSxDQUFDTSxVQUFMLENBQWdCTixJQUFJLENBQUNqQyxPQUFMLENBQWFlLE9BQTdCLEVBQXNDLElBQXRDOztBQUNBLFlBQUlYLElBQUosRUFBVTtBQUNONkIsY0FBSSxDQUFDTyxXQUFMO0FBQ0FQLGNBQUksQ0FBQ1AsUUFBTCxDQUFjO0FBQUN0QixnQkFBSSxFQUFFO0FBQVAsV0FBZDtBQUNIO0FBQ0osT0FsQkw7QUFvQkgsSyxDQUNEOzs7O2lDQUNhcUMsSSxFQUFNO0FBQUE7O0FBQUEsd0JBRTBDLEtBQUt4QyxLQUYvQztBQUFBLFVBRVZDLFlBRlUsZUFFVkEsWUFGVTtBQUFBLFVBRUlHLFNBRkosZUFFSUEsU0FGSjtBQUFBLFVBRWNHLGFBRmQsZUFFY0EsYUFGZDtBQUFBLFVBRTRCQyxVQUY1QixlQUU0QkEsVUFGNUI7QUFBQSxVQUlEVCxPQUpDLEdBSVUsS0FBS0EsT0FKZixDQUlWZSxPQUpVO0FBQUEsVUFLRGhCLElBTEMsR0FLTyxLQUFLQSxJQUxaLENBS1ZnQixPQUxVOztBQU1mLFVBQUdOLFVBQVUsSUFBSSxZQUFqQixFQUE4QjtBQUUxQkosaUJBQVMsR0FBR0csYUFBYSxHQUFDLE1BQTFCLENBRjBCLENBRzFCO0FBQ0gsT0FKRCxNQUlNLElBQUdDLFVBQVUsSUFBSSxXQUFqQixFQUE2QjtBQUUvQkQscUJBQWEsR0FBRyxTQUFPSCxTQUF2QjtBQUNBLGFBQUtxQixRQUFMLENBQWM7QUFBQ2xCLHVCQUFhLEVBQWJBO0FBQUQsU0FBZDtBQUNIOztBQUNELFVBQUlrQyxTQUFTLEdBQUcxQyxPQUFPLENBQUNxQyxPQUFSLENBQWdCQyxLQUFoQixHQUF3QnRDLE9BQU8sQ0FBQ2tCLFdBQWhEO0FBQ0EsVUFBSXlCLGFBQWEsR0FBRzNDLE9BQU8sQ0FBQ2tCLFdBQVIsR0FBc0JuQixJQUFJLENBQUNtQixXQUEvQztBQUNBLFVBQUkwQixRQUFRLEdBQUd2QyxTQUFTLEdBQUdILFlBQTNCOztBQUVBLFVBQUkwQyxRQUFRLElBQUlGLFNBQWhCLEVBQTJCO0FBQ3ZCO0FBQ0EsYUFBS2hCLFFBQUwsQ0FBYztBQUNWcEIscUJBQVcsRUFBRSxDQUFDc0MsUUFBRCxHQUFZLElBRGY7QUFFVnJDLGtCQUFRLEVBQUU7QUFGQSxTQUFkLEVBR0csWUFBTTtBQUNMLGdCQUFJLENBQUNpQyxXQUFMO0FBQ0gsU0FMRDtBQU9ILE9BVEQsTUFTTyxJQUFJSSxRQUFRLEdBQUdGLFNBQWYsRUFBMEI7QUFDN0IsWUFBSUcsYUFBYSxHQUFHRCxRQUFRLEdBQUdGLFNBQS9CLENBRDZCLENBRTdCOztBQUNBLGFBQUtoQixRQUFMLENBQWM7QUFDVnBCLHFCQUFXLEVBQUUsQ0FBQ29DLFNBQUQsR0FBYSxJQURoQjtBQUVWbkMsa0JBQVEsRUFBRTtBQUZBLFNBQWQsRUFHRyxZQUFNO0FBQ0wsZ0JBQUksQ0FBQ2lDLFdBQUw7QUFDSCxTQUxEOztBQU9BLFlBQUlLLGFBQWEsR0FBR0YsYUFBcEIsRUFBbUM7QUFFL0IsZUFBS2pCLFFBQUwsQ0FBYztBQUNWbkIsb0JBQVEsRUFBRXNDLGFBQWEsR0FBRztBQURoQixXQUFkLEVBRUcsWUFBTTtBQUNMLGtCQUFJLENBQUNMLFdBQUw7QUFDSCxXQUpELEVBRitCLENBUS9CO0FBQ0gsU0FURCxNQVNPO0FBQ0gsZUFBS2QsUUFBTCxDQUFjO0FBQ1ZuQixvQkFBUSxFQUFFb0MsYUFBYSxHQUFHO0FBRGhCLFdBQWQsRUFFRyxZQUFNO0FBQ0wsa0JBQUksQ0FBQ0gsV0FBTDtBQUNILFdBSkQ7QUFNSDtBQUNKO0FBRUosSyxDQUNEOzs7OytCQUNXN0IsRyxFQUFLUCxJLEVBQU07QUFDbEIsVUFBSTBDLElBQUosRUFDSUwsSUFESixFQUVJTSxJQUZKLEVBR0lDLEtBSEosRUFJSUMsSUFKSjtBQUtBLFVBQUlDLFNBQVMsR0FBRyxLQUFLbEQsT0FBTCxDQUFhZSxPQUFiLENBQXFCRyxXQUFyQztBQU5rQixVQU9iaEIsWUFQYSxHQU9HLEtBQUtELEtBUFIsQ0FPYkMsWUFQYTtBQVFsQixVQUFJK0IsSUFBSSxHQUFHLElBQVg7O0FBRUEsZUFBU2tCLE9BQVQsQ0FBaUJDLEVBQWpCLEVBQXFCO0FBRWpCLFlBQUlBLEVBQUUsQ0FBQ0MsT0FBSCxHQUFhLEVBQWpCLEVBQXFCO0FBQ2pCWixjQUFJLEdBQUcsTUFBUDtBQUNBOUIsYUFBRyxDQUFDMkMsS0FBSixDQUFVQyxNQUFWLEdBQW1CLFVBQW5CO0FBQ0gsU0FIRCxNQUdPLElBQUlILEVBQUUsQ0FBQ0MsT0FBSCxHQUFhMUMsR0FBRyxDQUFDTyxXQUFKLEdBQWtCLEVBQW5DLEVBQXVDO0FBQzFDdUIsY0FBSSxHQUFHLE9BQVA7QUFDQTlCLGFBQUcsQ0FBQzJDLEtBQUosQ0FBVUMsTUFBVixHQUFtQixVQUFuQjtBQUNILFNBSE0sTUFHQTtBQUNIZCxjQUFJLEdBQUcsRUFBUDtBQUNBOUIsYUFBRyxDQUFDMkMsS0FBSixDQUFVQyxNQUFWLEdBQW1CLFNBQW5CO0FBQ0g7QUFDSjs7QUFDRCxVQUFJLENBQUNuRCxJQUFMLEVBQVc7QUFDUE8sV0FBRyxDQUFDNkMsV0FBSixHQUFrQkwsT0FBbEI7QUFDSDs7QUFDRHhDLFNBQUcsQ0FBQzhDLFdBQUosR0FBa0IsVUFBVUwsRUFBVixFQUFjO0FBQzVCLFlBQUksQ0FBQ2hELElBQUwsRUFBVztBQUNQTyxhQUFHLENBQUM2QyxXQUFKLEdBQWtCLElBQWxCOztBQUNBLGNBQUlKLEVBQUUsQ0FBQ0MsT0FBSCxHQUFhLEVBQWpCLEVBQXFCO0FBQ2pCWixnQkFBSSxHQUFHLE1BQVA7QUFDQTlCLGVBQUcsQ0FBQzJDLEtBQUosQ0FBVUMsTUFBVixHQUFtQixVQUFuQjtBQUNIOztBQUNELGNBQUlILEVBQUUsQ0FBQ0MsT0FBSCxHQUFhMUMsR0FBRyxDQUFDTyxXQUFKLEdBQWtCLEVBQW5DLEVBQXVDO0FBQ25DdUIsZ0JBQUksR0FBRyxPQUFQO0FBQ0E5QixlQUFHLENBQUMyQyxLQUFKLENBQVVDLE1BQVYsR0FBbUIsVUFBbkI7QUFDSDtBQUNKOztBQUNEUCxhQUFLLEdBQUdJLEVBQUUsQ0FBQ00sT0FBWDtBQUNBWCxZQUFJLEdBQUdwQyxHQUFHLENBQUNPLFdBQVg7QUFDQStCLFlBQUksR0FBR3RDLEdBQUcsQ0FBQ0ssVUFBWDtBQUNBOEIsWUFBSSxHQUFHTSxFQUFFLENBQUNNLE9BQUgsR0FBYS9DLEdBQUcsQ0FBQ0ssVUFBeEI7O0FBRUEyQyxnQkFBUSxDQUFDSCxXQUFULEdBQXVCLFNBQVNJLElBQVQsQ0FBY1IsRUFBZCxFQUFrQjtBQUNyQyxjQUFJWCxJQUFKLEVBQVU7QUFDTixnQkFBSW9CLENBQUMsR0FBR1QsRUFBRSxDQUFDTSxPQUFILEdBQWFWLEtBQXJCOztBQUNBLGdCQUFJckMsR0FBRyxDQUFDTyxXQUFKLEdBQWtCZ0MsU0FBdEIsRUFBaUM7QUFDN0J2QyxpQkFBRyxDQUFDMkMsS0FBSixDQUFVaEIsS0FBVixHQUFrQlksU0FBUyxHQUFHLElBQTlCO0FBQ0E7QUFDSDs7QUFDRCxnQkFBSXZDLEdBQUcsQ0FBQ08sV0FBSixHQUFrQlAsR0FBRyxDQUFDSyxVQUF0QixHQUFtQ2tDLFNBQXZDLEVBQWtEO0FBQzlDdkMsaUJBQUcsQ0FBQzJDLEtBQUosQ0FBVWhCLEtBQVYsR0FBa0JZLFNBQVMsR0FBR3ZDLEdBQUcsQ0FBQ0ssVUFBaEIsR0FBNkIsSUFBL0M7QUFDQTtBQUNIOztBQUNELGdCQUFJTCxHQUFHLENBQUNPLFdBQUosR0FBa0JoQixZQUF0QixFQUFvQztBQUNoQ1MsaUJBQUcsQ0FBQzJDLEtBQUosQ0FBVWhCLEtBQVYsR0FBa0JwQyxZQUFZLEdBQUcsSUFBakM7QUFDSDs7QUFDRCxnQkFBSXVDLElBQUksSUFBSSxPQUFaLEVBQXFCO0FBQ2pCOUIsaUJBQUcsQ0FBQzJDLEtBQUosQ0FBVWhCLEtBQVYsR0FBa0J1QixDQUFDLEdBQUdkLElBQUosR0FBVyxJQUE3QjtBQUNIOztBQUNELGdCQUFJTixJQUFJLElBQUksTUFBWixFQUFvQjtBQUNoQixrQkFBSVEsSUFBSSxHQUFHWSxDQUFQLElBQVksQ0FBaEIsRUFBbUI7QUFDZjtBQUNBbEQsbUJBQUcsQ0FBQzJDLEtBQUosQ0FBVVEsSUFBVixHQUFpQixDQUFqQjtBQUNBO0FBQ0g7O0FBQ0RuRCxpQkFBRyxDQUFDMkMsS0FBSixDQUFVaEIsS0FBVixHQUFrQlMsSUFBSSxHQUFHYyxDQUFQLEdBQVcsSUFBN0I7QUFDQWxELGlCQUFHLENBQUMyQyxLQUFKLENBQVVRLElBQVYsR0FBaUJiLElBQUksR0FBR1ksQ0FBUCxHQUFXLElBQTVCO0FBQ0g7O0FBQ0Q7QUFDSDs7QUFDRCxjQUFJRSxRQUFRLEdBQUdYLEVBQUUsQ0FBQ00sT0FBSCxHQUFhWixJQUE1Qjs7QUFFQSxjQUFJLENBQUMxQyxJQUFMLEVBQVc7QUFDUCxnQkFBSTJELFFBQVEsR0FBRyxDQUFmLEVBQWtCO0FBQ2RBLHNCQUFRLEdBQUcsQ0FBWDtBQUNIOztBQUNELGdCQUFJQSxRQUFRLEdBQUdiLFNBQVMsR0FBR3ZDLEdBQUcsQ0FBQ08sV0FBL0IsRUFBNEM7QUFDeEM2QyxzQkFBUSxHQUFHYixTQUFTLEdBQUd2QyxHQUFHLENBQUNPLFdBQTNCO0FBQ0g7QUFDSixXQVBELE1BT087QUFDSCxnQkFBSTZDLFFBQVEsR0FBRyxDQUFmLEVBQWtCO0FBQ2RBLHNCQUFRLEdBQUcsQ0FBWDtBQUNIOztBQUNELGdCQUFJQSxRQUFRLEdBQUdiLFNBQVMsR0FBR3ZDLEdBQUcsQ0FBQzBCLE9BQUosQ0FBWUMsS0FBdkMsRUFBOEM7QUFDMUN5QixzQkFBUSxHQUFHYixTQUFTLEdBQUd2QyxHQUFHLENBQUMwQixPQUFKLENBQVlDLEtBQW5DO0FBQ0g7QUFDSjs7QUFDRDNCLGFBQUcsQ0FBQzJDLEtBQUosQ0FBVVEsSUFBVixHQUFpQkMsUUFBUSxHQUFHLElBQTVCO0FBQ0gsU0E5Q0Q7O0FBK0NBSixnQkFBUSxDQUFDSyxTQUFULEdBQXFCLFlBQVk7QUFDN0JMLGtCQUFRLENBQUNILFdBQVQsR0FBdUIsSUFBdkI7QUFDQUcsa0JBQVEsQ0FBQ0ssU0FBVCxHQUFxQixJQUFyQjtBQUNBdkIsY0FBSSxHQUFHd0IsU0FBUDtBQUNBdEQsYUFBRyxDQUFDMkMsS0FBSixDQUFVQyxNQUFWLEdBQW1CLFNBQW5CO0FBQ0F0QixjQUFJLENBQUNQLFFBQUwsQ0FBYztBQUNWbkIsb0JBQVEsRUFBRTBCLElBQUksQ0FBQ2xDLElBQUwsQ0FBVWdCLE9BQVYsQ0FBa0JDLFVBQWxCLEdBQStCLElBRC9CO0FBRVZWLHVCQUFXLEVBQUUyQixJQUFJLENBQUNqQyxPQUFMLENBQWFlLE9BQWIsQ0FBcUJDLFVBQXJCLEdBQWtDO0FBRnJDLFdBQWQ7O0FBSUEsY0FBSSxDQUFDWixJQUFMLEVBQVc7QUFFUE8sZUFBRyxDQUFDNkMsV0FBSixHQUFrQkwsT0FBbEI7O0FBQ0EsZ0JBQUl4QyxHQUFHLENBQUNPLFdBQUosR0FBa0JQLEdBQUcsQ0FBQ0ssVUFBdEIsR0FBbUNrQyxTQUF2QyxFQUFrRDtBQUM5Q3ZDLGlCQUFHLENBQUMyQyxLQUFKLENBQVVoQixLQUFWLEdBQWtCWSxTQUFTLEdBQUd2QyxHQUFHLENBQUNLLFVBQWhCLEdBQTZCLElBQS9DO0FBQ0E7QUFDSDtBQUVKOztBQUVEaUIsY0FBSSxDQUFDTyxXQUFMLENBQWlCN0IsR0FBakI7QUFFSCxTQXJCRDs7QUFzQkF5QyxVQUFFLENBQUNjLGNBQUg7QUFDQWQsVUFBRSxDQUFDZSxlQUFIO0FBQ0gsT0F4RkQ7QUF5Rkg7OztvQ0FDZUMsQyxFQUFHO0FBQ2YsV0FBSzFDLFFBQUwsQ0FBYztBQUFDckIsaUJBQVMsRUFBRStELENBQUMsQ0FBQ0MsYUFBRixDQUFnQjVDLEtBQTVCO0FBQWtDaEIsa0JBQVUsRUFBQztBQUE3QyxPQUFkO0FBQ0g7Ozt3Q0FDbUIyRCxDLEVBQUU7QUFDbEIsV0FBSzFDLFFBQUwsQ0FBYztBQUFDbEIscUJBQWEsRUFBRTRELENBQUMsQ0FBQ0MsYUFBRixDQUFnQjVDLEtBQWhDO0FBQXNDaEIsa0JBQVUsRUFBQztBQUFqRCxPQUFkO0FBRUg7OzttQ0FDYztBQUVYLFdBQUs2RCxZQUFMO0FBQ0g7Ozs2QkFFUTtBQUFBLHlCQVFELEtBQUszRSxLQVJKO0FBQUEsVUFFRDRFLEVBRkMsZ0JBRURBLEVBRkM7QUFBQSxVQUdEQyxNQUhDLGdCQUdEQSxNQUhDO0FBQUEsVUFJRGxDLEtBSkMsZ0JBSURBLEtBSkM7QUFBQSxVQUtEbUMsV0FMQyxnQkFLREEsV0FMQztBQUFBLFVBTURDLE1BTkMsZ0JBTURBLE1BTkM7QUFBQSxVQU9EMUMsSUFQQyxnQkFPREEsSUFQQztBQUFBLHlCQVMyRSxLQUFLL0IsS0FUaEY7QUFBQSxVQVNBQyxZQVRBLGdCQVNBQSxZQVRBO0FBQUEsVUFTY0MsU0FUZCxnQkFTY0EsU0FUZDtBQUFBLFVBU3lCSSxRQVR6QixnQkFTeUJBLFFBVHpCO0FBQUEsVUFTbUNELFdBVG5DLGdCQVNtQ0EsV0FUbkM7QUFBQSxVQVNnREQsU0FUaEQsZ0JBU2dEQSxTQVRoRDtBQUFBLFVBUzBERyxhQVQxRCxnQkFTMERBLGFBVDFEOztBQVVMLFVBQUksT0FBTzhCLEtBQVAsS0FBaUIsUUFBckIsRUFBK0I7QUFDM0JBLGFBQUssR0FBR0EsS0FBSyxHQUFHcEMsWUFBUixHQUF1QixJQUEvQjtBQUNIOztBQUNELDBCQUNJO0FBQUssVUFBRSxFQUFFcUU7QUFBVCxzQkFDSTtBQUNJLGlCQUFTLEVBQUMsTUFEZDtBQUVJLGFBQUssRUFBRTtBQUNQakMsZUFBSyxFQUFFQTtBQURBO0FBRlgsc0JBS0k7QUFDSSxpQkFBUyxFQUFDLFNBRGQ7QUFFSSxhQUFLLEVBQUU7QUFDUHdCLGNBQUksRUFBRXhELFdBREM7QUFFUG9FLGdCQUFNLEVBQUVBLE1BQU0sR0FBRyxFQUFULEdBQWM7QUFGZixTQUZYO0FBTUksV0FBRyxFQUFFLEtBQUsxRTtBQU5kLHNCQU9JO0FBQ0ksV0FBRyxFQUFFLEtBQUtKLEdBRGQ7QUFFSSxXQUFHLEVBQUU0RSxNQUZUO0FBR0ksYUFBSyxFQUFFO0FBQ1BFLGdCQUFNLEVBQUVBLE1BQU0sR0FBRztBQURWLFNBSFg7QUFNSSxpQkFBUyxFQUFDLEtBTmQ7QUFPSSxXQUFHLEVBQUM7QUFQUixRQVBKLEVBZVN2RSxTQUFTLENBQUN3RSxHQUFWLENBQWMsVUFBQ0MsSUFBRCxFQUFNQyxLQUFOO0FBQUEsNEJBQ2Y7QUFDSSxhQUFHLEVBQUVBLEtBRFQ7QUFFSSxlQUFLLEVBQUU7QUFDUEMsb0JBQVEsRUFBRSxVQURIO0FBRVBoQixnQkFBSSxFQUFFNUQsWUFBWSxHQUFHMEUsSUFBZixHQUFzQixJQUZyQjtBQUdQRyxvQkFBUSxFQUFFLE1BSEg7QUFJUEMsa0JBQU0sRUFBRTtBQUpEO0FBRlgsd0JBUUk7QUFDSSxlQUFLLEVBQUU7QUFDUEMsbUJBQU8sRUFBRSxPQURGO0FBRVBQLGtCQUFNLEVBQUUsS0FGRDtBQUdQcEMsaUJBQUssRUFBRSxLQUhBO0FBSVA0QywyQkFBZSxFQUFFO0FBSlY7QUFEWCxVQVJKLGVBZUk7QUFDSSxlQUFLLEVBQUU7QUFDUEMsc0JBQVUsRUFBRTtBQURMO0FBRFgsV0FJS1AsSUFKTCxRQWZKLENBRGU7QUFBQSxPQUFkLENBZlQsQ0FMSixlQThDSTtBQUNJLFdBQUcsRUFBRSxLQUFLN0UsSUFEZDtBQUVJLGlCQUFTLEVBQUMsTUFGZDtBQUdJLGFBQUssRUFBRTtBQUNQdUMsZUFBSyxFQUFFcEMsWUFBWSxHQUFHLElBRGY7QUFFUHdFLGdCQUFNLEVBQUVBLE1BQU0sR0FBRyxJQUZWO0FBR1BaLGNBQUksRUFBRXZEO0FBSEM7QUFIWCxRQTlDSixDQURKLEVBd0RLa0UsV0FBVyxpQkFBSTtBQUFLLGlCQUFTLEVBQUM7QUFBZixzQkFDWjtBQUNJLFlBQUksRUFBQyxNQURUO0FBRUksYUFBSyxFQUFFcEUsU0FGWDtBQUdJLGdCQUFRLEVBQUUsS0FDVCtFLGVBRFMsQ0FFVEMsSUFGUyxDQUVKLElBRkk7QUFIZCxRQURZLGVBT1o7QUFDSSxhQUFLLEVBQUU7QUFBQ0MscUJBQVcsRUFBQztBQUFiLFNBRFg7QUFFSSxlQUFPLEVBQUUsS0FBS0MsWUFBTCxDQUFrQkYsSUFBbEIsQ0FBdUIsSUFBdkI7QUFGYixxQkFQWSxlQVVaO0FBQU8sWUFBSSxFQUFDLE1BQVo7QUFDSyxhQUFLLEVBQUU3RSxhQURaO0FBRUssZ0JBQVEsRUFBRSxLQUFLZ0YsbUJBQUwsQ0FBeUJILElBQXpCLENBQThCLElBQTlCO0FBRmYsUUFWWSxlQWNaO0FBQVEsZUFBTyxFQUFFLEtBQUtFLFlBQUwsQ0FBa0JGLElBQWxCLENBQXVCLElBQXZCO0FBQWpCLHNCQWRZLENBeERwQixDQURKO0FBNEVIOzs7dUNBQ2tCSSxTLEVBQVU7QUFDekIsVUFBR0EsU0FBUyxDQUFDekQsSUFBVixJQUFrQixLQUFLckMsS0FBTCxDQUFXcUMsSUFBaEMsRUFBcUM7QUFDakMsYUFBS3RCLFlBQUw7QUFDQSxhQUFLZ0IsUUFBTCxDQUFjO0FBQ1ZwQixxQkFBVyxFQUFDLENBREY7QUFFVkMsa0JBQVEsRUFBQztBQUZDLFNBQWQ7QUFJSDtBQUVKOzs7O0VBNVppQ21GLCtDOzs7QUErWnRDaEcsUUFBUSxDQUFDaUcsWUFBVCxHQUF3QjtBQUNwQnJELE9BQUssRUFBRSxFQURhO0FBRXBCb0MsUUFBTSxFQUFFLEVBRlk7QUFHcEJELGFBQVcsRUFBRSxJQUhPO0FBSXBCNUQsVUFBUSxFQUFFO0FBSlUsQ0FBeEI7QUFPQW5CLFFBQVEsQ0FBQ2tHLFNBQVQsR0FBcUI7QUFDakI7OztBQUdBckIsSUFBRSxFQUFFc0IsaURBQVMsQ0FBQ0MsTUFKRzs7QUFLakI7Ozs7QUFJQXRCLFFBQU0sRUFBRXFCLGlEQUFTLENBQUNDLE1BVEQ7O0FBVWpCOzs7QUFHQTlELE1BQUksRUFBRTZELGlEQUFTLENBQUNFLE1BYkM7O0FBY2pCOzs7O0FBSUF0RSxPQUFLLEVBQUVvRSxpREFBUyxDQUFDRyxTQUFWLENBQW9CLENBQUNILGlEQUFTLENBQUNDLE1BQVgsRUFBbUJELGlEQUFTLENBQUNFLE1BQTdCLEVBQXFDRixpREFBUyxDQUFDSSxNQUEvQyxFQUF1REosaURBQVMsQ0FBQ0ssS0FBakUsQ0FBcEIsQ0FsQlU7O0FBb0JqQjs7Ozs7QUFJQTs7O0FBR0ExRSxPQUFLLEVBQUVxRSxpREFBUyxDQUFDRyxTQUFWLENBQW9CLENBQUNILGlEQUFTLENBQUNDLE1BQVgsRUFBbUJELGlEQUFTLENBQUNJLE1BQTdCLENBQXBCLENBM0JVO0FBNEJqQnJGLFVBQVEsRUFBRWlGLGlEQUFTLENBQUNNLElBNUJIOztBQTZCakI7OztBQUdBN0QsT0FBSyxFQUFFdUQsaURBQVMsQ0FBQ0csU0FBVixDQUFvQixDQUFDSCxpREFBUyxDQUFDQyxNQUFYLEVBQW1CRCxpREFBUyxDQUFDRSxNQUE3QixDQUFwQixDQWhDVTs7QUFpQ2pCOzs7QUFHQXRCLGFBQVcsRUFBRW9CLGlEQUFTLENBQUNPLElBcENOOztBQXFDakI7OztBQUdBdkYsVUFBUSxFQUFFZ0YsaURBQVMsQ0FBQ08sSUF4Q0g7O0FBeUNqQjs7O0FBR0ExQixRQUFNLEVBQUVtQixpREFBUyxDQUFDRTtBQTVDRCxDQUFyQixDIiwiZmlsZSI6ImEyMDk2YjQtbWFpbi13cHMtaG1yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0ICcuLi8uLi9zdHlsZS9pbmRleC5jc3MnO1xuXG4vKipcbiAqIEV4YW1wbGVDb21wb25lbnQgaXMgYW4gZXhhbXBsZSBjb21wb25lbnQuXG4gKiBJdCB0YWtlcyBhIHByb3BlcnR5LCBgbGFiZWxgLCBhbmRcbiAqIGRpc3BsYXlzIGl0LlxuICogSXQgcmVuZGVycyBhbiBpbnB1dCB3aXRoIHRoZSBwcm9wZXJ0eSBgdmFsdWVgXG4gKiB3aGljaCBpcyBlZGl0YWJsZSBieSB0aGUgdXNlci5cbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNeVNsaWRlciBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLmltZyA9IFJlYWN0LmNyZWF0ZVJlZigpO1xuICAgICAgICB0aGlzLm1hcmsgPSBSZWFjdC5jcmVhdGVSZWYoKTtcbiAgICAgICAgdGhpcy53cmFwSW1nID0gUmVhY3QuY3JlYXRlUmVmKCk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBzdGVwSW50ZXJ2YWw6IDAsXG4gICAgICAgICAgICBzdWJzY3JpcHQ6IFtdLFxuICAgICAgICAgICAgZmxhZzogdHJ1ZSxcbiAgICAgICAgICAgIHN0YXJ0VGltZTogMCxcbiAgICAgICAgICAgIHdyYXBJbWdMZWZ0OiAwLFxuICAgICAgICAgICAgbWFya0xlZnQ6IDAsXG4gICAgICAgICAgICBzdGFydERhdGFTaXRlOjAsXG4gICAgICAgICAgICBidXR0b25UeXBlOicnXG4gICAgICAgIH07XG4gICAgfVxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLnNldFN1YnNjcmlwdCgpO1xuICAgIH1cblxuICAgIC8vIOiuoeeul+W8gOWni+aXtumXtOWSjOe7k+adn+aXtumXtFxuICAgIGNvbXB1dGVUaW1lKG9iaikge1xuICAgICAgICBsZXQge3NldFByb3BzLCB0eXBlU2l0ZX0gPSB0aGlzLnByb3BzO1xuICAgICAgICBsZXQge3N0ZXBJbnRlcnZhbH0gPSB0aGlzLnN0YXRlXG4gICAgICAgIGxldCBtYXJrVGltZSA9IHRoaXMubWFyay5jdXJyZW50Lm9mZnNldExlZnQgLyBzdGVwSW50ZXJ2YWw7XG5cbiAgICAgICAgLy/mu5HlnZflvIDlp4vml7bpl7RcbiAgICAgICAgbGV0IHN0YXJ0VGltZSA9ICttYXJrVGltZVxuICAgICAgICAvL+a7keWdl+e7k+adn+aXtumXtFxuICAgICAgICBsZXQgZW5kVGltZSA9ICsodGhpcy5tYXJrLmN1cnJlbnQub2Zmc2V0V2lkdGggLyBzdGVwSW50ZXJ2YWwgKyAobWFya1RpbWUpKVxuICAgICAgICAvLyDlm77niYfotbflp4vml7bpl7RcbiAgICAgICAgbGV0IGltZ1N0YXJ0VGltZSA9IE1hdGguYWJzKHRoaXMud3JhcEltZy5jdXJyZW50Lm9mZnNldExlZnQpIC8gc3RlcEludGVydmFsXG4gICAgICAgIC8v5Zu+54mH57uT5p2f5pe26Ze0XG4gICAgICAgIGxldCBpbWdFbmRUaW1lID0gdGhpcy53cmFwSW1nLmN1cnJlbnQucGFyZW50Tm9kZS5vZmZzZXRXaWR0aCAvIHN0ZXBJbnRlcnZhbCArIGltZ1N0YXJ0VGltZVxuXG4gICAgICAgIGlmICh0eXBlU2l0ZSkge1xuICAgICAgICAgICAgaWYgKCFvYmopIHtcbiAgICAgICAgICAgICAgICAvL+WIneWni+WMluaYr+WbvueJh+WSjOa7keWdl+aJgOWkhOS9jee9rlxuICAgICAgICAgICAgICAgIHNldFByb3BzKHtcbiAgICAgICAgICAgICAgICAgICAgcmFuZ2U6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGltZ1N0YXJ0VGltZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGltZ0VuZFRpbWVcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgc2V0UHJvcHMoe1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnRUaW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgZW5kVGltZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChvYmogPT09IHRoaXMud3JhcEltZy5jdXJyZW50KSB7XG4gICAgICAgICAgICAgICAgLy8g5Zu+54mH5ruR5Yqo5ZCO55qE5L2N572uXG4gICAgICAgICAgICAgICAgc2V0UHJvcHMoe1xuICAgICAgICAgICAgICAgICAgICByYW5nZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW1nU3RhcnRUaW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW1nRW5kVGltZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAvL+WbvueJh+enu+WKqOWQju+8jOa7keWdl+aJgOWcqOeahOS9jee9rlxuICAgICAgICAgICAgICAgIHNldFByb3BzKHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0VGltZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuZFRpbWVcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvL+a7keWdl+enu+WKqOWQju+8jOaJgOWcqOS9jee9rlxuICAgICAgICAgICAgICAgIHNldFByb3BzKHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0VGltZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuZFRpbWVcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgc3RhcnRUaW1lOiAoaW1nU3RhcnRUaW1lICsgc3RhcnRUaW1lKS50b0ZpeGVkKDIpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IHdyYXBUaW1lID0gTWF0aC5hYnModGhpcy53cmFwSW1nLmN1cnJlbnQub2Zmc2V0TGVmdClcbiAgICAgICAgICAgIGxldCBtYXJrU3RhcnQgPSB0aGlzLm1hcmsuY3VycmVudC5vZmZzZXRMZWZ0XG4gICAgICAgICAgICBsZXQgc3RhcnRUaW1lMSA9ICh3cmFwVGltZSArIG1hcmtTdGFydCkgLyBzdGVwSW50ZXJ2YWxcbiAgICAgICAgICAgIGxldCBlbmRUaW1lMSA9ICh0aGlzLm1hcmsuY3VycmVudC5vZmZzZXRXaWR0aCArIHdyYXBUaW1lICsgbWFya1N0YXJ0KSAvIHN0ZXBJbnRlcnZhbFxuXG4gICAgICAgICAgICBzZXRQcm9wcyh7XG4gICAgICAgICAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICAgICAgICAgICAgc3RhcnRUaW1lOiBzdGFydFRpbWUxLFxuICAgICAgICAgICAgICAgICAgICBlbmRUaW1lOiBlbmRUaW1lMVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBzdGFydFRpbWU6ICgrIHN0YXJ0VGltZTEpLnRvRml4ZWQoMilcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgIH1cbiAgICAvL+iuvue9ruS4i+agh+S9jee9rlxuICAgIHNldFN1YnNjcmlwdCgpIHtcbiAgICAgICAgbGV0IHtzdGVwfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGxldCB7ZmxhZ30gPSB0aGlzLnN0YXRlXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgbGV0IHN1YnNjcmlwdCA9IFtdXG5cbiAgICAgICAgdGhpc1xuICAgICAgICAgICAgLmltZ1xuICAgICAgICAgICAgLmN1cnJlbnRcbiAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RlcDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHN1YnNjcmlwdC5wdXNoKGkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzZWxmLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgc3RlcEludGVydmFsOiB0aGlzLm9mZnNldFdpZHRoIC8gc3RlcCxcbiAgICAgICAgICAgICAgICAgICAgc3Vic2NyaXB0XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgc2VsZi53cmFwSW1nLmN1cnJlbnQuZGF0YXNldC53aWR0aCA9IHRoaXMub2Zmc2V0V2lkdGg7XG4gICAgICAgICAgICAgICAgc2VsZi5zaWxkZXJEcmFnKHNlbGYubWFyay5jdXJyZW50KTtcbiAgICAgICAgICAgICAgICBzZWxmLnNpbGRlckRyYWcoc2VsZi53cmFwSW1nLmN1cnJlbnQsIHRydWUpO1xuICAgICAgICAgICAgICAgIGlmIChmbGFnKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuY29tcHV0ZVRpbWUoKTtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5zZXRTdGF0ZSh7ZmxhZzogZmFsc2V9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgfVxuICAgIC8v6K6+572u5Yid5aeL5YyW5pe26Ze0XG4gICAgc2V0U3RhdHJUaW1lKHR5cGUpIHtcblxuICAgICAgICBsZXQge3N0ZXBJbnRlcnZhbCwgc3RhcnRUaW1lLHN0YXJ0RGF0YVNpdGUsYnV0dG9uVHlwZX0gPSB0aGlzLnN0YXRlXG4gICAgICAgIFxuICAgICAgICBsZXQge2N1cnJlbnQ6IHdyYXBJbWd9ID0gdGhpcy53cmFwSW1nXG4gICAgICAgIGxldCB7Y3VycmVudDogbWFya30gPSB0aGlzLm1hcmtcbiAgICAgICAgaWYoYnV0dG9uVHlwZSA9PSAnc3RhcnRQb2ludCcpe1xuICAgICAgICAgICBcbiAgICAgICAgICAgIHN0YXJ0VGltZSA9IHN0YXJ0RGF0YVNpdGUvMzAwMDAwXG4gICAgICAgICAgICAvLyB0aGlzLnNldFN0YXRlKHtzdGFydFRpbWV9KVxuICAgICAgICB9ZWxzZSBpZihidXR0b25UeXBlID09ICdzdGFydFRpbWUnKXtcbiAgICAgICAgICAgXG4gICAgICAgICAgICBzdGFydERhdGFTaXRlID0gMzAwMDAwKnN0YXJ0VGltZVxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c3RhcnREYXRhU2l0ZX0pXG4gICAgICAgIH1cbiAgICAgICAgbGV0IG1vdmVXaWR0aCA9IHdyYXBJbWcuZGF0YXNldC53aWR0aCAtIHdyYXBJbWcub2Zmc2V0V2lkdGhcbiAgICAgICAgbGV0IG1hcmtNb3ZlV2lkdGggPSB3cmFwSW1nLm9mZnNldFdpZHRoIC0gbWFyay5vZmZzZXRXaWR0aFxuICAgICAgICBsZXQgd3JhcFBvc2kgPSBzdGFydFRpbWUgKiBzdGVwSW50ZXJ2YWxcbiAgICAgICBcbiAgICAgICAgaWYgKHdyYXBQb3NpIDw9IG1vdmVXaWR0aCkge1xuICAgICAgICAgICAgLy8gd3JhcEltZy5zdHlsZS5sZWZ0ID0gYC0ke3dyYXBQb3NpfXB4YFxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgd3JhcEltZ0xlZnQ6IC13cmFwUG9zaSArICdweCcsXG4gICAgICAgICAgICAgICAgbWFya0xlZnQ6ICcwcHgnXG4gICAgICAgICAgICB9LCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb21wdXRlVGltZSgpXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgIH0gZWxzZSBpZiAod3JhcFBvc2kgPiBtb3ZlV2lkdGgpIHtcbiAgICAgICAgICAgIGxldCBSZW1haW5pbmdUaW1lID0gd3JhcFBvc2kgLSBtb3ZlV2lkdGhcbiAgICAgICAgICAgIC8vIHdyYXBJbWcuc3R5bGUubGVmdCA9IGAtJHttb3ZlV2lkdGh9cHhgXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICB3cmFwSW1nTGVmdDogLW1vdmVXaWR0aCArICdweCcsXG4gICAgICAgICAgICAgICAgbWFya0xlZnQ6ICcwcHgnXG4gICAgICAgICAgICB9LCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb21wdXRlVGltZSgpXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICBpZiAoUmVtYWluaW5nVGltZSA8IG1hcmtNb3ZlV2lkdGgpIHtcbiAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICBtYXJrTGVmdDogUmVtYWluaW5nVGltZSArICdweCdcbiAgICAgICAgICAgICAgICB9LCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tcHV0ZVRpbWUoKVxuICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICAvLyBtYXJrLnN0eWxlLmxlZnQgPSBgJHtSZW1haW5pbmdUaW1lfXB4YFxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgbWFya0xlZnQ6IG1hcmtNb3ZlV2lkdGggKyAncHgnXG4gICAgICAgICAgICAgICAgfSwgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbXB1dGVUaW1lKClcbiAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH1cbiAgICAvL+a7keWdl1xuICAgIHNpbGRlckRyYWcob2JqLCBmbGFnKSB7XG4gICAgICAgIGxldCBkaXNYLFxuICAgICAgICAgICAgdHlwZSxcbiAgICAgICAgICAgIGRpc1csXG4gICAgICAgICAgICBkaXNYMSxcbiAgICAgICAgICAgIGRpc0w7XG4gICAgICAgIGxldCB3cmFwV2lkdGggPSB0aGlzLndyYXBJbWcuY3VycmVudC5vZmZzZXRXaWR0aDtcbiAgICAgICAgbGV0IHtzdGVwSW50ZXJ2YWx9ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzXG5cbiAgICAgICAgZnVuY3Rpb24gb2JqTW92ZShldikge1xuXG4gICAgICAgICAgICBpZiAoZXYub2Zmc2V0WCA8IDEwKSB7XG4gICAgICAgICAgICAgICAgdHlwZSA9ICdsZWZ0JztcbiAgICAgICAgICAgICAgICBvYmouc3R5bGUuY3Vyc29yID0gJ3ctcmVzaXplJztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZXYub2Zmc2V0WCA+IG9iai5vZmZzZXRXaWR0aCAtIDEwKSB7XG4gICAgICAgICAgICAgICAgdHlwZSA9ICdyaWdodCc7XG4gICAgICAgICAgICAgICAgb2JqLnN0eWxlLmN1cnNvciA9ICdlLXJlc2l6ZSc7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHR5cGUgPSAnJztcbiAgICAgICAgICAgICAgICBvYmouc3R5bGUuY3Vyc29yID0gJ2RlZmF1bHQnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICghZmxhZykge1xuICAgICAgICAgICAgb2JqLm9ubW91c2Vtb3ZlID0gb2JqTW92ZVxuICAgICAgICB9XG4gICAgICAgIG9iai5vbm1vdXNlZG93biA9IGZ1bmN0aW9uIChldikge1xuICAgICAgICAgICAgaWYgKCFmbGFnKSB7XG4gICAgICAgICAgICAgICAgb2JqLm9ubW91c2Vtb3ZlID0gbnVsbFxuICAgICAgICAgICAgICAgIGlmIChldi5vZmZzZXRYIDwgMTApIHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZSA9ICdsZWZ0JztcbiAgICAgICAgICAgICAgICAgICAgb2JqLnN0eWxlLmN1cnNvciA9ICd3LXJlc2l6ZSc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChldi5vZmZzZXRYID4gb2JqLm9mZnNldFdpZHRoIC0gMTApIHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZSA9ICdyaWdodCc7XG4gICAgICAgICAgICAgICAgICAgIG9iai5zdHlsZS5jdXJzb3IgPSAnZS1yZXNpemUnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRpc1gxID0gZXYuY2xpZW50WDtcbiAgICAgICAgICAgIGRpc1cgPSBvYmoub2Zmc2V0V2lkdGg7XG4gICAgICAgICAgICBkaXNMID0gb2JqLm9mZnNldExlZnQ7XG4gICAgICAgICAgICBkaXNYID0gZXYuY2xpZW50WCAtIG9iai5vZmZzZXRMZWZ0O1xuXG4gICAgICAgICAgICBkb2N1bWVudC5vbm1vdXNlbW92ZSA9IGZ1bmN0aW9uIG1vdmUoZXYpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZSkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgdyA9IGV2LmNsaWVudFggLSBkaXNYMTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9iai5vZmZzZXRXaWR0aCA+IHdyYXBXaWR0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgb2JqLnN0eWxlLndpZHRoID0gd3JhcFdpZHRoICsgJ3B4JztcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob2JqLm9mZnNldFdpZHRoICsgb2JqLm9mZnNldExlZnQgPiB3cmFwV2lkdGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9iai5zdHlsZS53aWR0aCA9IHdyYXBXaWR0aCAtIG9iai5vZmZzZXRMZWZ0ICsgJ3B4JztcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob2JqLm9mZnNldFdpZHRoIDwgc3RlcEludGVydmFsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvYmouc3R5bGUud2lkdGggPSBzdGVwSW50ZXJ2YWwgKyAncHgnO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlID09ICdyaWdodCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9iai5zdHlsZS53aWR0aCA9IHcgKyBkaXNXICsgJ3B4JztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZSA9PSAnbGVmdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkaXNMICsgdyA8PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gb2JqLnN0eWxlLndpZHRoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqLnN0eWxlLmxlZnQgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9iai5zdHlsZS53aWR0aCA9IGRpc1cgLSB3ICsgJ3B4JztcbiAgICAgICAgICAgICAgICAgICAgICAgIG9iai5zdHlsZS5sZWZ0ID0gZGlzTCArIHcgKyAncHgnO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRYID0gZXYuY2xpZW50WCAtIGRpc1g7XG5cbiAgICAgICAgICAgICAgICBpZiAoIWZsYWcpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRYIDwgMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFggPSAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50WCA+IHdyYXBXaWR0aCAtIG9iai5vZmZzZXRXaWR0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFggPSB3cmFwV2lkdGggLSBvYmoub2Zmc2V0V2lkdGg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudFggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50WCA9IDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRYIDwgd3JhcFdpZHRoIC0gb2JqLmRhdGFzZXQud2lkdGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRYID0gd3JhcFdpZHRoIC0gb2JqLmRhdGFzZXQud2lkdGg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgb2JqLnN0eWxlLmxlZnQgPSBjdXJyZW50WCArICdweCc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkb2N1bWVudC5vbm1vdXNldXAgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQub25tb3VzZW1vdmUgPSBudWxsXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQub25tb3VzZXVwID0gbnVsbFxuICAgICAgICAgICAgICAgIHR5cGUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgb2JqLnN0eWxlLmN1cnNvciA9ICdkZWZhdWx0JztcbiAgICAgICAgICAgICAgICBzZWxmLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgbWFya0xlZnQ6IHNlbGYubWFyay5jdXJyZW50Lm9mZnNldExlZnQgKyAncHgnLFxuICAgICAgICAgICAgICAgICAgICB3cmFwSW1nTGVmdDogc2VsZi53cmFwSW1nLmN1cnJlbnQub2Zmc2V0TGVmdCArICdweCdcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIGlmICghZmxhZykge1xuXG4gICAgICAgICAgICAgICAgICAgIG9iai5vbm1vdXNlbW92ZSA9IG9iak1vdmVcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9iai5vZmZzZXRXaWR0aCArIG9iai5vZmZzZXRMZWZ0ID4gd3JhcFdpZHRoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvYmouc3R5bGUud2lkdGggPSB3cmFwV2lkdGggLSBvYmoub2Zmc2V0TGVmdCArICdweCc7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHNlbGYuY29tcHV0ZVRpbWUob2JqKVxuXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB9O1xuICAgIH1cbiAgICBjaGFuZ2VTdGFydFRpbWUoZSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtzdGFydFRpbWU6IGUuY3VycmVudFRhcmdldC52YWx1ZSxidXR0b25UeXBlOidzdGFydFRpbWUnfSlcbiAgICB9XG4gICAgY2hhbmdlU3RhcnREYXRhU2l0ZShlKXtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c3RhcnREYXRhU2l0ZTogZS5jdXJyZW50VGFyZ2V0LnZhbHVlLGJ1dHRvblR5cGU6J3N0YXJ0UG9pbnQnfSlcblxuICAgIH1cbiAgICB1cGRhdGVSZW5kZXIoKSB7XG4gICAgICAgIFxuICAgICAgICB0aGlzLnNldFN0YXRyVGltZSgpXG4gICAgfVxuICAgIFxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHtcbiAgICAgICAgICAgIGlkLFxuICAgICAgICAgICAgcGljVXJsLFxuICAgICAgICAgICAgd2lkdGgsXG4gICAgICAgICAgICBzZXRUaW1lU2hvdyxcbiAgICAgICAgICAgIGhlaWdodCxcbiAgICAgICAgICAgIHN0ZXBcbiAgICAgICAgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGxldCB7c3RlcEludGVydmFsLCBzdWJzY3JpcHQsIG1hcmtMZWZ0LCB3cmFwSW1nTGVmdCwgc3RhcnRUaW1lLHN0YXJ0RGF0YVNpdGV9ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgaWYgKHR5cGVvZiB3aWR0aCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIHdpZHRoID0gd2lkdGggKiBzdGVwSW50ZXJ2YWwgKyAncHgnXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgaWQ9e2lkfT5cbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIndyYXBcIlxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogd2lkdGhcbiAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwid3JhcEltZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogd3JhcEltZ0xlZnQsXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGhlaWdodCArIDIwICsgJ3B4J1xuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXt0aGlzLndyYXBJbWd9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17dGhpcy5pbWd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtwaWNVcmx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGhlaWdodCArICdweCdcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIi8+IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzdWJzY3JpcHQubWFwKChpdGVtLGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogc3RlcEludGVydmFsICogaXRlbSArICdweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMTJweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICc1cHgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICcxcHgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzk5OSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6ICctNTAlJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtfW1pblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGlcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17dGhpcy5tYXJrfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWFya1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IHN0ZXBJbnRlcnZhbCArICdweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGhlaWdodCArICdweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiBtYXJrTGVmdFxuICAgICAgICAgICAgICAgICAgICB9fT48L2k+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAge3NldFRpbWVTaG93ICYmIDxkaXYgY2xhc3NOYW1lPSdidXR0b20nPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzdGFydFRpbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpc1xuICAgICAgICAgICAgICAgICAgICAgICAgLmNoYW5nZVN0YXJ0VGltZVxuICAgICAgICAgICAgICAgICAgICAgICAgLmJpbmQodGhpcyl9Lz5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3ttYXJnaW5SaWdodDonMjBweCd9fVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy51cGRhdGVSZW5kZXIuYmluZCh0aGlzKX0+c3RhcnRUaW1lPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzdGFydERhdGFTaXRlfVxuICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmNoYW5nZVN0YXJ0RGF0YVNpdGUuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMudXBkYXRlUmVuZGVyLmJpbmQodGhpcyl9PnN0YXJ0UG9pbnQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj59XG4gICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG4gICAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcyl7XG4gICAgICAgIGlmKHByZXZQcm9wcy5zdGVwICE9IHRoaXMucHJvcHMuc3RlcCl7XG4gICAgICAgICAgICB0aGlzLnNldFN1YnNjcmlwdCgpXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICB3cmFwSW1nTGVmdDowLFxuICAgICAgICAgICAgICAgIG1hcmtMZWZ0OjBcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfVxufVxuXG5NeVNsaWRlci5kZWZhdWx0UHJvcHMgPSB7XG4gICAgd2lkdGg6IDEwLFxuICAgIGhlaWdodDogODAsXG4gICAgc2V0VGltZVNob3c6IHRydWUsXG4gICAgdHlwZVNpdGU6IGZhbHNlXG59O1xuXG5NeVNsaWRlci5wcm9wVHlwZXMgPSB7XG4gICAgLyoqXG4gICAgICogVGhlIElEIHVzZWQgdG8gaWRlbnRpZnkgdGhpcyBjb21wb25lbnQgaW4gRGFzaCBjYWxsYmFja3MuXG4gICAgICovXG4gICAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgLyoqXG4gICAgICogVGhlIHBpY1VybCBkaXNwbGF5ZWQgaW4gdGhlIHN0cmluZy5cbiAgICAgKiDmgLvpooTop4jlm77ot6/lvoRcbiAgICAgKi9cbiAgICBwaWNVcmw6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgLyoqXG4gICAgICog6aKE6KeI5Zu+5oC75pe26Ze077yINjEuMTfvvIlcbiAgICAgKi9cbiAgICBzdGVwOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIC8qKlxuICAgICAqIFRoZSB2YWx1ZSBkaXNwbGF5ZWQgaW4gdGhlIGlucHV0LlxuICAgICAqIOi/lOWbnuW8gOWni+aXtumXtOWSjOe7k+adn+aXtumXtCB7dmFsdWU6e2ltZ1N0YXJ0VGltZSxpbWdFbmRUaW1lfX1cbiAgICAgKi9cbiAgICB2YWx1ZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLm9iamVjdCwgUHJvcFR5cGVzLmFycmF5XSksXG5cbiAgICAvKipcbiAgICAgKiBEYXNoLWFzc2lnbmVkIGNhbGxiYWNrIHRoYXQgc2hvdWxkIGJlIGNhbGxlZCB0byByZXBvcnQgcHJvcGVydHkgY2hhbmdlc1xuICAgICAqIHRvIERhc2gsIHRvIG1ha2UgdGhlbSBhdmFpbGFibGUgZm9yIGNhbGxiYWNrcy5cbiAgICAgKi9cbiAgICAvKipcbiAgICAgKiDov5Tlm57ojIPlm7TmlbDmja7nmoTojIPlm7Qo5Zu+54mH5Y+v6KeG5Yy65pe26Ze05q61KVxuICAgICAqL1xuICAgIHJhbmdlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMub2JqZWN0XSksXG4gICAgc2V0UHJvcHM6IFByb3BUeXBlcy5mdW5jLFxuICAgIC8qKlxuICAgICAqIOWPr+inhuWMuuWuveW6pum7mOiupDEw5YiG6ZKfXG4gICAgICovXG4gICAgd2lkdGg6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKSxcbiAgICAvKipcbiAgICAgKiDpgInmi6nlvIDlp4vml7bpl7TmoYbmmK/lkKbmmL7npLpcbiAgICAgKi9cbiAgICBzZXRUaW1lU2hvdzogUHJvcFR5cGVzLmJvb2wsXG4gICAgLyoqXG4gICAgICog6K6h566X5qih5byP5pe26Ze05qih5byP77yMdHJ1ZeS4uuW6lemDqOWbvueJh+S4uuagueaNru+8jGZhbHNl5Li6bWFya+Wdl+S4uuS+neaNrlxuICAgICAqL1xuICAgIHR5cGVTaXRlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAvKipcbiAgICAgKiDlm77niYfpq5jluqZcbiAgICAgKi9cbiAgICBoZWlnaHQ6IFByb3BUeXBlcy5udW1iZXJcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9