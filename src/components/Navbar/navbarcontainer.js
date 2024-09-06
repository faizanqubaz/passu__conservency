import React, { useState, useRef } from 'react';
import './navbarcontainer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/logo.png';
import passuA from '../assets/passu.jpg';
// Import additional images
import imageA1 from '../assets/passu.jpg';
import imageA2 from '../assets/passu.jpg';

const NavbarContainer = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(null);
  const [hoveredItem, setHoveredItem] = useState(null); // Track hovered item
  const timeoutRef = useRef(null);

  const handleMouseEnter = (dropdownName) => {
    clearTimeout(timeoutRef.current);
    setIsDropdownVisible(dropdownName);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsDropdownVisible(null);
      setHoveredItem(null); // Reset hovered item when leaving
    }, 600);
  };

  const handleItemHover = (item) => {
    setHoveredItem(item);
  };

  const imagesMap = {
    'passu-item1': [logo, passuA], // List of images for item1
    'passu-item2': [imageA1, imageA2], // List of images for item2
    'batura-item1': [imageA1, imageA2], // Replace with real images
    'batura-item2': [logo], // Replace with real images
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
              <li className="navbar_container_main_slider_flex_ul_active">Home</li>

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
                            <li onMouseEnter={() => handleItemHover('passu-item1')}>Item 1</li>
                            <li onMouseEnter={() => handleItemHover('passu-item2')}>Item 2</li>
                          </ul>
                        </div>
                        <div className="custom-dropdown_images">
                          {hoveredItem && imagesMap[hoveredItem]?.map((image, index) => (
                          <div className='passu_images_container_flex'>
                           
                            <img key={index} src={image} alt={`Passu Image ${index + 1}`}  />
                            <p>{`Image ${index + 1}`}</p>
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
                            <li onMouseEnter={() => handleItemHover('batura-item1')}>Item A</li>
                            <li onMouseEnter={() => handleItemHover('batura-item2')}>Item B</li>
                          </ul>
                        </div>
                        <div className="custom-dropdown_images">

                          {hoveredItem && imagesMap[hoveredItem]?.map((image, index) => (
                             <div className='passu_images_container_flex'>
                           
                            <img key={index} src={image} alt={`Batura Image ${index + 1}`}  />
                            <p>{`Image ${index + 1}`}</p>
                           </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="buffer-area"></div>
                  </>
                )}
              </li>

              <li>About Us</li>
              <li>Blog</li>

              {/* Media Dropdown */}
              <li
                className="dropdown"
                onMouseEnter={() => handleMouseEnter('media')}
                onMouseLeave={handleMouseLeave}
              >
                Media <FontAwesomeIcon icon={faChevronDown} className="dropdown-icon" />
                {isDropdownVisible === 'media' && (
                  <div
                    className="custom-dropdown"
                    onMouseEnter={() => handleMouseEnter('media')}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="custom-dropdown_main_content_slider">
                      <div className="custom-dropdown_list">
                        <ul>
                          <li onMouseEnter={() => handleItemHover('media-item1')}>Media Item 1</li>
                          <li onMouseEnter={() => handleItemHover('media-item2')}>Media Item 2</li>
                        </ul>
                      </div>

                      {/* <div className="custom-dropdown_images">
                        {hoveredItem && imagesMap[hoveredItem]?.map((image, index) => (
                          <div key={index} className="image-container">
                            <img className='image_h_b' src={image} alt={`Passu Image ${index + 1}`} />
                            <p>{`Image ${index + 1}`}</p>
                          </div>
                        ))}
                      </div> */}

                    </div>
                  </div>
                )}
              </li>

              <li>Sponsors</li>
              <li>Term & Condition</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarContainer;
