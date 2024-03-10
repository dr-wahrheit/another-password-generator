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
// Module
___CSS_LOADER_EXPORT___.push([module.id, `::selection {
  color: #ffffff;
  background: #ffa445;
  border-radius: 4px;
}

html,
body {
  color: #444;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  font-family: "Kode Mono", monospace;
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
  color: inherit;
}

.section {
  padding: 2rem 2rem;
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
  text-shadow: 0 0 5px #ffa445;
}
.pwd-container ::selection {
  color: #ffffff;
  background: #ffa445;
  border-radius: 4px;
}

#settings-password-length-range {
  width: 100%;
}

.settings-container {
  background-color: #ffa445;
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
}`, "",{"version":3,"sources":["webpack://./src/styles/style.scss"],"names":[],"mappings":"AAOA;EACC,cANiB;EAOjB,mBATgB;EAUhB,kBAAA;AAND;;AASA;;EAEC,WAXW;EAYX,SAAA;EACA,UAAA;EACA,WAAA;EACA,YAAA;EACA,mCAAA;EACA,yBAAA;EACA,gBAAA;EACA,kBAAA;EACA,eAAA;EACA,yBAvBiB;EAwBjB,uBAAA;EACA,6BAAA;AAND;;AASA;;EAEC,cAAA;AAND;;AASA;EACC,kBAAA;AAND;;AASA;EACC,eAAA;EACA,MAAA;EACA,WAAA;EACA,yBAAA;EACA,UAAA;EACA,YAAA;EACA,yBAAA;EAEA,8CACC;AARF;AAWC;EACC,UAAA;AATF;;AAaA;EACC,kBAAA;EACA,WAAA;EACA,SAAA;EACA,2BAAA;EACA,4BAAA;EACA,8BAAA;EACA,+BAAA;EACA,cAAA;AAVD;;AAiDA;EACC,eAAA;EAEA,aAAA;EACA,mBAAA;EACA,qBAAA;EACA,8BAAA;AA/CD;AAiDC;EACC,aAAA;AA/CF;AAgDE;EACC,eAAA;EACA,cAnHY;AAqEf;AAgDG;EAEC,WApHQ;EAqHR,4BAAA;AA/CJ;AAoDC;EACC,cA7HgB;EA8HhB,mBAhIe;EAiIf,kBAAA;AAlDF;;AAyDA;EACC,WAAA;AAtDD;;AAyDA;EACC,yBA7IgB;EA8IhB,cA5IiB;EA6IjB,mBAAA;EACA,yBAAA;EACA,aAAA;AAtDD;AAyDC;EACC,cAnJgB;EAoJhB,mBArJa;EAsJb,kBAAA;AAvDF;AA0DC;;EAEC,WAxJU;AAgGZ;;AA6DA;EACC,6BAAA;EACA,yBAAA;AA1DD;;AA6DA;EACC,cAAA;AA1DD","sourcesContent":["$secondaryColor: #ffa445;\n$primaryColor: #485fc7;\n$backgroundColor: #ffffff;\n\n$textColor: #444;\n$linkColor: $primaryColor;\n\n::selection {\n\tcolor: $backgroundColor;\n\tbackground: $secondaryColor;\n\tborder-radius: 4px;\n}\n\nhtml,\nbody {\n\tcolor: $textColor;\n\tmargin: 0;\n\tpadding: 0;\n\twidth: 100%;\n\theight: 100%;\n\tfont-family: \"Kode Mono\", monospace;\n\tfont-optical-sizing: auto;\n\tfont-weight: 400;\n\tfont-style: normal;\n\tfont-size: 16px;\n\tbackground-color: $backgroundColor;\n\tscroll-behavior: smooth;\n\tscroll-snap-type: y mandatory;\n}\n\n.title,\n.subtitle {\n\tcolor: inherit;\n}\n\n.section {\n\tpadding: 2rem 2rem;\n}\n\n.notification {\n\tposition: fixed;\n\ttop: 0;\n\twidth: 100%;\n\tbackground-color: #ffe645;\n\topacity: 1;\n\tz-index: 100;\n\tbox-shadow: 0 0 10px $textColor;\n\n\ttransition:\n\t\tvisibility 0s,\n\t\topacity 0.3s linear;\n\n\t&.is-invisible {\n\t\topacity: 0;\n\t}\n}\n\n#pwd-strength {\n\tposition: absolute;\n\tbottom: 0px;\n\tleft: 0px;\n\tborder-top-left-radius: 0px;\n\tborder-top-right-radius: 0px;\n\tborder-bottom-left-radius: 6px;\n\tborder-bottom-right-radius: 6px;\n\theight: 0.5rem;\n\n\t// &.is-danger {\n\t// \t&::-webkit-progress-value {\n\t// \t\tbackground-color: greenyellow;\n\t// \t}\n\t// \t&::-moz-progress-bar {\n\t// \t\tbackground-color: greenyellow;\n\t// \t}\n\t// \t&::-ms-fill {\n\t// \t\tbackground-color: greenyellow;\n\t// \t}\n\t// }\n\n\t// &.is-warning {\n\t// \t&::-webkit-progress-value {\n\t// \t\tbackground-color: greenyellow;\n\t// \t}\n\t// \t&::-moz-progress-bar {\n\t// \t\tbackground-color: greenyellow;\n\t// \t}\n\t// \t&::-ms-fill {\n\t// \t\tbackground-color: greenyellow;\n\t// \t}\n\t// }\n\n\t// &.is-success {\n\t// \t&::-webkit-progress-value {\n\t// \t\tbackground-color: greenyellow;\n\t// \t}\n\t// \t&::-moz-progress-bar {\n\t// \t\tbackground-color: greenyellow;\n\t// \t}\n\t// \t&::-ms-fill {\n\t// \t\tbackground-color: greenyellow;\n\t// \t}\n\t// }\n}\n\n.pwd-container {\n\tfont-size: 2rem;\n\t// border-bottom: 5px solid green;\n\tdisplay: flex;\n\tflex-direction: row;\n\talign-items: baseline;\n\tjustify-content: space-between;\n\n\t.actions {\n\t\tdisplay: flex;\n\t\t.action {\n\t\t\tpadding: 0 1rem;\n\t\t\tcolor: $linkColor;\n\n\t\t\t&:hover {\n\t\t\t\t// color: lighten($color: $secondaryColor, $amount: 20);\n\t\t\t\tcolor: $textColor;\n\t\t\t\ttext-shadow: 0 0 5px $secondaryColor;\n\t\t\t}\n\t\t}\n\t}\n\n\t::selection {\n\t\tcolor: $backgroundColor;\n\t\tbackground: $secondaryColor;\n\t\tborder-radius: 4px;\n\t}\n}\n\n// #settings-password-length {\n// \twidth: 50px;\n// }\n#settings-password-length-range {\n\twidth: 100%;\n}\n\n.settings-container {\n\tbackground-color: $secondaryColor;\n\tcolor: $backgroundColor;\n\tborder-radius: 10px;\n\tborder: 2px solid $primaryColor;\n\tpadding: 1rem;\n\t// box-shadow: 0 2px 10px $primaryColor;\n\n\t::selection {\n\t\tcolor: $backgroundColor;\n\t\tbackground: $primaryColor;\n\t\tborder-radius: 4px;\n\t}\n\n\t.checkbox:hover,\n\t.radio:hover {\n\t\tcolor: $textColor;\n\t\t// text-shadow: 0 0 5px $backgroundColor;\n\t}\n}\n\n.footer {\n\tborder-top: 2px solid #245494;\n\tbackground-color: #7ca7df;\n}\n\n.is-owerflow-auto {\n\toverflow: auto;\n}\n"],"sourceRoot":""}]);
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
// load styles


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

// Update availableChars based on settings during initialization
function updateAvailableChars() {
  console.time('updateAvailableChars');
  availableChars = [
    ...(settingsAllowNumbersEl.checked ? NUMBERS : []),
    ...(settingsAllowUppercaseEl.checked ? UPPERCASE : []),
    ...(settingsAllowLowercaseEl.checked ? LOWERCASE : []),
    ...(settingsAllowSymbolsEl.checked ? SPECIAL_CHARACTERS : []),
  ];
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
  settingsPasswordLengthRangeEl.addEventListener('change', () => {
    settingsPasswordLengthEl.value = settingsPasswordLengthRangeEl.value;
  });
  settingsPasswordLengthEl.addEventListener('change', () => {
    settingsPasswordLengthRangeEl.value = settingsPasswordLengthEl.value;
  });

  notificationDeleteBtnEl.addEventListener('click', () => {
    notificationEl.classList.add('is-invisible');
  });

  document.getElementById('action-redo').addEventListener('click', () => {
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

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/scripts/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Fub3RoZXItcGFzc3dvcmQtZ2VuZXJhdG9yLy4vc3JjL3N0eWxlcy9zdHlsZS5zY3NzIiwid2VicGFjazovL2Fub3RoZXItcGFzc3dvcmQtZ2VuZXJhdG9yLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9hbm90aGVyLXBhc3N3b3JkLWdlbmVyYXRvci8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2Fub3RoZXItcGFzc3dvcmQtZ2VuZXJhdG9yLy4vc3JjL3N0eWxlcy9zdHlsZS5zY3NzP2U1ZDgiLCJ3ZWJwYWNrOi8vYW5vdGhlci1wYXNzd29yZC1nZW5lcmF0b3IvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYW5vdGhlci1wYXNzd29yZC1nZW5lcmF0b3IvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2Fub3RoZXItcGFzc3dvcmQtZ2VuZXJhdG9yLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2Fub3RoZXItcGFzc3dvcmQtZ2VuZXJhdG9yLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2Fub3RoZXItcGFzc3dvcmQtZ2VuZXJhdG9yLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYW5vdGhlci1wYXNzd29yZC1nZW5lcmF0b3IvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9hbm90aGVyLXBhc3N3b3JkLWdlbmVyYXRvci8uL3NyYy9zY3JpcHRzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6OnNlbGVjdGlvbiB7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBiYWNrZ3JvdW5kOiAjZmZhNDQ1O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbmh0bWwsXG5ib2R5IHtcbiAgY29sb3I6ICM0NDQ7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZm9udC1mYW1pbHk6IFwiS29kZSBNb25vXCIsIG1vbm9zcGFjZTtcbiAgZm9udC1vcHRpY2FsLXNpemluZzogYXV0bztcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xuICBzY3JvbGwtc25hcC10eXBlOiB5IG1hbmRhdG9yeTtcbn1cblxuLnRpdGxlLFxuLnN1YnRpdGxlIHtcbiAgY29sb3I6IGluaGVyaXQ7XG59XG5cbi5zZWN0aW9uIHtcbiAgcGFkZGluZzogMnJlbSAycmVtO1xufVxuXG4ubm90aWZpY2F0aW9uIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlNjQ1O1xuICBvcGFjaXR5OiAxO1xuICB6LWluZGV4OiAxMDA7XG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4ICM0NDQ7XG4gIHRyYW5zaXRpb246IHZpc2liaWxpdHkgMHMsIG9wYWNpdHkgMC4zcyBsaW5lYXI7XG59XG4ubm90aWZpY2F0aW9uLmlzLWludmlzaWJsZSB7XG4gIG9wYWNpdHk6IDA7XG59XG5cbiNwd2Qtc3RyZW5ndGgge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMHB4O1xuICBsZWZ0OiAwcHg7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDBweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDBweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNnB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNnB4O1xuICBoZWlnaHQ6IDAuNXJlbTtcbn1cblxuLnB3ZC1jb250YWluZXIge1xuICBmb250LXNpemU6IDJyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLnB3ZC1jb250YWluZXIgLmFjdGlvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLnB3ZC1jb250YWluZXIgLmFjdGlvbnMgLmFjdGlvbiB7XG4gIHBhZGRpbmc6IDAgMXJlbTtcbiAgY29sb3I6ICM0ODVmYzc7XG59XG4ucHdkLWNvbnRhaW5lciAuYWN0aW9ucyAuYWN0aW9uOmhvdmVyIHtcbiAgY29sb3I6ICM0NDQ7XG4gIHRleHQtc2hhZG93OiAwIDAgNXB4ICNmZmE0NDU7XG59XG4ucHdkLWNvbnRhaW5lciA6OnNlbGVjdGlvbiB7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBiYWNrZ3JvdW5kOiAjZmZhNDQ1O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbiNzZXR0aW5ncy1wYXNzd29yZC1sZW5ndGgtcmFuZ2Uge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnNldHRpbmdzLWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmE0NDU7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCAjNDg1ZmM3O1xuICBwYWRkaW5nOiAxcmVtO1xufVxuLnNldHRpbmdzLWNvbnRhaW5lciA6OnNlbGVjdGlvbiB7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBiYWNrZ3JvdW5kOiAjNDg1ZmM3O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG4uc2V0dGluZ3MtY29udGFpbmVyIC5jaGVja2JveDpob3Zlcixcbi5zZXR0aW5ncy1jb250YWluZXIgLnJhZGlvOmhvdmVyIHtcbiAgY29sb3I6ICM0NDQ7XG59XG5cbi5mb290ZXIge1xuICBib3JkZXItdG9wOiAycHggc29saWQgIzI0NTQ5NDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzdjYTdkZjtcbn1cblxuLmlzLW93ZXJmbG93LWF1dG8ge1xuICBvdmVyZmxvdzogYXV0bztcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc3R5bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFPQTtFQUNDLGNBTmlCO0VBT2pCLG1CQVRnQjtFQVVoQixrQkFBQTtBQU5EOztBQVNBOztFQUVDLFdBWFc7RUFZWCxTQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUNBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EseUJBdkJpQjtFQXdCakIsdUJBQUE7RUFDQSw2QkFBQTtBQU5EOztBQVNBOztFQUVDLGNBQUE7QUFORDs7QUFTQTtFQUNDLGtCQUFBO0FBTkQ7O0FBU0E7RUFDQyxlQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFFQSw4Q0FDQztBQVJGO0FBV0M7RUFDQyxVQUFBO0FBVEY7O0FBYUE7RUFDQyxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLDhCQUFBO0VBQ0EsK0JBQUE7RUFDQSxjQUFBO0FBVkQ7O0FBaURBO0VBQ0MsZUFBQTtFQUVBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsOEJBQUE7QUEvQ0Q7QUFpREM7RUFDQyxhQUFBO0FBL0NGO0FBZ0RFO0VBQ0MsZUFBQTtFQUNBLGNBbkhZO0FBcUVmO0FBZ0RHO0VBRUMsV0FwSFE7RUFxSFIsNEJBQUE7QUEvQ0o7QUFvREM7RUFDQyxjQTdIZ0I7RUE4SGhCLG1CQWhJZTtFQWlJZixrQkFBQTtBQWxERjs7QUF5REE7RUFDQyxXQUFBO0FBdEREOztBQXlEQTtFQUNDLHlCQTdJZ0I7RUE4SWhCLGNBNUlpQjtFQTZJakIsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7QUF0REQ7QUF5REM7RUFDQyxjQW5KZ0I7RUFvSmhCLG1CQXJKYTtFQXNKYixrQkFBQTtBQXZERjtBQTBEQzs7RUFFQyxXQXhKVTtBQWdHWjs7QUE2REE7RUFDQyw2QkFBQTtFQUNBLHlCQUFBO0FBMUREOztBQTZEQTtFQUNDLGNBQUE7QUExRERcIixcInNvdXJjZXNDb250ZW50XCI6W1wiJHNlY29uZGFyeUNvbG9yOiAjZmZhNDQ1O1xcbiRwcmltYXJ5Q29sb3I6ICM0ODVmYzc7XFxuJGJhY2tncm91bmRDb2xvcjogI2ZmZmZmZjtcXG5cXG4kdGV4dENvbG9yOiAjNDQ0O1xcbiRsaW5rQ29sb3I6ICRwcmltYXJ5Q29sb3I7XFxuXFxuOjpzZWxlY3Rpb24ge1xcblxcdGNvbG9yOiAkYmFja2dyb3VuZENvbG9yO1xcblxcdGJhY2tncm91bmQ6ICRzZWNvbmRhcnlDb2xvcjtcXG5cXHRib3JkZXItcmFkaXVzOiA0cHg7XFxufVxcblxcbmh0bWwsXFxuYm9keSB7XFxuXFx0Y29sb3I6ICR0ZXh0Q29sb3I7XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0aGVpZ2h0OiAxMDAlO1xcblxcdGZvbnQtZmFtaWx5OiBcXFwiS29kZSBNb25vXFxcIiwgbW9ub3NwYWNlO1xcblxcdGZvbnQtb3B0aWNhbC1zaXppbmc6IGF1dG87XFxuXFx0Zm9udC13ZWlnaHQ6IDQwMDtcXG5cXHRmb250LXN0eWxlOiBub3JtYWw7XFxuXFx0Zm9udC1zaXplOiAxNnB4O1xcblxcdGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kQ29sb3I7XFxuXFx0c2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XFxuXFx0c2Nyb2xsLXNuYXAtdHlwZTogeSBtYW5kYXRvcnk7XFxufVxcblxcbi50aXRsZSxcXG4uc3VidGl0bGUge1xcblxcdGNvbG9yOiBpbmhlcml0O1xcbn1cXG5cXG4uc2VjdGlvbiB7XFxuXFx0cGFkZGluZzogMnJlbSAycmVtO1xcbn1cXG5cXG4ubm90aWZpY2F0aW9uIHtcXG5cXHRwb3NpdGlvbjogZml4ZWQ7XFxuXFx0dG9wOiAwO1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGJhY2tncm91bmQtY29sb3I6ICNmZmU2NDU7XFxuXFx0b3BhY2l0eTogMTtcXG5cXHR6LWluZGV4OiAxMDA7XFxuXFx0Ym94LXNoYWRvdzogMCAwIDEwcHggJHRleHRDb2xvcjtcXG5cXG5cXHR0cmFuc2l0aW9uOlxcblxcdFxcdHZpc2liaWxpdHkgMHMsXFxuXFx0XFx0b3BhY2l0eSAwLjNzIGxpbmVhcjtcXG5cXG5cXHQmLmlzLWludmlzaWJsZSB7XFxuXFx0XFx0b3BhY2l0eTogMDtcXG5cXHR9XFxufVxcblxcbiNwd2Qtc3RyZW5ndGgge1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHRib3R0b206IDBweDtcXG5cXHRsZWZ0OiAwcHg7XFxuXFx0Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMHB4O1xcblxcdGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwcHg7XFxuXFx0Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNnB4O1xcblxcdGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA2cHg7XFxuXFx0aGVpZ2h0OiAwLjVyZW07XFxuXFxuXFx0Ly8gJi5pcy1kYW5nZXIge1xcblxcdC8vIFxcdCY6Oi13ZWJraXQtcHJvZ3Jlc3MtdmFsdWUge1xcblxcdC8vIFxcdFxcdGJhY2tncm91bmQtY29sb3I6IGdyZWVueWVsbG93O1xcblxcdC8vIFxcdH1cXG5cXHQvLyBcXHQmOjotbW96LXByb2dyZXNzLWJhciB7XFxuXFx0Ly8gXFx0XFx0YmFja2dyb3VuZC1jb2xvcjogZ3JlZW55ZWxsb3c7XFxuXFx0Ly8gXFx0fVxcblxcdC8vIFxcdCY6Oi1tcy1maWxsIHtcXG5cXHQvLyBcXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbnllbGxvdztcXG5cXHQvLyBcXHR9XFxuXFx0Ly8gfVxcblxcblxcdC8vICYuaXMtd2FybmluZyB7XFxuXFx0Ly8gXFx0Jjo6LXdlYmtpdC1wcm9ncmVzcy12YWx1ZSB7XFxuXFx0Ly8gXFx0XFx0YmFja2dyb3VuZC1jb2xvcjogZ3JlZW55ZWxsb3c7XFxuXFx0Ly8gXFx0fVxcblxcdC8vIFxcdCY6Oi1tb3otcHJvZ3Jlc3MtYmFyIHtcXG5cXHQvLyBcXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbnllbGxvdztcXG5cXHQvLyBcXHR9XFxuXFx0Ly8gXFx0Jjo6LW1zLWZpbGwge1xcblxcdC8vIFxcdFxcdGJhY2tncm91bmQtY29sb3I6IGdyZWVueWVsbG93O1xcblxcdC8vIFxcdH1cXG5cXHQvLyB9XFxuXFxuXFx0Ly8gJi5pcy1zdWNjZXNzIHtcXG5cXHQvLyBcXHQmOjotd2Via2l0LXByb2dyZXNzLXZhbHVlIHtcXG5cXHQvLyBcXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbnllbGxvdztcXG5cXHQvLyBcXHR9XFxuXFx0Ly8gXFx0Jjo6LW1vei1wcm9ncmVzcy1iYXIge1xcblxcdC8vIFxcdFxcdGJhY2tncm91bmQtY29sb3I6IGdyZWVueWVsbG93O1xcblxcdC8vIFxcdH1cXG5cXHQvLyBcXHQmOjotbXMtZmlsbCB7XFxuXFx0Ly8gXFx0XFx0YmFja2dyb3VuZC1jb2xvcjogZ3JlZW55ZWxsb3c7XFxuXFx0Ly8gXFx0fVxcblxcdC8vIH1cXG59XFxuXFxuLnB3ZC1jb250YWluZXIge1xcblxcdGZvbnQtc2l6ZTogMnJlbTtcXG5cXHQvLyBib3JkZXItYm90dG9tOiA1cHggc29saWQgZ3JlZW47XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogcm93O1xcblxcdGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFxuXFx0LmFjdGlvbnMge1xcblxcdFxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0XFx0LmFjdGlvbiB7XFxuXFx0XFx0XFx0cGFkZGluZzogMCAxcmVtO1xcblxcdFxcdFxcdGNvbG9yOiAkbGlua0NvbG9yO1xcblxcblxcdFxcdFxcdCY6aG92ZXIge1xcblxcdFxcdFxcdFxcdC8vIGNvbG9yOiBsaWdodGVuKCRjb2xvcjogJHNlY29uZGFyeUNvbG9yLCAkYW1vdW50OiAyMCk7XFxuXFx0XFx0XFx0XFx0Y29sb3I6ICR0ZXh0Q29sb3I7XFxuXFx0XFx0XFx0XFx0dGV4dC1zaGFkb3c6IDAgMCA1cHggJHNlY29uZGFyeUNvbG9yO1xcblxcdFxcdFxcdH1cXG5cXHRcXHR9XFxuXFx0fVxcblxcblxcdDo6c2VsZWN0aW9uIHtcXG5cXHRcXHRjb2xvcjogJGJhY2tncm91bmRDb2xvcjtcXG5cXHRcXHRiYWNrZ3JvdW5kOiAkc2Vjb25kYXJ5Q29sb3I7XFxuXFx0XFx0Ym9yZGVyLXJhZGl1czogNHB4O1xcblxcdH1cXG59XFxuXFxuLy8gI3NldHRpbmdzLXBhc3N3b3JkLWxlbmd0aCB7XFxuLy8gXFx0d2lkdGg6IDUwcHg7XFxuLy8gfVxcbiNzZXR0aW5ncy1wYXNzd29yZC1sZW5ndGgtcmFuZ2Uge1xcblxcdHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uc2V0dGluZ3MtY29udGFpbmVyIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kYXJ5Q29sb3I7XFxuXFx0Y29sb3I6ICRiYWNrZ3JvdW5kQ29sb3I7XFxuXFx0Ym9yZGVyLXJhZGl1czogMTBweDtcXG5cXHRib3JkZXI6IDJweCBzb2xpZCAkcHJpbWFyeUNvbG9yO1xcblxcdHBhZGRpbmc6IDFyZW07XFxuXFx0Ly8gYm94LXNoYWRvdzogMCAycHggMTBweCAkcHJpbWFyeUNvbG9yO1xcblxcblxcdDo6c2VsZWN0aW9uIHtcXG5cXHRcXHRjb2xvcjogJGJhY2tncm91bmRDb2xvcjtcXG5cXHRcXHRiYWNrZ3JvdW5kOiAkcHJpbWFyeUNvbG9yO1xcblxcdFxcdGJvcmRlci1yYWRpdXM6IDRweDtcXG5cXHR9XFxuXFxuXFx0LmNoZWNrYm94OmhvdmVyLFxcblxcdC5yYWRpbzpob3ZlciB7XFxuXFx0XFx0Y29sb3I6ICR0ZXh0Q29sb3I7XFxuXFx0XFx0Ly8gdGV4dC1zaGFkb3c6IDAgMCA1cHggJGJhY2tncm91bmRDb2xvcjtcXG5cXHR9XFxufVxcblxcbi5mb290ZXIge1xcblxcdGJvcmRlci10b3A6IDJweCBzb2xpZCAjMjQ1NDk0O1xcblxcdGJhY2tncm91bmQtY29sb3I6ICM3Y2E3ZGY7XFxufVxcblxcbi5pcy1vd2VyZmxvdy1hdXRvIHtcXG5cXHRvdmVyZmxvdzogYXV0bztcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBsb2FkIHN0eWxlc1xuaW1wb3J0ICcuLi9zdHlsZXMvc3R5bGUuc2Nzcyc7XG5cbi8vIGxvYWQgaW1hZ2VzXG5pbXBvcnQgZmF2aWNvbkljbyBmcm9tICcuLi9pbWFnZXMvZmF2aWNvbi5pY28nO1xuaW1wb3J0IGZhdmljb25JbWFnZSBmcm9tICcuLi9pbWFnZXMvZmF2aWNvbi5wbmcnO1xuXG5jbGFzcyBQYXNzd29yZCB7XG4gICNleGNsdWRlRHVwbGljYXRlcztcbiAgI2NoYXJzO1xuICAjbGVuZ3RoID0gMDtcbiAgY29uc3RydWN0b3IoZXhjbHVkZUR1cGxpY2F0ZXMpIHtcbiAgICB0aGlzLiNleGNsdWRlRHVwbGljYXRlcyA9IGV4Y2x1ZGVEdXBsaWNhdGVzO1xuICAgIHRoaXMuI2NoYXJzID0gdGhpcy4jZXhjbHVkZUR1cGxpY2F0ZXMgPyBuZXcgU2V0KCkgOiBbXTtcbiAgfVxuXG4gIGFkZENoYXIoY2hhcikge1xuICAgIGlmICh0aGlzLiNleGNsdWRlRHVwbGljYXRlcykge1xuICAgICAgdGhpcy4jY2hhcnMuYWRkKGNoYXIpO1xuICAgICAgdGhpcy4jbGVuZ3RoID0gdGhpcy4jY2hhcnMuc2l6ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy4jY2hhcnMucHVzaChjaGFyKTtcbiAgICAgIHRoaXMuI2xlbmd0aCsrO1xuICAgIH1cbiAgfVxuXG4gIGdldCBsZW5ndGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuI2xlbmd0aDtcbiAgfVxuXG4gIHRvU3RyaW5nKCkge1xuICAgIGlmICh0aGlzLiNleGNsdWRlRHVwbGljYXRlcykge1xuICAgICAgcmV0dXJuIEFycmF5LmZyb20odGhpcy4jY2hhcnMpLmpvaW4oJycpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy4jY2hhcnMuam9pbignJyk7XG4gICAgfVxuICB9XG5cbiAgY2xlYXIoKSB7XG4gICAgaWYgKHRoaXMuI2V4Y2x1ZGVEdXBsaWNhdGVzKSB7XG4gICAgICB0aGlzLiNjaGFycy5jbGVhcigpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyB0aGlzLiNjaGFycy5maWxsKDApO1xuICAgICAgdGhpcy4jY2hhcnMubGVuZ3RoID0gMDtcbiAgICB9XG4gICAgdGhpcy4jbGVuZ3RoID0gMDtcbiAgfVxufVxuXG5jb25zdCBOVU1CRVJTID0gbmV3IFVpbnQ4QXJyYXkoWzQ4LCA0OSwgNTAsIDUxLCA1MiwgNTMsIDU0LCA1NSwgNTYsIDU3XSk7XG5jb25zdCBMT1dFUkNBU0UgPSBuZXcgVWludDhBcnJheShbXG4gIDk3LCA5OCwgOTksIDEwMCwgMTAxLCAxMDIsIDEwMywgMTA0LCAxMDUsIDEwNiwgMTA3LCAxMDgsIDEwOSwgMTEwLCAxMTEsIDExMiwgMTEzLCAxMTQsIDExNSwgMTE2LCAxMTcsIDExOCwgMTE5LCAxMjAsXG4gIDEyMSwgMTIyLFxuXSk7XG5jb25zdCBVUFBFUkNBU0UgPSBuZXcgVWludDhBcnJheShbXG4gIDY1LCA2NiwgNjcsIDY4LCA2OSwgNzAsIDcxLCA3MiwgNzMsIDc0LCA3NSwgNzYsIDc3LCA3OCwgNzksIDgwLCA4MSwgODIsIDgzLCA4NCwgODUsIDg2LCA4NywgODgsIDg5LCA5MCxcbl0pO1xuY29uc3QgU1BFQ0lBTF9DSEFSQUNURVJTID0gbmV3IFVpbnQ4QXJyYXkoWzMzLCAzNSwgMzYsIDM3LCAzOCwgNDAsIDQxLCA0MiwgNDMsIDY0LCA5NF0pO1xuY29uc3QgU0lNSUxBUl9DSEFSUyA9IHtcbiAgMDogWzQ4LCA3OSwgMTExLCA3MywgMTA1XSwgLy8gMCwgTywgbCwgSVxuICAxOiBbNDksIDc2LCAxMDhdLCAvLyAxLCBsLCBJXG4gIDU6IFs1MywgODMsIDExNSwgNTYsIDg4XSwgLy8gNSwgUywgcywgOCwgQlxuICA2OiBbNTQsIDY2LCA5OF0sIC8vIDYsIGIsIEJcbiAgODogWzU2LCA2NiwgOThdLCAvLyA4LCBCLCBiXG4gIDk6IFs1NywgNzEsIDEwMywgNTQsIDY2XSwgLy8gOSwgZywgRywgNiwgYlxuICBhOiBbOTcsIDY0LCA2NV0sIC8vIGEsIEAsIEFcbiAgZTogWzEwMSwgNjcsIDk5XSwgLy8gZSwgYywgQ1xuICBnOiBbMTAzLCA4MSwgMTEzLCA1N10sIC8vIGcsIHEsIFEsIDlcbiAgbDogWzEwOCwgNDksIDczLCAxMDVdLCAvLyBsLCAxLCBJLCBpXG4gIG86IFsxMTEsIDQ4LCA3OSwgOTcsIDY1XSwgLy8gbywgMCwgTywgYSwgQVxuICBzOiBbMTE1LCA1MywgODNdLCAvLyBzLCA1LCBTXG4gIHQ6IFsxMTYsIDU1LCA4NF0sIC8vIHQsIDcsIFRcbiAgejogWzEyMiwgNTBdLCAvLyB6LCAyXG59O1xuXG5sZXQgYXZhaWxhYmxlQ2hhcnMgPSBbXTtcblxuY29uc3QgcHdkR2VuZXJhdGVkRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHdkLWdlbmVyYXRlZCcpO1xuY29uc3Qgbm90aWZpY2F0aW9uRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbm90aWZpY2F0aW9uJyk7XG5jb25zdCBub3RpZmljYXRpb25EZWxldGVCdG5FbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ub3RpZmljYXRpb24gYnV0dG9uLmRlbGV0ZScpO1xuY29uc3Qgc2V0dGluZ3NQYXNzd29yZExlbmd0aFJhbmdlRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2V0dGluZ3MtcGFzc3dvcmQtbGVuZ3RoLXJhbmdlJyk7XG5jb25zdCBzZXR0aW5nc1Bhc3N3b3JkTGVuZ3RoRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2V0dGluZ3MtcGFzc3dvcmQtbGVuZ3RoJyk7XG5jb25zdCBwd2RHZW5lcmF0ZWRTdHJlbmd0aEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3B3ZC1zdHJlbmd0aCcpO1xuY29uc3Qgc2V0dGluZ3NBbGxvd051bWJlcnNFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZXR0aW5ncy1hbGxvdy1udW1iZXJzJyk7XG5jb25zdCBzZXR0aW5nc0FsbG93VXBwZXJjYXNlRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2V0dGluZ3MtYWxsb3ctdXBwZXJjYXNlJyk7XG5jb25zdCBzZXR0aW5nc0FsbG93TG93ZXJjYXNlRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2V0dGluZ3MtYWxsb3ctbG93ZXJjYXNlJyk7XG5jb25zdCBzZXR0aW5nc0FsbG93U3ltYm9sc0VsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NldHRpbmdzLWFsbG93LXN5bWJvbHMnKTtcbmNvbnN0IHNldHRpbmdzRXhjbHVkZUR1cGxpY2F0ZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NldHRpbmdzLWV4Y2x1ZGUtZHVwbGljYXRlLWNoYXJhY3RlcnMnKTtcbmNvbnN0IHNldHRpbmdzRXhjbHVkZVNpbWlsYXJFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZXR0aW5ncy1leGNsdWRlLXNpbWlsYXItY2hhcmFjdGVycycpO1xuXG5mdW5jdGlvbiBpc1NpbWlsYXJDaGFyRXhjbHVkZWQoY2hhcikge1xuICBjb25zdCBzaW1pbGFyR3JvdXAgPSBTSU1JTEFSX0NIQVJTW2NoYXJdO1xuICByZXR1cm4gISFzaW1pbGFyR3JvdXAgJiYgc2V0dGluZ3NFeGNsdWRlU2ltaWxhckVsLmNoZWNrZWQgJiYgYXZhaWxhYmxlQ2hhcnMuc29tZSgoZWwpID0+IHNpbWlsYXJHcm91cC5pbmNsdWRlcyhlbCkpO1xufVxuXG5mdW5jdGlvbiBnZXRQYXNzd29yZExlbmd0aChzZXR0aW5nc1Bhc3N3b3JkTGVuZ3RoKSB7XG4gIGNvbnN0IGxlbmd0aCA9IHNldHRpbmdzUGFzc3dvcmRMZW5ndGgudmFsdWU7XG4gIHRyeSB7XG4gICAgcmV0dXJuIHBhcnNlSW50KGxlbmd0aCB8fCBzZXR0aW5nc1Bhc3N3b3JkTGVuZ3RoLmdldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInKSk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjb25zb2xlLmxvZygnZXJyb3InLCBlKTtcbiAgfVxuICByZXR1cm4gMDtcbn1cblxuLy8gVXBkYXRlIGF2YWlsYWJsZUNoYXJzIGJhc2VkIG9uIHNldHRpbmdzIGR1cmluZyBpbml0aWFsaXphdGlvblxuZnVuY3Rpb24gdXBkYXRlQXZhaWxhYmxlQ2hhcnMoKSB7XG4gIGNvbnNvbGUudGltZSgndXBkYXRlQXZhaWxhYmxlQ2hhcnMnKTtcbiAgYXZhaWxhYmxlQ2hhcnMgPSBbXG4gICAgLi4uKHNldHRpbmdzQWxsb3dOdW1iZXJzRWwuY2hlY2tlZCA/IE5VTUJFUlMgOiBbXSksXG4gICAgLi4uKHNldHRpbmdzQWxsb3dVcHBlcmNhc2VFbC5jaGVja2VkID8gVVBQRVJDQVNFIDogW10pLFxuICAgIC4uLihzZXR0aW5nc0FsbG93TG93ZXJjYXNlRWwuY2hlY2tlZCA/IExPV0VSQ0FTRSA6IFtdKSxcbiAgICAuLi4oc2V0dGluZ3NBbGxvd1N5bWJvbHNFbC5jaGVja2VkID8gU1BFQ0lBTF9DSEFSQUNURVJTIDogW10pLFxuICBdO1xuICBjb25zb2xlLnRpbWVFbmQoJ3VwZGF0ZUF2YWlsYWJsZUNoYXJzJyk7XG59XG5cbmZ1bmN0aW9uIHNob3dOb3RpZmljYXRpb24oKSB7XG4gIG5vdGlmaWNhdGlvbkVsLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWludmlzaWJsZScpO1xuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBub3RpZmljYXRpb25FbC5jbGFzc0xpc3QuYWRkKCdpcy1pbnZpc2libGUnKTtcbiAgfSwgMzAwMCk7XG59XG5cbmZ1bmN0aW9uIGNvcHlUb0NsaXBib2FyZCgpIHtcbiAgY29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICBlbC5zdHlsZS52aXNpYmlsaXR5ID0gJ25vbmUnO1xuICBlbC52YWx1ZSA9IHB3ZEdlbmVyYXRlZEVsLmlubmVyVGV4dDtcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChlbCk7XG4gIGVsLnNlbGVjdCgpO1xuICBkb2N1bWVudC5leGVjQ29tbWFuZCgnY29weScpO1xuICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGVsKTtcbiAgc2hvd05vdGlmaWNhdGlvbigpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVQYXNzd29yZCgpIHtcbiAgaWYgKGF2YWlsYWJsZUNoYXJzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIGNvbnNvbGUudGltZSgnY3JlYXRlUGFzc3dvcmQnKTtcblxuICBjb25zdCBwYXNzd29yZExlbmd0aCA9IGdldFBhc3N3b3JkTGVuZ3RoKHNldHRpbmdzUGFzc3dvcmRMZW5ndGhSYW5nZUVsKTtcbiAgY29uc3QgaW5kZXhlcyA9IGNyeXB0by5nZXRSYW5kb21WYWx1ZXMobmV3IFVpbnQzMkFycmF5KGF2YWlsYWJsZUNoYXJzLmxlbmd0aCkpO1xuICBjb25zdCBwYXNzd29yZCA9IG5ldyBQYXNzd29yZChzZXR0aW5nc0V4Y2x1ZGVEdXBsaWNhdGVFbC5jaGVja2VkKTtcblxuICBjb25zdCBtYXhQYXNzd29yZExlbmd0aCA9IHNldHRpbmdzRXhjbHVkZUR1cGxpY2F0ZUVsLmNoZWNrZWRcbiAgICA/IE1hdGgubWluKHBhc3N3b3JkTGVuZ3RoLCBhdmFpbGFibGVDaGFycy5sZW5ndGgpXG4gICAgOiBwYXNzd29yZExlbmd0aDtcblxuICBsZXQgbG9vcCA9IDA7XG4gIHdoaWxlIChwYXNzd29yZC5sZW5ndGggPCBtYXhQYXNzd29yZExlbmd0aCkge1xuICAgIGNvbnN0IGluZGV4ID0gaW5kZXhlc1tsb29wICUgaW5kZXhlcy5sZW5ndGhdICUgYXZhaWxhYmxlQ2hhcnMubGVuZ3RoO1xuICAgIGNvbnN0IGNoYXIgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGF2YWlsYWJsZUNoYXJzW2luZGV4XSk7XG5cbiAgICBpZiAoIWlzU2ltaWxhckNoYXJFeGNsdWRlZChjaGFyKSkge1xuICAgICAgcGFzc3dvcmQuYWRkQ2hhcihjaGFyKTtcbiAgICB9XG4gICAgbG9vcCsrO1xuICB9XG5cbiAgY29uc3QgcGFzc3dvcmRBc1N0cmluZyA9IHBhc3N3b3JkLnRvU3RyaW5nKCk7XG5cbiAgLy8gQ2xlYXIgcGFzc3dvcmQgaW4gbWVtb3J5XG4gIHBhc3N3b3JkLmNsZWFyKCk7XG5cbiAgY29uc29sZS50aW1lRW5kKCdjcmVhdGVQYXNzd29yZCcpO1xuICByZXR1cm4gcGFzc3dvcmRBc1N0cmluZztcbn1cblxuZnVuY3Rpb24gdXBkYXRlU2V0dGluZ3MoKSB7XG4gIGNvbnN0IHB3ZE1vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwicHdkLW1vZGVcIl06Y2hlY2tlZCcpLnZhbHVlO1xuICBzd2l0Y2ggKHB3ZE1vZGUpIHtcbiAgICBjYXNlICdlYXN5LXRvLXJlYWQnOiB7XG4gICAgICBzZXR0aW5nc0V4Y2x1ZGVTaW1pbGFyRWwuY2hlY2tlZCA9IHRydWU7XG4gICAgICBzZXR0aW5nc0V4Y2x1ZGVEdXBsaWNhdGVFbC5jaGVja2VkID0gZmFsc2U7XG5cbiAgICAgIHNldHRpbmdzQWxsb3dOdW1iZXJzRWwuY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgc2V0dGluZ3NBbGxvd1VwcGVyY2FzZUVsLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgc2V0dGluZ3NBbGxvd0xvd2VyY2FzZUVsLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgc2V0dGluZ3NBbGxvd1N5bWJvbHNFbC5jaGVja2VkID0gZmFsc2U7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgY2FzZSAnZWFzeS10by1zYXknOiB7XG4gICAgICBzZXR0aW5nc0V4Y2x1ZGVTaW1pbGFyRWwuY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgc2V0dGluZ3NFeGNsdWRlRHVwbGljYXRlRWwuY2hlY2tlZCA9IGZhbHNlO1xuXG4gICAgICBzZXR0aW5nc0FsbG93TnVtYmVyc0VsLmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgIHNldHRpbmdzQWxsb3dVcHBlcmNhc2VFbC5jaGVja2VkID0gdHJ1ZTtcbiAgICAgIHNldHRpbmdzQWxsb3dMb3dlcmNhc2VFbC5jaGVja2VkID0gdHJ1ZTtcbiAgICAgIHNldHRpbmdzQWxsb3dTeW1ib2xzRWwuY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGNhc2UgJ2FsbC1jaGFyYWN0ZXJzJzpcbiAgICBkZWZhdWx0OiB7XG4gICAgICBzZXR0aW5nc0V4Y2x1ZGVTaW1pbGFyRWwuY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgc2V0dGluZ3NFeGNsdWRlRHVwbGljYXRlRWwuY2hlY2tlZCA9IGZhbHNlO1xuXG4gICAgICBzZXR0aW5nc0FsbG93TnVtYmVyc0VsLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgc2V0dGluZ3NBbGxvd1VwcGVyY2FzZUVsLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgc2V0dGluZ3NBbGxvd0xvd2VyY2FzZUVsLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgc2V0dGluZ3NBbGxvd1N5bWJvbHNFbC5jaGVja2VkID0gdHJ1ZTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICB1cGRhdGVBdmFpbGFibGVDaGFycygpO1xufVxuXG5mdW5jdGlvbiBjYWxjdWxhdGVQYXNzd29yZExldmVsKCkge1xuICBjb25zb2xlLmxvZygnY2FsY3VsYXRlUGFzc3dvcmRMZXZlbCcpO1xuICBsZXQgcHdkTGV2ZWwgPSAwO1xuXG4gIC8vIE1pbmltdW0gUGFzc3dvcmQgTGVuZ3RoXG4gIGNvbnN0IHB3ZExlbmd0aCA9IGdldFBhc3N3b3JkTGVuZ3RoKHNldHRpbmdzUGFzc3dvcmRMZW5ndGhSYW5nZUVsKTtcbiAgaWYgKHB3ZExlbmd0aCA8IDQpIHtcbiAgICBwd2RMZXZlbCA9IC00O1xuICB9IGVsc2UgaWYgKHB3ZExlbmd0aCA8IDgpIHtcbiAgICBwd2RMZXZlbCArPSAxO1xuICB9IGVsc2UgaWYgKHB3ZExlbmd0aCA8IDEyKSB7XG4gICAgcHdkTGV2ZWwgKz0gMjtcbiAgfSBlbHNlIGlmIChwd2RMZW5ndGggPCAxNikge1xuICAgIHB3ZExldmVsICs9IDM7XG4gIH0gZWxzZSB7XG4gICAgcHdkTGV2ZWwgKz0gNDtcbiAgfVxuXG4gIC8vIENoYXJhY3RlciBUeXBlIENvbXBsZXhpdHlcbiAgaWYgKFxuICAgIHNldHRpbmdzQWxsb3dMb3dlcmNhc2VFbC5jaGVja2VkICYmXG4gICAgIXNldHRpbmdzQWxsb3dOdW1iZXJzRWwuY2hlY2tlZCAmJlxuICAgICFzZXR0aW5nc0FsbG93VXBwZXJjYXNlRWwuY2hlY2tlZCAmJlxuICAgICFzZXR0aW5nc0FsbG93U3ltYm9sc0VsLmNoZWNrZWRcbiAgKSB7XG4gICAgcHdkTGV2ZWwgKz0gMTtcbiAgfSBlbHNlIGlmIChcbiAgICBzZXR0aW5nc0FsbG93TG93ZXJjYXNlRWwuY2hlY2tlZCAmJlxuICAgIHNldHRpbmdzQWxsb3dOdW1iZXJzRWwuY2hlY2tlZCAmJlxuICAgICFzZXR0aW5nc0FsbG93VXBwZXJjYXNlRWwuY2hlY2tlZCAmJlxuICAgICFzZXR0aW5nc0FsbG93U3ltYm9sc0VsLmNoZWNrZWRcbiAgKSB7XG4gICAgcHdkTGV2ZWwgKz0gMjtcbiAgfSBlbHNlIGlmIChcbiAgICBzZXR0aW5nc0FsbG93TG93ZXJjYXNlRWwuY2hlY2tlZCAmJlxuICAgIHNldHRpbmdzQWxsb3dOdW1iZXJzRWwuY2hlY2tlZCAmJlxuICAgIHNldHRpbmdzQWxsb3dVcHBlcmNhc2VFbC5jaGVja2VkICYmXG4gICAgIXNldHRpbmdzQWxsb3dTeW1ib2xzRWwuY2hlY2tlZFxuICApIHtcbiAgICBwd2RMZXZlbCArPSAzO1xuICB9IGVsc2Uge1xuICAgIHB3ZExldmVsICs9IDQ7XG4gIH1cblxuICBwd2RHZW5lcmF0ZWRTdHJlbmd0aEVsLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWRhbmdlcicsICdpcy13YXJuaW5nJywgJ2lzLWluZm8nLCAnaXMtc3VjY2VzcycpO1xuXG4gIGlmIChwd2RMZXZlbCA8IDMpIHtcbiAgICBwd2RHZW5lcmF0ZWRTdHJlbmd0aEVsLmNsYXNzTGlzdC5hZGQoJ2lzLWRhbmdlcicpO1xuICB9IGVsc2UgaWYgKHB3ZExldmVsIDwgNikge1xuICAgIHB3ZEdlbmVyYXRlZFN0cmVuZ3RoRWwuY2xhc3NMaXN0LmFkZCgnaXMtd2FybmluZycpO1xuICB9IGVsc2UgaWYgKHB3ZExldmVsIDwgOCkge1xuICAgIHB3ZEdlbmVyYXRlZFN0cmVuZ3RoRWwuY2xhc3NMaXN0LmFkZCgnaXMtaW5mbycpO1xuICB9IGVsc2Uge1xuICAgIHB3ZEdlbmVyYXRlZFN0cmVuZ3RoRWwuY2xhc3NMaXN0LmFkZCgnaXMtc3VjY2VzcycpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGJpbmRFdmVudHMoKSB7XG4gIHNldHRpbmdzUGFzc3dvcmRMZW5ndGhSYW5nZUVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICBzZXR0aW5nc1Bhc3N3b3JkTGVuZ3RoRWwudmFsdWUgPSBzZXR0aW5nc1Bhc3N3b3JkTGVuZ3RoUmFuZ2VFbC52YWx1ZTtcbiAgfSk7XG4gIHNldHRpbmdzUGFzc3dvcmRMZW5ndGhFbC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgc2V0dGluZ3NQYXNzd29yZExlbmd0aFJhbmdlRWwudmFsdWUgPSBzZXR0aW5nc1Bhc3N3b3JkTGVuZ3RoRWwudmFsdWU7XG4gIH0pO1xuXG4gIG5vdGlmaWNhdGlvbkRlbGV0ZUJ0bkVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIG5vdGlmaWNhdGlvbkVsLmNsYXNzTGlzdC5hZGQoJ2lzLWludmlzaWJsZScpO1xuICB9KTtcblxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWN0aW9uLXJlZG8nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBwd2RHZW5lcmF0ZWRFbC5pbm5lckhUTUwgPSBjcmVhdGVQYXNzd29yZCgpO1xuICAgIGNhbGN1bGF0ZVBhc3N3b3JkTGV2ZWwoKTtcbiAgfSk7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhY3Rpb24tY29weS10by1jbGlwYm9hcmQnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNvcHlUb0NsaXBib2FyZCk7XG5cbiAgZm9yIChsZXQgZWwgb2YgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc2V0dGluZy1lbGVtZW50JykpIHtcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB1cGRhdGVBdmFpbGFibGVDaGFycyk7XG4gIH1cblxuICBmb3IgKGxldCBlbCBvZiBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzZXR0aW5nLXB3ZC1tb2RlJykpIHtcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB1cGRhdGVTZXR0aW5ncyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaW5pdCgpIHtcbiAgY29uc29sZS5sb2coJ2luaXQnKTtcblxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2V0dGluZ3MtYWxsb3ctc3ltYm9scy1saXN0JykuaW5uZXJIVE1MID0gQXJyYXkuZnJvbShTUEVDSUFMX0NIQVJBQ1RFUlMpLm1hcCgoZWwpID0+XG4gICAgU3RyaW5nLmZyb21DaGFyQ29kZShlbClcbiAgKTtcblxuICAvLyBTaG93IGNvbnRlbnQgb25seSB3aGVuIHBhZ2UgaXMgbG9hZGVkXG4gIGRvY3VtZW50LmJvZHkuc3R5bGUgPSAnZGlzcGxheTogYXV0byc7XG5cbiAgLy8gYmluZGluZ1xuXG4gIGJpbmRFdmVudHMoKTtcblxuICB1cGRhdGVBdmFpbGFibGVDaGFycygpO1xuICBwd2RHZW5lcmF0ZWRFbC5pbm5lckhUTUwgPSBjcmVhdGVQYXNzd29yZCgpO1xuICBjYWxjdWxhdGVQYXNzd29yZExldmVsKCk7XG59XG5cbndpbmRvdy5vbmxvYWQgPSBpbml0O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9