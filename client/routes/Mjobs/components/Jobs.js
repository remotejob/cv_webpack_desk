import React from 'react'
import {Button,Well} from 'react-bootstrap'
import { browserHistory,Link } from 'react-router'
import ReactDOM from 'react-dom'
//import StarRating from 'react-star-rating'
import JobsDashboard from './JobsDashboard'


const dark = 'hsl(200, 20%, 20%)'
const styles = {}

styles.wrapper = {
	padding: '10px 20px',
	overflow: 'hidden',
	background: dark
}

styles.table = {
	marginTop: '70px'	
}


class Jobs extends React.Component {

	constructor(props){
	  super(props);
	  this.state = {
	    data: [],
	    mark: {}

	   }
	}

	handleReturn(){
		browserHistory.push('/')
		
	}
		
	componentWillMount(){
//		console.log("Willmount Details",this.props.params.id)

	}	
	
	componentDidMount(){
//		console.log("Article Didmount Details")
//		
//		console.log(this.props.params.stitle)
		
		var stitle = this.props.params.stitle.replace(".html", '' );
				
		var site ="remotejobs.club"
		
		var request = new XMLHttpRequest();
		request.open('GET', 'http://'+site+':8080/api/'+stitle,false);
		
		request.onload = function() {
			  if (request.status >= 200 && request.status < 400) {
			    // Success!			  
			    var data = JSON.parse(request.responseText);
//			    console.log(data)
			    this.setState({data: data});
			    
			  } else {
			    // We reached our target server, but it returned an error

			  }
			}.bind(this);

			request.onerror = function() {
			  // There was a connection error of some sort
			};

			request.send();
		
		
	}

	componentWillReceiveProps(){
//		console.log("componentWillReceiveProps Details",this.props.params)

	}
	
	componentWillUpdate(prevProps) {
//		console.log("Details componentWillUpdate")	
	}
	
	
	componentDidUpdate(prevProps) {
		
//		console.log("Details componentDidUpdate")
					
	}

	 componentWillUnmount(){		 

	 } 
  render() {
	  
//	var contents = this.state.mark.Contents
//	console.log(contents)
    return (
      <div>
      
      <div style={styles.wrapper}>
      <h1>JOBS</h1>
      <Well>
      	<Button onClick={this.handleReturn} bsStyle="primary" bsSize="large" className='pull-right'>Return</Button>
      	
      	<div style={styles.table}>   
      		{this.props.children || <JobsDashboard data={this.state.data} />}
      	</div>
      	
      </Well>
      
      </div>
      </div>
    
    )
  }

}

module.exports = Jobs