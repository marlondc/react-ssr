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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _express = __webpack_require__(4);

var _express2 = _interopRequireDefault(_express);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _redux = __webpack_require__(5);

var _reactRedux = __webpack_require__(1);

var _reactRouterDom = __webpack_require__(2);

var _server = __webpack_require__(6);

var _reducers = __webpack_require__(7);

var _reducers2 = _interopRequireDefault(_reducers);

var _routes = __webpack_require__(9);

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var port = 3000;

app.use(_express2.default.static('public'));

var renderFullPage = function renderFullPage(html, preloadedState) {
  return '\n    <!doctype html>\n    <html>\n      <head>\n        <title>Redux Universal Example</title>\n        <meta charset="UTF-8" />\n        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">\n        <link rel="shortcut icon" type="image/x-icon" href="favicon.ico" />\n        <link rel="stylesheet" type="text/css" href="main.css" />\n      </head>\n      <body>\n        <div id="root">' + html + '</div>\n        <script>\n          // WARNING: See the following for security issues around embedding JSON in HTML:\n          // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations\n          window.__PRELOADED_STATE__ = ' + JSON.stringify(preloadedState).replace(/</g, '\\u003c') + '\n        </script>\n        <script src="bundle.js"></script>\n      </body>\n    </html>\n  ';
};

var handleRender = function handleRender(req, res) {
  // Create a new Redux store instance
  var preloadedState = {
    name: 'MARLON',
    value: 0
  };

  var store = (0, _redux.createStore)(_reducers2.default, preloadedState);

  // Render the component to a string
  var html = (0, _server.renderToString)(_react2.default.createElement(
    _reactRedux.Provider,
    { store: store },
    _react2.default.createElement(
      _reactRouterDom.StaticRouter,
      { location: req.url, context: {} },
      _react2.default.createElement(_routes2.default, null)
    )
  ));

  // Grab the initial state from our Redux store
  var finalState = store.getState();

  // Send the rendered page back to the client
  res.send(renderFullPage(html, finalState));
};

app.use(handleRender);

app.listen(port, function () {
  return console.log('listening on port ' + port);
});

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _actions = __webpack_require__(8);

var INITIAL_STATE = {
  name: 'MARLON',
  value: 0
};

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments[1];

  switch (action.type) {
    case _actions.INCREMENT:
      return _extends({}, state, {
        value: state.value + 1
      });

    default:
      return state;
  }
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var INCREMENT = exports.INCREMENT = 'INCREMENT';
var increment = exports.increment = function increment() {
  return {
    type: INCREMENT
  };
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(2);

var _home = __webpack_require__(10);

var _home2 = _interopRequireDefault(_home);

var _about = __webpack_require__(14);

var _about2 = _interopRequireDefault(_about);

var _notFound = __webpack_require__(16);

var _notFound2 = _interopRequireDefault(_notFound);

var _nav = __webpack_require__(17);

var _nav2 = _interopRequireDefault(_nav);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'a',
      { href: '#content' },
      'Skip to Content'
    ),
    _react2.default.createElement(_nav2.default, null),
    _react2.default.createElement(
      _reactRouterDom.Switch,
      null,
      _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: _home2.default }),
      _react2.default.createElement(_reactRouterDom.Route, { path: '/about', component: _about2.default }),
      _react2.default.createElement(_reactRouterDom.Route, { component: _notFound2.default })
    )
  );
};

exports.default = App;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _reactRedux = __webpack_require__(1);

var _home = __webpack_require__(11);

var _home2 = _interopRequireDefault(_home);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state) {
  return _extends({}, state);
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    what: function what() {
      return dispatch(function () {
        return console.log('what');
      });
    },
    hello: function hello() {
      return console.log('hello');
    }
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_home2.default);

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _header = __webpack_require__(12);

var _header2 = _interopRequireDefault(_header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Home = function Home() {
  return _react2.default.createElement(
    _header2.default,
    null,
    'Marlon'
  );
};

exports.default = Home;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(13);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = function Header(_ref) {
  var type = _ref.type,
      children = _ref.children;

  switch (type) {
    case 'h1':
      return _react2.default.createElement(
        'h1',
        null,
        children
      );

    case 'h2':
      return _react2.default.createElement(
        'h2',
        null,
        children
      );

    case 'h3':
      return _react2.default.createElement(
        'h3',
        null,
        children
      );

    case 'h4':
      return _react2.default.createElement(
        'h4',
        null,
        children
      );

    default:
      return _react2.default.createElement(
        'h5',
        null,
        children
      );
  }
};

Header.defaultProps = {
  type: 'h1'
};

Header.propTypes = {
  type: _propTypes2.default.string,
  children: _propTypes2.default.string.isRequired
};

exports.default = Header;

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _reactRedux = __webpack_require__(1);

var _about = __webpack_require__(15);

var _about2 = _interopRequireDefault(_about);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state) {
  return _extends({}, state);
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    what: function what() {
      return dispatch(function () {
        return console.log('what');
      });
    },
    hello: function hello() {
      return console.log('hello');
    }
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_about2.default);

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var About = function About() {
  return _react2.default.createElement(
    'h1',
    null,
    'About'
  );
};

exports.default = About;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NotFound = function NotFound() {
  return _react2.default.createElement(
    'h1',
    null,
    'Not Found'
  );
};

exports.default = NotFound;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Navigation = function Navigation() {
  return _react2.default.createElement(
    'nav',
    null,
    _react2.default.createElement(
      'ul',
      { className: 'nav__list' },
      _react2.default.createElement(
        'li',
        { className: 'nav__link' },
        _react2.default.createElement(
          _reactRouterDom.Link,
          { to: '/' },
          'Home'
        )
      ),
      _react2.default.createElement(
        'li',
        { className: 'nav__link' },
        _react2.default.createElement(
          _reactRouterDom.Link,
          { to: '/about' },
          'About'
        )
      )
    )
  );
};

exports.default = Navigation;

/***/ })
/******/ ]);