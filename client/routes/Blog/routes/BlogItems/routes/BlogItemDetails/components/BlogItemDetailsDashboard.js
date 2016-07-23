import React from 'react'
import { Link } from 'react-router'
import {Well,Table} from 'react-bootstrap'

const red = 'red'
const styles = {}

styles.redtopic = {
		 
		  color: red,
}

class BlogItemDetailsDashboard extends React.Component {
	
	constructor(props){
	    super(props);
	    this.state = {
	    	data: {},
	    	stopic: "",
	    	stitle: ""
	    
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

		var stitlesplit = nextProps.stitle.split('.')[0]

		this.setState({data: nextProps.data})
		this.setState({stopic: nextProps.stopic})
		this.setState({stitle: stitlesplit})

	}	
	
	render() {

		  var topic =""
		  var title =""
		  var contents = ''	  
		  function createMarkup() { return {__html: contents}; };	  
		  
		  if (Object.keys(this.state.data).length > 0) {
			  			  
			  let key = this.state.data.Stitle
			  title = this.state.data.Title
			  topic = this.state.data.Topic
			  contents = this.state.data.Contents
			  			  
		  };
		  

    return (
      <div>
      
      <h3 style={styles.redtopic} >topic: {topic}</h3>
      <h4>{title}</h4>

      <div dangerouslySetInnerHTML={createMarkup()} />
      
      </div>
    )
  }
}

export default BlogItemDetailsDashboard
