import React from 'react'
import { Link } from 'react-router'
import {Grid,Image,Row,Col,Well,ListGroup,ListGroupItem} from 'react-bootstrap'

const dark = 'hsl(200, 20%, 20%)'
const light = '#fff'
const styles = {}

styles.wrapper = {
  padding: '10px 20px',
  overflow: 'hidden',
  background: dark
//  color: light
}

styles.link = {
  padding: 11,
  color: light,
  fontWeight: 200
}

styles.activeLink = {
  
  background: light,
  color: dark
}


class Head extends React.Component {

//  constructor(props, context) {
//    super(props, context)
//    
//  }

	componentDidMount(){		
//		console.log("Didmount Head",this.props)
		
	}
	componentWillUpdate(prevProps) {
//		console.log("Head componentWillUpdate",prevProps)	
	}
	
	
	componentDidUpdate(prevProps) {
		
//		console.log("Head componentDidUpdate",prevProps)
					
	}
	
	
  render() {
//    const { user } = this.props
    let link = '/jobs.html'

    return (
      <div style={styles.wrapper}>
        
      	<Well>
      	
      	<Row>
			<Col xs={6} md={3}><Image src='/img/freelancer_transp.png' responsive/></Col>
			<Col xs={6} md={7}><h3>Professional Programming</h3></Col>
			<Col xs={6} md={2}><Image src='/img/free_for_job.png' responsive/></Col>
		</Row>
      	<Row>
  			<Col xs={6} md={4}><Image src='/img/mazurovopt.jpg' thumbnail responsive/></Col>
  			<Col xs={6} md={6}><p className='cvbigtitle'>CV </p>(curriculum vitae)<p className='name'>Mazurov Aleksander</p></Col>
  			<Col xs={6} md={2}><Link to={link}><Image src='/img/orange-arrow-right.png' responsive/></Link><h4>Work Experience</h4></Col>
  		</Row>
        </Well> 
        
      </div>
    )
  }
}

//GlobalNav.defaultProps = {
//  user: {
//    id: 1,
//    name: 'Ryan Florence'
//  }
//}

export default Head
