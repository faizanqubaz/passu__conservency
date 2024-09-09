import './guide.css';
import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesLeft, faAnglesRight } from '@fortawesome/free-solid-svg-icons';
import video1 from '../assets/passu.mp4'; // Replace with your actual video files
import video2 from '../assets/batura.mp4';
import video3 from '../assets/passu.mp4';

const discountData = [
  {
    id: 1,
    video: video1, // Replace with your video files
    description: "Saad Khan Rizwi",
    priceFrom: "******",
    priceCurrent: "$45000",
    offer: "for 16 day 1 hunter"
  },
  {
    id: 2,
    video: video2,
    description: "Kevin Archer",
    priceFrom: "******",
    priceCurrent: "$45000",
    offer: "for 16 day 1 hunter"
  },
  {
    id: 3,
    video: video3,
    description: "Rechard willsmith",
    priceFrom: "******",
    priceCurrent: "$45000",
    offer: "for 16 day 1 hunter"
  }
  // Add more video entries as needed
];

const Guide = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % discountData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? discountData.length - 1 : prevIndex - 1
    );
  };

  // Calculate the 3 videos to display
  const visibleVideos = [
    discountData[currentIndex],
    discountData[(currentIndex + 1) % discountData.length],
    discountData[(currentIndex + 2) % discountData.length]
  ];

  return (
    <div className="guide_main_container">
      <div className='guide_main_container_slider'>
        <div className='guide_main_container_slider_head'>
          <div className='guide_main_container_slider_flex'>
            <h2 className='guide_main_container_slider_heading'>Meet your Guides</h2>
          </div>
        </div>

        <div className="guide_main__arrow_left" onClick={handlePrev}>
          <FontAwesomeIcon icon={faAnglesLeft} fontSize={'36px'} />
        </div>

        <div className='guide_main__image_container'>
          {/* Show only 3 videos */}
          {visibleVideos.map((item, index) => (
            <div 
              key={item.id} 
              className='guide_main__image_container_one'
            >
              <video 
                className='guide_main__video_container_one_video' 
                src={item.video} 
                alt={item.description}
                controls
                width="100%"
                height="233px"
              />
              <p className='guide_main__video_container_one_image_paragraph'>{item.description}</p>
              <div className='guide_main__image_container_one_head'>
                <p style={{color:'#dbb127'}}>price from</p>
                <p style={{color:'#dbb127'}}>{item.priceFrom}</p>
              </div>
              <div className='guide_main__image_container_two_head'>
                <p>{item.priceCurrent}</p>
                <p>{item.offer}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className='guide_main__arrow_right_hr'>
          <hr />
        </div>

        <div className="guide_main__arrow_right" onClick={handleNext}>
          <FontAwesomeIcon icon={faAnglesRight} fontSize={'36px'} />
        </div>
      </div>
    </div>
  );
};

export default Guide;
