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

var _game = __webpack_require__(21);

var _game2 = _interopRequireDefault(_game);

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
  var preloadedState = {};

  var store = (0, _redux.createStore)((0, _redux.combineReducers)({
    reducer: _reducers2.default,
    game: _game2.default
  }), preloadedState);

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

var _game = __webpack_require__(19);

var _game2 = _interopRequireDefault(_game);

var _notFound = __webpack_require__(16);

var _notFound2 = _interopRequireDefault(_notFound);

var _nav = __webpack_require__(17);

var _nav2 = _interopRequireDefault(_nav);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App() {
  return _react2.default.createElement(
    'div',
    { className: 'page' },
    _react2.default.createElement(
      'a',
      { href: '#content', className: 'skip-to' },
      'Skip to Content'
    ),
    _react2.default.createElement(_nav2.default, null),
    _react2.default.createElement(
      _reactRouterDom.Switch,
      null,
      _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: _home2.default }),
      _react2.default.createElement(_reactRouterDom.Route, { path: '/about', component: _about2.default }),
      _react2.default.createElement(_reactRouterDom.Route, { path: '/game', component: _game2.default }),
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
    'div',
    { id: 'content' },
    _react2.default.createElement(
      'header',
      null,
      _react2.default.createElement(
        'div',
        { className: 'container' },
        _react2.default.createElement(
          _header2.default,
          null,
          'Marlon'
        ),
        _react2.default.createElement(
          'ul',
          null,
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              'a',
              { href: 'https://github.com/marlondc' },
              'github'
            )
          )
        )
      )
    )
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

var _uuid = __webpack_require__(18);

var _uuid2 = _interopRequireDefault(_uuid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = function Header(_ref) {
  var type = _ref.type,
      children = _ref.children;
  return [type === 'h1' && _react2.default.createElement(
    'h1',
    { key: (0, _uuid2.default)() },
    children
  ), type === 'h2' && _react2.default.createElement(
    'h2',
    { key: (0, _uuid2.default)() },
    children
  ), type === 'h3' && _react2.default.createElement(
    'h3',
    { key: (0, _uuid2.default)() },
    children
  ), type === 'h4' && _react2.default.createElement(
    'h4',
    { key: (0, _uuid2.default)() },
    children
  ), type === 'h5' && _react2.default.createElement(
    'h5',
    { key: (0, _uuid2.default)() },
    children
  )];
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

var _header = __webpack_require__(12);

var _header2 = _interopRequireDefault(_header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var About = function About() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'header',
      null,
      _react2.default.createElement(
        _header2.default,
        null,
        'About'
      )
    )
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
        { className: 'nav__list__item' },
        _react2.default.createElement(
          _reactRouterDom.NavLink,
          {
            exact: true,
            to: '/',
            activeClassName: 'nav__link--selected',
            className: 'nav__link'
          },
          'Home'
        )
      ),
      _react2.default.createElement(
        'li',
        { className: 'nav__list__item' },
        _react2.default.createElement(
          _reactRouterDom.NavLink,
          {
            to: '/about',
            activeClassName: 'nav__link--selected',
            className: 'nav__link'
          },
          'About'
        )
      ),
      _react2.default.createElement(
        'li',
        { className: 'nav__list__item' },
        _react2.default.createElement(
          _reactRouterDom.NavLink,
          {
            to: '/game',
            activeClassName: 'nav__link--selected',
            className: 'nav__link'
          },
          'Game'
        )
      )
    )
  );
};

exports.default = Navigation;

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("uuid");

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(1);

var _game = __webpack_require__(20);

var _game2 = _interopRequireDefault(_game);

var _game3 = __webpack_require__(22);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(_ref) {
  var game = _ref.game;
  return game;
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    pick: function pick(pos) {
      return dispatch((0, _game3.pick)(pos));
    }
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_game2.default);

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(13);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _header = __webpack_require__(12);

var _header2 = _interopRequireDefault(_header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Game = function Game(_ref) {
  var wins = _ref.wins,
      X = _ref.X,
      O = _ref.O,
      pick = _ref.pick,
      losses = _ref.losses;
  return _react2.default.createElement(
    'div',
    { id: 'content', className: 'container' },
    _react2.default.createElement(
      _header2.default,
      null,
      'Game'
    ),
    _react2.default.createElement(
      'p',
      null,
      'Wins: ',
      wins
    ),
    _react2.default.createElement(
      'p',
      null,
      'Losses: ',
      losses
    ),
    _react2.default.createElement(
      'div',
      { className: 'game__grid' },
      [0, 1, 2, 3, 4, 5, 6, 7, 8].map(function (pos) {
        if (X.includes(pos)) {
          return _react2.default.createElement(
            'div',
            { className: 'game__square', key: pos },
            _react2.default.createElement(
              'p',
              null,
              'X'
            )
          );
        } else if (O.includes(pos)) {
          return _react2.default.createElement(
            'div',
            { className: 'game__square', key: pos },
            _react2.default.createElement(
              'p',
              null,
              'O'
            )
          );
        }

        return _react2.default.createElement(
          'div',
          {
            className: 'game__square game__square--clickable',
            key: pos, onClick: function onClick() {
              return pick(pos);
            }
          },
          '?'
        );
      })
    )
  );
};

Game.propTypes = {
  wins: _propTypes2.default.number.isRequired,
  losses: _propTypes2.default.number.isRequired,
  X: _propTypes2.default.arrayOf(_propTypes2.default.number).isRequired,
  O: _propTypes2.default.arrayOf(_propTypes2.default.number).isRequired,
  pick: _propTypes2.default.func.isRequired
};

exports.default = Game;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _game = __webpack_require__(22);

var _game2 = __webpack_require__(23);

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var initialState = {
  wins: 0,
  losses: 0,
  X: [],
  O: []
};

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case _game.PICK:
      {
        var pos = action.pos;

        var newX = [].concat(_toConsumableArray(state.X), [pos]);

        if ((0, _game2.containsWinningCombination)(newX)) {
          return _extends({}, state, {
            wins: state.wins + 1,
            X: [],
            O: []
          });
        }

        var newO = [].concat(_toConsumableArray(state.O), [(0, _game2.pickSquare)(newX, state.O)]);

        if ((0, _game2.containsWinningCombination)(newO)) {
          return _extends({}, state, {
            losses: state.losses + 1,
            X: [],
            O: []
          });
        }

        return _extends({}, state, {
          X: newX,
          O: newO
        });
      }
    default:
      return state;
  }
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var PICK = exports.PICK = 'PICK';
var pick = exports.pick = function pick(pos) {
  return {
    type: PICK,
    pos: pos
  };
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var containsWinningCombination = exports.containsWinningCombination = function containsWinningCombination(arr) {
  if (
  // horizontal combos
  arr.includes(0) && arr.includes(1) && arr.includes(2) || arr.includes(3) && arr.includes(4) && arr.includes(5) || arr.includes(6) && arr.includes(7) && arr.includes(8) ||
  // vertical combos
  arr.includes(0) && arr.includes(3) && arr.includes(6) || arr.includes(1) && arr.includes(4) && arr.includes(7) || arr.includes(2) && arr.includes(5) && arr.includes(8) ||
  // diagonal combos
  arr.includes(0) && arr.includes(4) && arr.includes(8) || arr.includes(2) && arr.includes(4) && arr.includes(6)) {
    return true;
  }
  return false;
};

var pickSquare = exports.pickSquare = function pickSquare(xArr, oArr) {
  var randInt = Math.floor(Math.random() * 9);
  if (!xArr.includes(randInt) && !oArr.includes(randInt)) {
    return randInt;
  }
  return pickSquare(xArr, oArr);
};

/***/ })
/******/ ]);