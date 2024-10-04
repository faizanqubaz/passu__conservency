import './newhunt.css';
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesLeft, faAnglesRight, faStar, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import axios from 'axios';

const NewHunt = () => {
  const [discountData, setDiscountData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fetch data from API on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://zakhari-a63a222c7c96.herokuapp.com/api/v2/ibex?hunttype=newhunttype`);
        setDiscountData(response.data.data);
      } catch (error) {
        console.error('Error fetching discount data:', error);
      }
    };

    fetchData();
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % discountData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? discountData.length - 1 : prevIndex - 1
    );
  };

  // If data is not yet loaded, return a loading spinner
  if (!discountData.length) {
    return (
      <div style={{ textAlign: 'center', padding: '50px' }}>
        <FontAwesomeIcon icon={faSpinner} spin fontSize={'36px'} color='#dbb127' />
      </div>
    );
  }

  // Calculate the number of items to display (up to 3)
  const totalItems = discountData.length;
  const itemsToShow = Math.min(3, totalItems);
  const visibleImages = [];

  for (let i = 0; i < itemsToShow; i++) {
    visibleImages.push(discountData[(currentIndex + i) % totalItems]);
  }

  return (
    <div className="newhunt_main_container">
      <div className='newhunt_main_container_slider'>
        <div className='newhunt_main_container_slider_head'>
          <div className='newhunt_main_container_slider_flex'>
            <h2 className='newhunt_main_container_slider_heading'>New hunts</h2>
            <FontAwesomeIcon color='#dbb127' style={{ marginLeft: '10px' }} icon={faAnglesRight} fontSize={'20px'} />
          </div>
          <p className='newhunt_main_container_slider_para_head'>All New Hunts</p>
        </div>

        <div className="newhunt_main__arrow_left" onClick={handlePrev}>
          <FontAwesomeIcon icon={faAnglesLeft} fontSize={'36px'} />
        </div>

        <div className='newhunt_main__image_container'>
          {visibleImages.map((item) => (
            <Link
              key={item.id}
              to={`/newhunt/${item._id}`}
              state={{ item }}
              className='newhunt_main__image_container_one'
            >
              <img
                className='newhunt_main__image_container_one_image'
                src={item.ibexphotos[0]}
                alt={item.description}
              />
              <p className='newhunt_main__image_container_one_image_paragraph'>{item.description}</p>
              <div className='newhunt_main__image_container_one_head'>
                <p style={{ color: '#dbb127' }}>price from</p>
                <FontAwesomeIcon icon={faStar} color='#dbb127' />
                <FontAwesomeIcon icon={faStar} color='#dbb127' />
                <FontAwesomeIcon icon={faStar} color='#dbb127' />
                <FontAwesomeIcon icon={faStar} color='#dbb127' />
                <FontAwesomeIcon icon={faStar} color='#dbb127' />
                <p style={{ color: '#dbb127' }}>(3.6)</p>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', width: '71%', color: 'white' }}>
                <div className='discount_main__image_container_two_head'>
                  <p style={{ fontSize: '25px' }}>{'$' + item.newPrice}</p>
                  <p style={{ textDecoration: 'line-through' }}>{'$' + item.priceOld}</p>
                </div>
                <p style={{ fontSize: '14px', textTransform: 'capitalize' }}>
                  {new Date(item.huntdate).toLocaleDateString()}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className='newhunt_main__arrow_right_hr'>
          <hr />
        </div>

        <div className="newhunt_main__arrow_right" onClick={handleNext}>
          <FontAwesomeIcon icon={faAnglesRight} fontSize={'36px'} />
        </div>
      </div>
    </div>
  );
};

export default NewHunt;
