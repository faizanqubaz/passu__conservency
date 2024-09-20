import React, { useEffect, useState } from "react";
import './team.css';
import team1 from '../../components/assets/team2.jpg';
import team2 from '../../components/assets/team3.jpg';
import logo3 from '../../components/assets/logo3.png';
import logo4 from '../../components/assets/logo6.png'; 
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
    const totalWidth = imageWidth * totalImages;

    // Function to slide the images
    const slideImages = () => {
      if (!isMobile) {
        count -= imageWidth / 100;  // Adjust sliding speed here
        if (Math.abs(count) >= totalWidth) {
          count = 0;  // Reset to the beginning
        }
        slider.style.transform = `translateX(${count}px)`;
      }
    };

    const intervalId = setInterval(slideImages, 20);  // Adjust speed by changing the interval time (ms)

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
          <img className="team_slider_content_icons_image" src={team1} alt="Team 1" />
          <img className="team_slider_content_icons_image" src={team2} alt="Team 2" />
          <img className="team_slider_content_icons_image" src={logo4} alt="Team 3" />
          <img className="team_slider_content_icons_image" src={logo3} alt="Team 4" />
          {/* Repeating the same images to create a looping effect */}
          <img className="team_slider_content_icons_image" src={team1} alt="Team 1" />
          <img className="team_slider_content_icons_image" src={team2} alt="Team 2" />
          <img className="team_slider_content_icons_image" src={logo4} alt="Team 3" />
          <img className="team_slider_content_icons_image" src={logo3} alt="Team 4" />
        </div>
      </div>
    </div>
  );
}

export default OurTeam;
