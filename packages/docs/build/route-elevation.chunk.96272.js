webpackJsonp([17],{"56Xb":function(){},Bfdu:function(e){e.exports="import {h, Component} from 'preact';\nimport Elevation from 'preact-material-components/Elevation';\nimport 'preact-material-components/Elevation/style.css';\n\nexport default class ElevationPage extends Component {\n  render(){\n    return (\n      <div>\n        <Elevation z={0}>Z0</Elevation>\n        <Elevation z={1}>Z1</Elevation>\n        <Elevation z={2}>Z2</Elevation>\n      </div>\n    );\n  }\n}\n"},GEM3:function(e,t,n){"use strict";function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});for(var p=n("KM04"),s=n("rBz8"),l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},u=[],f=0;f<25;f++)u.push("z"+f);var h=function(e){function t(){var t=o(this,e.apply(this,arguments));return t.componentName="elevation",t.mdcProps=u,t}return r(t,e),t.prototype.materialDom=function(e){var t=void 0;return e.z&&(t="mdc-elevation--z"+e.z),Object(p.h)("p",l({className:t},e,{ref:this.setControlRef}),e.children)},t}(s.a),b=(n("LTN3"),n("B/9r")),m=n("F4jb"),d=(n("56Xb"),n("Bfdu")),y=n.n(d);n.d(t,"default",function(){return T});var v=Object(p.h)("div",{className:"mdc-typography--display1"},"Sample code "),O=Object(p.h)(m.a,null,Object(p.h)("code",{class:"lang-js"},y.a)),j=Object(p.h)("div",{className:"mdc-typography--display1"},"Original documentation"),E=Object(p.h)("div",{className:"mdc-typography--body"},"This component encapsulates"," ",Object(p.h)("span",{className:"strong"},"mdc-elevation"),", you can refer to its documentation",Object(p.h)("a",{href:"https://github.com/material-components/material-components-web/tree/master/packages/mdc-elevation"}," ","here"),"."),g=Object(p.h)("div",{className:"mdc-typography--display1"},"Demo "),w=Object(p.h)(h,{z:0},"Z0"),z=Object(p.h)(h,{z:1},"Z1"),N=Object(p.h)(h,{z:2},"Z2"),_=Object(p.h)(h,{z:3},"Z3"),P=Object(p.h)(h,{z:4},"Z4"),T=function(e){function t(){a(this,t);var n=c(this,e.call(this));return n.propsTable=[{component:"Elevation",props:[{name:"z",value:"0 to 24",description:"Add z=(0 to 24) to get different elevations."}]}],n}return i(t,e),t.prototype.render=function(){return Object(p.h)("div",{className:"page-elevation"},Object(p.h)(b.a,{data:this.propsTable}),v,O,j,E,g,w,z,N,_,P)},t}(p.Component)},LTN3:function(){}});
//# sourceMappingURL=route-elevation.chunk.96272.js.map