import './popularhunt.css';
import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesLeft,faAnglesRight,faStar, faStarHalfAlt  } from '@fortawesome/free-solid-svg-icons';
import image10 from '../assets/passu9.jpg';
import image4 from '../assets/passu4.jpg';
import image2 from '../assets/pasu2.jpg';

const discountData = [
  {
    id: 1,
    image: image4,
    description: "3 days hunt at yunz valley 52 inch(1 Ibex) Sialkot Pakistan",
    priceFrom: "******",
    priceCurrent: "$45000",
    priceOld: "$47000",
    offer: "for 16 day 1 hunter"
  },
  {
    id: 2,
    image: image2,
    description: "14 Days Leopard, Buffalo & P/G (1:1)",
    priceFrom: "******",
    priceCurrent: "$45000",
    offer: "for 16 day 1 hunter"
  },
  {
    id: 3,
    image: image10,
    description: "3 days hunt at yunz valley 52 inch(1 Ibex) Sialkot Pakistan",
    priceFrom: "******",
    priceCurrent: "$45000",
    offer: "for 16 day 1 hunter"
  },
  {
    id: 4,
    image: image10,
    description: "3 days hunt at yunz valley 52 inch(1 Ibex) Sialkot Pakistan",
    priceFrom: "******",
    priceCurrent: "$45000",
    offer: "for 16 day 1 hunter"
  },
  {
    id: 5,
    image: image10,
    description: "14 Days Leopard, Buffalo & P/G (1:1)",
    priceFrom: "******",
    priceCurrent: "$45000",
    offer: "for 17 day 1 hunter"
  },
  {
    id: 6,
    image: image10,
    description: "3 days hunt at yunz valley 52 inch(1 Ibex) Sialkot Pakistan",
    priceFrom: "******",
    priceCurrent: "$45000",
    offer: "for 18 day 1 hunter"
  }
];

const PopularHunt = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % discountData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? discountData.length - 1 : prevIndex - 1
    );
  };

  // Calculate the 3 images to display
  const visibleImages = [
    discountData[currentIndex],
    discountData[(currentIndex + 1) % discountData.length],
    discountData[(currentIndex + 2) % discountData.length]
  ];

  return (
    <div className="popularhunt_main_container">
      <div className='popular_main_container_slider'>
        <div className='popular_main_container_slider_head'>
          <div className='popular_main_container_slider_flex'>
            <h2 className='popular_main_container_slider_heading'>Popular hunts</h2>
            <FontAwesomeIcon color='#dbb127'  style={{marginLeft:'10px'}}  icon={faAnglesRight} fontSize={'20px'} />
          </div>
          <p className='popular_main_container_slider_para_head'>All Offers</p>
        </div>

        <div className="popular_main__arrow_left" onClick={handlePrev}>
          <FontAwesomeIcon icon={faAnglesLeft} fontSize={'36px'} />
        </div>

        <div className='popular_main__image_container'>
          {/* Show only 3 images */}
          {visibleImages.map((item, index) => (
            <div 
              key={item.id} 
              className='popular_main__image_container_one'
            >
              <img 
                className='popular_main__image_container_one_image' 
                src={item.image} 
                alt={item.description} 
              />
              <p className='popular_main__image_container_one_image_paragraph'>{item.description}</p>
              <div className='popular_main__image_container_one_head'>
                <p style={{color:'#dbb127',fontsize: '12px'}}>package price</p>
                <FontAwesomeIcon icon={faStar} color='#dbb127' />
                <FontAwesomeIcon icon={faStar} color='#dbb127' />
                <FontAwesomeIcon icon={faStar} color='#dbb127' />
                <FontAwesomeIcon icon={faStar} color='#dbb127' />
                <FontAwesomeIcon icon={faStar} color='#dbb127' />
                <p style={{color:'#dbb127'}}>(3.6)</p>
              </div>
              <div className='popular_main__image_container_two_head'>
                <p style={{marginTop: '15px', fontSize: '21px'}}>{item.priceCurrent}</p>
                <p>{item.offer}</p>
              </div>
            </div>
          ))}
        </div>
<div className='popular_main__arrow_right_hr'>
<hr  />
</div>
      

        <div className="popular_main__arrow_right" onClick={handleNext}>
          <FontAwesomeIcon icon={faAnglesRight} fontSize={'36px'} />
        </div>
      </div>
    </div>
  );
};

export default PopularHunt;
