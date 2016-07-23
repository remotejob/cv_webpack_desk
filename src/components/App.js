import React from 'react'
import {Grid} from 'react-bootstrap'
import DocumentMeta from 'react-document-meta'
import GlobalNav from './GlobalNav'
import Dashboard from './Dashboard'
import Head from './Head'



class App extends React.Component {
	constructor(props){
	    super(props);
	    this.state = {
	    		data: []
	    	
	    }
	    
	  }
			
	componentWillUpdate(){

	}
	
	componentDidMount(){

				   
	}
	componentWillReceiveProps(){

	}
	
	
  render() {
	  
	 const meta = {
		title: 'CV',
		description: 'CV curriculum vitae'
     }
	  	  
    return (
      <div>
      <DocumentMeta {...meta} />	 
      
      <Grid>
      	<GlobalNav />
      	<Head />
      	{this.props.children || <Dashboard  />} 
      	
      	 
     </Grid>   
     </div>
    )
  }
}

module.exports = App
