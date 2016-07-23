import React from 'react'
import {Button,Well} from 'react-bootstrap'
import { browserHistory,Link } from 'react-router'
import ReactDOM from 'react-dom'
//import StarRating from 'react-star-rating'
import DocumentMeta from 'react-document-meta'
import BlogDashboard from './BlogDashboard'


const dark = 'hsl(200, 20%, 20%)'
	const light = '#fff'
	const styles = {}

	styles.wrapper = {
	  padding: '10px 20px',
	  overflow: 'hidden',
	  background: dark
	//  color: light
	}
	

var site =""
var title =""	

class Blog extends React.Component {

	constructor(props){
	  super(props);
	  this.state = {
	    data: {},
	    mark: {}

	   }
	  this.loadajax = this.loadajax.bind(this) 
	}

	loadajax(urlstr,mark){
			
		var request = new XMLHttpRequest();
		request.open('GET', urlstr, true);
		
		request.onload = function() {
			
		
			  if (request.status >= 200 && request.status < 400) {
			    // Success!			  
			    var data = JSON.parse(request.responseText);
			    
			    if (mark) {
			    	this.setState({mark: data});
			    } else {
			    	
			    	this.setState({data: data});
			    
			    }
			    
			  } else {
			    // We reached our target server, but it returned an error

			  }
			}.bind(this);

			request.onerror = function() {
			  // There was a connection error of some sort
			};
			
			request.send();
			
		
	}
	
	
	handleReturn(){
		browserHistory.push('/')
		
	}
		
	componentWillMount(){
		site =document.domain
				
	}	
	
	componentDidMount(){
		
		 if (Object.keys(this.props.params).length === 0) {
			 
			 this.loadajax('/www/'+site+'/blog/blog.json',true)
			 this.loadajax('http://'+site+':8001/api/blog',false)			 
			 
			 
		}
		
	}

	componentWillReceiveProps(){
//		console.log("componentWillReceiveProps Details",this.props.params)

	}
	
	componentWillUpdate(prevProps) {
		
		
	}
		
	componentDidUpdate(prevProps) {
		
		   let oldId = prevProps.params.stopic
		   let newId = this.props.params.stopic
				   
		   if (newId !== oldId) {   
			 if (Object.keys(this.props.params).length === 0) {
				 
				 this.loadajax('/www/'+site+'/blog/blog.json',true)
				 this.loadajax('http://'+site+':8001/api/blog',false)
				 
					
			   }							
		}		
							
	}

	 componentWillUnmount(){		 

	 } 
  render() {
	  
	
	var mtitle = this.state.mark.Title
	var mmoto  = this.state.mark.Moto
	var mcontents = this.state.mark.Contents

	var meta ={}
	meta = {
		title: "Blog",
		description: "Blog programming"
	}

    return (
    	<div>
    	<DocumentMeta {...meta} />
    	      <div style={styles.wrapper}> 
    	      <h2>BLOG</h2>
    	      <Well>
    	      
    	      	<Button onClick={this.handleReturn} bsStyle="primary" bsSize="large" className='pull-right'>Return</Button>	           
    	      	{this.props.children || <BlogDashboard data={this.state.data} />}
    	      
    	      </Well>
    	      
    	  		</div>
    	  		<div id="background"> <h3>{mtitle}</h3> <h4>{mmoto}</h4>{mcontents}</div>
    	
    	</div>
 
    )
  }

}

module.exports = Blog