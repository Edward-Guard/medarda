import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Demacia from '../../assets/images/Demacia.jpg'

import Noxus from '../../assets/images/NoxusRed.jpg'
import Shurima from '../../assets/images/ShurimaRed.jpg'
import './Main.css'

function homeCarousel() {
  return (
   

   
    <Carousel>
        <Carousel.Item>
        <img
          className="d-block w-100 home"
          src={Demacia}
          alt="First slide"
        />   
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 home"
          src={Shurima}
          alt="Second slide"
        />

        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 home"
          src={Noxus}
          alt="Third slide"
        />

        
      </Carousel.Item>
      
    </Carousel>
 
    
     
    
      
    
    
  );
}

export default homeCarousel;

