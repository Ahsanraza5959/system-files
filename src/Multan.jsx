import React from 'react';
import './App.css';

import CardItem from './CardItem';
import Carousel from 'react-bootstrap/Carousel'
import CardGroup from 'react-bootstrap/CardGroup'
function Multan() {

    return (

      <>
      <Carousel>
      <Carousel.Item  interval={1000}>
    <img
      style={{height: '600px', width: '100%'}}
      className="img"
      src="/images/multan-1.jpg"
      alt="First slide"
    />
    <Carousel.Caption  interval={1000}>
    
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      style={{height: '600px', width: '100%'}}
      className="img"
      src="/images/multan-2.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
    
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      style={{height: '600px', width: '100%'}}
      className="img"
      src="/images/multan-3.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
   
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      style={{height: '600px', width: '100%'}}
      className="img"
      src="/images/multan-4.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
   
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      style={{height: '600px', width: '100%'}}
      className="img"
      src="/images/multan-5.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
   
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      style={{height: '600px', width: '100%'}}
      className="img"
      src="/images/multan-6.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
   
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      style={{height: '600px', width: '100%'}}
      className="img"
      src="/images/multan-7.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
   
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      style={{height: '600px', width: '100%'}}
      className="img"
      src="/images/multan-8.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
   
    </Carousel.Caption>
  </Carousel.Item>
  
   <Carousel.Item>
    <img
      style={{height: '600px', width: '100%'}}
      className="img"
      src="/images/multan-9.jpg"
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
        <h2 style={{color:'green'}} >About Multan</h2>
        <p style={{color:'white', backgroundColor:"black"}}>Multan is a city and capital of Multan Division located in Punjab, Pakistan. Located on the bank of the Chenab River, Multan is Pakistan's 7th largest city and is the major cultural and economic centre of southern Punjab. Multan's history stretches deep into antiquity
        The Multan region has been continuously inhabited for at least 2,000 years. The region is home to numerous archaeological sites dating to the era of the Early Harappan period of the Indus Valley Civilisation,[15] dating from 3000 BCE until 2800 BCE.

According to the Persian historian Firishta, the city was founded by a great grandson of Noah.[14] According to Hindu religious texts, Multan was founded by the Hindu sage Kashyapa[16] and also asserts Multan as the capital of the Trigarta Kingdom ruled by the Katoch dynasty at the time of the Kurukshetra War that is central the Hindu epic poem, the Mahabharata.

Ancient Multan was the center of a solar-worshiping tradition that was based at the ancient Multan Sun Temple.[20] While the tradition was dedicated to the Hindu Sun God Surya, the cult was influenced by Persian Zoroastrianism.[20] The Sun Temple was mentioned by Greek Admiral Skylax, who passed through the area in 515 BCE. The temple is also mentioned in the 400s BCE by the Greek historian, Herodotus.[21</p>

      </div>

      <br/>
      <br/>

  <div className='cards' style={{backgroundColor:'black'}}>
      <h1 style={{color:"green"}}>Top Attractions in Multan</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          
          <ul className='cards__items'>
            <CardItem
              src='images/multan-1.jpg'
              text='Ghanta Ghar or Clock Tower of Multan was built in 1884 A.D. during British Raj in South Asia'
              label='Ghanta Ghar'
              path='/ghantaghar'
            />
            <CardItem
              src='images/multan-2.jpg'
              text='Shah Rukne Alam was the son of Pir Sadar-Al-Din Arif. He was born in Multan.'
              label='Tomb of Shah Rukn-E-Alam'
              path='/rukan'
            />
            <CardItem
               src='images/multan-3.jpg'
              text='Shams-i Tabrīzī or Shams al-Din Mohammad was a Persian poet'
              label='Tomb Shah shams tabrez'
              path='/shahshams'
            />
          </ul>

          <br/>
        

          <ul className='cards__items'>
            <CardItem
              src='images/multan-4.jpg'
              text='The Multan Fort, a military installation, was a landmark of South Asian defence and architecture'
              label='Fort Kohna'
              path='/fort'
            />
            <CardItem
              src='images/multan-5.jpg'
              text='It is very old structure (probably oldest living structure in Multan).'
              label='Mausoleum of Mai Maharban'
              path='/maharban'
            />
            <CardItem
               src='images/multan-6.jpg'
              text='Multan Garrison Mess is one of the oldest buildings of Multan'
              label='Multan Garrison Mess'
              path='/garrison'
            />
          </ul>

          <br/>
        

        <ul className='cards__items'>
          <CardItem
            src='images/multan-7.jpg'
            text='Ghanta Ghar or Clock Tower of Multan was built in 1884 A.D. during British Raj in South Asia'
            label='Dehli Gate'
            path='/haramgate'
          />
          <CardItem
            src='images/multan-8.jpg'
            text='The place where Ahmad Shah Abdali was born in Multan'
            label='Ahmad Shah Abdali Birth Place Momentum'
            path='/momentum'
          />
          <CardItem
             src='images/multan-9.jpg'
            text='Shah Ali Akbar was a great-great-grandson of Shah Shams Sabzwari'
            label='Tomb of Shah Ali Akbar'
            path='/shahaliakbar'
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




export default Multan;