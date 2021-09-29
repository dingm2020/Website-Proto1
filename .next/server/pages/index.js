"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 215:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(297);
;// CONCATENATED MODULE: external "isomorphic-unfetch"
const external_isomorphic_unfetch_namespaceObject = require("isomorphic-unfetch");
var external_isomorphic_unfetch_default = /*#__PURE__*/__webpack_require__.n(external_isomorphic_unfetch_namespaceObject);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(282);
;// CONCATENATED MODULE: ./pages/index.js




/* harmony default export */ const pages = (class extends external_react_.Component {
  static async getInitialProps() {
    const res = await external_isomorphic_unfetch_default()("https://random.dog/woof.json?filter=mp4,webm");
    const data = await res.json();
    return {
      imageURL: data.url
    };
  }

  render() {
    return (
      /*#__PURE__*/
      //<div>Your Next.js App</div>
      (0,jsx_runtime_.jsxs)("div", {
        className: "homepage-wrapper",
        children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
          children: "Random Dog Image"
        }), /*#__PURE__*/jsx_runtime_.jsx("img", {
          src: this.props.imageURL
        })]
      })
    );
  }

});

/***/ }),

/***/ 297:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 282:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(215));
module.exports = __webpack_exports__;

})();