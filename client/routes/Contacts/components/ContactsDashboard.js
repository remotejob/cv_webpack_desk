import React from 'react'
import { Link } from 'react-router'
import {Table} from 'react-bootstrap'
//import FontAwesome from 'react-fontawesome'

class ContactsDashboard extends React.Component {
	
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
				  			  

    return (
      <div>
      	
      	<Table responsive>
 
      		<tbody>
      			<tr>
      				
      				<td>Högberginkuja 1<br/>10820 Lappohja<br/>Finland</td> 
      			</tr>
      			<tr>
      				
      				<td>+358451202801</td>
      			</tr>
      			<tr>
  					
  					<td>support@mazurov.eu</td>
  				</tr>
      			<tr>
  					
  					<td>mazurovfi</td>
  				</tr>
      			
      		</tbody>
      	</Table>
      	   
    	        
      </div>
    )
  }
}

export default ContactsDashboard
