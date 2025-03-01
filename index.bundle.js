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
  /* Stile per Firefox */
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

#settings-passphrase-length-range {
  width: 100%;
  /* Rimuove lo stile di default su WebKit */
  -webkit-appearance: none;
  appearance: none;
  /* Stile del cursore per Chrome, Safari, Edge */
  /* Stile della barra per Chrome, Safari, Edge */
  /* Stile per Firefox */
}
#settings-passphrase-length-range:hover {
  opacity: 1;
}
#settings-passphrase-length-range::-webkit-slider-thumb {
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
#settings-passphrase-length-range::-webkit-slider-runnable-track {
  background: var(--active-color);
  height: 8px;
  border-radius: 10px;
}
#settings-passphrase-length-range::-moz-range-thumb {
  width: 20px;
  height: 20px;
  background: var(--active-color);
  border-radius: 50%;
  cursor: pointer;
}
#settings-passphrase-length-range::-moz-range-track {
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
}`, "",{"version":3,"sources":["webpack://./src/styles/style.scss"],"names":[],"mappings":"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","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap\");\n\n$secondaryColor: #a89d91;\n$primaryColor: #485fc7;\n$backgroundColor: #ffffff;\n$backgroundColorLight: #f5f5f5;\n\n\n$textColor: #444;\n\n$colorDanger: #f14668;\n$colorWarning: #ffe08a;\n$colorInfo: #3e8ed0;\n$colorSuccess: #48c78e;\n\n:root {\n    --selection-color-danger: #f14668;\n    --selection-color-warning: #ffe08a;\n    --selection-color-info: #3e8ed0;\n    --selection-color-success: #48c78e;\n\n    --active-color: var(--selection-color-success)\n}\n\n::selection {\n    color: $backgroundColor;\n    background-color: var(--active-color);\n    border-radius: 4px;\n}\n\nhtml,\nbody {\n    color: $textColor;\n    margin: 0;\n    padding: 0;\n    width: 100%;\n    height: 100%;\n    font-family: \"Open Sans\", sans-serif;\n    font-optical-sizing: auto;\n    font-weight: 400;\n    font-style: normal;\n    font-size: 16px;\n    background-color: $backgroundColor;\n    scroll-behavior: smooth;\n    scroll-snap-type: y mandatory;\n\n    &.is-danger {\n        --active-color: var(--selection-color-danger);\n    }\n\n    &.is-warning {\n        --active-color: var(--selection-color-warning);\n    }\n\n    &.is-info {\n        --active-color: var(--selection-color-info);\n    }\n\n    &.is-success {\n        --active-color: var(--selection-color-success);\n    }\n}\n\n.title,\n.subtitle {\n    font-family: \"Kode Mono\", monospace;\n    color: inherit;\n}\n\n.section {\n    padding: 2rem 2rem;\n}\n\n.is-fullheight {\n    min-height: 100vh;\n}\n\n.is-fullwidth {\n    min-width: 100%;\n}\n\n.notification {\n    position: fixed;\n    top: 0;\n    width: 100%;\n    background-color: #ffe645;\n    opacity: 1;\n    z-index: 100;\n    box-shadow: 0 0 10px $textColor;\n\n    transition:\n        visibility 0s,\n        opacity 0.3s linear;\n\n    &.is-invisible {\n        opacity: 0;\n    }\n}\n\n#pwd-type-selector-tab {\n    margin-bottom: 0;\n\n    ul {\n        border-bottom-width: 0;\n    }\n}\n\n#pwd-settings-box {\n    min-height: 362px;\n}\n\n.tabs li {\n\n    &.is-active {\n        a {\n            font-weight: bold;\n            color: var(--active-color);\n            border-bottom-color: var(--active-color);\n\n            &:hover {\n                text-shadow: none;\n                border-bottom-width: 2px;\n                border-bottom-color: var(--active-color);\n            }\n        }\n    }\n\n    a {\n        margin-bottom: 0px;\n        border-bottom-width: 2px;\n        border-bottom-color: transparent;\n        color: $secondaryColor;\n\n        &:hover {\n            text-shadow: var(--active-color) 1px 0 10px;\n            border-bottom-width: 2px;\n            border-bottom-color: transparent;\n        }\n    }\n}\n\n\n#pwd-strength-tagbox {\n    position: absolute;\n    bottom: 2px;\n    left: 0px;\n    border-top-right-radius: 6px;\n}\n\n#pwd-actions-box {\n    display: flex;\n    position: absolute;\n    bottom: 3px;\n    right: 0px;\n\n    .action {\n        padding: 0 .3rem;\n        color: var(--active-color);\n\n        &:hover {\n            color: var(--active-color);\n            text-shadow: 0 0 5px var(--active-color);\n        }\n    }\n}\n\n#pwd-strength {\n    position: absolute;\n    bottom: 0px;\n    left: 0px;\n    border-top-left-radius: 0px;\n    border-top-right-radius: 0px;\n    border-bottom-left-radius: 6px;\n    border-bottom-right-radius: 6px;\n    height: 2px;\n}\n\n.pwd-container {\n    font-size: 2rem;\n    display: flex;\n    flex-direction: row;\n    align-items: baseline;\n    justify-content: space-between;\n\n\n    &.is-danger {\n        ::selection {\n            background-color: var(--active-color);\n        }\n    }\n\n    &.is-warning {\n        ::selection {\n            background-color: var(--active-color);\n        }\n    }\n\n    &.is-info {\n        ::selection {\n            background-color: var(--active-color);\n        }\n    }\n\n    &.is-success {\n        ::selection {\n            background-color: var(--active-color);\n        }\n    }\n\n    ::selection {\n        color: $backgroundColor;\n        background-color: var(--active-color);\n        border-radius: 4px;\n    }\n}\n\n\n#settings-password-length {\n    width: 64px;\n}\n\n#settings-password-length-range {\n    width: 100%;\n    /* Rimuove lo stile di default su WebKit */\n    -webkit-appearance: none;\n    appearance: none;\n\n    &:hover {\n        opacity: 1;\n    }\n\n    /* Stile del cursore per Chrome, Safari, Edge */\n    &::-webkit-slider-thumb {\n        -webkit-appearance: none;\n        appearance: none;\n        margin-top: -5px;\n        width: 10px;\n        height: 20px;\n        background: $textColor;\n        /* Colore del cursore */\n        border-radius: 50%;\n        cursor: pointer;\n    }\n\n    /* Stile della barra per Chrome, Safari, Edge */\n    &::-webkit-slider-runnable-track {\n        background: var(--active-color);\n        height: 8px;\n        border-radius: 10px;\n    }\n\n    /* Stile per Firefox */\n    &::-moz-range-thumb {\n        width: 20px;\n        height: 20px;\n        background: var(--active-color);\n        border-radius: 50%;\n        cursor: pointer;\n    }\n\n    &::-moz-range-track {\n        background: var(--active-color);\n        height: 8px;\n        border-radius: 10px;\n    }\n}\n\n#settings-passphrase-length-range {\n    width: 100%;\n    /* Rimuove lo stile di default su WebKit */\n    -webkit-appearance: none;\n    appearance: none;\n\n    &:hover {\n        opacity: 1;\n    }\n\n    /* Stile del cursore per Chrome, Safari, Edge */\n    &::-webkit-slider-thumb {\n        -webkit-appearance: none;\n        appearance: none;\n        margin-top: -5px;\n        width: 10px;\n        height: 20px;\n        background: $textColor;\n        /* Colore del cursore */\n        border-radius: 50%;\n        cursor: pointer;\n    }\n\n    /* Stile della barra per Chrome, Safari, Edge */\n    &::-webkit-slider-runnable-track {\n        background: var(--active-color);\n        height: 8px;\n        border-radius: 10px;\n    }\n\n    /* Stile per Firefox */\n    &::-moz-range-thumb {\n        width: 20px;\n        height: 20px;\n        background: var(--active-color);\n        border-radius: 50%;\n        cursor: pointer;\n    }\n\n    &::-moz-range-track {\n        background: var(--active-color);\n        height: 8px;\n        border-radius: 10px;\n    }\n}\n\n.settings-container {\n    background-color: var(--active-color);\n    color: $backgroundColor;\n    border-radius: 10px;\n    border: 2px solid var(--active-color);\n    padding: 1rem;\n\n    ::selection {\n        color: $backgroundColor;\n        background: var(--active-color);\n        border-radius: 4px;\n    }\n\n    .checkbox:hover,\n    .radio:hover {\n        color: $textColor;\n    }\n}\n\n.footer {\n    border-top: 2px solid #245494;\n    background-color: #7ca7df;\n}\n\n.is-owerflow-auto {\n    overflow: auto;\n}\n\n.is-word-break-all {\n    word-break: break-all;\n}\n\n#password-settings-shortcut {\n    border-radius: 6px;\n}\n\ninput {\n    +span.toggle {\n        position: relative;\n        display: inline-block;\n        height: 24px;\n        width: 40px;\n        margin-bottom: -6px;\n        margin-left: -24px;\n        background: $backgroundColorLight;\n        border-radius: 100vh;\n        color: var(--active-color);\n\n        &:before {\n            content: \" \";\n            position: absolute;\n            top: 4px;\n            left: 4px;\n            right: auto;\n            height: 16px;\n            width: 16px;\n            background: #bbb;\n            border-radius: 100vh;\n            transition: all 0.4s ease-in-out;\n        }\n    }\n\n    &[type=radio] {\n        &:checked {\n            border-color: var(--active-color);\n        }\n\n        appearance: none;\n        /* Rimuove lo stile predefinito */\n        width: 14px;\n        height: 14px;\n        border: 1px solid #bbb;\n        border-radius: 50%;\n        display: inline-block;\n        position: relative;\n        cursor: pointer;\n\n        &:checked::before {\n            content: \"\";\n            width: 10px;\n            height: 10px;\n            background-color: var(--active-color);\n            border-color: var(--active-color);\n            border-radius: 50%;\n            position: absolute;\n            top: 50%;\n            left: 50%;\n            transform: translate(-50%, -50%);\n        }\n    }\n\n    &:checked+span.toggle:before {\n        left: 20px;\n        background: var(--active-color);\n        transition: all 0.4s ease-in-out;\n    }\n}"],"sourceRoot":""}]);
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
    return {
      password: '',
      strength: 0,
    };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDNkc7QUFDakI7QUFDNUYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRiw4SEFBOEgseUJBQXlCO0FBQ3ZKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLHdGQUF3RixXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsWUFBWSxXQUFXLE1BQU0sT0FBTyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFlBQVksWUFBWSxXQUFXLEtBQUssT0FBTyxXQUFXLEtBQUssT0FBTyxXQUFXLEtBQUssT0FBTyxXQUFXLEtBQUssT0FBTyxXQUFXLE1BQU0sT0FBTyxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxPQUFPLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxVQUFVLFVBQVUsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxPQUFPLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLFlBQVksV0FBVyxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFlBQVksWUFBWSxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsVUFBVSxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsWUFBWSxZQUFZLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxVQUFVLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxZQUFZLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxZQUFZLFdBQVcsTUFBTSxPQUFPLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsWUFBWSxZQUFZLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxnSEFBZ0gsMkJBQTJCLDZCQUE2Qix5QkFBeUIsNEJBQTRCLGlDQUFpQyx1QkFBdUIsMEJBQTBCLHlCQUF5QixzQkFBc0IseUJBQXlCLFdBQVcsd0NBQXdDLHlDQUF5QyxzQ0FBc0MseUNBQXlDLHlEQUF5RCxpQkFBaUIsOEJBQThCLDRDQUE0Qyx5QkFBeUIsR0FBRyxpQkFBaUIsd0JBQXdCLGdCQUFnQixpQkFBaUIsa0JBQWtCLG1CQUFtQiw2Q0FBNkMsZ0NBQWdDLHVCQUF1Qix5QkFBeUIsc0JBQXNCLHlDQUF5Qyw4QkFBOEIsb0NBQW9DLHFCQUFxQix3REFBd0QsT0FBTyxzQkFBc0IseURBQXlELE9BQU8sbUJBQW1CLHNEQUFzRCxPQUFPLHNCQUFzQix5REFBeUQsT0FBTyxHQUFHLHdCQUF3Qiw0Q0FBNEMscUJBQXFCLEdBQUcsY0FBYyx5QkFBeUIsR0FBRyxvQkFBb0Isd0JBQXdCLEdBQUcsbUJBQW1CLHNCQUFzQixHQUFHLG1CQUFtQixzQkFBc0IsYUFBYSxrQkFBa0IsZ0NBQWdDLGlCQUFpQixtQkFBbUIsc0NBQXNDLHlFQUF5RSx3QkFBd0IscUJBQXFCLE9BQU8sR0FBRyw0QkFBNEIsdUJBQXVCLFlBQVksaUNBQWlDLE9BQU8sR0FBRyx1QkFBdUIsd0JBQXdCLEdBQUcsY0FBYyxxQkFBcUIsYUFBYSxnQ0FBZ0MseUNBQXlDLHVEQUF1RCx5QkFBeUIsb0NBQW9DLDJDQUEyQywyREFBMkQsZUFBZSxXQUFXLE9BQU8sV0FBVyw2QkFBNkIsbUNBQW1DLDJDQUEyQyxpQ0FBaUMscUJBQXFCLDBEQUEwRCx1Q0FBdUMsK0NBQStDLFdBQVcsT0FBTyxHQUFHLDRCQUE0Qix5QkFBeUIsa0JBQWtCLGdCQUFnQixtQ0FBbUMsR0FBRyxzQkFBc0Isb0JBQW9CLHlCQUF5QixrQkFBa0IsaUJBQWlCLGlCQUFpQiwyQkFBMkIscUNBQXFDLHFCQUFxQix5Q0FBeUMsdURBQXVELFdBQVcsT0FBTyxHQUFHLG1CQUFtQix5QkFBeUIsa0JBQWtCLGdCQUFnQixrQ0FBa0MsbUNBQW1DLHFDQUFxQyxzQ0FBc0Msa0JBQWtCLEdBQUcsb0JBQW9CLHNCQUFzQixvQkFBb0IsMEJBQTBCLDRCQUE0QixxQ0FBcUMsdUJBQXVCLHVCQUF1QixvREFBb0QsV0FBVyxPQUFPLHNCQUFzQix1QkFBdUIsb0RBQW9ELFdBQVcsT0FBTyxtQkFBbUIsdUJBQXVCLG9EQUFvRCxXQUFXLE9BQU8sc0JBQXNCLHVCQUF1QixvREFBb0QsV0FBVyxPQUFPLHFCQUFxQixrQ0FBa0MsZ0RBQWdELDZCQUE2QixPQUFPLEdBQUcsaUNBQWlDLGtCQUFrQixHQUFHLHFDQUFxQyxrQkFBa0IsZ0ZBQWdGLHVCQUF1QixpQkFBaUIscUJBQXFCLE9BQU8sdUZBQXVGLG1DQUFtQywyQkFBMkIsMkJBQTJCLHNCQUFzQix1QkFBdUIsaUNBQWlDLCtEQUErRCwwQkFBMEIsT0FBTyxnR0FBZ0csMENBQTBDLHNCQUFzQiw4QkFBOEIsT0FBTywwREFBMEQsc0JBQXNCLHVCQUF1QiwwQ0FBMEMsNkJBQTZCLDBCQUEwQixPQUFPLDZCQUE2QiwwQ0FBMEMsc0JBQXNCLDhCQUE4QixPQUFPLEdBQUcsdUNBQXVDLGtCQUFrQixnRkFBZ0YsdUJBQXVCLGlCQUFpQixxQkFBcUIsT0FBTyx1RkFBdUYsbUNBQW1DLDJCQUEyQiwyQkFBMkIsc0JBQXNCLHVCQUF1QixpQ0FBaUMsK0RBQStELDBCQUEwQixPQUFPLGdHQUFnRywwQ0FBMEMsc0JBQXNCLDhCQUE4QixPQUFPLDBEQUEwRCxzQkFBc0IsdUJBQXVCLDBDQUEwQyw2QkFBNkIsMEJBQTBCLE9BQU8sNkJBQTZCLDBDQUEwQyxzQkFBc0IsOEJBQThCLE9BQU8sR0FBRyx5QkFBeUIsNENBQTRDLDhCQUE4QiwwQkFBMEIsNENBQTRDLG9CQUFvQixxQkFBcUIsa0NBQWtDLDBDQUEwQyw2QkFBNkIsT0FBTyw0Q0FBNEMsNEJBQTRCLE9BQU8sR0FBRyxhQUFhLG9DQUFvQyxnQ0FBZ0MsR0FBRyx1QkFBdUIscUJBQXFCLEdBQUcsd0JBQXdCLDRCQUE0QixHQUFHLGlDQUFpQyx5QkFBeUIsR0FBRyxXQUFXLG9CQUFvQiw2QkFBNkIsZ0NBQWdDLHVCQUF1QixzQkFBc0IsOEJBQThCLDZCQUE2Qiw0Q0FBNEMsK0JBQStCLHFDQUFxQyxzQkFBc0IsNkJBQTZCLGlDQUFpQyx1QkFBdUIsd0JBQXdCLDBCQUEwQiwyQkFBMkIsMEJBQTBCLCtCQUErQixtQ0FBbUMsK0NBQStDLFdBQVcsT0FBTyx1QkFBdUIscUJBQXFCLGdEQUFnRCxXQUFXLDZCQUE2QixrRUFBa0UsdUJBQXVCLGlDQUFpQyw2QkFBNkIsZ0NBQWdDLDZCQUE2QiwwQkFBMEIsK0JBQStCLDRCQUE0QiwwQkFBMEIsMkJBQTJCLG9EQUFvRCxnREFBZ0QsaUNBQWlDLGlDQUFpQyx1QkFBdUIsd0JBQXdCLCtDQUErQyxXQUFXLE9BQU8sc0NBQXNDLHFCQUFxQiwwQ0FBMEMsMkNBQTJDLE9BQU8sR0FBRyxtQkFBbUI7QUFDeDVXO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDL1YxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBLHFGQUFxRjtBQUNyRjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixxQkFBcUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDcEZhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEEsTUFBa0c7QUFDbEcsTUFBd0Y7QUFDeEYsTUFBK0Y7QUFDL0YsTUFBa0g7QUFDbEgsTUFBMkc7QUFDM0csTUFBMkc7QUFDM0csTUFBa0o7QUFDbEo7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyw0SEFBTzs7OztBQUk0RjtBQUNwSCxPQUFPLGlFQUFlLDRIQUFPLElBQUksNEhBQU8sVUFBVSw0SEFBTyxtQkFBbUIsRUFBQzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsNkJBQTZCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDbkZhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ2pDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLGlGQUFpRjtBQUNqRjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNiZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx3QkFBd0Isb0JBQW9CO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsOERBQThEO0FBQzlEO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUNxQztBQUNTOztBQUU5QyxpRUFBZSxrREFBVSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNIbkI7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDWmU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHNDQUFzQyw2QkFBNkI7QUFDbkU7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9CbUM7QUFPbEI7O0FBRWpCLGlFQUFlLGtEQUFRLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4QkE7QUFDOEI7O0FBRTlCO0FBQ0EsZ0JBQWdCLG1CQUFPLENBQUMsd0NBQW1CO0FBQzNDLGVBQWUsbUJBQU8sQ0FBQyxzQ0FBa0I7O0FBRXpDO0FBQytCO0FBQ0E7QUFDRjs7QUFRRTtBQUMyQzs7QUFFMUU7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxzRkFBc0YsMERBQU87QUFDN0Ysd0ZBQXdGLDREQUFTO0FBQ2pHLHdGQUF3Riw0REFBUztBQUNqRyxzRkFBc0YscUVBQWtCOztBQUV4RztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsNkRBQVE7QUFDaEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLCtEQUFVLENBQUMsd0VBQW1CO0FBQ3REO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsNkJBQTZCLEtBQUs7QUFDbEM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0Esa0RBQWtELGlCQUFpQixrQkFBa0I7QUFDckY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsWUFBWSx1QkFBdUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsVUFBVSxxQkFBcUI7QUFDL0I7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0ZBQWdGLHFFQUFrQjtBQUNsRztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYW5vdGhlci1wYXNzd29yZC1nZW5lcmF0b3IvLi9zcmMvc3R5bGVzL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vYW5vdGhlci1wYXNzd29yZC1nZW5lcmF0b3IvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2Fub3RoZXItcGFzc3dvcmQtZ2VuZXJhdG9yLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYW5vdGhlci1wYXNzd29yZC1nZW5lcmF0b3IvLi9zcmMvc3R5bGVzL3N0eWxlLnNjc3M/ZTVkOCIsIndlYnBhY2s6Ly9hbm90aGVyLXBhc3N3b3JkLWdlbmVyYXRvci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9hbm90aGVyLXBhc3N3b3JkLWdlbmVyYXRvci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYW5vdGhlci1wYXNzd29yZC1nZW5lcmF0b3IvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYW5vdGhlci1wYXNzd29yZC1nZW5lcmF0b3IvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYW5vdGhlci1wYXNzd29yZC1nZW5lcmF0b3IvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9hbm90aGVyLXBhc3N3b3JkLWdlbmVyYXRvci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2Fub3RoZXItcGFzc3dvcmQtZ2VuZXJhdG9yLy4vc3JjL3NjcmlwdHMvZ2VuZWFyYXRvcnMvcGFzc3BocmFzZS9nZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vYW5vdGhlci1wYXNzd29yZC1nZW5lcmF0b3IvLi9zcmMvc2NyaXB0cy9nZW5lYXJhdG9ycy9wYXNzcGhyYXNlL2luZGV4LmpzIiwid2VicGFjazovL2Fub3RoZXItcGFzc3dvcmQtZ2VuZXJhdG9yLy4vc3JjL3NjcmlwdHMvZ2VuZWFyYXRvcnMvcGFzc3BocmFzZS91dGlscy5qcyIsIndlYnBhY2s6Ly9hbm90aGVyLXBhc3N3b3JkLWdlbmVyYXRvci8uL3NyYy9zY3JpcHRzL2dlbmVhcmF0b3JzL3Bhc3N3b3JkL2dlbmVyYXRvci5qcyIsIndlYnBhY2s6Ly9hbm90aGVyLXBhc3N3b3JkLWdlbmVyYXRvci8uL3NyYy9zY3JpcHRzL2dlbmVhcmF0b3JzL3Bhc3N3b3JkL2luZGV4LmpzIiwid2VicGFjazovL2Fub3RoZXItcGFzc3dvcmQtZ2VuZXJhdG9yLy4vc3JjL3NjcmlwdHMvZ2VuZWFyYXRvcnMvcGFzc3dvcmQvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vYW5vdGhlci1wYXNzd29yZC1nZW5lcmF0b3IvLi9zcmMvc2NyaXB0cy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU9wZW4rU2FuczppdGFsLHdnaHRAMCwzMDAuLjgwMDsxLDMwMC4uODAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3Qge1xuICAtLXNlbGVjdGlvbi1jb2xvci1kYW5nZXI6ICNmMTQ2Njg7XG4gIC0tc2VsZWN0aW9uLWNvbG9yLXdhcm5pbmc6ICNmZmUwOGE7XG4gIC0tc2VsZWN0aW9uLWNvbG9yLWluZm86ICMzZThlZDA7XG4gIC0tc2VsZWN0aW9uLWNvbG9yLXN1Y2Nlc3M6ICM0OGM3OGU7XG4gIC0tYWN0aXZlLWNvbG9yOiB2YXIoLS1zZWxlY3Rpb24tY29sb3Itc3VjY2VzcykgO1xufVxuXG46OnNlbGVjdGlvbiB7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY3RpdmUtY29sb3IpO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbmh0bWwsXG5ib2R5IHtcbiAgY29sb3I6ICM0NDQ7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtb3B0aWNhbC1zaXppbmc6IGF1dG87XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcbiAgc2Nyb2xsLXNuYXAtdHlwZTogeSBtYW5kYXRvcnk7XG59XG5odG1sLmlzLWRhbmdlcixcbmJvZHkuaXMtZGFuZ2VyIHtcbiAgLS1hY3RpdmUtY29sb3I6IHZhcigtLXNlbGVjdGlvbi1jb2xvci1kYW5nZXIpO1xufVxuaHRtbC5pcy13YXJuaW5nLFxuYm9keS5pcy13YXJuaW5nIHtcbiAgLS1hY3RpdmUtY29sb3I6IHZhcigtLXNlbGVjdGlvbi1jb2xvci13YXJuaW5nKTtcbn1cbmh0bWwuaXMtaW5mbyxcbmJvZHkuaXMtaW5mbyB7XG4gIC0tYWN0aXZlLWNvbG9yOiB2YXIoLS1zZWxlY3Rpb24tY29sb3ItaW5mbyk7XG59XG5odG1sLmlzLXN1Y2Nlc3MsXG5ib2R5LmlzLXN1Y2Nlc3Mge1xuICAtLWFjdGl2ZS1jb2xvcjogdmFyKC0tc2VsZWN0aW9uLWNvbG9yLXN1Y2Nlc3MpO1xufVxuXG4udGl0bGUsXG4uc3VidGl0bGUge1xuICBmb250LWZhbWlseTogXCJLb2RlIE1vbm9cIiwgbW9ub3NwYWNlO1xuICBjb2xvcjogaW5oZXJpdDtcbn1cblxuLnNlY3Rpb24ge1xuICBwYWRkaW5nOiAycmVtIDJyZW07XG59XG5cbi5pcy1mdWxsaGVpZ2h0IHtcbiAgbWluLWhlaWdodDogMTAwdmg7XG59XG5cbi5pcy1mdWxsd2lkdGgge1xuICBtaW4td2lkdGg6IDEwMCU7XG59XG5cbi5ub3RpZmljYXRpb24ge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmU2NDU7XG4gIG9wYWNpdHk6IDE7XG4gIHotaW5kZXg6IDEwMDtcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggIzQ0NDtcbiAgdHJhbnNpdGlvbjogdmlzaWJpbGl0eSAwcywgb3BhY2l0eSAwLjNzIGxpbmVhcjtcbn1cbi5ub3RpZmljYXRpb24uaXMtaW52aXNpYmxlIHtcbiAgb3BhY2l0eTogMDtcbn1cblxuI3B3ZC10eXBlLXNlbGVjdG9yLXRhYiB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG4jcHdkLXR5cGUtc2VsZWN0b3ItdGFiIHVsIHtcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogMDtcbn1cblxuI3B3ZC1zZXR0aW5ncy1ib3gge1xuICBtaW4taGVpZ2h0OiAzNjJweDtcbn1cblxuLnRhYnMgbGkuaXMtYWN0aXZlIGEge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IHZhcigtLWFjdGl2ZS1jb2xvcik7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6IHZhcigtLWFjdGl2ZS1jb2xvcik7XG59XG4udGFicyBsaS5pcy1hY3RpdmUgYTpob3ZlciB7XG4gIHRleHQtc2hhZG93OiBub25lO1xuICBib3JkZXItYm90dG9tLXdpZHRoOiAycHg7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6IHZhcigtLWFjdGl2ZS1jb2xvcik7XG59XG4udGFicyBsaSBhIHtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICBib3JkZXItYm90dG9tLXdpZHRoOiAycHg7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogI2E4OWQ5MTtcbn1cbi50YWJzIGxpIGE6aG92ZXIge1xuICB0ZXh0LXNoYWRvdzogdmFyKC0tYWN0aXZlLWNvbG9yKSAxcHggMCAxMHB4O1xuICBib3JkZXItYm90dG9tLXdpZHRoOiAycHg7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4jcHdkLXN0cmVuZ3RoLXRhZ2JveCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAycHg7XG4gIGxlZnQ6IDBweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDZweDtcbn1cblxuI3B3ZC1hY3Rpb25zLWJveCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAzcHg7XG4gIHJpZ2h0OiAwcHg7XG59XG4jcHdkLWFjdGlvbnMtYm94IC5hY3Rpb24ge1xuICBwYWRkaW5nOiAwIDAuM3JlbTtcbiAgY29sb3I6IHZhcigtLWFjdGl2ZS1jb2xvcik7XG59XG4jcHdkLWFjdGlvbnMtYm94IC5hY3Rpb246aG92ZXIge1xuICBjb2xvcjogdmFyKC0tYWN0aXZlLWNvbG9yKTtcbiAgdGV4dC1zaGFkb3c6IDAgMCA1cHggdmFyKC0tYWN0aXZlLWNvbG9yKTtcbn1cblxuI3B3ZC1zdHJlbmd0aCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwcHg7XG4gIGxlZnQ6IDBweDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMHB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMHB4O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA2cHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA2cHg7XG4gIGhlaWdodDogMnB4O1xufVxuXG4ucHdkLWNvbnRhaW5lciB7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4ucHdkLWNvbnRhaW5lci5pcy1kYW5nZXIgOjpzZWxlY3Rpb24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY3RpdmUtY29sb3IpO1xufVxuLnB3ZC1jb250YWluZXIuaXMtd2FybmluZyA6OnNlbGVjdGlvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjdGl2ZS1jb2xvcik7XG59XG4ucHdkLWNvbnRhaW5lci5pcy1pbmZvIDo6c2VsZWN0aW9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWN0aXZlLWNvbG9yKTtcbn1cbi5wd2QtY29udGFpbmVyLmlzLXN1Y2Nlc3MgOjpzZWxlY3Rpb24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY3RpdmUtY29sb3IpO1xufVxuLnB3ZC1jb250YWluZXIgOjpzZWxlY3Rpb24ge1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWN0aXZlLWNvbG9yKTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG4jc2V0dGluZ3MtcGFzc3dvcmQtbGVuZ3RoIHtcbiAgd2lkdGg6IDY0cHg7XG59XG5cbiNzZXR0aW5ncy1wYXNzd29yZC1sZW5ndGgtcmFuZ2Uge1xuICB3aWR0aDogMTAwJTtcbiAgLyogUmltdW92ZSBsbyBzdGlsZSBkaSBkZWZhdWx0IHN1IFdlYktpdCAqL1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIGFwcGVhcmFuY2U6IG5vbmU7XG4gIC8qIFN0aWxlIGRlbCBjdXJzb3JlIHBlciBDaHJvbWUsIFNhZmFyaSwgRWRnZSAqL1xuICAvKiBTdGlsZSBkZWxsYSBiYXJyYSBwZXIgQ2hyb21lLCBTYWZhcmksIEVkZ2UgKi9cbiAgLyogU3RpbGUgcGVyIEZpcmVmb3ggKi9cbn1cbiNzZXR0aW5ncy1wYXNzd29yZC1sZW5ndGgtcmFuZ2U6aG92ZXIge1xuICBvcGFjaXR5OiAxO1xufVxuI3NldHRpbmdzLXBhc3N3b3JkLWxlbmd0aC1yYW5nZTo6LXdlYmtpdC1zbGlkZXItdGh1bWIge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIGFwcGVhcmFuY2U6IG5vbmU7XG4gIG1hcmdpbi10b3A6IC01cHg7XG4gIHdpZHRoOiAxMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGJhY2tncm91bmQ6ICM0NDQ7XG4gIC8qIENvbG9yZSBkZWwgY3Vyc29yZSAqL1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbiNzZXR0aW5ncy1wYXNzd29yZC1sZW5ndGgtcmFuZ2U6Oi13ZWJraXQtc2xpZGVyLXJ1bm5hYmxlLXRyYWNrIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tYWN0aXZlLWNvbG9yKTtcbiAgaGVpZ2h0OiA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG4jc2V0dGluZ3MtcGFzc3dvcmQtbGVuZ3RoLXJhbmdlOjotbW96LXJhbmdlLXRodW1iIHtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgYmFja2dyb3VuZDogdmFyKC0tYWN0aXZlLWNvbG9yKTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4jc2V0dGluZ3MtcGFzc3dvcmQtbGVuZ3RoLXJhbmdlOjotbW96LXJhbmdlLXRyYWNrIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tYWN0aXZlLWNvbG9yKTtcbiAgaGVpZ2h0OiA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbiNzZXR0aW5ncy1wYXNzcGhyYXNlLWxlbmd0aC1yYW5nZSB7XG4gIHdpZHRoOiAxMDAlO1xuICAvKiBSaW11b3ZlIGxvIHN0aWxlIGRpIGRlZmF1bHQgc3UgV2ViS2l0ICovXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgYXBwZWFyYW5jZTogbm9uZTtcbiAgLyogU3RpbGUgZGVsIGN1cnNvcmUgcGVyIENocm9tZSwgU2FmYXJpLCBFZGdlICovXG4gIC8qIFN0aWxlIGRlbGxhIGJhcnJhIHBlciBDaHJvbWUsIFNhZmFyaSwgRWRnZSAqL1xuICAvKiBTdGlsZSBwZXIgRmlyZWZveCAqL1xufVxuI3NldHRpbmdzLXBhc3NwaHJhc2UtbGVuZ3RoLXJhbmdlOmhvdmVyIHtcbiAgb3BhY2l0eTogMTtcbn1cbiNzZXR0aW5ncy1wYXNzcGhyYXNlLWxlbmd0aC1yYW5nZTo6LXdlYmtpdC1zbGlkZXItdGh1bWIge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIGFwcGVhcmFuY2U6IG5vbmU7XG4gIG1hcmdpbi10b3A6IC01cHg7XG4gIHdpZHRoOiAxMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGJhY2tncm91bmQ6ICM0NDQ7XG4gIC8qIENvbG9yZSBkZWwgY3Vyc29yZSAqL1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbiNzZXR0aW5ncy1wYXNzcGhyYXNlLWxlbmd0aC1yYW5nZTo6LXdlYmtpdC1zbGlkZXItcnVubmFibGUtdHJhY2sge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1hY3RpdmUtY29sb3IpO1xuICBoZWlnaHQ6IDhweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbiNzZXR0aW5ncy1wYXNzcGhyYXNlLWxlbmd0aC1yYW5nZTo6LW1vei1yYW5nZS10aHVtYiB7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWFjdGl2ZS1jb2xvcik7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuI3NldHRpbmdzLXBhc3NwaHJhc2UtbGVuZ3RoLXJhbmdlOjotbW96LXJhbmdlLXRyYWNrIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tYWN0aXZlLWNvbG9yKTtcbiAgaGVpZ2h0OiA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5zZXR0aW5ncy1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY3RpdmUtY29sb3IpO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tYWN0aXZlLWNvbG9yKTtcbiAgcGFkZGluZzogMXJlbTtcbn1cbi5zZXR0aW5ncy1jb250YWluZXIgOjpzZWxlY3Rpb24ge1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYmFja2dyb3VuZDogdmFyKC0tYWN0aXZlLWNvbG9yKTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuLnNldHRpbmdzLWNvbnRhaW5lciAuY2hlY2tib3g6aG92ZXIsXG4uc2V0dGluZ3MtY29udGFpbmVyIC5yYWRpbzpob3ZlciB7XG4gIGNvbG9yOiAjNDQ0O1xufVxuXG4uZm9vdGVyIHtcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICMyNDU0OTQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3Y2E3ZGY7XG59XG5cbi5pcy1vd2VyZmxvdy1hdXRvIHtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi5pcy13b3JkLWJyZWFrLWFsbCB7XG4gIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcbn1cblxuI3Bhc3N3b3JkLXNldHRpbmdzLXNob3J0Y3V0IHtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xufVxuXG5pbnB1dCArIHNwYW4udG9nZ2xlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGhlaWdodDogMjRweDtcbiAgd2lkdGg6IDQwcHg7XG4gIG1hcmdpbi1ib3R0b206IC02cHg7XG4gIG1hcmdpbi1sZWZ0OiAtMjRweDtcbiAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcbiAgYm9yZGVyLXJhZGl1czogMTAwdmg7XG4gIGNvbG9yOiB2YXIoLS1hY3RpdmUtY29sb3IpO1xufVxuaW5wdXQgKyBzcGFuLnRvZ2dsZTpiZWZvcmUge1xuICBjb250ZW50OiBcIiBcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDRweDtcbiAgbGVmdDogNHB4O1xuICByaWdodDogYXV0bztcbiAgaGVpZ2h0OiAxNnB4O1xuICB3aWR0aDogMTZweDtcbiAgYmFja2dyb3VuZDogI2JiYjtcbiAgYm9yZGVyLXJhZGl1czogMTAwdmg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xufVxuaW5wdXRbdHlwZT1yYWRpb10ge1xuICBhcHBlYXJhbmNlOiBub25lO1xuICAvKiBSaW11b3ZlIGxvIHN0aWxlIHByZWRlZmluaXRvICovXG4gIHdpZHRoOiAxNHB4O1xuICBoZWlnaHQ6IDE0cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNiYmI7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbmlucHV0W3R5cGU9cmFkaW9dOmNoZWNrZWQge1xuICBib3JkZXItY29sb3I6IHZhcigtLWFjdGl2ZS1jb2xvcik7XG59XG5pbnB1dFt0eXBlPXJhZGlvXTpjaGVja2VkOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICB3aWR0aDogMTBweDtcbiAgaGVpZ2h0OiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY3RpdmUtY29sb3IpO1xuICBib3JkZXItY29sb3I6IHZhcigtLWFjdGl2ZS1jb2xvcik7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cbmlucHV0OmNoZWNrZWQgKyBzcGFuLnRvZ2dsZTpiZWZvcmUge1xuICBsZWZ0OiAyMHB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1hY3RpdmUtY29sb3IpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc3R5bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFlQTtFQUNJLGlDQUFBO0VBQ0Esa0NBQUE7RUFDQSwrQkFBQTtFQUNBLGtDQUFBO0VBRUEsK0NBQUE7QUFkSjs7QUFpQkE7RUFDSSxjQXJCYztFQXNCZCxxQ0FBQTtFQUNBLGtCQUFBO0FBZEo7O0FBaUJBOztFQUVJLFdBeEJRO0VBeUJSLFNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkF0Q2M7RUF1Q2QsdUJBQUE7RUFDQSw2QkFBQTtBQWRKO0FBZ0JJOztFQUNJLDZDQUFBO0FBYlI7QUFnQkk7O0VBQ0ksOENBQUE7QUFiUjtBQWdCSTs7RUFDSSwyQ0FBQTtBQWJSO0FBZ0JJOztFQUNJLDhDQUFBO0FBYlI7O0FBaUJBOztFQUVJLG1DQUFBO0VBQ0EsY0FBQTtBQWRKOztBQWlCQTtFQUNJLGtCQUFBO0FBZEo7O0FBaUJBO0VBQ0ksaUJBQUE7QUFkSjs7QUFpQkE7RUFDSSxlQUFBO0FBZEo7O0FBaUJBO0VBQ0ksZUFBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBRUEsOENBQ0k7QUFoQlI7QUFtQkk7RUFDSSxVQUFBO0FBakJSOztBQXFCQTtFQUNJLGdCQUFBO0FBbEJKO0FBb0JJO0VBQ0ksc0JBQUE7QUFsQlI7O0FBc0JBO0VBQ0ksaUJBQUE7QUFuQko7O0FBeUJRO0VBQ0ksaUJBQUE7RUFDQSwwQkFBQTtFQUNBLHdDQUFBO0FBdEJaO0FBd0JZO0VBQ0ksaUJBQUE7RUFDQSx3QkFBQTtFQUNBLHdDQUFBO0FBdEJo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LG9CQUFBO0VBQ0EsZ0NBQUE7QUExRFo7QUE4REk7RUFLSSxnQkFBQTtFQUNBLGlDQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFoRVI7QUFvRFE7RUFDSSxpQ0FBQTtBQWxEWjtBQStEUTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHFDQUFBO0VBQ0EsaUNBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtBQTdEWjtBQWlFSTtFQUNJLFVBQUE7RUFDQSwrQkFBQTtFQUNBLGdDQUFBO0FBL0RSXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU9wZW4rU2FuczppdGFsLHdnaHRAMCwzMDAuLjgwMDsxLDMwMC4uODAwJmRpc3BsYXk9c3dhcFxcXCIpO1xcblxcbiRzZWNvbmRhcnlDb2xvcjogI2E4OWQ5MTtcXG4kcHJpbWFyeUNvbG9yOiAjNDg1ZmM3O1xcbiRiYWNrZ3JvdW5kQ29sb3I6ICNmZmZmZmY7XFxuJGJhY2tncm91bmRDb2xvckxpZ2h0OiAjZjVmNWY1O1xcblxcblxcbiR0ZXh0Q29sb3I6ICM0NDQ7XFxuXFxuJGNvbG9yRGFuZ2VyOiAjZjE0NjY4O1xcbiRjb2xvcldhcm5pbmc6ICNmZmUwOGE7XFxuJGNvbG9ySW5mbzogIzNlOGVkMDtcXG4kY29sb3JTdWNjZXNzOiAjNDhjNzhlO1xcblxcbjpyb290IHtcXG4gICAgLS1zZWxlY3Rpb24tY29sb3ItZGFuZ2VyOiAjZjE0NjY4O1xcbiAgICAtLXNlbGVjdGlvbi1jb2xvci13YXJuaW5nOiAjZmZlMDhhO1xcbiAgICAtLXNlbGVjdGlvbi1jb2xvci1pbmZvOiAjM2U4ZWQwO1xcbiAgICAtLXNlbGVjdGlvbi1jb2xvci1zdWNjZXNzOiAjNDhjNzhlO1xcblxcbiAgICAtLWFjdGl2ZS1jb2xvcjogdmFyKC0tc2VsZWN0aW9uLWNvbG9yLXN1Y2Nlc3MpXFxufVxcblxcbjo6c2VsZWN0aW9uIHtcXG4gICAgY29sb3I6ICRiYWNrZ3JvdW5kQ29sb3I7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjdGl2ZS1jb2xvcik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG59XFxuXFxuaHRtbCxcXG5ib2R5IHtcXG4gICAgY29sb3I6ICR0ZXh0Q29sb3I7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJPcGVuIFNhbnNcXFwiLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LW9wdGljYWwtc2l6aW5nOiBhdXRvO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmRDb2xvcjtcXG4gICAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XFxuICAgIHNjcm9sbC1zbmFwLXR5cGU6IHkgbWFuZGF0b3J5O1xcblxcbiAgICAmLmlzLWRhbmdlciB7XFxuICAgICAgICAtLWFjdGl2ZS1jb2xvcjogdmFyKC0tc2VsZWN0aW9uLWNvbG9yLWRhbmdlcik7XFxuICAgIH1cXG5cXG4gICAgJi5pcy13YXJuaW5nIHtcXG4gICAgICAgIC0tYWN0aXZlLWNvbG9yOiB2YXIoLS1zZWxlY3Rpb24tY29sb3Itd2FybmluZyk7XFxuICAgIH1cXG5cXG4gICAgJi5pcy1pbmZvIHtcXG4gICAgICAgIC0tYWN0aXZlLWNvbG9yOiB2YXIoLS1zZWxlY3Rpb24tY29sb3ItaW5mbyk7XFxuICAgIH1cXG5cXG4gICAgJi5pcy1zdWNjZXNzIHtcXG4gICAgICAgIC0tYWN0aXZlLWNvbG9yOiB2YXIoLS1zZWxlY3Rpb24tY29sb3Itc3VjY2Vzcyk7XFxuICAgIH1cXG59XFxuXFxuLnRpdGxlLFxcbi5zdWJ0aXRsZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiS29kZSBNb25vXFxcIiwgbW9ub3NwYWNlO1xcbiAgICBjb2xvcjogaW5oZXJpdDtcXG59XFxuXFxuLnNlY3Rpb24ge1xcbiAgICBwYWRkaW5nOiAycmVtIDJyZW07XFxufVxcblxcbi5pcy1mdWxsaGVpZ2h0IHtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxufVxcblxcbi5pcy1mdWxsd2lkdGgge1xcbiAgICBtaW4td2lkdGg6IDEwMCU7XFxufVxcblxcbi5ub3RpZmljYXRpb24ge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmU2NDU7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHotaW5kZXg6IDEwMDtcXG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggJHRleHRDb2xvcjtcXG5cXG4gICAgdHJhbnNpdGlvbjpcXG4gICAgICAgIHZpc2liaWxpdHkgMHMsXFxuICAgICAgICBvcGFjaXR5IDAuM3MgbGluZWFyO1xcblxcbiAgICAmLmlzLWludmlzaWJsZSB7XFxuICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICB9XFxufVxcblxcbiNwd2QtdHlwZS1zZWxlY3Rvci10YWIge1xcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xcblxcbiAgICB1bCB7XFxuICAgICAgICBib3JkZXItYm90dG9tLXdpZHRoOiAwO1xcbiAgICB9XFxufVxcblxcbiNwd2Qtc2V0dGluZ3MtYm94IHtcXG4gICAgbWluLWhlaWdodDogMzYycHg7XFxufVxcblxcbi50YWJzIGxpIHtcXG5cXG4gICAgJi5pcy1hY3RpdmUge1xcbiAgICAgICAgYSB7XFxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWFjdGl2ZS1jb2xvcik7XFxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdmFyKC0tYWN0aXZlLWNvbG9yKTtcXG5cXG4gICAgICAgICAgICAmOmhvdmVyIHtcXG4gICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IG5vbmU7XFxuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDJweDtcXG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdmFyKC0tYWN0aXZlLWNvbG9yKTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgYSB7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XFxuICAgICAgICBib3JkZXItYm90dG9tLXdpZHRoOiAycHg7XFxuICAgICAgICBib3JkZXItYm90dG9tLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgICAgIGNvbG9yOiAkc2Vjb25kYXJ5Q29sb3I7XFxuXFxuICAgICAgICAmOmhvdmVyIHtcXG4gICAgICAgICAgICB0ZXh0LXNoYWRvdzogdmFyKC0tYWN0aXZlLWNvbG9yKSAxcHggMCAxMHB4O1xcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDJweDtcXG4gICAgICAgICAgICBib3JkZXItYm90dG9tLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgICAgIH1cXG4gICAgfVxcbn1cXG5cXG5cXG4jcHdkLXN0cmVuZ3RoLXRhZ2JveCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiAycHg7XFxuICAgIGxlZnQ6IDBweDtcXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDZweDtcXG59XFxuXFxuI3B3ZC1hY3Rpb25zLWJveCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiAzcHg7XFxuICAgIHJpZ2h0OiAwcHg7XFxuXFxuICAgIC5hY3Rpb24ge1xcbiAgICAgICAgcGFkZGluZzogMCAuM3JlbTtcXG4gICAgICAgIGNvbG9yOiB2YXIoLS1hY3RpdmUtY29sb3IpO1xcblxcbiAgICAgICAgJjpob3ZlciB7XFxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWFjdGl2ZS1jb2xvcik7XFxuICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDAgMCA1cHggdmFyKC0tYWN0aXZlLWNvbG9yKTtcXG4gICAgICAgIH1cXG4gICAgfVxcbn1cXG5cXG4jcHdkLXN0cmVuZ3RoIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IDBweDtcXG4gICAgbGVmdDogMHB4O1xcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwcHg7XFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwcHg7XFxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDZweDtcXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDZweDtcXG4gICAgaGVpZ2h0OiAycHg7XFxufVxcblxcbi5wd2QtY29udGFpbmVyIHtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXG5cXG4gICAgJi5pcy1kYW5nZXIge1xcbiAgICAgICAgOjpzZWxlY3Rpb24ge1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjdGl2ZS1jb2xvcik7XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgJi5pcy13YXJuaW5nIHtcXG4gICAgICAgIDo6c2VsZWN0aW9uIHtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY3RpdmUtY29sb3IpO1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgICYuaXMtaW5mbyB7XFxuICAgICAgICA6OnNlbGVjdGlvbiB7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWN0aXZlLWNvbG9yKTtcXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAmLmlzLXN1Y2Nlc3Mge1xcbiAgICAgICAgOjpzZWxlY3Rpb24ge1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjdGl2ZS1jb2xvcik7XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgOjpzZWxlY3Rpb24ge1xcbiAgICAgICAgY29sb3I6ICRiYWNrZ3JvdW5kQ29sb3I7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY3RpdmUtY29sb3IpO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICB9XFxufVxcblxcblxcbiNzZXR0aW5ncy1wYXNzd29yZC1sZW5ndGgge1xcbiAgICB3aWR0aDogNjRweDtcXG59XFxuXFxuI3NldHRpbmdzLXBhc3N3b3JkLWxlbmd0aC1yYW5nZSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICAvKiBSaW11b3ZlIGxvIHN0aWxlIGRpIGRlZmF1bHQgc3UgV2ViS2l0ICovXFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcXG5cXG4gICAgJjpob3ZlciB7XFxuICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICB9XFxuXFxuICAgIC8qIFN0aWxlIGRlbCBjdXJzb3JlIHBlciBDaHJvbWUsIFNhZmFyaSwgRWRnZSAqL1xcbiAgICAmOjotd2Via2l0LXNsaWRlci10aHVtYiB7XFxuICAgICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAgICAgICBhcHBlYXJhbmNlOiBub25lO1xcbiAgICAgICAgbWFyZ2luLXRvcDogLTVweDtcXG4gICAgICAgIHdpZHRoOiAxMHB4O1xcbiAgICAgICAgaGVpZ2h0OiAyMHB4O1xcbiAgICAgICAgYmFja2dyb3VuZDogJHRleHRDb2xvcjtcXG4gICAgICAgIC8qIENvbG9yZSBkZWwgY3Vyc29yZSAqL1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB9XFxuXFxuICAgIC8qIFN0aWxlIGRlbGxhIGJhcnJhIHBlciBDaHJvbWUsIFNhZmFyaSwgRWRnZSAqL1xcbiAgICAmOjotd2Via2l0LXNsaWRlci1ydW5uYWJsZS10cmFjayB7XFxuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1hY3RpdmUtY29sb3IpO1xcbiAgICAgICAgaGVpZ2h0OiA4cHg7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICB9XFxuXFxuICAgIC8qIFN0aWxlIHBlciBGaXJlZm94ICovXFxuICAgICY6Oi1tb3otcmFuZ2UtdGh1bWIge1xcbiAgICAgICAgd2lkdGg6IDIwcHg7XFxuICAgICAgICBoZWlnaHQ6IDIwcHg7XFxuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1hY3RpdmUtY29sb3IpO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB9XFxuXFxuICAgICY6Oi1tb3otcmFuZ2UtdHJhY2sge1xcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYWN0aXZlLWNvbG9yKTtcXG4gICAgICAgIGhlaWdodDogOHB4O1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgfVxcbn1cXG5cXG4jc2V0dGluZ3MtcGFzc3BocmFzZS1sZW5ndGgtcmFuZ2Uge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgLyogUmltdW92ZSBsbyBzdGlsZSBkaSBkZWZhdWx0IHN1IFdlYktpdCAqL1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxuXFxuICAgICY6aG92ZXIge1xcbiAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgfVxcblxcbiAgICAvKiBTdGlsZSBkZWwgY3Vyc29yZSBwZXIgQ2hyb21lLCBTYWZhcmksIEVkZ2UgKi9cXG4gICAgJjo6LXdlYmtpdC1zbGlkZXItdGh1bWIge1xcbiAgICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgICAgICAgYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgICAgIG1hcmdpbi10b3A6IC01cHg7XFxuICAgICAgICB3aWR0aDogMTBweDtcXG4gICAgICAgIGhlaWdodDogMjBweDtcXG4gICAgICAgIGJhY2tncm91bmQ6ICR0ZXh0Q29sb3I7XFxuICAgICAgICAvKiBDb2xvcmUgZGVsIGN1cnNvcmUgKi9cXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgfVxcblxcbiAgICAvKiBTdGlsZSBkZWxsYSBiYXJyYSBwZXIgQ2hyb21lLCBTYWZhcmksIEVkZ2UgKi9cXG4gICAgJjo6LXdlYmtpdC1zbGlkZXItcnVubmFibGUtdHJhY2sge1xcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYWN0aXZlLWNvbG9yKTtcXG4gICAgICAgIGhlaWdodDogOHB4O1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgfVxcblxcbiAgICAvKiBTdGlsZSBwZXIgRmlyZWZveCAqL1xcbiAgICAmOjotbW96LXJhbmdlLXRodW1iIHtcXG4gICAgICAgIHdpZHRoOiAyMHB4O1xcbiAgICAgICAgaGVpZ2h0OiAyMHB4O1xcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYWN0aXZlLWNvbG9yKTtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgfVxcblxcbiAgICAmOjotbW96LXJhbmdlLXRyYWNrIHtcXG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWFjdGl2ZS1jb2xvcik7XFxuICAgICAgICBoZWlnaHQ6IDhweDtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIH1cXG59XFxuXFxuLnNldHRpbmdzLWNvbnRhaW5lciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjdGl2ZS1jb2xvcik7XFxuICAgIGNvbG9yOiAkYmFja2dyb3VuZENvbG9yO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1hY3RpdmUtY29sb3IpO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcblxcbiAgICA6OnNlbGVjdGlvbiB7XFxuICAgICAgICBjb2xvcjogJGJhY2tncm91bmRDb2xvcjtcXG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWFjdGl2ZS1jb2xvcik7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIH1cXG5cXG4gICAgLmNoZWNrYm94OmhvdmVyLFxcbiAgICAucmFkaW86aG92ZXIge1xcbiAgICAgICAgY29sb3I6ICR0ZXh0Q29sb3I7XFxuICAgIH1cXG59XFxuXFxuLmZvb3RlciB7XFxuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCAjMjQ1NDk0O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2NhN2RmO1xcbn1cXG5cXG4uaXMtb3dlcmZsb3ctYXV0byB7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4uaXMtd29yZC1icmVhay1hbGwge1xcbiAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XFxufVxcblxcbiNwYXNzd29yZC1zZXR0aW5ncy1zaG9ydGN1dCB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG59XFxuXFxuaW5wdXQge1xcbiAgICArc3Bhbi50b2dnbGUge1xcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICAgICAgaGVpZ2h0OiAyNHB4O1xcbiAgICAgICAgd2lkdGg6IDQwcHg7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAtNnB4O1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC0yNHB4O1xcbiAgICAgICAgYmFja2dyb3VuZDogJGJhY2tncm91bmRDb2xvckxpZ2h0O1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwdmg7XFxuICAgICAgICBjb2xvcjogdmFyKC0tYWN0aXZlLWNvbG9yKTtcXG5cXG4gICAgICAgICY6YmVmb3JlIHtcXG4gICAgICAgICAgICBjb250ZW50OiBcXFwiIFxcXCI7XFxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgICAgIHRvcDogNHB4O1xcbiAgICAgICAgICAgIGxlZnQ6IDRweDtcXG4gICAgICAgICAgICByaWdodDogYXV0bztcXG4gICAgICAgICAgICBoZWlnaHQ6IDE2cHg7XFxuICAgICAgICAgICAgd2lkdGg6IDE2cHg7XFxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2JiYjtcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMDB2aDtcXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAmW3R5cGU9cmFkaW9dIHtcXG4gICAgICAgICY6Y2hlY2tlZCB7XFxuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1hY3RpdmUtY29sb3IpO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgICAgIC8qIFJpbXVvdmUgbG8gc3RpbGUgcHJlZGVmaW5pdG8gKi9cXG4gICAgICAgIHdpZHRoOiAxNHB4O1xcbiAgICAgICAgaGVpZ2h0OiAxNHB4O1xcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2JiYjtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG5cXG4gICAgICAgICY6Y2hlY2tlZDo6YmVmb3JlIHtcXG4gICAgICAgICAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgICAgICAgICB3aWR0aDogMTBweDtcXG4gICAgICAgICAgICBoZWlnaHQ6IDEwcHg7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWN0aXZlLWNvbG9yKTtcXG4gICAgICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLWFjdGl2ZS1jb2xvcik7XFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgICAgICB0b3A6IDUwJTtcXG4gICAgICAgICAgICBsZWZ0OiA1MCU7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgJjpjaGVja2VkK3NwYW4udG9nZ2xlOmJlZm9yZSB7XFxuICAgICAgICBsZWZ0OiAyMHB4O1xcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYWN0aXZlLWNvbG9yKTtcXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xcbiAgICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFzc3BocmFzZSB7XG4gICAgY29uc3RydWN0b3Iod29yZExpc3QsIHdvcmRDb3VudCA9IDQsIHNlcGFyYXRvciA9ICctJywgaW5jbHVkZU51bWJlcnMgPSBmYWxzZSwgY2FwaXRhbGl6ZSA9IGZhbHNlKSB7XG4gICAgICAgIHRoaXMud29yZExpc3QgPSB3b3JkTGlzdDtcbiAgICAgICAgdGhpcy53b3JkQ291bnQgPSB3b3JkQ291bnQ7XG4gICAgICAgIHRoaXMuc2VwYXJhdG9yID0gc2VwYXJhdG9yO1xuICAgICAgICB0aGlzLmluY2x1ZGVOdW1iZXJzID0gaW5jbHVkZU51bWJlcnM7XG4gICAgICAgIHRoaXMuY2FwaXRhbGl6ZSA9IGNhcGl0YWxpemU7XG4gICAgfVxuXG4gICAgZ2VuZXJhdGUoKSB7XG4gICAgICAgIGxldCBwYXNzcGhyYXNlID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy53b3JkQ291bnQ7IGkrKykge1xuICAgICAgICAgICAgbGV0IHdvcmQgPSB0aGlzLndvcmRMaXN0W01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMud29yZExpc3QubGVuZ3RoKV07XG4gICAgICAgICAgICBpZiAodGhpcy5jYXBpdGFsaXplKSB7XG4gICAgICAgICAgICAgICAgd29yZCA9IHRoaXMuI3JhbmRvbUNhcGl0YWxpemUod29yZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwYXNzcGhyYXNlLnB1c2god29yZCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5pbmNsdWRlTnVtYmVycykge1xuICAgICAgICAgICAgcGFzc3BocmFzZS5wdXNoKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHBhc3NwaHJhc2U6IHBhc3NwaHJhc2Uuam9pbih0aGlzLnNlcGFyYXRvciksXG4gICAgICAgICAgICBzdHJlbmd0aDogdGhpcy4jZ2V0U3RyZW5ndGgoKSxcbiAgICAgICAgfVxuICAgIH1cblxuICAgICNyYW5kb21DYXBpdGFsaXplKHdvcmQpIHtcbiAgICAgICAgcmV0dXJuIHdvcmRcbiAgICAgICAgICAgIC5zcGxpdCgnJylcbiAgICAgICAgICAgIC5tYXAoY2hhciA9PiAoTWF0aC5yYW5kb20oKSA8IDAuNSA/IGNoYXIudG9VcHBlckNhc2UoKSA6IGNoYXIpKVxuICAgICAgICAgICAgLmpvaW4oJycpO1xuICAgIH1cblxuICAgICNnZXRTdHJlbmd0aCgpIHtcbiAgICAgICAgbGV0IGVudHJvcHkgPSB0aGlzLndvcmRDb3VudCAqIE1hdGgubG9nMih0aGlzLndvcmRMaXN0Lmxlbmd0aCk7XG4gICAgICAgIGlmICh0aGlzLmluY2x1ZGVOdW1iZXJzKSBlbnRyb3B5ICs9IE1hdGgubG9nMigxMDApO1xuICAgICAgICBpZiAodGhpcy5jYXBpdGFsaXplKSBlbnRyb3B5ICs9IHRoaXMud29yZENvdW50ICogMS41OyAvLyBBcHByb3hpbWF0ZSBleHRyYSBlbnRyb3B5IGZyb20gY2FwaXRhbGl6YXRpb25cbiAgICAgICAgcmV0dXJuIGVudHJvcHk7XG4gICAgfVxufVxuIiwiaW1wb3J0IFBhc3NwaHJhc2UgZnJvbSBcIi4vZ2VuZXJhdG9yXCI7XG5leHBvcnQgeyBQQVNTUEhSQVNFX1dPUkRMSVNUIH0gZnJvbSBcIi4vdXRpbHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgUGFzc3BocmFzZTtcbiIsImV4cG9ydCBjb25zdCBQQVNTUEhSQVNFX1dPUkRMSVNUID0gW1xuICAgIFwiYXBwbGVcIiwgXCJiYW5hbmFcIiwgXCJjaGVycnlcIiwgXCJkZWx0YVwiLCBcImVjaG9cIiwgXCJmb3h0cm90XCIsIFwiZ29sZlwiLCBcImhvdGVsXCIsIFwiaW5kaWFcIiwgXCJqdWxpZXRcIixcbiAgICBcImthbmdhcm9vXCIsIFwibGVtb25cIiwgXCJtYW5nb1wiLCBcIm5lY3RhclwiLCBcIm9yYW5nZVwiLCBcInBhcGF5YVwiLCBcInF1YXNhclwiLCBcInJhc3BiZXJyeVwiLCBcInN0cmF3YmVycnlcIiwgXCJ0YW5nb1wiLFxuICAgIFwidW1icmVsbGFcIiwgXCJ2aW9sZXRcIiwgXCJ3YWxudXRcIiwgXCJ4ZW5vblwiLCBcInlhbmtlZVwiLCBcInplYnJhXCIsIFwiYWxiYXRyb3NzXCIsIFwiYnV0dGVyZmx5XCIsIFwiY29jb251dFwiLCBcImRyYWdvblwiLFxuICAgIFwiZWxlcGhhbnRcIiwgXCJmaXJlZmx5XCIsIFwiZ29yaWxsYVwiLCBcImhvcml6b25cIiwgXCJpZ2xvb1wiLCBcImphY2thbFwiLCBcImtvYWxhXCIsIFwibGlnaHRuaW5nXCIsIFwibW91bnRhaW5cIiwgXCJuZWJ1bGFcIixcbiAgICBcIm9jZWFuXCIsIFwicGVuZ3VpblwiLCBcInF1b2trYVwiLCBcInJhaW5ib3dcIiwgXCJzYXBwaGlyZVwiLCBcInRvcGF6XCIsIFwidW5pY29yblwiLCBcInZvbGNhbm9cIiwgXCJ3aGlybHBvb2xcIiwgXCJ4ZXJveFwiLFxuICAgIFwieWVsbG93XCIsIFwiemVwcGVsaW5cIiwgXCJhc3Rlcm9pZFwiLCBcImJsaXp6YXJkXCIsIFwiY29tZXRcIiwgXCJkb2xwaGluXCIsIFwiZW1lcmFsZFwiLCBcImZhbGNvblwiLCBcImdhbGF4eVwiLCBcImh1cnJpY2FuZVwiLFxuICAgIFwiaWxsdXNpb25cIiwgXCJqdW5nbGVcIiwgXCJraW5nZG9tXCIsIFwibGlnaHRob3VzZVwiLCBcIm1ldGVvclwiLCBcIm5vdmVtYmVyXCIsIFwib2N0b3B1c1wiLCBcInBhcmFkaXNlXCIsIFwicXVpY2tzYW5kXCIsXG4gICAgXCJyaXB0aWRlXCIsIFwic3Vuc2hpbmVcIiwgXCJ0aHVuZGVyXCIsIFwidW5kZXJ0b3dcIiwgXCJ2b3J0ZXhcIiwgXCJ3aGFsZVwiLCBcInh5bG9waG9uZVwiLCBcInlldGlcIiwgXCJ6ZW5pdGhcIiwgXCJhdmFsYW5jaGVcIixcbiAgICBcImJsdWViZXJyeVwiLCBcImNvc21vc1wiLCBcImRheWxpZ2h0XCIsIFwiZXZlcmVzdFwiLCBcImZpcmVzdG9ybVwiLCBcImdsYWNpZXJcIiwgXCJodW1taW5nYmlyZFwiLCBcImlzb3RvcGVcIiwgXCJqaWdzYXdcIixcbiAgICBcImtyeXB0b25cIiwgXCJsYWJ5cmludGhcIiwgXCJtaXJhZ2VcIiwgXCJuaWdodGZhbGxcIiwgXCJvYnNpZGlhblwiLCBcInB1enpsZVwiLCBcInF1YW50dW1cIiwgXCJyZWxpY1wiLCBcInN0YXJsaWdodFwiLFxuICAgIFwidGVsZXNjb3BlXCIsIFwidXRvcGlhXCIsIFwidm95YWdlclwiLCBcIndpbmRzd2VwdFwiLCBcInhlbm9waGlsZVwiLCBcInlvbmRlclwiLCBcInplcHBlbGluXCJcbl07IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFzc3dvcmQge1xuICAgIGNvbnN0cnVjdG9yKGF2YWlsYWJsZUNoYXJzLCBwYXNzd29yZExlbmd0aCkge1xuICAgICAgICB0aGlzLmF2YWlsYWJsZUNoYXJzID0gYXZhaWxhYmxlQ2hhcnM7XG4gICAgICAgIHRoaXMucGFzc3dvcmRMZW5ndGggPSBwYXNzd29yZExlbmd0aDtcbiAgICB9XG5cbiAgICBnZW5lcmF0ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuYXZhaWxhYmxlQ2hhcnMuc2l6ZSA9PT0gMCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdObyBjaGFyYWN0ZXJzIGF2YWlsYWJsZSB0byBnZW5lcmF0ZSBwYXNzd29yZCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY2hhcnNBcnJheSA9IEFycmF5LmZyb20odGhpcy5hdmFpbGFibGVDaGFycyk7XG4gICAgICAgIGNvbnN0IHJhbmRvbVZhbHVlcyA9IGNyeXB0by5nZXRSYW5kb21WYWx1ZXMobmV3IFVpbnQzMkFycmF5KHRoaXMucGFzc3dvcmRMZW5ndGgpKTtcblxuICAgICAgICBjb25zdCBwYXNzd29yZCA9IEFycmF5LmZyb20oeyBsZW5ndGg6IHRoaXMucGFzc3dvcmRMZW5ndGggfSwgKF8sIGkpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKGNoYXJzQXJyYXlbcmFuZG9tVmFsdWVzW2ldICUgY2hhcnNBcnJheS5sZW5ndGhdKTtcbiAgICAgICAgfSkuam9pbignJyk7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHBhc3N3b3JkLFxuICAgICAgICAgICAgc3RyZW5ndGg6IHRoaXMuI2NhbGN1bGF0ZVN0cmVuZ3RoKHBhc3N3b3JkKSxcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgI2NhbGN1bGF0ZVN0cmVuZ3RoKHBhc3N3b3JkKSB7XG4gICAgICAgIGNvbnN0IHVuaXF1ZUNoYXJzID0gbmV3IFNldChwYXNzd29yZCkuc2l6ZTtcbiAgICAgICAgY29uc3QgZW50cm9weSA9IHBhc3N3b3JkLmxlbmd0aCAqIE1hdGgubG9nMih1bmlxdWVDaGFycyk7XG4gICAgICAgIHJldHVybiBlbnRyb3B5LnRvRml4ZWQoMik7XG5cbiAgICB9XG59IiwiaW1wb3J0IFBhc3N3b3JkIGZyb20gXCIuL2dlbmVyYXRvclwiO1xuZXhwb3J0IHtcbiAgICBOVU1CRVJTLFxuICAgIExPV0VSQ0FTRSxcbiAgICBVUFBFUkNBU0UsXG4gICAgU1BFQ0lBTF9DSEFSQUNURVJTLFxuICAgIFNJTUlMQVJfQ0hBUlMsXG59IGZyb20gXCIuL3V0aWxzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IFBhc3N3b3JkO1xuIiwiY29uc3QgTlVNQkVSUyA9IG5ldyBVaW50OEFycmF5KFs0OCwgNDksIDUwLCA1MSwgNTIsIDUzLCA1NCwgNTUsIDU2LCA1N10pO1xuY29uc3QgTE9XRVJDQVNFID0gbmV3IFVpbnQ4QXJyYXkoW1xuICAgIDk3LCA5OCwgOTksIDEwMCwgMTAxLCAxMDIsIDEwMywgMTA0LCAxMDUsIDEwNiwgMTA3LCAxMDgsIDEwOSwgMTEwLCAxMTEsIDExMiwgMTEzLCAxMTQsIDExNSwgMTE2LCAxMTcsIDExOCwgMTE5LCAxMjAsXG4gICAgMTIxLCAxMjIsXG5dKTtcbmNvbnN0IFVQUEVSQ0FTRSA9IG5ldyBVaW50OEFycmF5KFtcbiAgICA2NSwgNjYsIDY3LCA2OCwgNjksIDcwLCA3MSwgNzIsIDczLCA3NCwgNzUsIDc2LCA3NywgNzgsIDc5LCA4MCwgODEsIDgyLCA4MywgODQsIDg1LCA4NiwgODcsIDg4LCA4OSwgOTAsXG5dKTtcbmNvbnN0IFNQRUNJQUxfQ0hBUkFDVEVSUyA9IG5ldyBVaW50OEFycmF5KFszMywgMzUsIDM2LCAzNywgMzgsIDQwLCA0MSwgNDIsIDQzLCA2NCwgOTRdKTtcbmNvbnN0IFNJTUlMQVJfQ0hBUlMgPSB7XG4gICAgMDogWzQ4LCA3OSwgMTExLCA3MywgMTA1XSwgLy8gMCwgTywgbCwgSVxuICAgIDE6IFs0OSwgNzYsIDEwOF0sIC8vIDEsIGwsIElcbiAgICA1OiBbNTMsIDgzLCAxMTUsIDU2LCA4OF0sIC8vIDUsIFMsIHMsIDgsIEJcbiAgICA2OiBbNTQsIDY2LCA5OF0sIC8vIDYsIGIsIEJcbiAgICA4OiBbNTYsIDY2LCA5OF0sIC8vIDgsIEIsIGJcbiAgICA5OiBbNTcsIDcxLCAxMDMsIDU0LCA2Nl0sIC8vIDksIGcsIEcsIDYsIGJcbiAgICBhOiBbOTcsIDY0LCA2NV0sIC8vIGEsIEAsIEFcbiAgICBlOiBbMTAxLCA2NywgOTldLCAvLyBlLCBjLCBDXG4gICAgZzogWzEwMywgODEsIDExMywgNTddLCAvLyBnLCBxLCBRLCA5XG4gICAgbDogWzEwOCwgNDksIDczLCAxMDVdLCAvLyBsLCAxLCBJLCBpXG4gICAgbzogWzExMSwgNDgsIDc5LCA5NywgNjVdLCAvLyBvLCAwLCBPLCBhLCBBXG4gICAgczogWzExNSwgNTMsIDgzXSwgLy8gcywgNSwgU1xuICAgIHQ6IFsxMTYsIDU1LCA4NF0sIC8vIHQsIDcsIFRcbiAgICB6OiBbMTIyLCA1MF0sIC8vIHosIDJcbn07XG5cbmV4cG9ydCB7XG4gICAgTlVNQkVSUyxcbiAgICBMT1dFUkNBU0UsXG4gICAgVVBQRVJDQVNFLFxuICAgIFNQRUNJQUxfQ0hBUkFDVEVSUyxcbiAgICBTSU1JTEFSX0NIQVJTLFxufSIsIi8vIGxvYWQgc3R5bGVzXG5pbXBvcnQgJy4uL3N0eWxlcy9zdHlsZS5zY3NzJztcblxuLy8gbG9hZCBzaXRlbWFwICYgcm9ib3RzXG5jb25zdCBzaXRlbWFwID0gcmVxdWlyZSgnLi4vLi4vc2l0ZW1hcC54bWwnKTtcbmNvbnN0IHJvYm90cyA9IHJlcXVpcmUoJy4uLy4uL3JvYm90cy50eHQnKTtcblxuLy8gbG9hZCBpbWFnZXNcbmltcG9ydCAnLi4vaW1hZ2VzL2Zhdmljb24uaWNvJztcbmltcG9ydCAnLi4vaW1hZ2VzL2Zhdmljb24ucG5nJztcbmltcG9ydCAnLi4vaW1hZ2VzL3NoYXJlLnBuZyc7XG5cbmltcG9ydCBQYXNzd29yZCwge1xuICBOVU1CRVJTLFxuICBMT1dFUkNBU0UsXG4gIFVQUEVSQ0FTRSxcbiAgU1BFQ0lBTF9DSEFSQUNURVJTLFxuICAvLyBTSU1JTEFSX0NIQVJTLFxufSBmcm9tICcuL2dlbmVhcmF0b3JzL3Bhc3N3b3JkJ1xuaW1wb3J0IFBhc3NwaHJhc2UsIHsgUEFTU1BIUkFTRV9XT1JETElTVCB9IGZyb20gJy4vZ2VuZWFyYXRvcnMvcGFzc3BocmFzZSdcblxubGV0IGF2YWlsYWJsZUNoYXJzID0gW107XG5cbmNvbnN0IGJvZHlkRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYm9keScpWzBdO1xuY29uc3QgcHdkR2VuZXJhdGVkRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHdkLWdlbmVyYXRlZCcpO1xuY29uc3Qgbm90aWZpY2F0aW9uRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbm90aWZpY2F0aW9uJyk7XG5jb25zdCBhY3Rpb25SZWRvRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWN0aW9uLXJlZG8nKTtcbmNvbnN0IG5vdGlmaWNhdGlvbkRlbGV0ZUJ0bkVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5vdGlmaWNhdGlvbiBidXR0b24uZGVsZXRlJyk7XG5jb25zdCBzZXR0aW5nc1Bhc3N3b3JkTGVuZ3RoUmFuZ2VFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZXR0aW5ncy1wYXNzd29yZC1sZW5ndGgtcmFuZ2UnKTtcbmNvbnN0IHNldHRpbmdzUGFzc3BocmFzZUxlbmd0aFJhbmdlRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2V0dGluZ3MtcGFzc3BocmFzZS1sZW5ndGgtcmFuZ2UnKTtcbmNvbnN0IHNldHRpbmdzUGFzc3dvcmRMZW5ndGhFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZXR0aW5ncy1wYXNzd29yZC1sZW5ndGgnKTtcbmNvbnN0IHB3ZENvbnRhaW5lckVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3B3ZC1jb250YWluZXInKTtcbmNvbnN0IHNldHRpbmdzUGFzc3BocmFzZVNlcGFyYXRvckVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NldHRpbmdzLXBhc3NwaHJhc2Utc2VwYXJhdG9yJyk7XG5jb25zdCBzZXR0aW5nc1Bhc3NwaHJhc2VMZW5ndGhFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZXR0aW5ncy1wYXNzcGhyYXNlLWxlbmd0aCcpO1xuY29uc3QgcHdkR2VuZXJhdGVkU3RyZW5ndGhFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwd2Qtc3RyZW5ndGgnKTtcbmNvbnN0IHB3ZEdlbmVyYXRlZFN0cmVuZ3RoVGFnQm94RWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHdkLXN0cmVuZ3RoLXRhZ2JveCcpO1xuY29uc3QgcHdkR2VuZXJhdGVkU3RyZW5ndGhUYWdFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwd2Qtc3RyZW5ndGgtdGFnJyk7XG5jb25zdCBzZXR0aW5nc0FsbG93TnVtYmVyc0VsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NldHRpbmdzLWFsbG93LW51bWJlcnMnKTtcbmNvbnN0IHNldHRpbmdzUGFzc3BocmFzZUNhcGl0YWxpemVFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZXR0aW5ncy1wYXNzcGhyYXNlLWNhcGl0YWxpemUnKTtcbmNvbnN0IHNldHRpbmdzUGFzc3BocmFzZUluY2x1ZGVOdW1iZXJzRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2V0dGluZ3MtcGFzc3BocmFzZS1pbmNsdWRlLW51bWJlcnMnKTtcbmNvbnN0IHNldHRpbmdzQWxsb3dVcHBlcmNhc2VFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZXR0aW5ncy1hbGxvdy11cHBlcmNhc2UnKTtcbmNvbnN0IHNldHRpbmdzQWxsb3dMb3dlcmNhc2VFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZXR0aW5ncy1hbGxvdy1sb3dlcmNhc2UnKTtcbmNvbnN0IHNldHRpbmdzQWxsb3dTeW1ib2xzRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2V0dGluZ3MtYWxsb3ctc3ltYm9scycpO1xuY29uc3Qgc2V0dGluZ3NFeGNsdWRlRHVwbGljYXRlRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2V0dGluZ3MtZXhjbHVkZS1kdXBsaWNhdGUtY2hhcmFjdGVycycpO1xuY29uc3Qgc2V0dGluZ3NFeGNsdWRlU2ltaWxhckVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NldHRpbmdzLWV4Y2x1ZGUtc2ltaWxhci1jaGFyYWN0ZXJzJyk7XG5cblxuZnVuY3Rpb24gZ2V0UGFzc3dvcmRMZW5ndGgoKSB7XG4gIGNvbnN0IGxlbmd0aCA9IHNldHRpbmdzUGFzc3dvcmRMZW5ndGhFbC52YWx1ZTtcbiAgdHJ5IHtcbiAgICByZXR1cm4gcGFyc2VJbnQobGVuZ3RoIHx8IHNldHRpbmdzUGFzc3dvcmRMZW5ndGhFbC5nZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJykpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmVycm9yKCdlcnJvcicsIGUpO1xuICB9XG4gIHJldHVybiAwO1xufVxuXG5mdW5jdGlvbiBnZXRQYXNzcGhyYXNlTGVuZ3RoKCkge1xuICBjb25zdCBsZW5ndGggPSBzZXR0aW5nc1Bhc3NwaHJhc2VMZW5ndGhFbC52YWx1ZTtcbiAgdHJ5IHtcbiAgICByZXR1cm4gcGFyc2VJbnQobGVuZ3RoIHx8IHNldHRpbmdzUGFzc3BocmFzZUxlbmd0aEVsLmdldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInKSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ2Vycm9yJywgZSk7XG4gIH1cbiAgcmV0dXJuIDA7XG59XG5cbmZ1bmN0aW9uIGdldFBhc3NwaHJhc2VTZXBhcmF0b3IoKSB7XG4gIGNvbnN0IHNlcGFyYXRvciA9IHNldHRpbmdzUGFzc3BocmFzZVNlcGFyYXRvckVsLnZhbHVlO1xuICB0cnkge1xuICAgIHJldHVybiBzZXBhcmF0b3IgfHwgc2V0dGluZ3NQYXNzcGhyYXNlU2VwYXJhdG9yRWwuZ2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmVycm9yKCdlcnJvcicsIGUpO1xuICB9XG4gIHJldHVybiAnLSc7XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlQXZhaWxhYmxlQ2hhcnNMZW5ndGgoKSB7XG4gIGlmIChhdmFpbGFibGVDaGFycy5sZW5ndGggPT09IDApIHtcbiAgICBhY3Rpb25SZWRvRWwuY2xhc3NMaXN0LmFkZCgnaXMtaW52aXNpYmxlJyk7XG4gICAgcmV0dXJuO1xuICB9XG4gIGFjdGlvblJlZG9FbC5jbGFzc0xpc3QucmVtb3ZlKCdpcy1pbnZpc2libGUnKTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlQXZhaWxhYmxlQ2hhcnMoKSB7XG4gIGNvbnNvbGUudGltZSgndXBkYXRlQXZhaWxhYmxlQ2hhcnMnKTtcbiAgYXZhaWxhYmxlQ2hhcnMgPSBuZXcgU2V0KCk7XG5cbiAgaWYgKHNldHRpbmdzQWxsb3dOdW1iZXJzRWwuY2hlY2tlZCkgYXZhaWxhYmxlQ2hhcnMgPSBuZXcgU2V0KFsuLi5hdmFpbGFibGVDaGFycywgLi4uTlVNQkVSU10pO1xuICBpZiAoc2V0dGluZ3NBbGxvd1VwcGVyY2FzZUVsLmNoZWNrZWQpIGF2YWlsYWJsZUNoYXJzID0gbmV3IFNldChbLi4uYXZhaWxhYmxlQ2hhcnMsIC4uLlVQUEVSQ0FTRV0pO1xuICBpZiAoc2V0dGluZ3NBbGxvd0xvd2VyY2FzZUVsLmNoZWNrZWQpIGF2YWlsYWJsZUNoYXJzID0gbmV3IFNldChbLi4uYXZhaWxhYmxlQ2hhcnMsIC4uLkxPV0VSQ0FTRV0pO1xuICBpZiAoc2V0dGluZ3NBbGxvd1N5bWJvbHNFbC5jaGVja2VkKSBhdmFpbGFibGVDaGFycyA9IG5ldyBTZXQoWy4uLmF2YWlsYWJsZUNoYXJzLCAuLi5TUEVDSUFMX0NIQVJBQ1RFUlNdKTtcblxuICB2YWxpZGF0ZUF2YWlsYWJsZUNoYXJzTGVuZ3RoKCk7XG4gIGNvbnNvbGUudGltZUVuZCgndXBkYXRlQXZhaWxhYmxlQ2hhcnMnKTtcbn1cblxuZnVuY3Rpb24gc2hvd05vdGlmaWNhdGlvbigpIHtcbiAgbm90aWZpY2F0aW9uRWwuY2xhc3NMaXN0LnJlbW92ZSgnaXMtaW52aXNpYmxlJyk7XG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIG5vdGlmaWNhdGlvbkVsLmNsYXNzTGlzdC5hZGQoJ2lzLWludmlzaWJsZScpO1xuICB9LCAxMDAwMCk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGNvcHlUb0NsaXBib2FyZCgpIHtcbiAgdHJ5IHtcbiAgICBhd2FpdCBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dChwd2RHZW5lcmF0ZWRFbC5pbm5lclRleHQpO1xuICAgIHNob3dOb3RpZmljYXRpb24oKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgY29weWluZyB0ZXh0OiAnLCBlcnIpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVBhc3N3b3JkKCkge1xuICBpZiAoYXZhaWxhYmxlQ2hhcnMuc2l6ZSA9PT0gMCkge1xuICAgIHJldHVybiB7XG4gICAgICBwYXNzd29yZDogJycsXG4gICAgICBzdHJlbmd0aDogMCxcbiAgICB9O1xuICB9XG4gIGNvbnN0IHBhc3N3b3JkTGVuZ3RoID0gZ2V0UGFzc3dvcmRMZW5ndGgoKTtcbiAgY29uc3QgZ2VuZXJhdG9yID0gbmV3IFBhc3N3b3JkKGF2YWlsYWJsZUNoYXJzLCBwYXNzd29yZExlbmd0aCk7XG4gIHJldHVybiBnZW5lcmF0b3IuZ2VuZXJhdGUoKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlUGFzc3BocmFzZSgpIHtcbiAgY29uc3QgcGFzc3BocmFzZUxlbmd0aCA9IGdldFBhc3NwaHJhc2VMZW5ndGgoKTtcbiAgY29uc3Qgc2VwYXJhdG9yID0gZ2V0UGFzc3BocmFzZVNlcGFyYXRvcigpO1xuICBjb25zdCBjYXBpdGFsaXplID0gc2V0dGluZ3NQYXNzcGhyYXNlQ2FwaXRhbGl6ZUVsLmNoZWNrZWQ7XG4gIGNvbnN0IGluY2x1ZGVOdW1iZXJzID0gc2V0dGluZ3NQYXNzcGhyYXNlSW5jbHVkZU51bWJlcnNFbC5jaGVja2VkO1xuICBjb25zdCBnZW5lcmF0b3IgPSBuZXcgUGFzc3BocmFzZShQQVNTUEhSQVNFX1dPUkRMSVNULCBwYXNzcGhyYXNlTGVuZ3RoLCBzZXBhcmF0b3IsIGluY2x1ZGVOdW1iZXJzLCBjYXBpdGFsaXplKTtcbiAgcmV0dXJuIGdlbmVyYXRvci5nZW5lcmF0ZSgpXG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVBhc3N3b3JkU2V0dGluZ3MoKSB7XG4gIGNvbnN0IHB3ZE1vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwicHdkLW1vZGVcIl06Y2hlY2tlZCcpLnZhbHVlO1xuICBzd2l0Y2ggKHB3ZE1vZGUpIHtcbiAgICBjYXNlICdlYXN5LXRvLXJlYWQnOiB7XG4gICAgICBzZXR0aW5nc0V4Y2x1ZGVTaW1pbGFyRWwuY2hlY2tlZCA9IHRydWU7XG4gICAgICBzZXR0aW5nc0V4Y2x1ZGVEdXBsaWNhdGVFbC5jaGVja2VkID0gZmFsc2U7XG5cbiAgICAgIHNldHRpbmdzQWxsb3dOdW1iZXJzRWwuY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgc2V0dGluZ3NBbGxvd1VwcGVyY2FzZUVsLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgc2V0dGluZ3NBbGxvd0xvd2VyY2FzZUVsLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgc2V0dGluZ3NBbGxvd1N5bWJvbHNFbC5jaGVja2VkID0gZmFsc2U7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgY2FzZSAnZWFzeS10by1zYXknOiB7XG4gICAgICBzZXR0aW5nc0V4Y2x1ZGVTaW1pbGFyRWwuY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgc2V0dGluZ3NFeGNsdWRlRHVwbGljYXRlRWwuY2hlY2tlZCA9IGZhbHNlO1xuXG4gICAgICBzZXR0aW5nc0FsbG93TnVtYmVyc0VsLmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgIHNldHRpbmdzQWxsb3dVcHBlcmNhc2VFbC5jaGVja2VkID0gdHJ1ZTtcbiAgICAgIHNldHRpbmdzQWxsb3dMb3dlcmNhc2VFbC5jaGVja2VkID0gdHJ1ZTtcbiAgICAgIHNldHRpbmdzQWxsb3dTeW1ib2xzRWwuY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGNhc2UgJ2FsbC1jaGFyYWN0ZXJzJzpcbiAgICBkZWZhdWx0OiB7XG4gICAgICBzZXR0aW5nc0V4Y2x1ZGVTaW1pbGFyRWwuY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgc2V0dGluZ3NFeGNsdWRlRHVwbGljYXRlRWwuY2hlY2tlZCA9IGZhbHNlO1xuXG4gICAgICBzZXR0aW5nc0FsbG93TnVtYmVyc0VsLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgc2V0dGluZ3NBbGxvd1VwcGVyY2FzZUVsLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgc2V0dGluZ3NBbGxvd0xvd2VyY2FzZUVsLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgc2V0dGluZ3NBbGxvd1N5bWJvbHNFbC5jaGVja2VkID0gdHJ1ZTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICB1cGRhdGVBdmFpbGFibGVDaGFycygpO1xufVxuXG5mdW5jdGlvbiBzZXRTdHJlbmd0aChzdHJlbmd0aCkge1xuICBib2R5ZEVsLmNsYXNzTGlzdC5yZW1vdmUoXG4gICAgJ2lzLWRhbmdlcicsXG4gICAgJ2lzLXdhcm5pbmcnLFxuICAgICdpcy1pbmZvJyxcbiAgICAnaXMtc3VjY2VzcycsXG4gICk7XG4gIHB3ZEdlbmVyYXRlZFN0cmVuZ3RoRWwuY2xhc3NMaXN0LnJlbW92ZShcbiAgICAnaXMtZGFuZ2VyJyxcbiAgICAnaXMtd2FybmluZycsXG4gICAgJ2lzLWluZm8nLFxuICAgICdpcy1zdWNjZXNzJyxcbiAgKTtcbiAgcHdkQ29udGFpbmVyRWwuY2xhc3NMaXN0LnJlbW92ZShcbiAgICAnaXMtZGFuZ2VyJyxcbiAgICAnaXMtd2FybmluZycsXG4gICAgJ2lzLWluZm8nLFxuICAgICdpcy1zdWNjZXNzJyxcbiAgKTtcbiAgc2V0dGluZ3NQYXNzd29yZExlbmd0aFJhbmdlRWwuY2xhc3NMaXN0LnJlbW92ZShcbiAgICAnaXMtZGFuZ2VyJyxcbiAgICAnaXMtd2FybmluZycsXG4gICAgJ2lzLWluZm8nLFxuICAgICdpcy1zdWNjZXNzJyxcbiAgKTtcbiAgcHdkR2VuZXJhdGVkU3RyZW5ndGhUYWdCb3hFbC5jbGFzc0xpc3QucmVtb3ZlKFxuICAgICdoYXMtYmFja2dyb3VuZC1kYW5nZXInLFxuICAgICdoYXMtYmFja2dyb3VuZC13YXJuaW5nJyxcbiAgICAnaGFzLWJhY2tncm91bmQtaW5mbycsXG4gICAgJ2hhcy1iYWNrZ3JvdW5kLXN1Y2Nlc3MnLFxuICAgICdoYXMtdGV4dC1kYW5nZXItbGlnaHQnLFxuICAgICdoYXMtdGV4dC13YXJuaW5nLWRhcmsnLFxuICAgICdoYXMtdGV4dC1pbmZvLWxpZ2h0JyxcbiAgICAnaGFzLXRleHQtc3VjY2Vzcy1saWdodCdcbiAgKTtcblxuICBpZiAoc3RyZW5ndGggPCAyOCkge1xuICAgIC8vIE1vbHRvIGRlYm9sZVxuICAgIGJvZHlkRWwuY2xhc3NMaXN0LmFkZCgnaXMtZGFuZ2VyJyk7XG4gICAgcHdkQ29udGFpbmVyRWwuY2xhc3NMaXN0LmFkZCgnaXMtZGFuZ2VyJyk7XG4gICAgcHdkR2VuZXJhdGVkU3RyZW5ndGhFbC5jbGFzc0xpc3QuYWRkKCdpcy1kYW5nZXInKTtcbiAgICBzZXR0aW5nc1Bhc3N3b3JkTGVuZ3RoUmFuZ2VFbC5jbGFzc0xpc3QuYWRkKCdpcy1kYW5nZXInKTtcbiAgICBwd2RHZW5lcmF0ZWRTdHJlbmd0aFRhZ0JveEVsLmNsYXNzTGlzdC5hZGQoJ2hhcy1iYWNrZ3JvdW5kLWRhbmdlcicsICdoYXMtdGV4dC1kYW5nZXItbGlnaHQnKTtcbiAgICBwd2RHZW5lcmF0ZWRTdHJlbmd0aFRhZ0VsLmlubmVyVGV4dCA9ICdUb28gZWFzeSB0byBndWVzcyc7XG4gIH0gZWxzZSBpZiAoc3RyZW5ndGggPCAzNikge1xuICAgIC8vIERlYm9sZVxuICAgIGJvZHlkRWwuY2xhc3NMaXN0LmFkZCgnaXMtd2FybmluZycpO1xuICAgIHB3ZENvbnRhaW5lckVsLmNsYXNzTGlzdC5hZGQoJ2lzLXdhcm5pbmcnKTtcbiAgICBwd2RHZW5lcmF0ZWRTdHJlbmd0aEVsLmNsYXNzTGlzdC5hZGQoJ2lzLXdhcm5pbmcnKTtcbiAgICBzZXR0aW5nc1Bhc3N3b3JkTGVuZ3RoUmFuZ2VFbC5jbGFzc0xpc3QuYWRkKCdpcy13YXJuaW5nJyk7XG4gICAgcHdkR2VuZXJhdGVkU3RyZW5ndGhUYWdCb3hFbC5jbGFzc0xpc3QuYWRkKCdoYXMtYmFja2dyb3VuZC13YXJuaW5nJywgJ2hhcy10ZXh0LXdhcm5pbmctZGFyaycpO1xuICAgIHB3ZEdlbmVyYXRlZFN0cmVuZ3RoVGFnRWwuaW5uZXJUZXh0ID0gJ0F0IHJpc2sgb2YgYmVpbmcgY29tcHJvbWlzZWQnO1xuXG4gIH0gZWxzZSBpZiAoc3RyZW5ndGggPCA2MCkge1xuICAgIC8vIEJ1b25hXG4gICAgYm9keWRFbC5jbGFzc0xpc3QuYWRkKCdpcy1pbmZvJyk7XG4gICAgcHdkQ29udGFpbmVyRWwuY2xhc3NMaXN0LmFkZCgnaXMtaW5mbycpO1xuICAgIHB3ZEdlbmVyYXRlZFN0cmVuZ3RoRWwuY2xhc3NMaXN0LmFkZCgnaXMtaW5mbycpO1xuICAgIHNldHRpbmdzUGFzc3dvcmRMZW5ndGhSYW5nZUVsLmNsYXNzTGlzdC5hZGQoJ2lzLWluZm8nKTtcbiAgICBwd2RHZW5lcmF0ZWRTdHJlbmd0aFRhZ0JveEVsLmNsYXNzTGlzdC5hZGQoJ2hhcy1iYWNrZ3JvdW5kLWluZm8nLCAnaGFzLXRleHQtaW5mby1saWdodCcpO1xuICAgIHB3ZEdlbmVyYXRlZFN0cmVuZ3RoVGFnRWwuaW5uZXJUZXh0ID0gJ1NlY3VyZSBmb3Igbm9ybWFsIHVzZSc7XG5cbiAgfSBlbHNlIHtcbiAgICAvLyBNb2x0byBzaWN1cmFcbiAgICBib2R5ZEVsLmNsYXNzTGlzdC5hZGQoJ2lzLXN1Y2Nlc3MnKTtcbiAgICBwd2RDb250YWluZXJFbC5jbGFzc0xpc3QuYWRkKCdpcy1zdWNjZXNzJyk7XG4gICAgcHdkR2VuZXJhdGVkU3RyZW5ndGhFbC5jbGFzc0xpc3QuYWRkKCdpcy1zdWNjZXNzJyk7XG4gICAgc2V0dGluZ3NQYXNzd29yZExlbmd0aFJhbmdlRWwuY2xhc3NMaXN0LmFkZCgnaXMtc3VjY2VzcycpO1xuICAgIHB3ZEdlbmVyYXRlZFN0cmVuZ3RoVGFnQm94RWwuY2xhc3NMaXN0LmFkZCgnaGFzLWJhY2tncm91bmQtc3VjY2VzcycsICdoYXMtdGV4dC1zdWNjZXNzLWxpZ2h0Jyk7XG4gICAgcHdkR2VuZXJhdGVkU3RyZW5ndGhUYWdFbC5pbm5lclRleHQgPSAnUHJvdGVjdHMgYWdhaW5zdCBoYWNraW5nIGF0dGVtcHRzJztcblxuICB9XG59XG5cbmZ1bmN0aW9uIHRvZ2dsZVB3ZFR5cGUoZXZlbnQpIHtcbiAgaWYgKGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnaXMtYWN0aXZlJykpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjcHdkLXR5cGUtc2VsZWN0b3ItdGFiIGxpIGEnKS5mb3JFYWNoKGVsID0+IGVsLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnaXMtYWN0aXZlJykpO1xuICBjb25zdCB0eXBlID0gZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS10eXBlJyk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zZXR0aW5ncycpLmZvckVhY2goZWwgPT4ge1xuICAgIGlmICghZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdpcy1oaWRkZW4nKSkge1xuICAgICAgZWwuY2xhc3NMaXN0LmFkZCgnaXMtaGlkZGVuJylcbiAgICB9XG4gIH0pO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHt0eXBlfS1zZXR0aW5nc2ApLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWhpZGRlbicpO1xuICBldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdpcy1hY3RpdmUnKTtcblxuICBoYW5kbGVQYXNzd29yZENyZWF0aW9uKCk7XG59XG5cbmZ1bmN0aW9uIGJpbmRFdmVudHMoKSB7XG4gIHNldHRpbmdzUGFzc3dvcmRMZW5ndGhSYW5nZUVsLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xuICAgIHNldHRpbmdzUGFzc3dvcmRMZW5ndGhFbC52YWx1ZSA9IHNldHRpbmdzUGFzc3dvcmRMZW5ndGhSYW5nZUVsLnZhbHVlO1xuICAgIGhhbmRsZVBhc3N3b3JkQ3JlYXRpb24oKVxuICB9KTtcbiAgc2V0dGluZ3NQYXNzcGhyYXNlTGVuZ3RoUmFuZ2VFbC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcbiAgICBzZXR0aW5nc1Bhc3NwaHJhc2VMZW5ndGhFbC52YWx1ZSA9IHNldHRpbmdzUGFzc3BocmFzZUxlbmd0aFJhbmdlRWwudmFsdWU7XG4gICAgaGFuZGxlUGFzc3dvcmRDcmVhdGlvbigpXG4gIH0pO1xuICBzZXR0aW5nc1Bhc3NwaHJhc2VTZXBhcmF0b3JFbC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsICgpID0+IHtcbiAgICBoYW5kbGVQYXNzd29yZENyZWF0aW9uKCk7XG4gIH0pO1xuXG4gIHNldHRpbmdzUGFzc3dvcmRMZW5ndGhFbC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgaWYgKHNldHRpbmdzUGFzc3dvcmRMZW5ndGhFbC52YWx1ZSA8IDEpIHtcbiAgICAgIHNldHRpbmdzUGFzc3dvcmRMZW5ndGhFbC52YWx1ZSA9IDE7XG4gICAgfVxuICAgIGlmIChzZXR0aW5nc1Bhc3N3b3JkTGVuZ3RoRWwudmFsdWUgPiAyNTYpIHtcbiAgICAgIHNldHRpbmdzUGFzc3dvcmRMZW5ndGhFbC52YWx1ZSA9IDI1NjtcbiAgICB9XG4gICAgc2V0dGluZ3NQYXNzd29yZExlbmd0aFJhbmdlRWwudmFsdWUgPSBzZXR0aW5nc1Bhc3N3b3JkTGVuZ3RoRWwudmFsdWU7XG4gICAgaGFuZGxlUGFzc3dvcmRDcmVhdGlvbigpO1xuICB9KTtcblxuICBub3RpZmljYXRpb25EZWxldGVCdG5FbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBub3RpZmljYXRpb25FbC5jbGFzc0xpc3QuYWRkKCdpcy1pbnZpc2libGUnKTtcbiAgfSk7XG5cbiAgYWN0aW9uUmVkb0VsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlUGFzc3dvcmRDcmVhdGlvbik7XG5cbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FjdGlvbi1jb3B5LXRvLWNsaXBib2FyZCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY29weVRvQ2xpcGJvYXJkKTtcblxuICBmb3IgKGxldCBlbCBvZiBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzZXR0aW5nLWVsZW1lbnQnKSkge1xuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIHVwZGF0ZUF2YWlsYWJsZUNoYXJzKCk7XG4gICAgICBoYW5kbGVQYXNzd29yZENyZWF0aW9uKCk7XG4gICAgfSk7XG4gIH1cblxuICBmb3IgKGxldCBlbCBvZiBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzZXR0aW5nLXB3ZC1tb2RlJykpIHtcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICB1cGRhdGVQYXNzd29yZFNldHRpbmdzKClcbiAgICAgIGhhbmRsZVBhc3N3b3JkQ3JlYXRpb24oKVxuICAgIH0pO1xuICB9XG5cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI3B3ZC10eXBlLXNlbGVjdG9yLXRhYiBsaSBhJykuZm9yRWFjaCgoZWwpID0+IHtcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZ2dsZVB3ZFR5cGUpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gd3JpdGVXZWxsY29tZU1lc3NhZ2UoKSB7XG4gIGNvbnN0IHdlbGxjb21lTWVzc2FnZVNldHRpbmdzID0gJ2NvbG9yOiMzZThlZDA7IGZvbnQtc2l6ZTogMTZweDsgZm9udC13ZWlnaHQ6IDcwMDsgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSc7XG4gIGNvbnNvbGUuaW5mbygnJWPioIDioIDioIAg4qCA4qCA4qCAIOKggOKggOKggCDioIDioIDioIAg4qCA4qCA4qCAIOKggOKggOKggCDioIDioIDioIAg4qCA4qCA4qCAIOKggOKggOKggCDioIDioIDioIAg4qCA4qCA4qCAIOKggOKggOKggCDioIDioIDioIAg4qCA4qCA4qCAJywgd2VsbGNvbWVNZXNzYWdlU2V0dGluZ3MpO1xuICBjb25zb2xlLmluZm8oJyVj4qCA4qCA4qCAIFdlbGNvbWUgdG8gdGhlIGRldmVsb3BlciB2YXVsdCEuICAgICAgICAgICAgICAgICAgICAg4qCA4qCA4qCAJywgd2VsbGNvbWVNZXNzYWdlU2V0dGluZ3MpO1xuICBjb25zb2xlLmluZm8oJyVj4qCA4qCA4qCAIFRvcCBzZWNyZXQgcGFzc3dvcmQgZ2VuZXJhdGlvbiBoYXBwZW5zIGhlcmUuLi4gICAgICAg4qCA4qCA4qCAJywgd2VsbGNvbWVNZXNzYWdlU2V0dGluZ3MpO1xuICBjb25zb2xlLmluZm8oJyVj4qCA4qCA4qCAIE1vc3RseS4gXl9eICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4qCA4qCA4qCAJywgd2VsbGNvbWVNZXNzYWdlU2V0dGluZ3MpO1xuICBjb25zb2xlLmluZm8oJyVj4qCA4qCA4qCAIOKggOKggOKggCDioIDioIDioIAg4qCA4qCA4qCAIOKggOKggOKggCDioIDioIDioIAg4qCA4qCA4qCAIOKggOKggOKggCDioIDioIDioIAg4qCA4qCA4qCAIOKggOKggOKggCDioIDioIDioIAg4qCA4qCA4qCAIOKggOKggOKggCcsIHdlbGxjb21lTWVzc2FnZVNldHRpbmdzKTtcbn1cblxuZnVuY3Rpb24gZGlzcGxheVBhZ2UoKSB7XG4gIGRvY3VtZW50LmJvZHkuc3R5bGUgPSAnZGlzcGxheTogYXV0byc7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZVBhc3N3b3JkQ3JlYXRpb24oKSB7XG4gIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHdkLXR5cGUtc2VsZWN0b3ItdGFiIGxpLmlzLWFjdGl2ZSBhJykuZ2V0QXR0cmlidXRlKCdkYXRhLXR5cGUnKSA9PT0gJ3Bhc3NwaHJhc2UnKSB7XG4gICAgY29uc3QgeyBwYXNzcGhyYXNlLCBzdHJlbmd0aCB9ID0gY3JlYXRlUGFzc3BocmFzZSgpO1xuICAgIHB3ZEdlbmVyYXRlZEVsLmlubmVySFRNTCA9IHBhc3NwaHJhc2U7XG4gICAgc2V0U3RyZW5ndGgoc3RyZW5ndGgpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IHsgcGFzc3dvcmQsIHN0cmVuZ3RoIH0gPSBjcmVhdGVQYXNzd29yZCgpO1xuICBwd2RHZW5lcmF0ZWRFbC5pbm5lckhUTUwgPSBwYXNzd29yZDtcbiAgc2V0U3RyZW5ndGgoc3RyZW5ndGgpO1xufVxuXG5mdW5jdGlvbiBpbml0YWxpemVQYWdlRWxlbWVudHMoKSB7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZXR0aW5ncy1hbGxvdy1zeW1ib2xzLWxpc3QnKS5pbm5lckhUTUwgPSBBcnJheS5mcm9tKFNQRUNJQUxfQ0hBUkFDVEVSUykubWFwKChlbCkgPT5cbiAgICBTdHJpbmcuZnJvbUNoYXJDb2RlKGVsKVxuICApO1xufVxuXG4vLyBJbml0XG5mdW5jdGlvbiBpbml0KCkge1xuICB3cml0ZVdlbGxjb21lTWVzc2FnZSgpO1xuXG4gIGJpbmRFdmVudHMoKTtcbiAgaW5pdGFsaXplUGFnZUVsZW1lbnRzKCk7XG5cbiAgLy8gVXBkYXRlIHRoZSBBdmFpbGFibGVDaGFycyBhcnJheSBiYXNlZCBvbiB0aGUgaHRtbCBkZWZhdWx0XG4gIC8vIGFuZCBjcmVhdGUgdGhlIGZpcnN0IHBhc3N3b3JkXG4gIHVwZGF0ZUF2YWlsYWJsZUNoYXJzKCk7XG4gIGhhbmRsZVBhc3N3b3JkQ3JlYXRpb24oKTtcblxuICAvLyBTaG93IGNvbnRlbnQgb25seSB3aGVuIHBhZ2UgaXMgbG9hZGVkXG4gIGRpc3BsYXlQYWdlKCk7XG59XG5cbndpbmRvdy5vbmxvYWQgPSBpbml0O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9