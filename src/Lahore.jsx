import React from 'react';
import './App.css';

import CardItem from './CardItem';
import Carousel from 'react-bootstrap/Carousel'
import CardGroup from 'react-bootstrap/CardGroup'
function Lahore() {

    return (

      <>
      <Carousel>
      <Carousel.Item  interval={1000}>
    <img
      style={{height: '600px', width: '100%'}}
      className="img"
      src="/images/Lahore-1.jpg"
      alt="First slide"
    />
    <Carousel.Caption  interval={1000}>
    
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      style={{height: '600px', width: '100%'}}
      className="img"
      src="/images/Lahore-2.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
    
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      style={{height: '600px', width: '100%'}}
      className="img"
      src="/images/Lahore-3.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
   
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      style={{height: '600px', width: '100%'}}
      className="img"
      src="/images/Lahore-4.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
   
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      style={{height: '600px', width: '100%'}}
      className="img"
      src="/images/Lahore-5.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
   
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      style={{height: '600px', width: '100%'}}
      className="img"
      src="/images/Lahore-6.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
   
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      style={{height: '600px', width: '100%'}}
      className="img"
      src="/images/Lahore-7.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
   
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      style={{height: '600px', width: '100%'}}
      className="img"
      src="/images/Lahore-8.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
   
    </Carousel.Caption>
  </Carousel.Item>
  
   <Carousel.Item>
    <img
      style={{height: '600px', width: '100%'}}
      className="img"
      src="/images/Lahore-9.jpg"
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
        <h2 style={{color:'green'}} >About Lahore</h2>
        <p style={{color:'white', backgroundColor:"black"}}>Lahore (/ləˈhɔːr/; Punjabi: لہور; Urdu: لاہور‎; pronounced [lɑːˈɦɔːr] (About this soundlisten)) is the capital of the Pakistani province of Punjab and is the country's 2nd largest city after Karachi, as well as the 26th largest city in the world.[8] Lahore is one of Pakistan's wealthiest cities with an estimated GDP (PPP) of $65.14 billion as of 2017.[7] Lahore is the largest city and historic cultural centre of the wider Punjab region,[9][10][11][12] and is one of Pakistan's most socially liberal,[13] progressive,[14] and cosmopolitan cities.[15]

Lahore's origins reach into antiquity. The city has been controlled by numerous empires throughout the course of its history, including the Hindu Shahis, Ghaznavids, Ghurids, and Delhi Sultanate by the medieval era. Lahore reached the height of its splendour under the Mughal Empire between the late 16th and early 18th century, and served as its capital city for a number of years. The city was captured by the forces of the Afsharid ruler Nader Shah in 1739, and fell into a period of decay while being contested between the Afghans and the Sikhs. Lahore eventually became capital of the Sikh Empire in the early 19th century, and regained some of its lost grandeur.[16] Lahore was then annexed to the British Empire, and made capital of British Punjab.[17] Lahore was central to the independence movements of both India and Pakistan, with the city being the site of both the declaration of Indian Independence, and the resolution calling for the establishment of Pakistan. Lahore experienced some of the worst rioting during the Partition period preceding Pakistan's independence.[18] Following the success of the Pakistan Movement and subsequent independence in 1947, Lahore was declared capital of Pakistan's Punjab province.

Lahore exerts a strong cultural influence over Pakistan.[9] Lahore is a major center for Pakistan's publishing industry, and remains the foremost center of Pakistan's literary scene. The city is also a major centre of education in Pakistan,[19] with some of Pakistan's leading universities based in the city.[20] Lahore is also home to Pakistan's film industry, Lollywood, and is a major centre of Qawwali music.[21] The city also hosts much of Pakistan's tourist industry,[21][22] with major attractions including the Walled City, the famous Badshahi and Wazir Khan mosques and Sikh shrines. Lahore is also home to the Lahore Fort and Shalimar Gardens, both of which are UNESCO World Heritage Sites.[22]</p>

      </div>

      <br/>
      <br/>

  <div className='cards' style={{backgroundColor:'black'}}>
      <h1 style={{color:"green"}}>Top Attractions in Lahore</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          
          <ul className='cards__items'>
            <CardItem
              src="/images/Lahore-1.jpg"
              text='The Badshahi Mosque is a Mughal era mosque in Lahore, capital of the Pakistan'
              label='Badshahi Mosque'
              path='/badshahi'
            />
            <CardItem
                src="/images/Lahore-2.jpg"
              text='Pakistan Army Museum is located in the British-era colonial barracks of the Pakistan Armys General Headquarters (GHQ) complex of buildings.'
              label='Army Museum'
              path='/armymuseum'
            />
            <CardItem
                src="/images/Lahore-3.jpg"
              text='Delhi Gate is one of six remaining historic gates of the Walled City of Lahore'
              label='Delhi Gate'
              path='/delhigate'
            />
          </ul>

          <br/>
        

          <ul className='cards__items'>
            <CardItem
                src="/images/Lahore-4.jpg"
              text='A food street is a pedestrianised area that has been designated for restaurants and cafes.'
              label='Food Street'
              path='/foodstreet'
            />
            <CardItem
               src="/images/Lahore-5.jpg"
              text='Iqbal was one of the major inspirations behind the Pakistan Movement, and is revered in Pakistan as Muffakir-e-Pakistan'
              label='Mazar E Iqbal'
              path='/iqbal'
            />
            <CardItem
               src="/images/Lahore-6.jpg"
              text='The fortress is located at the northern end of walled city Lahore, and spreads over an area greater than 20 hectares.'
              label='Shahi Qila'
              path='/shahiqila'
            />
          </ul>

          <br/>
        

        <ul className='cards__items'>
          <CardItem
             src="/images/Lahore-7.jpg"
            text='Minar-e-Pakistan is a national monument located in Lahore, Pakistan.'
            label='Minar-E-Pakistan'
            path='/minar-e-pakistan'
          />
          <CardItem
            src="/images/Lahore-8.jpg"
            text='The Wazir Khan Mosque is 17th century mosque located in the city of Lahore, capital of the Pakistani province of Punjab'
            label='Wazir Mosque'
            path='/wazirmosque'
          />
          <CardItem
             src="/images/Lahore-9.jpg"
            text='The Wagah-Attari border ceremony happens at the border gate, two hours before sunset each day.[3] The flag ceremony is conducted by the Pakistan Rangers and Indian Border Security Force (BSF)'
            label='Wagha Border'
            path='/waghaborder'
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




export default Lahore;