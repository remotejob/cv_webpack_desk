import React from 'react'
import { Link } from 'react-router'
import {Grid,Image,Row,Col,Well,ListGroup,ListGroupItem,Table} from 'react-bootstrap'
import Firebase from 'firebase'
import StarRating from 'react-star-rating'

var title =''

class JobsDashboard extends React.Component {
	
	constructor(props){
	    super(props);
	    this.state = {
	    	data: []	
	    	
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
		  			  
		  this.state.data.map(function(data) {
			let key=data.title+ data.duration 
			htmlTableItems.push(<tr key={key}>
			<td>{data.title}</td>
			<td>{data.duration}</td>
			<td>{data.position}</td>
			<td>{data.details}</td>
			<td>{data.location}</td>
			<td>{data.country}</td>
			</tr>) 
				  
				  
		  })
			  

    return (
      <div>
      	      	
      	<Table responsive>
      		<thead>
      			<tr>
      			<th>Company</th>
      			<th>Duration</th>
      			<th>Position</th>
      			<th>Details</th>
      			<th>Location</th>
      			<th>Country</th>
      			</tr>
      		</thead>
      		<tbody>
      			{htmlTableItems}
      		</tbody>
      	</Table>
      	   
    	        
      </div>
    )
  }
}

export default JobsDashboard
