webpackJsonp([0],[
/* 0 */,
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_ripple_index__ = __webpack_require__(20);
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
				__WEBPACK_IMPORTED_MODULE_1__material_ripple_index__["a" /* MDCRipple */].attachTo(this.control);
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
			if (element && element.attributes.className) {
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
			return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
				"div",
				props,
				props.children
			);
		}
	}, {
		key: "render",
		value: function render() {
			this.buildClassName();
			// Fetch a VNode
			var element = this.materialDom(this.props);
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
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__foundation__ = __webpack_require__(3);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__foundation__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__component__ = __webpack_require__(13);
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
/* 3 */
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
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = supportsCssVariables;
/* harmony export (immutable) */ __webpack_exports__["a"] = getMatchesProperty;
/* harmony export (immutable) */ __webpack_exports__["d"] = animateWithClass;
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

function animateWithClass(rippleAdapter, cls, endEvent) {
  var cancelled = false;
  var cancel = function cancel() {
    if (cancelled) {
      return;
    }
    cancelled = true;
    rippleAdapter.removeClass(cls);
    rippleAdapter.deregisterInteractionHandler(endEvent, cancel);
  };
  rippleAdapter.registerInteractionHandler(endEvent, cancel);
  rippleAdapter.addClass(cls);
  return cancel;
}

function getNormalizedEventCoords(ev, pageOffset, clientRect) {
  var x = pageOffset.x,
      y = pageOffset.y;

  var documentX = x + clientRect.left;
  var documentY = y + clientRect.top;

  var normalizedX = void 0;
  var normalizedY = void 0;
  // Determine touch point relative to the ripple container.
  if (ev.type === 'touchend') {
    normalizedX = ev.changedTouches[0].pageX - documentX;
    normalizedY = ev.changedTouches[0].pageY - documentY;
  } else {
    normalizedX = ev.pageX - documentX;
    normalizedY = ev.pageY - documentY;
  }

  return { x: normalizedX, y: normalizedY };
}

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__MaterialComponent__ = __webpack_require__(1);
var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




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
				return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					"nav",
					{ ref: function ref(control) {
							return _this2.control = control;
						} },
					props.children
				);
			}

			return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
				"ul",
				_extends({}, props, { ref: function ref(control) {
						return _this2.control = control;
					} }),
				props.children
			);
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

			return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
				"li",
				_extends({ role: "option" }, props, { ref: function ref(control) {
						return _this4.control = control;
					} }),
				props.children
			);
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

			return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
				"a",
				_extends({ role: "option" }, props, { ref: function ref(control) {
						return _this6.control = control;
					} }),
				props.children
			);
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
		key: "materialDom",
		value: function materialDom(props) {
			var className = 'material-icons ';
			// default behavior
			props['start-detail'] = props['start-detail'] || true;

			// setting class names mutually exclusive
			if (props['end-detail']) {
				className += 'mdc-list-item__end-detail';
			} else if (props['start-detail']) {
				className += 'mdc-list-item__start-detail';
			}
			return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
				"i",
				_extends({ className: className, "aria-hidden": "true" }, props),
				props.children
			);
		}
	}]);

	return ListItemIcon;
}(__WEBPACK_IMPORTED_MODULE_1__MaterialComponent__["a" /* default */]);

List.ListItem = ListItem;
List.LinkItem = LinkItem;
List.ListItemIcon = ListItemIcon;

/* harmony default export */ __webpack_exports__["a"] = (List);

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_preact_material_components_Icon__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_preact_material_components_Toolbar__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_preact_material_components_Drawer__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_preact_material_components_List__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ButtonsPage_ButtonsPage_jsx__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__FabPage_FabPage_jsx__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_preact_material_components_Icon_style_css__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_preact_material_components_Icon_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_preact_material_components_Icon_style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_preact_material_components_Toolbar_style_css__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_preact_material_components_Toolbar_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_preact_material_components_Toolbar_style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_preact_material_components_Drawer_style_css__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_preact_material_components_Drawer_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_preact_material_components_Drawer_style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_preact_material_components_List_style_css__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_preact_material_components_List_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_preact_material_components_List_style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__Home_css__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__Home_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__Home_css__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }















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
				{ className: 'home' },
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'div',
					{ className: 'hero' },
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						__WEBPACK_IMPORTED_MODULE_2_preact_material_components_Toolbar__["a" /* default */],
						null,
						__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
							__WEBPACK_IMPORTED_MODULE_2_preact_material_components_Toolbar__["a" /* default */].Section,
							{ 'align-start': true },
							__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
								__WEBPACK_IMPORTED_MODULE_2_preact_material_components_Toolbar__["a" /* default */].Icon,
								{ href: '#', onClick: function onClick(e) {
										e.preventDefault();
										_this2.drawer.MDComponent.open = true;
									} },
								'menu'
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
							_this2.drawer = drawer;
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
							__WEBPACK_IMPORTED_MODULE_4_preact_material_components_List__["a" /* default */],
							null,
							__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
								__WEBPACK_IMPORTED_MODULE_4_preact_material_components_List__["a" /* default */].ListItem,
								null,
								__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
									__WEBPACK_IMPORTED_MODULE_4_preact_material_components_List__["a" /* default */].ListItemIcon,
									null,
									'code'
								),
								'Button'
							),
							__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
								__WEBPACK_IMPORTED_MODULE_4_preact_material_components_List__["a" /* default */].ListItem,
								null,
								__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
									__WEBPACK_IMPORTED_MODULE_4_preact_material_components_List__["a" /* default */].ListItemIcon,
									null,
									'code'
								),
								'Card'
							),
							__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
								__WEBPACK_IMPORTED_MODULE_4_preact_material_components_List__["a" /* default */].ListItem,
								null,
								__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
									__WEBPACK_IMPORTED_MODULE_4_preact_material_components_List__["a" /* default */].ListItemIcon,
									null,
									'code'
								),
								'Checkbox'
							),
							__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
								__WEBPACK_IMPORTED_MODULE_4_preact_material_components_List__["a" /* default */].ListItem,
								null,
								__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
									__WEBPACK_IMPORTED_MODULE_4_preact_material_components_List__["a" /* default */].ListItemIcon,
									null,
									'code'
								),
								'Dialog'
							),
							__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
								__WEBPACK_IMPORTED_MODULE_4_preact_material_components_List__["a" /* default */].ListItem,
								null,
								__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
									__WEBPACK_IMPORTED_MODULE_4_preact_material_components_List__["a" /* default */].ListItemIcon,
									null,
									'code'
								),
								'Drawer'
							),
							__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
								__WEBPACK_IMPORTED_MODULE_4_preact_material_components_List__["a" /* default */].ListItem,
								null,
								__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
									__WEBPACK_IMPORTED_MODULE_4_preact_material_components_List__["a" /* default */].ListItemIcon,
									null,
									'code'
								),
								'Elevation'
							),
							__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
								__WEBPACK_IMPORTED_MODULE_4_preact_material_components_List__["a" /* default */].ListItem,
								null,
								__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
									__WEBPACK_IMPORTED_MODULE_4_preact_material_components_List__["a" /* default */].ListItemIcon,
									null,
									'code'
								),
								'Fab'
							),
							__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
								__WEBPACK_IMPORTED_MODULE_4_preact_material_components_List__["a" /* default */].ListItem,
								null,
								__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
									__WEBPACK_IMPORTED_MODULE_4_preact_material_components_List__["a" /* default */].ListItemIcon,
									null,
									'code'
								),
								'FormField'
							),
							__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
								__WEBPACK_IMPORTED_MODULE_4_preact_material_components_List__["a" /* default */].ListItem,
								null,
								__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
									__WEBPACK_IMPORTED_MODULE_4_preact_material_components_List__["a" /* default */].ListItemIcon,
									null,
									'code'
								),
								'Icon'
							),
							__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
								__WEBPACK_IMPORTED_MODULE_4_preact_material_components_List__["a" /* default */].ListItem,
								null,
								__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
									__WEBPACK_IMPORTED_MODULE_4_preact_material_components_List__["a" /* default */].ListItemIcon,
									null,
									'code'
								),
								'IconToggle'
							),
							__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
								__WEBPACK_IMPORTED_MODULE_4_preact_material_components_List__["a" /* default */].ListItem,
								null,
								__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
									__WEBPACK_IMPORTED_MODULE_4_preact_material_components_List__["a" /* default */].ListItemIcon,
									null,
									'code'
								),
								'List'
							),
							__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
								__WEBPACK_IMPORTED_MODULE_4_preact_material_components_List__["a" /* default */].ListItem,
								null,
								__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
									__WEBPACK_IMPORTED_MODULE_4_preact_material_components_List__["a" /* default */].ListItemIcon,
									null,
									'code'
								),
								'Radio'
							),
							__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
								__WEBPACK_IMPORTED_MODULE_4_preact_material_components_List__["a" /* default */].ListItem,
								null,
								__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
									__WEBPACK_IMPORTED_MODULE_4_preact_material_components_List__["a" /* default */].ListItemIcon,
									null,
									'code'
								),
								'Select'
							),
							__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
								__WEBPACK_IMPORTED_MODULE_4_preact_material_components_List__["a" /* default */].ListItem,
								null,
								__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
									__WEBPACK_IMPORTED_MODULE_4_preact_material_components_List__["a" /* default */].ListItemIcon,
									null,
									'code'
								),
								'Snackbar'
							),
							__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
								__WEBPACK_IMPORTED_MODULE_4_preact_material_components_List__["a" /* default */].ListItem,
								null,
								__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
									__WEBPACK_IMPORTED_MODULE_4_preact_material_components_List__["a" /* default */].ListItemIcon,
									null,
									'code'
								),
								'Switch'
							),
							__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
								__WEBPACK_IMPORTED_MODULE_4_preact_material_components_List__["a" /* default */].ListItem,
								null,
								__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
									__WEBPACK_IMPORTED_MODULE_4_preact_material_components_List__["a" /* default */].ListItemIcon,
									null,
									'code'
								),
								'Textfield'
							),
							__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
								__WEBPACK_IMPORTED_MODULE_4_preact_material_components_List__["a" /* default */].ListItem,
								null,
								__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
									__WEBPACK_IMPORTED_MODULE_4_preact_material_components_List__["a" /* default */].ListItemIcon,
									null,
									'code'
								),
								'Toolbar'
							)
						)
					)
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'div',
					{ className: 'content' },
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_6__FabPage_FabPage_jsx__["a" /* default */], null)
				)
			);
		}
	}]);

	return Home;
}(__WEBPACK_IMPORTED_MODULE_0_preact__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Home);

/***/ }),
/* 7 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 8 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 9 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_preact_material_components_Button__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_preact_material_components_Button_style_css__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_preact_material_components_Button_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_preact_material_components_Button_style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ButtonsPage_css__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ButtonsPage_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__ButtonsPage_css__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var ButtonsPage = function (_Component) {
	_inherits(ButtonsPage, _Component);

	function ButtonsPage() {
		_classCallCheck(this, ButtonsPage);

		return _possibleConstructorReturn(this, (ButtonsPage.__proto__ || Object.getPrototypeOf(ButtonsPage)).apply(this, arguments));
	}

	_createClass(ButtonsPage, [{
		key: 'render',
		value: function render() {
			return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
				'div',
				{ className: 'page-buttons' },
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'div',
					{ className: 'mdc-typography--display2' },
					'Props '
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'ul',
					{ className: 'props' },
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						'li',
						{ className: 'prop' },
						__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
							'div',
							{ className: 'mdc-typography--headline' },
							'ripple'
						),
						__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
							'div',
							{ className: 'mdc-typography--subheading1' },
							'true/false'
						),
						__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
							'div',
							{ className: 'mdc-typography--body1' },
							'Adds riple effect to the button'
						)
					),
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						'li',
						{ className: 'prop' },
						__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
							'div',
							{ className: 'mdc-typography--headline' },
							'accent'
						),
						__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
							'div',
							{ className: 'mdc-typography--subheading1' },
							'true/false'
						),
						__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
							'div',
							{ className: 'mdc-typography--body1' },
							'Adds accent colors to the button'
						)
					),
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						'li',
						{ className: 'prop' },
						__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
							'div',
							{ className: 'mdc-typography--headline' },
							'primary'
						),
						__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
							'div',
							{ className: 'mdc-typography--subheading1' },
							'true/false'
						),
						__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
							'div',
							{ className: 'mdc-typography--body1' },
							'Adds primary colors to the button'
						)
					),
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						'li',
						{ className: 'prop' },
						__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
							'div',
							{ className: 'mdc-typography--headline' },
							'dense'
						),
						__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
							'div',
							{ className: 'mdc-typography--subheading1' },
							'true/false'
						),
						__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
							'div',
							{ className: 'mdc-typography--body1' },
							'Adds dense padding to the button'
						)
					),
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						'li',
						{ className: 'prop' },
						__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
							'div',
							{ className: 'mdc-typography--headline' },
							'compact'
						),
						__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
							'div',
							{ className: 'mdc-typography--subheading1' },
							'true/false'
						),
						__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
							'div',
							{ className: 'mdc-typography--body1' },
							'Adds compact padding to the button'
						)
					)
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'div',
					{ className: 'mdc-typography--display2' },
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

/* unused harmony default export */ var _unused_webpack_default_export = (ButtonsPage);

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Components_Home_Home_jsx__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_preact_material_components_Typography_style_css__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_preact_material_components_Typography_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_preact_material_components_Typography_style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_preact_material_components_Theme_style_css__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_preact_material_components_Theme_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_preact_material_components_Theme_style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_css__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__app_css__);





__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["render"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_1__Components_Home_Home_jsx__["a" /* default */], null), document.querySelector('.app'));

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getCorrectEventName;
/* unused harmony export getCorrectPropertyName */
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

var eventTypeMap = {
  animationstart: {
    noPrefix: 'animationstart',
    webkitPrefix: 'webkitAnimationStart'
  },
  animationend: {
    noPrefix: 'animationend',
    webkitPrefix: 'webkitAnimationEnd'
  },
  animationiteration: {
    noPrefix: 'animationiteration',
    webkitPrefix: 'webkitAnimationIteration'
  },
  transitionend: {
    noPrefix: 'transitionend',
    webkitPrefix: 'webkitTransitionEnd'
  }
};

var cssPropertyMap = {
  animation: {
    noPrefix: 'animation',
    webkitPrefix: '-webkit-animation'
  },
  transform: {
    noPrefix: 'transform',
    webkitPrefix: '-webkit-transform'
  },
  transition: {
    noPrefix: 'transition',
    webkitPrefix: '-webkit-transition'
  }
};

function hasProperShape(windowObj) {
  return windowObj.document !== undefined && typeof windowObj.document.createElement === 'function';
}

function eventFoundInMaps(eventType) {
  return eventType in eventTypeMap || eventType in cssPropertyMap;
}

// If 'animation' or 'transition' exist as style property, webkit prefix isn't necessary. Since we are unable to
// see the event types on the element, we must rely on the corresponding style properties.
function getJavaScriptEventName(eventType, map, el) {
  switch (eventType) {
    case 'animationstart':
    case 'animationend':
    case 'animationiteration':
      return 'animation' in el.style ? map[eventType].noPrefix : map[eventType].webkitPrefix;
    case 'transitionend':
      return 'transition' in el.style ? map[eventType].noPrefix : map[eventType].webkitPrefix;
    default:
      return map[eventType].noPrefix;
  }
}

// Helper function to determine browser prefix for CSS3 animation events
// and property names
//
// Parameters:
// windowObject: Object -- Contains Document with a `createElement()` method
// eventType: string -- The type of animation
//
// returns the value of the event as a string, prefixed if necessary.
// If proper arguments are not supplied, this function will return
// the property or event type without webkit prefix.
//
function getAnimationName(windowObj, eventType) {
  if (!hasProperShape(windowObj) || !eventFoundInMaps(eventType)) {
    return eventType;
  }

  var map = eventType in eventTypeMap ? eventTypeMap : cssPropertyMap;
  var el = windowObj.document.createElement('div');
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
//
// Parameters:
// windowObject: Object -- Contains Document with a `createElement()` method
// eventType: string -- The type of animation
//
// returns the value of the event as a string, prefixed if necessary.
// If proper arguments are not supplied, this function will return
// the property or event type without webkit prefix.
//
function getCorrectEventName(windowObj, eventType) {
  return getAnimationName(windowObj, eventType);
}

function getCorrectPropertyName(windowObj, eventType) {
  return getAnimationName(windowObj, eventType);
}

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__foundation__ = __webpack_require__(3);
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
      var evt = void 0;
      if (typeof CustomEvent === 'function') {
        evt = new CustomEvent(evtType, { detail: evtData });
      } else {
        evt = document.createEvent('CustomEvent');
        evt.initCustomEvent(evtType, false, false, evtData);
      }

      this.root_.dispatchEvent(evt);
    }
  }]);

  return MDCComponent;
}();

/* harmony default export */ __webpack_exports__["a"] = (MDCComponent);

/***/ }),
/* 14 */
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

var ROOT = 'mdc-temporary-drawer';

var cssClasses = {
  ROOT: ROOT,
  OPEN: ROOT + '--open',
  ANIMATING: ROOT + '--animating',
  RIGHT: ROOT + '--right'
};

var strings = {
  DRAWER_SELECTOR: '.' + ROOT + '__drawer',
  OPACITY_VAR_NAME: '--' + ROOT + '-opacity',
  FOCUSABLE_ELEMENTS: 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), ' + 'button:not([disabled]), iframe, object, embed, [tabindex], [contenteditable]'
};

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__(14);
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




var MDCTemporaryDrawerFoundation = function (_MDCFoundation) {
  _inherits(MDCTemporaryDrawerFoundation, _MDCFoundation);

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
        updateCssVariable: function updateCssVariable() /* value: string */{},
        getFocusableElements: function getFocusableElements() /* NodeList */{},
        saveElementTabState: function saveElementTabState() /* el: Element */{},
        restoreElementTabState: function restoreElementTabState() /* el: Element */{},
        makeElementUntabbable: function makeElementUntabbable() /* el: Element */{},
        isRtl: function isRtl() {
          return (/* boolean */false
          );
        },
        getDrawerWidth: function getDrawerWidth() {
          return (/* number */0
          );
        },
        isDrawer: function isDrawer() {
          return (/* el: Element */ /* boolean */false
          );
        }
      };
    }
  }]);

  function MDCTemporaryDrawerFoundation(adapter) {
    _classCallCheck(this, MDCTemporaryDrawerFoundation);

    var _this = _possibleConstructorReturn(this, (MDCTemporaryDrawerFoundation.__proto__ || Object.getPrototypeOf(MDCTemporaryDrawerFoundation)).call(this, Object.assign(MDCTemporaryDrawerFoundation.defaultAdapter, adapter)));

    _this.transitionEndHandler_ = function (ev) {
      if (_this.adapter_.isDrawer(ev.target)) {
        _this.adapter_.removeClass(MDCTemporaryDrawerFoundation.cssClasses.ANIMATING);
        _this.adapter_.deregisterTransitionEndHandler(_this.transitionEndHandler_);
      }
    };

    _this.inert_ = false;

    _this.componentClickHandler_ = function () {
      return _this.close();
    };
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

  _createClass(MDCTemporaryDrawerFoundation, [{
    key: 'init',
    value: function init() {
      var _MDCTemporaryDrawerFo = MDCTemporaryDrawerFoundation.cssClasses,
          ROOT = _MDCTemporaryDrawerFo.ROOT,
          OPEN = _MDCTemporaryDrawerFo.OPEN;


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

      // Make browser aware of custom property being used in this element.
      // Workaround for certain types of hard-to-reproduce heisenbugs.
      this.adapter_.updateCssVariable(0);

      this.adapter_.registerInteractionHandler('click', this.componentClickHandler_);
      this.adapter_.registerDrawerInteractionHandler('click', this.drawerClickHandler_);
      this.adapter_.registerDrawerInteractionHandler('touchstart', this.componentTouchStartHandler_);
      this.adapter_.registerInteractionHandler('touchmove', this.componentTouchMoveHandler_);
      this.adapter_.registerInteractionHandler('touchend', this.componentTouchEndHandler_);
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      this.adapter_.deregisterInteractionHandler('click', this.componentClickHandler_);
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
      // Make sure custom property values are cleared before starting.
      this.adapter_.updateCssVariable('');

      this.adapter_.registerTransitionEndHandler(this.transitionEndHandler_);
      this.adapter_.registerDocumentKeydownHandler(this.documentKeydownHandler_);
      this.adapter_.addClass(MDCTemporaryDrawerFoundation.cssClasses.ANIMATING);
      this.adapter_.addClass(MDCTemporaryDrawerFoundation.cssClasses.OPEN);
      this.retabinate_();
      this.isOpen_ = true;
    }
  }, {
    key: 'close',
    value: function close() {
      // Make sure custom property values are cleared before making any changes.
      this.adapter_.updateCssVariable('');

      this.adapter_.deregisterDocumentKeydownHandler(this.documentKeydownHandler_);
      this.adapter_.registerTransitionEndHandler(this.transitionEndHandler_);
      this.adapter_.addClass(MDCTemporaryDrawerFoundation.cssClasses.ANIMATING);
      this.adapter_.removeClass(MDCTemporaryDrawerFoundation.cssClasses.OPEN);
      this.detabinate_();
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
      if (!this.adapter_.hasClass(MDCTemporaryDrawerFoundation.cssClasses.OPEN)) {
        return;
      }
      if (evt.pointerType && evt.pointerType !== 'touch') {
        return;
      }

      this.direction_ = this.adapter_.isRtl() ? -1 : 1;
      this.drawerWidth_ = this.adapter_.getDrawerWidth();
      this.startX_ = evt.touches ? evt.touches[0].pageX : evt.pageX;
      this.currentX_ = this.startX_;
      this.touchingSideNav_ = true;

      requestAnimationFrame(this.updateDrawer_.bind(this));
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

      this.touchingSideNav_ = false;
      this.adapter_.setTranslateX(null);
      this.adapter_.updateCssVariable('');

      var newPos = null;
      if (this.direction_ === 1) {
        newPos = Math.min(0, this.currentX_ - this.startX_);
      } else {
        newPos = Math.max(0, this.currentX_ - this.startX_);
      }

      // Did the user close the drawer by more than 50%?
      if (Math.abs(newPos / this.drawerWidth_) >= 0.5) {
        this.close();
      } else {
        // Triggering an open here means we'll get a nice animation back to the fully open state.
        this.open();
      }
    }
  }, {
    key: 'updateDrawer_',
    value: function updateDrawer_() {
      if (!this.touchingSideNav_) {
        return;
      }

      requestAnimationFrame(this.updateDrawer_.bind(this));

      var newPos = null;
      var newOpacity = null;

      if (this.direction_ === 1) {
        newPos = Math.min(0, this.currentX_ - this.startX_);
      } else {
        newPos = Math.max(0, this.currentX_ - this.startX_);
      }

      newOpacity = Math.max(0, 1 + this.direction_ * (newPos / this.drawerWidth_));

      this.adapter_.setTranslateX(newPos);
      this.adapter_.updateCssVariable(newOpacity);
    }
  }]);

  return MDCTemporaryDrawerFoundation;
}(__WEBPACK_IMPORTED_MODULE_0__material_base__["b" /* MDCFoundation */]);

/* harmony default export */ __webpack_exports__["a"] = (MDCTemporaryDrawerFoundation);

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__foundation__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util__ = __webpack_require__(17);
/* unused harmony reexport MDCTemporaryDrawerFoundation */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MDCTemporaryDrawer; });
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
          if (__WEBPACK_IMPORTED_MODULE_2__util__["d" /* supportsCssCustomProperties */]()) {
            _this2.root_.style.setProperty(OPACITY_VAR_NAME, value);
          }
        },
        getFocusableElements: function getFocusableElements() {
          return _this2.drawer.querySelectorAll(FOCUSABLE_ELEMENTS);
        },
        saveElementTabState: function saveElementTabState(el) {
          return __WEBPACK_IMPORTED_MODULE_2__util__["e" /* saveElementTabState */](el);
        },
        restoreElementTabState: function restoreElementTabState(el) {
          return __WEBPACK_IMPORTED_MODULE_2__util__["f" /* restoreElementTabState */](el);
        },
        makeElementUntabbable: function makeElementUntabbable(el) {
          return el.setAttribute('tabindex', -1);
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
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = remapEvent;
/* harmony export (immutable) */ __webpack_exports__["c"] = getTransformPropertyName;
/* harmony export (immutable) */ __webpack_exports__["d"] = supportsCssCustomProperties;
/* harmony export (immutable) */ __webpack_exports__["b"] = applyPassive;
/* harmony export (immutable) */ __webpack_exports__["e"] = saveElementTabState;
/* harmony export (immutable) */ __webpack_exports__["f"] = restoreElementTabState;
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
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ROOT */
/* unused harmony export UPGRADED */
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

var ROOT = 'mdc-ripple';
var UPGRADED = ROOT + '-upgraded';

var cssClasses = {
  // Ripple is a special case where the "root" component is really a "mixin" of sorts,
  // given that it's an 'upgrade' to an existing component. That being said it is the root
  // CSS class that all other CSS classes derive from.
  ROOT: UPGRADED,
  UNBOUNDED: UPGRADED + '--unbounded',
  BG_ACTIVE: UPGRADED + '--background-active',
  BG_BOUNDED_ACTIVE_FILL: UPGRADED + '--background-bounded-active-fill',
  FG_BOUNDED_ACTIVE_FILL: UPGRADED + '--foreground-bounded-active-fill',
  FG_UNBOUNDED_ACTIVATION: UPGRADED + '--foreground-unbounded-activation',
  FG_UNBOUNDED_DEACTIVATION: UPGRADED + '--foreground-unbounded-deactivation'
};

var strings = {
  VAR_SURFACE_WIDTH: '--' + ROOT + '-surface-width',
  VAR_SURFACE_HEIGHT: '--' + ROOT + '-surface-height',
  VAR_FG_SIZE: '--' + ROOT + '-fg-size',
  VAR_FG_UNBOUNDED_OPACITY_DURATION: '--' + ROOT + '-fg-unbounded-opacity-duration',
  VAR_FG_UNBOUNDED_TRANSFORM_DURATION: '--' + ROOT + '-fg-unbounded-transform-duration',
  VAR_LEFT: '--' + ROOT + '-left',
  VAR_TOP: '--' + ROOT + '-top',
  VAR_TRANSLATE_END: '--' + ROOT + '-translate-end',
  VAR_FG_APPROX_XF: '--' + ROOT + '-fg-approx-xf',
  VAR_FG_SCALE: '--' + ROOT + '-fg-scale',
  VAR_FG_TRANSLATE_START: '--' + ROOT + '-fg-translate-start',
  VAR_FG_TRANSLATE_END: '--' + ROOT + '-fg-translate-end'
};

var numbers = {
  FG_TRANSFORM_DELAY_MS: 80,
  OPACITY_DURATION_DIVISOR: 3,
  ACTIVE_OPACITY_DURATION_MS: 110,
  MIN_OPACITY_DURATION_MS: 200,
  UNBOUNDED_TRANSFORM_DURATION_MS: 200,
  PADDING: 10,
  INITIAL_ORIGIN_SCALE: 0.6
};

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_animation__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util__ = __webpack_require__(4);
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
      return __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */];
    }
  }, {
    key: 'strings',
    get: function get() {
      return __WEBPACK_IMPORTED_MODULE_2__constants__["b" /* strings */];
    }
  }, {
    key: 'numbers',
    get: function get() {
      return __WEBPACK_IMPORTED_MODULE_2__constants__["c" /* numbers */];
    }
  }, {
    key: 'defaultAdapter',
    get: function get() {
      return {
        browserSupportsCssVars: function browserSupportsCssVars() /* boolean - cached */{},
        isUnbounded: function isUnbounded() /* boolean */{},
        isSurfaceActive: function isSurfaceActive() /* boolean */{},
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
          return _this.adapter_.addClass(MDCRippleFoundation.cssClasses.BG_ACTIVE);
        });
      },
      blur: function blur() {
        return requestAnimationFrame(function () {
          return _this.adapter_.removeClass(MDCRippleFoundation.cssClasses.BG_ACTIVE);
        });
      }
    };
    _this.unboundedOpacityFadeTimer_ = 0;
    _this.resizeHandler_ = function () {
      return _this.layout();
    };
    _this.cancelBgBounded_ = function () {};
    _this.cancelFgBounded_ = function () {};
    _this.cancelFgUnbounded_ = function () {};
    _this.unboundedCoords_ = {
      left: 0,
      top: 0
    };
    _this.fgScale_ = 0;
    return _this;
  }

  _createClass(MDCRippleFoundation, [{
    key: 'defaultActivationState_',
    value: function defaultActivationState_() {
      return {
        isActivated: false,
        wasActivatedByPointer: false,
        wasElementMadeActive: false,
        activationStartTime: 0,
        activationEvent: null
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

      var _MDCRippleFoundation$2 = MDCRippleFoundation.cssClasses,
          BG_ACTIVE = _MDCRippleFoundation$2.BG_ACTIVE,
          BG_BOUNDED_ACTIVE_FILL = _MDCRippleFoundation$2.BG_BOUNDED_ACTIVE_FILL,
          FG_UNBOUNDED_DEACTIVATION = _MDCRippleFoundation$2.FG_UNBOUNDED_DEACTIVATION,
          FG_BOUNDED_ACTIVE_FILL = _MDCRippleFoundation$2.FG_BOUNDED_ACTIVE_FILL;

      // If ripple is currently deactivating, cancel those animations.

      [BG_BOUNDED_ACTIVE_FILL, FG_UNBOUNDED_DEACTIVATION, FG_BOUNDED_ACTIVE_FILL].forEach(function (c) {
        return _this5.adapter_.removeClass(c);
      });
      this.cancelBgBounded_();
      this.cancelFgBounded_();
      this.cancelFgUnbounded_();
      if (this.unboundedOpacityFadeTimer_) {
        clearTimeout(this.unboundedOpacityFadeTimer_);
        this.unboundedOpacityFadeTimer_ = 0;
      }

      this.adapter_.addClass(BG_ACTIVE);
      if (this.adapter_.isUnbounded()) {
        this.animateUnboundedActivation_();
      }
    }
  }, {
    key: 'animateUnboundedActivation_',
    value: function animateUnboundedActivation_() {
      var FG_UNBOUNDED_ACTIVATION = MDCRippleFoundation.cssClasses.FG_UNBOUNDED_ACTIVATION;

      this.adapter_.addClass(FG_UNBOUNDED_ACTIVATION);
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
        requestAnimationFrame(function () {
          return _this6.animateDeactivation_(null, Object.assign({}, activationState));
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
      if (needsDeactivationUX) {
        requestAnimationFrame(function () {
          return _this6.animateDeactivation_(e, state);
        });
      }
      if (needsActualDeactivation) {
        this.activationState_ = this.defaultActivationState_();
      }
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
          wasElementMadeActive = _ref.wasElementMadeActive,
          activationStartTime = _ref.activationStartTime,
          isProgrammatic = _ref.isProgrammatic;
      var BG_ACTIVE = MDCRippleFoundation.cssClasses.BG_ACTIVE;

      if (wasActivatedByPointer || wasElementMadeActive) {
        this.adapter_.removeClass(BG_ACTIVE);
        var isPointerEvent = isProgrammatic ? false : e.type === 'touchend' || e.type === 'pointerup' || e.type === 'mouseup';
        if (this.adapter_.isUnbounded()) {
          this.animateUnboundedDeactivation_(this.getUnboundedDeactivationInfo_(activationStartTime));
        } else {
          this.animateBoundedDeactivation_(e, isPointerEvent);
        }
      }
    }
  }, {
    key: 'animateUnboundedDeactivation_',
    value: function animateUnboundedDeactivation_(_ref2) {
      var _this7 = this;

      var opacityDuration = _ref2.opacityDuration,
          transformDuration = _ref2.transformDuration,
          approxCurScale = _ref2.approxCurScale;
      var _MDCRippleFoundation$3 = MDCRippleFoundation.cssClasses,
          FG_UNBOUNDED_ACTIVATION = _MDCRippleFoundation$3.FG_UNBOUNDED_ACTIVATION,
          FG_UNBOUNDED_DEACTIVATION = _MDCRippleFoundation$3.FG_UNBOUNDED_DEACTIVATION;
      var _MDCRippleFoundation$4 = MDCRippleFoundation.strings,
          VAR_FG_UNBOUNDED_OPACITY_DURATION = _MDCRippleFoundation$4.VAR_FG_UNBOUNDED_OPACITY_DURATION,
          VAR_FG_UNBOUNDED_TRANSFORM_DURATION = _MDCRippleFoundation$4.VAR_FG_UNBOUNDED_TRANSFORM_DURATION,
          VAR_FG_APPROX_XF = _MDCRippleFoundation$4.VAR_FG_APPROX_XF;


      this.adapter_.updateCssVariable(VAR_FG_APPROX_XF, 'scale(' + approxCurScale + ')');
      this.adapter_.updateCssVariable(VAR_FG_UNBOUNDED_OPACITY_DURATION, opacityDuration + 'ms');
      this.adapter_.updateCssVariable(VAR_FG_UNBOUNDED_TRANSFORM_DURATION, transformDuration + 'ms');
      this.adapter_.addClass(FG_UNBOUNDED_DEACTIVATION);
      this.adapter_.removeClass(FG_UNBOUNDED_ACTIVATION);
      // We use setTimeout here since we know how long the fade will take.
      this.unboundedOpacityFadeTimer_ = setTimeout(function () {
        _this7.adapter_.removeClass(FG_UNBOUNDED_DEACTIVATION);
      }, opacityDuration);
    }
  }, {
    key: 'getUnboundedDeactivationInfo_',
    value: function getUnboundedDeactivationInfo_(activationStartTime) {
      var msElapsed = Date.now() - activationStartTime;
      var _MDCRippleFoundation$5 = MDCRippleFoundation.numbers,
          FG_TRANSFORM_DELAY_MS = _MDCRippleFoundation$5.FG_TRANSFORM_DELAY_MS,
          OPACITY_DURATION_DIVISOR = _MDCRippleFoundation$5.OPACITY_DURATION_DIVISOR,
          ACTIVE_OPACITY_DURATION_MS = _MDCRippleFoundation$5.ACTIVE_OPACITY_DURATION_MS,
          UNBOUNDED_TRANSFORM_DURATION_MS = _MDCRippleFoundation$5.UNBOUNDED_TRANSFORM_DURATION_MS,
          MIN_OPACITY_DURATION_MS = _MDCRippleFoundation$5.MIN_OPACITY_DURATION_MS;


      var approxCurScale = 0;
      if (msElapsed > FG_TRANSFORM_DELAY_MS) {
        var percentComplete = Math.min((msElapsed - FG_TRANSFORM_DELAY_MS) / this.xfDuration_, 1);
        approxCurScale = percentComplete * this.fgScale_;
      }

      var transformDuration = UNBOUNDED_TRANSFORM_DURATION_MS;
      var approxOpacity = Math.min(msElapsed / ACTIVE_OPACITY_DURATION_MS, 1);
      var opacityDuration = Math.max(MIN_OPACITY_DURATION_MS, 1000 * approxOpacity / OPACITY_DURATION_DIVISOR);

      return { transformDuration: transformDuration, opacityDuration: opacityDuration, approxCurScale: approxCurScale };
    }
  }, {
    key: 'animateBoundedDeactivation_',
    value: function animateBoundedDeactivation_(e, isPointerEvent) {
      var startPoint = void 0;
      if (isPointerEvent) {
        startPoint = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__util__["c" /* getNormalizedEventCoords */])(e, this.adapter_.getWindowPageOffset(), this.adapter_.computeBoundingRect());
      } else {
        startPoint = {
          x: this.frame_.width / 2,
          y: this.frame_.height / 2
        };
      }

      startPoint = {
        x: startPoint.x - this.initialSize_ / 2,
        y: startPoint.y - this.initialSize_ / 2
      };

      var endPoint = {
        x: this.frame_.width / 2 - this.initialSize_ / 2,
        y: this.frame_.height / 2 - this.initialSize_ / 2
      };

      var _MDCRippleFoundation$6 = MDCRippleFoundation.strings,
          VAR_FG_TRANSLATE_START = _MDCRippleFoundation$6.VAR_FG_TRANSLATE_START,
          VAR_FG_TRANSLATE_END = _MDCRippleFoundation$6.VAR_FG_TRANSLATE_END;
      var _MDCRippleFoundation$7 = MDCRippleFoundation.cssClasses,
          BG_BOUNDED_ACTIVE_FILL = _MDCRippleFoundation$7.BG_BOUNDED_ACTIVE_FILL,
          FG_BOUNDED_ACTIVE_FILL = _MDCRippleFoundation$7.FG_BOUNDED_ACTIVE_FILL;

      this.adapter_.updateCssVariable(VAR_FG_TRANSLATE_START, startPoint.x + 'px, ' + startPoint.y + 'px');
      this.adapter_.updateCssVariable(VAR_FG_TRANSLATE_END, endPoint.x + 'px, ' + endPoint.y + 'px');
      this.cancelBgBounded_ = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__util__["d" /* animateWithClass */])(this.adapter_, BG_BOUNDED_ACTIVE_FILL, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__material_animation__["a" /* getCorrectEventName */])(window, 'transitionend'));
      this.cancelFgBounded_ = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__util__["d" /* animateWithClass */])(this.adapter_, FG_BOUNDED_ACTIVE_FILL, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__material_animation__["a" /* getCorrectEventName */])(window, 'animationend'));
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      var _this8 = this;

      if (!this.isSupported_) {
        return;
      }
      this.removeEventListeners_();

      var _MDCRippleFoundation$8 = MDCRippleFoundation.cssClasses,
          ROOT = _MDCRippleFoundation$8.ROOT,
          UNBOUNDED = _MDCRippleFoundation$8.UNBOUNDED;

      requestAnimationFrame(function () {
        _this8.adapter_.removeClass(ROOT);
        _this8.adapter_.removeClass(UNBOUNDED);
        _this8.removeCssVars_();
      });
    }
  }, {
    key: 'removeEventListeners_',
    value: function removeEventListeners_() {
      var _this9 = this;

      this.listenerInfos_.forEach(function (info) {
        Object.keys(info).forEach(function (k) {
          _this9.adapter_.deregisterInteractionHandler(info[k], _this9.listeners_[k]);
        });
      });
      this.adapter_.deregisterResizeHandler(this.resizeHandler_);
    }
  }, {
    key: 'removeCssVars_',
    value: function removeCssVars_() {
      var _this10 = this;

      var strings = MDCRippleFoundation.strings;

      Object.keys(strings).forEach(function (k) {
        if (k.indexOf('VAR_') === 0) {
          _this10.adapter_.updateCssVariable(strings[k], null);
        }
      });
    }
  }, {
    key: 'layout',
    value: function layout() {
      var _this11 = this;

      if (this.layoutFrame_) {
        cancelAnimationFrame(this.layoutFrame_);
      }
      this.layoutFrame_ = requestAnimationFrame(function () {
        _this11.layoutInternal_();
        _this11.layoutFrame_ = 0;
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
      var _MDCRippleFoundation$9 = MDCRippleFoundation.strings,
          VAR_SURFACE_WIDTH = _MDCRippleFoundation$9.VAR_SURFACE_WIDTH,
          VAR_SURFACE_HEIGHT = _MDCRippleFoundation$9.VAR_SURFACE_HEIGHT,
          VAR_FG_SIZE = _MDCRippleFoundation$9.VAR_FG_SIZE,
          VAR_FG_UNBOUNDED_TRANSFORM_DURATION = _MDCRippleFoundation$9.VAR_FG_UNBOUNDED_TRANSFORM_DURATION,
          VAR_LEFT = _MDCRippleFoundation$9.VAR_LEFT,
          VAR_TOP = _MDCRippleFoundation$9.VAR_TOP,
          VAR_FG_SCALE = _MDCRippleFoundation$9.VAR_FG_SCALE;


      this.adapter_.updateCssVariable(VAR_SURFACE_WIDTH, this.frame_.width + 'px');
      this.adapter_.updateCssVariable(VAR_SURFACE_HEIGHT, this.frame_.height + 'px');
      this.adapter_.updateCssVariable(VAR_FG_SIZE, this.initialSize_ + 'px');
      this.adapter_.updateCssVariable(VAR_FG_UNBOUNDED_TRANSFORM_DURATION, this.xfDuration_ + 'ms');
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
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__foundation__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util__ = __webpack_require__(4);
/* unused harmony reexport MDCRippleFoundation */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MDCRipple; });
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





var MATCHES = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util__["a" /* getMatchesProperty */])(HTMLElement.prototype);



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
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__MaterialComponent__ = __webpack_require__(1);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




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

			return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
				"button",
				_extends({
					ref: function ref(control) {
						_this2.control = control;
					}
				}, props),
				this.props.children
			);
		}
	}]);

	return Button;
}(__WEBPACK_IMPORTED_MODULE_1__MaterialComponent__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (Button);

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__MaterialComponent__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_drawer_temporary__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__List__ = __webpack_require__(5);
var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






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
			this.MDComponent = __WEBPACK_IMPORTED_MODULE_2__material_drawer_temporary__["a" /* MDCTemporaryDrawer */].attachTo(this.control);
		}
	}, {
		key: "materialDom",
		value: function materialDom(props) {
			var _this2 = this;

			return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
				"aside",
				_extends({ className: "mdc-typography", ref: function ref(control) {
						_this2.control = control;
					} }, props),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					"nav",
					{ "class": "mdc-temporary-drawer__drawer" },
					props.children
				)
			);
		}
	}]);

	return TemporaryDrawer;
}(__WEBPACK_IMPORTED_MODULE_1__MaterialComponent__["a" /* default */]);

var TemporaryDrawerHeader = function (_MaterialComponent2) {
	_inherits(TemporaryDrawerHeader, _MaterialComponent2);

	function TemporaryDrawerHeader() {
		_classCallCheck(this, TemporaryDrawerHeader);

		var _this3 = _possibleConstructorReturn(this, (TemporaryDrawerHeader.__proto__ || Object.getPrototypeOf(TemporaryDrawerHeader)).call(this));

		_this3.componentName = "temporary-drawer__header";
		return _this3;
	}

	_createClass(TemporaryDrawerHeader, [{
		key: "materialDom",
		value: function materialDom(props) {
			var _this4 = this;

			return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
				"header",
				_extends({ ref: function ref(control) {
						_this4.control = control;
					} }, props),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					"div",
					{ "class": "mdc-temporary-drawer__header-content" },
					props.children
				)
			);
		}
	}]);

	return TemporaryDrawerHeader;
}(__WEBPACK_IMPORTED_MODULE_1__MaterialComponent__["a" /* default */]);

var TemporaryDrawerContent = function (_MaterialComponent3) {
	_inherits(TemporaryDrawerContent, _MaterialComponent3);

	function TemporaryDrawerContent() {
		_classCallCheck(this, TemporaryDrawerContent);

		var _this5 = _possibleConstructorReturn(this, (TemporaryDrawerContent.__proto__ || Object.getPrototypeOf(TemporaryDrawerContent)).call(this));

		_this5.componentName = "mdc-temporary-drawer__content";
		return _this5;
	}

	_createClass(TemporaryDrawerContent, [{
		key: "materialDom",
		value: function materialDom(props) {
			var _this6 = this;

			return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
				"nav",
				_extends({ className: "mdc-list", ref: function ref(control) {
						_this6.control = control;
					} }, props),
				props.children
			);
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

		var _this7 = _possibleConstructorReturn(this, (PermanentDrawer.__proto__ || Object.getPrototypeOf(PermanentDrawer)).call(this));

		_this7.componentName = "permanent-drawer";
		return _this7;
	}

	_createClass(PermanentDrawer, [{
		key: "materialDom",
		value: function materialDom(props) {
			return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
				"nav",
				{ className: "mdc-typography" },
				props.spacer && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("div", { "class": "mdc-permanent-drawer__toolbar-spacer" }),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					"div",
					{ "class": "mdc-permanent-drawer__content" },
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						"nav",
						{ "class": "mdc-list" },
						props.children
					)
				)
			);
		}
	}]);

	return PermanentDrawer;
}(__WEBPACK_IMPORTED_MODULE_1__MaterialComponent__["a" /* default */]);

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
				returnedNode.attributes['className'] = 'mdc-temporary-drawer--selected mdc-permanent-drawer--selected';
			}
			return returnedNode;
		}
	}]);

	return DrawerItem;
}(__WEBPACK_IMPORTED_MODULE_3__List__["a" /* default */].LinkItem);

var Drawer = {};

Drawer.DrawerItem = DrawerItem;
Drawer.TemporaryDrawerHeader = TemporaryDrawerHeader;
Drawer.TemporaryDrawerContent = TemporaryDrawerContent;
Drawer.TemporaryDrawer = TemporaryDrawer;
Drawer.PermanentDrawer = PermanentDrawer;

/* harmony default export */ __webpack_exports__["a"] = (Drawer);

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__MaterialComponent__ = __webpack_require__(1);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




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
			return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
				"i",
				_extends({}, props, { className: "material-icons" }),
				props.icon
			);
		}
	}]);

	return Icon;
}(__WEBPACK_IMPORTED_MODULE_1__MaterialComponent__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (Icon);

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__MaterialComponent__ = __webpack_require__(1);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




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

			return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
				"header",
				_extends({ ref: function ref(control) {
						_this2.control = control;
					} }, props),
				props.children
			);
		}
	}]);

	return Toolbar;
}(__WEBPACK_IMPORTED_MODULE_1__MaterialComponent__["a" /* default */]);

/**
 * @prop align-end = false
 * @prop align-start = false
 */


var ToolbarSection = function (_MaterialComponent2) {
	_inherits(ToolbarSection, _MaterialComponent2);

	function ToolbarSection() {
		_classCallCheck(this, ToolbarSection);

		var _this3 = _possibleConstructorReturn(this, (ToolbarSection.__proto__ || Object.getPrototypeOf(ToolbarSection)).call(this));

		_this3.componentName = "toolbar__section";
		_this3._mdcProps = ["align-start", "align-end"];
		return _this3;
	}

	_createClass(ToolbarSection, [{
		key: "materialDom",
		value: function materialDom(props) {
			return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
				"section",
				props,
				props.children
			);
		}
	}]);

	return ToolbarSection;
}(__WEBPACK_IMPORTED_MODULE_1__MaterialComponent__["a" /* default */]);

var ToolbarIcon = function (_MaterialComponent3) {
	_inherits(ToolbarIcon, _MaterialComponent3);

	function ToolbarIcon() {
		_classCallCheck(this, ToolbarIcon);

		var _this4 = _possibleConstructorReturn(this, (ToolbarIcon.__proto__ || Object.getPrototypeOf(ToolbarIcon)).call(this));

		_this4.componentName = "toolbal__icon";
		_this4._mdcProps = ["align-end"];
		return _this4;
	}

	_createClass(ToolbarIcon, [{
		key: "materialDom",
		value: function materialDom(props) {
			return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
				"a",
				_extends({ className: "material-icons" }, props),
				props.children || 'menu'
			);
		}
	}]);

	return ToolbarIcon;
}(__WEBPACK_IMPORTED_MODULE_1__MaterialComponent__["a" /* default */]);

/**
 * @prop title = ''
 */


var ToolbarTitle = function (_MaterialComponent4) {
	_inherits(ToolbarTitle, _MaterialComponent4);

	function ToolbarTitle() {
		_classCallCheck(this, ToolbarTitle);

		var _this5 = _possibleConstructorReturn(this, (ToolbarTitle.__proto__ || Object.getPrototypeOf(ToolbarTitle)).call(this));

		_this5.componentName = "toolbar__title";
		return _this5;
	}

	_createClass(ToolbarTitle, [{
		key: "materialDom",
		value: function materialDom(props) {
			return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
				"span",
				props,
				props.children
			);
		}
	}]);

	return ToolbarTitle;
}(__WEBPACK_IMPORTED_MODULE_1__MaterialComponent__["a" /* default */]);

Toolbar.Section = ToolbarSection;
Toolbar.Icon = ToolbarIcon;
Toolbar.Title = ToolbarTitle;

/* harmony default export */ __webpack_exports__["a"] = (Toolbar);

/***/ }),
/* 25 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 26 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 27 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 28 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 29 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 30 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 31 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_preact_material_components_Fab__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_preact_material_components_Icon__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_preact_material_components_Fab_style_css__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_preact_material_components_Fab_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_preact_material_components_Fab_style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__FabPage_css__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__FabPage_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__FabPage_css__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var FabPage = function (_Component) {
	_inherits(FabPage, _Component);

	function FabPage() {
		_classCallCheck(this, FabPage);

		return _possibleConstructorReturn(this, (FabPage.__proto__ || Object.getPrototypeOf(FabPage)).apply(this, arguments));
	}

	_createClass(FabPage, [{
		key: 'render',
		value: function render() {
			return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
				'div',
				{ className: 'page-fab' },
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'div',
					{ className: 'mdc-typography--display2' },
					'Props '
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'ul',
					{ className: 'props' },
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						'li',
						{ className: 'prop' },
						__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
							'div',
							{ className: 'mdc-typography--headline' },
							'ripple'
						),
						__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
							'div',
							{ className: 'mdc-typography--subheading1' },
							'true/false'
						),
						__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
							'div',
							{ className: 'mdc-typography--body1' },
							'Adds riple effect to the fab'
						)
					),
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						'li',
						{ className: 'prop' },
						__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
							'div',
							{ className: 'mdc-typography--headline' },
							'plain'
						),
						__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
							'div',
							{ className: 'mdc-typography--subheading1' },
							'true/false'
						),
						__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
							'div',
							{ className: 'mdc-typography--body1' },
							'Adds plain colors to the fab'
						)
					),
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						'li',
						{ className: 'prop' },
						__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
							'div',
							{ className: 'mdc-typography--headline' },
							'mini'
						),
						__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
							'div',
							{ className: 'mdc-typography--subheading1' },
							'true/false'
						),
						__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
							'div',
							{ className: 'mdc-typography--body1' },
							'Shrinks the size of the fab'
						)
					)
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'div',
					{ className: 'mdc-typography--display2' },
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
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_2_preact_material_components_Icon__["a" /* default */], { icon: 'favorite_border' })
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Fab__["a" /* default */],
					{ ripple: true },
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_2_preact_material_components_Icon__["a" /* default */], { icon: 'favorite_border' })
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Fab__["a" /* default */],
					{ mini: true },
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_2_preact_material_components_Icon__["a" /* default */], { icon: 'favorite_border' })
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'div',
					{ className: 'mdc-typography--title' },
					'Plain '
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Fab__["a" /* default */],
					{ plain: true },
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_2_preact_material_components_Icon__["a" /* default */], { icon: 'favorite_border' })
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Fab__["a" /* default */],
					{ plain: true, ripple: true },
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_2_preact_material_components_Icon__["a" /* default */], { icon: 'favorite_border' })
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Fab__["a" /* default */],
					{ plain: true, mini: true },
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_2_preact_material_components_Icon__["a" /* default */], { icon: 'favorite_border' })
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'div',
					{ className: 'mdc-typography--title' },
					'Disabled '
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Fab__["a" /* default */],
					{ disabled: true },
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_2_preact_material_components_Icon__["a" /* default */], { icon: 'favorite_border' })
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Fab__["a" /* default */],
					{ disabled: true, ripple: true },
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_2_preact_material_components_Icon__["a" /* default */], { icon: 'favorite_border' })
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Fab__["a" /* default */],
					{ disabled: true, mini: true },
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_2_preact_material_components_Icon__["a" /* default */], { icon: 'favorite_border' })
				)
			);
		}
	}]);

	return FabPage;
}(__WEBPACK_IMPORTED_MODULE_0_preact__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (FabPage);

/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__MaterialComponent__ = __webpack_require__(1);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




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

			return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
				"button",
				_extends({}, props, { ref: function ref(control) {
						return _this2.control = control;
					} }),
				props.children
			);
		}
	}]);

	return Fab;
}(__WEBPACK_IMPORTED_MODULE_1__MaterialComponent__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (Fab);

/***/ }),
/* 53 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 54 */,
/* 55 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
],[11]);