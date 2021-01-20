import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function SignUp() {
  return ( 
  <>
 
  <div className="col-5" style={{marginLeft:"375px", marginTop:"50px"}}>
  <h3>Sign In</h3>
  <Card>
  <Form className='container'>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
     
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <h6> <Link to='/'>
                Forget Password?
              </Link></h6>
      <br/>

  <Button className='btn' variant="primary" type="submit">
    Sign in
  </Button>
</Form>
<br/>
<br/>
<Row>
<Col>
<h5> Not a member? <Link to='/Host'>
               Become a Host
              </Link></h5>
              </Col>
              <Col>
              <h5>
              <Link to='/Register'>
              Book a Room
              </Link></h5>
              </Col>
              </Row>
</Card>
</div>

</>
  );
 }

export default SignUp;