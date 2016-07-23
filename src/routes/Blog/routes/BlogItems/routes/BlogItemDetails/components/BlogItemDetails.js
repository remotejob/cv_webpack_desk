import React from 'react'
import {Button,Well} from 'react-bootstrap'
import { browserHistory,Link } from 'react-router'
import ReactDOM from 'react-dom'
import DocumentMeta from 'react-document-meta'
import BlogItemDetailsDashboard from './BlogItemDetailsDashboard'


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
var stopic =""	
var topic =""
	
var stitle=""
var title =""	
var stitlesplit=""	

class BlogItemDetails extends React.Component {

	constructor(props){
	  super(props);
	  this.state = {
	    data: {},
	    mark: {}

	   }
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
		stopic = this.props.params.stopic
		stitle = this.props.params.stitle
		stitlesplit = this.props.params.stitle.split('.')[0]

	}	
	
	componentDidMount(){

		 this.loadajax('/www/'+site+'/blog/'+stopic+'/'+stitlesplit+'/'+stitle+'.json',true)
		 this.loadajax('http://'+site+':8001/api/blog/'+stopic+"/"+stitlesplit,false)
		 
						
	}

	componentWillReceiveProps(){
//		console.log("componentWillReceiveProps Details",this.props.params)

	}
	
	componentWillUpdate(prevProps) {

		
	}
		
	componentDidUpdate(prevProps) {
		
		let oldId = prevProps.params.stitle
		let newId = this.props.params.stitle

		   if (newId !== oldId) {
			   this.loadajax('/www/'+site+'/blog/'+topic+'/'+stitle+'/'+stitle+'.html.json',true)
			   this.loadajax('http://'+site+':8001/api/blog/'+stopic+"/"+stitlesplit,false)
			   			   
		   }
					
	}

	 componentWillUnmount(){		 

	 } 
  render() {
	  
	  var meta ={}
	  
//	  console.log(Object.keys(this.state.data).length)
	  
	  if (Object.keys(this.state.data).length > 0){
		  
		  console.log(this.state.data)
		  topic = this.state.data.Topic
		  title = this.state.data.Title
	  }
	  
 
	
	var mtitle = this.state.mark.Title
	var mmoto  = this.state.mark.Moto
	var mcontents = this.state.mark.Contents
	
	meta = {
			title: topic+" "+topic+" "+title,
			description: mtitle+" "+mmoto
	} 
	

    return (
    	<div>
    	<DocumentMeta {...meta} />
    	  {this.props.children || <BlogItemDetailsDashboard data={this.state.data} stopic={this.props.params.stopic} stitle={this.props.params.stitle} />}
   	  		
    	  <div id="background"> <h3>{mtitle}</h3> <h4>{mmoto}</h4>{mcontents}</div>
    	
    	</div>
 
    )
  }

}

module.exports = BlogItemDetails