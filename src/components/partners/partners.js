import React, { useEffect, useState } from "react";
import './partners.css';
import logo1 from '../../components/assets/logo1.png';
import logo2 from '../../components/assets/logo2.jpg';
import logo3 from '../../components/assets/logo3.png';
import logo4 from '../../components/assets/logo6.png'; 
import logo5 from '../../components/assets/logo6.png'; 
import logo6 from '../../components/assets/logo6.png'; 
import logo7 from '../../components/assets/logo6.png'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons';

const Partners = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % 7); // Adjusted for 7 logos
    }, 2000);

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="partner_slider">
      <div className="partner_slider_content">
        <div className="partner_slider_content_head">
          <h2 className="partner_slider_content_head_heading">Our Partners</h2>
          <FontAwesomeIcon color='#dbb127' style={{ marginLeft: '10px' }} icon={faAnglesRight} fontSize={'20px'} />
        </div>

        <div className="partner_slider_content_icons" style={{ transform: `translateX(-${slideIndex * 33}%)` }}>
          <img className="partner_slider_content_icons_image" src={logo1} alt="Partner 1" />
          <img className="partner_slider_content_icons_image" src={logo2} alt="Partner 2" />
          <img className="partner_slider_content_icons_image" src={logo3} alt="Partner 3" />
          <img className="partner_slider_content_icons_image" src={logo4} alt="Partner 4" />
          <img className="partner_slider_content_icons_image" src={logo5} alt="Partner 5" />
          <img className="partner_slider_content_icons_image" src={logo6} alt="Partner 6" />
          <img className="partner_slider_content_icons_image" src={logo7} alt="Partner 7" />
        </div>
      </div>
    </div>
  );
};

export default Partners;
