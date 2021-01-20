import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import { Link } from 'react-router-dom';
import Col from 'react-bootstrap/Col'
function Host() {
    return ( 
    <>
<div className="col-5" style={{marginLeft:"100px", marginTop:"20px"}}>
<br/>
<br/>
<Link className="btn btn primary col-2" to='/' style={{color:"White" ,backgroundColor:'blue' ,marginLeft:"5px"}}>
       Skip
    </Link>
    <br/>
<br/>
<h5 style={{color:'lightblue'}}>Your Property Info</h5>
  
  
  
  
  <Card>
  <Form className='container'>
  
 


 

  <Form.Group controlId="address">
  <Form.Label></Form.Label>
  <Form.Control placeholder="Your Property Address" />
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


  <Form.Group as={Col} controlId="block">
    <Form.Label></Form.Label>
    <Form.Control as="select">
    <option>Block A</option>
      <option>Block B</option>
      <option>Block C</option>
      <option>Block D</option>
    </Form.Control>
  </Form.Group>

  <Form.Group as={Col} controlId="plotno">
    <Form.Label></Form.Label>
  <Form.Control type="address" placeholder="Plot no#"/>
  </Form.Group>
</Form.Row>


<Form.Row className='row'>
<Form.Group as={Col} controlId="city">
    <Form.Label></Form.Label>
    <Form.Control as="select">
    <option>Hotel Room</option>
    <option>Appartment</option>
    <option>Private Room</option>
    <option>Suite</option>
    <option>Full House</option>
      
    </Form.Control>
  </Form.Group>
  <Form.Group controlId="address">
  <Form.Label></Form.Label>
  <Form.Control type="number" placeholder="How many Persons You Allow" />
</Form.Group>
  </Form.Row>
  <br/>

   <p>Facalities</p>
  <Form.Group controlId="aircondition">
    <Form.Check type="checkbox" label="Air Condition" />
  </Form.Group>
  <Form.Group controlId="cupboard">
    <Form.Check type="checkbox" label="Cupboard" />
  </Form.Group>
  <Form.Group controlId="roomfridge">
    <Form.Check type="checkbox" label="Room Fridge" />
  </Form.Group>
  <Form.Group controlId="window">
    <Form.Check type="checkbox" label="Window" />
  </Form.Group>
  <Form.Group controlId="generator">
    <Form.Check type="checkbox" label="Ups/Generator" />
  </Form.Group>

  <Form.Group controlId="request">
  <Form.Label></Form.Label>
  <Form.Control type="text area" Row="5" placeholder="Mention if you have any conditon's" />
</Form.Group>

<br/>
<Form.Group controlId="request">
  <Form.Label> Upload your Room/Appartment Pictures</Form.Label>
  <Form.Control type="file"  />
</Form.Group>
  
</Form>
<br/>




<Link className="btn btn primary col-8" to='/' style={{color:"white", backgroundColor:"blue", marginLeft:"100px"}}>
       Submit
    </Link>
    <br/>

    
</Card>
</div>
 </>
    );
   }
  
  export default Host;