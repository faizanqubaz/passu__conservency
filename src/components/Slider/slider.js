import React, { useState, useEffect } from 'react';
import './slider.css';
import image1 from '../assets/passu.jpg';
import image2 from '../assets/pasu2.jpg';
import image3 from '../assets/passu3.jpg';
import image9 from '../assets/passu9.jpg'

const SliderContainer = () => {
  const images = [
    {
      url: image9,
      text: `The Passu ibex, native to northern Pakistan's Karakoram range, is a striking wild goat with long, ${<br /> }curved horns. Adapted to rugged, cold mountainous terrain, this agile climber is crucial to the ecosystem and holds cultural significance, symbolizing resilience and strength`
    },
    {
      url: image2,
      text: 'The Batura ibex, also known as the Batura wild goat, inhabits the Batura Glacier region in northern Pakistan. Characterized by its impressive, backward-curving horns and robust, tawny coat, this ibex thrives in the challenging environment of the Karakoram Range.'
    },
    {
      url: image3,
      text: 'The Batura ibex, also known as the Batura wild goat, inhabits the Batura Glacier region in northern Pakistan. Characterized by its impressive, backward-curving horns and robust, tawny coat, this ibex thrives in the challenging environment of the Karakoram Range.'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="slider-container">
  
    <div className="slide" style={{ backgroundImage: `url(${images[currentIndex].url})` }}>
        <div className="text-overlay">{images[currentIndex].text}</div>
      </div>

    </div>
  );
};

export default SliderContainer;
