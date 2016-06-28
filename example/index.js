/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(4);
	
	var _App = __webpack_require__(5);
	
	var _App2 = _interopRequireDefault(_App);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	window.onload = function () {
	  var rootElement = document.getElementById('wrapper');
	  (0, _reactDom.render)(_react2.default.createElement(_App2.default, null), rootElement);
	};

/***/ },
/* 1 */,
/* 2 */,
/* 3 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = ReactDOM;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _AddTodo = __webpack_require__(6);
	
	var _AddTodo2 = _interopRequireDefault(_AddTodo);
	
	var _TodoList = __webpack_require__(7);
	
	var _TodoList2 = _interopRequireDefault(_TodoList);
	
	var _Footer = __webpack_require__(9);
	
	var _Footer2 = _interopRequireDefault(_Footer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var App = function (_Component) {
	  _inherits(App, _Component);
	
	  function App() {
	    _classCallCheck(this, App);
	
	    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
	  }
	
	  App.prototype.render = function render() {
	    return _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(_AddTodo2.default, {
	        onAddClick: function onAddClick(text) {
	          return console.log('add todo', text);
	        } }),
	      _react2.default.createElement(_TodoList2.default, {
	        todos: [{
	          text: 'Use Redux',
	          completed: true
	        }, {
	          text: 'Learn to connect it to React',
	          completed: false
	        }],
	        onTodoClick: function onTodoClick(index) {
	          return console.log('todo clicked', index);
	        } }),
	      _react2.default.createElement(_Footer2.default, {
	        filter: 'SHOW_ALL',
	        onFilterChange: function onFilterChange(filter) {
	          return console.log('filter change', filter);
	        } })
	    );
	  };
	
	  return App;
	}(_react.Component);
	
	exports.default = App;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var AddTodo = function (_Component) {
	  _inherits(AddTodo, _Component);
	
	  function AddTodo() {
	    _classCallCheck(this, AddTodo);
	
	    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
	  }
	
	  AddTodo.prototype.render = function render() {
	    var _this2 = this;
	
	    return _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement('input', { type: 'text', ref: 'input' }),
	      _react2.default.createElement(
	        'button',
	        { onClick: function onClick(e) {
	            return _this2.handleClick(e);
	          } },
	        'Add'
	      )
	    );
	  };
	
	  AddTodo.prototype.handleClick = function handleClick(e) {
	    var node = this.refs.input;
	    var text = node.value.trim();
	    this.props.onAddClick(text);
	    node.value = '';
	  };
	
	  return AddTodo;
	}(_react.Component);
	
	exports.default = AddTodo;
	
	
	AddTodo.propTypes = {
	  onAddClick: _react.PropTypes.func.isRequired
	};

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Todo = __webpack_require__(8);
	
	var _Todo2 = _interopRequireDefault(_Todo);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var TodoList = function (_Component) {
	  _inherits(TodoList, _Component);
	
	  function TodoList() {
	    _classCallCheck(this, TodoList);
	
	    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
	  }
	
	  TodoList.prototype.render = function render() {
	    var _this2 = this;
	
	    return _react2.default.createElement(
	      'ul',
	      null,
	      this.props.todos.map(function (todo, index) {
	        return _react2.default.createElement(_Todo2.default, _extends({}, todo, {
	          key: index,
	          onClick: function onClick() {
	            return _this2.props.onTodoClick(index);
	          } }));
	      })
	    );
	  };
	
	  return TodoList;
	}(_react.Component);
	
	exports.default = TodoList;
	
	
	TodoList.propTypes = {
	  onTodoClick: _react.PropTypes.func.isRequired,
	  todos: _react.PropTypes.arrayOf(_react.PropTypes.shape({
	    text: _react.PropTypes.string.isRequired,
	    completed: _react.PropTypes.bool.isRequired
	  }).isRequired).isRequired
	};

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Todo = function (_Component) {
	  _inherits(Todo, _Component);
	
	  function Todo() {
	    _classCallCheck(this, Todo);
	
	    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
	  }
	
	  Todo.prototype.render = function render() {
	    return _react2.default.createElement(
	      'li',
	      {
	        onClick: this.props.onClick,
	        style: {
	          textDecoration: this.props.completed ? 'line-through' : 'none',
	          cursor: this.props.completed ? 'default' : 'pointer'
	        } },
	      this.props.text
	    );
	  };
	
	  return Todo;
	}(_react.Component);
	
	exports.default = Todo;
	
	
	Todo.propTypes = {
	  onClick: _react.PropTypes.func.isRequired,
	  text: _react.PropTypes.string.isRequired,
	  completed: _react.PropTypes.bool.isRequired
	};

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Footer = function (_Component) {
	  _inherits(Footer, _Component);
	
	  function Footer() {
	    _classCallCheck(this, Footer);
	
	    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
	  }
	
	  Footer.prototype.renderFilter = function renderFilter(filter, name) {
	    var _this2 = this;
	
	    if (filter === this.props.filter) {
	      return name;
	    }
	
	    return _react2.default.createElement(
	      'a',
	      { href: '#', onClick: function onClick(e) {
	          e.preventDefault();
	          _this2.props.onFilterChange(filter);
	        } },
	      name
	    );
	  };
	
	  Footer.prototype.render = function render() {
	    return _react2.default.createElement(
	      'p',
	      null,
	      'Show:',
	      ' ',
	      this.renderFilter('SHOW_ALL', 'All'),
	      ', ',
	      this.renderFilter('SHOW_COMPLETED', 'Completed'),
	      ', ',
	      this.renderFilter('SHOW_ACTIVE', 'Active'),
	      '.'
	    );
	  };
	
	  return Footer;
	}(_react.Component);
	
	exports.default = Footer;
	
	
	Footer.propTypes = {
	  onFilterChange: _react.PropTypes.func.isRequired,
	  filter: _react.PropTypes.oneOf(['SHOW_ALL', 'SHOW_COMPLETED', 'SHOW_ACTIVE']).isRequired
	};

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgODRlNGViZTI5YmZjYmEzNWMwZmIiLCJ3ZWJwYWNrOi8vLy4vZXhhbXBsZS9hcHAuanN4Iiwid2VicGFjazovLy9leHRlcm5hbCBcIlJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUmVhY3RET01cIiIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9BcHAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvQWRkVG9kby5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9Ub2RvTGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9Ub2RvLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL0Zvb3Rlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7O0FDdENBOzs7O0FBQ0E7O0FBQ0E7Ozs7OztBQUVBLFFBQU8sTUFBUCxHQUFnQixZQUFNO0FBQ3BCLE9BQUksY0FBYyxTQUFTLGNBQVQsQ0FBd0IsU0FBeEIsQ0FBbEI7QUFDQSx5QkFDRSxrREFERixFQUVFLFdBRkY7QUFJRCxFQU5ELEM7Ozs7Ozs7O0FDSkEsd0I7Ozs7OztBQ0FBLDJCOzs7Ozs7Ozs7Ozs7QUNBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0tBRXFCLEc7Ozs7Ozs7OztpQkFDbkIsTSxxQkFBUztBQUNQLFlBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFDRSxxQkFBWTtBQUFBLGtCQUNWLFFBQVEsR0FBUixDQUFZLFVBQVosRUFBd0IsSUFBeEIs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RUFBTTtBQUFBOztBQUN6QixTQUFJLFdBQVcsS0FBSyxLQUFMLENBQVcsTUFBMUIsRUFBa0M7QUFDaEMsY0FBTyxJQUFQO0FBQ0Q7O0FBRUQsWUFDRTtBQUFBO0FBQUEsU0FBRyxNQUFLLEdBQVIsRUFBWSxTQUFTLG9CQUFLO0FBQ3hCLGFBQUUsY0FBRjtBQUNBLGtCQUFLLEtBQUwsQ0FBVyxjQUFYLENBQTBCLE1BQTFCO0FBQ0QsVUFIRDtBQUlHO0FBSkgsTUFERjtBQVFELEk7O29CQUVELE0scUJBQVM7QUFDUCxZQUNFO0FBQUE7QUFBQTtBQUFBO0FBRUcsVUFGSDtBQUdHLFlBQUssWUFBTCxDQUFrQixVQUFsQixFQUE4QixLQUE5QixDQUhIO0FBSUcsV0FKSDtBQUtHLFlBQUssWUFBTCxDQUFrQixnQkFBbEIsRUFBb0MsV0FBcEMsQ0FMSDtBQU1HLFdBTkg7QUFPRyxZQUFLLFlBQUwsQ0FBa0IsYUFBbEIsRUFBaUMsUUFBakMsQ0FQSDtBQUFBO0FBQUEsTUFERjtBQVlELEk7Ozs7O21CQTdCa0IsTTs7O0FBZ0NyQixRQUFPLFNBQVAsR0FBbUI7QUFDakIsbUJBQWdCLGlCQUFVLElBQVYsQ0FBZSxVQURkO0FBRWpCLFdBQVEsaUJBQVUsS0FBVixDQUFnQixDQUN0QixVQURzQixFQUV0QixnQkFGc0IsRUFHdEIsYUFIc0IsQ0FBaEIsRUFJTDtBQU5jLEVBQW5CLEMiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIDg0ZTRlYmUyOWJmY2JhMzVjMGZiXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSAncmVhY3QtZG9tJ1xuaW1wb3J0IEFwcCBmcm9tICcuLi9zcmMvanMvY29tcG9uZW50cy9BcHAnXG5cbndpbmRvdy5vbmxvYWQgPSAoKSA9PiB7XG4gIGxldCByb290RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3cmFwcGVyJylcbiAgcmVuZGVyKFxuICAgIDxBcHAgLz4sXG4gICAgcm9vdEVsZW1lbnRcbiAgKVxufTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vZXhhbXBsZS9hcHAuanN4XG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBSZWFjdDtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwiUmVhY3RcIlxuICoqIG1vZHVsZSBpZCA9IDNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gUmVhY3RET007XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcIlJlYWN0RE9NXCJcbiAqKiBtb2R1bGUgaWQgPSA0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgQWRkVG9kbyBmcm9tICcuLi9jb21wb25lbnRzL0FkZFRvZG8nXG5pbXBvcnQgVG9kb0xpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9Ub2RvTGlzdCdcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Gb290ZXInXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPEFkZFRvZG9cbiAgICAgICAgICBvbkFkZENsaWNrPXt0ZXh0ID0+XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnYWRkIHRvZG8nLCB0ZXh0KVxuICAgICAgICAgIH0gLz5cbiAgICAgICAgPFRvZG9MaXN0XG4gICAgICAgICAgdG9kb3M9e1xuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGV4dDogJ1VzZSBSZWR1eCcsXG4gICAgICAgICAgICAgICAgY29tcGxldGVkOiB0cnVlXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0ZXh0OiAnTGVhcm4gdG8gY29ubmVjdCBpdCB0byBSZWFjdCcsXG4gICAgICAgICAgICAgICAgY29tcGxldGVkOiBmYWxzZVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfVxuICAgICAgICAgIG9uVG9kb0NsaWNrPXtpbmRleCA9PlxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3RvZG8gY2xpY2tlZCcsIGluZGV4KVxuICAgICAgICAgIH0gLz5cbiAgICAgICAgPEZvb3RlclxuICAgICAgICAgIGZpbHRlcj0nU0hPV19BTEwnXG4gICAgICAgICAgb25GaWx0ZXJDaGFuZ2U9e2ZpbHRlciA9PlxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2ZpbHRlciBjaGFuZ2UnLCBmaWx0ZXIpXG4gICAgICAgICAgfSAvPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9qcy9jb21wb25lbnRzL0FwcC5qc1xuICoqLyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBZGRUb2RvIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgcmVmPSdpbnB1dCcgLz5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtlID0+IHRoaXMuaGFuZGxlQ2xpY2soZSl9PlxuICAgICAgICAgIEFkZFxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuXG4gIGhhbmRsZUNsaWNrKGUpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5yZWZzLmlucHV0XG4gICAgY29uc3QgdGV4dCA9IG5vZGUudmFsdWUudHJpbSgpXG4gICAgdGhpcy5wcm9wcy5vbkFkZENsaWNrKHRleHQpXG4gICAgbm9kZS52YWx1ZSA9ICcnXG4gIH1cbn1cblxuQWRkVG9kby5wcm9wVHlwZXMgPSB7XG4gIG9uQWRkQ2xpY2s6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2pzL2NvbXBvbmVudHMvQWRkVG9kby5qc1xuICoqLyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFRvZG8gZnJvbSAnLi9Ub2RvJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb2RvTGlzdCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPHVsPlxuICAgICAgICB7dGhpcy5wcm9wcy50b2Rvcy5tYXAoKHRvZG8sIGluZGV4KSA9PlxuICAgICAgICAgIDxUb2RvIHsuLi50b2RvfVxuICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy5vblRvZG9DbGljayhpbmRleCl9IC8+XG4gICAgICAgICl9XG4gICAgICA8L3VsPlxuICAgIClcbiAgfVxufVxuXG5Ub2RvTGlzdC5wcm9wVHlwZXMgPSB7XG4gIG9uVG9kb0NsaWNrOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICB0b2RvczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnNoYXBlKHtcbiAgICB0ZXh0OiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgY29tcGxldGVkOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkXG4gIH0pLmlzUmVxdWlyZWQpLmlzUmVxdWlyZWRcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2pzL2NvbXBvbmVudHMvVG9kb0xpc3QuanNcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9kbyBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGxpXG4gICAgICAgIG9uQ2xpY2s9e3RoaXMucHJvcHMub25DbGlja31cbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICB0ZXh0RGVjb3JhdGlvbjogdGhpcy5wcm9wcy5jb21wbGV0ZWQgPyAnbGluZS10aHJvdWdoJyA6ICdub25lJyxcbiAgICAgICAgICBjdXJzb3I6IHRoaXMucHJvcHMuY29tcGxldGVkID8gJ2RlZmF1bHQnIDogJ3BvaW50ZXInXG4gICAgICAgIH19PlxuICAgICAgICB7dGhpcy5wcm9wcy50ZXh0fVxuICAgICAgPC9saT5cbiAgICApXG4gIH1cbn1cblxuVG9kby5wcm9wVHlwZXMgPSB7XG4gIG9uQ2xpY2s6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIHRleHQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgY29tcGxldGVkOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkXG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9qcy9jb21wb25lbnRzL1RvZG8uanNcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9vdGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyRmlsdGVyKGZpbHRlciwgbmFtZSkge1xuICAgIGlmIChmaWx0ZXIgPT09IHRoaXMucHJvcHMuZmlsdGVyKSB7XG4gICAgICByZXR1cm4gbmFtZVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8YSBocmVmPScjJyBvbkNsaWNrPXtlID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIHRoaXMucHJvcHMub25GaWx0ZXJDaGFuZ2UoZmlsdGVyKVxuICAgICAgfX0+XG4gICAgICAgIHtuYW1lfVxuICAgICAgPC9hPlxuICAgIClcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPHA+XG4gICAgICAgIFNob3c6XG4gICAgICAgIHsnICd9XG4gICAgICAgIHt0aGlzLnJlbmRlckZpbHRlcignU0hPV19BTEwnLCAnQWxsJyl9XG4gICAgICAgIHsnLCAnfVxuICAgICAgICB7dGhpcy5yZW5kZXJGaWx0ZXIoJ1NIT1dfQ09NUExFVEVEJywgJ0NvbXBsZXRlZCcpfVxuICAgICAgICB7JywgJ31cbiAgICAgICAge3RoaXMucmVuZGVyRmlsdGVyKCdTSE9XX0FDVElWRScsICdBY3RpdmUnKX1cbiAgICAgICAgLlxuICAgICAgPC9wPlxuICAgIClcbiAgfVxufVxuXG5Gb290ZXIucHJvcFR5cGVzID0ge1xuICBvbkZpbHRlckNoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgZmlsdGVyOiBQcm9wVHlwZXMub25lT2YoW1xuICAgICdTSE9XX0FMTCcsXG4gICAgJ1NIT1dfQ09NUExFVEVEJyxcbiAgICAnU0hPV19BQ1RJVkUnXG4gIF0pLmlzUmVxdWlyZWRcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2pzL2NvbXBvbmVudHMvRm9vdGVyLmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==