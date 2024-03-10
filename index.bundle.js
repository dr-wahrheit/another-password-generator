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

#settings-password-length {
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
}`, "",{"version":3,"sources":["webpack://./src/styles/style.scss"],"names":[],"mappings":"AAOA;EACC,cANiB;EAOjB,mBATgB;EAUhB,kBAAA;AAND;;AASA;;EAEC,WAXW;EAYX,SAAA;EACA,UAAA;EACA,WAAA;EACA,YAAA;EACA,mCAAA;EACA,yBAAA;EACA,gBAAA;EACA,kBAAA;EACA,eAAA;EACA,yBAvBiB;EAwBjB,uBAAA;EACA,6BAAA;AAND;;AASA;;EAEC,cAAA;AAND;;AASA;EACC,kBAAA;AAND;;AASA;EACC,eAAA;EACA,MAAA;EACA,WAAA;EACA,yBAAA;EACA,UAAA;EACA,YAAA;EACA,yBAAA;EAEA,8CACC;AARF;AAWC;EACC,UAAA;AATF;;AAaA;EACC,kBAAA;EACA,WAAA;EACA,SAAA;EACA,2BAAA;EACA,4BAAA;EACA,8BAAA;EACA,+BAAA;EACA,cAAA;AAVD;;AAiDA;EACC,eAAA;EAEA,aAAA;EACA,mBAAA;EACA,qBAAA;EACA,8BAAA;AA/CD;AAiDC;EACC,aAAA;AA/CF;AAgDE;EACC,eAAA;EACA,cAnHY;AAqEf;AAgDG;EAEC,WApHQ;EAqHR,4BAAA;AA/CJ;AAoDC;EACC,cA7HgB;EA8HhB,mBAhIe;EAiIf,kBAAA;AAlDF;;AAsDA;EACC,WAAA;AAnDD;;AAsDA;EACC,yBA1IgB;EA2IhB,cAzIiB;EA0IjB,mBAAA;EACA,yBAAA;EACA,aAAA;AAnDD;AAsDC;EACC,cAhJgB;EAiJhB,mBAlJa;EAmJb,kBAAA;AApDF;AAuDC;;EAEC,WArJU;AAgGZ;;AA0DA;EACC,6BAAA;EACA,yBAAA;AAvDD;;AA0DA;EACC,cAAA;AAvDD","sourcesContent":["$secondaryColor: #ffa445;\n$primaryColor: #485fc7;\n$backgroundColor: #ffffff;\n\n$textColor: #444;\n$linkColor: $primaryColor;\n\n::selection {\n\tcolor: $backgroundColor;\n\tbackground: $secondaryColor;\n\tborder-radius: 4px;\n}\n\nhtml,\nbody {\n\tcolor: $textColor;\n\tmargin: 0;\n\tpadding: 0;\n\twidth: 100%;\n\theight: 100%;\n\tfont-family: \"Kode Mono\", monospace;\n\tfont-optical-sizing: auto;\n\tfont-weight: 400;\n\tfont-style: normal;\n\tfont-size: 16px;\n\tbackground-color: $backgroundColor;\n\tscroll-behavior: smooth;\n\tscroll-snap-type: y mandatory;\n}\n\n.title,\n.subtitle {\n\tcolor: inherit;\n}\n\n.section {\n\tpadding: 2rem 2rem;\n}\n\n.notification {\n\tposition: fixed;\n\ttop: 0;\n\twidth: 100%;\n\tbackground-color: #ffe645;\n\topacity: 1;\n\tz-index: 100;\n\tbox-shadow: 0 0 10px $textColor;\n\n\ttransition:\n\t\tvisibility 0s,\n\t\topacity 0.3s linear;\n\n\t&.is-invisible {\n\t\topacity: 0;\n\t}\n}\n\n#pwd-strength {\n\tposition: absolute;\n\tbottom: 0px;\n\tleft: 0px;\n\tborder-top-left-radius: 0px;\n\tborder-top-right-radius: 0px;\n\tborder-bottom-left-radius: 6px;\n\tborder-bottom-right-radius: 6px;\n\theight: 0.5rem;\n\n\t// &.is-danger {\n\t// \t&::-webkit-progress-value {\n\t// \t\tbackground-color: greenyellow;\n\t// \t}\n\t// \t&::-moz-progress-bar {\n\t// \t\tbackground-color: greenyellow;\n\t// \t}\n\t// \t&::-ms-fill {\n\t// \t\tbackground-color: greenyellow;\n\t// \t}\n\t// }\n\n\t// &.is-warning {\n\t// \t&::-webkit-progress-value {\n\t// \t\tbackground-color: greenyellow;\n\t// \t}\n\t// \t&::-moz-progress-bar {\n\t// \t\tbackground-color: greenyellow;\n\t// \t}\n\t// \t&::-ms-fill {\n\t// \t\tbackground-color: greenyellow;\n\t// \t}\n\t// }\n\n\t// &.is-success {\n\t// \t&::-webkit-progress-value {\n\t// \t\tbackground-color: greenyellow;\n\t// \t}\n\t// \t&::-moz-progress-bar {\n\t// \t\tbackground-color: greenyellow;\n\t// \t}\n\t// \t&::-ms-fill {\n\t// \t\tbackground-color: greenyellow;\n\t// \t}\n\t// }\n}\n\n.pwd-container {\n\tfont-size: 2rem;\n\t// border-bottom: 5px solid green;\n\tdisplay: flex;\n\tflex-direction: row;\n\talign-items: baseline;\n\tjustify-content: space-between;\n\n\t.actions {\n\t\tdisplay: flex;\n\t\t.action {\n\t\t\tpadding: 0 1rem;\n\t\t\tcolor: $linkColor;\n\n\t\t\t&:hover {\n\t\t\t\t// color: lighten($color: $secondaryColor, $amount: 20);\n\t\t\t\tcolor: $textColor;\n\t\t\t\ttext-shadow: 0 0 5px $secondaryColor;\n\t\t\t}\n\t\t}\n\t}\n\n\t::selection {\n\t\tcolor: $backgroundColor;\n\t\tbackground: $secondaryColor;\n\t\tborder-radius: 4px;\n\t}\n}\n\n#settings-password-length {\n\twidth: 100%;\n}\n\n.settings-container {\n\tbackground-color: $secondaryColor;\n\tcolor: $backgroundColor;\n\tborder-radius: 10px;\n\tborder: 2px solid $primaryColor;\n\tpadding: 1rem;\n\t// box-shadow: 0 2px 10px $primaryColor;\n\n\t::selection {\n\t\tcolor: $backgroundColor;\n\t\tbackground: $primaryColor;\n\t\tborder-radius: 4px;\n\t}\n\n\t.checkbox:hover,\n\t.radio:hover {\n\t\tcolor: $textColor;\n\t\t// text-shadow: 0 0 5px $backgroundColor;\n\t}\n}\n\n.footer {\n\tborder-top: 2px solid #245494;\n\tbackground-color: #7ca7df;\n}\n\n.is-owerflow-auto {\n\toverflow: auto;\n}\n"],"sourceRoot":""}]);
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

  const passwordLength = getPasswordLength(settingsPasswordLengthEl);
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
  const pwdLength = getPasswordLength(settingsPasswordLengthEl);
  if (pwdLength < 8) {
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
  settingsPasswordLengthEl.addEventListener('change', () => {
    document.getElementById('settings-password-length-display').innerHTML = settingsPasswordLengthEl.value;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Fub3RoZXItcGFzc3dvcmQtZ2VuZXJhdG9yLy4vc3JjL3N0eWxlcy9zdHlsZS5zY3NzIiwid2VicGFjazovL2Fub3RoZXItcGFzc3dvcmQtZ2VuZXJhdG9yLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9hbm90aGVyLXBhc3N3b3JkLWdlbmVyYXRvci8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2Fub3RoZXItcGFzc3dvcmQtZ2VuZXJhdG9yLy4vc3JjL3N0eWxlcy9zdHlsZS5zY3NzP2U1ZDgiLCJ3ZWJwYWNrOi8vYW5vdGhlci1wYXNzd29yZC1nZW5lcmF0b3IvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYW5vdGhlci1wYXNzd29yZC1nZW5lcmF0b3IvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2Fub3RoZXItcGFzc3dvcmQtZ2VuZXJhdG9yLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2Fub3RoZXItcGFzc3dvcmQtZ2VuZXJhdG9yLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2Fub3RoZXItcGFzc3dvcmQtZ2VuZXJhdG9yLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYW5vdGhlci1wYXNzd29yZC1nZW5lcmF0b3IvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9hbm90aGVyLXBhc3N3b3JkLWdlbmVyYXRvci8uL3NyYy9zY3JpcHRzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6OnNlbGVjdGlvbiB7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBiYWNrZ3JvdW5kOiAjZmZhNDQ1O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbmh0bWwsXG5ib2R5IHtcbiAgY29sb3I6ICM0NDQ7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZm9udC1mYW1pbHk6IFwiS29kZSBNb25vXCIsIG1vbm9zcGFjZTtcbiAgZm9udC1vcHRpY2FsLXNpemluZzogYXV0bztcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xuICBzY3JvbGwtc25hcC10eXBlOiB5IG1hbmRhdG9yeTtcbn1cblxuLnRpdGxlLFxuLnN1YnRpdGxlIHtcbiAgY29sb3I6IGluaGVyaXQ7XG59XG5cbi5zZWN0aW9uIHtcbiAgcGFkZGluZzogMnJlbSAycmVtO1xufVxuXG4ubm90aWZpY2F0aW9uIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlNjQ1O1xuICBvcGFjaXR5OiAxO1xuICB6LWluZGV4OiAxMDA7XG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4ICM0NDQ7XG4gIHRyYW5zaXRpb246IHZpc2liaWxpdHkgMHMsIG9wYWNpdHkgMC4zcyBsaW5lYXI7XG59XG4ubm90aWZpY2F0aW9uLmlzLWludmlzaWJsZSB7XG4gIG9wYWNpdHk6IDA7XG59XG5cbiNwd2Qtc3RyZW5ndGgge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMHB4O1xuICBsZWZ0OiAwcHg7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDBweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDBweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNnB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNnB4O1xuICBoZWlnaHQ6IDAuNXJlbTtcbn1cblxuLnB3ZC1jb250YWluZXIge1xuICBmb250LXNpemU6IDJyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLnB3ZC1jb250YWluZXIgLmFjdGlvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLnB3ZC1jb250YWluZXIgLmFjdGlvbnMgLmFjdGlvbiB7XG4gIHBhZGRpbmc6IDAgMXJlbTtcbiAgY29sb3I6ICM0ODVmYzc7XG59XG4ucHdkLWNvbnRhaW5lciAuYWN0aW9ucyAuYWN0aW9uOmhvdmVyIHtcbiAgY29sb3I6ICM0NDQ7XG4gIHRleHQtc2hhZG93OiAwIDAgNXB4ICNmZmE0NDU7XG59XG4ucHdkLWNvbnRhaW5lciA6OnNlbGVjdGlvbiB7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBiYWNrZ3JvdW5kOiAjZmZhNDQ1O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbiNzZXR0aW5ncy1wYXNzd29yZC1sZW5ndGgge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnNldHRpbmdzLWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmE0NDU7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCAjNDg1ZmM3O1xuICBwYWRkaW5nOiAxcmVtO1xufVxuLnNldHRpbmdzLWNvbnRhaW5lciA6OnNlbGVjdGlvbiB7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBiYWNrZ3JvdW5kOiAjNDg1ZmM3O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG4uc2V0dGluZ3MtY29udGFpbmVyIC5jaGVja2JveDpob3Zlcixcbi5zZXR0aW5ncy1jb250YWluZXIgLnJhZGlvOmhvdmVyIHtcbiAgY29sb3I6ICM0NDQ7XG59XG5cbi5mb290ZXIge1xuICBib3JkZXItdG9wOiAycHggc29saWQgIzI0NTQ5NDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzdjYTdkZjtcbn1cblxuLmlzLW93ZXJmbG93LWF1dG8ge1xuICBvdmVyZmxvdzogYXV0bztcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc3R5bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFPQTtFQUNDLGNBTmlCO0VBT2pCLG1CQVRnQjtFQVVoQixrQkFBQTtBQU5EOztBQVNBOztFQUVDLFdBWFc7RUFZWCxTQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUNBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EseUJBdkJpQjtFQXdCakIsdUJBQUE7RUFDQSw2QkFBQTtBQU5EOztBQVNBOztFQUVDLGNBQUE7QUFORDs7QUFTQTtFQUNDLGtCQUFBO0FBTkQ7O0FBU0E7RUFDQyxlQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFFQSw4Q0FDQztBQVJGO0FBV0M7RUFDQyxVQUFBO0FBVEY7O0FBYUE7RUFDQyxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLDhCQUFBO0VBQ0EsK0JBQUE7RUFDQSxjQUFBO0FBVkQ7O0FBaURBO0VBQ0MsZUFBQTtFQUVBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsOEJBQUE7QUEvQ0Q7QUFpREM7RUFDQyxhQUFBO0FBL0NGO0FBZ0RFO0VBQ0MsZUFBQTtFQUNBLGNBbkhZO0FBcUVmO0FBZ0RHO0VBRUMsV0FwSFE7RUFxSFIsNEJBQUE7QUEvQ0o7QUFvREM7RUFDQyxjQTdIZ0I7RUE4SGhCLG1CQWhJZTtFQWlJZixrQkFBQTtBQWxERjs7QUFzREE7RUFDQyxXQUFBO0FBbkREOztBQXNEQTtFQUNDLHlCQTFJZ0I7RUEySWhCLGNBeklpQjtFQTBJakIsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7QUFuREQ7QUFzREM7RUFDQyxjQWhKZ0I7RUFpSmhCLG1CQWxKYTtFQW1KYixrQkFBQTtBQXBERjtBQXVEQzs7RUFFQyxXQXJKVTtBQWdHWjs7QUEwREE7RUFDQyw2QkFBQTtFQUNBLHlCQUFBO0FBdkREOztBQTBEQTtFQUNDLGNBQUE7QUF2RERcIixcInNvdXJjZXNDb250ZW50XCI6W1wiJHNlY29uZGFyeUNvbG9yOiAjZmZhNDQ1O1xcbiRwcmltYXJ5Q29sb3I6ICM0ODVmYzc7XFxuJGJhY2tncm91bmRDb2xvcjogI2ZmZmZmZjtcXG5cXG4kdGV4dENvbG9yOiAjNDQ0O1xcbiRsaW5rQ29sb3I6ICRwcmltYXJ5Q29sb3I7XFxuXFxuOjpzZWxlY3Rpb24ge1xcblxcdGNvbG9yOiAkYmFja2dyb3VuZENvbG9yO1xcblxcdGJhY2tncm91bmQ6ICRzZWNvbmRhcnlDb2xvcjtcXG5cXHRib3JkZXItcmFkaXVzOiA0cHg7XFxufVxcblxcbmh0bWwsXFxuYm9keSB7XFxuXFx0Y29sb3I6ICR0ZXh0Q29sb3I7XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0aGVpZ2h0OiAxMDAlO1xcblxcdGZvbnQtZmFtaWx5OiBcXFwiS29kZSBNb25vXFxcIiwgbW9ub3NwYWNlO1xcblxcdGZvbnQtb3B0aWNhbC1zaXppbmc6IGF1dG87XFxuXFx0Zm9udC13ZWlnaHQ6IDQwMDtcXG5cXHRmb250LXN0eWxlOiBub3JtYWw7XFxuXFx0Zm9udC1zaXplOiAxNnB4O1xcblxcdGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kQ29sb3I7XFxuXFx0c2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XFxuXFx0c2Nyb2xsLXNuYXAtdHlwZTogeSBtYW5kYXRvcnk7XFxufVxcblxcbi50aXRsZSxcXG4uc3VidGl0bGUge1xcblxcdGNvbG9yOiBpbmhlcml0O1xcbn1cXG5cXG4uc2VjdGlvbiB7XFxuXFx0cGFkZGluZzogMnJlbSAycmVtO1xcbn1cXG5cXG4ubm90aWZpY2F0aW9uIHtcXG5cXHRwb3NpdGlvbjogZml4ZWQ7XFxuXFx0dG9wOiAwO1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGJhY2tncm91bmQtY29sb3I6ICNmZmU2NDU7XFxuXFx0b3BhY2l0eTogMTtcXG5cXHR6LWluZGV4OiAxMDA7XFxuXFx0Ym94LXNoYWRvdzogMCAwIDEwcHggJHRleHRDb2xvcjtcXG5cXG5cXHR0cmFuc2l0aW9uOlxcblxcdFxcdHZpc2liaWxpdHkgMHMsXFxuXFx0XFx0b3BhY2l0eSAwLjNzIGxpbmVhcjtcXG5cXG5cXHQmLmlzLWludmlzaWJsZSB7XFxuXFx0XFx0b3BhY2l0eTogMDtcXG5cXHR9XFxufVxcblxcbiNwd2Qtc3RyZW5ndGgge1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHRib3R0b206IDBweDtcXG5cXHRsZWZ0OiAwcHg7XFxuXFx0Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMHB4O1xcblxcdGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwcHg7XFxuXFx0Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNnB4O1xcblxcdGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA2cHg7XFxuXFx0aGVpZ2h0OiAwLjVyZW07XFxuXFxuXFx0Ly8gJi5pcy1kYW5nZXIge1xcblxcdC8vIFxcdCY6Oi13ZWJraXQtcHJvZ3Jlc3MtdmFsdWUge1xcblxcdC8vIFxcdFxcdGJhY2tncm91bmQtY29sb3I6IGdyZWVueWVsbG93O1xcblxcdC8vIFxcdH1cXG5cXHQvLyBcXHQmOjotbW96LXByb2dyZXNzLWJhciB7XFxuXFx0Ly8gXFx0XFx0YmFja2dyb3VuZC1jb2xvcjogZ3JlZW55ZWxsb3c7XFxuXFx0Ly8gXFx0fVxcblxcdC8vIFxcdCY6Oi1tcy1maWxsIHtcXG5cXHQvLyBcXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbnllbGxvdztcXG5cXHQvLyBcXHR9XFxuXFx0Ly8gfVxcblxcblxcdC8vICYuaXMtd2FybmluZyB7XFxuXFx0Ly8gXFx0Jjo6LXdlYmtpdC1wcm9ncmVzcy12YWx1ZSB7XFxuXFx0Ly8gXFx0XFx0YmFja2dyb3VuZC1jb2xvcjogZ3JlZW55ZWxsb3c7XFxuXFx0Ly8gXFx0fVxcblxcdC8vIFxcdCY6Oi1tb3otcHJvZ3Jlc3MtYmFyIHtcXG5cXHQvLyBcXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbnllbGxvdztcXG5cXHQvLyBcXHR9XFxuXFx0Ly8gXFx0Jjo6LW1zLWZpbGwge1xcblxcdC8vIFxcdFxcdGJhY2tncm91bmQtY29sb3I6IGdyZWVueWVsbG93O1xcblxcdC8vIFxcdH1cXG5cXHQvLyB9XFxuXFxuXFx0Ly8gJi5pcy1zdWNjZXNzIHtcXG5cXHQvLyBcXHQmOjotd2Via2l0LXByb2dyZXNzLXZhbHVlIHtcXG5cXHQvLyBcXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbnllbGxvdztcXG5cXHQvLyBcXHR9XFxuXFx0Ly8gXFx0Jjo6LW1vei1wcm9ncmVzcy1iYXIge1xcblxcdC8vIFxcdFxcdGJhY2tncm91bmQtY29sb3I6IGdyZWVueWVsbG93O1xcblxcdC8vIFxcdH1cXG5cXHQvLyBcXHQmOjotbXMtZmlsbCB7XFxuXFx0Ly8gXFx0XFx0YmFja2dyb3VuZC1jb2xvcjogZ3JlZW55ZWxsb3c7XFxuXFx0Ly8gXFx0fVxcblxcdC8vIH1cXG59XFxuXFxuLnB3ZC1jb250YWluZXIge1xcblxcdGZvbnQtc2l6ZTogMnJlbTtcXG5cXHQvLyBib3JkZXItYm90dG9tOiA1cHggc29saWQgZ3JlZW47XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogcm93O1xcblxcdGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFxuXFx0LmFjdGlvbnMge1xcblxcdFxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0XFx0LmFjdGlvbiB7XFxuXFx0XFx0XFx0cGFkZGluZzogMCAxcmVtO1xcblxcdFxcdFxcdGNvbG9yOiAkbGlua0NvbG9yO1xcblxcblxcdFxcdFxcdCY6aG92ZXIge1xcblxcdFxcdFxcdFxcdC8vIGNvbG9yOiBsaWdodGVuKCRjb2xvcjogJHNlY29uZGFyeUNvbG9yLCAkYW1vdW50OiAyMCk7XFxuXFx0XFx0XFx0XFx0Y29sb3I6ICR0ZXh0Q29sb3I7XFxuXFx0XFx0XFx0XFx0dGV4dC1zaGFkb3c6IDAgMCA1cHggJHNlY29uZGFyeUNvbG9yO1xcblxcdFxcdFxcdH1cXG5cXHRcXHR9XFxuXFx0fVxcblxcblxcdDo6c2VsZWN0aW9uIHtcXG5cXHRcXHRjb2xvcjogJGJhY2tncm91bmRDb2xvcjtcXG5cXHRcXHRiYWNrZ3JvdW5kOiAkc2Vjb25kYXJ5Q29sb3I7XFxuXFx0XFx0Ym9yZGVyLXJhZGl1czogNHB4O1xcblxcdH1cXG59XFxuXFxuI3NldHRpbmdzLXBhc3N3b3JkLWxlbmd0aCB7XFxuXFx0d2lkdGg6IDEwMCU7XFxufVxcblxcbi5zZXR0aW5ncy1jb250YWluZXIge1xcblxcdGJhY2tncm91bmQtY29sb3I6ICRzZWNvbmRhcnlDb2xvcjtcXG5cXHRjb2xvcjogJGJhY2tncm91bmRDb2xvcjtcXG5cXHRib3JkZXItcmFkaXVzOiAxMHB4O1xcblxcdGJvcmRlcjogMnB4IHNvbGlkICRwcmltYXJ5Q29sb3I7XFxuXFx0cGFkZGluZzogMXJlbTtcXG5cXHQvLyBib3gtc2hhZG93OiAwIDJweCAxMHB4ICRwcmltYXJ5Q29sb3I7XFxuXFxuXFx0OjpzZWxlY3Rpb24ge1xcblxcdFxcdGNvbG9yOiAkYmFja2dyb3VuZENvbG9yO1xcblxcdFxcdGJhY2tncm91bmQ6ICRwcmltYXJ5Q29sb3I7XFxuXFx0XFx0Ym9yZGVyLXJhZGl1czogNHB4O1xcblxcdH1cXG5cXG5cXHQuY2hlY2tib3g6aG92ZXIsXFxuXFx0LnJhZGlvOmhvdmVyIHtcXG5cXHRcXHRjb2xvcjogJHRleHRDb2xvcjtcXG5cXHRcXHQvLyB0ZXh0LXNoYWRvdzogMCAwIDVweCAkYmFja2dyb3VuZENvbG9yO1xcblxcdH1cXG59XFxuXFxuLmZvb3RlciB7XFxuXFx0Ym9yZGVyLXRvcDogMnB4IHNvbGlkICMyNDU0OTQ7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzdjYTdkZjtcXG59XFxuXFxuLmlzLW93ZXJmbG93LWF1dG8ge1xcblxcdG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIGxvYWQgc3R5bGVzXG5pbXBvcnQgJy4uL3N0eWxlcy9zdHlsZS5zY3NzJztcblxuLy8gbG9hZCBpbWFnZXNcbmltcG9ydCBmYXZpY29uSWNvIGZyb20gJy4uL2ltYWdlcy9mYXZpY29uLmljbyc7XG5pbXBvcnQgZmF2aWNvbkltYWdlIGZyb20gJy4uL2ltYWdlcy9mYXZpY29uLnBuZyc7XG5cbmNsYXNzIFBhc3N3b3JkIHtcbiAgI2V4Y2x1ZGVEdXBsaWNhdGVzO1xuICAjY2hhcnM7XG4gICNsZW5ndGggPSAwO1xuICBjb25zdHJ1Y3RvcihleGNsdWRlRHVwbGljYXRlcykge1xuICAgIHRoaXMuI2V4Y2x1ZGVEdXBsaWNhdGVzID0gZXhjbHVkZUR1cGxpY2F0ZXM7XG4gICAgdGhpcy4jY2hhcnMgPSB0aGlzLiNleGNsdWRlRHVwbGljYXRlcyA/IG5ldyBTZXQoKSA6IFtdO1xuICB9XG5cbiAgYWRkQ2hhcihjaGFyKSB7XG4gICAgaWYgKHRoaXMuI2V4Y2x1ZGVEdXBsaWNhdGVzKSB7XG4gICAgICB0aGlzLiNjaGFycy5hZGQoY2hhcik7XG4gICAgICB0aGlzLiNsZW5ndGggPSB0aGlzLiNjaGFycy5zaXplO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLiNjaGFycy5wdXNoKGNoYXIpO1xuICAgICAgdGhpcy4jbGVuZ3RoKys7XG4gICAgfVxuICB9XG5cbiAgZ2V0IGxlbmd0aCgpIHtcbiAgICByZXR1cm4gdGhpcy4jbGVuZ3RoO1xuICB9XG5cbiAgdG9TdHJpbmcoKSB7XG4gICAgaWYgKHRoaXMuI2V4Y2x1ZGVEdXBsaWNhdGVzKSB7XG4gICAgICByZXR1cm4gQXJyYXkuZnJvbSh0aGlzLiNjaGFycykuam9pbignJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLiNjaGFycy5qb2luKCcnKTtcbiAgICB9XG4gIH1cblxuICBjbGVhcigpIHtcbiAgICBpZiAodGhpcy4jZXhjbHVkZUR1cGxpY2F0ZXMpIHtcbiAgICAgIHRoaXMuI2NoYXJzLmNsZWFyKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIHRoaXMuI2NoYXJzLmZpbGwoMCk7XG4gICAgICB0aGlzLiNjaGFycy5sZW5ndGggPSAwO1xuICAgIH1cbiAgICB0aGlzLiNsZW5ndGggPSAwO1xuICB9XG59XG5cbmNvbnN0IE5VTUJFUlMgPSBuZXcgVWludDhBcnJheShbNDgsIDQ5LCA1MCwgNTEsIDUyLCA1MywgNTQsIDU1LCA1NiwgNTddKTtcbmNvbnN0IExPV0VSQ0FTRSA9IG5ldyBVaW50OEFycmF5KFtcbiAgOTcsIDk4LCA5OSwgMTAwLCAxMDEsIDEwMiwgMTAzLCAxMDQsIDEwNSwgMTA2LCAxMDcsIDEwOCwgMTA5LCAxMTAsIDExMSwgMTEyLCAxMTMsIDExNCwgMTE1LCAxMTYsIDExNywgMTE4LCAxMTksIDEyMCxcbiAgMTIxLCAxMjIsXG5dKTtcbmNvbnN0IFVQUEVSQ0FTRSA9IG5ldyBVaW50OEFycmF5KFtcbiAgNjUsIDY2LCA2NywgNjgsIDY5LCA3MCwgNzEsIDcyLCA3MywgNzQsIDc1LCA3NiwgNzcsIDc4LCA3OSwgODAsIDgxLCA4MiwgODMsIDg0LCA4NSwgODYsIDg3LCA4OCwgODksIDkwLFxuXSk7XG5jb25zdCBTUEVDSUFMX0NIQVJBQ1RFUlMgPSBuZXcgVWludDhBcnJheShbMzMsIDM1LCAzNiwgMzcsIDM4LCA0MCwgNDEsIDQyLCA0MywgNjQsIDk0XSk7XG5jb25zdCBTSU1JTEFSX0NIQVJTID0ge1xuICAwOiBbNDgsIDc5LCAxMTEsIDczLCAxMDVdLCAvLyAwLCBPLCBsLCBJXG4gIDE6IFs0OSwgNzYsIDEwOF0sIC8vIDEsIGwsIElcbiAgNTogWzUzLCA4MywgMTE1LCA1NiwgODhdLCAvLyA1LCBTLCBzLCA4LCBCXG4gIDY6IFs1NCwgNjYsIDk4XSwgLy8gNiwgYiwgQlxuICA4OiBbNTYsIDY2LCA5OF0sIC8vIDgsIEIsIGJcbiAgOTogWzU3LCA3MSwgMTAzLCA1NCwgNjZdLCAvLyA5LCBnLCBHLCA2LCBiXG4gIGE6IFs5NywgNjQsIDY1XSwgLy8gYSwgQCwgQVxuICBlOiBbMTAxLCA2NywgOTldLCAvLyBlLCBjLCBDXG4gIGc6IFsxMDMsIDgxLCAxMTMsIDU3XSwgLy8gZywgcSwgUSwgOVxuICBsOiBbMTA4LCA0OSwgNzMsIDEwNV0sIC8vIGwsIDEsIEksIGlcbiAgbzogWzExMSwgNDgsIDc5LCA5NywgNjVdLCAvLyBvLCAwLCBPLCBhLCBBXG4gIHM6IFsxMTUsIDUzLCA4M10sIC8vIHMsIDUsIFNcbiAgdDogWzExNiwgNTUsIDg0XSwgLy8gdCwgNywgVFxuICB6OiBbMTIyLCA1MF0sIC8vIHosIDJcbn07XG5cbmxldCBhdmFpbGFibGVDaGFycyA9IFtdO1xuXG5jb25zdCBwd2RHZW5lcmF0ZWRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwd2QtZ2VuZXJhdGVkJyk7XG5jb25zdCBub3RpZmljYXRpb25FbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdub3RpZmljYXRpb24nKTtcbmNvbnN0IG5vdGlmaWNhdGlvbkRlbGV0ZUJ0bkVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5vdGlmaWNhdGlvbiBidXR0b24uZGVsZXRlJyk7XG5jb25zdCBzZXR0aW5nc1Bhc3N3b3JkTGVuZ3RoRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2V0dGluZ3MtcGFzc3dvcmQtbGVuZ3RoJyk7XG5jb25zdCBwd2RHZW5lcmF0ZWRTdHJlbmd0aEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3B3ZC1zdHJlbmd0aCcpO1xuY29uc3Qgc2V0dGluZ3NBbGxvd051bWJlcnNFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZXR0aW5ncy1hbGxvdy1udW1iZXJzJyk7XG5jb25zdCBzZXR0aW5nc0FsbG93VXBwZXJjYXNlRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2V0dGluZ3MtYWxsb3ctdXBwZXJjYXNlJyk7XG5jb25zdCBzZXR0aW5nc0FsbG93TG93ZXJjYXNlRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2V0dGluZ3MtYWxsb3ctbG93ZXJjYXNlJyk7XG5jb25zdCBzZXR0aW5nc0FsbG93U3ltYm9sc0VsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NldHRpbmdzLWFsbG93LXN5bWJvbHMnKTtcbmNvbnN0IHNldHRpbmdzRXhjbHVkZUR1cGxpY2F0ZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NldHRpbmdzLWV4Y2x1ZGUtZHVwbGljYXRlLWNoYXJhY3RlcnMnKTtcbmNvbnN0IHNldHRpbmdzRXhjbHVkZVNpbWlsYXJFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZXR0aW5ncy1leGNsdWRlLXNpbWlsYXItY2hhcmFjdGVycycpO1xuXG5mdW5jdGlvbiBpc1NpbWlsYXJDaGFyRXhjbHVkZWQoY2hhcikge1xuICBjb25zdCBzaW1pbGFyR3JvdXAgPSBTSU1JTEFSX0NIQVJTW2NoYXJdO1xuICByZXR1cm4gISFzaW1pbGFyR3JvdXAgJiYgc2V0dGluZ3NFeGNsdWRlU2ltaWxhckVsLmNoZWNrZWQgJiYgYXZhaWxhYmxlQ2hhcnMuc29tZSgoZWwpID0+IHNpbWlsYXJHcm91cC5pbmNsdWRlcyhlbCkpO1xufVxuXG5mdW5jdGlvbiBnZXRQYXNzd29yZExlbmd0aChzZXR0aW5nc1Bhc3N3b3JkTGVuZ3RoKSB7XG4gIGNvbnN0IGxlbmd0aCA9IHNldHRpbmdzUGFzc3dvcmRMZW5ndGgudmFsdWU7XG4gIHRyeSB7XG4gICAgcmV0dXJuIHBhcnNlSW50KGxlbmd0aCB8fCBzZXR0aW5nc1Bhc3N3b3JkTGVuZ3RoLmdldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInKSk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjb25zb2xlLmxvZygnZXJyb3InLCBlKTtcbiAgfVxuICByZXR1cm4gMDtcbn1cblxuLy8gVXBkYXRlIGF2YWlsYWJsZUNoYXJzIGJhc2VkIG9uIHNldHRpbmdzIGR1cmluZyBpbml0aWFsaXphdGlvblxuZnVuY3Rpb24gdXBkYXRlQXZhaWxhYmxlQ2hhcnMoKSB7XG4gIGNvbnNvbGUudGltZSgndXBkYXRlQXZhaWxhYmxlQ2hhcnMnKTtcbiAgYXZhaWxhYmxlQ2hhcnMgPSBbXG4gICAgLi4uKHNldHRpbmdzQWxsb3dOdW1iZXJzRWwuY2hlY2tlZCA/IE5VTUJFUlMgOiBbXSksXG4gICAgLi4uKHNldHRpbmdzQWxsb3dVcHBlcmNhc2VFbC5jaGVja2VkID8gVVBQRVJDQVNFIDogW10pLFxuICAgIC4uLihzZXR0aW5nc0FsbG93TG93ZXJjYXNlRWwuY2hlY2tlZCA/IExPV0VSQ0FTRSA6IFtdKSxcbiAgICAuLi4oc2V0dGluZ3NBbGxvd1N5bWJvbHNFbC5jaGVja2VkID8gU1BFQ0lBTF9DSEFSQUNURVJTIDogW10pLFxuICBdO1xuICBjb25zb2xlLnRpbWVFbmQoJ3VwZGF0ZUF2YWlsYWJsZUNoYXJzJyk7XG59XG5cbmZ1bmN0aW9uIHNob3dOb3RpZmljYXRpb24oKSB7XG4gIG5vdGlmaWNhdGlvbkVsLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWludmlzaWJsZScpO1xuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBub3RpZmljYXRpb25FbC5jbGFzc0xpc3QuYWRkKCdpcy1pbnZpc2libGUnKTtcbiAgfSwgMzAwMCk7XG59XG5cbmZ1bmN0aW9uIGNvcHlUb0NsaXBib2FyZCgpIHtcbiAgY29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICBlbC5zdHlsZS52aXNpYmlsaXR5ID0gJ25vbmUnO1xuICBlbC52YWx1ZSA9IHB3ZEdlbmVyYXRlZEVsLmlubmVyVGV4dDtcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChlbCk7XG4gIGVsLnNlbGVjdCgpO1xuICBkb2N1bWVudC5leGVjQ29tbWFuZCgnY29weScpO1xuICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGVsKTtcbiAgc2hvd05vdGlmaWNhdGlvbigpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVQYXNzd29yZCgpIHtcbiAgaWYgKGF2YWlsYWJsZUNoYXJzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIGNvbnNvbGUudGltZSgnY3JlYXRlUGFzc3dvcmQnKTtcblxuICBjb25zdCBwYXNzd29yZExlbmd0aCA9IGdldFBhc3N3b3JkTGVuZ3RoKHNldHRpbmdzUGFzc3dvcmRMZW5ndGhFbCk7XG4gIGNvbnN0IGluZGV4ZXMgPSBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKG5ldyBVaW50MzJBcnJheShhdmFpbGFibGVDaGFycy5sZW5ndGgpKTtcbiAgY29uc3QgcGFzc3dvcmQgPSBuZXcgUGFzc3dvcmQoc2V0dGluZ3NFeGNsdWRlRHVwbGljYXRlRWwuY2hlY2tlZCk7XG5cbiAgY29uc3QgbWF4UGFzc3dvcmRMZW5ndGggPSBzZXR0aW5nc0V4Y2x1ZGVEdXBsaWNhdGVFbC5jaGVja2VkXG4gICAgPyBNYXRoLm1pbihwYXNzd29yZExlbmd0aCwgYXZhaWxhYmxlQ2hhcnMubGVuZ3RoKVxuICAgIDogcGFzc3dvcmRMZW5ndGg7XG5cbiAgbGV0IGxvb3AgPSAwO1xuICB3aGlsZSAocGFzc3dvcmQubGVuZ3RoIDwgbWF4UGFzc3dvcmRMZW5ndGgpIHtcbiAgICBjb25zdCBpbmRleCA9IGluZGV4ZXNbbG9vcCAlIGluZGV4ZXMubGVuZ3RoXSAlIGF2YWlsYWJsZUNoYXJzLmxlbmd0aDtcbiAgICBjb25zdCBjaGFyID0gU3RyaW5nLmZyb21DaGFyQ29kZShhdmFpbGFibGVDaGFyc1tpbmRleF0pO1xuXG4gICAgaWYgKCFpc1NpbWlsYXJDaGFyRXhjbHVkZWQoY2hhcikpIHtcbiAgICAgIHBhc3N3b3JkLmFkZENoYXIoY2hhcik7XG4gICAgfVxuICAgIGxvb3ArKztcbiAgfVxuXG4gIGNvbnN0IHBhc3N3b3JkQXNTdHJpbmcgPSBwYXNzd29yZC50b1N0cmluZygpO1xuXG4gIC8vIENsZWFyIHBhc3N3b3JkIGluIG1lbW9yeVxuICBwYXNzd29yZC5jbGVhcigpO1xuXG4gIGNvbnNvbGUudGltZUVuZCgnY3JlYXRlUGFzc3dvcmQnKTtcbiAgcmV0dXJuIHBhc3N3b3JkQXNTdHJpbmc7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVNldHRpbmdzKCkge1xuICBjb25zdCBwd2RNb2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cInB3ZC1tb2RlXCJdOmNoZWNrZWQnKS52YWx1ZTtcbiAgc3dpdGNoIChwd2RNb2RlKSB7XG4gICAgY2FzZSAnZWFzeS10by1yZWFkJzoge1xuICAgICAgc2V0dGluZ3NFeGNsdWRlU2ltaWxhckVsLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgc2V0dGluZ3NFeGNsdWRlRHVwbGljYXRlRWwuY2hlY2tlZCA9IGZhbHNlO1xuXG4gICAgICBzZXR0aW5nc0FsbG93TnVtYmVyc0VsLmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgIHNldHRpbmdzQWxsb3dVcHBlcmNhc2VFbC5jaGVja2VkID0gdHJ1ZTtcbiAgICAgIHNldHRpbmdzQWxsb3dMb3dlcmNhc2VFbC5jaGVja2VkID0gdHJ1ZTtcbiAgICAgIHNldHRpbmdzQWxsb3dTeW1ib2xzRWwuY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGNhc2UgJ2Vhc3ktdG8tc2F5Jzoge1xuICAgICAgc2V0dGluZ3NFeGNsdWRlU2ltaWxhckVsLmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgIHNldHRpbmdzRXhjbHVkZUR1cGxpY2F0ZUVsLmNoZWNrZWQgPSBmYWxzZTtcblxuICAgICAgc2V0dGluZ3NBbGxvd051bWJlcnNFbC5jaGVja2VkID0gZmFsc2U7XG4gICAgICBzZXR0aW5nc0FsbG93VXBwZXJjYXNlRWwuY2hlY2tlZCA9IHRydWU7XG4gICAgICBzZXR0aW5nc0FsbG93TG93ZXJjYXNlRWwuY2hlY2tlZCA9IHRydWU7XG4gICAgICBzZXR0aW5nc0FsbG93U3ltYm9sc0VsLmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBjYXNlICdhbGwtY2hhcmFjdGVycyc6XG4gICAgZGVmYXVsdDoge1xuICAgICAgc2V0dGluZ3NFeGNsdWRlU2ltaWxhckVsLmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgIHNldHRpbmdzRXhjbHVkZUR1cGxpY2F0ZUVsLmNoZWNrZWQgPSBmYWxzZTtcblxuICAgICAgc2V0dGluZ3NBbGxvd051bWJlcnNFbC5jaGVja2VkID0gdHJ1ZTtcbiAgICAgIHNldHRpbmdzQWxsb3dVcHBlcmNhc2VFbC5jaGVja2VkID0gdHJ1ZTtcbiAgICAgIHNldHRpbmdzQWxsb3dMb3dlcmNhc2VFbC5jaGVja2VkID0gdHJ1ZTtcbiAgICAgIHNldHRpbmdzQWxsb3dTeW1ib2xzRWwuY2hlY2tlZCA9IHRydWU7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgdXBkYXRlQXZhaWxhYmxlQ2hhcnMoKTtcbn1cblxuZnVuY3Rpb24gY2FsY3VsYXRlUGFzc3dvcmRMZXZlbCgpIHtcbiAgY29uc29sZS5sb2coJ2NhbGN1bGF0ZVBhc3N3b3JkTGV2ZWwnKTtcbiAgbGV0IHB3ZExldmVsID0gMDtcblxuICAvLyBNaW5pbXVtIFBhc3N3b3JkIExlbmd0aFxuICBjb25zdCBwd2RMZW5ndGggPSBnZXRQYXNzd29yZExlbmd0aChzZXR0aW5nc1Bhc3N3b3JkTGVuZ3RoRWwpO1xuICBpZiAocHdkTGVuZ3RoIDwgOCkge1xuICAgIHB3ZExldmVsICs9IDE7XG4gIH0gZWxzZSBpZiAocHdkTGVuZ3RoIDwgMTIpIHtcbiAgICBwd2RMZXZlbCArPSAyO1xuICB9IGVsc2UgaWYgKHB3ZExlbmd0aCA8IDE2KSB7XG4gICAgcHdkTGV2ZWwgKz0gMztcbiAgfSBlbHNlIHtcbiAgICBwd2RMZXZlbCArPSA0O1xuICB9XG5cbiAgLy8gQ2hhcmFjdGVyIFR5cGUgQ29tcGxleGl0eVxuICBpZiAoXG4gICAgc2V0dGluZ3NBbGxvd0xvd2VyY2FzZUVsLmNoZWNrZWQgJiZcbiAgICAhc2V0dGluZ3NBbGxvd051bWJlcnNFbC5jaGVja2VkICYmXG4gICAgIXNldHRpbmdzQWxsb3dVcHBlcmNhc2VFbC5jaGVja2VkICYmXG4gICAgIXNldHRpbmdzQWxsb3dTeW1ib2xzRWwuY2hlY2tlZFxuICApIHtcbiAgICBwd2RMZXZlbCArPSAxO1xuICB9IGVsc2UgaWYgKFxuICAgIHNldHRpbmdzQWxsb3dMb3dlcmNhc2VFbC5jaGVja2VkICYmXG4gICAgc2V0dGluZ3NBbGxvd051bWJlcnNFbC5jaGVja2VkICYmXG4gICAgIXNldHRpbmdzQWxsb3dVcHBlcmNhc2VFbC5jaGVja2VkICYmXG4gICAgIXNldHRpbmdzQWxsb3dTeW1ib2xzRWwuY2hlY2tlZFxuICApIHtcbiAgICBwd2RMZXZlbCArPSAyO1xuICB9IGVsc2UgaWYgKFxuICAgIHNldHRpbmdzQWxsb3dMb3dlcmNhc2VFbC5jaGVja2VkICYmXG4gICAgc2V0dGluZ3NBbGxvd051bWJlcnNFbC5jaGVja2VkICYmXG4gICAgc2V0dGluZ3NBbGxvd1VwcGVyY2FzZUVsLmNoZWNrZWQgJiZcbiAgICAhc2V0dGluZ3NBbGxvd1N5bWJvbHNFbC5jaGVja2VkXG4gICkge1xuICAgIHB3ZExldmVsICs9IDM7XG4gIH0gZWxzZSB7XG4gICAgcHdkTGV2ZWwgKz0gNDtcbiAgfVxuXG4gIHB3ZEdlbmVyYXRlZFN0cmVuZ3RoRWwuY2xhc3NMaXN0LnJlbW92ZSgnaXMtZGFuZ2VyJywgJ2lzLXdhcm5pbmcnLCAnaXMtaW5mbycsICdpcy1zdWNjZXNzJyk7XG4gIGlmIChwd2RMZXZlbCA8IDMpIHtcbiAgICBwd2RHZW5lcmF0ZWRTdHJlbmd0aEVsLmNsYXNzTGlzdC5hZGQoJ2lzLWRhbmdlcicpO1xuICB9IGVsc2UgaWYgKHB3ZExldmVsIDwgNikge1xuICAgIHB3ZEdlbmVyYXRlZFN0cmVuZ3RoRWwuY2xhc3NMaXN0LmFkZCgnaXMtd2FybmluZycpO1xuICB9IGVsc2UgaWYgKHB3ZExldmVsIDwgOCkge1xuICAgIHB3ZEdlbmVyYXRlZFN0cmVuZ3RoRWwuY2xhc3NMaXN0LmFkZCgnaXMtaW5mbycpO1xuICB9IGVsc2Uge1xuICAgIHB3ZEdlbmVyYXRlZFN0cmVuZ3RoRWwuY2xhc3NMaXN0LmFkZCgnaXMtc3VjY2VzcycpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGJpbmRFdmVudHMoKSB7XG4gIHNldHRpbmdzUGFzc3dvcmRMZW5ndGhFbC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NldHRpbmdzLXBhc3N3b3JkLWxlbmd0aC1kaXNwbGF5JykuaW5uZXJIVE1MID0gc2V0dGluZ3NQYXNzd29yZExlbmd0aEVsLnZhbHVlO1xuICB9KTtcblxuICBub3RpZmljYXRpb25EZWxldGVCdG5FbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBub3RpZmljYXRpb25FbC5jbGFzc0xpc3QuYWRkKCdpcy1pbnZpc2libGUnKTtcbiAgfSk7XG5cbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FjdGlvbi1yZWRvJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgcHdkR2VuZXJhdGVkRWwuaW5uZXJIVE1MID0gY3JlYXRlUGFzc3dvcmQoKTtcbiAgICBjYWxjdWxhdGVQYXNzd29yZExldmVsKCk7XG4gIH0pO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWN0aW9uLWNvcHktdG8tY2xpcGJvYXJkJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjb3B5VG9DbGlwYm9hcmQpO1xuXG4gIGZvciAobGV0IGVsIG9mIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3NldHRpbmctZWxlbWVudCcpKSB7XG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdXBkYXRlQXZhaWxhYmxlQ2hhcnMpO1xuICB9XG5cbiAgZm9yIChsZXQgZWwgb2YgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc2V0dGluZy1wd2QtbW9kZScpKSB7XG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdXBkYXRlU2V0dGluZ3MpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGluaXQoKSB7XG4gIGNvbnNvbGUubG9nKCdpbml0Jyk7XG5cbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NldHRpbmdzLWFsbG93LXN5bWJvbHMtbGlzdCcpLmlubmVySFRNTCA9IEFycmF5LmZyb20oU1BFQ0lBTF9DSEFSQUNURVJTKS5tYXAoKGVsKSA9PlxuICAgIFN0cmluZy5mcm9tQ2hhckNvZGUoZWwpXG4gICk7XG5cbiAgLy8gU2hvdyBjb250ZW50IG9ubHkgd2hlbiBwYWdlIGlzIGxvYWRlZFxuICBkb2N1bWVudC5ib2R5LnN0eWxlID0gJ2Rpc3BsYXk6IGF1dG8nO1xuXG4gIC8vIGJpbmRpbmdcblxuICBiaW5kRXZlbnRzKCk7XG5cbiAgdXBkYXRlQXZhaWxhYmxlQ2hhcnMoKTtcbiAgcHdkR2VuZXJhdGVkRWwuaW5uZXJIVE1MID0gY3JlYXRlUGFzc3dvcmQoKTtcbiAgY2FsY3VsYXRlUGFzc3dvcmRMZXZlbCgpO1xufVxuXG53aW5kb3cub25sb2FkID0gaW5pdDtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==