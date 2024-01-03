"use strict";
(self["webpackChunkbase_template"] = self["webpackChunkbase_template"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.root {
  font-size: 20px;
}

html {
  height: 100vh;
}

body {
  height: 100%;
  font-family: "Roboto", sans-serif;
}

.container {
  height: 100%;
  width: 70%;
  margin: 0 auto;
  display: grid;
  grid-template-rows: auto 1fr auto;
}

.header {
  grid-row: 1 / 2;
  font-weight: bold;
}

.content {
  grid-row: 2 / 3;
  padding: 20px;
  grid-column: 0.7fr 0.3fr;
  background-color: rgb(193, 210, 236);
}

.footer {
  grid-row: 3 / 4;
}

.header,
.footer {
  display: flex;
  justify-content: center;
  color: white;
  background-color: rgb(114, 114, 196);
  padding: 10px;

  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  z-index: 1;
}

.city-name,
.calendar {
  padding: 5px;
}

.weather-input {
  display: flex;
  gap: 20px;
  margin-bottom: 10px;  
}

.weathers {
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.weather {
  display: grid;
  color: rgb(255, 255, 255);
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  background-color: rgba(0, 0, 0, 0.145);
  padding: 10px 20px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  letter-spacing: 1px;
}

.weather-time {
  grid-column: 1 / 3;
  font-size: 1.2rem;
}


.weather-temperature::before {
  content: "Temp: ";
}
.weather-temperature::after {
  content: "°C";
}

.weather-humidity::before {
  content: "Humidity: ";
}
.weather-weather::before {
  content: "Weather: ";
}

#city-name{
    border: 1px solid snow;
}

button {
    color: white;
    background-color: rgb(134, 134, 183);
    border: 1px solid snow;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;EACE,eAAe;AACjB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,YAAY;EACZ,iCAAiC;AACnC;;AAEA;EACE,YAAY;EACZ,UAAU;EACV,cAAc;EACd,aAAa;EACb,iCAAiC;AACnC;;AAEA;EACE,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,eAAe;EACf,aAAa;EACb,wBAAwB;EACxB,oCAAoC;AACtC;;AAEA;EACE,eAAe;AACjB;;AAEA;;EAEE,aAAa;EACb,uBAAuB;EACvB,YAAY;EACZ,oCAAoC;EACpC,aAAa;;EAEb,2CAA2C;EAC3C,UAAU;AACZ;;AAEA;;EAEE,YAAY;AACd;;AAEA;EACE,aAAa;EACb,SAAS;EACT,mBAAmB;AACrB;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;EACE,aAAa;EACb,yBAAyB;EACzB,8BAA8B;EAC9B,+BAA+B;EAC/B,sCAAsC;EACtC,kBAAkB;EAClB,2CAA2C;EAC3C,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,iBAAiB;AACnB;;;AAGA;EACE,iBAAiB;AACnB;AACA;EACE,aAAa;AACf;;AAEA;EACE,qBAAqB;AACvB;AACA;EACE,oBAAoB;AACtB;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,YAAY;IACZ,oCAAoC;IACpC,sBAAsB;AAC1B","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap\");\r\n\r\n.root {\r\n  font-size: 20px;\r\n}\r\n\r\nhtml {\r\n  height: 100vh;\r\n}\r\n\r\nbody {\r\n  height: 100%;\r\n  font-family: \"Roboto\", sans-serif;\r\n}\r\n\r\n.container {\r\n  height: 100%;\r\n  width: 70%;\r\n  margin: 0 auto;\r\n  display: grid;\r\n  grid-template-rows: auto 1fr auto;\r\n}\r\n\r\n.header {\r\n  grid-row: 1 / 2;\r\n  font-weight: bold;\r\n}\r\n\r\n.content {\r\n  grid-row: 2 / 3;\r\n  padding: 20px;\r\n  grid-column: 0.7fr 0.3fr;\r\n  background-color: rgb(193, 210, 236);\r\n}\r\n\r\n.footer {\r\n  grid-row: 3 / 4;\r\n}\r\n\r\n.header,\r\n.footer {\r\n  display: flex;\r\n  justify-content: center;\r\n  color: white;\r\n  background-color: rgb(114, 114, 196);\r\n  padding: 10px;\r\n\r\n  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\r\n  z-index: 1;\r\n}\r\n\r\n.city-name,\r\n.calendar {\r\n  padding: 5px;\r\n}\r\n\r\n.weather-input {\r\n  display: flex;\r\n  gap: 20px;\r\n  margin-bottom: 10px;  \r\n}\r\n\r\n.weathers {\r\n    margin-top: 10px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 10px;\r\n}\r\n\r\n.weather {\r\n  display: grid;\r\n  color: rgb(255, 255, 255);\r\n  grid-template-columns: 1fr 1fr;\r\n  grid-template-rows: 1fr 1fr 1fr;\r\n  background-color: rgba(0, 0, 0, 0.145);\r\n  padding: 10px 20px;\r\n  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\r\n  letter-spacing: 1px;\r\n}\r\n\r\n.weather-time {\r\n  grid-column: 1 / 3;\r\n  font-size: 1.2rem;\r\n}\r\n\r\n\r\n.weather-temperature::before {\r\n  content: \"Temp: \";\r\n}\r\n.weather-temperature::after {\r\n  content: \"°C\";\r\n}\r\n\r\n.weather-humidity::before {\r\n  content: \"Humidity: \";\r\n}\r\n.weather-weather::before {\r\n  content: \"Weather: \";\r\n}\r\n\r\n#city-name{\r\n    border: 1px solid snow;\r\n}\r\n\r\nbutton {\r\n    color: white;\r\n    background-color: rgb(134, 134, 183);\r\n    border: 1px solid snow;\r\n}\r\n"],"sourceRoot":""}]);
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

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/GeoThailandAPI.js":
/*!*******************************!*\
  !*** ./src/GeoThailandAPI.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GeoThailandAPI)
/* harmony export */ });
class GeoThailandAPI {
  #data;

  #lat;

  #lon;

  constructor() {
    this.openWeatherApiKey = "b25f6dd7ac0f5ab004904227f8553e00";
    this.countryCode = "66";
  }

  async fetchDataByCityName(cityName) {
    const url = `https://api.openweathermap.org/geo/1.0/direct?q=${cityName},,${this.countryCode}&appid=${this.openWeatherApiKey}`;
    const response = await fetch(url, { type: "cors" });
    const data = await response.json();
    this.#data = data[0];
    this.#lat = this.#data.lat;
    this.#lon = this.#data.lon;

  }


  getLat() {
    return this.#lat;
  }

  getLon() {
    return this.#lon;
  }

  getData() {
    return this.#data;
  }




}


/***/ }),

/***/ "./src/WeatherAPI.js":
/*!***************************!*\
  !*** ./src/WeatherAPI.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ WeatherAPI)
/* harmony export */ });
/* harmony import */ var _GeoThailandAPI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GeoThailandAPI */ "./src/GeoThailandAPI.js");
/* harmony import */ var _WeatherDTO__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WeatherDTO */ "./src/WeatherDTO.js");
/* harmony import */ var _kelvinToCelcius__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./kelvinToCelcius */ "./src/kelvinToCelcius.js");




class WeatherAPI {
  #geoAPI;
  #apiKey;

  constructor() {
    this.#geoAPI = new _GeoThailandAPI__WEBPACK_IMPORTED_MODULE_0__["default"]();
    this.#apiKey = "b25f6dd7ac0f5ab004904227f8553e00";
  }

  async fetchDataByCityName(name) {
    await this.#geoAPI.fetchDataByCityName(name);
    const lat = this.#geoAPI.getLat();
    const lon = this.#geoAPI.getLon();

    return this.fetchDataByLatAndLon(lat, lon)
  }

  async fetchDataByLatAndLon(lat, lon) {
    const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${this.#apiKey}`;
    const response = await fetch(url, { type: "cors" });
    const data = await response.json();

    const rawDataArray = data.list;

    return rawDataArray;
  }


}


/***/ }),

/***/ "./src/WeatherController.js":
/*!**********************************!*\
  !*** ./src/WeatherController.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ WeatherController)
/* harmony export */ });
/* harmony import */ var _WeatherAPI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WeatherAPI */ "./src/WeatherAPI.js");
/* harmony import */ var _WeatherDTO__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WeatherDTO */ "./src/WeatherDTO.js");
/* harmony import */ var _kelvinToCelcius__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./kelvinToCelcius */ "./src/kelvinToCelcius.js");




class WeatherController {
  weatherAPI;

  weathersByDate;

  cityName;

  constructor() {
    this.weatherAPI = new _WeatherAPI__WEBPACK_IMPORTED_MODULE_0__["default"]();
  }

  async getWeathersByCityName(cityName) {

    if (cityName === this.cityName) {
      return this.getWeathersByDate(new Date().toISOString().split("T")[0]);
    }

    this.weathersByDate = new Map();
    const rawDataArray = await this.weatherAPI.fetchDataByCityName(cityName);

    rawDataArray.forEach((rawData) => {
      const weather = this.convertRawDataAsWeatherDTO(rawData);
      this.saveData(weather);
    });

    this.cityName = cityName;

    return this.getWeathersByDate(new Date().toISOString().split("T")[0]);
  }

  getWeathersByDate(date){ 

    if (!this.weathersByDate.has(date)) {
      return [];
    }
    
    return this.weathersByDate.get(date);
  }

  saveData(weather) {
    const key = weather.date;

    if (!this.weathersByDate.has(key)) {
        this.weathersByDate.set(key, [])
    }

    this.weathersByDate.get(key).push(weather);
  }

  convertRawDataAsWeatherDTO(rawData) {
    const dateTime = rawData.dt_txt;
    const dateTimeArray = dateTime.split(" ");
    const date = dateTimeArray[0];
    const time = dateTimeArray[1].split(":").slice(0, 2).join(":");
    const temperature = Math.round((0,_kelvinToCelcius__WEBPACK_IMPORTED_MODULE_2__["default"])(rawData.main.temp));
    const {humidity} = rawData.main;
    const weather = rawData.weather[0].main;
    return new _WeatherDTO__WEBPACK_IMPORTED_MODULE_1__["default"](date, time, temperature, humidity, weather);
  }
}



/***/ }),

/***/ "./src/WeatherDTO.js":
/*!***************************!*\
  !*** ./src/WeatherDTO.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ WeatherDTO)
/* harmony export */ });
class WeatherDTO {

    constructor(date, time, tempCelcius, humidity, weather) {
        this.date = date;
        this.time = time;
        this.temperature = tempCelcius;
        this.humidity = humidity;
        this.weather = weather;
    }

}

/***/ }),

/***/ "./src/WeatherView.js":
/*!****************************!*\
  !*** ./src/WeatherView.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ WeatherView)
/* harmony export */ });
/* harmony import */ var _WeatherController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WeatherController */ "./src/WeatherController.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common */ "./src/common.js");



class WeatherView {
  weatherController;

  constructor() {
    this.weatherController = new _WeatherController__WEBPACK_IMPORTED_MODULE_0__["default"]();
  }

  render(weathers) {
    const weathersElement = document.querySelector(".weathers");
    weathersElement.innerHTML = "";

    for (let i = 0; i < weathers.length; i++) {
      weathersElement.appendChild(this.weatherToDiv(weathers[i]));
    }
  }

  createEmptyWeathers() {
    const weathersElement = (0,_common__WEBPACK_IMPORTED_MODULE_1__["default"])("div", "weathers");
    return weathersElement;
  }

  async loadWeathers(cityName) {
    const weathers =
      await this.weatherController.getWeathersByCityName(cityName);
    return weathers;
  }

  weatherToDiv(weatherDTO) {
    const { date, time, temperature, humidity, weather } = weatherDTO;

    const classNameList = [
      "weather-time",
      "weather-temperature",
      "weather-humidity",
      "weather-weather",
    ];
    const valueList = [time, temperature, humidity, weather];

    const weatherElement = (0,_common__WEBPACK_IMPORTED_MODULE_1__["default"])("div", "weather");

    for (let i = 0; i < classNameList.length; i++) {
      const element = (0,_common__WEBPACK_IMPORTED_MODULE_1__["default"])("div", classNameList[i]);
      element.textContent = valueList[i];
      weatherElement.appendChild(element);
    }

    return weatherElement;
  }

  createCalendar() {
    const calendar = (0,_common__WEBPACK_IMPORTED_MODULE_1__["default"])("input", "calendar");
    calendar.id = "calendar";

    calendar.setAttribute("type", "date");
    calendar.value = new Date().toISOString().split("T")[0];

    // attach re-render data event (onchange)
    calendar.addEventListener("change", (e) => {
      const destinationDate = e.target.value;
      const newWeathersData =
        this.weatherController.getWeathersByDate(destinationDate);
      this.render(newWeathersData);
    });

    return calendar;
  }

  setTodayCalendar() {
    const calendar = document.querySelector("#calendar");
    const formattedDate = new Date().toISOString().split("T")[0];
    calendar.value = formattedDate;
  }

  createInputDiv() {
    const inputDiv = (0,_common__WEBPACK_IMPORTED_MODULE_1__["default"])("div", "weather-input");

    const cityNameInput = (0,_common__WEBPACK_IMPORTED_MODULE_1__["default"])("input", "city-name");
    cityNameInput.id = "city-name";
    cityNameInput.setAttribute("placeholder", "City Name");
    cityNameInput.value = "Bangkok";

    const button = (0,_common__WEBPACK_IMPORTED_MODULE_1__["default"])("button", "city-name-btn");
    button.textContent = "Search";
    button.addEventListener("click", async () => {
      const newCityName = document.querySelector("#city-name").value;
      const newData =
        await this.weatherController.getWeathersByCityName(newCityName);
      this.render(newData);
      // set default as today
      this.setTodayCalendar();
    });

    inputDiv.appendChild(cityNameInput);
    inputDiv.appendChild(button);

    return inputDiv;
  }
}


/***/ }),

/***/ "./src/base.js":
/*!*********************!*\
  !*** ./src/base.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ insertBaseInBody)
/* harmony export */ });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ "./src/common.js");


const createHeader = () => {
  const header = (0,_common__WEBPACK_IMPORTED_MODULE_0__["default"])("div", "header");
  header.textContent = "Weather Application By The Odin Project";
  return header;
};

const createContent = () => {
  const content = (0,_common__WEBPACK_IMPORTED_MODULE_0__["default"])("div", "content");
  return content;
};

const createFooter = () => {
  const footer = (0,_common__WEBPACK_IMPORTED_MODULE_0__["default"])("div", "footer");
  footer.textContent = "APIs provided by openweather.org";
  return footer;
};

function insertBaseInBody() {
  const container = (0,_common__WEBPACK_IMPORTED_MODULE_0__["default"])("div", "container");
  const body = document.querySelector("body");

  container.appendChild(createHeader());
  container.appendChild(createContent());
  container.appendChild(createFooter());

  body.appendChild(container);
}


/***/ }),

/***/ "./src/common.js":
/*!***********************!*\
  !*** ./src/common.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createElementWithClassName)
/* harmony export */ });

function createElementWithClassName(type, className) {
    const newElement = document.createElement(type);
    newElement.className = className;
    return newElement;
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base */ "./src/base.js");
/* harmony import */ var _WeatherView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./WeatherView */ "./src/WeatherView.js");




(0,_base__WEBPACK_IMPORTED_MODULE_1__["default"])();

const weatherView = new _WeatherView__WEBPACK_IMPORTED_MODULE_2__["default"]();

const inputDiv = weatherView.createInputDiv();
const calendar = weatherView.createCalendar();
const weathers = weatherView.createEmptyWeathers();
weatherView.loadWeathers("Bangkok")
    .then((data) => weatherView.render(data));


const content = document.querySelector(".content");

content.appendChild(inputDiv);
content.appendChild(calendar);
content.appendChild(weathers);



/***/ }),

/***/ "./src/kelvinToCelcius.js":
/*!********************************!*\
  !*** ./src/kelvinToCelcius.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ kelvinToCelcius)
/* harmony export */ });
function kelvinToCelcius(kelvin){
    return kelvin - 273.15;
}

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRiwrR0FBK0csSUFBSSxJQUFJLElBQUksa0JBQWtCO0FBQzdJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sZ0ZBQWdGLFVBQVUsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxNQUFNLFVBQVUsWUFBWSxXQUFXLFlBQVksWUFBWSxZQUFZLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxRQUFRLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsaUdBQWlHLElBQUksSUFBSSxJQUFJLG9CQUFvQixlQUFlLHNCQUFzQixLQUFLLGNBQWMsb0JBQW9CLEtBQUssY0FBYyxtQkFBbUIsMENBQTBDLEtBQUssb0JBQW9CLG1CQUFtQixpQkFBaUIscUJBQXFCLG9CQUFvQix3Q0FBd0MsS0FBSyxpQkFBaUIsc0JBQXNCLHdCQUF3QixLQUFLLGtCQUFrQixzQkFBc0Isb0JBQW9CLCtCQUErQiwyQ0FBMkMsS0FBSyxpQkFBaUIsc0JBQXNCLEtBQUssNkJBQTZCLG9CQUFvQiw4QkFBOEIsbUJBQW1CLDJDQUEyQyxvQkFBb0Isc0RBQXNELGlCQUFpQixLQUFLLGtDQUFrQyxtQkFBbUIsS0FBSyx3QkFBd0Isb0JBQW9CLGdCQUFnQiw0QkFBNEIsS0FBSyxtQkFBbUIseUJBQXlCLHNCQUFzQiwrQkFBK0Isa0JBQWtCLEtBQUssa0JBQWtCLG9CQUFvQixnQ0FBZ0MscUNBQXFDLHNDQUFzQyw2Q0FBNkMseUJBQXlCLGtEQUFrRCwwQkFBMEIsS0FBSyx1QkFBdUIseUJBQXlCLHdCQUF3QixLQUFLLDBDQUEwQywwQkFBMEIsS0FBSyxpQ0FBaUMsc0JBQXNCLEtBQUssbUNBQW1DLDhCQUE4QixLQUFLLDhCQUE4Qiw2QkFBNkIsS0FBSyxtQkFBbUIsK0JBQStCLEtBQUssZ0JBQWdCLHFCQUFxQiw2Q0FBNkMsK0JBQStCLEtBQUssdUJBQXVCO0FBQ24wRjtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQ25IMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQSxxRkFBcUY7QUFDckY7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIscUJBQXFCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3BGYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQW1HO0FBQ25HO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsc0ZBQU87Ozs7QUFJNkM7QUFDckUsT0FBTyxpRUFBZSxzRkFBTyxJQUFJLHNGQUFPLFVBQVUsc0ZBQU8sbUJBQW1CLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDZCQUE2QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ25GYTs7QUFFYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNqQ2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTtBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQSxpRkFBaUY7QUFDakY7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUM1RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDYmU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixrQ0FBK0I7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtRUFBbUUsU0FBUyxJQUFJLGlCQUFpQixTQUFTLHVCQUF1QjtBQUNqSSx3Q0FBd0MsY0FBYztBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RDOEM7QUFDUjtBQUNVO0FBQ2hEO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qix1REFBYztBQUNyQyxtQkFBbUIsa0NBQStCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3RUFBd0UsSUFBSSxPQUFPLElBQUksU0FBUyxhQUFhO0FBQzdHLHdDQUF3QyxjQUFjO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaENzQztBQUNBO0FBQ1U7QUFDaEQ7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLG1EQUFVO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLDREQUFlO0FBQ2xELFdBQVcsVUFBVTtBQUNyQjtBQUNBLGVBQWUsbURBQVU7QUFDekI7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNoRWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ1ZvRDtBQUNGO0FBQ2xEO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsMERBQWlCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixxQkFBcUI7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixtREFBMEI7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLDZDQUE2QztBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsbURBQTBCO0FBQ3JEO0FBQ0Esb0JBQW9CLDBCQUEwQjtBQUM5QyxzQkFBc0IsbURBQTBCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsbURBQTBCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixtREFBMEI7QUFDL0M7QUFDQSwwQkFBMEIsbURBQTBCO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLG1EQUEwQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDcEdrRDtBQUNsRDtBQUNBO0FBQ0EsaUJBQWlCLG1EQUEwQjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLG1EQUEwQjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixtREFBMEI7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDZTtBQUNmLG9CQUFvQixtREFBMEI7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDNUJBO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNMcUI7QUFDaUI7QUFDRTtBQUN4QztBQUNBLGlEQUFnQjtBQUNoQjtBQUNBLHdCQUF3QixvREFBVztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNwQmU7QUFDZjtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmFzZV90ZW1wbGF0ZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmFzZV90ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmFzZV90ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2Jhc2VfdGVtcGxhdGUvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vYmFzZV90ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXNlX3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXNlX3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2Jhc2VfdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmFzZV90ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2Jhc2VfdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXNlX3RlbXBsYXRlLy4vc3JjL0dlb1RoYWlsYW5kQVBJLmpzIiwid2VicGFjazovL2Jhc2VfdGVtcGxhdGUvLi9zcmMvV2VhdGhlckFQSS5qcyIsIndlYnBhY2s6Ly9iYXNlX3RlbXBsYXRlLy4vc3JjL1dlYXRoZXJDb250cm9sbGVyLmpzIiwid2VicGFjazovL2Jhc2VfdGVtcGxhdGUvLi9zcmMvV2VhdGhlckRUTy5qcyIsIndlYnBhY2s6Ly9iYXNlX3RlbXBsYXRlLy4vc3JjL1dlYXRoZXJWaWV3LmpzIiwid2VicGFjazovL2Jhc2VfdGVtcGxhdGUvLi9zcmMvYmFzZS5qcyIsIndlYnBhY2s6Ly9iYXNlX3RlbXBsYXRlLy4vc3JjL2NvbW1vbi5qcyIsIndlYnBhY2s6Ly9iYXNlX3RlbXBsYXRlLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2Jhc2VfdGVtcGxhdGUvLi9zcmMva2VsdmluVG9DZWxjaXVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOndnaHRAMTAwOzMwMDs0MDA7NTAwOzcwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5yb290IHtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuXHJcbmh0bWwge1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiA3MCU7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyIGF1dG87XHJcbn1cclxuXHJcbi5oZWFkZXIge1xyXG4gIGdyaWQtcm93OiAxIC8gMjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmNvbnRlbnQge1xyXG4gIGdyaWQtcm93OiAyIC8gMztcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIGdyaWQtY29sdW1uOiAwLjdmciAwLjNmcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTkzLCAyMTAsIDIzNik7XHJcbn1cclxuXHJcbi5mb290ZXIge1xyXG4gIGdyaWQtcm93OiAzIC8gNDtcclxufVxyXG5cclxuLmhlYWRlcixcclxuLmZvb3RlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDExNCwgMTE0LCAxOTYpO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcblxyXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4yNCkgMHB4IDNweCA4cHg7XHJcbiAgei1pbmRleDogMTtcclxufVxyXG5cclxuLmNpdHktbmFtZSxcclxuLmNhbGVuZGFyIHtcclxuICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuXHJcbi53ZWF0aGVyLWlucHV0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGdhcDogMjBweDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4OyAgXHJcbn1cclxuXHJcbi53ZWF0aGVycyB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBnYXA6IDEwcHg7XHJcbn1cclxuXHJcbi53ZWF0aGVyIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmciAxZnI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjE0NSk7XHJcbiAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4yNCkgMHB4IDNweCA4cHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxufVxyXG5cclxuLndlYXRoZXItdGltZSB7XHJcbiAgZ3JpZC1jb2x1bW46IDEgLyAzO1xyXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG59XHJcblxyXG5cclxuLndlYXRoZXItdGVtcGVyYXR1cmU6OmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJUZW1wOiBcIjtcclxufVxyXG4ud2VhdGhlci10ZW1wZXJhdHVyZTo6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiwrBDXCI7XHJcbn1cclxuXHJcbi53ZWF0aGVyLWh1bWlkaXR5OjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiSHVtaWRpdHk6IFwiO1xyXG59XHJcbi53ZWF0aGVyLXdlYXRoZXI6OmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJXZWF0aGVyOiBcIjtcclxufVxyXG5cclxuI2NpdHktbmFtZXtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHNub3c7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTM0LCAxMzQsIDE4Myk7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBzbm93O1xyXG59XHJcbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxZQUFZO0VBQ1osaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFVBQVU7RUFDVixjQUFjO0VBQ2QsYUFBYTtFQUNiLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsYUFBYTtFQUNiLHdCQUF3QjtFQUN4QixvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBOztFQUVFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLG9DQUFvQztFQUNwQyxhQUFhOztFQUViLDJDQUEyQztFQUMzQyxVQUFVO0FBQ1o7O0FBRUE7O0VBRUUsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFNBQVM7RUFDVCxtQkFBbUI7QUFDckI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLDhCQUE4QjtFQUM5QiwrQkFBK0I7RUFDL0Isc0NBQXNDO0VBQ3RDLGtCQUFrQjtFQUNsQiwyQ0FBMkM7RUFDM0MsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjs7O0FBR0E7RUFDRSxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLG9DQUFvQztJQUNwQyxzQkFBc0I7QUFDMUJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOndnaHRAMTAwOzMwMDs0MDA7NTAwOzcwMCZkaXNwbGF5PXN3YXBcXFwiKTtcXHJcXG5cXHJcXG4ucm9vdCB7XFxyXFxuICBmb250LXNpemU6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbmh0bWwge1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXIge1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgd2lkdGg6IDcwJTtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnIgYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlciB7XFxyXFxuICBncmlkLXJvdzogMSAvIDI7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRlbnQge1xcclxcbiAgZ3JpZC1yb3c6IDIgLyAzO1xcclxcbiAgcGFkZGluZzogMjBweDtcXHJcXG4gIGdyaWQtY29sdW1uOiAwLjdmciAwLjNmcjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTMsIDIxMCwgMjM2KTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3RlciB7XFxyXFxuICBncmlkLXJvdzogMyAvIDQ7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXIsXFxyXFxuLmZvb3RlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTE0LCAxMTQsIDE5Nik7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcblxcclxcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjI0KSAwcHggM3B4IDhweDtcXHJcXG4gIHotaW5kZXg6IDE7XFxyXFxufVxcclxcblxcclxcbi5jaXR5LW5hbWUsXFxyXFxuLmNhbGVuZGFyIHtcXHJcXG4gIHBhZGRpbmc6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLndlYXRoZXItaW5wdXQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGdhcDogMjBweDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7ICBcXHJcXG59XFxyXFxuXFxyXFxuLndlYXRoZXJzIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ud2VhdGhlciB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmciAxZnI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMTQ1KTtcXHJcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXHJcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4yNCkgMHB4IDNweCA4cHg7XFxyXFxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ud2VhdGhlci10aW1lIHtcXHJcXG4gIGdyaWQtY29sdW1uOiAxIC8gMztcXHJcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4ud2VhdGhlci10ZW1wZXJhdHVyZTo6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJUZW1wOiBcXFwiO1xcclxcbn1cXHJcXG4ud2VhdGhlci10ZW1wZXJhdHVyZTo6YWZ0ZXIge1xcclxcbiAgY29udGVudDogXFxcIsKwQ1xcXCI7XFxyXFxufVxcclxcblxcclxcbi53ZWF0aGVyLWh1bWlkaXR5OjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIkh1bWlkaXR5OiBcXFwiO1xcclxcbn1cXHJcXG4ud2VhdGhlci13ZWF0aGVyOjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIldlYXRoZXI6IFxcXCI7XFxyXFxufVxcclxcblxcclxcbiNjaXR5LW5hbWV7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHNub3c7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbiB7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEzNCwgMTM0LCAxODMpO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCBzbm93O1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2VvVGhhaWxhbmRBUEkge1xyXG4gICNkYXRhO1xyXG5cclxuICAjbGF0O1xyXG5cclxuICAjbG9uO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMub3BlbldlYXRoZXJBcGlLZXkgPSBwcm9jZXNzLmVudi5PUEVOV0VBVEhFUl9BUElfS0VZO1xyXG4gICAgdGhpcy5jb3VudHJ5Q29kZSA9IFwiNjZcIjtcclxuICB9XHJcblxyXG4gIGFzeW5jIGZldGNoRGF0YUJ5Q2l0eU5hbWUoY2l0eU5hbWUpIHtcclxuICAgIGNvbnN0IHVybCA9IGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZ2VvLzEuMC9kaXJlY3Q/cT0ke2NpdHlOYW1lfSwsJHt0aGlzLmNvdW50cnlDb2RlfSZhcHBpZD0ke3RoaXMub3BlbldlYXRoZXJBcGlLZXl9YDtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7IHR5cGU6IFwiY29yc1wiIH0pO1xyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgIHRoaXMuI2RhdGEgPSBkYXRhWzBdO1xyXG4gICAgdGhpcy4jbGF0ID0gdGhpcy4jZGF0YS5sYXQ7XHJcbiAgICB0aGlzLiNsb24gPSB0aGlzLiNkYXRhLmxvbjtcclxuXHJcbiAgfVxyXG5cclxuXHJcbiAgZ2V0TGF0KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuI2xhdDtcclxuICB9XHJcblxyXG4gIGdldExvbigpIHtcclxuICAgIHJldHVybiB0aGlzLiNsb247XHJcbiAgfVxyXG5cclxuICBnZXREYXRhKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuI2RhdGE7XHJcbiAgfVxyXG5cclxuXHJcblxyXG5cclxufVxyXG4iLCJpbXBvcnQgR2VvVGhhaWxhbmRBUEkgZnJvbSBcIi4vR2VvVGhhaWxhbmRBUElcIjtcclxuaW1wb3J0IFdlYXRoZXJEVE8gZnJvbSBcIi4vV2VhdGhlckRUT1wiO1xyXG5pbXBvcnQga2VsdmluVG9DZWxjaXVzIGZyb20gXCIuL2tlbHZpblRvQ2VsY2l1c1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2VhdGhlckFQSSB7XHJcbiAgI2dlb0FQSTtcclxuICAjYXBpS2V5O1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuI2dlb0FQSSA9IG5ldyBHZW9UaGFpbGFuZEFQSSgpO1xyXG4gICAgdGhpcy4jYXBpS2V5ID0gcHJvY2Vzcy5lbnYuT1BFTldFQVRIRVJfQVBJX0tFWTtcclxuICB9XHJcblxyXG4gIGFzeW5jIGZldGNoRGF0YUJ5Q2l0eU5hbWUobmFtZSkge1xyXG4gICAgYXdhaXQgdGhpcy4jZ2VvQVBJLmZldGNoRGF0YUJ5Q2l0eU5hbWUobmFtZSk7XHJcbiAgICBjb25zdCBsYXQgPSB0aGlzLiNnZW9BUEkuZ2V0TGF0KCk7XHJcbiAgICBjb25zdCBsb24gPSB0aGlzLiNnZW9BUEkuZ2V0TG9uKCk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuZmV0Y2hEYXRhQnlMYXRBbmRMb24obGF0LCBsb24pXHJcbiAgfVxyXG5cclxuICBhc3luYyBmZXRjaERhdGFCeUxhdEFuZExvbihsYXQsIGxvbikge1xyXG4gICAgY29uc3QgdXJsID0gYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS9mb3JlY2FzdD9sYXQ9JHtsYXR9Jmxvbj0ke2xvbn0mYXBwaWQ9JHt0aGlzLiNhcGlLZXl9YDtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7IHR5cGU6IFwiY29yc1wiIH0pO1xyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuXHJcbiAgICBjb25zdCByYXdEYXRhQXJyYXkgPSBkYXRhLmxpc3Q7XHJcblxyXG4gICAgcmV0dXJuIHJhd0RhdGFBcnJheTtcclxuICB9XHJcblxyXG5cclxufVxyXG4iLCJpbXBvcnQgV2VhdGhlckFQSSBmcm9tIFwiLi9XZWF0aGVyQVBJXCI7XHJcbmltcG9ydCBXZWF0aGVyRFRPIGZyb20gXCIuL1dlYXRoZXJEVE9cIjtcclxuaW1wb3J0IGtlbHZpblRvQ2VsY2l1cyBmcm9tIFwiLi9rZWx2aW5Ub0NlbGNpdXNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdlYXRoZXJDb250cm9sbGVyIHtcclxuICB3ZWF0aGVyQVBJO1xyXG5cclxuICB3ZWF0aGVyc0J5RGF0ZTtcclxuXHJcbiAgY2l0eU5hbWU7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy53ZWF0aGVyQVBJID0gbmV3IFdlYXRoZXJBUEkoKTtcclxuICB9XHJcblxyXG4gIGFzeW5jIGdldFdlYXRoZXJzQnlDaXR5TmFtZShjaXR5TmFtZSkge1xyXG5cclxuICAgIGlmIChjaXR5TmFtZSA9PT0gdGhpcy5jaXR5TmFtZSkge1xyXG4gICAgICByZXR1cm4gdGhpcy5nZXRXZWF0aGVyc0J5RGF0ZShuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc3BsaXQoXCJUXCIpWzBdKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLndlYXRoZXJzQnlEYXRlID0gbmV3IE1hcCgpO1xyXG4gICAgY29uc3QgcmF3RGF0YUFycmF5ID0gYXdhaXQgdGhpcy53ZWF0aGVyQVBJLmZldGNoRGF0YUJ5Q2l0eU5hbWUoY2l0eU5hbWUpO1xyXG5cclxuICAgIHJhd0RhdGFBcnJheS5mb3JFYWNoKChyYXdEYXRhKSA9PiB7XHJcbiAgICAgIGNvbnN0IHdlYXRoZXIgPSB0aGlzLmNvbnZlcnRSYXdEYXRhQXNXZWF0aGVyRFRPKHJhd0RhdGEpO1xyXG4gICAgICB0aGlzLnNhdmVEYXRhKHdlYXRoZXIpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5jaXR5TmFtZSA9IGNpdHlOYW1lO1xyXG5cclxuICAgIHJldHVybiB0aGlzLmdldFdlYXRoZXJzQnlEYXRlKG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5zcGxpdChcIlRcIilbMF0pO1xyXG4gIH1cclxuXHJcbiAgZ2V0V2VhdGhlcnNCeURhdGUoZGF0ZSl7IFxyXG5cclxuICAgIGlmICghdGhpcy53ZWF0aGVyc0J5RGF0ZS5oYXMoZGF0ZSkpIHtcclxuICAgICAgcmV0dXJuIFtdO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZXR1cm4gdGhpcy53ZWF0aGVyc0J5RGF0ZS5nZXQoZGF0ZSk7XHJcbiAgfVxyXG5cclxuICBzYXZlRGF0YSh3ZWF0aGVyKSB7XHJcbiAgICBjb25zdCBrZXkgPSB3ZWF0aGVyLmRhdGU7XHJcblxyXG4gICAgaWYgKCF0aGlzLndlYXRoZXJzQnlEYXRlLmhhcyhrZXkpKSB7XHJcbiAgICAgICAgdGhpcy53ZWF0aGVyc0J5RGF0ZS5zZXQoa2V5LCBbXSlcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLndlYXRoZXJzQnlEYXRlLmdldChrZXkpLnB1c2god2VhdGhlcik7XHJcbiAgfVxyXG5cclxuICBjb252ZXJ0UmF3RGF0YUFzV2VhdGhlckRUTyhyYXdEYXRhKSB7XHJcbiAgICBjb25zdCBkYXRlVGltZSA9IHJhd0RhdGEuZHRfdHh0O1xyXG4gICAgY29uc3QgZGF0ZVRpbWVBcnJheSA9IGRhdGVUaW1lLnNwbGl0KFwiIFwiKTtcclxuICAgIGNvbnN0IGRhdGUgPSBkYXRlVGltZUFycmF5WzBdO1xyXG4gICAgY29uc3QgdGltZSA9IGRhdGVUaW1lQXJyYXlbMV0uc3BsaXQoXCI6XCIpLnNsaWNlKDAsIDIpLmpvaW4oXCI6XCIpO1xyXG4gICAgY29uc3QgdGVtcGVyYXR1cmUgPSBNYXRoLnJvdW5kKGtlbHZpblRvQ2VsY2l1cyhyYXdEYXRhLm1haW4udGVtcCkpO1xyXG4gICAgY29uc3Qge2h1bWlkaXR5fSA9IHJhd0RhdGEubWFpbjtcclxuICAgIGNvbnN0IHdlYXRoZXIgPSByYXdEYXRhLndlYXRoZXJbMF0ubWFpbjtcclxuICAgIHJldHVybiBuZXcgV2VhdGhlckRUTyhkYXRlLCB0aW1lLCB0ZW1wZXJhdHVyZSwgaHVtaWRpdHksIHdlYXRoZXIpO1xyXG4gIH1cclxufVxyXG5cclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2VhdGhlckRUTyB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZGF0ZSwgdGltZSwgdGVtcENlbGNpdXMsIGh1bWlkaXR5LCB3ZWF0aGVyKSB7XHJcbiAgICAgICAgdGhpcy5kYXRlID0gZGF0ZTtcclxuICAgICAgICB0aGlzLnRpbWUgPSB0aW1lO1xyXG4gICAgICAgIHRoaXMudGVtcGVyYXR1cmUgPSB0ZW1wQ2VsY2l1cztcclxuICAgICAgICB0aGlzLmh1bWlkaXR5ID0gaHVtaWRpdHk7XHJcbiAgICAgICAgdGhpcy53ZWF0aGVyID0gd2VhdGhlcjtcclxuICAgIH1cclxuXHJcbn0iLCJpbXBvcnQgV2VhdGhlckNvbnRyb2xsZXIgZnJvbSBcIi4vV2VhdGhlckNvbnRyb2xsZXJcIjtcclxuaW1wb3J0IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NOYW1lIGZyb20gXCIuL2NvbW1vblwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2VhdGhlclZpZXcge1xyXG4gIHdlYXRoZXJDb250cm9sbGVyO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMud2VhdGhlckNvbnRyb2xsZXIgPSBuZXcgV2VhdGhlckNvbnRyb2xsZXIoKTtcclxuICB9XHJcblxyXG4gIHJlbmRlcih3ZWF0aGVycykge1xyXG4gICAgY29uc3Qgd2VhdGhlcnNFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53ZWF0aGVyc1wiKTtcclxuICAgIHdlYXRoZXJzRWxlbWVudC5pbm5lckhUTUwgPSBcIlwiO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgd2VhdGhlcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgd2VhdGhlcnNFbGVtZW50LmFwcGVuZENoaWxkKHRoaXMud2VhdGhlclRvRGl2KHdlYXRoZXJzW2ldKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjcmVhdGVFbXB0eVdlYXRoZXJzKCkge1xyXG4gICAgY29uc3Qgd2VhdGhlcnNFbGVtZW50ID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzc05hbWUoXCJkaXZcIiwgXCJ3ZWF0aGVyc1wiKTtcclxuICAgIHJldHVybiB3ZWF0aGVyc0VsZW1lbnQ7XHJcbiAgfVxyXG5cclxuICBhc3luYyBsb2FkV2VhdGhlcnMoY2l0eU5hbWUpIHtcclxuICAgIGNvbnN0IHdlYXRoZXJzID1cclxuICAgICAgYXdhaXQgdGhpcy53ZWF0aGVyQ29udHJvbGxlci5nZXRXZWF0aGVyc0J5Q2l0eU5hbWUoY2l0eU5hbWUpO1xyXG4gICAgcmV0dXJuIHdlYXRoZXJzO1xyXG4gIH1cclxuXHJcbiAgd2VhdGhlclRvRGl2KHdlYXRoZXJEVE8pIHtcclxuICAgIGNvbnN0IHsgZGF0ZSwgdGltZSwgdGVtcGVyYXR1cmUsIGh1bWlkaXR5LCB3ZWF0aGVyIH0gPSB3ZWF0aGVyRFRPO1xyXG5cclxuICAgIGNvbnN0IGNsYXNzTmFtZUxpc3QgPSBbXHJcbiAgICAgIFwid2VhdGhlci10aW1lXCIsXHJcbiAgICAgIFwid2VhdGhlci10ZW1wZXJhdHVyZVwiLFxyXG4gICAgICBcIndlYXRoZXItaHVtaWRpdHlcIixcclxuICAgICAgXCJ3ZWF0aGVyLXdlYXRoZXJcIixcclxuICAgIF07XHJcbiAgICBjb25zdCB2YWx1ZUxpc3QgPSBbdGltZSwgdGVtcGVyYXR1cmUsIGh1bWlkaXR5LCB3ZWF0aGVyXTtcclxuXHJcbiAgICBjb25zdCB3ZWF0aGVyRWxlbWVudCA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NOYW1lKFwiZGl2XCIsIFwid2VhdGhlclwiKTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNsYXNzTmFtZUxpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgY29uc3QgZWxlbWVudCA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NOYW1lKFwiZGl2XCIsIGNsYXNzTmFtZUxpc3RbaV0pO1xyXG4gICAgICBlbGVtZW50LnRleHRDb250ZW50ID0gdmFsdWVMaXN0W2ldO1xyXG4gICAgICB3ZWF0aGVyRWxlbWVudC5hcHBlbmRDaGlsZChlbGVtZW50KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gd2VhdGhlckVsZW1lbnQ7XHJcbiAgfVxyXG5cclxuICBjcmVhdGVDYWxlbmRhcigpIHtcclxuICAgIGNvbnN0IGNhbGVuZGFyID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzc05hbWUoXCJpbnB1dFwiLCBcImNhbGVuZGFyXCIpO1xyXG4gICAgY2FsZW5kYXIuaWQgPSBcImNhbGVuZGFyXCI7XHJcblxyXG4gICAgY2FsZW5kYXIuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImRhdGVcIik7XHJcbiAgICBjYWxlbmRhci52YWx1ZSA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5zcGxpdChcIlRcIilbMF07XHJcblxyXG4gICAgLy8gYXR0YWNoIHJlLXJlbmRlciBkYXRhIGV2ZW50IChvbmNoYW5nZSlcclxuICAgIGNhbGVuZGFyLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKGUpID0+IHtcclxuICAgICAgY29uc3QgZGVzdGluYXRpb25EYXRlID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICAgIGNvbnN0IG5ld1dlYXRoZXJzRGF0YSA9XHJcbiAgICAgICAgdGhpcy53ZWF0aGVyQ29udHJvbGxlci5nZXRXZWF0aGVyc0J5RGF0ZShkZXN0aW5hdGlvbkRhdGUpO1xyXG4gICAgICB0aGlzLnJlbmRlcihuZXdXZWF0aGVyc0RhdGEpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIGNhbGVuZGFyO1xyXG4gIH1cclxuXHJcbiAgc2V0VG9kYXlDYWxlbmRhcigpIHtcclxuICAgIGNvbnN0IGNhbGVuZGFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjYWxlbmRhclwiKTtcclxuICAgIGNvbnN0IGZvcm1hdHRlZERhdGUgPSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc3BsaXQoXCJUXCIpWzBdO1xyXG4gICAgY2FsZW5kYXIudmFsdWUgPSBmb3JtYXR0ZWREYXRlO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlSW5wdXREaXYoKSB7XHJcbiAgICBjb25zdCBpbnB1dERpdiA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NOYW1lKFwiZGl2XCIsIFwid2VhdGhlci1pbnB1dFwiKTtcclxuXHJcbiAgICBjb25zdCBjaXR5TmFtZUlucHV0ID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzc05hbWUoXCJpbnB1dFwiLCBcImNpdHktbmFtZVwiKTtcclxuICAgIGNpdHlOYW1lSW5wdXQuaWQgPSBcImNpdHktbmFtZVwiO1xyXG4gICAgY2l0eU5hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIkNpdHkgTmFtZVwiKTtcclxuICAgIGNpdHlOYW1lSW5wdXQudmFsdWUgPSBcIkJhbmdrb2tcIjtcclxuXHJcbiAgICBjb25zdCBidXR0b24gPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzTmFtZShcImJ1dHRvblwiLCBcImNpdHktbmFtZS1idG5cIik7XHJcbiAgICBidXR0b24udGV4dENvbnRlbnQgPSBcIlNlYXJjaFwiO1xyXG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IG5ld0NpdHlOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjaXR5LW5hbWVcIikudmFsdWU7XHJcbiAgICAgIGNvbnN0IG5ld0RhdGEgPVxyXG4gICAgICAgIGF3YWl0IHRoaXMud2VhdGhlckNvbnRyb2xsZXIuZ2V0V2VhdGhlcnNCeUNpdHlOYW1lKG5ld0NpdHlOYW1lKTtcclxuICAgICAgdGhpcy5yZW5kZXIobmV3RGF0YSk7XHJcbiAgICAgIC8vIHNldCBkZWZhdWx0IGFzIHRvZGF5XHJcbiAgICAgIHRoaXMuc2V0VG9kYXlDYWxlbmRhcigpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaW5wdXREaXYuYXBwZW5kQ2hpbGQoY2l0eU5hbWVJbnB1dCk7XHJcbiAgICBpbnB1dERpdi5hcHBlbmRDaGlsZChidXR0b24pO1xyXG5cclxuICAgIHJldHVybiBpbnB1dERpdjtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NOYW1lIGZyb20gXCIuL2NvbW1vblwiO1xyXG5cclxuY29uc3QgY3JlYXRlSGVhZGVyID0gKCkgPT4ge1xyXG4gIGNvbnN0IGhlYWRlciA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NOYW1lKFwiZGl2XCIsIFwiaGVhZGVyXCIpO1xyXG4gIGhlYWRlci50ZXh0Q29udGVudCA9IFwiV2VhdGhlciBBcHBsaWNhdGlvbiBCeSBUaGUgT2RpbiBQcm9qZWN0XCI7XHJcbiAgcmV0dXJuIGhlYWRlcjtcclxufTtcclxuXHJcbmNvbnN0IGNyZWF0ZUNvbnRlbnQgPSAoKSA9PiB7XHJcbiAgY29uc3QgY29udGVudCA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NOYW1lKFwiZGl2XCIsIFwiY29udGVudFwiKTtcclxuICByZXR1cm4gY29udGVudDtcclxufTtcclxuXHJcbmNvbnN0IGNyZWF0ZUZvb3RlciA9ICgpID0+IHtcclxuICBjb25zdCBmb290ZXIgPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzTmFtZShcImRpdlwiLCBcImZvb3RlclwiKTtcclxuICBmb290ZXIudGV4dENvbnRlbnQgPSBcIkFQSXMgcHJvdmlkZWQgYnkgb3BlbndlYXRoZXIub3JnXCI7XHJcbiAgcmV0dXJuIGZvb3RlcjtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluc2VydEJhc2VJbkJvZHkoKSB7XHJcbiAgY29uc3QgY29udGFpbmVyID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzc05hbWUoXCJkaXZcIiwgXCJjb250YWluZXJcIik7XHJcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xyXG5cclxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlSGVhZGVyKCkpO1xyXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVDb250ZW50KCkpO1xyXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVGb290ZXIoKSk7XHJcblxyXG4gIGJvZHkuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcclxufVxyXG4iLCJcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlRWxlbWVudFdpdGhDbGFzc05hbWUodHlwZSwgY2xhc3NOYW1lKSB7XHJcbiAgICBjb25zdCBuZXdFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcclxuICAgIG5ld0VsZW1lbnQuY2xhc3NOYW1lID0gY2xhc3NOYW1lO1xyXG4gICAgcmV0dXJuIG5ld0VsZW1lbnQ7XHJcbn0iLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xyXG5pbXBvcnQgaW5zZXJ0QmFzZUluQm9keSBmcm9tIFwiLi9iYXNlXCI7XHJcbmltcG9ydCBXZWF0aGVyVmlldyBmcm9tIFwiLi9XZWF0aGVyVmlld1wiO1xyXG5cclxuaW5zZXJ0QmFzZUluQm9keSgpO1xyXG5cclxuY29uc3Qgd2VhdGhlclZpZXcgPSBuZXcgV2VhdGhlclZpZXcoKTtcclxuXHJcbmNvbnN0IGlucHV0RGl2ID0gd2VhdGhlclZpZXcuY3JlYXRlSW5wdXREaXYoKTtcclxuY29uc3QgY2FsZW5kYXIgPSB3ZWF0aGVyVmlldy5jcmVhdGVDYWxlbmRhcigpO1xyXG5jb25zdCB3ZWF0aGVycyA9IHdlYXRoZXJWaWV3LmNyZWF0ZUVtcHR5V2VhdGhlcnMoKTtcclxud2VhdGhlclZpZXcubG9hZFdlYXRoZXJzKFwiQmFuZ2tva1wiKVxyXG4gICAgLnRoZW4oKGRhdGEpID0+IHdlYXRoZXJWaWV3LnJlbmRlcihkYXRhKSk7XHJcblxyXG5cclxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKTtcclxuXHJcbmNvbnRlbnQuYXBwZW5kQ2hpbGQoaW5wdXREaXYpO1xyXG5jb250ZW50LmFwcGVuZENoaWxkKGNhbGVuZGFyKTtcclxuY29udGVudC5hcHBlbmRDaGlsZCh3ZWF0aGVycyk7XHJcblxyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBrZWx2aW5Ub0NlbGNpdXMoa2VsdmluKXtcclxuICAgIHJldHVybiBrZWx2aW4gLSAyNzMuMTU7XHJcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=