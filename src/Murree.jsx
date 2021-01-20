import React from 'react';
import './App.css';

import CardItem from './CardItem';
import Carousel from 'react-bootstrap/Carousel'
import CardGroup from 'react-bootstrap/CardGroup'
function Murree() {

    return (

      <>
      <Carousel>
      <Carousel.Item  interval={1000}>
    <img
      style={{height: '600px', width: '100%'}}
      className="img"
      src="/images/mur-1.jpg"
      alt="First slide"
    />
    <Carousel.Caption  interval={1000}>
    
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      style={{height: '600px', width: '100%'}}
      className="img"
      src="/images/mur-2.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
    
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      style={{height: '600px', width: '100%'}}
      className="img"
      src="/images/mur-3.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
   
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      style={{height: '600px', width: '100%'}}
      className="img"
      src="/images/mur-4.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
   
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      style={{height: '600px', width: '100%'}}
      className="img"
      src="/images/mur-5.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
   
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      style={{height: '600px', width: '100%'}}
      className="img"
      src="/images/mur-6.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
   
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      style={{height: '600px', width: '100%'}}
      className="img"
      src="/images/mur-7.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
   
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      style={{height: '600px', width: '100%'}}
      className="img"
      src="/images/mur-8.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
   
    </Carousel.Caption>
  </Carousel.Item>
  
   <Carousel.Item>
    <img
      style={{height: '600px', width: '100%'}}
      className="img"
      src="/images/mur-9.jpg"
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
        <h2 style={{color:'black'}} >About Murree</h2>
        <p style={{color:'white', backgroundColor:"black"}}>Murree, or Marhee as it was then called, was first identified as a potential hill station by Major James Abbott in 1847.[a]

The town's early development was in 1851 by President of the Punjab Administrative Board, Sir Henry Lawrence.[a] It was originally established as a sanatorium for British troops garrisoned on the Afghan frontier.[4] Officially, the municipality was created in 1850.[14]

The permanent town of Murree was constructed at Sunnybank in 1853. The church was sanctified in May 1857, and the main road, Jinnah Road, originally known as Mall Road and still commonly referred to as "The Mall"), was built. The most significant commercial establishments, the Post Office, general merchants with European goods, tailors and a millinery, were established opposite the church. Until 1947, access to Mall Road was restricted for "natives" (non-Europeans).</p>

      </div>

      <br/>
      <br/>

  <div className='cards' style={{backgroundColor:'black'}}>
      <h1 style={{color:"black"}}>Top Attractions in Murree</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          
          <ul className='cards__items'>
            <CardItem
               src="/images/mur-1.jpg"
              text='Chattar Park is an ancient fort at Altit town in the Hunza valley in Murree'
              label='Chattar Park'
              path='/chattar'
            />
            <CardItem
               src="/images/mur-2.jpg"
              text='Munjai is a union council of Lower Dir District in Khyber Pakhtunkhwa'
              label='Dir Munjai'
              path='/dir'
            />
            <CardItem
                src="/images/mur-3.jpg"
              text='Iqbal Academy Pakistan was originally established in 1951.'
              label='Iqbal Municipal Library'
              path='/Iqballibrary'
            />
          </ul>

          <br/>
        

          <ul className='cards__items'>
            <CardItem
                  src="/images/mur-4.jpg"
              text='Churches from the British era can still be found in Murree and Nathia Gali'
              label='Mall Raod'
              path='/mall'
            />
            <CardItem
                src="/images/mur-5.jpg"
              text='Kashmir Point is a scenic viewpoint in Murree, Pakistan, where the mountains of Kashmir can be viewed'
              label='Kashmir Point'
              path='/kpoint'
            />
            <CardItem
           src="/images/mur-6.jpg"
              text='Churches from the British era can still be found in Murree and Nathia Gali'
              label='Nathiagali'
              path='/nathiagali'
            />
          </ul>

          <br/>
        

        <ul className='cards__items'>
          <CardItem
              src="/images/mur-7.jpg"
            text='A chair lift has been installed that goes down 1.5 km of Pindi Point.'
            label='Pindi Point Chairlift'
            path='/pindipoint'
          />
          <CardItem
            src="/images/mur-8.jpg"
            text='Murree is also a Union Council, bounded to the north by Darya Gali and Rawat'
            label='Sangrela Park'
            path='/sangrela'
          />
          <CardItem
             src="/images/mur-9.jpg"
            text='Murree is one of the largest resort towns in the Galyat region of Pakistan,'
            label='Sozo Adventure Park'
            path='/sozo'
          />
        </ul>
        </div>
      </div>
    </div>

    <br/>
<br/>
<br/>

<div style={{marginLeft:'50px'}}>
    <h2>Host in Murree</h2>
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




export default Murree;