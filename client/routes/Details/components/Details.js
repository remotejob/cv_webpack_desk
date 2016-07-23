import React from 'react'
import {Button,Well} from 'react-bootstrap'
import { browserHistory,Link } from 'react-router'
import ReactDOM from 'react-dom'
import DocumentMeta from 'react-document-meta'
import Firebase from 'firebase'
//import StarRating from 'react-star-rating'
import DetailsDashboard from './DetailsDashboard'


const dark = 'hsl(200, 20%, 20%)'
	const light = '#fff'
	const styles = {}

	styles.wrapper = {
	  padding: '10px 20px',
	  overflow: 'hidden',
	  background: dark
	//  color: light
	}

var baseRef = new Firebase('https://cv-mazurov.firebaseio.com/');	
//var item={}
class Details extends React.Component {

	constructor(props){
	  super(props);
	  this.state = {
	    data: {},
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
			
		var idlink =this.props.params.id.split(".")[0]

		if ( this.props.params.moredetail === undefined) { 
		
			var site =document.domain			
			var jsonlink = '/www/'+site+'/'+idlink+'/'+idlink+'.html.json'
//			console.log(jsonlink)
		
			var requestm = new XMLHttpRequest();
			requestm.open('GET', jsonlink, true);
		
			requestm.onload = function() {
			  if (requestm.status >= 200 && requestm.status < 400) {
			    // Success!			  
			    var data = JSON.parse(requestm.responseText);
			    this.setState({mark: data});
			    
			  } else {
			    // We reached our target server, but it returned an error

			  }
			}.bind(this);

			requestm.onerror = function() {
			  // There was a connection error of some sort
			};

			requestm.send();
		}
		   
			baseRef.orderByChild("link").equalTo(idlink).on("value", function(snapshot) {

			snapshot.forEach(function(vdata) {
				
				this.setState({data: vdata.val()})
															
			}.bind(this));
		}.bind(this))
				
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

		baseRef.off()
	 } 
  render() {
	var contents = this.state.mark.Contents
	
	var meta ={}
	
	if (this.state.data.title !== undefined) {
//		console.log(this.state.data)
		meta = {
			title: this.state.data.title,
			description: this.state.data.title
		}
		
	}
	  	  
    return (
      <div>
      <DocumentMeta {...meta} />
      <div style={styles.wrapper}> 
      <Well>
      	<Button onClick={this.handleReturn} bsStyle="primary" bsSize="large" className='pull-right'>Return</Button>
      
      	{this.props.children || <DetailsDashboard data={this.state.data} />}
      
      </Well>
      
  		</div>
  		<div id="background"> {contents}</div>
      </div>
    )
  }

}

module.exports = Details