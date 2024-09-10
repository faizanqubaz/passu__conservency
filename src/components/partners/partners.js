import React, { useEffect } from "react";
import './partners.css';
import logo1 from '../../components/assets/logo1.png';
import logo2 from '../../components/assets/logo2.jpg';
import logo3 from '../../components/assets/logo3.png';
import logo4 from '../../components/assets/logo6.png'; 
import logo8 from '../../components/assets/logo6.png'; 
import logo5 from '../../components/assets/logo6.png'; 
import logo6 from '../../components/assets/logo6.png'; 
import logo7 from '../../components/assets/logo6.png';  // Assuming you want 4 logos
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons';

const Partners = () => {
  useEffect(() => {
    const slider = document.querySelector('.partner_slider_content_icons');
    let count = 0;
    const totalWidth = slider.scrollWidth / 4;  // Adjust for looping

    // Function to slide the logos from left to right
    const slideLogos = () => {
      count -= 1;  // Adjust sliding speed here
      if (Math.abs(count) >= totalWidth) {
        count = 0;  // Reset to the beginning
      }
      slider.style.transform = `translateX(${count}px)`;
    };

    const intervalId = setInterval(slideLogos, 20);  // Adjust speed by changing the interval time (ms)
    
    return () => clearInterval(intervalId);  // Cleanup interval on component unmount
  }, []);

  return (
    <div className="partner_slider">
      <div className="partner_slider_content">
        <div className="partner_slider_content_head">
          <h2 className="partner_slider_content_head_heading">Our Partners</h2>
          <FontAwesomeIcon color='#dbb127' style={{ marginLeft: '10px' }} icon={faAnglesRight} fontSize={'20px'} />
        </div>

        <div className="partner_slider_content_icons">
          <img className="partner_slider_content_icons_image" src={logo1} alt="Partner 1" />
          <img className="partner_slider_content_icons_image" src={logo2} alt="Partner 2" />
          <img className="partner_slider_content_icons_image" src={logo3} alt="Partner 3" />
          <img className="partner_slider_content_icons_image" src={logo4} alt="Partner 4" />
          {/* Repeating the same images to create a looping effect */}
          <img className="partner_slider_content_icons_image" src={logo1} alt="Partner 1" />
          <img className="partner_slider_content_icons_image" src={logo2} alt="Partner 2" />
          <img className="partner_slider_content_icons_image" src={logo3} alt="Partner 3" />
          <img className="partner_slider_content_icons_image" src={logo1} alt="Partner 1" />
          <img className="partner_slider_content_icons_image" src={logo2} alt="Partner 2" />
          <img className="partner_slider_content_icons_image" src={logo3} alt="Partner 3" />
        </div>
      </div>
    </div>
  );
}

export default Partners;
