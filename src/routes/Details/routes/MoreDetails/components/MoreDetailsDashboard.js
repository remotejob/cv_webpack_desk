import React from 'react'
import { Link } from 'react-router'
import Firebase from 'firebase'
import StarRating from 'react-star-rating'


class MoreDetailsDashboard extends React.Component {
	
	constructor(props){
	    super(props);
	    this.state = {
	    	data: {},
	    	mark: {}
	    }

	}

	componentDidMount(){
						
	}	
	
	componentWillUpdate(prevProps) {
//		console.log("MoreDetailsDashboard componentWillUpdate")	
	}

	componentDidUpdate(prevProps) {
		
//		console.log("MoreDetailsDashboard componentDidUpdate")
					
	}

	componentWillMount(){
//		console.log('MoreDetailsDashboard componentWillMount',this.props)
		
	}
	componentWillReceiveProps(nextProps){
//		console.log("MoreDetailsDashboard  receive props",nextProps)
		if ( nextProps.data.items === undefined) {
			
		} else {
			
			let link = nextProps.link.split(".")[0]
		
			nextProps.data.items.map(function(item){
			
			if (item.link === link){

				this.setState({data: item})
			}
			
		}.bind(this))
	
		}

	}
	
	render() {
	
//		console.log(this.state.data)

    return (
      <div>
      	
      	<h2>{this.state.data.item}</h2>
      	<h4>More Details</h4>
  	  	
  	     {this.state.data.extra}
   
    	        
      </div>
    )
  }
}

export default MoreDetailsDashboard
