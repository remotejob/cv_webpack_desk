import React from 'react'
//import {Button,Thumbnail,Grid,Image,Label,Well, Row,Col,Alert,ListGroup,ListGroupItem } from 'react-bootstrap'
import { browserHistory,Link } from 'react-router'
import ReactDOM from 'react-dom'
//import DocumentMeta from 'react-document-meta'
import Firebase from 'firebase'
import StarRating from 'react-star-rating'
import MoreDetailsDashboard from './MoreDetailsDashboard'

var baseRef
var dblink='https://cv-mazurov.firebaseio.com/'
	
baseRef = new Firebase(dblink);	
//var item={}

class MoreDetails extends React.Component {

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

	}	
	
	componentDidMount(){		
			
//		console.log(this.props.params)
		var site =document.domain
		
		var jsonlink = '/www/'+site+'/'+this.props.params.id+'/'+this.props.params.moredetail.split(".")[0]+'/'+this.props.params.moredetail+'.json'
//		console.log(jsonlink)
		
		var requestm = new XMLHttpRequest();
		requestm.open('GET', jsonlink, true);
		
		requestm.onload = function() {
			  if (requestm.status >= 200 && requestm.status < 400) {
			    		  
			    var data = JSON.parse(requestm.responseText);
//			    console.log(data)
			    this.setState({mark: data});
			    
			  } else {
			    

			  }
			}.bind(this);

			requestm.onerror = function() {
			 
			};

			requestm.send();
						
			baseRef.orderByChild("link").equalTo(this.props.params.id).on("value", function(snapshot) {

			snapshot.forEach(function(vdata) {
				
				this.setState({data: vdata.val()})
				
			}.bind(this));
		}.bind(this))
						   
	}
	
	componentWillReceiveProps(){
//		console.log("componentWillReceiveProps Details",this.props.params)

	}
	
	componentWillUpdate(prevProps) {
//		console.log("componentWillUpdate")	
	}
	
	
	componentDidUpdate(prevProps) {
		
//		console.log("componentDidUpdate")
					
	}
 
	 componentWillUnmount(){		 

		baseRef.off()
//		baseRefClients.off()
	 } 
  render() {
	  
	var contents = this.state.mark.Contents
	  	  
    return (
      <div>
 
      <MoreDetailsDashboard data={this.state.data} link={this.props.params.moredetail} />
      <div id="background"> {contents}</div>
      </div>
    )
  }

}

module.exports = MoreDetails