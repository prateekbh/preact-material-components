module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+XMp":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Snackbar; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__("KM04");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__MaterialComponent__ = __webpack_require__("lhA9");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_snackbar___ = __webpack_require__("DzRl");
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
 * dismissesOnAction = true
 */

var Snackbar = function (_MaterialComponent) {
  _inherits(Snackbar, _MaterialComponent);

  function Snackbar() {
    _classCallCheck(this, Snackbar);

    var _this = _possibleConstructorReturn(this, _MaterialComponent.call(this));

    _this.componentName = "snackbar";
    return _this;
  }

  Snackbar.prototype.componentDidMount = function componentDidMount() {
    this.MDComponent = __WEBPACK_IMPORTED_MODULE_2__material_snackbar___["a" /* MDCSnackbar */].attachTo(this.control);
    if (this.props.dismissesOnAction === undefined || this.props.dismissesOnAction === null) {
      this.MDComponent.dismissesOnAction = true;
    } else {
      this.MDComponent.dismissesOnAction = this.props.dismissesOnAction;
    }
  };

  Snackbar.prototype.componentWillUnmount = function componentWillUnmount() {
    this.MDComponent.destroy && this.MDComponent.destroy();
  };

  Snackbar.prototype.materialDom = function materialDom(props) {
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
  };

  return Snackbar;
}(__WEBPACK_IMPORTED_MODULE_1__MaterialComponent__["a" /* default */]);



/***/ }),

/***/ "+fvO":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MDCSelectFoundation; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base__ = __webpack_require__("dSNL");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__("6Q09");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_menu__ = __webpack_require__("Qdhi");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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

    var _this = _possibleConstructorReturn(this, _MDCFoundation.call(this, _extends(MDCSelectFoundation.defaultAdapter, adapter)));

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

  MDCSelectFoundation.prototype.init = function init() {
    this.ctx_ = this.adapter_.create2dRenderingContext();
    this.adapter_.registerInteractionHandler('click', this.displayHandler_);
    this.adapter_.registerInteractionHandler('keydown', this.displayViaKeyboardHandler_);
    this.adapter_.registerInteractionHandler('keyup', this.displayViaKeyboardHandler_);
    this.adapter_.registerMenuInteractionHandler(__WEBPACK_IMPORTED_MODULE_2__material_menu__["b" /* MDCSimpleMenuFoundation */].strings.SELECTED_EVENT, this.selectionHandler_);
    this.adapter_.registerMenuInteractionHandler(__WEBPACK_IMPORTED_MODULE_2__material_menu__["b" /* MDCSimpleMenuFoundation */].strings.CANCEL_EVENT, this.cancelHandler_);
    this.resize();
  };

  MDCSelectFoundation.prototype.destroy = function destroy() {
    // Drop reference to context object to prevent potential leaks
    this.ctx_ = null;
    this.adapter_.deregisterInteractionHandler('click', this.displayHandler_);
    this.adapter_.deregisterInteractionHandler('keydown', this.displayViaKeyboardHandler_);
    this.adapter_.deregisterInteractionHandler('keyup', this.displayViaKeyboardHandler_);
    this.adapter_.deregisterMenuInteractionHandler(__WEBPACK_IMPORTED_MODULE_2__material_menu__["b" /* MDCSimpleMenuFoundation */].strings.SELECTED_EVENT, this.selectionHandler_);
    this.adapter_.deregisterMenuInteractionHandler(__WEBPACK_IMPORTED_MODULE_2__material_menu__["b" /* MDCSimpleMenuFoundation */].strings.CANCEL_EVENT, this.cancelHandler_);
  };

  MDCSelectFoundation.prototype.getValue = function getValue() {
    return this.selectedIndex_ >= 0 ? this.adapter_.getValueForOptionAtIndex(this.selectedIndex_) : '';
  };

  MDCSelectFoundation.prototype.getSelectedIndex = function getSelectedIndex() {
    return this.selectedIndex_;
  };

  MDCSelectFoundation.prototype.setSelectedIndex = function setSelectedIndex(index) {
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
  };

  MDCSelectFoundation.prototype.isDisabled = function isDisabled() {
    return this.disabled_;
  };

  MDCSelectFoundation.prototype.setDisabled = function setDisabled(disabled) {
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
  };

  MDCSelectFoundation.prototype.resize = function resize() {
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
  };

  MDCSelectFoundation.prototype.open_ = function open_() {
    var OPEN = MDCSelectFoundation.cssClasses.OPEN;

    var focusIndex = this.selectedIndex_ < 0 ? 0 : this.selectedIndex_;

    this.setMenuStylesForOpenAtIndex_(focusIndex);
    this.adapter_.addClass(OPEN);
    this.adapter_.openMenu(focusIndex);
  };

  MDCSelectFoundation.prototype.setMenuStylesForOpenAtIndex_ = function setMenuStylesForOpenAtIndex_(index) {
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
    var overflowsTop = adjustedTop < 0;
    var overflowsBottom = adjustedTop + menuHeight > innerHeight;
    if (overflowsTop) {
      adjustedTop = 0;
    } else if (overflowsBottom) {
      adjustedTop = Math.max(0, innerHeight - menuHeight);
    };

    this.adapter_.setMenuElStyle('left', left + 'px');
    this.adapter_.setMenuElStyle('top', adjustedTop + 'px');
    this.adapter_.setMenuElStyle('transform-origin', 'center ' + itemOffsetTop + 'px');
  };

  MDCSelectFoundation.prototype.close_ = function close_() {
    var OPEN = MDCSelectFoundation.cssClasses.OPEN;

    this.adapter_.removeClass(OPEN);
    this.adapter_.focus();
  };

  MDCSelectFoundation.prototype.handleDisplayViaKeyboard_ = function handleDisplayViaKeyboard_(evt) {
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
  };

  return MDCSelectFoundation;
}(__WEBPACK_IMPORTED_MODULE_0__material_base__["b" /* MDCFoundation */]);



/***/ }),

/***/ "+ieI":
/***/ (function(module, exports) {

module.exports = "import {h, Component} from 'preact';\r\nimport Button from 'preact-material-components/Button';\r\nimport 'preact-material-components/Button/style.css';\r\n\r\nexport default class ButtonsPage extends Component {\r\n  render(){\r\n    return (\r\n      <Button ripple={true} primary={true} raised={true}>\r\n        Flat button with ripple\r\n      </Button>\r\n      <Button href=\"/\">This button will be rendered as an anchor</Button>\r\n    );\r\n  }\r\n}\r\n"

/***/ }),

/***/ "/CSp":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MDCSlidableDrawerFoundation; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base__ = __webpack_require__("dSNL");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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

    var _this = _possibleConstructorReturn(this, _MDCFoundation.call(this, _extends(MDCSlidableDrawerFoundation.defaultAdapter, adapter)));

    _this.rootCssClass_ = rootCssClass;
    _this.animatingCssClass_ = animatingCssClass;
    _this.openCssClass_ = openCssClass;

    _this.transitionEndHandler_ = function (evt) {
      return _this.handleTransitionEnd_(evt);
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

  MDCSlidableDrawerFoundation.prototype.init = function init() {
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
  };

  MDCSlidableDrawerFoundation.prototype.destroy = function destroy() {
    this.adapter_.deregisterDrawerInteractionHandler('click', this.drawerClickHandler_);
    this.adapter_.deregisterDrawerInteractionHandler('touchstart', this.componentTouchStartHandler_);
    this.adapter_.deregisterInteractionHandler('touchmove', this.componentTouchMoveHandler_);
    this.adapter_.deregisterInteractionHandler('touchend', this.componentTouchEndHandler_);
    // Deregister the document keydown handler just in case the component is destroyed while the menu is open.
    this.adapter_.deregisterDocumentKeydownHandler(this.documentKeydownHandler_);
  };

  MDCSlidableDrawerFoundation.prototype.open = function open() {
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
  };

  MDCSlidableDrawerFoundation.prototype.close = function close() {
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
  };

  MDCSlidableDrawerFoundation.prototype.isOpen = function isOpen() {
    return this.isOpen_;
  };

  /**
   *  Render all children of the drawer inert when it's closed.
   */


  MDCSlidableDrawerFoundation.prototype.detabinate_ = function detabinate_() {
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
  };

  /**
   *  Make all children of the drawer tabbable again when it's open.
   */


  MDCSlidableDrawerFoundation.prototype.retabinate_ = function retabinate_() {
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
  };

  MDCSlidableDrawerFoundation.prototype.handleTouchStart_ = function handleTouchStart_(evt) {
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
  };

  MDCSlidableDrawerFoundation.prototype.handleTouchMove_ = function handleTouchMove_(evt) {
    if (evt.pointerType && evt.pointerType !== 'touch') {
      return;
    }

    this.currentX_ = evt.touches ? evt.touches[0].pageX : evt.pageX;
  };

  MDCSlidableDrawerFoundation.prototype.handleTouchEnd_ = function handleTouchEnd_(evt) {
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
  };

  MDCSlidableDrawerFoundation.prototype.prepareForTouchEnd_ = function prepareForTouchEnd_() {
    cancelAnimationFrame(this.updateRaf_);
    this.adapter_.setTranslateX(null);
  };

  MDCSlidableDrawerFoundation.prototype.updateDrawer_ = function updateDrawer_() {
    this.updateRaf_ = requestAnimationFrame(this.updateDrawer_.bind(this));
    this.adapter_.setTranslateX(this.newPosition_);
  };

  MDCSlidableDrawerFoundation.prototype.isRootTransitioningEventTarget_ = function isRootTransitioningEventTarget_() {
    // Classes extending MDCSlidableDrawerFoundation should implement this method to return true or false
    // if the event target is the root event target currently transitioning.
    return false;
  };

  MDCSlidableDrawerFoundation.prototype.handleTransitionEnd_ = function handleTransitionEnd_(evt) {
    if (this.isRootTransitioningEventTarget_(evt.target)) {
      this.adapter_.removeClass(this.animatingCssClass_);
      this.adapter_.deregisterTransitionEndHandler(this.transitionEndHandler_);
    }
  };

  _createClass(MDCSlidableDrawerFoundation, [{
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

/***/ "/QC5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export subscribers */
/* unused harmony export getCurrentUrl */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return route; });
/* unused harmony export Router */
/* unused harmony export Route */
/* unused harmony export Link */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__("KM04");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);


var EMPTY$1 = {};

function assign(obj, props) {
	// eslint-disable-next-line guard-for-in
	for (var i in props) {
		obj[i] = props[i];
	}
	return obj;
}

function exec(url, route, opts) {
	if (opts === void 0) opts = EMPTY$1;

	var reg = /(?:\?([^#]*))?(#.*)?$/,
	    c = url.match(reg),
	    matches = {},
	    ret;
	if (c && c[1]) {
		var p = c[1].split('&');
		for (var i = 0; i < p.length; i++) {
			var r = p[i].split('=');
			matches[decodeURIComponent(r[0])] = decodeURIComponent(r.slice(1).join('='));
		}
	}
	url = segmentize(url.replace(reg, ''));
	route = segmentize(route || '');
	var max = Math.max(url.length, route.length);
	for (var i$1 = 0; i$1 < max; i$1++) {
		if (route[i$1] && route[i$1].charAt(0) === ':') {
			var param = route[i$1].replace(/(^\:|[+*?]+$)/g, ''),
			    flags = (route[i$1].match(/[+*?]+$/) || EMPTY$1)[0] || '',
			    plus = ~flags.indexOf('+'),
			    star = ~flags.indexOf('*'),
			    val = url[i$1] || '';
			if (!val && !star && (flags.indexOf('?') < 0 || plus)) {
				ret = false;
				break;
			}
			matches[param] = decodeURIComponent(val);
			if (plus || star) {
				matches[param] = url.slice(i$1).map(decodeURIComponent).join('/');
				break;
			}
		} else if (route[i$1] !== url[i$1]) {
			ret = false;
			break;
		}
	}
	if (opts.default !== true && ret === false) {
		return false;
	}
	return matches;
}

function pathRankSort(a, b) {
	var aAttr = a.attributes || EMPTY$1,
	    bAttr = b.attributes || EMPTY$1;
	if (aAttr.default) {
		return 1;
	}
	if (bAttr.default) {
		return -1;
	}
	var diff = rank(aAttr.path) - rank(bAttr.path);
	return diff || aAttr.path.length - bAttr.path.length;
}

function segmentize(url) {
	return strip(url).split('/');
}

function rank(url) {
	return (strip(url).match(/\/+/g) || '').length;
}

function strip(url) {
	return url.replace(/(^\/+|\/+$)/g, '');
}

var customHistory = null;

var ROUTERS = [];

var subscribers = [];

var EMPTY = {};

function isPreactElement(node) {
	return node.__preactattr_ != null || typeof Symbol !== 'undefined' && node[Symbol.for('preactattr')] != null;
}

function setUrl(url, type) {
	if (type === void 0) type = 'push';

	if (customHistory && customHistory[type]) {
		customHistory[type](url);
	} else if (typeof history !== 'undefined' && history[type + 'State']) {
		history[type + 'State'](null, null, url);
	}
}

function getCurrentUrl() {
	var url;
	if (customHistory && customHistory.location) {
		url = customHistory.location;
	} else if (customHistory && customHistory.getCurrentLocation) {
		url = customHistory.getCurrentLocation();
	} else {
		url = typeof location !== 'undefined' ? location : EMPTY;
	}
	return "" + (url.pathname || '') + (url.search || '');
}

function route(url, replace) {
	if (replace === void 0) replace = false;

	if (typeof url !== 'string' && url.url) {
		replace = url.replace;
		url = url.url;
	}

	// only push URL into history if we can handle it
	if (canRoute(url)) {
		setUrl(url, replace ? 'replace' : 'push');
	}

	return routeTo(url);
}

/** Check if the given URL can be handled by any router instances. */
function canRoute(url) {
	for (var i = ROUTERS.length; i--;) {
		if (ROUTERS[i].canRoute(url)) {
			return true;
		}
	}
	return false;
}

/** Tell all router instances to handle the given URL.  */
function routeTo(url) {
	var didRoute = false;
	for (var i = 0; i < ROUTERS.length; i++) {
		if (ROUTERS[i].routeTo(url) === true) {
			didRoute = true;
		}
	}
	for (var i$1 = subscribers.length; i$1--;) {
		subscribers[i$1](url);
	}
	return didRoute;
}

function routeFromLink(node) {
	// only valid elements
	if (!node || !node.getAttribute) {
		return;
	}

	var href = node.getAttribute('href'),
	    target = node.getAttribute('target');

	// ignore links with targets and non-path URLs
	if (!href || !href.match(/^\//g) || target && !target.match(/^_?self$/i)) {
		return;
	}

	// attempt to route, if no match simply cede control to browser
	return route(href);
}

function handleLinkClick(e) {
	if (e.button == 0) {
		routeFromLink(e.currentTarget || e.target || this);
		return prevent(e);
	}
}

function prevent(e) {
	if (e) {
		if (e.stopImmediatePropagation) {
			e.stopImmediatePropagation();
		}
		if (e.stopPropagation) {
			e.stopPropagation();
		}
		e.preventDefault();
	}
	return false;
}

function delegateLinkHandler(e) {
	// ignore events the browser takes care of already:
	if (e.ctrlKey || e.metaKey || e.altKey || e.shiftKey || e.button !== 0) {
		return;
	}

	var t = e.target;
	do {
		if (String(t.nodeName).toUpperCase() === 'A' && t.getAttribute('href') && isPreactElement(t)) {
			if (t.hasAttribute('native')) {
				return;
			}
			// if link is handled by the router, prevent browser defaults
			if (routeFromLink(t)) {
				return prevent(e);
			}
		}
	} while (t = t.parentNode);
}

var eventListenersInitialized = false;

function initEventListeners() {
	if (eventListenersInitialized) {
		return;
	}

	if (typeof addEventListener === 'function') {
		if (!customHistory) {
			addEventListener('popstate', function () {
				return routeTo(getCurrentUrl());
			});
		}
		addEventListener('click', delegateLinkHandler);
	}
	eventListenersInitialized = true;
}

var Router = function (Component$$1) {
	function Router(props) {
		Component$$1.call(this, props);
		if (props.history) {
			customHistory = props.history;
		}

		this.state = {
			url: props.url || getCurrentUrl()
		};

		initEventListeners();
	}

	if (Component$$1) Router.__proto__ = Component$$1;
	Router.prototype = Object.create(Component$$1 && Component$$1.prototype);
	Router.prototype.constructor = Router;

	Router.prototype.shouldComponentUpdate = function shouldComponentUpdate(props) {
		if (props.static !== true) {
			return true;
		}
		return props.url !== this.props.url || props.onChange !== this.props.onChange;
	};

	/** Check if the given URL can be matched against any children */
	Router.prototype.canRoute = function canRoute(url) {
		return this.getMatchingChildren(this.props.children, url, false).length > 0;
	};

	/** Re-render children with a new URL to match against. */
	Router.prototype.routeTo = function routeTo(url) {
		this._didRoute = false;
		this.setState({ url: url });

		// if we're in the middle of an update, don't synchronously re-route.
		if (this.updating) {
			return this.canRoute(url);
		}

		this.forceUpdate();
		return this._didRoute;
	};

	Router.prototype.componentWillMount = function componentWillMount() {
		ROUTERS.push(this);
		this.updating = true;
	};

	Router.prototype.componentDidMount = function componentDidMount() {
		var this$1 = this;

		if (customHistory) {
			this.unlisten = customHistory.listen(function (location) {
				this$1.routeTo("" + (location.pathname || '') + (location.search || ''));
			});
		}
		this.updating = false;
	};

	Router.prototype.componentWillUnmount = function componentWillUnmount() {
		if (typeof this.unlisten === 'function') {
			this.unlisten();
		}
		ROUTERS.splice(ROUTERS.indexOf(this), 1);
	};

	Router.prototype.componentWillUpdate = function componentWillUpdate() {
		this.updating = true;
	};

	Router.prototype.componentDidUpdate = function componentDidUpdate() {
		this.updating = false;
	};

	Router.prototype.getMatchingChildren = function getMatchingChildren(children, url, invoke) {
		return children.slice().sort(pathRankSort).map(function (vnode) {
			var attrs = vnode.attributes || {},
			    path = attrs.path,
			    matches = exec(url, path, attrs);
			if (matches) {
				if (invoke !== false) {
					var newProps = { url: url, matches: matches };
					assign(newProps, matches);
					return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["cloneElement"])(vnode, newProps);
				}
				return vnode;
			}
			return false;
		}).filter(Boolean);
	};

	Router.prototype.render = function render(ref, ref$1) {
		var children = ref.children;
		var onChange = ref.onChange;
		var url = ref$1.url;

		var active = this.getMatchingChildren(children, url, true);

		var current = active[0] || null;
		this._didRoute = !!current;

		var previous = this.previousUrl;
		if (url !== previous) {
			this.previousUrl = url;
			if (typeof onChange === 'function') {
				onChange({
					router: this,
					url: url,
					previous: previous,
					active: active,
					current: current
				});
			}
		}

		return current;
	};

	return Router;
}(__WEBPACK_IMPORTED_MODULE_0_preact__["Component"]);

var Link = function Link(props) {
	return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('a', assign({ onClick: handleLinkClick }, props));
};

var Route = function Route(props) {
	return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(props.component, props);
};

Router.subscribers = subscribers;
Router.getCurrentUrl = getCurrentUrl;
Router.route = route;
Router.Router = Router;
Router.Route = Route;
Router.Link = Link;

/* harmony default export */ __webpack_exports__["a"] = (Router);
//# sourceMappingURL=preact-router.es.js.map

/***/ }),

/***/ "/sI/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MDCTemporaryDrawerFoundation; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__slidable__ = __webpack_require__("VqTd");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__("byUl");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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
      return _extends(__WEBPACK_IMPORTED_MODULE_0__slidable__["a" /* MDCSlidableDrawerFoundation */].defaultAdapter, {
        addBodyClass: function addBodyClass() /* className: string */{},
        removeBodyClass: function removeBodyClass() /* className: string */{},
        isDrawer: function isDrawer() {
          return false;
        },
        updateCssVariable: function updateCssVariable() /* value: string */{}
      });
    }
  }]);

  function MDCTemporaryDrawerFoundation(adapter) {
    _classCallCheck(this, MDCTemporaryDrawerFoundation);

    var _this = _possibleConstructorReturn(this, _MDCSlidableDrawerFou.call(this, _extends(MDCTemporaryDrawerFoundation.defaultAdapter, adapter), MDCTemporaryDrawerFoundation.cssClasses.ROOT, MDCTemporaryDrawerFoundation.cssClasses.ANIMATING, MDCTemporaryDrawerFoundation.cssClasses.OPEN));

    _this.componentClickHandler_ = function () {
      return _this.close();
    };
    return _this;
  }

  MDCTemporaryDrawerFoundation.prototype.init = function init() {
    _MDCSlidableDrawerFou.prototype.init.call(this);

    // Make browser aware of custom property being used in this element.
    // Workaround for certain types of hard-to-reproduce heisenbugs.
    this.adapter_.updateCssVariable(0);
    this.adapter_.registerInteractionHandler('click', this.componentClickHandler_);
  };

  MDCTemporaryDrawerFoundation.prototype.destroy = function destroy() {
    _MDCSlidableDrawerFou.prototype.destroy.call(this);

    this.adapter_.deregisterInteractionHandler('click', this.componentClickHandler_);
    this.enableScroll_();
  };

  MDCTemporaryDrawerFoundation.prototype.open = function open() {
    this.disableScroll_();
    // Make sure custom property values are cleared before starting.
    this.adapter_.updateCssVariable('');

    _MDCSlidableDrawerFou.prototype.open.call(this);
  };

  MDCTemporaryDrawerFoundation.prototype.close = function close() {
    // Make sure custom property values are cleared before making any changes.
    this.adapter_.updateCssVariable('');

    _MDCSlidableDrawerFou.prototype.close.call(this);
  };

  MDCTemporaryDrawerFoundation.prototype.prepareForTouchEnd_ = function prepareForTouchEnd_() {
    _MDCSlidableDrawerFou.prototype.prepareForTouchEnd_.call(this);

    this.adapter_.updateCssVariable('');
  };

  MDCTemporaryDrawerFoundation.prototype.updateDrawer_ = function updateDrawer_() {
    _MDCSlidableDrawerFou.prototype.updateDrawer_.call(this);

    var newOpacity = Math.max(0, 1 + this.direction_ * (this.newPosition_ / this.drawerWidth_));
    this.adapter_.updateCssVariable(newOpacity);
  };

  MDCTemporaryDrawerFoundation.prototype.isRootTransitioningEventTarget_ = function isRootTransitioningEventTarget_(el) {
    return this.adapter_.isDrawer(el);
  };

  MDCTemporaryDrawerFoundation.prototype.handleTransitionEnd_ = function handleTransitionEnd_(evt) {
    _MDCSlidableDrawerFou.prototype.handleTransitionEnd_.call(this, evt);
    if (!this.isOpen_) {
      this.enableScroll_();
    }
  };

  MDCTemporaryDrawerFoundation.prototype.disableScroll_ = function disableScroll_() {
    this.adapter_.addBodyClass(__WEBPACK_IMPORTED_MODULE_1__constants__["a" /* cssClasses */].SCROLL_LOCK);
  };

  MDCTemporaryDrawerFoundation.prototype.enableScroll_ = function enableScroll_() {
    this.adapter_.removeBodyClass(__WEBPACK_IMPORTED_MODULE_1__constants__["a" /* cssClasses */].SCROLL_LOCK);
  };

  return MDCTemporaryDrawerFoundation;
}(__WEBPACK_IMPORTED_MODULE_0__slidable__["a" /* MDCSlidableDrawerFoundation */]);



/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("JkW7");


/***/ }),

/***/ "0Gzv":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__("KM04");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_preact_material_components_List__ = __webpack_require__("E7XR");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_component_table__ = __webpack_require__("B/9r");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_code_block__ = __webpack_require__("F4jb");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__style__ = __webpack_require__("Hb3h");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sample_txt__ = __webpack_require__("pdCL");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sample_txt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__sample_txt__);


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var _ref = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	'div',
	{ className: 'mdc-typography--display1' },
	'Sample code '
);

var _ref2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	__WEBPACK_IMPORTED_MODULE_3__components_code_block__["a" /* default */],
	null,
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
		'code',
		{ 'class': 'lang-js' },
		__WEBPACK_IMPORTED_MODULE_5__sample_txt___default.a
	)
);

var _ref3 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	'div',
	{ className: 'mdc-typography--display1' },
	'Original documentation'
);

var _ref4 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
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
);

var _ref5 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	'div',
	{ className: 'mdc-typography--display1' },
	'Demo '
);

var _ref6 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	'div',
	{ className: 'mdc-typography--title' },
	'Normal '
);

var _ref7 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
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
);

var _ref8 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	'div',
	{ className: 'mdc-typography--title' },
	'Action items '
);

var _ref9 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
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
);

var _ref10 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	'div',
	{ className: 'mdc-typography--title' },
	'Two line '
);

var _ref11 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
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
);

var ListPage = function (_Component) {
	_inherits(ListPage, _Component);

	function ListPage() {
		_classCallCheck(this, ListPage);

		var _this = _possibleConstructorReturn(this, _Component.call(this));

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

	ListPage.prototype.render = function render() {
		return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
			'div',
			{ className: 'page-list' },
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_2__components_component_table__["a" /* default */], { data: this.propsTable }),
			_ref,
			_ref2,
			_ref3,
			_ref4,
			_ref5,
			_ref6,
			_ref7,
			_ref8,
			_ref9,
			_ref10,
			_ref11
		);
	};

	return ListPage;
}(__WEBPACK_IMPORTED_MODULE_0_preact__["Component"]);



/***/ }),

/***/ "1Eow":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FabPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__("KM04");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_preact_material_components_Fab__ = __webpack_require__("jGKv");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_preact_material_components_Icon__ = __webpack_require__("MeGi");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_component_table__ = __webpack_require__("B/9r");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_code_block__ = __webpack_require__("F4jb");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__style__ = __webpack_require__("6Np5");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__sample_txt__ = __webpack_require__("bKgJ");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__sample_txt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__sample_txt__);


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var _ref = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	'div',
	{ className: 'mdc-typography--display1' },
	'Sample code '
);

var _ref2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	__WEBPACK_IMPORTED_MODULE_4__components_code_block__["a" /* default */],
	null,
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
		'code',
		{ 'class': 'lang-js' },
		__WEBPACK_IMPORTED_MODULE_6__sample_txt___default.a
	)
);

var _ref3 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	'div',
	{ className: 'mdc-typography--display1' },
	'Original documentation'
);

var _ref4 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
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
);

var _ref5 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	'div',
	{ className: 'mdc-typography--display1' },
	'Demo '
);

var _ref6 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	'div',
	{ className: 'mdc-typography--title' },
	'Defaults '
);

var _ref7 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Fab__["a" /* default */],
	null,
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
		__WEBPACK_IMPORTED_MODULE_2_preact_material_components_Icon__["a" /* default */],
		null,
		'favorite_border'
	)
);

var _ref8 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Fab__["a" /* default */],
	{ ripple: true },
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
		__WEBPACK_IMPORTED_MODULE_2_preact_material_components_Icon__["a" /* default */],
		null,
		'favorite_border'
	)
);

var _ref9 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Fab__["a" /* default */],
	{ mini: true },
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
		__WEBPACK_IMPORTED_MODULE_2_preact_material_components_Icon__["a" /* default */],
		null,
		'favorite_border'
	)
);

var _ref10 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	'div',
	{ className: 'mdc-typography--title' },
	'Plain '
);

var _ref11 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Fab__["a" /* default */],
	{ plain: true },
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
		__WEBPACK_IMPORTED_MODULE_2_preact_material_components_Icon__["a" /* default */],
		null,
		'favorite_border'
	)
);

var _ref12 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Fab__["a" /* default */],
	{ plain: true, ripple: true },
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
		__WEBPACK_IMPORTED_MODULE_2_preact_material_components_Icon__["a" /* default */],
		null,
		'favorite_border'
	)
);

var _ref13 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Fab__["a" /* default */],
	{ plain: true, mini: true },
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
		__WEBPACK_IMPORTED_MODULE_2_preact_material_components_Icon__["a" /* default */],
		null,
		'favorite_border'
	)
);

var _ref14 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	'div',
	{ className: 'mdc-typography--title' },
	'Disabled '
);

var _ref15 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Fab__["a" /* default */],
	{ disabled: true },
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
		__WEBPACK_IMPORTED_MODULE_2_preact_material_components_Icon__["a" /* default */],
		null,
		'favorite_border'
	)
);

var _ref16 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Fab__["a" /* default */],
	{ disabled: true, ripple: true },
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
		__WEBPACK_IMPORTED_MODULE_2_preact_material_components_Icon__["a" /* default */],
		null,
		'favorite_border'
	)
);

var _ref17 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Fab__["a" /* default */],
	{ disabled: true, mini: true },
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
		__WEBPACK_IMPORTED_MODULE_2_preact_material_components_Icon__["a" /* default */],
		null,
		'favorite_border'
	)
);

var FabPage = function (_Component) {
	_inherits(FabPage, _Component);

	function FabPage() {
		_classCallCheck(this, FabPage);

		var _this = _possibleConstructorReturn(this, _Component.call(this));

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

	FabPage.prototype.render = function render() {
		return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
			'div',
			{ className: 'page-fab' },
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_3__components_component_table__["a" /* default */], { data: this.propsTable }),
			_ref,
			_ref2,
			_ref3,
			_ref4,
			_ref5,
			_ref6,
			_ref7,
			_ref8,
			_ref9,
			_ref10,
			_ref11,
			_ref12,
			_ref13,
			_ref14,
			_ref15,
			_ref16,
			_ref17
		);
	};

	return FabPage;
}(__WEBPACK_IMPORTED_MODULE_0_preact__["Component"]);



/***/ }),

/***/ "1n7e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IconPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__("KM04");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_preact_material_components_Icon__ = __webpack_require__("MeGi");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_component_table__ = __webpack_require__("B/9r");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_code_block__ = __webpack_require__("F4jb");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sample_txt__ = __webpack_require__("pu9d");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sample_txt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__sample_txt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__linktag_txt__ = __webpack_require__("V4tZ");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__linktag_txt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__linktag_txt__);


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var _ref = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	'div',
	{ className: 'mdc-typography--display1' },
	'Sample code '
);

var _ref2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	__WEBPACK_IMPORTED_MODULE_3__components_code_block__["a" /* default */],
	null,
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
		'code',
		{ 'class': 'lang-js' },
		__WEBPACK_IMPORTED_MODULE_4__sample_txt___default.a
	)
);

var _ref3 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	'div',
	{ className: 'mdc-typography--display1' },
	'Demo '
);

var _ref4 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	'div',
	null,
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
		__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Icon__["a" /* default */],
		null,
		'menu'
	)
);

var _ref5 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	'div',
	null,
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
		__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Icon__["a" /* default */],
		null,
		'favorite_border'
	)
);

var _ref6 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	'div',
	{ className: 'mdc-typography--title' },
	'Note '
);

var _ref7 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
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
			__WEBPACK_IMPORTED_MODULE_3__components_code_block__["a" /* default */],
			null,
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
				'code',
				{ 'class': 'lang-html' },
				__WEBPACK_IMPORTED_MODULE_5__linktag_txt___default.a
			)
		)
	)
);

var IconPage = function (_Component) {
	_inherits(IconPage, _Component);

	function IconPage() {
		_classCallCheck(this, IconPage);

		var _this = _possibleConstructorReturn(this, _Component.call(this));

		_this.propsTable = [{
			component: 'Icon',
			props: []
		}];
		return _this;
	}

	IconPage.prototype.render = function render() {
		return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
			'div',
			null,
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_2__components_component_table__["a" /* default */], { data: this.propsTable }),
			_ref,
			_ref2,
			_ref3,
			_ref4,
			_ref5,
			_ref6,
			_ref7
		);
	};

	return IconPage;
}(__WEBPACK_IMPORTED_MODULE_0_preact__["Component"]);



/***/ }),

/***/ "1nHr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MDCTab; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base_component__ = __webpack_require__("EQDb");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_ripple__ = __webpack_require__("vkNc");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__("bEsy");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__foundation__ = __webpack_require__("zQnS");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_3__foundation__["a"]; });
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

  MDCTab.attachTo = function attachTo(root) {
    return new MDCTab(root);
  };

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
  }]);

  function MDCTab() {
    _classCallCheck(this, MDCTab);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, _MDCComponent.call.apply(_MDCComponent, [this].concat(args)));

    _this.ripple_ = __WEBPACK_IMPORTED_MODULE_1__material_ripple__["a" /* MDCRipple */].attachTo(_this.root_);
    return _this;
  }

  MDCTab.prototype.destroy = function destroy() {
    this.ripple_.destroy();
    _MDCComponent.prototype.destroy.call(this);
  };

  MDCTab.prototype.getDefaultFoundation = function getDefaultFoundation() {
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
        return _this2.emit(__WEBPACK_IMPORTED_MODULE_3__foundation__["a" /* default */].strings.SELECTED_EVENT, { tab: _this2 }, true);
      }
    });
  };

  MDCTab.prototype.initialSyncWithDOM = function initialSyncWithDOM() {
    this.isActive = this.root_.classList.contains(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */].ACTIVE);
  };

  MDCTab.prototype.measureSelf = function measureSelf() {
    this.foundation_.measureSelf();
  };

  return MDCTab;
}(__WEBPACK_IMPORTED_MODULE_0__material_base_component__["a" /* default */]);

/***/ }),

/***/ "1xp1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cssClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return strings; });
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
  INDICATOR_SELECTOR: '.mdc-tab-bar__indicator',
  CHANGE_EVENT: 'MDCTabBar:change'
};

/***/ }),

/***/ "20Eo":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SwitchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__("KM04");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_preact_material_components_Switch__ = __webpack_require__("wfAA");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_component_table__ = __webpack_require__("B/9r");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_code_block__ = __webpack_require__("F4jb");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__style__ = __webpack_require__("fWpu");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sample_txt__ = __webpack_require__("4igI");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sample_txt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__sample_txt__);


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var _ref = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	'div',
	{ className: 'mdc-typography--display1' },
	'Sample code '
);

var _ref2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	__WEBPACK_IMPORTED_MODULE_3__components_code_block__["a" /* default */],
	null,
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
		'code',
		{ 'class': 'lang-js' },
		__WEBPACK_IMPORTED_MODULE_5__sample_txt___default.a
	)
);

var _ref3 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	'div',
	{ className: 'mdc-typography--display1' },
	'Original documentation'
);

var _ref4 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
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
);

var _ref5 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	'div',
	{ className: 'mdc-typography--display1' },
	'Demo '
);

var _ref6 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	'div',
	{ className: 'mdc-typography--title' },
	'Default '
);

var _ref7 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Switch__["a" /* default */], null);

var _ref8 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	'div',
	{ className: 'mdc-typography--title' },
	'Disabled '
);

var _ref9 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Switch__["a" /* default */], { disabled: true });

var SwitchPage = function (_Component) {
	_inherits(SwitchPage, _Component);

	function SwitchPage() {
		_classCallCheck(this, SwitchPage);

		var _this = _possibleConstructorReturn(this, _Component.call(this));

		_this.propsTable = [{
			component: 'Switch',
			props: [{
				name: 'disabled',
				description: 'Disables the switch.'
			}]
		}];
		return _this;
	}

	SwitchPage.prototype.render = function render() {
		return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
			'div',
			{ className: 'page-switch' },
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_2__components_component_table__["a" /* default */], { data: this.propsTable }),
			_ref,
			_ref2,
			_ref3,
			_ref4,
			_ref5,
			_ref6,
			_ref7,
			_ref8,
			_ref9
		);
	};

	return SwitchPage;
}(__WEBPACK_IMPORTED_MODULE_0_preact__["Component"]);



/***/ }),

/***/ "2XtF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cssClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return strings; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__slidable__ = __webpack_require__("VqTd");
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
  FOCUSABLE_ELEMENTS: __WEBPACK_IMPORTED_MODULE_0__slidable__["b" /* FOCUSABLE_ELEMENTS */],
  OPEN_EVENT: 'MDCPersistentDrawer:open',
  CLOSE_EVENT: 'MDCPersistentDrawer:close'
};

/***/ }),

/***/ "3IxH":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "3fZX":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MDCLinearProgress; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base__ = __webpack_require__("dSNL");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__foundation__ = __webpack_require__("x8H2");
/* unused harmony reexport MDCLinearProgressFoundation */
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






var MDCLinearProgress = function (_MDCComponent) {
  _inherits(MDCLinearProgress, _MDCComponent);

  function MDCLinearProgress() {
    _classCallCheck(this, MDCLinearProgress);

    return _possibleConstructorReturn(this, _MDCComponent.apply(this, arguments));
  }

  MDCLinearProgress.attachTo = function attachTo(root) {
    return new MDCLinearProgress(root);
  };

  MDCLinearProgress.prototype.open = function open() {
    this.foundation_.open();
  };

  MDCLinearProgress.prototype.close = function close() {
    this.foundation_.close();
  };

  MDCLinearProgress.prototype.getDefaultFoundation = function getDefaultFoundation() {
    var _this2 = this;

    return new __WEBPACK_IMPORTED_MODULE_1__foundation__["a" /* default */]({
      addClass: function addClass(className) {
        return _this2.root_.classList.add(className);
      },
      getPrimaryBar: function getPrimaryBar() {
        return _this2.root_.querySelector(__WEBPACK_IMPORTED_MODULE_1__foundation__["a" /* default */].strings.PRIMARY_BAR_SELECTOR);
      },
      getBuffer: function getBuffer() {
        return _this2.root_.querySelector(__WEBPACK_IMPORTED_MODULE_1__foundation__["a" /* default */].strings.BUFFER_SELECTOR);
      },
      hasClass: function hasClass(className) {
        return _this2.root_.classList.contains(className);
      },
      removeClass: function removeClass(className) {
        return _this2.root_.classList.remove(className);
      },
      setStyle: function setStyle(el, styleProperty, value) {
        return el.style[styleProperty] = value;
      }
    });
  };

  _createClass(MDCLinearProgress, [{
    key: 'determinate',
    set: function set(value) {
      this.foundation_.setDeterminate(value);
    }
  }, {
    key: 'progress',
    set: function set(value) {
      this.foundation_.setProgress(value);
    }
  }, {
    key: 'buffer',
    set: function set(value) {
      this.foundation_.setBuffer(value);
    }
  }, {
    key: 'reverse',
    set: function set(value) {
      this.foundation_.setReverse(value);
    }
  }]);

  return MDCLinearProgress;
}(__WEBPACK_IMPORTED_MODULE_0__material_base__["a" /* MDCComponent */]);

/***/ }),

/***/ "3onB":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "423E":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__("KM04");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__MaterialComponent__ = __webpack_require__("lhA9");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_tabs__ = __webpack_require__("pZQA");
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
 * @prop indicator-accent = false
 * @prop icon-tab-bar = false
 * @prop icons-with-text = false
 * @prop scroller = false
 */

var Tabs = function (_MaterialComponent) {
  _inherits(Tabs, _MaterialComponent);

  function Tabs() {
    _classCallCheck(this, Tabs);

    var _this = _possibleConstructorReturn(this, _MaterialComponent.call(this));

    _this.componentName = "tab-bar";
    _this._mdcProps = ["indicator-accent", "icon-tab-bar", "icons-with-text", "scroller"];
    return _this;
  }

  Tabs.prototype.componentDidMount = function componentDidMount() {
    this.MDComponent = new __WEBPACK_IMPORTED_MODULE_2__material_tabs__["a" /* MDCTabBar */](this.control);
  };

  Tabs.prototype.componentWillUnmount = function componentWillUnmount() {
    this.MDComponent.destroy && this.MDComponent.destroy();
  };

  Tabs.prototype.materialDom = function materialDom(allprops) {
    var _this2 = this;

    var className = allprops.className,
        props = _objectWithoutProperties(allprops, ["className"]);

    if (props.scroller) {
      className = "mdc-tab-bar-scroller__scroll-frame__tabs";
    } else {
      className = "";
    }
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("nav", _extends({
      className: className,
      role: "tablist"
    }, props, {
      ref: function ref(control) {
        return _this2.control = control;
      }
    }), props.children, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("span", { "class": "mdc-tab-bar__indicator" }));
  };

  return Tabs;
}(__WEBPACK_IMPORTED_MODULE_1__MaterialComponent__["a" /* default */]);

var TabBarScroller = function (_MaterialComponent2) {
  _inherits(TabBarScroller, _MaterialComponent2);

  function TabBarScroller() {
    _classCallCheck(this, TabBarScroller);

    var _this3 = _possibleConstructorReturn(this, _MaterialComponent2.call(this));

    _this3.componentName = "tab-bar-scroller";
    return _this3;
  }

  TabBarScroller.prototype.componentDidMount = function componentDidMount() {
    this.MDComponent = new __WEBPACK_IMPORTED_MODULE_2__material_tabs__["b" /* MDCTabBarScroller */](this.control);
  };

  TabBarScroller.prototype.componentWillUnmount = function componentWillUnmount() {
    this.MDComponent.destroy && this.MDComponent.destroy();
  };

  TabBarScroller.prototype.materialDom = function materialDom(props) {
    var _this4 = this;

    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("div", _extends({}, props, { ref: function ref(control) {
        return _this4.control = control;
      } }), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("div", { className: "mdc-tab-bar-scroller__indicator mdc-tab-bar-scroller__indicator--back" }, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("a", {
      className: "mdc-tab-bar-scroller__indicator__inner material-icons",
      href: "#",
      "aria-label": "scroll back button"
    }, "navigate_before")), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("div", { className: "mdc-tab-bar-scroller__scroll-frame" }, props.children), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("div", { className: "mdc-tab-bar-scroller__indicator mdc-tab-bar-scroller__indicator--forward" }, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("a", {
      className: "mdc-tab-bar-scroller__indicator__inner material-icons",
      href: "#",
      "aria-label": "scroll forward button"
    }, "navigate_next")));
  };

  return TabBarScroller;
}(__WEBPACK_IMPORTED_MODULE_1__MaterialComponent__["a" /* default */]);

/**
 * @prop active = false
 */


var Tab = function (_MaterialComponent3) {
  _inherits(Tab, _MaterialComponent3);

  function Tab() {
    _classCallCheck(this, Tab);

    var _this5 = _possibleConstructorReturn(this, _MaterialComponent3.call(this));

    _this5.componentName = "tab";
    _this5._mdcProps = ["active"];
    return _this5;
  }

  Tab.prototype.materialDom = function materialDom(props) {
    var _this6 = this;

    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("a", _extends({ role: "tab" }, props, { ref: function ref(control) {
        return _this6.control = control;
      } }), props.children);
  };

  return Tab;
}(__WEBPACK_IMPORTED_MODULE_1__MaterialComponent__["a" /* default */]);

var TabIconLabel = function (_MaterialComponent4) {
  _inherits(TabIconLabel, _MaterialComponent4);

  function TabIconLabel() {
    _classCallCheck(this, TabIconLabel);

    var _this7 = _possibleConstructorReturn(this, _MaterialComponent4.call(this));

    _this7.componentName = "tab__icon-text";
    return _this7;
  }

  TabIconLabel.prototype.materialDom = function materialDom(props) {
    var _this8 = this;

    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("span", _extends({}, props, { ref: function ref(control) {
        return _this8.control = control;
      } }), props.children);
  };

  return TabIconLabel;
}(__WEBPACK_IMPORTED_MODULE_1__MaterialComponent__["a" /* default */]);

Tabs.TabBarScroller = TabBarScroller;
Tabs.Tab = Tab;
Tabs.TabIconLabel = TabIconLabel;
/* harmony default export */ __webpack_exports__["a"] = (Tabs);

/***/ }),

/***/ "4ECx":
/***/ (function(module, exports) {

module.exports = "import {h, Component} from 'preact';\r\nimport Slider from 'preact-material-components/Slider';\r\nimport 'preact-material-components/Slider/style.css';\r\n\r\nexport default class SnackbarPage extends Component {\r\n  render(){\r\n    return (\r\n      <div>\r\n        <Slider step={2} value={10} max={20}/>\r\n      </div>\r\n    );\r\n  }\r\n}\r\n"

/***/ }),

/***/ "4MWp":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MDCSlider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base_component__ = __webpack_require__("EQDb");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__("g9TK");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__foundation__ = __webpack_require__("Dm/K");
/* unused harmony reexport MDCSliderFoundation */
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
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */








var MDCSlider = function (_MDCComponent) {
  _inherits(MDCSlider, _MDCComponent);

  function MDCSlider() {
    _classCallCheck(this, MDCSlider);

    return _possibleConstructorReturn(this, _MDCComponent.apply(this, arguments));
  }

  MDCSlider.attachTo = function attachTo(root) {
    return new MDCSlider(root);
  };

  MDCSlider.prototype.initialize = function initialize() {
    this.thumbContainer_ = this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_1__constants__["a" /* strings */].THUMB_CONTAINER_SELECTOR);
    this.track_ = this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_1__constants__["a" /* strings */].TRACK_SELECTOR);
    this.pinValueMarker_ = this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_1__constants__["a" /* strings */].PIN_VALUE_MARKER_SELECTOR);
    this.trackMarkerContainer_ = this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_1__constants__["a" /* strings */].TRACK_MARKER_CONTAINER_SELECTOR);
  };

  MDCSlider.prototype.getDefaultFoundation = function getDefaultFoundation() {
    var _this2 = this;

    return new __WEBPACK_IMPORTED_MODULE_2__foundation__["a" /* default */]({
      hasClass: function hasClass(className) {
        return _this2.root_.classList.contains(className);
      },
      addClass: function addClass(className) {
        return _this2.root_.classList.add(className);
      },
      removeClass: function removeClass(className) {
        return _this2.root_.classList.remove(className);
      },
      getAttribute: function getAttribute(name) {
        return _this2.root_.getAttribute(name);
      },
      setAttribute: function setAttribute(name, value) {
        return _this2.root_.setAttribute(name, value);
      },
      removeAttribute: function removeAttribute(name) {
        return _this2.root_.removeAttribute(name);
      },
      computeBoundingRect: function computeBoundingRect() {
        return _this2.root_.getBoundingClientRect();
      },
      getTabIndex: function getTabIndex() {
        return _this2.root_.tabIndex;
      },
      registerInteractionHandler: function registerInteractionHandler(type, handler) {
        _this2.root_.addEventListener(type, handler);
      },
      deregisterInteractionHandler: function deregisterInteractionHandler(type, handler) {
        _this2.root_.removeEventListener(type, handler);
      },
      registerThumbContainerInteractionHandler: function registerThumbContainerInteractionHandler(type, handler) {
        _this2.thumbContainer_.addEventListener(type, handler);
      },
      deregisterThumbContainerInteractionHandler: function deregisterThumbContainerInteractionHandler(type, handler) {
        _this2.thumbContainer_.removeEventListener(type, handler);
      },
      registerBodyInteractionHandler: function registerBodyInteractionHandler(type, handler) {
        document.body.addEventListener(type, handler);
      },
      deregisterBodyInteractionHandler: function deregisterBodyInteractionHandler(type, handler) {
        document.body.removeEventListener(type, handler);
      },
      registerResizeHandler: function registerResizeHandler(handler) {
        window.addEventListener('resize', handler);
      },
      deregisterResizeHandler: function deregisterResizeHandler(handler) {
        window.removeEventListener('resize', handler);
      },
      notifyInput: function notifyInput() {
        _this2.emit(__WEBPACK_IMPORTED_MODULE_1__constants__["a" /* strings */].INPUT_EVENT, _this2);
      },
      notifyChange: function notifyChange() {
        _this2.emit(__WEBPACK_IMPORTED_MODULE_1__constants__["a" /* strings */].CHANGE_EVENT, _this2);
      },
      setThumbContainerStyleProperty: function setThumbContainerStyleProperty(propertyName, value) {
        _this2.thumbContainer_.style.setProperty(propertyName, value);
      },
      setTrackStyleProperty: function setTrackStyleProperty(propertyName, value) {
        _this2.track_.style.setProperty(propertyName, value);
      },
      setMarkerValue: function setMarkerValue(value) {
        _this2.pinValueMarker_.innerText = value;
      },
      appendTrackMarkers: function appendTrackMarkers(numMarkers) {
        var frag = document.createDocumentFragment();
        for (var i = 0; i < numMarkers; i++) {
          var marker = document.createElement('div');
          marker.classList.add('mdc-slider__track-marker');
          frag.appendChild(marker);
        }
        _this2.trackMarkerContainer_.appendChild(frag);
      },
      removeTrackMarkers: function removeTrackMarkers() {
        while (_this2.trackMarkerContainer_.firstChild) {
          _this2.trackMarkerContainer_.removeChild(_this2.trackMarkerContainer_.firstChild);
        }
      },
      setLastTrackMarkersStyleProperty: function setLastTrackMarkersStyleProperty(propertyName, value) {
        // We remove and append new nodes, thus, the last track marker must be dynamically found.
        var lastTrackMarker = _this2.root_.querySelector(__WEBPACK_IMPORTED_MODULE_1__constants__["a" /* strings */].LAST_TRACK_MARKER_SELECTOR);
        lastTrackMarker.style.setProperty(propertyName, value);
      },
      isRTL: function isRTL() {
        return getComputedStyle(_this2.root_).direction === 'rtl';
      }
    });
  };

  MDCSlider.prototype.initialSyncWithDOM = function initialSyncWithDOM() {
    var origValueNow = parseFloat(this.root_.getAttribute(__WEBPACK_IMPORTED_MODULE_1__constants__["a" /* strings */].ARIA_VALUENOW));
    this.min = parseFloat(this.root_.getAttribute(__WEBPACK_IMPORTED_MODULE_1__constants__["a" /* strings */].ARIA_VALUEMIN)) || this.min;
    this.max = parseFloat(this.root_.getAttribute(__WEBPACK_IMPORTED_MODULE_1__constants__["a" /* strings */].ARIA_VALUEMAX)) || this.max;
    this.step = parseFloat(this.root_.getAttribute(__WEBPACK_IMPORTED_MODULE_1__constants__["a" /* strings */].STEP_DATA_ATTR)) || this.step;
    this.value = origValueNow || this.value;
    this.disabled = this.root_.hasAttribute(__WEBPACK_IMPORTED_MODULE_1__constants__["a" /* strings */].ARIA_DISABLED) && this.root_.getAttribute(__WEBPACK_IMPORTED_MODULE_1__constants__["a" /* strings */].ARIA_DISABLED) !== 'false';
    this.foundation_.setupTrackMarker();
  };

  MDCSlider.prototype.layout = function layout() {
    this.foundation_.layout();
  };

  MDCSlider.prototype.stepUp = function stepUp() {
    var amount = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.step || 1;

    this.value += amount;
  };

  MDCSlider.prototype.stepDown = function stepDown() {
    var amount = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.step || 1;

    this.value -= amount;
  };

  _createClass(MDCSlider, [{
    key: 'value',
    get: function get() {
      return this.foundation_.getValue();
    },
    set: function set(value) {
      this.foundation_.setValue(value);
    }
  }, {
    key: 'min',
    get: function get() {
      return this.foundation_.getMin();
    },
    set: function set(min) {
      this.foundation_.setMin(min);
    }
  }, {
    key: 'max',
    get: function get() {
      return this.foundation_.getMax();
    },
    set: function set(max) {
      this.foundation_.setMax(max);
    }
  }, {
    key: 'step',
    get: function get() {
      return this.foundation_.getStep();
    },
    set: function set(step) {
      this.foundation_.setStep(step);
    }
  }, {
    key: 'disabled',
    get: function get() {
      return this.foundation_.isDisabled();
    },
    set: function set(disabled) {
      this.foundation_.setDisabled(disabled);
    }
  }]);

  return MDCSlider;
}(__WEBPACK_IMPORTED_MODULE_0__material_base_component__["a" /* default */]);

/***/ }),

/***/ "4XpN":
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

/** @enum {string} */
var cssClasses = {
  ROOT: 'mdc-icon-toggle',
  DISABLED: 'mdc-icon-toggle--disabled'
};

/** @enum {string} */
var strings = {
  DATA_TOGGLE_ON: 'data-toggle-on',
  DATA_TOGGLE_OFF: 'data-toggle-off',
  ARIA_PRESSED: 'aria-pressed',
  ARIA_DISABLED: 'aria-disabled',
  ARIA_LABEL: 'aria-label',
  CHANGE_EVENT: 'MDCIconToggle:change'
};

/***/ }),

/***/ "4YXN":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "4igI":
/***/ (function(module, exports) {

module.exports = "import {h, Component} from 'preact';\r\nimport Switch from 'preact-material-components/Switch';\r\nimport 'preact-material-components/Switch/style.css';\r\n\r\nexport default class SwitchPage extends Component {\r\n  render(){\r\n    return (\r\n      <div>\r\n        <Switch/>\r\n      </div>\r\n    );\r\n  }\r\n}\r\n"

/***/ }),

/***/ "56Xb":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "5HAH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MDCIconToggleFoundation; });
/* unused harmony export KeyboardKey */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base_foundation__ = __webpack_require__("uJAj");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__adapter__ = __webpack_require__("KnLB");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__("4XpN");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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


/* eslint-disable no-unused-vars */



/**
 * @extends {MDCFoundation<!MDCIconToggleAdapter>}
 */

var MDCIconToggleFoundation = function (_MDCFoundation) {
  _inherits(MDCIconToggleFoundation, _MDCFoundation);

  _createClass(MDCIconToggleFoundation, null, [{
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
    key: 'defaultAdapter',
    get: function get() {
      return {
        addClass: function addClass() /* className: string */{},
        removeClass: function removeClass() /* className: string */{},
        registerInteractionHandler: function registerInteractionHandler() /* type: string, handler: EventListener */{},
        deregisterInteractionHandler: function deregisterInteractionHandler() /* type: string, handler: EventListener */{},
        setText: function setText() /* text: string */{},
        getTabIndex: function getTabIndex() {
          return (/* number */0
          );
        },
        setTabIndex: function setTabIndex() /* tabIndex: number */{},
        getAttr: function getAttr() {
          return (/* name: string */ /* string */''
          );
        },
        setAttr: function setAttr() /* name: string, value: string */{},
        rmAttr: function rmAttr() /* name: string */{},
        notifyChange: function notifyChange() /* evtData: IconToggleEvent */{}
      };
    }
  }]);

  function MDCIconToggleFoundation(adapter) {
    _classCallCheck(this, MDCIconToggleFoundation);

    /** @private {boolean} */
    var _this = _possibleConstructorReturn(this, _MDCFoundation.call(this, _extends(MDCIconToggleFoundation.defaultAdapter, adapter)));

    _this.on_ = false;

    /** @private {boolean} */
    _this.disabled_ = false;

    /** @private {number} */
    _this.savedTabIndex_ = -1;

    /** @private {?IconToggleState} */
    _this.toggleOnData_ = null;

    /** @private {?IconToggleState} */
    _this.toggleOffData_ = null;

    _this.clickHandler_ = /** @private {!EventListener} */function () {
      return _this.toggleFromEvt_();
    };

    /** @private {boolean} */
    _this.isHandlingKeydown_ = false;

    _this.keydownHandler_ = /** @private {!EventListener} */function ( /** @type {!KeyboardKey} */evt) {
      if (isSpace(evt)) {
        _this.isHandlingKeydown_ = true;
        return evt.preventDefault();
      }
    };

    _this.keyupHandler_ = /** @private {!EventListener} */function ( /** @type {!KeyboardKey} */evt) {
      if (isSpace(evt)) {
        _this.isHandlingKeydown_ = false;
        _this.toggleFromEvt_();
      }
    };
    return _this;
  }

  MDCIconToggleFoundation.prototype.init = function init() {
    this.refreshToggleData();
    this.adapter_.registerInteractionHandler('click', this.clickHandler_);
    this.adapter_.registerInteractionHandler('keydown', this.keydownHandler_);
    this.adapter_.registerInteractionHandler('keyup', this.keyupHandler_);
  };

  MDCIconToggleFoundation.prototype.refreshToggleData = function refreshToggleData() {
    var _MDCIconToggleFoundat = MDCIconToggleFoundation.strings,
        DATA_TOGGLE_ON = _MDCIconToggleFoundat.DATA_TOGGLE_ON,
        DATA_TOGGLE_OFF = _MDCIconToggleFoundat.DATA_TOGGLE_OFF;

    this.toggleOnData_ = this.parseJsonDataAttr_(DATA_TOGGLE_ON);
    this.toggleOffData_ = this.parseJsonDataAttr_(DATA_TOGGLE_OFF);
  };

  MDCIconToggleFoundation.prototype.destroy = function destroy() {
    this.adapter_.deregisterInteractionHandler('click', this.clickHandler_);
    this.adapter_.deregisterInteractionHandler('keydown', this.keydownHandler_);
    this.adapter_.deregisterInteractionHandler('keyup', this.keyupHandler_);
  };

  /** @private */


  MDCIconToggleFoundation.prototype.toggleFromEvt_ = function toggleFromEvt_() {
    this.toggle();
    var isOn = this.on_;

    this.adapter_.notifyChange( /** @type {!IconToggleEvent} */{ isOn: isOn });
  };

  /** @return {boolean} */


  MDCIconToggleFoundation.prototype.isOn = function isOn() {
    return this.on_;
  };

  /** @param {boolean=} isOn */


  MDCIconToggleFoundation.prototype.toggle = function toggle() {
    var isOn = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !this.on_;

    this.on_ = isOn;

    var _MDCIconToggleFoundat2 = MDCIconToggleFoundation.strings,
        ARIA_LABEL = _MDCIconToggleFoundat2.ARIA_LABEL,
        ARIA_PRESSED = _MDCIconToggleFoundat2.ARIA_PRESSED;


    if (this.on_) {
      this.adapter_.setAttr(ARIA_PRESSED, 'true');
    } else {
      this.adapter_.setAttr(ARIA_PRESSED, 'false');
    }

    var _ref = this.on_ ? this.toggleOffData_ : this.toggleOnData_,
        classToRemove = _ref.cssClass;

    if (classToRemove) {
      this.adapter_.removeClass(classToRemove);
    }

    var _ref2 = this.on_ ? this.toggleOnData_ : this.toggleOffData_,
        content = _ref2.content,
        label = _ref2.label,
        cssClass = _ref2.cssClass;

    if (cssClass) {
      this.adapter_.addClass(cssClass);
    }
    if (content) {
      this.adapter_.setText(content);
    }
    if (label) {
      this.adapter_.setAttr(ARIA_LABEL, label);
    }
  };

  /**
   * @param {string} dataAttr
   * @return {!IconToggleState}
   */


  MDCIconToggleFoundation.prototype.parseJsonDataAttr_ = function parseJsonDataAttr_(dataAttr) {
    var val = this.adapter_.getAttr(dataAttr);
    if (!val) {
      return {};
    }
    return (/** @type {!IconToggleState} */JSON.parse(val)
    );
  };

  /** @return {boolean} */


  MDCIconToggleFoundation.prototype.isDisabled = function isDisabled() {
    return this.disabled_;
  };

  /** @param {boolean} isDisabled */


  MDCIconToggleFoundation.prototype.setDisabled = function setDisabled(isDisabled) {
    this.disabled_ = isDisabled;

    var DISABLED = MDCIconToggleFoundation.cssClasses.DISABLED;
    var ARIA_DISABLED = MDCIconToggleFoundation.strings.ARIA_DISABLED;


    if (this.disabled_) {
      this.savedTabIndex_ = this.adapter_.getTabIndex();
      this.adapter_.setTabIndex(-1);
      this.adapter_.setAttr(ARIA_DISABLED, 'true');
      this.adapter_.addClass(DISABLED);
    } else {
      this.adapter_.setTabIndex(this.savedTabIndex_);
      this.adapter_.rmAttr(ARIA_DISABLED);
      this.adapter_.removeClass(DISABLED);
    }
  };

  /** @return {boolean} */


  MDCIconToggleFoundation.prototype.isKeyboardActivated = function isKeyboardActivated() {
    return this.isHandlingKeydown_;
  };

  return MDCIconToggleFoundation;
}(__WEBPACK_IMPORTED_MODULE_0__material_base_foundation__["a" /* default */]);

/**
 * @typedef {!{
 *   key: string,
 *   keyCode: number
 * }}
 */



var KeyboardKey = void 0;

/**
 * @param {!KeyboardKey} keyboardKey
 * @return {boolean}
 */
function isSpace(keyboardKey) {
  return keyboardKey.key === 'Space' || keyboardKey.keyCode === 32;
}

/** @record */

var IconToggleState = function IconToggleState() {
  _classCallCheck(this, IconToggleState);
};

/**
 * The aria-label value of the icon toggle, or undefined if there is no aria-label.
 * @export {string|undefined}
 */


IconToggleState.prototype.label;

/**
 * The text for the icon toggle, or undefined if there is no text.
 * @export {string|undefined}
 */
IconToggleState.prototype.content;

/**
 * The CSS class to add to the icon toggle, or undefined if there is no CSS class.
 * @export {string|undefined}
 */
IconToggleState.prototype.cssClass;

/***/ }),

/***/ "5qFY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return transformStyleProperties; });
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

var transformStyleProperties = ['transform', 'WebkitTransform', 'MozTransform', 'OTransform', 'MSTransform'];

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

/***/ "5sRW":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MDCDialog; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base__ = __webpack_require__("dSNL");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_ripple__ = __webpack_require__("vkNc");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__foundation__ = __webpack_require__("D61N");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util__ = __webpack_require__("aliM");
/* unused harmony reexport MDCDialogFoundation */
/* unused harmony reexport util */
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










var MDCDialog = function (_MDCComponent) {
  _inherits(MDCDialog, _MDCComponent);

  function MDCDialog() {
    _classCallCheck(this, MDCDialog);

    return _possibleConstructorReturn(this, _MDCComponent.apply(this, arguments));
  }

  MDCDialog.attachTo = function attachTo(root) {
    return new MDCDialog(root);
  };

  MDCDialog.prototype.initialize = function initialize() {
    this.focusTrap_ = __WEBPACK_IMPORTED_MODULE_3__util__["a" /* createFocusTrapInstance */](this.dialogSurface_, this.acceptButton_);
    this.footerBtnRipples_ = [];

    var footerBtns = this.root_.querySelectorAll('.mdc-dialog__footer__button');
    for (var i = 0, footerBtn; footerBtn = footerBtns[i]; i++) {
      this.footerBtnRipples_.push(new __WEBPACK_IMPORTED_MODULE_1__material_ripple__["a" /* MDCRipple */](footerBtn));
    }
  };

  MDCDialog.prototype.destroy = function destroy() {
    this.footerBtnRipples_.forEach(function (ripple) {
      return ripple.destroy();
    });
    _MDCComponent.prototype.destroy.call(this);
  };

  MDCDialog.prototype.show = function show() {
    this.foundation_.open();
  };

  MDCDialog.prototype.close = function close() {
    this.foundation_.close();
  };

  MDCDialog.prototype.getDefaultFoundation = function getDefaultFoundation() {
    var _this2 = this;

    return new __WEBPACK_IMPORTED_MODULE_2__foundation__["a" /* default */]({
      addClass: function addClass(className) {
        return _this2.root_.classList.add(className);
      },
      removeClass: function removeClass(className) {
        return _this2.root_.classList.remove(className);
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
      registerTransitionEndHandler: function registerTransitionEndHandler(handler) {
        return _this2.dialogSurface_.addEventListener('transitionend', handler);
      },
      deregisterTransitionEndHandler: function deregisterTransitionEndHandler(handler) {
        return _this2.dialogSurface_.removeEventListener('transitionend', handler);
      },
      notifyAccept: function notifyAccept() {
        return _this2.emit(__WEBPACK_IMPORTED_MODULE_2__foundation__["a" /* default */].strings.ACCEPT_EVENT);
      },
      notifyCancel: function notifyCancel() {
        return _this2.emit(__WEBPACK_IMPORTED_MODULE_2__foundation__["a" /* default */].strings.CANCEL_EVENT);
      },
      trapFocusOnSurface: function trapFocusOnSurface() {
        return _this2.focusTrap_.activate();
      },
      untrapFocusOnSurface: function untrapFocusOnSurface() {
        return _this2.focusTrap_.deactivate();
      },
      isDialog: function isDialog(el) {
        return el === _this2.dialogSurface_;
      }
    });
  };

  _createClass(MDCDialog, [{
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
  }]);

  return MDCDialog;
}(__WEBPACK_IMPORTED_MODULE_0__material_base__["a" /* MDCComponent */]);

/***/ }),

/***/ "6Np5":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "6Q09":
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
  ROOT: 'mdc-select',
  OPEN: 'mdc-select--open',
  DISABLED: 'mdc-select--disabled'
};

var strings = {
  CHANGE_EVENT: 'MDCSelect:change'
};

/***/ }),

/***/ "6X9X":
/***/ (function(module, exports) {

module.exports = "import {h, Component} from 'preact';\r\nimport List from 'preact-material-components/List';\r\nimport Formfield from 'preact-material-components/Formfield';\r\nimport 'preact-material-components/List/style.css';\r\n\r\nexport default class ListPage extends Component {\r\n  render(){\r\n    return (\r\n      <div>\r\n        <Formfield>\r\n          <Radio id=\"r1\" name='opts'></Radio>\r\n          <label for=\"r1\">Radio 1</label>\r\n        </Formfield>\r\n      </div>\r\n    );\r\n  }\r\n}\r\n"

/***/ }),

/***/ "6vkq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Slider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__("KM04");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__MaterialComponent__ = __webpack_require__("lhA9");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_slider__ = __webpack_require__("4MWp");
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

var Slider = function (_MaterialComponent) {
  _inherits(Slider, _MaterialComponent);

  function Slider() {
    _classCallCheck(this, Slider);

    var _this = _possibleConstructorReturn(this, _MaterialComponent.call(this));

    _this.componentName = "slider";
    _this._mdcProps = [];
    _this._onChange = _this._onChange.bind(_this);
    _this._onInput = _this._onInput.bind(_this);
    return _this;
  }

  Slider.prototype._onChange = function _onChange() {
    if (this.props.onChange) {
      this.props.onChange(this.MDComponent.value);
    }
  };

  Slider.prototype._onInput = function _onInput() {
    if (this.props.onInput) {
      this.props.onInput(this.MDComponent.value);
    }
  };

  Slider.prototype.componentDidMount = function componentDidMount() {
    this.MDComponent = new __WEBPACK_IMPORTED_MODULE_2__material_slider__["a" /* MDCSlider */](this.base);
    this.MDComponent.listen("MDCSlider:change", this._onChange);
    this.MDComponent.listen("MDCSlider:input", this._onInput);
    this.setValue(); // set initial value programatically because of error if min is greater than initial max
  };

  Slider.prototype.componentWillUnmount = function componentWillUnmount() {
    this.MDComponent.unlisten("MDCSlider:change", this._onChange);
    this.MDComponent.unlisten("MDCSlider:input", this._onInput);
    this.MDComponent.destroy && this.MDComponent.destroy();
  };

  Slider.prototype.setValue = function setValue() {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;
    var _props$disabled = props.disabled,
        disabled = _props$disabled === undefined ? false : _props$disabled,
        _props$min = props.min,
        min = _props$min === undefined ? 0 : _props$min,
        _props$max = props.max,
        max = _props$max === undefined ? 100 : _props$max,
        value = props.value,
        step = props.step;

    if (this.MDComponent) {
      if (min > this.MDComponent.max) {
        this.MDComponent.max = max;
        this.MDComponent.min = min;
      } else {
        this.MDComponent.min = min;
        this.MDComponent.max = max;
      }

      this.MDComponent.value = value;
      this.MDComponent.disabled = disabled;
      this.MDComponent.step = step;
    }
  };

  Slider.prototype.materialDom = function materialDom(allprops) {
    var _allprops$tabindex = allprops.tabindex,
        tabindex = _allprops$tabindex === undefined ? 0 : _allprops$tabindex,
        props = _objectWithoutProperties(allprops, ["tabindex"]);

    this.setValue(allprops);
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("div", _extends({
      tabindex: tabindex,
      role: "slider",
      "aria-label": "Select Value"
    }, props), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("div", { "class": "mdc-slider__track-container" }, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("div", { "class": "mdc-slider__track" })), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("div", { "class": "mdc-slider__thumb-container" }, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("svg", { "class": "mdc-slider__thumb", width: "21", height: "21" }, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("circle", { cx: "10.5", cy: "10.5", r: "7.875" })), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("div", { "class": "mdc-slider__focus-ring" })));
  };

  return Slider;
}(__WEBPACK_IMPORTED_MODULE_1__MaterialComponent__["a" /* default */]);



/***/ }),

/***/ "7/cg":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Button; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__("KM04");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__MaterialComponent__ = __webpack_require__("lhA9");
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

    var _this = _possibleConstructorReturn(this, _MaterialComponent.call(this));

    _this.componentName = "button";
    _this._mdcProps = ["dense", "raised", "compact", "primary", "accent"];
    return _this;
  }

  Button.prototype.componentDidMount = function componentDidMount() {
    _MaterialComponent.prototype.attachRipple.call(this);
  };

  Button.prototype.materialDom = function materialDom(props) {
    var _this2 = this;

    var ButtonElement = props.href ? "a" : "button";

    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(ButtonElement, _extends({
      ref: function ref(control) {
        _this2.control = control;
      }
    }, props), this.props.children);
  };

  return Button;
}(__WEBPACK_IMPORTED_MODULE_1__MaterialComponent__["a" /* default */]);



/***/ }),

/***/ "75cn":
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

/** @type {string|undefined} */
var storedTransformPropertyName_ = void 0;

/**
 * Returns the name of the correct transform property to use on the current browser.
 * @param {!Window} globalObj
 * @param {boolean=} forceRefresh
 * @return {string}
 */
function getTransformPropertyName(globalObj) {
  var forceRefresh = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  if (storedTransformPropertyName_ === undefined || forceRefresh) {
    var el = globalObj.document.createElement('div');
    var transformPropertyName = 'transform' in el.style ? 'transform' : 'webkitTransform';
    storedTransformPropertyName_ = transformPropertyName;
  }

  return storedTransformPropertyName_;
}

/**
 * Clamps a value between the minimum and the maximum, returning the clamped value.
 * @param {number} value
 * @param {number} min
 * @param {number} max
 * @return {number}
 */
function clamp(value) {
  var min = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var max = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

  return Math.min(max, Math.max(min, value));
}

/**
 * Returns the easing value to apply at time t, for a given cubic bezier curve.
 * Control points P0 and P3 are assumed to be (0,0) and (1,1), respectively.
 * Parameters are as follows:
 * - time: The current time in the animation, scaled between 0 and 1.
 * - x1: The x value of control point P1.
 * - y1: The y value of control point P1.
 * - x2: The x value of control point P2.
 * - y2: The y value of control point P2.
 * @param {number} time
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 * @return {number}
 */
function bezierProgress(time, x1, y1, x2, y2) {
  return getBezierCoordinate_(solvePositionFromXValue_(time, x1, x2), y1, y2);
}

/**
 * Compute a single coordinate at a position point between 0 and 1.
 * c1 and c2 are the matching coordinate on control points P1 and P2, respectively.
 * Control points P0 and P3 are assumed to be (0,0) and (1,1), respectively.
 * Adapted from https://github.com/google/closure-library/blob/master/closure/goog/math/bezier.js.
 * @param {number} t
 * @param {number} c1
 * @param {number} c2
 * @return {number}
 */
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

/**
 * Project a point onto the Bezier curve, from a given X. Calculates the position t along the curve.
 * Adapted from https://github.com/google/closure-library/blob/master/closure/goog/math/bezier.js.
 * @param {number} xVal
 * @param {number} x1
 * @param {number} x2
 * @return {number}
 */
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

/***/ "8Edg":
/***/ (function(module, exports) {

module.exports = "import Radio from 'preact-material-components/Radio';\r\nimport FormField from 'preact-material-components/FormField';\r\nimport Button from 'preact-material-components/Button';"

/***/ }),

/***/ "8Efz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MDCCheckbox; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_animation__ = __webpack_require__("5qFY");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_base_component__ = __webpack_require__("EQDb");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_base_selection_control__ = __webpack_require__("XCG+");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__foundation__ = __webpack_require__("mnzM");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_ripple__ = __webpack_require__("vkNc");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_ripple_util__ = __webpack_require__("joOv");
/* unused harmony reexport MDCCheckboxFoundation */
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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



/* eslint-disable no-unused-vars */

/* eslint-enable no-unused-vars */






/**
 * @extends MDCComponent<!MDCCheckboxFoundation>
 */
var MDCCheckbox = function (_MDCComponent) {
  _inherits(MDCCheckbox, _MDCComponent);

  MDCCheckbox.attachTo = function attachTo(root) {
    return new MDCCheckbox(root);
  };

  /**
   * Returns the state of the native control element, or null if the native control element is not present.
   * @return {?SelectionControlState}
   * @private
   */


  _createClass(MDCCheckbox, [{
    key: 'nativeCb_',
    get: function get() {
      var NATIVE_CONTROL_SELECTOR = __WEBPACK_IMPORTED_MODULE_3__foundation__["a" /* default */].strings.NATIVE_CONTROL_SELECTOR;

      var cbEl = /** @type {?SelectionControlState} */this.root_.querySelector(NATIVE_CONTROL_SELECTOR);
      return cbEl;
    }
  }]);

  function MDCCheckbox() {
    _classCallCheck(this, MDCCheckbox);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    /** @private {!MDCRipple} */
    var _this = _possibleConstructorReturn(this, _MDCComponent.call.apply(_MDCComponent, [this].concat(args)));

    _this.ripple_ = _this.initRipple_();
    return _this;
  }

  /**
   * @return {!MDCRipple}
   * @private
   */


  MDCCheckbox.prototype.initRipple_ = function initRipple_() {
    var _this2 = this;

    var MATCHES = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__material_ripple_util__["a" /* getMatchesProperty */])(HTMLElement.prototype);
    var adapter = _extends(__WEBPACK_IMPORTED_MODULE_4__material_ripple__["a" /* MDCRipple */].createAdapter(this), {
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
    var foundation = new __WEBPACK_IMPORTED_MODULE_4__material_ripple__["b" /* MDCRippleFoundation */](adapter);
    return new __WEBPACK_IMPORTED_MODULE_4__material_ripple__["a" /* MDCRipple */](this.root_, foundation);
  };

  /** @return {!MDCCheckboxFoundation} */


  MDCCheckbox.prototype.getDefaultFoundation = function getDefaultFoundation() {
    var _this3 = this;

    return new __WEBPACK_IMPORTED_MODULE_3__foundation__["a" /* default */]({
      addClass: function addClass(className) {
        return _this3.root_.classList.add(className);
      },
      removeClass: function removeClass(className) {
        return _this3.root_.classList.remove(className);
      },
      registerAnimationEndHandler: function registerAnimationEndHandler(handler) {
        return _this3.root_.addEventListener(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__material_animation__["b" /* getCorrectEventName */])(window, 'animationend'), handler);
      },
      deregisterAnimationEndHandler: function deregisterAnimationEndHandler(handler) {
        return _this3.root_.removeEventListener(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__material_animation__["b" /* getCorrectEventName */])(window, 'animationend'), handler);
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
  };

  /** @return {!MDCRipple} */


  MDCCheckbox.prototype.destroy = function destroy() {
    this.ripple_.destroy();
    _MDCComponent.prototype.destroy.call(this);
  };

  _createClass(MDCCheckbox, [{
    key: 'ripple',
    get: function get() {
      return this.ripple_;
    }

    /** @return {boolean} */

  }, {
    key: 'checked',
    get: function get() {
      return this.foundation_.isChecked();
    }

    /** @param {boolean} checked */
    ,
    set: function set(checked) {
      this.foundation_.setChecked(checked);
    }

    /** @return {boolean} */

  }, {
    key: 'indeterminate',
    get: function get() {
      return this.foundation_.isIndeterminate();
    }

    /** @param {boolean} indeterminate */
    ,
    set: function set(indeterminate) {
      this.foundation_.setIndeterminate(indeterminate);
    }

    /** @return {boolean} */

  }, {
    key: 'disabled',
    get: function get() {
      return this.foundation_.isDisabled();
    }

    /** @param {boolean} disabled */
    ,
    set: function set(disabled) {
      this.foundation_.setDisabled(disabled);
    }

    /** @return {?string} */

  }, {
    key: 'value',
    get: function get() {
      return this.foundation_.getValue();
    }

    /** @param {?string} value */
    ,
    set: function set(value) {
      this.foundation_.setValue(value);
    }
  }]);

  return MDCCheckbox;
}(__WEBPACK_IMPORTED_MODULE_1__material_base_component__["a" /* default */]);

/***/ }),

/***/ "8Kds":
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

/** @enum {string} */
var cssClasses = {
  ROOT: 'mdc-simple-menu',
  OPEN: 'mdc-simple-menu--open',
  ANIMATING: 'mdc-simple-menu--animating',
  TOP_RIGHT: 'mdc-simple-menu--open-from-top-right',
  BOTTOM_LEFT: 'mdc-simple-menu--open-from-bottom-left',
  BOTTOM_RIGHT: 'mdc-simple-menu--open-from-bottom-right'
};

/** @enum {string} */
var strings = {
  ITEMS_SELECTOR: '.mdc-simple-menu__items',
  SELECTED_EVENT: 'MDCSimpleMenu:selected',
  CANCEL_EVENT: 'MDCSimpleMenu:cancel',
  ARIA_DISABLED_ATTR: 'aria-disabled'
};

/** @enum {number} */
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

/***/ "8bDF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TextfieldPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__("KM04");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_preact_material_components_Textfield__ = __webpack_require__("GJAU");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_component_table__ = __webpack_require__("B/9r");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_code_block__ = __webpack_require__("F4jb");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sample_txt__ = __webpack_require__("IsP3");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sample_txt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__sample_txt__);


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var _ref = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	'div',
	{ className: 'mdc-typography--display1' },
	'Sample code '
);

var _ref2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	__WEBPACK_IMPORTED_MODULE_3__components_code_block__["a" /* default */],
	null,
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
		'code',
		{ 'class': 'lang-js' },
		__WEBPACK_IMPORTED_MODULE_4__sample_txt___default.a
	)
);

var _ref3 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	'div',
	{ className: 'mdc-typography--display1' },
	'Original documentation'
);

var _ref4 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
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
);

var _ref5 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	'div',
	{ className: 'mdc-typography--display1' },
	'Demo'
);

var _ref6 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	'div',
	{ className: 'mdc-typography--headline' },
	'Default'
);

var _ref7 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	'div',
	{ className: 'mdc-typography--headline' },
	'Multiline'
);

var _ref8 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Textfield__["a" /* default */], { multiline: true, label: 'Textarea tag' });

var _ref9 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	'div',
	{ className: 'mdc-typography--headline' },
	'Password'
);

var _ref10 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Textfield__["a" /* default */], { type: 'password', label: 'Enter a password' });

var _ref11 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	'div',
	{ className: 'mdc-typography--headline' },
	'With help text'
);

var _ref12 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Textfield__["a" /* default */], { label: 'Help text', helptext: 'This is the helptext' });

var _ref13 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	'div',
	{ className: 'mdc-typography--headline' },
	'With persistent help text'
);

var _ref14 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Textfield__["a" /* default */], { label: 'Persistent help text', helptext: 'This is the helptext', helptextPersistent: true });

var _ref15 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	'div',
	{ className: 'mdc-typography--headline' },
	'Dense'
);

var _ref16 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Textfield__["a" /* default */], { label: 'Dense', dense: true });

var _ref17 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	'div',
	{ className: 'mdc-typography--headline' },
	'Disabled'
);

var _ref18 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Textfield__["a" /* default */], { label: 'Disabled', disabled: true });

var TextfieldPage = function (_Component) {
	_inherits(TextfieldPage, _Component);

	function TextfieldPage() {
		_classCallCheck(this, TextfieldPage);

		var _this = _possibleConstructorReturn(this, _Component.call(this));

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
			}, {
				name: 'dense',
				description: 'Use a dense font'
			}, {
				name: 'disabled',
				description: 'Disables the input'
			}, {
				name: 'helptext',
				description: 'Include an help text that is useful for providing supplemental information to users, as well for validation messages'
			}, {
				name: 'helptextPersistent',
				description: 'Makes the help text always visible'
			}, {
				name: 'helptextValidationMsg',
				description: 'Provide styles for using the help text as a validation message'
			}]
		}];
		return _this;
	}

	TextfieldPage.prototype.render = function render() {
		var _this2 = this;

		return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
			'div',
			null,
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_2__components_component_table__["a" /* default */], { data: this.propsTable }),
			_ref,
			_ref2,
			_ref3,
			_ref4,
			_ref5,
			_ref6,
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Textfield__["a" /* default */], { label: 'Your name', onKeyUp: function onKeyUp(e) {
					_this2.setState({
						name: e.target.value
					});
				} }),
			' Hi - ',
			this.state.name,
			_ref7,
			_ref8,
			_ref9,
			_ref10,
			_ref11,
			_ref12,
			_ref13,
			_ref14,
			_ref15,
			_ref16,
			_ref17,
			_ref18
		);
	};

	return TextfieldPage;
}(__WEBPACK_IMPORTED_MODULE_0_preact__["Component"]);



/***/ }),

/***/ "8oKx":
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
  ANIMATING: 'mdc-dialog--animating',
  BACKDROP: 'mdc-dialog__backdrop',
  SCROLL_LOCK: 'mdc-dialog-scroll-lock',
  ACCEPT_BTN: 'mdc-dialog__footer__button--accept',
  CANCEL_BTN: 'mdc-dialog__footer__button--cancel'
};

var strings = {
  OPEN_DIALOG_SELECTOR: '.mdc-dialog--open',
  DIALOG_SURFACE_SELECTOR: '.mdc-dialog__surface',
  ACCEPT_SELECTOR: '.mdc-dialog__footer__button--accept',
  ACCEPT_EVENT: 'MDCDialog:accept',
  CANCEL_EVENT: 'MDCDialog:cancel'
};

/***/ }),

/***/ "92i7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RadioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__("KM04");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_preact_material_components_Radio__ = __webpack_require__("sdLF");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_preact_material_components_FormField__ = __webpack_require__("rW9b");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_component_table__ = __webpack_require__("B/9r");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_code_block__ = __webpack_require__("F4jb");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sample_txt__ = __webpack_require__("CRqb");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sample_txt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__sample_txt__);


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var _ref = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	'div',
	{ className: 'mdc-typography--display1' },
	'Sample code '
);

var _ref2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	__WEBPACK_IMPORTED_MODULE_4__components_code_block__["a" /* default */],
	null,
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
		'code',
		{ 'class': 'lang-js' },
		__WEBPACK_IMPORTED_MODULE_5__sample_txt___default.a
	)
);

var _ref3 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	'div',
	{ className: 'mdc-typography--display1' },
	'Original documentation'
);

var _ref4 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
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
);

var _ref5 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	'div',
	{ className: 'mdc-typography--display1' },
	'Demo '
);

var _ref6 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	__WEBPACK_IMPORTED_MODULE_2_preact_material_components_FormField__["a" /* default */],
	null,
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Radio__["a" /* default */], { id: 'r1', name: 'opts' }),
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
		'label',
		{ 'for': 'r1' },
		'Radio 1'
	)
);

var _ref7 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	__WEBPACK_IMPORTED_MODULE_2_preact_material_components_FormField__["a" /* default */],
	null,
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Radio__["a" /* default */], { id: 'r2', name: 'opts' }),
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
		'label',
		{ 'for': 'r2' },
		'Radio 2'
	)
);

var _ref8 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	__WEBPACK_IMPORTED_MODULE_2_preact_material_components_FormField__["a" /* default */],
	null,
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Radio__["a" /* default */], { id: 'r3', name: 'opts', disabled: true }),
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
		'label',
		{ 'for': 'r3' },
		'Disabled Radio '
	)
);

var RadioPage = function (_Component) {
	_inherits(RadioPage, _Component);

	function RadioPage() {
		_classCallCheck(this, RadioPage);

		var _this = _possibleConstructorReturn(this, _Component.call(this));

		_this.propsTable = [{
			component: 'Radio',
			props: []
		}];
		return _this;
	}

	RadioPage.prototype.render = function render() {
		return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
			'div',
			null,
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_3__components_component_table__["a" /* default */], { data: this.propsTable }),
			_ref,
			_ref2,
			_ref3,
			_ref4,
			_ref5,
			_ref6,
			_ref7,
			_ref8
		);
	};

	return RadioPage;
}(__WEBPACK_IMPORTED_MODULE_0_preact__["Component"]);



/***/ }),

/***/ "95n/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MDCTabBarScroller; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_animation__ = __webpack_require__("5qFY");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_base_component__ = __webpack_require__("EQDb");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tab_bar__ = __webpack_require__("O+aM");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__foundation__ = __webpack_require__("ZLWE");
/* unused harmony reexport MDCTabBarScrollerFoundation */
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









var MDCTabBarScroller = function (_MDCComponent) {
  _inherits(MDCTabBarScroller, _MDCComponent);

  function MDCTabBarScroller() {
    _classCallCheck(this, MDCTabBarScroller);

    return _possibleConstructorReturn(this, _MDCComponent.apply(this, arguments));
  }

  MDCTabBarScroller.attachTo = function attachTo(root) {
    return new MDCTabBarScroller(root);
  };

  MDCTabBarScroller.prototype.initialize = function initialize() {
    var tabBarFactory = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function (root) {
      return new __WEBPACK_IMPORTED_MODULE_2__tab_bar__["a" /* MDCTabBar */](root);
    };

    this.scrollFrame_ = this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_3__foundation__["a" /* default */].strings.FRAME_SELECTOR);
    this.tabBarEl_ = this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_3__foundation__["a" /* default */].strings.TABS_SELECTOR);
    this.forwardIndicator_ = this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_3__foundation__["a" /* default */].strings.INDICATOR_FORWARD_SELECTOR);
    this.backIndicator_ = this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_3__foundation__["a" /* default */].strings.INDICATOR_BACK_SELECTOR);
    this.tabBar_ = tabBarFactory(this.tabBarEl_);
  };

  MDCTabBarScroller.prototype.getDefaultFoundation = function getDefaultFoundation() {
    var _this2 = this;

    return new __WEBPACK_IMPORTED_MODULE_3__foundation__["a" /* default */]({
      addClass: function addClass(className) {
        return _this2.root_.classList.add(className);
      },
      removeClass: function removeClass(className) {
        return _this2.root_.classList.remove(className);
      },
      eventTargetHasClass: function eventTargetHasClass(target, className) {
        return target.classList.contains(className);
      },
      addClassToForwardIndicator: function addClassToForwardIndicator(className) {
        return _this2.forwardIndicator_.classList.add(className);
      },
      removeClassFromForwardIndicator: function removeClassFromForwardIndicator(className) {
        return _this2.forwardIndicator_.classList.remove(className);
      },
      addClassToBackIndicator: function addClassToBackIndicator(className) {
        return _this2.backIndicator_.classList.add(className);
      },
      removeClassFromBackIndicator: function removeClassFromBackIndicator(className) {
        return _this2.backIndicator_.classList.remove(className);
      },
      isRTL: function isRTL() {
        return getComputedStyle(_this2.root_).getPropertyValue('direction') === 'rtl';
      },
      registerBackIndicatorClickHandler: function registerBackIndicatorClickHandler(handler) {
        return _this2.backIndicator_.addEventListener('click', handler);
      },
      deregisterBackIndicatorClickHandler: function deregisterBackIndicatorClickHandler(handler) {
        return _this2.backIndicator_.removeEventListener('click', handler);
      },
      registerForwardIndicatorClickHandler: function registerForwardIndicatorClickHandler(handler) {
        return _this2.forwardIndicator_.addEventListener('click', handler);
      },
      deregisterForwardIndicatorClickHandler: function deregisterForwardIndicatorClickHandler(handler) {
        return _this2.forwardIndicator_.removeEventListener('click', handler);
      },
      registerCapturedInteractionHandler: function registerCapturedInteractionHandler(evt, handler) {
        return _this2.root_.addEventListener(evt, handler, true);
      },
      deregisterCapturedInteractionHandler: function deregisterCapturedInteractionHandler(evt, handler) {
        return _this2.root_.removeEventListener(evt, handler, true);
      },
      registerWindowResizeHandler: function registerWindowResizeHandler(handler) {
        return window.addEventListener('resize', handler);
      },
      deregisterWindowResizeHandler: function deregisterWindowResizeHandler(handler) {
        return window.removeEventListener('resize', handler);
      },
      getNumberOfTabs: function getNumberOfTabs() {
        return _this2.tabBar.tabs.length;
      },
      getComputedWidthForTabAtIndex: function getComputedWidthForTabAtIndex(index) {
        return _this2.tabBar.tabs[index].computedWidth;
      },
      getComputedLeftForTabAtIndex: function getComputedLeftForTabAtIndex(index) {
        return _this2.tabBar.tabs[index].computedLeft;
      },
      getOffsetWidthForScrollFrame: function getOffsetWidthForScrollFrame() {
        return _this2.scrollFrame_.offsetWidth;
      },
      getScrollLeftForScrollFrame: function getScrollLeftForScrollFrame() {
        return _this2.scrollFrame_.scrollLeft;
      },
      setScrollLeftForScrollFrame: function setScrollLeftForScrollFrame(scrollLeftAmount) {
        return _this2.scrollFrame_.scrollLeft = scrollLeftAmount;
      },
      getOffsetWidthForTabBar: function getOffsetWidthForTabBar() {
        return _this2.tabBarEl_.offsetWidth;
      },
      setTransformStyleForTabBar: function setTransformStyleForTabBar(value) {
        _this2.tabBarEl_.style.setProperty(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__material_animation__["a" /* getCorrectPropertyName */])(window, 'transform'), value);
      },
      getOffsetLeftForEventTarget: function getOffsetLeftForEventTarget(target) {
        return target.offsetLeft;
      },
      getOffsetWidthForEventTarget: function getOffsetWidthForEventTarget(target) {
        return target.offsetWidth;
      }
    });
  };

  MDCTabBarScroller.prototype.layout = function layout() {
    this.foundation_.layout();
  };

  _createClass(MDCTabBarScroller, [{
    key: 'tabBar',
    get: function get() {
      return this.tabBar_;
    }
  }]);

  return MDCTabBarScroller;
}(__WEBPACK_IMPORTED_MODULE_1__material_base_component__["a" /* default */]);

/***/ }),

/***/ "9IbV":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "9gb+":
/***/ (function(module, exports) {

module.exports = "import {h, Component} from 'preact';\r\nimport Switch from 'preact-material-components/Switch';\r\nimport 'preact-material-components/Switch/style.css';\r\n\r\nexport default class SwitchPage extends Component {\r\n  render(){\r\n    return (\r\n      <div>\r\n        <Tabs.TabBarScroller>\r\n            <Tabs scroller={true}>\r\n            <Tabs.Tab>tab1</Tabs.Tab>\r\n            <Tabs.Tab active={true}>tab2</Tabs.Tab>\r\n            <Tabs.Tab>tab3</Tabs.Tab>\r\n            <Tabs.Tab>tab4</Tabs.Tab>\r\n            <Tabs.Tab>tab5</Tabs.Tab>\r\n            <Tabs.Tab>tab6</Tabs.Tab>\r\n            <Tabs.Tab>tab7</Tabs.Tab>\r\n            <Tabs.Tab>tab7</Tabs.Tab>\r\n            <Tabs.Tab>tab9</Tabs.Tab>\r\n            <Tabs.Tab>tab10</Tabs.Tab>\r\n            <Tabs.Tab>tab11</Tabs.Tab>\r\n          </Tabs>\r\n        </Tabs.TabBarScroller>\r\n      </div>\r\n    );\r\n  }\r\n}\r\n"

/***/ }),

/***/ "9qb7":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
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

			var argType = typeof arg;

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
	} else if (true) {
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

/***/ "9v1x":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__("KM04");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__MaterialComponent__ = __webpack_require__("lhA9");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_select___ = __webpack_require__("C4gN");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__List__ = __webpack_require__("E7XR");
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

    var _this = _possibleConstructorReturn(this, _MaterialComponent.call(this));

    _this.componentName = "select";
    _this._mdcProps = ["disabled"];
    _this._changed = _this._changed.bind(_this);
    return _this;
  }

  Select.prototype._changed = function _changed(e) {
    e = e || {};
    e.selectedIndex = e.selectedIndex || this.MDComponent.selectedIndex;
    e.selectedOptions = e.selectedOptions || this.MDComponent.selectedOptions;
    if (this.props.onChange) {
      this.props.onChange(e);
    }
  };

  Select.prototype.componentDidMount = function componentDidMount() {
    if (!this.props.basic) {
      this.MDComponent = new __WEBPACK_IMPORTED_MODULE_2__material_select___["a" /* MDCSelect */](this.control);
      this.MDComponent.listen("MDCSelect:change", this._changed);
      this.updateSelection();
    }
  };

  Select.prototype.componentWillUnmount = function componentWillUnmount() {
    this.MDComponent.unlisten("MDCSelect:change", this._changed);
    this.MDComponent.destroy && this.MDComponent.destroy();
  };

  Select.prototype.updateSelection = function updateSelection() {
    if ("selectedIndex" in this.props && this.MDComponent) {
      this.MDComponent.selectedIndex = this.props.selectedIndex;
    }
  };

  Select.prototype.componentDidUpdate = function componentDidUpdate() {
    this.updateSelection();
    if (this.MDComponent && this.MDComponent.foundation_) {
      this.MDComponent.foundation_.resize();
    }
  };

  Select.prototype.materialDom = function materialDom(props) {
    var _this2 = this;

    if (props.basic) {
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("select", _extends({}, props, {
        ref: function ref(control) {
          _this2.control = control;
        }
      }), props.children);
    }

    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("div", _extends({
      role: "listbox"
    }, props, {
      ref: function ref(control) {
        _this2.control = control;
      }
    }), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("span", { className: "mdc-select__selected-text" }, props.hintText), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("div", { className: "mdc-simple-menu mdc-select__menu" }, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("ul", { className: "mdc-list mdc-simple-menu__items " }, props.children)));
  };

  return Select;
}(__WEBPACK_IMPORTED_MODULE_1__MaterialComponent__["a" /* default */]);

Select.Item = __WEBPACK_IMPORTED_MODULE_3__List__["a" /* default */].Item;

/* harmony default export */ __webpack_exports__["a"] = (Select);

/***/ }),

/***/ "9xBA":
/***/ (function(module, exports) {

module.exports = "import {h, Component} from 'preact';\r\nimport Tabs from 'preact-material-components/Tabs';\r\nimport 'preact-material-components/Tabs/style.css';\r\n\r\nexport default class TabsPage extends Component {\r\n  render(){\r\n    return (\r\n      <div>\r\n        <Tabs className='demo-tabs' indicator-accent={true}>\r\n          <Tabs.Tab>Tab1</Tabs.Tab>\r\n          <Tabs.Tab>Tab2</Tabs.Tab>\r\n          <Tabs.Tab>Tab3</Tabs.Tab>\r\n        </Tabs>\r\n      </div>\r\n    );\r\n  }\r\n}\r\n"

/***/ }),

/***/ "B/9r":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentTable; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__("KM04");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var _ref = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	"div",
	{ className: "mdc-typography--display1" },
	"Components and their props"
);

var _ref2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	"li",
	null,
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
		"div",
		{ className: "mdc-typography--caption" },
		"no specific props"
	)
);

var ComponentTable = function (_Component) {
	_inherits(ComponentTable, _Component);

	function ComponentTable() {
		_classCallCheck(this, ComponentTable);

		return _possibleConstructorReturn(this, _Component.apply(this, arguments));
	}

	ComponentTable.prototype.render = function render() {
		return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
			"div",
			null,
			_ref,
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
							component.props.length === 0 && _ref2
						)
					);
				})
			)
		);
	};

	return ComponentTable;
}(__WEBPACK_IMPORTED_MODULE_0_preact__["Component"]);



/***/ }),

/***/ "B101":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cssClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return strings; });
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
  CLOSED_CLASS: 'mdc-linear-progress--closed',
  INDETERMINATE_CLASS: 'mdc-linear-progress--indeterminate',
  REVERSED_CLASS: 'mdc-linear-progress--reversed'
};

var strings = {
  PRIMARY_BAR_SELECTOR: '.mdc-linear-progress__primary-bar',
  BUFFER_SELECTOR: '.mdc-linear-progress__buffer'
};

/***/ }),

/***/ "Bd3S":
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

/** @const {string} */
var ROOT = 'mdc-checkbox';

/** @enum {string} */
var cssClasses = {
  UPGRADED: 'mdc-checkbox--upgraded',
  CHECKED: 'mdc-checkbox--checked',
  INDETERMINATE: 'mdc-checkbox--indeterminate',
  DISABLED: 'mdc-checkbox--disabled',
  ANIM_UNCHECKED_CHECKED: 'mdc-checkbox--anim-unchecked-checked',
  ANIM_UNCHECKED_INDETERMINATE: 'mdc-checkbox--anim-unchecked-indeterminate',
  ANIM_CHECKED_UNCHECKED: 'mdc-checkbox--anim-checked-unchecked',
  ANIM_CHECKED_INDETERMINATE: 'mdc-checkbox--anim-checked-indeterminate',
  ANIM_INDETERMINATE_CHECKED: 'mdc-checkbox--anim-indeterminate-checked',
  ANIM_INDETERMINATE_UNCHECKED: 'mdc-checkbox--anim-indeterminate-unchecked'
};

/** @enum {string} */
var strings = {
  NATIVE_CONTROL_SELECTOR: '.' + ROOT + '__native-control',
  TRANSITION_STATE_INIT: 'init',
  TRANSITION_STATE_CHECKED: 'checked',
  TRANSITION_STATE_UNCHECKED: 'unchecked',
  TRANSITION_STATE_INDETERMINATE: 'indeterminate'
};

/** @enum {number} */
var numbers = {
  ANIM_END_LATCH_MS: 100
};

/***/ }),

/***/ "Bfdu":
/***/ (function(module, exports) {

module.exports = "import {h, Component} from 'preact';\r\nimport Elevation from 'preact-material-components/Elevation';\r\nimport 'preact-material-components/Elevation/style.css';\r\n\r\nexport default class ElevationPage extends Component {\r\n  render(){\r\n    return (\r\n      <div>\r\n        <Elevation z0={true}>Z0</Elevation>\r\n        <Elevation z1={true}>Z1</Elevation>\r\n        <Elevation z2={true}>Z2</Elevation>\r\n      </div>\r\n    );\r\n  }\r\n}\r\n"

/***/ }),

/***/ "C4gN":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MDCSelect; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base__ = __webpack_require__("dSNL");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_menu__ = __webpack_require__("Qdhi");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__foundation__ = __webpack_require__("+fvO");
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

    return _possibleConstructorReturn(this, _MDCComponent.apply(this, arguments));
  }

  MDCSelect.attachTo = function attachTo(root) {
    return new MDCSelect(root);
  };

  MDCSelect.prototype.item = function item(index) {
    return this.options[index] || null;
  };

  MDCSelect.prototype.nameditem = function nameditem(key) {
    // NOTE: IE11 precludes us from using Array.prototype.find
    for (var i = 0, options = this.options, option; option = options[i]; i++) {
      if (option.id === key || option.getAttribute('name') === key) {
        return option;
      }
    }
    return null;
  };

  MDCSelect.prototype.initialize = function initialize() {
    var menuFactory = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function (el) {
      return new __WEBPACK_IMPORTED_MODULE_1__material_menu__["a" /* MDCSimpleMenu */](el);
    };

    this.menuEl_ = this.root_.querySelector('.mdc-select__menu');
    this.menu_ = menuFactory(this.menuEl_);
    this.selectedText_ = this.root_.querySelector('.mdc-select__selected-text');
  };

  MDCSelect.prototype.getDefaultFoundation = function getDefaultFoundation() {
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
        return _this2.emit(__WEBPACK_IMPORTED_MODULE_2__foundation__["a" /* default */].strings.CHANGE_EVENT, _this2);
      },
      getWindowInnerHeight: function getWindowInnerHeight() {
        return window.innerHeight;
      }
    });
  };

  MDCSelect.prototype.initialSyncWithDOM = function initialSyncWithDOM() {
    var selectedOption = this.selectedOptions[0];
    var idx = selectedOption ? this.options.indexOf(selectedOption) : -1;
    if (idx >= 0) {
      this.selectedIndex = idx;
    }

    if (this.root_.getAttribute('aria-disabled') === 'true') {
      this.disabled = true;
    }
  };

  _createClass(MDCSelect, [{
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
  }]);

  return MDCSelect;
}(__WEBPACK_IMPORTED_MODULE_0__material_base__["a" /* MDCComponent */]);

/***/ }),

/***/ "CRqb":
/***/ (function(module, exports) {

module.exports = "import {h, Component} from 'preact';\r\nimport List from 'preact-material-components/List';\r\nimport FormField from 'preact-material-components/FormField';\r\nimport 'preact-material-components/FormField/style.css';\r\nimport 'preact-material-components/List/style.css';\r\n\r\nexport default class ListPage extends Component {\r\n  render(){\r\n    return (\r\n      <div>\r\n        <FormField>\r\n          <Radio id=\"r1\" name='opts'></Radio>\r\n          <label for=\"r1\">Radio 1</label>\r\n        </FormField>\r\n      </div>\r\n    );\r\n  }\r\n}\r\n"

/***/ }),

/***/ "D61N":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MDCDialogFoundation; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base__ = __webpack_require__("dSNL");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__("8oKx");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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
        registerTransitionEndHandler: function registerTransitionEndHandler() /* handler: EventListener */{},
        deregisterTransitionEndHandler: function deregisterTransitionEndHandler() /* handler: EventListener */{},
        notifyAccept: function notifyAccept() {},
        notifyCancel: function notifyCancel() {},
        trapFocusOnSurface: function trapFocusOnSurface() {},
        untrapFocusOnSurface: function untrapFocusOnSurface() {},
        isDialog: function isDialog() {
          return (/* el: Element */ /* boolean */false
          );
        }
      };
    }
  }]);

  function MDCDialogFoundation(adapter) {
    _classCallCheck(this, MDCDialogFoundation);

    var _this = _possibleConstructorReturn(this, _MDCFoundation.call(this, _extends(MDCDialogFoundation.defaultAdapter, adapter)));

    _this.isOpen_ = false;
    _this.componentClickHandler_ = function (evt) {
      if (_this.adapter_.eventTargetHasClass(evt.target, __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* cssClasses */].BACKDROP)) {
        _this.cancel(true);
      }
    };
    _this.dialogClickHandler_ = function (evt) {
      return _this.handleDialogClick_(evt);
    };
    _this.documentKeydownHandler_ = function (evt) {
      if (evt.key && evt.key === 'Escape' || evt.keyCode === 27) {
        _this.cancel(true);
      }
    };
    _this.transitionEndHandler_ = function (evt) {
      return _this.handleTransitionEnd_(evt);
    };
    return _this;
  }

  MDCDialogFoundation.prototype.destroy = function destroy() {
    // Ensure that dialog is cleaned up when destroyed
    if (this.isOpen_) {
      this.adapter_.deregisterSurfaceInteractionHandler('click', this.dialogClickHandler_);
      this.adapter_.deregisterDocumentKeydownHandler(this.documentKeydownHandler_);
      this.adapter_.deregisterInteractionHandler('click', this.componentClickHandler_);
      this.adapter_.untrapFocusOnSurface();
      this.adapter_.deregisterTransitionEndHandler(this.transitionEndHandler_);
      this.adapter_.removeClass(MDCDialogFoundation.cssClasses.ANIMATING);
      this.adapter_.removeClass(MDCDialogFoundation.cssClasses.OPEN);
      this.enableScroll_();
    }
  };

  MDCDialogFoundation.prototype.open = function open() {
    this.isOpen_ = true;
    this.disableScroll_();
    this.adapter_.registerDocumentKeydownHandler(this.documentKeydownHandler_);
    this.adapter_.registerSurfaceInteractionHandler('click', this.dialogClickHandler_);
    this.adapter_.registerInteractionHandler('click', this.componentClickHandler_);
    this.adapter_.registerTransitionEndHandler(this.transitionEndHandler_);
    this.adapter_.addClass(MDCDialogFoundation.cssClasses.ANIMATING);
    this.adapter_.addClass(MDCDialogFoundation.cssClasses.OPEN);
  };

  MDCDialogFoundation.prototype.close = function close() {
    this.isOpen_ = false;
    this.adapter_.deregisterSurfaceInteractionHandler('click', this.dialogClickHandler_);
    this.adapter_.deregisterDocumentKeydownHandler(this.documentKeydownHandler_);
    this.adapter_.deregisterInteractionHandler('click', this.componentClickHandler_);
    this.adapter_.untrapFocusOnSurface();
    this.adapter_.registerTransitionEndHandler(this.transitionEndHandler_);
    this.adapter_.addClass(MDCDialogFoundation.cssClasses.ANIMATING);
    this.adapter_.removeClass(MDCDialogFoundation.cssClasses.OPEN);
  };

  MDCDialogFoundation.prototype.isOpen = function isOpen() {
    return this.isOpen_;
  };

  MDCDialogFoundation.prototype.accept = function accept(shouldNotify) {
    if (shouldNotify) {
      this.adapter_.notifyAccept();
    }

    this.close();
  };

  MDCDialogFoundation.prototype.cancel = function cancel(shouldNotify) {
    if (shouldNotify) {
      this.adapter_.notifyCancel();
    }

    this.close();
  };

  MDCDialogFoundation.prototype.handleDialogClick_ = function handleDialogClick_(evt) {
    var target = evt.target;

    if (this.adapter_.eventTargetHasClass(target, __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* cssClasses */].ACCEPT_BTN)) {
      this.accept(true);
    } else if (this.adapter_.eventTargetHasClass(target, __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* cssClasses */].CANCEL_BTN)) {
      this.cancel(true);
    }
  };

  MDCDialogFoundation.prototype.handleTransitionEnd_ = function handleTransitionEnd_(evt) {
    if (this.adapter_.isDialog(evt.target)) {
      this.adapter_.deregisterTransitionEndHandler(this.transitionEndHandler_);
      this.adapter_.removeClass(MDCDialogFoundation.cssClasses.ANIMATING);
      if (this.isOpen_) {
        this.adapter_.trapFocusOnSurface();
      } else {
        this.enableScroll_();
      };
    };
  };

  MDCDialogFoundation.prototype.disableScroll_ = function disableScroll_() {
    this.adapter_.addBodyClass(__WEBPACK_IMPORTED_MODULE_1__constants__["a" /* cssClasses */].SCROLL_LOCK);
  };

  MDCDialogFoundation.prototype.enableScroll_ = function enableScroll_() {
    this.adapter_.removeBodyClass(__WEBPACK_IMPORTED_MODULE_1__constants__["a" /* cssClasses */].SCROLL_LOCK);
  };

  return MDCDialogFoundation;
}(__WEBPACK_IMPORTED_MODULE_0__material_base__["b" /* MDCFoundation */]);



/***/ }),

/***/ "D9cU":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Menu; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__("KM04");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_preact_router__ = __webpack_require__("/QC5");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_preact_material_components_Drawer__ = __webpack_require__("ynRT");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_preact_material_components_List__ = __webpack_require__("E7XR");


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Dependencies



// Material Components



var _ref2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	__WEBPACK_IMPORTED_MODULE_2_preact_material_components_Drawer__["a" /* default */].TemporaryDrawerHeader,
	{ className: 'mdc-theme--primary-bg' },
	'Components'
);

var Menu = function (_Component) {
	_inherits(Menu, _Component);

	function Menu() {
		_classCallCheck(this, Menu);

		var _this = _possibleConstructorReturn(this, _Component.call(this));

		_this._onClick = _this._onClick.bind(_this);
		return _this;
	}

	Menu.prototype._routeFromLink = function _routeFromLink(node) {
		// only valid elements
		if (!node || !node.getAttribute) return;

		var href = node.getAttribute('href'),
		    target = node.getAttribute('target');

		// ignore links with targets and non-path URLs
		if (!href || !href.match(/^\//g) || target && !target.match(/^_?self$/i)) return;

		// attempt to route, if no match simply cede control to browser
		return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_preact_router__["b" /* route */])(href);
	};

	Menu.prototype._handleLinkClick = function _handleLinkClick(e) {
		if (e.button == 0) {
			this._routeFromLink(e.currentTarget || e.target || this);
			return this._prevent(e);
		}
	};

	Menu.prototype._prevent = function _prevent(e) {
		if (e) {
			if (e.stopImmediatePropagation) e.stopImmediatePropagation();
			if (e.stopPropagation) e.stopPropagation();
			e.preventDefault();
		}
		return false;
	};

	Menu.prototype._onClick = function _onClick(e) {
		this.close();
		this._handleLinkClick(e);
	};

	Menu.prototype.close = function close() {
		this.drawer.MDComponent.open = false;
	};

	Menu.prototype.open = function open() {
		this.drawer.MDComponent.open = true;
	};

	Menu.prototype.render = function render(_ref) {
		var _this2 = this;

		var items = _ref.items;

		return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
			__WEBPACK_IMPORTED_MODULE_2_preact_material_components_Drawer__["a" /* default */].TemporaryDrawer,
			{ ref: function ref(drawer) {
					return _this2.drawer = drawer;
				} },
			_ref2,
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
				__WEBPACK_IMPORTED_MODULE_2_preact_material_components_Drawer__["a" /* default */].TemporaryDrawerContent,
				null,
				items.map(function (_ref3) {
					var icon = _ref3.icon,
					    link = _ref3.link,
					    text = _ref3.text;
					return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						__WEBPACK_IMPORTED_MODULE_2_preact_material_components_Drawer__["a" /* default */].DrawerItem,
						{ href: link, onClick: _this2._onClick },
						__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
							__WEBPACK_IMPORTED_MODULE_3_preact_material_components_List__["a" /* default */].ItemIcon,
							null,
							icon || 'code'
						),
						text
					);
				})
			)
		);
	};

	return Menu;
}(__WEBPACK_IMPORTED_MODULE_0_preact__["Component"]);



/***/ }),

/***/ "DAAL":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__("KM04");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_preact_material_components_Dialog__ = __webpack_require__("JtzT");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_preact_material_components_Button__ = __webpack_require__("7/cg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_preact_material_components_List__ = __webpack_require__("E7XR");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_component_table__ = __webpack_require__("B/9r");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_code_block__ = __webpack_require__("F4jb");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__style__ = __webpack_require__("MviZ");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__sample_txt__ = __webpack_require__("r/eL");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__sample_txt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__sample_txt__);


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }










var _ref = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	'div',
	{ className: 'mdc-typography--display1' },
	'Sample code '
);

var _ref2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	__WEBPACK_IMPORTED_MODULE_5__components_code_block__["a" /* default */],
	null,
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
		'code',
		{ 'class': 'lang-js' },
		__WEBPACK_IMPORTED_MODULE_7__sample_txt___default.a
	)
);

var _ref3 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	'div',
	{ className: 'mdc-typography--display1' },
	'Original documentation'
);

var _ref4 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
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
);

var _ref5 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	'div',
	{ className: 'mdc-typography--display1' },
	'Demo '
);

var _ref6 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Dialog__["a" /* default */].Header,
	null,
	'Use Google\'s location service?'
);

var _ref7 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Dialog__["a" /* default */].Body,
	null,
	'Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.'
);

var _ref8 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
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
);

var _ref9 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Dialog__["a" /* default */].Header,
	null,
	'Scroll for me ;)'
);

var _ref10 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
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
);

var _ref11 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
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
);

var DialogPage = function (_Component) {
	_inherits(DialogPage, _Component);

	function DialogPage() {
		_classCallCheck(this, DialogPage);

		var _this = _possibleConstructorReturn(this, _Component.call(this));

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
				name: 'cancel',
				description: 'Makes the button, cancel button.'
			}]
		}];
		return _this;
	}

	DialogPage.prototype.render = function render() {
		var _this2 = this;

		return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
			'div',
			{ className: 'page-dialog' },
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_4__components_component_table__["a" /* default */], { data: this.propsTable }),
			_ref,
			_ref2,
			_ref3,
			_ref4,
			_ref5,
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
				_ref6,
				_ref7,
				_ref8
			),
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
				__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Dialog__["a" /* default */],
				{ ref: function ref(scrollingDlg) {
						_this2.scrollingDlg = scrollingDlg;
					} },
				_ref9,
				_ref10,
				_ref11
			)
		);
	};

	return DialogPage;
}(__WEBPACK_IMPORTED_MODULE_0_preact__["Component"]);



/***/ }),

/***/ "Dm/K":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MDCSliderFoundation; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__("g9TK");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_animation__ = __webpack_require__("5qFY");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_base_foundation__ = __webpack_require__("uJAj");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 *you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */






var KEY_IDS = {
  ARROW_LEFT: 'ArrowLeft',
  ARROW_RIGHT: 'ArrowRight',
  ARROW_UP: 'ArrowUp',
  ARROW_DOWN: 'ArrowDown',
  HOME: 'Home',
  END: 'End',
  PAGE_UP: 'PageUp',
  PAGE_DOWN: 'PageDown'
};

var MDCSliderFoundation = function (_MDCFoundation) {
  _inherits(MDCSliderFoundation, _MDCFoundation);

  _createClass(MDCSliderFoundation, null, [{
    key: 'cssClasses',
    get: function get() {
      return __WEBPACK_IMPORTED_MODULE_0__constants__["b" /* cssClasses */];
    }
  }, {
    key: 'strings',
    get: function get() {
      return __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* strings */];
    }
  }, {
    key: 'numbers',
    get: function get() {
      return __WEBPACK_IMPORTED_MODULE_0__constants__["c" /* numbers */];
    }
  }, {
    key: 'defaultAdapter',
    get: function get() {
      return {
        hasClass: function hasClass() {
          return (/* className: string */ /* boolean */false
          );
        },
        addClass: function addClass() /* className: string */{},
        removeClass: function removeClass() /* className: string */{},
        getAttribute: function getAttribute() {
          return (/* name: string */ /* string|null */null
          );
        },
        setAttribute: function setAttribute() /* name: string, value: string */{},
        removeAttribute: function removeAttribute() /* name: string */{},
        computeBoundingRect: function computeBoundingRect() {
          return (/* ClientRect */{
              top: 0, right: 0, bottom: 0, left: 0, width: 0, height: 0
            }
          );
        },
        getTabIndex: function getTabIndex() {
          return (/* number */0
          );
        },
        registerInteractionHandler: function registerInteractionHandler() /* type: string, handler: EventListener */{},
        deregisterInteractionHandler: function deregisterInteractionHandler() /* type: string, handler: EventListener */{},
        registerThumbContainerInteractionHandler: function registerThumbContainerInteractionHandler() /* type: string, handler: EventListener */{},
        deregisterThumbContainerInteractionHandler: function deregisterThumbContainerInteractionHandler() /* type: string, handler: EventListener */{},
        registerBodyInteractionHandler: function registerBodyInteractionHandler() /* type: string, handler: EventListener */{},
        deregisterBodyInteractionHandler: function deregisterBodyInteractionHandler() /* type: string, handler: EventListener */{},
        registerResizeHandler: function registerResizeHandler() /* handler: EventListener */{},
        deregisterResizeHandler: function deregisterResizeHandler() /* handler: EventListener */{},
        notifyInput: function notifyInput() {},
        notifyChange: function notifyChange() {},
        setThumbContainerStyleProperty: function setThumbContainerStyleProperty() /* propertyName: string, value: string */{},
        setTrackStyleProperty: function setTrackStyleProperty() /* propertyName: string, value: string */{},
        setMarkerValue: function setMarkerValue() /* value: number */{},
        appendTrackMarkers: function appendTrackMarkers() /* numMarkers: number */{},
        removeTrackMarkers: function removeTrackMarkers() {},
        setLastTrackMarkersStyleProperty: function setLastTrackMarkersStyleProperty() /* propertyName: string, value: string */{},
        isRTL: function isRTL() {
          return (/* boolean */false
          );
        }
      };
    }
  }]);

  function MDCSliderFoundation() {
    var adapter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, MDCSliderFoundation);

    var _this = _possibleConstructorReturn(this, _MDCFoundation.call(this, _extends(MDCSliderFoundation.defaultAdapter, adapter)));

    _this.rect_ = null;
    // We set this to NaN since we want it to be a number, but we can't use '0' or '-1'
    // because those could be valid tabindices set by the client code.
    _this.savedTabIndex_ = NaN;
    _this.off_ = false;
    _this.active_ = false;
    _this.inTransit_ = false;
    _this.isDiscrete_ = false;
    _this.hasTrackMarker_ = false;
    _this.handlingThumbTargetEvt_ = false;
    _this.min_ = 0;
    _this.max_ = 100;
    _this.step_ = 0;
    _this.value_ = 0;
    _this.disabled_ = false;
    _this.preventFocusState_ = false;
    _this.updateUIFrame_ = 0;
    _this.thumbContainerPointerHandler_ = function () {
      _this.handlingThumbTargetEvt_ = true;
    };
    _this.mousedownHandler_ = _this.createDownHandler_('mousemove', 'mouseup');
    _this.pointerdownHandler_ = _this.createDownHandler_('pointermove', 'pointerup');
    _this.touchstartHandler_ = _this.createDownHandler_('touchmove', 'touchend', function (_ref) {
      var targetTouches = _ref.targetTouches;
      return targetTouches[0].pageX;
    });
    _this.keydownHandler_ = function (evt) {
      return _this.handleKeydown_(evt);
    };
    _this.focusHandler_ = function () {
      return _this.handleFocus_();
    };
    _this.blurHandler_ = function () {
      return _this.handleBlur_();
    };
    _this.resizeHandler_ = function () {
      return _this.layout();
    };
    return _this;
  }

  MDCSliderFoundation.prototype.init = function init() {
    var _this2 = this;

    this.isDiscrete_ = this.adapter_.hasClass(__WEBPACK_IMPORTED_MODULE_0__constants__["b" /* cssClasses */].IS_DISCRETE);
    this.hasTrackMarker_ = this.adapter_.hasClass(__WEBPACK_IMPORTED_MODULE_0__constants__["b" /* cssClasses */].HAS_TRACK_MARKER);
    this.adapter_.registerInteractionHandler('mousedown', this.mousedownHandler_);
    this.adapter_.registerInteractionHandler('pointerdown', this.pointerdownHandler_);
    this.adapter_.registerInteractionHandler('touchstart', this.touchstartHandler_);
    this.adapter_.registerInteractionHandler('keydown', this.keydownHandler_);
    this.adapter_.registerInteractionHandler('focus', this.focusHandler_);
    this.adapter_.registerInteractionHandler('blur', this.blurHandler_);
    ['mousedown', 'pointerdown', 'touchstart'].forEach(function (evtName) {
      _this2.adapter_.registerThumbContainerInteractionHandler(evtName, _this2.thumbContainerPointerHandler_);
    });
    this.adapter_.registerResizeHandler(this.resizeHandler_);
    this.layout();
    // At last step, provide a reasonable default value to discrete slider
    if (this.isDiscrete_ && this.getStep() == 0) {
      this.setStep(1);
    }
  };

  MDCSliderFoundation.prototype.destroy = function destroy() {
    var _this3 = this;

    this.adapter_.deregisterInteractionHandler('mousedown', this.mousedownHandler_);
    this.adapter_.deregisterInteractionHandler('pointerdown', this.mousedownHandler_);
    this.adapter_.deregisterInteractionHandler('touchstart', this.mousedownHandler_);
    this.adapter_.deregisterInteractionHandler('keydown', this.keydownHandler_);
    this.adapter_.deregisterInteractionHandler('focus', this.focusHandler_);
    this.adapter_.deregisterInteractionHandler('blur', this.blurHandler_);
    ['mousedown', 'pointerdown', 'touchstart'].forEach(function (evtName) {
      _this3.adapter_.deregisterThumbContainerInteractionHandler(evtName, _this3.thumbContainerPointerHandler_);
    });
    this.adapter_.deregisterResizeHandler(this.resizeHandler_);
  };

  MDCSliderFoundation.prototype.setupTrackMarker = function setupTrackMarker() {
    if (this.isDiscrete_ && this.hasTrackMarker_ && this.getStep() != 0) {
      var min = this.getMin();
      var max = this.getMax();
      var step = this.getStep();
      var numMarkers = (max - min) / step;

      // In case distance between max & min is indivisible to step,
      // we place the secondary to last marker proportionally at where thumb
      // could reach and place the last marker at max value
      var indivisible = Math.ceil(numMarkers) !== numMarkers;
      if (indivisible) {
        numMarkers = Math.ceil(numMarkers);
      }

      this.adapter_.removeTrackMarkers();
      this.adapter_.appendTrackMarkers(numMarkers);

      if (indivisible) {
        var lastStepRatio = (max - numMarkers * step) / step + 1;
        var flex = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__material_animation__["a" /* getCorrectPropertyName */])(window, 'flex');
        this.adapter_.setLastTrackMarkersStyleProperty(flex, lastStepRatio);
      }
    }
  };

  MDCSliderFoundation.prototype.layout = function layout() {
    this.rect_ = this.adapter_.computeBoundingRect();
    this.updateUIForCurrentValue_();
  };

  MDCSliderFoundation.prototype.getValue = function getValue() {
    return this.value_;
  };

  MDCSliderFoundation.prototype.setValue = function setValue(value) {
    this.setValue_(value, false);
  };

  MDCSliderFoundation.prototype.getMax = function getMax() {
    return this.max_;
  };

  MDCSliderFoundation.prototype.setMax = function setMax(max) {
    if (max < this.min_) {
      throw new Error('Cannot set max to be less than the slider\'s minimum value');
    }
    this.max_ = max;
    this.setValue_(this.value_, false, true);
    this.adapter_.setAttribute(__WEBPACK_IMPORTED_MODULE_0__constants__["a" /* strings */].ARIA_VALUEMAX, String(this.max_));
    this.setupTrackMarker();
  };

  MDCSliderFoundation.prototype.getMin = function getMin() {
    return this.min_;
  };

  MDCSliderFoundation.prototype.setMin = function setMin(min) {
    if (min > this.max_) {
      throw new Error('Cannot set min to be greater than the slider\'s maximum value');
    }
    this.min_ = min;
    this.setValue_(this.value_, false, true);
    this.adapter_.setAttribute(__WEBPACK_IMPORTED_MODULE_0__constants__["a" /* strings */].ARIA_VALUEMIN, String(this.min_));
    this.setupTrackMarker();
  };

  MDCSliderFoundation.prototype.getStep = function getStep() {
    return this.step_;
  };

  MDCSliderFoundation.prototype.setStep = function setStep(step) {
    if (step < 0) {
      throw new Error('Step cannot be set to a negative number');
    }
    if (this.isDiscrete_ && (typeof step !== 'number' || step < 1)) {
      step = 1;
    }
    this.step_ = step;
    this.setValue_(this.value_, false, true);
    this.setupTrackMarker();
  };

  MDCSliderFoundation.prototype.isDisabled = function isDisabled() {
    return this.disabled_;
  };

  MDCSliderFoundation.prototype.setDisabled = function setDisabled(disabled) {
    this.disabled_ = disabled;
    this.toggleClass_(__WEBPACK_IMPORTED_MODULE_0__constants__["b" /* cssClasses */].DISABLED, this.disabled_);
    if (this.disabled_) {
      this.savedTabIndex_ = this.adapter_.getTabIndex();
      this.adapter_.setAttribute(__WEBPACK_IMPORTED_MODULE_0__constants__["a" /* strings */].ARIA_DISABLED, 'true');
      this.adapter_.removeAttribute('tabindex');
    } else {
      this.adapter_.removeAttribute(__WEBPACK_IMPORTED_MODULE_0__constants__["a" /* strings */].ARIA_DISABLED);
      if (!isNaN(this.savedTabIndex_)) {
        this.adapter_.setAttribute('tabindex', String(this.savedTabIndex_));
      }
    }
  };

  MDCSliderFoundation.prototype.createDownHandler_ = function createDownHandler_(moveEvt, upEvt) {
    var _this4 = this;

    var getPageX = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function (_ref2) {
      var pageX = _ref2.pageX;
      return pageX;
    };

    var moveHandler = function moveHandler(evt) {
      evt.preventDefault();
      _this4.setValueFromEvt_(evt, getPageX);
    };

    var upHandler = function upHandler() {
      _this4.setActive_(false);
      _this4.adapter_.deregisterBodyInteractionHandler(moveEvt, moveHandler);
      _this4.adapter_.deregisterBodyInteractionHandler(upEvt, upHandler);
      _this4.adapter_.notifyChange();
    };

    var downHandler = function downHandler(evt) {
      if (_this4.disabled_) {
        return;
      }

      _this4.preventFocusState_ = true;
      _this4.setInTransit_(!_this4.handlingThumbTargetEvt_);
      _this4.handlingThumbTargetEvt_ = false;

      _this4.setActive_(true);

      _this4.adapter_.registerBodyInteractionHandler(moveEvt, moveHandler);
      _this4.adapter_.registerBodyInteractionHandler(upEvt, upHandler);
      _this4.setValueFromEvt_(evt, getPageX);
    };

    return downHandler;
  };

  MDCSliderFoundation.prototype.setValueFromEvt_ = function setValueFromEvt_(evt, getPageX) {
    var pageX = getPageX(evt);
    var value = this.computeValueFromPageX_(pageX);
    this.setValue_(value, true);
  };

  MDCSliderFoundation.prototype.computeValueFromPageX_ = function computeValueFromPageX_(pageX) {
    var max = this.max_,
        min = this.min_;

    var xPos = pageX - this.rect_.left;
    var pctComplete = xPos / this.rect_.width;
    if (this.adapter_.isRTL()) {
      pctComplete = 1 - pctComplete;
    }
    // Fit the percentage complete between the range [min,max]
    // by remapping from [0, 1] to [min, min+(max-min)].
    return min + pctComplete * (max - min);
  };

  MDCSliderFoundation.prototype.handleKeydown_ = function handleKeydown_(evt) {
    var keyId = this.getKeyId_(evt);
    var value = this.getValueForKeyId_(keyId);
    if (isNaN(value)) {
      return;
    }

    // Prevent page from scrolling due to key presses that would normally scroll the page
    evt.preventDefault();
    this.adapter_.addClass(__WEBPACK_IMPORTED_MODULE_0__constants__["b" /* cssClasses */].FOCUS);
    this.setValue_(value, true);
    this.adapter_.notifyChange();
  };

  MDCSliderFoundation.prototype.getKeyId_ = function getKeyId_(kbdEvt) {
    switch (kbdEvt.key || kbdEvt.keyCode) {
      case KEY_IDS.ARROW_LEFT:
      case 37:
        return KEY_IDS.ARROW_LEFT;
      case KEY_IDS.ARROW_RIGHT:
      case 39:
        return KEY_IDS.ARROW_RIGHT;
      case KEY_IDS.ARROW_UP:
      case 38:
        return KEY_IDS.ARROW_UP;
      case KEY_IDS.ARROW_DOWN:
      case 40:
        return KEY_IDS.ARROW_DOWN;
      case KEY_IDS.HOME:
      case 36:
        return KEY_IDS.HOME;
      case KEY_IDS.END:
      case 35:
        return KEY_IDS.END;
      case KEY_IDS.PAGE_UP:
      case 33:
        return KEY_IDS.PAGE_UP;
      case KEY_IDS.PAGE_DOWN:
      case 34:
        return KEY_IDS.PAGE_DOWN;
      default:
        // Doesn't matter
        return '';
    }
  };

  MDCSliderFoundation.prototype.getValueForKeyId_ = function getValueForKeyId_(keyId) {
    var max = this.max_,
        min = this.min_,
        step = this.step_;

    var delta = step || (max - min) / 100;
    var valueNeedsToBeFlipped = this.adapter_.isRTL() && (keyId === KEY_IDS.ARROW_LEFT || keyId === KEY_IDS.ARROW_RIGHT);
    if (valueNeedsToBeFlipped) {
      delta = -delta;
    }

    switch (keyId) {
      case KEY_IDS.ARROW_LEFT:
      case KEY_IDS.ARROW_DOWN:
        return this.value_ - delta;
      case KEY_IDS.ARROW_RIGHT:
      case KEY_IDS.ARROW_UP:
        return this.value_ + delta;
      case KEY_IDS.HOME:
        return this.min_;
      case KEY_IDS.END:
        return this.max_;
      case KEY_IDS.PAGE_UP:
        return this.value_ + delta * __WEBPACK_IMPORTED_MODULE_0__constants__["c" /* numbers */].PAGE_FACTOR;
      case KEY_IDS.PAGE_DOWN:
        return this.value_ - delta * __WEBPACK_IMPORTED_MODULE_0__constants__["c" /* numbers */].PAGE_FACTOR;
      default:
        return NaN;
    }
  };

  MDCSliderFoundation.prototype.handleFocus_ = function handleFocus_() {
    if (this.preventFocusState_) {
      return;
    }
    this.adapter_.addClass(__WEBPACK_IMPORTED_MODULE_0__constants__["b" /* cssClasses */].FOCUS);
  };

  MDCSliderFoundation.prototype.handleBlur_ = function handleBlur_() {
    this.preventFocusState_ = false;
    this.adapter_.removeClass(__WEBPACK_IMPORTED_MODULE_0__constants__["b" /* cssClasses */].FOCUS);
  };

  MDCSliderFoundation.prototype.setValue_ = function setValue_(value, shouldFireInput) {
    var force = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    if (value === this.value_ && !force) {
      return;
    }

    var min = this.min_,
        max = this.max_;

    var valueSetToBoundary = value === min || value === max;
    if (this.step_ && !valueSetToBoundary) {
      value = this.quantize_(value);
    }
    if (value < min) {
      value = min;
    } else if (value > max) {
      value = max;
    }
    this.value_ = value;
    this.adapter_.setAttribute(__WEBPACK_IMPORTED_MODULE_0__constants__["a" /* strings */].ARIA_VALUENOW, String(this.value_));
    this.updateUIForCurrentValue_();

    if (shouldFireInput) {
      this.adapter_.notifyInput();
      if (this.isDiscrete_) {
        this.adapter_.setMarkerValue(value);
      }
    }
  };

  MDCSliderFoundation.prototype.quantize_ = function quantize_(value) {
    var numSteps = Math.round(value / this.step_);
    var quantizedVal = numSteps * this.step_;
    return quantizedVal;
  };

  MDCSliderFoundation.prototype.updateUIForCurrentValue_ = function updateUIForCurrentValue_() {
    var _this5 = this;

    var max = this.max_,
        min = this.min_,
        value = this.value_;

    var pctComplete = (value - min) / (max - min);
    var translatePx = pctComplete * this.rect_.width;
    if (this.adapter_.isRTL()) {
      translatePx = this.rect_.width - translatePx;
    }

    var transformProp = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__material_animation__["a" /* getCorrectPropertyName */])(window, 'transform');
    var transitionendEvtName = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__material_animation__["b" /* getCorrectEventName */])(window, 'transitionend');

    if (this.inTransit_) {
      var onTransitionEnd = function onTransitionEnd() {
        _this5.setInTransit_(false);
        _this5.adapter_.deregisterThumbContainerInteractionHandler(transitionendEvtName, onTransitionEnd);
      };
      this.adapter_.registerThumbContainerInteractionHandler(transitionendEvtName, onTransitionEnd);
    }

    this.updateUIFrame_ = requestAnimationFrame(function () {
      _this5.setOff_(pctComplete === 0);
      // NOTE(traviskaufman): It would be nice to use calc() here,
      // but IE cannot handle calcs in transforms correctly.
      // See: https://goo.gl/NC2itk
      // Also note that the -50% offset is used to center the slider thumb.
      _this5.adapter_.setThumbContainerStyleProperty(transformProp, 'translateX(' + translatePx + 'px) translateX(-50%)');
      _this5.adapter_.setTrackStyleProperty(transformProp, 'scaleX(' + pctComplete + ')');
    });
  };

  MDCSliderFoundation.prototype.setOff_ = function setOff_(off) {
    this.off_ = off;
    this.toggleClass_(__WEBPACK_IMPORTED_MODULE_0__constants__["b" /* cssClasses */].OFF, this.off_);
  };

  MDCSliderFoundation.prototype.setActive_ = function setActive_(active) {
    this.active_ = active;
    this.toggleClass_(__WEBPACK_IMPORTED_MODULE_0__constants__["b" /* cssClasses */].ACTIVE, this.active_);
  };

  MDCSliderFoundation.prototype.setInTransit_ = function setInTransit_(inTransit) {
    this.inTransit_ = inTransit;
    this.toggleClass_(__WEBPACK_IMPORTED_MODULE_0__constants__["b" /* cssClasses */].IN_TRANSIT, this.inTransit_);
  };

  MDCSliderFoundation.prototype.toggleClass_ = function toggleClass_(className, shouldBePresent) {
    if (shouldBePresent) {
      this.adapter_.addClass(className);
    } else {
      this.adapter_.removeClass(className);
    }
  };

  return MDCSliderFoundation;
}(__WEBPACK_IMPORTED_MODULE_2__material_base_foundation__["a" /* default */]);



/***/ }),

/***/ "DzRl":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MDCSnackbar; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base__ = __webpack_require__("dSNL");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__foundation__ = __webpack_require__("nXW8");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_animation__ = __webpack_require__("5qFY");
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

    return _possibleConstructorReturn(this, _MDCComponent.apply(this, arguments));
  }

  MDCSnackbar.attachTo = function attachTo(root) {
    return new MDCSnackbar(root);
  };

  MDCSnackbar.prototype.show = function show(data) {
    this.foundation_.show(data);
  };

  MDCSnackbar.prototype.getDefaultFoundation = function getDefaultFoundation() {
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
      setFocus: function setFocus() {
        return getActionButton().focus();
      },
      visibilityIsHidden: function visibilityIsHidden() {
        return document.hidden;
      },
      registerCapturedBlurHandler: function registerCapturedBlurHandler(handler) {
        return getActionButton().addEventListener('blur', handler, true);
      },
      deregisterCapturedBlurHandler: function deregisterCapturedBlurHandler(handler) {
        return getActionButton().removeEventListener('blur', handler, true);
      },
      registerVisibilityChangeHandler: function registerVisibilityChangeHandler(handler) {
        return document.addEventListener('visibilitychange', handler);
      },
      deregisterVisibilityChangeHandler: function deregisterVisibilityChangeHandler(handler) {
        return document.removeEventListener('visibilitychange', handler);
      },
      registerCapturedInteractionHandler: function registerCapturedInteractionHandler(evt, handler) {
        return document.body.addEventListener(evt, handler, true);
      },
      deregisterCapturedInteractionHandler: function deregisterCapturedInteractionHandler(evt, handler) {
        return document.body.removeEventListener(evt, handler, true);
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
  };

  _createClass(MDCSnackbar, [{
    key: 'dismissesOnAction',
    get: function get() {
      return this.foundation_.dismissesOnAction();
    },
    set: function set(dismissesOnAction) {
      this.foundation_.setDismissOnAction(dismissesOnAction);
    }
  }]);

  return MDCSnackbar;
}(__WEBPACK_IMPORTED_MODULE_0__material_base__["a" /* MDCComponent */]);

/***/ }),

/***/ "E1C8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormFieldPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__("KM04");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_preact_material_components_Radio__ = __webpack_require__("sdLF");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_preact_material_components_Formfield__ = __webpack_require__("thmM");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_component_table__ = __webpack_require__("B/9r");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_code_block__ = __webpack_require__("F4jb");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__invidual_component_sample_txt__ = __webpack_require__("g/3n");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__invidual_component_sample_txt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__invidual_component_sample_txt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__js_sample_txt__ = __webpack_require__("8Edg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__js_sample_txt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__js_sample_txt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__css_sample_txt__ = __webpack_require__("FEFE");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__css_sample_txt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__css_sample_txt__);


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



// Material Components



// Components



// Samples




// Class

var _ref = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	'div',
	null,
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
		'div',
		{ className: 'mdc-typography--body' },
		__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
			'div',
			null,
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
				'a',
				{ href: 'https://github.com/prateekbh/preact-material-components' },
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'span',
					{ className: 'grey' },
					'preact-material-components'
				)
			),
			' is a thin opinionless wrapper around ',
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
				'a',
				{ href: 'https://github.com/material-components/material-components-web' },
				'material-components-web'
			),
			'. Use these components to add material components to your web app, without worrying about the extra code of components which you are not using.'
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
			' are built to work independently. So there are couple of ways to use them.'
		),
		__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
			'div',
			null,
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
				__WEBPACK_IMPORTED_MODULE_4__components_code_block__["a" /* default */],
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
				'Using the JS of the component'
			),
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
				'div',
				null,
				'If you are using an ES6 codebase, consider using the components individually, as none of the tree shaking currently removes unused classes.',
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					__WEBPACK_IMPORTED_MODULE_4__components_code_block__["a" /* default */],
					null,
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						'code',
						{ 'class': 'lang-js' },
						__WEBPACK_IMPORTED_MODULE_6__js_sample_txt___default.a
					)
				),
				'Although you can import all the components together, you should not. Importing this way will bring unnecessary code of other components into your final bundle. This might hit your metrics like time to interactivity, load times, etc. DO NOT BLOAT YOUR BUNDLE.',
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					__WEBPACK_IMPORTED_MODULE_4__components_code_block__["a" /* default */],
					null,
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						'code',
						{ 'class': 'lang-js' },
						__WEBPACK_IMPORTED_MODULE_5__invidual_component_sample_txt___default.a
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
				'If you are using only a couple of components from the entire package, try importing individual CSS, for the same reason: TO AVOID BLOATING YOUR CSS BUNDLE.',
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					__WEBPACK_IMPORTED_MODULE_4__components_code_block__["a" /* default */],
					null,
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						'code',
						{ 'class': 'lang-js' },
						__WEBPACK_IMPORTED_MODULE_7__css_sample_txt___default.a
					)
				),
				'However this approach might work against you if you use a lot of components. In that case, prefer adding the entire stylesheet at once, as it is more optimized for such cases.',
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					__WEBPACK_IMPORTED_MODULE_4__components_code_block__["a" /* default */],
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
);

var FormFieldPage = function (_Component) {
	_inherits(FormFieldPage, _Component);

	function FormFieldPage() {
		_classCallCheck(this, FormFieldPage);

		var _this = _possibleConstructorReturn(this, _Component.call(this));

		_this.propsTable = [{
			component: 'Formfield',
			props: []
		}];
		return _this;
	}

	FormFieldPage.prototype.render = function render() {
		return _ref;
	};

	return FormFieldPage;
}(__WEBPACK_IMPORTED_MODULE_0_preact__["Component"]);



/***/ }),

/***/ "E7XR":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__("KM04");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__MaterialComponent__ = __webpack_require__("lhA9");
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

    var _this = _possibleConstructorReturn(this, _MaterialComponent.call(this));

    _this.componentName = "list";
    _this._mdcProps = ["dense", "two-line"];
    return _this;
  }

  List.prototype.materialDom = function materialDom(props) {
    var _this2 = this;

    if (props.interactive) {
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("nav", _extends({ ref: function ref(control) {
          return _this2.control = control;
        } }, props), props.children);
    }

    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("ul", _extends({}, props, { ref: function ref(control) {
        return _this2.control = control;
      } }), props.children);
  };

  return List;
}(__WEBPACK_IMPORTED_MODULE_1__MaterialComponent__["a" /* default */]);

var ListItem = function (_MaterialComponent2) {
  _inherits(ListItem, _MaterialComponent2);

  function ListItem() {
    _classCallCheck(this, ListItem);

    var _this3 = _possibleConstructorReturn(this, _MaterialComponent2.call(this));

    _this3.componentName = "list-item";
    return _this3;
  }

  ListItem.prototype.materialDom = function materialDom(props) {
    var _this4 = this;

    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("li", _extends({ role: "option" }, props, { ref: function ref(control) {
        return _this4.control = control;
      } }), props.children);
  };

  return ListItem;
}(__WEBPACK_IMPORTED_MODULE_1__MaterialComponent__["a" /* default */]);

var LinkItem = function (_MaterialComponent3) {
  _inherits(LinkItem, _MaterialComponent3);

  function LinkItem() {
    _classCallCheck(this, LinkItem);

    var _this5 = _possibleConstructorReturn(this, _MaterialComponent3.call(this));

    _this5.componentName = "list-item";
    return _this5;
  }

  LinkItem.prototype.componentDidMount = function componentDidMount() {
    _MaterialComponent3.prototype.attachRipple.call(this);
  };

  LinkItem.prototype.materialDom = function materialDom(props) {
    var _this6 = this;

    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("a", _extends({ role: "option" }, props, { ref: function ref(control) {
        return _this6.control = control;
      } }), props.children);
  };

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

    var _this7 = _possibleConstructorReturn(this, _MaterialComponent4.call(this));

    _this7.componentName = "mdc-list-item__icon";
    return _this7;
  }

  ListItemIcon.prototype.getProxyClassName = function getProxyClassName(props) {
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
  };

  ListItemIcon.prototype.materialDom = function materialDom(props) {
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
  };

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

    var _this9 = _possibleConstructorReturn(this, _ListItemIcon.call(this));

    _this9.componentName = "mdc-list-item__avatar";
    return _this9;
  }

  ListItemAvatar.prototype.materialDom = function materialDom(props) {
    var _this10 = this;

    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("img", _extends({}, props, {
      className: _ListItemIcon.prototype.getProxyClassName.call(this, props)
    }, props, {
      ref: function ref(control) {
        return _this10.control = control;
      },
      width: props.width || "56",
      height: props.height || "56",
      alt: props.alt || ""
    }));
  };

  return ListItemAvatar;
}(ListItemIcon);

var ListDivider = function (_MaterialComponent5) {
  _inherits(ListDivider, _MaterialComponent5);

  function ListDivider() {
    _classCallCheck(this, ListDivider);

    var _this11 = _possibleConstructorReturn(this, _MaterialComponent5.call(this));

    _this11.componentName = "list-divider";
    _this11._mdcProps = ["inset"];
    return _this11;
  }

  ListDivider.prototype.materialDom = function materialDom(props) {
    var _this12 = this;

    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("li", _extends({
      role: "separator"
    }, props, {
      ref: function ref(control) {
        return _this12.control = control;
      }
    }));
  };

  return ListDivider;
}(__WEBPACK_IMPORTED_MODULE_1__MaterialComponent__["a" /* default */]);

var ListTextContainer = function (_MaterialComponent6) {
  _inherits(ListTextContainer, _MaterialComponent6);

  function ListTextContainer() {
    _classCallCheck(this, ListTextContainer);

    var _this13 = _possibleConstructorReturn(this, _MaterialComponent6.call(this));

    _this13.componentName = "list-item__text";
    return _this13;
  }

  ListTextContainer.prototype.materialDom = function materialDom(props) {
    var _this14 = this;

    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("span", _extends({}, props, { ref: function ref(control) {
        return _this14.control = control;
      } }), props.children);
  };

  return ListTextContainer;
}(__WEBPACK_IMPORTED_MODULE_1__MaterialComponent__["a" /* default */]);

var ListPrimaryText = function (_ListTextContainer) {
  _inherits(ListPrimaryText, _ListTextContainer);

  function ListPrimaryText() {
    _classCallCheck(this, ListPrimaryText);

    var _this15 = _possibleConstructorReturn(this, _ListTextContainer.call(this));

    _this15.componentName = "list-item__text__primary";
    return _this15;
  }

  return ListPrimaryText;
}(ListTextContainer);

var ListSecondaryText = function (_ListTextContainer2) {
  _inherits(ListSecondaryText, _ListTextContainer2);

  function ListSecondaryText() {
    _classCallCheck(this, ListSecondaryText);

    var _this16 = _possibleConstructorReturn(this, _ListTextContainer2.call(this));

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

/***/ "EQDb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MDCComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__foundation__ = __webpack_require__("uJAj");
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



/**
 * @template F
 */

var MDCComponent = function () {
  /**
   * @param {!Element} root
   * @return {!MDCComponent}
   */
  MDCComponent.attachTo = function attachTo(root) {
    // Subclasses which extend MDCBase should provide an attachTo() method that takes a root element and
    // returns an instantiated component with its root set to that element. Also note that in the cases of
    // subclasses, an explicit foundation class will not have to be passed in; it will simply be initialized
    // from getDefaultFoundation().
    return new MDCComponent(root, new __WEBPACK_IMPORTED_MODULE_0__foundation__["a" /* default */]());
  };

  /**
   * @param {!Element} root
   * @param {F=} foundation
   * @param {...?} args
   */


  function MDCComponent(root) {
    var foundation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

    _classCallCheck(this, MDCComponent);

    /** @protected {!Element} */
    this.root_ = root;

    for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }

    this.initialize.apply(this, args);
    // Note that we initialize foundation here and not within the constructor's default param so that
    // this.root_ is defined and can be used within the foundation class.
    /** @protected {!F} */
    this.foundation_ = foundation === undefined ? this.getDefaultFoundation() : foundation;
    this.foundation_.init();
    this.initialSyncWithDOM();
  }

  MDCComponent.prototype.initialize = function initialize() /* ...args */{}
  // Subclasses can override this to do any additional setup work that would be considered part of a
  // "constructor". Essentially, it is a hook into the parent constructor before the foundation is
  // initialized. Any additional arguments besides root and foundation will be passed in here.


  /**
   * @return {!F} foundation
   */
  ;

  MDCComponent.prototype.getDefaultFoundation = function getDefaultFoundation() {
    // Subclasses must override this method to return a properly configured foundation class for the
    // component.
    throw new Error('Subclasses must override getDefaultFoundation to return a properly configured ' + 'foundation class');
  };

  MDCComponent.prototype.initialSyncWithDOM = function initialSyncWithDOM() {
    // Subclasses should override this method if they need to perform work to synchronize with a host DOM
    // object. An example of this would be a form control wrapper that needs to synchronize its internal state
    // to some property or attribute of the host DOM. Please note: this is *not* the place to perform DOM
    // reads/writes that would cause layout / paint, as this is called synchronously from within the constructor.
  };

  MDCComponent.prototype.destroy = function destroy() {
    // Subclasses may implement this method to release any resources / deregister any listeners they have
    // attached. An example of this might be deregistering a resize event from the window object.
    this.foundation_.destroy();
  };

  /**
   * Wrapper method to add an event listener to the component's root element. This is most useful when
   * listening for custom events.
   * @param {string} evtType
   * @param {!Function} handler
   */


  MDCComponent.prototype.listen = function listen(evtType, handler) {
    this.root_.addEventListener(evtType, handler);
  };

  /**
   * Wrapper method to remove an event listener to the component's root element. This is most useful when
   * unlistening for custom events.
   * @param {string} evtType
   * @param {!Function} handler
   */


  MDCComponent.prototype.unlisten = function unlisten(evtType, handler) {
    this.root_.removeEventListener(evtType, handler);
  };

  /**
   * Fires a cross-browser-compatible custom event from the component root of the given type,
   * with the given data.
   * @param {string} evtType
   * @param {!Object} evtData
   * @param {boolean=} shouldBubble
   */


  MDCComponent.prototype.emit = function emit(evtType, evtData) {
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
  };

  return MDCComponent;
}();



/***/ }),

/***/ "ElH3":
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

/***/ "F4jb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__("KM04");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__("9qb7");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_highlight_js_lib_highlight__ = __webpack_require__("R7gn");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_highlight_js_lib_highlight___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_highlight_js_lib_highlight__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_highlight_js_lib_languages_javascript__ = __webpack_require__("Yr+x");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_highlight_js_lib_languages_javascript___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_highlight_js_lib_languages_javascript__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_highlight_js_lib_languages_json__ = __webpack_require__("VSmG");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_highlight_js_lib_languages_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_highlight_js_lib_languages_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_highlight_js_lib_languages_xml__ = __webpack_require__("ElH3");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_highlight_js_lib_languages_xml___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_highlight_js_lib_languages_xml__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_highlight_js_styles_tomorrow_night_eighties_css__ = __webpack_require__("9IbV");
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

/***/ "FBM0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MDCSimpleMenuFoundation; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base_foundation__ = __webpack_require__("uJAj");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__adapter__ = __webpack_require__("lmrE");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__("8Kds");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util__ = __webpack_require__("75cn");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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






/**
 * @extends {MDCFoundation<!MDCSimpleMenuAdapter>}
 */

var MDCSimpleMenuFoundation = function (_MDCFoundation) {
  _inherits(MDCSimpleMenuFoundation, _MDCFoundation);

  _createClass(MDCSimpleMenuFoundation, null, [{
    key: 'cssClasses',

    /** @return enum{cssClasses} */
    get: function get() {
      return __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */];
    }

    /** @return enum{strings} */

  }, {
    key: 'strings',
    get: function get() {
      return __WEBPACK_IMPORTED_MODULE_2__constants__["b" /* strings */];
    }

    /** @return enum{numbers} */

  }, {
    key: 'numbers',
    get: function get() {
      return __WEBPACK_IMPORTED_MODULE_2__constants__["c" /* numbers */];
    }

    /**
     * {@see MDCSimpleMenuAdapter} for typing information on parameters and return
     * types.
     * @return {!MDCSimpleMenuAdapter}
     */

  }, {
    key: 'defaultAdapter',
    get: function get() {
      return (/** @type {!MDCSimpleMenuAdapter} */{
          addClass: function addClass() {},
          removeClass: function removeClass() {},
          hasClass: function hasClass() {
            return false;
          },
          hasNecessaryDom: function hasNecessaryDom() {
            return false;
          },
          getAttributeForEventTarget: function getAttributeForEventTarget() {},
          getInnerDimensions: function getInnerDimensions() {
            return {};
          },
          hasAnchor: function hasAnchor() {
            return false;
          },
          getAnchorDimensions: function getAnchorDimensions() {
            return {};
          },
          getWindowDimensions: function getWindowDimensions() {
            return {};
          },
          setScale: function setScale() {},
          setInnerScale: function setInnerScale() {},
          getNumberOfItems: function getNumberOfItems() {
            return 0;
          },
          registerInteractionHandler: function registerInteractionHandler() {},
          deregisterInteractionHandler: function deregisterInteractionHandler() {},
          registerBodyClickHandler: function registerBodyClickHandler() {},
          deregisterBodyClickHandler: function deregisterBodyClickHandler() {},
          getYParamsForItemAtIndex: function getYParamsForItemAtIndex() {
            return {};
          },
          setTransitionDelayForItemAtIndex: function setTransitionDelayForItemAtIndex() {},
          getIndexForEventTarget: function getIndexForEventTarget() {
            return 0;
          },
          notifySelected: function notifySelected() {},
          notifyCancel: function notifyCancel() {},
          saveFocus: function saveFocus() {},
          restoreFocus: function restoreFocus() {},
          isFocused: function isFocused() {
            return false;
          },
          focus: function focus() {},
          getFocusedItemIndex: function getFocusedItemIndex() {
            return -1;
          },
          focusItemAtIndex: function focusItemAtIndex() {},
          isRtl: function isRtl() {
            return false;
          },
          setTransformOrigin: function setTransformOrigin() {},
          setPosition: function setPosition() {},
          getAccurateTime: function getAccurateTime() {
            return 0;
          }
        }
      );
    }

    /** @param {!MDCSimpleMenuAdapter} adapter */

  }]);

  function MDCSimpleMenuFoundation(adapter) {
    _classCallCheck(this, MDCSimpleMenuFoundation);

    /** @private {function(!Event)} */
    var _this = _possibleConstructorReturn(this, _MDCFoundation.call(this, _extends(MDCSimpleMenuFoundation.defaultAdapter, adapter)));

    _this.clickHandler_ = function (evt) {
      return _this.handlePossibleSelected_(evt);
    };
    /** @private {function(!Event)} */
    _this.keydownHandler_ = function (evt) {
      return _this.handleKeyboardDown_(evt);
    };
    /** @private {function(!Event)} */
    _this.keyupHandler_ = function (evt) {
      return _this.handleKeyboardUp_(evt);
    };
    /** @private {function(!Event)} */
    _this.documentClickHandler_ = function (evt) {
      _this.adapter_.notifyCancel();
      _this.close(evt);
    };
    /** @private {boolean} */
    _this.isOpen_ = false;
    /** @private {number} */
    _this.startScaleX_ = 0;
    /** @private {number} */
    _this.startScaleY_ = 0;
    /** @private {number} */
    _this.targetScale_ = 1;
    /** @private {number} */
    _this.scaleX_ = 0;
    /** @private {number} */
    _this.scaleY_ = 0;
    /** @private {boolean} */
    _this.running_ = false;
    /** @private {number} */
    _this.selectedTriggerTimerId_ = 0;
    /** @private {number} */
    _this.animationRequestId_ = 0;
    /** @private {!{ width: number, height: number }} */
    _this.dimensions_;
    /** @private {number} */
    _this.startTime_;
    /** @private {number} */
    _this.itemHeight_;
    return _this;
  }

  MDCSimpleMenuFoundation.prototype.init = function init() {
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
  };

  MDCSimpleMenuFoundation.prototype.destroy = function destroy() {
    clearTimeout(this.selectedTriggerTimerId_);
    // Cancel any currently running animations.
    cancelAnimationFrame(this.animationRequestId_);
    this.adapter_.deregisterInteractionHandler('click', this.clickHandler_);
    this.adapter_.deregisterInteractionHandler('keyup', this.keyupHandler_);
    this.adapter_.deregisterInteractionHandler('keydown', this.keydownHandler_);
    this.adapter_.deregisterBodyClickHandler(this.documentClickHandler_);
  };

  /**
   * Calculates transition delays for individual menu items, so that they fade in one at a time.
   * @private
   */


  MDCSimpleMenuFoundation.prototype.applyTransitionDelays_ = function applyTransitionDelays_() {
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
  };

  /**
   * Removes transition delays from menu items.
   * @private
   */


  MDCSimpleMenuFoundation.prototype.removeTransitionDelays_ = function removeTransitionDelays_() {
    var numItems = this.adapter_.getNumberOfItems();
    for (var i = 0; i < numItems; i++) {
      this.adapter_.setTransitionDelayForItemAtIndex(i, null);
    }
  };

  /**
   * Animates menu opening or closing.
   * @private
   */


  MDCSimpleMenuFoundation.prototype.animationLoop_ = function animationLoop_() {
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

    var currentTime = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__util__["b" /* clamp */])((time - this.startTime_) / TRANSITION_DURATION_MS);

    // Animate X axis very slowly, so that only the Y axis animation is visible during fade-out.
    var currentTimeX = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__util__["b" /* clamp */])((currentTime - TRANSITION_SCALE_ADJUSTMENT_X) / (1 - TRANSITION_SCALE_ADJUSTMENT_X));
    // No time-shifting on the Y axis when closing.
    var currentTimeY = currentTime;

    var startScaleY = this.startScaleY_;
    if (this.targetScale_ === 1) {
      // Start with the menu at the height of a single item.
      if (this.itemHeight_) {
        startScaleY = Math.max(this.itemHeight_ / this.dimensions_.height, startScaleY);
      }
      // X axis moves faster, so time-shift forward.
      currentTimeX = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__util__["b" /* clamp */])(currentTime + TRANSITION_SCALE_ADJUSTMENT_X);
      // Y axis moves slower, so time-shift backwards and adjust speed by the difference.
      currentTimeY = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__util__["b" /* clamp */])((currentTime - TRANSITION_SCALE_ADJUSTMENT_Y) / (1 - TRANSITION_SCALE_ADJUSTMENT_Y));
    }

    // Apply cubic bezier easing independently to each axis.
    var easeX = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__util__["c" /* bezierProgress */])(currentTimeX, TRANSITION_X1, TRANSITION_Y1, TRANSITION_X2, TRANSITION_Y2);
    var easeY = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__util__["c" /* bezierProgress */])(currentTimeY, TRANSITION_X1, TRANSITION_Y1, TRANSITION_X2, TRANSITION_Y2);

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
  };

  /**
   * Starts the open or close animation.
   * @private
   */


  MDCSimpleMenuFoundation.prototype.animateMenu_ = function animateMenu_() {
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
  };

  /**
   * @param {?number} focusIndex
   * @private
   */


  MDCSimpleMenuFoundation.prototype.focusOnOpen_ = function focusOnOpen_(focusIndex) {
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
  };

  /**
   * Handle keys that we want to repeat on hold (tab and arrows).
   * @param {!Event} evt
   * @return {boolean}
   * @private
   */


  MDCSimpleMenuFoundation.prototype.handleKeyboardDown_ = function handleKeyboardDown_(evt) {
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
  };

  /**
   * Handle keys that we don't want to repeat on hold (Enter, Space, Escape).
   * @param {!Event} evt
   * @return {boolean}
   * @private
   */


  MDCSimpleMenuFoundation.prototype.handleKeyboardUp_ = function handleKeyboardUp_(evt) {
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
  };

  /**
   * @param {!Event} evt
   * @private
   */


  MDCSimpleMenuFoundation.prototype.handlePossibleSelected_ = function handlePossibleSelected_(evt) {
    var _this4 = this;

    if (this.adapter_.getAttributeForEventTarget(evt.target, __WEBPACK_IMPORTED_MODULE_2__constants__["b" /* strings */].ARIA_DISABLED_ATTR) === 'true') {
      return;
    }
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
    }, __WEBPACK_IMPORTED_MODULE_2__constants__["c" /* numbers */].SELECTED_TRIGGER_DELAY);
  };

  /** @private */


  MDCSimpleMenuFoundation.prototype.autoPosition_ = function autoPosition_() {
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

    var position = (_position = {}, _position[horizontal] = '0', _position[vertical] = '0', _position);

    this.adapter_.setTransformOrigin(vertical + ' ' + horizontal);
    this.adapter_.setPosition(position);
  };

  /**
   * Open the menu.
   * @param {{focusIndex: ?number}=} options
   */


  MDCSimpleMenuFoundation.prototype.open = function open() {
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
      _this5.adapter_.registerBodyClickHandler(_this5.documentClickHandler_);
    });
    this.isOpen_ = true;
  };

  /**
   * Closes the menu.
   * @param {Event=} evt
   */


  MDCSimpleMenuFoundation.prototype.close = function close() {
    var _this6 = this;

    var evt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

    var targetIsDisabled = evt ? this.adapter_.getAttributeForEventTarget(evt.target, __WEBPACK_IMPORTED_MODULE_2__constants__["b" /* strings */].ARIA_DISABLED_ATTR) === 'true' : false;

    if (targetIsDisabled) {
      return;
    }

    this.adapter_.deregisterBodyClickHandler(this.documentClickHandler_);
    this.adapter_.addClass(MDCSimpleMenuFoundation.cssClasses.ANIMATING);
    requestAnimationFrame(function () {
      _this6.removeTransitionDelays_();
      _this6.animateMenu_();
      _this6.adapter_.removeClass(MDCSimpleMenuFoundation.cssClasses.OPEN);
    });
    this.isOpen_ = false;
    this.adapter_.restoreFocus();
  };

  /** @return {boolean} */


  MDCSimpleMenuFoundation.prototype.isOpen = function isOpen() {
    return this.isOpen_;
  };

  return MDCSimpleMenuFoundation;
}(__WEBPACK_IMPORTED_MODULE_0__material_base_foundation__["a" /* default */]);



/***/ }),

/***/ "FEFE":
/***/ (function(module, exports) {

module.exports = "import 'preact-material-components/Radio/style.css';\r\nimport 'preact-material-components/FormField/style.css';\r\nimport 'preact-material-components/Button/style.css';"

/***/ }),

/***/ "FHEU":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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

/* eslint no-unused-vars: [2, {"args": "none"}] */

/**
 * Adapter for MDC Ripple. Provides an interface for managing
 * - classes
 * - dom
 * - CSS variables
 * - position
 * - dimensions
 * - scroll position
 * - event handlers
 * - unbounded, active and disabled states
 *
 * Additionally, provides type information for the adapter to the Closure
 * compiler.
 *
 * Implement this adapter for your framework of choice to delegate updates to
 * the component in your framework of choice. See architecture documentation
 * for more details.
 * https://github.com/material-components/material-components-web/blob/master/docs/architecture.md
 *
 * @record
 */
var MDCRippleAdapter = function () {
  function MDCRippleAdapter() {
    _classCallCheck(this, MDCRippleAdapter);
  }

  /** @return {boolean} */
  MDCRippleAdapter.prototype.browserSupportsCssVars = function browserSupportsCssVars() {};

  /** @return {boolean} */


  MDCRippleAdapter.prototype.isUnbounded = function isUnbounded() {};

  /** @return {boolean} */


  MDCRippleAdapter.prototype.isSurfaceActive = function isSurfaceActive() {};

  /** @return {boolean} */


  MDCRippleAdapter.prototype.isSurfaceDisabled = function isSurfaceDisabled() {};

  /** @param {string} className */


  MDCRippleAdapter.prototype.addClass = function addClass(className) {};

  /** @param {string} className */


  MDCRippleAdapter.prototype.removeClass = function removeClass(className) {};

  /**
   * @param {string} evtType
   * @param {!Function} handler
   */


  MDCRippleAdapter.prototype.registerInteractionHandler = function registerInteractionHandler(evtType, handler) {};

  /**
   * @param {string} evtType
   * @param {!Function} handler
   */


  MDCRippleAdapter.prototype.deregisterInteractionHandler = function deregisterInteractionHandler(evtType, handler) {};

  /**
   * @param {!Function} handler
   */


  MDCRippleAdapter.prototype.registerResizeHandler = function registerResizeHandler(handler) {};

  /**
   * @param {!Function} handler
   */


  MDCRippleAdapter.prototype.deregisterResizeHandler = function deregisterResizeHandler(handler) {};

  /**
   * @param {string} varName
   * @param {?number|string} value
   */


  MDCRippleAdapter.prototype.updateCssVariable = function updateCssVariable(varName, value) {};

  /** @return {!ClientRect} */


  MDCRippleAdapter.prototype.computeBoundingRect = function computeBoundingRect() {};

  /** @return {{x: number, y: number}} */


  MDCRippleAdapter.prototype.getWindowPageOffset = function getWindowPageOffset() {};

  return MDCRippleAdapter;
}();



/***/ }),

/***/ "Fj5d":
/***/ (function(module, exports) {

module.exports = "import {h, Component} from 'preact';\r\nimport Toolbar from 'preact-material-components/Toolbar';\r\nimport 'preact-material-components/Toolbar/style.css';\r\n\r\nexport default class ToolbarPage extends Component {\r\n  render(){\r\n    return (\r\n      <div>\r\n        <Toolbar className=\"toolbar\">\r\n            <Toolbar.Row>\r\n              <Toolbar.Section align-start={true}>\r\n                <Toolbar.Icon menu={true}>menu</Toolbar.Icon>\r\n                <Toolbar.Title>\r\n                  My App\r\n                </Toolbar.Title>\r\n              </Toolbar.Section>\r\n              <Toolbar.Section align-end={true}>\r\n                <Toolbar.Icon>more_vert</Toolbar.Icon>\r\n              </Toolbar.Section>\r\n            </Toolbar.Row>\r\n          </Toolbar>\r\n      </div>\r\n    );\r\n  }\r\n}\r\n"

/***/ }),

/***/ "GJAU":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__("KM04");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__MaterialComponent__ = __webpack_require__("lhA9");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_textfield___ = __webpack_require__("VcCu");
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
 * @prop persistent = false
 * @prop validation-msg = false
 */

var Helptext = function (_MaterialComponent) {
  _inherits(Helptext, _MaterialComponent);

  function Helptext() {
    _classCallCheck(this, Helptext);

    var _this = _possibleConstructorReturn(this, _MaterialComponent.call(this));

    _this.componentName = "textfield-helptext";
    _this._mdcProps = ["persistent", "validation-msg"];
    return _this;
  }

  Helptext.prototype.materialDom = function materialDom(props) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("p", _extends({}, props, { "aria-hidden": "true" }), props.children);
  };

  return Helptext;
}(__WEBPACK_IMPORTED_MODULE_1__MaterialComponent__["a" /* default */]);

var Label = function (_MaterialComponent2) {
  _inherits(Label, _MaterialComponent2);

  function Label() {
    _classCallCheck(this, Label);

    var _this2 = _possibleConstructorReturn(this, _MaterialComponent2.call(this));

    _this2.componentName = "textfield__label";
    return _this2;
  }

  Label.prototype.materialDom = function materialDom(props) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("label", props, props.children);
  };

  return Label;
}(__WEBPACK_IMPORTED_MODULE_1__MaterialComponent__["a" /* default */]);

/**
 * @prop fullwidth = false
 * @prop multiline = false
 * @prop dense = false
 * @prop disabled = false
 * @prop box = false
 * @prop type = 'text'
 * @prop value = ''
 * @prop label = ''
 */


var TextfieldInput = function (_MaterialComponent3) {
  _inherits(TextfieldInput, _MaterialComponent3);

  function TextfieldInput() {
    _classCallCheck(this, TextfieldInput);

    var _this3 = _possibleConstructorReturn(this, _MaterialComponent3.call(this));

    _this3.componentName = "textfield";
    _this3._mdcProps = ["fullwidth", "multiline", "dense", "disabled", "box"];
    _this3.state = {
      showFloatingLabel: false
    };
    return _this3;
  }

  TextfieldInput.prototype.componentDidMount = function componentDidMount() {
    var _this4 = this;

    this.setState({
      showFloatingLabel: true
    }, function () {
      _this4.MDComponent = new __WEBPACK_IMPORTED_MODULE_2__material_textfield___["a" /* MDCTextfield */](_this4.control);
    });
  };

  TextfieldInput.prototype.componentWillUnmount = function componentWillUnmount() {
    this.MDComponent && this.MDComponent.destroy && this.MDComponent.destroy();
  };

  TextfieldInput.prototype.materialDom = function materialDom(allprops) {
    var _this5 = this;

    var className = allprops.className,
        props = _objectWithoutProperties(allprops, ["className"]);


    if (props.value && this.state.showFloatingLabel) {
      className = [className, "mdc-textfield--upgraded"].join(" ");
    }

    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("div", { className: className, ref: function ref(control) {
        return _this5.control = control;
      } }, props.multiline ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("textarea", _extends({
      className: "mdc-textfield__input"
    }, props)) : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("input", _extends({
      type: props.type || "text",
      className: "mdc-textfield__input"
    }, props)), props.label && this.state.showFloatingLabel && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(Label, {
      "for": props.id,
      className: props.value && "mdc-textfield__label--float-above"
    }, props.label));
  };

  return TextfieldInput;
}(__WEBPACK_IMPORTED_MODULE_1__MaterialComponent__["a" /* default */]);

/**
 * @prop fullwidth = false
 * @prop multiline = false
 * @prop dense = false
 * @prop disabled = false
 * @prop box = false
 * @prop type = 'text'
 * @prop value = ''
 * @prop label = ''
 * @prop helptext = ''
 * @prop helptextPersistent = false
 * @prop helptextValidationMsg = false
 */


var Textfield = function (_Component) {
  _inherits(Textfield, _Component);

  function Textfield() {
    _classCallCheck(this, Textfield);

    var _this6 = _possibleConstructorReturn(this, _Component.call(this));

    _this6.id = Textfield.uid();
    _this6.state = {
      showFloatingLabel: false
    };
    return _this6;
  }

  Textfield.prototype.componentDidMount = function componentDidMount() {
    this.setState({
      showFloatingLabel: true
    });
  };

  Textfield.uid = function uid() {
    if (!this.uidCounter) {
      this.uidCounter = 0;
    }
    return ++this.uidCounter;
  };

  Textfield.prototype.render = function render(allprops, _ref) {
    var showFloatingLabel = _ref.showFloatingLabel;

    var className = allprops.className,
        helptextPersistent = allprops.helptextPersistent,
        helptextValidationMsg = allprops.helptextValidationMsg,
        props = _objectWithoutProperties(allprops, ["className", "helptextPersistent", "helptextValidationMsg"]);

    var showDiv = props.helptext || props.label && !showFloatingLabel;

    if (showDiv && !props.id) {
      props.id = "tf-" + this.id;
    }

    // Helper text
    var helptextProps = {
      persistent: helptextPersistent,
      "validation-msg": helptextValidationMsg
    };

    return showDiv ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("div", { className: className }, props.label && !showFloatingLabel && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("label", { "for": props.id }, props.cssLabel || props.label + ": "), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(TextfieldInput, _extends({}, props, { "aria-controls": props.helptext && props.id + "-helptext" })), props.helptext && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(Helptext, _extends({ id: props.id + "-helptext" }, helptextProps), props.helptext)) : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(TextfieldInput, _extends({}, props, { className: className }));
  };

  return Textfield;
}(__WEBPACK_IMPORTED_MODULE_0_preact__["Component"]);

Textfield.Helptext = Helptext;

/* harmony default export */ __webpack_exports__["a"] = (Textfield);

/***/ }),

/***/ "HCi5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MDCToolbarFoundation; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base_foundation__ = __webpack_require__("uJAj");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__("giHy");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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



var MDCToolbarFoundation = function (_MDCFoundation) {
  _inherits(MDCToolbarFoundation, _MDCFoundation);

  _createClass(MDCToolbarFoundation, null, [{
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
        hasClass: function hasClass() {
          return (/* className: string */ /* boolean */false
          );
        },
        addClass: function addClass() /* className: string */{},
        removeClass: function removeClass() /* className: string */{},
        registerScrollHandler: function registerScrollHandler() /* handler: EventListener */{},
        deregisterScrollHandler: function deregisterScrollHandler() /* handler: EventListener */{},
        registerResizeHandler: function registerResizeHandler() /* handler: EventListener */{},
        deregisterResizeHandler: function deregisterResizeHandler() /* handler: EventListener */{},
        getViewportWidth: function getViewportWidth() {
          return (/* number */0
          );
        },
        getViewportScrollY: function getViewportScrollY() {
          return (/* number */0
          );
        },
        getOffsetHeight: function getOffsetHeight() {
          return (/* number */0
          );
        },
        getFirstRowElementOffsetHeight: function getFirstRowElementOffsetHeight() {
          return (/* number */0
          );
        },
        notifyChange: function notifyChange() /* evtData: {flexibleExpansionRatio: number} */{},
        setStyle: function setStyle() /* property: string, value: string */{},
        setStyleForTitleElement: function setStyleForTitleElement() /* property: string, value: string */{},
        setStyleForFlexibleRowElement: function setStyleForFlexibleRowElement() /* property: string, value: string */{},
        setStyleForFixedAdjustElement: function setStyleForFixedAdjustElement() /* property: string, value: string */{}
      };
    }
  }]);

  function MDCToolbarFoundation(adapter) {
    _classCallCheck(this, MDCToolbarFoundation);

    var _this = _possibleConstructorReturn(this, _MDCFoundation.call(this, _extends(MDCToolbarFoundation.defaultAdapter, adapter)));

    _this.resizeHandler_ = function () {
      return _this.checkRowHeight_();
    };
    _this.scrollHandler_ = function () {
      return _this.updateToolbarStyles_();
    };
    _this.checkRowHeightFrame_ = 0;
    _this.scrollFrame_ = 0;
    _this.executedLastChange_ = false;

    _this.calculations_ = {
      toolbarRowHeight: 0,
      // Calculated Height ratio. We use ratio to calculate corresponding heights in resize event.
      toolbarRatio: 0, // The ratio of toolbar height to row height
      flexibleExpansionRatio: 0, // The ratio of flexible space height to row height
      maxTranslateYRatio: 0, // The ratio of max toolbar move up distance to row height
      scrollThresholdRatio: 0, // The ratio of max scrollTop that we should listen to to row height
      // Derived Heights based on the above key ratios.
      toolbarHeight: 0,
      flexibleExpansionHeight: 0, // Flexible row minus toolbar height (derived)
      maxTranslateYDistance: 0, // When toolbar only fix last row (derived)
      scrollThreshold: 0
    };
    // Toolbar fixed behavior
    // If toolbar is fixed
    _this.fixed_ = false;
    // If fixed is targeted only at the last row
    _this.fixedLastrow_ = false;
    // Toolbar flexible behavior
    // If the first row is flexible
    _this.hasFlexibleRow_ = false;
    // If use the default behavior
    _this.useFlexDefaultBehavior_ = false;
    return _this;
  }

  MDCToolbarFoundation.prototype.init = function init() {
    this.fixed_ = this.adapter_.hasClass(MDCToolbarFoundation.cssClasses.FIXED);
    this.fixedLastrow_ = this.adapter_.hasClass(MDCToolbarFoundation.cssClasses.FIXED_LASTROW) & this.fixed_;
    this.hasFlexibleRow_ = this.adapter_.hasClass(MDCToolbarFoundation.cssClasses.TOOLBAR_ROW_FLEXIBLE);
    if (this.hasFlexibleRow_) {
      this.useFlexDefaultBehavior_ = this.adapter_.hasClass(MDCToolbarFoundation.cssClasses.FLEXIBLE_DEFAULT_BEHAVIOR);
    }
    this.initKeyRatio_();
    this.setKeyHeights_();
    this.adapter_.registerResizeHandler(this.resizeHandler_);
    this.adapter_.registerScrollHandler(this.scrollHandler_);
  };

  MDCToolbarFoundation.prototype.destroy = function destroy() {
    this.adapter_.deregisterResizeHandler(this.resizeHandler_);
    this.adapter_.deregisterScrollHandler(this.scrollHandler_);
  };

  MDCToolbarFoundation.prototype.updateAdjustElementStyles = function updateAdjustElementStyles() {
    if (this.fixed_) {
      this.adapter_.setStyleForFixedAdjustElement('margin-top', this.calculations_.toolbarHeight + 'px');
    }
  };

  MDCToolbarFoundation.prototype.getFlexibleExpansionRatio_ = function getFlexibleExpansionRatio_(scrollTop) {
    // To prevent division by zero when there is no flexibleExpansionHeight
    var delta = 0.0001;
    return Math.max(0, 1 - scrollTop / (this.calculations_.flexibleExpansionHeight + delta));
  };

  MDCToolbarFoundation.prototype.checkRowHeight_ = function checkRowHeight_() {
    var _this2 = this;

    cancelAnimationFrame(this.checkRowHeightFrame_);
    this.checkRowHeightFrame_ = requestAnimationFrame(function () {
      return _this2.setKeyHeights_();
    });
  };

  MDCToolbarFoundation.prototype.setKeyHeights_ = function setKeyHeights_() {
    var newToolbarRowHeight = this.getRowHeight_();
    if (newToolbarRowHeight !== this.calculations_.toolbarRowHeight) {
      this.calculations_.toolbarRowHeight = newToolbarRowHeight;
      this.calculations_.toolbarHeight = this.calculations_.toolbarRatio * this.calculations_.toolbarRowHeight;
      this.calculations_.flexibleExpansionHeight = this.calculations_.flexibleExpansionRatio * this.calculations_.toolbarRowHeight;
      this.calculations_.maxTranslateYDistance = this.calculations_.maxTranslateYRatio * this.calculations_.toolbarRowHeight;
      this.calculations_.scrollThreshold = this.calculations_.scrollThresholdRatio * this.calculations_.toolbarRowHeight;
      this.updateAdjustElementStyles();
      this.updateToolbarStyles_();
    }
  };

  MDCToolbarFoundation.prototype.updateToolbarStyles_ = function updateToolbarStyles_() {
    var _this3 = this;

    cancelAnimationFrame(this.scrollFrame_);
    this.scrollFrame_ = requestAnimationFrame(function () {
      var scrollTop = _this3.adapter_.getViewportScrollY();
      var hasScrolledOutOfThreshold = _this3.scrolledOutOfThreshold_(scrollTop);

      if (hasScrolledOutOfThreshold && _this3.executedLastChange_) {
        return;
      }

      var flexibleExpansionRatio = _this3.getFlexibleExpansionRatio_(scrollTop);

      _this3.updateToolbarFlexibleState_(flexibleExpansionRatio);
      if (_this3.fixedLastrow_) {
        _this3.updateToolbarFixedState_(scrollTop);
      }
      if (_this3.hasFlexibleRow_) {
        _this3.updateFlexibleRowElementStyles_(flexibleExpansionRatio);
      }
      _this3.executedLastChange_ = hasScrolledOutOfThreshold;
      _this3.adapter_.notifyChange({ flexibleExpansionRatio: flexibleExpansionRatio });
    });
  };

  MDCToolbarFoundation.prototype.scrolledOutOfThreshold_ = function scrolledOutOfThreshold_(scrollTop) {
    return scrollTop > this.calculations_.scrollThreshold;
  };

  MDCToolbarFoundation.prototype.initKeyRatio_ = function initKeyRatio_() {
    var toolbarRowHeight = this.getRowHeight_();
    var firstRowMaxRatio = this.adapter_.getFirstRowElementOffsetHeight() / toolbarRowHeight;
    this.calculations_.toolbarRatio = this.adapter_.getOffsetHeight() / toolbarRowHeight;
    this.calculations_.flexibleExpansionRatio = firstRowMaxRatio - 1;
    this.calculations_.maxTranslateYRatio = this.fixedLastrow_ ? this.calculations_.toolbarRatio - firstRowMaxRatio : 0;
    this.calculations_.scrollThresholdRatio = (this.fixedLastrow_ ? this.calculations_.toolbarRatio : firstRowMaxRatio) - 1;
  };

  MDCToolbarFoundation.prototype.getRowHeight_ = function getRowHeight_() {
    var breakpoint = MDCToolbarFoundation.numbers.TOOLBAR_MOBILE_BREAKPOINT;
    return this.adapter_.getViewportWidth() < breakpoint ? MDCToolbarFoundation.numbers.TOOLBAR_ROW_MOBILE_HEIGHT : MDCToolbarFoundation.numbers.TOOLBAR_ROW_HEIGHT;
  };

  MDCToolbarFoundation.prototype.updateToolbarFlexibleState_ = function updateToolbarFlexibleState_(flexibleExpansionRatio) {
    this.adapter_.removeClass(MDCToolbarFoundation.cssClasses.FLEXIBLE_MAX);
    this.adapter_.removeClass(MDCToolbarFoundation.cssClasses.FLEXIBLE_MIN);
    if (flexibleExpansionRatio === 1) {
      this.adapter_.addClass(MDCToolbarFoundation.cssClasses.FLEXIBLE_MAX);
    } else if (flexibleExpansionRatio === 0) {
      this.adapter_.addClass(MDCToolbarFoundation.cssClasses.FLEXIBLE_MIN);
    }
  };

  MDCToolbarFoundation.prototype.updateToolbarFixedState_ = function updateToolbarFixedState_(scrollTop) {
    var translateDistance = Math.max(0, Math.min(scrollTop - this.calculations_.flexibleExpansionHeight, this.calculations_.maxTranslateYDistance));
    this.adapter_.setStyle('transform', 'translateY(' + -translateDistance + 'px)');

    if (translateDistance === this.calculations_.maxTranslateYDistance) {
      this.adapter_.addClass(MDCToolbarFoundation.cssClasses.FIXED_AT_LAST_ROW);
    } else {
      this.adapter_.removeClass(MDCToolbarFoundation.cssClasses.FIXED_AT_LAST_ROW);
    }
  };

  MDCToolbarFoundation.prototype.updateFlexibleRowElementStyles_ = function updateFlexibleRowElementStyles_(flexibleExpansionRatio) {
    if (this.fixed_) {
      var height = this.calculations_.flexibleExpansionHeight * flexibleExpansionRatio;
      this.adapter_.setStyleForFlexibleRowElement('height', height + this.calculations_.toolbarRowHeight + 'px');
    }
    if (this.useFlexDefaultBehavior_) {
      this.updateElementStylesDefaultBehavior_(flexibleExpansionRatio);
    }
  };

  MDCToolbarFoundation.prototype.updateElementStylesDefaultBehavior_ = function updateElementStylesDefaultBehavior_(flexibleExpansionRatio) {
    var maxTitleSize = MDCToolbarFoundation.numbers.MAX_TITLE_SIZE;
    var minTitleSize = MDCToolbarFoundation.numbers.MIN_TITLE_SIZE;
    var currentTitleSize = (maxTitleSize - minTitleSize) * flexibleExpansionRatio + minTitleSize;

    this.adapter_.setStyleForTitleElement('font-size', currentTitleSize + 'rem');
  };

  return MDCToolbarFoundation;
}(__WEBPACK_IMPORTED_MODULE_0__material_base_foundation__["a" /* default */]);



/***/ }),

/***/ "Hb3h":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "IsP3":
/***/ (function(module, exports) {

module.exports = "import {h, Component} from 'preact';\r\nimport Textfield from 'preact-material-components/Textfield';\r\nimport 'preact-material-components/Textfield/style.css';\r\n\r\nexport default class TextfieldPage extends Component {\r\n  render(){\r\n    return (\r\n      <div>\r\n        <Textfield multiline={true} label=\"Textarea tag\"/>\r\n      </div>\r\n    );\r\n  }\r\n}\r\n"

/***/ }),

/***/ "It0U":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MDCTextfieldFoundation; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base__ = __webpack_require__("dSNL");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__("jrKX");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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
      return __WEBPACK_IMPORTED_MODULE_1__constants__["b" /* cssClasses */];
    }
  }, {
    key: 'strings',
    get: function get() {
      return __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* strings */];
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

    var _this = _possibleConstructorReturn(this, _MDCFoundation.call(this, _extends(MDCTextfieldFoundation.defaultAdapter, adapter)));

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

  MDCTextfieldFoundation.prototype.init = function init() {
    this.adapter_.addClass(MDCTextfieldFoundation.cssClasses.UPGRADED);
    this.adapter_.registerInputFocusHandler(this.inputFocusHandler_);
    this.adapter_.registerInputBlurHandler(this.inputBlurHandler_);
    this.adapter_.registerInputInputHandler(this.inputInputHandler_);
    this.adapter_.registerInputKeydownHandler(this.inputKeydownHandler_);

    // Ensure label does not collide with any pre-filled value.
    if (this.getNativeInput_().value) {
      this.adapter_.addClassToLabel(MDCTextfieldFoundation.cssClasses.LABEL_FLOAT_ABOVE);
    }
  };

  MDCTextfieldFoundation.prototype.destroy = function destroy() {
    this.adapter_.removeClass(MDCTextfieldFoundation.cssClasses.UPGRADED);
    this.adapter_.deregisterInputFocusHandler(this.inputFocusHandler_);
    this.adapter_.deregisterInputBlurHandler(this.inputBlurHandler_);
    this.adapter_.deregisterInputInputHandler(this.inputInputHandler_);
    this.adapter_.deregisterInputKeydownHandler(this.inputKeydownHandler_);
  };

  MDCTextfieldFoundation.prototype.activateFocus_ = function activateFocus_() {
    var _MDCTextfieldFoundati = MDCTextfieldFoundation.cssClasses,
        FOCUSED = _MDCTextfieldFoundati.FOCUSED,
        LABEL_FLOAT_ABOVE = _MDCTextfieldFoundati.LABEL_FLOAT_ABOVE;

    this.adapter_.addClass(FOCUSED);
    this.adapter_.addClassToLabel(LABEL_FLOAT_ABOVE);
    this.showHelptext_();
  };

  MDCTextfieldFoundation.prototype.autoCompleteFocus_ = function autoCompleteFocus_() {
    if (!this.receivedUserInput_) {
      this.activateFocus_();
    }
  };

  MDCTextfieldFoundation.prototype.showHelptext_ = function showHelptext_() {
    var ARIA_HIDDEN = MDCTextfieldFoundation.strings.ARIA_HIDDEN;

    this.adapter_.removeHelptextAttr(ARIA_HIDDEN);
  };

  MDCTextfieldFoundation.prototype.deactivateFocus_ = function deactivateFocus_() {
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
  };

  MDCTextfieldFoundation.prototype.updateHelptextOnDeactivation_ = function updateHelptextOnDeactivation_(isValid) {
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
  };

  MDCTextfieldFoundation.prototype.hideHelptext_ = function hideHelptext_() {
    var ARIA_HIDDEN = MDCTextfieldFoundation.strings.ARIA_HIDDEN;

    this.adapter_.setHelptextAttr(ARIA_HIDDEN, 'true');
  };

  MDCTextfieldFoundation.prototype.isBadInput_ = function isBadInput_() {
    var input = this.getNativeInput_();
    return input.validity ? input.validity.badInput : input.badInput;
  };

  MDCTextfieldFoundation.prototype.isDisabled = function isDisabled() {
    return this.getNativeInput_().disabled;
  };

  MDCTextfieldFoundation.prototype.setDisabled = function setDisabled(disabled) {
    var DISABLED = MDCTextfieldFoundation.cssClasses.DISABLED;

    this.getNativeInput_().disabled = disabled;
    if (disabled) {
      this.adapter_.addClass(DISABLED);
    } else {
      this.adapter_.removeClass(DISABLED);
    }
  };

  MDCTextfieldFoundation.prototype.getNativeInput_ = function getNativeInput_() {
    return this.adapter_.getNativeInput() || {
      checkValidity: function checkValidity() {
        return true;
      },
      value: '',
      disabled: false,
      badInput: false
    };
  };

  return MDCTextfieldFoundation;
}(__WEBPACK_IMPORTED_MODULE_0__material_base__["b" /* MDCFoundation */]);



/***/ }),

/***/ "JkW7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_app__ = __webpack_require__("uxab");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_preact_material_components_Typography_style_css__ = __webpack_require__("3onB");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_preact_material_components_Typography_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Typography_style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_preact_material_components_Theme_style_css__ = __webpack_require__("a81U");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_preact_material_components_Theme_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_preact_material_components_Theme_style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__style__ = __webpack_require__("yY49");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__style__);





/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0__components_app__["a" /* default */]);

/***/ }),

/***/ "Jnuy":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Elevation; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__("KM04");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__MaterialComponent__ = __webpack_require__("lhA9");
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

    var _this = _possibleConstructorReturn(this, _MaterialComponent.call(this));

    _this.componentName = "elevation";
    _this._mdcProps = [];
    for (var elevationIndex = 0; elevationIndex < 25; elevationIndex++) {
      _this._mdcProps.push("z" + elevationIndex);
    }
    return _this;
  }

  Elevation.prototype.materialDom = function materialDom(props) {
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
  };

  return Elevation;
}(__WEBPACK_IMPORTED_MODULE_1__MaterialComponent__["a" /* default */]);



/***/ }),

/***/ "JtzT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__("KM04");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__MaterialComponent__ = __webpack_require__("lhA9");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_dialog___ = __webpack_require__("5sRW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Button__ = __webpack_require__("7/cg");
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

    var _this = _possibleConstructorReturn(this, _MaterialComponent.call(this));

    _this.componentName = "dialog";
    _this._onAccept = _this._onAccept.bind(_this);
    _this._onCancel = _this._onCancel.bind(_this);
    return _this;
  }

  Dialog.prototype.componentDidMount = function componentDidMount() {
    this.MDComponent = new __WEBPACK_IMPORTED_MODULE_2__material_dialog___["a" /* MDCDialog */](this.control);
    this.MDComponent.listen("MDCDialog:accept", this._onAccept);
    this.MDComponent.listen("MDCDialog:cancel", this._onCancel);
  };

  Dialog.prototype.componentWillUnmount = function componentWillUnmount() {
    this.MDComponent.unlisten("MDCDialog:accept", this._onAccept);
    this.MDComponent.unlisten("MDCDialog:cancel", this._onCancel);
    this.MDComponent.destroy && this.MDComponent.destroy();
  };

  Dialog.prototype._onAccept = function _onAccept(e) {
    if (this.props.onAccept) {
      this.props.onAccept(e);
    }
  };

  Dialog.prototype._onCancel = function _onCancel(e) {
    if (this.props.onCancel) {
      this.props.onCancel(e);
    }
  };

  Dialog.prototype.materialDom = function materialDom(props) {
    var _this2 = this;

    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("aside", _extends({
      role: "alertdialog",
      ref: function ref(control) {
        _this2.control = control;
      }
    }, props), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("div", { className: "mdc-dialog__surface" }, props.children), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("div", { className: "mdc-dialog__backdrop" }));
  };

  return Dialog;
}(__WEBPACK_IMPORTED_MODULE_1__MaterialComponent__["a" /* default */]);

var DialogHeader = function (_MaterialComponent2) {
  _inherits(DialogHeader, _MaterialComponent2);

  function DialogHeader() {
    _classCallCheck(this, DialogHeader);

    var _this3 = _possibleConstructorReturn(this, _MaterialComponent2.call(this));

    _this3.componentName = "dialog__header";
    return _this3;
  }

  DialogHeader.prototype.materialDom = function materialDom(props) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("header", props, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("h2", { className: "mdc-dialog__header__title" }, props.children));
  };

  return DialogHeader;
}(__WEBPACK_IMPORTED_MODULE_1__MaterialComponent__["a" /* default */]);

/**
 * @prop scrollable = false
 */


var DialogBody = function (_MaterialComponent3) {
  _inherits(DialogBody, _MaterialComponent3);

  function DialogBody() {
    _classCallCheck(this, DialogBody);

    var _this4 = _possibleConstructorReturn(this, _MaterialComponent3.call(this));

    _this4.componentName = "dialog__body";
    _this4._mdcProps = ["scrollable"];
    return _this4;
  }

  DialogBody.prototype.materialDom = function materialDom(props) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("section", props, props.children);
  };

  return DialogBody;
}(__WEBPACK_IMPORTED_MODULE_1__MaterialComponent__["a" /* default */]);

var DialogFooter = function (_MaterialComponent4) {
  _inherits(DialogFooter, _MaterialComponent4);

  function DialogFooter() {
    _classCallCheck(this, DialogFooter);

    var _this5 = _possibleConstructorReturn(this, _MaterialComponent4.call(this));

    _this5.componentName = "dialog__footer";
    return _this5;
  }

  DialogFooter.prototype.materialDom = function materialDom(props) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("footer", props, props.children);
  };

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

    var _this6 = _possibleConstructorReturn(this, _Button.call(this));

    _this6.componentName = "dialog__footer__button";
    _this6._mdcProps = ["cancel", "accept"];
    return _this6;
  }

  DialogFooterButton.prototype.materialDom = function materialDom(props) {
    var _this7 = this;

    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("button", _extends({}, props, {
      className: "mdc-button",
      ref: function ref(control) {
        _this7.control = control;
      }
    }), props.children);
  };

  return DialogFooterButton;
}(__WEBPACK_IMPORTED_MODULE_3__Button__["a" /* default */]);

Dialog.Header = DialogHeader;
Dialog.Body = DialogBody;
Dialog.Footer = DialogFooter;
Dialog.FooterButton = DialogFooterButton;

/* harmony default export */ __webpack_exports__["a"] = (Dialog);

/***/ }),

/***/ "K/3F":
/***/ (function(module, exports) {

module.exports = "import {h, Component} from 'preact';\r\nimport Snackbar from 'preact-material-components/Snackbar';\r\nimport Button from 'preact-material-components/Button';\r\nimport 'preact-material-components/Button/style.css';\r\nimport 'preact-material-components/Snackbar/style.css';\r\n\r\nexport default class SnackbarPage extends Component {\r\n  render(){\r\n    return (\r\n      <div>\r\n        <Button raised={true} primary={true} onClick={()=>{\r\n          this.bar.MDComponent.show({\r\n            message: \"Hello Snack!\"\r\n          });\r\n        }}>\r\n            Show snack\r\n        </Button>\r\n        <Snackbar ref={bar=>{this.bar=bar;}}/>\r\n      </div>\r\n    );\r\n  }\r\n}\r\n"

/***/ }),

/***/ "KM04":
/***/ (function(module, exports, __webpack_require__) {

!function () {
  "use strict";
  function e() {}function t(t, n) {
    var o,
        r,
        i,
        l,
        a = E;for (l = arguments.length; l-- > 2;) {
      W.push(arguments[l]);
    }n && null != n.children && (W.length || W.push(n.children), delete n.children);while (W.length) {
      if ((r = W.pop()) && void 0 !== r.pop) for (l = r.length; l--;) {
        W.push(r[l]);
      } else "boolean" == typeof r && (r = null), (i = "function" != typeof t) && (null == r ? r = "" : "number" == typeof r ? r += "" : "string" != typeof r && (i = !1)), i && o ? a[a.length - 1] += r : a === E ? a = [r] : a.push(r), o = i;
    }var u = new e();return u.nodeName = t, u.children = a, u.attributes = null == n ? void 0 : n, u.key = null == n ? void 0 : n.key, void 0 !== S.vnode && S.vnode(u), u;
  }function n(e, t) {
    for (var n in t) {
      e[n] = t[n];
    }return e;
  }function o(e, o) {
    return t(e.nodeName, n(n({}, e.attributes), o), arguments.length > 2 ? [].slice.call(arguments, 2) : e.children);
  }function r(e) {
    !e.__d && (e.__d = !0) && 1 == A.push(e) && (S.debounceRendering || P)(i);
  }function i() {
    var e,
        t = A;A = [];while (e = t.pop()) {
      e.__d && k(e);
    }
  }function l(e, t, n) {
    return "string" == typeof t || "number" == typeof t ? void 0 !== e.splitText : "string" == typeof t.nodeName ? !e._componentConstructor && a(e, t.nodeName) : n || e._componentConstructor === t.nodeName;
  }function a(e, t) {
    return e.__n === t || e.nodeName.toLowerCase() === t.toLowerCase();
  }function u(e) {
    var t = n({}, e.attributes);t.children = e.children;var o = e.nodeName.defaultProps;if (void 0 !== o) for (var r in o) {
      void 0 === t[r] && (t[r] = o[r]);
    }return t;
  }function _(e, t) {
    var n = t ? document.createElementNS("http://www.w3.org/2000/svg", e) : document.createElement(e);return n.__n = e, n;
  }function p(e) {
    var t = e.parentNode;t && t.removeChild(e);
  }function c(e, t, n, o, r) {
    if ("className" === t && (t = "class"), "key" === t) ;else if ("ref" === t) n && n(null), o && o(e);else if ("class" !== t || r) {
      if ("style" === t) {
        if (o && "string" != typeof o && "string" != typeof n || (e.style.cssText = o || ""), o && "object" == typeof o) {
          if ("string" != typeof n) for (var i in n) {
            i in o || (e.style[i] = "");
          }for (var i in o) {
            e.style[i] = "number" == typeof o[i] && !1 === V.test(i) ? o[i] + "px" : o[i];
          }
        }
      } else if ("dangerouslySetInnerHTML" === t) o && (e.innerHTML = o.__html || "");else if ("o" == t[0] && "n" == t[1]) {
        var l = t !== (t = t.replace(/Capture$/, ""));t = t.toLowerCase().substring(2), o ? n || e.addEventListener(t, f, l) : e.removeEventListener(t, f, l), (e.__l || (e.__l = {}))[t] = o;
      } else if ("list" !== t && "type" !== t && !r && t in e) s(e, t, null == o ? "" : o), null != o && !1 !== o || e.removeAttribute(t);else {
        var a = r && t !== (t = t.replace(/^xlink\:?/, ""));null == o || !1 === o ? a ? e.removeAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase()) : e.removeAttribute(t) : "function" != typeof o && (a ? e.setAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase(), o) : e.setAttribute(t, o));
      }
    } else e.className = o || "";
  }function s(e, t, n) {
    try {
      e[t] = n;
    } catch (e) {}
  }function f(e) {
    return this.__l[e.type](S.event && S.event(e) || e);
  }function d() {
    var e;while (e = D.pop()) {
      S.afterMount && S.afterMount(e), e.componentDidMount && e.componentDidMount();
    }
  }function h(e, t, n, o, r, i) {
    H++ || (R = null != r && void 0 !== r.ownerSVGElement, j = null != e && !("__preactattr_" in e));var l = m(e, t, n, o, i);return r && l.parentNode !== r && r.appendChild(l), --H || (j = !1, i || d()), l;
  }function m(e, t, n, o, r) {
    var i = e,
        l = R;if (null != t && "boolean" != typeof t || (t = ""), "string" == typeof t || "number" == typeof t) return e && void 0 !== e.splitText && e.parentNode && (!e._component || r) ? e.nodeValue != t && (e.nodeValue = t) : (i = document.createTextNode(t), e && (e.parentNode && e.parentNode.replaceChild(i, e), b(e, !0))), i.__preactattr_ = !0, i;var u = t.nodeName;if ("function" == typeof u) return U(e, t, n, o);if (R = "svg" === u || "foreignObject" !== u && R, u += "", (!e || !a(e, u)) && (i = _(u, R), e)) {
      while (e.firstChild) {
        i.appendChild(e.firstChild);
      }e.parentNode && e.parentNode.replaceChild(i, e), b(e, !0);
    }var p = i.firstChild,
        c = i.__preactattr_,
        s = t.children;if (null == c) {
      c = i.__preactattr_ = {};for (var f = i.attributes, d = f.length; d--;) {
        c[f[d].name] = f[d].value;
      }
    }return !j && s && 1 === s.length && "string" == typeof s[0] && null != p && void 0 !== p.splitText && null == p.nextSibling ? p.nodeValue != s[0] && (p.nodeValue = s[0]) : (s && s.length || null != p) && v(i, s, n, o, j || null != c.dangerouslySetInnerHTML), g(i, t.attributes, c), R = l, i;
  }function v(e, t, n, o, r) {
    var i,
        a,
        u,
        _,
        c,
        s = e.childNodes,
        f = [],
        d = {},
        h = 0,
        v = 0,
        y = s.length,
        g = 0,
        w = t ? t.length : 0;if (0 !== y) for (var C = 0; C < y; C++) {
      var x = s[C],
          N = x.__preactattr_,
          k = w && N ? x._component ? x._component.__k : N.key : null;null != k ? (h++, d[k] = x) : (N || (void 0 !== x.splitText ? !r || x.nodeValue.trim() : r)) && (f[g++] = x);
    }if (0 !== w) for (var C = 0; C < w; C++) {
      _ = t[C], c = null;var k = _.key;if (null != k) h && void 0 !== d[k] && (c = d[k], d[k] = void 0, h--);else if (!c && v < g) for (i = v; i < g; i++) {
        if (void 0 !== f[i] && l(a = f[i], _, r)) {
          c = a, f[i] = void 0, i === g - 1 && g--, i === v && v++;break;
        }
      }c = m(c, _, n, o), u = s[C], c && c !== e && c !== u && (null == u ? e.appendChild(c) : c === u.nextSibling ? p(u) : e.insertBefore(c, u));
    }if (h) for (var C in d) {
      void 0 !== d[C] && b(d[C], !1);
    }while (v <= g) {
      void 0 !== (c = f[g--]) && b(c, !1);
    }
  }function b(e, t) {
    var n = e._component;n ? L(n) : (null != e.__preactattr_ && e.__preactattr_.ref && e.__preactattr_.ref(null), !1 !== t && null != e.__preactattr_ || p(e), y(e));
  }function y(e) {
    e = e.lastChild;while (e) {
      var t = e.previousSibling;b(e, !0), e = t;
    }
  }function g(e, t, n) {
    var o;for (o in n) {
      t && null != t[o] || null == n[o] || c(e, o, n[o], n[o] = void 0, R);
    }for (o in t) {
      "children" === o || "innerHTML" === o || o in n && t[o] === ("value" === o || "checked" === o ? e[o] : n[o]) || c(e, o, n[o], n[o] = t[o], R);
    }
  }function w(e) {
    var t = e.constructor.name;(I[t] || (I[t] = [])).push(e);
  }function C(e, t, n) {
    var o,
        r = I[e.name];if (e.prototype && e.prototype.render ? (o = new e(t, n), T.call(o, t, n)) : (o = new T(t, n), o.constructor = e, o.render = x), r) for (var i = r.length; i--;) {
      if (r[i].constructor === e) {
        o.__b = r[i].__b, r.splice(i, 1);break;
      }
    }return o;
  }function x(e, t, n) {
    return this.constructor(e, n);
  }function N(e, t, n, o, i) {
    e.__x || (e.__x = !0, (e.__r = t.ref) && delete t.ref, (e.__k = t.key) && delete t.key, !e.base || i ? e.componentWillMount && e.componentWillMount() : e.componentWillReceiveProps && e.componentWillReceiveProps(t, o), o && o !== e.context && (e.__c || (e.__c = e.context), e.context = o), e.__p || (e.__p = e.props), e.props = t, e.__x = !1, 0 !== n && (1 !== n && !1 === S.syncComponentUpdates && e.base ? r(e) : k(e, 1, i)), e.__r && e.__r(e));
  }function k(e, t, o, r) {
    if (!e.__x) {
      var i,
          l,
          a,
          _ = e.props,
          p = e.state,
          c = e.context,
          s = e.__p || _,
          f = e.__s || p,
          m = e.__c || c,
          v = e.base,
          y = e.__b,
          g = v || y,
          w = e._component,
          x = !1;if (v && (e.props = s, e.state = f, e.context = m, 2 !== t && e.shouldComponentUpdate && !1 === e.shouldComponentUpdate(_, p, c) ? x = !0 : e.componentWillUpdate && e.componentWillUpdate(_, p, c), e.props = _, e.state = p, e.context = c), e.__p = e.__s = e.__c = e.__b = null, e.__d = !1, !x) {
        i = e.render(_, p, c), e.getChildContext && (c = n(n({}, c), e.getChildContext()));var U,
            T,
            M = i && i.nodeName;if ("function" == typeof M) {
          var W = u(i);l = w, l && l.constructor === M && W.key == l.__k ? N(l, W, 1, c, !1) : (U = l, e._component = l = C(M, W, c), l.__b = l.__b || y, l.__u = e, N(l, W, 0, c, !1), k(l, 1, o, !0)), T = l.base;
        } else a = g, U = w, U && (a = e._component = null), (g || 1 === t) && (a && (a._component = null), T = h(a, i, c, o || !v, g && g.parentNode, !0));if (g && T !== g && l !== w) {
          var E = g.parentNode;E && T !== E && (E.replaceChild(T, g), U || (g._component = null, b(g, !1)));
        }if (U && L(U), e.base = T, T && !r) {
          var P = e,
              V = e;while (V = V.__u) {
            (P = V).base = T;
          }T._component = P, T._componentConstructor = P.constructor;
        }
      }if (!v || o ? D.unshift(e) : x || (e.componentDidUpdate && e.componentDidUpdate(s, f, m), S.afterUpdate && S.afterUpdate(e)), null != e.__h) while (e.__h.length) {
        e.__h.pop().call(e);
      }H || r || d();
    }
  }function U(e, t, n, o) {
    var r = e && e._component,
        i = r,
        l = e,
        a = r && e._componentConstructor === t.nodeName,
        _ = a,
        p = u(t);while (r && !_ && (r = r.__u)) {
      _ = r.constructor === t.nodeName;
    }return r && _ && (!o || r._component) ? (N(r, p, 3, n, o), e = r.base) : (i && !a && (L(i), e = l = null), r = C(t.nodeName, p, n), e && !r.__b && (r.__b = e, l = null), N(r, p, 1, n, o), e = r.base, l && e !== l && (l._component = null, b(l, !1))), e;
  }function L(e) {
    S.beforeUnmount && S.beforeUnmount(e);var t = e.base;e.__x = !0, e.componentWillUnmount && e.componentWillUnmount(), e.base = null;var n = e._component;n ? L(n) : t && (t.__preactattr_ && t.__preactattr_.ref && t.__preactattr_.ref(null), e.__b = t, p(t), w(e), y(t)), e.__r && e.__r(null);
  }function T(e, t) {
    this.__d = !0, this.context = t, this.props = e, this.state = this.state || {};
  }function M(e, t, n) {
    return h(n, e, {}, !1, t, !1);
  }var S = {},
      W = [],
      E = [],
      P = "function" == typeof Promise ? Promise.resolve().then.bind(Promise.resolve()) : setTimeout,
      V = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,
      A = [],
      D = [],
      H = 0,
      R = !1,
      j = !1,
      I = {};n(T.prototype, { setState: function setState(e, t) {
      var o = this.state;this.__s || (this.__s = n({}, o)), n(o, "function" == typeof e ? e(o, this.props) : e), t && (this.__h = this.__h || []).push(t), r(this);
    }, forceUpdate: function forceUpdate(e) {
      e && (this.__h = this.__h || []).push(e), k(this, 2);
    }, render: function render() {} });var $ = { h: t, createElement: t, cloneElement: o, Component: T, render: M, rerender: i, options: S }; true ? module.exports = $ : self.preact = $;
}();
//# sourceMappingURL=preact.min.js.map

/***/ }),

/***/ "KnLB":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* unused harmony export IconToggleEvent */
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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

/* eslint no-unused-vars: [2, {"args": "none"}] */

/**
 * Adapter for MDC Icon Toggle. Provides an interface for managing
 * - classes
 * - dom
 * - inner text
 * - event handlers
 * - event dispatch
 *
 * Additionally, provides type information for the adapter to the Closure
 * compiler.
 *
 * Implement this adapter for your framework of choice to delegate updates to
 * the component in your framework of choice. See architecture documentation
 * for more details.
 * https://github.com/material-components/material-components-web/blob/master/docs/architecture.md
 *
 * @record
 */
var MDCIconToggleAdapter = function () {
  function MDCIconToggleAdapter() {
    _classCallCheck(this, MDCIconToggleAdapter);
  }

  /** @param {string} className */
  MDCIconToggleAdapter.prototype.addClass = function addClass(className) {};

  /** @param {string} className */


  MDCIconToggleAdapter.prototype.removeClass = function removeClass(className) {};

  /**
   * @param {string} type
   * @param {!EventListener} handler
   */


  MDCIconToggleAdapter.prototype.registerInteractionHandler = function registerInteractionHandler(type, handler) {};

  /**
   * @param {string} type
   * @param {!EventListener} handler
   */


  MDCIconToggleAdapter.prototype.deregisterInteractionHandler = function deregisterInteractionHandler(type, handler) {};

  /** @param {string} text */


  MDCIconToggleAdapter.prototype.setText = function setText(text) {};

  /** @return {number} */


  MDCIconToggleAdapter.prototype.getTabIndex = function getTabIndex() {};

  /** @param {number} tabIndex */


  MDCIconToggleAdapter.prototype.setTabIndex = function setTabIndex(tabIndex) {};

  /**
   * @param {string} name
   * @return {string}
   */


  MDCIconToggleAdapter.prototype.getAttr = function getAttr(name) {};

  /**
   * @param {string} name
   * @param {string} value
   */


  MDCIconToggleAdapter.prototype.setAttr = function setAttr(name, value) {};

  /** @param {string} name */


  MDCIconToggleAdapter.prototype.rmAttr = function rmAttr(name) {};

  /** @param {!IconToggleEvent} evtData */


  MDCIconToggleAdapter.prototype.notifyChange = function notifyChange(evtData) {};

  return MDCIconToggleAdapter;
}();

/**
 * @typedef {!{
 *   isOn: boolean,
 * }}
 */



var IconToggleEvent = void 0;

/***/ }),

/***/ "L+O+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SnackbarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__("KM04");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_preact_material_components_Snackbar__ = __webpack_require__("+XMp");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_preact_material_components_Button__ = __webpack_require__("7/cg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_component_table__ = __webpack_require__("B/9r");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_code_block__ = __webpack_require__("F4jb");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__style__ = __webpack_require__("frf2");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__sample_txt__ = __webpack_require__("K/3F");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__sample_txt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__sample_txt__);


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var _ref = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	'div',
	{ className: 'mdc-typography--display1' },
	'Sample code '
);

var _ref2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	__WEBPACK_IMPORTED_MODULE_4__components_code_block__["a" /* default */],
	null,
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
		'code',
		{ 'class': 'lang-js' },
		__WEBPACK_IMPORTED_MODULE_6__sample_txt___default.a
	)
);

var _ref3 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	'div',
	{ className: 'mdc-typography--display1' },
	'Original documentation'
);

var _ref4 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
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
);

var _ref5 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	'div',
	{ className: 'mdc-typography--display1' },
	'Demo '
);

var SnackbarPage = function (_Component) {
	_inherits(SnackbarPage, _Component);

	function SnackbarPage() {
		_classCallCheck(this, SnackbarPage);

		var _this = _possibleConstructorReturn(this, _Component.call(this));

		_this.propsTable = [{
			component: 'Snackbar',
			props: [{
				name: 'dismissesOnAction',
				description: 'tells whether or not snackbar auto dismisses upon clicking the action button'
			}]
		}];
		return _this;
	}

	SnackbarPage.prototype.render = function render() {
		var _this2 = this;

		return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
			'div',
			{ className: 'page-snackbar' },
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_3__components_component_table__["a" /* default */], { data: this.propsTable }),
			_ref,
			_ref2,
			_ref3,
			_ref4,
			_ref5,
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
	};

	return SnackbarPage;
}(__WEBPACK_IMPORTED_MODULE_0_preact__["Component"]);



/***/ }),

/***/ "L23q":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__("KM04");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_preact_material_components_Select__ = __webpack_require__("9v1x");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_component_table__ = __webpack_require__("B/9r");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_code_block__ = __webpack_require__("F4jb");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_events_table__ = __webpack_require__("PIHy");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sample_txt__ = __webpack_require__("iRQC");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sample_txt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__sample_txt__);


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var _ref = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	'div',
	{ className: 'mdc-typography--display1' },
	'Sample code '
);

var _ref2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	__WEBPACK_IMPORTED_MODULE_3__components_code_block__["a" /* default */],
	null,
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
		'code',
		{ 'class': 'lang-js' },
		__WEBPACK_IMPORTED_MODULE_5__sample_txt___default.a
	)
);

var _ref3 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	'div',
	{ className: 'mdc-typography--display1' },
	'Original documentation'
);

var _ref4 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
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
);

var _ref5 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	'div',
	{ className: 'mdc-typography--display1' },
	'Demo '
);

var _ref6 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	'div',
	{ className: 'mdc-typography--title' },
	'Normal '
);

var _ref7 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
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
);

var _ref8 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	'div',
	{ className: 'mdc-typography--title' },
	'Basic '
);

var _ref9 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
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
);

var _ref10 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	'div',
	{ className: 'mdc-typography--title' },
	'Disabled '
);

var _ref11 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
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
);

var _ref12 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	'div',
	{ className: 'mdc-typography--display1' },
	'Note '
);

var _ref13 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	'div',
	{ className: 'mdc-typography--body' },
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
		'div',
		null,
		'If you are using this component individually, DO NOT FORGET to import',
		__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
			'i',
			null,
			' \'preact-material-components/Menu/style.css\''
		),
		' and',
		__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
			'i',
			null,
			' \'preact-material-components/List/style.css\''
		)
	)
);

var SelectPage = function (_Component) {
	_inherits(SelectPage, _Component);

	function SelectPage() {
		_classCallCheck(this, SelectPage);

		var _this = _possibleConstructorReturn(this, _Component.call(this));

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

	SelectPage.prototype.render = function render() {
		return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
			'div',
			{ className: 'page-select' },
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_2__components_component_table__["a" /* default */], { data: this.propsTable }),
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_4__components_events_table__["a" /* default */], { data: this.eventsTable }),
			_ref,
			_ref2,
			_ref3,
			_ref4,
			_ref5,
			_ref6,
			_ref7,
			_ref8,
			_ref9,
			_ref10,
			_ref11,
			_ref12,
			_ref13
		);
	};

	return SelectPage;
}(__WEBPACK_IMPORTED_MODULE_0_preact__["Component"]);



/***/ }),

/***/ "LOem":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SliderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__("KM04");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_preact_material_components_Slider__ = __webpack_require__("6vkq");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_component_table__ = __webpack_require__("B/9r");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_code_block__ = __webpack_require__("F4jb");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sample_txt__ = __webpack_require__("4ECx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sample_txt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__sample_txt__);


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var _ref = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	'div',
	{ className: 'mdc-typography--display1' },
	'Sample code '
);

var _ref2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	__WEBPACK_IMPORTED_MODULE_3__components_code_block__["a" /* default */],
	null,
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
		'code',
		{ 'class': 'lang-js' },
		__WEBPACK_IMPORTED_MODULE_4__sample_txt___default.a
	)
);

var _ref3 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	'div',
	{ className: 'mdc-typography--display1' },
	'Original documentation'
);

var _ref4 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	'div',
	{ className: 'mdc-typography--body' },
	'This component encapsulates ',
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
		'span',
		{ className: 'strong' },
		'mdc-slider'
	),
	', you can refer to its documentation',
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
		'a',
		{ href: 'https://github.com/material-components/material-components-web/tree/master/packages/mdc-slider' },
		' here'
	),
	'.'
);

var _ref5 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	'div',
	{ className: 'mdc-typography--display1' },
	'Demo '
);

var _ref6 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	'div',
	{ className: 'mdc-typography--title' },
	'Regular '
);

var _ref7 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	'div',
	{ className: 'slider-container' },
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Slider__["a" /* default */], null)
);

var _ref8 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	'div',
	{ className: 'mdc-typography--title' },
	'Disabled '
);

var _ref9 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	'div',
	{ className: 'slider-container' },
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Slider__["a" /* default */], { disabled: true })
);

var _ref10 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	'div',
	{ className: 'mdc-typography--title' },
	'Step 2, Max 20, Value 10 '
);

var _ref11 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	'div',
	{ className: 'slider-container' },
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Slider__["a" /* default */], { step: 2, value: 10, max: 20 })
);

var SliderPage = function (_Component) {
	_inherits(SliderPage, _Component);

	function SliderPage() {
		_classCallCheck(this, SliderPage);

		var _this = _possibleConstructorReturn(this, _Component.call(this));

		_this.propsTable = [{
			component: 'Slider',
			props: [{
				name: 'disabled',
				description: 'tells if the slider is disabled'
			}, {
				name: 'min',
				value: 'number',
				description: 'tells minimum value of the slider'
			}, {
				name: 'max',
				value: 'number',
				description: 'tells maximum value of the slider'
			}, {
				name: 'step',
				value: 'number',
				description: 'tells step/jump of the slider'
			}, {
				name: 'value',
				value: 'number',
				description: 'tells current value of the slider'
			}]
		}];
		return _this;
	}

	SliderPage.prototype.render = function render() {
		return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
			'div',
			{ className: 'page-slider' },
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_2__components_component_table__["a" /* default */], { data: this.propsTable }),
			_ref,
			_ref2,
			_ref3,
			_ref4,
			_ref5,
			_ref6,
			_ref7,
			_ref8,
			_ref9,
			_ref10,
			_ref11
		);
	};

	return SliderPage;
}(__WEBPACK_IMPORTED_MODULE_0_preact__["Component"]);



/***/ }),

/***/ "LQ60":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "LuS4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ButtonPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__("KM04");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_preact_material_components_Button__ = __webpack_require__("7/cg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_component_table__ = __webpack_require__("B/9r");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_code_block__ = __webpack_require__("F4jb");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__style__ = __webpack_require__("rnIz");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sample_txt__ = __webpack_require__("+ieI");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sample_txt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__sample_txt__);


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var _ref = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	'div',
	{ className: 'mdc-typography--display1' },
	'Sample code '
);

var _ref2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	__WEBPACK_IMPORTED_MODULE_3__components_code_block__["a" /* default */],
	null,
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
		'code',
		{ 'class': 'lang-js' },
		__WEBPACK_IMPORTED_MODULE_5__sample_txt___default.a
	)
);

var _ref3 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	'div',
	{ className: 'mdc-typography--display1' },
	'Original documentation'
);

var _ref4 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
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
);

var _ref5 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	'div',
	{ className: 'mdc-typography--display1' },
	'Demo '
);

var _ref6 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	'div',
	{ className: 'mdc-typography--title' },
	'Flats '
);

var _ref7 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Button__["a" /* default */],
	null,
	'Flat button without ripple'
);

var _ref8 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Button__["a" /* default */],
	{ ripple: true },
	'Flat button with ripple'
);

var _ref9 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Button__["a" /* default */],
	{ accent: true },
	'Accented Flat button'
);

var _ref10 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Button__["a" /* default */],
	{ dense: true },
	'Dense Flat button '
);

var _ref11 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Button__["a" /* default */],
	{ compact: true },
	'Compact Flat button '
);

var _ref12 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Button__["a" /* default */],
	{ primary: true },
	'Primary Flat button '
);

var _ref13 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	'div',
	{ className: 'mdc-typography--title' },
	'Raised '
);

var _ref14 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Button__["a" /* default */],
	{ raised: true },
	'Raised button without ripple'
);

var _ref15 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Button__["a" /* default */],
	{ raised: true, ripple: true },
	'Raised button with ripple'
);

var _ref16 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Button__["a" /* default */],
	{ raised: true, accent: true },
	'Accented Raised button'
);

var _ref17 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Button__["a" /* default */],
	{ raised: true, dense: true },
	'Dense Raised button '
);

var _ref18 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Button__["a" /* default */],
	{ raised: true, compact: true },
	'Compact Raised button '
);

var _ref19 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Button__["a" /* default */],
	{ raised: true, primary: true },
	'Primary Raised button '
);

var _ref20 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	'div',
	{ className: 'mdc-typography--title' },
	'Disabled '
);

var _ref21 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Button__["a" /* default */],
	{ disabled: true },
	'Disabled button without ripple'
);

var _ref22 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Button__["a" /* default */],
	{ disabled: true, ripple: true },
	'Disabled button with ripple'
);

var _ref23 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Button__["a" /* default */],
	{ disabled: true, accent: true },
	'Accented Disabled button'
);

var _ref24 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Button__["a" /* default */],
	{ disabled: true, dense: true },
	'Dense Disabled button '
);

var _ref25 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Button__["a" /* default */],
	{ disabled: true, compact: true },
	'Compact Disabled button '
);

var _ref26 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Button__["a" /* default */],
	{ disabled: true, primary: true },
	'Primary Disabled button '
);

var _ref27 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	'div',
	{ className: 'mdc-typography--title' },
	'Note'
);

var _ref28 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	'div',
	{ className: 'mdc-typography--caption' },
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
		'div',
		null,
		'Adding an ',
		__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
			'code',
			null,
			'href'
		),
		' to the ',
		__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
			'code',
			null,
			'Button'
		),
		' automatically makes in an ',
		__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
			'code',
			null,
			'<a>'
		),
		'.'
	)
);

var ButtonPage = function (_Component) {
	_inherits(ButtonPage, _Component);

	function ButtonPage() {
		_classCallCheck(this, ButtonPage);

		var _this = _possibleConstructorReturn(this, _Component.call(this));

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

	ButtonPage.prototype.render = function render() {
		return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
			'div',
			{ className: 'page-buttons' },
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_2__components_component_table__["a" /* default */], { data: this.propsTable }),
			_ref,
			_ref2,
			_ref3,
			_ref4,
			_ref5,
			_ref6,
			_ref7,
			_ref8,
			_ref9,
			_ref10,
			_ref11,
			_ref12,
			_ref13,
			_ref14,
			_ref15,
			_ref16,
			_ref17,
			_ref18,
			_ref19,
			_ref20,
			_ref21,
			_ref22,
			_ref23,
			_ref24,
			_ref25,
			_ref26,
			_ref27,
			_ref28
		);
	};

	return ButtonPage;
}(__WEBPACK_IMPORTED_MODULE_0_preact__["Component"]);



/***/ }),

/***/ "MeGi":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Icon; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__("KM04");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__MaterialComponent__ = __webpack_require__("lhA9");
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

    var _this = _possibleConstructorReturn(this, _MaterialComponent.call(this));

    _this.componentName = "icon";
    return _this;
  }

  Icon.prototype.materialDom = function materialDom(props) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("i", _extends({}, props, { className: "material-icons" }), props.children);
  };

  return Icon;
}(__WEBPACK_IMPORTED_MODULE_1__MaterialComponent__["a" /* default */]);



/***/ }),

/***/ "Mip5":
/***/ (function(module, exports) {

module.exports = "import {h, Component} from 'preact';\r\nimport LayoutGrid from 'preact-material-components/LayoutGrid';\r\nimport 'preact-material-components/LayoutGrid/style.css';\r\n\r\nexport default class LayoutGridPage extends Component {\r\n  render(){\r\n    return (\r\n      <div>\r\n        <LayoutGrid>\r\n          <LayoutGrid.Inner>\r\n            <LayoutGrid.Cell cols=\"6\">First cell</LayoutGrid.Cell>\r\n            <LayoutGrid.Cell cols=\"4\">Second cell</LayoutGrid.Cell>\r\n            <LayoutGrid.Cell cols=\"2\">Third cell</LayoutGrid.Cell>\r\n          </LayoutGrid.Inner>\r\n        </LayoutGrid>\r\n      </div>\r\n    );\r\n  }\r\n}\r\n"

/***/ }),

/***/ "MlBl":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IconToggle; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__("KM04");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_icon_toggle___ = __webpack_require__("xprb");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__MaterialComponent__ = __webpack_require__("lhA9");
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

var IconToggle = function (_MaterialComponent) {
  _inherits(IconToggle, _MaterialComponent);

  function IconToggle() {
    _classCallCheck(this, IconToggle);

    var _this = _possibleConstructorReturn(this, _MaterialComponent.call(this));

    _this.componentName = "icon-toggle";
    _this._onChange = _this._onChange.bind(_this);
    return _this;
  }

  IconToggle.prototype._onChange = function _onChange(e) {
    if (this.props.onChange) {
      this.props.onChange(e);
    }
  };

  IconToggle.prototype.componentDidMount = function componentDidMount() {
    this.MDComponent = new __WEBPACK_IMPORTED_MODULE_1__material_icon_toggle___["a" /* MDCIconToggle */](this.control);
    this.MDComponent.listen("MDCIconToggle:change", this._onChange);
  };

  IconToggle.prototype.componentWillUnmount = function componentWillUnmount() {
    this.MDComponent.unlisten("MDCIconToggle:change", this._onChange);
    this.MDComponent.destroy && this.MDComponent.destroy();
  };

  IconToggle.prototype.materialDom = function materialDom(props) {
    var _this2 = this;

    if (props["data-toggle-on"]) props["data-toggle-on"] = JSON.stringify(props["data-toggle-on"]);
    if (props["data-toggle-off"]) props["data-toggle-off"] = JSON.stringify(props["data-toggle-off"]);
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("i", _extends({}, props, {
      className: "material-icons " + props.className || "",
      ref: function ref(control) {
        _this2.control = control;
      }
    }), props.children);
  };

  return IconToggle;
}(__WEBPACK_IMPORTED_MODULE_2__MaterialComponent__["a" /* default */]);



/***/ }),

/***/ "MviZ":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "NQRl":
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
  DEACTIVATION_TIMEOUT_MS: 300,
  FG_DEACTIVATION_MS: 83
};

/***/ }),

/***/ "NW4s":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormFieldPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__("KM04");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_preact_material_components_Radio__ = __webpack_require__("sdLF");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_preact_material_components_Formfield__ = __webpack_require__("thmM");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_component_table__ = __webpack_require__("B/9r");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_code_block__ = __webpack_require__("F4jb");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sample_txt__ = __webpack_require__("6X9X");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sample_txt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__sample_txt__);


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



// Material Components



// Components



// Samples


// Class

var _ref = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	'div',
	{ className: 'mdc-typography--display1' },
	'Sample code'
);

var _ref2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	__WEBPACK_IMPORTED_MODULE_4__components_code_block__["a" /* default */],
	null,
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
		'code',
		{ 'class': 'lang-js' },
		__WEBPACK_IMPORTED_MODULE_5__sample_txt___default.a
	)
);

var _ref3 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	'div',
	{ className: 'mdc-typography--display1' },
	'Original documentation'
);

var _ref4 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
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
);

var _ref5 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	'div',
	{ className: 'mdc-typography--display1' },
	'Demo'
);

var _ref6 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	__WEBPACK_IMPORTED_MODULE_2_preact_material_components_Formfield__["a" /* default */],
	null,
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Radio__["a" /* default */], { id: 'r1', name: 'opts' }),
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
		'label',
		{ 'for': 'r1' },
		'Radio 1'
	)
);

var FormFieldPage = function (_Component) {
	_inherits(FormFieldPage, _Component);

	function FormFieldPage() {
		_classCallCheck(this, FormFieldPage);

		var _this = _possibleConstructorReturn(this, _Component.call(this));

		_this.propsTable = [{
			component: 'Formfield',
			props: []
		}];
		return _this;
	}

	FormFieldPage.prototype.render = function render() {
		return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
			'div',
			null,
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_3__components_component_table__["a" /* default */], { data: this.propsTable }),
			_ref,
			_ref2,
			_ref3,
			_ref4,
			_ref5,
			_ref6
		);
	};

	return FormFieldPage;
}(__WEBPACK_IMPORTED_MODULE_0_preact__["Component"]);



/***/ }),

/***/ "O+aM":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MDCTabBar; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base_component__ = __webpack_require__("EQDb");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tab__ = __webpack_require__("1nHr");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__foundation__ = __webpack_require__("gLY3");
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

    return _possibleConstructorReturn(this, _MDCComponent.apply(this, arguments));
  }

  MDCTabBar.attachTo = function attachTo(root) {
    return new MDCTabBar(root);
  };

  MDCTabBar.prototype.initialize = function initialize() {
    var _this2 = this;

    var tabFactory = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function (el) {
      return new __WEBPACK_IMPORTED_MODULE_1__tab__["a" /* MDCTab */](el);
    };

    this.indicator_ = this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_2__foundation__["a" /* default */].strings.INDICATOR_SELECTOR);
    this.tabs_ = this.gatherTabs_(tabFactory);
    this.tabSelectedHandler_ = function (_ref) {
      var detail = _ref.detail;
      var tab = detail.tab;

      _this2.setActiveTab_(tab, true);
    };
  };

  MDCTabBar.prototype.getDefaultFoundation = function getDefaultFoundation() {
    var _this3 = this;

    return new __WEBPACK_IMPORTED_MODULE_2__foundation__["a" /* default */]({
      addClass: function addClass(className) {
        return _this3.root_.classList.add(className);
      },
      removeClass: function removeClass(className) {
        return _this3.root_.classList.remove(className);
      },
      bindOnMDCTabSelectedEvent: function bindOnMDCTabSelectedEvent() {
        return _this3.listen(__WEBPACK_IMPORTED_MODULE_1__tab__["b" /* MDCTabFoundation */].strings.SELECTED_EVENT, _this3.tabSelectedHandler_);
      },
      unbindOnMDCTabSelectedEvent: function unbindOnMDCTabSelectedEvent() {
        return _this3.unlisten(__WEBPACK_IMPORTED_MODULE_1__tab__["b" /* MDCTabFoundation */].strings.SELECTED_EVENT, _this3.tabSelectedHandler_);
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
        return _this3.emit(__WEBPACK_IMPORTED_MODULE_2__foundation__["a" /* default */].strings.CHANGE_EVENT, evtData);
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
  };

  MDCTabBar.prototype.gatherTabs_ = function gatherTabs_(tabFactory) {
    var tabElements = [].slice.call(this.root_.querySelectorAll(__WEBPACK_IMPORTED_MODULE_2__foundation__["a" /* default */].strings.TAB_SELECTOR));
    return tabElements.map(function (el) {
      return tabFactory(el);
    });
  };

  MDCTabBar.prototype.setActiveTabIndex_ = function setActiveTabIndex_(activeTabIndex, notifyChange) {
    this.foundation_.switchToTabAtIndex(activeTabIndex, notifyChange);
  };

  MDCTabBar.prototype.layout = function layout() {
    this.foundation_.layout();
  };

  MDCTabBar.prototype.setActiveTab_ = function setActiveTab_(activeTab, notifyChange) {
    var indexOfTab = this.tabs.indexOf(activeTab);
    if (indexOfTab < 0) {
      throw new Error('Invalid tab component given as activeTab: Tab not found within this component\'s tab list');
    }
    this.setActiveTabIndex_(indexOfTab, notifyChange);
  };

  _createClass(MDCTabBar, [{
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
  }]);

  return MDCTabBar;
}(__WEBPACK_IMPORTED_MODULE_0__material_base_component__["a" /* default */]);

/***/ }),

/***/ "OA4U":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Checkbox; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__("KM04");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__MaterialComponent__ = __webpack_require__("lhA9");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_checkbox___ = __webpack_require__("8Efz");
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

    var _this = _possibleConstructorReturn(this, _MaterialComponent.call(this));

    _this.componentName = "checkbox";
    _this._mdcProps = ["disabled"];
    return _this;
  }

  Checkbox.prototype.componentDidMount = function componentDidMount() {
    this.MDComponent = new __WEBPACK_IMPORTED_MODULE_2__material_checkbox___["a" /* MDCCheckbox */](this.control);
  };

  Checkbox.prototype.componentWillUnmount = function componentWillUnmount() {
    this.MDComponent.destroy && this.MDComponent.destroy();
  };

  Checkbox.prototype.materialDom = function materialDom(allprops) {
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
  };

  return Checkbox;
}(__WEBPACK_IMPORTED_MODULE_1__MaterialComponent__["a" /* default */]);



/***/ }),

/***/ "PIHy":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventsTable; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__("KM04");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var _ref = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	"div",
	{ className: "mdc-typography--display1" },
	"Custom events"
);

var EventsTable = function (_Component) {
	_inherits(EventsTable, _Component);

	function EventsTable() {
		_classCallCheck(this, EventsTable);

		return _possibleConstructorReturn(this, _Component.apply(this, arguments));
	}

	EventsTable.prototype.render = function render() {
		return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
			"div",
			null,
			_ref,
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
	};

	return EventsTable;
}(__WEBPACK_IMPORTED_MODULE_0_preact__["Component"]);



/***/ }),

/***/ "Q1yZ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__("KM04");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__MaterialComponent__ = __webpack_require__("lhA9");
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

    var _this = _possibleConstructorReturn(this, _MaterialComponent.call(this));

    _this.componentName = "layout-grid";
    return _this;
  }

  LayoutGrid.prototype.materialDom = function materialDom(props) {
    var _this2 = this;

    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("div", _extends({
      ref: function ref(control) {
        _this2.control = control;
      }
    }, props), props.children);
  };

  return LayoutGrid;
}(__WEBPACK_IMPORTED_MODULE_1__MaterialComponent__["a" /* default */]);

var LayoutGridInner = function (_MaterialComponent2) {
  _inherits(LayoutGridInner, _MaterialComponent2);

  function LayoutGridInner() {
    _classCallCheck(this, LayoutGridInner);

    var _this3 = _possibleConstructorReturn(this, _MaterialComponent2.call(this));

    _this3.componentName = "layout-grid__inner";
    return _this3;
  }

  LayoutGridInner.prototype.materialDom = function materialDom(props) {
    var _this4 = this;

    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("div", _extends({
      ref: function ref(control) {
        _this4.control = control;
      }
    }, props), props.children);
  };

  return LayoutGridInner;
}(__WEBPACK_IMPORTED_MODULE_1__MaterialComponent__["a" /* default */]);

/**
 * @prop cols = 0
 * @prop desktopCols = 0
 * @prop tabletCols = 0
 * @prop phoneCols = 0
 * @prop order = 0
 * @prop align = ''
 */


var LayoutGridCell = function (_MaterialComponent3) {
  _inherits(LayoutGridCell, _MaterialComponent3);

  function LayoutGridCell() {
    _classCallCheck(this, LayoutGridCell);

    var _this5 = _possibleConstructorReturn(this, _MaterialComponent3.call(this));

    _this5.componentName = "layout-grid__cell";
    _this5._propsDict = {
      cols: "cols",
      desktop: "desktopCols",
      tablet: "tabletCols",
      phone: "phoneCols",
      order: "order",
      align: "align"
    };
    return _this5;
  }

  LayoutGridCell.prototype.createClassName = function createClassName(props) {
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
  };

  LayoutGridCell.prototype.materialDom = function materialDom(props) {
    var _this6 = this;

    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("div", _extends({
      className: this.createClassName(props),
      ref: function ref(control) {
        _this6.control = control;
      }
    }, props), props.children);
  };

  LayoutGridCell.prototype.render = function render() {
    var _this7 = this;

    var element = _MaterialComponent3.prototype.render.call(this);
    // remove the extra attributes used for customising this element - keep the DOM clean
    Object.keys(this._propsDict).forEach(function (key) {
      return delete element.attributes[_this7._propsDict[key]];
    });
    return element;
  };

  return LayoutGridCell;
}(__WEBPACK_IMPORTED_MODULE_1__MaterialComponent__["a" /* default */]);

LayoutGrid.Cell = LayoutGridCell;
LayoutGrid.Inner = LayoutGridInner;

/* harmony default export */ __webpack_exports__["a"] = (LayoutGrid);

/***/ }),

/***/ "Qdhi":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__("75cn");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__simple__ = __webpack_require__("wTMJ");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__simple__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__simple__["b"]; });
/* unused harmony reexport util */
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

/***/ "R7gn":
/***/ (function(module, exports, __webpack_require__) {

/*
Syntax highlighting with language autodetection.
https://highlightjs.org/
*/

(function (factory) {

  // Find the global object for export to both the browser and web workers.
  var globalObject = typeof window === 'object' && window || typeof self === 'object' && self;

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

/***/ "RKMj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ElevationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__("KM04");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_preact_material_components_Elevation__ = __webpack_require__("Jnuy");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_component_table__ = __webpack_require__("B/9r");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_code_block__ = __webpack_require__("F4jb");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__style__ = __webpack_require__("56Xb");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sample_txt__ = __webpack_require__("Bfdu");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sample_txt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__sample_txt__);


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var _ref = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	'div',
	{ className: 'mdc-typography--display1' },
	'Sample code '
);

var _ref2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	__WEBPACK_IMPORTED_MODULE_3__components_code_block__["a" /* default */],
	null,
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
		'code',
		{ 'class': 'lang-js' },
		__WEBPACK_IMPORTED_MODULE_5__sample_txt___default.a
	)
);

var _ref3 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	'div',
	{ className: 'mdc-typography--display1' },
	'Original documentation'
);

var _ref4 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
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
);

var _ref5 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	'div',
	{ className: 'mdc-typography--display1' },
	'Demo '
);

var _ref6 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Elevation__["a" /* default */],
	{ z: 0 },
	'Z0'
);

var _ref7 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Elevation__["a" /* default */],
	{ z: 1 },
	'Z1'
);

var _ref8 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Elevation__["a" /* default */],
	{ z: 2 },
	'Z2'
);

var _ref9 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Elevation__["a" /* default */],
	{ z: 3 },
	'Z3'
);

var _ref10 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Elevation__["a" /* default */],
	{ z: 4 },
	'Z4'
);

var ElevationPage = function (_Component) {
	_inherits(ElevationPage, _Component);

	function ElevationPage() {
		_classCallCheck(this, ElevationPage);

		var _this = _possibleConstructorReturn(this, _Component.call(this));

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

	ElevationPage.prototype.render = function render() {
		return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
			'div',
			{ className: 'page-elevation' },
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_2__components_component_table__["a" /* default */], { data: this.propsTable }),
			_ref,
			_ref2,
			_ref3,
			_ref4,
			_ref5,
			_ref6,
			_ref7,
			_ref8,
			_ref9,
			_ref10
		);
	};

	return ElevationPage;
}(__WEBPACK_IMPORTED_MODULE_0_preact__["Component"]);



/***/ }),

/***/ "S/If":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DrawerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__("KM04");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_preact_material_components_Drawer__ = __webpack_require__("ynRT");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_component_table__ = __webpack_require__("B/9r");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_code_block__ = __webpack_require__("F4jb");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_events_table__ = __webpack_require__("PIHy");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sample_txt__ = __webpack_require__("WeSf");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sample_txt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__sample_txt__);


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var _ref = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	'div',
	{ className: 'mdc-typography--display1' },
	'Sample code '
);

var _ref2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	__WEBPACK_IMPORTED_MODULE_3__components_code_block__["a" /* default */],
	null,
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
		'code',
		{ 'class': 'lang-js' },
		__WEBPACK_IMPORTED_MODULE_5__sample_txt___default.a
	)
);

var _ref3 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	'div',
	{ className: 'mdc-typography--display1' },
	'Original documentation'
);

var _ref4 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
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
);

var _ref5 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	'div',
	{ className: 'mdc-typography--display1' },
	'Demo '
);

var _ref6 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	'div',
	{ className: 'mdc-typography--title' },
	'not available '
);

var DrawerPage = function (_Component) {
	_inherits(DrawerPage, _Component);

	function DrawerPage() {
		_classCallCheck(this, DrawerPage);

		var _this = _possibleConstructorReturn(this, _Component.call(this));

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

	DrawerPage.prototype.render = function render() {
		return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
			'div',
			null,
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_2__components_component_table__["a" /* default */], { data: this.propsTable }),
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_4__components_events_table__["a" /* default */], { data: this.eventsTable }),
			_ref,
			_ref2,
			_ref3,
			_ref4,
			_ref5,
			_ref6
		);
	};

	return DrawerPage;
}(__WEBPACK_IMPORTED_MODULE_0_preact__["Component"]);



/***/ }),

/***/ "SIOS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MDCRippleFoundation; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base_foundation__ = __webpack_require__("uJAj");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__adapter__ = __webpack_require__("FHEU");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__("NQRl");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util__ = __webpack_require__("joOv");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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






/**
 * @typedef {!{
 *   isActivated: (boolean|undefined),
 *   hasDeactivationUXRun: (boolean|undefined),
 *   wasActivatedByPointer: (boolean|undefined),
 *   wasElementMadeActive: (boolean|undefined),
 *   activationStartTime: (number|undefined),
 *   activationEvent: Event,
 *   isProgrammatic: (boolean|undefined)
 * }}
 */
var ActivationStateType = void 0;

/**
 * @typedef {!{
 *   activate: (string|undefined),
 *   deactivate: (string|undefined),
 *   focus: (string|undefined),
 *   blur: (string|undefined)
 * }}
 */
var ListenerInfoType = void 0;

/**
 * @typedef {!{
 *   activate: function(!Event),
 *   deactivate: function(!Event),
 *   focus: function(),
 *   blur: function()
 * }}
 */
var ListenersType = void 0;

/**
 * @typedef {!{
 *   x: number,
 *   y: number
 * }}
 */
var PointType = void 0;

/**
 * @enum {string}
 */
var DEACTIVATION_ACTIVATION_PAIRS = {
  mouseup: 'mousedown',
  pointerup: 'pointerdown',
  touchend: 'touchstart',
  keyup: 'keydown',
  blur: 'focus'
};

/**
 * @extends {MDCFoundation<!MDCRippleAdapter>}
 */

var MDCRippleFoundation = function (_MDCFoundation) {
  _inherits(MDCRippleFoundation, _MDCFoundation);

  _createClass(MDCRippleFoundation, [{
    key: 'isSupported_',


    /**
     * We compute this property so that we are not querying information about the client
     * until the point in time where the foundation requests it. This prevents scenarios where
     * client-side feature-detection may happen too early, such as when components are rendered on the server
     * and then initialized at mount time on the client.
     * @return {boolean}
     */
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

    /** @private {number} */
    var _this = _possibleConstructorReturn(this, _MDCFoundation.call(this, _extends(MDCRippleFoundation.defaultAdapter, adapter)));

    _this.layoutFrame_ = 0;

    /** @private {!ClientRect} */
    _this.frame_ = /** @type {!ClientRect} */{ width: 0, height: 0 };

    /** @private {!ActivationStateType} */
    _this.activationState_ = _this.defaultActivationState_();

    /** @private {number} */
    _this.xfDuration_ = 0;

    /** @private {number} */
    _this.initialSize_ = 0;

    /** @private {number} */
    _this.maxRadius_ = 0;

    /** @private {!Array<{ListenerInfoType}>} */
    _this.listenerInfos_ = [{ activate: 'touchstart', deactivate: 'touchend' }, { activate: 'pointerdown', deactivate: 'pointerup' }, { activate: 'mousedown', deactivate: 'mouseup' }, { activate: 'keydown', deactivate: 'keyup' }, { focus: 'focus', blur: 'blur' }];

    /** @private {!ListenersType} */
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

    /** @private {!Function} */
    _this.resizeHandler_ = function () {
      return _this.layout();
    };

    /** @private {!{left: number, top:number}} */
    _this.unboundedCoords_ = {
      left: 0,
      top: 0
    };

    /** @private {number} */
    _this.fgScale_ = 0;

    /** @private {number} */
    _this.activationTimer_ = 0;

    /** @private {number} */
    _this.fgDeactivationRemovalTimer_ = 0;

    /** @private {boolean} */
    _this.activationAnimationHasEnded_ = false;

    /** @private {!Function} */
    _this.activationTimerCallback_ = function () {
      _this.activationAnimationHasEnded_ = true;
      _this.runDeactivationUXLogicIfReady_();
    };
    return _this;
  }

  /**
   * @return {!ActivationStateType}
   */


  MDCRippleFoundation.prototype.defaultActivationState_ = function defaultActivationState_() {
    return {
      isActivated: false,
      hasDeactivationUXRun: false,
      wasActivatedByPointer: false,
      wasElementMadeActive: false,
      activationStartTime: 0,
      activationEvent: null,
      isProgrammatic: false
    };
  };

  MDCRippleFoundation.prototype.init = function init() {
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
  };

  /** @private */


  MDCRippleFoundation.prototype.addEventListeners_ = function addEventListeners_() {
    var _this3 = this;

    this.listenerInfos_.forEach(function (info) {
      Object.keys(info).forEach(function (k) {
        _this3.adapter_.registerInteractionHandler(info[k], _this3.listeners_[k]);
      });
    });
    this.adapter_.registerResizeHandler(this.resizeHandler_);
  };

  /**
   * @param {Event} e
   * @private
   */


  MDCRippleFoundation.prototype.activate_ = function activate_(e) {
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
  };

  MDCRippleFoundation.prototype.activate = function activate() {
    this.activate_(null);
  };

  /** @private */


  MDCRippleFoundation.prototype.animateActivation_ = function animateActivation_() {
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
    clearTimeout(this.fgDeactivationRemovalTimer_);
    this.rmBoundedActivationClasses_();
    this.adapter_.removeClass(FG_DEACTIVATION);

    // Force layout in order to re-trigger the animation.
    this.adapter_.computeBoundingRect();
    this.adapter_.addClass(BG_ACTIVE_FILL);
    this.adapter_.addClass(FG_ACTIVATION);
    this.activationTimer_ = setTimeout(function () {
      return _this5.activationTimerCallback_();
    }, DEACTIVATION_TIMEOUT_MS);
  };

  /**
   * @private
   * @return {{startPoint: PointType, endPoint: PointType}}
   */


  MDCRippleFoundation.prototype.getFgTranslationCoordinates_ = function getFgTranslationCoordinates_() {
    var activationState = this.activationState_;
    var activationEvent = activationState.activationEvent,
        wasActivatedByPointer = activationState.wasActivatedByPointer;


    var startPoint = void 0;
    if (wasActivatedByPointer) {
      startPoint = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__util__["d" /* getNormalizedEventCoords */])(
      /** @type {!Event} */activationEvent, this.adapter_.getWindowPageOffset(), this.adapter_.computeBoundingRect());
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
  };

  /** @private */


  MDCRippleFoundation.prototype.runDeactivationUXLogicIfReady_ = function runDeactivationUXLogicIfReady_() {
    var _this6 = this;

    var FG_DEACTIVATION = MDCRippleFoundation.cssClasses.FG_DEACTIVATION;
    var _activationState_ = this.activationState_,
        hasDeactivationUXRun = _activationState_.hasDeactivationUXRun,
        isActivated = _activationState_.isActivated;

    var activationHasEnded = hasDeactivationUXRun || !isActivated;
    if (activationHasEnded && this.activationAnimationHasEnded_) {
      this.rmBoundedActivationClasses_();
      this.adapter_.addClass(FG_DEACTIVATION);
      this.fgDeactivationRemovalTimer_ = setTimeout(function () {
        _this6.adapter_.removeClass(FG_DEACTIVATION);
      }, __WEBPACK_IMPORTED_MODULE_2__constants__["c" /* numbers */].FG_DEACTIVATION_MS);
    }
  };

  /** @private */


  MDCRippleFoundation.prototype.rmBoundedActivationClasses_ = function rmBoundedActivationClasses_() {
    var _MDCRippleFoundation$4 = MDCRippleFoundation.cssClasses,
        BG_ACTIVE_FILL = _MDCRippleFoundation$4.BG_ACTIVE_FILL,
        FG_ACTIVATION = _MDCRippleFoundation$4.FG_ACTIVATION;

    this.adapter_.removeClass(BG_ACTIVE_FILL);
    this.adapter_.removeClass(FG_ACTIVATION);
    this.activationAnimationHasEnded_ = false;
    this.adapter_.computeBoundingRect();
  };

  /**
   * @param {Event} e
   * @private
   */


  MDCRippleFoundation.prototype.deactivate_ = function deactivate_(e) {
    var _this7 = this;

    var activationState = this.activationState_;
    // This can happen in scenarios such as when you have a keyup event that blurs the element.

    if (!activationState.isActivated) {
      return;
    }
    // Programmatic deactivation.
    if (activationState.isProgrammatic) {
      var evtObject = null;
      var _state = /** @type {!ActivationStateType} */_extends({}, activationState);
      requestAnimationFrame(function () {
        return _this7.animateDeactivation_(evtObject, _state);
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

    var state = /** @type {!ActivationStateType} */_extends({}, activationState);
    requestAnimationFrame(function () {
      if (needsDeactivationUX) {
        _this7.activationState_.hasDeactivationUXRun = true;
        _this7.animateDeactivation_(e, state);
      }

      if (needsActualDeactivation) {
        _this7.activationState_ = _this7.defaultActivationState_();
      }
    });
  };

  MDCRippleFoundation.prototype.deactivate = function deactivate() {
    this.deactivate_(null);
  };

  /**
   * @param {Event} e
   * @param {!ActivationStateType} options
   * @private
   */


  MDCRippleFoundation.prototype.animateDeactivation_ = function animateDeactivation_(e, _ref) {
    var wasActivatedByPointer = _ref.wasActivatedByPointer,
        wasElementMadeActive = _ref.wasElementMadeActive;
    var BG_FOCUSED = MDCRippleFoundation.cssClasses.BG_FOCUSED;

    if (wasActivatedByPointer || wasElementMadeActive) {
      // Remove class left over by element being focused
      this.adapter_.removeClass(BG_FOCUSED);
      this.runDeactivationUXLogicIfReady_();
    }
  };

  MDCRippleFoundation.prototype.destroy = function destroy() {
    var _this8 = this;

    if (!this.isSupported_) {
      return;
    }
    this.removeEventListeners_();

    var _MDCRippleFoundation$5 = MDCRippleFoundation.cssClasses,
        ROOT = _MDCRippleFoundation$5.ROOT,
        UNBOUNDED = _MDCRippleFoundation$5.UNBOUNDED;

    requestAnimationFrame(function () {
      _this8.adapter_.removeClass(ROOT);
      _this8.adapter_.removeClass(UNBOUNDED);
      _this8.removeCssVars_();
    });
  };

  /** @private */


  MDCRippleFoundation.prototype.removeEventListeners_ = function removeEventListeners_() {
    var _this9 = this;

    this.listenerInfos_.forEach(function (info) {
      Object.keys(info).forEach(function (k) {
        _this9.adapter_.deregisterInteractionHandler(info[k], _this9.listeners_[k]);
      });
    });
    this.adapter_.deregisterResizeHandler(this.resizeHandler_);
  };

  /** @private */


  MDCRippleFoundation.prototype.removeCssVars_ = function removeCssVars_() {
    var _this10 = this;

    var strings = MDCRippleFoundation.strings;

    Object.keys(strings).forEach(function (k) {
      if (k.indexOf('VAR_') === 0) {
        _this10.adapter_.updateCssVariable(strings[k], null);
      }
    });
  };

  MDCRippleFoundation.prototype.layout = function layout() {
    var _this11 = this;

    if (this.layoutFrame_) {
      cancelAnimationFrame(this.layoutFrame_);
    }
    this.layoutFrame_ = requestAnimationFrame(function () {
      _this11.layoutInternal_();
      _this11.layoutFrame_ = 0;
    });
  };

  /** @private */


  MDCRippleFoundation.prototype.layoutInternal_ = function layoutInternal_() {
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
  };

  /** @private */


  MDCRippleFoundation.prototype.updateLayoutCssVars_ = function updateLayoutCssVars_() {
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
  };

  return MDCRippleFoundation;
}(__WEBPACK_IMPORTED_MODULE_0__material_base_foundation__["a" /* default */]);



/***/ }),

/***/ "SfCu":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckboxPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__("KM04");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_preact_material_components_Checkbox__ = __webpack_require__("OA4U");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_preact_material_components_Button__ = __webpack_require__("7/cg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_preact_material_components_FormField__ = __webpack_require__("rW9b");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_component_table__ = __webpack_require__("B/9r");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_code_block__ = __webpack_require__("F4jb");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__style__ = __webpack_require__("fG5c");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__sample_txt__ = __webpack_require__("nVyQ");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__sample_txt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__sample_txt__);


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }










var _ref = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	'div',
	{ className: 'mdc-typography--display1' },
	'Sample code '
);

var _ref2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	__WEBPACK_IMPORTED_MODULE_5__components_code_block__["a" /* default */],
	null,
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
		'code',
		{ 'class': 'lang-js' },
		__WEBPACK_IMPORTED_MODULE_7__sample_txt___default.a
	)
);

var _ref3 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	'div',
	{ className: 'mdc-typography--display1' },
	'Original documentation'
);

var _ref4 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
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
);

var _ref5 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	'div',
	{ className: 'mdc-typography--display1' },
	'Demo '
);

var _ref6 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	'label',
	{ 'for': 'basic-checkbox', id: 'basic-checkbox-label' },
	'This is my checkbox'
);

var CheckboxPage = function (_Component) {
	_inherits(CheckboxPage, _Component);

	function CheckboxPage() {
		_classCallCheck(this, CheckboxPage);

		var _this = _possibleConstructorReturn(this, _Component.call(this));

		_this.propsTable = [{
			component: 'Checkbox',
			props: []
		}];
		return _this;
	}

	CheckboxPage.prototype.render = function render() {
		var _this2 = this;

		return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
			'div',
			{ className: 'page-checkbox' },
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_4__components_component_table__["a" /* default */], { data: this.propsTable }),
			_ref,
			_ref2,
			_ref3,
			_ref4,
			_ref5,
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
				__WEBPACK_IMPORTED_MODULE_3_preact_material_components_FormField__["a" /* default */],
				null,
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Checkbox__["a" /* default */], { id: 'basic-checkbox-label', ref: function ref(cb) {
						_this2.cb = cb;
					} }),
				_ref6
			),
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
				__WEBPACK_IMPORTED_MODULE_2_preact_material_components_Button__["a" /* default */],
				{ raised: true, onClick: function onClick() {
						_this2.cb.MDComponent.indeterminate = true;
					} },
				'Make indeterminate'
			)
		);
	};

	return CheckboxPage;
}(__WEBPACK_IMPORTED_MODULE_0_preact__["Component"]);



/***/ }),

/***/ "TO+D":
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

/***/ "U61V":
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

/***/ "V4tZ":
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/icon?family=Material+Icons\"/>"

/***/ }),

/***/ "VEmT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LinearProgressPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__("KM04");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_preact_material_components_LinearProgress__ = __webpack_require__("gbHP");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_component_table__ = __webpack_require__("B/9r");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_code_block__ = __webpack_require__("F4jb");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sample_txt__ = __webpack_require__("WtcB");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sample_txt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__sample_txt__);


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var _ref = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	'div',
	{ className: 'mdc-typography--display1' },
	'Sample code '
);

var _ref2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	__WEBPACK_IMPORTED_MODULE_3__components_code_block__["a" /* default */],
	null,
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
		'code',
		{ 'class': 'lang-js' },
		__WEBPACK_IMPORTED_MODULE_4__sample_txt___default.a
	)
);

var _ref3 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	'div',
	{ className: 'mdc-typography--display1' },
	'Original documentation'
);

var _ref4 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	'div',
	{ className: 'mdc-typography--body' },
	'This component encapsulates ',
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
		'span',
		{ className: 'strong' },
		'mdc-linear-progress'
	),
	', you can refer to its documentation',
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
		'a',
		{ href: 'https://github.com/material-components/material-components-web/tree/master/packages/mdc-linear-progress' },
		' here'
	),
	'.'
);

var _ref5 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	'div',
	{ className: 'mdc-typography--display1' },
	'Demo '
);

var _ref6 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	'div',
	{ className: 'mdc-typography--title' },
	'Indeterminate '
);

var _ref7 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_1_preact_material_components_LinearProgress__["a" /* default */], { indeterminate: true });

var _ref8 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	'div',
	{ className: 'mdc-typography--title' },
	'Reversed '
);

var _ref9 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_1_preact_material_components_LinearProgress__["a" /* default */], { reversed: true, indeterminate: true });

var _ref10 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	'div',
	{ className: 'mdc-typography--title' },
	'Accent '
);

var _ref11 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_1_preact_material_components_LinearProgress__["a" /* default */], { indeterminate: true, accent: true });

var LinearProgressPage = function (_Component) {
	_inherits(LinearProgressPage, _Component);

	function LinearProgressPage() {
		_classCallCheck(this, LinearProgressPage);

		var _this = _possibleConstructorReturn(this, _Component.call(this));

		_this.propsTable = [{
			component: 'LinearProgress',
			props: [{
				name: 'indeterminate',
				description: 'tells if the progress bar is running forever'
			}, {
				name: 'reversed',
				description: 'tells if the progress bar direction is reversed'
			}, {
				name: 'accent',
				description: 'makes the colour of the progress bar accented'
			}]
		}];
		return _this;
	}

	LinearProgressPage.prototype.render = function render() {
		return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
			'div',
			null,
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_2__components_component_table__["a" /* default */], { data: this.propsTable }),
			_ref,
			_ref2,
			_ref3,
			_ref4,
			_ref5,
			_ref6,
			_ref7,
			_ref8,
			_ref9,
			_ref10,
			_ref11
		);
	};

	return LinearProgressPage;
}(__WEBPACK_IMPORTED_MODULE_0_preact__["Component"]);



/***/ }),

/***/ "VSmG":
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

/***/ "VcCu":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MDCTextfield; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base__ = __webpack_require__("dSNL");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_ripple__ = __webpack_require__("vkNc");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__("jrKX");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__foundation__ = __webpack_require__("It0U");
/* unused harmony reexport MDCTextfieldFoundation */
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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

  function MDCTextfield() {
    _classCallCheck(this, MDCTextfield);

    return _possibleConstructorReturn(this, _MDCComponent.apply(this, arguments));
  }

  MDCTextfield.attachTo = function attachTo(root) {
    return new MDCTextfield(root);
  };

  MDCTextfield.prototype.initialize = function initialize() {
    var rippleFactory = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function (el) {
      return new __WEBPACK_IMPORTED_MODULE_1__material_ripple__["a" /* MDCRipple */](el);
    };

    this.input_ = this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* strings */].INPUT_SELECTOR);
    this.label_ = this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* strings */].LABEL_SELECTOR);
    this.helptextElement = null;
    this.ripple = null;
    if (this.input_.hasAttribute('aria-controls')) {
      this.helptextElement = document.getElementById(this.input_.getAttribute('aria-controls'));
    }
    if (this.root_.classList.contains(__WEBPACK_IMPORTED_MODULE_2__constants__["b" /* cssClasses */].BOX)) {
      this.ripple = rippleFactory(this.root_);
    };
  };

  MDCTextfield.prototype.destroy = function destroy() {
    if (this.ripple) {
      this.ripple.destroy();
    }
    _MDCComponent.prototype.destroy.call(this);
  };

  MDCTextfield.prototype.initialSyncWithDom = function initialSyncWithDom() {
    this.disabled = this.input_.disabled;
  };

  MDCTextfield.prototype.getDefaultFoundation = function getDefaultFoundation() {
    var _this2 = this;

    return new __WEBPACK_IMPORTED_MODULE_3__foundation__["a" /* default */](_extends({
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
  };

  MDCTextfield.prototype.getInputAdapterMethods_ = function getInputAdapterMethods_() {
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
  };

  MDCTextfield.prototype.getHelptextAdapterMethods_ = function getHelptextAdapterMethods_() {
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
  };

  _createClass(MDCTextfield, [{
    key: 'disabled',
    get: function get() {
      return this.foundation_.isDisabled();
    },
    set: function set(disabled) {
      this.foundation_.setDisabled(disabled);
    }
  }]);

  return MDCTextfield;
}(__WEBPACK_IMPORTED_MODULE_0__material_base__["a" /* MDCComponent */]);

/***/ }),

/***/ "VqTd":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__("r3ZS");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__constants__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__foundation__ = __webpack_require__("/CSp");
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

/***/ "WCsR":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__("KM04");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_preact_material_components_Menu__ = __webpack_require__("x1lW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_preact_material_components_Button__ = __webpack_require__("7/cg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_component_table__ = __webpack_require__("B/9r");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_code_block__ = __webpack_require__("F4jb");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sample_txt__ = __webpack_require__("iDKb");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sample_txt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__sample_txt__);


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var _ref = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	'div',
	{ className: 'mdc-typography--display1' },
	'Sample code '
);

var _ref2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	__WEBPACK_IMPORTED_MODULE_4__components_code_block__["a" /* default */],
	null,
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
		'code',
		{ 'class': 'lang-js' },
		__WEBPACK_IMPORTED_MODULE_5__sample_txt___default.a
	)
);

var _ref3 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	'div',
	{ className: 'mdc-typography--display1' },
	'Original documentation'
);

var _ref4 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	'div',
	{ className: 'mdc-typography--body' },
	'This component encapsulates ',
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
		'span',
		{ className: 'strong' },
		'mdc-menu'
	),
	', you can refer to its documentation',
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
		'a',
		{ href: 'https://github.com/material-components/material-components-web/tree/master/packages/mdc-menu' },
		' here'
	),
	'.'
);

var _ref5 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	'div',
	{ className: 'mdc-typography--display1' },
	'Demo '
);

var _ref6 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Menu__["a" /* default */].Item,
	null,
	'Hello1'
);

var _ref7 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Menu__["a" /* default */].Item,
	null,
	'Hello2'
);

var _ref8 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Menu__["a" /* default */].Item,
	null,
	'Hello3'
);

var _ref9 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	'div',
	{ className: 'mdc-typography--display1' },
	'Note '
);

var _ref10 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	'div',
	{ className: 'mdc-typography--body' },
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
		'div',
		null,
		'If you are using this component individually, DO NOT FORGET to import',
		__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
			'i',
			null,
			' \'preact-material-components/List/style.css\''
		)
	)
);

var MenuPage = function (_Component) {
	_inherits(MenuPage, _Component);

	function MenuPage() {
		_classCallCheck(this, MenuPage);

		var _this = _possibleConstructorReturn(this, _Component.call(this));

		_this.propsTable = [{
			component: 'Menu',
			props: [{
				name: 'Open',
				description: 'Auto opens the menu.'
			}]
		}, {
			component: 'Item',
			props: []
		}, {
			component: 'MenuAnchor',
			props: []
		}];
		return _this;
	}

	MenuPage.prototype.render = function render() {
		var _this2 = this;

		return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
			'div',
			{ className: 'page-menu' },
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_3__components_component_table__["a" /* default */], { data: this.propsTable }),
			_ref,
			_ref2,
			_ref3,
			_ref4,
			_ref5,
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
				__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Menu__["a" /* default */].Anchor,
				null,
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					__WEBPACK_IMPORTED_MODULE_2_preact_material_components_Button__["a" /* default */],
					{
						onClick: function onClick(e) {
							_this2.menu.MDComponent.open = !_this2.menu.MDComponent.open;
						}
					},
					'Click for menu'
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Menu__["a" /* default */],
					{
						ref: function ref(menu) {
							_this2.menu = menu;
						}
					},
					_ref6,
					_ref7,
					_ref8
				)
			),
			_ref9,
			_ref10
		);
	};

	return MenuPage;
}(__WEBPACK_IMPORTED_MODULE_0_preact__["Component"]);



/***/ }),

/***/ "WeSf":
/***/ (function(module, exports) {

module.exports = "import {h, Component} from 'preact';\r\nimport Drawer from 'preact-material-components/Drawer';\r\nimport List from 'preact-material-components/List';\r\nimport 'preact-material-components/Drawer/style.css';\r\nimport 'preact-material-components/List/style.css';\r\n\r\nexport default class DrawerPage extends Component {\r\n  render(){\r\n    return (\r\n      <div>\r\n        <Drawer.TemporaryDrawer ref={drawer=>{this.drawer = drawer;}} >\r\n          <Drawer.TemporaryDrawerHeader className=\"mdc-theme--primary-bg\">\r\n            Components\r\n          </Drawer.TemporaryDrawerHeader>\r\n          <Drawer.TemporaryDrawerContent>\r\n            <List>\r\n              <List.LinkItem>\r\n                  <List.ItemIcon>home</List.ItemIcon>\r\n                  Home\r\n              </List.LinkItem>\r\n            </List>\r\n          </Drawer.TemporaryDrawerContent>\r\n        </Drawer.TemporaryDrawer>\r\n      </div>\r\n    );\r\n  }\r\n}\r\n"

/***/ }),

/***/ "WtcB":
/***/ (function(module, exports) {

module.exports = "import {h, Component} from 'preact';\r\nimport LinearProgress from 'preact-material-components/LinearProgress';\r\nimport 'preact-material-components/LinearProgress/style.css';\r\n\r\nexport default class SnackbarPage extends Component {\r\n  render(){\r\n    return (\r\n      <div>\r\n        <LinearProgress reversed={true} />\r\n      </div>\r\n    );\r\n  }\r\n}\r\n"

/***/ }),

/***/ "WvoH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MDCTemporaryDrawer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base__ = __webpack_require__("dSNL");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__foundation__ = __webpack_require__("/sI/");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util__ = __webpack_require__("rQFk");
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

    return _possibleConstructorReturn(this, _MDCComponent.apply(this, arguments));
  }

  MDCTemporaryDrawer.attachTo = function attachTo(root) {
    return new MDCTemporaryDrawer(root);
  };

  MDCTemporaryDrawer.prototype.getDefaultFoundation = function getDefaultFoundation() {
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
      addBodyClass: function addBodyClass(className) {
        return document.body.classList.add(className);
      },
      removeBodyClass: function removeBodyClass(className) {
        return document.body.classList.remove(className);
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
        return _this2.emit(__WEBPACK_IMPORTED_MODULE_1__foundation__["a" /* default */].strings.OPEN_EVENT);
      },
      notifyClose: function notifyClose() {
        return _this2.emit(__WEBPACK_IMPORTED_MODULE_1__foundation__["a" /* default */].strings.CLOSE_EVENT);
      },
      isRtl: function isRtl() {
        return getComputedStyle(_this2.root_).getPropertyValue('direction') === 'rtl';
      },
      isDrawer: function isDrawer(el) {
        return el === _this2.drawer;
      }
    });
  };

  _createClass(MDCTemporaryDrawer, [{
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
  }]);

  return MDCTemporaryDrawer;
}(__WEBPACK_IMPORTED_MODULE_0__material_base__["a" /* MDCComponent */]);

/***/ }),

/***/ "XCG+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export SelectionControlState */
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

/**
 * @typedef {!{
 *   checked: boolean,
 *   indeterminate: boolean,
 *   disabled: boolean,
 *   value: ?string
 * }}
 */
var SelectionControlState = void 0;

/***/ }),

/***/ "Yr+x":
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

/***/ "ZB3r":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IconTogglePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__("KM04");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_preact_material_components_IconToggle__ = __webpack_require__("MlBl");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_component_table__ = __webpack_require__("B/9r");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_code_block__ = __webpack_require__("F4jb");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sample_txt__ = __webpack_require__("oqLc");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sample_txt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__sample_txt__);


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var _ref = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	'div',
	{ className: 'mdc-typography--display1' },
	'Sample code '
);

var _ref2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	__WEBPACK_IMPORTED_MODULE_3__components_code_block__["a" /* default */],
	null,
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
		'code',
		{ 'class': 'lang-js' },
		__WEBPACK_IMPORTED_MODULE_4__sample_txt___default.a
	)
);

var _ref3 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	'div',
	{ className: 'mdc-typography--display1' },
	'Original documentation'
);

var _ref4 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	'div',
	{ className: 'mdc-typography--body' },
	'This component encapsulates ',
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
		'span',
		{ className: 'strong' },
		'mdc-icon-toggle'
	),
	', you can refer to its documentation',
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
		'a',
		{ href: 'https://github.com/material-components/material-components-web/tree/master/packages/mdc-icon-toggle' },
		' here'
	),
	'.'
);

var _ref5 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	'div',
	{ className: 'mdc-typography--display1' },
	'Demo '
);

var IconTogglePage = function (_Component) {
	_inherits(IconTogglePage, _Component);

	function IconTogglePage() {
		_classCallCheck(this, IconTogglePage);

		var _this = _possibleConstructorReturn(this, _Component.call(this));

		_this.propsTable = [{
			component: 'IconToggle',
			props: [{
				name: 'disabled',
				description: 'Is the icon disabled'
			}, {
				name: 'data-toggle-on',
				description: 'JSON object for toggle on icon'
			}, {
				name: 'data-toggle-off',
				description: 'JSON object for toggle off icon'
			}]
		}];
		return _this;
	}

	IconTogglePage.prototype.render = function render() {
		var toggleOnIcon = {
			content: "favorite",
			label: "Remove From Favorites"
		};
		var toggleOffIcon = {
			content: "favorite_border",
			label: "Add to Favorites"
		};
		return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
			'div',
			null,
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_2__components_component_table__["a" /* default */], { data: this.propsTable }),
			_ref,
			_ref2,
			_ref3,
			_ref4,
			_ref5,
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
				__WEBPACK_IMPORTED_MODULE_1_preact_material_components_IconToggle__["a" /* default */],
				{
					role: 'button',
					tabindex: '0',
					'aria-pressed': 'false',
					'aria-label': 'Add to favorites',
					'data-toggle-on': toggleOnIcon,
					'data-toggle-off': toggleOffIcon
				},
				'favorite_border'
			)
		);
	};

	return IconTogglePage;
}(__WEBPACK_IMPORTED_MODULE_0_preact__["Component"]);



/***/ }),

/***/ "ZLWE":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MDCTabBarScrollerFoundation; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base_foundation__ = __webpack_require__("uJAj");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__("kNIq");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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





var MDCTabBarScrollerFoundation = function (_MDCFoundation) {
  _inherits(MDCTabBarScrollerFoundation, _MDCFoundation);

  _createClass(MDCTabBarScrollerFoundation, null, [{
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
        eventTargetHasClass: function eventTargetHasClass() {
          return (/* target: EventTarget, className: string */ /* boolean */false
          );
        },
        addClassToForwardIndicator: function addClassToForwardIndicator() /* className: string */{},
        removeClassFromForwardIndicator: function removeClassFromForwardIndicator() /* className: string */{},
        addClassToBackIndicator: function addClassToBackIndicator() /* className: string */{},
        removeClassFromBackIndicator: function removeClassFromBackIndicator() /* className: string */{},
        isRTL: function isRTL() {
          return (/* boolean */false
          );
        },
        registerBackIndicatorClickHandler: function registerBackIndicatorClickHandler() /* handler: EventListener */{},
        deregisterBackIndicatorClickHandler: function deregisterBackIndicatorClickHandler() /* handler: EventListener */{},
        registerForwardIndicatorClickHandler: function registerForwardIndicatorClickHandler() /* handler: EventListener */{},
        deregisterForwardIndicatorClickHandler: function deregisterForwardIndicatorClickHandler() /* handler: EventListener */{},
        registerCapturedInteractionHandler: function registerCapturedInteractionHandler() /* evt: string, handler: EventListener */{},
        deregisterCapturedInteractionHandler: function deregisterCapturedInteractionHandler() /* evt: string, handler: EventListener */{},
        registerWindowResizeHandler: function registerWindowResizeHandler() /* handler: EventListener */{},
        deregisterWindowResizeHandler: function deregisterWindowResizeHandler() /* handler: EventListener */{},
        getNumberOfTabs: function getNumberOfTabs() {
          return (/* number */0
          );
        },
        getComputedWidthForTabAtIndex: function getComputedWidthForTabAtIndex() {
          return (/* number */0
          );
        },
        getComputedLeftForTabAtIndex: function getComputedLeftForTabAtIndex() {
          return (/* number */0
          );
        },
        getOffsetWidthForScrollFrame: function getOffsetWidthForScrollFrame() {
          return (/* number */0
          );
        },
        getScrollLeftForScrollFrame: function getScrollLeftForScrollFrame() {
          return (/* number */0
          );
        },
        setScrollLeftForScrollFrame: function setScrollLeftForScrollFrame() /* scrollLeftAmount: number */{},
        getOffsetWidthForTabBar: function getOffsetWidthForTabBar() {
          return (/* number */0
          );
        },
        setTransformStyleForTabBar: function setTransformStyleForTabBar() /* value: string */{},
        getOffsetLeftForEventTarget: function getOffsetLeftForEventTarget() {
          return (/* target: EventTarget */ /* number */0
          );
        },
        getOffsetWidthForEventTarget: function getOffsetWidthForEventTarget() {
          return (/* target: EventTarget */ /* number */0
          );
        }
      };
    }
  }]);

  function MDCTabBarScrollerFoundation(adapter) {
    _classCallCheck(this, MDCTabBarScrollerFoundation);

    var _this = _possibleConstructorReturn(this, _MDCFoundation.call(this, _extends(MDCTabBarScrollerFoundation.defaultAdapter, adapter)));

    _this.pointerDownRecognized_ = false;
    _this.currentTranslateOffset_ = 0;
    _this.focusedTarget_ = null;
    _this.layoutFrame_ = 0;
    _this.scrollFrameScrollLeft_ = 0;
    _this.forwardIndicatorClickHandler_ = function (evt) {
      return _this.scrollForward(evt);
    };
    _this.backIndicatorClickHandler_ = function (evt) {
      return _this.scrollBack(evt);
    };
    _this.resizeHandler_ = function () {
      return _this.layout();
    };
    _this.interactionHandler_ = function (evt) {
      if (evt.type == 'touchstart' || evt.type == 'mousedown') {
        _this.pointerDownRecognized_ = true;
      }
      _this.handlePossibleTabKeyboardFocus_(evt);

      if (evt.type == 'focus') {
        _this.pointerDownRecognized_ = false;
      }
    };
    return _this;
  }

  MDCTabBarScrollerFoundation.prototype.init = function init() {
    var _this2 = this;

    this.adapter_.registerBackIndicatorClickHandler(this.backIndicatorClickHandler_);
    this.adapter_.registerForwardIndicatorClickHandler(this.forwardIndicatorClickHandler_);
    this.adapter_.registerWindowResizeHandler(this.resizeHandler_);
    ['touchstart', 'mousedown', 'focus'].forEach(function (evtType) {
      _this2.adapter_.registerCapturedInteractionHandler(evtType, _this2.interactionHandler_);
    });
    this.layout();
  };

  MDCTabBarScrollerFoundation.prototype.destroy = function destroy() {
    var _this3 = this;

    this.adapter_.deregisterBackIndicatorClickHandler(this.backIndicatorClickHandler_);
    this.adapter_.deregisterForwardIndicatorClickHandler(this.forwardIndicatorClickHandler_);
    this.adapter_.deregisterWindowResizeHandler(this.resizeHandler_);
    ['touchstart', 'mousedown', 'focus'].forEach(function (evtType) {
      _this3.adapter_.deregisterCapturedInteractionHandler(evtType, _this3.interactionHandler_);
    });
  };

  MDCTabBarScrollerFoundation.prototype.scrollBack = function scrollBack() {
    var evt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

    if (evt) {
      evt.preventDefault();
    }

    var tabWidthAccumulator = 0;
    var scrollTargetIndex = 0;

    for (var i = this.adapter_.getNumberOfTabs() - 1; i > 0; i--) {
      var tabOffsetLeft = this.adapter_.getComputedLeftForTabAtIndex(i);
      var tabBarWidthLessTabOffsetLeft = this.adapter_.getOffsetWidthForTabBar() - tabOffsetLeft;

      var tabIsNotOccluded = tabOffsetLeft > this.currentTranslateOffset_;
      if (this.isRTL_()) {
        tabIsNotOccluded = tabBarWidthLessTabOffsetLeft > this.currentTranslateOffset_;
      }

      if (tabIsNotOccluded) {
        continue;
      }

      tabWidthAccumulator += this.adapter_.getComputedWidthForTabAtIndex(i);

      var scrollTargetDetermined = tabWidthAccumulator > this.adapter_.getOffsetWidthForScrollFrame();
      if (scrollTargetDetermined) {
        scrollTargetIndex = this.isRTL_() ? i + 1 : i;
        break;
      }
    }

    this.scrollToTabAtIndex_(scrollTargetIndex);
  };

  MDCTabBarScrollerFoundation.prototype.scrollForward = function scrollForward() {
    var evt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

    if (evt) {
      evt.preventDefault();
    }

    var scrollFrameOffsetWidth = this.adapter_.getOffsetWidthForScrollFrame() + this.currentTranslateOffset_;
    var scrollTargetIndex = 0;

    for (var i = 0; i < this.adapter_.getNumberOfTabs(); i++) {
      var tabOffsetLeftAndWidth = this.adapter_.getComputedLeftForTabAtIndex(i) + this.adapter_.getComputedWidthForTabAtIndex(i);
      var scrollTargetDetermined = tabOffsetLeftAndWidth > scrollFrameOffsetWidth;

      if (this.isRTL_()) {
        var frameOffsetAndTabWidth = scrollFrameOffsetWidth - this.adapter_.getComputedWidthForTabAtIndex(i);
        var _tabOffsetLeftAndWidth = this.adapter_.getComputedLeftForTabAtIndex(i) + this.adapter_.getComputedWidthForTabAtIndex(i);
        var tabRightOffset = this.adapter_.getOffsetWidthForTabBar() - _tabOffsetLeftAndWidth;

        scrollTargetDetermined = tabRightOffset > frameOffsetAndTabWidth;
      }

      if (scrollTargetDetermined) {
        scrollTargetIndex = i;
        break;
      }
    }

    this.scrollToTabAtIndex_(scrollTargetIndex);
  };

  MDCTabBarScrollerFoundation.prototype.layout = function layout() {
    var _this4 = this;

    cancelAnimationFrame(this.layoutFrame_);
    this.scrollFrameScrollLeft_ = this.adapter_.getScrollLeftForScrollFrame();
    this.layoutFrame_ = requestAnimationFrame(function () {
      return _this4.layout_();
    });
  };

  MDCTabBarScrollerFoundation.prototype.isRTL_ = function isRTL_() {
    return this.adapter_.isRTL();
  };

  MDCTabBarScrollerFoundation.prototype.handlePossibleTabKeyboardFocus_ = function handlePossibleTabKeyboardFocus_(evt) {
    if (!this.adapter_.eventTargetHasClass(evt.target, __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* cssClasses */].TAB) || this.pointerDownRecognized_) {
      return;
    }

    var resetAmt = this.isRTL_() ? this.scrollFrameScrollLeft_ : 0;
    this.adapter_.setScrollLeftForScrollFrame(resetAmt);

    this.focusedTarget_ = evt.target;
    var scrollFrameWidth = this.adapter_.getOffsetWidthForScrollFrame();
    var tabBarWidth = this.adapter_.getOffsetWidthForTabBar();
    var leftEdge = this.adapter_.getOffsetLeftForEventTarget(this.focusedTarget_);
    var rightEdge = leftEdge + this.adapter_.getOffsetWidthForEventTarget(this.focusedTarget_);

    var shouldScrollBack = rightEdge <= this.currentTranslateOffset_;
    var shouldScrollForward = rightEdge > this.currentTranslateOffset_ + scrollFrameWidth;

    if (this.isRTL_()) {
      var normalizedLeftOffset = tabBarWidth - leftEdge;
      shouldScrollBack = leftEdge >= tabBarWidth - this.currentTranslateOffset_;
      shouldScrollForward = normalizedLeftOffset > scrollFrameWidth + this.currentTranslateOffset_;
    }

    if (shouldScrollForward) {
      this.scrollForward();
    } else if (shouldScrollBack) {
      this.scrollBack();
    }

    this.pointerDownRecognized_ = false;
  };

  MDCTabBarScrollerFoundation.prototype.layout_ = function layout_() {
    var frameWidth = this.adapter_.getOffsetWidthForScrollFrame();
    var isOverflowing = this.adapter_.getOffsetWidthForTabBar() > frameWidth;

    if (!isOverflowing) {
      this.currentTranslateOffset_ = 0;
    }

    this.shiftFrame_();
    this.updateIndicatorEnabledStates_();
  };

  MDCTabBarScrollerFoundation.prototype.scrollToTabAtIndex_ = function scrollToTabAtIndex_(index) {
    var _this5 = this;

    var scrollTargetOffsetLeft = this.adapter_.getComputedLeftForTabAtIndex(index);
    var scrollTargetOffsetWidth = this.adapter_.getComputedWidthForTabAtIndex(index);

    this.currentTranslateOffset_ = this.normalizeForRTL_(scrollTargetOffsetLeft, scrollTargetOffsetWidth);

    requestAnimationFrame(function () {
      return _this5.shiftFrame_();
    });
  };

  MDCTabBarScrollerFoundation.prototype.normalizeForRTL_ = function normalizeForRTL_(left, width) {
    return this.isRTL_() ? this.adapter_.getOffsetWidthForTabBar() - (left + width) : left;
  };

  MDCTabBarScrollerFoundation.prototype.shiftFrame_ = function shiftFrame_() {
    var shiftAmount = this.isRTL_() ? this.currentTranslateOffset_ : -this.currentTranslateOffset_;

    this.adapter_.setTransformStyleForTabBar('translateX(' + shiftAmount + 'px)');
    this.updateIndicatorEnabledStates_();
  };

  MDCTabBarScrollerFoundation.prototype.updateIndicatorEnabledStates_ = function updateIndicatorEnabledStates_() {
    var INDICATOR_ENABLED = __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* cssClasses */].INDICATOR_ENABLED;

    if (this.currentTranslateOffset_ === 0) {
      this.adapter_.removeClassFromBackIndicator(INDICATOR_ENABLED);
    } else {
      this.adapter_.addClassToBackIndicator(INDICATOR_ENABLED);
    }

    var remainingTabBarWidth = this.adapter_.getOffsetWidthForTabBar() - this.currentTranslateOffset_;
    if (remainingTabBarWidth > this.adapter_.getOffsetWidthForScrollFrame()) {
      this.adapter_.addClassToForwardIndicator(INDICATOR_ENABLED);
    } else {
      this.adapter_.removeClassFromForwardIndicator(INDICATOR_ENABLED);
    }
  };

  return MDCTabBarScrollerFoundation;
}(__WEBPACK_IMPORTED_MODULE_0__material_base_foundation__["a" /* default */]);



/***/ }),

/***/ "a81U":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "aICV":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutGridPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__("KM04");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_preact_material_components_LayoutGrid__ = __webpack_require__("Q1yZ");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_component_table__ = __webpack_require__("B/9r");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_code_block__ = __webpack_require__("F4jb");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__style__ = __webpack_require__("4YXN");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sample_txt__ = __webpack_require__("Mip5");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sample_txt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__sample_txt__);


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var _ref = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	'div',
	{ className: 'mdc-typography--display1' },
	'Sample code'
);

var _ref2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	__WEBPACK_IMPORTED_MODULE_3__components_code_block__["a" /* default */],
	null,
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
		'code',
		{ 'class': 'lang-js' },
		__WEBPACK_IMPORTED_MODULE_5__sample_txt___default.a
	)
);

var _ref3 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	'div',
	{ className: 'mdc-typography--display1' },
	'Original documentation'
);

var _ref4 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
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
);

var _ref5 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	'div',
	{ className: 'mdc-typography--display1' },
	'Demo'
);

var _ref6 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	'div',
	{ className: 'mdc-typography--body' },
	'Grid of 1 column wide items'
);

var _ref7 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	__WEBPACK_IMPORTED_MODULE_1_preact_material_components_LayoutGrid__["a" /* default */],
	null,
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
		__WEBPACK_IMPORTED_MODULE_1_preact_material_components_LayoutGrid__["a" /* default */].Inner,
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
	)
);

var _ref8 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	'div',
	{ className: 'mdc-typography--body' },
	'Grid of 4 column wide items'
);

var _ref9 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	__WEBPACK_IMPORTED_MODULE_1_preact_material_components_LayoutGrid__["a" /* default */],
	null,
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
		__WEBPACK_IMPORTED_MODULE_1_preact_material_components_LayoutGrid__["a" /* default */].Inner,
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
	)
);

var _ref10 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	'div',
	{ className: 'mdc-typography--body' },
	'Grid of differently sized items'
);

var _ref11 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	__WEBPACK_IMPORTED_MODULE_1_preact_material_components_LayoutGrid__["a" /* default */],
	null,
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
		__WEBPACK_IMPORTED_MODULE_1_preact_material_components_LayoutGrid__["a" /* default */].Inner,
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
	)
);

var _ref12 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	'div',
	{ className: 'mdc-typography--body' },
	'Grid of items with tweaks at different screen sizes'
);

var _ref13 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	__WEBPACK_IMPORTED_MODULE_1_preact_material_components_LayoutGrid__["a" /* default */],
	null,
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
		__WEBPACK_IMPORTED_MODULE_1_preact_material_components_LayoutGrid__["a" /* default */].Inner,
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
	)
);

var _ref14 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	'div',
	{ className: 'mdc-typography--body' },
	'Grid with different alignments'
);

var _ref15 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	__WEBPACK_IMPORTED_MODULE_1_preact_material_components_LayoutGrid__["a" /* default */],
	null,
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
		__WEBPACK_IMPORTED_MODULE_1_preact_material_components_LayoutGrid__["a" /* default */].Inner,
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
	)
);

var _ref16 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	'div',
	{ className: 'mdc-typography--body' },
	'Grid with reordered items'
);

var _ref17 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	__WEBPACK_IMPORTED_MODULE_1_preact_material_components_LayoutGrid__["a" /* default */],
	null,
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
		__WEBPACK_IMPORTED_MODULE_1_preact_material_components_LayoutGrid__["a" /* default */].Inner,
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

var LayoutGridPage = function (_Component) {
	_inherits(LayoutGridPage, _Component);

	function LayoutGridPage() {
		_classCallCheck(this, LayoutGridPage);

		var _this = _possibleConstructorReturn(this, _Component.call(this));

		_this.propsTable = [{
			component: 'LayoutGrid',
			props: []
		}, {
			component: 'LayoutGrid.Inner',
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

	LayoutGridPage.prototype.render = function render() {
		return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
			'div',
			{ className: 'page-layout-grid' },
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_2__components_component_table__["a" /* default */], { data: this.propsTable }),
			_ref,
			_ref2,
			_ref3,
			_ref4,
			_ref5,
			_ref6,
			_ref7,
			_ref8,
			_ref9,
			_ref10,
			_ref11,
			_ref12,
			_ref13,
			_ref14,
			_ref15,
			_ref16,
			_ref17
		);
	};

	return LayoutGridPage;
}(__WEBPACK_IMPORTED_MODULE_0_preact__["Component"]);



/***/ }),

/***/ "aliM":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createFocusTrapInstance;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_focus_trap__ = __webpack_require__("ySUw");
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

/***/ "bEsy":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cssClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return strings; });
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

var strings = {
  SELECTED_EVENT: 'MDCTab:selected'
};

/***/ }),

/***/ "bKgJ":
/***/ (function(module, exports) {

module.exports = "import {h, Component} from 'preact';\r\nimport Fab from 'preact-material-components/Fab';\r\nimport 'preact-material-components/Fab/style.css';\r\n\r\nexport default class FabPage extends Component {\r\n  render(){\r\n    return (\r\n      <div>\r\n        <Fab>\r\n          <Icon>favorite_border</Icon>\r\n        </Fab>\r\n        <Fab ripple={true}>\r\n          <Icon>favorite_border</Icon>\r\n        </Fab>\r\n        <Fab mini={true}>\r\n          <Icon>favorite_border</Icon>\r\n        </Fab>\r\n      </div>\r\n    );\r\n  }\r\n}\r\n"

/***/ }),

/***/ "byUl":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cssClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return strings; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__slidable__ = __webpack_require__("VqTd");
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
  ANIMATING: 'mdc-temporary-drawer--animating',
  SCROLL_LOCK: 'mdc-drawer-scroll-lock'
};

var strings = {
  DRAWER_SELECTOR: '.mdc-temporary-drawer__drawer',
  OPACITY_VAR_NAME: '--mdc-temporary-drawer-opacity',
  FOCUSABLE_ELEMENTS: __WEBPACK_IMPORTED_MODULE_0__slidable__["b" /* FOCUSABLE_ELEMENTS */],
  OPEN_EVENT: 'MDCTemporaryDrawer:open',
  CLOSE_EVENT: 'MDCTemporaryDrawer:close'
};

/***/ }),

/***/ "dSNL":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__foundation__ = __webpack_require__("uJAj");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__component__ = __webpack_require__("EQDb");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__selection_control__ = __webpack_require__("XCG+");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__foundation__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__component__["a"]; });
/* unused harmony reexport SelectionControlState */
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

/***/ "ewDS":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "fG5c":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "fWpu":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"page-switch":"page-switch__3bGTN"};

/***/ }),

/***/ "frf2":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "g/3n":
/***/ (function(module, exports) {

module.exports = "import {Button, Fab, Snackbar} from 'preact-material-component';"

/***/ }),

/***/ "g9TK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return cssClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return strings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return numbers; });
/**
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var cssClasses = {
  ACTIVE: 'mdc-slider--active',
  DISABLED: 'mdc-slider--disabled',
  DISCRETE: 'mdc-slider--discrete',
  FOCUS: 'mdc-slider--focus',
  IN_TRANSIT: 'mdc-slider--in-transit',
  OFF: 'mdc-slider--off',
  IS_DISCRETE: 'mdc-slider--discrete',
  HAS_TRACK_MARKER: 'mdc-slider--display-markers'
};

var strings = {
  TRACK_SELECTOR: '.mdc-slider__track',
  TRACK_MARKER_CONTAINER_SELECTOR: '.mdc-slider__track-marker-container',
  LAST_TRACK_MARKER_SELECTOR: '.mdc-slider__track-marker:last-child',
  THUMB_CONTAINER_SELECTOR: '.mdc-slider__thumb-container',
  PIN_VALUE_MARKER_SELECTOR: '.mdc-slider__pin-value-marker',
  ARIA_VALUEMIN: 'aria-valuemin',
  ARIA_VALUEMAX: 'aria-valuemax',
  ARIA_VALUENOW: 'aria-valuenow',
  ARIA_DISABLED: 'aria-disabled',
  STEP_DATA_ATTR: 'data-step',
  CHANGE_EVENT: 'MDCSlider:change',
  INPUT_EVENT: 'MDCSlider:input'
};

var numbers = {
  PAGE_FACTOR: 4
};

/***/ }),

/***/ "gLY3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MDCTabBarFoundation; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base_foundation__ = __webpack_require__("uJAj");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_animation__ = __webpack_require__("5qFY");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__("1xp1");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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
      return __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */];
    }
  }, {
    key: 'strings',
    get: function get() {
      return __WEBPACK_IMPORTED_MODULE_2__constants__["b" /* strings */];
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

    var _this = _possibleConstructorReturn(this, _MDCFoundation.call(this, _extends(MDCTabBarFoundation.defaultAdapter, adapter)));

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

  MDCTabBarFoundation.prototype.init = function init() {
    this.adapter_.addClass(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */].UPGRADED);
    this.adapter_.bindOnMDCTabSelectedEvent();
    this.adapter_.registerResizeHandler(this.resizeHandler_);
    var activeTabIndex = this.findActiveTabIndex_();
    if (activeTabIndex >= 0) {
      this.activeTabIndex_ = activeTabIndex;
    }
    this.layout();
  };

  MDCTabBarFoundation.prototype.destroy = function destroy() {
    this.adapter_.removeClass(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */].UPGRADED);
    this.adapter_.unbindOnMDCTabSelectedEvent();
    this.adapter_.deregisterResizeHandler(this.resizeHandler_);
  };

  MDCTabBarFoundation.prototype.layoutInternal_ = function layoutInternal_() {
    var _this2 = this;

    this.forEachTabIndex_(function (index) {
      return _this2.adapter_.measureTabAtIndex(index);
    });
    this.computedWidth_ = this.adapter_.getOffsetWidth();
    this.layoutIndicator_();
  };

  MDCTabBarFoundation.prototype.layoutIndicator_ = function layoutIndicator_() {
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
  };

  MDCTabBarFoundation.prototype.findActiveTabIndex_ = function findActiveTabIndex_() {
    var _this3 = this;

    var activeTabIndex = -1;
    this.forEachTabIndex_(function (index) {
      if (_this3.adapter_.isTabActiveAtIndex(index)) {
        activeTabIndex = index;
        return true;
      }
    });
    return activeTabIndex;
  };

  MDCTabBarFoundation.prototype.forEachTabIndex_ = function forEachTabIndex_(iterator) {
    var numTabs = this.adapter_.getNumberOfTabs();
    for (var index = 0; index < numTabs; index++) {
      var shouldBreak = iterator(index);
      if (shouldBreak) {
        break;
      }
    }
  };

  MDCTabBarFoundation.prototype.layout = function layout() {
    var _this4 = this;

    if (this.layoutFrame_) {
      cancelAnimationFrame(this.layoutFrame_);
    }

    this.layoutFrame_ = requestAnimationFrame(function () {
      _this4.layoutInternal_();
      _this4.layoutFrame_ = 0;
    });
  };

  MDCTabBarFoundation.prototype.switchToTabAtIndex = function switchToTabAtIndex(index, shouldNotify) {
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
  };

  MDCTabBarFoundation.prototype.getActiveTabIndex = function getActiveTabIndex() {
    return this.findActiveTabIndex_();
  };

  return MDCTabBarFoundation;
}(__WEBPACK_IMPORTED_MODULE_0__material_base_foundation__["a" /* default */]);



/***/ }),

/***/ "gT5u":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "gbHP":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LinearProgress; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__("KM04");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__MaterialComponent__ = __webpack_require__("lhA9");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_linear_progress__ = __webpack_require__("3fZX");
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
 * @prop indeterminate = false
 * @prop reversed = false
 * @prop accent = false
 */

var LinearProgress = function (_MaterialComponent) {
  _inherits(LinearProgress, _MaterialComponent);

  function LinearProgress() {
    _classCallCheck(this, LinearProgress);

    var _this = _possibleConstructorReturn(this, _MaterialComponent.call(this));

    _this.componentName = "linear-progress";
    _this._mdcProps = ["indeterminate", "reversed", "accent"];
    return _this;
  }

  LinearProgress.prototype.componentDidMount = function componentDidMount() {
    this.MDComponent = new __WEBPACK_IMPORTED_MODULE_2__material_linear_progress__["a" /* MDCLinearProgress */](this.control);
  };

  LinearProgress.prototype.componentWillUnmount = function componentWillUnmount() {
    this.MDComponent.destroy && this.MDComponent.destroy();
  };

  LinearProgress.prototype.materialDom = function materialDom(props) {
    var _this2 = this;

    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("div", _extends({
      role: "progressbar"
    }, props, {
      ref: function ref(control) {
        return _this2.control = control;
      }
    }), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("div", { className: "mdc-linear-progress__buffering-dots" }), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("div", { className: "mdc-linear-progress__buffer" }), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("div", { className: "mdc-linear-progress__bar mdc-linear-progress__primary-bar" }, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("span", { className: "mdc-linear-progress__bar-inner" })), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("div", { className: "mdc-linear-progress__bar mdc-linear-progress__secondary-bar" }, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("span", { className: "mdc-linear-progress__bar-inner" })));
  };

  return LinearProgress;
}(__WEBPACK_IMPORTED_MODULE_1__MaterialComponent__["a" /* default */]);



/***/ }),

/***/ "giHy":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cssClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return strings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return numbers; });
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
  FIXED: 'mdc-toolbar--fixed',
  FIXED_LASTROW: 'mdc-toolbar--fixed-lastrow-only',
  FIXED_AT_LAST_ROW: 'mdc-toolbar--fixed-at-last-row',
  TOOLBAR_ROW_FLEXIBLE: 'mdc-toolbar--flexible',
  FLEXIBLE_DEFAULT_BEHAVIOR: 'mdc-toolbar--flexible-default-behavior',
  FLEXIBLE_MAX: 'mdc-toolbar--flexible-space-maximized',
  FLEXIBLE_MIN: 'mdc-toolbar--flexible-space-minimized'
};

var strings = {
  TITLE_SELECTOR: '.mdc-toolbar__title',
  FIRST_ROW_SELECTOR: '.mdc-toolbar__row:first-child',
  CHANGE_EVENT: 'MDCToolbar:change'
};

var numbers = {
  MAX_TITLE_SIZE: 2.125,
  MIN_TITLE_SIZE: 1.25,
  TOOLBAR_ROW_HEIGHT: 64,
  TOOLBAR_ROW_MOBILE_HEIGHT: 56,
  TOOLBAR_MOBILE_BREAKPOINT: 600
};

/***/ }),

/***/ "gmnH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base_selection_control__ = __webpack_require__("XCG+");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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

/* eslint-disable no-unused-vars */


/* eslint no-unused-vars: [2, {"args": "none"}] */

/**
 * Adapter for MDC Checkbox. Provides an interface for managing
 * - classes
 * - dom
 * - event handlers
 *
 * Additionally, provides type information for the adapter to the Closure
 * compiler.
 *
 * Implement this adapter for your framework of choice to delegate updates to
 * the component in your framework of choice. See architecture documentation
 * for more details.
 * https://github.com/material-components/material-components-web/blob/master/docs/architecture.md
 *
 * @record
 */

var MDCCheckboxAdapter = function () {
  function MDCCheckboxAdapter() {
    _classCallCheck(this, MDCCheckboxAdapter);
  }

  /** @param {string} className */
  MDCCheckboxAdapter.prototype.addClass = function addClass(className) {};

  /** @param {string} className */


  MDCCheckboxAdapter.prototype.removeClass = function removeClass(className) {};

  /** @param {!EventListener} handler */


  MDCCheckboxAdapter.prototype.registerAnimationEndHandler = function registerAnimationEndHandler(handler) {};

  /** @param {!EventListener} handler */


  MDCCheckboxAdapter.prototype.deregisterAnimationEndHandler = function deregisterAnimationEndHandler(handler) {};

  /** @param {!EventListener} handler */


  MDCCheckboxAdapter.prototype.registerChangeHandler = function registerChangeHandler(handler) {};

  /** @param {!EventListener} handler */


  MDCCheckboxAdapter.prototype.deregisterChangeHandler = function deregisterChangeHandler(handler) {};

  /** @return {!SelectionControlState} */


  MDCCheckboxAdapter.prototype.getNativeControl = function getNativeControl() {};

  MDCCheckboxAdapter.prototype.forceLayout = function forceLayout() {};

  /** @return {boolean} */


  MDCCheckboxAdapter.prototype.isAttachedToDOM = function isAttachedToDOM() {};

  return MDCCheckboxAdapter;
}();



/***/ }),

/***/ "iDKb":
/***/ (function(module, exports) {

module.exports = "import {h, Component} from 'preact';\r\nimport Menu from 'preact-material-components/Menu';\r\nimport Button from 'preact-material-components/Button';\r\nimport 'preact-material-components/List/style.css';\r\nimport 'preact-material-components/Menu/style.css';\r\nimport 'preact-material-components/Button/style.css';\r\n\r\nexport default class MenuPage extends Component {\r\n  render(){\r\n    return (\r\n      <div>\r\n        <Menu.Anchor>\r\n          <Button\r\n            onClick={e => {\r\n              this.menu.MDComponent.open = true;\r\n            }}\r\n          >\r\n            Click for menu\r\n          </Button>\r\n          <Menu\r\n            ref={menu => {\r\n              this.menu = menu;\r\n            }}\r\n          >\r\n            <Menu.Item>Hello1</Menu.Item>\r\n            <Menu.Item>Hello2</Menu.Item>\r\n            <Menu.Item>Hello3</Menu.Item>\r\n          </Menu>\r\n        </Menu.Anchor>\r\n      </div>\r\n    );\r\n  }\r\n}\r\n"

/***/ }),

/***/ "iQPn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToolbarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__("KM04");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_preact_material_components_Toolbar__ = __webpack_require__("uOgf");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_component_table__ = __webpack_require__("B/9r");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_code_block__ = __webpack_require__("F4jb");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__style__ = __webpack_require__("LQ60");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sample_txt__ = __webpack_require__("Fj5d");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sample_txt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__sample_txt__);


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var _ref = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	'div',
	{ className: 'mdc-typography--display1' },
	'Sample code '
);

var _ref2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	__WEBPACK_IMPORTED_MODULE_3__components_code_block__["a" /* default */],
	null,
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
		'code',
		{ 'class': 'lang-js' },
		__WEBPACK_IMPORTED_MODULE_5__sample_txt___default.a
	)
);

var _ref3 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	'div',
	{ className: 'mdc-typography--display1' },
	'Original documentation'
);

var _ref4 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
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
);

var _ref5 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	'div',
	{ className: 'mdc-typography--display1' },
	'Demo '
);

var _ref6 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	'div',
	{ className: 'mdc-typography--title' },
	'Default '
);

var _ref7 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
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
				{ menu: true },
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
				__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Toolbar__["a" /* default */].Icon,
				null,
				'more_vert'
			)
		)
	)
);

var ToolbarPage = function (_Component) {
	_inherits(ToolbarPage, _Component);

	function ToolbarPage() {
		_classCallCheck(this, ToolbarPage);

		var _this = _possibleConstructorReturn(this, _Component.call(this));

		_this.propsTable = [{
			component: 'Toolbar',
			props: [{
				name: 'fixed',
				description: 'Makes toolbar fixed on top and have persistent elevation'
			}, {
				name: 'fixed-lastrow-only',
				description: 'Makes only last row of fixed toolbar anchored on top'
			}, {
				name: 'waterfall',
				description: 'Removes fixed toolbar persistent elevation and makes it to gain elevation when a user begins to scroll down the page'
			}, {
				name: 'flexible',
				description: 'Makes toolbar first row has flexible space'
			}, {
				name: 'flexible-default-behavior',
				description: 'Further defines the background and title movement behavior'
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
			}, {
				name: 'shrink-to-fit',
				description: 'Makes section takes the width of its content'
			}]
		}, {
			component: 'Toolbar.Icon',
			props: [{
				name: 'menu',
				description: 'Adds additional padding, intended for the left-most icon'
			}]
		}, {
			component: 'Toolbar.Title',
			props: []
		}];
		return _this;
	}

	ToolbarPage.prototype.render = function render() {
		return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
			'div',
			{ className: 'page-toolbar' },
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_2__components_component_table__["a" /* default */], { data: this.propsTable }),
			_ref,
			_ref2,
			_ref3,
			_ref4,
			_ref5,
			_ref6,
			_ref7
		);
	};

	return ToolbarPage;
}(__WEBPACK_IMPORTED_MODULE_0_preact__["Component"]);



/***/ }),

/***/ "iRQC":
/***/ (function(module, exports) {

module.exports = "import {h, Component} from 'preact';\r\nimport Select from 'preact-material-components/Select';\r\nimport 'preact-material-components/List/style.css';\r\nimport 'preact-material-components/Menu/style.css';\r\nimport 'preact-material-components/Select/style.css';\r\n\r\nexport default class SelectPage extends Component {\r\n  render(){\r\n    return (\r\n      <div>\r\n        <Select hintText=\"Select an option\"\r\n          ref={presel=>{this.presel = presel;}}\r\n          selectedIndex={this.state.chosenIndex}\r\n          onChange={(e)=>{\r\n            this.setState({\r\n              chosenIndex: e.selectedIndex\r\n            });\r\n            //selected option\r\n            console.log(e.selectedOption);\r\n          }}>\r\n            <Select.Item>opt1</Select.Item>\r\n            <Select.Item>opt2</Select.Item>\r\n            <Select.Item>opt3</Select.Item>\r\n            <Select.Item>opt4</Select.Item>\r\n        </Select>\r\n      </div>\r\n    );\r\n  }\r\n}\r\n"

/***/ }),

/***/ "jGKv":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Fab; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__("KM04");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__MaterialComponent__ = __webpack_require__("lhA9");
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

    var _this = _possibleConstructorReturn(this, _MaterialComponent.call(this));

    _this.componentName = "fab";
    _this._mdcProps = ["mini", "plain"];
    return _this;
  }

  Fab.prototype.componentDidMount = function componentDidMount() {
    _MaterialComponent.prototype.attachRipple.call(this);
  };

  Fab.prototype.materialDom = function materialDom(props) {
    var _this2 = this;

    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("button", _extends({}, props, { ref: function ref(control) {
        return _this2.control = control;
      } }), props.children);
  };

  return Fab;
}(__WEBPACK_IMPORTED_MODULE_1__MaterialComponent__["a" /* default */]);



/***/ }),

/***/ "jT9V":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__("KM04");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_preact_material_components_Tabs__ = __webpack_require__("423E");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_preact_material_components_Icon__ = __webpack_require__("MeGi");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_component_table__ = __webpack_require__("B/9r");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_code_block__ = __webpack_require__("F4jb");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sample_txt__ = __webpack_require__("9xBA");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sample_txt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__sample_txt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__scroller_sample_txt__ = __webpack_require__("9gb+");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__scroller_sample_txt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__scroller_sample_txt__);


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var _ref = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	'div',
	{ className: 'mdc-typography--display1' },
	'Sample code '
);

var _ref2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	__WEBPACK_IMPORTED_MODULE_4__components_code_block__["a" /* default */],
	null,
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
		'code',
		{ 'class': 'lang-js' },
		__WEBPACK_IMPORTED_MODULE_5__sample_txt___default.a
	)
);

var _ref3 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	'div',
	{ className: 'mdc-typography--display1' },
	'Scrollable Tabs Sample code '
);

var _ref4 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	__WEBPACK_IMPORTED_MODULE_4__components_code_block__["a" /* default */],
	null,
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
		'code',
		{ 'class': 'lang-js' },
		__WEBPACK_IMPORTED_MODULE_6__scroller_sample_txt___default.a
	)
);

var _ref5 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	'div',
	{ className: 'mdc-typography--display1' },
	'Original documentation'
);

var _ref6 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
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
);

var _ref7 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	'div',
	{ className: 'mdc-typography--display1' },
	'Demo '
);

var _ref8 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	'div',
	{ className: 'mdc-typography--title' },
	'Default '
);

var _ref9 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
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
);

var _ref10 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	'div',
	{ className: 'mdc-typography--title' },
	'With indicator accent '
);

var _ref11 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
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
);

var _ref12 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	'div',
	{ className: 'mdc-typography--title' },
	'Icons tabs bar '
);

var _ref13 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
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
);

var _ref14 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	'div',
	{ className: 'mdc-typography--title' },
	'Icons with test tabs bar '
);

var _ref15 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
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
		__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
			__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Tabs__["a" /* default */].TabIconLabel,
			null,
			'Heart'
		)
	),
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
		__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Tabs__["a" /* default */].Tab,
		{ active: true },
		__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
			__WEBPACK_IMPORTED_MODULE_2_preact_material_components_Icon__["a" /* default */],
			null,
			'done'
		),
		__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
			__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Tabs__["a" /* default */].TabIconLabel,
			null,
			'Done'
		)
	),
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
		__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Tabs__["a" /* default */].Tab,
		null,
		__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
			__WEBPACK_IMPORTED_MODULE_2_preact_material_components_Icon__["a" /* default */],
			null,
			'info'
		),
		__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
			__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Tabs__["a" /* default */].TabIconLabel,
			null,
			'Info'
		)
	)
);

var _ref16 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	'div',
	{ className: 'mdc-typography--title' },
	'Scrollable tabs '
);

var _ref17 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Tabs__["a" /* default */].TabBarScroller,
	null,
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
		__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Tabs__["a" /* default */],
		{ scroller: true },
		__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
			__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Tabs__["a" /* default */].Tab,
			null,
			'tab1'
		),
		__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
			__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Tabs__["a" /* default */].Tab,
			{ active: true },
			'tab2'
		),
		__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
			__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Tabs__["a" /* default */].Tab,
			null,
			'tab3'
		),
		__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
			__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Tabs__["a" /* default */].Tab,
			null,
			'tab4'
		),
		__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
			__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Tabs__["a" /* default */].Tab,
			null,
			'tab5'
		),
		__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
			__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Tabs__["a" /* default */].Tab,
			null,
			'tab6'
		),
		__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
			__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Tabs__["a" /* default */].Tab,
			null,
			'tab7'
		),
		__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
			__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Tabs__["a" /* default */].Tab,
			null,
			'tab7'
		),
		__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
			__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Tabs__["a" /* default */].Tab,
			null,
			'tab9'
		),
		__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
			__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Tabs__["a" /* default */].Tab,
			null,
			'tab10'
		),
		__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
			__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Tabs__["a" /* default */].Tab,
			null,
			'tab11'
		)
	)
);

var TabsPage = function (_Component) {
	_inherits(TabsPage, _Component);

	function TabsPage() {
		_classCallCheck(this, TabsPage);

		var _this = _possibleConstructorReturn(this, _Component.call(this));

		_this.propsTable = [{
			component: 'Tabs',
			props: [{
				name: 'indicator-accent',
				description: 'Makes the indicator accented.'
			}, {
				name: 'icon-tab-bar',
				description: 'Makes the tab bar accomodate icons.'
			}, {
				name: 'icons-with-text',
				description: 'Makes the tab bar accomodate icons and label.'
			}, {
				name: 'scroller',
				description: 'Makes the tabs scrollable'
			}]
		}, {
			component: 'Tab',
			props: [{
				name: 'active',
				description: 'Makes the current tab active.'
			}]
		}];
		return _this;
	}

	TabsPage.prototype.render = function render() {
		return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
			'div',
			null,
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_3__components_component_table__["a" /* default */], { data: this.propsTable }),
			_ref,
			_ref2,
			_ref3,
			_ref4,
			_ref5,
			_ref6,
			_ref7,
			_ref8,
			_ref9,
			_ref10,
			_ref11,
			_ref12,
			_ref13,
			_ref14,
			_ref15,
			_ref16,
			_ref17
		);
	};

	return TabsPage;
}(__WEBPACK_IMPORTED_MODULE_0_preact__["Component"]);



/***/ }),

/***/ "jgLH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base_selection_control__ = __webpack_require__("XCG+");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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

/* eslint-disable no-unused-vars */


/* eslint no-unused-vars: [2, {"args": "none"}] */

/**
 * Adapter for MDC Radio. Provides an interface for managing
 * - classes
 * - dom
 *
 * Additionally, provides type information for the adapter to the Closure
 * compiler.
 *
 * Implement this adapter for your framework of choice to delegate updates to
 * the component in your framework of choice. See architecture documentation
 * for more details.
 * https://github.com/material-components/material-components-web/blob/master/docs/architecture.md
 *
 * @record
 */

var MDCRadioAdapter = function () {
  function MDCRadioAdapter() {
    _classCallCheck(this, MDCRadioAdapter);
  }

  /** @param {string} className */
  MDCRadioAdapter.prototype.addClass = function addClass(className) {};

  /** @param {string} className */


  MDCRadioAdapter.prototype.removeClass = function removeClass(className) {};

  /** @return {!SelectionControlState} */


  MDCRadioAdapter.prototype.getNativeControl = function getNativeControl() {};

  return MDCRadioAdapter;
}();



/***/ }),

/***/ "jhiW":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MDCToolbar; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base__ = __webpack_require__("dSNL");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__foundation__ = __webpack_require__("HCi5");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util__ = __webpack_require__("khVS");
/* unused harmony reexport MDCToolbarFoundation */
/* unused harmony reexport util */
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









var MDCToolbar = function (_MDCComponent) {
  _inherits(MDCToolbar, _MDCComponent);

  function MDCToolbar() {
    _classCallCheck(this, MDCToolbar);

    return _possibleConstructorReturn(this, _MDCComponent.apply(this, arguments));
  }

  MDCToolbar.attachTo = function attachTo(root) {
    return new MDCToolbar(root);
  };

  MDCToolbar.prototype.getDefaultFoundation = function getDefaultFoundation() {
    var _this2 = this;

    return new __WEBPACK_IMPORTED_MODULE_1__foundation__["a" /* default */]({
      hasClass: function hasClass(className) {
        return _this2.root_.classList.contains(className);
      },
      addClass: function addClass(className) {
        return _this2.root_.classList.add(className);
      },
      removeClass: function removeClass(className) {
        return _this2.root_.classList.remove(className);
      },
      registerScrollHandler: function registerScrollHandler(handler) {
        return window.addEventListener('scroll', handler, __WEBPACK_IMPORTED_MODULE_2__util__["a" /* applyPassive */]());
      },
      deregisterScrollHandler: function deregisterScrollHandler(handler) {
        return window.removeEventListener('scroll', handler, __WEBPACK_IMPORTED_MODULE_2__util__["a" /* applyPassive */]());
      },
      registerResizeHandler: function registerResizeHandler(handler) {
        return window.addEventListener('resize', handler);
      },
      deregisterResizeHandler: function deregisterResizeHandler(handler) {
        return window.removeEventListener('resize', handler);
      },
      getViewportWidth: function getViewportWidth() {
        return window.innerWidth;
      },
      getViewportScrollY: function getViewportScrollY() {
        return window.pageYOffset;
      },
      getOffsetHeight: function getOffsetHeight() {
        return _this2.root_.offsetHeight;
      },
      getFirstRowElementOffsetHeight: function getFirstRowElementOffsetHeight() {
        return _this2.firstRowElement_.offsetHeight;
      },
      notifyChange: function notifyChange(evtData) {
        return _this2.emit(__WEBPACK_IMPORTED_MODULE_1__foundation__["a" /* default */].strings.CHANGE_EVENT, evtData);
      },
      setStyle: function setStyle(property, value) {
        return _this2.root_.style.setProperty(property, value);
      },
      setStyleForTitleElement: function setStyleForTitleElement(property, value) {
        return _this2.titleElement_.style.setProperty(property, value);
      },
      setStyleForFlexibleRowElement: function setStyleForFlexibleRowElement(property, value) {
        return _this2.firstRowElement_.style.setProperty(property, value);
      },
      setStyleForFixedAdjustElement: function setStyleForFixedAdjustElement(property, value) {
        if (_this2.fixedAdjustElement) {
          _this2.fixedAdjustElement.style.setProperty(property, value);
        }
      }
    });
  };

  _createClass(MDCToolbar, [{
    key: 'firstRowElement_',
    get: function get() {
      return this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_1__foundation__["a" /* default */].strings.FIRST_ROW_SELECTOR);
    }
  }, {
    key: 'titleElement_',
    get: function get() {
      return this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_1__foundation__["a" /* default */].strings.TITLE_SELECTOR);
    }
  }, {
    key: 'fixedAdjustElement',
    set: function set(fixedAdjustElement) {
      this.fixedAdjustElement_ = fixedAdjustElement;
      this.foundation_.updateAdjustElementStyles();
    },
    get: function get() {
      return this.fixedAdjustElement_;
    }
  }]);

  return MDCToolbar;
}(__WEBPACK_IMPORTED_MODULE_0__material_base__["a" /* MDCComponent */]);

/***/ }),

/***/ "joOv":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = supportsCssVariables;
/* harmony export (immutable) */ __webpack_exports__["c"] = applyPassive;
/* harmony export (immutable) */ __webpack_exports__["a"] = getMatchesProperty;
/* harmony export (immutable) */ __webpack_exports__["d"] = getNormalizedEventCoords;
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
 * Stores result from supportsCssVariables to avoid redundant processing to detect CSS custom variable support.
 * @private {boolean|undefined}
 */
var supportsCssVariables_ = void 0;

/**
 * Stores result from applyPassive to avoid redundant processing to detect passive event listener support.
 * @private {boolean|undefined}
 */
var supportsPassive_ = void 0;

/**
 * @param {!Window} windowObj
 * @return {boolean}
 */
function detectEdgePseudoVarBug(windowObj) {
  // Detect versions of Edge with buggy var() support
  // See: https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/11495448/
  var document = windowObj.document;
  var className = 'test-edge-css-var';
  var styleNode = document.createElement('style');
  document.head.appendChild(styleNode);
  var sheet = styleNode.sheet;
  // Internet Explorer 11 requires indices to always be specified to insertRule
  sheet.insertRule(':root { --' + className + ': 1px solid #000; }', 0);
  sheet.insertRule('.' + className + ' { visibility: hidden; }', 1);
  sheet.insertRule('.' + className + '::before { border: var(--' + className + '); }', 2);
  var node = document.createElement('div');
  node.className = className;
  document.body.appendChild(node);
  // Bug exists if ::before style ends up propagating to the parent element
  var hasPseudoVarBug = windowObj.getComputedStyle(node).borderTopStyle === 'solid';
  node.remove();
  styleNode.remove();
  return hasPseudoVarBug;
}

/**
 * @param {!Window} windowObj
 * @param {boolean=} forceRefresh
 * @return {boolean|undefined}
 */
function supportsCssVariables(windowObj) {
  var forceRefresh = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  if (typeof supportsCssVariables_ === 'boolean' && !forceRefresh) {
    return supportsCssVariables_;
  }

  var supportsFunctionPresent = windowObj.CSS && typeof windowObj.CSS.supports === 'function';
  if (!supportsFunctionPresent) {
    return;
  }

  var explicitlySupportsCssVars = windowObj.CSS.supports('--css-vars', 'yes');
  // See: https://bugs.webkit.org/show_bug.cgi?id=154669
  // See: README section on Safari
  var weAreFeatureDetectingSafari10plus = windowObj.CSS.supports('(--css-vars: yes)') && windowObj.CSS.supports('color', '#00000000');

  if (explicitlySupportsCssVars || weAreFeatureDetectingSafari10plus) {
    supportsCssVariables_ = !detectEdgePseudoVarBug(windowObj);
  } else {
    supportsCssVariables_ = false;
  }
  return supportsCssVariables_;
}

//
/**
 * Determine whether the current browser supports passive event listeners, and if so, use them.
 * @param {!Window=} globalObj
 * @param {boolean=} forceRefresh
 * @return {boolean|{passive: boolean}}
 */
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

/**
 * @param {!Object} HTMLElementPrototype
 * @return {!Array<string>}
 */
function getMatchesProperty(HTMLElementPrototype) {
  return ['webkitMatchesSelector', 'msMatchesSelector', 'matches'].filter(function (p) {
    return p in HTMLElementPrototype;
  }).pop();
}

/**
 * @param {!Event} ev
 * @param {!{x: number, y: number}} pageOffset
 * @param {!ClientRect} clientRect
 * @return {!{x: number, y: number}}
 */
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

/***/ "jrKX":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return strings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return cssClasses; });
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
  LABEL_FLOAT_ABOVE: 'mdc-textfield__label--float-above',
  BOX: 'mdc-textfield--box'
};

/***/ }),

/***/ "jvS+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__("KM04");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_preact_material_components_Card__ = __webpack_require__("sJaT");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_component_table__ = __webpack_require__("B/9r");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_code_block__ = __webpack_require__("F4jb");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__style__ = __webpack_require__("ewDS");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sample_txt__ = __webpack_require__("tJYt");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sample_txt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__sample_txt__);


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var _ref = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	'div',
	{ className: 'mdc-typography--display1' },
	'Sample code'
);

var _ref2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	__WEBPACK_IMPORTED_MODULE_3__components_code_block__["a" /* default */],
	null,
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
		'code',
		{ 'class': 'lang-js' },
		__WEBPACK_IMPORTED_MODULE_5__sample_txt___default.a
	)
);

var _ref3 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	'div',
	{ className: 'mdc-typography--display1' },
	'Original documentation'
);

var _ref4 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
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
);

var _ref5 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	'div',
	{ className: 'mdc-typography--display1' },
	'Demo'
);

var _ref6 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
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
			'OKAY'
		)
	)
);

var _ref7 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
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
			'OKAY'
		)
	)
);

var _ref8 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Card__["a" /* default */],
	null,
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
		__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Card__["a" /* default */].HorizontalBlock,
		null,
		__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
			__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Card__["a" /* default */].Primary,
			null,
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
				__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Card__["a" /* default */].Title,
				{ large: true },
				'Hi'
			),
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
				__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Card__["a" /* default */].Subtitle,
				null,
				'Let me subtitle'
			)
		),
		__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Card__["a" /* default */].MediaItem, { src: 'favicon.png', x: '1dot5' })
	),
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
		__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Card__["a" /* default */].Actions,
		null,
		__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
			__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Card__["a" /* default */].Action,
			null,
			'OKAY'
		)
	)
);

var CardPage = function (_Component) {
	_inherits(CardPage, _Component);

	function CardPage() {
		_classCallCheck(this, CardPage);

		var _this = _possibleConstructorReturn(this, _Component.call(this));

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
			component: 'Card.MediaItem',
			props: [{
				name: 'x',
				value: '1dot5, 2, 3',
				description: 'Changes the size of the image'
			}]
		}, {
			component: 'Card.Title',
			props: [{
				name: 'large',
				description: 'This enlarges the title size'
			}]
		}, {
			component: 'Card.Subtitle',
			props: []
		}, {
			component: 'Card.HorizontalBlock',
			props: []
		}];
		return _this;
	}

	CardPage.prototype.render = function render() {
		return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
			'div',
			{ className: 'page-card' },
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_2__components_component_table__["a" /* default */], { data: this.propsTable }),
			_ref,
			_ref2,
			_ref3,
			_ref4,
			_ref5,
			_ref6,
			_ref7,
			_ref8
		);
	};

	return CardPage;
}(__WEBPACK_IMPORTED_MODULE_0_preact__["Component"]);



/***/ }),

/***/ "kNIq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cssClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return strings; });
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
  INDICATOR_FORWARD: 'mdc-tab-bar-scroller__indicator--forward',
  INDICATOR_BACK: 'mdc-tab-bar-scroller__indicator--back',
  INDICATOR_ENABLED: 'mdc-tab-bar-scroller__indicator--enabled',
  TAB: 'mdc-tab'
};

var strings = {
  FRAME_SELECTOR: '.mdc-tab-bar-scroller__scroll-frame',
  TABS_SELECTOR: '.mdc-tab-bar-scroller__scroll-frame__tabs',
  TAB_SELECTOR: '.mdc-tab',
  INDICATOR_FORWARD_SELECTOR: '.mdc-tab-bar-scroller__indicator--forward',
  INDICATOR_BACK_SELECTOR: '.mdc-tab-bar-scroller__indicator--back'
};

/***/ }),

/***/ "khVS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = applyPassive;
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

var supportsPassive_ = void 0;

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

/***/ }),

/***/ "lhA9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__("KM04");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_ripple__ = __webpack_require__("vkNc");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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
    var _this = _possibleConstructorReturn(this, _Component.call(this));

    _this._mdcProps = [];
    // This will again be used to add apt classname to the component
    _this.componentName = "";
    // The final class name given to the dom
    _this.classText = "";
    return _this;
  }

  MaterialComponent.prototype.attachRipple = function attachRipple() {
    if (this.props.ripple && this.control) {
      __WEBPACK_IMPORTED_MODULE_1__material_ripple__["a" /* MDCRipple */].attachTo(this.control);
    }
  };
  // Build the className


  MaterialComponent.prototype.buildClassName = function buildClassName(props) {
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
  };

  MaterialComponent.prototype.getClassName = function getClassName(element) {
    if (!element) {
      return "";
    }
    element.attributes = element.attributes || {};
    if (element.attributes.className) {
      return this.classText + " " + element.attributes.className;
    }
    return this.classText;
  };
  // Components must implement this method for their specific DOM structure


  MaterialComponent.prototype.materialDom = function materialDom(props) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("div", _extends({}, props), props.children);
  };

  MaterialComponent.prototype.render = function render() {
    this.buildClassName();
    // Fetch a VNode
    var element = this.materialDom(this.props);
    element.attributes = element.attributes || {};
    // Fix for className
    element.attributes.className = this.getClassName(element);
    // Clean this shit of proxy attributes
    this._mdcProps.forEach(function (prop) {
      delete element.attributes[prop];
    });
    return element;
  };

  return MaterialComponent;
}(__WEBPACK_IMPORTED_MODULE_0_preact__["Component"]);



/***/ }),

/***/ "lmrE":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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

/* eslint no-unused-vars: [2, {"args": "none"}] */

/**
 * Adapter for MDC Simple Menu. Provides an interface for managing
 * - classes
 * - dom
 * - focus
 * - position
 * - dimensions
 * - event handlers
 *
 * Additionally, provides type information for the adapter to the Closure
 * compiler.
 *
 * Implement this adapter for your framework of choice to delegate updates to
 * the component in your framework of choice. See architecture documentation
 * for more details.
 * https://github.com/material-components/material-components-web/blob/master/docs/architecture.md
 *
 * @record
 */
var MDCSimpleMenuAdapter = function () {
  function MDCSimpleMenuAdapter() {
    _classCallCheck(this, MDCSimpleMenuAdapter);
  }

  /** @param {string} className */
  MDCSimpleMenuAdapter.prototype.addClass = function addClass(className) {};

  /** @param {string} className */


  MDCSimpleMenuAdapter.prototype.removeClass = function removeClass(className) {};

  /**
   * @param {string} className
   * @return {boolean}
   */


  MDCSimpleMenuAdapter.prototype.hasClass = function hasClass(className) {};

  /** @return {boolean} */


  MDCSimpleMenuAdapter.prototype.hasNecessaryDom = function hasNecessaryDom() {};

  /**
   * @param {EventTarget} target
   * @param {string} attributeName
   * @return {string}
   */


  MDCSimpleMenuAdapter.prototype.getAttributeForEventTarget = function getAttributeForEventTarget(target, attributeName) {};

  /** @return {{ width: number, height: number }} */


  MDCSimpleMenuAdapter.prototype.getInnerDimensions = function getInnerDimensions() {};

  /** @return {boolean} */


  MDCSimpleMenuAdapter.prototype.hasAnchor = function hasAnchor() {};

  /** @return {{width: number, height: number, top: number, right: number, bottom: number, left: number}} */


  MDCSimpleMenuAdapter.prototype.getAnchorDimensions = function getAnchorDimensions() {};

  /** @return {{ width: number, height: number }} */


  MDCSimpleMenuAdapter.prototype.getWindowDimensions = function getWindowDimensions() {};

  /**
   * @param {number} x
   * @param {number} y
   */


  MDCSimpleMenuAdapter.prototype.setScale = function setScale(x, y) {};

  /**
   * @param {number} x
   * @param {number} y
   */


  MDCSimpleMenuAdapter.prototype.setInnerScale = function setInnerScale(x, y) {};

  /** @return {number} */


  MDCSimpleMenuAdapter.prototype.getNumberOfItems = function getNumberOfItems() {};

  /**
   * @param {string} type
   * @param {function(!Event)} handler
   */


  MDCSimpleMenuAdapter.prototype.registerInteractionHandler = function registerInteractionHandler(type, handler) {};

  /**
   * @param {string} type
   * @param {function(!Event)} handler
   */


  MDCSimpleMenuAdapter.prototype.deregisterInteractionHandler = function deregisterInteractionHandler(type, handler) {};

  /** @param {function(!Event)} handler */


  MDCSimpleMenuAdapter.prototype.registerBodyClickHandler = function registerBodyClickHandler(handler) {};

  /** @param {function(!Event)} handler */


  MDCSimpleMenuAdapter.prototype.deregisterBodyClickHandler = function deregisterBodyClickHandler(handler) {};

  /**
   * @param {number} index
   * @return {{top: number, height: number}}
   */


  MDCSimpleMenuAdapter.prototype.getYParamsForItemAtIndex = function getYParamsForItemAtIndex(index) {};

  /**
   * @param {number} index
   * @param {string|null} value
   */


  MDCSimpleMenuAdapter.prototype.setTransitionDelayForItemAtIndex = function setTransitionDelayForItemAtIndex(index, value) {};

  /**
   * @param {EventTarget} target
   * @return {number}
   */


  MDCSimpleMenuAdapter.prototype.getIndexForEventTarget = function getIndexForEventTarget(target) {};

  /** @param {{index: number}} evtData */


  MDCSimpleMenuAdapter.prototype.notifySelected = function notifySelected(evtData) {};

  MDCSimpleMenuAdapter.prototype.notifyCancel = function notifyCancel() {};

  MDCSimpleMenuAdapter.prototype.saveFocus = function saveFocus() {};

  MDCSimpleMenuAdapter.prototype.restoreFocus = function restoreFocus() {};

  /** @return {boolean} */


  MDCSimpleMenuAdapter.prototype.isFocused = function isFocused() {};

  MDCSimpleMenuAdapter.prototype.focus = function focus() {};

  /** @return {number} */


  MDCSimpleMenuAdapter.prototype.getFocusedItemIndex = function getFocusedItemIndex() /* number */{};

  /** @param {number} index */


  MDCSimpleMenuAdapter.prototype.focusItemAtIndex = function focusItemAtIndex(index) {};

  /** @return {boolean} */


  MDCSimpleMenuAdapter.prototype.isRtl = function isRtl() {};

  /** @param {string} origin */


  MDCSimpleMenuAdapter.prototype.setTransformOrigin = function setTransformOrigin(origin) {};

  /** @param {{
  *   top: (string|undefined),
  *   right: (string|undefined),
  *   bottom: (string|undefined),
  *   left: (string|undefined)
  * }} position */


  MDCSimpleMenuAdapter.prototype.setPosition = function setPosition(position) {};

  /** @return {number} */


  MDCSimpleMenuAdapter.prototype.getAccurateTime = function getAccurateTime() {};

  return MDCSimpleMenuAdapter;
}();



/***/ }),

/***/ "mnzM":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MDCCheckboxFoundation; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base_foundation__ = __webpack_require__("uJAj");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_base_selection_control__ = __webpack_require__("XCG+");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__adapter__ = __webpack_require__("gmnH");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants__ = __webpack_require__("Bd3S");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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


/* eslint-disable no-unused-vars */


/* eslint-enable no-unused-vars */


/** @const {!Array<string>} */
var CB_PROTO_PROPS = ['checked', 'indeterminate'];

/**
 * @extends {MDCFoundation<!MDCCheckboxAdapter>}
 */

var MDCCheckboxFoundation = function (_MDCFoundation) {
  _inherits(MDCCheckboxFoundation, _MDCFoundation);

  _createClass(MDCCheckboxFoundation, null, [{
    key: 'cssClasses',

    /** @return enum {cssClasses} */
    get: function get() {
      return __WEBPACK_IMPORTED_MODULE_3__constants__["a" /* cssClasses */];
    }

    /** @return enum {strings} */

  }, {
    key: 'strings',
    get: function get() {
      return __WEBPACK_IMPORTED_MODULE_3__constants__["b" /* strings */];
    }

    /** @return enum {numbers} */

  }, {
    key: 'numbers',
    get: function get() {
      return __WEBPACK_IMPORTED_MODULE_3__constants__["c" /* numbers */];
    }

    /** @return {!MDCCheckboxAdapter} */

  }, {
    key: 'defaultAdapter',
    get: function get() {
      return (/** @type {!MDCCheckboxAdapter} */{
          addClass: function addClass() /* className: string */{},
          removeClass: function removeClass() /* className: string */{},
          registerAnimationEndHandler: function registerAnimationEndHandler() /* handler: EventListener */{},
          deregisterAnimationEndHandler: function deregisterAnimationEndHandler() /* handler: EventListener */{},
          registerChangeHandler: function registerChangeHandler() /* handler: EventListener */{},
          deregisterChangeHandler: function deregisterChangeHandler() /* handler: EventListener */{},
          getNativeControl: function getNativeControl() /* !SelectionControlState */{},
          forceLayout: function forceLayout() {},
          isAttachedToDOM: function isAttachedToDOM() /* boolean */{}
        }
      );
    }
  }]);

  function MDCCheckboxFoundation(adapter) {
    _classCallCheck(this, MDCCheckboxFoundation);

    /** @private {string} */
    var _this = _possibleConstructorReturn(this, _MDCFoundation.call(this, _extends(MDCCheckboxFoundation.defaultAdapter, adapter)));

    _this.currentCheckState_ = __WEBPACK_IMPORTED_MODULE_3__constants__["b" /* strings */].TRANSITION_STATE_INIT;

    /** @private {string} */
    _this.currentAnimationClass_ = '';

    /** @private {number} */
    _this.animEndLatchTimer_ = 0;

    _this.animEndHandler_ = /** @private {!EventListener} */function () {
      clearTimeout(_this.animEndLatchTimer_);
      _this.animEndLatchTimer_ = setTimeout(function () {
        _this.adapter_.removeClass(_this.currentAnimationClass_);
        _this.adapter_.deregisterAnimationEndHandler(_this.animEndHandler_);
      }, __WEBPACK_IMPORTED_MODULE_3__constants__["c" /* numbers */].ANIM_END_LATCH_MS);
    };

    _this.changeHandler_ = /** @private {!EventListener} */function () {
      return _this.transitionCheckState_();
    };
    return _this;
  }

  MDCCheckboxFoundation.prototype.init = function init() {
    this.adapter_.addClass(__WEBPACK_IMPORTED_MODULE_3__constants__["a" /* cssClasses */].UPGRADED);
    this.adapter_.registerChangeHandler(this.changeHandler_);
    this.installPropertyChangeHooks_();
  };

  MDCCheckboxFoundation.prototype.destroy = function destroy() {
    this.adapter_.deregisterChangeHandler(this.changeHandler_);
    this.uninstallPropertyChangeHooks_();
  };

  /** @return {boolean} */


  MDCCheckboxFoundation.prototype.isChecked = function isChecked() {
    return this.getNativeControl_().checked;
  };

  /** @param {boolean} checked */


  MDCCheckboxFoundation.prototype.setChecked = function setChecked(checked) {
    this.getNativeControl_().checked = checked;
  };

  /** @return {boolean} */


  MDCCheckboxFoundation.prototype.isIndeterminate = function isIndeterminate() {
    return this.getNativeControl_().indeterminate;
  };

  /** @param {boolean} indeterminate */


  MDCCheckboxFoundation.prototype.setIndeterminate = function setIndeterminate(indeterminate) {
    this.getNativeControl_().indeterminate = indeterminate;
  };

  /** @return {boolean} */


  MDCCheckboxFoundation.prototype.isDisabled = function isDisabled() {
    return this.getNativeControl_().disabled;
  };

  /** @param {boolean} disabled */


  MDCCheckboxFoundation.prototype.setDisabled = function setDisabled(disabled) {
    this.getNativeControl_().disabled = disabled;
    if (disabled) {
      this.adapter_.addClass(__WEBPACK_IMPORTED_MODULE_3__constants__["a" /* cssClasses */].DISABLED);
    } else {
      this.adapter_.removeClass(__WEBPACK_IMPORTED_MODULE_3__constants__["a" /* cssClasses */].DISABLED);
    }
  };

  /** @return {?string} */


  MDCCheckboxFoundation.prototype.getValue = function getValue() {
    return this.getNativeControl_().value;
  };

  /** @param {?string} value */


  MDCCheckboxFoundation.prototype.setValue = function setValue(value) {
    this.getNativeControl_().value = value;
  };

  /** @private */


  MDCCheckboxFoundation.prototype.installPropertyChangeHooks_ = function installPropertyChangeHooks_() {
    var _this2 = this;

    var nativeCb = this.getNativeControl_();
    var cbProto = Object.getPrototypeOf(nativeCb);

    CB_PROTO_PROPS.forEach(function (controlState) {
      var desc = Object.getOwnPropertyDescriptor(cbProto, controlState);
      // We have to check for this descriptor, since some browsers (Safari) don't support its return.
      // See: https://bugs.webkit.org/show_bug.cgi?id=49739
      if (validDescriptor(desc)) {
        var nativeCbDesc = /** @type {!ObjectPropertyDescriptor} */{
          get: desc.get,
          set: function set(state) {
            desc.set.call(nativeCb, state);
            _this2.transitionCheckState_();
          },
          configurable: desc.configurable,
          enumerable: desc.enumerable
        };
        Object.defineProperty(nativeCb, controlState, nativeCbDesc);
      }
    });
  };

  /** @private */


  MDCCheckboxFoundation.prototype.uninstallPropertyChangeHooks_ = function uninstallPropertyChangeHooks_() {
    var nativeCb = this.getNativeControl_();
    var cbProto = Object.getPrototypeOf(nativeCb);

    CB_PROTO_PROPS.forEach(function (controlState) {
      var desc = /** @type {!ObjectPropertyDescriptor} */Object.getOwnPropertyDescriptor(cbProto, controlState);
      if (validDescriptor(desc)) {
        Object.defineProperty(nativeCb, controlState, desc);
      }
    });
  };

  /** @private */


  MDCCheckboxFoundation.prototype.transitionCheckState_ = function transitionCheckState_() {
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
  };

  /**
   * @param {!SelectionControlState} nativeCb
   * @return {string}
   * @private
   */


  MDCCheckboxFoundation.prototype.determineCheckState_ = function determineCheckState_(nativeCb) {
    var TRANSITION_STATE_INDETERMINATE = __WEBPACK_IMPORTED_MODULE_3__constants__["b" /* strings */].TRANSITION_STATE_INDETERMINATE,
        TRANSITION_STATE_CHECKED = __WEBPACK_IMPORTED_MODULE_3__constants__["b" /* strings */].TRANSITION_STATE_CHECKED,
        TRANSITION_STATE_UNCHECKED = __WEBPACK_IMPORTED_MODULE_3__constants__["b" /* strings */].TRANSITION_STATE_UNCHECKED;


    if (nativeCb.indeterminate) {
      return TRANSITION_STATE_INDETERMINATE;
    }
    return nativeCb.checked ? TRANSITION_STATE_CHECKED : TRANSITION_STATE_UNCHECKED;
  };

  /**
   * @param {string} oldState
   * @param {string} newState
   * @return {string}
   */


  MDCCheckboxFoundation.prototype.getTransitionAnimationClass_ = function getTransitionAnimationClass_(oldState, newState) {
    var TRANSITION_STATE_INIT = __WEBPACK_IMPORTED_MODULE_3__constants__["b" /* strings */].TRANSITION_STATE_INIT,
        TRANSITION_STATE_CHECKED = __WEBPACK_IMPORTED_MODULE_3__constants__["b" /* strings */].TRANSITION_STATE_CHECKED,
        TRANSITION_STATE_UNCHECKED = __WEBPACK_IMPORTED_MODULE_3__constants__["b" /* strings */].TRANSITION_STATE_UNCHECKED;
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
  };

  /**
   * @return {!SelectionControlState}
   * @private
   */


  MDCCheckboxFoundation.prototype.getNativeControl_ = function getNativeControl_() {
    return this.adapter_.getNativeControl() || {
      checked: false,
      indeterminate: false,
      disabled: false,
      value: null
    };
  };

  return MDCCheckboxFoundation;
}(__WEBPACK_IMPORTED_MODULE_0__material_base_foundation__["a" /* default */]);

/**
 * @param {ObjectPropertyDescriptor|undefined} inputPropDesc
 * @return {boolean}
 */



function validDescriptor(inputPropDesc) {
  return !!inputPropDesc && typeof inputPropDesc.set === 'function';
}

/***/ }),

/***/ "nVyQ":
/***/ (function(module, exports) {

module.exports = "import {h, Component} from 'preact';\r\nimport Checkbox from 'preact-material-components/Checkbox';\r\nimport FormField from 'preact-material-components/FormField';\r\nimport 'preact-material-components/Checkbox/style.css';\r\n\r\nexport default class CheckboxPage extends Component {\r\n  render(){\r\n    return (\r\n      <FormField>\r\n        <Checkbox id=\"basic-checkbox-label\" ref={cb=>{this.cb=cb;}}/>\r\n        <label for=\"basic-checkbox\" id=\"basic-checkbox-label\">This is my checkbox</label>\r\n      </FormField>\r\n    );\r\n  }\r\n}\r\n"

/***/ }),

/***/ "nXW8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MDCSnackbarFoundation; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base__ = __webpack_require__("dSNL");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__("U61V");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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
        setActionAriaHidden: function setActionAriaHidden() {},
        unsetActionAriaHidden: function unsetActionAriaHidden() {},
        setActionText: function setActionText() /* actionText: string */{},
        setMessageText: function setMessageText() /* message: string */{},
        setFocus: function setFocus() {},
        visibilityIsHidden: function visibilityIsHidden() {
          return (/* boolean */false
          );
        },
        registerCapturedBlurHandler: function registerCapturedBlurHandler() /* handler: EventListener */{},
        deregisterCapturedBlurHandler: function deregisterCapturedBlurHandler() /* handler: EventListener */{},
        registerVisibilityChangeHandler: function registerVisibilityChangeHandler() /* handler: EventListener */{},
        deregisterVisibilityChangeHandler: function deregisterVisibilityChangeHandler() /* handler: EventListener */{},
        registerCapturedInteractionHandler: function registerCapturedInteractionHandler() /* evtType: string, handler: EventListener */{},
        deregisterCapturedInteractionHandler: function deregisterCapturedInteractionHandler() /* evtType: string, handler: EventListener */{},
        registerActionClickHandler: function registerActionClickHandler() /* handler: EventListener */{},
        deregisterActionClickHandler: function deregisterActionClickHandler() /* handler: EventListener */{},
        registerTransitionEndHandler: function registerTransitionEndHandler() /* handler: EventListener */{},
        deregisterTransitionEndHandler: function deregisterTransitionEndHandler() /* handler: EventListener */{}
      };
    }
  }]);

  function MDCSnackbarFoundation(adapter) {
    _classCallCheck(this, MDCSnackbarFoundation);

    var _this = _possibleConstructorReturn(this, _MDCFoundation.call(this, _extends(MDCSnackbarFoundation.defaultAdapter, adapter)));

    _this.active_ = false;
    _this.actionWasClicked_ = false;
    _this.dismissOnAction_ = true;
    _this.firstFocus_ = true;
    _this.pointerDownRecognized_ = false;
    _this.snackbarHasFocus_ = false;
    _this.snackbarData_ = null;
    _this.queue_ = [];
    _this.actionClickHandler_ = function () {
      _this.actionWasClicked_ = true;
      _this.invokeAction_();
    };
    _this.visibilitychangeHandler_ = function () {
      clearTimeout(_this.timeoutId_);
      _this.snackbarHasFocus_ = true;

      if (!_this.adapter_.visibilityIsHidden()) {
        setTimeout(_this.cleanup_.bind(_this), _this.snackbarData_.timeout || __WEBPACK_IMPORTED_MODULE_1__constants__["c" /* numbers */].MESSAGE_TIMEOUT);
      }
    };
    _this.interactionHandler_ = function (evt) {
      if (evt.type == 'touchstart' || evt.type == 'mousedown') {
        _this.pointerDownRecognized_ = true;
      }
      _this.handlePossibleTabKeyboardFocus_(evt);

      if (evt.type == 'focus') {
        _this.pointerDownRecognized_ = false;
      }
    };
    _this.blurHandler_ = function () {
      clearTimeout(_this.timeoutId_);
      _this.snackbarHasFocus_ = false;
      _this.timeoutId_ = setTimeout(_this.cleanup_.bind(_this), _this.snackbarData_.timeout || __WEBPACK_IMPORTED_MODULE_1__constants__["c" /* numbers */].MESSAGE_TIMEOUT);
    };
    return _this;
  }

  MDCSnackbarFoundation.prototype.init = function init() {
    this.adapter_.registerActionClickHandler(this.actionClickHandler_);
    this.adapter_.setAriaHidden();
    this.adapter_.setActionAriaHidden();
  };

  MDCSnackbarFoundation.prototype.destroy = function destroy() {
    var _this2 = this;

    this.adapter_.deregisterActionClickHandler(this.actionClickHandler_);
    this.adapter_.deregisterCapturedBlurHandler(this.blurHandler_);
    this.adapter_.deregisterVisibilityChangeHandler(this.visibilitychangeHandler_);
    ['touchstart', 'mousedown', 'focus'].forEach(function (evtType) {
      _this2.adapter_.deregisterCapturedInteractionHandler(evtType, _this2.interactionHandler_);
    });
  };

  MDCSnackbarFoundation.prototype.dismissesOnAction = function dismissesOnAction() {
    return this.dismissOnAction_;
  };

  MDCSnackbarFoundation.prototype.setDismissOnAction = function setDismissOnAction(dismissOnAction) {
    this.dismissOnAction_ = !!dismissOnAction;
  };

  MDCSnackbarFoundation.prototype.show = function show(data) {
    var _this3 = this;

    clearTimeout(this.timeoutId_);
    this.snackbarData_ = data;
    this.firstFocus_ = true;
    this.adapter_.registerVisibilityChangeHandler(this.visibilitychangeHandler_);
    this.adapter_.registerCapturedBlurHandler(this.blurHandler_);
    ['touchstart', 'mousedown', 'focus'].forEach(function (evtType) {
      _this3.adapter_.registerCapturedInteractionHandler(evtType, _this3.interactionHandler_);
    });

    if (!this.snackbarData_) {
      throw new Error('Please provide a data object with at least a message to display.');
    }
    if (!this.snackbarData_.message) {
      throw new Error('Please provide a message to be displayed.');
    }
    if (this.snackbarData_.actionHandler && !this.snackbarData_.actionText) {
      throw new Error('Please provide action text with the handler.');
    }
    if (this.active) {
      this.queue_.push(this.snackbarData_);
    }

    var ACTIVE = __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* cssClasses */].ACTIVE,
        MULTILINE = __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* cssClasses */].MULTILINE,
        ACTION_ON_BOTTOM = __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* cssClasses */].ACTION_ON_BOTTOM;


    this.adapter_.setMessageText(this.snackbarData_.message);

    if (this.snackbarData_.multiline) {
      this.adapter_.addClass(MULTILINE);
      if (this.snackbarData_.actionOnBottom) {
        this.adapter_.addClass(ACTION_ON_BOTTOM);
      }
    }

    if (this.snackbarData_.actionHandler) {
      this.adapter_.setActionText(this.snackbarData_.actionText);
      this.actionHandler_ = this.snackbarData_.actionHandler;
      this.setActionHidden_(false);
    } else {
      this.setActionHidden_(true);
      this.actionHandler_ = null;
      this.adapter_.setActionText(null);
    }

    this.active_ = true;
    this.adapter_.addClass(ACTIVE);
    this.adapter_.unsetAriaHidden();

    this.timeoutId_ = setTimeout(this.cleanup_.bind(this), this.snackbarData_.timeout || __WEBPACK_IMPORTED_MODULE_1__constants__["c" /* numbers */].MESSAGE_TIMEOUT);
  };

  MDCSnackbarFoundation.prototype.handlePossibleTabKeyboardFocus_ = function handlePossibleTabKeyboardFocus_() {
    var hijackFocus = this.firstFocus_ && !this.pointerDownRecognized_;

    if (hijackFocus) {
      this.setFocusOnAction_();
    }

    this.firstFocus_ = false;
  };

  MDCSnackbarFoundation.prototype.setFocusOnAction_ = function setFocusOnAction_() {
    this.adapter_.setFocus();
    this.snackbarHasFocus_ = true;
    this.firstFocus_ = false;
  };

  MDCSnackbarFoundation.prototype.invokeAction_ = function invokeAction_() {
    try {
      if (!this.actionHandler_) {
        return;
      }

      this.actionHandler_();
    } finally {
      if (this.dismissOnAction_) {
        this.cleanup_();
      }
    }
  };

  MDCSnackbarFoundation.prototype.cleanup_ = function cleanup_() {
    var _this4 = this;

    var allowDismissal = !this.snackbarHasFocus_ || this.actionWasClicked_;

    if (allowDismissal) {
      var ACTIVE = __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* cssClasses */].ACTIVE,
          MULTILINE = __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* cssClasses */].MULTILINE,
          ACTION_ON_BOTTOM = __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* cssClasses */].ACTION_ON_BOTTOM;


      this.adapter_.removeClass(ACTIVE);

      var handler = function handler() {
        clearTimeout(_this4.timeoutId_);
        _this4.adapter_.deregisterTransitionEndHandler(handler);
        _this4.adapter_.removeClass(MULTILINE);
        _this4.adapter_.removeClass(ACTION_ON_BOTTOM);
        _this4.setActionHidden_(true);
        _this4.adapter_.setAriaHidden();
        _this4.active_ = false;
        _this4.snackbarHasFocus_ = false;
        _this4.showNext_();
      };

      this.adapter_.registerTransitionEndHandler(handler);
    }
  };

  MDCSnackbarFoundation.prototype.showNext_ = function showNext_() {
    if (!this.queue_.length) {
      return;
    }
    this.show(this.queue_.shift());
  };

  MDCSnackbarFoundation.prototype.setActionHidden_ = function setActionHidden_(isHidden) {
    if (isHidden) {
      this.adapter_.setActionAriaHidden();
    } else {
      this.adapter_.unsetActionAriaHidden();
    }
  };

  return MDCSnackbarFoundation;
}(__WEBPACK_IMPORTED_MODULE_0__material_base__["b" /* MDCFoundation */]);



/***/ }),

/***/ "o3g5":
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

/** @enum {string} */
var strings = {
  NATIVE_CONTROL_SELECTOR: '.mdc-radio__native-control'
};

/** @enum {string} */
var cssClasses = {
  ROOT: 'mdc-radio',
  DISABLED: 'mdc-radio--disabled'
};

/***/ }),

/***/ "ojw2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MDCRadioFoundation; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base_foundation__ = __webpack_require__("uJAj");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_base_selection_control__ = __webpack_require__("XCG+");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__adapter__ = __webpack_require__("jgLH");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants__ = __webpack_require__("o3g5");
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


/* eslint-disable no-unused-vars */


/* eslint-enable no-unused-vars */


/**
 * @extends {MDCFoundation<!MDCRadioAdapter>}
 */

var MDCRadioFoundation = function (_MDCFoundation) {
  _inherits(MDCRadioFoundation, _MDCFoundation);

  function MDCRadioFoundation() {
    _classCallCheck(this, MDCRadioFoundation);

    return _possibleConstructorReturn(this, _MDCFoundation.apply(this, arguments));
  }

  /** @return {boolean} */
  MDCRadioFoundation.prototype.isChecked = function isChecked() {
    return this.getNativeControl_().checked;
  };

  /** @param {boolean} checked */


  MDCRadioFoundation.prototype.setChecked = function setChecked(checked) {
    this.getNativeControl_().checked = checked;
  };

  /** @return {boolean} */


  MDCRadioFoundation.prototype.isDisabled = function isDisabled() {
    return this.getNativeControl_().disabled;
  };

  /** @param {boolean} disabled */


  MDCRadioFoundation.prototype.setDisabled = function setDisabled(disabled) {
    var DISABLED = MDCRadioFoundation.cssClasses.DISABLED;

    this.getNativeControl_().disabled = disabled;
    if (disabled) {
      this.adapter_.addClass(DISABLED);
    } else {
      this.adapter_.removeClass(DISABLED);
    }
  };

  /** @return {?string} */


  MDCRadioFoundation.prototype.getValue = function getValue() {
    return this.getNativeControl_().value;
  };

  /** @param {?string} value */


  MDCRadioFoundation.prototype.setValue = function setValue(value) {
    this.getNativeControl_().value = value;
  };

  /**
   * @return {!SelectionControlState}
   * @private
   */


  MDCRadioFoundation.prototype.getNativeControl_ = function getNativeControl_() {
    return this.adapter_.getNativeControl() || {
      checked: false,
      disabled: false,
      value: null
    };
  };

  _createClass(MDCRadioFoundation, null, [{
    key: 'cssClasses',

    /** @return enum {cssClasses} */
    get: function get() {
      return __WEBPACK_IMPORTED_MODULE_3__constants__["a" /* cssClasses */];
    }

    /** @return enum {strings} */

  }, {
    key: 'strings',
    get: function get() {
      return __WEBPACK_IMPORTED_MODULE_3__constants__["b" /* strings */];
    }

    /** @return {!MDCRadioAdapter} */

  }, {
    key: 'defaultAdapter',
    get: function get() {
      return (/** @type {!MDCRadioAdapter} */{
          addClass: function addClass() /* className: string */{},
          removeClass: function removeClass() /* className: string */{},
          getNativeControl: function getNativeControl() /* !SelectionControlState */{}
        }
      );
    }
  }]);

  return MDCRadioFoundation;
}(__WEBPACK_IMPORTED_MODULE_0__material_base_foundation__["a" /* default */]);



/***/ }),

/***/ "oqLc":
/***/ (function(module, exports) {

module.exports = "import {h, Component} from 'preact';\r\nimport List from 'preact-material-components/List';\r\nimport Formfield from 'preact-material-components/Formfield';\r\nimport 'preact-material-components/List/style.css';\r\n\r\nexport default class ListPage extends Component {\r\n  const toggleOnIcon = {\r\n    content: \"favorite\",\r\n    label: \"Remove From Favorites\"\r\n  };\r\n  const toggleOffIcon = {\r\n    content: \"favorite_border\",\r\n    label: \"Add to Favorites\"\r\n  };\r\n  render(){\r\n    return (\r\n      <div>\r\n        <IconToggle\r\n          role=\"button\"\r\n          tabindex=\"0\"\r\n          aria-pressed=\"false\"\r\n          aria-label=\"Add to favorites\"\r\n          data-toggle-on={toggleOnIcon}\r\n          data-toggle-off={toggleOffIcon}\r\n        >\r\n          favorite_border\r\n        </IconToggle>\r\n      </div>\r\n    );\r\n  }\r\n}\r\n"

/***/ }),

/***/ "pZQA":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tab__ = __webpack_require__("1nHr");
/* unused harmony reexport MDCTabFoundation */
/* unused harmony reexport MDCTab */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tab_bar__ = __webpack_require__("O+aM");
/* unused harmony reexport MDCTabBarFoundation */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__tab_bar__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tab_bar_scroller__ = __webpack_require__("95n/");
/* unused harmony reexport MDCTabBarScrollerFoundation */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__tab_bar_scroller__["a"]; });
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

/***/ "pdCL":
/***/ (function(module, exports) {

module.exports = "import {h, Component} from 'preact';\r\nimport List from 'preact-material-components/List';\r\nimport 'preact-material-components/List/style.css';\r\n\r\nexport default class ListPage extends Component {\r\n  render(){\r\n    return (\r\n      <div>\r\n        <List>\r\n          <List.Item>Item1</List.Item>\r\n          <List.Item>Item2</List.Item>\r\n          <List.Item>Item3</List.Item>\r\n          <List.Item>Item4</List.Item>\r\n          <List.Item>Item5</List.Item>\r\n        </List>\r\n      </div>\r\n    );\r\n  }\r\n}\r\n"

/***/ }),

/***/ "pu9d":
/***/ (function(module, exports) {

module.exports = "import {h, Component} from 'preact';\r\nimport Icon from 'preact-material-components/Icon';\r\n\r\nexport default class ListPage extends Component {\r\n  render(){\r\n    return (\r\n      <div>\r\n        <div><Icon>menu</Icon></div>\r\n        <div><Icon>favorite_border</Icon></div>\r\n      </div>\r\n    );\r\n  }\r\n}\r\n"

/***/ }),

/***/ "r/eL":
/***/ (function(module, exports) {

module.exports = "import {h, Component} from 'preact';\r\nimport Dialog from 'preact-material-components/Dialog';\r\nimport Button from 'preact-material-components/Button';\r\nimport List from 'preact-material-components/List';\r\nimport 'preact-material-components/List/style.css';\r\nimport 'preact-material-components/Button/style.css';\r\nimport 'preact-material-components/Dialog/style.css';\r\n\r\nexport default class DialogPage extends Component {\r\n  render(){\r\n    return (\r\n      <div>\r\n        <Button primary={true} raised={true} onClick={()=>{\r\n          this.scrollingDlg.MDComponent.show();\r\n        }}>\r\n          Show Scrollable Dialog\r\n        </Button>\r\n        <Dialog ref={scrollingDlg=>{this.scrollingDlg=scrollingDlg;}}>\r\n          <Dialog.Header>Scroll for me ;)</Dialog.Header>\r\n          <Dialog.Body scrollable={true}>\r\n            <List>\r\n              <List.Item>Item 1</List.Item>\r\n              <List.Item>Item 2</List.Item>\r\n              <List.Item>Item 3</List.Item>\r\n              <List.Item>Item 4</List.Item>\r\n              <List.Item>Item 5</List.Item>\r\n            </List>\r\n          </Dialog.Body>\r\n          <Dialog.Footer>\r\n            <Dialog.FooterButton cancel={true}>Decline</Dialog.FooterButton>\r\n            <Dialog.FooterButton accept={true}>Accept</Dialog.FooterButton>\r\n          </Dialog.Footer>\r\n        </Dialog>\r\n      </div>\r\n    );\r\n  }\r\n}\r\n"

/***/ }),

/***/ "r3ZS":
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

/***/ "rENG":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MDCRadio; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base_component__ = __webpack_require__("EQDb");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_base_selection_control__ = __webpack_require__("XCG+");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__foundation__ = __webpack_require__("ojw2");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ripple__ = __webpack_require__("vkNc");
/* unused harmony reexport MDCRadioFoundation */
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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


/* eslint-disable no-unused-vars */

/* eslint-enable no-unused-vars */





/**
 * @extends MDCComponent<!MDCRadioFoundation>
 */
var MDCRadio = function (_MDCComponent) {
  _inherits(MDCRadio, _MDCComponent);

  MDCRadio.attachTo = function attachTo(root) {
    return new MDCRadio(root);
  };

  /** @return {boolean} */


  _createClass(MDCRadio, [{
    key: 'checked',
    get: function get() {
      return this.foundation_.isChecked();
    }

    /** @param {boolean} checked */
    ,
    set: function set(checked) {
      this.foundation_.setChecked(checked);
    }

    /** @return {boolean} */

  }, {
    key: 'disabled',
    get: function get() {
      return this.foundation_.isDisabled();
    }

    /** @param {boolean} disabled */
    ,
    set: function set(disabled) {
      this.foundation_.setDisabled(disabled);
    }

    /** @return {?string} */

  }, {
    key: 'value',
    get: function get() {
      return this.foundation_.getValue();
    }

    /** @param {?string} value */
    ,
    set: function set(value) {
      this.foundation_.setValue(value);
    }

    /** @return {!MDCRipple} */

  }, {
    key: 'ripple',
    get: function get() {
      return this.ripple_;
    }
  }]);

  function MDCRadio() {
    _classCallCheck(this, MDCRadio);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    /** @private {!MDCRipple} */
    var _this = _possibleConstructorReturn(this, _MDCComponent.call.apply(_MDCComponent, [this].concat(args)));

    _this.ripple_ = _this.initRipple_();
    return _this;
  }

  /**
   * @return {!MDCRipple}
   * @private
   */


  MDCRadio.prototype.initRipple_ = function initRipple_() {
    var _this2 = this;

    var adapter = _extends(__WEBPACK_IMPORTED_MODULE_3__material_ripple__["a" /* MDCRipple */].createAdapter(this), {
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
    var foundation = new __WEBPACK_IMPORTED_MODULE_3__material_ripple__["b" /* MDCRippleFoundation */](adapter);
    return new __WEBPACK_IMPORTED_MODULE_3__material_ripple__["a" /* MDCRipple */](this.root_, foundation);
  };

  /**
   * Returns the state of the native control element, or null if the native control element is not present.
   * @return {?SelectionControlState}
   * @private
   */


  MDCRadio.prototype.destroy = function destroy() {
    this.ripple_.destroy();
    _MDCComponent.prototype.destroy.call(this);
  };

  /** @return {!MDCRadioFoundation} */


  MDCRadio.prototype.getDefaultFoundation = function getDefaultFoundation() {
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
  };

  _createClass(MDCRadio, [{
    key: 'nativeControl_',
    get: function get() {
      var NATIVE_CONTROL_SELECTOR = __WEBPACK_IMPORTED_MODULE_2__foundation__["a" /* default */].strings.NATIVE_CONTROL_SELECTOR;

      var el = /** @type {?SelectionControlState} */this.root_.querySelector(NATIVE_CONTROL_SELECTOR);
      return el;
    }
  }]);

  return MDCRadio;
}(__WEBPACK_IMPORTED_MODULE_0__material_base_component__["a" /* default */]);

/***/ }),

/***/ "rQFk":
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

/***/ "rW9b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Formfield; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__("KM04");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__MaterialComponent__ = __webpack_require__("lhA9");
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

    var _this = _possibleConstructorReturn(this, _MaterialComponent.call(this));

    _this.componentName = "form-field";
    _this._mdcProps = ["align-end"];
    return _this;
  }

  return Formfield;
}(__WEBPACK_IMPORTED_MODULE_1__MaterialComponent__["a" /* default */]);



/***/ }),

/***/ "rnIz":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "sJaT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__("KM04");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__MaterialComponent__ = __webpack_require__("lhA9");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Button__ = __webpack_require__("7/cg");
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

    var _this = _possibleConstructorReturn(this, _MaterialComponent.call(this));

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

    var _this2 = _possibleConstructorReturn(this, _MaterialComponent2.call(this));

    _this2.componentName = "";
    return _this2;
  }

  CardSection.prototype.materialDom = function materialDom(props) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("section", props, props.children);
  };

  return CardSection;
}(__WEBPACK_IMPORTED_MODULE_1__MaterialComponent__["a" /* default */]);

var CardPrimary = function (_CardSection) {
  _inherits(CardPrimary, _CardSection);

  function CardPrimary() {
    _classCallCheck(this, CardPrimary);

    var _this3 = _possibleConstructorReturn(this, _CardSection.call(this));

    _this3.componentName = "card__primary";
    return _this3;
  }

  return CardPrimary;
}(CardSection);

var CardSupportingText = function (_CardSection2) {
  _inherits(CardSupportingText, _CardSection2);

  function CardSupportingText() {
    _classCallCheck(this, CardSupportingText);

    var _this4 = _possibleConstructorReturn(this, _CardSection2.call(this));

    _this4.componentName = "card__supporting-text";
    return _this4;
  }

  return CardSupportingText;
}(CardSection);

var CardActions = function (_CardSection3) {
  _inherits(CardActions, _CardSection3);

  function CardActions() {
    _classCallCheck(this, CardActions);

    var _this5 = _possibleConstructorReturn(this, _CardSection3.call(this));

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

    var _this6 = _possibleConstructorReturn(this, _CardSection4.call(this));

    _this6.componentName = "card__media";
    return _this6;
  }

  return CardMedia;
}(CardSection);

var CardAction = function (_Button) {
  _inherits(CardAction, _Button);

  function CardAction() {
    _classCallCheck(this, CardAction);

    var _this7 = _possibleConstructorReturn(this, _Button.call(this));

    _this7.componentName = "card__action";
    return _this7;
  }

  CardAction.prototype.materialDom = function materialDom(props) {
    var _this8 = this;

    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("button", _extends({
      className: "mdc-button mdc-button--compact"
    }, props, {
      ref: function ref(control) {
        _this8.control = control;
      }
    }), props.children);
  };

  return CardAction;
}(__WEBPACK_IMPORTED_MODULE_2__Button__["a" /* default */]);

var CardTitle = function (_MaterialComponent3) {
  _inherits(CardTitle, _MaterialComponent3);

  function CardTitle() {
    _classCallCheck(this, CardTitle);

    var _this9 = _possibleConstructorReturn(this, _MaterialComponent3.call(this));

    _this9.componentName = "card__title";
    _this9._mdcProps = ["large"];
    return _this9;
  }

  CardTitle.prototype.materialDom = function materialDom(props) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("h1", props, props.children);
  };

  return CardTitle;
}(__WEBPACK_IMPORTED_MODULE_1__MaterialComponent__["a" /* default */]);

var CardSubtitle = function (_MaterialComponent4) {
  _inherits(CardSubtitle, _MaterialComponent4);

  function CardSubtitle() {
    _classCallCheck(this, CardSubtitle);

    var _this10 = _possibleConstructorReturn(this, _MaterialComponent4.call(this));

    _this10.componentName = "card__subtitle";
    return _this10;
  }

  CardSubtitle.prototype.materialDom = function materialDom(props) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("h2", props, props.children);
  };

  return CardSubtitle;
}(__WEBPACK_IMPORTED_MODULE_1__MaterialComponent__["a" /* default */]);

var CardHorizontalBlock = function (_CardSection5) {
  _inherits(CardHorizontalBlock, _CardSection5);

  function CardHorizontalBlock() {
    _classCallCheck(this, CardHorizontalBlock);

    var _this11 = _possibleConstructorReturn(this, _CardSection5.call(this));

    _this11.componentName = "card__horizontal-block";
    return _this11;
  }

  return CardHorizontalBlock;
}(CardSection);

var CardMediaItem = function (_MaterialComponent5) {
  _inherits(CardMediaItem, _MaterialComponent5);

  function CardMediaItem() {
    _classCallCheck(this, CardMediaItem);

    var _this12 = _possibleConstructorReturn(this, _MaterialComponent5.call(this));

    _this12.componentName = "card__media-item";
    _this12._mdcProps = [];
    return _this12;
  }

  CardMediaItem.prototype.materialDom = function materialDom(props) {
    var className = "";
    if (props.x) {
      className = "mdc-card__media-item--" + props.x + "x";
    }
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("img", _extends({ className: className }, props));
  };

  return CardMediaItem;
}(__WEBPACK_IMPORTED_MODULE_1__MaterialComponent__["a" /* default */]);

Card.Primary = CardPrimary;
Card.SupportingText = CardSupportingText;
Card.Actions = CardActions;
Card.Action = CardAction;
Card.Media = CardMedia;
Card.Title = CardTitle;
Card.Subtitle = CardSubtitle;
Card.HorizontalBlock = CardHorizontalBlock;
Card.MediaItem = CardMediaItem;

/* harmony default export */ __webpack_exports__["a"] = (Card);

/***/ }),

/***/ "sdLF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Radio; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__("KM04");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__MaterialComponent__ = __webpack_require__("lhA9");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_radio___ = __webpack_require__("rENG");
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

    var _this = _possibleConstructorReturn(this, _MaterialComponent.call(this));

    _this.componentName = "radio";
    return _this;
  }

  Radio.prototype.componentDidMount = function componentDidMount() {
    this.MDComponent = __WEBPACK_IMPORTED_MODULE_2__material_radio___["a" /* MDCRadio */].attachTo(this.control);
  };

  Radio.prototype.componentWillUnmount = function componentWillUnmount() {
    this.MDComponent.destroy && this.MDComponent.destroy();
  };

  Radio.prototype.materialDom = function materialDom(allprops) {
    var _this2 = this;

    var className = allprops.className,
        props = _objectWithoutProperties(allprops, ["className"]);

    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("div", {
      className: className,
      ref: function ref(control) {
        _this2.control = control;
      }
    }, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("input", _extends({ className: "mdc-radio__native-control", type: "radio" }, props)), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("div", { className: "mdc-radio__background" }, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("div", { className: "mdc-radio__outer-circle" }), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("div", { className: "mdc-radio__inner-circle" })));
  };

  return Radio;
}(__WEBPACK_IMPORTED_MODULE_1__MaterialComponent__["a" /* default */]);



/***/ }),

/***/ "tJYt":
/***/ (function(module, exports) {

module.exports = "import {h, Component} from 'preact';\r\nimport Card from 'preact-material-components/Card';\r\nimport 'preact-material-components/Card/style.css';\r\nimport 'preact-material-components/Button/style.css';\r\n\r\nexport default class CardsPage extends Component {\r\n\trender(){\r\n\t\treturn (\r\n\t\t\t<Card>\r\n\t\t\t\t<Card.Primary>\r\n\t\t\t\t\t<Card.Title>Hi</Card.Title>\r\n\t\t\t\t\t<Card.Subtitle>Let me subtitle</Card.Subtitle>\r\n\t\t\t\t</Card.Primary>\r\n\t\t\t\t<Card.Media className='card-media'></Card.Media>\r\n\t\t\t\t<Card.Actions>\r\n\t\t\t\t\t<Card.Action>OKAY</Card.Action>\r\n\t\t\t\t</Card.Actions>\r\n\t\t\t</Card>\r\n\t\t\t<Card>\r\n\t\t\t\t<Card.HorizontalBlock>\r\n\t\t\t\t\t<Card.Primary>\r\n\t\t\t\t\t\t<Card.Title large>Hi</Card.Title>\r\n\t\t\t\t\t\t<Card.Subtitle>Let me subtitle</Card.Subtitle>\r\n\t\t\t\t\t</Card.Primary>\r\n\t\t\t\t\t<Card.MediaItem src=\"some-picture.jpg\" x=\"1dot5\" />\r\n\t\t\t\t</Card.HorizontalBlock>\r\n\t\t\t\t<Card.Actions>\r\n\t\t\t\t\t<Card.Action>OKAY</Card.Action>\r\n\t\t\t\t</Card.Actions>\r\n\t\t\t</Card>\r\n\t\t);\r\n\t}\r\n}\r\n"

/***/ }),

/***/ "thmM":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Formfield; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__("KM04");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__MaterialComponent__ = __webpack_require__("lhA9");
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

    var _this = _possibleConstructorReturn(this, _MaterialComponent.call(this));

    _this.componentName = "form-field";
    _this._mdcProps = ["align-end"];
    return _this;
  }

  return Formfield;
}(__WEBPACK_IMPORTED_MODULE_1__MaterialComponent__["a" /* default */]);



/***/ }),

/***/ "uJAj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MDCFoundation; });
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

/**
 * @template A
 */
var MDCFoundation = function () {
  _createClass(MDCFoundation, null, [{
    key: "cssClasses",

    /** @return enum{cssClasses} */
    get: function get() {
      // Classes extending MDCFoundation should implement this method to return an object which exports every
      // CSS class the foundation class needs as a property. e.g. {ACTIVE: 'mdc-component--active'}
      return {};
    }

    /** @return enum{strings} */

  }, {
    key: "strings",
    get: function get() {
      // Classes extending MDCFoundation should implement this method to return an object which exports all
      // semantic strings as constants. e.g. {ARIA_ROLE: 'tablist'}
      return {};
    }

    /** @return enum{numbers} */

  }, {
    key: "numbers",
    get: function get() {
      // Classes extending MDCFoundation should implement this method to return an object which exports all
      // of its semantic numbers as constants. e.g. {ANIMATION_DELAY_MS: 350}
      return {};
    }

    /** @return {!Object} */

  }, {
    key: "defaultAdapter",
    get: function get() {
      // Classes extending MDCFoundation may choose to implement this getter in order to provide a convenient
      // way of viewing the necessary methods of an adapter. In the future, this could also be used for adapter
      // validation.
      return {};
    }

    /**
     * @param {A=} adapter
     */

  }]);

  function MDCFoundation() {
    var adapter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, MDCFoundation);

    /** @protected {!A} */
    this.adapter_ = adapter;
  }

  MDCFoundation.prototype.init = function init() {
    // Subclasses should override this method to perform initialization routines (registering events, etc.)
  };

  MDCFoundation.prototype.destroy = function destroy() {
    // Subclasses should override this method to perform de-initialization routines (de-registering events, etc.)
  };

  return MDCFoundation;
}();



/***/ }),

/***/ "uOgf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__("KM04");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__MaterialComponent__ = __webpack_require__("lhA9");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_toolbar__ = __webpack_require__("jhiW");
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
 * @prop fixed-lastrow-only = false
 * @prop waterfall = false
 * @prop flexible = false
 * @prop flexible-default-behavior = false
 */

var Toolbar = function (_MaterialComponent) {
  _inherits(Toolbar, _MaterialComponent);

  function Toolbar() {
    _classCallCheck(this, Toolbar);

    var _this = _possibleConstructorReturn(this, _MaterialComponent.call(this));

    _this.componentName = "toolbar";
    _this._mdcProps = ["fixed", "fixed-lastrow-only", "waterfall", "flexible", "flexible-default-behavior"];
    _this._onChange = _this._onChange.bind(_this);
    return _this;
  }

  Toolbar.prototype._onChange = function _onChange(e) {
    if (this.props.onChange) {
      this.props.onChange(e);
    }
  };

  Toolbar.prototype.componentDidMount = function componentDidMount() {
    this.MDComponent = new __WEBPACK_IMPORTED_MODULE_2__material_toolbar__["a" /* MDCToolbar */](this.control);
    this.MDComponent.listen("MDCToolbar:change", this._onChange);
  };

  Toolbar.prototype.componentWillUnmount = function componentWillUnmount() {
    this.MDComponent.unlisten("MDCToolbar:change", this._onChange);
    this.MDComponent.destroy && this.MDComponent.destroy();
  };

  Toolbar.prototype.materialDom = function materialDom(props) {
    var _this2 = this;

    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("header", _extends({
      ref: function ref(control) {
        _this2.control = control;
      }
    }, props), props.children);
  };

  return Toolbar;
}(__WEBPACK_IMPORTED_MODULE_1__MaterialComponent__["a" /* default */]);

var ToolbarRow = function (_MaterialComponent2) {
  _inherits(ToolbarRow, _MaterialComponent2);

  function ToolbarRow() {
    _classCallCheck(this, ToolbarRow);

    var _this3 = _possibleConstructorReturn(this, _MaterialComponent2.call(this));

    _this3.componentName = "toolbar__row";
    return _this3;
  }

  return ToolbarRow;
}(__WEBPACK_IMPORTED_MODULE_1__MaterialComponent__["a" /* default */]);

/**
 * @prop align-end = false
 * @prop align-start = false
 * @prop shrink-to-fit = false
 */


var ToolbarSection = function (_MaterialComponent3) {
  _inherits(ToolbarSection, _MaterialComponent3);

  function ToolbarSection() {
    _classCallCheck(this, ToolbarSection);

    var _this4 = _possibleConstructorReturn(this, _MaterialComponent3.call(this));

    _this4.componentName = "toolbar__section";
    _this4._mdcProps = ["align-start", "align-end", "shrink-to-fit"];
    return _this4;
  }

  ToolbarSection.prototype.materialDom = function materialDom(props) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("section", props, props.children);
  };

  return ToolbarSection;
}(__WEBPACK_IMPORTED_MODULE_1__MaterialComponent__["a" /* default */]);

/**
 * @prop menu = false
 */


var ToolbarIcon = function (_MaterialComponent4) {
  _inherits(ToolbarIcon, _MaterialComponent4);

  function ToolbarIcon(props) {
    _classCallCheck(this, ToolbarIcon);

    var _this5 = _possibleConstructorReturn(this, _MaterialComponent4.call(this));

    _this5.componentName = "toolbar__icon";
    if (props.menu) {
      _this5.componentName += "--menu";
    }
    return _this5;
  }

  ToolbarIcon.prototype.materialDom = function materialDom(props) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("a", _extends({ className: "material-icons" }, props), props.children || "menu");
  };

  return ToolbarIcon;
}(__WEBPACK_IMPORTED_MODULE_1__MaterialComponent__["a" /* default */]);

/**
 * @prop title = ''
 */


var ToolbarTitle = function (_MaterialComponent5) {
  _inherits(ToolbarTitle, _MaterialComponent5);

  function ToolbarTitle() {
    _classCallCheck(this, ToolbarTitle);

    var _this6 = _possibleConstructorReturn(this, _MaterialComponent5.call(this));

    _this6.componentName = "toolbar__title";
    return _this6;
  }

  ToolbarTitle.prototype.materialDom = function materialDom(props) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("span", props, props.children);
  };

  return ToolbarTitle;
}(__WEBPACK_IMPORTED_MODULE_1__MaterialComponent__["a" /* default */]);

Toolbar.Section = ToolbarSection;
Toolbar.Icon = ToolbarIcon;
Toolbar.Title = ToolbarTitle;
Toolbar.Row = ToolbarRow;

/* harmony default export */ __webpack_exports__["a"] = (Toolbar);

/***/ }),

/***/ "uxab":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Home; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__("KM04");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_preact_router__ = __webpack_require__("/QC5");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_preact_material_components_FormField__ = __webpack_require__("rW9b");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_preact_material_components_LayoutGrid__ = __webpack_require__("Q1yZ");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_preact_material_components_Switch__ = __webpack_require__("wfAA");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_preact_material_components_Toolbar__ = __webpack_require__("uOgf");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__routes_button__ = __webpack_require__("LuS4");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__routes_card__ = __webpack_require__("jvS+");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__routes_checkbox__ = __webpack_require__("SfCu");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__routes_dialog__ = __webpack_require__("DAAL");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__routes_drawer__ = __webpack_require__("S/If");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__routes_elevation__ = __webpack_require__("RKMj");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__routes_fab__ = __webpack_require__("1Eow");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__routes_form_field__ = __webpack_require__("NW4s");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__routes_home__ = __webpack_require__("E1C8");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__routes_icon__ = __webpack_require__("1n7e");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__routes_icon_toggle__ = __webpack_require__("ZB3r");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__routes_layout_grid__ = __webpack_require__("aICV");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__routes_linear_progress__ = __webpack_require__("VEmT");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__routes_list__ = __webpack_require__("0Gzv");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__routes_menu__ = __webpack_require__("WCsR");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__routes_radio__ = __webpack_require__("92i7");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__routes_select__ = __webpack_require__("L23q");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__routes_slider__ = __webpack_require__("LOem");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__routes_snackbar__ = __webpack_require__("L+O+");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__routes_switch__ = __webpack_require__("20Eo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__routes_tabs__ = __webpack_require__("jT9V");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__routes_textfield__ = __webpack_require__("8bDF");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__routes_toolbar__ = __webpack_require__("iQPn");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__menu__ = __webpack_require__("D9cU");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30_preact_material_components_style_css__ = __webpack_require__("3IxH");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30_preact_material_components_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_30_preact_material_components_style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__style__ = __webpack_require__("gT5u");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_31__style__);


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Dependencies



// Material Components





// Routes
























// Components


// Style



var _ref = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' });

var _ref2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
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
);

var _ref3 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	'div',
	{ className: 'mdc-typography--display2 name' },
	'preact-material-components'
);

var _ref5 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_14__routes_home__["a" /* default */], { 'default': true });

var Home = function (_Component) {
	_inherits(Home, _Component);

	function Home() {
		_classCallCheck(this, Home);

		var _this = _possibleConstructorReturn(this, _Component.call(this));

		_this.state = {
			darkMode: false
		};
		_this.menuItems = [{
			text: 'Home',
			icon: 'home',
			link: '/',
			component: __WEBPACK_IMPORTED_MODULE_14__routes_home__["a" /* default */]
		}, {
			text: 'Button',
			link: '/component/button',
			component: __WEBPACK_IMPORTED_MODULE_6__routes_button__["a" /* default */]
		}, {
			text: 'Card',
			link: '/component/card',
			component: __WEBPACK_IMPORTED_MODULE_7__routes_card__["a" /* default */]
		}, {
			text: 'Checkbox',
			link: '/component/checkbox',
			component: __WEBPACK_IMPORTED_MODULE_8__routes_checkbox__["a" /* default */]
		}, {
			text: 'Dialog',
			link: '/component/dialog',
			component: __WEBPACK_IMPORTED_MODULE_9__routes_dialog__["a" /* default */]
		}, {
			text: 'Drawer',
			link: '/component/drawer',
			component: __WEBPACK_IMPORTED_MODULE_10__routes_drawer__["a" /* default */]
		}, {
			text: 'Elevation',
			link: '/component/elevation',
			component: __WEBPACK_IMPORTED_MODULE_11__routes_elevation__["a" /* default */]
		}, {
			text: 'Fab',
			link: '/component/fab',
			component: __WEBPACK_IMPORTED_MODULE_12__routes_fab__["a" /* default */]
		}, {
			text: 'Formfield',
			link: '/component/form-field',
			component: __WEBPACK_IMPORTED_MODULE_13__routes_form_field__["a" /* default */]
		}, {
			text: 'Icon',
			link: '/component/icon',
			component: __WEBPACK_IMPORTED_MODULE_15__routes_icon__["a" /* default */]
		}, {
			text: 'IconToggle',
			link: '/component/icon-toggle',
			component: __WEBPACK_IMPORTED_MODULE_16__routes_icon_toggle__["a" /* default */]
		}, {
			text: 'LayoutGrid',
			link: '/component/layout-grid',
			component: __WEBPACK_IMPORTED_MODULE_17__routes_layout_grid__["a" /* default */]
		}, {
			text: 'LinearProgress',
			link: '/component/linear-progress',
			component: __WEBPACK_IMPORTED_MODULE_18__routes_linear_progress__["a" /* default */]
		}, {
			text: 'List',
			link: '/component/list',
			component: __WEBPACK_IMPORTED_MODULE_19__routes_list__["a" /* default */]
		}, {
			text: 'Menu',
			link: '/component/menu',
			component: __WEBPACK_IMPORTED_MODULE_20__routes_menu__["a" /* default */]
		}, {
			text: 'Radio',
			link: '/component/radio',
			component: __WEBPACK_IMPORTED_MODULE_21__routes_radio__["a" /* default */]
		}, {
			text: 'Select',
			link: '/component/select',
			component: __WEBPACK_IMPORTED_MODULE_22__routes_select__["a" /* default */]
		}, {
			text: 'Slider',
			link: '/component/slider',
			component: __WEBPACK_IMPORTED_MODULE_23__routes_slider__["a" /* default */]
		}, {
			text: 'Snackbar',
			link: '/component/snackbar',
			component: __WEBPACK_IMPORTED_MODULE_24__routes_snackbar__["a" /* default */]
		}, {
			text: 'Switch',
			link: '/component/switch',
			component: __WEBPACK_IMPORTED_MODULE_25__routes_switch__["a" /* default */]
		}, {
			text: 'Tabs',
			link: '/component/tabs',
			component: __WEBPACK_IMPORTED_MODULE_26__routes_tabs__["a" /* default */]
		}, {
			text: 'Textfield',
			link: '/component/textfield',
			component: __WEBPACK_IMPORTED_MODULE_27__routes_textfield__["a" /* default */]
		}, {
			text: 'Toolbar',
			link: '/component/toolbar',
			component: __WEBPACK_IMPORTED_MODULE_28__routes_toolbar__["a" /* default */]
		}];
		_this._handleRoute = _this._handleRoute.bind(_this);
		return _this;
	}

	Home.prototype.closeDrawer = function closeDrawer() {
		this.menu.close();
	};

	Home.prototype.toggleDarkMode = function toggleDarkMode() {
		this.setState({
			darkMode: !this.state.darkMode
		});
		if (this.state.darkMode) {
			document.body.classList.add('mdc-theme--dark');
		} else {
			document.body.classList.remove('mdc-theme--dark');
		}
	};

	Home.prototype._handleRoute = function _handleRoute(e) {
		this.setState({
			toolbarTitle: e.url === '/' ? null : this.menuItems.find(function (item) {
				return item.link === e.url;
			}).text
		});
	};

	Home.prototype.render = function render() {
		var _this2 = this;

		return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
			'div',
			{ className: 'home mdc-typography' },
			_ref,
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
				'div',
				{ className: this.state.toolbarTitle ? "hero collapsed" : "hero" },
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					__WEBPACK_IMPORTED_MODULE_5_preact_material_components_Toolbar__["a" /* default */],
					{ className: 'mdc-theme--dark' },
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						__WEBPACK_IMPORTED_MODULE_5_preact_material_components_Toolbar__["a" /* default */].Row,
						null,
						__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
							__WEBPACK_IMPORTED_MODULE_5_preact_material_components_Toolbar__["a" /* default */].Section,
							{ 'align-start': true },
							__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
								__WEBPACK_IMPORTED_MODULE_5_preact_material_components_Toolbar__["a" /* default */].Icon,
								{ menu: true, href: '#', onClick: function onClick(e) {
										e.preventDefault();
										_this2.menu.open();
									} },
								'menu'
							),
							__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
								__WEBPACK_IMPORTED_MODULE_5_preact_material_components_Toolbar__["a" /* default */].Title,
								null,
								this.state.toolbarTitle
							)
						),
						__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
							__WEBPACK_IMPORTED_MODULE_5_preact_material_components_Toolbar__["a" /* default */].Section,
							{ 'align-end': true },
							__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
								__WEBPACK_IMPORTED_MODULE_2_preact_material_components_FormField__["a" /* default */],
								{ className: 'field-darkmode' },
								'Dark Mode',
								__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_4_preact_material_components_Switch__["a" /* default */], { className: 'switch-darkmode', onChange: function onChange() {
										_this2.toggleDarkMode();
									} })
							)
						)
					)
				),
				_ref2,
				_ref3
			),
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_29__menu__["a" /* default */], { items: this.menuItems, ref: function ref(menu) {
					return _this2.menu = menu;
				} }),
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
				__WEBPACK_IMPORTED_MODULE_3_preact_material_components_LayoutGrid__["a" /* default */],
				{ className: 'content' },
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					__WEBPACK_IMPORTED_MODULE_3_preact_material_components_LayoutGrid__["a" /* default */].Inner,
					null,
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						__WEBPACK_IMPORTED_MODULE_3_preact_material_components_LayoutGrid__["a" /* default */].Cell,
						{ cols: '12' },
						__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
							__WEBPACK_IMPORTED_MODULE_1_preact_router__["a" /* default */],
							{ onChange: this._handleRoute },
							this.menuItems.map(function (_ref4) {
								var Element = _ref4.component,
								    link = _ref4.link;
								return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(Element, { path: link });
							}),
							_ref5
						)
					)
				)
			)
		);
	};

	return Home;
}(__WEBPACK_IMPORTED_MODULE_0_preact__["Component"]);



/***/ }),

/***/ "vkNc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MDCRipple; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base_component__ = __webpack_require__("EQDb");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__adapter__ = __webpack_require__("FHEU");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__foundation__ = __webpack_require__("SIOS");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util__ = __webpack_require__("joOv");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__foundation__["a"]; });
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









/**
 * @extends MDCComponent<!MDCRippleFoundation>
 */
var MDCRipple = function (_MDCComponent) {
  _inherits(MDCRipple, _MDCComponent);

  /** @param {...?} args */
  function MDCRipple() {
    _classCallCheck(this, MDCRipple);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    /** @type {boolean} */
    var _this = _possibleConstructorReturn(this, _MDCComponent.call.apply(_MDCComponent, [this].concat(args)));

    _this.disabled = false;

    /** @private {boolean} */
    _this.unbounded_;
    return _this;
  }

  /**
   * @param {!Element} root
   * @param {{isUnbounded: (boolean|undefined)}=} options
   * @return {!MDCRipple}
   */


  MDCRipple.attachTo = function attachTo(root) {
    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref$isUnbounded = _ref.isUnbounded,
        isUnbounded = _ref$isUnbounded === undefined ? undefined : _ref$isUnbounded;

    var ripple = new MDCRipple(root);
    // Only override unbounded behavior if option is explicitly specified
    if (isUnbounded !== undefined) {
      ripple.unbounded = /** @type {boolean} */isUnbounded;
    }
    return ripple;
  };

  /**
   * @param {!RippleCapableSurface} instance
   * @return {!MDCRippleAdapter}
   */


  MDCRipple.createAdapter = function createAdapter(instance) {
    var MATCHES = __WEBPACK_IMPORTED_MODULE_3__util__["a" /* getMatchesProperty */](HTMLElement.prototype);

    return {
      browserSupportsCssVars: function browserSupportsCssVars() {
        return __WEBPACK_IMPORTED_MODULE_3__util__["b" /* supportsCssVariables */](window);
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
        return instance.root_.addEventListener(evtType, handler, __WEBPACK_IMPORTED_MODULE_3__util__["c" /* applyPassive */]());
      },
      deregisterInteractionHandler: function deregisterInteractionHandler(evtType, handler) {
        return instance.root_.removeEventListener(evtType, handler, __WEBPACK_IMPORTED_MODULE_3__util__["c" /* applyPassive */]());
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
  };

  /** @return {boolean} */


  MDCRipple.prototype.activate = function activate() {
    this.foundation_.activate();
  };

  MDCRipple.prototype.deactivate = function deactivate() {
    this.foundation_.deactivate();
  };

  MDCRipple.prototype.layout = function layout() {
    this.foundation_.layout();
  };

  /** @return {!MDCRippleFoundation} */


  MDCRipple.prototype.getDefaultFoundation = function getDefaultFoundation() {
    return new __WEBPACK_IMPORTED_MODULE_2__foundation__["a" /* default */](MDCRipple.createAdapter(this));
  };

  MDCRipple.prototype.initialSyncWithDOM = function initialSyncWithDOM() {
    this.unbounded = 'mdcRippleIsUnbounded' in this.root_.dataset;
  };

  _createClass(MDCRipple, [{
    key: 'unbounded',
    get: function get() {
      return this.unbounded_;
    }

    /** @param {boolean} unbounded */
    ,
    set: function set(unbounded) {
      var UNBOUNDED = __WEBPACK_IMPORTED_MODULE_2__foundation__["a" /* default */].cssClasses.UNBOUNDED;

      this.unbounded_ = Boolean(unbounded);
      if (this.unbounded_) {
        this.root_.classList.add(UNBOUNDED);
      } else {
        this.root_.classList.remove(UNBOUNDED);
      }
    }
  }]);

  return MDCRipple;
}(__WEBPACK_IMPORTED_MODULE_0__material_base_component__["a" /* default */]);

/**
 * See Material Design spec for more details on when to use ripples.
 * https://material.io/guidelines/motion/choreography.html#choreography-creation
 * @record
 */

var RippleCapableSurface = function RippleCapableSurface() {
  _classCallCheck(this, RippleCapableSurface);
};

/** @protected {!Element} */


RippleCapableSurface.prototype.root_;

/**
 * Whether or not the ripple bleeds out of the bounds of the element.
 * @type {boolean|undefined}
 */
RippleCapableSurface.prototype.unbounded;

/**
 * Whether or not the ripple is attached to a disabled component.
 * @type {boolean|undefined}
 */
RippleCapableSurface.prototype.disabled;

/***/ }),

/***/ "wIsA":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MDCPersistentDrawerFoundation; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__slidable__ = __webpack_require__("VqTd");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__("2XtF");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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
      return _extends(__WEBPACK_IMPORTED_MODULE_0__slidable__["a" /* MDCSlidableDrawerFoundation */].defaultAdapter, {
        isDrawer: function isDrawer() {
          return false;
        }
      });
    }
  }]);

  function MDCPersistentDrawerFoundation(adapter) {
    _classCallCheck(this, MDCPersistentDrawerFoundation);

    return _possibleConstructorReturn(this, _MDCSlidableDrawerFou.call(this, _extends(MDCPersistentDrawerFoundation.defaultAdapter, adapter), MDCPersistentDrawerFoundation.cssClasses.ROOT, MDCPersistentDrawerFoundation.cssClasses.ANIMATING, MDCPersistentDrawerFoundation.cssClasses.OPEN));
  }

  MDCPersistentDrawerFoundation.prototype.isRootTransitioningEventTarget_ = function isRootTransitioningEventTarget_(el) {
    return this.adapter_.isDrawer(el);
  };

  return MDCPersistentDrawerFoundation;
}(__WEBPACK_IMPORTED_MODULE_0__slidable__["a" /* MDCSlidableDrawerFoundation */]);



/***/ }),

/***/ "wTMJ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MDCSimpleMenu; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base_component__ = __webpack_require__("EQDb");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__foundation__ = __webpack_require__("FBM0");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util__ = __webpack_require__("75cn");
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







/**
 * @extends MDCComponent<!MDCSimpleMenuFoundation>
 */
var MDCSimpleMenu = function (_MDCComponent) {
  _inherits(MDCSimpleMenu, _MDCComponent);

  /** @param {...?} args */
  function MDCSimpleMenu() {
    _classCallCheck(this, MDCSimpleMenu);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    /** @private {!Element} */
    var _this = _possibleConstructorReturn(this, _MDCComponent.call.apply(_MDCComponent, [this].concat(args)));

    _this.previousFocus_;
    return _this;
  }

  /**
   * @param {!Element} root
   * @return {!MDCSimpleMenu}
   */


  MDCSimpleMenu.attachTo = function attachTo(root) {
    return new MDCSimpleMenu(root);
  };

  /** @return {boolean} */


  /** @param {{focusIndex: ?number}=} options */
  MDCSimpleMenu.prototype.show = function show() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$focusIndex = _ref.focusIndex,
        focusIndex = _ref$focusIndex === undefined ? null : _ref$focusIndex;

    this.foundation_.open({ focusIndex: focusIndex });
  };

  MDCSimpleMenu.prototype.hide = function hide() {
    this.foundation_.close();
  };

  /**
   * Return the item container element inside the component.
   * @return {?Element}
   */


  /** @return {!MDCSimpleMenuFoundation} */
  MDCSimpleMenu.prototype.getDefaultFoundation = function getDefaultFoundation() {
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
      getAttributeForEventTarget: function getAttributeForEventTarget(target, attributeName) {
        return target.getAttribute(attributeName);
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
      registerBodyClickHandler: function registerBodyClickHandler(handler) {
        return document.body.addEventListener('click', handler);
      },
      deregisterBodyClickHandler: function deregisterBodyClickHandler(handler) {
        return document.body.removeEventListener('click', handler);
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
        return _this2.emit(__WEBPACK_IMPORTED_MODULE_1__foundation__["a" /* default */].strings.SELECTED_EVENT, {
          index: evtData.index,
          item: _this2.items[evtData.index]
        });
      },
      notifyCancel: function notifyCancel() {
        return _this2.emit(__WEBPACK_IMPORTED_MODULE_1__foundation__["a" /* default */].strings.CANCEL_EVENT, {});
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
  };

  _createClass(MDCSimpleMenu, [{
    key: 'open',
    get: function get() {
      return this.foundation_.isOpen();
    }

    /** @param {boolean} value */
    ,
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

    /**
     * Return the items within the menu. Note that this only contains the set of elements within
     * the items container that are proper list items, and not supplemental / presentational DOM
     * elements.
     * @return {!Array<!Element>}
     */

  }, {
    key: 'items',
    get: function get() {
      var itemsContainer = this.itemsContainer_;

      return [].slice.call(itemsContainer.querySelectorAll('.mdc-list-item[role]'));
    }
  }]);

  return MDCSimpleMenu;
}(__WEBPACK_IMPORTED_MODULE_0__material_base_component__["a" /* default */]);

/***/ }),

/***/ "wfAA":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Switch; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__("KM04");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__MaterialComponent__ = __webpack_require__("lhA9");
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

    var _this = _possibleConstructorReturn(this, _MaterialComponent.call(this));

    _this.componentName = "switch";
    _this._mdcProps = ["disabled"];
    return _this;
  }

  Switch.prototype.materialDom = function materialDom(allprops) {
    var className = allprops.className,
        props = _objectWithoutProperties(allprops, ["className"]);

    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("div", { className: className }, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("input", _extends({
      type: "checkbox",
      className: "mdc-switch__native-control"
    }, props)), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("div", { className: "mdc-switch__background" }, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("div", { className: "mdc-switch__knob" })));
  };

  return Switch;
}(__WEBPACK_IMPORTED_MODULE_1__MaterialComponent__["a" /* default */]);



/***/ }),

/***/ "x1lW":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__("KM04");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__MaterialComponent__ = __webpack_require__("lhA9");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_menu__ = __webpack_require__("Qdhi");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__List__ = __webpack_require__("E7XR");
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
 * @prop open = false
 */

var Menu = function (_MaterialComponent) {
  _inherits(Menu, _MaterialComponent);

  function Menu() {
    _classCallCheck(this, Menu);

    var _this = _possibleConstructorReturn(this, _MaterialComponent.call(this));

    _this.componentName = "simple-menu";
    _this._mdcProps = ["open", "open-from-top-left", "open-from-top-right", "open-from-bottom-left", "open-from-bottom-right"];
    return _this;
  }

  Menu.prototype.componentDidMount = function componentDidMount() {
    this.MDComponent = new __WEBPACK_IMPORTED_MODULE_2__material_menu__["a" /* MDCSimpleMenu */](this.control);
  };

  Menu.prototype.componentWillUnmount = function componentWillUnmount() {
    this.MDComponent.destroy && this.MDComponent.destroy();
  };

  Menu.prototype.materialDom = function materialDom(props) {
    var _this2 = this;

    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("div", _extends({ tabindex: "-1" }, props, { ref: function ref(control) {
        return _this2.control = control;
      } }), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("ul", {
      "class": "mdc-simple-menu__items mdc-list",
      role: "menu",
      "aria-hidden": "true"
    }, props.children));
  };

  return Menu;
}(__WEBPACK_IMPORTED_MODULE_1__MaterialComponent__["a" /* default */]);

var MenuAnchor = function (_MaterialComponent2) {
  _inherits(MenuAnchor, _MaterialComponent2);

  function MenuAnchor() {
    _classCallCheck(this, MenuAnchor);

    var _this3 = _possibleConstructorReturn(this, _MaterialComponent2.call(this));

    _this3.componentName = "menu-anchor";
    return _this3;
  }

  return MenuAnchor;
}(__WEBPACK_IMPORTED_MODULE_1__MaterialComponent__["a" /* default */]);

Menu.Anchor = MenuAnchor;
Menu.Item = __WEBPACK_IMPORTED_MODULE_3__List__["a" /* default */].Item;
/* harmony default export */ __webpack_exports__["a"] = (Menu);

/***/ }),

/***/ "x8H2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MDCLinearProgressFoundation; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base__ = __webpack_require__("dSNL");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_animation__ = __webpack_require__("5qFY");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__("B101");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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






var MDCLinearProgressFoundation = function (_MDCFoundation) {
  _inherits(MDCLinearProgressFoundation, _MDCFoundation);

  _createClass(MDCLinearProgressFoundation, null, [{
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
    key: 'defaultAdapter',
    get: function get() {
      return {
        addClass: function addClass() /* className: string */{},
        getPrimaryBar: function getPrimaryBar() /* el: Element */{},
        getBuffer: function getBuffer() /* el: Element */{},
        hasClass: function hasClass() {
          return (/* className: string */false
          );
        },
        removeClass: function removeClass() /* className: string */{},
        setStyle: function setStyle() /* el: Element, styleProperty: string, value: number */{}
      };
    }
  }]);

  function MDCLinearProgressFoundation(adapter) {
    _classCallCheck(this, MDCLinearProgressFoundation);

    return _possibleConstructorReturn(this, _MDCFoundation.call(this, _extends(MDCLinearProgressFoundation.defaultAdapter, adapter)));
  }

  MDCLinearProgressFoundation.prototype.init = function init() {
    this.determinate_ = !this.adapter_.hasClass(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */].INDETERMINATE_CLASS);
    this.reverse_ = this.adapter_.hasClass(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */].REVERSED_CLASS);
  };

  MDCLinearProgressFoundation.prototype.setDeterminate = function setDeterminate(isDeterminate) {
    this.determinate_ = isDeterminate;
    if (this.determinate_) {
      this.adapter_.removeClass(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */].INDETERMINATE_CLASS);
    } else {
      this.adapter_.addClass(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */].INDETERMINATE_CLASS);
      this.setScale_(this.adapter_.getPrimaryBar(), 1);
      this.setScale_(this.adapter_.getBuffer(), 1);
    }
  };

  MDCLinearProgressFoundation.prototype.setProgress = function setProgress(value) {
    if (this.determinate_) {
      this.setScale_(this.adapter_.getPrimaryBar(), value);
    }
  };

  MDCLinearProgressFoundation.prototype.setBuffer = function setBuffer(value) {
    if (this.determinate_) {
      this.setScale_(this.adapter_.getBuffer(), value);
    }
  };

  MDCLinearProgressFoundation.prototype.setReverse = function setReverse(isReversed) {
    this.reverse_ = isReversed;
    if (this.reverse_) {
      this.adapter_.addClass(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */].REVERSED_CLASS);
    } else {
      this.adapter_.removeClass(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */].REVERSED_CLASS);
    }
  };

  MDCLinearProgressFoundation.prototype.open = function open() {
    this.adapter_.removeClass(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */].CLOSED_CLASS);
  };

  MDCLinearProgressFoundation.prototype.close = function close() {
    this.adapter_.addClass(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */].CLOSED_CLASS);
  };

  MDCLinearProgressFoundation.prototype.setScale_ = function setScale_(el, scaleValue) {
    var _this2 = this;

    var value = 'scaleX(' + scaleValue + ')';
    __WEBPACK_IMPORTED_MODULE_1__material_animation__["c" /* transformStyleProperties */].forEach(function (transformStyleProperty) {
      _this2.adapter_.setStyle(el, transformStyleProperty, value);
    });
  };

  return MDCLinearProgressFoundation;
}(__WEBPACK_IMPORTED_MODULE_0__material_base__["b" /* MDCFoundation */]);



/***/ }),

/***/ "xWvN":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MDCPersistentDrawer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base__ = __webpack_require__("dSNL");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__foundation__ = __webpack_require__("wIsA");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util__ = __webpack_require__("rQFk");
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

    return _possibleConstructorReturn(this, _MDCComponent.apply(this, arguments));
  }

  MDCPersistentDrawer.attachTo = function attachTo(root) {
    return new MDCPersistentDrawer(root);
  };

  MDCPersistentDrawer.prototype.getDefaultFoundation = function getDefaultFoundation() {
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
        return _this2.emit(__WEBPACK_IMPORTED_MODULE_1__foundation__["a" /* default */].strings.OPEN_EVENT);
      },
      notifyClose: function notifyClose() {
        return _this2.emit(__WEBPACK_IMPORTED_MODULE_1__foundation__["a" /* default */].strings.CLOSE_EVENT);
      },
      isRtl: function isRtl() {
        return getComputedStyle(_this2.root_).getPropertyValue('direction') === 'rtl';
      },
      isDrawer: function isDrawer(el) {
        return el === _this2.drawer;
      }
    });
  };

  _createClass(MDCPersistentDrawer, [{
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

    // Return the drawer element inside the component.

  }, {
    key: 'drawer',
    get: function get() {
      return this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_1__foundation__["a" /* default */].strings.DRAWER_SELECTOR);
    }
  }]);

  return MDCPersistentDrawer;
}(__WEBPACK_IMPORTED_MODULE_0__material_base__["a" /* MDCComponent */]);

/***/ }),

/***/ "xprb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MDCIconToggle; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base_component__ = __webpack_require__("EQDb");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__foundation__ = __webpack_require__("5HAH");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ripple_adapter__ = __webpack_require__("FHEU");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ripple__ = __webpack_require__("vkNc");
/* unused harmony reexport MDCIconToggleFoundation */
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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



/* eslint-disable no-unused-vars */

/* eslint-enable no-unused-vars */




/**
 * @extends {MDCComponent<!MDCIconToggleFoundation>}
 */
var MDCIconToggle = function (_MDCComponent) {
  _inherits(MDCIconToggle, _MDCComponent);

  MDCIconToggle.attachTo = function attachTo(root) {
    return new MDCIconToggle(root);
  };

  function MDCIconToggle() {
    _classCallCheck(this, MDCIconToggle);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    /** @private {!MDCRipple} */
    var _this = _possibleConstructorReturn(this, _MDCComponent.call.apply(_MDCComponent, [this].concat(args)));

    _this.ripple_ = _this.initRipple_();
    return _this;
  }

  /** @return {!Element} */


  /**
   * @return {!MDCRipple}
   * @private
   */
  MDCIconToggle.prototype.initRipple_ = function initRipple_() {
    var _this2 = this;

    var adapter = _extends(__WEBPACK_IMPORTED_MODULE_3__material_ripple__["a" /* MDCRipple */].createAdapter(this), {
      isUnbounded: function isUnbounded() {
        return true;
      },
      isSurfaceActive: function isSurfaceActive() {
        return _this2.foundation_.isKeyboardActivated();
      },
      computeBoundingRect: function computeBoundingRect() {
        var dim = 48;

        var _root_$getBoundingCli = _this2.root_.getBoundingClientRect(),
            left = _root_$getBoundingCli.left,
            top = _root_$getBoundingCli.top;

        return {
          left: left,
          top: top,
          width: dim,
          height: dim,
          right: left + dim,
          bottom: left + dim
        };
      }
    });
    var foundation = new __WEBPACK_IMPORTED_MODULE_3__material_ripple__["b" /* MDCRippleFoundation */](adapter);
    return new __WEBPACK_IMPORTED_MODULE_3__material_ripple__["a" /* MDCRipple */](this.root_, foundation);
  };

  MDCIconToggle.prototype.destroy = function destroy() {
    this.ripple_.destroy();
    _MDCComponent.prototype.destroy.call(this);
  };

  /** @return {!MDCIconToggleFoundation} */


  MDCIconToggle.prototype.getDefaultFoundation = function getDefaultFoundation() {
    var _this3 = this;

    return new __WEBPACK_IMPORTED_MODULE_1__foundation__["a" /* default */]({
      addClass: function addClass(className) {
        return _this3.iconEl_.classList.add(className);
      },
      removeClass: function removeClass(className) {
        return _this3.iconEl_.classList.remove(className);
      },
      registerInteractionHandler: function registerInteractionHandler(type, handler) {
        return _this3.root_.addEventListener(type, handler);
      },
      deregisterInteractionHandler: function deregisterInteractionHandler(type, handler) {
        return _this3.root_.removeEventListener(type, handler);
      },
      setText: function setText(text) {
        return _this3.iconEl_.textContent = text;
      },
      getTabIndex: function getTabIndex() {
        return (/* number */_this3.root_.tabIndex
        );
      },
      setTabIndex: function setTabIndex(tabIndex) {
        return _this3.root_.tabIndex = tabIndex;
      },
      getAttr: function getAttr(name, value) {
        return _this3.root_.getAttribute(name, value);
      },
      setAttr: function setAttr(name, value) {
        return _this3.root_.setAttribute(name, value);
      },
      rmAttr: function rmAttr(name) {
        return _this3.root_.removeAttribute(name);
      },
      notifyChange: function notifyChange(evtData) {
        return _this3.emit(__WEBPACK_IMPORTED_MODULE_1__foundation__["a" /* default */].strings.CHANGE_EVENT, evtData);
      }
    });
  };

  MDCIconToggle.prototype.initialSyncWithDOM = function initialSyncWithDOM() {
    this.on = this.root_.getAttribute(__WEBPACK_IMPORTED_MODULE_1__foundation__["a" /* default */].strings.ARIA_PRESSED) === 'true';
    this.disabled = this.root_.getAttribute(__WEBPACK_IMPORTED_MODULE_1__foundation__["a" /* default */].strings.ARIA_DISABLED) === 'true';
  };

  /** @return {boolean} */


  MDCIconToggle.prototype.refreshToggleData = function refreshToggleData() {
    this.foundation_.refreshToggleData();
  };

  _createClass(MDCIconToggle, [{
    key: 'iconEl_',
    get: function get() {
      var sel = this.root_.dataset['iconInnerSelector'];

      return sel ?
      /** @type {!Element} */this.root_.querySelector(sel) : this.root_;
    }
  }, {
    key: 'on',
    get: function get() {
      return this.foundation_.isOn();
    }

    /** @param {boolean} isOn */
    ,
    set: function set(isOn) {
      this.foundation_.toggle(isOn);
    }

    /** @return {boolean} */

  }, {
    key: 'disabled',
    get: function get() {
      return this.foundation_.isDisabled();
    }

    /** @param {boolean} isDisabled */
    ,
    set: function set(isDisabled) {
      this.foundation_.setDisabled(isDisabled);
    }
  }]);

  return MDCIconToggle;
}(__WEBPACK_IMPORTED_MODULE_0__material_base_component__["a" /* default */]);

/***/ }),

/***/ "ySUw":
/***/ (function(module, exports, __webpack_require__) {

var tabbable = __webpack_require__("TO+D");

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

/***/ "yY49":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "ynRT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__("KM04");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__MaterialComponent__ = __webpack_require__("lhA9");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_drawer_temporary__ = __webpack_require__("WvoH");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_drawer_persistent__ = __webpack_require__("xWvN");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__List__ = __webpack_require__("E7XR");
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

    var _this = _possibleConstructorReturn(this, _MaterialComponent.call(this));

    _this.componentName = "temporary-drawer";
    _this._open = _this._open.bind(_this);
    _this._close = _this._close.bind(_this);
    return _this;
  }

  TemporaryDrawer.prototype._open = function _open() {
    if (this.props.onOpen) {
      this.props.onOpen();
    }
  };

  TemporaryDrawer.prototype._close = function _close() {
    if (this.props.onClose) {
      this.props.onClose();
    }
  };

  TemporaryDrawer.prototype.componentDidMount = function componentDidMount() {
    this.MDComponent = __WEBPACK_IMPORTED_MODULE_2__material_drawer_temporary__["a" /* MDCTemporaryDrawer */].attachTo(this.control);
    this.MDComponent.listen("MDCTemporaryDrawer:open", this._open);
    this.MDComponent.listen("MDCTemporaryDrawer:close", this._close);
  };

  TemporaryDrawer.prototype.componentWillUnmount = function componentWillUnmount() {
    this.MDComponent.unlisten("MDCTemporaryDrawer:close", this._close);
    this.MDComponent.unlisten("MDCTemporaryDrawer:open", this._open);
    this.MDComponent.destroy && this.MDComponent.destroy();
  };

  TemporaryDrawer.prototype.materialDom = function materialDom(props) {
    var _this2 = this;

    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("aside", _extends({
      className: "mdc-typography",
      ref: function ref(control) {
        _this2.control = control;
      }
    }, props), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("nav", { className: "mdc-temporary-drawer__drawer" }, props.children));
  };

  return TemporaryDrawer;
}(__WEBPACK_IMPORTED_MODULE_1__MaterialComponent__["a" /* default */]);

var TemporaryDrawerHeader = function (_MaterialComponent2) {
  _inherits(TemporaryDrawerHeader, _MaterialComponent2);

  function TemporaryDrawerHeader() {
    _classCallCheck(this, TemporaryDrawerHeader);

    var _this3 = _possibleConstructorReturn(this, _MaterialComponent2.call(this));

    _this3.componentName = "temporary-drawer__header";
    return _this3;
  }

  TemporaryDrawerHeader.prototype.materialDom = function materialDom(props) {
    var _this4 = this;

    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("header", _extends({
      ref: function ref(control) {
        _this4.control = control;
      }
    }, props), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("div", { className: "mdc-temporary-drawer__header-content" }, props.children));
  };

  return TemporaryDrawerHeader;
}(__WEBPACK_IMPORTED_MODULE_1__MaterialComponent__["a" /* default */]);

var TemporaryDrawerContent = function (_MaterialComponent3) {
  _inherits(TemporaryDrawerContent, _MaterialComponent3);

  function TemporaryDrawerContent() {
    _classCallCheck(this, TemporaryDrawerContent);

    var _this5 = _possibleConstructorReturn(this, _MaterialComponent3.call(this));

    _this5.componentName = "temporary-drawer__content";
    return _this5;
  }

  TemporaryDrawerContent.prototype.materialDom = function materialDom(props) {
    var _this6 = this;

    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("nav", _extends({
      className: "mdc-list",
      ref: function ref(control) {
        _this6.control = control;
      }
    }, props), props.children);
  };

  return TemporaryDrawerContent;
}(__WEBPACK_IMPORTED_MODULE_1__MaterialComponent__["a" /* default */]);

/**
 * @prop spacer = false
 */


var PermanentDrawer = function (_MaterialComponent4) {
  _inherits(PermanentDrawer, _MaterialComponent4);

  function PermanentDrawer() {
    _classCallCheck(this, PermanentDrawer);

    var _this7 = _possibleConstructorReturn(this, _MaterialComponent4.call(this));

    _this7.componentName = "permanent-drawer";
    return _this7;
  }

  PermanentDrawer.prototype.materialDom = function materialDom(props) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("nav", _extends({ className: "mdc-typography" }, props), props.spacer && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("div", { className: "mdc-permanent-drawer__toolbar-spacer" }), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("div", { className: "mdc-permanent-drawer__content" }, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("nav", { className: "mdc-list" }, props.children)));
  };

  return PermanentDrawer;
}(__WEBPACK_IMPORTED_MODULE_1__MaterialComponent__["a" /* default */]);

var PermanentDrawerHeader = function (_MaterialComponent5) {
  _inherits(PermanentDrawerHeader, _MaterialComponent5);

  function PermanentDrawerHeader() {
    _classCallCheck(this, PermanentDrawerHeader);

    var _this8 = _possibleConstructorReturn(this, _MaterialComponent5.call(this));

    _this8.componentName = "permanent-drawer__header";
    return _this8;
  }

  PermanentDrawerHeader.prototype.materialDom = function materialDom(props) {
    var _this9 = this;

    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("header", _extends({
      ref: function ref(control) {
        _this9.control = control;
      }
    }, props), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("div", { className: "mdc-permanent-drawer__header-content" }, props.children));
  };

  return PermanentDrawerHeader;
}(__WEBPACK_IMPORTED_MODULE_1__MaterialComponent__["a" /* default */]);

var PermanentDrawerContent = function (_TemporaryDrawerConte) {
  _inherits(PermanentDrawerContent, _TemporaryDrawerConte);

  function PermanentDrawerContent() {
    _classCallCheck(this, PermanentDrawerContent);

    var _this10 = _possibleConstructorReturn(this, _TemporaryDrawerConte.call(this));

    _this10.componentName = "permanent-drawer__content";
    return _this10;
  }

  return PermanentDrawerContent;
}(TemporaryDrawerContent);

var PersistentDrawer = function (_MaterialComponent6) {
  _inherits(PersistentDrawer, _MaterialComponent6);

  function PersistentDrawer() {
    _classCallCheck(this, PersistentDrawer);

    var _this11 = _possibleConstructorReturn(this, _MaterialComponent6.call(this));

    _this11.componentName = "persistent-drawer";
    _this11._open = _this11._open.bind(_this11);
    _this11._close = _this11._close.bind(_this11);
    return _this11;
  }

  PersistentDrawer.prototype._open = function _open() {
    if (this.props.onOpen) {
      this.props.onOpen();
    }
  };

  PersistentDrawer.prototype._close = function _close() {
    if (this.props.onClose) {
      this.props.onClose();
    }
  };

  PersistentDrawer.prototype.componentDidMount = function componentDidMount() {
    this.MDComponent = __WEBPACK_IMPORTED_MODULE_3__material_drawer_persistent__["a" /* MDCPersistentDrawer */].attachTo(this.control);
    this.MDComponent.listen("MDCPersistentDrawer:open", this._open);
    this.MDComponent.listen("MDCPersistentDrawer:close", this._close);
  };

  PersistentDrawer.prototype.componentWillUnmount = function componentWillUnmount() {
    this.MDComponent.unlisten("MDCPersistentDrawer:close", this._close);
    this.MDComponent.unlisten("MDCPersistentDrawer:open", this._open);
    this.MDComponent.destroy && this.MDComponent.destroy();
  };

  PersistentDrawer.prototype.materialDom = function materialDom(props) {
    var _this12 = this;

    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("aside", _extends({
      className: "mdc-typography",
      ref: function ref(control) {
        _this12.control = control;
      }
    }, props), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("nav", { className: "mdc-persistent-drawer__drawer" }));
  };

  return PersistentDrawer;
}(__WEBPACK_IMPORTED_MODULE_1__MaterialComponent__["a" /* default */]);

var PersistentDrawerHeader = function (_MaterialComponent7) {
  _inherits(PersistentDrawerHeader, _MaterialComponent7);

  function PersistentDrawerHeader() {
    _classCallCheck(this, PersistentDrawerHeader);

    var _this13 = _possibleConstructorReturn(this, _MaterialComponent7.call(this));

    _this13.componentName = "persistent-drawer__header";
    return _this13;
  }

  PersistentDrawerHeader.prototype.materialDom = function materialDom(props) {
    var _this14 = this;

    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("header", _extends({
      ref: function ref(control) {
        _this14.control = control;
      }
    }, props), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("div", { className: "mdc-persistent-drawer__header-content" }, props.children));
  };

  return PersistentDrawerHeader;
}(__WEBPACK_IMPORTED_MODULE_1__MaterialComponent__["a" /* default */]);

var PersistentDrawerContent = function (_TemporaryDrawerConte2) {
  _inherits(PersistentDrawerContent, _TemporaryDrawerConte2);

  function PersistentDrawerContent() {
    _classCallCheck(this, PersistentDrawerContent);

    var _this15 = _possibleConstructorReturn(this, _TemporaryDrawerConte2.call(this));

    _this15.componentName = "persistent-drawer__content";
    return _this15;
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

    return _possibleConstructorReturn(this, _List$LinkItem.call(this));
  }

  DrawerItem.prototype.materialDom = function materialDom(props) {
    var returnedNode = _List$LinkItem.prototype.materialDom.call(this, props);
    /* Logic to add selected class */
    if (props.selected) {
      returnedNode.attributes["className"] = "mdc-temporary-drawer--selected mdc-permanent-drawer--selected";
    }
    return returnedNode;
  };

  return DrawerItem;
}(__WEBPACK_IMPORTED_MODULE_4__List__["a" /* default */].LinkItem);

var Drawer = {};

Drawer.DrawerItem = DrawerItem;
Drawer.TemporaryDrawer = TemporaryDrawer;
Drawer.TemporaryDrawerHeader = TemporaryDrawerHeader;
Drawer.TemporaryDrawerContent = TemporaryDrawerContent;
Drawer.PermanentDrawer = PermanentDrawer;
Drawer.PermanentDrawerHeader = PermanentDrawerHeader;
Drawer.PermanentDrawerContent = PermanentDrawerContent;
Drawer.PersistentDrawer = PersistentDrawer;
Drawer.PersistentDrawerHeader = PersistentDrawerHeader;
Drawer.PersistentDrawerContent = PersistentDrawerContent;

/* harmony default export */ __webpack_exports__["a"] = (Drawer);

/***/ }),

/***/ "zQnS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MDCTabFoundation; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base_foundation__ = __webpack_require__("uJAj");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__("bEsy");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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

    var _this = _possibleConstructorReturn(this, _MDCFoundation.call(this, _extends(MDCTabFoundation.defaultAdapter, adapter)));

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

  MDCTabFoundation.prototype.init = function init() {
    this.adapter_.registerInteractionHandler('click', this.clickHandler_);
    this.adapter_.registerInteractionHandler('keydown', this.keydownHandler_);
  };

  MDCTabFoundation.prototype.destroy = function destroy() {
    this.adapter_.deregisterInteractionHandler('click', this.clickHandler_);
    this.adapter_.deregisterInteractionHandler('keydown', this.keydownHandler_);
  };

  MDCTabFoundation.prototype.getComputedWidth = function getComputedWidth() {
    return this.computedWidth_;
  };

  MDCTabFoundation.prototype.getComputedLeft = function getComputedLeft() {
    return this.computedLeft_;
  };

  MDCTabFoundation.prototype.isActive = function isActive() {
    return this.isActive_;
  };

  MDCTabFoundation.prototype.setActive = function setActive(isActive) {
    this.isActive_ = isActive;
    if (this.isActive_) {
      this.adapter_.addClass(__WEBPACK_IMPORTED_MODULE_1__constants__["a" /* cssClasses */].ACTIVE);
    } else {
      this.adapter_.removeClass(__WEBPACK_IMPORTED_MODULE_1__constants__["a" /* cssClasses */].ACTIVE);
    }
  };

  MDCTabFoundation.prototype.preventsDefaultOnClick = function preventsDefaultOnClick() {
    return this.preventDefaultOnClick_;
  };

  MDCTabFoundation.prototype.setPreventDefaultOnClick = function setPreventDefaultOnClick(preventDefaultOnClick) {
    this.preventDefaultOnClick_ = preventDefaultOnClick;
  };

  MDCTabFoundation.prototype.measureSelf = function measureSelf() {
    this.computedWidth_ = this.adapter_.getOffsetWidth();
    this.computedLeft_ = this.adapter_.getOffsetLeft();
  };

  return MDCTabFoundation;
}(__WEBPACK_IMPORTED_MODULE_0__material_base_foundation__["a" /* default */]);



/***/ })

/******/ });
//# sourceMappingURL=ssr-bundle.js.map