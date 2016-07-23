/*eslint-disable no-unused-vars */
import React from 'react'
import { render } from 'react-dom'
import { Router, browserHistory } from 'react-router'
//import stubbedCourses from './stubs/REAL_ESTATE_OBJS'

const rootRoute = {
  component: 'div',
  childRoutes: [ {
    path: '/',
    component: require('./components/App'),
    childRoutes: [
          
      require('./routes/Blog'),   
      require('./routes/Cvpdf'),            
      require('./routes/Jobs'),
      require('./routes/Contacts'),
      require('./routes/Details'),
      
        

    ]
  } ]
}

render(
  <Router history={browserHistory} routes={rootRoute}  />, document.getElementById('content')
)

