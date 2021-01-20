import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/gil-1.jpg'
              text='Gilgit-Baltistan, formerly known as the Northern Areas, is a region administered by Pakistan as an administrative territory'
              label='Gilgit-Baltistan'
              path='/gilgit'
            />
            <CardItem
              src='images/mur-2.jpg'
              text='Murree is a mountain resort town, located in the Galyat region of the Pir Panjal Range'
              label='Murree'
              path='/murree'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/Lahore-1.jpg'
              text='Lahore is the capital of the Pakistani province of Punjab and is the country 2nd largest city after Karachi, as well as the 26th largest city in the world. '
              label='Lahore'
              path='/lahore'
            />
            <CardItem
              src='images/karachi-6.jpg'
              text='The city of lights'
              label='Karachi'
              path='/karachi'
            />
            <CardItem
              src='images/multan-1.jpg'
              text='The city, along with the nearby city of Uch, is renowned for its large number of Sufi shrines dating from that era'
              label='Multan'
              path='/multan'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;