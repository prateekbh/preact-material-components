webpackJsonp([0],[
/* 0 */,
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_Button_Button__ = __webpack_require__(2);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



// import Checkbox from '../src/Checkbox/Checkbox';
// import Select from '../src/Select/Select';

var Home = function (_Component) {
	_inherits(Home, _Component);

	function Home() {
		_classCallCheck(this, Home);

		return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
	}

	_createClass(Home, [{
		key: 'render',
		value: function render() {
			var _this2 = this;

			return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
				'div',
				null,
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					__WEBPACK_IMPORTED_MODULE_1__src_Button_Button__["a" /* default */],
					{ raised: true, accent: true, Ripple: true, onClick: function onClick() {
							_this2.setState({
								showSelect: !_this2.state.showSelect
							});
						} },
					'hi'
				)
			);
		}
	}]);

	return Home;
}(__WEBPACK_IMPORTED_MODULE_0_preact__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = Home;

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__MaterialComponent__ = __webpack_require__(3);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




/** @prop dense = false
 *	@prop raised = false
 *	@prop compact = false
 *	@prop primary = false
 *	@prop accent = false
 *	@prop disabled = false
 */

var Button = function (_MaterialComponent) {
	_inherits(Button, _MaterialComponent);

	function Button() {
		_classCallCheck(this, Button);

		var _this = _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).call(this));

		_this.autoInitConstants = ['ripple'];
		_this.componentName = 'button';
		_this.mdlProps = ['dense', 'raised', 'compact', 'primary', 'accent'];
		return _this;
	}

	_createClass(Button, [{
		key: 'mdlRender',
		value: function mdlRender() {
			return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
				'button',
				this.props,
				this.props.children
			);
		}
		/*render() {
  	this.build();
  	const className = this.getClassName();
  	const autoInits = this.getAutoInitNames();
  	return(<button
  		className={className}
  		data-mdc-auto-init={autoInits}
  		{...this.props}>{this.props.children}</button>);
  }*/

	}]);

	return Button;
}(__WEBPACK_IMPORTED_MODULE_1__MaterialComponent__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = Button;

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var MaterialComponent = function (_Component) {
	_inherits(MaterialComponent, _Component);

	function MaterialComponent() {
		_classCallCheck(this, MaterialComponent);

		var _this = _possibleConstructorReturn(this, (MaterialComponent.__proto__ || Object.getPrototypeOf(MaterialComponent)).call(this));

		_this.mdlProps = [];
		_this.componentName = '';
		_this.autoInitConstants = [''];
		_this.classText = '';
		_this.autoInitText = '';
		return _this;
	}

	_createClass(MaterialComponent, [{
		key: 'build',
		value: function build() {
			this.classText = 'mdc-' + this.componentName;
			this.autoInitText = '';
			for (var propKey in this.props) {
				var prop = this.props[propKey];
				if (typeof prop === 'boolean' && prop) {
					if (this.mdlProps.indexOf(propKey) !== -1) {
						this.classText += ' mdc-' + this.componentName + '--' + propKey;
					} else if (this.autoInitConstants.indexOf(propKey.toLowerCase()) !== -1) {
						this.autoInitText += 'MDC' + propKey + ', ';
					}
				}
			}
			console.log('class', this.classText, this.props);
		}
	}, {
		key: 'getClassName',
		value: function getClassName() {
			return this.classText;
		}
	}, {
		key: 'getAutoInitNames',
		value: function getAutoInitNames() {
			return this.autoInitText;
		}
	}, {
		key: 'mdlRender',
		value: function mdlRender(props) {
			return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
				'div',
				props,
				props.children
			);
		}
	}, {
		key: 'render',
		value: function render() {
			this.build();
			// Fetch a VNode
			var element = this.mdlRender(this.props);
			// Clean this shit of proxy attributes
			for (var propKey in this.props) {
				delete element.attributes[propKey];
			}

			var className = this.getClassName();
			var autoInits = this.getAutoInitNames();
			element.attributes.class = className;
			return element;
		}
	}]);

	return MaterialComponent;
}(__WEBPACK_IMPORTED_MODULE_0_preact__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = MaterialComponent;

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_jsx__ = __webpack_require__(1);



__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["render"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_1__home_jsx__["a" /* default */], null), document.querySelector('.app'));

/***/ })
],[4]);