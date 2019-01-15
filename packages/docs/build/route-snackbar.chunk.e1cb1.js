webpackJsonp([8],{"K/3F":function(t){t.exports="import {h, Component} from 'preact';\nimport Snackbar from 'preact-material-components/Snackbar';\nimport Button from 'preact-material-components/Button';\nimport 'preact-material-components/Button/style.css';\nimport 'preact-material-components/Snackbar/style.css';\n\nexport default class SnackbarPage extends Component {\n  render(){\n    return (\n      <div>\n        <Button raised={true} primary={true} onClick={()=>{\n          this.bar.MDComponent.show({\n            message: \"Hello Snack!\"\n          });\n        }}>\n            Show snack\n        </Button>\n        <Snackbar ref={bar=>{this.bar=bar;}}/>\n      </div>\n    );\n  }\n}\n"},frf2:function(){},i7ug:function(t,n,e){"use strict";function i(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function r(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function o(t,n){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?t:n}function a(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(t,n):t.__proto__=n)}function s(t){return void 0!==t.document&&"function"==typeof t.document.createElement}function c(t){return t in D||t in N}function u(t,n,e){return n[t].styleProperty in e.style?n[t].noPrefix:n[t].webkitPrefix}function d(t,n){if(!s(t)||!c(n))return n;var e=n in D?D:N,i=t.document.createElement("div");return e===D?u(n,e,i):e[n].noPrefix in i.style?e[n].noPrefix:e[n].webkitPrefix}function l(t,n){return d(t,n)}function f(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function p(t,n){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?t:n}function h(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(t,n):t.__proto__=n)}function b(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function m(t,n){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?t:n}function _(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(t,n):t.__proto__=n)}function y(t,n){for(var e in t)if(!(e in n))return!0;for(var i in n)if(t[i]!==n[i])return!0;return!1}function v(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function g(t,n){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?t:n}function w(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(t,n):t.__proto__=n)}Object.defineProperty(n,"__esModule",{value:!0});var O=e("KM04"),k=function(){function t(t,n){for(var e=0;e<n.length;e++){var i=n[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(n,e,i){return e&&t(n.prototype,e),i&&t(n,i),n}}(),E=function(){function t(){this.adapter_=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}}return k(t,null,[{key:"cssClasses",get:function(){return{}}},{key:"strings",get:function(){return{}}},{key:"numbers",get:function(){return{}}},{key:"defaultAdapter",get:function(){return{}}}]),t.prototype.init=function(){},t.prototype.destroy=function(){},t}(),T=E,C=function(){function t(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0;i(this,t),this.root_=n;for(var r=arguments.length,o=Array(r>2?r-2:0),a=2;a<r;a++)o[a-2]=arguments[a];this.initialize.apply(this,o),this.foundation_=void 0===e?this.getDefaultFoundation():e,this.foundation_.init(),this.initialSyncWithDOM()}return t.attachTo=function(n){return new t(n,new T)},t.prototype.initialize=function(){},t.prototype.getDefaultFoundation=function(){throw new Error("Subclasses must override getDefaultFoundation to return a properly configured foundation class")},t.prototype.initialSyncWithDOM=function(){},t.prototype.destroy=function(){this.foundation_.destroy()},t.prototype.listen=function(t,n){this.root_.addEventListener(t,n)},t.prototype.unlisten=function(t,n){this.root_.removeEventListener(t,n)},t.prototype.emit=function(t,n){var e=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=void 0;"function"==typeof CustomEvent?i=new CustomEvent(t,{detail:n,bubbles:e}):(i=document.createEvent("CustomEvent"),i.initCustomEvent(t,e,!1,n)),this.root_.dispatchEvent(i)},t}(),H=C,A={ROOT:"mdc-snackbar",TEXT:"mdc-snackbar__text",ACTION_WRAPPER:"mdc-snackbar__action-wrapper",ACTION_BUTTON:"mdc-snackbar__action-button",ACTIVE:"mdc-snackbar--active",MULTILINE:"mdc-snackbar--multiline",ACTION_ON_BOTTOM:"mdc-snackbar--action-on-bottom"},P={TEXT_SELECTOR:".mdc-snackbar__text",ACTION_WRAPPER_SELECTOR:".mdc-snackbar__action-wrapper",ACTION_BUTTON_SELECTOR:".mdc-snackbar__action-button",SHOW_EVENT:"MDCSnackbar:show",HIDE_EVENT:"MDCSnackbar:hide"},j={MESSAGE_TIMEOUT:2750},x=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t},S=function(){function t(t,n){for(var e=0;e<n.length;e++){var i=n[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(n,e,i){return e&&t(n.prototype,e),i&&t(n,i),n}}(),I=function(t){function n(e){r(this,n);var i=o(this,t.call(this,x(n.defaultAdapter,e)));return i.active_=!1,i.actionWasClicked_=!1,i.dismissOnAction_=!0,i.firstFocus_=!0,i.pointerDownRecognized_=!1,i.snackbarHasFocus_=!1,i.snackbarData_=null,i.queue_=[],i.actionClickHandler_=function(){i.actionWasClicked_=!0,i.invokeAction_()},i.visibilitychangeHandler_=function(){clearTimeout(i.timeoutId_),i.snackbarHasFocus_=!0,i.adapter_.visibilityIsHidden()||setTimeout(i.cleanup_.bind(i),i.snackbarData_.timeout||j.MESSAGE_TIMEOUT)},i.interactionHandler_=function(t){("focus"!==t.type||i.adapter_.isFocused())&&("touchstart"!==t.type&&"mousedown"!==t.type||(i.pointerDownRecognized_=!0),i.handlePossibleTabKeyboardFocus_(t),"focus"===t.type&&(i.pointerDownRecognized_=!1))},i.blurHandler_=function(){clearTimeout(i.timeoutId_),i.snackbarHasFocus_=!1,i.timeoutId_=setTimeout(i.cleanup_.bind(i),i.snackbarData_.timeout||j.MESSAGE_TIMEOUT)},i}return a(n,t),S(n,[{key:"active",get:function(){return this.active_}}],[{key:"cssClasses",get:function(){return A}},{key:"strings",get:function(){return P}},{key:"defaultAdapter",get:function(){return{addClass:function(){},removeClass:function(){},setAriaHidden:function(){},unsetAriaHidden:function(){},setActionAriaHidden:function(){},unsetActionAriaHidden:function(){},setActionText:function(){},setMessageText:function(){},setFocus:function(){},isFocused:function(){return!1},visibilityIsHidden:function(){return!1},registerCapturedBlurHandler:function(){},deregisterCapturedBlurHandler:function(){},registerVisibilityChangeHandler:function(){},deregisterVisibilityChangeHandler:function(){},registerCapturedInteractionHandler:function(){},deregisterCapturedInteractionHandler:function(){},registerActionClickHandler:function(){},deregisterActionClickHandler:function(){},registerTransitionEndHandler:function(){},deregisterTransitionEndHandler:function(){},notifyShow:function(){},notifyHide:function(){}}}}]),n.prototype.init=function(){this.adapter_.registerActionClickHandler(this.actionClickHandler_),this.adapter_.setAriaHidden(),this.adapter_.setActionAriaHidden()},n.prototype.destroy=function(){var t=this;this.adapter_.deregisterActionClickHandler(this.actionClickHandler_),this.adapter_.deregisterCapturedBlurHandler(this.blurHandler_),this.adapter_.deregisterVisibilityChangeHandler(this.visibilitychangeHandler_),["touchstart","mousedown","focus"].forEach(function(n){t.adapter_.deregisterCapturedInteractionHandler(n,t.interactionHandler_)})},n.prototype.dismissesOnAction=function(){return this.dismissOnAction_},n.prototype.setDismissOnAction=function(t){this.dismissOnAction_=!!t},n.prototype.show=function(t){var n=this;if(!t)throw new Error("Please provide a data object with at least a message to display.");if(!t.message)throw new Error("Please provide a message to be displayed.");if(t.actionHandler&&!t.actionText)throw new Error("Please provide action text with the handler.");if(this.active)return void this.queue_.push(t);clearTimeout(this.timeoutId_),this.snackbarData_=t,this.firstFocus_=!0,this.adapter_.registerVisibilityChangeHandler(this.visibilitychangeHandler_),this.adapter_.registerCapturedBlurHandler(this.blurHandler_),["touchstart","mousedown","focus"].forEach(function(t){n.adapter_.registerCapturedInteractionHandler(t,n.interactionHandler_)});var e=A.ACTIVE,i=A.MULTILINE,r=A.ACTION_ON_BOTTOM;this.adapter_.setMessageText(this.snackbarData_.message),this.snackbarData_.multiline&&(this.adapter_.addClass(i),this.snackbarData_.actionOnBottom&&this.adapter_.addClass(r)),this.snackbarData_.actionHandler?(this.adapter_.setActionText(this.snackbarData_.actionText),this.actionHandler_=this.snackbarData_.actionHandler,this.setActionHidden_(!1)):(this.setActionHidden_(!0),this.actionHandler_=null,this.adapter_.setActionText(null)),this.active_=!0,this.adapter_.addClass(e),this.adapter_.unsetAriaHidden(),this.adapter_.notifyShow(),this.timeoutId_=setTimeout(this.cleanup_.bind(this),this.snackbarData_.timeout||j.MESSAGE_TIMEOUT)},n.prototype.handlePossibleTabKeyboardFocus_=function(){this.firstFocus_&&!this.pointerDownRecognized_&&this.setFocusOnAction_(),this.firstFocus_=!1},n.prototype.setFocusOnAction_=function(){this.adapter_.setFocus(),this.snackbarHasFocus_=!0,this.firstFocus_=!1},n.prototype.invokeAction_=function(){try{if(!this.actionHandler_)return;this.actionHandler_()}finally{this.dismissOnAction_&&this.cleanup_()}},n.prototype.cleanup_=function(){var t=this;if(!this.snackbarHasFocus_||this.actionWasClicked_){var n=A.MULTILINE,e=A.ACTION_ON_BOTTOM;this.adapter_.removeClass(A.ACTIVE),this.adapter_.registerTransitionEndHandler(function i(){clearTimeout(t.timeoutId_),t.adapter_.deregisterTransitionEndHandler(i),t.adapter_.removeClass(n),t.adapter_.removeClass(e),t.setActionHidden_(!0),t.adapter_.setAriaHidden(),t.active_=!1,t.snackbarHasFocus_=!1,t.adapter_.notifyHide(),t.showNext_()})}},n.prototype.showNext_=function(){this.queue_.length&&this.show(this.queue_.shift())},n.prototype.setActionHidden_=function(t){t?this.adapter_.setActionAriaHidden():this.adapter_.unsetActionAriaHidden()},n}(T),D={animationstart:{noPrefix:"animationstart",webkitPrefix:"webkitAnimationStart",styleProperty:"animation"},animationend:{noPrefix:"animationend",webkitPrefix:"webkitAnimationEnd",styleProperty:"animation"},animationiteration:{noPrefix:"animationiteration",webkitPrefix:"webkitAnimationIteration",styleProperty:"animation"},transitionend:{noPrefix:"transitionend",webkitPrefix:"webkitTransitionEnd",styleProperty:"transition"}},N={animation:{noPrefix:"animation",webkitPrefix:"-webkit-animation"},transform:{noPrefix:"transform",webkitPrefix:"-webkit-transform"},transition:{noPrefix:"transition",webkitPrefix:"-webkit-transition"}},M=function(){function t(t,n){for(var e=0;e<n.length;e++){var i=n[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(n,e,i){return e&&t(n.prototype,e),i&&t(n,i),n}}(),F=function(t){function n(){return f(this,n),p(this,t.apply(this,arguments))}return h(n,t),n.attachTo=function(t){return new n(t)},n.prototype.show=function(t){this.foundation_.show(t)},n.prototype.getDefaultFoundation=function(){var t=this,n=I.strings,e=n.TEXT_SELECTOR,i=n.ACTION_BUTTON_SELECTOR,r=function(){return t.root_.querySelector(e)},o=function(){return t.root_.querySelector(i)};return new I({addClass:function(n){return t.root_.classList.add(n)},removeClass:function(n){return t.root_.classList.remove(n)},setAriaHidden:function(){return t.root_.setAttribute("aria-hidden","true")},unsetAriaHidden:function(){return t.root_.removeAttribute("aria-hidden")},setActionAriaHidden:function(){return o().setAttribute("aria-hidden","true")},unsetActionAriaHidden:function(){return o().removeAttribute("aria-hidden")},setActionText:function(t){o().textContent=t},setMessageText:function(t){r().textContent=t},setFocus:function(){return o().focus()},isFocused:function(){return document.activeElement===o()},visibilityIsHidden:function(){return document.hidden},registerCapturedBlurHandler:function(t){return o().addEventListener("blur",t,!0)},deregisterCapturedBlurHandler:function(t){return o().removeEventListener("blur",t,!0)},registerVisibilityChangeHandler:function(t){return document.addEventListener("visibilitychange",t)},deregisterVisibilityChangeHandler:function(t){return document.removeEventListener("visibilitychange",t)},registerCapturedInteractionHandler:function(t,n){return document.body.addEventListener(t,n,!0)},deregisterCapturedInteractionHandler:function(t,n){return document.body.removeEventListener(t,n,!0)},registerActionClickHandler:function(t){return o().addEventListener("click",t)},deregisterActionClickHandler:function(t){return o().removeEventListener("click",t)},registerTransitionEndHandler:function(n){return t.root_.addEventListener(l(window,"transitionend"),n)},deregisterTransitionEndHandler:function(n){return t.root_.removeEventListener(l(window,"transitionend"),n)},notifyShow:function(){return t.emit(I.strings.SHOW_EVENT)},notifyHide:function(){return t.emit(I.strings.HIDE_EVENT)}})},M(n,[{key:"dismissesOnAction",get:function(){return this.foundation_.dismissesOnAction()},set:function(t){this.foundation_.setDismissOnAction(t)}}]),n}(H),L=e("rBz8"),B=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t},R=function(t){function n(){b(this,n);var e=m(this,t.apply(this,arguments));return e.componentName="snackbar",e.mdcProps=[],e}return _(n,t),n.prototype.componentDidMount=function(){t.prototype.componentDidMount.call(this),this.control&&(this.MDComponent=new F(this.control),this.MDComponent.dismissesOnAction=void 0===this.props.dismissesOnAction||null===this.props.dismissesOnAction||this.props.dismissesOnAction)},n.prototype.componentWillUnmount=function(){t.prototype.componentWillUnmount.call(this),this.MDComponent&&this.MDComponent.destroy()},n.prototype.shouldComponentUpdate=function(t,n){return y(this.props,t)||y(this.state,n)},n.prototype.materialDom=function(t){return Object(O.h)("div",B({"aria-live":"assertive","aria-atomic":"true","aria-hidden":"true",ref:this.setControlRef},t),Object(O.h)("div",{className:"mdc-snackbar__text"}),Object(O.h)("div",{className:"mdc-snackbar__action-wrapper"},Object(O.h)("button",{type:"button",className:"mdc-snackbar__action-button"})))},n}(L.a),U=e("ik2o"),V=(e("laKJ"),e("DCCw"),e("B/9r")),W=e("F4jb"),z=(e("frf2"),e("K/3F")),K=e.n(z);e.d(n,"default",function(){return Y});var q=Object(O.h)("div",{className:"mdc-typography--display1"},"Sample code "),G=Object(O.h)(W.a,null,Object(O.h)("code",{class:"lang-js"},K.a)),J=Object(O.h)("div",{className:"mdc-typography--display1"},"Original documentation"),X=Object(O.h)("div",{className:"mdc-typography--body"},"This component encapsulates"," ",Object(O.h)("span",{className:"strong"},"mdc-snackbar"),", you can refer to its documentation",Object(O.h)("a",{href:"https://github.com/material-components/material-components-web/tree/master/packages/mdc-snackbar"}," ","here"),"."),Q=Object(O.h)("div",{className:"mdc-typography--display1"},"Demo "),Y=function(t){function n(){v(this,n);var e=g(this,t.call(this));return e.propsTable=[{component:"Snackbar",props:[{name:"dismissesOnAction",description:"tells whether or not snackbar auto dismisses upon clicking the action button"}]}],e}return w(n,t),n.prototype.render=function(){var t=this;return Object(O.h)("div",{className:"page-snackbar"},Object(O.h)(V.a,{data:this.propsTable}),q,G,J,X,Q,Object(O.h)(U.a,{raised:!0,primary:!0,onClick:function(){t.bar.MDComponent.show({message:"Hello Snack!"})}},"Show snack"),Object(O.h)(R,{ref:function(n){t.bar=n}}))},n}(O.Component)},laKJ:function(){}});
//# sourceMappingURL=route-snackbar.chunk.e1cb1.js.map