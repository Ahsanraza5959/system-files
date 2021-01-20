import React from 'react';
import './App.css';
import CardGroup from 'react-bootstrap/CardGroup'
import CardItem from './CardItem';

function Aboutus() {
 
  return( 
  
  <>
  <div>
  <h1 className='aboutus'>ABOUT US</h1>
  </div>
  <br/>
  <br/>
  <br/>
      
      <div style={{marginLeft:'70px', marginRight:'70px'}}>
        <h2>About Us</h2>
        <p style={{marginBottom:"0px"}}>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>

      </div>

      <br/>
      <br/>

  <div style={{marginLeft:'50px'}}>
    <h2>Customers reviews</h2>
  </div>
  <CardGroup>

  <CardItem
              src='images/profile-1.jpg'
              text='Waqas Akhtar'
              label='Lahore'
              path='/aboutus'
            />
            <CardItem
              src='images/profile-2.jpg'
              text='Zainab Gul'
              label='Karachi'
              path='/aboutus'
            />
            <CardItem
              src='images/profile-3.jpg'
              text='Aimen Khan'
              label='Multan'
              path='/aboutus'
            />
    
  </CardGroup>

  </>
  );
}




export default Aboutus;