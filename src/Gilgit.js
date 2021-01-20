import React from 'react';
import './App.css';

import CardItem from './CardItem';
import Carousel from 'react-bootstrap/Carousel'
import CardGroup from 'react-bootstrap/CardGroup'
function Gilgit() {

    return (

      <>
      <Carousel>
      <Carousel.Item  interval={1000}>
    <img
      style={{height: '600px', width: '100%'}}
      className="img"
      src="/images/gil-1.jpg"
      alt="First slide"
    />
    <Carousel.Caption  interval={1000}>
    
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      style={{height: '600px', width: '100%'}}
      className="img"
      src="/images/gil-2.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
    
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      style={{height: '600px', width: '100%'}}
      className="img"
      src="/images/gil-3.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
   
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      style={{height: '600px', width: '100%'}}
      className="img"
      src="/images/gil-4.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
   
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      style={{height: '600px', width: '100%'}}
      className="img"
      src="/images/gil-5.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
   
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      style={{height: '600px', width: '100%'}}
      className="img"
      src="/images/gil-6.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
   
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      style={{height: '600px', width: '100%'}}
      className="img"
      src="/images/gil-7.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
   
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      style={{height: '600px', width: '100%'}}
      className="img"
      src="/images/gil-8.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
   
    </Carousel.Caption>
  </Carousel.Item>
  
   <Carousel.Item>
    <img
      style={{height: '600px', width: '100%'}}
      className="img"
      src="/images/gil-9.jpg"
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
        <h2 style={{color:'black'}} >About Gilgit</h2>
        <p style={{color:'white', backgroundColor:"black"}}></p>

      </div>

      <br/>
      <br/>

  <div className='cards' style={{backgroundColor:'black'}}>
      <h1 style={{color:"black"}}>Top Attractions in Gilgit</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          
          <ul className='cards__items'>
            <CardItem
              src="/images/gil-1.jpg"
              text='Altit Fort is an ancient fort at Altit town in the Hunza valley in Gilgit Baltistan'
              label='Altit Fort'
              path='/altit'
            />
            <CardItem
              src="/images/gil-2.jpg"
              text='Attabad Lake is a lake in Gojal Valley, Hunza, Gilgit Baltistan'
              label='Attabad Lake'
              path='/attabad'
            />
            <CardItem
                 src="/images/gil-3.jpg"
              text='Delhi Gate is one of six remaining historic gates of the Walled City of Lahore'
              label='Baltit Fort'
              path='/baltit'
            />
          </ul>

          <br/>
        

          <ul className='cards__items'>
            <CardItem
                  src="/images/gil-4.jpg"
              text='The Deosai National Park is a high-altitude alpine plain and national park in the Northern Pakistan region of Gilgit Baltistan.'
              label='Deosai National Park'
              path='/dpark'
            />
            <CardItem
                 src="/images/gil-5.jpg"
              text='The Hunza valley is situated at an elevation of 2,438 meters (7,999 feet). Geographically, Hunza consists of three regions, Upper Hunza (Gojal), Central Hunza ("Hunza Valley") and Lower Hunza ("Shinaki").'
              label='Hunza Valley'
              path='/hunza'
            />
            <CardItem
                 src="/images/gil-6.jpg"
              text='K2, at 8,611 metres above sea level, is the second highest mountain in the world, after Mount Everest at 8,848 metres'
              label='K2'
              path='/k2'
            />
          </ul>

          <br/>
        

        <ul className='cards__items'>
          <CardItem
               src="/images/gil-7.jpg"
            text='The Karakoram Pass is a 5,540 m or 18,176 ft mountain pass between India and China in the Karakoram Range'
            label='Karkaram'
            path='/karkaram'
          />
          <CardItem
              src="/images/gil-8.jpg"
            text='Khunjerab Pass is a 4,693-meter-high mountain pass in the Karakoram Mountains,'
            label='Khunjran'
            path='/khunjran'
          />
          <CardItem
               src="/images/gil-9.jpg"
            text='Nanga Parbat has tremendous vertical relief over local terrain in all directions.'
            label='Parbat'
            path='/parbat'
          />
        </ul>
        </div>
      </div>
    </div>

    <br/>
<br/>
<br/>

<div style={{marginLeft:'50px'}}>
    <h2>Host in Lahore</h2>
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




export default Gilgit;