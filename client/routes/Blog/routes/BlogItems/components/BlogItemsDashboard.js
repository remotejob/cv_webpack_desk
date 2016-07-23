import React from 'react'
import { Link } from 'react-router'
import {Well,Table} from 'react-bootstrap'


class BlogItemsDashboard extends React.Component {
	
	constructor(props){
	    super(props);
	    this.state = {
	    	data: {},
	    	topic: ""
	    
	    }

	}

	componentDidMount(){
				
						
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
//		console.log("DetailsDashboard  receive props",nextProps.data)
		
		this.setState({data: nextProps.data})
//		this.setState({topic: nextProps.topic})
		this.setState({stopic: nextProps.stopic})
//		console.log(this.props)
	}
	
	render() {
				  
		  var htmlTableItems =[]

//		  console.log(this.state.data)
		  		  
		  if (this.state.data.length === 1) {
			  
			  this.state.data[0].Items.forEach(function(val,idx) {
				  
				  if (idx <30) {
				  let key = val+val.Stitle
				  let outlink = '/blog/'+this.state.stopic+'/'+val.Stitle+'.html'
				  
				  htmlTableItems.push(<tr key={key}><td><Link to={outlink}>{val.Title}</Link></td></tr>)
				  }
			  }.bind(this));
			  
		  };
		  


    return (
      <div>
      
      <h4>Items</h4>
      <Table responsive>
      	<tbody>
      	{htmlTableItems}
      	</tbody>
      </Table>
      
      </div>
    )
  }
}

export default BlogItemsDashboard
