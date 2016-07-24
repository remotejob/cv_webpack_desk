import React from 'react'
import { Link } from 'react-router'
import {Grid,Image,Row,Col,Well,ListGroup,ListGroupItem,Table} from 'react-bootstrap'
import Firebase from 'firebase'
//import StarRating from 'react-star-rating'

const dark = 'hsl(200, 20%, 20%)'
	const light = '#fff'
	const styles = {}

	styles.wrapper = {
	  padding: '10px 20px',
	  overflow: 'hidden',
	  background: dark
	//  color: light
	}

var title =''

class JobsDashboard extends React.Component {
	
	constructor(props){
	    super(props);
	    this.state = {
	    	data: {}	
	    	
	    }

	}

	componentDidMount(){
		
//		console.log("DetailsDashboard componentDidMount")
//		this.setState({languages: this.languages})
						
	}	
	
	componentWillUpdate(prevProps) {
//		console.log("DetailsDashboard componentWillUpdate")	
	}
	
	
	componentDidUpdate(prevProps) {
		
//		console.log("DetailsDashboard componentDidUpdate")
					
	}
		
	componentWillMount(){

		
	}
	componentWillReceiveProps(nextProps){
		
		this.setState({data: nextProps.data})
//		console.log(this.props)
	}
	
	render() {
				  
		  var htmlTableItems =[]
		  
//		  console.log(this.state.data)
		  
		  var title = this.state.data.Title
		  var tags =  this.state.data.Tags
		  var contents =  this.state.data.Contents
		  var mcontents =  this.state.data.Mcontents
		  			  
//		  this.state.data.map(function(data) {
//			let key=data.title+ data.duration 
//			htmlTableItems.push(<tr key={key}>
//			<td>{data.title}</td>
//			<td>{data.duration}</td>
//			<td>{data.position}</td>
//			<td>{data.details}</td>
//			<td>{data.location}</td>
//			<td>{data.country}</td>
//			</tr>) 
//				  
//				  
//		  })
			  

    return (
      <div>
      <div id="background">{mcontents}</div>	      	
      <h2>{title}</h2>
      <h3>{tags}</h3>
      <p>{contents}</p>
      	   
    	        
      </div>
    )
  }
}

export default JobsDashboard
