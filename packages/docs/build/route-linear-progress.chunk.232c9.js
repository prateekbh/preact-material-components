webpackJsonp([6],{"7RV1":function(e){e.exports="<LinearProgress reversed indeterminate />\n"},J9Pe:function(e){e.exports="<LinearProgress indeterminate />\n"},OyWS:function(){},SU1q:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function p(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function f(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function h(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function m(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var y=n("KM04"),b=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),_=function(){function e(){this.adapter_=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}}return b(e,null,[{key:"cssClasses",get:function(){return{}}},{key:"strings",get:function(){return{}}},{key:"numbers",get:function(){return{}}},{key:"defaultAdapter",get:function(){return{}}}]),e.prototype.init=function(){},e.prototype.destroy=function(){},e}(),g=_,v=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0;r(this,e),this.root_=t;for(var o=arguments.length,s=Array(o>2?o-2:0),i=2;i<o;i++)s[i-2]=arguments[i];this.initialize.apply(this,s),this.foundation_=void 0===n?this.getDefaultFoundation():n,this.foundation_.init(),this.initialSyncWithDOM()}return e.attachTo=function(t){return new e(t,new g)},e.prototype.initialize=function(){},e.prototype.getDefaultFoundation=function(){throw new Error("Subclasses must override getDefaultFoundation to return a properly configured foundation class")},e.prototype.initialSyncWithDOM=function(){},e.prototype.destroy=function(){this.foundation_.destroy()},e.prototype.listen=function(e,t){this.root_.addEventListener(e,t)},e.prototype.unlisten=function(e,t){this.root_.removeEventListener(e,t)},e.prototype.emit=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=void 0;"function"==typeof CustomEvent?r=new CustomEvent(e,{detail:t,bubbles:n}):(r=document.createEvent("CustomEvent"),r.initCustomEvent(e,n,!1,t)),this.root_.dispatchEvent(r)},e}(),O=v,E=["transform","WebkitTransform","MozTransform","OTransform","MSTransform"],S={CLOSED_CLASS:"mdc-linear-progress--closed",INDETERMINATE_CLASS:"mdc-linear-progress--indeterminate",REVERSED_CLASS:"mdc-linear-progress--reversed"},C={PRIMARY_BAR_SELECTOR:".mdc-linear-progress__primary-bar",BUFFER_SELECTOR:".mdc-linear-progress__buffer"},j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},w=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),P=function(e){function t(n){return o(this,t),s(this,e.call(this,j(t.defaultAdapter,n)))}return i(t,e),w(t,null,[{key:"cssClasses",get:function(){return S}},{key:"strings",get:function(){return C}},{key:"defaultAdapter",get:function(){return{addClass:function(){},getPrimaryBar:function(){},getBuffer:function(){},hasClass:function(){return!1},removeClass:function(){},setStyle:function(){}}}}]),t.prototype.init=function(){this.determinate_=!this.adapter_.hasClass(S.INDETERMINATE_CLASS),this.reverse_=this.adapter_.hasClass(S.REVERSED_CLASS),this.progress_=0},t.prototype.setDeterminate=function(e){this.determinate_=e,this.determinate_?(this.adapter_.removeClass(S.INDETERMINATE_CLASS),this.setScale_(this.adapter_.getPrimaryBar(),this.progress_)):(this.adapter_.addClass(S.INDETERMINATE_CLASS),this.setScale_(this.adapter_.getPrimaryBar(),1),this.setScale_(this.adapter_.getBuffer(),1))},t.prototype.setProgress=function(e){this.progress_=e,this.determinate_&&this.setScale_(this.adapter_.getPrimaryBar(),e)},t.prototype.setBuffer=function(e){this.determinate_&&this.setScale_(this.adapter_.getBuffer(),e)},t.prototype.setReverse=function(e){this.reverse_=e,this.reverse_?this.adapter_.addClass(S.REVERSED_CLASS):this.adapter_.removeClass(S.REVERSED_CLASS)},t.prototype.open=function(){this.adapter_.removeClass(S.CLOSED_CLASS)},t.prototype.close=function(){this.adapter_.addClass(S.CLOSED_CLASS)},t.prototype.setScale_=function(e,t){var n=this,r="scaleX("+t+")";E.forEach(function(t){n.adapter_.setStyle(e,t,r)})},t}(g),R=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),D=function(e){function t(){return a(this,t),c(this,e.apply(this,arguments))}return p(t,e),t.attachTo=function(e){return new t(e)},t.prototype.open=function(){this.foundation_.open()},t.prototype.close=function(){this.foundation_.close()},t.prototype.getDefaultFoundation=function(){var e=this;return new P({addClass:function(t){return e.root_.classList.add(t)},getPrimaryBar:function(){return e.root_.querySelector(P.strings.PRIMARY_BAR_SELECTOR)},getBuffer:function(){return e.root_.querySelector(P.strings.BUFFER_SELECTOR)},hasClass:function(t){return e.root_.classList.contains(t)},removeClass:function(t){return e.root_.classList.remove(t)},setStyle:function(e,t,n){return e.style[t]=n}})},R(t,[{key:"determinate",set:function(e){this.foundation_.setDeterminate(e)}},{key:"progress",set:function(e){this.foundation_.setProgress(e)}},{key:"buffer",set:function(e){this.foundation_.setBuffer(e)}},{key:"reverse",set:function(e){this.foundation_.setReverse(e)}}]),t}(O),T=n("rBz8"),L=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},N=function(e){function t(){u(this,t);var n=l(this,e.apply(this,arguments));return n.componentName="linear-progress",n.mdcProps=["reversed","indeterminate"],n.themeProps=["primary","secondary"],n.mdcNotifyProps=["progress"],n}return f(t,e),t.prototype.componentDidMount=function(){e.prototype.componentDidMount.call(this),this.control&&(this.MDComponent=new D(this.control),this.MDComponent.determinate=!this.props.indeterminate,this.MDComponent.reverse=!!this.props.reversed),this.afterComponentDidMount()},t.prototype.componentWillUpdate=function(t){e.prototype.componentWillUpdate.call(this,t),this.MDComponent&&(this.MDComponent.determinate=!this.props.indeterminate,this.MDComponent.reverse=!!t.reversed)},t.prototype.componentWillUnmount=function(){e.prototype.componentWillUnmount.call(this),this.MDComponent&&this.MDComponent.destroy()},t.prototype.materialDom=function(e){return Object(y.h)("div",L({role:"progressbar"},e,{ref:this.setControlRef}),Object(y.h)("div",{className:"mdc-linear-progress__buffering-dots"}),Object(y.h)("div",{className:"mdc-linear-progress__buffer"}),Object(y.h)("div",{className:"mdc-linear-progress__bar mdc-linear-progress__primary-bar"},Object(y.h)("span",{className:"mdc-linear-progress__bar-inner"})),Object(y.h)("div",{className:"mdc-linear-progress__bar mdc-linear-progress__secondary-bar"},Object(y.h)("span",{className:"mdc-linear-progress__bar-inner"})))},t}(T.a),A=(n("OyWS"),n("B/9r")),M=n("F4jb"),B=n("WtcB"),k=n.n(B),I=n("J9Pe"),W=n.n(I),x=n("7RV1"),F=n.n(x),U=n("Z+RO"),V=n.n(U);n.d(t,"default",function(){return re});var z=Object(y.h)("div",{className:"mdc-typography--display1"},"Sample code "),q=Object(y.h)(M.a,null,Object(y.h)("code",{class:"lang-js"},k.a)),J=Object(y.h)("div",{className:"mdc-typography--display1"},"Original documentation"),Y=Object(y.h)("div",{className:"mdc-typography--body"},"This component encapsulates"," ",Object(y.h)("span",{className:"strong"},"mdc-linear-progress"),", you can refer to its documentation",Object(y.h)("a",{href:"https://github.com/material-components/material-components-web/tree/master/packages/mdc-linear-progress"}," ","here"),"."),Z=Object(y.h)("div",{className:"mdc-typography--display1"},"Demo "),K=Object(y.h)("div",{className:"mdc-typography--title"},"Indeterminate "),X=Object(y.h)(N,{indeterminate:!0}),G=Object(y.h)(M.a,null,Object(y.h)("code",{class:"lang-html"},W.a)),H=Object(y.h)("div",{className:"mdc-typography--title"},"Reversed "),Q=Object(y.h)(N,{reversed:!0,indeterminate:!0}),$=Object(y.h)(M.a,null,Object(y.h)("code",{class:"lang-html"},F.a)),ee=Object(y.h)("div",{className:"mdc-typography--title"},"Progress "),te=Object(y.h)(N,{progress:.8,secondary:!0}),ne=Object(y.h)(M.a,null,Object(y.h)("code",{class:"lang-html"},V.a)),re=function(e){function t(){h(this,t);var n=d(this,e.call(this));return n.propsTable=[{component:"LinearProgress",props:[{name:"indeterminate",description:"Tells if the progress bar is running forever."},{name:"reversed",description:"Tells if the progress bar direction is reversed."},{name:"progress",description:"Sets the current progress of the progress bar."}]}],n}return m(t,e),t.prototype.render=function(){return Object(y.h)("div",null,Object(y.h)(A.a,{data:this.propsTable}),z,q,J,Y,Z,K,X,G,H,Q,$,ee,te,ne)},t}(y.Component)},WtcB:function(e){e.exports="import {h, Component} from 'preact';\nimport LinearProgress from 'preact-material-components/LinearProgress';\nimport 'preact-material-components/LinearProgress/style.css';\n\nexport default class SnackbarPage extends Component {\n  render(){\n    return (\n      <div>\n        <LinearProgress reversed />\n      </div>\n    );\n  }\n}\n"},"Z+RO":function(e){e.exports="<LinearProgress progress={0.8} secondary />\n"}});
//# sourceMappingURL=route-linear-progress.chunk.232c9.js.map