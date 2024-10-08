import React, { useState, useRef } from 'react';
import './navbarcontainer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import passuA from '../assets/passu.jpg';
// Import additional images
import imageA1 from '../assets/pasu2.jpg';
import imageA2 from '../assets/passu3.jpg';
import imageA3 from '../assets/passu4.jpg';
import image9 from '../assets/passu9.jpg';

const NavbarContainer = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState('passu'); // Default dropdown open
  const [hoveredItem, setHoveredItem] = useState('passu-item1'); // Default item
  const timeoutRef = useRef(null);

  const handleMouseEnter = (dropdownName) => {
    timeoutRef.current = setTimeout(() => {
      clearTimeout(timeoutRef.current);
      setIsDropdownVisible(dropdownName);
    }, 700);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsDropdownVisible(null);
      setHoveredItem(null); // Reset hovered item when leaving
    }, 700);
  };

  const handleItemHover = (item) => {
    setHoveredItem(item);
  };

  const imagesMap = {
    'passu-item1': [imageA2, passuA, imageA3], // List of images for item1
    'passu-item2': [imageA1, imageA2], // List of images for item2
    'batura-item1': [imageA1, imageA2], // Replace with real images
    'batura-item2': [imageA3, image9], // Replace with real images
    // Add more mappings as needed
  };

  return (
    <div className="navbar_container_main">
      <div className="navbar_container_main_slider">
        <div className="navbar_container_main_slider_flex">
          <div className="navbar_container_main_slider_flex_div1">
            <img src={logo} alt="Logo" className="navbar_container_main_slider_flex_logo" />
          </div>

          <div className="navbar_container_main_slider_flex_div2">
            <ul className="navbar_container_main_slider_flex_ul">
              {/* Home Link */}
              <Link to="/" className="navbar_container_main_slider_flex_link">
                <li className="navbar_container_main_slider_flex_ul_active">Home</li>
              </Link>

              {/* Passu Dropdown */}
              <li
                className="dropdown"
                onMouseEnter={() => handleMouseEnter('passu')}
                onMouseLeave={handleMouseLeave}
              >
                Passu <FontAwesomeIcon icon={faChevronDown} className="dropdown-icon" />
                {isDropdownVisible === 'passu' && (
                  <>
                    <div
                      className="custom-dropdown"
                      onMouseEnter={() => handleMouseEnter('passu')}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div className="custom-dropdown_main_content_slider">
                        <div className="custom-dropdown_list">
                          <ul>
                            <li onMouseEnter={() => handleItemHover('passu-item1')}>TupopDan</li>
                            <li onMouseEnter={() => handleItemHover('passu-item2')}>Avagadar</li>
                            <li onMouseEnter={() => handleItemHover('passu-item2')}>Passu Glacier Side</li>
                            <li onMouseEnter={() => handleItemHover('passu-item2')}>Khuramabad</li>
                            <li onMouseEnter={() => handleItemHover('passu-item2')}>Surnoabod</li>
                          </ul>
                        </div>
                        <div className="custom-dropdown_images">
                          {imagesMap[hoveredItem]?.map((image, index) => (
                            <div key={index} className='passu_images_container_flex'>
                              <img className='passu_img_class' src={image} alt={`Passu Image ${index + 1}`} />
                              <p>{`Passu ${index + 1}`}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="buffer-area"></div>
                  </>
                )}
              </li>

              {/* Batura Dropdown */}
              <li
                className="dropdown"
                onMouseEnter={() => handleMouseEnter('batura')}
                onMouseLeave={handleMouseLeave}
              >
                Batura <FontAwesomeIcon icon={faChevronDown} className="dropdown-icon" />
                {isDropdownVisible === 'batura' && (
                  <>
                    <div
                      className="custom-dropdown"
                      onMouseEnter={() => handleMouseEnter('batura')}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div className="custom-dropdown_main_content_slider">
                        <div className="custom-dropdown_list">
                          <ul>
                            <li onMouseEnter={() => handleItemHover('batura-item1')}>Yunz Valley</li>
                            <li onMouseEnter={() => handleItemHover('batura-item2')}>Yashpert Valley</li>
                            <li onMouseEnter={() => handleItemHover('batura-item2')}>Gucesem Valley</li>
                            <li onMouseEnter={() => handleItemHover('batura-item2')}>YukhGoz Valley</li>
                            <li onMouseEnter={() => handleItemHover('batura-item2')}>Kukhail Valley</li>
                          </ul>
                        </div>
                        <div className="custom-dropdown_images">
                          {imagesMap[hoveredItem]?.map((image, index) => (
                            <div key={index} className='passu_images_container_flex'>
                              <img className='batura_img_class' src={image} alt={`Batura Image ${index + 1}`} />
                              <p>{`Batura ${index + 1}`}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="buffer-area"></div>
                  </>
                )}
              </li>
              <Link to={'/aboutus'} className="navbar_container_main_slider_flex_link">
                <li>About Us</li>
              </Link>

{/* 
              <li>Blog</li> */}




              {/* Media Dropdown */}
              <li
                className="dropdown"
                onMouseEnter={() => handleMouseEnter('media')}
                onMouseLeave={handleMouseLeave}
              >
                Media <FontAwesomeIcon icon={faChevronDown} className="dropdown-icon" />
                {isDropdownVisible === 'media' && (
                  <div
                    className="media-dropdown"
                    onMouseEnter={() => handleMouseEnter('media')}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="media">
                      <div className="media-dropdown_content">
                        <ul>
                          <Link to={'/video'} className='navbar_container_contactus_style'>
                          <li onMouseEnter={() => handleItemHover('media-item1')}>Videos</li>
                          </Link>
                         
                          <Link to={'/gallery'} className='navbar_container_contactus_style'>
                         
                          <li onMouseEnter={() => handleItemHover('media-item2')}>Gallery</li>

                          </Link>
                        </ul>
                      </div>
                    </div>
                    <div className="buffer-area"></div>
                  </div>
                )}
              </li>
              <Link to={'/sponsors'} className='navbar_container_contactus_style'>
                <li>Sponsors</li>
              </Link>

              <Link to={'/terms_and_conditions'} className='navbar_container_contactus_style'>
                <li >Term & Condition</li>
              </Link>

              <Link className='navbar_container_contactus_style' to={'/contactus'}>
                <li>Contact Us</li>
              </Link>

              <Link className='navbar_container_contactus_style' to={'/admin-sigin'}>
                <li>Admin</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarContainer;
