import React from 'react';
import './App.css';
import Days from "./Days"


function HeroSection() {

    return (

      <>
      <img
      style={{height: '600px', width: '100%'}}
      className="img"
      src="/images/home-1.jpg"
      alt="First slide"

        
      />
    <br/>
    <br/>
    <br/>
      <Days/>
      

  </>
    );
};




export default HeroSection;