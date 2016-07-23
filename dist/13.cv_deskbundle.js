webpackJsonp([13],{

/***/ 494:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactBootstrap = __webpack_require__(218);

	var _reactRouter = __webpack_require__(160);

	var _reactDom = __webpack_require__(159);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _BlogItemDetailsDashboard = __webpack_require__(495);

	var _BlogItemDetailsDashboard2 = _interopRequireDefault(_BlogItemDetailsDashboard);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	//import StarRating from 'react-star-rating'


	var dark = 'hsl(200, 20%, 20%)';
	var light = '#fff';
	var styles = {};

	styles.wrapper = {
		padding: '10px 20px',
		overflow: 'hidden',
		background: dark
		//  color: light
	};

	var topic = "";
	var stitle = "";

	var BlogItemDetails = function (_React$Component) {
		_inherits(BlogItemDetails, _React$Component);

		function BlogItemDetails(props) {
			_classCallCheck(this, BlogItemDetails);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(BlogItemDetails).call(this, props));

			_this.state = {
				data: {},
				mark: {}

			};
			return _this;
		}

		_createClass(BlogItemDetails, [{
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
				//		console.log("Didmount blogItems",this.props.params)
				var site = document.domain;

				topic = this.props.params.topic;
				var stitle = this.props.params.stitle;

				var request = new XMLHttpRequest();
				request.open('GET', '/en_US_programming_blog.json', true);

				request.onload = function () {
					if (request.status >= 200 && request.status < 400) {
						// Success!			 
						var data = JSON.parse(request.responseText);
						this.setState({ data: data });
					} else {
						// We reached our target server, but it returned an error

					}
				}.bind(this);

				request.onerror = function () {
					// There was a connection error of some sort
				};

				request.send();
				//			
				var requestm = new XMLHttpRequest();
				requestm.open('GET', '/www/' + site + '/blog/' + topic + '/' + stitle + '/' + stitle + '.html.json', true);

				requestm.onload = function () {
					if (requestm.status >= 200 && requestm.status < 400) {
						// Success!			 
						var data = JSON.parse(requestm.responseText);
						this.setState({ mark: data });
					} else {}
				}.bind(this);

				requestm.onerror = function () {
					// There was a connection error of some sort
				};

				requestm.send();
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
				var oldId = prevProps.params.stitle;
				var newId = this.props.params.stitle;

				if (newId !== oldId) {

					var requestm = new XMLHttpRequest();
					requestm.open('GET', '/www/' + site + '/blog/' + topic + '/' + stitle + '/' + stitle + '.html.json', true);

					requestm.onload = function () {
						if (requestm.status >= 200 && requestm.status < 400) {
							// Success!			 
							var data = JSON.parse(requestm.responseText);
							this.setState({ mark: data });
						} else {}
					}.bind(this);

					requestm.onerror = function () {
						// There was a connection error of some sort
					};

					requestm.send();
				}
			}
		}, {
			key: 'componentDidUpdate',
			value: function componentDidUpdate(prevProps) {

				//		console.log("Details componentDidUpdate")
				//		console.log("BlogItemDetails componentDidUpdate",prevProps.params,this.props.params)

				var oldId = prevProps.params.stitle;
				var newId = this.props.params.stitle;

				if (newId !== oldId) {

					var requestm = new XMLHttpRequest();
					requestm.open('GET', '/www/' + site + '/blog/' + topic + '/' + stitle + '/' + stitle + '.html.json', true);

					requestm.onload = function () {
						if (requestm.status >= 200 && requestm.status < 400) {
							// Success!			 
							var data = JSON.parse(requestm.responseText);
							this.setState({ mark: data });
						} else {}
					}.bind(this);

					requestm.onerror = function () {
						// There was a connection error of some sort
					};

					requestm.send();
				}
			}
		}, {
			key: 'componentWillUnmount',
			value: function componentWillUnmount() {}
		}, {
			key: 'render',
			value: function render() {

				var contents = this.state.mark.Contents;
				//	console.log(this.state.data)
				return _react2.default.createElement(
					'div',
					null,
					this.props.children || _react2.default.createElement(_BlogItemDetailsDashboard2.default, { data: this.state.data, topic: this.props.params.topic, stitle: this.props.params.stitle }),
					_react2.default.createElement(
						'div',
						{ id: 'background' },
						' ',
						contents
					)
				);
			}
		}]);

		return BlogItemDetails;
	}(_react2.default.Component);

	module.exports = BlogItemDetails;

/***/ },

/***/ 495:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(160);

	var _reactBootstrap = __webpack_require__(218);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var BlogItemDetailsDashboard = function (_React$Component) {
		_inherits(BlogItemDetailsDashboard, _React$Component);

		function BlogItemDetailsDashboard(props) {
			_classCallCheck(this, BlogItemDetailsDashboard);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(BlogItemDetailsDashboard).call(this, props));

			_this.state = {
				data: {},
				topic: "",
				stitle: "",
				title: ""

			};

			return _this;
		}

		_createClass(BlogItemDetailsDashboard, [{
			key: 'componentDidMount',
			value: function componentDidMount() {}
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
				//		console.log("DetailsDashboard  receive props",nextProps.data.title)

				this.setState({ data: nextProps.data });
				this.setState({ topic: nextProps.topic });
				this.setState({ stitle: nextProps.stitle });

				//		console.log(this.props)
			}
		}, {
			key: 'render',
			value: function render() {

				var htmlTableItems = [];
				//		  console.log(this.state.data)
				var title = "";

				if (Object.keys(this.state.data).length > 0) {

					Object.getOwnPropertyNames(this.state.data).forEach(function (val, idx, array) {

						if (this.state.topic === val) {
							this.state.data[val].forEach(function (val) {

								if (this.state.stitle === val.Stitle) {
									//							  console.log(val)
									var key = val + val.Stitle;
									title = val.Title;
									var outlink = '/blog/' + this.state.topic + '/' + val.Stitle;
									//						  console.log(outlink)
									htmlTableItems.push(_react2.default.createElement(
										'tr',
										{ key: key },
										_react2.default.createElement(
											'td',
											null,
											val.Contents
										)
									));
								}
							}.bind(this));
						}
					}.bind(this));
				};

				return _react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(
						'h3',
						null,
						title
					),
					_react2.default.createElement(
						_reactBootstrap.Table,
						{ responsive: true },
						_react2.default.createElement(
							'tbody',
							null,
							htmlTableItems
						)
					)
				);
			}
		}]);

		return BlogItemDetailsDashboard;
	}(_react2.default.Component);

	exports.default = BlogItemDetailsDashboard;

/***/ }

});