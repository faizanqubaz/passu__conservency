import React, { useState, useRef } from 'react';
import './navbarcontainer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/logo.png';

const NavbarContainer = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(null);
  const timeoutRef = useRef(null);

  const handleMouseEnter = (dropdownName) => {
    clearTimeout(timeoutRef.current);
    setIsDropdownVisible(dropdownName);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsDropdownVisible(null);
    }, 300); // Shorter delay to prevent premature hiding
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
                            <li>Item 1</li>
                            <li>Item 2</li>
                            <li>Item 3</li>
                          </ul>
                        </div>
                        <div className="custom-dropdown_images">
                          <img src="image1.jpg" alt="Image 1" style={{ width: '100%', height: 'auto' }} />
                          <img src="image2.jpg" alt="Image 2" style={{ width: '100%', height: 'auto' }} />
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
                            <li>Item A</li>
                            <li>Item B</li>
                            <li>Item C</li>
                          </ul>
                        </div>
                        <div className="custom-dropdown_images">
                          <img src="imageA.jpg" alt="Image A" style={{ width: '100%', height: 'auto' }} />
                          <img src="imageB.jpg" alt="Image B" style={{ width: '100%', height: 'auto' }} />
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
                          <li>Media Item 1</li>
                          <li>Media Item 2</li>
                        </ul>
                      </div>
                      <div className="custom-dropdown_images">
                        <img src="media1.jpg" alt="Media 1" style={{ width: '100%', height: 'auto' }} />
                        <img src="media2.jpg" alt="Media 2" style={{ width: '100%', height: 'auto' }} />
                      </div>
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
