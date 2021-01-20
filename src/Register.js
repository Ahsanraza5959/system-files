import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
function Register() {
    return ( 
    <>
   
    <div className="col-5" style={{marginLeft:"375px", marginTop:"50px"}}>
    <h3>Register as a Guest</h3>
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
    <Form.Control placeholder="Address" />
  </Form.Group>
  
  <Form.Row className='row'>
  <Form.Group as={Col} controlId="city">
      <Form.Label></Form.Label>
      <Form.Control as="select">
      
        <option>Lahore</option>
        <option>karachi</option>
        <option>Multan</option>
        <option>Islamabad</option>
      </Form.Control>
    </Form.Group>

    <Form.Group as={Col} controlId="state">
      <Form.Label></Form.Label>
      <Form.Control as="select">
      
        <option>Punjab</option>
        <option>Sindh</option>
      </Form.Control>
    </Form.Group>

    <Form.Group as={Col} controlId="zipcode">
      <Form.Label></Form.Label>
      <Form.Control type="number" placeholder="City Zip Code"/>
    </Form.Group>
  </Form.Row>

  
  <Form.Group controlId="password">
      <Form.Label></Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>


    <Form.Group controlId="confirmpassword">
      <Form.Label></Form.Label>
      <Form.Control type="password" placeholder="Confirm Password" />
    </Form.Group>
   
        <br/>
  
    <Button className='btn' variant="primary" type="submit">
     Register
    </Button>
  </Form>
  <br/>
  <br/>
 
  </Card>
  </div>
  
  </>
    );
   }
  
  export default Register;