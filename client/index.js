import { render } from 'react-dom';
import React from 'react';
import { Router, browserHistory } from 'react-router/es6';
//import rootRoute from 'pages/routes';
//import stubbedCourses from './stubs/REAL_ESTATE_OBJS'
import './index.html';
//import 'general.scss';
//import '../node_modules/bootstrap/dist/css/bootstrap.css';
//import { createStore, combineReducers} from 'redux'
//import { Provider } from 'react-redux'
//import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
//import * as reducers from './reducers'

const rootRoute = {
		  component: 'div',
		  childRoutes: [ {
		    path: '/',
		    component: require('./components/App'),
		    childRoutes: [
		      
		      require('./routes/Mjobs'),            
		      require('./routes/Blog'),   
		      require('./routes/Cvpdf'),            
		      require('./routes/Jobs'),
		      require('./routes/Contacts'),
		      require('./routes/Details'),
		      
		        

		    ]
		  } ]
		}

//const reducer = combineReducers({
//	  reducers,
//	  routing: routerReducer
//	})
//
//const store = createStore(reducer)
//
//const history = syncHistoryWithStore(browserHistory, store)

//render(
		render(<Router history={browserHistory} routes={rootRoute}  />, document.getElementById("root"))

//);
