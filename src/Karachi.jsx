import React from 'react';
import './App.css';

import CardItem from './CardItem';
import Carousel from 'react-bootstrap/Carousel'
import CardGroup from 'react-bootstrap/CardGroup'
function Karachi() {

    return (

      <>
      <Carousel>
      <Carousel.Item  interval={1000}>
    <img
      style={{height: '600px', width: '100%'}}
      className="img"
      src="/images/karachi-1.jpg"
      alt="First slide"
    />
    <Carousel.Caption  interval={1000}>
    
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      style={{height: '600px', width: '100%'}}
      className="img"
      src="/images/karachi-2.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
    
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      style={{height: '600px', width: '100%'}}
      className="img"
      src="/images/karachi-3.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
   
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      style={{height: '600px', width: '100%'}}
      className="img"
      src="/images/karachi-4.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
   
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      style={{height: '600px', width: '100%'}}
      className="img"
      src="/images/karachi-5.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
   
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      style={{height: '600px', width: '100%'}}
      className="img"
      src="/images/karachi-6.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
   
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      style={{height: '600px', width: '100%'}}
      className="img"
      src="/images/karachi-7.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
   
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      style={{height: '600px', width: '100%'}}
      className="img"
      src="/images/karachi-8.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
   
    </Carousel.Caption>
  </Carousel.Item>
  
   <Carousel.Item>
    <img
      style={{height: '600px', width: '100%'}}
      className="img"
      src="/images/karachi-9.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
   
    </Carousel.Caption>
  </Carousel.Item>
  </Carousel>

<br/>
<br/>
<br/>


<div style={{marginLeft:'70px', marginRight:'70px'}}>
        <h2 style={{color:'green'}} >About Karachi</h2>
        <p style={{color:'white', backgroundColor:"black"}}>Karachi is the capital of the Pakistani province of Sindh. It is the largest city in Pakistan[15][16] and the twelfth largest city in the world.[17] Ranked as a beta-global city,[18][19] the city is Pakistan's premier industrial and financial centre,[20] with an estimated GDP of $114 billion (PPP) as of 2014.[13][14] Karachi is Pakistan's most cosmopolitan city, linguistically, ethnically, and religiously diverse,[21] as well as one of Pakistan's most secular and socially liberal cities.[22][23][24] With its location on the Arabian Sea, Karachi serves as a transport hub, and is home to Pakistan's two largest seaports, the Port of Karachi and Port Bin Qasim, as well as Pakistan's busiest airport, Jinnah International Airport.</p>

      </div>

      <br/>
      <br/>

  <div className='cards' style={{backgroundColor:'black'}}>
      <h1 style={{color:"green"}}>Top Attractions in Karachi</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          
          <ul className='cards__items'>
            <CardItem
              src="/images/karachi-1.jpg"
              text='The National Academy of Performing Arts is a performing arts school located at Hindu Gymkhana in Karachi, Sindh, Pakistan'
              label='National Academy of Performing Arts'
              path='/artsacademy'
            />
            <CardItem
               src="/images/karachi-2.jpg"
              text='The Karachi War Cemetery was created to receive World War II dead from cemeteries scattered across the country'
              label='War cemetery'
              path='/cemetery'
            />
            <CardItem
                src="/images/karachi-3.jpg"
              text='The Empress Market was constructed between 1884 and 1889 and was named to commemorate Queen Victoria, Empress of India'
              label='Express Market'
              path='/expressmarket'
            />
          </ul>

          <br/>
        

          <ul className='cards__items'>
            <CardItem
               src="/images/karachi-4.jpg"
              text='Frere Hall is a building in Karachi, Pakistan that dates from the early British colonial-era in Sindh'
              label='Frere Hall'
              path='/ferehall'
            />
            <CardItem
               src="/images/karachi-5.jpg"
              text='Merewether Tower was raised by public subscription as a memorial for Sir William L. Merewether'
              label='Merewether Clock Tower'
              path='/merewether'
            />
            <CardItem
               src="/images/karachi-6.jpg"
              text='Mazar-e-Quaid is the final resting place of Quaid-e-Azam Muhammad Ali Jinnah, the founder of Pakistan'
              label='Mazar-e-Quaid'
              path='/quaid'
            />
          </ul>

          <br/>
        

        <ul className='cards__items'>
          <CardItem
             src="/images/karachi-7.jpg"
            text='The origins of St. Patricks Cathedral dates to the middle of the 19th century to the year 1853'
            label='Saint Patricks Cathedral'
            path='/saints'
          />
          <CardItem
             src="/images/karachi-8.jpg"
            text='Sea View in Karachi, Sindh, Pakistan is located on the Arabian Sea'
            label='Sea View'
            path='/sea'
          />
          <CardItem
             src="/images/karachi-9.jpg"
            text='Masjid-e-Tooba or Tooba Mosque is located in Karachi'
            label='Tooba Mosque'
            path='/toobamosque'
          />
        </ul>
        </div>
      </div>
    </div>

    <br/>
<br/>
<br/>

<div style={{marginLeft:'50px'}}>
    <h2>Host in Multan</h2>
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
};




export default Karachi;