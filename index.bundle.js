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
___CSS_LOADER_EXPORT___.push([module.id, `::selection {
  color: #ffffff;
  background: #a89d91;
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

#pwd-strength-tagbox {
  position: absolute;
  bottom: 5px;
  right: 0px;
}
#pwd-strength-tagbox span {
  border-top-left-radius: 6px;
}

#pwd-strength {
  position: absolute;
  bottom: 0px;
  left: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  height: 0.5rem;
}

.pwd-container {
  font-size: 2rem;
  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: space-between;
}
.pwd-container .actions {
  display: flex;
}
.pwd-container .actions .action {
  padding: 0 1rem;
  color: #485fc7;
}
.pwd-container .actions .action:hover {
  color: #444;
  text-shadow: 0 0 5px #a89d91;
}
.pwd-container ::selection {
  color: #ffffff;
  background: #a89d91;
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
}`, "",{"version":3,"sources":["webpack://./src/styles/style.scss"],"names":[],"mappings":"AASA;EACC,cANiB;EAOjB,mBATgB;EAUhB,kBAAA;AAPD;;AAUA;;EAEC,WAXW;EAYX,SAAA;EACA,UAAA;EACA,WAAA;EACA,YAAA;EACA,oCAAA;EACA,yBAAA;EACA,gBAAA;EACA,kBAAA;EACA,eAAA;EACA,yBAvBiB;EAwBjB,uBAAA;EACA,6BAAA;AAPD;;AAUA;;EAEC,mCAAA;EACA,cAAA;AAPD;;AAUA;EACC,kBAAA;AAPD;;AAUA;EACC,iBAAA;AAPD;;AAUA;EACC,eAAA;AAPD;;AAUA;EACC,eAAA;EACA,MAAA;EACA,WAAA;EACA,yBAAA;EACA,UAAA;EACA,YAAA;EACA,yBAAA;EAEA,8CACC;AATF;AAYC;EACC,UAAA;AAVF;;AAcA;EACC,kBAAA;EACA,WAAA;EACA,UAAA;AAXD;AAaC;EACC,2BAAA;AAXF;;AAeA;EACC,kBAAA;EACA,WAAA;EACA,SAAA;EACA,2BAAA;EACA,4BAAA;EACA,8BAAA;EACA,+BAAA;EACA,cAAA;AAZD;;AAeA;EACC,eAAA;EACA,aAAA;EACA,mBAAA;EACA,qBAAA;EACA,8BAAA;AAZD;AAcC;EACC,aAAA;AAZF;AAcE;EACC,eAAA;EACA,cAlGY;AAsFf;AAcG;EAEC,WAnGQ;EAoGR,4BAAA;AAbJ;AAkBC;EACC,cA5GgB;EA6GhB,mBA/Ge;EAgHf,kBAAA;AAhBF;;AAoBA;EACC,WAAA;AAjBD;;AAmBA;EACC,WAAA;AAhBD;;AAmBA;EACC,yBA5HgB;EA6HhB,cA3HiB;EA4HjB,mBAAA;EACA,yBAAA;EACA,aAAA;AAhBD;AAmBC;EACC,cAlIgB;EAmIhB,mBApIa;EAqIb,kBAAA;AAjBF;AAoBC;;EAEC,WAvIU;AAqHZ;;AAuBA;EACC,6BAAA;EACA,yBAAA;AApBD;;AAuBA;EACC,cAAA;AApBD;;AAwBC;EACC,kBAAA;EACA,qBAAA;EACA,YAAA;EACA,WAAA;EACA,mBAAA;EACA,kBAAA;EACA,gBAAA;EACA,oBAAA;EACA,cAlKa;AA6If;AAuBE;EACC,YAAA;EACA,kBAAA;EACA,QAAA;EACA,SAAA;EACA,WAAA;EACA,YAAA;EACA,WAAA;EACA,gBAAA;EACA,oBAAA;EACA,gCAAA;AArBH;AAwBC;EACC,UAAA;EACA,mBAnLa;EAoLb,gCAAA;AAtBF","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap\");\n\n$secondaryColor: #a89d91;\n$primaryColor: #485fc7;\n$backgroundColor: #ffffff;\n\n$textColor: #444;\n$linkColor: $primaryColor;\n\n::selection {\n\tcolor: $backgroundColor;\n\tbackground: $secondaryColor;\n\tborder-radius: 4px;\n}\n\nhtml,\nbody {\n\tcolor: $textColor;\n\tmargin: 0;\n\tpadding: 0;\n\twidth: 100%;\n\theight: 100%;\n\tfont-family: \"Open Sans\", sans-serif;\n\tfont-optical-sizing: auto;\n\tfont-weight: 400;\n\tfont-style: normal;\n\tfont-size: 16px;\n\tbackground-color: $backgroundColor;\n\tscroll-behavior: smooth;\n\tscroll-snap-type: y mandatory;\n}\n\n.title,\n.subtitle {\n\tfont-family: \"Kode Mono\", monospace;\n\tcolor: inherit;\n}\n\n.section {\n\tpadding: 2rem 2rem;\n}\n\n.is-fullheight {\n\tmin-height: 100vh;\n}\n\n.is-fullwidth {\n\tmin-width: 100%;\n}\n\n.notification {\n\tposition: fixed;\n\ttop: 0;\n\twidth: 100%;\n\tbackground-color: #ffe645;\n\topacity: 1;\n\tz-index: 100;\n\tbox-shadow: 0 0 10px $textColor;\n\n\ttransition:\n\t\tvisibility 0s,\n\t\topacity 0.3s linear;\n\n\t&.is-invisible {\n\t\topacity: 0;\n\t}\n}\n\n#pwd-strength-tagbox {\n\tposition: absolute;\n\tbottom: 5px;\n\tright: 0px;\n\n\tspan {\n\t\tborder-top-left-radius: 6px;\n\t}\n}\n\n#pwd-strength {\n\tposition: absolute;\n\tbottom: 0px;\n\tleft: 0px;\n\tborder-top-left-radius: 0px;\n\tborder-top-right-radius: 0px;\n\tborder-bottom-left-radius: 6px;\n\tborder-bottom-right-radius: 6px;\n\theight: 0.5rem;\n}\n\n.pwd-container {\n\tfont-size: 2rem;\n\tdisplay: flex;\n\tflex-direction: row;\n\talign-items: baseline;\n\tjustify-content: space-between;\n\n\t.actions {\n\t\tdisplay: flex;\n\n\t\t.action {\n\t\t\tpadding: 0 1rem;\n\t\t\tcolor: $linkColor;\n\n\t\t\t&:hover {\n\t\t\t\t// color: lighten($color: $secondaryColor, $amount: 20);\n\t\t\t\tcolor: $textColor;\n\t\t\t\ttext-shadow: 0 0 5px $secondaryColor;\n\t\t\t}\n\t\t}\n\t}\n\n\t::selection {\n\t\tcolor: $backgroundColor;\n\t\tbackground: $secondaryColor;\n\t\tborder-radius: 4px;\n\t}\n}\n\n#settings-password-length {\n\twidth: 64px;\n}\n#settings-password-length-range {\n\twidth: 100%;\n}\n\n.settings-container {\n\tbackground-color: $secondaryColor;\n\tcolor: $backgroundColor;\n\tborder-radius: 10px;\n\tborder: 2px solid $primaryColor;\n\tpadding: 1rem;\n\t// box-shadow: 0 2px 10px $primaryColor;\n\n\t::selection {\n\t\tcolor: $backgroundColor;\n\t\tbackground: $primaryColor;\n\t\tborder-radius: 4px;\n\t}\n\n\t.checkbox:hover,\n\t.radio:hover {\n\t\tcolor: $textColor;\n\t\t// text-shadow: 0 0 5px $backgroundColor;\n\t}\n}\n\n.footer {\n\tborder-top: 2px solid #245494;\n\tbackground-color: #7ca7df;\n}\n\n.is-owerflow-auto {\n\toverflow: auto;\n}\n\ninput {\n\t+ span.toggle {\n\t\tposition: relative;\n\t\tdisplay: inline-block;\n\t\theight: 24px;\n\t\twidth: 40px;\n\t\tmargin-bottom: -6px;\n\t\tmargin-left: -24px;\n\t\tbackground: #eee;\n\t\tborder-radius: 100vh;\n\t\tcolor: $primaryColor; \n\t\t\n\t\t&:before {\n\t\t\tcontent: \" \";\n\t\t\tposition: absolute;\n\t\t\ttop: 4px;\n\t\t\tleft: 4px;\n\t\t\tright: auto;\n\t\t\theight: 16px;\n\t\t\twidth: 16px;\n\t\t\tbackground: #bbb;\n\t\t\tborder-radius: 100vh;\n\t\t\ttransition: all 0.4s ease-in-out;\n\t\t}\n\t}\n\t&:checked + span.toggle:before {\n\t\tleft: 20px;\n\t\tbackground: $primaryColor;\n\t\ttransition: all 0.4s ease-in-out;\n\t}\n}\n"],"sourceRoot":""}]);
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
// load styles


// load sitemap & robots
const sitemap = __webpack_require__(/*! ../../sitemap.xml */ "./sitemap.xml");
const robots = __webpack_require__(/*! ../../robots.txt */ "./robots.txt");

// load images




class Password {
  #excludeDuplicates;
  #chars;
  #length = 0;
  constructor(excludeDuplicates) {
    this.#excludeDuplicates = excludeDuplicates;
    this.#chars = this.#excludeDuplicates ? new Set() : [];
  }

  addChar(char) {
    if (this.#excludeDuplicates) {
      this.#chars.add(char);
      this.#length = this.#chars.size;
    } else {
      this.#chars.push(char);
      this.#length++;
    }
  }

  get length() {
    return this.#length;
  }

  toString() {
    if (this.#excludeDuplicates) {
      return Array.from(this.#chars).join('');
    } else {
      return this.#chars.join('');
    }
  }

  clear() {
    if (this.#excludeDuplicates) {
      this.#chars.clear();
    } else {
      // this.#chars.fill(0);
      this.#chars.length = 0;
    }
    this.#length = 0;
  }
}

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

let availableChars = [];

const pwdGeneratedEl = document.getElementById('pwd-generated');
const notificationEl = document.getElementById('notification');
const actionRedoEl = document.getElementById('action-redo');
const notificationDeleteBtnEl = document.querySelector('.notification button.delete');
const settingsPasswordLengthRangeEl = document.getElementById('settings-password-length-range');
const settingsPasswordLengthEl = document.getElementById('settings-password-length');
const pwdGeneratedStrengthEl = document.getElementById('pwd-strength');
const pwdGeneratedStrengthTagEl = document.getElementById('pwd-strength-tag');
const settingsAllowNumbersEl = document.getElementById('settings-allow-numbers');
const settingsAllowUppercaseEl = document.getElementById('settings-allow-uppercase');
const settingsAllowLowercaseEl = document.getElementById('settings-allow-lowercase');
const settingsAllowSymbolsEl = document.getElementById('settings-allow-symbols');
const settingsExcludeDuplicateEl = document.getElementById('settings-exclude-duplicate-characters');
const settingsExcludeSimilarEl = document.getElementById('settings-exclude-similar-characters');

function isSimilarCharExcluded(char) {
  const similarGroup = SIMILAR_CHARS[char];
  return !!similarGroup && settingsExcludeSimilarEl.checked && availableChars.some((el) => similarGroup.includes(el));
}

function getPasswordLength(settingsPasswordLength) {
  const length = settingsPasswordLength.value;
  try {
    return parseInt(length || settingsPasswordLength.getAttribute('placeholder'));
  } catch (e) {
    console.log('error', e);
  }
  return 0;
}

function validateAvailableCharsLength() {
  if (availableChars.length === 0) {
    actionRedoEl.classList.add('is-invisible');
    return;
  }
  actionRedoEl.classList.remove('is-invisible');
}

// Update availableChars based on settings during initialization
// function updateAvailableChars() {
//   console.time('updateAvailableChars');
//   availableChars = [
//     ...(settingsAllowNumbersEl.checked ? NUMBERS : []),
//     ...(settingsAllowUppercaseEl.checked ? UPPERCASE : []),
//     ...(settingsAllowLowercaseEl.checked ? LOWERCASE : []),
//     ...(settingsAllowSymbolsEl.checked ? SPECIAL_CHARACTERS : []),
//   ];
//   validateAvailableCharsLength();
//   console.timeEnd('updateAvailableChars');
// }

function updateAvailableChars() {
  console.time('updateAvailableChars');
  availableChars = new Set();

  if (settingsAllowNumbersEl.checked) availableChars = new Set([...availableChars, ...NUMBERS]);
  if (settingsAllowUppercaseEl.checked) availableChars = new Set([...availableChars, ...UPPERCASE]);
  if (settingsAllowLowercaseEl.checked) availableChars = new Set([...availableChars, ...LOWERCASE]);
  if (settingsAllowSymbolsEl.checked) availableChars = new Set([...availableChars, ...SPECIAL_CHARACTERS]);

  validateAvailableCharsLength();
  console.timeEnd('updateAvailableChars');
}

function showNotification() {
  notificationEl.classList.remove('is-invisible');
  setTimeout(() => {
    notificationEl.classList.add('is-invisible');
  }, 3000);
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

  console.time('createPassword');

  const passwordLength = getPasswordLength(settingsPasswordLengthRangeEl);
  const charsArray = Array.from(availableChars);
  const randomValues = crypto.getRandomValues(new Uint32Array(passwordLength));

  const password = Array.from({ length: passwordLength }, (_, i) => {
    return String.fromCharCode(charsArray[randomValues[i] % charsArray.length]);
  }).join('');

  console.timeEnd('createPassword');
  return password;
}

// function createPassword() {
//   if (availableChars.size === 0) {
//     return '';
//   }

//   console.time('createPassword');

//   const passwordLength = getPasswordLength(settingsPasswordLengthRangeEl);
//   const charsArray = Array.from(availableChars);
//   const indexes = crypto.getRandomValues(new Uint32Array(charsArray.length));
//   const password = new Password(settingsExcludeDuplicateEl.checked);

//   const maxPasswordLength = settingsExcludeDuplicateEl.checked
//     ? Math.min(passwordLength, charsArray.length)
//     : passwordLength;

//   let loop = 0;
//   while (password.length < maxPasswordLength) {
//     const index = indexes[loop % indexes.length] % charsArray.length;
//     const char = String.fromCharCode(charsArray[index]);

//     if (!isSimilarCharExcluded(char)) {
//       password.addChar(char);
//     }
//     loop++;
//   }

//   const passwordAsString = password.toString();

//   // Clear password in memory
//   password.clear();

//   console.timeEnd('createPassword');
//   return passwordAsString;
// }

function updateSettings() {
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

function calculatePasswordEntropy(length, charsetSize) {
  return length * Math.log2(charsetSize);
}

function calculatePasswordLevel() {
  console.log('calculatePasswordLevel');

  const pwdLength = getPasswordLength(settingsPasswordLengthRangeEl);
  const charsetSize = availableChars.size || 1;
  const entropy = calculatePasswordEntropy(pwdLength, charsetSize);
  console.log('entropy', entropy, 'charsetSize', charsetSize, 'pwdLength', pwdLength);

  pwdGeneratedStrengthEl.classList.remove('is-danger', 'is-warning', 'is-info', 'is-success');
  pwdGeneratedStrengthTagEl.classList.remove('has-background-danger', 'has-background-warning', 'has-background-info', 'has-background-success');

  if (entropy < 28) {
    pwdGeneratedStrengthEl.classList.add('is-danger'); // Molto debole
    pwdGeneratedStrengthTagEl.classList.add('has-background-danger', 'has-text-danger-light'); // Molto debole
    pwdGeneratedStrengthTagEl.innerText = 'Too easy to guess';
  } else if (entropy < 36) {
    pwdGeneratedStrengthEl.classList.add('is-warning'); // Debole
    pwdGeneratedStrengthTagEl.classList.add('has-background-warning', 'has-text-warning-dark'); // Debole
    pwdGeneratedStrengthTagEl.innerText = 'At risk of being compromised';
  } else if (entropy < 60) {
    pwdGeneratedStrengthEl.classList.add('is-info'); // Buona
    pwdGeneratedStrengthTagEl.classList.add('has-background-info', 'has-text-info-light'); // Buona
    pwdGeneratedStrengthTagEl.innerText = 'Secure for normal use';
  } else {
    pwdGeneratedStrengthEl.classList.add('is-success'); // Molto sicura
    pwdGeneratedStrengthTagEl.classList.add('has-background-success', 'has-text-success-light'); // Molto sicura
    pwdGeneratedStrengthTagEl.innerText = 'Protects against hacking attempts';
  }
}

function bindEvents() {
  settingsPasswordLengthRangeEl.addEventListener('input', () => {
    settingsPasswordLengthEl.value = settingsPasswordLengthRangeEl.value;
  });
  settingsPasswordLengthEl.addEventListener('change', () => {
    if (settingsPasswordLengthEl.value < 4) {
      settingsPasswordLengthEl.value = 4;
    }
    if (settingsPasswordLengthEl.value > 56) {
      settingsPasswordLengthEl.value = 56;
    }
    settingsPasswordLengthRangeEl.value = settingsPasswordLengthEl.value;
  });

  notificationDeleteBtnEl.addEventListener('click', () => {
    notificationEl.classList.add('is-invisible');
  });

  actionRedoEl.addEventListener('click', handlePasswordCreation);

  document.getElementById('action-copy-to-clipboard').addEventListener('click', copyToClipboard);

  for (let el of document.getElementsByClassName('setting-element')) {
    el.addEventListener('change', updateAvailableChars);
  }

  for (let el of document.getElementsByClassName('setting-pwd-mode')) {
    el.addEventListener('change', updateSettings);
  }
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
  pwdGeneratedEl.innerHTML = createPassword();
  calculatePasswordLevel();
}

function initalizePageElements() {
  document.getElementById('settings-allow-symbols-list').innerHTML = Array.from(SPECIAL_CHARACTERS).map((el) =>
    String.fromCharCode(el)
  );
}

// Init
function init() {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LHFEQUFxRDtBQUNyRCwyRkFBMkY7QUFDM0Y7QUFDQSxJQUFJO0FBQ0osd0RBQXdEO0FBQ3hELGlHQUFpRztBQUNqRztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHOztBQUVIOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtEQUFrRCxpQkFBaUIsa0JBQWtCO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hbm90aGVyLXBhc3N3b3JkLWdlbmVyYXRvci8uL3NyYy9zdHlsZXMvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly9hbm90aGVyLXBhc3N3b3JkLWdlbmVyYXRvci8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYW5vdGhlci1wYXNzd29yZC1nZW5lcmF0b3IvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9hbm90aGVyLXBhc3N3b3JkLWdlbmVyYXRvci8uL3NyYy9zdHlsZXMvc3R5bGUuc2Nzcz9lNWQ4Iiwid2VicGFjazovL2Fub3RoZXItcGFzc3dvcmQtZ2VuZXJhdG9yLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2Fub3RoZXItcGFzc3dvcmQtZ2VuZXJhdG9yLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9hbm90aGVyLXBhc3N3b3JkLWdlbmVyYXRvci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9hbm90aGVyLXBhc3N3b3JkLWdlbmVyYXRvci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9hbm90aGVyLXBhc3N3b3JkLWdlbmVyYXRvci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2Fub3RoZXItcGFzc3dvcmQtZ2VuZXJhdG9yLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYW5vdGhlci1wYXNzd29yZC1nZW5lcmF0b3IvLi9zcmMvc2NyaXB0cy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU9wZW4rU2FuczppdGFsLHdnaHRAMCwzMDAuLjgwMDsxLDMwMC4uODAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOjpzZWxlY3Rpb24ge1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYmFja2dyb3VuZDogI2E4OWQ5MTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG5odG1sLFxuYm9keSB7XG4gIGNvbG9yOiAjNDQ0O1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LW9wdGljYWwtc2l6aW5nOiBhdXRvO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XG4gIHNjcm9sbC1zbmFwLXR5cGU6IHkgbWFuZGF0b3J5O1xufVxuXG4udGl0bGUsXG4uc3VidGl0bGUge1xuICBmb250LWZhbWlseTogXCJLb2RlIE1vbm9cIiwgbW9ub3NwYWNlO1xuICBjb2xvcjogaW5oZXJpdDtcbn1cblxuLnNlY3Rpb24ge1xuICBwYWRkaW5nOiAycmVtIDJyZW07XG59XG5cbi5pcy1mdWxsaGVpZ2h0IHtcbiAgbWluLWhlaWdodDogMTAwdmg7XG59XG5cbi5pcy1mdWxsd2lkdGgge1xuICBtaW4td2lkdGg6IDEwMCU7XG59XG5cbi5ub3RpZmljYXRpb24ge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmU2NDU7XG4gIG9wYWNpdHk6IDE7XG4gIHotaW5kZXg6IDEwMDtcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggIzQ0NDtcbiAgdHJhbnNpdGlvbjogdmlzaWJpbGl0eSAwcywgb3BhY2l0eSAwLjNzIGxpbmVhcjtcbn1cbi5ub3RpZmljYXRpb24uaXMtaW52aXNpYmxlIHtcbiAgb3BhY2l0eTogMDtcbn1cblxuI3B3ZC1zdHJlbmd0aC10YWdib3gge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogNXB4O1xuICByaWdodDogMHB4O1xufVxuI3B3ZC1zdHJlbmd0aC10YWdib3ggc3BhbiB7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDZweDtcbn1cblxuI3B3ZC1zdHJlbmd0aCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwcHg7XG4gIGxlZnQ6IDBweDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMHB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMHB4O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA2cHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA2cHg7XG4gIGhlaWdodDogMC41cmVtO1xufVxuXG4ucHdkLWNvbnRhaW5lciB7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4ucHdkLWNvbnRhaW5lciAuYWN0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4ucHdkLWNvbnRhaW5lciAuYWN0aW9ucyAuYWN0aW9uIHtcbiAgcGFkZGluZzogMCAxcmVtO1xuICBjb2xvcjogIzQ4NWZjNztcbn1cbi5wd2QtY29udGFpbmVyIC5hY3Rpb25zIC5hY3Rpb246aG92ZXIge1xuICBjb2xvcjogIzQ0NDtcbiAgdGV4dC1zaGFkb3c6IDAgMCA1cHggI2E4OWQ5MTtcbn1cbi5wd2QtY29udGFpbmVyIDo6c2VsZWN0aW9uIHtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGJhY2tncm91bmQ6ICNhODlkOTE7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuI3NldHRpbmdzLXBhc3N3b3JkLWxlbmd0aCB7XG4gIHdpZHRoOiA2NHB4O1xufVxuXG4jc2V0dGluZ3MtcGFzc3dvcmQtbGVuZ3RoLXJhbmdlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5zZXR0aW5ncy1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTg5ZDkxO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm9yZGVyOiAycHggc29saWQgIzQ4NWZjNztcbiAgcGFkZGluZzogMXJlbTtcbn1cbi5zZXR0aW5ncy1jb250YWluZXIgOjpzZWxlY3Rpb24ge1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYmFja2dyb3VuZDogIzQ4NWZjNztcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuLnNldHRpbmdzLWNvbnRhaW5lciAuY2hlY2tib3g6aG92ZXIsXG4uc2V0dGluZ3MtY29udGFpbmVyIC5yYWRpbzpob3ZlciB7XG4gIGNvbG9yOiAjNDQ0O1xufVxuXG4uZm9vdGVyIHtcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICMyNDU0OTQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3Y2E3ZGY7XG59XG5cbi5pcy1vd2VyZmxvdy1hdXRvIHtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbmlucHV0ICsgc3Bhbi50b2dnbGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgaGVpZ2h0OiAyNHB4O1xuICB3aWR0aDogNDBweDtcbiAgbWFyZ2luLWJvdHRvbTogLTZweDtcbiAgbWFyZ2luLWxlZnQ6IC0yNHB4O1xuICBiYWNrZ3JvdW5kOiAjZWVlO1xuICBib3JkZXItcmFkaXVzOiAxMDB2aDtcbiAgY29sb3I6ICM0ODVmYzc7XG59XG5pbnB1dCArIHNwYW4udG9nZ2xlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiIFwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNHB4O1xuICBsZWZ0OiA0cHg7XG4gIHJpZ2h0OiBhdXRvO1xuICBoZWlnaHQ6IDE2cHg7XG4gIHdpZHRoOiAxNnB4O1xuICBiYWNrZ3JvdW5kOiAjYmJiO1xuICBib3JkZXItcmFkaXVzOiAxMDB2aDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XG59XG5pbnB1dDpjaGVja2VkICsgc3Bhbi50b2dnbGU6YmVmb3JlIHtcbiAgbGVmdDogMjBweDtcbiAgYmFja2dyb3VuZDogIzQ4NWZjNztcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3N0eWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBU0E7RUFDQyxjQU5pQjtFQU9qQixtQkFUZ0I7RUFVaEIsa0JBQUE7QUFQRDs7QUFVQTs7RUFFQyxXQVhXO0VBWVgsU0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9DQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQXZCaUI7RUF3QmpCLHVCQUFBO0VBQ0EsNkJBQUE7QUFQRDs7QUFVQTs7RUFFQyxtQ0FBQTtFQUNBLGNBQUE7QUFQRDs7QUFVQTtFQUNDLGtCQUFBO0FBUEQ7O0FBVUE7RUFDQyxpQkFBQTtBQVBEOztBQVVBO0VBQ0MsZUFBQTtBQVBEOztBQVVBO0VBQ0MsZUFBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBRUEsOENBQ0M7QUFURjtBQVlDO0VBQ0MsVUFBQTtBQVZGOztBQWNBO0VBQ0Msa0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQVhEO0FBYUM7RUFDQywyQkFBQTtBQVhGOztBQWVBO0VBQ0Msa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSw4QkFBQTtFQUNBLCtCQUFBO0VBQ0EsY0FBQTtBQVpEOztBQWVBO0VBQ0MsZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsOEJBQUE7QUFaRDtBQWNDO0VBQ0MsYUFBQTtBQVpGO0FBY0U7RUFDQyxlQUFBO0VBQ0EsY0FsR1k7QUFzRmY7QUFjRztFQUVDLFdBbkdRO0VBb0dSLDRCQUFBO0FBYko7QUFrQkM7RUFDQyxjQTVHZ0I7RUE2R2hCLG1CQS9HZTtFQWdIZixrQkFBQTtBQWhCRjs7QUFvQkE7RUFDQyxXQUFBO0FBakJEOztBQW1CQTtFQUNDLFdBQUE7QUFoQkQ7O0FBbUJBO0VBQ0MseUJBNUhnQjtFQTZIaEIsY0EzSGlCO0VBNEhqQixtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtBQWhCRDtBQW1CQztFQUNDLGNBbElnQjtFQW1JaEIsbUJBcElhO0VBcUliLGtCQUFBO0FBakJGO0FBb0JDOztFQUVDLFdBdklVO0FBcUhaOztBQXVCQTtFQUNDLDZCQUFBO0VBQ0EseUJBQUE7QUFwQkQ7O0FBdUJBO0VBQ0MsY0FBQTtBQXBCRDs7QUF3QkM7RUFDQyxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLGNBbEthO0FBNklmO0FBdUJFO0VBQ0MsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0NBQUE7QUFyQkg7QUF3QkM7RUFDQyxVQUFBO0VBQ0EsbUJBbkxhO0VBb0xiLGdDQUFBO0FBdEJGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU9wZW4rU2FuczppdGFsLHdnaHRAMCwzMDAuLjgwMDsxLDMwMC4uODAwJmRpc3BsYXk9c3dhcFxcXCIpO1xcblxcbiRzZWNvbmRhcnlDb2xvcjogI2E4OWQ5MTtcXG4kcHJpbWFyeUNvbG9yOiAjNDg1ZmM3O1xcbiRiYWNrZ3JvdW5kQ29sb3I6ICNmZmZmZmY7XFxuXFxuJHRleHRDb2xvcjogIzQ0NDtcXG4kbGlua0NvbG9yOiAkcHJpbWFyeUNvbG9yO1xcblxcbjo6c2VsZWN0aW9uIHtcXG5cXHRjb2xvcjogJGJhY2tncm91bmRDb2xvcjtcXG5cXHRiYWNrZ3JvdW5kOiAkc2Vjb25kYXJ5Q29sb3I7XFxuXFx0Ym9yZGVyLXJhZGl1czogNHB4O1xcbn1cXG5cXG5odG1sLFxcbmJvZHkge1xcblxcdGNvbG9yOiAkdGV4dENvbG9yO1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGhlaWdodDogMTAwJTtcXG5cXHRmb250LWZhbWlseTogXFxcIk9wZW4gU2Fuc1xcXCIsIHNhbnMtc2VyaWY7XFxuXFx0Zm9udC1vcHRpY2FsLXNpemluZzogYXV0bztcXG5cXHRmb250LXdlaWdodDogNDAwO1xcblxcdGZvbnQtc3R5bGU6IG5vcm1hbDtcXG5cXHRmb250LXNpemU6IDE2cHg7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmRDb2xvcjtcXG5cXHRzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcXG5cXHRzY3JvbGwtc25hcC10eXBlOiB5IG1hbmRhdG9yeTtcXG59XFxuXFxuLnRpdGxlLFxcbi5zdWJ0aXRsZSB7XFxuXFx0Zm9udC1mYW1pbHk6IFxcXCJLb2RlIE1vbm9cXFwiLCBtb25vc3BhY2U7XFxuXFx0Y29sb3I6IGluaGVyaXQ7XFxufVxcblxcbi5zZWN0aW9uIHtcXG5cXHRwYWRkaW5nOiAycmVtIDJyZW07XFxufVxcblxcbi5pcy1mdWxsaGVpZ2h0IHtcXG5cXHRtaW4taGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuLmlzLWZ1bGx3aWR0aCB7XFxuXFx0bWluLXdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ubm90aWZpY2F0aW9uIHtcXG5cXHRwb3NpdGlvbjogZml4ZWQ7XFxuXFx0dG9wOiAwO1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGJhY2tncm91bmQtY29sb3I6ICNmZmU2NDU7XFxuXFx0b3BhY2l0eTogMTtcXG5cXHR6LWluZGV4OiAxMDA7XFxuXFx0Ym94LXNoYWRvdzogMCAwIDEwcHggJHRleHRDb2xvcjtcXG5cXG5cXHR0cmFuc2l0aW9uOlxcblxcdFxcdHZpc2liaWxpdHkgMHMsXFxuXFx0XFx0b3BhY2l0eSAwLjNzIGxpbmVhcjtcXG5cXG5cXHQmLmlzLWludmlzaWJsZSB7XFxuXFx0XFx0b3BhY2l0eTogMDtcXG5cXHR9XFxufVxcblxcbiNwd2Qtc3RyZW5ndGgtdGFnYm94IHtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0Ym90dG9tOiA1cHg7XFxuXFx0cmlnaHQ6IDBweDtcXG5cXG5cXHRzcGFuIHtcXG5cXHRcXHRib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA2cHg7XFxuXFx0fVxcbn1cXG5cXG4jcHdkLXN0cmVuZ3RoIHtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0Ym90dG9tOiAwcHg7XFxuXFx0bGVmdDogMHB4O1xcblxcdGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDBweDtcXG5cXHRib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMHB4O1xcblxcdGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDZweDtcXG5cXHRib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNnB4O1xcblxcdGhlaWdodDogMC41cmVtO1xcbn1cXG5cXG4ucHdkLWNvbnRhaW5lciB7XFxuXFx0Zm9udC1zaXplOiAycmVtO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IHJvdztcXG5cXHRhbGlnbi1pdGVtczogYmFzZWxpbmU7XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcblxcdC5hY3Rpb25zIHtcXG5cXHRcXHRkaXNwbGF5OiBmbGV4O1xcblxcblxcdFxcdC5hY3Rpb24ge1xcblxcdFxcdFxcdHBhZGRpbmc6IDAgMXJlbTtcXG5cXHRcXHRcXHRjb2xvcjogJGxpbmtDb2xvcjtcXG5cXG5cXHRcXHRcXHQmOmhvdmVyIHtcXG5cXHRcXHRcXHRcXHQvLyBjb2xvcjogbGlnaHRlbigkY29sb3I6ICRzZWNvbmRhcnlDb2xvciwgJGFtb3VudDogMjApO1xcblxcdFxcdFxcdFxcdGNvbG9yOiAkdGV4dENvbG9yO1xcblxcdFxcdFxcdFxcdHRleHQtc2hhZG93OiAwIDAgNXB4ICRzZWNvbmRhcnlDb2xvcjtcXG5cXHRcXHRcXHR9XFxuXFx0XFx0fVxcblxcdH1cXG5cXG5cXHQ6OnNlbGVjdGlvbiB7XFxuXFx0XFx0Y29sb3I6ICRiYWNrZ3JvdW5kQ29sb3I7XFxuXFx0XFx0YmFja2dyb3VuZDogJHNlY29uZGFyeUNvbG9yO1xcblxcdFxcdGJvcmRlci1yYWRpdXM6IDRweDtcXG5cXHR9XFxufVxcblxcbiNzZXR0aW5ncy1wYXNzd29yZC1sZW5ndGgge1xcblxcdHdpZHRoOiA2NHB4O1xcbn1cXG4jc2V0dGluZ3MtcGFzc3dvcmQtbGVuZ3RoLXJhbmdlIHtcXG5cXHR3aWR0aDogMTAwJTtcXG59XFxuXFxuLnNldHRpbmdzLWNvbnRhaW5lciB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogJHNlY29uZGFyeUNvbG9yO1xcblxcdGNvbG9yOiAkYmFja2dyb3VuZENvbG9yO1xcblxcdGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuXFx0Ym9yZGVyOiAycHggc29saWQgJHByaW1hcnlDb2xvcjtcXG5cXHRwYWRkaW5nOiAxcmVtO1xcblxcdC8vIGJveC1zaGFkb3c6IDAgMnB4IDEwcHggJHByaW1hcnlDb2xvcjtcXG5cXG5cXHQ6OnNlbGVjdGlvbiB7XFxuXFx0XFx0Y29sb3I6ICRiYWNrZ3JvdW5kQ29sb3I7XFxuXFx0XFx0YmFja2dyb3VuZDogJHByaW1hcnlDb2xvcjtcXG5cXHRcXHRib3JkZXItcmFkaXVzOiA0cHg7XFxuXFx0fVxcblxcblxcdC5jaGVja2JveDpob3ZlcixcXG5cXHQucmFkaW86aG92ZXIge1xcblxcdFxcdGNvbG9yOiAkdGV4dENvbG9yO1xcblxcdFxcdC8vIHRleHQtc2hhZG93OiAwIDAgNXB4ICRiYWNrZ3JvdW5kQ29sb3I7XFxuXFx0fVxcbn1cXG5cXG4uZm9vdGVyIHtcXG5cXHRib3JkZXItdG9wOiAycHggc29saWQgIzI0NTQ5NDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjN2NhN2RmO1xcbn1cXG5cXG4uaXMtb3dlcmZsb3ctYXV0byB7XFxuXFx0b3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbmlucHV0IHtcXG5cXHQrIHNwYW4udG9nZ2xlIHtcXG5cXHRcXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0XFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xcblxcdFxcdGhlaWdodDogMjRweDtcXG5cXHRcXHR3aWR0aDogNDBweDtcXG5cXHRcXHRtYXJnaW4tYm90dG9tOiAtNnB4O1xcblxcdFxcdG1hcmdpbi1sZWZ0OiAtMjRweDtcXG5cXHRcXHRiYWNrZ3JvdW5kOiAjZWVlO1xcblxcdFxcdGJvcmRlci1yYWRpdXM6IDEwMHZoO1xcblxcdFxcdGNvbG9yOiAkcHJpbWFyeUNvbG9yOyBcXG5cXHRcXHRcXG5cXHRcXHQmOmJlZm9yZSB7XFxuXFx0XFx0XFx0Y29udGVudDogXFxcIiBcXFwiO1xcblxcdFxcdFxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHRcXHRcXHR0b3A6IDRweDtcXG5cXHRcXHRcXHRsZWZ0OiA0cHg7XFxuXFx0XFx0XFx0cmlnaHQ6IGF1dG87XFxuXFx0XFx0XFx0aGVpZ2h0OiAxNnB4O1xcblxcdFxcdFxcdHdpZHRoOiAxNnB4O1xcblxcdFxcdFxcdGJhY2tncm91bmQ6ICNiYmI7XFxuXFx0XFx0XFx0Ym9yZGVyLXJhZGl1czogMTAwdmg7XFxuXFx0XFx0XFx0dHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XFxuXFx0XFx0fVxcblxcdH1cXG5cXHQmOmNoZWNrZWQgKyBzcGFuLnRvZ2dsZTpiZWZvcmUge1xcblxcdFxcdGxlZnQ6IDIwcHg7XFxuXFx0XFx0YmFja2dyb3VuZDogJHByaW1hcnlDb2xvcjtcXG5cXHRcXHR0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcXG5cXHR9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gbG9hZCBzdHlsZXNcbmltcG9ydCAnLi4vc3R5bGVzL3N0eWxlLnNjc3MnO1xuXG4vLyBsb2FkIHNpdGVtYXAgJiByb2JvdHNcbmNvbnN0IHNpdGVtYXAgPSByZXF1aXJlKCcuLi8uLi9zaXRlbWFwLnhtbCcpO1xuY29uc3Qgcm9ib3RzID0gcmVxdWlyZSgnLi4vLi4vcm9ib3RzLnR4dCcpO1xuXG4vLyBsb2FkIGltYWdlc1xuaW1wb3J0IGZhdmljb25JY28gZnJvbSAnLi4vaW1hZ2VzL2Zhdmljb24uaWNvJztcbmltcG9ydCBmYXZpY29uSW1hZ2UgZnJvbSAnLi4vaW1hZ2VzL2Zhdmljb24ucG5nJztcbmltcG9ydCBzaGFyZUltYWdlIGZyb20gJy4uL2ltYWdlcy9zaGFyZS5wbmcnO1xuXG5jbGFzcyBQYXNzd29yZCB7XG4gICNleGNsdWRlRHVwbGljYXRlcztcbiAgI2NoYXJzO1xuICAjbGVuZ3RoID0gMDtcbiAgY29uc3RydWN0b3IoZXhjbHVkZUR1cGxpY2F0ZXMpIHtcbiAgICB0aGlzLiNleGNsdWRlRHVwbGljYXRlcyA9IGV4Y2x1ZGVEdXBsaWNhdGVzO1xuICAgIHRoaXMuI2NoYXJzID0gdGhpcy4jZXhjbHVkZUR1cGxpY2F0ZXMgPyBuZXcgU2V0KCkgOiBbXTtcbiAgfVxuXG4gIGFkZENoYXIoY2hhcikge1xuICAgIGlmICh0aGlzLiNleGNsdWRlRHVwbGljYXRlcykge1xuICAgICAgdGhpcy4jY2hhcnMuYWRkKGNoYXIpO1xuICAgICAgdGhpcy4jbGVuZ3RoID0gdGhpcy4jY2hhcnMuc2l6ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy4jY2hhcnMucHVzaChjaGFyKTtcbiAgICAgIHRoaXMuI2xlbmd0aCsrO1xuICAgIH1cbiAgfVxuXG4gIGdldCBsZW5ndGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuI2xlbmd0aDtcbiAgfVxuXG4gIHRvU3RyaW5nKCkge1xuICAgIGlmICh0aGlzLiNleGNsdWRlRHVwbGljYXRlcykge1xuICAgICAgcmV0dXJuIEFycmF5LmZyb20odGhpcy4jY2hhcnMpLmpvaW4oJycpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy4jY2hhcnMuam9pbignJyk7XG4gICAgfVxuICB9XG5cbiAgY2xlYXIoKSB7XG4gICAgaWYgKHRoaXMuI2V4Y2x1ZGVEdXBsaWNhdGVzKSB7XG4gICAgICB0aGlzLiNjaGFycy5jbGVhcigpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyB0aGlzLiNjaGFycy5maWxsKDApO1xuICAgICAgdGhpcy4jY2hhcnMubGVuZ3RoID0gMDtcbiAgICB9XG4gICAgdGhpcy4jbGVuZ3RoID0gMDtcbiAgfVxufVxuXG5jb25zdCBOVU1CRVJTID0gbmV3IFVpbnQ4QXJyYXkoWzQ4LCA0OSwgNTAsIDUxLCA1MiwgNTMsIDU0LCA1NSwgNTYsIDU3XSk7XG5jb25zdCBMT1dFUkNBU0UgPSBuZXcgVWludDhBcnJheShbXG4gIDk3LCA5OCwgOTksIDEwMCwgMTAxLCAxMDIsIDEwMywgMTA0LCAxMDUsIDEwNiwgMTA3LCAxMDgsIDEwOSwgMTEwLCAxMTEsIDExMiwgMTEzLCAxMTQsIDExNSwgMTE2LCAxMTcsIDExOCwgMTE5LCAxMjAsXG4gIDEyMSwgMTIyLFxuXSk7XG5jb25zdCBVUFBFUkNBU0UgPSBuZXcgVWludDhBcnJheShbXG4gIDY1LCA2NiwgNjcsIDY4LCA2OSwgNzAsIDcxLCA3MiwgNzMsIDc0LCA3NSwgNzYsIDc3LCA3OCwgNzksIDgwLCA4MSwgODIsIDgzLCA4NCwgODUsIDg2LCA4NywgODgsIDg5LCA5MCxcbl0pO1xuY29uc3QgU1BFQ0lBTF9DSEFSQUNURVJTID0gbmV3IFVpbnQ4QXJyYXkoWzMzLCAzNSwgMzYsIDM3LCAzOCwgNDAsIDQxLCA0MiwgNDMsIDY0LCA5NF0pO1xuY29uc3QgU0lNSUxBUl9DSEFSUyA9IHtcbiAgMDogWzQ4LCA3OSwgMTExLCA3MywgMTA1XSwgLy8gMCwgTywgbCwgSVxuICAxOiBbNDksIDc2LCAxMDhdLCAvLyAxLCBsLCBJXG4gIDU6IFs1MywgODMsIDExNSwgNTYsIDg4XSwgLy8gNSwgUywgcywgOCwgQlxuICA2OiBbNTQsIDY2LCA5OF0sIC8vIDYsIGIsIEJcbiAgODogWzU2LCA2NiwgOThdLCAvLyA4LCBCLCBiXG4gIDk6IFs1NywgNzEsIDEwMywgNTQsIDY2XSwgLy8gOSwgZywgRywgNiwgYlxuICBhOiBbOTcsIDY0LCA2NV0sIC8vIGEsIEAsIEFcbiAgZTogWzEwMSwgNjcsIDk5XSwgLy8gZSwgYywgQ1xuICBnOiBbMTAzLCA4MSwgMTEzLCA1N10sIC8vIGcsIHEsIFEsIDlcbiAgbDogWzEwOCwgNDksIDczLCAxMDVdLCAvLyBsLCAxLCBJLCBpXG4gIG86IFsxMTEsIDQ4LCA3OSwgOTcsIDY1XSwgLy8gbywgMCwgTywgYSwgQVxuICBzOiBbMTE1LCA1MywgODNdLCAvLyBzLCA1LCBTXG4gIHQ6IFsxMTYsIDU1LCA4NF0sIC8vIHQsIDcsIFRcbiAgejogWzEyMiwgNTBdLCAvLyB6LCAyXG59O1xuXG5sZXQgYXZhaWxhYmxlQ2hhcnMgPSBbXTtcblxuY29uc3QgcHdkR2VuZXJhdGVkRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHdkLWdlbmVyYXRlZCcpO1xuY29uc3Qgbm90aWZpY2F0aW9uRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbm90aWZpY2F0aW9uJyk7XG5jb25zdCBhY3Rpb25SZWRvRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWN0aW9uLXJlZG8nKTtcbmNvbnN0IG5vdGlmaWNhdGlvbkRlbGV0ZUJ0bkVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5vdGlmaWNhdGlvbiBidXR0b24uZGVsZXRlJyk7XG5jb25zdCBzZXR0aW5nc1Bhc3N3b3JkTGVuZ3RoUmFuZ2VFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZXR0aW5ncy1wYXNzd29yZC1sZW5ndGgtcmFuZ2UnKTtcbmNvbnN0IHNldHRpbmdzUGFzc3dvcmRMZW5ndGhFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZXR0aW5ncy1wYXNzd29yZC1sZW5ndGgnKTtcbmNvbnN0IHB3ZEdlbmVyYXRlZFN0cmVuZ3RoRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHdkLXN0cmVuZ3RoJyk7XG5jb25zdCBwd2RHZW5lcmF0ZWRTdHJlbmd0aFRhZ0VsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3B3ZC1zdHJlbmd0aC10YWcnKTtcbmNvbnN0IHNldHRpbmdzQWxsb3dOdW1iZXJzRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2V0dGluZ3MtYWxsb3ctbnVtYmVycycpO1xuY29uc3Qgc2V0dGluZ3NBbGxvd1VwcGVyY2FzZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NldHRpbmdzLWFsbG93LXVwcGVyY2FzZScpO1xuY29uc3Qgc2V0dGluZ3NBbGxvd0xvd2VyY2FzZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NldHRpbmdzLWFsbG93LWxvd2VyY2FzZScpO1xuY29uc3Qgc2V0dGluZ3NBbGxvd1N5bWJvbHNFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZXR0aW5ncy1hbGxvdy1zeW1ib2xzJyk7XG5jb25zdCBzZXR0aW5nc0V4Y2x1ZGVEdXBsaWNhdGVFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZXR0aW5ncy1leGNsdWRlLWR1cGxpY2F0ZS1jaGFyYWN0ZXJzJyk7XG5jb25zdCBzZXR0aW5nc0V4Y2x1ZGVTaW1pbGFyRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2V0dGluZ3MtZXhjbHVkZS1zaW1pbGFyLWNoYXJhY3RlcnMnKTtcblxuZnVuY3Rpb24gaXNTaW1pbGFyQ2hhckV4Y2x1ZGVkKGNoYXIpIHtcbiAgY29uc3Qgc2ltaWxhckdyb3VwID0gU0lNSUxBUl9DSEFSU1tjaGFyXTtcbiAgcmV0dXJuICEhc2ltaWxhckdyb3VwICYmIHNldHRpbmdzRXhjbHVkZVNpbWlsYXJFbC5jaGVja2VkICYmIGF2YWlsYWJsZUNoYXJzLnNvbWUoKGVsKSA9PiBzaW1pbGFyR3JvdXAuaW5jbHVkZXMoZWwpKTtcbn1cblxuZnVuY3Rpb24gZ2V0UGFzc3dvcmRMZW5ndGgoc2V0dGluZ3NQYXNzd29yZExlbmd0aCkge1xuICBjb25zdCBsZW5ndGggPSBzZXR0aW5nc1Bhc3N3b3JkTGVuZ3RoLnZhbHVlO1xuICB0cnkge1xuICAgIHJldHVybiBwYXJzZUludChsZW5ndGggfHwgc2V0dGluZ3NQYXNzd29yZExlbmd0aC5nZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJykpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS5sb2coJ2Vycm9yJywgZSk7XG4gIH1cbiAgcmV0dXJuIDA7XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlQXZhaWxhYmxlQ2hhcnNMZW5ndGgoKSB7XG4gIGlmIChhdmFpbGFibGVDaGFycy5sZW5ndGggPT09IDApIHtcbiAgICBhY3Rpb25SZWRvRWwuY2xhc3NMaXN0LmFkZCgnaXMtaW52aXNpYmxlJyk7XG4gICAgcmV0dXJuO1xuICB9XG4gIGFjdGlvblJlZG9FbC5jbGFzc0xpc3QucmVtb3ZlKCdpcy1pbnZpc2libGUnKTtcbn1cblxuLy8gVXBkYXRlIGF2YWlsYWJsZUNoYXJzIGJhc2VkIG9uIHNldHRpbmdzIGR1cmluZyBpbml0aWFsaXphdGlvblxuLy8gZnVuY3Rpb24gdXBkYXRlQXZhaWxhYmxlQ2hhcnMoKSB7XG4vLyAgIGNvbnNvbGUudGltZSgndXBkYXRlQXZhaWxhYmxlQ2hhcnMnKTtcbi8vICAgYXZhaWxhYmxlQ2hhcnMgPSBbXG4vLyAgICAgLi4uKHNldHRpbmdzQWxsb3dOdW1iZXJzRWwuY2hlY2tlZCA/IE5VTUJFUlMgOiBbXSksXG4vLyAgICAgLi4uKHNldHRpbmdzQWxsb3dVcHBlcmNhc2VFbC5jaGVja2VkID8gVVBQRVJDQVNFIDogW10pLFxuLy8gICAgIC4uLihzZXR0aW5nc0FsbG93TG93ZXJjYXNlRWwuY2hlY2tlZCA/IExPV0VSQ0FTRSA6IFtdKSxcbi8vICAgICAuLi4oc2V0dGluZ3NBbGxvd1N5bWJvbHNFbC5jaGVja2VkID8gU1BFQ0lBTF9DSEFSQUNURVJTIDogW10pLFxuLy8gICBdO1xuLy8gICB2YWxpZGF0ZUF2YWlsYWJsZUNoYXJzTGVuZ3RoKCk7XG4vLyAgIGNvbnNvbGUudGltZUVuZCgndXBkYXRlQXZhaWxhYmxlQ2hhcnMnKTtcbi8vIH1cblxuZnVuY3Rpb24gdXBkYXRlQXZhaWxhYmxlQ2hhcnMoKSB7XG4gIGNvbnNvbGUudGltZSgndXBkYXRlQXZhaWxhYmxlQ2hhcnMnKTtcbiAgYXZhaWxhYmxlQ2hhcnMgPSBuZXcgU2V0KCk7XG5cbiAgaWYgKHNldHRpbmdzQWxsb3dOdW1iZXJzRWwuY2hlY2tlZCkgYXZhaWxhYmxlQ2hhcnMgPSBuZXcgU2V0KFsuLi5hdmFpbGFibGVDaGFycywgLi4uTlVNQkVSU10pO1xuICBpZiAoc2V0dGluZ3NBbGxvd1VwcGVyY2FzZUVsLmNoZWNrZWQpIGF2YWlsYWJsZUNoYXJzID0gbmV3IFNldChbLi4uYXZhaWxhYmxlQ2hhcnMsIC4uLlVQUEVSQ0FTRV0pO1xuICBpZiAoc2V0dGluZ3NBbGxvd0xvd2VyY2FzZUVsLmNoZWNrZWQpIGF2YWlsYWJsZUNoYXJzID0gbmV3IFNldChbLi4uYXZhaWxhYmxlQ2hhcnMsIC4uLkxPV0VSQ0FTRV0pO1xuICBpZiAoc2V0dGluZ3NBbGxvd1N5bWJvbHNFbC5jaGVja2VkKSBhdmFpbGFibGVDaGFycyA9IG5ldyBTZXQoWy4uLmF2YWlsYWJsZUNoYXJzLCAuLi5TUEVDSUFMX0NIQVJBQ1RFUlNdKTtcblxuICB2YWxpZGF0ZUF2YWlsYWJsZUNoYXJzTGVuZ3RoKCk7XG4gIGNvbnNvbGUudGltZUVuZCgndXBkYXRlQXZhaWxhYmxlQ2hhcnMnKTtcbn1cblxuZnVuY3Rpb24gc2hvd05vdGlmaWNhdGlvbigpIHtcbiAgbm90aWZpY2F0aW9uRWwuY2xhc3NMaXN0LnJlbW92ZSgnaXMtaW52aXNpYmxlJyk7XG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIG5vdGlmaWNhdGlvbkVsLmNsYXNzTGlzdC5hZGQoJ2lzLWludmlzaWJsZScpO1xuICB9LCAzMDAwKTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gY29weVRvQ2xpcGJvYXJkKCkge1xuICB0cnkge1xuICAgIGF3YWl0IG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KHB3ZEdlbmVyYXRlZEVsLmlubmVyVGV4dCk7XG4gICAgc2hvd05vdGlmaWNhdGlvbigpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjb3B5aW5nIHRleHQ6ICcsIGVycik7XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlUGFzc3dvcmQoKSB7XG4gIGlmIChhdmFpbGFibGVDaGFycy5zaXplID09PSAwKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgY29uc29sZS50aW1lKCdjcmVhdGVQYXNzd29yZCcpO1xuXG4gIGNvbnN0IHBhc3N3b3JkTGVuZ3RoID0gZ2V0UGFzc3dvcmRMZW5ndGgoc2V0dGluZ3NQYXNzd29yZExlbmd0aFJhbmdlRWwpO1xuICBjb25zdCBjaGFyc0FycmF5ID0gQXJyYXkuZnJvbShhdmFpbGFibGVDaGFycyk7XG4gIGNvbnN0IHJhbmRvbVZhbHVlcyA9IGNyeXB0by5nZXRSYW5kb21WYWx1ZXMobmV3IFVpbnQzMkFycmF5KHBhc3N3b3JkTGVuZ3RoKSk7XG5cbiAgY29uc3QgcGFzc3dvcmQgPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiBwYXNzd29yZExlbmd0aCB9LCAoXywgaSkgPT4ge1xuICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKGNoYXJzQXJyYXlbcmFuZG9tVmFsdWVzW2ldICUgY2hhcnNBcnJheS5sZW5ndGhdKTtcbiAgfSkuam9pbignJyk7XG5cbiAgY29uc29sZS50aW1lRW5kKCdjcmVhdGVQYXNzd29yZCcpO1xuICByZXR1cm4gcGFzc3dvcmQ7XG59XG5cbi8vIGZ1bmN0aW9uIGNyZWF0ZVBhc3N3b3JkKCkge1xuLy8gICBpZiAoYXZhaWxhYmxlQ2hhcnMuc2l6ZSA9PT0gMCkge1xuLy8gICAgIHJldHVybiAnJztcbi8vICAgfVxuXG4vLyAgIGNvbnNvbGUudGltZSgnY3JlYXRlUGFzc3dvcmQnKTtcblxuLy8gICBjb25zdCBwYXNzd29yZExlbmd0aCA9IGdldFBhc3N3b3JkTGVuZ3RoKHNldHRpbmdzUGFzc3dvcmRMZW5ndGhSYW5nZUVsKTtcbi8vICAgY29uc3QgY2hhcnNBcnJheSA9IEFycmF5LmZyb20oYXZhaWxhYmxlQ2hhcnMpO1xuLy8gICBjb25zdCBpbmRleGVzID0gY3J5cHRvLmdldFJhbmRvbVZhbHVlcyhuZXcgVWludDMyQXJyYXkoY2hhcnNBcnJheS5sZW5ndGgpKTtcbi8vICAgY29uc3QgcGFzc3dvcmQgPSBuZXcgUGFzc3dvcmQoc2V0dGluZ3NFeGNsdWRlRHVwbGljYXRlRWwuY2hlY2tlZCk7XG5cbi8vICAgY29uc3QgbWF4UGFzc3dvcmRMZW5ndGggPSBzZXR0aW5nc0V4Y2x1ZGVEdXBsaWNhdGVFbC5jaGVja2VkXG4vLyAgICAgPyBNYXRoLm1pbihwYXNzd29yZExlbmd0aCwgY2hhcnNBcnJheS5sZW5ndGgpXG4vLyAgICAgOiBwYXNzd29yZExlbmd0aDtcblxuLy8gICBsZXQgbG9vcCA9IDA7XG4vLyAgIHdoaWxlIChwYXNzd29yZC5sZW5ndGggPCBtYXhQYXNzd29yZExlbmd0aCkge1xuLy8gICAgIGNvbnN0IGluZGV4ID0gaW5kZXhlc1tsb29wICUgaW5kZXhlcy5sZW5ndGhdICUgY2hhcnNBcnJheS5sZW5ndGg7XG4vLyAgICAgY29uc3QgY2hhciA9IFN0cmluZy5mcm9tQ2hhckNvZGUoY2hhcnNBcnJheVtpbmRleF0pO1xuXG4vLyAgICAgaWYgKCFpc1NpbWlsYXJDaGFyRXhjbHVkZWQoY2hhcikpIHtcbi8vICAgICAgIHBhc3N3b3JkLmFkZENoYXIoY2hhcik7XG4vLyAgICAgfVxuLy8gICAgIGxvb3ArKztcbi8vICAgfVxuXG4vLyAgIGNvbnN0IHBhc3N3b3JkQXNTdHJpbmcgPSBwYXNzd29yZC50b1N0cmluZygpO1xuXG4vLyAgIC8vIENsZWFyIHBhc3N3b3JkIGluIG1lbW9yeVxuLy8gICBwYXNzd29yZC5jbGVhcigpO1xuXG4vLyAgIGNvbnNvbGUudGltZUVuZCgnY3JlYXRlUGFzc3dvcmQnKTtcbi8vICAgcmV0dXJuIHBhc3N3b3JkQXNTdHJpbmc7XG4vLyB9XG5cbmZ1bmN0aW9uIHVwZGF0ZVNldHRpbmdzKCkge1xuICBjb25zdCBwd2RNb2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cInB3ZC1tb2RlXCJdOmNoZWNrZWQnKS52YWx1ZTtcbiAgc3dpdGNoIChwd2RNb2RlKSB7XG4gICAgY2FzZSAnZWFzeS10by1yZWFkJzoge1xuICAgICAgc2V0dGluZ3NFeGNsdWRlU2ltaWxhckVsLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgc2V0dGluZ3NFeGNsdWRlRHVwbGljYXRlRWwuY2hlY2tlZCA9IGZhbHNlO1xuXG4gICAgICBzZXR0aW5nc0FsbG93TnVtYmVyc0VsLmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgIHNldHRpbmdzQWxsb3dVcHBlcmNhc2VFbC5jaGVja2VkID0gdHJ1ZTtcbiAgICAgIHNldHRpbmdzQWxsb3dMb3dlcmNhc2VFbC5jaGVja2VkID0gdHJ1ZTtcbiAgICAgIHNldHRpbmdzQWxsb3dTeW1ib2xzRWwuY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGNhc2UgJ2Vhc3ktdG8tc2F5Jzoge1xuICAgICAgc2V0dGluZ3NFeGNsdWRlU2ltaWxhckVsLmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgIHNldHRpbmdzRXhjbHVkZUR1cGxpY2F0ZUVsLmNoZWNrZWQgPSBmYWxzZTtcblxuICAgICAgc2V0dGluZ3NBbGxvd051bWJlcnNFbC5jaGVja2VkID0gZmFsc2U7XG4gICAgICBzZXR0aW5nc0FsbG93VXBwZXJjYXNlRWwuY2hlY2tlZCA9IHRydWU7XG4gICAgICBzZXR0aW5nc0FsbG93TG93ZXJjYXNlRWwuY2hlY2tlZCA9IHRydWU7XG4gICAgICBzZXR0aW5nc0FsbG93U3ltYm9sc0VsLmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBjYXNlICdhbGwtY2hhcmFjdGVycyc6XG4gICAgZGVmYXVsdDoge1xuICAgICAgc2V0dGluZ3NFeGNsdWRlU2ltaWxhckVsLmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgIHNldHRpbmdzRXhjbHVkZUR1cGxpY2F0ZUVsLmNoZWNrZWQgPSBmYWxzZTtcblxuICAgICAgc2V0dGluZ3NBbGxvd051bWJlcnNFbC5jaGVja2VkID0gdHJ1ZTtcbiAgICAgIHNldHRpbmdzQWxsb3dVcHBlcmNhc2VFbC5jaGVja2VkID0gdHJ1ZTtcbiAgICAgIHNldHRpbmdzQWxsb3dMb3dlcmNhc2VFbC5jaGVja2VkID0gdHJ1ZTtcbiAgICAgIHNldHRpbmdzQWxsb3dTeW1ib2xzRWwuY2hlY2tlZCA9IHRydWU7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgdXBkYXRlQXZhaWxhYmxlQ2hhcnMoKTtcbn1cblxuZnVuY3Rpb24gY2FsY3VsYXRlUGFzc3dvcmRFbnRyb3B5KGxlbmd0aCwgY2hhcnNldFNpemUpIHtcbiAgcmV0dXJuIGxlbmd0aCAqIE1hdGgubG9nMihjaGFyc2V0U2l6ZSk7XG59XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZVBhc3N3b3JkTGV2ZWwoKSB7XG4gIGNvbnNvbGUubG9nKCdjYWxjdWxhdGVQYXNzd29yZExldmVsJyk7XG5cbiAgY29uc3QgcHdkTGVuZ3RoID0gZ2V0UGFzc3dvcmRMZW5ndGgoc2V0dGluZ3NQYXNzd29yZExlbmd0aFJhbmdlRWwpO1xuICBjb25zdCBjaGFyc2V0U2l6ZSA9IGF2YWlsYWJsZUNoYXJzLnNpemUgfHwgMTtcbiAgY29uc3QgZW50cm9weSA9IGNhbGN1bGF0ZVBhc3N3b3JkRW50cm9weShwd2RMZW5ndGgsIGNoYXJzZXRTaXplKTtcbiAgY29uc29sZS5sb2coJ2VudHJvcHknLCBlbnRyb3B5LCAnY2hhcnNldFNpemUnLCBjaGFyc2V0U2l6ZSwgJ3B3ZExlbmd0aCcsIHB3ZExlbmd0aCk7XG5cbiAgcHdkR2VuZXJhdGVkU3RyZW5ndGhFbC5jbGFzc0xpc3QucmVtb3ZlKCdpcy1kYW5nZXInLCAnaXMtd2FybmluZycsICdpcy1pbmZvJywgJ2lzLXN1Y2Nlc3MnKTtcbiAgcHdkR2VuZXJhdGVkU3RyZW5ndGhUYWdFbC5jbGFzc0xpc3QucmVtb3ZlKCdoYXMtYmFja2dyb3VuZC1kYW5nZXInLCAnaGFzLWJhY2tncm91bmQtd2FybmluZycsICdoYXMtYmFja2dyb3VuZC1pbmZvJywgJ2hhcy1iYWNrZ3JvdW5kLXN1Y2Nlc3MnKTtcblxuICBpZiAoZW50cm9weSA8IDI4KSB7XG4gICAgcHdkR2VuZXJhdGVkU3RyZW5ndGhFbC5jbGFzc0xpc3QuYWRkKCdpcy1kYW5nZXInKTsgLy8gTW9sdG8gZGVib2xlXG4gICAgcHdkR2VuZXJhdGVkU3RyZW5ndGhUYWdFbC5jbGFzc0xpc3QuYWRkKCdoYXMtYmFja2dyb3VuZC1kYW5nZXInLCAnaGFzLXRleHQtZGFuZ2VyLWxpZ2h0Jyk7IC8vIE1vbHRvIGRlYm9sZVxuICAgIHB3ZEdlbmVyYXRlZFN0cmVuZ3RoVGFnRWwuaW5uZXJUZXh0ID0gJ1RvbyBlYXN5IHRvIGd1ZXNzJztcbiAgfSBlbHNlIGlmIChlbnRyb3B5IDwgMzYpIHtcbiAgICBwd2RHZW5lcmF0ZWRTdHJlbmd0aEVsLmNsYXNzTGlzdC5hZGQoJ2lzLXdhcm5pbmcnKTsgLy8gRGVib2xlXG4gICAgcHdkR2VuZXJhdGVkU3RyZW5ndGhUYWdFbC5jbGFzc0xpc3QuYWRkKCdoYXMtYmFja2dyb3VuZC13YXJuaW5nJywgJ2hhcy10ZXh0LXdhcm5pbmctZGFyaycpOyAvLyBEZWJvbGVcbiAgICBwd2RHZW5lcmF0ZWRTdHJlbmd0aFRhZ0VsLmlubmVyVGV4dCA9ICdBdCByaXNrIG9mIGJlaW5nIGNvbXByb21pc2VkJztcbiAgfSBlbHNlIGlmIChlbnRyb3B5IDwgNjApIHtcbiAgICBwd2RHZW5lcmF0ZWRTdHJlbmd0aEVsLmNsYXNzTGlzdC5hZGQoJ2lzLWluZm8nKTsgLy8gQnVvbmFcbiAgICBwd2RHZW5lcmF0ZWRTdHJlbmd0aFRhZ0VsLmNsYXNzTGlzdC5hZGQoJ2hhcy1iYWNrZ3JvdW5kLWluZm8nLCAnaGFzLXRleHQtaW5mby1saWdodCcpOyAvLyBCdW9uYVxuICAgIHB3ZEdlbmVyYXRlZFN0cmVuZ3RoVGFnRWwuaW5uZXJUZXh0ID0gJ1NlY3VyZSBmb3Igbm9ybWFsIHVzZSc7XG4gIH0gZWxzZSB7XG4gICAgcHdkR2VuZXJhdGVkU3RyZW5ndGhFbC5jbGFzc0xpc3QuYWRkKCdpcy1zdWNjZXNzJyk7IC8vIE1vbHRvIHNpY3VyYVxuICAgIHB3ZEdlbmVyYXRlZFN0cmVuZ3RoVGFnRWwuY2xhc3NMaXN0LmFkZCgnaGFzLWJhY2tncm91bmQtc3VjY2VzcycsICdoYXMtdGV4dC1zdWNjZXNzLWxpZ2h0Jyk7IC8vIE1vbHRvIHNpY3VyYVxuICAgIHB3ZEdlbmVyYXRlZFN0cmVuZ3RoVGFnRWwuaW5uZXJUZXh0ID0gJ1Byb3RlY3RzIGFnYWluc3QgaGFja2luZyBhdHRlbXB0cyc7XG4gIH1cbn1cblxuZnVuY3Rpb24gYmluZEV2ZW50cygpIHtcbiAgc2V0dGluZ3NQYXNzd29yZExlbmd0aFJhbmdlRWwuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XG4gICAgc2V0dGluZ3NQYXNzd29yZExlbmd0aEVsLnZhbHVlID0gc2V0dGluZ3NQYXNzd29yZExlbmd0aFJhbmdlRWwudmFsdWU7XG4gIH0pO1xuICBzZXR0aW5nc1Bhc3N3b3JkTGVuZ3RoRWwuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgIGlmIChzZXR0aW5nc1Bhc3N3b3JkTGVuZ3RoRWwudmFsdWUgPCA0KSB7XG4gICAgICBzZXR0aW5nc1Bhc3N3b3JkTGVuZ3RoRWwudmFsdWUgPSA0O1xuICAgIH1cbiAgICBpZiAoc2V0dGluZ3NQYXNzd29yZExlbmd0aEVsLnZhbHVlID4gNTYpIHtcbiAgICAgIHNldHRpbmdzUGFzc3dvcmRMZW5ndGhFbC52YWx1ZSA9IDU2O1xuICAgIH1cbiAgICBzZXR0aW5nc1Bhc3N3b3JkTGVuZ3RoUmFuZ2VFbC52YWx1ZSA9IHNldHRpbmdzUGFzc3dvcmRMZW5ndGhFbC52YWx1ZTtcbiAgfSk7XG5cbiAgbm90aWZpY2F0aW9uRGVsZXRlQnRuRWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgbm90aWZpY2F0aW9uRWwuY2xhc3NMaXN0LmFkZCgnaXMtaW52aXNpYmxlJyk7XG4gIH0pO1xuXG4gIGFjdGlvblJlZG9FbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZVBhc3N3b3JkQ3JlYXRpb24pO1xuXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhY3Rpb24tY29weS10by1jbGlwYm9hcmQnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNvcHlUb0NsaXBib2FyZCk7XG5cbiAgZm9yIChsZXQgZWwgb2YgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc2V0dGluZy1lbGVtZW50JykpIHtcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB1cGRhdGVBdmFpbGFibGVDaGFycyk7XG4gIH1cblxuICBmb3IgKGxldCBlbCBvZiBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzZXR0aW5nLXB3ZC1tb2RlJykpIHtcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB1cGRhdGVTZXR0aW5ncyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gd3JpdGVXZWxsY29tZU1lc3NhZ2UoKSB7XG4gIGNvbnN0IHdlbGxjb21lTWVzc2FnZVNldHRpbmdzID0gJ2NvbG9yOiM0ODVmYzc7IGZvbnQtc2l6ZTogMTZweDsgZm9udC13ZWlnaHQ6IDcwMDsgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSc7XG4gIGNvbnNvbGUubG9nKCclY+KggOKggOKggCDioIDioIDioIAg4qCA4qCA4qCAIOKggOKggOKggCDioIDioIDioIAg4qCA4qCA4qCAIOKggOKggOKggCDioIDioIDioIAg4qCA4qCA4qCAIOKggOKggOKggCDioIDioIDioIAg4qCA4qCA4qCAIOKggOKggOKggCDioIDioIDioIAnLCB3ZWxsY29tZU1lc3NhZ2VTZXR0aW5ncyk7XG4gIGNvbnNvbGUubG9nKCclY+KggOKggOKggCBXZWxjb21lIHRvIHRoZSBkZXZlbG9wZXIgdmF1bHQhLiAgICAgICAgICAgICAgICAgICAgIOKggOKggOKggCcsIHdlbGxjb21lTWVzc2FnZVNldHRpbmdzKTtcbiAgY29uc29sZS5sb2coJyVj4qCA4qCA4qCAIFRvcCBzZWNyZXQgcGFzc3dvcmQgZ2VuZXJhdGlvbiBoYXBwZW5zIGhlcmUuLi4gICAgICAg4qCA4qCA4qCAJywgd2VsbGNvbWVNZXNzYWdlU2V0dGluZ3MpO1xuICBjb25zb2xlLmxvZygnJWPioIDioIDioIAgTW9zdGx5LiBeX14gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDioIDioIDioIAnLCB3ZWxsY29tZU1lc3NhZ2VTZXR0aW5ncyk7XG4gIGNvbnNvbGUubG9nKCclY+KggOKggOKggCDioIDioIDioIAg4qCA4qCA4qCAIOKggOKggOKggCDioIDioIDioIAg4qCA4qCA4qCAIOKggOKggOKggCDioIDioIDioIAg4qCA4qCA4qCAIOKggOKggOKggCDioIDioIDioIAg4qCA4qCA4qCAIOKggOKggOKggCDioIDioIDioIAnLCB3ZWxsY29tZU1lc3NhZ2VTZXR0aW5ncyk7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlQYWdlKCkge1xuICBkb2N1bWVudC5ib2R5LnN0eWxlID0gJ2Rpc3BsYXk6IGF1dG8nO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVQYXNzd29yZENyZWF0aW9uKCkge1xuICBwd2RHZW5lcmF0ZWRFbC5pbm5lckhUTUwgPSBjcmVhdGVQYXNzd29yZCgpO1xuICBjYWxjdWxhdGVQYXNzd29yZExldmVsKCk7XG59XG5cbmZ1bmN0aW9uIGluaXRhbGl6ZVBhZ2VFbGVtZW50cygpIHtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NldHRpbmdzLWFsbG93LXN5bWJvbHMtbGlzdCcpLmlubmVySFRNTCA9IEFycmF5LmZyb20oU1BFQ0lBTF9DSEFSQUNURVJTKS5tYXAoKGVsKSA9PlxuICAgIFN0cmluZy5mcm9tQ2hhckNvZGUoZWwpXG4gICk7XG59XG5cbi8vIEluaXRcbmZ1bmN0aW9uIGluaXQoKSB7XG4gIHdyaXRlV2VsbGNvbWVNZXNzYWdlKCk7XG5cbiAgYmluZEV2ZW50cygpO1xuICBpbml0YWxpemVQYWdlRWxlbWVudHMoKTtcblxuICAvLyBVcGRhdGUgdGhlIEF2YWlsYWJsZUNoYXJzIGFycmF5IGJhc2VkIG9uIHRoZSBodG1sIGRlZmF1bHRcbiAgLy8gYW5kIGNyZWF0ZSB0aGUgZmlyc3QgcGFzc3dvcmRcbiAgdXBkYXRlQXZhaWxhYmxlQ2hhcnMoKTtcbiAgaGFuZGxlUGFzc3dvcmRDcmVhdGlvbigpO1xuXG4gIC8vIFNob3cgY29udGVudCBvbmx5IHdoZW4gcGFnZSBpcyBsb2FkZWRcbiAgZGlzcGxheVBhZ2UoKTtcbn1cblxud2luZG93Lm9ubG9hZCA9IGluaXQ7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=