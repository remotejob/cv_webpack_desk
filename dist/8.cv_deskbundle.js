webpackJsonp([8],{

/***/ 501:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactBootstrap = __webpack_require__(222);

	var _reactRouter = __webpack_require__(160);

	var _reactDom = __webpack_require__(159);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _reactDocumentMeta = __webpack_require__(473);

	var _reactDocumentMeta2 = _interopRequireDefault(_reactDocumentMeta);

	var _ContactsDashboard = __webpack_require__(502);

	var _ContactsDashboard2 = _interopRequireDefault(_ContactsDashboard);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var dark = 'hsl(200, 20%, 20%)';
	var styles = {};

	styles.wrapper = {
		padding: '10px 20px',
		overflow: 'hidden',
		background: dark

	};

	styles.table = {
		marginTop: '70px'
	};

	var Contacts = function (_React$Component) {
		_inherits(Contacts, _React$Component);

		function Contacts(props) {
			_classCallCheck(this, Contacts);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Contacts).call(this, props));

			_this.state = {
				data: {}

			};
			return _this;
		}

		_createClass(Contacts, [{
			key: 'handleReturn',
			value: function handleReturn() {
				_reactRouter.browserHistory.push('/');
			}
		}, {
			key: 'componentWillMount',
			value: function componentWillMount() {
				//		console.log("Willmount Details",this.props.params.id)

			}
		}, {
			key: 'componentDidMount',
			value: function componentDidMount() {

				console.log(document.domain);
				var site = document.domain;
				var request = new XMLHttpRequest();
				request.open('GET', '/www/' + site + '/contacts/contacts.html.json', true);

				request.onload = function () {
					if (request.status >= 200 && request.status < 400) {
						// Success!			 
						var data = JSON.parse(request.responseText);
						//			    console.log(data)
						this.setState({ data: data });
					} else {
						// We reached our target server, but it returned an error

					}
				}.bind(this);

				request.onerror = function () {
					// There was a connection error of some sort
				};

				request.send();
			}
		}, {
			key: 'componentWillReceiveProps',
			value: function componentWillReceiveProps() {
				//		console.log("componentWillReceiveProps Details",this.props.params)

			}
		}, {
			key: 'componentWillUpdate',
			value: function componentWillUpdate(prevProps) {
				//		console.log("Details componentWillUpdate")	
			}
		}, {
			key: 'componentDidUpdate',
			value: function componentDidUpdate(prevProps) {

				//		console.log("Details componentDidUpdate")

			}
		}, {
			key: 'componentWillUnmount',
			value: function componentWillUnmount() {}
		}, {
			key: 'render',
			value: function render() {

				var contents = this.state.data.Contents;
				var meta = {};
				meta = {
					title: "Contacts",
					description: "Contacts freelancer"
				};

				return _react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(_reactDocumentMeta2.default, meta),
					_react2.default.createElement(
						'div',
						{ style: styles.wrapper },
						_react2.default.createElement(
							'h1',
							null,
							'Contacts'
						),
						_react2.default.createElement(
							_reactBootstrap.Well,
							null,
							_react2.default.createElement(
								_reactBootstrap.Button,
								{ onClick: this.handleReturn, bsStyle: 'primary', bsSize: 'large', className: 'pull-right' },
								'Return'
							),
							_react2.default.createElement(
								'div',
								{ style: styles.table },
								this.props.children || _react2.default.createElement(_ContactsDashboard2.default, null)
							)
						)
					),
					_react2.default.createElement(
						'div',
						{ id: 'background' },
						' ',
						contents
					)
				);
			}
		}]);

		return Contacts;
	}(_react2.default.Component);

	module.exports = Contacts;

/***/ },

/***/ 502:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(160);

	var _reactBootstrap = __webpack_require__(222);

	var _reactFontawesome = __webpack_require__(503);

	var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ContactsDashboard = function (_React$Component) {
		_inherits(ContactsDashboard, _React$Component);

		function ContactsDashboard(props) {
			_classCallCheck(this, ContactsDashboard);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ContactsDashboard).call(this, props));

			_this.state = {
				data: []

			};

			return _this;
		}

		_createClass(ContactsDashboard, [{
			key: 'componentDidMount',
			value: function componentDidMount() {

				//		console.log("DetailsDashboard componentDidMount")
				//		this.setState({languages: this.languages})

			}
		}, {
			key: 'componentWillUpdate',
			value: function componentWillUpdate(prevProps) {
				//		console.log("DetailsDashboard componentWillUpdate")	
			}
		}, {
			key: 'componentDidUpdate',
			value: function componentDidUpdate(prevProps) {

				//		console.log("DetailsDashboard componentDidUpdate")

			}
		}, {
			key: 'componentWillMount',
			value: function componentWillMount() {}
		}, {
			key: 'componentWillReceiveProps',
			value: function componentWillReceiveProps(nextProps) {

				this.setState({ data: nextProps.data });
				//		console.log(this.props)
			}
		}, {
			key: 'render',
			value: function render() {

				return _react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(
						_reactBootstrap.Table,
						{ responsive: true },
						_react2.default.createElement(
							'tbody',
							null,
							_react2.default.createElement(
								'tr',
								null,
								_react2.default.createElement(
									'td',
									null,
									_react2.default.createElement(_reactFontawesome2.default, { name: 'home', size: '4x' }),
									' '
								),
								_react2.default.createElement(
									'td',
									null,
									'Högberginkuja 1',
									_react2.default.createElement('br', null),
									'10820 Lappohja',
									_react2.default.createElement('br', null),
									'Finland'
								)
							),
							_react2.default.createElement(
								'tr',
								null,
								_react2.default.createElement(
									'td',
									null,
									_react2.default.createElement(_reactFontawesome2.default, { name: 'phone', size: '4x' }),
									' '
								),
								_react2.default.createElement(
									'td',
									null,
									'+358451202801'
								)
							),
							_react2.default.createElement(
								'tr',
								null,
								_react2.default.createElement(
									'td',
									null,
									_react2.default.createElement(_reactFontawesome2.default, { name: 'envelope', size: '4x' }),
									' '
								),
								_react2.default.createElement(
									'td',
									null,
									'support@mazurov.eu'
								)
							),
							_react2.default.createElement(
								'tr',
								null,
								_react2.default.createElement(
									'td',
									null,
									_react2.default.createElement(_reactFontawesome2.default, { name: 'skype', size: '4x' }),
									' '
								),
								_react2.default.createElement(
									'td',
									null,
									'mazurovfi'
								)
							)
						)
					)
				);
			}
		}]);

		return ContactsDashboard;
	}(_react2.default.Component);

	exports.default = ContactsDashboard;

/***/ }

});