import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'

import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom';


function Host() {
    return ( 
    <>
     <div className='row'>
    <div className="col-5" style={{marginLeft:"375px", marginTop:"50px"}}>
    <h2 style={{color:'blue' }}>Become a Host</h2>
    <br/>
    <h5 style={{color:'lightblue'}}>Your Info</h5>
    <Card>
    <Form className='container'>

    <br/>
  <Form.Row className='row'>
    <Col>
      <Form.Control placeholder="First name" />
    </Col>
    <Col>
      <Form.Control placeholder="Last name" />
    </Col>
  </Form.Row>


    <Form.Group controlId="email">
      <Form.Label></Form.Label>
      <Form.Control type="email" placeholder="Email" />
      <Form.Text className="text-muted">
         </Form.Text>
    </Form.Group>


    <Form.Group controlId="Cnicno">
      <Form.Label></Form.Label>
      <Form.Control type="number" placeholder="Cnic No" />
    </Form.Group>

    <Form.Group controlId="Mobile No">
      <Form.Label></Form.Label>
      <Form.Control type="number" placeholder="Mobile No" />
    </Form.Group>


    <Form.Group controlId="address">
    <Form.Label></Form.Label>
    <Form.Control placeholder="Your Current Address" />
  </Form.Group>
  
  <Form.Row className='row'>
  <Form.Group as={Col} controlId="city">
      <Form.Label></Form.Label>
      <Form.Control as="select">
      <option>Lahore</option>
        
      </Form.Control>
    </Form.Group>

    <Form.Group as={Col} controlId="area">
      <Form.Label></Form.Label>
      <Form.Control as="select">
      <option>Johar Town</option>
        <option>Jubilee Town</option>
        <option>Bahria Town</option>
        <option>Garden Town</option>
      </Form.Control>
    </Form.Group>

    <Form.Group controlId="password">
      <Form.Label></Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>


    <Form.Group controlId="confirmpassword">
      <Form.Label></Form.Label>
      <Form.Control type="password" placeholder="Confirm Password" />
    </Form.Group>
   
        <br/>
        <br/>
        <br/>
    <Link className="btn btn primary" to='/propertyinfo' style={{color:"white", backgroundColor:"blue"}}>
        submit
    </Link>

    
  </Form.Row>
  <br/>
  <br/>
</Form>
  
 
  </Card>
  </div>

 
 
 
 
 
 
 
  </div>
  
  </>
    );
   }
  
  export default Host;