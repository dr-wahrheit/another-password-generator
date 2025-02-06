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
  --active-color: var(--selection-color-success) ;
}

::selection {
  color: #ffffff;
  background-color: var(--active-color);
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
html.is-danger,
body.is-danger {
  --active-color: var(--selection-color-danger);
}
html.is-warning,
body.is-warning {
  --active-color: var(--selection-color-warning);
}
html.is-info,
body.is-info {
  --active-color: var(--selection-color-info);
}
html.is-success,
body.is-success {
  --active-color: var(--selection-color-success);
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
  color: var(--active-color);
  border-bottom-color: var(--active-color);
}
.tabs li.is-active a:hover {
  text-shadow: none;
  border-bottom-width: 2px;
  border-bottom-color: var(--active-color);
}
.tabs li a {
  margin-bottom: 0px;
  border-bottom-width: 2px;
  border-bottom-color: transparent;
  color: #a89d91;
}
.tabs li a:hover {
  text-shadow: var(--active-color) 1px 0 10px;
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
  color: var(--active-color);
}
#pwd-actions-box .action:hover {
  color: var(--active-color);
  text-shadow: 0 0 5px var(--active-color);
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
  background-color: var(--active-color);
}
.pwd-container.is-warning ::selection {
  background-color: var(--active-color);
}
.pwd-container.is-info ::selection {
  background-color: var(--active-color);
}
.pwd-container.is-success ::selection {
  background-color: var(--active-color);
}
.pwd-container ::selection {
  color: #ffffff;
  background-color: var(--active-color);
  border-radius: 4px;
}

#settings-password-length {
  width: 64px;
}

#settings-password-length-range {
  width: 100%;
  /* Rimuove lo stile di default su WebKit */
  -webkit-appearance: none;
  appearance: none;
  /* Stile del cursore per Chrome, Safari, Edge */
  /* Stile della barra per Chrome, Safari, Edge */
}
#settings-password-length-range:hover {
  opacity: 1;
}
#settings-password-length-range::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  margin-top: -5px;
  width: 10px;
  height: 20px;
  background: #444;
  /* Colore del cursore */
  border-radius: 50%;
  cursor: pointer;
}
#settings-password-length-range::-webkit-slider-runnable-track {
  background: var(--active-color);
  height: 8px;
  border-radius: 10px;
}
#settings-password-length-range::-moz-range-thumb {
  width: 20px;
  height: 20px;
  background: var(--active-color);
  border-radius: 50%;
  cursor: pointer;
}
#settings-password-length-range::-moz-range-track {
  background: var(--active-color);
  height: 8px;
  border-radius: 10px;
}

.settings-container {
  background-color: var(--active-color);
  color: #ffffff;
  border-radius: 10px;
  border: 2px solid var(--active-color);
  padding: 1rem;
}
.settings-container ::selection {
  color: #ffffff;
  background: var(--active-color);
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

#password-settings-shortcut {
  border-radius: 6px;
}

input + span.toggle {
  position: relative;
  display: inline-block;
  height: 24px;
  width: 40px;
  margin-bottom: -6px;
  margin-left: -24px;
  background: #f5f5f5;
  border-radius: 100vh;
  color: var(--active-color);
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
input[type=radio] {
  appearance: none;
  /* Rimuove lo stile predefinito */
  width: 14px;
  height: 14px;
  border: 1px solid #bbb;
  border-radius: 50%;
  display: inline-block;
  position: relative;
  cursor: pointer;
}
input[type=radio]:checked {
  border-color: var(--active-color);
}
input[type=radio]:checked::before {
  content: "";
  width: 10px;
  height: 10px;
  background-color: var(--active-color);
  border-color: var(--active-color);
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
input:checked + span.toggle:before {
  left: 20px;
  background: var(--active-color);
  transition: all 0.4s ease-in-out;
}`, "",{"version":3,"sources":["webpack://./src/styles/style.scss"],"names":[],"mappings":"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","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap\");\n\n$secondaryColor: #a89d91;\n$primaryColor: #485fc7;\n$backgroundColor: #ffffff;\n$backgroundColorLight: #f5f5f5;\n\n\n$textColor: #444;\n\n$colorDanger: #f14668;\n$colorWarning: #ffe08a;\n$colorInfo: #3e8ed0;\n$colorSuccess: #48c78e;\n\n\n:root {\n    // --bulma-primary-h: 172deg;\n    // --bulma-link-h: 229deg;\n    // --bulma-link-s: 53%;\n    // --bulma-link-l: 53%;\n    // --bulma-info-h: 199deg;\n    // --bulma-success-h: 154deg;\n    // --bulma-warning-h: 43deg;\n    // --bulma-danger-h: 349deg;\n    --selection-color-danger: #f14668;\n    --selection-color-warning: #ffe08a;\n    --selection-color-info: #3e8ed0;\n    --selection-color-success: #48c78e;\n\n    --active-color: var(--selection-color-success)\n}\n\n::selection {\n    color: $backgroundColor;\n    background-color: var(--active-color);\n    border-radius: 4px;\n}\n\nhtml,\nbody {\n    color: $textColor;\n    margin: 0;\n    padding: 0;\n    width: 100%;\n    height: 100%;\n    font-family: \"Open Sans\", sans-serif;\n    font-optical-sizing: auto;\n    font-weight: 400;\n    font-style: normal;\n    font-size: 16px;\n    background-color: $backgroundColor;\n    scroll-behavior: smooth;\n    scroll-snap-type: y mandatory;\n\n    &.is-danger {\n        --active-color: var(--selection-color-danger);\n    }\n\n    &.is-warning {\n        --active-color: var(--selection-color-warning);\n    }\n\n    &.is-info {\n        --active-color: var(--selection-color-info);\n    }\n\n    &.is-success {\n        --active-color: var(--selection-color-success);\n    }\n}\n\n.title,\n.subtitle {\n    font-family: \"Kode Mono\", monospace;\n    color: inherit;\n}\n\n.section {\n    padding: 2rem 2rem;\n}\n\n.is-fullheight {\n    min-height: 100vh;\n}\n\n.is-fullwidth {\n    min-width: 100%;\n}\n\n.notification {\n    position: fixed;\n    top: 0;\n    width: 100%;\n    background-color: #ffe645;\n    opacity: 1;\n    z-index: 100;\n    box-shadow: 0 0 10px $textColor;\n\n    transition:\n        visibility 0s,\n        opacity 0.3s linear;\n\n    &.is-invisible {\n        opacity: 0;\n    }\n}\n\n#pwd-type-selector-tab {\n    margin-bottom: 0;\n\n    ul {\n        border-bottom-width: 0;\n    }\n}\n\n#pwd-settings-box {\n    min-height: 362px;\n}\n\n.tabs li {\n\n    &.is-active {\n        a {\n            font-weight: bold;\n            color: var(--active-color);\n            border-bottom-color: var(--active-color);\n\n            &:hover {\n                text-shadow: none;\n                border-bottom-width: 2px;\n                border-bottom-color: var(--active-color);\n            }\n        }\n    }\n\n    a {\n        margin-bottom: 0px;\n        border-bottom-width: 2px;\n        border-bottom-color: transparent;\n        color: $secondaryColor;\n\n        &:hover {\n            text-shadow: var(--active-color) 1px 0 10px;\n            border-bottom-width: 2px;\n            border-bottom-color: transparent;\n        }\n    }\n}\n\n\n#pwd-strength-tagbox {\n    position: absolute;\n    bottom: 2px;\n    left: 0px;\n    border-top-right-radius: 6px;\n}\n\n#pwd-actions-box {\n    display: flex;\n    position: absolute;\n    bottom: 3px;\n    right: 0px;\n\n    .action {\n        padding: 0 .3rem;\n        color: var(--active-color);\n\n        &:hover {\n            color: var(--active-color);\n            text-shadow: 0 0 5px var(--active-color);\n        }\n    }\n}\n\n#pwd-strength {\n    position: absolute;\n    bottom: 0px;\n    left: 0px;\n    border-top-left-radius: 0px;\n    border-top-right-radius: 0px;\n    border-bottom-left-radius: 6px;\n    border-bottom-right-radius: 6px;\n    height: 2px;\n}\n\n.pwd-container {\n    font-size: 2rem;\n    display: flex;\n    flex-direction: row;\n    align-items: baseline;\n    justify-content: space-between;\n\n\n    &.is-danger {\n        ::selection {\n            background-color: var(--active-color);\n        }\n    }\n\n    &.is-warning {\n        ::selection {\n            background-color: var(--active-color);\n        }\n    }\n\n    &.is-info {\n        ::selection {\n            background-color: var(--active-color);\n        }\n    }\n\n    &.is-success {\n        ::selection {\n            background-color: var(--active-color);\n        }\n    }\n\n    ::selection {\n        color: $backgroundColor;\n        background-color: var(--active-color);\n        border-radius: 4px;\n    }\n}\n\n\n#settings-password-length {\n    width: 64px;\n}\n\n#settings-password-length-range {\n    width: 100%;\n    /* Rimuove lo stile di default su WebKit */\n    -webkit-appearance: none;\n    appearance: none;\n\n    &:hover {\n        opacity: 1;\n    }\n\n    /* Stile del cursore per Chrome, Safari, Edge */\n    &::-webkit-slider-thumb {\n        -webkit-appearance: none;\n        appearance: none;\n        margin-top: -5px;\n        width: 10px;\n        height: 20px;\n        background: $textColor;\n        /* Colore del cursore */\n        border-radius: 50%;\n        cursor: pointer;\n    }\n\n    /* Stile della barra per Chrome, Safari, Edge */\n    &::-webkit-slider-runnable-track {\n        background: var(--active-color);\n        height: 8px;\n        border-radius: 10px;\n    }\n\n    //   /* Stile per Firefox */\n    &::-moz-range-thumb {\n        width: 20px;\n        height: 20px;\n        background: var(--active-color);\n        border-radius: 50%;\n        cursor: pointer;\n    }\n\n    &::-moz-range-track {\n        background: var(--active-color);\n        height: 8px;\n        border-radius: 10px;\n    }\n}\n\n.settings-container {\n    background-color: var(--active-color);\n    color: $backgroundColor;\n    border-radius: 10px;\n    border: 2px solid var(--active-color);\n    padding: 1rem;\n    // box-shadow: 0 2px 10px var(--active-color);\n\n    ::selection {\n        color: $backgroundColor;\n        background: var(--active-color);\n        border-radius: 4px;\n    }\n\n    .checkbox:hover,\n    .radio:hover {\n        color: $textColor;\n        // text-shadow: 0 0 5px $backgroundColor;\n    }\n}\n\n.footer {\n    border-top: 2px solid #245494;\n    background-color: #7ca7df;\n}\n\n.is-owerflow-auto {\n    overflow: auto;\n}\n\n.is-word-break-all {\n    word-break: break-all;\n}\n\n#password-settings-shortcut {\n    border-radius: 6px;\n}\n\ninput {\n    +span.toggle {\n        position: relative;\n        display: inline-block;\n        height: 24px;\n        width: 40px;\n        margin-bottom: -6px;\n        margin-left: -24px;\n        background: $backgroundColorLight;\n        border-radius: 100vh;\n        color: var(--active-color);\n\n        &:before {\n            content: \" \";\n            position: absolute;\n            top: 4px;\n            left: 4px;\n            right: auto;\n            height: 16px;\n            width: 16px;\n            background: #bbb;\n            border-radius: 100vh;\n            transition: all 0.4s ease-in-out;\n        }\n    }\n\n    &[type=radio] {\n        &:checked {\n            // accent-color: var(--active-color);\n            // border: none;\n            border-color: var(--active-color);\n        }\n\n        appearance: none;\n        /* Rimuove lo stile predefinito */\n        width: 14px;\n        height: 14px;\n        border: 1px solid #bbb;\n        border-radius: 50%;\n        display: inline-block;\n        position: relative;\n        cursor: pointer;\n\n        &:checked::before {\n            content: \"\";\n            width: 10px;\n            height: 10px;\n            background-color: var(--active-color);\n            border-color: var(--active-color);\n            border-radius: 50%;\n            position: absolute;\n            top: 50%;\n            left: 50%;\n            transform: translate(-50%, -50%);\n        }\n    }\n\n    &:checked+span.toggle:before {\n        left: 20px;\n        background: var(--active-color);\n        transition: all 0.4s ease-in-out;\n    }\n}"],"sourceRoot":""}]);
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

const bodydEl = document.getElementsByTagName('body')[0];
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
  bodydEl.classList.remove(
    'is-danger',
    'is-warning',
    'is-info',
    'is-success',
  );
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
  settingsPasswordLengthRangeEl.classList.remove(
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
    // Molto debole
    bodydEl.classList.add('is-danger');
    pwdContainerEl.classList.add('is-danger');
    pwdGeneratedStrengthEl.classList.add('is-danger');
    settingsPasswordLengthRangeEl.classList.add('is-danger');
    pwdGeneratedStrengthTagBoxEl.classList.add('has-background-danger', 'has-text-danger-light');
    pwdGeneratedStrengthTagEl.innerText = 'Too easy to guess';
  } else if (strength < 36) {
    // Debole
    bodydEl.classList.add('is-warning');
    pwdContainerEl.classList.add('is-warning');
    pwdGeneratedStrengthEl.classList.add('is-warning');
    settingsPasswordLengthRangeEl.classList.add('is-warning');
    pwdGeneratedStrengthTagBoxEl.classList.add('has-background-warning', 'has-text-warning-dark');
    pwdGeneratedStrengthTagEl.innerText = 'At risk of being compromised';

  } else if (strength < 60) {
    // Buona
    bodydEl.classList.add('is-info');
    pwdContainerEl.classList.add('is-info');
    pwdGeneratedStrengthEl.classList.add('is-info');
    settingsPasswordLengthRangeEl.classList.add('is-info');
    pwdGeneratedStrengthTagBoxEl.classList.add('has-background-info', 'has-text-info-light');
    pwdGeneratedStrengthTagEl.innerText = 'Secure for normal use';

  } else {
    // Molto sicura
    bodydEl.classList.add('is-success');
    pwdContainerEl.classList.add('is-success');
    pwdGeneratedStrengthEl.classList.add('is-success');
    settingsPasswordLengthRangeEl.classList.add('is-success');
    pwdGeneratedStrengthTagBoxEl.classList.add('has-background-success', 'has-text-success-light');
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
  const wellcomeMessageSettings = 'color:#3e8ed0; font-size: 16px; font-weight: 700; font-family: monospace';
  console.info('%c⠀⠀⠀ ⠀⠀⠀ ⠀⠀⠀ ⠀⠀⠀ ⠀⠀⠀ ⠀⠀⠀ ⠀⠀⠀ ⠀⠀⠀ ⠀⠀⠀ ⠀⠀⠀ ⠀⠀⠀ ⠀⠀⠀ ⠀⠀⠀ ⠀⠀⠀', wellcomeMessageSettings);
  console.info('%c⠀⠀⠀ Welcome to the developer vault!.                     ⠀⠀⠀', wellcomeMessageSettings);
  console.info('%c⠀⠀⠀ Top secret password generation happens here...       ⠀⠀⠀', wellcomeMessageSettings);
  console.info('%c⠀⠀⠀ Mostly. ^_^                                          ⠀⠀⠀', wellcomeMessageSettings);
  console.info('%c⠀⠀⠀ ⠀⠀⠀ ⠀⠀⠀ ⠀⠀⠀ ⠀⠀⠀ ⠀⠀⠀ ⠀⠀⠀ ⠀⠀⠀ ⠀⠀⠀ ⠀⠀⠀ ⠀⠀⠀ ⠀⠀⠀ ⠀⠀⠀ ⠀⠀⠀', wellcomeMessageSettings);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDNkc7QUFDakI7QUFDNUYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRiw4SEFBOEgseUJBQXlCO0FBQ3ZKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyx5RkFBeUYsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFlBQVksV0FBVyxPQUFPLE9BQU8sV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxZQUFZLFlBQVksV0FBVyxNQUFNLE9BQU8sV0FBVyxNQUFNLE9BQU8sV0FBVyxNQUFNLE9BQU8sV0FBVyxNQUFNLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxVQUFVLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsT0FBTyxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsVUFBVSxVQUFVLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsT0FBTyxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxZQUFZLFdBQVcsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsWUFBWSxZQUFZLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxVQUFVLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxZQUFZLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxZQUFZLFdBQVcsTUFBTSxPQUFPLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFX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b3RoZXItcGFzc3dvcmQtZ2VuZXJhdG9yLy4vc3JjL3N0eWxlcy9zdHlsZS5zY3NzIiwid2VicGFjazovL2Fub3RoZXItcGFzc3dvcmQtZ2VuZXJhdG9yLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9hbm90aGVyLXBhc3N3b3JkLWdlbmVyYXRvci8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2Fub3RoZXItcGFzc3dvcmQtZ2VuZXJhdG9yLy4vc3JjL3N0eWxlcy9zdHlsZS5zY3NzP2U1ZDgiLCJ3ZWJwYWNrOi8vYW5vdGhlci1wYXNzd29yZC1nZW5lcmF0b3IvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYW5vdGhlci1wYXNzd29yZC1nZW5lcmF0b3IvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2Fub3RoZXItcGFzc3dvcmQtZ2VuZXJhdG9yLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2Fub3RoZXItcGFzc3dvcmQtZ2VuZXJhdG9yLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2Fub3RoZXItcGFzc3dvcmQtZ2VuZXJhdG9yLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYW5vdGhlci1wYXNzd29yZC1nZW5lcmF0b3IvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9hbm90aGVyLXBhc3N3b3JkLWdlbmVyYXRvci8uL3NyYy9zY3JpcHRzL2dlbmVhcmF0b3JzL3Bhc3NwaHJhc2UvZ2VuZXJhdG9yLmpzIiwid2VicGFjazovL2Fub3RoZXItcGFzc3dvcmQtZ2VuZXJhdG9yLy4vc3JjL3NjcmlwdHMvZ2VuZWFyYXRvcnMvcGFzc3BocmFzZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9hbm90aGVyLXBhc3N3b3JkLWdlbmVyYXRvci8uL3NyYy9zY3JpcHRzL2dlbmVhcmF0b3JzL3Bhc3NwaHJhc2UvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vYW5vdGhlci1wYXNzd29yZC1nZW5lcmF0b3IvLi9zcmMvc2NyaXB0cy9nZW5lYXJhdG9ycy9wYXNzd29yZC9nZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vYW5vdGhlci1wYXNzd29yZC1nZW5lcmF0b3IvLi9zcmMvc2NyaXB0cy9nZW5lYXJhdG9ycy9wYXNzd29yZC9pbmRleC5qcyIsIndlYnBhY2s6Ly9hbm90aGVyLXBhc3N3b3JkLWdlbmVyYXRvci8uL3NyYy9zY3JpcHRzL2dlbmVhcmF0b3JzL3Bhc3N3b3JkL3V0aWxzLmpzIiwid2VicGFjazovL2Fub3RoZXItcGFzc3dvcmQtZ2VuZXJhdG9yLy4vc3JjL3NjcmlwdHMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1PcGVuK1NhbnM6aXRhbCx3Z2h0QDAsMzAwLi44MDA7MSwzMDAuLjgwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290IHtcbiAgLS1zZWxlY3Rpb24tY29sb3ItZGFuZ2VyOiAjZjE0NjY4O1xuICAtLXNlbGVjdGlvbi1jb2xvci13YXJuaW5nOiAjZmZlMDhhO1xuICAtLXNlbGVjdGlvbi1jb2xvci1pbmZvOiAjM2U4ZWQwO1xuICAtLXNlbGVjdGlvbi1jb2xvci1zdWNjZXNzOiAjNDhjNzhlO1xuICAtLWFjdGl2ZS1jb2xvcjogdmFyKC0tc2VsZWN0aW9uLWNvbG9yLXN1Y2Nlc3MpIDtcbn1cblxuOjpzZWxlY3Rpb24ge1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWN0aXZlLWNvbG9yKTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG5odG1sLFxuYm9keSB7XG4gIGNvbG9yOiAjNDQ0O1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LW9wdGljYWwtc2l6aW5nOiBhdXRvO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XG4gIHNjcm9sbC1zbmFwLXR5cGU6IHkgbWFuZGF0b3J5O1xufVxuaHRtbC5pcy1kYW5nZXIsXG5ib2R5LmlzLWRhbmdlciB7XG4gIC0tYWN0aXZlLWNvbG9yOiB2YXIoLS1zZWxlY3Rpb24tY29sb3ItZGFuZ2VyKTtcbn1cbmh0bWwuaXMtd2FybmluZyxcbmJvZHkuaXMtd2FybmluZyB7XG4gIC0tYWN0aXZlLWNvbG9yOiB2YXIoLS1zZWxlY3Rpb24tY29sb3Itd2FybmluZyk7XG59XG5odG1sLmlzLWluZm8sXG5ib2R5LmlzLWluZm8ge1xuICAtLWFjdGl2ZS1jb2xvcjogdmFyKC0tc2VsZWN0aW9uLWNvbG9yLWluZm8pO1xufVxuaHRtbC5pcy1zdWNjZXNzLFxuYm9keS5pcy1zdWNjZXNzIHtcbiAgLS1hY3RpdmUtY29sb3I6IHZhcigtLXNlbGVjdGlvbi1jb2xvci1zdWNjZXNzKTtcbn1cblxuLnRpdGxlLFxuLnN1YnRpdGxlIHtcbiAgZm9udC1mYW1pbHk6IFwiS29kZSBNb25vXCIsIG1vbm9zcGFjZTtcbiAgY29sb3I6IGluaGVyaXQ7XG59XG5cbi5zZWN0aW9uIHtcbiAgcGFkZGluZzogMnJlbSAycmVtO1xufVxuXG4uaXMtZnVsbGhlaWdodCB7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xufVxuXG4uaXMtZnVsbHdpZHRoIHtcbiAgbWluLXdpZHRoOiAxMDAlO1xufVxuXG4ubm90aWZpY2F0aW9uIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlNjQ1O1xuICBvcGFjaXR5OiAxO1xuICB6LWluZGV4OiAxMDA7XG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4ICM0NDQ7XG4gIHRyYW5zaXRpb246IHZpc2liaWxpdHkgMHMsIG9wYWNpdHkgMC4zcyBsaW5lYXI7XG59XG4ubm90aWZpY2F0aW9uLmlzLWludmlzaWJsZSB7XG4gIG9wYWNpdHk6IDA7XG59XG5cbiNwd2QtdHlwZS1zZWxlY3Rvci10YWIge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuI3B3ZC10eXBlLXNlbGVjdG9yLXRhYiB1bCB7XG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDA7XG59XG5cbiNwd2Qtc2V0dGluZ3MtYm94IHtcbiAgbWluLWhlaWdodDogMzYycHg7XG59XG5cbi50YWJzIGxpLmlzLWFjdGl2ZSBhIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiB2YXIoLS1hY3RpdmUtY29sb3IpO1xuICBib3JkZXItYm90dG9tLWNvbG9yOiB2YXIoLS1hY3RpdmUtY29sb3IpO1xufVxuLnRhYnMgbGkuaXMtYWN0aXZlIGE6aG92ZXIge1xuICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogMnB4O1xuICBib3JkZXItYm90dG9tLWNvbG9yOiB2YXIoLS1hY3RpdmUtY29sb3IpO1xufVxuLnRhYnMgbGkgYSB7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogMnB4O1xuICBib3JkZXItYm90dG9tLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6ICNhODlkOTE7XG59XG4udGFicyBsaSBhOmhvdmVyIHtcbiAgdGV4dC1zaGFkb3c6IHZhcigtLWFjdGl2ZS1jb2xvcikgMXB4IDAgMTBweDtcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogMnB4O1xuICBib3JkZXItYm90dG9tLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuI3B3ZC1zdHJlbmd0aC10YWdib3gge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMnB4O1xuICBsZWZ0OiAwcHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA2cHg7XG59XG5cbiNwd2QtYWN0aW9ucy1ib3gge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogM3B4O1xuICByaWdodDogMHB4O1xufVxuI3B3ZC1hY3Rpb25zLWJveCAuYWN0aW9uIHtcbiAgcGFkZGluZzogMCAwLjNyZW07XG4gIGNvbG9yOiB2YXIoLS1hY3RpdmUtY29sb3IpO1xufVxuI3B3ZC1hY3Rpb25zLWJveCAuYWN0aW9uOmhvdmVyIHtcbiAgY29sb3I6IHZhcigtLWFjdGl2ZS1jb2xvcik7XG4gIHRleHQtc2hhZG93OiAwIDAgNXB4IHZhcigtLWFjdGl2ZS1jb2xvcik7XG59XG5cbiNwd2Qtc3RyZW5ndGgge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMHB4O1xuICBsZWZ0OiAwcHg7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDBweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDBweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNnB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNnB4O1xuICBoZWlnaHQ6IDJweDtcbn1cblxuLnB3ZC1jb250YWluZXIge1xuICBmb250LXNpemU6IDJyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLnB3ZC1jb250YWluZXIuaXMtZGFuZ2VyIDo6c2VsZWN0aW9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWN0aXZlLWNvbG9yKTtcbn1cbi5wd2QtY29udGFpbmVyLmlzLXdhcm5pbmcgOjpzZWxlY3Rpb24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY3RpdmUtY29sb3IpO1xufVxuLnB3ZC1jb250YWluZXIuaXMtaW5mbyA6OnNlbGVjdGlvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjdGl2ZS1jb2xvcik7XG59XG4ucHdkLWNvbnRhaW5lci5pcy1zdWNjZXNzIDo6c2VsZWN0aW9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWN0aXZlLWNvbG9yKTtcbn1cbi5wd2QtY29udGFpbmVyIDo6c2VsZWN0aW9uIHtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjdGl2ZS1jb2xvcik7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuI3NldHRpbmdzLXBhc3N3b3JkLWxlbmd0aCB7XG4gIHdpZHRoOiA2NHB4O1xufVxuXG4jc2V0dGluZ3MtcGFzc3dvcmQtbGVuZ3RoLXJhbmdlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIC8qIFJpbXVvdmUgbG8gc3RpbGUgZGkgZGVmYXVsdCBzdSBXZWJLaXQgKi9cbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICBhcHBlYXJhbmNlOiBub25lO1xuICAvKiBTdGlsZSBkZWwgY3Vyc29yZSBwZXIgQ2hyb21lLCBTYWZhcmksIEVkZ2UgKi9cbiAgLyogU3RpbGUgZGVsbGEgYmFycmEgcGVyIENocm9tZSwgU2FmYXJpLCBFZGdlICovXG59XG4jc2V0dGluZ3MtcGFzc3dvcmQtbGVuZ3RoLXJhbmdlOmhvdmVyIHtcbiAgb3BhY2l0eTogMTtcbn1cbiNzZXR0aW5ncy1wYXNzd29yZC1sZW5ndGgtcmFuZ2U6Oi13ZWJraXQtc2xpZGVyLXRodW1iIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICBhcHBlYXJhbmNlOiBub25lO1xuICBtYXJnaW4tdG9wOiAtNXB4O1xuICB3aWR0aDogMTBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBiYWNrZ3JvdW5kOiAjNDQ0O1xuICAvKiBDb2xvcmUgZGVsIGN1cnNvcmUgKi9cbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4jc2V0dGluZ3MtcGFzc3dvcmQtbGVuZ3RoLXJhbmdlOjotd2Via2l0LXNsaWRlci1ydW5uYWJsZS10cmFjayB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWFjdGl2ZS1jb2xvcik7XG4gIGhlaWdodDogOHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuI3NldHRpbmdzLXBhc3N3b3JkLWxlbmd0aC1yYW5nZTo6LW1vei1yYW5nZS10aHVtYiB7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWFjdGl2ZS1jb2xvcik7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuI3NldHRpbmdzLXBhc3N3b3JkLWxlbmd0aC1yYW5nZTo6LW1vei1yYW5nZS10cmFjayB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWFjdGl2ZS1jb2xvcik7XG4gIGhlaWdodDogOHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4uc2V0dGluZ3MtY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWN0aXZlLWNvbG9yKTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWFjdGl2ZS1jb2xvcik7XG4gIHBhZGRpbmc6IDFyZW07XG59XG4uc2V0dGluZ3MtY29udGFpbmVyIDo6c2VsZWN0aW9uIHtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGJhY2tncm91bmQ6IHZhcigtLWFjdGl2ZS1jb2xvcik7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cbi5zZXR0aW5ncy1jb250YWluZXIgLmNoZWNrYm94OmhvdmVyLFxuLnNldHRpbmdzLWNvbnRhaW5lciAucmFkaW86aG92ZXIge1xuICBjb2xvcjogIzQ0NDtcbn1cblxuLmZvb3RlciB7XG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCAjMjQ1NDk0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2NhN2RmO1xufVxuXG4uaXMtb3dlcmZsb3ctYXV0byB7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG4uaXMtd29yZC1icmVhay1hbGwge1xuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG59XG5cbiNwYXNzd29yZC1zZXR0aW5ncy1zaG9ydGN1dCB7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbn1cblxuaW5wdXQgKyBzcGFuLnRvZ2dsZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBoZWlnaHQ6IDI0cHg7XG4gIHdpZHRoOiA0MHB4O1xuICBtYXJnaW4tYm90dG9tOiAtNnB4O1xuICBtYXJnaW4tbGVmdDogLTI0cHg7XG4gIGJhY2tncm91bmQ6ICNmNWY1ZjU7XG4gIGJvcmRlci1yYWRpdXM6IDEwMHZoO1xuICBjb2xvcjogdmFyKC0tYWN0aXZlLWNvbG9yKTtcbn1cbmlucHV0ICsgc3Bhbi50b2dnbGU6YmVmb3JlIHtcbiAgY29udGVudDogXCIgXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA0cHg7XG4gIGxlZnQ6IDRweDtcbiAgcmlnaHQ6IGF1dG87XG4gIGhlaWdodDogMTZweDtcbiAgd2lkdGg6IDE2cHg7XG4gIGJhY2tncm91bmQ6ICNiYmI7XG4gIGJvcmRlci1yYWRpdXM6IDEwMHZoO1xuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcbn1cbmlucHV0W3R5cGU9cmFkaW9dIHtcbiAgYXBwZWFyYW5jZTogbm9uZTtcbiAgLyogUmltdW92ZSBsbyBzdGlsZSBwcmVkZWZpbml0byAqL1xuICB3aWR0aDogMTRweDtcbiAgaGVpZ2h0OiAxNHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjYmJiO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5pbnB1dFt0eXBlPXJhZGlvXTpjaGVja2VkIHtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1hY3RpdmUtY29sb3IpO1xufVxuaW5wdXRbdHlwZT1yYWRpb106Y2hlY2tlZDo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgd2lkdGg6IDEwcHg7XG4gIGhlaWdodDogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWN0aXZlLWNvbG9yKTtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1hY3RpdmUtY29sb3IpO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG5pbnB1dDpjaGVja2VkICsgc3Bhbi50b2dnbGU6YmVmb3JlIHtcbiAgbGVmdDogMjBweDtcbiAgYmFja2dyb3VuZDogdmFyKC0tYWN0aXZlLWNvbG9yKTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3N0eWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBZ0JBO0VBU0ksaUNBQUE7RUFDQSxrQ0FBQTtFQUNBLCtCQUFBO0VBQ0Esa0NBQUE7RUFFQSwrQ0FBQTtBQXZCSjs7QUEwQkE7RUFDSSxjQTlCYztFQStCZCxxQ0FBQTtFQUNBLGtCQUFBO0FBdkJKOztBQTBCQTs7RUFFSSxXQWpDUTtFQWtDUixTQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0NBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EseUJBL0NjO0VBZ0RkLHVCQUFBO0VBQ0EsNkJBQUE7QUF2Qko7QUF5Qkk7O0VBQ0ksNkNBQUE7QUF0QlI7QUF5Qkk7O0VBQ0ksOENBQUE7QUF0QlI7QUF5Qkk7O0VBQ0ksMkNBQUE7QUF0QlI7QUF5Qkk7O0VBQ0ksOENBQUE7QUF0QlI7O0FBMEJBOztFQUVJLG1DQUFBO0VBQ0EsY0FBQTtBQXZCSjs7QUEwQkE7RUFDSSxrQkFBQTtBQXZCSjs7QUEwQkE7RUFDSSxpQkFBQTtBQXZCSjs7QUEwQkE7RUFDSSxlQUFBO0FBdkJKOztBQTBCQTtFQUNJLGVBQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUVBLDhDQUNJO0FBekJSO0FBNEJJO0VBQ0ksVUFBQTtBQTFCUjs7QUE4QkE7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QkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7QUF0RVo7QUEwRUk7RUFDSSxVQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQ0FBQTtBQXhFUlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1PcGVuK1NhbnM6aXRhbCx3Z2h0QDAsMzAwLi44MDA7MSwzMDAuLjgwMCZkaXNwbGF5PXN3YXBcXFwiKTtcXG5cXG4kc2Vjb25kYXJ5Q29sb3I6ICNhODlkOTE7XFxuJHByaW1hcnlDb2xvcjogIzQ4NWZjNztcXG4kYmFja2dyb3VuZENvbG9yOiAjZmZmZmZmO1xcbiRiYWNrZ3JvdW5kQ29sb3JMaWdodDogI2Y1ZjVmNTtcXG5cXG5cXG4kdGV4dENvbG9yOiAjNDQ0O1xcblxcbiRjb2xvckRhbmdlcjogI2YxNDY2ODtcXG4kY29sb3JXYXJuaW5nOiAjZmZlMDhhO1xcbiRjb2xvckluZm86ICMzZThlZDA7XFxuJGNvbG9yU3VjY2VzczogIzQ4Yzc4ZTtcXG5cXG5cXG46cm9vdCB7XFxuICAgIC8vIC0tYnVsbWEtcHJpbWFyeS1oOiAxNzJkZWc7XFxuICAgIC8vIC0tYnVsbWEtbGluay1oOiAyMjlkZWc7XFxuICAgIC8vIC0tYnVsbWEtbGluay1zOiA1MyU7XFxuICAgIC8vIC0tYnVsbWEtbGluay1sOiA1MyU7XFxuICAgIC8vIC0tYnVsbWEtaW5mby1oOiAxOTlkZWc7XFxuICAgIC8vIC0tYnVsbWEtc3VjY2Vzcy1oOiAxNTRkZWc7XFxuICAgIC8vIC0tYnVsbWEtd2FybmluZy1oOiA0M2RlZztcXG4gICAgLy8gLS1idWxtYS1kYW5nZXItaDogMzQ5ZGVnO1xcbiAgICAtLXNlbGVjdGlvbi1jb2xvci1kYW5nZXI6ICNmMTQ2Njg7XFxuICAgIC0tc2VsZWN0aW9uLWNvbG9yLXdhcm5pbmc6ICNmZmUwOGE7XFxuICAgIC0tc2VsZWN0aW9uLWNvbG9yLWluZm86ICMzZThlZDA7XFxuICAgIC0tc2VsZWN0aW9uLWNvbG9yLXN1Y2Nlc3M6ICM0OGM3OGU7XFxuXFxuICAgIC0tYWN0aXZlLWNvbG9yOiB2YXIoLS1zZWxlY3Rpb24tY29sb3Itc3VjY2VzcylcXG59XFxuXFxuOjpzZWxlY3Rpb24ge1xcbiAgICBjb2xvcjogJGJhY2tncm91bmRDb2xvcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWN0aXZlLWNvbG9yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbn1cXG5cXG5odG1sLFxcbmJvZHkge1xcbiAgICBjb2xvcjogJHRleHRDb2xvcjtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBmb250LWZhbWlseTogXFxcIk9wZW4gU2Fuc1xcXCIsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtb3B0aWNhbC1zaXppbmc6IGF1dG87XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZENvbG9yO1xcbiAgICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcXG4gICAgc2Nyb2xsLXNuYXAtdHlwZTogeSBtYW5kYXRvcnk7XFxuXFxuICAgICYuaXMtZGFuZ2VyIHtcXG4gICAgICAgIC0tYWN0aXZlLWNvbG9yOiB2YXIoLS1zZWxlY3Rpb24tY29sb3ItZGFuZ2VyKTtcXG4gICAgfVxcblxcbiAgICAmLmlzLXdhcm5pbmcge1xcbiAgICAgICAgLS1hY3RpdmUtY29sb3I6IHZhcigtLXNlbGVjdGlvbi1jb2xvci13YXJuaW5nKTtcXG4gICAgfVxcblxcbiAgICAmLmlzLWluZm8ge1xcbiAgICAgICAgLS1hY3RpdmUtY29sb3I6IHZhcigtLXNlbGVjdGlvbi1jb2xvci1pbmZvKTtcXG4gICAgfVxcblxcbiAgICAmLmlzLXN1Y2Nlc3Mge1xcbiAgICAgICAgLS1hY3RpdmUtY29sb3I6IHZhcigtLXNlbGVjdGlvbi1jb2xvci1zdWNjZXNzKTtcXG4gICAgfVxcbn1cXG5cXG4udGl0bGUsXFxuLnN1YnRpdGxlIHtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJLb2RlIE1vbm9cXFwiLCBtb25vc3BhY2U7XFxuICAgIGNvbG9yOiBpbmhlcml0O1xcbn1cXG5cXG4uc2VjdGlvbiB7XFxuICAgIHBhZGRpbmc6IDJyZW0gMnJlbTtcXG59XFxuXFxuLmlzLWZ1bGxoZWlnaHQge1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuLmlzLWZ1bGx3aWR0aCB7XFxuICAgIG1pbi13aWR0aDogMTAwJTtcXG59XFxuXFxuLm5vdGlmaWNhdGlvbiB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZTY0NTtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgei1pbmRleDogMTAwO1xcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCAkdGV4dENvbG9yO1xcblxcbiAgICB0cmFuc2l0aW9uOlxcbiAgICAgICAgdmlzaWJpbGl0eSAwcyxcXG4gICAgICAgIG9wYWNpdHkgMC4zcyBsaW5lYXI7XFxuXFxuICAgICYuaXMtaW52aXNpYmxlIHtcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxuICAgIH1cXG59XFxuXFxuI3B3ZC10eXBlLXNlbGVjdG9yLXRhYiB7XFxuICAgIG1hcmdpbi1ib3R0b206IDA7XFxuXFxuICAgIHVsIHtcXG4gICAgICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDA7XFxuICAgIH1cXG59XFxuXFxuI3B3ZC1zZXR0aW5ncy1ib3gge1xcbiAgICBtaW4taGVpZ2h0OiAzNjJweDtcXG59XFxuXFxuLnRhYnMgbGkge1xcblxcbiAgICAmLmlzLWFjdGl2ZSB7XFxuICAgICAgICBhIHtcXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tYWN0aXZlLWNvbG9yKTtcXG4gICAgICAgICAgICBib3JkZXItYm90dG9tLWNvbG9yOiB2YXIoLS1hY3RpdmUtY29sb3IpO1xcblxcbiAgICAgICAgICAgICY6aG92ZXIge1xcbiAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogbm9uZTtcXG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMnB4O1xcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tLWNvbG9yOiB2YXIoLS1hY3RpdmUtY29sb3IpO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICBhIHtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcXG4gICAgICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDJweDtcXG4gICAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICAgICAgY29sb3I6ICRzZWNvbmRhcnlDb2xvcjtcXG5cXG4gICAgICAgICY6aG92ZXIge1xcbiAgICAgICAgICAgIHRleHQtc2hhZG93OiB2YXIoLS1hY3RpdmUtY29sb3IpIDFweCAwIDEwcHg7XFxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMnB4O1xcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICAgICAgfVxcbiAgICB9XFxufVxcblxcblxcbiNwd2Qtc3RyZW5ndGgtdGFnYm94IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IDJweDtcXG4gICAgbGVmdDogMHB4O1xcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNnB4O1xcbn1cXG5cXG4jcHdkLWFjdGlvbnMtYm94IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IDNweDtcXG4gICAgcmlnaHQ6IDBweDtcXG5cXG4gICAgLmFjdGlvbiB7XFxuICAgICAgICBwYWRkaW5nOiAwIC4zcmVtO1xcbiAgICAgICAgY29sb3I6IHZhcigtLWFjdGl2ZS1jb2xvcik7XFxuXFxuICAgICAgICAmOmhvdmVyIHtcXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tYWN0aXZlLWNvbG9yKTtcXG4gICAgICAgICAgICB0ZXh0LXNoYWRvdzogMCAwIDVweCB2YXIoLS1hY3RpdmUtY29sb3IpO1xcbiAgICAgICAgfVxcbiAgICB9XFxufVxcblxcbiNwd2Qtc3RyZW5ndGgge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogMHB4O1xcbiAgICBsZWZ0OiAwcHg7XFxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDBweDtcXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDBweDtcXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNnB4O1xcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNnB4O1xcbiAgICBoZWlnaHQ6IDJweDtcXG59XFxuXFxuLnB3ZC1jb250YWluZXIge1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcblxcbiAgICAmLmlzLWRhbmdlciB7XFxuICAgICAgICA6OnNlbGVjdGlvbiB7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWN0aXZlLWNvbG9yKTtcXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAmLmlzLXdhcm5pbmcge1xcbiAgICAgICAgOjpzZWxlY3Rpb24ge1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjdGl2ZS1jb2xvcik7XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgJi5pcy1pbmZvIHtcXG4gICAgICAgIDo6c2VsZWN0aW9uIHtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY3RpdmUtY29sb3IpO1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgICYuaXMtc3VjY2VzcyB7XFxuICAgICAgICA6OnNlbGVjdGlvbiB7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWN0aXZlLWNvbG9yKTtcXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICA6OnNlbGVjdGlvbiB7XFxuICAgICAgICBjb2xvcjogJGJhY2tncm91bmRDb2xvcjtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjdGl2ZS1jb2xvcik7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIH1cXG59XFxuXFxuXFxuI3NldHRpbmdzLXBhc3N3b3JkLWxlbmd0aCB7XFxuICAgIHdpZHRoOiA2NHB4O1xcbn1cXG5cXG4jc2V0dGluZ3MtcGFzc3dvcmQtbGVuZ3RoLXJhbmdlIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIC8qIFJpbXVvdmUgbG8gc3RpbGUgZGkgZGVmYXVsdCBzdSBXZWJLaXQgKi9cXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcblxcbiAgICAmOmhvdmVyIHtcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxuICAgIH1cXG5cXG4gICAgLyogU3RpbGUgZGVsIGN1cnNvcmUgcGVyIENocm9tZSwgU2FmYXJpLCBFZGdlICovXFxuICAgICY6Oi13ZWJraXQtc2xpZGVyLXRodW1iIHtcXG4gICAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxuICAgICAgICBtYXJnaW4tdG9wOiAtNXB4O1xcbiAgICAgICAgd2lkdGg6IDEwcHg7XFxuICAgICAgICBoZWlnaHQ6IDIwcHg7XFxuICAgICAgICBiYWNrZ3JvdW5kOiAkdGV4dENvbG9yO1xcbiAgICAgICAgLyogQ29sb3JlIGRlbCBjdXJzb3JlICovXFxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIH1cXG5cXG4gICAgLyogU3RpbGUgZGVsbGEgYmFycmEgcGVyIENocm9tZSwgU2FmYXJpLCBFZGdlICovXFxuICAgICY6Oi13ZWJraXQtc2xpZGVyLXJ1bm5hYmxlLXRyYWNrIHtcXG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWFjdGl2ZS1jb2xvcik7XFxuICAgICAgICBoZWlnaHQ6IDhweDtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIH1cXG5cXG4gICAgLy8gICAvKiBTdGlsZSBwZXIgRmlyZWZveCAqL1xcbiAgICAmOjotbW96LXJhbmdlLXRodW1iIHtcXG4gICAgICAgIHdpZHRoOiAyMHB4O1xcbiAgICAgICAgaGVpZ2h0OiAyMHB4O1xcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYWN0aXZlLWNvbG9yKTtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgfVxcblxcbiAgICAmOjotbW96LXJhbmdlLXRyYWNrIHtcXG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWFjdGl2ZS1jb2xvcik7XFxuICAgICAgICBoZWlnaHQ6IDhweDtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIH1cXG59XFxuXFxuLnNldHRpbmdzLWNvbnRhaW5lciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjdGl2ZS1jb2xvcik7XFxuICAgIGNvbG9yOiAkYmFja2dyb3VuZENvbG9yO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1hY3RpdmUtY29sb3IpO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICAvLyBib3gtc2hhZG93OiAwIDJweCAxMHB4IHZhcigtLWFjdGl2ZS1jb2xvcik7XFxuXFxuICAgIDo6c2VsZWN0aW9uIHtcXG4gICAgICAgIGNvbG9yOiAkYmFja2dyb3VuZENvbG9yO1xcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYWN0aXZlLWNvbG9yKTtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgfVxcblxcbiAgICAuY2hlY2tib3g6aG92ZXIsXFxuICAgIC5yYWRpbzpob3ZlciB7XFxuICAgICAgICBjb2xvcjogJHRleHRDb2xvcjtcXG4gICAgICAgIC8vIHRleHQtc2hhZG93OiAwIDAgNXB4ICRiYWNrZ3JvdW5kQ29sb3I7XFxuICAgIH1cXG59XFxuXFxuLmZvb3RlciB7XFxuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCAjMjQ1NDk0O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2NhN2RmO1xcbn1cXG5cXG4uaXMtb3dlcmZsb3ctYXV0byB7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4uaXMtd29yZC1icmVhay1hbGwge1xcbiAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XFxufVxcblxcbiNwYXNzd29yZC1zZXR0aW5ncy1zaG9ydGN1dCB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG59XFxuXFxuaW5wdXQge1xcbiAgICArc3Bhbi50b2dnbGUge1xcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICAgICAgaGVpZ2h0OiAyNHB4O1xcbiAgICAgICAgd2lkdGg6IDQwcHg7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAtNnB4O1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC0yNHB4O1xcbiAgICAgICAgYmFja2dyb3VuZDogJGJhY2tncm91bmRDb2xvckxpZ2h0O1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwdmg7XFxuICAgICAgICBjb2xvcjogdmFyKC0tYWN0aXZlLWNvbG9yKTtcXG5cXG4gICAgICAgICY6YmVmb3JlIHtcXG4gICAgICAgICAgICBjb250ZW50OiBcXFwiIFxcXCI7XFxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgICAgIHRvcDogNHB4O1xcbiAgICAgICAgICAgIGxlZnQ6IDRweDtcXG4gICAgICAgICAgICByaWdodDogYXV0bztcXG4gICAgICAgICAgICBoZWlnaHQ6IDE2cHg7XFxuICAgICAgICAgICAgd2lkdGg6IDE2cHg7XFxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2JiYjtcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMDB2aDtcXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAmW3R5cGU9cmFkaW9dIHtcXG4gICAgICAgICY6Y2hlY2tlZCB7XFxuICAgICAgICAgICAgLy8gYWNjZW50LWNvbG9yOiB2YXIoLS1hY3RpdmUtY29sb3IpO1xcbiAgICAgICAgICAgIC8vIGJvcmRlcjogbm9uZTtcXG4gICAgICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLWFjdGl2ZS1jb2xvcik7XFxuICAgICAgICB9XFxuXFxuICAgICAgICBhcHBlYXJhbmNlOiBub25lO1xcbiAgICAgICAgLyogUmltdW92ZSBsbyBzdGlsZSBwcmVkZWZpbml0byAqL1xcbiAgICAgICAgd2lkdGg6IDE0cHg7XFxuICAgICAgICBoZWlnaHQ6IDE0cHg7XFxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjYmJiO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcblxcbiAgICAgICAgJjpjaGVja2VkOjpiZWZvcmUge1xcbiAgICAgICAgICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICAgICAgICAgIHdpZHRoOiAxMHB4O1xcbiAgICAgICAgICAgIGhlaWdodDogMTBweDtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY3RpdmUtY29sb3IpO1xcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tYWN0aXZlLWNvbG9yKTtcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgICAgIHRvcDogNTAlO1xcbiAgICAgICAgICAgIGxlZnQ6IDUwJTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAmOmNoZWNrZWQrc3Bhbi50b2dnbGU6YmVmb3JlIHtcXG4gICAgICAgIGxlZnQ6IDIwcHg7XFxuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1hY3RpdmUtY29sb3IpO1xcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XFxuICAgIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQYXNzcGhyYXNlIHtcbiAgICBjb25zdHJ1Y3Rvcih3b3JkTGlzdCwgd29yZENvdW50ID0gNCwgc2VwYXJhdG9yID0gJy0nLCBpbmNsdWRlTnVtYmVycyA9IGZhbHNlLCBjYXBpdGFsaXplID0gZmFsc2UpIHtcbiAgICAgICAgdGhpcy53b3JkTGlzdCA9IHdvcmRMaXN0O1xuICAgICAgICB0aGlzLndvcmRDb3VudCA9IHdvcmRDb3VudDtcbiAgICAgICAgdGhpcy5zZXBhcmF0b3IgPSBzZXBhcmF0b3I7XG4gICAgICAgIHRoaXMuaW5jbHVkZU51bWJlcnMgPSBpbmNsdWRlTnVtYmVycztcbiAgICAgICAgdGhpcy5jYXBpdGFsaXplID0gY2FwaXRhbGl6ZTtcbiAgICB9XG5cbiAgICBnZW5lcmF0ZSgpIHtcbiAgICAgICAgbGV0IHBhc3NwaHJhc2UgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLndvcmRDb3VudDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgd29yZCA9IHRoaXMud29yZExpc3RbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy53b3JkTGlzdC5sZW5ndGgpXTtcbiAgICAgICAgICAgIGlmICh0aGlzLmNhcGl0YWxpemUpIHtcbiAgICAgICAgICAgICAgICB3b3JkID0gdGhpcy4jcmFuZG9tQ2FwaXRhbGl6ZSh3b3JkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHBhc3NwaHJhc2UucHVzaCh3b3JkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmluY2x1ZGVOdW1iZXJzKSB7XG4gICAgICAgICAgICBwYXNzcGhyYXNlLnB1c2goTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwKSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcGFzc3BocmFzZTogcGFzc3BocmFzZS5qb2luKHRoaXMuc2VwYXJhdG9yKSxcbiAgICAgICAgICAgIHN0cmVuZ3RoOiB0aGlzLiNnZXRTdHJlbmd0aCgpLFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgI3JhbmRvbUNhcGl0YWxpemUod29yZCkge1xuICAgICAgICByZXR1cm4gd29yZFxuICAgICAgICAgICAgLnNwbGl0KCcnKVxuICAgICAgICAgICAgLm1hcChjaGFyID0+IChNYXRoLnJhbmRvbSgpIDwgMC41ID8gY2hhci50b1VwcGVyQ2FzZSgpIDogY2hhcikpXG4gICAgICAgICAgICAuam9pbignJyk7XG4gICAgfVxuXG4gICAgI2dldFN0cmVuZ3RoKCkge1xuICAgICAgICBsZXQgZW50cm9weSA9IHRoaXMud29yZENvdW50ICogTWF0aC5sb2cyKHRoaXMud29yZExpc3QubGVuZ3RoKTtcbiAgICAgICAgaWYgKHRoaXMuaW5jbHVkZU51bWJlcnMpIGVudHJvcHkgKz0gTWF0aC5sb2cyKDEwMCk7XG4gICAgICAgIGlmICh0aGlzLmNhcGl0YWxpemUpIGVudHJvcHkgKz0gdGhpcy53b3JkQ291bnQgKiAxLjU7IC8vIEFwcHJveGltYXRlIGV4dHJhIGVudHJvcHkgZnJvbSBjYXBpdGFsaXphdGlvblxuICAgICAgICByZXR1cm4gZW50cm9weTtcbiAgICB9XG59XG4iLCJpbXBvcnQgUGFzc3BocmFzZSBmcm9tIFwiLi9nZW5lcmF0b3JcIjtcbmV4cG9ydCB7IFBBU1NQSFJBU0VfV09SRExJU1QgfSBmcm9tIFwiLi91dGlsc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBQYXNzcGhyYXNlO1xuIiwiZXhwb3J0IGNvbnN0IFBBU1NQSFJBU0VfV09SRExJU1QgPSBbXG4gICAgXCJhcHBsZVwiLCBcImJhbmFuYVwiLCBcImNoZXJyeVwiLCBcImRlbHRhXCIsIFwiZWNob1wiLCBcImZveHRyb3RcIiwgXCJnb2xmXCIsIFwiaG90ZWxcIiwgXCJpbmRpYVwiLCBcImp1bGlldFwiLFxuICAgIFwia2FuZ2Fyb29cIiwgXCJsZW1vblwiLCBcIm1hbmdvXCIsIFwibmVjdGFyXCIsIFwib3JhbmdlXCIsIFwicGFwYXlhXCIsIFwicXVhc2FyXCIsIFwicmFzcGJlcnJ5XCIsIFwic3RyYXdiZXJyeVwiLCBcInRhbmdvXCIsXG4gICAgXCJ1bWJyZWxsYVwiLCBcInZpb2xldFwiLCBcIndhbG51dFwiLCBcInhlbm9uXCIsIFwieWFua2VlXCIsIFwiemVicmFcIiwgXCJhbGJhdHJvc3NcIiwgXCJidXR0ZXJmbHlcIiwgXCJjb2NvbnV0XCIsIFwiZHJhZ29uXCIsXG4gICAgXCJlbGVwaGFudFwiLCBcImZpcmVmbHlcIiwgXCJnb3JpbGxhXCIsIFwiaG9yaXpvblwiLCBcImlnbG9vXCIsIFwiamFja2FsXCIsIFwia29hbGFcIiwgXCJsaWdodG5pbmdcIiwgXCJtb3VudGFpblwiLCBcIm5lYnVsYVwiLFxuICAgIFwib2NlYW5cIiwgXCJwZW5ndWluXCIsIFwicXVva2thXCIsIFwicmFpbmJvd1wiLCBcInNhcHBoaXJlXCIsIFwidG9wYXpcIiwgXCJ1bmljb3JuXCIsIFwidm9sY2Fub1wiLCBcIndoaXJscG9vbFwiLCBcInhlcm94XCIsXG4gICAgXCJ5ZWxsb3dcIiwgXCJ6ZXBwZWxpblwiLCBcImFzdGVyb2lkXCIsIFwiYmxpenphcmRcIiwgXCJjb21ldFwiLCBcImRvbHBoaW5cIiwgXCJlbWVyYWxkXCIsIFwiZmFsY29uXCIsIFwiZ2FsYXh5XCIsIFwiaHVycmljYW5lXCIsXG4gICAgXCJpbGx1c2lvblwiLCBcImp1bmdsZVwiLCBcImtpbmdkb21cIiwgXCJsaWdodGhvdXNlXCIsIFwibWV0ZW9yXCIsIFwibm92ZW1iZXJcIiwgXCJvY3RvcHVzXCIsIFwicGFyYWRpc2VcIiwgXCJxdWlja3NhbmRcIixcbiAgICBcInJpcHRpZGVcIiwgXCJzdW5zaGluZVwiLCBcInRodW5kZXJcIiwgXCJ1bmRlcnRvd1wiLCBcInZvcnRleFwiLCBcIndoYWxlXCIsIFwieHlsb3Bob25lXCIsIFwieWV0aVwiLCBcInplbml0aFwiLCBcImF2YWxhbmNoZVwiLFxuICAgIFwiYmx1ZWJlcnJ5XCIsIFwiY29zbW9zXCIsIFwiZGF5bGlnaHRcIiwgXCJldmVyZXN0XCIsIFwiZmlyZXN0b3JtXCIsIFwiZ2xhY2llclwiLCBcImh1bW1pbmdiaXJkXCIsIFwiaXNvdG9wZVwiLCBcImppZ3Nhd1wiLFxuICAgIFwia3J5cHRvblwiLCBcImxhYnlyaW50aFwiLCBcIm1pcmFnZVwiLCBcIm5pZ2h0ZmFsbFwiLCBcIm9ic2lkaWFuXCIsIFwicHV6emxlXCIsIFwicXVhbnR1bVwiLCBcInJlbGljXCIsIFwic3RhcmxpZ2h0XCIsXG4gICAgXCJ0ZWxlc2NvcGVcIiwgXCJ1dG9waWFcIiwgXCJ2b3lhZ2VyXCIsIFwid2luZHN3ZXB0XCIsIFwieGVub3BoaWxlXCIsIFwieW9uZGVyXCIsIFwiemVwcGVsaW5cIlxuXTsiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQYXNzd29yZCB7XG4gICAgY29uc3RydWN0b3IoYXZhaWxhYmxlQ2hhcnMsIHBhc3N3b3JkTGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuYXZhaWxhYmxlQ2hhcnMgPSBhdmFpbGFibGVDaGFycztcbiAgICAgICAgdGhpcy5wYXNzd29yZExlbmd0aCA9IHBhc3N3b3JkTGVuZ3RoO1xuICAgIH1cblxuICAgIGdlbmVyYXRlKCkge1xuICAgICAgICBpZiAodGhpcy5hdmFpbGFibGVDaGFycy5zaXplID09PSAwKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIGNoYXJhY3RlcnMgYXZhaWxhYmxlIHRvIGdlbmVyYXRlIHBhc3N3b3JkJyk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjaGFyc0FycmF5ID0gQXJyYXkuZnJvbSh0aGlzLmF2YWlsYWJsZUNoYXJzKTtcbiAgICAgICAgY29uc3QgcmFuZG9tVmFsdWVzID0gY3J5cHRvLmdldFJhbmRvbVZhbHVlcyhuZXcgVWludDMyQXJyYXkodGhpcy5wYXNzd29yZExlbmd0aCkpO1xuXG4gICAgICAgIGNvbnN0IHBhc3N3b3JkID0gQXJyYXkuZnJvbSh7IGxlbmd0aDogdGhpcy5wYXNzd29yZExlbmd0aCB9LCAoXywgaSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoY2hhcnNBcnJheVtyYW5kb21WYWx1ZXNbaV0gJSBjaGFyc0FycmF5Lmxlbmd0aF0pO1xuICAgICAgICB9KS5qb2luKCcnKTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcGFzc3dvcmQsXG4gICAgICAgICAgICBzdHJlbmd0aDogdGhpcy4jY2FsY3VsYXRlU3RyZW5ndGgocGFzc3dvcmQpLFxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICAjY2FsY3VsYXRlU3RyZW5ndGgocGFzc3dvcmQpIHtcbiAgICAgICAgY29uc3QgdW5pcXVlQ2hhcnMgPSBuZXcgU2V0KHBhc3N3b3JkKS5zaXplO1xuICAgICAgICBjb25zdCBlbnRyb3B5ID0gcGFzc3dvcmQubGVuZ3RoICogTWF0aC5sb2cyKHVuaXF1ZUNoYXJzKTtcbiAgICAgICAgcmV0dXJuIGVudHJvcHkudG9GaXhlZCgyKTtcblxuICAgIH1cbn0iLCJpbXBvcnQgUGFzc3dvcmQgZnJvbSBcIi4vZ2VuZXJhdG9yXCI7XG5leHBvcnQge1xuICAgIE5VTUJFUlMsXG4gICAgTE9XRVJDQVNFLFxuICAgIFVQUEVSQ0FTRSxcbiAgICBTUEVDSUFMX0NIQVJBQ1RFUlMsXG4gICAgU0lNSUxBUl9DSEFSUyxcbn0gZnJvbSBcIi4vdXRpbHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgUGFzc3dvcmQ7XG4iLCJjb25zdCBOVU1CRVJTID0gbmV3IFVpbnQ4QXJyYXkoWzQ4LCA0OSwgNTAsIDUxLCA1MiwgNTMsIDU0LCA1NSwgNTYsIDU3XSk7XG5jb25zdCBMT1dFUkNBU0UgPSBuZXcgVWludDhBcnJheShbXG4gICAgOTcsIDk4LCA5OSwgMTAwLCAxMDEsIDEwMiwgMTAzLCAxMDQsIDEwNSwgMTA2LCAxMDcsIDEwOCwgMTA5LCAxMTAsIDExMSwgMTEyLCAxMTMsIDExNCwgMTE1LCAxMTYsIDExNywgMTE4LCAxMTksIDEyMCxcbiAgICAxMjEsIDEyMixcbl0pO1xuY29uc3QgVVBQRVJDQVNFID0gbmV3IFVpbnQ4QXJyYXkoW1xuICAgIDY1LCA2NiwgNjcsIDY4LCA2OSwgNzAsIDcxLCA3MiwgNzMsIDc0LCA3NSwgNzYsIDc3LCA3OCwgNzksIDgwLCA4MSwgODIsIDgzLCA4NCwgODUsIDg2LCA4NywgODgsIDg5LCA5MCxcbl0pO1xuY29uc3QgU1BFQ0lBTF9DSEFSQUNURVJTID0gbmV3IFVpbnQ4QXJyYXkoWzMzLCAzNSwgMzYsIDM3LCAzOCwgNDAsIDQxLCA0MiwgNDMsIDY0LCA5NF0pO1xuY29uc3QgU0lNSUxBUl9DSEFSUyA9IHtcbiAgICAwOiBbNDgsIDc5LCAxMTEsIDczLCAxMDVdLCAvLyAwLCBPLCBsLCBJXG4gICAgMTogWzQ5LCA3NiwgMTA4XSwgLy8gMSwgbCwgSVxuICAgIDU6IFs1MywgODMsIDExNSwgNTYsIDg4XSwgLy8gNSwgUywgcywgOCwgQlxuICAgIDY6IFs1NCwgNjYsIDk4XSwgLy8gNiwgYiwgQlxuICAgIDg6IFs1NiwgNjYsIDk4XSwgLy8gOCwgQiwgYlxuICAgIDk6IFs1NywgNzEsIDEwMywgNTQsIDY2XSwgLy8gOSwgZywgRywgNiwgYlxuICAgIGE6IFs5NywgNjQsIDY1XSwgLy8gYSwgQCwgQVxuICAgIGU6IFsxMDEsIDY3LCA5OV0sIC8vIGUsIGMsIENcbiAgICBnOiBbMTAzLCA4MSwgMTEzLCA1N10sIC8vIGcsIHEsIFEsIDlcbiAgICBsOiBbMTA4LCA0OSwgNzMsIDEwNV0sIC8vIGwsIDEsIEksIGlcbiAgICBvOiBbMTExLCA0OCwgNzksIDk3LCA2NV0sIC8vIG8sIDAsIE8sIGEsIEFcbiAgICBzOiBbMTE1LCA1MywgODNdLCAvLyBzLCA1LCBTXG4gICAgdDogWzExNiwgNTUsIDg0XSwgLy8gdCwgNywgVFxuICAgIHo6IFsxMjIsIDUwXSwgLy8geiwgMlxufTtcblxuZXhwb3J0IHtcbiAgICBOVU1CRVJTLFxuICAgIExPV0VSQ0FTRSxcbiAgICBVUFBFUkNBU0UsXG4gICAgU1BFQ0lBTF9DSEFSQUNURVJTLFxuICAgIFNJTUlMQVJfQ0hBUlMsXG59IiwiLy8gbG9hZCBzdHlsZXNcbmltcG9ydCAnLi4vc3R5bGVzL3N0eWxlLnNjc3MnO1xuXG4vLyBsb2FkIHNpdGVtYXAgJiByb2JvdHNcbmNvbnN0IHNpdGVtYXAgPSByZXF1aXJlKCcuLi8uLi9zaXRlbWFwLnhtbCcpO1xuY29uc3Qgcm9ib3RzID0gcmVxdWlyZSgnLi4vLi4vcm9ib3RzLnR4dCcpO1xuXG4vLyBsb2FkIGltYWdlc1xuaW1wb3J0IGZhdmljb25JY28gZnJvbSAnLi4vaW1hZ2VzL2Zhdmljb24uaWNvJztcbmltcG9ydCBmYXZpY29uSW1hZ2UgZnJvbSAnLi4vaW1hZ2VzL2Zhdmljb24ucG5nJztcbmltcG9ydCBzaGFyZUltYWdlIGZyb20gJy4uL2ltYWdlcy9zaGFyZS5wbmcnO1xuXG5pbXBvcnQgUGFzc3dvcmQsIHtcbiAgTlVNQkVSUyxcbiAgTE9XRVJDQVNFLFxuICBVUFBFUkNBU0UsXG4gIFNQRUNJQUxfQ0hBUkFDVEVSUyxcbiAgLy8gU0lNSUxBUl9DSEFSUyxcbn0gZnJvbSAnLi9nZW5lYXJhdG9ycy9wYXNzd29yZCdcbmltcG9ydCBQYXNzcGhyYXNlLCB7IFBBU1NQSFJBU0VfV09SRExJU1QgfSBmcm9tICcuL2dlbmVhcmF0b3JzL3Bhc3NwaHJhc2UnXG5cbmxldCBhdmFpbGFibGVDaGFycyA9IFtdO1xuXG5jb25zdCBib2R5ZEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvZHknKVswXTtcbmNvbnN0IHB3ZEdlbmVyYXRlZEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3B3ZC1nZW5lcmF0ZWQnKTtcbmNvbnN0IG5vdGlmaWNhdGlvbkVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25vdGlmaWNhdGlvbicpO1xuY29uc3QgYWN0aW9uUmVkb0VsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FjdGlvbi1yZWRvJyk7XG5jb25zdCBub3RpZmljYXRpb25EZWxldGVCdG5FbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ub3RpZmljYXRpb24gYnV0dG9uLmRlbGV0ZScpO1xuY29uc3Qgc2V0dGluZ3NQYXNzd29yZExlbmd0aFJhbmdlRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2V0dGluZ3MtcGFzc3dvcmQtbGVuZ3RoLXJhbmdlJyk7XG5jb25zdCBzZXR0aW5nc1Bhc3NwaHJhc2VMZW5ndGhSYW5nZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NldHRpbmdzLXBhc3NwaHJhc2UtbGVuZ3RoLXJhbmdlJyk7XG5jb25zdCBzZXR0aW5nc1Bhc3N3b3JkTGVuZ3RoRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2V0dGluZ3MtcGFzc3dvcmQtbGVuZ3RoJyk7XG5jb25zdCBwd2RDb250YWluZXJFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwd2QtY29udGFpbmVyJyk7XG5jb25zdCBzZXR0aW5nc1Bhc3NwaHJhc2VTZXBhcmF0b3JFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZXR0aW5ncy1wYXNzcGhyYXNlLXNlcGFyYXRvcicpO1xuY29uc3Qgc2V0dGluZ3NQYXNzcGhyYXNlTGVuZ3RoRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2V0dGluZ3MtcGFzc3BocmFzZS1sZW5ndGgnKTtcbmNvbnN0IHB3ZEdlbmVyYXRlZFN0cmVuZ3RoRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHdkLXN0cmVuZ3RoJyk7XG5jb25zdCBwd2RHZW5lcmF0ZWRTdHJlbmd0aFRhZ0JveEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3B3ZC1zdHJlbmd0aC10YWdib3gnKTtcbmNvbnN0IHB3ZEdlbmVyYXRlZFN0cmVuZ3RoVGFnRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHdkLXN0cmVuZ3RoLXRhZycpO1xuY29uc3Qgc2V0dGluZ3NBbGxvd051bWJlcnNFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZXR0aW5ncy1hbGxvdy1udW1iZXJzJyk7XG5jb25zdCBzZXR0aW5nc1Bhc3NwaHJhc2VDYXBpdGFsaXplRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2V0dGluZ3MtcGFzc3BocmFzZS1jYXBpdGFsaXplJyk7XG5jb25zdCBzZXR0aW5nc1Bhc3NwaHJhc2VJbmNsdWRlTnVtYmVyc0VsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NldHRpbmdzLXBhc3NwaHJhc2UtaW5jbHVkZS1udW1iZXJzJyk7XG5jb25zdCBzZXR0aW5nc0FsbG93VXBwZXJjYXNlRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2V0dGluZ3MtYWxsb3ctdXBwZXJjYXNlJyk7XG5jb25zdCBzZXR0aW5nc0FsbG93TG93ZXJjYXNlRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2V0dGluZ3MtYWxsb3ctbG93ZXJjYXNlJyk7XG5jb25zdCBzZXR0aW5nc0FsbG93U3ltYm9sc0VsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NldHRpbmdzLWFsbG93LXN5bWJvbHMnKTtcbmNvbnN0IHNldHRpbmdzRXhjbHVkZUR1cGxpY2F0ZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NldHRpbmdzLWV4Y2x1ZGUtZHVwbGljYXRlLWNoYXJhY3RlcnMnKTtcbmNvbnN0IHNldHRpbmdzRXhjbHVkZVNpbWlsYXJFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZXR0aW5ncy1leGNsdWRlLXNpbWlsYXItY2hhcmFjdGVycycpO1xuXG5cbmZ1bmN0aW9uIGdldFBhc3N3b3JkTGVuZ3RoKCkge1xuICBjb25zdCBsZW5ndGggPSBzZXR0aW5nc1Bhc3N3b3JkTGVuZ3RoRWwudmFsdWU7XG4gIHRyeSB7XG4gICAgcmV0dXJuIHBhcnNlSW50KGxlbmd0aCB8fCBzZXR0aW5nc1Bhc3N3b3JkTGVuZ3RoRWwuZ2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicpKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5lcnJvcignZXJyb3InLCBlKTtcbiAgfVxuICByZXR1cm4gMDtcbn1cblxuZnVuY3Rpb24gZ2V0UGFzc3BocmFzZUxlbmd0aCgpIHtcbiAgY29uc3QgbGVuZ3RoID0gc2V0dGluZ3NQYXNzcGhyYXNlTGVuZ3RoRWwudmFsdWU7XG4gIHRyeSB7XG4gICAgcmV0dXJuIHBhcnNlSW50KGxlbmd0aCB8fCBzZXR0aW5nc1Bhc3NwaHJhc2VMZW5ndGhFbC5nZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJykpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmVycm9yKCdlcnJvcicsIGUpO1xuICB9XG4gIHJldHVybiAwO1xufVxuXG5mdW5jdGlvbiBnZXRQYXNzcGhyYXNlU2VwYXJhdG9yKCkge1xuICBjb25zdCBzZXBhcmF0b3IgPSBzZXR0aW5nc1Bhc3NwaHJhc2VTZXBhcmF0b3JFbC52YWx1ZTtcbiAgdHJ5IHtcbiAgICByZXR1cm4gc2VwYXJhdG9yIHx8IHNldHRpbmdzUGFzc3BocmFzZVNlcGFyYXRvckVsLmdldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5lcnJvcignZXJyb3InLCBlKTtcbiAgfVxuICByZXR1cm4gJy0nO1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZUF2YWlsYWJsZUNoYXJzTGVuZ3RoKCkge1xuICBpZiAoYXZhaWxhYmxlQ2hhcnMubGVuZ3RoID09PSAwKSB7XG4gICAgYWN0aW9uUmVkb0VsLmNsYXNzTGlzdC5hZGQoJ2lzLWludmlzaWJsZScpO1xuICAgIHJldHVybjtcbiAgfVxuICBhY3Rpb25SZWRvRWwuY2xhc3NMaXN0LnJlbW92ZSgnaXMtaW52aXNpYmxlJyk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUF2YWlsYWJsZUNoYXJzKCkge1xuICBjb25zb2xlLnRpbWUoJ3VwZGF0ZUF2YWlsYWJsZUNoYXJzJyk7XG4gIGF2YWlsYWJsZUNoYXJzID0gbmV3IFNldCgpO1xuXG4gIGlmIChzZXR0aW5nc0FsbG93TnVtYmVyc0VsLmNoZWNrZWQpIGF2YWlsYWJsZUNoYXJzID0gbmV3IFNldChbLi4uYXZhaWxhYmxlQ2hhcnMsIC4uLk5VTUJFUlNdKTtcbiAgaWYgKHNldHRpbmdzQWxsb3dVcHBlcmNhc2VFbC5jaGVja2VkKSBhdmFpbGFibGVDaGFycyA9IG5ldyBTZXQoWy4uLmF2YWlsYWJsZUNoYXJzLCAuLi5VUFBFUkNBU0VdKTtcbiAgaWYgKHNldHRpbmdzQWxsb3dMb3dlcmNhc2VFbC5jaGVja2VkKSBhdmFpbGFibGVDaGFycyA9IG5ldyBTZXQoWy4uLmF2YWlsYWJsZUNoYXJzLCAuLi5MT1dFUkNBU0VdKTtcbiAgaWYgKHNldHRpbmdzQWxsb3dTeW1ib2xzRWwuY2hlY2tlZCkgYXZhaWxhYmxlQ2hhcnMgPSBuZXcgU2V0KFsuLi5hdmFpbGFibGVDaGFycywgLi4uU1BFQ0lBTF9DSEFSQUNURVJTXSk7XG5cbiAgdmFsaWRhdGVBdmFpbGFibGVDaGFyc0xlbmd0aCgpO1xuICBjb25zb2xlLnRpbWVFbmQoJ3VwZGF0ZUF2YWlsYWJsZUNoYXJzJyk7XG59XG5cbmZ1bmN0aW9uIHNob3dOb3RpZmljYXRpb24oKSB7XG4gIG5vdGlmaWNhdGlvbkVsLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWludmlzaWJsZScpO1xuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBub3RpZmljYXRpb25FbC5jbGFzc0xpc3QuYWRkKCdpcy1pbnZpc2libGUnKTtcbiAgfSwgMTAwMDApO1xufVxuXG5hc3luYyBmdW5jdGlvbiBjb3B5VG9DbGlwYm9hcmQoKSB7XG4gIHRyeSB7XG4gICAgYXdhaXQgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQocHdkR2VuZXJhdGVkRWwuaW5uZXJUZXh0KTtcbiAgICBzaG93Tm90aWZpY2F0aW9uKCk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNvcHlpbmcgdGV4dDogJywgZXJyKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVQYXNzd29yZCgpIHtcbiAgaWYgKGF2YWlsYWJsZUNoYXJzLnNpemUgPT09IDApIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cbiAgY29uc3QgcGFzc3dvcmRMZW5ndGggPSBnZXRQYXNzd29yZExlbmd0aCgpO1xuICBjb25zdCBnZW5lcmF0b3IgPSBuZXcgUGFzc3dvcmQoYXZhaWxhYmxlQ2hhcnMsIHBhc3N3b3JkTGVuZ3RoKTtcbiAgcmV0dXJuIGdlbmVyYXRvci5nZW5lcmF0ZSgpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVQYXNzcGhyYXNlKCkge1xuICBjb25zdCBwYXNzcGhyYXNlTGVuZ3RoID0gZ2V0UGFzc3BocmFzZUxlbmd0aCgpO1xuICBjb25zdCBzZXBhcmF0b3IgPSBnZXRQYXNzcGhyYXNlU2VwYXJhdG9yKCk7XG4gIGNvbnN0IGNhcGl0YWxpemUgPSBzZXR0aW5nc1Bhc3NwaHJhc2VDYXBpdGFsaXplRWwuY2hlY2tlZDtcbiAgY29uc3QgaW5jbHVkZU51bWJlcnMgPSBzZXR0aW5nc1Bhc3NwaHJhc2VJbmNsdWRlTnVtYmVyc0VsLmNoZWNrZWQ7XG4gIGNvbnN0IGdlbmVyYXRvciA9IG5ldyBQYXNzcGhyYXNlKFBBU1NQSFJBU0VfV09SRExJU1QsIHBhc3NwaHJhc2VMZW5ndGgsIHNlcGFyYXRvciwgaW5jbHVkZU51bWJlcnMsIGNhcGl0YWxpemUpO1xuICByZXR1cm4gZ2VuZXJhdG9yLmdlbmVyYXRlKClcbn1cblxuZnVuY3Rpb24gdXBkYXRlUGFzc3dvcmRTZXR0aW5ncygpIHtcbiAgY29uc3QgcHdkTW9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJwd2QtbW9kZVwiXTpjaGVja2VkJykudmFsdWU7XG4gIHN3aXRjaCAocHdkTW9kZSkge1xuICAgIGNhc2UgJ2Vhc3ktdG8tcmVhZCc6IHtcbiAgICAgIHNldHRpbmdzRXhjbHVkZVNpbWlsYXJFbC5jaGVja2VkID0gdHJ1ZTtcbiAgICAgIHNldHRpbmdzRXhjbHVkZUR1cGxpY2F0ZUVsLmNoZWNrZWQgPSBmYWxzZTtcblxuICAgICAgc2V0dGluZ3NBbGxvd051bWJlcnNFbC5jaGVja2VkID0gZmFsc2U7XG4gICAgICBzZXR0aW5nc0FsbG93VXBwZXJjYXNlRWwuY2hlY2tlZCA9IHRydWU7XG4gICAgICBzZXR0aW5nc0FsbG93TG93ZXJjYXNlRWwuY2hlY2tlZCA9IHRydWU7XG4gICAgICBzZXR0aW5nc0FsbG93U3ltYm9sc0VsLmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBjYXNlICdlYXN5LXRvLXNheSc6IHtcbiAgICAgIHNldHRpbmdzRXhjbHVkZVNpbWlsYXJFbC5jaGVja2VkID0gZmFsc2U7XG4gICAgICBzZXR0aW5nc0V4Y2x1ZGVEdXBsaWNhdGVFbC5jaGVja2VkID0gZmFsc2U7XG5cbiAgICAgIHNldHRpbmdzQWxsb3dOdW1iZXJzRWwuY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgc2V0dGluZ3NBbGxvd1VwcGVyY2FzZUVsLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgc2V0dGluZ3NBbGxvd0xvd2VyY2FzZUVsLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgc2V0dGluZ3NBbGxvd1N5bWJvbHNFbC5jaGVja2VkID0gZmFsc2U7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgY2FzZSAnYWxsLWNoYXJhY3RlcnMnOlxuICAgIGRlZmF1bHQ6IHtcbiAgICAgIHNldHRpbmdzRXhjbHVkZVNpbWlsYXJFbC5jaGVja2VkID0gZmFsc2U7XG4gICAgICBzZXR0aW5nc0V4Y2x1ZGVEdXBsaWNhdGVFbC5jaGVja2VkID0gZmFsc2U7XG5cbiAgICAgIHNldHRpbmdzQWxsb3dOdW1iZXJzRWwuY2hlY2tlZCA9IHRydWU7XG4gICAgICBzZXR0aW5nc0FsbG93VXBwZXJjYXNlRWwuY2hlY2tlZCA9IHRydWU7XG4gICAgICBzZXR0aW5nc0FsbG93TG93ZXJjYXNlRWwuY2hlY2tlZCA9IHRydWU7XG4gICAgICBzZXR0aW5nc0FsbG93U3ltYm9sc0VsLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHVwZGF0ZUF2YWlsYWJsZUNoYXJzKCk7XG59XG5cbmZ1bmN0aW9uIHNldFN0cmVuZ3RoKHN0cmVuZ3RoKSB7XG4gIGJvZHlkRWwuY2xhc3NMaXN0LnJlbW92ZShcbiAgICAnaXMtZGFuZ2VyJyxcbiAgICAnaXMtd2FybmluZycsXG4gICAgJ2lzLWluZm8nLFxuICAgICdpcy1zdWNjZXNzJyxcbiAgKTtcbiAgcHdkR2VuZXJhdGVkU3RyZW5ndGhFbC5jbGFzc0xpc3QucmVtb3ZlKFxuICAgICdpcy1kYW5nZXInLFxuICAgICdpcy13YXJuaW5nJyxcbiAgICAnaXMtaW5mbycsXG4gICAgJ2lzLXN1Y2Nlc3MnLFxuICApO1xuICBwd2RDb250YWluZXJFbC5jbGFzc0xpc3QucmVtb3ZlKFxuICAgICdpcy1kYW5nZXInLFxuICAgICdpcy13YXJuaW5nJyxcbiAgICAnaXMtaW5mbycsXG4gICAgJ2lzLXN1Y2Nlc3MnLFxuICApO1xuICBzZXR0aW5nc1Bhc3N3b3JkTGVuZ3RoUmFuZ2VFbC5jbGFzc0xpc3QucmVtb3ZlKFxuICAgICdpcy1kYW5nZXInLFxuICAgICdpcy13YXJuaW5nJyxcbiAgICAnaXMtaW5mbycsXG4gICAgJ2lzLXN1Y2Nlc3MnLFxuICApO1xuICBwd2RHZW5lcmF0ZWRTdHJlbmd0aFRhZ0JveEVsLmNsYXNzTGlzdC5yZW1vdmUoXG4gICAgJ2hhcy1iYWNrZ3JvdW5kLWRhbmdlcicsXG4gICAgJ2hhcy1iYWNrZ3JvdW5kLXdhcm5pbmcnLFxuICAgICdoYXMtYmFja2dyb3VuZC1pbmZvJyxcbiAgICAnaGFzLWJhY2tncm91bmQtc3VjY2VzcycsXG4gICAgJ2hhcy10ZXh0LWRhbmdlci1saWdodCcsXG4gICAgJ2hhcy10ZXh0LXdhcm5pbmctZGFyaycsXG4gICAgJ2hhcy10ZXh0LWluZm8tbGlnaHQnLFxuICAgICdoYXMtdGV4dC1zdWNjZXNzLWxpZ2h0J1xuICApO1xuXG4gIGlmIChzdHJlbmd0aCA8IDI4KSB7XG4gICAgLy8gTW9sdG8gZGVib2xlXG4gICAgYm9keWRFbC5jbGFzc0xpc3QuYWRkKCdpcy1kYW5nZXInKTtcbiAgICBwd2RDb250YWluZXJFbC5jbGFzc0xpc3QuYWRkKCdpcy1kYW5nZXInKTtcbiAgICBwd2RHZW5lcmF0ZWRTdHJlbmd0aEVsLmNsYXNzTGlzdC5hZGQoJ2lzLWRhbmdlcicpO1xuICAgIHNldHRpbmdzUGFzc3dvcmRMZW5ndGhSYW5nZUVsLmNsYXNzTGlzdC5hZGQoJ2lzLWRhbmdlcicpO1xuICAgIHB3ZEdlbmVyYXRlZFN0cmVuZ3RoVGFnQm94RWwuY2xhc3NMaXN0LmFkZCgnaGFzLWJhY2tncm91bmQtZGFuZ2VyJywgJ2hhcy10ZXh0LWRhbmdlci1saWdodCcpO1xuICAgIHB3ZEdlbmVyYXRlZFN0cmVuZ3RoVGFnRWwuaW5uZXJUZXh0ID0gJ1RvbyBlYXN5IHRvIGd1ZXNzJztcbiAgfSBlbHNlIGlmIChzdHJlbmd0aCA8IDM2KSB7XG4gICAgLy8gRGVib2xlXG4gICAgYm9keWRFbC5jbGFzc0xpc3QuYWRkKCdpcy13YXJuaW5nJyk7XG4gICAgcHdkQ29udGFpbmVyRWwuY2xhc3NMaXN0LmFkZCgnaXMtd2FybmluZycpO1xuICAgIHB3ZEdlbmVyYXRlZFN0cmVuZ3RoRWwuY2xhc3NMaXN0LmFkZCgnaXMtd2FybmluZycpO1xuICAgIHNldHRpbmdzUGFzc3dvcmRMZW5ndGhSYW5nZUVsLmNsYXNzTGlzdC5hZGQoJ2lzLXdhcm5pbmcnKTtcbiAgICBwd2RHZW5lcmF0ZWRTdHJlbmd0aFRhZ0JveEVsLmNsYXNzTGlzdC5hZGQoJ2hhcy1iYWNrZ3JvdW5kLXdhcm5pbmcnLCAnaGFzLXRleHQtd2FybmluZy1kYXJrJyk7XG4gICAgcHdkR2VuZXJhdGVkU3RyZW5ndGhUYWdFbC5pbm5lclRleHQgPSAnQXQgcmlzayBvZiBiZWluZyBjb21wcm9taXNlZCc7XG5cbiAgfSBlbHNlIGlmIChzdHJlbmd0aCA8IDYwKSB7XG4gICAgLy8gQnVvbmFcbiAgICBib2R5ZEVsLmNsYXNzTGlzdC5hZGQoJ2lzLWluZm8nKTtcbiAgICBwd2RDb250YWluZXJFbC5jbGFzc0xpc3QuYWRkKCdpcy1pbmZvJyk7XG4gICAgcHdkR2VuZXJhdGVkU3RyZW5ndGhFbC5jbGFzc0xpc3QuYWRkKCdpcy1pbmZvJyk7XG4gICAgc2V0dGluZ3NQYXNzd29yZExlbmd0aFJhbmdlRWwuY2xhc3NMaXN0LmFkZCgnaXMtaW5mbycpO1xuICAgIHB3ZEdlbmVyYXRlZFN0cmVuZ3RoVGFnQm94RWwuY2xhc3NMaXN0LmFkZCgnaGFzLWJhY2tncm91bmQtaW5mbycsICdoYXMtdGV4dC1pbmZvLWxpZ2h0Jyk7XG4gICAgcHdkR2VuZXJhdGVkU3RyZW5ndGhUYWdFbC5pbm5lclRleHQgPSAnU2VjdXJlIGZvciBub3JtYWwgdXNlJztcblxuICB9IGVsc2Uge1xuICAgIC8vIE1vbHRvIHNpY3VyYVxuICAgIGJvZHlkRWwuY2xhc3NMaXN0LmFkZCgnaXMtc3VjY2VzcycpO1xuICAgIHB3ZENvbnRhaW5lckVsLmNsYXNzTGlzdC5hZGQoJ2lzLXN1Y2Nlc3MnKTtcbiAgICBwd2RHZW5lcmF0ZWRTdHJlbmd0aEVsLmNsYXNzTGlzdC5hZGQoJ2lzLXN1Y2Nlc3MnKTtcbiAgICBzZXR0aW5nc1Bhc3N3b3JkTGVuZ3RoUmFuZ2VFbC5jbGFzc0xpc3QuYWRkKCdpcy1zdWNjZXNzJyk7XG4gICAgcHdkR2VuZXJhdGVkU3RyZW5ndGhUYWdCb3hFbC5jbGFzc0xpc3QuYWRkKCdoYXMtYmFja2dyb3VuZC1zdWNjZXNzJywgJ2hhcy10ZXh0LXN1Y2Nlc3MtbGlnaHQnKTtcbiAgICBwd2RHZW5lcmF0ZWRTdHJlbmd0aFRhZ0VsLmlubmVyVGV4dCA9ICdQcm90ZWN0cyBhZ2FpbnN0IGhhY2tpbmcgYXR0ZW1wdHMnO1xuXG4gIH1cbn1cblxuZnVuY3Rpb24gdG9nZ2xlUHdkVHlwZShldmVudCkge1xuICBpZiAoZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdpcy1hY3RpdmUnKSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNwd2QtdHlwZS1zZWxlY3Rvci10YWIgbGkgYScpLmZvckVhY2goZWwgPT4gZWwucGFyZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdpcy1hY3RpdmUnKSk7XG4gIGNvbnN0IHR5cGUgPSBldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLXR5cGUnKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNldHRpbmdzJykuZm9yRWFjaChlbCA9PiB7XG4gICAgaWYgKCFlbC5jbGFzc0xpc3QuY29udGFpbnMoJ2lzLWhpZGRlbicpKSB7XG4gICAgICBlbC5jbGFzc0xpc3QuYWRkKCdpcy1oaWRkZW4nKVxuICAgIH1cbiAgfSk7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3R5cGV9LXNldHRpbmdzYCkuY2xhc3NMaXN0LnJlbW92ZSgnaXMtaGlkZGVuJyk7XG4gIGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2lzLWFjdGl2ZScpO1xuXG4gIGhhbmRsZVBhc3N3b3JkQ3JlYXRpb24oKTtcbn1cblxuZnVuY3Rpb24gYmluZEV2ZW50cygpIHtcbiAgc2V0dGluZ3NQYXNzd29yZExlbmd0aFJhbmdlRWwuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XG4gICAgc2V0dGluZ3NQYXNzd29yZExlbmd0aEVsLnZhbHVlID0gc2V0dGluZ3NQYXNzd29yZExlbmd0aFJhbmdlRWwudmFsdWU7XG4gICAgaGFuZGxlUGFzc3dvcmRDcmVhdGlvbigpXG4gIH0pO1xuICBzZXR0aW5nc1Bhc3NwaHJhc2VMZW5ndGhSYW5nZUVsLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xuICAgIHNldHRpbmdzUGFzc3BocmFzZUxlbmd0aEVsLnZhbHVlID0gc2V0dGluZ3NQYXNzcGhyYXNlTGVuZ3RoUmFuZ2VFbC52YWx1ZTtcbiAgICBoYW5kbGVQYXNzd29yZENyZWF0aW9uKClcbiAgfSk7XG4gIHNldHRpbmdzUGFzc3BocmFzZVNlcGFyYXRvckVsLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKCkgPT4ge1xuICAgIGhhbmRsZVBhc3N3b3JkQ3JlYXRpb24oKTtcbiAgfSk7XG5cbiAgc2V0dGluZ3NQYXNzd29yZExlbmd0aEVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICBpZiAoc2V0dGluZ3NQYXNzd29yZExlbmd0aEVsLnZhbHVlIDwgMSkge1xuICAgICAgc2V0dGluZ3NQYXNzd29yZExlbmd0aEVsLnZhbHVlID0gMTtcbiAgICB9XG4gICAgaWYgKHNldHRpbmdzUGFzc3dvcmRMZW5ndGhFbC52YWx1ZSA+IDI1Nikge1xuICAgICAgc2V0dGluZ3NQYXNzd29yZExlbmd0aEVsLnZhbHVlID0gMjU2O1xuICAgIH1cbiAgICBzZXR0aW5nc1Bhc3N3b3JkTGVuZ3RoUmFuZ2VFbC52YWx1ZSA9IHNldHRpbmdzUGFzc3dvcmRMZW5ndGhFbC52YWx1ZTtcbiAgICBoYW5kbGVQYXNzd29yZENyZWF0aW9uKCk7XG4gIH0pO1xuXG4gIG5vdGlmaWNhdGlvbkRlbGV0ZUJ0bkVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIG5vdGlmaWNhdGlvbkVsLmNsYXNzTGlzdC5hZGQoJ2lzLWludmlzaWJsZScpO1xuICB9KTtcblxuICBhY3Rpb25SZWRvRWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVQYXNzd29yZENyZWF0aW9uKTtcblxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWN0aW9uLWNvcHktdG8tY2xpcGJvYXJkJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjb3B5VG9DbGlwYm9hcmQpO1xuXG4gIGZvciAobGV0IGVsIG9mIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3NldHRpbmctZWxlbWVudCcpKSB7XG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgdXBkYXRlQXZhaWxhYmxlQ2hhcnMoKTtcbiAgICAgIGhhbmRsZVBhc3N3b3JkQ3JlYXRpb24oKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZvciAobGV0IGVsIG9mIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3NldHRpbmctcHdkLW1vZGUnKSkge1xuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIHVwZGF0ZVBhc3N3b3JkU2V0dGluZ3MoKVxuICAgICAgaGFuZGxlUGFzc3dvcmRDcmVhdGlvbigpXG4gICAgfSk7XG4gIH1cblxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjcHdkLXR5cGUtc2VsZWN0b3ItdGFiIGxpIGEnKS5mb3JFYWNoKChlbCkgPT4ge1xuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlUHdkVHlwZSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiB3cml0ZVdlbGxjb21lTWVzc2FnZSgpIHtcbiAgY29uc3Qgd2VsbGNvbWVNZXNzYWdlU2V0dGluZ3MgPSAnY29sb3I6IzNlOGVkMDsgZm9udC1zaXplOiAxNnB4OyBmb250LXdlaWdodDogNzAwOyBmb250LWZhbWlseTogbW9ub3NwYWNlJztcbiAgY29uc29sZS5pbmZvKCclY+KggOKggOKggCDioIDioIDioIAg4qCA4qCA4qCAIOKggOKggOKggCDioIDioIDioIAg4qCA4qCA4qCAIOKggOKggOKggCDioIDioIDioIAg4qCA4qCA4qCAIOKggOKggOKggCDioIDioIDioIAg4qCA4qCA4qCAIOKggOKggOKggCDioIDioIDioIAnLCB3ZWxsY29tZU1lc3NhZ2VTZXR0aW5ncyk7XG4gIGNvbnNvbGUuaW5mbygnJWPioIDioIDioIAgV2VsY29tZSB0byB0aGUgZGV2ZWxvcGVyIHZhdWx0IS4gICAgICAgICAgICAgICAgICAgICDioIDioIDioIAnLCB3ZWxsY29tZU1lc3NhZ2VTZXR0aW5ncyk7XG4gIGNvbnNvbGUuaW5mbygnJWPioIDioIDioIAgVG9wIHNlY3JldCBwYXNzd29yZCBnZW5lcmF0aW9uIGhhcHBlbnMgaGVyZS4uLiAgICAgICDioIDioIDioIAnLCB3ZWxsY29tZU1lc3NhZ2VTZXR0aW5ncyk7XG4gIGNvbnNvbGUuaW5mbygnJWPioIDioIDioIAgTW9zdGx5LiBeX14gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDioIDioIDioIAnLCB3ZWxsY29tZU1lc3NhZ2VTZXR0aW5ncyk7XG4gIGNvbnNvbGUuaW5mbygnJWPioIDioIDioIAg4qCA4qCA4qCAIOKggOKggOKggCDioIDioIDioIAg4qCA4qCA4qCAIOKggOKggOKggCDioIDioIDioIAg4qCA4qCA4qCAIOKggOKggOKggCDioIDioIDioIAg4qCA4qCA4qCAIOKggOKggOKggCDioIDioIDioIAg4qCA4qCA4qCAJywgd2VsbGNvbWVNZXNzYWdlU2V0dGluZ3MpO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5UGFnZSgpIHtcbiAgZG9jdW1lbnQuYm9keS5zdHlsZSA9ICdkaXNwbGF5OiBhdXRvJztcbn1cblxuZnVuY3Rpb24gaGFuZGxlUGFzc3dvcmRDcmVhdGlvbigpIHtcbiAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwd2QtdHlwZS1zZWxlY3Rvci10YWIgbGkuaXMtYWN0aXZlIGEnKS5nZXRBdHRyaWJ1dGUoJ2RhdGEtdHlwZScpID09PSAncGFzc3BocmFzZScpIHtcbiAgICBjb25zdCB7IHBhc3NwaHJhc2UsIHN0cmVuZ3RoIH0gPSBjcmVhdGVQYXNzcGhyYXNlKCk7XG4gICAgcHdkR2VuZXJhdGVkRWwuaW5uZXJIVE1MID0gcGFzc3BocmFzZTtcbiAgICBzZXRTdHJlbmd0aChzdHJlbmd0aCk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgeyBwYXNzd29yZCwgc3RyZW5ndGggfSA9IGNyZWF0ZVBhc3N3b3JkKCk7XG4gIHB3ZEdlbmVyYXRlZEVsLmlubmVySFRNTCA9IHBhc3N3b3JkO1xuICBzZXRTdHJlbmd0aChzdHJlbmd0aCk7XG59XG5cbmZ1bmN0aW9uIGluaXRhbGl6ZVBhZ2VFbGVtZW50cygpIHtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NldHRpbmdzLWFsbG93LXN5bWJvbHMtbGlzdCcpLmlubmVySFRNTCA9IEFycmF5LmZyb20oU1BFQ0lBTF9DSEFSQUNURVJTKS5tYXAoKGVsKSA9PlxuICAgIFN0cmluZy5mcm9tQ2hhckNvZGUoZWwpXG4gICk7XG59XG5cbi8vIEluaXRcbmZ1bmN0aW9uIGluaXQoKSB7XG4gIHdyaXRlV2VsbGNvbWVNZXNzYWdlKCk7XG5cbiAgYmluZEV2ZW50cygpO1xuICBpbml0YWxpemVQYWdlRWxlbWVudHMoKTtcblxuICAvLyBVcGRhdGUgdGhlIEF2YWlsYWJsZUNoYXJzIGFycmF5IGJhc2VkIG9uIHRoZSBodG1sIGRlZmF1bHRcbiAgLy8gYW5kIGNyZWF0ZSB0aGUgZmlyc3QgcGFzc3dvcmRcbiAgdXBkYXRlQXZhaWxhYmxlQ2hhcnMoKTtcbiAgaGFuZGxlUGFzc3dvcmRDcmVhdGlvbigpO1xuXG4gIC8vIFNob3cgY29udGVudCBvbmx5IHdoZW4gcGFnZSBpcyBsb2FkZWRcbiAgZGlzcGxheVBhZ2UoKTtcbn1cblxud2luZG93Lm9ubG9hZCA9IGluaXQ7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=