import React, { useEffect, useState } from "react";
import './team.css';
import logo1 from '../../components/assets/logo1.png';
import logo2 from '../../components/assets/logo2.jpg';
import logo3 from '../../components/assets/logo3.png';
import logo4 from '../../components/assets/logo6.png'; 
import team1 from '../../components/assets/team2.jpg';
import team2 from '../../components/assets/team3.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons';

const OurTeam = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const slider = document.querySelector('.team_slider_content_icons');
    let count = 0;
    const imageWidth = document.querySelector('.team_slider_content_icons_image').offsetWidth;
    const totalImages = document.querySelectorAll('.team_slider_content_icons_image').length;
    const visibleImages = Math.floor(slider.offsetWidth / imageWidth); // Number of images visible at a time
    const totalWidth = imageWidth * totalImages;

    // Function to slide the logos
    const slideLogos = () => {
      if (!isMobile) {
        count -= 1;  // Adjust sliding speed here
        if (Math.abs(count) >= totalWidth - slider.offsetWidth) {
          count = 0;  // Reset to the beginning
        }
        slider.style.transform = `translateX(${count}px)`;
      }
    };

    const intervalId = setInterval(slideLogos, 20);  // Adjust speed by changing the interval time (ms)

    return () => clearInterval(intervalId);  // Cleanup interval on component unmount
  }, [isMobile]);

  return (
    <div className="team_slider">
      <div className="team_slider_content">
        <div className="team_slider_content_head">
          <h2 className="team_slider_content_head_heading">Our Team</h2>
          <FontAwesomeIcon color='#dbb127' style={{ marginLeft: '10px' }} icon={faAnglesRight} fontSize={'20px'} />
        </div>

        <div className="team_slider_content_icons">
          <img className="team_slider_content_icons_image" src={team1} alt="Partner 1" />
          <img className="team_slider_content_icons_image" src={team2} alt="Partner 2" />
          <img className="team_slider_content_icons_image" src={team1} alt="Partner 3" />
          <img className="team_slider_content_icons_image" src={logo4} alt="Partner 4" />
          {/* Repeating the same images to create a looping effect */}
          <img className="team_slider_content_icons_image" src={team2} alt="Partner 1" />
          <img className="team_slider_content_icons_image" src={team1} alt="Partner 2" />
          <img className="team_slider_content_icons_image" src={logo3} alt="Partner 3" />
          <img className="team_slider_content_icons_image" src={logo1} alt="Partner 1" />
          <img className="team_slider_content_icons_image" src={logo2} alt="Partner 2" />
          <img className="team_slider_content_icons_image" src={logo3} alt="Partner 3" />
        </div>
      </div>
    </div>
  );
}

export default OurTeam;
