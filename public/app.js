webpackJsonp([0],[
/* 0 */,
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__foundation__ = __webpack_require__(14);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__foundation__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__component__ = __webpack_require__(45);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__component__["a"]; });
/**
 * Copyright 2016 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */




/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_highlight_js_lib_highlight__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_highlight_js_lib_highlight___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_highlight_js_lib_highlight__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_highlight_js_lib_languages_javascript__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_highlight_js_lib_languages_javascript___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_highlight_js_lib_languages_javascript__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_highlight_js_lib_languages_json__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_highlight_js_lib_languages_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_highlight_js_lib_languages_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_highlight_js_lib_languages_xml__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_highlight_js_lib_languages_xml___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_highlight_js_lib_languages_xml__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_highlight_js_styles_tomorrow_night_eighties_css__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_highlight_js_styles_tomorrow_night_eighties_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_highlight_js_styles_tomorrow_night_eighties_css__);
function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }









var LANGUAGES = { javascript: __WEBPACK_IMPORTED_MODULE_3_highlight_js_lib_languages_javascript___default.a, json: __WEBPACK_IMPORTED_MODULE_4_highlight_js_lib_languages_json___default.a, xml: __WEBPACK_IMPORTED_MODULE_5_highlight_js_lib_languages_xml___default.a };
Object.keys(LANGUAGES).forEach(function (key) {
	return __WEBPACK_IMPORTED_MODULE_2_highlight_js_lib_highlight___default.a.registerLanguage(key, LANGUAGES[key]);
});

/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
	var children = _ref.children,
	    props = _objectWithoutProperties(_ref, ['children']);

	var child = children && children[0],
	    isHighlight = child && child.nodeName === 'code';
	if (isHighlight) {
		var text = child.children[0].replace(/(^\s+|\s+$)/g, ''),
		    lang = (child.attributes.class && child.attributes.class).match(/lang-([a-z]+)/)[1],
		    highlighted = __WEBPACK_IMPORTED_MODULE_2_highlight_js_lib_highlight___default.a.highlightAuto(text, lang ? [lang] : null),
		    hLang = highlighted.language;
		return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
			'pre',
			{ 'class': __WEBPACK_IMPORTED_MODULE_1_classnames___default()('highlight', 'highlight-' + hLang, props.class) },
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('code', { 'class': 'hljs lang-' + hLang, dangerouslySetInnerHTML: { __html: highlighted.value } })
		);
	}
	return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
		'pre',
		props,
		children
	);
});

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



var ComponentTable = function (_Component) {
	_inherits(ComponentTable, _Component);

	function ComponentTable() {
		_classCallCheck(this, ComponentTable);

		return _possibleConstructorReturn(this, (ComponentTable.__proto__ || Object.getPrototypeOf(ComponentTable)).apply(this, arguments));
	}

	_createClass(ComponentTable, [{
		key: "render",
		value: function render() {
			return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
				"div",
				null,
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					"div",
					{ className: "mdc-typography--display1" },
					"Components and their props"
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					"ul",
					null,
					this.props.data.map(function (component) {
						return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
							"li",
							null,
							__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
								"div",
								{ className: "mdc-typography--headline" },
								component.component
							),
							__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
								"ul",
								null,
								component.props && component.props.map(function (prop) {
									return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
										"li",
										null,
										__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
											"div",
											null,
											__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
												"div",
												null,
												__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
													"span",
													{ className: "mdc-typography--title" },
													prop.name,
													" "
												),
												__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
													"span",
													{ className: "mdc-typography--body2" },
													prop.value || 'true/false'
												)
											),
											__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
												"div",
												{ className: "mdc-typography--caption" },
												prop.description
											)
										)
									);
								}),
								component.props.length === 0 && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
									"li",
									null,
									__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
										"div",
										{ className: "mdc-typography--caption" },
										"no specific props"
									)
								)
							)
						);
					})
				)
			);
		}
	}]);

	return ComponentTable;
}(__WEBPACK_IMPORTED_MODULE_0_preact__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (ComponentTable);

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_ripple__ = __webpack_require__(8);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




/**
 * Base class for every Material component in this package
 * NOTE: every component should add a ref by the name of `control` to its root dom for autoInit Properties
 *
 * @export
 * @class MaterialComponent
 * @extends {Component}
 */

var MaterialComponent = function (_Component) {
  _inherits(MaterialComponent, _Component);

  function MaterialComponent() {
    _classCallCheck(this, MaterialComponent);

    // Attributes inside this array will be check for boolean value true
    // and will be converted to mdc classes
    var _this = _possibleConstructorReturn(this, (MaterialComponent.__proto__ || Object.getPrototypeOf(MaterialComponent)).call(this));

    _this._mdcProps = [];
    // This will again be used to add apt classname to the component
    _this.componentName = "";
    // The final class name given to the dom
    _this.classText = "";
    return _this;
  }

  _createClass(MaterialComponent, [{
    key: "attachRipple",
    value: function attachRipple() {
      if (this.props.ripple && this.control) {
        __WEBPACK_IMPORTED_MODULE_1__material_ripple__["a" /* MDCRipple */].attachTo(this.control);
      }
    }
    // Build the className

  }, {
    key: "buildClassName",
    value: function buildClassName(props) {
      this.classText = "mdc-" + this.componentName;
      for (var propKey in this.props) {
        if (this.props.hasOwnProperty(propKey)) {
          var prop = this.props[propKey];
          if (typeof prop === "boolean" && prop) {
            if (this._mdcProps.indexOf(propKey) !== -1) {
              this.classText += " mdc-" + this.componentName + "--" + propKey;
            }
          }
        }
      }
    }
  }, {
    key: "getClassName",
    value: function getClassName(element) {
      if (!element) {
        return "";
      }
      element.attributes = element.attributes || {};
      if (element.attributes.className) {
        return this.classText + " " + element.attributes.className;
      }
      return this.classText;
    }
  }, {
    key: "getAutoInitNames",
    value: function getAutoInitNames() {
      return this.autoInitText;
    }
    // Components must implement this method for their specific DOM structure

  }, {
    key: "materialDom",
    value: function materialDom(props) {
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("div", Object.assign({}, props), props.children);
    }
  }, {
    key: "render",
    value: function render() {
      this.buildClassName();
      // Fetch a VNode
      var element = this.materialDom(this.props);
      element.attributes = element.attributes || {};
      var autoInits = this.getAutoInitNames();
      // Fix for className
      element.attributes.class = this.getClassName(element);
      // Clean this shit of proxy attributes
      this._mdcProps.forEach(function (prop) {
        delete element.attributes[prop];
      });
      return element;
    }
  }]);

  return MaterialComponent;
}(__WEBPACK_IMPORTED_MODULE_0_preact__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (MaterialComponent);

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__MaterialComponent__ = __webpack_require__(4);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};




/**
 *  @prop dense = false
 *  @prop raised = false
 *  @prop compact = false
 *  @prop primary = false
 *  @prop accent = false
 *  @prop disabled = false
 */

var Button = function (_MaterialComponent) {
  _inherits(Button, _MaterialComponent);

  function Button() {
    _classCallCheck(this, Button);

    var _this = _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).call(this));

    _this.componentName = "button";
    _this._mdcProps = ["dense", "raised", "compact", "primary", "accent"];
    return _this;
  }

  _createClass(Button, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      _get(Button.prototype.__proto__ || Object.getPrototypeOf(Button.prototype), "attachRipple", this).call(this);
    }
  }, {
    key: "materialDom",
    value: function materialDom(props) {
      var _this2 = this;

      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("button", _extends({
        ref: function ref(control) {
          _this2.control = control;
        }
      }, props), this.props.children);
    }
  }]);

  return Button;
}(__WEBPACK_IMPORTED_MODULE_1__MaterialComponent__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (Button);

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__MaterialComponent__ = __webpack_require__(4);
var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};




/**
 * @prop dense = false
 * @prop two-line = false
 * @prop interactive = false
 */

var List = function (_MaterialComponent) {
  _inherits(List, _MaterialComponent);

  function List() {
    _classCallCheck(this, List);

    var _this = _possibleConstructorReturn(this, (List.__proto__ || Object.getPrototypeOf(List)).call(this));

    _this.componentName = "list";
    _this._mdcProps = ["dense", "two-line"];
    return _this;
  }

  _createClass(List, [{
    key: "materialDom",
    value: function materialDom(props) {
      var _this2 = this;

      if (props.interactive) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("nav", _extends({ ref: function ref(control) {
            return _this2.control = control;
          } }, props), props.children);
      }

      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("ul", _extends({}, props, { ref: function ref(control) {
          return _this2.control = control;
        } }), props.children);
    }
  }]);

  return List;
}(__WEBPACK_IMPORTED_MODULE_1__MaterialComponent__["a" /* default */]);

var ListItem = function (_MaterialComponent2) {
  _inherits(ListItem, _MaterialComponent2);

  function ListItem() {
    _classCallCheck(this, ListItem);

    var _this3 = _possibleConstructorReturn(this, (ListItem.__proto__ || Object.getPrototypeOf(ListItem)).call(this));

    _this3.componentName = "list-item";
    return _this3;
  }

  _createClass(ListItem, [{
    key: "materialDom",
    value: function materialDom(props) {
      var _this4 = this;

      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("li", _extends({ role: "option" }, props, { ref: function ref(control) {
          return _this4.control = control;
        } }), props.children);
    }
  }]);

  return ListItem;
}(__WEBPACK_IMPORTED_MODULE_1__MaterialComponent__["a" /* default */]);

var LinkItem = function (_MaterialComponent3) {
  _inherits(LinkItem, _MaterialComponent3);

  function LinkItem() {
    _classCallCheck(this, LinkItem);

    var _this5 = _possibleConstructorReturn(this, (LinkItem.__proto__ || Object.getPrototypeOf(LinkItem)).call(this));

    _this5.componentName = "list-item";
    return _this5;
  }

  _createClass(LinkItem, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      _get(LinkItem.prototype.__proto__ || Object.getPrototypeOf(LinkItem.prototype), "attachRipple", this).call(this);
    }
  }, {
    key: "materialDom",
    value: function materialDom(props) {
      var _this6 = this;

      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("a", _extends({ role: "option" }, props, { ref: function ref(control) {
          return _this6.control = control;
        } }), props.children);
    }
  }]);

  return LinkItem;
}(__WEBPACK_IMPORTED_MODULE_1__MaterialComponent__["a" /* default */]);

/**
 * @prop start-detail = true
 * @prop end-detail = false
 */


var ListItemIcon = function (_MaterialComponent4) {
  _inherits(ListItemIcon, _MaterialComponent4);

  function ListItemIcon() {
    _classCallCheck(this, ListItemIcon);

    var _this7 = _possibleConstructorReturn(this, (ListItemIcon.__proto__ || Object.getPrototypeOf(ListItemIcon)).call(this));

    _this7.componentName = "mdc-list-item__icon";
    return _this7;
  }

  _createClass(ListItemIcon, [{
    key: "getProxyClassName",
    value: function getProxyClassName(props) {
      var classNames = [];

      // default behavior
      props["start-detail"] = props["start-detail"] || true;

      // setting class names mutually exclusive
      if (props["end-detail"]) {
        classNames.push("mdc-list-item__end-detail");
      } else if (props["start-detail"]) {
        classNames.push("mdc-list-item__start-detail");
      }
      return classNames.join(" ");
    }
  }, {
    key: "materialDom",
    value: function materialDom(props) {
      var _this8 = this;

      var className = "material-icons " + this.getProxyClassName(props);
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("i", _extends({
        className: className,
        "aria-hidden": "true"
      }, props, {
        ref: function ref(control) {
          return _this8.control = control;
        }
      }), props.children);
    }
  }]);

  return ListItemIcon;
}(__WEBPACK_IMPORTED_MODULE_1__MaterialComponent__["a" /* default */]);

/**
 * @prop start-detail = true
 * @prop end-detail = false
 */


var ListItemAvatar = function (_ListItemIcon) {
  _inherits(ListItemAvatar, _ListItemIcon);

  function ListItemAvatar() {
    _classCallCheck(this, ListItemAvatar);

    var _this9 = _possibleConstructorReturn(this, (ListItemAvatar.__proto__ || Object.getPrototypeOf(ListItemAvatar)).call(this));

    _this9.componentName = "mdc-list-item__avatar";
    return _this9;
  }

  _createClass(ListItemAvatar, [{
    key: "materialDom",
    value: function materialDom(props) {
      var _this10 = this;

      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("img", _extends({}, props, {
        className: _get(ListItemAvatar.prototype.__proto__ || Object.getPrototypeOf(ListItemAvatar.prototype), "getProxyClassName", this).call(this, props)
      }, props, {
        ref: function ref(control) {
          return _this10.control = control;
        },
        width: props.width || "56",
        height: props.height || "56",
        alt: props.alt || ""
      }));
    }
  }]);

  return ListItemAvatar;
}(ListItemIcon);

var ListDivider = function (_MaterialComponent5) {
  _inherits(ListDivider, _MaterialComponent5);

  function ListDivider() {
    _classCallCheck(this, ListDivider);

    var _this11 = _possibleConstructorReturn(this, (ListDivider.__proto__ || Object.getPrototypeOf(ListDivider)).call(this));

    _this11.componentName = "list-divider";
    _this11._mdcProps = ["inset"];
    return _this11;
  }

  _createClass(ListDivider, [{
    key: "materialDom",
    value: function materialDom(props) {
      var _this12 = this;

      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("li", _extends({
        role: "separator"
      }, props, {
        ref: function ref(control) {
          return _this12.control = control;
        }
      }));
    }
  }]);

  return ListDivider;
}(__WEBPACK_IMPORTED_MODULE_1__MaterialComponent__["a" /* default */]);

var ListTextContainer = function (_MaterialComponent6) {
  _inherits(ListTextContainer, _MaterialComponent6);

  function ListTextContainer() {
    _classCallCheck(this, ListTextContainer);

    var _this13 = _possibleConstructorReturn(this, (ListTextContainer.__proto__ || Object.getPrototypeOf(ListTextContainer)).call(this));

    _this13.componentName = "list-item__text";
    return _this13;
  }

  _createClass(ListTextContainer, [{
    key: "materialDom",
    value: function materialDom(props) {
      var _this14 = this;

      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("span", _extends({}, props, { ref: function ref(control) {
          return _this14.control = control;
        } }), props.children);
    }
  }]);

  return ListTextContainer;
}(__WEBPACK_IMPORTED_MODULE_1__MaterialComponent__["a" /* default */]);

var ListPrimaryText = function (_ListTextContainer) {
  _inherits(ListPrimaryText, _ListTextContainer);

  function ListPrimaryText() {
    _classCallCheck(this, ListPrimaryText);

    var _this15 = _possibleConstructorReturn(this, (ListPrimaryText.__proto__ || Object.getPrototypeOf(ListPrimaryText)).call(this));

    _this15.componentName = "list-item__text__primary";
    return _this15;
  }

  return ListPrimaryText;
}(ListTextContainer);

var ListSecondaryText = function (_ListTextContainer2) {
  _inherits(ListSecondaryText, _ListTextContainer2);

  function ListSecondaryText() {
    _classCallCheck(this, ListSecondaryText);

    var _this16 = _possibleConstructorReturn(this, (ListSecondaryText.__proto__ || Object.getPrototypeOf(ListSecondaryText)).call(this));

    _this16.componentName = "list-item__text__secondary";
    return _this16;
  }

  return ListSecondaryText;
}(ListTextContainer);

List.Item = ListItem;
List.LinkItem = LinkItem;
List.ItemIcon = ListItemIcon;
List.ItemAvatar = ListItemAvatar;
List.Divider = ListDivider;
List.TextContainer = ListTextContainer;
List.PrimaryText = ListPrimaryText;
List.SecondaryText = ListSecondaryText;

/* harmony default export */ __webpack_exports__["a"] = (List);

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(56);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__constants__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__foundation__ = __webpack_require__(57);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__foundation__["a"]; });
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */




/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MDCRipple; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__foundation__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util__ = __webpack_require__(11);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__foundation__["a"]; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */







var MDCRipple = function (_MDCComponent) {
  _inherits(MDCRipple, _MDCComponent);

  function MDCRipple() {
    _classCallCheck(this, MDCRipple);

    return _possibleConstructorReturn(this, (MDCRipple.__proto__ || Object.getPrototypeOf(MDCRipple)).apply(this, arguments));
  }

  _createClass(MDCRipple, [{
    key: 'activate',
    value: function activate() {
      this.foundation_.activate();
    }
  }, {
    key: 'deactivate',
    value: function deactivate() {
      this.foundation_.deactivate();
    }
  }, {
    key: 'getDefaultFoundation',
    value: function getDefaultFoundation() {
      return new __WEBPACK_IMPORTED_MODULE_1__foundation__["a" /* default */](MDCRipple.createAdapter(this));
    }
  }, {
    key: 'initialSyncWithDOM',
    value: function initialSyncWithDOM() {
      this.unbounded = 'mdcRippleIsUnbounded' in this.root_.dataset;
    }
  }, {
    key: 'unbounded',
    get: function get() {
      return this.unbounded_;
    },
    set: function set(unbounded) {
      var UNBOUNDED = __WEBPACK_IMPORTED_MODULE_1__foundation__["a" /* default */].cssClasses.UNBOUNDED;

      this.unbounded_ = Boolean(unbounded);
      if (this.unbounded_) {
        this.root_.classList.add(UNBOUNDED);
      } else {
        this.root_.classList.remove(UNBOUNDED);
      }
    }
  }], [{
    key: 'attachTo',
    value: function attachTo(root) {
      var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref$isUnbounded = _ref.isUnbounded,
          isUnbounded = _ref$isUnbounded === undefined ? undefined : _ref$isUnbounded;

      var ripple = new MDCRipple(root);
      // Only override unbounded behavior if option is explicitly specified
      if (isUnbounded !== undefined) {
        ripple.unbounded = isUnbounded;
      }
      return ripple;
    }
  }, {
    key: 'createAdapter',
    value: function createAdapter(instance) {
      var MATCHES = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util__["a" /* getMatchesProperty */])(HTMLElement.prototype);

      return {
        browserSupportsCssVars: function browserSupportsCssVars() {
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util__["b" /* supportsCssVariables */])(window);
        },
        isUnbounded: function isUnbounded() {
          return instance.unbounded;
        },
        isSurfaceActive: function isSurfaceActive() {
          return instance.root_[MATCHES](':active');
        },
        isSurfaceDisabled: function isSurfaceDisabled() {
          return instance.disabled;
        },
        addClass: function addClass(className) {
          return instance.root_.classList.add(className);
        },
        removeClass: function removeClass(className) {
          return instance.root_.classList.remove(className);
        },
        registerInteractionHandler: function registerInteractionHandler(evtType, handler) {
          return instance.root_.addEventListener(evtType, handler);
        },
        deregisterInteractionHandler: function deregisterInteractionHandler(evtType, handler) {
          return instance.root_.removeEventListener(evtType, handler);
        },
        registerResizeHandler: function registerResizeHandler(handler) {
          return window.addEventListener('resize', handler);
        },
        deregisterResizeHandler: function deregisterResizeHandler(handler) {
          return window.removeEventListener('resize', handler);
        },
        updateCssVariable: function updateCssVariable(varName, value) {
          return instance.root_.style.setProperty(varName, value);
        },
        computeBoundingRect: function computeBoundingRect() {
          return instance.root_.getBoundingClientRect();
        },
        getWindowPageOffset: function getWindowPageOffset() {
          return { x: window.pageXOffset, y: window.pageYOffset };
        }
      };
    }
  }]);

  return MDCRipple;
}(__WEBPACK_IMPORTED_MODULE_0__material_base__["a" /* MDCComponent */]);

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__MaterialComponent__ = __webpack_require__(4);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




/**
 * @prop mini = false
 * @prop plain = false
 */

var Formfield = function (_MaterialComponent) {
  _inherits(Formfield, _MaterialComponent);

  function Formfield() {
    _classCallCheck(this, Formfield);

    var _this = _possibleConstructorReturn(this, (Formfield.__proto__ || Object.getPrototypeOf(Formfield)).call(this));

    _this.componentName = "form-field";
    _this._mdcProps = ["align-end"];
    return _this;
  }

  return Formfield;
}(__WEBPACK_IMPORTED_MODULE_1__MaterialComponent__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (Formfield);

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__MaterialComponent__ = __webpack_require__(4);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};




/**
 * @prop disabled = false
 */

var Icon = function (_MaterialComponent) {
  _inherits(Icon, _MaterialComponent);

  function Icon() {
    _classCallCheck(this, Icon);

    var _this = _possibleConstructorReturn(this, (Icon.__proto__ || Object.getPrototypeOf(Icon)).call(this));

    _this.componentName = "icon";
    return _this;
  }

  _createClass(Icon, [{
    key: "materialDom",
    value: function materialDom(props) {
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("i", _extends({}, props, { className: "material-icons" }), props.children);
    }
  }]);

  return Icon;
}(__WEBPACK_IMPORTED_MODULE_1__MaterialComponent__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (Icon);

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = supportsCssVariables;
/* harmony export (immutable) */ __webpack_exports__["a"] = getMatchesProperty;
/* harmony export (immutable) */ __webpack_exports__["c"] = getNormalizedEventCoords;
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

function supportsCssVariables(windowObj) {
  var supportsFunctionPresent = windowObj.CSS && typeof windowObj.CSS.supports === 'function';
  if (!supportsFunctionPresent) {
    return;
  }

  var explicitlySupportsCssVars = windowObj.CSS.supports('--css-vars', 'yes');
  // See: https://bugs.webkit.org/show_bug.cgi?id=154669
  // See: README section on Safari
  var weAreFeatureDetectingSafari10plus = windowObj.CSS.supports('(--css-vars: yes)') && windowObj.CSS.supports('color', '#00000000');
  return explicitlySupportsCssVars || weAreFeatureDetectingSafari10plus;
}

function getMatchesProperty(HTMLElementPrototype) {
  return ['webkitMatchesSelector', 'msMatchesSelector', 'matches'].filter(function (p) {
    return p in HTMLElementPrototype;
  }).pop();
}

function getNormalizedEventCoords(ev, pageOffset, clientRect) {
  var x = pageOffset.x,
      y = pageOffset.y;

  var documentX = x + clientRect.left;
  var documentY = y + clientRect.top;

  var normalizedX = void 0;
  var normalizedY = void 0;
  // Determine touch point relative to the ripple container.
  if (ev.type === 'touchstart') {
    normalizedX = ev.changedTouches[0].pageX - documentX;
    normalizedY = ev.changedTouches[0].pageY - documentY;
  } else {
    normalizedX = ev.pageX - documentX;
    normalizedY = ev.pageY - documentY;
  }

  return { x: normalizedX, y: normalizedY };
}

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var EventsTable = function (_Component) {
	_inherits(EventsTable, _Component);

	function EventsTable() {
		_classCallCheck(this, EventsTable);

		return _possibleConstructorReturn(this, (EventsTable.__proto__ || Object.getPrototypeOf(EventsTable)).apply(this, arguments));
	}

	_createClass(EventsTable, [{
		key: "render",
		value: function render() {
			return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
				"div",
				null,
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					"div",
					{ className: "mdc-typography--display1" },
					"Custom events"
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					"ul",
					null,
					this.props.data.map(function (event) {
						return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
							"li",
							null,
							__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
								"div",
								{ className: "mdc-typography--headline" },
								event.name
							),
							__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
								"div",
								{ className: "mdc-typography--body2" },
								event.description
							)
						);
					})
				)
			);
		}
	}]);

	return EventsTable;
}(__WEBPACK_IMPORTED_MODULE_0_preact__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (EventsTable);

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = getCorrectEventName;
/* harmony export (immutable) */ __webpack_exports__["a"] = getCorrectPropertyName;
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @typedef {{
 *   noPrefix: string,
 *   webkitPrefix: string
 * }}
 */
var VendorPropertyMapType = void 0;

/** @const {Object<string, !VendorPropertyMapType>} */
var eventTypeMap = {
  'animationstart': {
    noPrefix: 'animationstart',
    webkitPrefix: 'webkitAnimationStart',
    styleProperty: 'animation'
  },
  'animationend': {
    noPrefix: 'animationend',
    webkitPrefix: 'webkitAnimationEnd',
    styleProperty: 'animation'
  },
  'animationiteration': {
    noPrefix: 'animationiteration',
    webkitPrefix: 'webkitAnimationIteration',
    styleProperty: 'animation'
  },
  'transitionend': {
    noPrefix: 'transitionend',
    webkitPrefix: 'webkitTransitionEnd',
    styleProperty: 'transition'
  }
};

/** @const {Object<string, !VendorPropertyMapType>} */
var cssPropertyMap = {
  'animation': {
    noPrefix: 'animation',
    webkitPrefix: '-webkit-animation'
  },
  'transform': {
    noPrefix: 'transform',
    webkitPrefix: '-webkit-transform'
  },
  'transition': {
    noPrefix: 'transition',
    webkitPrefix: '-webkit-transition'
  }
};

/**
 * @param {!Object} windowObj
 * @return {boolean}
 */
function hasProperShape(windowObj) {
  return windowObj['document'] !== undefined && typeof windowObj['document']['createElement'] === 'function';
}

/**
 * @param {string} eventType
 * @return {boolean}
 */
function eventFoundInMaps(eventType) {
  return eventType in eventTypeMap || eventType in cssPropertyMap;
}

/**
 * @param {string} eventType
 * @param {!Object<string, !VendorPropertyMapType>} map
 * @param {!Element} el
 * @return {string}
 */
function getJavaScriptEventName(eventType, map, el) {
  return map[eventType].styleProperty in el.style ? map[eventType].noPrefix : map[eventType].webkitPrefix;
}

/**
 * Helper function to determine browser prefix for CSS3 animation events
 * and property names.
 * @param {!Object} windowObj
 * @param {string} eventType
 * @return {string}
 */
function getAnimationName(windowObj, eventType) {
  if (!hasProperShape(windowObj) || !eventFoundInMaps(eventType)) {
    return eventType;
  }

  var map = /** @type {!Object<string, !VendorPropertyMapType>} */eventType in eventTypeMap ? eventTypeMap : cssPropertyMap;
  var el = windowObj['document']['createElement']('div');
  var eventName = '';

  if (map === eventTypeMap) {
    eventName = getJavaScriptEventName(eventType, map, el);
  } else {
    eventName = map[eventType].noPrefix in el.style ? map[eventType].noPrefix : map[eventType].webkitPrefix;
  }

  return eventName;
}

// Public functions to access getAnimationName() for JavaScript events or CSS
// property names.

/**
 * @param {!Object} windowObj
 * @param {string} eventType
 * @return {string}
 */
function getCorrectEventName(windowObj, eventType) {
  return getAnimationName(windowObj, eventType);
}

/**
 * @param {!Object} windowObj
 * @param {string} eventType
 * @return {string}
 */
function getCorrectPropertyName(windowObj, eventType) {
  return getAnimationName(windowObj, eventType);
}

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Copyright 2016 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var MDCFoundation = function () {
  _createClass(MDCFoundation, null, [{
    key: "cssClasses",
    get: function get() {
      // Classes extending MDCFoundation should implement this method to return an object which exports every
      // CSS class the foundation class needs as a property. e.g. {ACTIVE: 'mdc-component--active'}
      return {};
    }
  }, {
    key: "strings",
    get: function get() {
      // Classes extending MDCFoundation should implement this method to return an object which exports all
      // semantic strings as constants. e.g. {ARIA_ROLE: 'tablist'}
      return {};
    }
  }, {
    key: "numbers",
    get: function get() {
      // Classes extending MDCFoundation should implement this method to return an object which exports all
      // of its semantic numbers as constants. e.g. {ANIMATION_DELAY_MS: 350}
      return {};
    }
  }, {
    key: "defaultAdapter",
    get: function get() {
      // Classes extending MDCFoundation may choose to implement this getter in order to provide a convenient
      // way of viewing the necessary methods of an adapter. In the future, this could also be used for adapter
      // validation.
      return {};
    }
  }]);

  function MDCFoundation() {
    var adapter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, MDCFoundation);

    this.adapter_ = adapter;
  }

  _createClass(MDCFoundation, [{
    key: "init",
    value: function init() {
      // Subclasses should override this method to perform initialization routines (registering events, etc.)
    }
  }, {
    key: "destroy",
    value: function destroy() {
      // Subclasses should override this method to perform de-initialization routines (de-registering events, etc.)
    }
  }]);

  return MDCFoundation;
}();

/* harmony default export */ __webpack_exports__["a"] = (MDCFoundation);

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = remapEvent;
/* harmony export (immutable) */ __webpack_exports__["c"] = getTransformPropertyName;
/* harmony export (immutable) */ __webpack_exports__["f"] = supportsCssCustomProperties;
/* harmony export (immutable) */ __webpack_exports__["b"] = applyPassive;
/* harmony export (immutable) */ __webpack_exports__["d"] = saveElementTabState;
/* harmony export (immutable) */ __webpack_exports__["e"] = restoreElementTabState;
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var TAB_DATA = 'data-mdc-tabindex';
var TAB_DATA_HANDLED = 'data-mdc-tabindex-handled';

var storedTransformPropertyName_ = void 0;
var supportsPassive_ = void 0;

// Remap touch events to pointer events, if the browser doesn't support touch events.
function remapEvent(eventName) {
  var globalObj = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : window;

  if (!('ontouchstart' in globalObj.document)) {
    switch (eventName) {
      case 'touchstart':
        return 'pointerdown';
      case 'touchmove':
        return 'pointermove';
      case 'touchend':
        return 'pointerup';
      default:
        return eventName;
    }
  }

  return eventName;
}

// Choose the correct transform property to use on the current browser.
function getTransformPropertyName() {
  var globalObj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window;
  var forceRefresh = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  if (storedTransformPropertyName_ === undefined || forceRefresh) {
    var el = globalObj.document.createElement('div');
    var transformPropertyName = 'transform' in el.style ? 'transform' : '-webkit-transform';
    storedTransformPropertyName_ = transformPropertyName;
  }

  return storedTransformPropertyName_;
}

// Determine whether the current browser supports CSS properties.
function supportsCssCustomProperties() {
  var globalObj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window;

  if ('CSS' in globalObj) {
    return globalObj.CSS.supports('(--color: red)');
  }
  return false;
}

// Determine whether the current browser supports passive event listeners, and if so, use them.
function applyPassive() {
  var globalObj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window;
  var forceRefresh = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  if (supportsPassive_ === undefined || forceRefresh) {
    var isSupported = false;
    try {
      globalObj.document.addEventListener('test', null, { get passive() {
          isSupported = true;
        } });
    } catch (e) {}

    supportsPassive_ = isSupported;
  }

  return supportsPassive_ ? { passive: true } : false;
}

// Save the tab state for an element.
function saveElementTabState(el) {
  if (el.hasAttribute('tabindex')) {
    el.setAttribute(TAB_DATA, el.getAttribute('tabindex'));
  }
  el.setAttribute(TAB_DATA_HANDLED, true);
}

// Restore the tab state for an element, if it was saved.
function restoreElementTabState(el) {
  // Only modify elements we've already handled, in case anything was dynamically added since we saved state.
  if (el.hasAttribute(TAB_DATA_HANDLED)) {
    if (el.hasAttribute(TAB_DATA)) {
      el.setAttribute('tabindex', el.getAttribute(TAB_DATA));
      el.removeAttribute(TAB_DATA);
    } else {
      el.removeAttribute('tabindex');
    }
    el.removeAttribute(TAB_DATA_HANDLED);
  }
}

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getTransformPropertyName;
/* harmony export (immutable) */ __webpack_exports__["b"] = clamp;
/* harmony export (immutable) */ __webpack_exports__["c"] = bezierProgress;
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var storedTransformPropertyName_ = void 0;

// Returns the name of the correct transform property to use on the current browser.
function getTransformPropertyName(globalObj) {
  var forceRefresh = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  if (storedTransformPropertyName_ === undefined || forceRefresh) {
    var el = globalObj.document.createElement('div');
    var transformPropertyName = 'transform' in el.style ? 'transform' : 'webkitTransform';
    storedTransformPropertyName_ = transformPropertyName;
  }

  return storedTransformPropertyName_;
}

// Clamps a value between the minimum and the maximum, returning the clamped value.
function clamp(value) {
  var min = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var max = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

  return Math.min(max, Math.max(min, value));
}

// Returns the easing value to apply at time t, for a given cubic bezier curve.
// Control points P0 and P3 are assumed to be (0,0) and (1,1), respectively.
// Paramters are as follows:
// - time: The current time in the animation, scaled between 0 and 1.
// - x1: The x value of control point P1.
// - y1: The y value of control point P1.
// - x2: The x value of control point P2.
// - y2: The y value of control point P2.
function bezierProgress(time, x1, y1, x2, y2) {
  return getBezierCoordinate_(solvePositionFromXValue_(time, x1, x2), y1, y2);
}

// Compute a single coordinate at a position point between 0 and 1.
// c1 and c2 are the matching coordinate on control points P1 and P2, respectively.
// Control points P0 and P3 are assumed to be (0,0) and (1,1), respectively.
// Adapted from https://github.com/google/closure-library/blob/master/closure/goog/math/bezier.js.
function getBezierCoordinate_(t, c1, c2) {
  // Special case start and end.
  if (t === 0 || t === 1) {
    return t;
  }

  // Step one - from 4 points to 3
  var ic0 = t * c1;
  var ic1 = c1 + t * (c2 - c1);
  var ic2 = c2 + t * (1 - c2);

  // Step two - from 3 points to 2
  ic0 += t * (ic1 - ic0);
  ic1 += t * (ic2 - ic1);

  // Final step - last point
  return ic0 + t * (ic1 - ic0);
}

// Project a point onto the Bezier curve, from a given X. Calculates the position t along the curve.
// Adapted from https://github.com/google/closure-library/blob/master/closure/goog/math/bezier.js.
function solvePositionFromXValue_(xVal, x1, x2) {
  var EPSILON = 1e-6;
  var MAX_ITERATIONS = 8;

  if (xVal <= 0) {
    return 0;
  } else if (xVal >= 1) {
    return 1;
  }

  // Initial estimate of t using linear interpolation.
  var t = xVal;

  // Try gradient descent to solve for t. If it works, it is very fast.
  var tMin = 0;
  var tMax = 1;
  var value = 0;
  for (var i = 0; i < MAX_ITERATIONS; i++) {
    value = getBezierCoordinate_(t, x1, x2);
    var derivative = (getBezierCoordinate_(t + EPSILON, x1, x2) - value) / EPSILON;
    if (Math.abs(value - xVal) < EPSILON) {
      return t;
    } else if (Math.abs(derivative) < EPSILON) {
      break;
    } else {
      if (value < xVal) {
        tMin = t;
      } else {
        tMax = t;
      }
      t -= (value - xVal) / derivative;
    }
  }

  // If the gradient descent got stuck in a local minimum, e.g. because
  // the derivative was close to 0, use a Dichotomy refinement instead.
  // We limit the number of interations to 8.
  for (var _i = 0; Math.abs(value - xVal) > EPSILON && _i < MAX_ITERATIONS; _i++) {
    if (value < xVal) {
      tMin = t;
      t = (t + tMax) / 2;
    } else {
      tMax = t;
      t = (t + tMin) / 2;
    }
    value = getBezierCoordinate_(t, x1, x2);
  }
  return t;
}

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__MaterialComponent__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_drawer_temporary__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_drawer_persistent__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__List__ = __webpack_require__(6);
var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};







var TemporaryDrawer = function (_MaterialComponent) {
  _inherits(TemporaryDrawer, _MaterialComponent);

  function TemporaryDrawer() {
    _classCallCheck(this, TemporaryDrawer);

    var _this = _possibleConstructorReturn(this, (TemporaryDrawer.__proto__ || Object.getPrototypeOf(TemporaryDrawer)).call(this));

    _this.componentName = "temporary-drawer";
    return _this;
  }

  _createClass(TemporaryDrawer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.MDComponent = __WEBPACK_IMPORTED_MODULE_2__material_drawer_temporary__["a" /* MDCTemporaryDrawer */].attachTo(this.control);
      this.MDComponent.listen("MDCTemporaryDrawer:open", function () {
        if (_this2.props.onOpen) {
          _this2.props.onOpen();
        }
      });

      this.MDComponent.listen("MDCTemporaryDrawer:close", function () {
        if (_this2.props.onClose) {
          _this2.props.onClose();
        }
      });
    }
  }, {
    key: "materialDom",
    value: function materialDom(props) {
      var _this3 = this;

      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("aside", _extends({
        className: "mdc-typography",
        ref: function ref(control) {
          _this3.control = control;
        }
      }, props), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("nav", { className: "mdc-temporary-drawer__drawer" }, props.children));
    }
  }]);

  return TemporaryDrawer;
}(__WEBPACK_IMPORTED_MODULE_1__MaterialComponent__["a" /* default */]);

var TemporaryDrawerHeader = function (_MaterialComponent2) {
  _inherits(TemporaryDrawerHeader, _MaterialComponent2);

  function TemporaryDrawerHeader() {
    _classCallCheck(this, TemporaryDrawerHeader);

    var _this4 = _possibleConstructorReturn(this, (TemporaryDrawerHeader.__proto__ || Object.getPrototypeOf(TemporaryDrawerHeader)).call(this));

    _this4.componentName = "temporary-drawer__header";
    return _this4;
  }

  _createClass(TemporaryDrawerHeader, [{
    key: "materialDom",
    value: function materialDom(props) {
      var _this5 = this;

      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("header", _extends({
        ref: function ref(control) {
          _this5.control = control;
        }
      }, props), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("div", { className: "mdc-temporary-drawer__header-content" }, props.children));
    }
  }]);

  return TemporaryDrawerHeader;
}(__WEBPACK_IMPORTED_MODULE_1__MaterialComponent__["a" /* default */]);

var TemporaryDrawerContent = function (_MaterialComponent3) {
  _inherits(TemporaryDrawerContent, _MaterialComponent3);

  function TemporaryDrawerContent() {
    _classCallCheck(this, TemporaryDrawerContent);

    var _this6 = _possibleConstructorReturn(this, (TemporaryDrawerContent.__proto__ || Object.getPrototypeOf(TemporaryDrawerContent)).call(this));

    _this6.componentName = "temporary-drawer__content";
    return _this6;
  }

  _createClass(TemporaryDrawerContent, [{
    key: "materialDom",
    value: function materialDom(props) {
      var _this7 = this;

      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("nav", _extends({
        className: "mdc-list",
        ref: function ref(control) {
          _this7.control = control;
        }
      }, props), props.children);
    }
  }]);

  return TemporaryDrawerContent;
}(__WEBPACK_IMPORTED_MODULE_1__MaterialComponent__["a" /* default */]);

/**
 * @prop spacer = false
 */


var PermanentDrawer = function (_MaterialComponent4) {
  _inherits(PermanentDrawer, _MaterialComponent4);

  function PermanentDrawer() {
    _classCallCheck(this, PermanentDrawer);

    var _this8 = _possibleConstructorReturn(this, (PermanentDrawer.__proto__ || Object.getPrototypeOf(PermanentDrawer)).call(this));

    _this8.componentName = "permanent-drawer";
    return _this8;
  }

  _createClass(PermanentDrawer, [{
    key: "materialDom",
    value: function materialDom(props) {
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("nav", _extends({ className: "mdc-typography" }, props), props.spacer && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("div", { className: "mdc-permanent-drawer__toolbar-spacer" }), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("div", { className: "mdc-permanent-drawer__content" }, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("nav", { className: "mdc-list" }, props.children)));
    }
  }]);

  return PermanentDrawer;
}(__WEBPACK_IMPORTED_MODULE_1__MaterialComponent__["a" /* default */]);

var PersistentDrawer = function (_MaterialComponent5) {
  _inherits(PersistentDrawer, _MaterialComponent5);

  function PersistentDrawer() {
    _classCallCheck(this, PersistentDrawer);

    var _this9 = _possibleConstructorReturn(this, (PersistentDrawer.__proto__ || Object.getPrototypeOf(PersistentDrawer)).call(this));

    _this9.componentName = "persistent-drawer";
    return _this9;
  }

  _createClass(PersistentDrawer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this10 = this;

      this.MDComponent = __WEBPACK_IMPORTED_MODULE_3__material_drawer_persistent__["a" /* MDCPersistentDrawer */].attachTo(this.control);
      this.MDComponent.listen("MDCPersistentDrawer:open", function () {
        if (_this10.props.onOpen) {
          _this10.props.onOpen();
        }
      });

      this.MDComponent.listen("MDCPersistentDrawer:close", function () {
        if (_this10.props.onClose) {
          _this10.props.onClose();
        }
      });
    }
  }, {
    key: "materialDom",
    value: function materialDom(props) {
      var _this11 = this;

      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("aside", _extends({
        className: "mdc-typography",
        ref: function ref(control) {
          _this11.control = control;
        }
      }, props), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("nav", { className: "mdc-persistent-drawer__drawer" }));
    }
  }]);

  return PersistentDrawer;
}(__WEBPACK_IMPORTED_MODULE_1__MaterialComponent__["a" /* default */]);

var PersistentDrawerHeader = function (_MaterialComponent6) {
  _inherits(PersistentDrawerHeader, _MaterialComponent6);

  function PersistentDrawerHeader() {
    _classCallCheck(this, PersistentDrawerHeader);

    var _this12 = _possibleConstructorReturn(this, (PersistentDrawerHeader.__proto__ || Object.getPrototypeOf(PersistentDrawerHeader)).call(this));

    _this12.componentName = "persistent-drawer__header";
    return _this12;
  }

  _createClass(PersistentDrawerHeader, [{
    key: "materialDom",
    value: function materialDom(props) {
      var _this13 = this;

      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("header", _extends({
        ref: function ref(control) {
          _this13.control = control;
        }
      }, props), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("div", { className: "mdc-persistent-drawer__header-content" }, props.children));
    }
  }]);

  return PersistentDrawerHeader;
}(__WEBPACK_IMPORTED_MODULE_1__MaterialComponent__["a" /* default */]);

var PersistentDrawerContent = function (_TemporaryDrawerConte) {
  _inherits(PersistentDrawerContent, _TemporaryDrawerConte);

  function PersistentDrawerContent() {
    _classCallCheck(this, PersistentDrawerContent);

    var _this14 = _possibleConstructorReturn(this, (PersistentDrawerContent.__proto__ || Object.getPrototypeOf(PersistentDrawerContent)).call(this));

    _this14.componentName = "mdc-persistent-drawer__content";
    return _this14;
  }

  return PersistentDrawerContent;
}(TemporaryDrawerContent);

/**
 * @prop selected = false
 */


var DrawerItem = function (_List$LinkItem) {
  _inherits(DrawerItem, _List$LinkItem);

  function DrawerItem() {
    _classCallCheck(this, DrawerItem);

    return _possibleConstructorReturn(this, (DrawerItem.__proto__ || Object.getPrototypeOf(DrawerItem)).call(this));
  }

  _createClass(DrawerItem, [{
    key: "materialDom",
    value: function materialDom(props) {
      var returnedNode = _get(DrawerItem.prototype.__proto__ || Object.getPrototypeOf(DrawerItem.prototype), "materialDom", this).call(this, props);
      /* Logic to add selected class */
      if (props.selected) {
        returnedNode.attributes["className"] = "mdc-temporary-drawer--selected mdc-permanent-drawer--selected";
      }
      return returnedNode;
    }
  }]);

  return DrawerItem;
}(__WEBPACK_IMPORTED_MODULE_4__List__["a" /* default */].LinkItem);

var Drawer = {};

Drawer.DrawerItem = DrawerItem;
Drawer.TemporaryDrawerHeader = TemporaryDrawerHeader;
Drawer.TemporaryDrawerContent = TemporaryDrawerContent;
Drawer.TemporaryDrawer = TemporaryDrawer;
Drawer.PermanentDrawer = PermanentDrawer;
Drawer.PermanentDrawer = PersistentDrawer;
Drawer.PersistentDrawer = PersistentDrawer;
Drawer.PersistentDrawerHeader = PersistentDrawerHeader;
Drawer.PersistentDrawerContent = PersistentDrawerContent;

/* harmony default export */ __webpack_exports__["a"] = (Drawer);

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__MaterialComponent__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_radio___ = __webpack_require__(67);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

function _objectWithoutProperties(obj, keys) {
  var target = {};for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
  }return target;
}





/**
 * @prop mini = false
 * @prop plain = false
 */

var Radio = function (_MaterialComponent) {
  _inherits(Radio, _MaterialComponent);

  function Radio() {
    _classCallCheck(this, Radio);

    var _this = _possibleConstructorReturn(this, (Radio.__proto__ || Object.getPrototypeOf(Radio)).call(this));

    _this.componentName = "radio";
    return _this;
  }

  _createClass(Radio, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.MDComponent = __WEBPACK_IMPORTED_MODULE_2__material_radio___["a" /* MDCRadio */].attachTo(this.control);
    }
  }, {
    key: "materialDom",
    value: function materialDom(allprops) {
      var _this2 = this;

      var className = allprops.className,
          props = _objectWithoutProperties(allprops, ["className"]);

      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("div", {
        className: className + "",
        ref: function ref(control) {
          _this2.control = control;
        }
      }, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("input", _extends({ className: "mdc-radio__native-control", type: "radio" }, props)), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("div", { className: "mdc-radio__background" }, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("div", { className: "mdc-radio__outer-circle" }), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("div", { className: "mdc-radio__inner-circle" })));
    }
  }]);

  return Radio;
}(__WEBPACK_IMPORTED_MODULE_1__MaterialComponent__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (Radio);

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__MaterialComponent__ = __webpack_require__(4);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

function _objectWithoutProperties(obj, keys) {
  var target = {};for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
  }return target;
}




/**
 * @prop disabled = false
 */

var Switch = function (_MaterialComponent) {
  _inherits(Switch, _MaterialComponent);

  function Switch() {
    _classCallCheck(this, Switch);

    var _this = _possibleConstructorReturn(this, (Switch.__proto__ || Object.getPrototypeOf(Switch)).call(this));

    _this.componentName = "switch";
    _this._mdcProps = ["disabled"];
    return _this;
  }

  _createClass(Switch, [{
    key: "materialDom",
    value: function materialDom(allprops) {
      var className = allprops.className,
          props = _objectWithoutProperties(allprops, ["className"]);

      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("div", { className: className + "" }, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("input", _extends({
        type: "checkbox",
        className: "mdc-switch__native-control"
      }, props)), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("div", { className: "mdc-switch__background" }, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("div", { className: "mdc-switch__knob" })));
    }
  }]);

  return Switch;
}(__WEBPACK_IMPORTED_MODULE_1__MaterialComponent__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (Switch);

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__MaterialComponent__ = __webpack_require__(4);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};




/**
 * @prop fixed = false
 */

var Toolbar = function (_MaterialComponent) {
  _inherits(Toolbar, _MaterialComponent);

  function Toolbar() {
    _classCallCheck(this, Toolbar);

    var _this = _possibleConstructorReturn(this, (Toolbar.__proto__ || Object.getPrototypeOf(Toolbar)).call(this));

    _this.componentName = "toolbar";
    _this._mdcProps = ["fixed"];
    return _this;
  }

  _createClass(Toolbar, [{
    key: "materialDom",
    value: function materialDom(props) {
      var _this2 = this;

      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("header", _extends({
        ref: function ref(control) {
          _this2.control = control;
        }
      }, props), props.children);
    }
  }]);

  return Toolbar;
}(__WEBPACK_IMPORTED_MODULE_1__MaterialComponent__["a" /* default */]);

var ToolbarRow = function (_MaterialComponent2) {
  _inherits(ToolbarRow, _MaterialComponent2);

  function ToolbarRow() {
    _classCallCheck(this, ToolbarRow);

    var _this3 = _possibleConstructorReturn(this, (ToolbarRow.__proto__ || Object.getPrototypeOf(ToolbarRow)).call(this));

    _this3.componentName = "toolbar__row";
    return _this3;
  }

  return ToolbarRow;
}(__WEBPACK_IMPORTED_MODULE_1__MaterialComponent__["a" /* default */]);

/**
 * @prop align-end = false
 * @prop align-start = false
 */


var ToolbarSection = function (_MaterialComponent3) {
  _inherits(ToolbarSection, _MaterialComponent3);

  function ToolbarSection() {
    _classCallCheck(this, ToolbarSection);

    var _this4 = _possibleConstructorReturn(this, (ToolbarSection.__proto__ || Object.getPrototypeOf(ToolbarSection)).call(this));

    _this4.componentName = "toolbar__section";
    _this4._mdcProps = ["align-start", "align-end"];
    return _this4;
  }

  _createClass(ToolbarSection, [{
    key: "materialDom",
    value: function materialDom(props) {
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("section", props, props.children);
    }
  }]);

  return ToolbarSection;
}(__WEBPACK_IMPORTED_MODULE_1__MaterialComponent__["a" /* default */]);

var ToolbarIcon = function (_MaterialComponent4) {
  _inherits(ToolbarIcon, _MaterialComponent4);

  function ToolbarIcon() {
    _classCallCheck(this, ToolbarIcon);

    var _this5 = _possibleConstructorReturn(this, (ToolbarIcon.__proto__ || Object.getPrototypeOf(ToolbarIcon)).call(this));

    _this5.componentName = "toolbar__icon";
    return _this5;
  }

  _createClass(ToolbarIcon, [{
    key: "materialDom",
    value: function materialDom(props) {
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("a", _extends({ className: "material-icons" }, props), props.children || "menu");
    }
  }]);

  return ToolbarIcon;
}(__WEBPACK_IMPORTED_MODULE_1__MaterialComponent__["a" /* default */]);

/**
 * @prop title = ''
 */


var ToolbarTitle = function (_MaterialComponent5) {
  _inherits(ToolbarTitle, _MaterialComponent5);

  function ToolbarTitle() {
    _classCallCheck(this, ToolbarTitle);

    var _this6 = _possibleConstructorReturn(this, (ToolbarTitle.__proto__ || Object.getPrototypeOf(ToolbarTitle)).call(this));

    _this6.componentName = "toolbar__title";
    return _this6;
  }

  _createClass(ToolbarTitle, [{
    key: "materialDom",
    value: function materialDom(props) {
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("span", props, props.children);
    }
  }]);

  return ToolbarTitle;
}(__WEBPACK_IMPORTED_MODULE_1__MaterialComponent__["a" /* default */]);

Toolbar.Section = ToolbarSection;
Toolbar.Icon = ToolbarIcon;
Toolbar.Title = ToolbarTitle;
Toolbar.Row = ToolbarRow;

/* harmony default export */ __webpack_exports__["a"] = (Toolbar);

/***/ }),
/* 21 */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_preact_material_components_Icon__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_preact_material_components_Toolbar__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_preact_material_components_Drawer__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_preact_material_components_List__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_preact_material_components_Switch__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_preact_material_components_FormField__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ButtonsPage_ButtonsPage_jsx__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__FabPage_FabPage_jsx__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__CheckboxPage_CheckboxPage_jsx__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__SwitchPage_SwitchPage_jsx__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__DialogPage_DialogPage_jsx__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__DrawerPage_DrawerPage_jsx__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ElevationPage_ElevationPage_jsx__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__RadioPage_RadioPage_jsx__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ListPage_ListPage_jsx__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__SelectPage_SelectPage_jsx__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__SnackbarPage_SnackbarPage_jsx__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__TabsPage_TabsPage_jsx__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__TextfieldPage_TextfieldPage_jsx__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ToolbarPage_ToolbarPage_jsx__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__CardPage_CardPage_jsx__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__IconPage_IconPage_jsx__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__FormfieldPage_FormfieldPage_jsx__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__LayoutGridPage_LayoutGridPage_jsx__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__routie__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__routie___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_25__routie__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__CodeBlock_jsx__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__invidual_component_sample_txt__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__invidual_component_sample_txt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_27__invidual_component_sample_txt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__js_sample_txt__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__js_sample_txt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_28__js_sample_txt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__css_sample_txt__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__css_sample_txt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_29__css_sample_txt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30_preact_material_components_style_css__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30_preact_material_components_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_30_preact_material_components_style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__Home_css__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__Home_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_31__Home_css__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }


































var Home = function (_Component) {
	_inherits(Home, _Component);

	function Home() {
		_classCallCheck(this, Home);

		var _this = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this));

		_this.state = {
			darkMode: false
		};
		return _this;
	}

	_createClass(Home, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var _this2 = this;

			__WEBPACK_IMPORTED_MODULE_25__routie___default()('/', function (component) {
				_this2.setState({
					component: null,
					toolbarTitle: ""
				});
			});
			__WEBPACK_IMPORTED_MODULE_25__routie___default()('/component/:name', function (component) {
				_this2.setState({
					component: component,
					toolbarTitle: component
				});
			});
		}
	}, {
		key: 'closeDrawer',
		value: function closeDrawer() {
			this.drawer.MDComponent.open = false;
		}
	}, {
		key: 'toggleDarkMode',
		value: function toggleDarkMode() {
			this.setState({
				darkMode: !this.state.darkMode
			});
			if (this.state.darkMode) {
				document.body.classList.add('mdc-theme--dark');
			} else {
				document.body.classList.remove('mdc-theme--dark');
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var _this3 = this;

			return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
				'div',
				{ className: 'home' },
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'div',
					{ className: this.state.component ? "hero collapsed" : "hero" },
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						__WEBPACK_IMPORTED_MODULE_2_preact_material_components_Toolbar__["a" /* default */],
						null,
						__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
							__WEBPACK_IMPORTED_MODULE_2_preact_material_components_Toolbar__["a" /* default */].Row,
							null,
							__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
								__WEBPACK_IMPORTED_MODULE_2_preact_material_components_Toolbar__["a" /* default */].Section,
								{ 'align-start': true },
								__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
									__WEBPACK_IMPORTED_MODULE_2_preact_material_components_Toolbar__["a" /* default */].Icon,
									{ href: '#', onClick: function onClick(e) {
											e.preventDefault();
											_this3.drawer.MDComponent.open = true;
										} },
									'menu'
								),
								__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
									__WEBPACK_IMPORTED_MODULE_2_preact_material_components_Toolbar__["a" /* default */].Title,
									null,
									this.state.toolbarTitle
								)
							),
							__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
								__WEBPACK_IMPORTED_MODULE_2_preact_material_components_Toolbar__["a" /* default */].Section,
								{ 'align-end': true },
								__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
									__WEBPACK_IMPORTED_MODULE_6_preact_material_components_FormField__["a" /* default */],
									{ className: 'field-darkmode' },
									'Dark Mode',
									__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_5_preact_material_components_Switch__["a" /* default */], { className: 'switch-darkmode', onChange: function onChange() {
											_this3.toggleDarkMode();
										} })
								)
							)
						)
					),
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						'svg',
						{ width: '200', height: '200', xmlns: 'http://www.w3.org/2000/svg', preserveAspectRatio: 'xMinYMid' },
						__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
							'g',
							null,
							__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
								'title',
								null,
								'background'
							),
							__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('rect', { fill: 'none', id: 'canvas_background', height: '202', width: '202', y: '-1', x: '-1' })
						),
						__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
							'g',
							null,
							__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
								'title',
								null,
								'Layer 1'
							),
							__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('path', { stroke: '#673ab8', id: 'svg_19', fill: '#673ab8', d: 'm100,6.87844l83.36915,46.56078l0,93.12156l-83.36915,46.56078l-83.36914,-46.56078l0,-93.12156l83.36914,-46.56078z' }),
							__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
								'g',
								{ id: 'svg_34' },
								__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
									'g',
									{ stroke: 'null', id: 'svg_5' },
									__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('circle', { stroke: 'null', id: 'svg_1', r: '56.999668', cy: '99.999997', cx: '99.333339', 'class': 'st0' }),
									__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('path', { stroke: 'null', id: 'svg_2', d: 'm59.433574,60.100231l79.799535,0l0,79.799535l-79.799535,0l0,-79.799535z', 'class': 'st1' }),
									__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('path', { stroke: 'null', id: 'svg_3', d: 'm139.233109,60.100231l-39.899768,79.799535l-39.899768,-79.799535l79.799535,0z', 'class': 'st2' }),
									__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('path', { stroke: 'null', id: 'svg_4', d: 'm42.333671,43.000329l113.999336,0l0,113.999336l-113.999336,0l0,-113.999336z', 'class': 'st3' })
								),
								__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('ellipse', { ry: '1.999985', rx: '1.999985', id: 'svg_25', cy: '93.333385', cx: '99.333336', 'stroke-width': 'null', stroke: 'null', fill: '#673ab8' })
							),
							__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
								'g',
								{ stroke: 'null', id: 'svg_36' },
								__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('ellipse', { stroke: '#673ab8', transform: 'matrix(0.17321515449627276,0.17321515449627273,-0.17321515449627273,0.17321515449627276,63.46362017579341,27.139604895916065) ', ry: '20.957719', rx: '75.190925', id: 'svg_32', cy: '89.457308', cx: '296.539126', 'fill-opacity': 'null', 'stroke-width': '5', fill: 'none' }),
								__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('ellipse', { stroke: '#673ab8', transform: 'matrix(0.17321515449627276,-0.17321515449627273,0.17321515449627273,0.17321515449627276,28.182048694186207,62.16614021567621) ', ry: '20.957719', rx: '75.190925', id: 'svg_35', cy: '297.275314', cx: '113.492909', 'fill-opacity': 'null', 'stroke-width': '5', fill: 'none' })
							)
						)
					),
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						'div',
						{ className: 'mdc-typography--display2 name' },
						'preact-material-components'
					)
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					__WEBPACK_IMPORTED_MODULE_3_preact_material_components_Drawer__["a" /* default */].TemporaryDrawer,
					{ ref: function ref(drawer) {
							_this3.drawer = drawer;
						} },
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						__WEBPACK_IMPORTED_MODULE_3_preact_material_components_Drawer__["a" /* default */].TemporaryDrawerHeader,
						{ className: 'mdc-theme--primary-bg' },
						'Components'
					),
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						__WEBPACK_IMPORTED_MODULE_3_preact_material_components_Drawer__["a" /* default */].TemporaryDrawerContent,
						null,
						__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
							__WEBPACK_IMPORTED_MODULE_3_preact_material_components_Drawer__["a" /* default */].DrawerItem,
							{ onClick: function onClick() {
									__WEBPACK_IMPORTED_MODULE_25__routie___default()('/');
									_this3.closeDrawer();
								} },
							__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
								__WEBPACK_IMPORTED_MODULE_4_preact_material_components_List__["a" /* default */].ItemIcon,
								null,
								'home'
							),
							'Home'
						),
						__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
							__WEBPACK_IMPORTED_MODULE_3_preact_material_components_Drawer__["a" /* default */].DrawerItem,
							{ onClick: function onClick() {
									__WEBPACK_IMPORTED_MODULE_25__routie___default()('/component/button');
									_this3.closeDrawer();
								} },
							__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
								__WEBPACK_IMPORTED_MODULE_4_preact_material_components_List__["a" /* default */].ItemIcon,
								null,
								'code'
							),
							'Button'
						),
						__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
							__WEBPACK_IMPORTED_MODULE_3_preact_material_components_Drawer__["a" /* default */].DrawerItem,
							{ onClick: function onClick() {
									__WEBPACK_IMPORTED_MODULE_25__routie___default()('/component/card');
									_this3.closeDrawer();
								} },
							__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
								__WEBPACK_IMPORTED_MODULE_4_preact_material_components_List__["a" /* default */].ItemIcon,
								null,
								'code'
							),
							'Card'
						),
						__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
							__WEBPACK_IMPORTED_MODULE_3_preact_material_components_Drawer__["a" /* default */].DrawerItem,
							{ onClick: function onClick() {
									__WEBPACK_IMPORTED_MODULE_25__routie___default()('/component/checkbox');
									_this3.closeDrawer();
								} },
							__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
								__WEBPACK_IMPORTED_MODULE_4_preact_material_components_List__["a" /* default */].ItemIcon,
								null,
								'code'
							),
							'Checkbox'
						),
						__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
							__WEBPACK_IMPORTED_MODULE_3_preact_material_components_Drawer__["a" /* default */].DrawerItem,
							{ onClick: function onClick() {
									__WEBPACK_IMPORTED_MODULE_25__routie___default()('/component/dialog');
									_this3.closeDrawer();
								} },
							__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
								__WEBPACK_IMPORTED_MODULE_4_preact_material_components_List__["a" /* default */].ItemIcon,
								null,
								'code'
							),
							'Dialog'
						),
						__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
							__WEBPACK_IMPORTED_MODULE_3_preact_material_components_Drawer__["a" /* default */].DrawerItem,
							{ onClick: function onClick() {
									__WEBPACK_IMPORTED_MODULE_25__routie___default()('/component/drawer');
									_this3.closeDrawer();
								} },
							__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
								__WEBPACK_IMPORTED_MODULE_4_preact_material_components_List__["a" /* default */].ItemIcon,
								null,
								'code'
							),
							'Drawer'
						),
						__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
							__WEBPACK_IMPORTED_MODULE_3_preact_material_components_Drawer__["a" /* default */].DrawerItem,
							{ onClick: function onClick() {
									__WEBPACK_IMPORTED_MODULE_25__routie___default()('/component/elevation');
									_this3.closeDrawer();
								} },
							__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
								__WEBPACK_IMPORTED_MODULE_4_preact_material_components_List__["a" /* default */].ItemIcon,
								null,
								'code'
							),
							'Elevation'
						),
						__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
							__WEBPACK_IMPORTED_MODULE_3_preact_material_components_Drawer__["a" /* default */].DrawerItem,
							{ onClick: function onClick() {
									__WEBPACK_IMPORTED_MODULE_25__routie___default()('/component/fab');
									_this3.closeDrawer();
								} },
							__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
								__WEBPACK_IMPORTED_MODULE_4_preact_material_components_List__["a" /* default */].ItemIcon,
								null,
								'code'
							),
							'Fab'
						),
						__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
							__WEBPACK_IMPORTED_MODULE_3_preact_material_components_Drawer__["a" /* default */].DrawerItem,
							{ onClick: function onClick() {
									__WEBPACK_IMPORTED_MODULE_25__routie___default()('/component/formfield');
									_this3.closeDrawer();
								} },
							__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
								__WEBPACK_IMPORTED_MODULE_4_preact_material_components_List__["a" /* default */].ItemIcon,
								null,
								'code'
							),
							'Formfield'
						),
						__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
							__WEBPACK_IMPORTED_MODULE_3_preact_material_components_Drawer__["a" /* default */].DrawerItem,
							{ onClick: function onClick() {
									__WEBPACK_IMPORTED_MODULE_25__routie___default()('/component/icon');
									_this3.closeDrawer();
								} },
							__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
								__WEBPACK_IMPORTED_MODULE_4_preact_material_components_List__["a" /* default */].ItemIcon,
								null,
								'code'
							),
							'Icon'
						),
						__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
							__WEBPACK_IMPORTED_MODULE_3_preact_material_components_Drawer__["a" /* default */].DrawerItem,
							{ onClick: function onClick() {
									__WEBPACK_IMPORTED_MODULE_25__routie___default()('/component/layoutgrid');
									_this3.closeDrawer();
								} },
							__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
								__WEBPACK_IMPORTED_MODULE_4_preact_material_components_List__["a" /* default */].ItemIcon,
								null,
								'code'
							),
							'LayoutGrid'
						),
						__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
							__WEBPACK_IMPORTED_MODULE_3_preact_material_components_Drawer__["a" /* default */].DrawerItem,
							{ onClick: function onClick() {
									__WEBPACK_IMPORTED_MODULE_25__routie___default()('/component/list');
									_this3.closeDrawer();
								} },
							__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
								__WEBPACK_IMPORTED_MODULE_4_preact_material_components_List__["a" /* default */].ItemIcon,
								null,
								'code'
							),
							'List'
						),
						__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
							__WEBPACK_IMPORTED_MODULE_3_preact_material_components_Drawer__["a" /* default */].DrawerItem,
							{ onClick: function onClick() {
									__WEBPACK_IMPORTED_MODULE_25__routie___default()('/component/radio');
									_this3.closeDrawer();
								} },
							__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
								__WEBPACK_IMPORTED_MODULE_4_preact_material_components_List__["a" /* default */].ItemIcon,
								null,
								'code'
							),
							'Radio'
						),
						__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
							__WEBPACK_IMPORTED_MODULE_3_preact_material_components_Drawer__["a" /* default */].DrawerItem,
							{ onClick: function onClick() {
									__WEBPACK_IMPORTED_MODULE_25__routie___default()('/component/select');
									_this3.closeDrawer();
								} },
							__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
								__WEBPACK_IMPORTED_MODULE_4_preact_material_components_List__["a" /* default */].ItemIcon,
								null,
								'code'
							),
							'Select'
						),
						__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
							__WEBPACK_IMPORTED_MODULE_3_preact_material_components_Drawer__["a" /* default */].DrawerItem,
							{ onClick: function onClick() {
									__WEBPACK_IMPORTED_MODULE_25__routie___default()('/component/snackbar');
									_this3.closeDrawer();
								} },
							__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
								__WEBPACK_IMPORTED_MODULE_4_preact_material_components_List__["a" /* default */].ItemIcon,
								null,
								'code'
							),
							'Snackbar'
						),
						__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
							__WEBPACK_IMPORTED_MODULE_3_preact_material_components_Drawer__["a" /* default */].DrawerItem,
							{ onClick: function onClick() {
									__WEBPACK_IMPORTED_MODULE_25__routie___default()('/component/switch');
									_this3.closeDrawer();
								} },
							__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
								__WEBPACK_IMPORTED_MODULE_4_preact_material_components_List__["a" /* default */].ItemIcon,
								null,
								'code'
							),
							'Switch'
						),
						__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
							__WEBPACK_IMPORTED_MODULE_3_preact_material_components_Drawer__["a" /* default */].DrawerItem,
							{ onClick: function onClick() {
									__WEBPACK_IMPORTED_MODULE_25__routie___default()('/component/tabs');
									_this3.closeDrawer();
								} },
							__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
								__WEBPACK_IMPORTED_MODULE_4_preact_material_components_List__["a" /* default */].ItemIcon,
								null,
								'code'
							),
							'Tabs'
						),
						__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
							__WEBPACK_IMPORTED_MODULE_3_preact_material_components_Drawer__["a" /* default */].DrawerItem,
							{ onClick: function onClick() {
									__WEBPACK_IMPORTED_MODULE_25__routie___default()('/component/textfield');
									_this3.closeDrawer();
								} },
							__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
								__WEBPACK_IMPORTED_MODULE_4_preact_material_components_List__["a" /* default */].ItemIcon,
								null,
								'code'
							),
							'Textfield'
						),
						__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
							__WEBPACK_IMPORTED_MODULE_3_preact_material_components_Drawer__["a" /* default */].DrawerItem,
							{ onClick: function onClick() {
									__WEBPACK_IMPORTED_MODULE_25__routie___default()('/component/toolbar');
									_this3.closeDrawer();
								} },
							__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
								__WEBPACK_IMPORTED_MODULE_4_preact_material_components_List__["a" /* default */].ItemIcon,
								null,
								'code'
							),
							'Toolbar'
						),
						__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
							__WEBPACK_IMPORTED_MODULE_4_preact_material_components_List__["a" /* default */],
							null,
							__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
								__WEBPACK_IMPORTED_MODULE_4_preact_material_components_List__["a" /* default */].Item,
								null,
								__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
									__WEBPACK_IMPORTED_MODULE_4_preact_material_components_List__["a" /* default */].ItemIcon,
									null,
									'code'
								),
								'IconToggle'
							),
							__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
								__WEBPACK_IMPORTED_MODULE_4_preact_material_components_List__["a" /* default */].Item,
								null,
								__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
									__WEBPACK_IMPORTED_MODULE_4_preact_material_components_List__["a" /* default */].ItemIcon,
									null,
									'code'
								),
								'Menu'
							)
						)
					)
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'div',
					{ className: 'content' },
					this.state.component === 'button' && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_7__ButtonsPage_ButtonsPage_jsx__["a" /* default */], null),
					this.state.component === 'fab' && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_8__FabPage_FabPage_jsx__["a" /* default */], null),
					this.state.component === 'card' && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_21__CardPage_CardPage_jsx__["a" /* default */], null),
					this.state.component === 'checkbox' && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_9__CheckboxPage_CheckboxPage_jsx__["a" /* default */], null),
					this.state.component === 'switch' && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_10__SwitchPage_SwitchPage_jsx__["a" /* default */], null),
					this.state.component === 'drawer' && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_12__DrawerPage_DrawerPage_jsx__["a" /* default */], null),
					this.state.component === 'dialog' && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_11__DialogPage_DialogPage_jsx__["a" /* default */], null),
					this.state.component === 'elevation' && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_13__ElevationPage_ElevationPage_jsx__["a" /* default */], null),
					this.state.component === 'radio' && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_14__RadioPage_RadioPage_jsx__["a" /* default */], null),
					this.state.component === 'list' && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_15__ListPage_ListPage_jsx__["a" /* default */], null),
					this.state.component === 'select' && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_16__SelectPage_SelectPage_jsx__["a" /* default */], null),
					this.state.component === 'snackbar' && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_17__SnackbarPage_SnackbarPage_jsx__["a" /* default */], null),
					this.state.component === 'textfield' && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_19__TextfieldPage_TextfieldPage_jsx__["a" /* default */], null),
					this.state.component === 'toolbar' && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_20__ToolbarPage_ToolbarPage_jsx__["a" /* default */], null),
					this.state.component === 'icon' && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_22__IconPage_IconPage_jsx__["a" /* default */], null),
					this.state.component === 'formfield' && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_23__FormfieldPage_FormfieldPage_jsx__["a" /* default */], null),
					this.state.component === 'layoutgrid' && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_24__LayoutGridPage_LayoutGridPage_jsx__["a" /* default */], null),
					this.state.component === 'tabs' && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_18__TabsPage_TabsPage_jsx__["a" /* default */], null),
					!this.state.component && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						'div',
						null,
						__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
							'div',
							{ className: 'mdc-typography--body' },
							__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
								'div',
								null,
								__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
									'span',
									{ className: 'grey' },
									'preact-material-components'
								),
								' is a thin opinionless wrapper around ',
								__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
									'a',
									{ href: 'https://github.com/material-components/material-components-web' },
									'material-components-web'
								),
								'. Use these components to add material components to your web app, without worrying about the extra code of the the components which you are not using.'
							),
							__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
								'div',
								{ className: 'mdc-typography--display1' },
								'How to use'
							),
							__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
								'div',
								null,
								'All the components of ',
								__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
									'span',
									{ className: 'grey' },
									'preact-material-components'
								),
								' are built to work independently. So there are couple of ways to use them'
							),
							__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
								'div',
								null,
								__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
									__WEBPACK_IMPORTED_MODULE_26__CodeBlock_jsx__["a" /* default */],
									null,
									__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
										'code',
										{ 'class': 'lang-js' },
										'npm i -D preact-material-components'
									)
								)
							),
							__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
								'div',
								null,
								__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
									'div',
									{ className: 'mdc-typography--title' },
									'Using the jS of the component'
								),
								__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
									'div',
									null,
									'If you are using an ES6 based code base consider using the components individually, as none of the tree shaking currently removes unused classes.',
									__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
										__WEBPACK_IMPORTED_MODULE_26__CodeBlock_jsx__["a" /* default */],
										null,
										__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
											'code',
											{ 'class': 'lang-js' },
											__WEBPACK_IMPORTED_MODULE_28__js_sample_txt___default.a
										)
									),
									'You can however import all the components together, you should not. Importing this way will bring unnecessary code of other components in your final bundle. This might hit you metrics like time to interactivity, load times etc. DO NOT BLOAT YOUR BUNDLE.',
									__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
										__WEBPACK_IMPORTED_MODULE_26__CodeBlock_jsx__["a" /* default */],
										null,
										__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
											'code',
											{ 'class': 'lang-js' },
											__WEBPACK_IMPORTED_MODULE_27__invidual_component_sample_txt___default.a
										)
									)
								)
							),
							__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
								'div',
								null,
								__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
									'div',
									{ className: 'mdc-typography--title' },
									'Using the CSS of the component'
								),
								__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
									'div',
									null,
									'If you are using only a couple of components from the entire package, try importing individual css, for the same reasom "TO AVOID THE BLOAT OF YOUR CSS BUNDLE".',
									__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
										__WEBPACK_IMPORTED_MODULE_26__CodeBlock_jsx__["a" /* default */],
										null,
										__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
											'code',
											{ 'class': 'lang-js' },
											__WEBPACK_IMPORTED_MODULE_29__css_sample_txt___default.a
										)
									),
									'However the approach might work against you if you use a lot of components, in this case prefer adding the entire stylesheet at once. As this is more optimized for such cases.',
									__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
										__WEBPACK_IMPORTED_MODULE_26__CodeBlock_jsx__["a" /* default */],
										null,
										__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
											'code',
											{ 'class': 'lang-js' },
											'import \'preact-material-components/style.css\';'
										)
									)
								)
							)
						)
					)
				)
			);
		}
	}]);

	return Home;
}(__WEBPACK_IMPORTED_MODULE_0_preact__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Home);

/***/ }),
/* 23 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 24 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 25 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_preact_material_components_Button__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ComponentTable_jsx__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__CodeBlock_jsx__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ButtonsPage_css__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ButtonsPage_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__ButtonsPage_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sample_txt__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sample_txt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__sample_txt__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var ButtonsPage = function (_Component) {
	_inherits(ButtonsPage, _Component);

	function ButtonsPage() {
		_classCallCheck(this, ButtonsPage);

		var _this = _possibleConstructorReturn(this, (ButtonsPage.__proto__ || Object.getPrototypeOf(ButtonsPage)).call(this));

		_this.propsTable = [{
			component: 'Button',
			props: [{
				name: 'ripple',
				description: 'Adds riple effect to the button'
			}, {
				name: 'primary',
				description: 'Adds primary colors to the button'
			}, {
				name: 'accent',
				description: 'Adds accent colors to the button'
			}, {
				name: 'dense',
				description: 'Adds dense padding to the button'
			}, {
				name: 'compact',
				description: 'Adds compact padding to the button'
			}]
		}];
		return _this;
	}

	_createClass(ButtonsPage, [{
		key: 'render',
		value: function render() {
			console.log(__WEBPACK_IMPORTED_MODULE_5__sample_txt___default.a);
			return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
				'div',
				{ className: 'page-buttons' },
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_2__ComponentTable_jsx__["a" /* default */], { data: this.propsTable }),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'div',
					{ className: 'mdc-typography--display1' },
					'Sample code '
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					__WEBPACK_IMPORTED_MODULE_3__CodeBlock_jsx__["a" /* default */],
					null,
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						'code',
						{ 'class': 'lang-js' },
						__WEBPACK_IMPORTED_MODULE_5__sample_txt___default.a
					)
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'div',
					{ className: 'mdc-typography--display1' },
					'Original documentation'
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'div',
					{ className: 'mdc-typography--body' },
					'This component encapsulates ',
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						'span',
						{ className: 'strong' },
						'mdc-button'
					),
					', you can refer to its documentation',
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						'a',
						{ href: 'https://github.com/material-components/material-components-web/tree/master/packages/mdc-button' },
						' here'
					),
					'.'
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'div',
					{ className: 'mdc-typography--display1' },
					'Demo '
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'div',
					{ className: 'mdc-typography--title' },
					'Flats '
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Button__["a" /* default */],
					null,
					'Flat button without ripple'
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Button__["a" /* default */],
					{ ripple: true },
					'Flat button with ripple'
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Button__["a" /* default */],
					{ accent: true },
					'Accented Flat button'
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Button__["a" /* default */],
					{ dense: true },
					'Dense Flat button '
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Button__["a" /* default */],
					{ compact: true },
					'Compact Flat button '
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Button__["a" /* default */],
					{ primary: true },
					'Primary Flat button '
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'div',
					{ className: 'mdc-typography--title' },
					'Raised '
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Button__["a" /* default */],
					{ raised: true },
					'Raised button without ripple'
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Button__["a" /* default */],
					{ raised: true, ripple: true },
					'Raised button with ripple'
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Button__["a" /* default */],
					{ raised: true, accent: true },
					'Accented Raised button'
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Button__["a" /* default */],
					{ raised: true, dense: true },
					'Dense Raised button '
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Button__["a" /* default */],
					{ raised: true, compact: true },
					'Compact Raised button '
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Button__["a" /* default */],
					{ raised: true, primary: true },
					'Primary Raised button '
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'div',
					{ className: 'mdc-typography--title' },
					'Raised '
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Button__["a" /* default */],
					{ disabled: true },
					'Disabled button without ripple'
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Button__["a" /* default */],
					{ disabled: true, ripple: true },
					'Disabled button with ripple'
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Button__["a" /* default */],
					{ disabled: true, accent: true },
					'Accented Disabled button'
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Button__["a" /* default */],
					{ disabled: true, dense: true },
					'Dense Disabled button '
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Button__["a" /* default */],
					{ disabled: true, compact: true },
					'Compact Disabled button '
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Button__["a" /* default */],
					{ disabled: true, primary: true },
					'Primary Disabled button '
				)
			);
		}
	}]);

	return ButtonsPage;
}(__WEBPACK_IMPORTED_MODULE_0_preact__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (ButtonsPage);

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_preact_material_components_Card__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ComponentTable_jsx__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__CardPage_css__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__CardPage_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__CardPage_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__CodeBlock_jsx__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sample_txt__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sample_txt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__sample_txt__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var CardPage = function (_Component) {
	_inherits(CardPage, _Component);

	function CardPage() {
		_classCallCheck(this, CardPage);

		var _this = _possibleConstructorReturn(this, (CardPage.__proto__ || Object.getPrototypeOf(CardPage)).call(this));

		_this.propsTable = [{
			component: 'Card',
			props: []
		}, {
			component: 'Card.Primary',
			props: []
		}, {
			component: 'Card.SupportingText',
			props: []
		}, {
			component: 'Card.Actions',
			props: [{
				name: 'vertical',
				description: 'This arranges the actions vertically'
			}]
		}, {
			component: 'Card.Action',
			props: []
		}, {
			component: 'Card.Media',
			props: []
		}, {
			component: 'Card.Title',
			props: [{
				name: 'large',
				description: 'This enlarges the title size'
			}]
		}, {
			component: 'Card.Subtitle',
			props: []
		}];
		return _this;
	}

	_createClass(CardPage, [{
		key: 'render',
		value: function render() {
			return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
				'div',
				{ className: 'page-card' },
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_2__ComponentTable_jsx__["a" /* default */], { data: this.propsTable }),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'div',
					{ className: 'mdc-typography--display1' },
					'Sample code '
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					__WEBPACK_IMPORTED_MODULE_4__CodeBlock_jsx__["a" /* default */],
					null,
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						'code',
						{ 'class': 'lang-js' },
						__WEBPACK_IMPORTED_MODULE_5__sample_txt___default.a
					)
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'div',
					{ className: 'mdc-typography--display1' },
					'Original documentation'
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'div',
					{ className: 'mdc-typography--body' },
					'This component encapsulates ',
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						'span',
						{ className: 'strong' },
						'mdc-card'
					),
					', you can refer to its documentation',
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						'a',
						{ href: 'https://github.com/material-components/material-components-web/tree/master/packages/mdc-card' },
						' here'
					),
					'.'
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'div',
					{ className: 'mdc-typography--display1' },
					'Demo '
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Card__["a" /* default */],
					null,
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Card__["a" /* default */].Primary,
						null,
						__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
							__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Card__["a" /* default */].Title,
							null,
							'Hi'
						),
						__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
							__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Card__["a" /* default */].Subtitle,
							null,
							'Let me subtitle'
						)
					),
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Card__["a" /* default */].Media, { className: 'card-media' }),
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Card__["a" /* default */].Actions,
						null,
						__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
							__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Card__["a" /* default */].Action,
							null,
							'OKAy'
						)
					)
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Card__["a" /* default */],
					null,
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Card__["a" /* default */].Primary,
						null,
						__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
							__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Card__["a" /* default */].Title,
							null,
							'Hi'
						),
						__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
							__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Card__["a" /* default */].Subtitle,
							null,
							'Let me subtitle'
						)
					),
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Card__["a" /* default */].SupportingText,
						null,
						'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.'
					),
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Card__["a" /* default */].Actions,
						null,
						__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
							__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Card__["a" /* default */].Action,
							null,
							'OKAy'
						)
					)
				)
			);
		}
	}]);

	return CardPage;
}(__WEBPACK_IMPORTED_MODULE_0_preact__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (CardPage);

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_preact_material_components_Checkbox__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_preact_material_components_Button__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_preact_material_components_FormField__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ComponentTable_jsx__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__CheckboxPage_css__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__CheckboxPage_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__CheckboxPage_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__CodeBlock_jsx__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__sample_txt__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__sample_txt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__sample_txt__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }










var CheckboxPage = function (_Component) {
	_inherits(CheckboxPage, _Component);

	function CheckboxPage() {
		_classCallCheck(this, CheckboxPage);

		var _this = _possibleConstructorReturn(this, (CheckboxPage.__proto__ || Object.getPrototypeOf(CheckboxPage)).call(this));

		_this.propsTable = [{
			component: 'Checkbox',
			props: []
		}];
		return _this;
	}

	_createClass(CheckboxPage, [{
		key: 'render',
		value: function render() {
			var _this2 = this;

			return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
				'div',
				{ className: 'page-checkbox' },
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_4__ComponentTable_jsx__["a" /* default */], { data: this.propsTable }),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'div',
					{ className: 'mdc-typography--display1' },
					'Sample code '
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					__WEBPACK_IMPORTED_MODULE_6__CodeBlock_jsx__["a" /* default */],
					null,
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						'code',
						{ 'class': 'lang-js' },
						__WEBPACK_IMPORTED_MODULE_7__sample_txt___default.a
					)
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'div',
					{ className: 'mdc-typography--display1' },
					'Original documentation'
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'div',
					{ className: 'mdc-typography--body' },
					'This component encapsulates ',
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						'span',
						{ className: 'strong' },
						'mdc-checkbox'
					),
					', you can refer to its documentation',
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						'a',
						{ href: 'https://github.com/material-components/material-components-web/tree/master/packages/mdc-checkbox' },
						' here'
					),
					'.'
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'div',
					{ className: 'mdc-typography--display1' },
					'Demo '
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					__WEBPACK_IMPORTED_MODULE_3_preact_material_components_FormField__["a" /* default */],
					null,
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Checkbox__["a" /* default */], { id: 'basic-checkbox-label', ref: function ref(cb) {
							_this2.cb = cb;
						} }),
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						'label',
						{ 'for': 'basic-checkbox', id: 'basic-checkbox-label' },
						'This is my checkbox'
					)
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					__WEBPACK_IMPORTED_MODULE_2_preact_material_components_Button__["a" /* default */],
					{ raised: true, onClick: function onClick() {
							_this2.cb.MDComponent.indeterminate = true;
						} },
					'Make indeterminate'
				)
			);
		}
	}]);

	return CheckboxPage;
}(__WEBPACK_IMPORTED_MODULE_0_preact__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (CheckboxPage);

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_preact_material_components_Dialog__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_preact_material_components_Button__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_preact_material_components_List__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ComponentTable_jsx__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__DialogPage_css__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__DialogPage_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__DialogPage_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__CodeBlock_jsx__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__sample_txt__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__sample_txt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__sample_txt__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }










var DialogPage = function (_Component) {
	_inherits(DialogPage, _Component);

	function DialogPage() {
		_classCallCheck(this, DialogPage);

		var _this = _possibleConstructorReturn(this, (DialogPage.__proto__ || Object.getPrototypeOf(DialogPage)).call(this));

		_this.propsTable = [{
			component: 'Dialog',
			props: []
		}, {
			component: 'Dialog.Header',
			props: []
		}, {
			component: 'Dialog.Body',
			props: [{
				name: 'scrollable',
				description: 'Adds vertical scroll for content.'
			}]
		}, {
			component: 'Dialog.Footer',
			props: []
		}, {
			component: 'Dialog.FooterButton',
			props: [{
				name: 'accept',
				description: 'Makes the button, default button.'
			}, {
				name: 'cencel',
				description: 'Makes the button, cancel button.'
			}]
		}];
		return _this;
	}

	_createClass(DialogPage, [{
		key: 'render',
		value: function render() {
			var _this2 = this;

			return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
				'div',
				{ className: 'page-dialog' },
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_4__ComponentTable_jsx__["a" /* default */], { data: this.propsTable }),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'div',
					{ className: 'mdc-typography--display1' },
					'Sample code '
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					__WEBPACK_IMPORTED_MODULE_6__CodeBlock_jsx__["a" /* default */],
					null,
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						'code',
						{ 'class': 'lang-js' },
						__WEBPACK_IMPORTED_MODULE_7__sample_txt___default.a
					)
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'div',
					{ className: 'mdc-typography--display1' },
					'Original documentation'
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'div',
					{ className: 'mdc-typography--body' },
					'This component encapsulates ',
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						'span',
						{ className: 'strong' },
						'mdc-dialog'
					),
					', you can refer to its documentation',
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						'a',
						{ href: 'https://github.com/material-components/material-components-web/tree/master/packages/mdc-dialog' },
						' here'
					),
					'.'
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'div',
					{ className: 'mdc-typography--display1' },
					'Demo '
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					__WEBPACK_IMPORTED_MODULE_2_preact_material_components_Button__["a" /* default */],
					{ primary: true, raised: true, onClick: function onClick() {
							_this2.normalDlg.MDComponent.show();
						} },
					'Show Dialog'
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					__WEBPACK_IMPORTED_MODULE_2_preact_material_components_Button__["a" /* default */],
					{ primary: true, raised: true, onClick: function onClick() {
							_this2.scrollingDlg.MDComponent.show();
						} },
					'Show Scrollable Dialog'
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Dialog__["a" /* default */],
					{ ref: function ref(normalDlg) {
							_this2.normalDlg = normalDlg;
						} },
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Dialog__["a" /* default */].Header,
						null,
						'Use Google\'s location service?'
					),
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Dialog__["a" /* default */].Body,
						null,
						'Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.'
					),
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Dialog__["a" /* default */].Footer,
						null,
						__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
							__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Dialog__["a" /* default */].FooterButton,
							{ cancel: true },
							'Decline'
						),
						__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
							__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Dialog__["a" /* default */].FooterButton,
							{ accept: true },
							'Accept'
						)
					)
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Dialog__["a" /* default */],
					{ ref: function ref(scrollingDlg) {
							_this2.scrollingDlg = scrollingDlg;
						} },
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Dialog__["a" /* default */].Header,
						null,
						'Scroll for me ;)'
					),
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Dialog__["a" /* default */].Body,
						{ scrollable: true },
						__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
							__WEBPACK_IMPORTED_MODULE_3_preact_material_components_List__["a" /* default */],
							null,
							__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
								__WEBPACK_IMPORTED_MODULE_3_preact_material_components_List__["a" /* default */].Item,
								null,
								'Item 1'
							),
							__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
								__WEBPACK_IMPORTED_MODULE_3_preact_material_components_List__["a" /* default */].Item,
								null,
								'Item 2'
							),
							__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
								__WEBPACK_IMPORTED_MODULE_3_preact_material_components_List__["a" /* default */].Item,
								null,
								'Item 3'
							),
							__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
								__WEBPACK_IMPORTED_MODULE_3_preact_material_components_List__["a" /* default */].Item,
								null,
								'Item 4'
							),
							__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
								__WEBPACK_IMPORTED_MODULE_3_preact_material_components_List__["a" /* default */].Item,
								null,
								'Item 5'
							)
						)
					),
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Dialog__["a" /* default */].Footer,
						null,
						__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
							__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Dialog__["a" /* default */].FooterButton,
							{ cancel: true },
							'Decline'
						),
						__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
							__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Dialog__["a" /* default */].FooterButton,
							{ accept: true },
							'Accept'
						)
					)
				)
			);
		}
	}]);

	return DialogPage;
}(__WEBPACK_IMPORTED_MODULE_0_preact__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (DialogPage);

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_preact_material_components_Drawer__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ComponentTable_jsx__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__EventsTable_jsx__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__DrawerPage_css__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__DrawerPage_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__DrawerPage_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__CodeBlock_jsx__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__sample_txt__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__sample_txt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__sample_txt__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var DrawerPage = function (_Component) {
	_inherits(DrawerPage, _Component);

	function DrawerPage() {
		_classCallCheck(this, DrawerPage);

		var _this = _possibleConstructorReturn(this, (DrawerPage.__proto__ || Object.getPrototypeOf(DrawerPage)).call(this));

		_this.propsTable = [{
			component: 'Drawer.TemporaryDrawer',
			props: []
		}, {
			component: 'Drawer.TemporaryDrawerHeader',
			props: []
		}, {
			component: 'Drawer.TemporaryDrawerContent',
			props: []
		}, {
			component: 'Drawer.DrawerItem',
			props: [{
				name: 'selected',
				description: 'Tells if the drawer item is selected.'
			}]
		}, {
			component: 'Drawer.PermanentDrawer',
			props: [{
				name: 'spacer',
				description: 'Teels if the tollbar height equivalent spacer is required.'
			}]
		}];
		_this.eventsTable = [{
			name: 'onOpen',
			description: 'Fired when the drawer is opened.'
		}, {
			name: 'onClose',
			description: 'Fired when the drawer is closed.'
		}];
		return _this;
	}

	_createClass(DrawerPage, [{
		key: 'render',
		value: function render() {
			return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
				'div',
				{ className: 'page-toolbar' },
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_2__ComponentTable_jsx__["a" /* default */], { data: this.propsTable }),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_3__EventsTable_jsx__["a" /* default */], { data: this.eventsTable }),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'div',
					{ className: 'mdc-typography--display1' },
					'Sample code '
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					__WEBPACK_IMPORTED_MODULE_5__CodeBlock_jsx__["a" /* default */],
					null,
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						'code',
						{ 'class': 'lang-js' },
						__WEBPACK_IMPORTED_MODULE_6__sample_txt___default.a
					)
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'div',
					{ className: 'mdc-typography--display1' },
					'Original documentation'
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'div',
					{ className: 'mdc-typography--body' },
					'This component encapsulates ',
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						'span',
						{ className: 'strong' },
						'mdc-drawer'
					),
					', you can refer to its documentation',
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						'a',
						{ href: 'https://github.com/material-components/material-components-web/tree/master/packages/mdc-drawer' },
						' here'
					),
					'.'
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'div',
					{ className: 'mdc-typography--display1' },
					'Demo '
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'div',
					{ className: 'mdc-typography--title' },
					'not available '
				)
			);
		}
	}]);

	return DrawerPage;
}(__WEBPACK_IMPORTED_MODULE_0_preact__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (DrawerPage);

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_preact_material_components_Elevation__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ComponentTable_jsx__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ElevationPage_css__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ElevationPage_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__ElevationPage_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__CodeBlock_jsx__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sample_txt__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sample_txt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__sample_txt__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var ElevationPage = function (_Component) {
	_inherits(ElevationPage, _Component);

	function ElevationPage() {
		_classCallCheck(this, ElevationPage);

		var _this = _possibleConstructorReturn(this, (ElevationPage.__proto__ || Object.getPrototypeOf(ElevationPage)).call(this));

		_this.propsTable = [{
			component: 'Elevation',
			props: [{
				name: 'z',
				value: '1 to 25',
				description: 'Add one of z1 to z25=true to get different elevations.'
			}]
		}];
		return _this;
	}

	_createClass(ElevationPage, [{
		key: 'render',
		value: function render() {
			return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
				'div',
				{ className: 'page-elevation' },
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_2__ComponentTable_jsx__["a" /* default */], { data: this.propsTable }),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'div',
					{ className: 'mdc-typography--display1' },
					'Sample code '
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					__WEBPACK_IMPORTED_MODULE_4__CodeBlock_jsx__["a" /* default */],
					null,
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						'code',
						{ 'class': 'lang-js' },
						__WEBPACK_IMPORTED_MODULE_5__sample_txt___default.a
					)
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'div',
					{ className: 'mdc-typography--display1' },
					'Original documentation'
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'div',
					{ className: 'mdc-typography--body' },
					'This component encapsulates ',
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						'span',
						{ className: 'strong' },
						'mdc-elevation'
					),
					', you can refer to its documentation',
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						'a',
						{ href: 'https://github.com/material-components/material-components-web/tree/master/packages/mdc-elevation' },
						' here'
					),
					'.'
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'div',
					{ className: 'mdc-typography--display1' },
					'Demo '
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Elevation__["a" /* default */],
					{ z: 0 },
					'Z0'
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Elevation__["a" /* default */],
					{ z: 1 },
					'Z1'
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Elevation__["a" /* default */],
					{ z: 2 },
					'Z2'
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Elevation__["a" /* default */],
					{ z: 3 },
					'Z3'
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Elevation__["a" /* default */],
					{ z: 4 },
					'Z4'
				)
			);
		}
	}]);

	return ElevationPage;
}(__WEBPACK_IMPORTED_MODULE_0_preact__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (ElevationPage);

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_preact_material_components_Fab__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_preact_material_components_Icon__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ComponentTable_jsx__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__FabPage_css__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__FabPage_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__FabPage_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__CodeBlock_jsx__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__sample_txt__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__sample_txt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__sample_txt__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var FabPage = function (_Component) {
	_inherits(FabPage, _Component);

	function FabPage() {
		_classCallCheck(this, FabPage);

		var _this = _possibleConstructorReturn(this, (FabPage.__proto__ || Object.getPrototypeOf(FabPage)).call(this));

		_this.propsTable = [{
			component: 'Fab',
			props: [{
				name: 'ripple',
				description: 'Adds riple effect to the fab.'
			}, {
				name: 'plain',
				description: 'Adds plain colors to the fab.'
			}, {
				name: 'mini',
				description: 'Shrinks the size of the fab.'
			}]
		}];
		return _this;
	}

	_createClass(FabPage, [{
		key: 'render',
		value: function render() {
			return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
				'div',
				{ className: 'page-fab' },
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_3__ComponentTable_jsx__["a" /* default */], { data: this.propsTable }),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'div',
					{ className: 'mdc-typography--display1' },
					'Sample code '
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					__WEBPACK_IMPORTED_MODULE_5__CodeBlock_jsx__["a" /* default */],
					null,
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						'code',
						{ 'class': 'lang-js' },
						__WEBPACK_IMPORTED_MODULE_6__sample_txt___default.a
					)
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'div',
					{ className: 'mdc-typography--display1' },
					'Original documentation'
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'div',
					{ className: 'mdc-typography--body' },
					'This component encapsulates ',
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						'span',
						{ className: 'strong' },
						'mdc-fab'
					),
					', you can refer to its documentation',
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						'a',
						{ href: 'https://github.com/material-components/material-components-web/tree/master/packages/mdc-fab' },
						' here'
					),
					'.'
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'div',
					{ className: 'mdc-typography--display1' },
					'Demo '
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'div',
					{ className: 'mdc-typography--title' },
					'Defaults '
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Fab__["a" /* default */],
					null,
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						__WEBPACK_IMPORTED_MODULE_2_preact_material_components_Icon__["a" /* default */],
						null,
						'favorite_border'
					)
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Fab__["a" /* default */],
					{ ripple: true },
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						__WEBPACK_IMPORTED_MODULE_2_preact_material_components_Icon__["a" /* default */],
						null,
						'favorite_border'
					)
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Fab__["a" /* default */],
					{ mini: true },
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						__WEBPACK_IMPORTED_MODULE_2_preact_material_components_Icon__["a" /* default */],
						null,
						'favorite_border'
					)
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'div',
					{ className: 'mdc-typography--title' },
					'Plain '
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Fab__["a" /* default */],
					{ plain: true },
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						__WEBPACK_IMPORTED_MODULE_2_preact_material_components_Icon__["a" /* default */],
						null,
						'favorite_border'
					)
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Fab__["a" /* default */],
					{ plain: true, ripple: true },
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						__WEBPACK_IMPORTED_MODULE_2_preact_material_components_Icon__["a" /* default */],
						null,
						'favorite_border'
					)
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Fab__["a" /* default */],
					{ plain: true, mini: true },
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						__WEBPACK_IMPORTED_MODULE_2_preact_material_components_Icon__["a" /* default */],
						null,
						'favorite_border'
					)
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'div',
					{ className: 'mdc-typography--title' },
					'Disabled '
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Fab__["a" /* default */],
					{ disabled: true },
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						__WEBPACK_IMPORTED_MODULE_2_preact_material_components_Icon__["a" /* default */],
						null,
						'favorite_border'
					)
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Fab__["a" /* default */],
					{ disabled: true, ripple: true },
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						__WEBPACK_IMPORTED_MODULE_2_preact_material_components_Icon__["a" /* default */],
						null,
						'favorite_border'
					)
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Fab__["a" /* default */],
					{ disabled: true, mini: true },
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						__WEBPACK_IMPORTED_MODULE_2_preact_material_components_Icon__["a" /* default */],
						null,
						'favorite_border'
					)
				)
			);
		}
	}]);

	return FabPage;
}(__WEBPACK_IMPORTED_MODULE_0_preact__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (FabPage);

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_preact_material_components_Radio__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_preact_material_components_FormField__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ComponentTable_jsx__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__FormfieldPage_css__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__FormfieldPage_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__FormfieldPage_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__CodeBlock_jsx__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__sample_txt__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__sample_txt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__sample_txt__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var FormfieldPage = function (_Component) {
	_inherits(FormfieldPage, _Component);

	function FormfieldPage() {
		_classCallCheck(this, FormfieldPage);

		var _this = _possibleConstructorReturn(this, (FormfieldPage.__proto__ || Object.getPrototypeOf(FormfieldPage)).call(this));

		_this.propsTable = [{
			component: 'Formfield',
			props: []
		}];
		return _this;
	}

	_createClass(FormfieldPage, [{
		key: 'render',
		value: function render() {
			return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
				'div',
				{ className: 'page-radio' },
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_3__ComponentTable_jsx__["a" /* default */], { data: this.propsTable }),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'div',
					{ className: 'mdc-typography--display1' },
					'Sample code '
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					__WEBPACK_IMPORTED_MODULE_5__CodeBlock_jsx__["a" /* default */],
					null,
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						'code',
						{ 'class': 'lang-js' },
						__WEBPACK_IMPORTED_MODULE_6__sample_txt___default.a
					)
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'div',
					{ className: 'mdc-typography--display1' },
					'Original documentation'
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'div',
					{ className: 'mdc-typography--body' },
					'This component encapsulates ',
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						'span',
						{ className: 'strong' },
						'mdc-form-field'
					),
					', you can refer to its documentation',
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						'a',
						{ href: 'https://github.com/material-components/material-components-web/tree/master/packages/mdc-form-field' },
						' here'
					),
					'.'
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'div',
					{ className: 'mdc-typography--display1' },
					'Demo '
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					__WEBPACK_IMPORTED_MODULE_2_preact_material_components_FormField__["a" /* default */],
					null,
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Radio__["a" /* default */], { id: 'r1', name: 'opts' }),
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						'label',
						{ 'for': 'r1' },
						'Radio 1'
					)
				)
			);
		}
	}]);

	return FormfieldPage;
}(__WEBPACK_IMPORTED_MODULE_0_preact__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (FormfieldPage);

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_preact_material_components_Icon__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ComponentTable_jsx__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__IconPage_css__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__IconPage_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__IconPage_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__CodeBlock_jsx__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sample_txt__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sample_txt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__sample_txt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__linktag_txt__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__linktag_txt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__linktag_txt__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var IconPage = function (_Component) {
	_inherits(IconPage, _Component);

	function IconPage() {
		_classCallCheck(this, IconPage);

		var _this = _possibleConstructorReturn(this, (IconPage.__proto__ || Object.getPrototypeOf(IconPage)).call(this));

		_this.propsTable = [{
			component: 'Icon',
			props: []
		}];
		return _this;
	}

	_createClass(IconPage, [{
		key: 'render',
		value: function render() {
			return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
				'div',
				{ className: 'page-list' },
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_2__ComponentTable_jsx__["a" /* default */], { data: this.propsTable }),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'div',
					{ className: 'mdc-typography--display1' },
					'linktag code '
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					__WEBPACK_IMPORTED_MODULE_4__CodeBlock_jsx__["a" /* default */],
					null,
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						'code',
						{ 'class': 'lang-js' },
						__WEBPACK_IMPORTED_MODULE_5__sample_txt___default.a
					)
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'div',
					{ className: 'mdc-typography--display1' },
					'Demo '
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'div',
					null,
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Icon__["a" /* default */],
						null,
						'menu'
					)
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'div',
					null,
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Icon__["a" /* default */],
						null,
						'favorite_border'
					)
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'div',
					{ className: 'mdc-typography--title' },
					'Note '
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'div',
					{ className: 'mdc-typography--caption' },
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						'div',
						null,
						'In order to use these you will need to import respective font icons '
					),
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						'div',
						null,
						__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
							__WEBPACK_IMPORTED_MODULE_4__CodeBlock_jsx__["a" /* default */],
							null,
							__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
								'code',
								{ 'class': 'lang-html' },
								__WEBPACK_IMPORTED_MODULE_6__linktag_txt___default.a
							)
						)
					)
				)
			);
		}
	}]);

	return IconPage;
}(__WEBPACK_IMPORTED_MODULE_0_preact__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (IconPage);

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_preact_material_components_LayoutGrid__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ComponentTable_jsx__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__LayoutGridPage_css__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__LayoutGridPage_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__LayoutGridPage_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__CodeBlock_jsx__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sample_txt__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sample_txt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__sample_txt__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var LayoutGridPage = function (_Component) {
	_inherits(LayoutGridPage, _Component);

	function LayoutGridPage() {
		_classCallCheck(this, LayoutGridPage);

		var _this = _possibleConstructorReturn(this, (LayoutGridPage.__proto__ || Object.getPrototypeOf(LayoutGridPage)).call(this));

		_this.propsTable = [{
			component: 'LayoutGrid',
			props: []
		}, {
			component: 'LayoutGrid.Cell',
			props: [{
				name: 'cols',
				description: 'Column width of cell (general).',
				value: '[1..12]'
			}, {
				name: 'desktopCols',
				description: 'Column width of cell (desktop breakpoint).',
				value: '[1..12]'
			}, {
				name: 'tabletCols',
				description: 'Column width of cell (tablet breakpoint).',
				value: '[1..12]'
			}, {
				name: 'phoneCols',
				description: 'Column width of cell (phone breakpoint).',
				value: '[1..12]'
			}, {
				name: 'order',
				description: 'Allows reordering of items in grid.',
				value: '[1..12]'
			}, {
				name: 'align',
				description: 'Vertical alignment of cell within row.',
				value: '[top|middle|bottom]'
			}]
		}];
		return _this;
	}

	_createClass(LayoutGridPage, [{
		key: 'render',
		value: function render() {
			return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
				'div',
				{ className: 'page-layout-grid' },
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_2__ComponentTable_jsx__["a" /* default */], { data: this.propsTable }),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'div',
					{ className: 'mdc-typography--display1' },
					'Sample code'
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					__WEBPACK_IMPORTED_MODULE_4__CodeBlock_jsx__["a" /* default */],
					null,
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						'code',
						{ 'class': 'lang-js' },
						__WEBPACK_IMPORTED_MODULE_5__sample_txt___default.a
					)
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'div',
					{ className: 'mdc-typography--display1' },
					'Original documentation'
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'div',
					{ className: 'mdc-typography--body' },
					'This component encapsulates ',
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						'span',
						{ className: 'strong' },
						'mdc-layout-grid'
					),
					'. You can refer to its documentation',
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						'a',
						{ href: 'https://github.com/material-components/material-components-web/tree/master/packages/mdc-layout-grid' },
						' here'
					),
					'.'
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'div',
					{ className: 'mdc-typography--display1' },
					'Demo'
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'div',
					{ className: 'mdc-typography--body' },
					'Grid of 1 column wide items'
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					__WEBPACK_IMPORTED_MODULE_1_preact_material_components_LayoutGrid__["a" /* default */],
					null,
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						__WEBPACK_IMPORTED_MODULE_1_preact_material_components_LayoutGrid__["a" /* default */].Cell,
						{ cols: '1' },
						'1'
					),
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						__WEBPACK_IMPORTED_MODULE_1_preact_material_components_LayoutGrid__["a" /* default */].Cell,
						{ cols: '1' },
						'1'
					),
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						__WEBPACK_IMPORTED_MODULE_1_preact_material_components_LayoutGrid__["a" /* default */].Cell,
						{ cols: '1' },
						'1'
					),
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						__WEBPACK_IMPORTED_MODULE_1_preact_material_components_LayoutGrid__["a" /* default */].Cell,
						{ cols: '1' },
						'1'
					),
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						__WEBPACK_IMPORTED_MODULE_1_preact_material_components_LayoutGrid__["a" /* default */].Cell,
						{ cols: '1' },
						'1'
					),
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						__WEBPACK_IMPORTED_MODULE_1_preact_material_components_LayoutGrid__["a" /* default */].Cell,
						{ cols: '1' },
						'1'
					),
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						__WEBPACK_IMPORTED_MODULE_1_preact_material_components_LayoutGrid__["a" /* default */].Cell,
						{ cols: '1' },
						'1'
					),
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						__WEBPACK_IMPORTED_MODULE_1_preact_material_components_LayoutGrid__["a" /* default */].Cell,
						{ cols: '1' },
						'1'
					),
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						__WEBPACK_IMPORTED_MODULE_1_preact_material_components_LayoutGrid__["a" /* default */].Cell,
						{ cols: '1' },
						'1'
					),
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						__WEBPACK_IMPORTED_MODULE_1_preact_material_components_LayoutGrid__["a" /* default */].Cell,
						{ cols: '1' },
						'1'
					),
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						__WEBPACK_IMPORTED_MODULE_1_preact_material_components_LayoutGrid__["a" /* default */].Cell,
						{ cols: '1' },
						'1'
					),
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						__WEBPACK_IMPORTED_MODULE_1_preact_material_components_LayoutGrid__["a" /* default */].Cell,
						{ cols: '1' },
						'1'
					)
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'div',
					{ className: 'mdc-typography--body' },
					'Grid of 4 column wide items'
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					__WEBPACK_IMPORTED_MODULE_1_preact_material_components_LayoutGrid__["a" /* default */],
					null,
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						__WEBPACK_IMPORTED_MODULE_1_preact_material_components_LayoutGrid__["a" /* default */].Cell,
						{ cols: '4' },
						'4'
					),
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						__WEBPACK_IMPORTED_MODULE_1_preact_material_components_LayoutGrid__["a" /* default */].Cell,
						{ cols: '4' },
						'4'
					),
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						__WEBPACK_IMPORTED_MODULE_1_preact_material_components_LayoutGrid__["a" /* default */].Cell,
						{ cols: '4' },
						'4'
					)
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'div',
					{ className: 'mdc-typography--body' },
					'Grid of differently sized items'
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					__WEBPACK_IMPORTED_MODULE_1_preact_material_components_LayoutGrid__["a" /* default */],
					null,
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						__WEBPACK_IMPORTED_MODULE_1_preact_material_components_LayoutGrid__["a" /* default */].Cell,
						{ cols: '6' },
						'6'
					),
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						__WEBPACK_IMPORTED_MODULE_1_preact_material_components_LayoutGrid__["a" /* default */].Cell,
						{ cols: '4' },
						'4'
					),
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						__WEBPACK_IMPORTED_MODULE_1_preact_material_components_LayoutGrid__["a" /* default */].Cell,
						{ cols: '2' },
						'2'
					)
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'div',
					{ className: 'mdc-typography--body' },
					'Grid of items with tweaks at different screen sizes'
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					__WEBPACK_IMPORTED_MODULE_1_preact_material_components_LayoutGrid__["a" /* default */],
					null,
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						__WEBPACK_IMPORTED_MODULE_1_preact_material_components_LayoutGrid__["a" /* default */].Cell,
						{ cols: '6', tabletCols: '8' },
						'6 (8 tablet)'
					),
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						__WEBPACK_IMPORTED_MODULE_1_preact_material_components_LayoutGrid__["a" /* default */].Cell,
						{ cols: '4', tabletCols: '6' },
						'4 (6 tablet)'
					),
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						__WEBPACK_IMPORTED_MODULE_1_preact_material_components_LayoutGrid__["a" /* default */].Cell,
						{ cols: '2', phoneCols: '4' },
						'2 (4 phone)'
					)
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'div',
					{ className: 'mdc-typography--body' },
					'Grid with different alignments'
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					__WEBPACK_IMPORTED_MODULE_1_preact_material_components_LayoutGrid__["a" /* default */],
					null,
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						__WEBPACK_IMPORTED_MODULE_1_preact_material_components_LayoutGrid__["a" /* default */].Cell,
						{ cols: '3' },
						'default'
					),
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						__WEBPACK_IMPORTED_MODULE_1_preact_material_components_LayoutGrid__["a" /* default */].Cell,
						{ cols: '3', align: 'bottom' },
						'bottom'
					),
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						__WEBPACK_IMPORTED_MODULE_1_preact_material_components_LayoutGrid__["a" /* default */].Cell,
						{ cols: '3', align: 'top' },
						'top'
					),
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						__WEBPACK_IMPORTED_MODULE_1_preact_material_components_LayoutGrid__["a" /* default */].Cell,
						{ cols: '3', align: 'middle' },
						'middle'
					)
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'div',
					{ className: 'mdc-typography--body' },
					'Grid with reordered items'
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					__WEBPACK_IMPORTED_MODULE_1_preact_material_components_LayoutGrid__["a" /* default */],
					null,
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						__WEBPACK_IMPORTED_MODULE_1_preact_material_components_LayoutGrid__["a" /* default */].Cell,
						{ cols: '3', order: '3' },
						'First cell'
					),
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						__WEBPACK_IMPORTED_MODULE_1_preact_material_components_LayoutGrid__["a" /* default */].Cell,
						{ cols: '3', order: '1' },
						'Second cell'
					),
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						__WEBPACK_IMPORTED_MODULE_1_preact_material_components_LayoutGrid__["a" /* default */].Cell,
						{ cols: '3', order: '4' },
						'Third cell'
					),
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						__WEBPACK_IMPORTED_MODULE_1_preact_material_components_LayoutGrid__["a" /* default */].Cell,
						{ cols: '3', order: '2' },
						'Fourth cell'
					)
				)
			);
		}
	}]);

	return LayoutGridPage;
}(__WEBPACK_IMPORTED_MODULE_0_preact__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (LayoutGridPage);

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_preact_material_components_List__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ComponentTable_jsx__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ListPage_css__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ListPage_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__ListPage_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__CodeBlock_jsx__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sample_txt__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sample_txt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__sample_txt__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var ListPage = function (_Component) {
	_inherits(ListPage, _Component);

	function ListPage() {
		_classCallCheck(this, ListPage);

		var _this = _possibleConstructorReturn(this, (ListPage.__proto__ || Object.getPrototypeOf(ListPage)).call(this));

		_this.propsTable = [{
			component: 'List',
			props: [{
				name: 'dense',
				description: 'Makes the list with lesser padding.'
			}, {
				name: 'two-line',
				description: 'Makes container for two line list item.'
			}]
		}, {
			component: 'List.Item',
			props: []
		}, {
			component: 'List.LinkItem',
			props: []
		}, {
			component: 'List.LinkItem',
			props: [{
				name: 'align-start',
				description: 'Makes the Icon align to start.'
			}, {
				name: 'align-end',
				description: 'Makes the Icon align to end.'
			}]
		}, {
			component: 'List.ItemAvatar',
			props: [{
				name: 'src',
				value: 'path of avatar image',
				description: 'path of avatar image'
			}]
		}, {
			component: 'List.TextContainer',
			props: []
		}, {
			component: 'List.PrimaryText',
			props: []
		}, {
			component: 'List.SecondaryText',
			props: []
		}];
		return _this;
	}

	_createClass(ListPage, [{
		key: 'render',
		value: function render() {
			return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
				'div',
				{ className: 'page-list' },
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_2__ComponentTable_jsx__["a" /* default */], { data: this.propsTable }),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'div',
					{ className: 'mdc-typography--display1' },
					'Sample code '
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					__WEBPACK_IMPORTED_MODULE_4__CodeBlock_jsx__["a" /* default */],
					null,
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						'code',
						{ 'class': 'lang-js' },
						__WEBPACK_IMPORTED_MODULE_5__sample_txt___default.a
					)
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'div',
					{ className: 'mdc-typography--display1' },
					'Original documentation'
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'div',
					{ className: 'mdc-typography--body' },
					'This component encapsulates ',
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						'span',
						{ className: 'strong' },
						'mdc-list'
					),
					', you can refer to its documentation',
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						'a',
						{ href: 'https://github.com/material-components/material-components-web/tree/master/packages/mdc-list' },
						' here'
					),
					'.'
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'div',
					{ className: 'mdc-typography--display1' },
					'Demo '
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'div',
					{ className: 'mdc-typography--title' },
					'Normal '
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					__WEBPACK_IMPORTED_MODULE_1_preact_material_components_List__["a" /* default */],
					null,
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						__WEBPACK_IMPORTED_MODULE_1_preact_material_components_List__["a" /* default */].Item,
						null,
						'Item1'
					),
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						__WEBPACK_IMPORTED_MODULE_1_preact_material_components_List__["a" /* default */].Item,
						null,
						'Item2'
					),
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_1_preact_material_components_List__["a" /* default */].Divider, null),
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						__WEBPACK_IMPORTED_MODULE_1_preact_material_components_List__["a" /* default */].Item,
						null,
						'Item3'
					),
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						__WEBPACK_IMPORTED_MODULE_1_preact_material_components_List__["a" /* default */].Item,
						null,
						'Item4'
					),
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						__WEBPACK_IMPORTED_MODULE_1_preact_material_components_List__["a" /* default */].Item,
						null,
						'Item5'
					)
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'div',
					{ className: 'mdc-typography--title' },
					'Action items '
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					__WEBPACK_IMPORTED_MODULE_1_preact_material_components_List__["a" /* default */],
					null,
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						__WEBPACK_IMPORTED_MODULE_1_preact_material_components_List__["a" /* default */].LinkItem,
						{ ripple: true, href: '#/component/list' },
						'Item1'
					),
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						__WEBPACK_IMPORTED_MODULE_1_preact_material_components_List__["a" /* default */].LinkItem,
						{ ripple: true, href: '#/component/list' },
						'Item2'
					),
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						__WEBPACK_IMPORTED_MODULE_1_preact_material_components_List__["a" /* default */].LinkItem,
						{ ripple: true, href: '#/component/list' },
						'Item3'
					),
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						__WEBPACK_IMPORTED_MODULE_1_preact_material_components_List__["a" /* default */].LinkItem,
						{ ripple: true, href: '#/component/list' },
						'Item4'
					),
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						__WEBPACK_IMPORTED_MODULE_1_preact_material_components_List__["a" /* default */].LinkItem,
						{ ripple: true, href: '#/component/list' },
						'Item5'
					)
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'div',
					{ className: 'mdc-typography--title' },
					'Two line '
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					__WEBPACK_IMPORTED_MODULE_1_preact_material_components_List__["a" /* default */],
					{ 'two-line': true },
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						__WEBPACK_IMPORTED_MODULE_1_preact_material_components_List__["a" /* default */].Item,
						null,
						__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
							__WEBPACK_IMPORTED_MODULE_1_preact_material_components_List__["a" /* default */].TextContainer,
							null,
							__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
								__WEBPACK_IMPORTED_MODULE_1_preact_material_components_List__["a" /* default */].PrimaryText,
								null,
								'Heading 1'
							),
							__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
								__WEBPACK_IMPORTED_MODULE_1_preact_material_components_List__["a" /* default */].SecondaryText,
								null,
								'Lorem ipsum dolor sit amet.'
							)
						)
					),
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						__WEBPACK_IMPORTED_MODULE_1_preact_material_components_List__["a" /* default */].Item,
						null,
						__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
							__WEBPACK_IMPORTED_MODULE_1_preact_material_components_List__["a" /* default */].TextContainer,
							null,
							__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
								__WEBPACK_IMPORTED_MODULE_1_preact_material_components_List__["a" /* default */].PrimaryText,
								null,
								'Heading 2'
							),
							__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
								__WEBPACK_IMPORTED_MODULE_1_preact_material_components_List__["a" /* default */].SecondaryText,
								null,
								'Lorem ipsum dolor sit amet.'
							)
						)
					),
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						__WEBPACK_IMPORTED_MODULE_1_preact_material_components_List__["a" /* default */].Item,
						null,
						__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
							__WEBPACK_IMPORTED_MODULE_1_preact_material_components_List__["a" /* default */].TextContainer,
							null,
							__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
								__WEBPACK_IMPORTED_MODULE_1_preact_material_components_List__["a" /* default */].PrimaryText,
								null,
								'Heading 3'
							),
							__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
								__WEBPACK_IMPORTED_MODULE_1_preact_material_components_List__["a" /* default */].SecondaryText,
								null,
								'Lorem ipsum dolor sit amet.'
							)
						)
					)
				)
			);
		}
	}]);

	return ListPage;
}(__WEBPACK_IMPORTED_MODULE_0_preact__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (ListPage);

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_preact_material_components_Radio__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_preact_material_components_FormField__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ComponentTable_jsx__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__RadioPage_css__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__RadioPage_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__RadioPage_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__CodeBlock_jsx__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__sample_txt__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__sample_txt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__sample_txt__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var RadioPage = function (_Component) {
	_inherits(RadioPage, _Component);

	function RadioPage() {
		_classCallCheck(this, RadioPage);

		var _this = _possibleConstructorReturn(this, (RadioPage.__proto__ || Object.getPrototypeOf(RadioPage)).call(this));

		_this.propsTable = [{
			component: 'Radio',
			props: []
		}];
		return _this;
	}

	_createClass(RadioPage, [{
		key: 'render',
		value: function render() {
			return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
				'div',
				{ className: 'page-radio' },
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_3__ComponentTable_jsx__["a" /* default */], { data: this.propsTable }),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'div',
					{ className: 'mdc-typography--display1' },
					'Sample code '
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					__WEBPACK_IMPORTED_MODULE_5__CodeBlock_jsx__["a" /* default */],
					null,
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						'code',
						{ 'class': 'lang-js' },
						__WEBPACK_IMPORTED_MODULE_6__sample_txt___default.a
					)
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'div',
					{ className: 'mdc-typography--display1' },
					'Original documentation'
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'div',
					{ className: 'mdc-typography--body' },
					'This component encapsulates ',
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						'span',
						{ className: 'strong' },
						'mdc-radio'
					),
					', you can refer to its documentation',
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						'a',
						{ href: 'https://github.com/material-components/material-components-web/tree/master/packages/mdc-radio' },
						' here'
					),
					'.'
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'div',
					{ className: 'mdc-typography--display1' },
					'Demo '
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					__WEBPACK_IMPORTED_MODULE_2_preact_material_components_FormField__["a" /* default */],
					null,
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Radio__["a" /* default */], { id: 'r1', name: 'opts' }),
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						'label',
						{ 'for': 'r1' },
						'Radio 1'
					)
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					__WEBPACK_IMPORTED_MODULE_2_preact_material_components_FormField__["a" /* default */],
					null,
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Radio__["a" /* default */], { id: 'r2', name: 'opts' }),
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						'label',
						{ 'for': 'r2' },
						'Radio 2'
					)
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					__WEBPACK_IMPORTED_MODULE_2_preact_material_components_FormField__["a" /* default */],
					null,
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Radio__["a" /* default */], { id: 'r3', name: 'opts', disabled: true }),
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						'label',
						{ 'for': 'r3' },
						'Disabled Radio '
					)
				)
			);
		}
	}]);

	return RadioPage;
}(__WEBPACK_IMPORTED_MODULE_0_preact__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (RadioPage);

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_preact_material_components_Select__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ComponentTable_jsx__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__EventsTable_jsx__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__SelectPage_css__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__SelectPage_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__SelectPage_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__CodeBlock_jsx__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__sample_txt__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__sample_txt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__sample_txt__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var SelectPage = function (_Component) {
	_inherits(SelectPage, _Component);

	function SelectPage() {
		_classCallCheck(this, SelectPage);

		var _this = _possibleConstructorReturn(this, (SelectPage.__proto__ || Object.getPrototypeOf(SelectPage)).call(this));

		_this.propsTable = [{
			component: 'Select',
			props: [{
				name: 'disabled',
				description: 'Makes the select box disabled.'
			}, {
				name: 'basic',
				description: 'Makes the select box CSS only.'
			}]
		}, {
			component: 'Select.Item',
			props: []
		}];
		_this.eventsTable = [{
			name: 'onChange',
			description: 'Fired when the selection changes on Select box'
		}];
		return _this;
	}

	_createClass(SelectPage, [{
		key: 'render',
		value: function render() {
			return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
				'div',
				{ className: 'page-select' },
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_2__ComponentTable_jsx__["a" /* default */], { data: this.propsTable }),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_3__EventsTable_jsx__["a" /* default */], { data: this.eventsTable }),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'div',
					{ className: 'mdc-typography--display1' },
					'Sample code '
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					__WEBPACK_IMPORTED_MODULE_5__CodeBlock_jsx__["a" /* default */],
					null,
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						'code',
						{ 'class': 'lang-js' },
						__WEBPACK_IMPORTED_MODULE_6__sample_txt___default.a
					)
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'div',
					{ className: 'mdc-typography--display1' },
					'Original documentation'
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'div',
					{ className: 'mdc-typography--body' },
					'This component encapsulates ',
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						'span',
						{ className: 'strong' },
						'mdc-select'
					),
					', you can refer to its documentation',
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						'a',
						{ href: 'https://github.com/material-components/material-components-web/tree/master/packages/mdc-select' },
						' here'
					),
					'.'
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'div',
					{ className: 'mdc-typography--display1' },
					'Demo '
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'div',
					{ className: 'mdc-typography--title' },
					'Normal '
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Select__["a" /* default */],
					{ hintText: 'Select' },
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Select__["a" /* default */].Item,
						null,
						'Option 1'
					),
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Select__["a" /* default */].Item,
						null,
						'Option 2'
					),
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Select__["a" /* default */].Item,
						null,
						'Option 3'
					),
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Select__["a" /* default */].Item,
						null,
						'Option 4'
					)
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'div',
					{ className: 'mdc-typography--title' },
					'Basic '
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Select__["a" /* default */],
					{ hintText: 'Select', basic: true },
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						'option',
						{ value: '', 'default': true, selected: true },
						'Pick a food'
					),
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						'option',
						{ value: 'grains' },
						'Bread, Cereal, Rice, and Pasta'
					),
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						'option',
						{ value: 'vegetables' },
						'Vegetables'
					),
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						'optgroup',
						{ label: 'Fruits' },
						__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
							'option',
							{ value: 'apple' },
							'Apple'
						),
						__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
							'option',
							{ value: 'oranges' },
							'Orange'
						),
						__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
							'option',
							{ value: 'banana' },
							'Banana'
						)
					),
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						'option',
						{ value: 'dairy' },
						'Milk, Yogurt, and Cheese'
					),
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						'option',
						{ value: 'meat' },
						'Meat, Poultry, Fish, Dry Beans, Eggs, and Nuts'
					),
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						'option',
						{ value: 'fats' },
						'Fats, Oils, and Sweets'
					)
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'div',
					{ className: 'mdc-typography--title' },
					'Disabled '
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Select__["a" /* default */],
					{ hintText: 'Select', disabled: true },
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Select__["a" /* default */].Item,
						null,
						'Option 1'
					),
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Select__["a" /* default */].Item,
						null,
						'Option 2'
					),
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Select__["a" /* default */].Item,
						null,
						'Option 3'
					),
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Select__["a" /* default */].Item,
						null,
						'Option 4'
					)
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'div',
					{ className: 'mdc-typography--title' },
					'Note '
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'div',
					{ className: 'mdc-typography--caption' },
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						'div',
						null,
						'If you are using this component individually, DO NOT FORGET to import',
						__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
							'i',
							null,
							' \'preact-material-components/Menu/style.css\''
						),
						' as well'
					)
				)
			);
		}
	}]);

	return SelectPage;
}(__WEBPACK_IMPORTED_MODULE_0_preact__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (SelectPage);

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_preact_material_components_Snackbar__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_preact_material_components_Button__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ComponentTable_jsx__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__SnackbarPage_css__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__SnackbarPage_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__SnackbarPage_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__CodeBlock_jsx__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__sample_txt__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__sample_txt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__sample_txt__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var SnackbarPage = function (_Component) {
	_inherits(SnackbarPage, _Component);

	function SnackbarPage() {
		_classCallCheck(this, SnackbarPage);

		var _this = _possibleConstructorReturn(this, (SnackbarPage.__proto__ || Object.getPrototypeOf(SnackbarPage)).call(this));

		_this.propsTable = [{
			component: 'Snackbar',
			props: []
		}];
		return _this;
	}

	_createClass(SnackbarPage, [{
		key: 'render',
		value: function render() {
			var _this2 = this;

			return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
				'div',
				{ className: 'page-snackbar' },
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_3__ComponentTable_jsx__["a" /* default */], { data: this.propsTable }),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'div',
					{ className: 'mdc-typography--display1' },
					'Sample code '
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					__WEBPACK_IMPORTED_MODULE_5__CodeBlock_jsx__["a" /* default */],
					null,
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						'code',
						{ 'class': 'lang-js' },
						__WEBPACK_IMPORTED_MODULE_6__sample_txt___default.a
					)
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'div',
					{ className: 'mdc-typography--display1' },
					'Original documentation'
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'div',
					{ className: 'mdc-typography--body' },
					'This component encapsulates ',
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						'span',
						{ className: 'strong' },
						'mdc-snackbar'
					),
					', you can refer to its documentation',
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						'a',
						{ href: 'https://github.com/material-components/material-components-web/tree/master/packages/mdc-snackbar' },
						' here'
					),
					'.'
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'div',
					{ className: 'mdc-typography--display1' },
					'Demo '
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					__WEBPACK_IMPORTED_MODULE_2_preact_material_components_Button__["a" /* default */],
					{ raised: true, primary: true, onClick: function onClick() {
							_this2.bar.MDComponent.show({
								message: "Hello Snack!"
							});
						} },
					'Show snack'
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Snackbar__["a" /* default */], { ref: function ref(bar) {
						_this2.bar = bar;
					} })
			);
		}
	}]);

	return SnackbarPage;
}(__WEBPACK_IMPORTED_MODULE_0_preact__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (SnackbarPage);

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_preact_material_components_Switch__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ComponentTable_jsx__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__SwitchPage_css__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__SwitchPage_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__SwitchPage_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__CodeBlock_jsx__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sample_txt__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sample_txt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__sample_txt__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var SwitchPage = function (_Component) {
	_inherits(SwitchPage, _Component);

	function SwitchPage() {
		_classCallCheck(this, SwitchPage);

		var _this = _possibleConstructorReturn(this, (SwitchPage.__proto__ || Object.getPrototypeOf(SwitchPage)).call(this));

		_this.propsTable = [{
			component: 'Switch',
			props: [{
				name: 'disabled',
				description: 'Disables the switch.'
			}]
		}];
		return _this;
	}

	_createClass(SwitchPage, [{
		key: 'render',
		value: function render() {
			return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
				'div',
				{ className: 'page-switch' },
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_2__ComponentTable_jsx__["a" /* default */], { data: this.propsTable }),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'div',
					{ className: 'mdc-typography--display1' },
					'Sample code '
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					__WEBPACK_IMPORTED_MODULE_4__CodeBlock_jsx__["a" /* default */],
					null,
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						'code',
						{ 'class': 'lang-js' },
						__WEBPACK_IMPORTED_MODULE_5__sample_txt___default.a
					)
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'div',
					{ className: 'mdc-typography--display1' },
					'Original documentation'
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'div',
					{ className: 'mdc-typography--body' },
					'This component encapsulates ',
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						'span',
						{ className: 'strong' },
						'mdc-switch'
					),
					', you can refer to its documentation',
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						'a',
						{ href: 'https://github.com/material-components/material-components-web/tree/master/packages/mdc-switch' },
						' here'
					),
					'.'
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'div',
					{ className: 'mdc-typography--display1' },
					'Demo '
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'div',
					{ className: 'mdc-typography--title' },
					'Default '
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Switch__["a" /* default */], null),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'div',
					{ className: 'mdc-typography--title' },
					'Disabled '
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Switch__["a" /* default */], { disabled: true })
			);
		}
	}]);

	return SwitchPage;
}(__WEBPACK_IMPORTED_MODULE_0_preact__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (SwitchPage);

/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_preact_material_components_Textfield__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ComponentTable_jsx__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__TextfieldPage_css__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__TextfieldPage_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__TextfieldPage_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__CodeBlock_jsx__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sample_txt__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sample_txt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__sample_txt__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var TextfieldPage = function (_Component) {
  _inherits(TextfieldPage, _Component);

  function TextfieldPage() {
    _classCallCheck(this, TextfieldPage);

    var _this = _possibleConstructorReturn(this, (TextfieldPage.__proto__ || Object.getPrototypeOf(TextfieldPage)).call(this));

    _this.propsTable = [{
      component: 'Textfield',
      props: [{
        name: 'fullwidth',
        description: 'Makes the textfield full width.'
      }, {
        name: 'multiline',
        description: 'Toggles between TextArea and TextField.'
      }, {
        name: 'type',
        description: 'Type of HTML textfield (defaults to \'text\')',
        value: 'text, password, date, time, etc.'
      }]
    }];
    return _this;
  }

  _createClass(TextfieldPage, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
        'div',
        { className: 'page-textfield' },
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_2__ComponentTable_jsx__["a" /* default */], { data: this.propsTable }),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
          'div',
          { className: 'mdc-typography--display1' },
          'Sample code '
        ),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
          __WEBPACK_IMPORTED_MODULE_4__CodeBlock_jsx__["a" /* default */],
          null,
          __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
            'code',
            { 'class': 'lang-js' },
            __WEBPACK_IMPORTED_MODULE_5__sample_txt___default.a
          )
        ),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
          'div',
          { className: 'mdc-typography--display1' },
          'Original documentation'
        ),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
          'div',
          { className: 'mdc-typography--body' },
          'This component encapsulates ',
          __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
            'span',
            { className: 'strong' },
            'mdc-textfield'
          ),
          '. You can refer to its documentation',
          __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
            'a',
            { href: 'https://github.com/material-components/material-components-web/tree/master/packages/mdc-textfield' },
            ' here'
          ),
          '.'
        ),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
          'div',
          { className: 'mdc-typography--display1' },
          'Demo'
        ),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
          'div',
          { className: 'mdc-typography--body' },
          'Default'
        ),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Textfield__["a" /* default */], { label: 'Your name', onKeyUp: function onKeyUp(e) {
            _this2.setState({
              name: e.target.value
            });
          } }),
        ' Hi - ',
        this.state.name,
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
          'div',
          { className: 'mdc-typography--body' },
          'Multiline'
        ),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Textfield__["a" /* default */], { multiline: true, label: 'Textarea tag' }),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
          'div',
          { className: 'mdc-typography--body' },
          'Password'
        ),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Textfield__["a" /* default */], { type: 'password', label: 'Enter a password' })
      );
    }
  }]);

  return TextfieldPage;
}(__WEBPACK_IMPORTED_MODULE_0_preact__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (TextfieldPage);

/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_preact_material_components_Toolbar__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_preact_material_components_Icon__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ComponentTable_jsx__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ToolbarPage_css__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ToolbarPage_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__ToolbarPage_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__CodeBlock_jsx__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__sample_txt__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__sample_txt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__sample_txt__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var ToolbarPage = function (_Component) {
	_inherits(ToolbarPage, _Component);

	function ToolbarPage() {
		_classCallCheck(this, ToolbarPage);

		var _this = _possibleConstructorReturn(this, (ToolbarPage.__proto__ || Object.getPrototypeOf(ToolbarPage)).call(this));

		_this.propsTable = [{
			component: 'Toolbar',
			props: [{
				name: 'fixed',
				description: 'Makes the toolbar fixed'
			}]
		}, {
			component: 'Toolbar.Row',
			props: []
		}, {
			component: 'Toolbar.Section',
			props: [{
				name: 'align-start',
				description: 'Aligns the section to start of the toolbar row'
			}, {
				name: 'align-end',
				description: 'Aligns the section to end of the toolbar row'
			}]
		}, {
			component: 'Toolbar.Icon',
			props: []
		}, {
			component: 'Toolbar.Title',
			props: []
		}];
		return _this;
	}

	_createClass(ToolbarPage, [{
		key: 'render',
		value: function render() {
			return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
				'div',
				{ className: 'page-toolbar' },
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_3__ComponentTable_jsx__["a" /* default */], { data: this.propsTable }),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'div',
					{ className: 'mdc-typography--display1' },
					'Sample code '
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					__WEBPACK_IMPORTED_MODULE_5__CodeBlock_jsx__["a" /* default */],
					null,
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						'code',
						{ 'class': 'lang-js' },
						__WEBPACK_IMPORTED_MODULE_6__sample_txt___default.a
					)
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'div',
					{ className: 'mdc-typography--display1' },
					'Original documentation'
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'div',
					{ className: 'mdc-typography--body' },
					'This component encapsulates ',
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						'span',
						{ className: 'strong' },
						'mdc-toolbar'
					),
					', you can refer to its documentation',
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						'a',
						{ href: 'https://github.com/material-components/material-components-web/tree/master/packages/mdc-toolbar' },
						' here'
					),
					'.'
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'div',
					{ className: 'mdc-typography--display1' },
					'Demo '
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'div',
					{ className: 'mdc-typography--title' },
					'Default '
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Toolbar__["a" /* default */],
					{ className: 'toolbar' },
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Toolbar__["a" /* default */].Row,
						null,
						__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
							__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Toolbar__["a" /* default */].Section,
							{ 'align-start': true },
							__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
								__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Toolbar__["a" /* default */].Icon,
								null,
								'menu'
							),
							__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
								__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Toolbar__["a" /* default */].Title,
								null,
								'My App'
							)
						),
						__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
							__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Toolbar__["a" /* default */].Section,
							{ 'align-end': true },
							__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
								__WEBPACK_IMPORTED_MODULE_2_preact_material_components_Icon__["a" /* default */],
								null,
								'more_vert'
							)
						)
					)
				)
			);
		}
	}]);

	return ToolbarPage;
}(__WEBPACK_IMPORTED_MODULE_0_preact__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (ToolbarPage);

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*!
 * routie - a tiny hash router
 * v0.3.2
 * http://projects.jga.me/routie
 * copyright Greg Allen 2016
 * MIT License
*/
var Routie = function Routie(a, b) {
  var c = [],
      d = {},
      e = "routie",
      f = a[e],
      g = function g(a, b) {
    this.name = b, this.path = a, this.keys = [], this.fns = [], this.params = {}, this.regex = h(this.path, this.keys, !1, !1);
  };g.prototype.addHandler = function (a) {
    this.fns.push(a);
  }, g.prototype.removeHandler = function (a) {
    for (var b = 0, c = this.fns.length; c > b; b++) {
      var d = this.fns[b];if (a == d) return void this.fns.splice(b, 1);
    }
  }, g.prototype.run = function (a) {
    for (var b = 0, c = this.fns.length; c > b; b++) {
      this.fns[b].apply(this, a);
    }
  }, g.prototype.match = function (a, b) {
    var c = this.regex.exec(a);if (!c) return !1;for (var d = 1, e = c.length; e > d; ++d) {
      var f = this.keys[d - 1],
          g = "string" == typeof c[d] ? decodeURIComponent(c[d]) : c[d];f && (this.params[f.name] = g), b.push(g);
    }return !0;
  }, g.prototype.toURL = function (a) {
    var b = this.path;for (var c in a) {
      b = b.replace("/:" + c, "/" + a[c]);
    }if (b = b.replace(/\/:.*\?/g, "/").replace(/\?/g, ""), -1 != b.indexOf(":")) throw new Error("missing parameters for url: " + b);return b;
  };var h = function h(a, b, c, d) {
    return a instanceof RegExp ? a : (a instanceof Array && (a = "(" + a.join("|") + ")"), a = a.concat(d ? "" : "/?").replace(/\/\(/g, "(?:/").replace(/\+/g, "__plus__").replace(/(\/)?(\.)?:(\w+)(?:(\(.*?\)))?(\?)?/g, function (a, c, d, e, f, g) {
      return b.push({ name: e, optional: !!g }), c = c || "", "" + (g ? "" : c) + "(?:" + (g ? c : "") + (d || "") + (f || d && "([^/.]+?)" || "([^/]+?)") + ")" + (g || "");
    }).replace(/([\/.])/g, "\\$1").replace(/__plus__/g, "(.+)").replace(/\*/g, "(.*)"), new RegExp("^" + a + "$", c ? "" : "i"));
  },
      i = function i(a, b) {
    var e = a.split(" "),
        f = 2 == e.length ? e[0] : null;a = 2 == e.length ? e[1] : e[0], d[a] || (d[a] = new g(a, f), c.push(d[a])), d[a].addHandler(b);
  },
      j = function j(a, b) {
    if ("function" == typeof b) i(a, b), j.reload();else if ("object" == (typeof a === "undefined" ? "undefined" : _typeof(a))) {
      for (var c in a) {
        i(c, a[c]);
      }j.reload();
    } else "undefined" == typeof b && j.navigate(a);
  };j.lookup = function (a, b) {
    for (var d = 0, e = c.length; e > d; d++) {
      var f = c[d];if (f.name == a) return f.toURL(b);
    }
  }, j.remove = function (a, b) {
    var c = d[a];c && c.removeHandler(b);
  }, j.removeAll = function () {
    d = {}, c = [];
  }, j.navigate = function (a, b) {
    b = b || {};var c = b.silent || !1;c && o(), setTimeout(function () {
      window.location.hash = a, c && setTimeout(function () {
        n();
      }, 1);
    }, 1);
  }, j.noConflict = function () {
    return a[e] = f, j;
  };var k = function k() {
    return window.location.hash.substring(1);
  },
      l = function l(a, b) {
    var c = [];return b.match(a, c) ? (b.run(c), !0) : !1;
  },
      m = j.reload = function () {
    for (var a = k(), b = 0, d = c.length; d > b; b++) {
      var e = c[b];if (l(a, e)) return;
    }
  },
      n = function n() {
    a.addEventListener ? a.addEventListener("hashchange", m, !1) : a.attachEvent("onhashchange", m);
  },
      o = function o() {
    a.removeEventListener ? a.removeEventListener("hashchange", m) : a.detachEvent("onhashchange", m);
  };return n(), b ? j : void (a[e] = j);
}; false ? Routie(window) : module.exports = Routie(window, !0);

/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Components_Home_Home_jsx__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_preact_material_components_Typography_style_css__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_preact_material_components_Typography_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_preact_material_components_Typography_style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_preact_material_components_Theme_style_css__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_preact_material_components_Theme_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_preact_material_components_Theme_style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_css__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__app_css__);





__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["render"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_1__Components_Home_Home_jsx__["a" /* default */], null), document.querySelector('.app'));

/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__foundation__ = __webpack_require__(14);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Copyright 2016 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */



var MDCComponent = function () {
  _createClass(MDCComponent, null, [{
    key: 'attachTo',
    value: function attachTo(root) {
      // Subclasses which extend MDCBase should provide an attachTo() method that takes a root element and
      // returns an instantiated component with its root set to that element. Also note that in the cases of
      // subclasses, an explicit foundation class will not have to be passed in; it will simply be initialized
      // from getDefaultFoundation().
      return new MDCComponent(root, new __WEBPACK_IMPORTED_MODULE_0__foundation__["a" /* default */]());
    }
  }]);

  function MDCComponent(root) {
    var foundation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

    _classCallCheck(this, MDCComponent);

    this.root_ = root;

    for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }

    this.initialize.apply(this, args);
    // Note that we initialize foundation here and not within the constructor's default param so that
    // this.root_ is defined and can be used within the foundation class.
    this.foundation_ = foundation === undefined ? this.getDefaultFoundation() : foundation;
    this.foundation_.init();
    this.initialSyncWithDOM();
  }

  _createClass(MDCComponent, [{
    key: 'initialize',
    value: function initialize() /* ...args */{
      // Subclasses can override this to do any additional setup work that would be considered part of a
      // "constructor". Essentially, it is a hook into the parent constructor before the foundation is
      // initialized. Any additional arguments besides root and foundation will be passed in here.
    }
  }, {
    key: 'getDefaultFoundation',
    value: function getDefaultFoundation() {
      // Subclasses must override this method to return a properly configured foundation class for the
      // component.
      throw new Error('Subclasses must override getDefaultFoundation to return a properly configured ' + 'foundation class');
    }
  }, {
    key: 'initialSyncWithDOM',
    value: function initialSyncWithDOM() {
      // Subclasses should override this method if they need to perform work to synchronize with a host DOM
      // object. An example of this would be a form control wrapper that needs to synchronize its internal state
      // to some property or attribute of the host DOM. Please note: this is *not* the place to perform DOM
      // reads/writes that would cause layout / paint, as this is called synchronously from within the constructor.
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      // Subclasses may implement this method to release any resources / deregister any listeners they have
      // attached. An example of this might be deregistering a resize event from the window object.
      this.foundation_.destroy();
    }

    // Wrapper method to add an event listener to the component's root element. This is most useful when
    // listening for custom events.

  }, {
    key: 'listen',
    value: function listen(evtType, handler) {
      this.root_.addEventListener(evtType, handler);
    }

    // Wrapper method to remove an event listener to the component's root element. This is most useful when
    // unlistening for custom events.

  }, {
    key: 'unlisten',
    value: function unlisten(evtType, handler) {
      this.root_.removeEventListener(evtType, handler);
    }

    // Fires a cross-browser-compatible custom event from the component root of the given type,
    // with the given data.

  }, {
    key: 'emit',
    value: function emit(evtType, evtData) {
      var shouldBubble = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      var evt = void 0;
      if (typeof CustomEvent === 'function') {
        evt = new CustomEvent(evtType, {
          detail: evtData,
          bubbles: shouldBubble
        });
      } else {
        evt = document.createEvent('CustomEvent');
        evt.initCustomEvent(evtType, shouldBubble, false, evtData);
      }

      this.root_.dispatchEvent(evt);
    }
  }]);

  return MDCComponent;
}();

/* harmony default export */ __webpack_exports__["a"] = (MDCComponent);

/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cssClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return strings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return numbers; });
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var ROOT = 'mdc-checkbox';

var cssClasses = {
  ROOT: 'mdc-checkbox',
  UPGRADED: 'mdc-checkbox--upgraded',
  CHECKED: 'mdc-checkbox--checked',
  INDETERMINATE: 'mdc-checkbox--indeterminate',
  ANIM_UNCHECKED_CHECKED: 'mdc-checkbox--anim-unchecked-checked',
  ANIM_UNCHECKED_INDETERMINATE: 'mdc-checkbox--anim-unchecked-indeterminate',
  ANIM_CHECKED_UNCHECKED: 'mdc-checkbox--anim-checked-unchecked',
  ANIM_CHECKED_INDETERMINATE: 'mdc-checkbox--anim-checked-indeterminate',
  ANIM_INDETERMINATE_CHECKED: 'mdc-checkbox--anim-indeterminate-checked',
  ANIM_INDETERMINATE_UNCHECKED: 'mdc-checkbox--anim-indeterminate-unchecked'
};

var strings = {
  NATIVE_CONTROL_SELECTOR: '.' + ROOT + '__native-control',
  TRANSITION_STATE_INIT: 'init',
  TRANSITION_STATE_CHECKED: 'checked',
  TRANSITION_STATE_UNCHECKED: 'unchecked',
  TRANSITION_STATE_INDETERMINATE: 'indeterminate'
};

var numbers = {
  ANIM_END_LATCH_MS: 100
};

/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__(46);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */




var CB_PROTO_PROPS = ['checked', 'indeterminate'];

var MDCCheckboxFoundation = function (_MDCFoundation) {
  _inherits(MDCCheckboxFoundation, _MDCFoundation);

  _createClass(MDCCheckboxFoundation, null, [{
    key: 'cssClasses',
    get: function get() {
      return __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* cssClasses */];
    }
  }, {
    key: 'strings',
    get: function get() {
      return __WEBPACK_IMPORTED_MODULE_1__constants__["b" /* strings */];
    }
  }, {
    key: 'numbers',
    get: function get() {
      return __WEBPACK_IMPORTED_MODULE_1__constants__["c" /* numbers */];
    }
  }, {
    key: 'defaultAdapter',
    get: function get() {
      return {
        addClass: function addClass() /* className: string */{},
        removeClass: function removeClass() /* className: string */{},
        registerAnimationEndHandler: function registerAnimationEndHandler() /* handler: EventListener */{},
        deregisterAnimationEndHandler: function deregisterAnimationEndHandler() /* handler: EventListener */{},
        registerChangeHandler: function registerChangeHandler() /* handler: EventListener */{},
        deregisterChangeHandler: function deregisterChangeHandler() /* handler: EventListener */{},
        getNativeControl: function getNativeControl() /* HTMLInputElement */{},
        forceLayout: function forceLayout() {},
        isAttachedToDOM: function isAttachedToDOM() /* boolean */{}
      };
    }
  }]);

  function MDCCheckboxFoundation(adapter) {
    _classCallCheck(this, MDCCheckboxFoundation);

    var _this = _possibleConstructorReturn(this, (MDCCheckboxFoundation.__proto__ || Object.getPrototypeOf(MDCCheckboxFoundation)).call(this, Object.assign(MDCCheckboxFoundation.defaultAdapter, adapter)));

    _this.currentCheckState_ = __WEBPACK_IMPORTED_MODULE_1__constants__["b" /* strings */].TRANSITION_STATE_INIT;
    _this.currentAnimationClass_ = '';
    _this.animEndLatchTimer_ = 0;
    _this.animEndHandler_ = function () {
      clearTimeout(_this.animEndLatchTimer_);
      _this.animEndLatchTimer_ = setTimeout(function () {
        _this.adapter_.removeClass(_this.currentAnimationClass_);
        _this.adapter_.deregisterAnimationEndHandler(_this.animEndHandler_);
      }, __WEBPACK_IMPORTED_MODULE_1__constants__["c" /* numbers */].ANIM_END_LATCH_MS);
    };
    _this.changeHandler_ = function () {
      return _this.transitionCheckState_();
    };
    return _this;
  }

  _createClass(MDCCheckboxFoundation, [{
    key: 'init',
    value: function init() {
      this.adapter_.addClass(__WEBPACK_IMPORTED_MODULE_1__constants__["a" /* cssClasses */].UPGRADED);
      this.adapter_.registerChangeHandler(this.changeHandler_);
      this.installPropertyChangeHooks_();
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      this.adapter_.deregisterChangeHandler(this.changeHandler_);
      this.uninstallPropertyChangeHooks_();
    }
  }, {
    key: 'isChecked',
    value: function isChecked() {
      return this.getNativeControl_().checked;
    }
  }, {
    key: 'setChecked',
    value: function setChecked(checked) {
      this.getNativeControl_().checked = checked;
    }
  }, {
    key: 'isIndeterminate',
    value: function isIndeterminate() {
      return this.getNativeControl_().indeterminate;
    }
  }, {
    key: 'setIndeterminate',
    value: function setIndeterminate(indeterminate) {
      this.getNativeControl_().indeterminate = indeterminate;
    }
  }, {
    key: 'isDisabled',
    value: function isDisabled() {
      return this.getNativeControl_().disabled;
    }
  }, {
    key: 'setDisabled',
    value: function setDisabled(disabled) {
      this.getNativeControl_().disabled = disabled;
    }
  }, {
    key: 'getValue',
    value: function getValue() {
      return this.getNativeControl_().value;
    }
  }, {
    key: 'setValue',
    value: function setValue(value) {
      this.getNativeControl_().value = value;
    }
  }, {
    key: 'installPropertyChangeHooks_',
    value: function installPropertyChangeHooks_() {
      var _this2 = this;

      var nativeCb = this.getNativeControl_();
      var cbProto = Object.getPrototypeOf(nativeCb);

      CB_PROTO_PROPS.forEach(function (controlState) {
        var desc = Object.getOwnPropertyDescriptor(cbProto, controlState);
        // We have to check for this descriptor, since some browsers (Safari) don't support its return.
        // See: https://bugs.webkit.org/show_bug.cgi?id=49739
        if (validDescriptor(desc)) {
          Object.defineProperty(nativeCb, controlState, {
            get: desc.get,
            set: function set(state) {
              desc.set.call(nativeCb, state);
              _this2.transitionCheckState_();
            },
            configurable: desc.configurable,
            enumerable: desc.enumerable
          });
        }
      });
    }
  }, {
    key: 'uninstallPropertyChangeHooks_',
    value: function uninstallPropertyChangeHooks_() {
      var nativeCb = this.getNativeControl_();
      var cbProto = Object.getPrototypeOf(nativeCb);

      CB_PROTO_PROPS.forEach(function (controlState) {
        var desc = Object.getOwnPropertyDescriptor(cbProto, controlState);
        if (validDescriptor(desc)) {
          Object.defineProperty(nativeCb, controlState, desc);
        }
      });
    }
  }, {
    key: 'transitionCheckState_',
    value: function transitionCheckState_() {
      var nativeCb = this.adapter_.getNativeControl();
      if (!nativeCb) {
        return;
      }
      var oldState = this.currentCheckState_;
      var newState = this.determineCheckState_(nativeCb);
      if (oldState === newState) {
        return;
      }

      // Check to ensure that there isn't a previously existing animation class, in case for example
      // the user interacted with the checkbox before the animation was finished.
      if (this.currentAnimationClass_.length > 0) {
        clearTimeout(this.animEndLatchTimer_);
        this.adapter_.forceLayout();
        this.adapter_.removeClass(this.currentAnimationClass_);
      }

      this.currentAnimationClass_ = this.getTransitionAnimationClass_(oldState, newState);
      this.currentCheckState_ = newState;

      // Check for parentNode so that animations are only run when the element is attached
      // to the DOM.
      if (this.adapter_.isAttachedToDOM() && this.currentAnimationClass_.length > 0) {
        this.adapter_.addClass(this.currentAnimationClass_);
        this.adapter_.registerAnimationEndHandler(this.animEndHandler_);
      }
    }
  }, {
    key: 'determineCheckState_',
    value: function determineCheckState_(nativeCb) {
      var TRANSITION_STATE_INDETERMINATE = __WEBPACK_IMPORTED_MODULE_1__constants__["b" /* strings */].TRANSITION_STATE_INDETERMINATE,
          TRANSITION_STATE_CHECKED = __WEBPACK_IMPORTED_MODULE_1__constants__["b" /* strings */].TRANSITION_STATE_CHECKED,
          TRANSITION_STATE_UNCHECKED = __WEBPACK_IMPORTED_MODULE_1__constants__["b" /* strings */].TRANSITION_STATE_UNCHECKED;


      if (nativeCb.indeterminate) {
        return TRANSITION_STATE_INDETERMINATE;
      }
      return nativeCb.checked ? TRANSITION_STATE_CHECKED : TRANSITION_STATE_UNCHECKED;
    }
  }, {
    key: 'getTransitionAnimationClass_',
    value: function getTransitionAnimationClass_(oldState, newState) {
      var TRANSITION_STATE_INIT = __WEBPACK_IMPORTED_MODULE_1__constants__["b" /* strings */].TRANSITION_STATE_INIT,
          TRANSITION_STATE_CHECKED = __WEBPACK_IMPORTED_MODULE_1__constants__["b" /* strings */].TRANSITION_STATE_CHECKED,
          TRANSITION_STATE_UNCHECKED = __WEBPACK_IMPORTED_MODULE_1__constants__["b" /* strings */].TRANSITION_STATE_UNCHECKED;
      var _MDCCheckboxFoundatio = MDCCheckboxFoundation.cssClasses,
          ANIM_UNCHECKED_CHECKED = _MDCCheckboxFoundatio.ANIM_UNCHECKED_CHECKED,
          ANIM_UNCHECKED_INDETERMINATE = _MDCCheckboxFoundatio.ANIM_UNCHECKED_INDETERMINATE,
          ANIM_CHECKED_UNCHECKED = _MDCCheckboxFoundatio.ANIM_CHECKED_UNCHECKED,
          ANIM_CHECKED_INDETERMINATE = _MDCCheckboxFoundatio.ANIM_CHECKED_INDETERMINATE,
          ANIM_INDETERMINATE_CHECKED = _MDCCheckboxFoundatio.ANIM_INDETERMINATE_CHECKED,
          ANIM_INDETERMINATE_UNCHECKED = _MDCCheckboxFoundatio.ANIM_INDETERMINATE_UNCHECKED;


      switch (oldState) {
        case TRANSITION_STATE_INIT:
          if (newState === TRANSITION_STATE_UNCHECKED) {
            return '';
          }
        // fallthrough
        case TRANSITION_STATE_UNCHECKED:
          return newState === TRANSITION_STATE_CHECKED ? ANIM_UNCHECKED_CHECKED : ANIM_UNCHECKED_INDETERMINATE;
        case TRANSITION_STATE_CHECKED:
          return newState === TRANSITION_STATE_UNCHECKED ? ANIM_CHECKED_UNCHECKED : ANIM_CHECKED_INDETERMINATE;
        // TRANSITION_STATE_INDETERMINATE
        default:
          return newState === TRANSITION_STATE_CHECKED ? ANIM_INDETERMINATE_CHECKED : ANIM_INDETERMINATE_UNCHECKED;
      }
    }
  }, {
    key: 'getNativeControl_',
    value: function getNativeControl_() {
      return this.adapter_.getNativeControl() || {
        checked: false,
        indeterminate: false,
        disabled: false,
        value: null
      };
    }
  }]);

  return MDCCheckboxFoundation;
}(__WEBPACK_IMPORTED_MODULE_0__material_base__["b" /* MDCFoundation */]);

/* harmony default export */ __webpack_exports__["a"] = (MDCCheckboxFoundation);


function validDescriptor(inputPropDesc) {
  return inputPropDesc && typeof inputPropDesc.set === 'function';
}

/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MDCCheckbox; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_ripple__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ripple_util__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_animation__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__foundation__ = __webpack_require__(47);
/* unused harmony reexport MDCCheckboxFoundation */
var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */










var MDCCheckbox = function (_MDCComponent) {
  _inherits(MDCCheckbox, _MDCComponent);

  _createClass(MDCCheckbox, [{
    key: 'nativeCb_',
    get: function get() {
      var NATIVE_CONTROL_SELECTOR = __WEBPACK_IMPORTED_MODULE_4__foundation__["a" /* default */].strings.NATIVE_CONTROL_SELECTOR;

      return this.root_.querySelector(NATIVE_CONTROL_SELECTOR);
    }
  }], [{
    key: 'attachTo',
    value: function attachTo(root) {
      return new MDCCheckbox(root);
    }
  }]);

  function MDCCheckbox() {
    var _ref;

    _classCallCheck(this, MDCCheckbox);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = MDCCheckbox.__proto__ || Object.getPrototypeOf(MDCCheckbox)).call.apply(_ref, [this].concat(args)));

    _this.ripple_ = _this.initRipple_();
    return _this;
  }

  _createClass(MDCCheckbox, [{
    key: 'initRipple_',
    value: function initRipple_() {
      var _this2 = this;

      var MATCHES = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__material_ripple_util__["a" /* getMatchesProperty */])(HTMLElement.prototype);
      var adapter = Object.assign(__WEBPACK_IMPORTED_MODULE_1__material_ripple__["a" /* MDCRipple */].createAdapter(this), {
        isUnbounded: function isUnbounded() {
          return true;
        },
        isSurfaceActive: function isSurfaceActive() {
          return _this2.nativeCb_[MATCHES](':active');
        },
        registerInteractionHandler: function registerInteractionHandler(type, handler) {
          return _this2.nativeCb_.addEventListener(type, handler);
        },
        deregisterInteractionHandler: function deregisterInteractionHandler(type, handler) {
          return _this2.nativeCb_.removeEventListener(type, handler);
        },
        computeBoundingRect: function computeBoundingRect() {
          var _root_$getBoundingCli = _this2.root_.getBoundingClientRect(),
              left = _root_$getBoundingCli.left,
              top = _root_$getBoundingCli.top;

          var DIM = 40;
          return {
            top: top,
            left: left,
            right: left + DIM,
            bottom: top + DIM,
            width: DIM,
            height: DIM
          };
        }
      });
      var foundation = new __WEBPACK_IMPORTED_MODULE_1__material_ripple__["b" /* MDCRippleFoundation */](adapter);
      return new __WEBPACK_IMPORTED_MODULE_1__material_ripple__["a" /* MDCRipple */](this.root_, foundation);
    }
  }, {
    key: 'getDefaultFoundation',
    value: function getDefaultFoundation() {
      var _this3 = this;

      return new __WEBPACK_IMPORTED_MODULE_4__foundation__["a" /* default */]({
        addClass: function addClass(className) {
          return _this3.root_.classList.add(className);
        },
        removeClass: function removeClass(className) {
          return _this3.root_.classList.remove(className);
        },
        registerAnimationEndHandler: function registerAnimationEndHandler(handler) {
          return _this3.root_.addEventListener(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__material_animation__["b" /* getCorrectEventName */])(window, 'animationend'), handler);
        },
        deregisterAnimationEndHandler: function deregisterAnimationEndHandler(handler) {
          return _this3.root_.removeEventListener(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__material_animation__["b" /* getCorrectEventName */])(window, 'animationend'), handler);
        },
        registerChangeHandler: function registerChangeHandler(handler) {
          return _this3.nativeCb_.addEventListener('change', handler);
        },
        deregisterChangeHandler: function deregisterChangeHandler(handler) {
          return _this3.nativeCb_.removeEventListener('change', handler);
        },
        getNativeControl: function getNativeControl() {
          return _this3.nativeCb_;
        },
        forceLayout: function forceLayout() {
          return _this3.root_.offsetWidth;
        },
        isAttachedToDOM: function isAttachedToDOM() {
          return Boolean(_this3.root_.parentNode);
        }
      });
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      this.ripple_.destroy();
      _get(MDCCheckbox.prototype.__proto__ || Object.getPrototypeOf(MDCCheckbox.prototype), 'destroy', this).call(this);
    }
  }, {
    key: 'ripple',
    get: function get() {
      return this.ripple_;
    }
  }, {
    key: 'checked',
    get: function get() {
      return this.foundation_.isChecked();
    },
    set: function set(checked) {
      this.foundation_.setChecked(checked);
    }
  }, {
    key: 'indeterminate',
    get: function get() {
      return this.foundation_.isIndeterminate();
    },
    set: function set(indeterminate) {
      this.foundation_.setIndeterminate(indeterminate);
    }
  }, {
    key: 'disabled',
    get: function get() {
      return this.foundation_.isDisabled();
    },
    set: function set(disabled) {
      this.foundation_.setDisabled(disabled);
    }
  }, {
    key: 'value',
    get: function get() {
      return this.foundation_.getValue();
    },
    set: function set(value) {
      this.foundation_.setValue(value);
    }
  }]);

  return MDCCheckbox;
}(__WEBPACK_IMPORTED_MODULE_0__material_base__["a" /* MDCComponent */]);

/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cssClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return strings; });
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var cssClasses = {
  ROOT: 'mdc-dialog',
  OPEN: 'mdc-dialog--open',
  BACKDROP: 'mdc-dialog__backdrop',
  SCROLL_LOCK: 'mdc-dialog-scroll-lock',
  ACCEPT_BTN: 'mdc-dialog__footer__button--accept',
  CANCEL_BTN: 'mdc-dialog__footer__button--cancel'
};

var strings = {
  OPEN_DIALOG_SELECTOR: '.mdc-dialog--open',
  DIALOG_SURFACE_SELECTOR: '.mdc-dialog__surface',
  ACCEPT_SELECTOR: '.mdc-dialog__footer__button--accept'
};

/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__(49);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */




var MDCDialogFoundation = function (_MDCFoundation) {
  _inherits(MDCDialogFoundation, _MDCFoundation);

  _createClass(MDCDialogFoundation, null, [{
    key: 'cssClasses',
    get: function get() {
      return __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* cssClasses */];
    }
  }, {
    key: 'strings',
    get: function get() {
      return __WEBPACK_IMPORTED_MODULE_1__constants__["b" /* strings */];
    }
  }, {
    key: 'defaultAdapter',
    get: function get() {
      return {
        addClass: function addClass() /* className: string */{},
        removeClass: function removeClass() /* className: string */{},
        setStyle: function setStyle() /* propertyName: string, value: string */{},
        addBodyClass: function addBodyClass() /* className: string */{},
        removeBodyClass: function removeBodyClass() /* className: string */{},
        eventTargetHasClass: function eventTargetHasClass() {
          return (/* target: EventTarget, className: string */ /* boolean */false
          );
        },
        registerInteractionHandler: function registerInteractionHandler() /* evt: string, handler: EventListener */{},
        deregisterInteractionHandler: function deregisterInteractionHandler() /* evt: string, handler: EventListener */{},
        registerSurfaceInteractionHandler: function registerSurfaceInteractionHandler() /* evt: string, handler: EventListener */{},
        deregisterSurfaceInteractionHandler: function deregisterSurfaceInteractionHandler() /* evt: string, handler: EventListener */{},
        registerDocumentKeydownHandler: function registerDocumentKeydownHandler() /* handler: EventListener */{},
        deregisterDocumentKeydownHandler: function deregisterDocumentKeydownHandler() /* handler: EventListener */{},
        notifyAccept: function notifyAccept() {},
        notifyCancel: function notifyCancel() {},
        trapFocusOnSurface: function trapFocusOnSurface() {},
        untrapFocusOnSurface: function untrapFocusOnSurface() {}
      };
    }
  }]);

  function MDCDialogFoundation(adapter) {
    _classCallCheck(this, MDCDialogFoundation);

    var _this = _possibleConstructorReturn(this, (MDCDialogFoundation.__proto__ || Object.getPrototypeOf(MDCDialogFoundation)).call(this, Object.assign(MDCDialogFoundation.defaultAdapter, adapter)));

    _this.isOpen_ = false;
    _this.componentClickHandler_ = function () {
      return _this.cancel(true);
    };
    _this.dialogClickHandler_ = function (evt) {
      return _this.handleDialogClick_(evt);
    };
    _this.documentKeydownHandler_ = function (evt) {
      if (evt.key && evt.key === 'Escape' || evt.keyCode === 27) {
        _this.cancel(true);
      }
    };
    return _this;
  }

  _createClass(MDCDialogFoundation, [{
    key: 'destroy',
    value: function destroy() {
      this.close();
    }
  }, {
    key: 'open',
    value: function open() {
      this.isOpen_ = true;
      this.disableScroll_();
      this.adapter_.setStyle('visibility', 'visible');
      this.adapter_.addClass(MDCDialogFoundation.cssClasses.OPEN);
      this.adapter_.trapFocusOnSurface();

      this.adapter_.registerDocumentKeydownHandler(this.documentKeydownHandler_);
      this.adapter_.registerSurfaceInteractionHandler('click', this.dialogClickHandler_);
      this.adapter_.registerInteractionHandler('click', this.componentClickHandler_);
    }
  }, {
    key: 'close',
    value: function close() {
      this.isOpen_ = false;
      this.adapter_.untrapFocusOnSurface();
      this.adapter_.removeClass(MDCDialogFoundation.cssClasses.OPEN);
      this.adapter_.setStyle('visibility', 'hidden');
      this.enableScroll_();

      this.adapter_.deregisterSurfaceInteractionHandler('click', this.dialogClickHandler_);
      this.adapter_.deregisterDocumentKeydownHandler(this.documentKeydownHandler_);
      this.adapter_.deregisterInteractionHandler('click', this.componentClickHandler_);
    }
  }, {
    key: 'isOpen',
    value: function isOpen() {
      return this.isOpen_;
    }
  }, {
    key: 'accept',
    value: function accept(shouldNotify) {
      if (shouldNotify) {
        this.adapter_.notifyAccept();
      }

      this.close();
    }
  }, {
    key: 'cancel',
    value: function cancel(shouldNotify) {
      if (shouldNotify) {
        this.adapter_.notifyCancel();
      }

      this.close();
    }
  }, {
    key: 'handleDialogClick_',
    value: function handleDialogClick_(evt) {
      evt.stopPropagation();
      var target = evt.target;

      if (this.adapter_.eventTargetHasClass(target, __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* cssClasses */].ACCEPT_BTN)) {
        this.accept(true);
      } else if (this.adapter_.eventTargetHasClass(target, __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* cssClasses */].CANCEL_BTN)) {
        this.cancel(true);
      }
    }
  }, {
    key: 'disableScroll_',
    value: function disableScroll_() {
      this.adapter_.addBodyClass(__WEBPACK_IMPORTED_MODULE_1__constants__["a" /* cssClasses */].SCROLL_LOCK);
    }
  }, {
    key: 'enableScroll_',
    value: function enableScroll_() {
      this.adapter_.removeBodyClass(__WEBPACK_IMPORTED_MODULE_1__constants__["a" /* cssClasses */].SCROLL_LOCK);
    }
  }]);

  return MDCDialogFoundation;
}(__WEBPACK_IMPORTED_MODULE_0__material_base__["b" /* MDCFoundation */]);

/* harmony default export */ __webpack_exports__["a"] = (MDCDialogFoundation);

/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MDCDialog; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_ripple__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__foundation__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util__ = __webpack_require__(52);
/* unused harmony reexport MDCDialogFoundation */
/* unused harmony reexport util */
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */










var MDCDialog = function (_MDCComponent) {
  _inherits(MDCDialog, _MDCComponent);

  function MDCDialog() {
    _classCallCheck(this, MDCDialog);

    return _possibleConstructorReturn(this, (MDCDialog.__proto__ || Object.getPrototypeOf(MDCDialog)).apply(this, arguments));
  }

  _createClass(MDCDialog, [{
    key: 'initialize',
    value: function initialize() {
      this.focusTrap_ = __WEBPACK_IMPORTED_MODULE_3__util__["a" /* createFocusTrapInstance */](this.dialogSurface_, this.acceptButton_);
      this.footerBtnRipples_ = [];

      var footerBtns = this.root_.querySelectorAll('.mdc-dialog__footer__button');
      for (var i = 0, footerBtn; footerBtn = footerBtns[i]; i++) {
        this.footerBtnRipples_.push(new __WEBPACK_IMPORTED_MODULE_1__material_ripple__["a" /* MDCRipple */](footerBtn));
      }
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      this.footerBtnRipples_.forEach(function (ripple) {
        return ripple.destroy();
      });
      _get(MDCDialog.prototype.__proto__ || Object.getPrototypeOf(MDCDialog.prototype), 'destroy', this).call(this);
    }
  }, {
    key: 'show',
    value: function show() {
      this.foundation_.open();
    }
  }, {
    key: 'close',
    value: function close() {
      this.foundation_.close();
    }
  }, {
    key: 'getDefaultFoundation',
    value: function getDefaultFoundation() {
      var _this2 = this;

      return new __WEBPACK_IMPORTED_MODULE_2__foundation__["a" /* default */]({
        addClass: function addClass(className) {
          return _this2.root_.classList.add(className);
        },
        removeClass: function removeClass(className) {
          return _this2.root_.classList.remove(className);
        },
        setStyle: function setStyle(prop, val) {
          return _this2.root_.style.setProperty(prop, val);
        },
        addBodyClass: function addBodyClass(className) {
          return document.body.classList.add(className);
        },
        removeBodyClass: function removeBodyClass(className) {
          return document.body.classList.remove(className);
        },
        eventTargetHasClass: function eventTargetHasClass(target, className) {
          return target.classList.contains(className);
        },
        registerInteractionHandler: function registerInteractionHandler(evt, handler) {
          return _this2.root_.addEventListener(evt, handler);
        },
        deregisterInteractionHandler: function deregisterInteractionHandler(evt, handler) {
          return _this2.root_.removeEventListener(evt, handler);
        },
        registerSurfaceInteractionHandler: function registerSurfaceInteractionHandler(evt, handler) {
          return _this2.dialogSurface_.addEventListener(evt, handler);
        },
        deregisterSurfaceInteractionHandler: function deregisterSurfaceInteractionHandler(evt, handler) {
          return _this2.dialogSurface_.removeEventListener(evt, handler);
        },
        registerDocumentKeydownHandler: function registerDocumentKeydownHandler(handler) {
          return document.addEventListener('keydown', handler);
        },
        deregisterDocumentKeydownHandler: function deregisterDocumentKeydownHandler(handler) {
          return document.removeEventListener('keydown', handler);
        },
        notifyAccept: function notifyAccept() {
          return _this2.emit('MDCDialog:accept');
        },
        notifyCancel: function notifyCancel() {
          return _this2.emit('MDCDialog:cancel');
        },
        trapFocusOnSurface: function trapFocusOnSurface() {
          return _this2.focusTrap_.activate();
        },
        untrapFocusOnSurface: function untrapFocusOnSurface() {
          return _this2.focusTrap_.deactivate();
        }
      });
    }
  }, {
    key: 'open',
    get: function get() {
      return this.foundation_.isOpen();
    }
  }, {
    key: 'acceptButton_',
    get: function get() {
      return this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_2__foundation__["a" /* default */].strings.ACCEPT_SELECTOR);
    }
  }, {
    key: 'dialogSurface_',
    get: function get() {
      return this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_2__foundation__["a" /* default */].strings.DIALOG_SURFACE_SELECTOR);
    }
  }], [{
    key: 'attachTo',
    value: function attachTo(root) {
      return new MDCDialog(root);
    }
  }]);

  return MDCDialog;
}(__WEBPACK_IMPORTED_MODULE_0__material_base__["a" /* MDCComponent */]);

/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createFocusTrapInstance;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_focus_trap__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_focus_trap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_focus_trap__);
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */



function createFocusTrapInstance(surfaceEl, acceptButtonEl) {
  var focusTrapFactory = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : __WEBPACK_IMPORTED_MODULE_0_focus_trap___default.a;

  return focusTrapFactory(surfaceEl, {
    initialFocus: acceptButtonEl,
    clickOutsideDeactivates: true
  });
}

/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cssClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return strings; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__slidable__ = __webpack_require__(7);
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */



var cssClasses = {
  ROOT: 'mdc-persistent-drawer',
  OPEN: 'mdc-persistent-drawer--open',
  ANIMATING: 'mdc-persistent-drawer--animating'
};

var strings = {
  DRAWER_SELECTOR: '.mdc-persistent-drawer__drawer',
  FOCUSABLE_ELEMENTS: __WEBPACK_IMPORTED_MODULE_0__slidable__["b" /* FOCUSABLE_ELEMENTS */]
};

/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__slidable__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__(53);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */




var MDCPersistentDrawerFoundation = function (_MDCSlidableDrawerFou) {
  _inherits(MDCPersistentDrawerFoundation, _MDCSlidableDrawerFou);

  _createClass(MDCPersistentDrawerFoundation, null, [{
    key: 'cssClasses',
    get: function get() {
      return __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* cssClasses */];
    }
  }, {
    key: 'strings',
    get: function get() {
      return __WEBPACK_IMPORTED_MODULE_1__constants__["b" /* strings */];
    }
  }, {
    key: 'defaultAdapter',
    get: function get() {
      return Object.assign(__WEBPACK_IMPORTED_MODULE_0__slidable__["a" /* MDCSlidableDrawerFoundation */].defaultAdapter, {
        isDrawer: function isDrawer() {
          return false;
        }
      });
    }
  }]);

  function MDCPersistentDrawerFoundation(adapter) {
    _classCallCheck(this, MDCPersistentDrawerFoundation);

    return _possibleConstructorReturn(this, (MDCPersistentDrawerFoundation.__proto__ || Object.getPrototypeOf(MDCPersistentDrawerFoundation)).call(this, Object.assign(MDCPersistentDrawerFoundation.defaultAdapter, adapter), MDCPersistentDrawerFoundation.cssClasses.ROOT, MDCPersistentDrawerFoundation.cssClasses.ANIMATING, MDCPersistentDrawerFoundation.cssClasses.OPEN));
  }

  _createClass(MDCPersistentDrawerFoundation, [{
    key: 'isRootTransitioningEventTarget_',
    value: function isRootTransitioningEventTarget_(el) {
      return this.adapter_.isDrawer(el);
    }
  }]);

  return MDCPersistentDrawerFoundation;
}(__WEBPACK_IMPORTED_MODULE_0__slidable__["a" /* MDCSlidableDrawerFoundation */]);

/* harmony default export */ __webpack_exports__["a"] = (MDCPersistentDrawerFoundation);

/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MDCPersistentDrawer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__foundation__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util__ = __webpack_require__(15);
/* unused harmony reexport MDCPersistentDrawerFoundation */
/* unused harmony reexport util */
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */








var MDCPersistentDrawer = function (_MDCComponent) {
  _inherits(MDCPersistentDrawer, _MDCComponent);

  function MDCPersistentDrawer() {
    _classCallCheck(this, MDCPersistentDrawer);

    return _possibleConstructorReturn(this, (MDCPersistentDrawer.__proto__ || Object.getPrototypeOf(MDCPersistentDrawer)).apply(this, arguments));
  }

  _createClass(MDCPersistentDrawer, [{
    key: 'getDefaultFoundation',
    value: function getDefaultFoundation() {
      var _this2 = this;

      var FOCUSABLE_ELEMENTS = __WEBPACK_IMPORTED_MODULE_1__foundation__["a" /* default */].strings.FOCUSABLE_ELEMENTS;


      return new __WEBPACK_IMPORTED_MODULE_1__foundation__["a" /* default */]({
        addClass: function addClass(className) {
          return _this2.root_.classList.add(className);
        },
        removeClass: function removeClass(className) {
          return _this2.root_.classList.remove(className);
        },
        hasClass: function hasClass(className) {
          return _this2.root_.classList.contains(className);
        },
        hasNecessaryDom: function hasNecessaryDom() {
          return Boolean(_this2.drawer);
        },
        registerInteractionHandler: function registerInteractionHandler(evt, handler) {
          return _this2.root_.addEventListener(__WEBPACK_IMPORTED_MODULE_2__util__["a" /* remapEvent */](evt), handler, __WEBPACK_IMPORTED_MODULE_2__util__["b" /* applyPassive */]());
        },
        deregisterInteractionHandler: function deregisterInteractionHandler(evt, handler) {
          return _this2.root_.removeEventListener(__WEBPACK_IMPORTED_MODULE_2__util__["a" /* remapEvent */](evt), handler, __WEBPACK_IMPORTED_MODULE_2__util__["b" /* applyPassive */]());
        },
        registerDrawerInteractionHandler: function registerDrawerInteractionHandler(evt, handler) {
          return _this2.drawer.addEventListener(__WEBPACK_IMPORTED_MODULE_2__util__["a" /* remapEvent */](evt), handler);
        },
        deregisterDrawerInteractionHandler: function deregisterDrawerInteractionHandler(evt, handler) {
          return _this2.drawer.removeEventListener(__WEBPACK_IMPORTED_MODULE_2__util__["a" /* remapEvent */](evt), handler);
        },
        registerTransitionEndHandler: function registerTransitionEndHandler(handler) {
          return _this2.root_.addEventListener('transitionend', handler);
        },
        deregisterTransitionEndHandler: function deregisterTransitionEndHandler(handler) {
          return _this2.root_.removeEventListener('transitionend', handler);
        },
        registerDocumentKeydownHandler: function registerDocumentKeydownHandler(handler) {
          return document.addEventListener('keydown', handler);
        },
        deregisterDocumentKeydownHandler: function deregisterDocumentKeydownHandler(handler) {
          return document.removeEventListener('keydown', handler);
        },
        getDrawerWidth: function getDrawerWidth() {
          return _this2.drawer.offsetWidth;
        },
        setTranslateX: function setTranslateX(value) {
          return _this2.drawer.style.setProperty(__WEBPACK_IMPORTED_MODULE_2__util__["c" /* getTransformPropertyName */](), value === null ? null : 'translateX(' + value + 'px)');
        },
        getFocusableElements: function getFocusableElements() {
          return _this2.drawer.querySelectorAll(FOCUSABLE_ELEMENTS);
        },
        saveElementTabState: function saveElementTabState(el) {
          return __WEBPACK_IMPORTED_MODULE_2__util__["d" /* saveElementTabState */](el);
        },
        restoreElementTabState: function restoreElementTabState(el) {
          return __WEBPACK_IMPORTED_MODULE_2__util__["e" /* restoreElementTabState */](el);
        },
        makeElementUntabbable: function makeElementUntabbable(el) {
          return el.setAttribute('tabindex', -1);
        },
        notifyOpen: function notifyOpen() {
          return _this2.emit('MDCPersistentDrawer:open');
        },
        notifyClose: function notifyClose() {
          return _this2.emit('MDCPersistentDrawer:close');
        },
        isRtl: function isRtl() {
          return getComputedStyle(_this2.root_).getPropertyValue('direction') === 'rtl';
        },
        isDrawer: function isDrawer(el) {
          return el === _this2.drawer;
        }
      });
    }
  }, {
    key: 'open',
    get: function get() {
      return this.foundation_.isOpen();
    },
    set: function set(value) {
      if (value) {
        this.foundation_.open();
      } else {
        this.foundation_.close();
      }
    }

    /* Return the drawer element inside the component. */

  }, {
    key: 'drawer',
    get: function get() {
      return this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_1__foundation__["a" /* default */].strings.DRAWER_SELECTOR);
    }
  }], [{
    key: 'attachTo',
    value: function attachTo(root) {
      return new MDCPersistentDrawer(root);
    }
  }]);

  return MDCPersistentDrawer;
}(__WEBPACK_IMPORTED_MODULE_0__material_base__["a" /* MDCComponent */]);

/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FOCUSABLE_ELEMENTS; });
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var FOCUSABLE_ELEMENTS = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), ' + 'button:not([disabled]), iframe, object, embed, [tabindex], [contenteditable]';

/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MDCSlidableDrawerFoundation; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base__ = __webpack_require__(1);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */



var MDCSlidableDrawerFoundation = function (_MDCFoundation) {
  _inherits(MDCSlidableDrawerFoundation, _MDCFoundation);

  _createClass(MDCSlidableDrawerFoundation, null, [{
    key: 'defaultAdapter',
    get: function get() {
      return {
        addClass: function addClass() /* className: string */{},
        removeClass: function removeClass() /* className: string */{},
        hasClass: function hasClass() /* className: string */{},
        hasNecessaryDom: function hasNecessaryDom() {
          return (/* boolean */false
          );
        },
        registerInteractionHandler: function registerInteractionHandler() /* evt: string, handler: EventListener */{},
        deregisterInteractionHandler: function deregisterInteractionHandler() /* evt: string, handler: EventListener */{},
        registerDrawerInteractionHandler: function registerDrawerInteractionHandler() /* evt: string, handler: EventListener */{},
        deregisterDrawerInteractionHandler: function deregisterDrawerInteractionHandler() /* evt: string, handler: EventListener */{},
        registerTransitionEndHandler: function registerTransitionEndHandler() /* handler: EventListener */{},
        deregisterTransitionEndHandler: function deregisterTransitionEndHandler() /* handler: EventListener */{},
        registerDocumentKeydownHandler: function registerDocumentKeydownHandler() /* handler: EventListener */{},
        deregisterDocumentKeydownHandler: function deregisterDocumentKeydownHandler() /* handler: EventListener */{},
        setTranslateX: function setTranslateX() /* value: number | null */{},
        getFocusableElements: function getFocusableElements() /* NodeList */{},
        saveElementTabState: function saveElementTabState() /* el: Element */{},
        restoreElementTabState: function restoreElementTabState() /* el: Element */{},
        makeElementUntabbable: function makeElementUntabbable() /* el: Element */{},
        notifyOpen: function notifyOpen() {},
        notifyClose: function notifyClose() {},
        isRtl: function isRtl() {
          return (/* boolean */false
          );
        },
        getDrawerWidth: function getDrawerWidth() {
          return (/* number */0
          );
        }
      };
    }
  }]);

  function MDCSlidableDrawerFoundation(adapter, rootCssClass, animatingCssClass, openCssClass) {
    _classCallCheck(this, MDCSlidableDrawerFoundation);

    var _this = _possibleConstructorReturn(this, (MDCSlidableDrawerFoundation.__proto__ || Object.getPrototypeOf(MDCSlidableDrawerFoundation)).call(this, Object.assign(MDCSlidableDrawerFoundation.defaultAdapter, adapter)));

    _this.rootCssClass_ = rootCssClass;
    _this.animatingCssClass_ = animatingCssClass;
    _this.openCssClass_ = openCssClass;

    _this.transitionEndHandler_ = function (ev) {
      if (_this.isRootTransitioningEventTarget_(ev.target)) {
        _this.adapter_.removeClass(_this.animatingCssClass_);
        _this.adapter_.deregisterTransitionEndHandler(_this.transitionEndHandler_);
      }
    };

    _this.inert_ = false;

    _this.drawerClickHandler_ = function (evt) {
      return evt.stopPropagation();
    };
    _this.componentTouchStartHandler_ = function (evt) {
      return _this.handleTouchStart_(evt);
    };
    _this.componentTouchMoveHandler_ = function (evt) {
      return _this.handleTouchMove_(evt);
    };
    _this.componentTouchEndHandler_ = function (evt) {
      return _this.handleTouchEnd_(evt);
    };
    _this.documentKeydownHandler_ = function (evt) {
      if (evt.key && evt.key === 'Escape' || evt.keyCode === 27) {
        _this.close();
      }
    };
    return _this;
  }

  _createClass(MDCSlidableDrawerFoundation, [{
    key: 'init',
    value: function init() {
      var ROOT = this.rootCssClass_;
      var OPEN = this.openCssClass_;

      if (!this.adapter_.hasClass(ROOT)) {
        throw new Error(ROOT + ' class required in root element.');
      }

      if (!this.adapter_.hasNecessaryDom()) {
        throw new Error('Required DOM nodes missing in ' + ROOT + ' component.');
      }

      if (this.adapter_.hasClass(OPEN)) {
        this.isOpen_ = true;
      } else {
        this.detabinate_();
        this.isOpen_ = false;
      }

      this.adapter_.registerDrawerInteractionHandler('click', this.drawerClickHandler_);
      this.adapter_.registerDrawerInteractionHandler('touchstart', this.componentTouchStartHandler_);
      this.adapter_.registerInteractionHandler('touchmove', this.componentTouchMoveHandler_);
      this.adapter_.registerInteractionHandler('touchend', this.componentTouchEndHandler_);
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      this.adapter_.deregisterDrawerInteractionHandler('click', this.drawerClickHandler_);
      this.adapter_.deregisterDrawerInteractionHandler('touchstart', this.componentTouchStartHandler_);
      this.adapter_.deregisterInteractionHandler('touchmove', this.componentTouchMoveHandler_);
      this.adapter_.deregisterInteractionHandler('touchend', this.componentTouchEndHandler_);
      // Deregister the document keydown handler just in case the component is destroyed while the menu is open.
      this.adapter_.deregisterDocumentKeydownHandler(this.documentKeydownHandler_);
    }
  }, {
    key: 'open',
    value: function open() {
      this.adapter_.registerTransitionEndHandler(this.transitionEndHandler_);
      this.adapter_.registerDocumentKeydownHandler(this.documentKeydownHandler_);
      this.adapter_.addClass(this.animatingCssClass_);
      this.adapter_.addClass(this.openCssClass_);
      this.retabinate_();
      // Debounce multiple calls
      if (!this.isOpen_) {
        this.adapter_.notifyOpen();
      }
      this.isOpen_ = true;
    }
  }, {
    key: 'close',
    value: function close() {
      this.adapter_.deregisterDocumentKeydownHandler(this.documentKeydownHandler_);
      this.adapter_.registerTransitionEndHandler(this.transitionEndHandler_);
      this.adapter_.addClass(this.animatingCssClass_);
      this.adapter_.removeClass(this.openCssClass_);
      this.detabinate_();
      // Debounce multiple calls
      if (this.isOpen_) {
        this.adapter_.notifyClose();
      }
      this.isOpen_ = false;
    }
  }, {
    key: 'isOpen',
    value: function isOpen() {
      return this.isOpen_;
    }

    /**
     *  Render all children of the drawer inert when it's closed.
     */

  }, {
    key: 'detabinate_',
    value: function detabinate_() {
      if (this.inert_) {
        return;
      }

      var elements = this.adapter_.getFocusableElements();
      if (elements) {
        for (var i = 0; i < elements.length; i++) {
          this.adapter_.saveElementTabState(elements[i]);
          this.adapter_.makeElementUntabbable(elements[i]);
        }
      }

      this.inert_ = true;
    }

    /**
     *  Make all children of the drawer tabbable again when it's open.
     */

  }, {
    key: 'retabinate_',
    value: function retabinate_() {
      if (!this.inert_) {
        return;
      }

      var elements = this.adapter_.getFocusableElements();
      if (elements) {
        for (var i = 0; i < elements.length; i++) {
          this.adapter_.restoreElementTabState(elements[i]);
        }
      }

      this.inert_ = false;
    }
  }, {
    key: 'handleTouchStart_',
    value: function handleTouchStart_(evt) {
      if (!this.adapter_.hasClass(this.openCssClass_)) {
        return;
      }
      if (evt.pointerType && evt.pointerType !== 'touch') {
        return;
      }

      this.direction_ = this.adapter_.isRtl() ? -1 : 1;
      this.drawerWidth_ = this.adapter_.getDrawerWidth();
      this.startX_ = evt.touches ? evt.touches[0].pageX : evt.pageX;
      this.currentX_ = this.startX_;

      this.updateRaf_ = requestAnimationFrame(this.updateDrawer_.bind(this));
    }
  }, {
    key: 'handleTouchMove_',
    value: function handleTouchMove_(evt) {
      if (evt.pointerType && evt.pointerType !== 'touch') {
        return;
      }

      this.currentX_ = evt.touches ? evt.touches[0].pageX : evt.pageX;
    }
  }, {
    key: 'handleTouchEnd_',
    value: function handleTouchEnd_(evt) {
      if (evt.pointerType && evt.pointerType !== 'touch') {
        return;
      }

      this.prepareForTouchEnd_();

      // Did the user close the drawer by more than 50%?
      if (Math.abs(this.newPosition_ / this.drawerWidth_) >= 0.5) {
        this.close();
      } else {
        // Triggering an open here means we'll get a nice animation back to the fully open state.
        this.open();
      }
    }
  }, {
    key: 'prepareForTouchEnd_',
    value: function prepareForTouchEnd_() {
      cancelAnimationFrame(this.updateRaf_);
      this.adapter_.setTranslateX(null);
    }
  }, {
    key: 'updateDrawer_',
    value: function updateDrawer_() {
      this.updateRaf_ = requestAnimationFrame(this.updateDrawer_.bind(this));
      this.adapter_.setTranslateX(this.newPosition_);
    }
  }, {
    key: 'isRootTransitioningEventTarget_',
    value: function isRootTransitioningEventTarget_() {
      // Classes extending MDCSlidableDrawerFoundation should implement this method to return true or false
      // if the event target is the root event target currently transitioning.
      return false;
    }
  }, {
    key: 'newPosition_',
    get: function get() {
      var newPos = null;

      if (this.direction_ === 1) {
        newPos = Math.min(0, this.currentX_ - this.startX_);
      } else {
        newPos = Math.max(0, this.currentX_ - this.startX_);
      }

      return newPos;
    }
  }]);

  return MDCSlidableDrawerFoundation;
}(__WEBPACK_IMPORTED_MODULE_0__material_base__["b" /* MDCFoundation */]);

/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cssClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return strings; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__slidable__ = __webpack_require__(7);
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */



var cssClasses = {
  ROOT: 'mdc-temporary-drawer',
  OPEN: 'mdc-temporary-drawer--open',
  ANIMATING: 'mdc-temporary-drawer--animating'
};

var strings = {
  DRAWER_SELECTOR: '.mdc-temporary-drawer__drawer',
  OPACITY_VAR_NAME: '--mdc-temporary-drawer-opacity',
  FOCUSABLE_ELEMENTS: __WEBPACK_IMPORTED_MODULE_0__slidable__["b" /* FOCUSABLE_ELEMENTS */]
};

/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__slidable__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__(58);
var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */




var MDCTemporaryDrawerFoundation = function (_MDCSlidableDrawerFou) {
  _inherits(MDCTemporaryDrawerFoundation, _MDCSlidableDrawerFou);

  _createClass(MDCTemporaryDrawerFoundation, null, [{
    key: 'cssClasses',
    get: function get() {
      return __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* cssClasses */];
    }
  }, {
    key: 'strings',
    get: function get() {
      return __WEBPACK_IMPORTED_MODULE_1__constants__["b" /* strings */];
    }
  }, {
    key: 'defaultAdapter',
    get: function get() {
      return Object.assign(__WEBPACK_IMPORTED_MODULE_0__slidable__["a" /* MDCSlidableDrawerFoundation */].defaultAdapter, {
        isDrawer: function isDrawer() {
          return false;
        },
        updateCssVariable: function updateCssVariable() /* value: string */{}
      });
    }
  }]);

  function MDCTemporaryDrawerFoundation(adapter) {
    _classCallCheck(this, MDCTemporaryDrawerFoundation);

    var _this = _possibleConstructorReturn(this, (MDCTemporaryDrawerFoundation.__proto__ || Object.getPrototypeOf(MDCTemporaryDrawerFoundation)).call(this, Object.assign(MDCTemporaryDrawerFoundation.defaultAdapter, adapter), MDCTemporaryDrawerFoundation.cssClasses.ROOT, MDCTemporaryDrawerFoundation.cssClasses.ANIMATING, MDCTemporaryDrawerFoundation.cssClasses.OPEN));

    _this.componentClickHandler_ = function () {
      return _this.close();
    };
    return _this;
  }

  _createClass(MDCTemporaryDrawerFoundation, [{
    key: 'init',
    value: function init() {
      _get(MDCTemporaryDrawerFoundation.prototype.__proto__ || Object.getPrototypeOf(MDCTemporaryDrawerFoundation.prototype), 'init', this).call(this);

      // Make browser aware of custom property being used in this element.
      // Workaround for certain types of hard-to-reproduce heisenbugs.
      this.adapter_.updateCssVariable(0);
      this.adapter_.registerInteractionHandler('click', this.componentClickHandler_);
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      _get(MDCTemporaryDrawerFoundation.prototype.__proto__ || Object.getPrototypeOf(MDCTemporaryDrawerFoundation.prototype), 'destroy', this).call(this);

      this.adapter_.deregisterInteractionHandler('click', this.componentClickHandler_);
    }
  }, {
    key: 'open',
    value: function open() {
      // Make sure custom property values are cleared before starting.
      this.adapter_.updateCssVariable('');

      _get(MDCTemporaryDrawerFoundation.prototype.__proto__ || Object.getPrototypeOf(MDCTemporaryDrawerFoundation.prototype), 'open', this).call(this);
    }
  }, {
    key: 'close',
    value: function close() {
      // Make sure custom property values are cleared before making any changes.
      this.adapter_.updateCssVariable('');

      _get(MDCTemporaryDrawerFoundation.prototype.__proto__ || Object.getPrototypeOf(MDCTemporaryDrawerFoundation.prototype), 'close', this).call(this);
    }
  }, {
    key: 'prepareForTouchEnd_',
    value: function prepareForTouchEnd_() {
      _get(MDCTemporaryDrawerFoundation.prototype.__proto__ || Object.getPrototypeOf(MDCTemporaryDrawerFoundation.prototype), 'prepareForTouchEnd_', this).call(this);

      this.adapter_.updateCssVariable('');
    }
  }, {
    key: 'updateDrawer_',
    value: function updateDrawer_() {
      _get(MDCTemporaryDrawerFoundation.prototype.__proto__ || Object.getPrototypeOf(MDCTemporaryDrawerFoundation.prototype), 'updateDrawer_', this).call(this);

      var newOpacity = Math.max(0, 1 + this.direction_ * (this.newPosition_ / this.drawerWidth_));
      this.adapter_.updateCssVariable(newOpacity);
    }
  }, {
    key: 'isRootTransitioningEventTarget_',
    value: function isRootTransitioningEventTarget_(el) {
      return this.adapter_.isDrawer(el);
    }
  }]);

  return MDCTemporaryDrawerFoundation;
}(__WEBPACK_IMPORTED_MODULE_0__slidable__["a" /* MDCSlidableDrawerFoundation */]);

/* harmony default export */ __webpack_exports__["a"] = (MDCTemporaryDrawerFoundation);

/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MDCTemporaryDrawer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__foundation__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util__ = __webpack_require__(15);
/* unused harmony reexport MDCTemporaryDrawerFoundation */
/* unused harmony reexport util */
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */








var MDCTemporaryDrawer = function (_MDCComponent) {
  _inherits(MDCTemporaryDrawer, _MDCComponent);

  function MDCTemporaryDrawer() {
    _classCallCheck(this, MDCTemporaryDrawer);

    return _possibleConstructorReturn(this, (MDCTemporaryDrawer.__proto__ || Object.getPrototypeOf(MDCTemporaryDrawer)).apply(this, arguments));
  }

  _createClass(MDCTemporaryDrawer, [{
    key: 'getDefaultFoundation',
    value: function getDefaultFoundation() {
      var _this2 = this;

      var _MDCTemporaryDrawerFo = __WEBPACK_IMPORTED_MODULE_1__foundation__["a" /* default */].strings,
          FOCUSABLE_ELEMENTS = _MDCTemporaryDrawerFo.FOCUSABLE_ELEMENTS,
          OPACITY_VAR_NAME = _MDCTemporaryDrawerFo.OPACITY_VAR_NAME;


      return new __WEBPACK_IMPORTED_MODULE_1__foundation__["a" /* default */]({
        addClass: function addClass(className) {
          return _this2.root_.classList.add(className);
        },
        removeClass: function removeClass(className) {
          return _this2.root_.classList.remove(className);
        },
        hasClass: function hasClass(className) {
          return _this2.root_.classList.contains(className);
        },
        hasNecessaryDom: function hasNecessaryDom() {
          return Boolean(_this2.drawer);
        },
        registerInteractionHandler: function registerInteractionHandler(evt, handler) {
          return _this2.root_.addEventListener(__WEBPACK_IMPORTED_MODULE_2__util__["a" /* remapEvent */](evt), handler, __WEBPACK_IMPORTED_MODULE_2__util__["b" /* applyPassive */]());
        },
        deregisterInteractionHandler: function deregisterInteractionHandler(evt, handler) {
          return _this2.root_.removeEventListener(__WEBPACK_IMPORTED_MODULE_2__util__["a" /* remapEvent */](evt), handler, __WEBPACK_IMPORTED_MODULE_2__util__["b" /* applyPassive */]());
        },
        registerDrawerInteractionHandler: function registerDrawerInteractionHandler(evt, handler) {
          return _this2.drawer.addEventListener(__WEBPACK_IMPORTED_MODULE_2__util__["a" /* remapEvent */](evt), handler);
        },
        deregisterDrawerInteractionHandler: function deregisterDrawerInteractionHandler(evt, handler) {
          return _this2.drawer.removeEventListener(__WEBPACK_IMPORTED_MODULE_2__util__["a" /* remapEvent */](evt), handler);
        },
        registerTransitionEndHandler: function registerTransitionEndHandler(handler) {
          return _this2.drawer.addEventListener('transitionend', handler);
        },
        deregisterTransitionEndHandler: function deregisterTransitionEndHandler(handler) {
          return _this2.drawer.removeEventListener('transitionend', handler);
        },
        registerDocumentKeydownHandler: function registerDocumentKeydownHandler(handler) {
          return document.addEventListener('keydown', handler);
        },
        deregisterDocumentKeydownHandler: function deregisterDocumentKeydownHandler(handler) {
          return document.removeEventListener('keydown', handler);
        },
        getDrawerWidth: function getDrawerWidth() {
          return _this2.drawer.offsetWidth;
        },
        setTranslateX: function setTranslateX(value) {
          return _this2.drawer.style.setProperty(__WEBPACK_IMPORTED_MODULE_2__util__["c" /* getTransformPropertyName */](), value === null ? null : 'translateX(' + value + 'px)');
        },
        updateCssVariable: function updateCssVariable(value) {
          if (__WEBPACK_IMPORTED_MODULE_2__util__["f" /* supportsCssCustomProperties */]()) {
            _this2.root_.style.setProperty(OPACITY_VAR_NAME, value);
          }
        },
        getFocusableElements: function getFocusableElements() {
          return _this2.drawer.querySelectorAll(FOCUSABLE_ELEMENTS);
        },
        saveElementTabState: function saveElementTabState(el) {
          return __WEBPACK_IMPORTED_MODULE_2__util__["d" /* saveElementTabState */](el);
        },
        restoreElementTabState: function restoreElementTabState(el) {
          return __WEBPACK_IMPORTED_MODULE_2__util__["e" /* restoreElementTabState */](el);
        },
        makeElementUntabbable: function makeElementUntabbable(el) {
          return el.setAttribute('tabindex', -1);
        },
        notifyOpen: function notifyOpen() {
          return _this2.emit('MDCTemporaryDrawer:open');
        },
        notifyClose: function notifyClose() {
          return _this2.emit('MDCTemporaryDrawer:close');
        },
        isRtl: function isRtl() {
          return getComputedStyle(_this2.root_).getPropertyValue('direction') === 'rtl';
        },
        isDrawer: function isDrawer(el) {
          return el === _this2.drawer;
        }
      });
    }
  }, {
    key: 'open',
    get: function get() {
      return this.foundation_.isOpen();
    },
    set: function set(value) {
      if (value) {
        this.foundation_.open();
      } else {
        this.foundation_.close();
      }
    }

    /* Return the drawer element inside the component. */

  }, {
    key: 'drawer',
    get: function get() {
      return this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_1__foundation__["a" /* default */].strings.DRAWER_SELECTOR);
    }
  }], [{
    key: 'attachTo',
    value: function attachTo(root) {
      return new MDCTemporaryDrawer(root);
    }
  }]);

  return MDCTemporaryDrawer;
}(__WEBPACK_IMPORTED_MODULE_0__material_base__["a" /* MDCComponent */]);

/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__simple__ = __webpack_require__(64);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__simple__["a"]; });
/* unused harmony reexport MDCSimpleMenuFoundation */
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */



/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cssClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return strings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return numbers; });
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var cssClasses = {
  ROOT: 'mdc-simple-menu',
  OPEN: 'mdc-simple-menu--open',
  ANIMATING: 'mdc-simple-menu--animating',
  TOP_RIGHT: 'mdc-simple-menu--open-from-top-right',
  BOTTOM_LEFT: 'mdc-simple-menu--open-from-bottom-left',
  BOTTOM_RIGHT: 'mdc-simple-menu--open-from-bottom-right'
};

var strings = {
  ITEMS_SELECTOR: '.mdc-simple-menu__items'
};

var numbers = {
  // Amount of time to wait before triggering a selected event on the menu. Note that this time
  // will most likely be bumped up once interactive lists are supported to allow for the ripple to
  // animate before closing the menu
  SELECTED_TRIGGER_DELAY: 50,
  // Total duration of the menu animation.
  TRANSITION_DURATION_MS: 300,
  // The menu starts its open animation with the X axis at this time value (0 - 1).
  TRANSITION_SCALE_ADJUSTMENT_X: 0.5,
  // The time value the menu waits until the animation starts on the Y axis (0 - 1).
  TRANSITION_SCALE_ADJUSTMENT_Y: 0.2,
  // The cubic bezier control points for the animation (cubic-bezier(0, 0, 0.2, 1)).
  TRANSITION_X1: 0,
  TRANSITION_Y1: 0,
  TRANSITION_X2: 0.2,
  TRANSITION_Y2: 1
};

/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util__ = __webpack_require__(16);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */





var MDCSimpleMenuFoundation = function (_MDCFoundation) {
  _inherits(MDCSimpleMenuFoundation, _MDCFoundation);

  _createClass(MDCSimpleMenuFoundation, null, [{
    key: 'cssClasses',
    get: function get() {
      return __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* cssClasses */];
    }
  }, {
    key: 'strings',
    get: function get() {
      return __WEBPACK_IMPORTED_MODULE_1__constants__["b" /* strings */];
    }
  }, {
    key: 'numbers',
    get: function get() {
      return __WEBPACK_IMPORTED_MODULE_1__constants__["c" /* numbers */];
    }
  }, {
    key: 'defaultAdapter',
    get: function get() {
      return {
        addClass: function addClass() /* className: string */{},
        removeClass: function removeClass() /* className: string */{},
        hasClass: function hasClass() /* className: string */{},
        hasNecessaryDom: function hasNecessaryDom() {
          return (/* boolean */false
          );
        },
        getInnerDimensions: function getInnerDimensions() {
          return (/* { width: number, height: number } */{}
          );
        },
        hasAnchor: function hasAnchor() {
          return (/* boolean */false
          );
        },
        getAnchorDimensions: function getAnchorDimensions() {
          return (
            /* { width: number, height: number, top: number, right: number, bottom: number, left: number } */{}
          );
        },
        getWindowDimensions: function getWindowDimensions() {
          return (/* { width: number, height: number } */{}
          );
        },
        setScale: function setScale() /* x: number, y: number */{},
        setInnerScale: function setInnerScale() /* x: number, y: number */{},
        getNumberOfItems: function getNumberOfItems() {
          return (/* number */0
          );
        },
        registerInteractionHandler: function registerInteractionHandler() /* type: string, handler: EventListener */{},
        deregisterInteractionHandler: function deregisterInteractionHandler() /* type: string, handler: EventListener */{},
        registerDocumentClickHandler: function registerDocumentClickHandler() /* handler: EventListener */{},
        deregisterDocumentClickHandler: function deregisterDocumentClickHandler() /* handler: EventListener */{},
        getYParamsForItemAtIndex: function getYParamsForItemAtIndex() {
          return (/* index: number */ /* {top: number, height: number} */{}
          );
        },
        setTransitionDelayForItemAtIndex: function setTransitionDelayForItemAtIndex() /* index: number, value: string */{},
        getIndexForEventTarget: function getIndexForEventTarget() {
          return (/* target: EventTarget */ /* number */0
          );
        },
        notifySelected: function notifySelected() /* evtData: {index: number} */{},
        notifyCancel: function notifyCancel() {},
        saveFocus: function saveFocus() {},
        restoreFocus: function restoreFocus() {},
        isFocused: function isFocused() {
          return (/* boolean */false
          );
        },
        focus: function focus() {},
        getFocusedItemIndex: function getFocusedItemIndex() {
          return (/* number */-1
          );
        },
        focusItemAtIndex: function focusItemAtIndex() /* index: number */{},
        isRtl: function isRtl() {
          return (/* boolean */false
          );
        },
        setTransformOrigin: function setTransformOrigin() /* origin: string */{},
        setPosition: function setPosition() /* position: { top: string, right: string, bottom: string, left: string } */{},
        getAccurateTime: function getAccurateTime() {
          return (/* number */0
          );
        }
      };
    }
  }]);

  function MDCSimpleMenuFoundation(adapter) {
    _classCallCheck(this, MDCSimpleMenuFoundation);

    var _this = _possibleConstructorReturn(this, (MDCSimpleMenuFoundation.__proto__ || Object.getPrototypeOf(MDCSimpleMenuFoundation)).call(this, Object.assign(MDCSimpleMenuFoundation.defaultAdapter, adapter)));

    _this.clickHandler_ = function (evt) {
      return _this.handlePossibleSelected_(evt);
    };
    _this.keydownHandler_ = function (evt) {
      return _this.handleKeyboardDown_(evt);
    };
    _this.keyupHandler_ = function (evt) {
      return _this.handleKeyboardUp_(evt);
    };
    _this.documentClickHandler_ = function () {
      _this.adapter_.notifyCancel();
      _this.close();
    };
    _this.isOpen_ = false;
    _this.startScaleX_ = 0;
    _this.startScaleY_ = 0;
    _this.targetScale_ = 1;
    _this.scaleX_ = 0;
    _this.scaleY_ = 0;
    _this.running_ = false;
    _this.selectedTriggerTimerId_ = 0;
    _this.animationRequestId_ = 0;
    return _this;
  }

  _createClass(MDCSimpleMenuFoundation, [{
    key: 'init',
    value: function init() {
      var _MDCSimpleMenuFoundat = MDCSimpleMenuFoundation.cssClasses,
          ROOT = _MDCSimpleMenuFoundat.ROOT,
          OPEN = _MDCSimpleMenuFoundat.OPEN;


      if (!this.adapter_.hasClass(ROOT)) {
        throw new Error(ROOT + ' class required in root element.');
      }

      if (!this.adapter_.hasNecessaryDom()) {
        throw new Error('Required DOM nodes missing in ' + ROOT + ' component.');
      }

      if (this.adapter_.hasClass(OPEN)) {
        this.isOpen_ = true;
      }

      this.adapter_.registerInteractionHandler('click', this.clickHandler_);
      this.adapter_.registerInteractionHandler('keyup', this.keyupHandler_);
      this.adapter_.registerInteractionHandler('keydown', this.keydownHandler_);
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      clearTimeout(this.selectedTriggerTimerId_);
      // Cancel any currently running animations.
      cancelAnimationFrame(this.animationRequestId_);
      this.adapter_.deregisterInteractionHandler('click', this.clickHandler_);
      this.adapter_.deregisterInteractionHandler('keyup', this.keyupHandler_);
      this.adapter_.deregisterInteractionHandler('keydown', this.keydownHandler_);
      this.adapter_.deregisterDocumentClickHandler(this.documentClickHandler_);
    }

    // Calculate transition delays for individual menu items, so that they fade in one at a time.

  }, {
    key: 'applyTransitionDelays_',
    value: function applyTransitionDelays_() {
      var _MDCSimpleMenuFoundat2 = MDCSimpleMenuFoundation.cssClasses,
          BOTTOM_LEFT = _MDCSimpleMenuFoundat2.BOTTOM_LEFT,
          BOTTOM_RIGHT = _MDCSimpleMenuFoundat2.BOTTOM_RIGHT;

      var numItems = this.adapter_.getNumberOfItems();
      var height = this.dimensions_.height;

      var transitionDuration = MDCSimpleMenuFoundation.numbers.TRANSITION_DURATION_MS / 1000;
      var start = MDCSimpleMenuFoundation.numbers.TRANSITION_SCALE_ADJUSTMENT_Y;

      for (var index = 0; index < numItems; index++) {
        var _adapter_$getYParamsF = this.adapter_.getYParamsForItemAtIndex(index),
            itemTop = _adapter_$getYParamsF.top,
            itemHeight = _adapter_$getYParamsF.height;

        this.itemHeight_ = itemHeight;
        var itemDelayFraction = itemTop / height;
        if (this.adapter_.hasClass(BOTTOM_LEFT) || this.adapter_.hasClass(BOTTOM_RIGHT)) {
          itemDelayFraction = (height - itemTop - itemHeight) / height;
        }
        var itemDelay = (start + itemDelayFraction * (1 - start)) * transitionDuration;
        // Use toFixed() here to normalize CSS unit precision across browsers
        this.adapter_.setTransitionDelayForItemAtIndex(index, itemDelay.toFixed(3) + 's');
      }
    }

    // Remove transition delays from menu items.

  }, {
    key: 'removeTransitionDelays_',
    value: function removeTransitionDelays_() {
      var numItems = this.adapter_.getNumberOfItems();
      for (var i = 0; i < numItems; i++) {
        this.adapter_.setTransitionDelayForItemAtIndex(i, null);
      }
    }

    // Animate menu opening or closing.

  }, {
    key: 'animationLoop_',
    value: function animationLoop_() {
      var _this2 = this;

      var time = this.adapter_.getAccurateTime();
      var _MDCSimpleMenuFoundat3 = MDCSimpleMenuFoundation.numbers,
          TRANSITION_DURATION_MS = _MDCSimpleMenuFoundat3.TRANSITION_DURATION_MS,
          TRANSITION_X1 = _MDCSimpleMenuFoundat3.TRANSITION_X1,
          TRANSITION_Y1 = _MDCSimpleMenuFoundat3.TRANSITION_Y1,
          TRANSITION_X2 = _MDCSimpleMenuFoundat3.TRANSITION_X2,
          TRANSITION_Y2 = _MDCSimpleMenuFoundat3.TRANSITION_Y2,
          TRANSITION_SCALE_ADJUSTMENT_X = _MDCSimpleMenuFoundat3.TRANSITION_SCALE_ADJUSTMENT_X,
          TRANSITION_SCALE_ADJUSTMENT_Y = _MDCSimpleMenuFoundat3.TRANSITION_SCALE_ADJUSTMENT_Y;

      var currentTime = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util__["b" /* clamp */])((time - this.startTime_) / TRANSITION_DURATION_MS);

      // Animate X axis very slowly, so that only the Y axis animation is visible during fade-out.
      var currentTimeX = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util__["b" /* clamp */])((currentTime - TRANSITION_SCALE_ADJUSTMENT_X) / (1 - TRANSITION_SCALE_ADJUSTMENT_X));
      // No time-shifting on the Y axis when closing.
      var currentTimeY = currentTime;

      var startScaleY = this.startScaleY_;
      if (this.targetScale_ === 1) {
        // Start with the menu at the height of a single item.
        if (this.itemHeight_) {
          startScaleY = Math.max(this.itemHeight_ / this.dimensions_.height, startScaleY);
        }
        // X axis moves faster, so time-shift forward.
        currentTimeX = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util__["b" /* clamp */])(currentTime + TRANSITION_SCALE_ADJUSTMENT_X);
        // Y axis moves slower, so time-shift backwards and adjust speed by the difference.
        currentTimeY = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util__["b" /* clamp */])((currentTime - TRANSITION_SCALE_ADJUSTMENT_Y) / (1 - TRANSITION_SCALE_ADJUSTMENT_Y));
      }

      // Apply cubic bezier easing independently to each axis.
      var easeX = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util__["c" /* bezierProgress */])(currentTimeX, TRANSITION_X1, TRANSITION_Y1, TRANSITION_X2, TRANSITION_Y2);
      var easeY = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util__["c" /* bezierProgress */])(currentTimeY, TRANSITION_X1, TRANSITION_Y1, TRANSITION_X2, TRANSITION_Y2);

      // Calculate the scales to apply to the outer container and inner container.
      this.scaleX_ = this.startScaleX_ + (this.targetScale_ - this.startScaleX_) * easeX;
      var invScaleX = 1 / (this.scaleX_ === 0 ? 1 : this.scaleX_);
      this.scaleY_ = startScaleY + (this.targetScale_ - startScaleY) * easeY;
      var invScaleY = 1 / (this.scaleY_ === 0 ? 1 : this.scaleY_);

      // Apply scales.
      this.adapter_.setScale(this.scaleX_, this.scaleY_);
      this.adapter_.setInnerScale(invScaleX, invScaleY);

      // Stop animation when we've covered the entire 0 - 1 range of time.
      if (currentTime < 1) {
        this.animationRequestId_ = requestAnimationFrame(function () {
          return _this2.animationLoop_();
        });
      } else {
        this.animationRequestId_ = 0;
        this.running_ = false;
        this.adapter_.removeClass(MDCSimpleMenuFoundation.cssClasses.ANIMATING);
      }
    }

    // Starts the open or close animation.

  }, {
    key: 'animateMenu_',
    value: function animateMenu_() {
      var _this3 = this;

      this.startTime_ = this.adapter_.getAccurateTime();
      this.startScaleX_ = this.scaleX_;
      this.startScaleY_ = this.scaleY_;

      this.targetScale_ = this.isOpen_ ? 1 : 0;

      if (!this.running_) {
        this.running_ = true;
        this.animationRequestId_ = requestAnimationFrame(function () {
          return _this3.animationLoop_();
        });
      }
    }
  }, {
    key: 'focusOnOpen_',
    value: function focusOnOpen_(focusIndex) {
      if (focusIndex === null) {
        // First, try focusing the menu.
        this.adapter_.focus();
        // If that doesn't work, focus first item instead.
        if (!this.adapter_.isFocused()) {
          this.adapter_.focusItemAtIndex(0);
        }
      } else {
        this.adapter_.focusItemAtIndex(focusIndex);
      }
    }

    // Handle keys that we want to repeat on hold (tab and arrows).

  }, {
    key: 'handleKeyboardDown_',
    value: function handleKeyboardDown_(evt) {
      // Do nothing if Alt, Ctrl or Meta are pressed.
      if (evt.altKey || evt.ctrlKey || evt.metaKey) {
        return true;
      }

      var keyCode = evt.keyCode,
          key = evt.key,
          shiftKey = evt.shiftKey;

      var isTab = key === 'Tab' || keyCode === 9;
      var isArrowUp = key === 'ArrowUp' || keyCode === 38;
      var isArrowDown = key === 'ArrowDown' || keyCode === 40;
      var isSpace = key === 'Space' || keyCode === 32;

      var focusedItemIndex = this.adapter_.getFocusedItemIndex();
      var lastItemIndex = this.adapter_.getNumberOfItems() - 1;

      if (shiftKey && isTab && focusedItemIndex === 0) {
        this.adapter_.focusItemAtIndex(lastItemIndex);
        evt.preventDefault();
        return false;
      }

      if (!shiftKey && isTab && focusedItemIndex === lastItemIndex) {
        this.adapter_.focusItemAtIndex(0);
        evt.preventDefault();
        return false;
      }

      // Ensure Arrow{Up,Down} and space do not cause inadvertent scrolling
      if (isArrowUp || isArrowDown || isSpace) {
        evt.preventDefault();
      }

      if (isArrowUp) {
        if (focusedItemIndex === 0 || this.adapter_.isFocused()) {
          this.adapter_.focusItemAtIndex(lastItemIndex);
        } else {
          this.adapter_.focusItemAtIndex(focusedItemIndex - 1);
        }
      } else if (isArrowDown) {
        if (focusedItemIndex === lastItemIndex || this.adapter_.isFocused()) {
          this.adapter_.focusItemAtIndex(0);
        } else {
          this.adapter_.focusItemAtIndex(focusedItemIndex + 1);
        }
      }

      return true;
    }

    // Handle keys that we don't want to repeat on hold (Enter, Space, Escape).

  }, {
    key: 'handleKeyboardUp_',
    value: function handleKeyboardUp_(evt) {
      // Do nothing if Alt, Ctrl or Meta are pressed.
      if (evt.altKey || evt.ctrlKey || evt.metaKey) {
        return true;
      }

      var keyCode = evt.keyCode,
          key = evt.key;

      var isEnter = key === 'Enter' || keyCode === 13;
      var isSpace = key === 'Space' || keyCode === 32;
      var isEscape = key === 'Escape' || keyCode === 27;

      if (isEnter || isSpace) {
        this.handlePossibleSelected_(evt);
      }

      if (isEscape) {
        this.adapter_.notifyCancel();
        this.close();
      }

      return true;
    }
  }, {
    key: 'handlePossibleSelected_',
    value: function handlePossibleSelected_(evt) {
      var _this4 = this;

      var targetIndex = this.adapter_.getIndexForEventTarget(evt.target);
      if (targetIndex < 0) {
        return;
      }
      // Debounce multiple selections
      if (this.selectedTriggerTimerId_) {
        return;
      }
      this.selectedTriggerTimerId_ = setTimeout(function () {
        _this4.selectedTriggerTimerId_ = 0;
        _this4.close();
        _this4.adapter_.notifySelected({ index: targetIndex });
      }, __WEBPACK_IMPORTED_MODULE_1__constants__["c" /* numbers */].SELECTED_TRIGGER_DELAY);
    }
  }, {
    key: 'autoPosition_',
    value: function autoPosition_() {
      var _position;

      if (!this.adapter_.hasAnchor()) {
        return;
      }

      // Defaults: open from the top left.
      var vertical = 'top';
      var horizontal = 'left';

      var anchor = this.adapter_.getAnchorDimensions();
      var windowDimensions = this.adapter_.getWindowDimensions();

      var topOverflow = anchor.top + this.dimensions_.height - windowDimensions.height;
      var bottomOverflow = this.dimensions_.height - anchor.bottom;
      var extendsBeyondTopBounds = topOverflow > 0;

      if (extendsBeyondTopBounds) {
        if (bottomOverflow < topOverflow) {
          vertical = 'bottom';
        }
      }

      var leftOverflow = anchor.left + this.dimensions_.width - windowDimensions.width;
      var rightOverflow = this.dimensions_.width - anchor.right;
      var extendsBeyondLeftBounds = leftOverflow > 0;
      var extendsBeyondRightBounds = rightOverflow > 0;

      if (this.adapter_.isRtl()) {
        // In RTL, we prefer to open from the right.
        horizontal = 'right';
        if (extendsBeyondRightBounds && leftOverflow < rightOverflow) {
          horizontal = 'left';
        }
      } else if (extendsBeyondLeftBounds && rightOverflow < leftOverflow) {
        horizontal = 'right';
      }

      var position = (_position = {}, _defineProperty(_position, horizontal, '0'), _defineProperty(_position, vertical, '0'), _position);

      this.adapter_.setTransformOrigin(vertical + ' ' + horizontal);
      this.adapter_.setPosition(position);
    }

    // Open the menu.

  }, {
    key: 'open',
    value: function open() {
      var _this5 = this;

      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref$focusIndex = _ref.focusIndex,
          focusIndex = _ref$focusIndex === undefined ? null : _ref$focusIndex;

      this.adapter_.saveFocus();
      this.adapter_.addClass(MDCSimpleMenuFoundation.cssClasses.ANIMATING);
      this.animationRequestId_ = requestAnimationFrame(function () {
        _this5.dimensions_ = _this5.adapter_.getInnerDimensions();
        _this5.applyTransitionDelays_();
        _this5.autoPosition_();
        _this5.animateMenu_();
        _this5.adapter_.addClass(MDCSimpleMenuFoundation.cssClasses.OPEN);
        _this5.focusOnOpen_(focusIndex);
        _this5.adapter_.registerDocumentClickHandler(_this5.documentClickHandler_);
      });
      this.isOpen_ = true;
    }

    // Close the menu.

  }, {
    key: 'close',
    value: function close() {
      var _this6 = this;

      this.adapter_.deregisterDocumentClickHandler(this.documentClickHandler_);
      this.adapter_.addClass(MDCSimpleMenuFoundation.cssClasses.ANIMATING);
      requestAnimationFrame(function () {
        _this6.removeTransitionDelays_();
        _this6.animateMenu_();
        _this6.adapter_.removeClass(MDCSimpleMenuFoundation.cssClasses.OPEN);
      });
      this.isOpen_ = false;
      this.adapter_.restoreFocus();
    }
  }, {
    key: 'isOpen',
    value: function isOpen() {
      return this.isOpen_;
    }
  }]);

  return MDCSimpleMenuFoundation;
}(__WEBPACK_IMPORTED_MODULE_0__material_base__["b" /* MDCFoundation */]);

/* harmony default export */ __webpack_exports__["a"] = (MDCSimpleMenuFoundation);

/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MDCSimpleMenu; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__foundation__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util__ = __webpack_require__(16);
/* unused harmony reexport MDCSimpleMenuFoundation */
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */







var MDCSimpleMenu = function (_MDCComponent) {
  _inherits(MDCSimpleMenu, _MDCComponent);

  function MDCSimpleMenu() {
    _classCallCheck(this, MDCSimpleMenu);

    return _possibleConstructorReturn(this, (MDCSimpleMenu.__proto__ || Object.getPrototypeOf(MDCSimpleMenu)).apply(this, arguments));
  }

  _createClass(MDCSimpleMenu, [{
    key: 'show',
    value: function show() {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref$focusIndex = _ref.focusIndex,
          focusIndex = _ref$focusIndex === undefined ? null : _ref$focusIndex;

      this.foundation_.open({ focusIndex: focusIndex });
    }
  }, {
    key: 'hide',
    value: function hide() {
      this.foundation_.close();
    }

    /* Return the item container element inside the component. */

  }, {
    key: 'getDefaultFoundation',
    value: function getDefaultFoundation() {
      var _this2 = this;

      return new __WEBPACK_IMPORTED_MODULE_1__foundation__["a" /* default */]({
        addClass: function addClass(className) {
          return _this2.root_.classList.add(className);
        },
        removeClass: function removeClass(className) {
          return _this2.root_.classList.remove(className);
        },
        hasClass: function hasClass(className) {
          return _this2.root_.classList.contains(className);
        },
        hasNecessaryDom: function hasNecessaryDom() {
          return Boolean(_this2.itemsContainer_);
        },
        getInnerDimensions: function getInnerDimensions() {
          var itemsContainer = _this2.itemsContainer_;

          return { width: itemsContainer.offsetWidth, height: itemsContainer.offsetHeight };
        },
        hasAnchor: function hasAnchor() {
          return _this2.root_.parentElement && _this2.root_.parentElement.classList.contains('mdc-menu-anchor');
        },
        getAnchorDimensions: function getAnchorDimensions() {
          return _this2.root_.parentElement.getBoundingClientRect();
        },
        getWindowDimensions: function getWindowDimensions() {
          return { width: window.innerWidth, height: window.innerHeight };
        },
        setScale: function setScale(x, y) {
          _this2.root_.style[__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util__["a" /* getTransformPropertyName */])(window)] = 'scale(' + x + ', ' + y + ')';
        },
        setInnerScale: function setInnerScale(x, y) {
          _this2.itemsContainer_.style[__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util__["a" /* getTransformPropertyName */])(window)] = 'scale(' + x + ', ' + y + ')';
        },
        getNumberOfItems: function getNumberOfItems() {
          return _this2.items.length;
        },
        registerInteractionHandler: function registerInteractionHandler(type, handler) {
          return _this2.root_.addEventListener(type, handler);
        },
        deregisterInteractionHandler: function deregisterInteractionHandler(type, handler) {
          return _this2.root_.removeEventListener(type, handler);
        },
        registerDocumentClickHandler: function registerDocumentClickHandler(handler) {
          return document.addEventListener('click', handler);
        },
        deregisterDocumentClickHandler: function deregisterDocumentClickHandler(handler) {
          return document.removeEventListener('click', handler);
        },
        getYParamsForItemAtIndex: function getYParamsForItemAtIndex(index) {
          var _items$index = _this2.items[index],
              top = _items$index.offsetTop,
              height = _items$index.offsetHeight;

          return { top: top, height: height };
        },
        setTransitionDelayForItemAtIndex: function setTransitionDelayForItemAtIndex(index, value) {
          return _this2.items[index].style.setProperty('transition-delay', value);
        },
        getIndexForEventTarget: function getIndexForEventTarget(target) {
          return _this2.items.indexOf(target);
        },
        notifySelected: function notifySelected(evtData) {
          return _this2.emit('MDCSimpleMenu:selected', {
            index: evtData.index,
            item: _this2.items[evtData.index]
          });
        },
        notifyCancel: function notifyCancel() {
          return _this2.emit('MDCSimpleMenu:cancel');
        },
        saveFocus: function saveFocus() {
          _this2.previousFocus_ = document.activeElement;
        },
        restoreFocus: function restoreFocus() {
          if (_this2.previousFocus_) {
            _this2.previousFocus_.focus();
          }
        },
        isFocused: function isFocused() {
          return document.activeElement === _this2.root_;
        },
        focus: function focus() {
          return _this2.root_.focus();
        },
        getFocusedItemIndex: function getFocusedItemIndex() {
          return _this2.items.indexOf(document.activeElement);
        },
        focusItemAtIndex: function focusItemAtIndex(index) {
          return _this2.items[index].focus();
        },
        isRtl: function isRtl() {
          return getComputedStyle(_this2.root_).getPropertyValue('direction') === 'rtl';
        },
        setTransformOrigin: function setTransformOrigin(origin) {
          _this2.root_.style[__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util__["a" /* getTransformPropertyName */])(window) + '-origin'] = origin;
        },
        setPosition: function setPosition(position) {
          _this2.root_.style.left = 'left' in position ? position.left : null;
          _this2.root_.style.right = 'right' in position ? position.right : null;
          _this2.root_.style.top = 'top' in position ? position.top : null;
          _this2.root_.style.bottom = 'bottom' in position ? position.bottom : null;
        },
        getAccurateTime: function getAccurateTime() {
          return window.performance.now();
        }
      });
    }
  }, {
    key: 'open',
    get: function get() {
      return this.foundation_.isOpen();
    },
    set: function set(value) {
      if (value) {
        this.foundation_.open();
      } else {
        this.foundation_.close();
      }
    }
  }, {
    key: 'itemsContainer_',
    get: function get() {
      return this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_1__foundation__["a" /* default */].strings.ITEMS_SELECTOR);
    }

    /* Return the items within the menu. Note that this only contains the set of elements within
     * the items container that are proper list items, and not supplemental / presentational DOM
     * elements.
     */

  }, {
    key: 'items',
    get: function get() {
      var itemsContainer = this.itemsContainer_;

      return [].slice.call(itemsContainer.querySelectorAll('.mdc-list-item[role]'));
    }
  }], [{
    key: 'attachTo',
    value: function attachTo(root) {
      return new MDCSimpleMenu(root);
    }
  }]);

  return MDCSimpleMenu;
}(__WEBPACK_IMPORTED_MODULE_0__material_base__["a" /* MDCComponent */]);

/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return strings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cssClasses; });
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var strings = {
  NATIVE_CONTROL_SELECTOR: '.mdc-radio__native-control'
};

var cssClasses = {
  ROOT: 'mdc-radio',
  DISABLED: 'mdc-radio--disabled'
};

/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__(65);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */




var MDCRadioFoundation = function (_MDCFoundation) {
  _inherits(MDCRadioFoundation, _MDCFoundation);

  function MDCRadioFoundation() {
    _classCallCheck(this, MDCRadioFoundation);

    return _possibleConstructorReturn(this, (MDCRadioFoundation.__proto__ || Object.getPrototypeOf(MDCRadioFoundation)).apply(this, arguments));
  }

  _createClass(MDCRadioFoundation, [{
    key: 'isChecked',
    value: function isChecked() {
      return this.getNativeControl_().checked;
    }
  }, {
    key: 'setChecked',
    value: function setChecked(checked) {
      this.getNativeControl_().checked = checked;
    }
  }, {
    key: 'isDisabled',
    value: function isDisabled() {
      return this.getNativeControl_().disabled;
    }
  }, {
    key: 'setDisabled',
    value: function setDisabled(disabled) {
      var DISABLED = MDCRadioFoundation.cssClasses.DISABLED;

      this.getNativeControl_().disabled = disabled;
      if (disabled) {
        this.adapter_.addClass(DISABLED);
      } else {
        this.adapter_.removeClass(DISABLED);
      }
    }
  }, {
    key: 'getValue',
    value: function getValue() {
      return this.getNativeControl_().value;
    }
  }, {
    key: 'setValue',
    value: function setValue(value) {
      this.getNativeControl_().value = value;
    }
  }, {
    key: 'getNativeControl_',
    value: function getNativeControl_() {
      return this.adapter_.getNativeControl() || {
        checked: false,
        disabled: false,
        value: null
      };
    }
  }], [{
    key: 'cssClasses',
    get: function get() {
      return __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* cssClasses */];
    }
  }, {
    key: 'strings',
    get: function get() {
      return __WEBPACK_IMPORTED_MODULE_1__constants__["b" /* strings */];
    }
  }, {
    key: 'defaultAdapter',
    get: function get() {
      return {
        addClass: function addClass() /* className: string */{},
        removeClass: function removeClass() /* className: string */{},
        getNativeControl: function getNativeControl() /* HTMLInputElement */{}
      };
    }
  }]);

  return MDCRadioFoundation;
}(__WEBPACK_IMPORTED_MODULE_0__material_base__["b" /* MDCFoundation */]);

/* harmony default export */ __webpack_exports__["a"] = (MDCRadioFoundation);

/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MDCRadio; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_ripple__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__foundation__ = __webpack_require__(66);
/* unused harmony reexport MDCRadioFoundation */
var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */








var MDCRadio = function (_MDCComponent) {
  _inherits(MDCRadio, _MDCComponent);

  _createClass(MDCRadio, [{
    key: 'checked',
    get: function get() {
      return this.foundation_.isChecked();
    },
    set: function set(checked) {
      this.foundation_.setChecked(checked);
    }
  }, {
    key: 'disabled',
    get: function get() {
      return this.foundation_.isDisabled();
    },
    set: function set(disabled) {
      this.foundation_.setDisabled(disabled);
    }
  }, {
    key: 'value',
    get: function get() {
      return this.foundation_.getValue();
    },
    set: function set(value) {
      this.foundation_.setValue(value);
    }
  }, {
    key: 'ripple',
    get: function get() {
      return this.ripple_;
    }
  }], [{
    key: 'attachTo',
    value: function attachTo(root) {
      return new MDCRadio(root);
    }
  }]);

  function MDCRadio() {
    var _ref;

    _classCallCheck(this, MDCRadio);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = MDCRadio.__proto__ || Object.getPrototypeOf(MDCRadio)).call.apply(_ref, [this].concat(args)));

    _this.ripple_ = _this.initRipple_();
    return _this;
  }

  _createClass(MDCRadio, [{
    key: 'initRipple_',
    value: function initRipple_() {
      var _this2 = this;

      var adapter = Object.assign(__WEBPACK_IMPORTED_MODULE_1__material_ripple__["a" /* MDCRipple */].createAdapter(this), {
        isUnbounded: function isUnbounded() {
          return true;
        },
        // Radio buttons technically go "active" whenever there is *any* keyboard interaction. This is not the
        // UI we desire.
        isSurfaceActive: function isSurfaceActive() {
          return false;
        },
        registerInteractionHandler: function registerInteractionHandler(type, handler) {
          return _this2.nativeControl_.addEventListener(type, handler);
        },
        deregisterInteractionHandler: function deregisterInteractionHandler(type, handler) {
          return _this2.nativeControl_.removeEventListener(type, handler);
        },
        computeBoundingRect: function computeBoundingRect() {
          var _root_$getBoundingCli = _this2.root_.getBoundingClientRect(),
              left = _root_$getBoundingCli.left,
              top = _root_$getBoundingCli.top;

          var DIM = 40;
          return {
            top: top,
            left: left,
            right: left + DIM,
            bottom: top + DIM,
            width: DIM,
            height: DIM
          };
        }
      });
      var foundation = new __WEBPACK_IMPORTED_MODULE_1__material_ripple__["b" /* MDCRippleFoundation */](adapter);
      return new __WEBPACK_IMPORTED_MODULE_1__material_ripple__["a" /* MDCRipple */](this.root_, foundation);
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      this.ripple_.destroy();
      _get(MDCRadio.prototype.__proto__ || Object.getPrototypeOf(MDCRadio.prototype), 'destroy', this).call(this);
    }
  }, {
    key: 'getDefaultFoundation',
    value: function getDefaultFoundation() {
      var _this3 = this;

      return new __WEBPACK_IMPORTED_MODULE_2__foundation__["a" /* default */]({
        addClass: function addClass(className) {
          return _this3.root_.classList.add(className);
        },
        removeClass: function removeClass(className) {
          return _this3.root_.classList.remove(className);
        },
        getNativeControl: function getNativeControl() {
          return _this3.root_.querySelector(__WEBPACK_IMPORTED_MODULE_2__foundation__["a" /* default */].strings.NATIVE_CONTROL_SELECTOR);
        }
      });
    }
  }, {
    key: 'nativeControl_',
    get: function get() {
      return this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_2__foundation__["a" /* default */].strings.NATIVE_CONTROL_SELECTOR);
    }
  }]);

  return MDCRadio;
}(__WEBPACK_IMPORTED_MODULE_0__material_base__["a" /* MDCComponent */]);

/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cssClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return strings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return numbers; });
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var cssClasses = {
  // Ripple is a special case where the "root" component is really a "mixin" of sorts,
  // given that it's an 'upgrade' to an existing component. That being said it is the root
  // CSS class that all other CSS classes derive from.
  ROOT: 'mdc-ripple-upgraded',
  UNBOUNDED: 'mdc-ripple-upgraded--unbounded',
  BG_FOCUSED: 'mdc-ripple-upgraded--background-focused',
  BG_ACTIVE_FILL: 'mdc-ripple-upgraded--background-active-fill',
  FG_ACTIVATION: 'mdc-ripple-upgraded--foreground-activation',
  FG_DEACTIVATION: 'mdc-ripple-upgraded--foreground-deactivation'
};

var strings = {
  VAR_SURFACE_WIDTH: '--mdc-ripple-surface-width',
  VAR_SURFACE_HEIGHT: '--mdc-ripple-surface-height',
  VAR_FG_SIZE: '--mdc-ripple-fg-size',
  VAR_LEFT: '--mdc-ripple-left',
  VAR_TOP: '--mdc-ripple-top',
  VAR_FG_SCALE: '--mdc-ripple-fg-scale',
  VAR_FG_TRANSLATE_START: '--mdc-ripple-fg-translate-start',
  VAR_FG_TRANSLATE_END: '--mdc-ripple-fg-translate-end'
};

var numbers = {
  PADDING: 10,
  INITIAL_ORIGIN_SCALE: 0.6,
  DEACTIVATION_TIMEOUT_MS: 300
};

/***/ }),
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util__ = __webpack_require__(11);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */






var DEACTIVATION_ACTIVATION_PAIRS = {
  mouseup: 'mousedown',
  pointerup: 'pointerdown',
  touchend: 'touchstart',
  keyup: 'keydown',
  blur: 'focus'
};

var MDCRippleFoundation = function (_MDCFoundation) {
  _inherits(MDCRippleFoundation, _MDCFoundation);

  _createClass(MDCRippleFoundation, [{
    key: 'isSupported_',


    // We compute this property so that we are not querying information about the client
    // until the point in time where the foundation requests it. This prevents scenarios where
    // client-side feature-detection may happen too early, such as when components are rendered on the server
    // and then initialized at mount time on the client.
    get: function get() {
      return this.adapter_.browserSupportsCssVars();
    }
  }], [{
    key: 'cssClasses',
    get: function get() {
      return __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* cssClasses */];
    }
  }, {
    key: 'strings',
    get: function get() {
      return __WEBPACK_IMPORTED_MODULE_1__constants__["b" /* strings */];
    }
  }, {
    key: 'numbers',
    get: function get() {
      return __WEBPACK_IMPORTED_MODULE_1__constants__["c" /* numbers */];
    }
  }, {
    key: 'defaultAdapter',
    get: function get() {
      return {
        browserSupportsCssVars: function browserSupportsCssVars() /* boolean - cached */{},
        isUnbounded: function isUnbounded() /* boolean */{},
        isSurfaceActive: function isSurfaceActive() /* boolean */{},
        isSurfaceDisabled: function isSurfaceDisabled() /* boolean */{},
        addClass: function addClass() /* className: string */{},
        removeClass: function removeClass() /* className: string */{},
        registerInteractionHandler: function registerInteractionHandler() /* evtType: string, handler: EventListener */{},
        deregisterInteractionHandler: function deregisterInteractionHandler() /* evtType: string, handler: EventListener */{},
        registerResizeHandler: function registerResizeHandler() /* handler: EventListener */{},
        deregisterResizeHandler: function deregisterResizeHandler() /* handler: EventListener */{},
        updateCssVariable: function updateCssVariable() /* varName: string, value: string */{},
        computeBoundingRect: function computeBoundingRect() /* ClientRect */{},
        getWindowPageOffset: function getWindowPageOffset() /* {x: number, y: number} */{}
      };
    }
  }]);

  function MDCRippleFoundation(adapter) {
    _classCallCheck(this, MDCRippleFoundation);

    var _this = _possibleConstructorReturn(this, (MDCRippleFoundation.__proto__ || Object.getPrototypeOf(MDCRippleFoundation)).call(this, Object.assign(MDCRippleFoundation.defaultAdapter, adapter)));

    _this.layoutFrame_ = 0;
    _this.frame_ = { width: 0, height: 0 };
    _this.activationState_ = _this.defaultActivationState_();
    _this.xfDuration_ = 0;
    _this.initialSize_ = 0;
    _this.maxRadius_ = 0;
    _this.listenerInfos_ = [{ activate: 'touchstart', deactivate: 'touchend' }, { activate: 'pointerdown', deactivate: 'pointerup' }, { activate: 'mousedown', deactivate: 'mouseup' }, { activate: 'keydown', deactivate: 'keyup' }, { focus: 'focus', blur: 'blur' }];
    _this.listeners_ = {
      activate: function activate(e) {
        return _this.activate_(e);
      },
      deactivate: function deactivate(e) {
        return _this.deactivate_(e);
      },
      focus: function focus() {
        return requestAnimationFrame(function () {
          return _this.adapter_.addClass(MDCRippleFoundation.cssClasses.BG_FOCUSED);
        });
      },
      blur: function blur() {
        return requestAnimationFrame(function () {
          return _this.adapter_.removeClass(MDCRippleFoundation.cssClasses.BG_FOCUSED);
        });
      }
    };
    _this.resizeHandler_ = function () {
      return _this.layout();
    };
    _this.unboundedCoords_ = {
      left: 0,
      top: 0
    };
    _this.fgScale_ = 0;
    _this.activationTimer_ = 0;
    _this.activationAnimationHasEnded_ = false;
    _this.activationTimerCallback_ = function () {
      _this.activationAnimationHasEnded_ = true;
      _this.runDeactivationUXLogicIfReady_();
    };
    return _this;
  }

  _createClass(MDCRippleFoundation, [{
    key: 'defaultActivationState_',
    value: function defaultActivationState_() {
      return {
        isActivated: false,
        hasDeactivationUXRun: false,
        wasActivatedByPointer: false,
        wasElementMadeActive: false,
        activationStartTime: 0,
        activationEvent: null,
        isProgrammatic: false
      };
    }
  }, {
    key: 'init',
    value: function init() {
      var _this2 = this;

      if (!this.isSupported_) {
        return;
      }
      this.addEventListeners_();

      var _MDCRippleFoundation$ = MDCRippleFoundation.cssClasses,
          ROOT = _MDCRippleFoundation$.ROOT,
          UNBOUNDED = _MDCRippleFoundation$.UNBOUNDED;

      requestAnimationFrame(function () {
        _this2.adapter_.addClass(ROOT);
        if (_this2.adapter_.isUnbounded()) {
          _this2.adapter_.addClass(UNBOUNDED);
        }
        _this2.layoutInternal_();
      });
    }
  }, {
    key: 'addEventListeners_',
    value: function addEventListeners_() {
      var _this3 = this;

      this.listenerInfos_.forEach(function (info) {
        Object.keys(info).forEach(function (k) {
          _this3.adapter_.registerInteractionHandler(info[k], _this3.listeners_[k]);
        });
      });
      this.adapter_.registerResizeHandler(this.resizeHandler_);
    }
  }, {
    key: 'activate_',
    value: function activate_(e) {
      var _this4 = this;

      if (this.adapter_.isSurfaceDisabled()) {
        return;
      }

      var activationState = this.activationState_;

      if (activationState.isActivated) {
        return;
      }

      activationState.isActivated = true;
      activationState.isProgrammatic = e === null;
      activationState.activationEvent = e;
      activationState.wasActivatedByPointer = activationState.isProgrammatic ? false : e.type === 'mousedown' || e.type === 'touchstart' || e.type === 'pointerdown';
      activationState.activationStartTime = Date.now();

      requestAnimationFrame(function () {
        // This needs to be wrapped in an rAF call b/c web browsers
        // report active states inconsistently when they're called within
        // event handling code:
        // - https://bugs.chromium.org/p/chromium/issues/detail?id=635971
        // - https://bugzilla.mozilla.org/show_bug.cgi?id=1293741
        activationState.wasElementMadeActive = e && e.type === 'keydown' ? _this4.adapter_.isSurfaceActive() : true;
        if (activationState.wasElementMadeActive) {
          _this4.animateActivation_();
        } else {
          // Reset activation state immediately if element was not made active.
          _this4.activationState_ = _this4.defaultActivationState_();
        }
      });
    }
  }, {
    key: 'activate',
    value: function activate() {
      this.activate_(null);
    }
  }, {
    key: 'animateActivation_',
    value: function animateActivation_() {
      var _this5 = this;

      var _MDCRippleFoundation$2 = MDCRippleFoundation.strings,
          VAR_FG_TRANSLATE_START = _MDCRippleFoundation$2.VAR_FG_TRANSLATE_START,
          VAR_FG_TRANSLATE_END = _MDCRippleFoundation$2.VAR_FG_TRANSLATE_END;
      var _MDCRippleFoundation$3 = MDCRippleFoundation.cssClasses,
          BG_ACTIVE_FILL = _MDCRippleFoundation$3.BG_ACTIVE_FILL,
          FG_DEACTIVATION = _MDCRippleFoundation$3.FG_DEACTIVATION,
          FG_ACTIVATION = _MDCRippleFoundation$3.FG_ACTIVATION;
      var DEACTIVATION_TIMEOUT_MS = MDCRippleFoundation.numbers.DEACTIVATION_TIMEOUT_MS;


      var translateStart = '';
      var translateEnd = '';

      if (!this.adapter_.isUnbounded()) {
        var _getFgTranslationCoor = this.getFgTranslationCoordinates_(),
            startPoint = _getFgTranslationCoor.startPoint,
            endPoint = _getFgTranslationCoor.endPoint;

        translateStart = startPoint.x + 'px, ' + startPoint.y + 'px';
        translateEnd = endPoint.x + 'px, ' + endPoint.y + 'px';
      }

      this.adapter_.updateCssVariable(VAR_FG_TRANSLATE_START, translateStart);
      this.adapter_.updateCssVariable(VAR_FG_TRANSLATE_END, translateEnd);
      // Cancel any ongoing activation/deactivation animations
      clearTimeout(this.activationTimer_);
      this.rmBoundedActivationClasses_();
      this.adapter_.removeClass(FG_DEACTIVATION);

      // Force layout in order to re-trigger the animation.
      this.adapter_.computeBoundingRect();
      this.adapter_.addClass(BG_ACTIVE_FILL);
      this.adapter_.addClass(FG_ACTIVATION);
      this.activationTimer_ = setTimeout(function () {
        return _this5.activationTimerCallback_();
      }, DEACTIVATION_TIMEOUT_MS);
    }
  }, {
    key: 'getFgTranslationCoordinates_',
    value: function getFgTranslationCoordinates_() {
      var activationState = this.activationState_;
      var activationEvent = activationState.activationEvent,
          wasActivatedByPointer = activationState.wasActivatedByPointer;


      var startPoint = void 0;
      if (wasActivatedByPointer) {
        startPoint = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util__["c" /* getNormalizedEventCoords */])(activationEvent, this.adapter_.getWindowPageOffset(), this.adapter_.computeBoundingRect());
      } else {
        startPoint = {
          x: this.frame_.width / 2,
          y: this.frame_.height / 2
        };
      }
      // Center the element around the start point.
      startPoint = {
        x: startPoint.x - this.initialSize_ / 2,
        y: startPoint.y - this.initialSize_ / 2
      };

      var endPoint = {
        x: this.frame_.width / 2 - this.initialSize_ / 2,
        y: this.frame_.height / 2 - this.initialSize_ / 2
      };

      return { startPoint: startPoint, endPoint: endPoint };
    }
  }, {
    key: 'runDeactivationUXLogicIfReady_',
    value: function runDeactivationUXLogicIfReady_() {
      var FG_DEACTIVATION = MDCRippleFoundation.cssClasses.FG_DEACTIVATION;
      var _activationState_ = this.activationState_,
          hasDeactivationUXRun = _activationState_.hasDeactivationUXRun,
          isActivated = _activationState_.isActivated;

      var activationHasEnded = hasDeactivationUXRun || !isActivated;
      if (activationHasEnded && this.activationAnimationHasEnded_) {
        this.rmBoundedActivationClasses_();
        // Note that we don't need to remove this here since it's removed on re-activation.
        this.adapter_.addClass(FG_DEACTIVATION);
      }
    }
  }, {
    key: 'rmBoundedActivationClasses_',
    value: function rmBoundedActivationClasses_() {
      var _MDCRippleFoundation$4 = MDCRippleFoundation.cssClasses,
          BG_ACTIVE_FILL = _MDCRippleFoundation$4.BG_ACTIVE_FILL,
          FG_ACTIVATION = _MDCRippleFoundation$4.FG_ACTIVATION;

      this.adapter_.removeClass(BG_ACTIVE_FILL);
      this.adapter_.removeClass(FG_ACTIVATION);
      this.activationAnimationHasEnded_ = false;
      this.adapter_.computeBoundingRect();
    }
  }, {
    key: 'deactivate_',
    value: function deactivate_(e) {
      var _this6 = this;

      var activationState = this.activationState_;
      // This can happen in scenarios such as when you have a keyup event that blurs the element.

      if (!activationState.isActivated) {
        return;
      }
      // Programmatic deactivation.
      if (activationState.isProgrammatic) {
        var evtObject = null;
        requestAnimationFrame(function () {
          return _this6.animateDeactivation_(evtObject, Object.assign({}, activationState));
        });
        this.activationState_ = this.defaultActivationState_();
        return;
      }

      var actualActivationType = DEACTIVATION_ACTIVATION_PAIRS[e.type];
      var expectedActivationType = activationState.activationEvent.type;
      // NOTE: Pointer events are tricky - https://patrickhlauke.github.io/touch/tests/results/
      // Essentially, what we need to do here is decouple the deactivation UX from the actual
      // deactivation state itself. This way, touch/pointer events in sequence do not trample one
      // another.
      var needsDeactivationUX = actualActivationType === expectedActivationType;
      var needsActualDeactivation = needsDeactivationUX;
      if (activationState.wasActivatedByPointer) {
        needsActualDeactivation = e.type === 'mouseup';
      }

      var state = Object.assign({}, activationState);
      requestAnimationFrame(function () {
        if (needsDeactivationUX) {
          _this6.activationState_.hasDeactivationUXRun = true;
          _this6.animateDeactivation_(e, state);
        }

        if (needsActualDeactivation) {
          _this6.activationState_ = _this6.defaultActivationState_();
        }
      });
    }
  }, {
    key: 'deactivate',
    value: function deactivate() {
      this.deactivate_(null);
    }
  }, {
    key: 'animateDeactivation_',
    value: function animateDeactivation_(e, _ref) {
      var wasActivatedByPointer = _ref.wasActivatedByPointer,
          wasElementMadeActive = _ref.wasElementMadeActive;
      var BG_FOCUSED = MDCRippleFoundation.cssClasses.BG_FOCUSED;

      if (wasActivatedByPointer || wasElementMadeActive) {
        // Remove class left over by element being focused
        this.adapter_.removeClass(BG_FOCUSED);
        this.runDeactivationUXLogicIfReady_();
      }
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      var _this7 = this;

      if (!this.isSupported_) {
        return;
      }
      this.removeEventListeners_();

      var _MDCRippleFoundation$5 = MDCRippleFoundation.cssClasses,
          ROOT = _MDCRippleFoundation$5.ROOT,
          UNBOUNDED = _MDCRippleFoundation$5.UNBOUNDED;

      requestAnimationFrame(function () {
        _this7.adapter_.removeClass(ROOT);
        _this7.adapter_.removeClass(UNBOUNDED);
        _this7.removeCssVars_();
      });
    }
  }, {
    key: 'removeEventListeners_',
    value: function removeEventListeners_() {
      var _this8 = this;

      this.listenerInfos_.forEach(function (info) {
        Object.keys(info).forEach(function (k) {
          _this8.adapter_.deregisterInteractionHandler(info[k], _this8.listeners_[k]);
        });
      });
      this.adapter_.deregisterResizeHandler(this.resizeHandler_);
    }
  }, {
    key: 'removeCssVars_',
    value: function removeCssVars_() {
      var _this9 = this;

      var strings = MDCRippleFoundation.strings;

      Object.keys(strings).forEach(function (k) {
        if (k.indexOf('VAR_') === 0) {
          _this9.adapter_.updateCssVariable(strings[k], null);
        }
      });
    }
  }, {
    key: 'layout',
    value: function layout() {
      var _this10 = this;

      if (this.layoutFrame_) {
        cancelAnimationFrame(this.layoutFrame_);
      }
      this.layoutFrame_ = requestAnimationFrame(function () {
        _this10.layoutInternal_();
        _this10.layoutFrame_ = 0;
      });
    }
  }, {
    key: 'layoutInternal_',
    value: function layoutInternal_() {
      this.frame_ = this.adapter_.computeBoundingRect();

      var maxDim = Math.max(this.frame_.height, this.frame_.width);
      var surfaceDiameter = Math.sqrt(Math.pow(this.frame_.width, 2) + Math.pow(this.frame_.height, 2));

      // 60% of the largest dimension of the surface
      this.initialSize_ = maxDim * MDCRippleFoundation.numbers.INITIAL_ORIGIN_SCALE;

      // Diameter of the surface + 10px
      this.maxRadius_ = surfaceDiameter + MDCRippleFoundation.numbers.PADDING;
      this.fgScale_ = this.maxRadius_ / this.initialSize_;
      this.xfDuration_ = 1000 * Math.sqrt(this.maxRadius_ / 1024);
      this.updateLayoutCssVars_();
    }
  }, {
    key: 'updateLayoutCssVars_',
    value: function updateLayoutCssVars_() {
      var _MDCRippleFoundation$6 = MDCRippleFoundation.strings,
          VAR_SURFACE_WIDTH = _MDCRippleFoundation$6.VAR_SURFACE_WIDTH,
          VAR_SURFACE_HEIGHT = _MDCRippleFoundation$6.VAR_SURFACE_HEIGHT,
          VAR_FG_SIZE = _MDCRippleFoundation$6.VAR_FG_SIZE,
          VAR_LEFT = _MDCRippleFoundation$6.VAR_LEFT,
          VAR_TOP = _MDCRippleFoundation$6.VAR_TOP,
          VAR_FG_SCALE = _MDCRippleFoundation$6.VAR_FG_SCALE;


      this.adapter_.updateCssVariable(VAR_SURFACE_WIDTH, this.frame_.width + 'px');
      this.adapter_.updateCssVariable(VAR_SURFACE_HEIGHT, this.frame_.height + 'px');
      this.adapter_.updateCssVariable(VAR_FG_SIZE, this.initialSize_ + 'px');
      this.adapter_.updateCssVariable(VAR_FG_SCALE, this.fgScale_);

      if (this.adapter_.isUnbounded()) {
        this.unboundedCoords_ = {
          left: Math.round(this.frame_.width / 2 - this.initialSize_ / 2),
          top: Math.round(this.frame_.height / 2 - this.initialSize_ / 2)
        };

        this.adapter_.updateCssVariable(VAR_LEFT, this.unboundedCoords_.left + 'px');
        this.adapter_.updateCssVariable(VAR_TOP, this.unboundedCoords_.top + 'px');
      }
    }
  }]);

  return MDCRippleFoundation;
}(__WEBPACK_IMPORTED_MODULE_0__material_base__["b" /* MDCFoundation */]);

/* harmony default export */ __webpack_exports__["a"] = (MDCRippleFoundation);

/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cssClasses; });
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var cssClasses = {
  ROOT: 'mdc-select',
  OPEN: 'mdc-select--open',
  DISABLED: 'mdc-select--disabled'
};

/***/ }),
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__(70);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */




var OPENER_KEYS = [{ key: 'ArrowUp', keyCode: 38, forType: 'keydown' }, { key: 'ArrowDown', keyCode: 40, forType: 'keydown' }, { key: 'Space', keyCode: 32, forType: 'keyup' }];

var MDCSelectFoundation = function (_MDCFoundation) {
  _inherits(MDCSelectFoundation, _MDCFoundation);

  _createClass(MDCSelectFoundation, null, [{
    key: 'cssClasses',
    get: function get() {
      return __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* cssClasses */];
    }
  }, {
    key: 'defaultAdapter',
    get: function get() {
      return {
        addClass: function addClass() /* className: string */{},
        removeClass: function removeClass() /* className: string */{},
        setAttr: function setAttr() /* attr: string, value: string */{},
        rmAttr: function rmAttr() /* attr: string */{},
        computeBoundingRect: function computeBoundingRect() {
          return (/* {left: number, top: number} */{ left: 0, top: 0 }
          );
        },
        registerInteractionHandler: function registerInteractionHandler() /* type: string, handler: EventListener */{},
        deregisterInteractionHandler: function deregisterInteractionHandler() /* type: string, handler: EventListener */{},
        focus: function focus() {},
        makeTabbable: function makeTabbable() {},
        makeUntabbable: function makeUntabbable() {},
        getComputedStyleValue: function getComputedStyleValue() {
          return (/* propertyName: string */ /* string */''
          );
        },
        setStyle: function setStyle() /* propertyName: string, value: string */{},
        create2dRenderingContext: function create2dRenderingContext() {
          return (/* {font: string, measureText: (string) => {width: number}} */{
              font: '',
              measureText: function measureText() {
                return { width: 0 };
              }
            }
          );
        },
        setMenuElStyle: function setMenuElStyle() /* propertyName: string, value: string */{},
        setMenuElAttr: function setMenuElAttr() /* attr: string, value: string */{},
        rmMenuElAttr: function rmMenuElAttr() /* attr: string */{},
        getMenuElOffsetHeight: function getMenuElOffsetHeight() {
          return (/* number */0
          );
        },
        openMenu: function openMenu() /* focusIndex: number */{},
        isMenuOpen: function isMenuOpen() {
          return (/* boolean */false
          );
        },
        setSelectedTextContent: function setSelectedTextContent() /* textContent: string */{},
        getNumberOfOptions: function getNumberOfOptions() {
          return (/* number */0
          );
        },
        getTextForOptionAtIndex: function getTextForOptionAtIndex() {
          return (/* index: number */ /* string */''
          );
        },
        getValueForOptionAtIndex: function getValueForOptionAtIndex() {
          return (/* index: number */ /* string */''
          );
        },
        setAttrForOptionAtIndex: function setAttrForOptionAtIndex() /* index: number, attr: string, value: string */{},
        rmAttrForOptionAtIndex: function rmAttrForOptionAtIndex() /* index: number, attr: string */{},
        getOffsetTopForOptionAtIndex: function getOffsetTopForOptionAtIndex() {
          return (/* index: number */ /* number */0
          );
        },
        registerMenuInteractionHandler: function registerMenuInteractionHandler() /* type: string, handler: EventListener */{},
        deregisterMenuInteractionHandler: function deregisterMenuInteractionHandler() /* type: string, handler: EventListener */{},
        notifyChange: function notifyChange() {},
        getWindowInnerHeight: function getWindowInnerHeight() {
          return (/* number */0
          );
        }
      };
    }
  }]);

  function MDCSelectFoundation(adapter) {
    _classCallCheck(this, MDCSelectFoundation);

    var _this = _possibleConstructorReturn(this, (MDCSelectFoundation.__proto__ || Object.getPrototypeOf(MDCSelectFoundation)).call(this, Object.assign(MDCSelectFoundation.defaultAdapter, adapter)));

    _this.ctx_ = null;
    _this.selectedIndex_ = -1;
    _this.disabled_ = false;
    _this.displayHandler_ = function (evt) {
      evt.preventDefault();
      if (!_this.adapter_.isMenuOpen()) {
        _this.open_();
      }
    };
    _this.displayViaKeyboardHandler_ = function (evt) {
      return _this.handleDisplayViaKeyboard_(evt);
    };
    _this.selectionHandler_ = function (_ref) {
      var detail = _ref.detail;
      var index = detail.index;

      _this.close_();
      if (index !== _this.selectedIndex_) {
        _this.setSelectedIndex(index);
        _this.adapter_.notifyChange();
      }
    };
    _this.cancelHandler_ = function () {
      _this.close_();
    };
    return _this;
  }

  _createClass(MDCSelectFoundation, [{
    key: 'init',
    value: function init() {
      this.ctx_ = this.adapter_.create2dRenderingContext();
      this.adapter_.registerInteractionHandler('click', this.displayHandler_);
      this.adapter_.registerInteractionHandler('keydown', this.displayViaKeyboardHandler_);
      this.adapter_.registerInteractionHandler('keyup', this.displayViaKeyboardHandler_);
      this.adapter_.registerMenuInteractionHandler('MDCSimpleMenu:selected', this.selectionHandler_);
      this.adapter_.registerMenuInteractionHandler('MDCSimpleMenu:cancel', this.cancelHandler_);
      this.resize();
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      // Drop reference to context object to prevent potential leaks
      this.ctx_ = null;
      this.adapter_.deregisterInteractionHandler('click', this.displayHandler_);
      this.adapter_.deregisterInteractionHandler('keydown', this.displayViaKeyboardHandler_);
      this.adapter_.deregisterInteractionHandler('keyup', this.displayViaKeyboardHandler_);
      this.adapter_.deregisterMenuInteractionHandler('MDCSimpleMenu:selected', this.selectionHandler_);
      this.adapter_.deregisterMenuInteractionHandler('MDCSimpleMenu:cancel', this.cancelHandler_);
    }
  }, {
    key: 'getValue',
    value: function getValue() {
      return this.selectedIndex_ >= 0 ? this.adapter_.getValueForOptionAtIndex(this.selectedIndex_) : '';
    }
  }, {
    key: 'getSelectedIndex',
    value: function getSelectedIndex() {
      return this.selectedIndex_;
    }
  }, {
    key: 'setSelectedIndex',
    value: function setSelectedIndex(index) {
      var prevSelectedIndex = this.selectedIndex_;
      if (prevSelectedIndex >= 0) {
        this.adapter_.rmAttrForOptionAtIndex(this.selectedIndex_, 'aria-selected');
      }

      this.selectedIndex_ = index >= 0 && index < this.adapter_.getNumberOfOptions() ? index : -1;
      var selectedTextContent = '';
      if (this.selectedIndex_ >= 0) {
        selectedTextContent = this.adapter_.getTextForOptionAtIndex(this.selectedIndex_).trim();
        this.adapter_.setAttrForOptionAtIndex(this.selectedIndex_, 'aria-selected', 'true');
      }
      this.adapter_.setSelectedTextContent(selectedTextContent);
    }
  }, {
    key: 'isDisabled',
    value: function isDisabled() {
      return this.disabled_;
    }
  }, {
    key: 'setDisabled',
    value: function setDisabled(disabled) {
      var DISABLED = MDCSelectFoundation.cssClasses.DISABLED;

      this.disabled_ = disabled;
      if (this.disabled_) {
        this.adapter_.addClass(DISABLED);
        this.adapter_.setAttr('aria-disabled', 'true');
        this.adapter_.makeUntabbable();
      } else {
        this.adapter_.removeClass(DISABLED);
        this.adapter_.rmAttr('aria-disabled');
        this.adapter_.makeTabbable();
      }
    }
  }, {
    key: 'resize',
    value: function resize() {
      var font = this.adapter_.getComputedStyleValue('font');
      var letterSpacing = parseFloat(this.adapter_.getComputedStyleValue('letter-spacing'));
      if (font) {
        this.ctx_.font = font;
      } else {
        var primaryFontFamily = this.adapter_.getComputedStyleValue('font-family').split(',')[0];
        var fontSize = this.adapter_.getComputedStyleValue('font-size');
        this.ctx_.font = fontSize + ' ' + primaryFontFamily;
      }

      var maxTextLength = 0;
      for (var i = 0, l = this.adapter_.getNumberOfOptions(); i < l; i++) {
        var txt = this.adapter_.getTextForOptionAtIndex(i).trim();

        var _ctx_$measureText = this.ctx_.measureText(txt),
            width = _ctx_$measureText.width;

        var addedSpace = letterSpacing * txt.length;
        maxTextLength = Math.max(maxTextLength, Math.ceil(width + addedSpace));
      }
      this.adapter_.setStyle('width', maxTextLength + 'px');
    }
  }, {
    key: 'open_',
    value: function open_() {
      var OPEN = MDCSelectFoundation.cssClasses.OPEN;

      var focusIndex = this.selectedIndex_ < 0 ? 0 : this.selectedIndex_;

      var _computeMenuStylesFor = this.computeMenuStylesForOpenAtIndex_(focusIndex),
          left = _computeMenuStylesFor.left,
          top = _computeMenuStylesFor.top,
          transformOrigin = _computeMenuStylesFor.transformOrigin;

      this.adapter_.setMenuElStyle('left', left);
      this.adapter_.setMenuElStyle('top', top);
      this.adapter_.setMenuElStyle('transform-origin', transformOrigin);
      this.adapter_.addClass(OPEN);
      this.adapter_.openMenu(focusIndex);
    }
  }, {
    key: 'computeMenuStylesForOpenAtIndex_',
    value: function computeMenuStylesForOpenAtIndex_(index) {
      var innerHeight = this.adapter_.getWindowInnerHeight();

      var _adapter_$computeBoun = this.adapter_.computeBoundingRect(),
          left = _adapter_$computeBoun.left,
          top = _adapter_$computeBoun.top;

      this.adapter_.setMenuElAttr('aria-hidden', 'true');
      this.adapter_.setMenuElStyle('display', 'block');
      var menuHeight = this.adapter_.getMenuElOffsetHeight();
      var itemOffsetTop = this.adapter_.getOffsetTopForOptionAtIndex(index);
      this.adapter_.setMenuElStyle('display', '');
      this.adapter_.rmMenuElAttr('aria-hidden');

      var adjustedTop = top - itemOffsetTop;
      var adjustedHeight = menuHeight - itemOffsetTop;
      var overflowsTop = adjustedTop < 0;
      var overflowsBottom = adjustedTop + adjustedHeight > innerHeight;
      if (overflowsTop) {
        adjustedTop = 0;
      } else if (overflowsBottom) {
        adjustedTop = Math.max(0, adjustedTop - adjustedHeight);
      }

      return {
        left: left + 'px',
        top: adjustedTop + 'px',
        transformOrigin: 'center ' + itemOffsetTop + 'px'
      };
    }
  }, {
    key: 'close_',
    value: function close_() {
      var OPEN = MDCSelectFoundation.cssClasses.OPEN;

      this.adapter_.removeClass(OPEN);
      this.adapter_.focus();
    }
  }, {
    key: 'handleDisplayViaKeyboard_',
    value: function handleDisplayViaKeyboard_(evt) {
      // We use a hard-coded 2 instead of Event.AT_TARGET to avoid having to reference a browser
      // global.
      var EVENT_PHASE_AT_TARGET = 2;
      if (evt.eventPhase !== EVENT_PHASE_AT_TARGET) {
        return;
      }

      // Prevent pressing space down from scrolling the page
      var isSpaceDown = evt.type === 'keydown' && (evt.key === 'Space' || evt.keyCode === 32);
      if (isSpaceDown) {
        evt.preventDefault();
      }

      var isOpenerKey = OPENER_KEYS.some(function (_ref2) {
        var key = _ref2.key,
            keyCode = _ref2.keyCode,
            forType = _ref2.forType;

        return evt.type === forType && (evt.key === key || evt.keyCode === keyCode);
      });
      if (isOpenerKey) {
        this.displayHandler_(evt);
      }
    }
  }]);

  return MDCSelectFoundation;
}(__WEBPACK_IMPORTED_MODULE_0__material_base__["b" /* MDCFoundation */]);

/* harmony default export */ __webpack_exports__["a"] = (MDCSelectFoundation);

/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MDCSelect; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_menu__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__foundation__ = __webpack_require__(71);
/* unused harmony reexport MDCSelectFoundation */
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */








var MDCSelect = function (_MDCComponent) {
  _inherits(MDCSelect, _MDCComponent);

  function MDCSelect() {
    _classCallCheck(this, MDCSelect);

    return _possibleConstructorReturn(this, (MDCSelect.__proto__ || Object.getPrototypeOf(MDCSelect)).apply(this, arguments));
  }

  _createClass(MDCSelect, [{
    key: 'item',
    value: function item(index) {
      return this.options[index] || null;
    }
  }, {
    key: 'nameditem',
    value: function nameditem(key) {
      // NOTE: IE11 precludes us from using Array.prototype.find
      for (var i = 0, options = this.options, option; option = options[i]; i++) {
        if (option.id === key || option.getAttribute('name') === key) {
          return option;
        }
      }
      return null;
    }
  }, {
    key: 'initialize',
    value: function initialize() {
      var menuFactory = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function (el) {
        return new __WEBPACK_IMPORTED_MODULE_1__material_menu__["a" /* MDCSimpleMenu */](el);
      };

      this.menuEl_ = this.root_.querySelector('.mdc-select__menu');
      this.menu_ = menuFactory(this.menuEl_);
      this.selectedText_ = this.root_.querySelector('.mdc-select__selected-text');
    }
  }, {
    key: 'getDefaultFoundation',
    value: function getDefaultFoundation() {
      var _this2 = this;

      return new __WEBPACK_IMPORTED_MODULE_2__foundation__["a" /* default */]({
        addClass: function addClass(className) {
          return _this2.root_.classList.add(className);
        },
        removeClass: function removeClass(className) {
          return _this2.root_.classList.remove(className);
        },
        setAttr: function setAttr(attr, value) {
          return _this2.root_.setAttribute(attr, value);
        },
        rmAttr: function rmAttr(attr, value) {
          return _this2.root_.removeAttribute(attr, value);
        },
        computeBoundingRect: function computeBoundingRect() {
          return _this2.root_.getBoundingClientRect();
        },
        registerInteractionHandler: function registerInteractionHandler(type, handler) {
          return _this2.root_.addEventListener(type, handler);
        },
        deregisterInteractionHandler: function deregisterInteractionHandler(type, handler) {
          return _this2.root_.removeEventListener(type, handler);
        },
        focus: function focus() {
          return _this2.root_.focus();
        },
        makeTabbable: function makeTabbable() {
          _this2.root_.tabIndex = 0;
        },
        makeUntabbable: function makeUntabbable() {
          _this2.root_.tabIndex = -1;
        },
        getComputedStyleValue: function getComputedStyleValue(prop) {
          return window.getComputedStyle(_this2.root_).getPropertyValue(prop);
        },
        setStyle: function setStyle(propertyName, value) {
          return _this2.root_.style.setProperty(propertyName, value);
        },
        create2dRenderingContext: function create2dRenderingContext() {
          return document.createElement('canvas').getContext('2d');
        },
        setMenuElStyle: function setMenuElStyle(propertyName, value) {
          return _this2.menuEl_.style.setProperty(propertyName, value);
        },
        setMenuElAttr: function setMenuElAttr(attr, value) {
          return _this2.menuEl_.setAttribute(attr, value);
        },
        rmMenuElAttr: function rmMenuElAttr(attr) {
          return _this2.menuEl_.removeAttribute(attr);
        },
        getMenuElOffsetHeight: function getMenuElOffsetHeight() {
          return _this2.menuEl_.offsetHeight;
        },
        openMenu: function openMenu(focusIndex) {
          return _this2.menu_.show({ focusIndex: focusIndex });
        },
        isMenuOpen: function isMenuOpen() {
          return _this2.menu_.open;
        },
        setSelectedTextContent: function setSelectedTextContent(selectedTextContent) {
          _this2.selectedText_.textContent = selectedTextContent;
        },
        getNumberOfOptions: function getNumberOfOptions() {
          return _this2.options.length;
        },
        getTextForOptionAtIndex: function getTextForOptionAtIndex(index) {
          return _this2.options[index].textContent;
        },
        getValueForOptionAtIndex: function getValueForOptionAtIndex(index) {
          return _this2.options[index].id || _this2.options[index].textContent;
        },
        setAttrForOptionAtIndex: function setAttrForOptionAtIndex(index, attr, value) {
          return _this2.options[index].setAttribute(attr, value);
        },
        rmAttrForOptionAtIndex: function rmAttrForOptionAtIndex(index, attr) {
          return _this2.options[index].removeAttribute(attr);
        },
        getOffsetTopForOptionAtIndex: function getOffsetTopForOptionAtIndex(index) {
          return _this2.options[index].offsetTop;
        },
        registerMenuInteractionHandler: function registerMenuInteractionHandler(type, handler) {
          return _this2.menu_.listen(type, handler);
        },
        deregisterMenuInteractionHandler: function deregisterMenuInteractionHandler(type, handler) {
          return _this2.menu_.unlisten(type, handler);
        },
        notifyChange: function notifyChange() {
          return _this2.emit('MDCSelect:change', _this2);
        },
        getWindowInnerHeight: function getWindowInnerHeight() {
          return window.innerHeight;
        }
      });
    }
  }, {
    key: 'initialSyncWithDOM',
    value: function initialSyncWithDOM() {
      var selectedOption = this.selectedOptions[0];
      var idx = selectedOption ? this.options.indexOf(selectedOption) : -1;
      if (idx >= 0) {
        this.selectedIndex = idx;
      }

      if (this.root_.getAttribute('aria-disabled') === 'true') {
        this.disabled = true;
      }
    }
  }, {
    key: 'value',
    get: function get() {
      return this.foundation_.getValue();
    }
  }, {
    key: 'options',
    get: function get() {
      return this.menu_.items;
    }
  }, {
    key: 'selectedOptions',
    get: function get() {
      return this.root_.querySelectorAll('[aria-selected]');
    }
  }, {
    key: 'selectedIndex',
    get: function get() {
      return this.foundation_.getSelectedIndex();
    },
    set: function set(selectedIndex) {
      this.foundation_.setSelectedIndex(selectedIndex);
    }
  }, {
    key: 'disabled',
    get: function get() {
      return this.foundation_.isDisabled();
    },
    set: function set(disabled) {
      this.foundation_.setDisabled(disabled);
    }
  }], [{
    key: 'attachTo',
    value: function attachTo(root) {
      return new MDCSelect(root);
    }
  }]);

  return MDCSelect;
}(__WEBPACK_IMPORTED_MODULE_0__material_base__["a" /* MDCComponent */]);

/***/ }),
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cssClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return strings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return numbers; });
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var cssClasses = {
  ROOT: 'mdc-snackbar',
  TEXT: 'mdc-snackbar__text',
  ACTION_WRAPPER: 'mdc-snackbar__action-wrapper',
  ACTION_BUTTON: 'mdc-snackbar__action-button',
  ACTIVE: 'mdc-snackbar--active',
  MULTILINE: 'mdc-snackbar--multiline',
  ACTION_ON_BOTTOM: 'mdc-snackbar--action-on-bottom'
};

var strings = {
  TEXT_SELECTOR: '.mdc-snackbar__text',
  ACTION_WRAPPER_SELECTOR: '.mdc-snackbar__action-wrapper',
  ACTION_BUTTON_SELECTOR: '.mdc-snackbar__action-button'
};

var numbers = {
  MESSAGE_TIMEOUT: 2750
};

/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__(73);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */




var MDCSnackbarFoundation = function (_MDCFoundation) {
  _inherits(MDCSnackbarFoundation, _MDCFoundation);

  _createClass(MDCSnackbarFoundation, [{
    key: 'active',
    get: function get() {
      return this.active_;
    }
  }], [{
    key: 'cssClasses',
    get: function get() {
      return __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* cssClasses */];
    }
  }, {
    key: 'strings',
    get: function get() {
      return __WEBPACK_IMPORTED_MODULE_1__constants__["b" /* strings */];
    }
  }, {
    key: 'defaultAdapter',
    get: function get() {
      return {
        addClass: function addClass() /* className: string */{},
        removeClass: function removeClass() /* className: string */{},
        setAriaHidden: function setAriaHidden() {},
        unsetAriaHidden: function unsetAriaHidden() {},
        setMessageText: function setMessageText() /* message: string */{},
        setActionText: function setActionText() /* actionText: string */{},
        setActionAriaHidden: function setActionAriaHidden() {},
        unsetActionAriaHidden: function unsetActionAriaHidden() {},
        registerActionClickHandler: function registerActionClickHandler() /* handler: EventListener */{},
        deregisterActionClickHandler: function deregisterActionClickHandler() /* handler: EventListener */{},
        registerTransitionEndHandler: function registerTransitionEndHandler() /* handler: EventListener */{},
        deregisterTransitionEndHandler: function deregisterTransitionEndHandler() /* handler: EventListener */{}
      };
    }
  }]);

  function MDCSnackbarFoundation(adapter) {
    _classCallCheck(this, MDCSnackbarFoundation);

    var _this = _possibleConstructorReturn(this, (MDCSnackbarFoundation.__proto__ || Object.getPrototypeOf(MDCSnackbarFoundation)).call(this, Object.assign(MDCSnackbarFoundation.defaultAdapter, adapter)));

    _this.active_ = false;
    _this.queue_ = [];
    _this.actionClickHandler_ = function () {
      return _this.invokeAction_();
    };
    return _this;
  }

  _createClass(MDCSnackbarFoundation, [{
    key: 'init',
    value: function init() {
      this.adapter_.registerActionClickHandler(this.actionClickHandler_);
      this.adapter_.setAriaHidden();
      this.adapter_.setActionAriaHidden();
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      this.adapter_.deregisterActionClickHandler(this.actionClickHandler_);
    }
  }, {
    key: 'show',
    value: function show(data) {
      if (!data) {
        throw new Error('Please provide a data object with at least a message to display.');
      }
      if (!data.message) {
        throw new Error('Please provide a message to be displayed.');
      }
      if (data.actionHandler && !data.actionText) {
        throw new Error('Please provide action text with the handler.');
      }

      if (this.active) {
        this.queue_.push(data);
        return;
      }

      var ACTIVE = __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* cssClasses */].ACTIVE,
          MULTILINE = __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* cssClasses */].MULTILINE,
          ACTION_ON_BOTTOM = __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* cssClasses */].ACTION_ON_BOTTOM;
      var MESSAGE_TIMEOUT = __WEBPACK_IMPORTED_MODULE_1__constants__["c" /* numbers */].MESSAGE_TIMEOUT;


      this.adapter_.setMessageText(data.message);

      if (data.multiline) {
        this.adapter_.addClass(MULTILINE);
        if (data.actionOnBottom) {
          this.adapter_.addClass(ACTION_ON_BOTTOM);
        }
      }

      if (data.actionHandler) {
        this.adapter_.setActionText(data.actionText);
        this.actionHandler_ = data.actionHandler;
        this.setActionHidden_(false);
      } else {
        this.setActionHidden_(true);
        this.actionHandler_ = null;
        this.adapter_.setActionText(null);
      }

      this.active_ = true;
      this.adapter_.addClass(ACTIVE);
      this.adapter_.unsetAriaHidden();

      setTimeout(this.cleanup_.bind(this), data.timeout || MESSAGE_TIMEOUT);
    }
  }, {
    key: 'invokeAction_',
    value: function invokeAction_() {
      if (!this.actionHandler_) {
        return;
      }

      this.actionHandler_();
    }
  }, {
    key: 'cleanup_',
    value: function cleanup_() {
      var _this2 = this;

      var ACTIVE = __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* cssClasses */].ACTIVE,
          MULTILINE = __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* cssClasses */].MULTILINE,
          ACTION_ON_BOTTOM = __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* cssClasses */].ACTION_ON_BOTTOM;


      this.adapter_.removeClass(ACTIVE);

      var handler = function handler() {
        _this2.adapter_.deregisterTransitionEndHandler(handler);
        _this2.adapter_.removeClass(MULTILINE);
        _this2.adapter_.removeClass(ACTION_ON_BOTTOM);
        _this2.setActionHidden_(true);
        _this2.adapter_.setMessageText(null);
        _this2.adapter_.setActionText(null);
        _this2.adapter_.setAriaHidden();
        _this2.active_ = false;
        _this2.showNext_();
      };

      this.adapter_.registerTransitionEndHandler(handler);
    }
  }, {
    key: 'showNext_',
    value: function showNext_() {
      if (!this.queue_.length) {
        return;
      }

      this.show(this.queue_.shift());
    }
  }, {
    key: 'setActionHidden_',
    value: function setActionHidden_(isHidden) {
      if (isHidden) {
        this.adapter_.setActionAriaHidden();
      } else {
        this.adapter_.unsetActionAriaHidden();
      }
    }
  }]);

  return MDCSnackbarFoundation;
}(__WEBPACK_IMPORTED_MODULE_0__material_base__["b" /* MDCFoundation */]);

/* harmony default export */ __webpack_exports__["a"] = (MDCSnackbarFoundation);

/***/ }),
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MDCSnackbar; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__foundation__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_animation__ = __webpack_require__(13);
/* unused harmony reexport MDCSnackbarFoundation */
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */







var MDCSnackbar = function (_MDCComponent) {
  _inherits(MDCSnackbar, _MDCComponent);

  function MDCSnackbar() {
    _classCallCheck(this, MDCSnackbar);

    return _possibleConstructorReturn(this, (MDCSnackbar.__proto__ || Object.getPrototypeOf(MDCSnackbar)).apply(this, arguments));
  }

  _createClass(MDCSnackbar, [{
    key: 'show',
    value: function show(data) {
      this.foundation_.show(data);
    }
  }, {
    key: 'getDefaultFoundation',
    value: function getDefaultFoundation() {
      var _this2 = this;

      var _MDCSnackbarFoundatio = __WEBPACK_IMPORTED_MODULE_1__foundation__["a" /* default */].strings,
          TEXT_SELECTOR = _MDCSnackbarFoundatio.TEXT_SELECTOR,
          ACTION_BUTTON_SELECTOR = _MDCSnackbarFoundatio.ACTION_BUTTON_SELECTOR;

      var getText = function getText() {
        return _this2.root_.querySelector(TEXT_SELECTOR);
      };
      var getActionButton = function getActionButton() {
        return _this2.root_.querySelector(ACTION_BUTTON_SELECTOR);
      };

      /* eslint brace-style: "off" */
      return new __WEBPACK_IMPORTED_MODULE_1__foundation__["a" /* default */]({
        addClass: function addClass(className) {
          return _this2.root_.classList.add(className);
        },
        removeClass: function removeClass(className) {
          return _this2.root_.classList.remove(className);
        },
        setAriaHidden: function setAriaHidden() {
          return _this2.root_.setAttribute('aria-hidden', 'true');
        },
        unsetAriaHidden: function unsetAriaHidden() {
          return _this2.root_.removeAttribute('aria-hidden');
        },
        setActionAriaHidden: function setActionAriaHidden() {
          return getActionButton().setAttribute('aria-hidden', 'true');
        },
        unsetActionAriaHidden: function unsetActionAriaHidden() {
          return getActionButton().removeAttribute('aria-hidden');
        },
        setActionText: function setActionText(text) {
          getActionButton().textContent = text;
        },
        setMessageText: function setMessageText(text) {
          getText().textContent = text;
        },
        registerActionClickHandler: function registerActionClickHandler(handler) {
          return getActionButton().addEventListener('click', handler);
        },
        deregisterActionClickHandler: function deregisterActionClickHandler(handler) {
          return getActionButton().removeEventListener('click', handler);
        },
        registerTransitionEndHandler: function registerTransitionEndHandler(handler) {
          return _this2.root_.addEventListener(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__material_animation__["b" /* getCorrectEventName */])(window, 'transitionend'), handler);
        },
        deregisterTransitionEndHandler: function deregisterTransitionEndHandler(handler) {
          return _this2.root_.removeEventListener(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__material_animation__["b" /* getCorrectEventName */])(window, 'transitionend'), handler);
        }
      });
    }
  }], [{
    key: 'attachTo',
    value: function attachTo(root) {
      return new MDCSnackbar(root);
    }
  }]);

  return MDCSnackbar;
}(__WEBPACK_IMPORTED_MODULE_0__material_base__["a" /* MDCComponent */]);

/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return strings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cssClasses; });
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var strings = {
  ARIA_HIDDEN: 'aria-hidden',
  ROLE: 'role',
  INPUT_SELECTOR: '.mdc-textfield__input',
  LABEL_SELECTOR: '.mdc-textfield__label'
};

var cssClasses = {
  ROOT: 'mdc-textfield',
  UPGRADED: 'mdc-textfield--upgraded',
  DISABLED: 'mdc-textfield--disabled',
  FOCUSED: 'mdc-textfield--focused',
  INVALID: 'mdc-textfield--invalid',
  HELPTEXT_PERSISTENT: 'mdc-textfield-helptext--persistent',
  HELPTEXT_VALIDATION_MSG: 'mdc-textfield-helptext--validation-msg',
  LABEL_FLOAT_ABOVE: 'mdc-textfield__label--float-above'
};

/***/ }),
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__(76);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */




var MDCTextfieldFoundation = function (_MDCFoundation) {
  _inherits(MDCTextfieldFoundation, _MDCFoundation);

  _createClass(MDCTextfieldFoundation, null, [{
    key: 'cssClasses',
    get: function get() {
      return __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* cssClasses */];
    }
  }, {
    key: 'strings',
    get: function get() {
      return __WEBPACK_IMPORTED_MODULE_1__constants__["b" /* strings */];
    }
  }, {
    key: 'defaultAdapter',
    get: function get() {
      return {
        addClass: function addClass() /* className: string */{},
        removeClass: function removeClass() /* className: string */{},
        addClassToLabel: function addClassToLabel() /* className: string */{},
        removeClassFromLabel: function removeClassFromLabel() /* className: string */{},
        addClassToHelptext: function addClassToHelptext() /* className: string */{},
        removeClassFromHelptext: function removeClassFromHelptext() /* className: string */{},
        helptextHasClass: function helptextHasClass() {
          return (/* className: string */ /* boolean */false
          );
        },
        registerInputFocusHandler: function registerInputFocusHandler() /* handler: EventListener */{},
        deregisterInputFocusHandler: function deregisterInputFocusHandler() /* handler: EventListener */{},
        registerInputBlurHandler: function registerInputBlurHandler() /* handler: EventListener */{},
        deregisterInputBlurHandler: function deregisterInputBlurHandler() /* handler: EventListener */{},
        registerInputInputHandler: function registerInputInputHandler() /* handler: EventListener */{},
        deregisterInputInputHandler: function deregisterInputInputHandler() /* handler: EventListener */{},
        registerInputKeydownHandler: function registerInputKeydownHandler() /* handler: EventListener */{},
        deregisterInputKeydownHandler: function deregisterInputKeydownHandler() /* handler: EventListener */{},
        setHelptextAttr: function setHelptextAttr() /* name: string, value: string */{},
        removeHelptextAttr: function removeHelptextAttr() /* name: string */{},
        getNativeInput: function getNativeInput() {
          return (/* HTMLInputElement */{}
          );
        }
      };
    }
  }]);

  function MDCTextfieldFoundation() {
    var adapter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, MDCTextfieldFoundation);

    var _this = _possibleConstructorReturn(this, (MDCTextfieldFoundation.__proto__ || Object.getPrototypeOf(MDCTextfieldFoundation)).call(this, Object.assign(MDCTextfieldFoundation.defaultAdapter, adapter)));

    _this.receivedUserInput_ = false;
    _this.inputFocusHandler_ = function () {
      return _this.activateFocus_();
    };
    _this.inputBlurHandler_ = function () {
      return _this.deactivateFocus_();
    };
    _this.inputInputHandler_ = function () {
      return _this.autoCompleteFocus_();
    };
    _this.inputKeydownHandler_ = function () {
      return _this.receivedUserInput_ = true;
    };
    return _this;
  }

  _createClass(MDCTextfieldFoundation, [{
    key: 'init',
    value: function init() {
      this.adapter_.addClass(MDCTextfieldFoundation.cssClasses.UPGRADED);
      this.adapter_.registerInputFocusHandler(this.inputFocusHandler_);
      this.adapter_.registerInputBlurHandler(this.inputBlurHandler_);
      this.adapter_.registerInputInputHandler(this.inputInputHandler_);
      this.adapter_.registerInputKeydownHandler(this.inputKeydownHandler_);

      // Ensure label does not collide with any pre-filled value.
      if (this.getNativeInput_().value) {
        this.adapter_.addClassToLabel(MDCTextfieldFoundation.cssClasses.LABEL_FLOAT_ABOVE);
      }
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      this.adapter_.removeClass(MDCTextfieldFoundation.cssClasses.UPGRADED);
      this.adapter_.deregisterInputFocusHandler(this.inputFocusHandler_);
      this.adapter_.deregisterInputBlurHandler(this.inputBlurHandler_);
      this.adapter_.deregisterInputInputHandler(this.inputInputHandler_);
      this.adapter_.deregisterInputKeydownHandler(this.inputKeydownHandler_);
    }
  }, {
    key: 'activateFocus_',
    value: function activateFocus_() {
      var _MDCTextfieldFoundati = MDCTextfieldFoundation.cssClasses,
          FOCUSED = _MDCTextfieldFoundati.FOCUSED,
          LABEL_FLOAT_ABOVE = _MDCTextfieldFoundati.LABEL_FLOAT_ABOVE;

      this.adapter_.addClass(FOCUSED);
      this.adapter_.addClassToLabel(LABEL_FLOAT_ABOVE);
      this.showHelptext_();
    }
  }, {
    key: 'autoCompleteFocus_',
    value: function autoCompleteFocus_() {
      if (!this.receivedUserInput_) {
        this.activateFocus_();
      }
    }
  }, {
    key: 'showHelptext_',
    value: function showHelptext_() {
      var ARIA_HIDDEN = MDCTextfieldFoundation.strings.ARIA_HIDDEN;

      this.adapter_.removeHelptextAttr(ARIA_HIDDEN);
    }
  }, {
    key: 'deactivateFocus_',
    value: function deactivateFocus_() {
      var _MDCTextfieldFoundati2 = MDCTextfieldFoundation.cssClasses,
          FOCUSED = _MDCTextfieldFoundati2.FOCUSED,
          INVALID = _MDCTextfieldFoundati2.INVALID,
          LABEL_FLOAT_ABOVE = _MDCTextfieldFoundati2.LABEL_FLOAT_ABOVE;

      var input = this.getNativeInput_();
      var isValid = input.checkValidity();

      this.adapter_.removeClass(FOCUSED);
      if (!input.value && !this.isBadInput_()) {
        this.adapter_.removeClassFromLabel(LABEL_FLOAT_ABOVE);
        this.receivedUserInput_ = false;
      }
      if (isValid) {
        this.adapter_.removeClass(INVALID);
      } else {
        this.adapter_.addClass(INVALID);
      }
      this.updateHelptextOnDeactivation_(isValid);
    }
  }, {
    key: 'updateHelptextOnDeactivation_',
    value: function updateHelptextOnDeactivation_(isValid) {
      var _MDCTextfieldFoundati3 = MDCTextfieldFoundation.cssClasses,
          HELPTEXT_PERSISTENT = _MDCTextfieldFoundati3.HELPTEXT_PERSISTENT,
          HELPTEXT_VALIDATION_MSG = _MDCTextfieldFoundati3.HELPTEXT_VALIDATION_MSG;
      var ROLE = MDCTextfieldFoundation.strings.ROLE;

      var helptextIsPersistent = this.adapter_.helptextHasClass(HELPTEXT_PERSISTENT);
      var helptextIsValidationMsg = this.adapter_.helptextHasClass(HELPTEXT_VALIDATION_MSG);
      var validationMsgNeedsDisplay = helptextIsValidationMsg && !isValid;

      if (validationMsgNeedsDisplay) {
        this.adapter_.setHelptextAttr(ROLE, 'alert');
      } else {
        this.adapter_.removeHelptextAttr(ROLE);
      }

      if (helptextIsPersistent || validationMsgNeedsDisplay) {
        return;
      }
      this.hideHelptext_();
    }
  }, {
    key: 'hideHelptext_',
    value: function hideHelptext_() {
      var ARIA_HIDDEN = MDCTextfieldFoundation.strings.ARIA_HIDDEN;

      this.adapter_.setHelptextAttr(ARIA_HIDDEN, 'true');
    }
  }, {
    key: 'isBadInput_',
    value: function isBadInput_() {
      var input = this.getNativeInput_();
      return input.validity ? input.validity.badInput : input.badInput;
    }
  }, {
    key: 'isDisabled',
    value: function isDisabled() {
      return this.getNativeInput_().disabled;
    }
  }, {
    key: 'setDisabled',
    value: function setDisabled(disabled) {
      var DISABLED = MDCTextfieldFoundation.cssClasses.DISABLED;

      this.getNativeInput_().disabled = disabled;
      if (disabled) {
        this.adapter_.addClass(DISABLED);
      } else {
        this.adapter_.removeClass(DISABLED);
      }
    }
  }, {
    key: 'getNativeInput_',
    value: function getNativeInput_() {
      return this.adapter_.getNativeInput() || {
        checkValidity: function checkValidity() {
          return true;
        },
        value: '',
        disabled: false,
        badInput: false
      };
    }
  }]);

  return MDCTextfieldFoundation;
}(__WEBPACK_IMPORTED_MODULE_0__material_base__["b" /* MDCFoundation */]);

/* harmony default export */ __webpack_exports__["a"] = (MDCTextfieldFoundation);

/***/ }),
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MDCTextfield; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__foundation__ = __webpack_require__(77);
/* unused harmony reexport MDCTextfieldFoundation */
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */







var MDCTextfield = function (_MDCComponent) {
  _inherits(MDCTextfield, _MDCComponent);

  _createClass(MDCTextfield, null, [{
    key: 'attachTo',
    value: function attachTo(root) {
      return new MDCTextfield(root);
    }
  }]);

  function MDCTextfield() {
    var _ref;

    _classCallCheck(this, MDCTextfield);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = MDCTextfield.__proto__ || Object.getPrototypeOf(MDCTextfield)).call.apply(_ref, [this].concat(args)));

    var input = _this.input_;
    _this.helptextElement = input.hasAttribute('aria-controls') ? document.getElementById(input.getAttribute('aria-controls')) : null;
    return _this;
  }

  _createClass(MDCTextfield, [{
    key: 'initialSyncWithDom',
    value: function initialSyncWithDom() {
      this.disabled = this.input_.disabled;
    }
  }, {
    key: 'getDefaultFoundation',
    value: function getDefaultFoundation() {
      var _this2 = this;

      return new __WEBPACK_IMPORTED_MODULE_1__foundation__["a" /* default */](Object.assign({
        addClass: function addClass(className) {
          return _this2.root_.classList.add(className);
        },
        removeClass: function removeClass(className) {
          return _this2.root_.classList.remove(className);
        },
        addClassToLabel: function addClassToLabel(className) {
          var label = _this2.label_;
          if (label) {
            label.classList.add(className);
          }
        },
        removeClassFromLabel: function removeClassFromLabel(className) {
          var label = _this2.label_;
          if (label) {
            label.classList.remove(className);
          }
        }
      }, this.getInputAdapterMethods_(), this.getHelptextAdapterMethods_()));
    }
  }, {
    key: 'getInputAdapterMethods_',
    value: function getInputAdapterMethods_() {
      var _this3 = this;

      return {
        registerInputFocusHandler: function registerInputFocusHandler(handler) {
          return _this3.input_.addEventListener('focus', handler);
        },
        registerInputBlurHandler: function registerInputBlurHandler(handler) {
          return _this3.input_.addEventListener('blur', handler);
        },
        registerInputInputHandler: function registerInputInputHandler(handler) {
          return _this3.input_.addEventListener('input', handler);
        },
        registerInputKeydownHandler: function registerInputKeydownHandler(handler) {
          return _this3.input_.addEventListener('keydown', handler);
        },
        deregisterInputFocusHandler: function deregisterInputFocusHandler(handler) {
          return _this3.input_.removeEventListener('focus', handler);
        },
        deregisterInputBlurHandler: function deregisterInputBlurHandler(handler) {
          return _this3.input_.removeEventListener('blur', handler);
        },
        deregisterInputInputHandler: function deregisterInputInputHandler(handler) {
          return _this3.input_.removeEventListener('input', handler);
        },
        deregisterInputKeydownHandler: function deregisterInputKeydownHandler(handler) {
          return _this3.input_.removeEventListener('keydown', handler);
        },
        getNativeInput: function getNativeInput() {
          return _this3.input_;
        }
      };
    }
  }, {
    key: 'getHelptextAdapterMethods_',
    value: function getHelptextAdapterMethods_() {
      var _this4 = this;

      return {
        addClassToHelptext: function addClassToHelptext(className) {
          if (_this4.helptextElement) {
            _this4.helptextElement.classList.add(className);
          }
        },
        removeClassFromHelptext: function removeClassFromHelptext(className) {
          if (_this4.helptextElement) {
            _this4.helptextElement.classList.remove(className);
          }
        },
        helptextHasClass: function helptextHasClass(className) {
          if (!_this4.helptextElement) {
            return false;
          }
          return _this4.helptextElement.classList.contains(className);
        },
        setHelptextAttr: function setHelptextAttr(name, value) {
          if (_this4.helptextElement) {
            _this4.helptextElement.setAttribute(name, value);
          }
        },
        removeHelptextAttr: function removeHelptextAttr(name) {
          if (_this4.helptextElement) {
            _this4.helptextElement.removeAttribute(name);
          }
        }
      };
    }
  }, {
    key: 'disabled',
    get: function get() {
      return this.foundation_.isDisabled();
    },
    set: function set(disabled) {
      this.foundation_.setDisabled(disabled);
    }
  }, {
    key: 'input_',
    get: function get() {
      return this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_1__foundation__["a" /* default */].strings.INPUT_SELECTOR);
    }
  }, {
    key: 'label_',
    get: function get() {
      return this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_1__foundation__["a" /* default */].strings.LABEL_SELECTOR);
    }
  }]);

  return MDCTextfield;
}(__WEBPACK_IMPORTED_MODULE_0__material_base__["a" /* MDCComponent */]);

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg === 'undefined' ? 'undefined' : _typeof(arg);

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				classes.push(classNames.apply(null, arg));
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (typeof module !== 'undefined' && module.exports) {
		module.exports = classNames;
	} else if ("function" === 'function' && _typeof(__webpack_require__(21)) === 'object' && __webpack_require__(21)) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
			return classNames;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {
		window.classNames = classNames;
	}
})();

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

var tabbable = __webpack_require__(94);

var listeningFocusTrap = null;

function focusTrap(element, userOptions) {
  var tabbableNodes = [];
  var nodeFocusedBeforeActivation = null;
  var active = false;
  var paused = false;

  var container = typeof element === 'string' ? document.querySelector(element) : element;

  var config = userOptions || {};
  config.returnFocusOnDeactivate = userOptions && userOptions.returnFocusOnDeactivate !== undefined ? userOptions.returnFocusOnDeactivate : true;
  config.escapeDeactivates = userOptions && userOptions.escapeDeactivates !== undefined ? userOptions.escapeDeactivates : true;

  var trap = {
    activate: activate,
    deactivate: deactivate,
    pause: pause,
    unpause: unpause
  };

  return trap;

  function activate(activateOptions) {
    if (active) return;

    var defaultedActivateOptions = {
      onActivate: activateOptions && activateOptions.onActivate !== undefined ? activateOptions.onActivate : config.onActivate
    };

    active = true;
    paused = false;
    nodeFocusedBeforeActivation = document.activeElement;

    if (defaultedActivateOptions.onActivate) {
      defaultedActivateOptions.onActivate();
    }

    addListeners();
    return trap;
  }

  function deactivate(deactivateOptions) {
    if (!active) return;

    var defaultedDeactivateOptions = {
      returnFocus: deactivateOptions && deactivateOptions.returnFocus !== undefined ? deactivateOptions.returnFocus : config.returnFocusOnDeactivate,
      onDeactivate: deactivateOptions && deactivateOptions.onDeactivate !== undefined ? deactivateOptions.onDeactivate : config.onDeactivate
    };

    removeListeners();

    if (defaultedDeactivateOptions.onDeactivate) {
      defaultedDeactivateOptions.onDeactivate();
    }

    if (defaultedDeactivateOptions.returnFocus) {
      setTimeout(function () {
        tryFocus(nodeFocusedBeforeActivation);
      }, 0);
    }

    active = false;
    paused = false;
    return this;
  }

  function pause() {
    if (paused || !active) return;
    paused = true;
    removeListeners();
  }

  function unpause() {
    if (!paused || !active) return;
    paused = false;
    addListeners();
  }

  function addListeners() {
    if (!active) return;

    // There can be only one listening focus trap at a time
    if (listeningFocusTrap) {
      listeningFocusTrap.pause();
    }
    listeningFocusTrap = trap;

    updateTabbableNodes();
    tryFocus(firstFocusNode());
    document.addEventListener('focus', checkFocus, true);
    document.addEventListener('click', checkClick, true);
    document.addEventListener('mousedown', checkPointerDown, true);
    document.addEventListener('touchstart', checkPointerDown, true);
    document.addEventListener('keydown', checkKey, true);

    return trap;
  }

  function removeListeners() {
    if (!active || listeningFocusTrap !== trap) return;

    document.removeEventListener('focus', checkFocus, true);
    document.removeEventListener('click', checkClick, true);
    document.removeEventListener('mousedown', checkPointerDown, true);
    document.removeEventListener('touchstart', checkPointerDown, true);
    document.removeEventListener('keydown', checkKey, true);

    listeningFocusTrap = null;

    return trap;
  }

  function getNodeForOption(optionName) {
    var optionValue = config[optionName];
    var node = optionValue;
    if (!optionValue) {
      return null;
    }
    if (typeof optionValue === 'string') {
      node = document.querySelector(optionValue);
      if (!node) {
        throw new Error('`' + optionName + '` refers to no known node');
      }
    }
    if (typeof optionValue === 'function') {
      node = optionValue();
      if (!node) {
        throw new Error('`' + optionName + '` did not return a node');
      }
    }
    return node;
  }

  function firstFocusNode() {
    var node;
    if (getNodeForOption('initialFocus') !== null) {
      node = getNodeForOption('initialFocus');
    } else if (container.contains(document.activeElement)) {
      node = document.activeElement;
    } else {
      node = tabbableNodes[0] || getNodeForOption('fallbackFocus');
    }

    if (!node) {
      throw new Error('You can\'t have a focus-trap without at least one focusable element');
    }

    return node;
  }

  // This needs to be done on mousedown and touchstart instead of click
  // so that it precedes the focus event
  function checkPointerDown(e) {
    if (config.clickOutsideDeactivates && !container.contains(e.target)) {
      deactivate({ returnFocus: false });
    }
  }

  function checkClick(e) {
    if (config.clickOutsideDeactivates) return;
    if (container.contains(e.target)) return;
    e.preventDefault();
    e.stopImmediatePropagation();
  }

  function checkFocus(e) {
    if (container.contains(e.target)) return;
    e.preventDefault();
    e.stopImmediatePropagation();
    // Checking for a blur method here resolves a Firefox issue (#15)
    if (typeof e.target.blur === 'function') e.target.blur();
  }

  function checkKey(e) {
    if (e.key === 'Tab' || e.keyCode === 9) {
      handleTab(e);
    }

    if (config.escapeDeactivates !== false && isEscapeEvent(e)) {
      deactivate();
    }
  }

  function handleTab(e) {
    e.preventDefault();
    updateTabbableNodes();
    var currentFocusIndex = tabbableNodes.indexOf(e.target);
    var lastTabbableNode = tabbableNodes[tabbableNodes.length - 1];
    var firstTabbableNode = tabbableNodes[0];

    if (e.shiftKey) {
      if (e.target === firstTabbableNode || tabbableNodes.indexOf(e.target) === -1) {
        return tryFocus(lastTabbableNode);
      }
      return tryFocus(tabbableNodes[currentFocusIndex - 1]);
    }

    if (e.target === lastTabbableNode) return tryFocus(firstTabbableNode);

    tryFocus(tabbableNodes[currentFocusIndex + 1]);
  }

  function updateTabbableNodes() {
    tabbableNodes = tabbable(container);
  }
}

function isEscapeEvent(e) {
  return e.key === 'Escape' || e.key === 'Esc' || e.keyCode === 27;
}

function tryFocus(node) {
  if (!node || !node.focus) return;
  node.focus();
  if (node.tagName.toLowerCase() === 'input') {
    node.select();
  }
}

module.exports = focusTrap;

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*
Syntax highlighting with language autodetection.
https://highlightjs.org/
*/

(function (factory) {

  // Find the global object for export to both the browser and web workers.
  var globalObject = (typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object' && window || (typeof self === 'undefined' ? 'undefined' : _typeof(self)) === 'object' && self;

  // Setup highlight.js for different environments. First is Node.js or
  // CommonJS.
  if (true) {
    factory(exports);
  } else if (globalObject) {
    // Export hljs globally even when using AMD for cases when this script
    // is loaded with others that may still expect a global hljs.
    globalObject.hljs = factory({});

    // Finally register the global hljs with AMD.
    if (typeof define === 'function' && define.amd) {
      define([], function () {
        return globalObject.hljs;
      });
    }
  }
})(function (hljs) {
  // Convenience variables for build-in objects
  var ArrayProto = [],
      objectKeys = Object.keys;

  // Global internal variables used within the highlight.js library.
  var languages = {},
      aliases = {};

  // Regular expressions used throughout the highlight.js library.
  var noHighlightRe = /^(no-?highlight|plain|text)$/i,
      languagePrefixRe = /\blang(?:uage)?-([\w-]+)\b/i,
      fixMarkupRe = /((^(<[^>]+>|\t|)+|(?:\n)))/gm;

  var spanEndTag = '</span>';

  // Global options used when within external APIs. This is modified when
  // calling the `hljs.configure` function.
  var options = {
    classPrefix: 'hljs-',
    tabReplace: null,
    useBR: false,
    languages: undefined
  };

  /* Utility functions */

  function escape(value) {
    return value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  function tag(node) {
    return node.nodeName.toLowerCase();
  }

  function testRe(re, lexeme) {
    var match = re && re.exec(lexeme);
    return match && match.index === 0;
  }

  function isNotHighlighted(language) {
    return noHighlightRe.test(language);
  }

  function blockLanguage(block) {
    var i, match, length, _class;
    var classes = block.className + ' ';

    classes += block.parentNode ? block.parentNode.className : '';

    // language-* takes precedence over non-prefixed class names.
    match = languagePrefixRe.exec(classes);
    if (match) {
      return getLanguage(match[1]) ? match[1] : 'no-highlight';
    }

    classes = classes.split(/\s+/);

    for (i = 0, length = classes.length; i < length; i++) {
      _class = classes[i];

      if (isNotHighlighted(_class) || getLanguage(_class)) {
        return _class;
      }
    }
  }

  function inherit(parent) {
    // inherit(parent, override_obj, override_obj, ...)
    var key;
    var result = {};
    var objects = Array.prototype.slice.call(arguments, 1);

    for (key in parent) {
      result[key] = parent[key];
    }objects.forEach(function (obj) {
      for (key in obj) {
        result[key] = obj[key];
      }
    });
    return result;
  }

  /* Stream merging */

  function nodeStream(node) {
    var result = [];
    (function _nodeStream(node, offset) {
      for (var child = node.firstChild; child; child = child.nextSibling) {
        if (child.nodeType === 3) offset += child.nodeValue.length;else if (child.nodeType === 1) {
          result.push({
            event: 'start',
            offset: offset,
            node: child
          });
          offset = _nodeStream(child, offset);
          // Prevent void elements from having an end tag that would actually
          // double them in the output. There are more void elements in HTML
          // but we list only those realistically expected in code display.
          if (!tag(child).match(/br|hr|img|input/)) {
            result.push({
              event: 'stop',
              offset: offset,
              node: child
            });
          }
        }
      }
      return offset;
    })(node, 0);
    return result;
  }

  function mergeStreams(original, highlighted, value) {
    var processed = 0;
    var result = '';
    var nodeStack = [];

    function selectStream() {
      if (!original.length || !highlighted.length) {
        return original.length ? original : highlighted;
      }
      if (original[0].offset !== highlighted[0].offset) {
        return original[0].offset < highlighted[0].offset ? original : highlighted;
      }

      /*
      To avoid starting the stream just before it should stop the order is
      ensured that original always starts first and closes last:
       if (event1 == 'start' && event2 == 'start')
        return original;
      if (event1 == 'start' && event2 == 'stop')
        return highlighted;
      if (event1 == 'stop' && event2 == 'start')
        return original;
      if (event1 == 'stop' && event2 == 'stop')
        return highlighted;
       ... which is collapsed to:
      */
      return highlighted[0].event === 'start' ? original : highlighted;
    }

    function open(node) {
      function attr_str(a) {
        return ' ' + a.nodeName + '="' + escape(a.value).replace('"', '&quot;') + '"';
      }
      result += '<' + tag(node) + ArrayProto.map.call(node.attributes, attr_str).join('') + '>';
    }

    function close(node) {
      result += '</' + tag(node) + '>';
    }

    function render(event) {
      (event.event === 'start' ? open : close)(event.node);
    }

    while (original.length || highlighted.length) {
      var stream = selectStream();
      result += escape(value.substring(processed, stream[0].offset));
      processed = stream[0].offset;
      if (stream === original) {
        /*
        On any opening or closing tag of the original markup we first close
        the entire highlighted node stack, then render the original tag along
        with all the following original tags at the same offset and then
        reopen all the tags on the highlighted stack.
        */
        nodeStack.reverse().forEach(close);
        do {
          render(stream.splice(0, 1)[0]);
          stream = selectStream();
        } while (stream === original && stream.length && stream[0].offset === processed);
        nodeStack.reverse().forEach(open);
      } else {
        if (stream[0].event === 'start') {
          nodeStack.push(stream[0].node);
        } else {
          nodeStack.pop();
        }
        render(stream.splice(0, 1)[0]);
      }
    }
    return result + escape(value.substr(processed));
  }

  /* Initialization */

  function expand_mode(mode) {
    if (mode.variants && !mode.cached_variants) {
      mode.cached_variants = mode.variants.map(function (variant) {
        return inherit(mode, { variants: null }, variant);
      });
    }
    return mode.cached_variants || mode.endsWithParent && [inherit(mode)] || [mode];
  }

  function compileLanguage(language) {

    function reStr(re) {
      return re && re.source || re;
    }

    function langRe(value, global) {
      return new RegExp(reStr(value), 'm' + (language.case_insensitive ? 'i' : '') + (global ? 'g' : ''));
    }

    function compileMode(mode, parent) {
      if (mode.compiled) return;
      mode.compiled = true;

      mode.keywords = mode.keywords || mode.beginKeywords;
      if (mode.keywords) {
        var compiled_keywords = {};

        var flatten = function flatten(className, str) {
          if (language.case_insensitive) {
            str = str.toLowerCase();
          }
          str.split(' ').forEach(function (kw) {
            var pair = kw.split('|');
            compiled_keywords[pair[0]] = [className, pair[1] ? Number(pair[1]) : 1];
          });
        };

        if (typeof mode.keywords === 'string') {
          // string
          flatten('keyword', mode.keywords);
        } else {
          objectKeys(mode.keywords).forEach(function (className) {
            flatten(className, mode.keywords[className]);
          });
        }
        mode.keywords = compiled_keywords;
      }
      mode.lexemesRe = langRe(mode.lexemes || /\w+/, true);

      if (parent) {
        if (mode.beginKeywords) {
          mode.begin = '\\b(' + mode.beginKeywords.split(' ').join('|') + ')\\b';
        }
        if (!mode.begin) mode.begin = /\B|\b/;
        mode.beginRe = langRe(mode.begin);
        if (!mode.end && !mode.endsWithParent) mode.end = /\B|\b/;
        if (mode.end) mode.endRe = langRe(mode.end);
        mode.terminator_end = reStr(mode.end) || '';
        if (mode.endsWithParent && parent.terminator_end) mode.terminator_end += (mode.end ? '|' : '') + parent.terminator_end;
      }
      if (mode.illegal) mode.illegalRe = langRe(mode.illegal);
      if (mode.relevance == null) mode.relevance = 1;
      if (!mode.contains) {
        mode.contains = [];
      }
      mode.contains = Array.prototype.concat.apply([], mode.contains.map(function (c) {
        return expand_mode(c === 'self' ? mode : c);
      }));
      mode.contains.forEach(function (c) {
        compileMode(c, mode);
      });

      if (mode.starts) {
        compileMode(mode.starts, parent);
      }

      var terminators = mode.contains.map(function (c) {
        return c.beginKeywords ? '\\.?(' + c.begin + ')\\.?' : c.begin;
      }).concat([mode.terminator_end, mode.illegal]).map(reStr).filter(Boolean);
      mode.terminators = terminators.length ? langRe(terminators.join('|'), true) : { exec: function exec() /*s*/{
          return null;
        } };
    }

    compileMode(language);
  }

  /*
  Core highlighting function. Accepts a language name, or an alias, and a
  string with the code to highlight. Returns an object with the following
  properties:
   - relevance (int)
  - value (an HTML string with highlighting markup)
   */
  function highlight(name, value, ignore_illegals, continuation) {

    function subMode(lexeme, mode) {
      var i, length;

      for (i = 0, length = mode.contains.length; i < length; i++) {
        if (testRe(mode.contains[i].beginRe, lexeme)) {
          return mode.contains[i];
        }
      }
    }

    function endOfMode(mode, lexeme) {
      if (testRe(mode.endRe, lexeme)) {
        while (mode.endsParent && mode.parent) {
          mode = mode.parent;
        }
        return mode;
      }
      if (mode.endsWithParent) {
        return endOfMode(mode.parent, lexeme);
      }
    }

    function isIllegal(lexeme, mode) {
      return !ignore_illegals && testRe(mode.illegalRe, lexeme);
    }

    function keywordMatch(mode, match) {
      var match_str = language.case_insensitive ? match[0].toLowerCase() : match[0];
      return mode.keywords.hasOwnProperty(match_str) && mode.keywords[match_str];
    }

    function buildSpan(classname, insideSpan, leaveOpen, noPrefix) {
      var classPrefix = noPrefix ? '' : options.classPrefix,
          openSpan = '<span class="' + classPrefix,
          closeSpan = leaveOpen ? '' : spanEndTag;

      openSpan += classname + '">';

      return openSpan + insideSpan + closeSpan;
    }

    function processKeywords() {
      var keyword_match, last_index, match, result;

      if (!top.keywords) return escape(mode_buffer);

      result = '';
      last_index = 0;
      top.lexemesRe.lastIndex = 0;
      match = top.lexemesRe.exec(mode_buffer);

      while (match) {
        result += escape(mode_buffer.substring(last_index, match.index));
        keyword_match = keywordMatch(top, match);
        if (keyword_match) {
          relevance += keyword_match[1];
          result += buildSpan(keyword_match[0], escape(match[0]));
        } else {
          result += escape(match[0]);
        }
        last_index = top.lexemesRe.lastIndex;
        match = top.lexemesRe.exec(mode_buffer);
      }
      return result + escape(mode_buffer.substr(last_index));
    }

    function processSubLanguage() {
      var explicit = typeof top.subLanguage === 'string';
      if (explicit && !languages[top.subLanguage]) {
        return escape(mode_buffer);
      }

      var result = explicit ? highlight(top.subLanguage, mode_buffer, true, continuations[top.subLanguage]) : highlightAuto(mode_buffer, top.subLanguage.length ? top.subLanguage : undefined);

      // Counting embedded language score towards the host language may be disabled
      // with zeroing the containing mode relevance. Usecase in point is Markdown that
      // allows XML everywhere and makes every XML snippet to have a much larger Markdown
      // score.
      if (top.relevance > 0) {
        relevance += result.relevance;
      }
      if (explicit) {
        continuations[top.subLanguage] = result.top;
      }
      return buildSpan(result.language, result.value, false, true);
    }

    function processBuffer() {
      result += top.subLanguage != null ? processSubLanguage() : processKeywords();
      mode_buffer = '';
    }

    function startNewMode(mode) {
      result += mode.className ? buildSpan(mode.className, '', true) : '';
      top = Object.create(mode, { parent: { value: top } });
    }

    function processLexeme(buffer, lexeme) {

      mode_buffer += buffer;

      if (lexeme == null) {
        processBuffer();
        return 0;
      }

      var new_mode = subMode(lexeme, top);
      if (new_mode) {
        if (new_mode.skip) {
          mode_buffer += lexeme;
        } else {
          if (new_mode.excludeBegin) {
            mode_buffer += lexeme;
          }
          processBuffer();
          if (!new_mode.returnBegin && !new_mode.excludeBegin) {
            mode_buffer = lexeme;
          }
        }
        startNewMode(new_mode, lexeme);
        return new_mode.returnBegin ? 0 : lexeme.length;
      }

      var end_mode = endOfMode(top, lexeme);
      if (end_mode) {
        var origin = top;
        if (origin.skip) {
          mode_buffer += lexeme;
        } else {
          if (!(origin.returnEnd || origin.excludeEnd)) {
            mode_buffer += lexeme;
          }
          processBuffer();
          if (origin.excludeEnd) {
            mode_buffer = lexeme;
          }
        }
        do {
          if (top.className) {
            result += spanEndTag;
          }
          if (!top.skip) {
            relevance += top.relevance;
          }
          top = top.parent;
        } while (top !== end_mode.parent);
        if (end_mode.starts) {
          startNewMode(end_mode.starts, '');
        }
        return origin.returnEnd ? 0 : lexeme.length;
      }

      if (isIllegal(lexeme, top)) throw new Error('Illegal lexeme "' + lexeme + '" for mode "' + (top.className || '<unnamed>') + '"');

      /*
      Parser should not reach this point as all types of lexemes should be caught
      earlier, but if it does due to some bug make sure it advances at least one
      character forward to prevent infinite looping.
      */
      mode_buffer += lexeme;
      return lexeme.length || 1;
    }

    var language = getLanguage(name);
    if (!language) {
      throw new Error('Unknown language: "' + name + '"');
    }

    compileLanguage(language);
    var top = continuation || language;
    var continuations = {}; // keep continuations for sub-languages
    var result = '',
        current;
    for (current = top; current !== language; current = current.parent) {
      if (current.className) {
        result = buildSpan(current.className, '', true) + result;
      }
    }
    var mode_buffer = '';
    var relevance = 0;
    try {
      var match,
          count,
          index = 0;
      while (true) {
        top.terminators.lastIndex = index;
        match = top.terminators.exec(value);
        if (!match) break;
        count = processLexeme(value.substring(index, match.index), match[0]);
        index = match.index + count;
      }
      processLexeme(value.substr(index));
      for (current = top; current.parent; current = current.parent) {
        // close dangling modes
        if (current.className) {
          result += spanEndTag;
        }
      }
      return {
        relevance: relevance,
        value: result,
        language: name,
        top: top
      };
    } catch (e) {
      if (e.message && e.message.indexOf('Illegal') !== -1) {
        return {
          relevance: 0,
          value: escape(value)
        };
      } else {
        throw e;
      }
    }
  }

  /*
  Highlighting with language detection. Accepts a string with the code to
  highlight. Returns an object with the following properties:
   - language (detected language)
  - relevance (int)
  - value (an HTML string with highlighting markup)
  - second_best (object with the same structure for second-best heuristically
    detected language, may be absent)
   */
  function highlightAuto(text, languageSubset) {
    languageSubset = languageSubset || options.languages || objectKeys(languages);
    var result = {
      relevance: 0,
      value: escape(text)
    };
    var second_best = result;
    languageSubset.filter(getLanguage).forEach(function (name) {
      var current = highlight(name, text, false);
      current.language = name;
      if (current.relevance > second_best.relevance) {
        second_best = current;
      }
      if (current.relevance > result.relevance) {
        second_best = result;
        result = current;
      }
    });
    if (second_best.language) {
      result.second_best = second_best;
    }
    return result;
  }

  /*
  Post-processing of the highlighted markup:
   - replace TABs with something more useful
  - replace real line-breaks with '<br>' for non-pre containers
   */
  function fixMarkup(value) {
    return !(options.tabReplace || options.useBR) ? value : value.replace(fixMarkupRe, function (match, p1) {
      if (options.useBR && match === '\n') {
        return '<br>';
      } else if (options.tabReplace) {
        return p1.replace(/\t/g, options.tabReplace);
      }
      return '';
    });
  }

  function buildClassName(prevClassName, currentLang, resultLang) {
    var language = currentLang ? aliases[currentLang] : resultLang,
        result = [prevClassName.trim()];

    if (!prevClassName.match(/\bhljs\b/)) {
      result.push('hljs');
    }

    if (prevClassName.indexOf(language) === -1) {
      result.push(language);
    }

    return result.join(' ').trim();
  }

  /*
  Applies highlighting to a DOM node containing code. Accepts a DOM node and
  two optional parameters for fixMarkup.
  */
  function highlightBlock(block) {
    var node, originalStream, result, resultNode, text;
    var language = blockLanguage(block);

    if (isNotHighlighted(language)) return;

    if (options.useBR) {
      node = document.createElementNS('http://www.w3.org/1999/xhtml', 'div');
      node.innerHTML = block.innerHTML.replace(/\n/g, '').replace(/<br[ \/]*>/g, '\n');
    } else {
      node = block;
    }
    text = node.textContent;
    result = language ? highlight(language, text, true) : highlightAuto(text);

    originalStream = nodeStream(node);
    if (originalStream.length) {
      resultNode = document.createElementNS('http://www.w3.org/1999/xhtml', 'div');
      resultNode.innerHTML = result.value;
      result.value = mergeStreams(originalStream, nodeStream(resultNode), text);
    }
    result.value = fixMarkup(result.value);

    block.innerHTML = result.value;
    block.className = buildClassName(block.className, language, result.language);
    block.result = {
      language: result.language,
      re: result.relevance
    };
    if (result.second_best) {
      block.second_best = {
        language: result.second_best.language,
        re: result.second_best.relevance
      };
    }
  }

  /*
  Updates highlight.js global options with values passed in the form of an object.
  */
  function configure(user_options) {
    options = inherit(options, user_options);
  }

  /*
  Applies highlighting to all <pre><code>..</code></pre> blocks on a page.
  */
  function initHighlighting() {
    if (initHighlighting.called) return;
    initHighlighting.called = true;

    var blocks = document.querySelectorAll('pre code');
    ArrayProto.forEach.call(blocks, highlightBlock);
  }

  /*
  Attaches highlighting to the page load event.
  */
  function initHighlightingOnLoad() {
    addEventListener('DOMContentLoaded', initHighlighting, false);
    addEventListener('load', initHighlighting, false);
  }

  function registerLanguage(name, language) {
    var lang = languages[name] = language(hljs);
    if (lang.aliases) {
      lang.aliases.forEach(function (alias) {
        aliases[alias] = name;
      });
    }
  }

  function listLanguages() {
    return objectKeys(languages);
  }

  function getLanguage(name) {
    name = (name || '').toLowerCase();
    return languages[name] || languages[aliases[name]];
  }

  /* Interface definition */

  hljs.highlight = highlight;
  hljs.highlightAuto = highlightAuto;
  hljs.fixMarkup = fixMarkup;
  hljs.highlightBlock = highlightBlock;
  hljs.configure = configure;
  hljs.initHighlighting = initHighlighting;
  hljs.initHighlightingOnLoad = initHighlightingOnLoad;
  hljs.registerLanguage = registerLanguage;
  hljs.listLanguages = listLanguages;
  hljs.getLanguage = getLanguage;
  hljs.inherit = inherit;

  // Common regexps
  hljs.IDENT_RE = '[a-zA-Z]\\w*';
  hljs.UNDERSCORE_IDENT_RE = '[a-zA-Z_]\\w*';
  hljs.NUMBER_RE = '\\b\\d+(\\.\\d+)?';
  hljs.C_NUMBER_RE = '(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)'; // 0x..., 0..., decimal, float
  hljs.BINARY_NUMBER_RE = '\\b(0b[01]+)'; // 0b...
  hljs.RE_STARTERS_RE = '!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~';

  // Common modes
  hljs.BACKSLASH_ESCAPE = {
    begin: '\\\\[\\s\\S]', relevance: 0
  };
  hljs.APOS_STRING_MODE = {
    className: 'string',
    begin: '\'', end: '\'',
    illegal: '\\n',
    contains: [hljs.BACKSLASH_ESCAPE]
  };
  hljs.QUOTE_STRING_MODE = {
    className: 'string',
    begin: '"', end: '"',
    illegal: '\\n',
    contains: [hljs.BACKSLASH_ESCAPE]
  };
  hljs.PHRASAL_WORDS_MODE = {
    begin: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
  };
  hljs.COMMENT = function (begin, end, inherits) {
    var mode = hljs.inherit({
      className: 'comment',
      begin: begin, end: end,
      contains: []
    }, inherits || {});
    mode.contains.push(hljs.PHRASAL_WORDS_MODE);
    mode.contains.push({
      className: 'doctag',
      begin: '(?:TODO|FIXME|NOTE|BUG|XXX):',
      relevance: 0
    });
    return mode;
  };
  hljs.C_LINE_COMMENT_MODE = hljs.COMMENT('//', '$');
  hljs.C_BLOCK_COMMENT_MODE = hljs.COMMENT('/\\*', '\\*/');
  hljs.HASH_COMMENT_MODE = hljs.COMMENT('#', '$');
  hljs.NUMBER_MODE = {
    className: 'number',
    begin: hljs.NUMBER_RE,
    relevance: 0
  };
  hljs.C_NUMBER_MODE = {
    className: 'number',
    begin: hljs.C_NUMBER_RE,
    relevance: 0
  };
  hljs.BINARY_NUMBER_MODE = {
    className: 'number',
    begin: hljs.BINARY_NUMBER_RE,
    relevance: 0
  };
  hljs.CSS_NUMBER_MODE = {
    className: 'number',
    begin: hljs.NUMBER_RE + '(' + '%|em|ex|ch|rem' + '|vw|vh|vmin|vmax' + '|cm|mm|in|pt|pc|px' + '|deg|grad|rad|turn' + '|s|ms' + '|Hz|kHz' + '|dpi|dpcm|dppx' + ')?',
    relevance: 0
  };
  hljs.REGEXP_MODE = {
    className: 'regexp',
    begin: /\//, end: /\/[gimuy]*/,
    illegal: /\n/,
    contains: [hljs.BACKSLASH_ESCAPE, {
      begin: /\[/, end: /\]/,
      relevance: 0,
      contains: [hljs.BACKSLASH_ESCAPE]
    }]
  };
  hljs.TITLE_MODE = {
    className: 'title',
    begin: hljs.IDENT_RE,
    relevance: 0
  };
  hljs.UNDERSCORE_TITLE_MODE = {
    className: 'title',
    begin: hljs.UNDERSCORE_IDENT_RE,
    relevance: 0
  };
  hljs.METHOD_GUARD = {
    // excludes method names from keyword processing
    begin: '\\.\\s*' + hljs.UNDERSCORE_IDENT_RE,
    relevance: 0
  };

  return hljs;
});

/***/ }),
/* 82 */
/***/ (function(module, exports) {

module.exports = function (hljs) {
  var IDENT_RE = '[A-Za-z$_][0-9A-Za-z$_]*';
  var KEYWORDS = {
    keyword: 'in of if for while finally var new function do return void else break catch ' + 'instanceof with throw case default try this switch continue typeof delete ' + 'let yield const export super debugger as async await static ' +
    // ECMAScript 6 modules import
    'import from as',

    literal: 'true false null undefined NaN Infinity',
    built_in: 'eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent ' + 'encodeURI encodeURIComponent escape unescape Object Function Boolean Error ' + 'EvalError InternalError RangeError ReferenceError StopIteration SyntaxError ' + 'TypeError URIError Number Math Date String RegExp Array Float32Array ' + 'Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array ' + 'Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require ' + 'module console window document Symbol Set Map WeakSet WeakMap Proxy Reflect ' + 'Promise'
  };
  var EXPRESSIONS;
  var NUMBER = {
    className: 'number',
    variants: [{ begin: '\\b(0[bB][01]+)' }, { begin: '\\b(0[oO][0-7]+)' }, { begin: hljs.C_NUMBER_RE }],
    relevance: 0
  };
  var SUBST = {
    className: 'subst',
    begin: '\\$\\{', end: '\\}',
    keywords: KEYWORDS,
    contains: [] // defined later
  };
  var TEMPLATE_STRING = {
    className: 'string',
    begin: '`', end: '`',
    contains: [hljs.BACKSLASH_ESCAPE, SUBST]
  };
  SUBST.contains = [hljs.APOS_STRING_MODE, hljs.QUOTE_STRING_MODE, TEMPLATE_STRING, NUMBER, hljs.REGEXP_MODE];
  var PARAMS_CONTAINS = SUBST.contains.concat([hljs.C_BLOCK_COMMENT_MODE, hljs.C_LINE_COMMENT_MODE]);

  return {
    aliases: ['js', 'jsx'],
    keywords: KEYWORDS,
    contains: [{
      className: 'meta',
      relevance: 10,
      begin: /^\s*['"]use (strict|asm)['"]/
    }, {
      className: 'meta',
      begin: /^#!/, end: /$/
    }, hljs.APOS_STRING_MODE, hljs.QUOTE_STRING_MODE, TEMPLATE_STRING, hljs.C_LINE_COMMENT_MODE, hljs.C_BLOCK_COMMENT_MODE, NUMBER, { // object attr container
      begin: /[{,]\s*/, relevance: 0,
      contains: [{
        begin: IDENT_RE + '\\s*:', returnBegin: true,
        relevance: 0,
        contains: [{ className: 'attr', begin: IDENT_RE, relevance: 0 }]
      }]
    }, { // "value" container
      begin: '(' + hljs.RE_STARTERS_RE + '|\\b(case|return|throw)\\b)\\s*',
      keywords: 'return throw case',
      contains: [hljs.C_LINE_COMMENT_MODE, hljs.C_BLOCK_COMMENT_MODE, hljs.REGEXP_MODE, {
        className: 'function',
        begin: '(\\(.*?\\)|' + IDENT_RE + ')\\s*=>', returnBegin: true,
        end: '\\s*=>',
        contains: [{
          className: 'params',
          variants: [{
            begin: IDENT_RE
          }, {
            begin: /\(\s*\)/
          }, {
            begin: /\(/, end: /\)/,
            excludeBegin: true, excludeEnd: true,
            keywords: KEYWORDS,
            contains: PARAMS_CONTAINS
          }]
        }]
      }, { // E4X / JSX
        begin: /</, end: /(\/\w+|\w+\/)>/,
        subLanguage: 'xml',
        contains: [{ begin: /<\w+\s*\/>/, skip: true }, {
          begin: /<\w+/, end: /(\/\w+|\w+\/)>/, skip: true,
          contains: [{ begin: /<\w+\s*\/>/, skip: true }, 'self']
        }]
      }],
      relevance: 0
    }, {
      className: 'function',
      beginKeywords: 'function', end: /\{/, excludeEnd: true,
      contains: [hljs.inherit(hljs.TITLE_MODE, { begin: IDENT_RE }), {
        className: 'params',
        begin: /\(/, end: /\)/,
        excludeBegin: true,
        excludeEnd: true,
        contains: PARAMS_CONTAINS
      }],
      illegal: /\[|%/
    }, {
      begin: /\$[(.]/ // relevance booster for a pattern common to JS libs: `$(something)` and `$.something`
    }, hljs.METHOD_GUARD, { // ES6 class
      className: 'class',
      beginKeywords: 'class', end: /[{;=]/, excludeEnd: true,
      illegal: /[:"\[\]]/,
      contains: [{ beginKeywords: 'extends' }, hljs.UNDERSCORE_TITLE_MODE]
    }, {
      beginKeywords: 'constructor', end: /\{/, excludeEnd: true
    }],
    illegal: /#(?!!)/
  };
};

/***/ }),
/* 83 */
/***/ (function(module, exports) {

module.exports = function (hljs) {
  var LITERALS = { literal: 'true false null' };
  var TYPES = [hljs.QUOTE_STRING_MODE, hljs.C_NUMBER_MODE];
  var VALUE_CONTAINER = {
    end: ',', endsWithParent: true, excludeEnd: true,
    contains: TYPES,
    keywords: LITERALS
  };
  var OBJECT = {
    begin: '{', end: '}',
    contains: [{
      className: 'attr',
      begin: /"/, end: /"/,
      contains: [hljs.BACKSLASH_ESCAPE],
      illegal: '\\n'
    }, hljs.inherit(VALUE_CONTAINER, { begin: /:/ })],
    illegal: '\\S'
  };
  var ARRAY = {
    begin: '\\[', end: '\\]',
    contains: [hljs.inherit(VALUE_CONTAINER)], // inherit is a workaround for a bug that makes shared modes with endsWithParent compile only the ending of one of the parents
    illegal: '\\S'
  };
  TYPES.splice(TYPES.length, 0, OBJECT, ARRAY);
  return {
    contains: TYPES,
    keywords: LITERALS,
    illegal: '\\S'
  };
};

/***/ }),
/* 84 */
/***/ (function(module, exports) {

module.exports = function (hljs) {
  var XML_IDENT_RE = '[A-Za-z0-9\\._:-]+';
  var TAG_INTERNALS = {
    endsWithParent: true,
    illegal: /</,
    relevance: 0,
    contains: [{
      className: 'attr',
      begin: XML_IDENT_RE,
      relevance: 0
    }, {
      begin: /=\s*/,
      relevance: 0,
      contains: [{
        className: 'string',
        endsParent: true,
        variants: [{ begin: /"/, end: /"/ }, { begin: /'/, end: /'/ }, { begin: /[^\s"'=<>`]+/ }]
      }]
    }]
  };
  return {
    aliases: ['html', 'xhtml', 'rss', 'atom', 'xjb', 'xsd', 'xsl', 'plist'],
    case_insensitive: true,
    contains: [{
      className: 'meta',
      begin: '<!DOCTYPE', end: '>',
      relevance: 10,
      contains: [{ begin: '\\[', end: '\\]' }]
    }, hljs.COMMENT('<!--', '-->', {
      relevance: 10
    }), {
      begin: '<\\!\\[CDATA\\[', end: '\\]\\]>',
      relevance: 10
    }, {
      begin: /<\?(php)?/, end: /\?>/,
      subLanguage: 'php',
      contains: [{ begin: '/\\*', end: '\\*/', skip: true }]
    }, {
      className: 'tag',
      /*
      The lookahead pattern (?=...) ensures that 'begin' only matches
      '<style' as a single word, followed by a whitespace or an
      ending braket. The '$' is needed for the lexeme to be recognized
      by hljs.subMode() that tests lexemes outside the stream.
      */
      begin: '<style(?=\\s|>|$)', end: '>',
      keywords: { name: 'style' },
      contains: [TAG_INTERNALS],
      starts: {
        end: '</style>', returnEnd: true,
        subLanguage: ['css', 'xml']
      }
    }, {
      className: 'tag',
      // See the comment in the <style tag about the lookahead pattern
      begin: '<script(?=\\s|>|$)', end: '>',
      keywords: { name: 'script' },
      contains: [TAG_INTERNALS],
      starts: {
        end: '\<\/script\>', returnEnd: true,
        subLanguage: ['actionscript', 'javascript', 'handlebars', 'xml']
      }
    }, {
      className: 'meta',
      variants: [{ begin: /<\?xml/, end: /\?>/, relevance: 10 }, { begin: /<\?\w+/, end: /\?>/ }]
    }, {
      className: 'tag',
      begin: '</?', end: '/?>',
      contains: [{
        className: 'name', begin: /[^\/><\s]+/, relevance: 0
      }, TAG_INTERNALS]
    }]
  };
};

/***/ }),
/* 85 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__MaterialComponent__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Button__ = __webpack_require__(5);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};





var Card = function (_MaterialComponent) {
  _inherits(Card, _MaterialComponent);

  function Card() {
    _classCallCheck(this, Card);

    var _this = _possibleConstructorReturn(this, (Card.__proto__ || Object.getPrototypeOf(Card)).call(this));

    _this.componentName = "card";
    _this._mdcProps = ["theme-dark"];
    return _this;
  }

  return Card;
}(__WEBPACK_IMPORTED_MODULE_1__MaterialComponent__["a" /* default */]);

var CardSection = function (_MaterialComponent2) {
  _inherits(CardSection, _MaterialComponent2);

  function CardSection() {
    _classCallCheck(this, CardSection);

    var _this2 = _possibleConstructorReturn(this, (CardSection.__proto__ || Object.getPrototypeOf(CardSection)).call(this));

    _this2.componentName = "";
    return _this2;
  }

  _createClass(CardSection, [{
    key: "materialDom",
    value: function materialDom(props) {
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("section", props, props.children);
    }
  }]);

  return CardSection;
}(__WEBPACK_IMPORTED_MODULE_1__MaterialComponent__["a" /* default */]);

var CardPrimary = function (_CardSection) {
  _inherits(CardPrimary, _CardSection);

  function CardPrimary() {
    _classCallCheck(this, CardPrimary);

    var _this3 = _possibleConstructorReturn(this, (CardPrimary.__proto__ || Object.getPrototypeOf(CardPrimary)).call(this));

    _this3.componentName = "card__primary";
    return _this3;
  }

  return CardPrimary;
}(CardSection);

var CardSupportingText = function (_CardSection2) {
  _inherits(CardSupportingText, _CardSection2);

  function CardSupportingText() {
    _classCallCheck(this, CardSupportingText);

    var _this4 = _possibleConstructorReturn(this, (CardSupportingText.__proto__ || Object.getPrototypeOf(CardSupportingText)).call(this));

    _this4.componentName = "card__supporting-text";
    return _this4;
  }

  return CardSupportingText;
}(CardSection);

var CardActions = function (_CardSection3) {
  _inherits(CardActions, _CardSection3);

  function CardActions() {
    _classCallCheck(this, CardActions);

    var _this5 = _possibleConstructorReturn(this, (CardActions.__proto__ || Object.getPrototypeOf(CardActions)).call(this));

    _this5.componentName = "card__actions";
    _this5._mdcProps = ["vertical"];
    return _this5;
  }

  return CardActions;
}(CardSection);

var CardMedia = function (_CardSection4) {
  _inherits(CardMedia, _CardSection4);

  function CardMedia() {
    _classCallCheck(this, CardMedia);

    var _this6 = _possibleConstructorReturn(this, (CardMedia.__proto__ || Object.getPrototypeOf(CardMedia)).call(this));

    _this6.componentName = "card__media";
    return _this6;
  }

  return CardMedia;
}(CardSection);

var CardAction = function (_Button) {
  _inherits(CardAction, _Button);

  function CardAction() {
    _classCallCheck(this, CardAction);

    var _this7 = _possibleConstructorReturn(this, (CardAction.__proto__ || Object.getPrototypeOf(CardAction)).call(this));

    _this7.componentName = "card__action";
    return _this7;
  }

  _createClass(CardAction, [{
    key: "materialDom",
    value: function materialDom(props) {
      var _this8 = this;

      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("button", _extends({
        className: "mdc-button mdc-button--compact"
      }, props, {
        ref: function ref(control) {
          _this8.control = control;
        }
      }), props.children);
    }
  }]);

  return CardAction;
}(__WEBPACK_IMPORTED_MODULE_2__Button__["a" /* default */]);

var CardTitle = function (_MaterialComponent3) {
  _inherits(CardTitle, _MaterialComponent3);

  function CardTitle() {
    _classCallCheck(this, CardTitle);

    var _this9 = _possibleConstructorReturn(this, (CardTitle.__proto__ || Object.getPrototypeOf(CardTitle)).call(this));

    _this9.componentName = "card__title";
    _this9._mdcProps = ["large"];
    return _this9;
  }

  _createClass(CardTitle, [{
    key: "materialDom",
    value: function materialDom(props) {
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("h1", props, props.children);
    }
  }]);

  return CardTitle;
}(__WEBPACK_IMPORTED_MODULE_1__MaterialComponent__["a" /* default */]);

var CardSubtitle = function (_MaterialComponent4) {
  _inherits(CardSubtitle, _MaterialComponent4);

  function CardSubtitle() {
    _classCallCheck(this, CardSubtitle);

    var _this10 = _possibleConstructorReturn(this, (CardSubtitle.__proto__ || Object.getPrototypeOf(CardSubtitle)).call(this));

    _this10.componentName = "card__subtitle";
    return _this10;
  }

  _createClass(CardSubtitle, [{
    key: "materialDom",
    value: function materialDom(props) {
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("h2", props, props.children);
    }
  }]);

  return CardSubtitle;
}(__WEBPACK_IMPORTED_MODULE_1__MaterialComponent__["a" /* default */]);

Card.Primary = CardPrimary;
Card.SupportingText = CardSupportingText;
Card.Actions = CardActions;
Card.Action = CardAction;
Card.Media = CardMedia;
Card.Title = CardTitle;
Card.Subtitle = CardSubtitle;

/* harmony default export */ __webpack_exports__["a"] = (Card);

/***/ }),
/* 86 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__MaterialComponent__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_checkbox___ = __webpack_require__(48);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

function _objectWithoutProperties(obj, keys) {
  var target = {};for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
  }return target;
}





/**
 */

var Checkbox = function (_MaterialComponent) {
  _inherits(Checkbox, _MaterialComponent);

  function Checkbox() {
    _classCallCheck(this, Checkbox);

    var _this = _possibleConstructorReturn(this, (Checkbox.__proto__ || Object.getPrototypeOf(Checkbox)).call(this));

    _this.componentName = "checkbox";
    _this._mdcProps = ["disabled"];
    return _this;
  }

  _createClass(Checkbox, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.MDComponent = new __WEBPACK_IMPORTED_MODULE_2__material_checkbox___["a" /* MDCCheckbox */](this.control);
    }
  }, {
    key: "materialDom",
    value: function materialDom(allprops) {
      var _this2 = this;

      var className = allprops.className,
          props = _objectWithoutProperties(allprops, ["className"]);

      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("div", {
        className: "mdc-checkbox " + className,
        ref: function ref(control) {
          _this2.control = control;
        }
      }, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("input", _extends({
        type: "checkbox",
        className: "mdc-checkbox__native-control"
      }, props)), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("div", { className: "mdc-checkbox__background" }, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("svg", {
        version: "1.1",
        className: "mdc-checkbox__checkmark",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24"
      }, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("path", {
        className: "mdc-checkbox__checkmark__path",
        fill: "none",
        stroke: "white",
        d: "M1.73,12.91 8.1,19.28 22.79,4.59"
      })), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("div", { className: "mdc-checkbox__mixedmark" })));
    }
  }]);

  return Checkbox;
}(__WEBPACK_IMPORTED_MODULE_1__MaterialComponent__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (Checkbox);

/***/ }),
/* 87 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__MaterialComponent__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_dialog___ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Button__ = __webpack_require__(5);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};





/**
 */

var Dialog = function (_MaterialComponent) {
  _inherits(Dialog, _MaterialComponent);

  function Dialog() {
    _classCallCheck(this, Dialog);

    var _this = _possibleConstructorReturn(this, (Dialog.__proto__ || Object.getPrototypeOf(Dialog)).call(this));

    _this.componentName = "dialog";
    return _this;
  }

  _createClass(Dialog, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.MDComponent = new __WEBPACK_IMPORTED_MODULE_2__material_dialog___["a" /* MDCDialog */](this.control);
    }
  }, {
    key: "materialDom",
    value: function materialDom(props) {
      var _this2 = this;

      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("aside", _extends({
        style: "visibility:hidden",
        role: "alertdialog",
        ref: function ref(control) {
          _this2.control = control;
        }
      }, props), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("div", { className: "mdc-dialog__surface" }, props.children), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("div", { className: "mdc-dialog__backdrop" }));
    }
  }]);

  return Dialog;
}(__WEBPACK_IMPORTED_MODULE_1__MaterialComponent__["a" /* default */]);

var DialogHeader = function (_MaterialComponent2) {
  _inherits(DialogHeader, _MaterialComponent2);

  function DialogHeader() {
    _classCallCheck(this, DialogHeader);

    var _this3 = _possibleConstructorReturn(this, (DialogHeader.__proto__ || Object.getPrototypeOf(DialogHeader)).call(this));

    _this3.componentName = "dialog__header";
    return _this3;
  }

  _createClass(DialogHeader, [{
    key: "materialDom",
    value: function materialDom(props) {
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("header", props, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("h2", { className: "mdc-dialog__header__title" }, props.children));
    }
  }]);

  return DialogHeader;
}(__WEBPACK_IMPORTED_MODULE_1__MaterialComponent__["a" /* default */]);

/**
 * @prop scrollable = false
 */


var DialogBody = function (_MaterialComponent3) {
  _inherits(DialogBody, _MaterialComponent3);

  function DialogBody() {
    _classCallCheck(this, DialogBody);

    var _this4 = _possibleConstructorReturn(this, (DialogBody.__proto__ || Object.getPrototypeOf(DialogBody)).call(this));

    _this4.componentName = "dialog__body";
    _this4._mdcProps = ["scrollable"];
    return _this4;
  }

  _createClass(DialogBody, [{
    key: "materialDom",
    value: function materialDom(props) {
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("section", props, props.children);
    }
  }]);

  return DialogBody;
}(__WEBPACK_IMPORTED_MODULE_1__MaterialComponent__["a" /* default */]);

var DialogFooter = function (_MaterialComponent4) {
  _inherits(DialogFooter, _MaterialComponent4);

  function DialogFooter() {
    _classCallCheck(this, DialogFooter);

    var _this5 = _possibleConstructorReturn(this, (DialogFooter.__proto__ || Object.getPrototypeOf(DialogFooter)).call(this));

    _this5.componentName = "dialog__footer";
    return _this5;
  }

  _createClass(DialogFooter, [{
    key: "materialDom",
    value: function materialDom(props) {
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("footer", props, props.children);
    }
  }]);

  return DialogFooter;
}(__WEBPACK_IMPORTED_MODULE_1__MaterialComponent__["a" /* default */]);

/**
 * @prop cancel = false
 * @prop accept = false
 */


var DialogFooterButton = function (_Button) {
  _inherits(DialogFooterButton, _Button);

  function DialogFooterButton() {
    _classCallCheck(this, DialogFooterButton);

    var _this6 = _possibleConstructorReturn(this, (DialogFooterButton.__proto__ || Object.getPrototypeOf(DialogFooterButton)).call(this));

    _this6.componentName = "dialog__footer__button";
    _this6._mdcProps = ["cancel", "accept"];
    return _this6;
  }

  _createClass(DialogFooterButton, [{
    key: "materialDom",
    value: function materialDom(props) {
      var _this7 = this;

      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("button", _extends({}, props, {
        className: "mdc-button",
        ref: function ref(control) {
          _this7.control = control;
        }
      }), props.children);
    }
  }]);

  return DialogFooterButton;
}(__WEBPACK_IMPORTED_MODULE_3__Button__["a" /* default */]);

Dialog.Header = DialogHeader;
Dialog.Body = DialogBody;
Dialog.Footer = DialogFooter;
Dialog.FooterButton = DialogFooterButton;

/* harmony default export */ __webpack_exports__["a"] = (Dialog);

/***/ }),
/* 88 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__MaterialComponent__ = __webpack_require__(4);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};




/**
 * @prop mini = false
 * @prop plain = false
 */

var Elevation = function (_MaterialComponent) {
  _inherits(Elevation, _MaterialComponent);

  function Elevation() {
    _classCallCheck(this, Elevation);

    var _this = _possibleConstructorReturn(this, (Elevation.__proto__ || Object.getPrototypeOf(Elevation)).call(this));

    _this.componentName = "elevation";
    _this._mdcProps = [];
    for (var elevationIndex = 0; elevationIndex < 25; elevationIndex++) {
      _this._mdcProps.push("z" + elevationIndex);
    }
    return _this;
  }

  _createClass(Elevation, [{
    key: "materialDom",
    value: function materialDom(props) {
      var _this2 = this;

      var className = "";
      if (props.z) {
        className = "mdc-elevation--z" + props.z;
      }
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("p", _extends({
        className: className
      }, props, {
        ref: function ref(control) {
          return _this2.control = control;
        }
      }), props.children);
    }
  }]);

  return Elevation;
}(__WEBPACK_IMPORTED_MODULE_1__MaterialComponent__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (Elevation);

/***/ }),
/* 89 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__MaterialComponent__ = __webpack_require__(4);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};




/**
 * @prop mini = false
 * @prop plain = false
 */

var Fab = function (_MaterialComponent) {
  _inherits(Fab, _MaterialComponent);

  function Fab() {
    _classCallCheck(this, Fab);

    var _this = _possibleConstructorReturn(this, (Fab.__proto__ || Object.getPrototypeOf(Fab)).call(this));

    _this.componentName = "fab";
    _this._mdcProps = ["mini", "plain"];
    return _this;
  }

  _createClass(Fab, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      _get(Fab.prototype.__proto__ || Object.getPrototypeOf(Fab.prototype), "attachRipple", this).call(this);
    }
  }, {
    key: "materialDom",
    value: function materialDom(props) {
      var _this2 = this;

      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("button", _extends({}, props, { ref: function ref(control) {
          return _this2.control = control;
        } }), props.children);
    }
  }]);

  return Fab;
}(__WEBPACK_IMPORTED_MODULE_1__MaterialComponent__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (Fab);

/***/ }),
/* 90 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__MaterialComponent__ = __webpack_require__(4);
var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};




var LayoutGrid = function (_MaterialComponent) {
  _inherits(LayoutGrid, _MaterialComponent);

  function LayoutGrid() {
    _classCallCheck(this, LayoutGrid);

    var _this = _possibleConstructorReturn(this, (LayoutGrid.__proto__ || Object.getPrototypeOf(LayoutGrid)).call(this));

    _this.componentName = "layout-grid";
    return _this;
  }

  _createClass(LayoutGrid, [{
    key: "materialDom",
    value: function materialDom(props) {
      var _this2 = this;

      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("div", _extends({
        ref: function ref(control) {
          _this2.control = control;
        }
      }, props), props.children);
    }
  }]);

  return LayoutGrid;
}(__WEBPACK_IMPORTED_MODULE_1__MaterialComponent__["a" /* default */]);

/**
 * @prop cols = 0
 * @prop desktopCols = 0
 * @prop tabletCols = 0
 * @prop phoneCols = 0
 * @prop order = 0
 * @prop align = ''
 */


var LayoutGridCell = function (_MaterialComponent2) {
  _inherits(LayoutGridCell, _MaterialComponent2);

  function LayoutGridCell() {
    _classCallCheck(this, LayoutGridCell);

    var _this3 = _possibleConstructorReturn(this, (LayoutGridCell.__proto__ || Object.getPrototypeOf(LayoutGridCell)).call(this));

    _this3.componentName = "layout-grid__cell";
    _this3._propsDict = {
      cols: "cols",
      desktop: "desktopCols",
      tablet: "tabletCols",
      phone: "phoneCols",
      order: "order",
      align: "align"
    };
    return _this3;
  }

  _createClass(LayoutGridCell, [{
    key: "createClassName",
    value: function createClassName(props) {
      var baseClass = "mdc-layout-grid__cell--";
      var classes = [];

      if (props[this._propsDict.cols]) {
        classes.push(baseClass + "span-" + props[this._propsDict.cols]);
      }

      if (props[this._propsDict.desktop]) {
        classes.push(baseClass + "span-" + props[this._propsDict.desktop] + "-desktop");
      }

      if (props[this._propsDict.tablet]) {
        classes.push(baseClass + "span-" + props[this._propsDict.tablet] + "-tablet");
      }

      if (props[this._propsDict.phone]) {
        classes.push(baseClass + "span-" + props[this._propsDict.phone] + "-phone");
      }

      if (props[this._propsDict.order]) {
        classes.push(baseClass + "order-" + props[this._propsDict.order]);
      }

      if (props[this._propsDict.align]) {
        classes.push(baseClass + "align-" + props[this._propsDict.align]);
      }

      return classes.join(" ");
    }
  }, {
    key: "materialDom",
    value: function materialDom(props) {
      var _this4 = this;

      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("div", _extends({
        className: this.createClassName(props),
        ref: function ref(control) {
          _this4.control = control;
        }
      }, props), props.children);
    }
  }, {
    key: "render",
    value: function render() {
      var _this5 = this;

      var element = _get(LayoutGridCell.prototype.__proto__ || Object.getPrototypeOf(LayoutGridCell.prototype), "render", this).call(this);
      // remove the extra attributes used for customising this element - keep the DOM clean
      Object.keys(this._propsDict).forEach(function (key) {
        return delete element.attributes[_this5._propsDict[key]];
      });
      return element;
    }
  }]);

  return LayoutGridCell;
}(__WEBPACK_IMPORTED_MODULE_1__MaterialComponent__["a" /* default */]);

LayoutGrid.Cell = LayoutGridCell;

/* harmony default export */ __webpack_exports__["a"] = (LayoutGrid);

/***/ }),
/* 91 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__MaterialComponent__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_select___ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__List__ = __webpack_require__(6);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};






var Select = function (_MaterialComponent) {
  _inherits(Select, _MaterialComponent);

  function Select() {
    _classCallCheck(this, Select);

    var _this = _possibleConstructorReturn(this, (Select.__proto__ || Object.getPrototypeOf(Select)).call(this));

    _this.componentName = "select";
    _this._mdcProps = ["disabled"];
    return _this;
  }

  _createClass(Select, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      if (!this.props.basic) {
        this.MDComponent = new __WEBPACK_IMPORTED_MODULE_2__material_select___["a" /* MDCSelect */](this.control);
        this.MDComponent.listen("MDCSelect:change", function () {
          if (_this2.props.onChange) {
            _this2.props.onChange();
          }
        });
        this.updateSelection();
      }
    }
  }, {
    key: "updateSelection",
    value: function updateSelection(prevProps) {
      if (this.props.selectedIndex && this.MDComponent && (!prevProps || prevProps.selectedIndex !== this.props.selectedIndex)) {
        this.MDComponent.selectedIndex = this.props.selectedIndex;
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      this.updateSelection(prevProps);
    }
  }, {
    key: "materialDom",
    value: function materialDom(props) {
      var _this3 = this;

      if (props.basic) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("select", _extends({}, props, {
          ref: function ref(control) {
            _this3.control = control;
          }
        }), props.children);
      }

      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("div", _extends({
        role: "listbox"
      }, props, {
        ref: function ref(control) {
          _this3.control = control;
        }
      }), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("span", { className: "mdc-select__selected-text" }, props.hintText), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("div", { className: "mdc-simple-menu mdc-select__menu" }, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("ul", { className: "mdc-list mdc-simple-menu__items " }, props.children)));
    }
  }]);

  return Select;
}(__WEBPACK_IMPORTED_MODULE_1__MaterialComponent__["a" /* default */]);

Select.Item = __WEBPACK_IMPORTED_MODULE_3__List__["a" /* default */].Item;

/* harmony default export */ __webpack_exports__["a"] = (Select);

/***/ }),
/* 92 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__MaterialComponent__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_snackbar___ = __webpack_require__(75);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};




/**
 * @prop mini = false
 * @prop plain = false
 */

var Snackbar = function (_MaterialComponent) {
  _inherits(Snackbar, _MaterialComponent);

  function Snackbar() {
    _classCallCheck(this, Snackbar);

    var _this = _possibleConstructorReturn(this, (Snackbar.__proto__ || Object.getPrototypeOf(Snackbar)).call(this));

    _this.componentName = "snackbar";
    return _this;
  }

  _createClass(Snackbar, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.MDComponent = __WEBPACK_IMPORTED_MODULE_2__material_snackbar___["a" /* MDCSnackbar */].attachTo(this.control);
    }
  }, {
    key: "materialDom",
    value: function materialDom(props) {
      var _this2 = this;

      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("div", _extends({
        "aria-live": "assertive",
        "aria-atomic": "true",
        "aria-hidden": "true",
        ref: function ref(control) {
          return _this2.control = control;
        }
      }, props), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("div", { className: "mdc-snackbar__text" }), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("div", { className: "mdc-snackbar__action-wrapper" }, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("button", {
        type: "button",
        className: "mdc-button mdc-snackbar__action-button"
      })));
    }
  }]);

  return Snackbar;
}(__WEBPACK_IMPORTED_MODULE_1__MaterialComponent__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (Snackbar);

/***/ }),
/* 93 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__MaterialComponent__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_textfield___ = __webpack_require__(78);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

function _objectWithoutProperties(obj, keys) {
  var target = {};for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
  }return target;
}





/**
 * @prop fullwidth = false
 * @prop multiline = false
 * @prop type = 'text'
 */

var Textfield = function (_MaterialComponent) {
  _inherits(Textfield, _MaterialComponent);

  function Textfield() {
    _classCallCheck(this, Textfield);

    var _this = _possibleConstructorReturn(this, (Textfield.__proto__ || Object.getPrototypeOf(Textfield)).call(this));

    _this.componentName = "textfield";
    _this.state = {
      showFloatingLabel: false
    };
    _this._mdcProps = ["fullwidth", "multiline"];
    return _this;
  }

  _createClass(Textfield, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        showFloatingLabel: true
      });
      this.MDComponent = new __WEBPACK_IMPORTED_MODULE_2__material_textfield___["a" /* MDCTextfield */](this.control);
    }
  }, {
    key: "materialDom",
    value: function materialDom(allprops) {
      var _this2 = this;

      var className = allprops.className,
          props = _objectWithoutProperties(allprops, ["className"]);

      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("div", { className: className + "", ref: function ref(control) {
          return _this2.control = control;
        } }, props.multiline ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("textarea", _extends({ className: "mdc-textfield__input" }, props)) : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("input", _extends({ type: props.type || 'text', className: "mdc-textfield__input" }, props)), props.label && this.state.showFloatingLabel && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("label", { className: "mdc-textfield__label" }, props.label));
    }
  }]);

  return Textfield;
}(__WEBPACK_IMPORTED_MODULE_1__MaterialComponent__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (Textfield);

/***/ }),
/* 94 */
/***/ (function(module, exports) {

module.exports = function (el) {
  var basicTabbables = [];
  var orderedTabbables = [];

  // A node is "available" if
  // - it's computed style
  var isUnavailable = createIsUnavailable();

  var candidateSelectors = ['input', 'select', 'a[href]', 'textarea', 'button', '[tabindex]'];

  var candidates = el.querySelectorAll(candidateSelectors);

  var candidate, candidateIndex;
  for (var i = 0, l = candidates.length; i < l; i++) {
    candidate = candidates[i];
    candidateIndex = parseInt(candidate.getAttribute('tabindex'), 10) || candidate.tabIndex;

    if (candidateIndex < 0 || candidate.tagName === 'INPUT' && candidate.type === 'hidden' || candidate.disabled || isUnavailable(candidate)) {
      continue;
    }

    if (candidateIndex === 0) {
      basicTabbables.push(candidate);
    } else {
      orderedTabbables.push({
        tabIndex: candidateIndex,
        node: candidate
      });
    }
  }

  var tabbableNodes = orderedTabbables.sort(function (a, b) {
    return a.tabIndex - b.tabIndex;
  }).map(function (a) {
    return a.node;
  });

  Array.prototype.push.apply(tabbableNodes, basicTabbables);

  return tabbableNodes;
};

function createIsUnavailable() {
  // Node cache must be refreshed on every check, in case
  // the content of the element has changed
  var isOffCache = [];

  // "off" means `display: none;`, as opposed to "hidden",
  // which means `visibility: hidden;`. getComputedStyle
  // accurately reflects visiblity in context but not
  // "off" state, so we need to recursively check parents.

  function isOff(node, nodeComputedStyle) {
    if (node === document.documentElement) return false;

    // Find the cached node (Array.prototype.find not available in IE9)
    for (var i = 0, length = isOffCache.length; i < length; i++) {
      if (isOffCache[i][0] === node) return isOffCache[i][1];
    }

    nodeComputedStyle = nodeComputedStyle || window.getComputedStyle(node);

    var result = false;

    if (nodeComputedStyle.display === 'none') {
      result = true;
    } else if (node.parentNode) {
      result = isOff(node.parentNode);
    }

    isOffCache.push([node, result]);

    return result;
  }

  return function isUnavailable(node) {
    if (node === document.documentElement) return false;

    var computedStyle = window.getComputedStyle(node);

    if (isOff(node, computedStyle)) return true;

    return computedStyle.visibility === 'hidden';
  };
}

/***/ }),
/* 95 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 96 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 97 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 98 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 99 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 100 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 101 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 102 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 103 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 104 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 105 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 106 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 107 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 108 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 109 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 110 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 111 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 112 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 113 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 114 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 115 */
/***/ (function(module, exports) {

module.exports = "import {h, Component} from 'preact';\nimport Button from 'preact-material-components/Button';\nimport 'preact-material-components/Button/style.css';\n\nexport default class ButtonsPage extends Component {\n  render(){\n    return (<Button ripple={true} primary={true} raise={true}>\n      Flat button with ripple\n    </Button>);\n  }\n}\n"

/***/ }),
/* 116 */
/***/ (function(module, exports) {

module.exports = "import {h, Component} from 'preact';\nimport Card from 'preact-material-components/Card';\nimport 'preact-material-components/Card/style.css';\n\nexport default class CardsPage extends Component {\n  render(){\n    return (\n      <Card>\n        <Card.CardPrimary>\n          <Card.Title>Hi</Card.Title>\n          <Card.Subtitle>Let me subtitle</Card.Subtitle>\n        </Card.CardPrimary>\n        <Card.Media className='card-media'></Card.Media>\n        <Card.Actions>\n          <Card.Action>OKAy</Card.Action>\n        </Card.Actions>\n      </Card>\n    );\n  }\n}\n"

/***/ }),
/* 117 */
/***/ (function(module, exports) {

module.exports = "import {h, Component} from 'preact';\nimport Checkbox from 'preact-material-components/Checkbox';\nimport FormField from 'preact-material-components/FormField';\nimport 'preact-material-components/Checkbox/style.css';\n\nexport default class CheckboxPage extends Component {\n  render(){\n    return (\n      <FormField>\n        <Checkbox id=\"basic-checkbox-label\" ref={cb=>{this.cb=cb;}}/>\n        <label for=\"basic-checkbox\" id=\"basic-checkbox-label\">This is my checkbox</label>\n      </FormField>\n    );\n  }\n}\n"

/***/ }),
/* 118 */
/***/ (function(module, exports) {

module.exports = "import {h, Component} from 'preact';\nimport Dialog from 'preact-material-components/Dialog';\nimport Button from 'preact-material-components/Button';\nimport List from 'preact-material-components/List';\nimport 'preact-material-components/List/style.css';\nimport 'preact-material-components/Button/style.css';\nimport 'preact-material-components/Dialog/style.css';\n\nexport default class DialogPage extends Component {\n  render(){\n    return (\n      <div>\n        <Button primary={true} raised={true} onClick={()=>{\n          this.scrollingDlg.MDComponent.show();\n        }}>\n          Show Scrollable Dialog\n        </Button>\n        <Dialog ref={scrollingDlg=>{this.scrollingDlg=scrollingDlg;}}>\n          <Dialog.Header>Scroll for me ;)</Dialog.Header>\n          <Dialog.Body scrollable={true}>\n            <List>\n              <List.Item>Item 1</List.Item>\n              <List.Item>Item 2</List.Item>\n              <List.Item>Item 3</List.Item>\n              <List.Item>Item 4</List.Item>\n              <List.Item>Item 5</List.Item>\n            </List>\n          </Dialog.Body>\n          <Dialog.Footer>\n            <Dialog.FooterButton cancel={true}>Decline</Dialog.FooterButton>\n            <Dialog.FooterButton accept={true}>Accept</Dialog.FooterButton>\n          </Dialog.Footer>\n        </Dialog>\n      </div>\n    );\n  }\n}\n"

/***/ }),
/* 119 */
/***/ (function(module, exports) {

module.exports = "import {h, Component} from 'preact';\nimport Switch from 'preact-material-components/Switch';\nimport 'preact-material-components/Switch/style.css';\n\nexport default class SwitchPage extends Component {\n  render(){\n    return (\n      <div>\n        <Drawer.TemporaryDrawer ref={drawer=>{this.drawer = drawer;}} >\n          <Drawer.TemporaryDrawerHeader className=\"mdc-theme--primary-bg\">\n            Components\n          </Drawer.TemporaryDrawerHeader>\n          <Drawer.TemporaryDrawerContent>\n            <List>\n              <List.LinkItem>\n                  <List.ItemIcon>home</List.ItemIcon>\n                  Home\n              </List.LinkItem>\n            </List>\n          </Drawer.TemporaryDrawerContent>\n        </Drawer.TemporaryDrawer>\n      </div>\n    );\n  }\n}\n"

/***/ }),
/* 120 */
/***/ (function(module, exports) {

module.exports = "import {h, Component} from 'preact';\nimport Elevation from 'preact-material-components/Elevation';\nimport 'preact-material-components/Elevation/style.css';\n\nexport default class ElevationPage extends Component {\n  render(){\n    return (\n      <div>\n        <Elevation z0={true}>Z0</Elevation>\n        <Elevation z1={true}>Z1</Elevation>\n        <Elevation z2={true}>Z2</Elevation>\n      </div>\n    );\n  }\n}\n"

/***/ }),
/* 121 */
/***/ (function(module, exports) {

module.exports = "import {h, Component} from 'preact';\nimport Fab from 'preact-material-components/Fab';\nimport 'preact-material-components/Fab/style.css';\n\nexport default class FabPage extends Component {\n  render(){\n    return (\n      <div>\n        <Fab>\n          <Icon>favorite_border</Icon>\n        </Fab>\n        <Fab ripple={true}>\n          <Icon>favorite_border</Icon>\n        </Fab>\n        <Fab mini={true}>\n          <Icon>favorite_border</Icon>\n        </Fab>\n      </div>\n    );\n  }\n}\n"

/***/ }),
/* 122 */
/***/ (function(module, exports) {

module.exports = "import {h, Component} from 'preact';\nimport List from 'preact-material-components/List';\nimport FormField from 'preact-material-components/FormField';\nimport 'preact-material-components/FormField/style.css';\nimport 'preact-material-components/List/style.css';\n\nexport default class ListPage extends Component {\n  render(){\n    return (\n      <div>\n        <FormField>\n          <Radio id=\"r1\" name='opts'></Radio>\n          <label for=\"r1\">Radio 1</label>\n        </FormField>\n      </div>\n    );\n  }\n}\n"

/***/ }),
/* 123 */
/***/ (function(module, exports) {

module.exports = "import 'preact-material-components/Radio/style.css';\nimport 'preact-material-components/FormField/style.css';\nimport 'preact-material-components/Button/style.css';"

/***/ }),
/* 124 */
/***/ (function(module, exports) {

module.exports = "import {Button, Fab, Snackbar} from 'preact-material-component';"

/***/ }),
/* 125 */
/***/ (function(module, exports) {

module.exports = "import Radio from 'preact-material-components/Radio';\nimport FormField from 'preact-material-components/FormField';\nimport Button from 'preact-material-components/Button';"

/***/ }),
/* 126 */
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/icon?family=Material+Icons\"/>"

/***/ }),
/* 127 */
/***/ (function(module, exports) {

module.exports = "import {h, Component} from 'preact';\nimport Icon from 'preact-material-components/Icon';\n\nexport default class ListPage extends Component {\n  render(){\n    return (\n      <div>\n        <div><Icon>menu</Icon></div>\n        <div><Icon>favorite_border</Icon></div>\n      </div>\n    );\n  }\n}\n"

/***/ }),
/* 128 */
/***/ (function(module, exports) {

module.exports = "import {h, Component} from 'preact';\nimport LayoutGrid from 'preact-material-components/LayoutGrid';\nimport 'preact-material-components/LayoutGrid/style.css';\n\nexport default class LayoutGridPage extends Component {\n  render(){\n    return (\n      <div>\n        <LayoutGrid>\n          <LayoutGrid.Cell cols=\"6\">First cell</LayoutGrid.Cell>\n          <LayoutGrid.Cell cols=\"4\">Second cell</LayoutGrid.Cell>\n          <LayoutGrid.Cell cols=\"2\">Third cell</LayoutGrid.Cell>\n        </LayoutGrid>\n      </div>\n    );\n  }\n}\n"

/***/ }),
/* 129 */
/***/ (function(module, exports) {

module.exports = "import {h, Component} from 'preact';\nimport List from 'preact-material-components/List';\nimport 'preact-material-components/List/style.css';\n\nexport default class ListPage extends Component {\n  render(){\n    return (\n      <div>\n        <List>\n          <List.Item>Item1</List.Item>\n          <List.Item>Item2</List.Item>\n          <List.Item>Item3</List.Item>\n          <List.Item>Item4</List.Item>\n          <List.Item>Item5</List.Item>\n        </List>\n      </div>\n    );\n  }\n}\n"

/***/ }),
/* 130 */
/***/ (function(module, exports) {

module.exports = "import {h, Component} from 'preact';\nimport List from 'preact-material-components/List';\nimport FormField from 'preact-material-components/FormField';\nimport 'preact-material-components/FormField/style.css';\nimport 'preact-material-components/List/style.css';\n\nexport default class ListPage extends Component {\n  render(){\n    return (\n      <div>\n        <FormField>\n          <Radio id=\"r1\" name='opts'></Radio>\n          <label for=\"r1\">Radio 1</label>\n        </FormField>\n      </div>\n    );\n  }\n}\n"

/***/ }),
/* 131 */
/***/ (function(module, exports) {

module.exports = "import {h, Component} from 'preact';\nimport Select from 'preact-material-components/Select';\nimport 'preact-material-components/Menu/style.css';\nimport 'preact-material-components/Select/style.css';\n\nexport default class SelectPage extends Component {\n  render(){\n    return (\n      <div>\n        <Select hintText=\"Select an option\"\n\t\t\t\t\tref={presel=>{this.presel = presel;}}\n\t\t\t\t\tselectedIndex={this.state.chosenOption}\n\t\t\t\t\tonChange={()=>{\n\t\t\t\t\t\tthis.setState({\n\t\t\t\t\t\t\tchosenOption: this.presel.MDComponent.selectedIndex\n\t\t\t\t\t\t});\n\t\t\t\t}}>\n\t\t\t\t\t<Select.Item>opt1</Select.Item>\n\t\t\t\t\t<Select.Item>opt2</Select.Item>\n\t\t\t\t\t<Select.Item>opt3</Select.Item>\n\t\t\t\t\t<Select.Item>opt4</Select.Item>\n\t\t\t</Select>\n    );\n  }\n}\n"

/***/ }),
/* 132 */
/***/ (function(module, exports) {

module.exports = "import {h, Component} from 'preact';\nimport Snackbar from 'preact-material-components/Snackbar';\nimport Button from 'preact-material-components/Button';\nimport 'preact-material-components/Button/style.css';\nimport 'preact-material-components/Snackbar/style.css';\n\nexport default class SnackbarPage extends Component {\n  render(){\n    return (\n      <div>\n        <Button raised={true} primary={true} onClick={()=>{\n          this.bar.MDComponent.show({\n            message: \"Hello Snack!\"\n          });\n        }}>\n            Show snack\n        </Button>\n        <Snackbar ref={bar=>{this.bar=bar;}}/>\n      </div>\n    );\n  }\n}\n"

/***/ }),
/* 133 */
/***/ (function(module, exports) {

module.exports = "import {h, Component} from 'preact';\nimport Switch from 'preact-material-components/Switch';\nimport 'preact-material-components/Switch/style.css';\n\nexport default class SwitchPage extends Component {\n  render(){\n    return (\n      <div>\n        <Switch/>\n      </div>\n    );\n  }\n}\n"

/***/ }),
/* 134 */
/***/ (function(module, exports) {

module.exports = "import {h, Component} from 'preact';\nimport Textfield from 'preact-material-components/Textfield';\nimport 'preact-material-components/Textfield/style.css';\n\nexport default class TextfieldPage extends Component {\n  render(){\n    return (\n      <div>\n        <Textfield multiline={true} label=\"Textarea tag\"/>\n      </div>\n    );\n  }\n}\n"

/***/ }),
/* 135 */
/***/ (function(module, exports) {

module.exports = "import {h, Component} from 'preact';\nimport Switch from 'preact-material-components/Switch';\nimport 'preact-material-components/Switch/style.css';\n\nexport default class SwitchPage extends Component {\n  render(){\n    return (\n      <div>\n        <Toolbar className=\"toolbar\">\n            <Toolbar.Row>\n              <Toolbar.Section align-start={true}>\n                <Toolbar.Icon >menu</Toolbar.Icon>\n                <Toolbar.Title>\n                  My App\n                </Toolbar.Title>\n              </Toolbar.Section>\n              <Toolbar.Section align-end={true}>\n                <Icon>more_vert</Icon>\n              </Toolbar.Section>\n            </Toolbar.Row>\n          </Toolbar>\n      </div>\n    );\n  }\n}\n"

/***/ }),
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_preact_material_components_Tabs__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_preact_material_components_Icon__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ComponentTable_jsx__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__CodeBlock_jsx__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sample_txt__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sample_txt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__sample_txt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__TabsPage_css__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__TabsPage_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__TabsPage_css__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var TabsPage = function (_Component) {
	_inherits(TabsPage, _Component);

	function TabsPage() {
		_classCallCheck(this, TabsPage);

		var _this = _possibleConstructorReturn(this, (TabsPage.__proto__ || Object.getPrototypeOf(TabsPage)).call(this));

		_this.propsTable = [{
			component: 'Tabs',
			props: [{
				name: 'fixed',
				description: 'Makes the toolbar fixed'
			}]
		}];
		return _this;
	}

	_createClass(TabsPage, [{
		key: 'render',
		value: function render() {
			return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
				'div',
				{ className: 'page-tabs' },
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_3__ComponentTable_jsx__["a" /* default */], { data: this.propsTable }),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'div',
					{ className: 'mdc-typography--display1' },
					'Sample code '
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					__WEBPACK_IMPORTED_MODULE_4__CodeBlock_jsx__["a" /* default */],
					null,
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						'code',
						{ 'class': 'lang-js' },
						__WEBPACK_IMPORTED_MODULE_5__sample_txt___default.a
					)
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'div',
					{ className: 'mdc-typography--display1' },
					'Original documentation'
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'div',
					{ className: 'mdc-typography--body' },
					'This component encapsulates ',
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						'span',
						{ className: 'strong' },
						'mdc-tabs'
					),
					', you can refer to its documentation',
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						'a',
						{ href: 'https://github.com/material-components/material-components-web/tree/master/packages/mdc-tabs' },
						' here'
					),
					'.'
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'div',
					{ className: 'mdc-typography--display1' },
					'Demo '
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'div',
					{ className: 'mdc-typography--title' },
					'Default '
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Tabs__["a" /* default */],
					{ className: 'demo-tabs' },
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Tabs__["a" /* default */].Tab,
						null,
						'Tab1'
					),
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Tabs__["a" /* default */].Tab,
						null,
						'Tab2'
					),
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Tabs__["a" /* default */].Tab,
						null,
						'Tab3'
					)
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'div',
					{ className: 'mdc-typography--title' },
					'With indicator accent '
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Tabs__["a" /* default */],
					{ className: 'demo-tabs', 'indicator-accent': true },
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Tabs__["a" /* default */].Tab,
						null,
						'Tab1'
					),
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Tabs__["a" /* default */].Tab,
						null,
						'Tab2'
					),
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Tabs__["a" /* default */].Tab,
						null,
						'Tab3'
					)
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'div',
					{ className: 'mdc-typography--title' },
					'Icons tabs bar '
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Tabs__["a" /* default */],
					{ className: 'demo-tabs', 'icon-tab-bar': true },
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Tabs__["a" /* default */].Tab,
						null,
						__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
							__WEBPACK_IMPORTED_MODULE_2_preact_material_components_Icon__["a" /* default */],
							null,
							'favorite'
						)
					),
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Tabs__["a" /* default */].Tab,
						null,
						__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
							__WEBPACK_IMPORTED_MODULE_2_preact_material_components_Icon__["a" /* default */],
							null,
							'done'
						)
					),
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Tabs__["a" /* default */].Tab,
						null,
						__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
							__WEBPACK_IMPORTED_MODULE_2_preact_material_components_Icon__["a" /* default */],
							null,
							'info'
						)
					)
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'div',
					{ className: 'mdc-typography--title' },
					'Icons with test tabs bar '
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Tabs__["a" /* default */],
					{ className: 'demo-tabs', 'icons-with-text': true },
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Tabs__["a" /* default */].Tab,
						null,
						__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
							__WEBPACK_IMPORTED_MODULE_2_preact_material_components_Icon__["a" /* default */],
							null,
							'favorite'
						),
						'Hello'
					),
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Tabs__["a" /* default */].Tab,
						{ active: true },
						__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
							__WEBPACK_IMPORTED_MODULE_2_preact_material_components_Icon__["a" /* default */],
							null,
							'done'
						)
					),
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Tabs__["a" /* default */].Tab,
						null,
						__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
							__WEBPACK_IMPORTED_MODULE_2_preact_material_components_Icon__["a" /* default */],
							null,
							'info'
						)
					)
				)
			);
		}
	}]);

	return TabsPage;
}(__WEBPACK_IMPORTED_MODULE_0_preact__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (TabsPage);

/***/ }),
/* 164 */
/***/ (function(module, exports) {

module.exports = "import {h, Component} from 'preact';\nimport Switch from 'preact-material-components/Switch';\nimport 'preact-material-components/Switch/style.css';\n\nexport default class SwitchPage extends Component {\n  render(){\n    return (\n      <div>\n        <Toolbar className=\"toolbar\">\n            <Toolbar.Row>\n              <Toolbar.Section align-start={true}>\n                <Toolbar.Icon >menu</Toolbar.Icon>\n                <Toolbar.Title>\n                  My App\n                </Toolbar.Title>\n              </Toolbar.Section>\n              <Toolbar.Section align-end={true}>\n                <Icon>more_vert</Icon>\n              </Toolbar.Section>\n            </Toolbar.Row>\n          </Toolbar>\n      </div>\n    );\n  }\n}\n"

/***/ }),
/* 165 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 166 */,
/* 167 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return cssClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return strings; });
/**
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var cssClasses = {
  UPGRADED: 'mdc-tab-bar-upgraded'
};

var strings = {
  TAB_SELECTOR: '.mdc-tab',
  INDICATOR_SELECTOR: '.mdc-tab-bar__indicator'
};

/***/ }),
/* 168 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cssClasses; });
/**
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var cssClasses = {
  ACTIVE: 'mdc-tab--active'
};

/***/ }),
/* 169 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MDCTab; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base_component__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_ripple__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__foundation__ = __webpack_require__(173);
/* unused harmony reexport MDCTabFoundation */
var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */









var MDCTab = function (_MDCComponent) {
  _inherits(MDCTab, _MDCComponent);

  _createClass(MDCTab, [{
    key: 'computedWidth',
    get: function get() {
      return this.foundation_.getComputedWidth();
    }
  }, {
    key: 'computedLeft',
    get: function get() {
      return this.foundation_.getComputedLeft();
    }
  }, {
    key: 'isActive',
    get: function get() {
      return this.foundation_.isActive();
    },
    set: function set(isActive) {
      this.foundation_.setActive(isActive);
    }
  }, {
    key: 'preventDefaultOnClick',
    get: function get() {
      return this.foundation_.preventsDefaultOnClick();
    },
    set: function set(preventDefaultOnClick) {
      this.foundation_.setPreventDefaultOnClick(preventDefaultOnClick);
    }
  }], [{
    key: 'attachTo',
    value: function attachTo(root) {
      return new MDCTab(root);
    }
  }]);

  function MDCTab() {
    var _ref;

    _classCallCheck(this, MDCTab);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = MDCTab.__proto__ || Object.getPrototypeOf(MDCTab)).call.apply(_ref, [this].concat(args)));

    _this.ripple_ = __WEBPACK_IMPORTED_MODULE_1__material_ripple__["a" /* MDCRipple */].attachTo(_this.root_);
    return _this;
  }

  _createClass(MDCTab, [{
    key: 'destroy',
    value: function destroy() {
      this.ripple_.destroy();
      _get(MDCTab.prototype.__proto__ || Object.getPrototypeOf(MDCTab.prototype), 'destroy', this).call(this);
    }
  }, {
    key: 'getDefaultFoundation',
    value: function getDefaultFoundation() {
      var _this2 = this;

      return new __WEBPACK_IMPORTED_MODULE_3__foundation__["a" /* default */]({
        addClass: function addClass(className) {
          return _this2.root_.classList.add(className);
        },
        removeClass: function removeClass(className) {
          return _this2.root_.classList.remove(className);
        },
        registerInteractionHandler: function registerInteractionHandler(type, handler) {
          return _this2.root_.addEventListener(type, handler);
        },
        deregisterInteractionHandler: function deregisterInteractionHandler(type, handler) {
          return _this2.root_.removeEventListener(type, handler);
        },
        getOffsetWidth: function getOffsetWidth() {
          return _this2.root_.offsetWidth;
        },
        getOffsetLeft: function getOffsetLeft() {
          return _this2.root_.offsetLeft;
        },
        notifySelected: function notifySelected() {
          return _this2.emit('MDCTab:selected', { tab: _this2 }, true);
        }
      });
    }
  }, {
    key: 'initialSyncWithDOM',
    value: function initialSyncWithDOM() {
      this.isActive = this.root_.classList.contains(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */].ACTIVE);
    }
  }, {
    key: 'measureSelf',
    value: function measureSelf() {
      this.foundation_.measureSelf();
    }
  }]);

  return MDCTab;
}(__WEBPACK_IMPORTED_MODULE_0__material_base_component__["a" /* default */]);

/***/ }),
/* 170 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tab__ = __webpack_require__(169);
/* unused harmony reexport MDCTabFoundation */
/* unused harmony reexport MDCTab */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tab_bar__ = __webpack_require__(172);
/* unused harmony reexport MDCTabBarFoundation */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__tab_bar__["a"]; });
/**
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */




/***/ }),
/* 171 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base_foundation__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_animation__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(167);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */






var MDCTabBarFoundation = function (_MDCFoundation) {
  _inherits(MDCTabBarFoundation, _MDCFoundation);

  _createClass(MDCTabBarFoundation, null, [{
    key: 'cssClasses',
    get: function get() {
      return __WEBPACK_IMPORTED_MODULE_2__constants__["b" /* cssClasses */];
    }
  }, {
    key: 'strings',
    get: function get() {
      return __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* strings */];
    }
  }, {
    key: 'defaultAdapter',
    get: function get() {
      return {
        addClass: function addClass() /* className: string */{},
        removeClass: function removeClass() /* className: string */{},
        bindOnMDCTabSelectedEvent: function bindOnMDCTabSelectedEvent() {},
        unbindOnMDCTabSelectedEvent: function unbindOnMDCTabSelectedEvent() {},
        registerResizeHandler: function registerResizeHandler() /* handler: EventListener */{},
        deregisterResizeHandler: function deregisterResizeHandler() /* handler: EventListener */{},
        getOffsetWidth: function getOffsetWidth() {
          return (/* number */0
          );
        },
        setStyleForIndicator: function setStyleForIndicator() /* propertyName: string, value: string */{},
        getOffsetWidthForIndicator: function getOffsetWidthForIndicator() {
          return (/* number */0
          );
        },
        notifyChange: function notifyChange() /* evtData: {activeTabIndex: number} */{},
        getNumberOfTabs: function getNumberOfTabs() {
          return (/* number */0
          );
        },
        isTabActiveAtIndex: function isTabActiveAtIndex() {
          return (/* index: number */ /* boolean */false
          );
        },
        setTabActiveAtIndex: function setTabActiveAtIndex() /* index: number, isActive: true */{},
        isDefaultPreventedOnClickForTabAtIndex: function isDefaultPreventedOnClickForTabAtIndex() {
          return (/* index: number */ /* boolean */false
          );
        },
        setPreventDefaultOnClickForTabAtIndex: function setPreventDefaultOnClickForTabAtIndex() /* index: number, preventDefaultOnClick: boolean */{},
        measureTabAtIndex: function measureTabAtIndex() /* index: number */{},
        getComputedWidthForTabAtIndex: function getComputedWidthForTabAtIndex() {
          return (/* index: number */ /* number */0
          );
        },
        getComputedLeftForTabAtIndex: function getComputedLeftForTabAtIndex() {
          return (/* index: number */ /* number */0
          );
        }
      };
    }
  }]);

  function MDCTabBarFoundation(adapter) {
    _classCallCheck(this, MDCTabBarFoundation);

    var _this = _possibleConstructorReturn(this, (MDCTabBarFoundation.__proto__ || Object.getPrototypeOf(MDCTabBarFoundation)).call(this, Object.assign(MDCTabBarFoundation.defaultAdapter, adapter)));

    _this.isIndicatorShown_ = false;
    _this.computedWidth_ = 0;
    _this.computedLeft_ = 0;
    _this.activeTabIndex_ = 0;
    _this.layoutFrame_ = 0;
    _this.resizeHandler_ = function () {
      return _this.layout();
    };
    return _this;
  }

  _createClass(MDCTabBarFoundation, [{
    key: 'init',
    value: function init() {
      this.adapter_.addClass(__WEBPACK_IMPORTED_MODULE_2__constants__["b" /* cssClasses */].UPGRADED);
      this.adapter_.bindOnMDCTabSelectedEvent();
      this.adapter_.registerResizeHandler(this.resizeHandler_);
      var activeTabIndex = this.findActiveTabIndex_();
      if (activeTabIndex >= 0) {
        this.activeTabIndex_ = activeTabIndex;
      }
      this.layout();
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      this.adapter_.removeClass(__WEBPACK_IMPORTED_MODULE_2__constants__["b" /* cssClasses */].UPGRADED);
      this.adapter_.unbindOnMDCTabSelectedEvent();
      this.adapter_.deregisterResizeHandler(this.resizeHandler_);
    }
  }, {
    key: 'layoutInternal_',
    value: function layoutInternal_() {
      var _this2 = this;

      this.forEachTabIndex_(function (index) {
        return _this2.adapter_.measureTabAtIndex(index);
      });
      this.computedWidth_ = this.adapter_.getOffsetWidth();
      this.layoutIndicator_();
    }
  }, {
    key: 'layoutIndicator_',
    value: function layoutIndicator_() {
      var isIndicatorFirstRender = !this.isIndicatorShown_;

      // Ensure that indicator appears in the right position immediately for correct first render.
      if (isIndicatorFirstRender) {
        this.adapter_.setStyleForIndicator('transition', 'none');
      }

      var translateAmtForActiveTabLeft = this.adapter_.getComputedLeftForTabAtIndex(this.activeTabIndex_);
      var scaleAmtForActiveTabWidth = this.adapter_.getComputedWidthForTabAtIndex(this.activeTabIndex_) / this.adapter_.getOffsetWidth();

      var transformValue = 'translateX(' + translateAmtForActiveTabLeft + 'px) scale(' + scaleAmtForActiveTabWidth + ', 1)';
      this.adapter_.setStyleForIndicator(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__material_animation__["a" /* getCorrectPropertyName */])(window, 'transform'), transformValue);

      if (isIndicatorFirstRender) {
        // Force layout so that transform styles to take effect.
        this.adapter_.getOffsetWidthForIndicator();
        this.adapter_.setStyleForIndicator('transition', '');
        this.adapter_.setStyleForIndicator('visibility', 'visible');
        this.isIndicatorShown_ = true;
      }
    }
  }, {
    key: 'findActiveTabIndex_',
    value: function findActiveTabIndex_() {
      var _this3 = this;

      var activeTabIndex = -1;
      this.forEachTabIndex_(function (index) {
        if (_this3.adapter_.isTabActiveAtIndex(index)) {
          activeTabIndex = index;
          return true;
        }
      });
      return activeTabIndex;
    }
  }, {
    key: 'forEachTabIndex_',
    value: function forEachTabIndex_(iterator) {
      var numTabs = this.adapter_.getNumberOfTabs();
      for (var index = 0; index < numTabs; index++) {
        var shouldBreak = iterator(index);
        if (shouldBreak) {
          break;
        }
      }
    }
  }, {
    key: 'layout',
    value: function layout() {
      var _this4 = this;

      if (this.layoutFrame_) {
        cancelAnimationFrame(this.layoutFrame_);
      }

      this.layoutFrame_ = requestAnimationFrame(function () {
        _this4.layoutInternal_();
        _this4.layoutFrame_ = 0;
      });
    }
  }, {
    key: 'switchToTabAtIndex',
    value: function switchToTabAtIndex(index, shouldNotify) {
      var _this5 = this;

      if (index === this.activeTabIndex_) {
        return;
      }

      if (index < 0 || index >= this.adapter_.getNumberOfTabs()) {
        throw new Error('Out of bounds index specified for tab: ' + index);
      }

      var prevActiveTabIndex = this.activeTabIndex_;
      this.activeTabIndex_ = index;
      requestAnimationFrame(function () {
        if (prevActiveTabIndex >= 0) {
          _this5.adapter_.setTabActiveAtIndex(prevActiveTabIndex, false);
        }
        _this5.adapter_.setTabActiveAtIndex(_this5.activeTabIndex_, true);
        _this5.layoutIndicator_();
        if (shouldNotify) {
          _this5.adapter_.notifyChange({ activeTabIndex: _this5.activeTabIndex_ });
        }
      });
    }
  }, {
    key: 'getActiveTabIndex',
    value: function getActiveTabIndex() {
      return this.findActiveTabIndex_();
    }
  }]);

  return MDCTabBarFoundation;
}(__WEBPACK_IMPORTED_MODULE_0__material_base_foundation__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (MDCTabBarFoundation);

/***/ }),
/* 172 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MDCTabBar; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base_component__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tab__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__foundation__ = __webpack_require__(171);
/* unused harmony reexport MDCTabBarFoundation */
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */









var MDCTabBar = function (_MDCComponent) {
  _inherits(MDCTabBar, _MDCComponent);

  function MDCTabBar() {
    _classCallCheck(this, MDCTabBar);

    return _possibleConstructorReturn(this, (MDCTabBar.__proto__ || Object.getPrototypeOf(MDCTabBar)).apply(this, arguments));
  }

  _createClass(MDCTabBar, [{
    key: 'initialize',
    value: function initialize() {
      var _this2 = this;

      var tabFactory = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function (el) {
        return new __WEBPACK_IMPORTED_MODULE_1__tab__["a" /* MDCTab */](el);
      };

      this.indicator_ = this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* strings */].INDICATOR_SELECTOR);
      this.tabs_ = this.gatherTabs_(tabFactory);
      this.tabSelectedHandler_ = function (_ref) {
        var detail = _ref.detail;
        var tab = detail.tab;

        _this2.setActiveTab_(tab, true);
      };
    }
  }, {
    key: 'getDefaultFoundation',
    value: function getDefaultFoundation() {
      var _this3 = this;

      return new __WEBPACK_IMPORTED_MODULE_3__foundation__["a" /* default */]({
        addClass: function addClass(className) {
          return _this3.root_.classList.add(className);
        },
        removeClass: function removeClass(className) {
          return _this3.root_.classList.remove(className);
        },
        bindOnMDCTabSelectedEvent: function bindOnMDCTabSelectedEvent() {
          return _this3.listen('MDCTab:selected', _this3.tabSelectedHandler_);
        },
        unbindOnMDCTabSelectedEvent: function unbindOnMDCTabSelectedEvent() {
          return _this3.unlisten('MDCTab:selected', _this3.tabSelectedHandler_);
        },
        registerResizeHandler: function registerResizeHandler(handler) {
          return window.addEventListener('resize', handler);
        },
        deregisterResizeHandler: function deregisterResizeHandler(handler) {
          return window.removeEventListener('resize', handler);
        },
        getOffsetWidth: function getOffsetWidth() {
          return _this3.root_.offsetWidth;
        },
        setStyleForIndicator: function setStyleForIndicator(propertyName, value) {
          return _this3.indicator_.style.setProperty(propertyName, value);
        },
        getOffsetWidthForIndicator: function getOffsetWidthForIndicator() {
          return _this3.indicator_.offsetWidth;
        },
        notifyChange: function notifyChange(evtData) {
          return _this3.emit('MDCTabBar:change', evtData);
        },
        getNumberOfTabs: function getNumberOfTabs() {
          return _this3.tabs.length;
        },
        isTabActiveAtIndex: function isTabActiveAtIndex(index) {
          return _this3.tabs[index].isActive;
        },
        setTabActiveAtIndex: function setTabActiveAtIndex(index, isActive) {
          _this3.tabs[index].isActive = isActive;
        },
        isDefaultPreventedOnClickForTabAtIndex: function isDefaultPreventedOnClickForTabAtIndex(index) {
          return _this3.tabs[index].preventDefaultOnClick;
        },
        setPreventDefaultOnClickForTabAtIndex: function setPreventDefaultOnClickForTabAtIndex(index, preventDefaultOnClick) {
          _this3.tabs[index].preventDefaultOnClick = preventDefaultOnClick;
        },
        measureTabAtIndex: function measureTabAtIndex(index) {
          return _this3.tabs[index].measureSelf();
        },
        getComputedWidthForTabAtIndex: function getComputedWidthForTabAtIndex(index) {
          return _this3.tabs[index].computedWidth;
        },
        getComputedLeftForTabAtIndex: function getComputedLeftForTabAtIndex(index) {
          return _this3.tabs[index].computedLeft;
        }
      });
    }
  }, {
    key: 'gatherTabs_',
    value: function gatherTabs_(tabFactory) {
      var tabElements = [].slice.call(this.root_.querySelectorAll(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* strings */].TAB_SELECTOR));
      return tabElements.map(function (el) {
        return tabFactory(el);
      });
    }
  }, {
    key: 'setActiveTabIndex_',
    value: function setActiveTabIndex_(activeTabIndex, notifyChange) {
      this.foundation_.switchToTabAtIndex(activeTabIndex, notifyChange);
    }
  }, {
    key: 'layout',
    value: function layout() {
      this.foundation_.layout();
    }
  }, {
    key: 'setActiveTab_',
    value: function setActiveTab_(activeTab, notifyChange) {
      var indexOfTab = this.tabs.indexOf(activeTab);
      if (indexOfTab < 0) {
        throw new Error('Invalid tab component given as activeTab: Tab not found within this component\'s tab list');
      }
      this.setActiveTabIndex_(indexOfTab, notifyChange);
    }
  }, {
    key: 'tabs',
    get: function get() {
      return this.tabs_;
    }
  }, {
    key: 'activeTab',
    get: function get() {
      var activeIndex = this.foundation_.getActiveTabIndex();
      return this.tabs[activeIndex];
    },
    set: function set(tab) {
      this.setActiveTab_(tab, false);
    }
  }, {
    key: 'activeTabIndex',
    get: function get() {
      return this.foundation_.getActiveTabIndex();
    },
    set: function set(index) {
      this.setActiveTabIndex_(index, false);
    }
  }], [{
    key: 'attachTo',
    value: function attachTo(root) {
      return new MDCTabBar(root);
    }
  }]);

  return MDCTabBar;
}(__WEBPACK_IMPORTED_MODULE_0__material_base_component__["a" /* default */]);

/***/ }),
/* 173 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_base_foundation__ = __webpack_require__(14);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */




var MDCTabFoundation = function (_MDCFoundation) {
  _inherits(MDCTabFoundation, _MDCFoundation);

  _createClass(MDCTabFoundation, null, [{
    key: 'cssClasses',
    get: function get() {
      return __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* cssClasses */];
    }
  }, {
    key: 'defaultAdapter',
    get: function get() {
      return {
        addClass: function addClass() /* className: string */{},
        removeClass: function removeClass() /* className: string */{},
        registerInteractionHandler: function registerInteractionHandler() /* type: string, handler: EventListener */{},
        deregisterInteractionHandler: function deregisterInteractionHandler() /* type: string, handler: EventListener */{},
        getOffsetWidth: function getOffsetWidth() {
          return (/* number */0
          );
        },
        getOffsetLeft: function getOffsetLeft() {
          return (/* number */0
          );
        },
        notifySelected: function notifySelected() {}
      };
    }
  }]);

  function MDCTabFoundation() {
    var adapter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, MDCTabFoundation);

    var _this = _possibleConstructorReturn(this, (MDCTabFoundation.__proto__ || Object.getPrototypeOf(MDCTabFoundation)).call(this, Object.assign(MDCTabFoundation.defaultAdapter, adapter)));

    _this.computedWidth_ = 0;
    _this.computedLeft_ = 0;
    _this.isActive_ = false;
    _this.preventDefaultOnClick_ = false;

    _this.clickHandler_ = function (evt) {
      if (_this.preventDefaultOnClick_) {
        evt.preventDefault();
      }
      _this.adapter_.notifySelected();
    };

    _this.keydownHandler_ = function (evt) {
      if (evt.key && evt.key === 'Enter' || evt.keyCode === 13) {
        _this.adapter_.notifySelected();
      }
    };
    return _this;
  }

  _createClass(MDCTabFoundation, [{
    key: 'init',
    value: function init() {
      this.adapter_.registerInteractionHandler('click', this.clickHandler_);
      this.adapter_.registerInteractionHandler('keydown', this.keydownHandler_);
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      this.adapter_.deregisterInteractionHandler('click', this.clickHandler_);
      this.adapter_.deregisterInteractionHandler('keydown', this.keydownHandler_);
    }
  }, {
    key: 'getComputedWidth',
    value: function getComputedWidth() {
      return this.computedWidth_;
    }
  }, {
    key: 'getComputedLeft',
    value: function getComputedLeft() {
      return this.computedLeft_;
    }
  }, {
    key: 'isActive',
    value: function isActive() {
      return this.isActive_;
    }
  }, {
    key: 'setActive',
    value: function setActive(isActive) {
      this.isActive_ = isActive;
      if (this.isActive_) {
        this.adapter_.addClass(__WEBPACK_IMPORTED_MODULE_0__constants__["a" /* cssClasses */].ACTIVE);
      } else {
        this.adapter_.removeClass(__WEBPACK_IMPORTED_MODULE_0__constants__["a" /* cssClasses */].ACTIVE);
      }
    }
  }, {
    key: 'preventsDefaultOnClick',
    value: function preventsDefaultOnClick() {
      return this.preventDefaultOnClick_;
    }
  }, {
    key: 'setPreventDefaultOnClick',
    value: function setPreventDefaultOnClick(preventDefaultOnClick) {
      this.preventDefaultOnClick_ = preventDefaultOnClick;
    }
  }, {
    key: 'measureSelf',
    value: function measureSelf() {
      this.computedWidth_ = this.adapter_.getOffsetWidth();
      this.computedLeft_ = this.adapter_.getOffsetLeft();
    }
  }]);

  return MDCTabFoundation;
}(__WEBPACK_IMPORTED_MODULE_1__material_base_foundation__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (MDCTabFoundation);

/***/ }),
/* 174 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__MaterialComponent__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_tabs__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__List__ = __webpack_require__(6);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};






/**
 * @prop indicator-accent = false
 * @prop icon-tab-bar = false
 */

var Tabs = function (_MaterialComponent) {
  _inherits(Tabs, _MaterialComponent);

  function Tabs() {
    _classCallCheck(this, Tabs);

    var _this = _possibleConstructorReturn(this, (Tabs.__proto__ || Object.getPrototypeOf(Tabs)).call(this));

    _this.componentName = "tab-bar";
    _this._mdcProps = ["indicator-accent", "icon-tab-bar", "icons-with-text"];
    return _this;
  }

  _createClass(Tabs, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.MDComponent = new __WEBPACK_IMPORTED_MODULE_2__material_tabs__["a" /* MDCTabBar */](this.control);
    }
  }, {
    key: "materialDom",
    value: function materialDom(props) {
      var _this2 = this;

      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("nav", _extends({ role: "tablist" }, props, { ref: function ref(control) {
          return _this2.control = control;
        } }), props.children, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("span", { "class": "mdc-tab-bar__indicator" }));
    }
  }]);

  return Tabs;
}(__WEBPACK_IMPORTED_MODULE_1__MaterialComponent__["a" /* default */]);

/**
 * @prop active = false
 */


var Tab = function (_MaterialComponent2) {
  _inherits(Tab, _MaterialComponent2);

  function Tab() {
    _classCallCheck(this, Tab);

    var _this3 = _possibleConstructorReturn(this, (Tab.__proto__ || Object.getPrototypeOf(Tab)).call(this));

    _this3.componentName = "tab";
    _this3._mdcProps = ["active"];
    return _this3;
  }

  _createClass(Tab, [{
    key: "materialDom",
    value: function materialDom(props) {
      var _this4 = this;

      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("a", _extends({ role: "tab" }, props, { ref: function ref(control) {
          return _this4.control = control;
        } }), props.children);
    }
  }]);

  return Tab;
}(__WEBPACK_IMPORTED_MODULE_1__MaterialComponent__["a" /* default */]);

Tabs.Tab = Tab;

/* harmony default export */ __webpack_exports__["a"] = (Tabs);

/***/ })
],[44]);