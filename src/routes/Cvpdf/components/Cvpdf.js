import React from 'react'
import {Button,Well} from 'react-bootstrap'
import { browserHistory,Link } from 'react-router'
import ReactDOM from 'react-dom'


const dark = 'hsl(200, 20%, 20%)'
	const light = '#fff'
	const styles = {}

	styles.wrapper = {
	  padding: '10px 20px',
	  overflow: 'hidden',
	  background: dark
	//  color: light
	}

class Cvpdf extends React.Component {

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
		
		var site =document.domain

			var requestm = new XMLHttpRequest();
			requestm.open('GET', '/www/'+site+'/jobs/jobs.html.json', true);
			
			requestm.onload = function() {
				if (requestm.status >= 200 && requestm.status < 400) {
				    // Success!			  
				   var data = JSON.parse(requestm.responseText);
				   this.setState({mark: data});
				    
				} else {

				}
			}.bind(this);

			requestm.onerror = function() {
				  // There was a connection error of some sort
			};

			requestm.send();			
		
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
	  
	var contents = this.state.mark.Contents

    return (
      <div>
      <div style={styles.wrapper}> 
      <Well>
      	<Button onClick={this.handleReturn} bsStyle="primary" bsSize="large" className='pull-right'>Return</Button>
      	<h2>Download CV in PDF format</h2>
           
      	<Button href="/mazurov_cv.pdf" bsStyle="danger" bsSize="lg" className='center-block'>Click for download</Button>	
      
      </Well>
      
  		</div>
  		<div id="background"> {contents}</div>
      </div>
    )
  }

}

module.exports = Cvpdf