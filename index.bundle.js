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
  color: rgb(0, 37, 255);
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
}`, "",{"version":3,"sources":["webpack://./src/styles/style.scss"],"names":[],"mappings":"AASA;EACC,cANiB;EAOjB,mBATgB;EAUhB,kBAAA;AAPD;;AAUA;;EAEC,WAXW;EAYX,SAAA;EACA,UAAA;EACA,WAAA;EACA,YAAA;EACA,oCAAA;EACA,yBAAA;EACA,gBAAA;EACA,kBAAA;EACA,eAAA;EACA,yBAvBiB;EAwBjB,uBAAA;EACA,6BAAA;AAPD;;AAUA;;EAEC,mCAAA;EACA,cAAA;AAPD;;AAUA;EACC,kBAAA;AAPD;;AAUA;EACC,iBAAA;AAPD;;AAUA;EACC,eAAA;AAPD;;AAUA;EACC,eAAA;EACA,MAAA;EACA,WAAA;EACA,yBAAA;EACA,UAAA;EACA,YAAA;EACA,yBAAA;EAEA,8CACC;AATF;AAYC;EACC,UAAA;AAVF;;AAcA;EACC,kBAAA;EACA,WAAA;EACA,SAAA;EACA,2BAAA;EACA,4BAAA;EACA,8BAAA;EACA,+BAAA;EACA,cAAA;AAXD;;AAkDA;EACC,eAAA;EAEA,aAAA;EACA,mBAAA;EACA,qBAAA;EACA,8BAAA;AAhDD;AAkDC;EACC,aAAA;AAhDF;AAkDE;EACC,eAAA;EACA,cA7HY;AA6Ef;AAkDG;EAEC,WA9HQ;EA+HR,4BAAA;AAjDJ;AAsDC;EACC,cAvIgB;EAwIhB,mBA1Ie;EA2If,kBAAA;AApDF;;AAwDA;EACC,WAAA;AArDD;;AAuDA;EACC,WAAA;AApDD;;AAuDA;EACC,yBAvJgB;EAwJhB,cAtJiB;EAuJjB,mBAAA;EACA,yBAAA;EACA,aAAA;AApDD;AAuDC;EACC,cA7JgB;EA8JhB,mBA/Ja;EAgKb,kBAAA;AArDF;AAwDC;;EAEC,WAlKU;AA4GZ;;AA2DA;EACC,6BAAA;EACA,yBAAA;AAxDD;;AA2DA;EACC,cAAA;AAxDD;;AA4DC;EACC,kBAAA;EACA,qBAAA;EACA,YAAA;EACA,WAAA;EACA,mBAAA;EACA,kBAAA;EACA,gBAAA;EACA,oBAAA;EACA,sBAAA;AAzDF;AA0DE;EACC,YAAA;EACA,kBAAA;EACA,QAAA;EACA,SAAA;EACA,WAAA;EACA,YAAA;EACA,WAAA;EACA,gBAAA;EACA,oBAAA;EACA,gCAAA;AAxDH;AA2DC;EACC,UAAA;EACA,mBA7Ma;EA8Mb,gCAAA;AAzDF","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap\");\n\n$secondaryColor: #a89d91;\n$primaryColor: #485fc7;\n$backgroundColor: #ffffff;\n\n$textColor: #444;\n$linkColor: $primaryColor;\n\n::selection {\n\tcolor: $backgroundColor;\n\tbackground: $secondaryColor;\n\tborder-radius: 4px;\n}\n\nhtml,\nbody {\n\tcolor: $textColor;\n\tmargin: 0;\n\tpadding: 0;\n\twidth: 100%;\n\theight: 100%;\n\tfont-family: \"Open Sans\", sans-serif;\n\tfont-optical-sizing: auto;\n\tfont-weight: 400;\n\tfont-style: normal;\n\tfont-size: 16px;\n\tbackground-color: $backgroundColor;\n\tscroll-behavior: smooth;\n\tscroll-snap-type: y mandatory;\n}\n\n.title,\n.subtitle {\n\tfont-family: \"Kode Mono\", monospace;\n\tcolor: inherit;\n}\n\n.section {\n\tpadding: 2rem 2rem;\n}\n\n.is-fullheight {\n\tmin-height: 100vh;\n}\n\n.is-fullwidth {\n\tmin-width: 100%;\n}\n\n.notification {\n\tposition: fixed;\n\ttop: 0;\n\twidth: 100%;\n\tbackground-color: #ffe645;\n\topacity: 1;\n\tz-index: 100;\n\tbox-shadow: 0 0 10px $textColor;\n\n\ttransition:\n\t\tvisibility 0s,\n\t\topacity 0.3s linear;\n\n\t&.is-invisible {\n\t\topacity: 0;\n\t}\n}\n\n#pwd-strength {\n\tposition: absolute;\n\tbottom: 0px;\n\tleft: 0px;\n\tborder-top-left-radius: 0px;\n\tborder-top-right-radius: 0px;\n\tborder-bottom-left-radius: 6px;\n\tborder-bottom-right-radius: 6px;\n\theight: 0.5rem;\n\n\t// &.is-danger {\n\t// \t&::-webkit-progress-value {\n\t// \t\tbackground-color: greenyellow;\n\t// \t}\n\t// \t&::-moz-progress-bar {\n\t// \t\tbackground-color: greenyellow;\n\t// \t}\n\t// \t&::-ms-fill {\n\t// \t\tbackground-color: greenyellow;\n\t// \t}\n\t// }\n\n\t// &.is-warning {\n\t// \t&::-webkit-progress-value {\n\t// \t\tbackground-color: greenyellow;\n\t// \t}\n\t// \t&::-moz-progress-bar {\n\t// \t\tbackground-color: greenyellow;\n\t// \t}\n\t// \t&::-ms-fill {\n\t// \t\tbackground-color: greenyellow;\n\t// \t}\n\t// }\n\n\t// &.is-success {\n\t// \t&::-webkit-progress-value {\n\t// \t\tbackground-color: greenyellow;\n\t// \t}\n\t// \t&::-moz-progress-bar {\n\t// \t\tbackground-color: greenyellow;\n\t// \t}\n\t// \t&::-ms-fill {\n\t// \t\tbackground-color: greenyellow;\n\t// \t}\n\t// }\n}\n\n.pwd-container {\n\tfont-size: 2rem;\n\t// border-bottom: 5px solid green;\n\tdisplay: flex;\n\tflex-direction: row;\n\talign-items: baseline;\n\tjustify-content: space-between;\n\n\t.actions {\n\t\tdisplay: flex;\n\n\t\t.action {\n\t\t\tpadding: 0 1rem;\n\t\t\tcolor: $linkColor;\n\n\t\t\t&:hover {\n\t\t\t\t// color: lighten($color: $secondaryColor, $amount: 20);\n\t\t\t\tcolor: $textColor;\n\t\t\t\ttext-shadow: 0 0 5px $secondaryColor;\n\t\t\t}\n\t\t}\n\t}\n\n\t::selection {\n\t\tcolor: $backgroundColor;\n\t\tbackground: $secondaryColor;\n\t\tborder-radius: 4px;\n\t}\n}\n\n#settings-password-length {\n\twidth: 64px;\n}\n#settings-password-length-range {\n\twidth: 100%;\n}\n\n.settings-container {\n\tbackground-color: $secondaryColor;\n\tcolor: $backgroundColor;\n\tborder-radius: 10px;\n\tborder: 2px solid $primaryColor;\n\tpadding: 1rem;\n\t// box-shadow: 0 2px 10px $primaryColor;\n\n\t::selection {\n\t\tcolor: $backgroundColor;\n\t\tbackground: $primaryColor;\n\t\tborder-radius: 4px;\n\t}\n\n\t.checkbox:hover,\n\t.radio:hover {\n\t\tcolor: $textColor;\n\t\t// text-shadow: 0 0 5px $backgroundColor;\n\t}\n}\n\n.footer {\n\tborder-top: 2px solid #245494;\n\tbackground-color: #7ca7df;\n}\n\n.is-owerflow-auto {\n\toverflow: auto;\n}\n\ninput {\n\t+ span.toggle {\n\t\tposition: relative;\n\t\tdisplay: inline-block;\n\t\theight: 24px;\n\t\twidth: 40px;\n\t\tmargin-bottom: -6px;\n\t\tmargin-left: -24px;\n\t\tbackground: #eee;\n\t\tborder-radius: 100vh;\n\t\tcolor: rgba(0, 37, 255, 1);\n\t\t&:before {\n\t\t\tcontent: \" \";\n\t\t\tposition: absolute;\n\t\t\ttop: 4px;\n\t\t\tleft: 4px;\n\t\t\tright: auto;\n\t\t\theight: 16px;\n\t\t\twidth: 16px;\n\t\t\tbackground: #bbb;\n\t\t\tborder-radius: 100vh;\n\t\t\ttransition: all 0.4s ease-in-out;\n\t\t}\n\t}\n\t&:checked + span.toggle:before {\n\t\tleft: 20px;\n\t\tbackground: $primaryColor;\n\t\ttransition: all 0.4s ease-in-out;\n\t}\n}\n"],"sourceRoot":""}]);
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


// load sitemap
const sitemap = __webpack_require__(/*! ../../sitemap.xml */ "./sitemap.xml");

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
function updateAvailableChars() {
  console.time('updateAvailableChars');
  availableChars = [
    ...(settingsAllowNumbersEl.checked ? NUMBERS : []),
    ...(settingsAllowUppercaseEl.checked ? UPPERCASE : []),
    ...(settingsAllowLowercaseEl.checked ? LOWERCASE : []),
    ...(settingsAllowSymbolsEl.checked ? SPECIAL_CHARACTERS : []),
  ];
  validateAvailableCharsLength();
  console.timeEnd('updateAvailableChars');
}

function showNotification() {
  notificationEl.classList.remove('is-invisible');
  setTimeout(() => {
    notificationEl.classList.add('is-invisible');
  }, 3000);
}

function copyToClipboard() {
  const el = document.createElement('textarea');
  el.style.visibility = 'none';
  el.value = pwdGeneratedEl.innerText;
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
  showNotification();
}

function createPassword() {
  if (availableChars.length === 0) {
    return '';
  }

  console.time('createPassword');

  const passwordLength = getPasswordLength(settingsPasswordLengthRangeEl);
  const indexes = crypto.getRandomValues(new Uint32Array(availableChars.length));
  const password = new Password(settingsExcludeDuplicateEl.checked);

  const maxPasswordLength = settingsExcludeDuplicateEl.checked
    ? Math.min(passwordLength, availableChars.length)
    : passwordLength;

  let loop = 0;
  while (password.length < maxPasswordLength) {
    const index = indexes[loop % indexes.length] % availableChars.length;
    const char = String.fromCharCode(availableChars[index]);

    if (!isSimilarCharExcluded(char)) {
      password.addChar(char);
    }
    loop++;
  }

  const passwordAsString = password.toString();

  // Clear password in memory
  password.clear();

  console.timeEnd('createPassword');
  return passwordAsString;
}

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

function calculatePasswordLevel() {
  console.log('calculatePasswordLevel');
  let pwdLevel = 0;

  // Minimum Password Length
  const pwdLength = getPasswordLength(settingsPasswordLengthRangeEl);
  if (pwdLength < 4) {
    pwdLevel = -4;
  } else if (pwdLength < 8) {
    pwdLevel += 1;
  } else if (pwdLength < 12) {
    pwdLevel += 2;
  } else if (pwdLength < 16) {
    pwdLevel += 3;
  } else {
    pwdLevel += 4;
  }

  // Character Type Complexity
  if (
    settingsAllowLowercaseEl.checked &&
    !settingsAllowNumbersEl.checked &&
    !settingsAllowUppercaseEl.checked &&
    !settingsAllowSymbolsEl.checked
  ) {
    pwdLevel += 1;
  } else if (
    settingsAllowLowercaseEl.checked &&
    settingsAllowNumbersEl.checked &&
    !settingsAllowUppercaseEl.checked &&
    !settingsAllowSymbolsEl.checked
  ) {
    pwdLevel += 2;
  } else if (
    settingsAllowLowercaseEl.checked &&
    settingsAllowNumbersEl.checked &&
    settingsAllowUppercaseEl.checked &&
    !settingsAllowSymbolsEl.checked
  ) {
    pwdLevel += 3;
  } else {
    pwdLevel += 4;
  }

  pwdGeneratedStrengthEl.classList.remove('is-danger', 'is-warning', 'is-info', 'is-success');

  if (pwdLevel < 3) {
    pwdGeneratedStrengthEl.classList.add('is-danger');
  } else if (pwdLevel < 6) {
    pwdGeneratedStrengthEl.classList.add('is-warning');
  } else if (pwdLevel < 8) {
    pwdGeneratedStrengthEl.classList.add('is-info');
  } else {
    pwdGeneratedStrengthEl.classList.add('is-success');
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

  actionRedoEl.addEventListener('click', () => {
    pwdGeneratedEl.innerHTML = createPassword();
    calculatePasswordLevel();
  });

  document.getElementById('action-copy-to-clipboard').addEventListener('click', copyToClipboard);

  for (let el of document.getElementsByClassName('setting-element')) {
    el.addEventListener('change', updateAvailableChars);
  }

  for (let el of document.getElementsByClassName('setting-pwd-mode')) {
    el.addEventListener('change', updateSettings);
  }
}

function init() {
  console.log('init');

  document.getElementById('settings-allow-symbols-list').innerHTML = Array.from(SPECIAL_CHARACTERS).map((el) =>
    String.fromCharCode(el)
  );

  // Show content only when page is loaded
  document.body.style = 'display: auto';

  // binding

  bindEvents();

  updateAvailableChars();
  pwdGeneratedEl.innerHTML = createPassword();
  calculatePasswordLevel();
}

window.onload = init;


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDNkc7QUFDakI7QUFDNUYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRiw4SEFBOEgseUJBQXlCO0FBQ3ZKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLHdGQUF3RixXQUFXLGFBQWEsWUFBWSxNQUFNLE1BQU0sVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxhQUFhLGFBQWEsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsWUFBWSxNQUFNLE1BQU0sWUFBWSxjQUFjLFlBQVksT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLGFBQWEsY0FBYyxhQUFhLFdBQVcsVUFBVSxNQUFNLE1BQU0sWUFBWSxjQUFjLFlBQVksTUFBTSxPQUFPLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsWUFBWSxZQUFZLGdIQUFnSCwyQkFBMkIsNkJBQTZCLHlCQUF5Qiw0QkFBNEIscUJBQXFCLDRCQUE0QixpQkFBaUIsNEJBQTRCLGdDQUFnQyx1QkFBdUIsR0FBRyxpQkFBaUIsc0JBQXNCLGNBQWMsZUFBZSxnQkFBZ0IsaUJBQWlCLDJDQUEyQyw4QkFBOEIscUJBQXFCLHVCQUF1QixvQkFBb0IsdUNBQXVDLDRCQUE0QixrQ0FBa0MsR0FBRyx3QkFBd0IsMENBQTBDLG1CQUFtQixHQUFHLGNBQWMsdUJBQXVCLEdBQUcsb0JBQW9CLHNCQUFzQixHQUFHLG1CQUFtQixvQkFBb0IsR0FBRyxtQkFBbUIsb0JBQW9CLFdBQVcsZ0JBQWdCLDhCQUE4QixlQUFlLGlCQUFpQixvQ0FBb0MsK0RBQStELHNCQUFzQixpQkFBaUIsS0FBSyxHQUFHLG1CQUFtQix1QkFBdUIsZ0JBQWdCLGNBQWMsZ0NBQWdDLGlDQUFpQyxtQ0FBbUMsb0NBQW9DLG1CQUFtQixzQkFBc0Isb0NBQW9DLHlDQUF5QyxVQUFVLCtCQUErQix5Q0FBeUMsVUFBVSxzQkFBc0IseUNBQXlDLFVBQVUsUUFBUSx1QkFBdUIsb0NBQW9DLHlDQUF5QyxVQUFVLCtCQUErQix5Q0FBeUMsVUFBVSxzQkFBc0IseUNBQXlDLFVBQVUsUUFBUSx1QkFBdUIsb0NBQW9DLHlDQUF5QyxVQUFVLCtCQUErQix5Q0FBeUMsVUFBVSxzQkFBc0IseUNBQXlDLFVBQVUsUUFBUSxHQUFHLG9CQUFvQixvQkFBb0Isc0NBQXNDLGtCQUFrQix3QkFBd0IsMEJBQTBCLG1DQUFtQyxnQkFBZ0Isb0JBQW9CLGlCQUFpQix3QkFBd0IsMEJBQTBCLG1CQUFtQixrRUFBa0UsNEJBQTRCLCtDQUErQyxTQUFTLE9BQU8sS0FBSyxtQkFBbUIsOEJBQThCLGtDQUFrQyx5QkFBeUIsS0FBSyxHQUFHLCtCQUErQixnQkFBZ0IsR0FBRyxtQ0FBbUMsZ0JBQWdCLEdBQUcseUJBQXlCLHNDQUFzQyw0QkFBNEIsd0JBQXdCLG9DQUFvQyxrQkFBa0IsNENBQTRDLG1CQUFtQiw4QkFBOEIsZ0NBQWdDLHlCQUF5QixLQUFLLHdDQUF3Qyx3QkFBd0IsK0NBQStDLEtBQUssR0FBRyxhQUFhLGtDQUFrQyw4QkFBOEIsR0FBRyx1QkFBdUIsbUJBQW1CLEdBQUcsV0FBVyxtQkFBbUIseUJBQXlCLDRCQUE0QixtQkFBbUIsa0JBQWtCLDBCQUEwQix5QkFBeUIsdUJBQXVCLDJCQUEyQixpQ0FBaUMsZ0JBQWdCLHVCQUF1QiwyQkFBMkIsaUJBQWlCLGtCQUFrQixvQkFBb0IscUJBQXFCLG9CQUFvQix5QkFBeUIsNkJBQTZCLHlDQUF5QyxPQUFPLEtBQUssb0NBQW9DLGlCQUFpQixnQ0FBZ0MsdUNBQXVDLEtBQUssR0FBRyxxQkFBcUI7QUFDLzNLO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDL0oxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBLHFGQUFxRjtBQUNyRjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixxQkFBcUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDcEZhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEEsTUFBa0c7QUFDbEcsTUFBd0Y7QUFDeEYsTUFBK0Y7QUFDL0YsTUFBa0g7QUFDbEgsTUFBMkc7QUFDM0csTUFBMkc7QUFDM0csTUFBa0o7QUFDbEo7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyw0SEFBTzs7OztBQUk0RjtBQUNwSCxPQUFPLGlFQUFlLDRIQUFPLElBQUksNEhBQU8sVUFBVSw0SEFBTyxtQkFBbUIsRUFBQzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsNkJBQTZCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDbkZhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ2pDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLGlGQUFpRjtBQUNqRjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDYkE7QUFDOEI7O0FBRTlCO0FBQ0EsZ0JBQWdCLG1CQUFPLENBQUMsd0NBQW1COztBQUUzQztBQUMrQztBQUNFO0FBQ0o7O0FBRTdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYW5vdGhlci1wYXNzd29yZC1nZW5lcmF0b3IvLi9zcmMvc3R5bGVzL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vYW5vdGhlci1wYXNzd29yZC1nZW5lcmF0b3IvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2Fub3RoZXItcGFzc3dvcmQtZ2VuZXJhdG9yLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYW5vdGhlci1wYXNzd29yZC1nZW5lcmF0b3IvLi9zcmMvc3R5bGVzL3N0eWxlLnNjc3M/ZTVkOCIsIndlYnBhY2s6Ly9hbm90aGVyLXBhc3N3b3JkLWdlbmVyYXRvci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9hbm90aGVyLXBhc3N3b3JkLWdlbmVyYXRvci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYW5vdGhlci1wYXNzd29yZC1nZW5lcmF0b3IvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYW5vdGhlci1wYXNzd29yZC1nZW5lcmF0b3IvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYW5vdGhlci1wYXNzd29yZC1nZW5lcmF0b3IvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9hbm90aGVyLXBhc3N3b3JkLWdlbmVyYXRvci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2Fub3RoZXItcGFzc3dvcmQtZ2VuZXJhdG9yLy4vc3JjL3NjcmlwdHMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1PcGVuK1NhbnM6aXRhbCx3Z2h0QDAsMzAwLi44MDA7MSwzMDAuLjgwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDo6c2VsZWN0aW9uIHtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGJhY2tncm91bmQ6ICNhODlkOTE7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuaHRtbCxcbmJvZHkge1xuICBjb2xvcjogIzQ0NDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1vcHRpY2FsLXNpemluZzogYXV0bztcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xuICBzY3JvbGwtc25hcC10eXBlOiB5IG1hbmRhdG9yeTtcbn1cblxuLnRpdGxlLFxuLnN1YnRpdGxlIHtcbiAgZm9udC1mYW1pbHk6IFwiS29kZSBNb25vXCIsIG1vbm9zcGFjZTtcbiAgY29sb3I6IGluaGVyaXQ7XG59XG5cbi5zZWN0aW9uIHtcbiAgcGFkZGluZzogMnJlbSAycmVtO1xufVxuXG4uaXMtZnVsbGhlaWdodCB7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xufVxuXG4uaXMtZnVsbHdpZHRoIHtcbiAgbWluLXdpZHRoOiAxMDAlO1xufVxuXG4ubm90aWZpY2F0aW9uIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlNjQ1O1xuICBvcGFjaXR5OiAxO1xuICB6LWluZGV4OiAxMDA7XG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4ICM0NDQ7XG4gIHRyYW5zaXRpb246IHZpc2liaWxpdHkgMHMsIG9wYWNpdHkgMC4zcyBsaW5lYXI7XG59XG4ubm90aWZpY2F0aW9uLmlzLWludmlzaWJsZSB7XG4gIG9wYWNpdHk6IDA7XG59XG5cbiNwd2Qtc3RyZW5ndGgge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMHB4O1xuICBsZWZ0OiAwcHg7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDBweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDBweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNnB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNnB4O1xuICBoZWlnaHQ6IDAuNXJlbTtcbn1cblxuLnB3ZC1jb250YWluZXIge1xuICBmb250LXNpemU6IDJyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLnB3ZC1jb250YWluZXIgLmFjdGlvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLnB3ZC1jb250YWluZXIgLmFjdGlvbnMgLmFjdGlvbiB7XG4gIHBhZGRpbmc6IDAgMXJlbTtcbiAgY29sb3I6ICM0ODVmYzc7XG59XG4ucHdkLWNvbnRhaW5lciAuYWN0aW9ucyAuYWN0aW9uOmhvdmVyIHtcbiAgY29sb3I6ICM0NDQ7XG4gIHRleHQtc2hhZG93OiAwIDAgNXB4ICNhODlkOTE7XG59XG4ucHdkLWNvbnRhaW5lciA6OnNlbGVjdGlvbiB7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBiYWNrZ3JvdW5kOiAjYTg5ZDkxO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbiNzZXR0aW5ncy1wYXNzd29yZC1sZW5ndGgge1xuICB3aWR0aDogNjRweDtcbn1cblxuI3NldHRpbmdzLXBhc3N3b3JkLWxlbmd0aC1yYW5nZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uc2V0dGluZ3MtY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2E4OWQ5MTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkICM0ODVmYzc7XG4gIHBhZGRpbmc6IDFyZW07XG59XG4uc2V0dGluZ3MtY29udGFpbmVyIDo6c2VsZWN0aW9uIHtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGJhY2tncm91bmQ6ICM0ODVmYzc7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cbi5zZXR0aW5ncy1jb250YWluZXIgLmNoZWNrYm94OmhvdmVyLFxuLnNldHRpbmdzLWNvbnRhaW5lciAucmFkaW86aG92ZXIge1xuICBjb2xvcjogIzQ0NDtcbn1cblxuLmZvb3RlciB7XG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCAjMjQ1NDk0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2NhN2RmO1xufVxuXG4uaXMtb3dlcmZsb3ctYXV0byB7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG5pbnB1dCArIHNwYW4udG9nZ2xlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGhlaWdodDogMjRweDtcbiAgd2lkdGg6IDQwcHg7XG4gIG1hcmdpbi1ib3R0b206IC02cHg7XG4gIG1hcmdpbi1sZWZ0OiAtMjRweDtcbiAgYmFja2dyb3VuZDogI2VlZTtcbiAgYm9yZGVyLXJhZGl1czogMTAwdmg7XG4gIGNvbG9yOiByZ2IoMCwgMzcsIDI1NSk7XG59XG5pbnB1dCArIHNwYW4udG9nZ2xlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiIFwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNHB4O1xuICBsZWZ0OiA0cHg7XG4gIHJpZ2h0OiBhdXRvO1xuICBoZWlnaHQ6IDE2cHg7XG4gIHdpZHRoOiAxNnB4O1xuICBiYWNrZ3JvdW5kOiAjYmJiO1xuICBib3JkZXItcmFkaXVzOiAxMDB2aDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XG59XG5pbnB1dDpjaGVja2VkICsgc3Bhbi50b2dnbGU6YmVmb3JlIHtcbiAgbGVmdDogMjBweDtcbiAgYmFja2dyb3VuZDogIzQ4NWZjNztcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3N0eWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBU0E7RUFDQyxjQU5pQjtFQU9qQixtQkFUZ0I7RUFVaEIsa0JBQUE7QUFQRDs7QUFVQTs7RUFFQyxXQVhXO0VBWVgsU0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9DQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQXZCaUI7RUF3QmpCLHVCQUFBO0VBQ0EsNkJBQUE7QUFQRDs7QUFVQTs7RUFFQyxtQ0FBQTtFQUNBLGNBQUE7QUFQRDs7QUFVQTtFQUNDLGtCQUFBO0FBUEQ7O0FBVUE7RUFDQyxpQkFBQTtBQVBEOztBQVVBO0VBQ0MsZUFBQTtBQVBEOztBQVVBO0VBQ0MsZUFBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBRUEsOENBQ0M7QUFURjtBQVlDO0VBQ0MsVUFBQTtBQVZGOztBQWNBO0VBQ0Msa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSw4QkFBQTtFQUNBLCtCQUFBO0VBQ0EsY0FBQTtBQVhEOztBQWtEQTtFQUNDLGVBQUE7RUFFQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLDhCQUFBO0FBaEREO0FBa0RDO0VBQ0MsYUFBQTtBQWhERjtBQWtERTtFQUNDLGVBQUE7RUFDQSxjQTdIWTtBQTZFZjtBQWtERztFQUVDLFdBOUhRO0VBK0hSLDRCQUFBO0FBakRKO0FBc0RDO0VBQ0MsY0F2SWdCO0VBd0loQixtQkExSWU7RUEySWYsa0JBQUE7QUFwREY7O0FBd0RBO0VBQ0MsV0FBQTtBQXJERDs7QUF1REE7RUFDQyxXQUFBO0FBcEREOztBQXVEQTtFQUNDLHlCQXZKZ0I7RUF3SmhCLGNBdEppQjtFQXVKakIsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7QUFwREQ7QUF1REM7RUFDQyxjQTdKZ0I7RUE4SmhCLG1CQS9KYTtFQWdLYixrQkFBQTtBQXJERjtBQXdEQzs7RUFFQyxXQWxLVTtBQTRHWjs7QUEyREE7RUFDQyw2QkFBQTtFQUNBLHlCQUFBO0FBeEREOztBQTJEQTtFQUNDLGNBQUE7QUF4REQ7O0FBNERDO0VBQ0Msa0JBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxzQkFBQTtBQXpERjtBQTBERTtFQUNDLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLGdDQUFBO0FBeERIO0FBMkRDO0VBQ0MsVUFBQTtFQUNBLG1CQTdNYTtFQThNYixnQ0FBQTtBQXpERlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1PcGVuK1NhbnM6aXRhbCx3Z2h0QDAsMzAwLi44MDA7MSwzMDAuLjgwMCZkaXNwbGF5PXN3YXBcXFwiKTtcXG5cXG4kc2Vjb25kYXJ5Q29sb3I6ICNhODlkOTE7XFxuJHByaW1hcnlDb2xvcjogIzQ4NWZjNztcXG4kYmFja2dyb3VuZENvbG9yOiAjZmZmZmZmO1xcblxcbiR0ZXh0Q29sb3I6ICM0NDQ7XFxuJGxpbmtDb2xvcjogJHByaW1hcnlDb2xvcjtcXG5cXG46OnNlbGVjdGlvbiB7XFxuXFx0Y29sb3I6ICRiYWNrZ3JvdW5kQ29sb3I7XFxuXFx0YmFja2dyb3VuZDogJHNlY29uZGFyeUNvbG9yO1xcblxcdGJvcmRlci1yYWRpdXM6IDRweDtcXG59XFxuXFxuaHRtbCxcXG5ib2R5IHtcXG5cXHRjb2xvcjogJHRleHRDb2xvcjtcXG5cXHRtYXJnaW46IDA7XFxuXFx0cGFkZGluZzogMDtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRoZWlnaHQ6IDEwMCU7XFxuXFx0Zm9udC1mYW1pbHk6IFxcXCJPcGVuIFNhbnNcXFwiLCBzYW5zLXNlcmlmO1xcblxcdGZvbnQtb3B0aWNhbC1zaXppbmc6IGF1dG87XFxuXFx0Zm9udC13ZWlnaHQ6IDQwMDtcXG5cXHRmb250LXN0eWxlOiBub3JtYWw7XFxuXFx0Zm9udC1zaXplOiAxNnB4O1xcblxcdGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kQ29sb3I7XFxuXFx0c2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XFxuXFx0c2Nyb2xsLXNuYXAtdHlwZTogeSBtYW5kYXRvcnk7XFxufVxcblxcbi50aXRsZSxcXG4uc3VidGl0bGUge1xcblxcdGZvbnQtZmFtaWx5OiBcXFwiS29kZSBNb25vXFxcIiwgbW9ub3NwYWNlO1xcblxcdGNvbG9yOiBpbmhlcml0O1xcbn1cXG5cXG4uc2VjdGlvbiB7XFxuXFx0cGFkZGluZzogMnJlbSAycmVtO1xcbn1cXG5cXG4uaXMtZnVsbGhlaWdodCB7XFxuXFx0bWluLWhlaWdodDogMTAwdmg7XFxufVxcblxcbi5pcy1mdWxsd2lkdGgge1xcblxcdG1pbi13aWR0aDogMTAwJTtcXG59XFxuXFxuLm5vdGlmaWNhdGlvbiB7XFxuXFx0cG9zaXRpb246IGZpeGVkO1xcblxcdHRvcDogMDtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlNjQ1O1xcblxcdG9wYWNpdHk6IDE7XFxuXFx0ei1pbmRleDogMTAwO1xcblxcdGJveC1zaGFkb3c6IDAgMCAxMHB4ICR0ZXh0Q29sb3I7XFxuXFxuXFx0dHJhbnNpdGlvbjpcXG5cXHRcXHR2aXNpYmlsaXR5IDBzLFxcblxcdFxcdG9wYWNpdHkgMC4zcyBsaW5lYXI7XFxuXFxuXFx0Ji5pcy1pbnZpc2libGUge1xcblxcdFxcdG9wYWNpdHk6IDA7XFxuXFx0fVxcbn1cXG5cXG4jcHdkLXN0cmVuZ3RoIHtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0Ym90dG9tOiAwcHg7XFxuXFx0bGVmdDogMHB4O1xcblxcdGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDBweDtcXG5cXHRib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMHB4O1xcblxcdGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDZweDtcXG5cXHRib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNnB4O1xcblxcdGhlaWdodDogMC41cmVtO1xcblxcblxcdC8vICYuaXMtZGFuZ2VyIHtcXG5cXHQvLyBcXHQmOjotd2Via2l0LXByb2dyZXNzLXZhbHVlIHtcXG5cXHQvLyBcXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbnllbGxvdztcXG5cXHQvLyBcXHR9XFxuXFx0Ly8gXFx0Jjo6LW1vei1wcm9ncmVzcy1iYXIge1xcblxcdC8vIFxcdFxcdGJhY2tncm91bmQtY29sb3I6IGdyZWVueWVsbG93O1xcblxcdC8vIFxcdH1cXG5cXHQvLyBcXHQmOjotbXMtZmlsbCB7XFxuXFx0Ly8gXFx0XFx0YmFja2dyb3VuZC1jb2xvcjogZ3JlZW55ZWxsb3c7XFxuXFx0Ly8gXFx0fVxcblxcdC8vIH1cXG5cXG5cXHQvLyAmLmlzLXdhcm5pbmcge1xcblxcdC8vIFxcdCY6Oi13ZWJraXQtcHJvZ3Jlc3MtdmFsdWUge1xcblxcdC8vIFxcdFxcdGJhY2tncm91bmQtY29sb3I6IGdyZWVueWVsbG93O1xcblxcdC8vIFxcdH1cXG5cXHQvLyBcXHQmOjotbW96LXByb2dyZXNzLWJhciB7XFxuXFx0Ly8gXFx0XFx0YmFja2dyb3VuZC1jb2xvcjogZ3JlZW55ZWxsb3c7XFxuXFx0Ly8gXFx0fVxcblxcdC8vIFxcdCY6Oi1tcy1maWxsIHtcXG5cXHQvLyBcXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbnllbGxvdztcXG5cXHQvLyBcXHR9XFxuXFx0Ly8gfVxcblxcblxcdC8vICYuaXMtc3VjY2VzcyB7XFxuXFx0Ly8gXFx0Jjo6LXdlYmtpdC1wcm9ncmVzcy12YWx1ZSB7XFxuXFx0Ly8gXFx0XFx0YmFja2dyb3VuZC1jb2xvcjogZ3JlZW55ZWxsb3c7XFxuXFx0Ly8gXFx0fVxcblxcdC8vIFxcdCY6Oi1tb3otcHJvZ3Jlc3MtYmFyIHtcXG5cXHQvLyBcXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbnllbGxvdztcXG5cXHQvLyBcXHR9XFxuXFx0Ly8gXFx0Jjo6LW1zLWZpbGwge1xcblxcdC8vIFxcdFxcdGJhY2tncm91bmQtY29sb3I6IGdyZWVueWVsbG93O1xcblxcdC8vIFxcdH1cXG5cXHQvLyB9XFxufVxcblxcbi5wd2QtY29udGFpbmVyIHtcXG5cXHRmb250LXNpemU6IDJyZW07XFxuXFx0Ly8gYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkIGdyZWVuO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IHJvdztcXG5cXHRhbGlnbi1pdGVtczogYmFzZWxpbmU7XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcblxcdC5hY3Rpb25zIHtcXG5cXHRcXHRkaXNwbGF5OiBmbGV4O1xcblxcblxcdFxcdC5hY3Rpb24ge1xcblxcdFxcdFxcdHBhZGRpbmc6IDAgMXJlbTtcXG5cXHRcXHRcXHRjb2xvcjogJGxpbmtDb2xvcjtcXG5cXG5cXHRcXHRcXHQmOmhvdmVyIHtcXG5cXHRcXHRcXHRcXHQvLyBjb2xvcjogbGlnaHRlbigkY29sb3I6ICRzZWNvbmRhcnlDb2xvciwgJGFtb3VudDogMjApO1xcblxcdFxcdFxcdFxcdGNvbG9yOiAkdGV4dENvbG9yO1xcblxcdFxcdFxcdFxcdHRleHQtc2hhZG93OiAwIDAgNXB4ICRzZWNvbmRhcnlDb2xvcjtcXG5cXHRcXHRcXHR9XFxuXFx0XFx0fVxcblxcdH1cXG5cXG5cXHQ6OnNlbGVjdGlvbiB7XFxuXFx0XFx0Y29sb3I6ICRiYWNrZ3JvdW5kQ29sb3I7XFxuXFx0XFx0YmFja2dyb3VuZDogJHNlY29uZGFyeUNvbG9yO1xcblxcdFxcdGJvcmRlci1yYWRpdXM6IDRweDtcXG5cXHR9XFxufVxcblxcbiNzZXR0aW5ncy1wYXNzd29yZC1sZW5ndGgge1xcblxcdHdpZHRoOiA2NHB4O1xcbn1cXG4jc2V0dGluZ3MtcGFzc3dvcmQtbGVuZ3RoLXJhbmdlIHtcXG5cXHR3aWR0aDogMTAwJTtcXG59XFxuXFxuLnNldHRpbmdzLWNvbnRhaW5lciB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogJHNlY29uZGFyeUNvbG9yO1xcblxcdGNvbG9yOiAkYmFja2dyb3VuZENvbG9yO1xcblxcdGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuXFx0Ym9yZGVyOiAycHggc29saWQgJHByaW1hcnlDb2xvcjtcXG5cXHRwYWRkaW5nOiAxcmVtO1xcblxcdC8vIGJveC1zaGFkb3c6IDAgMnB4IDEwcHggJHByaW1hcnlDb2xvcjtcXG5cXG5cXHQ6OnNlbGVjdGlvbiB7XFxuXFx0XFx0Y29sb3I6ICRiYWNrZ3JvdW5kQ29sb3I7XFxuXFx0XFx0YmFja2dyb3VuZDogJHByaW1hcnlDb2xvcjtcXG5cXHRcXHRib3JkZXItcmFkaXVzOiA0cHg7XFxuXFx0fVxcblxcblxcdC5jaGVja2JveDpob3ZlcixcXG5cXHQucmFkaW86aG92ZXIge1xcblxcdFxcdGNvbG9yOiAkdGV4dENvbG9yO1xcblxcdFxcdC8vIHRleHQtc2hhZG93OiAwIDAgNXB4ICRiYWNrZ3JvdW5kQ29sb3I7XFxuXFx0fVxcbn1cXG5cXG4uZm9vdGVyIHtcXG5cXHRib3JkZXItdG9wOiAycHggc29saWQgIzI0NTQ5NDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjN2NhN2RmO1xcbn1cXG5cXG4uaXMtb3dlcmZsb3ctYXV0byB7XFxuXFx0b3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbmlucHV0IHtcXG5cXHQrIHNwYW4udG9nZ2xlIHtcXG5cXHRcXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0XFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xcblxcdFxcdGhlaWdodDogMjRweDtcXG5cXHRcXHR3aWR0aDogNDBweDtcXG5cXHRcXHRtYXJnaW4tYm90dG9tOiAtNnB4O1xcblxcdFxcdG1hcmdpbi1sZWZ0OiAtMjRweDtcXG5cXHRcXHRiYWNrZ3JvdW5kOiAjZWVlO1xcblxcdFxcdGJvcmRlci1yYWRpdXM6IDEwMHZoO1xcblxcdFxcdGNvbG9yOiByZ2JhKDAsIDM3LCAyNTUsIDEpO1xcblxcdFxcdCY6YmVmb3JlIHtcXG5cXHRcXHRcXHRjb250ZW50OiBcXFwiIFxcXCI7XFxuXFx0XFx0XFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdFxcdFxcdHRvcDogNHB4O1xcblxcdFxcdFxcdGxlZnQ6IDRweDtcXG5cXHRcXHRcXHRyaWdodDogYXV0bztcXG5cXHRcXHRcXHRoZWlnaHQ6IDE2cHg7XFxuXFx0XFx0XFx0d2lkdGg6IDE2cHg7XFxuXFx0XFx0XFx0YmFja2dyb3VuZDogI2JiYjtcXG5cXHRcXHRcXHRib3JkZXItcmFkaXVzOiAxMDB2aDtcXG5cXHRcXHRcXHR0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcXG5cXHRcXHR9XFxuXFx0fVxcblxcdCY6Y2hlY2tlZCArIHNwYW4udG9nZ2xlOmJlZm9yZSB7XFxuXFx0XFx0bGVmdDogMjBweDtcXG5cXHRcXHRiYWNrZ3JvdW5kOiAkcHJpbWFyeUNvbG9yO1xcblxcdFxcdHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xcblxcdH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBsb2FkIHN0eWxlc1xuaW1wb3J0ICcuLi9zdHlsZXMvc3R5bGUuc2Nzcyc7XG5cbi8vIGxvYWQgc2l0ZW1hcFxuY29uc3Qgc2l0ZW1hcCA9IHJlcXVpcmUoJy4uLy4uL3NpdGVtYXAueG1sJyk7XG5cbi8vIGxvYWQgaW1hZ2VzXG5pbXBvcnQgZmF2aWNvbkljbyBmcm9tICcuLi9pbWFnZXMvZmF2aWNvbi5pY28nO1xuaW1wb3J0IGZhdmljb25JbWFnZSBmcm9tICcuLi9pbWFnZXMvZmF2aWNvbi5wbmcnO1xuaW1wb3J0IHNoYXJlSW1hZ2UgZnJvbSAnLi4vaW1hZ2VzL3NoYXJlLnBuZyc7XG5cbmNsYXNzIFBhc3N3b3JkIHtcbiAgI2V4Y2x1ZGVEdXBsaWNhdGVzO1xuICAjY2hhcnM7XG4gICNsZW5ndGggPSAwO1xuICBjb25zdHJ1Y3RvcihleGNsdWRlRHVwbGljYXRlcykge1xuICAgIHRoaXMuI2V4Y2x1ZGVEdXBsaWNhdGVzID0gZXhjbHVkZUR1cGxpY2F0ZXM7XG4gICAgdGhpcy4jY2hhcnMgPSB0aGlzLiNleGNsdWRlRHVwbGljYXRlcyA/IG5ldyBTZXQoKSA6IFtdO1xuICB9XG5cbiAgYWRkQ2hhcihjaGFyKSB7XG4gICAgaWYgKHRoaXMuI2V4Y2x1ZGVEdXBsaWNhdGVzKSB7XG4gICAgICB0aGlzLiNjaGFycy5hZGQoY2hhcik7XG4gICAgICB0aGlzLiNsZW5ndGggPSB0aGlzLiNjaGFycy5zaXplO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLiNjaGFycy5wdXNoKGNoYXIpO1xuICAgICAgdGhpcy4jbGVuZ3RoKys7XG4gICAgfVxuICB9XG5cbiAgZ2V0IGxlbmd0aCgpIHtcbiAgICByZXR1cm4gdGhpcy4jbGVuZ3RoO1xuICB9XG5cbiAgdG9TdHJpbmcoKSB7XG4gICAgaWYgKHRoaXMuI2V4Y2x1ZGVEdXBsaWNhdGVzKSB7XG4gICAgICByZXR1cm4gQXJyYXkuZnJvbSh0aGlzLiNjaGFycykuam9pbignJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLiNjaGFycy5qb2luKCcnKTtcbiAgICB9XG4gIH1cblxuICBjbGVhcigpIHtcbiAgICBpZiAodGhpcy4jZXhjbHVkZUR1cGxpY2F0ZXMpIHtcbiAgICAgIHRoaXMuI2NoYXJzLmNsZWFyKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIHRoaXMuI2NoYXJzLmZpbGwoMCk7XG4gICAgICB0aGlzLiNjaGFycy5sZW5ndGggPSAwO1xuICAgIH1cbiAgICB0aGlzLiNsZW5ndGggPSAwO1xuICB9XG59XG5cbmNvbnN0IE5VTUJFUlMgPSBuZXcgVWludDhBcnJheShbNDgsIDQ5LCA1MCwgNTEsIDUyLCA1MywgNTQsIDU1LCA1NiwgNTddKTtcbmNvbnN0IExPV0VSQ0FTRSA9IG5ldyBVaW50OEFycmF5KFtcbiAgOTcsIDk4LCA5OSwgMTAwLCAxMDEsIDEwMiwgMTAzLCAxMDQsIDEwNSwgMTA2LCAxMDcsIDEwOCwgMTA5LCAxMTAsIDExMSwgMTEyLCAxMTMsIDExNCwgMTE1LCAxMTYsIDExNywgMTE4LCAxMTksIDEyMCxcbiAgMTIxLCAxMjIsXG5dKTtcbmNvbnN0IFVQUEVSQ0FTRSA9IG5ldyBVaW50OEFycmF5KFtcbiAgNjUsIDY2LCA2NywgNjgsIDY5LCA3MCwgNzEsIDcyLCA3MywgNzQsIDc1LCA3NiwgNzcsIDc4LCA3OSwgODAsIDgxLCA4MiwgODMsIDg0LCA4NSwgODYsIDg3LCA4OCwgODksIDkwLFxuXSk7XG5jb25zdCBTUEVDSUFMX0NIQVJBQ1RFUlMgPSBuZXcgVWludDhBcnJheShbMzMsIDM1LCAzNiwgMzcsIDM4LCA0MCwgNDEsIDQyLCA0MywgNjQsIDk0XSk7XG5jb25zdCBTSU1JTEFSX0NIQVJTID0ge1xuICAwOiBbNDgsIDc5LCAxMTEsIDczLCAxMDVdLCAvLyAwLCBPLCBsLCBJXG4gIDE6IFs0OSwgNzYsIDEwOF0sIC8vIDEsIGwsIElcbiAgNTogWzUzLCA4MywgMTE1LCA1NiwgODhdLCAvLyA1LCBTLCBzLCA4LCBCXG4gIDY6IFs1NCwgNjYsIDk4XSwgLy8gNiwgYiwgQlxuICA4OiBbNTYsIDY2LCA5OF0sIC8vIDgsIEIsIGJcbiAgOTogWzU3LCA3MSwgMTAzLCA1NCwgNjZdLCAvLyA5LCBnLCBHLCA2LCBiXG4gIGE6IFs5NywgNjQsIDY1XSwgLy8gYSwgQCwgQVxuICBlOiBbMTAxLCA2NywgOTldLCAvLyBlLCBjLCBDXG4gIGc6IFsxMDMsIDgxLCAxMTMsIDU3XSwgLy8gZywgcSwgUSwgOVxuICBsOiBbMTA4LCA0OSwgNzMsIDEwNV0sIC8vIGwsIDEsIEksIGlcbiAgbzogWzExMSwgNDgsIDc5LCA5NywgNjVdLCAvLyBvLCAwLCBPLCBhLCBBXG4gIHM6IFsxMTUsIDUzLCA4M10sIC8vIHMsIDUsIFNcbiAgdDogWzExNiwgNTUsIDg0XSwgLy8gdCwgNywgVFxuICB6OiBbMTIyLCA1MF0sIC8vIHosIDJcbn07XG5cbmxldCBhdmFpbGFibGVDaGFycyA9IFtdO1xuXG5jb25zdCBwd2RHZW5lcmF0ZWRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwd2QtZ2VuZXJhdGVkJyk7XG5jb25zdCBub3RpZmljYXRpb25FbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdub3RpZmljYXRpb24nKTtcbmNvbnN0IGFjdGlvblJlZG9FbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhY3Rpb24tcmVkbycpO1xuY29uc3Qgbm90aWZpY2F0aW9uRGVsZXRlQnRuRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubm90aWZpY2F0aW9uIGJ1dHRvbi5kZWxldGUnKTtcbmNvbnN0IHNldHRpbmdzUGFzc3dvcmRMZW5ndGhSYW5nZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NldHRpbmdzLXBhc3N3b3JkLWxlbmd0aC1yYW5nZScpO1xuY29uc3Qgc2V0dGluZ3NQYXNzd29yZExlbmd0aEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NldHRpbmdzLXBhc3N3b3JkLWxlbmd0aCcpO1xuY29uc3QgcHdkR2VuZXJhdGVkU3RyZW5ndGhFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwd2Qtc3RyZW5ndGgnKTtcbmNvbnN0IHNldHRpbmdzQWxsb3dOdW1iZXJzRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2V0dGluZ3MtYWxsb3ctbnVtYmVycycpO1xuY29uc3Qgc2V0dGluZ3NBbGxvd1VwcGVyY2FzZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NldHRpbmdzLWFsbG93LXVwcGVyY2FzZScpO1xuY29uc3Qgc2V0dGluZ3NBbGxvd0xvd2VyY2FzZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NldHRpbmdzLWFsbG93LWxvd2VyY2FzZScpO1xuY29uc3Qgc2V0dGluZ3NBbGxvd1N5bWJvbHNFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZXR0aW5ncy1hbGxvdy1zeW1ib2xzJyk7XG5jb25zdCBzZXR0aW5nc0V4Y2x1ZGVEdXBsaWNhdGVFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZXR0aW5ncy1leGNsdWRlLWR1cGxpY2F0ZS1jaGFyYWN0ZXJzJyk7XG5jb25zdCBzZXR0aW5nc0V4Y2x1ZGVTaW1pbGFyRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2V0dGluZ3MtZXhjbHVkZS1zaW1pbGFyLWNoYXJhY3RlcnMnKTtcblxuZnVuY3Rpb24gaXNTaW1pbGFyQ2hhckV4Y2x1ZGVkKGNoYXIpIHtcbiAgY29uc3Qgc2ltaWxhckdyb3VwID0gU0lNSUxBUl9DSEFSU1tjaGFyXTtcbiAgcmV0dXJuICEhc2ltaWxhckdyb3VwICYmIHNldHRpbmdzRXhjbHVkZVNpbWlsYXJFbC5jaGVja2VkICYmIGF2YWlsYWJsZUNoYXJzLnNvbWUoKGVsKSA9PiBzaW1pbGFyR3JvdXAuaW5jbHVkZXMoZWwpKTtcbn1cblxuZnVuY3Rpb24gZ2V0UGFzc3dvcmRMZW5ndGgoc2V0dGluZ3NQYXNzd29yZExlbmd0aCkge1xuICBjb25zdCBsZW5ndGggPSBzZXR0aW5nc1Bhc3N3b3JkTGVuZ3RoLnZhbHVlO1xuICB0cnkge1xuICAgIHJldHVybiBwYXJzZUludChsZW5ndGggfHwgc2V0dGluZ3NQYXNzd29yZExlbmd0aC5nZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJykpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS5sb2coJ2Vycm9yJywgZSk7XG4gIH1cbiAgcmV0dXJuIDA7XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlQXZhaWxhYmxlQ2hhcnNMZW5ndGgoKSB7XG4gIGlmIChhdmFpbGFibGVDaGFycy5sZW5ndGggPT09IDApIHtcbiAgICBhY3Rpb25SZWRvRWwuY2xhc3NMaXN0LmFkZCgnaXMtaW52aXNpYmxlJyk7XG4gICAgcmV0dXJuO1xuICB9XG4gIGFjdGlvblJlZG9FbC5jbGFzc0xpc3QucmVtb3ZlKCdpcy1pbnZpc2libGUnKTtcbn1cblxuLy8gVXBkYXRlIGF2YWlsYWJsZUNoYXJzIGJhc2VkIG9uIHNldHRpbmdzIGR1cmluZyBpbml0aWFsaXphdGlvblxuZnVuY3Rpb24gdXBkYXRlQXZhaWxhYmxlQ2hhcnMoKSB7XG4gIGNvbnNvbGUudGltZSgndXBkYXRlQXZhaWxhYmxlQ2hhcnMnKTtcbiAgYXZhaWxhYmxlQ2hhcnMgPSBbXG4gICAgLi4uKHNldHRpbmdzQWxsb3dOdW1iZXJzRWwuY2hlY2tlZCA/IE5VTUJFUlMgOiBbXSksXG4gICAgLi4uKHNldHRpbmdzQWxsb3dVcHBlcmNhc2VFbC5jaGVja2VkID8gVVBQRVJDQVNFIDogW10pLFxuICAgIC4uLihzZXR0aW5nc0FsbG93TG93ZXJjYXNlRWwuY2hlY2tlZCA/IExPV0VSQ0FTRSA6IFtdKSxcbiAgICAuLi4oc2V0dGluZ3NBbGxvd1N5bWJvbHNFbC5jaGVja2VkID8gU1BFQ0lBTF9DSEFSQUNURVJTIDogW10pLFxuICBdO1xuICB2YWxpZGF0ZUF2YWlsYWJsZUNoYXJzTGVuZ3RoKCk7XG4gIGNvbnNvbGUudGltZUVuZCgndXBkYXRlQXZhaWxhYmxlQ2hhcnMnKTtcbn1cblxuZnVuY3Rpb24gc2hvd05vdGlmaWNhdGlvbigpIHtcbiAgbm90aWZpY2F0aW9uRWwuY2xhc3NMaXN0LnJlbW92ZSgnaXMtaW52aXNpYmxlJyk7XG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIG5vdGlmaWNhdGlvbkVsLmNsYXNzTGlzdC5hZGQoJ2lzLWludmlzaWJsZScpO1xuICB9LCAzMDAwKTtcbn1cblxuZnVuY3Rpb24gY29weVRvQ2xpcGJvYXJkKCkge1xuICBjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gIGVsLnN0eWxlLnZpc2liaWxpdHkgPSAnbm9uZSc7XG4gIGVsLnZhbHVlID0gcHdkR2VuZXJhdGVkRWwuaW5uZXJUZXh0O1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGVsKTtcbiAgZWwuc2VsZWN0KCk7XG4gIGRvY3VtZW50LmV4ZWNDb21tYW5kKCdjb3B5Jyk7XG4gIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZWwpO1xuICBzaG93Tm90aWZpY2F0aW9uKCk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVBhc3N3b3JkKCkge1xuICBpZiAoYXZhaWxhYmxlQ2hhcnMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgY29uc29sZS50aW1lKCdjcmVhdGVQYXNzd29yZCcpO1xuXG4gIGNvbnN0IHBhc3N3b3JkTGVuZ3RoID0gZ2V0UGFzc3dvcmRMZW5ndGgoc2V0dGluZ3NQYXNzd29yZExlbmd0aFJhbmdlRWwpO1xuICBjb25zdCBpbmRleGVzID0gY3J5cHRvLmdldFJhbmRvbVZhbHVlcyhuZXcgVWludDMyQXJyYXkoYXZhaWxhYmxlQ2hhcnMubGVuZ3RoKSk7XG4gIGNvbnN0IHBhc3N3b3JkID0gbmV3IFBhc3N3b3JkKHNldHRpbmdzRXhjbHVkZUR1cGxpY2F0ZUVsLmNoZWNrZWQpO1xuXG4gIGNvbnN0IG1heFBhc3N3b3JkTGVuZ3RoID0gc2V0dGluZ3NFeGNsdWRlRHVwbGljYXRlRWwuY2hlY2tlZFxuICAgID8gTWF0aC5taW4ocGFzc3dvcmRMZW5ndGgsIGF2YWlsYWJsZUNoYXJzLmxlbmd0aClcbiAgICA6IHBhc3N3b3JkTGVuZ3RoO1xuXG4gIGxldCBsb29wID0gMDtcbiAgd2hpbGUgKHBhc3N3b3JkLmxlbmd0aCA8IG1heFBhc3N3b3JkTGVuZ3RoKSB7XG4gICAgY29uc3QgaW5kZXggPSBpbmRleGVzW2xvb3AgJSBpbmRleGVzLmxlbmd0aF0gJSBhdmFpbGFibGVDaGFycy5sZW5ndGg7XG4gICAgY29uc3QgY2hhciA9IFN0cmluZy5mcm9tQ2hhckNvZGUoYXZhaWxhYmxlQ2hhcnNbaW5kZXhdKTtcblxuICAgIGlmICghaXNTaW1pbGFyQ2hhckV4Y2x1ZGVkKGNoYXIpKSB7XG4gICAgICBwYXNzd29yZC5hZGRDaGFyKGNoYXIpO1xuICAgIH1cbiAgICBsb29wKys7XG4gIH1cblxuICBjb25zdCBwYXNzd29yZEFzU3RyaW5nID0gcGFzc3dvcmQudG9TdHJpbmcoKTtcblxuICAvLyBDbGVhciBwYXNzd29yZCBpbiBtZW1vcnlcbiAgcGFzc3dvcmQuY2xlYXIoKTtcblxuICBjb25zb2xlLnRpbWVFbmQoJ2NyZWF0ZVBhc3N3b3JkJyk7XG4gIHJldHVybiBwYXNzd29yZEFzU3RyaW5nO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVTZXR0aW5ncygpIHtcbiAgY29uc3QgcHdkTW9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJwd2QtbW9kZVwiXTpjaGVja2VkJykudmFsdWU7XG4gIHN3aXRjaCAocHdkTW9kZSkge1xuICAgIGNhc2UgJ2Vhc3ktdG8tcmVhZCc6IHtcbiAgICAgIHNldHRpbmdzRXhjbHVkZVNpbWlsYXJFbC5jaGVja2VkID0gdHJ1ZTtcbiAgICAgIHNldHRpbmdzRXhjbHVkZUR1cGxpY2F0ZUVsLmNoZWNrZWQgPSBmYWxzZTtcblxuICAgICAgc2V0dGluZ3NBbGxvd051bWJlcnNFbC5jaGVja2VkID0gZmFsc2U7XG4gICAgICBzZXR0aW5nc0FsbG93VXBwZXJjYXNlRWwuY2hlY2tlZCA9IHRydWU7XG4gICAgICBzZXR0aW5nc0FsbG93TG93ZXJjYXNlRWwuY2hlY2tlZCA9IHRydWU7XG4gICAgICBzZXR0aW5nc0FsbG93U3ltYm9sc0VsLmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBjYXNlICdlYXN5LXRvLXNheSc6IHtcbiAgICAgIHNldHRpbmdzRXhjbHVkZVNpbWlsYXJFbC5jaGVja2VkID0gZmFsc2U7XG4gICAgICBzZXR0aW5nc0V4Y2x1ZGVEdXBsaWNhdGVFbC5jaGVja2VkID0gZmFsc2U7XG5cbiAgICAgIHNldHRpbmdzQWxsb3dOdW1iZXJzRWwuY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgc2V0dGluZ3NBbGxvd1VwcGVyY2FzZUVsLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgc2V0dGluZ3NBbGxvd0xvd2VyY2FzZUVsLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgc2V0dGluZ3NBbGxvd1N5bWJvbHNFbC5jaGVja2VkID0gZmFsc2U7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgY2FzZSAnYWxsLWNoYXJhY3RlcnMnOlxuICAgIGRlZmF1bHQ6IHtcbiAgICAgIHNldHRpbmdzRXhjbHVkZVNpbWlsYXJFbC5jaGVja2VkID0gZmFsc2U7XG4gICAgICBzZXR0aW5nc0V4Y2x1ZGVEdXBsaWNhdGVFbC5jaGVja2VkID0gZmFsc2U7XG5cbiAgICAgIHNldHRpbmdzQWxsb3dOdW1iZXJzRWwuY2hlY2tlZCA9IHRydWU7XG4gICAgICBzZXR0aW5nc0FsbG93VXBwZXJjYXNlRWwuY2hlY2tlZCA9IHRydWU7XG4gICAgICBzZXR0aW5nc0FsbG93TG93ZXJjYXNlRWwuY2hlY2tlZCA9IHRydWU7XG4gICAgICBzZXR0aW5nc0FsbG93U3ltYm9sc0VsLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHVwZGF0ZUF2YWlsYWJsZUNoYXJzKCk7XG59XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZVBhc3N3b3JkTGV2ZWwoKSB7XG4gIGNvbnNvbGUubG9nKCdjYWxjdWxhdGVQYXNzd29yZExldmVsJyk7XG4gIGxldCBwd2RMZXZlbCA9IDA7XG5cbiAgLy8gTWluaW11bSBQYXNzd29yZCBMZW5ndGhcbiAgY29uc3QgcHdkTGVuZ3RoID0gZ2V0UGFzc3dvcmRMZW5ndGgoc2V0dGluZ3NQYXNzd29yZExlbmd0aFJhbmdlRWwpO1xuICBpZiAocHdkTGVuZ3RoIDwgNCkge1xuICAgIHB3ZExldmVsID0gLTQ7XG4gIH0gZWxzZSBpZiAocHdkTGVuZ3RoIDwgOCkge1xuICAgIHB3ZExldmVsICs9IDE7XG4gIH0gZWxzZSBpZiAocHdkTGVuZ3RoIDwgMTIpIHtcbiAgICBwd2RMZXZlbCArPSAyO1xuICB9IGVsc2UgaWYgKHB3ZExlbmd0aCA8IDE2KSB7XG4gICAgcHdkTGV2ZWwgKz0gMztcbiAgfSBlbHNlIHtcbiAgICBwd2RMZXZlbCArPSA0O1xuICB9XG5cbiAgLy8gQ2hhcmFjdGVyIFR5cGUgQ29tcGxleGl0eVxuICBpZiAoXG4gICAgc2V0dGluZ3NBbGxvd0xvd2VyY2FzZUVsLmNoZWNrZWQgJiZcbiAgICAhc2V0dGluZ3NBbGxvd051bWJlcnNFbC5jaGVja2VkICYmXG4gICAgIXNldHRpbmdzQWxsb3dVcHBlcmNhc2VFbC5jaGVja2VkICYmXG4gICAgIXNldHRpbmdzQWxsb3dTeW1ib2xzRWwuY2hlY2tlZFxuICApIHtcbiAgICBwd2RMZXZlbCArPSAxO1xuICB9IGVsc2UgaWYgKFxuICAgIHNldHRpbmdzQWxsb3dMb3dlcmNhc2VFbC5jaGVja2VkICYmXG4gICAgc2V0dGluZ3NBbGxvd051bWJlcnNFbC5jaGVja2VkICYmXG4gICAgIXNldHRpbmdzQWxsb3dVcHBlcmNhc2VFbC5jaGVja2VkICYmXG4gICAgIXNldHRpbmdzQWxsb3dTeW1ib2xzRWwuY2hlY2tlZFxuICApIHtcbiAgICBwd2RMZXZlbCArPSAyO1xuICB9IGVsc2UgaWYgKFxuICAgIHNldHRpbmdzQWxsb3dMb3dlcmNhc2VFbC5jaGVja2VkICYmXG4gICAgc2V0dGluZ3NBbGxvd051bWJlcnNFbC5jaGVja2VkICYmXG4gICAgc2V0dGluZ3NBbGxvd1VwcGVyY2FzZUVsLmNoZWNrZWQgJiZcbiAgICAhc2V0dGluZ3NBbGxvd1N5bWJvbHNFbC5jaGVja2VkXG4gICkge1xuICAgIHB3ZExldmVsICs9IDM7XG4gIH0gZWxzZSB7XG4gICAgcHdkTGV2ZWwgKz0gNDtcbiAgfVxuXG4gIHB3ZEdlbmVyYXRlZFN0cmVuZ3RoRWwuY2xhc3NMaXN0LnJlbW92ZSgnaXMtZGFuZ2VyJywgJ2lzLXdhcm5pbmcnLCAnaXMtaW5mbycsICdpcy1zdWNjZXNzJyk7XG5cbiAgaWYgKHB3ZExldmVsIDwgMykge1xuICAgIHB3ZEdlbmVyYXRlZFN0cmVuZ3RoRWwuY2xhc3NMaXN0LmFkZCgnaXMtZGFuZ2VyJyk7XG4gIH0gZWxzZSBpZiAocHdkTGV2ZWwgPCA2KSB7XG4gICAgcHdkR2VuZXJhdGVkU3RyZW5ndGhFbC5jbGFzc0xpc3QuYWRkKCdpcy13YXJuaW5nJyk7XG4gIH0gZWxzZSBpZiAocHdkTGV2ZWwgPCA4KSB7XG4gICAgcHdkR2VuZXJhdGVkU3RyZW5ndGhFbC5jbGFzc0xpc3QuYWRkKCdpcy1pbmZvJyk7XG4gIH0gZWxzZSB7XG4gICAgcHdkR2VuZXJhdGVkU3RyZW5ndGhFbC5jbGFzc0xpc3QuYWRkKCdpcy1zdWNjZXNzJyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gYmluZEV2ZW50cygpIHtcbiAgc2V0dGluZ3NQYXNzd29yZExlbmd0aFJhbmdlRWwuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XG4gICAgc2V0dGluZ3NQYXNzd29yZExlbmd0aEVsLnZhbHVlID0gc2V0dGluZ3NQYXNzd29yZExlbmd0aFJhbmdlRWwudmFsdWU7XG4gIH0pO1xuICBzZXR0aW5nc1Bhc3N3b3JkTGVuZ3RoRWwuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgIGlmIChzZXR0aW5nc1Bhc3N3b3JkTGVuZ3RoRWwudmFsdWUgPCA0KSB7XG4gICAgICBzZXR0aW5nc1Bhc3N3b3JkTGVuZ3RoRWwudmFsdWUgPSA0O1xuICAgIH1cbiAgICBpZiAoc2V0dGluZ3NQYXNzd29yZExlbmd0aEVsLnZhbHVlID4gNTYpIHtcbiAgICAgIHNldHRpbmdzUGFzc3dvcmRMZW5ndGhFbC52YWx1ZSA9IDU2O1xuICAgIH1cbiAgICBzZXR0aW5nc1Bhc3N3b3JkTGVuZ3RoUmFuZ2VFbC52YWx1ZSA9IHNldHRpbmdzUGFzc3dvcmRMZW5ndGhFbC52YWx1ZTtcbiAgfSk7XG5cbiAgbm90aWZpY2F0aW9uRGVsZXRlQnRuRWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgbm90aWZpY2F0aW9uRWwuY2xhc3NMaXN0LmFkZCgnaXMtaW52aXNpYmxlJyk7XG4gIH0pO1xuXG4gIGFjdGlvblJlZG9FbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBwd2RHZW5lcmF0ZWRFbC5pbm5lckhUTUwgPSBjcmVhdGVQYXNzd29yZCgpO1xuICAgIGNhbGN1bGF0ZVBhc3N3b3JkTGV2ZWwoKTtcbiAgfSk7XG5cbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FjdGlvbi1jb3B5LXRvLWNsaXBib2FyZCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY29weVRvQ2xpcGJvYXJkKTtcblxuICBmb3IgKGxldCBlbCBvZiBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzZXR0aW5nLWVsZW1lbnQnKSkge1xuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHVwZGF0ZUF2YWlsYWJsZUNoYXJzKTtcbiAgfVxuXG4gIGZvciAobGV0IGVsIG9mIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3NldHRpbmctcHdkLW1vZGUnKSkge1xuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHVwZGF0ZVNldHRpbmdzKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpbml0KCkge1xuICBjb25zb2xlLmxvZygnaW5pdCcpO1xuXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZXR0aW5ncy1hbGxvdy1zeW1ib2xzLWxpc3QnKS5pbm5lckhUTUwgPSBBcnJheS5mcm9tKFNQRUNJQUxfQ0hBUkFDVEVSUykubWFwKChlbCkgPT5cbiAgICBTdHJpbmcuZnJvbUNoYXJDb2RlKGVsKVxuICApO1xuXG4gIC8vIFNob3cgY29udGVudCBvbmx5IHdoZW4gcGFnZSBpcyBsb2FkZWRcbiAgZG9jdW1lbnQuYm9keS5zdHlsZSA9ICdkaXNwbGF5OiBhdXRvJztcblxuICAvLyBiaW5kaW5nXG5cbiAgYmluZEV2ZW50cygpO1xuXG4gIHVwZGF0ZUF2YWlsYWJsZUNoYXJzKCk7XG4gIHB3ZEdlbmVyYXRlZEVsLmlubmVySFRNTCA9IGNyZWF0ZVBhc3N3b3JkKCk7XG4gIGNhbGN1bGF0ZVBhc3N3b3JkTGV2ZWwoKTtcbn1cblxud2luZG93Lm9ubG9hZCA9IGluaXQ7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=