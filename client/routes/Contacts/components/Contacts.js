import React from 'react'
import {Button,Well } from 'react-bootstrap'
import { browserHistory,Link } from 'react-router'
import ReactDOM from 'react-dom'
import DocumentMeta from 'react-document-meta'
import ContactsDashboard from './ContactsDashboard'


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

class Contacts extends React.Component {

	constructor(props){
	  super(props);
	  this.state = {
	    data: {}

	   }
	}

	handleReturn(){
		browserHistory.push('/')
		
	}
		
	componentWillMount(){
//		console.log("Willmount Details",this.props.params.id)

	}	
	
	componentDidMount(){
		
		console.log(document.domain)
		var site =document.domain
		var request = new XMLHttpRequest();
		request.open('GET', '/www/'+site+'/contacts/contacts.html.json', true);
		
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
	
	var contents = this.state.data.Contents
	var meta ={}
	meta = {
		title: "Contacts",
		description: "Contacts freelancer"
	}

	  	  
    return (
      <div>
      <DocumentMeta {...meta} />
     
      <div style={styles.wrapper}>
      <h1>Contacts</h1>
      <Well>
      	<Button onClick={this.handleReturn} bsStyle="primary" bsSize="large" className='pull-right'>Return</Button>
      	
      	<div style={styles.table}>
      	{this.props.children || <ContactsDashboard  />}
      	</div>
      
      </Well>
      
  		</div>
  		<div id="background"> {contents}</div>
  		
      </div>
    )
  }

}

module.exports = Contacts