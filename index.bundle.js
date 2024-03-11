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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHOztBQUVIOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtEQUFrRCxpQkFBaUIsa0JBQWtCO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hbm90aGVyLXBhc3N3b3JkLWdlbmVyYXRvci8uL3NyYy9zdHlsZXMvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly9hbm90aGVyLXBhc3N3b3JkLWdlbmVyYXRvci8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYW5vdGhlci1wYXNzd29yZC1nZW5lcmF0b3IvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9hbm90aGVyLXBhc3N3b3JkLWdlbmVyYXRvci8uL3NyYy9zdHlsZXMvc3R5bGUuc2Nzcz9lNWQ4Iiwid2VicGFjazovL2Fub3RoZXItcGFzc3dvcmQtZ2VuZXJhdG9yLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2Fub3RoZXItcGFzc3dvcmQtZ2VuZXJhdG9yLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9hbm90aGVyLXBhc3N3b3JkLWdlbmVyYXRvci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9hbm90aGVyLXBhc3N3b3JkLWdlbmVyYXRvci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9hbm90aGVyLXBhc3N3b3JkLWdlbmVyYXRvci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2Fub3RoZXItcGFzc3dvcmQtZ2VuZXJhdG9yLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYW5vdGhlci1wYXNzd29yZC1nZW5lcmF0b3IvLi9zcmMvc2NyaXB0cy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU9wZW4rU2FuczppdGFsLHdnaHRAMCwzMDAuLjgwMDsxLDMwMC4uODAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOjpzZWxlY3Rpb24ge1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYmFja2dyb3VuZDogI2E4OWQ5MTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG5odG1sLFxuYm9keSB7XG4gIGNvbG9yOiAjNDQ0O1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LW9wdGljYWwtc2l6aW5nOiBhdXRvO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XG4gIHNjcm9sbC1zbmFwLXR5cGU6IHkgbWFuZGF0b3J5O1xufVxuXG4udGl0bGUsXG4uc3VidGl0bGUge1xuICBmb250LWZhbWlseTogXCJLb2RlIE1vbm9cIiwgbW9ub3NwYWNlO1xuICBjb2xvcjogaW5oZXJpdDtcbn1cblxuLnNlY3Rpb24ge1xuICBwYWRkaW5nOiAycmVtIDJyZW07XG59XG5cbi5pcy1mdWxsaGVpZ2h0IHtcbiAgbWluLWhlaWdodDogMTAwdmg7XG59XG5cbi5pcy1mdWxsd2lkdGgge1xuICBtaW4td2lkdGg6IDEwMCU7XG59XG5cbi5ub3RpZmljYXRpb24ge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmU2NDU7XG4gIG9wYWNpdHk6IDE7XG4gIHotaW5kZXg6IDEwMDtcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggIzQ0NDtcbiAgdHJhbnNpdGlvbjogdmlzaWJpbGl0eSAwcywgb3BhY2l0eSAwLjNzIGxpbmVhcjtcbn1cbi5ub3RpZmljYXRpb24uaXMtaW52aXNpYmxlIHtcbiAgb3BhY2l0eTogMDtcbn1cblxuI3B3ZC1zdHJlbmd0aCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwcHg7XG4gIGxlZnQ6IDBweDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMHB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMHB4O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA2cHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA2cHg7XG4gIGhlaWdodDogMC41cmVtO1xufVxuXG4ucHdkLWNvbnRhaW5lciB7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4ucHdkLWNvbnRhaW5lciAuYWN0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4ucHdkLWNvbnRhaW5lciAuYWN0aW9ucyAuYWN0aW9uIHtcbiAgcGFkZGluZzogMCAxcmVtO1xuICBjb2xvcjogIzQ4NWZjNztcbn1cbi5wd2QtY29udGFpbmVyIC5hY3Rpb25zIC5hY3Rpb246aG92ZXIge1xuICBjb2xvcjogIzQ0NDtcbiAgdGV4dC1zaGFkb3c6IDAgMCA1cHggI2E4OWQ5MTtcbn1cbi5wd2QtY29udGFpbmVyIDo6c2VsZWN0aW9uIHtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGJhY2tncm91bmQ6ICNhODlkOTE7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuI3NldHRpbmdzLXBhc3N3b3JkLWxlbmd0aCB7XG4gIHdpZHRoOiA2NHB4O1xufVxuXG4jc2V0dGluZ3MtcGFzc3dvcmQtbGVuZ3RoLXJhbmdlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5zZXR0aW5ncy1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTg5ZDkxO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm9yZGVyOiAycHggc29saWQgIzQ4NWZjNztcbiAgcGFkZGluZzogMXJlbTtcbn1cbi5zZXR0aW5ncy1jb250YWluZXIgOjpzZWxlY3Rpb24ge1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYmFja2dyb3VuZDogIzQ4NWZjNztcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuLnNldHRpbmdzLWNvbnRhaW5lciAuY2hlY2tib3g6aG92ZXIsXG4uc2V0dGluZ3MtY29udGFpbmVyIC5yYWRpbzpob3ZlciB7XG4gIGNvbG9yOiAjNDQ0O1xufVxuXG4uZm9vdGVyIHtcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICMyNDU0OTQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3Y2E3ZGY7XG59XG5cbi5pcy1vd2VyZmxvdy1hdXRvIHtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbmlucHV0ICsgc3Bhbi50b2dnbGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgaGVpZ2h0OiAyNHB4O1xuICB3aWR0aDogNDBweDtcbiAgbWFyZ2luLWJvdHRvbTogLTZweDtcbiAgbWFyZ2luLWxlZnQ6IC0yNHB4O1xuICBiYWNrZ3JvdW5kOiAjZWVlO1xuICBib3JkZXItcmFkaXVzOiAxMDB2aDtcbiAgY29sb3I6IHJnYigwLCAzNywgMjU1KTtcbn1cbmlucHV0ICsgc3Bhbi50b2dnbGU6YmVmb3JlIHtcbiAgY29udGVudDogXCIgXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA0cHg7XG4gIGxlZnQ6IDRweDtcbiAgcmlnaHQ6IGF1dG87XG4gIGhlaWdodDogMTZweDtcbiAgd2lkdGg6IDE2cHg7XG4gIGJhY2tncm91bmQ6ICNiYmI7XG4gIGJvcmRlci1yYWRpdXM6IDEwMHZoO1xuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcbn1cbmlucHV0OmNoZWNrZWQgKyBzcGFuLnRvZ2dsZTpiZWZvcmUge1xuICBsZWZ0OiAyMHB4O1xuICBiYWNrZ3JvdW5kOiAjNDg1ZmM3O1xuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc3R5bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFTQTtFQUNDLGNBTmlCO0VBT2pCLG1CQVRnQjtFQVVoQixrQkFBQTtBQVBEOztBQVVBOztFQUVDLFdBWFc7RUFZWCxTQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0NBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EseUJBdkJpQjtFQXdCakIsdUJBQUE7RUFDQSw2QkFBQTtBQVBEOztBQVVBOztFQUVDLG1DQUFBO0VBQ0EsY0FBQTtBQVBEOztBQVVBO0VBQ0Msa0JBQUE7QUFQRDs7QUFVQTtFQUNDLGlCQUFBO0FBUEQ7O0FBVUE7RUFDQyxlQUFBO0FBUEQ7O0FBVUE7RUFDQyxlQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFFQSw4Q0FDQztBQVRGO0FBWUM7RUFDQyxVQUFBO0FBVkY7O0FBY0E7RUFDQyxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLDhCQUFBO0VBQ0EsK0JBQUE7RUFDQSxjQUFBO0FBWEQ7O0FBa0RBO0VBQ0MsZUFBQTtFQUVBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsOEJBQUE7QUFoREQ7QUFrREM7RUFDQyxhQUFBO0FBaERGO0FBa0RFO0VBQ0MsZUFBQTtFQUNBLGNBN0hZO0FBNkVmO0FBa0RHO0VBRUMsV0E5SFE7RUErSFIsNEJBQUE7QUFqREo7QUFzREM7RUFDQyxjQXZJZ0I7RUF3SWhCLG1CQTFJZTtFQTJJZixrQkFBQTtBQXBERjs7QUF3REE7RUFDQyxXQUFBO0FBckREOztBQXVEQTtFQUNDLFdBQUE7QUFwREQ7O0FBdURBO0VBQ0MseUJBdkpnQjtFQXdKaEIsY0F0SmlCO0VBdUpqQixtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtBQXBERDtBQXVEQztFQUNDLGNBN0pnQjtFQThKaEIsbUJBL0phO0VBZ0tiLGtCQUFBO0FBckRGO0FBd0RDOztFQUVDLFdBbEtVO0FBNEdaOztBQTJEQTtFQUNDLDZCQUFBO0VBQ0EseUJBQUE7QUF4REQ7O0FBMkRBO0VBQ0MsY0FBQTtBQXhERDs7QUE0REM7RUFDQyxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLHNCQUFBO0FBekRGO0FBMERFO0VBQ0MsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0NBQUE7QUF4REg7QUEyREM7RUFDQyxVQUFBO0VBQ0EsbUJBN01hO0VBOE1iLGdDQUFBO0FBekRGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU9wZW4rU2FuczppdGFsLHdnaHRAMCwzMDAuLjgwMDsxLDMwMC4uODAwJmRpc3BsYXk9c3dhcFxcXCIpO1xcblxcbiRzZWNvbmRhcnlDb2xvcjogI2E4OWQ5MTtcXG4kcHJpbWFyeUNvbG9yOiAjNDg1ZmM3O1xcbiRiYWNrZ3JvdW5kQ29sb3I6ICNmZmZmZmY7XFxuXFxuJHRleHRDb2xvcjogIzQ0NDtcXG4kbGlua0NvbG9yOiAkcHJpbWFyeUNvbG9yO1xcblxcbjo6c2VsZWN0aW9uIHtcXG5cXHRjb2xvcjogJGJhY2tncm91bmRDb2xvcjtcXG5cXHRiYWNrZ3JvdW5kOiAkc2Vjb25kYXJ5Q29sb3I7XFxuXFx0Ym9yZGVyLXJhZGl1czogNHB4O1xcbn1cXG5cXG5odG1sLFxcbmJvZHkge1xcblxcdGNvbG9yOiAkdGV4dENvbG9yO1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGhlaWdodDogMTAwJTtcXG5cXHRmb250LWZhbWlseTogXFxcIk9wZW4gU2Fuc1xcXCIsIHNhbnMtc2VyaWY7XFxuXFx0Zm9udC1vcHRpY2FsLXNpemluZzogYXV0bztcXG5cXHRmb250LXdlaWdodDogNDAwO1xcblxcdGZvbnQtc3R5bGU6IG5vcm1hbDtcXG5cXHRmb250LXNpemU6IDE2cHg7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmRDb2xvcjtcXG5cXHRzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcXG5cXHRzY3JvbGwtc25hcC10eXBlOiB5IG1hbmRhdG9yeTtcXG59XFxuXFxuLnRpdGxlLFxcbi5zdWJ0aXRsZSB7XFxuXFx0Zm9udC1mYW1pbHk6IFxcXCJLb2RlIE1vbm9cXFwiLCBtb25vc3BhY2U7XFxuXFx0Y29sb3I6IGluaGVyaXQ7XFxufVxcblxcbi5zZWN0aW9uIHtcXG5cXHRwYWRkaW5nOiAycmVtIDJyZW07XFxufVxcblxcbi5pcy1mdWxsaGVpZ2h0IHtcXG5cXHRtaW4taGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuLmlzLWZ1bGx3aWR0aCB7XFxuXFx0bWluLXdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ubm90aWZpY2F0aW9uIHtcXG5cXHRwb3NpdGlvbjogZml4ZWQ7XFxuXFx0dG9wOiAwO1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGJhY2tncm91bmQtY29sb3I6ICNmZmU2NDU7XFxuXFx0b3BhY2l0eTogMTtcXG5cXHR6LWluZGV4OiAxMDA7XFxuXFx0Ym94LXNoYWRvdzogMCAwIDEwcHggJHRleHRDb2xvcjtcXG5cXG5cXHR0cmFuc2l0aW9uOlxcblxcdFxcdHZpc2liaWxpdHkgMHMsXFxuXFx0XFx0b3BhY2l0eSAwLjNzIGxpbmVhcjtcXG5cXG5cXHQmLmlzLWludmlzaWJsZSB7XFxuXFx0XFx0b3BhY2l0eTogMDtcXG5cXHR9XFxufVxcblxcbiNwd2Qtc3RyZW5ndGgge1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHRib3R0b206IDBweDtcXG5cXHRsZWZ0OiAwcHg7XFxuXFx0Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMHB4O1xcblxcdGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwcHg7XFxuXFx0Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNnB4O1xcblxcdGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA2cHg7XFxuXFx0aGVpZ2h0OiAwLjVyZW07XFxuXFxuXFx0Ly8gJi5pcy1kYW5nZXIge1xcblxcdC8vIFxcdCY6Oi13ZWJraXQtcHJvZ3Jlc3MtdmFsdWUge1xcblxcdC8vIFxcdFxcdGJhY2tncm91bmQtY29sb3I6IGdyZWVueWVsbG93O1xcblxcdC8vIFxcdH1cXG5cXHQvLyBcXHQmOjotbW96LXByb2dyZXNzLWJhciB7XFxuXFx0Ly8gXFx0XFx0YmFja2dyb3VuZC1jb2xvcjogZ3JlZW55ZWxsb3c7XFxuXFx0Ly8gXFx0fVxcblxcdC8vIFxcdCY6Oi1tcy1maWxsIHtcXG5cXHQvLyBcXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbnllbGxvdztcXG5cXHQvLyBcXHR9XFxuXFx0Ly8gfVxcblxcblxcdC8vICYuaXMtd2FybmluZyB7XFxuXFx0Ly8gXFx0Jjo6LXdlYmtpdC1wcm9ncmVzcy12YWx1ZSB7XFxuXFx0Ly8gXFx0XFx0YmFja2dyb3VuZC1jb2xvcjogZ3JlZW55ZWxsb3c7XFxuXFx0Ly8gXFx0fVxcblxcdC8vIFxcdCY6Oi1tb3otcHJvZ3Jlc3MtYmFyIHtcXG5cXHQvLyBcXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbnllbGxvdztcXG5cXHQvLyBcXHR9XFxuXFx0Ly8gXFx0Jjo6LW1zLWZpbGwge1xcblxcdC8vIFxcdFxcdGJhY2tncm91bmQtY29sb3I6IGdyZWVueWVsbG93O1xcblxcdC8vIFxcdH1cXG5cXHQvLyB9XFxuXFxuXFx0Ly8gJi5pcy1zdWNjZXNzIHtcXG5cXHQvLyBcXHQmOjotd2Via2l0LXByb2dyZXNzLXZhbHVlIHtcXG5cXHQvLyBcXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbnllbGxvdztcXG5cXHQvLyBcXHR9XFxuXFx0Ly8gXFx0Jjo6LW1vei1wcm9ncmVzcy1iYXIge1xcblxcdC8vIFxcdFxcdGJhY2tncm91bmQtY29sb3I6IGdyZWVueWVsbG93O1xcblxcdC8vIFxcdH1cXG5cXHQvLyBcXHQmOjotbXMtZmlsbCB7XFxuXFx0Ly8gXFx0XFx0YmFja2dyb3VuZC1jb2xvcjogZ3JlZW55ZWxsb3c7XFxuXFx0Ly8gXFx0fVxcblxcdC8vIH1cXG59XFxuXFxuLnB3ZC1jb250YWluZXIge1xcblxcdGZvbnQtc2l6ZTogMnJlbTtcXG5cXHQvLyBib3JkZXItYm90dG9tOiA1cHggc29saWQgZ3JlZW47XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogcm93O1xcblxcdGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFxuXFx0LmFjdGlvbnMge1xcblxcdFxcdGRpc3BsYXk6IGZsZXg7XFxuXFxuXFx0XFx0LmFjdGlvbiB7XFxuXFx0XFx0XFx0cGFkZGluZzogMCAxcmVtO1xcblxcdFxcdFxcdGNvbG9yOiAkbGlua0NvbG9yO1xcblxcblxcdFxcdFxcdCY6aG92ZXIge1xcblxcdFxcdFxcdFxcdC8vIGNvbG9yOiBsaWdodGVuKCRjb2xvcjogJHNlY29uZGFyeUNvbG9yLCAkYW1vdW50OiAyMCk7XFxuXFx0XFx0XFx0XFx0Y29sb3I6ICR0ZXh0Q29sb3I7XFxuXFx0XFx0XFx0XFx0dGV4dC1zaGFkb3c6IDAgMCA1cHggJHNlY29uZGFyeUNvbG9yO1xcblxcdFxcdFxcdH1cXG5cXHRcXHR9XFxuXFx0fVxcblxcblxcdDo6c2VsZWN0aW9uIHtcXG5cXHRcXHRjb2xvcjogJGJhY2tncm91bmRDb2xvcjtcXG5cXHRcXHRiYWNrZ3JvdW5kOiAkc2Vjb25kYXJ5Q29sb3I7XFxuXFx0XFx0Ym9yZGVyLXJhZGl1czogNHB4O1xcblxcdH1cXG59XFxuXFxuI3NldHRpbmdzLXBhc3N3b3JkLWxlbmd0aCB7XFxuXFx0d2lkdGg6IDY0cHg7XFxufVxcbiNzZXR0aW5ncy1wYXNzd29yZC1sZW5ndGgtcmFuZ2Uge1xcblxcdHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uc2V0dGluZ3MtY29udGFpbmVyIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kYXJ5Q29sb3I7XFxuXFx0Y29sb3I6ICRiYWNrZ3JvdW5kQ29sb3I7XFxuXFx0Ym9yZGVyLXJhZGl1czogMTBweDtcXG5cXHRib3JkZXI6IDJweCBzb2xpZCAkcHJpbWFyeUNvbG9yO1xcblxcdHBhZGRpbmc6IDFyZW07XFxuXFx0Ly8gYm94LXNoYWRvdzogMCAycHggMTBweCAkcHJpbWFyeUNvbG9yO1xcblxcblxcdDo6c2VsZWN0aW9uIHtcXG5cXHRcXHRjb2xvcjogJGJhY2tncm91bmRDb2xvcjtcXG5cXHRcXHRiYWNrZ3JvdW5kOiAkcHJpbWFyeUNvbG9yO1xcblxcdFxcdGJvcmRlci1yYWRpdXM6IDRweDtcXG5cXHR9XFxuXFxuXFx0LmNoZWNrYm94OmhvdmVyLFxcblxcdC5yYWRpbzpob3ZlciB7XFxuXFx0XFx0Y29sb3I6ICR0ZXh0Q29sb3I7XFxuXFx0XFx0Ly8gdGV4dC1zaGFkb3c6IDAgMCA1cHggJGJhY2tncm91bmRDb2xvcjtcXG5cXHR9XFxufVxcblxcbi5mb290ZXIge1xcblxcdGJvcmRlci10b3A6IDJweCBzb2xpZCAjMjQ1NDk0O1xcblxcdGJhY2tncm91bmQtY29sb3I6ICM3Y2E3ZGY7XFxufVxcblxcbi5pcy1vd2VyZmxvdy1hdXRvIHtcXG5cXHRvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuaW5wdXQge1xcblxcdCsgc3Bhbi50b2dnbGUge1xcblxcdFxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHRcXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuXFx0XFx0aGVpZ2h0OiAyNHB4O1xcblxcdFxcdHdpZHRoOiA0MHB4O1xcblxcdFxcdG1hcmdpbi1ib3R0b206IC02cHg7XFxuXFx0XFx0bWFyZ2luLWxlZnQ6IC0yNHB4O1xcblxcdFxcdGJhY2tncm91bmQ6ICNlZWU7XFxuXFx0XFx0Ym9yZGVyLXJhZGl1czogMTAwdmg7XFxuXFx0XFx0Y29sb3I6IHJnYmEoMCwgMzcsIDI1NSwgMSk7XFxuXFx0XFx0JjpiZWZvcmUge1xcblxcdFxcdFxcdGNvbnRlbnQ6IFxcXCIgXFxcIjtcXG5cXHRcXHRcXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0XFx0XFx0dG9wOiA0cHg7XFxuXFx0XFx0XFx0bGVmdDogNHB4O1xcblxcdFxcdFxcdHJpZ2h0OiBhdXRvO1xcblxcdFxcdFxcdGhlaWdodDogMTZweDtcXG5cXHRcXHRcXHR3aWR0aDogMTZweDtcXG5cXHRcXHRcXHRiYWNrZ3JvdW5kOiAjYmJiO1xcblxcdFxcdFxcdGJvcmRlci1yYWRpdXM6IDEwMHZoO1xcblxcdFxcdFxcdHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xcblxcdFxcdH1cXG5cXHR9XFxuXFx0JjpjaGVja2VkICsgc3Bhbi50b2dnbGU6YmVmb3JlIHtcXG5cXHRcXHRsZWZ0OiAyMHB4O1xcblxcdFxcdGJhY2tncm91bmQ6ICRwcmltYXJ5Q29sb3I7XFxuXFx0XFx0dHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XFxuXFx0fVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIGxvYWQgc3R5bGVzXG5pbXBvcnQgJy4uL3N0eWxlcy9zdHlsZS5zY3NzJztcblxuLy8gbG9hZCBzaXRlbWFwICYgcm9ib3RzXG5jb25zdCBzaXRlbWFwID0gcmVxdWlyZSgnLi4vLi4vc2l0ZW1hcC54bWwnKTtcbmNvbnN0IHJvYm90cyA9IHJlcXVpcmUoJy4uLy4uL3JvYm90cy50eHQnKTtcblxuLy8gbG9hZCBpbWFnZXNcbmltcG9ydCBmYXZpY29uSWNvIGZyb20gJy4uL2ltYWdlcy9mYXZpY29uLmljbyc7XG5pbXBvcnQgZmF2aWNvbkltYWdlIGZyb20gJy4uL2ltYWdlcy9mYXZpY29uLnBuZyc7XG5pbXBvcnQgc2hhcmVJbWFnZSBmcm9tICcuLi9pbWFnZXMvc2hhcmUucG5nJztcblxuY2xhc3MgUGFzc3dvcmQge1xuICAjZXhjbHVkZUR1cGxpY2F0ZXM7XG4gICNjaGFycztcbiAgI2xlbmd0aCA9IDA7XG4gIGNvbnN0cnVjdG9yKGV4Y2x1ZGVEdXBsaWNhdGVzKSB7XG4gICAgdGhpcy4jZXhjbHVkZUR1cGxpY2F0ZXMgPSBleGNsdWRlRHVwbGljYXRlcztcbiAgICB0aGlzLiNjaGFycyA9IHRoaXMuI2V4Y2x1ZGVEdXBsaWNhdGVzID8gbmV3IFNldCgpIDogW107XG4gIH1cblxuICBhZGRDaGFyKGNoYXIpIHtcbiAgICBpZiAodGhpcy4jZXhjbHVkZUR1cGxpY2F0ZXMpIHtcbiAgICAgIHRoaXMuI2NoYXJzLmFkZChjaGFyKTtcbiAgICAgIHRoaXMuI2xlbmd0aCA9IHRoaXMuI2NoYXJzLnNpemU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuI2NoYXJzLnB1c2goY2hhcik7XG4gICAgICB0aGlzLiNsZW5ndGgrKztcbiAgICB9XG4gIH1cblxuICBnZXQgbGVuZ3RoKCkge1xuICAgIHJldHVybiB0aGlzLiNsZW5ndGg7XG4gIH1cblxuICB0b1N0cmluZygpIHtcbiAgICBpZiAodGhpcy4jZXhjbHVkZUR1cGxpY2F0ZXMpIHtcbiAgICAgIHJldHVybiBBcnJheS5mcm9tKHRoaXMuI2NoYXJzKS5qb2luKCcnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMuI2NoYXJzLmpvaW4oJycpO1xuICAgIH1cbiAgfVxuXG4gIGNsZWFyKCkge1xuICAgIGlmICh0aGlzLiNleGNsdWRlRHVwbGljYXRlcykge1xuICAgICAgdGhpcy4jY2hhcnMuY2xlYXIoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gdGhpcy4jY2hhcnMuZmlsbCgwKTtcbiAgICAgIHRoaXMuI2NoYXJzLmxlbmd0aCA9IDA7XG4gICAgfVxuICAgIHRoaXMuI2xlbmd0aCA9IDA7XG4gIH1cbn1cblxuY29uc3QgTlVNQkVSUyA9IG5ldyBVaW50OEFycmF5KFs0OCwgNDksIDUwLCA1MSwgNTIsIDUzLCA1NCwgNTUsIDU2LCA1N10pO1xuY29uc3QgTE9XRVJDQVNFID0gbmV3IFVpbnQ4QXJyYXkoW1xuICA5NywgOTgsIDk5LCAxMDAsIDEwMSwgMTAyLCAxMDMsIDEwNCwgMTA1LCAxMDYsIDEwNywgMTA4LCAxMDksIDExMCwgMTExLCAxMTIsIDExMywgMTE0LCAxMTUsIDExNiwgMTE3LCAxMTgsIDExOSwgMTIwLFxuICAxMjEsIDEyMixcbl0pO1xuY29uc3QgVVBQRVJDQVNFID0gbmV3IFVpbnQ4QXJyYXkoW1xuICA2NSwgNjYsIDY3LCA2OCwgNjksIDcwLCA3MSwgNzIsIDczLCA3NCwgNzUsIDc2LCA3NywgNzgsIDc5LCA4MCwgODEsIDgyLCA4MywgODQsIDg1LCA4NiwgODcsIDg4LCA4OSwgOTAsXG5dKTtcbmNvbnN0IFNQRUNJQUxfQ0hBUkFDVEVSUyA9IG5ldyBVaW50OEFycmF5KFszMywgMzUsIDM2LCAzNywgMzgsIDQwLCA0MSwgNDIsIDQzLCA2NCwgOTRdKTtcbmNvbnN0IFNJTUlMQVJfQ0hBUlMgPSB7XG4gIDA6IFs0OCwgNzksIDExMSwgNzMsIDEwNV0sIC8vIDAsIE8sIGwsIElcbiAgMTogWzQ5LCA3NiwgMTA4XSwgLy8gMSwgbCwgSVxuICA1OiBbNTMsIDgzLCAxMTUsIDU2LCA4OF0sIC8vIDUsIFMsIHMsIDgsIEJcbiAgNjogWzU0LCA2NiwgOThdLCAvLyA2LCBiLCBCXG4gIDg6IFs1NiwgNjYsIDk4XSwgLy8gOCwgQiwgYlxuICA5OiBbNTcsIDcxLCAxMDMsIDU0LCA2Nl0sIC8vIDksIGcsIEcsIDYsIGJcbiAgYTogWzk3LCA2NCwgNjVdLCAvLyBhLCBALCBBXG4gIGU6IFsxMDEsIDY3LCA5OV0sIC8vIGUsIGMsIENcbiAgZzogWzEwMywgODEsIDExMywgNTddLCAvLyBnLCBxLCBRLCA5XG4gIGw6IFsxMDgsIDQ5LCA3MywgMTA1XSwgLy8gbCwgMSwgSSwgaVxuICBvOiBbMTExLCA0OCwgNzksIDk3LCA2NV0sIC8vIG8sIDAsIE8sIGEsIEFcbiAgczogWzExNSwgNTMsIDgzXSwgLy8gcywgNSwgU1xuICB0OiBbMTE2LCA1NSwgODRdLCAvLyB0LCA3LCBUXG4gIHo6IFsxMjIsIDUwXSwgLy8geiwgMlxufTtcblxubGV0IGF2YWlsYWJsZUNoYXJzID0gW107XG5cbmNvbnN0IHB3ZEdlbmVyYXRlZEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3B3ZC1nZW5lcmF0ZWQnKTtcbmNvbnN0IG5vdGlmaWNhdGlvbkVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25vdGlmaWNhdGlvbicpO1xuY29uc3QgYWN0aW9uUmVkb0VsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FjdGlvbi1yZWRvJyk7XG5jb25zdCBub3RpZmljYXRpb25EZWxldGVCdG5FbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ub3RpZmljYXRpb24gYnV0dG9uLmRlbGV0ZScpO1xuY29uc3Qgc2V0dGluZ3NQYXNzd29yZExlbmd0aFJhbmdlRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2V0dGluZ3MtcGFzc3dvcmQtbGVuZ3RoLXJhbmdlJyk7XG5jb25zdCBzZXR0aW5nc1Bhc3N3b3JkTGVuZ3RoRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2V0dGluZ3MtcGFzc3dvcmQtbGVuZ3RoJyk7XG5jb25zdCBwd2RHZW5lcmF0ZWRTdHJlbmd0aEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3B3ZC1zdHJlbmd0aCcpO1xuY29uc3Qgc2V0dGluZ3NBbGxvd051bWJlcnNFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZXR0aW5ncy1hbGxvdy1udW1iZXJzJyk7XG5jb25zdCBzZXR0aW5nc0FsbG93VXBwZXJjYXNlRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2V0dGluZ3MtYWxsb3ctdXBwZXJjYXNlJyk7XG5jb25zdCBzZXR0aW5nc0FsbG93TG93ZXJjYXNlRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2V0dGluZ3MtYWxsb3ctbG93ZXJjYXNlJyk7XG5jb25zdCBzZXR0aW5nc0FsbG93U3ltYm9sc0VsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NldHRpbmdzLWFsbG93LXN5bWJvbHMnKTtcbmNvbnN0IHNldHRpbmdzRXhjbHVkZUR1cGxpY2F0ZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NldHRpbmdzLWV4Y2x1ZGUtZHVwbGljYXRlLWNoYXJhY3RlcnMnKTtcbmNvbnN0IHNldHRpbmdzRXhjbHVkZVNpbWlsYXJFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZXR0aW5ncy1leGNsdWRlLXNpbWlsYXItY2hhcmFjdGVycycpO1xuXG5mdW5jdGlvbiBpc1NpbWlsYXJDaGFyRXhjbHVkZWQoY2hhcikge1xuICBjb25zdCBzaW1pbGFyR3JvdXAgPSBTSU1JTEFSX0NIQVJTW2NoYXJdO1xuICByZXR1cm4gISFzaW1pbGFyR3JvdXAgJiYgc2V0dGluZ3NFeGNsdWRlU2ltaWxhckVsLmNoZWNrZWQgJiYgYXZhaWxhYmxlQ2hhcnMuc29tZSgoZWwpID0+IHNpbWlsYXJHcm91cC5pbmNsdWRlcyhlbCkpO1xufVxuXG5mdW5jdGlvbiBnZXRQYXNzd29yZExlbmd0aChzZXR0aW5nc1Bhc3N3b3JkTGVuZ3RoKSB7XG4gIGNvbnN0IGxlbmd0aCA9IHNldHRpbmdzUGFzc3dvcmRMZW5ndGgudmFsdWU7XG4gIHRyeSB7XG4gICAgcmV0dXJuIHBhcnNlSW50KGxlbmd0aCB8fCBzZXR0aW5nc1Bhc3N3b3JkTGVuZ3RoLmdldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInKSk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjb25zb2xlLmxvZygnZXJyb3InLCBlKTtcbiAgfVxuICByZXR1cm4gMDtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVBdmFpbGFibGVDaGFyc0xlbmd0aCgpIHtcbiAgaWYgKGF2YWlsYWJsZUNoYXJzLmxlbmd0aCA9PT0gMCkge1xuICAgIGFjdGlvblJlZG9FbC5jbGFzc0xpc3QuYWRkKCdpcy1pbnZpc2libGUnKTtcbiAgICByZXR1cm47XG4gIH1cbiAgYWN0aW9uUmVkb0VsLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWludmlzaWJsZScpO1xufVxuXG4vLyBVcGRhdGUgYXZhaWxhYmxlQ2hhcnMgYmFzZWQgb24gc2V0dGluZ3MgZHVyaW5nIGluaXRpYWxpemF0aW9uXG5mdW5jdGlvbiB1cGRhdGVBdmFpbGFibGVDaGFycygpIHtcbiAgY29uc29sZS50aW1lKCd1cGRhdGVBdmFpbGFibGVDaGFycycpO1xuICBhdmFpbGFibGVDaGFycyA9IFtcbiAgICAuLi4oc2V0dGluZ3NBbGxvd051bWJlcnNFbC5jaGVja2VkID8gTlVNQkVSUyA6IFtdKSxcbiAgICAuLi4oc2V0dGluZ3NBbGxvd1VwcGVyY2FzZUVsLmNoZWNrZWQgPyBVUFBFUkNBU0UgOiBbXSksXG4gICAgLi4uKHNldHRpbmdzQWxsb3dMb3dlcmNhc2VFbC5jaGVja2VkID8gTE9XRVJDQVNFIDogW10pLFxuICAgIC4uLihzZXR0aW5nc0FsbG93U3ltYm9sc0VsLmNoZWNrZWQgPyBTUEVDSUFMX0NIQVJBQ1RFUlMgOiBbXSksXG4gIF07XG4gIHZhbGlkYXRlQXZhaWxhYmxlQ2hhcnNMZW5ndGgoKTtcbiAgY29uc29sZS50aW1lRW5kKCd1cGRhdGVBdmFpbGFibGVDaGFycycpO1xufVxuXG5mdW5jdGlvbiBzaG93Tm90aWZpY2F0aW9uKCkge1xuICBub3RpZmljYXRpb25FbC5jbGFzc0xpc3QucmVtb3ZlKCdpcy1pbnZpc2libGUnKTtcbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgbm90aWZpY2F0aW9uRWwuY2xhc3NMaXN0LmFkZCgnaXMtaW52aXNpYmxlJyk7XG4gIH0sIDMwMDApO1xufVxuXG5mdW5jdGlvbiBjb3B5VG9DbGlwYm9hcmQoKSB7XG4gIGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgZWwuc3R5bGUudmlzaWJpbGl0eSA9ICdub25lJztcbiAgZWwudmFsdWUgPSBwd2RHZW5lcmF0ZWRFbC5pbm5lclRleHQ7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZWwpO1xuICBlbC5zZWxlY3QoKTtcbiAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2NvcHknKTtcbiAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChlbCk7XG4gIHNob3dOb3RpZmljYXRpb24oKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlUGFzc3dvcmQoKSB7XG4gIGlmIChhdmFpbGFibGVDaGFycy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICBjb25zb2xlLnRpbWUoJ2NyZWF0ZVBhc3N3b3JkJyk7XG5cbiAgY29uc3QgcGFzc3dvcmRMZW5ndGggPSBnZXRQYXNzd29yZExlbmd0aChzZXR0aW5nc1Bhc3N3b3JkTGVuZ3RoUmFuZ2VFbCk7XG4gIGNvbnN0IGluZGV4ZXMgPSBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKG5ldyBVaW50MzJBcnJheShhdmFpbGFibGVDaGFycy5sZW5ndGgpKTtcbiAgY29uc3QgcGFzc3dvcmQgPSBuZXcgUGFzc3dvcmQoc2V0dGluZ3NFeGNsdWRlRHVwbGljYXRlRWwuY2hlY2tlZCk7XG5cbiAgY29uc3QgbWF4UGFzc3dvcmRMZW5ndGggPSBzZXR0aW5nc0V4Y2x1ZGVEdXBsaWNhdGVFbC5jaGVja2VkXG4gICAgPyBNYXRoLm1pbihwYXNzd29yZExlbmd0aCwgYXZhaWxhYmxlQ2hhcnMubGVuZ3RoKVxuICAgIDogcGFzc3dvcmRMZW5ndGg7XG5cbiAgbGV0IGxvb3AgPSAwO1xuICB3aGlsZSAocGFzc3dvcmQubGVuZ3RoIDwgbWF4UGFzc3dvcmRMZW5ndGgpIHtcbiAgICBjb25zdCBpbmRleCA9IGluZGV4ZXNbbG9vcCAlIGluZGV4ZXMubGVuZ3RoXSAlIGF2YWlsYWJsZUNoYXJzLmxlbmd0aDtcbiAgICBjb25zdCBjaGFyID0gU3RyaW5nLmZyb21DaGFyQ29kZShhdmFpbGFibGVDaGFyc1tpbmRleF0pO1xuXG4gICAgaWYgKCFpc1NpbWlsYXJDaGFyRXhjbHVkZWQoY2hhcikpIHtcbiAgICAgIHBhc3N3b3JkLmFkZENoYXIoY2hhcik7XG4gICAgfVxuICAgIGxvb3ArKztcbiAgfVxuXG4gIGNvbnN0IHBhc3N3b3JkQXNTdHJpbmcgPSBwYXNzd29yZC50b1N0cmluZygpO1xuXG4gIC8vIENsZWFyIHBhc3N3b3JkIGluIG1lbW9yeVxuICBwYXNzd29yZC5jbGVhcigpO1xuXG4gIGNvbnNvbGUudGltZUVuZCgnY3JlYXRlUGFzc3dvcmQnKTtcbiAgcmV0dXJuIHBhc3N3b3JkQXNTdHJpbmc7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVNldHRpbmdzKCkge1xuICBjb25zdCBwd2RNb2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cInB3ZC1tb2RlXCJdOmNoZWNrZWQnKS52YWx1ZTtcbiAgc3dpdGNoIChwd2RNb2RlKSB7XG4gICAgY2FzZSAnZWFzeS10by1yZWFkJzoge1xuICAgICAgc2V0dGluZ3NFeGNsdWRlU2ltaWxhckVsLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgc2V0dGluZ3NFeGNsdWRlRHVwbGljYXRlRWwuY2hlY2tlZCA9IGZhbHNlO1xuXG4gICAgICBzZXR0aW5nc0FsbG93TnVtYmVyc0VsLmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgIHNldHRpbmdzQWxsb3dVcHBlcmNhc2VFbC5jaGVja2VkID0gdHJ1ZTtcbiAgICAgIHNldHRpbmdzQWxsb3dMb3dlcmNhc2VFbC5jaGVja2VkID0gdHJ1ZTtcbiAgICAgIHNldHRpbmdzQWxsb3dTeW1ib2xzRWwuY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGNhc2UgJ2Vhc3ktdG8tc2F5Jzoge1xuICAgICAgc2V0dGluZ3NFeGNsdWRlU2ltaWxhckVsLmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgIHNldHRpbmdzRXhjbHVkZUR1cGxpY2F0ZUVsLmNoZWNrZWQgPSBmYWxzZTtcblxuICAgICAgc2V0dGluZ3NBbGxvd051bWJlcnNFbC5jaGVja2VkID0gZmFsc2U7XG4gICAgICBzZXR0aW5nc0FsbG93VXBwZXJjYXNlRWwuY2hlY2tlZCA9IHRydWU7XG4gICAgICBzZXR0aW5nc0FsbG93TG93ZXJjYXNlRWwuY2hlY2tlZCA9IHRydWU7XG4gICAgICBzZXR0aW5nc0FsbG93U3ltYm9sc0VsLmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBjYXNlICdhbGwtY2hhcmFjdGVycyc6XG4gICAgZGVmYXVsdDoge1xuICAgICAgc2V0dGluZ3NFeGNsdWRlU2ltaWxhckVsLmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgIHNldHRpbmdzRXhjbHVkZUR1cGxpY2F0ZUVsLmNoZWNrZWQgPSBmYWxzZTtcblxuICAgICAgc2V0dGluZ3NBbGxvd051bWJlcnNFbC5jaGVja2VkID0gdHJ1ZTtcbiAgICAgIHNldHRpbmdzQWxsb3dVcHBlcmNhc2VFbC5jaGVja2VkID0gdHJ1ZTtcbiAgICAgIHNldHRpbmdzQWxsb3dMb3dlcmNhc2VFbC5jaGVja2VkID0gdHJ1ZTtcbiAgICAgIHNldHRpbmdzQWxsb3dTeW1ib2xzRWwuY2hlY2tlZCA9IHRydWU7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgdXBkYXRlQXZhaWxhYmxlQ2hhcnMoKTtcbn1cblxuZnVuY3Rpb24gY2FsY3VsYXRlUGFzc3dvcmRMZXZlbCgpIHtcbiAgY29uc29sZS5sb2coJ2NhbGN1bGF0ZVBhc3N3b3JkTGV2ZWwnKTtcbiAgbGV0IHB3ZExldmVsID0gMDtcblxuICAvLyBNaW5pbXVtIFBhc3N3b3JkIExlbmd0aFxuICBjb25zdCBwd2RMZW5ndGggPSBnZXRQYXNzd29yZExlbmd0aChzZXR0aW5nc1Bhc3N3b3JkTGVuZ3RoUmFuZ2VFbCk7XG4gIGlmIChwd2RMZW5ndGggPCA0KSB7XG4gICAgcHdkTGV2ZWwgPSAtNDtcbiAgfSBlbHNlIGlmIChwd2RMZW5ndGggPCA4KSB7XG4gICAgcHdkTGV2ZWwgKz0gMTtcbiAgfSBlbHNlIGlmIChwd2RMZW5ndGggPCAxMikge1xuICAgIHB3ZExldmVsICs9IDI7XG4gIH0gZWxzZSBpZiAocHdkTGVuZ3RoIDwgMTYpIHtcbiAgICBwd2RMZXZlbCArPSAzO1xuICB9IGVsc2Uge1xuICAgIHB3ZExldmVsICs9IDQ7XG4gIH1cblxuICAvLyBDaGFyYWN0ZXIgVHlwZSBDb21wbGV4aXR5XG4gIGlmIChcbiAgICBzZXR0aW5nc0FsbG93TG93ZXJjYXNlRWwuY2hlY2tlZCAmJlxuICAgICFzZXR0aW5nc0FsbG93TnVtYmVyc0VsLmNoZWNrZWQgJiZcbiAgICAhc2V0dGluZ3NBbGxvd1VwcGVyY2FzZUVsLmNoZWNrZWQgJiZcbiAgICAhc2V0dGluZ3NBbGxvd1N5bWJvbHNFbC5jaGVja2VkXG4gICkge1xuICAgIHB3ZExldmVsICs9IDE7XG4gIH0gZWxzZSBpZiAoXG4gICAgc2V0dGluZ3NBbGxvd0xvd2VyY2FzZUVsLmNoZWNrZWQgJiZcbiAgICBzZXR0aW5nc0FsbG93TnVtYmVyc0VsLmNoZWNrZWQgJiZcbiAgICAhc2V0dGluZ3NBbGxvd1VwcGVyY2FzZUVsLmNoZWNrZWQgJiZcbiAgICAhc2V0dGluZ3NBbGxvd1N5bWJvbHNFbC5jaGVja2VkXG4gICkge1xuICAgIHB3ZExldmVsICs9IDI7XG4gIH0gZWxzZSBpZiAoXG4gICAgc2V0dGluZ3NBbGxvd0xvd2VyY2FzZUVsLmNoZWNrZWQgJiZcbiAgICBzZXR0aW5nc0FsbG93TnVtYmVyc0VsLmNoZWNrZWQgJiZcbiAgICBzZXR0aW5nc0FsbG93VXBwZXJjYXNlRWwuY2hlY2tlZCAmJlxuICAgICFzZXR0aW5nc0FsbG93U3ltYm9sc0VsLmNoZWNrZWRcbiAgKSB7XG4gICAgcHdkTGV2ZWwgKz0gMztcbiAgfSBlbHNlIHtcbiAgICBwd2RMZXZlbCArPSA0O1xuICB9XG5cbiAgcHdkR2VuZXJhdGVkU3RyZW5ndGhFbC5jbGFzc0xpc3QucmVtb3ZlKCdpcy1kYW5nZXInLCAnaXMtd2FybmluZycsICdpcy1pbmZvJywgJ2lzLXN1Y2Nlc3MnKTtcblxuICBpZiAocHdkTGV2ZWwgPCAzKSB7XG4gICAgcHdkR2VuZXJhdGVkU3RyZW5ndGhFbC5jbGFzc0xpc3QuYWRkKCdpcy1kYW5nZXInKTtcbiAgfSBlbHNlIGlmIChwd2RMZXZlbCA8IDYpIHtcbiAgICBwd2RHZW5lcmF0ZWRTdHJlbmd0aEVsLmNsYXNzTGlzdC5hZGQoJ2lzLXdhcm5pbmcnKTtcbiAgfSBlbHNlIGlmIChwd2RMZXZlbCA8IDgpIHtcbiAgICBwd2RHZW5lcmF0ZWRTdHJlbmd0aEVsLmNsYXNzTGlzdC5hZGQoJ2lzLWluZm8nKTtcbiAgfSBlbHNlIHtcbiAgICBwd2RHZW5lcmF0ZWRTdHJlbmd0aEVsLmNsYXNzTGlzdC5hZGQoJ2lzLXN1Y2Nlc3MnKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBiaW5kRXZlbnRzKCkge1xuICBzZXR0aW5nc1Bhc3N3b3JkTGVuZ3RoUmFuZ2VFbC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcbiAgICBzZXR0aW5nc1Bhc3N3b3JkTGVuZ3RoRWwudmFsdWUgPSBzZXR0aW5nc1Bhc3N3b3JkTGVuZ3RoUmFuZ2VFbC52YWx1ZTtcbiAgfSk7XG4gIHNldHRpbmdzUGFzc3dvcmRMZW5ndGhFbC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgaWYgKHNldHRpbmdzUGFzc3dvcmRMZW5ndGhFbC52YWx1ZSA8IDQpIHtcbiAgICAgIHNldHRpbmdzUGFzc3dvcmRMZW5ndGhFbC52YWx1ZSA9IDQ7XG4gICAgfVxuICAgIGlmIChzZXR0aW5nc1Bhc3N3b3JkTGVuZ3RoRWwudmFsdWUgPiA1Nikge1xuICAgICAgc2V0dGluZ3NQYXNzd29yZExlbmd0aEVsLnZhbHVlID0gNTY7XG4gICAgfVxuICAgIHNldHRpbmdzUGFzc3dvcmRMZW5ndGhSYW5nZUVsLnZhbHVlID0gc2V0dGluZ3NQYXNzd29yZExlbmd0aEVsLnZhbHVlO1xuICB9KTtcblxuICBub3RpZmljYXRpb25EZWxldGVCdG5FbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBub3RpZmljYXRpb25FbC5jbGFzc0xpc3QuYWRkKCdpcy1pbnZpc2libGUnKTtcbiAgfSk7XG5cbiAgYWN0aW9uUmVkb0VsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlUGFzc3dvcmRDcmVhdGlvbik7XG5cbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FjdGlvbi1jb3B5LXRvLWNsaXBib2FyZCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY29weVRvQ2xpcGJvYXJkKTtcblxuICBmb3IgKGxldCBlbCBvZiBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzZXR0aW5nLWVsZW1lbnQnKSkge1xuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHVwZGF0ZUF2YWlsYWJsZUNoYXJzKTtcbiAgfVxuXG4gIGZvciAobGV0IGVsIG9mIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3NldHRpbmctcHdkLW1vZGUnKSkge1xuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHVwZGF0ZVNldHRpbmdzKTtcbiAgfVxufVxuXG5mdW5jdGlvbiB3cml0ZVdlbGxjb21lTWVzc2FnZSgpIHtcbiAgY29uc3Qgd2VsbGNvbWVNZXNzYWdlU2V0dGluZ3MgPSAnY29sb3I6IzQ4NWZjNzsgZm9udC1zaXplOiAxNnB4OyBmb250LXdlaWdodDogNzAwOyBmb250LWZhbWlseTogbW9ub3NwYWNlJztcbiAgY29uc29sZS5sb2coJyVj4qCA4qCA4qCAIOKggOKggOKggCDioIDioIDioIAg4qCA4qCA4qCAIOKggOKggOKggCDioIDioIDioIAg4qCA4qCA4qCAIOKggOKggOKggCDioIDioIDioIAg4qCA4qCA4qCAIOKggOKggOKggCDioIDioIDioIAg4qCA4qCA4qCAIOKggOKggOKggCcsIHdlbGxjb21lTWVzc2FnZVNldHRpbmdzKTtcbiAgY29uc29sZS5sb2coJyVj4qCA4qCA4qCAIFdlbGNvbWUgdG8gdGhlIGRldmVsb3BlciB2YXVsdCEuICAgICAgICAgICAgICAgICAgICAg4qCA4qCA4qCAJywgd2VsbGNvbWVNZXNzYWdlU2V0dGluZ3MpO1xuICBjb25zb2xlLmxvZygnJWPioIDioIDioIAgVG9wIHNlY3JldCBwYXNzd29yZCBnZW5lcmF0aW9uIGhhcHBlbnMgaGVyZS4uLiAgICAgICDioIDioIDioIAnLCB3ZWxsY29tZU1lc3NhZ2VTZXR0aW5ncyk7XG4gIGNvbnNvbGUubG9nKCclY+KggOKggOKggCBNb3N0bHkuIF5fXiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOKggOKggOKggCcsIHdlbGxjb21lTWVzc2FnZVNldHRpbmdzKTtcbiAgY29uc29sZS5sb2coJyVj4qCA4qCA4qCAIOKggOKggOKggCDioIDioIDioIAg4qCA4qCA4qCAIOKggOKggOKggCDioIDioIDioIAg4qCA4qCA4qCAIOKggOKggOKggCDioIDioIDioIAg4qCA4qCA4qCAIOKggOKggOKggCDioIDioIDioIAg4qCA4qCA4qCAIOKggOKggOKggCcsIHdlbGxjb21lTWVzc2FnZVNldHRpbmdzKTtcbn1cblxuZnVuY3Rpb24gZGlzcGxheVBhZ2UoKSB7XG4gIGRvY3VtZW50LmJvZHkuc3R5bGUgPSAnZGlzcGxheTogYXV0byc7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZVBhc3N3b3JkQ3JlYXRpb24oKSB7XG4gIHB3ZEdlbmVyYXRlZEVsLmlubmVySFRNTCA9IGNyZWF0ZVBhc3N3b3JkKCk7XG4gIGNhbGN1bGF0ZVBhc3N3b3JkTGV2ZWwoKTtcbn1cblxuZnVuY3Rpb24gaW5pdGFsaXplUGFnZUVsZW1lbnRzKCkge1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2V0dGluZ3MtYWxsb3ctc3ltYm9scy1saXN0JykuaW5uZXJIVE1MID0gQXJyYXkuZnJvbShTUEVDSUFMX0NIQVJBQ1RFUlMpLm1hcCgoZWwpID0+XG4gICAgU3RyaW5nLmZyb21DaGFyQ29kZShlbClcbiAgKTtcbn1cblxuLy8gSW5pdFxuZnVuY3Rpb24gaW5pdCgpIHtcbiAgd3JpdGVXZWxsY29tZU1lc3NhZ2UoKTtcblxuICBiaW5kRXZlbnRzKCk7XG4gIGluaXRhbGl6ZVBhZ2VFbGVtZW50cygpO1xuXG4gIC8vIFVwZGF0ZSB0aGUgQXZhaWxhYmxlQ2hhcnMgYXJyYXkgYmFzZWQgb24gdGhlIGh0bWwgZGVmYXVsdFxuICAvLyBhbmQgY3JlYXRlIHRoZSBmaXJzdCBwYXNzd29yZFxuICB1cGRhdGVBdmFpbGFibGVDaGFycygpO1xuICBoYW5kbGVQYXNzd29yZENyZWF0aW9uKCk7XG5cbiAgLy8gU2hvdyBjb250ZW50IG9ubHkgd2hlbiBwYWdlIGlzIGxvYWRlZFxuICBkaXNwbGF5UGFnZSgpO1xufVxuXG53aW5kb3cub25sb2FkID0gaW5pdDtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==