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

#settings-passphrase-length-range {
  width: 100%;
  /* Rimuove lo stile di default su WebKit */
  -webkit-appearance: none;
  appearance: none;
  /* Stile del cursore per Chrome, Safari, Edge */
  /* Stile della barra per Chrome, Safari, Edge */
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
}`, "",{"version":3,"sources":["webpack://./src/styles/style.scss"],"names":[],"mappings":"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","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap\");\n\n$secondaryColor: #a89d91;\n$primaryColor: #485fc7;\n$backgroundColor: #ffffff;\n$backgroundColorLight: #f5f5f5;\n\n\n$textColor: #444;\n\n$colorDanger: #f14668;\n$colorWarning: #ffe08a;\n$colorInfo: #3e8ed0;\n$colorSuccess: #48c78e;\n\n\n:root {\n    // --bulma-primary-h: 172deg;\n    // --bulma-link-h: 229deg;\n    // --bulma-link-s: 53%;\n    // --bulma-link-l: 53%;\n    // --bulma-info-h: 199deg;\n    // --bulma-success-h: 154deg;\n    // --bulma-warning-h: 43deg;\n    // --bulma-danger-h: 349deg;\n    --selection-color-danger: #f14668;\n    --selection-color-warning: #ffe08a;\n    --selection-color-info: #3e8ed0;\n    --selection-color-success: #48c78e;\n\n    --active-color: var(--selection-color-success)\n}\n\n::selection {\n    color: $backgroundColor;\n    background-color: var(--active-color);\n    border-radius: 4px;\n}\n\nhtml,\nbody {\n    color: $textColor;\n    margin: 0;\n    padding: 0;\n    width: 100%;\n    height: 100%;\n    font-family: \"Open Sans\", sans-serif;\n    font-optical-sizing: auto;\n    font-weight: 400;\n    font-style: normal;\n    font-size: 16px;\n    background-color: $backgroundColor;\n    scroll-behavior: smooth;\n    scroll-snap-type: y mandatory;\n\n    &.is-danger {\n        --active-color: var(--selection-color-danger);\n    }\n\n    &.is-warning {\n        --active-color: var(--selection-color-warning);\n    }\n\n    &.is-info {\n        --active-color: var(--selection-color-info);\n    }\n\n    &.is-success {\n        --active-color: var(--selection-color-success);\n    }\n}\n\n.title,\n.subtitle {\n    font-family: \"Kode Mono\", monospace;\n    color: inherit;\n}\n\n.section {\n    padding: 2rem 2rem;\n}\n\n.is-fullheight {\n    min-height: 100vh;\n}\n\n.is-fullwidth {\n    min-width: 100%;\n}\n\n.notification {\n    position: fixed;\n    top: 0;\n    width: 100%;\n    background-color: #ffe645;\n    opacity: 1;\n    z-index: 100;\n    box-shadow: 0 0 10px $textColor;\n\n    transition:\n        visibility 0s,\n        opacity 0.3s linear;\n\n    &.is-invisible {\n        opacity: 0;\n    }\n}\n\n#pwd-type-selector-tab {\n    margin-bottom: 0;\n\n    ul {\n        border-bottom-width: 0;\n    }\n}\n\n#pwd-settings-box {\n    min-height: 362px;\n}\n\n.tabs li {\n\n    &.is-active {\n        a {\n            font-weight: bold;\n            color: var(--active-color);\n            border-bottom-color: var(--active-color);\n\n            &:hover {\n                text-shadow: none;\n                border-bottom-width: 2px;\n                border-bottom-color: var(--active-color);\n            }\n        }\n    }\n\n    a {\n        margin-bottom: 0px;\n        border-bottom-width: 2px;\n        border-bottom-color: transparent;\n        color: $secondaryColor;\n\n        &:hover {\n            text-shadow: var(--active-color) 1px 0 10px;\n            border-bottom-width: 2px;\n            border-bottom-color: transparent;\n        }\n    }\n}\n\n\n#pwd-strength-tagbox {\n    position: absolute;\n    bottom: 2px;\n    left: 0px;\n    border-top-right-radius: 6px;\n}\n\n#pwd-actions-box {\n    display: flex;\n    position: absolute;\n    bottom: 3px;\n    right: 0px;\n\n    .action {\n        padding: 0 .3rem;\n        color: var(--active-color);\n\n        &:hover {\n            color: var(--active-color);\n            text-shadow: 0 0 5px var(--active-color);\n        }\n    }\n}\n\n#pwd-strength {\n    position: absolute;\n    bottom: 0px;\n    left: 0px;\n    border-top-left-radius: 0px;\n    border-top-right-radius: 0px;\n    border-bottom-left-radius: 6px;\n    border-bottom-right-radius: 6px;\n    height: 2px;\n}\n\n.pwd-container {\n    font-size: 2rem;\n    display: flex;\n    flex-direction: row;\n    align-items: baseline;\n    justify-content: space-between;\n\n\n    &.is-danger {\n        ::selection {\n            background-color: var(--active-color);\n        }\n    }\n\n    &.is-warning {\n        ::selection {\n            background-color: var(--active-color);\n        }\n    }\n\n    &.is-info {\n        ::selection {\n            background-color: var(--active-color);\n        }\n    }\n\n    &.is-success {\n        ::selection {\n            background-color: var(--active-color);\n        }\n    }\n\n    ::selection {\n        color: $backgroundColor;\n        background-color: var(--active-color);\n        border-radius: 4px;\n    }\n}\n\n\n#settings-password-length {\n    width: 64px;\n}\n\n#settings-password-length-range {\n    width: 100%;\n    /* Rimuove lo stile di default su WebKit */\n    -webkit-appearance: none;\n    appearance: none;\n\n    &:hover {\n        opacity: 1;\n    }\n\n    /* Stile del cursore per Chrome, Safari, Edge */\n    &::-webkit-slider-thumb {\n        -webkit-appearance: none;\n        appearance: none;\n        margin-top: -5px;\n        width: 10px;\n        height: 20px;\n        background: $textColor;\n        /* Colore del cursore */\n        border-radius: 50%;\n        cursor: pointer;\n    }\n\n    /* Stile della barra per Chrome, Safari, Edge */\n    &::-webkit-slider-runnable-track {\n        background: var(--active-color);\n        height: 8px;\n        border-radius: 10px;\n    }\n\n    //   /* Stile per Firefox */\n    &::-moz-range-thumb {\n        width: 20px;\n        height: 20px;\n        background: var(--active-color);\n        border-radius: 50%;\n        cursor: pointer;\n    }\n\n    &::-moz-range-track {\n        background: var(--active-color);\n        height: 8px;\n        border-radius: 10px;\n    }\n}\n\n#settings-passphrase-length-range {\n    width: 100%;\n    /* Rimuove lo stile di default su WebKit */\n    -webkit-appearance: none;\n    appearance: none;\n\n    &:hover {\n        opacity: 1;\n    }\n\n    /* Stile del cursore per Chrome, Safari, Edge */\n    &::-webkit-slider-thumb {\n        -webkit-appearance: none;\n        appearance: none;\n        margin-top: -5px;\n        width: 10px;\n        height: 20px;\n        background: $textColor;\n        /* Colore del cursore */\n        border-radius: 50%;\n        cursor: pointer;\n    }\n\n    /* Stile della barra per Chrome, Safari, Edge */\n    &::-webkit-slider-runnable-track {\n        background: var(--active-color);\n        height: 8px;\n        border-radius: 10px;\n    }\n\n    //   /* Stile per Firefox */\n    &::-moz-range-thumb {\n        width: 20px;\n        height: 20px;\n        background: var(--active-color);\n        border-radius: 50%;\n        cursor: pointer;\n    }\n\n    &::-moz-range-track {\n        background: var(--active-color);\n        height: 8px;\n        border-radius: 10px;\n    }\n}\n\n.settings-container {\n    background-color: var(--active-color);\n    color: $backgroundColor;\n    border-radius: 10px;\n    border: 2px solid var(--active-color);\n    padding: 1rem;\n    // box-shadow: 0 2px 10px var(--active-color);\n\n    ::selection {\n        color: $backgroundColor;\n        background: var(--active-color);\n        border-radius: 4px;\n    }\n\n    .checkbox:hover,\n    .radio:hover {\n        color: $textColor;\n        // text-shadow: 0 0 5px $backgroundColor;\n    }\n}\n\n.footer {\n    border-top: 2px solid #245494;\n    background-color: #7ca7df;\n}\n\n.is-owerflow-auto {\n    overflow: auto;\n}\n\n.is-word-break-all {\n    word-break: break-all;\n}\n\n#password-settings-shortcut {\n    border-radius: 6px;\n}\n\ninput {\n    +span.toggle {\n        position: relative;\n        display: inline-block;\n        height: 24px;\n        width: 40px;\n        margin-bottom: -6px;\n        margin-left: -24px;\n        background: $backgroundColorLight;\n        border-radius: 100vh;\n        color: var(--active-color);\n\n        &:before {\n            content: \" \";\n            position: absolute;\n            top: 4px;\n            left: 4px;\n            right: auto;\n            height: 16px;\n            width: 16px;\n            background: #bbb;\n            border-radius: 100vh;\n            transition: all 0.4s ease-in-out;\n        }\n    }\n\n    &[type=radio] {\n        &:checked {\n            // accent-color: var(--active-color);\n            // border: none;\n            border-color: var(--active-color);\n        }\n\n        appearance: none;\n        /* Rimuove lo stile predefinito */\n        width: 14px;\n        height: 14px;\n        border: 1px solid #bbb;\n        border-radius: 50%;\n        display: inline-block;\n        position: relative;\n        cursor: pointer;\n\n        &:checked::before {\n            content: \"\";\n            width: 10px;\n            height: 10px;\n            background-color: var(--active-color);\n            border-color: var(--active-color);\n            border-radius: 50%;\n            position: absolute;\n            top: 50%;\n            left: 50%;\n            transform: translate(-50%, -50%);\n        }\n    }\n\n    &:checked+span.toggle:before {\n        left: 20px;\n        background: var(--active-color);\n        transition: all 0.4s ease-in-out;\n    }\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDNkc7QUFDakI7QUFDNUYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRiw4SEFBOEgseUJBQXlCO0FBQ3ZKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8seUZBQXlGLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxZQUFZLFdBQVcsT0FBTyxPQUFPLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsWUFBWSxZQUFZLFdBQVcsTUFBTSxPQUFPLFdBQVcsTUFBTSxPQUFPLFdBQVcsTUFBTSxPQUFPLFdBQVcsTUFBTSxPQUFPLFdBQVcsT0FBTyxPQUFPLFdBQVcsVUFBVSxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLE9BQU8sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFVBQVUsVUFBVSxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsVUFBVSxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLE9BQU8sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsWUFBWSxXQUFXLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFlBQVksWUFBWSxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsVUFBVSxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFlBQVksWUFBWSxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsVUFBVSxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsWUFBWSxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsWUFBWSxXQUFXLE1BQU0sT0FBTyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFlBQVksWUFBWSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsZ0hBQWdILDJCQUEyQiw2QkFBNkIseUJBQXlCLDRCQUE0QixpQ0FBaUMsdUJBQXVCLDBCQUEwQix5QkFBeUIsc0JBQXNCLHlCQUF5QixhQUFhLG1DQUFtQyxnQ0FBZ0MsNkJBQTZCLDZCQUE2QixnQ0FBZ0MsbUNBQW1DLGtDQUFrQyxrQ0FBa0Msd0NBQXdDLHlDQUF5QyxzQ0FBc0MseUNBQXlDLHlEQUF5RCxpQkFBaUIsOEJBQThCLDRDQUE0Qyx5QkFBeUIsR0FBRyxpQkFBaUIsd0JBQXdCLGdCQUFnQixpQkFBaUIsa0JBQWtCLG1CQUFtQiw2Q0FBNkMsZ0NBQWdDLHVCQUF1Qix5QkFBeUIsc0JBQXNCLHlDQUF5Qyw4QkFBOEIsb0NBQW9DLHFCQUFxQix3REFBd0QsT0FBTyxzQkFBc0IseURBQXlELE9BQU8sbUJBQW1CLHNEQUFzRCxPQUFPLHNCQUFzQix5REFBeUQsT0FBTyxHQUFHLHdCQUF3Qiw0Q0FBNEMscUJBQXFCLEdBQUcsY0FBYyx5QkFBeUIsR0FBRyxvQkFBb0Isd0JBQXdCLEdBQUcsbUJBQW1CLHNCQUFzQixHQUFHLG1CQUFtQixzQkFBc0IsYUFBYSxrQkFBa0IsZ0NBQWdDLGlCQUFpQixtQkFBbUIsc0NBQXNDLHlFQUF5RSx3QkFBd0IscUJBQXFCLE9BQU8sR0FBRyw0QkFBNEIsdUJBQXVCLFlBQVksaUNBQWlDLE9BQU8sR0FBRyx1QkFBdUIsd0JBQXdCLEdBQUcsY0FBYyxxQkFBcUIsYUFBYSxnQ0FBZ0MseUNBQXlDLHVEQUF1RCx5QkFBeUIsb0NBQW9DLDJDQUEyQywyREFBMkQsZUFBZSxXQUFXLE9BQU8sV0FBVyw2QkFBNkIsbUNBQW1DLDJDQUEyQyxpQ0FBaUMscUJBQXFCLDBEQUEwRCx1Q0FBdUMsK0NBQStDLFdBQVcsT0FBTyxHQUFHLDRCQUE0Qix5QkFBeUIsa0JBQWtCLGdCQUFnQixtQ0FBbUMsR0FBRyxzQkFBc0Isb0JBQW9CLHlCQUF5QixrQkFBa0IsaUJBQWlCLGlCQUFpQiwyQkFBMkIscUNBQXFDLHFCQUFxQix5Q0FBeUMsdURBQXVELFdBQVcsT0FBTyxHQUFHLG1CQUFtQix5QkFBeUIsa0JBQWtCLGdCQUFnQixrQ0FBa0MsbUNBQW1DLHFDQUFxQyxzQ0FBc0Msa0JBQWtCLEdBQUcsb0JBQW9CLHNCQUFzQixvQkFBb0IsMEJBQTBCLDRCQUE0QixxQ0FBcUMsdUJBQXVCLHVCQUF1QixvREFBb0QsV0FBVyxPQUFPLHNCQUFzQix1QkFBdUIsb0RBQW9ELFdBQVcsT0FBTyxtQkFBbUIsdUJBQXVCLG9EQUFvRCxXQUFXLE9BQU8sc0JBQXNCLHVCQUF1QixvREFBb0QsV0FBVyxPQUFPLHFCQUFxQixrQ0FBa0MsZ0RBQWdELDZCQUE2QixPQUFPLEdBQUcsaUNBQWlDLGtCQUFrQixHQUFHLHFDQUFxQyxrQkFBa0IsZ0ZBQWdGLHVCQUF1QixpQkFBaUIscUJBQXFCLE9BQU8sdUZBQXVGLG1DQUFtQywyQkFBMkIsMkJBQTJCLHNCQUFzQix1QkFBdUIsaUNBQWlDLCtEQUErRCwwQkFBMEIsT0FBTyxnR0FBZ0csMENBQTBDLHNCQUFzQiw4QkFBOEIsT0FBTywrREFBK0Qsc0JBQXNCLHVCQUF1QiwwQ0FBMEMsNkJBQTZCLDBCQUEwQixPQUFPLDZCQUE2QiwwQ0FBMEMsc0JBQXNCLDhCQUE4QixPQUFPLEdBQUcsdUNBQXVDLGtCQUFrQixnRkFBZ0YsdUJBQXVCLGlCQUFpQixxQkFBcUIsT0FBTyx1RkFBdUYsbUNBQW1DLDJCQUEyQiwyQkFBMkIsc0JBQXNCLHVCQUF1QixpQ0FBaUMsK0RBQStELDBCQUEwQixPQUFPLGdHQUFnRywwQ0FBMEMsc0JBQXNCLDhCQUE4QixPQUFPLCtEQUErRCxzQkFBc0IsdUJBQXVCLDBDQUEwQyw2QkFBNkIsMEJBQTBCLE9BQU8sNkJBQTZCLDBDQUEwQyxzQkFBc0IsOEJBQThCLE9BQU8sR0FBRyx5QkFBeUIsNENBQTRDLDhCQUE4QiwwQkFBMEIsNENBQTRDLG9CQUFvQixvREFBb0QscUJBQXFCLGtDQUFrQywwQ0FBMEMsNkJBQTZCLE9BQU8sNENBQTRDLDRCQUE0QixtREFBbUQsT0FBTyxHQUFHLGFBQWEsb0NBQW9DLGdDQUFnQyxHQUFHLHVCQUF1QixxQkFBcUIsR0FBRyx3QkFBd0IsNEJBQTRCLEdBQUcsaUNBQWlDLHlCQUF5QixHQUFHLFdBQVcsb0JBQW9CLDZCQUE2QixnQ0FBZ0MsdUJBQXVCLHNCQUFzQiw4QkFBOEIsNkJBQTZCLDRDQUE0QywrQkFBK0IscUNBQXFDLHNCQUFzQiw2QkFBNkIsaUNBQWlDLHVCQUF1Qix3QkFBd0IsMEJBQTBCLDJCQUEyQiwwQkFBMEIsK0JBQStCLG1DQUFtQywrQ0FBK0MsV0FBVyxPQUFPLHVCQUF1QixxQkFBcUIsbURBQW1ELDhCQUE4QixnREFBZ0QsV0FBVyw2QkFBNkIsa0VBQWtFLHVCQUF1QixpQ0FBaUMsNkJBQTZCLGdDQUFnQyw2QkFBNkIsMEJBQTBCLCtCQUErQiw0QkFBNEIsMEJBQTBCLDJCQUEyQixvREFBb0QsZ0RBQWdELGlDQUFpQyxpQ0FBaUMsdUJBQXVCLHdCQUF3QiwrQ0FBK0MsV0FBVyxPQUFPLHNDQUFzQyxxQkFBcUIsMENBQTBDLDJDQUEyQyxPQUFPLEdBQUcsbUJBQW1CO0FBQ3QxWDtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQzdWMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQSxxRkFBcUY7QUFDckY7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIscUJBQXFCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3BGYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBLE1BQWtHO0FBQ2xHLE1BQXdGO0FBQ3hGLE1BQStGO0FBQy9GLE1BQWtIO0FBQ2xILE1BQTJHO0FBQzNHLE1BQTJHO0FBQzNHLE1BQWtKO0FBQ2xKO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsNEhBQU87Ozs7QUFJNEY7QUFDcEgsT0FBTyxpRUFBZSw0SEFBTyxJQUFJLDRIQUFPLFVBQVUsNEhBQU8sbUJBQW1CLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDZCQUE2QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ25GYTs7QUFFYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNqQ2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTtBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQSxpRkFBaUY7QUFDakY7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUM1RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDYmU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esd0JBQXdCLG9CQUFvQjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDhEQUE4RDtBQUM5RDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFDcUM7QUFDUzs7QUFFOUMsaUVBQWUsa0RBQVUsRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDSG5CO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ1plO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxzQ0FBc0MsNkJBQTZCO0FBQ25FO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvQm1DO0FBT2xCOztBQUVqQixpRUFBZSxrREFBUSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVHhCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEJBO0FBQzhCOztBQUU5QjtBQUNBLGdCQUFnQixtQkFBTyxDQUFDLHdDQUFtQjtBQUMzQyxlQUFlLG1CQUFPLENBQUMsc0NBQWtCOztBQUV6QztBQUMrQztBQUNFO0FBQ0o7O0FBUWQ7QUFDMkM7O0FBRTFFOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsc0ZBQXNGLDBEQUFPO0FBQzdGLHdGQUF3Riw0REFBUztBQUNqRyx3RkFBd0YsNERBQVM7QUFDakcsc0ZBQXNGLHFFQUFrQjs7QUFFeEc7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLDZEQUFRO0FBQ2hDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QiwrREFBVSxDQUFDLHdFQUFtQjtBQUN0RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILDZCQUE2QixLQUFLO0FBQ2xDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7O0FBRUg7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBLGtEQUFrRCxpQkFBaUIsa0JBQWtCO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFlBQVksdUJBQXVCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFVBQVUscUJBQXFCO0FBQy9CO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdGQUFnRixxRUFBa0I7QUFDbEc7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Fub3RoZXItcGFzc3dvcmQtZ2VuZXJhdG9yLy4vc3JjL3N0eWxlcy9zdHlsZS5zY3NzIiwid2VicGFjazovL2Fub3RoZXItcGFzc3dvcmQtZ2VuZXJhdG9yLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9hbm90aGVyLXBhc3N3b3JkLWdlbmVyYXRvci8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2Fub3RoZXItcGFzc3dvcmQtZ2VuZXJhdG9yLy4vc3JjL3N0eWxlcy9zdHlsZS5zY3NzP2U1ZDgiLCJ3ZWJwYWNrOi8vYW5vdGhlci1wYXNzd29yZC1nZW5lcmF0b3IvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYW5vdGhlci1wYXNzd29yZC1nZW5lcmF0b3IvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2Fub3RoZXItcGFzc3dvcmQtZ2VuZXJhdG9yLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2Fub3RoZXItcGFzc3dvcmQtZ2VuZXJhdG9yLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2Fub3RoZXItcGFzc3dvcmQtZ2VuZXJhdG9yLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYW5vdGhlci1wYXNzd29yZC1nZW5lcmF0b3IvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9hbm90aGVyLXBhc3N3b3JkLWdlbmVyYXRvci8uL3NyYy9zY3JpcHRzL2dlbmVhcmF0b3JzL3Bhc3NwaHJhc2UvZ2VuZXJhdG9yLmpzIiwid2VicGFjazovL2Fub3RoZXItcGFzc3dvcmQtZ2VuZXJhdG9yLy4vc3JjL3NjcmlwdHMvZ2VuZWFyYXRvcnMvcGFzc3BocmFzZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9hbm90aGVyLXBhc3N3b3JkLWdlbmVyYXRvci8uL3NyYy9zY3JpcHRzL2dlbmVhcmF0b3JzL3Bhc3NwaHJhc2UvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vYW5vdGhlci1wYXNzd29yZC1nZW5lcmF0b3IvLi9zcmMvc2NyaXB0cy9nZW5lYXJhdG9ycy9wYXNzd29yZC9nZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vYW5vdGhlci1wYXNzd29yZC1nZW5lcmF0b3IvLi9zcmMvc2NyaXB0cy9nZW5lYXJhdG9ycy9wYXNzd29yZC9pbmRleC5qcyIsIndlYnBhY2s6Ly9hbm90aGVyLXBhc3N3b3JkLWdlbmVyYXRvci8uL3NyYy9zY3JpcHRzL2dlbmVhcmF0b3JzL3Bhc3N3b3JkL3V0aWxzLmpzIiwid2VicGFjazovL2Fub3RoZXItcGFzc3dvcmQtZ2VuZXJhdG9yLy4vc3JjL3NjcmlwdHMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1PcGVuK1NhbnM6aXRhbCx3Z2h0QDAsMzAwLi44MDA7MSwzMDAuLjgwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290IHtcbiAgLS1zZWxlY3Rpb24tY29sb3ItZGFuZ2VyOiAjZjE0NjY4O1xuICAtLXNlbGVjdGlvbi1jb2xvci13YXJuaW5nOiAjZmZlMDhhO1xuICAtLXNlbGVjdGlvbi1jb2xvci1pbmZvOiAjM2U4ZWQwO1xuICAtLXNlbGVjdGlvbi1jb2xvci1zdWNjZXNzOiAjNDhjNzhlO1xuICAtLWFjdGl2ZS1jb2xvcjogdmFyKC0tc2VsZWN0aW9uLWNvbG9yLXN1Y2Nlc3MpIDtcbn1cblxuOjpzZWxlY3Rpb24ge1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWN0aXZlLWNvbG9yKTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG5odG1sLFxuYm9keSB7XG4gIGNvbG9yOiAjNDQ0O1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LW9wdGljYWwtc2l6aW5nOiBhdXRvO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XG4gIHNjcm9sbC1zbmFwLXR5cGU6IHkgbWFuZGF0b3J5O1xufVxuaHRtbC5pcy1kYW5nZXIsXG5ib2R5LmlzLWRhbmdlciB7XG4gIC0tYWN0aXZlLWNvbG9yOiB2YXIoLS1zZWxlY3Rpb24tY29sb3ItZGFuZ2VyKTtcbn1cbmh0bWwuaXMtd2FybmluZyxcbmJvZHkuaXMtd2FybmluZyB7XG4gIC0tYWN0aXZlLWNvbG9yOiB2YXIoLS1zZWxlY3Rpb24tY29sb3Itd2FybmluZyk7XG59XG5odG1sLmlzLWluZm8sXG5ib2R5LmlzLWluZm8ge1xuICAtLWFjdGl2ZS1jb2xvcjogdmFyKC0tc2VsZWN0aW9uLWNvbG9yLWluZm8pO1xufVxuaHRtbC5pcy1zdWNjZXNzLFxuYm9keS5pcy1zdWNjZXNzIHtcbiAgLS1hY3RpdmUtY29sb3I6IHZhcigtLXNlbGVjdGlvbi1jb2xvci1zdWNjZXNzKTtcbn1cblxuLnRpdGxlLFxuLnN1YnRpdGxlIHtcbiAgZm9udC1mYW1pbHk6IFwiS29kZSBNb25vXCIsIG1vbm9zcGFjZTtcbiAgY29sb3I6IGluaGVyaXQ7XG59XG5cbi5zZWN0aW9uIHtcbiAgcGFkZGluZzogMnJlbSAycmVtO1xufVxuXG4uaXMtZnVsbGhlaWdodCB7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xufVxuXG4uaXMtZnVsbHdpZHRoIHtcbiAgbWluLXdpZHRoOiAxMDAlO1xufVxuXG4ubm90aWZpY2F0aW9uIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlNjQ1O1xuICBvcGFjaXR5OiAxO1xuICB6LWluZGV4OiAxMDA7XG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4ICM0NDQ7XG4gIHRyYW5zaXRpb246IHZpc2liaWxpdHkgMHMsIG9wYWNpdHkgMC4zcyBsaW5lYXI7XG59XG4ubm90aWZpY2F0aW9uLmlzLWludmlzaWJsZSB7XG4gIG9wYWNpdHk6IDA7XG59XG5cbiNwd2QtdHlwZS1zZWxlY3Rvci10YWIge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuI3B3ZC10eXBlLXNlbGVjdG9yLXRhYiB1bCB7XG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDA7XG59XG5cbiNwd2Qtc2V0dGluZ3MtYm94IHtcbiAgbWluLWhlaWdodDogMzYycHg7XG59XG5cbi50YWJzIGxpLmlzLWFjdGl2ZSBhIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiB2YXIoLS1hY3RpdmUtY29sb3IpO1xuICBib3JkZXItYm90dG9tLWNvbG9yOiB2YXIoLS1hY3RpdmUtY29sb3IpO1xufVxuLnRhYnMgbGkuaXMtYWN0aXZlIGE6aG92ZXIge1xuICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogMnB4O1xuICBib3JkZXItYm90dG9tLWNvbG9yOiB2YXIoLS1hY3RpdmUtY29sb3IpO1xufVxuLnRhYnMgbGkgYSB7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogMnB4O1xuICBib3JkZXItYm90dG9tLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6ICNhODlkOTE7XG59XG4udGFicyBsaSBhOmhvdmVyIHtcbiAgdGV4dC1zaGFkb3c6IHZhcigtLWFjdGl2ZS1jb2xvcikgMXB4IDAgMTBweDtcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogMnB4O1xuICBib3JkZXItYm90dG9tLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuI3B3ZC1zdHJlbmd0aC10YWdib3gge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMnB4O1xuICBsZWZ0OiAwcHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA2cHg7XG59XG5cbiNwd2QtYWN0aW9ucy1ib3gge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogM3B4O1xuICByaWdodDogMHB4O1xufVxuI3B3ZC1hY3Rpb25zLWJveCAuYWN0aW9uIHtcbiAgcGFkZGluZzogMCAwLjNyZW07XG4gIGNvbG9yOiB2YXIoLS1hY3RpdmUtY29sb3IpO1xufVxuI3B3ZC1hY3Rpb25zLWJveCAuYWN0aW9uOmhvdmVyIHtcbiAgY29sb3I6IHZhcigtLWFjdGl2ZS1jb2xvcik7XG4gIHRleHQtc2hhZG93OiAwIDAgNXB4IHZhcigtLWFjdGl2ZS1jb2xvcik7XG59XG5cbiNwd2Qtc3RyZW5ndGgge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMHB4O1xuICBsZWZ0OiAwcHg7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDBweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDBweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNnB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNnB4O1xuICBoZWlnaHQ6IDJweDtcbn1cblxuLnB3ZC1jb250YWluZXIge1xuICBmb250LXNpemU6IDJyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLnB3ZC1jb250YWluZXIuaXMtZGFuZ2VyIDo6c2VsZWN0aW9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWN0aXZlLWNvbG9yKTtcbn1cbi5wd2QtY29udGFpbmVyLmlzLXdhcm5pbmcgOjpzZWxlY3Rpb24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY3RpdmUtY29sb3IpO1xufVxuLnB3ZC1jb250YWluZXIuaXMtaW5mbyA6OnNlbGVjdGlvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjdGl2ZS1jb2xvcik7XG59XG4ucHdkLWNvbnRhaW5lci5pcy1zdWNjZXNzIDo6c2VsZWN0aW9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWN0aXZlLWNvbG9yKTtcbn1cbi5wd2QtY29udGFpbmVyIDo6c2VsZWN0aW9uIHtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjdGl2ZS1jb2xvcik7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuI3NldHRpbmdzLXBhc3N3b3JkLWxlbmd0aCB7XG4gIHdpZHRoOiA2NHB4O1xufVxuXG4jc2V0dGluZ3MtcGFzc3dvcmQtbGVuZ3RoLXJhbmdlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIC8qIFJpbXVvdmUgbG8gc3RpbGUgZGkgZGVmYXVsdCBzdSBXZWJLaXQgKi9cbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICBhcHBlYXJhbmNlOiBub25lO1xuICAvKiBTdGlsZSBkZWwgY3Vyc29yZSBwZXIgQ2hyb21lLCBTYWZhcmksIEVkZ2UgKi9cbiAgLyogU3RpbGUgZGVsbGEgYmFycmEgcGVyIENocm9tZSwgU2FmYXJpLCBFZGdlICovXG59XG4jc2V0dGluZ3MtcGFzc3dvcmQtbGVuZ3RoLXJhbmdlOmhvdmVyIHtcbiAgb3BhY2l0eTogMTtcbn1cbiNzZXR0aW5ncy1wYXNzd29yZC1sZW5ndGgtcmFuZ2U6Oi13ZWJraXQtc2xpZGVyLXRodW1iIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICBhcHBlYXJhbmNlOiBub25lO1xuICBtYXJnaW4tdG9wOiAtNXB4O1xuICB3aWR0aDogMTBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBiYWNrZ3JvdW5kOiAjNDQ0O1xuICAvKiBDb2xvcmUgZGVsIGN1cnNvcmUgKi9cbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4jc2V0dGluZ3MtcGFzc3dvcmQtbGVuZ3RoLXJhbmdlOjotd2Via2l0LXNsaWRlci1ydW5uYWJsZS10cmFjayB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWFjdGl2ZS1jb2xvcik7XG4gIGhlaWdodDogOHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuI3NldHRpbmdzLXBhc3N3b3JkLWxlbmd0aC1yYW5nZTo6LW1vei1yYW5nZS10aHVtYiB7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWFjdGl2ZS1jb2xvcik7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuI3NldHRpbmdzLXBhc3N3b3JkLWxlbmd0aC1yYW5nZTo6LW1vei1yYW5nZS10cmFjayB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWFjdGl2ZS1jb2xvcik7XG4gIGhlaWdodDogOHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4jc2V0dGluZ3MtcGFzc3BocmFzZS1sZW5ndGgtcmFuZ2Uge1xuICB3aWR0aDogMTAwJTtcbiAgLyogUmltdW92ZSBsbyBzdGlsZSBkaSBkZWZhdWx0IHN1IFdlYktpdCAqL1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIGFwcGVhcmFuY2U6IG5vbmU7XG4gIC8qIFN0aWxlIGRlbCBjdXJzb3JlIHBlciBDaHJvbWUsIFNhZmFyaSwgRWRnZSAqL1xuICAvKiBTdGlsZSBkZWxsYSBiYXJyYSBwZXIgQ2hyb21lLCBTYWZhcmksIEVkZ2UgKi9cbn1cbiNzZXR0aW5ncy1wYXNzcGhyYXNlLWxlbmd0aC1yYW5nZTpob3ZlciB7XG4gIG9wYWNpdHk6IDE7XG59XG4jc2V0dGluZ3MtcGFzc3BocmFzZS1sZW5ndGgtcmFuZ2U6Oi13ZWJraXQtc2xpZGVyLXRodW1iIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICBhcHBlYXJhbmNlOiBub25lO1xuICBtYXJnaW4tdG9wOiAtNXB4O1xuICB3aWR0aDogMTBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBiYWNrZ3JvdW5kOiAjNDQ0O1xuICAvKiBDb2xvcmUgZGVsIGN1cnNvcmUgKi9cbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4jc2V0dGluZ3MtcGFzc3BocmFzZS1sZW5ndGgtcmFuZ2U6Oi13ZWJraXQtc2xpZGVyLXJ1bm5hYmxlLXRyYWNrIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tYWN0aXZlLWNvbG9yKTtcbiAgaGVpZ2h0OiA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG4jc2V0dGluZ3MtcGFzc3BocmFzZS1sZW5ndGgtcmFuZ2U6Oi1tb3otcmFuZ2UtdGh1bWIge1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1hY3RpdmUtY29sb3IpO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbiNzZXR0aW5ncy1wYXNzcGhyYXNlLWxlbmd0aC1yYW5nZTo6LW1vei1yYW5nZS10cmFjayB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWFjdGl2ZS1jb2xvcik7XG4gIGhlaWdodDogOHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4uc2V0dGluZ3MtY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWN0aXZlLWNvbG9yKTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWFjdGl2ZS1jb2xvcik7XG4gIHBhZGRpbmc6IDFyZW07XG59XG4uc2V0dGluZ3MtY29udGFpbmVyIDo6c2VsZWN0aW9uIHtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGJhY2tncm91bmQ6IHZhcigtLWFjdGl2ZS1jb2xvcik7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cbi5zZXR0aW5ncy1jb250YWluZXIgLmNoZWNrYm94OmhvdmVyLFxuLnNldHRpbmdzLWNvbnRhaW5lciAucmFkaW86aG92ZXIge1xuICBjb2xvcjogIzQ0NDtcbn1cblxuLmZvb3RlciB7XG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCAjMjQ1NDk0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2NhN2RmO1xufVxuXG4uaXMtb3dlcmZsb3ctYXV0byB7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG4uaXMtd29yZC1icmVhay1hbGwge1xuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG59XG5cbiNwYXNzd29yZC1zZXR0aW5ncy1zaG9ydGN1dCB7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbn1cblxuaW5wdXQgKyBzcGFuLnRvZ2dsZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBoZWlnaHQ6IDI0cHg7XG4gIHdpZHRoOiA0MHB4O1xuICBtYXJnaW4tYm90dG9tOiAtNnB4O1xuICBtYXJnaW4tbGVmdDogLTI0cHg7XG4gIGJhY2tncm91bmQ6ICNmNWY1ZjU7XG4gIGJvcmRlci1yYWRpdXM6IDEwMHZoO1xuICBjb2xvcjogdmFyKC0tYWN0aXZlLWNvbG9yKTtcbn1cbmlucHV0ICsgc3Bhbi50b2dnbGU6YmVmb3JlIHtcbiAgY29udGVudDogXCIgXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA0cHg7XG4gIGxlZnQ6IDRweDtcbiAgcmlnaHQ6IGF1dG87XG4gIGhlaWdodDogMTZweDtcbiAgd2lkdGg6IDE2cHg7XG4gIGJhY2tncm91bmQ6ICNiYmI7XG4gIGJvcmRlci1yYWRpdXM6IDEwMHZoO1xuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcbn1cbmlucHV0W3R5cGU9cmFkaW9dIHtcbiAgYXBwZWFyYW5jZTogbm9uZTtcbiAgLyogUmltdW92ZSBsbyBzdGlsZSBwcmVkZWZpbml0byAqL1xuICB3aWR0aDogMTRweDtcbiAgaGVpZ2h0OiAxNHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjYmJiO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5pbnB1dFt0eXBlPXJhZGlvXTpjaGVja2VkIHtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1hY3RpdmUtY29sb3IpO1xufVxuaW5wdXRbdHlwZT1yYWRpb106Y2hlY2tlZDo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgd2lkdGg6IDEwcHg7XG4gIGhlaWdodDogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWN0aXZlLWNvbG9yKTtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1hY3RpdmUtY29sb3IpO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG5pbnB1dDpjaGVja2VkICsgc3Bhbi50b2dnbGU6YmVmb3JlIHtcbiAgbGVmdDogMjBweDtcbiAgYmFja2dyb3VuZDogdmFyKC0tYWN0aXZlLWNvbG9yKTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3N0eWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBZ0JBO0VBU0ksaUNBQUE7RUFDQSxrQ0FBQTtFQUNBLCtCQUFBO0VBQ0Esa0NBQUE7RUFFQSwrQ0FBQTtBQXZCSjs7QUEwQkE7RUFDSSxjQTlCYztFQStCZCxxQ0FBQTtFQUNBLGtCQUFBO0FBdkJKOztBQTBCQTs7RUFFSSxXQWpDUTtFQWtDUixTQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0NBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EseUJBL0NjO0VBZ0RkLHVCQUFBO0VBQ0EsNkJBQUE7QUF2Qko7QUF5Qkk7O0VBQ0ksNkNBQUE7QUF0QlI7QUF5Qkk7O0VBQ0ksOENBQUE7QUF0QlI7QUF5Qkk7O0VBQ0ksMkNBQUE7QUF0QlI7QUF5Qkk7O0VBQ0ksOENBQUE7QUF0QlI7O0FBMEJBOztFQUVJLG1DQUFBO0VBQ0EsY0FBQTtBQXZCSjs7QUEwQkE7RUFDSSxrQkFBQTtBQXZCSjs7QUEwQkE7RUFDSSxpQkFBQTtBQXZCSjs7QUEwQkE7RUFDSSxlQUFBO0FBdkJKOztBQTBCQTtFQUNJLGVBQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUVBLDhDQUNJO0FBekJSO0FBNEJJO0VBQ0ksVUFBQTtBQTFCUjs7QUE4QkE7RUFDSSxnQkFBQTtBQTNCSjtBQTZCSTtFQUNJLHNCQUFBO0FBM0JSOztBQStCQTtFQUNJLGlCQUFBO0FBNUJKOztBQWtDUTtFQUNJLGlCQUFBO0VBQ0EsMEJBQUE7RUFDQSx3Q0FBQTtBQS9CWjtBQWlDWTtFQUNJLGlCQUFBO0VBQ0Esd0JBQUE7RUFDQSx3Q0FB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QUE7QUF2RVo7QUEyRUk7RUFPSSxnQkFBQTtFQUNBLGlDQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUEvRVI7QUFpRVE7RUFHSSxpQ0FBQTtBQWpFWjtBQThFUTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHFDQUFBO0VBQ0EsaUNBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtBQTVFWjtBQWdGSTtFQUNJLFVBQUE7RUFDQSwrQkFBQTtFQUNBLGdDQUFBO0FBOUVSXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU9wZW4rU2FuczppdGFsLHdnaHRAMCwzMDAuLjgwMDsxLDMwMC4uODAwJmRpc3BsYXk9c3dhcFxcXCIpO1xcblxcbiRzZWNvbmRhcnlDb2xvcjogI2E4OWQ5MTtcXG4kcHJpbWFyeUNvbG9yOiAjNDg1ZmM3O1xcbiRiYWNrZ3JvdW5kQ29sb3I6ICNmZmZmZmY7XFxuJGJhY2tncm91bmRDb2xvckxpZ2h0OiAjZjVmNWY1O1xcblxcblxcbiR0ZXh0Q29sb3I6ICM0NDQ7XFxuXFxuJGNvbG9yRGFuZ2VyOiAjZjE0NjY4O1xcbiRjb2xvcldhcm5pbmc6ICNmZmUwOGE7XFxuJGNvbG9ySW5mbzogIzNlOGVkMDtcXG4kY29sb3JTdWNjZXNzOiAjNDhjNzhlO1xcblxcblxcbjpyb290IHtcXG4gICAgLy8gLS1idWxtYS1wcmltYXJ5LWg6IDE3MmRlZztcXG4gICAgLy8gLS1idWxtYS1saW5rLWg6IDIyOWRlZztcXG4gICAgLy8gLS1idWxtYS1saW5rLXM6IDUzJTtcXG4gICAgLy8gLS1idWxtYS1saW5rLWw6IDUzJTtcXG4gICAgLy8gLS1idWxtYS1pbmZvLWg6IDE5OWRlZztcXG4gICAgLy8gLS1idWxtYS1zdWNjZXNzLWg6IDE1NGRlZztcXG4gICAgLy8gLS1idWxtYS13YXJuaW5nLWg6IDQzZGVnO1xcbiAgICAvLyAtLWJ1bG1hLWRhbmdlci1oOiAzNDlkZWc7XFxuICAgIC0tc2VsZWN0aW9uLWNvbG9yLWRhbmdlcjogI2YxNDY2ODtcXG4gICAgLS1zZWxlY3Rpb24tY29sb3Itd2FybmluZzogI2ZmZTA4YTtcXG4gICAgLS1zZWxlY3Rpb24tY29sb3ItaW5mbzogIzNlOGVkMDtcXG4gICAgLS1zZWxlY3Rpb24tY29sb3Itc3VjY2VzczogIzQ4Yzc4ZTtcXG5cXG4gICAgLS1hY3RpdmUtY29sb3I6IHZhcigtLXNlbGVjdGlvbi1jb2xvci1zdWNjZXNzKVxcbn1cXG5cXG46OnNlbGVjdGlvbiB7XFxuICAgIGNvbG9yOiAkYmFja2dyb3VuZENvbG9yO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY3RpdmUtY29sb3IpO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxufVxcblxcbmh0bWwsXFxuYm9keSB7XFxuICAgIGNvbG9yOiAkdGV4dENvbG9yO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiT3BlbiBTYW5zXFxcIiwgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1vcHRpY2FsLXNpemluZzogYXV0bztcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kQ29sb3I7XFxuICAgIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xcbiAgICBzY3JvbGwtc25hcC10eXBlOiB5IG1hbmRhdG9yeTtcXG5cXG4gICAgJi5pcy1kYW5nZXIge1xcbiAgICAgICAgLS1hY3RpdmUtY29sb3I6IHZhcigtLXNlbGVjdGlvbi1jb2xvci1kYW5nZXIpO1xcbiAgICB9XFxuXFxuICAgICYuaXMtd2FybmluZyB7XFxuICAgICAgICAtLWFjdGl2ZS1jb2xvcjogdmFyKC0tc2VsZWN0aW9uLWNvbG9yLXdhcm5pbmcpO1xcbiAgICB9XFxuXFxuICAgICYuaXMtaW5mbyB7XFxuICAgICAgICAtLWFjdGl2ZS1jb2xvcjogdmFyKC0tc2VsZWN0aW9uLWNvbG9yLWluZm8pO1xcbiAgICB9XFxuXFxuICAgICYuaXMtc3VjY2VzcyB7XFxuICAgICAgICAtLWFjdGl2ZS1jb2xvcjogdmFyKC0tc2VsZWN0aW9uLWNvbG9yLXN1Y2Nlc3MpO1xcbiAgICB9XFxufVxcblxcbi50aXRsZSxcXG4uc3VidGl0bGUge1xcbiAgICBmb250LWZhbWlseTogXFxcIktvZGUgTW9ub1xcXCIsIG1vbm9zcGFjZTtcXG4gICAgY29sb3I6IGluaGVyaXQ7XFxufVxcblxcbi5zZWN0aW9uIHtcXG4gICAgcGFkZGluZzogMnJlbSAycmVtO1xcbn1cXG5cXG4uaXMtZnVsbGhlaWdodCB7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4uaXMtZnVsbHdpZHRoIHtcXG4gICAgbWluLXdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ubm90aWZpY2F0aW9uIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlNjQ1O1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICB6LWluZGV4OiAxMDA7XFxuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4ICR0ZXh0Q29sb3I7XFxuXFxuICAgIHRyYW5zaXRpb246XFxuICAgICAgICB2aXNpYmlsaXR5IDBzLFxcbiAgICAgICAgb3BhY2l0eSAwLjNzIGxpbmVhcjtcXG5cXG4gICAgJi5pcy1pbnZpc2libGUge1xcbiAgICAgICAgb3BhY2l0eTogMDtcXG4gICAgfVxcbn1cXG5cXG4jcHdkLXR5cGUtc2VsZWN0b3ItdGFiIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcXG5cXG4gICAgdWwge1xcbiAgICAgICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMDtcXG4gICAgfVxcbn1cXG5cXG4jcHdkLXNldHRpbmdzLWJveCB7XFxuICAgIG1pbi1oZWlnaHQ6IDM2MnB4O1xcbn1cXG5cXG4udGFicyBsaSB7XFxuXFxuICAgICYuaXMtYWN0aXZlIHtcXG4gICAgICAgIGEge1xcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1hY3RpdmUtY29sb3IpO1xcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6IHZhcigtLWFjdGl2ZS1jb2xvcik7XFxuXFxuICAgICAgICAgICAgJjpob3ZlciB7XFxuICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiBub25lO1xcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tLXdpZHRoOiAycHg7XFxuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6IHZhcigtLWFjdGl2ZS1jb2xvcik7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgIGEge1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xcbiAgICAgICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMnB4O1xcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgICAgICBjb2xvcjogJHNlY29uZGFyeUNvbG9yO1xcblxcbiAgICAgICAgJjpob3ZlciB7XFxuICAgICAgICAgICAgdGV4dC1zaGFkb3c6IHZhcigtLWFjdGl2ZS1jb2xvcikgMXB4IDAgMTBweDtcXG4gICAgICAgICAgICBib3JkZXItYm90dG9tLXdpZHRoOiAycHg7XFxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgICAgICB9XFxuICAgIH1cXG59XFxuXFxuXFxuI3B3ZC1zdHJlbmd0aC10YWdib3gge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogMnB4O1xcbiAgICBsZWZ0OiAwcHg7XFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA2cHg7XFxufVxcblxcbiNwd2QtYWN0aW9ucy1ib3gge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogM3B4O1xcbiAgICByaWdodDogMHB4O1xcblxcbiAgICAuYWN0aW9uIHtcXG4gICAgICAgIHBhZGRpbmc6IDAgLjNyZW07XFxuICAgICAgICBjb2xvcjogdmFyKC0tYWN0aXZlLWNvbG9yKTtcXG5cXG4gICAgICAgICY6aG92ZXIge1xcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1hY3RpdmUtY29sb3IpO1xcbiAgICAgICAgICAgIHRleHQtc2hhZG93OiAwIDAgNXB4IHZhcigtLWFjdGl2ZS1jb2xvcik7XFxuICAgICAgICB9XFxuICAgIH1cXG59XFxuXFxuI3B3ZC1zdHJlbmd0aCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiAwcHg7XFxuICAgIGxlZnQ6IDBweDtcXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMHB4O1xcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMHB4O1xcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA2cHg7XFxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA2cHg7XFxuICAgIGhlaWdodDogMnB4O1xcbn1cXG5cXG4ucHdkLWNvbnRhaW5lciB7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFxuXFxuICAgICYuaXMtZGFuZ2VyIHtcXG4gICAgICAgIDo6c2VsZWN0aW9uIHtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY3RpdmUtY29sb3IpO1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgICYuaXMtd2FybmluZyB7XFxuICAgICAgICA6OnNlbGVjdGlvbiB7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWN0aXZlLWNvbG9yKTtcXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAmLmlzLWluZm8ge1xcbiAgICAgICAgOjpzZWxlY3Rpb24ge1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjdGl2ZS1jb2xvcik7XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgJi5pcy1zdWNjZXNzIHtcXG4gICAgICAgIDo6c2VsZWN0aW9uIHtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY3RpdmUtY29sb3IpO1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgIDo6c2VsZWN0aW9uIHtcXG4gICAgICAgIGNvbG9yOiAkYmFja2dyb3VuZENvbG9yO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWN0aXZlLWNvbG9yKTtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgfVxcbn1cXG5cXG5cXG4jc2V0dGluZ3MtcGFzc3dvcmQtbGVuZ3RoIHtcXG4gICAgd2lkdGg6IDY0cHg7XFxufVxcblxcbiNzZXR0aW5ncy1wYXNzd29yZC1sZW5ndGgtcmFuZ2Uge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgLyogUmltdW92ZSBsbyBzdGlsZSBkaSBkZWZhdWx0IHN1IFdlYktpdCAqL1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxuXFxuICAgICY6aG92ZXIge1xcbiAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgfVxcblxcbiAgICAvKiBTdGlsZSBkZWwgY3Vyc29yZSBwZXIgQ2hyb21lLCBTYWZhcmksIEVkZ2UgKi9cXG4gICAgJjo6LXdlYmtpdC1zbGlkZXItdGh1bWIge1xcbiAgICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgICAgICAgYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgICAgIG1hcmdpbi10b3A6IC01cHg7XFxuICAgICAgICB3aWR0aDogMTBweDtcXG4gICAgICAgIGhlaWdodDogMjBweDtcXG4gICAgICAgIGJhY2tncm91bmQ6ICR0ZXh0Q29sb3I7XFxuICAgICAgICAvKiBDb2xvcmUgZGVsIGN1cnNvcmUgKi9cXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgfVxcblxcbiAgICAvKiBTdGlsZSBkZWxsYSBiYXJyYSBwZXIgQ2hyb21lLCBTYWZhcmksIEVkZ2UgKi9cXG4gICAgJjo6LXdlYmtpdC1zbGlkZXItcnVubmFibGUtdHJhY2sge1xcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYWN0aXZlLWNvbG9yKTtcXG4gICAgICAgIGhlaWdodDogOHB4O1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgfVxcblxcbiAgICAvLyAgIC8qIFN0aWxlIHBlciBGaXJlZm94ICovXFxuICAgICY6Oi1tb3otcmFuZ2UtdGh1bWIge1xcbiAgICAgICAgd2lkdGg6IDIwcHg7XFxuICAgICAgICBoZWlnaHQ6IDIwcHg7XFxuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1hY3RpdmUtY29sb3IpO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB9XFxuXFxuICAgICY6Oi1tb3otcmFuZ2UtdHJhY2sge1xcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYWN0aXZlLWNvbG9yKTtcXG4gICAgICAgIGhlaWdodDogOHB4O1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgfVxcbn1cXG5cXG4jc2V0dGluZ3MtcGFzc3BocmFzZS1sZW5ndGgtcmFuZ2Uge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgLyogUmltdW92ZSBsbyBzdGlsZSBkaSBkZWZhdWx0IHN1IFdlYktpdCAqL1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxuXFxuICAgICY6aG92ZXIge1xcbiAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgfVxcblxcbiAgICAvKiBTdGlsZSBkZWwgY3Vyc29yZSBwZXIgQ2hyb21lLCBTYWZhcmksIEVkZ2UgKi9cXG4gICAgJjo6LXdlYmtpdC1zbGlkZXItdGh1bWIge1xcbiAgICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgICAgICAgYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgICAgIG1hcmdpbi10b3A6IC01cHg7XFxuICAgICAgICB3aWR0aDogMTBweDtcXG4gICAgICAgIGhlaWdodDogMjBweDtcXG4gICAgICAgIGJhY2tncm91bmQ6ICR0ZXh0Q29sb3I7XFxuICAgICAgICAvKiBDb2xvcmUgZGVsIGN1cnNvcmUgKi9cXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgfVxcblxcbiAgICAvKiBTdGlsZSBkZWxsYSBiYXJyYSBwZXIgQ2hyb21lLCBTYWZhcmksIEVkZ2UgKi9cXG4gICAgJjo6LXdlYmtpdC1zbGlkZXItcnVubmFibGUtdHJhY2sge1xcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYWN0aXZlLWNvbG9yKTtcXG4gICAgICAgIGhlaWdodDogOHB4O1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgfVxcblxcbiAgICAvLyAgIC8qIFN0aWxlIHBlciBGaXJlZm94ICovXFxuICAgICY6Oi1tb3otcmFuZ2UtdGh1bWIge1xcbiAgICAgICAgd2lkdGg6IDIwcHg7XFxuICAgICAgICBoZWlnaHQ6IDIwcHg7XFxuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1hY3RpdmUtY29sb3IpO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB9XFxuXFxuICAgICY6Oi1tb3otcmFuZ2UtdHJhY2sge1xcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYWN0aXZlLWNvbG9yKTtcXG4gICAgICAgIGhlaWdodDogOHB4O1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgfVxcbn1cXG5cXG4uc2V0dGluZ3MtY29udGFpbmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWN0aXZlLWNvbG9yKTtcXG4gICAgY29sb3I6ICRiYWNrZ3JvdW5kQ29sb3I7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWFjdGl2ZS1jb2xvcik7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIC8vIGJveC1zaGFkb3c6IDAgMnB4IDEwcHggdmFyKC0tYWN0aXZlLWNvbG9yKTtcXG5cXG4gICAgOjpzZWxlY3Rpb24ge1xcbiAgICAgICAgY29sb3I6ICRiYWNrZ3JvdW5kQ29sb3I7XFxuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1hY3RpdmUtY29sb3IpO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICB9XFxuXFxuICAgIC5jaGVja2JveDpob3ZlcixcXG4gICAgLnJhZGlvOmhvdmVyIHtcXG4gICAgICAgIGNvbG9yOiAkdGV4dENvbG9yO1xcbiAgICAgICAgLy8gdGV4dC1zaGFkb3c6IDAgMCA1cHggJGJhY2tncm91bmRDb2xvcjtcXG4gICAgfVxcbn1cXG5cXG4uZm9vdGVyIHtcXG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICMyNDU0OTQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3Y2E3ZGY7XFxufVxcblxcbi5pcy1vd2VyZmxvdy1hdXRvIHtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbi5pcy13b3JkLWJyZWFrLWFsbCB7XFxuICAgIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcXG59XFxuXFxuI3Bhc3N3b3JkLXNldHRpbmdzLXNob3J0Y3V0IHtcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcbn1cXG5cXG5pbnB1dCB7XFxuICAgICtzcGFuLnRvZ2dsZSB7XFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgICAgICBoZWlnaHQ6IDI0cHg7XFxuICAgICAgICB3aWR0aDogNDBweDtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IC02cHg7XFxuICAgICAgICBtYXJnaW4tbGVmdDogLTI0cHg7XFxuICAgICAgICBiYWNrZ3JvdW5kOiAkYmFja2dyb3VuZENvbG9yTGlnaHQ7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMDB2aDtcXG4gICAgICAgIGNvbG9yOiB2YXIoLS1hY3RpdmUtY29sb3IpO1xcblxcbiAgICAgICAgJjpiZWZvcmUge1xcbiAgICAgICAgICAgIGNvbnRlbnQ6IFxcXCIgXFxcIjtcXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICAgICAgdG9wOiA0cHg7XFxuICAgICAgICAgICAgbGVmdDogNHB4O1xcbiAgICAgICAgICAgIHJpZ2h0OiBhdXRvO1xcbiAgICAgICAgICAgIGhlaWdodDogMTZweDtcXG4gICAgICAgICAgICB3aWR0aDogMTZweDtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjYmJiO1xcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMHZoO1xcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgICZbdHlwZT1yYWRpb10ge1xcbiAgICAgICAgJjpjaGVja2VkIHtcXG4gICAgICAgICAgICAvLyBhY2NlbnQtY29sb3I6IHZhcigtLWFjdGl2ZS1jb2xvcik7XFxuICAgICAgICAgICAgLy8gYm9yZGVyOiBub25lO1xcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tYWN0aXZlLWNvbG9yKTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxuICAgICAgICAvKiBSaW11b3ZlIGxvIHN0aWxlIHByZWRlZmluaXRvICovXFxuICAgICAgICB3aWR0aDogMTRweDtcXG4gICAgICAgIGhlaWdodDogMTRweDtcXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNiYmI7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuXFxuICAgICAgICAmOmNoZWNrZWQ6OmJlZm9yZSB7XFxuICAgICAgICAgICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgICAgICAgICAgd2lkdGg6IDEwcHg7XFxuICAgICAgICAgICAgaGVpZ2h0OiAxMHB4O1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjdGl2ZS1jb2xvcik7XFxuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1hY3RpdmUtY29sb3IpO1xcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICAgICAgdG9wOiA1MCU7XFxuICAgICAgICAgICAgbGVmdDogNTAlO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgICY6Y2hlY2tlZCtzcGFuLnRvZ2dsZTpiZWZvcmUge1xcbiAgICAgICAgbGVmdDogMjBweDtcXG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWFjdGl2ZS1jb2xvcik7XFxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcXG4gICAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhc3NwaHJhc2Uge1xuICAgIGNvbnN0cnVjdG9yKHdvcmRMaXN0LCB3b3JkQ291bnQgPSA0LCBzZXBhcmF0b3IgPSAnLScsIGluY2x1ZGVOdW1iZXJzID0gZmFsc2UsIGNhcGl0YWxpemUgPSBmYWxzZSkge1xuICAgICAgICB0aGlzLndvcmRMaXN0ID0gd29yZExpc3Q7XG4gICAgICAgIHRoaXMud29yZENvdW50ID0gd29yZENvdW50O1xuICAgICAgICB0aGlzLnNlcGFyYXRvciA9IHNlcGFyYXRvcjtcbiAgICAgICAgdGhpcy5pbmNsdWRlTnVtYmVycyA9IGluY2x1ZGVOdW1iZXJzO1xuICAgICAgICB0aGlzLmNhcGl0YWxpemUgPSBjYXBpdGFsaXplO1xuICAgIH1cblxuICAgIGdlbmVyYXRlKCkge1xuICAgICAgICBsZXQgcGFzc3BocmFzZSA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMud29yZENvdW50OyBpKyspIHtcbiAgICAgICAgICAgIGxldCB3b3JkID0gdGhpcy53b3JkTGlzdFtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLndvcmRMaXN0Lmxlbmd0aCldO1xuICAgICAgICAgICAgaWYgKHRoaXMuY2FwaXRhbGl6ZSkge1xuICAgICAgICAgICAgICAgIHdvcmQgPSB0aGlzLiNyYW5kb21DYXBpdGFsaXplKHdvcmQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcGFzc3BocmFzZS5wdXNoKHdvcmQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuaW5jbHVkZU51bWJlcnMpIHtcbiAgICAgICAgICAgIHBhc3NwaHJhc2UucHVzaChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDApKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBwYXNzcGhyYXNlOiBwYXNzcGhyYXNlLmpvaW4odGhpcy5zZXBhcmF0b3IpLFxuICAgICAgICAgICAgc3RyZW5ndGg6IHRoaXMuI2dldFN0cmVuZ3RoKCksXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAjcmFuZG9tQ2FwaXRhbGl6ZSh3b3JkKSB7XG4gICAgICAgIHJldHVybiB3b3JkXG4gICAgICAgICAgICAuc3BsaXQoJycpXG4gICAgICAgICAgICAubWFwKGNoYXIgPT4gKE1hdGgucmFuZG9tKCkgPCAwLjUgPyBjaGFyLnRvVXBwZXJDYXNlKCkgOiBjaGFyKSlcbiAgICAgICAgICAgIC5qb2luKCcnKTtcbiAgICB9XG5cbiAgICAjZ2V0U3RyZW5ndGgoKSB7XG4gICAgICAgIGxldCBlbnRyb3B5ID0gdGhpcy53b3JkQ291bnQgKiBNYXRoLmxvZzIodGhpcy53b3JkTGlzdC5sZW5ndGgpO1xuICAgICAgICBpZiAodGhpcy5pbmNsdWRlTnVtYmVycykgZW50cm9weSArPSBNYXRoLmxvZzIoMTAwKTtcbiAgICAgICAgaWYgKHRoaXMuY2FwaXRhbGl6ZSkgZW50cm9weSArPSB0aGlzLndvcmRDb3VudCAqIDEuNTsgLy8gQXBwcm94aW1hdGUgZXh0cmEgZW50cm9weSBmcm9tIGNhcGl0YWxpemF0aW9uXG4gICAgICAgIHJldHVybiBlbnRyb3B5O1xuICAgIH1cbn1cbiIsImltcG9ydCBQYXNzcGhyYXNlIGZyb20gXCIuL2dlbmVyYXRvclwiO1xuZXhwb3J0IHsgUEFTU1BIUkFTRV9XT1JETElTVCB9IGZyb20gXCIuL3V0aWxzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IFBhc3NwaHJhc2U7XG4iLCJleHBvcnQgY29uc3QgUEFTU1BIUkFTRV9XT1JETElTVCA9IFtcbiAgICBcImFwcGxlXCIsIFwiYmFuYW5hXCIsIFwiY2hlcnJ5XCIsIFwiZGVsdGFcIiwgXCJlY2hvXCIsIFwiZm94dHJvdFwiLCBcImdvbGZcIiwgXCJob3RlbFwiLCBcImluZGlhXCIsIFwianVsaWV0XCIsXG4gICAgXCJrYW5nYXJvb1wiLCBcImxlbW9uXCIsIFwibWFuZ29cIiwgXCJuZWN0YXJcIiwgXCJvcmFuZ2VcIiwgXCJwYXBheWFcIiwgXCJxdWFzYXJcIiwgXCJyYXNwYmVycnlcIiwgXCJzdHJhd2JlcnJ5XCIsIFwidGFuZ29cIixcbiAgICBcInVtYnJlbGxhXCIsIFwidmlvbGV0XCIsIFwid2FsbnV0XCIsIFwieGVub25cIiwgXCJ5YW5rZWVcIiwgXCJ6ZWJyYVwiLCBcImFsYmF0cm9zc1wiLCBcImJ1dHRlcmZseVwiLCBcImNvY29udXRcIiwgXCJkcmFnb25cIixcbiAgICBcImVsZXBoYW50XCIsIFwiZmlyZWZseVwiLCBcImdvcmlsbGFcIiwgXCJob3Jpem9uXCIsIFwiaWdsb29cIiwgXCJqYWNrYWxcIiwgXCJrb2FsYVwiLCBcImxpZ2h0bmluZ1wiLCBcIm1vdW50YWluXCIsIFwibmVidWxhXCIsXG4gICAgXCJvY2VhblwiLCBcInBlbmd1aW5cIiwgXCJxdW9ra2FcIiwgXCJyYWluYm93XCIsIFwic2FwcGhpcmVcIiwgXCJ0b3BhelwiLCBcInVuaWNvcm5cIiwgXCJ2b2xjYW5vXCIsIFwid2hpcmxwb29sXCIsIFwieGVyb3hcIixcbiAgICBcInllbGxvd1wiLCBcInplcHBlbGluXCIsIFwiYXN0ZXJvaWRcIiwgXCJibGl6emFyZFwiLCBcImNvbWV0XCIsIFwiZG9scGhpblwiLCBcImVtZXJhbGRcIiwgXCJmYWxjb25cIiwgXCJnYWxheHlcIiwgXCJodXJyaWNhbmVcIixcbiAgICBcImlsbHVzaW9uXCIsIFwianVuZ2xlXCIsIFwia2luZ2RvbVwiLCBcImxpZ2h0aG91c2VcIiwgXCJtZXRlb3JcIiwgXCJub3ZlbWJlclwiLCBcIm9jdG9wdXNcIiwgXCJwYXJhZGlzZVwiLCBcInF1aWNrc2FuZFwiLFxuICAgIFwicmlwdGlkZVwiLCBcInN1bnNoaW5lXCIsIFwidGh1bmRlclwiLCBcInVuZGVydG93XCIsIFwidm9ydGV4XCIsIFwid2hhbGVcIiwgXCJ4eWxvcGhvbmVcIiwgXCJ5ZXRpXCIsIFwiemVuaXRoXCIsIFwiYXZhbGFuY2hlXCIsXG4gICAgXCJibHVlYmVycnlcIiwgXCJjb3Ntb3NcIiwgXCJkYXlsaWdodFwiLCBcImV2ZXJlc3RcIiwgXCJmaXJlc3Rvcm1cIiwgXCJnbGFjaWVyXCIsIFwiaHVtbWluZ2JpcmRcIiwgXCJpc290b3BlXCIsIFwiamlnc2F3XCIsXG4gICAgXCJrcnlwdG9uXCIsIFwibGFieXJpbnRoXCIsIFwibWlyYWdlXCIsIFwibmlnaHRmYWxsXCIsIFwib2JzaWRpYW5cIiwgXCJwdXp6bGVcIiwgXCJxdWFudHVtXCIsIFwicmVsaWNcIiwgXCJzdGFybGlnaHRcIixcbiAgICBcInRlbGVzY29wZVwiLCBcInV0b3BpYVwiLCBcInZveWFnZXJcIiwgXCJ3aW5kc3dlcHRcIiwgXCJ4ZW5vcGhpbGVcIiwgXCJ5b25kZXJcIiwgXCJ6ZXBwZWxpblwiXG5dOyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhc3N3b3JkIHtcbiAgICBjb25zdHJ1Y3RvcihhdmFpbGFibGVDaGFycywgcGFzc3dvcmRMZW5ndGgpIHtcbiAgICAgICAgdGhpcy5hdmFpbGFibGVDaGFycyA9IGF2YWlsYWJsZUNoYXJzO1xuICAgICAgICB0aGlzLnBhc3N3b3JkTGVuZ3RoID0gcGFzc3dvcmRMZW5ndGg7XG4gICAgfVxuXG4gICAgZ2VuZXJhdGUoKSB7XG4gICAgICAgIGlmICh0aGlzLmF2YWlsYWJsZUNoYXJzLnNpemUgPT09IDApIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTm8gY2hhcmFjdGVycyBhdmFpbGFibGUgdG8gZ2VuZXJhdGUgcGFzc3dvcmQnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNoYXJzQXJyYXkgPSBBcnJheS5mcm9tKHRoaXMuYXZhaWxhYmxlQ2hhcnMpO1xuICAgICAgICBjb25zdCByYW5kb21WYWx1ZXMgPSBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKG5ldyBVaW50MzJBcnJheSh0aGlzLnBhc3N3b3JkTGVuZ3RoKSk7XG5cbiAgICAgICAgY29uc3QgcGFzc3dvcmQgPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiB0aGlzLnBhc3N3b3JkTGVuZ3RoIH0sIChfLCBpKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZShjaGFyc0FycmF5W3JhbmRvbVZhbHVlc1tpXSAlIGNoYXJzQXJyYXkubGVuZ3RoXSk7XG4gICAgICAgIH0pLmpvaW4oJycpO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBwYXNzd29yZCxcbiAgICAgICAgICAgIHN0cmVuZ3RoOiB0aGlzLiNjYWxjdWxhdGVTdHJlbmd0aChwYXNzd29yZCksXG4gICAgICAgIH1cblxuICAgIH1cblxuICAgICNjYWxjdWxhdGVTdHJlbmd0aChwYXNzd29yZCkge1xuICAgICAgICBjb25zdCB1bmlxdWVDaGFycyA9IG5ldyBTZXQocGFzc3dvcmQpLnNpemU7XG4gICAgICAgIGNvbnN0IGVudHJvcHkgPSBwYXNzd29yZC5sZW5ndGggKiBNYXRoLmxvZzIodW5pcXVlQ2hhcnMpO1xuICAgICAgICByZXR1cm4gZW50cm9weS50b0ZpeGVkKDIpO1xuXG4gICAgfVxufSIsImltcG9ydCBQYXNzd29yZCBmcm9tIFwiLi9nZW5lcmF0b3JcIjtcbmV4cG9ydCB7XG4gICAgTlVNQkVSUyxcbiAgICBMT1dFUkNBU0UsXG4gICAgVVBQRVJDQVNFLFxuICAgIFNQRUNJQUxfQ0hBUkFDVEVSUyxcbiAgICBTSU1JTEFSX0NIQVJTLFxufSBmcm9tIFwiLi91dGlsc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBQYXNzd29yZDtcbiIsImNvbnN0IE5VTUJFUlMgPSBuZXcgVWludDhBcnJheShbNDgsIDQ5LCA1MCwgNTEsIDUyLCA1MywgNTQsIDU1LCA1NiwgNTddKTtcbmNvbnN0IExPV0VSQ0FTRSA9IG5ldyBVaW50OEFycmF5KFtcbiAgICA5NywgOTgsIDk5LCAxMDAsIDEwMSwgMTAyLCAxMDMsIDEwNCwgMTA1LCAxMDYsIDEwNywgMTA4LCAxMDksIDExMCwgMTExLCAxMTIsIDExMywgMTE0LCAxMTUsIDExNiwgMTE3LCAxMTgsIDExOSwgMTIwLFxuICAgIDEyMSwgMTIyLFxuXSk7XG5jb25zdCBVUFBFUkNBU0UgPSBuZXcgVWludDhBcnJheShbXG4gICAgNjUsIDY2LCA2NywgNjgsIDY5LCA3MCwgNzEsIDcyLCA3MywgNzQsIDc1LCA3NiwgNzcsIDc4LCA3OSwgODAsIDgxLCA4MiwgODMsIDg0LCA4NSwgODYsIDg3LCA4OCwgODksIDkwLFxuXSk7XG5jb25zdCBTUEVDSUFMX0NIQVJBQ1RFUlMgPSBuZXcgVWludDhBcnJheShbMzMsIDM1LCAzNiwgMzcsIDM4LCA0MCwgNDEsIDQyLCA0MywgNjQsIDk0XSk7XG5jb25zdCBTSU1JTEFSX0NIQVJTID0ge1xuICAgIDA6IFs0OCwgNzksIDExMSwgNzMsIDEwNV0sIC8vIDAsIE8sIGwsIElcbiAgICAxOiBbNDksIDc2LCAxMDhdLCAvLyAxLCBsLCBJXG4gICAgNTogWzUzLCA4MywgMTE1LCA1NiwgODhdLCAvLyA1LCBTLCBzLCA4LCBCXG4gICAgNjogWzU0LCA2NiwgOThdLCAvLyA2LCBiLCBCXG4gICAgODogWzU2LCA2NiwgOThdLCAvLyA4LCBCLCBiXG4gICAgOTogWzU3LCA3MSwgMTAzLCA1NCwgNjZdLCAvLyA5LCBnLCBHLCA2LCBiXG4gICAgYTogWzk3LCA2NCwgNjVdLCAvLyBhLCBALCBBXG4gICAgZTogWzEwMSwgNjcsIDk5XSwgLy8gZSwgYywgQ1xuICAgIGc6IFsxMDMsIDgxLCAxMTMsIDU3XSwgLy8gZywgcSwgUSwgOVxuICAgIGw6IFsxMDgsIDQ5LCA3MywgMTA1XSwgLy8gbCwgMSwgSSwgaVxuICAgIG86IFsxMTEsIDQ4LCA3OSwgOTcsIDY1XSwgLy8gbywgMCwgTywgYSwgQVxuICAgIHM6IFsxMTUsIDUzLCA4M10sIC8vIHMsIDUsIFNcbiAgICB0OiBbMTE2LCA1NSwgODRdLCAvLyB0LCA3LCBUXG4gICAgejogWzEyMiwgNTBdLCAvLyB6LCAyXG59O1xuXG5leHBvcnQge1xuICAgIE5VTUJFUlMsXG4gICAgTE9XRVJDQVNFLFxuICAgIFVQUEVSQ0FTRSxcbiAgICBTUEVDSUFMX0NIQVJBQ1RFUlMsXG4gICAgU0lNSUxBUl9DSEFSUyxcbn0iLCIvLyBsb2FkIHN0eWxlc1xuaW1wb3J0ICcuLi9zdHlsZXMvc3R5bGUuc2Nzcyc7XG5cbi8vIGxvYWQgc2l0ZW1hcCAmIHJvYm90c1xuY29uc3Qgc2l0ZW1hcCA9IHJlcXVpcmUoJy4uLy4uL3NpdGVtYXAueG1sJyk7XG5jb25zdCByb2JvdHMgPSByZXF1aXJlKCcuLi8uLi9yb2JvdHMudHh0Jyk7XG5cbi8vIGxvYWQgaW1hZ2VzXG5pbXBvcnQgZmF2aWNvbkljbyBmcm9tICcuLi9pbWFnZXMvZmF2aWNvbi5pY28nO1xuaW1wb3J0IGZhdmljb25JbWFnZSBmcm9tICcuLi9pbWFnZXMvZmF2aWNvbi5wbmcnO1xuaW1wb3J0IHNoYXJlSW1hZ2UgZnJvbSAnLi4vaW1hZ2VzL3NoYXJlLnBuZyc7XG5cbmltcG9ydCBQYXNzd29yZCwge1xuICBOVU1CRVJTLFxuICBMT1dFUkNBU0UsXG4gIFVQUEVSQ0FTRSxcbiAgU1BFQ0lBTF9DSEFSQUNURVJTLFxuICAvLyBTSU1JTEFSX0NIQVJTLFxufSBmcm9tICcuL2dlbmVhcmF0b3JzL3Bhc3N3b3JkJ1xuaW1wb3J0IFBhc3NwaHJhc2UsIHsgUEFTU1BIUkFTRV9XT1JETElTVCB9IGZyb20gJy4vZ2VuZWFyYXRvcnMvcGFzc3BocmFzZSdcblxubGV0IGF2YWlsYWJsZUNoYXJzID0gW107XG5cbmNvbnN0IGJvZHlkRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYm9keScpWzBdO1xuY29uc3QgcHdkR2VuZXJhdGVkRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHdkLWdlbmVyYXRlZCcpO1xuY29uc3Qgbm90aWZpY2F0aW9uRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbm90aWZpY2F0aW9uJyk7XG5jb25zdCBhY3Rpb25SZWRvRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWN0aW9uLXJlZG8nKTtcbmNvbnN0IG5vdGlmaWNhdGlvbkRlbGV0ZUJ0bkVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5vdGlmaWNhdGlvbiBidXR0b24uZGVsZXRlJyk7XG5jb25zdCBzZXR0aW5nc1Bhc3N3b3JkTGVuZ3RoUmFuZ2VFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZXR0aW5ncy1wYXNzd29yZC1sZW5ndGgtcmFuZ2UnKTtcbmNvbnN0IHNldHRpbmdzUGFzc3BocmFzZUxlbmd0aFJhbmdlRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2V0dGluZ3MtcGFzc3BocmFzZS1sZW5ndGgtcmFuZ2UnKTtcbmNvbnN0IHNldHRpbmdzUGFzc3dvcmRMZW5ndGhFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZXR0aW5ncy1wYXNzd29yZC1sZW5ndGgnKTtcbmNvbnN0IHB3ZENvbnRhaW5lckVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3B3ZC1jb250YWluZXInKTtcbmNvbnN0IHNldHRpbmdzUGFzc3BocmFzZVNlcGFyYXRvckVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NldHRpbmdzLXBhc3NwaHJhc2Utc2VwYXJhdG9yJyk7XG5jb25zdCBzZXR0aW5nc1Bhc3NwaHJhc2VMZW5ndGhFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZXR0aW5ncy1wYXNzcGhyYXNlLWxlbmd0aCcpO1xuY29uc3QgcHdkR2VuZXJhdGVkU3RyZW5ndGhFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwd2Qtc3RyZW5ndGgnKTtcbmNvbnN0IHB3ZEdlbmVyYXRlZFN0cmVuZ3RoVGFnQm94RWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHdkLXN0cmVuZ3RoLXRhZ2JveCcpO1xuY29uc3QgcHdkR2VuZXJhdGVkU3RyZW5ndGhUYWdFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwd2Qtc3RyZW5ndGgtdGFnJyk7XG5jb25zdCBzZXR0aW5nc0FsbG93TnVtYmVyc0VsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NldHRpbmdzLWFsbG93LW51bWJlcnMnKTtcbmNvbnN0IHNldHRpbmdzUGFzc3BocmFzZUNhcGl0YWxpemVFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZXR0aW5ncy1wYXNzcGhyYXNlLWNhcGl0YWxpemUnKTtcbmNvbnN0IHNldHRpbmdzUGFzc3BocmFzZUluY2x1ZGVOdW1iZXJzRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2V0dGluZ3MtcGFzc3BocmFzZS1pbmNsdWRlLW51bWJlcnMnKTtcbmNvbnN0IHNldHRpbmdzQWxsb3dVcHBlcmNhc2VFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZXR0aW5ncy1hbGxvdy11cHBlcmNhc2UnKTtcbmNvbnN0IHNldHRpbmdzQWxsb3dMb3dlcmNhc2VFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZXR0aW5ncy1hbGxvdy1sb3dlcmNhc2UnKTtcbmNvbnN0IHNldHRpbmdzQWxsb3dTeW1ib2xzRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2V0dGluZ3MtYWxsb3ctc3ltYm9scycpO1xuY29uc3Qgc2V0dGluZ3NFeGNsdWRlRHVwbGljYXRlRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2V0dGluZ3MtZXhjbHVkZS1kdXBsaWNhdGUtY2hhcmFjdGVycycpO1xuY29uc3Qgc2V0dGluZ3NFeGNsdWRlU2ltaWxhckVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NldHRpbmdzLWV4Y2x1ZGUtc2ltaWxhci1jaGFyYWN0ZXJzJyk7XG5cblxuZnVuY3Rpb24gZ2V0UGFzc3dvcmRMZW5ndGgoKSB7XG4gIGNvbnN0IGxlbmd0aCA9IHNldHRpbmdzUGFzc3dvcmRMZW5ndGhFbC52YWx1ZTtcbiAgdHJ5IHtcbiAgICByZXR1cm4gcGFyc2VJbnQobGVuZ3RoIHx8IHNldHRpbmdzUGFzc3dvcmRMZW5ndGhFbC5nZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJykpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmVycm9yKCdlcnJvcicsIGUpO1xuICB9XG4gIHJldHVybiAwO1xufVxuXG5mdW5jdGlvbiBnZXRQYXNzcGhyYXNlTGVuZ3RoKCkge1xuICBjb25zdCBsZW5ndGggPSBzZXR0aW5nc1Bhc3NwaHJhc2VMZW5ndGhFbC52YWx1ZTtcbiAgdHJ5IHtcbiAgICByZXR1cm4gcGFyc2VJbnQobGVuZ3RoIHx8IHNldHRpbmdzUGFzc3BocmFzZUxlbmd0aEVsLmdldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInKSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ2Vycm9yJywgZSk7XG4gIH1cbiAgcmV0dXJuIDA7XG59XG5cbmZ1bmN0aW9uIGdldFBhc3NwaHJhc2VTZXBhcmF0b3IoKSB7XG4gIGNvbnN0IHNlcGFyYXRvciA9IHNldHRpbmdzUGFzc3BocmFzZVNlcGFyYXRvckVsLnZhbHVlO1xuICB0cnkge1xuICAgIHJldHVybiBzZXBhcmF0b3IgfHwgc2V0dGluZ3NQYXNzcGhyYXNlU2VwYXJhdG9yRWwuZ2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmVycm9yKCdlcnJvcicsIGUpO1xuICB9XG4gIHJldHVybiAnLSc7XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlQXZhaWxhYmxlQ2hhcnNMZW5ndGgoKSB7XG4gIGlmIChhdmFpbGFibGVDaGFycy5sZW5ndGggPT09IDApIHtcbiAgICBhY3Rpb25SZWRvRWwuY2xhc3NMaXN0LmFkZCgnaXMtaW52aXNpYmxlJyk7XG4gICAgcmV0dXJuO1xuICB9XG4gIGFjdGlvblJlZG9FbC5jbGFzc0xpc3QucmVtb3ZlKCdpcy1pbnZpc2libGUnKTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlQXZhaWxhYmxlQ2hhcnMoKSB7XG4gIGNvbnNvbGUudGltZSgndXBkYXRlQXZhaWxhYmxlQ2hhcnMnKTtcbiAgYXZhaWxhYmxlQ2hhcnMgPSBuZXcgU2V0KCk7XG5cbiAgaWYgKHNldHRpbmdzQWxsb3dOdW1iZXJzRWwuY2hlY2tlZCkgYXZhaWxhYmxlQ2hhcnMgPSBuZXcgU2V0KFsuLi5hdmFpbGFibGVDaGFycywgLi4uTlVNQkVSU10pO1xuICBpZiAoc2V0dGluZ3NBbGxvd1VwcGVyY2FzZUVsLmNoZWNrZWQpIGF2YWlsYWJsZUNoYXJzID0gbmV3IFNldChbLi4uYXZhaWxhYmxlQ2hhcnMsIC4uLlVQUEVSQ0FTRV0pO1xuICBpZiAoc2V0dGluZ3NBbGxvd0xvd2VyY2FzZUVsLmNoZWNrZWQpIGF2YWlsYWJsZUNoYXJzID0gbmV3IFNldChbLi4uYXZhaWxhYmxlQ2hhcnMsIC4uLkxPV0VSQ0FTRV0pO1xuICBpZiAoc2V0dGluZ3NBbGxvd1N5bWJvbHNFbC5jaGVja2VkKSBhdmFpbGFibGVDaGFycyA9IG5ldyBTZXQoWy4uLmF2YWlsYWJsZUNoYXJzLCAuLi5TUEVDSUFMX0NIQVJBQ1RFUlNdKTtcblxuICB2YWxpZGF0ZUF2YWlsYWJsZUNoYXJzTGVuZ3RoKCk7XG4gIGNvbnNvbGUudGltZUVuZCgndXBkYXRlQXZhaWxhYmxlQ2hhcnMnKTtcbn1cblxuZnVuY3Rpb24gc2hvd05vdGlmaWNhdGlvbigpIHtcbiAgbm90aWZpY2F0aW9uRWwuY2xhc3NMaXN0LnJlbW92ZSgnaXMtaW52aXNpYmxlJyk7XG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIG5vdGlmaWNhdGlvbkVsLmNsYXNzTGlzdC5hZGQoJ2lzLWludmlzaWJsZScpO1xuICB9LCAxMDAwMCk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGNvcHlUb0NsaXBib2FyZCgpIHtcbiAgdHJ5IHtcbiAgICBhd2FpdCBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dChwd2RHZW5lcmF0ZWRFbC5pbm5lclRleHQpO1xuICAgIHNob3dOb3RpZmljYXRpb24oKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgY29weWluZyB0ZXh0OiAnLCBlcnIpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVBhc3N3b3JkKCkge1xuICBpZiAoYXZhaWxhYmxlQ2hhcnMuc2l6ZSA9PT0gMCkge1xuICAgIHJldHVybiAnJztcbiAgfVxuICBjb25zdCBwYXNzd29yZExlbmd0aCA9IGdldFBhc3N3b3JkTGVuZ3RoKCk7XG4gIGNvbnN0IGdlbmVyYXRvciA9IG5ldyBQYXNzd29yZChhdmFpbGFibGVDaGFycywgcGFzc3dvcmRMZW5ndGgpO1xuICByZXR1cm4gZ2VuZXJhdG9yLmdlbmVyYXRlKCk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVBhc3NwaHJhc2UoKSB7XG4gIGNvbnN0IHBhc3NwaHJhc2VMZW5ndGggPSBnZXRQYXNzcGhyYXNlTGVuZ3RoKCk7XG4gIGNvbnN0IHNlcGFyYXRvciA9IGdldFBhc3NwaHJhc2VTZXBhcmF0b3IoKTtcbiAgY29uc3QgY2FwaXRhbGl6ZSA9IHNldHRpbmdzUGFzc3BocmFzZUNhcGl0YWxpemVFbC5jaGVja2VkO1xuICBjb25zdCBpbmNsdWRlTnVtYmVycyA9IHNldHRpbmdzUGFzc3BocmFzZUluY2x1ZGVOdW1iZXJzRWwuY2hlY2tlZDtcbiAgY29uc3QgZ2VuZXJhdG9yID0gbmV3IFBhc3NwaHJhc2UoUEFTU1BIUkFTRV9XT1JETElTVCwgcGFzc3BocmFzZUxlbmd0aCwgc2VwYXJhdG9yLCBpbmNsdWRlTnVtYmVycywgY2FwaXRhbGl6ZSk7XG4gIHJldHVybiBnZW5lcmF0b3IuZ2VuZXJhdGUoKVxufVxuXG5mdW5jdGlvbiB1cGRhdGVQYXNzd29yZFNldHRpbmdzKCkge1xuICBjb25zdCBwd2RNb2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cInB3ZC1tb2RlXCJdOmNoZWNrZWQnKS52YWx1ZTtcbiAgc3dpdGNoIChwd2RNb2RlKSB7XG4gICAgY2FzZSAnZWFzeS10by1yZWFkJzoge1xuICAgICAgc2V0dGluZ3NFeGNsdWRlU2ltaWxhckVsLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgc2V0dGluZ3NFeGNsdWRlRHVwbGljYXRlRWwuY2hlY2tlZCA9IGZhbHNlO1xuXG4gICAgICBzZXR0aW5nc0FsbG93TnVtYmVyc0VsLmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgIHNldHRpbmdzQWxsb3dVcHBlcmNhc2VFbC5jaGVja2VkID0gdHJ1ZTtcbiAgICAgIHNldHRpbmdzQWxsb3dMb3dlcmNhc2VFbC5jaGVja2VkID0gdHJ1ZTtcbiAgICAgIHNldHRpbmdzQWxsb3dTeW1ib2xzRWwuY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGNhc2UgJ2Vhc3ktdG8tc2F5Jzoge1xuICAgICAgc2V0dGluZ3NFeGNsdWRlU2ltaWxhckVsLmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgIHNldHRpbmdzRXhjbHVkZUR1cGxpY2F0ZUVsLmNoZWNrZWQgPSBmYWxzZTtcblxuICAgICAgc2V0dGluZ3NBbGxvd051bWJlcnNFbC5jaGVja2VkID0gZmFsc2U7XG4gICAgICBzZXR0aW5nc0FsbG93VXBwZXJjYXNlRWwuY2hlY2tlZCA9IHRydWU7XG4gICAgICBzZXR0aW5nc0FsbG93TG93ZXJjYXNlRWwuY2hlY2tlZCA9IHRydWU7XG4gICAgICBzZXR0aW5nc0FsbG93U3ltYm9sc0VsLmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBjYXNlICdhbGwtY2hhcmFjdGVycyc6XG4gICAgZGVmYXVsdDoge1xuICAgICAgc2V0dGluZ3NFeGNsdWRlU2ltaWxhckVsLmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgIHNldHRpbmdzRXhjbHVkZUR1cGxpY2F0ZUVsLmNoZWNrZWQgPSBmYWxzZTtcblxuICAgICAgc2V0dGluZ3NBbGxvd051bWJlcnNFbC5jaGVja2VkID0gdHJ1ZTtcbiAgICAgIHNldHRpbmdzQWxsb3dVcHBlcmNhc2VFbC5jaGVja2VkID0gdHJ1ZTtcbiAgICAgIHNldHRpbmdzQWxsb3dMb3dlcmNhc2VFbC5jaGVja2VkID0gdHJ1ZTtcbiAgICAgIHNldHRpbmdzQWxsb3dTeW1ib2xzRWwuY2hlY2tlZCA9IHRydWU7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgdXBkYXRlQXZhaWxhYmxlQ2hhcnMoKTtcbn1cblxuZnVuY3Rpb24gc2V0U3RyZW5ndGgoc3RyZW5ndGgpIHtcbiAgYm9keWRFbC5jbGFzc0xpc3QucmVtb3ZlKFxuICAgICdpcy1kYW5nZXInLFxuICAgICdpcy13YXJuaW5nJyxcbiAgICAnaXMtaW5mbycsXG4gICAgJ2lzLXN1Y2Nlc3MnLFxuICApO1xuICBwd2RHZW5lcmF0ZWRTdHJlbmd0aEVsLmNsYXNzTGlzdC5yZW1vdmUoXG4gICAgJ2lzLWRhbmdlcicsXG4gICAgJ2lzLXdhcm5pbmcnLFxuICAgICdpcy1pbmZvJyxcbiAgICAnaXMtc3VjY2VzcycsXG4gICk7XG4gIHB3ZENvbnRhaW5lckVsLmNsYXNzTGlzdC5yZW1vdmUoXG4gICAgJ2lzLWRhbmdlcicsXG4gICAgJ2lzLXdhcm5pbmcnLFxuICAgICdpcy1pbmZvJyxcbiAgICAnaXMtc3VjY2VzcycsXG4gICk7XG4gIHNldHRpbmdzUGFzc3dvcmRMZW5ndGhSYW5nZUVsLmNsYXNzTGlzdC5yZW1vdmUoXG4gICAgJ2lzLWRhbmdlcicsXG4gICAgJ2lzLXdhcm5pbmcnLFxuICAgICdpcy1pbmZvJyxcbiAgICAnaXMtc3VjY2VzcycsXG4gICk7XG4gIHB3ZEdlbmVyYXRlZFN0cmVuZ3RoVGFnQm94RWwuY2xhc3NMaXN0LnJlbW92ZShcbiAgICAnaGFzLWJhY2tncm91bmQtZGFuZ2VyJyxcbiAgICAnaGFzLWJhY2tncm91bmQtd2FybmluZycsXG4gICAgJ2hhcy1iYWNrZ3JvdW5kLWluZm8nLFxuICAgICdoYXMtYmFja2dyb3VuZC1zdWNjZXNzJyxcbiAgICAnaGFzLXRleHQtZGFuZ2VyLWxpZ2h0JyxcbiAgICAnaGFzLXRleHQtd2FybmluZy1kYXJrJyxcbiAgICAnaGFzLXRleHQtaW5mby1saWdodCcsXG4gICAgJ2hhcy10ZXh0LXN1Y2Nlc3MtbGlnaHQnXG4gICk7XG5cbiAgaWYgKHN0cmVuZ3RoIDwgMjgpIHtcbiAgICAvLyBNb2x0byBkZWJvbGVcbiAgICBib2R5ZEVsLmNsYXNzTGlzdC5hZGQoJ2lzLWRhbmdlcicpO1xuICAgIHB3ZENvbnRhaW5lckVsLmNsYXNzTGlzdC5hZGQoJ2lzLWRhbmdlcicpO1xuICAgIHB3ZEdlbmVyYXRlZFN0cmVuZ3RoRWwuY2xhc3NMaXN0LmFkZCgnaXMtZGFuZ2VyJyk7XG4gICAgc2V0dGluZ3NQYXNzd29yZExlbmd0aFJhbmdlRWwuY2xhc3NMaXN0LmFkZCgnaXMtZGFuZ2VyJyk7XG4gICAgcHdkR2VuZXJhdGVkU3RyZW5ndGhUYWdCb3hFbC5jbGFzc0xpc3QuYWRkKCdoYXMtYmFja2dyb3VuZC1kYW5nZXInLCAnaGFzLXRleHQtZGFuZ2VyLWxpZ2h0Jyk7XG4gICAgcHdkR2VuZXJhdGVkU3RyZW5ndGhUYWdFbC5pbm5lclRleHQgPSAnVG9vIGVhc3kgdG8gZ3Vlc3MnO1xuICB9IGVsc2UgaWYgKHN0cmVuZ3RoIDwgMzYpIHtcbiAgICAvLyBEZWJvbGVcbiAgICBib2R5ZEVsLmNsYXNzTGlzdC5hZGQoJ2lzLXdhcm5pbmcnKTtcbiAgICBwd2RDb250YWluZXJFbC5jbGFzc0xpc3QuYWRkKCdpcy13YXJuaW5nJyk7XG4gICAgcHdkR2VuZXJhdGVkU3RyZW5ndGhFbC5jbGFzc0xpc3QuYWRkKCdpcy13YXJuaW5nJyk7XG4gICAgc2V0dGluZ3NQYXNzd29yZExlbmd0aFJhbmdlRWwuY2xhc3NMaXN0LmFkZCgnaXMtd2FybmluZycpO1xuICAgIHB3ZEdlbmVyYXRlZFN0cmVuZ3RoVGFnQm94RWwuY2xhc3NMaXN0LmFkZCgnaGFzLWJhY2tncm91bmQtd2FybmluZycsICdoYXMtdGV4dC13YXJuaW5nLWRhcmsnKTtcbiAgICBwd2RHZW5lcmF0ZWRTdHJlbmd0aFRhZ0VsLmlubmVyVGV4dCA9ICdBdCByaXNrIG9mIGJlaW5nIGNvbXByb21pc2VkJztcblxuICB9IGVsc2UgaWYgKHN0cmVuZ3RoIDwgNjApIHtcbiAgICAvLyBCdW9uYVxuICAgIGJvZHlkRWwuY2xhc3NMaXN0LmFkZCgnaXMtaW5mbycpO1xuICAgIHB3ZENvbnRhaW5lckVsLmNsYXNzTGlzdC5hZGQoJ2lzLWluZm8nKTtcbiAgICBwd2RHZW5lcmF0ZWRTdHJlbmd0aEVsLmNsYXNzTGlzdC5hZGQoJ2lzLWluZm8nKTtcbiAgICBzZXR0aW5nc1Bhc3N3b3JkTGVuZ3RoUmFuZ2VFbC5jbGFzc0xpc3QuYWRkKCdpcy1pbmZvJyk7XG4gICAgcHdkR2VuZXJhdGVkU3RyZW5ndGhUYWdCb3hFbC5jbGFzc0xpc3QuYWRkKCdoYXMtYmFja2dyb3VuZC1pbmZvJywgJ2hhcy10ZXh0LWluZm8tbGlnaHQnKTtcbiAgICBwd2RHZW5lcmF0ZWRTdHJlbmd0aFRhZ0VsLmlubmVyVGV4dCA9ICdTZWN1cmUgZm9yIG5vcm1hbCB1c2UnO1xuXG4gIH0gZWxzZSB7XG4gICAgLy8gTW9sdG8gc2ljdXJhXG4gICAgYm9keWRFbC5jbGFzc0xpc3QuYWRkKCdpcy1zdWNjZXNzJyk7XG4gICAgcHdkQ29udGFpbmVyRWwuY2xhc3NMaXN0LmFkZCgnaXMtc3VjY2VzcycpO1xuICAgIHB3ZEdlbmVyYXRlZFN0cmVuZ3RoRWwuY2xhc3NMaXN0LmFkZCgnaXMtc3VjY2VzcycpO1xuICAgIHNldHRpbmdzUGFzc3dvcmRMZW5ndGhSYW5nZUVsLmNsYXNzTGlzdC5hZGQoJ2lzLXN1Y2Nlc3MnKTtcbiAgICBwd2RHZW5lcmF0ZWRTdHJlbmd0aFRhZ0JveEVsLmNsYXNzTGlzdC5hZGQoJ2hhcy1iYWNrZ3JvdW5kLXN1Y2Nlc3MnLCAnaGFzLXRleHQtc3VjY2Vzcy1saWdodCcpO1xuICAgIHB3ZEdlbmVyYXRlZFN0cmVuZ3RoVGFnRWwuaW5uZXJUZXh0ID0gJ1Byb3RlY3RzIGFnYWluc3QgaGFja2luZyBhdHRlbXB0cyc7XG5cbiAgfVxufVxuXG5mdW5jdGlvbiB0b2dnbGVQd2RUeXBlKGV2ZW50KSB7XG4gIGlmIChldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2lzLWFjdGl2ZScpKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI3B3ZC10eXBlLXNlbGVjdG9yLXRhYiBsaSBhJykuZm9yRWFjaChlbCA9PiBlbC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWFjdGl2ZScpKTtcbiAgY29uc3QgdHlwZSA9IGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdHlwZScpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2V0dGluZ3MnKS5mb3JFYWNoKGVsID0+IHtcbiAgICBpZiAoIWVsLmNsYXNzTGlzdC5jb250YWlucygnaXMtaGlkZGVuJykpIHtcbiAgICAgIGVsLmNsYXNzTGlzdC5hZGQoJ2lzLWhpZGRlbicpXG4gICAgfVxuICB9KTtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7dHlwZX0tc2V0dGluZ3NgKS5jbGFzc0xpc3QucmVtb3ZlKCdpcy1oaWRkZW4nKTtcbiAgZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaXMtYWN0aXZlJyk7XG5cbiAgaGFuZGxlUGFzc3dvcmRDcmVhdGlvbigpO1xufVxuXG5mdW5jdGlvbiBiaW5kRXZlbnRzKCkge1xuICBzZXR0aW5nc1Bhc3N3b3JkTGVuZ3RoUmFuZ2VFbC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcbiAgICBzZXR0aW5nc1Bhc3N3b3JkTGVuZ3RoRWwudmFsdWUgPSBzZXR0aW5nc1Bhc3N3b3JkTGVuZ3RoUmFuZ2VFbC52YWx1ZTtcbiAgICBoYW5kbGVQYXNzd29yZENyZWF0aW9uKClcbiAgfSk7XG4gIHNldHRpbmdzUGFzc3BocmFzZUxlbmd0aFJhbmdlRWwuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XG4gICAgc2V0dGluZ3NQYXNzcGhyYXNlTGVuZ3RoRWwudmFsdWUgPSBzZXR0aW5nc1Bhc3NwaHJhc2VMZW5ndGhSYW5nZUVsLnZhbHVlO1xuICAgIGhhbmRsZVBhc3N3b3JkQ3JlYXRpb24oKVxuICB9KTtcbiAgc2V0dGluZ3NQYXNzcGhyYXNlU2VwYXJhdG9yRWwuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoKSA9PiB7XG4gICAgaGFuZGxlUGFzc3dvcmRDcmVhdGlvbigpO1xuICB9KTtcblxuICBzZXR0aW5nc1Bhc3N3b3JkTGVuZ3RoRWwuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgIGlmIChzZXR0aW5nc1Bhc3N3b3JkTGVuZ3RoRWwudmFsdWUgPCAxKSB7XG4gICAgICBzZXR0aW5nc1Bhc3N3b3JkTGVuZ3RoRWwudmFsdWUgPSAxO1xuICAgIH1cbiAgICBpZiAoc2V0dGluZ3NQYXNzd29yZExlbmd0aEVsLnZhbHVlID4gMjU2KSB7XG4gICAgICBzZXR0aW5nc1Bhc3N3b3JkTGVuZ3RoRWwudmFsdWUgPSAyNTY7XG4gICAgfVxuICAgIHNldHRpbmdzUGFzc3dvcmRMZW5ndGhSYW5nZUVsLnZhbHVlID0gc2V0dGluZ3NQYXNzd29yZExlbmd0aEVsLnZhbHVlO1xuICAgIGhhbmRsZVBhc3N3b3JkQ3JlYXRpb24oKTtcbiAgfSk7XG5cbiAgbm90aWZpY2F0aW9uRGVsZXRlQnRuRWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgbm90aWZpY2F0aW9uRWwuY2xhc3NMaXN0LmFkZCgnaXMtaW52aXNpYmxlJyk7XG4gIH0pO1xuXG4gIGFjdGlvblJlZG9FbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZVBhc3N3b3JkQ3JlYXRpb24pO1xuXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhY3Rpb24tY29weS10by1jbGlwYm9hcmQnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNvcHlUb0NsaXBib2FyZCk7XG5cbiAgZm9yIChsZXQgZWwgb2YgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc2V0dGluZy1lbGVtZW50JykpIHtcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICB1cGRhdGVBdmFpbGFibGVDaGFycygpO1xuICAgICAgaGFuZGxlUGFzc3dvcmRDcmVhdGlvbigpO1xuICAgIH0pO1xuICB9XG5cbiAgZm9yIChsZXQgZWwgb2YgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc2V0dGluZy1wd2QtbW9kZScpKSB7XG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgdXBkYXRlUGFzc3dvcmRTZXR0aW5ncygpXG4gICAgICBoYW5kbGVQYXNzd29yZENyZWF0aW9uKClcbiAgICB9KTtcbiAgfVxuXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNwd2QtdHlwZS1zZWxlY3Rvci10YWIgbGkgYScpLmZvckVhY2goKGVsKSA9PiB7XG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGVQd2RUeXBlKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHdyaXRlV2VsbGNvbWVNZXNzYWdlKCkge1xuICBjb25zdCB3ZWxsY29tZU1lc3NhZ2VTZXR0aW5ncyA9ICdjb2xvcjojM2U4ZWQwOyBmb250LXNpemU6IDE2cHg7IGZvbnQtd2VpZ2h0OiA3MDA7IGZvbnQtZmFtaWx5OiBtb25vc3BhY2UnO1xuICBjb25zb2xlLmluZm8oJyVj4qCA4qCA4qCAIOKggOKggOKggCDioIDioIDioIAg4qCA4qCA4qCAIOKggOKggOKggCDioIDioIDioIAg4qCA4qCA4qCAIOKggOKggOKggCDioIDioIDioIAg4qCA4qCA4qCAIOKggOKggOKggCDioIDioIDioIAg4qCA4qCA4qCAIOKggOKggOKggCcsIHdlbGxjb21lTWVzc2FnZVNldHRpbmdzKTtcbiAgY29uc29sZS5pbmZvKCclY+KggOKggOKggCBXZWxjb21lIHRvIHRoZSBkZXZlbG9wZXIgdmF1bHQhLiAgICAgICAgICAgICAgICAgICAgIOKggOKggOKggCcsIHdlbGxjb21lTWVzc2FnZVNldHRpbmdzKTtcbiAgY29uc29sZS5pbmZvKCclY+KggOKggOKggCBUb3Agc2VjcmV0IHBhc3N3b3JkIGdlbmVyYXRpb24gaGFwcGVucyBoZXJlLi4uICAgICAgIOKggOKggOKggCcsIHdlbGxjb21lTWVzc2FnZVNldHRpbmdzKTtcbiAgY29uc29sZS5pbmZvKCclY+KggOKggOKggCBNb3N0bHkuIF5fXiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOKggOKggOKggCcsIHdlbGxjb21lTWVzc2FnZVNldHRpbmdzKTtcbiAgY29uc29sZS5pbmZvKCclY+KggOKggOKggCDioIDioIDioIAg4qCA4qCA4qCAIOKggOKggOKggCDioIDioIDioIAg4qCA4qCA4qCAIOKggOKggOKggCDioIDioIDioIAg4qCA4qCA4qCAIOKggOKggOKggCDioIDioIDioIAg4qCA4qCA4qCAIOKggOKggOKggCDioIDioIDioIAnLCB3ZWxsY29tZU1lc3NhZ2VTZXR0aW5ncyk7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlQYWdlKCkge1xuICBkb2N1bWVudC5ib2R5LnN0eWxlID0gJ2Rpc3BsYXk6IGF1dG8nO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVQYXNzd29yZENyZWF0aW9uKCkge1xuICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3B3ZC10eXBlLXNlbGVjdG9yLXRhYiBsaS5pcy1hY3RpdmUgYScpLmdldEF0dHJpYnV0ZSgnZGF0YS10eXBlJykgPT09ICdwYXNzcGhyYXNlJykge1xuICAgIGNvbnN0IHsgcGFzc3BocmFzZSwgc3RyZW5ndGggfSA9IGNyZWF0ZVBhc3NwaHJhc2UoKTtcbiAgICBwd2RHZW5lcmF0ZWRFbC5pbm5lckhUTUwgPSBwYXNzcGhyYXNlO1xuICAgIHNldFN0cmVuZ3RoKHN0cmVuZ3RoKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCB7IHBhc3N3b3JkLCBzdHJlbmd0aCB9ID0gY3JlYXRlUGFzc3dvcmQoKTtcbiAgcHdkR2VuZXJhdGVkRWwuaW5uZXJIVE1MID0gcGFzc3dvcmQ7XG4gIHNldFN0cmVuZ3RoKHN0cmVuZ3RoKTtcbn1cblxuZnVuY3Rpb24gaW5pdGFsaXplUGFnZUVsZW1lbnRzKCkge1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2V0dGluZ3MtYWxsb3ctc3ltYm9scy1saXN0JykuaW5uZXJIVE1MID0gQXJyYXkuZnJvbShTUEVDSUFMX0NIQVJBQ1RFUlMpLm1hcCgoZWwpID0+XG4gICAgU3RyaW5nLmZyb21DaGFyQ29kZShlbClcbiAgKTtcbn1cblxuLy8gSW5pdFxuZnVuY3Rpb24gaW5pdCgpIHtcbiAgd3JpdGVXZWxsY29tZU1lc3NhZ2UoKTtcblxuICBiaW5kRXZlbnRzKCk7XG4gIGluaXRhbGl6ZVBhZ2VFbGVtZW50cygpO1xuXG4gIC8vIFVwZGF0ZSB0aGUgQXZhaWxhYmxlQ2hhcnMgYXJyYXkgYmFzZWQgb24gdGhlIGh0bWwgZGVmYXVsdFxuICAvLyBhbmQgY3JlYXRlIHRoZSBmaXJzdCBwYXNzd29yZFxuICB1cGRhdGVBdmFpbGFibGVDaGFycygpO1xuICBoYW5kbGVQYXNzd29yZENyZWF0aW9uKCk7XG5cbiAgLy8gU2hvdyBjb250ZW50IG9ubHkgd2hlbiBwYWdlIGlzIGxvYWRlZFxuICBkaXNwbGF5UGFnZSgpO1xufVxuXG53aW5kb3cub25sb2FkID0gaW5pdDtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==