"use strict";
(self["webpackChunkanother_password_generator"] = self["webpackChunkanother_password_generator"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss ***!
  \************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  --selection-color-danger: #f14668;
  --selection-color-warning: #ffe08a;
  --selection-color-info: #3e8ed0;
  --selection-color-success: #48c78e;
}

::selection {
  color: #ffffff;
  background-color: #485fc7;
  border-radius: 4px;
}

html,
body {
  color: #444;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  font-family: "Open Sans", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
  font-size: 16px;
  background-color: #ffffff;
  scroll-behavior: smooth;
  scroll-snap-type: y mandatory;
}

.title,
.subtitle {
  font-family: "Kode Mono", monospace;
  color: inherit;
}

.section {
  padding: 2rem 2rem;
}

.is-fullheight {
  min-height: 100vh;
}

.is-fullwidth {
  min-width: 100%;
}

.notification {
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #ffe645;
  opacity: 1;
  z-index: 100;
  box-shadow: 0 0 10px #444;
  transition: visibility 0s, opacity 0.3s linear;
}
.notification.is-invisible {
  opacity: 0;
}

#pwd-type-selector-tab {
  margin-bottom: 0;
}
#pwd-type-selector-tab ul {
  border-bottom-width: 0;
}

#pwd-settings-box {
  min-height: 362px;
}

.tabs li.is-active a {
  font-weight: bold;
  color: #485fc7;
  border-bottom-color: #485fc7;
}
.tabs li.is-active a:hover {
  text-shadow: none;
  border-bottom-width: 2px;
  border-bottom-color: #485fc7;
}
.tabs li a {
  margin-bottom: 0px;
  border-bottom-width: 2px;
  border-bottom-color: transparent;
  color: #a89d91;
}
.tabs li a:hover {
  text-shadow: #485fc7 1px 0 10px;
  border-bottom-width: 2px;
  border-bottom-color: transparent;
}

#pwd-strength-tagbox {
  position: absolute;
  bottom: 2px;
  left: 0px;
  border-top-right-radius: 6px;
}

#pwd-actions-box {
  display: flex;
  position: absolute;
  bottom: 3px;
  right: 0px;
}
#pwd-actions-box .action {
  padding: 0 0.3rem;
  color: #485fc7;
}
#pwd-actions-box .action:hover {
  color: #444;
  text-shadow: 0 0 5px #485fc7;
}

#pwd-strength {
  position: absolute;
  bottom: 0px;
  left: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  height: 2px;
}

.pwd-container {
  font-size: 2rem;
  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: space-between;
}
.pwd-container.is-danger ::selection {
  background-color: var(--selection-color-danger);
}
.pwd-container.is-warning ::selection {
  background-color: var(--selection-color-warning);
}
.pwd-container.is-info ::selection {
  background-color: var(--selection-color-info);
}
.pwd-container.is-success ::selection {
  background-color: var(--selection-color-success);
}
.pwd-container ::selection {
  color: #ffffff;
  background-color: var(--selection-color-danger);
  border-radius: 4px;
}

#settings-password-length {
  width: 64px;
}

#settings-password-length-range {
  width: 100%;
}

.settings-container {
  background-color: #a89d91;
  color: #ffffff;
  border-radius: 10px;
  border: 2px solid #485fc7;
  padding: 1rem;
}
.settings-container ::selection {
  color: #ffffff;
  background: #485fc7;
  border-radius: 4px;
}
.settings-container .checkbox:hover,
.settings-container .radio:hover {
  color: #444;
}

.footer {
  border-top: 2px solid #245494;
  background-color: #7ca7df;
}

.is-owerflow-auto {
  overflow: auto;
}

.is-word-break-all {
  word-break: break-all;
}

input + span.toggle {
  position: relative;
  display: inline-block;
  height: 24px;
  width: 40px;
  margin-bottom: -6px;
  margin-left: -24px;
  background: #eee;
  border-radius: 100vh;
  color: #485fc7;
}
input + span.toggle:before {
  content: " ";
  position: absolute;
  top: 4px;
  left: 4px;
  right: auto;
  height: 16px;
  width: 16px;
  background: #bbb;
  border-radius: 100vh;
  transition: all 0.4s ease-in-out;
}
input:checked + span.toggle:before {
  left: 20px;
  background: #485fc7;
  transition: all 0.4s ease-in-out;
}`, "",{"version":3,"sources":["webpack://./src/styles/style.scss"],"names":[],"mappings":"AAeA;EASC,iCAAA;EACA,kCAAA;EACA,+BAAA;EACA,kCAAA;AArBD;;AAwBA;EACC,cA3BiB;EA4BjB,yBA7Bc;EA8Bd,kBAAA;AArBD;;AAwBA;;EAEC,WAhCW;EAiCX,SAAA;EACA,UAAA;EACA,WAAA;EACA,YAAA;EACA,oCAAA;EACA,yBAAA;EACA,gBAAA;EACA,kBAAA;EACA,eAAA;EACA,yBA5CiB;EA6CjB,uBAAA;EACA,6BAAA;AArBD;;AAwBA;;EAEC,mCAAA;EACA,cAAA;AArBD;;AAwBA;EACC,kBAAA;AArBD;;AAwBA;EACC,iBAAA;AArBD;;AAwBA;EACC,eAAA;AArBD;;AAwBA;EACC,eAAA;EACA,MAAA;EACA,WAAA;EACA,yBAAA;EACA,UAAA;EACA,YAAA;EACA,yBAAA;EAEA,8CACC;AAvBF;AA0BC;EACC,UAAA;AAxBF;;AA2BA;EACC,gBAAA;AAxBD;AA0BC;EACC,sBAAA;AAxBF;;AA4BA;EACC,iBAAA;AAzBD;;AA+BE;EACC,iBAAA;EACA,cAtGY;EAuGZ,4BAvGY;AA2Ef;AA8BG;EACC,iBAAA;EACA,wBAAA;EACA,4BA5GW;AAgFf;AAiCC;EACC,kBAAA;EACA,wBAAA;EACA,gCAAA;EACA,cAtHe;AAuFjB;AAiCE;EACC,+BAAA;EAGA,wBAAA;EACA,gCAAA;AAjCH;;AAyCA;EACC,kBAAA;EACA,WAAA;EACA,SAAA;EACA,4BAAA;AAtCD;;AAyCA;EACC,aAAA;EACA,kBAAA;EACA,WAAA;EACA,UAAA;AAtCD;AAwCC;EACC,iBAAA;EACA,cAnJa;AA6Gf;AAyCE;EACC,WApJS;EAqJT,4BAAA;AAvCH;;AA4CA;EACC,kBAAA;EACA,WAAA;EACA,SAAA;EACA,2BAAA;EACA,4BAAA;EACA,8BAAA;EACA,+BAAA;EACA,WAAA;AAzCD;;AA4CA;EACC,eAAA;EACA,aAAA;EACA,mBAAA;EACA,qBAAA;EACA,8BAAA;AAzCD;AA6CE;EACC,+CAAA;AA3CH;AA+CE;EACC,gDAAA;AA7CH;AAiDE;EACC,6CAAA;AA/CH;AAmDE;EACC,gDAAA;AAjDH;AAqDC;EACC,cArMgB;EAsMhB,+CAAA;EACA,kBAAA;AAnDF;;AAuDA;EACC,WAAA;AApDD;;AAsDA;EACC,WAAA;AAnDD;;AAsDA;EACC,yBArNgB;EAsNhB,cApNiB;EAqNjB,mBAAA;EACA,yBAAA;EACA,aAAA;AAnDD;AAsDC;EACC,cA3NgB;EA4NhB,mBA7Na;EA8Nb,kBAAA;AApDF;AAuDC;;EAEC,WAhOU;AA2KZ;;AA0DA;EACC,6BAAA;EACA,yBAAA;AAvDD;;AA0DA;EACC,cAAA;AAvDD;;AA0DA;EACC,qBAAA;AAvDD;;AA2DC;EACC,kBAAA;EACA,qBAAA;EACA,YAAA;EACA,WAAA;EACA,mBAAA;EACA,kBAAA;EACA,gBAAA;EACA,oBAAA;EACA,cA/Pa;AAuMf;AA0DE;EACC,YAAA;EACA,kBAAA;EACA,QAAA;EACA,SAAA;EACA,WAAA;EACA,YAAA;EACA,WAAA;EACA,gBAAA;EACA,oBAAA;EACA,gCAAA;AAxDH;AA2DC;EACC,UAAA;EACA,mBAhRa;EAiRb,gCAAA;AAzDF","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap\");\n\n$secondaryColor: #a89d91;\n$primaryColor: #485fc7;\n$backgroundColor: #ffffff;\n\n$textColor: #444;\n$linkColor: $primaryColor;\n\n$colorDanger: #f14668;\n$colorWarning: #ffe08a;\n$colorInfo: #3e8ed0;\n$colorSuccess: #48c78e;\n\n\n:root {\n\t// --bulma-primary-h: 172deg;\n\t// --bulma-link-h: 229deg;\n\t// --bulma-link-s: 53%;\n\t// --bulma-link-l: 53%;\n\t// --bulma-info-h: 199deg;\n\t// --bulma-success-h: 154deg;\n\t// --bulma-warning-h: 43deg;\n\t// --bulma-danger-h: 349deg;\n\t--selection-color-danger: #f14668;\n\t--selection-color-warning: #ffe08a;\n\t--selection-color-info: #3e8ed0;\n\t--selection-color-success: #48c78e;\n}\n\n::selection {\n\tcolor: $backgroundColor;\n\tbackground-color: $linkColor;\n\tborder-radius: 4px;\n}\n\nhtml,\nbody {\n\tcolor: $textColor;\n\tmargin: 0;\n\tpadding: 0;\n\twidth: 100%;\n\theight: 100%;\n\tfont-family: \"Open Sans\", sans-serif;\n\tfont-optical-sizing: auto;\n\tfont-weight: 400;\n\tfont-style: normal;\n\tfont-size: 16px;\n\tbackground-color: $backgroundColor;\n\tscroll-behavior: smooth;\n\tscroll-snap-type: y mandatory;\n}\n\n.title,\n.subtitle {\n\tfont-family: \"Kode Mono\", monospace;\n\tcolor: inherit;\n}\n\n.section {\n\tpadding: 2rem 2rem;\n}\n\n.is-fullheight {\n\tmin-height: 100vh;\n}\n\n.is-fullwidth {\n\tmin-width: 100%;\n}\n\n.notification {\n\tposition: fixed;\n\ttop: 0;\n\twidth: 100%;\n\tbackground-color: #ffe645;\n\topacity: 1;\n\tz-index: 100;\n\tbox-shadow: 0 0 10px $textColor;\n\n\ttransition:\n\t\tvisibility 0s,\n\t\topacity 0.3s linear;\n\n\t&.is-invisible {\n\t\topacity: 0;\n\t}\n}\n#pwd-type-selector-tab {\n\tmargin-bottom: 0;\n\n\tul {\n\t\tborder-bottom-width: 0;\n\t}\n}\n\n#pwd-settings-box {\n\tmin-height: 362px;\n}\n\n.tabs li {\n\n\t&.is-active {\n\t\ta {\n\t\t\tfont-weight: bold;\n\t\t\tcolor: $linkColor;\n\t\t\tborder-bottom-color: $linkColor;\n\n\t\t\t&:hover {\n\t\t\t\ttext-shadow: none;\n\t\t\t\tborder-bottom-width: 2px;\n\t\t\t\tborder-bottom-color: $linkColor;\n\t\t\t}\n\t\t}\n\t}\n\n\ta {\n\t\tmargin-bottom: 0px;\n\t\tborder-bottom-width: 2px;\n\t\tborder-bottom-color: transparent;\n\t\tcolor: $secondaryColor;\n\n\t\t&:hover {\n\t\t\ttext-shadow: $linkColor 1px 0 10px;\n\t\t\t// font-weight: bold;\n\t\t\t// color: $linkColor;\n\t\t\tborder-bottom-width: 2px;\n\t\t\tborder-bottom-color: transparent;\n\t\t\t// transition: 1s;\n\t\t\t// -webkit-transition: 1s;\n\t\t}\n\t}\n}\n\n\n#pwd-strength-tagbox {\n\tposition: absolute;\n\tbottom: 2px;\n\tleft: 0px;\n\tborder-top-right-radius: 6px;\n}\n\n#pwd-actions-box {\n\tdisplay: flex;\n\tposition: absolute;\n\tbottom: 3px;\n\tright: 0px;\n\n\t.action {\n\t\tpadding: 0 .3rem;\n\t\tcolor: $linkColor;\n\t\t// font-size: x-large;\n\n\t\t&:hover {\n\t\t\tcolor: $textColor;\n\t\t\ttext-shadow: 0 0 5px $primaryColor;\n\t\t}\n\t}\n}\n\n#pwd-strength {\n\tposition: absolute;\n\tbottom: 0px;\n\tleft: 0px;\n\tborder-top-left-radius: 0px;\n\tborder-top-right-radius: 0px;\n\tborder-bottom-left-radius: 6px;\n\tborder-bottom-right-radius: 6px;\n\theight: 2px;\n}\n\n.pwd-container {\n\tfont-size: 2rem;\n\tdisplay: flex;\n\tflex-direction: row;\n\talign-items: baseline;\n\tjustify-content: space-between;\n\n\n\t&.is-danger {\n\t\t::selection {\n\t\t\tbackground-color: var(--selection-color-danger);\n\t\t}\n\t}\n\t&.is-warning {\n\t\t::selection {\n\t\t\tbackground-color: var(--selection-color-warning);\n\t\t}\n\t}\n\t&.is-info {\n\t\t::selection {\n\t\t\tbackground-color: var(--selection-color-info);\n\t\t}\n\t}\n\t&.is-success {\n\t\t::selection {\n\t\t\tbackground-color: var(--selection-color-success);\n\t\t}\n\t}\n\t\n\t::selection {\n\t\tcolor: $backgroundColor;\n\t\tbackground-color: var(--selection-color-danger);\n\t\tborder-radius: 4px;\n\t}\n}\n\n#settings-password-length {\n\twidth: 64px;\n}\n#settings-password-length-range {\n\twidth: 100%;\n}\n\n.settings-container {\n\tbackground-color: $secondaryColor;\n\tcolor: $backgroundColor;\n\tborder-radius: 10px;\n\tborder: 2px solid $primaryColor;\n\tpadding: 1rem;\n\t// box-shadow: 0 2px 10px $primaryColor;\n\n\t::selection {\n\t\tcolor: $backgroundColor;\n\t\tbackground: $primaryColor;\n\t\tborder-radius: 4px;\n\t}\n\n\t.checkbox:hover,\n\t.radio:hover {\n\t\tcolor: $textColor;\n\t\t// text-shadow: 0 0 5px $backgroundColor;\n\t}\n}\n\n.footer {\n\tborder-top: 2px solid #245494;\n\tbackground-color: #7ca7df;\n}\n\n.is-owerflow-auto {\n\toverflow: auto;\n}\n\n.is-word-break-all {\n\tword-break: break-all;\n}\n\ninput {\n\t+ span.toggle {\n\t\tposition: relative;\n\t\tdisplay: inline-block;\n\t\theight: 24px;\n\t\twidth: 40px;\n\t\tmargin-bottom: -6px;\n\t\tmargin-left: -24px;\n\t\tbackground: #eee;\n\t\tborder-radius: 100vh;\n\t\tcolor: $primaryColor; \n\t\t\n\t\t&:before {\n\t\t\tcontent: \" \";\n\t\t\tposition: absolute;\n\t\t\ttop: 4px;\n\t\t\tleft: 4px;\n\t\t\tright: auto;\n\t\t\theight: 16px;\n\t\t\twidth: 16px;\n\t\t\tbackground: #bbb;\n\t\t\tborder-radius: 100vh;\n\t\t\ttransition: all 0.4s ease-in-out;\n\t\t}\n\t}\n\t&:checked + span.toggle:before {\n\t\tleft: 20px;\n\t\tbackground: $primaryColor;\n\t\ttransition: all 0.4s ease-in-out;\n\t}\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/style.scss":
/*!*******************************!*\
  !*** ./src/styles/style.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/scripts/genearators/passphrase/generator.js":
/*!*********************************************************!*\
  !*** ./src/scripts/genearators/passphrase/generator.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Passphrase)
/* harmony export */ });
class Passphrase {
    constructor(wordList, wordCount = 4, separator = '-', includeNumbers = false, capitalize = false) {
        this.wordList = wordList;
        this.wordCount = wordCount;
        this.separator = separator;
        this.includeNumbers = includeNumbers;
        this.capitalize = capitalize;
    }

    generate() {
        let passphrase = [];
        for (let i = 0; i < this.wordCount; i++) {
            let word = this.wordList[Math.floor(Math.random() * this.wordList.length)];
            if (this.capitalize) {
                word = this.#randomCapitalize(word);
            }
            passphrase.push(word);
        }

        if (this.includeNumbers) {
            passphrase.push(Math.floor(Math.random() * 100));
        }

        return {
            passphrase: passphrase.join(this.separator),
            strength: this.#getStrength(),
        }
    }

    #randomCapitalize(word) {
        return word
            .split('')
            .map(char => (Math.random() < 0.5 ? char.toUpperCase() : char))
            .join('');
    }

    #getStrength() {
        let entropy = this.wordCount * Math.log2(this.wordList.length);
        if (this.includeNumbers) entropy += Math.log2(100);
        if (this.capitalize) entropy += this.wordCount * 1.5; // Approximate extra entropy from capitalization
        return entropy;
    }
}


/***/ }),

/***/ "./src/scripts/genearators/passphrase/index.js":
/*!*****************************************************!*\
  !*** ./src/scripts/genearators/passphrase/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PASSPHRASE_WORDLIST: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_1__.PASSPHRASE_WORDLIST),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _generator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generator */ "./src/scripts/genearators/passphrase/generator.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/scripts/genearators/passphrase/utils.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_generator__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./src/scripts/genearators/passphrase/utils.js":
/*!*****************************************************!*\
  !*** ./src/scripts/genearators/passphrase/utils.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PASSPHRASE_WORDLIST: () => (/* binding */ PASSPHRASE_WORDLIST)
/* harmony export */ });
const PASSPHRASE_WORDLIST = [
    "apple", "banana", "cherry", "delta", "echo", "foxtrot", "golf", "hotel", "india", "juliet",
    "kangaroo", "lemon", "mango", "nectar", "orange", "papaya", "quasar", "raspberry", "strawberry", "tango",
    "umbrella", "violet", "walnut", "xenon", "yankee", "zebra", "albatross", "butterfly", "coconut", "dragon",
    "elephant", "firefly", "gorilla", "horizon", "igloo", "jackal", "koala", "lightning", "mountain", "nebula",
    "ocean", "penguin", "quokka", "rainbow", "sapphire", "topaz", "unicorn", "volcano", "whirlpool", "xerox",
    "yellow", "zeppelin", "asteroid", "blizzard", "comet", "dolphin", "emerald", "falcon", "galaxy", "hurricane",
    "illusion", "jungle", "kingdom", "lighthouse", "meteor", "november", "octopus", "paradise", "quicksand",
    "riptide", "sunshine", "thunder", "undertow", "vortex", "whale", "xylophone", "yeti", "zenith", "avalanche",
    "blueberry", "cosmos", "daylight", "everest", "firestorm", "glacier", "hummingbird", "isotope", "jigsaw",
    "krypton", "labyrinth", "mirage", "nightfall", "obsidian", "puzzle", "quantum", "relic", "starlight",
    "telescope", "utopia", "voyager", "windswept", "xenophile", "yonder", "zeppelin"
];

/***/ }),

/***/ "./src/scripts/genearators/password/generator.js":
/*!*******************************************************!*\
  !*** ./src/scripts/genearators/password/generator.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Password)
/* harmony export */ });
class Password {
    constructor(availableChars, passwordLength) {
        this.availableChars = availableChars;
        this.passwordLength = passwordLength;
    }

    generate() {
        if (this.availableChars.size === 0) {
            throw new Error('No characters available to generate password');
        }

        const charsArray = Array.from(this.availableChars);
        const randomValues = crypto.getRandomValues(new Uint32Array(this.passwordLength));

        const password = Array.from({ length: this.passwordLength }, (_, i) => {
            return String.fromCharCode(charsArray[randomValues[i] % charsArray.length]);
        }).join('');

        return {
            password,
            strength: this.#calculateStrength(password),
        }

    }

    #calculateStrength(password) {
        const uniqueChars = new Set(password).size;
        const entropy = password.length * Math.log2(uniqueChars);
        return entropy.toFixed(2);

    }
}

/***/ }),

/***/ "./src/scripts/genearators/password/index.js":
/*!***************************************************!*\
  !*** ./src/scripts/genearators/password/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LOWERCASE: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_1__.LOWERCASE),
/* harmony export */   NUMBERS: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_1__.NUMBERS),
/* harmony export */   SIMILAR_CHARS: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_1__.SIMILAR_CHARS),
/* harmony export */   SPECIAL_CHARACTERS: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_1__.SPECIAL_CHARACTERS),
/* harmony export */   UPPERCASE: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_1__.UPPERCASE),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _generator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generator */ "./src/scripts/genearators/password/generator.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/scripts/genearators/password/utils.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_generator__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./src/scripts/genearators/password/utils.js":
/*!***************************************************!*\
  !*** ./src/scripts/genearators/password/utils.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LOWERCASE: () => (/* binding */ LOWERCASE),
/* harmony export */   NUMBERS: () => (/* binding */ NUMBERS),
/* harmony export */   SIMILAR_CHARS: () => (/* binding */ SIMILAR_CHARS),
/* harmony export */   SPECIAL_CHARACTERS: () => (/* binding */ SPECIAL_CHARACTERS),
/* harmony export */   UPPERCASE: () => (/* binding */ UPPERCASE)
/* harmony export */ });
const NUMBERS = new Uint8Array([48, 49, 50, 51, 52, 53, 54, 55, 56, 57]);
const LOWERCASE = new Uint8Array([
    97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120,
    121, 122,
]);
const UPPERCASE = new Uint8Array([
    65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90,
]);
const SPECIAL_CHARACTERS = new Uint8Array([33, 35, 36, 37, 38, 40, 41, 42, 43, 64, 94]);
const SIMILAR_CHARS = {
    0: [48, 79, 111, 73, 105], // 0, O, l, I
    1: [49, 76, 108], // 1, l, I
    5: [53, 83, 115, 56, 88], // 5, S, s, 8, B
    6: [54, 66, 98], // 6, b, B
    8: [56, 66, 98], // 8, B, b
    9: [57, 71, 103, 54, 66], // 9, g, G, 6, b
    a: [97, 64, 65], // a, @, A
    e: [101, 67, 99], // e, c, C
    g: [103, 81, 113, 57], // g, q, Q, 9
    l: [108, 49, 73, 105], // l, 1, I, i
    o: [111, 48, 79, 97, 65], // o, 0, O, a, A
    s: [115, 53, 83], // s, 5, S
    t: [116, 55, 84], // t, 7, T
    z: [122, 50], // z, 2
};



/***/ }),

/***/ "./src/scripts/index.js":
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/style.scss */ "./src/styles/style.scss");
/* harmony import */ var _images_favicon_ico__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/favicon.ico */ "./src/images/favicon.ico");
/* harmony import */ var _images_favicon_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/favicon.png */ "./src/images/favicon.png");
/* harmony import */ var _images_share_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/share.png */ "./src/images/share.png");
/* harmony import */ var _genearators_password__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./genearators/password */ "./src/scripts/genearators/password/index.js");
/* harmony import */ var _genearators_passphrase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./genearators/passphrase */ "./src/scripts/genearators/passphrase/index.js");
// load styles


// load sitemap & robots
const sitemap = __webpack_require__(/*! ../../sitemap.xml */ "./sitemap.xml");
const robots = __webpack_require__(/*! ../../robots.txt */ "./robots.txt");

// load images







let availableChars = [];

const pwdGeneratedEl = document.getElementById('pwd-generated');
const notificationEl = document.getElementById('notification');
const actionRedoEl = document.getElementById('action-redo');
const notificationDeleteBtnEl = document.querySelector('.notification button.delete');
const settingsPasswordLengthRangeEl = document.getElementById('settings-password-length-range');
const settingsPassphraseLengthRangeEl = document.getElementById('settings-passphrase-length-range');
const settingsPasswordLengthEl = document.getElementById('settings-password-length');
const pwdContainerEl = document.getElementById('pwd-container');
const settingsPassphraseSeparatorEl = document.getElementById('settings-passphrase-separator');
const settingsPassphraseLengthEl = document.getElementById('settings-passphrase-length');
const pwdGeneratedStrengthEl = document.getElementById('pwd-strength');
const pwdGeneratedStrengthTagBoxEl = document.getElementById('pwd-strength-tagbox');
const pwdGeneratedStrengthTagEl = document.getElementById('pwd-strength-tag');
const settingsAllowNumbersEl = document.getElementById('settings-allow-numbers');
const settingsPassphraseCapitalizeEl = document.getElementById('settings-passphrase-capitalize');
const settingsPassphraseIncludeNumbersEl = document.getElementById('settings-passphrase-include-numbers');
const settingsAllowUppercaseEl = document.getElementById('settings-allow-uppercase');
const settingsAllowLowercaseEl = document.getElementById('settings-allow-lowercase');
const settingsAllowSymbolsEl = document.getElementById('settings-allow-symbols');
const settingsExcludeDuplicateEl = document.getElementById('settings-exclude-duplicate-characters');
const settingsExcludeSimilarEl = document.getElementById('settings-exclude-similar-characters');


function getPasswordLength() {
  const length = settingsPasswordLengthEl.value;
  try {
    return parseInt(length || settingsPasswordLengthEl.getAttribute('placeholder'));
  } catch (err) {
    console.error('error', e);
  }
  return 0;
}

function getPassphraseLength() {
  const length = settingsPassphraseLengthEl.value;
  try {
    return parseInt(length || settingsPassphraseLengthEl.getAttribute('placeholder'));
  } catch (err) {
    console.error('error', e);
  }
  return 0;
}

function getPassphraseSeparator() {
  const separator = settingsPassphraseSeparatorEl.value;
  try {
    return separator || settingsPassphraseSeparatorEl.getAttribute('placeholder');
  } catch (err) {
    console.error('error', e);
  }
  return '-';
}

function validateAvailableCharsLength() {
  if (availableChars.length === 0) {
    actionRedoEl.classList.add('is-invisible');
    return;
  }
  actionRedoEl.classList.remove('is-invisible');
}

function updateAvailableChars() {
  console.time('updateAvailableChars');
  availableChars = new Set();

  if (settingsAllowNumbersEl.checked) availableChars = new Set([...availableChars, ..._genearators_password__WEBPACK_IMPORTED_MODULE_4__.NUMBERS]);
  if (settingsAllowUppercaseEl.checked) availableChars = new Set([...availableChars, ..._genearators_password__WEBPACK_IMPORTED_MODULE_4__.UPPERCASE]);
  if (settingsAllowLowercaseEl.checked) availableChars = new Set([...availableChars, ..._genearators_password__WEBPACK_IMPORTED_MODULE_4__.LOWERCASE]);
  if (settingsAllowSymbolsEl.checked) availableChars = new Set([...availableChars, ..._genearators_password__WEBPACK_IMPORTED_MODULE_4__.SPECIAL_CHARACTERS]);

  validateAvailableCharsLength();
  console.timeEnd('updateAvailableChars');
}

function showNotification() {
  notificationEl.classList.remove('is-invisible');
  setTimeout(() => {
    notificationEl.classList.add('is-invisible');
  }, 10000);
}

async function copyToClipboard() {
  try {
    await navigator.clipboard.writeText(pwdGeneratedEl.innerText);
    showNotification();
  } catch (err) {
    console.error('Error copying text: ', err);
  }
}

function createPassword() {
  if (availableChars.size === 0) {
    return '';
  }
  const passwordLength = getPasswordLength();
  const generator = new _genearators_password__WEBPACK_IMPORTED_MODULE_4__["default"](availableChars, passwordLength);
  return generator.generate();
}

function createPassphrase() {
  const passphraseLength = getPassphraseLength();
  const separator = getPassphraseSeparator();
  const capitalize = settingsPassphraseCapitalizeEl.checked;
  const includeNumbers = settingsPassphraseIncludeNumbersEl.checked;
  const generator = new _genearators_passphrase__WEBPACK_IMPORTED_MODULE_5__["default"](_genearators_passphrase__WEBPACK_IMPORTED_MODULE_5__.PASSPHRASE_WORDLIST, passphraseLength, separator, includeNumbers, capitalize);
  return generator.generate()
}

function updatePasswordSettings() {
  const pwdMode = document.querySelector('input[name="pwd-mode"]:checked').value;
  switch (pwdMode) {
    case 'easy-to-read': {
      settingsExcludeSimilarEl.checked = true;
      settingsExcludeDuplicateEl.checked = false;

      settingsAllowNumbersEl.checked = false;
      settingsAllowUppercaseEl.checked = true;
      settingsAllowLowercaseEl.checked = true;
      settingsAllowSymbolsEl.checked = false;
      break;
    }
    case 'easy-to-say': {
      settingsExcludeSimilarEl.checked = false;
      settingsExcludeDuplicateEl.checked = false;

      settingsAllowNumbersEl.checked = false;
      settingsAllowUppercaseEl.checked = true;
      settingsAllowLowercaseEl.checked = true;
      settingsAllowSymbolsEl.checked = false;
      break;
    }
    case 'all-characters':
    default: {
      settingsExcludeSimilarEl.checked = false;
      settingsExcludeDuplicateEl.checked = false;

      settingsAllowNumbersEl.checked = true;
      settingsAllowUppercaseEl.checked = true;
      settingsAllowLowercaseEl.checked = true;
      settingsAllowSymbolsEl.checked = true;
      break;
    }
  }
  updateAvailableChars();
}

function setStrength(strength) {
  pwdGeneratedStrengthEl.classList.remove(
    'is-danger',
    'is-warning',
    'is-info',
    'is-success',
  );
  pwdContainerEl.classList.remove(
    'is-danger',
    'is-warning',
    'is-info',
    'is-success',
  );
  pwdGeneratedStrengthTagBoxEl.classList.remove(
    'has-background-danger',
    'has-background-warning',
    'has-background-info',
    'has-background-success',
    'has-text-danger-light',
    'has-text-warning-dark',
    'has-text-info-light',
    'has-text-success-light'
  );

  if (strength < 28) {
    pwdContainerEl.classList.add('is-danger'); // Molto debole
    pwdGeneratedStrengthEl.classList.add('is-danger'); // Molto debole
    pwdGeneratedStrengthTagBoxEl.classList.add('has-background-danger', 'has-text-danger-light'); // Molto debole
    pwdGeneratedStrengthTagEl.innerText = 'Too easy to guess';
  } else if (strength < 36) {
    pwdContainerEl.classList.add('is-warning'); // Debole
    pwdGeneratedStrengthEl.classList.add('is-warning'); // Debole
    pwdGeneratedStrengthTagBoxEl.classList.add('has-background-warning', 'has-text-warning-dark'); // Debole
    pwdGeneratedStrengthTagEl.innerText = 'At risk of being compromised';

  } else if (strength < 60) {
    pwdContainerEl.classList.add('is-info'); // Buona
    pwdGeneratedStrengthEl.classList.add('is-info'); // Buona
    pwdGeneratedStrengthTagBoxEl.classList.add('has-background-info', 'has-text-info-light'); // Buona
    pwdGeneratedStrengthTagEl.innerText = 'Secure for normal use';

  } else {
    pwdContainerEl.classList.add('is-success'); // Molto sicura
    pwdGeneratedStrengthEl.classList.add('is-success'); // Molto sicura
    pwdGeneratedStrengthTagBoxEl.classList.add('has-background-success', 'has-text-success-light'); // Molto sicura
    pwdGeneratedStrengthTagEl.innerText = 'Protects against hacking attempts';
  }
}

function togglePwdType(event) {
  if (event.target.parentElement.classList.contains('is-active')) {
    return;
  }

  document.querySelectorAll('#pwd-type-selector-tab li a').forEach(el => el.parentElement.classList.remove('is-active'));
  const type = event.target.getAttribute('data-type');
  document.querySelectorAll('.settings').forEach(el => {
    if (!el.classList.contains('is-hidden')) {
      el.classList.add('is-hidden')
    }
  });
  document.getElementById(`${type}-settings`).classList.remove('is-hidden');
  event.target.parentElement.classList.add('is-active');

  handlePasswordCreation();
}

function bindEvents() {
  settingsPasswordLengthRangeEl.addEventListener('input', () => {
    settingsPasswordLengthEl.value = settingsPasswordLengthRangeEl.value;
    handlePasswordCreation()
  });
  settingsPassphraseLengthRangeEl.addEventListener('input', () => {
    settingsPassphraseLengthEl.value = settingsPassphraseLengthRangeEl.value;
    handlePasswordCreation()
  });
  settingsPassphraseSeparatorEl.addEventListener('keyup', () => {
    handlePasswordCreation();
  });

  settingsPasswordLengthEl.addEventListener('change', () => {
    if (settingsPasswordLengthEl.value < 1) {
      settingsPasswordLengthEl.value = 1;
    }
    if (settingsPasswordLengthEl.value > 256) {
      settingsPasswordLengthEl.value = 256;
    }
    settingsPasswordLengthRangeEl.value = settingsPasswordLengthEl.value;
    handlePasswordCreation();
  });

  notificationDeleteBtnEl.addEventListener('click', () => {
    notificationEl.classList.add('is-invisible');
  });

  actionRedoEl.addEventListener('click', handlePasswordCreation);

  document.getElementById('action-copy-to-clipboard').addEventListener('click', copyToClipboard);

  for (let el of document.getElementsByClassName('setting-element')) {
    el.addEventListener('change', () => {
      updateAvailableChars();
      handlePasswordCreation();
    });
  }

  for (let el of document.getElementsByClassName('setting-pwd-mode')) {
    el.addEventListener('change', () => {
      updatePasswordSettings()
      handlePasswordCreation()
    });
  }

  document.querySelectorAll('#pwd-type-selector-tab li a').forEach((el) => {
    el.addEventListener('click', togglePwdType);
  });
}

function writeWellcomeMessage() {
  const wellcomeMessageSettings = 'color:#485fc7; font-size: 16px; font-weight: 700; font-family: monospace';
  console.log('%c⠀⠀⠀ ⠀⠀⠀ ⠀⠀⠀ ⠀⠀⠀ ⠀⠀⠀ ⠀⠀⠀ ⠀⠀⠀ ⠀⠀⠀ ⠀⠀⠀ ⠀⠀⠀ ⠀⠀⠀ ⠀⠀⠀ ⠀⠀⠀ ⠀⠀⠀', wellcomeMessageSettings);
  console.log('%c⠀⠀⠀ Welcome to the developer vault!.                     ⠀⠀⠀', wellcomeMessageSettings);
  console.log('%c⠀⠀⠀ Top secret password generation happens here...       ⠀⠀⠀', wellcomeMessageSettings);
  console.log('%c⠀⠀⠀ Mostly. ^_^                                          ⠀⠀⠀', wellcomeMessageSettings);
  console.log('%c⠀⠀⠀ ⠀⠀⠀ ⠀⠀⠀ ⠀⠀⠀ ⠀⠀⠀ ⠀⠀⠀ ⠀⠀⠀ ⠀⠀⠀ ⠀⠀⠀ ⠀⠀⠀ ⠀⠀⠀ ⠀⠀⠀ ⠀⠀⠀ ⠀⠀⠀', wellcomeMessageSettings);
}

function displayPage() {
  document.body.style = 'display: auto';
}

function handlePasswordCreation() {
  if (document.querySelector('#pwd-type-selector-tab li.is-active a').getAttribute('data-type') === 'passphrase') {
    const { passphrase, strength } = createPassphrase();
    pwdGeneratedEl.innerHTML = passphrase;
    setStrength(strength);
    return;
  }

  const { password, strength } = createPassword();
  pwdGeneratedEl.innerHTML = password;
  setStrength(strength);
}

function initalizePageElements() {
  document.getElementById('settings-allow-symbols-list').innerHTML = Array.from(_genearators_password__WEBPACK_IMPORTED_MODULE_4__.SPECIAL_CHARACTERS).map((el) =>
    String.fromCharCode(el)
  );
}

// Init
function init() {

  console.log('PASSPHRASE_WORDLIST', _genearators_passphrase__WEBPACK_IMPORTED_MODULE_5__.PASSPHRASE_WORDLIST)
  writeWellcomeMessage();

  bindEvents();
  initalizePageElements();

  // Update the AvailableChars array based on the html default
  // and create the first password
  updateAvailableChars();
  handlePasswordCreation();

  // Show content only when page is loaded
  displayPage();
}

window.onload = init;


/***/ }),

/***/ "./robots.txt":
/*!********************!*\
  !*** ./robots.txt ***!
  \********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "robots.txt";

/***/ }),

/***/ "./sitemap.xml":
/*!*********************!*\
  !*** ./sitemap.xml ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "sitemap.xml";

/***/ }),

/***/ "./src/images/favicon.ico":
/*!********************************!*\
  !*** ./src/images/favicon.ico ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/favicon.ico";

/***/ }),

/***/ "./src/images/favicon.png":
/*!********************************!*\
  !*** ./src/images/favicon.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/favicon.png";

/***/ }),

/***/ "./src/images/share.png":
/*!******************************!*\
  !*** ./src/images/share.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/share.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/scripts/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDNkc7QUFDakI7QUFDNUYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRiw4SEFBOEgseUJBQXlCO0FBQ3ZKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyx3RkFBd0YsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sWUFBWSxjQUFjLFlBQVksT0FBTyxPQUFPLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsYUFBYSxhQUFhLFdBQVcsT0FBTyxPQUFPLFdBQVcsVUFBVSxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLE9BQU8sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsYUFBYSxNQUFNLE1BQU0sV0FBVyxXQUFXLFlBQVksTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFVBQVUsVUFBVSxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsVUFBVSxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsWUFBWSxPQUFPLE1BQU0sV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLE9BQU8sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcs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QUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0Esa0RBQWtELGlCQUFpQixrQkFBa0I7QUFDckY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsWUFBWSx1QkFBdUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsVUFBVSxxQkFBcUI7QUFDL0I7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0ZBQWdGLHFFQUFrQjtBQUNsRztBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxxQ0FBcUMsd0VBQW1CO0FBQ3hEOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYW5vdGhlci1wYXNzd29yZC1nZW5lcmF0b3IvLi9zcmMvc3R5bGVzL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vYW5vdGhlci1wYXNzd29yZC1nZW5lcmF0b3IvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2Fub3RoZXItcGFzc3dvcmQtZ2VuZXJhdG9yLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYW5vdGhlci1wYXNzd29yZC1nZW5lcmF0b3IvLi9zcmMvc3R5bGVzL3N0eWxlLnNjc3M/ZTVkOCIsIndlYnBhY2s6Ly9hbm90aGVyLXBhc3N3b3JkLWdlbmVyYXRvci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9hbm90aGVyLXBhc3N3b3JkLWdlbmVyYXRvci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYW5vdGhlci1wYXNzd29yZC1nZW5lcmF0b3IvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYW5vdGhlci1wYXNzd29yZC1nZW5lcmF0b3IvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYW5vdGhlci1wYXNzd29yZC1nZW5lcmF0b3IvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9hbm90aGVyLXBhc3N3b3JkLWdlbmVyYXRvci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2Fub3RoZXItcGFzc3dvcmQtZ2VuZXJhdG9yLy4vc3JjL3NjcmlwdHMvZ2VuZWFyYXRvcnMvcGFzc3BocmFzZS9nZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vYW5vdGhlci1wYXNzd29yZC1nZW5lcmF0b3IvLi9zcmMvc2NyaXB0cy9nZW5lYXJhdG9ycy9wYXNzcGhyYXNlL2luZGV4LmpzIiwid2VicGFjazovL2Fub3RoZXItcGFzc3dvcmQtZ2VuZXJhdG9yLy4vc3JjL3NjcmlwdHMvZ2VuZWFyYXRvcnMvcGFzc3BocmFzZS91dGlscy5qcyIsIndlYnBhY2s6Ly9hbm90aGVyLXBhc3N3b3JkLWdlbmVyYXRvci8uL3NyYy9zY3JpcHRzL2dlbmVhcmF0b3JzL3Bhc3N3b3JkL2dlbmVyYXRvci5qcyIsIndlYnBhY2s6Ly9hbm90aGVyLXBhc3N3b3JkLWdlbmVyYXRvci8uL3NyYy9zY3JpcHRzL2dlbmVhcmF0b3JzL3Bhc3N3b3JkL2luZGV4LmpzIiwid2VicGFjazovL2Fub3RoZXItcGFzc3dvcmQtZ2VuZXJhdG9yLy4vc3JjL3NjcmlwdHMvZ2VuZWFyYXRvcnMvcGFzc3dvcmQvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vYW5vdGhlci1wYXNzd29yZC1nZW5lcmF0b3IvLi9zcmMvc2NyaXB0cy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU9wZW4rU2FuczppdGFsLHdnaHRAMCwzMDAuLjgwMDsxLDMwMC4uODAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3Qge1xuICAtLXNlbGVjdGlvbi1jb2xvci1kYW5nZXI6ICNmMTQ2Njg7XG4gIC0tc2VsZWN0aW9uLWNvbG9yLXdhcm5pbmc6ICNmZmUwOGE7XG4gIC0tc2VsZWN0aW9uLWNvbG9yLWluZm86ICMzZThlZDA7XG4gIC0tc2VsZWN0aW9uLWNvbG9yLXN1Y2Nlc3M6ICM0OGM3OGU7XG59XG5cbjo6c2VsZWN0aW9uIHtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0ODVmYzc7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuaHRtbCxcbmJvZHkge1xuICBjb2xvcjogIzQ0NDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1vcHRpY2FsLXNpemluZzogYXV0bztcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xuICBzY3JvbGwtc25hcC10eXBlOiB5IG1hbmRhdG9yeTtcbn1cblxuLnRpdGxlLFxuLnN1YnRpdGxlIHtcbiAgZm9udC1mYW1pbHk6IFwiS29kZSBNb25vXCIsIG1vbm9zcGFjZTtcbiAgY29sb3I6IGluaGVyaXQ7XG59XG5cbi5zZWN0aW9uIHtcbiAgcGFkZGluZzogMnJlbSAycmVtO1xufVxuXG4uaXMtZnVsbGhlaWdodCB7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xufVxuXG4uaXMtZnVsbHdpZHRoIHtcbiAgbWluLXdpZHRoOiAxMDAlO1xufVxuXG4ubm90aWZpY2F0aW9uIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlNjQ1O1xuICBvcGFjaXR5OiAxO1xuICB6LWluZGV4OiAxMDA7XG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4ICM0NDQ7XG4gIHRyYW5zaXRpb246IHZpc2liaWxpdHkgMHMsIG9wYWNpdHkgMC4zcyBsaW5lYXI7XG59XG4ubm90aWZpY2F0aW9uLmlzLWludmlzaWJsZSB7XG4gIG9wYWNpdHk6IDA7XG59XG5cbiNwd2QtdHlwZS1zZWxlY3Rvci10YWIge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuI3B3ZC10eXBlLXNlbGVjdG9yLXRhYiB1bCB7XG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDA7XG59XG5cbiNwd2Qtc2V0dGluZ3MtYm94IHtcbiAgbWluLWhlaWdodDogMzYycHg7XG59XG5cbi50YWJzIGxpLmlzLWFjdGl2ZSBhIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjNDg1ZmM3O1xuICBib3JkZXItYm90dG9tLWNvbG9yOiAjNDg1ZmM3O1xufVxuLnRhYnMgbGkuaXMtYWN0aXZlIGE6aG92ZXIge1xuICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogMnB4O1xuICBib3JkZXItYm90dG9tLWNvbG9yOiAjNDg1ZmM3O1xufVxuLnRhYnMgbGkgYSB7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogMnB4O1xuICBib3JkZXItYm90dG9tLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6ICNhODlkOTE7XG59XG4udGFicyBsaSBhOmhvdmVyIHtcbiAgdGV4dC1zaGFkb3c6ICM0ODVmYzcgMXB4IDAgMTBweDtcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogMnB4O1xuICBib3JkZXItYm90dG9tLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuI3B3ZC1zdHJlbmd0aC10YWdib3gge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMnB4O1xuICBsZWZ0OiAwcHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA2cHg7XG59XG5cbiNwd2QtYWN0aW9ucy1ib3gge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogM3B4O1xuICByaWdodDogMHB4O1xufVxuI3B3ZC1hY3Rpb25zLWJveCAuYWN0aW9uIHtcbiAgcGFkZGluZzogMCAwLjNyZW07XG4gIGNvbG9yOiAjNDg1ZmM3O1xufVxuI3B3ZC1hY3Rpb25zLWJveCAuYWN0aW9uOmhvdmVyIHtcbiAgY29sb3I6ICM0NDQ7XG4gIHRleHQtc2hhZG93OiAwIDAgNXB4ICM0ODVmYzc7XG59XG5cbiNwd2Qtc3RyZW5ndGgge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMHB4O1xuICBsZWZ0OiAwcHg7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDBweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDBweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNnB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNnB4O1xuICBoZWlnaHQ6IDJweDtcbn1cblxuLnB3ZC1jb250YWluZXIge1xuICBmb250LXNpemU6IDJyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLnB3ZC1jb250YWluZXIuaXMtZGFuZ2VyIDo6c2VsZWN0aW9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2VsZWN0aW9uLWNvbG9yLWRhbmdlcik7XG59XG4ucHdkLWNvbnRhaW5lci5pcy13YXJuaW5nIDo6c2VsZWN0aW9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2VsZWN0aW9uLWNvbG9yLXdhcm5pbmcpO1xufVxuLnB3ZC1jb250YWluZXIuaXMtaW5mbyA6OnNlbGVjdGlvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlbGVjdGlvbi1jb2xvci1pbmZvKTtcbn1cbi5wd2QtY29udGFpbmVyLmlzLXN1Y2Nlc3MgOjpzZWxlY3Rpb24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWxlY3Rpb24tY29sb3Itc3VjY2Vzcyk7XG59XG4ucHdkLWNvbnRhaW5lciA6OnNlbGVjdGlvbiB7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWxlY3Rpb24tY29sb3ItZGFuZ2VyKTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG4jc2V0dGluZ3MtcGFzc3dvcmQtbGVuZ3RoIHtcbiAgd2lkdGg6IDY0cHg7XG59XG5cbiNzZXR0aW5ncy1wYXNzd29yZC1sZW5ndGgtcmFuZ2Uge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnNldHRpbmdzLWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNhODlkOTE7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCAjNDg1ZmM3O1xuICBwYWRkaW5nOiAxcmVtO1xufVxuLnNldHRpbmdzLWNvbnRhaW5lciA6OnNlbGVjdGlvbiB7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBiYWNrZ3JvdW5kOiAjNDg1ZmM3O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG4uc2V0dGluZ3MtY29udGFpbmVyIC5jaGVja2JveDpob3Zlcixcbi5zZXR0aW5ncy1jb250YWluZXIgLnJhZGlvOmhvdmVyIHtcbiAgY29sb3I6ICM0NDQ7XG59XG5cbi5mb290ZXIge1xuICBib3JkZXItdG9wOiAycHggc29saWQgIzI0NTQ5NDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzdjYTdkZjtcbn1cblxuLmlzLW93ZXJmbG93LWF1dG8ge1xuICBvdmVyZmxvdzogYXV0bztcbn1cblxuLmlzLXdvcmQtYnJlYWstYWxsIHtcbiAgd29yZC1icmVhazogYnJlYWstYWxsO1xufVxuXG5pbnB1dCArIHNwYW4udG9nZ2xlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGhlaWdodDogMjRweDtcbiAgd2lkdGg6IDQwcHg7XG4gIG1hcmdpbi1ib3R0b206IC02cHg7XG4gIG1hcmdpbi1sZWZ0OiAtMjRweDtcbiAgYmFja2dyb3VuZDogI2VlZTtcbiAgYm9yZGVyLXJhZGl1czogMTAwdmg7XG4gIGNvbG9yOiAjNDg1ZmM3O1xufVxuaW5wdXQgKyBzcGFuLnRvZ2dsZTpiZWZvcmUge1xuICBjb250ZW50OiBcIiBcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDRweDtcbiAgbGVmdDogNHB4O1xuICByaWdodDogYXV0bztcbiAgaGVpZ2h0OiAxNnB4O1xuICB3aWR0aDogMTZweDtcbiAgYmFja2dyb3VuZDogI2JiYjtcbiAgYm9yZGVyLXJhZGl1czogMTAwdmg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xufVxuaW5wdXQ6Y2hlY2tlZCArIHNwYW4udG9nZ2xlOmJlZm9yZSB7XG4gIGxlZnQ6IDIwcHg7XG4gIGJhY2tncm91bmQ6ICM0ODVmYzc7XG4gIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9zdHlsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQWVBO0VBU0MsaUNBQUE7RUFDQSxrQ0FBQTtFQUNBLCtCQUFBO0VBQ0Esa0NBQUE7QUFyQkQ7O0FBd0JBO0VBQ0MsY0EzQmlCO0VBNEJqQix5QkE3QmM7RUE4QmQsa0JBQUE7QUFyQkQ7O0FBd0JBOztFQUVDLFdBaENXO0VBaUNYLFNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkE1Q2lCO0VBNkNqQix1QkFBQTtFQUNBLDZCQUFBO0FBckJEOztBQXdCQTs7RUFFQyxtQ0FBQTtFQUNBLGNBQUE7QUFyQkQ7O0FBd0JBO0VBQ0Msa0JBQUE7QUFyQkQ7O0FBd0JBO0VBQ0MsaUJBQUE7QUFyQkQ7O0FBd0JBO0VBQ0MsZUFBQTtBQXJCRDs7QUF3QkE7RUFDQyxlQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFFQSw4Q0FDQztBQXZCRjtBQTBCQztFQUNDLFVBQUE7QUF4QkY7O0FBMkJBO0VBQ0MsZ0JBQUE7QUF4QkQ7QUEwQkM7RUFDQyxzQkFBQTtBQXhCRjs7QUE0QkE7RUFDQyxpQkFBQTtBQXpCRDs7QUErQkU7RUFDQyxpQkFBQTtFQUNBLGNBdEdZO0VBdUdaLDRCQXZHWTtBQTJFZjtBQThCRztFQUNDLGlCQUFBO0VBQ0Esd0JBQUE7RUFDQSw0QkE1R1c7QUFnRmY7QUFpQ0M7RUFDQyxrQkFBQTtFQUNBLHdCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxjQXRIZTtBQXVGakI7QUFpQ0U7RUFDQywrQkFBQTtFQUdBLHdCQUFBO0VBQ0EsZ0NBQUE7QUFqQ0g7O0FBeUNBO0VBQ0Msa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLDRCQUFBO0FBdENEOztBQXlDQTtFQUNDLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FBdENEO0FBd0NDO0VBQ0MsaUJBQUE7RUFDQSxjQW5KYTtBQTZHZjtBQXlDRTtFQUNDLFdBcEpTO0VBcUpULDRCQUFBO0FBdkNIOztBQTRDQTtFQUNDLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0EsOEJBQUE7RUFDQSwrQkFBQTtFQUNBLFdBQUE7QUF6Q0Q7O0FBNENBO0VBQ0MsZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsOEJBQUE7QUF6Q0Q7QUE2Q0U7RUFDQywrQ0FBQTtBQTNDSDtBQStDRTtFQUNDLGdEQUFBO0FBN0NIO0FBaURFO0VBQ0MsNkNBQUE7QUEvQ0g7QUFtREU7RUFDQyxnREFBQTtBQWpESDtBQXFEQztFQUNDLGNBck1nQjtFQXNNaEIsK0NBQUE7RUFDQSxrQkFBQTtBQW5ERjs7QUF1REE7RUFDQyxXQUFBO0FBcEREOztBQXNEQTtFQUNDLFdBQUE7QUFuREQ7O0FBc0RBO0VBQ0MseUJBck5nQjtFQXNOaEIsY0FwTmlCO0VBcU5qQixtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtBQW5ERDtBQXNEQztFQUNDLGNBM05nQjtFQTROaEIsbUJBN05hO0VBOE5iLGtCQUFBO0FBcERGO0FBdURDOztFQUVDLFdBaE9VO0FBMktaOztBQTBEQTtFQUNDLDZCQUFBO0VBQ0EseUJBQUE7QUF2REQ7O0FBMERBO0VBQ0MsY0FBQTtBQXZERDs7QUEwREE7RUFDQyxxQkFBQTtBQXZERDs7QUEyREM7RUFDQyxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLGNBL1BhO0FBdU1mO0FBMERFO0VBQ0MsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0NBQUE7QUF4REg7QUEyREM7RUFDQyxVQUFBO0VBQ0EsbUJBaFJhO0VBaVJiLGdDQUFBO0FBekRGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU9wZW4rU2FuczppdGFsLHdnaHRAMCwzMDAuLjgwMDsxLDMwMC4uODAwJmRpc3BsYXk9c3dhcFxcXCIpO1xcblxcbiRzZWNvbmRhcnlDb2xvcjogI2E4OWQ5MTtcXG4kcHJpbWFyeUNvbG9yOiAjNDg1ZmM3O1xcbiRiYWNrZ3JvdW5kQ29sb3I6ICNmZmZmZmY7XFxuXFxuJHRleHRDb2xvcjogIzQ0NDtcXG4kbGlua0NvbG9yOiAkcHJpbWFyeUNvbG9yO1xcblxcbiRjb2xvckRhbmdlcjogI2YxNDY2ODtcXG4kY29sb3JXYXJuaW5nOiAjZmZlMDhhO1xcbiRjb2xvckluZm86ICMzZThlZDA7XFxuJGNvbG9yU3VjY2VzczogIzQ4Yzc4ZTtcXG5cXG5cXG46cm9vdCB7XFxuXFx0Ly8gLS1idWxtYS1wcmltYXJ5LWg6IDE3MmRlZztcXG5cXHQvLyAtLWJ1bG1hLWxpbmstaDogMjI5ZGVnO1xcblxcdC8vIC0tYnVsbWEtbGluay1zOiA1MyU7XFxuXFx0Ly8gLS1idWxtYS1saW5rLWw6IDUzJTtcXG5cXHQvLyAtLWJ1bG1hLWluZm8taDogMTk5ZGVnO1xcblxcdC8vIC0tYnVsbWEtc3VjY2Vzcy1oOiAxNTRkZWc7XFxuXFx0Ly8gLS1idWxtYS13YXJuaW5nLWg6IDQzZGVnO1xcblxcdC8vIC0tYnVsbWEtZGFuZ2VyLWg6IDM0OWRlZztcXG5cXHQtLXNlbGVjdGlvbi1jb2xvci1kYW5nZXI6ICNmMTQ2Njg7XFxuXFx0LS1zZWxlY3Rpb24tY29sb3Itd2FybmluZzogI2ZmZTA4YTtcXG5cXHQtLXNlbGVjdGlvbi1jb2xvci1pbmZvOiAjM2U4ZWQwO1xcblxcdC0tc2VsZWN0aW9uLWNvbG9yLXN1Y2Nlc3M6ICM0OGM3OGU7XFxufVxcblxcbjo6c2VsZWN0aW9uIHtcXG5cXHRjb2xvcjogJGJhY2tncm91bmRDb2xvcjtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAkbGlua0NvbG9yO1xcblxcdGJvcmRlci1yYWRpdXM6IDRweDtcXG59XFxuXFxuaHRtbCxcXG5ib2R5IHtcXG5cXHRjb2xvcjogJHRleHRDb2xvcjtcXG5cXHRtYXJnaW46IDA7XFxuXFx0cGFkZGluZzogMDtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRoZWlnaHQ6IDEwMCU7XFxuXFx0Zm9udC1mYW1pbHk6IFxcXCJPcGVuIFNhbnNcXFwiLCBzYW5zLXNlcmlmO1xcblxcdGZvbnQtb3B0aWNhbC1zaXppbmc6IGF1dG87XFxuXFx0Zm9udC13ZWlnaHQ6IDQwMDtcXG5cXHRmb250LXN0eWxlOiBub3JtYWw7XFxuXFx0Zm9udC1zaXplOiAxNnB4O1xcblxcdGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kQ29sb3I7XFxuXFx0c2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XFxuXFx0c2Nyb2xsLXNuYXAtdHlwZTogeSBtYW5kYXRvcnk7XFxufVxcblxcbi50aXRsZSxcXG4uc3VidGl0bGUge1xcblxcdGZvbnQtZmFtaWx5OiBcXFwiS29kZSBNb25vXFxcIiwgbW9ub3NwYWNlO1xcblxcdGNvbG9yOiBpbmhlcml0O1xcbn1cXG5cXG4uc2VjdGlvbiB7XFxuXFx0cGFkZGluZzogMnJlbSAycmVtO1xcbn1cXG5cXG4uaXMtZnVsbGhlaWdodCB7XFxuXFx0bWluLWhlaWdodDogMTAwdmg7XFxufVxcblxcbi5pcy1mdWxsd2lkdGgge1xcblxcdG1pbi13aWR0aDogMTAwJTtcXG59XFxuXFxuLm5vdGlmaWNhdGlvbiB7XFxuXFx0cG9zaXRpb246IGZpeGVkO1xcblxcdHRvcDogMDtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlNjQ1O1xcblxcdG9wYWNpdHk6IDE7XFxuXFx0ei1pbmRleDogMTAwO1xcblxcdGJveC1zaGFkb3c6IDAgMCAxMHB4ICR0ZXh0Q29sb3I7XFxuXFxuXFx0dHJhbnNpdGlvbjpcXG5cXHRcXHR2aXNpYmlsaXR5IDBzLFxcblxcdFxcdG9wYWNpdHkgMC4zcyBsaW5lYXI7XFxuXFxuXFx0Ji5pcy1pbnZpc2libGUge1xcblxcdFxcdG9wYWNpdHk6IDA7XFxuXFx0fVxcbn1cXG4jcHdkLXR5cGUtc2VsZWN0b3ItdGFiIHtcXG5cXHRtYXJnaW4tYm90dG9tOiAwO1xcblxcblxcdHVsIHtcXG5cXHRcXHRib3JkZXItYm90dG9tLXdpZHRoOiAwO1xcblxcdH1cXG59XFxuXFxuI3B3ZC1zZXR0aW5ncy1ib3gge1xcblxcdG1pbi1oZWlnaHQ6IDM2MnB4O1xcbn1cXG5cXG4udGFicyBsaSB7XFxuXFxuXFx0Ji5pcy1hY3RpdmUge1xcblxcdFxcdGEge1xcblxcdFxcdFxcdGZvbnQtd2VpZ2h0OiBib2xkO1xcblxcdFxcdFxcdGNvbG9yOiAkbGlua0NvbG9yO1xcblxcdFxcdFxcdGJvcmRlci1ib3R0b20tY29sb3I6ICRsaW5rQ29sb3I7XFxuXFxuXFx0XFx0XFx0Jjpob3ZlciB7XFxuXFx0XFx0XFx0XFx0dGV4dC1zaGFkb3c6IG5vbmU7XFxuXFx0XFx0XFx0XFx0Ym9yZGVyLWJvdHRvbS13aWR0aDogMnB4O1xcblxcdFxcdFxcdFxcdGJvcmRlci1ib3R0b20tY29sb3I6ICRsaW5rQ29sb3I7XFxuXFx0XFx0XFx0fVxcblxcdFxcdH1cXG5cXHR9XFxuXFxuXFx0YSB7XFxuXFx0XFx0bWFyZ2luLWJvdHRvbTogMHB4O1xcblxcdFxcdGJvcmRlci1ib3R0b20td2lkdGg6IDJweDtcXG5cXHRcXHRib3JkZXItYm90dG9tLWNvbG9yOiB0cmFuc3BhcmVudDtcXG5cXHRcXHRjb2xvcjogJHNlY29uZGFyeUNvbG9yO1xcblxcblxcdFxcdCY6aG92ZXIge1xcblxcdFxcdFxcdHRleHQtc2hhZG93OiAkbGlua0NvbG9yIDFweCAwIDEwcHg7XFxuXFx0XFx0XFx0Ly8gZm9udC13ZWlnaHQ6IGJvbGQ7XFxuXFx0XFx0XFx0Ly8gY29sb3I6ICRsaW5rQ29sb3I7XFxuXFx0XFx0XFx0Ym9yZGVyLWJvdHRvbS13aWR0aDogMnB4O1xcblxcdFxcdFxcdGJvcmRlci1ib3R0b20tY29sb3I6IHRyYW5zcGFyZW50O1xcblxcdFxcdFxcdC8vIHRyYW5zaXRpb246IDFzO1xcblxcdFxcdFxcdC8vIC13ZWJraXQtdHJhbnNpdGlvbjogMXM7XFxuXFx0XFx0fVxcblxcdH1cXG59XFxuXFxuXFxuI3B3ZC1zdHJlbmd0aC10YWdib3gge1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHRib3R0b206IDJweDtcXG5cXHRsZWZ0OiAwcHg7XFxuXFx0Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDZweDtcXG59XFxuXFxuI3B3ZC1hY3Rpb25zLWJveCB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0Ym90dG9tOiAzcHg7XFxuXFx0cmlnaHQ6IDBweDtcXG5cXG5cXHQuYWN0aW9uIHtcXG5cXHRcXHRwYWRkaW5nOiAwIC4zcmVtO1xcblxcdFxcdGNvbG9yOiAkbGlua0NvbG9yO1xcblxcdFxcdC8vIGZvbnQtc2l6ZTogeC1sYXJnZTtcXG5cXG5cXHRcXHQmOmhvdmVyIHtcXG5cXHRcXHRcXHRjb2xvcjogJHRleHRDb2xvcjtcXG5cXHRcXHRcXHR0ZXh0LXNoYWRvdzogMCAwIDVweCAkcHJpbWFyeUNvbG9yO1xcblxcdFxcdH1cXG5cXHR9XFxufVxcblxcbiNwd2Qtc3RyZW5ndGgge1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHRib3R0b206IDBweDtcXG5cXHRsZWZ0OiAwcHg7XFxuXFx0Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMHB4O1xcblxcdGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwcHg7XFxuXFx0Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNnB4O1xcblxcdGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA2cHg7XFxuXFx0aGVpZ2h0OiAycHg7XFxufVxcblxcbi5wd2QtY29udGFpbmVyIHtcXG5cXHRmb250LXNpemU6IDJyZW07XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogcm93O1xcblxcdGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFxuXFxuXFx0Ji5pcy1kYW5nZXIge1xcblxcdFxcdDo6c2VsZWN0aW9uIHtcXG5cXHRcXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWxlY3Rpb24tY29sb3ItZGFuZ2VyKTtcXG5cXHRcXHR9XFxuXFx0fVxcblxcdCYuaXMtd2FybmluZyB7XFxuXFx0XFx0OjpzZWxlY3Rpb24ge1xcblxcdFxcdFxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlbGVjdGlvbi1jb2xvci13YXJuaW5nKTtcXG5cXHRcXHR9XFxuXFx0fVxcblxcdCYuaXMtaW5mbyB7XFxuXFx0XFx0OjpzZWxlY3Rpb24ge1xcblxcdFxcdFxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlbGVjdGlvbi1jb2xvci1pbmZvKTtcXG5cXHRcXHR9XFxuXFx0fVxcblxcdCYuaXMtc3VjY2VzcyB7XFxuXFx0XFx0OjpzZWxlY3Rpb24ge1xcblxcdFxcdFxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlbGVjdGlvbi1jb2xvci1zdWNjZXNzKTtcXG5cXHRcXHR9XFxuXFx0fVxcblxcdFxcblxcdDo6c2VsZWN0aW9uIHtcXG5cXHRcXHRjb2xvcjogJGJhY2tncm91bmRDb2xvcjtcXG5cXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWxlY3Rpb24tY29sb3ItZGFuZ2VyKTtcXG5cXHRcXHRib3JkZXItcmFkaXVzOiA0cHg7XFxuXFx0fVxcbn1cXG5cXG4jc2V0dGluZ3MtcGFzc3dvcmQtbGVuZ3RoIHtcXG5cXHR3aWR0aDogNjRweDtcXG59XFxuI3NldHRpbmdzLXBhc3N3b3JkLWxlbmd0aC1yYW5nZSB7XFxuXFx0d2lkdGg6IDEwMCU7XFxufVxcblxcbi5zZXR0aW5ncy1jb250YWluZXIge1xcblxcdGJhY2tncm91bmQtY29sb3I6ICRzZWNvbmRhcnlDb2xvcjtcXG5cXHRjb2xvcjogJGJhY2tncm91bmRDb2xvcjtcXG5cXHRib3JkZXItcmFkaXVzOiAxMHB4O1xcblxcdGJvcmRlcjogMnB4IHNvbGlkICRwcmltYXJ5Q29sb3I7XFxuXFx0cGFkZGluZzogMXJlbTtcXG5cXHQvLyBib3gtc2hhZG93OiAwIDJweCAxMHB4ICRwcmltYXJ5Q29sb3I7XFxuXFxuXFx0OjpzZWxlY3Rpb24ge1xcblxcdFxcdGNvbG9yOiAkYmFja2dyb3VuZENvbG9yO1xcblxcdFxcdGJhY2tncm91bmQ6ICRwcmltYXJ5Q29sb3I7XFxuXFx0XFx0Ym9yZGVyLXJhZGl1czogNHB4O1xcblxcdH1cXG5cXG5cXHQuY2hlY2tib3g6aG92ZXIsXFxuXFx0LnJhZGlvOmhvdmVyIHtcXG5cXHRcXHRjb2xvcjogJHRleHRDb2xvcjtcXG5cXHRcXHQvLyB0ZXh0LXNoYWRvdzogMCAwIDVweCAkYmFja2dyb3VuZENvbG9yO1xcblxcdH1cXG59XFxuXFxuLmZvb3RlciB7XFxuXFx0Ym9yZGVyLXRvcDogMnB4IHNvbGlkICMyNDU0OTQ7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzdjYTdkZjtcXG59XFxuXFxuLmlzLW93ZXJmbG93LWF1dG8ge1xcblxcdG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4uaXMtd29yZC1icmVhay1hbGwge1xcblxcdHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcXG59XFxuXFxuaW5wdXQge1xcblxcdCsgc3Bhbi50b2dnbGUge1xcblxcdFxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHRcXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuXFx0XFx0aGVpZ2h0OiAyNHB4O1xcblxcdFxcdHdpZHRoOiA0MHB4O1xcblxcdFxcdG1hcmdpbi1ib3R0b206IC02cHg7XFxuXFx0XFx0bWFyZ2luLWxlZnQ6IC0yNHB4O1xcblxcdFxcdGJhY2tncm91bmQ6ICNlZWU7XFxuXFx0XFx0Ym9yZGVyLXJhZGl1czogMTAwdmg7XFxuXFx0XFx0Y29sb3I6ICRwcmltYXJ5Q29sb3I7IFxcblxcdFxcdFxcblxcdFxcdCY6YmVmb3JlIHtcXG5cXHRcXHRcXHRjb250ZW50OiBcXFwiIFxcXCI7XFxuXFx0XFx0XFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdFxcdFxcdHRvcDogNHB4O1xcblxcdFxcdFxcdGxlZnQ6IDRweDtcXG5cXHRcXHRcXHRyaWdodDogYXV0bztcXG5cXHRcXHRcXHRoZWlnaHQ6IDE2cHg7XFxuXFx0XFx0XFx0d2lkdGg6IDE2cHg7XFxuXFx0XFx0XFx0YmFja2dyb3VuZDogI2JiYjtcXG5cXHRcXHRcXHRib3JkZXItcmFkaXVzOiAxMDB2aDtcXG5cXHRcXHRcXHR0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcXG5cXHRcXHR9XFxuXFx0fVxcblxcdCY6Y2hlY2tlZCArIHNwYW4udG9nZ2xlOmJlZm9yZSB7XFxuXFx0XFx0bGVmdDogMjBweDtcXG5cXHRcXHRiYWNrZ3JvdW5kOiAkcHJpbWFyeUNvbG9yO1xcblxcdFxcdHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xcblxcdH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQYXNzcGhyYXNlIHtcbiAgICBjb25zdHJ1Y3Rvcih3b3JkTGlzdCwgd29yZENvdW50ID0gNCwgc2VwYXJhdG9yID0gJy0nLCBpbmNsdWRlTnVtYmVycyA9IGZhbHNlLCBjYXBpdGFsaXplID0gZmFsc2UpIHtcbiAgICAgICAgdGhpcy53b3JkTGlzdCA9IHdvcmRMaXN0O1xuICAgICAgICB0aGlzLndvcmRDb3VudCA9IHdvcmRDb3VudDtcbiAgICAgICAgdGhpcy5zZXBhcmF0b3IgPSBzZXBhcmF0b3I7XG4gICAgICAgIHRoaXMuaW5jbHVkZU51bWJlcnMgPSBpbmNsdWRlTnVtYmVycztcbiAgICAgICAgdGhpcy5jYXBpdGFsaXplID0gY2FwaXRhbGl6ZTtcbiAgICB9XG5cbiAgICBnZW5lcmF0ZSgpIHtcbiAgICAgICAgbGV0IHBhc3NwaHJhc2UgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLndvcmRDb3VudDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgd29yZCA9IHRoaXMud29yZExpc3RbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy53b3JkTGlzdC5sZW5ndGgpXTtcbiAgICAgICAgICAgIGlmICh0aGlzLmNhcGl0YWxpemUpIHtcbiAgICAgICAgICAgICAgICB3b3JkID0gdGhpcy4jcmFuZG9tQ2FwaXRhbGl6ZSh3b3JkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHBhc3NwaHJhc2UucHVzaCh3b3JkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmluY2x1ZGVOdW1iZXJzKSB7XG4gICAgICAgICAgICBwYXNzcGhyYXNlLnB1c2goTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwKSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcGFzc3BocmFzZTogcGFzc3BocmFzZS5qb2luKHRoaXMuc2VwYXJhdG9yKSxcbiAgICAgICAgICAgIHN0cmVuZ3RoOiB0aGlzLiNnZXRTdHJlbmd0aCgpLFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgI3JhbmRvbUNhcGl0YWxpemUod29yZCkge1xuICAgICAgICByZXR1cm4gd29yZFxuICAgICAgICAgICAgLnNwbGl0KCcnKVxuICAgICAgICAgICAgLm1hcChjaGFyID0+IChNYXRoLnJhbmRvbSgpIDwgMC41ID8gY2hhci50b1VwcGVyQ2FzZSgpIDogY2hhcikpXG4gICAgICAgICAgICAuam9pbignJyk7XG4gICAgfVxuXG4gICAgI2dldFN0cmVuZ3RoKCkge1xuICAgICAgICBsZXQgZW50cm9weSA9IHRoaXMud29yZENvdW50ICogTWF0aC5sb2cyKHRoaXMud29yZExpc3QubGVuZ3RoKTtcbiAgICAgICAgaWYgKHRoaXMuaW5jbHVkZU51bWJlcnMpIGVudHJvcHkgKz0gTWF0aC5sb2cyKDEwMCk7XG4gICAgICAgIGlmICh0aGlzLmNhcGl0YWxpemUpIGVudHJvcHkgKz0gdGhpcy53b3JkQ291bnQgKiAxLjU7IC8vIEFwcHJveGltYXRlIGV4dHJhIGVudHJvcHkgZnJvbSBjYXBpdGFsaXphdGlvblxuICAgICAgICByZXR1cm4gZW50cm9weTtcbiAgICB9XG59XG4iLCJpbXBvcnQgUGFzc3BocmFzZSBmcm9tIFwiLi9nZW5lcmF0b3JcIjtcbmV4cG9ydCB7IFBBU1NQSFJBU0VfV09SRExJU1QgfSBmcm9tIFwiLi91dGlsc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBQYXNzcGhyYXNlO1xuIiwiZXhwb3J0IGNvbnN0IFBBU1NQSFJBU0VfV09SRExJU1QgPSBbXG4gICAgXCJhcHBsZVwiLCBcImJhbmFuYVwiLCBcImNoZXJyeVwiLCBcImRlbHRhXCIsIFwiZWNob1wiLCBcImZveHRyb3RcIiwgXCJnb2xmXCIsIFwiaG90ZWxcIiwgXCJpbmRpYVwiLCBcImp1bGlldFwiLFxuICAgIFwia2FuZ2Fyb29cIiwgXCJsZW1vblwiLCBcIm1hbmdvXCIsIFwibmVjdGFyXCIsIFwib3JhbmdlXCIsIFwicGFwYXlhXCIsIFwicXVhc2FyXCIsIFwicmFzcGJlcnJ5XCIsIFwic3RyYXdiZXJyeVwiLCBcInRhbmdvXCIsXG4gICAgXCJ1bWJyZWxsYVwiLCBcInZpb2xldFwiLCBcIndhbG51dFwiLCBcInhlbm9uXCIsIFwieWFua2VlXCIsIFwiemVicmFcIiwgXCJhbGJhdHJvc3NcIiwgXCJidXR0ZXJmbHlcIiwgXCJjb2NvbnV0XCIsIFwiZHJhZ29uXCIsXG4gICAgXCJlbGVwaGFudFwiLCBcImZpcmVmbHlcIiwgXCJnb3JpbGxhXCIsIFwiaG9yaXpvblwiLCBcImlnbG9vXCIsIFwiamFja2FsXCIsIFwia29hbGFcIiwgXCJsaWdodG5pbmdcIiwgXCJtb3VudGFpblwiLCBcIm5lYnVsYVwiLFxuICAgIFwib2NlYW5cIiwgXCJwZW5ndWluXCIsIFwicXVva2thXCIsIFwicmFpbmJvd1wiLCBcInNhcHBoaXJlXCIsIFwidG9wYXpcIiwgXCJ1bmljb3JuXCIsIFwidm9sY2Fub1wiLCBcIndoaXJscG9vbFwiLCBcInhlcm94XCIsXG4gICAgXCJ5ZWxsb3dcIiwgXCJ6ZXBwZWxpblwiLCBcImFzdGVyb2lkXCIsIFwiYmxpenphcmRcIiwgXCJjb21ldFwiLCBcImRvbHBoaW5cIiwgXCJlbWVyYWxkXCIsIFwiZmFsY29uXCIsIFwiZ2FsYXh5XCIsIFwiaHVycmljYW5lXCIsXG4gICAgXCJpbGx1c2lvblwiLCBcImp1bmdsZVwiLCBcImtpbmdkb21cIiwgXCJsaWdodGhvdXNlXCIsIFwibWV0ZW9yXCIsIFwibm92ZW1iZXJcIiwgXCJvY3RvcHVzXCIsIFwicGFyYWRpc2VcIiwgXCJxdWlja3NhbmRcIixcbiAgICBcInJpcHRpZGVcIiwgXCJzdW5zaGluZVwiLCBcInRodW5kZXJcIiwgXCJ1bmRlcnRvd1wiLCBcInZvcnRleFwiLCBcIndoYWxlXCIsIFwieHlsb3Bob25lXCIsIFwieWV0aVwiLCBcInplbml0aFwiLCBcImF2YWxhbmNoZVwiLFxuICAgIFwiYmx1ZWJlcnJ5XCIsIFwiY29zbW9zXCIsIFwiZGF5bGlnaHRcIiwgXCJldmVyZXN0XCIsIFwiZmlyZXN0b3JtXCIsIFwiZ2xhY2llclwiLCBcImh1bW1pbmdiaXJkXCIsIFwiaXNvdG9wZVwiLCBcImppZ3Nhd1wiLFxuICAgIFwia3J5cHRvblwiLCBcImxhYnlyaW50aFwiLCBcIm1pcmFnZVwiLCBcIm5pZ2h0ZmFsbFwiLCBcIm9ic2lkaWFuXCIsIFwicHV6emxlXCIsIFwicXVhbnR1bVwiLCBcInJlbGljXCIsIFwic3RhcmxpZ2h0XCIsXG4gICAgXCJ0ZWxlc2NvcGVcIiwgXCJ1dG9waWFcIiwgXCJ2b3lhZ2VyXCIsIFwid2luZHN3ZXB0XCIsIFwieGVub3BoaWxlXCIsIFwieW9uZGVyXCIsIFwiemVwcGVsaW5cIlxuXTsiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQYXNzd29yZCB7XG4gICAgY29uc3RydWN0b3IoYXZhaWxhYmxlQ2hhcnMsIHBhc3N3b3JkTGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuYXZhaWxhYmxlQ2hhcnMgPSBhdmFpbGFibGVDaGFycztcbiAgICAgICAgdGhpcy5wYXNzd29yZExlbmd0aCA9IHBhc3N3b3JkTGVuZ3RoO1xuICAgIH1cblxuICAgIGdlbmVyYXRlKCkge1xuICAgICAgICBpZiAodGhpcy5hdmFpbGFibGVDaGFycy5zaXplID09PSAwKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIGNoYXJhY3RlcnMgYXZhaWxhYmxlIHRvIGdlbmVyYXRlIHBhc3N3b3JkJyk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjaGFyc0FycmF5ID0gQXJyYXkuZnJvbSh0aGlzLmF2YWlsYWJsZUNoYXJzKTtcbiAgICAgICAgY29uc3QgcmFuZG9tVmFsdWVzID0gY3J5cHRvLmdldFJhbmRvbVZhbHVlcyhuZXcgVWludDMyQXJyYXkodGhpcy5wYXNzd29yZExlbmd0aCkpO1xuXG4gICAgICAgIGNvbnN0IHBhc3N3b3JkID0gQXJyYXkuZnJvbSh7IGxlbmd0aDogdGhpcy5wYXNzd29yZExlbmd0aCB9LCAoXywgaSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoY2hhcnNBcnJheVtyYW5kb21WYWx1ZXNbaV0gJSBjaGFyc0FycmF5Lmxlbmd0aF0pO1xuICAgICAgICB9KS5qb2luKCcnKTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcGFzc3dvcmQsXG4gICAgICAgICAgICBzdHJlbmd0aDogdGhpcy4jY2FsY3VsYXRlU3RyZW5ndGgocGFzc3dvcmQpLFxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICAjY2FsY3VsYXRlU3RyZW5ndGgocGFzc3dvcmQpIHtcbiAgICAgICAgY29uc3QgdW5pcXVlQ2hhcnMgPSBuZXcgU2V0KHBhc3N3b3JkKS5zaXplO1xuICAgICAgICBjb25zdCBlbnRyb3B5ID0gcGFzc3dvcmQubGVuZ3RoICogTWF0aC5sb2cyKHVuaXF1ZUNoYXJzKTtcbiAgICAgICAgcmV0dXJuIGVudHJvcHkudG9GaXhlZCgyKTtcblxuICAgIH1cbn0iLCJpbXBvcnQgUGFzc3dvcmQgZnJvbSBcIi4vZ2VuZXJhdG9yXCI7XG5leHBvcnQge1xuICAgIE5VTUJFUlMsXG4gICAgTE9XRVJDQVNFLFxuICAgIFVQUEVSQ0FTRSxcbiAgICBTUEVDSUFMX0NIQVJBQ1RFUlMsXG4gICAgU0lNSUxBUl9DSEFSUyxcbn0gZnJvbSBcIi4vdXRpbHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgUGFzc3dvcmQ7XG4iLCJjb25zdCBOVU1CRVJTID0gbmV3IFVpbnQ4QXJyYXkoWzQ4LCA0OSwgNTAsIDUxLCA1MiwgNTMsIDU0LCA1NSwgNTYsIDU3XSk7XG5jb25zdCBMT1dFUkNBU0UgPSBuZXcgVWludDhBcnJheShbXG4gICAgOTcsIDk4LCA5OSwgMTAwLCAxMDEsIDEwMiwgMTAzLCAxMDQsIDEwNSwgMTA2LCAxMDcsIDEwOCwgMTA5LCAxMTAsIDExMSwgMTEyLCAxMTMsIDExNCwgMTE1LCAxMTYsIDExNywgMTE4LCAxMTksIDEyMCxcbiAgICAxMjEsIDEyMixcbl0pO1xuY29uc3QgVVBQRVJDQVNFID0gbmV3IFVpbnQ4QXJyYXkoW1xuICAgIDY1LCA2NiwgNjcsIDY4LCA2OSwgNzAsIDcxLCA3MiwgNzMsIDc0LCA3NSwgNzYsIDc3LCA3OCwgNzksIDgwLCA4MSwgODIsIDgzLCA4NCwgODUsIDg2LCA4NywgODgsIDg5LCA5MCxcbl0pO1xuY29uc3QgU1BFQ0lBTF9DSEFSQUNURVJTID0gbmV3IFVpbnQ4QXJyYXkoWzMzLCAzNSwgMzYsIDM3LCAzOCwgNDAsIDQxLCA0MiwgNDMsIDY0LCA5NF0pO1xuY29uc3QgU0lNSUxBUl9DSEFSUyA9IHtcbiAgICAwOiBbNDgsIDc5LCAxMTEsIDczLCAxMDVdLCAvLyAwLCBPLCBsLCBJXG4gICAgMTogWzQ5LCA3NiwgMTA4XSwgLy8gMSwgbCwgSVxuICAgIDU6IFs1MywgODMsIDExNSwgNTYsIDg4XSwgLy8gNSwgUywgcywgOCwgQlxuICAgIDY6IFs1NCwgNjYsIDk4XSwgLy8gNiwgYiwgQlxuICAgIDg6IFs1NiwgNjYsIDk4XSwgLy8gOCwgQiwgYlxuICAgIDk6IFs1NywgNzEsIDEwMywgNTQsIDY2XSwgLy8gOSwgZywgRywgNiwgYlxuICAgIGE6IFs5NywgNjQsIDY1XSwgLy8gYSwgQCwgQVxuICAgIGU6IFsxMDEsIDY3LCA5OV0sIC8vIGUsIGMsIENcbiAgICBnOiBbMTAzLCA4MSwgMTEzLCA1N10sIC8vIGcsIHEsIFEsIDlcbiAgICBsOiBbMTA4LCA0OSwgNzMsIDEwNV0sIC8vIGwsIDEsIEksIGlcbiAgICBvOiBbMTExLCA0OCwgNzksIDk3LCA2NV0sIC8vIG8sIDAsIE8sIGEsIEFcbiAgICBzOiBbMTE1LCA1MywgODNdLCAvLyBzLCA1LCBTXG4gICAgdDogWzExNiwgNTUsIDg0XSwgLy8gdCwgNywgVFxuICAgIHo6IFsxMjIsIDUwXSwgLy8geiwgMlxufTtcblxuZXhwb3J0IHtcbiAgICBOVU1CRVJTLFxuICAgIExPV0VSQ0FTRSxcbiAgICBVUFBFUkNBU0UsXG4gICAgU1BFQ0lBTF9DSEFSQUNURVJTLFxuICAgIFNJTUlMQVJfQ0hBUlMsXG59IiwiLy8gbG9hZCBzdHlsZXNcbmltcG9ydCAnLi4vc3R5bGVzL3N0eWxlLnNjc3MnO1xuXG4vLyBsb2FkIHNpdGVtYXAgJiByb2JvdHNcbmNvbnN0IHNpdGVtYXAgPSByZXF1aXJlKCcuLi8uLi9zaXRlbWFwLnhtbCcpO1xuY29uc3Qgcm9ib3RzID0gcmVxdWlyZSgnLi4vLi4vcm9ib3RzLnR4dCcpO1xuXG4vLyBsb2FkIGltYWdlc1xuaW1wb3J0IGZhdmljb25JY28gZnJvbSAnLi4vaW1hZ2VzL2Zhdmljb24uaWNvJztcbmltcG9ydCBmYXZpY29uSW1hZ2UgZnJvbSAnLi4vaW1hZ2VzL2Zhdmljb24ucG5nJztcbmltcG9ydCBzaGFyZUltYWdlIGZyb20gJy4uL2ltYWdlcy9zaGFyZS5wbmcnO1xuXG5pbXBvcnQgUGFzc3dvcmQsIHtcbiAgTlVNQkVSUyxcbiAgTE9XRVJDQVNFLFxuICBVUFBFUkNBU0UsXG4gIFNQRUNJQUxfQ0hBUkFDVEVSUyxcbiAgLy8gU0lNSUxBUl9DSEFSUyxcbn0gZnJvbSAnLi9nZW5lYXJhdG9ycy9wYXNzd29yZCdcbmltcG9ydCBQYXNzcGhyYXNlLCB7IFBBU1NQSFJBU0VfV09SRExJU1QgfSBmcm9tICcuL2dlbmVhcmF0b3JzL3Bhc3NwaHJhc2UnXG5cbmxldCBhdmFpbGFibGVDaGFycyA9IFtdO1xuXG5jb25zdCBwd2RHZW5lcmF0ZWRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwd2QtZ2VuZXJhdGVkJyk7XG5jb25zdCBub3RpZmljYXRpb25FbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdub3RpZmljYXRpb24nKTtcbmNvbnN0IGFjdGlvblJlZG9FbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhY3Rpb24tcmVkbycpO1xuY29uc3Qgbm90aWZpY2F0aW9uRGVsZXRlQnRuRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubm90aWZpY2F0aW9uIGJ1dHRvbi5kZWxldGUnKTtcbmNvbnN0IHNldHRpbmdzUGFzc3dvcmRMZW5ndGhSYW5nZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NldHRpbmdzLXBhc3N3b3JkLWxlbmd0aC1yYW5nZScpO1xuY29uc3Qgc2V0dGluZ3NQYXNzcGhyYXNlTGVuZ3RoUmFuZ2VFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZXR0aW5ncy1wYXNzcGhyYXNlLWxlbmd0aC1yYW5nZScpO1xuY29uc3Qgc2V0dGluZ3NQYXNzd29yZExlbmd0aEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NldHRpbmdzLXBhc3N3b3JkLWxlbmd0aCcpO1xuY29uc3QgcHdkQ29udGFpbmVyRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHdkLWNvbnRhaW5lcicpO1xuY29uc3Qgc2V0dGluZ3NQYXNzcGhyYXNlU2VwYXJhdG9yRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2V0dGluZ3MtcGFzc3BocmFzZS1zZXBhcmF0b3InKTtcbmNvbnN0IHNldHRpbmdzUGFzc3BocmFzZUxlbmd0aEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NldHRpbmdzLXBhc3NwaHJhc2UtbGVuZ3RoJyk7XG5jb25zdCBwd2RHZW5lcmF0ZWRTdHJlbmd0aEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3B3ZC1zdHJlbmd0aCcpO1xuY29uc3QgcHdkR2VuZXJhdGVkU3RyZW5ndGhUYWdCb3hFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwd2Qtc3RyZW5ndGgtdGFnYm94Jyk7XG5jb25zdCBwd2RHZW5lcmF0ZWRTdHJlbmd0aFRhZ0VsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3B3ZC1zdHJlbmd0aC10YWcnKTtcbmNvbnN0IHNldHRpbmdzQWxsb3dOdW1iZXJzRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2V0dGluZ3MtYWxsb3ctbnVtYmVycycpO1xuY29uc3Qgc2V0dGluZ3NQYXNzcGhyYXNlQ2FwaXRhbGl6ZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NldHRpbmdzLXBhc3NwaHJhc2UtY2FwaXRhbGl6ZScpO1xuY29uc3Qgc2V0dGluZ3NQYXNzcGhyYXNlSW5jbHVkZU51bWJlcnNFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZXR0aW5ncy1wYXNzcGhyYXNlLWluY2x1ZGUtbnVtYmVycycpO1xuY29uc3Qgc2V0dGluZ3NBbGxvd1VwcGVyY2FzZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NldHRpbmdzLWFsbG93LXVwcGVyY2FzZScpO1xuY29uc3Qgc2V0dGluZ3NBbGxvd0xvd2VyY2FzZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NldHRpbmdzLWFsbG93LWxvd2VyY2FzZScpO1xuY29uc3Qgc2V0dGluZ3NBbGxvd1N5bWJvbHNFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZXR0aW5ncy1hbGxvdy1zeW1ib2xzJyk7XG5jb25zdCBzZXR0aW5nc0V4Y2x1ZGVEdXBsaWNhdGVFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZXR0aW5ncy1leGNsdWRlLWR1cGxpY2F0ZS1jaGFyYWN0ZXJzJyk7XG5jb25zdCBzZXR0aW5nc0V4Y2x1ZGVTaW1pbGFyRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2V0dGluZ3MtZXhjbHVkZS1zaW1pbGFyLWNoYXJhY3RlcnMnKTtcblxuXG5mdW5jdGlvbiBnZXRQYXNzd29yZExlbmd0aCgpIHtcbiAgY29uc3QgbGVuZ3RoID0gc2V0dGluZ3NQYXNzd29yZExlbmd0aEVsLnZhbHVlO1xuICB0cnkge1xuICAgIHJldHVybiBwYXJzZUludChsZW5ndGggfHwgc2V0dGluZ3NQYXNzd29yZExlbmd0aEVsLmdldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInKSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ2Vycm9yJywgZSk7XG4gIH1cbiAgcmV0dXJuIDA7XG59XG5cbmZ1bmN0aW9uIGdldFBhc3NwaHJhc2VMZW5ndGgoKSB7XG4gIGNvbnN0IGxlbmd0aCA9IHNldHRpbmdzUGFzc3BocmFzZUxlbmd0aEVsLnZhbHVlO1xuICB0cnkge1xuICAgIHJldHVybiBwYXJzZUludChsZW5ndGggfHwgc2V0dGluZ3NQYXNzcGhyYXNlTGVuZ3RoRWwuZ2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicpKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5lcnJvcignZXJyb3InLCBlKTtcbiAgfVxuICByZXR1cm4gMDtcbn1cblxuZnVuY3Rpb24gZ2V0UGFzc3BocmFzZVNlcGFyYXRvcigpIHtcbiAgY29uc3Qgc2VwYXJhdG9yID0gc2V0dGluZ3NQYXNzcGhyYXNlU2VwYXJhdG9yRWwudmFsdWU7XG4gIHRyeSB7XG4gICAgcmV0dXJuIHNlcGFyYXRvciB8fCBzZXR0aW5nc1Bhc3NwaHJhc2VTZXBhcmF0b3JFbC5nZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJyk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ2Vycm9yJywgZSk7XG4gIH1cbiAgcmV0dXJuICctJztcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVBdmFpbGFibGVDaGFyc0xlbmd0aCgpIHtcbiAgaWYgKGF2YWlsYWJsZUNoYXJzLmxlbmd0aCA9PT0gMCkge1xuICAgIGFjdGlvblJlZG9FbC5jbGFzc0xpc3QuYWRkKCdpcy1pbnZpc2libGUnKTtcbiAgICByZXR1cm47XG4gIH1cbiAgYWN0aW9uUmVkb0VsLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWludmlzaWJsZScpO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVBdmFpbGFibGVDaGFycygpIHtcbiAgY29uc29sZS50aW1lKCd1cGRhdGVBdmFpbGFibGVDaGFycycpO1xuICBhdmFpbGFibGVDaGFycyA9IG5ldyBTZXQoKTtcblxuICBpZiAoc2V0dGluZ3NBbGxvd051bWJlcnNFbC5jaGVja2VkKSBhdmFpbGFibGVDaGFycyA9IG5ldyBTZXQoWy4uLmF2YWlsYWJsZUNoYXJzLCAuLi5OVU1CRVJTXSk7XG4gIGlmIChzZXR0aW5nc0FsbG93VXBwZXJjYXNlRWwuY2hlY2tlZCkgYXZhaWxhYmxlQ2hhcnMgPSBuZXcgU2V0KFsuLi5hdmFpbGFibGVDaGFycywgLi4uVVBQRVJDQVNFXSk7XG4gIGlmIChzZXR0aW5nc0FsbG93TG93ZXJjYXNlRWwuY2hlY2tlZCkgYXZhaWxhYmxlQ2hhcnMgPSBuZXcgU2V0KFsuLi5hdmFpbGFibGVDaGFycywgLi4uTE9XRVJDQVNFXSk7XG4gIGlmIChzZXR0aW5nc0FsbG93U3ltYm9sc0VsLmNoZWNrZWQpIGF2YWlsYWJsZUNoYXJzID0gbmV3IFNldChbLi4uYXZhaWxhYmxlQ2hhcnMsIC4uLlNQRUNJQUxfQ0hBUkFDVEVSU10pO1xuXG4gIHZhbGlkYXRlQXZhaWxhYmxlQ2hhcnNMZW5ndGgoKTtcbiAgY29uc29sZS50aW1lRW5kKCd1cGRhdGVBdmFpbGFibGVDaGFycycpO1xufVxuXG5mdW5jdGlvbiBzaG93Tm90aWZpY2F0aW9uKCkge1xuICBub3RpZmljYXRpb25FbC5jbGFzc0xpc3QucmVtb3ZlKCdpcy1pbnZpc2libGUnKTtcbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgbm90aWZpY2F0aW9uRWwuY2xhc3NMaXN0LmFkZCgnaXMtaW52aXNpYmxlJyk7XG4gIH0sIDEwMDAwKTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gY29weVRvQ2xpcGJvYXJkKCkge1xuICB0cnkge1xuICAgIGF3YWl0IG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KHB3ZEdlbmVyYXRlZEVsLmlubmVyVGV4dCk7XG4gICAgc2hvd05vdGlmaWNhdGlvbigpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjb3B5aW5nIHRleHQ6ICcsIGVycik7XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlUGFzc3dvcmQoKSB7XG4gIGlmIChhdmFpbGFibGVDaGFycy5zaXplID09PSAwKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG4gIGNvbnN0IHBhc3N3b3JkTGVuZ3RoID0gZ2V0UGFzc3dvcmRMZW5ndGgoKTtcbiAgY29uc3QgZ2VuZXJhdG9yID0gbmV3IFBhc3N3b3JkKGF2YWlsYWJsZUNoYXJzLCBwYXNzd29yZExlbmd0aCk7XG4gIHJldHVybiBnZW5lcmF0b3IuZ2VuZXJhdGUoKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlUGFzc3BocmFzZSgpIHtcbiAgY29uc3QgcGFzc3BocmFzZUxlbmd0aCA9IGdldFBhc3NwaHJhc2VMZW5ndGgoKTtcbiAgY29uc3Qgc2VwYXJhdG9yID0gZ2V0UGFzc3BocmFzZVNlcGFyYXRvcigpO1xuICBjb25zdCBjYXBpdGFsaXplID0gc2V0dGluZ3NQYXNzcGhyYXNlQ2FwaXRhbGl6ZUVsLmNoZWNrZWQ7XG4gIGNvbnN0IGluY2x1ZGVOdW1iZXJzID0gc2V0dGluZ3NQYXNzcGhyYXNlSW5jbHVkZU51bWJlcnNFbC5jaGVja2VkO1xuICBjb25zdCBnZW5lcmF0b3IgPSBuZXcgUGFzc3BocmFzZShQQVNTUEhSQVNFX1dPUkRMSVNULCBwYXNzcGhyYXNlTGVuZ3RoLCBzZXBhcmF0b3IsIGluY2x1ZGVOdW1iZXJzLCBjYXBpdGFsaXplKTtcbiAgcmV0dXJuIGdlbmVyYXRvci5nZW5lcmF0ZSgpXG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVBhc3N3b3JkU2V0dGluZ3MoKSB7XG4gIGNvbnN0IHB3ZE1vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwicHdkLW1vZGVcIl06Y2hlY2tlZCcpLnZhbHVlO1xuICBzd2l0Y2ggKHB3ZE1vZGUpIHtcbiAgICBjYXNlICdlYXN5LXRvLXJlYWQnOiB7XG4gICAgICBzZXR0aW5nc0V4Y2x1ZGVTaW1pbGFyRWwuY2hlY2tlZCA9IHRydWU7XG4gICAgICBzZXR0aW5nc0V4Y2x1ZGVEdXBsaWNhdGVFbC5jaGVja2VkID0gZmFsc2U7XG5cbiAgICAgIHNldHRpbmdzQWxsb3dOdW1iZXJzRWwuY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgc2V0dGluZ3NBbGxvd1VwcGVyY2FzZUVsLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgc2V0dGluZ3NBbGxvd0xvd2VyY2FzZUVsLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgc2V0dGluZ3NBbGxvd1N5bWJvbHNFbC5jaGVja2VkID0gZmFsc2U7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgY2FzZSAnZWFzeS10by1zYXknOiB7XG4gICAgICBzZXR0aW5nc0V4Y2x1ZGVTaW1pbGFyRWwuY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgc2V0dGluZ3NFeGNsdWRlRHVwbGljYXRlRWwuY2hlY2tlZCA9IGZhbHNlO1xuXG4gICAgICBzZXR0aW5nc0FsbG93TnVtYmVyc0VsLmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgIHNldHRpbmdzQWxsb3dVcHBlcmNhc2VFbC5jaGVja2VkID0gdHJ1ZTtcbiAgICAgIHNldHRpbmdzQWxsb3dMb3dlcmNhc2VFbC5jaGVja2VkID0gdHJ1ZTtcbiAgICAgIHNldHRpbmdzQWxsb3dTeW1ib2xzRWwuY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGNhc2UgJ2FsbC1jaGFyYWN0ZXJzJzpcbiAgICBkZWZhdWx0OiB7XG4gICAgICBzZXR0aW5nc0V4Y2x1ZGVTaW1pbGFyRWwuY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgc2V0dGluZ3NFeGNsdWRlRHVwbGljYXRlRWwuY2hlY2tlZCA9IGZhbHNlO1xuXG4gICAgICBzZXR0aW5nc0FsbG93TnVtYmVyc0VsLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgc2V0dGluZ3NBbGxvd1VwcGVyY2FzZUVsLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgc2V0dGluZ3NBbGxvd0xvd2VyY2FzZUVsLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgc2V0dGluZ3NBbGxvd1N5bWJvbHNFbC5jaGVja2VkID0gdHJ1ZTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICB1cGRhdGVBdmFpbGFibGVDaGFycygpO1xufVxuXG5mdW5jdGlvbiBzZXRTdHJlbmd0aChzdHJlbmd0aCkge1xuICBwd2RHZW5lcmF0ZWRTdHJlbmd0aEVsLmNsYXNzTGlzdC5yZW1vdmUoXG4gICAgJ2lzLWRhbmdlcicsXG4gICAgJ2lzLXdhcm5pbmcnLFxuICAgICdpcy1pbmZvJyxcbiAgICAnaXMtc3VjY2VzcycsXG4gICk7XG4gIHB3ZENvbnRhaW5lckVsLmNsYXNzTGlzdC5yZW1vdmUoXG4gICAgJ2lzLWRhbmdlcicsXG4gICAgJ2lzLXdhcm5pbmcnLFxuICAgICdpcy1pbmZvJyxcbiAgICAnaXMtc3VjY2VzcycsXG4gICk7XG4gIHB3ZEdlbmVyYXRlZFN0cmVuZ3RoVGFnQm94RWwuY2xhc3NMaXN0LnJlbW92ZShcbiAgICAnaGFzLWJhY2tncm91bmQtZGFuZ2VyJyxcbiAgICAnaGFzLWJhY2tncm91bmQtd2FybmluZycsXG4gICAgJ2hhcy1iYWNrZ3JvdW5kLWluZm8nLFxuICAgICdoYXMtYmFja2dyb3VuZC1zdWNjZXNzJyxcbiAgICAnaGFzLXRleHQtZGFuZ2VyLWxpZ2h0JyxcbiAgICAnaGFzLXRleHQtd2FybmluZy1kYXJrJyxcbiAgICAnaGFzLXRleHQtaW5mby1saWdodCcsXG4gICAgJ2hhcy10ZXh0LXN1Y2Nlc3MtbGlnaHQnXG4gICk7XG5cbiAgaWYgKHN0cmVuZ3RoIDwgMjgpIHtcbiAgICBwd2RDb250YWluZXJFbC5jbGFzc0xpc3QuYWRkKCdpcy1kYW5nZXInKTsgLy8gTW9sdG8gZGVib2xlXG4gICAgcHdkR2VuZXJhdGVkU3RyZW5ndGhFbC5jbGFzc0xpc3QuYWRkKCdpcy1kYW5nZXInKTsgLy8gTW9sdG8gZGVib2xlXG4gICAgcHdkR2VuZXJhdGVkU3RyZW5ndGhUYWdCb3hFbC5jbGFzc0xpc3QuYWRkKCdoYXMtYmFja2dyb3VuZC1kYW5nZXInLCAnaGFzLXRleHQtZGFuZ2VyLWxpZ2h0Jyk7IC8vIE1vbHRvIGRlYm9sZVxuICAgIHB3ZEdlbmVyYXRlZFN0cmVuZ3RoVGFnRWwuaW5uZXJUZXh0ID0gJ1RvbyBlYXN5IHRvIGd1ZXNzJztcbiAgfSBlbHNlIGlmIChzdHJlbmd0aCA8IDM2KSB7XG4gICAgcHdkQ29udGFpbmVyRWwuY2xhc3NMaXN0LmFkZCgnaXMtd2FybmluZycpOyAvLyBEZWJvbGVcbiAgICBwd2RHZW5lcmF0ZWRTdHJlbmd0aEVsLmNsYXNzTGlzdC5hZGQoJ2lzLXdhcm5pbmcnKTsgLy8gRGVib2xlXG4gICAgcHdkR2VuZXJhdGVkU3RyZW5ndGhUYWdCb3hFbC5jbGFzc0xpc3QuYWRkKCdoYXMtYmFja2dyb3VuZC13YXJuaW5nJywgJ2hhcy10ZXh0LXdhcm5pbmctZGFyaycpOyAvLyBEZWJvbGVcbiAgICBwd2RHZW5lcmF0ZWRTdHJlbmd0aFRhZ0VsLmlubmVyVGV4dCA9ICdBdCByaXNrIG9mIGJlaW5nIGNvbXByb21pc2VkJztcblxuICB9IGVsc2UgaWYgKHN0cmVuZ3RoIDwgNjApIHtcbiAgICBwd2RDb250YWluZXJFbC5jbGFzc0xpc3QuYWRkKCdpcy1pbmZvJyk7IC8vIEJ1b25hXG4gICAgcHdkR2VuZXJhdGVkU3RyZW5ndGhFbC5jbGFzc0xpc3QuYWRkKCdpcy1pbmZvJyk7IC8vIEJ1b25hXG4gICAgcHdkR2VuZXJhdGVkU3RyZW5ndGhUYWdCb3hFbC5jbGFzc0xpc3QuYWRkKCdoYXMtYmFja2dyb3VuZC1pbmZvJywgJ2hhcy10ZXh0LWluZm8tbGlnaHQnKTsgLy8gQnVvbmFcbiAgICBwd2RHZW5lcmF0ZWRTdHJlbmd0aFRhZ0VsLmlubmVyVGV4dCA9ICdTZWN1cmUgZm9yIG5vcm1hbCB1c2UnO1xuXG4gIH0gZWxzZSB7XG4gICAgcHdkQ29udGFpbmVyRWwuY2xhc3NMaXN0LmFkZCgnaXMtc3VjY2VzcycpOyAvLyBNb2x0byBzaWN1cmFcbiAgICBwd2RHZW5lcmF0ZWRTdHJlbmd0aEVsLmNsYXNzTGlzdC5hZGQoJ2lzLXN1Y2Nlc3MnKTsgLy8gTW9sdG8gc2ljdXJhXG4gICAgcHdkR2VuZXJhdGVkU3RyZW5ndGhUYWdCb3hFbC5jbGFzc0xpc3QuYWRkKCdoYXMtYmFja2dyb3VuZC1zdWNjZXNzJywgJ2hhcy10ZXh0LXN1Y2Nlc3MtbGlnaHQnKTsgLy8gTW9sdG8gc2ljdXJhXG4gICAgcHdkR2VuZXJhdGVkU3RyZW5ndGhUYWdFbC5pbm5lclRleHQgPSAnUHJvdGVjdHMgYWdhaW5zdCBoYWNraW5nIGF0dGVtcHRzJztcbiAgfVxufVxuXG5mdW5jdGlvbiB0b2dnbGVQd2RUeXBlKGV2ZW50KSB7XG4gIGlmIChldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2lzLWFjdGl2ZScpKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI3B3ZC10eXBlLXNlbGVjdG9yLXRhYiBsaSBhJykuZm9yRWFjaChlbCA9PiBlbC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWFjdGl2ZScpKTtcbiAgY29uc3QgdHlwZSA9IGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdHlwZScpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2V0dGluZ3MnKS5mb3JFYWNoKGVsID0+IHtcbiAgICBpZiAoIWVsLmNsYXNzTGlzdC5jb250YWlucygnaXMtaGlkZGVuJykpIHtcbiAgICAgIGVsLmNsYXNzTGlzdC5hZGQoJ2lzLWhpZGRlbicpXG4gICAgfVxuICB9KTtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7dHlwZX0tc2V0dGluZ3NgKS5jbGFzc0xpc3QucmVtb3ZlKCdpcy1oaWRkZW4nKTtcbiAgZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaXMtYWN0aXZlJyk7XG5cbiAgaGFuZGxlUGFzc3dvcmRDcmVhdGlvbigpO1xufVxuXG5mdW5jdGlvbiBiaW5kRXZlbnRzKCkge1xuICBzZXR0aW5nc1Bhc3N3b3JkTGVuZ3RoUmFuZ2VFbC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcbiAgICBzZXR0aW5nc1Bhc3N3b3JkTGVuZ3RoRWwudmFsdWUgPSBzZXR0aW5nc1Bhc3N3b3JkTGVuZ3RoUmFuZ2VFbC52YWx1ZTtcbiAgICBoYW5kbGVQYXNzd29yZENyZWF0aW9uKClcbiAgfSk7XG4gIHNldHRpbmdzUGFzc3BocmFzZUxlbmd0aFJhbmdlRWwuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XG4gICAgc2V0dGluZ3NQYXNzcGhyYXNlTGVuZ3RoRWwudmFsdWUgPSBzZXR0aW5nc1Bhc3NwaHJhc2VMZW5ndGhSYW5nZUVsLnZhbHVlO1xuICAgIGhhbmRsZVBhc3N3b3JkQ3JlYXRpb24oKVxuICB9KTtcbiAgc2V0dGluZ3NQYXNzcGhyYXNlU2VwYXJhdG9yRWwuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoKSA9PiB7XG4gICAgaGFuZGxlUGFzc3dvcmRDcmVhdGlvbigpO1xuICB9KTtcblxuICBzZXR0aW5nc1Bhc3N3b3JkTGVuZ3RoRWwuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgIGlmIChzZXR0aW5nc1Bhc3N3b3JkTGVuZ3RoRWwudmFsdWUgPCAxKSB7XG4gICAgICBzZXR0aW5nc1Bhc3N3b3JkTGVuZ3RoRWwudmFsdWUgPSAxO1xuICAgIH1cbiAgICBpZiAoc2V0dGluZ3NQYXNzd29yZExlbmd0aEVsLnZhbHVlID4gMjU2KSB7XG4gICAgICBzZXR0aW5nc1Bhc3N3b3JkTGVuZ3RoRWwudmFsdWUgPSAyNTY7XG4gICAgfVxuICAgIHNldHRpbmdzUGFzc3dvcmRMZW5ndGhSYW5nZUVsLnZhbHVlID0gc2V0dGluZ3NQYXNzd29yZExlbmd0aEVsLnZhbHVlO1xuICAgIGhhbmRsZVBhc3N3b3JkQ3JlYXRpb24oKTtcbiAgfSk7XG5cbiAgbm90aWZpY2F0aW9uRGVsZXRlQnRuRWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgbm90aWZpY2F0aW9uRWwuY2xhc3NMaXN0LmFkZCgnaXMtaW52aXNpYmxlJyk7XG4gIH0pO1xuXG4gIGFjdGlvblJlZG9FbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZVBhc3N3b3JkQ3JlYXRpb24pO1xuXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhY3Rpb24tY29weS10by1jbGlwYm9hcmQnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNvcHlUb0NsaXBib2FyZCk7XG5cbiAgZm9yIChsZXQgZWwgb2YgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc2V0dGluZy1lbGVtZW50JykpIHtcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICB1cGRhdGVBdmFpbGFibGVDaGFycygpO1xuICAgICAgaGFuZGxlUGFzc3dvcmRDcmVhdGlvbigpO1xuICAgIH0pO1xuICB9XG5cbiAgZm9yIChsZXQgZWwgb2YgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc2V0dGluZy1wd2QtbW9kZScpKSB7XG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgdXBkYXRlUGFzc3dvcmRTZXR0aW5ncygpXG4gICAgICBoYW5kbGVQYXNzd29yZENyZWF0aW9uKClcbiAgICB9KTtcbiAgfVxuXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNwd2QtdHlwZS1zZWxlY3Rvci10YWIgbGkgYScpLmZvckVhY2goKGVsKSA9PiB7XG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGVQd2RUeXBlKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHdyaXRlV2VsbGNvbWVNZXNzYWdlKCkge1xuICBjb25zdCB3ZWxsY29tZU1lc3NhZ2VTZXR0aW5ncyA9ICdjb2xvcjojNDg1ZmM3OyBmb250LXNpemU6IDE2cHg7IGZvbnQtd2VpZ2h0OiA3MDA7IGZvbnQtZmFtaWx5OiBtb25vc3BhY2UnO1xuICBjb25zb2xlLmxvZygnJWPioIDioIDioIAg4qCA4qCA4qCAIOKggOKggOKggCDioIDioIDioIAg4qCA4qCA4qCAIOKggOKggOKggCDioIDioIDioIAg4qCA4qCA4qCAIOKggOKggOKggCDioIDioIDioIAg4qCA4qCA4qCAIOKggOKggOKggCDioIDioIDioIAg4qCA4qCA4qCAJywgd2VsbGNvbWVNZXNzYWdlU2V0dGluZ3MpO1xuICBjb25zb2xlLmxvZygnJWPioIDioIDioIAgV2VsY29tZSB0byB0aGUgZGV2ZWxvcGVyIHZhdWx0IS4gICAgICAgICAgICAgICAgICAgICDioIDioIDioIAnLCB3ZWxsY29tZU1lc3NhZ2VTZXR0aW5ncyk7XG4gIGNvbnNvbGUubG9nKCclY+KggOKggOKggCBUb3Agc2VjcmV0IHBhc3N3b3JkIGdlbmVyYXRpb24gaGFwcGVucyBoZXJlLi4uICAgICAgIOKggOKggOKggCcsIHdlbGxjb21lTWVzc2FnZVNldHRpbmdzKTtcbiAgY29uc29sZS5sb2coJyVj4qCA4qCA4qCAIE1vc3RseS4gXl9eICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4qCA4qCA4qCAJywgd2VsbGNvbWVNZXNzYWdlU2V0dGluZ3MpO1xuICBjb25zb2xlLmxvZygnJWPioIDioIDioIAg4qCA4qCA4qCAIOKggOKggOKggCDioIDioIDioIAg4qCA4qCA4qCAIOKggOKggOKggCDioIDioIDioIAg4qCA4qCA4qCAIOKggOKggOKggCDioIDioIDioIAg4qCA4qCA4qCAIOKggOKggOKggCDioIDioIDioIAg4qCA4qCA4qCAJywgd2VsbGNvbWVNZXNzYWdlU2V0dGluZ3MpO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5UGFnZSgpIHtcbiAgZG9jdW1lbnQuYm9keS5zdHlsZSA9ICdkaXNwbGF5OiBhdXRvJztcbn1cblxuZnVuY3Rpb24gaGFuZGxlUGFzc3dvcmRDcmVhdGlvbigpIHtcbiAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwd2QtdHlwZS1zZWxlY3Rvci10YWIgbGkuaXMtYWN0aXZlIGEnKS5nZXRBdHRyaWJ1dGUoJ2RhdGEtdHlwZScpID09PSAncGFzc3BocmFzZScpIHtcbiAgICBjb25zdCB7IHBhc3NwaHJhc2UsIHN0cmVuZ3RoIH0gPSBjcmVhdGVQYXNzcGhyYXNlKCk7XG4gICAgcHdkR2VuZXJhdGVkRWwuaW5uZXJIVE1MID0gcGFzc3BocmFzZTtcbiAgICBzZXRTdHJlbmd0aChzdHJlbmd0aCk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgeyBwYXNzd29yZCwgc3RyZW5ndGggfSA9IGNyZWF0ZVBhc3N3b3JkKCk7XG4gIHB3ZEdlbmVyYXRlZEVsLmlubmVySFRNTCA9IHBhc3N3b3JkO1xuICBzZXRTdHJlbmd0aChzdHJlbmd0aCk7XG59XG5cbmZ1bmN0aW9uIGluaXRhbGl6ZVBhZ2VFbGVtZW50cygpIHtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NldHRpbmdzLWFsbG93LXN5bWJvbHMtbGlzdCcpLmlubmVySFRNTCA9IEFycmF5LmZyb20oU1BFQ0lBTF9DSEFSQUNURVJTKS5tYXAoKGVsKSA9PlxuICAgIFN0cmluZy5mcm9tQ2hhckNvZGUoZWwpXG4gICk7XG59XG5cbi8vIEluaXRcbmZ1bmN0aW9uIGluaXQoKSB7XG5cbiAgY29uc29sZS5sb2coJ1BBU1NQSFJBU0VfV09SRExJU1QnLCBQQVNTUEhSQVNFX1dPUkRMSVNUKVxuICB3cml0ZVdlbGxjb21lTWVzc2FnZSgpO1xuXG4gIGJpbmRFdmVudHMoKTtcbiAgaW5pdGFsaXplUGFnZUVsZW1lbnRzKCk7XG5cbiAgLy8gVXBkYXRlIHRoZSBBdmFpbGFibGVDaGFycyBhcnJheSBiYXNlZCBvbiB0aGUgaHRtbCBkZWZhdWx0XG4gIC8vIGFuZCBjcmVhdGUgdGhlIGZpcnN0IHBhc3N3b3JkXG4gIHVwZGF0ZUF2YWlsYWJsZUNoYXJzKCk7XG4gIGhhbmRsZVBhc3N3b3JkQ3JlYXRpb24oKTtcblxuICAvLyBTaG93IGNvbnRlbnQgb25seSB3aGVuIHBhZ2UgaXMgbG9hZGVkXG4gIGRpc3BsYXlQYWdlKCk7XG59XG5cbndpbmRvdy5vbmxvYWQgPSBpbml0O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9