/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!***********************!*\
  !*** ./src/blocks.js ***!
  \***********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core__ = __webpack_require__(/*! ./core */ 7);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__core__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__container__ = __webpack_require__(/*! ./container */ 1);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__container___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__container__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__row__ = __webpack_require__(/*! ./row */ 2);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__row___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__row__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__column__ = __webpack_require__(/*! ./column */ 3);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__column___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__column__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__blocks_editor_scss__ = __webpack_require__(/*! ./blocks.editor.scss */ 4);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__blocks_editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__blocks_editor_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__blocks_style_scss__ = __webpack_require__(/*! ./blocks.style.scss */ 5);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__blocks_style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__blocks_style_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_scss__ = __webpack_require__(/*! ./common.scss */ 6);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__common_scss__);\n/**\n * Gutenberg Blocks\n *\n * All blocks related JavaScript files should be imported here.\n * You can create a new block folder in this dir and include code\n * for that block here as well.\n *\n * All blocks should be included here since this is the file that\n * Webpack is compiling as the input file.\n */\n\n\n\n\n\n\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9ja3MuanM/N2I1YiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEd1dGVuYmVyZyBCbG9ja3NcbiAqXG4gKiBBbGwgYmxvY2tzIHJlbGF0ZWQgSmF2YVNjcmlwdCBmaWxlcyBzaG91bGQgYmUgaW1wb3J0ZWQgaGVyZS5cbiAqIFlvdSBjYW4gY3JlYXRlIGEgbmV3IGJsb2NrIGZvbGRlciBpbiB0aGlzIGRpciBhbmQgaW5jbHVkZSBjb2RlXG4gKiBmb3IgdGhhdCBibG9jayBoZXJlIGFzIHdlbGwuXG4gKlxuICogQWxsIGJsb2NrcyBzaG91bGQgYmUgaW5jbHVkZWQgaGVyZSBzaW5jZSB0aGlzIGlzIHRoZSBmaWxlIHRoYXRcbiAqIFdlYnBhY2sgaXMgY29tcGlsaW5nIGFzIHRoZSBpbnB1dCBmaWxlLlxuICovXG5cbmltcG9ydCAnLi9jb3JlJztcbmltcG9ydCAnLi9jb250YWluZXInO1xuaW1wb3J0ICcuL3Jvdyc7XG5pbXBvcnQgJy4vY29sdW1uJztcblxuaW1wb3J0ICcuL2Jsb2Nrcy5lZGl0b3Iuc2Nzcyc7XG5pbXBvcnQgJy4vYmxvY2tzLnN0eWxlLnNjc3MnO1xuaW1wb3J0ICcuL2NvbW1vbi5zY3NzJztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ibG9ja3MuanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!********************************!*\
  !*** ./src/container/index.js ***!
  \********************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("var __ = wp.i18n.__;\nvar createHigherOrderComponent = wp.compose.createHigherOrderComponent;\nvar registerBlockType = wp.blocks.registerBlockType;\nvar _wp$components = wp.components,\n    Toolbar = _wp$components.Toolbar,\n    Button = _wp$components.Button,\n    Tooltip = _wp$components.Tooltip,\n    Panel = _wp$components.Panel,\n    PanelBody = _wp$components.PanelBody,\n    PanelRow = _wp$components.PanelRow,\n    FormToggle = _wp$components.FormToggle,\n    RangeControl = _wp$components.RangeControl;\nvar Fragment = wp.element.Fragment;\nvar _wp$editor = wp.editor,\n    RichText = _wp$editor.RichText,\n    AlignmentToolbar = _wp$editor.AlignmentToolbar,\n    BlockControls = _wp$editor.BlockControls,\n    BlockAlignmentToolbar = _wp$editor.BlockAlignmentToolbar,\n    InspectorControls = _wp$editor.InspectorControls,\n    InnerBlocks = _wp$editor.InnerBlocks;\n\n\nregisterBlockType('gutenstrap/container', {\n  title: __('Container (Gutenstrap)', 'gutenstrap'),\n  description: __(''),\n  icon: 'layout',\n  category: 'layout',\n  keywords: [__('gutenstrap'), __('container')],\n  attributes: {\n    fluid: {\n      type: 'bool',\n      default: false\n    },\n    columns: {},\n    allowedBlocks: ['gutenstrap/row'],\n    TEMPLATE: {\n      type: 'array',\n      default: [['gutenstrap/row', {}, []]]\n    }\n  },\n\n  edit: function edit(props) {\n    var className = props.className,\n        _props$attributes = props.attributes,\n        fluid = _props$attributes.fluid,\n        TEMPLATE = _props$attributes.TEMPLATE,\n        columnCount = _props$attributes.columnCount,\n        setAttributes = props.setAttributes;\n\n\n    var onChangeToggleFluid = function onChangeToggleFluid() {\n      setAttributes({ fluid: !fluid });\n    };\n\n    var onChangeColumnCount = function onChangeColumnCount(value) {\n      setAttributes({ columnCount: value });\n    };\n\n    return wp.element.createElement(\n      Fragment,\n      null,\n      wp.element.createElement(\n        InspectorControls,\n        null,\n        wp.element.createElement(\n          PanelBody,\n          {\n            title: __('Container Settings', 'gutenstrap')\n          },\n          wp.element.createElement(\n            PanelRow,\n            null,\n            wp.element.createElement(\n              'label',\n              {\n                htmlFor: 'form-toggle-fluid'\n              },\n              __('Full-width Container', 'gutenstrap')\n            ),\n            wp.element.createElement(FormToggle, {\n              id: 'form-toggle-fluid',\n              label: __('Full-width Container', 'gutenstrap'),\n              checked: !fluid,\n              onClick: onChangeToggleFluid\n            })\n          )\n        )\n      ),\n      wp.element.createElement(\n        'div',\n        {\n          style: { border: '1px dashed red' }\n        },\n        wp.element.createElement(InnerBlocks, {\n          template: TEMPLATE,\n          allowedBlocks: ['gutenstrap/row']\n        })\n      )\n    );\n  },\n\n  save: function save(props) {\n    return wp.element.createElement(\n      Fragment,\n      null,\n      wp.element.createElement(InnerBlocks.Content, null)\n    );\n  }\n});\n\nvar modifyBlockListBlockContainer = createHigherOrderComponent(function (BlockListBlock) {\n  return function (props) {\n\n    if (props.block.name == \"core/block\") {}\n    if (props.block.name == \"gutenstrap/container\") {\n      props.className = [!props.attributes.fluid ? \"container-fluid\" : \"container\"].join(\" \");\n    }\n    return wp.element.createElement(BlockListBlock, props);\n  };\n}, 'modifyBlockListBlockContainer');\n\nwp.hooks.addFilter('editor.BlockListBlock', 'gutenstrap/container/modify-element-edit', modifyBlockListBlockContainer);\n\nvar modifyGetSaveElementContainer = function modifyGetSaveElementContainer(element, blockType, attributes) {\n  if (!element) {\n    return;\n  }\n\n  if (blockType.name === 'gutenstrap/container') {\n    element.props.className = [element.props.className, !attributes.fluid ? \"container-fluid\" : \"container\"].join(\" \");\n    return wp.element.createElement(\n      'div',\n      { className: element.props.className },\n      element\n    );\n  }\n\n  return element;\n};\n\nwp.hooks.addFilter('blocks.getSaveElement', 'gutenstrap/container/modify-element-save', modifyGetSaveElementContainer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb250YWluZXIvaW5kZXguanM/ODk5MyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgX18gPSB3cC5pMThuLl9fO1xudmFyIGNyZWF0ZUhpZ2hlck9yZGVyQ29tcG9uZW50ID0gd3AuY29tcG9zZS5jcmVhdGVIaWdoZXJPcmRlckNvbXBvbmVudDtcbnZhciByZWdpc3RlckJsb2NrVHlwZSA9IHdwLmJsb2Nrcy5yZWdpc3RlckJsb2NrVHlwZTtcbnZhciBfd3AkY29tcG9uZW50cyA9IHdwLmNvbXBvbmVudHMsXG4gICAgVG9vbGJhciA9IF93cCRjb21wb25lbnRzLlRvb2xiYXIsXG4gICAgQnV0dG9uID0gX3dwJGNvbXBvbmVudHMuQnV0dG9uLFxuICAgIFRvb2x0aXAgPSBfd3AkY29tcG9uZW50cy5Ub29sdGlwLFxuICAgIFBhbmVsID0gX3dwJGNvbXBvbmVudHMuUGFuZWwsXG4gICAgUGFuZWxCb2R5ID0gX3dwJGNvbXBvbmVudHMuUGFuZWxCb2R5LFxuICAgIFBhbmVsUm93ID0gX3dwJGNvbXBvbmVudHMuUGFuZWxSb3csXG4gICAgRm9ybVRvZ2dsZSA9IF93cCRjb21wb25lbnRzLkZvcm1Ub2dnbGUsXG4gICAgUmFuZ2VDb250cm9sID0gX3dwJGNvbXBvbmVudHMuUmFuZ2VDb250cm9sO1xudmFyIEZyYWdtZW50ID0gd3AuZWxlbWVudC5GcmFnbWVudDtcbnZhciBfd3AkZWRpdG9yID0gd3AuZWRpdG9yLFxuICAgIFJpY2hUZXh0ID0gX3dwJGVkaXRvci5SaWNoVGV4dCxcbiAgICBBbGlnbm1lbnRUb29sYmFyID0gX3dwJGVkaXRvci5BbGlnbm1lbnRUb29sYmFyLFxuICAgIEJsb2NrQ29udHJvbHMgPSBfd3AkZWRpdG9yLkJsb2NrQ29udHJvbHMsXG4gICAgQmxvY2tBbGlnbm1lbnRUb29sYmFyID0gX3dwJGVkaXRvci5CbG9ja0FsaWdubWVudFRvb2xiYXIsXG4gICAgSW5zcGVjdG9yQ29udHJvbHMgPSBfd3AkZWRpdG9yLkluc3BlY3RvckNvbnRyb2xzLFxuICAgIElubmVyQmxvY2tzID0gX3dwJGVkaXRvci5Jbm5lckJsb2NrcztcblxuXG5yZWdpc3RlckJsb2NrVHlwZSgnZ3V0ZW5zdHJhcC9jb250YWluZXInLCB7XG4gIHRpdGxlOiBfXygnQ29udGFpbmVyIChHdXRlbnN0cmFwKScsICdndXRlbnN0cmFwJyksXG4gIGRlc2NyaXB0aW9uOiBfXygnJyksXG4gIGljb246ICdsYXlvdXQnLFxuICBjYXRlZ29yeTogJ2xheW91dCcsXG4gIGtleXdvcmRzOiBbX18oJ2d1dGVuc3RyYXAnKSwgX18oJ2NvbnRhaW5lcicpXSxcbiAgYXR0cmlidXRlczoge1xuICAgIGZsdWlkOiB7XG4gICAgICB0eXBlOiAnYm9vbCcsXG4gICAgICBkZWZhdWx0OiBmYWxzZVxuICAgIH0sXG4gICAgY29sdW1uczoge30sXG4gICAgYWxsb3dlZEJsb2NrczogWydndXRlbnN0cmFwL3JvdyddLFxuICAgIFRFTVBMQVRFOiB7XG4gICAgICB0eXBlOiAnYXJyYXknLFxuICAgICAgZGVmYXVsdDogW1snZ3V0ZW5zdHJhcC9yb3cnLCB7fSwgW11dXVxuICAgIH1cbiAgfSxcblxuICBlZGl0OiBmdW5jdGlvbiBlZGl0KHByb3BzKSB7XG4gICAgdmFyIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgX3Byb3BzJGF0dHJpYnV0ZXMgPSBwcm9wcy5hdHRyaWJ1dGVzLFxuICAgICAgICBmbHVpZCA9IF9wcm9wcyRhdHRyaWJ1dGVzLmZsdWlkLFxuICAgICAgICBURU1QTEFURSA9IF9wcm9wcyRhdHRyaWJ1dGVzLlRFTVBMQVRFLFxuICAgICAgICBjb2x1bW5Db3VudCA9IF9wcm9wcyRhdHRyaWJ1dGVzLmNvbHVtbkNvdW50LFxuICAgICAgICBzZXRBdHRyaWJ1dGVzID0gcHJvcHMuc2V0QXR0cmlidXRlcztcblxuXG4gICAgdmFyIG9uQ2hhbmdlVG9nZ2xlRmx1aWQgPSBmdW5jdGlvbiBvbkNoYW5nZVRvZ2dsZUZsdWlkKCkge1xuICAgICAgc2V0QXR0cmlidXRlcyh7IGZsdWlkOiAhZmx1aWQgfSk7XG4gICAgfTtcblxuICAgIHZhciBvbkNoYW5nZUNvbHVtbkNvdW50ID0gZnVuY3Rpb24gb25DaGFuZ2VDb2x1bW5Db3VudCh2YWx1ZSkge1xuICAgICAgc2V0QXR0cmlidXRlcyh7IGNvbHVtbkNvdW50OiB2YWx1ZSB9KTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcbiAgICAgIEZyYWdtZW50LFxuICAgICAgbnVsbCxcbiAgICAgIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgSW5zcGVjdG9yQ29udHJvbHMsXG4gICAgICAgIG51bGwsXG4gICAgICAgIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICBQYW5lbEJvZHksXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6IF9fKCdDb250YWluZXIgU2V0dGluZ3MnLCAnZ3V0ZW5zdHJhcCcpXG4gICAgICAgICAgfSxcbiAgICAgICAgICB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICBQYW5lbFJvdyxcbiAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICdsYWJlbCcsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBodG1sRm9yOiAnZm9ybS10b2dnbGUtZmx1aWQnXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIF9fKCdGdWxsLXdpZHRoIENvbnRhaW5lcicsICdndXRlbnN0cmFwJylcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoRm9ybVRvZ2dsZSwge1xuICAgICAgICAgICAgICBpZDogJ2Zvcm0tdG9nZ2xlLWZsdWlkJyxcbiAgICAgICAgICAgICAgbGFiZWw6IF9fKCdGdWxsLXdpZHRoIENvbnRhaW5lcicsICdndXRlbnN0cmFwJyksXG4gICAgICAgICAgICAgIGNoZWNrZWQ6ICFmbHVpZCxcbiAgICAgICAgICAgICAgb25DbGljazogb25DaGFuZ2VUb2dnbGVGbHVpZFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgICksXG4gICAgICB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdkaXYnLFxuICAgICAgICB7XG4gICAgICAgICAgc3R5bGU6IHsgYm9yZGVyOiAnMXB4IGRhc2hlZCByZWQnIH1cbiAgICAgICAgfSxcbiAgICAgICAgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KElubmVyQmxvY2tzLCB7XG4gICAgICAgICAgdGVtcGxhdGU6IFRFTVBMQVRFLFxuICAgICAgICAgIGFsbG93ZWRCbG9ja3M6IFsnZ3V0ZW5zdHJhcC9yb3cnXVxuICAgICAgICB9KVxuICAgICAgKVxuICAgICk7XG4gIH0sXG5cbiAgc2F2ZTogZnVuY3Rpb24gc2F2ZShwcm9wcykge1xuICAgIHJldHVybiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG4gICAgICBGcmFnbWVudCxcbiAgICAgIG51bGwsXG4gICAgICB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoSW5uZXJCbG9ja3MuQ29udGVudCwgbnVsbClcbiAgICApO1xuICB9XG59KTtcblxudmFyIG1vZGlmeUJsb2NrTGlzdEJsb2NrQ29udGFpbmVyID0gY3JlYXRlSGlnaGVyT3JkZXJDb21wb25lbnQoZnVuY3Rpb24gKEJsb2NrTGlzdEJsb2NrKSB7XG4gIHJldHVybiBmdW5jdGlvbiAocHJvcHMpIHtcblxuICAgIGlmIChwcm9wcy5ibG9jay5uYW1lID09IFwiY29yZS9ibG9ja1wiKSB7fVxuICAgIGlmIChwcm9wcy5ibG9jay5uYW1lID09IFwiZ3V0ZW5zdHJhcC9jb250YWluZXJcIikge1xuICAgICAgcHJvcHMuY2xhc3NOYW1lID0gWyFwcm9wcy5hdHRyaWJ1dGVzLmZsdWlkID8gXCJjb250YWluZXItZmx1aWRcIiA6IFwiY29udGFpbmVyXCJdLmpvaW4oXCIgXCIpO1xuICAgIH1cbiAgICByZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KEJsb2NrTGlzdEJsb2NrLCBwcm9wcyk7XG4gIH07XG59LCAnbW9kaWZ5QmxvY2tMaXN0QmxvY2tDb250YWluZXInKTtcblxud3AuaG9va3MuYWRkRmlsdGVyKCdlZGl0b3IuQmxvY2tMaXN0QmxvY2snLCAnZ3V0ZW5zdHJhcC9jb250YWluZXIvbW9kaWZ5LWVsZW1lbnQtZWRpdCcsIG1vZGlmeUJsb2NrTGlzdEJsb2NrQ29udGFpbmVyKTtcblxudmFyIG1vZGlmeUdldFNhdmVFbGVtZW50Q29udGFpbmVyID0gZnVuY3Rpb24gbW9kaWZ5R2V0U2F2ZUVsZW1lbnRDb250YWluZXIoZWxlbWVudCwgYmxvY2tUeXBlLCBhdHRyaWJ1dGVzKSB7XG4gIGlmICghZWxlbWVudCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChibG9ja1R5cGUubmFtZSA9PT0gJ2d1dGVuc3RyYXAvY29udGFpbmVyJykge1xuICAgIGVsZW1lbnQucHJvcHMuY2xhc3NOYW1lID0gW2VsZW1lbnQucHJvcHMuY2xhc3NOYW1lLCAhYXR0cmlidXRlcy5mbHVpZCA/IFwiY29udGFpbmVyLWZsdWlkXCIgOiBcImNvbnRhaW5lclwiXS5qb2luKFwiIFwiKTtcbiAgICByZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2RpdicsXG4gICAgICB7IGNsYXNzTmFtZTogZWxlbWVudC5wcm9wcy5jbGFzc05hbWUgfSxcbiAgICAgIGVsZW1lbnRcbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59O1xuXG53cC5ob29rcy5hZGRGaWx0ZXIoJ2Jsb2Nrcy5nZXRTYXZlRWxlbWVudCcsICdndXRlbnN0cmFwL2NvbnRhaW5lci9tb2RpZnktZWxlbWVudC1zYXZlJywgbW9kaWZ5R2V0U2F2ZUVsZW1lbnRDb250YWluZXIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbnRhaW5lci9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!**************************!*\
  !*** ./src/row/index.js ***!
  \**************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("var __ = wp.i18n.__;\nvar createHigherOrderComponent = wp.compose.createHigherOrderComponent;\nvar registerBlockType = wp.blocks.registerBlockType;\nvar _wp$components = wp.components,\n    Toolbar = _wp$components.Toolbar,\n    Button = _wp$components.Button,\n    Tooltip = _wp$components.Tooltip,\n    Panel = _wp$components.Panel,\n    PanelBody = _wp$components.PanelBody,\n    PanelRow = _wp$components.PanelRow,\n    FormToggle = _wp$components.FormToggle,\n    RangeControl = _wp$components.RangeControl;\nvar Fragment = wp.element.Fragment;\nvar _wp$editor = wp.editor,\n    RichText = _wp$editor.RichText,\n    AlignmentToolbar = _wp$editor.AlignmentToolbar,\n    BlockControls = _wp$editor.BlockControls,\n    BlockAlignmentToolbar = _wp$editor.BlockAlignmentToolbar,\n    InspectorControls = _wp$editor.InspectorControls,\n    InnerBlocks = _wp$editor.InnerBlocks;\n\n\nregisterBlockType('gutenstrap/row', {\n  title: __('Row (Gutenstrap)', 'gutenstrap'),\n  description: __(''),\n  icon: 'layout',\n  category: 'layout',\n  keywords: [__('gutenstrap'), __('column')],\n  attributes: {\n    customClassName: true,\n    content: {\n      type: 'array',\n      source: 'children'\n    },\n    allowedBlocks: ['gutenstrap/column'],\n    TEMPLATE: {\n      type: 'array',\n      default: [\n        // ['gutenstrap/column', {} ,[]],\n        // ['gutenstrap/column', {} ,[]],\n        // ['gutenstrap/column', {} ,[]]\n      ]\n    }\n  },\n  edit: function edit(props) {\n    var className = props.className,\n        TEMPLATE = props.attributes.TEMPLATE,\n        setAttributes = props.setAttributes;\n\n\n    return wp.element.createElement(\n      'div',\n      {\n        className: props.className,\n        style: { border: '1px dashed orange' }\n      },\n      wp.element.createElement(InnerBlocks, {\n        template: TEMPLATE,\n        allowedBlocks: ['gutenstrap/column']\n      })\n    );\n  },\n  save: function save(props) {\n    return wp.element.createElement(\n      Fragment,\n      null,\n      wp.element.createElement(InnerBlocks.Content, null)\n    );\n  }\n});\n\nvar modifyBlockListBlockRow = createHigherOrderComponent(function (BlockListBlock) {\n  return function (props) {\n    if (props.block.name == \"gutenstrap/row\") {\n      props.className = [props.className, \"row\"].join(\" \");\n    }\n    return wp.element.createElement(BlockListBlock, props);\n  };\n}, 'modifyBlockListBlockRow');\n\nwp.hooks.addFilter('editor.BlockListBlock', 'gutenstrap/row/modify-element-edit', modifyBlockListBlockRow);\n\nvar modifyGetSaveElementRow = function modifyGetSaveElementRow(element, blockType, attributes) {\n  if (!element) {\n    return;\n  }\n\n  if (blockType.name == 'gutenstrap/row') {\n    return wp.element.createElement(\n      'div',\n      { className: [element.props.className, \"row\"].join(\" \") },\n      element\n    );\n  }\n\n  return element;\n};\n\nwp.hooks.addFilter('blocks.getSaveElement', 'gutenstrap/row/modify-element-save', modifyGetSaveElementRow);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9yb3cvaW5kZXguanM/MjQ5MiJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgX18gPSB3cC5pMThuLl9fO1xudmFyIGNyZWF0ZUhpZ2hlck9yZGVyQ29tcG9uZW50ID0gd3AuY29tcG9zZS5jcmVhdGVIaWdoZXJPcmRlckNvbXBvbmVudDtcbnZhciByZWdpc3RlckJsb2NrVHlwZSA9IHdwLmJsb2Nrcy5yZWdpc3RlckJsb2NrVHlwZTtcbnZhciBfd3AkY29tcG9uZW50cyA9IHdwLmNvbXBvbmVudHMsXG4gICAgVG9vbGJhciA9IF93cCRjb21wb25lbnRzLlRvb2xiYXIsXG4gICAgQnV0dG9uID0gX3dwJGNvbXBvbmVudHMuQnV0dG9uLFxuICAgIFRvb2x0aXAgPSBfd3AkY29tcG9uZW50cy5Ub29sdGlwLFxuICAgIFBhbmVsID0gX3dwJGNvbXBvbmVudHMuUGFuZWwsXG4gICAgUGFuZWxCb2R5ID0gX3dwJGNvbXBvbmVudHMuUGFuZWxCb2R5LFxuICAgIFBhbmVsUm93ID0gX3dwJGNvbXBvbmVudHMuUGFuZWxSb3csXG4gICAgRm9ybVRvZ2dsZSA9IF93cCRjb21wb25lbnRzLkZvcm1Ub2dnbGUsXG4gICAgUmFuZ2VDb250cm9sID0gX3dwJGNvbXBvbmVudHMuUmFuZ2VDb250cm9sO1xudmFyIEZyYWdtZW50ID0gd3AuZWxlbWVudC5GcmFnbWVudDtcbnZhciBfd3AkZWRpdG9yID0gd3AuZWRpdG9yLFxuICAgIFJpY2hUZXh0ID0gX3dwJGVkaXRvci5SaWNoVGV4dCxcbiAgICBBbGlnbm1lbnRUb29sYmFyID0gX3dwJGVkaXRvci5BbGlnbm1lbnRUb29sYmFyLFxuICAgIEJsb2NrQ29udHJvbHMgPSBfd3AkZWRpdG9yLkJsb2NrQ29udHJvbHMsXG4gICAgQmxvY2tBbGlnbm1lbnRUb29sYmFyID0gX3dwJGVkaXRvci5CbG9ja0FsaWdubWVudFRvb2xiYXIsXG4gICAgSW5zcGVjdG9yQ29udHJvbHMgPSBfd3AkZWRpdG9yLkluc3BlY3RvckNvbnRyb2xzLFxuICAgIElubmVyQmxvY2tzID0gX3dwJGVkaXRvci5Jbm5lckJsb2NrcztcblxuXG5yZWdpc3RlckJsb2NrVHlwZSgnZ3V0ZW5zdHJhcC9yb3cnLCB7XG4gIHRpdGxlOiBfXygnUm93IChHdXRlbnN0cmFwKScsICdndXRlbnN0cmFwJyksXG4gIGRlc2NyaXB0aW9uOiBfXygnJyksXG4gIGljb246ICdsYXlvdXQnLFxuICBjYXRlZ29yeTogJ2xheW91dCcsXG4gIGtleXdvcmRzOiBbX18oJ2d1dGVuc3RyYXAnKSwgX18oJ2NvbHVtbicpXSxcbiAgYXR0cmlidXRlczoge1xuICAgIGN1c3RvbUNsYXNzTmFtZTogdHJ1ZSxcbiAgICBjb250ZW50OiB7XG4gICAgICB0eXBlOiAnYXJyYXknLFxuICAgICAgc291cmNlOiAnY2hpbGRyZW4nXG4gICAgfSxcbiAgICBhbGxvd2VkQmxvY2tzOiBbJ2d1dGVuc3RyYXAvY29sdW1uJ10sXG4gICAgVEVNUExBVEU6IHtcbiAgICAgIHR5cGU6ICdhcnJheScsXG4gICAgICBkZWZhdWx0OiBbXG4gICAgICAgIC8vIFsnZ3V0ZW5zdHJhcC9jb2x1bW4nLCB7fSAsW11dLFxuICAgICAgICAvLyBbJ2d1dGVuc3RyYXAvY29sdW1uJywge30gLFtdXSxcbiAgICAgICAgLy8gWydndXRlbnN0cmFwL2NvbHVtbicsIHt9ICxbXV1cbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIGVkaXQ6IGZ1bmN0aW9uIGVkaXQocHJvcHMpIHtcbiAgICB2YXIgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICBURU1QTEFURSA9IHByb3BzLmF0dHJpYnV0ZXMuVEVNUExBVEUsXG4gICAgICAgIHNldEF0dHJpYnV0ZXMgPSBwcm9wcy5zZXRBdHRyaWJ1dGVzO1xuXG5cbiAgICByZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2RpdicsXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICBzdHlsZTogeyBib3JkZXI6ICcxcHggZGFzaGVkIG9yYW5nZScgfVxuICAgICAgfSxcbiAgICAgIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChJbm5lckJsb2Nrcywge1xuICAgICAgICB0ZW1wbGF0ZTogVEVNUExBVEUsXG4gICAgICAgIGFsbG93ZWRCbG9ja3M6IFsnZ3V0ZW5zdHJhcC9jb2x1bW4nXVxuICAgICAgfSlcbiAgICApO1xuICB9LFxuICBzYXZlOiBmdW5jdGlvbiBzYXZlKHByb3BzKSB7XG4gICAgcmV0dXJuIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcbiAgICAgIEZyYWdtZW50LFxuICAgICAgbnVsbCxcbiAgICAgIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChJbm5lckJsb2Nrcy5Db250ZW50LCBudWxsKVxuICAgICk7XG4gIH1cbn0pO1xuXG52YXIgbW9kaWZ5QmxvY2tMaXN0QmxvY2tSb3cgPSBjcmVhdGVIaWdoZXJPcmRlckNvbXBvbmVudChmdW5jdGlvbiAoQmxvY2tMaXN0QmxvY2spIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChwcm9wcykge1xuICAgIGlmIChwcm9wcy5ibG9jay5uYW1lID09IFwiZ3V0ZW5zdHJhcC9yb3dcIikge1xuICAgICAgcHJvcHMuY2xhc3NOYW1lID0gW3Byb3BzLmNsYXNzTmFtZSwgXCJyb3dcIl0uam9pbihcIiBcIik7XG4gICAgfVxuICAgIHJldHVybiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoQmxvY2tMaXN0QmxvY2ssIHByb3BzKTtcbiAgfTtcbn0sICdtb2RpZnlCbG9ja0xpc3RCbG9ja1JvdycpO1xuXG53cC5ob29rcy5hZGRGaWx0ZXIoJ2VkaXRvci5CbG9ja0xpc3RCbG9jaycsICdndXRlbnN0cmFwL3Jvdy9tb2RpZnktZWxlbWVudC1lZGl0JywgbW9kaWZ5QmxvY2tMaXN0QmxvY2tSb3cpO1xuXG52YXIgbW9kaWZ5R2V0U2F2ZUVsZW1lbnRSb3cgPSBmdW5jdGlvbiBtb2RpZnlHZXRTYXZlRWxlbWVudFJvdyhlbGVtZW50LCBibG9ja1R5cGUsIGF0dHJpYnV0ZXMpIHtcbiAgaWYgKCFlbGVtZW50KSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGJsb2NrVHlwZS5uYW1lID09ICdndXRlbnN0cmFwL3JvdycpIHtcbiAgICByZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2RpdicsXG4gICAgICB7IGNsYXNzTmFtZTogW2VsZW1lbnQucHJvcHMuY2xhc3NOYW1lLCBcInJvd1wiXS5qb2luKFwiIFwiKSB9LFxuICAgICAgZWxlbWVudFxuICAgICk7XG4gIH1cblxuICByZXR1cm4gZWxlbWVudDtcbn07XG5cbndwLmhvb2tzLmFkZEZpbHRlcignYmxvY2tzLmdldFNhdmVFbGVtZW50JywgJ2d1dGVuc3RyYXAvcm93L21vZGlmeS1lbGVtZW50LXNhdmUnLCBtb2RpZnlHZXRTYXZlRWxlbWVudFJvdyk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvcm93L2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!*****************************!*\
  !*** ./src/column/index.js ***!
  \*****************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("var __ = wp.i18n.__;\nvar createHigherOrderComponent = wp.compose.createHigherOrderComponent;\nvar registerBlockType = wp.blocks.registerBlockType;\nvar _wp$components = wp.components,\n    Toolbar = _wp$components.Toolbar,\n    Button = _wp$components.Button,\n    Tooltip = _wp$components.Tooltip,\n    Panel = _wp$components.Panel,\n    PanelBody = _wp$components.PanelBody,\n    PanelRow = _wp$components.PanelRow,\n    FormToggle = _wp$components.FormToggle,\n    RangeControl = _wp$components.RangeControl;\nvar Fragment = wp.element.Fragment;\nvar _wp$editor = wp.editor,\n    RichText = _wp$editor.RichText,\n    AlignmentToolbar = _wp$editor.AlignmentToolbar,\n    BlockControls = _wp$editor.BlockControls,\n    BlockAlignmentToolbar = _wp$editor.BlockAlignmentToolbar,\n    InspectorControls = _wp$editor.InspectorControls,\n    InnerBlocks = _wp$editor.InnerBlocks;\n\n\nregisterBlockType('gutenstrap/column', {\n  title: __('Column (Gutenstrap)', 'gutenstrap'),\n  description: __(''),\n  icon: 'layout',\n  category: 'layout',\n  keywords: [__('gutenstrap'), __('column')],\n  attributes: {\n    customClassName: true,\n    content: {\n      type: 'array',\n      source: 'children'\n    }\n  },\n  edit: function edit(props) {\n    return wp.element.createElement(\n      'div',\n      {\n        // className={props.className}\n        style: { border: '1px dashed green' }\n      },\n      wp.element.createElement(InnerBlocks, null)\n    );\n  },\n  save: function save(props) {\n    return wp.element.createElement(\n      Fragment,\n      null,\n      wp.element.createElement(InnerBlocks.Content, null)\n    );\n  }\n});\n\nvar modifyBlockListBlockColumn = createHigherOrderComponent(function (BlockListBlock) {\n  return function (props) {\n    if (props.block.name == \"gutenstrap/column\") {\n      props.className = [props.block.attributes.className, \"col\"].join(\" \");\n    }\n    return wp.element.createElement(BlockListBlock, props);\n  };\n}, 'modifyBlockListBlockColumn');\n\nwp.hooks.addFilter('editor.BlockListBlock', 'gutenstrap/column/modify-element-edit', modifyBlockListBlockColumn);\n\nvar modifyGetSaveElementColumn = function modifyGetSaveElementColumn(element, blockType, attributes) {\n  if (!element) {\n    return;\n  }\n\n  if (blockType.name == 'gutenstrap/column') {\n    return wp.element.createElement(\n      'div',\n      { className: [element.props.className, \"col\"].join(\" \") },\n      element\n    );\n  }\n\n  return element;\n};\nwp.hooks.addFilter('blocks.getSaveElement', 'gutenstrap/column/modify-element-save', modifyGetSaveElementColumn);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb2x1bW4vaW5kZXguanM/MWM4NSJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgX18gPSB3cC5pMThuLl9fO1xudmFyIGNyZWF0ZUhpZ2hlck9yZGVyQ29tcG9uZW50ID0gd3AuY29tcG9zZS5jcmVhdGVIaWdoZXJPcmRlckNvbXBvbmVudDtcbnZhciByZWdpc3RlckJsb2NrVHlwZSA9IHdwLmJsb2Nrcy5yZWdpc3RlckJsb2NrVHlwZTtcbnZhciBfd3AkY29tcG9uZW50cyA9IHdwLmNvbXBvbmVudHMsXG4gICAgVG9vbGJhciA9IF93cCRjb21wb25lbnRzLlRvb2xiYXIsXG4gICAgQnV0dG9uID0gX3dwJGNvbXBvbmVudHMuQnV0dG9uLFxuICAgIFRvb2x0aXAgPSBfd3AkY29tcG9uZW50cy5Ub29sdGlwLFxuICAgIFBhbmVsID0gX3dwJGNvbXBvbmVudHMuUGFuZWwsXG4gICAgUGFuZWxCb2R5ID0gX3dwJGNvbXBvbmVudHMuUGFuZWxCb2R5LFxuICAgIFBhbmVsUm93ID0gX3dwJGNvbXBvbmVudHMuUGFuZWxSb3csXG4gICAgRm9ybVRvZ2dsZSA9IF93cCRjb21wb25lbnRzLkZvcm1Ub2dnbGUsXG4gICAgUmFuZ2VDb250cm9sID0gX3dwJGNvbXBvbmVudHMuUmFuZ2VDb250cm9sO1xudmFyIEZyYWdtZW50ID0gd3AuZWxlbWVudC5GcmFnbWVudDtcbnZhciBfd3AkZWRpdG9yID0gd3AuZWRpdG9yLFxuICAgIFJpY2hUZXh0ID0gX3dwJGVkaXRvci5SaWNoVGV4dCxcbiAgICBBbGlnbm1lbnRUb29sYmFyID0gX3dwJGVkaXRvci5BbGlnbm1lbnRUb29sYmFyLFxuICAgIEJsb2NrQ29udHJvbHMgPSBfd3AkZWRpdG9yLkJsb2NrQ29udHJvbHMsXG4gICAgQmxvY2tBbGlnbm1lbnRUb29sYmFyID0gX3dwJGVkaXRvci5CbG9ja0FsaWdubWVudFRvb2xiYXIsXG4gICAgSW5zcGVjdG9yQ29udHJvbHMgPSBfd3AkZWRpdG9yLkluc3BlY3RvckNvbnRyb2xzLFxuICAgIElubmVyQmxvY2tzID0gX3dwJGVkaXRvci5Jbm5lckJsb2NrcztcblxuXG5yZWdpc3RlckJsb2NrVHlwZSgnZ3V0ZW5zdHJhcC9jb2x1bW4nLCB7XG4gIHRpdGxlOiBfXygnQ29sdW1uIChHdXRlbnN0cmFwKScsICdndXRlbnN0cmFwJyksXG4gIGRlc2NyaXB0aW9uOiBfXygnJyksXG4gIGljb246ICdsYXlvdXQnLFxuICBjYXRlZ29yeTogJ2xheW91dCcsXG4gIGtleXdvcmRzOiBbX18oJ2d1dGVuc3RyYXAnKSwgX18oJ2NvbHVtbicpXSxcbiAgYXR0cmlidXRlczoge1xuICAgIGN1c3RvbUNsYXNzTmFtZTogdHJ1ZSxcbiAgICBjb250ZW50OiB7XG4gICAgICB0eXBlOiAnYXJyYXknLFxuICAgICAgc291cmNlOiAnY2hpbGRyZW4nXG4gICAgfVxuICB9LFxuICBlZGl0OiBmdW5jdGlvbiBlZGl0KHByb3BzKSB7XG4gICAgcmV0dXJuIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcbiAgICAgICdkaXYnLFxuICAgICAge1xuICAgICAgICAvLyBjbGFzc05hbWU9e3Byb3BzLmNsYXNzTmFtZX1cbiAgICAgICAgc3R5bGU6IHsgYm9yZGVyOiAnMXB4IGRhc2hlZCBncmVlbicgfVxuICAgICAgfSxcbiAgICAgIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChJbm5lckJsb2NrcywgbnVsbClcbiAgICApO1xuICB9LFxuICBzYXZlOiBmdW5jdGlvbiBzYXZlKHByb3BzKSB7XG4gICAgcmV0dXJuIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcbiAgICAgIEZyYWdtZW50LFxuICAgICAgbnVsbCxcbiAgICAgIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChJbm5lckJsb2Nrcy5Db250ZW50LCBudWxsKVxuICAgICk7XG4gIH1cbn0pO1xuXG52YXIgbW9kaWZ5QmxvY2tMaXN0QmxvY2tDb2x1bW4gPSBjcmVhdGVIaWdoZXJPcmRlckNvbXBvbmVudChmdW5jdGlvbiAoQmxvY2tMaXN0QmxvY2spIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChwcm9wcykge1xuICAgIGlmIChwcm9wcy5ibG9jay5uYW1lID09IFwiZ3V0ZW5zdHJhcC9jb2x1bW5cIikge1xuICAgICAgcHJvcHMuY2xhc3NOYW1lID0gW3Byb3BzLmJsb2NrLmF0dHJpYnV0ZXMuY2xhc3NOYW1lLCBcImNvbFwiXS5qb2luKFwiIFwiKTtcbiAgICB9XG4gICAgcmV0dXJuIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChCbG9ja0xpc3RCbG9jaywgcHJvcHMpO1xuICB9O1xufSwgJ21vZGlmeUJsb2NrTGlzdEJsb2NrQ29sdW1uJyk7XG5cbndwLmhvb2tzLmFkZEZpbHRlcignZWRpdG9yLkJsb2NrTGlzdEJsb2NrJywgJ2d1dGVuc3RyYXAvY29sdW1uL21vZGlmeS1lbGVtZW50LWVkaXQnLCBtb2RpZnlCbG9ja0xpc3RCbG9ja0NvbHVtbik7XG5cbnZhciBtb2RpZnlHZXRTYXZlRWxlbWVudENvbHVtbiA9IGZ1bmN0aW9uIG1vZGlmeUdldFNhdmVFbGVtZW50Q29sdW1uKGVsZW1lbnQsIGJsb2NrVHlwZSwgYXR0cmlidXRlcykge1xuICBpZiAoIWVsZW1lbnQpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoYmxvY2tUeXBlLm5hbWUgPT0gJ2d1dGVuc3RyYXAvY29sdW1uJykge1xuICAgIHJldHVybiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnZGl2JyxcbiAgICAgIHsgY2xhc3NOYW1lOiBbZWxlbWVudC5wcm9wcy5jbGFzc05hbWUsIFwiY29sXCJdLmpvaW4oXCIgXCIpIH0sXG4gICAgICBlbGVtZW50XG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiBlbGVtZW50O1xufTtcbndwLmhvb2tzLmFkZEZpbHRlcignYmxvY2tzLmdldFNhdmVFbGVtZW50JywgJ2d1dGVuc3RyYXAvY29sdW1uL21vZGlmeS1lbGVtZW50LXNhdmUnLCBtb2RpZnlHZXRTYXZlRWxlbWVudENvbHVtbik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29sdW1uL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///3\n");

/***/ }),
/* 4 */
/*!********************************!*\
  !*** ./src/blocks.editor.scss ***!
  \********************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9ja3MuZWRpdG9yLnNjc3M/ZjUxMSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Jsb2Nrcy5lZGl0b3Iuc2Nzc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///4\n");

/***/ }),
/* 5 */
/*!*******************************!*\
  !*** ./src/blocks.style.scss ***!
  \*******************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9ja3Muc3R5bGUuc2Nzcz9lNGRiIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2tzLnN0eWxlLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///5\n");

/***/ }),
/* 6 */
/*!*************************!*\
  !*** ./src/common.scss ***!
  \*************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi5qcyIsInNvdXJjZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///6\n");

/***/ }),
/* 7 */
/*!***************************!*\
  !*** ./src/core/index.js ***!
  \***************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("var createHigherOrderComponent = wp.compose.createHigherOrderComponent;\n\n\nvar addSupportReusableCoreBlock = function addSupportReusableCoreBlock(settings, name) {\n  if (name === 'core/block') {\n    var newSettings = lodash.assign({}, settings, {\n      supports: lodash.assign({}, settings.supports, {\n        align: true,\n        default: 'full'\n      })\n    });\n    settings = newSettings;\n  }\n  return settings;\n};\nwp.hooks.addFilter('blocks.registerBlockType', 'gutenstrap/core/block', addSupportReusableCoreBlock);\n\nvar modifyReusableCoreBlock = createHigherOrderComponent(function (BlockListBlock) {\n  return function (props) {\n    if (props.block.name == \"core/block\") {\n      props.attributes.align = props.attributes.align || 'full';\n    }\n    return wp.element.createElement(BlockListBlock, props);\n  };\n}, 'modifyBlockListBlockContainer');\nwp.hooks.addFilter('editor.BlockListBlock', 'gutenstrap/core/modify-element-edit', modifyReusableCoreBlock);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb3JlL2luZGV4LmpzPzQ0NDQiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIGNyZWF0ZUhpZ2hlck9yZGVyQ29tcG9uZW50ID0gd3AuY29tcG9zZS5jcmVhdGVIaWdoZXJPcmRlckNvbXBvbmVudDtcblxuXG52YXIgYWRkU3VwcG9ydFJldXNhYmxlQ29yZUJsb2NrID0gZnVuY3Rpb24gYWRkU3VwcG9ydFJldXNhYmxlQ29yZUJsb2NrKHNldHRpbmdzLCBuYW1lKSB7XG4gIGlmIChuYW1lID09PSAnY29yZS9ibG9jaycpIHtcbiAgICB2YXIgbmV3U2V0dGluZ3MgPSBsb2Rhc2guYXNzaWduKHt9LCBzZXR0aW5ncywge1xuICAgICAgc3VwcG9ydHM6IGxvZGFzaC5hc3NpZ24oe30sIHNldHRpbmdzLnN1cHBvcnRzLCB7XG4gICAgICAgIGFsaWduOiB0cnVlLFxuICAgICAgICBkZWZhdWx0OiAnZnVsbCdcbiAgICAgIH0pXG4gICAgfSk7XG4gICAgc2V0dGluZ3MgPSBuZXdTZXR0aW5ncztcbiAgfVxuICByZXR1cm4gc2V0dGluZ3M7XG59O1xud3AuaG9va3MuYWRkRmlsdGVyKCdibG9ja3MucmVnaXN0ZXJCbG9ja1R5cGUnLCAnZ3V0ZW5zdHJhcC9jb3JlL2Jsb2NrJywgYWRkU3VwcG9ydFJldXNhYmxlQ29yZUJsb2NrKTtcblxudmFyIG1vZGlmeVJldXNhYmxlQ29yZUJsb2NrID0gY3JlYXRlSGlnaGVyT3JkZXJDb21wb25lbnQoZnVuY3Rpb24gKEJsb2NrTGlzdEJsb2NrKSB7XG4gIHJldHVybiBmdW5jdGlvbiAocHJvcHMpIHtcbiAgICBpZiAocHJvcHMuYmxvY2submFtZSA9PSBcImNvcmUvYmxvY2tcIikge1xuICAgICAgcHJvcHMuYXR0cmlidXRlcy5hbGlnbiA9IHByb3BzLmF0dHJpYnV0ZXMuYWxpZ24gfHwgJ2Z1bGwnO1xuICAgIH1cbiAgICByZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KEJsb2NrTGlzdEJsb2NrLCBwcm9wcyk7XG4gIH07XG59LCAnbW9kaWZ5QmxvY2tMaXN0QmxvY2tDb250YWluZXInKTtcbndwLmhvb2tzLmFkZEZpbHRlcignZWRpdG9yLkJsb2NrTGlzdEJsb2NrJywgJ2d1dGVuc3RyYXAvY29yZS9tb2RpZnktZWxlbWVudC1lZGl0JywgbW9kaWZ5UmV1c2FibGVDb3JlQmxvY2spO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvcmUvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///7\n");

/***/ })
/******/ ]);