import React from 'react';
import './App.css';
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

function Contactus() {
  return (
<>
  <div>
      <h1 className='contactus'>Contact Us</h1>
  </div>

        <div className="row">
        <h3 style={{marginLeft:'30px'}}>Contact Information</h3>
            <div className='col-3'>
            
           
            <Card style={{ width: '12rem', height:"10rem",textAlign:"Left", marginLeft:'30px' }}>
              <Card.Body>Phone: +923123456789</Card.Body>
            </Card>
            </div>
            <div className='col-3'>
            <Card style={{ width: '12rem', height:"10rem",textAlign:"left" }}>
              <Card.Body>Email:Plan&Rent@gmail.com</Card.Body>
            </Card>
            </div>
            <div className='col-3'>
            <Card style={{ width: '12rem', height:"10rem",textAlign:"left" }}>
              <Card.Body>Address: 198 West 21th Street, Jubilee Town Lahore</Card.Body>
            </Card>
            
            </div>
            <div className='col-3'>
            <Card style={{ width: '12rem', height:"10rem",textAlign:"left" }}>
              <Card.Body>Address: 198 West 21th Street, Jubilee Town Lahore</Card.Body>
            </Card>
            
            </div>

            </div>
             <br/>
             <br/>
               
            <div style={{marginLeft:"350px"}}>  
            <div className='col-6' >
            <h3>For Any Query</h3>
            <Card>
            <br/> 
               <Form.Group className='container'>
                   <Form.Control type="text" placeholder="Your Name" />  
                  <br />
                  <Form.Control type="text" placeholder="Your Email" />
                  <br />
                  <Form.Control type="text" placeholder="Subject" />
                  <br/>
                  
                  <Form.Control as="textarea" placeholder="Message" rows={10} />
               </Form.Group>
               <br/>
               <div className='col-3' >
               <Button style={{ marginLeft:"20px",padding:'2%'}} variant="warning">Send Message</Button>
               </div>
              <br/>
            </Card>
            </div>
            </div> 

        
</>
  )
}



export default  Contactus;